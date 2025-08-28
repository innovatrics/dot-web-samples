var bo = Object.defineProperty;
var So = (e, t, n) => t in e ? bo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var et = (e, t, n) => So(e, typeof t != "symbol" ? t + "" : t, n);
var Ze, w, _r, ue, En, hr, pr, mr, on, Ht, Ut, gr, Ge = {}, yr = [], Eo = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ye = Array.isArray;
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
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ze.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) a[i] == null && (a[i] = e.defaultProps[i]);
  return Fe(e, a, r, o, null);
}
function Fe(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++_r, __i: -1, __u: 0 };
  return o == null && w.vnode != null && w.vnode(i), i;
}
function $o() {
  return { current: null };
}
function V(e) {
  return e.children;
}
function j(e, t) {
  this.props = e, this.context = t;
}
function Ee(e, t) {
  if (t == null) return e.__ ? Ee(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? Ee(e) : null;
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
  (!e.__d && (e.__d = !0) && ue.push(e) && !_t.__r++ || En != w.debounceRendering) && ((En = w.debounceRendering) || hr)(_t);
}
function _t() {
  for (var e, t, n, r, o, i, a, s = 1; ue.length; ) ue.length > s && ue.sort(pr), e = ue.shift(), s = ue.length, e.__d && (n = void 0, o = (r = (t = e).__v).__e, i = [], a = [], t.__P && ((n = q({}, r)).__v = r.__v + 1, w.vnode && w.vnode(n), sn(t.__P, n, r, t.__n, t.__P.namespaceURI, 32 & r.__u ? [o] : null, i, o ?? Ee(r), !!(32 & r.__u), a), n.__v = r.__v, n.__.__k[n.__i] = n, br(i, n, a), n.__e != o && vr(n)));
  _t.__r = 0;
}
function Cr(e, t, n, r, o, i, a, s, l, u, d) {
  var c, h, f, p, y, v, m = r && r.__k || yr, g = t.length;
  for (l = No(n, t, m, l, g), c = 0; c < g; c++) (f = n.__k[c]) != null && (h = f.__i == -1 ? Ge : m[f.__i] || Ge, f.__i = c, v = sn(e, f, h, o, i, a, s, l, u, d), p = f.__e, f.ref && h.ref != f.ref && (h.ref && cn(h.ref, null, f), d.push(f.ref, f.__c || p, f)), y == null && p != null && (y = p), 4 & f.__u || h.__k === f.__k ? l = wr(f, l, e) : typeof f.type == "function" && v !== void 0 ? l = v : p && (l = p.nextSibling), f.__u &= -7);
  return n.__e = y, l;
}
function No(e, t, n, r, o) {
  var i, a, s, l, u, d = n.length, c = d, h = 0;
  for (e.__k = new Array(o), i = 0; i < o; i++) (a = t[i]) != null && typeof a != "boolean" && typeof a != "function" ? (l = i + h, (a = e.__k[i] = typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? Fe(null, a, null, null, null) : Ye(a) ? Fe(V, { children: a }, null, null, null) : a.constructor == null && a.__b > 0 ? Fe(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a).__ = e, a.__b = e.__b + 1, s = null, (u = a.__i = ko(a, n, l, c)) != -1 && (c--, (s = n[u]) && (s.__u |= 2)), s == null || s.__v == null ? (u == -1 && (o > d ? h-- : o < d && h++), typeof a.type != "function" && (a.__u |= 4)) : u != l && (u == l - 1 ? h-- : u == l + 1 ? h++ : (u > l ? h-- : h++, a.__u |= 4))) : e.__k[i] = null;
  if (c) for (i = 0; i < d; i++) (s = n[i]) != null && (2 & s.__u) == 0 && (s.__e == r && (r = Ee(s)), Er(s, s));
  return r;
}
function wr(e, t, n) {
  var r, o;
  if (typeof e.type == "function") {
    for (r = e.__k, o = 0; r && o < r.length; o++) r[o] && (r[o].__ = e, t = wr(r[o], t, n));
    return t;
  }
  e.__e != t && (t && e.type && !n.contains(t) && (t = Ee(e)), n.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function ee(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Ye(e) ? e.some(function(n) {
    ee(n, t);
  }) : t.push(e)), t;
}
function ko(e, t, n, r) {
  var o, i, a = e.key, s = e.type, l = t[n];
  if (l === null && e.key == null || l && a == l.key && s == l.type && (2 & l.__u) == 0) return n;
  if (r > (l != null && (2 & l.__u) == 0 ? 1 : 0)) for (o = n - 1, i = n + 1; o >= 0 || i < t.length; ) {
    if (o >= 0) {
      if ((l = t[o]) && (2 & l.__u) == 0 && a == l.key && s == l.type) return o;
      o--;
    }
    if (i < t.length) {
      if ((l = t[i]) && (2 & l.__u) == 0 && a == l.key && s == l.type) return i;
      i++;
    }
  }
  return -1;
}
function $n(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || Eo.test(t) ? n : n + "px";
}
function tt(e, t, n, r, o) {
  var i;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || $n(e.style, t, "");
    if (n) for (t in n) r && n[t] == r[t] || $n(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace(mr, "$1")), t = t.toLowerCase() in e || t == "onFocusOut" || t == "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = on, e.addEventListener(t, i ? Ut : Ht, i)) : e.removeEventListener(t, i ? Ut : Ht, i);
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
function Nn(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t.t == null) t.t = on++;
      else if (t.t < n.u) return;
      return n(w.event ? w.event(t) : t);
    }
  };
}
function sn(e, t, n, r, o, i, a, s, l, u) {
  var d, c, h, f, p, y, v, m, g, N, E, x, S, C, D, H, Re, U = t.type;
  if (t.constructor != null) return null;
  128 & n.__u && (l = !!(32 & n.__u), i = [s = t.__e = n.__e]), (d = w.__b) && d(t);
  e: if (typeof U == "function") try {
    if (m = t.props, g = "prototype" in U && U.prototype.render, N = (d = U.contextType) && r[d.__c], E = d ? N ? N.props.value : d.__ : r, n.__c ? v = (c = t.__c = n.__c).__ = c.__E : (g ? t.__c = c = new U(m, E) : (t.__c = c = new j(m, E), c.constructor = U, c.render = To), N && N.sub(c), c.props = m, c.state || (c.state = {}), c.context = E, c.__n = r, h = c.__d = !0, c.__h = [], c._sb = []), g && c.__s == null && (c.__s = c.state), g && U.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = q({}, c.__s)), q(c.__s, U.getDerivedStateFromProps(m, c.__s))), f = c.props, p = c.state, c.__v = t, h) g && U.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), g && c.componentDidMount != null && c.__h.push(c.componentDidMount);
    else {
      if (g && U.getDerivedStateFromProps == null && m !== f && c.componentWillReceiveProps != null && c.componentWillReceiveProps(m, E), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(m, c.__s, E) === !1 || t.__v == n.__v) {
        for (t.__v != n.__v && (c.props = m, c.state = c.__s, c.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(ce) {
          ce && (ce.__ = t);
        }), x = 0; x < c._sb.length; x++) c.__h.push(c._sb[x]);
        c._sb = [], c.__h.length && a.push(c);
        break e;
      }
      c.componentWillUpdate != null && c.componentWillUpdate(m, c.__s, E), g && c.componentDidUpdate != null && c.__h.push(function() {
        c.componentDidUpdate(f, p, y);
      });
    }
    if (c.context = E, c.props = m, c.__P = e, c.__e = !1, S = w.__r, C = 0, g) {
      for (c.state = c.__s, c.__d = !1, S && S(t), d = c.render(c.props, c.state, c.context), D = 0; D < c._sb.length; D++) c.__h.push(c._sb[D]);
      c._sb = [];
    } else do
      c.__d = !1, S && S(t), d = c.render(c.props, c.state, c.context), c.state = c.__s;
    while (c.__d && ++C < 25);
    c.state = c.__s, c.getChildContext != null && (r = q(q({}, r), c.getChildContext())), g && !h && c.getSnapshotBeforeUpdate != null && (y = c.getSnapshotBeforeUpdate(f, p)), H = d, d != null && d.type === V && d.key == null && (H = Sr(d.props.children)), s = Cr(e, Ye(H) ? H : [H], t, n, r, o, i, a, s, l, u), c.base = t.__e, t.__u &= -161, c.__h.length && a.push(c), v && (c.__E = c.__ = null);
  } catch (ce) {
    if (t.__v = null, l || i != null) if (ce.then) {
      for (t.__u |= l ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
      i[i.indexOf(s)] = null, t.__e = s;
    } else for (Re = i.length; Re--; ) an(i[Re]);
    else t.__e = n.__e, t.__k = n.__k;
    w.__e(ce, t, n);
  }
  else i == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : s = t.__e = xo(n.__e, t, n, r, o, i, a, l, u);
  return (d = w.diffed) && d(t), 128 & t.__u ? void 0 : s;
}
function br(e, t, n) {
  for (var r = 0; r < n.length; r++) cn(n[r], n[++r], n[++r]);
  w.__c && w.__c(t, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      w.__e(i, o.__v);
    }
  });
}
function Sr(e) {
  return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : Ye(e) ? e.map(Sr) : q({}, e);
}
function xo(e, t, n, r, o, i, a, s, l) {
  var u, d, c, h, f, p, y, v = n.props, m = t.props, g = t.type;
  if (g == "svg" ? o = "http://www.w3.org/2000/svg" : g == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (u = 0; u < i.length; u++) if ((f = i[u]) && "setAttribute" in f == !!g && (g ? f.localName == g : f.nodeType == 3)) {
      e = f, i[u] = null;
      break;
    }
  }
  if (e == null) {
    if (g == null) return document.createTextNode(m);
    e = document.createElementNS(o, g, m.is && m), s && (w.__m && w.__m(t, i), s = !1), i = null;
  }
  if (g == null) v === m || s && e.data == m || (e.data = m);
  else {
    if (i = i && Ze.call(e.childNodes), v = n.props || Ge, !s && i != null) for (v = {}, u = 0; u < e.attributes.length; u++) v[(f = e.attributes[u]).name] = f.value;
    for (u in v) if (f = v[u], u != "children") {
      if (u == "dangerouslySetInnerHTML") c = f;
      else if (!(u in m)) {
        if (u == "value" && "defaultValue" in m || u == "checked" && "defaultChecked" in m) continue;
        tt(e, u, null, f, o);
      }
    }
    for (u in m) f = m[u], u == "children" ? h = f : u == "dangerouslySetInnerHTML" ? d = f : u == "value" ? p = f : u == "checked" ? y = f : s && typeof f != "function" || v[u] === f || tt(e, u, f, v[u], o);
    if (d) s || c && (d.__html == c.__html || d.__html == e.innerHTML) || (e.innerHTML = d.__html), t.__k = [];
    else if (c && (e.innerHTML = ""), Cr(t.type == "template" ? e.content : e, Ye(h) ? h : [h], t, n, r, g == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, a, i ? i[0] : n.__k && Ee(n, 0), s, l), i != null) for (u = i.length; u--; ) an(i[u]);
    s || (u = "value", g == "progress" && p == null ? e.removeAttribute("value") : p != null && (p !== e[u] || g == "progress" && !p || g == "option" && p != v[u]) && tt(e, u, p, v[u], o), u = "checked", y != null && y != e[u] && tt(e, u, y, v[u], o));
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
    w.__e(o, n);
  }
}
function Er(e, t, n) {
  var r, o;
  if (w.unmount && w.unmount(e), (r = e.ref) && (r.current && r.current != e.__e || cn(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (i) {
      w.__e(i, t);
    }
    r.base = r.__P = null;
  }
  if (r = e.__k) for (o = 0; o < r.length; o++) r[o] && Er(r[o], t, n || typeof e.type != "function");
  n || an(e.__e), e.__c = e.__ = e.__e = void 0;
}
function To(e, t, n) {
  return this.constructor(e, n);
}
function ae(e, t, n) {
  var r, o, i, a;
  t == document && (t = document.documentElement), w.__ && w.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], a = [], sn(t, e = (!r && n || t).__k = L(V, null, [e]), o || Ge, Ge, t.namespaceURI, !r && n ? [n] : o ? null : t.firstChild ? Ze.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, a), br(i, e, a);
}
function ln(e, t) {
  ae(e, t, ln);
}
function un(e, t, n) {
  var r, o, i, a, s = q({}, e.props);
  for (i in e.type && e.type.defaultProps && (a = e.type.defaultProps), t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i] == null && a != null ? a[i] : t[i];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? Ze.call(arguments, 2) : n), Fe(e.type, s, r || e.key, o || e.ref, null);
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
Ze = yr.slice, w = { __e: function(e, t, n, r) {
  for (var o, i, a; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), a = o.__d), a) return o.__E = o;
  } catch (s) {
    e = s;
  }
  throw e;
} }, _r = 0, j.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = q({}, this.state), typeof e == "function" && (e = e(q({}, n), this.props)), e && q(n, e), e != null && this.__v && (t && this._sb.push(t), Bt(this));
}, j.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Bt(this));
}, j.prototype.render = V, ue = [], hr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, pr = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, _t.__r = 0, mr = /(PointerCapture)$|Capture$/i, on = 0, Ht = Nn(!1), Ut = Nn(!0), gr = 0;
function fn() {
  return (fn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var Oo = ["context", "children"];
function Io(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, n = function(r, o) {
    if (r == null) return {};
    var i, a, s = {}, l = Object.keys(r);
    for (a = 0; a < l.length; a++) o.indexOf(i = l[a]) >= 0 || (s[i] = r[i]);
    return s;
  }(e, Oo);
  return un(t, n);
}
function Ao() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = L(Io, fn({}, this._props, { context: e.detail.context }), function t(n, r) {
    if (n.nodeType === 3) return n.data;
    if (n.nodeType !== 1) return null;
    var o = [], i = {}, a = 0, s = n.attributes, l = n.childNodes;
    for (a = s.length; a--; ) s[a].name !== "slot" && (i[s[a].name] = s[a].value, i[Nr(s[a].name)] = s[a].value);
    for (a = l.length; a--; ) {
      var u = t(l[a], null), d = l[a].slot;
      d ? i[d] = L(kn, { name: d }, u) : o[a] = u;
    }
    var c = r ? L(kn, null, o) : o;
    return L(r || n.nodeName.toLowerCase(), i, c);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? ln : ae)(this._vdom, this._root);
}
function Nr(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function Ro(e, t, n) {
  if (this._vdom) {
    var r = {};
    r[e] = n = n ?? void 0, r[Nr(e)] = n, this._vdom = un(this._vdom, r), ae(this._vdom, this._root);
  }
}
function Po() {
  ae(this._vdom = null, this._root);
}
function kn(e, t) {
  var n = this;
  return L("slot", fn({}, e, { ref: function(r) {
    r ? (n.ref = r, n._listener || (n._listener = function(o) {
      o.stopPropagation(), o.detail.context = t;
    }, r.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function Lo(e, t, n, r) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = e, i._root = i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = Ao, o.prototype.attributeChangedCallback = Ro, o.prototype.disconnectedCallback = Po, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = n, n.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom.props[i];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(i, null, a) : (this._props || (this._props = {}), this._props[i] = a, this.connectedCallback());
      var s = typeof a;
      a != null && s !== "string" && s !== "boolean" && s !== "number" || this.setAttribute(i, a);
    } });
  }), customElements.define(t, o);
}
var Do = 0;
function _(e, t, n, r, o, i) {
  t || (t = {});
  var a, s, l = t;
  if ("ref" in l) for (s in l = {}, t) s == "ref" ? a = t[s] : l[s] = t[s];
  var u = { type: e, props: l, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Do, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (a = e.defaultProps)) for (s in a) l[s] === void 0 && (l[s] = a[s]);
  return w.vnode && w.vnode(u), u;
}
const xn = {
  SWITCH_CAMERA: "switch-camera",
  TOGGLE_MIRROR: "toggle-mirror"
};
var kr = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", e.CONTROL = "document-auto-capture:control", e.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", e.DOCUMENT_DETECTION = "document-auto-capture:document-detection", e.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", e.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", e.STATE_CHANGED = "document-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", e))(kr || {}), _e = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", e.CONTROL = "palm-capture:control", e.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", e.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", e.STATE_CHANGED = "palm-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", e))(_e || {});
const Y = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  WAITING: "WAITING",
  RUNNING: "RUNNING"
}, z = {
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
var se, O, It, Tn, $e = 0, xr = [], I = w, On = I.__b, In = I.__r, An = I.diffed, Rn = I.__c, Pn = I.unmount, Ln = I.__;
function Oe(e, t) {
  I.__h && I.__h(O, e, $e || t), $e = 0;
  var n = O.__H || (O.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function F(e) {
  return $e = 1, dn(Ir, e);
}
function dn(e, t, n) {
  var r = Oe(se++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Ir(void 0, t), function(s) {
    var l = r.__N ? r.__N[0] : r.__[0], u = r.t(l, s);
    l !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = O, !O.__f)) {
    var o = function(s, l, u) {
      if (!r.__c.__H) return !0;
      var d = r.__c.__H.__.filter(function(h) {
        return !!h.__c;
      });
      if (d.every(function(h) {
        return !h.__N;
      })) return !i || i.call(this, s, l, u);
      var c = r.__c.props !== s;
      return d.forEach(function(h) {
        if (h.__N) {
          var f = h.__[0];
          h.__ = h.__N, h.__N = void 0, f !== h.__[0] && (c = !0);
        }
      }), i && i.call(this, s, l, u) || c;
    };
    O.__f = !0;
    var i = O.shouldComponentUpdate, a = O.componentWillUpdate;
    O.componentWillUpdate = function(s, l, u) {
      if (this.__e) {
        var d = i;
        i = void 0, o(s, l, u), i = d;
      }
      a && a.call(this, s, l, u);
    }, O.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function ne(e, t) {
  var n = Oe(se++, 3);
  !I.__s && _n(n.__H, t) && (n.__ = e, n.u = t, O.__H.__h.push(n));
}
function Ie(e, t) {
  var n = Oe(se++, 4);
  !I.__s && _n(n.__H, t) && (n.__ = e, n.u = t, O.__h.push(n));
}
function qe(e) {
  return $e = 5, te(function() {
    return { current: e };
  }, []);
}
function Tr(e, t, n) {
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
  var n = Oe(se++, 7);
  return _n(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function he(e, t) {
  return $e = 8, te(function() {
    return e;
  }, t);
}
function Xe(e) {
  var t = O.context[e.__c], n = Oe(se++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(O)), t.props.value) : e.__;
}
function ht(e, t) {
  I.useDebugValue && I.useDebugValue(t ? t(e) : e);
}
function Or() {
  var e = Oe(se++, 11);
  if (!e.__) {
    for (var t = O.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function Mo() {
  for (var e; e = xr.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(at), e.__H.__h.forEach(zt), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], I.__e(t, e.__v);
  }
}
I.__b = function(e) {
  O = null, On && On(e);
}, I.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Ln && Ln(e, t);
}, I.__r = function(e) {
  In && In(e), se = 0;
  var t = (O = e.__c).__H;
  t && (It === O ? (t.__h = [], O.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.forEach(at), t.__h.forEach(zt), t.__h = [], se = 0)), It = O;
}, I.diffed = function(e) {
  An && An(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (xr.push(t) !== 1 && Tn === I.requestAnimationFrame || ((Tn = I.requestAnimationFrame) || Ho)(Mo)), t.__H.__.forEach(function(n) {
    n.u && (n.__H = n.u), n.u = void 0;
  })), It = O = null;
}, I.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(at), n.__h = n.__h.filter(function(r) {
        return !r.__ || zt(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], I.__e(r, n.__v);
    }
  }), Rn && Rn(e, t);
}, I.unmount = function(e) {
  Pn && Pn(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      at(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && I.__e(t, n.__v));
};
var Dn = typeof requestAnimationFrame == "function";
function Ho(e) {
  var t, n = function() {
    clearTimeout(r), Dn && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  Dn && (t = requestAnimationFrame(n));
}
function at(e) {
  var t = O, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), O = t;
}
function zt(e) {
  var t = O;
  e.__c = e.__(), O = t;
}
function _n(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function Ir(e, t) {
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
function ge(e, t, n) {
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
var Bo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, zo = /* @__PURE__ */ Uo(
  function(e) {
    return Bo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Ar(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Ft(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function Rr(e, t) {
  var n = t(), r = F({ t: { __: n, u: t } }), o = r[0].t, i = r[1];
  return Ie(function() {
    o.__ = n, o.u = t, At(o) && i({ t: o });
  }, [e, n, t]), ne(function() {
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
function Pr(e) {
  e();
}
function Lr(e) {
  return e;
}
function Dr() {
  return [!1, Pr];
}
var Mr = Ie;
function Wt(e, t) {
  this.props = e, this.context = t;
}
function Fo(e, t) {
  function n(o) {
    var i = this.props.ref, a = i == o.ref;
    return !a && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !a : Ft(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, L(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(Wt.prototype = new j()).isPureReactComponent = !0, Wt.prototype.shouldComponentUpdate = function(e, t) {
  return Ft(this.props, e) || Ft(this.state, t);
};
var Mn = w.__b;
w.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Mn && Mn(e);
};
var Wo = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function jo(e) {
  function t(n) {
    var r = Ar({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = Wo, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Hn = function(e, t) {
  return e == null ? null : ee(ee(e).map(t));
}, Go = { map: Hn, forEach: Hn, count: function(e) {
  return e ? ee(e).length : 0;
}, only: function(e) {
  var t = ee(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: ee }, Vo = w.__e;
w.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  Vo(e, t, n, r);
};
var Un = w.unmount;
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
function st() {
  this.__u = 0, this.o = null, this.__b = null;
}
function Br(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Zo(e) {
  var t, n, r;
  function o(i) {
    if (t || (t = e()).then(function(a) {
      n = a.default || a;
    }, function(a) {
      r = a;
    }), r) throw r;
    if (!n) throw t;
    return L(n, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function He() {
  this.i = null, this.l = null;
}
w.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Un && Un(e);
}, (st.prototype = new j()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.o == null && (r.o = []), r.o.push(n);
  var o = Br(r.__v), i = !1, a = function() {
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
}, st.prototype.componentWillUnmount = function() {
  this.o = [];
}, st.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Hr(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && L(V, null, e.fallback);
  return o && (o.__u &= -33), [L(V, null, t.__a ? null : e.children), o];
};
var Bn = function(e, t, n) {
  if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (n = e.i; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    e.i = n = n[2];
  }
};
function Yo(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function qo(e) {
  var t = this, n = e.h;
  if (t.componentWillUnmount = function() {
    ae(null, t.v), t.v = null, t.h = null;
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
  ae(L(Yo, { context: t.context }, e.__v), t.v);
}
function Xo(e, t) {
  var n = L(qo, { __v: e, h: t });
  return n.containerInfo = t, n;
}
(He.prototype = new j()).__a = function(e) {
  var t = this, n = Br(t.__v), r = t.l.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), Bn(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, He.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = ee(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; ) this.l.set(t[n], this.i = [1, 0, this.i]);
  return e.children;
}, He.prototype.componentDidUpdate = He.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(t, n) {
    Bn(e, n, t);
  });
};
var zr = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Ko = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Jo = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Qo = /[A-Z0-9]/g, ei = typeof document < "u", ti = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function ni(e, t, n) {
  return t.__k == null && (t.textContent = ""), ae(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function ri(e, t, n) {
  return ln(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
j.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(j.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var zn = w.event;
function oi() {
}
function ii() {
  return this.cancelBubble;
}
function ai() {
  return this.defaultPrevented;
}
w.event = function(e) {
  return zn && (e = zn(e)), e.persist = oi, e.isPropagationStopped = ii, e.isDefaultPrevented = ai, e.nativeEvent = e;
};
var hn, si = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Fn = w.vnode;
w.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {}, i = r.indexOf("-") === -1;
    for (var a in n) {
      var s = n[a];
      if (!(a === "value" && "defaultValue" in n && s == null || ei && a === "children" && r === "noscript" || a === "class" || a === "className")) {
        var l = a.toLowerCase();
        a === "defaultValue" && "value" in n && n.value == null ? a = "value" : a === "download" && s === !0 ? s = "" : l === "translate" && s === "no" ? s = !1 : l[0] === "o" && l[1] === "n" ? l === "ondoubleclick" ? a = "ondblclick" : l !== "onchange" || r !== "input" && r !== "textarea" || ti(n.type) ? l === "onfocus" ? a = "onfocusin" : l === "onblur" ? a = "onfocusout" : Jo.test(a) && (a = l) : l = a = "oninput" : i && Ko.test(a) ? a = a.replace(Qo, "-$&").toLowerCase() : s === null && (s = void 0), l === "oninput" && o[a = l] && (a = "oninputCapture"), o[a] = s;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = ee(n.children).forEach(function(u) {
      u.props.selected = o.value.indexOf(u.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = ee(n.children).forEach(function(u) {
      u.props.selected = o.multiple ? o.defaultValue.indexOf(u.props.value) != -1 : o.defaultValue == u.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", si)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = zr, Fn && Fn(e);
};
var Wn = w.__r;
w.__r = function(e) {
  Wn && Wn(e), hn = e.__c;
};
var jn = w.diffed;
w.diffed = function(e) {
  jn && jn(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), hn = null;
};
var ci = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return hn.__n[e.__c].props.value;
}, useCallback: he, useContext: Xe, useDebugValue: ht, useDeferredValue: Lr, useEffect: ne, useId: Or, useImperativeHandle: Tr, useInsertionEffect: Mr, useLayoutEffect: Ie, useMemo: te, useReducer: dn, useRef: qe, useState: F, useSyncExternalStore: Rr, useTransition: Dr } } };
function li(e) {
  return L.bind(null, e);
}
function vt(e) {
  return !!e && e.$$typeof === zr;
}
function ui(e) {
  return vt(e) && e.type === V;
}
function fi(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function di(e) {
  return vt(e) ? un.apply(null, arguments) : e;
}
function _i(e) {
  return !!e.__k && (ae(null, e), !0);
}
function hi(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var pi = function(e, t) {
  return e(t);
}, mi = function(e, t) {
  return e(t);
}, gi = V, yi = vt, re = { useState: F, useId: Or, useReducer: dn, useEffect: ne, useLayoutEffect: Ie, useInsertionEffect: Mr, useTransition: Dr, useDeferredValue: Lr, useSyncExternalStore: Rr, startTransition: Pr, useRef: qe, useImperativeHandle: Tr, useMemo: te, useCallback: he, useContext: Xe, useDebugValue: ht, version: "18.3.1", Children: Go, render: ni, hydrate: ri, unmountComponentAtNode: _i, createPortal: Xo, createElement: L, createContext: $r, createFactory: li, cloneElement: di, createRef: $o, Fragment: V, isValidElement: vt, isElement: yi, isFragment: ui, isMemo: fi, findDOMNode: hi, Component: j, PureComponent: Wt, memo: Fo, forwardRef: jo, flushSync: mi, unstable_batchedUpdates: pi, StrictMode: gi, Suspense: st, SuspenseList: He, lazy: Zo, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ci };
function vi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Rt, Gn;
function Ci() {
  return Gn || (Gn = 1, Rt = function(t, n, r, o) {
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
      var d = a[u];
      if (!l(d))
        return !1;
      var c = t[d], h = n[d];
      if (i = r ? r.call(o, c, h, d) : void 0, i === !1 || i === void 0 && c !== h)
        return !1;
    }
    return !0;
  }), Rt;
}
var wi = Ci();
const bi = /* @__PURE__ */ vi(wi);
var T = "-ms-", We = "-moz-", k = "-webkit-", Fr = "comm", Ct = "rule", pn = "decl", Si = "@import", Wr = "@keyframes", Ei = "@layer", jr = Math.abs, mn = String.fromCharCode, jt = Object.assign;
function $i(e, t) {
  return R(e, 0) ^ 45 ? (((t << 2 ^ R(e, 0)) << 2 ^ R(e, 1)) << 2 ^ R(e, 2)) << 2 ^ R(e, 3) : 0;
}
function Gr(e) {
  return e.trim();
}
function J(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function b(e, t, n) {
  return e.replace(t, n);
}
function ct(e, t, n) {
  return e.indexOf(t, n);
}
function R(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ne(e, t, n) {
  return e.slice(t, n);
}
function Z(e) {
  return e.length;
}
function Vr(e) {
  return e.length;
}
function Ue(e, t) {
  return t.push(e), e;
}
function Ni(e, t) {
  return e.map(t).join("");
}
function Vn(e, t) {
  return e.filter(function(n) {
    return !J(n, t);
  });
}
var wt = 1, ke = 1, Zr = 0, W = 0, A = 0, Ae = "";
function bt(e, t, n, r, o, i, a, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: wt, column: ke, length: a, return: "", siblings: s };
}
function ie(e, t) {
  return jt(bt("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function be(e) {
  for (; e.root; )
    e = ie(e.root, { children: [e] });
  Ue(e, e.siblings);
}
function ki() {
  return A;
}
function xi() {
  return A = W > 0 ? R(Ae, --W) : 0, ke--, A === 10 && (ke = 1, wt--), A;
}
function G() {
  return A = W < Zr ? R(Ae, W++) : 0, ke++, A === 10 && (ke = 1, wt++), A;
}
function pe() {
  return R(Ae, W);
}
function lt() {
  return W;
}
function St(e, t) {
  return Ne(Ae, e, t);
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
function Ti(e) {
  return wt = ke = 1, Zr = Z(Ae = e), W = 0, [];
}
function Oi(e) {
  return Ae = "", e;
}
function Pt(e) {
  return Gr(St(W - 1, Vt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ii(e) {
  for (; (A = pe()) && A < 33; )
    G();
  return Gt(e) > 2 || Gt(A) > 3 ? "" : " ";
}
function Ai(e, t) {
  for (; --t && G() && !(A < 48 || A > 102 || A > 57 && A < 65 || A > 70 && A < 97); )
    ;
  return St(e, lt() + (t < 6 && pe() == 32 && G() == 32));
}
function Vt(e) {
  for (; G(); )
    switch (A) {
      // ] ) " '
      case e:
        return W;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Vt(A);
        break;
      // (
      case 40:
        e === 41 && Vt(e);
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
    if (e + A === 84 && pe() === 47)
      break;
  return "/*" + St(t, W - 1) + "*" + mn(e === 47 ? e : G());
}
function Pi(e) {
  for (; !Gt(pe()); )
    G();
  return St(e, W);
}
function Li(e) {
  return Oi(ut("", null, null, null, [""], e = Ti(e), 0, [0], e));
}
function ut(e, t, n, r, o, i, a, s, l) {
  for (var u = 0, d = 0, c = a, h = 0, f = 0, p = 0, y = 1, v = 1, m = 1, g = 0, N = "", E = o, x = i, S = r, C = N; v; )
    switch (p = g, g = G()) {
      // (
      case 40:
        if (p != 108 && R(C, c - 1) == 58) {
          ct(C += b(Pt(g), "&", "&\f"), "&\f", jr(u ? s[u - 1] : 0)) != -1 && (m = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        C += Pt(g);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        C += Ii(p);
        break;
      // \
      case 92:
        C += Ai(lt() - 1, 7);
        continue;
      // /
      case 47:
        switch (pe()) {
          case 42:
          case 47:
            Ue(Di(Ri(G(), lt()), t, n, l), l);
            break;
          default:
            C += "/";
        }
        break;
      // {
      case 123 * y:
        s[u++] = Z(C) * m;
      // } ; \0
      case 125 * y:
      case 59:
      case 0:
        switch (g) {
          // \0 }
          case 0:
          case 125:
            v = 0;
          // ;
          case 59 + d:
            m == -1 && (C = b(C, /\f/g, "")), f > 0 && Z(C) - c && Ue(f > 32 ? Yn(C + ";", r, n, c - 1, l) : Yn(b(C, " ", "") + ";", r, n, c - 2, l), l);
            break;
          // @ ;
          case 59:
            C += ";";
          // { rule/at-rule
          default:
            if (Ue(S = Zn(C, t, n, u, d, o, s, N, E = [], x = [], c, i), i), g === 123)
              if (d === 0)
                ut(C, t, S, S, E, i, c, s, x);
              else
                switch (h === 99 && R(C, 3) === 110 ? 100 : h) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ut(e, S, S, r && Ue(Zn(e, S, S, 0, 0, o, s, N, o, E = [], c, x), x), o, x, c, s, r ? E : x);
                    break;
                  default:
                    ut(C, S, S, S, [""], x, 0, s, x);
                }
        }
        u = d = f = 0, y = m = 1, N = C = "", c = a;
        break;
      // :
      case 58:
        c = 1 + Z(C), f = p;
      default:
        if (y < 1) {
          if (g == 123)
            --y;
          else if (g == 125 && y++ == 0 && xi() == 125)
            continue;
        }
        switch (C += mn(g), g * y) {
          // &
          case 38:
            m = d > 0 ? 1 : (C += "\f", -1);
            break;
          // ,
          case 44:
            s[u++] = (Z(C) - 1) * m, m = 1;
            break;
          // @
          case 64:
            pe() === 45 && (C += Pt(G())), h = pe(), d = c = Z(N = C += Pi(lt())), g++;
            break;
          // -
          case 45:
            p === 45 && Z(C) == 2 && (y = 0);
        }
    }
  return i;
}
function Zn(e, t, n, r, o, i, a, s, l, u, d, c) {
  for (var h = o - 1, f = o === 0 ? i : [""], p = Vr(f), y = 0, v = 0, m = 0; y < r; ++y)
    for (var g = 0, N = Ne(e, h + 1, h = jr(v = a[y])), E = e; g < p; ++g)
      (E = Gr(v > 0 ? f[g] + " " + N : b(N, /&\f/g, f[g]))) && (l[m++] = E);
  return bt(e, t, n, o === 0 ? Ct : s, l, u, d, c);
}
function Di(e, t, n, r) {
  return bt(e, t, n, Fr, mn(ki()), Ne(e, 2, -2), 0, r);
}
function Yn(e, t, n, r, o) {
  return bt(e, t, n, pn, Ne(e, 0, r), Ne(e, r + 1, -1), r, o);
}
function Yr(e, t, n) {
  switch ($i(e, t)) {
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
      switch (R(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return k + e + T + b(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return k + e + T + b(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return k + e + T + b(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
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
      return k + e + b(e, /(\w+).+(:[^]+)/, k + "box-$1$2" + T + "flex-$1$2") + e;
    // align-self
    case 5443:
      return k + e + T + "flex-item-" + b(e, /flex-|-self/g, "") + (J(e, /flex-|baseline/) ? "" : T + "grid-row-" + b(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return k + e + T + "flex-line-pack" + b(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return k + e + T + b(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return k + e + T + b(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return k + "box-" + b(e, "-grow", "") + k + e + T + b(e, "grow", "positive") + e;
    // transition
    case 4554:
      return k + b(e, /([^-])(transform)/g, "$1" + k + "$2") + e;
    // cursor
    case 6187:
      return b(b(b(e, /(zoom-|grab)/, k + "$1"), /(image-set)/, k + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return b(e, /(image-set\([^]*)/, k + "$1$`$1");
    // justify-content
    case 4968:
      return b(b(e, /(.+:)(flex-)?(.*)/, k + "box-pack:$3" + T + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + k + e + e;
    // justify-self
    case 4200:
      if (!J(e, /flex-|baseline/)) return T + "grid-column-align" + Ne(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return T + b(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, J(r.props, /grid-\w+-end/);
      }) ? ~ct(e + (n = n[t].value), "span", 0) ? e : T + b(e, "-start", "") + e + T + "grid-row-span:" + (~ct(n, "span", 0) ? J(n, /\d+/) : +J(n, /\d+/) - +J(e, /\d+/)) + ";" : T + b(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return J(r.props, /grid-\w+-start/);
      }) ? e : T + b(b(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return b(e, /(.+)-inline(.+)/, k + "$1$2") + e;
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
        switch (R(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (R(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return b(e, /(.+:)(.+)-([^]+)/, "$1" + k + "$2-$3$1" + We + (R(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~ct(e, "stretch", 0) ? Yr(b(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return b(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, a, s, l, u) {
        return T + o + ":" + i + u + (a ? T + o + "-span:" + (s ? l : +l - +i) + u : "") + e;
      });
    // position: sticky
    case 4949:
      if (R(e, t + 6) === 121)
        return b(e, ":", ":" + k) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (R(e, R(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return b(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + k + (R(e, 14) === 45 ? "inline-" : "") + "box$3$1" + k + "$2$3$1" + T + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return b(e, ":", ":" + T) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return b(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function pt(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Mi(e, t, n, r) {
  switch (e.type) {
    case Ei:
      if (e.children.length) break;
    case Si:
    case pn:
      return e.return = e.return || e.value;
    case Fr:
      return "";
    case Wr:
      return e.return = e.value + "{" + pt(e.children, r) + "}";
    case Ct:
      if (!Z(e.value = e.props.join(","))) return "";
  }
  return Z(n = pt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Hi(e) {
  var t = Vr(e);
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
function Bi(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case pn:
        e.return = Yr(e.value, e.length, n);
        return;
      case Wr:
        return pt([ie(e, { value: b(e.value, "@", "@" + k) })], r);
      case Ct:
        if (e.length)
          return Ni(n = e.props, function(o) {
            switch (J(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                be(ie(e, { props: [b(o, /:(read-\w+)/, ":" + We + "$1")] })), be(ie(e, { props: [o] })), jt(e, { props: Vn(n, r) });
                break;
              // :placeholder
              case "::placeholder":
                be(ie(e, { props: [b(o, /:(plac\w+)/, ":" + k + "input-$1")] })), be(ie(e, { props: [b(o, /:(plac\w+)/, ":" + We + "$1")] })), be(ie(e, { props: [b(o, /:(plac\w+)/, T + "input-$1")] })), be(ie(e, { props: [o] })), jt(e, { props: Vn(n, r) });
                break;
            }
            return "";
          });
    }
}
var zi = {
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
}, $ = {}, ye = typeof process < "u" && $ !== void 0 && ($.REACT_APP_SC_ATTR || $.SC_ATTR) || "data-styled", qr = "active", Xr = "data-styled-version", Et = "6.1.18", gn = `/*!sc*/
`, mt = typeof window < "u" && typeof document < "u", Fi = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && $ !== void 0 && $.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && $.REACT_APP_SC_DISABLE_SPEEDY !== "" ? $.REACT_APP_SC_DISABLE_SPEEDY !== "false" && $.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && $ !== void 0 && $.SC_DISABLE_SPEEDY !== void 0 && $.SC_DISABLE_SPEEDY !== "" ? $.SC_DISABLE_SPEEDY !== "false" && $.SC_DISABLE_SPEEDY : $.NODE_ENV !== "production"), qn = /invalid hook call/i, nt = /* @__PURE__ */ new Set(), Wi = function(e, t) {
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
        qn.test(a) ? (i = !1, nt.delete(r)) : o.apply(void 0, ge([a], s, !1));
      }, qe(), i && !nt.has(r) && (console.warn(r), nt.add(r));
    } catch (a) {
      qn.test(a.message) && nt.delete(r);
    } finally {
      console.error = o;
    }
  }
}, $t = Object.freeze([]), xe = Object.freeze({});
function ji(e, t, n) {
  return n === void 0 && (n = xe), e.theme !== n.theme && e.theme || t || n.theme;
}
var Zt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Gi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Vi = /(^-|-$)/g;
function Xn(e) {
  return e.replace(Gi, "-").replace(Vi, "");
}
var Zi = /(a)(d)/gi, rt = 52, Kn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Yt(e) {
  var t, n = "";
  for (t = Math.abs(e); t > rt; t = t / rt | 0) n = Kn(t % rt) + n;
  return (Kn(t % rt) + n).replace(Zi, "$1-$2");
}
var Lt, Kr = 5381, fe = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Jr = function(e) {
  return fe(Kr, e);
};
function Qr(e) {
  return Yt(Jr(e) >>> 0);
}
function eo(e) {
  return $.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Dt(e) {
  return typeof e == "string" && ($.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var to = typeof Symbol == "function" && Symbol.for, no = to ? Symbol.for("react.memo") : 60115, Yi = to ? Symbol.for("react.forward_ref") : 60112, qi = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Xi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, ro = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Ki = ((Lt = {})[Yi] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Lt[no] = ro, Lt);
function Jn(e) {
  return ("type" in (t = e) && t.type.$$typeof) === no ? ro : "$$typeof" in e ? Ki[e.$$typeof] : qi;
  var t;
}
var Ji = Object.defineProperty, Qi = Object.getOwnPropertyNames, Qn = Object.getOwnPropertySymbols, ea = Object.getOwnPropertyDescriptor, ta = Object.getPrototypeOf, er = Object.prototype;
function oo(e, t, n) {
  if (typeof t != "string") {
    if (er) {
      var r = ta(t);
      r && r !== er && oo(e, r, n);
    }
    var o = Qi(t);
    Qn && (o = o.concat(Qn(t)));
    for (var i = Jn(e), a = Jn(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!(l in Xi || n && n[l] || a && l in a || i && l in i)) {
        var u = ea(t, l);
        try {
          Ji(e, l, u);
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
function yn(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function de(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function qt(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function Te(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Xt(e, t, n) {
  if (n === void 0 && (n = !1), !n && !Te(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = Xt(e[r], t[r]);
  else if (Te(t)) for (var r in t) e[r] = Xt(e[r], t[r]);
  return e;
}
function vn(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var na = $.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function X(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return $.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(ra.apply(void 0, ge([na[e]], t, !1)).trim());
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
      for (var r = this.groupSizes, o = r.length, i = o; t >= i; ) if ((i <<= 1) < 0) throw X(16, "".concat(t));
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
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, a = o; a < i; a++) n += "".concat(this.tag.getRule(a)).concat(gn);
    return n;
  }, e;
}(), ia = 1 << 30, ft = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map(), dt = 1, ot = function(e) {
  if (ft.has(e)) return ft.get(e);
  for (; gt.has(dt); ) dt++;
  var t = dt++;
  if ($.NODE_ENV !== "production" && ((0 | t) < 0 || t > ia)) throw X(16, "".concat(t));
  return ft.set(e, t), gt.set(t, e), t;
}, aa = function(e, t) {
  dt = t + 1, ft.set(e, t), gt.set(t, e);
}, sa = "style[".concat(ye, "][").concat(Xr, '="').concat(Et, '"]'), ca = new RegExp("^".concat(ye, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), la = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++) (r = o[i]) && e.registerName(t, r);
}, ua = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(gn), o = [], i = 0, a = r.length; i < a; i++) {
    var s = r[i].trim();
    if (s) {
      var l = s.match(ca);
      if (l) {
        var u = 0 | parseInt(l[1], 10), d = l[2];
        u !== 0 && (aa(d, u), la(e, d, l[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else o.push(s);
    }
  }
}, tr = function(e) {
  for (var t = document.querySelectorAll(sa), n = 0, r = t.length; n < r; n++) {
    var o = t[n];
    o && o.getAttribute(ye) !== qr && (ua(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function fa() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var io = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(s) {
    var l = Array.from(s.querySelectorAll("style[".concat(ye, "]")));
    return l[l.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ye, qr), r.setAttribute(Xr, Et);
  var a = fa();
  return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
}, da = function() {
  function e(t) {
    this.element = io(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet) return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var a = r[o];
        if (a.ownerNode === n) return a;
      }
      throw X(17);
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
    this.element = io(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), ha = function() {
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
}(), nr = mt, pa = { isServer: !mt, useCSSOMInjection: !Fi }, ao = function() {
  function e(t, n, r) {
    t === void 0 && (t = xe), n === void 0 && (n = {});
    var o = this;
    this.options = P(P({}, pa), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && mt && nr && (nr = !1, tr(this)), vn(this, function() {
      return function(i) {
        for (var a = i.getTag(), s = a.length, l = "", u = function(c) {
          var h = function(m) {
            return gt.get(m);
          }(c);
          if (h === void 0) return "continue";
          var f = i.names.get(h), p = a.getGroup(c);
          if (f === void 0 || !f.size || p.length === 0) return "continue";
          var y = "".concat(ye, ".g").concat(c, '[id="').concat(h, '"]'), v = "";
          f !== void 0 && f.forEach(function(m) {
            m.length > 0 && (v += "".concat(m, ","));
          }), l += "".concat(p).concat(y, '{content:"').concat(v, '"}').concat(gn);
        }, d = 0; d < s; d++) u(d);
        return l;
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
      return n.isServer ? new ha(o) : r ? new da(o) : new _a(o);
    }(this.options), new oa(t)));
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
}(), ma = /&/g, ga = /^\s*\/\/.*$/gm;
function so(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = so(n.children, t)), n;
  });
}
function co(e) {
  var t, n, r, o = e === void 0 ? xe : e, i = o.options, a = i === void 0 ? xe : i, s = o.plugins, l = s === void 0 ? $t : s, u = function(h, f, p) {
    return p.startsWith(n) && p.endsWith(n) && p.replaceAll(n, "").length > 0 ? ".".concat(t) : h;
  }, d = l.slice();
  d.push(function(h) {
    h.type === Ct && h.value.includes("&") && (h.props[0] = h.props[0].replace(ma, n).replace(r, u));
  }), a.prefix && d.push(Bi), d.push(Mi);
  var c = function(h, f, p, y) {
    f === void 0 && (f = ""), p === void 0 && (p = ""), y === void 0 && (y = "&"), t = y, n = f, r = new RegExp("\\".concat(n, "\\b"), "g");
    var v = h.replace(ga, ""), m = Li(p || f ? "".concat(p, " ").concat(f, " { ").concat(v, " }") : v);
    a.namespace && (m = so(m, a.namespace));
    var g = [];
    return pt(m, Hi(d.concat(Ui(function(N) {
      return g.push(N);
    })))), g;
  };
  return c.hash = l.length ? l.reduce(function(h, f) {
    return f.name || X(15), fe(h, f.name);
  }, Kr).toString() : "", c;
}
var ya = new ao(), Kt = co(), Cn = re.createContext({ shouldForwardProp: void 0, styleSheet: ya, stylis: Kt });
Cn.Consumer;
var va = re.createContext(void 0);
function Jt() {
  return Xe(Cn);
}
function Ca(e) {
  var t = F(e.stylisPlugins), n = t[0], r = t[1], o = Jt().styleSheet, i = te(function() {
    var l = o;
    return e.sheet ? l = e.sheet : e.target && (l = l.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (l = l.reconstructWithOptions({ useCSSOMInjection: !1 })), l;
  }, [e.disableCSSOMInjection, e.sheet, e.target, o]), a = te(function() {
    return co({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: n });
  }, [e.enableVendorPrefixes, e.namespace, n]);
  ne(function() {
    bi(n, e.stylisPlugins) || r(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var s = te(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: a };
  }, [e.shouldForwardProp, i, a]);
  return re.createElement(Cn.Provider, { value: s }, re.createElement(va.Provider, { value: a }, e.children));
}
var Qt = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Kt);
      var a = r.name + i.hash;
      o.hasNameForId(r.id, a) || o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, vn(this, function() {
      throw X(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Kt), this.name + t.hash;
  }, e;
}(), wa = function(e) {
  return e >= "A" && e <= "Z";
};
function rr(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    wa(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var lo = function(e) {
  return e == null || e === !1 || e === "";
}, uo = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !lo(i) && (Array.isArray(i) && i.isCss || ve(i) ? r.push("".concat(rr(o), ":"), i, ";") : Te(i) ? r.push.apply(r, ge(ge(["".concat(o, " {")], uo(i), !1), ["}"], !1)) : r.push("".concat(rr(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in zi || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function me(e, t, n, r) {
  if (lo(e)) return [];
  if (yn(e)) return [".".concat(e.styledComponentId)];
  if (ve(e)) {
    if (!ve(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return $.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Qt || Te(o) || o === null || console.error("".concat(eo(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), me(o, t, n, r);
  }
  var i;
  return e instanceof Qt ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Te(e) ? uo(e) : Array.isArray(e) ? Array.prototype.concat.apply($t, e.map(function(a) {
    return me(a, t, n, r);
  })) : [e.toString()];
}
function ba(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (ve(n) && !yn(n)) return !1;
  }
  return !0;
}
var Sa = Jr(Et), Ea = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = $.NODE_ENV === "production" && (r === void 0 || r.isStatic) && ba(t), this.componentId = n, this.baseHash = fe(Sa, n), this.baseStyle = r, ao.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = de(o, this.staticRulesId);
    else {
      var i = qt(me(this.rules, t, n, r)), a = Yt(fe(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, a)) {
        var s = r(i, ".".concat(a), void 0, this.componentId);
        n.insertRules(this.componentId, a, s);
      }
      o = de(o, a), this.staticRulesId = a;
    }
    else {
      for (var l = fe(this.baseHash, r.hash), u = "", d = 0; d < this.rules.length; d++) {
        var c = this.rules[d];
        if (typeof c == "string") u += c, $.NODE_ENV !== "production" && (l = fe(l, c));
        else if (c) {
          var h = qt(me(c, t, n, r));
          l = fe(l, h + d), u += h;
        }
      }
      if (u) {
        var f = Yt(l >>> 0);
        n.hasNameForId(this.componentId, f) || n.insertRules(this.componentId, f, r(u, ".".concat(f), void 0, this.componentId)), o = de(o, f);
      }
    }
    return o;
  }, e;
}(), Ve = re.createContext(void 0);
Ve.Consumer;
function fo() {
  var e = Xe(Ve);
  if (!e) throw X(18);
  return e;
}
function $a(e) {
  var t = re.useContext(Ve), n = te(function() {
    return function(r, o) {
      if (!r) throw X(14);
      if (ve(r)) {
        var i = r(o);
        if ($.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object")) throw X(7);
        return i;
      }
      if (Array.isArray(r) || typeof r != "object") throw X(8);
      return o ? P(P({}, o), r) : r;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? re.createElement(Ve.Provider, { value: n }, e.children) : null;
}
var Mt = {}, or = /* @__PURE__ */ new Set();
function Na(e, t, n) {
  var r = yn(e), o = e, i = !Dt(e), a = t.attrs, s = a === void 0 ? $t : a, l = t.componentId, u = l === void 0 ? function(E, x) {
    var S = typeof E != "string" ? "sc" : Xn(E);
    Mt[S] = (Mt[S] || 0) + 1;
    var C = "".concat(S, "-").concat(Qr(Et + S + Mt[S]));
    return x ? "".concat(x, "-").concat(C) : C;
  }(t.displayName, t.parentComponentId) : l, d = t.displayName, c = d === void 0 ? function(E) {
    return Dt(E) ? "styled.".concat(E) : "Styled(".concat(eo(E), ")");
  }(e) : d, h = t.displayName && t.componentId ? "".concat(Xn(t.displayName), "-").concat(t.componentId) : t.componentId || u, f = r && o.attrs ? o.attrs.concat(s).filter(Boolean) : s, p = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var y = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var v = t.shouldForwardProp;
      p = function(E, x) {
        return y(E, x) && v(E, x);
      };
    } else p = y;
  }
  var m = new Ea(n, h, r ? o.componentStyle : void 0);
  function g(E, x) {
    return function(S, C, D) {
      var H = S.attrs, Re = S.componentStyle, U = S.defaultProps, ce = S.foldedComponentIds, bn = S.styledComponentId, vo = S.target, Co = re.useContext(Ve), wo = Jt(), kt = S.shouldForwardProp || wo.shouldForwardProp;
      $.NODE_ENV !== "production" && ht(bn);
      var Sn = ji(C, Co, U) || xe, K = function(Ke, De, Je) {
        for (var we, le = P(P({}, De), { className: void 0, theme: Je }), Ot = 0; Ot < Ke.length; Ot += 1) {
          var Qe = ve(we = Ke[Ot]) ? we(le) : we;
          for (var oe in Qe) le[oe] = oe === "className" ? de(le[oe], Qe[oe]) : oe === "style" ? P(P({}, le[oe]), Qe[oe]) : Qe[oe];
        }
        return De.className && (le.className = de(le.className, De.className)), le;
      }(H, C, Sn), Pe = K.as || vo, Le = {};
      for (var B in K) K[B] === void 0 || B[0] === "$" || B === "as" || B === "theme" && K.theme === Sn || (B === "forwardedAs" ? Le.as = K.forwardedAs : kt && !kt(B, Pe) || (Le[B] = K[B], kt || $.NODE_ENV !== "development" || zo(B) || or.has(B) || !Zt.has(Pe) || (or.add(B), console.warn('styled-components: it looks like an unknown prop "'.concat(B, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var xt = function(Ke, De) {
        var Je = Jt(), we = Ke.generateAndInjectStyles(De, Je.styleSheet, Je.stylis);
        return $.NODE_ENV !== "production" && ht(we), we;
      }(Re, K);
      $.NODE_ENV !== "production" && S.warnTooManyClasses && S.warnTooManyClasses(xt);
      var Tt = de(ce, bn);
      return xt && (Tt += " " + xt), K.className && (Tt += " " + K.className), Le[Dt(Pe) && !Zt.has(Pe) ? "class" : "className"] = Tt, D && (Le.ref = D), L(Pe, Le);
    }(N, E, x);
  }
  g.displayName = c;
  var N = re.forwardRef(g);
  return N.attrs = f, N.componentStyle = m, N.displayName = c, N.shouldForwardProp = p, N.foldedComponentIds = r ? de(o.foldedComponentIds, o.styledComponentId) : "", N.styledComponentId = h, N.target = r ? o.target : e, Object.defineProperty(N, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = r ? function(x) {
      for (var S = [], C = 1; C < arguments.length; C++) S[C - 1] = arguments[C];
      for (var D = 0, H = S; D < H.length; D++) Xt(x, H[D], !0);
      return x;
    }({}, o.defaultProps, E) : E;
  } }), $.NODE_ENV !== "production" && (Wi(c, h), N.warnTooManyClasses = /* @__PURE__ */ function(E, x) {
    var S = {}, C = !1;
    return function(D) {
      if (!C && (S[D] = !0, Object.keys(S).length >= 200)) {
        var H = x ? ' with the id of "'.concat(x, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(E).concat(H, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), C = !0, S = {};
      }
    };
  }(c, h)), vn(N, function() {
    return ".".concat(N.styledComponentId);
  }), i && oo(N, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), N;
}
function ir(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var ar = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function wn(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (ve(e) || Te(e)) return ar(me(ir($t, ge([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? me(r) : ar(me(ir(r, t)));
}
function en(e, t, n) {
  if (n === void 0 && (n = xe), !t) throw X(1, t);
  var r = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
    return e(t, n, wn.apply(void 0, ge([o], i, !1)));
  };
  return r.attrs = function(o) {
    return en(e, t, P(P({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return en(e, t, P(P({}, n), o));
  }, r;
}
var _o = function(e) {
  return en(Na, e);
}, M = _o;
Zt.forEach(function(e) {
  M[e] = _o(e);
});
function Nt(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  $.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = qt(wn.apply(void 0, ge([e], t, !1))), o = Qr(r);
  return new Qt(o, r);
}
$.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var it = "__sc-".concat(ye, "__");
$.NODE_ENV !== "production" && $.NODE_ENV !== "test" && typeof window < "u" && (window[it] || (window[it] = 0), window[it] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[it] += 1);
const tn = {
  LEFT: "left",
  RIGHT: "right"
}, sr = 0.24, ka = 24, xa = 2, ho = 14, Ta = 0.0276;
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
}, cr = {
  loading: { text: "Loading. Please wait.", visible: !0 },
  waiting: { text: "Waiting for input...", visible: !0 }
}, Oa = "rgba(19, 19, 19, 0.5)", Ia = 34, Aa = {
  [z.CANDIDATE_SELECTION]: "Hold still…",
  [z.PALM_CENTERING]: "Center your palm",
  [z.PALM_NOT_PRESENT]: "Position your palm",
  [z.PALM_TOO_FAR]: "Move closer",
  [z.SHARPNESS_TOO_LOW]: "More light needed",
  [z.BRIGHTNESS_TOO_LOW]: "More light needed",
  [z.BRIGHTNESS_TOO_HIGH]: "Less light needed",
  [z.DEVICE_PITCHED]: "Hold your phone at eye level",
  [z.PALM_TOO_CLOSE]: "Move back",
  [z.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW]: "More light needed"
}, Ra = tn.LEFT;
function lr(e, t) {
  return Math.max(t, t + (e - 400) * Ta + 2);
}
const Pa = (e, t = ho) => e ? e.width < e.height ? lr(e.width, t) : lr(e.height, t) : t, La = (e) => e > Q.Default ? Be[Q.Default] : e > Q.L ? Be[Q.L] : e > Q.M ? Be[Q.M] : Be[Q.S], Da = (e) => e ? La(e.width) : Be[Q.Default];
function Ma() {
  const e = "https://fonts.googleapis.com/css?family=Montserrat:600";
  if (!document.querySelector(`link[href="${e}"]`)) {
    const n = document.createElement("link");
    n.href = e, n.rel = "stylesheet", document.head.appendChild(n);
  }
}
const je = $r(void 0);
je.displayName = "UiCustomizationContext";
function Ce() {
  const e = Xe(je);
  if (!e)
    throw new Error(
      `${je.displayName} must be used within a ${je.displayName} Provider`
    );
  return e;
}
function Ha({ children: e, props: t, videoElementSize: n }) {
  const { font: r } = fo(), o = te(
    () => ({ ...t, videoElementSize: n, fontSize: Pa(n, r.minimumSize) }),
    [t, r.minimumSize, n]
  );
  return /* @__PURE__ */ _(je.Provider, { value: o, children: e });
}
const po = ({ svgSize: e }) => /* @__PURE__ */ _("svg", { fill: "none", height: e, viewBox: "0 0 16 14", width: e, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ _(
  "path",
  {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), Ua = M.div`
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
`, Ba = M.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, za = M.p`
  background: ${(e) => e.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(e) => `${e.$fontSize}px`};
  line-height: 1em;
  max-width: 80%;
`, nn = ({ Icon: e, isCameraReady: t, position: n = "absolute", text: r }) => {
  const { fontSize: o } = Ce();
  return /* @__PURE__ */ _(Ua, { $isCameraReady: t, $position: n, children: /* @__PURE__ */ _(Ba, { children: [
    e ? /* @__PURE__ */ _(e, { svgSize: o * 2 }) : null,
    /* @__PURE__ */ _(za, { $fontSize: o, children: r })
  ] }) });
}, mo = ({ text: e = "An unknown error has occurred" }) => /* @__PURE__ */ _(nn, { Icon: po, position: "relative", text: e });
class Fa extends j {
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
    return this.state.hasError ? /* @__PURE__ */ _(mo, { Icon: po, isCameraReady: !1 }) : this.props.children;
  }
}
const Wa = M.div`
  font-family: ${(e) => e.theme.font.family};
  font-style: ${(e) => e.theme.font.style};
  font-weight: ${(e) => e.theme.font.weight};
`, ja = ({ children: e, uiProps: t, videoElementSize: n }) => (ne(() => {
  Ma();
}, []), /* @__PURE__ */ _(Ca, { target: t.styleTarget, children: /* @__PURE__ */ _($a, { theme: t.theme, children: /* @__PURE__ */ _(Wa, { children: /* @__PURE__ */ _(Fa, { videoElementSize: n, children: /* @__PURE__ */ _(Ha, { props: t, videoElementSize: n, children: e }) }) }) }) })), Ga = 0.85, Va = "dot-auto-capture-video", Se = (e, t) => {
  const n = qe(t);
  ne(() => {
    n.current = t;
  }, [t]), ne(
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
function Za(e) {
  const [t, n] = F(), r = he(
    (o) => {
      var i;
      n((i = o.detail) == null ? void 0 : i.size);
    },
    [n]
  );
  return Se(e, r), Ie(() => {
    if (!t) {
      const o = document.getElementById(Va);
      o && n(o.getBoundingClientRect());
    }
  }, [t, n]), t;
}
function Ya(e, t) {
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
}, Me = {
  colors: qa,
  font: Xa
}, Ka = (e) => {
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
      family: Ya((t = e.font) == null ? void 0 : t.family, Me.font.family)
    }
  } : Me;
}, Ja = (e, t) => Math.min(e, t), Qa = ({ height: e, width: t }, n) => {
  const r = Ja(t, e) * n, o = (t - r) / 2, i = (e - r) / 2;
  return {
    shiftX: o,
    shiftY: i,
    width: r,
    height: r
  };
}, es = (e, t) => {
  const { height: n, shiftX: r, shiftY: o, width: i } = Qa(e, t);
  return {
    shiftX: r / e.width,
    shiftY: o / e.height,
    width: i / e.width,
    height: n / e.height
  };
}, ts = (e) => es(e, Ga), go = (e, t) => {
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
    this.isDetailChanged(t, n) && go(t, n);
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
let rn = yt;
rn.getInstance();
const ur = (e, t) => {
  go(e, {
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
  const [e, t] = F(!1);
  return ne(() => {
    (async () => {
      (await rs()).length > 1 && t(!0);
    })();
  }, []), e;
}, is = ({ size: e }) => /* @__PURE__ */ _("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }), as = ({ size: e }) => /* @__PURE__ */ _("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: "52", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ _("circle", { cx: "26", cy: "26", fill: "#131313", fillOpacity: "0.3", r: "26" }),
  /* @__PURE__ */ _(
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
`, ss = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ _(yo, { $marginLeft: e, ...n, children: /* @__PURE__ */ _(is, { size: t }) }), cs = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ _(yo, { $marginLeft: e, ...n, children: /* @__PURE__ */ _(as, { size: t }) }), ls = M.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.$padding}px`};
  z-index: 2;
`, us = ({
  customControlEvent: e,
  isSwitchCameraDisabled: t
}) => {
  const { showCameraButtons: n, videoElementSize: r } = Ce(), o = os();
  if (!n)
    return null;
  const { buttonPadding: i, iconSize: a, marginLeft: s } = Da(r);
  return /* @__PURE__ */ _(ls, { $padding: i, children: [
    o && /* @__PURE__ */ _(cs, { disabled: t, onClick: () => {
      ur(e, xn.SWITCH_CAMERA);
    }, size: a }),
    /* @__PURE__ */ _(
      ss,
      {
        marginLeft: o ? s : 0,
        onClick: () => {
          ur(e, xn.TOGGLE_MIRROR);
        },
        size: a
      }
    )
  ] });
}, fs = "2.5s", ds = "0.3s", _s = "linear", hs = Nt`
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
const ps = M.div`
  position: absolute;
  left: 50%;

  ${(e) => e.$cssTop ? `top: ${e.$cssTop}%;` : ""}
  ${(e) => e.$cssBottom ? `bottom: ${e.$cssBottom}%;` : ""}
    ${(e) => e.$isAnimating && wn`
      animation: ${hs} ${ds}
        ${_s} both;
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
`, ms = M.div`
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
  const { fontSize: a } = Ce();
  return /* @__PURE__ */ _(ps, { $cssBottom: t, $cssTop: n, $isAnimating: r, $isPortrait: i, children: /* @__PURE__ */ _(
    ms,
    {
      $fontSize: a,
      $isInCandidateSelection: o,
      $wrap: e.length > Ia,
      children: e
    }
  ) });
}, ys = M.canvas`
  transform: ${(e) => e.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, vs = (e) => {
  const t = e.getContext("2d");
  t && t.clearRect(0, 0, t.canvas.width, t.canvas.height);
}, ze = (e, t) => Math.hypot(t.x - e.x, t.y - e.y), fr = (e, t, n) => {
  const r = (t.x - e.x) * n, o = (t.y - e.y) * n;
  return {
    x: e.x + r,
    y: e.y + o
  };
}, dr = (e, t, n, r) => {
  const o = ze(e, t);
  return n * r / o;
}, Cs = (e) => {
  const { bottomLeft: t, bottomRight: n, topLeft: r, topRight: o } = e, i = ze(r, o), a = ze(o, n), s = ze(t, n), l = ze(r, t);
  return Math.min(i, a, s, l);
};
function ws({ cameraResolution: e, isImageMirror: t }) {
  const n = qe(null), r = fo(), [o, i] = F(), a = he(
    (s) => {
      var l;
      i((l = s == null ? void 0 : s.detail) == null ? void 0 : l.detectedObject);
    },
    [i]
  );
  return Se(kr.DETECTED_DOCUMENT_CHANGED, a), Se(_e.DETECTED_PALM_CHANGED, a), ne(() => {
    if (!n.current)
      return;
    const s = (u, d, c, h) => {
      var g;
      const f = dr(
        d,
        u,
        h,
        sr
      ), p = dr(
        d,
        c,
        h,
        sr
      ), y = fr(d, u, f), v = fr(d, c, p), m = (g = n == null ? void 0 : n.current) == null ? void 0 : g.getContext("2d");
      m && (m.beginPath(), m.lineWidth = xa, m.strokeStyle = r.colors.placeholderColor, m.moveTo(y.x, y.y), m.arcTo(d.x, d.y, v.x, v.y, ka), m.lineTo(v.x, v.y), m.stroke());
    }, l = (u) => {
      if (!u)
        return;
      const { bottomLeft: d, bottomRight: c, topLeft: h, topRight: f } = u, p = Cs(u);
      s(d, h, f, p), s(h, f, c, p), s(f, c, d, p), s(c, d, h, p);
    };
    n.current.width = e.width, n.current.height = e.height, vs(n.current), l(o);
  }, [e, o, r.colors.placeholderColor]), /* @__PURE__ */ _(ys, { ref: n, $isImageMirror: t });
}
const bs = M.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, Ss = ({ svgSize: e }) => /* @__PURE__ */ _(bs, { children: /* @__PURE__ */ _("svg", { fill: "none", height: e, viewBox: "0 0 48 48", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }) }), Es = M.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`, $s = ({ children: e, height: t, width: n }) => {
  const { backdropColor: r } = Ce();
  return /* @__PURE__ */ _(Es, { children: /* @__PURE__ */ _("svg", { viewBox: `0 0 ${n} ${t}`, children: [
    /* @__PURE__ */ _("defs", { children: /* @__PURE__ */ _("mask", { id: "mask", children: [
      /* @__PURE__ */ _("rect", { fill: "#fff", height: "100%", width: "100%" }),
      e
    ] }) }),
    /* @__PURE__ */ _("rect", { fill: r, height: "100%", mask: "url(#mask)", width: "100%" })
  ] }) });
};
function Ns({ cameraHeight: e, cameraWidth: t, isBackdrop: n, state: r }) {
  const { appStateInstructions: o } = Ce(), i = r === Y.ERROR || r === Y.RUNNING;
  return !r || i || !(o != null && o[r].visible) ? null : r === Y.WAITING ? /* @__PURE__ */ _(V, { children: [
    n && e && t && /* @__PURE__ */ _($s, { height: e, width: t }),
    /* @__PURE__ */ _(nn, { isCameraReady: !0, text: o[Y.WAITING].text })
  ] }) : /* @__PURE__ */ _(nn, { Icon: Ss, isCameraReady: !0, text: o[Y.LOADING].text });
}
function ks() {
  return /* @__PURE__ */ _(
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
        /* @__PURE__ */ _("path", { className: "cls-1", d: "M179.22,114.86c-5.07-.21-41.51-1.07-66.97,27.84-17.94,20.37-19.97,43.63-20.32,51.17" }),
        /* @__PURE__ */ _("path", { className: "cls-1", d: "M128.06,110.56c-11.36,2.45-25.72,4.46-42.32,4.23-11.24-.16-21.3-1.31-29.91-2.82" }),
        /* @__PURE__ */ _("line", { className: "cls-1", x1: "203.51", x2: "203.51", y1: "136.03", y2: "10.21" }),
        /* @__PURE__ */ _("line", { className: "cls-1", x1: "154.7", x2: "154.7", y1: "60.97", y2: "10.21" }),
        /* @__PURE__ */ _("line", { className: "cls-1", x1: "106.01", x2: "106.01", y1: "60.97", y2: "10.21" }),
        /* @__PURE__ */ _("line", { className: "cls-1", x1: "58.08", x2: "58.08", y1: "60.97", y2: "10.21" }),
        /* @__PURE__ */ _(
          "path",
          {
            className: "cls-1",
            d: "M286.73,114.94c3.95-3.75,6.41-9.05,6.41-14.92,0-11.36-9.21-20.56-20.56-20.56-2.84,0-5.54.58-8,1.62"
          }
        ),
        /* @__PURE__ */ _("polyline", { className: "cls-1", points: "203.51 113.13 261.92 82.44 264.57 81.08" }),
        /* @__PURE__ */ _(
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
function xs() {
  return /* @__PURE__ */ _(
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
        /* @__PURE__ */ _("path", { className: "cls-1", d: "M120.78,114.86c5.07-.21,41.51-1.07,66.97,27.84,17.94,20.37,19.97,43.63,20.32,51.17" }),
        /* @__PURE__ */ _("path", { className: "cls-1", d: "M171.94,110.56c11.36,2.45,25.72,4.46,42.32,4.23,11.24-.16,21.3-1.31,29.91-2.82" }),
        /* @__PURE__ */ _("line", { className: "cls-1", x1: "96.49", x2: "96.49", y1: "136.03", y2: "10.21" }),
        /* @__PURE__ */ _("line", { className: "cls-1", x1: "145.3", x2: "145.3", y1: "60.97", y2: "10.21" }),
        /* @__PURE__ */ _("line", { className: "cls-1", x1: "193.99", x2: "193.99", y1: "60.97", y2: "10.21" }),
        /* @__PURE__ */ _("line", { className: "cls-1", x1: "241.92", x2: "241.92", y1: "60.97", y2: "10.21" }),
        /* @__PURE__ */ _(
          "path",
          {
            className: "cls-1",
            d: "M13.27,114.94c-3.95-3.75-6.41-9.05-6.41-14.92,0-11.36,9.21-20.56,20.56-20.56,2.84,0,5.54.58,8,1.62"
          }
        ),
        /* @__PURE__ */ _("polyline", { className: "cls-1", points: "96.49 113.13 38.08 82.44 35.43 81.08" }),
        /* @__PURE__ */ _(
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
const Ts = M.div`
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
`, Os = ({
  children: e,
  className: t,
  isInCandidateSelection: n,
  onAnimationEnd: r,
  placeholderRectangle: o
}) => /* @__PURE__ */ _(
  Ts,
  {
    $isInCandidateSelection: n,
    $placeholderRectangle: o,
    className: t,
    onAnimationEnd: r,
    children: e
  }
), Is = {
  [tn.LEFT]: /* @__PURE__ */ _(ks, {}),
  [tn.RIGHT]: /* @__PURE__ */ _(xs, {})
};
function As({ placeholderRectangle: e, ...t }) {
  const { placeholder: n } = Ce();
  return /* @__PURE__ */ _(Os, { placeholderRectangle: e, ...t, children: Is[n] });
}
function Rs() {
  const [e, t] = F(), [n, r] = F(!1), o = he(
    (f) => {
      var y, v;
      t((y = f == null ? void 0 : f.detail) == null ? void 0 : y.cameraResolution);
      const p = (v = f == null ? void 0 : f.detail) == null ? void 0 : v.isMirroring;
      p !== void 0 && r(p);
    },
    [t]
  );
  Se(_e.CAMERA_PROPS_CHANGED, o);
  const [i, a] = F({
    code: z.PALM_NOT_PRESENT,
    // FIXME Default instruction should not be here
    isEscalated: !1
  }), s = he(
    (f) => {
      var p, y;
      a({
        code: (p = f == null ? void 0 : f.detail) == null ? void 0 : p.instructionCode,
        isEscalated: ((y = f == null ? void 0 : f.detail) == null ? void 0 : y.isEscalated) ?? !1
      });
    },
    [a]
  );
  Se(_e.INSTRUCTION_CHANGED, s);
  const [l, u] = F(Y.LOADING), [d, c] = F(), h = he(
    (f) => {
      var y, v;
      u((y = f.detail) == null ? void 0 : y.appState);
      const p = (v = f == null ? void 0 : f.detail) == null ? void 0 : v.error;
      p && c(p);
    },
    [u, c]
  );
  return Se(_e.STATE_CHANGED, h), {
    cameraResolution: e,
    instruction: i,
    isMirroring: n,
    appState: l,
    error: d
  };
}
function Ps() {
  const { appState: e, cameraResolution: t, error: n, instruction: r, isMirroring: o } = Rs(), i = r.code === z.CANDIDATE_SELECTION, { instructions: a, showDetectionLayer: s } = Ce();
  return e === Y.ERROR ? /* @__PURE__ */ _(mo, { text: n == null ? void 0 : n.message }) : e === Y.RUNNING && t ? /* @__PURE__ */ _(V, { children: [
    s && /* @__PURE__ */ _(ws, { cameraResolution: t, isImageMirror: o }),
    /* @__PURE__ */ _(
      As,
      {
        isInCandidateSelection: i,
        placeholderRectangle: ts(t)
      }
    ),
    r.code && /* @__PURE__ */ _(gs, { cssTop: 50, isInCandidateSelection: i, children: a[r.code] }),
    /* @__PURE__ */ _(us, { customControlEvent: _e.CONTROL, isSwitchCameraDisabled: i })
  ] }) : /* @__PURE__ */ _(Ns, { cameraHeight: t == null ? void 0 : t.height, cameraWidth: t == null ? void 0 : t.width, state: e });
}
const Ls = (e) => {
  var l, u;
  const t = { ...Aa, ...e == null ? void 0 : e.instructions }, n = {
    [Y.LOADING]: { ...cr.loading, ...(l = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : l.loading },
    [Y.WAITING]: { ...cr.waiting, ...(u = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : u.waiting }
  }, r = (e == null ? void 0 : e.placeholder) ?? Ra, o = (e == null ? void 0 : e.backdropColor) ?? Oa, i = (e == null ? void 0 : e.showDetectionLayer) ?? !1, a = (e == null ? void 0 : e.showCameraButtons) ?? !1, s = Ka(e == null ? void 0 : e.theme);
  return {
    instructions: t,
    appStateInstructions: n,
    placeholder: r,
    backdropColor: o,
    showDetectionLayer: i,
    showCameraButtons: a,
    theme: s
  };
};
function Ds({ props: e }) {
  const t = Za(_e.VIDEO_ELEMENT_SIZE);
  return /* @__PURE__ */ _(ja, { uiProps: Ls(e), videoElementSize: t, children: /* @__PURE__ */ _(Ps, {}) });
}
Lo(Ds, "x-dot-palm-capture-ui", ["props"]);
