var Kt, y, fr, at, bn, dr, hr, Ae, se, jt, pr, nn, Be, je, mr, pe = {}, me = [], Io = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Qt = Array.isArray;
function J(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function rn(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function U(t, e, n) {
  var r, o, i, s = {};
  for (i in e) i == "key" ? r = e[i] : i == "ref" ? o = e[i] : s[i] = e[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? Kt.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null) for (i in t.defaultProps) s[i] === void 0 && (s[i] = t.defaultProps[i]);
  return Wt(t, s, r, o, null);
}
function Wt(t, e, n, r, o) {
  var i = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++fr, __i: -1, __u: 0 };
  return o == null && y.vnode != null && y.vnode(i), i;
}
function Oo() {
  return { current: null };
}
function G(t) {
  return t.children;
}
function X(t, e) {
  this.props = t, this.context = e;
}
function yt(t, e) {
  if (e == null) return t.__ ? yt(t.__, t.__i + 1) : null;
  for (var n; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
  return typeof t.type == "function" ? yt(t) : null;
}
function No(t) {
  if (t.__P && t.__d) {
    var e = t.__v, n = e.__e, r = [], o = [], i = J({}, e);
    i.__v = e.__v + 1, y.vnode && y.vnode(i), on(t.__P, i, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [n] : null, r, n ?? yt(e), !!(32 & e.__u), o), i.__v = e.__v, i.__.__k[i.__i] = i, Sr(r, i, o), e.__e = e.__ = null, i.__e != n && gr(i);
  }
}
function gr(t) {
  if ((t = t.__) != null && t.__c != null) return t.__e = t.__c.base = null, t.__k.some(function(e) {
    if (e != null && e.__e != null) return t.__e = t.__c.base = e.__e;
  }), gr(t);
}
function We(t) {
  (!t.__d && (t.__d = !0) && at.push(t) && !ge.__r++ || bn != y.debounceRendering) && ((bn = y.debounceRendering) || dr)(ge);
}
function ge() {
  try {
    for (var t, e = 1; at.length; ) at.length > e && at.sort(hr), t = at.shift(), e = at.length, No(t);
  } finally {
    at.length = ge.__r = 0;
  }
}
function yr(t, e, n, r, o, i, s, c, u, a, f) {
  var p, l, h, m, g, C, S = r && r.__k || me, d = e.length;
  for (u = xo(n, e, S, u, d), p = 0; p < d; p++) (h = n.__k[p]) != null && (l = h.__i != -1 && S[h.__i] || pe, h.__i = p, C = on(t, h, l, o, i, s, c, u, a, f), m = h.__e, h.ref && l.ref != h.ref && (l.ref && sn(l.ref, null, h), f.push(h.ref, h.__c || m, h)), g == null && m != null && (g = m), 4 & h.__u ? (u = Cr(h, u, t), l.__e && (l.__e = null)) : typeof h.type == "function" && C !== void 0 ? u = C : m && (u = m.nextSibling), h.__u &= -7);
  return n.__e = g, u;
}
function xo(t, e, n, r, o) {
  var i, s, c, u, a, f = n.length, p = f, l = 0;
  for (t.__k = new Array(o), i = 0; i < o; i++) (s = e[i]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = t.__k[i] = Wt(null, s, null, null, null) : Qt(s) ? s = t.__k[i] = Wt(G, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? s = t.__k[i] = Wt(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : t.__k[i] = s, u = i + l, s.__ = t, s.__b = t.__b + 1, c = null, (a = s.__i = To(s, n, u, p)) != -1 && (p--, (c = n[a]) && (c.__u |= 2)), c == null || c.__v == null ? (a == -1 && (o > f ? l-- : o < f && l++), typeof s.type != "function" && (s.__u |= 4)) : a != u && (a == u - 1 ? l-- : a == u + 1 ? l++ : (a > u ? l-- : l++, s.__u |= 4))) : t.__k[i] = null;
  if (p) for (i = 0; i < f; i++) (c = n[i]) != null && (2 & c.__u) == 0 && (c.__e == r && (r = yt(c)), $r(c, c));
  return r;
}
function Cr(t, e, n) {
  var r, o;
  if (typeof t.type == "function") {
    for (r = t.__k, o = 0; r && o < r.length; o++) r[o] && (r[o].__ = t, e = Cr(r[o], e, n));
    return e;
  }
  t.__e != e && (e && t.type && !e.parentNode && (e = yt(t)), e = n.insertBefore(t.__e, e || null));
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function ot(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Qt(t) ? t.some(function(n) {
    ot(n, e);
  }) : e.push(t)), e;
}
function To(t, e, n, r) {
  var o, i, s, c = t.key, u = t.type, a = e[n], f = a != null && (2 & a.__u) == 0;
  if (a === null && c == null || f && c == a.key && u == a.type) return n;
  if (r > (f ? 1 : 0)) {
    for (o = n - 1, i = n + 1; o >= 0 || i < e.length; ) if ((a = e[s = o >= 0 ? o-- : i++]) != null && (2 & a.__u) == 0 && c == a.key && u == a.type) return s;
  }
  return -1;
}
function wn(t, e, n) {
  e[0] == "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || Io.test(e) ? n : n + "px";
}
function oe(t, e, n, r, o) {
  var i, s;
  t: if (e == "style") if (typeof n == "string") t.style.cssText = n;
  else {
    if (typeof r == "string" && (t.style.cssText = r = ""), r) for (e in r) n && e in n || wn(t.style, e, "");
    if (n) for (e in n) r && n[e] == r[e] || wn(t.style, e, n[e]);
  }
  else if (e[0] == "o" && e[1] == "n") i = e != (e = e.replace(pr, "$1")), s = e.toLowerCase(), e = s in t || e == "onFocusOut" || e == "onFocusIn" ? s.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = n, n ? r ? n[jt] = r[jt] : (n[jt] = nn, t.addEventListener(e, i ? je : Be, i)) : t.removeEventListener(e, i ? je : Be, i);
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
function In(t) {
  return function(e) {
    if (this.l) {
      var n = this.l[e.type + t];
      if (e[se] == null) e[se] = nn++;
      else if (e[se] < n[jt]) return;
      return n(y.event ? y.event(e) : e);
    }
  };
}
function on(t, e, n, r, o, i, s, c, u, a) {
  var f, p, l, h, m, g, C, S, d, I, L, w, x, v, $, Y, P = e.type;
  if (e.constructor !== void 0) return null;
  128 & n.__u && (u = !!(32 & n.__u), i = [c = e.__e = n.__e]), (f = y.__b) && f(e);
  t: if (typeof P == "function") {
    p = s.length;
    try {
      if (d = e.props, I = P.prototype && P.prototype.render, L = (f = P.contextType) && r[f.__c], w = f ? L ? L.props.value : f.__ : r, n.__c ? S = (l = e.__c = n.__c).__ = l.__E : (I ? e.__c = l = new P(d, w) : (e.__c = l = new X(d, w), l.constructor = P, l.render = Ao), L && L.sub(l), l.state || (l.state = {}), l.__n = r, h = l.__d = !0, l.__h = [], l._sb = []), I && l.__s == null && (l.__s = l.state), I && P.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = J({}, l.__s)), J(l.__s, P.getDerivedStateFromProps(d, l.__s))), m = l.props, g = l.state, l.__v = e, h) I && P.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), I && l.componentDidMount != null && l.__h.push(l.componentDidMount);
      else {
        if (I && P.getDerivedStateFromProps == null && d !== m && l.componentWillReceiveProps != null && l.componentWillReceiveProps(d, w), e.__v == n.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(d, l.__s, w) === !1) {
          e.__v != n.__v && (l.props = d, l.state = l.__s, l.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some(function(H) {
            H && (H.__ = e);
          }), me.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && s.push(l), c = yt(n);
          break t;
        }
        l.componentWillUpdate != null && l.componentWillUpdate(d, l.__s, w), I && l.componentDidUpdate != null && l.__h.push(function() {
          l.componentDidUpdate(m, g, C);
        });
      }
      if (l.context = w, l.props = d, l.__P = t, l.__e = !1, x = y.__r, v = 0, I) l.state = l.__s, l.__d = !1, x && x(e), f = l.render(l.props, l.state, l.context), me.push.apply(l.__h, l._sb), l._sb = [];
      else do
        l.__d = !1, x && x(e), f = l.render(l.props, l.state, l.context), l.state = l.__s;
      while (l.__d && ++v < 25);
      l.state = l.__s, l.getChildContext != null && (r = J(J({}, r), l.getChildContext())), I && !h && l.getSnapshotBeforeUpdate != null && (C = l.getSnapshotBeforeUpdate(m, g)), $ = f != null && f.type === G && f.key == null ? Er(f.props.children) : f, c = yr(t, Qt($) ? $ : [$], e, n, r, o, i, s, c, u, a), l.base = e.__e, e.__u &= -161, l.__h.length && s.push(l), S && (l.__E = l.__ = null);
    } catch (H) {
      if (s.length = p, e.__v = null, u || i != null) {
        if (H.then) {
          for (e.__u |= u ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
          i != null && (i[i.indexOf(c)] = null), e.__e = c;
        } else if (i != null) for (Y = i.length; Y--; ) rn(i[Y]);
      } else e.__e = n.__e;
      e.__k == null && (e.__k = n.__k || []), H.then || vr(e), y.__e(H, e, n);
    }
  } else i == null && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : c = e.__e = ko(n.__e, e, n, r, o, i, s, u, a);
  return (f = y.diffed) && f(e), 128 & e.__u ? void 0 : c;
}
function vr(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(vr));
}
function Sr(t, e, n) {
  for (var r = 0; r < n.length; r++) sn(n[r], n[++r], n[++r]);
  y.__c && y.__c(e, t), t.some(function(o) {
    try {
      t = o.__h, o.__h = [], t.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      y.__e(i, o.__v);
    }
  });
}
function Er(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : Qt(t) ? t.map(Er) : t.constructor !== void 0 ? null : J({}, t);
}
function ko(t, e, n, r, o, i, s, c, u) {
  var a, f, p, l, h, m, g, C = n.props || pe, S = e.props, d = e.type;
  if (d == "svg" ? o = "http://www.w3.org/2000/svg" : d == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (a = 0; a < i.length; a++) if ((h = i[a]) && "setAttribute" in h == !!d && (d ? h.localName == d : h.nodeType == 3)) {
      t = h, i[a] = null;
      break;
    }
  }
  if (t == null) {
    if (d == null) return document.createTextNode(S);
    t = document.createElementNS(o, d, S.is && S), c && (y.__m && y.__m(e, i), c = !1), i = null;
  }
  if (d == null) C === S || c && t.data == S || (t.data = S);
  else {
    if (i = d == "textarea" && S.defaultValue != null ? null : i && Kt.call(t.childNodes), !c && i != null) for (C = {}, a = 0; a < t.attributes.length; a++) C[(h = t.attributes[a]).name] = h.value;
    for (a in C) h = C[a], a == "dangerouslySetInnerHTML" ? p = h : a == "children" || a in S || a == "value" && "defaultValue" in S || a == "checked" && "defaultChecked" in S || oe(t, a, null, h, o);
    for (a in S) h = S[a], a == "children" ? l = h : a == "dangerouslySetInnerHTML" ? f = h : a == "value" ? m = h : a == "checked" ? g = h : c && typeof h != "function" || C[a] === h || oe(t, a, h, C[a], o);
    if (f) c || p && (f.__html == p.__html || f.__html == t.innerHTML) || (t.innerHTML = f.__html), e.__k = [];
    else if (p && (t.innerHTML = ""), yr(e.type == "template" ? t.content : t, Qt(l) ? l : [l], e, n, r, d == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, s, i ? i[0] : n.__k && yt(n, 0), c, u), i != null) for (a = i.length; a--; ) rn(i[a]);
    c && d != "textarea" || (a = "value", d == "progress" && m == null ? t.removeAttribute("value") : m != null && (m !== t[a] || d == "progress" && !m || d == "option" && m != C[a]) && oe(t, a, m, C[a], o), a = "checked", g != null && g != t[a] && oe(t, a, g, C[a], o));
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
function $r(t, e, n) {
  var r, o;
  if (y.unmount && y.unmount(t), (r = t.ref) && (r.current && r.current != t.__e || sn(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (i) {
      y.__e(i, e);
    }
    r.base = r.__P = r.__n = null;
  }
  if (r = t.__k) for (o = 0; o < r.length; o++) r[o] && $r(r[o], e, n || typeof t.type != "function");
  n || rn(t.__e), t.__c = t.__ = t.__e = void 0;
}
function Ao(t, e, n) {
  return this.constructor(t, n);
}
function _t(t, e, n) {
  var r, o, i, s;
  e == document && (e = document.documentElement), y.__ && y.__(t, e), o = (r = typeof n == "function") ? null : n && n.__k || e.__k, i = [], s = [], on(e, t = (!r && n || e).__k = U(G, null, [t]), o || pe, pe, e.namespaceURI, !r && n ? [n] : o ? null : e.firstChild ? Kt.call(e.childNodes) : null, i, !r && n ? n : o ? o.__e : e.firstChild, r, s), Sr(i, t, s), t.props.children = null;
}
function cn(t, e) {
  _t(t, e, cn);
}
function an(t, e, n) {
  var r, o, i, s, c = J({}, t.props);
  for (i in t.type && t.type.defaultProps && (s = t.type.defaultProps), e) i == "key" ? r = e[i] : i == "ref" ? o = e[i] : c[i] = e[i] === void 0 && s != null ? s[i] : e[i];
  return arguments.length > 2 && (c.children = arguments.length > 3 ? Kt.call(arguments, 2) : n), Wt(t.type, c, r || t.key, o || t.ref, null);
}
function br(t) {
  function e(n) {
    var r, o;
    return this.getChildContext || (r = /* @__PURE__ */ new Set(), (o = {})[e.__c] = this, this.getChildContext = function() {
      return o;
    }, this.componentWillUnmount = function() {
      r = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value != i.value && r.forEach(function(s) {
        s.__e = !0, We(s);
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
Kt = me.slice, y = { __e: function(t, e, n, r) {
  for (var o, i, s; e = e.__; ) if ((o = e.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(t)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, r || {}), s = o.__d), s) return o.__E = o;
  } catch (c) {
    t = c;
  }
  throw t;
} }, fr = 0, X.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = J({}, this.state), typeof t == "function" && (t = t(J({}, n), this.props)), t && J(n, t), t != null && this.__v && (e && this._sb.push(e), We(this));
}, X.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), We(this));
}, X.prototype.render = G, at = [], dr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, hr = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, ge.__r = 0, Ae = Math.random().toString(8), se = "__d" + Ae, jt = "__a" + Ae, pr = /(PointerCapture)$|Capture$/i, nn = 0, Be = In(!1), je = In(!0), mr = 0;
function ye() {
  return ye = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, ye.apply(this, arguments);
}
function wr(t, e) {
  if (t == null) return {};
  var n, r, o = {}, i = Object.keys(t);
  for (r = 0; r < i.length; r++) e.indexOf(n = i[r]) >= 0 || (o[n] = t[n]);
  return o;
}
var Ro = ["context", "children"], Lo = ["useFragment"];
function Po(t, e, n, r) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = t, i._root = i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = function() {
    Do.call(this, r);
  }, o.prototype.attributeChangedCallback = Ho, o.prototype.disconnectedCallback = Uo, n = n || t.observedAttributes || Object.keys(t.propTypes || {}), o.observedAttributes = n, t.formAssociated && (o.formAssociated = !0), n.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom ? this._vdom.props[i] : this._props[i];
    }, set: function(s) {
      this._vdom ? this.attributeChangedCallback(i, null, s) : (this._props || (this._props = {}), this._props[i] = s);
      var c = typeof s;
      s != null && c !== "string" && c !== "boolean" && c !== "number" || this.setAttribute(i, s);
    } });
  }), customElements.define(e, o), o;
}
function Mo(t) {
  this.getChildContext = function() {
    return t.context;
  };
  var e = t.children, n = wr(t, Ro);
  return an(e, n);
}
function Do(t) {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = U(Mo, ye({}, this._props, { context: e.detail.context }), Or(this, this._vdomComponent, t)), (this.hasAttribute("hydrate") ? cn : _t)(this._vdom, this._root);
}
function Ir(t) {
  return t.replace(/-(\w)/g, function(e, n) {
    return n ? n.toUpperCase() : "";
  });
}
function Ho(t, e, n) {
  if (this._vdom) {
    var r = {};
    r[t] = n = n ?? void 0, r[Ir(t)] = n, this._vdom = an(this._vdom, r), _t(this._vdom, this._root);
  }
}
function Uo() {
  _t(this._vdom = null, this._root);
}
function On(t, e) {
  var n = this, r = t.useFragment, o = wr(t, Lo);
  return U(r ? G : "slot", ye({}, o, { ref: function(i) {
    i ? (n.ref = i, n._listener || (n._listener = function(s) {
      s.stopPropagation(), s.detail.context = e;
    }, i.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function Or(t, e, n) {
  if (t.nodeType === 3) return t.data;
  if (t.nodeType !== 1) return null;
  var r = [], o = {}, i = 0, s = t.attributes, c = t.childNodes;
  for (i = s.length; i--; ) s[i].name !== "slot" && (o[s[i].name] = s[i].value, o[Ir(s[i].name)] = s[i].value);
  for (i = c.length; i--; ) {
    var u = Or(c[i], null, n), a = c[i].slot;
    a ? o[a] = U(On, { name: a }, u) : r[i] = u;
  }
  var f = !(!n || !n.shadow), p = e ? U(On, { useFragment: !f }, r) : r;
  return !f && e && (t.innerHTML = ""), U(e || t.nodeName.toLowerCase(), o, p);
}
var Fo = 0;
function _(t, e, n, r, o, i) {
  e || (e = {});
  var s, c, u = e;
  if ("ref" in u) for (c in u = {}, e) c == "ref" ? s = e[c] : u[c] = e[c];
  var a = { type: t, props: u, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Fo, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof t == "function" && (s = t.defaultProps)) for (c in s) u[c] === void 0 && (u[c] = s[c]);
  return y.vnode && y.vnode(a), a;
}
const Nn = {
  SWITCH_CAMERA: "switch-camera",
  TOGGLE_MIRROR: "toggle-mirror"
}, Yt = {
  CAMERA_PROPS_CHANGED: "smile-auto-capture:camera-props-changed",
  CONTROL: "smile-auto-capture:control",
  INSTRUCTION_CHANGED: "smile-auto-capture:instruction-changed",
  INSTRUCTION_ESCALATED: "smile-auto-capture:instruction-escalated",
  VIDEO_ELEMENT_SIZE: "smile-auto-capture:video-element-size",
  STATE_CHANGED: "smile-auto-capture:state-changed",
  PHASE_CHANGED: "smile-auto-capture:phase-changed"
}, D = {
  LOADING: "loading",
  ERROR: "error",
  WAITING: "waiting",
  // TODO: this state may not be needed in the new architecture - consider removing on next major release version
  RUNNING: "running",
  COMPLETE: "complete",
  BLURRED: "blurred"
}, xn = {
  EYE_NOT_PRESENT: "eye_not_present"
}, B = {
  CANDIDATE_SELECTION: "candidate_selection",
  FACE_TOO_CLOSE: "face_too_close",
  FACE_TOO_FAR: "face_too_far",
  FACE_CENTERING: "face_centering",
  FACE_NOT_PRESENT: "face_not_present",
  SHARPNESS_TOO_LOW: "sharpness_too_low",
  BRIGHTNESS_TOO_LOW: "brightness_too_low",
  BRIGHTNESS_TOO_HIGH: "brightness_too_high",
  DEVICE_PITCHED: "device_pitched",
  LEFT_EYE_NOT_PRESENT: `left_${xn.EYE_NOT_PRESENT}`,
  RIGHT_EYE_NOT_PRESENT: `right_${xn.EYE_NOT_PRESENT}`,
  MOUTH_NOT_PRESENT: "mouth_not_present",
  MOUTH_SCORE_TOO_HIGH: "mouth_score_too_high",
  MOUTH_SCORE_TOO_LOW: "mouth_score_too_low"
}, tt = {
  CANDIDATE_SELECTION: "candidate_selection",
  FACE_NOT_PRESENT: "face_not_present",
  SMILE: "smile",
  SMILE_CANDIDATE_SELECTION: "smile_candidate_selection",
  KEEP_NEUTRAL_EXPRESSION: "keep_neutral_expression"
}, Ce = {
  NEUTRAL: "NEUTRAL",
  SMILE: "SMILE"
};
var ft, N, Re, Tn, bt = 0, Nr = [], T = y, kn = T.__b, An = T.__r, Rn = T.diffed, Ln = T.__c, Pn = T.unmount, Mn = T.__;
function Nt(t, e) {
  T.__h && T.__h(N, t, bt || e), bt = 0;
  var n = N.__H || (N.__H = { __: [], __h: [] });
  return t >= n.__.length && n.__.push({}), n.__[t];
}
function j(t) {
  return bt = 1, ln(Ar, t);
}
function ln(t, e, n) {
  var r = Nt(ft++, 2);
  if (r.t = t, !r.__c && (r.__ = [n ? n(e) : Ar(void 0, e), function(c) {
    var u = r.__N ? r.__N[0] : r.__[0], a = r.t(u, c);
    u !== a && (r.__N = [a, r.__[1]], r.__c.setState({}));
  }], r.__c = N, !N.__f)) {
    var o = function(c, u, a) {
      if (!r.__c.__H) return !0;
      var f = !1, p = r.__c.props !== c;
      if (r.__c.__H.__.some(function(h) {
        if (h.__N) {
          f = !0;
          var m = h.__[0];
          h.__ = h.__N, h.__N = void 0, m !== h.__[0] && (p = !0);
        }
      }), i) {
        var l = i.call(this, c, u, a);
        return f ? l || p : l;
      }
      return !f || p;
    };
    N.__f = !0;
    var i = N.shouldComponentUpdate, s = N.componentWillUpdate;
    N.componentWillUpdate = function(c, u, a) {
      if (this.__e) {
        var f = i;
        i = void 0, o(c, u, a), i = f;
      }
      s && s.call(this, c, u, a);
    }, N.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function it(t, e) {
  var n = Nt(ft++, 3);
  !T.__s && fn(n.__H, e) && (n.__ = t, n.u = e, N.__H.__h.push(n));
}
function xt(t, e) {
  var n = Nt(ft++, 4);
  !T.__s && fn(n.__H, e) && (n.__ = t, n.u = e, N.__h.push(n));
}
function un(t) {
  return bt = 5, Jt(function() {
    return { current: t };
  }, []);
}
function xr(t, e, n) {
  bt = 6, xt(function() {
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
function Jt(t, e) {
  var n = Nt(ft++, 7);
  return fn(n.__H, e) && (n.__ = t(), n.__H = e, n.__h = t), n.__;
}
function ut(t, e) {
  return bt = 8, Jt(function() {
    return t;
  }, e);
}
function _n(t) {
  var e = N.context[t.__c], n = Nt(ft++, 9);
  return n.c = t, e ? (n.__ == null && (n.__ = !0, e.sub(N)), e.props.value) : t.__;
}
function Tr(t, e) {
  T.useDebugValue && T.useDebugValue(e ? e(t) : t);
}
function kr() {
  var t = Nt(ft++, 11);
  if (!t.__) {
    for (var e = N.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var n = e.__m || (e.__m = [0, 0]);
    t.__ = "P" + n[0] + "-" + n[1]++;
  }
  return t.__;
}
function Bo() {
  for (var t; t = Nr.shift(); ) {
    var e = t.__H;
    if (t.__P && e) try {
      e.__h.some(ce), e.__h.some(Ge), e.__h = [];
    } catch (n) {
      e.__h = [], T.__e(n, t.__v);
    }
  }
}
T.__b = function(t) {
  N = null, kn && kn(t);
}, T.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Mn && Mn(t, e);
}, T.__r = function(t) {
  An && An(t), ft = 0;
  var e = (N = t.__c).__H;
  e && (Re === N ? (e.__h = [], N.__h = [], e.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (e.__h.some(ce), e.__h.some(Ge), e.__h = [], ft = 0)), Re = N;
}, T.diffed = function(t) {
  Rn && Rn(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Nr.push(e) !== 1 && Tn === T.requestAnimationFrame || ((Tn = T.requestAnimationFrame) || jo)(Bo)), e.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), Re = N = null;
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
  }), Ln && Ln(t, e);
}, T.unmount = function(t) {
  Pn && Pn(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.some(function(r) {
    try {
      ce(r);
    } catch (o) {
      e = o;
    }
  }), n.__H = void 0, e && T.__e(e, n.__v));
};
var Dn = typeof requestAnimationFrame == "function";
function jo(t) {
  var e, n = function() {
    clearTimeout(r), Dn && cancelAnimationFrame(e), setTimeout(t);
  }, r = setTimeout(n, 35);
  Dn && (e = requestAnimationFrame(n));
}
function ce(t) {
  var e = N, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), N = e;
}
function Ge(t) {
  var e = N;
  t.__c = t.__(), N = e;
}
function fn(t, e) {
  return !t || t.length !== e.length || e.some(function(n, r) {
    return n !== t[r];
  });
}
function Ar(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function Rr(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function ze(t, e) {
  for (var n in t) if (n !== "__source" && !(n in e)) return !0;
  for (var r in e) if (r !== "__source" && t[r] !== e[r]) return !0;
  return !1;
}
function Lr(t, e) {
  var n = e(), r = j({ t: { __: n, u: e } }), o = r[0].t, i = r[1];
  return xt(function() {
    o.__ = n, o.u = e, Le(o) && i({ t: o });
  }, [t, n, e]), it(function() {
    return Le(o) && i({ t: o }), t(function() {
      Le(o) && i({ t: o });
    });
  }, [t]), n;
}
function Le(t) {
  try {
    return !((e = t.__) === (n = t.u()) && (e !== 0 || 1 / e == 1 / n) || e != e && n != n);
  } catch {
    return !0;
  }
  var e, n;
}
function Pr(t) {
  t();
}
function Mr(t) {
  return t;
}
function Dr() {
  return [!1, Pr];
}
var Hr = xt;
function Ze(t, e) {
  this.props = t, this.context = e;
}
function Wo(t, e) {
  function n(o) {
    var i = this.props.ref;
    return i != o.ref && i && (typeof i == "function" ? i(null) : i.current = null), e ? !e(this.props, o) || i != o.ref : ze(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, U(t, o);
  }
  return r.displayName = "Memo(" + (t.displayName || t.name) + ")", r.__f = r.prototype.isReactComponent = !0, r.type = t, r;
}
(Ze.prototype = new X()).isPureReactComponent = !0, Ze.prototype.shouldComponentUpdate = function(t, e) {
  return ze(this.props, t) || ze(this.state, e);
};
var Hn = y.__b;
y.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), Hn && Hn(t);
};
var Go = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.forward_ref") || 3911;
function zo(t) {
  function e(n) {
    var r = Rr({}, n);
    return delete r.ref, t(r, n.ref || null);
  }
  return e.$$typeof = Go, e.render = t, e.prototype.isReactComponent = e.__f = !0, e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", e;
}
var Un = function(t, e) {
  return t == null ? null : ot(ot(t).map(e));
}, Zo = { map: Un, forEach: Un, count: function(t) {
  return t ? ot(t).length : 0;
}, only: function(t) {
  var e = ot(t);
  if (e.length !== 1) throw "Children.only";
  return e[0];
}, toArray: ot }, Yo = y.__e;
y.__e = function(t, e, n, r) {
  if (t.then) {
    for (var o, i = e; i = i.__; ) if ((o = i.__c) && o.__c) return e.__e == null && (e.__e = n.__e, e.__k = n.__k || []), o.__c(t, e);
  }
  Yo(t, e, n, r);
};
var Fn = y.unmount;
function Ur(t, e, n) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), t.__c.__H = null), (t = Rr({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c.__e = !0, t.__c = null), t.__k = t.__k && t.__k.map(function(r) {
    return Ur(r, e, n);
  })), t;
}
function Fr(t, e, n) {
  return t && n && (t.__v = null, t.__k = t.__k && t.__k.map(function(r) {
    return Fr(r, e, n);
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
function Dt() {
  this.i = null, this.l = null;
}
y.unmount = function(t) {
  var e = t.__c;
  e && (e.__z = !0), e && e.__R && e.__R(), e && 32 & t.__u && (t.type = null), Fn && Fn(t);
}, (ae.prototype = new X()).__c = function(t, e) {
  var n = e.__c, r = this;
  r.o == null && (r.o = []), r.o.push(n);
  var o = Br(r.__v), i = !1, s = function() {
    i || r.__z || (i = !0, n.__R = null, o ? o(u) : u());
  };
  n.__R = s;
  var c = n.__P;
  n.__P = null;
  var u = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var a = r.state.__a;
        r.__v.__k[0] = Fr(a, a.__c.__P, a.__c.__O);
      }
      var f;
      for (r.setState({ __a: r.__b = null }); f = r.o.pop(); ) f.__P = c, f.forceUpdate();
    }
  };
  r.__u++ || 32 & e.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), t.then(s, s);
}, ae.prototype.componentWillUnmount = function() {
  this.o = [];
}, ae.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Ur(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = e.__a && U(G, null, t.fallback);
  return o && (o.__u &= -33), [U(G, null, e.__a ? null : t.children), o];
};
var Bn = function(t, e, n) {
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
    _t(null, e.v), e.v = null, e.h = null;
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
  _t(U(qo, { context: e.context }, t.__v), e.v);
}
function Ko(t, e) {
  var n = U(Xo, { __v: t, h: e });
  return n.containerInfo = e, n;
}
(Dt.prototype = new X()).__a = function(t) {
  var e = this, n = Br(e.__v), r = e.l.get(t);
  return r[0]++, function(o) {
    var i = function() {
      e.props.revealOrder ? (r.push(o), Bn(e, t, r)) : o();
    };
    n ? n(i) : i();
  };
}, Dt.prototype.render = function(t) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var e = ot(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var n = e.length; n--; ) this.l.set(e[n], this.i = [1, 0, this.i]);
  return t.children;
}, Dt.prototype.componentDidUpdate = Dt.prototype.componentDidMount = function() {
  var t = this;
  this.l.forEach(function(e, n) {
    Bn(t, n, e);
  });
};
var jr = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || 60103, Qo = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Jo = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, ti = /[A-Z0-9]/g, ei = typeof document < "u", ni = function(t) {
  return (typeof Symbol < "u" && typeof /* @__PURE__ */ Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
};
function ri(t, e, n) {
  return e.__k == null && (e.textContent = ""), _t(t, e), typeof n == "function" && n(), t ? t.__c : null;
}
function oi(t, e, n) {
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
var dn, ii = { configurable: !0, get: function() {
  return this.class;
} }, Wn = y.vnode;
y.vnode = function(t) {
  typeof t.type == "string" && (function(e) {
    var n = e.props, r = e.type, o = {}, i = r.indexOf("-") == -1;
    for (var s in n) {
      var c = n[s];
      if (!(s === "value" && "defaultValue" in n && c == null || ei && s === "children" && r === "noscript" || s === "class" || s === "className")) {
        var u = s.toLowerCase();
        s === "defaultValue" && "value" in n && n.value == null ? s = "value" : s === "download" && c === !0 ? c = "" : u === "translate" && c === "no" ? c = !1 : u[0] === "o" && u[1] === "n" ? u === "ondoubleclick" ? s = "ondblclick" : u !== "onchange" || r !== "input" && r !== "textarea" || ni(n.type) ? u === "onfocus" ? s = "onfocusin" : u === "onblur" ? s = "onfocusout" : Jo.test(s) && (s = u) : u = s = "oninput" : i && Qo.test(s) ? s = s.replace(ti, "-$&").toLowerCase() : c === null && (c = void 0), u === "oninput" && o[s = u] && (s = "oninputCapture"), o[s] = c;
      }
    }
    r == "select" && (o.multiple && Array.isArray(o.value) && (o.value = ot(n.children).forEach(function(a) {
      a.props.selected = o.value.indexOf(a.props.value) != -1;
    })), o.defaultValue != null && (o.value = ot(n.children).forEach(function(a) {
      a.props.selected = o.multiple ? o.defaultValue.indexOf(a.props.value) != -1 : o.defaultValue == a.props.value;
    }))), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", ii)) : n.className && (o.class = o.className = n.className), e.props = o;
  })(t), t.$$typeof = jr, Wn && Wn(t);
};
var Gn = y.__r;
y.__r = function(t) {
  Gn && Gn(t), dn = t.__c;
};
var zn = y.diffed;
y.diffed = function(t) {
  zn && zn(t);
  var e = t.props, n = t.__e;
  n != null && t.type === "textarea" && "value" in e && e.value !== n.value && (n.value = e.value == null ? "" : e.value), dn = null;
};
var si = { ReactCurrentDispatcher: { current: { readContext: function(t) {
  return dn.__n[t.__c].props.value;
}, useCallback: ut, useContext: _n, useDebugValue: Tr, useDeferredValue: Mr, useEffect: it, useId: kr, useImperativeHandle: xr, useInsertionEffect: Hr, useLayoutEffect: xt, useMemo: Jt, useReducer: ln, useRef: un, useState: j, useSyncExternalStore: Lr, useTransition: Dr } } };
function ci(t) {
  return U.bind(null, t);
}
function Ee(t) {
  return !!t && t.$$typeof === jr;
}
function ai(t) {
  return Ee(t) && t.type === G;
}
function li(t) {
  return !!t && typeof t.displayName == "string" && t.displayName.indexOf("Memo(") == 0;
}
function ui(t) {
  return Ee(t) ? an.apply(null, arguments) : t;
}
function _i(t) {
  return !!t.__k && (_t(null, t), !0);
}
function fi(t) {
  return t && (t.base || t.nodeType === 1 && t) || null;
}
var di = function(t, e) {
  return t(e);
}, hi = function(t, e) {
  var n, r = y.debounceRendering;
  y.debounceRendering = function(i) {
    n = i;
  };
  try {
    var o = t(e);
    return n && n(), o;
  } finally {
    y.debounceRendering = r;
  }
}, pi = Ee, W = { useState: j, useId: kr, useReducer: ln, useEffect: it, useLayoutEffect: xt, useInsertionEffect: Hr, useTransition: Dr, useDeferredValue: Mr, useSyncExternalStore: Lr, startTransition: Pr, useRef: un, useImperativeHandle: xr, useMemo: Jt, useCallback: ut, useContext: _n, useDebugValue: Tr, version: "18.3.1", Children: Zo, render: ri, hydrate: oi, unmountComponentAtNode: _i, createPortal: Ko, createElement: U, createContext: br, createFactory: ci, cloneElement: ui, createRef: Oo, Fragment: G, isValidElement: Ee, isElement: pi, isFragment: ai, isMemo: li, findDOMNode: fi, Component: X, PureComponent: Ze, memo: Wo, forwardRef: zo, flushSync: hi, unstable_batchedUpdates: di, StrictMode: G, Suspense: ae, SuspenseList: Dt, lazy: Vo, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: si }, O = "-ms-", Gt = "-moz-", b = "-webkit-", Wr = "comm", $e = "rule", hn = "decl", mi = "@import", gi = "@namespace", Gr = "@keyframes", yi = "@layer", zr = Math.abs, pn = String.fromCharCode, Ye = Object.assign;
function Ci(t, e) {
  return R(t, 0) ^ 45 ? (((e << 2 ^ R(t, 0)) << 2 ^ R(t, 1)) << 2 ^ R(t, 2)) << 2 ^ R(t, 3) : 0;
}
function Zr(t) {
  return t.trim();
}
function nt(t, e) {
  return (t = e.exec(t)) ? t[0] : t;
}
function E(t, e, n) {
  return t.replace(e, n);
}
function le(t, e, n) {
  return t.indexOf(e, n);
}
function R(t, e) {
  return t.charCodeAt(e) | 0;
}
function Ct(t, e, n) {
  return t.slice(e, n);
}
function q(t) {
  return t.length;
}
function Yr(t) {
  return t.length;
}
function Ht(t, e) {
  return e.push(t), t;
}
function vi(t, e) {
  return t.map(e).join("");
}
function Zn(t, e) {
  return t.filter(function(n) {
    return !nt(n, e);
  });
}
var be = 1, wt = 1, Vr = 0, Z = 0, k = 0, Tt = "";
function we(t, e, n, r, o, i, s, c) {
  return { value: t, root: e, parent: n, type: r, props: o, children: i, line: be, column: wt, length: s, return: "", siblings: c };
}
function ct(t, e) {
  return Ye(we("", null, null, "", null, null, 0, t.siblings), t, { length: -t.length }, e);
}
function vt(t) {
  for (; t.root; )
    t = ct(t.root, { children: [t] });
  Ht(t, t.siblings);
}
function Si() {
  return k;
}
function Ei() {
  return k = Z > 0 ? R(Tt, --Z) : 0, wt--, k === 10 && (wt = 1, be--), k;
}
function K() {
  return k = Z < Vr ? R(Tt, Z++) : 0, wt++, k === 10 && (wt = 1, be++), k;
}
function lt() {
  return R(Tt, Z);
}
function ue() {
  return Z;
}
function Ie(t, e) {
  return Ct(Tt, t, e);
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
function $i(t) {
  return be = wt = 1, Vr = q(Tt = t), Z = 0, [];
}
function bi(t) {
  return Tt = "", t;
}
function Pe(t) {
  return Zr(Ie(Z - 1, Ve(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function wi(t) {
  for (; (k = lt()) && k < 33; )
    K();
  return Vt(t) > 2 || Vt(k) > 3 ? "" : " ";
}
function Ii(t, e) {
  for (; --e && K() && !(k < 48 || k > 102 || k > 57 && k < 65 || k > 70 && k < 97); )
    ;
  return Ie(t, ue() + (e < 6 && lt() == 32 && K() == 32));
}
function Ve(t) {
  for (; K(); )
    switch (k) {
      // ] ) " '
      case t:
        return Z;
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
  return Z;
}
function Oi(t, e) {
  for (; K() && t + k !== 57; )
    if (t + k === 84 && lt() === 47)
      break;
  return "/*" + Ie(e, Z - 1) + "*" + pn(t === 47 ? t : K());
}
function Ni(t) {
  for (; !Vt(lt()); )
    K();
  return Ie(t, Z);
}
function xi(t) {
  return bi(_e("", null, null, null, [""], t = $i(t), 0, [0], t));
}
function _e(t, e, n, r, o, i, s, c, u) {
  for (var a = 0, f = 0, p = s, l = 0, h = 0, m = 0, g = 1, C = 1, S = 1, d = 0, I = "", L = o, w = i, x = r, v = I; C; )
    switch (m = d, d = K()) {
      // (
      case 40:
        if (m != 108 && R(v, p - 1) == 58) {
          le(v += E(Pe(d), "&", "&\f"), "&\f", zr(a ? c[a - 1] : 0)) != -1 && (S = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        v += Pe(d);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        v += wi(m);
        break;
      // \
      case 92:
        v += Ii(ue() - 1, 7);
        continue;
      // /
      case 47:
        switch (lt()) {
          case 42:
          case 47:
            Ht(Ti(Oi(K(), ue()), e, n, u), u), (Vt(m || 1) == 5 || Vt(lt() || 1) == 5) && q(v) && Ct(v, -1, void 0) !== " " && (v += " ");
            break;
          default:
            v += "/";
        }
        break;
      // {
      case 123 * g:
        c[a++] = q(v) * S;
      // } ; \0
      case 125 * g:
      case 59:
      case 0:
        switch (d) {
          // \0 }
          case 0:
          case 125:
            C = 0;
          // ;
          case 59 + f:
            S == -1 && (v = E(v, /\f/g, "")), h > 0 && (q(v) - p || g === 0 && m === 47) && Ht(h > 32 ? Vn(v + ";", r, n, p - 1, u) : Vn(E(v, " ", "") + ";", r, n, p - 2, u), u);
            break;
          // @ ;
          case 59:
            v += ";";
          // { rule/at-rule
          default:
            if (Ht(x = Yn(v, e, n, a, f, o, c, I, L = [], w = [], p, i), i), d === 123)
              if (f === 0)
                _e(v, e, x, x, L, i, p, c, w);
              else {
                switch (l) {
                  // c(ontainer)
                  case 99:
                    if (R(v, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (R(v, 2) === 97) break;
                  default:
                    f = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                f ? _e(t, x, x, r && Ht(Yn(t, x, x, 0, 0, o, c, I, o, L = [], p, w), w), o, w, p, c, r ? L : w) : _e(v, x, x, x, [""], w, 0, c, w);
              }
        }
        a = f = h = 0, g = S = 1, I = v = "", p = s;
        break;
      // :
      case 58:
        p = 1 + q(v), h = m;
      default:
        if (g < 1) {
          if (d == 123)
            --g;
          else if (d == 125 && g++ == 0 && Ei() == 125)
            continue;
        }
        switch (v += pn(d), d * g) {
          // &
          case 38:
            S = f > 0 ? 1 : (v += "\f", -1);
            break;
          // ,
          case 44:
            c[a++] = (q(v) - 1) * S, S = 1;
            break;
          // @
          case 64:
            lt() === 45 && (v += Pe(K())), l = lt(), f = p = q(I = v += Ni(ue())), d++;
            break;
          // -
          case 45:
            m === 45 && q(v) == 2 && (g = 0);
        }
    }
  return i;
}
function Yn(t, e, n, r, o, i, s, c, u, a, f, p) {
  for (var l = o - 1, h = o === 0 ? i : [""], m = Yr(h), g = 0, C = 0, S = 0; g < r; ++g)
    for (var d = 0, I = Ct(t, l + 1, l = zr(C = s[g])), L = t; d < m; ++d)
      (L = Zr(C > 0 ? h[d] + " " + I : E(I, /&\f/g, h[d]))) && (u[S++] = L);
  return we(t, e, n, o === 0 ? $e : c, u, a, f, p);
}
function Ti(t, e, n, r) {
  return we(t, e, n, Wr, pn(Si()), Ct(t, 2, -2), 0, r);
}
function Vn(t, e, n, r, o) {
  return we(t, e, n, hn, Ct(t, 0, r), Ct(t, r + 1, -1), r, o);
}
function qr(t, e, n) {
  switch (Ci(t, e)) {
    // color-adjust
    case 5103:
      return b + "print-" + t + t;
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
      return b + t + t;
    // mask-composite
    case 4855:
      return b + t.replace("add", "source-over").replace("substract", "source-out").replace("intersect", "source-in").replace("exclude", "xor") + t;
    // tab-size
    case 4789:
      return Gt + t + t;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return b + t + Gt + t + O + t + t;
    // writing-mode
    case 5936:
      switch (R(t, e + 11)) {
        // vertical-l(r)
        case 114:
          return b + t + O + E(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        // vertical-r(l)
        case 108:
          return b + t + O + E(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        // horizontal(-)tb
        case 45:
          return b + t + O + E(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return b + t + O + t + t;
    // order
    case 6165:
      return b + t + O + "flex-" + t + t;
    // align-items
    case 5187:
      return b + t + E(t, /(\w+).+(:[^]+)/, b + "box-$1$2" + O + "flex-$1$2") + t;
    // align-self
    case 5443:
      return b + t + O + "flex-item-" + E(t, /flex-|-self/g, "") + (nt(t, /flex-|baseline/) ? "" : O + "grid-row-" + E(t, /flex-|-self/g, "")) + t;
    // align-content
    case 4675:
      return b + t + O + "flex-line-pack" + E(t, /align-content|flex-|-self/g, "") + t;
    // flex-shrink
    case 5548:
      return b + t + O + E(t, "shrink", "negative") + t;
    // flex-basis
    case 5292:
      return b + t + O + E(t, "basis", "preferred-size") + t;
    // flex-grow
    case 6060:
      return b + "box-" + E(t, "-grow", "") + b + t + O + E(t, "grow", "positive") + t;
    // transition
    case 4554:
      return b + E(t, /([^-])(transform)/g, "$1" + b + "$2") + t;
    // cursor
    case 6187:
      return E(E(E(t, /(zoom-|grab)/, b + "$1"), /(image-set)/, b + "$1"), t, "") + t;
    // background, background-image
    case 5495:
    case 3959:
      return E(t, /(image-set\([^]*)/, b + "$1$`$1");
    // justify-content
    case 4968:
      return E(E(t, /(.+:)(flex-)?(.*)/, b + "box-pack:$3" + O + "flex-pack:$3"), /space-between/, "justify") + b + t + t;
    // justify-self
    case 4200:
      if (!nt(t, /flex-|baseline/)) return O + "grid-column-align" + Ct(t, e) + t;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return O + E(t, "template-", "") + t;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return e = o, nt(r.props, /grid-\w+-end/);
      }) ? ~le(t + (n = n[e].value), "span", 0) ? t : O + E(t, "-start", "") + t + O + "grid-row-span:" + (~le(n, "span", 0) ? nt(n, /\d+/) : +nt(n, /\d+/) - +nt(t, /\d+/)) + ";" : O + E(t, "-start", "") + t;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return nt(r.props, /grid-\w+-start/);
      }) ? t : O + E(E(t, "-end", "-span"), "span ", "") + t;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return E(t, /(.+)-inline(.+)/, b + "$1$2") + t;
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
        switch (R(t, e + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (R(t, e + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return E(t, /(.+:)(.+)-([^]+)/, "$1" + b + "$2-$3$1" + Gt + (R(t, e + 3) == 108 ? "$3" : "$2-$3")) + t;
          // (s)tretch
          case 115:
            return ~le(t, "stretch", 0) ? qr(E(t, "stretch", "fill-available"), e, n) + t : t;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return E(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, c, u, a) {
        return O + o + ":" + i + a + (s ? O + o + "-span:" + (c ? u : +u - +i) + a : "") + t;
      });
    // position: sticky
    case 4949:
      if (R(t, e + 6) === 121)
        return E(t, ":", ":" + b) + t;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (R(t, R(t, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return E(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + b + (R(t, 14) === 45 ? "inline-" : "") + "box$3$1" + b + "$2$3$1" + O + "$2box$3") + t;
        // (inline-)?gri(d)
        case 100:
          return E(t, ":", ":" + O) + t;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return E(t, "scroll-", "scroll-snap-") + t;
  }
  return t;
}
function ve(t, e) {
  for (var n = "", r = 0; r < t.length; r++)
    n += e(t[r], r, t, e) || "";
  return n;
}
function ki(t, e, n, r) {
  switch (t.type) {
    case yi:
      if (t.children.length) break;
    case mi:
    case gi:
    case hn:
      return t.return = t.return || t.value;
    case Wr:
      return "";
    case Gr:
      return t.return = t.value + "{" + ve(t.children, r) + "}";
    case $e:
      if (!q(t.value = t.props.join(","))) return "";
  }
  return q(n = ve(t.children, r)) ? t.return = t.value + "{" + n + "}" : "";
}
function Ai(t) {
  var e = Yr(t);
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
function Li(t, e, n, r) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case hn:
        t.return = qr(t.value, t.length, n);
        return;
      case Gr:
        return ve([ct(t, { value: E(t.value, "@", "@" + b) })], r);
      case $e:
        if (t.length)
          return vi(n = t.props, function(o) {
            switch (nt(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                vt(ct(t, { props: [E(o, /:(read-\w+)/, ":" + Gt + "$1")] })), vt(ct(t, { props: [o] })), Ye(t, { props: Zn(n, r) });
                break;
              // :placeholder
              case "::placeholder":
                vt(ct(t, { props: [E(o, /:(plac\w+)/, ":" + b + "input-$1")] })), vt(ct(t, { props: [E(o, /:(plac\w+)/, ":" + Gt + "$1")] })), vt(ct(t, { props: [E(o, /:(plac\w+)/, O + "input-$1")] })), vt(ct(t, { props: [o] })), Ye(t, { props: Zn(n, r) });
                break;
            }
            return "";
          });
    }
}
var Et = {};
function et(t, ...e) {
  return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${t} for more information.${e.length > 0 ? ` Args: ${e.join(", ")}` : ""}`);
}
var Me, De;
const It = typeof process < "u" && Et !== void 0 && (Et.REACT_APP_SC_ATTR || Et.SC_ATTR) || "data-styled", Xr = "active", Kr = "data-styled-version", Oe = "6.6.0", mn = `/*!sc*/
`, zt = typeof window < "u" && typeof document < "u";
if (!W.createContext) throw et(19);
function qn(t) {
  if (typeof process < "u" && Et !== void 0) {
    const e = Et[t];
    if (e !== void 0 && e !== "") return e !== "false";
  }
}
const Pi = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : (De = (Me = qn("REACT_APP_SC_DISABLE_SPEEDY")) !== null && Me !== void 0 ? Me : qn("SC_DISABLE_SPEEDY")) !== null && De !== void 0 ? De : typeof process < "u" && Et !== void 0 && !1), Qr = "sc-keyframes-";
let fe = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), de = 1;
const Ut = (t) => {
  if (fe.has(t)) return fe.get(t);
  for (; Se.has(de); ) de++;
  const e = de++;
  return fe.set(t, e), Se.set(e, t), e;
}, Mi = (t) => Se.get(t), Di = (t, e) => {
  de = e + 1, fe.set(t, e), Se.set(e, t);
}, gn = Object.freeze([]), Ot = Object.freeze({});
function Hi(t, e, n = Ot) {
  return t.theme !== n.theme && t.theme || e || n.theme;
}
const Ui = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Fi = /(^-|-$)/g;
function Jr(t) {
  return t.replace(Ui, "-").replace(Fi, "");
}
const Bi = /(a)(d)/gi, Xn = (t) => String.fromCharCode(t + (t > 25 ? 39 : 97));
function yn(t) {
  let e, n = "";
  for (e = Math.abs(t); e > 52; e = e / 52 | 0) n = Xn(e % 52) + n;
  return (Xn(e % 52) + n).replace(Bi, "$1-$2");
}
const qe = 5381, mt = (t, e) => {
  let n = e.length;
  for (; n; ) t = 33 * t ^ e.charCodeAt(--n);
  return t;
}, to = (t) => mt(qe, t);
function eo(t) {
  return yn(to(t) >>> 0);
}
function ji(t) {
  return t.displayName || t.name || "Component";
}
function Xe(t) {
  return typeof t == "string" && !0;
}
function Wi(t) {
  return Xe(t) ? `styled.${t}` : `Styled(${ji(t)})`;
}
const no = /* @__PURE__ */ Symbol.for("react.memo"), Gi = /* @__PURE__ */ Symbol.for("react.forward_ref"), zi = { contextType: !0, defaultProps: !0, displayName: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, propTypes: !0, type: !0 }, Zi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, ro = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Yi = { [Gi]: { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, [no]: ro };
function Kn(t) {
  return ("type" in (e = t) && e.type.$$typeof) === no ? ro : "$$typeof" in t ? Yi[t.$$typeof] : zi;
  var e;
}
const Vi = Object.defineProperty, qi = Object.getOwnPropertyNames, Xi = Object.getOwnPropertySymbols, Ki = Object.getOwnPropertyDescriptor, Qi = Object.getPrototypeOf, Ji = Object.prototype;
function oo(t, e, n) {
  if (typeof e != "string") {
    const r = Qi(e);
    r && r !== Ji && oo(t, r, n);
    const o = qi(e).concat(Xi(e)), i = Kn(t), s = Kn(e);
    for (let c = 0; c < o.length; ++c) {
      const u = o[c];
      if (!(u in Zi || n && n[u] || s && u in s || i && u in i)) {
        const a = Ki(e, u);
        try {
          Vi(t, u, a);
        } catch {
        }
      }
    }
  }
  return t;
}
function te(t) {
  return typeof t == "function";
}
const ts = /* @__PURE__ */ Symbol.for("react.forward_ref");
function io(t) {
  return t != null && (typeof t == "object" || typeof t == "function") && t.$$typeof === ts && "styledComponentId" in t;
}
function Ft(t, e) {
  return t && e ? t + " " + e : t || e || "";
}
function Ke(t, e) {
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
function Cn(t, e) {
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
      for (; t >= s; ) if (s <<= 1, s < 0) throw et(16, `${t}`);
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
    for (let i = r; i < o; i++) e += this.tag.getRule(i) + mn;
    return e;
  }
}, ns = `style[${It}][${Kr}="${Oe}"]`, rs = new RegExp(`^${It}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`), Qn = (t) => typeof ShadowRoot < "u" && t instanceof ShadowRoot || "host" in t && t.nodeType === 11, Je = (t) => {
  if (!t) return document;
  if (Qn(t)) return t;
  if ("getRootNode" in t) {
    const e = t.getRootNode();
    if (Qn(e)) return e;
  }
  return document;
}, os = (t, e, n) => {
  const r = n.split(",");
  let o;
  for (let i = 0, s = r.length; i < s; i++) (o = r[i]) && t.registerName(e, o);
}, is = (t, e) => {
  var n;
  const r = ((n = e.textContent) !== null && n !== void 0 ? n : "").split(mn), o = [];
  for (let i = 0, s = r.length; i < s; i++) {
    const c = r[i].trim();
    if (!c) continue;
    const u = c.match(rs);
    if (u) {
      const a = 0 | parseInt(u[1], 10), f = u[2];
      a !== 0 && (Di(f, a), os(t, f, u[3]), t.getTag().insertRules(a, o)), o.length = 0;
    } else o.push(c);
  }
}, He = (t) => {
  const n = Je(t.options.target).querySelectorAll(ns);
  for (let r = 0, o = n.length; r < o; r++) {
    const i = n[r];
    i && i.getAttribute(It) !== Xr && (is(t, i), i.parentNode && i.parentNode.removeChild(i));
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
  if (typeof document > "u") throw et(20);
  const n = document.head, r = t || n, o = document.createElement("style"), i = ((u) => {
    const a = Array.from(u.querySelectorAll(`style[${It}]`));
    return a[a.length - 1];
  })(r), s = i !== void 0 ? i.nextSibling : null;
  o.setAttribute(It, Xr), o.setAttribute(Kr, Oe);
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
      throw et(17);
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
let Jn = zt;
const ls = { isServer: !zt, useCSSOMInjection: !Pi };
class Ne {
  static registerId(e) {
    return Ut(e);
  }
  constructor(e = Ot, n = {}, r) {
    this.options = Object.assign(Object.assign({}, ls), e), this.gs = n, this.keyframeIds = /* @__PURE__ */ new Set(), this.names = new Map(r), this.server = !!e.isServer, !this.server && zt && Jn && (Jn = !1, He(this)), Cn(this, () => ((o) => {
      const i = o.getTag(), { length: s } = i;
      let c = "";
      for (let u = 0; u < s; u++) {
        const a = Mi(u);
        if (a === void 0) continue;
        const f = o.names.get(a);
        if (f === void 0 || !f.size) continue;
        const p = i.getGroup(u);
        if (p.length === 0) continue;
        const l = It + ".g" + u + '[id="' + a + '"]';
        let h = "";
        for (const m of f) m.length > 0 && (h += m + ",");
        c += p + l + '{content:"' + h + '"}' + mn;
      }
      return c;
    })(this));
  }
  rehydrate() {
    !this.server && zt && He(this);
  }
  reconstructWithOptions(e, n = !0) {
    const r = new Ne(Object.assign(Object.assign({}, this.options), e), this.gs, n && this.names || void 0);
    return r.keyframeIds = new Set(this.keyframeIds), !this.server && zt && e.target !== this.options.target && Je(this.options.target) !== Je(e.target) && He(r), r;
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
    Ut(e), e.startsWith(Qr) && this.keyframeIds.add(e);
    const r = this.names.get(e);
    r ? r.add(n) : this.names.set(e, /* @__PURE__ */ new Set([n]));
  }
  insertRules(e, n, r) {
    this.registerName(e, n), this.getTag().insertRules(Ut(e), r);
  }
  clearNames(e) {
    this.names.has(e) && this.names.get(e).clear();
  }
  clearRules(e) {
    this.getTag().clearGroup(Ut(e)), this.clearNames(e);
  }
  clearTag() {
    this.tag = void 0;
  }
}
const co = /* @__PURE__ */ new WeakSet(), us = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexShrink: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
function _s(t, e) {
  return e == null || typeof e == "boolean" || e === "" ? "" : typeof e != "number" || e === 0 || t in us || t.startsWith("--") ? String(e).trim() : e + "px";
}
const pt = 47;
function tr(t) {
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
  return te(t) && !(t.prototype && t.prototype.isReactComponent);
}
const uo = (t) => t == null || t === !1 || t === "", ds = /* @__PURE__ */ Symbol.for("react.client.reference");
function er(t) {
  return t.$$typeof === ds;
}
function _o(t, e) {
  for (const n in t) {
    const r = t[n];
    t.hasOwnProperty(n) && !uo(r) && (Array.isArray(r) && co.has(r) || te(r) ? e.push(tr(n) + ":", r, ";") : qt(r) ? (e.push(n + " {"), _o(r, e), e.push("}")) : e.push(tr(n) + ": " + _s(n, r) + ";"));
  }
}
function gt(t, e, n, r, o = []) {
  if (uo(t)) return o;
  const i = typeof t;
  if (i === "string") return o.push(t), o;
  if (i === "function") {
    if (er(t)) return o;
    if (lo(t) && e) {
      const s = t(e);
      return gt(s, e, n, r, o);
    }
    return o.push(t), o;
  }
  if (Array.isArray(t)) {
    for (let s = 0; s < t.length; s++) gt(t[s], e, n, r, o);
    return o;
  }
  return io(t) ? (o.push(`.${t.styledComponentId}`), o) : fs(t) ? (n ? (t.inject(n, r), o.push(t.getName(r))) : o.push(t), o) : er(t) ? o : qt(t) ? t.toString !== Object.prototype.toString ? (o.push(t.toString()), o) : (_o(t, o), o) : (o.push(t.toString()), o);
}
const hs = to(Oe);
class ps {
  constructor(e, n, r) {
    this.rules = e, this.componentId = n, this.baseHash = mt(hs, n), this.baseStyle = r, Ne.registerId(n);
  }
  generateAndInjectStyles(e, n, r) {
    let o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, n, r) : "";
    {
      let i = "";
      for (let s = 0; s < this.rules.length; s++) {
        const c = this.rules[s];
        if (typeof c == "string") i += c;
        else if (c) if (lo(c)) {
          const u = c(e);
          typeof u == "string" ? i += u : u != null && u !== !1 && (i += Ke(gt(u, e, n, r)));
        } else i += Ke(gt(c, e, n, r));
      }
      if (i) {
        this.dynamicNameCache || (this.dynamicNameCache = /* @__PURE__ */ new Map());
        const s = r.hash ? r.hash + i : i;
        let c = this.dynamicNameCache.get(s);
        if (!c) {
          if (c = yn(mt(mt(this.baseHash, r.hash), i) >>> 0), this.dynamicNameCache.size >= 200) {
            const u = this.dynamicNameCache.keys().next().value;
            u !== void 0 && this.dynamicNameCache.delete(u);
          }
          this.dynamicNameCache.set(s, c);
        }
        if (!n.hasNameForId(this.componentId, c)) {
          const u = r(i, "." + c, void 0, this.componentId);
          n.insertRules(this.componentId, c, u);
        }
        o = Ft(o, c);
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
function Ue(t) {
  const e = t.length;
  let n = "", r = 0, o = 0, i = 0, s = !1, c = !1;
  for (let u = 0; u < e; u++) {
    const a = t.charCodeAt(u);
    if (i !== 0 || s || a !== pt || t.charCodeAt(u + 1) !== 42) if (s) a === 42 && t.charCodeAt(u + 1) === pt && (s = !1, u++);
    else if (a !== 34 && a !== 39 || fo(t, u)) {
      if (i === 0) if (a === 123) o++;
      else if (a === 125) {
        if (o--, o < 0) {
          c = !0;
          let f = u + 1;
          for (; f < e; ) {
            const p = t.charCodeAt(f);
            if (p === 59 || p === 10) break;
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
function ho(t, e) {
  const n = e + " ", r = "," + n;
  for (let o = 0; o < t.length; o++) {
    const i = t[o];
    if (i.type === "rule") {
      i.value = (n + i.value).replaceAll(",", r);
      const s = i.props, c = [];
      for (let u = 0; u < s.length; u++) c[u] = n + s[u];
      i.props = c;
    }
    Array.isArray(i.children) && i.type !== "@keyframes" && ho(i.children, e);
  }
  return t;
}
function po({ options: t = Ot, plugins: e = gn } = Ot) {
  let n, r, o;
  const i = (l, h, m) => m.startsWith(r) && m.endsWith(r) && m.replaceAll(r, "").length > 0 ? `.${n}` : l, s = e.slice();
  s.push((l) => {
    l.type === $e && l.value.includes("&") && (o || (o = new RegExp(`\\${r}\\b`, "g")), l.props[0] = l.props[0].replace(ms, r).replace(o, i));
  }), t.prefix && s.push(Li), s.push(ki);
  let c = [];
  const u = Ai(s.concat(Ri((l) => c.push(l)))), a = (l, h = "", m = "", g = "&") => {
    n = g, r = h, o = void 0;
    const C = (function(d) {
      const I = d.indexOf("//") !== -1, L = d.indexOf("}") !== -1;
      if (!I && !L) return d;
      if (!I) return Ue(d);
      const w = d.length;
      let x = "", v = 0, $ = 0, Y = 0, P = 0, H = 0, kt = !1;
      for (; $ < w; ) {
        const F = d.charCodeAt($);
        if (F !== 34 && F !== 39 || fo(d, $)) if (Y === 0) if (F === pt && $ + 1 < w && d.charCodeAt($ + 1) === 42) {
          for ($ += 2; $ + 1 < w && (d.charCodeAt($) !== 42 || d.charCodeAt($ + 1) !== pt); ) $++;
          $ += 2;
        } else if (F !== 40) if (F !== 41) if (P > 0) $++;
        else if (F === 42 && $ + 1 < w && d.charCodeAt($ + 1) === pt) x += d.substring(v, $), $ += 2, v = $, kt = !0;
        else if (F === pt && $ + 1 < w && d.charCodeAt($ + 1) === pt) {
          for (x += d.substring(v, $); $ < w && d.charCodeAt($) !== 10; ) $++;
          v = $, kt = !0;
        } else F === 123 ? H++ : F === 125 && H--, $++;
        else P > 0 && P--, $++;
        else P++, $++;
        else $++;
        else Y === 0 ? Y = F : Y === F && (Y = 0), $++;
      }
      return kt ? (v < w && (x += d.substring(v)), H === 0 ? x : Ue(x)) : H === 0 ? d : Ue(d);
    })(l);
    let S = xi(m || h ? m + " " + h + " { " + C + " }" : C);
    return t.namespace && (S = ho(S, t.namespace)), c = [], ve(S, u), c;
  }, f = t;
  let p = qe;
  for (let l = 0; l < e.length; l++) e[l].name || et(15), p = mt(p, e[l].name);
  return f?.namespace && (p = mt(p, f.namespace)), f?.prefix && (p = mt(p, "p")), a.hash = p !== qe ? p.toString() : "", a;
}
const gs = new Ne(), tn = po(), vn = W.createContext({ shouldForwardProp: void 0, styleSheet: gs, stylis: tn, stylisPlugins: void 0 });
vn.Consumer;
function mo() {
  return W.useContext(vn);
}
function ys(t) {
  var e;
  const n = mo(), { styleSheet: r } = n, o = W.useMemo(() => {
    let a = r;
    return t.sheet ? a = t.sheet : t.target ? a = a.reconstructWithOptions(t.nonce !== void 0 ? { target: t.target, nonce: t.nonce } : { target: t.target }, !1) : t.nonce !== void 0 && (a = a.reconstructWithOptions({ nonce: t.nonce })), t.disableCSSOMInjection && (a = a.reconstructWithOptions({ useCSSOMInjection: !1 })), a;
  }, [t.disableCSSOMInjection, t.nonce, t.sheet, t.target, r]), i = W.useMemo(() => {
    var a;
    return t.stylisPlugins === void 0 && t.namespace === void 0 && t.enableVendorPrefixes === void 0 ? n.stylis : po({ options: { namespace: t.namespace, prefix: t.enableVendorPrefixes }, plugins: (a = t.stylisPlugins) !== null && a !== void 0 ? a : n.stylisPlugins });
  }, [t.enableVendorPrefixes, t.namespace, t.stylisPlugins, n.stylis, n.stylisPlugins]), s = "shouldForwardProp" in t ? t.shouldForwardProp : n.shouldForwardProp, c = (e = t.stylisPlugins) !== null && e !== void 0 ? e : n.stylisPlugins, u = W.useMemo(() => ({ shouldForwardProp: s, styleSheet: o, stylis: i, stylisPlugins: c }), [s, o, i, c]);
  return W.createElement(vn.Provider, { value: u }, t.children);
}
const Xt = W.createContext(void 0);
Xt.Consumer;
function Cs() {
  const t = W.useContext(Xt);
  if (!t) throw et(18);
  return t;
}
function vs(t) {
  const e = W.useContext(Xt), n = W.useMemo(() => (function(r, o) {
    if (!r) throw et(14);
    if (te(r))
      return r(o);
    if (Array.isArray(r) || typeof r != "object") throw et(8);
    return o ? Object.assign(Object.assign({}, o), r) : r;
  })(t.theme, e), [t.theme, e]);
  return t.children ? W.createElement(Xt.Provider, { value: n }, t.children) : null;
}
const Fe = {};
function Ss(t, e) {
  const n = typeof t != "string" ? "sc" : Jr(t);
  Fe[n] = (Fe[n] || 0) + 1;
  const r = n + "-" + eo(Oe + n + Fe[n]);
  return e ? e + "-" + r : r;
}
function Es(t, e, n) {
  const r = io(t), o = t, i = !Xe(t), { attrs: s = gn, componentId: c = Ss(e.displayName, e.parentComponentId), displayName: u = Wi(t) } = e, a = e.displayName && e.componentId ? Jr(e.displayName) + "-" + e.componentId : e.componentId || c, f = r && o.attrs ? o.attrs.concat(s).filter(Boolean) : s;
  let { shouldForwardProp: p } = e;
  if (r && o.shouldForwardProp) {
    const g = o.shouldForwardProp;
    if (e.shouldForwardProp) {
      const C = e.shouldForwardProp;
      p = (S, d) => g(S, d) && C(S, d);
    } else p = g;
  }
  const l = new ps(n, a, r ? o.componentStyle : void 0);
  function h(g, C) {
    return (function(S, d, I) {
      const { attrs: L, componentStyle: w, defaultProps: x, foldedComponentIds: v, styledComponentId: $, target: Y } = S, P = W.useContext(Xt), H = mo(), kt = S.shouldForwardProp || H.shouldForwardProp, F = Hi(d, P, x) || Ot, [At, wo] = (function(Q, ht, ke) {
        const A = Object.assign(Object.assign({}, ht), { className: void 0, theme: ke });
        let Rt = null;
        const re = Q.length > 1;
        for (let st = 0; st < Q.length; st++) {
          const M = Q[st], Lt = te(M) ? M(re ? Object.assign({}, A) : A) : M;
          for (const V in Lt) V === "className" ? A.className = Ft(A.className, Lt[V]) : V === "style" ? A.style = Object.assign(Object.assign({}, A.style), Lt[V]) : Lt[V] === void 0 ? V in A && (A[V] !== void 0 && (Rt || (Rt = [])).push(V), A[V] = void 0) : A[V] = Lt[V];
        }
        return "className" in ht && typeof ht.className == "string" && (A.className = Ft(A.className, ht.className)), [A, Rt];
      })(L, d, F), En = w.generateAndInjectStyles(At, H.styleSheet, H.stylis), ne = At.as || Y, $n = Xe(ne), xe = (function(Q, ht, ke, A, Rt, re) {
        const st = {};
        for (const M in Q) M[0] === "$" || M === "as" || M === "theme" && Q.theme === ke || (M === "forwardedAs" ? Q.forwardedAs !== void 0 && (st.as = Q.forwardedAs) : Q[M] === void 0 ? M === "className" || Rt || re !== null && re.indexOf(M) !== -1 || A && !A(M, ht) || (st[M] = void 0) : A && !A(M, ht) || (st[M] = Q[M]));
        return st;
      })(At, ne, F, kt, $n, wo);
      let Te = Ft(v, $);
      return En && (Te += " " + En), At.className && (Te += " " + At.className), xe[$n && ne.includes("-") ? "class" : "className"] = Te, I && (xe.ref = I), U(ne, xe);
    })(m, g, C);
  }
  h.displayName = u;
  let m = W.forwardRef(h);
  return m.attrs = f, m.componentStyle = l, m.displayName = u, m.shouldForwardProp = p, m.foldedComponentIds = r ? Ft(o.foldedComponentIds, o.styledComponentId) : "", m.styledComponentId = a, m.target = r ? o.target : t, Object.defineProperty(m, "defaultProps", { get() {
    return this._foldedDefaultProps;
  }, set(g) {
    this._foldedDefaultProps = r ? (function(C, ...S) {
      for (const d of S) Qe(C, d, !0);
      return C;
    })({}, o.defaultProps, g) : g;
  } }), Cn(m, () => `.${m.styledComponentId}`), i && oo(m, t, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), m;
}
var $s = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "blockquote", "body", "button", "br", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "menu", "meter", "nav", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "slot", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use"]);
function nr(t, e) {
  const n = [t[0]];
  for (let r = 0, o = e.length; r < o; r += 1) n.push(e[r], t[r + 1]);
  return n;
}
const rr = (t) => (co.add(t), t);
function Sn(t, ...e) {
  if (te(t) || qt(t)) return rr(gt(nr(gn, [t, ...e])));
  const n = t;
  return e.length === 0 && n.length === 1 && typeof n[0] == "string" ? gt(n) : rr(gt(nr(n, e)));
}
function en(t, e, n = Ot) {
  if (!e) throw et(1, e);
  const r = (o, ...i) => t(e, n, Sn(o, ...i));
  return r.attrs = (o) => en(t, e, Object.assign(Object.assign({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) })), r.withConfig = (o) => en(t, e, Object.assign(Object.assign({}, n), o)), r;
}
const go = (t) => en(Es, t), z = go;
$s.forEach((t) => {
  z[t] = go(t);
});
var yo;
class bs {
  constructor(e, n) {
    this[yo] = !0, this.inject = (r, o = tn) => {
      const i = this.getName(o);
      if (!r.hasNameForId(this.id, i)) {
        const s = o(this.rules, i, "@keyframes");
        r.insertRules(this.id, i, s);
      }
    }, this.name = e, this.id = Qr + e, this.rules = n, Ut(this.id), Cn(this, () => {
      throw et(12, String(this.name));
    });
  }
  getName(e = tn) {
    return e.hash ? this.name + yn(+e.hash >>> 0) : this.name;
  }
}
function dt(t, ...e) {
  const n = Ke(Sn(t, ...e)), r = eo(n);
  return new bs(r, n);
}
yo = ao;
const Zt = br(void 0);
Zt.displayName = "ConfigurationContext";
function ee() {
  const t = _n(Zt);
  if (!t)
    throw new Error(
      `${Zt.displayName} must be used within a ${Zt.displayName} Provider`
    );
  return t;
}
function ws({
  children: t,
  configuration: e,
  videoElementSize: n
}) {
  const r = Jt(() => ({ ...e, videoElementSize: n }), [e, n]);
  return /* @__PURE__ */ _(Zt.Provider, { value: r, children: t });
}
const St = {
  CIRCLE_SOLID: "circle-solid",
  SQUARE_ROUNDED_DASH: "square-rounded-dash",
  SQUARE_ROUNDED_SOLID: "square-rounded-solid",
  SQUARE_DASH: "square-dash",
  SQUARE_SOLID: "square-solid"
}, Co = 14, Is = 0.0276;
var rt = /* @__PURE__ */ ((t) => (t[t.S = 300] = "S", t[t.M = 400] = "M", t[t.L = 500] = "L", t[t.Default = 600] = "Default", t))(rt || {});
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
}, ie = {
  loading: { text: "Loading. Please wait.", visible: !0 },
  waiting: { text: "Waiting for input...", visible: !0 }
}, Os = {
  [B.CANDIDATE_SELECTION]: "Stay still…",
  [B.FACE_TOO_CLOSE]: "Move back",
  [B.FACE_TOO_FAR]: "Move closer",
  [B.FACE_CENTERING]: "Center your face",
  [B.FACE_NOT_PRESENT]: "Position your face into the circle",
  [B.SHARPNESS_TOO_LOW]: "Turn face against light",
  [B.BRIGHTNESS_TOO_LOW]: "Turn face against light",
  [B.BRIGHTNESS_TOO_HIGH]: "Less light needed",
  [B.DEVICE_PITCHED]: "Hold your phone at eye level",
  [B.LEFT_EYE_NOT_PRESENT]: "Position your face into the circle",
  [B.RIGHT_EYE_NOT_PRESENT]: "Position your face into the circle",
  [B.MOUTH_SCORE_TOO_HIGH]: "Keep neutral expression",
  [B.MOUTH_SCORE_TOO_LOW]: "Smile :)",
  [B.MOUTH_NOT_PRESENT]: "Position your face into the circle"
}, Ns = {
  ...Os,
  [tt.SMILE]: "Smile :)",
  [tt.SMILE_CANDIDATE_SELECTION]: "Smile :)",
  [tt.KEEP_NEUTRAL_EXPRESSION]: "Keep neutral expression"
}, xs = {
  [tt.SMILE]: "Smile more!",
  [tt.KEEP_NEUTRAL_EXPRESSION]: "Don't smile"
}, Ts = "rgba(19, 19, 19, 0.5)", ks = 34;
function or(t, e) {
  return Math.max(e, e + (t - 400) * Is + 2);
}
const As = (t, e = Co) => t ? t.width < t.height ? or(t.width, e) : or(t.height, e) : e, Rs = (t) => t > rt.Default ? Bt[rt.Default] : t > rt.L ? Bt[rt.L] : t > rt.M ? Bt[rt.M] : Bt[rt.S], Ls = (t) => t ? Rs(t.width) : Bt[rt.Default];
function Ps() {
  const t = "https://fonts.googleapis.com/css?family=Montserrat:600";
  if (!document.querySelector(`link[href="${t}"]`)) {
    const n = document.createElement("link");
    n.href = t, n.rel = "stylesheet", document.head.appendChild(n);
  }
}
function Ms({
  currentInstruction: t,
  escalatedInstructions: e,
  instructions: n
}) {
  const { code: r, isEscalated: o } = t;
  if (r)
    return o && e && r in e ? e[r] : n[r];
}
function Ds(t, e) {
  return t ? `${t}, ${e}` : e;
}
const Hs = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, Us = {
  family: "Montserrat, Arial, sans-serif",
  weight: "600",
  style: "normal",
  minimumSize: Co
}, Mt = {
  colors: Hs,
  font: Us
}, Fs = (t) => t ? {
  ...Mt,
  ...t,
  colors: {
    ...Mt.colors,
    ...t.colors
  },
  font: {
    ...Mt.font,
    ...t.font,
    family: Ds(t.font?.family, Mt.font.family)
  }
} : Mt, Bs = (t, e) => ({
  ...t,
  font: {
    ...t.font,
    computedSize: As(e, t.font.minimumSize)
  }
}), js = ({ svgSize: t }) => /* @__PURE__ */ _("svg", { fill: "none", height: t, viewBox: "0 0 16 14", width: t, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ _(
  "path",
  {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), Ws = z.div`
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
`, Gs = z.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(t) => t.theme.colors.instructionTextColor};
`, zs = z.p`
  background: ${(t) => t.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(t) => `${t.theme.font.computedSize}px`};
  line-height: 1em;
  max-width: 80%;
`, he = ({ Icon: t, isCameraReady: e, position: n = "absolute", text: r }) => {
  const { font: o } = Cs();
  return /* @__PURE__ */ _(Ws, { $isCameraReady: e, $position: n, children: /* @__PURE__ */ _(Gs, { children: [
    t ? /* @__PURE__ */ _(t, { svgSize: o.computedSize * 2 }) : null,
    /* @__PURE__ */ _(zs, { children: r })
  ] }) });
}, vo = ({ text: t = "An unknown error has occurred" }) => /* @__PURE__ */ _(he, { Icon: js, position: "relative", text: t });
class Zs extends X {
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
    return this.state.hasError ? /* @__PURE__ */ _(vo, {}) : this.props.children;
  }
}
const Ys = z.div`
  font-family: ${(t) => t.theme.font.family};
  font-style: ${(t) => t.theme.font.style};
  font-weight: ${(t) => t.theme.font.weight};
`;
function Vs({
  children: t,
  uiConfiguration: e,
  videoElementSize: n
}) {
  it(() => {
    Ps();
  }, []);
  const r = Bs(e.styling.theme, n);
  return /* @__PURE__ */ _(ys, { target: e.styleTarget, children: /* @__PURE__ */ _(vs, { theme: r, children: /* @__PURE__ */ _(Ys, { children: /* @__PURE__ */ _(Zs, { children: /* @__PURE__ */ _(ws, { configuration: e, videoElementSize: n, children: t }) }) }) }) });
}
const qs = 0.75, Xs = "dot-auto-capture-video";
function $t(t, e) {
  const n = un(e);
  it(() => {
    n.current = e;
  }, [e]), it(
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
  const [e, n] = j(), r = ut(
    (o) => {
      n(o.detail?.size);
    },
    [n]
  );
  return $t(t, r), xt(() => {
    if (!e) {
      const o = document.getElementById(Xs);
      o && n(o.getBoundingClientRect());
    }
  }, [e, n]), e;
}
const So = (t, e) => Math.min(t, e), Qs = ({ height: t, width: e }, n) => {
  const r = So(e, t) * n, o = (e - r) / 2, i = (t - r) / 2;
  return {
    shiftX: o,
    shiftY: i,
    width: r,
    height: r
  };
}, Js = (t, e) => {
  const { height: n, shiftX: r, shiftY: o, width: i } = Qs(t, e);
  return {
    shiftX: r / t.width,
    shiftY: o / t.height,
    width: i / t.width,
    height: n / t.height
  };
};
function tc(t, e = 1) {
  return Js(
    t,
    qs * e
  );
}
const ec = (t, e) => {
  document.dispatchEvent(
    new CustomEvent(t, {
      detail: e
    })
  );
}, ir = (t, e) => {
  ec(t, {
    instruction: e
  });
};
async function nc() {
  return navigator.mediaDevices.enumerateDevices();
}
async function rc() {
  return (await nc()).filter((e) => e.kind === "videoinput");
}
const oc = () => {
  const [t, e] = j(!1);
  return it(() => {
    (async () => (await rc()).length > 1 && e(!0))();
  }, []), t;
}, ic = ({ size: t }) => /* @__PURE__ */ _("svg", { fill: "none", height: t, viewBox: "0 0 52 52", width: t, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }), sc = ({ size: t }) => /* @__PURE__ */ _("svg", { fill: "none", height: t, viewBox: "0 0 52 52", width: "52", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ _("circle", { cx: "26", cy: "26", fill: "#131313", fillOpacity: "0.3", r: "26" }),
  /* @__PURE__ */ _(
    "path",
    {
      d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
      fill: "white"
    }
  )
] }), Eo = z.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(t) => t.$marginLeft ? `${t.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, cc = ({ marginLeft: t, size: e, ...n }) => /* @__PURE__ */ _(Eo, { $marginLeft: t, ...n, children: /* @__PURE__ */ _(ic, { size: e }) }), ac = ({ marginLeft: t, size: e, ...n }) => /* @__PURE__ */ _(Eo, { $marginLeft: t, ...n, children: /* @__PURE__ */ _(sc, { size: e }) }), lc = z.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(t) => `${t.$padding}px`};
  z-index: 2;
`, uc = ({
  customControlEvent: t,
  isSwitchCameraDisabled: e
}) => {
  const {
    control: { showCameraButtons: n },
    videoElementSize: r
  } = ee(), o = oc();
  if (!n)
    return null;
  const { buttonPadding: i, iconSize: s, marginLeft: c } = Ls(r);
  return /* @__PURE__ */ _(lc, { $padding: i, children: [
    o && /* @__PURE__ */ _(ac, { disabled: e, onClick: () => {
      ir(t, Nn.SWITCH_CAMERA);
    }, size: s }),
    /* @__PURE__ */ _(
      cc,
      {
        marginLeft: o ? c : 0,
        onClick: () => {
          ir(t, Nn.TOGGLE_MIRROR);
        },
        size: s
      }
    )
  ] });
}, _c = "2.5s", fc = "0.3s", dc = "linear", hc = dt`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
dt`
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`;
dt`
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
dt`
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
const pc = z.div`
  position: absolute;
  left: 0;
  right: 0;

  ${(t) => t.$cssTop ? `top: ${t.$cssTop}%;` : ""}
  ${(t) => t.$cssBottom ? `bottom: ${t.$cssBottom}%;` : ""}
    ${(t) => t.$isAnimating && Sn`
      animation: ${hc} ${fc}
        ${dc} both;
      animation-delay: ${_c};

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
`, mc = z.div`
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
`, gc = ({
  children: t,
  cssBottom: e,
  cssTop: n,
  isAnimating: r,
  isInCandidateSelection: o,
  isPortrait: i
}) => /* @__PURE__ */ _(pc, { $cssBottom: e, $cssTop: n, $isAnimating: r, $isPortrait: i, children: /* @__PURE__ */ _(
  mc,
  {
    $isInCandidateSelection: o,
    $wrap: t.length > ks,
    children: t
  }
) }), yc = z.div`
  color: ${(t) => t.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, sr = ({ svgSize: t }) => /* @__PURE__ */ _(yc, { children: /* @__PURE__ */ _("svg", { fill: "none", height: t, viewBox: "0 0 48 48", width: t, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }) }), Cc = z.div`
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
`, $o = ({ children: t, height: e, scale: n, width: r }) => {
  const {
    styling: { backdropColor: o }
  } = ee(), i = So(r, e);
  return /* @__PURE__ */ _(Cc, { $backdropColor: o, $scale: n, $shorterSide: i, children: /* @__PURE__ */ _("svg", { viewBox: `0 0 ${r} ${e}`, children: [
    /* @__PURE__ */ _("defs", { children: /* @__PURE__ */ _("mask", { id: "mask", children: [
      /* @__PURE__ */ _("rect", { fill: "#fff", height: "100%", width: "100%" }),
      /* @__PURE__ */ _("g", { children: t })
    ] }) }),
    /* @__PURE__ */ _("rect", { fill: o, height: "100%", mask: "url(#mask)", width: "100%" })
  ] }) });
};
function vc({ cameraHeight: t, cameraWidth: e, isBackdrop: n, state: r }) {
  const { appStateInstructions: o } = ee(), i = r === D.ERROR || r === D.RUNNING;
  return !r || i || !o?.[r]?.visible ? null : r === D.WAITING || r === D.COMPLETE ? /* @__PURE__ */ _(G, { children: [
    n && t && e && /* @__PURE__ */ _($o, { height: t, width: e }),
    /* @__PURE__ */ _(he, { isCameraReady: !0, text: o[D.WAITING].text })
  ] }) : r === D.BLURRED ? /* @__PURE__ */ _(G, { children: /* @__PURE__ */ _(he, { Icon: sr, isCameraReady: !0, text: o[D.BLURRED].text }) }) : /* @__PURE__ */ _(he, { Icon: sr, isCameraReady: !0, text: o[D.LOADING].text });
}
function Sc({ isRounded: t, isSquare: e, ...n }) {
  return t ? /* @__PURE__ */ _("rect", { fill: "#000", ...n, rx: "2%" }) : /* @__PURE__ */ _("rect", { fill: "#000", ...n, rx: e ? "0" : "50%" });
}
const Ec = () => /* @__PURE__ */ _("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ _(
  "path",
  {
    d: "M2 240C2 108.556 108.556 2 240 2C371.444 2 478 108.556 478 240C478 371.444 371.444 478 240 478C108.556 478 2 371.444 2 240Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  }
) });
function $c() {
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
function bc() {
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
function wc() {
  return /* @__PURE__ */ _("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ _("rect", { height: "476", rx: "14", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "4", width: "476", x: "2", y: "2" }) });
}
function Ic() {
  return /* @__PURE__ */ _("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ _("rect", { height: "476", rx: "2", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "4", width: "476", x: "2", y: "2" }) });
}
const Oc = z.div`
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
`, Nc = ({
  children: t,
  className: e,
  isInCandidateSelection: n,
  onAnimationEnd: r,
  placeholderRectangle: o,
  scale: i
}) => /* @__PURE__ */ _(
  Oc,
  {
    $isInCandidateSelection: n,
    $placeholderRectangle: o,
    $scale: i,
    className: e,
    onAnimationEnd: r,
    children: t
  }
), xc = {
  [St.CIRCLE_SOLID]: /* @__PURE__ */ _(Ec, {}),
  [St.SQUARE_ROUNDED_DASH]: /* @__PURE__ */ _(bc, {}),
  [St.SQUARE_ROUNDED_SOLID]: /* @__PURE__ */ _(wc, {}),
  [St.SQUARE_DASH]: /* @__PURE__ */ _($c, {}),
  [St.SQUARE_SOLID]: /* @__PURE__ */ _(Ic, {})
};
function Tc({ backdropHeight: t, backdropWidth: e, isBackdrop: n, placeholderRectangle: r, ...o }) {
  const { placeholder: i } = ee(), s = i.toLowerCase().includes("square"), c = i.toLowerCase().includes("rounded");
  return /* @__PURE__ */ _(G, { children: [
    n && /* @__PURE__ */ _($o, { height: t, width: e, children: /* @__PURE__ */ _(
      Sc,
      {
        height: `${r.height * 100}%`,
        isRounded: c,
        isSquare: s,
        width: `${r.width * 100}%`,
        x: `${r.shiftX * 100}%`,
        y: `${r.shiftY * 100}%`
      }
    ) }),
    /* @__PURE__ */ _(Nc, { placeholderRectangle: r, ...o, children: xc[i] })
  ] });
}
function kc({ eventName: t }) {
  const [e, n] = j([]), r = ut(
    (o) => {
      const i = o.detail?.instructionCode;
      i && n((s) => [...s, i]);
    },
    [n]
  );
  return $t(t, r), {
    escalatedInstructionCodes: e
  };
}
function Ac({
  customEvents: t,
  defaultInstructionCode: e
}) {
  const [n, r] = j(), [o, i] = j(!1), s = ut(
    (g) => {
      r(g?.detail?.cameraResolution);
      const C = g?.detail?.isMirroring;
      C !== void 0 && i(C);
    },
    [r]
  );
  $t(t.CAMERA_PROPS_CHANGED, s);
  const [c, u] = j({
    code: e,
    isEscalated: !1
  }), a = ut(
    (g) => {
      const C = g;
      u({
        code: C?.detail?.instructionCode,
        isEscalated: C?.detail?.isEscalated ?? !1
      });
    },
    [u]
  );
  $t(t.INSTRUCTION_CHANGED, a);
  const [f, p] = j(D.LOADING), [l, h] = j(), m = ut(
    (g) => {
      p(g.detail?.appState);
      const C = g?.detail?.error;
      C && h(C);
    },
    [p, h]
  );
  return $t(t.STATE_CHANGED, m), {
    cameraResolution: n,
    instruction: c,
    isMirroring: o,
    appState: f,
    error: l
  };
}
function Rc() {
  const t = Ac({
    customEvents: Yt,
    defaultInstructionCode: tt.FACE_NOT_PRESENT
  }), [e, n] = j(Ce.NEUTRAL), r = ut((o) => {
    const i = o, { phaseName: s } = i.detail;
    n(s);
  }, []);
  return $t(Yt.PHASE_CHANGED, r), {
    ...t,
    phase: e
  };
}
const cr = ".3s", Lc = ".2s", Pc = ".8s", ar = ".4s", lr = ".4s", Mc = ".5s", Dc = "1.5s", Hc = 2e3, ur = dt`
0%, 100% {
    transform: scale(1);
}
50% {
    transform: scale(2);
}
`, Uc = dt`
0%, 100% {
    transform: scale(1,1);
    opacity: 1;
}
50% {
    transform: scale(1,0.1);
    opacity: 0.5;
}
`, _r = dt`
0% {
    stroke-dashoffset: 100;
}
100% {
    stroke-dashoffset: 200;
}
`, bo = dt`
 from {
    opacity: 1;
}
to {
    opacity: 0;
}
`, Fc = (t, e) => {
  const [n, r] = j(!1);
  return it(() => {
    if (e !== Ce.SMILE) {
      r(!1);
      return;
    }
    r(!0);
    const o = setTimeout(() => {
      r(!1);
    }, Hc);
    return () => clearTimeout(o);
  }, [e]), e === Ce.SMILE && t === tt.CANDIDATE_SELECTION ? tt.SMILE_CANDIDATE_SELECTION : n ? tt.SMILE : t;
}, Bc = z.div`
  position: absolute;
  top: ${(t) => t.$initialPosition.shiftY * 100}%;
  bottom: ${(t) => (1 - t.$initialPosition.shiftY - t.$initialPosition.height) * 100}%;
  left: ${(t) => t.$initialPosition.shiftX * 100}%;
  right: ${(t) => (1 - t.$initialPosition.shiftX - t.$initialPosition.width) * 100}%;
  animation: ${bo} ${Mc} ${Dc} ease-in-out;
  animation-fill-mode: forwards;
  z-index: 1;

  #left-mouth {
    fill: none;
    stroke: #ffffff;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: ${_r} ${ar} ${lr} forwards;
  }
  #right-mouth {
    fill: none;
    stroke: #ffffff;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    transform: scale(-1, 1);
    transform-origin: 119.4px 191.7px;
    animation: ${_r} ${ar} ${lr} forwards;
  }
  #left-eye {
    transform-origin: 86.8px 96px;
    fill: #ffffff;
    animation: ${ur} ${cr} forwards;
  }
  #right-eye {
    transform-origin: 173.2px 96px;
    fill: #ffffff;
    animation:
      ${ur} ${cr} forwards,
      ${Uc} ${Lc} ${Pc} forwards;
  }
`, jc = ({ animate: t, initialPosition: e, show: n }) => {
  const [r, o] = j(!0);
  return it(() => {
    (t || n) && o(!0);
  }, [t, n]), !r || !n ? null : /* @__PURE__ */ _(
    Bc,
    {
      $initialPosition: e,
      onAnimationEnd: (i) => i.animationName === bo.getName() && o(!1),
      children: /* @__PURE__ */ _("svg", { viewBox: "0 0 260 260", children: [
        /* @__PURE__ */ _("circle", { cx: "86.8", cy: "96", id: "left-eye", r: "9.6" }),
        /* @__PURE__ */ _("circle", { cx: "173.2", cy: "96", id: "right-eye", r: "9.6" }),
        /* @__PURE__ */ _("path", { d: "M62.8,156.3c0,0,20.4,35.4,66.6,35.4", id: "left-mouth" }),
        /* @__PURE__ */ _("path", { d: "M42.8,156.3c0,0,20.4,35.4,66.6,35.4", id: "right-mouth" })
      ] })
    }
  );
}, Wc = () => {
  const { appState: t, cameraResolution: e, error: n, instruction: r, phase: o } = Rc(), i = Fc(r.code, o), { escalatedInstructionCodes: s } = kc({
    eventName: Yt.INSTRUCTION_ESCALATED
  }), { escalatedInstructions: c, instructions: u } = ee(), a = r.code === tt.CANDIDATE_SELECTION, f = Ms({
    escalatedInstructions: c,
    instructions: u,
    currentInstruction: {
      ...r,
      code: i
    }
  });
  if (t === D.ERROR)
    return /* @__PURE__ */ _(vo, { text: n?.message });
  if ((t === D.RUNNING || t === D.WAITING) && e) {
    const p = tc(e);
    return /* @__PURE__ */ _(G, { children: [
      /* @__PURE__ */ _(
        Tc,
        {
          backdropHeight: e.height,
          backdropWidth: e.width,
          isBackdrop: !0,
          isInCandidateSelection: a,
          placeholderRectangle: p
        }
      ),
      /* @__PURE__ */ _(
        jc,
        {
          animate: s.includes("mouth_score_too_low"),
          initialPosition: p,
          show: o === Ce.SMILE
        }
      ),
      f && /* @__PURE__ */ _(
        gc,
        {
          cssBottom: (p.height + p.shiftY) * 100,
          isAnimating: !1,
          isInCandidateSelection: a,
          isPortrait: e.width < e.height,
          children: f
        }
      ),
      /* @__PURE__ */ _(uc, { customControlEvent: Yt.CONTROL, isSwitchCameraDisabled: a })
    ] });
  }
  return /* @__PURE__ */ _(
    vc,
    {
      cameraHeight: e?.height,
      cameraWidth: e?.width,
      isBackdrop: !0,
      state: t
    }
  );
};
function Gc(t) {
  const e = {
    ...Ns,
    ...t?.instructions
  }, n = {
    ...xs,
    ...t?.escalatedInstructions
  };
  e.mouth_score_too_low = e.smile, n.mouth_score_too_low = n.smile, e.mouth_score_too_high = e.keep_neutral_expression, n.mouth_score_too_high = n.keep_neutral_expression;
  const r = {
    [D.LOADING]: {
      ...ie.loading,
      ...t?.appStateInstructions?.loading
    },
    [D.WAITING]: {
      ...ie.waiting,
      ...t?.appStateInstructions?.waiting
    },
    [D.COMPLETE]: {
      ...ie.waiting,
      ...t?.appStateInstructions?.waiting
    },
    // TODO: on Major release version, use specific app state instructions for blurred state
    [D.BLURRED]: {
      ...ie.loading,
      ...t?.appStateInstructions?.loading
    }
  }, o = {
    ...t?.styling,
    backdropColor: t?.styling?.backdropColor ?? Ts,
    theme: Fs(t?.styling?.theme)
  }, i = {
    showCameraButtons: t?.control?.showCameraButtons ?? !1
  };
  return {
    placeholder: St.CIRCLE_SOLID,
    instructions: e,
    appStateInstructions: r,
    escalatedInstructions: n,
    styling: o,
    control: i
  };
}
const zc = ({ configuration: t }) => {
  const e = Ks(Yt.VIDEO_ELEMENT_SIZE);
  return /* @__PURE__ */ _(Vs, { uiConfiguration: Gc(t), videoElementSize: e, children: /* @__PURE__ */ _(Wc, {}) });
};
Po(zc, "x-dot-smile-liveness-ui", ["configuration"]);
