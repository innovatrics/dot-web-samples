var Ze, C, ur, fe, bn, fr, dr, _r, on, Ht, zt, pr, je = {}, hr = [], So = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ye = Array.isArray;
function q(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function an(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function L(e, t, n) {
  var r, o, i, a = {};
  for (i in t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ze.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) a[i] === void 0 && (a[i] = e.defaultProps[i]);
  return Ue(e, a, r, o, null);
}
function Ue(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++ur, __i: -1, __u: 0 };
  return o == null && C.vnode != null && C.vnode(i), i;
}
function Eo() {
  return { current: null };
}
function z(e) {
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
  (!e.__d && (e.__d = !0) && fe.push(e) && !dt.__r++ || bn != C.debounceRendering) && ((bn = C.debounceRendering) || fr)(dt);
}
function dt() {
  for (var e, t, n, r, o, i, a, s = 1; fe.length; ) fe.length > s && fe.sort(dr), e = fe.shift(), s = fe.length, e.__d && (n = void 0, r = void 0, o = (r = (t = e).__v).__e, i = [], a = [], t.__P && ((n = q({}, r)).__v = r.__v + 1, C.vnode && C.vnode(n), sn(t.__P, n, r, t.__n, t.__P.namespaceURI, 32 & r.__u ? [o] : null, i, o ?? be(r), !!(32 & r.__u), a), n.__v = r.__v, n.__.__k[n.__i] = n, vr(i, n, a), r.__e = r.__ = null, n.__e != o && mr(n)));
  dt.__r = 0;
}
function gr(e, t, n, r, o, i, a, s, u, l, f) {
  var c, p, d, h, y, S, g, m = r && r.__k || hr, b = t.length;
  for (u = wo(n, t, m, u, b), c = 0; c < b; c++) (d = n.__k[c]) != null && (p = d.__i == -1 ? je : m[d.__i] || je, d.__i = c, S = sn(e, d, p, o, i, a, s, u, l, f), h = d.__e, d.ref && p.ref != d.ref && (p.ref && cn(p.ref, null, d), f.push(d.ref, d.__c || h, d)), y == null && h != null && (y = h), (g = !!(4 & d.__u)) || p.__k === d.__k ? u = yr(d, u, e, g) : typeof d.type == "function" && S !== void 0 ? u = S : h && (u = h.nextSibling), d.__u &= -7);
  return n.__e = y, u;
}
function wo(e, t, n, r, o) {
  var i, a, s, u, l, f = n.length, c = f, p = 0;
  for (e.__k = new Array(o), i = 0; i < o; i++) (a = t[i]) != null && typeof a != "boolean" && typeof a != "function" ? (typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? a = e.__k[i] = Ue(null, a, null, null, null) : Ye(a) ? a = e.__k[i] = Ue(z, { children: a }, null, null, null) : a.constructor == null && a.__b > 0 ? a = e.__k[i] = Ue(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : e.__k[i] = a, u = i + p, a.__ = e, a.__b = e.__b + 1, s = null, (l = a.__i = bo(a, n, u, c)) != -1 && (c--, (s = n[l]) && (s.__u |= 2)), s == null || s.__v == null ? (l == -1 && (o > f ? p-- : o < f && p++), typeof a.type != "function" && (a.__u |= 4)) : l != u && (l == u - 1 ? p-- : l == u + 1 ? p++ : (l > u ? p-- : p++, a.__u |= 4))) : e.__k[i] = null;
  if (c) for (i = 0; i < f; i++) (s = n[i]) != null && (2 & s.__u) == 0 && (s.__e == r && (r = be(s)), Sr(s, s));
  return r;
}
function yr(e, t, n, r) {
  var o, i;
  if (typeof e.type == "function") {
    for (o = e.__k, i = 0; o && i < o.length; i++) o[i] && (o[i].__ = e, t = yr(o[i], t, n, r));
    return t;
  }
  e.__e != t && (r && (t && e.type && !t.parentNode && (t = be(e)), n.insertBefore(e.__e, t || null)), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function te(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Ye(e) ? e.some(function(n) {
    te(n, t);
  }) : t.push(e)), t;
}
function bo(e, t, n, r) {
  var o, i, a, s = e.key, u = e.type, l = t[n], f = l != null && (2 & l.__u) == 0;
  if (l === null && s == null || f && s == l.key && u == l.type) return n;
  if (r > (f ? 1 : 0)) {
    for (o = n - 1, i = n + 1; o >= 0 || i < t.length; ) if ((l = t[a = o >= 0 ? o-- : i++]) != null && (2 & l.__u) == 0 && s == l.key && u == l.type) return a;
  }
  return -1;
}
function $n(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || So.test(t) ? n : n + "px";
}
function et(e, t, n, r, o) {
  var i, a;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || $n(e.style, t, "");
    if (n) for (t in n) r && n[t] == r[t] || $n(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace(_r, "$1")), a = t.toLowerCase(), t = a in e || t == "onFocusOut" || t == "onFocusIn" ? a.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = on, e.addEventListener(t, i ? zt : Ht, i)) : e.removeEventListener(t, i ? zt : Ht, i);
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
function On(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t.t == null) t.t = on++;
      else if (t.t < n.u) return;
      return n(C.event ? C.event(t) : t);
    }
  };
}
function sn(e, t, n, r, o, i, a, s, u, l) {
  var f, c, p, d, h, y, S, g, m, b, O, N, w, v, D, B, Ae, W = t.type;
  if (t.constructor != null) return null;
  128 & n.__u && (u = !!(32 & n.__u), i = [s = t.__e = n.__e]), (f = C.__b) && f(t);
  e: if (typeof W == "function") try {
    if (g = t.props, m = "prototype" in W && W.prototype.render, b = (f = W.contextType) && r[f.__c], O = f ? b ? b.props.value : f.__ : r, n.__c ? S = (c = t.__c = n.__c).__ = c.__E : (m ? t.__c = c = new W(g, O) : (t.__c = c = new V(g, O), c.constructor = W, c.render = Oo), b && b.sub(c), c.state || (c.state = {}), c.__n = r, p = c.__d = !0, c.__h = [], c._sb = []), m && c.__s == null && (c.__s = c.state), m && W.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = q({}, c.__s)), q(c.__s, W.getDerivedStateFromProps(g, c.__s))), d = c.props, h = c.state, c.__v = t, p) m && W.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), m && c.componentDidMount != null && c.__h.push(c.componentDidMount);
    else {
      if (m && W.getDerivedStateFromProps == null && g !== d && c.componentWillReceiveProps != null && c.componentWillReceiveProps(g, O), t.__v == n.__v || !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(g, c.__s, O) === !1) {
        for (t.__v != n.__v && (c.props = g, c.state = c.__s, c.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(oe) {
          oe && (oe.__ = t);
        }), N = 0; N < c._sb.length; N++) c.__h.push(c._sb[N]);
        c._sb = [], c.__h.length && a.push(c);
        break e;
      }
      c.componentWillUpdate != null && c.componentWillUpdate(g, c.__s, O), m && c.componentDidUpdate != null && c.__h.push(function() {
        c.componentDidUpdate(d, h, y);
      });
    }
    if (c.context = O, c.props = g, c.__P = e, c.__e = !1, w = C.__r, v = 0, m) {
      for (c.state = c.__s, c.__d = !1, w && w(t), f = c.render(c.props, c.state, c.context), D = 0; D < c._sb.length; D++) c.__h.push(c._sb[D]);
      c._sb = [];
    } else do
      c.__d = !1, w && w(t), f = c.render(c.props, c.state, c.context), c.state = c.__s;
    while (c.__d && ++v < 25);
    c.state = c.__s, c.getChildContext != null && (r = q(q({}, r), c.getChildContext())), m && !p && c.getSnapshotBeforeUpdate != null && (y = c.getSnapshotBeforeUpdate(d, h)), B = f, f != null && f.type === z && f.key == null && (B = Cr(f.props.children)), s = gr(e, Ye(B) ? B : [B], t, n, r, o, i, a, s, u, l), c.base = t.__e, t.__u &= -161, c.__h.length && a.push(c), S && (c.__E = c.__ = null);
  } catch (oe) {
    if (t.__v = null, u || i != null) if (oe.then) {
      for (t.__u |= u ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
      i[i.indexOf(s)] = null, t.__e = s;
    } else {
      for (Ae = i.length; Ae--; ) an(i[Ae]);
      Bt(t);
    }
    else t.__e = n.__e, t.__k = n.__k, oe.then || Bt(t);
    C.__e(oe, t, n);
  }
  else i == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : s = t.__e = $o(n.__e, t, n, r, o, i, a, u, l);
  return (f = C.diffed) && f(t), 128 & t.__u ? void 0 : s;
}
function Bt(e) {
  e && e.__c && (e.__c.__e = !0), e && e.__k && e.__k.forEach(Bt);
}
function vr(e, t, n) {
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
function Cr(e) {
  return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : Ye(e) ? e.map(Cr) : q({}, e);
}
function $o(e, t, n, r, o, i, a, s, u) {
  var l, f, c, p, d, h, y, S = n.props || je, g = t.props, m = t.type;
  if (m == "svg" ? o = "http://www.w3.org/2000/svg" : m == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (l = 0; l < i.length; l++) if ((d = i[l]) && "setAttribute" in d == !!m && (m ? d.localName == m : d.nodeType == 3)) {
      e = d, i[l] = null;
      break;
    }
  }
  if (e == null) {
    if (m == null) return document.createTextNode(g);
    e = document.createElementNS(o, m, g.is && g), s && (C.__m && C.__m(t, i), s = !1), i = null;
  }
  if (m == null) S === g || s && e.data == g || (e.data = g);
  else {
    if (i = i && Ze.call(e.childNodes), !s && i != null) for (S = {}, l = 0; l < e.attributes.length; l++) S[(d = e.attributes[l]).name] = d.value;
    for (l in S) if (d = S[l], l != "children") {
      if (l == "dangerouslySetInnerHTML") c = d;
      else if (!(l in g)) {
        if (l == "value" && "defaultValue" in g || l == "checked" && "defaultChecked" in g) continue;
        et(e, l, null, d, o);
      }
    }
    for (l in g) d = g[l], l == "children" ? p = d : l == "dangerouslySetInnerHTML" ? f = d : l == "value" ? h = d : l == "checked" ? y = d : s && typeof d != "function" || S[l] === d || et(e, l, d, S[l], o);
    if (f) s || c && (f.__html == c.__html || f.__html == e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (c && (e.innerHTML = ""), gr(t.type == "template" ? e.content : e, Ye(p) ? p : [p], t, n, r, m == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, a, i ? i[0] : n.__k && be(n, 0), s, u), i != null) for (l = i.length; l--; ) an(i[l]);
    s || (l = "value", m == "progress" && h == null ? e.removeAttribute("value") : h != null && (h !== e[l] || m == "progress" && !h || m == "option" && h != S[l]) && et(e, l, h, S[l], o), l = "checked", y != null && y != e[l] && et(e, l, y, S[l], o));
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
function Sr(e, t, n) {
  var r, o;
  if (C.unmount && C.unmount(e), (r = e.ref) && (r.current && r.current != e.__e || cn(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (i) {
      C.__e(i, t);
    }
    r.base = r.__P = null;
  }
  if (r = e.__k) for (o = 0; o < r.length; o++) r[o] && Sr(r[o], t, n || typeof e.type != "function");
  n || an(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Oo(e, t, n) {
  return this.constructor(e, n);
}
function ce(e, t, n) {
  var r, o, i, a;
  t == document && (t = document.documentElement), C.__ && C.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], a = [], sn(t, e = (!r && n || t).__k = L(z, null, [e]), o || je, je, t.namespaceURI, !r && n ? [n] : o ? null : t.firstChild ? Ze.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, a), vr(i, e, a);
}
function ln(e, t) {
  ce(e, t, ln);
}
function un(e, t, n) {
  var r, o, i, a, s = q({}, e.props);
  for (i in e.type && e.type.defaultProps && (a = e.type.defaultProps), t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i] === void 0 && a != null ? a[i] : t[i];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? Ze.call(arguments, 2) : n), Ue(e.type, s, r || e.key, o || e.ref, null);
}
function Er(e) {
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
  return t.__c = "__cC" + pr++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(n, r) {
    return n.children(r);
  }).contextType = t, t;
}
Ze = hr.slice, C = { __e: function(e, t, n, r) {
  for (var o, i, a; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), a = o.__d), a) return o.__E = o;
  } catch (s) {
    e = s;
  }
  throw e;
} }, ur = 0, V.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = q({}, this.state), typeof e == "function" && (e = e(q({}, n), this.props)), e && q(n, e), e != null && this.__v && (t && this._sb.push(t), Ut(this));
}, V.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ut(this));
}, V.prototype.render = z, fe = [], fr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, dr = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, dt.__r = 0, _r = /(PointerCapture)$|Capture$/i, on = 0, Ht = On(!1), zt = On(!0), pr = 0;
function _t() {
  return _t = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, _t.apply(this, arguments);
}
function wr(e, t) {
  if (e == null) return {};
  var n, r, o = {}, i = Object.keys(e);
  for (r = 0; r < i.length; r++) t.indexOf(n = i[r]) >= 0 || (o[n] = e[n]);
  return o;
}
var ko = ["context", "children"], No = ["useFragment"];
function To(e, t, n, r) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = e, i._root = i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = function() {
    Io.call(this, r);
  }, o.prototype.attributeChangedCallback = xo, o.prototype.disconnectedCallback = Ao, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = n, e.formAssociated && (o.formAssociated = !0), n.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom ? this._vdom.props[i] : this._props[i];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(i, null, a) : (this._props || (this._props = {}), this._props[i] = a);
      var s = typeof a;
      a != null && s !== "string" && s !== "boolean" && s !== "number" || this.setAttribute(i, a);
    } });
  }), customElements.define(t, o), o;
}
function Ro(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, n = wr(e, ko);
  return un(t, n);
}
function Io(e) {
  var t = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(t), this._vdom = L(Ro, _t({}, this._props, { context: t.detail.context }), $r(this, this._vdomComponent, e)), (this.hasAttribute("hydrate") ? ln : ce)(this._vdom, this._root);
}
function br(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function xo(e, t, n) {
  if (this._vdom) {
    var r = {};
    r[e] = n = n ?? void 0, r[br(e)] = n, this._vdom = un(this._vdom, r), ce(this._vdom, this._root);
  }
}
function Ao() {
  ce(this._vdom = null, this._root);
}
function kn(e, t) {
  var n = this, r = e.useFragment, o = wr(e, No);
  return L(r ? z : "slot", _t({}, o, { ref: function(i) {
    i ? (n.ref = i, n._listener || (n._listener = function(a) {
      a.stopPropagation(), a.detail.context = t;
    }, i.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function $r(e, t, n) {
  if (e.nodeType === 3) return e.data;
  if (e.nodeType !== 1) return null;
  var r = [], o = {}, i = 0, a = e.attributes, s = e.childNodes;
  for (i = a.length; i--; ) a[i].name !== "slot" && (o[a[i].name] = a[i].value, o[br(a[i].name)] = a[i].value);
  for (i = s.length; i--; ) {
    var u = $r(s[i], null, n), l = s[i].slot;
    l ? o[l] = L(kn, { name: l }, u) : r[i] = u;
  }
  var f = !(!n || !n.shadow), c = t ? L(kn, { useFragment: !f }, r) : r;
  return !f && t && (e.innerHTML = ""), L(t || e.nodeName.toLowerCase(), o, c);
}
var Po = 0;
function _(e, t, n, r, o, i) {
  t || (t = {});
  var a, s, u = t;
  if ("ref" in u) for (s in u = {}, t) s == "ref" ? a = t[s] : u[s] = t[s];
  var l = { type: e, props: u, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Po, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (a = e.defaultProps)) for (s in a) u[s] === void 0 && (u[s] = a[s]);
  return C.vnode && C.vnode(l), l;
}
const Nn = {
  SWITCH_CAMERA: "switch-camera",
  TOGGLE_MIRROR: "toggle-mirror"
}, Ge = {
  DETECTION_CHANGED: "multi-range-auto-capture:detection-changed",
  CAMERA_PROPS_CHANGED: "multi-range-auto-capture:camera-props-changed",
  CONTROL: "multi-range-auto-capture:control",
  INSTRUCTION_CHANGED: "multi-range-auto-capture:instruction-changed",
  VIDEO_ELEMENT_SIZE: "multi-range-auto-capture:video-element-size",
  CHALLENGE_VALUE_CHANGED: "multi-range-auto-capture:challenge-value-changed",
  STATE_CHANGED: "multi-range-auto-capture:state-changed"
}, F = {
  LOADING: "loading",
  ERROR: "error",
  WAITING: "waiting",
  RUNNING: "running",
  COMPLETE: "complete"
}, Tn = {
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
  LEFT_EYE_NOT_PRESENT: `left_${Tn.EYE_NOT_PRESENT}`,
  RIGHT_EYE_NOT_PRESENT: `right_${Tn.EYE_NOT_PRESENT}`,
  MOUTH_NOT_PRESENT: "mouth_not_present",
  MOUTH_SCORE_TOO_HIGH: "mouth_score_too_high",
  MOUTH_SCORE_TOO_LOW: "mouth_score_too_low"
}, pt = {
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
var le, R, It, Rn, $e = 0, Or = [], I = C, In = I.__b, xn = I.__r, An = I.diffed, Pn = I.__c, Ln = I.unmount, Mn = I.__;
function Re(e, t) {
  I.__h && I.__h(R, e, $e || t), $e = 0;
  var n = R.__H || (R.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function H(e) {
  return $e = 1, fn(Tr, e);
}
function fn(e, t, n) {
  var r = Re(le++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Tr(void 0, t), function(s) {
    var u = r.__N ? r.__N[0] : r.__[0], l = r.t(u, s);
    u !== l && (r.__N = [l, r.__[1]], r.__c.setState({}));
  }], r.__c = R, !R.__f)) {
    var o = function(s, u, l) {
      if (!r.__c.__H) return !0;
      var f = r.__c.__H.__.filter(function(p) {
        return !!p.__c;
      });
      if (f.every(function(p) {
        return !p.__N;
      })) return !i || i.call(this, s, u, l);
      var c = r.__c.props !== s;
      return f.forEach(function(p) {
        if (p.__N) {
          var d = p.__[0];
          p.__ = p.__N, p.__N = void 0, d !== p.__[0] && (c = !0);
        }
      }), i && i.call(this, s, u, l) || c;
    };
    R.__f = !0;
    var i = R.shouldComponentUpdate, a = R.componentWillUpdate;
    R.componentWillUpdate = function(s, u, l) {
      if (this.__e) {
        var f = i;
        i = void 0, o(s, u, l), i = f;
      }
      a && a.call(this, s, u, l);
    }, R.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function K(e, t) {
  var n = Re(le++, 3);
  !I.__s && dn(n.__H, t) && (n.__ = e, n.u = t, R.__H.__h.push(n));
}
function Ie(e, t) {
  var n = Re(le++, 4);
  !I.__s && dn(n.__H, t) && (n.__ = e, n.u = t, R.__h.push(n));
}
function qe(e) {
  return $e = 5, ne(function() {
    return { current: e };
  }, []);
}
function kr(e, t, n) {
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
function ne(e, t) {
  var n = Re(le++, 7);
  return dn(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function se(e, t) {
  return $e = 8, ne(function() {
    return e;
  }, t);
}
function Xe(e) {
  var t = R.context[e.__c], n = Re(le++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(R)), t.props.value) : e.__;
}
function ht(e, t) {
  I.useDebugValue && I.useDebugValue(t ? t(e) : e);
}
function Nr() {
  var e = Re(le++, 11);
  if (!e.__) {
    for (var t = R.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function Lo() {
  for (var e; e = Or.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(it), e.__H.__h.forEach(Wt), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], I.__e(t, e.__v);
  }
}
I.__b = function(e) {
  R = null, In && In(e);
}, I.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Mn && Mn(e, t);
}, I.__r = function(e) {
  xn && xn(e), le = 0;
  var t = (R = e.__c).__H;
  t && (It === R ? (t.__h = [], R.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.forEach(it), t.__h.forEach(Wt), t.__h = [], le = 0)), It = R;
}, I.diffed = function(e) {
  An && An(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Or.push(t) !== 1 && Rn === I.requestAnimationFrame || ((Rn = I.requestAnimationFrame) || Mo)(Lo)), t.__H.__.forEach(function(n) {
    n.u && (n.__H = n.u), n.u = void 0;
  })), It = R = null;
}, I.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(it), n.__h = n.__h.filter(function(r) {
        return !r.__ || Wt(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], I.__e(r, n.__v);
    }
  }), Pn && Pn(e, t);
}, I.unmount = function(e) {
  Ln && Ln(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      it(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && I.__e(t, n.__v));
};
var Dn = typeof requestAnimationFrame == "function";
function Mo(e) {
  var t, n = function() {
    clearTimeout(r), Dn && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 35);
  Dn && (t = requestAnimationFrame(n));
}
function it(e) {
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
function Tr(e, t) {
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
function me(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function Do(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Fo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ho = /* @__PURE__ */ Do(
  function(e) {
    return Fo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Rr(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function jt(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function Ir(e, t) {
  var n = t(), r = H({ t: { __: n, u: t } }), o = r[0].t, i = r[1];
  return Ie(function() {
    o.__ = n, o.u = t, xt(o) && i({ t: o });
  }, [e, n, t]), K(function() {
    return xt(o) && i({ t: o }), e(function() {
      xt(o) && i({ t: o });
    });
  }, [e]), n;
}
function xt(e) {
  var t, n, r = e.u, o = e.__;
  try {
    var i = r();
    return !((t = o) === (n = i) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
}
function xr(e) {
  e();
}
function Ar(e) {
  return e;
}
function Pr() {
  return [!1, xr];
}
var Lr = Ie;
function Gt(e, t) {
  this.props = e, this.context = t;
}
function zo(e, t) {
  function n(o) {
    var i = this.props.ref, a = i == o.ref;
    return !a && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !a : jt(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, L(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r.type = e, r;
}
(Gt.prototype = new V()).isPureReactComponent = !0, Gt.prototype.shouldComponentUpdate = function(e, t) {
  return jt(this.props, e) || jt(this.state, t);
};
var Fn = C.__b;
C.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Fn && Fn(e);
};
var Uo = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.forward_ref") || 3911;
function Bo(e) {
  function t(n) {
    var r = Rr({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = Uo, t.render = e, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Hn = function(e, t) {
  return e == null ? null : te(te(e).map(t));
}, Wo = { map: Hn, forEach: Hn, count: function(e) {
  return e ? te(e).length : 0;
}, only: function(e) {
  var t = te(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: te }, jo = C.__e;
C.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  jo(e, t, n, r);
};
var zn = C.unmount;
function Mr(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = Rr({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return Mr(r, t, n);
  })), e;
}
function Dr(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return Dr(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function at() {
  this.__u = 0, this.o = null, this.__b = null;
}
function Fr(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Go(e) {
  var t, n, r, o = null;
  function i(a) {
    if (t || (t = e()).then(function(s) {
      s && (o = s.default || s), r = !0;
    }, function(s) {
      n = s, r = !0;
    }), n) throw n;
    if (!r) throw t;
    return o ? L(o, a) : null;
  }
  return i.displayName = "Lazy", i.__f = !0, i;
}
function Fe() {
  this.i = null, this.l = null;
}
C.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), zn && zn(e);
}, (at.prototype = new V()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.o == null && (r.o = []), r.o.push(n);
  var o = Fr(r.__v), i = !1, a = function() {
    i || (i = !0, n.__R = null, o ? o(s) : s());
  };
  n.__R = a;
  var s = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var u = r.state.__a;
        r.__v.__k[0] = Dr(u, u.__c.__P, u.__c.__O);
      }
      var l;
      for (r.setState({ __a: r.__b = null }); l = r.o.pop(); ) l.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(a, a);
}, at.prototype.componentWillUnmount = function() {
  this.o = [];
}, at.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Mr(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && L(z, null, e.fallback);
  return o && (o.__u &= -33), [L(z, null, t.__a ? null : e.children), o];
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
function Zo(e) {
  var t = this, n = e.h;
  if (t.componentWillUnmount = function() {
    ce(null, t.v), t.v = null, t.h = null;
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
  ce(L(Vo, { context: t.context }, e.__v), t.v);
}
function Yo(e, t) {
  var n = L(Zo, { __v: e, h: t });
  return n.containerInfo = t, n;
}
(Fe.prototype = new V()).__a = function(e) {
  var t = this, n = Fr(t.__v), r = t.l.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), Un(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, Fe.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = te(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; ) this.l.set(t[n], this.i = [1, 0, this.i]);
  return e.children;
}, Fe.prototype.componentDidUpdate = Fe.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(t, n) {
    Un(e, n, t);
  });
};
var Hr = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || 60103, qo = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Xo = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Ko = /[A-Z0-9]/g, Jo = typeof document < "u", Qo = function(e) {
  return (typeof Symbol < "u" && typeof /* @__PURE__ */ Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function ei(e, t, n) {
  return t.__k == null && (t.textContent = ""), ce(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function ti(e, t, n) {
  return ln(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
V.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(V.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Bn = C.event;
function ni() {
}
function ri() {
  return this.cancelBubble;
}
function oi() {
  return this.defaultPrevented;
}
C.event = function(e) {
  return Bn && (e = Bn(e)), e.persist = ni, e.isPropagationStopped = ri, e.isDefaultPrevented = oi, e.nativeEvent = e;
};
var _n, ii = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Wn = C.vnode;
C.vnode = function(e) {
  typeof e.type == "string" && (function(t) {
    var n = t.props, r = t.type, o = {}, i = r.indexOf("-") === -1;
    for (var a in n) {
      var s = n[a];
      if (!(a === "value" && "defaultValue" in n && s == null || Jo && a === "children" && r === "noscript" || a === "class" || a === "className")) {
        var u = a.toLowerCase();
        a === "defaultValue" && "value" in n && n.value == null ? a = "value" : a === "download" && s === !0 ? s = "" : u === "translate" && s === "no" ? s = !1 : u[0] === "o" && u[1] === "n" ? u === "ondoubleclick" ? a = "ondblclick" : u !== "onchange" || r !== "input" && r !== "textarea" || Qo(n.type) ? u === "onfocus" ? a = "onfocusin" : u === "onblur" ? a = "onfocusout" : Xo.test(a) && (a = u) : u = a = "oninput" : i && qo.test(a) ? a = a.replace(Ko, "-$&").toLowerCase() : s === null && (s = void 0), u === "oninput" && o[a = u] && (a = "oninputCapture"), o[a] = s;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = te(n.children).forEach(function(l) {
      l.props.selected = o.value.indexOf(l.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = te(n.children).forEach(function(l) {
      l.props.selected = o.multiple ? o.defaultValue.indexOf(l.props.value) != -1 : o.defaultValue == l.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", ii)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  })(e), e.$$typeof = Hr, Wn && Wn(e);
};
var jn = C.__r;
C.__r = function(e) {
  jn && jn(e), _n = e.__c;
};
var Gn = C.diffed;
C.diffed = function(e) {
  Gn && Gn(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), _n = null;
};
var ai = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return _n.__n[e.__c].props.value;
}, useCallback: se, useContext: Xe, useDebugValue: ht, useDeferredValue: Ar, useEffect: K, useId: Nr, useImperativeHandle: kr, useInsertionEffect: Lr, useLayoutEffect: Ie, useMemo: ne, useReducer: fn, useRef: qe, useState: H, useSyncExternalStore: Ir, useTransition: Pr } } };
function si(e) {
  return L.bind(null, e);
}
function vt(e) {
  return !!e && e.$$typeof === Hr;
}
function ci(e) {
  return vt(e) && e.type === z;
}
function li(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function ui(e) {
  return vt(e) ? un.apply(null, arguments) : e;
}
function fi(e) {
  return !!e.__k && (ce(null, e), !0);
}
function di(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var _i = function(e, t) {
  return e(t);
}, pi = function(e, t) {
  return e(t);
}, hi = z, mi = vt, re = { useState: H, useId: Nr, useReducer: fn, useEffect: K, useLayoutEffect: Ie, useInsertionEffect: Lr, useTransition: Pr, useDeferredValue: Ar, useSyncExternalStore: Ir, startTransition: xr, useRef: qe, useImperativeHandle: kr, useMemo: ne, useCallback: se, useContext: Xe, useDebugValue: ht, version: "18.3.1", Children: Wo, render: ei, hydrate: ti, unmountComponentAtNode: fi, createPortal: Yo, createElement: L, createContext: Er, createFactory: si, cloneElement: ui, createRef: Eo, Fragment: z, isValidElement: vt, isElement: mi, isFragment: ci, isMemo: li, findDOMNode: di, Component: V, PureComponent: Gt, memo: zo, forwardRef: Bo, flushSync: pi, unstable_batchedUpdates: _i, StrictMode: hi, Suspense: at, SuspenseList: Fe, lazy: Go, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ai };
function gi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var At, Vn;
function yi() {
  return Vn || (Vn = 1, At = function(t, n, r, o) {
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
    for (var u = Object.prototype.hasOwnProperty.bind(n), l = 0; l < a.length; l++) {
      var f = a[l];
      if (!u(f))
        return !1;
      var c = t[f], p = n[f];
      if (i = r ? r.call(o, c, p, f) : void 0, i === !1 || i === void 0 && c !== p)
        return !1;
    }
    return !0;
  }), At;
}
var vi = yi();
const Ci = /* @__PURE__ */ gi(vi);
var T = "-ms-", Be = "-moz-", k = "-webkit-", zr = "comm", Ct = "rule", pn = "decl", Si = "@import", Ur = "@keyframes", Ei = "@layer", Br = Math.abs, hn = String.fromCharCode, Vt = Object.assign;
function wi(e, t) {
  return A(e, 0) ^ 45 ? (((t << 2 ^ A(e, 0)) << 2 ^ A(e, 1)) << 2 ^ A(e, 2)) << 2 ^ A(e, 3) : 0;
}
function Wr(e) {
  return e.trim();
}
function Q(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function E(e, t, n) {
  return e.replace(t, n);
}
function st(e, t, n) {
  return e.indexOf(t, n);
}
function A(e, t) {
  return e.charCodeAt(t) | 0;
}
function Oe(e, t, n) {
  return e.slice(t, n);
}
function Y(e) {
  return e.length;
}
function jr(e) {
  return e.length;
}
function He(e, t) {
  return t.push(e), e;
}
function bi(e, t) {
  return e.map(t).join("");
}
function Zn(e, t) {
  return e.filter(function(n) {
    return !Q(n, t);
  });
}
var St = 1, ke = 1, Gr = 0, G = 0, x = 0, xe = "";
function Et(e, t, n, r, o, i, a, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: St, column: ke, length: a, return: "", siblings: s };
}
function ae(e, t) {
  return Vt(Et("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Ee(e) {
  for (; e.root; )
    e = ae(e.root, { children: [e] });
  He(e, e.siblings);
}
function $i() {
  return x;
}
function Oi() {
  return x = G > 0 ? A(xe, --G) : 0, ke--, x === 10 && (ke = 1, St--), x;
}
function Z() {
  return x = G < Gr ? A(xe, G++) : 0, ke++, x === 10 && (ke = 1, St++), x;
}
function pe() {
  return A(xe, G);
}
function ct() {
  return G;
}
function wt(e, t) {
  return Oe(xe, e, t);
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
function ki(e) {
  return St = ke = 1, Gr = Y(xe = e), G = 0, [];
}
function Ni(e) {
  return xe = "", e;
}
function Pt(e) {
  return Wr(wt(G - 1, Yt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ti(e) {
  for (; (x = pe()) && x < 33; )
    Z();
  return Zt(e) > 2 || Zt(x) > 3 ? "" : " ";
}
function Ri(e, t) {
  for (; --t && Z() && !(x < 48 || x > 102 || x > 57 && x < 65 || x > 70 && x < 97); )
    ;
  return wt(e, ct() + (t < 6 && pe() == 32 && Z() == 32));
}
function Yt(e) {
  for (; Z(); )
    switch (x) {
      // ] ) " '
      case e:
        return G;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Yt(x);
        break;
      // (
      case 40:
        e === 41 && Yt(e);
        break;
      // \
      case 92:
        Z();
        break;
    }
  return G;
}
function Ii(e, t) {
  for (; Z() && e + x !== 57; )
    if (e + x === 84 && pe() === 47)
      break;
  return "/*" + wt(t, G - 1) + "*" + hn(e === 47 ? e : Z());
}
function xi(e) {
  for (; !Zt(pe()); )
    Z();
  return wt(e, G);
}
function Ai(e) {
  return Ni(lt("", null, null, null, [""], e = ki(e), 0, [0], e));
}
function lt(e, t, n, r, o, i, a, s, u) {
  for (var l = 0, f = 0, c = a, p = 0, d = 0, h = 0, y = 1, S = 1, g = 1, m = 0, b = "", O = o, N = i, w = r, v = b; S; )
    switch (h = m, m = Z()) {
      // (
      case 40:
        if (h != 108 && A(v, c - 1) == 58) {
          st(v += E(Pt(m), "&", "&\f"), "&\f", Br(l ? s[l - 1] : 0)) != -1 && (g = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        v += Pt(m);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        v += Ti(h);
        break;
      // \
      case 92:
        v += Ri(ct() - 1, 7);
        continue;
      // /
      case 47:
        switch (pe()) {
          case 42:
          case 47:
            He(Pi(Ii(Z(), ct()), t, n, u), u);
            break;
          default:
            v += "/";
        }
        break;
      // {
      case 123 * y:
        s[l++] = Y(v) * g;
      // } ; \0
      case 125 * y:
      case 59:
      case 0:
        switch (m) {
          // \0 }
          case 0:
          case 125:
            S = 0;
          // ;
          case 59 + f:
            g == -1 && (v = E(v, /\f/g, "")), d > 0 && Y(v) - c && He(d > 32 ? qn(v + ";", r, n, c - 1, u) : qn(E(v, " ", "") + ";", r, n, c - 2, u), u);
            break;
          // @ ;
          case 59:
            v += ";";
          // { rule/at-rule
          default:
            if (He(w = Yn(v, t, n, l, f, o, s, b, O = [], N = [], c, i), i), m === 123)
              if (f === 0)
                lt(v, t, w, w, O, i, c, s, N);
              else
                switch (p === 99 && A(v, 3) === 110 ? 100 : p) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    lt(e, w, w, r && He(Yn(e, w, w, 0, 0, o, s, b, o, O = [], c, N), N), o, N, c, s, r ? O : N);
                    break;
                  default:
                    lt(v, w, w, w, [""], N, 0, s, N);
                }
        }
        l = f = d = 0, y = g = 1, b = v = "", c = a;
        break;
      // :
      case 58:
        c = 1 + Y(v), d = h;
      default:
        if (y < 1) {
          if (m == 123)
            --y;
          else if (m == 125 && y++ == 0 && Oi() == 125)
            continue;
        }
        switch (v += hn(m), m * y) {
          // &
          case 38:
            g = f > 0 ? 1 : (v += "\f", -1);
            break;
          // ,
          case 44:
            s[l++] = (Y(v) - 1) * g, g = 1;
            break;
          // @
          case 64:
            pe() === 45 && (v += Pt(Z())), p = pe(), f = c = Y(b = v += xi(ct())), m++;
            break;
          // -
          case 45:
            h === 45 && Y(v) == 2 && (y = 0);
        }
    }
  return i;
}
function Yn(e, t, n, r, o, i, a, s, u, l, f, c) {
  for (var p = o - 1, d = o === 0 ? i : [""], h = jr(d), y = 0, S = 0, g = 0; y < r; ++y)
    for (var m = 0, b = Oe(e, p + 1, p = Br(S = a[y])), O = e; m < h; ++m)
      (O = Wr(S > 0 ? d[m] + " " + b : E(b, /&\f/g, d[m]))) && (u[g++] = O);
  return Et(e, t, n, o === 0 ? Ct : s, u, l, f, c);
}
function Pi(e, t, n, r) {
  return Et(e, t, n, zr, hn($i()), Oe(e, 2, -2), 0, r);
}
function qn(e, t, n, r, o) {
  return Et(e, t, n, pn, Oe(e, 0, r), Oe(e, r + 1, -1), r, o);
}
function Vr(e, t, n) {
  switch (wi(e, t)) {
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
      return Be + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return k + e + Be + e + T + e + e;
    // writing-mode
    case 5936:
      switch (A(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return k + e + T + E(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return k + e + T + E(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return k + e + T + E(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
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
      return k + e + E(e, /(\w+).+(:[^]+)/, k + "box-$1$2" + T + "flex-$1$2") + e;
    // align-self
    case 5443:
      return k + e + T + "flex-item-" + E(e, /flex-|-self/g, "") + (Q(e, /flex-|baseline/) ? "" : T + "grid-row-" + E(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return k + e + T + "flex-line-pack" + E(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return k + e + T + E(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return k + e + T + E(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return k + "box-" + E(e, "-grow", "") + k + e + T + E(e, "grow", "positive") + e;
    // transition
    case 4554:
      return k + E(e, /([^-])(transform)/g, "$1" + k + "$2") + e;
    // cursor
    case 6187:
      return E(E(E(e, /(zoom-|grab)/, k + "$1"), /(image-set)/, k + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return E(e, /(image-set\([^]*)/, k + "$1$`$1");
    // justify-content
    case 4968:
      return E(E(e, /(.+:)(flex-)?(.*)/, k + "box-pack:$3" + T + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + k + e + e;
    // justify-self
    case 4200:
      if (!Q(e, /flex-|baseline/)) return T + "grid-column-align" + Oe(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return T + E(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, Q(r.props, /grid-\w+-end/);
      }) ? ~st(e + (n = n[t].value), "span", 0) ? e : T + E(e, "-start", "") + e + T + "grid-row-span:" + (~st(n, "span", 0) ? Q(n, /\d+/) : +Q(n, /\d+/) - +Q(e, /\d+/)) + ";" : T + E(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return Q(r.props, /grid-\w+-start/);
      }) ? e : T + E(E(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return E(e, /(.+)-inline(.+)/, k + "$1$2") + e;
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
        switch (A(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (A(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return E(e, /(.+:)(.+)-([^]+)/, "$1" + k + "$2-$3$1" + Be + (A(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~st(e, "stretch", 0) ? Vr(E(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return E(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, a, s, u, l) {
        return T + o + ":" + i + l + (a ? T + o + "-span:" + (s ? u : +u - +i) + l : "") + e;
      });
    // position: sticky
    case 4949:
      if (A(e, t + 6) === 121)
        return E(e, ":", ":" + k) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (A(e, A(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return E(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + k + (A(e, 14) === 45 ? "inline-" : "") + "box$3$1" + k + "$2$3$1" + T + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return E(e, ":", ":" + T) + e;
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
function Li(e, t, n, r) {
  switch (e.type) {
    case Ei:
      if (e.children.length) break;
    case Si:
    case pn:
      return e.return = e.return || e.value;
    case zr:
      return "";
    case Ur:
      return e.return = e.value + "{" + mt(e.children, r) + "}";
    case Ct:
      if (!Y(e.value = e.props.join(","))) return "";
  }
  return Y(n = mt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Mi(e) {
  var t = jr(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function Di(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Fi(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case pn:
        e.return = Vr(e.value, e.length, n);
        return;
      case Ur:
        return mt([ae(e, { value: E(e.value, "@", "@" + k) })], r);
      case Ct:
        if (e.length)
          return bi(n = e.props, function(o) {
            switch (Q(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Ee(ae(e, { props: [E(o, /:(read-\w+)/, ":" + Be + "$1")] })), Ee(ae(e, { props: [o] })), Vt(e, { props: Zn(n, r) });
                break;
              // :placeholder
              case "::placeholder":
                Ee(ae(e, { props: [E(o, /:(plac\w+)/, ":" + k + "input-$1")] })), Ee(ae(e, { props: [E(o, /:(plac\w+)/, ":" + Be + "$1")] })), Ee(ae(e, { props: [E(o, /:(plac\w+)/, T + "input-$1")] })), Ee(ae(e, { props: [o] })), Vt(e, { props: Zn(n, r) });
                break;
            }
            return "";
          });
    }
}
var Hi = {
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
}, $ = {}, ge = typeof process < "u" && $ !== void 0 && ($.REACT_APP_SC_ATTR || $.SC_ATTR) || "data-styled", Zr = "active", Yr = "data-styled-version", bt = "6.1.19", mn = `/*!sc*/
`, gt = typeof window < "u" && typeof document < "u", zi = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && $ !== void 0 && $.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && $.REACT_APP_SC_DISABLE_SPEEDY !== "" ? $.REACT_APP_SC_DISABLE_SPEEDY !== "false" && $.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && $ !== void 0 && $.SC_DISABLE_SPEEDY !== void 0 && $.SC_DISABLE_SPEEDY !== "" ? $.SC_DISABLE_SPEEDY !== "false" && $.SC_DISABLE_SPEEDY : $.NODE_ENV !== "production"), Xn = /invalid hook call/i, tt = /* @__PURE__ */ new Set(), Ui = function(e, t) {
  if ($.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, o = console.error;
    try {
      var i = !0;
      console.error = function(a) {
        for (var s = [], u = 1; u < arguments.length; u++) s[u - 1] = arguments[u];
        Xn.test(a) ? (i = !1, tt.delete(r)) : o.apply(void 0, me([a], s, !1));
      }, qe(), i && !tt.has(r) && (console.warn(r), tt.add(r));
    } catch (a) {
      Xn.test(a.message) && tt.delete(r);
    } finally {
      console.error = o;
    }
  }
}, $t = Object.freeze([]), Ne = Object.freeze({});
function Bi(e, t, n) {
  return n === void 0 && (n = Ne), e.theme !== n.theme && e.theme || t || n.theme;
}
var qt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Wi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ji = /(^-|-$)/g;
function Kn(e) {
  return e.replace(Wi, "-").replace(ji, "");
}
var Gi = /(a)(d)/gi, nt = 52, Jn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Xt(e) {
  var t, n = "";
  for (t = Math.abs(e); t > nt; t = t / nt | 0) n = Jn(t % nt) + n;
  return (Jn(t % nt) + n).replace(Gi, "$1-$2");
}
var Lt, qr = 5381, de = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Xr = function(e) {
  return de(qr, e);
};
function Kr(e) {
  return Xt(Xr(e) >>> 0);
}
function Jr(e) {
  return $.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Mt(e) {
  return typeof e == "string" && ($.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Qr = typeof Symbol == "function" && Symbol.for, eo = Qr ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, Vi = Qr ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, Zi = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Yi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, to = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, qi = ((Lt = {})[Vi] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Lt[eo] = to, Lt);
function Qn(e) {
  return ("type" in (t = e) && t.type.$$typeof) === eo ? to : "$$typeof" in e ? qi[e.$$typeof] : Zi;
  var t;
}
var Xi = Object.defineProperty, Ki = Object.getOwnPropertyNames, er = Object.getOwnPropertySymbols, Ji = Object.getOwnPropertyDescriptor, Qi = Object.getPrototypeOf, tr = Object.prototype;
function no(e, t, n) {
  if (typeof t != "string") {
    if (tr) {
      var r = Qi(t);
      r && r !== tr && no(e, r, n);
    }
    var o = Ki(t);
    er && (o = o.concat(er(t)));
    for (var i = Qn(e), a = Qn(t), s = 0; s < o.length; ++s) {
      var u = o[s];
      if (!(u in Yi || n && n[u] || a && u in a || i && u in i)) {
        var l = Ji(t, u);
        try {
          Xi(e, u, l);
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
function gn(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function _e(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Kt(e, t) {
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
function yn(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var ea = $.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function X(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return $.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(ta.apply(void 0, me([ea[e]], t, !1)).trim());
}
var na = (function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
    return n;
  }, e.prototype.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; t >= i; ) if ((i <<= 1) < 0) throw X(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(r), this.length = i;
      for (var a = o; a < i; a++) this.groupSizes[a] = 0;
    }
    for (var s = this.indexOfGroup(t + 1), u = (a = 0, n.length); a < u; a++) this.tag.insertRule(s, n[a]) && (this.groupSizes[t]++, s++);
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
})(), ra = 1 << 30, ut = /* @__PURE__ */ new Map(), yt = /* @__PURE__ */ new Map(), ft = 1, rt = function(e) {
  if (ut.has(e)) return ut.get(e);
  for (; yt.has(ft); ) ft++;
  var t = ft++;
  if ($.NODE_ENV !== "production" && ((0 | t) < 0 || t > ra)) throw X(16, "".concat(t));
  return ut.set(e, t), yt.set(t, e), t;
}, oa = function(e, t) {
  ft = t + 1, ut.set(e, t), yt.set(t, e);
}, ia = "style[".concat(ge, "][").concat(Yr, '="').concat(bt, '"]'), aa = new RegExp("^".concat(ge, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), sa = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++) (r = o[i]) && e.registerName(t, r);
}, ca = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(mn), o = [], i = 0, a = r.length; i < a; i++) {
    var s = r[i].trim();
    if (s) {
      var u = s.match(aa);
      if (u) {
        var l = 0 | parseInt(u[1], 10), f = u[2];
        l !== 0 && (oa(f, l), sa(e, f, u[3]), e.getTag().insertRules(l, o)), o.length = 0;
      } else o.push(s);
    }
  }
}, nr = function(e) {
  for (var t = document.querySelectorAll(ia), n = 0, r = t.length; n < r; n++) {
    var o = t[n];
    o && o.getAttribute(ge) !== Zr && (ca(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function la() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var ro = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = (function(s) {
    var u = Array.from(s.querySelectorAll("style[".concat(ge, "]")));
    return u[u.length - 1];
  })(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ge, Zr), r.setAttribute(Yr, bt);
  var a = la();
  return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
}, ua = (function() {
  function e(t) {
    this.element = ro(t), this.element.appendChild(document.createTextNode("")), this.sheet = (function(n) {
      if (n.sheet) return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var a = r[o];
        if (a.ownerNode === n) return a;
      }
      throw X(17);
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
})(), fa = (function() {
  function e(t) {
    this.element = ro(t), this.nodes = this.element.childNodes, this.length = 0;
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
})(), da = (function() {
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
})(), rr = gt, _a = { isServer: !gt, useCSSOMInjection: !zi }, oo = (function() {
  function e(t, n, r) {
    t === void 0 && (t = Ne), n === void 0 && (n = {});
    var o = this;
    this.options = P(P({}, _a), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && gt && rr && (rr = !1, nr(this)), yn(this, function() {
      return (function(i) {
        for (var a = i.getTag(), s = a.length, u = "", l = function(c) {
          var p = (function(g) {
            return yt.get(g);
          })(c);
          if (p === void 0) return "continue";
          var d = i.names.get(p), h = a.getGroup(c);
          if (d === void 0 || !d.size || h.length === 0) return "continue";
          var y = "".concat(ge, ".g").concat(c, '[id="').concat(p, '"]'), S = "";
          d !== void 0 && d.forEach(function(g) {
            g.length > 0 && (S += "".concat(g, ","));
          }), u += "".concat(h).concat(y, '{content:"').concat(S, '"}').concat(mn);
        }, f = 0; f < s; f++) l(f);
        return u;
      })(o);
    });
  }
  return e.registerId = function(t) {
    return rt(t);
  }, e.prototype.rehydrate = function() {
    !this.server && gt && nr(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(P(P({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = (function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new da(o) : r ? new ua(o) : new fa(o);
    })(this.options), new na(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (rt(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(rt(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(rt(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
})(), pa = /&/g, ha = /^\s*\/\/.*$/gm;
function io(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = io(n.children, t)), n;
  });
}
function ao(e) {
  var t, n, r, o = e === void 0 ? Ne : e, i = o.options, a = i === void 0 ? Ne : i, s = o.plugins, u = s === void 0 ? $t : s, l = function(p, d, h) {
    return h.startsWith(n) && h.endsWith(n) && h.replaceAll(n, "").length > 0 ? ".".concat(t) : p;
  }, f = u.slice();
  f.push(function(p) {
    p.type === Ct && p.value.includes("&") && (p.props[0] = p.props[0].replace(pa, n).replace(r, l));
  }), a.prefix && f.push(Fi), f.push(Li);
  var c = function(p, d, h, y) {
    d === void 0 && (d = ""), h === void 0 && (h = ""), y === void 0 && (y = "&"), t = y, n = d, r = new RegExp("\\".concat(n, "\\b"), "g");
    var S = p.replace(ha, ""), g = Ai(h || d ? "".concat(h, " ").concat(d, " { ").concat(S, " }") : S);
    a.namespace && (g = io(g, a.namespace));
    var m = [];
    return mt(g, Mi(f.concat(Di(function(b) {
      return m.push(b);
    })))), m;
  };
  return c.hash = u.length ? u.reduce(function(p, d) {
    return d.name || X(15), de(p, d.name);
  }, qr).toString() : "", c;
}
var ma = new oo(), Qt = ao(), vn = re.createContext({ shouldForwardProp: void 0, styleSheet: ma, stylis: Qt });
vn.Consumer;
var ga = re.createContext(void 0);
function en() {
  return Xe(vn);
}
function ya(e) {
  var t = H(e.stylisPlugins), n = t[0], r = t[1], o = en().styleSheet, i = ne(function() {
    var u = o;
    return e.sheet ? u = e.sheet : e.target && (u = u.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (u = u.reconstructWithOptions({ useCSSOMInjection: !1 })), u;
  }, [e.disableCSSOMInjection, e.sheet, e.target, o]), a = ne(function() {
    return ao({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: n });
  }, [e.enableVendorPrefixes, e.namespace, n]);
  K(function() {
    Ci(n, e.stylisPlugins) || r(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var s = ne(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: a };
  }, [e.shouldForwardProp, i, a]);
  return re.createElement(vn.Provider, { value: s }, re.createElement(ga.Provider, { value: a }, e.children));
}
var tn = (function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Qt);
      var a = r.name + i.hash;
      o.hasNameForId(r.id, a) || o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, yn(this, function() {
      throw X(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Qt), this.name + t.hash;
  }, e;
})(), va = function(e) {
  return e >= "A" && e <= "Z";
};
function or(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    va(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var so = function(e) {
  return e == null || e === !1 || e === "";
}, co = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !so(i) && (Array.isArray(i) && i.isCss || ye(i) ? r.push("".concat(or(o), ":"), i, ";") : Te(i) ? r.push.apply(r, me(me(["".concat(o, " {")], co(i), !1), ["}"], !1)) : r.push("".concat(or(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in Hi || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function he(e, t, n, r) {
  if (so(e)) return [];
  if (gn(e)) return [".".concat(e.styledComponentId)];
  if (ye(e)) {
    if (!ye(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return $.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof tn || Te(o) || o === null || console.error("".concat(Jr(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), he(o, t, n, r);
  }
  var i;
  return e instanceof tn ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Te(e) ? co(e) : Array.isArray(e) ? Array.prototype.concat.apply($t, e.map(function(a) {
    return he(a, t, n, r);
  })) : [e.toString()];
}
function Ca(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (ye(n) && !gn(n)) return !1;
  }
  return !0;
}
var Sa = Xr(bt), Ea = (function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = $.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Ca(t), this.componentId = n, this.baseHash = de(Sa, n), this.baseStyle = r, oo.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = _e(o, this.staticRulesId);
    else {
      var i = Kt(he(this.rules, t, n, r)), a = Xt(de(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, a)) {
        var s = r(i, ".".concat(a), void 0, this.componentId);
        n.insertRules(this.componentId, a, s);
      }
      o = _e(o, a), this.staticRulesId = a;
    }
    else {
      for (var u = de(this.baseHash, r.hash), l = "", f = 0; f < this.rules.length; f++) {
        var c = this.rules[f];
        if (typeof c == "string") l += c, $.NODE_ENV !== "production" && (u = de(u, c));
        else if (c) {
          var p = Kt(he(c, t, n, r));
          u = de(u, p + f), l += p;
        }
      }
      if (l) {
        var d = Xt(u >>> 0);
        n.hasNameForId(this.componentId, d) || n.insertRules(this.componentId, d, r(l, ".".concat(d), void 0, this.componentId)), o = _e(o, d);
      }
    }
    return o;
  }, e;
})(), Ve = re.createContext(void 0);
Ve.Consumer;
function lo() {
  var e = Xe(Ve);
  if (!e) throw X(18);
  return e;
}
function wa(e) {
  var t = re.useContext(Ve), n = ne(function() {
    return (function(r, o) {
      if (!r) throw X(14);
      if (ye(r)) {
        var i = r(o);
        if ($.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object")) throw X(7);
        return i;
      }
      if (Array.isArray(r) || typeof r != "object") throw X(8);
      return o ? P(P({}, o), r) : r;
    })(e.theme, t);
  }, [e.theme, t]);
  return e.children ? re.createElement(Ve.Provider, { value: n }, e.children) : null;
}
var Dt = {}, ir = /* @__PURE__ */ new Set();
function ba(e, t, n) {
  var r = gn(e), o = e, i = !Mt(e), a = t.attrs, s = a === void 0 ? $t : a, u = t.componentId, l = u === void 0 ? (function(O, N) {
    var w = typeof O != "string" ? "sc" : Kn(O);
    Dt[w] = (Dt[w] || 0) + 1;
    var v = "".concat(w, "-").concat(Kr(bt + w + Dt[w]));
    return N ? "".concat(N, "-").concat(v) : v;
  })(t.displayName, t.parentComponentId) : u, f = t.displayName, c = f === void 0 ? (function(O) {
    return Mt(O) ? "styled.".concat(O) : "Styled(".concat(Jr(O), ")");
  })(e) : f, p = t.displayName && t.componentId ? "".concat(Kn(t.displayName), "-").concat(t.componentId) : t.componentId || l, d = r && o.attrs ? o.attrs.concat(s).filter(Boolean) : s, h = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var y = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var S = t.shouldForwardProp;
      h = function(O, N) {
        return y(O, N) && S(O, N);
      };
    } else h = y;
  }
  var g = new Ea(n, p, r ? o.componentStyle : void 0);
  function m(O, N) {
    return (function(w, v, D) {
      var B = w.attrs, Ae = w.componentStyle, W = w.defaultProps, oe = w.foldedComponentIds, En = w.styledComponentId, yo = w.target, vo = re.useContext(Ve), Co = en(), kt = w.shouldForwardProp || Co.shouldForwardProp;
      $.NODE_ENV !== "production" && ht(En);
      var wn = Bi(v, vo, W) || Ne, J = (function(Ke, Me, Je) {
        for (var Ce, ue = P(P({}, Me), { className: void 0, theme: Je }), Rt = 0; Rt < Ke.length; Rt += 1) {
          var Qe = ye(Ce = Ke[Rt]) ? Ce(ue) : Ce;
          for (var ie in Qe) ue[ie] = ie === "className" ? _e(ue[ie], Qe[ie]) : ie === "style" ? P(P({}, ue[ie]), Qe[ie]) : Qe[ie];
        }
        return Me.className && (ue.className = _e(ue.className, Me.className)), ue;
      })(B, v, wn), Pe = J.as || yo, Le = {};
      for (var j in J) J[j] === void 0 || j[0] === "$" || j === "as" || j === "theme" && J.theme === wn || (j === "forwardedAs" ? Le.as = J.forwardedAs : kt && !kt(j, Pe) || (Le[j] = J[j], kt || $.NODE_ENV !== "development" || Ho(j) || ir.has(j) || !qt.has(Pe) || (ir.add(j), console.warn('styled-components: it looks like an unknown prop "'.concat(j, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Nt = (function(Ke, Me) {
        var Je = en(), Ce = Ke.generateAndInjectStyles(Me, Je.styleSheet, Je.stylis);
        return $.NODE_ENV !== "production" && ht(Ce), Ce;
      })(Ae, J);
      $.NODE_ENV !== "production" && w.warnTooManyClasses && w.warnTooManyClasses(Nt);
      var Tt = _e(oe, En);
      return Nt && (Tt += " " + Nt), J.className && (Tt += " " + J.className), Le[Mt(Pe) && !qt.has(Pe) ? "class" : "className"] = Tt, D && (Le.ref = D), L(Pe, Le);
    })(b, O, N);
  }
  m.displayName = c;
  var b = re.forwardRef(m);
  return b.attrs = d, b.componentStyle = g, b.displayName = c, b.shouldForwardProp = h, b.foldedComponentIds = r ? _e(o.foldedComponentIds, o.styledComponentId) : "", b.styledComponentId = p, b.target = r ? o.target : e, Object.defineProperty(b, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(O) {
    this._foldedDefaultProps = r ? (function(N) {
      for (var w = [], v = 1; v < arguments.length; v++) w[v - 1] = arguments[v];
      for (var D = 0, B = w; D < B.length; D++) Jt(N, B[D], !0);
      return N;
    })({}, o.defaultProps, O) : O;
  } }), $.NODE_ENV !== "production" && (Ui(c, p), b.warnTooManyClasses = /* @__PURE__ */ (function(O, N) {
    var w = {}, v = !1;
    return function(D) {
      if (!v && (w[D] = !0, Object.keys(w).length >= 200)) {
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
  })(c, p)), yn(b, function() {
    return ".".concat(b.styledComponentId);
  }), i && no(b, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), b;
}
function ar(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var sr = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Cn(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (ye(e) || Te(e)) return sr(he(ar($t, me([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? he(r) : sr(he(ar(r, t)));
}
function nn(e, t, n) {
  if (n === void 0 && (n = Ne), !t) throw X(1, t);
  var r = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
    return e(t, n, Cn.apply(void 0, me([o], i, !1)));
  };
  return r.attrs = function(o) {
    return nn(e, t, P(P({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return nn(e, t, P(P({}, n), o));
  }, r;
}
var uo = function(e) {
  return nn(ba, e);
}, U = uo;
qt.forEach(function(e) {
  U[e] = uo(e);
});
function Ot(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  $.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = Kt(Cn.apply(void 0, me([e], t, !1))), o = Kr(r);
  return new tn(o, r);
}
$.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var ot = "__sc-".concat(ge, "__");
$.NODE_ENV !== "production" && $.NODE_ENV !== "test" && typeof window < "u" && (window[ot] || (window[ot] = 0), window[ot] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[ot] += 1);
const fo = {
  CIRCLE_SOLID: "circle-solid"
}, $a = 2, _o = 14, Oa = 0.0276;
var ee = /* @__PURE__ */ ((e) => (e[e.S = 300] = "S", e[e.M = 400] = "M", e[e.L = 500] = "L", e[e.Default = 600] = "Default", e))(ee || {});
const ze = {
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
}, Ft = {
  loading: { text: "Loading. Please wait.", visible: !0 },
  waiting: { text: "Waiting for input...", visible: !0 }
}, ka = {
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
}, Na = fo.CIRCLE_SOLID, Ta = {
  ...ka
}, Ra = {
  [pt.FACE_TOO_CLOSE]: "Move your face back",
  [pt.FACE_TOO_FAR]: "Move your face closer"
}, Ia = "rgba(19, 19, 19, 0.5)", xa = 34;
function cr(e, t) {
  return Math.max(t, t + (e - 400) * Oa + 2);
}
const Aa = (e, t = _o) => e ? e.width < e.height ? cr(e.width, t) : cr(e.height, t) : t, Pa = (e) => e > ee.Default ? ze[ee.Default] : e > ee.L ? ze[ee.L] : e > ee.M ? ze[ee.M] : ze[ee.S], La = (e) => e ? Pa(e.width) : ze[ee.Default];
function Ma() {
  const e = "https://fonts.googleapis.com/css?family=Montserrat:600";
  if (!document.querySelector(`link[href="${e}"]`)) {
    const n = document.createElement("link");
    n.href = e, n.rel = "stylesheet", document.head.appendChild(n);
  }
}
function Da({
  currentInstruction: e,
  escalatedInstructions: t,
  instructions: n
}) {
  const { code: r, isEscalated: o } = e;
  if (r)
    return o && t && r in t ? t[r] : n[r];
}
function Fa(e) {
  if (e)
    return {
      faceCenter: e.faceCenter,
      faceSize: e.faceSize
    };
}
const We = Er(void 0);
We.displayName = "ConfigurationContext";
function ve() {
  const e = Xe(We);
  if (!e)
    throw new Error(
      `${We.displayName} must be used within a ${We.displayName} Provider`
    );
  return e;
}
function Ha({
  children: e,
  configuration: t,
  videoElementSize: n
}) {
  const { font: r } = lo(), o = ne(
    () => ({ ...t, videoElementSize: n, fontSize: Aa(n, r.minimumSize) }),
    [t, r.minimumSize, n]
  );
  return /* @__PURE__ */ _(We.Provider, { value: o, children: e });
}
const po = ({ svgSize: e }) => /* @__PURE__ */ _("svg", { fill: "none", height: e, viewBox: "0 0 16 14", width: e, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ _(
  "path",
  {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), za = U.div`
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
`, Ua = U.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, Ba = U.p`
  background: ${(e) => e.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(e) => `${e.$fontSize}px`};
  line-height: 1em;
  max-width: 80%;
`, rn = ({ Icon: e, isCameraReady: t, position: n = "absolute", text: r }) => {
  const { fontSize: o } = ve();
  return /* @__PURE__ */ _(za, { $isCameraReady: t, $position: n, children: /* @__PURE__ */ _(Ua, { children: [
    e ? /* @__PURE__ */ _(e, { svgSize: o * 2 }) : null,
    /* @__PURE__ */ _(Ba, { $fontSize: o, children: r })
  ] }) });
}, ho = ({ text: e = "An unknown error has occurred" }) => /* @__PURE__ */ _(rn, { Icon: po, position: "relative", text: e });
class Wa extends V {
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
    return this.state.hasError ? /* @__PURE__ */ _(ho, { Icon: po, isCameraReady: !1 }) : this.props.children;
  }
}
const ja = U.div`
  font-family: ${(e) => e.theme.font.family};
  font-style: ${(e) => e.theme.font.style};
  font-weight: ${(e) => e.theme.font.weight};
`;
function Ga({
  children: e,
  uiConfiguration: t,
  videoElementSize: n
}) {
  return K(() => {
    Ma();
  }, []), /* @__PURE__ */ _(ya, { target: t.styleTarget, children: /* @__PURE__ */ _(wa, { theme: t.styling.theme, children: /* @__PURE__ */ _(ja, { children: /* @__PURE__ */ _(Wa, { videoElementSize: n, children: /* @__PURE__ */ _(Ha, { configuration: t, videoElementSize: n, children: e }) }) }) }) });
}
const Va = 0.75, Za = 2, Ya = "dot-auto-capture-video";
function we(e, t) {
  const n = qe(t);
  K(() => {
    n.current = t;
  }, [t]), K(
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
function qa(e) {
  const [t, n] = H(), r = se(
    (o) => {
      n(o.detail?.size);
    },
    [n]
  );
  return we(e, r), Ie(() => {
    if (!t) {
      const o = document.getElementById(Ya);
      o && n(o.getBoundingClientRect());
    }
  }, [t, n]), t;
}
function Xa(e, t) {
  return e ? `${e}, ${t}` : t;
}
const Ka = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, Ja = {
  family: "Montserrat, Arial, sans-serif",
  weight: "600",
  style: "normal",
  minimumSize: _o
}, De = {
  colors: Ka,
  font: Ja
}, Qa = (e) => e ? {
  ...De,
  ...e,
  colors: {
    ...De.colors,
    ...e.colors
  },
  font: {
    ...De.font,
    ...e.font,
    family: Xa(e.font?.family, De.font.family)
  }
} : De, es = (e) => Number.parseFloat(e.toFixed(3)), Sn = (e, t) => Math.min(e, t), ts = ({ height: e, width: t }, n) => {
  const r = Sn(t, e) * n, o = (t - r) / 2, i = (e - r) / 2;
  return {
    shiftX: o,
    shiftY: i,
    width: r,
    height: r
  };
}, ns = (e, t) => {
  const { height: n, shiftX: r, shiftY: o, width: i } = ts(e, t);
  return {
    shiftX: r / e.width,
    shiftY: o / e.height,
    width: i / e.width,
    height: n / e.height
  };
};
function rs(e, t) {
  const n = Sn(t.width, t.height);
  return es(e * n);
}
function os(e) {
  return ns(e, Va);
}
function is(e, t) {
  return rs(e, t) * Za;
}
const as = (e, t) => {
  document.dispatchEvent(
    new CustomEvent(e, {
      detail: t
    })
  );
}, lr = (e, t) => {
  as(e, {
    instruction: t
  });
};
async function ss() {
  return navigator.mediaDevices.enumerateDevices();
}
async function cs() {
  return (await ss()).filter((t) => t.kind === "videoinput");
}
const ls = () => {
  const [e, t] = H(!1);
  return K(() => {
    (async () => (await cs()).length > 1 && t(!0))();
  }, []), e;
}, us = ({ size: e }) => /* @__PURE__ */ _("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ _(
    "path",
    {
      d: "M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z",
      fill: "#131313",
      fillOpacity: "0.3"
    }
  ),
  /* @__PURE__ */ _("circle", { cx: "17.5", cy: "24.5", fill: "white", r: "1.5" }),
  /* @__PURE__ */ _(
    "path",
    {
      d: "M15 17H16C19.5 17 23 21 23 29C22.5 29 21.5 29 20 29C20 29 20.25 33 19.5 34.5C18.75 36 16 36 16 36H15",
      stroke: "white",
      strokeWidth: "2"
    }
  ),
  /* @__PURE__ */ _("circle", { fill: "white", r: "1.5", transform: "matrix(-1 0 0 1 34.5 24.5)" }),
  /* @__PURE__ */ _(
    "path",
    {
      d: "M37 17H36C32.5 17 29 21 29 29C29.5 29 30.5 29 32 29C32 29 31.75 33 32.5 34.5C33.25 36 36 36 36 36H37",
      stroke: "white",
      strokeWidth: "2"
    }
  )
] }), fs = ({ size: e }) => /* @__PURE__ */ _("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: "52", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ _("circle", { cx: "26", cy: "26", fill: "#131313", fillOpacity: "0.3", r: "26" }),
  /* @__PURE__ */ _(
    "path",
    {
      d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
      fill: "white"
    }
  )
] }), mo = U.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(e) => e.$marginLeft ? `${e.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, ds = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ _(mo, { $marginLeft: e, ...n, children: /* @__PURE__ */ _(us, { size: t }) }), _s = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ _(mo, { $marginLeft: e, ...n, children: /* @__PURE__ */ _(fs, { size: t }) }), ps = U.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.$padding}px`};
  z-index: 2;
`, hs = ({
  customControlEvent: e,
  isSwitchCameraDisabled: t
}) => {
  const {
    control: { showCameraButtons: n },
    videoElementSize: r
  } = ve(), o = ls();
  if (!n)
    return null;
  const { buttonPadding: i, iconSize: a, marginLeft: s } = La(r);
  return /* @__PURE__ */ _(ps, { $padding: i, children: [
    o && /* @__PURE__ */ _(_s, { disabled: t, onClick: () => {
      lr(e, Nn.SWITCH_CAMERA);
    }, size: a }),
    /* @__PURE__ */ _(
      ds,
      {
        marginLeft: o ? s : 0,
        onClick: () => {
          lr(e, Nn.TOGGLE_MIRROR);
        },
        size: a
      }
    )
  ] });
}, ms = "2.5s", gs = "0.3s", ys = "linear", vs = Ot`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
Ot`
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`;
Ot`
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
Ot`
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
const Cs = U.div`
  position: absolute;
  left: 50%;

  ${(e) => e.$cssTop ? `top: ${e.$cssTop}%;` : ""}
  ${(e) => e.$cssBottom ? `bottom: ${e.$cssBottom}%;` : ""}
    ${(e) => e.$isAnimating && Cn`
      animation: ${vs} ${gs}
        ${ys} both;
      animation-delay: ${ms};

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
`, Ss = U.div`
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
`, Es = ({
  children: e,
  cssBottom: t,
  cssTop: n,
  isAnimating: r,
  isInCandidateSelection: o,
  isPortrait: i
}) => {
  const { fontSize: a } = ve();
  return /* @__PURE__ */ _(Cs, { $cssBottom: t, $cssTop: n, $isAnimating: r, $isPortrait: i, children: /* @__PURE__ */ _(
    Ss,
    {
      $fontSize: a,
      $isInCandidateSelection: o,
      $wrap: e.length > xa,
      children: e
    }
  ) });
}, ws = U.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, bs = ({ svgSize: e }) => /* @__PURE__ */ _(ws, { children: /* @__PURE__ */ _("svg", { fill: "none", height: e, viewBox: "0 0 48 48", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ _(
    "path",
    {
      d: "M30.9229 9.75026C30.9229 12.3736 28.7533 14.5002 26.0767 14.5002C23.4003 14.5002 21.2307 12.3736 21.2307 9.75026C21.2307 7.12664 23.4003 5 26.0767 5C28.7533 5 30.9229 7.12664 30.9229 9.75026Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ _(
    "path",
    {
      d: "M40.6155 15.8556C40.6155 18.1044 38.7559 19.9273 36.4618 19.9273C34.1675 19.9273 32.3079 18.1044 32.3079 15.8556C32.3079 13.607 34.1675 11.7842 36.4618 11.7842C38.7559 11.7842 40.6155 13.607 40.6155 15.8556Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ _(
    "path",
    {
      d: "M42 27.3921C42 29.2659 40.4502 30.785 38.5386 30.785C36.6267 30.785 35.0769 29.2659 35.0769 27.3921C35.0769 25.5181 36.6267 23.999 38.5386 23.999C40.4502 23.999 42 25.5181 42 27.3921Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ _(
    "path",
    {
      d: "M35.0766 37.5712C35.0766 39.0704 33.837 40.2858 32.3075 40.2858C30.7779 40.2858 29.5383 39.0704 29.5383 37.5712C29.5383 36.0723 30.7779 34.8569 32.3075 34.8569C33.837 34.8569 35.0766 36.0723 35.0766 37.5712Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ _(
    "path",
    {
      d: "M22.6154 40.2858C22.6154 41.7848 21.3756 43.0001 19.846 43.0001C18.3168 43.0001 17.0769 41.7848 17.0769 40.2858C17.0769 38.7866 18.3168 37.5713 19.846 37.5713C21.3756 37.5713 22.6154 38.7866 22.6154 40.2858Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ _(
    "path",
    {
      d: "M11.5382 32.8216C11.5382 33.9457 10.6085 34.8573 9.46137 34.8573C8.31426 34.8573 7.38452 33.9457 7.38452 32.8216C7.38452 31.6972 8.31426 30.7856 9.46137 30.7856C10.6085 30.7856 11.5382 31.6972 11.5382 32.8216Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ _(
    "path",
    {
      d: "M8.76913 21.2849C8.76913 22.0345 8.14932 22.642 7.38456 22.642C6.6198 22.642 6 22.0345 6 21.2849C6 20.5353 6.61981 19.9277 7.38456 19.9277C8.14933 19.9277 8.76913 20.5353 8.76913 21.2849Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ _(
    "path",
    {
      d: "M15.6927 11.7844C15.6927 12.534 15.0729 13.1415 14.3081 13.1415C13.5434 13.1415 12.9236 12.534 12.9236 11.7844C12.9236 11.0348 13.5434 10.4272 14.3081 10.4272C15.0729 10.4272 15.6927 11.0348 15.6927 11.7844Z",
      fill: "currentColor"
    }
  )
] }) }), $s = U.div`
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
`, go = ({ children: e, height: t, scale: n, width: r }) => {
  const {
    styling: { backdropColor: o }
  } = ve(), i = Sn(r, t);
  return /* @__PURE__ */ _($s, { $backdropColor: o, $scale: n, $shorterSide: i, children: /* @__PURE__ */ _("svg", { viewBox: `0 0 ${r} ${t}`, children: [
    /* @__PURE__ */ _("defs", { children: /* @__PURE__ */ _("mask", { id: "mask", children: [
      /* @__PURE__ */ _("rect", { fill: "#fff", height: "100%", width: "100%" }),
      /* @__PURE__ */ _("g", { children: e })
    ] }) }),
    /* @__PURE__ */ _("rect", { fill: o, height: "100%", mask: "url(#mask)", width: "100%" })
  ] }) });
};
function Os({ cameraHeight: e, cameraWidth: t, isBackdrop: n, state: r }) {
  const { appStateInstructions: o } = ve(), i = r === F.ERROR || r === F.RUNNING;
  return !r || i || !o?.[r].visible ? null : r === F.WAITING || r === F.COMPLETE ? /* @__PURE__ */ _(z, { children: [
    n && e && t && /* @__PURE__ */ _(go, { height: e, width: t }),
    /* @__PURE__ */ _(rn, { isCameraReady: !0, text: o[F.WAITING].text })
  ] }) : /* @__PURE__ */ _(rn, { Icon: bs, isCameraReady: !0, text: o[F.LOADING].text });
}
function ks({ isRounded: e, isSquare: t, ...n }) {
  return e ? /* @__PURE__ */ _("rect", { fill: "#000", ...n, rx: "2%" }) : /* @__PURE__ */ _("rect", { fill: "#000", ...n, rx: t ? "0" : "50%" });
}
const Ns = () => /* @__PURE__ */ _("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ _(
  "path",
  {
    d: "M2 240C2 108.556 108.556 2 240 2C371.444 2 478 108.556 478 240C478 371.444 371.444 478 240 478C108.556 478 2 371.444 2 240Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  }
) }), Ts = U.div`
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
`, Rs = ({
  children: e,
  className: t,
  isInCandidateSelection: n,
  onAnimationEnd: r,
  placeholderRectangle: o,
  scale: i
}) => /* @__PURE__ */ _(
  Ts,
  {
    $isInCandidateSelection: n,
    $placeholderRectangle: o,
    $scale: i,
    className: t,
    onAnimationEnd: r,
    children: e
  }
), Is = {
  [fo.CIRCLE_SOLID]: /* @__PURE__ */ _(Ns, {})
};
function xs({ backdropHeight: e, backdropWidth: t, placeholderRectangle: n, scale: r, ...o }) {
  const { placeholder: i } = ve();
  return /* @__PURE__ */ _(z, { children: [
    /* @__PURE__ */ _(go, { height: e, scale: r, width: t, children: /* @__PURE__ */ _(
      ks,
      {
        height: `${n.height * 100}%`,
        width: `${n.width * 100}%`,
        x: `${n.shiftX * 100}%`,
        y: `${n.shiftY * 100}%`
      }
    ) }),
    /* @__PURE__ */ _(Rs, { placeholderRectangle: n, scale: r, ...o, children: Is[i] })
  ] });
}
const As = /* @__PURE__ */ new Map([
  [Se.ZERO, { minFaceSizeRatio: 0.13, maxFaceSizeRatio: 0.15, scale: 0.85 }],
  [Se.ONE, { minFaceSizeRatio: 0.152, maxFaceSizeRatio: 0.172, scale: 1 }],
  [Se.TWO, { minFaceSizeRatio: 0.18, maxFaceSizeRatio: 0.205, scale: 1.18 }],
  [Se.THREE, { minFaceSizeRatio: 0.215, maxFaceSizeRatio: 0.24, scale: 1.41 }],
  [Se.FOUR, { minFaceSizeRatio: 0.245, maxFaceSizeRatio: 0.275, scale: 1.61 }],
  [Se.FIVE, { minFaceSizeRatio: 0.28, maxFaceSizeRatio: 0.34, scale: 1.84 }]
]);
function Ps({
  customEvents: e,
  defaultInstructionCode: t
}) {
  const [n, r] = H(), [o, i] = H(!1), a = se(
    (y) => {
      r(y?.detail?.cameraResolution);
      const S = y?.detail?.isMirroring;
      S !== void 0 && i(S);
    },
    [r]
  );
  we(e.CAMERA_PROPS_CHANGED, a);
  const [s, u] = H({
    code: t,
    isEscalated: !1
  }), l = se(
    (y) => {
      const S = y;
      u({
        code: S?.detail?.instructionCode,
        isEscalated: S?.detail?.isEscalated ?? !1
      });
    },
    [u]
  );
  we(e.INSTRUCTION_CHANGED, l);
  const [f, c] = H(F.LOADING), [p, d] = H(), h = se(
    (y) => {
      c(y.detail?.appState);
      const S = y?.detail?.error;
      S && d(S);
    },
    [c, d]
  );
  return we(e.STATE_CHANGED, h), {
    cameraResolution: n,
    instruction: s,
    isMirroring: o,
    appState: f,
    error: p
  };
}
function Ls() {
  const e = Ps({
    customEvents: Ge,
    defaultInstructionCode: pt.FACE_NOT_PRESENT
  }), [t, n] = H(1), r = se((o) => {
    const i = o, { currentMultiRangeLivenessChallengeItem: a } = i.detail;
    n(
      As.get(a)?.scale ?? 1
    );
  }, []);
  return we(Ge.CHALLENGE_VALUE_CHANGED, r), K(() => {
    e.appState !== F.RUNNING && n(1);
  }, [e.appState]), {
    ...e,
    faceScale: t
  };
}
const Ms = U.canvas`
  transform: ${(e) => e.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
function Ds(e) {
  const t = e.getContext("2d");
  t && t.clearRect(0, 0, t.canvas.width, t.canvas.height);
}
function Fs({ cameraResolution: e, isImageMirror: t }) {
  const n = qe(null), r = lo(), [o, i] = H(), a = se(
    (s) => {
      i(s?.detail?.detectionDetails?.processedImage?.detection);
    },
    [i]
  );
  return we(Ge.DETECTION_CHANGED, a), K(() => {
    if (!n.current)
      return;
    const s = { width: e.width, height: e.height }, u = Fa(o), l = (f, c) => {
      if (!c)
        return;
      const { faceCenter: p, faceSize: d } = c, h = n?.current?.getContext("2d");
      if (!h)
        return;
      const y = is(d, f);
      h.beginPath(), h.arc(p.x, p.y, y, 0, 2 * Math.PI, !1), h.lineWidth = $a, h.strokeStyle = r.colors.placeholderColor, h.stroke();
    };
    n.current.width = s.width, n.current.height = s.height, Ds(n.current), l(s, u);
  }, [e, o, r.colors.placeholderColor]), /* @__PURE__ */ _(Ms, { ref: n, $isImageMirror: t });
}
function Hs() {
  const {
    appState: e,
    cameraResolution: t,
    error: n,
    faceScale: r,
    instruction: o,
    isMirroring: i
  } = Ls(), {
    control: { showDetectionLayer: a },
    escalatedInstructions: s,
    instructions: u
  } = ve(), l = o.code === pt.CANDIDATE_SELECTION, f = Da({
    escalatedInstructions: s,
    instructions: u,
    currentInstruction: {
      ...o,
      code: o.code
    }
  });
  if (e === F.ERROR)
    return /* @__PURE__ */ _(ho, { text: n?.message });
  if (e === F.RUNNING && t) {
    const c = os(t);
    return /* @__PURE__ */ _(z, { children: [
      a && /* @__PURE__ */ _(Fs, { cameraResolution: t, isImageMirror: i }),
      /* @__PURE__ */ _(
        xs,
        {
          backdropHeight: t.height,
          backdropWidth: t.width,
          isInCandidateSelection: l,
          placeholderRectangle: c,
          scale: r
        }
      ),
      f && /* @__PURE__ */ _(
        Es,
        {
          cssBottom: (c.height + c.shiftY) * 100,
          isInCandidateSelection: l,
          isPortrait: t.width < t.height,
          children: f
        }
      ),
      /* @__PURE__ */ _(
        hs,
        {
          customControlEvent: Ge.CONTROL,
          isSwitchCameraDisabled: l
        }
      )
    ] });
  }
  return /* @__PURE__ */ _(
    Os,
    {
      cameraHeight: t?.height,
      cameraWidth: t?.width,
      isBackdrop: !0,
      state: e
    }
  );
}
function zs(e) {
  const t = { ...Ta, ...e?.instructions }, n = {
    ...Ra,
    ...e?.escalatedInstructions
  }, r = {
    [F.LOADING]: {
      ...Ft.loading,
      ...e?.appStateInstructions?.loading
    },
    [F.WAITING]: {
      ...Ft.waiting,
      ...e?.appStateInstructions?.waiting
    },
    [F.COMPLETE]: {
      ...Ft.waiting,
      ...e?.appStateInstructions?.waiting
    }
  }, o = {
    ...e?.styling,
    backdropColor: e?.styling?.backdropColor ?? Ia,
    theme: Qa(e?.styling?.theme)
  }, i = {
    showCameraButtons: e?.control?.showCameraButtons ?? !1,
    showDetectionLayer: e?.control?.showDetectionLayer ?? !1
  }, a = e?.placeholder ?? Na;
  return {
    instructions: t,
    appStateInstructions: r,
    placeholder: a,
    styling: o,
    control: i,
    escalatedInstructions: n
  };
}
function Us({ configuration: e }) {
  const t = qa(Ge.VIDEO_ELEMENT_SIZE);
  return /* @__PURE__ */ _(Ga, { uiConfiguration: zs(e), videoElementSize: t, children: /* @__PURE__ */ _(Hs, {}) });
}
To(Us, "x-dot-multi-range-liveness-ui", ["configuration"]);
