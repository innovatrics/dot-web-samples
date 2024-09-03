var No = Object.defineProperty;
var ko = (e, t, n) => t in e ? No(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var tt = (e, t, n) => ko(e, typeof t != "symbol" ? t + "" : t, n);
var Ze, S, yr, ue, On, Cr, Ht, an, Ut, Ft, vr, je = {}, Sr = [], To = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, vt = Array.isArray;
function ee(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Er(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function D(e, t, n) {
  var r, o, i, s = {};
  for (i in t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? Ze.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) s[i] === void 0 && (s[i] = e.defaultProps[i]);
  return Be(e, s, r, o, null);
}
function Be(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o ?? ++yr, __i: -1, __u: 0 };
  return o == null && S.vnode != null && S.vnode(i), i;
}
function Io() {
  return { current: null };
}
function W(e) {
  return e.children;
}
function j(e, t) {
  this.props = e, this.context = t;
}
function me(e, t) {
  if (t == null) return e.__ ? me(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? me(e) : null;
}
function wr(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) {
      e.__e = e.__c.base = n.__e;
      break;
    }
    return wr(e);
  }
}
function Bt(e) {
  (!e.__d && (e.__d = !0) && ue.push(e) && !ht.__r++ || On !== S.debounceRendering) && ((On = S.debounceRendering) || Cr)(ht);
}
function ht() {
  var e, t, n, r, o, i, s, a;
  for (ue.sort(Ht); e = ue.shift(); ) e.__d && (t = ue.length, r = void 0, i = (o = (n = e).__v).__e, s = [], a = [], n.__P && ((r = ee({}, o)).__v = o.__v + 1, S.vnode && S.vnode(r), cn(n.__P, r, o, n.__n, n.__P.namespaceURI, 32 & o.__u ? [i] : null, s, i ?? me(o), !!(32 & o.__u), a), r.__v = o.__v, r.__.__k[r.__i] = r, Or(s, r, a), r.__e != i && wr(r)), ue.length > t && ue.sort(Ht));
  ht.__r = 0;
}
function br(e, t, n, r, o, i, s, a, c, u, d) {
  var l, h, _, m, E, w = r && r.__k || Sr, p = t.length;
  for (n.__d = c, xo(n, t, w), c = n.__d, l = 0; l < p; l++) (_ = n.__k[l]) != null && typeof _ != "boolean" && typeof _ != "function" && (h = _.__i === -1 ? je : w[_.__i] || je, _.__i = l, cn(e, _, h, o, i, s, a, c, u, d), m = _.__e, _.ref && h.ref != _.ref && (h.ref && ln(h.ref, null, _), d.push(_.ref, _.__c || m, _)), E == null && m != null && (E = m), 65536 & _.__u || h.__k === _.__k ? (c && typeof _.type == "string" && !e.contains(c) && (c = me(h)), c = $r(_, c, e)) : typeof _.type == "function" && _.__d !== void 0 ? c = _.__d : m && (c = m.nextSibling), _.__d = void 0, _.__u &= -196609);
  n.__d = c, n.__e = E;
}
function xo(e, t, n) {
  var r, o, i, s, a, c = t.length, u = n.length, d = u, l = 0;
  for (e.__k = [], r = 0; r < c; r++) s = r + l, (o = e.__k[r] = (o = t[r]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? Be(null, o, null, null, null) : vt(o) ? Be(W, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? Be(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = e, o.__b = e.__b + 1, a = Ao(o, n, s, d), o.__i = a, i = null, a !== -1 && (d--, (i = n[a]) && (i.__u |= 131072)), i == null || i.__v === null ? (a == -1 && l--, typeof o.type != "function" && (o.__u |= 65536)) : a !== s && (a == s - 1 ? l = a - s : a == s + 1 ? l++ : a > s ? d > c - s ? l += a - s : l-- : a < s && l++, a !== r + l && (o.__u |= 65536))) : (i = n[s]) && i.key == null && i.__e && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = me(i)), Wt(i, i, !1), n[s] = null, d--);
  if (d) for (r = 0; r < u; r++) (i = n[r]) != null && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = me(i)), Wt(i, i));
}
function $r(e, t, n) {
  var r, o;
  if (typeof e.type == "function") {
    for (r = e.__k, o = 0; r && o < r.length; o++) r[o] && (r[o].__ = e, t = $r(r[o], t, n));
    return t;
  }
  e.__e != t && (n.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType === 8);
  return t;
}
function te(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (vt(e) ? e.some(function(n) {
    te(n, t);
  }) : t.push(e)), t;
}
function Ao(e, t, n, r) {
  var o = e.key, i = e.type, s = n - 1, a = n + 1, c = t[n];
  if (c === null || c && o == c.key && i === c.type && !(131072 & c.__u)) return n;
  if (r > (c != null && !(131072 & c.__u) ? 1 : 0)) for (; s >= 0 || a < t.length; ) {
    if (s >= 0) {
      if ((c = t[s]) && !(131072 & c.__u) && o == c.key && i === c.type) return s;
      s--;
    }
    if (a < t.length) {
      if ((c = t[a]) && !(131072 & c.__u) && o == c.key && i === c.type) return a;
      a++;
    }
  }
  return -1;
}
function Nn(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || To.test(t) ? n : n + "px";
}
function nt(e, t, n, r, o) {
  var i;
  e: if (t === "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || Nn(e.style, t, "");
    if (n) for (t in n) r && n[t] === r[t] || Nn(e.style, t, n[t]);
  }
  else if (t[0] === "o" && t[1] === "n") i = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")), t = t.toLowerCase() in e || t === "onFocusOut" || t === "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = an, e.addEventListener(t, i ? Ft : Ut, i)) : e.removeEventListener(t, i ? Ft : Ut, i);
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
      if (t.t == null) t.t = an++;
      else if (t.t < n.u) return;
      return n(S.event ? S.event(t) : t);
    }
  };
}
function cn(e, t, n, r, o, i, s, a, c, u) {
  var d, l, h, _, m, E, w, p, g, O, b, k, v, y, U, V, F = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && (c = !!(32 & n.__u), i = [a = t.__e = n.__e]), (d = S.__b) && d(t);
  e: if (typeof F == "function") try {
    if (p = t.props, g = "prototype" in F && F.prototype.render, O = (d = F.contextType) && r[d.__c], b = d ? O ? O.props.value : d.__ : r, n.__c ? w = (l = t.__c = n.__c).__ = l.__E : (g ? t.__c = l = new F(p, b) : (t.__c = l = new j(p, b), l.constructor = F, l.render = Lo), O && O.sub(l), l.props = p, l.state || (l.state = {}), l.context = b, l.__n = r, h = l.__d = !0, l.__h = [], l._sb = []), g && l.__s == null && (l.__s = l.state), g && F.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = ee({}, l.__s)), ee(l.__s, F.getDerivedStateFromProps(p, l.__s))), _ = l.props, m = l.state, l.__v = t, h) g && F.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), g && l.componentDidMount != null && l.__h.push(l.componentDidMount);
    else {
      if (g && F.getDerivedStateFromProps == null && p !== _ && l.componentWillReceiveProps != null && l.componentWillReceiveProps(p, b), !l.__e && (l.shouldComponentUpdate != null && l.shouldComponentUpdate(p, l.__s, b) === !1 || t.__v === n.__v)) {
        for (t.__v !== n.__v && (l.props = p, l.state = l.__s, l.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(Ee) {
          Ee && (Ee.__ = t);
        }), k = 0; k < l._sb.length; k++) l.__h.push(l._sb[k]);
        l._sb = [], l.__h.length && s.push(l);
        break e;
      }
      l.componentWillUpdate != null && l.componentWillUpdate(p, l.__s, b), g && l.componentDidUpdate != null && l.__h.push(function() {
        l.componentDidUpdate(_, m, E);
      });
    }
    if (l.context = b, l.props = p, l.__P = e, l.__e = !1, v = S.__r, y = 0, g) {
      for (l.state = l.__s, l.__d = !1, v && v(t), d = l.render(l.props, l.state, l.context), U = 0; U < l._sb.length; U++) l.__h.push(l._sb[U]);
      l._sb = [];
    } else do
      l.__d = !1, v && v(t), d = l.render(l.props, l.state, l.context), l.state = l.__s;
    while (l.__d && ++y < 25);
    l.state = l.__s, l.getChildContext != null && (r = ee(ee({}, r), l.getChildContext())), g && !h && l.getSnapshotBeforeUpdate != null && (E = l.getSnapshotBeforeUpdate(_, m)), br(e, vt(V = d != null && d.type === W && d.key == null ? d.props.children : d) ? V : [V], t, n, r, o, i, s, a, c, u), l.base = t.__e, t.__u &= -161, l.__h.length && s.push(l), w && (l.__E = l.__ = null);
  } catch (Ee) {
    t.__v = null, c || i != null ? (t.__e = a, t.__u |= c ? 160 : 32, i[i.indexOf(a)] = null) : (t.__e = n.__e, t.__k = n.__k), S.__e(Ee, t, n);
  }
  else i == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Ro(n.__e, t, n, r, o, i, s, c, u);
  (d = S.diffed) && d(t);
}
function Or(e, t, n) {
  t.__d = void 0;
  for (var r = 0; r < n.length; r++) ln(n[r], n[++r], n[++r]);
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
function Ro(e, t, n, r, o, i, s, a, c) {
  var u, d, l, h, _, m, E, w = n.props, p = t.props, g = t.type;
  if (g === "svg" ? o = "http://www.w3.org/2000/svg" : g === "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (u = 0; u < i.length; u++) if ((_ = i[u]) && "setAttribute" in _ == !!g && (g ? _.localName === g : _.nodeType === 3)) {
      e = _, i[u] = null;
      break;
    }
  }
  if (e == null) {
    if (g === null) return document.createTextNode(p);
    e = document.createElementNS(o, g, p.is && p), i = null, a = !1;
  }
  if (g === null) w === p || a && e.data === p || (e.data = p);
  else {
    if (i = i && Ze.call(e.childNodes), w = n.props || je, !a && i != null) for (w = {}, u = 0; u < e.attributes.length; u++) w[(_ = e.attributes[u]).name] = _.value;
    for (u in w) if (_ = w[u], u != "children") {
      if (u == "dangerouslySetInnerHTML") l = _;
      else if (u !== "key" && !(u in p)) {
        if (u == "value" && "defaultValue" in p || u == "checked" && "defaultChecked" in p) continue;
        nt(e, u, null, _, o);
      }
    }
    for (u in p) _ = p[u], u == "children" ? h = _ : u == "dangerouslySetInnerHTML" ? d = _ : u == "value" ? m = _ : u == "checked" ? E = _ : u === "key" || a && typeof _ != "function" || w[u] === _ || nt(e, u, _, w[u], o);
    if (d) a || l && (d.__html === l.__html || d.__html === e.innerHTML) || (e.innerHTML = d.__html), t.__k = [];
    else if (l && (e.innerHTML = ""), br(e, vt(h) ? h : [h], t, n, r, g === "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, s, i ? i[0] : n.__k && me(n, 0), a, c), i != null) for (u = i.length; u--; ) i[u] != null && Er(i[u]);
    a || (u = "value", m !== void 0 && (m !== e[u] || g === "progress" && !m || g === "option" && m !== w[u]) && nt(e, u, m, w[u], o), u = "checked", E !== void 0 && E !== e[u] && nt(e, u, E, w[u], o));
  }
  return e;
}
function ln(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    S.__e(r, n);
  }
}
function Wt(e, t, n) {
  var r, o;
  if (S.unmount && S.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || ln(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (i) {
      S.__e(i, t);
    }
    r.base = r.__P = null;
  }
  if (r = e.__k) for (o = 0; o < r.length; o++) r[o] && Wt(r[o], t, n || typeof e.type != "function");
  n || e.__e == null || Er(e.__e), e.__c = e.__ = e.__e = e.__d = void 0;
}
function Lo(e, t, n) {
  return this.constructor(e, n);
}
function se(e, t, n) {
  var r, o, i, s;
  S.__ && S.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], s = [], cn(t, e = (!r && n || t).__k = D(W, null, [e]), o || je, je, t.namespaceURI, !r && n ? [n] : o ? null : t.firstChild ? Ze.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, s), Or(i, e, s);
}
function un(e, t) {
  se(e, t, un);
}
function fn(e, t, n) {
  var r, o, i, s, a = ee({}, e.props);
  for (i in e.type && e.type.defaultProps && (s = e.type.defaultProps), t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i] === void 0 && s !== void 0 ? s[i] : t[i];
  return arguments.length > 2 && (a.children = arguments.length > 3 ? Ze.call(arguments, 2) : n), Be(e.type, a, r || e.key, o || e.ref, null);
}
function Nr(e, t) {
  var n = { __c: t = "__cC" + vr++, __: e, Consumer: function(r, o) {
    return r.children(o);
  }, Provider: function(r) {
    var o, i;
    return this.getChildContext || (o = [], (i = {})[t] = this, this.getChildContext = function() {
      return i;
    }, this.componentWillUnmount = function() {
      o = null;
    }, this.shouldComponentUpdate = function(s) {
      this.props.value !== s.value && o.some(function(a) {
        a.__e = !0, Bt(a);
      });
    }, this.sub = function(s) {
      o.push(s);
      var a = s.componentWillUnmount;
      s.componentWillUnmount = function() {
        o && o.splice(o.indexOf(s), 1), a && a.call(s);
      };
    }), r.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
Ze = Sr.slice, S = { __e: function(e, t, n, r) {
  for (var o, i, s; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), s = o.__d), s) return o.__E = o;
  } catch (a) {
    e = a;
  }
  throw e;
} }, yr = 0, j.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ee({}, this.state), typeof e == "function" && (e = e(ee({}, n), this.props)), e && ee(n, e), e != null && this.__v && (t && this._sb.push(t), Bt(this));
}, j.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Bt(this));
}, j.prototype.render = W, ue = [], Cr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ht = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, ht.__r = 0, an = 0, Ut = kn(!1), Ft = kn(!0), vr = 0;
function dn() {
  return (dn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var Po = ["context", "children"];
function Do(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, n = function(r, o) {
    if (r == null) return {};
    var i, s, a = {}, c = Object.keys(r);
    for (s = 0; s < c.length; s++) o.indexOf(i = c[s]) >= 0 || (a[i] = r[i]);
    return a;
  }(e, Po);
  return fn(t, n);
}
function Mo() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = D(Do, dn({}, this._props, { context: e.detail.context }), function t(n, r) {
    if (n.nodeType === 3) return n.data;
    if (n.nodeType !== 1) return null;
    var o = [], i = {}, s = 0, a = n.attributes, c = n.childNodes;
    for (s = a.length; s--; ) a[s].name !== "slot" && (i[a[s].name] = a[s].value, i[kr(a[s].name)] = a[s].value);
    for (s = c.length; s--; ) {
      var u = t(c[s], null), d = c[s].slot;
      d ? i[d] = D(Tn, { name: d }, u) : o[s] = u;
    }
    var l = r ? D(Tn, null, o) : o;
    return D(r || n.nodeName.toLowerCase(), i, l);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? un : se)(this._vdom, this._root);
}
function kr(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function Ho(e, t, n) {
  if (this._vdom) {
    var r = {};
    r[e] = n = n ?? void 0, r[kr(e)] = n, this._vdom = fn(this._vdom, r), se(this._vdom, this._root);
  }
}
function Uo() {
  se(this._vdom = null, this._root);
}
function Tn(e, t) {
  var n = this;
  return D("slot", dn({}, e, { ref: function(r) {
    r ? (n.ref = r, n._listener || (n._listener = function(o) {
      o.stopPropagation(), o.detail.context = t;
    }, r.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function Fo(e, t, n, r) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = e, i._root = i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = Mo, o.prototype.attributeChangedCallback = Ho, o.prototype.disconnectedCallback = Uo, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = n, n.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom.props[i];
    }, set: function(s) {
      this._vdom ? this.attributeChangedCallback(i, null, s) : (this._props || (this._props = {}), this._props[i] = s, this.connectedCallback());
      var a = typeof s;
      s != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(i, s);
    } });
  }), customElements.define(t, o);
}
var Bo = 0;
function f(e, t, n, r, o, i) {
  t || (t = {});
  var s, a, c = t;
  if ("ref" in c) for (a in c = {}, t) a == "ref" ? s = t[a] : c[a] = t[a];
  var u = { type: e, props: c, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --Bo, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (s = e.defaultProps)) for (a in s) c[a] === void 0 && (c[a] = s[a]);
  return S.vnode && S.vnode(u), u;
}
var zt = /* @__PURE__ */ ((e) => (e.CONTINUE_DETECTION = "continue-detection", e.SWITCH_CAMERA = "switch-camera", e.TOGGLE_MIRROR = "toggle-mirror", e))(zt || {}), Tr = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", e.CONTROL = "document-auto-capture:control", e.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", e.DOCUMENT_DETECTION = "document-auto-capture:document-detection", e.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", e.STATE_CHANGED = "document-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", e))(Tr || {}), Ge = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", e.CONTROL = "face-auto-capture:control", e.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", e.FACE_DETECTION = "face-auto-capture:face-detection", e.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", e.STATE_CHANGED = "face-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", e))(Ge || {}), Ir = /* @__PURE__ */ ((e) => (e.STATUS_CHANGED = "smile-auto-capture:status-changed", e))(Ir || {});
const In = {
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
  LEFT_EYE_NOT_PRESENT: `left_${In.EYE_NOT_PRESENT}`,
  RIGHT_EYE_NOT_PRESENT: `right_${In.EYE_NOT_PRESENT}`,
  MOUTH_NOT_PRESENT: "mouth_not_present",
  MOUTH_SCORE_TOO_HIGH: "mouth_score_too_high",
  MOUTH_SCORE_TOO_LOW: "mouth_score_too_low"
}, Wo = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  WAITING: "WAITING",
  RUNNING: "RUNNING"
}, _e = {
  ...L,
  SMILE: "smile",
  SMILE_CANDIDATE_SELECTION: "smile_candidate_selection",
  KEEP_NEUTRAL_EXPRESSION: "keep_neutral_expression"
}, pt = {
  NEUTRAL: "NEUTRAL",
  SMILE: "SMILE"
}, $e = {
  ...Wo,
  DONE: "DONE"
};
var ae, I, At, xn, Oe = 0, xr = [], x = S, An = x.__b, Rn = x.__r, Ln = x.diffed, Pn = x.__c, Dn = x.unmount, Mn = x.__;
function xe(e, t) {
  x.__h && x.__h(I, e, Oe || t), Oe = 0;
  var n = I.__H || (I.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function M(e) {
  return Oe = 1, _n(Lr, e);
}
function _n(e, t, n) {
  var r = xe(ae++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Lr(void 0, t), function(a) {
    var c = r.__N ? r.__N[0] : r.__[0], u = r.t(c, a);
    c !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = I, !I.u)) {
    var o = function(a, c, u) {
      if (!r.__c.__H) return !0;
      var d = r.__c.__H.__.filter(function(h) {
        return !!h.__c;
      });
      if (d.every(function(h) {
        return !h.__N;
      })) return !i || i.call(this, a, c, u);
      var l = !1;
      return d.forEach(function(h) {
        if (h.__N) {
          var _ = h.__[0];
          h.__ = h.__N, h.__N = void 0, _ !== h.__[0] && (l = !0);
        }
      }), !(!l && r.__c.props === a) && (!i || i.call(this, a, c, u));
    };
    I.u = !0;
    var i = I.shouldComponentUpdate, s = I.componentWillUpdate;
    I.componentWillUpdate = function(a, c, u) {
      if (this.__e) {
        var d = i;
        i = void 0, o(a, c, u), i = d;
      }
      s && s.call(this, a, c, u);
    }, I.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function q(e, t) {
  var n = xe(ae++, 3);
  !x.__s && hn(n.__H, t) && (n.__ = e, n.i = t, I.__H.__h.push(n));
}
function qe(e, t) {
  var n = xe(ae++, 4);
  !x.__s && hn(n.__H, t) && (n.__ = e, n.i = t, I.__h.push(n));
}
function Xe(e) {
  return Oe = 5, ne(function() {
    return { current: e };
  }, []);
}
function Ar(e, t, n) {
  Oe = 6, qe(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(e));
}
function ne(e, t) {
  var n = xe(ae++, 7);
  return hn(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function ge(e, t) {
  return Oe = 8, ne(function() {
    return e;
  }, t);
}
function Ke(e) {
  var t = I.context[e.__c], n = xe(ae++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(I)), t.props.value) : e.__;
}
function mt(e, t) {
  x.useDebugValue && x.useDebugValue(t ? t(e) : e);
}
function Rr() {
  var e = xe(ae++, 11);
  if (!e.__) {
    for (var t = I.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function zo() {
  for (var e; e = xr.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(at), e.__H.__h.forEach(jt), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], x.__e(t, e.__v);
  }
}
x.__b = function(e) {
  I = null, An && An(e);
}, x.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Mn && Mn(e, t);
}, x.__r = function(e) {
  Rn && Rn(e), ae = 0;
  var t = (I = e.__c).__H;
  t && (At === I ? (t.__h = [], I.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.i = n.__N = void 0;
  })) : (t.__h.forEach(at), t.__h.forEach(jt), t.__h = [], ae = 0)), At = I;
}, x.diffed = function(e) {
  Ln && Ln(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (xr.push(t) !== 1 && xn === x.requestAnimationFrame || ((xn = x.requestAnimationFrame) || jo)(zo)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.i = void 0;
  })), At = I = null;
}, x.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(at), n.__h = n.__h.filter(function(r) {
        return !r.__ || jt(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], x.__e(r, n.__v);
    }
  }), Pn && Pn(e, t);
}, x.unmount = function(e) {
  Dn && Dn(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      at(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && x.__e(t, n.__v));
};
var Hn = typeof requestAnimationFrame == "function";
function jo(e) {
  var t, n = function() {
    clearTimeout(r), Hn && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  Hn && (t = requestAnimationFrame(n));
}
function at(e) {
  var t = I, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), I = t;
}
function jt(e) {
  var t = I;
  e.__c = e.__(), I = t;
}
function hn(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function Lr(e, t) {
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
function ye(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function Go(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Vo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Yo = /* @__PURE__ */ Go(
  function(e) {
    return Vo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Pr(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Gt(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function Vt(e, t) {
  this.props = e, this.context = t;
}
function Zo(e, t) {
  function n(o) {
    var i = this.props.ref, s = i == o.ref;
    return !s && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !s : Gt(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, D(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(Vt.prototype = new j()).isPureReactComponent = !0, Vt.prototype.shouldComponentUpdate = function(e, t) {
  return Gt(this.props, e) || Gt(this.state, t);
};
var Un = S.__b;
S.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Un && Un(e);
};
var qo = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function Xo(e) {
  function t(n) {
    var r = Pr({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = qo, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Fn = function(e, t) {
  return e == null ? null : te(te(e).map(t));
}, Ko = { map: Fn, forEach: Fn, count: function(e) {
  return e ? te(e).length : 0;
}, only: function(e) {
  var t = te(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: te }, Qo = S.__e;
S.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  Qo(e, t, n, r);
};
var Bn = S.unmount;
function Dr(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = Pr({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return Dr(r, t, n);
  })), e;
}
function Mr(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return Mr(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function ct() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Hr(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Jo(e) {
  var t, n, r;
  function o(i) {
    if (t || (t = e()).then(function(s) {
      n = s.default || s;
    }, function(s) {
      r = s;
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
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Bn && Bn(e);
}, (ct.prototype = new j()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var o = Hr(r.__v), i = !1, s = function() {
    i || (i = !0, n.__R = null, o ? o(a) : a());
  };
  n.__R = s;
  var a = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var c = r.state.__a;
        r.__v.__k[0] = Mr(c, c.__c.__P, c.__c.__O);
      }
      var u;
      for (r.setState({ __a: r.__b = null }); u = r.t.pop(); ) u.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(s, s);
}, ct.prototype.componentWillUnmount = function() {
  this.t = [];
}, ct.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Dr(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && D(W, null, e.fallback);
  return o && (o.__u &= -33), [D(W, null, t.__a ? null : e.children), o];
};
var Wn = function(e, t, n) {
  if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size)) for (n = e.u; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    e.u = n = n[2];
  }
};
function ei(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function ti(e) {
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
  } }), se(D(ei, { context: t.context }, e.__v), t.l);
}
function ni(e, t) {
  var n = D(ti, { __v: e, i: t });
  return n.containerInfo = t, n;
}
(Me.prototype = new j()).__a = function(e) {
  var t = this, n = Hr(t.__v), r = t.o.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), Wn(t, e, r)) : o();
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
    Wn(e, n, t);
  });
};
var Ur = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, ri = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, oi = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, ii = /[A-Z0-9]/g, si = typeof document < "u", ai = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function ci(e, t, n) {
  return t.__k == null && (t.textContent = ""), se(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function li(e, t, n) {
  return un(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
j.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(j.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var zn = S.event;
function ui() {
}
function fi() {
  return this.cancelBubble;
}
function di() {
  return this.defaultPrevented;
}
S.event = function(e) {
  return zn && (e = zn(e)), e.persist = ui, e.isPropagationStopped = fi, e.isDefaultPrevented = di, e.nativeEvent = e;
};
var pn, _i = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, jn = S.vnode;
S.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {};
    for (var i in n) {
      var s = n[i];
      if (!(i === "value" && "defaultValue" in n && s == null || si && i === "children" && r === "noscript" || i === "class" || i === "className")) {
        var a = i.toLowerCase();
        i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && s === !0 ? s = "" : a === "translate" && s === "no" ? s = !1 : a === "ondoubleclick" ? i = "ondblclick" : a !== "onchange" || r !== "input" && r !== "textarea" || ai(n.type) ? a === "onfocus" ? i = "onfocusin" : a === "onblur" ? i = "onfocusout" : oi.test(i) ? i = a : r.indexOf("-") === -1 && ri.test(i) ? i = i.replace(ii, "-$&").toLowerCase() : s === null && (s = void 0) : a = i = "oninput", a === "oninput" && o[i = a] && (i = "oninputCapture"), o[i] = s;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = te(n.children).forEach(function(c) {
      c.props.selected = o.value.indexOf(c.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = te(n.children).forEach(function(c) {
      c.props.selected = o.multiple ? o.defaultValue.indexOf(c.props.value) != -1 : o.defaultValue == c.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", _i)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = Ur, jn && jn(e);
};
var Gn = S.__r;
S.__r = function(e) {
  Gn && Gn(e), pn = e.__c;
};
var Vn = S.diffed;
S.diffed = function(e) {
  Vn && Vn(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), pn = null;
};
var hi = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return pn.__n[e.__c].props.value;
}, useCallback: ge, useContext: Ke, useDebugValue: mt, useDeferredValue: Br, useEffect: q, useId: Rr, useImperativeHandle: Ar, useInsertionEffect: zr, useLayoutEffect: qe, useMemo: ne, useReducer: _n, useRef: Xe, useState: M, useSyncExternalStore: jr, useTransition: Wr } } };
function pi(e) {
  return D.bind(null, e);
}
function St(e) {
  return !!e && e.$$typeof === Ur;
}
function mi(e) {
  return St(e) && e.type === W;
}
function gi(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function yi(e) {
  return St(e) ? fn.apply(null, arguments) : e;
}
function Ci(e) {
  return !!e.__k && (se(null, e), !0);
}
function vi(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var Si = function(e, t) {
  return e(t);
}, Ei = function(e, t) {
  return e(t);
}, wi = W;
function Fr(e) {
  e();
}
function Br(e) {
  return e;
}
function Wr() {
  return [!1, Fr];
}
var zr = qe, bi = St;
function jr(e, t) {
  var n = t(), r = M({ h: { __: n, v: t } }), o = r[0].h, i = r[1];
  return qe(function() {
    o.__ = n, o.v = t, Rt(o) && i({ h: o });
  }, [e, n, t]), q(function() {
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
var re = { useState: M, useId: Rr, useReducer: _n, useEffect: q, useLayoutEffect: qe, useInsertionEffect: zr, useTransition: Wr, useDeferredValue: Br, useSyncExternalStore: jr, startTransition: Fr, useRef: Xe, useImperativeHandle: Ar, useMemo: ne, useCallback: ge, useContext: Ke, useDebugValue: mt, version: "17.0.2", Children: Ko, render: ci, hydrate: li, unmountComponentAtNode: Ci, createPortal: ni, createElement: D, createContext: Nr, createFactory: pi, cloneElement: yi, createRef: Io, Fragment: W, isValidElement: St, isElement: bi, isFragment: mi, isMemo: gi, findDOMNode: vi, Component: j, PureComponent: Vt, memo: Zo, forwardRef: Xo, flushSync: Ei, unstable_batchedUpdates: Si, StrictMode: wi, Suspense: ct, SuspenseList: Me, lazy: Jo, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: hi };
function $i(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Oi = function(t, n, r, o) {
  var i = r ? r.call(o, t, n) : void 0;
  if (i !== void 0)
    return !!i;
  if (t === n)
    return !0;
  if (typeof t != "object" || !t || typeof n != "object" || !n)
    return !1;
  var s = Object.keys(t), a = Object.keys(n);
  if (s.length !== a.length)
    return !1;
  for (var c = Object.prototype.hasOwnProperty.bind(n), u = 0; u < s.length; u++) {
    var d = s[u];
    if (!c(d))
      return !1;
    var l = t[d], h = n[d];
    if (i = r ? r.call(o, l, h, d) : void 0, i === !1 || i === void 0 && l !== h)
      return !1;
  }
  return !0;
};
const Ni = /* @__PURE__ */ $i(Oi);
var T = "-ms-", We = "-moz-", N = "-webkit-", Gr = "comm", Et = "rule", mn = "decl", ki = "@import", Vr = "@keyframes", Ti = "@layer", Yr = Math.abs, gn = String.fromCharCode, Yt = Object.assign;
function Ii(e, t) {
  return R(e, 0) ^ 45 ? (((t << 2 ^ R(e, 0)) << 2 ^ R(e, 1)) << 2 ^ R(e, 2)) << 2 ^ R(e, 3) : 0;
}
function Zr(e) {
  return e.trim();
}
function Q(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function C(e, t, n) {
  return e.replace(t, n);
}
function lt(e, t, n) {
  return e.indexOf(t, n);
}
function R(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ne(e, t, n) {
  return e.slice(t, n);
}
function Y(e) {
  return e.length;
}
function qr(e) {
  return e.length;
}
function He(e, t) {
  return t.push(e), e;
}
function xi(e, t) {
  return e.map(t).join("");
}
function Yn(e, t) {
  return e.filter(function(n) {
    return !Q(n, t);
  });
}
var wt = 1, ke = 1, Xr = 0, z = 0, A = 0, Ae = "";
function bt(e, t, n, r, o, i, s, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: wt, column: ke, length: s, return: "", siblings: a };
}
function ie(e, t) {
  return Yt(bt("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function be(e) {
  for (; e.root; )
    e = ie(e.root, { children: [e] });
  He(e, e.siblings);
}
function Ai() {
  return A;
}
function Ri() {
  return A = z > 0 ? R(Ae, --z) : 0, ke--, A === 10 && (ke = 1, wt--), A;
}
function G() {
  return A = z < Xr ? R(Ae, z++) : 0, ke++, A === 10 && (ke = 1, wt++), A;
}
function he() {
  return R(Ae, z);
}
function ut() {
  return z;
}
function $t(e, t) {
  return Ne(Ae, e, t);
}
function Zt(e) {
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
function Li(e) {
  return wt = ke = 1, Xr = Y(Ae = e), z = 0, [];
}
function Pi(e) {
  return Ae = "", e;
}
function Lt(e) {
  return Zr($t(z - 1, qt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Di(e) {
  for (; (A = he()) && A < 33; )
    G();
  return Zt(e) > 2 || Zt(A) > 3 ? "" : " ";
}
function Mi(e, t) {
  for (; --t && G() && !(A < 48 || A > 102 || A > 57 && A < 65 || A > 70 && A < 97); )
    ;
  return $t(e, ut() + (t < 6 && he() == 32 && G() == 32));
}
function qt(e) {
  for (; G(); )
    switch (A) {
      case e:
        return z;
      case 34:
      case 39:
        e !== 34 && e !== 39 && qt(A);
        break;
      case 40:
        e === 41 && qt(e);
        break;
      case 92:
        G();
        break;
    }
  return z;
}
function Hi(e, t) {
  for (; G() && e + A !== 57; )
    if (e + A === 84 && he() === 47)
      break;
  return "/*" + $t(t, z - 1) + "*" + gn(e === 47 ? e : G());
}
function Ui(e) {
  for (; !Zt(he()); )
    G();
  return $t(e, z);
}
function Fi(e) {
  return Pi(ft("", null, null, null, [""], e = Li(e), 0, [0], e));
}
function ft(e, t, n, r, o, i, s, a, c) {
  for (var u = 0, d = 0, l = s, h = 0, _ = 0, m = 0, E = 1, w = 1, p = 1, g = 0, O = "", b = o, k = i, v = r, y = O; w; )
    switch (m = g, g = G()) {
      case 40:
        if (m != 108 && R(y, l - 1) == 58) {
          lt(y += C(Lt(g), "&", "&\f"), "&\f", Yr(u ? a[u - 1] : 0)) != -1 && (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        y += Lt(g);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        y += Di(m);
        break;
      case 92:
        y += Mi(ut() - 1, 7);
        continue;
      case 47:
        switch (he()) {
          case 42:
          case 47:
            He(Bi(Hi(G(), ut()), t, n, c), c);
            break;
          default:
            y += "/";
        }
        break;
      case 123 * E:
        a[u++] = Y(y) * p;
      case 125 * E:
      case 59:
      case 0:
        switch (g) {
          case 0:
          case 125:
            w = 0;
          case 59 + d:
            p == -1 && (y = C(y, /\f/g, "")), _ > 0 && Y(y) - l && He(_ > 32 ? qn(y + ";", r, n, l - 1, c) : qn(C(y, " ", "") + ";", r, n, l - 2, c), c);
            break;
          case 59:
            y += ";";
          default:
            if (He(v = Zn(y, t, n, u, d, o, a, O, b = [], k = [], l, i), i), g === 123)
              if (d === 0)
                ft(y, t, v, v, b, i, l, a, k);
              else
                switch (h === 99 && R(y, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ft(e, v, v, r && He(Zn(e, v, v, 0, 0, o, a, O, o, b = [], l, k), k), o, k, l, a, r ? b : k);
                    break;
                  default:
                    ft(y, v, v, v, [""], k, 0, a, k);
                }
        }
        u = d = _ = 0, E = p = 1, O = y = "", l = s;
        break;
      case 58:
        l = 1 + Y(y), _ = m;
      default:
        if (E < 1) {
          if (g == 123)
            --E;
          else if (g == 125 && E++ == 0 && Ri() == 125)
            continue;
        }
        switch (y += gn(g), g * E) {
          case 38:
            p = d > 0 ? 1 : (y += "\f", -1);
            break;
          case 44:
            a[u++] = (Y(y) - 1) * p, p = 1;
            break;
          case 64:
            he() === 45 && (y += Lt(G())), h = he(), d = l = Y(O = y += Ui(ut())), g++;
            break;
          case 45:
            m === 45 && Y(y) == 2 && (E = 0);
        }
    }
  return i;
}
function Zn(e, t, n, r, o, i, s, a, c, u, d, l) {
  for (var h = o - 1, _ = o === 0 ? i : [""], m = qr(_), E = 0, w = 0, p = 0; E < r; ++E)
    for (var g = 0, O = Ne(e, h + 1, h = Yr(w = s[E])), b = e; g < m; ++g)
      (b = Zr(w > 0 ? _[g] + " " + O : C(O, /&\f/g, _[g]))) && (c[p++] = b);
  return bt(e, t, n, o === 0 ? Et : a, c, u, d, l);
}
function Bi(e, t, n, r) {
  return bt(e, t, n, Gr, gn(Ai()), Ne(e, 2, -2), 0, r);
}
function qn(e, t, n, r, o) {
  return bt(e, t, n, mn, Ne(e, 0, r), Ne(e, r + 1, -1), r, o);
}
function Kr(e, t, n) {
  switch (Ii(e, t)) {
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
      return We + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return N + e + We + e + T + e + e;
    case 5936:
      switch (R(e, t + 11)) {
        case 114:
          return N + e + T + C(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return N + e + T + C(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return N + e + T + C(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return N + e + T + e + e;
    case 6165:
      return N + e + T + "flex-" + e + e;
    case 5187:
      return N + e + C(e, /(\w+).+(:[^]+)/, N + "box-$1$2" + T + "flex-$1$2") + e;
    case 5443:
      return N + e + T + "flex-item-" + C(e, /flex-|-self/g, "") + (Q(e, /flex-|baseline/) ? "" : T + "grid-row-" + C(e, /flex-|-self/g, "")) + e;
    case 4675:
      return N + e + T + "flex-line-pack" + C(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return N + e + T + C(e, "shrink", "negative") + e;
    case 5292:
      return N + e + T + C(e, "basis", "preferred-size") + e;
    case 6060:
      return N + "box-" + C(e, "-grow", "") + N + e + T + C(e, "grow", "positive") + e;
    case 4554:
      return N + C(e, /([^-])(transform)/g, "$1" + N + "$2") + e;
    case 6187:
      return C(C(C(e, /(zoom-|grab)/, N + "$1"), /(image-set)/, N + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return C(e, /(image-set\([^]*)/, N + "$1$`$1");
    case 4968:
      return C(C(e, /(.+:)(flex-)?(.*)/, N + "box-pack:$3" + T + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + N + e + e;
    case 4200:
      if (!Q(e, /flex-|baseline/)) return T + "grid-column-align" + Ne(e, t) + e;
      break;
    case 2592:
    case 3360:
      return T + C(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, Q(r.props, /grid-\w+-end/);
      }) ? ~lt(e + (n = n[t].value), "span", 0) ? e : T + C(e, "-start", "") + e + T + "grid-row-span:" + (~lt(n, "span", 0) ? Q(n, /\d+/) : +Q(n, /\d+/) - +Q(e, /\d+/)) + ";" : T + C(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return Q(r.props, /grid-\w+-start/);
      }) ? e : T + C(C(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return C(e, /(.+)-inline(.+)/, N + "$1$2") + e;
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
            return C(e, /(.+:)(.+)-([^]+)/, "$1" + N + "$2-$3$1" + We + (R(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~lt(e, "stretch", 0) ? Kr(C(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return C(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, a, c, u) {
        return T + o + ":" + i + u + (s ? T + o + "-span:" + (a ? c : +c - +i) + u : "") + e;
      });
    case 4949:
      if (R(e, t + 6) === 121)
        return C(e, ":", ":" + N) + e;
      break;
    case 6444:
      switch (R(e, R(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return C(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + N + (R(e, 14) === 45 ? "inline-" : "") + "box$3$1" + N + "$2$3$1" + T + "$2box$3") + e;
        case 100:
          return C(e, ":", ":" + T) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return C(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function gt(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Wi(e, t, n, r) {
  switch (e.type) {
    case Ti:
      if (e.children.length) break;
    case ki:
    case mn:
      return e.return = e.return || e.value;
    case Gr:
      return "";
    case Vr:
      return e.return = e.value + "{" + gt(e.children, r) + "}";
    case Et:
      if (!Y(e.value = e.props.join(","))) return "";
  }
  return Y(n = gt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function zi(e) {
  var t = qr(e);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, o, i) || "";
    return s;
  };
}
function ji(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Gi(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case mn:
        e.return = Kr(e.value, e.length, n);
        return;
      case Vr:
        return gt([ie(e, { value: C(e.value, "@", "@" + N) })], r);
      case Et:
        if (e.length)
          return xi(n = e.props, function(o) {
            switch (Q(o, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                be(ie(e, { props: [C(o, /:(read-\w+)/, ":" + We + "$1")] })), be(ie(e, { props: [o] })), Yt(e, { props: Yn(n, r) });
                break;
              case "::placeholder":
                be(ie(e, { props: [C(o, /:(plac\w+)/, ":" + N + "input-$1")] })), be(ie(e, { props: [C(o, /:(plac\w+)/, ":" + We + "$1")] })), be(ie(e, { props: [C(o, /:(plac\w+)/, T + "input-$1")] })), be(ie(e, { props: [o] })), Yt(e, { props: Yn(n, r) });
                break;
            }
            return "";
          });
    }
}
var Vi = {
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
}, $ = {}, Ce = typeof process < "u" && $ !== void 0 && ($.REACT_APP_SC_ATTR || $.SC_ATTR) || "data-styled", Qr = "active", Jr = "data-styled-version", Ot = "6.1.11", yn = `/*!sc*/
`, Cn = typeof window < "u" && "HTMLElement" in window, Yi = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && $ !== void 0 && $.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && $.REACT_APP_SC_DISABLE_SPEEDY !== "" ? $.REACT_APP_SC_DISABLE_SPEEDY !== "false" && $.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && $ !== void 0 && $.SC_DISABLE_SPEEDY !== void 0 && $.SC_DISABLE_SPEEDY !== "" ? $.SC_DISABLE_SPEEDY !== "false" && $.SC_DISABLE_SPEEDY : $.NODE_ENV !== "production"), Xn = /invalid hook call/i, rt = /* @__PURE__ */ new Set(), Zi = function(e, t) {
  if ($.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(s) {
        for (var a = [], c = 1; c < arguments.length; c++) a[c - 1] = arguments[c];
        Xn.test(s) ? (i = !1, rt.delete(r)) : o.apply(void 0, ye([s], a, !1));
      }, Xe(), i && !rt.has(r) && (console.warn(r), rt.add(r));
    } catch (s) {
      Xn.test(s.message) && rt.delete(r);
    } finally {
      console.error = o;
    }
  }
}, Nt = Object.freeze([]), Te = Object.freeze({});
function qi(e, t, n) {
  return n === void 0 && (n = Te), e.theme !== n.theme && e.theme || t || n.theme;
}
var Xt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Xi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ki = /(^-|-$)/g;
function Kn(e) {
  return e.replace(Xi, "-").replace(Ki, "");
}
var Qi = /(a)(d)/gi, ot = 52, Qn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Kt(e) {
  var t, n = "";
  for (t = Math.abs(e); t > ot; t = t / ot | 0) n = Qn(t % ot) + n;
  return (Qn(t % ot) + n).replace(Qi, "$1-$2");
}
var Pt, eo = 5381, fe = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, to = function(e) {
  return fe(eo, e);
};
function no(e) {
  return Kt(to(e) >>> 0);
}
function ro(e) {
  return $.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Dt(e) {
  return typeof e == "string" && ($.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var oo = typeof Symbol == "function" && Symbol.for, io = oo ? Symbol.for("react.memo") : 60115, Ji = oo ? Symbol.for("react.forward_ref") : 60112, es = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, ts = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, so = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, ns = ((Pt = {})[Ji] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Pt[io] = so, Pt);
function Jn(e) {
  return ("type" in (t = e) && t.type.$$typeof) === io ? so : "$$typeof" in e ? ns[e.$$typeof] : es;
  var t;
}
var rs = Object.defineProperty, os = Object.getOwnPropertyNames, er = Object.getOwnPropertySymbols, is = Object.getOwnPropertyDescriptor, ss = Object.getPrototypeOf, tr = Object.prototype;
function ao(e, t, n) {
  if (typeof t != "string") {
    if (tr) {
      var r = ss(t);
      r && r !== tr && ao(e, r, n);
    }
    var o = os(t);
    er && (o = o.concat(er(t)));
    for (var i = Jn(e), s = Jn(t), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!(c in ts || n && n[c] || s && c in s || i && c in i)) {
        var u = is(t, c);
        try {
          rs(e, c, u);
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
function vn(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function de(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Qt(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function Ie(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Jt(e, t, n) {
  if (n === void 0 && (n = !1), !n && !Ie(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = Jt(e[r], t[r]);
  else if (Ie(t)) for (var r in t) e[r] = Jt(e[r], t[r]);
  return e;
}
function Sn(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var as = $.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function cs() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(s) {
    n = n.replace(/%[a-z]/, s);
  }), n;
}
function Z(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return $.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(cs.apply(void 0, ye([as[e]], t, !1)).trim());
}
var ls = function() {
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
      for (var s = o; s < i; s++) this.groupSizes[s] = 0;
    }
    for (var a = this.indexOfGroup(t + 1), c = (s = 0, n.length); s < c; s++) this.tag.insertRule(a, n[s]) && (this.groupSizes[t]++, a++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], r = this.indexOfGroup(t), o = r + n;
      this.groupSizes[t] = 0;
      for (var i = r; i < o; i++) this.tag.deleteRule(r);
    }
  }, e.prototype.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, s = o; s < i; s++) n += "".concat(this.tag.getRule(s)).concat(yn);
    return n;
  }, e;
}(), us = 1 << 30, dt = /* @__PURE__ */ new Map(), yt = /* @__PURE__ */ new Map(), _t = 1, it = function(e) {
  if (dt.has(e)) return dt.get(e);
  for (; yt.has(_t); ) _t++;
  var t = _t++;
  if ($.NODE_ENV !== "production" && ((0 | t) < 0 || t > us)) throw Z(16, "".concat(t));
  return dt.set(e, t), yt.set(t, e), t;
}, fs = function(e, t) {
  _t = t + 1, dt.set(e, t), yt.set(t, e);
}, ds = "style[".concat(Ce, "][").concat(Jr, '="').concat(Ot, '"]'), _s = new RegExp("^".concat(Ce, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), hs = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && e.registerName(t, r);
}, ps = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(yn), o = [], i = 0, s = r.length; i < s; i++) {
    var a = r[i].trim();
    if (a) {
      var c = a.match(_s);
      if (c) {
        var u = 0 | parseInt(c[1], 10), d = c[2];
        u !== 0 && (fs(d, u), hs(e, d, c[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else o.push(a);
    }
  }
};
function ms() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var co = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(a) {
    var c = Array.from(a.querySelectorAll("style[".concat(Ce, "]")));
    return c[c.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(Ce, Qr), r.setAttribute(Jr, Ot);
  var s = ms();
  return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r;
}, gs = function() {
  function e(t) {
    this.element = co(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet) return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var s = r[o];
        if (s.ownerNode === n) return s;
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
}(), ys = function() {
  function e(t) {
    this.element = co(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), Cs = function() {
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
}(), nr = Cn, vs = { isServer: !Cn, useCSSOMInjection: !Yi }, lo = function() {
  function e(t, n, r) {
    t === void 0 && (t = Te), n === void 0 && (n = {});
    var o = this;
    this.options = P(P({}, vs), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && Cn && nr && (nr = !1, function(i) {
      for (var s = document.querySelectorAll(ds), a = 0, c = s.length; a < c; a++) {
        var u = s[a];
        u && u.getAttribute(Ce) !== Qr && (ps(i, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this)), Sn(this, function() {
      return function(i) {
        for (var s = i.getTag(), a = s.length, c = "", u = function(l) {
          var h = function(p) {
            return yt.get(p);
          }(l);
          if (h === void 0) return "continue";
          var _ = i.names.get(h), m = s.getGroup(l);
          if (_ === void 0 || m.length === 0) return "continue";
          var E = "".concat(Ce, ".g").concat(l, '[id="').concat(h, '"]'), w = "";
          _ !== void 0 && _.forEach(function(p) {
            p.length > 0 && (w += "".concat(p, ","));
          }), c += "".concat(m).concat(E, '{content:"').concat(w, '"}').concat(yn);
        }, d = 0; d < a; d++) u(d);
        return c;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return it(t);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(P(P({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new Cs(o) : r ? new gs(o) : new ys(o);
    }(this.options), new ls(t)));
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
}(), Ss = /&/g, Es = /^\s*\/\/.*$/gm;
function uo(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = uo(n.children, t)), n;
  });
}
function fo(e) {
  var t, n, r, o = e === void 0 ? Te : e, i = o.options, s = i === void 0 ? Te : i, a = o.plugins, c = a === void 0 ? Nt : a, u = function(h, _, m) {
    return m.startsWith(n) && m.endsWith(n) && m.replaceAll(n, "").length > 0 ? ".".concat(t) : h;
  }, d = c.slice();
  d.push(function(h) {
    h.type === Et && h.value.includes("&") && (h.props[0] = h.props[0].replace(Ss, n).replace(r, u));
  }), s.prefix && d.push(Gi), d.push(Wi);
  var l = function(h, _, m, E) {
    _ === void 0 && (_ = ""), m === void 0 && (m = ""), E === void 0 && (E = "&"), t = E, n = _, r = new RegExp("\\".concat(n, "\\b"), "g");
    var w = h.replace(Es, ""), p = Fi(m || _ ? "".concat(m, " ").concat(_, " { ").concat(w, " }") : w);
    s.namespace && (p = uo(p, s.namespace));
    var g = [];
    return gt(p, zi(d.concat(ji(function(O) {
      return g.push(O);
    })))), g;
  };
  return l.hash = c.length ? c.reduce(function(h, _) {
    return _.name || Z(15), fe(h, _.name);
  }, eo).toString() : "", l;
}
var ws = new lo(), en = fo(), En = re.createContext({ shouldForwardProp: void 0, styleSheet: ws, stylis: en });
En.Consumer;
var bs = re.createContext(void 0);
function tn() {
  return Ke(En);
}
function $s(e) {
  var t = M(e.stylisPlugins), n = t[0], r = t[1], o = tn().styleSheet, i = ne(function() {
    var c = o;
    return e.sheet ? c = e.sheet : e.target && (c = c.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (c = c.reconstructWithOptions({ useCSSOMInjection: !1 })), c;
  }, [e.disableCSSOMInjection, e.sheet, e.target, o]), s = ne(function() {
    return fo({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: n });
  }, [e.enableVendorPrefixes, e.namespace, n]);
  q(function() {
    Ni(n, e.stylisPlugins) || r(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var a = ne(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: s };
  }, [e.shouldForwardProp, i, s]);
  return re.createElement(En.Provider, { value: a }, re.createElement(bs.Provider, { value: s }, e.children));
}
var nn = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = en);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, Sn(this, function() {
      throw Z(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = en), this.name + t.hash;
  }, e;
}(), Os = function(e) {
  return e >= "A" && e <= "Z";
};
function rr(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    Os(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var _o = function(e) {
  return e == null || e === !1 || e === "";
}, ho = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !_o(i) && (Array.isArray(i) && i.isCss || ve(i) ? r.push("".concat(rr(o), ":"), i, ";") : Ie(i) ? r.push.apply(r, ye(ye(["".concat(o, " {")], ho(i), !1), ["}"], !1)) : r.push("".concat(rr(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in Vi || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function pe(e, t, n, r) {
  if (_o(e)) return [];
  if (vn(e)) return [".".concat(e.styledComponentId)];
  if (ve(e)) {
    if (!ve(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return $.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof nn || Ie(o) || o === null || console.error("".concat(ro(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), pe(o, t, n, r);
  }
  var i;
  return e instanceof nn ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Ie(e) ? ho(e) : Array.isArray(e) ? Array.prototype.concat.apply(Nt, e.map(function(s) {
    return pe(s, t, n, r);
  })) : [e.toString()];
}
function Ns(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (ve(n) && !vn(n)) return !1;
  }
  return !0;
}
var ks = to(Ot), Ts = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = $.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Ns(t), this.componentId = n, this.baseHash = fe(ks, n), this.baseStyle = r, lo.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = de(o, this.staticRulesId);
    else {
      var i = Qt(pe(this.rules, t, n, r)), s = Kt(fe(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, s)) {
        var a = r(i, ".".concat(s), void 0, this.componentId);
        n.insertRules(this.componentId, s, a);
      }
      o = de(o, s), this.staticRulesId = s;
    }
    else {
      for (var c = fe(this.baseHash, r.hash), u = "", d = 0; d < this.rules.length; d++) {
        var l = this.rules[d];
        if (typeof l == "string") u += l, $.NODE_ENV !== "production" && (c = fe(c, l));
        else if (l) {
          var h = Qt(pe(l, t, n, r));
          c = fe(c, h + d), u += h;
        }
      }
      if (u) {
        var _ = Kt(c >>> 0);
        n.hasNameForId(this.componentId, _) || n.insertRules(this.componentId, _, r(u, ".".concat(_), void 0, this.componentId)), o = de(o, _);
      }
    }
    return o;
  }, e;
}(), Ve = re.createContext(void 0);
Ve.Consumer;
function po() {
  var e = Ke(Ve);
  if (!e) throw Z(18);
  return e;
}
function Is(e) {
  var t = re.useContext(Ve), n = ne(function() {
    return function(r, o) {
      if (!r) throw Z(14);
      if (ve(r)) {
        var i = r(o);
        if ($.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object")) throw Z(7);
        return i;
      }
      if (Array.isArray(r) || typeof r != "object") throw Z(8);
      return o ? P(P({}, o), r) : r;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? re.createElement(Ve.Provider, { value: n }, e.children) : null;
}
var Mt = {}, or = /* @__PURE__ */ new Set();
function xs(e, t, n) {
  var r = vn(e), o = e, i = !Dt(e), s = t.attrs, a = s === void 0 ? Nt : s, c = t.componentId, u = c === void 0 ? function(b, k) {
    var v = typeof b != "string" ? "sc" : Kn(b);
    Mt[v] = (Mt[v] || 0) + 1;
    var y = "".concat(v, "-").concat(no(Ot + v + Mt[v]));
    return k ? "".concat(k, "-").concat(y) : y;
  }(t.displayName, t.parentComponentId) : c, d = t.displayName, l = d === void 0 ? function(b) {
    return Dt(b) ? "styled.".concat(b) : "Styled(".concat(ro(b), ")");
  }(e) : d, h = t.displayName && t.componentId ? "".concat(Kn(t.displayName), "-").concat(t.componentId) : t.componentId || u, _ = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, m = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var E = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var w = t.shouldForwardProp;
      m = function(b, k) {
        return E(b, k) && w(b, k);
      };
    } else m = E;
  }
  var p = new Ts(n, h, r ? o.componentStyle : void 0);
  function g(b, k) {
    return function(v, y, U) {
      var V = v.attrs, F = v.componentStyle, Ee = v.defaultProps, wo = v.foldedComponentIds, bn = v.styledComponentId, bo = v.target, $o = re.useContext(Ve), Oo = tn(), kt = v.shouldForwardProp || Oo.shouldForwardProp;
      $.NODE_ENV !== "production" && mt(bn);
      var $n = qi(y, $o, Ee) || Te, X = function(Qe, Pe, Je) {
        for (var we, le = P(P({}, Pe), { className: void 0, theme: Je }), xt = 0; xt < Qe.length; xt += 1) {
          var et = ve(we = Qe[xt]) ? we(le) : we;
          for (var oe in et) le[oe] = oe === "className" ? de(le[oe], et[oe]) : oe === "style" ? P(P({}, le[oe]), et[oe]) : et[oe];
        }
        return Pe.className && (le.className = de(le.className, Pe.className)), le;
      }(V, y, $n), Re = X.as || bo, Le = {};
      for (var B in X) X[B] === void 0 || B[0] === "$" || B === "as" || B === "theme" && X.theme === $n || (B === "forwardedAs" ? Le.as = X.forwardedAs : kt && !kt(B, Re) || (Le[B] = X[B], kt || $.NODE_ENV !== "development" || Yo(B) || or.has(B) || !Xt.has(Re) || (or.add(B), console.warn('styled-components: it looks like an unknown prop "'.concat(B, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Tt = function(Qe, Pe) {
        var Je = tn(), we = Qe.generateAndInjectStyles(Pe, Je.styleSheet, Je.stylis);
        return $.NODE_ENV !== "production" && mt(we), we;
      }(F, X);
      $.NODE_ENV !== "production" && v.warnTooManyClasses && v.warnTooManyClasses(Tt);
      var It = de(wo, bn);
      return Tt && (It += " " + Tt), X.className && (It += " " + X.className), Le[Dt(Re) && !Xt.has(Re) ? "class" : "className"] = It, Le.ref = U, D(Re, Le);
    }(O, b, k);
  }
  g.displayName = l;
  var O = re.forwardRef(g);
  return O.attrs = _, O.componentStyle = p, O.displayName = l, O.shouldForwardProp = m, O.foldedComponentIds = r ? de(o.foldedComponentIds, o.styledComponentId) : "", O.styledComponentId = h, O.target = r ? o.target : e, Object.defineProperty(O, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(b) {
    this._foldedDefaultProps = r ? function(k) {
      for (var v = [], y = 1; y < arguments.length; y++) v[y - 1] = arguments[y];
      for (var U = 0, V = v; U < V.length; U++) Jt(k, V[U], !0);
      return k;
    }({}, o.defaultProps, b) : b;
  } }), $.NODE_ENV !== "production" && (Zi(l, h), O.warnTooManyClasses = /* @__PURE__ */ function(b, k) {
    var v = {}, y = !1;
    return function(U) {
      if (!y && (v[U] = !0, Object.keys(v).length >= 200)) {
        var V = k ? ' with the id of "'.concat(k, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(b).concat(V, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), y = !0, v = {};
      }
    };
  }(l, h)), Sn(O, function() {
    return ".".concat(O.styledComponentId);
  }), i && ao(O, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), O;
}
function ir(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var sr = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function wn(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (ve(e) || Ie(e)) return sr(pe(ir(Nt, ye([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? pe(r) : sr(pe(ir(r, t)));
}
function rn(e, t, n) {
  if (n === void 0 && (n = Te), !t) throw Z(1, t);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(t, n, wn.apply(void 0, ye([o], i, !1)));
  };
  return r.attrs = function(o) {
    return rn(e, t, P(P({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return rn(e, t, P(P({}, n), o));
  }, r;
}
var mo = function(e) {
  return rn(xs, e);
}, H = mo;
Xt.forEach(function(e) {
  H[e] = mo(e);
});
function ce(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  $.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = Qt(wn.apply(void 0, ye([e], t, !1))), o = no(r);
  return new nn(o, r);
}
$.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var st = "__sc-".concat(Ce, "__");
$.NODE_ENV !== "production" && $.NODE_ENV !== "test" && typeof window < "u" && (window[st] || (window[st] = 0), window[st] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[st] += 1);
const K = {
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
}, ar = 0.24, As = 24, Rs = 2, go = 14, Ls = 0.0276;
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
}, cr = {
  loading: { text: "Loading. Please wait.", visible: !0 },
  done: { text: "Waiting for input...", visible: !0 }
}, Ps = {
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
}, Ds = {
  ...Ps,
  [_e.SMILE]: "Smile :)",
  [_e.SMILE_CANDIDATE_SELECTION]: "Smile :)",
  [_e.KEEP_NEUTRAL_EXPRESSION]: "Keep neutral expression"
}, Ms = "rgba(19, 19, 19, 0.5)", Hs = 34;
function lr(e, t) {
  return Math.max(t, t + (e - 400) * Ls + 2);
}
const Us = (e, t = go) => e ? e.width < e.height ? lr(e.width, t) : lr(e.height, t) : t, Fs = (e) => e > J.Default ? Ue[J.Default] : e > J.L ? Ue[J.L] : e > J.M ? Ue[J.M] : Ue[J.S], Bs = (e) => e ? Fs(e.width) : Ue[J.Default];
function Ws() {
  const e = "https://fonts.googleapis.com/css?family=Montserrat:600";
  if (!document.querySelector(`link[href="${e}"]`)) {
    const n = document.createElement("link");
    n.href = e, n.rel = "stylesheet", document.head.appendChild(n);
  }
}
const ze = Nr(void 0);
ze.displayName = "UiCustomizationContext";
function Se() {
  const e = Ke(ze);
  if (!e)
    throw new Error(
      `${ze.displayName} must be used within a ${ze.displayName} Provider`
    );
  return e;
}
function zs({ children: e, props: t, videoElementSize: n }) {
  const { font: r } = po(), o = ne(
    () => ({ ...t, videoElementSize: n, fontSize: Us(n, r.minimumSize) }),
    [t, r.minimumSize, n]
  );
  return /* @__PURE__ */ f(ze.Provider, { value: o, children: e });
}
function js(e, t) {
  return e ? `${e}, ${t}` : t;
}
const Gs = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, Vs = {
  family: "Montserrat, Arial, sans-serif",
  weight: "600",
  style: "normal",
  minimumSize: go
}, De = {
  colors: Gs,
  font: Vs
}, Ys = (e) => {
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
      family: js((t = e.font) == null ? void 0 : t.family, De.font.family)
    }
  } : De;
}, yo = ({ svgSize: e }) => /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 16 14", width: e, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
  "path",
  {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), Zs = H.div`
  width: 100%;
  height: 100%;
  top: 0;
  position: ${(e) => e.$position};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${(e) => !e.$isCameraReady && `
    height: inherit;
    aspect-ratio: 16/9;

    @media (orientation: portrait) and (max-width: 1199px) {
      aspect-ratio: 9/16;
    }
  `}
`, qs = H.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, Xs = H.p`
  background: ${(e) => e.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(e) => `${e.$fontSize}px`};
  line-height: 1em;
  max-width: 80%;
`, on = ({ Icon: e, isCameraReady: t, position: n = "absolute", text: r }) => {
  const { fontSize: o } = Se();
  return /* @__PURE__ */ f(Zs, { $isCameraReady: t, $position: n, children: /* @__PURE__ */ f(qs, { children: [
    e ? /* @__PURE__ */ f(e, { svgSize: o * 2 }) : null,
    /* @__PURE__ */ f(Xs, { $fontSize: o, children: r })
  ] }) });
}, Co = ({ text: e = "An unknown error has occurred" }) => /* @__PURE__ */ f(on, { Icon: yo, position: "relative", text: e });
class Ks extends j {
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
    return this.state.hasError ? /* @__PURE__ */ f(Co, { Icon: yo, isCameraReady: !1 }) : this.props.children;
  }
}
const Qs = H.div`
  font-family: ${(e) => e.theme.font.family};
  font-style: ${(e) => e.theme.font.style};
  font-weight: ${(e) => e.theme.font.weight};
`, Js = ({ children: e, uiProps: t, videoElementSize: n }) => {
  const r = Ys(t.theme);
  return q(() => {
    Ws();
  }, []), /* @__PURE__ */ f($s, { target: t.styleTarget, children: /* @__PURE__ */ f(Is, { theme: r, children: /* @__PURE__ */ f(Qs, { children: /* @__PURE__ */ f(Ks, { videoElementSize: n, children: /* @__PURE__ */ f(zs, { props: t, videoElementSize: n, children: e }) }) }) }) });
}, Ye = (e, t) => {
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
}, ea = (e) => {
  const [t, n] = M(), r = ge(
    (o) => {
      var i;
      n((i = o.detail) == null ? void 0 : i.size);
    },
    [n]
  );
  return Ye(e, r), t;
}, ta = 0.75, Fe = (e, t) => Math.hypot(t.x - e.x, t.y - e.y), ur = (e, t, n) => {
  const r = (t.x - e.x) * n, o = (t.y - e.y) * n;
  return {
    x: e.x + r,
    y: e.y + o
  };
}, fr = (e, t, n, r) => {
  const o = Fe(e, t);
  return n * r / o;
}, na = (e, t) => Math.min(e, t), ra = ({ height: e, width: t }) => {
  const n = na(t, e) * ta, r = (t - n) / 2, o = (e - n) / 2;
  return {
    shiftX: r,
    shiftY: o,
    width: n,
    height: n
  };
}, oa = (e) => {
  const { height: t, shiftX: n, shiftY: r, width: o } = ra(e);
  return {
    shiftX: n / e.width,
    shiftY: r / e.height,
    width: o / e.width,
    height: t / e.height
  };
}, vo = (e, t) => {
  document.dispatchEvent(
    new CustomEvent(e, {
      detail: t
    })
  );
}, Ct = class Ct {
  constructor() {
    tt(this, "lastDetails", {});
    tt(this, "delayedTime", 0);
  }
  static getInstance() {
    return this._instance || (this._instance = new Ct()), this._instance;
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
    this.isDetailChanged(t, n) && vo(t, n);
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
tt(Ct, "_instance");
let sn = Ct;
sn.getInstance();
const dr = (e, t) => {
  vo(e, {
    instruction: t
  });
};
async function ia() {
  return navigator.mediaDevices.enumerateDevices();
}
async function sa() {
  return (await ia()).filter((t) => t.kind === "videoinput");
}
const aa = () => {
  const [e, t] = M(!1);
  return q(() => {
    (async () => {
      (await sa()).length > 1 && t(!0);
    })();
  }, []), e;
}, ca = ({ size: e }) => /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }), la = ({ size: e }) => /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: "52", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ f("circle", { cx: "26", cy: "26", fill: "#131313", fillOpacity: "0.3", r: "26" }),
  /* @__PURE__ */ f(
    "path",
    {
      d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
      fill: "white"
    }
  )
] }), So = H.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(e) => e.$marginLeft ? `${e.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, ua = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ f(So, { $marginLeft: e, ...n, children: /* @__PURE__ */ f(ca, { size: t }) }), fa = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ f(So, { $marginLeft: e, ...n, children: /* @__PURE__ */ f(la, { size: t }) }), da = H.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.$padding}px`};
  z-index: 2;
`, _a = ({
  customControlEvent: e,
  isSwitchCameraDisabled: t
}) => {
  const { showCameraButtons: n, videoElementSize: r } = Se(), o = aa();
  if (!n)
    return null;
  const { buttonPadding: i, iconSize: s, marginLeft: a } = Bs(r);
  return /* @__PURE__ */ f(da, { $padding: i, children: [
    o && /* @__PURE__ */ f(fa, { disabled: t, onClick: () => {
      dr(e, zt.SWITCH_CAMERA);
    }, size: s }),
    /* @__PURE__ */ f(
      ua,
      {
        marginLeft: o ? a : 0,
        onClick: () => {
          dr(e, zt.TOGGLE_MIRROR);
        },
        size: s
      }
    )
  ] });
}, ha = "2.5s", pa = "0.3s", ma = "linear", ga = ce`
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
const ya = H.div`
  position: absolute;
  left: 50%;

  ${(e) => e.$cssTop ? `top: ${e.$cssTop}%;` : ""}
  ${(e) => e.$cssBottom ? `bottom: ${e.$cssBottom}%;` : ""}
    ${(e) => e.$isAnimating && wn`
      animation: ${ga} ${pa}
        ${ma} both;
      animation-delay: ${ha};

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
`, Ca = H.div`
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
`, va = ({
  children: e,
  cssBottom: t,
  cssTop: n,
  isAnimating: r,
  isInCandidateSelection: o,
  isPortrait: i
}) => {
  const { fontSize: s } = Se();
  return /* @__PURE__ */ f(ya, { $cssBottom: t, $cssTop: n, $isAnimating: r, $isPortrait: i, children: /* @__PURE__ */ f(
    Ca,
    {
      $fontSize: s,
      $isInCandidateSelection: o,
      $wrap: e.length > Hs,
      children: e
    }
  ) });
}, Sa = H.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, Ea = ({ svgSize: e }) => /* @__PURE__ */ f(Sa, { children: /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 48 48", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }) }), wa = H.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`, Eo = ({ children: e, height: t, width: n }) => {
  const { backdropColor: r } = Se();
  return /* @__PURE__ */ f(wa, { children: /* @__PURE__ */ f("svg", { viewBox: `0 0 ${n} ${t}`, children: [
    /* @__PURE__ */ f("defs", { children: /* @__PURE__ */ f("mask", { id: "mask", children: [
      /* @__PURE__ */ f("rect", { fill: "#fff", height: "100%", width: "100%" }),
      e
    ] }) }),
    /* @__PURE__ */ f("rect", { fill: r, height: "100%", mask: "url(#mask)", width: "100%" })
  ] }) });
};
function ba({
  cameraHeight: e,
  cameraWidth: t,
  state: n
}) {
  const { appStateInstructions: r } = Se();
  return !n || n === "ERROR" || !(r != null && r[n].visible) ? null : n === "DONE" ? /* @__PURE__ */ f(W, { children: [
    e && t && /* @__PURE__ */ f(Eo, { height: e, width: t }),
    /* @__PURE__ */ f(on, { isCameraReady: !0, text: r[n].text })
  ] }) : /* @__PURE__ */ f(on, { Icon: Ea, isCameraReady: !0, text: r[n].text });
}
function $a(e) {
  return /* @__PURE__ */ f("rect", { fill: "#000", ...e, rx: "50%" });
}
const Oa = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
  "path",
  {
    d: "M2 240C2 108.556 108.556 2 240 2C371.444 2 478 108.556 478 240C478 371.444 371.444 478 240 478C108.556 478 2 371.444 2 240Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  }
) }), Na = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
  "path",
  {
    d: "M38.9231 240C38.9231 108.23 129.248 2 240 2C350.752 2 441.077 108.23 441.077 240C441.077 371.77 350.752 478 240 478C129.248 478 38.9231 371.77 38.9231 240Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  }
) }), ka = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
  "path",
  {
    clipRule: "evenodd",
    d: "M123.592 81.0326C143.203 50.4946 180.289 34 240 34C299.711 34 336.797 50.4946 356.408 81.0326C375.742 111.138 377.681 154.313 368.661 207.051C371.545 208.577 374.834 210.748 377.278 215.028C380.075 219.925 381.612 227.297 380.77 239.048C379.202 260.93 372.883 270.75 366.157 276.198C363.521 278.333 360.842 279.765 358.659 280.932C358.141 281.209 357.651 281.471 357.196 281.724C354.727 283.097 353.459 284.114 352.94 285.588C346.115 312.745 335.656 325.235 326.992 335.581C325.711 337.111 324.469 338.595 323.283 340.072C318.736 345.738 315.077 351.244 313.058 359.018C311.036 366.806 310.62 377.042 312.887 392.189C323.28 427.534 349.601 445.607 379.548 458.155C380.567 458.582 381.047 459.754 380.62 460.773C380.193 461.792 379.021 462.271 378.002 461.845C347.548 449.083 319.871 430.304 309.01 393.182L308.972 393.052L308.952 392.918C306.617 377.396 306.974 366.534 309.187 358.012C311.409 349.454 315.459 343.431 320.164 337.568C321.377 336.057 322.636 334.552 323.926 333.011C332.525 322.737 342.484 310.837 349.08 284.533L349.099 284.458L349.124 284.385C350.161 281.284 352.747 279.621 355.253 278.228C355.794 277.927 356.344 277.632 356.902 277.333C359.061 276.176 361.329 274.961 363.639 273.09C369.248 268.547 375.264 259.921 376.78 238.762C377.594 227.404 376.048 220.94 373.805 217.012C371.594 213.141 368.56 211.453 365.547 209.952L364.214 209.287L364.469 207.818C373.737 154.637 371.701 112.248 353.043 83.194C334.485 54.2962 299.065 38 240 38C180.935 38 145.516 54.2962 126.958 83.194C108.3 112.248 106.264 154.637 115.531 207.818L115.787 209.287L114.453 209.952C111.441 211.453 108.406 213.141 106.196 217.012C103.953 220.94 102.406 227.404 103.22 238.762C104.736 259.921 110.753 268.547 116.361 273.09C118.672 274.961 120.94 276.176 123.099 277.333C123.656 277.632 124.206 277.927 124.748 278.228C127.254 279.621 129.84 281.284 130.877 284.385L130.901 284.458L130.92 284.533C137.517 310.837 147.476 322.737 156.074 333.011C157.364 334.552 158.624 336.057 159.837 337.568C164.542 343.431 168.592 349.454 170.814 358.012C173.026 366.534 173.384 377.396 171.048 392.918L171.028 393.052L170.99 393.182C160.129 430.304 132.452 449.083 101.998 461.845C100.979 462.271 99.8075 461.792 99.3806 460.773C98.9537 459.754 99.4335 458.582 100.452 458.155C130.399 445.607 156.721 427.534 167.113 392.189C169.381 377.042 168.964 366.806 166.942 359.018C164.924 351.244 161.264 345.738 156.717 340.072C155.532 338.595 154.29 337.111 153.008 335.581C144.345 325.235 133.886 312.745 127.061 285.588C126.541 284.114 125.273 283.097 122.804 281.724C122.349 281.471 121.859 281.209 121.341 280.932C119.159 279.765 116.479 278.333 113.844 276.198C107.117 270.75 100.798 260.93 99.2303 239.048C98.3883 227.297 99.9259 219.925 102.722 215.028C105.166 210.748 108.455 208.577 111.339 207.051C102.319 154.313 104.259 111.138 123.592 81.0326Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), Ta = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
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
) }), Ia = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
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
) }), xa = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f("rect", { height: "476", rx: "14", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "4", width: "476", x: "2", y: "2" }) }), Aa = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f("rect", { height: "476", rx: "2", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "4", width: "476", x: "2", y: "2" }) }), Ra = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
  "path",
  {
    clipRule: "evenodd",
    d: "M126.126 87.8654C147.739 56.7835 184.591 34.0001 239.665 34.0001C239.779 34.0001 239.891 34.0096 240 34.0279C240.109 34.0096 240.221 34.0001 240.335 34.0001C295.41 34.0001 332.261 56.7835 353.874 87.8654C375.428 118.862 381.724 157.957 376.086 190.544C373.539 205.262 371.039 233.823 376.056 253.971C380.828 273.135 387.879 290.154 393.431 303.54L393.491 303.685C396.23 310.287 398.627 316.064 400.16 320.726C400.933 323.077 401.511 325.214 401.797 327.079C402.073 328.879 402.11 330.618 401.637 332.107C399.79 339.478 396.615 344.943 392.398 348.881C388.174 352.825 383.031 355.122 377.446 356.355C366.388 358.799 353.231 357.133 341.237 355.551C340.93 355.51 340.623 355.47 340.317 355.43C334.586 354.672 329.126 353.951 324.151 353.668C318.894 353.368 314.374 353.574 310.799 354.649C307.298 355.702 304.789 357.558 303.304 360.596C301.785 363.704 301.203 368.322 302.207 375.153C309.297 399.432 323.779 413.44 341.432 422.745C356.457 430.665 373.692 435.144 390.741 439.575C393.916 440.401 397.085 441.224 400.232 442.068C401.298 442.354 401.931 443.451 401.645 444.518C401.359 445.585 400.262 446.218 399.196 445.932C396.115 445.106 392.991 444.294 389.842 443.477C372.804 439.052 355.041 434.44 339.567 426.283C321.093 416.546 305.757 401.713 298.328 376.139L298.29 376.01L298.271 375.877C297.181 368.587 297.678 362.998 299.71 358.839C301.787 354.59 305.326 352.119 309.647 350.819C313.895 349.541 318.973 349.366 324.378 349.674C329.508 349.966 335.107 350.706 340.788 351.457C341.112 351.5 341.436 351.543 341.76 351.585C353.925 353.19 366.342 354.713 376.583 352.45C381.65 351.33 386.088 349.3 389.668 345.957C393.241 342.621 396.083 337.86 397.773 331.072L397.791 330.998L397.815 330.925C398.022 330.302 398.087 329.272 397.843 327.686C397.605 326.133 397.102 324.232 396.36 321.976C394.875 317.458 392.525 311.794 389.74 305.081L389.737 305.073C384.19 291.701 377.028 274.428 372.174 254.937C366.952 233.964 369.571 204.733 372.144 189.862C377.623 158.197 371.48 120.191 350.59 90.149C329.759 60.1924 294.162 38.0001 240.335 38.0001C240.221 38.0001 240.109 37.9905 240 37.9722C239.891 37.9905 239.779 38.0001 239.665 38.0001C185.838 38.0001 150.241 60.1924 129.41 90.149C108.52 120.191 102.377 158.197 107.856 189.862C110.429 204.733 113.048 233.964 107.826 254.937C102.972 274.428 95.8101 291.701 90.2633 305.073L90.2607 305.079C87.4756 311.793 85.1256 317.458 83.6398 321.976C82.8977 324.232 82.3951 326.133 82.1567 327.686C81.9133 329.272 81.9778 330.302 82.1847 330.925L82.2088 330.998L82.2273 331.072C83.9176 337.86 86.7592 342.621 90.3324 345.957C93.9121 349.3 98.3505 351.33 103.417 352.45C113.658 354.713 126.075 353.19 138.24 351.585C138.564 351.543 138.888 351.5 139.212 351.457C144.893 350.706 150.492 349.966 155.622 349.674C161.027 349.366 166.105 349.541 170.353 350.819C174.674 352.119 178.213 354.59 180.29 358.839C182.323 362.998 182.819 368.587 181.73 375.877L181.71 376.01L181.672 376.139C174.243 401.713 158.907 416.546 140.433 426.283C124.959 434.44 107.196 439.052 90.1584 443.477C87.0093 444.294 83.8851 445.106 80.8046 445.932C79.7377 446.218 78.6409 445.585 78.3548 444.518C78.0687 443.451 78.7017 442.354 79.7685 442.068C82.9154 441.224 86.0842 440.401 89.2594 439.575C106.308 435.144 123.543 430.665 138.568 422.745C156.221 413.44 170.703 399.432 177.793 375.153C178.797 368.322 178.215 363.704 176.696 360.596C175.211 357.558 172.702 355.702 169.201 354.649C165.626 353.574 161.106 353.368 155.849 353.668C150.874 353.951 145.414 354.672 139.683 355.43C139.377 355.47 139.07 355.51 138.763 355.551C126.769 357.133 113.613 358.799 102.554 356.355C96.9695 355.122 91.8259 352.825 87.6024 348.881C83.3855 344.943 80.2095 339.478 78.3628 332.107C77.8896 330.618 77.9268 328.879 78.203 327.079C78.4892 325.214 79.0667 323.077 79.84 320.726C81.3732 316.064 83.7701 310.286 86.5089 303.684L86.5686 303.54C92.1215 290.154 99.1722 273.135 103.944 253.971C108.961 233.823 106.461 205.262 103.914 190.544C98.2759 157.957 104.572 118.862 126.126 87.8654Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), La = H.div`
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
`, Pa = ({ children: e, isInCandidateSelection: t, placeholderRectangle: n }) => /* @__PURE__ */ f(La, { $isInCandidateSelection: t, $placeholderRectangle: n, children: e }), Da = {
  [K.CIRCLE_SOLID]: /* @__PURE__ */ f(Oa, {}),
  [K.ELLIPSE_SOLID]: /* @__PURE__ */ f(Na, {}),
  [K.MAN_SOLID]: /* @__PURE__ */ f(ka, {}),
  [K.WOMAN_SOLID]: /* @__PURE__ */ f(Ra, {}),
  [K.SQUARE_ROUNDED_DASH]: /* @__PURE__ */ f(Ia, {}),
  [K.SQUARE_ROUNDED_SOLID]: /* @__PURE__ */ f(xa, {}),
  [K.SQUARE_DASH]: /* @__PURE__ */ f(Ta, {}),
  [K.SQUARE_SOLID]: /* @__PURE__ */ f(Aa, {})
}, Ma = ({ backdropHeight: e, backdropWidth: t, isBackdrop: n, placeholderRectangle: r, ...o }) => {
  const { placeholder: i } = Se();
  return /* @__PURE__ */ f(W, { children: [
    n && /* @__PURE__ */ f(Eo, { height: e, width: t, children: /* @__PURE__ */ f(
      $a,
      {
        height: `${r.height * 100}%`,
        width: `${r.width * 100}%`,
        x: `${r.shiftX * 100}%`,
        y: `${r.shiftY * 100}%`
      }
    ) }),
    /* @__PURE__ */ f(Pa, { placeholderRectangle: r, ...o, children: Da[i] })
  ] });
}, Ha = H.canvas`
  transform: ${(e) => e.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, Ua = (e) => {
  const { bottomLeft: t, bottomRight: n, topLeft: r, topRight: o } = e, i = Fe(r, o), s = Fe(o, n), a = Fe(t, n), c = Fe(r, t);
  return Math.min(i, s, a, c);
}, Fa = (e) => {
  const t = e.getContext("2d");
  t && t.clearRect(0, 0, t.canvas.width, t.canvas.height);
}, Ba = ({ cameraResolution: e, isImageMirror: t }) => {
  const n = Xe(null), r = po(), [o, i] = M(), s = ge(
    (a) => {
      var c;
      i((c = a == null ? void 0 : a.detail) == null ? void 0 : c.detectedObject);
    },
    [i]
  );
  return Ye(Tr.DETECTED_DOCUMENT_CHANGED, s), q(() => {
    if (!n.current)
      return;
    const a = (u, d, l, h) => {
      var g;
      const _ = fr(
        d,
        u,
        h,
        ar
      ), m = fr(
        d,
        l,
        h,
        ar
      ), E = ur(d, u, _), w = ur(d, l, m), p = (g = n == null ? void 0 : n.current) == null ? void 0 : g.getContext("2d");
      p && (p.beginPath(), p.lineWidth = Rs, p.strokeStyle = r.colors.placeholderColor, p.moveTo(E.x, E.y), p.arcTo(d.x, d.y, w.x, w.y, As), p.lineTo(w.x, w.y), p.stroke());
    }, c = (u) => {
      if (!u)
        return;
      const { bottomLeft: d, bottomRight: l, topLeft: h, topRight: _ } = u, m = Ua(u);
      a(d, h, _, m), a(h, _, l, m), a(_, l, d, m), a(l, d, h, m);
    };
    n.current.width = e.width, n.current.height = e.height, Fa(n.current), c(o);
  }, [e, o, r.colors.placeholderColor]), /* @__PURE__ */ f(Ha, { ref: n, $isImageMirror: t });
}, Wa = () => {
  const [e, t] = M(), [n, r] = M(!1), o = ge(
    (c) => {
      var d, l;
      t((d = c == null ? void 0 : c.detail) == null ? void 0 : d.cameraResolution);
      const u = (l = c == null ? void 0 : c.detail) == null ? void 0 : l.isMirroring;
      u !== void 0 && r(u);
    },
    [t]
  );
  Ye(Ge.CAMERA_PROPS_CHANGED, o);
  const [i, s] = M(
    L.FACE_NOT_PRESENT
    // FIXME Default instruction should not be here
  ), a = ge(
    (c) => {
      var u;
      s((u = c == null ? void 0 : c.detail) == null ? void 0 : u.instructionCode);
    },
    [s]
  );
  return Ye(Ge.INSTRUCTION_CHANGED, a), {
    cameraResolution: e,
    instructionCode: i,
    isMirroring: n
  };
}, za = () => {
  const [e, t] = M(pt.NEUTRAL), [n, r] = M($e.LOADING), [o, i] = M(), s = ge(
    (a) => {
      const { error: c, phase: u, state: d } = a.detail || {};
      u && t(u), d && r(d), c && i(c);
    },
    [t, r, i]
  );
  return Ye(Ir.STATUS_CHANGED, s), {
    smilePhase: e,
    smileState: n,
    smileError: o
  };
}, _r = ".3s", ja = ".2s", Ga = ".8s", hr = ".4s", pr = ".4s", Va = ".5s", Ya = "1.5s", Za = 2e3, mr = ce`
0%, 100% {
    transform: scale(1);
}
50% {
    transform: scale(2);
}
`, qa = ce`
0%, 100% {
    transform: scale(1,1);
    opacity: 1;
}
50% {
    transform: scale(1,0.1);
    opacity: 0.5;
}
`, gr = ce`
0% {
    stroke-dashoffset: 100;
}
100% {
    stroke-dashoffset: 200;
}
`, Xa = ce`
 from {
    opacity: 1;
}
to {
    opacity: 0;
}
`, Ka = (e, t) => {
  const [n, r] = M(!1);
  return q(() => {
    t === pt.SMILE && r(!0);
    const o = setTimeout(() => {
      r(!1);
    }, Za);
    return () => clearTimeout(o);
  }, [t]), t === pt.SMILE && e === _e.CANDIDATE_SELECTION ? _e.SMILE_CANDIDATE_SELECTION : n ? _e.SMILE : e;
}, Qa = H.div`
  position: absolute;
  top: ${(e) => e.$initialPosition.shiftY * 100}%;
  bottom: ${(e) => (1 - e.$initialPosition.shiftY - e.$initialPosition.height) * 100}%;
  left: ${(e) => e.$initialPosition.shiftX * 100}%;
  right: ${(e) => (1 - e.$initialPosition.shiftX - e.$initialPosition.width) * 100}%;
  animation: ${Xa} ${Va} ${Ya} ease-in-out;
  animation-fill-mode: forwards;

  #left-mouth {
    fill: none;
    stroke: #ffffff;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: ${gr} ${hr} ${pr} forwards;
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
    animation: ${gr} ${hr} ${pr} forwards;
  }
  #left-eye {
    transform-origin: 86.8px 96px;
    fill: #ffffff;
    animation: ${mr} ${_r} forwards;
  }
  #right-eye {
    transform-origin: 173.2px 96px;
    fill: #ffffff;
    animation:
      ${mr} ${_r} forwards,
      ${qa} ${ja} ${Ga} forwards;
  }
`, Ja = ({ initialPosition: e }) => /* @__PURE__ */ f(Qa, { $initialPosition: e, children: /* @__PURE__ */ f("svg", { viewBox: "0 0 260 260", children: [
  /* @__PURE__ */ f("circle", { cx: "86.8", cy: "96", id: "left-eye", r: "9.6" }),
  /* @__PURE__ */ f("circle", { cx: "173.2", cy: "96", id: "right-eye", r: "9.6" }),
  /* @__PURE__ */ f("path", { d: "M62.8,156.3c0,0,20.4,35.4,66.6,35.4", id: "left-mouth" }),
  /* @__PURE__ */ f("path", { d: "M42.8,156.3c0,0,20.4,35.4,66.6,35.4", id: "right-mouth" })
] }) }), ec = () => {
  const { cameraResolution: e, instructionCode: t, isMirroring: n } = Wa(), { smileError: r, smilePhase: o, smileState: i } = za(), s = Ka(t, o), { instructions: a } = Se(), c = t === _e.CANDIDATE_SELECTION, u = o === pt.SMILE;
  if (i === $e.ERROR)
    return /* @__PURE__ */ f(Co, { text: r == null ? void 0 : r.message });
  if ((i === $e.RUNNING || i === $e.WAITING) && e) {
    const d = oa(e);
    return /* @__PURE__ */ f(W, { children: [
      !u && /* @__PURE__ */ f(Ba, { cameraResolution: e, isImageMirror: n }),
      /* @__PURE__ */ f(
        Ma,
        {
          backdropHeight: e.height,
          backdropWidth: e.width,
          isBackdrop: !0,
          isInCandidateSelection: c,
          placeholderRectangle: d
        }
      ),
      u && /* @__PURE__ */ f(Ja, { initialPosition: d }),
      s && /* @__PURE__ */ f(
        va,
        {
          cssBottom: (d.height + d.shiftY) * 100,
          isAnimating: !1,
          isInCandidateSelection: c,
          isPortrait: e.width < e.height,
          children: a[s]
        }
      ),
      /* @__PURE__ */ f(_a, { customControlEvent: Ge.CONTROL, isSwitchCameraDisabled: c })
    ] });
  }
  return /* @__PURE__ */ f(
    ba,
    {
      cameraHeight: e == null ? void 0 : e.height,
      cameraWidth: e == null ? void 0 : e.width,
      state: i
    }
  );
}, tc = (e) => {
  var i, s;
  const t = {
    ...Ds,
    ...e == null ? void 0 : e.instructions
  };
  t.mouth_score_too_low = t.smile, t.mouth_score_too_high = t.keep_neutral_expression;
  const n = {
    [$e.LOADING]: {
      ...cr.loading,
      ...(i = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : i.loading
    },
    [$e.DONE]: { ...cr.done, ...(s = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : s.done }
  }, r = (e == null ? void 0 : e.backdropColor) ?? Ms, o = (e == null ? void 0 : e.showCameraButtons) ?? !1;
  return {
    placeholder: K.CIRCLE_SOLID,
    backdropColor: r,
    instructions: t,
    appStateInstructions: n,
    showCameraButtons: o
  };
}, nc = ({ props: e }) => {
  const t = ea(Ge.VIDEO_ELEMENT_SIZE);
  return /* @__PURE__ */ f(Js, { uiProps: tc(e), videoElementSize: t, children: /* @__PURE__ */ f(ec, {}) });
};
Fo(nc, "x-dot-smile-liveness-ui", ["props"]);
