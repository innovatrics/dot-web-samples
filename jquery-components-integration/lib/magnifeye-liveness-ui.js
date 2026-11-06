var Jt, g, fr, st, In, dr, hr, Ae, se, Bt, pr, an, Be, We, mr, he = {}, pe = [], wo = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Qt = Array.isArray;
function J(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function ln(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function U(t, e, n) {
  var r, o, i, s = {};
  for (i in e) i == "key" ? r = e[i] : i == "ref" ? o = e[i] : s[i] = e[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? Jt.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null) for (i in t.defaultProps) s[i] === void 0 && (s[i] = t.defaultProps[i]);
  return Wt(t, s, r, o, null);
}
function Wt(t, e, n, r, o) {
  var i = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++fr, __i: -1, __u: 0 };
  return o == null && g.vnode != null && g.vnode(i), i;
}
function Oo() {
  return { current: null };
}
function z(t) {
  return t.children;
}
function q(t, e) {
  this.props = t, this.context = e;
}
function mt(t, e) {
  if (e == null) return t.__ ? mt(t.__, t.__i + 1) : null;
  for (var n; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
  return typeof t.type == "function" ? mt(t) : null;
}
function No(t) {
  if (t.__P && t.__d) {
    var e = t.__v, n = e.__e, r = [], o = [], i = J({}, e);
    i.__v = e.__v + 1, g.vnode && g.vnode(i), un(t.__P, i, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [n] : null, r, n ?? mt(e), !!(32 & e.__u), o), i.__v = e.__v, i.__.__k[i.__i] = i, $r(r, i, o), e.__e = e.__ = null, i.__e != n && gr(i);
  }
}
function gr(t) {
  if ((t = t.__) != null && t.__c != null) return t.__e = t.__c.base = null, t.__k.some(function(e) {
    if (e != null && e.__e != null) return t.__e = t.__c.base = e.__e;
  }), gr(t);
}
function je(t) {
  (!t.__d && (t.__d = !0) && st.push(t) && !me.__r++ || In != g.debounceRendering) && ((In = g.debounceRendering) || dr)(me);
}
function me() {
  try {
    for (var t, e = 1; st.length; ) st.length > e && st.sort(hr), t = st.shift(), e = st.length, No(t);
  } finally {
    st.length = me.__r = 0;
  }
}
function yr(t, e, n, r, o, i, s, c, l, a, _) {
  var m, u, h, p, $, E, C = r && r.__k || pe, d = e.length;
  for (l = xo(n, e, C, l, d), m = 0; m < d; m++) (h = n.__k[m]) != null && (u = h.__i != -1 && C[h.__i] || he, h.__i = m, E = un(t, h, u, o, i, s, c, l, a, _), p = h.__e, h.ref && u.ref != h.ref && (u.ref && _n(u.ref, null, h), _.push(h.ref, h.__c || p, h)), $ == null && p != null && ($ = p), 4 & h.__u ? (l = Cr(h, l, t), u.__e && (u.__e = null)) : typeof h.type == "function" && E !== void 0 ? l = E : p && (l = p.nextSibling), h.__u &= -7);
  return n.__e = $, l;
}
function xo(t, e, n, r, o) {
  var i, s, c, l, a, _ = n.length, m = _, u = 0;
  for (t.__k = new Array(o), i = 0; i < o; i++) (s = e[i]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = t.__k[i] = Wt(null, s, null, null, null) : Qt(s) ? s = t.__k[i] = Wt(z, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? s = t.__k[i] = Wt(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : t.__k[i] = s, l = i + u, s.__ = t, s.__b = t.__b + 1, c = null, (a = s.__i = Io(s, n, l, m)) != -1 && (m--, (c = n[a]) && (c.__u |= 2)), c == null || c.__v == null ? (a == -1 && (o > _ ? u-- : o < _ && u++), typeof s.type != "function" && (s.__u |= 4)) : a != l && (a == l - 1 ? u-- : a == l + 1 ? u++ : (a > l ? u-- : u++, s.__u |= 4))) : t.__k[i] = null;
  if (m) for (i = 0; i < _; i++) (c = n[i]) != null && (2 & c.__u) == 0 && (c.__e == r && (r = mt(c)), Er(c, c));
  return r;
}
function Cr(t, e, n) {
  var r, o;
  if (typeof t.type == "function") {
    for (r = t.__k, o = 0; r && o < r.length; o++) r[o] && (r[o].__ = t, e = Cr(r[o], e, n));
    return e;
  }
  t.__e != e && (e && t.type && !e.parentNode && (e = mt(t)), e = n.insertBefore(t.__e, e || null));
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function nt(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Qt(t) ? t.some(function(n) {
    nt(n, e);
  }) : e.push(t)), e;
}
function Io(t, e, n, r) {
  var o, i, s, c = t.key, l = t.type, a = e[n], _ = a != null && (2 & a.__u) == 0;
  if (a === null && c == null || _ && c == a.key && l == a.type) return n;
  if (r > (_ ? 1 : 0)) {
    for (o = n - 1, i = n + 1; o >= 0 || i < e.length; ) if ((a = e[s = o >= 0 ? o-- : i++]) != null && (2 & a.__u) == 0 && c == a.key && l == a.type) return s;
  }
  return -1;
}
function Tn(t, e, n) {
  e[0] == "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || wo.test(e) ? n : n + "px";
}
function ie(t, e, n, r, o) {
  var i, s;
  t: if (e == "style") if (typeof n == "string") t.style.cssText = n;
  else {
    if (typeof r == "string" && (t.style.cssText = r = ""), r) for (e in r) n && e in n || Tn(t.style, e, "");
    if (n) for (e in n) r && n[e] == r[e] || Tn(t.style, e, n[e]);
  }
  else if (e[0] == "o" && e[1] == "n") i = e != (e = e.replace(pr, "$1")), s = e.toLowerCase(), e = s in t || e == "onFocusOut" || e == "onFocusIn" ? s.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = n, n ? r ? n[Bt] = r[Bt] : (n[Bt] = an, t.addEventListener(e, i ? We : Be, i)) : t.removeEventListener(e, i ? We : Be, i);
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
function An(t) {
  return function(e) {
    if (this.l) {
      var n = this.l[e.type + t];
      if (e[se] == null) e[se] = an++;
      else if (e[se] < n[Bt]) return;
      return n(g.event ? g.event(e) : e);
    }
  };
}
function un(t, e, n, r, o, i, s, c, l, a) {
  var _, m, u, h, p, $, E, C, d, O, P, w, I, y, b, Y, L = e.type;
  if (e.constructor !== void 0) return null;
  128 & n.__u && (l = !!(32 & n.__u), i = [c = e.__e = n.__e]), (_ = g.__b) && _(e);
  t: if (typeof L == "function") {
    m = s.length;
    try {
      if (d = e.props, O = L.prototype && L.prototype.render, P = (_ = L.contextType) && r[_.__c], w = _ ? P ? P.props.value : _.__ : r, n.__c ? C = (u = e.__c = n.__c).__ = u.__E : (O ? e.__c = u = new L(d, w) : (e.__c = u = new q(d, w), u.constructor = L, u.render = Ao), P && P.sub(u), u.state || (u.state = {}), u.__n = r, h = u.__d = !0, u.__h = [], u._sb = []), O && u.__s == null && (u.__s = u.state), O && L.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = J({}, u.__s)), J(u.__s, L.getDerivedStateFromProps(d, u.__s))), p = u.props, $ = u.state, u.__v = e, h) O && L.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), O && u.componentDidMount != null && u.__h.push(u.componentDidMount);
      else {
        if (O && L.getDerivedStateFromProps == null && d !== p && u.componentWillReceiveProps != null && u.componentWillReceiveProps(d, w), e.__v == n.__v || !u.__e && u.shouldComponentUpdate != null && u.shouldComponentUpdate(d, u.__s, w) === !1) {
          e.__v != n.__v && (u.props = d, u.state = u.__s, u.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some(function(H) {
            H && (H.__ = e);
          }), pe.push.apply(u.__h, u._sb), u._sb = [], u.__h.length && s.push(u), c = mt(n);
          break t;
        }
        u.componentWillUpdate != null && u.componentWillUpdate(d, u.__s, w), O && u.componentDidUpdate != null && u.__h.push(function() {
          u.componentDidUpdate(p, $, E);
        });
      }
      if (u.context = w, u.props = d, u.__P = t, u.__e = !1, I = g.__r, y = 0, O) u.state = u.__s, u.__d = !1, I && I(e), _ = u.render(u.props, u.state, u.context), pe.push.apply(u.__h, u._sb), u._sb = [];
      else do
        u.__d = !1, I && I(e), _ = u.render(u.props, u.state, u.context), u.state = u.__s;
      while (u.__d && ++y < 25);
      u.state = u.__s, u.getChildContext != null && (r = J(J({}, r), u.getChildContext())), O && !h && u.getSnapshotBeforeUpdate != null && (E = u.getSnapshotBeforeUpdate(p, $)), b = _ != null && _.type === z && _.key == null ? br(_.props.children) : _, c = yr(t, Qt(b) ? b : [b], e, n, r, o, i, s, c, l, a), u.base = e.__e, e.__u &= -161, u.__h.length && s.push(u), C && (u.__E = u.__ = null);
    } catch (H) {
      if (s.length = m, e.__v = null, l || i != null) {
        if (H.then) {
          for (e.__u |= l ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
          i != null && (i[i.indexOf(c)] = null), e.__e = c;
        } else if (i != null) for (Y = i.length; Y--; ) ln(i[Y]);
      } else e.__e = n.__e;
      e.__k == null && (e.__k = n.__k || []), H.then || vr(e), g.__e(H, e, n);
    }
  } else i == null && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : c = e.__e = To(n.__e, e, n, r, o, i, s, l, a);
  return (_ = g.diffed) && _(e), 128 & e.__u ? void 0 : c;
}
function vr(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(vr));
}
function $r(t, e, n) {
  for (var r = 0; r < n.length; r++) _n(n[r], n[++r], n[++r]);
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
function br(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : Qt(t) ? t.map(br) : t.constructor !== void 0 ? null : J({}, t);
}
function To(t, e, n, r, o, i, s, c, l) {
  var a, _, m, u, h, p, $, E = n.props || he, C = e.props, d = e.type;
  if (d == "svg" ? o = "http://www.w3.org/2000/svg" : d == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (a = 0; a < i.length; a++) if ((h = i[a]) && "setAttribute" in h == !!d && (d ? h.localName == d : h.nodeType == 3)) {
      t = h, i[a] = null;
      break;
    }
  }
  if (t == null) {
    if (d == null) return document.createTextNode(C);
    t = document.createElementNS(o, d, C.is && C), c && (g.__m && g.__m(e, i), c = !1), i = null;
  }
  if (d == null) E === C || c && t.data == C || (t.data = C);
  else {
    if (i = d == "textarea" && C.defaultValue != null ? null : i && Jt.call(t.childNodes), !c && i != null) for (E = {}, a = 0; a < t.attributes.length; a++) E[(h = t.attributes[a]).name] = h.value;
    for (a in E) h = E[a], a == "dangerouslySetInnerHTML" ? m = h : a == "children" || a in C || a == "value" && "defaultValue" in C || a == "checked" && "defaultChecked" in C || ie(t, a, null, h, o);
    for (a in C) h = C[a], a == "children" ? u = h : a == "dangerouslySetInnerHTML" ? _ = h : a == "value" ? p = h : a == "checked" ? $ = h : c && typeof h != "function" || E[a] === h || ie(t, a, h, E[a], o);
    if (_) c || m && (_.__html == m.__html || _.__html == t.innerHTML) || (t.innerHTML = _.__html), e.__k = [];
    else if (m && (t.innerHTML = ""), yr(e.type == "template" ? t.content : t, Qt(u) ? u : [u], e, n, r, d == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, s, i ? i[0] : n.__k && mt(n, 0), c, l), i != null) for (a = i.length; a--; ) ln(i[a]);
    c && d != "textarea" || (a = "value", d == "progress" && p == null ? t.removeAttribute("value") : p != null && (p !== t[a] || d == "progress" && !p || d == "option" && p != E[a]) && ie(t, a, p, E[a], o), a = "checked", $ != null && $ != t[a] && ie(t, a, $, E[a], o));
  }
  return t;
}
function _n(t, e, n) {
  try {
    if (typeof t == "function") {
      var r = typeof t.__u == "function";
      r && t.__u(), r && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (o) {
    g.__e(o, n);
  }
}
function Er(t, e, n) {
  var r, o;
  if (g.unmount && g.unmount(t), (r = t.ref) && (r.current && r.current != t.__e || _n(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (i) {
      g.__e(i, e);
    }
    r.base = r.__P = r.__n = null;
  }
  if (r = t.__k) for (o = 0; o < r.length; o++) r[o] && Er(r[o], e, n || typeof t.type != "function");
  n || ln(t.__e), t.__c = t.__ = t.__e = void 0;
}
function Ao(t, e, n) {
  return this.constructor(t, n);
}
function at(t, e, n) {
  var r, o, i, s;
  e == document && (e = document.documentElement), g.__ && g.__(t, e), o = (r = typeof n == "function") ? null : n && n.__k || e.__k, i = [], s = [], un(e, t = (!r && n || e).__k = U(z, null, [t]), o || he, he, e.namespaceURI, !r && n ? [n] : o ? null : e.firstChild ? Jt.call(e.childNodes) : null, i, !r && n ? n : o ? o.__e : e.firstChild, r, s), $r(i, t, s), t.props.children = null;
}
function fn(t, e) {
  at(t, e, fn);
}
function dn(t, e, n) {
  var r, o, i, s, c = J({}, t.props);
  for (i in t.type && t.type.defaultProps && (s = t.type.defaultProps), e) i == "key" ? r = e[i] : i == "ref" ? o = e[i] : c[i] = e[i] === void 0 && s != null ? s[i] : e[i];
  return arguments.length > 2 && (c.children = arguments.length > 3 ? Jt.call(arguments, 2) : n), Wt(t.type, c, r || t.key, o || t.ref, null);
}
function Sr(t) {
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
  return e.__c = "__cC" + mr++, e.__ = t, e.Provider = e.__l = (e.Consumer = function(n, r) {
    return n.children(r);
  }).contextType = e, e;
}
Jt = pe.slice, g = { __e: function(t, e, n, r) {
  for (var o, i, s; e = e.__; ) if ((o = e.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(t)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, r || {}), s = o.__d), s) return o.__E = o;
  } catch (c) {
    t = c;
  }
  throw t;
} }, fr = 0, q.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = J({}, this.state), typeof t == "function" && (t = t(J({}, n), this.props)), t && J(n, t), t != null && this.__v && (e && this._sb.push(e), je(this));
}, q.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), je(this));
}, q.prototype.render = z, st = [], dr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, hr = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, me.__r = 0, Ae = Math.random().toString(8), se = "__d" + Ae, Bt = "__a" + Ae, pr = /(PointerCapture)$|Capture$/i, an = 0, Be = An(!1), We = An(!0), mr = 0;
function ge() {
  return ge = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, ge.apply(this, arguments);
}
function wr(t, e) {
  if (t == null) return {};
  var n, r, o = {}, i = Object.keys(t);
  for (r = 0; r < i.length; r++) e.indexOf(n = i[r]) >= 0 || (o[n] = t[n]);
  return o;
}
var ko = ["context", "children"], Ro = ["useFragment"];
function Po(t, e, n, r) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = t, i._root = i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = function() {
    Mo.call(this, r);
  }, o.prototype.attributeChangedCallback = Do, o.prototype.disconnectedCallback = Fo, n = n || t.observedAttributes || Object.keys(t.propTypes || {}), o.observedAttributes = n, t.formAssociated && (o.formAssociated = !0), n.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom ? this._vdom.props[i] : this._props[i];
    }, set: function(s) {
      this._vdom ? this.attributeChangedCallback(i, null, s) : (this._props || (this._props = {}), this._props[i] = s);
      var c = typeof s;
      s != null && c !== "string" && c !== "boolean" && c !== "number" || this.setAttribute(i, s);
    } });
  }), customElements.define(e, o), o;
}
function Lo(t) {
  this.getChildContext = function() {
    return t.context;
  };
  var e = t.children, n = wr(t, ko);
  return dn(e, n);
}
function Mo(t) {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = U(Lo, ge({}, this._props, { context: e.detail.context }), Nr(this, this._vdomComponent, t)), (this.hasAttribute("hydrate") ? fn : at)(this._vdom, this._root);
}
function Or(t) {
  return t.replace(/-(\w)/g, function(e, n) {
    return n ? n.toUpperCase() : "";
  });
}
function Do(t, e, n) {
  if (this._vdom) {
    var r = {};
    r[t] = n = n ?? void 0, r[Or(t)] = n, this._vdom = dn(this._vdom, r), at(this._vdom, this._root);
  }
}
function Fo() {
  at(this._vdom = null, this._root);
}
function kn(t, e) {
  var n = this, r = t.useFragment, o = wr(t, Ro);
  return U(r ? z : "slot", ge({}, o, { ref: function(i) {
    i ? (n.ref = i, n._listener || (n._listener = function(s) {
      s.stopPropagation(), s.detail.context = e;
    }, i.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function Nr(t, e, n) {
  if (t.nodeType === 3) return t.data;
  if (t.nodeType !== 1) return null;
  var r = [], o = {}, i = 0, s = t.attributes, c = t.childNodes;
  for (i = s.length; i--; ) s[i].name !== "slot" && (o[s[i].name] = s[i].value, o[Or(s[i].name)] = s[i].value);
  for (i = c.length; i--; ) {
    var l = Nr(c[i], null, n), a = c[i].slot;
    a ? o[a] = U(kn, { name: a }, l) : r[i] = l;
  }
  var _ = !(!n || !n.shadow), m = e ? U(kn, { useFragment: !_ }, r) : r;
  return !_ && e && (t.innerHTML = ""), U(e || t.nodeName.toLowerCase(), o, m);
}
var Ho = 0;
function f(t, e, n, r, o, i) {
  e || (e = {});
  var s, c, l = e;
  if ("ref" in l) for (c in l = {}, e) c == "ref" ? s = e[c] : l[c] = e[c];
  var a = { type: t, props: l, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Ho, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof t == "function" && (s = t.defaultProps)) for (c in s) l[c] === void 0 && (l[c] = s[c]);
  return g.vnode && g.vnode(a), a;
}
const Rn = {
  SWITCH_CAMERA: "switch-camera",
  TOGGLE_MIRROR: "toggle-mirror"
};
var $t = /* @__PURE__ */ ((t) => (t.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", t.CONTROL = "face-auto-capture:control", t.DETECTION_CHANGED = "face-auto-capture:detection-changed", t.FACE_DETECTION = "face-auto-capture:face-detection", t.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", t.STATE_CHANGED = "face-auto-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", t))($t || {}), hn = /* @__PURE__ */ ((t) => (t.ANIMATION_END = "magnifeye-auto-capture:animation-end", t.CONTROL = "magnifeye-auto-capture:control", t.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", t))(hn || {});
const Uo = {
  LOADING: "loading",
  ERROR: "error",
  WAITING: "waiting",
  // TODO: this state may not be needed in the new architecture - consider removing on next major release version
  RUNNING: "running",
  COMPLETE: "complete",
  BLURRED: "blurred"
}, ze = {
  ...Uo,
  DONE: "done"
}, Pn = {
  EYE_NOT_PRESENT: "eye_not_present"
}, D = {
  CANDIDATE_SELECTION: "candidate_selection",
  FACE_TOO_CLOSE: "face_too_close",
  FACE_TOO_FAR: "face_too_far",
  FACE_CENTERING: "face_centering",
  FACE_NOT_PRESENT: "face_not_present",
  SHARPNESS_TOO_LOW: "sharpness_too_low",
  BRIGHTNESS_TOO_LOW: "brightness_too_low",
  BRIGHTNESS_TOO_HIGH: "brightness_too_high",
  DEVICE_PITCHED: "device_pitched",
  LEFT_EYE_NOT_PRESENT: `left_${Pn.EYE_NOT_PRESENT}`,
  RIGHT_EYE_NOT_PRESENT: `right_${Pn.EYE_NOT_PRESENT}`,
  MOUTH_NOT_PRESENT: "mouth_not_present",
  MOUTH_SCORE_TOO_HIGH: "mouth_score_too_high",
  MOUTH_SCORE_TOO_LOW: "mouth_score_too_low"
}, Yt = {
  ...D,
  FIT_YOUR_EYE: "fit_your_eye"
};
var Zt = /* @__PURE__ */ ((t) => (t.CLOSEUP = "CLOSEUP", t.DISTANT = "DISTANT", t.MIDDLE = "MIDDLE", t))(Zt || {});
const dt = ze;
var lt, x, ke, Ln, bt = 0, xr = [], T = g, Mn = T.__b, Dn = T.__r, Fn = T.diffed, Hn = T.__c, Un = T.unmount, Bn = T.__;
function Ot(t, e) {
  T.__h && T.__h(x, t, bt || e), bt = 0;
  var n = x.__H || (x.__H = { __: [], __h: [] });
  return t >= n.__.length && n.__.push({}), n.__[t];
}
function j(t) {
  return bt = 1, pn(kr, t);
}
function pn(t, e, n) {
  var r = Ot(lt++, 2);
  if (r.t = t, !r.__c && (r.__ = [n ? n(e) : kr(void 0, e), function(c) {
    var l = r.__N ? r.__N[0] : r.__[0], a = r.t(l, c);
    l !== a && (r.__N = [a, r.__[1]], r.__c.setState({}));
  }], r.__c = x, !x.__f)) {
    var o = function(c, l, a) {
      if (!r.__c.__H) return !0;
      var _ = !1, m = r.__c.props !== c;
      if (r.__c.__H.__.some(function(h) {
        if (h.__N) {
          _ = !0;
          var p = h.__[0];
          h.__ = h.__N, h.__N = void 0, p !== h.__[0] && (m = !0);
        }
      }), i) {
        var u = i.call(this, c, l, a);
        return _ ? u || m : u;
      }
      return !_ || m;
    };
    x.__f = !0;
    var i = x.shouldComponentUpdate, s = x.componentWillUpdate;
    x.componentWillUpdate = function(c, l, a) {
      if (this.__e) {
        var _ = i;
        i = void 0, o(c, l, a), i = _;
      }
      s && s.call(this, c, l, a);
    }, x.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function rt(t, e) {
  var n = Ot(lt++, 3);
  !T.__s && gn(n.__H, e) && (n.__ = t, n.u = e, x.__H.__h.push(n));
}
function Nt(t, e) {
  var n = Ot(lt++, 4);
  !T.__s && gn(n.__H, e) && (n.__ = t, n.u = e, x.__h.push(n));
}
function ve(t) {
  return bt = 5, te(function() {
    return { current: t };
  }, []);
}
function Ir(t, e, n) {
  bt = 6, Nt(function() {
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
function te(t, e) {
  var n = Ot(lt++, 7);
  return gn(n.__H, e) && (n.__ = t(), n.__H = e, n.__h = t), n.__;
}
function gt(t, e) {
  return bt = 8, te(function() {
    return t;
  }, e);
}
function mn(t) {
  var e = x.context[t.__c], n = Ot(lt++, 9);
  return n.c = t, e ? (n.__ == null && (n.__ = !0, e.sub(x)), e.props.value) : t.__;
}
function Tr(t, e) {
  T.useDebugValue && T.useDebugValue(e ? e(t) : t);
}
function Ar() {
  var t = Ot(lt++, 11);
  if (!t.__) {
    for (var e = x.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var n = e.__m || (e.__m = [0, 0]);
    t.__ = "P" + n[0] + "-" + n[1]++;
  }
  return t.__;
}
function Bo() {
  for (var t; t = xr.shift(); ) {
    var e = t.__H;
    if (t.__P && e) try {
      e.__h.some(ce), e.__h.some(Ge), e.__h = [];
    } catch (n) {
      e.__h = [], T.__e(n, t.__v);
    }
  }
}
T.__b = function(t) {
  x = null, Mn && Mn(t);
}, T.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Bn && Bn(t, e);
}, T.__r = function(t) {
  Dn && Dn(t), lt = 0;
  var e = (x = t.__c).__H;
  e && (ke === x ? (e.__h = [], x.__h = [], e.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (e.__h.some(ce), e.__h.some(Ge), e.__h = [], lt = 0)), ke = x;
}, T.diffed = function(t) {
  Fn && Fn(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (xr.push(e) !== 1 && Ln === T.requestAnimationFrame || ((Ln = T.requestAnimationFrame) || Wo)(Bo)), e.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), ke = x = null;
}, T.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.some(ce), n.__h = n.__h.filter(function(r) {
        return !r.__ || Ge(r);
      });
    } catch (r) {
      e.some(function(o) {
        o.__h && (o.__h = []);
      }), e = [], T.__e(r, n.__v);
    }
  }), Hn && Hn(t, e);
}, T.unmount = function(t) {
  Un && Un(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.some(function(r) {
    try {
      ce(r);
    } catch (o) {
      e = o;
    }
  }), n.__H = void 0, e && T.__e(e, n.__v));
};
var Wn = typeof requestAnimationFrame == "function";
function Wo(t) {
  var e, n = function() {
    clearTimeout(r), Wn && cancelAnimationFrame(e), setTimeout(t);
  }, r = setTimeout(n, 35);
  Wn && (e = requestAnimationFrame(n));
}
function ce(t) {
  var e = x, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), x = e;
}
function Ge(t) {
  var e = x;
  t.__c = t.__(), x = e;
}
function gn(t, e) {
  return !t || t.length !== e.length || e.some(function(n, r) {
    return n !== t[r];
  });
}
function kr(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function Rr(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function Ye(t, e) {
  for (var n in t) if (n !== "__source" && !(n in e)) return !0;
  for (var r in e) if (r !== "__source" && t[r] !== e[r]) return !0;
  return !1;
}
function Pr(t, e) {
  var n = e(), r = j({ t: { __: n, u: e } }), o = r[0].t, i = r[1];
  return Nt(function() {
    o.__ = n, o.u = e, Re(o) && i({ t: o });
  }, [t, n, e]), rt(function() {
    return Re(o) && i({ t: o }), t(function() {
      Re(o) && i({ t: o });
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
function Lr(t) {
  t();
}
function Mr(t) {
  return t;
}
function Dr() {
  return [!1, Lr];
}
var Fr = Nt;
function Ze(t, e) {
  this.props = t, this.context = e;
}
function jo(t, e) {
  function n(o) {
    var i = this.props.ref;
    return i != o.ref && i && (typeof i == "function" ? i(null) : i.current = null), e ? !e(this.props, o) || i != o.ref : Ye(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, U(t, o);
  }
  return r.displayName = "Memo(" + (t.displayName || t.name) + ")", r.__f = r.prototype.isReactComponent = !0, r.type = t, r;
}
(Ze.prototype = new q()).isPureReactComponent = !0, Ze.prototype.shouldComponentUpdate = function(t, e) {
  return Ye(this.props, t) || Ye(this.state, e);
};
var jn = g.__b;
g.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), jn && jn(t);
};
var zo = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.forward_ref") || 3911;
function Go(t) {
  function e(n) {
    var r = Rr({}, n);
    return delete r.ref, t(r, n.ref || null);
  }
  return e.$$typeof = zo, e.render = t, e.prototype.isReactComponent = e.__f = !0, e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", e;
}
var zn = function(t, e) {
  return t == null ? null : nt(nt(t).map(e));
}, Yo = { map: zn, forEach: zn, count: function(t) {
  return t ? nt(t).length : 0;
}, only: function(t) {
  var e = nt(t);
  if (e.length !== 1) throw "Children.only";
  return e[0];
}, toArray: nt }, Zo = g.__e;
g.__e = function(t, e, n, r) {
  if (t.then) {
    for (var o, i = e; i = i.__; ) if ((o = i.__c) && o.__c) return e.__e == null && (e.__e = n.__e, e.__k = n.__k || []), o.__c(t, e);
  }
  Zo(t, e, n, r);
};
var Gn = g.unmount;
function Hr(t, e, n) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), t.__c.__H = null), (t = Rr({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c.__e = !0, t.__c = null), t.__k = t.__k && t.__k.map(function(r) {
    return Hr(r, e, n);
  })), t;
}
function Ur(t, e, n) {
  return t && n && (t.__v = null, t.__k = t.__k && t.__k.map(function(r) {
    return Ur(r, e, n);
  }), t.__c && t.__c.__P === e && (t.__e && n.appendChild(t.__e), t.__c.__e = !0, t.__c.__P = n)), t;
}
function ae() {
  this.__u = 0, this.o = null, this.__b = null;
}
function Br(t) {
  var e = t.__ && t.__.__c;
  return e && e.__a && e.__a(t);
}
function Vo(t) {
  var e, n, r, o = null;
  function i(s) {
    if (e || (e = t()).then(function(c) {
      c && (o = c.default || c), r = !0;
    }, function(c) {
      n = c, r = !0;
    }), n) throw n;
    if (!r) throw e;
    return o ? U(o, s) : null;
  }
  return i.displayName = "Lazy", i.__f = !0, i;
}
function Mt() {
  this.i = null, this.l = null;
}
g.unmount = function(t) {
  var e = t.__c;
  e && (e.__z = !0), e && e.__R && e.__R(), e && 32 & t.__u && (t.type = null), Gn && Gn(t);
}, (ae.prototype = new q()).__c = function(t, e) {
  var n = e.__c, r = this;
  r.o == null && (r.o = []), r.o.push(n);
  var o = Br(r.__v), i = !1, s = function() {
    i || r.__z || (i = !0, n.__R = null, o ? o(l) : l());
  };
  n.__R = s;
  var c = n.__P;
  n.__P = null;
  var l = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var a = r.state.__a;
        r.__v.__k[0] = Ur(a, a.__c.__P, a.__c.__O);
      }
      var _;
      for (r.setState({ __a: r.__b = null }); _ = r.o.pop(); ) _.__P = c, _.forceUpdate();
    }
  };
  r.__u++ || 32 & e.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), t.then(s, s);
}, ae.prototype.componentWillUnmount = function() {
  this.o = [];
}, ae.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Hr(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = e.__a && U(z, null, t.fallback);
  return o && (o.__u &= -33), [U(z, null, e.__a ? null : t.children), o];
};
var Yn = function(t, e, n) {
  if (++n[1] === n[0] && t.l.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.l.size)) for (n = t.i; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    t.i = n = n[2];
  }
};
function qo(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function Xo(t) {
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
  at(U(qo, { context: e.context }, t.__v), e.v);
}
function Ko(t, e) {
  var n = U(Xo, { __v: t, h: e });
  return n.containerInfo = e, n;
}
(Mt.prototype = new q()).__a = function(t) {
  var e = this, n = Br(e.__v), r = e.l.get(t);
  return r[0]++, function(o) {
    var i = function() {
      e.props.revealOrder ? (r.push(o), Yn(e, t, r)) : o();
    };
    n ? n(i) : i();
  };
}, Mt.prototype.render = function(t) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var e = nt(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var n = e.length; n--; ) this.l.set(e[n], this.i = [1, 0, this.i]);
  return t.children;
}, Mt.prototype.componentDidUpdate = Mt.prototype.componentDidMount = function() {
  var t = this;
  this.l.forEach(function(e, n) {
    Yn(t, n, e);
  });
};
var Wr = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || 60103, Jo = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Qo = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, ti = /[A-Z0-9]/g, ei = typeof document < "u", ni = function(t) {
  return (typeof Symbol < "u" && typeof /* @__PURE__ */ Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
};
function ri(t, e, n) {
  return e.__k == null && (e.textContent = ""), at(t, e), typeof n == "function" && n(), t ? t.__c : null;
}
function oi(t, e, n) {
  return fn(t, e), typeof n == "function" && n(), t ? t.__c : null;
}
q.prototype.isReactComponent = !0, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(q.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var Zn = g.event;
g.event = function(t) {
  return Zn && (t = Zn(t)), t.persist = function() {
  }, t.isPropagationStopped = function() {
    return this.cancelBubble;
  }, t.isDefaultPrevented = function() {
    return this.defaultPrevented;
  }, t.nativeEvent = t;
};
var yn, ii = { configurable: !0, get: function() {
  return this.class;
} }, Vn = g.vnode;
g.vnode = function(t) {
  typeof t.type == "string" && (function(e) {
    var n = e.props, r = e.type, o = {}, i = r.indexOf("-") == -1;
    for (var s in n) {
      var c = n[s];
      if (!(s === "value" && "defaultValue" in n && c == null || ei && s === "children" && r === "noscript" || s === "class" || s === "className")) {
        var l = s.toLowerCase();
        s === "defaultValue" && "value" in n && n.value == null ? s = "value" : s === "download" && c === !0 ? c = "" : l === "translate" && c === "no" ? c = !1 : l[0] === "o" && l[1] === "n" ? l === "ondoubleclick" ? s = "ondblclick" : l !== "onchange" || r !== "input" && r !== "textarea" || ni(n.type) ? l === "onfocus" ? s = "onfocusin" : l === "onblur" ? s = "onfocusout" : Qo.test(s) && (s = l) : l = s = "oninput" : i && Jo.test(s) ? s = s.replace(ti, "-$&").toLowerCase() : c === null && (c = void 0), l === "oninput" && o[s = l] && (s = "oninputCapture"), o[s] = c;
      }
    }
    r == "select" && (o.multiple && Array.isArray(o.value) && (o.value = nt(n.children).forEach(function(a) {
      a.props.selected = o.value.indexOf(a.props.value) != -1;
    })), o.defaultValue != null && (o.value = nt(n.children).forEach(function(a) {
      a.props.selected = o.multiple ? o.defaultValue.indexOf(a.props.value) != -1 : o.defaultValue == a.props.value;
    }))), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", ii)) : n.className && (o.class = o.className = n.className), e.props = o;
  })(t), t.$$typeof = Wr, Vn && Vn(t);
};
var qn = g.__r;
g.__r = function(t) {
  qn && qn(t), yn = t.__c;
};
var Xn = g.diffed;
g.diffed = function(t) {
  Xn && Xn(t);
  var e = t.props, n = t.__e;
  n != null && t.type === "textarea" && "value" in e && e.value !== n.value && (n.value = e.value == null ? "" : e.value), yn = null;
};
var si = { ReactCurrentDispatcher: { current: { readContext: function(t) {
  return yn.__n[t.__c].props.value;
}, useCallback: gt, useContext: mn, useDebugValue: Tr, useDeferredValue: Mr, useEffect: rt, useId: Ar, useImperativeHandle: Ir, useInsertionEffect: Fr, useLayoutEffect: Nt, useMemo: te, useReducer: pn, useRef: ve, useState: j, useSyncExternalStore: Pr, useTransition: Dr } } };
function ci(t) {
  return U.bind(null, t);
}
function $e(t) {
  return !!t && t.$$typeof === Wr;
}
function ai(t) {
  return $e(t) && t.type === z;
}
function li(t) {
  return !!t && typeof t.displayName == "string" && t.displayName.indexOf("Memo(") == 0;
}
function ui(t) {
  return $e(t) ? dn.apply(null, arguments) : t;
}
function _i(t) {
  return !!t.__k && (at(null, t), !0);
}
function fi(t) {
  return t && (t.base || t.nodeType === 1 && t) || null;
}
var di = function(t, e) {
  return t(e);
}, hi = function(t, e) {
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
}, pi = $e, W = { useState: j, useId: Ar, useReducer: pn, useEffect: rt, useLayoutEffect: Nt, useInsertionEffect: Fr, useTransition: Dr, useDeferredValue: Mr, useSyncExternalStore: Pr, startTransition: Lr, useRef: ve, useImperativeHandle: Ir, useMemo: te, useCallback: gt, useContext: mn, useDebugValue: Tr, version: "18.3.1", Children: Yo, render: ri, hydrate: oi, unmountComponentAtNode: _i, createPortal: Ko, createElement: U, createContext: Sr, createFactory: ci, cloneElement: ui, createRef: Oo, Fragment: z, isValidElement: $e, isElement: pi, isFragment: ai, isMemo: li, findDOMNode: fi, Component: q, PureComponent: Ze, memo: jo, forwardRef: Go, flushSync: hi, unstable_batchedUpdates: di, StrictMode: z, Suspense: ae, SuspenseList: Mt, lazy: Vo, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: si }, N = "-ms-", jt = "-moz-", S = "-webkit-", jr = "comm", be = "rule", Cn = "decl", mi = "@import", gi = "@namespace", zr = "@keyframes", yi = "@layer", Gr = Math.abs, vn = String.fromCharCode, Ve = Object.assign;
function Ci(t, e) {
  return R(t, 0) ^ 45 ? (((e << 2 ^ R(t, 0)) << 2 ^ R(t, 1)) << 2 ^ R(t, 2)) << 2 ^ R(t, 3) : 0;
}
function Yr(t) {
  return t.trim();
}
function tt(t, e) {
  return (t = e.exec(t)) ? t[0] : t;
}
function v(t, e, n) {
  return t.replace(e, n);
}
function le(t, e, n) {
  return t.indexOf(e, n);
}
function R(t, e) {
  return t.charCodeAt(e) | 0;
}
function yt(t, e, n) {
  return t.slice(e, n);
}
function V(t) {
  return t.length;
}
function Zr(t) {
  return t.length;
}
function Dt(t, e) {
  return e.push(t), t;
}
function vi(t, e) {
  return t.map(e).join("");
}
function Kn(t, e) {
  return t.filter(function(n) {
    return !tt(n, e);
  });
}
var Ee = 1, Et = 1, Vr = 0, G = 0, A = 0, xt = "";
function Se(t, e, n, r, o, i, s, c) {
  return { value: t, root: e, parent: n, type: r, props: o, children: i, line: Ee, column: Et, length: s, return: "", siblings: c };
}
function it(t, e) {
  return Ve(Se("", null, null, "", null, null, 0, t.siblings), t, { length: -t.length }, e);
}
function Ct(t) {
  for (; t.root; )
    t = it(t.root, { children: [t] });
  Dt(t, t.siblings);
}
function $i() {
  return A;
}
function bi() {
  return A = G > 0 ? R(xt, --G) : 0, Et--, A === 10 && (Et = 1, Ee--), A;
}
function X() {
  return A = G < Vr ? R(xt, G++) : 0, Et++, A === 10 && (Et = 1, Ee++), A;
}
function ct() {
  return R(xt, G);
}
function ue() {
  return G;
}
function we(t, e) {
  return yt(xt, t, e);
}
function Vt(t) {
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
function Ei(t) {
  return Ee = Et = 1, Vr = V(xt = t), G = 0, [];
}
function Si(t) {
  return xt = "", t;
}
function Pe(t) {
  return Yr(we(G - 1, qe(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function wi(t) {
  for (; (A = ct()) && A < 33; )
    X();
  return Vt(t) > 2 || Vt(A) > 3 ? "" : " ";
}
function Oi(t, e) {
  for (; --e && X() && !(A < 48 || A > 102 || A > 57 && A < 65 || A > 70 && A < 97); )
    ;
  return we(t, ue() + (e < 6 && ct() == 32 && X() == 32));
}
function qe(t) {
  for (; X(); )
    switch (A) {
      // ] ) " '
      case t:
        return G;
      // " '
      case 34:
      case 39:
        t !== 34 && t !== 39 && qe(A);
        break;
      // (
      case 40:
        t === 41 && qe(t);
        break;
      // \
      case 92:
        X();
        break;
    }
  return G;
}
function Ni(t, e) {
  for (; X() && t + A !== 57; )
    if (t + A === 84 && ct() === 47)
      break;
  return "/*" + we(e, G - 1) + "*" + vn(t === 47 ? t : X());
}
function xi(t) {
  for (; !Vt(ct()); )
    X();
  return we(t, G);
}
function Ii(t) {
  return Si(_e("", null, null, null, [""], t = Ei(t), 0, [0], t));
}
function _e(t, e, n, r, o, i, s, c, l) {
  for (var a = 0, _ = 0, m = s, u = 0, h = 0, p = 0, $ = 1, E = 1, C = 1, d = 0, O = "", P = o, w = i, I = r, y = O; E; )
    switch (p = d, d = X()) {
      // (
      case 40:
        if (p != 108 && R(y, m - 1) == 58) {
          le(y += v(Pe(d), "&", "&\f"), "&\f", Gr(a ? c[a - 1] : 0)) != -1 && (C = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        y += Pe(d);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        y += wi(p);
        break;
      // \
      case 92:
        y += Oi(ue() - 1, 7);
        continue;
      // /
      case 47:
        switch (ct()) {
          case 42:
          case 47:
            Dt(Ti(Ni(X(), ue()), e, n, l), l), (Vt(p || 1) == 5 || Vt(ct() || 1) == 5) && V(y) && yt(y, -1, void 0) !== " " && (y += " ");
            break;
          default:
            y += "/";
        }
        break;
      // {
      case 123 * $:
        c[a++] = V(y) * C;
      // } ; \0
      case 125 * $:
      case 59:
      case 0:
        switch (d) {
          // \0 }
          case 0:
          case 125:
            E = 0;
          // ;
          case 59 + _:
            C == -1 && (y = v(y, /\f/g, "")), h > 0 && (V(y) - m || $ === 0 && p === 47) && Dt(h > 32 ? Qn(y + ";", r, n, m - 1, l) : Qn(v(y, " ", "") + ";", r, n, m - 2, l), l);
            break;
          // @ ;
          case 59:
            y += ";";
          // { rule/at-rule
          default:
            if (Dt(I = Jn(y, e, n, a, _, o, c, O, P = [], w = [], m, i), i), d === 123)
              if (_ === 0)
                _e(y, e, I, I, P, i, m, c, w);
              else {
                switch (u) {
                  // c(ontainer)
                  case 99:
                    if (R(y, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (R(y, 2) === 97) break;
                  default:
                    _ = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                _ ? _e(t, I, I, r && Dt(Jn(t, I, I, 0, 0, o, c, O, o, P = [], m, w), w), o, w, m, c, r ? P : w) : _e(y, I, I, I, [""], w, 0, c, w);
              }
        }
        a = _ = h = 0, $ = C = 1, O = y = "", m = s;
        break;
      // :
      case 58:
        m = 1 + V(y), h = p;
      default:
        if ($ < 1) {
          if (d == 123)
            --$;
          else if (d == 125 && $++ == 0 && bi() == 125)
            continue;
        }
        switch (y += vn(d), d * $) {
          // &
          case 38:
            C = _ > 0 ? 1 : (y += "\f", -1);
            break;
          // ,
          case 44:
            c[a++] = (V(y) - 1) * C, C = 1;
            break;
          // @
          case 64:
            ct() === 45 && (y += Pe(X())), u = ct(), _ = m = V(O = y += xi(ue())), d++;
            break;
          // -
          case 45:
            p === 45 && V(y) == 2 && ($ = 0);
        }
    }
  return i;
}
function Jn(t, e, n, r, o, i, s, c, l, a, _, m) {
  for (var u = o - 1, h = o === 0 ? i : [""], p = Zr(h), $ = 0, E = 0, C = 0; $ < r; ++$)
    for (var d = 0, O = yt(t, u + 1, u = Gr(E = s[$])), P = t; d < p; ++d)
      (P = Yr(E > 0 ? h[d] + " " + O : v(O, /&\f/g, h[d]))) && (l[C++] = P);
  return Se(t, e, n, o === 0 ? be : c, l, a, _, m);
}
function Ti(t, e, n, r) {
  return Se(t, e, n, jr, vn($i()), yt(t, 2, -2), 0, r);
}
function Qn(t, e, n, r, o) {
  return Se(t, e, n, Cn, yt(t, 0, r), yt(t, r + 1, -1), r, o);
}
function qr(t, e, n) {
  switch (Ci(t, e)) {
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
      return jt + t + t;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return S + t + jt + t + N + t + t;
    // writing-mode
    case 5936:
      switch (R(t, e + 11)) {
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
      return S + t + N + "flex-item-" + v(t, /flex-|-self/g, "") + (tt(t, /flex-|baseline/) ? "" : N + "grid-row-" + v(t, /flex-|-self/g, "")) + t;
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
      if (!tt(t, /flex-|baseline/)) return N + "grid-column-align" + yt(t, e) + t;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return N + v(t, "template-", "") + t;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return e = o, tt(r.props, /grid-\w+-end/);
      }) ? ~le(t + (n = n[e].value), "span", 0) ? t : N + v(t, "-start", "") + t + N + "grid-row-span:" + (~le(n, "span", 0) ? tt(n, /\d+/) : +tt(n, /\d+/) - +tt(t, /\d+/)) + ";" : N + v(t, "-start", "") + t;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return tt(r.props, /grid-\w+-start/);
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
      if (V(t) - 1 - e > 6)
        switch (R(t, e + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (R(t, e + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return v(t, /(.+:)(.+)-([^]+)/, "$1" + S + "$2-$3$1" + jt + (R(t, e + 3) == 108 ? "$3" : "$2-$3")) + t;
          // (s)tretch
          case 115:
            return ~le(t, "stretch", 0) ? qr(v(t, "stretch", "fill-available"), e, n) + t : t;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return v(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, c, l, a) {
        return N + o + ":" + i + a + (s ? N + o + "-span:" + (c ? l : +l - +i) + a : "") + t;
      });
    // position: sticky
    case 4949:
      if (R(t, e + 6) === 121)
        return v(t, ":", ":" + S) + t;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (R(t, R(t, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return v(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + S + (R(t, 14) === 45 ? "inline-" : "") + "box$3$1" + S + "$2$3$1" + N + "$2box$3") + t;
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
function ye(t, e) {
  for (var n = "", r = 0; r < t.length; r++)
    n += e(t[r], r, t, e) || "";
  return n;
}
function Ai(t, e, n, r) {
  switch (t.type) {
    case yi:
      if (t.children.length) break;
    case mi:
    case gi:
    case Cn:
      return t.return = t.return || t.value;
    case jr:
      return "";
    case zr:
      return t.return = t.value + "{" + ye(t.children, r) + "}";
    case be:
      if (!V(t.value = t.props.join(","))) return "";
  }
  return V(n = ye(t.children, r)) ? t.return = t.value + "{" + n + "}" : "";
}
function ki(t) {
  var e = Zr(t);
  return function(n, r, o, i) {
    for (var s = "", c = 0; c < e; c++)
      s += t[c](n, r, o, i) || "";
    return s;
  };
}
function Ri(t) {
  return function(e) {
    e.root || (e = e.return) && t(e);
  };
}
function Pi(t, e, n, r) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Cn:
        t.return = qr(t.value, t.length, n);
        return;
      case zr:
        return ye([it(t, { value: v(t.value, "@", "@" + S) })], r);
      case be:
        if (t.length)
          return vi(n = t.props, function(o) {
            switch (tt(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Ct(it(t, { props: [v(o, /:(read-\w+)/, ":" + jt + "$1")] })), Ct(it(t, { props: [o] })), Ve(t, { props: Kn(n, r) });
                break;
              // :placeholder
              case "::placeholder":
                Ct(it(t, { props: [v(o, /:(plac\w+)/, ":" + S + "input-$1")] })), Ct(it(t, { props: [v(o, /:(plac\w+)/, ":" + jt + "$1")] })), Ct(it(t, { props: [v(o, /:(plac\w+)/, N + "input-$1")] })), Ct(it(t, { props: [o] })), Ve(t, { props: Kn(n, r) });
                break;
            }
            return "";
          });
    }
}
var vt = {};
function Q(t, ...e) {
  return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${t} for more information.${e.length > 0 ? ` Args: ${e.join(", ")}` : ""}`);
}
var Le, Me;
const St = typeof process < "u" && vt !== void 0 && (vt.REACT_APP_SC_ATTR || vt.SC_ATTR) || "data-styled", Xr = "active", Kr = "data-styled-version", Oe = "6.6.0", $n = `/*!sc*/
`, zt = typeof window < "u" && typeof document < "u";
if (!W.createContext) throw Q(19);
function tr(t) {
  if (typeof process < "u" && vt !== void 0) {
    const e = vt[t];
    if (e !== void 0 && e !== "") return e !== "false";
  }
}
const Li = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : (Me = (Le = tr("REACT_APP_SC_DISABLE_SPEEDY")) !== null && Le !== void 0 ? Le : tr("SC_DISABLE_SPEEDY")) !== null && Me !== void 0 ? Me : typeof process < "u" && vt !== void 0 && !1), Jr = "sc-keyframes-";
let fe = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map(), de = 1;
const Ft = (t) => {
  if (fe.has(t)) return fe.get(t);
  for (; Ce.has(de); ) de++;
  const e = de++;
  return fe.set(t, e), Ce.set(e, t), e;
}, Mi = (t) => Ce.get(t), Di = (t, e) => {
  de = e + 1, fe.set(t, e), Ce.set(e, t);
}, bn = Object.freeze([]), wt = Object.freeze({});
function Fi(t, e, n = wt) {
  return t.theme !== n.theme && t.theme || e || n.theme;
}
const Hi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ui = /(^-|-$)/g;
function Qr(t) {
  return t.replace(Hi, "-").replace(Ui, "");
}
const Bi = /(a)(d)/gi, er = (t) => String.fromCharCode(t + (t > 25 ? 39 : 97));
function En(t) {
  let e, n = "";
  for (e = Math.abs(t); e > 52; e = e / 52 | 0) n = er(e % 52) + n;
  return (er(e % 52) + n).replace(Bi, "$1-$2");
}
const Xe = 5381, ht = (t, e) => {
  let n = e.length;
  for (; n; ) t = 33 * t ^ e.charCodeAt(--n);
  return t;
}, to = (t) => ht(Xe, t);
function eo(t) {
  return En(to(t) >>> 0);
}
function Wi(t) {
  return t.displayName || t.name || "Component";
}
function Ke(t) {
  return typeof t == "string" && !0;
}
function ji(t) {
  return Ke(t) ? `styled.${t}` : `Styled(${Wi(t)})`;
}
const no = /* @__PURE__ */ Symbol.for("react.memo"), zi = /* @__PURE__ */ Symbol.for("react.forward_ref"), Gi = { contextType: !0, defaultProps: !0, displayName: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, propTypes: !0, type: !0 }, Yi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, ro = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Zi = { [zi]: { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, [no]: ro };
function nr(t) {
  return ("type" in (e = t) && e.type.$$typeof) === no ? ro : "$$typeof" in t ? Zi[t.$$typeof] : Gi;
  var e;
}
const Vi = Object.defineProperty, qi = Object.getOwnPropertyNames, Xi = Object.getOwnPropertySymbols, Ki = Object.getOwnPropertyDescriptor, Ji = Object.getPrototypeOf, Qi = Object.prototype;
function oo(t, e, n) {
  if (typeof e != "string") {
    const r = Ji(e);
    r && r !== Qi && oo(t, r, n);
    const o = qi(e).concat(Xi(e)), i = nr(t), s = nr(e);
    for (let c = 0; c < o.length; ++c) {
      const l = o[c];
      if (!(l in Yi || n && n[l] || s && l in s || i && l in i)) {
        const a = Ki(e, l);
        try {
          Vi(t, l, a);
        } catch {
        }
      }
    }
  }
  return t;
}
function ee(t) {
  return typeof t == "function";
}
const ts = /* @__PURE__ */ Symbol.for("react.forward_ref");
function io(t) {
  return t != null && (typeof t == "object" || typeof t == "function") && t.$$typeof === ts && "styledComponentId" in t;
}
function Ht(t, e) {
  return t && e ? t + " " + e : t || e || "";
}
function Je(t, e) {
  return t.join("");
}
function qt(t) {
  return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
}
function Qe(t, e, n = !1) {
  if (!n && !qt(t) && !Array.isArray(t)) return e;
  if (Array.isArray(e)) for (let r = 0; r < e.length; r++) t[r] = Qe(t[r], e[r]);
  else if (qt(e)) for (const r in e) t[r] = Qe(t[r], e[r]);
  return t;
}
function Sn(t, e) {
  Object.defineProperty(t, "toString", { value: e });
}
const es = class {
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
      for (; t >= s; ) if (s <<= 1, s < 0) throw Q(16, `${t}`);
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
    for (let i = r; i < o; i++) e += this.tag.getRule(i) + $n;
    return e;
  }
}, ns = `style[${St}][${Kr}="${Oe}"]`, rs = new RegExp(`^${St}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`), rr = (t) => typeof ShadowRoot < "u" && t instanceof ShadowRoot || "host" in t && t.nodeType === 11, tn = (t) => {
  if (!t) return document;
  if (rr(t)) return t;
  if ("getRootNode" in t) {
    const e = t.getRootNode();
    if (rr(e)) return e;
  }
  return document;
}, os = (t, e, n) => {
  const r = n.split(",");
  let o;
  for (let i = 0, s = r.length; i < s; i++) (o = r[i]) && t.registerName(e, o);
}, is = (t, e) => {
  var n;
  const r = ((n = e.textContent) !== null && n !== void 0 ? n : "").split($n), o = [];
  for (let i = 0, s = r.length; i < s; i++) {
    const c = r[i].trim();
    if (!c) continue;
    const l = c.match(rs);
    if (l) {
      const a = 0 | parseInt(l[1], 10), _ = l[2];
      a !== 0 && (Di(_, a), os(t, _, l[3]), t.getTag().insertRules(a, o)), o.length = 0;
    } else o.push(c);
  }
}, De = (t) => {
  const n = tn(t.options.target).querySelectorAll(ns);
  for (let r = 0, o = n.length; r < o; r++) {
    const i = n[r];
    i && i.getAttribute(St) !== Xr && (is(t, i), i.parentNode && i.parentNode.removeChild(i));
  }
};
let Pt = !1;
function ss() {
  if (Pt !== !1) return Pt;
  if (typeof document < "u") {
    const t = document.head.querySelector('meta[property="csp-nonce"]');
    if (t) return Pt = t.nonce || t.getAttribute("content") || void 0;
    const e = document.head.querySelector('meta[name="sc-nonce"]');
    if (e) return Pt = e.getAttribute("content") || void 0;
  }
  return Pt = typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}
const so = (t, e) => {
  if (typeof document > "u") throw Q(20);
  const n = document.head, r = t || n, o = document.createElement("style"), i = ((l) => {
    const a = Array.from(l.querySelectorAll(`style[${St}]`));
    return a[a.length - 1];
  })(r), s = i !== void 0 ? i.nextSibling : null;
  o.setAttribute(St, Xr), o.setAttribute(Kr, Oe);
  const c = e || ss();
  return c && o.setAttribute("nonce", c), r.insertBefore(o, s), o;
}, cs = class {
  constructor(t, e) {
    this.element = so(t, e), this.element.appendChild(document.createTextNode("")), this.sheet = ((n) => {
      var r;
      if (n.sheet) return n.sheet;
      const o = (r = n.getRootNode().styleSheets) !== null && r !== void 0 ? r : document.styleSheets;
      for (let i = 0, s = o.length; i < s; i++) {
        const c = o[i];
        if (c.ownerNode === n) return c;
      }
      throw Q(17);
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
}, as = class {
  constructor(t, e) {
    this.element = so(t, e), this.nodes = this.element.childNodes, this.length = 0;
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
let or = zt;
const ls = { isServer: !zt, useCSSOMInjection: !Li };
class Ne {
  static registerId(e) {
    return Ft(e);
  }
  constructor(e = wt, n = {}, r) {
    this.options = Object.assign(Object.assign({}, ls), e), this.gs = n, this.keyframeIds = /* @__PURE__ */ new Set(), this.names = new Map(r), this.server = !!e.isServer, !this.server && zt && or && (or = !1, De(this)), Sn(this, () => ((o) => {
      const i = o.getTag(), { length: s } = i;
      let c = "";
      for (let l = 0; l < s; l++) {
        const a = Mi(l);
        if (a === void 0) continue;
        const _ = o.names.get(a);
        if (_ === void 0 || !_.size) continue;
        const m = i.getGroup(l);
        if (m.length === 0) continue;
        const u = St + ".g" + l + '[id="' + a + '"]';
        let h = "";
        for (const p of _) p.length > 0 && (h += p + ",");
        c += m + u + '{content:"' + h + '"}' + $n;
      }
      return c;
    })(this));
  }
  rehydrate() {
    !this.server && zt && De(this);
  }
  reconstructWithOptions(e, n = !0) {
    const r = new Ne(Object.assign(Object.assign({}, this.options), e), this.gs, n && this.names || void 0);
    return r.keyframeIds = new Set(this.keyframeIds), !this.server && zt && e.target !== this.options.target && tn(this.options.target) !== tn(e.target) && De(r), r;
  }
  allocateGSInstance(e) {
    return this.gs[e] = (this.gs[e] || 0) + 1;
  }
  getTag() {
    return this.tag || (this.tag = (e = (({ useCSSOMInjection: n, target: r, nonce: o }) => n ? new cs(r, o) : new as(r, o))(this.options), new es(e)));
    var e;
  }
  hasNameForId(e, n) {
    var r, o;
    return (o = (r = this.names.get(e)) === null || r === void 0 ? void 0 : r.has(n)) !== null && o !== void 0 && o;
  }
  registerName(e, n) {
    Ft(e), e.startsWith(Jr) && this.keyframeIds.add(e);
    const r = this.names.get(e);
    r ? r.add(n) : this.names.set(e, /* @__PURE__ */ new Set([n]));
  }
  insertRules(e, n, r) {
    this.registerName(e, n), this.getTag().insertRules(Ft(e), r);
  }
  clearNames(e) {
    this.names.has(e) && this.names.get(e).clear();
  }
  clearRules(e) {
    this.getTag().clearGroup(Ft(e)), this.clearNames(e);
  }
  clearTag() {
    this.tag = void 0;
  }
}
const co = /* @__PURE__ */ new WeakSet(), us = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexShrink: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
function _s(t, e) {
  return e == null || typeof e == "boolean" || e === "" ? "" : typeof e != "number" || e === 0 || t in us || t.startsWith("--") ? String(e).trim() : e + "px";
}
const ft = 47;
function ir(t) {
  if (t.charCodeAt(0) === 45 && t.charCodeAt(1) === 45) return t;
  let e = "";
  for (let n = 0; n < t.length; n++) {
    const r = t.charCodeAt(n);
    e += r >= 65 && r <= 90 ? "-" + String.fromCharCode(r + 32) : t[n];
  }
  return e.startsWith("ms-") ? "-" + e : e;
}
const ao = /* @__PURE__ */ Symbol.for("sc-keyframes");
function fs(t) {
  return typeof t == "object" && t !== null && ao in t;
}
function lo(t) {
  return ee(t) && !(t.prototype && t.prototype.isReactComponent);
}
const uo = (t) => t == null || t === !1 || t === "", ds = /* @__PURE__ */ Symbol.for("react.client.reference");
function sr(t) {
  return t.$$typeof === ds;
}
function _o(t, e) {
  for (const n in t) {
    const r = t[n];
    t.hasOwnProperty(n) && !uo(r) && (Array.isArray(r) && co.has(r) || ee(r) ? e.push(ir(n) + ":", r, ";") : qt(r) ? (e.push(n + " {"), _o(r, e), e.push("}")) : e.push(ir(n) + ": " + _s(n, r) + ";"));
  }
}
function pt(t, e, n, r, o = []) {
  if (uo(t)) return o;
  const i = typeof t;
  if (i === "string") return o.push(t), o;
  if (i === "function") {
    if (sr(t)) return o;
    if (lo(t) && e) {
      const s = t(e);
      return pt(s, e, n, r, o);
    }
    return o.push(t), o;
  }
  if (Array.isArray(t)) {
    for (let s = 0; s < t.length; s++) pt(t[s], e, n, r, o);
    return o;
  }
  return io(t) ? (o.push(`.${t.styledComponentId}`), o) : fs(t) ? (n ? (t.inject(n, r), o.push(t.getName(r))) : o.push(t), o) : sr(t) ? o : qt(t) ? t.toString !== Object.prototype.toString ? (o.push(t.toString()), o) : (_o(t, o), o) : (o.push(t.toString()), o);
}
const hs = to(Oe);
class ps {
  constructor(e, n, r) {
    this.rules = e, this.componentId = n, this.baseHash = ht(hs, n), this.baseStyle = r, Ne.registerId(n);
  }
  generateAndInjectStyles(e, n, r) {
    let o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, n, r) : "";
    {
      let i = "";
      for (let s = 0; s < this.rules.length; s++) {
        const c = this.rules[s];
        if (typeof c == "string") i += c;
        else if (c) if (lo(c)) {
          const l = c(e);
          typeof l == "string" ? i += l : l != null && l !== !1 && (i += Je(pt(l, e, n, r)));
        } else i += Je(pt(c, e, n, r));
      }
      if (i) {
        this.dynamicNameCache || (this.dynamicNameCache = /* @__PURE__ */ new Map());
        const s = r.hash ? r.hash + i : i;
        let c = this.dynamicNameCache.get(s);
        if (!c) {
          if (c = En(ht(ht(this.baseHash, r.hash), i) >>> 0), this.dynamicNameCache.size >= 200) {
            const l = this.dynamicNameCache.keys().next().value;
            l !== void 0 && this.dynamicNameCache.delete(l);
          }
          this.dynamicNameCache.set(s, c);
        }
        if (!n.hasNameForId(this.componentId, c)) {
          const l = r(i, "." + c, void 0, this.componentId);
          n.insertRules(this.componentId, c, l);
        }
        o = Ht(o, c);
      }
    }
    return o;
  }
}
const ms = /&/g;
function fo(t, e) {
  let n = 0;
  for (; --e >= 0 && t.charCodeAt(e) === 92; ) n++;
  return !(1 & ~n);
}
function Fe(t) {
  const e = t.length;
  let n = "", r = 0, o = 0, i = 0, s = !1, c = !1;
  for (let l = 0; l < e; l++) {
    const a = t.charCodeAt(l);
    if (i !== 0 || s || a !== ft || t.charCodeAt(l + 1) !== 42) if (s) a === 42 && t.charCodeAt(l + 1) === ft && (s = !1, l++);
    else if (a !== 34 && a !== 39 || fo(t, l)) {
      if (i === 0) if (a === 123) o++;
      else if (a === 125) {
        if (o--, o < 0) {
          c = !0;
          let _ = l + 1;
          for (; _ < e; ) {
            const m = t.charCodeAt(_);
            if (m === 59 || m === 10) break;
            _++;
          }
          _ < e && t.charCodeAt(_) === 59 && _++, o = 0, l = _ - 1, r = _;
          continue;
        }
        o === 0 && (n += t.substring(r, l + 1), r = l + 1);
      } else a === 59 && o === 0 && (n += t.substring(r, l + 1), r = l + 1);
    } else i === 0 ? i = a : i === a && (i = 0);
    else s = !0, l++;
  }
  return c || o !== 0 || i !== 0 ? (r < e && o === 0 && i === 0 && (n += t.substring(r)), n) : t;
}
function ho(t, e) {
  const n = e + " ", r = "," + n;
  for (let o = 0; o < t.length; o++) {
    const i = t[o];
    if (i.type === "rule") {
      i.value = (n + i.value).replaceAll(",", r);
      const s = i.props, c = [];
      for (let l = 0; l < s.length; l++) c[l] = n + s[l];
      i.props = c;
    }
    Array.isArray(i.children) && i.type !== "@keyframes" && ho(i.children, e);
  }
  return t;
}
function po({ options: t = wt, plugins: e = bn } = wt) {
  let n, r, o;
  const i = (u, h, p) => p.startsWith(r) && p.endsWith(r) && p.replaceAll(r, "").length > 0 ? `.${n}` : u, s = e.slice();
  s.push((u) => {
    u.type === be && u.value.includes("&") && (o || (o = new RegExp(`\\${r}\\b`, "g")), u.props[0] = u.props[0].replace(ms, r).replace(o, i));
  }), t.prefix && s.push(Pi), s.push(Ai);
  let c = [];
  const l = ki(s.concat(Ri((u) => c.push(u)))), a = (u, h = "", p = "", $ = "&") => {
    n = $, r = h, o = void 0;
    const E = (function(d) {
      const O = d.indexOf("//") !== -1, P = d.indexOf("}") !== -1;
      if (!O && !P) return d;
      if (!O) return Fe(d);
      const w = d.length;
      let I = "", y = 0, b = 0, Y = 0, L = 0, H = 0, Tt = !1;
      for (; b < w; ) {
        const B = d.charCodeAt(b);
        if (B !== 34 && B !== 39 || fo(d, b)) if (Y === 0) if (B === ft && b + 1 < w && d.charCodeAt(b + 1) === 42) {
          for (b += 2; b + 1 < w && (d.charCodeAt(b) !== 42 || d.charCodeAt(b + 1) !== ft); ) b++;
          b += 2;
        } else if (B !== 40) if (B !== 41) if (L > 0) b++;
        else if (B === 42 && b + 1 < w && d.charCodeAt(b + 1) === ft) I += d.substring(y, b), b += 2, y = b, Tt = !0;
        else if (B === ft && b + 1 < w && d.charCodeAt(b + 1) === ft) {
          for (I += d.substring(y, b); b < w && d.charCodeAt(b) !== 10; ) b++;
          y = b, Tt = !0;
        } else B === 123 ? H++ : B === 125 && H--, b++;
        else L > 0 && L--, b++;
        else L++, b++;
        else b++;
        else Y === 0 ? Y = B : Y === B && (Y = 0), b++;
      }
      return Tt ? (y < w && (I += d.substring(y)), H === 0 ? I : Fe(I)) : H === 0 ? d : Fe(d);
    })(u);
    let C = Ii(p || h ? p + " " + h + " { " + E + " }" : E);
    return t.namespace && (C = ho(C, t.namespace)), c = [], ye(C, l), c;
  }, _ = t;
  let m = Xe;
  for (let u = 0; u < e.length; u++) e[u].name || Q(15), m = ht(m, e[u].name);
  return _?.namespace && (m = ht(m, _.namespace)), _?.prefix && (m = ht(m, "p")), a.hash = m !== Xe ? m.toString() : "", a;
}
const gs = new Ne(), en = po(), wn = W.createContext({ shouldForwardProp: void 0, styleSheet: gs, stylis: en, stylisPlugins: void 0 });
wn.Consumer;
function mo() {
  return W.useContext(wn);
}
function ys(t) {
  var e;
  const n = mo(), { styleSheet: r } = n, o = W.useMemo(() => {
    let a = r;
    return t.sheet ? a = t.sheet : t.target ? a = a.reconstructWithOptions(t.nonce !== void 0 ? { target: t.target, nonce: t.nonce } : { target: t.target }, !1) : t.nonce !== void 0 && (a = a.reconstructWithOptions({ nonce: t.nonce })), t.disableCSSOMInjection && (a = a.reconstructWithOptions({ useCSSOMInjection: !1 })), a;
  }, [t.disableCSSOMInjection, t.nonce, t.sheet, t.target, r]), i = W.useMemo(() => {
    var a;
    return t.stylisPlugins === void 0 && t.namespace === void 0 && t.enableVendorPrefixes === void 0 ? n.stylis : po({ options: { namespace: t.namespace, prefix: t.enableVendorPrefixes }, plugins: (a = t.stylisPlugins) !== null && a !== void 0 ? a : n.stylisPlugins });
  }, [t.enableVendorPrefixes, t.namespace, t.stylisPlugins, n.stylis, n.stylisPlugins]), s = "shouldForwardProp" in t ? t.shouldForwardProp : n.shouldForwardProp, c = (e = t.stylisPlugins) !== null && e !== void 0 ? e : n.stylisPlugins, l = W.useMemo(() => ({ shouldForwardProp: s, styleSheet: o, stylis: i, stylisPlugins: c }), [s, o, i, c]);
  return W.createElement(wn.Provider, { value: l }, t.children);
}
const Xt = W.createContext(void 0);
Xt.Consumer;
function go() {
  const t = W.useContext(Xt);
  if (!t) throw Q(18);
  return t;
}
function Cs(t) {
  const e = W.useContext(Xt), n = W.useMemo(() => (function(r, o) {
    if (!r) throw Q(14);
    if (ee(r))
      return r(o);
    if (Array.isArray(r) || typeof r != "object") throw Q(8);
    return o ? Object.assign(Object.assign({}, o), r) : r;
  })(t.theme, e), [t.theme, e]);
  return t.children ? W.createElement(Xt.Provider, { value: n }, t.children) : null;
}
const He = {};
function vs(t, e) {
  const n = typeof t != "string" ? "sc" : Qr(t);
  He[n] = (He[n] || 0) + 1;
  const r = n + "-" + eo(Oe + n + He[n]);
  return e ? e + "-" + r : r;
}
function $s(t, e, n) {
  const r = io(t), o = t, i = !Ke(t), { attrs: s = bn, componentId: c = vs(e.displayName, e.parentComponentId), displayName: l = ji(t) } = e, a = e.displayName && e.componentId ? Qr(e.displayName) + "-" + e.componentId : e.componentId || c, _ = r && o.attrs ? o.attrs.concat(s).filter(Boolean) : s;
  let { shouldForwardProp: m } = e;
  if (r && o.shouldForwardProp) {
    const $ = o.shouldForwardProp;
    if (e.shouldForwardProp) {
      const E = e.shouldForwardProp;
      m = (C, d) => $(C, d) && E(C, d);
    } else m = $;
  }
  const u = new ps(n, a, r ? o.componentStyle : void 0);
  function h($, E) {
    return (function(C, d, O) {
      const { attrs: P, componentStyle: w, defaultProps: I, foldedComponentIds: y, styledComponentId: b, target: Y } = C, L = W.useContext(Xt), H = mo(), Tt = C.shouldForwardProp || H.shouldForwardProp, B = Fi(d, L, I) || wt, [At, So] = (function(K, _t, Te) {
        const k = Object.assign(Object.assign({}, _t), { className: void 0, theme: Te });
        let kt = null;
        const oe = K.length > 1;
        for (let ot = 0; ot < K.length; ot++) {
          const M = K[ot], Rt = ee(M) ? M(oe ? Object.assign({}, k) : k) : M;
          for (const Z in Rt) Z === "className" ? k.className = Ht(k.className, Rt[Z]) : Z === "style" ? k.style = Object.assign(Object.assign({}, k.style), Rt[Z]) : Rt[Z] === void 0 ? Z in k && (k[Z] !== void 0 && (kt || (kt = [])).push(Z), k[Z] = void 0) : k[Z] = Rt[Z];
        }
        return "className" in _t && typeof _t.className == "string" && (k.className = Ht(k.className, _t.className)), [k, kt];
      })(P, d, B), Nn = w.generateAndInjectStyles(At, H.styleSheet, H.stylis), re = At.as || Y, xn = Ke(re), xe = (function(K, _t, Te, k, kt, oe) {
        const ot = {};
        for (const M in K) M[0] === "$" || M === "as" || M === "theme" && K.theme === Te || (M === "forwardedAs" ? K.forwardedAs !== void 0 && (ot.as = K.forwardedAs) : K[M] === void 0 ? M === "className" || kt || oe !== null && oe.indexOf(M) !== -1 || k && !k(M, _t) || (ot[M] = void 0) : k && !k(M, _t) || (ot[M] = K[M]));
        return ot;
      })(At, re, B, Tt, xn, So);
      let Ie = Ht(y, b);
      return Nn && (Ie += " " + Nn), At.className && (Ie += " " + At.className), xe[xn && re.includes("-") ? "class" : "className"] = Ie, O && (xe.ref = O), U(re, xe);
    })(p, $, E);
  }
  h.displayName = l;
  let p = W.forwardRef(h);
  return p.attrs = _, p.componentStyle = u, p.displayName = l, p.shouldForwardProp = m, p.foldedComponentIds = r ? Ht(o.foldedComponentIds, o.styledComponentId) : "", p.styledComponentId = a, p.target = r ? o.target : t, Object.defineProperty(p, "defaultProps", { get() {
    return this._foldedDefaultProps;
  }, set($) {
    this._foldedDefaultProps = r ? (function(E, ...C) {
      for (const d of C) Qe(E, d, !0);
      return E;
    })({}, o.defaultProps, $) : $;
  } }), Sn(p, () => `.${p.styledComponentId}`), i && oo(p, t, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), p;
}
var bs = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "blockquote", "body", "button", "br", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "menu", "meter", "nav", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "slot", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use"]);
function cr(t, e) {
  const n = [t[0]];
  for (let r = 0, o = e.length; r < o; r += 1) n.push(e[r], t[r + 1]);
  return n;
}
const ar = (t) => (co.add(t), t);
function ut(t, ...e) {
  if (ee(t) || qt(t)) return ar(pt(cr(bn, [t, ...e])));
  const n = t;
  return e.length === 0 && n.length === 1 && typeof n[0] == "string" ? pt(n) : ar(pt(cr(n, e)));
}
function nn(t, e, n = wt) {
  if (!e) throw Q(1, e);
  const r = (o, ...i) => t(e, n, ut(o, ...i));
  return r.attrs = (o) => nn(t, e, Object.assign(Object.assign({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) })), r.withConfig = (o) => nn(t, e, Object.assign(Object.assign({}, n), o)), r;
}
const yo = (t) => nn($s, t), F = yo;
bs.forEach((t) => {
  F[t] = yo(t);
});
var Co;
class Es {
  constructor(e, n) {
    this[Co] = !0, this.inject = (r, o = en) => {
      const i = this.getName(o);
      if (!r.hasNameForId(this.id, i)) {
        const s = o(this.rules, i, "@keyframes");
        r.insertRules(this.id, i, s);
      }
    }, this.name = e, this.id = Jr + e, this.rules = n, Ft(this.id), Sn(this, () => {
      throw Q(12, String(this.name));
    });
  }
  getName(e = en) {
    return e.hash ? this.name + En(+e.hash >>> 0) : this.name;
  }
}
function It(t, ...e) {
  const n = Je(ut(t, ...e)), r = eo(n);
  return new Es(r, n);
}
Co = ao;
const Gt = Sr(void 0);
Gt.displayName = "ConfigurationContext";
function ne() {
  const t = mn(Gt);
  if (!t)
    throw new Error(
      `${Gt.displayName} must be used within a ${Gt.displayName} Provider`
    );
  return t;
}
function Ss({
  children: t,
  configuration: e,
  videoElementSize: n
}) {
  const r = te(() => ({ ...e, videoElementSize: n }), [e, n]);
  return /* @__PURE__ */ f(Gt.Provider, { value: r, children: t });
}
const ws = 2, vo = 14, Os = 0.0276;
var et = /* @__PURE__ */ ((t) => (t[t.S = 300] = "S", t[t.M = 400] = "M", t[t.L = 500] = "L", t[t.Default = 600] = "Default", t))(et || {});
const Ut = {
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
}, Ue = {
  loading: { text: "Loading. Please wait.", visible: !0 },
  done: { text: "Waiting for input...", visible: !0 }
}, Ns = {
  [D.CANDIDATE_SELECTION]: "Stay still…",
  [D.FACE_TOO_CLOSE]: "Move back",
  [D.FACE_TOO_FAR]: "Move closer",
  [D.FACE_CENTERING]: "Center your face",
  [D.FACE_NOT_PRESENT]: "Position your face into the circle",
  [D.SHARPNESS_TOO_LOW]: "Turn face against light",
  [D.BRIGHTNESS_TOO_LOW]: "Turn face against light",
  [D.BRIGHTNESS_TOO_HIGH]: "Less light needed",
  [D.DEVICE_PITCHED]: "Hold your phone at eye level",
  [D.LEFT_EYE_NOT_PRESENT]: "Position your face into the circle",
  [D.RIGHT_EYE_NOT_PRESENT]: "Position your face into the circle",
  [D.MOUTH_SCORE_TOO_HIGH]: "Keep neutral expression",
  [D.MOUTH_SCORE_TOO_LOW]: "Smile :)",
  [D.MOUTH_NOT_PRESENT]: "Position your face into the circle"
}, xs = {
  ...Ns,
  [Yt.FIT_YOUR_EYE]: "Fit your eye into square",
  [Yt.DEVICE_PITCHED]: "Hold your phone at eye level"
}, Is = "rgba(19, 19, 19, 0.5)", Ts = 34;
function lr(t, e) {
  return Math.max(e, e + (t - 400) * Os + 2);
}
const As = (t, e = vo) => t ? t.width < t.height ? lr(t.width, e) : lr(t.height, e) : e, ks = (t) => t > et.Default ? Ut[et.Default] : t > et.L ? Ut[et.L] : t > et.M ? Ut[et.M] : Ut[et.S], Rs = (t) => t ? ks(t.width) : Ut[et.Default];
function Ps() {
  const t = "https://fonts.googleapis.com/css?family=Montserrat:600";
  if (!document.querySelector(`link[href="${t}"]`)) {
    const n = document.createElement("link");
    n.href = t, n.rel = "stylesheet", document.head.appendChild(n);
  }
}
function Ls(t) {
  if (t)
    return {
      faceCenter: t.faceCenter,
      faceSize: t.faceSize
    };
}
function Ms(t, e) {
  return t ? `${t}, ${e}` : e;
}
const Ds = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, Fs = {
  family: "Montserrat, Arial, sans-serif",
  weight: "600",
  style: "normal",
  minimumSize: vo
}, Lt = {
  colors: Ds,
  font: Fs
}, Hs = (t) => t ? {
  ...Lt,
  ...t,
  colors: {
    ...Lt.colors,
    ...t.colors
  },
  font: {
    ...Lt.font,
    ...t.font,
    family: Ms(t.font?.family, Lt.font.family)
  }
} : Lt, Us = (t, e) => ({
  ...t,
  font: {
    ...t.font,
    computedSize: As(e, t.font.minimumSize)
  }
}), Bs = ({ svgSize: t }) => /* @__PURE__ */ f("svg", { fill: "none", height: t, viewBox: "0 0 16 14", width: t, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
  "path",
  {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), Ws = F.div`
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
`, js = F.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(t) => t.theme.colors.instructionTextColor};
`, zs = F.p`
  background: ${(t) => t.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(t) => `${t.theme.font.computedSize}px`};
  line-height: 1em;
  max-width: 80%;
`, rn = ({ Icon: t, isCameraReady: e, position: n = "absolute", text: r }) => {
  const { font: o } = go();
  return /* @__PURE__ */ f(Ws, { $isCameraReady: e, $position: n, children: /* @__PURE__ */ f(js, { children: [
    t ? /* @__PURE__ */ f(t, { svgSize: o.computedSize * 2 }) : null,
    /* @__PURE__ */ f(zs, { children: r })
  ] }) });
}, $o = ({ text: t = "An unknown error has occurred" }) => /* @__PURE__ */ f(rn, { Icon: Bs, position: "relative", text: t });
class Gs extends q {
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
    return this.state.hasError ? /* @__PURE__ */ f($o, {}) : this.props.children;
  }
}
const Ys = F.div`
  font-family: ${(t) => t.theme.font.family};
  font-style: ${(t) => t.theme.font.style};
  font-weight: ${(t) => t.theme.font.weight};
`;
function Zs({
  children: t,
  uiConfiguration: e,
  videoElementSize: n
}) {
  rt(() => {
    Ps();
  }, []);
  const r = Us(e.styling.theme, n);
  return /* @__PURE__ */ f(ys, { target: e.styleTarget, children: /* @__PURE__ */ f(Cs, { theme: r, children: /* @__PURE__ */ f(Ys, { children: /* @__PURE__ */ f(Gs, { children: /* @__PURE__ */ f(Ss, { configuration: e, videoElementSize: n, children: t }) }) }) }) });
}
const Vs = 0.75, qs = 2, Xs = "dot-auto-capture-video";
function Kt(t, e) {
  const n = ve(e);
  rt(() => {
    n.current = e;
  }, [e]), rt(
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
function Ks(t) {
  const [e, n] = j(), r = gt(
    (o) => {
      n(o.detail?.size);
    },
    [n]
  );
  return Kt(t, r), Nt(() => {
    if (!e) {
      const o = document.getElementById(Xs);
      o && n(o.getBoundingClientRect());
    }
  }, [e, n]), e;
}
const bo = (t, e) => {
  document.dispatchEvent(
    new CustomEvent(t, {
      detail: e
    })
  );
}, ur = (t, e) => {
  bo(t, {
    instruction: e
  });
}, Js = (t) => {
  bo(t, { animationEnd: !0 });
}, Qs = (t) => Number.parseFloat(t.toFixed(3)), On = (t, e) => Math.min(t, e), tc = ({ height: t, width: e }, n) => {
  const r = On(e, t) * n, o = (e - r) / 2, i = (t - r) / 2;
  return {
    shiftX: o,
    shiftY: i,
    width: r,
    height: r
  };
}, ec = (t, e) => {
  const { height: n, shiftX: r, shiftY: o, width: i } = tc(t, e);
  return {
    shiftX: r / t.width,
    shiftY: o / t.height,
    width: i / t.width,
    height: n / t.height
  };
};
function nc(t, e) {
  const n = On(e.width, e.height);
  return Qs(t * n);
}
function rc(t, e = 1) {
  return ec(
    t,
    Vs * e
  );
}
function oc(t, e) {
  return nc(t, e) * qs;
}
async function ic() {
  return navigator.mediaDevices.enumerateDevices();
}
async function sc() {
  return (await ic()).filter((e) => e.kind === "videoinput");
}
const cc = () => {
  const [t, e] = j(!1);
  return rt(() => {
    (async () => (await sc()).length > 1 && e(!0))();
  }, []), t;
}, ac = ({ size: t }) => /* @__PURE__ */ f("svg", { fill: "none", height: t, viewBox: "0 0 52 52", width: t, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }), lc = ({ size: t }) => /* @__PURE__ */ f("svg", { fill: "none", height: t, viewBox: "0 0 52 52", width: "52", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ f("circle", { cx: "26", cy: "26", fill: "#131313", fillOpacity: "0.3", r: "26" }),
  /* @__PURE__ */ f(
    "path",
    {
      d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
      fill: "white"
    }
  )
] }), Eo = F.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(t) => t.$marginLeft ? `${t.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, uc = ({ marginLeft: t, size: e, ...n }) => /* @__PURE__ */ f(Eo, { $marginLeft: t, ...n, children: /* @__PURE__ */ f(ac, { size: e }) }), _c = ({ marginLeft: t, size: e, ...n }) => /* @__PURE__ */ f(Eo, { $marginLeft: t, ...n, children: /* @__PURE__ */ f(lc, { size: e }) }), fc = F.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(t) => `${t.$padding}px`};
  z-index: 2;
`, dc = ({
  customControlEvent: t,
  isSwitchCameraDisabled: e
}) => {
  const {
    control: { showCameraButtons: n },
    videoElementSize: r
  } = ne(), o = cc();
  if (!n)
    return null;
  const { buttonPadding: i, iconSize: s, marginLeft: c } = Rs(r);
  return /* @__PURE__ */ f(fc, { $padding: i, children: [
    o && /* @__PURE__ */ f(_c, { disabled: e, onClick: () => {
      ur(t, Rn.SWITCH_CAMERA);
    }, size: s }),
    /* @__PURE__ */ f(
      uc,
      {
        marginLeft: o ? c : 0,
        onClick: () => {
          ur(t, Rn.TOGGLE_MIRROR);
        },
        size: s
      }
    )
  ] });
}, _r = 2.6, on = "1.5s", sn = "1.5s", cn = "ease-in-out", hc = 2500, pc = "2.5s", mc = "0.3s", gc = "linear", yc = ".5s", Cc = "3s", vc = "ease-in-out", $c = ".5s", bc = ".5s", Ec = "ease-out", Sc = (t) => It`
100% {
  transform: translateX(22%)  scale(${t});
}
`, wc = (t) => It`
100% {
  transform: translate(34%, 8%)  scale(${t * 0.98});
}
`, Oc = It`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`, Nc = It`
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`, xc = It`
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
`, Ic = It`
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
`, Tc = F.div`
  position: absolute;
  left: 0;
  right: 0;

  ${(t) => t.$cssTop ? `top: ${t.$cssTop}%;` : ""}
  ${(t) => t.$cssBottom ? `bottom: ${t.$cssBottom}%;` : ""}
    ${(t) => t.$isAnimating && ut`
      animation: ${Oc} ${mc}
        ${gc} both;
      animation-delay: ${pc};

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
`, Ac = F.div`
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
`, kc = ({
  children: t,
  cssBottom: e,
  cssTop: n,
  isAnimating: r,
  isInCandidateSelection: o,
  isPortrait: i
}) => /* @__PURE__ */ f(Tc, { $cssBottom: e, $cssTop: n, $isAnimating: r, $isPortrait: i, children: /* @__PURE__ */ f(
  Ac,
  {
    $isInCandidateSelection: o,
    $wrap: t.length > Ts,
    children: t
  }
) }), Rc = F.div`
  color: ${(t) => t.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, Pc = ({ svgSize: t }) => /* @__PURE__ */ f(Rc, { children: /* @__PURE__ */ f("svg", { fill: "none", height: t, viewBox: "0 0 48 48", width: t, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }) }), Lc = F.div`
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
`, Mc = ({ children: t, height: e, scale: n, width: r }) => {
  const {
    styling: { backdropColor: o }
  } = ne(), i = On(r, e);
  return /* @__PURE__ */ f(Lc, { $backdropColor: o, $scale: n, $shorterSide: i, children: /* @__PURE__ */ f("svg", { viewBox: `0 0 ${r} ${e}`, children: [
    /* @__PURE__ */ f("defs", { children: /* @__PURE__ */ f("mask", { id: "mask", children: [
      /* @__PURE__ */ f("rect", { fill: "#fff", height: "100%", width: "100%" }),
      /* @__PURE__ */ f("g", { children: t })
    ] }) }),
    /* @__PURE__ */ f("rect", { fill: o, height: "100%", mask: "url(#mask)", width: "100%" })
  ] }) });
};
function Dc({ cameraHeight: t, cameraWidth: e, state: n }) {
  const { appStateInstructions: r } = ne();
  return !n || n === ze.ERROR || !r?.[n]?.visible ? null : n === ze.DONE ? /* @__PURE__ */ f(z, { children: [
    t && e && /* @__PURE__ */ f(Mc, { height: t, width: e }),
    /* @__PURE__ */ f(rn, { isCameraReady: !0, text: r[n].text })
  ] }) : /* @__PURE__ */ f(rn, { Icon: Pc, isCameraReady: !0, text: r[n].text });
}
const Fc = F.canvas`
  transform: ${(t) => t.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
function Hc(t) {
  const e = t.getContext("2d");
  e && e.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
const Uc = ({ cameraResolution: t, isImageMirror: e }) => {
  const n = ve(null), r = go(), [o, i] = j(), s = gt(
    (c) => {
      i(c?.detail?.detectedObject);
    },
    [i]
  );
  return Kt($t.DETECTION_CHANGED, s), rt(() => {
    if (!n.current)
      return;
    const c = { width: t.width, height: t.height }, l = Ls(o), a = (_, m) => {
      if (!m)
        return;
      const { faceCenter: u, faceSize: h } = m, p = n?.current?.getContext("2d");
      if (!p)
        return;
      const $ = oc(h, _);
      p.beginPath(), p.arc(u.x, u.y, $, 0, 2 * Math.PI, !1), p.lineWidth = ws, p.strokeStyle = r.colors.placeholderColor, p.stroke();
    };
    n.current.width = c.width, n.current.height = c.height, Hc(n.current), a(c, l);
  }, [t, o, r.colors.placeholderColor]), /* @__PURE__ */ f(Fc, { ref: n, $isImageMirror: e });
}, Bc = () => {
  const [t, e] = j(), [n, r] = j(!1), o = gt(
    (l) => {
      e(l?.detail?.cameraResolution);
      const a = l?.detail?.isMirroring;
      a !== void 0 && r(a);
    },
    [e]
  );
  Kt($t.CAMERA_PROPS_CHANGED, o);
  const [i, s] = j({
    code: D.FACE_NOT_PRESENT,
    // FIXME Default instruction should not be here
    isEscalated: !1
  }), c = gt(
    (l) => {
      s({
        code: l?.detail?.instructionCode,
        isEscalated: l?.detail?.isEscalated ?? !1
      });
    },
    [s]
  );
  return Kt($t.INSTRUCTION_CHANGED, c), {
    cameraResolution: t,
    instruction: i,
    isMirroring: n
  };
}, Wc = () => {
  const [t, e] = j(Zt.DISTANT), [n, r] = j(dt.LOADING), [o, i] = j(), s = gt(
    (c) => {
      const { error: l, phase: a, state: _ } = c.detail || {};
      a && e(a), _ && r(_), l && i(l);
    },
    [e, r, i]
  );
  return Kt(hn.STATUS_CHANGED, s), {
    magnifEyePhase: t,
    magnifEyeState: n,
    magnifEyeError: o
  };
}, jc = (t, e) => {
  const [n, r] = j(!1);
  return rt(() => {
    if (e === Zt.CLOSEUP) {
      r(!0);
      const o = setTimeout(() => {
        r(!1);
      }, hc);
      return () => {
        clearTimeout(o), r(!1);
      };
    }
  }, [e]), t && n ? t === Yt.CANDIDATE_SELECTION ? t : Yt.FIT_YOUR_EYE : t;
}, zc = F.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${(t) => t.$isInCandidateSelection ? `${t.theme.colors.placeholderColorSuccess}` : `${t.theme.colors.placeholderColor}`};

  #backdrop-cutout,
  #placeholder {
    @media (min-width: 668px) {
      stroke-width: 4;
    }
    @media (min-width: 2240px) {
      stroke-width: 6;
    }
    transform-origin: center;

    ${(t) => t.$isAnimating && ut`
        animation: ${Sc(_r)} ${sn}
          ${cn} both;
        animation-delay: ${on};
      `}

    @media (max-width: 667px) {
      ${(t) => t.$isAnimating && ut`
          animation: ${wc(_r)} ${sn}
            ${cn} both;
          animation-delay: ${on};
        `}
    }
  }
`, Gc = ({
  handleAnimationEnd: t,
  height: e,
  initialPosition: n,
  isAnimating: r,
  isInCandidateSelection: o,
  width: i
}) => {
  const {
    styling: { backdropColor: s }
  } = ne();
  return /* @__PURE__ */ f(
    zc,
    {
      $isAnimating: r,
      $isInCandidateSelection: o,
      onAnimationEnd: t,
      children: /* @__PURE__ */ f("svg", { viewBox: `0 0 ${i} ${e}`, children: [
        /* @__PURE__ */ f("mask", { id: "mask", children: [
          /* @__PURE__ */ f("rect", { fill: "#fff", height: "100%", width: "100%" }),
          /* @__PURE__ */ f(
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
        /* @__PURE__ */ f("rect", { fill: s, height: "100%", mask: "url(#mask)", width: "100%" }),
        /* @__PURE__ */ f(
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
function Yc() {
  return /* @__PURE__ */ f(
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
      children: /* @__PURE__ */ f(
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
function Zc() {
  return /* @__PURE__ */ f(
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
        /* @__PURE__ */ f(
          "path",
          {
            className: "st0",
            d: "M98.1,35c0,11-9.4,20-21,20c-11.6,0-21-9-21-20s9.4-20,21-20C88.7,15,98.1,24,98.1,35z",
            fill: "none",
            stroke: "#FFFFFF",
            strokeWidth: "2"
          }
        ),
        /* @__PURE__ */ f(
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
const Vc = F.div`
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

  ${(t) => t.$isAnimating && ut`
      animation: ${Nc} ${sn} ${cn} both;
      animation-delay: ${on};
    `}
`, qc = F.div`
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

  ${(t) => t.$isAnimating && ut`
      animation: ${xc} ${Cc} ${vc} both;
      animation-delay: ${yc};
    `}

  svg {
    display: inline-block;
    width: 100%;
    height: auto;
    filter: drop-shadow(0px 0px 5px rgba(2, 27, 65, 0.3));
  }
`, Xc = F.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  color: ${(t) => t.$isInCandidateSelection ? "#00BFB2" : "white"};
  transform: scale(0);
  opacity: 0;

  ${(t) => t.$isAnimating && ut`
      animation: ${Ic} ${bc} ${Ec} both;
      animation-delay: ${$c};
    `}

  svg {
    display: inline-block;
    width: 100%;
    height: auto;
    filter: drop-shadow(0px 0px 4px rgba(2, 27, 65, 0.3));
  }
`, Kc = ({ isAnimating: t, isInCandidateSelection: e }) => /* @__PURE__ */ f(Vc, { $isAnimating: t, children: [
  /* @__PURE__ */ f(Xc, { $isAnimating: t, $isInCandidateSelection: e, children: /* @__PURE__ */ f(Yc, {}) }),
  /* @__PURE__ */ f(qc, { $isAnimating: t, children: /* @__PURE__ */ f(Zc, {}) })
] }), Jc = () => {
  const { cameraResolution: t, instruction: e, isMirroring: n } = Bc(), { magnifEyeError: r, magnifEyePhase: o, magnifEyeState: i } = Wc(), { instructions: s } = ne(), c = jc(e.code, o), l = c === Yt.CANDIDATE_SELECTION, a = o === Zt.MIDDLE || o === Zt.CLOSEUP;
  if (i === dt.ERROR)
    return /* @__PURE__ */ f($o, { text: r?.message });
  if ((i === dt.RUNNING || i === dt.WAITING) && t) {
    const _ = rc(t);
    return /* @__PURE__ */ f(z, { children: [
      !a && /* @__PURE__ */ f(Uc, { cameraResolution: t, isImageMirror: n }),
      /* @__PURE__ */ f(
        Gc,
        {
          handleAnimationEnd: () => Js(hn.ANIMATION_END),
          height: t.height,
          initialPosition: _,
          isAnimating: a,
          isInCandidateSelection: l,
          width: t.width
        }
      ),
      c && /* @__PURE__ */ f(
        kc,
        {
          cssBottom: (_.height + _.shiftY) * 100,
          isAnimating: a,
          isInCandidateSelection: l,
          isPortrait: t.width < t.height,
          children: s[c]
        }
      ),
      /* @__PURE__ */ f(Kc, { isAnimating: a, isInCandidateSelection: l }),
      !a && /* @__PURE__ */ f(dc, { customControlEvent: $t.CONTROL, isSwitchCameraDisabled: l })
    ] });
  }
  return /* @__PURE__ */ f(
    Dc,
    {
      cameraHeight: t?.height,
      cameraWidth: t?.width,
      state: i
    }
  );
}, Qc = (t) => {
  const e = { ...xs, ...t?.instructions }, n = {
    [dt.LOADING]: {
      ...Ue.loading,
      ...t?.appStateInstructions?.loading
    },
    [dt.DONE]: {
      ...Ue.done,
      ...t?.appStateInstructions?.done
    },
    [dt.BLURRED]: {
      ...Ue.loading,
      ...t?.appStateInstructions?.loading
    }
  }, r = {
    ...t?.styling,
    backdropColor: t?.styling?.backdropColor ?? Is,
    theme: Hs(t?.styling?.theme)
  }, o = {
    showCameraButtons: t?.control?.showCameraButtons ?? !1
  };
  return {
    instructions: e,
    appStateInstructions: n,
    styling: r,
    control: o
  };
}, ta = ({ configuration: t }) => {
  const e = Ks($t.VIDEO_ELEMENT_SIZE);
  return /* @__PURE__ */ f(Zs, { uiConfiguration: Qc(t), videoElementSize: e, children: /* @__PURE__ */ f(Jc, {}) });
};
Po(ta, "x-dot-magnifeye-liveness-ui", ["configuration"]);
