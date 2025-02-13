var po = Object.defineProperty;
var mo = (e, t, n) => t in e ? po(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ke = (e, t, n) => mo(e, typeof t != "symbol" ? t + "" : t, n);
var Ve, w, sr, ue, Sn, cr, Lt, nn, Dt, Mt, lr, ze = {}, ur = [], go = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, mt = Array.isArray;
function ee(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function fr(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function D(e, t, n) {
  var r, o, i, a = {};
  for (i in t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ve.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) a[i] === void 0 && (a[i] = e.defaultProps[i]);
  return Ue(e, a, r, o, null);
}
function Ue(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o ?? ++sr, __i: -1, __u: 0 };
  return o == null && w.vnode != null && w.vnode(i), i;
}
function yo() {
  return { current: null };
}
function z(e) {
  return e.children;
}
function G(e, t) {
  this.props = e, this.context = t;
}
function pe(e, t) {
  if (t == null) return e.__ ? pe(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? pe(e) : null;
}
function dr(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) {
      e.__e = e.__c.base = n.__e;
      break;
    }
    return dr(e);
  }
}
function Ht(e) {
  (!e.__d && (e.__d = !0) && ue.push(e) && !ft.__r++ || Sn !== w.debounceRendering) && ((Sn = w.debounceRendering) || cr)(ft);
}
function ft() {
  var e, t, n, r, o, i, a, s;
  for (ue.sort(Lt); e = ue.shift(); ) e.__d && (t = ue.length, r = void 0, i = (o = (n = e).__v).__e, a = [], s = [], n.__P && ((r = ee({}, o)).__v = o.__v + 1, w.vnode && w.vnode(r), rn(n.__P, r, o, n.__n, n.__P.namespaceURI, 32 & o.__u ? [i] : null, a, i ?? pe(o), !!(32 & o.__u), s), r.__v = o.__v, r.__.__k[r.__i] = r, pr(a, r, s), r.__e != i && dr(r)), ue.length > t && ue.sort(Lt));
  ft.__r = 0;
}
function hr(e, t, n, r, o, i, a, s, c, u, d) {
  var l, _, h, g, S, $ = r && r.__k || ur, p = t.length;
  for (n.__d = c, vo(n, t, $), c = n.__d, l = 0; l < p; l++) (h = n.__k[l]) != null && typeof h != "boolean" && typeof h != "function" && (_ = h.__i === -1 ? ze : $[h.__i] || ze, h.__i = l, rn(e, h, _, o, i, a, s, c, u, d), g = h.__e, h.ref && _.ref != h.ref && (_.ref && on(_.ref, null, h), d.push(h.ref, h.__c || g, h)), S == null && g != null && (S = g), 65536 & h.__u || _.__k === h.__k ? (c && typeof h.type == "string" && !e.contains(c) && (c = pe(_)), c = _r(h, c, e)) : typeof h.type == "function" && h.__d !== void 0 ? c = h.__d : g && (c = g.nextSibling), h.__d = void 0, h.__u &= -196609);
  n.__d = c, n.__e = S;
}
function vo(e, t, n) {
  var r, o, i, a, s, c = t.length, u = n.length, d = u, l = 0;
  for (e.__k = [], r = 0; r < c; r++) a = r + l, (o = e.__k[r] = (o = t[r]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? Ue(null, o, null, null, null) : mt(o) ? Ue(z, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? Ue(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = e, o.__b = e.__b + 1, s = Co(o, n, a, d), o.__i = s, i = null, s !== -1 && (d--, (i = n[s]) && (i.__u |= 131072)), i == null || i.__v === null ? (s == -1 && l--, typeof o.type != "function" && (o.__u |= 65536)) : s !== a && (s == a - 1 ? l = s - a : s == a + 1 ? l++ : s > a ? d > c - a ? l += s - a : l-- : s < a && l++, s !== r + l && (o.__u |= 65536))) : (i = n[a]) && i.key == null && i.__e && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = pe(i)), Ft(i, i, !1), n[a] = null, d--);
  if (d) for (r = 0; r < u; r++) (i = n[r]) != null && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = pe(i)), Ft(i, i));
}
function _r(e, t, n) {
  var r, o;
  if (typeof e.type == "function") {
    for (r = e.__k, o = 0; r && o < r.length; o++) r[o] && (r[o].__ = e, t = _r(r[o], t, n));
    return t;
  }
  e.__e != t && (n.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType === 8);
  return t;
}
function te(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (mt(e) ? e.some(function(n) {
    te(n, t);
  }) : t.push(e)), t;
}
function Co(e, t, n, r) {
  var o = e.key, i = e.type, a = n - 1, s = n + 1, c = t[n];
  if (c === null || c && o == c.key && i === c.type && !(131072 & c.__u)) return n;
  if (r > (c != null && !(131072 & c.__u) ? 1 : 0)) for (; a >= 0 || s < t.length; ) {
    if (a >= 0) {
      if ((c = t[a]) && !(131072 & c.__u) && o == c.key && i === c.type) return a;
      a--;
    }
    if (s < t.length) {
      if ((c = t[s]) && !(131072 & c.__u) && o == c.key && i === c.type) return s;
      s++;
    }
  }
  return -1;
}
function En(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || go.test(t) ? n : n + "px";
}
function Je(e, t, n, r, o) {
  var i;
  e: if (t === "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || En(e.style, t, "");
    if (n) for (t in n) r && n[t] === r[t] || En(e.style, t, n[t]);
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
function bn(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t.t == null) t.t = nn++;
      else if (t.t < n.u) return;
      return n(w.event ? w.event(t) : t);
    }
  };
}
function rn(e, t, n, r, o, i, a, s, c, u) {
  var d, l, _, h, g, S, $, p, m, k, E, N, C, y, F, Z, U = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && (c = !!(32 & n.__u), i = [s = t.__e = n.__e]), (d = w.__b) && d(t);
  e: if (typeof U == "function") try {
    if (p = t.props, m = "prototype" in U && U.prototype.render, k = (d = U.contextType) && r[d.__c], E = d ? k ? k.props.value : d.__ : r, n.__c ? $ = (l = t.__c = n.__c).__ = l.__E : (m ? t.__c = l = new U(p, E) : (t.__c = l = new G(p, E), l.constructor = U, l.render = So), k && k.sub(l), l.props = p, l.state || (l.state = {}), l.context = E, l.__n = r, _ = l.__d = !0, l.__h = [], l._sb = []), m && l.__s == null && (l.__s = l.state), m && U.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = ee({}, l.__s)), ee(l.__s, U.getDerivedStateFromProps(p, l.__s))), h = l.props, g = l.state, l.__v = t, _) m && U.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), m && l.componentDidMount != null && l.__h.push(l.componentDidMount);
    else {
      if (m && U.getDerivedStateFromProps == null && p !== h && l.componentWillReceiveProps != null && l.componentWillReceiveProps(p, E), !l.__e && (l.shouldComponentUpdate != null && l.shouldComponentUpdate(p, l.__s, E) === !1 || t.__v === n.__v)) {
        for (t.__v !== n.__v && (l.props = p, l.state = l.__s, l.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(Se) {
          Se && (Se.__ = t);
        }), N = 0; N < l._sb.length; N++) l.__h.push(l._sb[N]);
        l._sb = [], l.__h.length && a.push(l);
        break e;
      }
      l.componentWillUpdate != null && l.componentWillUpdate(p, l.__s, E), m && l.componentDidUpdate != null && l.__h.push(function() {
        l.componentDidUpdate(h, g, S);
      });
    }
    if (l.context = E, l.props = p, l.__P = e, l.__e = !1, C = w.__r, y = 0, m) {
      for (l.state = l.__s, l.__d = !1, C && C(t), d = l.render(l.props, l.state, l.context), F = 0; F < l._sb.length; F++) l.__h.push(l._sb[F]);
      l._sb = [];
    } else do
      l.__d = !1, C && C(t), d = l.render(l.props, l.state, l.context), l.state = l.__s;
    while (l.__d && ++y < 25);
    l.state = l.__s, l.getChildContext != null && (r = ee(ee({}, r), l.getChildContext())), m && !_ && l.getSnapshotBeforeUpdate != null && (S = l.getSnapshotBeforeUpdate(h, g)), hr(e, mt(Z = d != null && d.type === z && d.key == null ? d.props.children : d) ? Z : [Z], t, n, r, o, i, a, s, c, u), l.base = t.__e, t.__u &= -161, l.__h.length && a.push(l), $ && (l.__E = l.__ = null);
  } catch (Se) {
    t.__v = null, c || i != null ? (t.__e = s, t.__u |= c ? 160 : 32, i[i.indexOf(s)] = null) : (t.__e = n.__e, t.__k = n.__k), w.__e(Se, t, n);
  }
  else i == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = wo(n.__e, t, n, r, o, i, a, c, u);
  (d = w.diffed) && d(t);
}
function pr(e, t, n) {
  t.__d = void 0;
  for (var r = 0; r < n.length; r++) on(n[r], n[++r], n[++r]);
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
function wo(e, t, n, r, o, i, a, s, c) {
  var u, d, l, _, h, g, S, $ = n.props, p = t.props, m = t.type;
  if (m === "svg" ? o = "http://www.w3.org/2000/svg" : m === "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (u = 0; u < i.length; u++) if ((h = i[u]) && "setAttribute" in h == !!m && (m ? h.localName === m : h.nodeType === 3)) {
      e = h, i[u] = null;
      break;
    }
  }
  if (e == null) {
    if (m === null) return document.createTextNode(p);
    e = document.createElementNS(o, m, p.is && p), i = null, s = !1;
  }
  if (m === null) $ === p || s && e.data === p || (e.data = p);
  else {
    if (i = i && Ve.call(e.childNodes), $ = n.props || ze, !s && i != null) for ($ = {}, u = 0; u < e.attributes.length; u++) $[(h = e.attributes[u]).name] = h.value;
    for (u in $) if (h = $[u], u != "children") {
      if (u == "dangerouslySetInnerHTML") l = h;
      else if (u !== "key" && !(u in p)) {
        if (u == "value" && "defaultValue" in p || u == "checked" && "defaultChecked" in p) continue;
        Je(e, u, null, h, o);
      }
    }
    for (u in p) h = p[u], u == "children" ? _ = h : u == "dangerouslySetInnerHTML" ? d = h : u == "value" ? g = h : u == "checked" ? S = h : u === "key" || s && typeof h != "function" || $[u] === h || Je(e, u, h, $[u], o);
    if (d) s || l && (d.__html === l.__html || d.__html === e.innerHTML) || (e.innerHTML = d.__html), t.__k = [];
    else if (l && (e.innerHTML = ""), hr(e, mt(_) ? _ : [_], t, n, r, m === "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, a, i ? i[0] : n.__k && pe(n, 0), s, c), i != null) for (u = i.length; u--; ) i[u] != null && fr(i[u]);
    s || (u = "value", g !== void 0 && (g !== e[u] || m === "progress" && !g || m === "option" && g !== $[u]) && Je(e, u, g, $[u], o), u = "checked", S !== void 0 && S !== e[u] && Je(e, u, S, $[u], o));
  }
  return e;
}
function on(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    w.__e(r, n);
  }
}
function Ft(e, t, n) {
  var r, o;
  if (w.unmount && w.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || on(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (i) {
      w.__e(i, t);
    }
    r.base = r.__P = null;
  }
  if (r = e.__k) for (o = 0; o < r.length; o++) r[o] && Ft(r[o], t, n || typeof e.type != "function");
  n || e.__e == null || fr(e.__e), e.__c = e.__ = e.__e = e.__d = void 0;
}
function So(e, t, n) {
  return this.constructor(e, n);
}
function se(e, t, n) {
  var r, o, i, a;
  w.__ && w.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], a = [], rn(t, e = (!r && n || t).__k = D(z, null, [e]), o || ze, ze, t.namespaceURI, !r && n ? [n] : o ? null : t.firstChild ? Ve.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, a), pr(i, e, a);
}
function an(e, t) {
  se(e, t, an);
}
function sn(e, t, n) {
  var r, o, i, a, s = ee({}, e.props);
  for (i in e.type && e.type.defaultProps && (a = e.type.defaultProps), t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i] === void 0 && a !== void 0 ? a[i] : t[i];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? Ve.call(arguments, 2) : n), Ue(e.type, s, r || e.key, o || e.ref, null);
}
function mr(e, t) {
  var n = { __c: t = "__cC" + lr++, __: e, Consumer: function(r, o) {
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
Ve = ur.slice, w = { __e: function(e, t, n, r) {
  for (var o, i, a; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), a = o.__d), a) return o.__E = o;
  } catch (s) {
    e = s;
  }
  throw e;
} }, sr = 0, G.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ee({}, this.state), typeof e == "function" && (e = e(ee({}, n), this.props)), e && ee(n, e), e != null && this.__v && (t && this._sb.push(t), Ht(this));
}, G.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ht(this));
}, G.prototype.render = z, ue = [], cr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Lt = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, ft.__r = 0, nn = 0, Dt = bn(!1), Mt = bn(!0), lr = 0;
function cn() {
  return (cn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var Eo = ["context", "children"];
function bo(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, n = function(r, o) {
    if (r == null) return {};
    var i, a, s = {}, c = Object.keys(r);
    for (a = 0; a < c.length; a++) o.indexOf(i = c[a]) >= 0 || (s[i] = r[i]);
    return s;
  }(e, Eo);
  return sn(t, n);
}
function $o() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = D(bo, cn({}, this._props, { context: e.detail.context }), function t(n, r) {
    if (n.nodeType === 3) return n.data;
    if (n.nodeType !== 1) return null;
    var o = [], i = {}, a = 0, s = n.attributes, c = n.childNodes;
    for (a = s.length; a--; ) s[a].name !== "slot" && (i[s[a].name] = s[a].value, i[gr(s[a].name)] = s[a].value);
    for (a = c.length; a--; ) {
      var u = t(c[a], null), d = c[a].slot;
      d ? i[d] = D($n, { name: d }, u) : o[a] = u;
    }
    var l = r ? D($n, null, o) : o;
    return D(r || n.nodeName.toLowerCase(), i, l);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? an : se)(this._vdom, this._root);
}
function gr(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function ko(e, t, n) {
  if (this._vdom) {
    var r = {};
    r[e] = n = n ?? void 0, r[gr(e)] = n, this._vdom = sn(this._vdom, r), se(this._vdom, this._root);
  }
}
function Oo() {
  se(this._vdom = null, this._root);
}
function $n(e, t) {
  var n = this;
  return D("slot", cn({}, e, { ref: function(r) {
    r ? (n.ref = r, n._listener || (n._listener = function(o) {
      o.stopPropagation(), o.detail.context = t;
    }, r.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function No(e, t, n, r) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = e, i._root = i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = $o, o.prototype.attributeChangedCallback = ko, o.prototype.disconnectedCallback = Oo, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = n, n.forEach(function(i) {
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
function f(e, t, n, r, o, i) {
  t || (t = {});
  var a, s, c = t;
  if ("ref" in c) for (s in c = {}, t) s == "ref" ? a = t[s] : c[s] = t[s];
  var u = { type: e, props: c, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --Io, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (a = e.defaultProps)) for (s in a) c[s] === void 0 && (c[s] = a[s]);
  return w.vnode && w.vnode(u), u;
}
const kn = {
  CONTINUE_DETECTION: "continue-detection",
  SWITCH_CAMERA: "switch-camera",
  TOGGLE_MIRROR: "toggle-mirror"
};
var me = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", e.CONTROL = "face-auto-capture:control", e.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", e.FACE_DETECTION = "face-auto-capture:face-detection", e.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", e.STATE_CHANGED = "face-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", e))(me || {});
const On = {
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
  LEFT_EYE_NOT_PRESENT: `left_${On.EYE_NOT_PRESENT}`,
  RIGHT_EYE_NOT_PRESENT: `right_${On.EYE_NOT_PRESENT}`,
  MOUTH_NOT_PRESENT: "mouth_not_present",
  MOUTH_SCORE_TOO_HIGH: "mouth_score_too_high",
  MOUTH_SCORE_TOO_LOW: "mouth_score_too_low"
}, q = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  WAITING: "WAITING",
  RUNNING: "RUNNING"
};
var ce, T, It, Nn, $e = 0, yr = [], x = w, In = x.__b, Tn = x.__r, xn = x.diffed, Rn = x.__c, An = x.unmount, Pn = x.__;
function Te(e, t) {
  x.__h && x.__h(T, e, $e || t), $e = 0;
  var n = T.__H || (T.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function W(e) {
  return $e = 1, ln(wr, e);
}
function ln(e, t, n) {
  var r = Te(ce++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : wr(void 0, t), function(s) {
    var c = r.__N ? r.__N[0] : r.__[0], u = r.t(c, s);
    c !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = T, !T.u)) {
    var o = function(s, c, u) {
      if (!r.__c.__H) return !0;
      var d = r.__c.__H.__.filter(function(_) {
        return !!_.__c;
      });
      if (d.every(function(_) {
        return !_.__N;
      })) return !i || i.call(this, s, c, u);
      var l = !1;
      return d.forEach(function(_) {
        if (_.__N) {
          var h = _.__[0];
          _.__ = _.__N, _.__N = void 0, h !== _.__[0] && (l = !0);
        }
      }), !(!l && r.__c.props === s) && (!i || i.call(this, s, c, u));
    };
    T.u = !0;
    var i = T.shouldComponentUpdate, a = T.componentWillUpdate;
    T.componentWillUpdate = function(s, c, u) {
      if (this.__e) {
        var d = i;
        i = void 0, o(s, c, u), i = d;
      }
      a && a.call(this, s, c, u);
    }, T.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function re(e, t) {
  var n = Te(ce++, 3);
  !x.__s && un(n.__H, t) && (n.__ = e, n.i = t, T.__H.__h.push(n));
}
function xe(e, t) {
  var n = Te(ce++, 4);
  !x.__s && un(n.__H, t) && (n.__ = e, n.i = t, T.__h.push(n));
}
function Ze(e) {
  return $e = 5, ne(function() {
    return { current: e };
  }, []);
}
function vr(e, t, n) {
  $e = 6, xe(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(e));
}
function ne(e, t) {
  var n = Te(ce++, 7);
  return un(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function ge(e, t) {
  return $e = 8, ne(function() {
    return e;
  }, t);
}
function Ye(e) {
  var t = T.context[e.__c], n = Te(ce++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(T)), t.props.value) : e.__;
}
function dt(e, t) {
  x.useDebugValue && x.useDebugValue(t ? t(e) : e);
}
function Cr() {
  var e = Te(ce++, 11);
  if (!e.__) {
    for (var t = T.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function To() {
  for (var e; e = yr.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(ot), e.__H.__h.forEach(Ut), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], x.__e(t, e.__v);
  }
}
x.__b = function(e) {
  T = null, In && In(e);
}, x.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Pn && Pn(e, t);
}, x.__r = function(e) {
  Tn && Tn(e), ce = 0;
  var t = (T = e.__c).__H;
  t && (It === T ? (t.__h = [], T.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.i = n.__N = void 0;
  })) : (t.__h.forEach(ot), t.__h.forEach(Ut), t.__h = [], ce = 0)), It = T;
}, x.diffed = function(e) {
  xn && xn(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (yr.push(t) !== 1 && Nn === x.requestAnimationFrame || ((Nn = x.requestAnimationFrame) || xo)(To)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.i = void 0;
  })), It = T = null;
}, x.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(ot), n.__h = n.__h.filter(function(r) {
        return !r.__ || Ut(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], x.__e(r, n.__v);
    }
  }), Rn && Rn(e, t);
}, x.unmount = function(e) {
  An && An(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      ot(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && x.__e(t, n.__v));
};
var Ln = typeof requestAnimationFrame == "function";
function xo(e) {
  var t, n = function() {
    clearTimeout(r), Ln && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  Ln && (t = requestAnimationFrame(n));
}
function ot(e) {
  var t = T, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), T = t;
}
function Ut(e) {
  var t = T;
  e.__c = e.__(), T = t;
}
function un(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function wr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
var L = function() {
  return L = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, L.apply(this, arguments);
};
function ye(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function Ro(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Ao = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Po = /* @__PURE__ */ Ro(
  function(e) {
    return Ao.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Sr(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Bt(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function Wt(e, t) {
  this.props = e, this.context = t;
}
function Lo(e, t) {
  function n(o) {
    var i = this.props.ref, a = i == o.ref;
    return !a && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !a : Bt(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, D(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(Wt.prototype = new G()).isPureReactComponent = !0, Wt.prototype.shouldComponentUpdate = function(e, t) {
  return Bt(this.props, e) || Bt(this.state, t);
};
var Dn = w.__b;
w.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Dn && Dn(e);
};
var Do = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function Mo(e) {
  function t(n) {
    var r = Sr({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = Do, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Mn = function(e, t) {
  return e == null ? null : te(te(e).map(t));
}, Ho = { map: Mn, forEach: Mn, count: function(e) {
  return e ? te(e).length : 0;
}, only: function(e) {
  var t = te(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: te }, Fo = w.__e;
w.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  Fo(e, t, n, r);
};
var Hn = w.unmount;
function Er(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = Sr({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return Er(r, t, n);
  })), e;
}
function br(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return br(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function it() {
  this.__u = 0, this.t = null, this.__b = null;
}
function $r(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Uo(e) {
  var t, n, r;
  function o(i) {
    if (t || (t = e()).then(function(a) {
      n = a.default || a;
    }, function(a) {
      r = a;
    }), r) throw r;
    if (!n) throw t;
    return D(n, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function Me() {
  this.u = null, this.o = null;
}
w.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Hn && Hn(e);
}, (it.prototype = new G()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var o = $r(r.__v), i = !1, a = function() {
    i || (i = !0, n.__R = null, o ? o(s) : s());
  };
  n.__R = a;
  var s = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var c = r.state.__a;
        r.__v.__k[0] = br(c, c.__c.__P, c.__c.__O);
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
      this.__v.__k[0] = Er(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && D(z, null, e.fallback);
  return o && (o.__u &= -33), [D(z, null, t.__a ? null : e.children), o];
};
var Fn = function(e, t, n) {
  if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size)) for (n = e.u; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    e.u = n = n[2];
  }
};
function Bo(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function Wo(e) {
  var t = this, n = e.i;
  t.componentWillUnmount = function() {
    se(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== n && t.componentWillUnmount(), t.l || (t.i = n, t.l = { nodeType: 1, parentNode: n, childNodes: [], contains: function() {
    return !0;
  }, appendChild: function(r) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r);
  } }), se(D(Bo, { context: t.context }, e.__v), t.l);
}
function zo(e, t) {
  var n = D(Wo, { __v: e, i: t });
  return n.containerInfo = t, n;
}
(Me.prototype = new G()).__a = function(e) {
  var t = this, n = $r(t.__v), r = t.o.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), Fn(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, Me.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = te(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; ) this.o.set(t[n], this.u = [1, 0, this.u]);
  return e.children;
}, Me.prototype.componentDidUpdate = Me.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, n) {
    Fn(e, n, t);
  });
};
var kr = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, jo = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Go = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Vo = /[A-Z0-9]/g, Zo = typeof document < "u", Yo = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function qo(e, t, n) {
  return t.__k == null && (t.textContent = ""), se(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function Xo(e, t, n) {
  return an(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
G.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(G.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Un = w.event;
function Qo() {
}
function Ko() {
  return this.cancelBubble;
}
function Jo() {
  return this.defaultPrevented;
}
w.event = function(e) {
  return Un && (e = Un(e)), e.persist = Qo, e.isPropagationStopped = Ko, e.isDefaultPrevented = Jo, e.nativeEvent = e;
};
var fn, ei = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Bn = w.vnode;
w.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {};
    for (var i in n) {
      var a = n[i];
      if (!(i === "value" && "defaultValue" in n && a == null || Zo && i === "children" && r === "noscript" || i === "class" || i === "className")) {
        var s = i.toLowerCase();
        i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && a === !0 ? a = "" : s === "translate" && a === "no" ? a = !1 : s === "ondoubleclick" ? i = "ondblclick" : s !== "onchange" || r !== "input" && r !== "textarea" || Yo(n.type) ? s === "onfocus" ? i = "onfocusin" : s === "onblur" ? i = "onfocusout" : Go.test(i) ? i = s : r.indexOf("-") === -1 && jo.test(i) ? i = i.replace(Vo, "-$&").toLowerCase() : a === null && (a = void 0) : s = i = "oninput", s === "oninput" && o[i = s] && (i = "oninputCapture"), o[i] = a;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = te(n.children).forEach(function(c) {
      c.props.selected = o.value.indexOf(c.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = te(n.children).forEach(function(c) {
      c.props.selected = o.multiple ? o.defaultValue.indexOf(c.props.value) != -1 : o.defaultValue == c.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", ei)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = kr, Bn && Bn(e);
};
var Wn = w.__r;
w.__r = function(e) {
  Wn && Wn(e), fn = e.__c;
};
var zn = w.diffed;
w.diffed = function(e) {
  zn && zn(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), fn = null;
};
var ti = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return fn.__n[e.__c].props.value;
}, useCallback: ge, useContext: Ye, useDebugValue: dt, useDeferredValue: Nr, useEffect: re, useId: Cr, useImperativeHandle: vr, useInsertionEffect: Tr, useLayoutEffect: xe, useMemo: ne, useReducer: ln, useRef: Ze, useState: W, useSyncExternalStore: xr, useTransition: Ir } } };
function ni(e) {
  return D.bind(null, e);
}
function gt(e) {
  return !!e && e.$$typeof === kr;
}
function ri(e) {
  return gt(e) && e.type === z;
}
function oi(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function ii(e) {
  return gt(e) ? sn.apply(null, arguments) : e;
}
function ai(e) {
  return !!e.__k && (se(null, e), !0);
}
function si(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var ci = function(e, t) {
  return e(t);
}, li = function(e, t) {
  return e(t);
}, ui = z;
function Or(e) {
  e();
}
function Nr(e) {
  return e;
}
function Ir() {
  return [!1, Or];
}
var Tr = xe, fi = gt;
function xr(e, t) {
  var n = t(), r = W({ h: { __: n, v: t } }), o = r[0].h, i = r[1];
  return xe(function() {
    o.__ = n, o.v = t, Tt(o) && i({ h: o });
  }, [e, n, t]), re(function() {
    return Tt(o) && i({ h: o }), e(function() {
      Tt(o) && i({ h: o });
    });
  }, [e]), n;
}
function Tt(e) {
  var t, n, r = e.v, o = e.__;
  try {
    var i = r();
    return !((t = o) === (n = i) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
}
var oe = { useState: W, useId: Cr, useReducer: ln, useEffect: re, useLayoutEffect: xe, useInsertionEffect: Tr, useTransition: Ir, useDeferredValue: Nr, useSyncExternalStore: xr, startTransition: Or, useRef: Ze, useImperativeHandle: vr, useMemo: ne, useCallback: ge, useContext: Ye, useDebugValue: dt, version: "17.0.2", Children: Ho, render: qo, hydrate: Xo, unmountComponentAtNode: ai, createPortal: zo, createElement: D, createContext: mr, createFactory: ni, cloneElement: ii, createRef: yo, Fragment: z, isValidElement: gt, isElement: fi, isFragment: ri, isMemo: oi, findDOMNode: si, Component: G, PureComponent: Wt, memo: Lo, forwardRef: Mo, flushSync: li, unstable_batchedUpdates: ci, StrictMode: ui, Suspense: it, SuspenseList: Me, lazy: Uo, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ti };
function di(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var hi = function(t, n, r, o) {
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
  for (var c = Object.prototype.hasOwnProperty.bind(n), u = 0; u < a.length; u++) {
    var d = a[u];
    if (!c(d))
      return !1;
    var l = t[d], _ = n[d];
    if (i = r ? r.call(o, l, _, d) : void 0, i === !1 || i === void 0 && l !== _)
      return !1;
  }
  return !0;
};
const _i = /* @__PURE__ */ di(hi);
var I = "-ms-", Be = "-moz-", O = "-webkit-", Rr = "comm", yt = "rule", dn = "decl", pi = "@import", Ar = "@keyframes", mi = "@layer", Pr = Math.abs, hn = String.fromCharCode, zt = Object.assign;
function gi(e, t) {
  return A(e, 0) ^ 45 ? (((t << 2 ^ A(e, 0)) << 2 ^ A(e, 1)) << 2 ^ A(e, 2)) << 2 ^ A(e, 3) : 0;
}
function Lr(e) {
  return e.trim();
}
function K(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function v(e, t, n) {
  return e.replace(t, n);
}
function at(e, t, n) {
  return e.indexOf(t, n);
}
function A(e, t) {
  return e.charCodeAt(t) | 0;
}
function ke(e, t, n) {
  return e.slice(t, n);
}
function Y(e) {
  return e.length;
}
function Dr(e) {
  return e.length;
}
function He(e, t) {
  return t.push(e), e;
}
function yi(e, t) {
  return e.map(t).join("");
}
function jn(e, t) {
  return e.filter(function(n) {
    return !K(n, t);
  });
}
var vt = 1, Oe = 1, Mr = 0, j = 0, R = 0, Re = "";
function Ct(e, t, n, r, o, i, a, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: vt, column: Oe, length: a, return: "", siblings: s };
}
function ae(e, t) {
  return zt(Ct("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function be(e) {
  for (; e.root; )
    e = ae(e.root, { children: [e] });
  He(e, e.siblings);
}
function vi() {
  return R;
}
function Ci() {
  return R = j > 0 ? A(Re, --j) : 0, Oe--, R === 10 && (Oe = 1, vt--), R;
}
function V() {
  return R = j < Mr ? A(Re, j++) : 0, Oe++, R === 10 && (Oe = 1, vt++), R;
}
function he() {
  return A(Re, j);
}
function st() {
  return j;
}
function wt(e, t) {
  return ke(Re, e, t);
}
function jt(e) {
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
function wi(e) {
  return vt = Oe = 1, Mr = Y(Re = e), j = 0, [];
}
function Si(e) {
  return Re = "", e;
}
function xt(e) {
  return Lr(wt(j - 1, Gt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ei(e) {
  for (; (R = he()) && R < 33; )
    V();
  return jt(e) > 2 || jt(R) > 3 ? "" : " ";
}
function bi(e, t) {
  for (; --t && V() && !(R < 48 || R > 102 || R > 57 && R < 65 || R > 70 && R < 97); )
    ;
  return wt(e, st() + (t < 6 && he() == 32 && V() == 32));
}
function Gt(e) {
  for (; V(); )
    switch (R) {
      case e:
        return j;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Gt(R);
        break;
      case 40:
        e === 41 && Gt(e);
        break;
      case 92:
        V();
        break;
    }
  return j;
}
function $i(e, t) {
  for (; V() && e + R !== 57; )
    if (e + R === 84 && he() === 47)
      break;
  return "/*" + wt(t, j - 1) + "*" + hn(e === 47 ? e : V());
}
function ki(e) {
  for (; !jt(he()); )
    V();
  return wt(e, j);
}
function Oi(e) {
  return Si(ct("", null, null, null, [""], e = wi(e), 0, [0], e));
}
function ct(e, t, n, r, o, i, a, s, c) {
  for (var u = 0, d = 0, l = a, _ = 0, h = 0, g = 0, S = 1, $ = 1, p = 1, m = 0, k = "", E = o, N = i, C = r, y = k; $; )
    switch (g = m, m = V()) {
      case 40:
        if (g != 108 && A(y, l - 1) == 58) {
          at(y += v(xt(m), "&", "&\f"), "&\f", Pr(u ? s[u - 1] : 0)) != -1 && (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        y += xt(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        y += Ei(g);
        break;
      case 92:
        y += bi(st() - 1, 7);
        continue;
      case 47:
        switch (he()) {
          case 42:
          case 47:
            He(Ni($i(V(), st()), t, n, c), c);
            break;
          default:
            y += "/";
        }
        break;
      case 123 * S:
        s[u++] = Y(y) * p;
      case 125 * S:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            $ = 0;
          case 59 + d:
            p == -1 && (y = v(y, /\f/g, "")), h > 0 && Y(y) - l && He(h > 32 ? Vn(y + ";", r, n, l - 1, c) : Vn(v(y, " ", "") + ";", r, n, l - 2, c), c);
            break;
          case 59:
            y += ";";
          default:
            if (He(C = Gn(y, t, n, u, d, o, s, k, E = [], N = [], l, i), i), m === 123)
              if (d === 0)
                ct(y, t, C, C, E, i, l, s, N);
              else
                switch (_ === 99 && A(y, 3) === 110 ? 100 : _) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ct(e, C, C, r && He(Gn(e, C, C, 0, 0, o, s, k, o, E = [], l, N), N), o, N, l, s, r ? E : N);
                    break;
                  default:
                    ct(y, C, C, C, [""], N, 0, s, N);
                }
        }
        u = d = h = 0, S = p = 1, k = y = "", l = a;
        break;
      case 58:
        l = 1 + Y(y), h = g;
      default:
        if (S < 1) {
          if (m == 123)
            --S;
          else if (m == 125 && S++ == 0 && Ci() == 125)
            continue;
        }
        switch (y += hn(m), m * S) {
          case 38:
            p = d > 0 ? 1 : (y += "\f", -1);
            break;
          case 44:
            s[u++] = (Y(y) - 1) * p, p = 1;
            break;
          case 64:
            he() === 45 && (y += xt(V())), _ = he(), d = l = Y(k = y += ki(st())), m++;
            break;
          case 45:
            g === 45 && Y(y) == 2 && (S = 0);
        }
    }
  return i;
}
function Gn(e, t, n, r, o, i, a, s, c, u, d, l) {
  for (var _ = o - 1, h = o === 0 ? i : [""], g = Dr(h), S = 0, $ = 0, p = 0; S < r; ++S)
    for (var m = 0, k = ke(e, _ + 1, _ = Pr($ = a[S])), E = e; m < g; ++m)
      (E = Lr($ > 0 ? h[m] + " " + k : v(k, /&\f/g, h[m]))) && (c[p++] = E);
  return Ct(e, t, n, o === 0 ? yt : s, c, u, d, l);
}
function Ni(e, t, n, r) {
  return Ct(e, t, n, Rr, hn(vi()), ke(e, 2, -2), 0, r);
}
function Vn(e, t, n, r, o) {
  return Ct(e, t, n, dn, ke(e, 0, r), ke(e, r + 1, -1), r, o);
}
function Hr(e, t, n) {
  switch (gi(e, t)) {
    case 5103:
      return O + "print-" + e + e;
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
      return O + e + e;
    case 4789:
      return Be + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return O + e + Be + e + I + e + e;
    case 5936:
      switch (A(e, t + 11)) {
        case 114:
          return O + e + I + v(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return O + e + I + v(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return O + e + I + v(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return O + e + I + e + e;
    case 6165:
      return O + e + I + "flex-" + e + e;
    case 5187:
      return O + e + v(e, /(\w+).+(:[^]+)/, O + "box-$1$2" + I + "flex-$1$2") + e;
    case 5443:
      return O + e + I + "flex-item-" + v(e, /flex-|-self/g, "") + (K(e, /flex-|baseline/) ? "" : I + "grid-row-" + v(e, /flex-|-self/g, "")) + e;
    case 4675:
      return O + e + I + "flex-line-pack" + v(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return O + e + I + v(e, "shrink", "negative") + e;
    case 5292:
      return O + e + I + v(e, "basis", "preferred-size") + e;
    case 6060:
      return O + "box-" + v(e, "-grow", "") + O + e + I + v(e, "grow", "positive") + e;
    case 4554:
      return O + v(e, /([^-])(transform)/g, "$1" + O + "$2") + e;
    case 6187:
      return v(v(v(e, /(zoom-|grab)/, O + "$1"), /(image-set)/, O + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return v(e, /(image-set\([^]*)/, O + "$1$`$1");
    case 4968:
      return v(v(e, /(.+:)(flex-)?(.*)/, O + "box-pack:$3" + I + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + O + e + e;
    case 4200:
      if (!K(e, /flex-|baseline/)) return I + "grid-column-align" + ke(e, t) + e;
      break;
    case 2592:
    case 3360:
      return I + v(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, K(r.props, /grid-\w+-end/);
      }) ? ~at(e + (n = n[t].value), "span", 0) ? e : I + v(e, "-start", "") + e + I + "grid-row-span:" + (~at(n, "span", 0) ? K(n, /\d+/) : +K(n, /\d+/) - +K(e, /\d+/)) + ";" : I + v(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return K(r.props, /grid-\w+-start/);
      }) ? e : I + v(v(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return v(e, /(.+)-inline(.+)/, O + "$1$2") + e;
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
          case 109:
            if (A(e, t + 4) !== 45)
              break;
          case 102:
            return v(e, /(.+:)(.+)-([^]+)/, "$1" + O + "$2-$3$1" + Be + (A(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~at(e, "stretch", 0) ? Hr(v(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return v(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, a, s, c, u) {
        return I + o + ":" + i + u + (a ? I + o + "-span:" + (s ? c : +c - +i) + u : "") + e;
      });
    case 4949:
      if (A(e, t + 6) === 121)
        return v(e, ":", ":" + O) + e;
      break;
    case 6444:
      switch (A(e, A(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return v(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + O + (A(e, 14) === 45 ? "inline-" : "") + "box$3$1" + O + "$2$3$1" + I + "$2box$3") + e;
        case 100:
          return v(e, ":", ":" + I) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return v(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function ht(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Ii(e, t, n, r) {
  switch (e.type) {
    case mi:
      if (e.children.length) break;
    case pi:
    case dn:
      return e.return = e.return || e.value;
    case Rr:
      return "";
    case Ar:
      return e.return = e.value + "{" + ht(e.children, r) + "}";
    case yt:
      if (!Y(e.value = e.props.join(","))) return "";
  }
  return Y(n = ht(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Ti(e) {
  var t = Dr(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function xi(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Ri(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case dn:
        e.return = Hr(e.value, e.length, n);
        return;
      case Ar:
        return ht([ae(e, { value: v(e.value, "@", "@" + O) })], r);
      case yt:
        if (e.length)
          return yi(n = e.props, function(o) {
            switch (K(o, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                be(ae(e, { props: [v(o, /:(read-\w+)/, ":" + Be + "$1")] })), be(ae(e, { props: [o] })), zt(e, { props: jn(n, r) });
                break;
              case "::placeholder":
                be(ae(e, { props: [v(o, /:(plac\w+)/, ":" + O + "input-$1")] })), be(ae(e, { props: [v(o, /:(plac\w+)/, ":" + Be + "$1")] })), be(ae(e, { props: [v(o, /:(plac\w+)/, I + "input-$1")] })), be(ae(e, { props: [o] })), zt(e, { props: jn(n, r) });
                break;
            }
            return "";
          });
    }
}
var Ai = {
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
}, b = {}, ve = typeof process < "u" && b !== void 0 && (b.REACT_APP_SC_ATTR || b.SC_ATTR) || "data-styled", Fr = "active", Ur = "data-styled-version", St = "6.1.11", _n = `/*!sc*/
`, pn = typeof window < "u" && "HTMLElement" in window, Pi = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && b !== void 0 && b.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && b.REACT_APP_SC_DISABLE_SPEEDY !== "" ? b.REACT_APP_SC_DISABLE_SPEEDY !== "false" && b.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && b !== void 0 && b.SC_DISABLE_SPEEDY !== void 0 && b.SC_DISABLE_SPEEDY !== "" ? b.SC_DISABLE_SPEEDY !== "false" && b.SC_DISABLE_SPEEDY : b.NODE_ENV !== "production"), Zn = /invalid hook call/i, et = /* @__PURE__ */ new Set(), Li = function(e, t) {
  if (b.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(a) {
        for (var s = [], c = 1; c < arguments.length; c++) s[c - 1] = arguments[c];
        Zn.test(a) ? (i = !1, et.delete(r)) : o.apply(void 0, ye([a], s, !1));
      }, Ze(), i && !et.has(r) && (console.warn(r), et.add(r));
    } catch (a) {
      Zn.test(a.message) && et.delete(r);
    } finally {
      console.error = o;
    }
  }
}, Et = Object.freeze([]), Ne = Object.freeze({});
function Di(e, t, n) {
  return n === void 0 && (n = Ne), e.theme !== n.theme && e.theme || t || n.theme;
}
var Vt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Mi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Hi = /(^-|-$)/g;
function Yn(e) {
  return e.replace(Mi, "-").replace(Hi, "");
}
var Fi = /(a)(d)/gi, tt = 52, qn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Zt(e) {
  var t, n = "";
  for (t = Math.abs(e); t > tt; t = t / tt | 0) n = qn(t % tt) + n;
  return (qn(t % tt) + n).replace(Fi, "$1-$2");
}
var Rt, Br = 5381, fe = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Wr = function(e) {
  return fe(Br, e);
};
function zr(e) {
  return Zt(Wr(e) >>> 0);
}
function jr(e) {
  return b.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function At(e) {
  return typeof e == "string" && (b.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Gr = typeof Symbol == "function" && Symbol.for, Vr = Gr ? Symbol.for("react.memo") : 60115, Ui = Gr ? Symbol.for("react.forward_ref") : 60112, Bi = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Wi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Zr = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, zi = ((Rt = {})[Ui] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Rt[Vr] = Zr, Rt);
function Xn(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Vr ? Zr : "$$typeof" in e ? zi[e.$$typeof] : Bi;
  var t;
}
var ji = Object.defineProperty, Gi = Object.getOwnPropertyNames, Qn = Object.getOwnPropertySymbols, Vi = Object.getOwnPropertyDescriptor, Zi = Object.getPrototypeOf, Kn = Object.prototype;
function Yr(e, t, n) {
  if (typeof t != "string") {
    if (Kn) {
      var r = Zi(t);
      r && r !== Kn && Yr(e, r, n);
    }
    var o = Gi(t);
    Qn && (o = o.concat(Qn(t)));
    for (var i = Xn(e), a = Xn(t), s = 0; s < o.length; ++s) {
      var c = o[s];
      if (!(c in Wi || n && n[c] || a && c in a || i && c in i)) {
        var u = Vi(t, c);
        try {
          ji(e, c, u);
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
function mn(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function de(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Yt(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function Ie(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function qt(e, t, n) {
  if (n === void 0 && (n = !1), !n && !Ie(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = qt(e[r], t[r]);
  else if (Ie(t)) for (var r in t) e[r] = qt(e[r], t[r]);
  return e;
}
function gn(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Yi = b.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function qi() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(a) {
    n = n.replace(/%[a-z]/, a);
  }), n;
}
function X(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return b.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(qi.apply(void 0, ye([Yi[e]], t, !1)).trim());
}
var Xi = function() {
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
    for (var s = this.indexOfGroup(t + 1), c = (a = 0, n.length); a < c; a++) this.tag.insertRule(s, n[a]) && (this.groupSizes[t]++, s++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], r = this.indexOfGroup(t), o = r + n;
      this.groupSizes[t] = 0;
      for (var i = r; i < o; i++) this.tag.deleteRule(r);
    }
  }, e.prototype.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, a = o; a < i; a++) n += "".concat(this.tag.getRule(a)).concat(_n);
    return n;
  }, e;
}(), Qi = 1 << 30, lt = /* @__PURE__ */ new Map(), _t = /* @__PURE__ */ new Map(), ut = 1, nt = function(e) {
  if (lt.has(e)) return lt.get(e);
  for (; _t.has(ut); ) ut++;
  var t = ut++;
  if (b.NODE_ENV !== "production" && ((0 | t) < 0 || t > Qi)) throw X(16, "".concat(t));
  return lt.set(e, t), _t.set(t, e), t;
}, Ki = function(e, t) {
  ut = t + 1, lt.set(e, t), _t.set(t, e);
}, Ji = "style[".concat(ve, "][").concat(Ur, '="').concat(St, '"]'), ea = new RegExp("^".concat(ve, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ta = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++) (r = o[i]) && e.registerName(t, r);
}, na = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(_n), o = [], i = 0, a = r.length; i < a; i++) {
    var s = r[i].trim();
    if (s) {
      var c = s.match(ea);
      if (c) {
        var u = 0 | parseInt(c[1], 10), d = c[2];
        u !== 0 && (Ki(d, u), ta(e, d, c[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else o.push(s);
    }
  }
};
function ra() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var qr = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(s) {
    var c = Array.from(s.querySelectorAll("style[".concat(ve, "]")));
    return c[c.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ve, Fr), r.setAttribute(Ur, St);
  var a = ra();
  return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
}, oa = function() {
  function e(t) {
    this.element = qr(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
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
}(), ia = function() {
  function e(t) {
    this.element = qr(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), aa = function() {
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
}(), Jn = pn, sa = { isServer: !pn, useCSSOMInjection: !Pi }, Xr = function() {
  function e(t, n, r) {
    t === void 0 && (t = Ne), n === void 0 && (n = {});
    var o = this;
    this.options = L(L({}, sa), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && pn && Jn && (Jn = !1, function(i) {
      for (var a = document.querySelectorAll(Ji), s = 0, c = a.length; s < c; s++) {
        var u = a[s];
        u && u.getAttribute(ve) !== Fr && (na(i, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this)), gn(this, function() {
      return function(i) {
        for (var a = i.getTag(), s = a.length, c = "", u = function(l) {
          var _ = function(p) {
            return _t.get(p);
          }(l);
          if (_ === void 0) return "continue";
          var h = i.names.get(_), g = a.getGroup(l);
          if (h === void 0 || g.length === 0) return "continue";
          var S = "".concat(ve, ".g").concat(l, '[id="').concat(_, '"]'), $ = "";
          h !== void 0 && h.forEach(function(p) {
            p.length > 0 && ($ += "".concat(p, ","));
          }), c += "".concat(g).concat(S, '{content:"').concat($, '"}').concat(_n);
        }, d = 0; d < s; d++) u(d);
        return c;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return nt(t);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(L(L({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new aa(o) : r ? new oa(o) : new ia(o);
    }(this.options), new Xi(t)));
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
}(), ca = /&/g, la = /^\s*\/\/.*$/gm;
function Qr(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = Qr(n.children, t)), n;
  });
}
function Kr(e) {
  var t, n, r, o = e === void 0 ? Ne : e, i = o.options, a = i === void 0 ? Ne : i, s = o.plugins, c = s === void 0 ? Et : s, u = function(_, h, g) {
    return g.startsWith(n) && g.endsWith(n) && g.replaceAll(n, "").length > 0 ? ".".concat(t) : _;
  }, d = c.slice();
  d.push(function(_) {
    _.type === yt && _.value.includes("&") && (_.props[0] = _.props[0].replace(ca, n).replace(r, u));
  }), a.prefix && d.push(Ri), d.push(Ii);
  var l = function(_, h, g, S) {
    h === void 0 && (h = ""), g === void 0 && (g = ""), S === void 0 && (S = "&"), t = S, n = h, r = new RegExp("\\".concat(n, "\\b"), "g");
    var $ = _.replace(la, ""), p = Oi(g || h ? "".concat(g, " ").concat(h, " { ").concat($, " }") : $);
    a.namespace && (p = Qr(p, a.namespace));
    var m = [];
    return ht(p, Ti(d.concat(xi(function(k) {
      return m.push(k);
    })))), m;
  };
  return l.hash = c.length ? c.reduce(function(_, h) {
    return h.name || X(15), fe(_, h.name);
  }, Br).toString() : "", l;
}
var ua = new Xr(), Xt = Kr(), yn = oe.createContext({ shouldForwardProp: void 0, styleSheet: ua, stylis: Xt });
yn.Consumer;
var fa = oe.createContext(void 0);
function Qt() {
  return Ye(yn);
}
function da(e) {
  var t = W(e.stylisPlugins), n = t[0], r = t[1], o = Qt().styleSheet, i = ne(function() {
    var c = o;
    return e.sheet ? c = e.sheet : e.target && (c = c.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (c = c.reconstructWithOptions({ useCSSOMInjection: !1 })), c;
  }, [e.disableCSSOMInjection, e.sheet, e.target, o]), a = ne(function() {
    return Kr({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: n });
  }, [e.enableVendorPrefixes, e.namespace, n]);
  re(function() {
    _i(n, e.stylisPlugins) || r(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var s = ne(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: a };
  }, [e.shouldForwardProp, i, a]);
  return oe.createElement(yn.Provider, { value: s }, oe.createElement(fa.Provider, { value: a }, e.children));
}
var Kt = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Xt);
      var a = r.name + i.hash;
      o.hasNameForId(r.id, a) || o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, gn(this, function() {
      throw X(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Xt), this.name + t.hash;
  }, e;
}(), ha = function(e) {
  return e >= "A" && e <= "Z";
};
function er(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    ha(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Jr = function(e) {
  return e == null || e === !1 || e === "";
}, eo = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !Jr(i) && (Array.isArray(i) && i.isCss || Ce(i) ? r.push("".concat(er(o), ":"), i, ";") : Ie(i) ? r.push.apply(r, ye(ye(["".concat(o, " {")], eo(i), !1), ["}"], !1)) : r.push("".concat(er(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in Ai || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function _e(e, t, n, r) {
  if (Jr(e)) return [];
  if (mn(e)) return [".".concat(e.styledComponentId)];
  if (Ce(e)) {
    if (!Ce(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return b.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Kt || Ie(o) || o === null || console.error("".concat(jr(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), _e(o, t, n, r);
  }
  var i;
  return e instanceof Kt ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Ie(e) ? eo(e) : Array.isArray(e) ? Array.prototype.concat.apply(Et, e.map(function(a) {
    return _e(a, t, n, r);
  })) : [e.toString()];
}
function _a(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Ce(n) && !mn(n)) return !1;
  }
  return !0;
}
var pa = Wr(St), ma = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = b.NODE_ENV === "production" && (r === void 0 || r.isStatic) && _a(t), this.componentId = n, this.baseHash = fe(pa, n), this.baseStyle = r, Xr.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = de(o, this.staticRulesId);
    else {
      var i = Yt(_e(this.rules, t, n, r)), a = Zt(fe(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, a)) {
        var s = r(i, ".".concat(a), void 0, this.componentId);
        n.insertRules(this.componentId, a, s);
      }
      o = de(o, a), this.staticRulesId = a;
    }
    else {
      for (var c = fe(this.baseHash, r.hash), u = "", d = 0; d < this.rules.length; d++) {
        var l = this.rules[d];
        if (typeof l == "string") u += l, b.NODE_ENV !== "production" && (c = fe(c, l));
        else if (l) {
          var _ = Yt(_e(l, t, n, r));
          c = fe(c, _ + d), u += _;
        }
      }
      if (u) {
        var h = Zt(c >>> 0);
        n.hasNameForId(this.componentId, h) || n.insertRules(this.componentId, h, r(u, ".".concat(h), void 0, this.componentId)), o = de(o, h);
      }
    }
    return o;
  }, e;
}(), je = oe.createContext(void 0);
je.Consumer;
function to() {
  var e = Ye(je);
  if (!e) throw X(18);
  return e;
}
function ga(e) {
  var t = oe.useContext(je), n = ne(function() {
    return function(r, o) {
      if (!r) throw X(14);
      if (Ce(r)) {
        var i = r(o);
        if (b.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object")) throw X(7);
        return i;
      }
      if (Array.isArray(r) || typeof r != "object") throw X(8);
      return o ? L(L({}, o), r) : r;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? oe.createElement(je.Provider, { value: n }, e.children) : null;
}
var Pt = {}, tr = /* @__PURE__ */ new Set();
function ya(e, t, n) {
  var r = mn(e), o = e, i = !At(e), a = t.attrs, s = a === void 0 ? Et : a, c = t.componentId, u = c === void 0 ? function(E, N) {
    var C = typeof E != "string" ? "sc" : Yn(E);
    Pt[C] = (Pt[C] || 0) + 1;
    var y = "".concat(C, "-").concat(zr(St + C + Pt[C]));
    return N ? "".concat(N, "-").concat(y) : y;
  }(t.displayName, t.parentComponentId) : c, d = t.displayName, l = d === void 0 ? function(E) {
    return At(E) ? "styled.".concat(E) : "Styled(".concat(jr(E), ")");
  }(e) : d, _ = t.displayName && t.componentId ? "".concat(Yn(t.displayName), "-").concat(t.componentId) : t.componentId || u, h = r && o.attrs ? o.attrs.concat(s).filter(Boolean) : s, g = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var S = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var $ = t.shouldForwardProp;
      g = function(E, N) {
        return S(E, N) && $(E, N);
      };
    } else g = S;
  }
  var p = new ma(n, _, r ? o.componentStyle : void 0);
  function m(E, N) {
    return function(C, y, F) {
      var Z = C.attrs, U = C.componentStyle, Se = C.defaultProps, uo = C.foldedComponentIds, Cn = C.styledComponentId, fo = C.target, ho = oe.useContext(je), _o = Qt(), $t = C.shouldForwardProp || _o.shouldForwardProp;
      b.NODE_ENV !== "production" && dt(Cn);
      var wn = Di(y, ho, Se) || Ne, Q = function(qe, Le, Xe) {
        for (var Ee, le = L(L({}, Le), { className: void 0, theme: Xe }), Nt = 0; Nt < qe.length; Nt += 1) {
          var Qe = Ce(Ee = qe[Nt]) ? Ee(le) : Ee;
          for (var ie in Qe) le[ie] = ie === "className" ? de(le[ie], Qe[ie]) : ie === "style" ? L(L({}, le[ie]), Qe[ie]) : Qe[ie];
        }
        return Le.className && (le.className = de(le.className, Le.className)), le;
      }(Z, y, wn), Ae = Q.as || fo, Pe = {};
      for (var B in Q) Q[B] === void 0 || B[0] === "$" || B === "as" || B === "theme" && Q.theme === wn || (B === "forwardedAs" ? Pe.as = Q.forwardedAs : $t && !$t(B, Ae) || (Pe[B] = Q[B], $t || b.NODE_ENV !== "development" || Po(B) || tr.has(B) || !Vt.has(Ae) || (tr.add(B), console.warn('styled-components: it looks like an unknown prop "'.concat(B, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var kt = function(qe, Le) {
        var Xe = Qt(), Ee = qe.generateAndInjectStyles(Le, Xe.styleSheet, Xe.stylis);
        return b.NODE_ENV !== "production" && dt(Ee), Ee;
      }(U, Q);
      b.NODE_ENV !== "production" && C.warnTooManyClasses && C.warnTooManyClasses(kt);
      var Ot = de(uo, Cn);
      return kt && (Ot += " " + kt), Q.className && (Ot += " " + Q.className), Pe[At(Ae) && !Vt.has(Ae) ? "class" : "className"] = Ot, Pe.ref = F, D(Ae, Pe);
    }(k, E, N);
  }
  m.displayName = l;
  var k = oe.forwardRef(m);
  return k.attrs = h, k.componentStyle = p, k.displayName = l, k.shouldForwardProp = g, k.foldedComponentIds = r ? de(o.foldedComponentIds, o.styledComponentId) : "", k.styledComponentId = _, k.target = r ? o.target : e, Object.defineProperty(k, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = r ? function(N) {
      for (var C = [], y = 1; y < arguments.length; y++) C[y - 1] = arguments[y];
      for (var F = 0, Z = C; F < Z.length; F++) qt(N, Z[F], !0);
      return N;
    }({}, o.defaultProps, E) : E;
  } }), b.NODE_ENV !== "production" && (Li(l, _), k.warnTooManyClasses = /* @__PURE__ */ function(E, N) {
    var C = {}, y = !1;
    return function(F) {
      if (!y && (C[F] = !0, Object.keys(C).length >= 200)) {
        var Z = N ? ' with the id of "'.concat(N, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(E).concat(Z, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), y = !0, C = {};
      }
    };
  }(l, _)), gn(k, function() {
    return ".".concat(k.styledComponentId);
  }), i && Yr(k, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), k;
}
function nr(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var rr = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function vn(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Ce(e) || Ie(e)) return rr(_e(nr(Et, ye([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? _e(r) : rr(_e(nr(r, t)));
}
function Jt(e, t, n) {
  if (n === void 0 && (n = Ne), !t) throw X(1, t);
  var r = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
    return e(t, n, vn.apply(void 0, ye([o], i, !1)));
  };
  return r.attrs = function(o) {
    return Jt(e, t, L(L({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Jt(e, t, L(L({}, n), o));
  }, r;
}
var no = function(e) {
  return Jt(ya, e);
}, H = no;
Vt.forEach(function(e) {
  H[e] = no(e);
});
function bt(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  b.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = Yt(vn.apply(void 0, ye([e], t, !1))), o = zr(r);
  return new Kt(o, r);
}
b.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var rt = "__sc-".concat(ve, "__");
b.NODE_ENV !== "production" && b.NODE_ENV !== "test" && typeof window < "u" && (window[rt] || (window[rt] = 0), window[rt] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[rt] += 1);
const M = {
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
}, va = 2, ro = 14, Ca = 0.0276;
var J = /* @__PURE__ */ ((e) => (e[e.S = 300] = "S", e[e.M = 400] = "M", e[e.L = 500] = "L", e[e.Default = 600] = "Default", e))(J || {});
const Fe = {
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
}, wa = {
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
}, Sa = M.CIRCLE_SOLID, Ea = "rgba(19, 19, 19, 0.5)", ba = 34;
function ir(e, t) {
  return Math.max(t, t + (e - 400) * Ca + 2);
}
const $a = (e, t = ro) => e ? e.width < e.height ? ir(e.width, t) : ir(e.height, t) : t, ka = (e) => e > J.Default ? Fe[J.Default] : e > J.L ? Fe[J.L] : e > J.M ? Fe[J.M] : Fe[J.S], Oa = (e) => e ? ka(e.width) : Fe[J.Default];
function Na() {
  const e = "https://fonts.googleapis.com/css?family=Montserrat:600";
  if (!document.querySelector(`link[href="${e}"]`)) {
    const n = document.createElement("link");
    n.href = e, n.rel = "stylesheet", document.head.appendChild(n);
  }
}
const We = mr(void 0);
We.displayName = "UiCustomizationContext";
function we() {
  const e = Ye(We);
  if (!e)
    throw new Error(
      `${We.displayName} must be used within a ${We.displayName} Provider`
    );
  return e;
}
function Ia({ children: e, props: t, videoElementSize: n }) {
  const { font: r } = to(), o = ne(
    () => ({ ...t, videoElementSize: n, fontSize: $a(n, r.minimumSize) }),
    [t, r.minimumSize, n]
  );
  return /* @__PURE__ */ f(We.Provider, { value: o, children: e });
}
const oo = ({ svgSize: e }) => /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 16 14", width: e, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
  "path",
  {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), Ta = H.div`
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
`, xa = H.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, Ra = H.p`
  background: ${(e) => e.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(e) => `${e.$fontSize}px`};
  line-height: 1em;
  max-width: 80%;
`, en = ({ Icon: e, isCameraReady: t, position: n = "absolute", text: r }) => {
  const { fontSize: o } = we();
  return /* @__PURE__ */ f(Ta, { $isCameraReady: t, $position: n, children: /* @__PURE__ */ f(xa, { children: [
    e ? /* @__PURE__ */ f(e, { svgSize: o * 2 }) : null,
    /* @__PURE__ */ f(Ra, { $fontSize: o, children: r })
  ] }) });
}, io = ({ text: e = "An unknown error has occurred" }) => /* @__PURE__ */ f(en, { Icon: oo, position: "relative", text: e });
class Aa extends G {
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
    return this.state.hasError ? /* @__PURE__ */ f(io, { Icon: oo, isCameraReady: !1 }) : this.props.children;
  }
}
const Pa = H.div`
  font-family: ${(e) => e.theme.font.family};
  font-style: ${(e) => e.theme.font.style};
  font-weight: ${(e) => e.theme.font.weight};
`, La = ({ children: e, uiProps: t, videoElementSize: n }) => (re(() => {
  Na();
}, []), /* @__PURE__ */ f(da, { target: t.styleTarget, children: /* @__PURE__ */ f(ga, { theme: t.theme, children: /* @__PURE__ */ f(Pa, { children: /* @__PURE__ */ f(Aa, { videoElementSize: n, children: /* @__PURE__ */ f(Ia, { props: t, videoElementSize: n, children: e }) }) }) }) })), Da = 0.75, Ma = 2, Ha = "dot-auto-capture-video", Ge = (e, t) => {
  const n = Ze(t);
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
function Fa(e) {
  const [t, n] = W(), r = ge(
    (o) => {
      var i;
      n((i = o.detail) == null ? void 0 : i.size);
    },
    [n]
  );
  return Ge(e, r), xe(() => {
    if (!t) {
      const o = document.getElementById(Ha);
      o && n(o.getBoundingClientRect());
    }
  }, [t, n]), t;
}
function Ua(e, t) {
  return e ? `${e}, ${t}` : t;
}
const Ba = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, Wa = {
  family: "Montserrat, Arial, sans-serif",
  weight: "600",
  style: "normal",
  minimumSize: ro
}, De = {
  colors: Ba,
  font: Wa
}, za = (e) => {
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
      family: Ua((t = e.font) == null ? void 0 : t.family, De.font.family)
    }
  } : De;
}, ja = (e) => Number.parseFloat(e.toFixed(3)), ao = (e, t) => Math.min(e, t), Ga = ({ height: e, width: t }, n) => {
  const r = ao(t, e) * n, o = (t - r) / 2, i = (e - r) / 2;
  return {
    shiftX: o,
    shiftY: i,
    width: r,
    height: r
  };
}, Va = (e, t) => {
  const { height: n, shiftX: r, shiftY: o, width: i } = Ga(e, t);
  return {
    shiftX: r / e.width,
    shiftY: o / e.height,
    width: i / e.width,
    height: n / e.height
  };
}, Za = (e, t) => {
  const n = ao(t.width, t.height);
  return ja(e * n);
}, Ya = (e) => Va(e, Da), qa = (e, t) => Za(e, t) * Ma, so = (e, t) => {
  document.dispatchEvent(
    new CustomEvent(e, {
      detail: t
    })
  );
}, pt = class pt {
  constructor() {
    Ke(this, "lastDetails", {});
    Ke(this, "delayedTime", 0);
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
    this.isDetailChanged(t, n) && so(t, n);
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
Ke(pt, "_instance");
let tn = pt;
tn.getInstance();
const ar = (e, t) => {
  so(e, {
    instruction: t
  });
};
async function Xa() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Qa() {
  return (await Xa()).filter((t) => t.kind === "videoinput");
}
const Ka = () => {
  const [e, t] = W(!1);
  return re(() => {
    (async () => {
      (await Qa()).length > 1 && t(!0);
    })();
  }, []), e;
}, Ja = ({ size: e }) => /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }), es = ({ size: e }) => /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: "52", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ f("circle", { cx: "26", cy: "26", fill: "#131313", fillOpacity: "0.3", r: "26" }),
  /* @__PURE__ */ f(
    "path",
    {
      d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
      fill: "white"
    }
  )
] }), co = H.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(e) => e.$marginLeft ? `${e.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, ts = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ f(co, { $marginLeft: e, ...n, children: /* @__PURE__ */ f(Ja, { size: t }) }), ns = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ f(co, { $marginLeft: e, ...n, children: /* @__PURE__ */ f(es, { size: t }) }), rs = H.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.$padding}px`};
  z-index: 2;
`, os = ({
  customControlEvent: e,
  isSwitchCameraDisabled: t
}) => {
  const { showCameraButtons: n, videoElementSize: r } = we(), o = Ka();
  if (!n)
    return null;
  const { buttonPadding: i, iconSize: a, marginLeft: s } = Oa(r);
  return /* @__PURE__ */ f(rs, { $padding: i, children: [
    o && /* @__PURE__ */ f(ns, { disabled: t, onClick: () => {
      ar(e, kn.SWITCH_CAMERA);
    }, size: a }),
    /* @__PURE__ */ f(
      ts,
      {
        marginLeft: o ? s : 0,
        onClick: () => {
          ar(e, kn.TOGGLE_MIRROR);
        },
        size: a
      }
    )
  ] });
}, is = H.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, as = ({ svgSize: e }) => /* @__PURE__ */ f(is, { children: /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 48 48", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }) }), ss = H.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`, lo = ({ children: e, height: t, width: n }) => {
  const { backdropColor: r } = we();
  return /* @__PURE__ */ f(ss, { children: /* @__PURE__ */ f("svg", { viewBox: `0 0 ${n} ${t}`, children: [
    /* @__PURE__ */ f("defs", { children: /* @__PURE__ */ f("mask", { id: "mask", children: [
      /* @__PURE__ */ f("rect", { fill: "#fff", height: "100%", width: "100%" }),
      e
    ] }) }),
    /* @__PURE__ */ f("rect", { fill: r, height: "100%", mask: "url(#mask)", width: "100%" })
  ] }) });
}, cs = ({ cameraHeight: e, cameraWidth: t, isBackdrop: n, state: r }) => {
  const { appStateInstructions: o } = we(), i = r === q.ERROR || r === q.RUNNING;
  return !r || i || !(o != null && o[r].visible) ? null : r === q.WAITING ? /* @__PURE__ */ f(z, { children: [
    n && e && t && /* @__PURE__ */ f(lo, { height: e, width: t }),
    /* @__PURE__ */ f(en, { isCameraReady: !0, text: o[q.WAITING].text })
  ] }) : /* @__PURE__ */ f(en, { Icon: as, isCameraReady: !0, text: o[q.LOADING].text });
}, ls = "2.5s", us = "0.3s", fs = "linear", ds = bt`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
bt`
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`;
bt`
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
bt`
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
const hs = H.div`
  position: absolute;
  left: 50%;

  ${(e) => e.$cssTop ? `top: ${e.$cssTop}%;` : ""}
  ${(e) => e.$cssBottom ? `bottom: ${e.$cssBottom}%;` : ""}
    ${(e) => e.$isAnimating && vn`
      animation: ${ds} ${us}
        ${fs} both;
      animation-delay: ${ls};

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
`, _s = H.div`
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
`, ps = ({
  children: e,
  cssBottom: t,
  cssTop: n,
  isAnimating: r,
  isInCandidateSelection: o,
  isPortrait: i
}) => {
  const { fontSize: a } = we();
  return /* @__PURE__ */ f(hs, { $cssBottom: t, $cssTop: n, $isAnimating: r, $isPortrait: i, children: /* @__PURE__ */ f(
    _s,
    {
      $fontSize: a,
      $isInCandidateSelection: o,
      $wrap: e.length > ba,
      children: e
    }
  ) });
};
function ms(e) {
  return /* @__PURE__ */ f("rect", { fill: "#000", ...e, rx: "50%" });
}
const gs = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
  "path",
  {
    d: "M2 240C2 108.556 108.556 2 240 2C371.444 2 478 108.556 478 240C478 371.444 371.444 478 240 478C108.556 478 2 371.444 2 240Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  }
) }), ys = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
  "path",
  {
    d: "M38.9231 240C38.9231 108.23 129.248 2 240 2C350.752 2 441.077 108.23 441.077 240C441.077 371.77 350.752 478 240 478C129.248 478 38.9231 371.77 38.9231 240Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  }
) }), vs = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
  "path",
  {
    clipRule: "evenodd",
    d: "M123.592 81.0326C143.203 50.4946 180.289 34 240 34C299.711 34 336.797 50.4946 356.408 81.0326C375.742 111.138 377.681 154.313 368.661 207.051C371.545 208.577 374.834 210.748 377.278 215.028C380.075 219.925 381.612 227.297 380.77 239.048C379.202 260.93 372.883 270.75 366.157 276.198C363.521 278.333 360.842 279.765 358.659 280.932C358.141 281.209 357.651 281.471 357.196 281.724C354.727 283.097 353.459 284.114 352.94 285.588C346.115 312.745 335.656 325.235 326.992 335.581C325.711 337.111 324.469 338.595 323.283 340.072C318.736 345.738 315.077 351.244 313.058 359.018C311.036 366.806 310.62 377.042 312.887 392.189C323.28 427.534 349.601 445.607 379.548 458.155C380.567 458.582 381.047 459.754 380.62 460.773C380.193 461.792 379.021 462.271 378.002 461.845C347.548 449.083 319.871 430.304 309.01 393.182L308.972 393.052L308.952 392.918C306.617 377.396 306.974 366.534 309.187 358.012C311.409 349.454 315.459 343.431 320.164 337.568C321.377 336.057 322.636 334.552 323.926 333.011C332.525 322.737 342.484 310.837 349.08 284.533L349.099 284.458L349.124 284.385C350.161 281.284 352.747 279.621 355.253 278.228C355.794 277.927 356.344 277.632 356.902 277.333C359.061 276.176 361.329 274.961 363.639 273.09C369.248 268.547 375.264 259.921 376.78 238.762C377.594 227.404 376.048 220.94 373.805 217.012C371.594 213.141 368.56 211.453 365.547 209.952L364.214 209.287L364.469 207.818C373.737 154.637 371.701 112.248 353.043 83.194C334.485 54.2962 299.065 38 240 38C180.935 38 145.516 54.2962 126.958 83.194C108.3 112.248 106.264 154.637 115.531 207.818L115.787 209.287L114.453 209.952C111.441 211.453 108.406 213.141 106.196 217.012C103.953 220.94 102.406 227.404 103.22 238.762C104.736 259.921 110.753 268.547 116.361 273.09C118.672 274.961 120.94 276.176 123.099 277.333C123.656 277.632 124.206 277.927 124.748 278.228C127.254 279.621 129.84 281.284 130.877 284.385L130.901 284.458L130.92 284.533C137.517 310.837 147.476 322.737 156.074 333.011C157.364 334.552 158.624 336.057 159.837 337.568C164.542 343.431 168.592 349.454 170.814 358.012C173.026 366.534 173.384 377.396 171.048 392.918L171.028 393.052L170.99 393.182C160.129 430.304 132.452 449.083 101.998 461.845C100.979 462.271 99.8075 461.792 99.3806 460.773C98.9537 459.754 99.4335 458.582 100.452 458.155C130.399 445.607 156.721 427.534 167.113 392.189C169.381 377.042 168.964 366.806 166.942 359.018C164.924 351.244 161.264 345.738 156.717 340.072C155.532 338.595 154.29 337.111 153.008 335.581C144.345 325.235 133.886 312.745 127.061 285.588C126.541 284.114 125.273 283.097 122.804 281.724C122.349 281.471 121.859 281.209 121.341 280.932C119.159 279.765 116.479 278.333 113.844 276.198C107.117 270.75 100.798 260.93 99.2303 239.048C98.3883 227.297 99.9259 219.925 102.722 215.028C105.166 210.748 108.455 208.577 111.339 207.051C102.319 154.313 104.259 111.138 123.592 81.0326Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), Cs = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
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
) }), ws = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
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
) }), Ss = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f("rect", { height: "476", rx: "14", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "4", width: "476", x: "2", y: "2" }) }), Es = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f("rect", { height: "476", rx: "2", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "4", width: "476", x: "2", y: "2" }) }), bs = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
  "path",
  {
    clipRule: "evenodd",
    d: "M126.126 87.8654C147.739 56.7835 184.591 34.0001 239.665 34.0001C239.779 34.0001 239.891 34.0096 240 34.0279C240.109 34.0096 240.221 34.0001 240.335 34.0001C295.41 34.0001 332.261 56.7835 353.874 87.8654C375.428 118.862 381.724 157.957 376.086 190.544C373.539 205.262 371.039 233.823 376.056 253.971C380.828 273.135 387.879 290.154 393.431 303.54L393.491 303.685C396.23 310.287 398.627 316.064 400.16 320.726C400.933 323.077 401.511 325.214 401.797 327.079C402.073 328.879 402.11 330.618 401.637 332.107C399.79 339.478 396.615 344.943 392.398 348.881C388.174 352.825 383.031 355.122 377.446 356.355C366.388 358.799 353.231 357.133 341.237 355.551C340.93 355.51 340.623 355.47 340.317 355.43C334.586 354.672 329.126 353.951 324.151 353.668C318.894 353.368 314.374 353.574 310.799 354.649C307.298 355.702 304.789 357.558 303.304 360.596C301.785 363.704 301.203 368.322 302.207 375.153C309.297 399.432 323.779 413.44 341.432 422.745C356.457 430.665 373.692 435.144 390.741 439.575C393.916 440.401 397.085 441.224 400.232 442.068C401.298 442.354 401.931 443.451 401.645 444.518C401.359 445.585 400.262 446.218 399.196 445.932C396.115 445.106 392.991 444.294 389.842 443.477C372.804 439.052 355.041 434.44 339.567 426.283C321.093 416.546 305.757 401.713 298.328 376.139L298.29 376.01L298.271 375.877C297.181 368.587 297.678 362.998 299.71 358.839C301.787 354.59 305.326 352.119 309.647 350.819C313.895 349.541 318.973 349.366 324.378 349.674C329.508 349.966 335.107 350.706 340.788 351.457C341.112 351.5 341.436 351.543 341.76 351.585C353.925 353.19 366.342 354.713 376.583 352.45C381.65 351.33 386.088 349.3 389.668 345.957C393.241 342.621 396.083 337.86 397.773 331.072L397.791 330.998L397.815 330.925C398.022 330.302 398.087 329.272 397.843 327.686C397.605 326.133 397.102 324.232 396.36 321.976C394.875 317.458 392.525 311.794 389.74 305.081L389.737 305.073C384.19 291.701 377.028 274.428 372.174 254.937C366.952 233.964 369.571 204.733 372.144 189.862C377.623 158.197 371.48 120.191 350.59 90.149C329.759 60.1924 294.162 38.0001 240.335 38.0001C240.221 38.0001 240.109 37.9905 240 37.9722C239.891 37.9905 239.779 38.0001 239.665 38.0001C185.838 38.0001 150.241 60.1924 129.41 90.149C108.52 120.191 102.377 158.197 107.856 189.862C110.429 204.733 113.048 233.964 107.826 254.937C102.972 274.428 95.8101 291.701 90.2633 305.073L90.2607 305.079C87.4756 311.793 85.1256 317.458 83.6398 321.976C82.8977 324.232 82.3951 326.133 82.1567 327.686C81.9133 329.272 81.9778 330.302 82.1847 330.925L82.2088 330.998L82.2273 331.072C83.9176 337.86 86.7592 342.621 90.3324 345.957C93.9121 349.3 98.3505 351.33 103.417 352.45C113.658 354.713 126.075 353.19 138.24 351.585C138.564 351.543 138.888 351.5 139.212 351.457C144.893 350.706 150.492 349.966 155.622 349.674C161.027 349.366 166.105 349.541 170.353 350.819C174.674 352.119 178.213 354.59 180.29 358.839C182.323 362.998 182.819 368.587 181.73 375.877L181.71 376.01L181.672 376.139C174.243 401.713 158.907 416.546 140.433 426.283C124.959 434.44 107.196 439.052 90.1584 443.477C87.0093 444.294 83.8851 445.106 80.8046 445.932C79.7377 446.218 78.6409 445.585 78.3548 444.518C78.0687 443.451 78.7017 442.354 79.7685 442.068C82.9154 441.224 86.0842 440.401 89.2594 439.575C106.308 435.144 123.543 430.665 138.568 422.745C156.221 413.44 170.703 399.432 177.793 375.153C178.797 368.322 178.215 363.704 176.696 360.596C175.211 357.558 172.702 355.702 169.201 354.649C165.626 353.574 161.106 353.368 155.849 353.668C150.874 353.951 145.414 354.672 139.683 355.43C139.377 355.47 139.07 355.51 138.763 355.551C126.769 357.133 113.613 358.799 102.554 356.355C96.9695 355.122 91.8259 352.825 87.6024 348.881C83.3855 344.943 80.2095 339.478 78.3628 332.107C77.8896 330.618 77.9268 328.879 78.203 327.079C78.4892 325.214 79.0667 323.077 79.84 320.726C81.3732 316.064 83.7701 310.286 86.5089 303.684L86.5686 303.54C92.1215 290.154 99.1722 273.135 103.944 253.971C108.961 233.823 106.461 205.262 103.914 190.544C98.2759 157.957 104.572 118.862 126.126 87.8654Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), $s = H.div`
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
`, ks = ({
  children: e,
  className: t,
  isInCandidateSelection: n,
  onAnimationEnd: r,
  placeholderRectangle: o
}) => /* @__PURE__ */ f(
  $s,
  {
    $isInCandidateSelection: n,
    $placeholderRectangle: o,
    className: t,
    onAnimationEnd: r,
    children: e
  }
), Os = {
  [M.CIRCLE_SOLID]: /* @__PURE__ */ f(gs, {}),
  [M.ELLIPSE_SOLID]: /* @__PURE__ */ f(ys, {}),
  [M.MAN_SOLID]: /* @__PURE__ */ f(vs, {}),
  [M.WOMAN_SOLID]: /* @__PURE__ */ f(bs, {}),
  [M.SQUARE_ROUNDED_DASH]: /* @__PURE__ */ f(ws, {}),
  [M.SQUARE_ROUNDED_SOLID]: /* @__PURE__ */ f(Ss, {}),
  [M.SQUARE_DASH]: /* @__PURE__ */ f(Cs, {}),
  [M.SQUARE_SOLID]: /* @__PURE__ */ f(Es, {})
}, Ns = ({ backdropHeight: e, backdropWidth: t, isBackdrop: n, placeholderRectangle: r, ...o }) => {
  const { placeholder: i } = we();
  return /* @__PURE__ */ f(z, { children: [
    n && /* @__PURE__ */ f(lo, { height: e, width: t, children: /* @__PURE__ */ f(
      ms,
      {
        height: `${r.height * 100}%`,
        width: `${r.width * 100}%`,
        x: `${r.shiftX * 100}%`,
        y: `${r.shiftY * 100}%`
      }
    ) }),
    /* @__PURE__ */ f(ks, { placeholderRectangle: r, ...o, children: Os[i] })
  ] });
}, Is = () => {
  const [e, t] = W(), [n, r] = W(!1), o = ge(
    (c) => {
      var d, l;
      t((d = c == null ? void 0 : c.detail) == null ? void 0 : d.cameraResolution);
      const u = (l = c == null ? void 0 : c.detail) == null ? void 0 : l.isMirroring;
      u !== void 0 && r(u);
    },
    [t]
  );
  Ge(me.CAMERA_PROPS_CHANGED, o);
  const [i, a] = W({
    code: P.FACE_NOT_PRESENT,
    // FIXME Default instruction should not be here
    isEscalated: !1
  }), s = ge(
    (c) => {
      var u, d;
      a({
        code: (u = c == null ? void 0 : c.detail) == null ? void 0 : u.instructionCode,
        isEscalated: ((d = c == null ? void 0 : c.detail) == null ? void 0 : d.isEscalated) ?? !1
      });
    },
    [a]
  );
  return Ge(me.INSTRUCTION_CHANGED, s), {
    cameraResolution: e,
    instruction: i,
    isMirroring: n
  };
}, Ts = () => {
  const [e, t] = W(q.LOADING), [n, r] = W(), o = ge(
    (i) => {
      var s, c;
      t((s = i.detail) == null ? void 0 : s.appState);
      const a = (c = i == null ? void 0 : i.detail) == null ? void 0 : c.error;
      a && r(a);
    },
    [t, r]
  );
  return Ge(me.STATE_CHANGED, o), {
    appState: e,
    error: n
  };
}, xs = H.canvas`
  transform: ${(e) => e.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, Rs = (e) => {
  const t = e.getContext("2d");
  t && t.clearRect(0, 0, t.canvas.width, t.canvas.height);
}, As = ({ cameraResolution: e, isImageMirror: t }) => {
  const n = Ze(null), r = to(), [o, i] = W(), a = ge(
    (s) => {
      var c;
      i((c = s == null ? void 0 : s.detail) == null ? void 0 : c.detectedObject);
    },
    [i]
  );
  return Ge(me.DETECTED_FACE_CHANGED, a), re(() => {
    if (!n.current)
      return;
    const s = (c, u) => {
      var g;
      if (!u)
        return;
      const { faceCenter: d, faceSize: l } = u, _ = (g = n == null ? void 0 : n.current) == null ? void 0 : g.getContext("2d");
      if (!_)
        return;
      const h = qa(l, c);
      _.beginPath(), _.arc(d.x, d.y, h, 0, 2 * Math.PI, !1), _.lineWidth = va, _.strokeStyle = r.colors.placeholderColor, _.stroke();
    };
    n.current.width = e.width, n.current.height = e.height, Rs(n.current), s(e, o);
  }, [e, o, r.colors.placeholderColor]), /* @__PURE__ */ f(xs, { ref: n, $isImageMirror: t });
}, Ps = () => {
  const { appState: e, error: t } = Ts(), { cameraResolution: n, instruction: r, isMirroring: o } = Is(), i = r.code === P.CANDIDATE_SELECTION, { instructions: a, placeholder: s, showDetectionLayer: c } = we(), u = s === M.CIRCLE_SOLID;
  if (e === q.ERROR)
    return /* @__PURE__ */ f(io, { text: t == null ? void 0 : t.message });
  if (e === q.RUNNING && n) {
    const d = Ya(n);
    return /* @__PURE__ */ f(z, { children: [
      c && /* @__PURE__ */ f(As, { cameraResolution: n, isImageMirror: o }),
      /* @__PURE__ */ f(
        Ns,
        {
          backdropHeight: n.height,
          backdropWidth: n.width,
          isBackdrop: u,
          isInCandidateSelection: i,
          placeholderRectangle: d
        }
      ),
      r.code && /* @__PURE__ */ f(
        ps,
        {
          cssBottom: (d.height + d.shiftY) * 100,
          isInCandidateSelection: i,
          isPortrait: n.width < n.height,
          children: a[r.code]
        }
      ),
      /* @__PURE__ */ f(os, { customControlEvent: me.CONTROL, isSwitchCameraDisabled: i })
    ] });
  }
  return /* @__PURE__ */ f(
    cs,
    {
      cameraHeight: n == null ? void 0 : n.height,
      cameraWidth: n == null ? void 0 : n.width,
      isBackdrop: u,
      state: e
    }
  );
}, Ls = (e) => {
  var c, u;
  const t = { ...wa, ...e == null ? void 0 : e.instructions }, n = {
    [q.LOADING]: { ...or.loading, ...(c = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : c.loading },
    [q.WAITING]: { ...or.waiting, ...(u = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : u.waiting }
  }, r = (e == null ? void 0 : e.placeholder) ?? Sa, o = (e == null ? void 0 : e.backdropColor) ?? Ea, i = (e == null ? void 0 : e.showDetectionLayer) ?? !1, a = (e == null ? void 0 : e.showCameraButtons) ?? !1, s = za(e == null ? void 0 : e.theme);
  return (r === M.WOMAN_SOLID || r === M.MAN_SOLID || r === M.ELLIPSE_SOLID) && console.warn(
    "The placeholder icon you are currently using is deprecated. Please use one of our alternative placeholders instead. Read more here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-face/latest/documentation/#ui-component"
  ), {
    instructions: t,
    appStateInstructions: n,
    placeholder: r,
    backdropColor: o,
    showDetectionLayer: i,
    showCameraButtons: a,
    theme: s
  };
}, Ds = ({ props: e }) => {
  const t = Fa(me.VIDEO_ELEMENT_SIZE);
  return /* @__PURE__ */ f(La, { uiProps: Ls(e), videoElementSize: t, children: /* @__PURE__ */ f(Ps, {}) });
};
No(Ds, "x-dot-face-auto-capture-ui", ["props"]);
