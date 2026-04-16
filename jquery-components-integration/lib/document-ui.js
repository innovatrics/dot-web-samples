var qe, y, hn, de, Sr, pn, _n, mn, ir, Bt, Ut, gn, Ge = {}, Ln = [], bo = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ye = Array.isArray;
function X(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function ar(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function D(e, t, r) {
  var n, o, i, a = {};
  for (i in t) i == "key" ? n = t[i] : i == "ref" ? o = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? qe.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) a[i] === void 0 && (a[i] = e.defaultProps[i]);
  return We(e, a, n, o, null);
}
function We(e, t, r, n, o) {
  var i = { type: e, props: t, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++hn, __i: -1, __u: 0 };
  return o == null && y.vnode != null && y.vnode(i), i;
}
function Vo() {
  return { current: null };
}
function T(e) {
  return e.children;
}
function j(e, t) {
  this.props = e, this.context = t;
}
function Ve(e, t) {
  if (t == null) return e.__ ? Ve(e.__, e.__i + 1) : null;
  for (var r; t < e.__k.length; t++) if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
  return typeof e.type == "function" ? Ve(e) : null;
}
function yn(e) {
  var t, r;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((r = e.__k[t]) != null && r.__e != null) {
      e.__e = e.__c.base = r.__e;
      break;
    }
    return yn(e);
  }
}
function Wt(e) {
  (!e.__d && (e.__d = !0) && de.push(e) && !pt.__r++ || Sr != y.debounceRendering) && ((Sr = y.debounceRendering) || pn)(pt);
}
function pt() {
  for (var e, t, r, n, o, i, a, c = 1; de.length; ) de.length > c && de.sort(_n), e = de.shift(), c = de.length, e.__d && (r = void 0, n = void 0, o = (n = (t = e).__v).__e, i = [], a = [], t.__P && ((r = X({}, n)).__v = n.__v + 1, y.vnode && y.vnode(r), sr(t.__P, r, n, t.__n, t.__P.namespaceURI, 32 & n.__u ? [o] : null, i, o ?? Ve(n), !!(32 & n.__u), a), r.__v = n.__v, r.__.__k[r.__i] = r, wn(i, r, a), n.__e = n.__ = null, r.__e != o && yn(r)));
  pt.__r = 0;
}
function vn(e, t, r, n, o, i, a, c, d, u, h) {
  var l, p, f, _, w, S, m, g = n && n.__k || Ln, b = t.length;
  for (d = Eo(r, t, g, d, b), l = 0; l < b; l++) (f = r.__k[l]) != null && (p = f.__i == -1 ? Ge : g[f.__i] || Ge, f.__i = l, S = sr(e, f, p, o, i, a, c, d, u, h), _ = f.__e, f.ref && p.ref != f.ref && (p.ref && cr(p.ref, null, f), h.push(f.ref, f.__c || _, f)), w == null && _ != null && (w = _), (m = !!(4 & f.__u)) || p.__k === f.__k ? d = Cn(f, d, e, m) : typeof f.type == "function" && S !== void 0 ? d = S : _ && (d = _.nextSibling), f.__u &= -7);
  return r.__e = w, d;
}
function Eo(e, t, r, n, o) {
  var i, a, c, d, u, h = r.length, l = h, p = 0;
  for (e.__k = new Array(o), i = 0; i < o; i++) (a = t[i]) != null && typeof a != "boolean" && typeof a != "function" ? (typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? a = e.__k[i] = We(null, a, null, null, null) : Ye(a) ? a = e.__k[i] = We(T, { children: a }, null, null, null) : a.constructor == null && a.__b > 0 ? a = e.__k[i] = We(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : e.__k[i] = a, d = i + p, a.__ = e, a.__b = e.__b + 1, c = null, (u = a.__i = ko(a, r, d, l)) != -1 && (l--, (c = r[u]) && (c.__u |= 2)), c == null || c.__v == null ? (u == -1 && (o > h ? p-- : o < h && p++), typeof a.type != "function" && (a.__u |= 4)) : u != d && (u == d - 1 ? p-- : u == d + 1 ? p++ : (u > d ? p-- : p++, a.__u |= 4))) : e.__k[i] = null;
  if (l) for (i = 0; i < h; i++) (c = r[i]) != null && (2 & c.__u) == 0 && (c.__e == n && (n = Ve(c)), bn(c, c));
  return n;
}
function Cn(e, t, r, n) {
  var o, i;
  if (typeof e.type == "function") {
    for (o = e.__k, i = 0; o && i < o.length; i++) o[i] && (o[i].__ = e, t = Cn(o[i], t, r, n));
    return t;
  }
  e.__e != t && (n && (t && e.type && !t.parentNode && (t = Ve(e)), r.insertBefore(e.__e, t || null)), t = e.__e);
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
function ko(e, t, r, n) {
  var o, i, a, c = e.key, d = e.type, u = t[r], h = u != null && (2 & u.__u) == 0;
  if (u === null && c == null || h && c == u.key && d == u.type) return r;
  if (n > (h ? 1 : 0)) {
    for (o = r - 1, i = r + 1; o >= 0 || i < t.length; ) if ((u = t[a = o >= 0 ? o-- : i++]) != null && (2 & u.__u) == 0 && c == u.key && d == u.type) return a;
  }
  return -1;
}
function br(e, t, r) {
  t[0] == "-" ? e.setProperty(t, r ?? "") : e[t] = r == null ? "" : typeof r != "number" || bo.test(t) ? r : r + "px";
}
function tt(e, t, r, n, o) {
  var i, a;
  e: if (t == "style") if (typeof r == "string") e.style.cssText = r;
  else {
    if (typeof n == "string" && (e.style.cssText = n = ""), n) for (t in n) r && t in r || br(e.style, t, "");
    if (r) for (t in r) n && r[t] == n[t] || br(e.style, t, r[t]);
  }
  else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace(mn, "$1")), a = t.toLowerCase(), t = a in e || t == "onFocusOut" || t == "onFocusIn" ? a.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = r, r ? n ? r.u = n.u : (r.u = ir, e.addEventListener(t, i ? Ut : Bt, i)) : e.removeEventListener(t, i ? Ut : Bt, i);
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
function Vr(e) {
  return function(t) {
    if (this.l) {
      var r = this.l[t.type + e];
      if (t.t == null) t.t = ir++;
      else if (t.t < r.u) return;
      return r(y.event ? y.event(t) : t);
    }
  };
}
function sr(e, t, r, n, o, i, a, c, d, u) {
  var h, l, p, f, _, w, S, m, g, b, E, $, C, L, H, U, Ne, W = t.type;
  if (t.constructor != null) return null;
  128 & r.__u && (d = !!(32 & r.__u), i = [c = t.__e = r.__e]), (h = y.__b) && h(t);
  e: if (typeof W == "function") try {
    if (m = t.props, g = "prototype" in W && W.prototype.render, b = (h = W.contextType) && n[h.__c], E = h ? b ? b.props.value : h.__ : n, r.__c ? S = (l = t.__c = r.__c).__ = l.__E : (g ? t.__c = l = new W(m, E) : (t.__c = l = new j(m, E), l.constructor = W, l.render = xo), b && b.sub(l), l.state || (l.state = {}), l.__n = n, p = l.__d = !0, l.__h = [], l._sb = []), g && l.__s == null && (l.__s = l.state), g && W.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = X({}, l.__s)), X(l.__s, W.getDerivedStateFromProps(m, l.__s))), f = l.props, _ = l.state, l.__v = t, p) g && W.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), g && l.componentDidMount != null && l.__h.push(l.componentDidMount);
    else {
      if (g && W.getDerivedStateFromProps == null && m !== f && l.componentWillReceiveProps != null && l.componentWillReceiveProps(m, E), t.__v == r.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(m, l.__s, E) === !1) {
        for (t.__v != r.__v && (l.props = m, l.state = l.__s, l.__d = !1), t.__e = r.__e, t.__k = r.__k, t.__k.some(function(ie) {
          ie && (ie.__ = t);
        }), $ = 0; $ < l._sb.length; $++) l.__h.push(l._sb[$]);
        l._sb = [], l.__h.length && a.push(l);
        break e;
      }
      l.componentWillUpdate != null && l.componentWillUpdate(m, l.__s, E), g && l.componentDidUpdate != null && l.__h.push(function() {
        l.componentDidUpdate(f, _, w);
      });
    }
    if (l.context = E, l.props = m, l.__P = e, l.__e = !1, C = y.__r, L = 0, g) {
      for (l.state = l.__s, l.__d = !1, C && C(t), h = l.render(l.props, l.state, l.context), H = 0; H < l._sb.length; H++) l.__h.push(l._sb[H]);
      l._sb = [];
    } else do
      l.__d = !1, C && C(t), h = l.render(l.props, l.state, l.context), l.state = l.__s;
    while (l.__d && ++L < 25);
    l.state = l.__s, l.getChildContext != null && (n = X(X({}, n), l.getChildContext())), g && !p && l.getSnapshotBeforeUpdate != null && (w = l.getSnapshotBeforeUpdate(f, _)), U = h, h != null && h.type === T && h.key == null && (U = Sn(h.props.children)), c = vn(e, Ye(U) ? U : [U], t, r, n, o, i, a, c, d, u), l.base = t.__e, t.__u &= -161, l.__h.length && a.push(l), S && (l.__E = l.__ = null);
  } catch (ie) {
    if (t.__v = null, d || i != null) if (ie.then) {
      for (t.__u |= d ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
      i[i.indexOf(c)] = null, t.__e = c;
    } else {
      for (Ne = i.length; Ne--; ) ar(i[Ne]);
      Ft(t);
    }
    else t.__e = r.__e, t.__k = r.__k, ie.then || Ft(t);
    y.__e(ie, t, r);
  }
  else i == null && t.__v == r.__v ? (t.__k = r.__k, t.__e = r.__e) : c = t.__e = $o(r.__e, t, r, n, o, i, a, d, u);
  return (h = y.diffed) && h(t), 128 & t.__u ? void 0 : c;
}
function Ft(e) {
  e && e.__c && (e.__c.__e = !0), e && e.__k && e.__k.forEach(Ft);
}
function wn(e, t, r) {
  for (var n = 0; n < r.length; n++) cr(r[n], r[++n], r[++n]);
  y.__c && y.__c(t, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      y.__e(i, o.__v);
    }
  });
}
function Sn(e) {
  return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : Ye(e) ? e.map(Sn) : X({}, e);
}
function $o(e, t, r, n, o, i, a, c, d) {
  var u, h, l, p, f, _, w, S = r.props || Ge, m = t.props, g = t.type;
  if (g == "svg" ? o = "http://www.w3.org/2000/svg" : g == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (u = 0; u < i.length; u++) if ((f = i[u]) && "setAttribute" in f == !!g && (g ? f.localName == g : f.nodeType == 3)) {
      e = f, i[u] = null;
      break;
    }
  }
  if (e == null) {
    if (g == null) return document.createTextNode(m);
    e = document.createElementNS(o, g, m.is && m), c && (y.__m && y.__m(t, i), c = !1), i = null;
  }
  if (g == null) S === m || c && e.data == m || (e.data = m);
  else {
    if (i = i && qe.call(e.childNodes), !c && i != null) for (S = {}, u = 0; u < e.attributes.length; u++) S[(f = e.attributes[u]).name] = f.value;
    for (u in S) if (f = S[u], u != "children") {
      if (u == "dangerouslySetInnerHTML") l = f;
      else if (!(u in m)) {
        if (u == "value" && "defaultValue" in m || u == "checked" && "defaultChecked" in m) continue;
        tt(e, u, null, f, o);
      }
    }
    for (u in m) f = m[u], u == "children" ? p = f : u == "dangerouslySetInnerHTML" ? h = f : u == "value" ? _ = f : u == "checked" ? w = f : c && typeof f != "function" || S[u] === f || tt(e, u, f, S[u], o);
    if (h) c || l && (h.__html == l.__html || h.__html == e.innerHTML) || (e.innerHTML = h.__html), t.__k = [];
    else if (l && (e.innerHTML = ""), vn(t.type == "template" ? e.content : e, Ye(p) ? p : [p], t, r, n, g == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, a, i ? i[0] : r.__k && Ve(r, 0), c, d), i != null) for (u = i.length; u--; ) ar(i[u]);
    c || (u = "value", g == "progress" && _ == null ? e.removeAttribute("value") : _ != null && (_ !== e[u] || g == "progress" && !_ || g == "option" && _ != S[u]) && tt(e, u, _, S[u], o), u = "checked", w != null && w != e[u] && tt(e, u, w, S[u], o));
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
    y.__e(o, r);
  }
}
function bn(e, t, r) {
  var n, o;
  if (y.unmount && y.unmount(e), (n = e.ref) && (n.current && n.current != e.__e || cr(n, null, t)), (n = e.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (i) {
      y.__e(i, t);
    }
    n.base = n.__P = null;
  }
  if (n = e.__k) for (o = 0; o < n.length; o++) n[o] && bn(n[o], t, r || typeof e.type != "function");
  r || ar(e.__e), e.__c = e.__ = e.__e = void 0;
}
function xo(e, t, r) {
  return this.constructor(e, r);
}
function ce(e, t, r) {
  var n, o, i, a;
  t == document && (t = document.documentElement), y.__ && y.__(e, t), o = (n = typeof r == "function") ? null : r && r.__k || t.__k, i = [], a = [], sr(t, e = (!n && r || t).__k = D(T, null, [e]), o || Ge, Ge, t.namespaceURI, !n && r ? [r] : o ? null : t.firstChild ? qe.call(t.childNodes) : null, i, !n && r ? r : o ? o.__e : t.firstChild, n, a), wn(i, e, a);
}
function lr(e, t) {
  ce(e, t, lr);
}
function ur(e, t, r) {
  var n, o, i, a, c = X({}, e.props);
  for (i in e.type && e.type.defaultProps && (a = e.type.defaultProps), t) i == "key" ? n = t[i] : i == "ref" ? o = t[i] : c[i] = t[i] === void 0 && a != null ? a[i] : t[i];
  return arguments.length > 2 && (c.children = arguments.length > 3 ? qe.call(arguments, 2) : r), We(e.type, c, n || e.key, o || e.ref, null);
}
function Vn(e) {
  function t(r) {
    var n, o;
    return this.getChildContext || (n = /* @__PURE__ */ new Set(), (o = {})[t.__c] = this, this.getChildContext = function() {
      return o;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value != i.value && n.forEach(function(a) {
        a.__e = !0, Wt(a);
      });
    }, this.sub = function(i) {
      n.add(i);
      var a = i.componentWillUnmount;
      i.componentWillUnmount = function() {
        n && n.delete(i), a && a.call(i);
      };
    }), r.children;
  }
  return t.__c = "__cC" + gn++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(r, n) {
    return r.children(n);
  }).contextType = t, t;
}
qe = Ln.slice, y = { __e: function(e, t, r, n) {
  for (var o, i, a; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, n || {}), a = o.__d), a) return o.__E = o;
  } catch (c) {
    e = c;
  }
  throw e;
} }, hn = 0, j.prototype.setState = function(e, t) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = X({}, this.state), typeof e == "function" && (e = e(X({}, r), this.props)), e && X(r, e), e != null && this.__v && (t && this._sb.push(t), Wt(this));
}, j.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Wt(this));
}, j.prototype.render = T, de = [], pn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, _n = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, pt.__r = 0, mn = /(PointerCapture)$|Capture$/i, ir = 0, Bt = Vr(!1), Ut = Vr(!0), gn = 0;
function _t() {
  return _t = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _t.apply(this, arguments);
}
function En(e, t) {
  if (e == null) return {};
  var r, n, o = {}, i = Object.keys(e);
  for (n = 0; n < i.length; n++) t.indexOf(r = i[n]) >= 0 || (o[r] = e[r]);
  return o;
}
var Oo = ["context", "children"], Io = ["useFragment"];
function Mo(e, t, r, n) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = e, i._root = i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = function() {
    No.call(this, n);
  }, o.prototype.attributeChangedCallback = Do, o.prototype.disconnectedCallback = To, r = r || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = r, e.formAssociated && (o.formAssociated = !0), r.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom ? this._vdom.props[i] : this._props[i];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(i, null, a) : (this._props || (this._props = {}), this._props[i] = a);
      var c = typeof a;
      a != null && c !== "string" && c !== "boolean" && c !== "number" || this.setAttribute(i, a);
    } });
  }), customElements.define(t, o), o;
}
function Ro(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, r = En(e, Oo);
  return ur(t, r);
}
function No(e) {
  var t = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(t), this._vdom = D(Ro, _t({}, this._props, { context: t.detail.context }), $n(this, this._vdomComponent, e)), (this.hasAttribute("hydrate") ? lr : ce)(this._vdom, this._root);
}
function kn(e) {
  return e.replace(/-(\w)/g, function(t, r) {
    return r ? r.toUpperCase() : "";
  });
}
function Do(e, t, r) {
  if (this._vdom) {
    var n = {};
    n[e] = r = r ?? void 0, n[kn(e)] = r, this._vdom = ur(this._vdom, n), ce(this._vdom, this._root);
  }
}
function To() {
  ce(this._vdom = null, this._root);
}
function Er(e, t) {
  var r = this, n = e.useFragment, o = En(e, Io);
  return D(n ? T : "slot", _t({}, o, { ref: function(i) {
    i ? (r.ref = i, r._listener || (r._listener = function(a) {
      a.stopPropagation(), a.detail.context = t;
    }, i.addEventListener("_preact", r._listener))) : r.ref.removeEventListener("_preact", r._listener);
  } }));
}
function $n(e, t, r) {
  if (e.nodeType === 3) return e.data;
  if (e.nodeType !== 1) return null;
  var n = [], o = {}, i = 0, a = e.attributes, c = e.childNodes;
  for (i = a.length; i--; ) a[i].name !== "slot" && (o[a[i].name] = a[i].value, o[kn(a[i].name)] = a[i].value);
  for (i = c.length; i--; ) {
    var d = $n(c[i], null, r), u = c[i].slot;
    u ? o[u] = D(Er, { name: u }, d) : n[i] = d;
  }
  var h = !(!r || !r.shadow), l = t ? D(Er, { useFragment: !h }, n) : n;
  return !h && t && (e.innerHTML = ""), D(t || e.nodeName.toLowerCase(), o, l);
}
var Ao = 0;
function s(e, t, r, n, o, i) {
  t || (t = {});
  var a, c, d = t;
  if ("ref" in d) for (c in d = {}, t) c == "ref" ? a = t[c] : d[c] = t[c];
  var u = { type: e, props: d, key: r, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Ao, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (a = e.defaultProps)) for (c in a) d[c] === void 0 && (d[c] = a[c]);
  return y.vnode && y.vnode(u), u;
}
const kr = {
  SWITCH_CAMERA: "switch-camera",
  TOGGLE_MIRROR: "toggle-mirror"
};
var pe = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", e.CONTROL = "document-auto-capture:control", e.DETECTION_CHANGED = "document-auto-capture:detection-changed", e.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", e.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", e.STATE_CHANGED = "document-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", e))(pe || {}), xn = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", e.CONTROL = "palm-capture:control", e.DETECTION_CHANGED = "palm-capture:detection-changed", e.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", e.STATE_CHANGED = "palm-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", e))(xn || {});
const A = {
  CANDIDATE_SELECTION: "candidate_selection",
  DOCUMENT_CENTERING: "document_centering",
  DOCUMENT_NOT_PRESENT: "document_not_present",
  DOCUMENT_TOO_FAR: "document_too_far",
  SHARPNESS_TOO_LOW: "sharpness_too_low",
  BRIGHTNESS_TOO_LOW: "brightness_too_low",
  BRIGHTNESS_TOO_HIGH: "brightness_too_high",
  HOTSPOTS_PRESENT: "hotspots_present"
}, P = {
  LOADING: "loading",
  ERROR: "error",
  WAITING: "waiting",
  // TODO: this state may not be needed in the new architecture - consider removing on next major release version
  RUNNING: "running",
  COMPLETE: "complete",
  BLURRED: "blurred"
};
var le, O, Mt, $r, Ee = 0, On = [], I = y, xr = I.__b, Or = I.__r, Ir = I.diffed, Mr = I.__c, Rr = I.unmount, Nr = I.__;
function Ie(e, t) {
  I.__h && I.__h(O, e, Ee || t), Ee = 0;
  var r = O.__H || (O.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({}), r.__[e];
}
function z(e) {
  return Ee = 1, dr(Rn, e);
}
function dr(e, t, r) {
  var n = Ie(le++, 2);
  if (n.t = e, !n.__c && (n.__ = [r ? r(t) : Rn(void 0, t), function(c) {
    var d = n.__N ? n.__N[0] : n.__[0], u = n.t(d, c);
    d !== u && (n.__N = [u, n.__[1]], n.__c.setState({}));
  }], n.__c = O, !O.__f)) {
    var o = function(c, d, u) {
      if (!n.__c.__H) return !0;
      var h = n.__c.__H.__.filter(function(p) {
        return !!p.__c;
      });
      if (h.every(function(p) {
        return !p.__N;
      })) return !i || i.call(this, c, d, u);
      var l = n.__c.props !== c;
      return h.forEach(function(p) {
        if (p.__N) {
          var f = p.__[0];
          p.__ = p.__N, p.__N = void 0, f !== p.__[0] && (l = !0);
        }
      }), i && i.call(this, c, d, u) || l;
    };
    O.__f = !0;
    var i = O.shouldComponentUpdate, a = O.componentWillUpdate;
    O.componentWillUpdate = function(c, d, u) {
      if (this.__e) {
        var h = i;
        i = void 0, o(c, d, u), i = h;
      }
      a && a.call(this, c, d, u);
    }, O.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function ne(e, t) {
  var r = Ie(le++, 3);
  !I.__s && fr(r.__H, t) && (r.__ = e, r.u = t, O.__H.__h.push(r));
}
function Me(e, t) {
  var r = Ie(le++, 4);
  !I.__s && fr(r.__H, t) && (r.__ = e, r.u = t, O.__h.push(r));
}
function Xe(e) {
  return Ee = 5, re(function() {
    return { current: e };
  }, []);
}
function In(e, t, r) {
  Ee = 6, Me(function() {
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
  var r = Ie(le++, 7);
  return fr(r.__H, t) && (r.__ = e(), r.__H = t, r.__h = e), r.__;
}
function _e(e, t) {
  return Ee = 8, re(function() {
    return e;
  }, t);
}
function Ke(e) {
  var t = O.context[e.__c], r = Ie(le++, 9);
  return r.c = e, t ? (r.__ == null && (r.__ = !0, t.sub(O)), t.props.value) : e.__;
}
function mt(e, t) {
  I.useDebugValue && I.useDebugValue(t ? t(e) : e);
}
function Mn() {
  var e = Ie(le++, 11);
  if (!e.__) {
    for (var t = O.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var r = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + r[0] + "-" + r[1]++;
  }
  return e.__;
}
function Po() {
  for (var e; e = On.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(at), e.__H.__h.forEach(zt), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], I.__e(t, e.__v);
  }
}
I.__b = function(e) {
  O = null, xr && xr(e);
}, I.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Nr && Nr(e, t);
}, I.__r = function(e) {
  Or && Or(e), le = 0;
  var t = (O = e.__c).__H;
  t && (Mt === O ? (t.__h = [], O.__h = [], t.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (t.__h.forEach(at), t.__h.forEach(zt), t.__h = [], le = 0)), Mt = O;
}, I.diffed = function(e) {
  Ir && Ir(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (On.push(t) !== 1 && $r === I.requestAnimationFrame || (($r = I.requestAnimationFrame) || Ho)(Po)), t.__H.__.forEach(function(r) {
    r.u && (r.__H = r.u), r.u = void 0;
  })), Mt = O = null;
}, I.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.forEach(at), r.__h = r.__h.filter(function(n) {
        return !n.__ || zt(n);
      });
    } catch (n) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], I.__e(n, r.__v);
    }
  }), Mr && Mr(e, t);
}, I.unmount = function(e) {
  Rr && Rr(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      at(n);
    } catch (o) {
      t = o;
    }
  }), r.__H = void 0, t && I.__e(t, r.__v));
};
var Dr = typeof requestAnimationFrame == "function";
function Ho(e) {
  var t, r = function() {
    clearTimeout(n), Dr && cancelAnimationFrame(t), setTimeout(e);
  }, n = setTimeout(r, 35);
  Dr && (t = requestAnimationFrame(r));
}
function at(e) {
  var t = O, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), O = t;
}
function zt(e) {
  var t = O;
  e.__c = e.__(), O = t;
}
function fr(e, t) {
  return !e || e.length !== t.length || t.some(function(r, n) {
    return r !== e[n];
  });
}
function Rn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
var N = function() {
  return N = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, N.apply(this, arguments);
};
function Le(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, i; n < o; n++)
    (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function Zo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Bo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Uo = /* @__PURE__ */ Zo(
  function(e) {
    return Bo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Nn(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function Gt(e, t) {
  for (var r in e) if (r !== "__source" && !(r in t)) return !0;
  for (var n in t) if (n !== "__source" && e[n] !== t[n]) return !0;
  return !1;
}
function Dn(e, t) {
  var r = t(), n = z({ t: { __: r, u: t } }), o = n[0].t, i = n[1];
  return Me(function() {
    o.__ = r, o.u = t, Rt(o) && i({ t: o });
  }, [e, r, t]), ne(function() {
    return Rt(o) && i({ t: o }), e(function() {
      Rt(o) && i({ t: o });
    });
  }, [e]), r;
}
function Rt(e) {
  var t, r, n = e.u, o = e.__;
  try {
    var i = n();
    return !((t = o) === (r = i) && (t !== 0 || 1 / t == 1 / r) || t != t && r != r);
  } catch {
    return !0;
  }
}
function Tn(e) {
  e();
}
function An(e) {
  return e;
}
function Pn() {
  return [!1, Tn];
}
var Hn = Me;
function jt(e, t) {
  this.props = e, this.context = t;
}
function Wo(e, t) {
  function r(o) {
    var i = this.props.ref, a = i == o.ref;
    return !a && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !a : Gt(this.props, o);
  }
  function n(o) {
    return this.shouldComponentUpdate = r, D(e, o);
  }
  return n.displayName = "Memo(" + (e.displayName || e.name) + ")", n.prototype.isReactComponent = !0, n.__f = !0, n.type = e, n;
}
(jt.prototype = new j()).isPureReactComponent = !0, jt.prototype.shouldComponentUpdate = function(e, t) {
  return Gt(this.props, e) || Gt(this.state, t);
};
var Tr = y.__b;
y.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Tr && Tr(e);
};
var Fo = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.forward_ref") || 3911;
function zo(e) {
  function t(r) {
    var n = Nn({}, r);
    return delete n.ref, e(n, r.ref || null);
  }
  return t.$$typeof = Fo, t.render = e, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Ar = function(e, t) {
  return e == null ? null : te(te(e).map(t));
}, Go = { map: Ar, forEach: Ar, count: function(e) {
  return e ? te(e).length : 0;
}, only: function(e) {
  var t = te(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: te }, jo = y.__e;
y.__e = function(e, t, r, n) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = r.__e, t.__k = r.__k), o.__c(e, t);
  }
  jo(e, t, r, n);
};
var Pr = y.unmount;
function Zn(e, t, r) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), e.__c.__H = null), (e = Nn({}, e)).__c != null && (e.__c.__P === r && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(n) {
    return Zn(n, t, r);
  })), e;
}
function Bn(e, t, r) {
  return e && r && (e.__v = null, e.__k = e.__k && e.__k.map(function(n) {
    return Bn(n, t, r);
  }), e.__c && e.__c.__P === t && (e.__e && r.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = r)), e;
}
function st() {
  this.__u = 0, this.o = null, this.__b = null;
}
function Un(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function qo(e) {
  var t, r, n, o = null;
  function i(a) {
    if (t || (t = e()).then(function(c) {
      c && (o = c.default || c), n = !0;
    }, function(c) {
      r = c, n = !0;
    }), r) throw r;
    if (!n) throw t;
    return o ? D(o, a) : null;
  }
  return i.displayName = "Lazy", i.__f = !0, i;
}
function He() {
  this.i = null, this.l = null;
}
y.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Pr && Pr(e);
}, (st.prototype = new j()).__c = function(e, t) {
  var r = t.__c, n = this;
  n.o == null && (n.o = []), n.o.push(r);
  var o = Un(n.__v), i = !1, a = function() {
    i || (i = !0, r.__R = null, o ? o(c) : c());
  };
  r.__R = a;
  var c = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var d = n.state.__a;
        n.__v.__k[0] = Bn(d, d.__c.__P, d.__c.__O);
      }
      var u;
      for (n.setState({ __a: n.__b = null }); u = n.o.pop(); ) u.forceUpdate();
    }
  };
  n.__u++ || 32 & t.__u || n.setState({ __a: n.__b = n.__v.__k[0] }), e.then(a, a);
}, st.prototype.componentWillUnmount = function() {
  this.o = [];
}, st.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = Zn(this.__b, r, n.__O = n.__P);
    }
    this.__b = null;
  }
  var o = t.__a && D(T, null, e.fallback);
  return o && (o.__u &= -33), [D(T, null, t.__a ? null : e.children), o];
};
var Hr = function(e, t, r) {
  if (++r[1] === r[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (r = e.i; r; ) {
    for (; r.length > 3; ) r.pop()();
    if (r[1] < r[0]) break;
    e.i = r = r[2];
  }
};
function Yo(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function Xo(e) {
  var t = this, r = e.h;
  if (t.componentWillUnmount = function() {
    ce(null, t.v), t.v = null, t.h = null;
  }, t.h && t.h !== r && t.componentWillUnmount(), !t.v) {
    for (var n = t.__v; n !== null && !n.__m && n.__ !== null; ) n = n.__;
    t.h = r, t.v = { nodeType: 1, parentNode: r, childNodes: [], __k: { __m: n.__m }, contains: function() {
      return !0;
    }, insertBefore: function(o, i) {
      this.childNodes.push(o), t.h.insertBefore(o, i);
    }, removeChild: function(o) {
      this.childNodes.splice(this.childNodes.indexOf(o) >>> 1, 1), t.h.removeChild(o);
    } };
  }
  ce(D(Yo, { context: t.context }, e.__v), t.v);
}
function Ko(e, t) {
  var r = D(Xo, { __v: e, h: t });
  return r.containerInfo = t, r;
}
(He.prototype = new j()).__a = function(e) {
  var t = this, r = Un(t.__v), n = t.l.get(e);
  return n[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (n.push(o), Hr(t, e, n)) : o();
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
    Hr(e, r, t);
  });
};
var Wn = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || 60103, Jo = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Qo = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, ei = /[A-Z0-9]/g, ti = typeof document < "u", ri = function(e) {
  return (typeof Symbol < "u" && typeof /* @__PURE__ */ Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function ni(e, t, r) {
  return t.__k == null && (t.textContent = ""), ce(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
function oi(e, t, r) {
  return lr(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
j.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(j.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Zr = y.event;
function ii() {
}
function ai() {
  return this.cancelBubble;
}
function si() {
  return this.defaultPrevented;
}
y.event = function(e) {
  return Zr && (e = Zr(e)), e.persist = ii, e.isPropagationStopped = ai, e.isDefaultPrevented = si, e.nativeEvent = e;
};
var hr, ci = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Br = y.vnode;
y.vnode = function(e) {
  typeof e.type == "string" && (function(t) {
    var r = t.props, n = t.type, o = {}, i = n.indexOf("-") === -1;
    for (var a in r) {
      var c = r[a];
      if (!(a === "value" && "defaultValue" in r && c == null || ti && a === "children" && n === "noscript" || a === "class" || a === "className")) {
        var d = a.toLowerCase();
        a === "defaultValue" && "value" in r && r.value == null ? a = "value" : a === "download" && c === !0 ? c = "" : d === "translate" && c === "no" ? c = !1 : d[0] === "o" && d[1] === "n" ? d === "ondoubleclick" ? a = "ondblclick" : d !== "onchange" || n !== "input" && n !== "textarea" || ri(r.type) ? d === "onfocus" ? a = "onfocusin" : d === "onblur" ? a = "onfocusout" : Qo.test(a) && (a = d) : d = a = "oninput" : i && Jo.test(a) ? a = a.replace(ei, "-$&").toLowerCase() : c === null && (c = void 0), d === "oninput" && o[a = d] && (a = "oninputCapture"), o[a] = c;
      }
    }
    n == "select" && o.multiple && Array.isArray(o.value) && (o.value = te(r.children).forEach(function(u) {
      u.props.selected = o.value.indexOf(u.props.value) != -1;
    })), n == "select" && o.defaultValue != null && (o.value = te(r.children).forEach(function(u) {
      u.props.selected = o.multiple ? o.defaultValue.indexOf(u.props.value) != -1 : o.defaultValue == u.props.value;
    })), r.class && !r.className ? (o.class = r.class, Object.defineProperty(o, "className", ci)) : (r.className && !r.class || r.class && r.className) && (o.class = o.className = r.className), t.props = o;
  })(e), e.$$typeof = Wn, Br && Br(e);
};
var Ur = y.__r;
y.__r = function(e) {
  Ur && Ur(e), hr = e.__c;
};
var Wr = y.diffed;
y.diffed = function(e) {
  Wr && Wr(e);
  var t = e.props, r = e.__e;
  r != null && e.type === "textarea" && "value" in t && t.value !== r.value && (r.value = t.value == null ? "" : t.value), hr = null;
};
var li = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return hr.__n[e.__c].props.value;
}, useCallback: _e, useContext: Ke, useDebugValue: mt, useDeferredValue: An, useEffect: ne, useId: Mn, useImperativeHandle: In, useInsertionEffect: Hn, useLayoutEffect: Me, useMemo: re, useReducer: dr, useRef: Xe, useState: z, useSyncExternalStore: Dn, useTransition: Pn } } };
function ui(e) {
  return D.bind(null, e);
}
function vt(e) {
  return !!e && e.$$typeof === Wn;
}
function di(e) {
  return vt(e) && e.type === T;
}
function fi(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function hi(e) {
  return vt(e) ? ur.apply(null, arguments) : e;
}
function pi(e) {
  return !!e.__k && (ce(null, e), !0);
}
function _i(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var mi = function(e, t) {
  return e(t);
}, gi = function(e, t) {
  return e(t);
}, Li = T, yi = vt, oe = { useState: z, useId: Mn, useReducer: dr, useEffect: ne, useLayoutEffect: Me, useInsertionEffect: Hn, useTransition: Pn, useDeferredValue: An, useSyncExternalStore: Dn, startTransition: Tn, useRef: Xe, useImperativeHandle: In, useMemo: re, useCallback: _e, useContext: Ke, useDebugValue: mt, version: "18.3.1", Children: Go, render: ni, hydrate: oi, unmountComponentAtNode: pi, createPortal: Ko, createElement: D, createContext: Vn, createFactory: ui, cloneElement: hi, createRef: Vo, Fragment: T, isValidElement: vt, isElement: yi, isFragment: di, isMemo: fi, findDOMNode: _i, Component: j, PureComponent: jt, memo: Wo, forwardRef: zo, flushSync: gi, unstable_batchedUpdates: mi, StrictMode: Li, Suspense: st, SuspenseList: He, lazy: qo, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: li };
function vi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Nt, Fr;
function Ci() {
  return Fr || (Fr = 1, Nt = function(t, r, n, o) {
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
    for (var d = Object.prototype.hasOwnProperty.bind(r), u = 0; u < a.length; u++) {
      var h = a[u];
      if (!d(h))
        return !1;
      var l = t[h], p = r[h];
      if (i = n ? n.call(o, l, p, h) : void 0, i === !1 || i === void 0 && l !== p)
        return !1;
    }
    return !0;
  }), Nt;
}
var wi = Ci();
const Si = /* @__PURE__ */ vi(wi);
var x = "-ms-", Fe = "-moz-", k = "-webkit-", Fn = "comm", Ct = "rule", pr = "decl", bi = "@import", zn = "@keyframes", Vi = "@layer", Gn = Math.abs, _r = String.fromCharCode, qt = Object.assign;
function Ei(e, t) {
  return R(e, 0) ^ 45 ? (((t << 2 ^ R(e, 0)) << 2 ^ R(e, 1)) << 2 ^ R(e, 2)) << 2 ^ R(e, 3) : 0;
}
function jn(e) {
  return e.trim();
}
function Q(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function v(e, t, r) {
  return e.replace(t, r);
}
function ct(e, t, r) {
  return e.indexOf(t, r);
}
function R(e, t) {
  return e.charCodeAt(t) | 0;
}
function ke(e, t, r) {
  return e.slice(t, r);
}
function Y(e) {
  return e.length;
}
function qn(e) {
  return e.length;
}
function Ze(e, t) {
  return t.push(e), e;
}
function ki(e, t) {
  return e.map(t).join("");
}
function zr(e, t) {
  return e.filter(function(r) {
    return !Q(r, t);
  });
}
var wt = 1, $e = 1, Yn = 0, G = 0, M = 0, Re = "";
function St(e, t, r, n, o, i, a, c) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: wt, column: $e, length: a, return: "", siblings: c };
}
function se(e, t) {
  return qt(St("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Se(e) {
  for (; e.root; )
    e = se(e.root, { children: [e] });
  Ze(e, e.siblings);
}
function $i() {
  return M;
}
function xi() {
  return M = G > 0 ? R(Re, --G) : 0, $e--, M === 10 && ($e = 1, wt--), M;
}
function q() {
  return M = G < Yn ? R(Re, G++) : 0, $e++, M === 10 && ($e = 1, wt++), M;
}
function me() {
  return R(Re, G);
}
function lt() {
  return G;
}
function bt(e, t) {
  return ke(Re, e, t);
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
function Oi(e) {
  return wt = $e = 1, Yn = Y(Re = e), G = 0, [];
}
function Ii(e) {
  return Re = "", e;
}
function Dt(e) {
  return jn(bt(G - 1, Xt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Mi(e) {
  for (; (M = me()) && M < 33; )
    q();
  return Yt(e) > 2 || Yt(M) > 3 ? "" : " ";
}
function Ri(e, t) {
  for (; --t && q() && !(M < 48 || M > 102 || M > 57 && M < 65 || M > 70 && M < 97); )
    ;
  return bt(e, lt() + (t < 6 && me() == 32 && q() == 32));
}
function Xt(e) {
  for (; q(); )
    switch (M) {
      // ] ) " '
      case e:
        return G;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Xt(M);
        break;
      // (
      case 40:
        e === 41 && Xt(e);
        break;
      // \
      case 92:
        q();
        break;
    }
  return G;
}
function Ni(e, t) {
  for (; q() && e + M !== 57; )
    if (e + M === 84 && me() === 47)
      break;
  return "/*" + bt(t, G - 1) + "*" + _r(e === 47 ? e : q());
}
function Di(e) {
  for (; !Yt(me()); )
    q();
  return bt(e, G);
}
function Ti(e) {
  return Ii(ut("", null, null, null, [""], e = Oi(e), 0, [0], e));
}
function ut(e, t, r, n, o, i, a, c, d) {
  for (var u = 0, h = 0, l = a, p = 0, f = 0, _ = 0, w = 1, S = 1, m = 1, g = 0, b = "", E = o, $ = i, C = n, L = b; S; )
    switch (_ = g, g = q()) {
      // (
      case 40:
        if (_ != 108 && R(L, l - 1) == 58) {
          ct(L += v(Dt(g), "&", "&\f"), "&\f", Gn(u ? c[u - 1] : 0)) != -1 && (m = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        L += Dt(g);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        L += Mi(_);
        break;
      // \
      case 92:
        L += Ri(lt() - 1, 7);
        continue;
      // /
      case 47:
        switch (me()) {
          case 42:
          case 47:
            Ze(Ai(Ni(q(), lt()), t, r, d), d);
            break;
          default:
            L += "/";
        }
        break;
      // {
      case 123 * w:
        c[u++] = Y(L) * m;
      // } ; \0
      case 125 * w:
      case 59:
      case 0:
        switch (g) {
          // \0 }
          case 0:
          case 125:
            S = 0;
          // ;
          case 59 + h:
            m == -1 && (L = v(L, /\f/g, "")), f > 0 && Y(L) - l && Ze(f > 32 ? jr(L + ";", n, r, l - 1, d) : jr(v(L, " ", "") + ";", n, r, l - 2, d), d);
            break;
          // @ ;
          case 59:
            L += ";";
          // { rule/at-rule
          default:
            if (Ze(C = Gr(L, t, r, u, h, o, c, b, E = [], $ = [], l, i), i), g === 123)
              if (h === 0)
                ut(L, t, C, C, E, i, l, c, $);
              else
                switch (p === 99 && R(L, 3) === 110 ? 100 : p) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ut(e, C, C, n && Ze(Gr(e, C, C, 0, 0, o, c, b, o, E = [], l, $), $), o, $, l, c, n ? E : $);
                    break;
                  default:
                    ut(L, C, C, C, [""], $, 0, c, $);
                }
        }
        u = h = f = 0, w = m = 1, b = L = "", l = a;
        break;
      // :
      case 58:
        l = 1 + Y(L), f = _;
      default:
        if (w < 1) {
          if (g == 123)
            --w;
          else if (g == 125 && w++ == 0 && xi() == 125)
            continue;
        }
        switch (L += _r(g), g * w) {
          // &
          case 38:
            m = h > 0 ? 1 : (L += "\f", -1);
            break;
          // ,
          case 44:
            c[u++] = (Y(L) - 1) * m, m = 1;
            break;
          // @
          case 64:
            me() === 45 && (L += Dt(q())), p = me(), h = l = Y(b = L += Di(lt())), g++;
            break;
          // -
          case 45:
            _ === 45 && Y(L) == 2 && (w = 0);
        }
    }
  return i;
}
function Gr(e, t, r, n, o, i, a, c, d, u, h, l) {
  for (var p = o - 1, f = o === 0 ? i : [""], _ = qn(f), w = 0, S = 0, m = 0; w < n; ++w)
    for (var g = 0, b = ke(e, p + 1, p = Gn(S = a[w])), E = e; g < _; ++g)
      (E = jn(S > 0 ? f[g] + " " + b : v(b, /&\f/g, f[g]))) && (d[m++] = E);
  return St(e, t, r, o === 0 ? Ct : c, d, u, h, l);
}
function Ai(e, t, r, n) {
  return St(e, t, r, Fn, _r($i()), ke(e, 2, -2), 0, n);
}
function jr(e, t, r, n, o) {
  return St(e, t, r, pr, ke(e, 0, n), ke(e, n + 1, -1), n, o);
}
function Xn(e, t, r) {
  switch (Ei(e, t)) {
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
      return k + e + Fe + e + x + e + e;
    // writing-mode
    case 5936:
      switch (R(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return k + e + x + v(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return k + e + x + v(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return k + e + x + v(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return k + e + x + e + e;
    // order
    case 6165:
      return k + e + x + "flex-" + e + e;
    // align-items
    case 5187:
      return k + e + v(e, /(\w+).+(:[^]+)/, k + "box-$1$2" + x + "flex-$1$2") + e;
    // align-self
    case 5443:
      return k + e + x + "flex-item-" + v(e, /flex-|-self/g, "") + (Q(e, /flex-|baseline/) ? "" : x + "grid-row-" + v(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return k + e + x + "flex-line-pack" + v(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return k + e + x + v(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return k + e + x + v(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return k + "box-" + v(e, "-grow", "") + k + e + x + v(e, "grow", "positive") + e;
    // transition
    case 4554:
      return k + v(e, /([^-])(transform)/g, "$1" + k + "$2") + e;
    // cursor
    case 6187:
      return v(v(v(e, /(zoom-|grab)/, k + "$1"), /(image-set)/, k + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return v(e, /(image-set\([^]*)/, k + "$1$`$1");
    // justify-content
    case 4968:
      return v(v(e, /(.+:)(flex-)?(.*)/, k + "box-pack:$3" + x + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + k + e + e;
    // justify-self
    case 4200:
      if (!Q(e, /flex-|baseline/)) return x + "grid-column-align" + ke(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return x + v(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return r && r.some(function(n, o) {
        return t = o, Q(n.props, /grid-\w+-end/);
      }) ? ~ct(e + (r = r[t].value), "span", 0) ? e : x + v(e, "-start", "") + e + x + "grid-row-span:" + (~ct(r, "span", 0) ? Q(r, /\d+/) : +Q(r, /\d+/) - +Q(e, /\d+/)) + ";" : x + v(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return r && r.some(function(n) {
        return Q(n.props, /grid-\w+-start/);
      }) ? e : x + v(v(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return v(e, /(.+)-inline(.+)/, k + "$1$2") + e;
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
            return v(e, /(.+:)(.+)-([^]+)/, "$1" + k + "$2-$3$1" + Fe + (R(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~ct(e, "stretch", 0) ? Xn(v(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return v(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, i, a, c, d, u) {
        return x + o + ":" + i + u + (a ? x + o + "-span:" + (c ? d : +d - +i) + u : "") + e;
      });
    // position: sticky
    case 4949:
      if (R(e, t + 6) === 121)
        return v(e, ":", ":" + k) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (R(e, R(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return v(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + k + (R(e, 14) === 45 ? "inline-" : "") + "box$3$1" + k + "$2$3$1" + x + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return v(e, ":", ":" + x) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return v(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function gt(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function Pi(e, t, r, n) {
  switch (e.type) {
    case Vi:
      if (e.children.length) break;
    case bi:
    case pr:
      return e.return = e.return || e.value;
    case Fn:
      return "";
    case zn:
      return e.return = e.value + "{" + gt(e.children, n) + "}";
    case Ct:
      if (!Y(e.value = e.props.join(","))) return "";
  }
  return Y(r = gt(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Hi(e) {
  var t = qn(e);
  return function(r, n, o, i) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](r, n, o, i) || "";
    return a;
  };
}
function Zi(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Bi(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case pr:
        e.return = Xn(e.value, e.length, r);
        return;
      case zn:
        return gt([se(e, { value: v(e.value, "@", "@" + k) })], n);
      case Ct:
        if (e.length)
          return ki(r = e.props, function(o) {
            switch (Q(o, n = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Se(se(e, { props: [v(o, /:(read-\w+)/, ":" + Fe + "$1")] })), Se(se(e, { props: [o] })), qt(e, { props: zr(r, n) });
                break;
              // :placeholder
              case "::placeholder":
                Se(se(e, { props: [v(o, /:(plac\w+)/, ":" + k + "input-$1")] })), Se(se(e, { props: [v(o, /:(plac\w+)/, ":" + Fe + "$1")] })), Se(se(e, { props: [v(o, /:(plac\w+)/, x + "input-$1")] })), Se(se(e, { props: [o] })), qt(e, { props: zr(r, n) });
                break;
            }
            return "";
          });
    }
}
var Ui = {
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
}, V = {}, ye = typeof process < "u" && V !== void 0 && (V.REACT_APP_SC_ATTR || V.SC_ATTR) || "data-styled", Kn = "active", Jn = "data-styled-version", Vt = "6.1.19", mr = `/*!sc*/
`, Lt = typeof window < "u" && typeof document < "u", Wi = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && V !== void 0 && V.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && V.REACT_APP_SC_DISABLE_SPEEDY !== "" ? V.REACT_APP_SC_DISABLE_SPEEDY !== "false" && V.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && V !== void 0 && V.SC_DISABLE_SPEEDY !== void 0 && V.SC_DISABLE_SPEEDY !== "" ? V.SC_DISABLE_SPEEDY !== "false" && V.SC_DISABLE_SPEEDY : V.NODE_ENV !== "production"), qr = /invalid hook call/i, rt = /* @__PURE__ */ new Set(), Fi = function(e, t) {
  if (V.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", n = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, o = console.error;
    try {
      var i = !0;
      console.error = function(a) {
        for (var c = [], d = 1; d < arguments.length; d++) c[d - 1] = arguments[d];
        qr.test(a) ? (i = !1, rt.delete(n)) : o.apply(void 0, Le([a], c, !1));
      }, Xe(), i && !rt.has(n) && (console.warn(n), rt.add(n));
    } catch (a) {
      qr.test(a.message) && rt.delete(n);
    } finally {
      console.error = o;
    }
  }
}, Et = Object.freeze([]), xe = Object.freeze({});
function zi(e, t, r) {
  return r === void 0 && (r = xe), e.theme !== r.theme && e.theme || t || r.theme;
}
var Kt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Gi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ji = /(^-|-$)/g;
function Yr(e) {
  return e.replace(Gi, "-").replace(ji, "");
}
var qi = /(a)(d)/gi, nt = 52, Xr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Jt(e) {
  var t, r = "";
  for (t = Math.abs(e); t > nt; t = t / nt | 0) r = Xr(t % nt) + r;
  return (Xr(t % nt) + r).replace(qi, "$1-$2");
}
var Tt, Qn = 5381, fe = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, eo = function(e) {
  return fe(Qn, e);
};
function to(e) {
  return Jt(eo(e) >>> 0);
}
function ro(e) {
  return V.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function At(e) {
  return typeof e == "string" && (V.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var no = typeof Symbol == "function" && Symbol.for, oo = no ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, Yi = no ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, Xi = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Ki = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, io = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Ji = ((Tt = {})[Yi] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Tt[oo] = io, Tt);
function Kr(e) {
  return ("type" in (t = e) && t.type.$$typeof) === oo ? io : "$$typeof" in e ? Ji[e.$$typeof] : Xi;
  var t;
}
var Qi = Object.defineProperty, ea = Object.getOwnPropertyNames, Jr = Object.getOwnPropertySymbols, ta = Object.getOwnPropertyDescriptor, ra = Object.getPrototypeOf, Qr = Object.prototype;
function ao(e, t, r) {
  if (typeof t != "string") {
    if (Qr) {
      var n = ra(t);
      n && n !== Qr && ao(e, n, r);
    }
    var o = ea(t);
    Jr && (o = o.concat(Jr(t)));
    for (var i = Kr(e), a = Kr(t), c = 0; c < o.length; ++c) {
      var d = o[c];
      if (!(d in Ki || r && r[d] || a && d in a || i && d in i)) {
        var u = ta(t, d);
        try {
          Qi(e, d, u);
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
function gr(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function he(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Qt(e, t) {
  if (e.length === 0) return "";
  for (var r = e[0], n = 1; n < e.length; n++) r += e[n];
  return r;
}
function Oe(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function er(e, t, r) {
  if (r === void 0 && (r = !1), !r && !Oe(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var n = 0; n < t.length; n++) e[n] = er(e[n], t[n]);
  else if (Oe(t)) for (var n in t) e[n] = er(e[n], t[n]);
  return e;
}
function Lr(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var na = V.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
  for (var r = e[0], n = [], o = 1, i = e.length; o < i; o += 1) n.push(e[o]);
  return n.forEach(function(a) {
    r = r.replace(/%[a-z]/, a);
  }), r;
}
function K(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  return V.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(oa.apply(void 0, Le([na[e]], t, !1)).trim());
}
var ia = (function() {
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
    for (var c = this.indexOfGroup(t + 1), d = (a = 0, r.length); a < d; a++) this.tag.insertRule(c, r[a]) && (this.groupSizes[t]++, c++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], n = this.indexOfGroup(t), o = n + r;
      this.groupSizes[t] = 0;
      for (var i = n; i < o; i++) this.tag.deleteRule(n);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0) return r;
    for (var n = this.groupSizes[t], o = this.indexOfGroup(t), i = o + n, a = o; a < i; a++) r += "".concat(this.tag.getRule(a)).concat(mr);
    return r;
  }, e;
})(), aa = 1 << 30, dt = /* @__PURE__ */ new Map(), yt = /* @__PURE__ */ new Map(), ft = 1, ot = function(e) {
  if (dt.has(e)) return dt.get(e);
  for (; yt.has(ft); ) ft++;
  var t = ft++;
  if (V.NODE_ENV !== "production" && ((0 | t) < 0 || t > aa)) throw K(16, "".concat(t));
  return dt.set(e, t), yt.set(t, e), t;
}, sa = function(e, t) {
  ft = t + 1, dt.set(e, t), yt.set(t, e);
}, ca = "style[".concat(ye, "][").concat(Jn, '="').concat(Vt, '"]'), la = new RegExp("^".concat(ye, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ua = function(e, t, r) {
  for (var n, o = r.split(","), i = 0, a = o.length; i < a; i++) (n = o[i]) && e.registerName(t, n);
}, da = function(e, t) {
  for (var r, n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(mr), o = [], i = 0, a = n.length; i < a; i++) {
    var c = n[i].trim();
    if (c) {
      var d = c.match(la);
      if (d) {
        var u = 0 | parseInt(d[1], 10), h = d[2];
        u !== 0 && (sa(h, u), ua(e, h, d[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else o.push(c);
    }
  }
}, en = function(e) {
  for (var t = document.querySelectorAll(ca), r = 0, n = t.length; r < n; r++) {
    var o = t[r];
    o && o.getAttribute(ye) !== Kn && (da(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function fa() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var so = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = (function(c) {
    var d = Array.from(c.querySelectorAll("style[".concat(ye, "]")));
    return d[d.length - 1];
  })(r), i = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(ye, Kn), n.setAttribute(Jn, Vt);
  var a = fa();
  return a && n.setAttribute("nonce", a), r.insertBefore(n, i), n;
}, ha = (function() {
  function e(t) {
    this.element = so(t), this.element.appendChild(document.createTextNode("")), this.sheet = (function(r) {
      if (r.sheet) return r.sheet;
      for (var n = document.styleSheets, o = 0, i = n.length; o < i; o++) {
        var a = n[o];
        if (a.ownerNode === r) return a;
      }
      throw K(17);
    })(this.element), this.length = 0;
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
})(), pa = (function() {
  function e(t) {
    this.element = so(t), this.nodes = this.element.childNodes, this.length = 0;
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
})(), _a = (function() {
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
})(), tn = Lt, ma = { isServer: !Lt, useCSSOMInjection: !Wi }, co = (function() {
  function e(t, r, n) {
    t === void 0 && (t = xe), r === void 0 && (r = {});
    var o = this;
    this.options = N(N({}, ma), t), this.gs = r, this.names = new Map(n), this.server = !!t.isServer, !this.server && Lt && tn && (tn = !1, en(this)), Lr(this, function() {
      return (function(i) {
        for (var a = i.getTag(), c = a.length, d = "", u = function(l) {
          var p = (function(m) {
            return yt.get(m);
          })(l);
          if (p === void 0) return "continue";
          var f = i.names.get(p), _ = a.getGroup(l);
          if (f === void 0 || !f.size || _.length === 0) return "continue";
          var w = "".concat(ye, ".g").concat(l, '[id="').concat(p, '"]'), S = "";
          f !== void 0 && f.forEach(function(m) {
            m.length > 0 && (S += "".concat(m, ","));
          }), d += "".concat(_).concat(w, '{content:"').concat(S, '"}').concat(mr);
        }, h = 0; h < c; h++) u(h);
        return d;
      })(o);
    });
  }
  return e.registerId = function(t) {
    return ot(t);
  }, e.prototype.rehydrate = function() {
    !this.server && Lt && en(this);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(N(N({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = (function(r) {
      var n = r.useCSSOMInjection, o = r.target;
      return r.isServer ? new _a(o) : n ? new ha(o) : new pa(o);
    })(this.options), new ia(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (ot(t), this.names.has(t)) this.names.get(t).add(r);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(r), this.names.set(t, n);
    }
  }, e.prototype.insertRules = function(t, r, n) {
    this.registerName(t, r), this.getTag().insertRules(ot(t), n);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(ot(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
})(), ga = /&/g, La = /^\s*\/\/.*$/gm;
function lo(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(n) {
      return "".concat(t, " ").concat(n);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = lo(r.children, t)), r;
  });
}
function uo(e) {
  var t, r, n, o = e === void 0 ? xe : e, i = o.options, a = i === void 0 ? xe : i, c = o.plugins, d = c === void 0 ? Et : c, u = function(p, f, _) {
    return _.startsWith(r) && _.endsWith(r) && _.replaceAll(r, "").length > 0 ? ".".concat(t) : p;
  }, h = d.slice();
  h.push(function(p) {
    p.type === Ct && p.value.includes("&") && (p.props[0] = p.props[0].replace(ga, r).replace(n, u));
  }), a.prefix && h.push(Bi), h.push(Pi);
  var l = function(p, f, _, w) {
    f === void 0 && (f = ""), _ === void 0 && (_ = ""), w === void 0 && (w = "&"), t = w, r = f, n = new RegExp("\\".concat(r, "\\b"), "g");
    var S = p.replace(La, ""), m = Ti(_ || f ? "".concat(_, " ").concat(f, " { ").concat(S, " }") : S);
    a.namespace && (m = lo(m, a.namespace));
    var g = [];
    return gt(m, Hi(h.concat(Zi(function(b) {
      return g.push(b);
    })))), g;
  };
  return l.hash = d.length ? d.reduce(function(p, f) {
    return f.name || K(15), fe(p, f.name);
  }, Qn).toString() : "", l;
}
var ya = new co(), tr = uo(), yr = oe.createContext({ shouldForwardProp: void 0, styleSheet: ya, stylis: tr });
yr.Consumer;
var va = oe.createContext(void 0);
function rr() {
  return Ke(yr);
}
function Ca(e) {
  var t = z(e.stylisPlugins), r = t[0], n = t[1], o = rr().styleSheet, i = re(function() {
    var d = o;
    return e.sheet ? d = e.sheet : e.target && (d = d.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (d = d.reconstructWithOptions({ useCSSOMInjection: !1 })), d;
  }, [e.disableCSSOMInjection, e.sheet, e.target, o]), a = re(function() {
    return uo({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: r });
  }, [e.enableVendorPrefixes, e.namespace, r]);
  ne(function() {
    Si(r, e.stylisPlugins) || n(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var c = re(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: a };
  }, [e.shouldForwardProp, i, a]);
  return oe.createElement(yr.Provider, { value: c }, oe.createElement(va.Provider, { value: a }, e.children));
}
var nr = (function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, i) {
      i === void 0 && (i = tr);
      var a = n.name + i.hash;
      o.hasNameForId(n.id, a) || o.insertRules(n.id, a, i(n.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, Lr(this, function() {
      throw K(12, String(n.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = tr), this.name + t.hash;
  }, e;
})(), wa = function(e) {
  return e >= "A" && e <= "Z";
};
function rn(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var n = e[r];
    if (r === 1 && n === "-" && e[0] === "-") return e;
    wa(n) ? t += "-" + n.toLowerCase() : t += n;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var fo = function(e) {
  return e == null || e === !1 || e === "";
}, ho = function(e) {
  var t, r, n = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !fo(i) && (Array.isArray(i) && i.isCss || ve(i) ? n.push("".concat(rn(o), ":"), i, ";") : Oe(i) ? n.push.apply(n, Le(Le(["".concat(o, " {")], ho(i), !1), ["}"], !1)) : n.push("".concat(rn(o), ": ").concat((t = o, (r = i) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in Ui || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return n;
};
function ge(e, t, r, n) {
  if (fo(e)) return [];
  if (gr(e)) return [".".concat(e.styledComponentId)];
  if (ve(e)) {
    if (!ve(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return V.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof nr || Oe(o) || o === null || console.error("".concat(ro(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), ge(o, t, r, n);
  }
  var i;
  return e instanceof nr ? r ? (e.inject(r, n), [e.getName(n)]) : [e] : Oe(e) ? ho(e) : Array.isArray(e) ? Array.prototype.concat.apply(Et, e.map(function(a) {
    return ge(a, t, r, n);
  })) : [e.toString()];
}
function Sa(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (ve(r) && !gr(r)) return !1;
  }
  return !0;
}
var ba = eo(Vt), Va = (function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = V.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Sa(t), this.componentId = r, this.baseHash = fe(ba, r), this.baseStyle = n, co.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, n) : "";
    if (this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId)) o = he(o, this.staticRulesId);
    else {
      var i = Qt(ge(this.rules, t, r, n)), a = Jt(fe(this.baseHash, i) >>> 0);
      if (!r.hasNameForId(this.componentId, a)) {
        var c = n(i, ".".concat(a), void 0, this.componentId);
        r.insertRules(this.componentId, a, c);
      }
      o = he(o, a), this.staticRulesId = a;
    }
    else {
      for (var d = fe(this.baseHash, n.hash), u = "", h = 0; h < this.rules.length; h++) {
        var l = this.rules[h];
        if (typeof l == "string") u += l, V.NODE_ENV !== "production" && (d = fe(d, l));
        else if (l) {
          var p = Qt(ge(l, t, r, n));
          d = fe(d, p + h), u += p;
        }
      }
      if (u) {
        var f = Jt(d >>> 0);
        r.hasNameForId(this.componentId, f) || r.insertRules(this.componentId, f, n(u, ".".concat(f), void 0, this.componentId)), o = he(o, f);
      }
    }
    return o;
  }, e;
})(), je = oe.createContext(void 0);
je.Consumer;
function po() {
  var e = Ke(je);
  if (!e) throw K(18);
  return e;
}
function Ea(e) {
  var t = oe.useContext(je), r = re(function() {
    return (function(n, o) {
      if (!n) throw K(14);
      if (ve(n)) {
        var i = n(o);
        if (V.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object")) throw K(7);
        return i;
      }
      if (Array.isArray(n) || typeof n != "object") throw K(8);
      return o ? N(N({}, o), n) : n;
    })(e.theme, t);
  }, [e.theme, t]);
  return e.children ? oe.createElement(je.Provider, { value: r }, e.children) : null;
}
var Pt = {}, nn = /* @__PURE__ */ new Set();
function ka(e, t, r) {
  var n = gr(e), o = e, i = !At(e), a = t.attrs, c = a === void 0 ? Et : a, d = t.componentId, u = d === void 0 ? (function(E, $) {
    var C = typeof E != "string" ? "sc" : Yr(E);
    Pt[C] = (Pt[C] || 0) + 1;
    var L = "".concat(C, "-").concat(to(Vt + C + Pt[C]));
    return $ ? "".concat($, "-").concat(L) : L;
  })(t.displayName, t.parentComponentId) : d, h = t.displayName, l = h === void 0 ? (function(E) {
    return At(E) ? "styled.".concat(E) : "Styled(".concat(ro(E), ")");
  })(e) : h, p = t.displayName && t.componentId ? "".concat(Yr(t.displayName), "-").concat(t.componentId) : t.componentId || u, f = n && o.attrs ? o.attrs.concat(c).filter(Boolean) : c, _ = t.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var w = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var S = t.shouldForwardProp;
      _ = function(E, $) {
        return w(E, $) && S(E, $);
      };
    } else _ = w;
  }
  var m = new Va(r, p, n ? o.componentStyle : void 0);
  function g(E, $) {
    return (function(C, L, H) {
      var U = C.attrs, Ne = C.componentStyle, W = C.defaultProps, ie = C.foldedComponentIds, Cr = C.styledComponentId, Co = C.target, wo = oe.useContext(je), So = rr(), $t = C.shouldForwardProp || So.shouldForwardProp;
      V.NODE_ENV !== "production" && mt(Cr);
      var wr = zi(L, wo, W) || xe, J = (function(Je, Ae, Qe) {
        for (var we, ue = N(N({}, Ae), { className: void 0, theme: Qe }), It = 0; It < Je.length; It += 1) {
          var et = ve(we = Je[It]) ? we(ue) : we;
          for (var ae in et) ue[ae] = ae === "className" ? he(ue[ae], et[ae]) : ae === "style" ? N(N({}, ue[ae]), et[ae]) : et[ae];
        }
        return Ae.className && (ue.className = he(ue.className, Ae.className)), ue;
      })(U, L, wr), De = J.as || Co, Te = {};
      for (var F in J) J[F] === void 0 || F[0] === "$" || F === "as" || F === "theme" && J.theme === wr || (F === "forwardedAs" ? Te.as = J.forwardedAs : $t && !$t(F, De) || (Te[F] = J[F], $t || V.NODE_ENV !== "development" || Uo(F) || nn.has(F) || !Kt.has(De) || (nn.add(F), console.warn('styled-components: it looks like an unknown prop "'.concat(F, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var xt = (function(Je, Ae) {
        var Qe = rr(), we = Je.generateAndInjectStyles(Ae, Qe.styleSheet, Qe.stylis);
        return V.NODE_ENV !== "production" && mt(we), we;
      })(Ne, J);
      V.NODE_ENV !== "production" && C.warnTooManyClasses && C.warnTooManyClasses(xt);
      var Ot = he(ie, Cr);
      return xt && (Ot += " " + xt), J.className && (Ot += " " + J.className), Te[At(De) && !Kt.has(De) ? "class" : "className"] = Ot, H && (Te.ref = H), D(De, Te);
    })(b, E, $);
  }
  g.displayName = l;
  var b = oe.forwardRef(g);
  return b.attrs = f, b.componentStyle = m, b.displayName = l, b.shouldForwardProp = _, b.foldedComponentIds = n ? he(o.foldedComponentIds, o.styledComponentId) : "", b.styledComponentId = p, b.target = n ? o.target : e, Object.defineProperty(b, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = n ? (function($) {
      for (var C = [], L = 1; L < arguments.length; L++) C[L - 1] = arguments[L];
      for (var H = 0, U = C; H < U.length; H++) er($, U[H], !0);
      return $;
    })({}, o.defaultProps, E) : E;
  } }), V.NODE_ENV !== "production" && (Fi(l, p), b.warnTooManyClasses = /* @__PURE__ */ (function(E, $) {
    var C = {}, L = !1;
    return function(H) {
      if (!L && (C[H] = !0, Object.keys(C).length >= 200)) {
        var U = $ ? ' with the id of "'.concat($, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(E).concat(U, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), L = !0, C = {};
      }
    };
  })(l, p)), Lr(b, function() {
    return ".".concat(b.styledComponentId);
  }), i && ao(b, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), b;
}
function on(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1) r.push(t[n], e[n + 1]);
  return r;
}
var an = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function vr(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  if (ve(e) || Oe(e)) return an(ge(on(Et, Le([e], t, !0))));
  var n = e;
  return t.length === 0 && n.length === 1 && typeof n[0] == "string" ? ge(n) : an(ge(on(n, t)));
}
function or(e, t, r) {
  if (r === void 0 && (r = xe), !t) throw K(1, t);
  var n = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
    return e(t, r, vr.apply(void 0, Le([o], i, !1)));
  };
  return n.attrs = function(o) {
    return or(e, t, N(N({}, r), { attrs: Array.prototype.concat(r.attrs, o).filter(Boolean) }));
  }, n.withConfig = function(o) {
    return or(e, t, N(N({}, r), o));
  }, n;
}
var _o = function(e) {
  return or(ka, e);
}, B = _o;
Kt.forEach(function(e) {
  B[e] = _o(e);
});
function kt(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  V.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var n = Qt(vr.apply(void 0, Le([e], t, !1))), o = to(n);
  return new nr(o, n);
}
V.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var it = "__sc-".concat(ye, "__");
V.NODE_ENV !== "production" && V.NODE_ENV !== "test" && typeof window < "u" && (window[it] || (window[it] = 0), window[it] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[it] += 1);
const Z = {
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
}, sn = 0.24, $a = 24, xa = 2, mo = 14, Oa = 0.0276;
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
  [A.CANDIDATE_SELECTION]: "Hold still…",
  [A.DOCUMENT_CENTERING]: "Center document",
  [A.DOCUMENT_NOT_PRESENT]: "Scan document",
  [A.DOCUMENT_TOO_FAR]: "Move closer",
  [A.SHARPNESS_TOO_LOW]: "More light needed",
  [A.BRIGHTNESS_TOO_LOW]: "More light needed",
  [A.BRIGHTNESS_TOO_HIGH]: "Less light needed",
  [A.HOTSPOTS_PRESENT]: "Avoid reflections"
}, Ma = {
  [A.BRIGHTNESS_TOO_LOW]: "Move document to brighter area",
  [A.SHARPNESS_TOO_LOW]: "Move document to brighter area",
  [A.BRIGHTNESS_TOO_HIGH]: "Move document to darker area",
  [A.DOCUMENT_TOO_FAR]: "Move document closer"
}, Ht = {
  loading: { text: "Loading. Please wait.", visible: !0 },
  waiting: { text: "Waiting for input...", visible: !0 }
}, Ra = Z.ID_CORNERS_ROUNDED, Na = "rgba(19, 19, 19, 0.5)", Da = 34;
function cn(e, t) {
  return Math.max(t, t + (e - 400) * Oa + 2);
}
const Ta = (e, t = mo) => e ? e.width < e.height ? cn(e.width, t) : cn(e.height, t) : t, Aa = (e) => e > ee.Default ? Be[ee.Default] : e > ee.L ? Be[ee.L] : e > ee.M ? Be[ee.M] : Be[ee.S], Pa = (e) => e ? Aa(e.width) : Be[ee.Default];
function Ha() {
  const e = "https://fonts.googleapis.com/css?family=Montserrat:600";
  if (!document.querySelector(`link[href="${e}"]`)) {
    const r = document.createElement("link");
    r.href = e, r.rel = "stylesheet", document.head.appendChild(r);
  }
}
function Za({
  currentInstruction: e,
  escalatedInstructions: t,
  instructions: r
}) {
  const { code: n, isEscalated: o } = e;
  if (n)
    return o && t && n in t ? t[n] : r[n];
}
const ze = Vn(void 0);
ze.displayName = "ConfigurationContext";
function Ce() {
  const e = Ke(ze);
  if (!e)
    throw new Error(
      `${ze.displayName} must be used within a ${ze.displayName} Provider`
    );
  return e;
}
function Ba({
  children: e,
  configuration: t,
  videoElementSize: r
}) {
  const { font: n } = po(), o = re(
    () => ({ ...t, videoElementSize: r, fontSize: Ta(r, n.minimumSize) }),
    [t, n.minimumSize, r]
  );
  return /* @__PURE__ */ s(ze.Provider, { value: o, children: e });
}
const go = ({ svgSize: e }) => /* @__PURE__ */ s("svg", { fill: "none", height: e, viewBox: "0 0 16 14", width: e, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ s(
  "path",
  {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), Ua = B.div`
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
`, Wa = B.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, Fa = B.p`
  background: ${(e) => e.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(e) => `${e.$fontSize}px`};
  line-height: 1em;
  max-width: 80%;
`, ht = ({ Icon: e, isCameraReady: t, position: r = "absolute", text: n }) => {
  const { fontSize: o } = Ce();
  return /* @__PURE__ */ s(Ua, { $isCameraReady: t, $position: r, children: /* @__PURE__ */ s(Wa, { children: [
    e ? /* @__PURE__ */ s(e, { svgSize: o * 2 }) : null,
    /* @__PURE__ */ s(Fa, { $fontSize: o, children: n })
  ] }) });
}, Lo = ({ text: e = "An unknown error has occurred" }) => /* @__PURE__ */ s(ht, { Icon: go, position: "relative", text: e });
class za extends j {
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
    return this.state.hasError ? /* @__PURE__ */ s(Lo, { Icon: go, isCameraReady: !1 }) : this.props.children;
  }
}
const Ga = B.div`
  font-family: ${(e) => e.theme.font.family};
  font-style: ${(e) => e.theme.font.style};
  font-weight: ${(e) => e.theme.font.weight};
`;
function ja({
  children: e,
  uiConfiguration: t,
  videoElementSize: r
}) {
  return ne(() => {
    Ha();
  }, []), /* @__PURE__ */ s(Ca, { target: t.styleTarget, children: /* @__PURE__ */ s(Ea, { theme: t.styling.theme, children: /* @__PURE__ */ s(Ga, { children: /* @__PURE__ */ s(za, { videoElementSize: r, children: /* @__PURE__ */ s(Ba, { configuration: t, videoElementSize: r, children: e }) }) }) }) });
}
const qa = 1.5, Ya = 0.85, Zt = 1e3, Xa = "dot-auto-capture-video";
function be(e, t) {
  const r = Xe(t);
  ne(() => {
    r.current = t;
  }, [t]), ne(
    () => {
      if (!e)
        return;
      const n = (o) => r.current(o);
      return document.addEventListener(e, n), () => {
        document.removeEventListener(e, n);
      };
    },
    [e]
    // Re-run if eventName
  );
}
function Ka(e) {
  const [t, r] = z(), n = _e(
    (o) => {
      r(o.detail?.size);
    },
    [r]
  );
  return be(e, n), Me(() => {
    if (!t) {
      const o = document.getElementById(Xa);
      o && r(o.getBoundingClientRect());
    }
  }, [t, r]), t;
}
function Ja(e, t) {
  return e ? `${e}, ${t}` : t;
}
const Qa = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, es = {
  family: "Montserrat, Arial, sans-serif",
  weight: "600",
  style: "normal",
  minimumSize: mo
}, Pe = {
  colors: Qa,
  font: es
}, ts = (e) => e ? {
  ...Pe,
  ...e,
  colors: {
    ...Pe.colors,
    ...e.colors
  },
  font: {
    ...Pe.font,
    ...e.font,
    family: Ja(e.font?.family, Pe.font.family)
  }
} : Pe;
function rs(e, t) {
  return e < Zt && t >= Zt ? Zt : e;
}
function ns(e, t) {
  return e < t ? e : t;
}
function os({ height: e, width: t }) {
  let r;
  return t > e ? r = rs(e, t) : r = t, {
    width: r,
    height: ns(e, r)
  };
}
const is = (e, t) => Math.min(e, t), as = (e) => {
  const r = os(e).width * Ya, n = (e.width - r) / 2, o = r / qa, i = (e.height - o) / 2;
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
}, cs = (e, t) => {
  document.dispatchEvent(
    new CustomEvent(e, {
      detail: t
    })
  );
}, ln = (e, t) => {
  cs(e, {
    instruction: t
  });
};
async function ls() {
  return navigator.mediaDevices.enumerateDevices();
}
async function us() {
  return (await ls()).filter((t) => t.kind === "videoinput");
}
const ds = () => {
  const [e, t] = z(!1);
  return ne(() => {
    (async () => (await us()).length > 1 && t(!0))();
  }, []), e;
}, fs = ({ size: e }) => /* @__PURE__ */ s("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }), hs = ({ size: e }) => /* @__PURE__ */ s("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: "52", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ s("circle", { cx: "26", cy: "26", fill: "#131313", fillOpacity: "0.3", r: "26" }),
  /* @__PURE__ */ s(
    "path",
    {
      d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
      fill: "white"
    }
  )
] }), yo = B.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(e) => e.$marginLeft ? `${e.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, ps = ({ marginLeft: e, size: t, ...r }) => /* @__PURE__ */ s(yo, { $marginLeft: e, ...r, children: /* @__PURE__ */ s(fs, { size: t }) }), _s = ({ marginLeft: e, size: t, ...r }) => /* @__PURE__ */ s(yo, { $marginLeft: e, ...r, children: /* @__PURE__ */ s(hs, { size: t }) }), ms = B.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.$padding}px`};
  z-index: 2;
`, gs = ({
  customControlEvent: e,
  isSwitchCameraDisabled: t
}) => {
  const {
    control: { showCameraButtons: r },
    videoElementSize: n
  } = Ce(), o = ds();
  if (!r)
    return null;
  const { buttonPadding: i, iconSize: a, marginLeft: c } = Pa(n);
  return /* @__PURE__ */ s(ms, { $padding: i, children: [
    o && /* @__PURE__ */ s(_s, { disabled: t, onClick: () => {
      ln(e, kr.SWITCH_CAMERA);
    }, size: a }),
    /* @__PURE__ */ s(
      ps,
      {
        marginLeft: o ? c : 0,
        onClick: () => {
          ln(e, kr.TOGGLE_MIRROR);
        },
        size: a
      }
    )
  ] });
}, Ls = "2.5s", ys = "0.3s", vs = "linear", Cs = kt`
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
const ws = B.div`
  position: absolute;
  left: 50%;

  ${(e) => e.$cssTop ? `top: ${e.$cssTop}%;` : ""}
  ${(e) => e.$cssBottom ? `bottom: ${e.$cssBottom}%;` : ""}
    ${(e) => e.$isAnimating && vr`
      animation: ${Cs} ${ys}
        ${vs} both;
      animation-delay: ${Ls};

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
`, Ss = B.div`
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
`, bs = ({
  children: e,
  cssBottom: t,
  cssTop: r,
  isAnimating: n,
  isInCandidateSelection: o,
  isPortrait: i
}) => {
  const { fontSize: a } = Ce();
  return /* @__PURE__ */ s(ws, { $cssBottom: t, $cssTop: r, $isAnimating: n, $isPortrait: i, children: /* @__PURE__ */ s(
    Ss,
    {
      $fontSize: a,
      $isInCandidateSelection: o,
      $wrap: e.length > Da,
      children: e
    }
  ) });
}, Vs = B.canvas`
  transform: ${(e) => e.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
function Es(e) {
  const t = e.getContext("2d");
  t && t.clearRect(0, 0, t.canvas.width, t.canvas.height);
}
const Ue = (e, t) => Math.hypot(t.x - e.x, t.y - e.y), un = (e, t, r) => {
  const n = (t.x - e.x) * r, o = (t.y - e.y) * r;
  return {
    x: e.x + n,
    y: e.y + o
  };
}, dn = (e, t, r, n) => {
  const o = Ue(e, t);
  return r * n / o;
}, ks = (e) => {
  const { bottomLeft: t, bottomRight: r, topLeft: n, topRight: o } = e, i = Ue(n, o), a = Ue(o, r), c = Ue(t, r), d = Ue(n, t);
  return Math.min(i, a, c, d);
};
function $s({ cameraResolution: e, isImageMirror: t }) {
  const r = Xe(null), n = po(), [o, i] = z(), a = _e(
    (c) => {
      i(c?.detail?.detectedObject);
    },
    [i]
  );
  return be(pe.DETECTION_CHANGED, a), be(xn.DETECTION_CHANGED, a), ne(() => {
    if (!r.current)
      return;
    const c = (u, h, l, p) => {
      const f = dn(
        h,
        u,
        p,
        sn
      ), _ = dn(
        h,
        l,
        p,
        sn
      ), w = un(h, u, f), S = un(h, l, _), m = r?.current?.getContext("2d");
      m && (m.beginPath(), m.lineWidth = xa, m.strokeStyle = n.colors.placeholderColor, m.moveTo(w.x, w.y), m.arcTo(h.x, h.y, S.x, S.y, $a), m.lineTo(S.x, S.y), m.stroke());
    }, d = (u) => {
      if (!u)
        return;
      const { bottomLeft: h, bottomRight: l, topLeft: p, topRight: f } = u, _ = ks(u);
      c(h, p, f, _), c(p, f, l, _), c(f, l, h, _), c(l, h, p, _);
    };
    r.current.width = e.width, r.current.height = e.height, Es(r.current), d(o);
  }, [e, o, n.colors.placeholderColor]), /* @__PURE__ */ s(Vs, { ref: r, $isImageMirror: t });
}
const xs = B.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, fn = ({ svgSize: e }) => /* @__PURE__ */ s(xs, { children: /* @__PURE__ */ s("svg", { fill: "none", height: e, viewBox: "0 0 48 48", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }) }), Os = B.div`
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
`, vo = ({ children: e, height: t, scale: r, width: n }) => {
  const {
    styling: { backdropColor: o }
  } = Ce(), i = is(n, t);
  return /* @__PURE__ */ s(Os, { $backdropColor: o, $scale: r, $shorterSide: i, children: /* @__PURE__ */ s("svg", { viewBox: `0 0 ${n} ${t}`, children: [
    /* @__PURE__ */ s("defs", { children: /* @__PURE__ */ s("mask", { id: "mask", children: [
      /* @__PURE__ */ s("rect", { fill: "#fff", height: "100%", width: "100%" }),
      /* @__PURE__ */ s("g", { children: e })
    ] }) }),
    /* @__PURE__ */ s("rect", { fill: o, height: "100%", mask: "url(#mask)", width: "100%" })
  ] }) });
};
function Is({ cameraHeight: e, cameraWidth: t, isBackdrop: r, state: n }) {
  const { appStateInstructions: o } = Ce(), i = n === P.ERROR || n === P.RUNNING;
  return !n || i || !o?.[n]?.visible ? null : n === P.WAITING || n === P.COMPLETE ? /* @__PURE__ */ s(T, { children: [
    r && e && t && /* @__PURE__ */ s(vo, { height: e, width: t }),
    /* @__PURE__ */ s(ht, { isCameraReady: !0, text: o[P.WAITING].text })
  ] }) : n === P.BLURRED ? /* @__PURE__ */ s(T, { children: /* @__PURE__ */ s(ht, { Icon: fn, isCameraReady: !0, text: o[P.BLURRED].text }) }) : /* @__PURE__ */ s(ht, { Icon: fn, isCameraReady: !0, text: o[P.LOADING].text });
}
function Ms({ isPassport: e, isRounded: t, ...r }) {
  if (t)
    return /* @__PURE__ */ s("rect", { fill: "#000", ...r, rx: "2%" });
  if (e) {
    const o = `calc(${r.height} / 2)`;
    return /* @__PURE__ */ s(T, { children: [
      /* @__PURE__ */ s("rect", { fill: "#000", height: o, rx: "1%", width: r.width, x: r.x, y: r.y }),
      /* @__PURE__ */ s(
        "rect",
        {
          fill: "#000",
          height: o,
          rx: "0",
          width: r.width,
          x: r.x,
          y: `calc(${r.y} + 4%)`
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
const Ns = () => /* @__PURE__ */ s(
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
function Ds() {
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
const zs = B.div`
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
`, Gs = ({
  children: e,
  className: t,
  isInCandidateSelection: r,
  onAnimationEnd: n,
  placeholderRectangle: o,
  scale: i
}) => /* @__PURE__ */ s(
  zs,
  {
    $isInCandidateSelection: r,
    $placeholderRectangle: o,
    $scale: i,
    className: t,
    onAnimationEnd: n,
    children: e
  }
), js = {
  [Z.ID_CORNERS]: /* @__PURE__ */ s(Rs, {}),
  [Z.ID_DASH]: /* @__PURE__ */ s(Ds, {}),
  [Z.ID_DOT]: /* @__PURE__ */ s(As, {}),
  [Z.ID_SOLID]: /* @__PURE__ */ s(Zs, {}),
  [Z.ID_PHOTO_ROUNDED]: /* @__PURE__ */ s(Hs, {}),
  [Z.ID_CORNERS_ROUNDED]: /* @__PURE__ */ s(Ns, {}),
  [Z.ID_DASH_ROUNDED]: /* @__PURE__ */ s(Ts, {}),
  [Z.ID_DOT_ROUNDED]: /* @__PURE__ */ s(Ps, {}),
  [Z.ID_SOLID_ROUNDED]: /* @__PURE__ */ s(Bs, {}),
  [Z.ID_SOLID_ROUNDED_BACK]: /* @__PURE__ */ s(Us, {}),
  [Z.PASSPORT_SOLID_BACK]: /* @__PURE__ */ s(Ws, {}),
  [Z.PASSPORT_SOLID_BACK_BLANK]: /* @__PURE__ */ s(Fs, {})
};
function qs({ backdropHeight: e, backdropWidth: t, placeholderRectangle: r, ...n }) {
  const { placeholder: o } = Ce(), i = o.toLowerCase().includes("passport"), a = o.toLowerCase().includes("rounded");
  return /* @__PURE__ */ s(T, { children: [
    /* @__PURE__ */ s(vo, { height: e, width: t, children: /* @__PURE__ */ s(
      Ms,
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
  const [e, t] = z(), [r, n] = z(!1), o = _e(
    (f) => {
      t(f?.detail?.cameraResolution);
      const _ = f?.detail?.isMirroring;
      _ !== void 0 && n(_);
    },
    [t]
  );
  be(pe.CAMERA_PROPS_CHANGED, o);
  const [i, a] = z({
    code: A.DOCUMENT_NOT_PRESENT,
    // FIXME Default instruction should not be here
    isEscalated: !1
  }), c = _e(
    (f) => {
      a({
        code: f?.detail?.instructionCode,
        isEscalated: f?.detail?.isEscalated ?? !1
      });
    },
    [a]
  );
  be(pe.INSTRUCTION_CHANGED, c);
  const [d, u] = z(P.LOADING), [h, l] = z(), p = _e(
    (f) => {
      u(f.detail?.appState);
      const _ = f?.detail?.error;
      _ && l(_);
    },
    [u, l]
  );
  return be(pe.STATE_CHANGED, p), {
    cameraResolution: e,
    appState: d,
    error: h,
    instruction: i,
    isMirroring: r
  };
};
function Xs() {
  const { appState: e, cameraResolution: t, error: r, instruction: n, isMirroring: o } = Ys(), i = n.code === A.CANDIDATE_SELECTION, {
    control: { showDetectionLayer: a },
    escalatedInstructions: c,
    instructions: d
  } = Ce(), u = Za({
    escalatedInstructions: c,
    instructions: d,
    currentInstruction: n
  });
  return e === P.ERROR ? /* @__PURE__ */ s(Lo, { text: r?.message }) : e === P.RUNNING && t ? /* @__PURE__ */ s(T, { children: [
    a && /* @__PURE__ */ s($s, { cameraResolution: t, isImageMirror: o }),
    /* @__PURE__ */ s(
      qs,
      {
        backdropHeight: t.height,
        backdropWidth: t.width,
        isInCandidateSelection: i,
        placeholderRectangle: ss(t)
      }
    ),
    u && /* @__PURE__ */ s(bs, { cssTop: 50, isInCandidateSelection: i, children: u }),
    /* @__PURE__ */ s(
      gs,
      {
        customControlEvent: pe.CONTROL,
        isSwitchCameraDisabled: i
      }
    )
  ] }) : /* @__PURE__ */ s(
    Is,
    {
      cameraHeight: t?.height,
      cameraWidth: t?.width,
      isBackdrop: !0,
      state: e
    }
  );
}
function Ks(e) {
  const t = { ...Ia, ...e?.instructions }, r = {
    ...Ma,
    ...e?.escalatedInstructions
  }, n = {
    [P.LOADING]: {
      ...Ht.loading,
      ...e?.appStateInstructions?.loading
    },
    [P.WAITING]: {
      ...Ht.waiting,
      ...e?.appStateInstructions?.waiting
    },
    // TODO: on Major release version, use specific app state instructions for blurred state
    [P.BLURRED]: {
      ...Ht.loading,
      ...e?.appStateInstructions?.loading
    }
  }, o = ts(e?.styling?.theme), i = {
    ...e?.styling,
    backdropColor: e?.styling?.backdropColor ?? Na,
    theme: o
  }, a = {
    showDetectionLayer: e?.control?.showDetectionLayer ?? !1,
    showCameraButtons: e?.control?.showCameraButtons ?? !1
  }, c = e?.placeholder ?? Ra;
  return {
    ...e,
    instructions: t,
    appStateInstructions: n,
    placeholder: c,
    escalatedInstructions: r,
    styling: i,
    control: a
  };
}
const Js = ({ configuration: e }) => {
  const t = Ka(pe.VIDEO_ELEMENT_SIZE);
  return /* @__PURE__ */ s(
    ja,
    {
      uiConfiguration: Ks(e),
      videoElementSize: t,
      children: /* @__PURE__ */ s(Xs, {})
    }
  );
};
Mo(Js, "x-dot-document-auto-capture-ui", ["configuration"]);
