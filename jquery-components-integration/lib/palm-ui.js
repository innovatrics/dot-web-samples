var go = Object.defineProperty;
var yo = (e, t, n) => t in e ? go(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Je = (e, t, n) => yo(e, typeof t != "symbol" ? t + "" : t, n);
var Ve, S, lr, le, bn, ur, Lt, nn, Dt, Mt, fr, Ge = {}, dr = [], vo = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, mt = Array.isArray;
function Q(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function _r(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function L(e, t, n) {
  var r, o, i, a = {};
  for (i in t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ve.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) a[i] === void 0 && (a[i] = e.defaultProps[i]);
  return Fe(e, a, r, o, null);
}
function Fe(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o ?? ++lr, __i: -1, __u: 0 };
  return o == null && S.vnode != null && S.vnode(i), i;
}
function Co() {
  return { current: null };
}
function j(e) {
  return e.children;
}
function W(e, t) {
  this.props = e, this.context = t;
}
function me(e, t) {
  if (t == null) return e.__ ? me(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? me(e) : null;
}
function hr(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) {
      e.__e = e.__c.base = n.__e;
      break;
    }
    return hr(e);
  }
}
function Ht(e) {
  (!e.__d && (e.__d = !0) && le.push(e) && !ft.__r++ || bn !== S.debounceRendering) && ((bn = S.debounceRendering) || ur)(ft);
}
function ft() {
  var e, t, n, r, o, i, a, s;
  for (le.sort(Lt); e = le.shift(); ) e.__d && (t = le.length, r = void 0, i = (o = (n = e).__v).__e, a = [], s = [], n.__P && ((r = Q({}, o)).__v = o.__v + 1, S.vnode && S.vnode(r), rn(n.__P, r, o, n.__n, n.__P.namespaceURI, 32 & o.__u ? [i] : null, a, i ?? me(o), !!(32 & o.__u), s), r.__v = o.__v, r.__.__k[r.__i] = r, gr(a, r, s), r.__e != i && hr(r)), le.length > t && le.sort(Lt));
  ft.__r = 0;
}
function pr(e, t, n, r, o, i, a, s, l, u, d) {
  var c, h, f, p, y, v = r && r.__k || dr, m = t.length;
  for (n.__d = l, wo(n, t, v), l = n.__d, c = 0; c < m; c++) (f = n.__k[c]) != null && typeof f != "boolean" && typeof f != "function" && (h = f.__i === -1 ? Ge : v[f.__i] || Ge, f.__i = c, rn(e, f, h, o, i, a, s, l, u, d), p = f.__e, f.ref && h.ref != f.ref && (h.ref && on(h.ref, null, f), d.push(f.ref, f.__c || p, f)), y == null && p != null && (y = p), 65536 & f.__u || h.__k === f.__k ? (l && typeof f.type == "string" && !e.contains(l) && (l = me(h)), l = mr(f, l, e)) : typeof f.type == "function" && f.__d !== void 0 ? l = f.__d : p && (l = p.nextSibling), f.__d = void 0, f.__u &= -196609);
  n.__d = l, n.__e = y;
}
function wo(e, t, n) {
  var r, o, i, a, s, l = t.length, u = n.length, d = u, c = 0;
  for (e.__k = [], r = 0; r < l; r++) a = r + c, (o = e.__k[r] = (o = t[r]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? Fe(null, o, null, null, null) : mt(o) ? Fe(j, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? Fe(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = e, o.__b = e.__b + 1, s = bo(o, n, a, d), o.__i = s, i = null, s !== -1 && (d--, (i = n[s]) && (i.__u |= 131072)), i == null || i.__v === null ? (s == -1 && c--, typeof o.type != "function" && (o.__u |= 65536)) : s !== a && (s == a - 1 ? c = s - a : s == a + 1 ? c++ : s > a ? d > l - a ? c += s - a : c-- : s < a && c++, s !== r + c && (o.__u |= 65536))) : (i = n[a]) && i.key == null && i.__e && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = me(i)), Ut(i, i, !1), n[a] = null, d--);
  if (d) for (r = 0; r < u; r++) (i = n[r]) != null && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = me(i)), Ut(i, i));
}
function mr(e, t, n) {
  var r, o;
  if (typeof e.type == "function") {
    for (r = e.__k, o = 0; r && o < r.length; o++) r[o] && (r[o].__ = e, t = mr(r[o], t, n));
    return t;
  }
  e.__e != t && (n.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType === 8);
  return t;
}
function ee(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (mt(e) ? e.some(function(n) {
    ee(n, t);
  }) : t.push(e)), t;
}
function bo(e, t, n, r) {
  var o = e.key, i = e.type, a = n - 1, s = n + 1, l = t[n];
  if (l === null || l && o == l.key && i === l.type && !(131072 & l.__u)) return n;
  if (r > (l != null && !(131072 & l.__u) ? 1 : 0)) for (; a >= 0 || s < t.length; ) {
    if (a >= 0) {
      if ((l = t[a]) && !(131072 & l.__u) && o == l.key && i === l.type) return a;
      a--;
    }
    if (s < t.length) {
      if ((l = t[s]) && !(131072 & l.__u) && o == l.key && i === l.type) return s;
      s++;
    }
  }
  return -1;
}
function Sn(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || vo.test(t) ? n : n + "px";
}
function Qe(e, t, n, r, o) {
  var i;
  e: if (t === "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || Sn(e.style, t, "");
    if (n) for (t in n) r && n[t] === r[t] || Sn(e.style, t, n[t]);
  }
  else if (t[0] === "o" && t[1] === "n") i = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")), t = t.toLowerCase() in e || t === "onFocusOut" || t === "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = nn, e.addEventListener(t, i ? Mt : Dt, i)) : e.removeEventListener(t, i ? Mt : Dt, i);
  else {
    if (o == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = n ?? "";
      break e;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && t[4] !== "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
  }
}
function En(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t.t == null) t.t = nn++;
      else if (t.t < n.u) return;
      return n(S.event ? S.event(t) : t);
    }
  };
}
function rn(e, t, n, r, o, i, a, s, l, u) {
  var d, c, h, f, p, y, v, m, g, N, E, x, b, C, M, V, H = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && (l = !!(32 & n.__u), i = [s = t.__e = n.__e]), (d = S.__b) && d(t);
  e: if (typeof H == "function") try {
    if (m = t.props, g = "prototype" in H && H.prototype.render, N = (d = H.contextType) && r[d.__c], E = d ? N ? N.props.value : d.__ : r, n.__c ? v = (c = t.__c = n.__c).__ = c.__E : (g ? t.__c = c = new H(m, E) : (t.__c = c = new W(m, E), c.constructor = H, c.render = Eo), N && N.sub(c), c.props = m, c.state || (c.state = {}), c.context = E, c.__n = r, h = c.__d = !0, c.__h = [], c._sb = []), g && c.__s == null && (c.__s = c.state), g && H.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = Q({}, c.__s)), Q(c.__s, H.getDerivedStateFromProps(m, c.__s))), f = c.props, p = c.state, c.__v = t, h) g && H.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), g && c.componentDidMount != null && c.__h.push(c.componentDidMount);
    else {
      if (g && H.getDerivedStateFromProps == null && m !== f && c.componentWillReceiveProps != null && c.componentWillReceiveProps(m, E), !c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(m, c.__s, E) === !1 || t.__v === n.__v)) {
        for (t.__v !== n.__v && (c.props = m, c.state = c.__s, c.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(we) {
          we && (we.__ = t);
        }), x = 0; x < c._sb.length; x++) c.__h.push(c._sb[x]);
        c._sb = [], c.__h.length && a.push(c);
        break e;
      }
      c.componentWillUpdate != null && c.componentWillUpdate(m, c.__s, E), g && c.componentDidUpdate != null && c.__h.push(function() {
        c.componentDidUpdate(f, p, y);
      });
    }
    if (c.context = E, c.props = m, c.__P = e, c.__e = !1, b = S.__r, C = 0, g) {
      for (c.state = c.__s, c.__d = !1, b && b(t), d = c.render(c.props, c.state, c.context), M = 0; M < c._sb.length; M++) c.__h.push(c._sb[M]);
      c._sb = [];
    } else do
      c.__d = !1, b && b(t), d = c.render(c.props, c.state, c.context), c.state = c.__s;
    while (c.__d && ++C < 25);
    c.state = c.__s, c.getChildContext != null && (r = Q(Q({}, r), c.getChildContext())), g && !h && c.getSnapshotBeforeUpdate != null && (y = c.getSnapshotBeforeUpdate(f, p)), pr(e, mt(V = d != null && d.type === j && d.key == null ? d.props.children : d) ? V : [V], t, n, r, o, i, a, s, l, u), c.base = t.__e, t.__u &= -161, c.__h.length && a.push(c), v && (c.__E = c.__ = null);
  } catch (we) {
    t.__v = null, l || i != null ? (t.__e = s, t.__u |= l ? 160 : 32, i[i.indexOf(s)] = null) : (t.__e = n.__e, t.__k = n.__k), S.__e(we, t, n);
  }
  else i == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = So(n.__e, t, n, r, o, i, a, l, u);
  (d = S.diffed) && d(t);
}
function gr(e, t, n) {
  t.__d = void 0;
  for (var r = 0; r < n.length; r++) on(n[r], n[++r], n[++r]);
  S.__c && S.__c(t, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      S.__e(i, o.__v);
    }
  });
}
function So(e, t, n, r, o, i, a, s, l) {
  var u, d, c, h, f, p, y, v = n.props, m = t.props, g = t.type;
  if (g === "svg" ? o = "http://www.w3.org/2000/svg" : g === "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (u = 0; u < i.length; u++) if ((f = i[u]) && "setAttribute" in f == !!g && (g ? f.localName === g : f.nodeType === 3)) {
      e = f, i[u] = null;
      break;
    }
  }
  if (e == null) {
    if (g === null) return document.createTextNode(m);
    e = document.createElementNS(o, g, m.is && m), i = null, s = !1;
  }
  if (g === null) v === m || s && e.data === m || (e.data = m);
  else {
    if (i = i && Ve.call(e.childNodes), v = n.props || Ge, !s && i != null) for (v = {}, u = 0; u < e.attributes.length; u++) v[(f = e.attributes[u]).name] = f.value;
    for (u in v) if (f = v[u], u != "children") {
      if (u == "dangerouslySetInnerHTML") c = f;
      else if (u !== "key" && !(u in m)) {
        if (u == "value" && "defaultValue" in m || u == "checked" && "defaultChecked" in m) continue;
        Qe(e, u, null, f, o);
      }
    }
    for (u in m) f = m[u], u == "children" ? h = f : u == "dangerouslySetInnerHTML" ? d = f : u == "value" ? p = f : u == "checked" ? y = f : u === "key" || s && typeof f != "function" || v[u] === f || Qe(e, u, f, v[u], o);
    if (d) s || c && (d.__html === c.__html || d.__html === e.innerHTML) || (e.innerHTML = d.__html), t.__k = [];
    else if (c && (e.innerHTML = ""), pr(e, mt(h) ? h : [h], t, n, r, g === "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, a, i ? i[0] : n.__k && me(n, 0), s, l), i != null) for (u = i.length; u--; ) i[u] != null && _r(i[u]);
    s || (u = "value", p !== void 0 && (p !== e[u] || g === "progress" && !p || g === "option" && p !== v[u]) && Qe(e, u, p, v[u], o), u = "checked", y !== void 0 && y !== e[u] && Qe(e, u, y, v[u], o));
  }
  return e;
}
function on(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    S.__e(r, n);
  }
}
function Ut(e, t, n) {
  var r, o;
  if (S.unmount && S.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || on(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (i) {
      S.__e(i, t);
    }
    r.base = r.__P = null;
  }
  if (r = e.__k) for (o = 0; o < r.length; o++) r[o] && Ut(r[o], t, n || typeof e.type != "function");
  n || e.__e == null || _r(e.__e), e.__c = e.__ = e.__e = e.__d = void 0;
}
function Eo(e, t, n) {
  return this.constructor(e, n);
}
function ae(e, t, n) {
  var r, o, i, a;
  S.__ && S.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], a = [], rn(t, e = (!r && n || t).__k = L(j, null, [e]), o || Ge, Ge, t.namespaceURI, !r && n ? [n] : o ? null : t.firstChild ? Ve.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, a), gr(i, e, a);
}
function an(e, t) {
  ae(e, t, an);
}
function sn(e, t, n) {
  var r, o, i, a, s = Q({}, e.props);
  for (i in e.type && e.type.defaultProps && (a = e.type.defaultProps), t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i] === void 0 && a !== void 0 ? a[i] : t[i];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? Ve.call(arguments, 2) : n), Fe(e.type, s, r || e.key, o || e.ref, null);
}
function yr(e, t) {
  var n = { __c: t = "__cC" + fr++, __: e, Consumer: function(r, o) {
    return r.children(o);
  }, Provider: function(r) {
    var o, i;
    return this.getChildContext || (o = [], (i = {})[t] = this, this.getChildContext = function() {
      return i;
    }, this.componentWillUnmount = function() {
      o = null;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && o.some(function(s) {
        s.__e = !0, Ht(s);
      });
    }, this.sub = function(a) {
      o.push(a);
      var s = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        o && o.splice(o.indexOf(a), 1), s && s.call(a);
      };
    }), r.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
Ve = dr.slice, S = { __e: function(e, t, n, r) {
  for (var o, i, a; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), a = o.__d), a) return o.__E = o;
  } catch (s) {
    e = s;
  }
  throw e;
} }, lr = 0, W.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Q({}, this.state), typeof e == "function" && (e = e(Q({}, n), this.props)), e && Q(n, e), e != null && this.__v && (t && this._sb.push(t), Ht(this));
}, W.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ht(this));
}, W.prototype.render = j, le = [], ur = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Lt = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, ft.__r = 0, nn = 0, Dt = En(!1), Mt = En(!0), fr = 0;
function cn() {
  return (cn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var $o = ["context", "children"];
function No(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, n = function(r, o) {
    if (r == null) return {};
    var i, a, s = {}, l = Object.keys(r);
    for (a = 0; a < l.length; a++) o.indexOf(i = l[a]) >= 0 || (s[i] = r[i]);
    return s;
  }(e, $o);
  return sn(t, n);
}
function ko() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = L(No, cn({}, this._props, { context: e.detail.context }), function t(n, r) {
    if (n.nodeType === 3) return n.data;
    if (n.nodeType !== 1) return null;
    var o = [], i = {}, a = 0, s = n.attributes, l = n.childNodes;
    for (a = s.length; a--; ) s[a].name !== "slot" && (i[s[a].name] = s[a].value, i[vr(s[a].name)] = s[a].value);
    for (a = l.length; a--; ) {
      var u = t(l[a], null), d = l[a].slot;
      d ? i[d] = L($n, { name: d }, u) : o[a] = u;
    }
    var c = r ? L($n, null, o) : o;
    return L(r || n.nodeName.toLowerCase(), i, c);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? an : ae)(this._vdom, this._root);
}
function vr(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function xo(e, t, n) {
  if (this._vdom) {
    var r = {};
    r[e] = n = n ?? void 0, r[vr(e)] = n, this._vdom = sn(this._vdom, r), ae(this._vdom, this._root);
  }
}
function To() {
  ae(this._vdom = null, this._root);
}
function $n(e, t) {
  var n = this;
  return L("slot", cn({}, e, { ref: function(r) {
    r ? (n.ref = r, n._listener || (n._listener = function(o) {
      o.stopPropagation(), o.detail.context = t;
    }, r.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function Oo(e, t, n, r) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = e, i._root = i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = ko, o.prototype.attributeChangedCallback = xo, o.prototype.disconnectedCallback = To, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = n, n.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom.props[i];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(i, null, a) : (this._props || (this._props = {}), this._props[i] = a, this.connectedCallback());
      var s = typeof a;
      a != null && s !== "string" && s !== "boolean" && s !== "number" || this.setAttribute(i, a);
    } });
  }), customElements.define(t, o);
}
var Io = 0;
function _(e, t, n, r, o, i) {
  t || (t = {});
  var a, s, l = t;
  if ("ref" in l) for (s in l = {}, t) s == "ref" ? a = t[s] : l[s] = t[s];
  var u = { type: e, props: l, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --Io, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (a = e.defaultProps)) for (s in a) l[s] === void 0 && (l[s] = a[s]);
  return S.vnode && S.vnode(u), u;
}
const Nn = {
  CONTINUE_DETECTION: "continue-detection",
  SWITCH_CAMERA: "switch-camera",
  TOGGLE_MIRROR: "toggle-mirror"
};
var Cr = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", e.CONTROL = "document-auto-capture:control", e.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", e.DOCUMENT_DETECTION = "document-auto-capture:document-detection", e.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", e.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", e.STATE_CHANGED = "document-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", e))(Cr || {}), de = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", e.CONTROL = "palm-capture:control", e.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", e.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", e.STATE_CHANGED = "palm-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", e))(de || {});
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
  DEVICE_PITCHED: "device_pitched"
};
var se, O, Tt, kn, $e = 0, wr = [], I = S, xn = I.__b, Tn = I.__r, On = I.diffed, In = I.__c, An = I.unmount, Rn = I.__;
function Oe(e, t) {
  I.__h && I.__h(O, e, $e || t), $e = 0;
  var n = O.__H || (O.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function B(e) {
  return $e = 1, ln(Er, e);
}
function ln(e, t, n) {
  var r = Oe(se++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Er(void 0, t), function(s) {
    var l = r.__N ? r.__N[0] : r.__[0], u = r.t(l, s);
    l !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = O, !O.u)) {
    var o = function(s, l, u) {
      if (!r.__c.__H) return !0;
      var d = r.__c.__H.__.filter(function(h) {
        return !!h.__c;
      });
      if (d.every(function(h) {
        return !h.__N;
      })) return !i || i.call(this, s, l, u);
      var c = !1;
      return d.forEach(function(h) {
        if (h.__N) {
          var f = h.__[0];
          h.__ = h.__N, h.__N = void 0, f !== h.__[0] && (c = !0);
        }
      }), !(!c && r.__c.props === s) && (!i || i.call(this, s, l, u));
    };
    O.u = !0;
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
  !I.__s && un(n.__H, t) && (n.__ = e, n.i = t, O.__H.__h.push(n));
}
function Ie(e, t) {
  var n = Oe(se++, 4);
  !I.__s && un(n.__H, t) && (n.__ = e, n.i = t, O.__h.push(n));
}
function Ze(e) {
  return $e = 5, te(function() {
    return { current: e };
  }, []);
}
function br(e, t, n) {
  $e = 6, Ie(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(e));
}
function te(e, t) {
  var n = Oe(se++, 7);
  return un(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function _e(e, t) {
  return $e = 8, te(function() {
    return e;
  }, t);
}
function Ye(e) {
  var t = O.context[e.__c], n = Oe(se++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(O)), t.props.value) : e.__;
}
function dt(e, t) {
  I.useDebugValue && I.useDebugValue(t ? t(e) : e);
}
function Sr() {
  var e = Oe(se++, 11);
  if (!e.__) {
    for (var t = O.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function Ao() {
  for (var e; e = wr.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(ot), e.__H.__h.forEach(Bt), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], I.__e(t, e.__v);
  }
}
I.__b = function(e) {
  O = null, xn && xn(e);
}, I.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Rn && Rn(e, t);
}, I.__r = function(e) {
  Tn && Tn(e), se = 0;
  var t = (O = e.__c).__H;
  t && (Tt === O ? (t.__h = [], O.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.i = n.__N = void 0;
  })) : (t.__h.forEach(ot), t.__h.forEach(Bt), t.__h = [], se = 0)), Tt = O;
}, I.diffed = function(e) {
  On && On(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (wr.push(t) !== 1 && kn === I.requestAnimationFrame || ((kn = I.requestAnimationFrame) || Ro)(Ao)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.i = void 0;
  })), Tt = O = null;
}, I.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(ot), n.__h = n.__h.filter(function(r) {
        return !r.__ || Bt(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], I.__e(r, n.__v);
    }
  }), In && In(e, t);
}, I.unmount = function(e) {
  An && An(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      ot(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && I.__e(t, n.__v));
};
var Pn = typeof requestAnimationFrame == "function";
function Ro(e) {
  var t, n = function() {
    clearTimeout(r), Pn && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  Pn && (t = requestAnimationFrame(n));
}
function ot(e) {
  var t = O, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), O = t;
}
function Bt(e) {
  var t = O;
  e.__c = e.__(), O = t;
}
function un(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function Er(e, t) {
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
function Po(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Lo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Do = /* @__PURE__ */ Po(
  function(e) {
    return Lo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function $r(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Ft(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function zt(e, t) {
  this.props = e, this.context = t;
}
function Mo(e, t) {
  function n(o) {
    var i = this.props.ref, a = i == o.ref;
    return !a && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !a : Ft(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, L(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(zt.prototype = new W()).isPureReactComponent = !0, zt.prototype.shouldComponentUpdate = function(e, t) {
  return Ft(this.props, e) || Ft(this.state, t);
};
var Ln = S.__b;
S.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Ln && Ln(e);
};
var Ho = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function Uo(e) {
  function t(n) {
    var r = $r({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = Ho, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Dn = function(e, t) {
  return e == null ? null : ee(ee(e).map(t));
}, Bo = { map: Dn, forEach: Dn, count: function(e) {
  return e ? ee(e).length : 0;
}, only: function(e) {
  var t = ee(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: ee }, Fo = S.__e;
S.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  Fo(e, t, n, r);
};
var Mn = S.unmount;
function Nr(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = $r({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return Nr(r, t, n);
  })), e;
}
function kr(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return kr(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function it() {
  this.__u = 0, this.t = null, this.__b = null;
}
function xr(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function zo(e) {
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
function Me() {
  this.u = null, this.o = null;
}
S.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Mn && Mn(e);
}, (it.prototype = new W()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var o = xr(r.__v), i = !1, a = function() {
    i || (i = !0, n.__R = null, o ? o(s) : s());
  };
  n.__R = a;
  var s = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var l = r.state.__a;
        r.__v.__k[0] = kr(l, l.__c.__P, l.__c.__O);
      }
      var u;
      for (r.setState({ __a: r.__b = null }); u = r.t.pop(); ) u.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(a, a);
}, it.prototype.componentWillUnmount = function() {
  this.t = [];
}, it.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Nr(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && L(j, null, e.fallback);
  return o && (o.__u &= -33), [L(j, null, t.__a ? null : e.children), o];
};
var Hn = function(e, t, n) {
  if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size)) for (n = e.u; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    e.u = n = n[2];
  }
};
function Wo(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function Go(e) {
  var t = this, n = e.i;
  t.componentWillUnmount = function() {
    ae(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== n && t.componentWillUnmount(), t.l || (t.i = n, t.l = { nodeType: 1, parentNode: n, childNodes: [], contains: function() {
    return !0;
  }, appendChild: function(r) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r);
  } }), ae(L(Wo, { context: t.context }, e.__v), t.l);
}
function jo(e, t) {
  var n = L(Go, { __v: e, i: t });
  return n.containerInfo = t, n;
}
(Me.prototype = new W()).__a = function(e) {
  var t = this, n = xr(t.__v), r = t.o.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), Hn(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, Me.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = ee(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; ) this.o.set(t[n], this.u = [1, 0, this.u]);
  return e.children;
}, Me.prototype.componentDidUpdate = Me.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, n) {
    Hn(e, n, t);
  });
};
var Tr = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Vo = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Zo = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Yo = /[A-Z0-9]/g, qo = typeof document < "u", Xo = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function Ko(e, t, n) {
  return t.__k == null && (t.textContent = ""), ae(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function Jo(e, t, n) {
  return an(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
W.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(W.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Un = S.event;
function Qo() {
}
function ei() {
  return this.cancelBubble;
}
function ti() {
  return this.defaultPrevented;
}
S.event = function(e) {
  return Un && (e = Un(e)), e.persist = Qo, e.isPropagationStopped = ei, e.isDefaultPrevented = ti, e.nativeEvent = e;
};
var fn, ni = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Bn = S.vnode;
S.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {};
    for (var i in n) {
      var a = n[i];
      if (!(i === "value" && "defaultValue" in n && a == null || qo && i === "children" && r === "noscript" || i === "class" || i === "className")) {
        var s = i.toLowerCase();
        i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && a === !0 ? a = "" : s === "translate" && a === "no" ? a = !1 : s === "ondoubleclick" ? i = "ondblclick" : s !== "onchange" || r !== "input" && r !== "textarea" || Xo(n.type) ? s === "onfocus" ? i = "onfocusin" : s === "onblur" ? i = "onfocusout" : Zo.test(i) ? i = s : r.indexOf("-") === -1 && Vo.test(i) ? i = i.replace(Yo, "-$&").toLowerCase() : a === null && (a = void 0) : s = i = "oninput", s === "oninput" && o[i = s] && (i = "oninputCapture"), o[i] = a;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = ee(n.children).forEach(function(l) {
      l.props.selected = o.value.indexOf(l.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = ee(n.children).forEach(function(l) {
      l.props.selected = o.multiple ? o.defaultValue.indexOf(l.props.value) != -1 : o.defaultValue == l.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", ni)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = Tr, Bn && Bn(e);
};
var Fn = S.__r;
S.__r = function(e) {
  Fn && Fn(e), fn = e.__c;
};
var zn = S.diffed;
S.diffed = function(e) {
  zn && zn(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), fn = null;
};
var ri = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return fn.__n[e.__c].props.value;
}, useCallback: _e, useContext: Ye, useDebugValue: dt, useDeferredValue: Ir, useEffect: ne, useId: Sr, useImperativeHandle: br, useInsertionEffect: Rr, useLayoutEffect: Ie, useMemo: te, useReducer: ln, useRef: Ze, useState: B, useSyncExternalStore: Pr, useTransition: Ar } } };
function oi(e) {
  return L.bind(null, e);
}
function gt(e) {
  return !!e && e.$$typeof === Tr;
}
function ii(e) {
  return gt(e) && e.type === j;
}
function ai(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function si(e) {
  return gt(e) ? sn.apply(null, arguments) : e;
}
function ci(e) {
  return !!e.__k && (ae(null, e), !0);
}
function li(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var ui = function(e, t) {
  return e(t);
}, fi = function(e, t) {
  return e(t);
}, di = j;
function Or(e) {
  e();
}
function Ir(e) {
  return e;
}
function Ar() {
  return [!1, Or];
}
var Rr = Ie, _i = gt;
function Pr(e, t) {
  var n = t(), r = B({ h: { __: n, v: t } }), o = r[0].h, i = r[1];
  return Ie(function() {
    o.__ = n, o.v = t, Ot(o) && i({ h: o });
  }, [e, n, t]), ne(function() {
    return Ot(o) && i({ h: o }), e(function() {
      Ot(o) && i({ h: o });
    });
  }, [e]), n;
}
function Ot(e) {
  var t, n, r = e.v, o = e.__;
  try {
    var i = r();
    return !((t = o) === (n = i) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
}
var re = { useState: B, useId: Sr, useReducer: ln, useEffect: ne, useLayoutEffect: Ie, useInsertionEffect: Rr, useTransition: Ar, useDeferredValue: Ir, useSyncExternalStore: Pr, startTransition: Or, useRef: Ze, useImperativeHandle: br, useMemo: te, useCallback: _e, useContext: Ye, useDebugValue: dt, version: "17.0.2", Children: Bo, render: Ko, hydrate: Jo, unmountComponentAtNode: ci, createPortal: jo, createElement: L, createContext: yr, createFactory: oi, cloneElement: si, createRef: Co, Fragment: j, isValidElement: gt, isElement: _i, isFragment: ii, isMemo: ai, findDOMNode: li, Component: W, PureComponent: zt, memo: Mo, forwardRef: Uo, flushSync: fi, unstable_batchedUpdates: ui, StrictMode: di, Suspense: it, SuspenseList: Me, lazy: zo, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ri };
function hi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pi = function(t, n, r, o) {
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
};
const mi = /* @__PURE__ */ hi(pi);
var T = "-ms-", ze = "-moz-", k = "-webkit-", Lr = "comm", yt = "rule", dn = "decl", gi = "@import", Dr = "@keyframes", yi = "@layer", Mr = Math.abs, _n = String.fromCharCode, Wt = Object.assign;
function vi(e, t) {
  return R(e, 0) ^ 45 ? (((t << 2 ^ R(e, 0)) << 2 ^ R(e, 1)) << 2 ^ R(e, 2)) << 2 ^ R(e, 3) : 0;
}
function Hr(e) {
  return e.trim();
}
function K(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function w(e, t, n) {
  return e.replace(t, n);
}
function at(e, t, n) {
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
function Ur(e) {
  return e.length;
}
function He(e, t) {
  return t.push(e), e;
}
function Ci(e, t) {
  return e.map(t).join("");
}
function Wn(e, t) {
  return e.filter(function(n) {
    return !K(n, t);
  });
}
var vt = 1, ke = 1, Br = 0, F = 0, A = 0, Ae = "";
function Ct(e, t, n, r, o, i, a, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: vt, column: ke, length: a, return: "", siblings: s };
}
function ie(e, t) {
  return Wt(Ct("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Se(e) {
  for (; e.root; )
    e = ie(e.root, { children: [e] });
  He(e, e.siblings);
}
function wi() {
  return A;
}
function bi() {
  return A = F > 0 ? R(Ae, --F) : 0, ke--, A === 10 && (ke = 1, vt--), A;
}
function G() {
  return A = F < Br ? R(Ae, F++) : 0, ke++, A === 10 && (ke = 1, vt++), A;
}
function he() {
  return R(Ae, F);
}
function st() {
  return F;
}
function wt(e, t) {
  return Ne(Ae, e, t);
}
function Gt(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Si(e) {
  return vt = ke = 1, Br = Z(Ae = e), F = 0, [];
}
function Ei(e) {
  return Ae = "", e;
}
function It(e) {
  return Hr(wt(F - 1, jt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function $i(e) {
  for (; (A = he()) && A < 33; )
    G();
  return Gt(e) > 2 || Gt(A) > 3 ? "" : " ";
}
function Ni(e, t) {
  for (; --t && G() && !(A < 48 || A > 102 || A > 57 && A < 65 || A > 70 && A < 97); )
    ;
  return wt(e, st() + (t < 6 && he() == 32 && G() == 32));
}
function jt(e) {
  for (; G(); )
    switch (A) {
      case e:
        return F;
      case 34:
      case 39:
        e !== 34 && e !== 39 && jt(A);
        break;
      case 40:
        e === 41 && jt(e);
        break;
      case 92:
        G();
        break;
    }
  return F;
}
function ki(e, t) {
  for (; G() && e + A !== 57; )
    if (e + A === 84 && he() === 47)
      break;
  return "/*" + wt(t, F - 1) + "*" + _n(e === 47 ? e : G());
}
function xi(e) {
  for (; !Gt(he()); )
    G();
  return wt(e, F);
}
function Ti(e) {
  return Ei(ct("", null, null, null, [""], e = Si(e), 0, [0], e));
}
function ct(e, t, n, r, o, i, a, s, l) {
  for (var u = 0, d = 0, c = a, h = 0, f = 0, p = 0, y = 1, v = 1, m = 1, g = 0, N = "", E = o, x = i, b = r, C = N; v; )
    switch (p = g, g = G()) {
      case 40:
        if (p != 108 && R(C, c - 1) == 58) {
          at(C += w(It(g), "&", "&\f"), "&\f", Mr(u ? s[u - 1] : 0)) != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += It(g);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += $i(p);
        break;
      case 92:
        C += Ni(st() - 1, 7);
        continue;
      case 47:
        switch (he()) {
          case 42:
          case 47:
            He(Oi(ki(G(), st()), t, n, l), l);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * y:
        s[u++] = Z(C) * m;
      case 125 * y:
      case 59:
      case 0:
        switch (g) {
          case 0:
          case 125:
            v = 0;
          case 59 + d:
            m == -1 && (C = w(C, /\f/g, "")), f > 0 && Z(C) - c && He(f > 32 ? jn(C + ";", r, n, c - 1, l) : jn(w(C, " ", "") + ";", r, n, c - 2, l), l);
            break;
          case 59:
            C += ";";
          default:
            if (He(b = Gn(C, t, n, u, d, o, s, N, E = [], x = [], c, i), i), g === 123)
              if (d === 0)
                ct(C, t, b, b, E, i, c, s, x);
              else
                switch (h === 99 && R(C, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ct(e, b, b, r && He(Gn(e, b, b, 0, 0, o, s, N, o, E = [], c, x), x), o, x, c, s, r ? E : x);
                    break;
                  default:
                    ct(C, b, b, b, [""], x, 0, s, x);
                }
        }
        u = d = f = 0, y = m = 1, N = C = "", c = a;
        break;
      case 58:
        c = 1 + Z(C), f = p;
      default:
        if (y < 1) {
          if (g == 123)
            --y;
          else if (g == 125 && y++ == 0 && bi() == 125)
            continue;
        }
        switch (C += _n(g), g * y) {
          case 38:
            m = d > 0 ? 1 : (C += "\f", -1);
            break;
          case 44:
            s[u++] = (Z(C) - 1) * m, m = 1;
            break;
          case 64:
            he() === 45 && (C += It(G())), h = he(), d = c = Z(N = C += xi(st())), g++;
            break;
          case 45:
            p === 45 && Z(C) == 2 && (y = 0);
        }
    }
  return i;
}
function Gn(e, t, n, r, o, i, a, s, l, u, d, c) {
  for (var h = o - 1, f = o === 0 ? i : [""], p = Ur(f), y = 0, v = 0, m = 0; y < r; ++y)
    for (var g = 0, N = Ne(e, h + 1, h = Mr(v = a[y])), E = e; g < p; ++g)
      (E = Hr(v > 0 ? f[g] + " " + N : w(N, /&\f/g, f[g]))) && (l[m++] = E);
  return Ct(e, t, n, o === 0 ? yt : s, l, u, d, c);
}
function Oi(e, t, n, r) {
  return Ct(e, t, n, Lr, _n(wi()), Ne(e, 2, -2), 0, r);
}
function jn(e, t, n, r, o) {
  return Ct(e, t, n, dn, Ne(e, 0, r), Ne(e, r + 1, -1), r, o);
}
function Fr(e, t, n) {
  switch (vi(e, t)) {
    case 5103:
      return k + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return k + e + e;
    case 4789:
      return ze + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return k + e + ze + e + T + e + e;
    case 5936:
      switch (R(e, t + 11)) {
        case 114:
          return k + e + T + w(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return k + e + T + w(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return k + e + T + w(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return k + e + T + e + e;
    case 6165:
      return k + e + T + "flex-" + e + e;
    case 5187:
      return k + e + w(e, /(\w+).+(:[^]+)/, k + "box-$1$2" + T + "flex-$1$2") + e;
    case 5443:
      return k + e + T + "flex-item-" + w(e, /flex-|-self/g, "") + (K(e, /flex-|baseline/) ? "" : T + "grid-row-" + w(e, /flex-|-self/g, "")) + e;
    case 4675:
      return k + e + T + "flex-line-pack" + w(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return k + e + T + w(e, "shrink", "negative") + e;
    case 5292:
      return k + e + T + w(e, "basis", "preferred-size") + e;
    case 6060:
      return k + "box-" + w(e, "-grow", "") + k + e + T + w(e, "grow", "positive") + e;
    case 4554:
      return k + w(e, /([^-])(transform)/g, "$1" + k + "$2") + e;
    case 6187:
      return w(w(w(e, /(zoom-|grab)/, k + "$1"), /(image-set)/, k + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return w(e, /(image-set\([^]*)/, k + "$1$`$1");
    case 4968:
      return w(w(e, /(.+:)(flex-)?(.*)/, k + "box-pack:$3" + T + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + k + e + e;
    case 4200:
      if (!K(e, /flex-|baseline/)) return T + "grid-column-align" + Ne(e, t) + e;
      break;
    case 2592:
    case 3360:
      return T + w(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, K(r.props, /grid-\w+-end/);
      }) ? ~at(e + (n = n[t].value), "span", 0) ? e : T + w(e, "-start", "") + e + T + "grid-row-span:" + (~at(n, "span", 0) ? K(n, /\d+/) : +K(n, /\d+/) - +K(e, /\d+/)) + ";" : T + w(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return K(r.props, /grid-\w+-start/);
      }) ? e : T + w(w(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return w(e, /(.+)-inline(.+)/, k + "$1$2") + e;
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
          case 109:
            if (R(e, t + 4) !== 45)
              break;
          case 102:
            return w(e, /(.+:)(.+)-([^]+)/, "$1" + k + "$2-$3$1" + ze + (R(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~at(e, "stretch", 0) ? Fr(w(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return w(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, a, s, l, u) {
        return T + o + ":" + i + u + (a ? T + o + "-span:" + (s ? l : +l - +i) + u : "") + e;
      });
    case 4949:
      if (R(e, t + 6) === 121)
        return w(e, ":", ":" + k) + e;
      break;
    case 6444:
      switch (R(e, R(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return w(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + k + (R(e, 14) === 45 ? "inline-" : "") + "box$3$1" + k + "$2$3$1" + T + "$2box$3") + e;
        case 100:
          return w(e, ":", ":" + T) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return w(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function _t(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Ii(e, t, n, r) {
  switch (e.type) {
    case yi:
      if (e.children.length) break;
    case gi:
    case dn:
      return e.return = e.return || e.value;
    case Lr:
      return "";
    case Dr:
      return e.return = e.value + "{" + _t(e.children, r) + "}";
    case yt:
      if (!Z(e.value = e.props.join(","))) return "";
  }
  return Z(n = _t(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Ai(e) {
  var t = Ur(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function Ri(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Pi(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case dn:
        e.return = Fr(e.value, e.length, n);
        return;
      case Dr:
        return _t([ie(e, { value: w(e.value, "@", "@" + k) })], r);
      case yt:
        if (e.length)
          return Ci(n = e.props, function(o) {
            switch (K(o, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Se(ie(e, { props: [w(o, /:(read-\w+)/, ":" + ze + "$1")] })), Se(ie(e, { props: [o] })), Wt(e, { props: Wn(n, r) });
                break;
              case "::placeholder":
                Se(ie(e, { props: [w(o, /:(plac\w+)/, ":" + k + "input-$1")] })), Se(ie(e, { props: [w(o, /:(plac\w+)/, ":" + ze + "$1")] })), Se(ie(e, { props: [w(o, /:(plac\w+)/, T + "input-$1")] })), Se(ie(e, { props: [o] })), Wt(e, { props: Wn(n, r) });
                break;
            }
            return "";
          });
    }
}
var Li = {
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
}, $ = {}, ye = typeof process < "u" && $ !== void 0 && ($.REACT_APP_SC_ATTR || $.SC_ATTR) || "data-styled", zr = "active", Wr = "data-styled-version", bt = "6.1.11", hn = `/*!sc*/
`, pn = typeof window < "u" && "HTMLElement" in window, Di = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && $ !== void 0 && $.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && $.REACT_APP_SC_DISABLE_SPEEDY !== "" ? $.REACT_APP_SC_DISABLE_SPEEDY !== "false" && $.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && $ !== void 0 && $.SC_DISABLE_SPEEDY !== void 0 && $.SC_DISABLE_SPEEDY !== "" ? $.SC_DISABLE_SPEEDY !== "false" && $.SC_DISABLE_SPEEDY : $.NODE_ENV !== "production"), Vn = /invalid hook call/i, et = /* @__PURE__ */ new Set(), Mi = function(e, t) {
  if ($.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(a) {
        for (var s = [], l = 1; l < arguments.length; l++) s[l - 1] = arguments[l];
        Vn.test(a) ? (i = !1, et.delete(r)) : o.apply(void 0, ge([a], s, !1));
      }, Ze(), i && !et.has(r) && (console.warn(r), et.add(r));
    } catch (a) {
      Vn.test(a.message) && et.delete(r);
    } finally {
      console.error = o;
    }
  }
}, St = Object.freeze([]), xe = Object.freeze({});
function Hi(e, t, n) {
  return n === void 0 && (n = xe), e.theme !== n.theme && e.theme || t || n.theme;
}
var Vt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Ui = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Bi = /(^-|-$)/g;
function Zn(e) {
  return e.replace(Ui, "-").replace(Bi, "");
}
var Fi = /(a)(d)/gi, tt = 52, Yn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Zt(e) {
  var t, n = "";
  for (t = Math.abs(e); t > tt; t = t / tt | 0) n = Yn(t % tt) + n;
  return (Yn(t % tt) + n).replace(Fi, "$1-$2");
}
var At, Gr = 5381, ue = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, jr = function(e) {
  return ue(Gr, e);
};
function Vr(e) {
  return Zt(jr(e) >>> 0);
}
function Zr(e) {
  return $.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Rt(e) {
  return typeof e == "string" && ($.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Yr = typeof Symbol == "function" && Symbol.for, qr = Yr ? Symbol.for("react.memo") : 60115, zi = Yr ? Symbol.for("react.forward_ref") : 60112, Wi = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Gi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Xr = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, ji = ((At = {})[zi] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, At[qr] = Xr, At);
function qn(e) {
  return ("type" in (t = e) && t.type.$$typeof) === qr ? Xr : "$$typeof" in e ? ji[e.$$typeof] : Wi;
  var t;
}
var Vi = Object.defineProperty, Zi = Object.getOwnPropertyNames, Xn = Object.getOwnPropertySymbols, Yi = Object.getOwnPropertyDescriptor, qi = Object.getPrototypeOf, Kn = Object.prototype;
function Kr(e, t, n) {
  if (typeof t != "string") {
    if (Kn) {
      var r = qi(t);
      r && r !== Kn && Kr(e, r, n);
    }
    var o = Zi(t);
    Xn && (o = o.concat(Xn(t)));
    for (var i = qn(e), a = qn(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!(l in Gi || n && n[l] || a && l in a || i && l in i)) {
        var u = Yi(t, l);
        try {
          Vi(e, l, u);
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
function mn(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function fe(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Yt(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function Te(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function qt(e, t, n) {
  if (n === void 0 && (n = !1), !n && !Te(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = qt(e[r], t[r]);
  else if (Te(t)) for (var r in t) e[r] = qt(e[r], t[r]);
  return e;
}
function gn(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Xi = $.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Ki() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(a) {
    n = n.replace(/%[a-z]/, a);
  }), n;
}
function q(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return $.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Ki.apply(void 0, ge([Xi[e]], t, !1)).trim());
}
var Ji = function() {
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
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, a = o; a < i; a++) n += "".concat(this.tag.getRule(a)).concat(hn);
    return n;
  }, e;
}(), Qi = 1 << 30, lt = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map(), ut = 1, nt = function(e) {
  if (lt.has(e)) return lt.get(e);
  for (; ht.has(ut); ) ut++;
  var t = ut++;
  if ($.NODE_ENV !== "production" && ((0 | t) < 0 || t > Qi)) throw q(16, "".concat(t));
  return lt.set(e, t), ht.set(t, e), t;
}, ea = function(e, t) {
  ut = t + 1, lt.set(e, t), ht.set(t, e);
}, ta = "style[".concat(ye, "][").concat(Wr, '="').concat(bt, '"]'), na = new RegExp("^".concat(ye, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ra = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++) (r = o[i]) && e.registerName(t, r);
}, oa = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(hn), o = [], i = 0, a = r.length; i < a; i++) {
    var s = r[i].trim();
    if (s) {
      var l = s.match(na);
      if (l) {
        var u = 0 | parseInt(l[1], 10), d = l[2];
        u !== 0 && (ea(d, u), ra(e, d, l[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else o.push(s);
    }
  }
};
function ia() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Jr = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(s) {
    var l = Array.from(s.querySelectorAll("style[".concat(ye, "]")));
    return l[l.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ye, zr), r.setAttribute(Wr, bt);
  var a = ia();
  return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
}, aa = function() {
  function e(t) {
    this.element = Jr(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
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
}(), sa = function() {
  function e(t) {
    this.element = Jr(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), ca = function() {
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
}(), Jn = pn, la = { isServer: !pn, useCSSOMInjection: !Di }, Qr = function() {
  function e(t, n, r) {
    t === void 0 && (t = xe), n === void 0 && (n = {});
    var o = this;
    this.options = P(P({}, la), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && pn && Jn && (Jn = !1, function(i) {
      for (var a = document.querySelectorAll(ta), s = 0, l = a.length; s < l; s++) {
        var u = a[s];
        u && u.getAttribute(ye) !== zr && (oa(i, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this)), gn(this, function() {
      return function(i) {
        for (var a = i.getTag(), s = a.length, l = "", u = function(c) {
          var h = function(m) {
            return ht.get(m);
          }(c);
          if (h === void 0) return "continue";
          var f = i.names.get(h), p = a.getGroup(c);
          if (f === void 0 || p.length === 0) return "continue";
          var y = "".concat(ye, ".g").concat(c, '[id="').concat(h, '"]'), v = "";
          f !== void 0 && f.forEach(function(m) {
            m.length > 0 && (v += "".concat(m, ","));
          }), l += "".concat(p).concat(y, '{content:"').concat(v, '"}').concat(hn);
        }, d = 0; d < s; d++) u(d);
        return l;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return nt(t);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(P(P({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new ca(o) : r ? new aa(o) : new sa(o);
    }(this.options), new Ji(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (nt(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(nt(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(nt(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), ua = /&/g, fa = /^\s*\/\/.*$/gm;
function eo(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = eo(n.children, t)), n;
  });
}
function to(e) {
  var t, n, r, o = e === void 0 ? xe : e, i = o.options, a = i === void 0 ? xe : i, s = o.plugins, l = s === void 0 ? St : s, u = function(h, f, p) {
    return p.startsWith(n) && p.endsWith(n) && p.replaceAll(n, "").length > 0 ? ".".concat(t) : h;
  }, d = l.slice();
  d.push(function(h) {
    h.type === yt && h.value.includes("&") && (h.props[0] = h.props[0].replace(ua, n).replace(r, u));
  }), a.prefix && d.push(Pi), d.push(Ii);
  var c = function(h, f, p, y) {
    f === void 0 && (f = ""), p === void 0 && (p = ""), y === void 0 && (y = "&"), t = y, n = f, r = new RegExp("\\".concat(n, "\\b"), "g");
    var v = h.replace(fa, ""), m = Ti(p || f ? "".concat(p, " ").concat(f, " { ").concat(v, " }") : v);
    a.namespace && (m = eo(m, a.namespace));
    var g = [];
    return _t(m, Ai(d.concat(Ri(function(N) {
      return g.push(N);
    })))), g;
  };
  return c.hash = l.length ? l.reduce(function(h, f) {
    return f.name || q(15), ue(h, f.name);
  }, Gr).toString() : "", c;
}
var da = new Qr(), Xt = to(), yn = re.createContext({ shouldForwardProp: void 0, styleSheet: da, stylis: Xt });
yn.Consumer;
var _a = re.createContext(void 0);
function Kt() {
  return Ye(yn);
}
function ha(e) {
  var t = B(e.stylisPlugins), n = t[0], r = t[1], o = Kt().styleSheet, i = te(function() {
    var l = o;
    return e.sheet ? l = e.sheet : e.target && (l = l.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (l = l.reconstructWithOptions({ useCSSOMInjection: !1 })), l;
  }, [e.disableCSSOMInjection, e.sheet, e.target, o]), a = te(function() {
    return to({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: n });
  }, [e.enableVendorPrefixes, e.namespace, n]);
  ne(function() {
    mi(n, e.stylisPlugins) || r(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var s = te(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: a };
  }, [e.shouldForwardProp, i, a]);
  return re.createElement(yn.Provider, { value: s }, re.createElement(_a.Provider, { value: a }, e.children));
}
var Jt = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Xt);
      var a = r.name + i.hash;
      o.hasNameForId(r.id, a) || o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, gn(this, function() {
      throw q(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Xt), this.name + t.hash;
  }, e;
}(), pa = function(e) {
  return e >= "A" && e <= "Z";
};
function Qn(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    pa(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var no = function(e) {
  return e == null || e === !1 || e === "";
}, ro = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !no(i) && (Array.isArray(i) && i.isCss || ve(i) ? r.push("".concat(Qn(o), ":"), i, ";") : Te(i) ? r.push.apply(r, ge(ge(["".concat(o, " {")], ro(i), !1), ["}"], !1)) : r.push("".concat(Qn(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in Li || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function pe(e, t, n, r) {
  if (no(e)) return [];
  if (mn(e)) return [".".concat(e.styledComponentId)];
  if (ve(e)) {
    if (!ve(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return $.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Jt || Te(o) || o === null || console.error("".concat(Zr(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), pe(o, t, n, r);
  }
  var i;
  return e instanceof Jt ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Te(e) ? ro(e) : Array.isArray(e) ? Array.prototype.concat.apply(St, e.map(function(a) {
    return pe(a, t, n, r);
  })) : [e.toString()];
}
function ma(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (ve(n) && !mn(n)) return !1;
  }
  return !0;
}
var ga = jr(bt), ya = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = $.NODE_ENV === "production" && (r === void 0 || r.isStatic) && ma(t), this.componentId = n, this.baseHash = ue(ga, n), this.baseStyle = r, Qr.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = fe(o, this.staticRulesId);
    else {
      var i = Yt(pe(this.rules, t, n, r)), a = Zt(ue(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, a)) {
        var s = r(i, ".".concat(a), void 0, this.componentId);
        n.insertRules(this.componentId, a, s);
      }
      o = fe(o, a), this.staticRulesId = a;
    }
    else {
      for (var l = ue(this.baseHash, r.hash), u = "", d = 0; d < this.rules.length; d++) {
        var c = this.rules[d];
        if (typeof c == "string") u += c, $.NODE_ENV !== "production" && (l = ue(l, c));
        else if (c) {
          var h = Yt(pe(c, t, n, r));
          l = ue(l, h + d), u += h;
        }
      }
      if (u) {
        var f = Zt(l >>> 0);
        n.hasNameForId(this.componentId, f) || n.insertRules(this.componentId, f, r(u, ".".concat(f), void 0, this.componentId)), o = fe(o, f);
      }
    }
    return o;
  }, e;
}(), je = re.createContext(void 0);
je.Consumer;
function oo() {
  var e = Ye(je);
  if (!e) throw q(18);
  return e;
}
function va(e) {
  var t = re.useContext(je), n = te(function() {
    return function(r, o) {
      if (!r) throw q(14);
      if (ve(r)) {
        var i = r(o);
        if ($.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object")) throw q(7);
        return i;
      }
      if (Array.isArray(r) || typeof r != "object") throw q(8);
      return o ? P(P({}, o), r) : r;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? re.createElement(je.Provider, { value: n }, e.children) : null;
}
var Pt = {}, er = /* @__PURE__ */ new Set();
function Ca(e, t, n) {
  var r = mn(e), o = e, i = !Rt(e), a = t.attrs, s = a === void 0 ? St : a, l = t.componentId, u = l === void 0 ? function(E, x) {
    var b = typeof E != "string" ? "sc" : Zn(E);
    Pt[b] = (Pt[b] || 0) + 1;
    var C = "".concat(b, "-").concat(Vr(bt + b + Pt[b]));
    return x ? "".concat(x, "-").concat(C) : C;
  }(t.displayName, t.parentComponentId) : l, d = t.displayName, c = d === void 0 ? function(E) {
    return Rt(E) ? "styled.".concat(E) : "Styled(".concat(Zr(E), ")");
  }(e) : d, h = t.displayName && t.componentId ? "".concat(Zn(t.displayName), "-").concat(t.componentId) : t.componentId || u, f = r && o.attrs ? o.attrs.concat(s).filter(Boolean) : s, p = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var y = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var v = t.shouldForwardProp;
      p = function(E, x) {
        return y(E, x) && v(E, x);
      };
    } else p = y;
  }
  var m = new ya(n, h, r ? o.componentStyle : void 0);
  function g(E, x) {
    return function(b, C, M) {
      var V = b.attrs, H = b.componentStyle, we = b.defaultProps, _o = b.foldedComponentIds, Cn = b.styledComponentId, ho = b.target, po = re.useContext(je), mo = Kt(), $t = b.shouldForwardProp || mo.shouldForwardProp;
      $.NODE_ENV !== "production" && dt(Cn);
      var wn = Hi(C, po, we) || xe, X = function(qe, Le, Xe) {
        for (var be, ce = P(P({}, Le), { className: void 0, theme: Xe }), xt = 0; xt < qe.length; xt += 1) {
          var Ke = ve(be = qe[xt]) ? be(ce) : be;
          for (var oe in Ke) ce[oe] = oe === "className" ? fe(ce[oe], Ke[oe]) : oe === "style" ? P(P({}, ce[oe]), Ke[oe]) : Ke[oe];
        }
        return Le.className && (ce.className = fe(ce.className, Le.className)), ce;
      }(V, C, wn), Re = X.as || ho, Pe = {};
      for (var U in X) X[U] === void 0 || U[0] === "$" || U === "as" || U === "theme" && X.theme === wn || (U === "forwardedAs" ? Pe.as = X.forwardedAs : $t && !$t(U, Re) || (Pe[U] = X[U], $t || $.NODE_ENV !== "development" || Do(U) || er.has(U) || !Vt.has(Re) || (er.add(U), console.warn('styled-components: it looks like an unknown prop "'.concat(U, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Nt = function(qe, Le) {
        var Xe = Kt(), be = qe.generateAndInjectStyles(Le, Xe.styleSheet, Xe.stylis);
        return $.NODE_ENV !== "production" && dt(be), be;
      }(H, X);
      $.NODE_ENV !== "production" && b.warnTooManyClasses && b.warnTooManyClasses(Nt);
      var kt = fe(_o, Cn);
      return Nt && (kt += " " + Nt), X.className && (kt += " " + X.className), Pe[Rt(Re) && !Vt.has(Re) ? "class" : "className"] = kt, Pe.ref = M, L(Re, Pe);
    }(N, E, x);
  }
  g.displayName = c;
  var N = re.forwardRef(g);
  return N.attrs = f, N.componentStyle = m, N.displayName = c, N.shouldForwardProp = p, N.foldedComponentIds = r ? fe(o.foldedComponentIds, o.styledComponentId) : "", N.styledComponentId = h, N.target = r ? o.target : e, Object.defineProperty(N, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = r ? function(x) {
      for (var b = [], C = 1; C < arguments.length; C++) b[C - 1] = arguments[C];
      for (var M = 0, V = b; M < V.length; M++) qt(x, V[M], !0);
      return x;
    }({}, o.defaultProps, E) : E;
  } }), $.NODE_ENV !== "production" && (Mi(c, h), N.warnTooManyClasses = /* @__PURE__ */ function(E, x) {
    var b = {}, C = !1;
    return function(M) {
      if (!C && (b[M] = !0, Object.keys(b).length >= 200)) {
        var V = x ? ' with the id of "'.concat(x, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(E).concat(V, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), C = !0, b = {};
      }
    };
  }(c, h)), gn(N, function() {
    return ".".concat(N.styledComponentId);
  }), i && Kr(N, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), N;
}
function tr(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var nr = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function vn(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (ve(e) || Te(e)) return nr(pe(tr(St, ge([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? pe(r) : nr(pe(tr(r, t)));
}
function Qt(e, t, n) {
  if (n === void 0 && (n = xe), !t) throw q(1, t);
  var r = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
    return e(t, n, vn.apply(void 0, ge([o], i, !1)));
  };
  return r.attrs = function(o) {
    return Qt(e, t, P(P({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Qt(e, t, P(P({}, n), o));
  }, r;
}
var io = function(e) {
  return Qt(Ca, e);
}, D = io;
Vt.forEach(function(e) {
  D[e] = io(e);
});
function Et(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  $.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = Yt(vn.apply(void 0, ge([e], t, !1))), o = Vr(r);
  return new Jt(o, r);
}
$.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var rt = "__sc-".concat(ye, "__");
$.NODE_ENV !== "production" && $.NODE_ENV !== "test" && typeof window < "u" && (window[rt] || (window[rt] = 0), window[rt] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[rt] += 1);
const ao = {
  WITHOUT_FINGERS: "withoutFingers"
}, rr = 0.24, wa = 24, ba = 2, so = 14, Sa = 0.0276;
var J = /* @__PURE__ */ ((e) => (e[e.S = 300] = "S", e[e.M = 400] = "M", e[e.L = 500] = "L", e[e.Default = 600] = "Default", e))(J || {});
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
}, or = {
  loading: { text: "Loading. Please wait.", visible: !0 },
  waiting: { text: "Waiting for input...", visible: !0 }
}, Ea = "rgba(19, 19, 19, 0.5)", $a = 34, Na = {
  [z.CANDIDATE_SELECTION]: "Hold still…",
  [z.PALM_CENTERING]: "Center your palm",
  [z.PALM_NOT_PRESENT]: "Position your palm",
  [z.PALM_TOO_FAR]: "Move closer",
  [z.SHARPNESS_TOO_LOW]: "More light needed",
  [z.BRIGHTNESS_TOO_LOW]: "More light needed",
  [z.BRIGHTNESS_TOO_HIGH]: "Less light needed",
  [z.DEVICE_PITCHED]: "Hold your phone at eye level",
  [z.PALM_TOO_CLOSE]: "Move back"
}, ka = ao.WITHOUT_FINGERS;
function ir(e, t) {
  return Math.max(t, t + (e - 400) * Sa + 2);
}
const xa = (e, t = so) => e ? e.width < e.height ? ir(e.width, t) : ir(e.height, t) : t, Ta = (e) => e > J.Default ? Ue[J.Default] : e > J.L ? Ue[J.L] : e > J.M ? Ue[J.M] : Ue[J.S], Oa = (e) => e ? Ta(e.width) : Ue[J.Default];
function Ia() {
  const e = "https://fonts.googleapis.com/css?family=Montserrat:600";
  if (!document.querySelector(`link[href="${e}"]`)) {
    const n = document.createElement("link");
    n.href = e, n.rel = "stylesheet", document.head.appendChild(n);
  }
}
const We = yr(void 0);
We.displayName = "UiCustomizationContext";
function Ce() {
  const e = Ye(We);
  if (!e)
    throw new Error(
      `${We.displayName} must be used within a ${We.displayName} Provider`
    );
  return e;
}
function Aa({ children: e, props: t, videoElementSize: n }) {
  const { font: r } = oo(), o = te(
    () => ({ ...t, videoElementSize: n, fontSize: xa(n, r.minimumSize) }),
    [t, r.minimumSize, n]
  );
  return /* @__PURE__ */ _(We.Provider, { value: o, children: e });
}
const co = ({ svgSize: e }) => /* @__PURE__ */ _("svg", { fill: "none", height: e, viewBox: "0 0 16 14", width: e, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ _(
  "path",
  {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), Ra = D.div`
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
`, Pa = D.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, La = D.p`
  background: ${(e) => e.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(e) => `${e.$fontSize}px`};
  line-height: 1em;
  max-width: 80%;
`, en = ({ Icon: e, isCameraReady: t, position: n = "absolute", text: r }) => {
  const { fontSize: o } = Ce();
  return /* @__PURE__ */ _(Ra, { $isCameraReady: t, $position: n, children: /* @__PURE__ */ _(Pa, { children: [
    e ? /* @__PURE__ */ _(e, { svgSize: o * 2 }) : null,
    /* @__PURE__ */ _(La, { $fontSize: o, children: r })
  ] }) });
}, lo = ({ text: e = "An unknown error has occurred" }) => /* @__PURE__ */ _(en, { Icon: co, position: "relative", text: e });
class Da extends W {
  constructor(t) {
    super(t), this.state = { hasError: !1 };
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(t) {
    return { hasError: !0 };
  }
  componentDidCatch(t, n) {
    console.error(t, n);
  }
  render() {
    return this.state.hasError ? /* @__PURE__ */ _(lo, { Icon: co, isCameraReady: !1 }) : this.props.children;
  }
}
const Ma = D.div`
  font-family: ${(e) => e.theme.font.family};
  font-style: ${(e) => e.theme.font.style};
  font-weight: ${(e) => e.theme.font.weight};
`, Ha = ({ children: e, uiProps: t, videoElementSize: n }) => (ne(() => {
  Ia();
}, []), /* @__PURE__ */ _(ha, { target: t.styleTarget, children: /* @__PURE__ */ _(va, { theme: t.theme, children: /* @__PURE__ */ _(Ma, { children: /* @__PURE__ */ _(Da, { videoElementSize: n, children: /* @__PURE__ */ _(Aa, { props: t, videoElementSize: n, children: e }) }) }) }) })), Ua = 0.85, Ba = "dot-auto-capture-video", Ee = (e, t) => {
  const n = Ze(t);
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
function Fa(e) {
  const [t, n] = B(), r = _e(
    (o) => {
      var i;
      n((i = o.detail) == null ? void 0 : i.size);
    },
    [n]
  );
  return Ee(e, r), Ie(() => {
    if (!t) {
      const o = document.getElementById(Ba);
      o && n(o.getBoundingClientRect());
    }
  }, [t, n]), t;
}
function za(e, t) {
  return e ? `${e}, ${t}` : t;
}
const Wa = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, Ga = {
  family: "Montserrat, Arial, sans-serif",
  weight: "600",
  style: "normal",
  minimumSize: so
}, De = {
  colors: Wa,
  font: Ga
}, ja = (e) => {
  var t;
  return e ? {
    ...De,
    ...e,
    colors: {
      ...De.colors,
      ...e.colors
    },
    font: {
      ...De.font,
      ...e.font,
      family: za((t = e.font) == null ? void 0 : t.family, De.font.family)
    }
  } : De;
}, Va = (e, t) => Math.min(e, t), Za = ({ height: e, width: t }, n) => {
  const r = Va(t, e) * n, o = (t - r) / 2, i = (e - r) / 2;
  return {
    shiftX: o,
    shiftY: i,
    width: r,
    height: r
  };
}, Ya = (e, t) => {
  const { height: n, shiftX: r, shiftY: o, width: i } = Za(e, t);
  return {
    shiftX: r / e.width,
    shiftY: o / e.height,
    width: i / e.width,
    height: n / e.height
  };
}, qa = (e) => Ya(e, Ua), uo = (e, t) => {
  document.dispatchEvent(
    new CustomEvent(e, {
      detail: t
    })
  );
}, pt = class pt {
  constructor() {
    Je(this, "lastDetails", {});
    Je(this, "delayedTime", 0);
  }
  static getInstance() {
    return this._instance || (this._instance = new pt()), this._instance;
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
    this.isDetailChanged(t, n) && uo(t, n);
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
Je(pt, "_instance");
let tn = pt;
tn.getInstance();
const ar = (e, t) => {
  uo(e, {
    instruction: t
  });
};
async function Xa() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Ka() {
  return (await Xa()).filter((t) => t.kind === "videoinput");
}
const Ja = () => {
  const [e, t] = B(!1);
  return ne(() => {
    (async () => {
      (await Ka()).length > 1 && t(!0);
    })();
  }, []), e;
}, Qa = ({ size: e }) => /* @__PURE__ */ _("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }), es = ({ size: e }) => /* @__PURE__ */ _("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: "52", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ _("circle", { cx: "26", cy: "26", fill: "#131313", fillOpacity: "0.3", r: "26" }),
  /* @__PURE__ */ _(
    "path",
    {
      d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
      fill: "white"
    }
  )
] }), fo = D.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(e) => e.$marginLeft ? `${e.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, ts = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ _(fo, { $marginLeft: e, ...n, children: /* @__PURE__ */ _(Qa, { size: t }) }), ns = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ _(fo, { $marginLeft: e, ...n, children: /* @__PURE__ */ _(es, { size: t }) }), rs = D.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.$padding}px`};
  z-index: 2;
`, os = ({
  customControlEvent: e,
  isSwitchCameraDisabled: t
}) => {
  const { showCameraButtons: n, videoElementSize: r } = Ce(), o = Ja();
  if (!n)
    return null;
  const { buttonPadding: i, iconSize: a, marginLeft: s } = Oa(r);
  return /* @__PURE__ */ _(rs, { $padding: i, children: [
    o && /* @__PURE__ */ _(ns, { disabled: t, onClick: () => {
      ar(e, Nn.SWITCH_CAMERA);
    }, size: a }),
    /* @__PURE__ */ _(
      ts,
      {
        marginLeft: o ? s : 0,
        onClick: () => {
          ar(e, Nn.TOGGLE_MIRROR);
        },
        size: a
      }
    )
  ] });
}, is = D.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, as = ({ svgSize: e }) => /* @__PURE__ */ _(is, { children: /* @__PURE__ */ _("svg", { fill: "none", height: e, viewBox: "0 0 48 48", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }) }), ss = D.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`, cs = ({ children: e, height: t, width: n }) => {
  const { backdropColor: r } = Ce();
  return /* @__PURE__ */ _(ss, { children: /* @__PURE__ */ _("svg", { viewBox: `0 0 ${n} ${t}`, children: [
    /* @__PURE__ */ _("defs", { children: /* @__PURE__ */ _("mask", { id: "mask", children: [
      /* @__PURE__ */ _("rect", { fill: "#fff", height: "100%", width: "100%" }),
      e
    ] }) }),
    /* @__PURE__ */ _("rect", { fill: r, height: "100%", mask: "url(#mask)", width: "100%" })
  ] }) });
}, ls = ({ cameraHeight: e, cameraWidth: t, isBackdrop: n, state: r }) => {
  const { appStateInstructions: o } = Ce(), i = r === Y.ERROR || r === Y.RUNNING;
  return !r || i || !(o != null && o[r].visible) ? null : r === Y.WAITING ? /* @__PURE__ */ _(j, { children: [
    n && e && t && /* @__PURE__ */ _(cs, { height: e, width: t }),
    /* @__PURE__ */ _(en, { isCameraReady: !0, text: o[Y.WAITING].text })
  ] }) : /* @__PURE__ */ _(en, { Icon: as, isCameraReady: !0, text: o[Y.LOADING].text });
}, us = "2.5s", fs = "0.3s", ds = "linear", _s = Et`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
Et`
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`;
Et`
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
Et`
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
const hs = D.div`
  position: absolute;
  left: 50%;

  ${(e) => e.$cssTop ? `top: ${e.$cssTop}%;` : ""}
  ${(e) => e.$cssBottom ? `bottom: ${e.$cssBottom}%;` : ""}
    ${(e) => e.$isAnimating && vn`
      animation: ${_s} ${fs}
        ${ds} both;
      animation-delay: ${us};

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
`, ps = D.div`
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
`, ms = ({
  children: e,
  cssBottom: t,
  cssTop: n,
  isAnimating: r,
  isInCandidateSelection: o,
  isPortrait: i
}) => {
  const { fontSize: a } = Ce();
  return /* @__PURE__ */ _(hs, { $cssBottom: t, $cssTop: n, $isAnimating: r, $isPortrait: i, children: /* @__PURE__ */ _(
    ps,
    {
      $fontSize: a,
      $isInCandidateSelection: o,
      $wrap: e.length > $a,
      children: e
    }
  ) });
}, gs = D.canvas`
  transform: ${(e) => e.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, ys = (e) => {
  const t = e.getContext("2d");
  t && t.clearRect(0, 0, t.canvas.width, t.canvas.height);
}, Be = (e, t) => Math.hypot(t.x - e.x, t.y - e.y), sr = (e, t, n) => {
  const r = (t.x - e.x) * n, o = (t.y - e.y) * n;
  return {
    x: e.x + r,
    y: e.y + o
  };
}, cr = (e, t, n, r) => {
  const o = Be(e, t);
  return n * r / o;
}, vs = (e) => {
  const { bottomLeft: t, bottomRight: n, topLeft: r, topRight: o } = e, i = Be(r, o), a = Be(o, n), s = Be(t, n), l = Be(r, t);
  return Math.min(i, a, s, l);
};
function Cs({ cameraResolution: e, isImageMirror: t }) {
  const n = Ze(null), r = oo(), [o, i] = B(), a = _e(
    (s) => {
      var l;
      i((l = s == null ? void 0 : s.detail) == null ? void 0 : l.detectedObject);
    },
    [i]
  );
  return Ee(Cr.DETECTED_DOCUMENT_CHANGED, a), Ee(de.DETECTED_PALM_CHANGED, a), ne(() => {
    if (!n.current)
      return;
    const s = (u, d, c, h) => {
      var g;
      const f = cr(
        d,
        u,
        h,
        rr
      ), p = cr(
        d,
        c,
        h,
        rr
      ), y = sr(d, u, f), v = sr(d, c, p), m = (g = n == null ? void 0 : n.current) == null ? void 0 : g.getContext("2d");
      m && (m.beginPath(), m.lineWidth = ba, m.strokeStyle = r.colors.placeholderColor, m.moveTo(y.x, y.y), m.arcTo(d.x, d.y, v.x, v.y, wa), m.lineTo(v.x, v.y), m.stroke());
    }, l = (u) => {
      if (!u)
        return;
      const { bottomLeft: d, bottomRight: c, topLeft: h, topRight: f } = u, p = vs(u);
      s(d, h, f, p), s(h, f, c, p), s(f, c, d, p), s(c, d, h, p);
    };
    n.current.width = e.width, n.current.height = e.height, ys(n.current), l(o);
  }, [e, o, r.colors.placeholderColor]), /* @__PURE__ */ _(gs, { ref: n, $isImageMirror: t });
}
function ws() {
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
const bs = D.div`
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
`, Ss = ({
  children: e,
  className: t,
  isInCandidateSelection: n,
  onAnimationEnd: r,
  placeholderRectangle: o
}) => /* @__PURE__ */ _(
  bs,
  {
    $isInCandidateSelection: n,
    $placeholderRectangle: o,
    className: t,
    onAnimationEnd: r,
    children: e
  }
), Es = {
  [ao.WITHOUT_FINGERS]: /* @__PURE__ */ _(ws, {})
};
function $s({ placeholderRectangle: e, ...t }) {
  const { placeholder: n } = Ce();
  return /* @__PURE__ */ _(Ss, { placeholderRectangle: e, ...t, children: Es[n] });
}
function Ns() {
  const [e, t] = B(), [n, r] = B(!1), o = _e(
    (f) => {
      var y, v;
      t((y = f == null ? void 0 : f.detail) == null ? void 0 : y.cameraResolution);
      const p = (v = f == null ? void 0 : f.detail) == null ? void 0 : v.isMirroring;
      p !== void 0 && r(p);
    },
    [t]
  );
  Ee(de.CAMERA_PROPS_CHANGED, o);
  const [i, a] = B({
    code: z.PALM_NOT_PRESENT,
    // FIXME Default instruction should not be here
    isEscalated: !1
  }), s = _e(
    (f) => {
      var p, y;
      a({
        code: (p = f == null ? void 0 : f.detail) == null ? void 0 : p.instructionCode,
        isEscalated: ((y = f == null ? void 0 : f.detail) == null ? void 0 : y.isEscalated) ?? !1
      });
    },
    [a]
  );
  Ee(de.INSTRUCTION_CHANGED, s);
  const [l, u] = B(Y.LOADING), [d, c] = B(), h = _e(
    (f) => {
      var y, v;
      u((y = f.detail) == null ? void 0 : y.appState);
      const p = (v = f == null ? void 0 : f.detail) == null ? void 0 : v.error;
      p && c(p);
    },
    [u, c]
  );
  return Ee(de.STATE_CHANGED, h), {
    cameraResolution: e,
    instruction: i,
    isMirroring: n,
    appState: l,
    error: d
  };
}
function ks() {
  const { appState: e, cameraResolution: t, error: n, instruction: r, isMirroring: o } = Ns(), i = r.code === z.CANDIDATE_SELECTION, { instructions: a, showDetectionLayer: s } = Ce();
  return e === Y.ERROR ? /* @__PURE__ */ _(lo, { text: n == null ? void 0 : n.message }) : e === Y.RUNNING && t ? /* @__PURE__ */ _(j, { children: [
    s && /* @__PURE__ */ _(Cs, { cameraResolution: t, isImageMirror: o }),
    /* @__PURE__ */ _(
      $s,
      {
        isInCandidateSelection: i,
        placeholderRectangle: qa(t)
      }
    ),
    r.code && /* @__PURE__ */ _(ms, { cssTop: 50, isInCandidateSelection: i, children: a[r.code] }),
    /* @__PURE__ */ _(os, { customControlEvent: de.CONTROL, isSwitchCameraDisabled: i })
  ] }) : /* @__PURE__ */ _(ls, { cameraHeight: t == null ? void 0 : t.height, cameraWidth: t == null ? void 0 : t.width, state: e });
}
const xs = (e) => {
  var l, u;
  const t = { ...Na, ...e == null ? void 0 : e.instructions }, n = {
    [Y.LOADING]: { ...or.loading, ...(l = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : l.loading },
    [Y.WAITING]: { ...or.waiting, ...(u = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : u.waiting }
  }, r = (e == null ? void 0 : e.placeholder) ?? ka, o = (e == null ? void 0 : e.backdropColor) ?? Ea, i = (e == null ? void 0 : e.showDetectionLayer) ?? !1, a = (e == null ? void 0 : e.showCameraButtons) ?? !1, s = ja(e == null ? void 0 : e.theme);
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
function Ts({ props: e }) {
  const t = Fa(de.VIDEO_ELEMENT_SIZE);
  return /* @__PURE__ */ _(Ha, { uiProps: xs(e), videoElementSize: t, children: /* @__PURE__ */ _(ks, {}) });
}
Oo(Ts, "x-dot-palm-capture-ui", ["props"]);
