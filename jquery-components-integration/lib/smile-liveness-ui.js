var Eo = Object.defineProperty;
var wo = (e, t, n) => t in e ? Eo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Je = (e, t, n) => wo(e, typeof t != "symbol" ? t + "" : t, n);
var Ze, S, pr, fe, $n, mr, Mt, on, Ht, Ut, gr, ze = {}, yr = [], bo = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, yt = Array.isArray;
function ee(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function vr(e) {
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
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o ?? ++pr, __i: -1, __u: 0 };
  return o == null && S.vnode != null && S.vnode(i), i;
}
function $o() {
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
function Cr(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) {
      e.__e = e.__c.base = n.__e;
      break;
    }
    return Cr(e);
  }
}
function Ft(e) {
  (!e.__d && (e.__d = !0) && fe.push(e) && !dt.__r++ || $n !== S.debounceRendering) && (($n = S.debounceRendering) || mr)(dt);
}
function dt() {
  var e, t, n, r, o, i, s, a;
  for (fe.sort(Mt); e = fe.shift(); ) e.__d && (t = fe.length, r = void 0, i = (o = (n = e).__v).__e, s = [], a = [], n.__P && ((r = ee({}, o)).__v = o.__v + 1, S.vnode && S.vnode(r), sn(n.__P, r, o, n.__n, n.__P.namespaceURI, 32 & o.__u ? [i] : null, s, i ?? me(o), !!(32 & o.__u), a), r.__v = o.__v, r.__.__k[r.__i] = r, wr(s, r, a), r.__e != i && Cr(r)), fe.length > t && fe.sort(Mt));
  dt.__r = 0;
}
function Sr(e, t, n, r, o, i, s, a, c, u, d) {
  var l, h, _, y, E, $ = r && r.__k || yr, p = t.length;
  for (n.__d = c, ko(n, t, $), c = n.__d, l = 0; l < p; l++) (_ = n.__k[l]) != null && typeof _ != "boolean" && typeof _ != "function" && (h = _.__i === -1 ? ze : $[_.__i] || ze, _.__i = l, sn(e, _, h, o, i, s, a, c, u, d), y = _.__e, _.ref && h.ref != _.ref && (h.ref && an(h.ref, null, _), d.push(_.ref, _.__c || y, _)), E == null && y != null && (E = y), 65536 & _.__u || h.__k === _.__k ? (c && typeof _.type == "string" && !e.contains(c) && (c = me(h)), c = Er(_, c, e)) : typeof _.type == "function" && _.__d !== void 0 ? c = _.__d : y && (c = y.nextSibling), _.__d = void 0, _.__u &= -196609);
  n.__d = c, n.__e = E;
}
function ko(e, t, n) {
  var r, o, i, s, a, c = t.length, u = n.length, d = u, l = 0;
  for (e.__k = [], r = 0; r < c; r++) s = r + l, (o = e.__k[r] = (o = t[r]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? Be(null, o, null, null, null) : yt(o) ? Be(W, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? Be(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = e, o.__b = e.__b + 1, a = Oo(o, n, s, d), o.__i = a, i = null, a !== -1 && (d--, (i = n[a]) && (i.__u |= 131072)), i == null || i.__v === null ? (a == -1 && l--, typeof o.type != "function" && (o.__u |= 65536)) : a !== s && (a == s - 1 ? l = a - s : a == s + 1 ? l++ : a > s ? d > c - s ? l += a - s : l-- : a < s && l++, a !== r + l && (o.__u |= 65536))) : (i = n[s]) && i.key == null && i.__e && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = me(i)), Bt(i, i, !1), n[s] = null, d--);
  if (d) for (r = 0; r < u; r++) (i = n[r]) != null && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = me(i)), Bt(i, i));
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
function te(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (yt(e) ? e.some(function(n) {
    te(n, t);
  }) : t.push(e)), t;
}
function Oo(e, t, n, r) {
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
function kn(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || bo.test(t) ? n : n + "px";
}
function et(e, t, n, r, o) {
  var i;
  e: if (t === "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || kn(e.style, t, "");
    if (n) for (t in n) r && n[t] === r[t] || kn(e.style, t, n[t]);
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
function On(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t.t == null) t.t = on++;
      else if (t.t < n.u) return;
      return n(S.event ? S.event(t) : t);
    }
  };
}
function sn(e, t, n, r, o, i, s, a, c, u) {
  var d, l, h, _, y, E, $, p, m, k, w, N, C, g, U, V, F = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && (c = !!(32 & n.__u), i = [a = t.__e = n.__e]), (d = S.__b) && d(t);
  e: if (typeof F == "function") try {
    if (p = t.props, m = "prototype" in F && F.prototype.render, k = (d = F.contextType) && r[d.__c], w = d ? k ? k.props.value : d.__ : r, n.__c ? $ = (l = t.__c = n.__c).__ = l.__E : (m ? t.__c = l = new F(p, w) : (t.__c = l = new z(p, w), l.constructor = F, l.render = Io), k && k.sub(l), l.props = p, l.state || (l.state = {}), l.context = w, l.__n = r, h = l.__d = !0, l.__h = [], l._sb = []), m && l.__s == null && (l.__s = l.state), m && F.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = ee({}, l.__s)), ee(l.__s, F.getDerivedStateFromProps(p, l.__s))), _ = l.props, y = l.state, l.__v = t, h) m && F.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), m && l.componentDidMount != null && l.__h.push(l.componentDidMount);
    else {
      if (m && F.getDerivedStateFromProps == null && p !== _ && l.componentWillReceiveProps != null && l.componentWillReceiveProps(p, w), !l.__e && (l.shouldComponentUpdate != null && l.shouldComponentUpdate(p, l.__s, w) === !1 || t.__v === n.__v)) {
        for (t.__v !== n.__v && (l.props = p, l.state = l.__s, l.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(Ee) {
          Ee && (Ee.__ = t);
        }), N = 0; N < l._sb.length; N++) l.__h.push(l._sb[N]);
        l._sb = [], l.__h.length && s.push(l);
        break e;
      }
      l.componentWillUpdate != null && l.componentWillUpdate(p, l.__s, w), m && l.componentDidUpdate != null && l.__h.push(function() {
        l.componentDidUpdate(_, y, E);
      });
    }
    if (l.context = w, l.props = p, l.__P = e, l.__e = !1, C = S.__r, g = 0, m) {
      for (l.state = l.__s, l.__d = !1, C && C(t), d = l.render(l.props, l.state, l.context), U = 0; U < l._sb.length; U++) l.__h.push(l._sb[U]);
      l._sb = [];
    } else do
      l.__d = !1, C && C(t), d = l.render(l.props, l.state, l.context), l.state = l.__s;
    while (l.__d && ++g < 25);
    l.state = l.__s, l.getChildContext != null && (r = ee(ee({}, r), l.getChildContext())), m && !h && l.getSnapshotBeforeUpdate != null && (E = l.getSnapshotBeforeUpdate(_, y)), Sr(e, yt(V = d != null && d.type === W && d.key == null ? d.props.children : d) ? V : [V], t, n, r, o, i, s, a, c, u), l.base = t.__e, t.__u &= -161, l.__h.length && s.push(l), $ && (l.__E = l.__ = null);
  } catch (Ee) {
    t.__v = null, c || i != null ? (t.__e = a, t.__u |= c ? 160 : 32, i[i.indexOf(a)] = null) : (t.__e = n.__e, t.__k = n.__k), S.__e(Ee, t, n);
  }
  else i == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = No(n.__e, t, n, r, o, i, s, c, u);
  (d = S.diffed) && d(t);
}
function wr(e, t, n) {
  t.__d = void 0;
  for (var r = 0; r < n.length; r++) an(n[r], n[++r], n[++r]);
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
function No(e, t, n, r, o, i, s, a, c) {
  var u, d, l, h, _, y, E, $ = n.props, p = t.props, m = t.type;
  if (m === "svg" ? o = "http://www.w3.org/2000/svg" : m === "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (u = 0; u < i.length; u++) if ((_ = i[u]) && "setAttribute" in _ == !!m && (m ? _.localName === m : _.nodeType === 3)) {
      e = _, i[u] = null;
      break;
    }
  }
  if (e == null) {
    if (m === null) return document.createTextNode(p);
    e = document.createElementNS(o, m, p.is && p), i = null, a = !1;
  }
  if (m === null) $ === p || a && e.data === p || (e.data = p);
  else {
    if (i = i && Ze.call(e.childNodes), $ = n.props || ze, !a && i != null) for ($ = {}, u = 0; u < e.attributes.length; u++) $[(_ = e.attributes[u]).name] = _.value;
    for (u in $) if (_ = $[u], u != "children") {
      if (u == "dangerouslySetInnerHTML") l = _;
      else if (u !== "key" && !(u in p)) {
        if (u == "value" && "defaultValue" in p || u == "checked" && "defaultChecked" in p) continue;
        et(e, u, null, _, o);
      }
    }
    for (u in p) _ = p[u], u == "children" ? h = _ : u == "dangerouslySetInnerHTML" ? d = _ : u == "value" ? y = _ : u == "checked" ? E = _ : u === "key" || a && typeof _ != "function" || $[u] === _ || et(e, u, _, $[u], o);
    if (d) a || l && (d.__html === l.__html || d.__html === e.innerHTML) || (e.innerHTML = d.__html), t.__k = [];
    else if (l && (e.innerHTML = ""), Sr(e, yt(h) ? h : [h], t, n, r, m === "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, s, i ? i[0] : n.__k && me(n, 0), a, c), i != null) for (u = i.length; u--; ) i[u] != null && vr(i[u]);
    a || (u = "value", y !== void 0 && (y !== e[u] || m === "progress" && !y || m === "option" && y !== $[u]) && et(e, u, y, $[u], o), u = "checked", E !== void 0 && E !== e[u] && et(e, u, E, $[u], o));
  }
  return e;
}
function an(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    S.__e(r, n);
  }
}
function Bt(e, t, n) {
  var r, o;
  if (S.unmount && S.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || an(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (i) {
      S.__e(i, t);
    }
    r.base = r.__P = null;
  }
  if (r = e.__k) for (o = 0; o < r.length; o++) r[o] && Bt(r[o], t, n || typeof e.type != "function");
  n || e.__e == null || vr(e.__e), e.__c = e.__ = e.__e = e.__d = void 0;
}
function Io(e, t, n) {
  return this.constructor(e, n);
}
function ae(e, t, n) {
  var r, o, i, s;
  S.__ && S.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], s = [], sn(t, e = (!r && n || t).__k = D(W, null, [e]), o || ze, ze, t.namespaceURI, !r && n ? [n] : o ? null : t.firstChild ? Ze.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, s), wr(i, e, s);
}
function cn(e, t) {
  ae(e, t, cn);
}
function ln(e, t, n) {
  var r, o, i, s, a = ee({}, e.props);
  for (i in e.type && e.type.defaultProps && (s = e.type.defaultProps), t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i] === void 0 && s !== void 0 ? s[i] : t[i];
  return arguments.length > 2 && (a.children = arguments.length > 3 ? Ze.call(arguments, 2) : n), Be(e.type, a, r || e.key, o || e.ref, null);
}
function br(e, t) {
  var n = { __c: t = "__cC" + gr++, __: e, Consumer: function(r, o) {
    return r.children(o);
  }, Provider: function(r) {
    var o, i;
    return this.getChildContext || (o = [], (i = {})[t] = this, this.getChildContext = function() {
      return i;
    }, this.componentWillUnmount = function() {
      o = null;
    }, this.shouldComponentUpdate = function(s) {
      this.props.value !== s.value && o.some(function(a) {
        a.__e = !0, Ft(a);
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
Ze = yr.slice, S = { __e: function(e, t, n, r) {
  for (var o, i, s; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), s = o.__d), s) return o.__E = o;
  } catch (a) {
    e = a;
  }
  throw e;
} }, pr = 0, z.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ee({}, this.state), typeof e == "function" && (e = e(ee({}, n), this.props)), e && ee(n, e), e != null && this.__v && (t && this._sb.push(t), Ft(this));
}, z.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ft(this));
}, z.prototype.render = W, fe = [], mr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Mt = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, dt.__r = 0, on = 0, Ht = On(!1), Ut = On(!0), gr = 0;
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
function xo(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, n = function(r, o) {
    if (r == null) return {};
    var i, s, a = {}, c = Object.keys(r);
    for (s = 0; s < c.length; s++) o.indexOf(i = c[s]) >= 0 || (a[i] = r[i]);
    return a;
  }(e, To);
  return ln(t, n);
}
function Ao() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = D(xo, un({}, this._props, { context: e.detail.context }), function t(n, r) {
    if (n.nodeType === 3) return n.data;
    if (n.nodeType !== 1) return null;
    var o = [], i = {}, s = 0, a = n.attributes, c = n.childNodes;
    for (s = a.length; s--; ) a[s].name !== "slot" && (i[a[s].name] = a[s].value, i[$r(a[s].name)] = a[s].value);
    for (s = c.length; s--; ) {
      var u = t(c[s], null), d = c[s].slot;
      d ? i[d] = D(Nn, { name: d }, u) : o[s] = u;
    }
    var l = r ? D(Nn, null, o) : o;
    return D(r || n.nodeName.toLowerCase(), i, l);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? cn : ae)(this._vdom, this._root);
}
function $r(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function Ro(e, t, n) {
  if (this._vdom) {
    var r = {};
    r[e] = n = n ?? void 0, r[$r(e)] = n, this._vdom = ln(this._vdom, r), ae(this._vdom, this._root);
  }
}
function Lo() {
  ae(this._vdom = null, this._root);
}
function Nn(e, t) {
  var n = this;
  return D("slot", un({}, e, { ref: function(r) {
    r ? (n.ref = r, n._listener || (n._listener = function(o) {
      o.stopPropagation(), o.detail.context = t;
    }, r.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function Po(e, t, n, r) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = e, i._root = i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = Ao, o.prototype.attributeChangedCallback = Ro, o.prototype.disconnectedCallback = Lo, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = n, n.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom.props[i];
    }, set: function(s) {
      this._vdom ? this.attributeChangedCallback(i, null, s) : (this._props || (this._props = {}), this._props[i] = s, this.connectedCallback());
      var a = typeof s;
      s != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(i, s);
    } });
  }), customElements.define(t, o);
}
var Do = 0;
function f(e, t, n, r, o, i) {
  t || (t = {});
  var s, a, c = t;
  if ("ref" in c) for (a in c = {}, t) a == "ref" ? s = t[a] : c[a] = t[a];
  var u = { type: e, props: c, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --Do, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (s = e.defaultProps)) for (a in s) c[a] === void 0 && (c[a] = s[a]);
  return S.vnode && S.vnode(u), u;
}
const In = {
  CONTINUE_DETECTION: "continue-detection",
  SWITCH_CAMERA: "switch-camera",
  TOGGLE_MIRROR: "toggle-mirror"
};
var Ge = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", e.CONTROL = "face-auto-capture:control", e.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", e.FACE_DETECTION = "face-auto-capture:face-detection", e.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", e.STATE_CHANGED = "face-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", e))(Ge || {}), fn = /* @__PURE__ */ ((e) => (e.INSTRUCTION_ESCALATED = "smile:instruction-escalated", e.STATUS_CHANGED = "smile-auto-capture:status-changed", e))(fn || {});
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
}, Mo = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  WAITING: "WAITING",
  RUNNING: "RUNNING"
}, ne = {
  ...L,
  SMILE: "smile",
  SMILE_CANDIDATE_SELECTION: "smile_candidate_selection",
  KEEP_NEUTRAL_EXPRESSION: "keep_neutral_expression"
}, _t = {
  NEUTRAL: "NEUTRAL",
  SMILE: "SMILE"
}, $e = {
  ...Mo,
  DONE: "DONE"
};
var ce, T, xt, xn, ke = 0, kr = [], x = S, An = x.__b, Rn = x.__r, Ln = x.diffed, Pn = x.__c, Dn = x.unmount, Mn = x.__;
function xe(e, t) {
  x.__h && x.__h(T, e, ke || t), ke = 0;
  var n = T.__H || (T.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function M(e) {
  return ke = 1, dn(Ir, e);
}
function dn(e, t, n) {
  var r = xe(ce++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Ir(void 0, t), function(a) {
    var c = r.__N ? r.__N[0] : r.__[0], u = r.t(c, a);
    c !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = T, !T.u)) {
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
    T.u = !0;
    var i = T.shouldComponentUpdate, s = T.componentWillUpdate;
    T.componentWillUpdate = function(a, c, u) {
      if (this.__e) {
        var d = i;
        i = void 0, o(a, c, u), i = d;
      }
      s && s.call(this, a, c, u);
    }, T.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function q(e, t) {
  var n = xe(ce++, 3);
  !x.__s && _n(n.__H, t) && (n.__ = e, n.i = t, T.__H.__h.push(n));
}
function Ae(e, t) {
  var n = xe(ce++, 4);
  !x.__s && _n(n.__H, t) && (n.__ = e, n.i = t, T.__h.push(n));
}
function vt(e) {
  return ke = 5, re(function() {
    return { current: e };
  }, []);
}
function Or(e, t, n) {
  ke = 6, Ae(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(e));
}
function re(e, t) {
  var n = xe(ce++, 7);
  return _n(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function ge(e, t) {
  return ke = 8, re(function() {
    return e;
  }, t);
}
function qe(e) {
  var t = T.context[e.__c], n = xe(ce++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(T)), t.props.value) : e.__;
}
function ht(e, t) {
  x.useDebugValue && x.useDebugValue(t ? t(e) : e);
}
function Nr() {
  var e = xe(ce++, 11);
  if (!e.__) {
    for (var t = T.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function Ho() {
  for (var e; e = kr.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(it), e.__H.__h.forEach(Wt), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], x.__e(t, e.__v);
  }
}
x.__b = function(e) {
  T = null, An && An(e);
}, x.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Mn && Mn(e, t);
}, x.__r = function(e) {
  Rn && Rn(e), ce = 0;
  var t = (T = e.__c).__H;
  t && (xt === T ? (t.__h = [], T.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.i = n.__N = void 0;
  })) : (t.__h.forEach(it), t.__h.forEach(Wt), t.__h = [], ce = 0)), xt = T;
}, x.diffed = function(e) {
  Ln && Ln(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (kr.push(t) !== 1 && xn === x.requestAnimationFrame || ((xn = x.requestAnimationFrame) || Uo)(Ho)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.i = void 0;
  })), xt = T = null;
}, x.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(it), n.__h = n.__h.filter(function(r) {
        return !r.__ || Wt(r);
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
      it(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && x.__e(t, n.__v));
};
var Hn = typeof requestAnimationFrame == "function";
function Uo(e) {
  var t, n = function() {
    clearTimeout(r), Hn && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  Hn && (t = requestAnimationFrame(n));
}
function it(e) {
  var t = T, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), T = t;
}
function Wt(e) {
  var t = T;
  e.__c = e.__(), T = t;
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
function ye(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function Fo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Bo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Wo = /* @__PURE__ */ Fo(
  function(e) {
    return Bo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Tr(e, t) {
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
function jo(e, t) {
  function n(o) {
    var i = this.props.ref, s = i == o.ref;
    return !s && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !s : jt(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, D(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(zt.prototype = new z()).isPureReactComponent = !0, zt.prototype.shouldComponentUpdate = function(e, t) {
  return jt(this.props, e) || jt(this.state, t);
};
var Un = S.__b;
S.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Un && Un(e);
};
var zo = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function Go(e) {
  function t(n) {
    var r = Tr({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = zo, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Fn = function(e, t) {
  return e == null ? null : te(te(e).map(t));
}, Vo = { map: Fn, forEach: Fn, count: function(e) {
  return e ? te(e).length : 0;
}, only: function(e) {
  var t = te(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: te }, Yo = S.__e;
S.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  Yo(e, t, n, r);
};
var Bn = S.unmount;
function xr(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = Tr({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return xr(r, t, n);
  })), e;
}
function Ar(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return Ar(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function st() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Rr(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Zo(e) {
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
function He() {
  this.u = null, this.o = null;
}
S.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Bn && Bn(e);
}, (st.prototype = new z()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var o = Rr(r.__v), i = !1, s = function() {
    i || (i = !0, n.__R = null, o ? o(a) : a());
  };
  n.__R = s;
  var a = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var c = r.state.__a;
        r.__v.__k[0] = Ar(c, c.__c.__P, c.__c.__O);
      }
      var u;
      for (r.setState({ __a: r.__b = null }); u = r.t.pop(); ) u.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(s, s);
}, st.prototype.componentWillUnmount = function() {
  this.t = [];
}, st.prototype.render = function(e, t) {
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
var Wn = function(e, t, n) {
  if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size)) for (n = e.u; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    e.u = n = n[2];
  }
};
function qo(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function Xo(e) {
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
  } }), ae(D(qo, { context: t.context }, e.__v), t.l);
}
function Ko(e, t) {
  var n = D(Xo, { __v: e, i: t });
  return n.containerInfo = t, n;
}
(He.prototype = new z()).__a = function(e) {
  var t = this, n = Rr(t.__v), r = t.o.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), Wn(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, He.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = te(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; ) this.o.set(t[n], this.u = [1, 0, this.u]);
  return e.children;
}, He.prototype.componentDidUpdate = He.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, n) {
    Wn(e, n, t);
  });
};
var Lr = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Qo = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Jo = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, ei = /[A-Z0-9]/g, ti = typeof document < "u", ni = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function ri(e, t, n) {
  return t.__k == null && (t.textContent = ""), ae(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function oi(e, t, n) {
  return cn(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
z.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(z.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var jn = S.event;
function ii() {
}
function si() {
  return this.cancelBubble;
}
function ai() {
  return this.defaultPrevented;
}
S.event = function(e) {
  return jn && (e = jn(e)), e.persist = ii, e.isPropagationStopped = si, e.isDefaultPrevented = ai, e.nativeEvent = e;
};
var hn, ci = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, zn = S.vnode;
S.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {};
    for (var i in n) {
      var s = n[i];
      if (!(i === "value" && "defaultValue" in n && s == null || ti && i === "children" && r === "noscript" || i === "class" || i === "className")) {
        var a = i.toLowerCase();
        i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && s === !0 ? s = "" : a === "translate" && s === "no" ? s = !1 : a === "ondoubleclick" ? i = "ondblclick" : a !== "onchange" || r !== "input" && r !== "textarea" || ni(n.type) ? a === "onfocus" ? i = "onfocusin" : a === "onblur" ? i = "onfocusout" : Jo.test(i) ? i = a : r.indexOf("-") === -1 && Qo.test(i) ? i = i.replace(ei, "-$&").toLowerCase() : s === null && (s = void 0) : a = i = "oninput", a === "oninput" && o[i = a] && (i = "oninputCapture"), o[i] = s;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = te(n.children).forEach(function(c) {
      c.props.selected = o.value.indexOf(c.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = te(n.children).forEach(function(c) {
      c.props.selected = o.multiple ? o.defaultValue.indexOf(c.props.value) != -1 : o.defaultValue == c.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", ci)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = Lr, zn && zn(e);
};
var Gn = S.__r;
S.__r = function(e) {
  Gn && Gn(e), hn = e.__c;
};
var Vn = S.diffed;
S.diffed = function(e) {
  Vn && Vn(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), hn = null;
};
var li = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return hn.__n[e.__c].props.value;
}, useCallback: ge, useContext: qe, useDebugValue: ht, useDeferredValue: Dr, useEffect: q, useId: Nr, useImperativeHandle: Or, useInsertionEffect: Hr, useLayoutEffect: Ae, useMemo: re, useReducer: dn, useRef: vt, useState: M, useSyncExternalStore: Ur, useTransition: Mr } } };
function ui(e) {
  return D.bind(null, e);
}
function Ct(e) {
  return !!e && e.$$typeof === Lr;
}
function fi(e) {
  return Ct(e) && e.type === W;
}
function di(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function _i(e) {
  return Ct(e) ? ln.apply(null, arguments) : e;
}
function hi(e) {
  return !!e.__k && (ae(null, e), !0);
}
function pi(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var mi = function(e, t) {
  return e(t);
}, gi = function(e, t) {
  return e(t);
}, yi = W;
function Pr(e) {
  e();
}
function Dr(e) {
  return e;
}
function Mr() {
  return [!1, Pr];
}
var Hr = Ae, vi = Ct;
function Ur(e, t) {
  var n = t(), r = M({ h: { __: n, v: t } }), o = r[0].h, i = r[1];
  return Ae(function() {
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
var oe = { useState: M, useId: Nr, useReducer: dn, useEffect: q, useLayoutEffect: Ae, useInsertionEffect: Hr, useTransition: Mr, useDeferredValue: Dr, useSyncExternalStore: Ur, startTransition: Pr, useRef: vt, useImperativeHandle: Or, useMemo: re, useCallback: ge, useContext: qe, useDebugValue: ht, version: "17.0.2", Children: Vo, render: ri, hydrate: oi, unmountComponentAtNode: hi, createPortal: Ko, createElement: D, createContext: br, createFactory: ui, cloneElement: _i, createRef: $o, Fragment: W, isValidElement: Ct, isElement: vi, isFragment: fi, isMemo: di, findDOMNode: pi, Component: z, PureComponent: zt, memo: jo, forwardRef: Go, flushSync: gi, unstable_batchedUpdates: mi, StrictMode: yi, Suspense: st, SuspenseList: He, lazy: Zo, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: li };
function Ci(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Si = function(t, n, r, o) {
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
const Ei = /* @__PURE__ */ Ci(Si);
var I = "-ms-", We = "-moz-", O = "-webkit-", Fr = "comm", St = "rule", pn = "decl", wi = "@import", Br = "@keyframes", bi = "@layer", Wr = Math.abs, mn = String.fromCharCode, Gt = Object.assign;
function $i(e, t) {
  return R(e, 0) ^ 45 ? (((t << 2 ^ R(e, 0)) << 2 ^ R(e, 1)) << 2 ^ R(e, 2)) << 2 ^ R(e, 3) : 0;
}
function jr(e) {
  return e.trim();
}
function Q(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function v(e, t, n) {
  return e.replace(t, n);
}
function at(e, t, n) {
  return e.indexOf(t, n);
}
function R(e, t) {
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
function Ue(e, t) {
  return t.push(e), e;
}
function ki(e, t) {
  return e.map(t).join("");
}
function Yn(e, t) {
  return e.filter(function(n) {
    return !Q(n, t);
  });
}
var Et = 1, Ne = 1, Gr = 0, j = 0, A = 0, Re = "";
function wt(e, t, n, r, o, i, s, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Et, column: Ne, length: s, return: "", siblings: a };
}
function se(e, t) {
  return Gt(wt("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function be(e) {
  for (; e.root; )
    e = se(e.root, { children: [e] });
  Ue(e, e.siblings);
}
function Oi() {
  return A;
}
function Ni() {
  return A = j > 0 ? R(Re, --j) : 0, Ne--, A === 10 && (Ne = 1, Et--), A;
}
function G() {
  return A = j < Gr ? R(Re, j++) : 0, Ne++, A === 10 && (Ne = 1, Et++), A;
}
function he() {
  return R(Re, j);
}
function ct() {
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
function Ii(e) {
  return Et = Ne = 1, Gr = Y(Re = e), j = 0, [];
}
function Ti(e) {
  return Re = "", e;
}
function Rt(e) {
  return jr(bt(j - 1, Yt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function xi(e) {
  for (; (A = he()) && A < 33; )
    G();
  return Vt(e) > 2 || Vt(A) > 3 ? "" : " ";
}
function Ai(e, t) {
  for (; --t && G() && !(A < 48 || A > 102 || A > 57 && A < 65 || A > 70 && A < 97); )
    ;
  return bt(e, ct() + (t < 6 && he() == 32 && G() == 32));
}
function Yt(e) {
  for (; G(); )
    switch (A) {
      case e:
        return j;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Yt(A);
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
  for (; G() && e + A !== 57; )
    if (e + A === 84 && he() === 47)
      break;
  return "/*" + bt(t, j - 1) + "*" + mn(e === 47 ? e : G());
}
function Li(e) {
  for (; !Vt(he()); )
    G();
  return bt(e, j);
}
function Pi(e) {
  return Ti(lt("", null, null, null, [""], e = Ii(e), 0, [0], e));
}
function lt(e, t, n, r, o, i, s, a, c) {
  for (var u = 0, d = 0, l = s, h = 0, _ = 0, y = 0, E = 1, $ = 1, p = 1, m = 0, k = "", w = o, N = i, C = r, g = k; $; )
    switch (y = m, m = G()) {
      case 40:
        if (y != 108 && R(g, l - 1) == 58) {
          at(g += v(Rt(m), "&", "&\f"), "&\f", Wr(u ? a[u - 1] : 0)) != -1 && (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        g += Rt(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        g += xi(y);
        break;
      case 92:
        g += Ai(ct() - 1, 7);
        continue;
      case 47:
        switch (he()) {
          case 42:
          case 47:
            Ue(Di(Ri(G(), ct()), t, n, c), c);
            break;
          default:
            g += "/";
        }
        break;
      case 123 * E:
        a[u++] = Y(g) * p;
      case 125 * E:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            $ = 0;
          case 59 + d:
            p == -1 && (g = v(g, /\f/g, "")), _ > 0 && Y(g) - l && Ue(_ > 32 ? qn(g + ";", r, n, l - 1, c) : qn(v(g, " ", "") + ";", r, n, l - 2, c), c);
            break;
          case 59:
            g += ";";
          default:
            if (Ue(C = Zn(g, t, n, u, d, o, a, k, w = [], N = [], l, i), i), m === 123)
              if (d === 0)
                lt(g, t, C, C, w, i, l, a, N);
              else
                switch (h === 99 && R(g, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    lt(e, C, C, r && Ue(Zn(e, C, C, 0, 0, o, a, k, o, w = [], l, N), N), o, N, l, a, r ? w : N);
                    break;
                  default:
                    lt(g, C, C, C, [""], N, 0, a, N);
                }
        }
        u = d = _ = 0, E = p = 1, k = g = "", l = s;
        break;
      case 58:
        l = 1 + Y(g), _ = y;
      default:
        if (E < 1) {
          if (m == 123)
            --E;
          else if (m == 125 && E++ == 0 && Ni() == 125)
            continue;
        }
        switch (g += mn(m), m * E) {
          case 38:
            p = d > 0 ? 1 : (g += "\f", -1);
            break;
          case 44:
            a[u++] = (Y(g) - 1) * p, p = 1;
            break;
          case 64:
            he() === 45 && (g += Rt(G())), h = he(), d = l = Y(k = g += Li(ct())), m++;
            break;
          case 45:
            y === 45 && Y(g) == 2 && (E = 0);
        }
    }
  return i;
}
function Zn(e, t, n, r, o, i, s, a, c, u, d, l) {
  for (var h = o - 1, _ = o === 0 ? i : [""], y = zr(_), E = 0, $ = 0, p = 0; E < r; ++E)
    for (var m = 0, k = Oe(e, h + 1, h = Wr($ = s[E])), w = e; m < y; ++m)
      (w = jr($ > 0 ? _[m] + " " + k : v(k, /&\f/g, _[m]))) && (c[p++] = w);
  return wt(e, t, n, o === 0 ? St : a, c, u, d, l);
}
function Di(e, t, n, r) {
  return wt(e, t, n, Fr, mn(Oi()), Oe(e, 2, -2), 0, r);
}
function qn(e, t, n, r, o) {
  return wt(e, t, n, pn, Oe(e, 0, r), Oe(e, r + 1, -1), r, o);
}
function Vr(e, t, n) {
  switch ($i(e, t)) {
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
      return We + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return O + e + We + e + I + e + e;
    case 5936:
      switch (R(e, t + 11)) {
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
      return O + e + I + "flex-item-" + v(e, /flex-|-self/g, "") + (Q(e, /flex-|baseline/) ? "" : I + "grid-row-" + v(e, /flex-|-self/g, "")) + e;
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
      if (!Q(e, /flex-|baseline/)) return I + "grid-column-align" + Oe(e, t) + e;
      break;
    case 2592:
    case 3360:
      return I + v(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, Q(r.props, /grid-\w+-end/);
      }) ? ~at(e + (n = n[t].value), "span", 0) ? e : I + v(e, "-start", "") + e + I + "grid-row-span:" + (~at(n, "span", 0) ? Q(n, /\d+/) : +Q(n, /\d+/) - +Q(e, /\d+/)) + ";" : I + v(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return Q(r.props, /grid-\w+-start/);
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
        switch (R(e, t + 1)) {
          case 109:
            if (R(e, t + 4) !== 45)
              break;
          case 102:
            return v(e, /(.+:)(.+)-([^]+)/, "$1" + O + "$2-$3$1" + We + (R(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~at(e, "stretch", 0) ? Vr(v(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return v(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, a, c, u) {
        return I + o + ":" + i + u + (s ? I + o + "-span:" + (a ? c : +c - +i) + u : "") + e;
      });
    case 4949:
      if (R(e, t + 6) === 121)
        return v(e, ":", ":" + O) + e;
      break;
    case 6444:
      switch (R(e, R(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return v(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + O + (R(e, 14) === 45 ? "inline-" : "") + "box$3$1" + O + "$2$3$1" + I + "$2box$3") + e;
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
function pt(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Mi(e, t, n, r) {
  switch (e.type) {
    case bi:
      if (e.children.length) break;
    case wi:
    case pn:
      return e.return = e.return || e.value;
    case Fr:
      return "";
    case Br:
      return e.return = e.value + "{" + pt(e.children, r) + "}";
    case St:
      if (!Y(e.value = e.props.join(","))) return "";
  }
  return Y(n = pt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Hi(e) {
  var t = zr(e);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, o, i) || "";
    return s;
  };
}
function Ui(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Fi(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case pn:
        e.return = Vr(e.value, e.length, n);
        return;
      case Br:
        return pt([se(e, { value: v(e.value, "@", "@" + O) })], r);
      case St:
        if (e.length)
          return ki(n = e.props, function(o) {
            switch (Q(o, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                be(se(e, { props: [v(o, /:(read-\w+)/, ":" + We + "$1")] })), be(se(e, { props: [o] })), Gt(e, { props: Yn(n, r) });
                break;
              case "::placeholder":
                be(se(e, { props: [v(o, /:(plac\w+)/, ":" + O + "input-$1")] })), be(se(e, { props: [v(o, /:(plac\w+)/, ":" + We + "$1")] })), be(se(e, { props: [v(o, /:(plac\w+)/, I + "input-$1")] })), be(se(e, { props: [o] })), Gt(e, { props: Yn(n, r) });
                break;
            }
            return "";
          });
    }
}
var Bi = {
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
}, b = {}, ve = typeof process < "u" && b !== void 0 && (b.REACT_APP_SC_ATTR || b.SC_ATTR) || "data-styled", Yr = "active", Zr = "data-styled-version", $t = "6.1.11", gn = `/*!sc*/
`, yn = typeof window < "u" && "HTMLElement" in window, Wi = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && b !== void 0 && b.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && b.REACT_APP_SC_DISABLE_SPEEDY !== "" ? b.REACT_APP_SC_DISABLE_SPEEDY !== "false" && b.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && b !== void 0 && b.SC_DISABLE_SPEEDY !== void 0 && b.SC_DISABLE_SPEEDY !== "" ? b.SC_DISABLE_SPEEDY !== "false" && b.SC_DISABLE_SPEEDY : b.NODE_ENV !== "production"), Xn = /invalid hook call/i, tt = /* @__PURE__ */ new Set(), ji = function(e, t) {
  if (b.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(s) {
        for (var a = [], c = 1; c < arguments.length; c++) a[c - 1] = arguments[c];
        Xn.test(s) ? (i = !1, tt.delete(r)) : o.apply(void 0, ye([s], a, !1));
      }, vt(), i && !tt.has(r) && (console.warn(r), tt.add(r));
    } catch (s) {
      Xn.test(s.message) && tt.delete(r);
    } finally {
      console.error = o;
    }
  }
}, kt = Object.freeze([]), Ie = Object.freeze({});
function zi(e, t, n) {
  return n === void 0 && (n = Ie), e.theme !== n.theme && e.theme || t || n.theme;
}
var Zt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Gi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Vi = /(^-|-$)/g;
function Kn(e) {
  return e.replace(Gi, "-").replace(Vi, "");
}
var Yi = /(a)(d)/gi, nt = 52, Qn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function qt(e) {
  var t, n = "";
  for (t = Math.abs(e); t > nt; t = t / nt | 0) n = Qn(t % nt) + n;
  return (Qn(t % nt) + n).replace(Yi, "$1-$2");
}
var Lt, qr = 5381, de = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Xr = function(e) {
  return de(qr, e);
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
var Jr = typeof Symbol == "function" && Symbol.for, eo = Jr ? Symbol.for("react.memo") : 60115, Zi = Jr ? Symbol.for("react.forward_ref") : 60112, qi = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Xi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, to = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Ki = ((Lt = {})[Zi] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Lt[eo] = to, Lt);
function Jn(e) {
  return ("type" in (t = e) && t.type.$$typeof) === eo ? to : "$$typeof" in e ? Ki[e.$$typeof] : qi;
  var t;
}
var Qi = Object.defineProperty, Ji = Object.getOwnPropertyNames, er = Object.getOwnPropertySymbols, es = Object.getOwnPropertyDescriptor, ts = Object.getPrototypeOf, tr = Object.prototype;
function no(e, t, n) {
  if (typeof t != "string") {
    if (tr) {
      var r = ts(t);
      r && r !== tr && no(e, r, n);
    }
    var o = Ji(t);
    er && (o = o.concat(er(t)));
    for (var i = Jn(e), s = Jn(t), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!(c in Xi || n && n[c] || s && c in s || i && c in i)) {
        var u = es(t, c);
        try {
          Qi(e, c, u);
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
function vn(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function _e(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Xt(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function Te(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Kt(e, t, n) {
  if (n === void 0 && (n = !1), !n && !Te(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = Kt(e[r], t[r]);
  else if (Te(t)) for (var r in t) e[r] = Kt(e[r], t[r]);
  return e;
}
function Cn(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var ns = b.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function rs() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(s) {
    n = n.replace(/%[a-z]/, s);
  }), n;
}
function Z(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return b.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(rs.apply(void 0, ye([ns[e]], t, !1)).trim());
}
var os = function() {
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
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, s = o; s < i; s++) n += "".concat(this.tag.getRule(s)).concat(gn);
    return n;
  }, e;
}(), is = 1 << 30, ut = /* @__PURE__ */ new Map(), mt = /* @__PURE__ */ new Map(), ft = 1, rt = function(e) {
  if (ut.has(e)) return ut.get(e);
  for (; mt.has(ft); ) ft++;
  var t = ft++;
  if (b.NODE_ENV !== "production" && ((0 | t) < 0 || t > is)) throw Z(16, "".concat(t));
  return ut.set(e, t), mt.set(t, e), t;
}, ss = function(e, t) {
  ft = t + 1, ut.set(e, t), mt.set(t, e);
}, as = "style[".concat(ve, "][").concat(Zr, '="').concat($t, '"]'), cs = new RegExp("^".concat(ve, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ls = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && e.registerName(t, r);
}, us = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(gn), o = [], i = 0, s = r.length; i < s; i++) {
    var a = r[i].trim();
    if (a) {
      var c = a.match(cs);
      if (c) {
        var u = 0 | parseInt(c[1], 10), d = c[2];
        u !== 0 && (ss(d, u), ls(e, d, c[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else o.push(a);
    }
  }
};
function fs() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var ro = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(a) {
    var c = Array.from(a.querySelectorAll("style[".concat(ve, "]")));
    return c[c.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ve, Yr), r.setAttribute(Zr, $t);
  var s = fs();
  return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r;
}, ds = function() {
  function e(t) {
    this.element = ro(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
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
}(), _s = function() {
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
}(), hs = function() {
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
}(), nr = yn, ps = { isServer: !yn, useCSSOMInjection: !Wi }, oo = function() {
  function e(t, n, r) {
    t === void 0 && (t = Ie), n === void 0 && (n = {});
    var o = this;
    this.options = P(P({}, ps), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && yn && nr && (nr = !1, function(i) {
      for (var s = document.querySelectorAll(as), a = 0, c = s.length; a < c; a++) {
        var u = s[a];
        u && u.getAttribute(ve) !== Yr && (us(i, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this)), Cn(this, function() {
      return function(i) {
        for (var s = i.getTag(), a = s.length, c = "", u = function(l) {
          var h = function(p) {
            return mt.get(p);
          }(l);
          if (h === void 0) return "continue";
          var _ = i.names.get(h), y = s.getGroup(l);
          if (_ === void 0 || y.length === 0) return "continue";
          var E = "".concat(ve, ".g").concat(l, '[id="').concat(h, '"]'), $ = "";
          _ !== void 0 && _.forEach(function(p) {
            p.length > 0 && ($ += "".concat(p, ","));
          }), c += "".concat(y).concat(E, '{content:"').concat($, '"}').concat(gn);
        }, d = 0; d < a; d++) u(d);
        return c;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return rt(t);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(P(P({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new hs(o) : r ? new ds(o) : new _s(o);
    }(this.options), new os(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (rt(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(rt(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(rt(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), ms = /&/g, gs = /^\s*\/\/.*$/gm;
function io(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = io(n.children, t)), n;
  });
}
function so(e) {
  var t, n, r, o = e === void 0 ? Ie : e, i = o.options, s = i === void 0 ? Ie : i, a = o.plugins, c = a === void 0 ? kt : a, u = function(h, _, y) {
    return y.startsWith(n) && y.endsWith(n) && y.replaceAll(n, "").length > 0 ? ".".concat(t) : h;
  }, d = c.slice();
  d.push(function(h) {
    h.type === St && h.value.includes("&") && (h.props[0] = h.props[0].replace(ms, n).replace(r, u));
  }), s.prefix && d.push(Fi), d.push(Mi);
  var l = function(h, _, y, E) {
    _ === void 0 && (_ = ""), y === void 0 && (y = ""), E === void 0 && (E = "&"), t = E, n = _, r = new RegExp("\\".concat(n, "\\b"), "g");
    var $ = h.replace(gs, ""), p = Pi(y || _ ? "".concat(y, " ").concat(_, " { ").concat($, " }") : $);
    s.namespace && (p = io(p, s.namespace));
    var m = [];
    return pt(p, Hi(d.concat(Ui(function(k) {
      return m.push(k);
    })))), m;
  };
  return l.hash = c.length ? c.reduce(function(h, _) {
    return _.name || Z(15), de(h, _.name);
  }, qr).toString() : "", l;
}
var ys = new oo(), Qt = so(), Sn = oe.createContext({ shouldForwardProp: void 0, styleSheet: ys, stylis: Qt });
Sn.Consumer;
var vs = oe.createContext(void 0);
function Jt() {
  return qe(Sn);
}
function Cs(e) {
  var t = M(e.stylisPlugins), n = t[0], r = t[1], o = Jt().styleSheet, i = re(function() {
    var c = o;
    return e.sheet ? c = e.sheet : e.target && (c = c.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (c = c.reconstructWithOptions({ useCSSOMInjection: !1 })), c;
  }, [e.disableCSSOMInjection, e.sheet, e.target, o]), s = re(function() {
    return so({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: n });
  }, [e.enableVendorPrefixes, e.namespace, n]);
  q(function() {
    Ei(n, e.stylisPlugins) || r(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var a = re(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: s };
  }, [e.shouldForwardProp, i, s]);
  return oe.createElement(Sn.Provider, { value: a }, oe.createElement(vs.Provider, { value: s }, e.children));
}
var en = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Qt);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, Cn(this, function() {
      throw Z(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Qt), this.name + t.hash;
  }, e;
}(), Ss = function(e) {
  return e >= "A" && e <= "Z";
};
function rr(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    Ss(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var ao = function(e) {
  return e == null || e === !1 || e === "";
}, co = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !ao(i) && (Array.isArray(i) && i.isCss || Ce(i) ? r.push("".concat(rr(o), ":"), i, ";") : Te(i) ? r.push.apply(r, ye(ye(["".concat(o, " {")], co(i), !1), ["}"], !1)) : r.push("".concat(rr(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in Bi || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function pe(e, t, n, r) {
  if (ao(e)) return [];
  if (vn(e)) return [".".concat(e.styledComponentId)];
  if (Ce(e)) {
    if (!Ce(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return b.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof en || Te(o) || o === null || console.error("".concat(Qr(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), pe(o, t, n, r);
  }
  var i;
  return e instanceof en ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Te(e) ? co(e) : Array.isArray(e) ? Array.prototype.concat.apply(kt, e.map(function(s) {
    return pe(s, t, n, r);
  })) : [e.toString()];
}
function Es(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Ce(n) && !vn(n)) return !1;
  }
  return !0;
}
var ws = Xr($t), bs = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = b.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Es(t), this.componentId = n, this.baseHash = de(ws, n), this.baseStyle = r, oo.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = _e(o, this.staticRulesId);
    else {
      var i = Xt(pe(this.rules, t, n, r)), s = qt(de(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, s)) {
        var a = r(i, ".".concat(s), void 0, this.componentId);
        n.insertRules(this.componentId, s, a);
      }
      o = _e(o, s), this.staticRulesId = s;
    }
    else {
      for (var c = de(this.baseHash, r.hash), u = "", d = 0; d < this.rules.length; d++) {
        var l = this.rules[d];
        if (typeof l == "string") u += l, b.NODE_ENV !== "production" && (c = de(c, l));
        else if (l) {
          var h = Xt(pe(l, t, n, r));
          c = de(c, h + d), u += h;
        }
      }
      if (u) {
        var _ = qt(c >>> 0);
        n.hasNameForId(this.componentId, _) || n.insertRules(this.componentId, _, r(u, ".".concat(_), void 0, this.componentId)), o = _e(o, _);
      }
    }
    return o;
  }, e;
}(), Ve = oe.createContext(void 0);
Ve.Consumer;
function $s() {
  var e = qe(Ve);
  if (!e) throw Z(18);
  return e;
}
function ks(e) {
  var t = oe.useContext(Ve), n = re(function() {
    return function(r, o) {
      if (!r) throw Z(14);
      if (Ce(r)) {
        var i = r(o);
        if (b.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object")) throw Z(7);
        return i;
      }
      if (Array.isArray(r) || typeof r != "object") throw Z(8);
      return o ? P(P({}, o), r) : r;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? oe.createElement(Ve.Provider, { value: n }, e.children) : null;
}
var Dt = {}, or = /* @__PURE__ */ new Set();
function Os(e, t, n) {
  var r = vn(e), o = e, i = !Pt(e), s = t.attrs, a = s === void 0 ? kt : s, c = t.componentId, u = c === void 0 ? function(w, N) {
    var C = typeof w != "string" ? "sc" : Kn(w);
    Dt[C] = (Dt[C] || 0) + 1;
    var g = "".concat(C, "-").concat(Kr($t + C + Dt[C]));
    return N ? "".concat(N, "-").concat(g) : g;
  }(t.displayName, t.parentComponentId) : c, d = t.displayName, l = d === void 0 ? function(w) {
    return Pt(w) ? "styled.".concat(w) : "Styled(".concat(Qr(w), ")");
  }(e) : d, h = t.displayName && t.componentId ? "".concat(Kn(t.displayName), "-").concat(t.componentId) : t.componentId || u, _ = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, y = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var E = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var $ = t.shouldForwardProp;
      y = function(w, N) {
        return E(w, N) && $(w, N);
      };
    } else y = E;
  }
  var p = new bs(n, h, r ? o.componentStyle : void 0);
  function m(w, N) {
    return function(C, g, U) {
      var V = C.attrs, F = C.componentStyle, Ee = C.defaultProps, yo = C.foldedComponentIds, wn = C.styledComponentId, vo = C.target, Co = oe.useContext(Ve), So = Jt(), Ot = C.shouldForwardProp || So.shouldForwardProp;
      b.NODE_ENV !== "production" && ht(wn);
      var bn = zi(g, Co, Ee) || Ie, X = function(Xe, De, Ke) {
        for (var we, ue = P(P({}, De), { className: void 0, theme: Ke }), Tt = 0; Tt < Xe.length; Tt += 1) {
          var Qe = Ce(we = Xe[Tt]) ? we(ue) : we;
          for (var ie in Qe) ue[ie] = ie === "className" ? _e(ue[ie], Qe[ie]) : ie === "style" ? P(P({}, ue[ie]), Qe[ie]) : Qe[ie];
        }
        return De.className && (ue.className = _e(ue.className, De.className)), ue;
      }(V, g, bn), Le = X.as || vo, Pe = {};
      for (var B in X) X[B] === void 0 || B[0] === "$" || B === "as" || B === "theme" && X.theme === bn || (B === "forwardedAs" ? Pe.as = X.forwardedAs : Ot && !Ot(B, Le) || (Pe[B] = X[B], Ot || b.NODE_ENV !== "development" || Wo(B) || or.has(B) || !Zt.has(Le) || (or.add(B), console.warn('styled-components: it looks like an unknown prop "'.concat(B, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Nt = function(Xe, De) {
        var Ke = Jt(), we = Xe.generateAndInjectStyles(De, Ke.styleSheet, Ke.stylis);
        return b.NODE_ENV !== "production" && ht(we), we;
      }(F, X);
      b.NODE_ENV !== "production" && C.warnTooManyClasses && C.warnTooManyClasses(Nt);
      var It = _e(yo, wn);
      return Nt && (It += " " + Nt), X.className && (It += " " + X.className), Pe[Pt(Le) && !Zt.has(Le) ? "class" : "className"] = It, Pe.ref = U, D(Le, Pe);
    }(k, w, N);
  }
  m.displayName = l;
  var k = oe.forwardRef(m);
  return k.attrs = _, k.componentStyle = p, k.displayName = l, k.shouldForwardProp = y, k.foldedComponentIds = r ? _e(o.foldedComponentIds, o.styledComponentId) : "", k.styledComponentId = h, k.target = r ? o.target : e, Object.defineProperty(k, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(w) {
    this._foldedDefaultProps = r ? function(N) {
      for (var C = [], g = 1; g < arguments.length; g++) C[g - 1] = arguments[g];
      for (var U = 0, V = C; U < V.length; U++) Kt(N, V[U], !0);
      return N;
    }({}, o.defaultProps, w) : w;
  } }), b.NODE_ENV !== "production" && (ji(l, h), k.warnTooManyClasses = /* @__PURE__ */ function(w, N) {
    var C = {}, g = !1;
    return function(U) {
      if (!g && (C[U] = !0, Object.keys(C).length >= 200)) {
        var V = N ? ' with the id of "'.concat(N, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(w).concat(V, `.
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
  }(l, h)), Cn(k, function() {
    return ".".concat(k.styledComponentId);
  }), i && no(k, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), k;
}
function ir(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var sr = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function En(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Ce(e) || Te(e)) return sr(pe(ir(kt, ye([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? pe(r) : sr(pe(ir(r, t)));
}
function tn(e, t, n) {
  if (n === void 0 && (n = Ie), !t) throw Z(1, t);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(t, n, En.apply(void 0, ye([o], i, !1)));
  };
  return r.attrs = function(o) {
    return tn(e, t, P(P({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return tn(e, t, P(P({}, n), o));
  }, r;
}
var lo = function(e) {
  return tn(Os, e);
}, H = lo;
Zt.forEach(function(e) {
  H[e] = lo(e);
});
function le(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  b.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = Xt(En.apply(void 0, ye([e], t, !1))), o = Kr(r);
  return new en(o, r);
}
b.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var ot = "__sc-".concat(ve, "__");
b.NODE_ENV !== "production" && b.NODE_ENV !== "test" && typeof window < "u" && (window[ot] || (window[ot] = 0), window[ot] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[ot] += 1);
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
}, uo = 14, Ns = 0.0276;
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
}, ar = {
  loading: { text: "Loading. Please wait.", visible: !0 },
  done: { text: "Waiting for input...", visible: !0 }
}, Is = {
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
}, Ts = {
  ...Is,
  [ne.SMILE]: "Smile :)",
  [ne.SMILE_CANDIDATE_SELECTION]: "Smile :)",
  [ne.KEEP_NEUTRAL_EXPRESSION]: "Keep neutral expression"
}, xs = {
  [ne.SMILE]: "Smile more!",
  [ne.KEEP_NEUTRAL_EXPRESSION]: "Don't smile"
}, As = "rgba(19, 19, 19, 0.5)", Rs = 34;
function cr(e, t) {
  return Math.max(t, t + (e - 400) * Ns + 2);
}
const Ls = (e, t = uo) => e ? e.width < e.height ? cr(e.width, t) : cr(e.height, t) : t, Ps = (e) => e > J.Default ? Fe[J.Default] : e > J.L ? Fe[J.L] : e > J.M ? Fe[J.M] : Fe[J.S], Ds = (e) => e ? Ps(e.width) : Fe[J.Default];
function Ms() {
  const e = "https://fonts.googleapis.com/css?family=Montserrat:600";
  if (!document.querySelector(`link[href="${e}"]`)) {
    const n = document.createElement("link");
    n.href = e, n.rel = "stylesheet", document.head.appendChild(n);
  }
}
function Hs({
  currentInstruction: e,
  escalatedInstructions: t,
  instructions: n
}) {
  const { code: r, isEscalated: o } = e;
  if (r)
    return o && t && r in t ? t[r] : n[r];
}
const je = br(void 0);
je.displayName = "UiCustomizationContext";
function Se() {
  const e = qe(je);
  if (!e)
    throw new Error(
      `${je.displayName} must be used within a ${je.displayName} Provider`
    );
  return e;
}
function Us({ children: e, props: t, videoElementSize: n }) {
  const { font: r } = $s(), o = re(
    () => ({ ...t, videoElementSize: n, fontSize: Ls(n, r.minimumSize) }),
    [t, r.minimumSize, n]
  );
  return /* @__PURE__ */ f(je.Provider, { value: o, children: e });
}
const fo = ({ svgSize: e }) => /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 16 14", width: e, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
  "path",
  {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), Fs = H.div`
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
`, Bs = H.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, Ws = H.p`
  background: ${(e) => e.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(e) => `${e.$fontSize}px`};
  line-height: 1em;
  max-width: 80%;
`, nn = ({ Icon: e, isCameraReady: t, position: n = "absolute", text: r }) => {
  const { fontSize: o } = Se();
  return /* @__PURE__ */ f(Fs, { $isCameraReady: t, $position: n, children: /* @__PURE__ */ f(Bs, { children: [
    e ? /* @__PURE__ */ f(e, { svgSize: o * 2 }) : null,
    /* @__PURE__ */ f(Ws, { $fontSize: o, children: r })
  ] }) });
}, _o = ({ text: e = "An unknown error has occurred" }) => /* @__PURE__ */ f(nn, { Icon: fo, position: "relative", text: e });
class js extends z {
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
const zs = H.div`
  font-family: ${(e) => e.theme.font.family};
  font-style: ${(e) => e.theme.font.style};
  font-weight: ${(e) => e.theme.font.weight};
`, Gs = ({ children: e, uiProps: t, videoElementSize: n }) => (q(() => {
  Ms();
}, []), /* @__PURE__ */ f(Cs, { target: t.styleTarget, children: /* @__PURE__ */ f(ks, { theme: t.theme, children: /* @__PURE__ */ f(zs, { children: /* @__PURE__ */ f(js, { videoElementSize: n, children: /* @__PURE__ */ f(Us, { props: t, videoElementSize: n, children: e }) }) }) }) })), Vs = 0.75, Ys = "dot-auto-capture-video", Ye = (e, t) => {
  const n = vt(t);
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
function Zs(e) {
  const [t, n] = M(), r = ge(
    (o) => {
      var i;
      n((i = o.detail) == null ? void 0 : i.size);
    },
    [n]
  );
  return Ye(e, r), Ae(() => {
    if (!t) {
      const o = document.getElementById(Ys);
      o && n(o.getBoundingClientRect());
    }
  }, [t, n]), t;
}
function qs(e, t) {
  return e ? `${e}, ${t}` : t;
}
const Xs = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, Ks = {
  family: "Montserrat, Arial, sans-serif",
  weight: "600",
  style: "normal",
  minimumSize: uo
}, Me = {
  colors: Xs,
  font: Ks
}, Qs = (e) => {
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
      family: qs((t = e.font) == null ? void 0 : t.family, Me.font.family)
    }
  } : Me;
}, Js = (e, t) => Math.min(e, t), ea = ({ height: e, width: t }, n) => {
  const r = Js(t, e) * n, o = (t - r) / 2, i = (e - r) / 2;
  return {
    shiftX: o,
    shiftY: i,
    width: r,
    height: r
  };
}, ta = (e, t) => {
  const { height: n, shiftX: r, shiftY: o, width: i } = ea(e, t);
  return {
    shiftX: r / e.width,
    shiftY: o / e.height,
    width: i / e.width,
    height: n / e.height
  };
}, na = (e) => ta(e, Vs), ho = (e, t) => {
  document.dispatchEvent(
    new CustomEvent(e, {
      detail: t
    })
  );
}, gt = class gt {
  constructor() {
    Je(this, "lastDetails", {});
    Je(this, "delayedTime", 0);
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
Je(gt, "_instance");
let rn = gt;
rn.getInstance();
const lr = (e, t) => {
  ho(e, {
    instruction: t
  });
};
async function ra() {
  return navigator.mediaDevices.enumerateDevices();
}
async function oa() {
  return (await ra()).filter((t) => t.kind === "videoinput");
}
const ia = () => {
  const [e, t] = M(!1);
  return q(() => {
    (async () => {
      (await oa()).length > 1 && t(!0);
    })();
  }, []), e;
}, sa = ({ size: e }) => /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }), aa = ({ size: e }) => /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: "52", xmlns: "http://www.w3.org/2000/svg", children: [
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
`, ca = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ f(po, { $marginLeft: e, ...n, children: /* @__PURE__ */ f(sa, { size: t }) }), la = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ f(po, { $marginLeft: e, ...n, children: /* @__PURE__ */ f(aa, { size: t }) }), ua = H.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.$padding}px`};
  z-index: 2;
`, fa = ({
  customControlEvent: e,
  isSwitchCameraDisabled: t
}) => {
  const { showCameraButtons: n, videoElementSize: r } = Se(), o = ia();
  if (!n)
    return null;
  const { buttonPadding: i, iconSize: s, marginLeft: a } = Ds(r);
  return /* @__PURE__ */ f(ua, { $padding: i, children: [
    o && /* @__PURE__ */ f(la, { disabled: t, onClick: () => {
      lr(e, In.SWITCH_CAMERA);
    }, size: s }),
    /* @__PURE__ */ f(
      ca,
      {
        marginLeft: o ? a : 0,
        onClick: () => {
          lr(e, In.TOGGLE_MIRROR);
        },
        size: s
      }
    )
  ] });
}, da = "2.5s", _a = "0.3s", ha = "linear", pa = le`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
le`
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`;
le`
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
le`
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
const ma = H.div`
  position: absolute;
  left: 50%;

  ${(e) => e.$cssTop ? `top: ${e.$cssTop}%;` : ""}
  ${(e) => e.$cssBottom ? `bottom: ${e.$cssBottom}%;` : ""}
    ${(e) => e.$isAnimating && En`
      animation: ${pa} ${_a}
        ${ha} both;
      animation-delay: ${da};

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
`, ga = H.div`
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
`, ya = ({
  children: e,
  cssBottom: t,
  cssTop: n,
  isAnimating: r,
  isInCandidateSelection: o,
  isPortrait: i
}) => {
  const { fontSize: s } = Se();
  return /* @__PURE__ */ f(ma, { $cssBottom: t, $cssTop: n, $isAnimating: r, $isPortrait: i, children: /* @__PURE__ */ f(
    ga,
    {
      $fontSize: s,
      $isInCandidateSelection: o,
      $wrap: e.length > Rs,
      children: e
    }
  ) });
}, va = H.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, Ca = ({ svgSize: e }) => /* @__PURE__ */ f(va, { children: /* @__PURE__ */ f("svg", { fill: "none", height: e, viewBox: "0 0 48 48", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }) }), Sa = H.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`, mo = ({ children: e, height: t, width: n }) => {
  const { backdropColor: r } = Se();
  return /* @__PURE__ */ f(Sa, { children: /* @__PURE__ */ f("svg", { viewBox: `0 0 ${n} ${t}`, children: [
    /* @__PURE__ */ f("defs", { children: /* @__PURE__ */ f("mask", { id: "mask", children: [
      /* @__PURE__ */ f("rect", { fill: "#fff", height: "100%", width: "100%" }),
      e
    ] }) }),
    /* @__PURE__ */ f("rect", { fill: r, height: "100%", mask: "url(#mask)", width: "100%" })
  ] }) });
};
function Ea({
  cameraHeight: e,
  cameraWidth: t,
  state: n
}) {
  var o;
  const { appStateInstructions: r } = Se();
  return !n || n === "ERROR" || !((o = r == null ? void 0 : r[n]) != null && o.visible) ? null : n === "DONE" ? /* @__PURE__ */ f(W, { children: [
    e && t && /* @__PURE__ */ f(mo, { height: e, width: t }),
    /* @__PURE__ */ f(nn, { isCameraReady: !0, text: r[n].text })
  ] }) : /* @__PURE__ */ f(nn, { Icon: Ca, isCameraReady: !0, text: r[n].text });
}
function wa(e) {
  return /* @__PURE__ */ f("rect", { fill: "#000", ...e, rx: "50%" });
}
const ba = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
  "path",
  {
    d: "M2 240C2 108.556 108.556 2 240 2C371.444 2 478 108.556 478 240C478 371.444 371.444 478 240 478C108.556 478 2 371.444 2 240Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  }
) }), $a = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
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
) }), Oa = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
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
) }), Na = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
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
) }), Ia = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f("rect", { height: "476", rx: "14", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "4", width: "476", x: "2", y: "2" }) }), Ta = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f("rect", { height: "476", rx: "2", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "4", width: "476", x: "2", y: "2" }) }), xa = () => /* @__PURE__ */ f("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f(
  "path",
  {
    clipRule: "evenodd",
    d: "M126.126 87.8654C147.739 56.7835 184.591 34.0001 239.665 34.0001C239.779 34.0001 239.891 34.0096 240 34.0279C240.109 34.0096 240.221 34.0001 240.335 34.0001C295.41 34.0001 332.261 56.7835 353.874 87.8654C375.428 118.862 381.724 157.957 376.086 190.544C373.539 205.262 371.039 233.823 376.056 253.971C380.828 273.135 387.879 290.154 393.431 303.54L393.491 303.685C396.23 310.287 398.627 316.064 400.16 320.726C400.933 323.077 401.511 325.214 401.797 327.079C402.073 328.879 402.11 330.618 401.637 332.107C399.79 339.478 396.615 344.943 392.398 348.881C388.174 352.825 383.031 355.122 377.446 356.355C366.388 358.799 353.231 357.133 341.237 355.551C340.93 355.51 340.623 355.47 340.317 355.43C334.586 354.672 329.126 353.951 324.151 353.668C318.894 353.368 314.374 353.574 310.799 354.649C307.298 355.702 304.789 357.558 303.304 360.596C301.785 363.704 301.203 368.322 302.207 375.153C309.297 399.432 323.779 413.44 341.432 422.745C356.457 430.665 373.692 435.144 390.741 439.575C393.916 440.401 397.085 441.224 400.232 442.068C401.298 442.354 401.931 443.451 401.645 444.518C401.359 445.585 400.262 446.218 399.196 445.932C396.115 445.106 392.991 444.294 389.842 443.477C372.804 439.052 355.041 434.44 339.567 426.283C321.093 416.546 305.757 401.713 298.328 376.139L298.29 376.01L298.271 375.877C297.181 368.587 297.678 362.998 299.71 358.839C301.787 354.59 305.326 352.119 309.647 350.819C313.895 349.541 318.973 349.366 324.378 349.674C329.508 349.966 335.107 350.706 340.788 351.457C341.112 351.5 341.436 351.543 341.76 351.585C353.925 353.19 366.342 354.713 376.583 352.45C381.65 351.33 386.088 349.3 389.668 345.957C393.241 342.621 396.083 337.86 397.773 331.072L397.791 330.998L397.815 330.925C398.022 330.302 398.087 329.272 397.843 327.686C397.605 326.133 397.102 324.232 396.36 321.976C394.875 317.458 392.525 311.794 389.74 305.081L389.737 305.073C384.19 291.701 377.028 274.428 372.174 254.937C366.952 233.964 369.571 204.733 372.144 189.862C377.623 158.197 371.48 120.191 350.59 90.149C329.759 60.1924 294.162 38.0001 240.335 38.0001C240.221 38.0001 240.109 37.9905 240 37.9722C239.891 37.9905 239.779 38.0001 239.665 38.0001C185.838 38.0001 150.241 60.1924 129.41 90.149C108.52 120.191 102.377 158.197 107.856 189.862C110.429 204.733 113.048 233.964 107.826 254.937C102.972 274.428 95.8101 291.701 90.2633 305.073L90.2607 305.079C87.4756 311.793 85.1256 317.458 83.6398 321.976C82.8977 324.232 82.3951 326.133 82.1567 327.686C81.9133 329.272 81.9778 330.302 82.1847 330.925L82.2088 330.998L82.2273 331.072C83.9176 337.86 86.7592 342.621 90.3324 345.957C93.9121 349.3 98.3505 351.33 103.417 352.45C113.658 354.713 126.075 353.19 138.24 351.585C138.564 351.543 138.888 351.5 139.212 351.457C144.893 350.706 150.492 349.966 155.622 349.674C161.027 349.366 166.105 349.541 170.353 350.819C174.674 352.119 178.213 354.59 180.29 358.839C182.323 362.998 182.819 368.587 181.73 375.877L181.71 376.01L181.672 376.139C174.243 401.713 158.907 416.546 140.433 426.283C124.959 434.44 107.196 439.052 90.1584 443.477C87.0093 444.294 83.8851 445.106 80.8046 445.932C79.7377 446.218 78.6409 445.585 78.3548 444.518C78.0687 443.451 78.7017 442.354 79.7685 442.068C82.9154 441.224 86.0842 440.401 89.2594 439.575C106.308 435.144 123.543 430.665 138.568 422.745C156.221 413.44 170.703 399.432 177.793 375.153C178.797 368.322 178.215 363.704 176.696 360.596C175.211 357.558 172.702 355.702 169.201 354.649C165.626 353.574 161.106 353.368 155.849 353.668C150.874 353.951 145.414 354.672 139.683 355.43C139.377 355.47 139.07 355.51 138.763 355.551C126.769 357.133 113.613 358.799 102.554 356.355C96.9695 355.122 91.8259 352.825 87.6024 348.881C83.3855 344.943 80.2095 339.478 78.3628 332.107C77.8896 330.618 77.9268 328.879 78.203 327.079C78.4892 325.214 79.0667 323.077 79.84 320.726C81.3732 316.064 83.7701 310.286 86.5089 303.684L86.5686 303.54C92.1215 290.154 99.1722 273.135 103.944 253.971C108.961 233.823 106.461 205.262 103.914 190.544C98.2759 157.957 104.572 118.862 126.126 87.8654Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), Aa = H.div`
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
`, Ra = ({
  children: e,
  className: t,
  isInCandidateSelection: n,
  onAnimationEnd: r,
  placeholderRectangle: o
}) => /* @__PURE__ */ f(
  Aa,
  {
    $isInCandidateSelection: n,
    $placeholderRectangle: o,
    className: t,
    onAnimationEnd: r,
    children: e
  }
), La = {
  [K.CIRCLE_SOLID]: /* @__PURE__ */ f(ba, {}),
  [K.ELLIPSE_SOLID]: /* @__PURE__ */ f($a, {}),
  [K.MAN_SOLID]: /* @__PURE__ */ f(ka, {}),
  [K.WOMAN_SOLID]: /* @__PURE__ */ f(xa, {}),
  [K.SQUARE_ROUNDED_DASH]: /* @__PURE__ */ f(Na, {}),
  [K.SQUARE_ROUNDED_SOLID]: /* @__PURE__ */ f(Ia, {}),
  [K.SQUARE_DASH]: /* @__PURE__ */ f(Oa, {}),
  [K.SQUARE_SOLID]: /* @__PURE__ */ f(Ta, {})
}, Pa = ({ backdropHeight: e, backdropWidth: t, isBackdrop: n, placeholderRectangle: r, ...o }) => {
  const { placeholder: i } = Se();
  return /* @__PURE__ */ f(W, { children: [
    n && /* @__PURE__ */ f(mo, { height: e, width: t, children: /* @__PURE__ */ f(
      wa,
      {
        height: `${r.height * 100}%`,
        width: `${r.width * 100}%`,
        x: `${r.shiftX * 100}%`,
        y: `${r.shiftY * 100}%`
      }
    ) }),
    /* @__PURE__ */ f(Ra, { placeholderRectangle: r, ...o, children: La[i] })
  ] });
};
function Da({ eventName: e }) {
  const [t, n] = M([]), r = ge(
    (o) => {
      var s;
      const i = (s = o.detail) == null ? void 0 : s.instructionCode;
      i && n((a) => [...a, i]);
    },
    [n]
  );
  return Ye(e, r), {
    escalatedInstructionCodes: t
  };
}
const Ma = () => {
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
  const [i, s] = M({
    code: L.FACE_NOT_PRESENT,
    // FIXME Default instruction should not be here
    isEscalated: !1
  }), a = ge(
    (c) => {
      var u, d;
      s({
        code: (u = c == null ? void 0 : c.detail) == null ? void 0 : u.instructionCode,
        isEscalated: ((d = c == null ? void 0 : c.detail) == null ? void 0 : d.isEscalated) ?? !1
      });
    },
    [s]
  );
  return Ye(Ge.INSTRUCTION_CHANGED, a), {
    cameraResolution: e,
    instruction: i,
    isMirroring: n
  };
}, Ha = () => {
  const [e, t] = M(_t.NEUTRAL), [n, r] = M($e.LOADING), [o, i] = M(), s = ge(
    (a) => {
      const { error: c, phase: u, state: d } = a.detail || {};
      u && t(u), d && r(d), c && i(c);
    },
    [t, r, i]
  );
  return Ye(fn.STATUS_CHANGED, s), {
    smilePhase: e,
    smileState: n,
    smileError: o
  };
}, ur = ".3s", Ua = ".2s", Fa = ".8s", fr = ".4s", dr = ".4s", Ba = ".5s", Wa = "1.5s", ja = 2e3, _r = le`
0%, 100% {
    transform: scale(1);
}
50% {
    transform: scale(2);
}
`, za = le`
0%, 100% {
    transform: scale(1,1);
    opacity: 1;
}
50% {
    transform: scale(1,0.1);
    opacity: 0.5;
}
`, hr = le`
0% {
    stroke-dashoffset: 100;
}
100% {
    stroke-dashoffset: 200;
}
`, go = le`
 from {
    opacity: 1;
}
to {
    opacity: 0;
}
`, Ga = (e, t) => {
  const [n, r] = M(!1);
  return q(() => {
    t === _t.SMILE && r(!0);
    const o = setTimeout(() => {
      r(!1);
    }, ja);
    return () => clearTimeout(o);
  }, [t]), t === _t.SMILE && e === ne.CANDIDATE_SELECTION ? ne.SMILE_CANDIDATE_SELECTION : n ? ne.SMILE : e;
}, Va = H.div`
  position: absolute;
  top: ${(e) => e.$initialPosition.shiftY * 100}%;
  bottom: ${(e) => (1 - e.$initialPosition.shiftY - e.$initialPosition.height) * 100}%;
  left: ${(e) => e.$initialPosition.shiftX * 100}%;
  right: ${(e) => (1 - e.$initialPosition.shiftX - e.$initialPosition.width) * 100}%;
  animation: ${go} ${Ba} ${Wa} ease-in-out;
  animation-fill-mode: forwards;
  z-index: 1;

  #left-mouth {
    fill: none;
    stroke: #ffffff;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: ${hr} ${fr} ${dr} forwards;
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
    animation: ${hr} ${fr} ${dr} forwards;
  }
  #left-eye {
    transform-origin: 86.8px 96px;
    fill: #ffffff;
    animation: ${_r} ${ur} forwards;
  }
  #right-eye {
    transform-origin: 173.2px 96px;
    fill: #ffffff;
    animation:
      ${_r} ${ur} forwards,
      ${za} ${Ua} ${Fa} forwards;
  }
`, Ya = ({ animate: e, initialPosition: t, show: n }) => {
  const [r, o] = M(!0);
  return q(() => {
    e && o(!0);
  }, [e]), !r || !n ? null : /* @__PURE__ */ f(
    Va,
    {
      $initialPosition: t,
      onAnimationEnd: (i) => i.animationName === go.getName() && o(!1),
      children: /* @__PURE__ */ f("svg", { viewBox: "0 0 260 260", children: [
        /* @__PURE__ */ f("circle", { cx: "86.8", cy: "96", id: "left-eye", r: "9.6" }),
        /* @__PURE__ */ f("circle", { cx: "173.2", cy: "96", id: "right-eye", r: "9.6" }),
        /* @__PURE__ */ f("path", { d: "M62.8,156.3c0,0,20.4,35.4,66.6,35.4", id: "left-mouth" }),
        /* @__PURE__ */ f("path", { d: "M42.8,156.3c0,0,20.4,35.4,66.6,35.4", id: "right-mouth" })
      ] })
    }
  );
}, Za = () => {
  const { cameraResolution: e, instruction: t } = Ma(), { smileError: n, smilePhase: r, smileState: o } = Ha(), i = Ga(t.code, r), { escalatedInstructionCodes: s } = Da({
    eventName: fn.INSTRUCTION_ESCALATED
  }), { escalatedInstructions: a, instructions: c } = Se(), u = t.code === ne.CANDIDATE_SELECTION, d = Hs({
    escalatedInstructions: a,
    instructions: c,
    currentInstruction: {
      ...t,
      code: i
    }
  });
  if (o === $e.ERROR)
    return /* @__PURE__ */ f(_o, { text: n == null ? void 0 : n.message });
  if ((o === $e.RUNNING || o === $e.WAITING) && e) {
    const l = na(e);
    return /* @__PURE__ */ f(W, { children: [
      /* @__PURE__ */ f(
        Pa,
        {
          backdropHeight: e.height,
          backdropWidth: e.width,
          isBackdrop: !0,
          isInCandidateSelection: u,
          placeholderRectangle: l
        }
      ),
      /* @__PURE__ */ f(
        Ya,
        {
          animate: s.includes("mouth_score_too_low"),
          initialPosition: l,
          show: r === _t.SMILE
        }
      ),
      d && /* @__PURE__ */ f(
        ya,
        {
          cssBottom: (l.height + l.shiftY) * 100,
          isAnimating: !1,
          isInCandidateSelection: u,
          isPortrait: e.width < e.height,
          children: d
        }
      ),
      /* @__PURE__ */ f(fa, { customControlEvent: Ge.CONTROL, isSwitchCameraDisabled: u })
    ] });
  }
  return /* @__PURE__ */ f(
    Ea,
    {
      cameraHeight: e == null ? void 0 : e.height,
      cameraWidth: e == null ? void 0 : e.width,
      state: o
    }
  );
}, qa = (e) => {
  var a, c;
  const t = {
    ...Ts,
    ...e == null ? void 0 : e.instructions
  }, n = {
    ...xs,
    ...e == null ? void 0 : e.escalatedInstructions
  };
  t.mouth_score_too_low = t.smile, n.mouth_score_too_low = n.smile, t.mouth_score_too_high = t.keep_neutral_expression, n.mouth_score_too_high = n.keep_neutral_expression;
  const r = {
    [$e.LOADING]: {
      ...ar.loading,
      ...(a = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : a.loading
    },
    [$e.DONE]: { ...ar.done, ...(c = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : c.done }
  }, o = (e == null ? void 0 : e.backdropColor) ?? As, i = (e == null ? void 0 : e.showCameraButtons) ?? !1, s = Qs(e == null ? void 0 : e.theme);
  return {
    placeholder: K.CIRCLE_SOLID,
    backdropColor: o,
    instructions: t,
    appStateInstructions: r,
    showCameraButtons: i,
    theme: s,
    escalatedInstructions: n
  };
}, Xa = ({ props: e }) => {
  const t = Zs(Ge.VIDEO_ELEMENT_SIZE);
  return /* @__PURE__ */ f(Gs, { uiProps: qa(e), videoElementSize: t, children: /* @__PURE__ */ f(Za, {}) });
};
Po(Xa, "x-dot-smile-liveness-ui", ["props"]);
