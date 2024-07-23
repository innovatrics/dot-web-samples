var uo = Object.defineProperty;
var fo = (e, t, n) => t in e ? uo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ze = (e, t, n) => (fo(e, typeof t != "symbol" ? t + "" : t, n), n);
var ze, p, lr, ue, gn, ur, Dt, fr, Be = {}, dr = [], ho = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, pt = Array.isArray;
function K(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function hr(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function P(e, t, n) {
  var r, o, i, s = {};
  for (i in t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? ze.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      s[i] === void 0 && (s[i] = e.defaultProps[i]);
  return Ue(e, s, r, o, null);
}
function Ue(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o ?? ++lr, __i: -1, __u: 0 };
  return o == null && p.vnode != null && p.vnode(i), i;
}
function _o() {
  return { current: null };
}
function B(e) {
  return e.children;
}
function z(e, t) {
  this.props = e, this.context = t;
}
function Se(e, t) {
  if (t == null)
    return e.__ ? Se(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Se(e) : null;
}
function _r(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return _r(e);
  }
}
function Pt(e) {
  (!e.__d && (e.__d = !0) && ue.push(e) && !at.__r++ || gn !== p.debounceRendering) && ((gn = p.debounceRendering) || ur)(at);
}
function at() {
  var e, t, n, r, o, i, s, a, l;
  for (ue.sort(Dt); e = ue.shift(); )
    e.__d && (t = ue.length, r = void 0, i = (o = (n = e).__v).__e, a = [], l = [], (s = n.__P) && ((r = K({}, o)).__v = o.__v + 1, p.vnode && p.vnode(r), en(s, r, o, n.__n, s.ownerSVGElement !== void 0, 32 & o.__u ? [i] : null, a, i ?? Se(o), !!(32 & o.__u), l), r.__.__k[r.__i] = r, gr(a, r, l), r.__e != i && _r(r)), ue.length > t && ue.sort(Dt));
  at.__r = 0;
}
function pr(e, t, n, r, o, i, s, a, l, u, f) {
  var c, _, h, g, C, E = r && r.__k || dr, m = t.length;
  for (n.__d = l, po(n, t, E), l = n.__d, c = 0; c < m; c++)
    (h = n.__k[c]) != null && typeof h != "boolean" && typeof h != "function" && (_ = h.__i === -1 ? Be : E[h.__i] || Be, h.__i = c, en(e, h, _, o, i, s, a, l, u, f), g = h.__e, h.ref && _.ref != h.ref && (_.ref && tn(_.ref, null, h), f.push(h.ref, h.__c || g, h)), C == null && g != null && (C = g), 65536 & h.__u || _.__k === h.__k ? l = mr(h, l, e) : typeof h.type == "function" && h.__d !== void 0 ? l = h.__d : g && (l = g.nextSibling), h.__d = void 0, h.__u &= -196609);
  n.__d = l, n.__e = C;
}
function po(e, t, n) {
  var r, o, i, s, a, l = t.length, u = n.length, f = u, c = 0;
  for (e.__k = [], r = 0; r < l; r++)
    (o = e.__k[r] = (o = t[r]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? Ue(null, o, null, null, o) : pt(o) ? Ue(B, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? Ue(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = e, o.__b = e.__b + 1, a = mo(o, n, s = r + c, f), o.__i = a, i = null, a !== -1 && (f--, (i = n[a]) && (i.__u |= 131072)), i == null || i.__v === null ? (a == -1 && c--, typeof o.type != "function" && (o.__u |= 65536)) : a !== s && (a === s + 1 ? c++ : a > s ? f > l - s ? c += a - s : c-- : c = a < s && a == s - 1 ? a - s : 0, a !== r + c && (o.__u |= 65536))) : (i = n[r]) && i.key == null && i.__e && (i.__e == e.__d && (e.__d = Se(i)), Mt(i, i, !1), n[r] = null, f--);
  if (f)
    for (r = 0; r < u; r++)
      (i = n[r]) != null && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = Se(i)), Mt(i, i));
}
function mr(e, t, n) {
  var r, o;
  if (typeof e.type == "function") {
    for (r = e.__k, o = 0; r && o < r.length; o++)
      r[o] && (r[o].__ = e, t = mr(r[o], t, n));
    return t;
  }
  return e.__e != t && (n.insertBefore(e.__e, t || null), t = e.__e), t && t.nextSibling;
}
function Q(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (pt(e) ? e.some(function(n) {
    Q(n, t);
  }) : t.push(e)), t;
}
function mo(e, t, n, r) {
  var o = e.key, i = e.type, s = n - 1, a = n + 1, l = t[n];
  if (l === null || l && o == l.key && i === l.type)
    return n;
  if (r > (l != null && !(131072 & l.__u) ? 1 : 0))
    for (; s >= 0 || a < t.length; ) {
      if (s >= 0) {
        if ((l = t[s]) && !(131072 & l.__u) && o == l.key && i === l.type)
          return s;
        s--;
      }
      if (a < t.length) {
        if ((l = t[a]) && !(131072 & l.__u) && o == l.key && i === l.type)
          return a;
        a++;
      }
    }
  return -1;
}
function yn(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || ho.test(t) ? n : n + "px";
}
function qe(e, t, n, r, o) {
  var i;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || yn(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || yn(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      i = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = Date.now(), e.addEventListener(t, i ? Cn : vn, i)) : e.removeEventListener(t, i ? Cn : vn, i);
    else {
      if (o)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t !== "rowSpan" && t !== "colSpan" && t !== "role" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t[4] !== "-" ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function vn(e) {
  var t = this.l[e.type + !1];
  if (e.t) {
    if (e.t <= t.u)
      return;
  } else
    e.t = Date.now();
  return t(p.event ? p.event(e) : e);
}
function Cn(e) {
  return this.l[e.type + !0](p.event ? p.event(e) : e);
}
function en(e, t, n, r, o, i, s, a, l, u) {
  var f, c, _, h, g, C, E, m, y, O, N, T, w, v, G, A = t.type;
  if (t.constructor !== void 0)
    return null;
  128 & n.__u && (l = !!(32 & n.__u), i = [a = t.__e = n.__e]), (f = p.__b) && f(t);
  e:
    if (typeof A == "function")
      try {
        if (m = t.props, y = (f = A.contextType) && r[f.__c], O = f ? y ? y.props.value : f.__ : r, n.__c ? E = (c = t.__c = n.__c).__ = c.__E : ("prototype" in A && A.prototype.render ? t.__c = c = new A(m, O) : (t.__c = c = new z(m, O), c.constructor = A, c.render = yo), y && y.sub(c), c.props = m, c.state || (c.state = {}), c.context = O, c.__n = r, _ = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), A.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = K({}, c.__s)), K(c.__s, A.getDerivedStateFromProps(m, c.__s))), h = c.props, g = c.state, c.__v = t, _)
          A.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (A.getDerivedStateFromProps == null && m !== h && c.componentWillReceiveProps != null && c.componentWillReceiveProps(m, O), !c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(m, c.__s, O) === !1 || t.__v === n.__v)) {
            for (t.__v !== n.__v && (c.props = m, c.state = c.__s, c.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(ye) {
              ye && (ye.__ = t);
            }), N = 0; N < c._sb.length; N++)
              c.__h.push(c._sb[N]);
            c._sb = [], c.__h.length && s.push(c);
            break e;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(m, c.__s, O), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(h, g, C);
          });
        }
        if (c.context = O, c.props = m, c.__P = e, c.__e = !1, T = p.__r, w = 0, "prototype" in A && A.prototype.render) {
          for (c.state = c.__s, c.__d = !1, T && T(t), f = c.render(c.props, c.state, c.context), v = 0; v < c._sb.length; v++)
            c.__h.push(c._sb[v]);
          c._sb = [];
        } else
          do
            c.__d = !1, T && T(t), f = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++w < 25);
        c.state = c.__s, c.getChildContext != null && (r = K(K({}, r), c.getChildContext())), _ || c.getSnapshotBeforeUpdate == null || (C = c.getSnapshotBeforeUpdate(h, g)), pr(e, pt(G = f != null && f.type === B && f.key == null ? f.props.children : f) ? G : [G], t, n, r, o, i, s, a, l, u), c.base = t.__e, t.__u &= -161, c.__h.length && s.push(c), E && (c.__E = c.__ = null);
      } catch (ye) {
        t.__v = null, l || i != null ? (t.__e = a, t.__u |= l ? 160 : 32, i[i.indexOf(a)] = null) : (t.__e = n.__e, t.__k = n.__k), p.__e(ye, t, n);
      }
    else
      i == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = go(n.__e, t, n, r, o, i, s, l, u);
  (f = p.diffed) && f(t);
}
function gr(e, t, n) {
  t.__d = void 0;
  for (var r = 0; r < n.length; r++)
    tn(n[r], n[++r], n[++r]);
  p.__c && p.__c(t, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      p.__e(i, o.__v);
    }
  });
}
function go(e, t, n, r, o, i, s, a, l) {
  var u, f, c, _, h, g, C, E = n.props, m = t.props, y = t.type;
  if (y === "svg" && (o = !0), i != null) {
    for (u = 0; u < i.length; u++)
      if ((h = i[u]) && "setAttribute" in h == !!y && (y ? h.localName === y : h.nodeType === 3)) {
        e = h, i[u] = null;
        break;
      }
  }
  if (e == null) {
    if (y === null)
      return document.createTextNode(m);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", y) : document.createElement(y, m.is && m), i = null, a = !1;
  }
  if (y === null)
    E === m || a && e.data === m || (e.data = m);
  else {
    if (i = i && ze.call(e.childNodes), E = n.props || Be, !a && i != null)
      for (E = {}, u = 0; u < e.attributes.length; u++)
        E[(h = e.attributes[u]).name] = h.value;
    for (u in E)
      h = E[u], u == "children" || (u == "dangerouslySetInnerHTML" ? c = h : u === "key" || u in m || qe(e, u, null, h, o));
    for (u in m)
      h = m[u], u == "children" ? _ = h : u == "dangerouslySetInnerHTML" ? f = h : u == "value" ? g = h : u == "checked" ? C = h : u === "key" || a && typeof h != "function" || E[u] === h || qe(e, u, h, E[u], o);
    if (f)
      a || c && (f.__html === c.__html || f.__html === e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (c && (e.innerHTML = ""), pr(e, pt(_) ? _ : [_], t, n, r, o && y !== "foreignObject", i, s, i ? i[0] : n.__k && Se(n, 0), a, l), i != null)
      for (u = i.length; u--; )
        i[u] != null && hr(i[u]);
    a || (u = "value", g !== void 0 && (g !== e[u] || y === "progress" && !g || y === "option" && g !== E[u]) && qe(e, u, g, E[u], !1), u = "checked", C !== void 0 && C !== e[u] && qe(e, u, C, E[u], !1));
  }
  return e;
}
function tn(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    p.__e(r, n);
  }
}
function Mt(e, t, n) {
  var r, o;
  if (p.unmount && p.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || tn(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (i) {
        p.__e(i, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (o = 0; o < r.length; o++)
      r[o] && Mt(r[o], t, n || typeof e.type != "function");
  n || e.__e == null || hr(e.__e), e.__ = e.__e = e.__d = void 0;
}
function yo(e, t, n) {
  return this.constructor(e, n);
}
function oe(e, t, n) {
  var r, o, i, s;
  p.__ && p.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], s = [], en(t, e = (!r && n || t).__k = P(B, null, [e]), o || Be, Be, t.ownerSVGElement !== void 0, !r && n ? [n] : o ? null : t.firstChild ? ze.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, s), gr(i, e, s);
}
function nn(e, t) {
  oe(e, t, nn);
}
function rn(e, t, n) {
  var r, o, i, s, a = K({}, e.props);
  for (i in e.type && e.type.defaultProps && (s = e.type.defaultProps), t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i] === void 0 && s !== void 0 ? s[i] : t[i];
  return arguments.length > 2 && (a.children = arguments.length > 3 ? ze.call(arguments, 2) : n), Ue(e.type, a, r || e.key, o || e.ref, null);
}
function vo(e, t) {
  var n = { __c: t = "__cC" + fr++, __: e, Consumer: function(r, o) {
    return r.children(o);
  }, Provider: function(r) {
    var o, i;
    return this.getChildContext || (o = [], (i = {})[t] = this, this.getChildContext = function() {
      return i;
    }, this.shouldComponentUpdate = function(s) {
      this.props.value !== s.value && o.some(function(a) {
        a.__e = !0, Pt(a);
      });
    }, this.sub = function(s) {
      o.push(s);
      var a = s.componentWillUnmount;
      s.componentWillUnmount = function() {
        o.splice(o.indexOf(s), 1), a && a.call(s);
      };
    }), r.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
ze = dr.slice, p = { __e: function(e, t, n, r) {
  for (var o, i, s; t = t.__; )
    if ((o = t.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), s = o.__d), s)
          return o.__E = o;
      } catch (a) {
        e = a;
      }
  throw e;
} }, lr = 0, z.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = K({}, this.state), typeof e == "function" && (e = e(K({}, n), this.props)), e && K(n, e), e != null && this.__v && (t && this._sb.push(t), Pt(this));
}, z.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Pt(this));
}, z.prototype.render = B, ue = [], ur = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Dt = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, at.__r = 0, fr = 0;
function on() {
  return (on = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var Co = ["context", "children"];
function So(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, n = function(r, o) {
    if (r == null)
      return {};
    var i, s, a = {}, l = Object.keys(r);
    for (s = 0; s < l.length; s++)
      o.indexOf(i = l[s]) >= 0 || (a[i] = r[i]);
    return a;
  }(e, Co);
  return rn(t, n);
}
function Eo() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = P(So, on({}, this._props, { context: e.detail.context }), function t(n, r) {
    if (n.nodeType === 3)
      return n.data;
    if (n.nodeType !== 1)
      return null;
    var o = [], i = {}, s = 0, a = n.attributes, l = n.childNodes;
    for (s = a.length; s--; )
      a[s].name !== "slot" && (i[a[s].name] = a[s].value, i[yr(a[s].name)] = a[s].value);
    for (s = l.length; s--; ) {
      var u = t(l[s], null), f = l[s].slot;
      f ? i[f] = P(Sn, { name: f }, u) : o[s] = u;
    }
    var c = r ? P(Sn, null, o) : o;
    return P(r || n.nodeName.toLowerCase(), i, c);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? nn : oe)(this._vdom, this._root);
}
function yr(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function wo(e, t, n) {
  if (this._vdom) {
    var r = {};
    r[e] = n = n ?? void 0, r[yr(e)] = n, this._vdom = rn(this._vdom, r), oe(this._vdom, this._root);
  }
}
function bo() {
  oe(this._vdom = null, this._root);
}
function Sn(e, t) {
  var n = this;
  return P("slot", on({}, e, { ref: function(r) {
    r ? (n.ref = r, n._listener || (n._listener = function(o) {
      o.stopPropagation(), o.detail.context = t;
    }, r.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function Oo(e, t, n, r) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = e, i._root = r && r.shadow ? i.attachShadow({ mode: r.mode || "open" }) : i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = Eo, o.prototype.attributeChangedCallback = wo, o.prototype.disconnectedCallback = bo, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = n, n.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom.props[i];
    }, set: function(s) {
      this._vdom ? this.attributeChangedCallback(i, null, s) : (this._props || (this._props = {}), this._props[i] = s, this.connectedCallback());
      var a = typeof s;
      s != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(i, s);
    } });
  }), customElements.define(t || e.tagName || e.displayName || e.name, o);
}
var Ht = /* @__PURE__ */ ((e) => (e.CONTINUE_DETECTION = "continue-detection", e.SWITCH_CAMERA = "switch-camera", e.TOGGLE_MIRROR = "toggle-mirror", e))(Ht || {}), vr = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", e.CONTROL = "document-auto-capture:control", e.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", e.DOCUMENT_DETECTION = "document-auto-capture:document-detection", e.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", e.STATE_CHANGED = "document-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", e))(vr || {}), We = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", e.CONTROL = "face-auto-capture:control", e.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", e.FACE_DETECTION = "face-auto-capture:face-detection", e.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", e.STATE_CHANGED = "face-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", e))(We || {}), Cr = /* @__PURE__ */ ((e) => (e.STATUS_CHANGED = "smile-auto-capture:status-changed", e))(Cr || {});
const En = {
  EYE_NOT_PRESENT: "eye_not_present"
}, D = {
  CANDIDATE_SELECTION: "candidate_selection",
  FACE_TOO_CLOSE: "face_too_close",
  FACE_TOO_FAR: "face_too_far",
  FACE_CENTERING: "face_centering",
  FACE_NOT_PRESENT: "face_not_present",
  SHARPNESS_TOO_LOW: "sharpness_too_low",
  BRIGHTNESS_TOO_LOW: "brightness_too_low",
  BRIGHTNESS_TOO_HIGH: "brightness_too_high",
  DEVICE_PITCHED: "device_pitched",
  LEFT_EYE_NOT_PRESENT: `left_${En.EYE_NOT_PRESENT}`,
  RIGHT_EYE_NOT_PRESENT: `right_${En.EYE_NOT_PRESENT}`,
  MOUTH_NOT_PRESENT: "mouth_not_present",
  MOUTH_SCORE_TOO_HIGH: "mouth_score_too_high",
  MOUTH_SCORE_TOO_LOW: "mouth_score_too_low"
}, $o = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  WAITING: "WAITING",
  RUNNING: "RUNNING"
}, he = {
  ...D,
  SMILE: "smile",
  SMILE_CANDIDATE_SELECTION: "smile_candidate_selection",
  KEEP_NEUTRAL_EXPRESSION: "keep_neutral_expression"
}, ct = {
  NEUTRAL: "NEUTRAL",
  SMILE: "SMILE"
}, ne = {
  ...$o,
  DONE: "DONE"
};
var L = function() {
  return L = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, L.apply(this, arguments);
};
function ie(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function No(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var To = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Io = /* @__PURE__ */ No(
  function(e) {
    return To.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), se, k, It, wn, Ee = 0, Sr = [], Je = [], bn = p.__b, On = p.__r, $n = p.diffed, Nn = p.__c, Tn = p.unmount;
function Ie(e, t) {
  p.__h && p.__h(k, e, Ee || t), Ee = 0;
  var n = k.__H || (k.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({ __V: Je }), n.__[e];
}
function H(e) {
  return Ee = 1, Er(wr, e);
}
function Er(e, t, n) {
  var r = Ie(se++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : wr(void 0, t), function(a) {
    var l = r.__N ? r.__N[0] : r.__[0], u = r.t(l, a);
    l !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = k, !k.u)) {
    var o = function(a, l, u) {
      if (!r.__c.__H)
        return !0;
      var f = r.__c.__H.__.filter(function(_) {
        return _.__c;
      });
      if (f.every(function(_) {
        return !_.__N;
      }))
        return !i || i.call(this, a, l, u);
      var c = !1;
      return f.forEach(function(_) {
        if (_.__N) {
          var h = _.__[0];
          _.__ = _.__N, _.__N = void 0, h !== _.__[0] && (c = !0);
        }
      }), !(!c && r.__c.props === a) && (!i || i.call(this, a, l, u));
    };
    k.u = !0;
    var i = k.shouldComponentUpdate, s = k.componentWillUpdate;
    k.componentWillUpdate = function(a, l, u) {
      if (this.__e) {
        var f = i;
        i = void 0, o(a, l, u), i = f;
      }
      s && s.call(this, a, l, u);
    }, k.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function ae(e, t) {
  var n = Ie(se++, 3);
  !p.__s && an(n.__H, t) && (n.__ = e, n.i = t, k.__H.__h.push(n));
}
function mt(e, t) {
  var n = Ie(se++, 4);
  !p.__s && an(n.__H, t) && (n.__ = e, n.i = t, k.__h.push(n));
}
function gt(e) {
  return Ee = 5, _e(function() {
    return { current: e };
  }, []);
}
function ko(e, t, n) {
  Ee = 6, mt(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(e));
}
function _e(e, t) {
  var n = Ie(se++, 7);
  return an(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__;
}
function we(e, t) {
  return Ee = 8, _e(function() {
    return e;
  }, t);
}
function sn(e) {
  var t = k.context[e.__c], n = Ie(se++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(k)), t.props.value) : e.__;
}
function Ut(e, t) {
  p.useDebugValue && p.useDebugValue(t ? t(e) : e);
}
function xo() {
  var e = Ie(se++, 11);
  if (!e.__) {
    for (var t = k.__v; t !== null && !t.__m && t.__ !== null; )
      t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function Ao() {
  for (var e; e = Sr.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(et), e.__H.__h.forEach(Ft), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], p.__e(t, e.__v);
      }
}
p.__b = function(e) {
  k = null, bn && bn(e);
}, p.__r = function(e) {
  On && On(e), se = 0;
  var t = (k = e.__c).__H;
  t && (It === k ? (t.__h = [], k.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = Je, n.__N = n.i = void 0;
  })) : (t.__h.forEach(et), t.__h.forEach(Ft), t.__h = [], se = 0)), It = k;
}, p.diffed = function(e) {
  $n && $n(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Sr.push(t) !== 1 && wn === p.requestAnimationFrame || ((wn = p.requestAnimationFrame) || Ro)(Ao)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== Je && (n.__ = n.__V), n.i = void 0, n.__V = Je;
  })), It = k = null;
}, p.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(et), n.__h = n.__h.filter(function(r) {
        return !r.__ || Ft(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], p.__e(r, n.__v);
    }
  }), Nn && Nn(e, t);
}, p.unmount = function(e) {
  Tn && Tn(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      et(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && p.__e(t, n.__v));
};
var In = typeof requestAnimationFrame == "function";
function Ro(e) {
  var t, n = function() {
    clearTimeout(r), In && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  In && (t = requestAnimationFrame(n));
}
function et(e) {
  var t = k, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), k = t;
}
function Ft(e) {
  var t = k;
  e.__c = e.__(), k = t;
}
function an(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function wr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function br(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Bt(e, t) {
  for (var n in e)
    if (n !== "__source" && !(n in t))
      return !0;
  for (var r in t)
    if (r !== "__source" && e[r] !== t[r])
      return !0;
  return !1;
}
function Wt(e) {
  this.props = e;
}
function Lo(e, t) {
  function n(o) {
    var i = this.props.ref, s = i == o.ref;
    return !s && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !s : Bt(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, P(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(Wt.prototype = new z()).isPureReactComponent = !0, Wt.prototype.shouldComponentUpdate = function(e, t) {
  return Bt(this.props, e) || Bt(this.state, t);
};
var kn = p.__b;
p.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), kn && kn(e);
};
var Do = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function Po(e) {
  function t(n) {
    var r = br({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = Do, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var xn = function(e, t) {
  return e == null ? null : Q(Q(e).map(t));
}, Mo = { map: xn, forEach: xn, count: function(e) {
  return e ? Q(e).length : 0;
}, only: function(e) {
  var t = Q(e);
  if (t.length !== 1)
    throw "Children.only";
  return t[0];
}, toArray: Q }, Ho = p.__e;
p.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; )
      if ((o = i.__c) && o.__c)
        return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  Ho(e, t, n, r);
};
var An = p.unmount;
function Or(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = br({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return Or(r, t, n);
  })), e;
}
function $r(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return $r(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function tt() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Nr(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Uo(e) {
  var t, n, r;
  function o(i) {
    if (t || (t = e()).then(function(s) {
      n = s.default || s;
    }, function(s) {
      r = s;
    }), r)
      throw r;
    if (!n)
      throw t;
    return P(n, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function De() {
  this.u = null, this.o = null;
}
p.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), An && An(e);
}, (tt.prototype = new z()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var o = Nr(r.__v), i = !1, s = function() {
    i || (i = !0, n.__R = null, o ? o(a) : a());
  };
  n.__R = s;
  var a = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var l = r.state.__a;
        r.__v.__k[0] = $r(l, l.__c.__P, l.__c.__O);
      }
      var u;
      for (r.setState({ __a: r.__b = null }); u = r.t.pop(); )
        u.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(s, s);
}, tt.prototype.componentWillUnmount = function() {
  this.t = [];
}, tt.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Or(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && P(B, null, e.fallback);
  return o && (o.__u &= -33), [P(B, null, t.__a ? null : e.children), o];
};
var Rn = function(e, t, n) {
  if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (n = e.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      e.u = n = n[2];
    }
};
function Fo(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function Bo(e) {
  var t = this, n = e.i;
  t.componentWillUnmount = function() {
    oe(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== n && t.componentWillUnmount(), t.l || (t.i = n, t.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r);
  } }), oe(P(Fo, { context: t.context }, e.__v), t.l);
}
function Wo(e, t) {
  var n = P(Bo, { __v: e, i: t });
  return n.containerInfo = t, n;
}
(De.prototype = new z()).__a = function(e) {
  var t = this, n = Nr(t.__v), r = t.o.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), Rn(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, De.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = Q(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; )
    this.o.set(t[n], this.u = [1, 0, this.u]);
  return e.children;
}, De.prototype.componentDidUpdate = De.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, n) {
    Rn(e, n, t);
  });
};
var Tr = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Go = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, zo = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Vo = /[A-Z0-9]/g, jo = typeof document < "u", Yo = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function Zo(e, t, n) {
  return t.__k == null && (t.textContent = ""), oe(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function qo(e, t, n) {
  return nn(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
z.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(z.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Ln = p.event;
function Xo() {
}
function Ko() {
  return this.cancelBubble;
}
function Qo() {
  return this.defaultPrevented;
}
p.event = function(e) {
  return Ln && (e = Ln(e)), e.persist = Xo, e.isPropagationStopped = Ko, e.isDefaultPrevented = Qo, e.nativeEvent = e;
};
var cn, Jo = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Dn = p.vnode;
p.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {};
    for (var i in n) {
      var s = n[i];
      if (!(i === "value" && "defaultValue" in n && s == null || jo && i === "children" && r === "noscript" || i === "class" || i === "className")) {
        var a = i.toLowerCase();
        i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && s === !0 ? s = "" : a === "ondoubleclick" ? i = "ondblclick" : a !== "onchange" || r !== "input" && r !== "textarea" || Yo(n.type) ? a === "onfocus" ? i = "onfocusin" : a === "onblur" ? i = "onfocusout" : zo.test(i) ? i = a : r.indexOf("-") === -1 && Go.test(i) ? i = i.replace(Vo, "-$&").toLowerCase() : s === null && (s = void 0) : a = i = "oninput", a === "oninput" && o[i = a] && (i = "oninputCapture"), o[i] = s;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = Q(n.children).forEach(function(l) {
      l.props.selected = o.value.indexOf(l.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = Q(n.children).forEach(function(l) {
      l.props.selected = o.multiple ? o.defaultValue.indexOf(l.props.value) != -1 : o.defaultValue == l.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", Jo)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = Tr, Dn && Dn(e);
};
var Pn = p.__r;
p.__r = function(e) {
  Pn && Pn(e), cn = e.__c;
};
var Mn = p.diffed;
p.diffed = function(e) {
  Mn && Mn(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), cn = null;
};
var ei = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return cn.__n[e.__c].props.value;
} } } };
function ti(e) {
  return P.bind(null, e);
}
function yt(e) {
  return !!e && e.$$typeof === Tr;
}
function ni(e) {
  return yt(e) && e.type === B;
}
function ri(e) {
  return yt(e) ? rn.apply(null, arguments) : e;
}
function oi(e) {
  return !!e.__k && (oe(null, e), !0);
}
function ii(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var si = function(e, t) {
  return e(t);
}, ai = function(e, t) {
  return e(t);
}, ci = B;
function Ir(e) {
  e();
}
function li(e) {
  return e;
}
function ui() {
  return [!1, Ir];
}
var fi = mt, di = yt;
function hi(e, t) {
  var n = t(), r = H({ h: { __: n, v: t } }), o = r[0].h, i = r[1];
  return mt(function() {
    o.__ = n, o.v = t, kt(o) && i({ h: o });
  }, [e, n, t]), ae(function() {
    return kt(o) && i({ h: o }), e(function() {
      kt(o) && i({ h: o });
    });
  }, [e]), n;
}
function kt(e) {
  var t, n, r = e.v, o = e.__;
  try {
    var i = r();
    return !((t = o) === (n = i) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
}
var M = { useState: H, useId: xo, useReducer: Er, useEffect: ae, useLayoutEffect: mt, useInsertionEffect: fi, useTransition: ui, useDeferredValue: li, useSyncExternalStore: hi, startTransition: Ir, useRef: gt, useImperativeHandle: ko, useMemo: _e, useCallback: we, useContext: sn, useDebugValue: Ut, version: "17.0.2", Children: Mo, render: Zo, hydrate: qo, unmountComponentAtNode: oi, createPortal: Wo, createElement: P, createContext: vo, createFactory: ti, cloneElement: ri, createRef: _o, Fragment: B, isValidElement: yt, isElement: di, isFragment: ni, findDOMNode: ii, Component: z, PureComponent: Wt, memo: Lo, forwardRef: Po, flushSync: ai, unstable_batchedUpdates: si, StrictMode: ci, Suspense: tt, SuspenseList: De, lazy: Uo, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ei };
function _i(e) {
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
  var s = Object.keys(t), a = Object.keys(n);
  if (s.length !== a.length)
    return !1;
  for (var l = Object.prototype.hasOwnProperty.bind(n), u = 0; u < s.length; u++) {
    var f = s[u];
    if (!l(f))
      return !1;
    var c = t[f], _ = n[f];
    if (i = r ? r.call(o, c, _, f) : void 0, i === !1 || i === void 0 && c !== _)
      return !1;
  }
  return !0;
};
const mi = /* @__PURE__ */ _i(pi);
var I = "-ms-", Fe = "-moz-", $ = "-webkit-", kr = "comm", vt = "rule", ln = "decl", gi = "@import", xr = "@keyframes", yi = "@layer", vi = Math.abs, un = String.fromCharCode, Gt = Object.assign;
function Ci(e, t) {
  return R(e, 0) ^ 45 ? (((t << 2 ^ R(e, 0)) << 2 ^ R(e, 1)) << 2 ^ R(e, 2)) << 2 ^ R(e, 3) : 0;
}
function Ar(e) {
  return e.trim();
}
function q(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function S(e, t, n) {
  return e.replace(t, n);
}
function nt(e, t) {
  return e.indexOf(t);
}
function R(e, t) {
  return e.charCodeAt(t) | 0;
}
function be(e, t, n) {
  return e.slice(t, n);
}
function Y(e) {
  return e.length;
}
function Rr(e) {
  return e.length;
}
function Pe(e, t) {
  return t.push(e), e;
}
function Si(e, t) {
  return e.map(t).join("");
}
function Hn(e, t) {
  return e.filter(function(n) {
    return !q(n, t);
  });
}
var Ct = 1, Oe = 1, Lr = 0, W = 0, x = 0, ke = "";
function St(e, t, n, r, o, i, s, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Ct, column: Oe, length: s, return: "", siblings: a };
}
function te(e, t) {
  return Gt(St("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Ce(e) {
  for (; e.root; )
    e = te(e.root, { children: [e] });
  Pe(e, e.siblings);
}
function Ei() {
  return x;
}
function wi() {
  return x = W > 0 ? R(ke, --W) : 0, Oe--, x === 10 && (Oe = 1, Ct--), x;
}
function V() {
  return x = W < Lr ? R(ke, W++) : 0, Oe++, x === 10 && (Oe = 1, Ct++), x;
}
function pe() {
  return R(ke, W);
}
function rt() {
  return W;
}
function Et(e, t) {
  return be(ke, e, t);
}
function zt(e) {
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
function bi(e) {
  return Ct = Oe = 1, Lr = Y(ke = e), W = 0, [];
}
function Oi(e) {
  return ke = "", e;
}
function xt(e) {
  return Ar(Et(W - 1, Vt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function $i(e) {
  for (; (x = pe()) && x < 33; )
    V();
  return zt(e) > 2 || zt(x) > 3 ? "" : " ";
}
function Ni(e, t) {
  for (; --t && V() && !(x < 48 || x > 102 || x > 57 && x < 65 || x > 70 && x < 97); )
    ;
  return Et(e, rt() + (t < 6 && pe() == 32 && V() == 32));
}
function Vt(e) {
  for (; V(); )
    switch (x) {
      case e:
        return W;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Vt(x);
        break;
      case 40:
        e === 41 && Vt(e);
        break;
      case 92:
        V();
        break;
    }
  return W;
}
function Ti(e, t) {
  for (; V() && e + x !== 57; )
    if (e + x === 84 && pe() === 47)
      break;
  return "/*" + Et(t, W - 1) + "*" + un(e === 47 ? e : V());
}
function Ii(e) {
  for (; !zt(pe()); )
    V();
  return Et(e, W);
}
function ki(e) {
  return Oi(ot("", null, null, null, [""], e = bi(e), 0, [0], e));
}
function ot(e, t, n, r, o, i, s, a, l) {
  for (var u = 0, f = 0, c = s, _ = 0, h = 0, g = 0, C = 1, E = 1, m = 1, y = 0, O = "", N = o, T = i, w = r, v = O; E; )
    switch (g = y, y = V()) {
      case 40:
        if (g != 108 && R(v, c - 1) == 58) {
          nt(v += S(xt(y), "&", "&\f"), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        v += xt(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        v += $i(g);
        break;
      case 92:
        v += Ni(rt() - 1, 7);
        continue;
      case 47:
        switch (pe()) {
          case 42:
          case 47:
            Pe(xi(Ti(V(), rt()), t, n, l), l);
            break;
          default:
            v += "/";
        }
        break;
      case 123 * C:
        a[u++] = Y(v) * m;
      case 125 * C:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            E = 0;
          case 59 + f:
            m == -1 && (v = S(v, /\f/g, "")), h > 0 && Y(v) - c && Pe(h > 32 ? Fn(v + ";", r, n, c - 1, l) : Fn(S(v, " ", "") + ";", r, n, c - 2, l), l);
            break;
          case 59:
            v += ";";
          default:
            if (Pe(w = Un(v, t, n, u, f, o, a, O, N = [], T = [], c, i), i), y === 123)
              if (f === 0)
                ot(v, t, w, w, N, i, c, a, T);
              else
                switch (_ === 99 && R(v, 3) === 110 ? 100 : _) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ot(e, w, w, r && Pe(Un(e, w, w, 0, 0, o, a, O, o, N = [], c, T), T), o, T, c, a, r ? N : T);
                    break;
                  default:
                    ot(v, w, w, w, [""], T, 0, a, T);
                }
        }
        u = f = h = 0, C = m = 1, O = v = "", c = s;
        break;
      case 58:
        c = 1 + Y(v), h = g;
      default:
        if (C < 1) {
          if (y == 123)
            --C;
          else if (y == 125 && C++ == 0 && wi() == 125)
            continue;
        }
        switch (v += un(y), y * C) {
          case 38:
            m = f > 0 ? 1 : (v += "\f", -1);
            break;
          case 44:
            a[u++] = (Y(v) - 1) * m, m = 1;
            break;
          case 64:
            pe() === 45 && (v += xt(V())), _ = pe(), f = c = Y(O = v += Ii(rt())), y++;
            break;
          case 45:
            g === 45 && Y(v) == 2 && (C = 0);
        }
    }
  return i;
}
function Un(e, t, n, r, o, i, s, a, l, u, f, c) {
  for (var _ = o - 1, h = o === 0 ? i : [""], g = Rr(h), C = 0, E = 0, m = 0; C < r; ++C)
    for (var y = 0, O = be(e, _ + 1, _ = vi(E = s[C])), N = e; y < g; ++y)
      (N = Ar(E > 0 ? h[y] + " " + O : S(O, /&\f/g, h[y]))) && (l[m++] = N);
  return St(e, t, n, o === 0 ? vt : a, l, u, f, c);
}
function xi(e, t, n, r) {
  return St(e, t, n, kr, un(Ei()), be(e, 2, -2), 0, r);
}
function Fn(e, t, n, r, o) {
  return St(e, t, n, ln, be(e, 0, r), be(e, r + 1, -1), r, o);
}
function Dr(e, t, n) {
  switch (Ci(e, t)) {
    case 5103:
      return $ + "print-" + e + e;
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
      return $ + e + e;
    case 4789:
      return Fe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return $ + e + Fe + e + I + e + e;
    case 5936:
      switch (R(e, t + 11)) {
        case 114:
          return $ + e + I + S(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return $ + e + I + S(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return $ + e + I + S(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return $ + e + I + e + e;
    case 6165:
      return $ + e + I + "flex-" + e + e;
    case 5187:
      return $ + e + S(e, /(\w+).+(:[^]+)/, $ + "box-$1$2" + I + "flex-$1$2") + e;
    case 5443:
      return $ + e + I + "flex-item-" + S(e, /flex-|-self/g, "") + (q(e, /flex-|baseline/) ? "" : I + "grid-row-" + S(e, /flex-|-self/g, "")) + e;
    case 4675:
      return $ + e + I + "flex-line-pack" + S(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return $ + e + I + S(e, "shrink", "negative") + e;
    case 5292:
      return $ + e + I + S(e, "basis", "preferred-size") + e;
    case 6060:
      return $ + "box-" + S(e, "-grow", "") + $ + e + I + S(e, "grow", "positive") + e;
    case 4554:
      return $ + S(e, /([^-])(transform)/g, "$1" + $ + "$2") + e;
    case 6187:
      return S(S(S(e, /(zoom-|grab)/, $ + "$1"), /(image-set)/, $ + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return S(e, /(image-set\([^]*)/, $ + "$1$`$1");
    case 4968:
      return S(S(e, /(.+:)(flex-)?(.*)/, $ + "box-pack:$3" + I + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + $ + e + e;
    case 4200:
      if (!q(e, /flex-|baseline/))
        return I + "grid-column-align" + be(e, t) + e;
      break;
    case 2592:
    case 3360:
      return I + S(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, q(r.props, /grid-\w+-end/);
      }) ? ~nt(e + (n = n[t].value), "span") ? e : I + S(e, "-start", "") + e + I + "grid-row-span:" + (~nt(n, "span") ? q(n, /\d+/) : +q(n, /\d+/) - +q(e, /\d+/)) + ";" : I + S(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return q(r.props, /grid-\w+-start/);
      }) ? e : I + S(S(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return S(e, /(.+)-inline(.+)/, $ + "$1$2") + e;
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
            return S(e, /(.+:)(.+)-([^]+)/, "$1" + $ + "$2-$3$1" + Fe + (R(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~nt(e, "stretch") ? Dr(S(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return S(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, a, l, u) {
        return I + o + ":" + i + u + (s ? I + o + "-span:" + (a ? l : +l - +i) + u : "") + e;
      });
    case 4949:
      if (R(e, t + 6) === 121)
        return S(e, ":", ":" + $) + e;
      break;
    case 6444:
      switch (R(e, R(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return S(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + $ + (R(e, 14) === 45 ? "inline-" : "") + "box$3$1" + $ + "$2$3$1" + I + "$2box$3") + e;
        case 100:
          return S(e, ":", ":" + I) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return S(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function lt(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Ai(e, t, n, r) {
  switch (e.type) {
    case yi:
      if (e.children.length)
        break;
    case gi:
    case ln:
      return e.return = e.return || e.value;
    case kr:
      return "";
    case xr:
      return e.return = e.value + "{" + lt(e.children, r) + "}";
    case vt:
      if (!Y(e.value = e.props.join(",")))
        return "";
  }
  return Y(n = lt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Ri(e) {
  var t = Rr(e);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, o, i) || "";
    return s;
  };
}
function Li(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Di(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case ln:
        e.return = Dr(e.value, e.length, n);
        return;
      case xr:
        return lt([te(e, { value: S(e.value, "@", "@" + $) })], r);
      case vt:
        if (e.length)
          return Si(n = e.props, function(o) {
            switch (q(o, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Ce(te(e, { props: [S(o, /:(read-\w+)/, ":" + Fe + "$1")] })), Ce(te(e, { props: [o] })), Gt(e, { props: Hn(n, r) });
                break;
              case "::placeholder":
                Ce(te(e, { props: [S(o, /:(plac\w+)/, ":" + $ + "input-$1")] })), Ce(te(e, { props: [S(o, /:(plac\w+)/, ":" + Fe + "$1")] })), Ce(te(e, { props: [S(o, /:(plac\w+)/, I + "input-$1")] })), Ce(te(e, { props: [o] })), Gt(e, { props: Hn(n, r) });
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
}, b = {}, me = typeof process < "u" && b !== void 0 && (b.REACT_APP_SC_ATTR || b.SC_ATTR) || "data-styled", fn = typeof window < "u" && "HTMLElement" in window, Mi = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && b !== void 0 && b.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && b.REACT_APP_SC_DISABLE_SPEEDY !== "" ? b.REACT_APP_SC_DISABLE_SPEEDY !== "false" && b.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && b !== void 0 && b.SC_DISABLE_SPEEDY !== void 0 && b.SC_DISABLE_SPEEDY !== "" ? b.SC_DISABLE_SPEEDY !== "false" && b.SC_DISABLE_SPEEDY : b.NODE_ENV !== "production"), Hi = {}, Bn = /invalid hook call/i, Xe = /* @__PURE__ */ new Set(), Pr = function(e, t) {
  if (b.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(s) {
        for (var a = [], l = 1; l < arguments.length; l++)
          a[l - 1] = arguments[l];
        Bn.test(s) ? (i = !1, Xe.delete(r)) : o.apply(void 0, ie([s], a, !1));
      }, gt(), i && !Xe.has(r) && (console.warn(r), Xe.add(r));
    } catch (s) {
      Bn.test(s.message) && Xe.delete(r);
    } finally {
      console.error = o;
    }
  }
}, wt = Object.freeze([]), $e = Object.freeze({});
function Mr(e, t, n) {
  return n === void 0 && (n = $e), e.theme !== n.theme && e.theme || t || n.theme;
}
var jt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Ui = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Fi = /(^-|-$)/g;
function Wn(e) {
  return e.replace(Ui, "-").replace(Fi, "");
}
var Bi = /(a)(d)/gi, Gn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Yt(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    n = Gn(t % 52) + n;
  return (Gn(t % 52) + n).replace(Bi, "$1-$2");
}
var At, fe = function(e, t) {
  for (var n = t.length; n; )
    e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Hr = function(e) {
  return fe(5381, e);
};
function dn(e) {
  return Yt(Hr(e) >>> 0);
}
function Ur(e) {
  return b.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Rt(e) {
  return typeof e == "string" && (b.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Fr = typeof Symbol == "function" && Symbol.for, Br = Fr ? Symbol.for("react.memo") : 60115, Wi = Fr ? Symbol.for("react.forward_ref") : 60112, Gi = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, zi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Wr = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Vi = ((At = {})[Wi] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, At[Br] = Wr, At);
function zn(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Br ? Wr : "$$typeof" in e ? Vi[e.$$typeof] : Gi;
  var t;
}
var ji = Object.defineProperty, Yi = Object.getOwnPropertyNames, Vn = Object.getOwnPropertySymbols, Zi = Object.getOwnPropertyDescriptor, qi = Object.getPrototypeOf, jn = Object.prototype;
function Gr(e, t, n) {
  if (typeof t != "string") {
    if (jn) {
      var r = qi(t);
      r && r !== jn && Gr(e, r, n);
    }
    var o = Yi(t);
    Vn && (o = o.concat(Vn(t)));
    for (var i = zn(e), s = zn(t), a = 0; a < o.length; ++a) {
      var l = o[a];
      if (!(l in zi || n && n[l] || s && l in s || i && l in i)) {
        var u = Zi(t, l);
        try {
          ji(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
function ge(e) {
  return typeof e == "function";
}
function hn(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function de(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function ut(e, t) {
  if (e.length === 0)
    return "";
  for (var n = e[0], r = 1; r < e.length; r++)
    n += t ? t + e[r] : e[r];
  return n;
}
function Ne(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Zt(e, t, n) {
  if (n === void 0 && (n = !1), !n && !Ne(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++)
      e[r] = Zt(e[r], t[r]);
  else if (Ne(t))
    for (var r in t)
      e[r] = Zt(e[r], t[r]);
  return e;
}
function _n(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Xi = b.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1)
    r.push(e[o]);
  return r.forEach(function(s) {
    n = n.replace(/%[a-z]/, s);
  }), n;
}
function Z(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return b.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Ki.apply(void 0, ie([Xi[e]], t, !1)).trim());
}
var Qi = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var n = 0, r = 0; r < t; r++)
      n += this.groupSizes[r];
    return n;
  }, e.prototype.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; t >= i; )
        if ((i <<= 1) < 0)
          throw Z(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(r), this.length = i;
      for (var s = o; s < i; s++)
        this.groupSizes[s] = 0;
    }
    for (var a = this.indexOfGroup(t + 1), l = (s = 0, n.length); s < l; s++)
      this.tag.insertRule(a, n[s]) && (this.groupSizes[t]++, a++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], r = this.indexOfGroup(t), o = r + n;
      this.groupSizes[t] = 0;
      for (var i = r; i < o; i++)
        this.tag.deleteRule(r);
    }
  }, e.prototype.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return n;
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, s = o; s < i; s++)
      n += "".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);
    return n;
  }, e;
}(), it = /* @__PURE__ */ new Map(), ft = /* @__PURE__ */ new Map(), st = 1, Ke = function(e) {
  if (it.has(e))
    return it.get(e);
  for (; ft.has(st); )
    st++;
  var t = st++;
  if (b.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1073741824))
    throw Z(16, "".concat(t));
  return it.set(e, t), ft.set(t, e), t;
}, Ji = function(e, t) {
  st = t + 1, it.set(e, t), ft.set(t, e);
}, es = "style[".concat(me, "][").concat("data-styled-version", '="').concat("6.1.1", '"]'), ts = new RegExp("^".concat(me, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ns = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++)
    (r = o[i]) && e.registerName(t, r);
}, rs = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(`/*!sc*/
`), o = [], i = 0, s = r.length; i < s; i++) {
    var a = r[i].trim();
    if (a) {
      var l = a.match(ts);
      if (l) {
        var u = 0 | parseInt(l[1], 10), f = l[2];
        u !== 0 && (Ji(f, u), ns(e, f, l[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else
        o.push(a);
    }
  }
};
function os() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var zr = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(a) {
    var l = Array.from(a.querySelectorAll("style[".concat(me, "]")));
    return l[l.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(me, "active"), r.setAttribute("data-styled-version", "6.1.1");
  var s = os();
  return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r;
}, is = function() {
  function e(t) {
    this.element = zr(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet)
        return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var s = r[o];
        if (s.ownerNode === n)
          return s;
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
}(), ss = function() {
  function e(t) {
    this.element = zr(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), as = function() {
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
}(), Yn = fn, cs = { isServer: !fn, useCSSOMInjection: !Mi }, dt = function() {
  function e(t, n, r) {
    t === void 0 && (t = $e), n === void 0 && (n = {});
    var o = this;
    this.options = L(L({}, cs), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && fn && Yn && (Yn = !1, function(i) {
      for (var s = document.querySelectorAll(es), a = 0, l = s.length; a < l; a++) {
        var u = s[a];
        u && u.getAttribute(me) !== "active" && (rs(i, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this)), _n(this, function() {
      return function(i) {
        for (var s = i.getTag(), a = s.length, l = "", u = function(c) {
          var _ = function(m) {
            return ft.get(m);
          }(c);
          if (_ === void 0)
            return "continue";
          var h = i.names.get(_), g = s.getGroup(c);
          if (h === void 0 || g.length === 0)
            return "continue";
          var C = "".concat(me, ".g").concat(c, '[id="').concat(_, '"]'), E = "";
          h !== void 0 && h.forEach(function(m) {
            m.length > 0 && (E += "".concat(m, ","));
          }), l += "".concat(g).concat(C, '{content:"').concat(E, '"}').concat(`/*!sc*/
`);
        }, f = 0; f < a; f++)
          u(f);
        return l;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return Ke(t);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(L(L({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new as(o) : r ? new is(o) : new ss(o);
    }(this.options), new Qi(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (Ke(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(Ke(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Ke(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), ls = /&/g, us = /^\s*\/\/.*$/gm;
function Vr(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = Vr(n.children, t)), n;
  });
}
function jr(e) {
  var t, n, r, o = e === void 0 ? $e : e, i = o.options, s = i === void 0 ? $e : i, a = o.plugins, l = a === void 0 ? wt : a, u = function(_, h, g) {
    return g === n || g.startsWith(n) && g.endsWith(n) && g.replaceAll(n, "").length > 0 ? ".".concat(t) : _;
  }, f = l.slice();
  f.push(function(_) {
    _.type === vt && _.value.includes("&") && (_.props[0] = _.props[0].replace(ls, n).replace(r, u));
  }), s.prefix && f.push(Di), f.push(Ai);
  var c = function(_, h, g, C) {
    h === void 0 && (h = ""), g === void 0 && (g = ""), C === void 0 && (C = "&"), t = C, n = h, r = new RegExp("\\".concat(n, "\\b"), "g");
    var E = _.replace(us, ""), m = ki(g || h ? "".concat(g, " ").concat(h, " { ").concat(E, " }") : E);
    s.namespace && (m = Vr(m, s.namespace));
    var y = [];
    return lt(m, Ri(f.concat(Li(function(O) {
      return y.push(O);
    })))), y;
  };
  return c.hash = l.length ? l.reduce(function(_, h) {
    return h.name || Z(15), fe(_, h.name);
  }, 5381).toString() : "", c;
}
var fs = new dt(), qt = jr(), pn = M.createContext({ shouldForwardProp: void 0, styleSheet: fs, stylis: qt });
pn.Consumer;
var ds = M.createContext(void 0);
function ht() {
  return sn(pn);
}
function hs(e) {
  var t = H(e.stylisPlugins), n = t[0], r = t[1], o = ht().styleSheet, i = _e(function() {
    var l = o;
    return e.sheet ? l = e.sheet : e.target && (l = l.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (l = l.reconstructWithOptions({ useCSSOMInjection: !1 })), l;
  }, [e.disableCSSOMInjection, e.sheet, e.target, o]), s = _e(function() {
    return jr({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: n });
  }, [e.enableVendorPrefixes, e.namespace, n]);
  ae(function() {
    mi(n, e.stylisPlugins) || r(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var a = _e(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: s };
  }, [e.shouldForwardProp, i, s]);
  return M.createElement(pn.Provider, { value: a }, M.createElement(ds.Provider, { value: s }, e.children));
}
var Xt = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = qt);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, _n(this, function() {
      throw Z(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = qt), this.name + t.hash;
  }, e;
}(), _s = function(e) {
  return e >= "A" && e <= "Z";
};
function Zn(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-")
      return e;
    _s(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Yr = function(e) {
  return e == null || e === !1 || e === "";
}, Zr = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !Yr(i) && (Array.isArray(i) && i.isCss || ge(i) ? r.push("".concat(Zn(o), ":"), i, ";") : Ne(i) ? r.push.apply(r, ie(ie(["".concat(o, " {")], Zr(i), !1), ["}"], !1)) : r.push("".concat(Zn(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in Pi || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function re(e, t, n, r) {
  if (Yr(e))
    return [];
  if (hn(e))
    return [".".concat(e.styledComponentId)];
  if (ge(e)) {
    if (!ge(i = e) || i.prototype && i.prototype.isReactComponent || !t)
      return [e];
    var o = e(t);
    return b.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Xt || Ne(o) || o === null || console.error("".concat(Ur(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), re(o, t, n, r);
  }
  var i;
  return e instanceof Xt ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Ne(e) ? Zr(e) : Array.isArray(e) ? Array.prototype.concat.apply(wt, e.map(function(s) {
    return re(s, t, n, r);
  })) : [e.toString()];
}
function qr(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (ge(n) && !hn(n))
      return !1;
  }
  return !0;
}
var ps = Hr("6.1.1"), ms = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = b.NODE_ENV === "production" && (r === void 0 || r.isStatic) && qr(t), this.componentId = n, this.baseHash = fe(ps, n), this.baseStyle = r, dt.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash)
      if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId))
        o = de(o, this.staticRulesId);
      else {
        var i = ut(re(this.rules, t, n, r)), s = Yt(fe(this.baseHash, i) >>> 0);
        if (!n.hasNameForId(this.componentId, s)) {
          var a = r(i, ".".concat(s), void 0, this.componentId);
          n.insertRules(this.componentId, s, a);
        }
        o = de(o, s), this.staticRulesId = s;
      }
    else {
      for (var l = fe(this.baseHash, r.hash), u = "", f = 0; f < this.rules.length; f++) {
        var c = this.rules[f];
        if (typeof c == "string")
          u += c, b.NODE_ENV !== "production" && (l = fe(l, c));
        else if (c) {
          var _ = ut(re(c, t, n, r));
          l = fe(l, _ + f), u += _;
        }
      }
      if (u) {
        var h = Yt(l >>> 0);
        n.hasNameForId(this.componentId, h) || n.insertRules(this.componentId, h, r(u, ".".concat(h), void 0, this.componentId)), o = de(o, h);
      }
    }
    return o;
  }, e;
}(), Te = M.createContext(void 0);
Te.Consumer;
function Xr() {
  var e = sn(Te);
  if (!e)
    throw Z(18);
  return e;
}
function gs(e) {
  var t = M.useContext(Te), n = _e(function() {
    return function(r, o) {
      if (!r)
        throw Z(14);
      if (ge(r)) {
        var i = r(o);
        if (b.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object"))
          throw Z(7);
        return i;
      }
      if (Array.isArray(r) || typeof r != "object")
        throw Z(8);
      return o ? L(L({}, o), r) : r;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? M.createElement(Te.Provider, { value: n }, e.children) : null;
}
var Lt = {}, qn = /* @__PURE__ */ new Set();
function ys(e, t, n) {
  var r = hn(e), o = e, i = !Rt(e), s = t.attrs, a = s === void 0 ? wt : s, l = t.componentId, u = l === void 0 ? function(N, T) {
    var w = typeof N != "string" ? "sc" : Wn(N);
    Lt[w] = (Lt[w] || 0) + 1;
    var v = "".concat(w, "-").concat(dn("6.1.1" + w + Lt[w]));
    return T ? "".concat(T, "-").concat(v) : v;
  }(t.displayName, t.parentComponentId) : l, f = t.displayName, c = f === void 0 ? function(N) {
    return Rt(N) ? "styled.".concat(N) : "Styled(".concat(Ur(N), ")");
  }(e) : f, _ = t.displayName && t.componentId ? "".concat(Wn(t.displayName), "-").concat(t.componentId) : t.componentId || u, h = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, g = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var C = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var E = t.shouldForwardProp;
      g = function(N, T) {
        return C(N, T) && E(N, T);
      };
    } else
      g = C;
  }
  var m = new ms(n, _, r ? o.componentStyle : void 0);
  function y(N, T) {
    return function(w, v, G) {
      var A = w.attrs, ye = w.componentStyle, io = w.defaultProps, so = w.foldedComponentIds, mn = w.styledComponentId, ao = w.target, co = M.useContext(Te), lo = ht(), Ot = w.shouldForwardProp || lo.shouldForwardProp;
      b.NODE_ENV !== "production" && Ut(mn);
      var J = function(Ve, Re, je) {
        for (var ve, le = L(L({}, Re), { className: void 0, theme: je }), Tt = 0; Tt < Ve.length; Tt += 1) {
          var Ye = ge(ve = Ve[Tt]) ? ve(le) : ve;
          for (var ee in Ye)
            le[ee] = ee === "className" ? de(le[ee], Ye[ee]) : ee === "style" ? L(L({}, le[ee]), Ye[ee]) : Ye[ee];
        }
        return Re.className && (le.className = de(le.className, Re.className)), le;
      }(A, v, Mr(v, co, io) || $e), xe = J.as || ao, Ae = {};
      for (var F in J)
        J[F] === void 0 || F[0] === "$" || F === "as" || F === "theme" || (F === "forwardedAs" ? Ae.as = J.forwardedAs : Ot && !Ot(F, xe) || (Ae[F] = J[F], Ot || b.NODE_ENV !== "development" || Io(F) || qn.has(F) || !jt.has(xe) || (qn.add(F), console.warn('styled-components: it looks like an unknown prop "'.concat(F, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var $t = function(Ve, Re) {
        var je = ht(), ve = Ve.generateAndInjectStyles(Re, je.styleSheet, je.stylis);
        return b.NODE_ENV !== "production" && Ut(ve), ve;
      }(ye, J);
      b.NODE_ENV !== "production" && w.warnTooManyClasses && w.warnTooManyClasses($t);
      var Nt = de(so, mn);
      return $t && (Nt += " " + $t), J.className && (Nt += " " + J.className), Ae[Rt(xe) && !jt.has(xe) ? "class" : "className"] = Nt, Ae.ref = G, P(xe, Ae);
    }(O, N, T);
  }
  y.displayName = c;
  var O = M.forwardRef(y);
  return O.attrs = h, O.componentStyle = m, O.displayName = c, O.shouldForwardProp = g, O.foldedComponentIds = r ? de(o.foldedComponentIds, o.styledComponentId) : "", O.styledComponentId = _, O.target = r ? o.target : e, Object.defineProperty(O, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(N) {
    this._foldedDefaultProps = r ? function(T) {
      for (var w = [], v = 1; v < arguments.length; v++)
        w[v - 1] = arguments[v];
      for (var G = 0, A = w; G < A.length; G++)
        Zt(T, A[G], !0);
      return T;
    }({}, o.defaultProps, N) : N;
  } }), b.NODE_ENV !== "production" && (Pr(c, _), O.warnTooManyClasses = /* @__PURE__ */ function(N, T) {
    var w = {}, v = !1;
    return function(G) {
      if (!v && (w[G] = !0, Object.keys(w).length >= 200)) {
        var A = T ? ' with the id of "'.concat(T, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(N).concat(A, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), v = !0, w = {};
      }
    };
  }(c, _)), _n(O, function() {
    return ".".concat(O.styledComponentId);
  }), i && Gr(O, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), O;
}
function Xn(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var Kn = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function bt(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  if (ge(e) || Ne(e)) {
    var r = e;
    return Kn(re(Xn(wt, ie([r], t, !0))));
  }
  var o = e;
  return t.length === 0 && o.length === 1 && typeof o[0] == "string" ? re(o) : Kn(re(Xn(o, t)));
}
function Kt(e, t, n) {
  if (n === void 0 && (n = $e), !t)
    throw Z(1, t);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++)
      i[s - 1] = arguments[s];
    return e(t, n, bt.apply(void 0, ie([o], i, !1)));
  };
  return r.attrs = function(o) {
    return Kt(e, t, L(L({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Kt(e, t, L(L({}, n), o));
  }, r;
}
var Kr = function(e) {
  return Kt(ys, e);
}, U = Kr;
jt.forEach(function(e) {
  U[e] = Kr(e);
});
var vs = function() {
  function e(t, n) {
    this.rules = t, this.componentId = n, this.isStatic = qr(t), dt.registerId(this.componentId + 1);
  }
  return e.prototype.createStyles = function(t, n, r, o) {
    var i = o(ut(re(this.rules, n, r, o)), ""), s = this.componentId + t;
    r.insertRules(s, s, i);
  }, e.prototype.removeStyles = function(t, n) {
    n.clearRules(this.componentId + t);
  }, e.prototype.renderStyles = function(t, n, r, o) {
    t > 2 && dt.registerId(this.componentId + t), this.removeStyles(t, r), this.createStyles(t, n, r, o);
  }, e;
}();
function Cs(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  var r = bt.apply(void 0, ie([e], t, !1)), o = "sc-global-".concat(dn(JSON.stringify(r))), i = new vs(r, o);
  b.NODE_ENV !== "production" && Pr(o);
  var s = function(l) {
    var u = ht(), f = M.useContext(Te), c = M.useRef(u.styleSheet.allocateGSInstance(o)).current;
    return b.NODE_ENV !== "production" && M.Children.count(l.children) && console.warn("The global style component ".concat(o, " was given child JSX. createGlobalStyle does not render children.")), b.NODE_ENV !== "production" && r.some(function(_) {
      return typeof _ == "string" && _.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), u.styleSheet.server && a(c, l, u.styleSheet, f, u.stylis), M.useLayoutEffect(function() {
      if (!u.styleSheet.server)
        return a(c, l, u.styleSheet, f, u.stylis), function() {
          return i.removeStyles(c, u.styleSheet);
        };
    }, [c, l, u.styleSheet, f, u.stylis]), null;
  };
  function a(l, u, f, c, _) {
    if (i.isStatic)
      i.renderStyles(l, Hi, f, _);
    else {
      var h = L(L({}, u), { theme: Mr(u, c, s.defaultProps) });
      i.renderStyles(l, h, f, _);
    }
  }
  return M.memo(s);
}
function ce(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  b.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = ut(bt.apply(void 0, ie([e], t, !1))), o = dn(r);
  return new Xt(o, r);
}
b.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Qe = "__sc-".concat(me, "__");
b.NODE_ENV !== "production" && b.NODE_ENV !== "test" && typeof window < "u" && (window[Qe] || (window[Qe] = 0), window[Qe] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Qe] += 1);
var Ss = 0;
function d(e, t, n, r, o, i) {
  var s, a, l = {};
  for (a in t)
    a == "ref" ? s = t[a] : l[a] = t[a];
  var u = { type: e, props: l, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --Ss, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (s = e.defaultProps))
    for (a in s)
      l[a] === void 0 && (l[a] = s[a]);
  return p.vnode && p.vnode(u), u;
}
const Qr = ({
  svgSize: e
}) => d("svg", {
  fill: "none",
  height: e,
  viewBox: "0 0 16 14",
  width: e,
  xmlns: "http://www.w3.org/2000/svg",
  children: d("path", {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })
}), j = {
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
}, Qn = 0.24, Es = 24, ws = 2, Jr = 14, bs = 0.0276;
var X = /* @__PURE__ */ ((e) => (e[e.S = 300] = "S", e[e.M = 400] = "M", e[e.L = 500] = "L", e[e.Default = 600] = "Default", e))(X || {});
const Me = {
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
}, Jn = {
  loading: {
    text: "Loading. Please wait.",
    visible: !0
  },
  done: {
    text: "Waiting for input...",
    visible: !0
  }
}, Os = {
  [D.CANDIDATE_SELECTION]: "Stay still…",
  [D.FACE_TOO_CLOSE]: "Move back",
  [D.FACE_TOO_FAR]: "Move closer",
  [D.FACE_CENTERING]: "Center your face",
  [D.FACE_NOT_PRESENT]: "Position your face into the circle",
  [D.SHARPNESS_TOO_LOW]: "Turn face against light",
  [D.BRIGHTNESS_TOO_LOW]: "Turn face against light",
  [D.BRIGHTNESS_TOO_HIGH]: "Less light needed",
  [D.DEVICE_PITCHED]: "Hold your phone at eye level",
  [D.LEFT_EYE_NOT_PRESENT]: "Position your face into the circle",
  [D.RIGHT_EYE_NOT_PRESENT]: "Position your face into the circle",
  [D.MOUTH_SCORE_TOO_HIGH]: "Keep neutral expression",
  [D.MOUTH_SCORE_TOO_LOW]: "Smile :)",
  [D.MOUTH_NOT_PRESENT]: "Position your face into the circle"
}, $s = {
  ...Os,
  [he.SMILE]: "Smile :)",
  [he.SMILE_CANDIDATE_SELECTION]: "Smile :)",
  [he.KEEP_NEUTRAL_EXPRESSION]: "Keep neutral expression"
}, Ns = "rgba(19, 19, 19, 0.5)", Ts = 34;
function er(e, t) {
  return Math.max(t, t + (e - 400) * bs + 2);
}
const eo = (e, t = Jr) => e ? e.width < e.height ? er(e.width, t) : er(e.height, t) : t, Is = (e) => e > X.Default ? Me[X.Default] : e > X.L ? Me[X.L] : e > X.M ? Me[X.M] : Me[X.S], ks = (e) => e ? Is(e.width) : Me[X.Default], xs = U.div`
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
`, As = U.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, Rs = U.p`
  background: ${(e) => e.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(e) => `${e.$fontSize}px`};
  line-height: 1em;
  max-width: 80%;
`, Qt = ({
  fontSize: e,
  Icon: t,
  isCameraReady: n,
  position: r = "absolute",
  text: o
}) => d(xs, {
  $isCameraReady: n,
  $position: r,
  children: d(As, {
    children: [t ? d(t, {
      svgSize: e * 2
    }) : null, d(Rs, {
      $fontSize: e,
      children: o
    })]
  })
}), to = ({
  fontSize: e,
  text: t = "An unknown error has occurred"
}) => d(Qt, {
  fontSize: e,
  Icon: Qr,
  position: "relative",
  text: t
});
class Ls extends z {
  constructor(t) {
    super(t), this.state = {
      hasError: !1
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(t) {
    return {
      hasError: !0
    };
  }
  componentDidCatch(t, n) {
    console.error(t, n);
  }
  render() {
    return this.state.hasError ? d(to, {
      fontSize: eo(this.props.videoElementSize),
      Icon: Qr,
      isCameraReady: !1
    }) : this.props.children;
  }
}
const Ds = Cs`
  [id^='x-dot'][id$='ui'] {
    font-family: ${(e) => e.theme.font.family};
    font-style: ${(e) => e.theme.font.style};
    font-weight: ${(e) => e.theme.font.weight};
  }
`, Ps = ({
  children: e,
  styleTarget: t,
  theme: n,
  videoElementSize: r
}) => d(hs, {
  target: t,
  children: d(gs, {
    theme: n,
    children: [d(Ds, {}), d(Ls, {
      videoElementSize: r,
      children: e
    })]
  })
}), Ge = (e, t) => {
  const n = gt(t);
  ae(() => {
    n.current = t;
  }, [t]), ae(
    () => {
      const r = (o) => n.current(o);
      return document.addEventListener(e, r), () => {
        document.removeEventListener(e, r);
      };
    },
    [e]
    // Re-run if eventName
  );
}, Ms = (e) => {
  const [t, n] = H(), r = we((o) => {
    var i;
    n((i = o.detail) == null ? void 0 : i.size);
  }, [n]);
  return Ge(e, r), t;
};
function Hs(e, t) {
  return e ? `${e}, ${t}` : t;
}
const Us = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, Fs = {
  family: "Montserrat, Arial, sans-serif",
  weight: "600",
  style: "normal",
  minimumSize: Jr
}, Le = {
  colors: Us,
  font: Fs
}, Bs = (e) => {
  var t;
  return e != null && e.theme ? {
    ...Le,
    ...e.theme,
    colors: {
      ...Le.colors,
      ...e.theme.colors
    },
    font: {
      ...Le.font,
      ...e.theme.font,
      family: Hs((t = e.theme.font) == null ? void 0 : t.family, Le.font.family)
    }
  } : Le;
}, Ws = 0.75, He = (e, t) => Math.hypot(t.x - e.x, t.y - e.y), tr = (e, t, n) => {
  const r = (t.x - e.x) * n, o = (t.y - e.y) * n;
  return {
    x: e.x + r,
    y: e.y + o
  };
}, nr = (e, t, n, r) => {
  const o = He(e, t);
  return n * r / o;
}, Gs = (e, t) => Math.min(e, t), zs = ({
  height: e,
  width: t
}) => {
  const n = Gs(t, e) * Ws, r = (t - n) / 2, o = (e - n) / 2;
  return {
    shiftX: r,
    shiftY: o,
    width: n,
    height: n
  };
}, Vs = (e) => {
  const {
    height: t,
    shiftX: n,
    shiftY: r,
    width: o
  } = zs(e);
  return {
    shiftX: n / e.width,
    shiftY: r / e.height,
    width: o / e.width,
    height: t / e.height
  };
}, no = (e, t) => {
  document.dispatchEvent(new CustomEvent(e, {
    detail: t
  }));
}, _t = class _t {
  constructor() {
    Ze(this, "lastDetails", {});
    Ze(this, "delayedTime", 0);
  }
  static getInstance() {
    return this._instance || (this._instance = new _t()), this._instance;
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
    this.isDetailChanged(t, n) && no(t, n);
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
Ze(_t, "_instance");
let Jt = _t;
Jt.getInstance();
const rr = (e, t) => {
  no(e, {
    instruction: t
  });
};
class js {
  static async getVideoInputDeviceList() {
    return (await navigator.mediaDevices.enumerateDevices()).filter((n) => n.kind === "videoinput");
  }
}
const Ys = () => {
  const [e, t] = H(!1);
  return ae(() => {
    (async () => {
      (await js.getVideoInputDeviceList()).length > 1 && t(!0);
    })();
  }, []), e;
}, Zs = ({
  size: e
}) => d("svg", {
  fill: "none",
  height: e,
  viewBox: "0 0 52 52",
  width: e,
  xmlns: "http://www.w3.org/2000/svg",
  children: [d("path", {
    d: "M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z",
    fill: "#131313",
    fillOpacity: "0.3"
  }), d("circle", {
    cx: "17.5",
    cy: "24.5",
    fill: "white",
    r: "1.5"
  }), d("path", {
    d: "M15 17H16C19.5 17 23 21 23 29C22.5 29 21.5 29 20 29C20 29 20.25 33 19.5 34.5C18.75 36 16 36 16 36H15",
    stroke: "white",
    strokeWidth: "2"
  }), d("circle", {
    fill: "white",
    r: "1.5",
    transform: "matrix(-1 0 0 1 34.5 24.5)"
  }), d("path", {
    d: "M37 17H36C32.5 17 29 21 29 29C29.5 29 30.5 29 32 29C32 29 31.75 33 32.5 34.5C33.25 36 36 36 36 36H37",
    stroke: "white",
    strokeWidth: "2"
  })]
}), qs = ({
  size: e
}) => d("svg", {
  fill: "none",
  height: e,
  viewBox: "0 0 52 52",
  width: "52",
  xmlns: "http://www.w3.org/2000/svg",
  children: [d("circle", {
    cx: "26",
    cy: "26",
    fill: "#131313",
    fillOpacity: "0.3",
    r: "26"
  }), d("path", {
    d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
    fill: "white"
  })]
}), ro = U.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(e) => e.$marginLeft ? `${e.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, Xs = ({
  marginLeft: e,
  size: t,
  ...n
}) => d(ro, {
  $marginLeft: e,
  ...n,
  children: d(Zs, {
    size: t
  })
}), Ks = ({
  marginLeft: e,
  size: t,
  ...n
}) => d(ro, {
  $marginLeft: e,
  ...n,
  children: d(qs, {
    size: t
  })
}), Qs = U.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.$padding}px`};
  z-index: 2;
`, Js = ({
  customControlEvent: e,
  isSwitchCameraDisabled: t,
  videoElementSize: n
}) => {
  const r = Ys(), {
    buttonPadding: o,
    iconSize: i,
    marginLeft: s
  } = ks(n), a = () => {
    rr(e, Ht.TOGGLE_MIRROR);
  };
  return d(Qs, {
    $padding: o,
    children: [r && d(Ks, {
      disabled: t,
      onClick: () => {
        rr(e, Ht.SWITCH_CAMERA);
      },
      size: i
    }), d(Xs, {
      marginLeft: r ? s : 0,
      onClick: a,
      size: i
    })]
  });
}, ea = "2.5s", ta = "0.3s", na = "linear", ra = ce`
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
const oa = U.div`
  position: absolute;
  left: 50%;

  ${(e) => e.$cssTop ? `top: ${e.$cssTop}%;` : ""}
  ${(e) => e.$cssBottom ? `bottom: ${e.$cssBottom}%;` : ""}
    ${(e) => e.$isAnimating && bt`
      animation: ${ra} ${ta}
        ${na} both;
      animation-delay: ${ea};

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
`, ia = U.div`
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
`, sa = ({
  children: e,
  cssBottom: t,
  cssTop: n,
  fontSize: r,
  isAnimating: o,
  isInCandidateSelection: i,
  isPortrait: s
}) => d(oa, {
  $cssBottom: t,
  $cssTop: n,
  $isAnimating: o,
  $isPortrait: s,
  children: d(ia, {
    $fontSize: r,
    $isInCandidateSelection: i,
    $wrap: e.length > Ts,
    children: e
  })
});
function aa(e) {
  return d("rect", {
    fill: "#000",
    ...e,
    rx: "50%"
  });
}
const ca = () => d("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: d("path", {
    d: "M2 240C2 108.556 108.556 2 240 2C371.444 2 478 108.556 478 240C478 371.444 371.444 478 240 478C108.556 478 2 371.444 2 240Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  })
}), la = () => d("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: d("path", {
    d: "M38.9231 240C38.9231 108.23 129.248 2 240 2C350.752 2 441.077 108.23 441.077 240C441.077 371.77 350.752 478 240 478C129.248 478 38.9231 371.77 38.9231 240Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  })
}), ua = () => d("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: d("path", {
    clipRule: "evenodd",
    d: "M123.592 81.0326C143.203 50.4946 180.289 34 240 34C299.711 34 336.797 50.4946 356.408 81.0326C375.742 111.138 377.681 154.313 368.661 207.051C371.545 208.577 374.834 210.748 377.278 215.028C380.075 219.925 381.612 227.297 380.77 239.048C379.202 260.93 372.883 270.75 366.157 276.198C363.521 278.333 360.842 279.765 358.659 280.932C358.141 281.209 357.651 281.471 357.196 281.724C354.727 283.097 353.459 284.114 352.94 285.588C346.115 312.745 335.656 325.235 326.992 335.581C325.711 337.111 324.469 338.595 323.283 340.072C318.736 345.738 315.077 351.244 313.058 359.018C311.036 366.806 310.62 377.042 312.887 392.189C323.28 427.534 349.601 445.607 379.548 458.155C380.567 458.582 381.047 459.754 380.62 460.773C380.193 461.792 379.021 462.271 378.002 461.845C347.548 449.083 319.871 430.304 309.01 393.182L308.972 393.052L308.952 392.918C306.617 377.396 306.974 366.534 309.187 358.012C311.409 349.454 315.459 343.431 320.164 337.568C321.377 336.057 322.636 334.552 323.926 333.011C332.525 322.737 342.484 310.837 349.08 284.533L349.099 284.458L349.124 284.385C350.161 281.284 352.747 279.621 355.253 278.228C355.794 277.927 356.344 277.632 356.902 277.333C359.061 276.176 361.329 274.961 363.639 273.09C369.248 268.547 375.264 259.921 376.78 238.762C377.594 227.404 376.048 220.94 373.805 217.012C371.594 213.141 368.56 211.453 365.547 209.952L364.214 209.287L364.469 207.818C373.737 154.637 371.701 112.248 353.043 83.194C334.485 54.2962 299.065 38 240 38C180.935 38 145.516 54.2962 126.958 83.194C108.3 112.248 106.264 154.637 115.531 207.818L115.787 209.287L114.453 209.952C111.441 211.453 108.406 213.141 106.196 217.012C103.953 220.94 102.406 227.404 103.22 238.762C104.736 259.921 110.753 268.547 116.361 273.09C118.672 274.961 120.94 276.176 123.099 277.333C123.656 277.632 124.206 277.927 124.748 278.228C127.254 279.621 129.84 281.284 130.877 284.385L130.901 284.458L130.92 284.533C137.517 310.837 147.476 322.737 156.074 333.011C157.364 334.552 158.624 336.057 159.837 337.568C164.542 343.431 168.592 349.454 170.814 358.012C173.026 366.534 173.384 377.396 171.048 392.918L171.028 393.052L170.99 393.182C160.129 430.304 132.452 449.083 101.998 461.845C100.979 462.271 99.8075 461.792 99.3806 460.773C98.9537 459.754 99.4335 458.582 100.452 458.155C130.399 445.607 156.721 427.534 167.113 392.189C169.381 377.042 168.964 366.806 166.942 359.018C164.924 351.244 161.264 345.738 156.717 340.072C155.532 338.595 154.29 337.111 153.008 335.581C144.345 325.235 133.886 312.745 127.061 285.588C126.541 284.114 125.273 283.097 122.804 281.724C122.349 281.471 121.859 281.209 121.341 280.932C119.159 279.765 116.479 278.333 113.844 276.198C107.117 270.75 100.798 260.93 99.2303 239.048C98.3883 227.297 99.9259 219.925 102.722 215.028C105.166 210.748 108.455 208.577 111.339 207.051C102.319 154.313 104.259 111.138 123.592 81.0326Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })
}), fa = () => d("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: d("rect", {
    height: "476",
    rx: "2",
    stroke: "currentColor",
    strokeDasharray: "48 48",
    strokeLinecap: "square",
    strokeWidth: "4",
    width: "476",
    x: "2",
    y: "2"
  })
}), da = () => d("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: d("rect", {
    height: "476",
    rx: "14",
    stroke: "currentColor",
    strokeDasharray: "24 24",
    strokeLinecap: "square",
    strokeWidth: "4",
    width: "476",
    x: "2",
    y: "2"
  })
}), ha = () => d("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: d("rect", {
    height: "476",
    rx: "14",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4",
    width: "476",
    x: "2",
    y: "2"
  })
}), _a = () => d("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: d("rect", {
    height: "476",
    rx: "2",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4",
    width: "476",
    x: "2",
    y: "2"
  })
}), pa = () => d("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: d("path", {
    clipRule: "evenodd",
    d: "M126.126 87.8654C147.739 56.7835 184.591 34.0001 239.665 34.0001C239.779 34.0001 239.891 34.0096 240 34.0279C240.109 34.0096 240.221 34.0001 240.335 34.0001C295.41 34.0001 332.261 56.7835 353.874 87.8654C375.428 118.862 381.724 157.957 376.086 190.544C373.539 205.262 371.039 233.823 376.056 253.971C380.828 273.135 387.879 290.154 393.431 303.54L393.491 303.685C396.23 310.287 398.627 316.064 400.16 320.726C400.933 323.077 401.511 325.214 401.797 327.079C402.073 328.879 402.11 330.618 401.637 332.107C399.79 339.478 396.615 344.943 392.398 348.881C388.174 352.825 383.031 355.122 377.446 356.355C366.388 358.799 353.231 357.133 341.237 355.551C340.93 355.51 340.623 355.47 340.317 355.43C334.586 354.672 329.126 353.951 324.151 353.668C318.894 353.368 314.374 353.574 310.799 354.649C307.298 355.702 304.789 357.558 303.304 360.596C301.785 363.704 301.203 368.322 302.207 375.153C309.297 399.432 323.779 413.44 341.432 422.745C356.457 430.665 373.692 435.144 390.741 439.575C393.916 440.401 397.085 441.224 400.232 442.068C401.298 442.354 401.931 443.451 401.645 444.518C401.359 445.585 400.262 446.218 399.196 445.932C396.115 445.106 392.991 444.294 389.842 443.477C372.804 439.052 355.041 434.44 339.567 426.283C321.093 416.546 305.757 401.713 298.328 376.139L298.29 376.01L298.271 375.877C297.181 368.587 297.678 362.998 299.71 358.839C301.787 354.59 305.326 352.119 309.647 350.819C313.895 349.541 318.973 349.366 324.378 349.674C329.508 349.966 335.107 350.706 340.788 351.457C341.112 351.5 341.436 351.543 341.76 351.585C353.925 353.19 366.342 354.713 376.583 352.45C381.65 351.33 386.088 349.3 389.668 345.957C393.241 342.621 396.083 337.86 397.773 331.072L397.791 330.998L397.815 330.925C398.022 330.302 398.087 329.272 397.843 327.686C397.605 326.133 397.102 324.232 396.36 321.976C394.875 317.458 392.525 311.794 389.74 305.081L389.737 305.073C384.19 291.701 377.028 274.428 372.174 254.937C366.952 233.964 369.571 204.733 372.144 189.862C377.623 158.197 371.48 120.191 350.59 90.149C329.759 60.1924 294.162 38.0001 240.335 38.0001C240.221 38.0001 240.109 37.9905 240 37.9722C239.891 37.9905 239.779 38.0001 239.665 38.0001C185.838 38.0001 150.241 60.1924 129.41 90.149C108.52 120.191 102.377 158.197 107.856 189.862C110.429 204.733 113.048 233.964 107.826 254.937C102.972 274.428 95.8101 291.701 90.2633 305.073L90.2607 305.079C87.4756 311.793 85.1256 317.458 83.6398 321.976C82.8977 324.232 82.3951 326.133 82.1567 327.686C81.9133 329.272 81.9778 330.302 82.1847 330.925L82.2088 330.998L82.2273 331.072C83.9176 337.86 86.7592 342.621 90.3324 345.957C93.9121 349.3 98.3505 351.33 103.417 352.45C113.658 354.713 126.075 353.19 138.24 351.585C138.564 351.543 138.888 351.5 139.212 351.457C144.893 350.706 150.492 349.966 155.622 349.674C161.027 349.366 166.105 349.541 170.353 350.819C174.674 352.119 178.213 354.59 180.29 358.839C182.323 362.998 182.819 368.587 181.73 375.877L181.71 376.01L181.672 376.139C174.243 401.713 158.907 416.546 140.433 426.283C124.959 434.44 107.196 439.052 90.1584 443.477C87.0093 444.294 83.8851 445.106 80.8046 445.932C79.7377 446.218 78.6409 445.585 78.3548 444.518C78.0687 443.451 78.7017 442.354 79.7685 442.068C82.9154 441.224 86.0842 440.401 89.2594 439.575C106.308 435.144 123.543 430.665 138.568 422.745C156.221 413.44 170.703 399.432 177.793 375.153C178.797 368.322 178.215 363.704 176.696 360.596C175.211 357.558 172.702 355.702 169.201 354.649C165.626 353.574 161.106 353.368 155.849 353.668C150.874 353.951 145.414 354.672 139.683 355.43C139.377 355.47 139.07 355.51 138.763 355.551C126.769 357.133 113.613 358.799 102.554 356.355C96.9695 355.122 91.8259 352.825 87.6024 348.881C83.3855 344.943 80.2095 339.478 78.3628 332.107C77.8896 330.618 77.9268 328.879 78.203 327.079C78.4892 325.214 79.0667 323.077 79.84 320.726C81.3732 316.064 83.7701 310.286 86.5089 303.684L86.5686 303.54C92.1215 290.154 99.1722 273.135 103.944 253.971C108.961 233.823 106.461 205.262 103.914 190.544C98.2759 157.957 104.572 118.862 126.126 87.8654Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })
}), ma = U.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`, oo = ({
  backdropColor: e,
  children: t,
  height: n,
  width: r
}) => d(ma, {
  children: d("svg", {
    viewBox: `0 0 ${r} ${n}`,
    children: [d("defs", {
      children: d("mask", {
        id: "mask",
        children: [d("rect", {
          fill: "#fff",
          height: "100%",
          width: "100%"
        }), t]
      })
    }), d("rect", {
      fill: e,
      height: "100%",
      mask: "url(#mask)",
      width: "100%"
    })]
  })
}), ga = U.div`
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
`, ya = ({
  children: e,
  isInCandidateSelection: t,
  placeholderRectangle: n
}) => d(ga, {
  $isInCandidateSelection: t,
  $placeholderRectangle: n,
  children: e
}), va = {
  [j.CIRCLE_SOLID]: d(ca, {}),
  [j.ELLIPSE_SOLID]: d(la, {}),
  [j.MAN_SOLID]: d(ua, {}),
  [j.WOMAN_SOLID]: d(pa, {}),
  [j.SQUARE_ROUNDED_DASH]: d(da, {}),
  [j.SQUARE_ROUNDED_SOLID]: d(ha, {}),
  [j.SQUARE_DASH]: d(fa, {}),
  [j.SQUARE_SOLID]: d(_a, {})
}, Ca = ({
  backdropColor: e,
  backdropHeight: t,
  backdropWidth: n,
  icon: r,
  isBackdrop: o,
  placeholderRectangle: i,
  ...s
}) => d(B, {
  children: [o && d(oo, {
    backdropColor: e,
    height: t,
    width: n,
    children: d(aa, {
      height: `${i.height * 100}%`,
      width: `${i.width * 100}%`,
      x: `${i.shiftX * 100}%`,
      y: `${i.shiftY * 100}%`
    })
  }), d(ya, {
    placeholderRectangle: i,
    ...s,
    children: va[r]
  })]
}), Sa = U.canvas`
  transform: ${(e) => e.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, Ea = (e) => {
  const {
    bottomLeft: t,
    bottomRight: n,
    topLeft: r,
    topRight: o
  } = e, i = He(r, o), s = He(o, n), a = He(t, n), l = He(r, t);
  return Math.min(i, s, a, l);
}, wa = (e) => {
  const t = e.getContext("2d");
  t && t.clearRect(0, 0, t.canvas.width, t.canvas.height);
}, ba = ({
  cameraResolution: e,
  isImageMirror: t
}) => {
  const n = gt(null), r = Xr(), [o, i] = H(), s = we((a) => {
    var l;
    i((l = a == null ? void 0 : a.detail) == null ? void 0 : l.detectedObject);
  }, [i]);
  return Ge(vr.DETECTED_DOCUMENT_CHANGED, s), ae(() => {
    if (!n.current)
      return;
    const a = (u, f, c, _) => {
      var y;
      const h = nr(f, u, _, Qn), g = nr(f, c, _, Qn), C = tr(f, u, h), E = tr(f, c, g), m = (y = n == null ? void 0 : n.current) == null ? void 0 : y.getContext("2d");
      m && (m.beginPath(), m.lineWidth = ws, m.strokeStyle = r.colors.placeholderColor, m.moveTo(C.x, C.y), m.arcTo(f.x, f.y, E.x, E.y, Es), m.lineTo(E.x, E.y), m.stroke());
    }, l = (u) => {
      if (!u)
        return;
      const {
        bottomLeft: f,
        bottomRight: c,
        topLeft: _,
        topRight: h
      } = u, g = Ea(u);
      a(f, _, h, g), a(_, h, c, g), a(h, c, f, g), a(c, f, _, g);
    };
    n.current.width = e.width, n.current.height = e.height, wa(n.current), l(o);
  }, [e, o, r.colors.placeholderColor]), d(Sa, {
    ref: n,
    $isImageMirror: t
  });
}, Oa = () => {
  const [e, t] = H(), [n, r] = H(!1), o = we((l) => {
    var f, c;
    t((f = l == null ? void 0 : l.detail) == null ? void 0 : f.cameraResolution);
    const u = (c = l == null ? void 0 : l.detail) == null ? void 0 : c.isMirroring;
    u !== void 0 && r(u);
  }, [t]);
  Ge(We.CAMERA_PROPS_CHANGED, o);
  const [i, s] = H(
    D.FACE_NOT_PRESENT
    // FIXME Default instruction should not be here
  ), a = we((l) => {
    var u;
    s((u = l == null ? void 0 : l.detail) == null ? void 0 : u.instructionCode);
  }, [s]);
  return Ge(We.INSTRUCTION_CHANGED, a), {
    cameraResolution: e,
    instructionCode: i,
    isMirroring: n
  };
}, $a = () => {
  const [e, t] = H(ct.NEUTRAL), [n, r] = H(ne.LOADING), [o, i] = H(), s = we((a) => {
    const {
      error: l,
      phase: u,
      state: f
    } = a.detail || {};
    u && t(u), f && r(f), l && i(l);
  }, [t, r, i]);
  return Ge(Cr.STATUS_CHANGED, s), {
    smilePhase: e,
    smileState: n,
    smileError: o
  };
}, or = ".3s", Na = ".2s", Ta = ".8s", ir = ".4s", sr = ".4s", Ia = ".5s", ka = "1.5s", xa = 2e3, ar = ce`
0%, 100% {
    transform: scale(1);
}
50% {
    transform: scale(2);
}
`, Aa = ce`
0%, 100% {
    transform: scale(1,1);
    opacity: 1;
}
50% {
    transform: scale(1,0.1);
    opacity: 0.5;
}
`, cr = ce`
0% {
    stroke-dashoffset: 100;
}
100% {
    stroke-dashoffset: 200;
}
`, Ra = ce`
 from {
    opacity: 1;
}
to {
    opacity: 0;
}
`, La = (e, t) => {
  const [n, r] = H(!1);
  return ae(() => {
    t === ct.SMILE && r(!0);
    const o = setTimeout(() => {
      r(!1);
    }, xa);
    return () => clearTimeout(o);
  }, [t]), t === ct.SMILE && e === he.CANDIDATE_SELECTION ? he.SMILE_CANDIDATE_SELECTION : n ? he.SMILE : e;
}, Da = U.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, Pa = ({
  svgSize: e
}) => d(Da, {
  children: d("svg", {
    fill: "none",
    height: e,
    viewBox: "0 0 48 48",
    width: e,
    xmlns: "http://www.w3.org/2000/svg",
    children: [d("path", {
      d: "M30.9229 9.75026C30.9229 12.3736 28.7533 14.5002 26.0767 14.5002C23.4003 14.5002 21.2307 12.3736 21.2307 9.75026C21.2307 7.12664 23.4003 5 26.0767 5C28.7533 5 30.9229 7.12664 30.9229 9.75026Z",
      fill: "currentColor"
    }), d("path", {
      d: "M40.6155 15.8556C40.6155 18.1044 38.7559 19.9273 36.4618 19.9273C34.1675 19.9273 32.3079 18.1044 32.3079 15.8556C32.3079 13.607 34.1675 11.7842 36.4618 11.7842C38.7559 11.7842 40.6155 13.607 40.6155 15.8556Z",
      fill: "currentColor"
    }), d("path", {
      d: "M42 27.3921C42 29.2659 40.4502 30.785 38.5386 30.785C36.6267 30.785 35.0769 29.2659 35.0769 27.3921C35.0769 25.5181 36.6267 23.999 38.5386 23.999C40.4502 23.999 42 25.5181 42 27.3921Z",
      fill: "currentColor"
    }), d("path", {
      d: "M35.0766 37.5712C35.0766 39.0704 33.837 40.2858 32.3075 40.2858C30.7779 40.2858 29.5383 39.0704 29.5383 37.5712C29.5383 36.0723 30.7779 34.8569 32.3075 34.8569C33.837 34.8569 35.0766 36.0723 35.0766 37.5712Z",
      fill: "currentColor"
    }), d("path", {
      d: "M22.6154 40.2858C22.6154 41.7848 21.3756 43.0001 19.846 43.0001C18.3168 43.0001 17.0769 41.7848 17.0769 40.2858C17.0769 38.7866 18.3168 37.5713 19.846 37.5713C21.3756 37.5713 22.6154 38.7866 22.6154 40.2858Z",
      fill: "currentColor"
    }), d("path", {
      d: "M11.5382 32.8216C11.5382 33.9457 10.6085 34.8573 9.46137 34.8573C8.31426 34.8573 7.38452 33.9457 7.38452 32.8216C7.38452 31.6972 8.31426 30.7856 9.46137 30.7856C10.6085 30.7856 11.5382 31.6972 11.5382 32.8216Z",
      fill: "currentColor"
    }), d("path", {
      d: "M8.76913 21.2849C8.76913 22.0345 8.14932 22.642 7.38456 22.642C6.6198 22.642 6 22.0345 6 21.2849C6 20.5353 6.61981 19.9277 7.38456 19.9277C8.14933 19.9277 8.76913 20.5353 8.76913 21.2849Z",
      fill: "currentColor"
    }), d("path", {
      d: "M15.6927 11.7844C15.6927 12.534 15.0729 13.1415 14.3081 13.1415C13.5434 13.1415 12.9236 12.534 12.9236 11.7844C12.9236 11.0348 13.5434 10.4272 14.3081 10.4272C15.0729 10.4272 15.6927 11.0348 15.6927 11.7844Z",
      fill: "currentColor"
    })]
  })
}), Ma = ({
  backdropColor: e,
  cameraHeight: t,
  cameraWidth: n,
  fontSize: r,
  smileState: o,
  smileStateInstructions: i
}) => {
  const s = o === ne.ERROR;
  return !o || s || !i[o].visible ? null : o === ne.DONE ? d(B, {
    children: [t && n && d(oo, {
      backdropColor: e,
      height: t,
      width: n
    }), d(Qt, {
      fontSize: r,
      isCameraReady: !0,
      text: i[o].text
    })]
  }) : d(Qt, {
    fontSize: r,
    Icon: Pa,
    isCameraReady: !0,
    text: i[o].text
  });
}, Ha = U.div`
  position: absolute;
  top: ${(e) => e.$initialPosition.shiftY * 100}%;
  bottom: ${(e) => (1 - e.$initialPosition.shiftY - e.$initialPosition.height) * 100}%;
  left: ${(e) => e.$initialPosition.shiftX * 100}%;
  right: ${(e) => (1 - e.$initialPosition.shiftX - e.$initialPosition.width) * 100}%;
  animation: ${Ra} ${Ia} ${ka} ease-in-out;
  animation-fill-mode: forwards;

  #left-mouth {
    fill: none;
    stroke: #ffffff;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: ${cr} ${ir} ${sr} forwards;
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
    animation: ${cr} ${ir} ${sr} forwards;
  }
  #left-eye {
    transform-origin: 86.8px 96px;
    fill: #ffffff;
    animation: ${ar} ${or} forwards;
  }
  #right-eye {
    transform-origin: 173.2px 96px;
    fill: #ffffff;
    animation:
      ${ar} ${or} forwards,
      ${Aa} ${Na} ${Ta} forwards;
  }
`, Ua = ({
  initialPosition: e
}) => d(Ha, {
  $initialPosition: e,
  children: d("svg", {
    viewBox: "0 0 260 260",
    children: [d("circle", {
      cx: "86.8",
      cy: "96",
      id: "left-eye",
      r: "9.6"
    }), d("circle", {
      cx: "173.2",
      cy: "96",
      id: "right-eye",
      r: "9.6"
    }), d("path", {
      d: "M62.8,156.3c0,0,20.4,35.4,66.6,35.4",
      id: "left-mouth"
    }), d("path", {
      d: "M42.8,156.3c0,0,20.4,35.4,66.6,35.4",
      id: "right-mouth"
    })]
  })
}), Fa = ({
  backdropColor: e,
  instructions: t,
  placeholderIcon: n,
  showCameraButtons: r,
  smileStateInstructions: o,
  videoElementSize: i
}) => {
  const {
    cameraResolution: s,
    instructionCode: a,
    isMirroring: l
  } = Oa(), {
    font: u
  } = Xr(), f = eo(i, u.minimumSize), {
    smileError: c,
    smilePhase: _,
    smileState: h
  } = $a(), g = La(a, _), C = a === he.CANDIDATE_SELECTION, E = n === j.CIRCLE_SOLID, m = _ === ct.SMILE;
  if (h === ne.ERROR)
    return d(to, {
      fontSize: f,
      text: c == null ? void 0 : c.message
    });
  if ((h === ne.RUNNING || h === ne.WAITING) && s) {
    const y = Vs(s);
    return d(B, {
      children: [!m && d(ba, {
        cameraResolution: s,
        isImageMirror: l
      }), d(Ca, {
        backdropColor: e,
        backdropHeight: s.height,
        backdropWidth: s.width,
        icon: n,
        isBackdrop: E,
        isInCandidateSelection: C,
        placeholderRectangle: y
      }), m && d(Ua, {
        initialPosition: y
      }), g && d(sa, {
        cssBottom: (y.height + y.shiftY) * 100,
        fontSize: f,
        isAnimating: !1,
        isInCandidateSelection: C,
        isPortrait: s.width < s.height,
        children: t[g]
      }), r && d(Js, {
        customControlEvent: We.CONTROL,
        isSwitchCameraDisabled: C,
        videoElementSize: i
      })]
    });
  }
  return d(Ma, {
    backdropColor: e,
    cameraHeight: s == null ? void 0 : s.height,
    cameraWidth: s == null ? void 0 : s.width,
    fontSize: f,
    smileState: h,
    smileStateInstructions: o
  });
}, Ba = (e) => {
  var i, s;
  const t = {
    ...$s,
    ...e == null ? void 0 : e.instructions
  }, n = {
    [ne.LOADING]: {
      ...Jn.loading,
      ...(i = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : i.loading
    },
    [ne.DONE]: {
      ...Jn.done,
      ...(s = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : s.done
    }
  }, r = (e == null ? void 0 : e.backdropColor) ?? Ns, o = (e == null ? void 0 : e.showCameraButtons) ?? !1;
  return {
    backdropColor: r,
    smileInstructions: t,
    smileStateInstructions: n,
    showCameraButtons: o
  };
}, Wa = ({
  props: e
}) => {
  const {
    backdropColor: t,
    showCameraButtons: n,
    smileInstructions: r,
    smileStateInstructions: o
  } = Ba(e), i = Ms(We.VIDEO_ELEMENT_SIZE), s = Bs(e);
  return d(Ps, {
    styleTarget: e == null ? void 0 : e.styleTarget,
    theme: s,
    videoElementSize: i,
    children: d(Fa, {
      backdropColor: t,
      instructions: r,
      placeholderIcon: j.CIRCLE_SOLID,
      showCameraButtons: n,
      smileStateInstructions: o,
      videoElementSize: i
    })
  });
};
Oo(Wa, "x-dot-smile-liveness-ui", ["props"]);
