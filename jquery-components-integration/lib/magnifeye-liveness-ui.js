var Co = Object.defineProperty;
var Eo = (e, t, n) => t in e ? Co(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var tt = (e, t, n) => Eo(e, typeof t != "symbol" ? t + "" : t, n);
var qe, E, hr, ue, kn, pr, Mt, cn, Ht, Ft, mr, We = {}, gr = [], wo = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, vt = Array.isArray;
function Q(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function yr(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function M(e, t, n) {
  var r, o, i, a = {};
  for (i in t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? qe.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) a[i] === void 0 && (a[i] = e.defaultProps[i]);
  return Ue(e, a, r, o, null);
}
function Ue(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o ?? ++hr, __i: -1, __u: 0 };
  return o == null && E.vnode != null && E.vnode(i), i;
}
function So() {
  return { current: null };
}
function G(e) {
  return e.children;
}
function W(e, t) {
  this.props = e, this.context = t;
}
function he(e, t) {
  if (t == null) return e.__ ? he(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? he(e) : null;
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
function Ut(e) {
  (!e.__d && (e.__d = !0) && ue.push(e) && !ht.__r++ || kn !== E.debounceRendering) && ((kn = E.debounceRendering) || pr)(ht);
}
function ht() {
  var e, t, n, r, o, i, a, s;
  for (ue.sort(Mt); e = ue.shift(); ) e.__d && (t = ue.length, r = void 0, i = (o = (n = e).__v).__e, a = [], s = [], n.__P && ((r = Q({}, o)).__v = o.__v + 1, E.vnode && E.vnode(r), un(n.__P, r, o, n.__n, n.__P.namespaceURI, 32 & o.__u ? [i] : null, a, i ?? he(o), !!(32 & o.__u), s), r.__v = o.__v, r.__.__k[r.__i] = r, wr(a, r, s), r.__e != i && vr(r)), ue.length > t && ue.sort(Mt));
  ht.__r = 0;
}
function Cr(e, t, n, r, o, i, a, s, c, l, f) {
  var u, h, d, g, w, $ = r && r.__k || gr, p = t.length;
  for (n.__d = c, bo(n, t, $), c = n.__d, u = 0; u < p; u++) (d = n.__k[u]) != null && typeof d != "boolean" && typeof d != "function" && (h = d.__i === -1 ? We : $[d.__i] || We, d.__i = u, un(e, d, h, o, i, a, s, c, l, f), g = d.__e, d.ref && h.ref != d.ref && (h.ref && ln(h.ref, null, d), f.push(d.ref, d.__c || g, d)), w == null && g != null && (w = g), 65536 & d.__u || h.__k === d.__k ? (c && typeof d.type == "string" && !e.contains(c) && (c = he(h)), c = Er(d, c, e)) : typeof d.type == "function" && d.__d !== void 0 ? c = d.__d : g && (c = g.nextSibling), d.__d = void 0, d.__u &= -196609);
  n.__d = c, n.__e = w;
}
function bo(e, t, n) {
  var r, o, i, a, s, c = t.length, l = n.length, f = l, u = 0;
  for (e.__k = [], r = 0; r < c; r++) a = r + u, (o = e.__k[r] = (o = t[r]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? Ue(null, o, null, null, null) : vt(o) ? Ue(G, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? Ue(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = e, o.__b = e.__b + 1, s = $o(o, n, a, f), o.__i = s, i = null, s !== -1 && (f--, (i = n[s]) && (i.__u |= 131072)), i == null || i.__v === null ? (s == -1 && u--, typeof o.type != "function" && (o.__u |= 65536)) : s !== a && (s == a - 1 ? u = s - a : s == a + 1 ? u++ : s > a ? f > c - a ? u += s - a : u-- : s < a && u++, s !== r + u && (o.__u |= 65536))) : (i = n[a]) && i.key == null && i.__e && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = he(i)), Bt(i, i, !1), n[a] = null, f--);
  if (f) for (r = 0; r < l; r++) (i = n[r]) != null && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = he(i)), Bt(i, i));
}
function Er(e, t, n) {
  var r, o;
  if (typeof e.type == "function") {
    for (r = e.__k, o = 0; r && o < r.length; o++) r[o] && (r[o].__ = e, t = Er(r[o], t, n));
    return t;
  }
  e.__e != t && (n.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType === 8);
  return t;
}
function ee(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (vt(e) ? e.some(function(n) {
    ee(n, t);
  }) : t.push(e)), t;
}
function $o(e, t, n, r) {
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
function Tn(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || wo.test(t) ? n : n + "px";
}
function nt(e, t, n, r, o) {
  var i;
  e: if (t === "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || Tn(e.style, t, "");
    if (n) for (t in n) r && n[t] === r[t] || Tn(e.style, t, n[t]);
  }
  else if (t[0] === "o" && t[1] === "n") i = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")), t = t.toLowerCase() in e || t === "onFocusOut" || t === "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = cn, e.addEventListener(t, i ? Ft : Ht, i)) : e.removeEventListener(t, i ? Ft : Ht, i);
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
function xn(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t.t == null) t.t = cn++;
      else if (t.t < n.u) return;
      return n(E.event ? E.event(t) : t);
    }
  };
}
function un(e, t, n, r, o, i, a, s, c, l) {
  var f, u, h, d, g, w, $, p, m, O, S, k, C, y, F, V, U = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && (c = !!(32 & n.__u), i = [s = t.__e = n.__e]), (f = E.__b) && f(t);
  e: if (typeof U == "function") try {
    if (p = t.props, m = "prototype" in U && U.prototype.render, O = (f = U.contextType) && r[f.__c], S = f ? O ? O.props.value : f.__ : r, n.__c ? $ = (u = t.__c = n.__c).__ = u.__E : (m ? t.__c = u = new U(p, S) : (t.__c = u = new W(p, S), u.constructor = U, u.render = No), O && O.sub(u), u.props = p, u.state || (u.state = {}), u.context = S, u.__n = r, h = u.__d = !0, u.__h = [], u._sb = []), m && u.__s == null && (u.__s = u.state), m && U.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = Q({}, u.__s)), Q(u.__s, U.getDerivedStateFromProps(p, u.__s))), d = u.props, g = u.state, u.__v = t, h) m && U.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), m && u.componentDidMount != null && u.__h.push(u.componentDidMount);
    else {
      if (m && U.getDerivedStateFromProps == null && p !== d && u.componentWillReceiveProps != null && u.componentWillReceiveProps(p, S), !u.__e && (u.shouldComponentUpdate != null && u.shouldComponentUpdate(p, u.__s, S) === !1 || t.__v === n.__v)) {
        for (t.__v !== n.__v && (u.props = p, u.state = u.__s, u.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(Ce) {
          Ce && (Ce.__ = t);
        }), k = 0; k < u._sb.length; k++) u.__h.push(u._sb[k]);
        u._sb = [], u.__h.length && a.push(u);
        break e;
      }
      u.componentWillUpdate != null && u.componentWillUpdate(p, u.__s, S), m && u.componentDidUpdate != null && u.__h.push(function() {
        u.componentDidUpdate(d, g, w);
      });
    }
    if (u.context = S, u.props = p, u.__P = e, u.__e = !1, C = E.__r, y = 0, m) {
      for (u.state = u.__s, u.__d = !1, C && C(t), f = u.render(u.props, u.state, u.context), F = 0; F < u._sb.length; F++) u.__h.push(u._sb[F]);
      u._sb = [];
    } else do
      u.__d = !1, C && C(t), f = u.render(u.props, u.state, u.context), u.state = u.__s;
    while (u.__d && ++y < 25);
    u.state = u.__s, u.getChildContext != null && (r = Q(Q({}, r), u.getChildContext())), m && !h && u.getSnapshotBeforeUpdate != null && (w = u.getSnapshotBeforeUpdate(d, g)), Cr(e, vt(V = f != null && f.type === G && f.key == null ? f.props.children : f) ? V : [V], t, n, r, o, i, a, s, c, l), u.base = t.__e, t.__u &= -161, u.__h.length && a.push(u), $ && (u.__E = u.__ = null);
  } catch (Ce) {
    t.__v = null, c || i != null ? (t.__e = s, t.__u |= c ? 160 : 32, i[i.indexOf(s)] = null) : (t.__e = n.__e, t.__k = n.__k), E.__e(Ce, t, n);
  }
  else i == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Oo(n.__e, t, n, r, o, i, a, c, l);
  (f = E.diffed) && f(t);
}
function wr(e, t, n) {
  t.__d = void 0;
  for (var r = 0; r < n.length; r++) ln(n[r], n[++r], n[++r]);
  E.__c && E.__c(t, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      E.__e(i, o.__v);
    }
  });
}
function Oo(e, t, n, r, o, i, a, s, c) {
  var l, f, u, h, d, g, w, $ = n.props, p = t.props, m = t.type;
  if (m === "svg" ? o = "http://www.w3.org/2000/svg" : m === "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (l = 0; l < i.length; l++) if ((d = i[l]) && "setAttribute" in d == !!m && (m ? d.localName === m : d.nodeType === 3)) {
      e = d, i[l] = null;
      break;
    }
  }
  if (e == null) {
    if (m === null) return document.createTextNode(p);
    e = document.createElementNS(o, m, p.is && p), i = null, s = !1;
  }
  if (m === null) $ === p || s && e.data === p || (e.data = p);
  else {
    if (i = i && qe.call(e.childNodes), $ = n.props || We, !s && i != null) for ($ = {}, l = 0; l < e.attributes.length; l++) $[(d = e.attributes[l]).name] = d.value;
    for (l in $) if (d = $[l], l != "children") {
      if (l == "dangerouslySetInnerHTML") u = d;
      else if (l !== "key" && !(l in p)) {
        if (l == "value" && "defaultValue" in p || l == "checked" && "defaultChecked" in p) continue;
        nt(e, l, null, d, o);
      }
    }
    for (l in p) d = p[l], l == "children" ? h = d : l == "dangerouslySetInnerHTML" ? f = d : l == "value" ? g = d : l == "checked" ? w = d : l === "key" || s && typeof d != "function" || $[l] === d || nt(e, l, d, $[l], o);
    if (f) s || u && (f.__html === u.__html || f.__html === e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (u && (e.innerHTML = ""), Cr(e, vt(h) ? h : [h], t, n, r, m === "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, a, i ? i[0] : n.__k && he(n, 0), s, c), i != null) for (l = i.length; l--; ) i[l] != null && yr(i[l]);
    s || (l = "value", g !== void 0 && (g !== e[l] || m === "progress" && !g || m === "option" && g !== $[l]) && nt(e, l, g, $[l], o), l = "checked", w !== void 0 && w !== e[l] && nt(e, l, w, $[l], o));
  }
  return e;
}
function ln(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    E.__e(r, n);
  }
}
function Bt(e, t, n) {
  var r, o;
  if (E.unmount && E.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || ln(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (i) {
      E.__e(i, t);
    }
    r.base = r.__P = null;
  }
  if (r = e.__k) for (o = 0; o < r.length; o++) r[o] && Bt(r[o], t, n || typeof e.type != "function");
  n || e.__e == null || yr(e.__e), e.__c = e.__ = e.__e = e.__d = void 0;
}
function No(e, t, n) {
  return this.constructor(e, n);
}
function ie(e, t, n) {
  var r, o, i, a;
  E.__ && E.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], a = [], un(t, e = (!r && n || t).__k = M(G, null, [e]), o || We, We, t.namespaceURI, !r && n ? [n] : o ? null : t.firstChild ? qe.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, a), wr(i, e, a);
}
function fn(e, t) {
  ie(e, t, fn);
}
function dn(e, t, n) {
  var r, o, i, a, s = Q({}, e.props);
  for (i in e.type && e.type.defaultProps && (a = e.type.defaultProps), t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i] === void 0 && a !== void 0 ? a[i] : t[i];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? qe.call(arguments, 2) : n), Ue(e.type, s, r || e.key, o || e.ref, null);
}
function Sr(e, t) {
  var n = { __c: t = "__cC" + mr++, __: e, Consumer: function(r, o) {
    return r.children(o);
  }, Provider: function(r) {
    var o, i;
    return this.getChildContext || (o = [], (i = {})[t] = this, this.getChildContext = function() {
      return i;
    }, this.componentWillUnmount = function() {
      o = null;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && o.some(function(s) {
        s.__e = !0, Ut(s);
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
qe = gr.slice, E = { __e: function(e, t, n, r) {
  for (var o, i, a; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), a = o.__d), a) return o.__E = o;
  } catch (s) {
    e = s;
  }
  throw e;
} }, hr = 0, W.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Q({}, this.state), typeof e == "function" && (e = e(Q({}, n), this.props)), e && Q(n, e), e != null && this.__v && (t && this._sb.push(t), Ut(this));
}, W.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ut(this));
}, W.prototype.render = G, ue = [], pr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Mt = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, ht.__r = 0, cn = 0, Ht = xn(!1), Ft = xn(!0), mr = 0;
function _n() {
  return (_n = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var ko = ["context", "children"];
function To(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, n = function(r, o) {
    if (r == null) return {};
    var i, a, s = {}, c = Object.keys(r);
    for (a = 0; a < c.length; a++) o.indexOf(i = c[a]) >= 0 || (s[i] = r[i]);
    return s;
  }(e, ko);
  return dn(t, n);
}
function xo() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = M(To, _n({}, this._props, { context: e.detail.context }), function t(n, r) {
    if (n.nodeType === 3) return n.data;
    if (n.nodeType !== 1) return null;
    var o = [], i = {}, a = 0, s = n.attributes, c = n.childNodes;
    for (a = s.length; a--; ) s[a].name !== "slot" && (i[s[a].name] = s[a].value, i[br(s[a].name)] = s[a].value);
    for (a = c.length; a--; ) {
      var l = t(c[a], null), f = c[a].slot;
      f ? i[f] = M(In, { name: f }, l) : o[a] = l;
    }
    var u = r ? M(In, null, o) : o;
    return M(r || n.nodeName.toLowerCase(), i, u);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? fn : ie)(this._vdom, this._root);
}
function br(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function Io(e, t, n) {
  if (this._vdom) {
    var r = {};
    r[e] = n = n ?? void 0, r[br(e)] = n, this._vdom = dn(this._vdom, r), ie(this._vdom, this._root);
  }
}
function Ao() {
  ie(this._vdom = null, this._root);
}
function In(e, t) {
  var n = this;
  return M("slot", _n({}, e, { ref: function(r) {
    r ? (n.ref = r, n._listener || (n._listener = function(o) {
      o.stopPropagation(), o.detail.context = t;
    }, r.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function Ro(e, t, n, r) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = e, i._root = i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = xo, o.prototype.attributeChangedCallback = Io, o.prototype.disconnectedCallback = Ao, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = n, n.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom.props[i];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(i, null, a) : (this._props || (this._props = {}), this._props[i] = a, this.connectedCallback());
      var s = typeof a;
      a != null && s !== "string" && s !== "boolean" && s !== "number" || this.setAttribute(i, a);
    } });
  }), customElements.define(t, o);
}
var Po = 0;
function _(e, t, n, r, o, i) {
  t || (t = {});
  var a, s, c = t;
  if ("ref" in c) for (s in c = {}, t) s == "ref" ? a = t[s] : c[s] = t[s];
  var l = { type: e, props: c, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --Po, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (a = e.defaultProps)) for (s in a) c[s] === void 0 && (c[s] = a[s]);
  return E.vnode && E.vnode(l), l;
}
const An = {
  CONTINUE_DETECTION: "continue-detection",
  SWITCH_CAMERA: "switch-camera",
  TOGGLE_MIRROR: "toggle-mirror"
};
var Se = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", e.CONTROL = "face-auto-capture:control", e.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", e.FACE_DETECTION = "face-auto-capture:face-detection", e.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", e.STATE_CHANGED = "face-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", e))(Se || {}), hn = /* @__PURE__ */ ((e) => (e.ANIMATION_END = "magnifeye-auto-capture:animation-end", e.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", e))(hn || {});
const Rn = {
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
  LEFT_EYE_NOT_PRESENT: `left_${Rn.EYE_NOT_PRESENT}`,
  RIGHT_EYE_NOT_PRESENT: `right_${Rn.EYE_NOT_PRESENT}`,
  MOUTH_NOT_PRESENT: "mouth_not_present",
  MOUTH_SCORE_TOO_HIGH: "mouth_score_too_high",
  MOUTH_SCORE_TOO_LOW: "mouth_score_too_low"
}, Do = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  WAITING: "WAITING",
  RUNNING: "RUNNING"
}, je = {
  ...P,
  FIT_YOUR_EYE: "fit_your_eye"
};
var Ge = /* @__PURE__ */ ((e) => (e.CLOSEUP = "CLOSEUP", e.DISTANT = "DISTANT", e.MIDDLE = "MIDDLE", e))(Ge || {});
const Ve = {
  ...Do,
  DONE: "DONE"
};
var ae, x, It, Pn, be = 0, $r = [], I = E, Dn = I.__b, Ln = I.__r, Mn = I.diffed, Hn = I.__c, Fn = I.unmount, Un = I.__;
function Te(e, t) {
  I.__h && I.__h(x, e, be || t), be = 0;
  var n = x.__H || (x.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function H(e) {
  return be = 1, pn(kr, e);
}
function pn(e, t, n) {
  var r = Te(ae++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : kr(void 0, t), function(s) {
    var c = r.__N ? r.__N[0] : r.__[0], l = r.t(c, s);
    c !== l && (r.__N = [l, r.__[1]], r.__c.setState({}));
  }], r.__c = x, !x.u)) {
    var o = function(s, c, l) {
      if (!r.__c.__H) return !0;
      var f = r.__c.__H.__.filter(function(h) {
        return !!h.__c;
      });
      if (f.every(function(h) {
        return !h.__N;
      })) return !i || i.call(this, s, c, l);
      var u = !1;
      return f.forEach(function(h) {
        if (h.__N) {
          var d = h.__[0];
          h.__ = h.__N, h.__N = void 0, d !== h.__[0] && (u = !0);
        }
      }), !(!u && r.__c.props === s) && (!i || i.call(this, s, c, l));
    };
    x.u = !0;
    var i = x.shouldComponentUpdate, a = x.componentWillUpdate;
    x.componentWillUpdate = function(s, c, l) {
      if (this.__e) {
        var f = i;
        i = void 0, o(s, c, l), i = f;
      }
      a && a.call(this, s, c, l);
    }, x.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function q(e, t) {
  var n = Te(ae++, 3);
  !I.__s && mn(n.__H, t) && (n.__ = e, n.i = t, x.__H.__h.push(n));
}
function xe(e, t) {
  var n = Te(ae++, 4);
  !I.__s && mn(n.__H, t) && (n.__ = e, n.i = t, x.__h.push(n));
}
function Xe(e) {
  return be = 5, te(function() {
    return { current: e };
  }, []);
}
function Or(e, t, n) {
  be = 6, xe(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(e));
}
function te(e, t) {
  var n = Te(ae++, 7);
  return mn(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function pe(e, t) {
  return be = 8, te(function() {
    return e;
  }, t);
}
function Ke(e) {
  var t = x.context[e.__c], n = Te(ae++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(x)), t.props.value) : e.__;
}
function pt(e, t) {
  I.useDebugValue && I.useDebugValue(t ? t(e) : e);
}
function Nr() {
  var e = Te(ae++, 11);
  if (!e.__) {
    for (var t = x.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function Lo() {
  for (var e; e = $r.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(st), e.__H.__h.forEach(zt), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], I.__e(t, e.__v);
  }
}
I.__b = function(e) {
  x = null, Dn && Dn(e);
}, I.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Un && Un(e, t);
}, I.__r = function(e) {
  Ln && Ln(e), ae = 0;
  var t = (x = e.__c).__H;
  t && (It === x ? (t.__h = [], x.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.i = n.__N = void 0;
  })) : (t.__h.forEach(st), t.__h.forEach(zt), t.__h = [], ae = 0)), It = x;
}, I.diffed = function(e) {
  Mn && Mn(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && ($r.push(t) !== 1 && Pn === I.requestAnimationFrame || ((Pn = I.requestAnimationFrame) || Mo)(Lo)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.i = void 0;
  })), It = x = null;
}, I.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(st), n.__h = n.__h.filter(function(r) {
        return !r.__ || zt(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], I.__e(r, n.__v);
    }
  }), Hn && Hn(e, t);
}, I.unmount = function(e) {
  Fn && Fn(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      st(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && I.__e(t, n.__v));
};
var Bn = typeof requestAnimationFrame == "function";
function Mo(e) {
  var t, n = function() {
    clearTimeout(r), Bn && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  Bn && (t = requestAnimationFrame(n));
}
function st(e) {
  var t = x, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), x = t;
}
function zt(e) {
  var t = x;
  e.__c = e.__(), x = t;
}
function mn(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function kr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
var D = function() {
  return D = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, D.apply(this, arguments);
};
function me(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function Ho(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Fo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Uo = /* @__PURE__ */ Ho(
  function(e) {
    return Fo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Tr(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Wt(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function jt(e, t) {
  this.props = e, this.context = t;
}
function Bo(e, t) {
  function n(o) {
    var i = this.props.ref, a = i == o.ref;
    return !a && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !a : Wt(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, M(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(jt.prototype = new W()).isPureReactComponent = !0, jt.prototype.shouldComponentUpdate = function(e, t) {
  return Wt(this.props, e) || Wt(this.state, t);
};
var zn = E.__b;
E.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), zn && zn(e);
};
var zo = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function Wo(e) {
  function t(n) {
    var r = Tr({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = zo, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Wn = function(e, t) {
  return e == null ? null : ee(ee(e).map(t));
}, jo = { map: Wn, forEach: Wn, count: function(e) {
  return e ? ee(e).length : 0;
}, only: function(e) {
  var t = ee(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: ee }, Go = E.__e;
E.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  Go(e, t, n, r);
};
var jn = E.unmount;
function xr(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = Tr({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return xr(r, t, n);
  })), e;
}
function Ir(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return Ir(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function ct() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Ar(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Vo(e) {
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
function Me() {
  this.u = null, this.o = null;
}
E.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), jn && jn(e);
}, (ct.prototype = new W()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var o = Ar(r.__v), i = !1, a = function() {
    i || (i = !0, n.__R = null, o ? o(s) : s());
  };
  n.__R = a;
  var s = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var c = r.state.__a;
        r.__v.__k[0] = Ir(c, c.__c.__P, c.__c.__O);
      }
      var l;
      for (r.setState({ __a: r.__b = null }); l = r.t.pop(); ) l.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(a, a);
}, ct.prototype.componentWillUnmount = function() {
  this.t = [];
}, ct.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = xr(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && M(G, null, e.fallback);
  return o && (o.__u &= -33), [M(G, null, t.__a ? null : e.children), o];
};
var Gn = function(e, t, n) {
  if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size)) for (n = e.u; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    e.u = n = n[2];
  }
};
function Yo(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function Zo(e) {
  var t = this, n = e.i;
  t.componentWillUnmount = function() {
    ie(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== n && t.componentWillUnmount(), t.l || (t.i = n, t.l = { nodeType: 1, parentNode: n, childNodes: [], contains: function() {
    return !0;
  }, appendChild: function(r) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r);
  } }), ie(M(Yo, { context: t.context }, e.__v), t.l);
}
function qo(e, t) {
  var n = M(Zo, { __v: e, i: t });
  return n.containerInfo = t, n;
}
(Me.prototype = new W()).__a = function(e) {
  var t = this, n = Ar(t.__v), r = t.o.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), Gn(t, e, r)) : o();
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
    Gn(e, n, t);
  });
};
var Rr = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Xo = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Ko = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Jo = /[A-Z0-9]/g, Qo = typeof document < "u", ei = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function ti(e, t, n) {
  return t.__k == null && (t.textContent = ""), ie(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function ni(e, t, n) {
  return fn(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
W.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(W.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Vn = E.event;
function ri() {
}
function oi() {
  return this.cancelBubble;
}
function ii() {
  return this.defaultPrevented;
}
E.event = function(e) {
  return Vn && (e = Vn(e)), e.persist = ri, e.isPropagationStopped = oi, e.isDefaultPrevented = ii, e.nativeEvent = e;
};
var gn, ai = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Yn = E.vnode;
E.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {};
    for (var i in n) {
      var a = n[i];
      if (!(i === "value" && "defaultValue" in n && a == null || Qo && i === "children" && r === "noscript" || i === "class" || i === "className")) {
        var s = i.toLowerCase();
        i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && a === !0 ? a = "" : s === "translate" && a === "no" ? a = !1 : s === "ondoubleclick" ? i = "ondblclick" : s !== "onchange" || r !== "input" && r !== "textarea" || ei(n.type) ? s === "onfocus" ? i = "onfocusin" : s === "onblur" ? i = "onfocusout" : Ko.test(i) ? i = s : r.indexOf("-") === -1 && Xo.test(i) ? i = i.replace(Jo, "-$&").toLowerCase() : a === null && (a = void 0) : s = i = "oninput", s === "oninput" && o[i = s] && (i = "oninputCapture"), o[i] = a;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = ee(n.children).forEach(function(c) {
      c.props.selected = o.value.indexOf(c.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = ee(n.children).forEach(function(c) {
      c.props.selected = o.multiple ? o.defaultValue.indexOf(c.props.value) != -1 : o.defaultValue == c.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", ai)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = Rr, Yn && Yn(e);
};
var Zn = E.__r;
E.__r = function(e) {
  Zn && Zn(e), gn = e.__c;
};
var qn = E.diffed;
E.diffed = function(e) {
  qn && qn(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), gn = null;
};
var si = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return gn.__n[e.__c].props.value;
}, useCallback: pe, useContext: Ke, useDebugValue: pt, useDeferredValue: Dr, useEffect: q, useId: Nr, useImperativeHandle: Or, useInsertionEffect: Mr, useLayoutEffect: xe, useMemo: te, useReducer: pn, useRef: Xe, useState: H, useSyncExternalStore: Hr, useTransition: Lr } } };
function ci(e) {
  return M.bind(null, e);
}
function Ct(e) {
  return !!e && e.$$typeof === Rr;
}
function ui(e) {
  return Ct(e) && e.type === G;
}
function li(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function fi(e) {
  return Ct(e) ? dn.apply(null, arguments) : e;
}
function di(e) {
  return !!e.__k && (ie(null, e), !0);
}
function _i(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var hi = function(e, t) {
  return e(t);
}, pi = function(e, t) {
  return e(t);
}, mi = G;
function Pr(e) {
  e();
}
function Dr(e) {
  return e;
}
function Lr() {
  return [!1, Pr];
}
var Mr = xe, gi = Ct;
function Hr(e, t) {
  var n = t(), r = H({ h: { __: n, v: t } }), o = r[0].h, i = r[1];
  return xe(function() {
    o.__ = n, o.v = t, At(o) && i({ h: o });
  }, [e, n, t]), q(function() {
    return At(o) && i({ h: o }), e(function() {
      At(o) && i({ h: o });
    });
  }, [e]), n;
}
function At(e) {
  var t, n, r = e.v, o = e.__;
  try {
    var i = r();
    return !((t = o) === (n = i) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
}
var ne = { useState: H, useId: Nr, useReducer: pn, useEffect: q, useLayoutEffect: xe, useInsertionEffect: Mr, useTransition: Lr, useDeferredValue: Dr, useSyncExternalStore: Hr, startTransition: Pr, useRef: Xe, useImperativeHandle: Or, useMemo: te, useCallback: pe, useContext: Ke, useDebugValue: pt, version: "17.0.2", Children: jo, render: ti, hydrate: ni, unmountComponentAtNode: di, createPortal: qo, createElement: M, createContext: Sr, createFactory: ci, cloneElement: fi, createRef: So, Fragment: G, isValidElement: Ct, isElement: gi, isFragment: ui, isMemo: li, findDOMNode: _i, Component: W, PureComponent: jt, memo: Bo, forwardRef: Wo, flushSync: pi, unstable_batchedUpdates: hi, StrictMode: mi, Suspense: ct, SuspenseList: Me, lazy: Vo, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: si };
function yi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vi = function(t, n, r, o) {
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
  for (var c = Object.prototype.hasOwnProperty.bind(n), l = 0; l < a.length; l++) {
    var f = a[l];
    if (!c(f))
      return !1;
    var u = t[f], h = n[f];
    if (i = r ? r.call(o, u, h, f) : void 0, i === !1 || i === void 0 && u !== h)
      return !1;
  }
  return !0;
};
const Ci = /* @__PURE__ */ yi(vi);
var T = "-ms-", Be = "-moz-", N = "-webkit-", Fr = "comm", Et = "rule", yn = "decl", Ei = "@import", Ur = "@keyframes", wi = "@layer", Br = Math.abs, vn = String.fromCharCode, Gt = Object.assign;
function Si(e, t) {
  return R(e, 0) ^ 45 ? (((t << 2 ^ R(e, 0)) << 2 ^ R(e, 1)) << 2 ^ R(e, 2)) << 2 ^ R(e, 3) : 0;
}
function zr(e) {
  return e.trim();
}
function K(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function v(e, t, n) {
  return e.replace(t, n);
}
function ut(e, t, n) {
  return e.indexOf(t, n);
}
function R(e, t) {
  return e.charCodeAt(t) | 0;
}
function $e(e, t, n) {
  return e.slice(t, n);
}
function Y(e) {
  return e.length;
}
function Wr(e) {
  return e.length;
}
function He(e, t) {
  return t.push(e), e;
}
function bi(e, t) {
  return e.map(t).join("");
}
function Xn(e, t) {
  return e.filter(function(n) {
    return !K(n, t);
  });
}
var wt = 1, Oe = 1, jr = 0, z = 0, A = 0, Ie = "";
function St(e, t, n, r, o, i, a, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: wt, column: Oe, length: a, return: "", siblings: s };
}
function oe(e, t) {
  return Gt(St("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function we(e) {
  for (; e.root; )
    e = oe(e.root, { children: [e] });
  He(e, e.siblings);
}
function $i() {
  return A;
}
function Oi() {
  return A = z > 0 ? R(Ie, --z) : 0, Oe--, A === 10 && (Oe = 1, wt--), A;
}
function j() {
  return A = z < jr ? R(Ie, z++) : 0, Oe++, A === 10 && (Oe = 1, wt++), A;
}
function de() {
  return R(Ie, z);
}
function lt() {
  return z;
}
function bt(e, t) {
  return $e(Ie, e, t);
}
function Vt(e) {
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
function Ni(e) {
  return wt = Oe = 1, jr = Y(Ie = e), z = 0, [];
}
function ki(e) {
  return Ie = "", e;
}
function Rt(e) {
  return zr(bt(z - 1, Yt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ti(e) {
  for (; (A = de()) && A < 33; )
    j();
  return Vt(e) > 2 || Vt(A) > 3 ? "" : " ";
}
function xi(e, t) {
  for (; --t && j() && !(A < 48 || A > 102 || A > 57 && A < 65 || A > 70 && A < 97); )
    ;
  return bt(e, lt() + (t < 6 && de() == 32 && j() == 32));
}
function Yt(e) {
  for (; j(); )
    switch (A) {
      case e:
        return z;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Yt(A);
        break;
      case 40:
        e === 41 && Yt(e);
        break;
      case 92:
        j();
        break;
    }
  return z;
}
function Ii(e, t) {
  for (; j() && e + A !== 57; )
    if (e + A === 84 && de() === 47)
      break;
  return "/*" + bt(t, z - 1) + "*" + vn(e === 47 ? e : j());
}
function Ai(e) {
  for (; !Vt(de()); )
    j();
  return bt(e, z);
}
function Ri(e) {
  return ki(ft("", null, null, null, [""], e = Ni(e), 0, [0], e));
}
function ft(e, t, n, r, o, i, a, s, c) {
  for (var l = 0, f = 0, u = a, h = 0, d = 0, g = 0, w = 1, $ = 1, p = 1, m = 0, O = "", S = o, k = i, C = r, y = O; $; )
    switch (g = m, m = j()) {
      case 40:
        if (g != 108 && R(y, u - 1) == 58) {
          ut(y += v(Rt(m), "&", "&\f"), "&\f", Br(l ? s[l - 1] : 0)) != -1 && (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        y += Rt(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        y += Ti(g);
        break;
      case 92:
        y += xi(lt() - 1, 7);
        continue;
      case 47:
        switch (de()) {
          case 42:
          case 47:
            He(Pi(Ii(j(), lt()), t, n, c), c);
            break;
          default:
            y += "/";
        }
        break;
      case 123 * w:
        s[l++] = Y(y) * p;
      case 125 * w:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            $ = 0;
          case 59 + f:
            p == -1 && (y = v(y, /\f/g, "")), d > 0 && Y(y) - u && He(d > 32 ? Jn(y + ";", r, n, u - 1, c) : Jn(v(y, " ", "") + ";", r, n, u - 2, c), c);
            break;
          case 59:
            y += ";";
          default:
            if (He(C = Kn(y, t, n, l, f, o, s, O, S = [], k = [], u, i), i), m === 123)
              if (f === 0)
                ft(y, t, C, C, S, i, u, s, k);
              else
                switch (h === 99 && R(y, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ft(e, C, C, r && He(Kn(e, C, C, 0, 0, o, s, O, o, S = [], u, k), k), o, k, u, s, r ? S : k);
                    break;
                  default:
                    ft(y, C, C, C, [""], k, 0, s, k);
                }
        }
        l = f = d = 0, w = p = 1, O = y = "", u = a;
        break;
      case 58:
        u = 1 + Y(y), d = g;
      default:
        if (w < 1) {
          if (m == 123)
            --w;
          else if (m == 125 && w++ == 0 && Oi() == 125)
            continue;
        }
        switch (y += vn(m), m * w) {
          case 38:
            p = f > 0 ? 1 : (y += "\f", -1);
            break;
          case 44:
            s[l++] = (Y(y) - 1) * p, p = 1;
            break;
          case 64:
            de() === 45 && (y += Rt(j())), h = de(), f = u = Y(O = y += Ai(lt())), m++;
            break;
          case 45:
            g === 45 && Y(y) == 2 && (w = 0);
        }
    }
  return i;
}
function Kn(e, t, n, r, o, i, a, s, c, l, f, u) {
  for (var h = o - 1, d = o === 0 ? i : [""], g = Wr(d), w = 0, $ = 0, p = 0; w < r; ++w)
    for (var m = 0, O = $e(e, h + 1, h = Br($ = a[w])), S = e; m < g; ++m)
      (S = zr($ > 0 ? d[m] + " " + O : v(O, /&\f/g, d[m]))) && (c[p++] = S);
  return St(e, t, n, o === 0 ? Et : s, c, l, f, u);
}
function Pi(e, t, n, r) {
  return St(e, t, n, Fr, vn($i()), $e(e, 2, -2), 0, r);
}
function Jn(e, t, n, r, o) {
  return St(e, t, n, yn, $e(e, 0, r), $e(e, r + 1, -1), r, o);
}
function Gr(e, t, n) {
  switch (Si(e, t)) {
    case 5103:
      return N + "print-" + e + e;
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
      return N + e + e;
    case 4789:
      return Be + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return N + e + Be + e + T + e + e;
    case 5936:
      switch (R(e, t + 11)) {
        case 114:
          return N + e + T + v(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return N + e + T + v(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return N + e + T + v(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return N + e + T + e + e;
    case 6165:
      return N + e + T + "flex-" + e + e;
    case 5187:
      return N + e + v(e, /(\w+).+(:[^]+)/, N + "box-$1$2" + T + "flex-$1$2") + e;
    case 5443:
      return N + e + T + "flex-item-" + v(e, /flex-|-self/g, "") + (K(e, /flex-|baseline/) ? "" : T + "grid-row-" + v(e, /flex-|-self/g, "")) + e;
    case 4675:
      return N + e + T + "flex-line-pack" + v(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return N + e + T + v(e, "shrink", "negative") + e;
    case 5292:
      return N + e + T + v(e, "basis", "preferred-size") + e;
    case 6060:
      return N + "box-" + v(e, "-grow", "") + N + e + T + v(e, "grow", "positive") + e;
    case 4554:
      return N + v(e, /([^-])(transform)/g, "$1" + N + "$2") + e;
    case 6187:
      return v(v(v(e, /(zoom-|grab)/, N + "$1"), /(image-set)/, N + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return v(e, /(image-set\([^]*)/, N + "$1$`$1");
    case 4968:
      return v(v(e, /(.+:)(flex-)?(.*)/, N + "box-pack:$3" + T + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + N + e + e;
    case 4200:
      if (!K(e, /flex-|baseline/)) return T + "grid-column-align" + $e(e, t) + e;
      break;
    case 2592:
    case 3360:
      return T + v(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, K(r.props, /grid-\w+-end/);
      }) ? ~ut(e + (n = n[t].value), "span", 0) ? e : T + v(e, "-start", "") + e + T + "grid-row-span:" + (~ut(n, "span", 0) ? K(n, /\d+/) : +K(n, /\d+/) - +K(e, /\d+/)) + ";" : T + v(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return K(r.props, /grid-\w+-start/);
      }) ? e : T + v(v(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return v(e, /(.+)-inline(.+)/, N + "$1$2") + e;
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
          case 109:
            if (R(e, t + 4) !== 45)
              break;
          case 102:
            return v(e, /(.+:)(.+)-([^]+)/, "$1" + N + "$2-$3$1" + Be + (R(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~ut(e, "stretch", 0) ? Gr(v(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return v(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, a, s, c, l) {
        return T + o + ":" + i + l + (a ? T + o + "-span:" + (s ? c : +c - +i) + l : "") + e;
      });
    case 4949:
      if (R(e, t + 6) === 121)
        return v(e, ":", ":" + N) + e;
      break;
    case 6444:
      switch (R(e, R(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return v(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + N + (R(e, 14) === 45 ? "inline-" : "") + "box$3$1" + N + "$2$3$1" + T + "$2box$3") + e;
        case 100:
          return v(e, ":", ":" + T) + e;
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
function mt(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Di(e, t, n, r) {
  switch (e.type) {
    case wi:
      if (e.children.length) break;
    case Ei:
    case yn:
      return e.return = e.return || e.value;
    case Fr:
      return "";
    case Ur:
      return e.return = e.value + "{" + mt(e.children, r) + "}";
    case Et:
      if (!Y(e.value = e.props.join(","))) return "";
  }
  return Y(n = mt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Li(e) {
  var t = Wr(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
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
      case yn:
        e.return = Gr(e.value, e.length, n);
        return;
      case Ur:
        return mt([oe(e, { value: v(e.value, "@", "@" + N) })], r);
      case Et:
        if (e.length)
          return bi(n = e.props, function(o) {
            switch (K(o, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                we(oe(e, { props: [v(o, /:(read-\w+)/, ":" + Be + "$1")] })), we(oe(e, { props: [o] })), Gt(e, { props: Xn(n, r) });
                break;
              case "::placeholder":
                we(oe(e, { props: [v(o, /:(plac\w+)/, ":" + N + "input-$1")] })), we(oe(e, { props: [v(o, /:(plac\w+)/, ":" + Be + "$1")] })), we(oe(e, { props: [v(o, /:(plac\w+)/, T + "input-$1")] })), we(oe(e, { props: [o] })), Gt(e, { props: Xn(n, r) });
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
}, b = {}, ge = typeof process < "u" && b !== void 0 && (b.REACT_APP_SC_ATTR || b.SC_ATTR) || "data-styled", Vr = "active", Yr = "data-styled-version", $t = "6.1.11", Cn = `/*!sc*/
`, En = typeof window < "u" && "HTMLElement" in window, Ui = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && b !== void 0 && b.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && b.REACT_APP_SC_DISABLE_SPEEDY !== "" ? b.REACT_APP_SC_DISABLE_SPEEDY !== "false" && b.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && b !== void 0 && b.SC_DISABLE_SPEEDY !== void 0 && b.SC_DISABLE_SPEEDY !== "" ? b.SC_DISABLE_SPEEDY !== "false" && b.SC_DISABLE_SPEEDY : b.NODE_ENV !== "production"), Qn = /invalid hook call/i, rt = /* @__PURE__ */ new Set(), Bi = function(e, t) {
  if (b.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(a) {
        for (var s = [], c = 1; c < arguments.length; c++) s[c - 1] = arguments[c];
        Qn.test(a) ? (i = !1, rt.delete(r)) : o.apply(void 0, me([a], s, !1));
      }, Xe(), i && !rt.has(r) && (console.warn(r), rt.add(r));
    } catch (a) {
      Qn.test(a.message) && rt.delete(r);
    } finally {
      console.error = o;
    }
  }
}, Ot = Object.freeze([]), Ne = Object.freeze({});
function zi(e, t, n) {
  return n === void 0 && (n = Ne), e.theme !== n.theme && e.theme || t || n.theme;
}
var Zt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Wi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ji = /(^-|-$)/g;
function er(e) {
  return e.replace(Wi, "-").replace(ji, "");
}
var Gi = /(a)(d)/gi, ot = 52, tr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function qt(e) {
  var t, n = "";
  for (t = Math.abs(e); t > ot; t = t / ot | 0) n = tr(t % ot) + n;
  return (tr(t % ot) + n).replace(Gi, "$1-$2");
}
var Pt, Zr = 5381, le = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, qr = function(e) {
  return le(Zr, e);
};
function Xr(e) {
  return qt(qr(e) >>> 0);
}
function Kr(e) {
  return b.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Dt(e) {
  return typeof e == "string" && (b.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Jr = typeof Symbol == "function" && Symbol.for, Qr = Jr ? Symbol.for("react.memo") : 60115, Vi = Jr ? Symbol.for("react.forward_ref") : 60112, Yi = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Zi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, eo = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, qi = ((Pt = {})[Vi] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Pt[Qr] = eo, Pt);
function nr(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Qr ? eo : "$$typeof" in e ? qi[e.$$typeof] : Yi;
  var t;
}
var Xi = Object.defineProperty, Ki = Object.getOwnPropertyNames, rr = Object.getOwnPropertySymbols, Ji = Object.getOwnPropertyDescriptor, Qi = Object.getPrototypeOf, or = Object.prototype;
function to(e, t, n) {
  if (typeof t != "string") {
    if (or) {
      var r = Qi(t);
      r && r !== or && to(e, r, n);
    }
    var o = Ki(t);
    rr && (o = o.concat(rr(t)));
    for (var i = nr(e), a = nr(t), s = 0; s < o.length; ++s) {
      var c = o[s];
      if (!(c in Zi || n && n[c] || a && c in a || i && c in i)) {
        var l = Ji(t, c);
        try {
          Xi(e, c, l);
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
function wn(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function fe(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Xt(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function ke(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Kt(e, t, n) {
  if (n === void 0 && (n = !1), !n && !ke(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = Kt(e[r], t[r]);
  else if (ke(t)) for (var r in t) e[r] = Kt(e[r], t[r]);
  return e;
}
function Sn(e, t) {
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
function Z(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return b.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(ta.apply(void 0, me([ea[e]], t, !1)).trim());
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
      for (var r = this.groupSizes, o = r.length, i = o; t >= i; ) if ((i <<= 1) < 0) throw Z(16, "".concat(t));
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
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, a = o; a < i; a++) n += "".concat(this.tag.getRule(a)).concat(Cn);
    return n;
  }, e;
}(), ra = 1 << 30, dt = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map(), _t = 1, it = function(e) {
  if (dt.has(e)) return dt.get(e);
  for (; gt.has(_t); ) _t++;
  var t = _t++;
  if (b.NODE_ENV !== "production" && ((0 | t) < 0 || t > ra)) throw Z(16, "".concat(t));
  return dt.set(e, t), gt.set(t, e), t;
}, oa = function(e, t) {
  _t = t + 1, dt.set(e, t), gt.set(t, e);
}, ia = "style[".concat(ge, "][").concat(Yr, '="').concat($t, '"]'), aa = new RegExp("^".concat(ge, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), sa = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++) (r = o[i]) && e.registerName(t, r);
}, ca = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(Cn), o = [], i = 0, a = r.length; i < a; i++) {
    var s = r[i].trim();
    if (s) {
      var c = s.match(aa);
      if (c) {
        var l = 0 | parseInt(c[1], 10), f = c[2];
        l !== 0 && (oa(f, l), sa(e, f, c[3]), e.getTag().insertRules(l, o)), o.length = 0;
      } else o.push(s);
    }
  }
};
function ua() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var no = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(s) {
    var c = Array.from(s.querySelectorAll("style[".concat(ge, "]")));
    return c[c.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ge, Vr), r.setAttribute(Yr, $t);
  var a = ua();
  return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
}, la = function() {
  function e(t) {
    this.element = no(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet) return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var a = r[o];
        if (a.ownerNode === n) return a;
      }
      throw Z(17);
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
    this.element = no(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), ir = En, _a = { isServer: !En, useCSSOMInjection: !Ui }, ro = function() {
  function e(t, n, r) {
    t === void 0 && (t = Ne), n === void 0 && (n = {});
    var o = this;
    this.options = D(D({}, _a), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && En && ir && (ir = !1, function(i) {
      for (var a = document.querySelectorAll(ia), s = 0, c = a.length; s < c; s++) {
        var l = a[s];
        l && l.getAttribute(ge) !== Vr && (ca(i, l), l.parentNode && l.parentNode.removeChild(l));
      }
    }(this)), Sn(this, function() {
      return function(i) {
        for (var a = i.getTag(), s = a.length, c = "", l = function(u) {
          var h = function(p) {
            return gt.get(p);
          }(u);
          if (h === void 0) return "continue";
          var d = i.names.get(h), g = a.getGroup(u);
          if (d === void 0 || g.length === 0) return "continue";
          var w = "".concat(ge, ".g").concat(u, '[id="').concat(h, '"]'), $ = "";
          d !== void 0 && d.forEach(function(p) {
            p.length > 0 && ($ += "".concat(p, ","));
          }), c += "".concat(g).concat(w, '{content:"').concat($, '"}').concat(Cn);
        }, f = 0; f < s; f++) l(f);
        return c;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return it(t);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(D(D({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new da(o) : r ? new la(o) : new fa(o);
    }(this.options), new na(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (it(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(it(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(it(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), ha = /&/g, pa = /^\s*\/\/.*$/gm;
function oo(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = oo(n.children, t)), n;
  });
}
function io(e) {
  var t, n, r, o = e === void 0 ? Ne : e, i = o.options, a = i === void 0 ? Ne : i, s = o.plugins, c = s === void 0 ? Ot : s, l = function(h, d, g) {
    return g.startsWith(n) && g.endsWith(n) && g.replaceAll(n, "").length > 0 ? ".".concat(t) : h;
  }, f = c.slice();
  f.push(function(h) {
    h.type === Et && h.value.includes("&") && (h.props[0] = h.props[0].replace(ha, n).replace(r, l));
  }), a.prefix && f.push(Hi), f.push(Di);
  var u = function(h, d, g, w) {
    d === void 0 && (d = ""), g === void 0 && (g = ""), w === void 0 && (w = "&"), t = w, n = d, r = new RegExp("\\".concat(n, "\\b"), "g");
    var $ = h.replace(pa, ""), p = Ri(g || d ? "".concat(g, " ").concat(d, " { ").concat($, " }") : $);
    a.namespace && (p = oo(p, a.namespace));
    var m = [];
    return mt(p, Li(f.concat(Mi(function(O) {
      return m.push(O);
    })))), m;
  };
  return u.hash = c.length ? c.reduce(function(h, d) {
    return d.name || Z(15), le(h, d.name);
  }, Zr).toString() : "", u;
}
var ma = new ro(), Jt = io(), bn = ne.createContext({ shouldForwardProp: void 0, styleSheet: ma, stylis: Jt });
bn.Consumer;
var ga = ne.createContext(void 0);
function Qt() {
  return Ke(bn);
}
function ya(e) {
  var t = H(e.stylisPlugins), n = t[0], r = t[1], o = Qt().styleSheet, i = te(function() {
    var c = o;
    return e.sheet ? c = e.sheet : e.target && (c = c.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (c = c.reconstructWithOptions({ useCSSOMInjection: !1 })), c;
  }, [e.disableCSSOMInjection, e.sheet, e.target, o]), a = te(function() {
    return io({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: n });
  }, [e.enableVendorPrefixes, e.namespace, n]);
  q(function() {
    Ci(n, e.stylisPlugins) || r(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var s = te(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: a };
  }, [e.shouldForwardProp, i, a]);
  return ne.createElement(bn.Provider, { value: s }, ne.createElement(ga.Provider, { value: a }, e.children));
}
var en = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Jt);
      var a = r.name + i.hash;
      o.hasNameForId(r.id, a) || o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, Sn(this, function() {
      throw Z(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Jt), this.name + t.hash;
  }, e;
}(), va = function(e) {
  return e >= "A" && e <= "Z";
};
function ar(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    va(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var ao = function(e) {
  return e == null || e === !1 || e === "";
}, so = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !ao(i) && (Array.isArray(i) && i.isCss || ye(i) ? r.push("".concat(ar(o), ":"), i, ";") : ke(i) ? r.push.apply(r, me(me(["".concat(o, " {")], so(i), !1), ["}"], !1)) : r.push("".concat(ar(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in Fi || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function _e(e, t, n, r) {
  if (ao(e)) return [];
  if (wn(e)) return [".".concat(e.styledComponentId)];
  if (ye(e)) {
    if (!ye(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return b.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof en || ke(o) || o === null || console.error("".concat(Kr(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), _e(o, t, n, r);
  }
  var i;
  return e instanceof en ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : ke(e) ? so(e) : Array.isArray(e) ? Array.prototype.concat.apply(Ot, e.map(function(a) {
    return _e(a, t, n, r);
  })) : [e.toString()];
}
function Ca(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (ye(n) && !wn(n)) return !1;
  }
  return !0;
}
var Ea = qr($t), wa = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = b.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Ca(t), this.componentId = n, this.baseHash = le(Ea, n), this.baseStyle = r, ro.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = fe(o, this.staticRulesId);
    else {
      var i = Xt(_e(this.rules, t, n, r)), a = qt(le(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, a)) {
        var s = r(i, ".".concat(a), void 0, this.componentId);
        n.insertRules(this.componentId, a, s);
      }
      o = fe(o, a), this.staticRulesId = a;
    }
    else {
      for (var c = le(this.baseHash, r.hash), l = "", f = 0; f < this.rules.length; f++) {
        var u = this.rules[f];
        if (typeof u == "string") l += u, b.NODE_ENV !== "production" && (c = le(c, u));
        else if (u) {
          var h = Xt(_e(u, t, n, r));
          c = le(c, h + f), l += h;
        }
      }
      if (l) {
        var d = qt(c >>> 0);
        n.hasNameForId(this.componentId, d) || n.insertRules(this.componentId, d, r(l, ".".concat(d), void 0, this.componentId)), o = fe(o, d);
      }
    }
    return o;
  }, e;
}(), Ye = ne.createContext(void 0);
Ye.Consumer;
function co() {
  var e = Ke(Ye);
  if (!e) throw Z(18);
  return e;
}
function Sa(e) {
  var t = ne.useContext(Ye), n = te(function() {
    return function(r, o) {
      if (!r) throw Z(14);
      if (ye(r)) {
        var i = r(o);
        if (b.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object")) throw Z(7);
        return i;
      }
      if (Array.isArray(r) || typeof r != "object") throw Z(8);
      return o ? D(D({}, o), r) : r;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? ne.createElement(Ye.Provider, { value: n }, e.children) : null;
}
var Lt = {}, sr = /* @__PURE__ */ new Set();
function ba(e, t, n) {
  var r = wn(e), o = e, i = !Dt(e), a = t.attrs, s = a === void 0 ? Ot : a, c = t.componentId, l = c === void 0 ? function(S, k) {
    var C = typeof S != "string" ? "sc" : er(S);
    Lt[C] = (Lt[C] || 0) + 1;
    var y = "".concat(C, "-").concat(Xr($t + C + Lt[C]));
    return k ? "".concat(k, "-").concat(y) : y;
  }(t.displayName, t.parentComponentId) : c, f = t.displayName, u = f === void 0 ? function(S) {
    return Dt(S) ? "styled.".concat(S) : "Styled(".concat(Kr(S), ")");
  }(e) : f, h = t.displayName && t.componentId ? "".concat(er(t.displayName), "-").concat(t.componentId) : t.componentId || l, d = r && o.attrs ? o.attrs.concat(s).filter(Boolean) : s, g = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var w = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var $ = t.shouldForwardProp;
      g = function(S, k) {
        return w(S, k) && $(S, k);
      };
    } else g = w;
  }
  var p = new wa(n, h, r ? o.componentStyle : void 0);
  function m(S, k) {
    return function(C, y, F) {
      var V = C.attrs, U = C.componentStyle, Ce = C.defaultProps, mo = C.foldedComponentIds, On = C.styledComponentId, go = C.target, yo = ne.useContext(Ye), vo = Qt(), Nt = C.shouldForwardProp || vo.shouldForwardProp;
      b.NODE_ENV !== "production" && pt(On);
      var Nn = zi(y, yo, Ce) || Ne, X = function(Je, De, Qe) {
        for (var Ee, ce = D(D({}, De), { className: void 0, theme: Qe }), xt = 0; xt < Je.length; xt += 1) {
          var et = ye(Ee = Je[xt]) ? Ee(ce) : Ee;
          for (var re in et) ce[re] = re === "className" ? fe(ce[re], et[re]) : re === "style" ? D(D({}, ce[re]), et[re]) : et[re];
        }
        return De.className && (ce.className = fe(ce.className, De.className)), ce;
      }(V, y, Nn), Re = X.as || go, Pe = {};
      for (var B in X) X[B] === void 0 || B[0] === "$" || B === "as" || B === "theme" && X.theme === Nn || (B === "forwardedAs" ? Pe.as = X.forwardedAs : Nt && !Nt(B, Re) || (Pe[B] = X[B], Nt || b.NODE_ENV !== "development" || Uo(B) || sr.has(B) || !Zt.has(Re) || (sr.add(B), console.warn('styled-components: it looks like an unknown prop "'.concat(B, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var kt = function(Je, De) {
        var Qe = Qt(), Ee = Je.generateAndInjectStyles(De, Qe.styleSheet, Qe.stylis);
        return b.NODE_ENV !== "production" && pt(Ee), Ee;
      }(U, X);
      b.NODE_ENV !== "production" && C.warnTooManyClasses && C.warnTooManyClasses(kt);
      var Tt = fe(mo, On);
      return kt && (Tt += " " + kt), X.className && (Tt += " " + X.className), Pe[Dt(Re) && !Zt.has(Re) ? "class" : "className"] = Tt, Pe.ref = F, M(Re, Pe);
    }(O, S, k);
  }
  m.displayName = u;
  var O = ne.forwardRef(m);
  return O.attrs = d, O.componentStyle = p, O.displayName = u, O.shouldForwardProp = g, O.foldedComponentIds = r ? fe(o.foldedComponentIds, o.styledComponentId) : "", O.styledComponentId = h, O.target = r ? o.target : e, Object.defineProperty(O, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(S) {
    this._foldedDefaultProps = r ? function(k) {
      for (var C = [], y = 1; y < arguments.length; y++) C[y - 1] = arguments[y];
      for (var F = 0, V = C; F < V.length; F++) Kt(k, V[F], !0);
      return k;
    }({}, o.defaultProps, S) : S;
  } }), b.NODE_ENV !== "production" && (Bi(u, h), O.warnTooManyClasses = /* @__PURE__ */ function(S, k) {
    var C = {}, y = !1;
    return function(F) {
      if (!y && (C[F] = !0, Object.keys(C).length >= 200)) {
        var V = k ? ' with the id of "'.concat(k, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(S).concat(V, `.
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
  }(u, h)), Sn(O, function() {
    return ".".concat(O.styledComponentId);
  }), i && to(O, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), O;
}
function cr(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var ur = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function se(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (ye(e) || ke(e)) return ur(_e(cr(Ot, me([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? _e(r) : ur(_e(cr(r, t)));
}
function tn(e, t, n) {
  if (n === void 0 && (n = Ne), !t) throw Z(1, t);
  var r = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
    return e(t, n, se.apply(void 0, me([o], i, !1)));
  };
  return r.attrs = function(o) {
    return tn(e, t, D(D({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return tn(e, t, D(D({}, n), o));
  }, r;
}
var uo = function(e) {
  return tn(ba, e);
}, L = uo;
Zt.forEach(function(e) {
  L[e] = uo(e);
});
function Ae(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  b.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = Xt(se.apply(void 0, me([e], t, !1))), o = Xr(r);
  return new en(o, r);
}
b.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var at = "__sc-".concat(ge, "__");
b.NODE_ENV !== "production" && b.NODE_ENV !== "test" && typeof window < "u" && (window[at] || (window[at] = 0), window[at] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[at] += 1);
const $a = 2, lo = 14, Oa = 0.0276;
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
}, lr = {
  loading: { text: "Loading. Please wait.", visible: !0 },
  done: { text: "Waiting for input...", visible: !0 }
}, Na = {
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
}, ka = {
  ...Na,
  [je.FIT_YOUR_EYE]: "Fit your eye into square",
  [je.DEVICE_PITCHED]: "Hold your phone at eye level"
}, Ta = "rgba(19, 19, 19, 0.5)", xa = 34;
function fr(e, t) {
  return Math.max(t, t + (e - 400) * Oa + 2);
}
const Ia = (e, t = lo) => e ? e.width < e.height ? fr(e.width, t) : fr(e.height, t) : t, Aa = (e) => e > J.Default ? Fe[J.Default] : e > J.L ? Fe[J.L] : e > J.M ? Fe[J.M] : Fe[J.S], Ra = (e) => e ? Aa(e.width) : Fe[J.Default];
function Pa() {
  const e = "https://fonts.googleapis.com/css?family=Montserrat:600";
  if (!document.querySelector(`link[href="${e}"]`)) {
    const n = document.createElement("link");
    n.href = e, n.rel = "stylesheet", document.head.appendChild(n);
  }
}
const ze = Sr(void 0);
ze.displayName = "UiCustomizationContext";
function ve() {
  const e = Ke(ze);
  if (!e)
    throw new Error(
      `${ze.displayName} must be used within a ${ze.displayName} Provider`
    );
  return e;
}
function Da({ children: e, props: t, videoElementSize: n }) {
  const { font: r } = co(), o = te(
    () => ({ ...t, videoElementSize: n, fontSize: Ia(n, r.minimumSize) }),
    [t, r.minimumSize, n]
  );
  return /* @__PURE__ */ _(ze.Provider, { value: o, children: e });
}
const fo = ({ svgSize: e }) => /* @__PURE__ */ _("svg", { fill: "none", height: e, viewBox: "0 0 16 14", width: e, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ _(
  "path",
  {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), La = L.div`
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
`, Ma = L.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, Ha = L.p`
  background: ${(e) => e.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(e) => `${e.$fontSize}px`};
  line-height: 1em;
  max-width: 80%;
`, nn = ({ Icon: e, isCameraReady: t, position: n = "absolute", text: r }) => {
  const { fontSize: o } = ve();
  return /* @__PURE__ */ _(La, { $isCameraReady: t, $position: n, children: /* @__PURE__ */ _(Ma, { children: [
    e ? /* @__PURE__ */ _(e, { svgSize: o * 2 }) : null,
    /* @__PURE__ */ _(Ha, { $fontSize: o, children: r })
  ] }) });
}, _o = ({ text: e = "An unknown error has occurred" }) => /* @__PURE__ */ _(nn, { Icon: fo, position: "relative", text: e });
class Fa extends W {
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
    return this.state.hasError ? /* @__PURE__ */ _(_o, { Icon: fo, isCameraReady: !1 }) : this.props.children;
  }
}
const Ua = L.div`
  font-family: ${(e) => e.theme.font.family};
  font-style: ${(e) => e.theme.font.style};
  font-weight: ${(e) => e.theme.font.weight};
`, Ba = ({ children: e, uiProps: t, videoElementSize: n }) => (q(() => {
  Pa();
}, []), /* @__PURE__ */ _(ya, { target: t.styleTarget, children: /* @__PURE__ */ _(Sa, { theme: t.theme, children: /* @__PURE__ */ _(Ua, { children: /* @__PURE__ */ _(Fa, { videoElementSize: n, children: /* @__PURE__ */ _(Da, { props: t, videoElementSize: n, children: e }) }) }) }) })), za = 0.75, Wa = 2, ja = "dot-auto-capture-video", Ze = (e, t) => {
  const n = Xe(t);
  q(() => {
    n.current = t;
  }, [t]), q(
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
  const [t, n] = H(), r = pe(
    (o) => {
      var i;
      n((i = o.detail) == null ? void 0 : i.size);
    },
    [n]
  );
  return Ze(e, r), xe(() => {
    if (!t) {
      const o = document.getElementById(ja);
      o && n(o.getBoundingClientRect());
    }
  }, [t, n]), t;
}
function Va(e, t) {
  return e ? `${e}, ${t}` : t;
}
const Ya = {
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
}, Le = {
  colors: Ya,
  font: Za
}, qa = (e) => {
  var t;
  return e ? {
    ...Le,
    ...e,
    colors: {
      ...Le.colors,
      ...e.colors
    },
    font: {
      ...Le.font,
      ...e.font,
      family: Va((t = e.font) == null ? void 0 : t.family, Le.font.family)
    }
  } : Le;
}, $n = (e, t) => {
  document.dispatchEvent(
    new CustomEvent(e, {
      detail: t
    })
  );
}, yt = class yt {
  constructor() {
    tt(this, "lastDetails", {});
    tt(this, "delayedTime", 0);
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
    this.isDetailChanged(t, n) && $n(t, n);
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
tt(yt, "_instance");
let rn = yt;
rn.getInstance();
const dr = (e, t) => {
  $n(e, {
    instruction: t
  });
}, Xa = (e) => {
  $n(e, { animationEnd: !0 });
}, Ka = (e) => Number.parseFloat(e.toFixed(3)), ho = (e, t) => Math.min(e, t), Ja = ({ height: e, width: t }, n) => {
  const r = ho(t, e) * n, o = (t - r) / 2, i = (e - r) / 2;
  return {
    shiftX: o,
    shiftY: i,
    width: r,
    height: r
  };
}, Qa = (e, t) => {
  const { height: n, shiftX: r, shiftY: o, width: i } = Ja(e, t);
  return {
    shiftX: r / e.width,
    shiftY: o / e.height,
    width: i / e.width,
    height: n / e.height
  };
}, es = (e, t) => {
  const n = ho(t.width, t.height);
  return Ka(e * n);
}, ts = (e) => Qa(e, za), ns = (e, t) => es(e, t) * Wa;
async function rs() {
  return navigator.mediaDevices.enumerateDevices();
}
async function os() {
  return (await rs()).filter((t) => t.kind === "videoinput");
}
const is = () => {
  const [e, t] = H(!1);
  return q(() => {
    (async () => {
      (await os()).length > 1 && t(!0);
    })();
  }, []), e;
}, as = ({ size: e }) => /* @__PURE__ */ _("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }), ss = ({ size: e }) => /* @__PURE__ */ _("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: "52", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ _("circle", { cx: "26", cy: "26", fill: "#131313", fillOpacity: "0.3", r: "26" }),
  /* @__PURE__ */ _(
    "path",
    {
      d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
      fill: "white"
    }
  )
] }), po = L.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(e) => e.$marginLeft ? `${e.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, cs = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ _(po, { $marginLeft: e, ...n, children: /* @__PURE__ */ _(as, { size: t }) }), us = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ _(po, { $marginLeft: e, ...n, children: /* @__PURE__ */ _(ss, { size: t }) }), ls = L.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.$padding}px`};
  z-index: 2;
`, fs = ({
  customControlEvent: e,
  isSwitchCameraDisabled: t
}) => {
  const { showCameraButtons: n, videoElementSize: r } = ve(), o = is();
  if (!n)
    return null;
  const { buttonPadding: i, iconSize: a, marginLeft: s } = Ra(r);
  return /* @__PURE__ */ _(ls, { $padding: i, children: [
    o && /* @__PURE__ */ _(us, { disabled: t, onClick: () => {
      dr(e, An.SWITCH_CAMERA);
    }, size: a }),
    /* @__PURE__ */ _(
      cs,
      {
        marginLeft: o ? s : 0,
        onClick: () => {
          dr(e, An.TOGGLE_MIRROR);
        },
        size: a
      }
    )
  ] });
}, _r = 2.6, on = "1.5s", an = "1.5s", sn = "ease-in-out", ds = 2500, _s = "2.5s", hs = "0.3s", ps = "linear", ms = ".5s", gs = "3s", ys = "ease-in-out", vs = ".5s", Cs = ".5s", Es = "ease-out", ws = (e) => Ae`
100% {
  transform: translateX(22%)  scale(${e});
}
`, Ss = (e) => Ae`
100% {
  transform: translate(34%, 8%)  scale(${e * 0.98});
}
`, bs = Ae`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`, $s = Ae`
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`, Os = Ae`
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
`, Ns = Ae`
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
`, ks = L.div`
  position: absolute;
  left: 50%;

  ${(e) => e.$cssTop ? `top: ${e.$cssTop}%;` : ""}
  ${(e) => e.$cssBottom ? `bottom: ${e.$cssBottom}%;` : ""}
    ${(e) => e.$isAnimating && se`
      animation: ${bs} ${hs}
        ${ps} both;
      animation-delay: ${_s};

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
`, Ts = L.div`
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
`, xs = ({
  children: e,
  cssBottom: t,
  cssTop: n,
  isAnimating: r,
  isInCandidateSelection: o,
  isPortrait: i
}) => {
  const { fontSize: a } = ve();
  return /* @__PURE__ */ _(ks, { $cssBottom: t, $cssTop: n, $isAnimating: r, $isPortrait: i, children: /* @__PURE__ */ _(
    Ts,
    {
      $fontSize: a,
      $isInCandidateSelection: o,
      $wrap: e.length > xa,
      children: e
    }
  ) });
}, Is = L.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, As = ({ svgSize: e }) => /* @__PURE__ */ _(Is, { children: /* @__PURE__ */ _("svg", { fill: "none", height: e, viewBox: "0 0 48 48", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }) }), Rs = L.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`, Ps = ({ children: e, height: t, width: n }) => {
  const { backdropColor: r } = ve();
  return /* @__PURE__ */ _(Rs, { children: /* @__PURE__ */ _("svg", { viewBox: `0 0 ${n} ${t}`, children: [
    /* @__PURE__ */ _("defs", { children: /* @__PURE__ */ _("mask", { id: "mask", children: [
      /* @__PURE__ */ _("rect", { fill: "#fff", height: "100%", width: "100%" }),
      e
    ] }) }),
    /* @__PURE__ */ _("rect", { fill: r, height: "100%", mask: "url(#mask)", width: "100%" })
  ] }) });
};
function Ds({
  cameraHeight: e,
  cameraWidth: t,
  state: n
}) {
  var o;
  const { appStateInstructions: r } = ve();
  return !n || n === "ERROR" || !((o = r == null ? void 0 : r[n]) != null && o.visible) ? null : n === "DONE" ? /* @__PURE__ */ _(G, { children: [
    e && t && /* @__PURE__ */ _(Ps, { height: e, width: t }),
    /* @__PURE__ */ _(nn, { isCameraReady: !0, text: r[n].text })
  ] }) : /* @__PURE__ */ _(nn, { Icon: As, isCameraReady: !0, text: r[n].text });
}
const Ls = L.canvas`
  transform: ${(e) => e.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, Ms = (e) => {
  const t = e.getContext("2d");
  t && t.clearRect(0, 0, t.canvas.width, t.canvas.height);
}, Hs = ({ cameraResolution: e, isImageMirror: t }) => {
  const n = Xe(null), r = co(), [o, i] = H(), a = pe(
    (s) => {
      var c;
      i((c = s == null ? void 0 : s.detail) == null ? void 0 : c.detectedObject);
    },
    [i]
  );
  return Ze(Se.DETECTED_FACE_CHANGED, a), q(() => {
    if (!n.current)
      return;
    const s = (c, l) => {
      var g;
      if (!l)
        return;
      const { faceCenter: f, faceSize: u } = l, h = (g = n == null ? void 0 : n.current) == null ? void 0 : g.getContext("2d");
      if (!h)
        return;
      const d = ns(u, c);
      h.beginPath(), h.arc(f.x, f.y, d, 0, 2 * Math.PI, !1), h.lineWidth = $a, h.strokeStyle = r.colors.placeholderColor, h.stroke();
    };
    n.current.width = e.width, n.current.height = e.height, Ms(n.current), s(e, o);
  }, [e, o, r.colors.placeholderColor]), /* @__PURE__ */ _(Ls, { ref: n, $isImageMirror: t });
}, Fs = () => {
  const [e, t] = H(), [n, r] = H(!1), o = pe(
    (c) => {
      var f, u;
      t((f = c == null ? void 0 : c.detail) == null ? void 0 : f.cameraResolution);
      const l = (u = c == null ? void 0 : c.detail) == null ? void 0 : u.isMirroring;
      l !== void 0 && r(l);
    },
    [t]
  );
  Ze(Se.CAMERA_PROPS_CHANGED, o);
  const [i, a] = H({
    code: P.FACE_NOT_PRESENT,
    // FIXME Default instruction should not be here
    isEscalated: !1
  }), s = pe(
    (c) => {
      var l, f;
      a({
        code: (l = c == null ? void 0 : c.detail) == null ? void 0 : l.instructionCode,
        isEscalated: ((f = c == null ? void 0 : c.detail) == null ? void 0 : f.isEscalated) ?? !1
      });
    },
    [a]
  );
  return Ze(Se.INSTRUCTION_CHANGED, s), {
    cameraResolution: e,
    instruction: i,
    isMirroring: n
  };
}, Us = (e, t) => {
  const [n, r] = H(!1);
  return q(() => {
    if (t === Ge.CLOSEUP) {
      r(!0);
      const o = setTimeout(() => {
        r(!1);
      }, ds);
      return () => clearTimeout(o);
    }
  }, [t]), e && n ? e === je.CANDIDATE_SELECTION ? e : je.FIT_YOUR_EYE : e;
}, Bs = () => {
  const [e, t] = H(Ge.DISTANT), [n, r] = H(Ve.LOADING), [o, i] = H(), a = pe(
    (s) => {
      const { error: c, phase: l, state: f } = s.detail || {};
      l && t(l), f && r(f), c && i(c);
    },
    [t, r, i]
  );
  return Ze(hn.STATUS_CHANGED, a), {
    magnifEyePhase: e,
    magnifEyeState: n,
    magnifEyeError: o
  };
}, zs = L.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${(e) => e.$isInCandidateSelection ? `${e.theme.colors.placeholderColorSuccess}` : `${e.theme.colors.placeholderColor}`};

  #backdrop-cutout,
  #placeholder {
    @media (min-width: 668px) {
      stroke-width: 4;
    }
    @media (min-width: 2240px) {
      stroke-width: 6;
    }
    transform-origin: center;

    ${(e) => e.$isAnimating && se`
        animation: ${ws(_r)} ${an}
          ${sn} both;
        animation-delay: ${on};
      `}

    @media (max-width: 667px) {
      ${(e) => e.$isAnimating && se`
          animation: ${Ss(_r)} ${an}
            ${sn} both;
          animation-delay: ${on};
        `}
    }
  }
`, Ws = ({
  handleAnimationEnd: e,
  height: t,
  initialPosition: n,
  isAnimating: r,
  isInCandidateSelection: o,
  width: i
}) => {
  const { backdropColor: a } = ve();
  return /* @__PURE__ */ _(
    zs,
    {
      $isAnimating: r,
      $isInCandidateSelection: o,
      onAnimationEnd: e,
      children: /* @__PURE__ */ _("svg", { viewBox: `0 0 ${i} ${t}`, children: [
        /* @__PURE__ */ _("mask", { id: "mask", children: [
          /* @__PURE__ */ _("rect", { fill: "#fff", height: "100%", width: "100%" }),
          /* @__PURE__ */ _(
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
        /* @__PURE__ */ _("rect", { fill: a, height: "100%", mask: "url(#mask)", width: "100%" }),
        /* @__PURE__ */ _(
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
}, js = () => /* @__PURE__ */ _(
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
    children: /* @__PURE__ */ _(
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
), Gs = () => /* @__PURE__ */ _(
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
      /* @__PURE__ */ _(
        "path",
        {
          className: "st0",
          d: "M98.1,35c0,11-9.4,20-21,20c-11.6,0-21-9-21-20s9.4-20,21-20C88.7,15,98.1,24,98.1,35z",
          fill: "none",
          stroke: "#FFFFFF",
          strokeWidth: "2"
        }
      ),
      /* @__PURE__ */ _(
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
), Vs = L.div`
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

  ${(e) => e.$isAnimating && se`
      animation: ${$s} ${an} ${sn} both;
      animation-delay: ${on};
    `}
`, Ys = L.div`
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

  ${(e) => e.$isAnimating && se`
      animation: ${Os} ${gs} ${ys} both;
      animation-delay: ${ms};
    `}

  svg {
    display: inline-block;
    width: 100%;
    height: auto;
    filter: drop-shadow(0px 0px 5px rgba(2, 27, 65, 0.3));
  }
`, Zs = L.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  color: ${(e) => e.$isInCandidateSelection ? "#00BFB2" : "white"};
  transform: scale(0);
  opacity: 0;

  ${(e) => e.$isAnimating && se`
      animation: ${Ns} ${Cs} ${Es} both;
      animation-delay: ${vs};
    `}

  svg {
    display: inline-block;
    width: 100%;
    height: auto;
    filter: drop-shadow(0px 0px 4px rgba(2, 27, 65, 0.3));
  }
`, qs = ({ isAnimating: e, isInCandidateSelection: t }) => /* @__PURE__ */ _(Vs, { $isAnimating: e, children: [
  /* @__PURE__ */ _(Zs, { $isAnimating: e, $isInCandidateSelection: t, children: /* @__PURE__ */ _(js, {}) }),
  /* @__PURE__ */ _(Ys, { $isAnimating: e, children: /* @__PURE__ */ _(Gs, {}) })
] }), Xs = () => {
  const { cameraResolution: e, instruction: t, isMirroring: n } = Fs(), { magnifEyeError: r, magnifEyePhase: o, magnifEyeState: i } = Bs(), { instructions: a } = ve(), s = Us(t.code, o), c = s === je.CANDIDATE_SELECTION, l = o === Ge.MIDDLE || o === Ge.CLOSEUP;
  if (i === Ve.ERROR)
    return /* @__PURE__ */ _(_o, { text: r == null ? void 0 : r.message });
  if (i === Ve.RUNNING && e) {
    const f = ts(e);
    return /* @__PURE__ */ _(G, { children: [
      !l && /* @__PURE__ */ _(Hs, { cameraResolution: e, isImageMirror: n }),
      /* @__PURE__ */ _(
        Ws,
        {
          handleAnimationEnd: () => Xa(hn.ANIMATION_END),
          height: e.height,
          initialPosition: f,
          isAnimating: l,
          isInCandidateSelection: c,
          width: e.width
        }
      ),
      s && /* @__PURE__ */ _(
        xs,
        {
          cssBottom: (f.height + f.shiftY) * 100,
          isAnimating: l,
          isInCandidateSelection: c,
          isPortrait: e.width < e.height,
          children: a[s]
        }
      ),
      /* @__PURE__ */ _(qs, { isAnimating: l, isInCandidateSelection: c }),
      !l && /* @__PURE__ */ _(fs, { customControlEvent: Se.CONTROL, isSwitchCameraDisabled: c })
    ] });
  }
  return /* @__PURE__ */ _(
    Ds,
    {
      cameraHeight: e == null ? void 0 : e.height,
      cameraWidth: e == null ? void 0 : e.width,
      state: i
    }
  );
}, Ks = (e) => {
  var a, s;
  const t = { ...ka, ...e == null ? void 0 : e.instructions }, n = {
    [Ve.LOADING]: {
      ...lr.loading,
      ...(a = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : a.loading
    },
    [Ve.DONE]: { ...lr.done, ...(s = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : s.done }
  }, r = (e == null ? void 0 : e.backdropColor) ?? Ta, o = (e == null ? void 0 : e.showCameraButtons) ?? !1, i = qa(e == null ? void 0 : e.theme);
  return {
    backdropColor: r,
    instructions: t,
    appStateInstructions: n,
    showCameraButtons: o,
    theme: i
  };
}, Js = ({ props: e }) => {
  const t = Ga(Se.VIDEO_ELEMENT_SIZE);
  return /* @__PURE__ */ _(Ba, { uiProps: Ks(e), videoElementSize: t, children: /* @__PURE__ */ _(Xs, {}) });
};
Ro(Js, "x-dot-magnifeye-liveness-ui", ["props"]);
