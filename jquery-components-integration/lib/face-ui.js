var qe, v, cn, ue, Cr, ln, un, fn, er, Lt, Mt, dn, je = {}, hn = [], mo = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ye = Array.isArray;
function Z(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function tr(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function L(e, t, r) {
  var n, o, i, a = {};
  for (i in t) i == "key" ? n = t[i] : i == "ref" ? o = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? qe.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) a[i] == null && (a[i] = e.defaultProps[i]);
  return Be(e, a, n, o, null);
}
function Be(e, t, r, n, o) {
  var i = { type: e, props: t, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++cn, __i: -1, __u: 0 };
  return o == null && v.vnode != null && v.vnode(i), i;
}
function go() {
  return { current: null };
}
function z(e) {
  return e.children;
}
function V(e, t) {
  this.props = e, this.context = t;
}
function Ee(e, t) {
  if (t == null) return e.__ ? Ee(e.__, e.__i + 1) : null;
  for (var r; t < e.__k.length; t++) if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
  return typeof e.type == "function" ? Ee(e) : null;
}
function _n(e) {
  var t, r;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((r = e.__k[t]) != null && r.__e != null) {
      e.__e = e.__c.base = r.__e;
      break;
    }
    return _n(e);
  }
}
function Ht(e) {
  (!e.__d && (e.__d = !0) && ue.push(e) && !dt.__r++ || Cr != v.debounceRendering) && ((Cr = v.debounceRendering) || ln)(dt);
}
function dt() {
  for (var e, t, r, n, o, i, a, c = 1; ue.length; ) ue.length > c && ue.sort(un), e = ue.shift(), c = ue.length, e.__d && (r = void 0, o = (n = (t = e).__v).__e, i = [], a = [], t.__P && ((r = Z({}, n)).__v = n.__v + 1, v.vnode && v.vnode(r), rr(t.__P, r, n, t.__n, t.__P.namespaceURI, 32 & n.__u ? [o] : null, i, o ?? Ee(n), !!(32 & n.__u), a), r.__v = n.__v, r.__.__k[r.__i] = r, gn(i, r, a), r.__e != o && _n(r)));
  dt.__r = 0;
}
function pn(e, t, r, n, o, i, a, c, s, u, f) {
  var l, h, _, g, S, $, m = n && n.__k || hn, p = t.length;
  for (s = yo(r, t, m, s, p), l = 0; l < p; l++) (_ = r.__k[l]) != null && (h = _.__i == -1 ? je : m[_.__i] || je, _.__i = l, $ = rr(e, _, h, o, i, a, c, s, u, f), g = _.__e, _.ref && h.ref != _.ref && (h.ref && nr(h.ref, null, _), f.push(_.ref, _.__c || g, _)), S == null && g != null && (S = g), 4 & _.__u || h.__k === _.__k ? s = mn(_, s, e) : typeof _.type == "function" && $ !== void 0 ? s = $ : g && (s = g.nextSibling), _.__u &= -7);
  return r.__e = S, s;
}
function yo(e, t, r, n, o) {
  var i, a, c, s, u, f = r.length, l = f, h = 0;
  for (e.__k = new Array(o), i = 0; i < o; i++) (a = t[i]) != null && typeof a != "boolean" && typeof a != "function" ? (s = i + h, (a = e.__k[i] = typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? Be(null, a, null, null, null) : Ye(a) ? Be(z, { children: a }, null, null, null) : a.constructor == null && a.__b > 0 ? Be(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a).__ = e, a.__b = e.__b + 1, c = null, (u = a.__i = vo(a, r, s, l)) != -1 && (l--, (c = r[u]) && (c.__u |= 2)), c == null || c.__v == null ? (u == -1 && (o > f ? h-- : o < f && h++), typeof a.type != "function" && (a.__u |= 4)) : u != s && (u == s - 1 ? h-- : u == s + 1 ? h++ : (u > s ? h-- : h++, a.__u |= 4))) : e.__k[i] = null;
  if (l) for (i = 0; i < f; i++) (c = r[i]) != null && (2 & c.__u) == 0 && (c.__e == n && (n = Ee(c)), vn(c, c));
  return n;
}
function mn(e, t, r) {
  var n, o;
  if (typeof e.type == "function") {
    for (n = e.__k, o = 0; n && o < n.length; o++) n[o] && (n[o].__ = e, t = mn(n[o], t, r));
    return t;
  }
  e.__e != t && (t && e.type && !r.contains(t) && (t = Ee(e)), r.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function ee(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Ye(e) ? e.some(function(r) {
    ee(r, t);
  }) : t.push(e)), t;
}
function vo(e, t, r, n) {
  var o, i, a = e.key, c = e.type, s = t[r];
  if (s === null && e.key == null || s && a == s.key && c == s.type && (2 & s.__u) == 0) return r;
  if (n > (s != null && (2 & s.__u) == 0 ? 1 : 0)) for (o = r - 1, i = r + 1; o >= 0 || i < t.length; ) {
    if (o >= 0) {
      if ((s = t[o]) && (2 & s.__u) == 0 && a == s.key && c == s.type) return o;
      o--;
    }
    if (i < t.length) {
      if ((s = t[i]) && (2 & s.__u) == 0 && a == s.key && c == s.type) return i;
      i++;
    }
  }
  return -1;
}
function wr(e, t, r) {
  t[0] == "-" ? e.setProperty(t, r ?? "") : e[t] = r == null ? "" : typeof r != "number" || mo.test(t) ? r : r + "px";
}
function et(e, t, r, n, o) {
  var i;
  e: if (t == "style") if (typeof r == "string") e.style.cssText = r;
  else {
    if (typeof n == "string" && (e.style.cssText = n = ""), n) for (t in n) r && t in r || wr(e.style, t, "");
    if (r) for (t in r) n && r[t] == n[t] || wr(e.style, t, r[t]);
  }
  else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace(fn, "$1")), t = t.toLowerCase() in e || t == "onFocusOut" || t == "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = r, r ? n ? r.u = n.u : (r.u = er, e.addEventListener(t, i ? Mt : Lt, i)) : e.removeEventListener(t, i ? Mt : Lt, i);
  else {
    if (o == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = r ?? "";
      break e;
    } catch {
    }
    typeof r == "function" || (r == null || r === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && r == 1 ? "" : r));
  }
}
function Sr(e) {
  return function(t) {
    if (this.l) {
      var r = this.l[t.type + e];
      if (t.t == null) t.t = er++;
      else if (t.t < r.u) return;
      return r(v.event ? v.event(t) : t);
    }
  };
}
function rr(e, t, r, n, o, i, a, c, s, u) {
  var f, l, h, _, g, S, $, m, p, k, b, N, w, y, M, F, Pe, U = t.type;
  if (t.constructor != null) return null;
  128 & r.__u && (s = !!(32 & r.__u), i = [c = t.__e = r.__e]), (f = v.__b) && f(t);
  e: if (typeof U == "function") try {
    if (m = t.props, p = "prototype" in U && U.prototype.render, k = (f = U.contextType) && n[f.__c], b = f ? k ? k.props.value : f.__ : n, r.__c ? $ = (l = t.__c = r.__c).__ = l.__E : (p ? t.__c = l = new U(m, b) : (t.__c = l = new V(m, b), l.constructor = U, l.render = wo), k && k.sub(l), l.props = m, l.state || (l.state = {}), l.context = b, l.__n = n, h = l.__d = !0, l.__h = [], l._sb = []), p && l.__s == null && (l.__s = l.state), p && U.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = Z({}, l.__s)), Z(l.__s, U.getDerivedStateFromProps(m, l.__s))), _ = l.props, g = l.state, l.__v = t, h) p && U.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), p && l.componentDidMount != null && l.__h.push(l.componentDidMount);
    else {
      if (p && U.getDerivedStateFromProps == null && m !== _ && l.componentWillReceiveProps != null && l.componentWillReceiveProps(m, b), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(m, l.__s, b) === !1 || t.__v == r.__v) {
        for (t.__v != r.__v && (l.props = m, l.state = l.__s, l.__d = !1), t.__e = r.__e, t.__k = r.__k, t.__k.some(function(ce) {
          ce && (ce.__ = t);
        }), N = 0; N < l._sb.length; N++) l.__h.push(l._sb[N]);
        l._sb = [], l.__h.length && a.push(l);
        break e;
      }
      l.componentWillUpdate != null && l.componentWillUpdate(m, l.__s, b), p && l.componentDidUpdate != null && l.__h.push(function() {
        l.componentDidUpdate(_, g, S);
      });
    }
    if (l.context = b, l.props = m, l.__P = e, l.__e = !1, w = v.__r, y = 0, p) {
      for (l.state = l.__s, l.__d = !1, w && w(t), f = l.render(l.props, l.state, l.context), M = 0; M < l._sb.length; M++) l.__h.push(l._sb[M]);
      l._sb = [];
    } else do
      l.__d = !1, w && w(t), f = l.render(l.props, l.state, l.context), l.state = l.__s;
    while (l.__d && ++y < 25);
    l.state = l.__s, l.getChildContext != null && (n = Z(Z({}, n), l.getChildContext())), p && !h && l.getSnapshotBeforeUpdate != null && (S = l.getSnapshotBeforeUpdate(_, g)), F = f, f != null && f.type === z && f.key == null && (F = yn(f.props.children)), c = pn(e, Ye(F) ? F : [F], t, r, n, o, i, a, c, s, u), l.base = t.__e, t.__u &= -161, l.__h.length && a.push(l), $ && (l.__E = l.__ = null);
  } catch (ce) {
    if (t.__v = null, s || i != null) if (ce.then) {
      for (t.__u |= s ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
      i[i.indexOf(c)] = null, t.__e = c;
    } else for (Pe = i.length; Pe--; ) tr(i[Pe]);
    else t.__e = r.__e, t.__k = r.__k;
    v.__e(ce, t, r);
  }
  else i == null && t.__v == r.__v ? (t.__k = r.__k, t.__e = r.__e) : c = t.__e = Co(r.__e, t, r, n, o, i, a, s, u);
  return (f = v.diffed) && f(t), 128 & t.__u ? void 0 : c;
}
function gn(e, t, r) {
  for (var n = 0; n < r.length; n++) nr(r[n], r[++n], r[++n]);
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
function yn(e) {
  return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : Ye(e) ? e.map(yn) : Z({}, e);
}
function Co(e, t, r, n, o, i, a, c, s) {
  var u, f, l, h, _, g, S, $ = r.props, m = t.props, p = t.type;
  if (p == "svg" ? o = "http://www.w3.org/2000/svg" : p == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (u = 0; u < i.length; u++) if ((_ = i[u]) && "setAttribute" in _ == !!p && (p ? _.localName == p : _.nodeType == 3)) {
      e = _, i[u] = null;
      break;
    }
  }
  if (e == null) {
    if (p == null) return document.createTextNode(m);
    e = document.createElementNS(o, p, m.is && m), c && (v.__m && v.__m(t, i), c = !1), i = null;
  }
  if (p == null) $ === m || c && e.data == m || (e.data = m);
  else {
    if (i = i && qe.call(e.childNodes), $ = r.props || je, !c && i != null) for ($ = {}, u = 0; u < e.attributes.length; u++) $[(_ = e.attributes[u]).name] = _.value;
    for (u in $) if (_ = $[u], u != "children") {
      if (u == "dangerouslySetInnerHTML") l = _;
      else if (!(u in m)) {
        if (u == "value" && "defaultValue" in m || u == "checked" && "defaultChecked" in m) continue;
        et(e, u, null, _, o);
      }
    }
    for (u in m) _ = m[u], u == "children" ? h = _ : u == "dangerouslySetInnerHTML" ? f = _ : u == "value" ? g = _ : u == "checked" ? S = _ : c && typeof _ != "function" || $[u] === _ || et(e, u, _, $[u], o);
    if (f) c || l && (f.__html == l.__html || f.__html == e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (l && (e.innerHTML = ""), pn(t.type == "template" ? e.content : e, Ye(h) ? h : [h], t, r, n, p == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, a, i ? i[0] : r.__k && Ee(r, 0), c, s), i != null) for (u = i.length; u--; ) tr(i[u]);
    c || (u = "value", p == "progress" && g == null ? e.removeAttribute("value") : g != null && (g !== e[u] || p == "progress" && !g || p == "option" && g != $[u]) && et(e, u, g, $[u], o), u = "checked", S != null && S != e[u] && et(e, u, S, $[u], o));
  }
  return e;
}
function nr(e, t, r) {
  try {
    if (typeof e == "function") {
      var n = typeof e.__u == "function";
      n && e.__u(), n && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (o) {
    v.__e(o, r);
  }
}
function vn(e, t, r) {
  var n, o;
  if (v.unmount && v.unmount(e), (n = e.ref) && (n.current && n.current != e.__e || nr(n, null, t)), (n = e.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (i) {
      v.__e(i, t);
    }
    n.base = n.__P = null;
  }
  if (n = e.__k) for (o = 0; o < n.length; o++) n[o] && vn(n[o], t, r || typeof e.type != "function");
  r || tr(e.__e), e.__c = e.__ = e.__e = void 0;
}
function wo(e, t, r) {
  return this.constructor(e, r);
}
function ae(e, t, r) {
  var n, o, i, a;
  t == document && (t = document.documentElement), v.__ && v.__(e, t), o = (n = typeof r == "function") ? null : r && r.__k || t.__k, i = [], a = [], rr(t, e = (!n && r || t).__k = L(z, null, [e]), o || je, je, t.namespaceURI, !n && r ? [r] : o ? null : t.firstChild ? qe.call(t.childNodes) : null, i, !n && r ? r : o ? o.__e : t.firstChild, n, a), gn(i, e, a);
}
function or(e, t) {
  ae(e, t, or);
}
function ir(e, t, r) {
  var n, o, i, a, c = Z({}, e.props);
  for (i in e.type && e.type.defaultProps && (a = e.type.defaultProps), t) i == "key" ? n = t[i] : i == "ref" ? o = t[i] : c[i] = t[i] == null && a != null ? a[i] : t[i];
  return arguments.length > 2 && (c.children = arguments.length > 3 ? qe.call(arguments, 2) : r), Be(e.type, c, n || e.key, o || e.ref, null);
}
function Cn(e) {
  function t(r) {
    var n, o;
    return this.getChildContext || (n = /* @__PURE__ */ new Set(), (o = {})[t.__c] = this, this.getChildContext = function() {
      return o;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value != i.value && n.forEach(function(a) {
        a.__e = !0, Ht(a);
      });
    }, this.sub = function(i) {
      n.add(i);
      var a = i.componentWillUnmount;
      i.componentWillUnmount = function() {
        n && n.delete(i), a && a.call(i);
      };
    }), r.children;
  }
  return t.__c = "__cC" + dn++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(r, n) {
    return r.children(n);
  }).contextType = t, t;
}
qe = hn.slice, v = { __e: function(e, t, r, n) {
  for (var o, i, a; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, n || {}), a = o.__d), a) return o.__E = o;
  } catch (c) {
    e = c;
  }
  throw e;
} }, cn = 0, V.prototype.setState = function(e, t) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = Z({}, this.state), typeof e == "function" && (e = e(Z({}, r), this.props)), e && Z(r, e), e != null && this.__v && (t && this._sb.push(t), Ht(this));
}, V.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ht(this));
}, V.prototype.render = z, ue = [], ln = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, un = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, dt.__r = 0, fn = /(PointerCapture)$|Capture$/i, er = 0, Lt = Sr(!1), Mt = Sr(!0), dn = 0;
function ar() {
  return (ar = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var So = ["context", "children"];
function bo(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, r = function(n, o) {
    if (n == null) return {};
    var i, a, c = {}, s = Object.keys(n);
    for (a = 0; a < s.length; a++) o.indexOf(i = s[a]) >= 0 || (c[i] = n[i]);
    return c;
  }(e, So);
  return ir(t, r);
}
function Eo() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = L(bo, ar({}, this._props, { context: e.detail.context }), function t(r, n) {
    if (r.nodeType === 3) return r.data;
    if (r.nodeType !== 1) return null;
    var o = [], i = {}, a = 0, c = r.attributes, s = r.childNodes;
    for (a = c.length; a--; ) c[a].name !== "slot" && (i[c[a].name] = c[a].value, i[wn(c[a].name)] = c[a].value);
    for (a = s.length; a--; ) {
      var u = t(s[a], null), f = s[a].slot;
      f ? i[f] = L(br, { name: f }, u) : o[a] = u;
    }
    var l = n ? L(br, null, o) : o;
    return L(n || r.nodeName.toLowerCase(), i, l);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? or : ae)(this._vdom, this._root);
}
function wn(e) {
  return e.replace(/-(\w)/g, function(t, r) {
    return r ? r.toUpperCase() : "";
  });
}
function $o(e, t, r) {
  if (this._vdom) {
    var n = {};
    n[e] = r = r ?? void 0, n[wn(e)] = r, this._vdom = ir(this._vdom, n), ae(this._vdom, this._root);
  }
}
function ko() {
  ae(this._vdom = null, this._root);
}
function br(e, t) {
  var r = this;
  return L("slot", ar({}, e, { ref: function(n) {
    n ? (r.ref = n, r._listener || (r._listener = function(o) {
      o.stopPropagation(), o.detail.context = t;
    }, n.addEventListener("_preact", r._listener))) : r.ref.removeEventListener("_preact", r._listener);
  } }));
}
function Oo(e, t, r, n) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = e, i._root = i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = Eo, o.prototype.attributeChangedCallback = $o, o.prototype.disconnectedCallback = ko, r = r || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = r, r.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom.props[i];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(i, null, a) : (this._props || (this._props = {}), this._props[i] = a, this.connectedCallback());
      var c = typeof a;
      a != null && c !== "string" && c !== "boolean" && c !== "number" || this.setAttribute(i, a);
    } });
  }), customElements.define(t, o);
}
var No = 0;
function d(e, t, r, n, o, i) {
  t || (t = {});
  var a, c, s = t;
  if ("ref" in s) for (c in s = {}, t) c == "ref" ? a = t[c] : s[c] = t[c];
  var u = { type: e, props: s, key: r, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --No, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (a = e.defaultProps)) for (c in a) s[c] === void 0 && (s[c] = a[c]);
  return v.vnode && v.vnode(u), u;
}
const Er = {
  SWITCH_CAMERA: "switch-camera",
  TOGGLE_MIRROR: "toggle-mirror"
};
var pe = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", e.CONTROL = "face-auto-capture:control", e.DETECTION_CHANGED = "face-auto-capture:detection-changed", e.FACE_DETECTION = "face-auto-capture:face-detection", e.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", e.STATE_CHANGED = "face-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", e))(pe || {});
const G = {
  LOADING: "loading",
  ERROR: "error",
  WAITING: "waiting",
  RUNNING: "running",
  COMPLETE: "complete"
}, $r = {
  EYE_NOT_PRESENT: "eye_not_present"
}, A = {
  CANDIDATE_SELECTION: "candidate_selection",
  FACE_TOO_CLOSE: "face_too_close",
  FACE_TOO_FAR: "face_too_far",
  FACE_CENTERING: "face_centering",
  FACE_NOT_PRESENT: "face_not_present",
  SHARPNESS_TOO_LOW: "sharpness_too_low",
  BRIGHTNESS_TOO_LOW: "brightness_too_low",
  BRIGHTNESS_TOO_HIGH: "brightness_too_high",
  DEVICE_PITCHED: "device_pitched",
  LEFT_EYE_NOT_PRESENT: `left_${$r.EYE_NOT_PRESENT}`,
  RIGHT_EYE_NOT_PRESENT: `right_${$r.EYE_NOT_PRESENT}`,
  MOUTH_NOT_PRESENT: "mouth_not_present",
  MOUTH_SCORE_TOO_HIGH: "mouth_score_too_high",
  MOUTH_SCORE_TOO_LOW: "mouth_score_too_low"
};
var se, T, xt, kr, $e = 0, Sn = [], I = v, Or = I.__b, Nr = I.__r, xr = I.diffed, Tr = I.__c, Ir = I.unmount, Rr = I.__;
function Te(e, t) {
  I.__h && I.__h(T, e, $e || t), $e = 0;
  var r = T.__H || (T.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({}), r.__[e];
}
function W(e) {
  return $e = 1, sr($n, e);
}
function sr(e, t, r) {
  var n = Te(se++, 2);
  if (n.t = e, !n.__c && (n.__ = [r ? r(t) : $n(void 0, t), function(c) {
    var s = n.__N ? n.__N[0] : n.__[0], u = n.t(s, c);
    s !== u && (n.__N = [u, n.__[1]], n.__c.setState({}));
  }], n.__c = T, !T.__f)) {
    var o = function(c, s, u) {
      if (!n.__c.__H) return !0;
      var f = n.__c.__H.__.filter(function(h) {
        return !!h.__c;
      });
      if (f.every(function(h) {
        return !h.__N;
      })) return !i || i.call(this, c, s, u);
      var l = n.__c.props !== c;
      return f.forEach(function(h) {
        if (h.__N) {
          var _ = h.__[0];
          h.__ = h.__N, h.__N = void 0, _ !== h.__[0] && (l = !0);
        }
      }), i && i.call(this, c, s, u) || l;
    };
    T.__f = !0;
    var i = T.shouldComponentUpdate, a = T.componentWillUpdate;
    T.componentWillUpdate = function(c, s, u) {
      if (this.__e) {
        var f = i;
        i = void 0, o(c, s, u), i = f;
      }
      a && a.call(this, c, s, u);
    }, T.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function re(e, t) {
  var r = Te(se++, 3);
  !I.__s && cr(r.__H, t) && (r.__ = e, r.u = t, T.__H.__h.push(r));
}
function Ie(e, t) {
  var r = Te(se++, 4);
  !I.__s && cr(r.__H, t) && (r.__ = e, r.u = t, T.__h.push(r));
}
function Ze(e) {
  return $e = 5, te(function() {
    return { current: e };
  }, []);
}
function bn(e, t, r) {
  $e = 6, Ie(function() {
    if (typeof e == "function") {
      var n = e(t());
      return function() {
        e(null), n && typeof n == "function" && n();
      };
    }
    if (e) return e.current = t(), function() {
      return e.current = null;
    };
  }, r == null ? r : r.concat(e));
}
function te(e, t) {
  var r = Te(se++, 7);
  return cr(r.__H, t) && (r.__ = e(), r.__H = t, r.__h = e), r.__;
}
function me(e, t) {
  return $e = 8, te(function() {
    return e;
  }, t);
}
function Xe(e) {
  var t = T.context[e.__c], r = Te(se++, 9);
  return r.c = e, t ? (r.__ == null && (r.__ = !0, t.sub(T)), t.props.value) : e.__;
}
function ht(e, t) {
  I.useDebugValue && I.useDebugValue(t ? t(e) : e);
}
function En() {
  var e = Te(se++, 11);
  if (!e.__) {
    for (var t = T.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var r = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + r[0] + "-" + r[1]++;
  }
  return e.__;
}
function xo() {
  for (var e; e = Sn.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(it), e.__H.__h.forEach(Ft), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], I.__e(t, e.__v);
  }
}
I.__b = function(e) {
  T = null, Or && Or(e);
}, I.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Rr && Rr(e, t);
}, I.__r = function(e) {
  Nr && Nr(e), se = 0;
  var t = (T = e.__c).__H;
  t && (xt === T ? (t.__h = [], T.__h = [], t.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (t.__h.forEach(it), t.__h.forEach(Ft), t.__h = [], se = 0)), xt = T;
}, I.diffed = function(e) {
  xr && xr(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Sn.push(t) !== 1 && kr === I.requestAnimationFrame || ((kr = I.requestAnimationFrame) || To)(xo)), t.__H.__.forEach(function(r) {
    r.u && (r.__H = r.u), r.u = void 0;
  })), xt = T = null;
}, I.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.forEach(it), r.__h = r.__h.filter(function(n) {
        return !n.__ || Ft(n);
      });
    } catch (n) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], I.__e(n, r.__v);
    }
  }), Tr && Tr(e, t);
}, I.unmount = function(e) {
  Ir && Ir(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      it(n);
    } catch (o) {
      t = o;
    }
  }), r.__H = void 0, t && I.__e(t, r.__v));
};
var Pr = typeof requestAnimationFrame == "function";
function To(e) {
  var t, r = function() {
    clearTimeout(n), Pr && cancelAnimationFrame(t), setTimeout(e);
  }, n = setTimeout(r, 100);
  Pr && (t = requestAnimationFrame(r));
}
function it(e) {
  var t = T, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), T = t;
}
function Ft(e) {
  var t = T;
  e.__c = e.__(), T = t;
}
function cr(e, t) {
  return !e || e.length !== t.length || t.some(function(r, n) {
    return r !== e[n];
  });
}
function $n(e, t) {
  return typeof t == "function" ? t(e) : t;
}
var D = function() {
  return D = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, D.apply(this, arguments);
};
function ge(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, i; n < o; n++)
    (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function Io(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Ro = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Po = /* @__PURE__ */ Io(
  function(e) {
    return Ro.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function kn(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function Ut(e, t) {
  for (var r in e) if (r !== "__source" && !(r in t)) return !0;
  for (var n in t) if (n !== "__source" && e[n] !== t[n]) return !0;
  return !1;
}
function On(e, t) {
  var r = t(), n = W({ t: { __: r, u: t } }), o = n[0].t, i = n[1];
  return Ie(function() {
    o.__ = r, o.u = t, Tt(o) && i({ t: o });
  }, [e, r, t]), re(function() {
    return Tt(o) && i({ t: o }), e(function() {
      Tt(o) && i({ t: o });
    });
  }, [e]), r;
}
function Tt(e) {
  var t, r, n = e.u, o = e.__;
  try {
    var i = n();
    return !((t = o) === (r = i) && (t !== 0 || 1 / t == 1 / r) || t != t && r != r);
  } catch {
    return !0;
  }
}
function Nn(e) {
  e();
}
function xn(e) {
  return e;
}
function Tn() {
  return [!1, Nn];
}
var In = Ie;
function Bt(e, t) {
  this.props = e, this.context = t;
}
function Ao(e, t) {
  function r(o) {
    var i = this.props.ref, a = i == o.ref;
    return !a && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !a : Ut(this.props, o);
  }
  function n(o) {
    return this.shouldComponentUpdate = r, L(e, o);
  }
  return n.displayName = "Memo(" + (e.displayName || e.name) + ")", n.prototype.isReactComponent = !0, n.__f = !0, n;
}
(Bt.prototype = new V()).isPureReactComponent = !0, Bt.prototype.shouldComponentUpdate = function(e, t) {
  return Ut(this.props, e) || Ut(this.state, t);
};
var Ar = v.__b;
v.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Ar && Ar(e);
};
var Do = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function Lo(e) {
  function t(r) {
    var n = kn({}, r);
    return delete n.ref, e(n, r.ref || null);
  }
  return t.$$typeof = Do, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Dr = function(e, t) {
  return e == null ? null : ee(ee(e).map(t));
}, Mo = { map: Dr, forEach: Dr, count: function(e) {
  return e ? ee(e).length : 0;
}, only: function(e) {
  var t = ee(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: ee }, Ho = v.__e;
v.__e = function(e, t, r, n) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = r.__e, t.__k = r.__k), o.__c(e, t);
  }
  Ho(e, t, r, n);
};
var Lr = v.unmount;
function Rn(e, t, r) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), e.__c.__H = null), (e = kn({}, e)).__c != null && (e.__c.__P === r && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(n) {
    return Rn(n, t, r);
  })), e;
}
function Pn(e, t, r) {
  return e && r && (e.__v = null, e.__k = e.__k && e.__k.map(function(n) {
    return Pn(n, t, r);
  }), e.__c && e.__c.__P === t && (e.__e && r.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = r)), e;
}
function at() {
  this.__u = 0, this.o = null, this.__b = null;
}
function An(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Fo(e) {
  var t, r, n;
  function o(i) {
    if (t || (t = e()).then(function(a) {
      r = a.default || a;
    }, function(a) {
      n = a;
    }), n) throw n;
    if (!r) throw t;
    return L(r, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function He() {
  this.i = null, this.l = null;
}
v.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Lr && Lr(e);
}, (at.prototype = new V()).__c = function(e, t) {
  var r = t.__c, n = this;
  n.o == null && (n.o = []), n.o.push(r);
  var o = An(n.__v), i = !1, a = function() {
    i || (i = !0, r.__R = null, o ? o(c) : c());
  };
  r.__R = a;
  var c = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var s = n.state.__a;
        n.__v.__k[0] = Pn(s, s.__c.__P, s.__c.__O);
      }
      var u;
      for (n.setState({ __a: n.__b = null }); u = n.o.pop(); ) u.forceUpdate();
    }
  };
  n.__u++ || 32 & t.__u || n.setState({ __a: n.__b = n.__v.__k[0] }), e.then(a, a);
}, at.prototype.componentWillUnmount = function() {
  this.o = [];
}, at.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = Rn(this.__b, r, n.__O = n.__P);
    }
    this.__b = null;
  }
  var o = t.__a && L(z, null, e.fallback);
  return o && (o.__u &= -33), [L(z, null, t.__a ? null : e.children), o];
};
var Mr = function(e, t, r) {
  if (++r[1] === r[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (r = e.i; r; ) {
    for (; r.length > 3; ) r.pop()();
    if (r[1] < r[0]) break;
    e.i = r = r[2];
  }
};
function Uo(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function Bo(e) {
  var t = this, r = e.h;
  if (t.componentWillUnmount = function() {
    ae(null, t.v), t.v = null, t.h = null;
  }, t.h && t.h !== r && t.componentWillUnmount(), !t.v) {
    for (var n = t.__v; n !== null && !n.__m && n.__ !== null; ) n = n.__;
    t.h = r, t.v = { nodeType: 1, parentNode: r, childNodes: [], __k: { __m: n.__m }, contains: function() {
      return !0;
    }, appendChild: function(o) {
      this.childNodes.push(o), t.h.appendChild(o);
    }, insertBefore: function(o, i) {
      this.childNodes.push(o), t.h.insertBefore(o, i);
    }, removeChild: function(o) {
      this.childNodes.splice(this.childNodes.indexOf(o) >>> 1, 1), t.h.removeChild(o);
    } };
  }
  ae(L(Uo, { context: t.context }, e.__v), t.v);
}
function Wo(e, t) {
  var r = L(Bo, { __v: e, h: t });
  return r.containerInfo = t, r;
}
(He.prototype = new V()).__a = function(e) {
  var t = this, r = An(t.__v), n = t.l.get(e);
  return n[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (n.push(o), Mr(t, e, n)) : o();
    };
    r ? r(i) : i();
  };
}, He.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = ee(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var r = t.length; r--; ) this.l.set(t[r], this.i = [1, 0, this.i]);
  return e.children;
}, He.prototype.componentDidUpdate = He.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(t, r) {
    Mr(e, r, t);
  });
};
var Dn = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, zo = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, jo = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Go = /[A-Z0-9]/g, Vo = typeof document < "u", qo = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function Yo(e, t, r) {
  return t.__k == null && (t.textContent = ""), ae(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
function Zo(e, t, r) {
  return or(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
V.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(V.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Hr = v.event;
function Xo() {
}
function Qo() {
  return this.cancelBubble;
}
function Ko() {
  return this.defaultPrevented;
}
v.event = function(e) {
  return Hr && (e = Hr(e)), e.persist = Xo, e.isPropagationStopped = Qo, e.isDefaultPrevented = Ko, e.nativeEvent = e;
};
var lr, Jo = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Fr = v.vnode;
v.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var r = t.props, n = t.type, o = {}, i = n.indexOf("-") === -1;
    for (var a in r) {
      var c = r[a];
      if (!(a === "value" && "defaultValue" in r && c == null || Vo && a === "children" && n === "noscript" || a === "class" || a === "className")) {
        var s = a.toLowerCase();
        a === "defaultValue" && "value" in r && r.value == null ? a = "value" : a === "download" && c === !0 ? c = "" : s === "translate" && c === "no" ? c = !1 : s[0] === "o" && s[1] === "n" ? s === "ondoubleclick" ? a = "ondblclick" : s !== "onchange" || n !== "input" && n !== "textarea" || qo(r.type) ? s === "onfocus" ? a = "onfocusin" : s === "onblur" ? a = "onfocusout" : jo.test(a) && (a = s) : s = a = "oninput" : i && zo.test(a) ? a = a.replace(Go, "-$&").toLowerCase() : c === null && (c = void 0), s === "oninput" && o[a = s] && (a = "oninputCapture"), o[a] = c;
      }
    }
    n == "select" && o.multiple && Array.isArray(o.value) && (o.value = ee(r.children).forEach(function(u) {
      u.props.selected = o.value.indexOf(u.props.value) != -1;
    })), n == "select" && o.defaultValue != null && (o.value = ee(r.children).forEach(function(u) {
      u.props.selected = o.multiple ? o.defaultValue.indexOf(u.props.value) != -1 : o.defaultValue == u.props.value;
    })), r.class && !r.className ? (o.class = r.class, Object.defineProperty(o, "className", Jo)) : (r.className && !r.class || r.class && r.className) && (o.class = o.className = r.className), t.props = o;
  }(e), e.$$typeof = Dn, Fr && Fr(e);
};
var Ur = v.__r;
v.__r = function(e) {
  Ur && Ur(e), lr = e.__c;
};
var Br = v.diffed;
v.diffed = function(e) {
  Br && Br(e);
  var t = e.props, r = e.__e;
  r != null && e.type === "textarea" && "value" in t && t.value !== r.value && (r.value = t.value == null ? "" : t.value), lr = null;
};
var ei = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return lr.__n[e.__c].props.value;
}, useCallback: me, useContext: Xe, useDebugValue: ht, useDeferredValue: xn, useEffect: re, useId: En, useImperativeHandle: bn, useInsertionEffect: In, useLayoutEffect: Ie, useMemo: te, useReducer: sr, useRef: Ze, useState: W, useSyncExternalStore: On, useTransition: Tn } } };
function ti(e) {
  return L.bind(null, e);
}
function gt(e) {
  return !!e && e.$$typeof === Dn;
}
function ri(e) {
  return gt(e) && e.type === z;
}
function ni(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function oi(e) {
  return gt(e) ? ir.apply(null, arguments) : e;
}
function ii(e) {
  return !!e.__k && (ae(null, e), !0);
}
function ai(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var si = function(e, t) {
  return e(t);
}, ci = function(e, t) {
  return e(t);
}, li = z, ui = gt, ne = { useState: W, useId: En, useReducer: sr, useEffect: re, useLayoutEffect: Ie, useInsertionEffect: In, useTransition: Tn, useDeferredValue: xn, useSyncExternalStore: On, startTransition: Nn, useRef: Ze, useImperativeHandle: bn, useMemo: te, useCallback: me, useContext: Xe, useDebugValue: ht, version: "18.3.1", Children: Mo, render: Yo, hydrate: Zo, unmountComponentAtNode: ii, createPortal: Wo, createElement: L, createContext: Cn, createFactory: ti, cloneElement: oi, createRef: go, Fragment: z, isValidElement: gt, isElement: ui, isFragment: ri, isMemo: ni, findDOMNode: ai, Component: V, PureComponent: Bt, memo: Ao, forwardRef: Lo, flushSync: ci, unstable_batchedUpdates: si, StrictMode: li, Suspense: at, SuspenseList: He, lazy: Fo, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ei };
function fi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var It, Wr;
function di() {
  return Wr || (Wr = 1, It = function(t, r, n, o) {
    var i = n ? n.call(o, t, r) : void 0;
    if (i !== void 0)
      return !!i;
    if (t === r)
      return !0;
    if (typeof t != "object" || !t || typeof r != "object" || !r)
      return !1;
    var a = Object.keys(t), c = Object.keys(r);
    if (a.length !== c.length)
      return !1;
    for (var s = Object.prototype.hasOwnProperty.bind(r), u = 0; u < a.length; u++) {
      var f = a[u];
      if (!s(f))
        return !1;
      var l = t[f], h = r[f];
      if (i = n ? n.call(o, l, h, f) : void 0, i === !1 || i === void 0 && l !== h)
        return !1;
    }
    return !0;
  }), It;
}
var hi = di();
const _i = /* @__PURE__ */ fi(hi);
var x = "-ms-", We = "-moz-", O = "-webkit-", Ln = "comm", yt = "rule", ur = "decl", pi = "@import", Mn = "@keyframes", mi = "@layer", Hn = Math.abs, fr = String.fromCharCode, Wt = Object.assign;
function gi(e, t) {
  return P(e, 0) ^ 45 ? (((t << 2 ^ P(e, 0)) << 2 ^ P(e, 1)) << 2 ^ P(e, 2)) << 2 ^ P(e, 3) : 0;
}
function Fn(e) {
  return e.trim();
}
function K(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function C(e, t, r) {
  return e.replace(t, r);
}
function st(e, t, r) {
  return e.indexOf(t, r);
}
function P(e, t) {
  return e.charCodeAt(t) | 0;
}
function ke(e, t, r) {
  return e.slice(t, r);
}
function Y(e) {
  return e.length;
}
function Un(e) {
  return e.length;
}
function Fe(e, t) {
  return t.push(e), e;
}
function yi(e, t) {
  return e.map(t).join("");
}
function zr(e, t) {
  return e.filter(function(r) {
    return !K(r, t);
  });
}
var vt = 1, Oe = 1, Bn = 0, j = 0, R = 0, Re = "";
function Ct(e, t, r, n, o, i, a, c) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: vt, column: Oe, length: a, return: "", siblings: c };
}
function ie(e, t) {
  return Wt(Ct("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Se(e) {
  for (; e.root; )
    e = ie(e.root, { children: [e] });
  Fe(e, e.siblings);
}
function vi() {
  return R;
}
function Ci() {
  return R = j > 0 ? P(Re, --j) : 0, Oe--, R === 10 && (Oe = 1, vt--), R;
}
function q() {
  return R = j < Bn ? P(Re, j++) : 0, Oe++, R === 10 && (Oe = 1, vt++), R;
}
function he() {
  return P(Re, j);
}
function ct() {
  return j;
}
function wt(e, t) {
  return ke(Re, e, t);
}
function zt(e) {
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
function wi(e) {
  return vt = Oe = 1, Bn = Y(Re = e), j = 0, [];
}
function Si(e) {
  return Re = "", e;
}
function Rt(e) {
  return Fn(wt(j - 1, jt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function bi(e) {
  for (; (R = he()) && R < 33; )
    q();
  return zt(e) > 2 || zt(R) > 3 ? "" : " ";
}
function Ei(e, t) {
  for (; --t && q() && !(R < 48 || R > 102 || R > 57 && R < 65 || R > 70 && R < 97); )
    ;
  return wt(e, ct() + (t < 6 && he() == 32 && q() == 32));
}
function jt(e) {
  for (; q(); )
    switch (R) {
      // ] ) " '
      case e:
        return j;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && jt(R);
        break;
      // (
      case 40:
        e === 41 && jt(e);
        break;
      // \
      case 92:
        q();
        break;
    }
  return j;
}
function $i(e, t) {
  for (; q() && e + R !== 57; )
    if (e + R === 84 && he() === 47)
      break;
  return "/*" + wt(t, j - 1) + "*" + fr(e === 47 ? e : q());
}
function ki(e) {
  for (; !zt(he()); )
    q();
  return wt(e, j);
}
function Oi(e) {
  return Si(lt("", null, null, null, [""], e = wi(e), 0, [0], e));
}
function lt(e, t, r, n, o, i, a, c, s) {
  for (var u = 0, f = 0, l = a, h = 0, _ = 0, g = 0, S = 1, $ = 1, m = 1, p = 0, k = "", b = o, N = i, w = n, y = k; $; )
    switch (g = p, p = q()) {
      // (
      case 40:
        if (g != 108 && P(y, l - 1) == 58) {
          st(y += C(Rt(p), "&", "&\f"), "&\f", Hn(u ? c[u - 1] : 0)) != -1 && (m = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        y += Rt(p);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        y += bi(g);
        break;
      // \
      case 92:
        y += Ei(ct() - 1, 7);
        continue;
      // /
      case 47:
        switch (he()) {
          case 42:
          case 47:
            Fe(Ni($i(q(), ct()), t, r, s), s);
            break;
          default:
            y += "/";
        }
        break;
      // {
      case 123 * S:
        c[u++] = Y(y) * m;
      // } ; \0
      case 125 * S:
      case 59:
      case 0:
        switch (p) {
          // \0 }
          case 0:
          case 125:
            $ = 0;
          // ;
          case 59 + f:
            m == -1 && (y = C(y, /\f/g, "")), _ > 0 && Y(y) - l && Fe(_ > 32 ? Gr(y + ";", n, r, l - 1, s) : Gr(C(y, " ", "") + ";", n, r, l - 2, s), s);
            break;
          // @ ;
          case 59:
            y += ";";
          // { rule/at-rule
          default:
            if (Fe(w = jr(y, t, r, u, f, o, c, k, b = [], N = [], l, i), i), p === 123)
              if (f === 0)
                lt(y, t, w, w, b, i, l, c, N);
              else
                switch (h === 99 && P(y, 3) === 110 ? 100 : h) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    lt(e, w, w, n && Fe(jr(e, w, w, 0, 0, o, c, k, o, b = [], l, N), N), o, N, l, c, n ? b : N);
                    break;
                  default:
                    lt(y, w, w, w, [""], N, 0, c, N);
                }
        }
        u = f = _ = 0, S = m = 1, k = y = "", l = a;
        break;
      // :
      case 58:
        l = 1 + Y(y), _ = g;
      default:
        if (S < 1) {
          if (p == 123)
            --S;
          else if (p == 125 && S++ == 0 && Ci() == 125)
            continue;
        }
        switch (y += fr(p), p * S) {
          // &
          case 38:
            m = f > 0 ? 1 : (y += "\f", -1);
            break;
          // ,
          case 44:
            c[u++] = (Y(y) - 1) * m, m = 1;
            break;
          // @
          case 64:
            he() === 45 && (y += Rt(q())), h = he(), f = l = Y(k = y += ki(ct())), p++;
            break;
          // -
          case 45:
            g === 45 && Y(y) == 2 && (S = 0);
        }
    }
  return i;
}
function jr(e, t, r, n, o, i, a, c, s, u, f, l) {
  for (var h = o - 1, _ = o === 0 ? i : [""], g = Un(_), S = 0, $ = 0, m = 0; S < n; ++S)
    for (var p = 0, k = ke(e, h + 1, h = Hn($ = a[S])), b = e; p < g; ++p)
      (b = Fn($ > 0 ? _[p] + " " + k : C(k, /&\f/g, _[p]))) && (s[m++] = b);
  return Ct(e, t, r, o === 0 ? yt : c, s, u, f, l);
}
function Ni(e, t, r, n) {
  return Ct(e, t, r, Ln, fr(vi()), ke(e, 2, -2), 0, n);
}
function Gr(e, t, r, n, o) {
  return Ct(e, t, r, ur, ke(e, 0, n), ke(e, n + 1, -1), n, o);
}
function Wn(e, t, r) {
  switch (gi(e, t)) {
    // color-adjust
    case 5103:
      return O + "print-" + e + e;
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
      return O + e + e;
    // tab-size
    case 4789:
      return We + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return O + e + We + e + x + e + e;
    // writing-mode
    case 5936:
      switch (P(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return O + e + x + C(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return O + e + x + C(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return O + e + x + C(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return O + e + x + e + e;
    // order
    case 6165:
      return O + e + x + "flex-" + e + e;
    // align-items
    case 5187:
      return O + e + C(e, /(\w+).+(:[^]+)/, O + "box-$1$2" + x + "flex-$1$2") + e;
    // align-self
    case 5443:
      return O + e + x + "flex-item-" + C(e, /flex-|-self/g, "") + (K(e, /flex-|baseline/) ? "" : x + "grid-row-" + C(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return O + e + x + "flex-line-pack" + C(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return O + e + x + C(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return O + e + x + C(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return O + "box-" + C(e, "-grow", "") + O + e + x + C(e, "grow", "positive") + e;
    // transition
    case 4554:
      return O + C(e, /([^-])(transform)/g, "$1" + O + "$2") + e;
    // cursor
    case 6187:
      return C(C(C(e, /(zoom-|grab)/, O + "$1"), /(image-set)/, O + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return C(e, /(image-set\([^]*)/, O + "$1$`$1");
    // justify-content
    case 4968:
      return C(C(e, /(.+:)(flex-)?(.*)/, O + "box-pack:$3" + x + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + O + e + e;
    // justify-self
    case 4200:
      if (!K(e, /flex-|baseline/)) return x + "grid-column-align" + ke(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return x + C(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return r && r.some(function(n, o) {
        return t = o, K(n.props, /grid-\w+-end/);
      }) ? ~st(e + (r = r[t].value), "span", 0) ? e : x + C(e, "-start", "") + e + x + "grid-row-span:" + (~st(r, "span", 0) ? K(r, /\d+/) : +K(r, /\d+/) - +K(e, /\d+/)) + ";" : x + C(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return r && r.some(function(n) {
        return K(n.props, /grid-\w+-start/);
      }) ? e : x + C(C(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return C(e, /(.+)-inline(.+)/, O + "$1$2") + e;
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
        switch (P(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (P(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return C(e, /(.+:)(.+)-([^]+)/, "$1" + O + "$2-$3$1" + We + (P(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~st(e, "stretch", 0) ? Wn(C(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return C(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, i, a, c, s, u) {
        return x + o + ":" + i + u + (a ? x + o + "-span:" + (c ? s : +s - +i) + u : "") + e;
      });
    // position: sticky
    case 4949:
      if (P(e, t + 6) === 121)
        return C(e, ":", ":" + O) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (P(e, P(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return C(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + O + (P(e, 14) === 45 ? "inline-" : "") + "box$3$1" + O + "$2$3$1" + x + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return C(e, ":", ":" + x) + e;
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
function _t(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function xi(e, t, r, n) {
  switch (e.type) {
    case mi:
      if (e.children.length) break;
    case pi:
    case ur:
      return e.return = e.return || e.value;
    case Ln:
      return "";
    case Mn:
      return e.return = e.value + "{" + _t(e.children, n) + "}";
    case yt:
      if (!Y(e.value = e.props.join(","))) return "";
  }
  return Y(r = _t(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Ti(e) {
  var t = Un(e);
  return function(r, n, o, i) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](r, n, o, i) || "";
    return a;
  };
}
function Ii(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Ri(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case ur:
        e.return = Wn(e.value, e.length, r);
        return;
      case Mn:
        return _t([ie(e, { value: C(e.value, "@", "@" + O) })], n);
      case yt:
        if (e.length)
          return yi(r = e.props, function(o) {
            switch (K(o, n = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Se(ie(e, { props: [C(o, /:(read-\w+)/, ":" + We + "$1")] })), Se(ie(e, { props: [o] })), Wt(e, { props: zr(r, n) });
                break;
              // :placeholder
              case "::placeholder":
                Se(ie(e, { props: [C(o, /:(plac\w+)/, ":" + O + "input-$1")] })), Se(ie(e, { props: [C(o, /:(plac\w+)/, ":" + We + "$1")] })), Se(ie(e, { props: [C(o, /:(plac\w+)/, x + "input-$1")] })), Se(ie(e, { props: [o] })), Wt(e, { props: zr(r, n) });
                break;
            }
            return "";
          });
    }
}
var Pi = {
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
}, E = {}, ye = typeof process < "u" && E !== void 0 && (E.REACT_APP_SC_ATTR || E.SC_ATTR) || "data-styled", zn = "active", jn = "data-styled-version", St = "6.1.18", dr = `/*!sc*/
`, pt = typeof window < "u" && typeof document < "u", Ai = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && E !== void 0 && E.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && E.REACT_APP_SC_DISABLE_SPEEDY !== "" ? E.REACT_APP_SC_DISABLE_SPEEDY !== "false" && E.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && E !== void 0 && E.SC_DISABLE_SPEEDY !== void 0 && E.SC_DISABLE_SPEEDY !== "" ? E.SC_DISABLE_SPEEDY !== "false" && E.SC_DISABLE_SPEEDY : E.NODE_ENV !== "production"), Vr = /invalid hook call/i, tt = /* @__PURE__ */ new Set(), Di = function(e, t) {
  if (E.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", n = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, o = console.error;
    try {
      var i = !0;
      console.error = function(a) {
        for (var c = [], s = 1; s < arguments.length; s++) c[s - 1] = arguments[s];
        Vr.test(a) ? (i = !1, tt.delete(n)) : o.apply(void 0, ge([a], c, !1));
      }, Ze(), i && !tt.has(n) && (console.warn(n), tt.add(n));
    } catch (a) {
      Vr.test(a.message) && tt.delete(n);
    } finally {
      console.error = o;
    }
  }
}, bt = Object.freeze([]), Ne = Object.freeze({});
function Li(e, t, r) {
  return r === void 0 && (r = Ne), e.theme !== r.theme && e.theme || t || r.theme;
}
var Gt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Mi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Hi = /(^-|-$)/g;
function qr(e) {
  return e.replace(Mi, "-").replace(Hi, "");
}
var Fi = /(a)(d)/gi, rt = 52, Yr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Vt(e) {
  var t, r = "";
  for (t = Math.abs(e); t > rt; t = t / rt | 0) r = Yr(t % rt) + r;
  return (Yr(t % rt) + r).replace(Fi, "$1-$2");
}
var Pt, Gn = 5381, fe = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Vn = function(e) {
  return fe(Gn, e);
};
function qn(e) {
  return Vt(Vn(e) >>> 0);
}
function Yn(e) {
  return E.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function At(e) {
  return typeof e == "string" && (E.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Zn = typeof Symbol == "function" && Symbol.for, Xn = Zn ? Symbol.for("react.memo") : 60115, Ui = Zn ? Symbol.for("react.forward_ref") : 60112, Bi = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Wi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Qn = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, zi = ((Pt = {})[Ui] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Pt[Xn] = Qn, Pt);
function Zr(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Xn ? Qn : "$$typeof" in e ? zi[e.$$typeof] : Bi;
  var t;
}
var ji = Object.defineProperty, Gi = Object.getOwnPropertyNames, Xr = Object.getOwnPropertySymbols, Vi = Object.getOwnPropertyDescriptor, qi = Object.getPrototypeOf, Qr = Object.prototype;
function Kn(e, t, r) {
  if (typeof t != "string") {
    if (Qr) {
      var n = qi(t);
      n && n !== Qr && Kn(e, n, r);
    }
    var o = Gi(t);
    Xr && (o = o.concat(Xr(t)));
    for (var i = Zr(e), a = Zr(t), c = 0; c < o.length; ++c) {
      var s = o[c];
      if (!(s in Wi || r && r[s] || a && s in a || i && s in i)) {
        var u = Vi(t, s);
        try {
          ji(e, s, u);
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
function hr(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function de(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function qt(e, t) {
  if (e.length === 0) return "";
  for (var r = e[0], n = 1; n < e.length; n++) r += e[n];
  return r;
}
function xe(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Yt(e, t, r) {
  if (r === void 0 && (r = !1), !r && !xe(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var n = 0; n < t.length; n++) e[n] = Yt(e[n], t[n]);
  else if (xe(t)) for (var n in t) e[n] = Yt(e[n], t[n]);
  return e;
}
function _r(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Yi = E.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Zi() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var r = e[0], n = [], o = 1, i = e.length; o < i; o += 1) n.push(e[o]);
  return n.forEach(function(a) {
    r = r.replace(/%[a-z]/, a);
  }), r;
}
function X(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  return E.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Zi.apply(void 0, ge([Yi[e]], t, !1)).trim());
}
var Xi = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, n = 0; n < t; n++) r += this.groupSizes[n];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var n = this.groupSizes, o = n.length, i = o; t >= i; ) if ((i <<= 1) < 0) throw X(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(n), this.length = i;
      for (var a = o; a < i; a++) this.groupSizes[a] = 0;
    }
    for (var c = this.indexOfGroup(t + 1), s = (a = 0, r.length); a < s; a++) this.tag.insertRule(c, r[a]) && (this.groupSizes[t]++, c++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], n = this.indexOfGroup(t), o = n + r;
      this.groupSizes[t] = 0;
      for (var i = n; i < o; i++) this.tag.deleteRule(n);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0) return r;
    for (var n = this.groupSizes[t], o = this.indexOfGroup(t), i = o + n, a = o; a < i; a++) r += "".concat(this.tag.getRule(a)).concat(dr);
    return r;
  }, e;
}(), Qi = 1 << 30, ut = /* @__PURE__ */ new Map(), mt = /* @__PURE__ */ new Map(), ft = 1, nt = function(e) {
  if (ut.has(e)) return ut.get(e);
  for (; mt.has(ft); ) ft++;
  var t = ft++;
  if (E.NODE_ENV !== "production" && ((0 | t) < 0 || t > Qi)) throw X(16, "".concat(t));
  return ut.set(e, t), mt.set(t, e), t;
}, Ki = function(e, t) {
  ft = t + 1, ut.set(e, t), mt.set(t, e);
}, Ji = "style[".concat(ye, "][").concat(jn, '="').concat(St, '"]'), ea = new RegExp("^".concat(ye, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ta = function(e, t, r) {
  for (var n, o = r.split(","), i = 0, a = o.length; i < a; i++) (n = o[i]) && e.registerName(t, n);
}, ra = function(e, t) {
  for (var r, n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(dr), o = [], i = 0, a = n.length; i < a; i++) {
    var c = n[i].trim();
    if (c) {
      var s = c.match(ea);
      if (s) {
        var u = 0 | parseInt(s[1], 10), f = s[2];
        u !== 0 && (Ki(f, u), ta(e, f, s[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else o.push(c);
    }
  }
}, Kr = function(e) {
  for (var t = document.querySelectorAll(Ji), r = 0, n = t.length; r < n; r++) {
    var o = t[r];
    o && o.getAttribute(ye) !== zn && (ra(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function na() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Jn = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(c) {
    var s = Array.from(c.querySelectorAll("style[".concat(ye, "]")));
    return s[s.length - 1];
  }(r), i = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(ye, zn), n.setAttribute(jn, St);
  var a = na();
  return a && n.setAttribute("nonce", a), r.insertBefore(n, i), n;
}, oa = function() {
  function e(t) {
    this.element = Jn(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet) return r.sheet;
      for (var n = document.styleSheets, o = 0, i = n.length; o < i; o++) {
        var a = n[o];
        if (a.ownerNode === r) return a;
      }
      throw X(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r && r.cssText ? r.cssText : "";
  }, e;
}(), ia = function() {
  function e(t) {
    this.element = Jn(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var n = document.createTextNode(r);
      return this.element.insertBefore(n, this.nodes[t] || null), this.length++, !0;
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
  return e.prototype.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), Jr = pt, sa = { isServer: !pt, useCSSOMInjection: !Ai }, eo = function() {
  function e(t, r, n) {
    t === void 0 && (t = Ne), r === void 0 && (r = {});
    var o = this;
    this.options = D(D({}, sa), t), this.gs = r, this.names = new Map(n), this.server = !!t.isServer, !this.server && pt && Jr && (Jr = !1, Kr(this)), _r(this, function() {
      return function(i) {
        for (var a = i.getTag(), c = a.length, s = "", u = function(l) {
          var h = function(m) {
            return mt.get(m);
          }(l);
          if (h === void 0) return "continue";
          var _ = i.names.get(h), g = a.getGroup(l);
          if (_ === void 0 || !_.size || g.length === 0) return "continue";
          var S = "".concat(ye, ".g").concat(l, '[id="').concat(h, '"]'), $ = "";
          _ !== void 0 && _.forEach(function(m) {
            m.length > 0 && ($ += "".concat(m, ","));
          }), s += "".concat(g).concat(S, '{content:"').concat($, '"}').concat(dr);
        }, f = 0; f < c; f++) u(f);
        return s;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return nt(t);
  }, e.prototype.rehydrate = function() {
    !this.server && pt && Kr(this);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(D(D({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var n = r.useCSSOMInjection, o = r.target;
      return r.isServer ? new aa(o) : n ? new oa(o) : new ia(o);
    }(this.options), new Xi(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (nt(t), this.names.has(t)) this.names.get(t).add(r);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(r), this.names.set(t, n);
    }
  }, e.prototype.insertRules = function(t, r, n) {
    this.registerName(t, r), this.getTag().insertRules(nt(t), n);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(nt(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), ca = /&/g, la = /^\s*\/\/.*$/gm;
function to(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(n) {
      return "".concat(t, " ").concat(n);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = to(r.children, t)), r;
  });
}
function ro(e) {
  var t, r, n, o = e === void 0 ? Ne : e, i = o.options, a = i === void 0 ? Ne : i, c = o.plugins, s = c === void 0 ? bt : c, u = function(h, _, g) {
    return g.startsWith(r) && g.endsWith(r) && g.replaceAll(r, "").length > 0 ? ".".concat(t) : h;
  }, f = s.slice();
  f.push(function(h) {
    h.type === yt && h.value.includes("&") && (h.props[0] = h.props[0].replace(ca, r).replace(n, u));
  }), a.prefix && f.push(Ri), f.push(xi);
  var l = function(h, _, g, S) {
    _ === void 0 && (_ = ""), g === void 0 && (g = ""), S === void 0 && (S = "&"), t = S, r = _, n = new RegExp("\\".concat(r, "\\b"), "g");
    var $ = h.replace(la, ""), m = Oi(g || _ ? "".concat(g, " ").concat(_, " { ").concat($, " }") : $);
    a.namespace && (m = to(m, a.namespace));
    var p = [];
    return _t(m, Ti(f.concat(Ii(function(k) {
      return p.push(k);
    })))), p;
  };
  return l.hash = s.length ? s.reduce(function(h, _) {
    return _.name || X(15), fe(h, _.name);
  }, Gn).toString() : "", l;
}
var ua = new eo(), Zt = ro(), pr = ne.createContext({ shouldForwardProp: void 0, styleSheet: ua, stylis: Zt });
pr.Consumer;
var fa = ne.createContext(void 0);
function Xt() {
  return Xe(pr);
}
function da(e) {
  var t = W(e.stylisPlugins), r = t[0], n = t[1], o = Xt().styleSheet, i = te(function() {
    var s = o;
    return e.sheet ? s = e.sheet : e.target && (s = s.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (s = s.reconstructWithOptions({ useCSSOMInjection: !1 })), s;
  }, [e.disableCSSOMInjection, e.sheet, e.target, o]), a = te(function() {
    return ro({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: r });
  }, [e.enableVendorPrefixes, e.namespace, r]);
  re(function() {
    _i(r, e.stylisPlugins) || n(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var c = te(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: a };
  }, [e.shouldForwardProp, i, a]);
  return ne.createElement(pr.Provider, { value: c }, ne.createElement(fa.Provider, { value: a }, e.children));
}
var Qt = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Zt);
      var a = n.name + i.hash;
      o.hasNameForId(n.id, a) || o.insertRules(n.id, a, i(n.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, _r(this, function() {
      throw X(12, String(n.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Zt), this.name + t.hash;
  }, e;
}(), ha = function(e) {
  return e >= "A" && e <= "Z";
};
function en(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var n = e[r];
    if (r === 1 && n === "-" && e[0] === "-") return e;
    ha(n) ? t += "-" + n.toLowerCase() : t += n;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var no = function(e) {
  return e == null || e === !1 || e === "";
}, oo = function(e) {
  var t, r, n = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !no(i) && (Array.isArray(i) && i.isCss || ve(i) ? n.push("".concat(en(o), ":"), i, ";") : xe(i) ? n.push.apply(n, ge(ge(["".concat(o, " {")], oo(i), !1), ["}"], !1)) : n.push("".concat(en(o), ": ").concat((t = o, (r = i) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in Pi || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return n;
};
function _e(e, t, r, n) {
  if (no(e)) return [];
  if (hr(e)) return [".".concat(e.styledComponentId)];
  if (ve(e)) {
    if (!ve(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return E.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Qt || xe(o) || o === null || console.error("".concat(Yn(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), _e(o, t, r, n);
  }
  var i;
  return e instanceof Qt ? r ? (e.inject(r, n), [e.getName(n)]) : [e] : xe(e) ? oo(e) : Array.isArray(e) ? Array.prototype.concat.apply(bt, e.map(function(a) {
    return _e(a, t, r, n);
  })) : [e.toString()];
}
function _a(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (ve(r) && !hr(r)) return !1;
  }
  return !0;
}
var pa = Vn(St), ma = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = E.NODE_ENV === "production" && (n === void 0 || n.isStatic) && _a(t), this.componentId = r, this.baseHash = fe(pa, r), this.baseStyle = n, eo.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, n) : "";
    if (this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId)) o = de(o, this.staticRulesId);
    else {
      var i = qt(_e(this.rules, t, r, n)), a = Vt(fe(this.baseHash, i) >>> 0);
      if (!r.hasNameForId(this.componentId, a)) {
        var c = n(i, ".".concat(a), void 0, this.componentId);
        r.insertRules(this.componentId, a, c);
      }
      o = de(o, a), this.staticRulesId = a;
    }
    else {
      for (var s = fe(this.baseHash, n.hash), u = "", f = 0; f < this.rules.length; f++) {
        var l = this.rules[f];
        if (typeof l == "string") u += l, E.NODE_ENV !== "production" && (s = fe(s, l));
        else if (l) {
          var h = qt(_e(l, t, r, n));
          s = fe(s, h + f), u += h;
        }
      }
      if (u) {
        var _ = Vt(s >>> 0);
        r.hasNameForId(this.componentId, _) || r.insertRules(this.componentId, _, n(u, ".".concat(_), void 0, this.componentId)), o = de(o, _);
      }
    }
    return o;
  }, e;
}(), Ge = ne.createContext(void 0);
Ge.Consumer;
function io() {
  var e = Xe(Ge);
  if (!e) throw X(18);
  return e;
}
function ga(e) {
  var t = ne.useContext(Ge), r = te(function() {
    return function(n, o) {
      if (!n) throw X(14);
      if (ve(n)) {
        var i = n(o);
        if (E.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object")) throw X(7);
        return i;
      }
      if (Array.isArray(n) || typeof n != "object") throw X(8);
      return o ? D(D({}, o), n) : n;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? ne.createElement(Ge.Provider, { value: r }, e.children) : null;
}
var Dt = {}, tn = /* @__PURE__ */ new Set();
function ya(e, t, r) {
  var n = hr(e), o = e, i = !At(e), a = t.attrs, c = a === void 0 ? bt : a, s = t.componentId, u = s === void 0 ? function(b, N) {
    var w = typeof b != "string" ? "sc" : qr(b);
    Dt[w] = (Dt[w] || 0) + 1;
    var y = "".concat(w, "-").concat(qn(St + w + Dt[w]));
    return N ? "".concat(N, "-").concat(y) : y;
  }(t.displayName, t.parentComponentId) : s, f = t.displayName, l = f === void 0 ? function(b) {
    return At(b) ? "styled.".concat(b) : "Styled(".concat(Yn(b), ")");
  }(e) : f, h = t.displayName && t.componentId ? "".concat(qr(t.displayName), "-").concat(t.componentId) : t.componentId || u, _ = n && o.attrs ? o.attrs.concat(c).filter(Boolean) : c, g = t.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var S = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var $ = t.shouldForwardProp;
      g = function(b, N) {
        return S(b, N) && $(b, N);
      };
    } else g = S;
  }
  var m = new ma(r, h, n ? o.componentStyle : void 0);
  function p(b, N) {
    return function(w, y, M) {
      var F = w.attrs, Pe = w.componentStyle, U = w.defaultProps, ce = w.foldedComponentIds, yr = w.styledComponentId, ho = w.target, _o = ne.useContext(Ge), po = Xt(), $t = w.shouldForwardProp || po.shouldForwardProp;
      E.NODE_ENV !== "production" && ht(yr);
      var vr = Li(y, _o, U) || Ne, Q = function(Qe, Le, Ke) {
        for (var we, le = D(D({}, Le), { className: void 0, theme: Ke }), Nt = 0; Nt < Qe.length; Nt += 1) {
          var Je = ve(we = Qe[Nt]) ? we(le) : we;
          for (var oe in Je) le[oe] = oe === "className" ? de(le[oe], Je[oe]) : oe === "style" ? D(D({}, le[oe]), Je[oe]) : Je[oe];
        }
        return Le.className && (le.className = de(le.className, Le.className)), le;
      }(F, y, vr), Ae = Q.as || ho, De = {};
      for (var B in Q) Q[B] === void 0 || B[0] === "$" || B === "as" || B === "theme" && Q.theme === vr || (B === "forwardedAs" ? De.as = Q.forwardedAs : $t && !$t(B, Ae) || (De[B] = Q[B], $t || E.NODE_ENV !== "development" || Po(B) || tn.has(B) || !Gt.has(Ae) || (tn.add(B), console.warn('styled-components: it looks like an unknown prop "'.concat(B, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var kt = function(Qe, Le) {
        var Ke = Xt(), we = Qe.generateAndInjectStyles(Le, Ke.styleSheet, Ke.stylis);
        return E.NODE_ENV !== "production" && ht(we), we;
      }(Pe, Q);
      E.NODE_ENV !== "production" && w.warnTooManyClasses && w.warnTooManyClasses(kt);
      var Ot = de(ce, yr);
      return kt && (Ot += " " + kt), Q.className && (Ot += " " + Q.className), De[At(Ae) && !Gt.has(Ae) ? "class" : "className"] = Ot, M && (De.ref = M), L(Ae, De);
    }(k, b, N);
  }
  p.displayName = l;
  var k = ne.forwardRef(p);
  return k.attrs = _, k.componentStyle = m, k.displayName = l, k.shouldForwardProp = g, k.foldedComponentIds = n ? de(o.foldedComponentIds, o.styledComponentId) : "", k.styledComponentId = h, k.target = n ? o.target : e, Object.defineProperty(k, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(b) {
    this._foldedDefaultProps = n ? function(N) {
      for (var w = [], y = 1; y < arguments.length; y++) w[y - 1] = arguments[y];
      for (var M = 0, F = w; M < F.length; M++) Yt(N, F[M], !0);
      return N;
    }({}, o.defaultProps, b) : b;
  } }), E.NODE_ENV !== "production" && (Di(l, h), k.warnTooManyClasses = /* @__PURE__ */ function(b, N) {
    var w = {}, y = !1;
    return function(M) {
      if (!y && (w[M] = !0, Object.keys(w).length >= 200)) {
        var F = N ? ' with the id of "'.concat(N, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(b).concat(F, `.
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
  }(l, h)), _r(k, function() {
    return ".".concat(k.styledComponentId);
  }), i && Kn(k, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), k;
}
function rn(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1) r.push(t[n], e[n + 1]);
  return r;
}
var nn = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function mr(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  if (ve(e) || xe(e)) return nn(_e(rn(bt, ge([e], t, !0))));
  var n = e;
  return t.length === 0 && n.length === 1 && typeof n[0] == "string" ? _e(n) : nn(_e(rn(n, t)));
}
function Kt(e, t, r) {
  if (r === void 0 && (r = Ne), !t) throw X(1, t);
  var n = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
    return e(t, r, mr.apply(void 0, ge([o], i, !1)));
  };
  return n.attrs = function(o) {
    return Kt(e, t, D(D({}, r), { attrs: Array.prototype.concat(r.attrs, o).filter(Boolean) }));
  }, n.withConfig = function(o) {
    return Kt(e, t, D(D({}, r), o));
  }, n;
}
var ao = function(e) {
  return Kt(ya, e);
}, H = ao;
Gt.forEach(function(e) {
  H[e] = ao(e);
});
function Et(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  E.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var n = qt(mr.apply(void 0, ge([e], t, !1))), o = qn(n);
  return new Qt(o, n);
}
E.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var ot = "__sc-".concat(ye, "__");
E.NODE_ENV !== "production" && E.NODE_ENV !== "test" && typeof window < "u" && (window[ot] || (window[ot] = 0), window[ot] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[ot] += 1);
const be = {
  CIRCLE_SOLID: "circle-solid",
  SQUARE_ROUNDED_DASH: "square-rounded-dash",
  SQUARE_ROUNDED_SOLID: "square-rounded-solid",
  SQUARE_DASH: "square-dash",
  SQUARE_SOLID: "square-solid"
}, va = 2, so = 14, Ca = 0.0276;
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
}, on = {
  loading: { text: "Loading. Please wait.", visible: !0 },
  waiting: { text: "Waiting for input...", visible: !0 }
}, wa = {
  [A.CANDIDATE_SELECTION]: "Stay still…",
  [A.FACE_TOO_CLOSE]: "Move back",
  [A.FACE_TOO_FAR]: "Move closer",
  [A.FACE_CENTERING]: "Center your face",
  [A.FACE_NOT_PRESENT]: "Position your face into the circle",
  [A.SHARPNESS_TOO_LOW]: "Turn face against light",
  [A.BRIGHTNESS_TOO_LOW]: "Turn face against light",
  [A.BRIGHTNESS_TOO_HIGH]: "Less light needed",
  [A.DEVICE_PITCHED]: "Hold your phone at eye level",
  [A.LEFT_EYE_NOT_PRESENT]: "Position your face into the circle",
  [A.RIGHT_EYE_NOT_PRESENT]: "Position your face into the circle",
  [A.MOUTH_SCORE_TOO_HIGH]: "Keep neutral expression",
  [A.MOUTH_SCORE_TOO_LOW]: "Smile :)",
  [A.MOUTH_NOT_PRESENT]: "Position your face into the circle"
}, Sa = be.CIRCLE_SOLID, ba = "rgba(19, 19, 19, 0.5)", Ea = 34;
function an(e, t) {
  return Math.max(t, t + (e - 400) * Ca + 2);
}
const $a = (e, t = so) => e ? e.width < e.height ? an(e.width, t) : an(e.height, t) : t, ka = (e) => e > J.Default ? Ue[J.Default] : e > J.L ? Ue[J.L] : e > J.M ? Ue[J.M] : Ue[J.S], Oa = (e) => e ? ka(e.width) : Ue[J.Default];
function Na() {
  const e = "https://fonts.googleapis.com/css?family=Montserrat:600";
  if (!document.querySelector(`link[href="${e}"]`)) {
    const r = document.createElement("link");
    r.href = e, r.rel = "stylesheet", document.head.appendChild(r);
  }
}
const ze = Cn(void 0);
ze.displayName = "ConfigurationContext";
function Ce() {
  const e = Xe(ze);
  if (!e)
    throw new Error(
      `${ze.displayName} must be used within a ${ze.displayName} Provider`
    );
  return e;
}
function xa({
  children: e,
  configuration: t,
  videoElementSize: r
}) {
  const { font: n } = io(), o = te(
    () => ({ ...t, videoElementSize: r, fontSize: $a(r, n.minimumSize) }),
    [t, n.minimumSize, r]
  );
  return /* @__PURE__ */ d(ze.Provider, { value: o, children: e });
}
const co = ({ svgSize: e }) => /* @__PURE__ */ d("svg", { fill: "none", height: e, viewBox: "0 0 16 14", width: e, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ d(
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
`, Ia = H.div`
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
`, Jt = ({ Icon: e, isCameraReady: t, position: r = "absolute", text: n }) => {
  const { fontSize: o } = Ce();
  return /* @__PURE__ */ d(Ta, { $isCameraReady: t, $position: r, children: /* @__PURE__ */ d(Ia, { children: [
    e ? /* @__PURE__ */ d(e, { svgSize: o * 2 }) : null,
    /* @__PURE__ */ d(Ra, { $fontSize: o, children: n })
  ] }) });
}, lo = ({ text: e = "An unknown error has occurred" }) => /* @__PURE__ */ d(Jt, { Icon: co, position: "relative", text: e });
class Pa extends V {
  constructor(t) {
    super(t), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError(t) {
    return { hasError: !0 };
  }
  componentDidCatch(t, r) {
    console.error(t, r);
  }
  render() {
    return this.state.hasError ? /* @__PURE__ */ d(lo, { Icon: co, isCameraReady: !1 }) : this.props.children;
  }
}
const Aa = H.div`
  font-family: ${(e) => e.theme.font.family};
  font-style: ${(e) => e.theme.font.style};
  font-weight: ${(e) => e.theme.font.weight};
`;
function Da({
  children: e,
  uiConfiguration: t,
  videoElementSize: r
}) {
  return re(() => {
    Na();
  }, []), /* @__PURE__ */ d(da, { target: t.styleTarget, children: /* @__PURE__ */ d(ga, { theme: t.styling.theme, children: /* @__PURE__ */ d(Aa, { children: /* @__PURE__ */ d(Pa, { videoElementSize: r, children: /* @__PURE__ */ d(xa, { configuration: t, videoElementSize: r, children: e }) }) }) }) });
}
const La = 0.75, Ma = 2, Ha = "dot-auto-capture-video";
function Ve(e, t) {
  const r = Ze(t);
  re(() => {
    r.current = t;
  }, [t]), re(
    () => {
      if (!e)
        return;
      const n = (o) => r.current(o);
      return document.addEventListener(e, n), () => {
        document.removeEventListener(e, n);
      };
    },
    [e]
    // Re-run if eventName
  );
}
function Fa(e) {
  const [t, r] = W(), n = me(
    (o) => {
      var i;
      r((i = o.detail) == null ? void 0 : i.size);
    },
    [r]
  );
  return Ve(e, n), Ie(() => {
    if (!t) {
      const o = document.getElementById(Ha);
      o && r(o.getBoundingClientRect());
    }
  }, [t, r]), t;
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
  minimumSize: so
}, Me = {
  colors: Ba,
  font: Wa
}, za = (e) => {
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
      family: Ua((t = e.font) == null ? void 0 : t.family, Me.font.family)
    }
  } : Me;
}, ja = (e) => Number.parseFloat(e.toFixed(3)), gr = (e, t) => Math.min(e, t), Ga = ({ height: e, width: t }, r) => {
  const n = gr(t, e) * r, o = (t - n) / 2, i = (e - n) / 2;
  return {
    shiftX: o,
    shiftY: i,
    width: n,
    height: n
  };
}, Va = (e, t) => {
  const { height: r, shiftX: n, shiftY: o, width: i } = Ga(e, t);
  return {
    shiftX: n / e.width,
    shiftY: o / e.height,
    width: i / e.width,
    height: r / e.height
  };
};
function qa(e, t) {
  const r = gr(t.width, t.height);
  return ja(e * r);
}
function Ya(e) {
  return Va(e, La);
}
function Za(e, t) {
  return qa(e, t) * Ma;
}
const Xa = (e, t) => {
  document.dispatchEvent(
    new CustomEvent(e, {
      detail: t
    })
  );
}, sn = (e, t) => {
  Xa(e, {
    instruction: t
  });
};
async function Qa() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Ka() {
  return (await Qa()).filter((t) => t.kind === "videoinput");
}
const Ja = () => {
  const [e, t] = W(!1);
  return re(() => {
    (async () => {
      (await Ka()).length > 1 && t(!0);
    })();
  }, []), e;
}, es = ({ size: e }) => /* @__PURE__ */ d("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }), ts = ({ size: e }) => /* @__PURE__ */ d("svg", { fill: "none", height: e, viewBox: "0 0 52 52", width: "52", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ d("circle", { cx: "26", cy: "26", fill: "#131313", fillOpacity: "0.3", r: "26" }),
  /* @__PURE__ */ d(
    "path",
    {
      d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
      fill: "white"
    }
  )
] }), uo = H.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(e) => e.$marginLeft ? `${e.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, rs = ({ marginLeft: e, size: t, ...r }) => /* @__PURE__ */ d(uo, { $marginLeft: e, ...r, children: /* @__PURE__ */ d(es, { size: t }) }), ns = ({ marginLeft: e, size: t, ...r }) => /* @__PURE__ */ d(uo, { $marginLeft: e, ...r, children: /* @__PURE__ */ d(ts, { size: t }) }), os = H.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.$padding}px`};
  z-index: 2;
`, is = ({
  customControlEvent: e,
  isSwitchCameraDisabled: t
}) => {
  const {
    control: { showCameraButtons: r },
    videoElementSize: n
  } = Ce(), o = Ja();
  if (!r)
    return null;
  const { buttonPadding: i, iconSize: a, marginLeft: c } = Oa(n);
  return /* @__PURE__ */ d(os, { $padding: i, children: [
    o && /* @__PURE__ */ d(ns, { disabled: t, onClick: () => {
      sn(e, Er.SWITCH_CAMERA);
    }, size: a }),
    /* @__PURE__ */ d(
      rs,
      {
        marginLeft: o ? c : 0,
        onClick: () => {
          sn(e, Er.TOGGLE_MIRROR);
        },
        size: a
      }
    )
  ] });
}, as = "2.5s", ss = "0.3s", cs = "linear", ls = Et`
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
const us = H.div`
  position: absolute;
  left: 50%;

  ${(e) => e.$cssTop ? `top: ${e.$cssTop}%;` : ""}
  ${(e) => e.$cssBottom ? `bottom: ${e.$cssBottom}%;` : ""}
    ${(e) => e.$isAnimating && mr`
      animation: ${ls} ${ss}
        ${cs} both;
      animation-delay: ${as};

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
`, fs = H.div`
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
`, ds = ({
  children: e,
  cssBottom: t,
  cssTop: r,
  isAnimating: n,
  isInCandidateSelection: o,
  isPortrait: i
}) => {
  const { fontSize: a } = Ce();
  return /* @__PURE__ */ d(us, { $cssBottom: t, $cssTop: r, $isAnimating: n, $isPortrait: i, children: /* @__PURE__ */ d(
    fs,
    {
      $fontSize: a,
      $isInCandidateSelection: o,
      $wrap: e.length > Ea,
      children: e
    }
  ) });
}, hs = H.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, _s = ({ svgSize: e }) => /* @__PURE__ */ d(hs, { children: /* @__PURE__ */ d("svg", { fill: "none", height: e, viewBox: "0 0 48 48", width: e, xmlns: "http://www.w3.org/2000/svg", children: [
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
] }) }), ps = H.div`
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
`, fo = ({ children: e, height: t, scale: r, width: n }) => {
  const {
    styling: { backdropColor: o }
  } = Ce(), i = gr(n, t);
  return /* @__PURE__ */ d(ps, { $backdropColor: o, $scale: r, $shorterSide: i, children: /* @__PURE__ */ d("svg", { viewBox: `0 0 ${n} ${t}`, children: [
    /* @__PURE__ */ d("defs", { children: /* @__PURE__ */ d("mask", { id: "mask", children: [
      /* @__PURE__ */ d("rect", { fill: "#fff", height: "100%", width: "100%" }),
      /* @__PURE__ */ d("g", { children: e })
    ] }) }),
    /* @__PURE__ */ d("rect", { fill: o, height: "100%", mask: "url(#mask)", width: "100%" })
  ] }) });
};
function ms({ cameraHeight: e, cameraWidth: t, isBackdrop: r, state: n }) {
  const { appStateInstructions: o } = Ce(), i = n === G.ERROR || n === G.RUNNING;
  return !n || i || !(o != null && o[n].visible) ? null : n === G.WAITING || n === G.COMPLETE ? /* @__PURE__ */ d(z, { children: [
    r && e && t && /* @__PURE__ */ d(fo, { height: e, width: t }),
    /* @__PURE__ */ d(Jt, { isCameraReady: !0, text: o[G.WAITING].text })
  ] }) : /* @__PURE__ */ d(Jt, { Icon: _s, isCameraReady: !0, text: o[G.LOADING].text });
}
function gs({ isRounded: e, isSquare: t, ...r }) {
  return e ? /* @__PURE__ */ d("rect", { fill: "#000", ...r, rx: "2%" }) : /* @__PURE__ */ d("rect", { fill: "#000", ...r, rx: t ? "0" : "50%" });
}
const ys = () => /* @__PURE__ */ d("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ d(
  "path",
  {
    d: "M2 240C2 108.556 108.556 2 240 2C371.444 2 478 108.556 478 240C478 371.444 371.444 478 240 478C108.556 478 2 371.444 2 240Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  }
) });
function vs() {
  return /* @__PURE__ */ d("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ d(
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
function Cs() {
  return /* @__PURE__ */ d("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ d(
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
function ws() {
  return /* @__PURE__ */ d("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ d("rect", { height: "476", rx: "14", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "4", width: "476", x: "2", y: "2" }) });
}
function Ss() {
  return /* @__PURE__ */ d("svg", { fill: "none", height: "480", viewBox: "0 0 480 480", width: "480", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ d("rect", { height: "476", rx: "2", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "4", width: "476", x: "2", y: "2" }) });
}
const bs = H.div`
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
`, Es = ({
  children: e,
  className: t,
  isInCandidateSelection: r,
  onAnimationEnd: n,
  placeholderRectangle: o,
  scale: i
}) => /* @__PURE__ */ d(
  bs,
  {
    $isInCandidateSelection: r,
    $placeholderRectangle: o,
    $scale: i,
    className: t,
    onAnimationEnd: n,
    children: e
  }
), $s = {
  [be.CIRCLE_SOLID]: /* @__PURE__ */ d(ys, {}),
  [be.SQUARE_ROUNDED_DASH]: /* @__PURE__ */ d(Cs, {}),
  [be.SQUARE_ROUNDED_SOLID]: /* @__PURE__ */ d(ws, {}),
  [be.SQUARE_DASH]: /* @__PURE__ */ d(vs, {}),
  [be.SQUARE_SOLID]: /* @__PURE__ */ d(Ss, {})
};
function ks({ backdropHeight: e, backdropWidth: t, isBackdrop: r, placeholderRectangle: n, ...o }) {
  const { placeholder: i } = Ce(), a = i.toLowerCase().includes("square"), c = i.toLowerCase().includes("rounded");
  return /* @__PURE__ */ d(z, { children: [
    r && /* @__PURE__ */ d(fo, { height: e, width: t, children: /* @__PURE__ */ d(
      gs,
      {
        height: `${n.height * 100}%`,
        isRounded: c,
        isSquare: a,
        width: `${n.width * 100}%`,
        x: `${n.shiftX * 100}%`,
        y: `${n.shiftY * 100}%`
      }
    ) }),
    /* @__PURE__ */ d(Es, { placeholderRectangle: n, ...o, children: $s[i] })
  ] });
}
const Os = () => {
  const [e, t] = W(), [r, n] = W(!1), o = me(
    (s) => {
      var f, l;
      t((f = s == null ? void 0 : s.detail) == null ? void 0 : f.cameraResolution);
      const u = (l = s == null ? void 0 : s.detail) == null ? void 0 : l.isMirroring;
      u !== void 0 && n(u);
    },
    [t]
  );
  Ve(pe.CAMERA_PROPS_CHANGED, o);
  const [i, a] = W({
    code: A.FACE_NOT_PRESENT,
    // FIXME Default instruction should not be here
    isEscalated: !1
  }), c = me(
    (s) => {
      var u, f;
      a({
        code: (u = s == null ? void 0 : s.detail) == null ? void 0 : u.instructionCode,
        isEscalated: ((f = s == null ? void 0 : s.detail) == null ? void 0 : f.isEscalated) ?? !1
      });
    },
    [a]
  );
  return Ve(pe.INSTRUCTION_CHANGED, c), {
    cameraResolution: e,
    instruction: i,
    isMirroring: r
  };
}, Ns = () => {
  const [e, t] = W(G.LOADING), [r, n] = W(), o = me(
    (i) => {
      var c, s;
      t((c = i.detail) == null ? void 0 : c.appState);
      const a = (s = i == null ? void 0 : i.detail) == null ? void 0 : s.error;
      a && n(a);
    },
    [t, n]
  );
  return Ve(pe.STATE_CHANGED, o), {
    appState: e,
    error: r
  };
}, xs = H.canvas`
  transform: ${(e) => e.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
function Ts(e) {
  const t = e.getContext("2d");
  t && t.clearRect(0, 0, t.canvas.width, t.canvas.height);
}
const Is = ({ cameraResolution: e, isImageMirror: t }) => {
  const r = Ze(null), n = io(), [o, i] = W(), a = me(
    (c) => {
      var s;
      i((s = c == null ? void 0 : c.detail) == null ? void 0 : s.detectedObject);
    },
    [i]
  );
  return Ve(pe.DETECTION_CHANGED, a), re(() => {
    if (!r.current)
      return;
    const c = (s, u) => {
      var g;
      if (!u)
        return;
      const { faceCenter: f, faceSize: l } = u, h = (g = r == null ? void 0 : r.current) == null ? void 0 : g.getContext("2d");
      if (!h)
        return;
      const _ = Za(l, s);
      h.beginPath(), h.arc(f.x, f.y, _, 0, 2 * Math.PI, !1), h.lineWidth = va, h.strokeStyle = n.colors.placeholderColor, h.stroke();
    };
    r.current.width = e.width, r.current.height = e.height, Ts(r.current), c(e, o);
  }, [e, o, n.colors.placeholderColor]), /* @__PURE__ */ d(xs, { ref: r, $isImageMirror: t });
};
function Rs() {
  const { appState: e, error: t } = Ns(), { cameraResolution: r, instruction: n, isMirroring: o } = Os(), i = n.code === A.CANDIDATE_SELECTION, {
    control: { showDetectionLayer: a },
    instructions: c
  } = Ce();
  if (e === G.ERROR)
    return /* @__PURE__ */ d(lo, { text: t == null ? void 0 : t.message });
  if (e === G.RUNNING && r) {
    const s = Ya(r);
    return /* @__PURE__ */ d(z, { children: [
      a && /* @__PURE__ */ d(Is, { cameraResolution: r, isImageMirror: o }),
      /* @__PURE__ */ d(
        ks,
        {
          backdropHeight: r.height,
          backdropWidth: r.width,
          isBackdrop: !0,
          isInCandidateSelection: i,
          placeholderRectangle: s
        }
      ),
      n.code && /* @__PURE__ */ d(
        ds,
        {
          cssBottom: (s.height + s.shiftY) * 100,
          isInCandidateSelection: i,
          isPortrait: r.width < r.height,
          children: c[n.code]
        }
      ),
      /* @__PURE__ */ d(is, { customControlEvent: pe.CONTROL, isSwitchCameraDisabled: i })
    ] });
  }
  return /* @__PURE__ */ d(
    ms,
    {
      cameraHeight: r == null ? void 0 : r.height,
      cameraWidth: r == null ? void 0 : r.width,
      isBackdrop: !0,
      state: e
    }
  );
}
function Ps(e) {
  var c, s, u, f, l, h;
  const t = { ...wa, ...e == null ? void 0 : e.instructions }, r = {
    [G.LOADING]: {
      ...on.loading,
      ...(c = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : c.loading
    },
    [G.WAITING]: {
      ...on.waiting,
      ...(s = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : s.waiting
    }
  }, n = za((u = e == null ? void 0 : e.styling) == null ? void 0 : u.theme), o = {
    ...e == null ? void 0 : e.styling,
    backdropColor: ((f = e == null ? void 0 : e.styling) == null ? void 0 : f.backdropColor) ?? ba,
    theme: n
  }, i = {
    showDetectionLayer: ((l = e == null ? void 0 : e.control) == null ? void 0 : l.showDetectionLayer) ?? !1,
    showCameraButtons: ((h = e == null ? void 0 : e.control) == null ? void 0 : h.showCameraButtons) ?? !1
  }, a = (e == null ? void 0 : e.placeholder) ?? Sa;
  return {
    ...e,
    instructions: t,
    appStateInstructions: r,
    placeholder: a,
    styling: o,
    control: i
  };
}
const As = ({ configuration: e }) => {
  const t = Fa(pe.VIDEO_ELEMENT_SIZE);
  return /* @__PURE__ */ d(Da, { uiConfiguration: Ps(e), videoElementSize: t, children: /* @__PURE__ */ d(Rs, {}) });
};
Oo(As, "x-dot-face-auto-capture-ui", ["configuration"]);
