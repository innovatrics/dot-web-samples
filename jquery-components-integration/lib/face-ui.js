var Yt, g, sr, st, Sn, cr, ar, Ne, re, Ut, ur, en, Ue, Be, lr, fe = {}, he = [], Co = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Qt = Array.isArray;
function J(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function nn(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function F(t, e, n) {
  var r, o, i, s = {};
  for (i in e) i == "key" ? r = e[i] : i == "ref" ? o = e[i] : s[i] = e[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? Yt.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null) for (i in t.defaultProps) s[i] === void 0 && (s[i] = t.defaultProps[i]);
  return Bt(t, s, r, o, null);
}
function Bt(t, e, n, r, o) {
  var i = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++sr, __i: -1, __u: 0 };
  return o == null && g.vnode != null && g.vnode(i), i;
}
function vo() {
  return { current: null };
}
function W(t) {
  return t.children;
}
function Y(t, e) {
  this.props = t, this.context = e;
}
function pt(t, e) {
  if (e == null) return t.__ ? pt(t.__, t.__i + 1) : null;
  for (var n; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
  return typeof t.type == "function" ? pt(t) : null;
}
function bo(t) {
  if (t.__P && t.__d) {
    var e = t.__v, n = e.__e, r = [], o = [], i = J({}, e);
    i.__v = e.__v + 1, g.vnode && g.vnode(i), rn(t.__P, i, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [n] : null, r, n ?? pt(e), !!(32 & e.__u), o), i.__v = e.__v, i.__.__k[i.__i] = i, pr(r, i, o), e.__e = e.__ = null, i.__e != n && _r(i);
  }
}
function _r(t) {
  if ((t = t.__) != null && t.__c != null) return t.__e = t.__c.base = null, t.__k.some(function(e) {
    if (e != null && e.__e != null) return t.__e = t.__c.base = e.__e;
  }), _r(t);
}
function je(t) {
  (!t.__d && (t.__d = !0) && st.push(t) && !de.__r++ || Sn != g.debounceRendering) && ((Sn = g.debounceRendering) || cr)(de);
}
function de() {
  try {
    for (var t, e = 1; st.length; ) st.length > e && st.sort(ar), t = st.shift(), e = st.length, bo(t);
  } finally {
    st.length = de.__r = 0;
  }
}
function fr(t, e, n, r, o, i, s, c, u, a, f) {
  var m, l, d, p, b, S, C = r && r.__k || he, h = e.length;
  for (u = wo(n, e, C, u, h), m = 0; m < h; m++) (d = n.__k[m]) != null && (l = d.__i != -1 && C[d.__i] || fe, d.__i = m, S = rn(t, d, l, o, i, s, c, u, a, f), p = d.__e, d.ref && l.ref != d.ref && (l.ref && on(l.ref, null, d), f.push(d.ref, d.__c || p, d)), b == null && p != null && (b = p), 4 & d.__u ? (u = hr(d, u, t), l.__e && (l.__e = null)) : typeof d.type == "function" && S !== void 0 ? u = S : p && (u = p.nextSibling), d.__u &= -7);
  return n.__e = b, u;
}
function wo(t, e, n, r, o) {
  var i, s, c, u, a, f = n.length, m = f, l = 0;
  for (t.__k = new Array(o), i = 0; i < o; i++) (s = e[i]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = t.__k[i] = Bt(null, s, null, null, null) : Qt(s) ? s = t.__k[i] = Bt(W, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? s = t.__k[i] = Bt(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : t.__k[i] = s, u = i + l, s.__ = t, s.__b = t.__b + 1, c = null, (a = s.__i = So(s, n, u, m)) != -1 && (m--, (c = n[a]) && (c.__u |= 2)), c == null || c.__v == null ? (a == -1 && (o > f ? l-- : o < f && l++), typeof s.type != "function" && (s.__u |= 4)) : a != u && (a == u - 1 ? l-- : a == u + 1 ? l++ : (a > u ? l-- : l++, s.__u |= 4))) : t.__k[i] = null;
  if (m) for (i = 0; i < f; i++) (c = n[i]) != null && (2 & c.__u) == 0 && (c.__e == r && (r = pt(c)), gr(c, c));
  return r;
}
function hr(t, e, n) {
  var r, o;
  if (typeof t.type == "function") {
    for (r = t.__k, o = 0; r && o < r.length; o++) r[o] && (r[o].__ = t, e = hr(r[o], e, n));
    return e;
  }
  t.__e != e && (e && t.type && !e.parentNode && (e = pt(t)), e = n.insertBefore(t.__e, e || null));
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function rt(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Qt(t) ? t.some(function(n) {
    rt(n, e);
  }) : e.push(t)), e;
}
function So(t, e, n, r) {
  var o, i, s, c = t.key, u = t.type, a = e[n], f = a != null && (2 & a.__u) == 0;
  if (a === null && c == null || f && c == a.key && u == a.type) return n;
  if (r > (f ? 1 : 0)) {
    for (o = n - 1, i = n + 1; o >= 0 || i < e.length; ) if ((a = e[s = o >= 0 ? o-- : i++]) != null && (2 & a.__u) == 0 && c == a.key && u == a.type) return s;
  }
  return -1;
}
function $n(t, e, n) {
  e[0] == "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || Co.test(e) ? n : n + "px";
}
function ne(t, e, n, r, o) {
  var i, s;
  t: if (e == "style") if (typeof n == "string") t.style.cssText = n;
  else {
    if (typeof r == "string" && (t.style.cssText = r = ""), r) for (e in r) n && e in n || $n(t.style, e, "");
    if (n) for (e in n) r && n[e] == r[e] || $n(t.style, e, n[e]);
  }
  else if (e[0] == "o" && e[1] == "n") i = e != (e = e.replace(ur, "$1")), s = e.toLowerCase(), e = s in t || e == "onFocusOut" || e == "onFocusIn" ? s.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = n, n ? r ? n[Ut] = r[Ut] : (n[Ut] = en, t.addEventListener(e, i ? Be : Ue, i)) : t.removeEventListener(e, i ? Be : Ue, i);
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
      if (e[re] == null) e[re] = en++;
      else if (e[re] < n[Ut]) return;
      return n(g.event ? g.event(e) : e);
    }
  };
}
function rn(t, e, n, r, o, i, s, c, u, a) {
  var f, m, l, d, p, b, S, C, h, O, P, E, k, y, w, Z, L = e.type;
  if (e.constructor !== void 0) return null;
  128 & n.__u && (u = !!(32 & n.__u), i = [c = e.__e = n.__e]), (f = g.__b) && f(e);
  t: if (typeof L == "function") {
    m = s.length;
    try {
      if (h = e.props, O = L.prototype && L.prototype.render, P = (f = L.contextType) && r[f.__c], E = f ? P ? P.props.value : f.__ : r, n.__c ? C = (l = e.__c = n.__c).__ = l.__E : (O ? e.__c = l = new L(h, E) : (e.__c = l = new Y(h, E), l.constructor = L, l.render = Eo), P && P.sub(l), l.state || (l.state = {}), l.__n = r, d = l.__d = !0, l.__h = [], l._sb = []), O && l.__s == null && (l.__s = l.state), O && L.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = J({}, l.__s)), J(l.__s, L.getDerivedStateFromProps(h, l.__s))), p = l.props, b = l.state, l.__v = e, d) O && L.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), O && l.componentDidMount != null && l.__h.push(l.componentDidMount);
      else {
        if (O && L.getDerivedStateFromProps == null && h !== p && l.componentWillReceiveProps != null && l.componentWillReceiveProps(h, E), e.__v == n.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(h, l.__s, E) === !1) {
          e.__v != n.__v && (l.props = h, l.state = l.__s, l.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some(function(H) {
            H && (H.__ = e);
          }), he.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && s.push(l), c = pt(n);
          break t;
        }
        l.componentWillUpdate != null && l.componentWillUpdate(h, l.__s, E), O && l.componentDidUpdate != null && l.__h.push(function() {
          l.componentDidUpdate(p, b, S);
        });
      }
      if (l.context = E, l.props = h, l.__P = t, l.__e = !1, k = g.__r, y = 0, O) l.state = l.__s, l.__d = !1, k && k(e), f = l.render(l.props, l.state, l.context), he.push.apply(l.__h, l._sb), l._sb = [];
      else do
        l.__d = !1, k && k(e), f = l.render(l.props, l.state, l.context), l.state = l.__s;
      while (l.__d && ++y < 25);
      l.state = l.__s, l.getChildContext != null && (r = J(J({}, r), l.getChildContext())), O && !d && l.getSnapshotBeforeUpdate != null && (S = l.getSnapshotBeforeUpdate(p, b)), w = f != null && f.type === W && f.key == null ? mr(f.props.children) : f, c = fr(t, Qt(w) ? w : [w], e, n, r, o, i, s, c, u, a), l.base = e.__e, e.__u &= -161, l.__h.length && s.push(l), C && (l.__E = l.__ = null);
    } catch (H) {
      if (s.length = m, e.__v = null, u || i != null) {
        if (H.then) {
          for (e.__u |= u ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
          i != null && (i[i.indexOf(c)] = null), e.__e = c;
        } else if (i != null) for (Z = i.length; Z--; ) nn(i[Z]);
      } else e.__e = n.__e;
      e.__k == null && (e.__k = n.__k || []), H.then || dr(e), g.__e(H, e, n);
    }
  } else i == null && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : c = e.__e = $o(n.__e, e, n, r, o, i, s, u, a);
  return (f = g.diffed) && f(e), 128 & e.__u ? void 0 : c;
}
function dr(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(dr));
}
function pr(t, e, n) {
  for (var r = 0; r < n.length; r++) on(n[r], n[++r], n[++r]);
  g.__c && g.__c(e, t), t.some(function(o) {
    try {
      t = o.__h, o.__h = [], t.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      g.__e(i, o.__v);
    }
  });
}
function mr(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : Qt(t) ? t.map(mr) : t.constructor !== void 0 ? null : J({}, t);
}
function $o(t, e, n, r, o, i, s, c, u) {
  var a, f, m, l, d, p, b, S = n.props || fe, C = e.props, h = e.type;
  if (h == "svg" ? o = "http://www.w3.org/2000/svg" : h == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (a = 0; a < i.length; a++) if ((d = i[a]) && "setAttribute" in d == !!h && (h ? d.localName == h : d.nodeType == 3)) {
      t = d, i[a] = null;
      break;
    }
  }
  if (t == null) {
    if (h == null) return document.createTextNode(C);
    t = document.createElementNS(o, h, C.is && C), c && (g.__m && g.__m(e, i), c = !1), i = null;
  }
  if (h == null) S === C || c && t.data == C || (t.data = C);
  else {
    if (i = h == "textarea" && C.defaultValue != null ? null : i && Yt.call(t.childNodes), !c && i != null) for (S = {}, a = 0; a < t.attributes.length; a++) S[(d = t.attributes[a]).name] = d.value;
    for (a in S) d = S[a], a == "dangerouslySetInnerHTML" ? m = d : a == "children" || a in C || a == "value" && "defaultValue" in C || a == "checked" && "defaultChecked" in C || ne(t, a, null, d, o);
    for (a in C) d = C[a], a == "children" ? l = d : a == "dangerouslySetInnerHTML" ? f = d : a == "value" ? p = d : a == "checked" ? b = d : c && typeof d != "function" || S[a] === d || ne(t, a, d, S[a], o);
    if (f) c || m && (f.__html == m.__html || f.__html == t.innerHTML) || (t.innerHTML = f.__html), e.__k = [];
    else if (m && (t.innerHTML = ""), fr(e.type == "template" ? t.content : t, Qt(l) ? l : [l], e, n, r, h == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, s, i ? i[0] : n.__k && pt(n, 0), c, u), i != null) for (a = i.length; a--; ) nn(i[a]);
    c && h != "textarea" || (a = "value", h == "progress" && p == null ? t.removeAttribute("value") : p != null && (p !== t[a] || h == "progress" && !p || h == "option" && p != S[a]) && ne(t, a, p, S[a], o), a = "checked", b != null && b != t[a] && ne(t, a, b, S[a], o));
  }
  return t;
}
function on(t, e, n) {
  try {
    if (typeof t == "function") {
      var r = typeof t.__u == "function";
      r && t.__u(), r && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (o) {
    g.__e(o, n);
  }
}
function gr(t, e, n) {
  var r, o;
  if (g.unmount && g.unmount(t), (r = t.ref) && (r.current && r.current != t.__e || on(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (i) {
      g.__e(i, e);
    }
    r.base = r.__P = r.__n = null;
  }
  if (r = t.__k) for (o = 0; o < r.length; o++) r[o] && gr(r[o], e, n || typeof t.type != "function");
  n || nn(t.__e), t.__c = t.__ = t.__e = void 0;
}
function Eo(t, e, n) {
  return this.constructor(t, n);
}
function at(t, e, n) {
  var r, o, i, s;
  e == document && (e = document.documentElement), g.__ && g.__(t, e), o = (r = typeof n == "function") ? null : n && n.__k || e.__k, i = [], s = [], rn(e, t = (!r && n || e).__k = F(W, null, [t]), o || fe, fe, e.namespaceURI, !r && n ? [n] : o ? null : e.firstChild ? Yt.call(e.childNodes) : null, i, !r && n ? n : o ? o.__e : e.firstChild, r, s), pr(i, t, s), t.props.children = null;
}
function sn(t, e) {
  at(t, e, sn);
}
function cn(t, e, n) {
  var r, o, i, s, c = J({}, t.props);
  for (i in t.type && t.type.defaultProps && (s = t.type.defaultProps), e) i == "key" ? r = e[i] : i == "ref" ? o = e[i] : c[i] = e[i] === void 0 && s != null ? s[i] : e[i];
  return arguments.length > 2 && (c.children = arguments.length > 3 ? Yt.call(arguments, 2) : n), Bt(t.type, c, r || t.key, o || t.ref, null);
}
function yr(t) {
  function e(n) {
    var r, o;
    return this.getChildContext || (r = /* @__PURE__ */ new Set(), (o = {})[e.__c] = this, this.getChildContext = function() {
      return o;
    }, this.componentWillUnmount = function() {
      r = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value != i.value && r.forEach(function(s) {
        s.__e = !0, je(s);
      });
    }, this.sub = function(i) {
      r.add(i);
      var s = i.componentWillUnmount;
      i.componentWillUnmount = function() {
        r && r.delete(i), s && s.call(i);
      };
    }), n.children;
  }
  return e.__c = "__cC" + lr++, e.__ = t, e.Provider = e.__l = (e.Consumer = function(n, r) {
    return n.children(r);
  }).contextType = e, e;
}
Yt = he.slice, g = { __e: function(t, e, n, r) {
  for (var o, i, s; e = e.__; ) if ((o = e.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(t)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, r || {}), s = o.__d), s) return o.__E = o;
  } catch (c) {
    t = c;
  }
  throw t;
} }, sr = 0, Y.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = J({}, this.state), typeof t == "function" && (t = t(J({}, n), this.props)), t && J(n, t), t != null && this.__v && (e && this._sb.push(e), je(this));
}, Y.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), je(this));
}, Y.prototype.render = W, st = [], cr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ar = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, de.__r = 0, Ne = Math.random().toString(8), re = "__d" + Ne, Ut = "__a" + Ne, ur = /(PointerCapture)$|Capture$/i, en = 0, Ue = En(!1), Be = En(!0), lr = 0;
function pe() {
  return pe = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, pe.apply(this, arguments);
}
function Cr(t, e) {
  if (t == null) return {};
  var n, r, o = {}, i = Object.keys(t);
  for (r = 0; r < i.length; r++) e.indexOf(n = i[r]) >= 0 || (o[n] = t[n]);
  return o;
}
var Oo = ["context", "children"], xo = ["useFragment"];
function Io(t, e, n, r) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = t, i._root = i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = function() {
    No.call(this, r);
  }, o.prototype.attributeChangedCallback = Ro, o.prototype.disconnectedCallback = To, n = n || t.observedAttributes || Object.keys(t.propTypes || {}), o.observedAttributes = n, t.formAssociated && (o.formAssociated = !0), n.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom ? this._vdom.props[i] : this._props[i];
    }, set: function(s) {
      this._vdom ? this.attributeChangedCallback(i, null, s) : (this._props || (this._props = {}), this._props[i] = s);
      var c = typeof s;
      s != null && c !== "string" && c !== "boolean" && c !== "number" || this.setAttribute(i, s);
    } });
  }), customElements.define(e, o), o;
}
function ko(t) {
  this.getChildContext = function() {
    return t.context;
  };
  var e = t.children, n = Cr(t, Oo);
  return cn(e, n);
}
function No(t) {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = F(ko, pe({}, this._props, { context: e.detail.context }), br(this, this._vdomComponent, t)), (this.hasAttribute("hydrate") ? sn : at)(this._vdom, this._root);
}
function vr(t) {
  return t.replace(/-(\w)/g, function(e, n) {
    return n ? n.toUpperCase() : "";
  });
}
function Ro(t, e, n) {
  if (this._vdom) {
    var r = {};
    r[t] = n = n ?? void 0, r[vr(t)] = n, this._vdom = cn(this._vdom, r), at(this._vdom, this._root);
  }
}
function To() {
  at(this._vdom = null, this._root);
}
function On(t, e) {
  var n = this, r = t.useFragment, o = Cr(t, xo);
  return F(r ? W : "slot", pe({}, o, { ref: function(i) {
    i ? (n.ref = i, n._listener || (n._listener = function(s) {
      s.stopPropagation(), s.detail.context = e;
    }, i.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function br(t, e, n) {
  if (t.nodeType === 3) return t.data;
  if (t.nodeType !== 1) return null;
  var r = [], o = {}, i = 0, s = t.attributes, c = t.childNodes;
  for (i = s.length; i--; ) s[i].name !== "slot" && (o[s[i].name] = s[i].value, o[vr(s[i].name)] = s[i].value);
  for (i = c.length; i--; ) {
    var u = br(c[i], null, n), a = c[i].slot;
    a ? o[a] = F(On, { name: a }, u) : r[i] = u;
  }
  var f = !(!n || !n.shadow), m = e ? F(On, { useFragment: !f }, r) : r;
  return !f && e && (t.innerHTML = ""), F(e || t.nodeName.toLowerCase(), o, m);
}
var Ao = 0;
function _(t, e, n, r, o, i) {
  e || (e = {});
  var s, c, u = e;
  if ("ref" in u) for (c in u = {}, e) c == "ref" ? s = e[c] : u[c] = e[c];
  var a = { type: t, props: u, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Ao, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof t == "function" && (s = t.defaultProps)) for (c in s) u[c] === void 0 && (u[c] = s[c]);
  return g.vnode && g.vnode(a), a;
}
const xn = {
  SWITCH_CAMERA: "switch-camera",
  TOGGLE_MIRROR: "toggle-mirror"
};
var mt = /* @__PURE__ */ ((t) => (t.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", t.CONTROL = "face-auto-capture:control", t.DETECTION_CHANGED = "face-auto-capture:detection-changed", t.FACE_DETECTION = "face-auto-capture:face-detection", t.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", t.STATE_CHANGED = "face-auto-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", t))(mt || {});
const B = {
  LOADING: "loading",
  ERROR: "error",
  WAITING: "waiting",
  // TODO: this state may not be needed in the new architecture - consider removing on next major release version
  RUNNING: "running",
  COMPLETE: "complete",
  BLURRED: "blurred"
}, In = {
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
  LEFT_EYE_NOT_PRESENT: `left_${In.EYE_NOT_PRESENT}`,
  RIGHT_EYE_NOT_PRESENT: `right_${In.EYE_NOT_PRESENT}`,
  MOUTH_NOT_PRESENT: "mouth_not_present",
  MOUTH_SCORE_TOO_HIGH: "mouth_score_too_high",
  MOUTH_SCORE_TOO_LOW: "mouth_score_too_low"
};
var ut, I, Re, kn, wt = 0, wr = [], N = g, Nn = N.__b, Rn = N.__r, Tn = N.diffed, An = N.__c, Pn = N.unmount, Ln = N.__;
function Ot(t, e) {
  N.__h && N.__h(I, t, wt || e), wt = 0;
  var n = I.__H || (I.__H = { __: [], __h: [] });
  return t >= n.__.length && n.__.push({}), n.__[t];
}
function Q(t) {
  return wt = 1, an(Or, t);
}
function an(t, e, n) {
  var r = Ot(ut++, 2);
  if (r.t = t, !r.__c && (r.__ = [n ? n(e) : Or(void 0, e), function(c) {
    var u = r.__N ? r.__N[0] : r.__[0], a = r.t(u, c);
    u !== a && (r.__N = [a, r.__[1]], r.__c.setState({}));
  }], r.__c = I, !I.__f)) {
    var o = function(c, u, a) {
      if (!r.__c.__H) return !0;
      var f = !1, m = r.__c.props !== c;
      if (r.__c.__H.__.some(function(d) {
        if (d.__N) {
          f = !0;
          var p = d.__[0];
          d.__ = d.__N, d.__N = void 0, p !== d.__[0] && (m = !0);
        }
      }), i) {
        var l = i.call(this, c, u, a);
        return f ? l || m : l;
      }
      return !f || m;
    };
    I.__f = !0;
    var i = I.shouldComponentUpdate, s = I.componentWillUpdate;
    I.componentWillUpdate = function(c, u, a) {
      if (this.__e) {
        var f = i;
        i = void 0, o(c, u, a), i = f;
      }
      s && s.call(this, c, u, a);
    }, I.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function lt(t, e) {
  var n = Ot(ut++, 3);
  !N.__s && ln(n.__H, e) && (n.__ = t, n.u = e, I.__H.__h.push(n));
}
function xt(t, e) {
  var n = Ot(ut++, 4);
  !N.__s && ln(n.__H, e) && (n.__ = t, n.u = e, I.__h.push(n));
}
function ye(t) {
  return wt = 5, Xt(function() {
    return { current: t };
  }, []);
}
function Sr(t, e, n) {
  wt = 6, xt(function() {
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
function Xt(t, e) {
  var n = Ot(ut++, 7);
  return ln(n.__H, e) && (n.__ = t(), n.__H = e, n.__h = t), n.__;
}
function gt(t, e) {
  return wt = 8, Xt(function() {
    return t;
  }, e);
}
function un(t) {
  var e = I.context[t.__c], n = Ot(ut++, 9);
  return n.c = t, e ? (n.__ == null && (n.__ = !0, e.sub(I)), e.props.value) : t.__;
}
function $r(t, e) {
  N.useDebugValue && N.useDebugValue(e ? e(t) : t);
}
function Er() {
  var t = Ot(ut++, 11);
  if (!t.__) {
    for (var e = I.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var n = e.__m || (e.__m = [0, 0]);
    t.__ = "P" + n[0] + "-" + n[1]++;
  }
  return t.__;
}
function Po() {
  for (var t; t = wr.shift(); ) {
    var e = t.__H;
    if (t.__P && e) try {
      e.__h.some(oe), e.__h.some(We), e.__h = [];
    } catch (n) {
      e.__h = [], N.__e(n, t.__v);
    }
  }
}
N.__b = function(t) {
  I = null, Nn && Nn(t);
}, N.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Ln && Ln(t, e);
}, N.__r = function(t) {
  Rn && Rn(t), ut = 0;
  var e = (I = t.__c).__H;
  e && (Re === I ? (e.__h = [], I.__h = [], e.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (e.__h.some(oe), e.__h.some(We), e.__h = [], ut = 0)), Re = I;
}, N.diffed = function(t) {
  Tn && Tn(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (wr.push(e) !== 1 && kn === N.requestAnimationFrame || ((kn = N.requestAnimationFrame) || Lo)(Po)), e.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), Re = I = null;
}, N.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.some(oe), n.__h = n.__h.filter(function(r) {
        return !r.__ || We(r);
      });
    } catch (r) {
      e.some(function(o) {
        o.__h && (o.__h = []);
      }), e = [], N.__e(r, n.__v);
    }
  }), An && An(t, e);
}, N.unmount = function(t) {
  Pn && Pn(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.some(function(r) {
    try {
      oe(r);
    } catch (o) {
      e = o;
    }
  }), n.__H = void 0, e && N.__e(e, n.__v));
};
var Dn = typeof requestAnimationFrame == "function";
function Lo(t) {
  var e, n = function() {
    clearTimeout(r), Dn && cancelAnimationFrame(e), setTimeout(t);
  }, r = setTimeout(n, 35);
  Dn && (e = requestAnimationFrame(n));
}
function oe(t) {
  var e = I, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), I = e;
}
function We(t) {
  var e = I;
  t.__c = t.__(), I = e;
}
function ln(t, e) {
  return !t || t.length !== e.length || e.some(function(n, r) {
    return n !== t[r];
  });
}
function Or(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function xr(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function Ge(t, e) {
  for (var n in t) if (n !== "__source" && !(n in e)) return !0;
  for (var r in e) if (r !== "__source" && t[r] !== e[r]) return !0;
  return !1;
}
function Ir(t, e) {
  var n = e(), r = Q({ t: { __: n, u: e } }), o = r[0].t, i = r[1];
  return xt(function() {
    o.__ = n, o.u = e, Te(o) && i({ t: o });
  }, [t, n, e]), lt(function() {
    return Te(o) && i({ t: o }), t(function() {
      Te(o) && i({ t: o });
    });
  }, [t]), n;
}
function Te(t) {
  try {
    return !((e = t.__) === (n = t.u()) && (e !== 0 || 1 / e == 1 / n) || e != e && n != n);
  } catch {
    return !0;
  }
  var e, n;
}
function kr(t) {
  t();
}
function Nr(t) {
  return t;
}
function Rr() {
  return [!1, kr];
}
var Tr = xt;
function ze(t, e) {
  this.props = t, this.context = e;
}
function Do(t, e) {
  function n(o) {
    var i = this.props.ref;
    return i != o.ref && i && (typeof i == "function" ? i(null) : i.current = null), e ? !e(this.props, o) || i != o.ref : Ge(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, F(t, o);
  }
  return r.displayName = "Memo(" + (t.displayName || t.name) + ")", r.__f = r.prototype.isReactComponent = !0, r.type = t, r;
}
(ze.prototype = new Y()).isPureReactComponent = !0, ze.prototype.shouldComponentUpdate = function(t, e) {
  return Ge(this.props, t) || Ge(this.state, e);
};
var Mn = g.__b;
g.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), Mn && Mn(t);
};
var Mo = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.forward_ref") || 3911;
function Ho(t) {
  function e(n) {
    var r = xr({}, n);
    return delete r.ref, t(r, n.ref || null);
  }
  return e.$$typeof = Mo, e.render = t, e.prototype.isReactComponent = e.__f = !0, e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", e;
}
var Hn = function(t, e) {
  return t == null ? null : rt(rt(t).map(e));
}, Fo = { map: Hn, forEach: Hn, count: function(t) {
  return t ? rt(t).length : 0;
}, only: function(t) {
  var e = rt(t);
  if (e.length !== 1) throw "Children.only";
  return e[0];
}, toArray: rt }, Uo = g.__e;
g.__e = function(t, e, n, r) {
  if (t.then) {
    for (var o, i = e; i = i.__; ) if ((o = i.__c) && o.__c) return e.__e == null && (e.__e = n.__e, e.__k = n.__k || []), o.__c(t, e);
  }
  Uo(t, e, n, r);
};
var Fn = g.unmount;
function Ar(t, e, n) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), t.__c.__H = null), (t = xr({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c.__e = !0, t.__c = null), t.__k = t.__k && t.__k.map(function(r) {
    return Ar(r, e, n);
  })), t;
}
function Pr(t, e, n) {
  return t && n && (t.__v = null, t.__k = t.__k && t.__k.map(function(r) {
    return Pr(r, e, n);
  }), t.__c && t.__c.__P === e && (t.__e && n.appendChild(t.__e), t.__c.__e = !0, t.__c.__P = n)), t;
}
function ie() {
  this.__u = 0, this.o = null, this.__b = null;
}
function Lr(t) {
  var e = t.__ && t.__.__c;
  return e && e.__a && e.__a(t);
}
function Bo(t) {
  var e, n, r, o = null;
  function i(s) {
    if (e || (e = t()).then(function(c) {
      c && (o = c.default || c), r = !0;
    }, function(c) {
      n = c, r = !0;
    }), n) throw n;
    if (!r) throw e;
    return o ? F(o, s) : null;
  }
  return i.displayName = "Lazy", i.__f = !0, i;
}
function Lt() {
  this.i = null, this.l = null;
}
g.unmount = function(t) {
  var e = t.__c;
  e && (e.__z = !0), e && e.__R && e.__R(), e && 32 & t.__u && (t.type = null), Fn && Fn(t);
}, (ie.prototype = new Y()).__c = function(t, e) {
  var n = e.__c, r = this;
  r.o == null && (r.o = []), r.o.push(n);
  var o = Lr(r.__v), i = !1, s = function() {
    i || r.__z || (i = !0, n.__R = null, o ? o(u) : u());
  };
  n.__R = s;
  var c = n.__P;
  n.__P = null;
  var u = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var a = r.state.__a;
        r.__v.__k[0] = Pr(a, a.__c.__P, a.__c.__O);
      }
      var f;
      for (r.setState({ __a: r.__b = null }); f = r.o.pop(); ) f.__P = c, f.forceUpdate();
    }
  };
  r.__u++ || 32 & e.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), t.then(s, s);
}, ie.prototype.componentWillUnmount = function() {
  this.o = [];
}, ie.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Ar(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = e.__a && F(W, null, t.fallback);
  return o && (o.__u &= -33), [F(W, null, e.__a ? null : t.children), o];
};
var Un = function(t, e, n) {
  if (++n[1] === n[0] && t.l.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.l.size)) for (n = t.i; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    t.i = n = n[2];
  }
};
function jo(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function Wo(t) {
  var e = this, n = t.h;
  if (e.componentWillUnmount = function() {
    at(null, e.v), e.v = null, e.h = null;
  }, e.h && e.h !== n && e.componentWillUnmount(), !e.v) {
    for (var r = e.__v; r !== null && !r.__m && r.__ !== null; ) r = r.__;
    e.h = n, e.v = { nodeType: 1, parentNode: n, childNodes: [], __k: { __m: r.__m }, contains: function() {
      return !0;
    }, namespaceURI: n.namespaceURI, insertBefore: function(o, i) {
      this.childNodes.push(o), e.h.insertBefore(o, i);
    }, removeChild: function(o) {
      this.childNodes.splice(this.childNodes.indexOf(o) >>> 1, 1), e.h.removeChild(o);
    } };
  }
  at(F(jo, { context: e.context }, t.__v), e.v);
}
function Go(t, e) {
  var n = F(Wo, { __v: t, h: e });
  return n.containerInfo = e, n;
}
(Lt.prototype = new Y()).__a = function(t) {
  var e = this, n = Lr(e.__v), r = e.l.get(t);
  return r[0]++, function(o) {
    var i = function() {
      e.props.revealOrder ? (r.push(o), Un(e, t, r)) : o();
    };
    n ? n(i) : i();
  };
}, Lt.prototype.render = function(t) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var e = rt(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var n = e.length; n--; ) this.l.set(e[n], this.i = [1, 0, this.i]);
  return t.children;
}, Lt.prototype.componentDidUpdate = Lt.prototype.componentDidMount = function() {
  var t = this;
  this.l.forEach(function(e, n) {
    Un(t, n, e);
  });
};
var Dr = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || 60103, zo = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Zo = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Vo = /[A-Z0-9]/g, qo = typeof document < "u", Yo = function(t) {
  return (typeof Symbol < "u" && typeof /* @__PURE__ */ Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
};
function Qo(t, e, n) {
  return e.__k == null && (e.textContent = ""), at(t, e), typeof n == "function" && n(), t ? t.__c : null;
}
function Xo(t, e, n) {
  return sn(t, e), typeof n == "function" && n(), t ? t.__c : null;
}
Y.prototype.isReactComponent = !0, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(Y.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var Bn = g.event;
g.event = function(t) {
  return Bn && (t = Bn(t)), t.persist = function() {
  }, t.isPropagationStopped = function() {
    return this.cancelBubble;
  }, t.isDefaultPrevented = function() {
    return this.defaultPrevented;
  }, t.nativeEvent = t;
};
var _n, Ko = { configurable: !0, get: function() {
  return this.class;
} }, jn = g.vnode;
g.vnode = function(t) {
  typeof t.type == "string" && (function(e) {
    var n = e.props, r = e.type, o = {}, i = r.indexOf("-") == -1;
    for (var s in n) {
      var c = n[s];
      if (!(s === "value" && "defaultValue" in n && c == null || qo && s === "children" && r === "noscript" || s === "class" || s === "className")) {
        var u = s.toLowerCase();
        s === "defaultValue" && "value" in n && n.value == null ? s = "value" : s === "download" && c === !0 ? c = "" : u === "translate" && c === "no" ? c = !1 : u[0] === "o" && u[1] === "n" ? u === "ondoubleclick" ? s = "ondblclick" : u !== "onchange" || r !== "input" && r !== "textarea" || Yo(n.type) ? u === "onfocus" ? s = "onfocusin" : u === "onblur" ? s = "onfocusout" : Zo.test(s) && (s = u) : u = s = "oninput" : i && zo.test(s) ? s = s.replace(Vo, "-$&").toLowerCase() : c === null && (c = void 0), u === "oninput" && o[s = u] && (s = "oninputCapture"), o[s] = c;
      }
    }
    r == "select" && (o.multiple && Array.isArray(o.value) && (o.value = rt(n.children).forEach(function(a) {
      a.props.selected = o.value.indexOf(a.props.value) != -1;
    })), o.defaultValue != null && (o.value = rt(n.children).forEach(function(a) {
      a.props.selected = o.multiple ? o.defaultValue.indexOf(a.props.value) != -1 : o.defaultValue == a.props.value;
    }))), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", Ko)) : n.className && (o.class = o.className = n.className), e.props = o;
  })(t), t.$$typeof = Dr, jn && jn(t);
};
var Wn = g.__r;
g.__r = function(t) {
  Wn && Wn(t), _n = t.__c;
};
var Gn = g.diffed;
g.diffed = function(t) {
  Gn && Gn(t);
  var e = t.props, n = t.__e;
  n != null && t.type === "textarea" && "value" in e && e.value !== n.value && (n.value = e.value == null ? "" : e.value), _n = null;
};
var Jo = { ReactCurrentDispatcher: { current: { readContext: function(t) {
  return _n.__n[t.__c].props.value;
}, useCallback: gt, useContext: un, useDebugValue: $r, useDeferredValue: Nr, useEffect: lt, useId: Er, useImperativeHandle: Sr, useInsertionEffect: Tr, useLayoutEffect: xt, useMemo: Xt, useReducer: an, useRef: ye, useState: Q, useSyncExternalStore: Ir, useTransition: Rr } } };
function ti(t) {
  return F.bind(null, t);
}
function Ce(t) {
  return !!t && t.$$typeof === Dr;
}
function ei(t) {
  return Ce(t) && t.type === W;
}
function ni(t) {
  return !!t && typeof t.displayName == "string" && t.displayName.indexOf("Memo(") == 0;
}
function ri(t) {
  return Ce(t) ? cn.apply(null, arguments) : t;
}
function oi(t) {
  return !!t.__k && (at(null, t), !0);
}
function ii(t) {
  return t && (t.base || t.nodeType === 1 && t) || null;
}
var si = function(t, e) {
  return t(e);
}, ci = function(t, e) {
  var n, r = g.debounceRendering;
  g.debounceRendering = function(i) {
    n = i;
  };
  try {
    var o = t(e);
    return n && n(), o;
  } finally {
    g.debounceRendering = r;
  }
}, ai = Ce, j = { useState: Q, useId: Er, useReducer: an, useEffect: lt, useLayoutEffect: xt, useInsertionEffect: Tr, useTransition: Rr, useDeferredValue: Nr, useSyncExternalStore: Ir, startTransition: kr, useRef: ye, useImperativeHandle: Sr, useMemo: Xt, useCallback: gt, useContext: un, useDebugValue: $r, version: "18.3.1", Children: Fo, render: Qo, hydrate: Xo, unmountComponentAtNode: oi, createPortal: Go, createElement: F, createContext: yr, createFactory: ti, cloneElement: ri, createRef: vo, Fragment: W, isValidElement: Ce, isElement: ai, isFragment: ei, isMemo: ni, findDOMNode: ii, Component: Y, PureComponent: ze, memo: Do, forwardRef: Ho, flushSync: ci, unstable_batchedUpdates: si, StrictMode: W, Suspense: ie, SuspenseList: Lt, lazy: Bo, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Jo }, x = "-ms-", jt = "-moz-", $ = "-webkit-", Mr = "comm", ve = "rule", fn = "decl", ui = "@import", li = "@namespace", Hr = "@keyframes", _i = "@layer", Fr = Math.abs, hn = String.fromCharCode, Ze = Object.assign;
function fi(t, e) {
  return A(t, 0) ^ 45 ? (((e << 2 ^ A(t, 0)) << 2 ^ A(t, 1)) << 2 ^ A(t, 2)) << 2 ^ A(t, 3) : 0;
}
function Ur(t) {
  return t.trim();
}
function et(t, e) {
  return (t = e.exec(t)) ? t[0] : t;
}
function v(t, e, n) {
  return t.replace(e, n);
}
function se(t, e, n) {
  return t.indexOf(e, n);
}
function A(t, e) {
  return t.charCodeAt(e) | 0;
}
function yt(t, e, n) {
  return t.slice(e, n);
}
function q(t) {
  return t.length;
}
function Br(t) {
  return t.length;
}
function Dt(t, e) {
  return e.push(t), t;
}
function hi(t, e) {
  return t.map(e).join("");
}
function zn(t, e) {
  return t.filter(function(n) {
    return !et(n, e);
  });
}
var be = 1, St = 1, jr = 0, z = 0, R = 0, It = "";
function we(t, e, n, r, o, i, s, c) {
  return { value: t, root: e, parent: n, type: r, props: o, children: i, line: be, column: St, length: s, return: "", siblings: c };
}
function it(t, e) {
  return Ze(we("", null, null, "", null, null, 0, t.siblings), t, { length: -t.length }, e);
}
function Ct(t) {
  for (; t.root; )
    t = it(t.root, { children: [t] });
  Dt(t, t.siblings);
}
function di() {
  return R;
}
function pi() {
  return R = z > 0 ? A(It, --z) : 0, St--, R === 10 && (St = 1, be--), R;
}
function X() {
  return R = z < jr ? A(It, z++) : 0, St++, R === 10 && (St = 1, be++), R;
}
function ct() {
  return A(It, z);
}
function ce() {
  return z;
}
function Se(t, e) {
  return yt(It, t, e);
}
function zt(t) {
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
function mi(t) {
  return be = St = 1, jr = q(It = t), z = 0, [];
}
function gi(t) {
  return It = "", t;
}
function Ae(t) {
  return Ur(Se(z - 1, Ve(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function yi(t) {
  for (; (R = ct()) && R < 33; )
    X();
  return zt(t) > 2 || zt(R) > 3 ? "" : " ";
}
function Ci(t, e) {
  for (; --e && X() && !(R < 48 || R > 102 || R > 57 && R < 65 || R > 70 && R < 97); )
    ;
  return Se(t, ce() + (e < 6 && ct() == 32 && X() == 32));
}
function Ve(t) {
  for (; X(); )
    switch (R) {
      // ] ) " '
      case t:
        return z;
      // " '
      case 34:
      case 39:
        t !== 34 && t !== 39 && Ve(R);
        break;
      // (
      case 40:
        t === 41 && Ve(t);
        break;
      // \
      case 92:
        X();
        break;
    }
  return z;
}
function vi(t, e) {
  for (; X() && t + R !== 57; )
    if (t + R === 84 && ct() === 47)
      break;
  return "/*" + Se(e, z - 1) + "*" + hn(t === 47 ? t : X());
}
function bi(t) {
  for (; !zt(ct()); )
    X();
  return Se(t, z);
}
function wi(t) {
  return gi(ae("", null, null, null, [""], t = mi(t), 0, [0], t));
}
function ae(t, e, n, r, o, i, s, c, u) {
  for (var a = 0, f = 0, m = s, l = 0, d = 0, p = 0, b = 1, S = 1, C = 1, h = 0, O = "", P = o, E = i, k = r, y = O; S; )
    switch (p = h, h = X()) {
      // (
      case 40:
        if (p != 108 && A(y, m - 1) == 58) {
          se(y += v(Ae(h), "&", "&\f"), "&\f", Fr(a ? c[a - 1] : 0)) != -1 && (C = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        y += Ae(h);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        y += yi(p);
        break;
      // \
      case 92:
        y += Ci(ce() - 1, 7);
        continue;
      // /
      case 47:
        switch (ct()) {
          case 42:
          case 47:
            Dt(Si(vi(X(), ce()), e, n, u), u), (zt(p || 1) == 5 || zt(ct() || 1) == 5) && q(y) && yt(y, -1, void 0) !== " " && (y += " ");
            break;
          default:
            y += "/";
        }
        break;
      // {
      case 123 * b:
        c[a++] = q(y) * C;
      // } ; \0
      case 125 * b:
      case 59:
      case 0:
        switch (h) {
          // \0 }
          case 0:
          case 125:
            S = 0;
          // ;
          case 59 + f:
            C == -1 && (y = v(y, /\f/g, "")), d > 0 && (q(y) - m || b === 0 && p === 47) && Dt(d > 32 ? Vn(y + ";", r, n, m - 1, u) : Vn(v(y, " ", "") + ";", r, n, m - 2, u), u);
            break;
          // @ ;
          case 59:
            y += ";";
          // { rule/at-rule
          default:
            if (Dt(k = Zn(y, e, n, a, f, o, c, O, P = [], E = [], m, i), i), h === 123)
              if (f === 0)
                ae(y, e, k, k, P, i, m, c, E);
              else {
                switch (l) {
                  // c(ontainer)
                  case 99:
                    if (A(y, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (A(y, 2) === 97) break;
                  default:
                    f = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                f ? ae(t, k, k, r && Dt(Zn(t, k, k, 0, 0, o, c, O, o, P = [], m, E), E), o, E, m, c, r ? P : E) : ae(y, k, k, k, [""], E, 0, c, E);
              }
        }
        a = f = d = 0, b = C = 1, O = y = "", m = s;
        break;
      // :
      case 58:
        m = 1 + q(y), d = p;
      default:
        if (b < 1) {
          if (h == 123)
            --b;
          else if (h == 125 && b++ == 0 && pi() == 125)
            continue;
        }
        switch (y += hn(h), h * b) {
          // &
          case 38:
            C = f > 0 ? 1 : (y += "\f", -1);
            break;
          // ,
          case 44:
            c[a++] = (q(y) - 1) * C, C = 1;
            break;
          // @
          case 64:
            ct() === 45 && (y += Ae(X())), l = ct(), f = m = q(O = y += bi(ce())), h++;
            break;
          // -
          case 45:
            p === 45 && q(y) == 2 && (b = 0);
        }
    }
  return i;
}
function Zn(t, e, n, r, o, i, s, c, u, a, f, m) {
  for (var l = o - 1, d = o === 0 ? i : [""], p = Br(d), b = 0, S = 0, C = 0; b < r; ++b)
    for (var h = 0, O = yt(t, l + 1, l = Fr(S = s[b])), P = t; h < p; ++h)
      (P = Ur(S > 0 ? d[h] + " " + O : v(O, /&\f/g, d[h]))) && (u[C++] = P);
  return we(t, e, n, o === 0 ? ve : c, u, a, f, m);
}
function Si(t, e, n, r) {
  return we(t, e, n, Mr, hn(di()), yt(t, 2, -2), 0, r);
}
function Vn(t, e, n, r, o) {
  return we(t, e, n, fn, yt(t, 0, r), yt(t, r + 1, -1), r, o);
}
function Wr(t, e, n) {
  switch (fi(t, e)) {
    // color-adjust
    case 5103:
      return $ + "print-" + t + t;
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
      return $ + t + t;
    // mask-composite
    case 4855:
      return $ + t.replace("add", "source-over").replace("substract", "source-out").replace("intersect", "source-in").replace("exclude", "xor") + t;
    // tab-size
    case 4789:
      return jt + t + t;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return $ + t + jt + t + x + t + t;
    // writing-mode
    case 5936:
      switch (A(t, e + 11)) {
        // vertical-l(r)
        case 114:
          return $ + t + x + v(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        // vertical-r(l)
        case 108:
          return $ + t + x + v(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        // horizontal(-)tb
        case 45:
          return $ + t + x + v(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return $ + t + x + t + t;
    // order
    case 6165:
      return $ + t + x + "flex-" + t + t;
    // align-items
    case 5187:
      return $ + t + v(t, /(\w+).+(:[^]+)/, $ + "box-$1$2" + x + "flex-$1$2") + t;
    // align-self
    case 5443:
      return $ + t + x + "flex-item-" + v(t, /flex-|-self/g, "") + (et(t, /flex-|baseline/) ? "" : x + "grid-row-" + v(t, /flex-|-self/g, "")) + t;
    // align-content
    case 4675:
      return $ + t + x + "flex-line-pack" + v(t, /align-content|flex-|-self/g, "") + t;
    // flex-shrink
    case 5548:
      return $ + t + x + v(t, "shrink", "negative") + t;
    // flex-basis
    case 5292:
      return $ + t + x + v(t, "basis", "preferred-size") + t;
    // flex-grow
    case 6060:
      return $ + "box-" + v(t, "-grow", "") + $ + t + x + v(t, "grow", "positive") + t;
    // transition
    case 4554:
      return $ + v(t, /([^-])(transform)/g, "$1" + $ + "$2") + t;
    // cursor
    case 6187:
      return v(v(v(t, /(zoom-|grab)/, $ + "$1"), /(image-set)/, $ + "$1"), t, "") + t;
    // background, background-image
    case 5495:
    case 3959:
      return v(t, /(image-set\([^]*)/, $ + "$1$`$1");
    // justify-content
    case 4968:
      return v(v(t, /(.+:)(flex-)?(.*)/, $ + "box-pack:$3" + x + "flex-pack:$3"), /space-between/, "justify") + $ + t + t;
    // justify-self
    case 4200:
      if (!et(t, /flex-|baseline/)) return x + "grid-column-align" + yt(t, e) + t;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return x + v(t, "template-", "") + t;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return e = o, et(r.props, /grid-\w+-end/);
      }) ? ~se(t + (n = n[e].value), "span", 0) ? t : x + v(t, "-start", "") + t + x + "grid-row-span:" + (~se(n, "span", 0) ? et(n, /\d+/) : +et(n, /\d+/) - +et(t, /\d+/)) + ";" : x + v(t, "-start", "") + t;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return et(r.props, /grid-\w+-start/);
      }) ? t : x + v(v(t, "-end", "-span"), "span ", "") + t;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return v(t, /(.+)-inline(.+)/, $ + "$1$2") + t;
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
      if (q(t) - 1 - e > 6)
        switch (A(t, e + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (A(t, e + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return v(t, /(.+:)(.+)-([^]+)/, "$1" + $ + "$2-$3$1" + jt + (A(t, e + 3) == 108 ? "$3" : "$2-$3")) + t;
          // (s)tretch
          case 115:
            return ~se(t, "stretch", 0) ? Wr(v(t, "stretch", "fill-available"), e, n) + t : t;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return v(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, c, u, a) {
        return x + o + ":" + i + a + (s ? x + o + "-span:" + (c ? u : +u - +i) + a : "") + t;
      });
    // position: sticky
    case 4949:
      if (A(t, e + 6) === 121)
        return v(t, ":", ":" + $) + t;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (A(t, A(t, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return v(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + $ + (A(t, 14) === 45 ? "inline-" : "") + "box$3$1" + $ + "$2$3$1" + x + "$2box$3") + t;
        // (inline-)?gri(d)
        case 100:
          return v(t, ":", ":" + x) + t;
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
function $i(t, e, n, r) {
  switch (t.type) {
    case _i:
      if (t.children.length) break;
    case ui:
    case li:
    case fn:
      return t.return = t.return || t.value;
    case Mr:
      return "";
    case Hr:
      return t.return = t.value + "{" + me(t.children, r) + "}";
    case ve:
      if (!q(t.value = t.props.join(","))) return "";
  }
  return q(n = me(t.children, r)) ? t.return = t.value + "{" + n + "}" : "";
}
function Ei(t) {
  var e = Br(t);
  return function(n, r, o, i) {
    for (var s = "", c = 0; c < e; c++)
      s += t[c](n, r, o, i) || "";
    return s;
  };
}
function Oi(t) {
  return function(e) {
    e.root || (e = e.return) && t(e);
  };
}
function xi(t, e, n, r) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case fn:
        t.return = Wr(t.value, t.length, n);
        return;
      case Hr:
        return me([it(t, { value: v(t.value, "@", "@" + $) })], r);
      case ve:
        if (t.length)
          return hi(n = t.props, function(o) {
            switch (et(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Ct(it(t, { props: [v(o, /:(read-\w+)/, ":" + jt + "$1")] })), Ct(it(t, { props: [o] })), Ze(t, { props: zn(n, r) });
                break;
              // :placeholder
              case "::placeholder":
                Ct(it(t, { props: [v(o, /:(plac\w+)/, ":" + $ + "input-$1")] })), Ct(it(t, { props: [v(o, /:(plac\w+)/, ":" + jt + "$1")] })), Ct(it(t, { props: [v(o, /:(plac\w+)/, x + "input-$1")] })), Ct(it(t, { props: [o] })), Ze(t, { props: zn(n, r) });
                break;
            }
            return "";
          });
    }
}
var bt = {};
function tt(t, ...e) {
  return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${t} for more information.${e.length > 0 ? ` Args: ${e.join(", ")}` : ""}`);
}
var Pe, Le;
const $t = typeof process < "u" && bt !== void 0 && (bt.REACT_APP_SC_ATTR || bt.SC_ATTR) || "data-styled", Gr = "active", zr = "data-styled-version", $e = "6.6.0", dn = `/*!sc*/
`, Wt = typeof window < "u" && typeof document < "u";
if (!j.createContext) throw tt(19);
function qn(t) {
  if (typeof process < "u" && bt !== void 0) {
    const e = bt[t];
    if (e !== void 0 && e !== "") return e !== "false";
  }
}
const Ii = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : (Le = (Pe = qn("REACT_APP_SC_DISABLE_SPEEDY")) !== null && Pe !== void 0 ? Pe : qn("SC_DISABLE_SPEEDY")) !== null && Le !== void 0 ? Le : typeof process < "u" && bt !== void 0 && !1), Zr = "sc-keyframes-";
let ue = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), le = 1;
const Mt = (t) => {
  if (ue.has(t)) return ue.get(t);
  for (; ge.has(le); ) le++;
  const e = le++;
  return ue.set(t, e), ge.set(e, t), e;
}, ki = (t) => ge.get(t), Ni = (t, e) => {
  le = e + 1, ue.set(t, e), ge.set(e, t);
}, pn = Object.freeze([]), Et = Object.freeze({});
function Ri(t, e, n = Et) {
  return t.theme !== n.theme && t.theme || e || n.theme;
}
const Ti = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ai = /(^-|-$)/g;
function Vr(t) {
  return t.replace(Ti, "-").replace(Ai, "");
}
const Pi = /(a)(d)/gi, Yn = (t) => String.fromCharCode(t + (t > 25 ? 39 : 97));
function mn(t) {
  let e, n = "";
  for (e = Math.abs(t); e > 52; e = e / 52 | 0) n = Yn(e % 52) + n;
  return (Yn(e % 52) + n).replace(Pi, "$1-$2");
}
const qe = 5381, ht = (t, e) => {
  let n = e.length;
  for (; n; ) t = 33 * t ^ e.charCodeAt(--n);
  return t;
}, qr = (t) => ht(qe, t);
function Yr(t) {
  return mn(qr(t) >>> 0);
}
function Li(t) {
  return t.displayName || t.name || "Component";
}
function Ye(t) {
  return typeof t == "string" && !0;
}
function Di(t) {
  return Ye(t) ? `styled.${t}` : `Styled(${Li(t)})`;
}
const Qr = /* @__PURE__ */ Symbol.for("react.memo"), Mi = /* @__PURE__ */ Symbol.for("react.forward_ref"), Hi = { contextType: !0, defaultProps: !0, displayName: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, propTypes: !0, type: !0 }, Fi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Xr = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Ui = { [Mi]: { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, [Qr]: Xr };
function Qn(t) {
  return ("type" in (e = t) && e.type.$$typeof) === Qr ? Xr : "$$typeof" in t ? Ui[t.$$typeof] : Hi;
  var e;
}
const Bi = Object.defineProperty, ji = Object.getOwnPropertyNames, Wi = Object.getOwnPropertySymbols, Gi = Object.getOwnPropertyDescriptor, zi = Object.getPrototypeOf, Zi = Object.prototype;
function Kr(t, e, n) {
  if (typeof e != "string") {
    const r = zi(e);
    r && r !== Zi && Kr(t, r, n);
    const o = ji(e).concat(Wi(e)), i = Qn(t), s = Qn(e);
    for (let c = 0; c < o.length; ++c) {
      const u = o[c];
      if (!(u in Fi || n && n[u] || s && u in s || i && u in i)) {
        const a = Gi(e, u);
        try {
          Bi(t, u, a);
        } catch {
        }
      }
    }
  }
  return t;
}
function Kt(t) {
  return typeof t == "function";
}
const Vi = /* @__PURE__ */ Symbol.for("react.forward_ref");
function Jr(t) {
  return t != null && (typeof t == "object" || typeof t == "function") && t.$$typeof === Vi && "styledComponentId" in t;
}
function Ht(t, e) {
  return t && e ? t + " " + e : t || e || "";
}
function Qe(t, e) {
  return t.join("");
}
function Zt(t) {
  return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
}
function Xe(t, e, n = !1) {
  if (!n && !Zt(t) && !Array.isArray(t)) return e;
  if (Array.isArray(e)) for (let r = 0; r < e.length; r++) t[r] = Xe(t[r], e[r]);
  else if (Zt(e)) for (const r in e) t[r] = Xe(t[r], e[r]);
  return t;
}
function gn(t, e) {
  Object.defineProperty(t, "toString", { value: e });
}
const qi = class {
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
      const o = this.groupSizes, i = o.length;
      let s = i;
      for (; t >= s; ) if (s <<= 1, s < 0) throw tt(16, `${t}`);
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(o), this.length = s;
      for (let c = i; c < s; c++) this.groupSizes[c] = 0;
    }
    let n = this.indexOfGroup(t + 1), r = 0;
    for (let o = 0, i = e.length; o < i; o++) this.tag.insertRule(n, e[o]) && (this.groupSizes[t]++, n++, r++);
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
    for (let i = r; i < o; i++) e += this.tag.getRule(i) + dn;
    return e;
  }
}, Yi = `style[${$t}][${zr}="${$e}"]`, Qi = new RegExp(`^${$t}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`), Xn = (t) => typeof ShadowRoot < "u" && t instanceof ShadowRoot || "host" in t && t.nodeType === 11, Ke = (t) => {
  if (!t) return document;
  if (Xn(t)) return t;
  if ("getRootNode" in t) {
    const e = t.getRootNode();
    if (Xn(e)) return e;
  }
  return document;
}, Xi = (t, e, n) => {
  const r = n.split(",");
  let o;
  for (let i = 0, s = r.length; i < s; i++) (o = r[i]) && t.registerName(e, o);
}, Ki = (t, e) => {
  var n;
  const r = ((n = e.textContent) !== null && n !== void 0 ? n : "").split(dn), o = [];
  for (let i = 0, s = r.length; i < s; i++) {
    const c = r[i].trim();
    if (!c) continue;
    const u = c.match(Qi);
    if (u) {
      const a = 0 | parseInt(u[1], 10), f = u[2];
      a !== 0 && (Ni(f, a), Xi(t, f, u[3]), t.getTag().insertRules(a, o)), o.length = 0;
    } else o.push(c);
  }
}, De = (t) => {
  const n = Ke(t.options.target).querySelectorAll(Yi);
  for (let r = 0, o = n.length; r < o; r++) {
    const i = n[r];
    i && i.getAttribute($t) !== Gr && (Ki(t, i), i.parentNode && i.parentNode.removeChild(i));
  }
};
let At = !1;
function Ji() {
  if (At !== !1) return At;
  if (typeof document < "u") {
    const t = document.head.querySelector('meta[property="csp-nonce"]');
    if (t) return At = t.nonce || t.getAttribute("content") || void 0;
    const e = document.head.querySelector('meta[name="sc-nonce"]');
    if (e) return At = e.getAttribute("content") || void 0;
  }
  return At = typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}
const to = (t, e) => {
  if (typeof document > "u") throw tt(20);
  const n = document.head, r = t || n, o = document.createElement("style"), i = ((u) => {
    const a = Array.from(u.querySelectorAll(`style[${$t}]`));
    return a[a.length - 1];
  })(r), s = i !== void 0 ? i.nextSibling : null;
  o.setAttribute($t, Gr), o.setAttribute(zr, $e);
  const c = e || Ji();
  return c && o.setAttribute("nonce", c), r.insertBefore(o, s), o;
}, ts = class {
  constructor(t, e) {
    this.element = to(t, e), this.element.appendChild(document.createTextNode("")), this.sheet = ((n) => {
      var r;
      if (n.sheet) return n.sheet;
      const o = (r = n.getRootNode().styleSheets) !== null && r !== void 0 ? r : document.styleSheets;
      for (let i = 0, s = o.length; i < s; i++) {
        const c = o[i];
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
}, es = class {
  constructor(t, e) {
    this.element = to(t, e), this.nodes = this.element.childNodes, this.length = 0;
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
const ns = { isServer: !Wt, useCSSOMInjection: !Ii };
class Ee {
  static registerId(e) {
    return Mt(e);
  }
  constructor(e = Et, n = {}, r) {
    this.options = Object.assign(Object.assign({}, ns), e), this.gs = n, this.keyframeIds = /* @__PURE__ */ new Set(), this.names = new Map(r), this.server = !!e.isServer, !this.server && Wt && Kn && (Kn = !1, De(this)), gn(this, () => ((o) => {
      const i = o.getTag(), { length: s } = i;
      let c = "";
      for (let u = 0; u < s; u++) {
        const a = ki(u);
        if (a === void 0) continue;
        const f = o.names.get(a);
        if (f === void 0 || !f.size) continue;
        const m = i.getGroup(u);
        if (m.length === 0) continue;
        const l = $t + ".g" + u + '[id="' + a + '"]';
        let d = "";
        for (const p of f) p.length > 0 && (d += p + ",");
        c += m + l + '{content:"' + d + '"}' + dn;
      }
      return c;
    })(this));
  }
  rehydrate() {
    !this.server && Wt && De(this);
  }
  reconstructWithOptions(e, n = !0) {
    const r = new Ee(Object.assign(Object.assign({}, this.options), e), this.gs, n && this.names || void 0);
    return r.keyframeIds = new Set(this.keyframeIds), !this.server && Wt && e.target !== this.options.target && Ke(this.options.target) !== Ke(e.target) && De(r), r;
  }
  allocateGSInstance(e) {
    return this.gs[e] = (this.gs[e] || 0) + 1;
  }
  getTag() {
    return this.tag || (this.tag = (e = (({ useCSSOMInjection: n, target: r, nonce: o }) => n ? new ts(r, o) : new es(r, o))(this.options), new qi(e)));
    var e;
  }
  hasNameForId(e, n) {
    var r, o;
    return (o = (r = this.names.get(e)) === null || r === void 0 ? void 0 : r.has(n)) !== null && o !== void 0 && o;
  }
  registerName(e, n) {
    Mt(e), e.startsWith(Zr) && this.keyframeIds.add(e);
    const r = this.names.get(e);
    r ? r.add(n) : this.names.set(e, /* @__PURE__ */ new Set([n]));
  }
  insertRules(e, n, r) {
    this.registerName(e, n), this.getTag().insertRules(Mt(e), r);
  }
  clearNames(e) {
    this.names.has(e) && this.names.get(e).clear();
  }
  clearRules(e) {
    this.getTag().clearGroup(Mt(e)), this.clearNames(e);
  }
  clearTag() {
    this.tag = void 0;
  }
}
const eo = /* @__PURE__ */ new WeakSet(), rs = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexShrink: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
function os(t, e) {
  return e == null || typeof e == "boolean" || e === "" ? "" : typeof e != "number" || e === 0 || t in rs || t.startsWith("--") ? String(e).trim() : e + "px";
}
const ft = 47;
function Jn(t) {
  if (t.charCodeAt(0) === 45 && t.charCodeAt(1) === 45) return t;
  let e = "";
  for (let n = 0; n < t.length; n++) {
    const r = t.charCodeAt(n);
    e += r >= 65 && r <= 90 ? "-" + String.fromCharCode(r + 32) : t[n];
  }
  return e.startsWith("ms-") ? "-" + e : e;
}
const no = /* @__PURE__ */ Symbol.for("sc-keyframes");
function is(t) {
  return typeof t == "object" && t !== null && no in t;
}
function ro(t) {
  return Kt(t) && !(t.prototype && t.prototype.isReactComponent);
}
const oo = (t) => t == null || t === !1 || t === "", ss = /* @__PURE__ */ Symbol.for("react.client.reference");
function tr(t) {
  return t.$$typeof === ss;
}
function io(t, e) {
  for (const n in t) {
    const r = t[n];
    t.hasOwnProperty(n) && !oo(r) && (Array.isArray(r) && eo.has(r) || Kt(r) ? e.push(Jn(n) + ":", r, ";") : Zt(r) ? (e.push(n + " {"), io(r, e), e.push("}")) : e.push(Jn(n) + ": " + os(n, r) + ";"));
  }
}
function dt(t, e, n, r, o = []) {
  if (oo(t)) return o;
  const i = typeof t;
  if (i === "string") return o.push(t), o;
  if (i === "function") {
    if (tr(t)) return o;
    if (ro(t) && e) {
      const s = t(e);
      return dt(s, e, n, r, o);
    }
    return o.push(t), o;
  }
  if (Array.isArray(t)) {
    for (let s = 0; s < t.length; s++) dt(t[s], e, n, r, o);
    return o;
  }
  return Jr(t) ? (o.push(`.${t.styledComponentId}`), o) : is(t) ? (n ? (t.inject(n, r), o.push(t.getName(r))) : o.push(t), o) : tr(t) ? o : Zt(t) ? t.toString !== Object.prototype.toString ? (o.push(t.toString()), o) : (io(t, o), o) : (o.push(t.toString()), o);
}
const cs = qr($e);
class as {
  constructor(e, n, r) {
    this.rules = e, this.componentId = n, this.baseHash = ht(cs, n), this.baseStyle = r, Ee.registerId(n);
  }
  generateAndInjectStyles(e, n, r) {
    let o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, n, r) : "";
    {
      let i = "";
      for (let s = 0; s < this.rules.length; s++) {
        const c = this.rules[s];
        if (typeof c == "string") i += c;
        else if (c) if (ro(c)) {
          const u = c(e);
          typeof u == "string" ? i += u : u != null && u !== !1 && (i += Qe(dt(u, e, n, r)));
        } else i += Qe(dt(c, e, n, r));
      }
      if (i) {
        this.dynamicNameCache || (this.dynamicNameCache = /* @__PURE__ */ new Map());
        const s = r.hash ? r.hash + i : i;
        let c = this.dynamicNameCache.get(s);
        if (!c) {
          if (c = mn(ht(ht(this.baseHash, r.hash), i) >>> 0), this.dynamicNameCache.size >= 200) {
            const u = this.dynamicNameCache.keys().next().value;
            u !== void 0 && this.dynamicNameCache.delete(u);
          }
          this.dynamicNameCache.set(s, c);
        }
        if (!n.hasNameForId(this.componentId, c)) {
          const u = r(i, "." + c, void 0, this.componentId);
          n.insertRules(this.componentId, c, u);
        }
        o = Ht(o, c);
      }
    }
    return o;
  }
}
const us = /&/g;
function so(t, e) {
  let n = 0;
  for (; --e >= 0 && t.charCodeAt(e) === 92; ) n++;
  return !(1 & ~n);
}
function Me(t) {
  const e = t.length;
  let n = "", r = 0, o = 0, i = 0, s = !1, c = !1;
  for (let u = 0; u < e; u++) {
    const a = t.charCodeAt(u);
    if (i !== 0 || s || a !== ft || t.charCodeAt(u + 1) !== 42) if (s) a === 42 && t.charCodeAt(u + 1) === ft && (s = !1, u++);
    else if (a !== 34 && a !== 39 || so(t, u)) {
      if (i === 0) if (a === 123) o++;
      else if (a === 125) {
        if (o--, o < 0) {
          c = !0;
          let f = u + 1;
          for (; f < e; ) {
            const m = t.charCodeAt(f);
            if (m === 59 || m === 10) break;
            f++;
          }
          f < e && t.charCodeAt(f) === 59 && f++, o = 0, u = f - 1, r = f;
          continue;
        }
        o === 0 && (n += t.substring(r, u + 1), r = u + 1);
      } else a === 59 && o === 0 && (n += t.substring(r, u + 1), r = u + 1);
    } else i === 0 ? i = a : i === a && (i = 0);
    else s = !0, u++;
  }
  return c || o !== 0 || i !== 0 ? (r < e && o === 0 && i === 0 && (n += t.substring(r)), n) : t;
}
function co(t, e) {
  const n = e + " ", r = "," + n;
  for (let o = 0; o < t.length; o++) {
    const i = t[o];
    if (i.type === "rule") {
      i.value = (n + i.value).replaceAll(",", r);
      const s = i.props, c = [];
      for (let u = 0; u < s.length; u++) c[u] = n + s[u];
      i.props = c;
    }
    Array.isArray(i.children) && i.type !== "@keyframes" && co(i.children, e);
  }
  return t;
}
function ao({ options: t = Et, plugins: e = pn } = Et) {
  let n, r, o;
  const i = (l, d, p) => p.startsWith(r) && p.endsWith(r) && p.replaceAll(r, "").length > 0 ? `.${n}` : l, s = e.slice();
  s.push((l) => {
    l.type === ve && l.value.includes("&") && (o || (o = new RegExp(`\\${r}\\b`, "g")), l.props[0] = l.props[0].replace(us, r).replace(o, i));
  }), t.prefix && s.push(xi), s.push($i);
  let c = [];
  const u = Ei(s.concat(Oi((l) => c.push(l)))), a = (l, d = "", p = "", b = "&") => {
    n = b, r = d, o = void 0;
    const S = (function(h) {
      const O = h.indexOf("//") !== -1, P = h.indexOf("}") !== -1;
      if (!O && !P) return h;
      if (!O) return Me(h);
      const E = h.length;
      let k = "", y = 0, w = 0, Z = 0, L = 0, H = 0, kt = !1;
      for (; w < E; ) {
        const U = h.charCodeAt(w);
        if (U !== 34 && U !== 39 || so(h, w)) if (Z === 0) if (U === ft && w + 1 < E && h.charCodeAt(w + 1) === 42) {
          for (w += 2; w + 1 < E && (h.charCodeAt(w) !== 42 || h.charCodeAt(w + 1) !== ft); ) w++;
          w += 2;
        } else if (U !== 40) if (U !== 41) if (L > 0) w++;
        else if (U === 42 && w + 1 < E && h.charCodeAt(w + 1) === ft) k += h.substring(y, w), w += 2, y = w, kt = !0;
        else if (U === ft && w + 1 < E && h.charCodeAt(w + 1) === ft) {
          for (k += h.substring(y, w); w < E && h.charCodeAt(w) !== 10; ) w++;
          y = w, kt = !0;
        } else U === 123 ? H++ : U === 125 && H--, w++;
        else L > 0 && L--, w++;
        else L++, w++;
        else w++;
        else Z === 0 ? Z = U : Z === U && (Z = 0), w++;
      }
      return kt ? (y < E && (k += h.substring(y)), H === 0 ? k : Me(k)) : H === 0 ? h : Me(h);
    })(l);
    let C = wi(p || d ? p + " " + d + " { " + S + " }" : S);
    return t.namespace && (C = co(C, t.namespace)), c = [], me(C, u), c;
  }, f = t;
  let m = qe;
  for (let l = 0; l < e.length; l++) e[l].name || tt(15), m = ht(m, e[l].name);
  return f?.namespace && (m = ht(m, f.namespace)), f?.prefix && (m = ht(m, "p")), a.hash = m !== qe ? m.toString() : "", a;
}
const ls = new Ee(), Je = ao(), yn = j.createContext({ shouldForwardProp: void 0, styleSheet: ls, stylis: Je, stylisPlugins: void 0 });
yn.Consumer;
function uo() {
  return j.useContext(yn);
}
function _s(t) {
  var e;
  const n = uo(), { styleSheet: r } = n, o = j.useMemo(() => {
    let a = r;
    return t.sheet ? a = t.sheet : t.target ? a = a.reconstructWithOptions(t.nonce !== void 0 ? { target: t.target, nonce: t.nonce } : { target: t.target }, !1) : t.nonce !== void 0 && (a = a.reconstructWithOptions({ nonce: t.nonce })), t.disableCSSOMInjection && (a = a.reconstructWithOptions({ useCSSOMInjection: !1 })), a;
  }, [t.disableCSSOMInjection, t.nonce, t.sheet, t.target, r]), i = j.useMemo(() => {
    var a;
    return t.stylisPlugins === void 0 && t.namespace === void 0 && t.enableVendorPrefixes === void 0 ? n.stylis : ao({ options: { namespace: t.namespace, prefix: t.enableVendorPrefixes }, plugins: (a = t.stylisPlugins) !== null && a !== void 0 ? a : n.stylisPlugins });
  }, [t.enableVendorPrefixes, t.namespace, t.stylisPlugins, n.stylis, n.stylisPlugins]), s = "shouldForwardProp" in t ? t.shouldForwardProp : n.shouldForwardProp, c = (e = t.stylisPlugins) !== null && e !== void 0 ? e : n.stylisPlugins, u = j.useMemo(() => ({ shouldForwardProp: s, styleSheet: o, stylis: i, stylisPlugins: c }), [s, o, i, c]);
  return j.createElement(yn.Provider, { value: u }, t.children);
}
const Vt = j.createContext(void 0);
Vt.Consumer;
function lo() {
  const t = j.useContext(Vt);
  if (!t) throw tt(18);
  return t;
}
function fs(t) {
  const e = j.useContext(Vt), n = j.useMemo(() => (function(r, o) {
    if (!r) throw tt(14);
    if (Kt(r))
      return r(o);
    if (Array.isArray(r) || typeof r != "object") throw tt(8);
    return o ? Object.assign(Object.assign({}, o), r) : r;
  })(t.theme, e), [t.theme, e]);
  return t.children ? j.createElement(Vt.Provider, { value: n }, t.children) : null;
}
const He = {};
function hs(t, e) {
  const n = typeof t != "string" ? "sc" : Vr(t);
  He[n] = (He[n] || 0) + 1;
  const r = n + "-" + Yr($e + n + He[n]);
  return e ? e + "-" + r : r;
}
function ds(t, e, n) {
  const r = Jr(t), o = t, i = !Ye(t), { attrs: s = pn, componentId: c = hs(e.displayName, e.parentComponentId), displayName: u = Di(t) } = e, a = e.displayName && e.componentId ? Vr(e.displayName) + "-" + e.componentId : e.componentId || c, f = r && o.attrs ? o.attrs.concat(s).filter(Boolean) : s;
  let { shouldForwardProp: m } = e;
  if (r && o.shouldForwardProp) {
    const b = o.shouldForwardProp;
    if (e.shouldForwardProp) {
      const S = e.shouldForwardProp;
      m = (C, h) => b(C, h) && S(C, h);
    } else m = b;
  }
  const l = new as(n, a, r ? o.componentStyle : void 0);
  function d(b, S) {
    return (function(C, h, O) {
      const { attrs: P, componentStyle: E, defaultProps: k, foldedComponentIds: y, styledComponentId: w, target: Z } = C, L = j.useContext(Vt), H = uo(), kt = C.shouldForwardProp || H.shouldForwardProp, U = Ri(h, L, k) || Et, [Nt, yo] = (function(K, _t, ke) {
        const T = Object.assign(Object.assign({}, _t), { className: void 0, theme: ke });
        let Rt = null;
        const ee = K.length > 1;
        for (let ot = 0; ot < K.length; ot++) {
          const D = K[ot], Tt = Kt(D) ? D(ee ? Object.assign({}, T) : T) : D;
          for (const V in Tt) V === "className" ? T.className = Ht(T.className, Tt[V]) : V === "style" ? T.style = Object.assign(Object.assign({}, T.style), Tt[V]) : Tt[V] === void 0 ? V in T && (T[V] !== void 0 && (Rt || (Rt = [])).push(V), T[V] = void 0) : T[V] = Tt[V];
        }
        return "className" in _t && typeof _t.className == "string" && (T.className = Ht(T.className, _t.className)), [T, Rt];
      })(P, h, U), bn = E.generateAndInjectStyles(Nt, H.styleSheet, H.stylis), te = Nt.as || Z, wn = Ye(te), xe = (function(K, _t, ke, T, Rt, ee) {
        const ot = {};
        for (const D in K) D[0] === "$" || D === "as" || D === "theme" && K.theme === ke || (D === "forwardedAs" ? K.forwardedAs !== void 0 && (ot.as = K.forwardedAs) : K[D] === void 0 ? D === "className" || Rt || ee !== null && ee.indexOf(D) !== -1 || T && !T(D, _t) || (ot[D] = void 0) : T && !T(D, _t) || (ot[D] = K[D]));
        return ot;
      })(Nt, te, U, kt, wn, yo);
      let Ie = Ht(y, w);
      return bn && (Ie += " " + bn), Nt.className && (Ie += " " + Nt.className), xe[wn && te.includes("-") ? "class" : "className"] = Ie, O && (xe.ref = O), F(te, xe);
    })(p, b, S);
  }
  d.displayName = u;
  let p = j.forwardRef(d);
  return p.attrs = f, p.componentStyle = l, p.displayName = u, p.shouldForwardProp = m, p.foldedComponentIds = r ? Ht(o.foldedComponentIds, o.styledComponentId) : "", p.styledComponentId = a, p.target = r ? o.target : t, Object.defineProperty(p, "defaultProps", { get() {
    return this._foldedDefaultProps;
  }, set(b) {
    this._foldedDefaultProps = r ? (function(S, ...C) {
      for (const h of C) Xe(S, h, !0);
      return S;
    })({}, o.defaultProps, b) : b;
  } }), gn(p, () => `.${p.styledComponentId}`), i && Kr(p, t, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), p;
}
var ps = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "blockquote", "body", "button", "br", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "menu", "meter", "nav", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "slot", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use"]);
function er(t, e) {
  const n = [t[0]];
  for (let r = 0, o = e.length; r < o; r += 1) n.push(e[r], t[r + 1]);
  return n;
}
const nr = (t) => (eo.add(t), t);
function Cn(t, ...e) {
  if (Kt(t) || Zt(t)) return nr(dt(er(pn, [t, ...e])));
  const n = t;
  return e.length === 0 && n.length === 1 && typeof n[0] == "string" ? dt(n) : nr(dt(er(n, e)));
}
function tn(t, e, n = Et) {
  if (!e) throw tt(1, e);
  const r = (o, ...i) => t(e, n, Cn(o, ...i));
  return r.attrs = (o) => tn(t, e, Object.assign(Object.assign({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) })), r.withConfig = (o) => tn(t, e, Object.assign(Object.assign({}, n), o)), r;
}
const _o = (t) => tn(ds, t), G = _o;
ps.forEach((t) => {
  G[t] = _o(t);
});
var fo;
class ms {
  constructor(e, n) {
    this[fo] = !0, this.inject = (r, o = Je) => {
      const i = this.getName(o);
      if (!r.hasNameForId(this.id, i)) {
        const s = o(this.rules, i, "@keyframes");
        r.insertRules(this.id, i, s);
      }
    }, this.name = e, this.id = Zr + e, this.rules = n, Mt(this.id), gn(this, () => {
      throw tt(12, String(this.name));
    });
  }
  getName(e = Je) {
    return e.hash ? this.name + mn(+e.hash >>> 0) : this.name;
  }
}
function Oe(t, ...e) {
  const n = Qe(Cn(t, ...e)), r = Yr(n);
  return new ms(r, n);
}
fo = no;
const Gt = yr(void 0);
Gt.displayName = "ConfigurationContext";
function Jt() {
  const t = un(Gt);
  if (!t)
    throw new Error(
      `${Gt.displayName} must be used within a ${Gt.displayName} Provider`
    );
  return t;
}
function gs({
  children: t,
  configuration: e,
  videoElementSize: n
}) {
  const r = Xt(() => ({ ...e, videoElementSize: n }), [e, n]);
  return /* @__PURE__ */ _(Gt.Provider, { value: r, children: t });
}
const vt = {
  CIRCLE_SOLID: "circle-solid",
  SQUARE_ROUNDED_DASH: "square-rounded-dash",
  SQUARE_ROUNDED_SOLID: "square-rounded-solid",
  SQUARE_DASH: "square-dash",
  SQUARE_SOLID: "square-solid"
}, ys = 2, ho = 14, Cs = 0.0276;
var nt = /* @__PURE__ */ ((t) => (t[t.S = 300] = "S", t[t.M = 400] = "M", t[t.L = 500] = "L", t[t.Default = 600] = "Default", t))(nt || {});
const Ft = {
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
}, Fe = {
  loading: { text: "Loading. Please wait.", visible: !0 },
  waiting: { text: "Waiting for input...", visible: !0 }
}, vs = {
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
}, bs = vt.CIRCLE_SOLID, ws = "rgba(19, 19, 19, 0.5)", Ss = 34;
function rr(t, e) {
  return Math.max(e, e + (t - 400) * Cs + 2);
}
const $s = (t, e = ho) => t ? t.width < t.height ? rr(t.width, e) : rr(t.height, e) : e, Es = (t) => t > nt.Default ? Ft[nt.Default] : t > nt.L ? Ft[nt.L] : t > nt.M ? Ft[nt.M] : Ft[nt.S], Os = (t) => t ? Es(t.width) : Ft[nt.Default];
function xs() {
  const t = "https://fonts.googleapis.com/css?family=Montserrat:600";
  if (!document.querySelector(`link[href="${t}"]`)) {
    const n = document.createElement("link");
    n.href = t, n.rel = "stylesheet", document.head.appendChild(n);
  }
}
function Is(t) {
  if (t)
    return {
      faceCenter: t.faceCenter,
      faceSize: t.faceSize
    };
}
function ks(t, e) {
  return t ? `${t}, ${e}` : e;
}
const Ns = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, Rs = {
  family: "Montserrat, Arial, sans-serif",
  weight: "600",
  style: "normal",
  minimumSize: ho
}, Pt = {
  colors: Ns,
  font: Rs
}, Ts = (t) => t ? {
  ...Pt,
  ...t,
  colors: {
    ...Pt.colors,
    ...t.colors
  },
  font: {
    ...Pt.font,
    ...t.font,
    family: ks(t.font?.family, Pt.font.family)
  }
} : Pt, As = (t, e) => ({
  ...t,
  font: {
    ...t.font,
    computedSize: $s(e, t.font.minimumSize)
  }
}), Ps = ({ svgSize: t }) => /* @__PURE__ */ _("svg", { fill: "none", height: t, viewBox: "0 0 16 14", width: t, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ _(
  "path",
  {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), Ls = G.div`
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
`, Ds = G.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(t) => t.theme.colors.instructionTextColor};
`, Ms = G.p`
  background: ${(t) => t.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(t) => `${t.theme.font.computedSize}px`};
  line-height: 1em;
  max-width: 80%;
`, _e = ({ Icon: t, isCameraReady: e, position: n = "absolute", text: r }) => {
  const { font: o } = lo();
  return /* @__PURE__ */ _(Ls, { $isCameraReady: e, $position: n, children: /* @__PURE__ */ _(Ds, { children: [
    t ? /* @__PURE__ */ _(t, { svgSize: o.computedSize * 2 }) : null,
    /* @__PURE__ */ _(Ms, { children: r })
  ] }) });
}, po = ({ text: t = "An unknown error has occurred" }) => /* @__PURE__ */ _(_e, { Icon: Ps, position: "relative", text: t });
class Hs extends Y {
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
    return this.state.hasError ? /* @__PURE__ */ _(po, {}) : this.props.children;
  }
}
const Fs = G.div`
  font-family: ${(t) => t.theme.font.family};
  font-style: ${(t) => t.theme.font.style};
  font-weight: ${(t) => t.theme.font.weight};
`;
function Us({
  children: t,
  uiConfiguration: e,
  videoElementSize: n
}) {
  lt(() => {
    xs();
  }, []);
  const r = As(e.styling.theme, n);
  return /* @__PURE__ */ _(_s, { target: e.styleTarget, children: /* @__PURE__ */ _(fs, { theme: r, children: /* @__PURE__ */ _(Fs, { children: /* @__PURE__ */ _(Hs, { children: /* @__PURE__ */ _(gs, { configuration: e, videoElementSize: n, children: t }) }) }) }) });
}
const Bs = 0.75, js = 2, Ws = "dot-auto-capture-video";
function qt(t, e) {
  const n = ye(e);
  lt(() => {
    n.current = e;
  }, [e]), lt(
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
function Gs(t) {
  const [e, n] = Q(), r = gt(
    (o) => {
      n(o.detail?.size);
    },
    [n]
  );
  return qt(t, r), xt(() => {
    if (!e) {
      const o = document.getElementById(Ws);
      o && n(o.getBoundingClientRect());
    }
  }, [e, n]), e;
}
const zs = (t) => Number.parseFloat(t.toFixed(3)), vn = (t, e) => Math.min(t, e), Zs = ({ height: t, width: e }, n) => {
  const r = vn(e, t) * n, o = (e - r) / 2, i = (t - r) / 2;
  return {
    shiftX: o,
    shiftY: i,
    width: r,
    height: r
  };
}, Vs = (t, e) => {
  const { height: n, shiftX: r, shiftY: o, width: i } = Zs(t, e);
  return {
    shiftX: r / t.width,
    shiftY: o / t.height,
    width: i / t.width,
    height: n / t.height
  };
};
function qs(t, e) {
  const n = vn(e.width, e.height);
  return zs(t * n);
}
function Ys(t, e = 1) {
  return Vs(
    t,
    Bs * e
  );
}
function Qs(t, e) {
  return qs(t, e) * js;
}
const Xs = (t, e) => {
  document.dispatchEvent(
    new CustomEvent(t, {
      detail: e
    })
  );
}, or = (t, e) => {
  Xs(t, {
    instruction: e
  });
};
async function Ks() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Js() {
  return (await Ks()).filter((e) => e.kind === "videoinput");
}
const tc = () => {
  const [t, e] = Q(!1);
  return lt(() => {
    (async () => (await Js()).length > 1 && e(!0))();
  }, []), t;
}, ec = ({ size: t }) => /* @__PURE__ */ _("svg", { fill: "none", height: t, viewBox: "0 0 52 52", width: t, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }), nc = ({ size: t }) => /* @__PURE__ */ _("svg", { fill: "none", height: t, viewBox: "0 0 52 52", width: "52", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ _("circle", { cx: "26", cy: "26", fill: "#131313", fillOpacity: "0.3", r: "26" }),
  /* @__PURE__ */ _(
    "path",
    {
      d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
      fill: "white"
    }
  )
] }), mo = G.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(t) => t.$marginLeft ? `${t.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, rc = ({ marginLeft: t, size: e, ...n }) => /* @__PURE__ */ _(mo, { $marginLeft: t, ...n, children: /* @__PURE__ */ _(ec, { size: e }) }), oc = ({ marginLeft: t, size: e, ...n }) => /* @__PURE__ */ _(mo, { $marginLeft: t, ...n, children: /* @__PURE__ */ _(nc, { size: e }) }), ic = G.div`
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
  } = Jt(), o = tc();
  if (!n)
    return null;
  const { buttonPadding: i, iconSize: s, marginLeft: c } = Os(r);
  return /* @__PURE__ */ _(ic, { $padding: i, children: [
    o && /* @__PURE__ */ _(oc, { disabled: e, onClick: () => {
      or(t, xn.SWITCH_CAMERA);
    }, size: s }),
    /* @__PURE__ */ _(
      rc,
      {
        marginLeft: o ? c : 0,
        onClick: () => {
          or(t, xn.TOGGLE_MIRROR);
        },
        size: s
      }
    )
  ] });
}, cc = "2.5s", ac = "0.3s", uc = "linear", lc = Oe`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
Oe`
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`;
Oe`
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
Oe`
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
const _c = G.div`
  position: absolute;
  left: 0;
  right: 0;

  ${(t) => t.$cssTop ? `top: ${t.$cssTop}%;` : ""}
  ${(t) => t.$cssBottom ? `bottom: ${t.$cssBottom}%;` : ""}
    ${(t) => t.$isAnimating && Cn`
      animation: ${lc} ${ac}
        ${uc} both;
      animation-delay: ${cc};

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
`, fc = G.div`
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
`, hc = ({
  children: t,
  cssBottom: e,
  cssTop: n,
  isAnimating: r,
  isInCandidateSelection: o,
  isPortrait: i
}) => /* @__PURE__ */ _(_c, { $cssBottom: e, $cssTop: n, $isAnimating: r, $isPortrait: i, children: /* @__PURE__ */ _(
  fc,
  {
    $isInCandidateSelection: o,
    $wrap: t.length > Ss,
    children: t
  }
) }), dc = G.div`
  color: ${(t) => t.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, ir = ({ svgSize: t }) => /* @__PURE__ */ _(dc, { children: /* @__PURE__ */ _("svg", { fill: "none", height: t, viewBox: "0 0 48 48", width: t, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }) }), pc = G.div`
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
`, go = ({ children: t, height: e, scale: n, width: r }) => {
  const {
    styling: { backdropColor: o }
  } = Jt(), i = vn(r, e);
  return /* @__PURE__ */ _(pc, { $backdropColor: o, $scale: n, $shorterSide: i, children: /* @__PURE__ */ _("svg", { viewBox: `0 0 ${r} ${e}`, children: [
    /* @__PURE__ */ _("defs", { children: /* @__PURE__ */ _("mask", { id: "mask", children: [
      /* @__PURE__ */ _("rect", { fill: "#fff", height: "100%", width: "100%" }),
      /* @__PURE__ */ _("g", { children: t })
    ] }) }),
    /* @__PURE__ */ _("rect", { fill: o, height: "100%", mask: "url(#mask)", width: "100%" })
  ] }) });
};
function mc({ cameraHeight: t, cameraWidth: e, isBackdrop: n, state: r }) {
  const { appStateInstructions: o } = Jt(), i = r === B.ERROR || r === B.RUNNING;
  return !r || i || !o?.[r]?.visible ? null : r === B.WAITING || r === B.COMPLETE ? /* @__PURE__ */ _(W, { children: [
    n && t && e && /* @__PURE__ */ _(go, { height: t, width: e }),
    /* @__PURE__ */ _(_e, { isCameraReady: !0, text: o[B.WAITING].text })
  ] }) : r === B.BLURRED ? /* @__PURE__ */ _(W, { children: /* @__PURE__ */ _(_e, { Icon: ir, isCameraReady: !0, text: o[B.BLURRED].text }) }) : /* @__PURE__ */ _(_e, { Icon: ir, isCameraReady: !0, text: o[B.LOADING].text });
}
function gc({ isRounded: t, isSquare: e, ...n }) {
  return t ? /* @__PURE__ */ _("rect", { fill: "#000", ...n, rx: "2%" }) : /* @__PURE__ */ _("rect", { fill: "#000", ...n, rx: e ? "0" : "50%" });
}
const yc = () => /* @__PURE__ */ _("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ _(
  "path",
  {
    d: "M2 240C2 108.556 108.556 2 240 2C371.444 2 478 108.556 478 240C478 371.444 371.444 478 240 478C108.556 478 2 371.444 2 240Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  }
) });
function Cc() {
  return /* @__PURE__ */ _("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ _(
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
function vc() {
  return /* @__PURE__ */ _("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ _(
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
function bc() {
  return /* @__PURE__ */ _("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ _("rect", { height: "476", rx: "14", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "4", width: "476", x: "2", y: "2" }) });
}
function wc() {
  return /* @__PURE__ */ _("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ _("rect", { height: "476", rx: "2", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "4", width: "476", x: "2", y: "2" }) });
}
const Sc = G.div`
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
`, $c = ({
  children: t,
  className: e,
  isInCandidateSelection: n,
  onAnimationEnd: r,
  placeholderRectangle: o,
  scale: i
}) => /* @__PURE__ */ _(
  Sc,
  {
    $isInCandidateSelection: n,
    $placeholderRectangle: o,
    $scale: i,
    className: e,
    onAnimationEnd: r,
    children: t
  }
), Ec = {
  [vt.CIRCLE_SOLID]: /* @__PURE__ */ _(yc, {}),
  [vt.SQUARE_ROUNDED_DASH]: /* @__PURE__ */ _(vc, {}),
  [vt.SQUARE_ROUNDED_SOLID]: /* @__PURE__ */ _(bc, {}),
  [vt.SQUARE_DASH]: /* @__PURE__ */ _(Cc, {}),
  [vt.SQUARE_SOLID]: /* @__PURE__ */ _(wc, {})
};
function Oc({ backdropHeight: t, backdropWidth: e, isBackdrop: n, placeholderRectangle: r, ...o }) {
  const { placeholder: i } = Jt(), s = i.toLowerCase().includes("square"), c = i.toLowerCase().includes("rounded");
  return /* @__PURE__ */ _(W, { children: [
    n && /* @__PURE__ */ _(go, { height: t, width: e, children: /* @__PURE__ */ _(
      gc,
      {
        height: `${r.height * 100}%`,
        isRounded: c,
        isSquare: s,
        width: `${r.width * 100}%`,
        x: `${r.shiftX * 100}%`,
        y: `${r.shiftY * 100}%`
      }
    ) }),
    /* @__PURE__ */ _($c, { placeholderRectangle: r, ...o, children: Ec[i] })
  ] });
}
const xc = () => {
  const [t, e] = Q(), [n, r] = Q(!1), o = gt(
    (u) => {
      e(u?.detail?.cameraResolution);
      const a = u?.detail?.isMirroring;
      a !== void 0 && r(a);
    },
    [e]
  );
  qt(mt.CAMERA_PROPS_CHANGED, o);
  const [i, s] = Q({
    code: M.FACE_NOT_PRESENT,
    // FIXME Default instruction should not be here
    isEscalated: !1
  }), c = gt(
    (u) => {
      s({
        code: u?.detail?.instructionCode,
        isEscalated: u?.detail?.isEscalated ?? !1
      });
    },
    [s]
  );
  return qt(mt.INSTRUCTION_CHANGED, c), {
    cameraResolution: t,
    instruction: i,
    isMirroring: n
  };
}, Ic = () => {
  const [t, e] = Q(B.LOADING), [n, r] = Q(), o = gt(
    (i) => {
      e(i.detail?.appState);
      const s = i?.detail?.error;
      s && r(s);
    },
    [e, r]
  );
  return qt(mt.STATE_CHANGED, o), {
    appState: t,
    error: n
  };
}, kc = G.canvas`
  transform: ${(t) => t.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
function Nc(t) {
  const e = t.getContext("2d");
  e && e.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
const Rc = ({ cameraResolution: t, isImageMirror: e }) => {
  const n = ye(null), r = lo(), [o, i] = Q(), s = gt(
    (c) => {
      i(c?.detail?.detectedObject);
    },
    [i]
  );
  return qt(mt.DETECTION_CHANGED, s), lt(() => {
    if (!n.current)
      return;
    const c = { width: t.width, height: t.height }, u = Is(o), a = (f, m) => {
      if (!m)
        return;
      const { faceCenter: l, faceSize: d } = m, p = n?.current?.getContext("2d");
      if (!p)
        return;
      const b = Qs(d, f);
      p.beginPath(), p.arc(l.x, l.y, b, 0, 2 * Math.PI, !1), p.lineWidth = ys, p.strokeStyle = r.colors.placeholderColor, p.stroke();
    };
    n.current.width = c.width, n.current.height = c.height, Nc(n.current), a(c, u);
  }, [t, o, r.colors.placeholderColor]), /* @__PURE__ */ _(kc, { ref: n, $isImageMirror: e });
};
function Tc() {
  const { appState: t, error: e } = Ic(), { cameraResolution: n, instruction: r, isMirroring: o } = xc(), i = r.code === M.CANDIDATE_SELECTION, {
    control: { showDetectionLayer: s },
    instructions: c
  } = Jt();
  if (t === B.ERROR)
    return /* @__PURE__ */ _(po, { text: e?.message });
  if (t === B.RUNNING && n) {
    const u = Ys(n);
    return /* @__PURE__ */ _(W, { children: [
      s && /* @__PURE__ */ _(Rc, { cameraResolution: n, isImageMirror: o }),
      /* @__PURE__ */ _(
        Oc,
        {
          backdropHeight: n.height,
          backdropWidth: n.width,
          isBackdrop: !0,
          isInCandidateSelection: i,
          placeholderRectangle: u
        }
      ),
      r.code && /* @__PURE__ */ _(
        hc,
        {
          cssBottom: (u.height + u.shiftY) * 100,
          isInCandidateSelection: i,
          isPortrait: n.width < n.height,
          children: c[r.code]
        }
      ),
      /* @__PURE__ */ _(sc, { customControlEvent: mt.CONTROL, isSwitchCameraDisabled: i })
    ] });
  }
  return /* @__PURE__ */ _(
    mc,
    {
      cameraHeight: n?.height,
      cameraWidth: n?.width,
      isBackdrop: !0,
      state: t
    }
  );
}
function Ac(t) {
  const e = { ...vs, ...t?.instructions }, n = {
    [B.LOADING]: {
      ...Fe.loading,
      ...t?.appStateInstructions?.loading
    },
    [B.WAITING]: {
      ...Fe.waiting,
      ...t?.appStateInstructions?.waiting
    },
    // TODO: on Major release version, use specific app state instructions for blurred state
    [B.BLURRED]: {
      ...Fe.loading,
      ...t?.appStateInstructions?.loading
    }
  }, r = Ts(t?.styling?.theme), o = {
    ...t?.styling,
    backdropColor: t?.styling?.backdropColor ?? ws,
    theme: r
  }, i = {
    showDetectionLayer: t?.control?.showDetectionLayer ?? !1,
    showCameraButtons: t?.control?.showCameraButtons ?? !1
  }, s = t?.placeholder ?? bs;
  return {
    ...t,
    instructions: e,
    appStateInstructions: n,
    placeholder: s,
    styling: o,
    control: i
  };
}
const Pc = ({ configuration: t }) => {
  const e = Gs(mt.VIDEO_ELEMENT_SIZE);
  return /* @__PURE__ */ _(Us, { uiConfiguration: Ac(t), videoElementSize: e, children: /* @__PURE__ */ _(Tc, {}) });
};
Io(Pc, "x-dot-face-auto-capture-ui", ["configuration"]);
