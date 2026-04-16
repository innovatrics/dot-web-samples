var Ze, v, dr, ue, Sn, pr, _r, hr, on, Bt, Ut, mr, Ge = {}, gr = [], So = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ye = Array.isArray;
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
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ze.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) a[i] === void 0 && (a[i] = e.defaultProps[i]);
  return ze(e, a, r, o, null);
}
function ze(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++dr, __i: -1, __u: 0 };
  return o == null && v.vnode != null && v.vnode(i), i;
}
function Eo() {
  return { current: null };
}
function H(e) {
  return e.children;
}
function V(e, t) {
  this.props = e, this.context = t;
}
function Ee(e, t) {
  if (t == null) return e.__ ? Ee(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? Ee(e) : null;
}
function yr(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) {
      e.__e = e.__c.base = n.__e;
      break;
    }
    return yr(e);
  }
}
function Ft(e) {
  (!e.__d && (e.__d = !0) && ue.push(e) && !pt.__r++ || Sn != v.debounceRendering) && ((Sn = v.debounceRendering) || pr)(pt);
}
function pt() {
  for (var e, t, n, r, o, i, a, s = 1; ue.length; ) ue.length > s && ue.sort(_r), e = ue.shift(), s = ue.length, e.__d && (n = void 0, r = void 0, o = (r = (t = e).__v).__e, i = [], a = [], t.__P && ((n = q({}, r)).__v = r.__v + 1, v.vnode && v.vnode(n), sn(t.__P, n, r, t.__n, t.__P.namespaceURI, 32 & r.__u ? [o] : null, i, o ?? Ee(r), !!(32 & r.__u), a), n.__v = r.__v, n.__.__k[n.__i] = n, wr(i, n, a), r.__e = r.__ = null, n.__e != o && yr(n)));
  pt.__r = 0;
}
function vr(e, t, n, r, o, i, a, s, u, l, p) {
  var c, _, f, h, b, S, m, g = r && r.__k || gr, E = t.length;
  for (u = $o(n, t, g, u, E), c = 0; c < E; c++) (f = n.__k[c]) != null && (_ = f.__i == -1 ? Ge : g[f.__i] || Ge, f.__i = c, S = sn(e, f, _, o, i, a, s, u, l, p), h = f.__e, f.ref && _.ref != f.ref && (_.ref && cn(_.ref, null, f), p.push(f.ref, f.__c || h, f)), b == null && h != null && (b = h), (m = !!(4 & f.__u)) || _.__k === f.__k ? u = Cr(f, u, e, m) : typeof f.type == "function" && S !== void 0 ? u = S : h && (u = h.nextSibling), f.__u &= -7);
  return n.__e = b, u;
}
function $o(e, t, n, r, o) {
  var i, a, s, u, l, p = n.length, c = p, _ = 0;
  for (e.__k = new Array(o), i = 0; i < o; i++) (a = t[i]) != null && typeof a != "boolean" && typeof a != "function" ? (typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? a = e.__k[i] = ze(null, a, null, null, null) : Ye(a) ? a = e.__k[i] = ze(H, { children: a }, null, null, null) : a.constructor == null && a.__b > 0 ? a = e.__k[i] = ze(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : e.__k[i] = a, u = i + _, a.__ = e, a.__b = e.__b + 1, s = null, (l = a.__i = ko(a, n, u, c)) != -1 && (c--, (s = n[l]) && (s.__u |= 2)), s == null || s.__v == null ? (l == -1 && (o > p ? _-- : o < p && _++), typeof a.type != "function" && (a.__u |= 4)) : l != u && (l == u - 1 ? _-- : l == u + 1 ? _++ : (l > u ? _-- : _++, a.__u |= 4))) : e.__k[i] = null;
  if (c) for (i = 0; i < p; i++) (s = n[i]) != null && (2 & s.__u) == 0 && (s.__e == r && (r = Ee(s)), Sr(s, s));
  return r;
}
function Cr(e, t, n, r) {
  var o, i;
  if (typeof e.type == "function") {
    for (o = e.__k, i = 0; o && i < o.length; i++) o[i] && (o[i].__ = e, t = Cr(o[i], t, n, r));
    return t;
  }
  e.__e != t && (r && (t && e.type && !t.parentNode && (t = Ee(e)), n.insertBefore(e.__e, t || null)), t = e.__e);
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
  var o, i, a, s = e.key, u = e.type, l = t[n], p = l != null && (2 & l.__u) == 0;
  if (l === null && s == null || p && s == l.key && u == l.type) return n;
  if (r > (p ? 1 : 0)) {
    for (o = n - 1, i = n + 1; o >= 0 || i < t.length; ) if ((l = t[a = o >= 0 ? o-- : i++]) != null && (2 & l.__u) == 0 && s == l.key && u == l.type) return a;
  }
  return -1;
}
function En(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || So.test(t) ? n : n + "px";
}
function et(e, t, n, r, o) {
  var i, a;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || En(e.style, t, "");
    if (n) for (t in n) r && n[t] == r[t] || En(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace(hr, "$1")), a = t.toLowerCase(), t = a in e || t == "onFocusOut" || t == "onFocusIn" ? a.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = on, e.addEventListener(t, i ? Ut : Bt, i)) : e.removeEventListener(t, i ? Ut : Bt, i);
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
function $n(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t.t == null) t.t = on++;
      else if (t.t < n.u) return;
      return n(v.event ? v.event(t) : t);
    }
  };
}
function sn(e, t, n, r, o, i, a, s, u, l) {
  var p, c, _, f, h, b, S, m, g, E, k, x, w, y, D, U, Ae, F = t.type;
  if (t.constructor != null) return null;
  128 & n.__u && (u = !!(32 & n.__u), i = [s = t.__e = n.__e]), (p = v.__b) && p(t);
  e: if (typeof F == "function") try {
    if (m = t.props, g = "prototype" in F && F.prototype.render, E = (p = F.contextType) && r[p.__c], k = p ? E ? E.props.value : p.__ : r, n.__c ? S = (c = t.__c = n.__c).__ = c.__E : (g ? t.__c = c = new F(m, k) : (t.__c = c = new V(m, k), c.constructor = F, c.render = xo), E && E.sub(c), c.state || (c.state = {}), c.__n = r, _ = c.__d = !0, c.__h = [], c._sb = []), g && c.__s == null && (c.__s = c.state), g && F.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = q({}, c.__s)), q(c.__s, F.getDerivedStateFromProps(m, c.__s))), f = c.props, h = c.state, c.__v = t, _) g && F.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), g && c.componentDidMount != null && c.__h.push(c.componentDidMount);
    else {
      if (g && F.getDerivedStateFromProps == null && m !== f && c.componentWillReceiveProps != null && c.componentWillReceiveProps(m, k), t.__v == n.__v || !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(m, c.__s, k) === !1) {
        for (t.__v != n.__v && (c.props = m, c.state = c.__s, c.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(oe) {
          oe && (oe.__ = t);
        }), x = 0; x < c._sb.length; x++) c.__h.push(c._sb[x]);
        c._sb = [], c.__h.length && a.push(c);
        break e;
      }
      c.componentWillUpdate != null && c.componentWillUpdate(m, c.__s, k), g && c.componentDidUpdate != null && c.__h.push(function() {
        c.componentDidUpdate(f, h, b);
      });
    }
    if (c.context = k, c.props = m, c.__P = e, c.__e = !1, w = v.__r, y = 0, g) {
      for (c.state = c.__s, c.__d = !1, w && w(t), p = c.render(c.props, c.state, c.context), D = 0; D < c._sb.length; D++) c.__h.push(c._sb[D]);
      c._sb = [];
    } else do
      c.__d = !1, w && w(t), p = c.render(c.props, c.state, c.context), c.state = c.__s;
    while (c.__d && ++y < 25);
    c.state = c.__s, c.getChildContext != null && (r = q(q({}, r), c.getChildContext())), g && !_ && c.getSnapshotBeforeUpdate != null && (b = c.getSnapshotBeforeUpdate(f, h)), U = p, p != null && p.type === H && p.key == null && (U = br(p.props.children)), s = vr(e, Ye(U) ? U : [U], t, n, r, o, i, a, s, u, l), c.base = t.__e, t.__u &= -161, c.__h.length && a.push(c), S && (c.__E = c.__ = null);
  } catch (oe) {
    if (t.__v = null, u || i != null) if (oe.then) {
      for (t.__u |= u ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
      i[i.indexOf(s)] = null, t.__e = s;
    } else {
      for (Ae = i.length; Ae--; ) an(i[Ae]);
      zt(t);
    }
    else t.__e = n.__e, t.__k = n.__k, oe.then || zt(t);
    v.__e(oe, t, n);
  }
  else i == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : s = t.__e = No(n.__e, t, n, r, o, i, a, u, l);
  return (p = v.diffed) && p(t), 128 & t.__u ? void 0 : s;
}
function zt(e) {
  e && e.__c && (e.__c.__e = !0), e && e.__k && e.__k.forEach(zt);
}
function wr(e, t, n) {
  for (var r = 0; r < n.length; r++) cn(n[r], n[++r], n[++r]);
  v.__c && v.__c(t, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      v.__e(i, o.__v);
    }
  });
}
function br(e) {
  return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : Ye(e) ? e.map(br) : q({}, e);
}
function No(e, t, n, r, o, i, a, s, u) {
  var l, p, c, _, f, h, b, S = n.props || Ge, m = t.props, g = t.type;
  if (g == "svg" ? o = "http://www.w3.org/2000/svg" : g == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (l = 0; l < i.length; l++) if ((f = i[l]) && "setAttribute" in f == !!g && (g ? f.localName == g : f.nodeType == 3)) {
      e = f, i[l] = null;
      break;
    }
  }
  if (e == null) {
    if (g == null) return document.createTextNode(m);
    e = document.createElementNS(o, g, m.is && m), s && (v.__m && v.__m(t, i), s = !1), i = null;
  }
  if (g == null) S === m || s && e.data == m || (e.data = m);
  else {
    if (i = i && Ze.call(e.childNodes), !s && i != null) for (S = {}, l = 0; l < e.attributes.length; l++) S[(f = e.attributes[l]).name] = f.value;
    for (l in S) if (f = S[l], l != "children") {
      if (l == "dangerouslySetInnerHTML") c = f;
      else if (!(l in m)) {
        if (l == "value" && "defaultValue" in m || l == "checked" && "defaultChecked" in m) continue;
        et(e, l, null, f, o);
      }
    }
    for (l in m) f = m[l], l == "children" ? _ = f : l == "dangerouslySetInnerHTML" ? p = f : l == "value" ? h = f : l == "checked" ? b = f : s && typeof f != "function" || S[l] === f || et(e, l, f, S[l], o);
    if (p) s || c && (p.__html == c.__html || p.__html == e.innerHTML) || (e.innerHTML = p.__html), t.__k = [];
    else if (c && (e.innerHTML = ""), vr(t.type == "template" ? e.content : e, Ye(_) ? _ : [_], t, n, r, g == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, a, i ? i[0] : n.__k && Ee(n, 0), s, u), i != null) for (l = i.length; l--; ) an(i[l]);
    s || (l = "value", g == "progress" && h == null ? e.removeAttribute("value") : h != null && (h !== e[l] || g == "progress" && !h || g == "option" && h != S[l]) && et(e, l, h, S[l], o), l = "checked", b != null && b != e[l] && et(e, l, b, S[l], o));
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
    v.__e(o, n);
  }
}
function Sr(e, t, n) {
  var r, o;
  if (v.unmount && v.unmount(e), (r = e.ref) && (r.current && r.current != e.__e || cn(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (i) {
      v.__e(i, t);
    }
    r.base = r.__P = null;
  }
  if (r = e.__k) for (o = 0; o < r.length; o++) r[o] && Sr(r[o], t, n || typeof e.type != "function");
  n || an(e.__e), e.__c = e.__ = e.__e = void 0;
}
function xo(e, t, n) {
  return this.constructor(e, n);
}
function se(e, t, n) {
  var r, o, i, a;
  t == document && (t = document.documentElement), v.__ && v.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], a = [], sn(t, e = (!r && n || t).__k = L(H, null, [e]), o || Ge, Ge, t.namespaceURI, !r && n ? [n] : o ? null : t.firstChild ? Ze.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, a), wr(i, e, a);
}
function ln(e, t) {
  se(e, t, ln);
}
function un(e, t, n) {
  var r, o, i, a, s = q({}, e.props);
  for (i in e.type && e.type.defaultProps && (a = e.type.defaultProps), t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i] === void 0 && a != null ? a[i] : t[i];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? Ze.call(arguments, 2) : n), ze(e.type, s, r || e.key, o || e.ref, null);
}
function Er(e) {
  function t(n) {
    var r, o;
    return this.getChildContext || (r = /* @__PURE__ */ new Set(), (o = {})[t.__c] = this, this.getChildContext = function() {
      return o;
    }, this.componentWillUnmount = function() {
      r = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value != i.value && r.forEach(function(a) {
        a.__e = !0, Ft(a);
      });
    }, this.sub = function(i) {
      r.add(i);
      var a = i.componentWillUnmount;
      i.componentWillUnmount = function() {
        r && r.delete(i), a && a.call(i);
      };
    }), n.children;
  }
  return t.__c = "__cC" + mr++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(n, r) {
    return n.children(r);
  }).contextType = t, t;
}
Ze = gr.slice, v = { __e: function(e, t, n, r) {
  for (var o, i, a; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), a = o.__d), a) return o.__E = o;
  } catch (s) {
    e = s;
  }
  throw e;
} }, dr = 0, V.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = q({}, this.state), typeof e == "function" && (e = e(q({}, n), this.props)), e && q(n, e), e != null && this.__v && (t && this._sb.push(t), Ft(this));
}, V.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ft(this));
}, V.prototype.render = H, ue = [], pr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, _r = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, pt.__r = 0, hr = /(PointerCapture)$|Capture$/i, on = 0, Bt = $n(!1), Ut = $n(!0), mr = 0;
function _t() {
  return _t = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, _t.apply(this, arguments);
}
function $r(e, t) {
  if (e == null) return {};
  var n, r, o = {}, i = Object.keys(e);
  for (r = 0; r < i.length; r++) t.indexOf(n = i[r]) >= 0 || (o[n] = e[n]);
  return o;
}
var To = ["context", "children"], Oo = ["useFragment"];
function Io(e, t, n, r) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = e, i._root = i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = function() {
    Ao.call(this, r);
  }, o.prototype.attributeChangedCallback = Po, o.prototype.disconnectedCallback = Lo, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = n, e.formAssociated && (o.formAssociated = !0), n.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom ? this._vdom.props[i] : this._props[i];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(i, null, a) : (this._props || (this._props = {}), this._props[i] = a);
      var s = typeof a;
      a != null && s !== "string" && s !== "boolean" && s !== "number" || this.setAttribute(i, a);
    } });
  }), customElements.define(t, o), o;
}
function Ro(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, n = $r(e, To);
  return un(t, n);
}
function Ao(e) {
  var t = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(t), this._vdom = L(Ro, _t({}, this._props, { context: t.detail.context }), Nr(this, this._vdomComponent, e)), (this.hasAttribute("hydrate") ? ln : se)(this._vdom, this._root);
}
function kr(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function Po(e, t, n) {
  if (this._vdom) {
    var r = {};
    r[e] = n = n ?? void 0, r[kr(e)] = n, this._vdom = un(this._vdom, r), se(this._vdom, this._root);
  }
}
function Lo() {
  se(this._vdom = null, this._root);
}
function kn(e, t) {
  var n = this, r = e.useFragment, o = $r(e, Oo);
  return L(r ? H : "slot", _t({}, o, { ref: function(i) {
    i ? (n.ref = i, n._listener || (n._listener = function(a) {
      a.stopPropagation(), a.detail.context = t;
    }, i.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function Nr(e, t, n) {
  if (e.nodeType === 3) return e.data;
  if (e.nodeType !== 1) return null;
  var r = [], o = {}, i = 0, a = e.attributes, s = e.childNodes;
  for (i = a.length; i--; ) a[i].name !== "slot" && (o[a[i].name] = a[i].value, o[kr(a[i].name)] = a[i].value);
  for (i = s.length; i--; ) {
    var u = Nr(s[i], null, n), l = s[i].slot;
    l ? o[l] = L(kn, { name: l }, u) : r[i] = u;
  }
  var p = !(!n || !n.shadow), c = t ? L(kn, { useFragment: !p }, r) : r;
  return !p && t && (e.innerHTML = ""), L(t || e.nodeName.toLowerCase(), o, c);
}
var Mo = 0;
function d(e, t, n, r, o, i) {
  t || (t = {});
  var a, s, u = t;
  if ("ref" in u) for (s in u = {}, t) s == "ref" ? a = t[s] : u[s] = t[s];
  var l = { type: e, props: u, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Mo, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (a = e.defaultProps)) for (s in a) u[s] === void 0 && (u[s] = a[s]);
  return v.vnode && v.vnode(l), l;
}
const Nn = {
  SWITCH_CAMERA: "switch-camera",
  TOGGLE_MIRROR: "toggle-mirror"
};
var xr = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", e.CONTROL = "document-auto-capture:control", e.DETECTION_CHANGED = "document-auto-capture:detection-changed", e.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", e.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", e.STATE_CHANGED = "document-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", e))(xr || {}), pe = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", e.CONTROL = "palm-capture:control", e.DETECTION_CHANGED = "palm-capture:detection-changed", e.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", e.STATE_CHANGED = "palm-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", e))(pe || {});
const M = {
  LOADING: "loading",
  ERROR: "error",
  WAITING: "waiting",
  // TODO: this state may not be needed in the new architecture - consider removing on next major release version
  RUNNING: "running",
  COMPLETE: "complete",
  BLURRED: "blurred"
}, j = {
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
var ce, O, It, xn, $e = 0, Tr = [], I = v, Tn = I.__b, On = I.__r, In = I.diffed, Rn = I.__c, An = I.unmount, Pn = I.__;
function Oe(e, t) {
  I.__h && I.__h(O, e, $e || t), $e = 0;
  var n = O.__H || (O.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function W(e) {
  return $e = 1, fn(Rr, e);
}
function fn(e, t, n) {
  var r = Oe(ce++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Rr(void 0, t), function(s) {
    var u = r.__N ? r.__N[0] : r.__[0], l = r.t(u, s);
    u !== l && (r.__N = [l, r.__[1]], r.__c.setState({}));
  }], r.__c = O, !O.__f)) {
    var o = function(s, u, l) {
      if (!r.__c.__H) return !0;
      var p = r.__c.__H.__.filter(function(_) {
        return !!_.__c;
      });
      if (p.every(function(_) {
        return !_.__N;
      })) return !i || i.call(this, s, u, l);
      var c = r.__c.props !== s;
      return p.forEach(function(_) {
        if (_.__N) {
          var f = _.__[0];
          _.__ = _.__N, _.__N = void 0, f !== _.__[0] && (c = !0);
        }
      }), i && i.call(this, s, u, l) || c;
    };
    O.__f = !0;
    var i = O.shouldComponentUpdate, a = O.componentWillUpdate;
    O.componentWillUpdate = function(s, u, l) {
      if (this.__e) {
        var p = i;
        i = void 0, o(s, u, l), i = p;
      }
      a && a.call(this, s, u, l);
    }, O.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function ne(e, t) {
  var n = Oe(ce++, 3);
  !I.__s && dn(n.__H, t) && (n.__ = e, n.u = t, O.__H.__h.push(n));
}
function Ie(e, t) {
  var n = Oe(ce++, 4);
  !I.__s && dn(n.__H, t) && (n.__ = e, n.u = t, O.__h.push(n));
}
function qe(e) {
  return $e = 5, te(function() {
    return { current: e };
  }, []);
}
function Or(e, t, n) {
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
  var n = Oe(ce++, 7);
  return dn(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function _e(e, t) {
  return $e = 8, te(function() {
    return e;
  }, t);
}
function Xe(e) {
  var t = O.context[e.__c], n = Oe(ce++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(O)), t.props.value) : e.__;
}
function ht(e, t) {
  I.useDebugValue && I.useDebugValue(t ? t(e) : e);
}
function Ir() {
  var e = Oe(ce++, 11);
  if (!e.__) {
    for (var t = O.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function Do() {
  for (var e; e = Tr.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(it), e.__H.__h.forEach(jt), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], I.__e(t, e.__v);
  }
}
I.__b = function(e) {
  O = null, Tn && Tn(e);
}, I.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Pn && Pn(e, t);
}, I.__r = function(e) {
  On && On(e), ce = 0;
  var t = (O = e.__c).__H;
  t && (It === O ? (t.__h = [], O.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.forEach(it), t.__h.forEach(jt), t.__h = [], ce = 0)), It = O;
}, I.diffed = function(e) {
  In && In(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Tr.push(t) !== 1 && xn === I.requestAnimationFrame || ((xn = I.requestAnimationFrame) || Ho)(Do)), t.__H.__.forEach(function(n) {
    n.u && (n.__H = n.u), n.u = void 0;
  })), It = O = null;
}, I.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(it), n.__h = n.__h.filter(function(r) {
        return !r.__ || jt(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], I.__e(r, n.__v);
    }
  }), Rn && Rn(e, t);
}, I.unmount = function(e) {
  An && An(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      it(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && I.__e(t, n.__v));
};
var Ln = typeof requestAnimationFrame == "function";
function Ho(e) {
  var t, n = function() {
    clearTimeout(r), Ln && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 35);
  Ln && (t = requestAnimationFrame(n));
}
function it(e) {
  var t = O, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), O = t;
}
function jt(e) {
  var t = O;
  e.__c = e.__(), O = t;
}
function dn(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function Rr(e, t) {
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
function Bo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Uo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Fo = /* @__PURE__ */ Bo(
  function(e) {
    return Uo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Ar(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Wt(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function Pr(e, t) {
  var n = t(), r = W({ t: { __: n, u: t } }), o = r[0].t, i = r[1];
  return Ie(function() {
    o.__ = n, o.u = t, Rt(o) && i({ t: o });
  }, [e, n, t]), ne(function() {
    return Rt(o) && i({ t: o }), e(function() {
      Rt(o) && i({ t: o });
    });
  }, [e]), n;
}
function Rt(e) {
  var t, n, r = e.u, o = e.__;
  try {
    var i = r();
    return !((t = o) === (n = i) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
}
function Lr(e) {
  e();
}
function Mr(e) {
  return e;
}
function Dr() {
  return [!1, Lr];
}
var Hr = Ie;
function Gt(e, t) {
  this.props = e, this.context = t;
}
function zo(e, t) {
  function n(o) {
    var i = this.props.ref, a = i == o.ref;
    return !a && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !a : Wt(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, L(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r.type = e, r;
}
(Gt.prototype = new V()).isPureReactComponent = !0, Gt.prototype.shouldComponentUpdate = function(e, t) {
  return Wt(this.props, e) || Wt(this.state, t);
};
var Mn = v.__b;
v.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Mn && Mn(e);
};
var jo = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.forward_ref") || 3911;
function Wo(e) {
  function t(n) {
    var r = Ar({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = jo, t.render = e, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Dn = function(e, t) {
  return e == null ? null : ee(ee(e).map(t));
}, Go = { map: Dn, forEach: Dn, count: function(e) {
  return e ? ee(e).length : 0;
}, only: function(e) {
  var t = ee(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: ee }, Vo = v.__e;
v.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  Vo(e, t, n, r);
};
var Hn = v.unmount;
function Br(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = Ar({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return Br(r, t, n);
  })), e;
}
function Ur(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return Ur(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function at() {
  this.__u = 0, this.o = null, this.__b = null;
}
function Fr(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Zo(e) {
  var t, n, r, o = null;
  function i(a) {
    if (t || (t = e()).then(function(s) {
      s && (o = s.default || s), r = !0;
    }, function(s) {
      n = s, r = !0;
    }), n) throw n;
    if (!r) throw t;
    return o ? L(o, a) : null;
  }
  return i.displayName = "Lazy", i.__f = !0, i;
}
function He() {
  this.i = null, this.l = null;
}
v.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Hn && Hn(e);
}, (at.prototype = new V()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.o == null && (r.o = []), r.o.push(n);
  var o = Fr(r.__v), i = !1, a = function() {
    i || (i = !0, n.__R = null, o ? o(s) : s());
  };
  n.__R = a;
  var s = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var u = r.state.__a;
        r.__v.__k[0] = Ur(u, u.__c.__P, u.__c.__O);
      }
      var l;
      for (r.setState({ __a: r.__b = null }); l = r.o.pop(); ) l.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(a, a);
}, at.prototype.componentWillUnmount = function() {
  this.o = [];
}, at.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Br(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && L(H, null, e.fallback);
  return o && (o.__u &= -33), [L(H, null, t.__a ? null : e.children), o];
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
    se(null, t.v), t.v = null, t.h = null;
  }, t.h && t.h !== n && t.componentWillUnmount(), !t.v) {
    for (var r = t.__v; r !== null && !r.__m && r.__ !== null; ) r = r.__;
    t.h = n, t.v = { nodeType: 1, parentNode: n, childNodes: [], __k: { __m: r.__m }, contains: function() {
      return !0;
    }, insertBefore: function(o, i) {
      this.childNodes.push(o), t.h.insertBefore(o, i);
    }, removeChild: function(o) {
      this.childNodes.splice(this.childNodes.indexOf(o) >>> 1, 1), t.h.removeChild(o);
    } };
  }
  se(L(Yo, { context: t.context }, e.__v), t.v);
}
function Xo(e, t) {
  var n = L(qo, { __v: e, h: t });
  return n.containerInfo = t, n;
}
(He.prototype = new V()).__a = function(e) {
  var t = this, n = Fr(t.__v), r = t.l.get(e);
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
var zr = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || 60103, Ko = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Qo = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Jo = /[A-Z0-9]/g, ei = typeof document < "u", ti = function(e) {
  return (typeof Symbol < "u" && typeof /* @__PURE__ */ Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function ni(e, t, n) {
  return t.__k == null && (t.textContent = ""), se(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function ri(e, t, n) {
  return ln(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
V.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(V.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Un = v.event;
function oi() {
}
function ii() {
  return this.cancelBubble;
}
function ai() {
  return this.defaultPrevented;
}
v.event = function(e) {
  return Un && (e = Un(e)), e.persist = oi, e.isPropagationStopped = ii, e.isDefaultPrevented = ai, e.nativeEvent = e;
};
var pn, si = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Fn = v.vnode;
v.vnode = function(e) {
  typeof e.type == "string" && (function(t) {
    var n = t.props, r = t.type, o = {}, i = r.indexOf("-") === -1;
    for (var a in n) {
      var s = n[a];
      if (!(a === "value" && "defaultValue" in n && s == null || ei && a === "children" && r === "noscript" || a === "class" || a === "className")) {
        var u = a.toLowerCase();
        a === "defaultValue" && "value" in n && n.value == null ? a = "value" : a === "download" && s === !0 ? s = "" : u === "translate" && s === "no" ? s = !1 : u[0] === "o" && u[1] === "n" ? u === "ondoubleclick" ? a = "ondblclick" : u !== "onchange" || r !== "input" && r !== "textarea" || ti(n.type) ? u === "onfocus" ? a = "onfocusin" : u === "onblur" ? a = "onfocusout" : Qo.test(a) && (a = u) : u = a = "oninput" : i && Ko.test(a) ? a = a.replace(Jo, "-$&").toLowerCase() : s === null && (s = void 0), u === "oninput" && o[a = u] && (a = "oninputCapture"), o[a] = s;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = ee(n.children).forEach(function(l) {
      l.props.selected = o.value.indexOf(l.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = ee(n.children).forEach(function(l) {
      l.props.selected = o.multiple ? o.defaultValue.indexOf(l.props.value) != -1 : o.defaultValue == l.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", si)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  })(e), e.$$typeof = zr, Fn && Fn(e);
};
var zn = v.__r;
v.__r = function(e) {
  zn && zn(e), pn = e.__c;
};
var jn = v.diffed;
v.diffed = function(e) {
  jn && jn(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), pn = null;
};
var ci = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return pn.__n[e.__c].props.value;
}, useCallback: _e, useContext: Xe, useDebugValue: ht, useDeferredValue: Mr, useEffect: ne, useId: Ir, useImperativeHandle: Or, useInsertionEffect: Hr, useLayoutEffect: Ie, useMemo: te, useReducer: fn, useRef: qe, useState: W, useSyncExternalStore: Pr, useTransition: Dr } } };
function li(e) {
  return L.bind(null, e);
}
function vt(e) {
  return !!e && e.$$typeof === zr;
}
function ui(e) {
  return vt(e) && e.type === H;
}
function fi(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function di(e) {
  return vt(e) ? un.apply(null, arguments) : e;
}
function pi(e) {
  return !!e.__k && (se(null, e), !0);
}
function _i(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var hi = function(e, t) {
  return e(t);
}, mi = function(e, t) {
  return e(t);
}, gi = H, yi = vt, re = { useState: W, useId: Ir, useReducer: fn, useEffect: ne, useLayoutEffect: Ie, useInsertionEffect: Hr, useTransition: Dr, useDeferredValue: Mr, useSyncExternalStore: Pr, startTransition: Lr, useRef: qe, useImperativeHandle: Or, useMemo: te, useCallback: _e, useContext: Xe, useDebugValue: ht, version: "18.3.1", Children: Go, render: ni, hydrate: ri, unmountComponentAtNode: pi, createPortal: Xo, createElement: L, createContext: Er, createFactory: li, cloneElement: di, createRef: Eo, Fragment: H, isValidElement: vt, isElement: yi, isFragment: ui, isMemo: fi, findDOMNode: _i, Component: V, PureComponent: Gt, memo: zo, forwardRef: Wo, flushSync: mi, unstable_batchedUpdates: hi, StrictMode: gi, Suspense: at, SuspenseList: He, lazy: Zo, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ci };
function vi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var At, Wn;
function Ci() {
  return Wn || (Wn = 1, At = function(t, n, r, o) {
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
    for (var u = Object.prototype.hasOwnProperty.bind(n), l = 0; l < a.length; l++) {
      var p = a[l];
      if (!u(p))
        return !1;
      var c = t[p], _ = n[p];
      if (i = r ? r.call(o, c, _, p) : void 0, i === !1 || i === void 0 && c !== _)
        return !1;
    }
    return !0;
  }), At;
}
var wi = Ci();
const bi = /* @__PURE__ */ vi(wi);
var T = "-ms-", je = "-moz-", N = "-webkit-", jr = "comm", Ct = "rule", _n = "decl", Si = "@import", Wr = "@keyframes", Ei = "@layer", Gr = Math.abs, hn = String.fromCharCode, Vt = Object.assign;
function $i(e, t) {
  return A(e, 0) ^ 45 ? (((t << 2 ^ A(e, 0)) << 2 ^ A(e, 1)) << 2 ^ A(e, 2)) << 2 ^ A(e, 3) : 0;
}
function Vr(e) {
  return e.trim();
}
function Q(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function C(e, t, n) {
  return e.replace(t, n);
}
function st(e, t, n) {
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
function Zr(e) {
  return e.length;
}
function Be(e, t) {
  return t.push(e), e;
}
function ki(e, t) {
  return e.map(t).join("");
}
function Gn(e, t) {
  return e.filter(function(n) {
    return !Q(n, t);
  });
}
var wt = 1, Ne = 1, Yr = 0, G = 0, R = 0, Re = "";
function bt(e, t, n, r, o, i, a, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: wt, column: Ne, length: a, return: "", siblings: s };
}
function ae(e, t) {
  return Vt(bt("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function be(e) {
  for (; e.root; )
    e = ae(e.root, { children: [e] });
  Be(e, e.siblings);
}
function Ni() {
  return R;
}
function xi() {
  return R = G > 0 ? A(Re, --G) : 0, Ne--, R === 10 && (Ne = 1, wt--), R;
}
function Z() {
  return R = G < Yr ? A(Re, G++) : 0, Ne++, R === 10 && (Ne = 1, wt++), R;
}
function he() {
  return A(Re, G);
}
function ct() {
  return G;
}
function St(e, t) {
  return ke(Re, e, t);
}
function Zt(e) {
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
  return wt = Ne = 1, Yr = Y(Re = e), G = 0, [];
}
function Oi(e) {
  return Re = "", e;
}
function Pt(e) {
  return Vr(St(G - 1, Yt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ii(e) {
  for (; (R = he()) && R < 33; )
    Z();
  return Zt(e) > 2 || Zt(R) > 3 ? "" : " ";
}
function Ri(e, t) {
  for (; --t && Z() && !(R < 48 || R > 102 || R > 57 && R < 65 || R > 70 && R < 97); )
    ;
  return St(e, ct() + (t < 6 && he() == 32 && Z() == 32));
}
function Yt(e) {
  for (; Z(); )
    switch (R) {
      // ] ) " '
      case e:
        return G;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Yt(R);
        break;
      // (
      case 40:
        e === 41 && Yt(e);
        break;
      // \
      case 92:
        Z();
        break;
    }
  return G;
}
function Ai(e, t) {
  for (; Z() && e + R !== 57; )
    if (e + R === 84 && he() === 47)
      break;
  return "/*" + St(t, G - 1) + "*" + hn(e === 47 ? e : Z());
}
function Pi(e) {
  for (; !Zt(he()); )
    Z();
  return St(e, G);
}
function Li(e) {
  return Oi(lt("", null, null, null, [""], e = Ti(e), 0, [0], e));
}
function lt(e, t, n, r, o, i, a, s, u) {
  for (var l = 0, p = 0, c = a, _ = 0, f = 0, h = 0, b = 1, S = 1, m = 1, g = 0, E = "", k = o, x = i, w = r, y = E; S; )
    switch (h = g, g = Z()) {
      // (
      case 40:
        if (h != 108 && A(y, c - 1) == 58) {
          st(y += C(Pt(g), "&", "&\f"), "&\f", Gr(l ? s[l - 1] : 0)) != -1 && (m = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        y += Pt(g);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        y += Ii(h);
        break;
      // \
      case 92:
        y += Ri(ct() - 1, 7);
        continue;
      // /
      case 47:
        switch (he()) {
          case 42:
          case 47:
            Be(Mi(Ai(Z(), ct()), t, n, u), u);
            break;
          default:
            y += "/";
        }
        break;
      // {
      case 123 * b:
        s[l++] = Y(y) * m;
      // } ; \0
      case 125 * b:
      case 59:
      case 0:
        switch (g) {
          // \0 }
          case 0:
          case 125:
            S = 0;
          // ;
          case 59 + p:
            m == -1 && (y = C(y, /\f/g, "")), f > 0 && Y(y) - c && Be(f > 32 ? Zn(y + ";", r, n, c - 1, u) : Zn(C(y, " ", "") + ";", r, n, c - 2, u), u);
            break;
          // @ ;
          case 59:
            y += ";";
          // { rule/at-rule
          default:
            if (Be(w = Vn(y, t, n, l, p, o, s, E, k = [], x = [], c, i), i), g === 123)
              if (p === 0)
                lt(y, t, w, w, k, i, c, s, x);
              else
                switch (_ === 99 && A(y, 3) === 110 ? 100 : _) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    lt(e, w, w, r && Be(Vn(e, w, w, 0, 0, o, s, E, o, k = [], c, x), x), o, x, c, s, r ? k : x);
                    break;
                  default:
                    lt(y, w, w, w, [""], x, 0, s, x);
                }
        }
        l = p = f = 0, b = m = 1, E = y = "", c = a;
        break;
      // :
      case 58:
        c = 1 + Y(y), f = h;
      default:
        if (b < 1) {
          if (g == 123)
            --b;
          else if (g == 125 && b++ == 0 && xi() == 125)
            continue;
        }
        switch (y += hn(g), g * b) {
          // &
          case 38:
            m = p > 0 ? 1 : (y += "\f", -1);
            break;
          // ,
          case 44:
            s[l++] = (Y(y) - 1) * m, m = 1;
            break;
          // @
          case 64:
            he() === 45 && (y += Pt(Z())), _ = he(), p = c = Y(E = y += Pi(ct())), g++;
            break;
          // -
          case 45:
            h === 45 && Y(y) == 2 && (b = 0);
        }
    }
  return i;
}
function Vn(e, t, n, r, o, i, a, s, u, l, p, c) {
  for (var _ = o - 1, f = o === 0 ? i : [""], h = Zr(f), b = 0, S = 0, m = 0; b < r; ++b)
    for (var g = 0, E = ke(e, _ + 1, _ = Gr(S = a[b])), k = e; g < h; ++g)
      (k = Vr(S > 0 ? f[g] + " " + E : C(E, /&\f/g, f[g]))) && (u[m++] = k);
  return bt(e, t, n, o === 0 ? Ct : s, u, l, p, c);
}
function Mi(e, t, n, r) {
  return bt(e, t, n, jr, hn(Ni()), ke(e, 2, -2), 0, r);
}
function Zn(e, t, n, r, o) {
  return bt(e, t, n, _n, ke(e, 0, r), ke(e, r + 1, -1), r, o);
}
function qr(e, t, n) {
  switch ($i(e, t)) {
    // color-adjust
    case 5103:
      return N + "print-" + e + e;
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
      return N + e + e;
    // tab-size
    case 4789:
      return je + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return N + e + je + e + T + e + e;
    // writing-mode
    case 5936:
      switch (A(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return N + e + T + C(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return N + e + T + C(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return N + e + T + C(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return N + e + T + e + e;
    // order
    case 6165:
      return N + e + T + "flex-" + e + e;
    // align-items
    case 5187:
      return N + e + C(e, /(\w+).+(:[^]+)/, N + "box-$1$2" + T + "flex-$1$2") + e;
    // align-self
    case 5443:
      return N + e + T + "flex-item-" + C(e, /flex-|-self/g, "") + (Q(e, /flex-|baseline/) ? "" : T + "grid-row-" + C(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return N + e + T + "flex-line-pack" + C(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return N + e + T + C(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return N + e + T + C(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return N + "box-" + C(e, "-grow", "") + N + e + T + C(e, "grow", "positive") + e;
    // transition
    case 4554:
      return N + C(e, /([^-])(transform)/g, "$1" + N + "$2") + e;
    // cursor
    case 6187:
      return C(C(C(e, /(zoom-|grab)/, N + "$1"), /(image-set)/, N + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return C(e, /(image-set\([^]*)/, N + "$1$`$1");
    // justify-content
    case 4968:
      return C(C(e, /(.+:)(flex-)?(.*)/, N + "box-pack:$3" + T + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + N + e + e;
    // justify-self
    case 4200:
      if (!Q(e, /flex-|baseline/)) return T + "grid-column-align" + ke(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return T + C(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, Q(r.props, /grid-\w+-end/);
      }) ? ~st(e + (n = n[t].value), "span", 0) ? e : T + C(e, "-start", "") + e + T + "grid-row-span:" + (~st(n, "span", 0) ? Q(n, /\d+/) : +Q(n, /\d+/) - +Q(e, /\d+/)) + ";" : T + C(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return Q(r.props, /grid-\w+-start/);
      }) ? e : T + C(C(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return C(e, /(.+)-inline(.+)/, N + "$1$2") + e;
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
      if (Y(e) - 1 - t > 6)
        switch (A(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (A(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return C(e, /(.+:)(.+)-([^]+)/, "$1" + N + "$2-$3$1" + je + (A(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~st(e, "stretch", 0) ? qr(C(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return C(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, a, s, u, l) {
        return T + o + ":" + i + l + (a ? T + o + "-span:" + (s ? u : +u - +i) + l : "") + e;
      });
    // position: sticky
    case 4949:
      if (A(e, t + 6) === 121)
        return C(e, ":", ":" + N) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (A(e, A(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return C(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + N + (A(e, 14) === 45 ? "inline-" : "") + "box$3$1" + N + "$2$3$1" + T + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return C(e, ":", ":" + T) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return C(e, "scroll-", "scroll-snap-") + e;
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
    case Ei:
      if (e.children.length) break;
    case Si:
    case _n:
      return e.return = e.return || e.value;
    case jr:
      return "";
    case Wr:
      return e.return = e.value + "{" + mt(e.children, r) + "}";
    case Ct:
      if (!Y(e.value = e.props.join(","))) return "";
  }
  return Y(n = mt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Hi(e) {
  var t = Zr(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function Bi(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Ui(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case _n:
        e.return = qr(e.value, e.length, n);
        return;
      case Wr:
        return mt([ae(e, { value: C(e.value, "@", "@" + N) })], r);
      case Ct:
        if (e.length)
          return ki(n = e.props, function(o) {
            switch (Q(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                be(ae(e, { props: [C(o, /:(read-\w+)/, ":" + je + "$1")] })), be(ae(e, { props: [o] })), Vt(e, { props: Gn(n, r) });
                break;
              // :placeholder
              case "::placeholder":
                be(ae(e, { props: [C(o, /:(plac\w+)/, ":" + N + "input-$1")] })), be(ae(e, { props: [C(o, /:(plac\w+)/, ":" + je + "$1")] })), be(ae(e, { props: [C(o, /:(plac\w+)/, T + "input-$1")] })), be(ae(e, { props: [o] })), Vt(e, { props: Gn(n, r) });
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
}, $ = {}, ye = typeof process < "u" && $ !== void 0 && ($.REACT_APP_SC_ATTR || $.SC_ATTR) || "data-styled", Xr = "active", Kr = "data-styled-version", Et = "6.1.19", mn = `/*!sc*/
`, gt = typeof window < "u" && typeof document < "u", zi = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && $ !== void 0 && $.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && $.REACT_APP_SC_DISABLE_SPEEDY !== "" ? $.REACT_APP_SC_DISABLE_SPEEDY !== "false" && $.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && $ !== void 0 && $.SC_DISABLE_SPEEDY !== void 0 && $.SC_DISABLE_SPEEDY !== "" ? $.SC_DISABLE_SPEEDY !== "false" && $.SC_DISABLE_SPEEDY : $.NODE_ENV !== "production"), Yn = /invalid hook call/i, tt = /* @__PURE__ */ new Set(), ji = function(e, t) {
  if ($.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, o = console.error;
    try {
      var i = !0;
      console.error = function(a) {
        for (var s = [], u = 1; u < arguments.length; u++) s[u - 1] = arguments[u];
        Yn.test(a) ? (i = !1, tt.delete(r)) : o.apply(void 0, ge([a], s, !1));
      }, qe(), i && !tt.has(r) && (console.warn(r), tt.add(r));
    } catch (a) {
      Yn.test(a.message) && tt.delete(r);
    } finally {
      console.error = o;
    }
  }
}, $t = Object.freeze([]), xe = Object.freeze({});
function Wi(e, t, n) {
  return n === void 0 && (n = xe), e.theme !== n.theme && e.theme || t || n.theme;
}
var qt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Gi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Vi = /(^-|-$)/g;
function qn(e) {
  return e.replace(Gi, "-").replace(Vi, "");
}
var Zi = /(a)(d)/gi, nt = 52, Xn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Xt(e) {
  var t, n = "";
  for (t = Math.abs(e); t > nt; t = t / nt | 0) n = Xn(t % nt) + n;
  return (Xn(t % nt) + n).replace(Zi, "$1-$2");
}
var Lt, Qr = 5381, fe = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Jr = function(e) {
  return fe(Qr, e);
};
function eo(e) {
  return Xt(Jr(e) >>> 0);
}
function to(e) {
  return $.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Mt(e) {
  return typeof e == "string" && ($.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var no = typeof Symbol == "function" && Symbol.for, ro = no ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, Yi = no ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, qi = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Xi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, oo = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Ki = ((Lt = {})[Yi] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Lt[ro] = oo, Lt);
function Kn(e) {
  return ("type" in (t = e) && t.type.$$typeof) === ro ? oo : "$$typeof" in e ? Ki[e.$$typeof] : qi;
  var t;
}
var Qi = Object.defineProperty, Ji = Object.getOwnPropertyNames, Qn = Object.getOwnPropertySymbols, ea = Object.getOwnPropertyDescriptor, ta = Object.getPrototypeOf, Jn = Object.prototype;
function io(e, t, n) {
  if (typeof t != "string") {
    if (Jn) {
      var r = ta(t);
      r && r !== Jn && io(e, r, n);
    }
    var o = Ji(t);
    Qn && (o = o.concat(Qn(t)));
    for (var i = Kn(e), a = Kn(t), s = 0; s < o.length; ++s) {
      var u = o[s];
      if (!(u in Xi || n && n[u] || a && u in a || i && u in i)) {
        var l = ea(t, u);
        try {
          Qi(e, u, l);
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
function gn(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function de(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Kt(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function Te(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Qt(e, t, n) {
  if (n === void 0 && (n = !1), !n && !Te(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = Qt(e[r], t[r]);
  else if (Te(t)) for (var r in t) e[r] = Qt(e[r], t[r]);
  return e;
}
function yn(e, t) {
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
var oa = (function() {
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
    for (var s = this.indexOfGroup(t + 1), u = (a = 0, n.length); a < u; a++) this.tag.insertRule(s, n[a]) && (this.groupSizes[t]++, s++);
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
})(), ia = 1 << 30, ut = /* @__PURE__ */ new Map(), yt = /* @__PURE__ */ new Map(), ft = 1, rt = function(e) {
  if (ut.has(e)) return ut.get(e);
  for (; yt.has(ft); ) ft++;
  var t = ft++;
  if ($.NODE_ENV !== "production" && ((0 | t) < 0 || t > ia)) throw X(16, "".concat(t));
  return ut.set(e, t), yt.set(t, e), t;
}, aa = function(e, t) {
  ft = t + 1, ut.set(e, t), yt.set(t, e);
}, sa = "style[".concat(ye, "][").concat(Kr, '="').concat(Et, '"]'), ca = new RegExp("^".concat(ye, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), la = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++) (r = o[i]) && e.registerName(t, r);
}, ua = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(mn), o = [], i = 0, a = r.length; i < a; i++) {
    var s = r[i].trim();
    if (s) {
      var u = s.match(ca);
      if (u) {
        var l = 0 | parseInt(u[1], 10), p = u[2];
        l !== 0 && (aa(p, l), la(e, p, u[3]), e.getTag().insertRules(l, o)), o.length = 0;
      } else o.push(s);
    }
  }
}, er = function(e) {
  for (var t = document.querySelectorAll(sa), n = 0, r = t.length; n < r; n++) {
    var o = t[n];
    o && o.getAttribute(ye) !== Xr && (ua(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function fa() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var ao = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = (function(s) {
    var u = Array.from(s.querySelectorAll("style[".concat(ye, "]")));
    return u[u.length - 1];
  })(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ye, Xr), r.setAttribute(Kr, Et);
  var a = fa();
  return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
}, da = (function() {
  function e(t) {
    this.element = ao(t), this.element.appendChild(document.createTextNode("")), this.sheet = (function(n) {
      if (n.sheet) return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var a = r[o];
        if (a.ownerNode === n) return a;
      }
      throw X(17);
    })(this.element), this.length = 0;
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
})(), pa = (function() {
  function e(t) {
    this.element = ao(t), this.nodes = this.element.childNodes, this.length = 0;
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
})(), _a = (function() {
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
})(), tr = gt, ha = { isServer: !gt, useCSSOMInjection: !zi }, so = (function() {
  function e(t, n, r) {
    t === void 0 && (t = xe), n === void 0 && (n = {});
    var o = this;
    this.options = P(P({}, ha), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && gt && tr && (tr = !1, er(this)), yn(this, function() {
      return (function(i) {
        for (var a = i.getTag(), s = a.length, u = "", l = function(c) {
          var _ = (function(m) {
            return yt.get(m);
          })(c);
          if (_ === void 0) return "continue";
          var f = i.names.get(_), h = a.getGroup(c);
          if (f === void 0 || !f.size || h.length === 0) return "continue";
          var b = "".concat(ye, ".g").concat(c, '[id="').concat(_, '"]'), S = "";
          f !== void 0 && f.forEach(function(m) {
            m.length > 0 && (S += "".concat(m, ","));
          }), u += "".concat(h).concat(b, '{content:"').concat(S, '"}').concat(mn);
        }, p = 0; p < s; p++) l(p);
        return u;
      })(o);
    });
  }
  return e.registerId = function(t) {
    return rt(t);
  }, e.prototype.rehydrate = function() {
    !this.server && gt && er(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(P(P({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = (function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new _a(o) : r ? new da(o) : new pa(o);
    })(this.options), new oa(t)));
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
})(), ma = /&/g, ga = /^\s*\/\/.*$/gm;
function co(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = co(n.children, t)), n;
  });
}
function lo(e) {
  var t, n, r, o = e === void 0 ? xe : e, i = o.options, a = i === void 0 ? xe : i, s = o.plugins, u = s === void 0 ? $t : s, l = function(_, f, h) {
    return h.startsWith(n) && h.endsWith(n) && h.replaceAll(n, "").length > 0 ? ".".concat(t) : _;
  }, p = u.slice();
  p.push(function(_) {
    _.type === Ct && _.value.includes("&") && (_.props[0] = _.props[0].replace(ma, n).replace(r, l));
  }), a.prefix && p.push(Ui), p.push(Di);
  var c = function(_, f, h, b) {
    f === void 0 && (f = ""), h === void 0 && (h = ""), b === void 0 && (b = "&"), t = b, n = f, r = new RegExp("\\".concat(n, "\\b"), "g");
    var S = _.replace(ga, ""), m = Li(h || f ? "".concat(h, " ").concat(f, " { ").concat(S, " }") : S);
    a.namespace && (m = co(m, a.namespace));
    var g = [];
    return mt(m, Hi(p.concat(Bi(function(E) {
      return g.push(E);
    })))), g;
  };
  return c.hash = u.length ? u.reduce(function(_, f) {
    return f.name || X(15), fe(_, f.name);
  }, Qr).toString() : "", c;
}
var ya = new so(), Jt = lo(), vn = re.createContext({ shouldForwardProp: void 0, styleSheet: ya, stylis: Jt });
vn.Consumer;
var va = re.createContext(void 0);
function en() {
  return Xe(vn);
}
function Ca(e) {
  var t = W(e.stylisPlugins), n = t[0], r = t[1], o = en().styleSheet, i = te(function() {
    var u = o;
    return e.sheet ? u = e.sheet : e.target && (u = u.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (u = u.reconstructWithOptions({ useCSSOMInjection: !1 })), u;
  }, [e.disableCSSOMInjection, e.sheet, e.target, o]), a = te(function() {
    return lo({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: n });
  }, [e.enableVendorPrefixes, e.namespace, n]);
  ne(function() {
    bi(n, e.stylisPlugins) || r(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var s = te(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: a };
  }, [e.shouldForwardProp, i, a]);
  return re.createElement(vn.Provider, { value: s }, re.createElement(va.Provider, { value: a }, e.children));
}
var tn = (function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Jt);
      var a = r.name + i.hash;
      o.hasNameForId(r.id, a) || o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, yn(this, function() {
      throw X(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Jt), this.name + t.hash;
  }, e;
})(), wa = function(e) {
  return e >= "A" && e <= "Z";
};
function nr(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    wa(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var uo = function(e) {
  return e == null || e === !1 || e === "";
}, fo = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !uo(i) && (Array.isArray(i) && i.isCss || ve(i) ? r.push("".concat(nr(o), ":"), i, ";") : Te(i) ? r.push.apply(r, ge(ge(["".concat(o, " {")], fo(i), !1), ["}"], !1)) : r.push("".concat(nr(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in Fi || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function me(e, t, n, r) {
  if (uo(e)) return [];
  if (gn(e)) return [".".concat(e.styledComponentId)];
  if (ve(e)) {
    if (!ve(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return $.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof tn || Te(o) || o === null || console.error("".concat(to(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), me(o, t, n, r);
  }
  var i;
  return e instanceof tn ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Te(e) ? fo(e) : Array.isArray(e) ? Array.prototype.concat.apply($t, e.map(function(a) {
    return me(a, t, n, r);
  })) : [e.toString()];
}
function ba(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (ve(n) && !gn(n)) return !1;
  }
  return !0;
}
var Sa = Jr(Et), Ea = (function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = $.NODE_ENV === "production" && (r === void 0 || r.isStatic) && ba(t), this.componentId = n, this.baseHash = fe(Sa, n), this.baseStyle = r, so.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = de(o, this.staticRulesId);
    else {
      var i = Kt(me(this.rules, t, n, r)), a = Xt(fe(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, a)) {
        var s = r(i, ".".concat(a), void 0, this.componentId);
        n.insertRules(this.componentId, a, s);
      }
      o = de(o, a), this.staticRulesId = a;
    }
    else {
      for (var u = fe(this.baseHash, r.hash), l = "", p = 0; p < this.rules.length; p++) {
        var c = this.rules[p];
        if (typeof c == "string") l += c, $.NODE_ENV !== "production" && (u = fe(u, c));
        else if (c) {
          var _ = Kt(me(c, t, n, r));
          u = fe(u, _ + p), l += _;
        }
      }
      if (l) {
        var f = Xt(u >>> 0);
        n.hasNameForId(this.componentId, f) || n.insertRules(this.componentId, f, r(l, ".".concat(f), void 0, this.componentId)), o = de(o, f);
      }
    }
    return o;
  }, e;
})(), Ve = re.createContext(void 0);
Ve.Consumer;
function po() {
  var e = Xe(Ve);
  if (!e) throw X(18);
  return e;
}
function $a(e) {
  var t = re.useContext(Ve), n = te(function() {
    return (function(r, o) {
      if (!r) throw X(14);
      if (ve(r)) {
        var i = r(o);
        if ($.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object")) throw X(7);
        return i;
      }
      if (Array.isArray(r) || typeof r != "object") throw X(8);
      return o ? P(P({}, o), r) : r;
    })(e.theme, t);
  }, [e.theme, t]);
  return e.children ? re.createElement(Ve.Provider, { value: n }, e.children) : null;
}
var Dt = {}, rr = /* @__PURE__ */ new Set();
function ka(e, t, n) {
  var r = gn(e), o = e, i = !Mt(e), a = t.attrs, s = a === void 0 ? $t : a, u = t.componentId, l = u === void 0 ? (function(k, x) {
    var w = typeof k != "string" ? "sc" : qn(k);
    Dt[w] = (Dt[w] || 0) + 1;
    var y = "".concat(w, "-").concat(eo(Et + w + Dt[w]));
    return x ? "".concat(x, "-").concat(y) : y;
  })(t.displayName, t.parentComponentId) : u, p = t.displayName, c = p === void 0 ? (function(k) {
    return Mt(k) ? "styled.".concat(k) : "Styled(".concat(to(k), ")");
  })(e) : p, _ = t.displayName && t.componentId ? "".concat(qn(t.displayName), "-").concat(t.componentId) : t.componentId || l, f = r && o.attrs ? o.attrs.concat(s).filter(Boolean) : s, h = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var b = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var S = t.shouldForwardProp;
      h = function(k, x) {
        return b(k, x) && S(k, x);
      };
    } else h = b;
  }
  var m = new Ea(n, _, r ? o.componentStyle : void 0);
  function g(k, x) {
    return (function(w, y, D) {
      var U = w.attrs, Ae = w.componentStyle, F = w.defaultProps, oe = w.foldedComponentIds, wn = w.styledComponentId, Co = w.target, wo = re.useContext(Ve), bo = en(), Nt = w.shouldForwardProp || bo.shouldForwardProp;
      $.NODE_ENV !== "production" && ht(wn);
      var bn = Wi(y, wo, F) || xe, K = (function(Ke, Me, Qe) {
        for (var we, le = P(P({}, Me), { className: void 0, theme: Qe }), Ot = 0; Ot < Ke.length; Ot += 1) {
          var Je = ve(we = Ke[Ot]) ? we(le) : we;
          for (var ie in Je) le[ie] = ie === "className" ? de(le[ie], Je[ie]) : ie === "style" ? P(P({}, le[ie]), Je[ie]) : Je[ie];
        }
        return Me.className && (le.className = de(le.className, Me.className)), le;
      })(U, y, bn), Pe = K.as || Co, Le = {};
      for (var z in K) K[z] === void 0 || z[0] === "$" || z === "as" || z === "theme" && K.theme === bn || (z === "forwardedAs" ? Le.as = K.forwardedAs : Nt && !Nt(z, Pe) || (Le[z] = K[z], Nt || $.NODE_ENV !== "development" || Fo(z) || rr.has(z) || !qt.has(Pe) || (rr.add(z), console.warn('styled-components: it looks like an unknown prop "'.concat(z, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var xt = (function(Ke, Me) {
        var Qe = en(), we = Ke.generateAndInjectStyles(Me, Qe.styleSheet, Qe.stylis);
        return $.NODE_ENV !== "production" && ht(we), we;
      })(Ae, K);
      $.NODE_ENV !== "production" && w.warnTooManyClasses && w.warnTooManyClasses(xt);
      var Tt = de(oe, wn);
      return xt && (Tt += " " + xt), K.className && (Tt += " " + K.className), Le[Mt(Pe) && !qt.has(Pe) ? "class" : "className"] = Tt, D && (Le.ref = D), L(Pe, Le);
    })(E, k, x);
  }
  g.displayName = c;
  var E = re.forwardRef(g);
  return E.attrs = f, E.componentStyle = m, E.displayName = c, E.shouldForwardProp = h, E.foldedComponentIds = r ? de(o.foldedComponentIds, o.styledComponentId) : "", E.styledComponentId = _, E.target = r ? o.target : e, Object.defineProperty(E, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(k) {
    this._foldedDefaultProps = r ? (function(x) {
      for (var w = [], y = 1; y < arguments.length; y++) w[y - 1] = arguments[y];
      for (var D = 0, U = w; D < U.length; D++) Qt(x, U[D], !0);
      return x;
    })({}, o.defaultProps, k) : k;
  } }), $.NODE_ENV !== "production" && (ji(c, _), E.warnTooManyClasses = /* @__PURE__ */ (function(k, x) {
    var w = {}, y = !1;
    return function(D) {
      if (!y && (w[D] = !0, Object.keys(w).length >= 200)) {
        var U = x ? ' with the id of "'.concat(x, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(k).concat(U, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), y = !0, w = {};
      }
    };
  })(c, _)), yn(E, function() {
    return ".".concat(E.styledComponentId);
  }), i && io(E, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), E;
}
function or(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var ir = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Cn(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (ve(e) || Te(e)) return ir(me(or($t, ge([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? me(r) : ir(me(or(r, t)));
}
function nn(e, t, n) {
  if (n === void 0 && (n = xe), !t) throw X(1, t);
  var r = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
    return e(t, n, Cn.apply(void 0, ge([o], i, !1)));
  };
  return r.attrs = function(o) {
    return nn(e, t, P(P({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return nn(e, t, P(P({}, n), o));
  }, r;
}
var _o = function(e) {
  return nn(ka, e);
}, B = _o;
qt.forEach(function(e) {
  B[e] = _o(e);
});
function kt(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  $.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = Kt(Cn.apply(void 0, ge([e], t, !1))), o = eo(r);
  return new tn(o, r);
}
$.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var ot = "__sc-".concat(ye, "__");
$.NODE_ENV !== "production" && $.NODE_ENV !== "test" && typeof window < "u" && (window[ot] || (window[ot] = 0), window[ot] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[ot] += 1);
const rn = {
  LEFT: "left",
  RIGHT: "right"
}, ar = 0.24, Na = 24, xa = 2, ho = 14, Ta = 0.0276;
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
}, Ht = {
  loading: { text: "Loading. Please wait.", visible: !0 },
  waiting: { text: "Waiting for input...", visible: !0 }
}, Oa = "rgba(19, 19, 19, 0.5)", Ia = 34, Ra = {
  [j.CANDIDATE_SELECTION]: "Hold still…",
  [j.PALM_CENTERING]: "Center your palm",
  [j.PALM_NOT_PRESENT]: "Position your palm",
  [j.PALM_TOO_FAR]: "Move closer",
  [j.SHARPNESS_TOO_LOW]: "More light needed",
  [j.BRIGHTNESS_TOO_LOW]: "More light needed",
  [j.BRIGHTNESS_TOO_HIGH]: "Less light needed",
  [j.DEVICE_PITCHED]: "Hold your phone at eye level",
  [j.PALM_TOO_CLOSE]: "Move back",
  [j.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW]: "More light needed"
}, Aa = rn.LEFT;
function sr(e, t) {
  return Math.max(t, t + (e - 400) * Ta + 2);
}
const Pa = (e, t = ho) => e ? e.width < e.height ? sr(e.width, t) : sr(e.height, t) : t, La = (e) => e > J.Default ? Ue[J.Default] : e > J.L ? Ue[J.L] : e > J.M ? Ue[J.M] : Ue[J.S], Ma = (e) => e ? La(e.width) : Ue[J.Default];
function Da() {
  const e = "https://fonts.googleapis.com/css?family=Montserrat:600";
  if (!document.querySelector(`link[href="${e}"]`)) {
    const n = document.createElement("link");
    n.href = e, n.rel = "stylesheet", document.head.appendChild(n);
  }
}
const We = Er(void 0);
We.displayName = "ConfigurationContext";
function Ce() {
  const e = Xe(We);
  if (!e)
    throw new Error(
      `${We.displayName} must be used within a ${We.displayName} Provider`
    );
  return e;
}
function Ha({
  children: e,
  configuration: t,
  videoElementSize: n
}) {
  const { font: r } = po(), o = te(
    () => ({ ...t, videoElementSize: n, fontSize: Pa(n, r.minimumSize) }),
    [t, r.minimumSize, n]
  );
  return /* @__PURE__ */ d(We.Provider, { value: o, children: e });
}
const mo = ({ svgSize: e }) => /* @__PURE__ */ d("svg", { fill: "none", height: e, viewBox: "0 0 16 14", width: e, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ d(
  "path",
  {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), Ba = B.div`
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
`, Ua = B.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, Fa = B.p`
  background: ${(e) => e.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(e) => `${e.$fontSize}px`};
  line-height: 1em;
  max-width: 80%;
`, dt = ({ Icon: e, isCameraReady: t, position: n = "absolute", text: r }) => {
  const { fontSize: o } = Ce();
  return /* @__PURE__ */ d(Ba, { $isCameraReady: t, $position: n, children: /* @__PURE__ */ d(Ua, { children: [
    e ? /* @__PURE__ */ d(e, { svgSize: o * 2 }) : null,
    /* @__PURE__ */ d(Fa, { $fontSize: o, children: r })
  ] }) });
}, go = ({ text: e = "An unknown error has occurred" }) => /* @__PURE__ */ d(dt, { Icon: mo, position: "relative", text: e });
class za extends V {
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
    return this.state.hasError ? /* @__PURE__ */ d(go, { Icon: mo, isCameraReady: !1 }) : this.props.children;
  }
}
const ja = B.div`
  font-family: ${(e) => e.theme.font.family};
  font-style: ${(e) => e.theme.font.style};
  font-weight: ${(e) => e.theme.font.weight};
`;
function Wa({
  children: e,
  uiConfiguration: t,
  videoElementSize: n
}) {
  return ne(() => {
    Da();
  }, []), /* @__PURE__ */ d(Ca, { target: t.styleTarget, children: /* @__PURE__ */ d($a, { theme: t.styling.theme, children: /* @__PURE__ */ d(ja, { children: /* @__PURE__ */ d(za, { videoElementSize: n, children: /* @__PURE__ */ d(Ha, { configuration: t, videoElementSize: n, children: e }) }) }) }) });
}
const Ga = 0.85, Va = "dot-auto-capture-video";
function Se(e, t) {
  const n = qe(t);
  ne(() => {
    n.current = t;
  }, [t]), ne(
    () => {
      if (!e)
        return;
      const r = (o) => n.current(o);
      return document.addEventListener(e, r), () => {
        document.removeEventListener(e, r);
      };
    },
    [e]
    // Re-run if eventName
  );
}
function Za(e) {
  const [t, n] = W(), r = _e(
    (o) => {
      n(o.detail?.size);
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
}, De = {
  colors: qa,
  font: Xa
}, Ka = (e) => e ? {
  ...De,
  ...e,
  colors: {
    ...De.colors,
    ...e.colors
  },
  font: {
    ...De.font,
    ...e.font,
    family: Ya(e.font?.family, De.font.family)
  }
} : De, yo = (e, t) => Math.min(e, t), Qa = ({ height: e, width: t }, n) => {
  const r = yo(t, e) * n, o = (t - r) / 2, i = (e - r) / 2;
  return {
    shiftX: o,
    shiftY: i,
    width: r,
    height: r
  };
}, Ja = (e, t) => {
  const { height: n, shiftX: r, shiftY: o, width: i } = Qa(e, t);
  return {
    shiftX: r / e.width,
    shiftY: o / e.height,
    width: i / e.width,
    height: n / e.height
  };
}, es = (e) => Ja(e, Ga), ts = (e, t) => {
  document.dispatchEvent(
    new CustomEvent(e, {
      detail: t
    })
  );
}, cr = (e, t) => {
  ts(e, {
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
  const [e, t] = W(!1);
  return ne(() => {
    (async () => (await rs()).length > 1 && t(!0))();
  }, []), e;
}, is = ({ size: e }) => /* @__PURE__ */ d("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ d(
    "path",
    {
      d: "M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z",
      fill: "#131313",
      fillOpacity: "0.3"
    }
  ),
  /* @__PURE__ */ d("circle", { cx: "17.5", cy: "24.5", fill: "white", r: "1.5" }),
  /* @__PURE__ */ d(
    "path",
    {
      d: "M15 17H16C19.5 17 23 21 23 29C22.5 29 21.5 29 20 29C20 29 20.25 33 19.5 34.5C18.75 36 16 36 16 36H15",
      stroke: "white",
      strokeWidth: "2"
    }
  ),
  /* @__PURE__ */ d("circle", { fill: "white", r: "1.5", transform: "matrix(-1 0 0 1 34.5 24.5)" }),
  /* @__PURE__ */ d(
    "path",
    {
      d: "M37 17H36C32.5 17 29 21 29 29C29.5 29 30.5 29 32 29C32 29 31.75 33 32.5 34.5C33.25 36 36 36 36 36H37",
      stroke: "white",
      strokeWidth: "2"
    }
  )
] }), as = ({ size: e }) => /* @__PURE__ */ d("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: "52", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ d("circle", { cx: "26", cy: "26", fill: "#131313", fillOpacity: "0.3", r: "26" }),
  /* @__PURE__ */ d(
    "path",
    {
      d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
      fill: "white"
    }
  )
] }), vo = B.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(e) => e.$marginLeft ? `${e.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, ss = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ d(vo, { $marginLeft: e, ...n, children: /* @__PURE__ */ d(is, { size: t }) }), cs = ({ marginLeft: e, size: t, ...n }) => /* @__PURE__ */ d(vo, { $marginLeft: e, ...n, children: /* @__PURE__ */ d(as, { size: t }) }), ls = B.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.$padding}px`};
  z-index: 2;
`, us = ({
  customControlEvent: e,
  isSwitchCameraDisabled: t
}) => {
  const {
    control: { showCameraButtons: n },
    videoElementSize: r
  } = Ce(), o = os();
  if (!n)
    return null;
  const { buttonPadding: i, iconSize: a, marginLeft: s } = Ma(r);
  return /* @__PURE__ */ d(ls, { $padding: i, children: [
    o && /* @__PURE__ */ d(cs, { disabled: t, onClick: () => {
      cr(e, Nn.SWITCH_CAMERA);
    }, size: a }),
    /* @__PURE__ */ d(
      ss,
      {
        marginLeft: o ? s : 0,
        onClick: () => {
          cr(e, Nn.TOGGLE_MIRROR);
        },
        size: a
      }
    )
  ] });
}, fs = "2.5s", ds = "0.3s", ps = "linear", _s = kt`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
kt`
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`;
kt`
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
kt`
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
const hs = B.div`
  position: absolute;
  left: 50%;

  ${(e) => e.$cssTop ? `top: ${e.$cssTop}%;` : ""}
  ${(e) => e.$cssBottom ? `bottom: ${e.$cssBottom}%;` : ""}
    ${(e) => e.$isAnimating && Cn`
      animation: ${_s} ${ds}
        ${ps} both;
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
`, ms = B.div`
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
  return /* @__PURE__ */ d(hs, { $cssBottom: t, $cssTop: n, $isAnimating: r, $isPortrait: i, children: /* @__PURE__ */ d(
    ms,
    {
      $fontSize: a,
      $isInCandidateSelection: o,
      $wrap: e.length > Ia,
      children: e
    }
  ) });
}, ys = B.canvas`
  transform: ${(e) => e.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
function vs(e) {
  const t = e.getContext("2d");
  t && t.clearRect(0, 0, t.canvas.width, t.canvas.height);
}
const Fe = (e, t) => Math.hypot(t.x - e.x, t.y - e.y), lr = (e, t, n) => {
  const r = (t.x - e.x) * n, o = (t.y - e.y) * n;
  return {
    x: e.x + r,
    y: e.y + o
  };
}, ur = (e, t, n, r) => {
  const o = Fe(e, t);
  return n * r / o;
}, Cs = (e) => {
  const { bottomLeft: t, bottomRight: n, topLeft: r, topRight: o } = e, i = Fe(r, o), a = Fe(o, n), s = Fe(t, n), u = Fe(r, t);
  return Math.min(i, a, s, u);
};
function ws({ cameraResolution: e, isImageMirror: t }) {
  const n = qe(null), r = po(), [o, i] = W(), a = _e(
    (s) => {
      i(s?.detail?.detectedObject);
    },
    [i]
  );
  return Se(xr.DETECTION_CHANGED, a), Se(pe.DETECTION_CHANGED, a), ne(() => {
    if (!n.current)
      return;
    const s = (l, p, c, _) => {
      const f = ur(
        p,
        l,
        _,
        ar
      ), h = ur(
        p,
        c,
        _,
        ar
      ), b = lr(p, l, f), S = lr(p, c, h), m = n?.current?.getContext("2d");
      m && (m.beginPath(), m.lineWidth = xa, m.strokeStyle = r.colors.placeholderColor, m.moveTo(b.x, b.y), m.arcTo(p.x, p.y, S.x, S.y, Na), m.lineTo(S.x, S.y), m.stroke());
    }, u = (l) => {
      if (!l)
        return;
      const { bottomLeft: p, bottomRight: c, topLeft: _, topRight: f } = l, h = Cs(l);
      s(p, _, f, h), s(_, f, c, h), s(f, c, p, h), s(c, p, _, h);
    };
    n.current.width = e.width, n.current.height = e.height, vs(n.current), u(o);
  }, [e, o, r.colors.placeholderColor]), /* @__PURE__ */ d(ys, { ref: n, $isImageMirror: t });
}
const bs = B.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, fr = ({ svgSize: e }) => /* @__PURE__ */ d(bs, { children: /* @__PURE__ */ d("svg", { fill: "none", height: e, viewBox: "0 0 48 48", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ d(
    "path",
    {
      d: "M30.9229 9.75026C30.9229 12.3736 28.7533 14.5002 26.0767 14.5002C23.4003 14.5002 21.2307 12.3736 21.2307 9.75026C21.2307 7.12664 23.4003 5 26.0767 5C28.7533 5 30.9229 7.12664 30.9229 9.75026Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ d(
    "path",
    {
      d: "M40.6155 15.8556C40.6155 18.1044 38.7559 19.9273 36.4618 19.9273C34.1675 19.9273 32.3079 18.1044 32.3079 15.8556C32.3079 13.607 34.1675 11.7842 36.4618 11.7842C38.7559 11.7842 40.6155 13.607 40.6155 15.8556Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ d(
    "path",
    {
      d: "M42 27.3921C42 29.2659 40.4502 30.785 38.5386 30.785C36.6267 30.785 35.0769 29.2659 35.0769 27.3921C35.0769 25.5181 36.6267 23.999 38.5386 23.999C40.4502 23.999 42 25.5181 42 27.3921Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ d(
    "path",
    {
      d: "M35.0766 37.5712C35.0766 39.0704 33.837 40.2858 32.3075 40.2858C30.7779 40.2858 29.5383 39.0704 29.5383 37.5712C29.5383 36.0723 30.7779 34.8569 32.3075 34.8569C33.837 34.8569 35.0766 36.0723 35.0766 37.5712Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ d(
    "path",
    {
      d: "M22.6154 40.2858C22.6154 41.7848 21.3756 43.0001 19.846 43.0001C18.3168 43.0001 17.0769 41.7848 17.0769 40.2858C17.0769 38.7866 18.3168 37.5713 19.846 37.5713C21.3756 37.5713 22.6154 38.7866 22.6154 40.2858Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ d(
    "path",
    {
      d: "M11.5382 32.8216C11.5382 33.9457 10.6085 34.8573 9.46137 34.8573C8.31426 34.8573 7.38452 33.9457 7.38452 32.8216C7.38452 31.6972 8.31426 30.7856 9.46137 30.7856C10.6085 30.7856 11.5382 31.6972 11.5382 32.8216Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ d(
    "path",
    {
      d: "M8.76913 21.2849C8.76913 22.0345 8.14932 22.642 7.38456 22.642C6.6198 22.642 6 22.0345 6 21.2849C6 20.5353 6.61981 19.9277 7.38456 19.9277C8.14933 19.9277 8.76913 20.5353 8.76913 21.2849Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ d(
    "path",
    {
      d: "M15.6927 11.7844C15.6927 12.534 15.0729 13.1415 14.3081 13.1415C13.5434 13.1415 12.9236 12.534 12.9236 11.7844C12.9236 11.0348 13.5434 10.4272 14.3081 10.4272C15.0729 10.4272 15.6927 11.0348 15.6927 11.7844Z",
      fill: "currentColor"
    }
  )
] }) }), Ss = B.div`
  z-index: 1;
  position: absolute;
  // Scale up the backdrop to have space when placeholder is scaled below 1
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  outline: ${({ $backdropColor: e, $shorterSide: t = 1e3 }) => `${t * 0.2}px solid ${e}`};
  transform: scale(${(e) => e.$scale || 1});
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  // Scale the children to 50% of the size of the backdrop to achieve 1:1 ratio between placeholder and backdrop
  g {
    transform: scale(0.5);
    translate: 25% 25%;
  }
`, Es = ({ children: e, height: t, scale: n, width: r }) => {
  const {
    styling: { backdropColor: o }
  } = Ce(), i = yo(r, t);
  return /* @__PURE__ */ d(Ss, { $backdropColor: o, $scale: n, $shorterSide: i, children: /* @__PURE__ */ d("svg", { viewBox: `0 0 ${r} ${t}`, children: [
    /* @__PURE__ */ d("defs", { children: /* @__PURE__ */ d("mask", { id: "mask", children: [
      /* @__PURE__ */ d("rect", { fill: "#fff", height: "100%", width: "100%" }),
      /* @__PURE__ */ d("g", { children: e })
    ] }) }),
    /* @__PURE__ */ d("rect", { fill: o, height: "100%", mask: "url(#mask)", width: "100%" })
  ] }) });
};
function $s({ cameraHeight: e, cameraWidth: t, isBackdrop: n, state: r }) {
  const { appStateInstructions: o } = Ce(), i = r === M.ERROR || r === M.RUNNING;
  return !r || i || !o?.[r]?.visible ? null : r === M.WAITING || r === M.COMPLETE ? /* @__PURE__ */ d(H, { children: [
    n && e && t && /* @__PURE__ */ d(Es, { height: e, width: t }),
    /* @__PURE__ */ d(dt, { isCameraReady: !0, text: o[M.WAITING].text })
  ] }) : r === M.BLURRED ? /* @__PURE__ */ d(H, { children: /* @__PURE__ */ d(dt, { Icon: fr, isCameraReady: !0, text: o[M.BLURRED].text }) }) : /* @__PURE__ */ d(dt, { Icon: fr, isCameraReady: !0, text: o[M.LOADING].text });
}
function ks() {
  return /* @__PURE__ */ d(
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
        /* @__PURE__ */ d("path", { className: "cls-1", d: "M179.22,114.86c-5.07-.21-41.51-1.07-66.97,27.84-17.94,20.37-19.97,43.63-20.32,51.17" }),
        /* @__PURE__ */ d("path", { className: "cls-1", d: "M128.06,110.56c-11.36,2.45-25.72,4.46-42.32,4.23-11.24-.16-21.3-1.31-29.91-2.82" }),
        /* @__PURE__ */ d("line", { className: "cls-1", x1: "203.51", x2: "203.51", y1: "136.03", y2: "10.21" }),
        /* @__PURE__ */ d("line", { className: "cls-1", x1: "154.7", x2: "154.7", y1: "60.97", y2: "10.21" }),
        /* @__PURE__ */ d("line", { className: "cls-1", x1: "106.01", x2: "106.01", y1: "60.97", y2: "10.21" }),
        /* @__PURE__ */ d("line", { className: "cls-1", x1: "58.08", x2: "58.08", y1: "60.97", y2: "10.21" }),
        /* @__PURE__ */ d(
          "path",
          {
            className: "cls-1",
            d: "M286.73,114.94c3.95-3.75,6.41-9.05,6.41-14.92,0-11.36-9.21-20.56-20.56-20.56-2.84,0-5.54.58-8,1.62"
          }
        ),
        /* @__PURE__ */ d("polyline", { className: "cls-1", points: "203.51 113.13 261.92 82.44 264.57 81.08" }),
        /* @__PURE__ */ d(
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
function Ns() {
  return /* @__PURE__ */ d(
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
        /* @__PURE__ */ d("path", { className: "cls-1", d: "M120.78,114.86c5.07-.21,41.51-1.07,66.97,27.84,17.94,20.37,19.97,43.63,20.32,51.17" }),
        /* @__PURE__ */ d("path", { className: "cls-1", d: "M171.94,110.56c11.36,2.45,25.72,4.46,42.32,4.23,11.24-.16,21.3-1.31,29.91-2.82" }),
        /* @__PURE__ */ d("line", { className: "cls-1", x1: "96.49", x2: "96.49", y1: "136.03", y2: "10.21" }),
        /* @__PURE__ */ d("line", { className: "cls-1", x1: "145.3", x2: "145.3", y1: "60.97", y2: "10.21" }),
        /* @__PURE__ */ d("line", { className: "cls-1", x1: "193.99", x2: "193.99", y1: "60.97", y2: "10.21" }),
        /* @__PURE__ */ d("line", { className: "cls-1", x1: "241.92", x2: "241.92", y1: "60.97", y2: "10.21" }),
        /* @__PURE__ */ d(
          "path",
          {
            className: "cls-1",
            d: "M13.27,114.94c-3.95-3.75-6.41-9.05-6.41-14.92,0-11.36,9.21-20.56,20.56-20.56,2.84,0,5.54.58,8,1.62"
          }
        ),
        /* @__PURE__ */ d("polyline", { className: "cls-1", points: "96.49 113.13 38.08 82.44 35.43 81.08" }),
        /* @__PURE__ */ d(
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
const xs = B.div`
  z-index: 1;
  position: absolute;
  top: ${(e) => e.$placeholderRectangle.shiftY * 100}%;
  bottom: ${(e) => (1 - e.$placeholderRectangle.shiftY - e.$placeholderRectangle.height) * 100}%;
  left: ${(e) => e.$placeholderRectangle.shiftX * 100}%;
  right: ${(e) => (1 - e.$placeholderRectangle.shiftX - e.$placeholderRectangle.width) * 100}%;
  color: ${(e) => e.$isInCandidateSelection ? `${e.theme.colors.placeholderColorSuccess}` : `${e.theme.colors.placeholderColor}`};
  transform: scale(${(e) => e.$scale || 1});
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  svg {
    width: 100%;
    height: 100%;
  }
`, Ts = ({
  children: e,
  className: t,
  isInCandidateSelection: n,
  onAnimationEnd: r,
  placeholderRectangle: o,
  scale: i
}) => /* @__PURE__ */ d(
  xs,
  {
    $isInCandidateSelection: n,
    $placeholderRectangle: o,
    $scale: i,
    className: t,
    onAnimationEnd: r,
    children: e
  }
), Os = {
  [rn.LEFT]: /* @__PURE__ */ d(ks, {}),
  [rn.RIGHT]: /* @__PURE__ */ d(Ns, {})
};
function Is({ placeholderRectangle: e, ...t }) {
  const { placeholder: n } = Ce();
  return /* @__PURE__ */ d(Ts, { placeholderRectangle: e, ...t, children: Os[n] });
}
function Rs() {
  const [e, t] = W(), [n, r] = W(!1), o = _e(
    (f) => {
      t(f?.detail?.cameraResolution);
      const h = f?.detail?.isMirroring;
      h !== void 0 && r(h);
    },
    [t]
  );
  Se(pe.CAMERA_PROPS_CHANGED, o);
  const [i, a] = W({
    code: j.PALM_NOT_PRESENT,
    // FIXME Default instruction should not be here
    isEscalated: !1
  }), s = _e(
    (f) => {
      a({
        code: f?.detail?.instructionCode,
        isEscalated: f?.detail?.isEscalated ?? !1
      });
    },
    [a]
  );
  Se(pe.INSTRUCTION_CHANGED, s);
  const [u, l] = W(M.LOADING), [p, c] = W(), _ = _e(
    (f) => {
      l(f.detail?.appState);
      const h = f?.detail?.error;
      h && c(h);
    },
    [l, c]
  );
  return Se(pe.STATE_CHANGED, _), {
    cameraResolution: e,
    instruction: i,
    isMirroring: n,
    appState: u,
    error: p
  };
}
function As() {
  const { appState: e, cameraResolution: t, error: n, instruction: r, isMirroring: o } = Rs(), i = r.code === j.CANDIDATE_SELECTION, {
    control: { showDetectionLayer: a },
    instructions: s
  } = Ce();
  return e === M.ERROR ? /* @__PURE__ */ d(go, { text: n?.message }) : e === M.RUNNING && t ? /* @__PURE__ */ d(H, { children: [
    a && /* @__PURE__ */ d(ws, { cameraResolution: t, isImageMirror: o }),
    /* @__PURE__ */ d(
      Is,
      {
        isInCandidateSelection: i,
        placeholderRectangle: es(t)
      }
    ),
    r.code && /* @__PURE__ */ d(gs, { cssTop: 50, isInCandidateSelection: i, children: s[r.code] }),
    /* @__PURE__ */ d(us, { customControlEvent: pe.CONTROL, isSwitchCameraDisabled: i })
  ] }) : /* @__PURE__ */ d($s, { cameraHeight: t?.height, cameraWidth: t?.width, state: e });
}
function Ps(e) {
  const t = { ...Ra, ...e?.instructions }, n = {
    [M.LOADING]: {
      ...Ht.loading,
      ...e?.appStateInstructions?.loading
    },
    [M.WAITING]: {
      ...Ht.waiting,
      ...e?.appStateInstructions?.waiting
    },
    // TODO: on Major release version, use specific app state instructions for blurred state
    [M.BLURRED]: {
      ...Ht.loading,
      ...e?.appStateInstructions?.loading
    }
  }, r = Ka(e?.styling?.theme), o = {
    ...e?.styling,
    backdropColor: e?.styling?.backdropColor ?? Oa,
    theme: r
  }, i = {
    showDetectionLayer: e?.control?.showDetectionLayer ?? !1,
    showCameraButtons: e?.control?.showCameraButtons ?? !1
  }, a = e?.placeholder ?? Aa;
  return {
    ...e,
    instructions: t,
    appStateInstructions: n,
    placeholder: a,
    styling: o,
    control: i
  };
}
function Ls({ configuration: e }) {
  const t = Za(pe.VIDEO_ELEMENT_SIZE);
  return /* @__PURE__ */ d(Wa, { uiConfiguration: Ps(e), videoElementSize: t, children: /* @__PURE__ */ d(As, {}) });
}
Io(Ls, "x-dot-palm-capture-ui", ["configuration"]);
