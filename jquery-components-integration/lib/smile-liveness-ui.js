var So = Object.defineProperty;
var wo = (e, t, n) => t in e ? So(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Qe = (e, t, n) => wo(e, typeof t != "symbol" ? t + "" : t, n);
var Ve, S, hr, ue, bn, pr, Mt, on, Ht, Ut, mr, je = {}, gr = [], Eo = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, yt = Array.isArray;
function J(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function yr(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function D(e, t, n) {
  var r, o, i, a = {};
  for (i in t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ve.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) a[i] === void 0 && (a[i] = e.defaultProps[i]);
  return Fe(e, a, r, o, null);
}
function Fe(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o ?? ++hr, __i: -1, __u: 0 };
  return o == null && S.vnode != null && S.vnode(i), i;
}
function bo() {
  return { current: null };
}
function W(e) {
  return e.children;
}
function z(e, t) {
  this.props = e, this.context = t;
}
function me(e, t) {
  if (t == null) return e.__ ? me(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? me(e) : null;
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
function Ft(e) {
  (!e.__d && (e.__d = !0) && ue.push(e) && !ft.__r++ || bn !== S.debounceRendering) && ((bn = S.debounceRendering) || pr)(ft);
}
function ft() {
  var e, t, n, r, o, i, a, s;
  for (ue.sort(Mt); e = ue.shift(); ) e.__d && (t = ue.length, r = void 0, i = (o = (n = e).__v).__e, a = [], s = [], n.__P && ((r = J({}, o)).__v = o.__v + 1, S.vnode && S.vnode(r), an(n.__P, r, o, n.__n, n.__P.namespaceURI, 32 & o.__u ? [i] : null, a, i ?? me(o), !!(32 & o.__u), s), r.__v = o.__v, r.__.__k[r.__i] = r, wr(a, r, s), r.__e != i && vr(r)), ue.length > t && ue.sort(Mt));
  ft.__r = 0;
}
function Cr(e, t, n, r, o, i, a, s, l, u, d) {
  var c, h, _, y, w, $ = r && r.__k || gr, p = t.length;
  for (n.__d = l, $o(n, t, $), l = n.__d, c = 0; c < p; c++) (_ = n.__k[c]) != null && typeof _ != "boolean" && typeof _ != "function" && (h = _.__i === -1 ? je : $[_.__i] || je, _.__i = c, an(e, _, h, o, i, a, s, l, u, d), y = _.__e, _.ref && h.ref != _.ref && (h.ref && sn(h.ref, null, _), d.push(_.ref, _.__c || y, _)), w == null && y != null && (w = y), 65536 & _.__u || h.__k === _.__k ? (l && typeof _.type == "string" && !e.contains(l) && (l = me(h)), l = Sr(_, l, e)) : typeof _.type == "function" && _.__d !== void 0 ? l = _.__d : y && (l = y.nextSibling), _.__d = void 0, _.__u &= -196609);
  n.__d = l, n.__e = w;
}
function $o(e, t, n) {
  var r, o, i, a, s, l = t.length, u = n.length, d = u, c = 0;
  for (e.__k = [], r = 0; r < l; r++) a = r + c, (o = e.__k[r] = (o = t[r]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? Fe(null, o, null, null, null) : yt(o) ? Fe(W, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? Fe(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = e, o.__b = e.__b + 1, s = ko(o, n, a, d), o.__i = s, i = null, s !== -1 && (d--, (i = n[s]) && (i.__u |= 131072)), i == null || i.__v === null ? (s == -1 && c--, typeof o.type != "function" && (o.__u |= 65536)) : s !== a && (s == a - 1 ? c = s - a : s == a + 1 ? c++ : s > a ? d > l - a ? c += s - a : c-- : s < a && c++, s !== r + c && (o.__u |= 65536))) : (i = n[a]) && i.key == null && i.__e && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = me(i)), Bt(i, i, !1), n[a] = null, d--);
  if (d) for (r = 0; r < u; r++) (i = n[r]) != null && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = me(i)), Bt(i, i));
}
function Sr(e, t, n) {
  var r, o;
  if (typeof e.type == "function") {
    for (r = e.__k, o = 0; r && o < r.length; o++) r[o] && (r[o].__ = e, t = Sr(r[o], t, n));
    return t;
  }
  e.__e != t && (n.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType === 8);
  return t;
}
function ee(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (yt(e) ? e.some(function(n) {
    ee(n, t);
  }) : t.push(e)), t;
}
function ko(e, t, n, r) {
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
function $n(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || Eo.test(t) ? n : n + "px";
}
function Je(e, t, n, r, o) {
  var i;
  e: if (t === "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || $n(e.style, t, "");
    if (n) for (t in n) r && n[t] === r[t] || $n(e.style, t, n[t]);
  }
  else if (t[0] === "o" && t[1] === "n") i = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")), t = t.toLowerCase() in e || t === "onFocusOut" || t === "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = on, e.addEventListener(t, i ? Ut : Ht, i)) : e.removeEventListener(t, i ? Ut : Ht, i);
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
function kn(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t.t == null) t.t = on++;
      else if (t.t < n.u) return;
      return n(S.event ? S.event(t) : t);
    }
  };
}
function an(e, t, n, r, o, i, a, s, l, u) {
  var d, c, h, _, y, w, $, p, m, k, E, N, C, g, U, V, F = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && (l = !!(32 & n.__u), i = [s = t.__e = n.__e]), (d = S.__b) && d(t);
  e: if (typeof F == "function") try {
    if (p = t.props, m = "prototype" in F && F.prototype.render, k = (d = F.contextType) && r[d.__c], E = d ? k ? k.props.value : d.__ : r, n.__c ? $ = (c = t.__c = n.__c).__ = c.__E : (m ? t.__c = c = new F(p, E) : (t.__c = c = new z(p, E), c.constructor = F, c.render = No), k && k.sub(c), c.props = p, c.state || (c.state = {}), c.context = E, c.__n = r, h = c.__d = !0, c.__h = [], c._sb = []), m && c.__s == null && (c.__s = c.state), m && F.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = J({}, c.__s)), J(c.__s, F.getDerivedStateFromProps(p, c.__s))), _ = c.props, y = c.state, c.__v = t, h) m && F.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), m && c.componentDidMount != null && c.__h.push(c.componentDidMount);
    else {
      if (m && F.getDerivedStateFromProps == null && p !== _ && c.componentWillReceiveProps != null && c.componentWillReceiveProps(p, E), !c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(p, c.__s, E) === !1 || t.__v === n.__v)) {
        for (t.__v !== n.__v && (c.props = p, c.state = c.__s, c.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(Se) {
          Se && (Se.__ = t);
        }), N = 0; N < c._sb.length; N++) c.__h.push(c._sb[N]);
        c._sb = [], c.__h.length && a.push(c);
        break e;
      }
      c.componentWillUpdate != null && c.componentWillUpdate(p, c.__s, E), m && c.componentDidUpdate != null && c.__h.push(function() {
        c.componentDidUpdate(_, y, w);
      });
    }
    if (c.context = E, c.props = p, c.__P = e, c.__e = !1, C = S.__r, g = 0, m) {
      for (c.state = c.__s, c.__d = !1, C && C(t), d = c.render(c.props, c.state, c.context), U = 0; U < c._sb.length; U++) c.__h.push(c._sb[U]);
      c._sb = [];
    } else do
      c.__d = !1, C && C(t), d = c.render(c.props, c.state, c.context), c.state = c.__s;
    while (c.__d && ++g < 25);
    c.state = c.__s, c.getChildContext != null && (r = J(J({}, r), c.getChildContext())), m && !h && c.getSnapshotBeforeUpdate != null && (w = c.getSnapshotBeforeUpdate(_, y)), Cr(e, yt(V = d != null && d.type === W && d.key == null ? d.props.children : d) ? V : [V], t, n, r, o, i, a, s, l, u), c.base = t.__e, t.__u &= -161, c.__h.length && a.push(c), $ && (c.__E = c.__ = null);
  } catch (Se) {
    t.__v = null, l || i != null ? (t.__e = s, t.__u |= l ? 160 : 32, i[i.indexOf(s)] = null) : (t.__e = n.__e, t.__k = n.__k), S.__e(Se, t, n);
  }
  else i == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Oo(n.__e, t, n, r, o, i, a, l, u);
  (d = S.diffed) && d(t);
}
function wr(e, t, n) {
  t.__d = void 0;
  for (var r = 0; r < n.length; r++) sn(n[r], n[++r], n[++r]);
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
function Oo(e, t, n, r, o, i, a, s, l) {
  var u, d, c, h, _, y, w, $ = n.props, p = t.props, m = t.type;
  if (m === "svg" ? o = "http://www.w3.org/2000/svg" : m === "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (u = 0; u < i.length; u++) if ((_ = i[u]) && "setAttribute" in _ == !!m && (m ? _.localName === m : _.nodeType === 3)) {
      e = _, i[u] = null;
      break;
    }
  }
  if (e == null) {
    if (m === null) return document.createTextNode(p);
    e = document.createElementNS(o, m, p.is && p), i = null, s = !1;
  }
  if (m === null) $ === p || s && e.data === p || (e.data = p);
  else {
    if (i = i && Ve.call(e.childNodes), $ = n.props || je, !s && i != null) for ($ = {}, u = 0; u < e.attributes.length; u++) $[(_ = e.attributes[u]).name] = _.value;
    for (u in $) if (_ = $[u], u != "children") {
      if (u == "dangerouslySetInnerHTML") c = _;
      else if (u !== "key" && !(u in p)) {
        if (u == "value" && "defaultValue" in p || u == "checked" && "defaultChecked" in p) continue;
        Je(e, u, null, _, o);
      }
    }
    for (u in p) _ = p[u], u == "children" ? h = _ : u == "dangerouslySetInnerHTML" ? d = _ : u == "value" ? y = _ : u == "checked" ? w = _ : u === "key" || s && typeof _ != "function" || $[u] === _ || Je(e, u, _, $[u], o);
    if (d) s || c && (d.__html === c.__html || d.__html === e.innerHTML) || (e.innerHTML = d.__html), t.__k = [];
    else if (c && (e.innerHTML = ""), Cr(e, yt(h) ? h : [h], t, n, r, m === "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, a, i ? i[0] : n.__k && me(n, 0), s, l), i != null) for (u = i.length; u--; ) i[u] != null && yr(i[u]);
    s || (u = "value", y !== void 0 && (y !== e[u] || m === "progress" && !y || m === "option" && y !== $[u]) && Je(e, u, y, $[u], o), u = "checked", w !== void 0 && w !== e[u] && Je(e, u, w, $[u], o));
  }
  return e;
}
function sn(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    S.__e(r, n);
  }
}
function Bt(e, t, n) {
  var r, o;
  if (S.unmount && S.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || sn(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (i) {
      S.__e(i, t);
    }
    r.base = r.__P = null;
  }
  if (r = e.__k) for (o = 0; o < r.length; o++) r[o] && Bt(r[o], t, n || typeof e.type != "function");
  n || e.__e == null || yr(e.__e), e.__c = e.__ = e.__e = e.__d = void 0;
}
function No(e, t, n) {
  return this.constructor(e, n);
}
function ae(e, t, n) {
  var r, o, i, a;
  S.__ && S.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], a = [], an(t, e = (!r && n || t).__k = D(W, null, [e]), o || je, je, t.namespaceURI, !r && n ? [n] : o ? null : t.firstChild ? Ve.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, a), wr(i, e, a);
}
function cn(e, t) {
  ae(e, t, cn);
}
function ln(e, t, n) {
  var r, o, i, a, s = J({}, e.props);
  for (i in e.type && e.type.defaultProps && (a = e.type.defaultProps), t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i] === void 0 && a !== void 0 ? a[i] : t[i];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? Ve.call(arguments, 2) : n), Fe(e.type, s, r || e.key, o || e.ref, null);
}
function Er(e, t) {
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
        s.__e = !0, Ft(s);
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
Ve = gr.slice, S = { __e: function(e, t, n, r) {
  for (var o, i, a; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), a = o.__d), a) return o.__E = o;
  } catch (s) {
    e = s;
  }
  throw e;
} }, hr = 0, z.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = J({}, this.state), typeof e == "function" && (e = e(J({}, n), this.props)), e && J(n, e), e != null && this.__v && (t && this._sb.push(t), Ft(this));
}, z.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ft(this));
}, z.prototype.render = W, ue = [], pr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Mt = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, ft.__r = 0, on = 0, Ht = kn(!1), Ut = kn(!0), mr = 0;
function un() {
  return (un = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var To = ["context", "children"];
function Io(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, n = function(r, o) {
    if (r == null) return {};
    var i, a, s = {}, l = Object.keys(r);
    for (a = 0; a < l.length; a++) o.indexOf(i = l[a]) >= 0 || (s[i] = r[i]);
    return s;
  }(e, To);
  return ln(t, n);
}
function xo() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = D(Io, un({}, this._props, { context: e.detail.context }), function t(n, r) {
    if (n.nodeType === 3) return n.data;
    if (n.nodeType !== 1) return null;
    var o = [], i = {}, a = 0, s = n.attributes, l = n.childNodes;
    for (a = s.length; a--; ) s[a].name !== "slot" && (i[s[a].name] = s[a].value, i[br(s[a].name)] = s[a].value);
    for (a = l.length; a--; ) {
      var u = t(l[a], null), d = l[a].slot;
      d ? i[d] = D(On, { name: d }, u) : o[a] = u;
    }
    var c = r ? D(On, null, o) : o;
    return D(r || n.nodeName.toLowerCase(), i, c);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? cn : ae)(this._vdom, this._root);
}
function br(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function Ro(e, t, n) {
  if (this._vdom) {
    var r = {};
    r[e] = n = n ?? void 0, r[br(e)] = n, this._vdom = ln(this._vdom, r), ae(this._vdom, this._root);
  }
}
function Ao() {
  ae(this._vdom = null, this._root);
}
function On(e, t) {
  var n = this;
  return D("slot", un({}, e, { ref: function(r) {
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
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = xo, o.prototype.attributeChangedCallback = Ro, o.prototype.disconnectedCallback = Ao, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = n, n.forEach(function(i) {
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
function f(e, t, n, r, o, i) {
  t || (t = {});
  var a, s, l = t;
  if ("ref" in l) for (s in l = {}, t) s == "ref" ? a = t[s] : l[s] = t[s];
  var u = { type: e, props: l, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --Po, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (a = e.defaultProps)) for (s in a) l[s] === void 0 && (l[s] = a[s]);
  return S.vnode && S.vnode(u), u;
}
const Nn = {
  CONTINUE_DETECTION: "continue-detection",
  SWITCH_CAMERA: "switch-camera",
  TOGGLE_MIRROR: "toggle-mirror"
};
var ze = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", e.CONTROL = "face-auto-capture:control", e.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", e.FACE_DETECTION = "face-auto-capture:face-detection", e.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", e.STATE_CHANGED = "face-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", e))(ze || {}), $r = /* @__PURE__ */ ((e) => (e.STATUS_CHANGED = "smile-auto-capture:status-changed", e))($r || {});
const Tn = {
  EYE_NOT_PRESENT: "eye_not_present"
}, L = {
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
}, Do = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  WAITING: "WAITING",
  RUNNING: "RUNNING"
}, _e = {
  ...L,
  SMILE: "smile",
  SMILE_CANDIDATE_SELECTION: "smile_candidate_selection",
  KEEP_NEUTRAL_EXPRESSION: "keep_neutral_expression"
}, dt = {
  NEUTRAL: "NEUTRAL",
  SMILE: "SMILE"
}, be = {
  ...Do,
  DONE: "DONE"
};
var se, I, xt, In, $e = 0, kr = [], x = S, xn = x.__b, Rn = x.__r, An = x.diffed, Ln = x.__c, Pn = x.unmount, Dn = x.__;
function xe(e, t) {
  x.__h && x.__h(I, e, $e || t), $e = 0;
  var n = I.__H || (I.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function M(e) {
  return $e = 1, fn(Tr, e);
}
function fn(e, t, n) {
  var r = xe(se++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Tr(void 0, t), function(s) {
    var l = r.__N ? r.__N[0] : r.__[0], u = r.t(l, s);
    l !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = I, !I.u)) {
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
          var _ = h.__[0];
          h.__ = h.__N, h.__N = void 0, _ !== h.__[0] && (c = !0);
        }
      }), !(!c && r.__c.props === s) && (!i || i.call(this, s, l, u));
    };
    I.u = !0;
    var i = I.shouldComponentUpdate, a = I.componentWillUpdate;
    I.componentWillUpdate = function(s, l, u) {
      if (this.__e) {
        var d = i;
        i = void 0, o(s, l, u), i = d;
      }
      a && a.call(this, s, l, u);
    }, I.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function ne(e, t) {
  var n = xe(se++, 3);
  !x.__s && dn(n.__H, t) && (n.__ = e, n.i = t, I.__H.__h.push(n));
}
function Ye(e, t) {
  var n = xe(se++, 4);
  !x.__s && dn(n.__H, t) && (n.__ = e, n.i = t, I.__h.push(n));
}
function vt(e) {
  return $e = 5, te(function() {
    return { current: e };
  }, []);
}
function Or(e, t, n) {
  $e = 6, Ye(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(e));
}
function te(e, t) {
  var n = xe(se++, 7);
  return dn(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function ke(e, t) {
  return $e = 8, te(function() {
    return e;
  }, t);
}
function Ze(e) {
  var t = I.context[e.__c], n = xe(se++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(I)), t.props.value) : e.__;
}
function _t(e, t) {
  x.useDebugValue && x.useDebugValue(t ? t(e) : e);
}
function Nr() {
  var e = xe(se++, 11);
  if (!e.__) {
    for (var t = I.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function Mo() {
  for (var e; e = kr.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(ot), e.__H.__h.forEach(Wt), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], x.__e(t, e.__v);
  }
}
x.__b = function(e) {
  I = null, xn && xn(e);
}, x.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Dn && Dn(e, t);
}, x.__r = function(e) {
  Rn && Rn(e), se = 0;
  var t = (I = e.__c).__H;
  t && (xt === I ? (t.__h = [], I.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.i = n.__N = void 0;
  })) : (t.__h.forEach(ot), t.__h.forEach(Wt), t.__h = [], se = 0)), xt = I;
}, x.diffed = function(e) {
  An && An(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (kr.push(t) !== 1 && In === x.requestAnimationFrame || ((In = x.requestAnimationFrame) || Ho)(Mo)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.i = void 0;
  })), xt = I = null;
}, x.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(ot), n.__h = n.__h.filter(function(r) {
        return !r.__ || Wt(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], x.__e(r, n.__v);
    }
  }), Ln && Ln(e, t);
}, x.unmount = function(e) {
  Pn && Pn(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      ot(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && x.__e(t, n.__v));
};
var Mn = typeof requestAnimationFrame == "function";
function Ho(e) {
  var t, n = function() {
    clearTimeout(r), Mn && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  Mn && (t = requestAnimationFrame(n));
}
function ot(e) {
  var t = I, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), I = t;
}
function Wt(e) {
  var t = I;
  e.__c = e.__(), I = t;
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
var Fo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Bo = /* @__PURE__ */ Uo(
  function(e) {
    return Fo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Ir(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function jt(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function zt(e, t) {
  this.props = e, this.context = t;
}
function Wo(e, t) {
  function n(o) {
    var i = this.props.ref, a = i == o.ref;
    return !a && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !a : jt(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, D(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(zt.prototype = new z()).isPureReactComponent = !0, zt.prototype.shouldComponentUpdate = function(e, t) {
  return jt(this.props, e) || jt(this.state, t);
};
var Hn = S.__b;
S.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Hn && Hn(e);
};
var jo = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function zo(e) {
  function t(n) {
    var r = Ir({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = jo, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Un = function(e, t) {
  return e == null ? null : ee(ee(e).map(t));
}, Go = { map: Un, forEach: Un, count: function(e) {
  return e ? ee(e).length : 0;
}, only: function(e) {
  var t = ee(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: ee }, Vo = S.__e;
S.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  Vo(e, t, n, r);
};
var Fn = S.unmount;
function xr(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = Ir({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return xr(r, t, n);
  })), e;
}
function Rr(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return Rr(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function it() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Ar(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Yo(e) {
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
S.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Fn && Fn(e);
}, (it.prototype = new z()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var o = Ar(r.__v), i = !1, a = function() {
    i || (i = !0, n.__R = null, o ? o(s) : s());
  };
  n.__R = a;
  var s = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var l = r.state.__a;
        r.__v.__k[0] = Rr(l, l.__c.__P, l.__c.__O);
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
      this.__v.__k[0] = xr(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && D(W, null, e.fallback);
  return o && (o.__u &= -33), [D(W, null, t.__a ? null : e.children), o];
};
var Bn = function(e, t, n) {
  if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size)) for (n = e.u; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    e.u = n = n[2];
  }
};
function Zo(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function qo(e) {
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
  } }), ae(D(Zo, { context: t.context }, e.__v), t.l);
}
function Xo(e, t) {
  var n = D(qo, { __v: e, i: t });
  return n.containerInfo = t, n;
}
(Me.prototype = new z()).__a = function(e) {
  var t = this, n = Ar(t.__v), r = t.o.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), Bn(t, e, r)) : o();
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
    Bn(e, n, t);
  });
};
var Lr = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Ko = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Qo = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Jo = /[A-Z0-9]/g, ei = typeof document < "u", ti = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function ni(e, t, n) {
  return t.__k == null && (t.textContent = ""), ae(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function ri(e, t, n) {
  return cn(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
z.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(z.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Wn = S.event;
function oi() {
}
function ii() {
  return this.cancelBubble;
}
function ai() {
  return this.defaultPrevented;
}
S.event = function(e) {
  return Wn && (e = Wn(e)), e.persist = oi, e.isPropagationStopped = ii, e.isDefaultPrevented = ai, e.nativeEvent = e;
};
var _n, si = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, jn = S.vnode;
S.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {};
    for (var i in n) {
      var a = n[i];
      if (!(i === "value" && "defaultValue" in n && a == null || ei && i === "children" && r === "noscript" || i === "class" || i === "className")) {
        var s = i.toLowerCase();
        i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && a === !0 ? a = "" : s === "translate" && a === "no" ? a = !1 : s === "ondoubleclick" ? i = "ondblclick" : s !== "onchange" || r !== "input" && r !== "textarea" || ti(n.type) ? s === "onfocus" ? i = "onfocusin" : s === "onblur" ? i = "onfocusout" : Qo.test(i) ? i = s : r.indexOf("-") === -1 && Ko.test(i) ? i = i.replace(Jo, "-$&").toLowerCase() : a === null && (a = void 0) : s = i = "oninput", s === "oninput" && o[i = s] && (i = "oninputCapture"), o[i] = a;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = ee(n.children).forEach(function(l) {
      l.props.selected = o.value.indexOf(l.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = ee(n.children).forEach(function(l) {
      l.props.selected = o.multiple ? o.defaultValue.indexOf(l.props.value) != -1 : o.defaultValue == l.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", si)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = Lr, jn && jn(e);
};
var zn = S.__r;
S.__r = function(e) {
  zn && zn(e), _n = e.__c;
};
var Gn = S.diffed;
S.diffed = function(e) {
  Gn && Gn(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), _n = null;
};
var ci = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return _n.__n[e.__c].props.value;
}, useCallback: ke, useContext: Ze, useDebugValue: _t, useDeferredValue: Dr, useEffect: ne, useId: Nr, useImperativeHandle: Or, useInsertionEffect: Hr, useLayoutEffect: Ye, useMemo: te, useReducer: fn, useRef: vt, useState: M, useSyncExternalStore: Ur, useTransition: Mr } } };
function li(e) {
  return D.bind(null, e);
}
function Ct(e) {
  return !!e && e.$$typeof === Lr;
}
function ui(e) {
  return Ct(e) && e.type === W;
}
function fi(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function di(e) {
  return Ct(e) ? ln.apply(null, arguments) : e;
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
}, gi = W;
function Pr(e) {
  e();
}
function Dr(e) {
  return e;
}
function Mr() {
  return [!1, Pr];
}
var Hr = Ye, yi = Ct;
function Ur(e, t) {
  var n = t(), r = M({ h: { __: n, v: t } }), o = r[0].h, i = r[1];
  return Ye(function() {
    o.__ = n, o.v = t, Rt(o) && i({ h: o });
  }, [e, n, t]), ne(function() {
    return Rt(o) && i({ h: o }), e(function() {
      Rt(o) && i({ h: o });
    });
  }, [e]), n;
}
function Rt(e) {
  var t, n, r = e.v, o = e.__;
  try {
    var i = r();
    return !((t = o) === (n = i) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
}
var re = { useState: M, useId: Nr, useReducer: fn, useEffect: ne, useLayoutEffect: Ye, useInsertionEffect: Hr, useTransition: Mr, useDeferredValue: Dr, useSyncExternalStore: Ur, startTransition: Pr, useRef: vt, useImperativeHandle: Or, useMemo: te, useCallback: ke, useContext: Ze, useDebugValue: _t, version: "17.0.2", Children: Go, render: ni, hydrate: ri, unmountComponentAtNode: _i, createPortal: Xo, createElement: D, createContext: Er, createFactory: li, cloneElement: di, createRef: bo, Fragment: W, isValidElement: Ct, isElement: yi, isFragment: ui, isMemo: fi, findDOMNode: hi, Component: z, PureComponent: zt, memo: Wo, forwardRef: zo, flushSync: mi, unstable_batchedUpdates: pi, StrictMode: gi, Suspense: it, SuspenseList: Me, lazy: Yo, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ci };
function vi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ci = function(t, n, r, o) {
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
const Si = /* @__PURE__ */ vi(Ci);
var T = "-ms-", Be = "-moz-", O = "-webkit-", Fr = "comm", St = "rule", hn = "decl", wi = "@import", Br = "@keyframes", Ei = "@layer", Wr = Math.abs, pn = String.fromCharCode, Gt = Object.assign;
function bi(e, t) {
  return A(e, 0) ^ 45 ? (((t << 2 ^ A(e, 0)) << 2 ^ A(e, 1)) << 2 ^ A(e, 2)) << 2 ^ A(e, 3) : 0;
}
function jr(e) {
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
function Oe(e, t, n) {
  return e.slice(t, n);
}
function Y(e) {
  return e.length;
}
function zr(e) {
  return e.length;
}
function He(e, t) {
  return t.push(e), e;
}
function $i(e, t) {
  return e.map(t).join("");
}
function Vn(e, t) {
  return e.filter(function(n) {
    return !K(n, t);
  });
}
var wt = 1, Ne = 1, Gr = 0, j = 0, R = 0, Re = "";
function Et(e, t, n, r, o, i, a, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: wt, column: Ne, length: a, return: "", siblings: s };
}
function ie(e, t) {
  return Gt(Et("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Ee(e) {
  for (; e.root; )
    e = ie(e.root, { children: [e] });
  He(e, e.siblings);
}
function ki() {
  return R;
}
function Oi() {
  return R = j > 0 ? A(Re, --j) : 0, Ne--, R === 10 && (Ne = 1, wt--), R;
}
function G() {
  return R = j < Gr ? A(Re, j++) : 0, Ne++, R === 10 && (Ne = 1, wt++), R;
}
function he() {
  return A(Re, j);
}
function st() {
  return j;
}
function bt(e, t) {
  return Oe(Re, e, t);
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
  return wt = Ne = 1, Gr = Y(Re = e), j = 0, [];
}
function Ti(e) {
  return Re = "", e;
}
function At(e) {
  return jr(bt(j - 1, Yt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ii(e) {
  for (; (R = he()) && R < 33; )
    G();
  return Vt(e) > 2 || Vt(R) > 3 ? "" : " ";
}
function xi(e, t) {
  for (; --t && G() && !(R < 48 || R > 102 || R > 57 && R < 65 || R > 70 && R < 97); )
    ;
  return bt(e, st() + (t < 6 && he() == 32 && G() == 32));
}
function Yt(e) {
  for (; G(); )
    switch (R) {
      case e:
        return j;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Yt(R);
        break;
      case 40:
        e === 41 && Yt(e);
        break;
      case 92:
        G();
        break;
    }
  return j;
}
function Ri(e, t) {
  for (; G() && e + R !== 57; )
    if (e + R === 84 && he() === 47)
      break;
  return "/*" + bt(t, j - 1) + "*" + pn(e === 47 ? e : G());
}
function Ai(e) {
  for (; !Vt(he()); )
    G();
  return bt(e, j);
}
function Li(e) {
  return Ti(ct("", null, null, null, [""], e = Ni(e), 0, [0], e));
}
function ct(e, t, n, r, o, i, a, s, l) {
  for (var u = 0, d = 0, c = a, h = 0, _ = 0, y = 0, w = 1, $ = 1, p = 1, m = 0, k = "", E = o, N = i, C = r, g = k; $; )
    switch (y = m, m = G()) {
      case 40:
        if (y != 108 && A(g, c - 1) == 58) {
          at(g += v(At(m), "&", "&\f"), "&\f", Wr(u ? s[u - 1] : 0)) != -1 && (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        g += At(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        g += Ii(y);
        break;
      case 92:
        g += xi(st() - 1, 7);
        continue;
      case 47:
        switch (he()) {
          case 42:
          case 47:
            He(Pi(Ri(G(), st()), t, n, l), l);
            break;
          default:
            g += "/";
        }
        break;
      case 123 * w:
        s[u++] = Y(g) * p;
      case 125 * w:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            $ = 0;
          case 59 + d:
            p == -1 && (g = v(g, /\f/g, "")), _ > 0 && Y(g) - c && He(_ > 32 ? Zn(g + ";", r, n, c - 1, l) : Zn(v(g, " ", "") + ";", r, n, c - 2, l), l);
            break;
          case 59:
            g += ";";
          default:
            if (He(C = Yn(g, t, n, u, d, o, s, k, E = [], N = [], c, i), i), m === 123)
              if (d === 0)
                ct(g, t, C, C, E, i, c, s, N);
              else
                switch (h === 99 && A(g, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ct(e, C, C, r && He(Yn(e, C, C, 0, 0, o, s, k, o, E = [], c, N), N), o, N, c, s, r ? E : N);
                    break;
                  default:
                    ct(g, C, C, C, [""], N, 0, s, N);
                }
        }
        u = d = _ = 0, w = p = 1, k = g = "", c = a;
        break;
      case 58:
        c = 1 + Y(g), _ = y;
      default:
        if (w < 1) {
          if (m == 123)
            --w;
          else if (m == 125 && w++ == 0 && Oi() == 125)
            continue;
        }
        switch (g += pn(m), m * w) {
          case 38:
            p = d > 0 ? 1 : (g += "\f", -1);
            break;
          case 44:
            s[u++] = (Y(g) - 1) * p, p = 1;
            break;
          case 64:
            he() === 45 && (g += At(G())), h = he(), d = c = Y(k = g += Ai(st())), m++;
            break;
          case 45:
            y === 45 && Y(g) == 2 && (w = 0);
        }
    }
  return i;
}
function Yn(e, t, n, r, o, i, a, s, l, u, d, c) {
  for (var h = o - 1, _ = o === 0 ? i : [""], y = zr(_), w = 0, $ = 0, p = 0; w < r; ++w)
    for (var m = 0, k = Oe(e, h + 1, h = Wr($ = a[w])), E = e; m < y; ++m)
      (E = jr($ > 0 ? _[m] + " " + k : v(k, /&\f/g, _[m]))) && (l[p++] = E);
  return Et(e, t, n, o === 0 ? St : s, l, u, d, c);
}
function Pi(e, t, n, r) {
  return Et(e, t, n, Fr, pn(ki()), Oe(e, 2, -2), 0, r);
}
function Zn(e, t, n, r, o) {
  return Et(e, t, n, hn, Oe(e, 0, r), Oe(e, r + 1, -1), r, o);
}
function Vr(e, t, n) {
  switch (bi(e, t)) {
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
      return O + e + Be + e + T + e + e;
    case 5936:
      switch (A(e, t + 11)) {
        case 114:
          return O + e + T + v(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return O + e + T + v(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return O + e + T + v(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return O + e + T + e + e;
    case 6165:
      return O + e + T + "flex-" + e + e;
    case 5187:
      return O + e + v(e, /(\w+).+(:[^]+)/, O + "box-$1$2" + T + "flex-$1$2") + e;
    case 5443:
      return O + e + T + "flex-item-" + v(e, /flex-|-self/g, "") + (K(e, /flex-|baseline/) ? "" : T + "grid-row-" + v(e, /flex-|-self/g, "")) + e;
    case 4675:
      return O + e + T + "flex-line-pack" + v(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return O + e + T + v(e, "shrink", "negative") + e;
    case 5292:
      return O + e + T + v(e, "basis", "preferred-size") + e;
    case 6060:
      return O + "box-" + v(e, "-grow", "") + O + e + T + v(e, "grow", "positive") + e;
    case 4554:
      return O + v(e, /([^-])(transform)/g, "$1" + O + "$2") + e;
    case 6187:
      return v(v(v(e, /(zoom-|grab)/, O + "$1"), /(image-set)/, O + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return v(e, /(image-set\([^]*)/, O + "$1$`$1");
    case 4968:
      return v(v(e, /(.+:)(flex-)?(.*)/, O + "box-pack:$3" + T + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + O + e + e;
    case 4200:
      if (!K(e, /flex-|baseline/)) return T + "grid-column-align" + Oe(e, t) + e;
      break;
    case 2592:
    case 3360:
      return T + v(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, K(r.props, /grid-\w+-end/);
      }) ? ~at(e + (n = n[t].value), "span", 0) ? e : T + v(e, "-start", "") + e + T + "grid-row-span:" + (~at(n, "span", 0) ? K(n, /\d+/) : +K(n, /\d+/) - +K(e, /\d+/)) + ";" : T + v(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return K(r.props, /grid-\w+-start/);
      }) ? e : T + v(v(e, "-end", "-span"), "span ", "") + e;
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
            return ~at(e, "stretch", 0) ? Vr(v(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return v(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, a, s, l, u) {
        return T + o + ":" + i + u + (a ? T + o + "-span:" + (s ? l : +l - +i) + u : "") + e;
      });
    case 4949:
      if (A(e, t + 6) === 121)
        return v(e, ":", ":" + O) + e;
      break;
    case 6444:
      switch (A(e, A(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return v(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + O + (A(e, 14) === 45 ? "inline-" : "") + "box$3$1" + O + "$2$3$1" + T + "$2box$3") + e;
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
function ht(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Di(e, t, n, r) {
  switch (e.type) {
    case Ei:
      if (e.children.length) break;
    case wi:
    case hn:
      return e.return = e.return || e.value;
    case Fr:
      return "";
    case Br:
      return e.return = e.value + "{" + ht(e.children, r) + "}";
    case St:
      if (!Y(e.value = e.props.join(","))) return "";
  }
  return Y(n = ht(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Mi(e) {
  var t = zr(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function Hi(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Ui(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case hn:
        e.return = Vr(e.value, e.length, n);
        return;
      case Br:
        return ht([ie(e, { value: v(e.value, "@", "@" + O) })], r);
      case St:
        if (e.length)
          return $i(n = e.props, function(o) {
            switch (K(o, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Ee(ie(e, { props: [v(o, /:(read-\w+)/, ":" + Be + "$1")] })), Ee(ie(e, { props: [o] })), Gt(e, { props: Vn(n, r) });
                break;
              case "::placeholder":
                Ee(ie(e, { props: [v(o, /:(plac\w+)/, ":" + O + "input-$1")] })), Ee(ie(e, { props: [v(o, /:(plac\w+)/, ":" + Be + "$1")] })), Ee(ie(e, { props: [v(o, /:(plac\w+)/, T + "input-$1")] })), Ee(ie(e, { props: [o] })), Gt(e, { props: Vn(n, r) });
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
}, b = {}, ye = typeof process < "u" && b !== void 0 && (b.REACT_APP_SC_ATTR || b.SC_ATTR) || "data-styled", Yr = "active", Zr = "data-styled-version", $t = "6.1.11", mn = `/*!sc*/
`, gn = typeof window < "u" && "HTMLElement" in window, Bi = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && b !== void 0 && b.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && b.REACT_APP_SC_DISABLE_SPEEDY !== "" ? b.REACT_APP_SC_DISABLE_SPEEDY !== "false" && b.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && b !== void 0 && b.SC_DISABLE_SPEEDY !== void 0 && b.SC_DISABLE_SPEEDY !== "" ? b.SC_DISABLE_SPEEDY !== "false" && b.SC_DISABLE_SPEEDY : b.NODE_ENV !== "production"), qn = /invalid hook call/i, et = /* @__PURE__ */ new Set(), Wi = function(e, t) {
  if (b.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(a) {
        for (var s = [], l = 1; l < arguments.length; l++) s[l - 1] = arguments[l];
        qn.test(a) ? (i = !1, et.delete(r)) : o.apply(void 0, ge([a], s, !1));
      }, vt(), i && !et.has(r) && (console.warn(r), et.add(r));
    } catch (a) {
      qn.test(a.message) && et.delete(r);
    } finally {
      console.error = o;
    }
  }
}, kt = Object.freeze([]), Te = Object.freeze({});
function ji(e, t, n) {
  return n === void 0 && (n = Te), e.theme !== n.theme && e.theme || t || n.theme;
}
var Zt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), zi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Gi = /(^-|-$)/g;
function Xn(e) {
  return e.replace(zi, "-").replace(Gi, "");
}
var Vi = /(a)(d)/gi, tt = 52, Kn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function qt(e) {
  var t, n = "";
  for (t = Math.abs(e); t > tt; t = t / tt | 0) n = Kn(t % tt) + n;
  return (Kn(t % tt) + n).replace(Vi, "$1-$2");
}
var Lt, qr = 5381, fe = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Xr = function(e) {
  return fe(qr, e);
};
function Kr(e) {
  return qt(Xr(e) >>> 0);
}
function Qr(e) {
  return b.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Pt(e) {
  return typeof e == "string" && (b.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Jr = typeof Symbol == "function" && Symbol.for, eo = Jr ? Symbol.for("react.memo") : 60115, Yi = Jr ? Symbol.for("react.forward_ref") : 60112, Zi = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, qi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, to = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Xi = ((Lt = {})[Yi] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Lt[eo] = to, Lt);
function Qn(e) {
  return ("type" in (t = e) && t.type.$$typeof) === eo ? to : "$$typeof" in e ? Xi[e.$$typeof] : Zi;
  var t;
}
var Ki = Object.defineProperty, Qi = Object.getOwnPropertyNames, Jn = Object.getOwnPropertySymbols, Ji = Object.getOwnPropertyDescriptor, ea = Object.getPrototypeOf, er = Object.prototype;
function no(e, t, n) {
  if (typeof t != "string") {
    if (er) {
      var r = ea(t);
      r && r !== er && no(e, r, n);
    }
    var o = Qi(t);
    Jn && (o = o.concat(Jn(t)));
    for (var i = Qn(e), a = Qn(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!(l in qi || n && n[l] || a && l in a || i && l in i)) {
        var u = Ji(t, l);
        try {
          Ki(e, l, u);
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
function Xt(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function Ie(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Kt(e, t, n) {
  if (n === void 0 && (n = !1), !n && !Ie(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = Kt(e[r], t[r]);
  else if (Ie(t)) for (var r in t) e[r] = Kt(e[r], t[r]);
  return e;
}
function vn(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var ta = b.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function na() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(a) {
    n = n.replace(/%[a-z]/, a);
  }), n;
}
function Z(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return b.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(na.apply(void 0, ge([ta[e]], t, !1)).trim());
}
var ra = function() {
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
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, a = o; a < i; a++) n += "".concat(this.tag.getRule(a)).concat(mn);
    return n;
  }, e;
}(), oa = 1 << 30, lt = /* @__PURE__ */ new Map(), pt = /* @__PURE__ */ new Map(), ut = 1, nt = function(e) {
  if (lt.has(e)) return lt.get(e);
  for (; pt.has(ut); ) ut++;
  var t = ut++;
  if (b.NODE_ENV !== "production" && ((0 | t) < 0 || t > oa)) throw Z(16, "".concat(t));
  return lt.set(e, t), pt.set(t, e), t;
}, ia = function(e, t) {
  ut = t + 1, lt.set(e, t), pt.set(t, e);
}, aa = "style[".concat(ye, "][").concat(Zr, '="').concat($t, '"]'), sa = new RegExp("^".concat(ye, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ca = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++) (r = o[i]) && e.registerName(t, r);
}, la = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(mn), o = [], i = 0, a = r.length; i < a; i++) {
    var s = r[i].trim();
    if (s) {
      var l = s.match(sa);
      if (l) {
        var u = 0 | parseInt(l[1], 10), d = l[2];
        u !== 0 && (ia(d, u), ca(e, d, l[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else o.push(s);
    }
  }
};
function ua() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var ro = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(s) {
    var l = Array.from(s.querySelectorAll("style[".concat(ye, "]")));
    return l[l.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ye, Yr), r.setAttribute(Zr, $t);
  var a = ua();
  return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
}, fa = function() {
  function e(t) {
    this.element = ro(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
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
}(), da = function() {
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
}(), _a = function() {
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
}(), tr = gn, ha = { isServer: !gn, useCSSOMInjection: !Bi }, oo = function() {
  function e(t, n, r) {
    t === void 0 && (t = Te), n === void 0 && (n = {});
    var o = this;
    this.options = P(P({}, ha), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && gn && tr && (tr = !1, function(i) {
      for (var a = document.querySelectorAll(aa), s = 0, l = a.length; s < l; s++) {
        var u = a[s];
        u && u.getAttribute(ye) !== Yr && (la(i, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this)), vn(this, function() {
      return function(i) {
        for (var a = i.getTag(), s = a.length, l = "", u = function(c) {
          var h = function(p) {
            return pt.get(p);
          }(c);
          if (h === void 0) return "continue";
          var _ = i.names.get(h), y = a.getGroup(c);
          if (_ === void 0 || y.length === 0) return "continue";
          var w = "".concat(ye, ".g").concat(c, '[id="').concat(h, '"]'), $ = "";
          _ !== void 0 && _.forEach(function(p) {
            p.length > 0 && ($ += "".concat(p, ","));
          }), l += "".concat(y).concat(w, '{content:"').concat($, '"}').concat(mn);
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
      return n.isServer ? new _a(o) : r ? new fa(o) : new da(o);
    }(this.options), new ra(t)));
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
}(), pa = /&/g, ma = /^\s*\/\/.*$/gm;
function io(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = io(n.children, t)), n;
  });
}
function ao(e) {
  var t, n, r, o = e === void 0 ? Te : e, i = o.options, a = i === void 0 ? Te : i, s = o.plugins, l = s === void 0 ? kt : s, u = function(h, _, y) {
    return y.startsWith(n) && y.endsWith(n) && y.replaceAll(n, "").length > 0 ? ".".concat(t) : h;
  }, d = l.slice();
  d.push(function(h) {
    h.type === St && h.value.includes("&") && (h.props[0] = h.props[0].replace(pa, n).replace(r, u));
  }), a.prefix && d.push(Ui), d.push(Di);
  var c = function(h, _, y, w) {
    _ === void 0 && (_ = ""), y === void 0 && (y = ""), w === void 0 && (w = "&"), t = w, n = _, r = new RegExp("\\".concat(n, "\\b"), "g");
    var $ = h.replace(ma, ""), p = Li(y || _ ? "".concat(y, " ").concat(_, " { ").concat($, " }") : $);
    a.namespace && (p = io(p, a.namespace));
    var m = [];
    return ht(p, Mi(d.concat(Hi(function(k) {
      return m.push(k);
    })))), m;
  };
  return c.hash = l.length ? l.reduce(function(h, _) {
    return _.name || Z(15), fe(h, _.name);
  }, qr).toString() : "", c;
}
var ga = new oo(), Qt = ao(), Cn = re.createContext({ shouldForwardProp: void 0, styleSheet: ga, stylis: Qt });
Cn.Consumer;
var ya = re.createContext(void 0);
function Jt() {
  return Ze(Cn);
}
function va(e) {
  var t = M(e.stylisPlugins), n = t[0], r = t[1], o = Jt().styleSheet, i = te(function() {
    var l = o;
    return e.sheet ? l = e.sheet : e.target && (l = l.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (l = l.reconstructWithOptions({ useCSSOMInjection: !1 })), l;
  }, [e.disableCSSOMInjection, e.sheet, e.target, o]), a = te(function() {
    return ao({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: n });
  }, [e.enableVendorPrefixes, e.namespace, n]);
  ne(function() {
    Si(n, e.stylisPlugins) || r(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var s = te(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: a };
  }, [e.shouldForwardProp, i, a]);
  return re.createElement(Cn.Provider, { value: s }, re.createElement(ya.Provider, { value: a }, e.children));
}
var en = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Qt);
      var a = r.name + i.hash;
      o.hasNameForId(r.id, a) || o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, vn(this, function() {
      throw Z(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Qt), this.name + t.hash;
  }, e;
}(), Ca = function(e) {
  return e >= "A" && e <= "Z";
};
function nr(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    Ca(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var so = function(e) {
  return e == null || e === !1 || e === "";
}, co = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !so(i) && (Array.isArray(i) && i.isCss || ve(i) ? r.push("".concat(nr(o), ":"), i, ";") : Ie(i) ? r.push.apply(r, ge(ge(["".concat(o, " {")], co(i), !1), ["}"], !1)) : r.push("".concat(nr(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in Fi || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function pe(e, t, n, r) {
  if (so(e)) return [];
  if (yn(e)) return [".".concat(e.styledComponentId)];
  if (ve(e)) {
    if (!ve(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return b.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof en || Ie(o) || o === null || console.error("".concat(Qr(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), pe(o, t, n, r);
  }
  var i;
  return e instanceof en ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Ie(e) ? co(e) : Array.isArray(e) ? Array.prototype.concat.apply(kt, e.map(function(a) {
    return pe(a, t, n, r);
  })) : [e.toString()];
}
function Sa(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (ve(n) && !yn(n)) return !1;
  }
  return !0;
}
var wa = Xr($t), Ea = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = b.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Sa(t), this.componentId = n, this.baseHash = fe(wa, n), this.baseStyle = r, oo.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = de(o, this.staticRulesId);
    else {
      var i = Xt(pe(this.rules, t, n, r)), a = qt(fe(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, a)) {
        var s = r(i, ".".concat(a), void 0, this.componentId);
        n.insertRules(this.componentId, a, s);
      }
      o = de(o, a), this.staticRulesId = a;
    }
    else {
      for (var l = fe(this.baseHash, r.hash), u = "", d = 0; d < this.rules.length; d++) {
        var c = this.rules[d];
        if (typeof c == "string") u += c, b.NODE_ENV !== "production" && (l = fe(l, c));
        else if (c) {
          var h = Xt(pe(c, t, n, r));
          l = fe(l, h + d), u += h;
        }
      }
      if (u) {
        var _ = qt(l >>> 0);
        n.hasNameForId(this.componentId, _) || n.insertRules(this.componentId, _, r(u, ".".concat(_), void 0, this.componentId)), o = de(o, _);
      }
    }
    return o;
  }, e;
}(), Ge = re.createContext(void 0);
Ge.Consumer;
function ba() {
  var e = Ze(Ge);
  if (!e) throw Z(18);
  return e;
}
function $a(e) {
  var t = re.useContext(Ge), n = te(function() {
    return function(r, o) {
      if (!r) throw Z(14);
      if (ve(r)) {
        var i = r(o);
        if (b.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object")) throw Z(7);
        return i;
      }
      if (Array.isArray(r) || typeof r != "object") throw Z(8);
      return o ? P(P({}, o), r) : r;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? re.createElement(Ge.Provider, { value: n }, e.children) : null;
}
var Dt = {}, rr = /* @__PURE__ */ new Set();
function ka(e, t, n) {
  var r = yn(e), o = e, i = !Pt(e), a = t.attrs, s = a === void 0 ? kt : a, l = t.componentId, u = l === void 0 ? function(E, N) {
    var C = typeof E != "string" ? "sc" : Xn(E);
    Dt[C] = (Dt[C] || 0) + 1;
    var g = "".concat(C, "-").concat(Kr($t + C + Dt[C]));
    return N ? "".concat(N, "-").concat(g) : g;
  }(t.displayName, t.parentComponentId) : l, d = t.displayName, c = d === void 0 ? function(E) {
    return Pt(E) ? "styled.".concat(E) : "Styled(".concat(Qr(E), ")");
  }(e) : d, h = t.displayName && t.componentId ? "".concat(Xn(t.displayName), "-").concat(t.componentId) : t.componentId || u, _ = r && o.attrs ? o.attrs.concat(s).filter(Boolean) : s, y = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var w = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var $ = t.shouldForwardProp;
      y = function(E, N) {
        return w(E, N) && $(E, N);
      };
    } else y = w;
  }
  var p = new Ea(n, h, r ? o.componentStyle : void 0);
  function m(E, N) {
    return function(C, g, U) {
      var V = C.attrs, F = C.componentStyle, Se = C.defaultProps, go = C.foldedComponentIds, wn = C.styledComponentId, yo = C.target, vo = re.useContext(Ge), Co = Jt(), Ot = C.shouldForwardProp || Co.shouldForwardProp;
      b.NODE_ENV !== "production" && _t(wn);
      var En = ji(g, vo, Se) || Te, q = function(qe, Pe, Xe) {
        for (var we, le = P(P({}, Pe), { className: void 0, theme: Xe }), It = 0; It < qe.length; It += 1) {
          var Ke = ve(we = qe[It]) ? we(le) : we;
          for (var oe in Ke) le[oe] = oe === "className" ? de(le[oe], Ke[oe]) : oe === "style" ? P(P({}, le[oe]), Ke[oe]) : Ke[oe];
        }
        return Pe.className && (le.className = de(le.className, Pe.className)), le;
      }(V, g, En), Ae = q.as || yo, Le = {};
      for (var B in q) q[B] === void 0 || B[0] === "$" || B === "as" || B === "theme" && q.theme === En || (B === "forwardedAs" ? Le.as = q.forwardedAs : Ot && !Ot(B, Ae) || (Le[B] = q[B], Ot || b.NODE_ENV !== "development" || Bo(B) || rr.has(B) || !Zt.has(Ae) || (rr.add(B), console.warn('styled-components: it looks like an unknown prop "'.concat(B, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Nt = function(qe, Pe) {
        var Xe = Jt(), we = qe.generateAndInjectStyles(Pe, Xe.styleSheet, Xe.stylis);
        return b.NODE_ENV !== "production" && _t(we), we;
      }(F, q);
      b.NODE_ENV !== "production" && C.warnTooManyClasses && C.warnTooManyClasses(Nt);
      var Tt = de(go, wn);
      return Nt && (Tt += " " + Nt), q.className && (Tt += " " + q.className), Le[Pt(Ae) && !Zt.has(Ae) ? "class" : "className"] = Tt, Le.ref = U, D(Ae, Le);
    }(k, E, N);
  }
  m.displayName = c;
  var k = re.forwardRef(m);
  return k.attrs = _, k.componentStyle = p, k.displayName = c, k.shouldForwardProp = y, k.foldedComponentIds = r ? de(o.foldedComponentIds, o.styledComponentId) : "", k.styledComponentId = h, k.target = r ? o.target : e, Object.defineProperty(k, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = r ? function(N) {
      for (var C = [], g = 1; g < arguments.length; g++) C[g - 1] = arguments[g];
      for (var U = 0, V = C; U < V.length; U++) Kt(N, V[U], !0);
      return N;
    }({}, o.defaultProps, E) : E;
  } }), b.NODE_ENV !== "production" && (Wi(c, h), k.warnTooManyClasses = /* @__PURE__ */ function(E, N) {
    var C = {}, g = !1;
    return function(U) {
      if (!g && (C[U] = !0, Object.keys(C).length >= 200)) {
        var V = N ? ' with the id of "'.concat(N, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(E).concat(V, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), g = !0, C = {};
      }
    };
  }(c, h)), vn(k, function() {
    return ".".concat(k.styledComponentId);
  }), i && no(k, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), k;
}
function or(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var ir = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Sn(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (ve(e) || Ie(e)) return ir(pe(or(kt, ge([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? pe(r) : ir(pe(or(r, t)));
}
function tn(e, t, n) {
  if (n === void 0 && (n = Te), !t) throw Z(1, t);
  var r = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
    return e(t, n, Sn.apply(void 0, ge([o], i, !1)));
  };
  return r.attrs = function(o) {
    return tn(e, t, P(P({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return tn(e, t, P(P({}, n), o));
  }, r;
}
var lo = function(e) {
  return tn(ka, e);
}, H = lo;
Zt.forEach(function(e) {
  H[e] = lo(e);
});
function ce(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  b.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = Xt(Sn.apply(void 0, ge([e], t, !1))), o = Kr(r);
  return new en(o, r);
}
b.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var rt = "__sc-".concat(ye, "__");
b.NODE_ENV !== "production" && b.NODE_ENV !== "test" && typeof window < "u" && (window[rt] || (window[rt] = 0), window[rt] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[rt] += 1);
const X = {
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
}, uo = 14, Oa = 0.0276;
var Q = /* @__PURE__ */ ((e) => (e[e.S = 300] = "S", e[e.M = 400] = "M", e[e.L = 500] = "L", e[e.Default = 600] = "Default", e))(Q || {});
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
}, ar = {
  loading: { text: "Loading. Please wait.", visible: !0 },
  done: { text: "Waiting for input...", visible: !0 }
}, Na = {
  [L.CANDIDATE_SELECTION]: "Stay still…",
  [L.FACE_TOO_CLOSE]: "Move back",
  [L.FACE_TOO_FAR]: "Move closer",
  [L.FACE_CENTERING]: "Center your face",
  [L.FACE_NOT_PRESENT]: "Position your face into the circle",
  [L.SHARPNESS_TOO_LOW]: "Turn face against light",
  [L.BRIGHTNESS_TOO_LOW]: "Turn face against light",
  [L.BRIGHTNESS_TOO_HIGH]: "Less light needed",
  [L.DEVICE_PITCHED]: "Hold your phone at eye level",
  [L.LEFT_EYE_NOT_PRESENT]: "Position your face into the circle",
  [L.RIGHT_EYE_NOT_PRESENT]: "Position your face into the circle",
  [L.MOUTH_SCORE_TOO_HIGH]: "Keep neutral expression",
  [L.MOUTH_SCORE_TOO_LOW]: "Smile :)",
  [L.MOUTH_NOT_PRESENT]: "Position your face into the circle"
}, Ta = {
  ...Na,
  [_e.SMILE]: "Smile :)",
  [_e.SMILE_CANDIDATE_SELECTION]: "Smile :)",
  [_e.KEEP_NEUTRAL_EXPRESSION]: "Keep neutral expression"
}, Ia = "rgba(19, 19, 19, 0.5)", xa = 34;
function sr(e, t) {
  return Math.max(t, t + (e - 400) * Oa + 2);
}
const Ra = (e, t = uo) => e ? e.width < e.height ? sr(e.width, t) : sr(e.height, t) : t, Aa = (e) => e > Q.Default ? Ue[Q.Default] : e > Q.L ? Ue[Q.L] : e > Q.M ? Ue[Q.M] : Ue[Q.S], La = (e) => e ? Aa(e.width) : Ue[Q.Default];
function Pa() {
  const e = "https://fonts.googleapis.com/css?family=Montserrat:600";
  if (!document.querySelector(`link[href="${e}"]`)) {
    const n = document.createElement("link");
    n.href = e, n.rel = "stylesheet", document.head.appendChild(n);
  }
}
const We = Er(void 0);
We.displayName = "UiCustomizationContext";
function Ce() {
  const e = Ze(We);
  if (!e)
    throw new Error(
      `${We.displayName} must be used within a ${We.displayName} Provider`
    );
  return e;
}
function Da({ children: e, props: t, videoElementSize: n }) {
  const { font: r } = ba(), o = te(
    () => ({ ...t, videoElementSize: n, fontSize: Ra(n, r.minimumSize) }),
    [t, r.minimumSize, n]
  );
  return /* @__PURE__ */ f(We.Provider, { value: o, children: e });
}
const fo = ({ svgSize: e }) => /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 16 14", width: e, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
  "path",
  {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), Ma = H.div`
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
`, Ha = H.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, Ua = H.p`
  background: ${(e) => e.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(e) => `${e.$fontSize}px`};
  line-height: 1em;
  max-width: 80%;
`, nn = ({ Icon: e, isCameraReady: t, position: n = "absolute", text: r }) => {
  const { fontSize: o } = Ce();
  return /* @__PURE__ */ f(Ma, { $isCameraReady: t, $position: n, children: /* @__PURE__ */ f(Ha, { children: [
    e ? /* @__PURE__ */ f(e, { svgSize: o * 2 }) : null,
    /* @__PURE__ */ f(Ua, { $fontSize: o, children: r })
  ] }) });
}, _o = ({ text: e = "An unknown error has occurred" }) => /* @__PURE__ */ f(nn, { Icon: fo, position: "relative", text: e });
class Fa extends z {
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
    return this.state.hasError ? /* @__PURE__ */ f(_o, { Icon: fo, isCameraReady: !1 }) : this.props.children;
  }
}
const Ba = H.div`
  font-family: ${(e) => e.theme.font.family};
  font-style: ${(e) => e.theme.font.style};
  font-weight: ${(e) => e.theme.font.weight};
`, Wa = ({ children: e, uiProps: t, videoElementSize: n }) => (ne(() => {
  Pa();
}, []), /* @__PURE__ */ f(va, { target: t.styleTarget, children: /* @__PURE__ */ f($a, { theme: t.theme, children: /* @__PURE__ */ f(Ba, { children: /* @__PURE__ */ f(Fa, { videoElementSize: n, children: /* @__PURE__ */ f(Da, { props: t, videoElementSize: n, children: e }) }) }) }) })), ja = 0.75, za = "dot-auto-capture-video", mt = (e, t) => {
  const n = vt(t);
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
function Ga(e) {
  const [t, n] = M(), r = ke(
    (o) => {
      var i;
      n((i = o.detail) == null ? void 0 : i.size);
    },
    [n]
  );
  if (mt(e, r), !t) {
    const o = document.getElementById(za);
    o && n(o.getBoundingClientRect());
  }
  return t;
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
  minimumSize: uo
}, De = {
  colors: Ya,
  font: Za
}, qa = (e) => {
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
      family: Va((t = e.font) == null ? void 0 : t.family, De.font.family)
    }
  } : De;
}, Xa = (e, t) => Math.min(e, t), Ka = ({ height: e, width: t }, n) => {
  const r = Xa(t, e) * n, o = (t - r) / 2, i = (e - r) / 2;
  return {
    shiftX: o,
    shiftY: i,
    width: r,
    height: r
  };
}, Qa = (e, t) => {
  const { height: n, shiftX: r, shiftY: o, width: i } = Ka(e, t);
  return {
    shiftX: r / e.width,
    shiftY: o / e.height,
    width: i / e.width,
    height: n / e.height
  };
}, Ja = (e) => Qa(e, ja), ho = (e, t) => {
  document.dispatchEvent(
    new CustomEvent(e, {
      detail: t
    })
  );
}, gt = class gt {
  constructor() {
    Qe(this, "lastDetails", {});
    Qe(this, "delayedTime", 0);
  }
  static getInstance() {
    return this._instance || (this._instance = new gt()), this._instance;
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
    this.isDetailChanged(t, n) && ho(t, n);
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
Qe(gt, "_instance");
let rn = gt;
rn.getInstance();
const cr = (e, t) => {
  ho(e, {
    instruction: t
  });
};
async function es() {
  return navigator.mediaDevices.enumerateDevices();
}
async function ts() {
  return (await es()).filter((t) => t.kind === "videoinput");
}
const ns = () => {
  const [e, t] = M(!1);
  return ne(() => {
    (async () => {
      (await ts()).length > 1 && t(!0);
    })();
  }, []), e;
}, rs = ({ size: e }) => /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }), os = ({ size: e }) => /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: "52", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ f("circle", { cx: "26", cy: "26", fill: "#131313", fillOpacity: "0.3", r: "26" }),
  /* @__PURE__ */ f(
    "path",
    {
      d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
      fill: "white"
    }
  )
] }), po = H.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(e) => e.$marginLeft ? `${e.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, is = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ f(po, { $marginLeft: e, ...n, children: /* @__PURE__ */ f(rs, { size: t }) }), as = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ f(po, { $marginLeft: e, ...n, children: /* @__PURE__ */ f(os, { size: t }) }), ss = H.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.$padding}px`};
  z-index: 2;
`, cs = ({
  customControlEvent: e,
  isSwitchCameraDisabled: t
}) => {
  const { showCameraButtons: n, videoElementSize: r } = Ce(), o = ns();
  if (!n)
    return null;
  const { buttonPadding: i, iconSize: a, marginLeft: s } = La(r);
  return /* @__PURE__ */ f(ss, { $padding: i, children: [
    o && /* @__PURE__ */ f(as, { disabled: t, onClick: () => {
      cr(e, Nn.SWITCH_CAMERA);
    }, size: a }),
    /* @__PURE__ */ f(
      is,
      {
        marginLeft: o ? s : 0,
        onClick: () => {
          cr(e, Nn.TOGGLE_MIRROR);
        },
        size: a
      }
    )
  ] });
}, ls = "2.5s", us = "0.3s", fs = "linear", ds = ce`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
ce`
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`;
ce`
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
ce`
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
const _s = H.div`
  position: absolute;
  left: 50%;

  ${(e) => e.$cssTop ? `top: ${e.$cssTop}%;` : ""}
  ${(e) => e.$cssBottom ? `bottom: ${e.$cssBottom}%;` : ""}
    ${(e) => e.$isAnimating && Sn`
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
`, hs = H.div`
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
  const { fontSize: a } = Ce();
  return /* @__PURE__ */ f(_s, { $cssBottom: t, $cssTop: n, $isAnimating: r, $isPortrait: i, children: /* @__PURE__ */ f(
    hs,
    {
      $fontSize: a,
      $isInCandidateSelection: o,
      $wrap: e.length > xa,
      children: e
    }
  ) });
}, ms = H.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, gs = ({ svgSize: e }) => /* @__PURE__ */ f(ms, { children: /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 48 48", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }) }), ys = H.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`, mo = ({ children: e, height: t, width: n }) => {
  const { backdropColor: r } = Ce();
  return /* @__PURE__ */ f(ys, { children: /* @__PURE__ */ f("svg", { viewBox: `0 0 ${n} ${t}`, children: [
    /* @__PURE__ */ f("defs", { children: /* @__PURE__ */ f("mask", { id: "mask", children: [
      /* @__PURE__ */ f("rect", { fill: "#fff", height: "100%", width: "100%" }),
      e
    ] }) }),
    /* @__PURE__ */ f("rect", { fill: r, height: "100%", mask: "url(#mask)", width: "100%" })
  ] }) });
};
function vs({
  cameraHeight: e,
  cameraWidth: t,
  state: n
}) {
  const { appStateInstructions: r } = Ce();
  return !n || n === "ERROR" || !(r != null && r[n].visible) ? null : n === "DONE" ? /* @__PURE__ */ f(W, { children: [
    e && t && /* @__PURE__ */ f(mo, { height: e, width: t }),
    /* @__PURE__ */ f(nn, { isCameraReady: !0, text: r[n].text })
  ] }) : /* @__PURE__ */ f(nn, { Icon: gs, isCameraReady: !0, text: r[n].text });
}
function Cs(e) {
  return /* @__PURE__ */ f("rect", { fill: "#000", ...e, rx: "50%" });
}
const Ss = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
  "path",
  {
    d: "M2 240C2 108.556 108.556 2 240 2C371.444 2 478 108.556 478 240C478 371.444 371.444 478 240 478C108.556 478 2 371.444 2 240Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  }
) }), ws = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
  "path",
  {
    d: "M38.9231 240C38.9231 108.23 129.248 2 240 2C350.752 2 441.077 108.23 441.077 240C441.077 371.77 350.752 478 240 478C129.248 478 38.9231 371.77 38.9231 240Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  }
) }), Es = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
  "path",
  {
    clipRule: "evenodd",
    d: "M123.592 81.0326C143.203 50.4946 180.289 34 240 34C299.711 34 336.797 50.4946 356.408 81.0326C375.742 111.138 377.681 154.313 368.661 207.051C371.545 208.577 374.834 210.748 377.278 215.028C380.075 219.925 381.612 227.297 380.77 239.048C379.202 260.93 372.883 270.75 366.157 276.198C363.521 278.333 360.842 279.765 358.659 280.932C358.141 281.209 357.651 281.471 357.196 281.724C354.727 283.097 353.459 284.114 352.94 285.588C346.115 312.745 335.656 325.235 326.992 335.581C325.711 337.111 324.469 338.595 323.283 340.072C318.736 345.738 315.077 351.244 313.058 359.018C311.036 366.806 310.62 377.042 312.887 392.189C323.28 427.534 349.601 445.607 379.548 458.155C380.567 458.582 381.047 459.754 380.62 460.773C380.193 461.792 379.021 462.271 378.002 461.845C347.548 449.083 319.871 430.304 309.01 393.182L308.972 393.052L308.952 392.918C306.617 377.396 306.974 366.534 309.187 358.012C311.409 349.454 315.459 343.431 320.164 337.568C321.377 336.057 322.636 334.552 323.926 333.011C332.525 322.737 342.484 310.837 349.08 284.533L349.099 284.458L349.124 284.385C350.161 281.284 352.747 279.621 355.253 278.228C355.794 277.927 356.344 277.632 356.902 277.333C359.061 276.176 361.329 274.961 363.639 273.09C369.248 268.547 375.264 259.921 376.78 238.762C377.594 227.404 376.048 220.94 373.805 217.012C371.594 213.141 368.56 211.453 365.547 209.952L364.214 209.287L364.469 207.818C373.737 154.637 371.701 112.248 353.043 83.194C334.485 54.2962 299.065 38 240 38C180.935 38 145.516 54.2962 126.958 83.194C108.3 112.248 106.264 154.637 115.531 207.818L115.787 209.287L114.453 209.952C111.441 211.453 108.406 213.141 106.196 217.012C103.953 220.94 102.406 227.404 103.22 238.762C104.736 259.921 110.753 268.547 116.361 273.09C118.672 274.961 120.94 276.176 123.099 277.333C123.656 277.632 124.206 277.927 124.748 278.228C127.254 279.621 129.84 281.284 130.877 284.385L130.901 284.458L130.92 284.533C137.517 310.837 147.476 322.737 156.074 333.011C157.364 334.552 158.624 336.057 159.837 337.568C164.542 343.431 168.592 349.454 170.814 358.012C173.026 366.534 173.384 377.396 171.048 392.918L171.028 393.052L170.99 393.182C160.129 430.304 132.452 449.083 101.998 461.845C100.979 462.271 99.8075 461.792 99.3806 460.773C98.9537 459.754 99.4335 458.582 100.452 458.155C130.399 445.607 156.721 427.534 167.113 392.189C169.381 377.042 168.964 366.806 166.942 359.018C164.924 351.244 161.264 345.738 156.717 340.072C155.532 338.595 154.29 337.111 153.008 335.581C144.345 325.235 133.886 312.745 127.061 285.588C126.541 284.114 125.273 283.097 122.804 281.724C122.349 281.471 121.859 281.209 121.341 280.932C119.159 279.765 116.479 278.333 113.844 276.198C107.117 270.75 100.798 260.93 99.2303 239.048C98.3883 227.297 99.9259 219.925 102.722 215.028C105.166 210.748 108.455 208.577 111.339 207.051C102.319 154.313 104.259 111.138 123.592 81.0326Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), bs = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
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
) }), $s = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
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
) }), ks = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f("rect", { height: "476", rx: "14", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "4", width: "476", x: "2", y: "2" }) }), Os = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f("rect", { height: "476", rx: "2", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "4", width: "476", x: "2", y: "2" }) }), Ns = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
  "path",
  {
    clipRule: "evenodd",
    d: "M126.126 87.8654C147.739 56.7835 184.591 34.0001 239.665 34.0001C239.779 34.0001 239.891 34.0096 240 34.0279C240.109 34.0096 240.221 34.0001 240.335 34.0001C295.41 34.0001 332.261 56.7835 353.874 87.8654C375.428 118.862 381.724 157.957 376.086 190.544C373.539 205.262 371.039 233.823 376.056 253.971C380.828 273.135 387.879 290.154 393.431 303.54L393.491 303.685C396.23 310.287 398.627 316.064 400.16 320.726C400.933 323.077 401.511 325.214 401.797 327.079C402.073 328.879 402.11 330.618 401.637 332.107C399.79 339.478 396.615 344.943 392.398 348.881C388.174 352.825 383.031 355.122 377.446 356.355C366.388 358.799 353.231 357.133 341.237 355.551C340.93 355.51 340.623 355.47 340.317 355.43C334.586 354.672 329.126 353.951 324.151 353.668C318.894 353.368 314.374 353.574 310.799 354.649C307.298 355.702 304.789 357.558 303.304 360.596C301.785 363.704 301.203 368.322 302.207 375.153C309.297 399.432 323.779 413.44 341.432 422.745C356.457 430.665 373.692 435.144 390.741 439.575C393.916 440.401 397.085 441.224 400.232 442.068C401.298 442.354 401.931 443.451 401.645 444.518C401.359 445.585 400.262 446.218 399.196 445.932C396.115 445.106 392.991 444.294 389.842 443.477C372.804 439.052 355.041 434.44 339.567 426.283C321.093 416.546 305.757 401.713 298.328 376.139L298.29 376.01L298.271 375.877C297.181 368.587 297.678 362.998 299.71 358.839C301.787 354.59 305.326 352.119 309.647 350.819C313.895 349.541 318.973 349.366 324.378 349.674C329.508 349.966 335.107 350.706 340.788 351.457C341.112 351.5 341.436 351.543 341.76 351.585C353.925 353.19 366.342 354.713 376.583 352.45C381.65 351.33 386.088 349.3 389.668 345.957C393.241 342.621 396.083 337.86 397.773 331.072L397.791 330.998L397.815 330.925C398.022 330.302 398.087 329.272 397.843 327.686C397.605 326.133 397.102 324.232 396.36 321.976C394.875 317.458 392.525 311.794 389.74 305.081L389.737 305.073C384.19 291.701 377.028 274.428 372.174 254.937C366.952 233.964 369.571 204.733 372.144 189.862C377.623 158.197 371.48 120.191 350.59 90.149C329.759 60.1924 294.162 38.0001 240.335 38.0001C240.221 38.0001 240.109 37.9905 240 37.9722C239.891 37.9905 239.779 38.0001 239.665 38.0001C185.838 38.0001 150.241 60.1924 129.41 90.149C108.52 120.191 102.377 158.197 107.856 189.862C110.429 204.733 113.048 233.964 107.826 254.937C102.972 274.428 95.8101 291.701 90.2633 305.073L90.2607 305.079C87.4756 311.793 85.1256 317.458 83.6398 321.976C82.8977 324.232 82.3951 326.133 82.1567 327.686C81.9133 329.272 81.9778 330.302 82.1847 330.925L82.2088 330.998L82.2273 331.072C83.9176 337.86 86.7592 342.621 90.3324 345.957C93.9121 349.3 98.3505 351.33 103.417 352.45C113.658 354.713 126.075 353.19 138.24 351.585C138.564 351.543 138.888 351.5 139.212 351.457C144.893 350.706 150.492 349.966 155.622 349.674C161.027 349.366 166.105 349.541 170.353 350.819C174.674 352.119 178.213 354.59 180.29 358.839C182.323 362.998 182.819 368.587 181.73 375.877L181.71 376.01L181.672 376.139C174.243 401.713 158.907 416.546 140.433 426.283C124.959 434.44 107.196 439.052 90.1584 443.477C87.0093 444.294 83.8851 445.106 80.8046 445.932C79.7377 446.218 78.6409 445.585 78.3548 444.518C78.0687 443.451 78.7017 442.354 79.7685 442.068C82.9154 441.224 86.0842 440.401 89.2594 439.575C106.308 435.144 123.543 430.665 138.568 422.745C156.221 413.44 170.703 399.432 177.793 375.153C178.797 368.322 178.215 363.704 176.696 360.596C175.211 357.558 172.702 355.702 169.201 354.649C165.626 353.574 161.106 353.368 155.849 353.668C150.874 353.951 145.414 354.672 139.683 355.43C139.377 355.47 139.07 355.51 138.763 355.551C126.769 357.133 113.613 358.799 102.554 356.355C96.9695 355.122 91.8259 352.825 87.6024 348.881C83.3855 344.943 80.2095 339.478 78.3628 332.107C77.8896 330.618 77.9268 328.879 78.203 327.079C78.4892 325.214 79.0667 323.077 79.84 320.726C81.3732 316.064 83.7701 310.286 86.5089 303.684L86.5686 303.54C92.1215 290.154 99.1722 273.135 103.944 253.971C108.961 233.823 106.461 205.262 103.914 190.544C98.2759 157.957 104.572 118.862 126.126 87.8654Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), Ts = H.div`
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
`, Is = ({
  children: e,
  className: t,
  isInCandidateSelection: n,
  onAnimationEnd: r,
  placeholderRectangle: o
}) => /* @__PURE__ */ f(
  Ts,
  {
    $isInCandidateSelection: n,
    $placeholderRectangle: o,
    className: t,
    onAnimationEnd: r,
    children: e
  }
), xs = {
  [X.CIRCLE_SOLID]: /* @__PURE__ */ f(Ss, {}),
  [X.ELLIPSE_SOLID]: /* @__PURE__ */ f(ws, {}),
  [X.MAN_SOLID]: /* @__PURE__ */ f(Es, {}),
  [X.WOMAN_SOLID]: /* @__PURE__ */ f(Ns, {}),
  [X.SQUARE_ROUNDED_DASH]: /* @__PURE__ */ f($s, {}),
  [X.SQUARE_ROUNDED_SOLID]: /* @__PURE__ */ f(ks, {}),
  [X.SQUARE_DASH]: /* @__PURE__ */ f(bs, {}),
  [X.SQUARE_SOLID]: /* @__PURE__ */ f(Os, {})
}, Rs = ({ backdropHeight: e, backdropWidth: t, isBackdrop: n, placeholderRectangle: r, ...o }) => {
  const { placeholder: i } = Ce();
  return /* @__PURE__ */ f(W, { children: [
    n && /* @__PURE__ */ f(mo, { height: e, width: t, children: /* @__PURE__ */ f(
      Cs,
      {
        height: `${r.height * 100}%`,
        width: `${r.width * 100}%`,
        x: `${r.shiftX * 100}%`,
        y: `${r.shiftY * 100}%`
      }
    ) }),
    /* @__PURE__ */ f(Is, { placeholderRectangle: r, ...o, children: xs[i] })
  ] });
}, As = () => {
  const [e, t] = M(), [n, r] = M(!1), o = ke(
    (l) => {
      var d, c;
      t((d = l == null ? void 0 : l.detail) == null ? void 0 : d.cameraResolution);
      const u = (c = l == null ? void 0 : l.detail) == null ? void 0 : c.isMirroring;
      u !== void 0 && r(u);
    },
    [t]
  );
  mt(ze.CAMERA_PROPS_CHANGED, o);
  const [i, a] = M(
    L.FACE_NOT_PRESENT
    // FIXME Default instruction should not be here
  ), s = ke(
    (l) => {
      var u;
      a((u = l == null ? void 0 : l.detail) == null ? void 0 : u.instructionCode);
    },
    [a]
  );
  return mt(ze.INSTRUCTION_CHANGED, s), {
    cameraResolution: e,
    instructionCode: i,
    isMirroring: n
  };
}, Ls = () => {
  const [e, t] = M(dt.NEUTRAL), [n, r] = M(be.LOADING), [o, i] = M(), a = ke(
    (s) => {
      const { error: l, phase: u, state: d } = s.detail || {};
      u && t(u), d && r(d), l && i(l);
    },
    [t, r, i]
  );
  return mt($r.STATUS_CHANGED, a), {
    smilePhase: e,
    smileState: n,
    smileError: o
  };
}, lr = ".3s", Ps = ".2s", Ds = ".8s", ur = ".4s", fr = ".4s", Ms = ".5s", Hs = "1.5s", Us = 2e3, dr = ce`
0%, 100% {
    transform: scale(1);
}
50% {
    transform: scale(2);
}
`, Fs = ce`
0%, 100% {
    transform: scale(1,1);
    opacity: 1;
}
50% {
    transform: scale(1,0.1);
    opacity: 0.5;
}
`, _r = ce`
0% {
    stroke-dashoffset: 100;
}
100% {
    stroke-dashoffset: 200;
}
`, Bs = ce`
 from {
    opacity: 1;
}
to {
    opacity: 0;
}
`, Ws = (e, t) => {
  const [n, r] = M(!1);
  return ne(() => {
    t === dt.SMILE && r(!0);
    const o = setTimeout(() => {
      r(!1);
    }, Us);
    return () => clearTimeout(o);
  }, [t]), t === dt.SMILE && e === _e.CANDIDATE_SELECTION ? _e.SMILE_CANDIDATE_SELECTION : n ? _e.SMILE : e;
}, js = H.div`
  position: absolute;
  top: ${(e) => e.$initialPosition.shiftY * 100}%;
  bottom: ${(e) => (1 - e.$initialPosition.shiftY - e.$initialPosition.height) * 100}%;
  left: ${(e) => e.$initialPosition.shiftX * 100}%;
  right: ${(e) => (1 - e.$initialPosition.shiftX - e.$initialPosition.width) * 100}%;
  animation: ${Bs} ${Ms} ${Hs} ease-in-out;
  animation-fill-mode: forwards;
  z-index: 1;

  #left-mouth {
    fill: none;
    stroke: #ffffff;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: ${_r} ${ur} ${fr} forwards;
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
    animation: ${_r} ${ur} ${fr} forwards;
  }
  #left-eye {
    transform-origin: 86.8px 96px;
    fill: #ffffff;
    animation: ${dr} ${lr} forwards;
  }
  #right-eye {
    transform-origin: 173.2px 96px;
    fill: #ffffff;
    animation:
      ${dr} ${lr} forwards,
      ${Fs} ${Ps} ${Ds} forwards;
  }
`, zs = ({ initialPosition: e }) => /* @__PURE__ */ f(js, { $initialPosition: e, children: /* @__PURE__ */ f("svg", { viewBox: "0 0 260 260", children: [
  /* @__PURE__ */ f("circle", { cx: "86.8", cy: "96", id: "left-eye", r: "9.6" }),
  /* @__PURE__ */ f("circle", { cx: "173.2", cy: "96", id: "right-eye", r: "9.6" }),
  /* @__PURE__ */ f("path", { d: "M62.8,156.3c0,0,20.4,35.4,66.6,35.4", id: "left-mouth" }),
  /* @__PURE__ */ f("path", { d: "M42.8,156.3c0,0,20.4,35.4,66.6,35.4", id: "right-mouth" })
] }) }), Gs = () => {
  const { cameraResolution: e, instructionCode: t } = As(), { smileError: n, smilePhase: r, smileState: o } = Ls(), i = Ws(t, r), { instructions: a } = Ce(), s = t === _e.CANDIDATE_SELECTION, l = r === dt.SMILE;
  if (o === be.ERROR)
    return /* @__PURE__ */ f(_o, { text: n == null ? void 0 : n.message });
  if ((o === be.RUNNING || o === be.WAITING) && e) {
    const u = Ja(e);
    return /* @__PURE__ */ f(W, { children: [
      /* @__PURE__ */ f(
        Rs,
        {
          backdropHeight: e.height,
          backdropWidth: e.width,
          isBackdrop: !0,
          isInCandidateSelection: s,
          placeholderRectangle: u
        }
      ),
      l && /* @__PURE__ */ f(zs, { initialPosition: u }),
      i && /* @__PURE__ */ f(
        ps,
        {
          cssBottom: (u.height + u.shiftY) * 100,
          isAnimating: !1,
          isInCandidateSelection: s,
          isPortrait: e.width < e.height,
          children: a[i]
        }
      ),
      /* @__PURE__ */ f(cs, { customControlEvent: ze.CONTROL, isSwitchCameraDisabled: s })
    ] });
  }
  return /* @__PURE__ */ f(
    vs,
    {
      cameraHeight: e == null ? void 0 : e.height,
      cameraWidth: e == null ? void 0 : e.width,
      state: o
    }
  );
}, Vs = (e) => {
  var a, s;
  const t = {
    ...Ta,
    ...e == null ? void 0 : e.instructions
  };
  t.mouth_score_too_low = t.smile, t.mouth_score_too_high = t.keep_neutral_expression;
  const n = {
    [be.LOADING]: {
      ...ar.loading,
      ...(a = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : a.loading
    },
    [be.DONE]: { ...ar.done, ...(s = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : s.done }
  }, r = (e == null ? void 0 : e.backdropColor) ?? Ia, o = (e == null ? void 0 : e.showCameraButtons) ?? !1, i = qa(e == null ? void 0 : e.theme);
  return {
    placeholder: X.CIRCLE_SOLID,
    backdropColor: r,
    instructions: t,
    appStateInstructions: n,
    showCameraButtons: o,
    theme: i
  };
}, Ys = ({ props: e }) => {
  const t = Ga(ze.VIDEO_ELEMENT_SIZE);
  return /* @__PURE__ */ f(Wa, { uiProps: Vs(e), videoElementSize: t, children: /* @__PURE__ */ f(Gs, {}) });
};
Lo(Ys, "x-dot-smile-liveness-ui", ["props"]);
