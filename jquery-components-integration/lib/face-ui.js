var qr = Object.defineProperty;
var Yr = (e, t, n) => t in e ? qr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var je = (e, t, n) => (Yr(e, typeof t != "symbol" ? t + "" : t, n), n);
var Be, p, Qn, ae, hn, Kn, Nt, Jn, Me = {}, er = [], Xr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, st = Array.isArray;
function Q(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function tr(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function P(e, t, n) {
  var r, o, i, a = {};
  for (i in t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Be.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      a[i] === void 0 && (a[i] = e.defaultProps[i]);
  return Pe(e, a, r, o, null);
}
function Pe(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o ?? ++Qn, __i: -1, __u: 0 };
  return o == null && p.vnode != null && p.vnode(i), i;
}
function Qr() {
  return { current: null };
}
function H(e) {
  return e.children;
}
function z(e, t) {
  this.props = e, this.context = t;
}
function Ce(e, t) {
  if (t == null)
    return e.__ ? Ce(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Ce(e) : null;
}
function nr(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return nr(e);
  }
}
function xt(e) {
  (!e.__d && (e.__d = !0) && ae.push(e) && !rt.__r++ || hn !== p.debounceRendering) && ((hn = p.debounceRendering) || Kn)(rt);
}
function rt() {
  var e, t, n, r, o, i, a, s, c;
  for (ae.sort(Nt); e = ae.shift(); )
    e.__d && (t = ae.length, r = void 0, i = (o = (n = e).__v).__e, s = [], c = [], (a = n.__P) && ((r = Q({}, o)).__v = o.__v + 1, p.vnode && p.vnode(r), Xt(a, r, o, n.__n, a.ownerSVGElement !== void 0, 32 & o.__u ? [i] : null, s, i ?? Ce(o), !!(32 & o.__u), c), r.__.__k[r.__i] = r, ir(s, r, c), r.__e != i && nr(r)), ae.length > t && ae.sort(Nt));
  rt.__r = 0;
}
function rr(e, t, n, r, o, i, a, s, c, u, f) {
  var l, _, h, m, w, $ = r && r.__k || er, g = t.length;
  for (n.__d = c, Kr(n, t, $), c = n.__d, l = 0; l < g; l++)
    (h = n.__k[l]) != null && typeof h != "boolean" && typeof h != "function" && (_ = h.__i === -1 ? Me : $[h.__i] || Me, h.__i = l, Xt(e, h, _, o, i, a, s, c, u, f), m = h.__e, h.ref && _.ref != h.ref && (_.ref && Qt(_.ref, null, h), f.push(h.ref, h.__c || m, h)), w == null && m != null && (w = m), 65536 & h.__u || _.__k === h.__k ? c = or(h, c, e) : typeof h.type == "function" && h.__d !== void 0 ? c = h.__d : m && (c = m.nextSibling), h.__d = void 0, h.__u &= -196609);
  n.__d = c, n.__e = w;
}
function Kr(e, t, n) {
  var r, o, i, a, s, c = t.length, u = n.length, f = u, l = 0;
  for (e.__k = [], r = 0; r < c; r++)
    (o = e.__k[r] = (o = t[r]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? Pe(null, o, null, null, o) : st(o) ? Pe(H, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? Pe(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = e, o.__b = e.__b + 1, s = Jr(o, n, a = r + l, f), o.__i = s, i = null, s !== -1 && (f--, (i = n[s]) && (i.__u |= 131072)), i == null || i.__v === null ? (s == -1 && l--, typeof o.type != "function" && (o.__u |= 65536)) : s !== a && (s === a + 1 ? l++ : s > a ? f > c - a ? l += s - a : l-- : l = s < a && s == a - 1 ? s - a : 0, s !== r + l && (o.__u |= 65536))) : (i = n[r]) && i.key == null && i.__e && (i.__e == e.__d && (e.__d = Ce(i)), At(i, i, !1), n[r] = null, f--);
  if (f)
    for (r = 0; r < u; r++)
      (i = n[r]) != null && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = Ce(i)), At(i, i));
}
function or(e, t, n) {
  var r, o;
  if (typeof e.type == "function") {
    for (r = e.__k, o = 0; r && o < r.length; o++)
      r[o] && (r[o].__ = e, t = or(r[o], t, n));
    return t;
  }
  return e.__e != t && (n.insertBefore(e.__e, t || null), t = e.__e), t && t.nextSibling;
}
function K(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (st(e) ? e.some(function(n) {
    K(n, t);
  }) : t.push(e)), t;
}
function Jr(e, t, n, r) {
  var o = e.key, i = e.type, a = n - 1, s = n + 1, c = t[n];
  if (c === null || c && o == c.key && i === c.type)
    return n;
  if (r > (c != null && !(131072 & c.__u) ? 1 : 0))
    for (; a >= 0 || s < t.length; ) {
      if (a >= 0) {
        if ((c = t[a]) && !(131072 & c.__u) && o == c.key && i === c.type)
          return a;
        a--;
      }
      if (s < t.length) {
        if ((c = t[s]) && !(131072 & c.__u) && o == c.key && i === c.type)
          return s;
        s++;
      }
    }
  return -1;
}
function _n(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || Xr.test(t) ? n : n + "px";
}
function Ge(e, t, n, r, o) {
  var i;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || _n(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || _n(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      i = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = Date.now(), e.addEventListener(t, i ? mn : pn, i)) : e.removeEventListener(t, i ? mn : pn, i);
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
function pn(e) {
  var t = this.l[e.type + !1];
  if (e.t) {
    if (e.t <= t.u)
      return;
  } else
    e.t = Date.now();
  return t(p.event ? p.event(e) : e);
}
function mn(e) {
  return this.l[e.type + !0](p.event ? p.event(e) : e);
}
function Xt(e, t, n, r, o, i, a, s, c, u) {
  var f, l, _, h, m, w, $, g, v, b, O, I, S, y, U, T = t.type;
  if (t.constructor !== void 0)
    return null;
  128 & n.__u && (c = !!(32 & n.__u), i = [s = t.__e = n.__e]), (f = p.__b) && f(t);
  e:
    if (typeof T == "function")
      try {
        if (g = t.props, v = (f = T.contextType) && r[f.__c], b = f ? v ? v.props.value : f.__ : r, n.__c ? $ = (l = t.__c = n.__c).__ = l.__E : ("prototype" in T && T.prototype.render ? t.__c = l = new T(g, b) : (t.__c = l = new z(g, b), l.constructor = T, l.render = to), v && v.sub(l), l.props = g, l.state || (l.state = {}), l.context = b, l.__n = r, _ = l.__d = !0, l.__h = [], l._sb = []), l.__s == null && (l.__s = l.state), T.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = Q({}, l.__s)), Q(l.__s, T.getDerivedStateFromProps(g, l.__s))), h = l.props, m = l.state, l.__v = t, _)
          T.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (T.getDerivedStateFromProps == null && g !== h && l.componentWillReceiveProps != null && l.componentWillReceiveProps(g, b), !l.__e && (l.shouldComponentUpdate != null && l.shouldComponentUpdate(g, l.__s, b) === !1 || t.__v === n.__v)) {
            for (t.__v !== n.__v && (l.props = g, l.state = l.__s, l.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(ge) {
              ge && (ge.__ = t);
            }), O = 0; O < l._sb.length; O++)
              l.__h.push(l._sb[O]);
            l._sb = [], l.__h.length && a.push(l);
            break e;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(g, l.__s, b), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(h, m, w);
          });
        }
        if (l.context = b, l.props = g, l.__P = e, l.__e = !1, I = p.__r, S = 0, "prototype" in T && T.prototype.render) {
          for (l.state = l.__s, l.__d = !1, I && I(t), f = l.render(l.props, l.state, l.context), y = 0; y < l._sb.length; y++)
            l.__h.push(l._sb[y]);
          l._sb = [];
        } else
          do
            l.__d = !1, I && I(t), f = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++S < 25);
        l.state = l.__s, l.getChildContext != null && (r = Q(Q({}, r), l.getChildContext())), _ || l.getSnapshotBeforeUpdate == null || (w = l.getSnapshotBeforeUpdate(h, m)), rr(e, st(U = f != null && f.type === H && f.key == null ? f.props.children : f) ? U : [U], t, n, r, o, i, a, s, c, u), l.base = t.__e, t.__u &= -161, l.__h.length && a.push(l), $ && (l.__E = l.__ = null);
      } catch (ge) {
        t.__v = null, c || i != null ? (t.__e = s, t.__u |= c ? 160 : 32, i[i.indexOf(s)] = null) : (t.__e = n.__e, t.__k = n.__k), p.__e(ge, t, n);
      }
    else
      i == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = eo(n.__e, t, n, r, o, i, a, c, u);
  (f = p.diffed) && f(t);
}
function ir(e, t, n) {
  t.__d = void 0;
  for (var r = 0; r < n.length; r++)
    Qt(n[r], n[++r], n[++r]);
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
function eo(e, t, n, r, o, i, a, s, c) {
  var u, f, l, _, h, m, w, $ = n.props, g = t.props, v = t.type;
  if (v === "svg" && (o = !0), i != null) {
    for (u = 0; u < i.length; u++)
      if ((h = i[u]) && "setAttribute" in h == !!v && (v ? h.localName === v : h.nodeType === 3)) {
        e = h, i[u] = null;
        break;
      }
  }
  if (e == null) {
    if (v === null)
      return document.createTextNode(g);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", v) : document.createElement(v, g.is && g), i = null, s = !1;
  }
  if (v === null)
    $ === g || s && e.data === g || (e.data = g);
  else {
    if (i = i && Be.call(e.childNodes), $ = n.props || Me, !s && i != null)
      for ($ = {}, u = 0; u < e.attributes.length; u++)
        $[(h = e.attributes[u]).name] = h.value;
    for (u in $)
      h = $[u], u == "children" || (u == "dangerouslySetInnerHTML" ? l = h : u === "key" || u in g || Ge(e, u, null, h, o));
    for (u in g)
      h = g[u], u == "children" ? _ = h : u == "dangerouslySetInnerHTML" ? f = h : u == "value" ? m = h : u == "checked" ? w = h : u === "key" || s && typeof h != "function" || $[u] === h || Ge(e, u, h, $[u], o);
    if (f)
      s || l && (f.__html === l.__html || f.__html === e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (l && (e.innerHTML = ""), rr(e, st(_) ? _ : [_], t, n, r, o && v !== "foreignObject", i, a, i ? i[0] : n.__k && Ce(n, 0), s, c), i != null)
      for (u = i.length; u--; )
        i[u] != null && tr(i[u]);
    s || (u = "value", m !== void 0 && (m !== e[u] || v === "progress" && !m || v === "option" && m !== $[u]) && Ge(e, u, m, $[u], !1), u = "checked", w !== void 0 && w !== e[u] && Ge(e, u, w, $[u], !1));
  }
  return e;
}
function Qt(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    p.__e(r, n);
  }
}
function At(e, t, n) {
  var r, o;
  if (p.unmount && p.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Qt(r, null, t)), (r = e.__c) != null) {
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
      r[o] && At(r[o], t, n || typeof e.type != "function");
  n || e.__e == null || tr(e.__e), e.__ = e.__e = e.__d = void 0;
}
function to(e, t, n) {
  return this.constructor(e, n);
}
function re(e, t, n) {
  var r, o, i, a;
  p.__ && p.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], a = [], Xt(t, e = (!r && n || t).__k = P(H, null, [e]), o || Me, Me, t.ownerSVGElement !== void 0, !r && n ? [n] : o ? null : t.firstChild ? Be.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, a), ir(i, e, a);
}
function Kt(e, t) {
  re(e, t, Kt);
}
function Jt(e, t, n) {
  var r, o, i, a, s = Q({}, e.props);
  for (i in e.type && e.type.defaultProps && (a = e.type.defaultProps), t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i] === void 0 && a !== void 0 ? a[i] : t[i];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? Be.call(arguments, 2) : n), Pe(e.type, s, r || e.key, o || e.ref, null);
}
function no(e, t) {
  var n = { __c: t = "__cC" + Jn++, __: e, Consumer: function(r, o) {
    return r.children(o);
  }, Provider: function(r) {
    var o, i;
    return this.getChildContext || (o = [], (i = {})[t] = this, this.getChildContext = function() {
      return i;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && o.some(function(s) {
        s.__e = !0, xt(s);
      });
    }, this.sub = function(a) {
      o.push(a);
      var s = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        o.splice(o.indexOf(a), 1), s && s.call(a);
      };
    }), r.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
Be = er.slice, p = { __e: function(e, t, n, r) {
  for (var o, i, a; t = t.__; )
    if ((o = t.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), a = o.__d), a)
          return o.__E = o;
      } catch (s) {
        e = s;
      }
  throw e;
} }, Qn = 0, z.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Q({}, this.state), typeof e == "function" && (e = e(Q({}, n), this.props)), e && Q(n, e), e != null && this.__v && (t && this._sb.push(t), xt(this));
}, z.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), xt(this));
}, z.prototype.render = H, ae = [], Kn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Nt = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, rt.__r = 0, Jn = 0;
function en() {
  return (en = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var ro = ["context", "children"];
function oo(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, n = function(r, o) {
    if (r == null)
      return {};
    var i, a, s = {}, c = Object.keys(r);
    for (a = 0; a < c.length; a++)
      o.indexOf(i = c[a]) >= 0 || (s[i] = r[i]);
    return s;
  }(e, ro);
  return Jt(t, n);
}
function io() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = P(oo, en({}, this._props, { context: e.detail.context }), function t(n, r) {
    if (n.nodeType === 3)
      return n.data;
    if (n.nodeType !== 1)
      return null;
    var o = [], i = {}, a = 0, s = n.attributes, c = n.childNodes;
    for (a = s.length; a--; )
      s[a].name !== "slot" && (i[s[a].name] = s[a].value, i[ar(s[a].name)] = s[a].value);
    for (a = c.length; a--; ) {
      var u = t(c[a], null), f = c[a].slot;
      f ? i[f] = P(gn, { name: f }, u) : o[a] = u;
    }
    var l = r ? P(gn, null, o) : o;
    return P(r || n.nodeName.toLowerCase(), i, l);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Kt : re)(this._vdom, this._root);
}
function ar(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function ao(e, t, n) {
  if (this._vdom) {
    var r = {};
    r[e] = n = n ?? void 0, r[ar(e)] = n, this._vdom = Jt(this._vdom, r), re(this._vdom, this._root);
  }
}
function so() {
  re(this._vdom = null, this._root);
}
function gn(e, t) {
  var n = this;
  return P("slot", en({}, e, { ref: function(r) {
    r ? (n.ref = r, n._listener || (n._listener = function(o) {
      o.stopPropagation(), o.detail.context = t;
    }, r.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function co(e, t, n, r) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = e, i._root = r && r.shadow ? i.attachShadow({ mode: r.mode || "open" }) : i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = io, o.prototype.attributeChangedCallback = ao, o.prototype.disconnectedCallback = so, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = n, n.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom.props[i];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(i, null, a) : (this._props || (this._props = {}), this._props[i] = a, this.connectedCallback());
      var s = typeof a;
      a != null && s !== "string" && s !== "boolean" && s !== "number" || this.setAttribute(i, a);
    } });
  }), customElements.define(t || e.tagName || e.displayName || e.name, o);
}
var Tt = /* @__PURE__ */ ((e) => (e.CONTINUE_DETECTION = "continue-detection", e.SWITCH_CAMERA = "switch-camera", e.TOGGLE_MIRROR = "toggle-mirror", e))(Tt || {}), fe = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", e.CONTROL = "face-auto-capture:control", e.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", e.FACE_DETECTION = "face-auto-capture:face-detection", e.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", e.STATE_CHANGED = "face-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", e))(fe || {});
const W = {
  CANDIDATE_SELECTION: "candidate_selection",
  FACE_TOO_CLOSE: "face_too_close",
  FACE_TOO_FAR: "face_too_far",
  FACE_CENTERING: "face_centering",
  FACE_NOT_PRESENT: "face_not_present",
  SHARPNESS_TOO_LOW: "sharpness_too_low",
  BRIGHTNESS_TOO_LOW: "brightness_too_low",
  BRIGHTNESS_TOO_HIGH: "brightness_too_high",
  DEVICE_PITCHED: "device_pitched"
}, Z = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  WAITING: "WAITING",
  RUNNING: "RUNNING"
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
function he(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function lo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var uo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, fo = /* @__PURE__ */ lo(
  function(e) {
    return uo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), oe, x, wt, yn, we = 0, sr = [], Ye = [], vn = p.__b, Cn = p.__r, wn = p.diffed, Sn = p.__c, bn = p.unmount;
function Oe(e, t) {
  p.__h && p.__h(x, e, we || t), we = 0;
  var n = x.__H || (x.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({ __V: Ye }), n.__[e];
}
function j(e) {
  return we = 1, cr(lr, e);
}
function cr(e, t, n) {
  var r = Oe(oe++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : lr(void 0, t), function(s) {
    var c = r.__N ? r.__N[0] : r.__[0], u = r.t(c, s);
    c !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = x, !x.u)) {
    var o = function(s, c, u) {
      if (!r.__c.__H)
        return !0;
      var f = r.__c.__H.__.filter(function(_) {
        return _.__c;
      });
      if (f.every(function(_) {
        return !_.__N;
      }))
        return !i || i.call(this, s, c, u);
      var l = !1;
      return f.forEach(function(_) {
        if (_.__N) {
          var h = _.__[0];
          _.__ = _.__N, _.__N = void 0, h !== _.__[0] && (l = !0);
        }
      }), !(!l && r.__c.props === s) && (!i || i.call(this, s, c, u));
    };
    x.u = !0;
    var i = x.shouldComponentUpdate, a = x.componentWillUpdate;
    x.componentWillUpdate = function(s, c, u) {
      if (this.__e) {
        var f = i;
        i = void 0, o(s, c, u), i = f;
      }
      a && a.call(this, s, c, u);
    }, x.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function _e(e, t) {
  var n = Oe(oe++, 3);
  !p.__s && nn(n.__H, t) && (n.__ = e, n.i = t, x.__H.__h.push(n));
}
function ct(e, t) {
  var n = Oe(oe++, 4);
  !p.__s && nn(n.__H, t) && (n.__ = e, n.i = t, x.__h.push(n));
}
function lt(e) {
  return we = 5, le(function() {
    return { current: e };
  }, []);
}
function ho(e, t, n) {
  we = 6, ct(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(e));
}
function le(e, t) {
  var n = Oe(oe++, 7);
  return nn(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__;
}
function Se(e, t) {
  return we = 8, le(function() {
    return e;
  }, t);
}
function tn(e) {
  var t = x.context[e.__c], n = Oe(oe++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(x)), t.props.value) : e.__;
}
function Rt(e, t) {
  p.useDebugValue && p.useDebugValue(t ? t(e) : e);
}
function _o() {
  var e = Oe(oe++, 11);
  if (!e.__) {
    for (var t = x.__v; t !== null && !t.__m && t.__ !== null; )
      t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function po() {
  for (var e; e = sr.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(Xe), e.__H.__h.forEach(Lt), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], p.__e(t, e.__v);
      }
}
p.__b = function(e) {
  x = null, vn && vn(e);
}, p.__r = function(e) {
  Cn && Cn(e), oe = 0;
  var t = (x = e.__c).__H;
  t && (wt === x ? (t.__h = [], x.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = Ye, n.__N = n.i = void 0;
  })) : (t.__h.forEach(Xe), t.__h.forEach(Lt), t.__h = [], oe = 0)), wt = x;
}, p.diffed = function(e) {
  wn && wn(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (sr.push(t) !== 1 && yn === p.requestAnimationFrame || ((yn = p.requestAnimationFrame) || mo)(po)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== Ye && (n.__ = n.__V), n.i = void 0, n.__V = Ye;
  })), wt = x = null;
}, p.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(Xe), n.__h = n.__h.filter(function(r) {
        return !r.__ || Lt(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], p.__e(r, n.__v);
    }
  }), Sn && Sn(e, t);
}, p.unmount = function(e) {
  bn && bn(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      Xe(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && p.__e(t, n.__v));
};
var En = typeof requestAnimationFrame == "function";
function mo(e) {
  var t, n = function() {
    clearTimeout(r), En && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  En && (t = requestAnimationFrame(n));
}
function Xe(e) {
  var t = x, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), x = t;
}
function Lt(e) {
  var t = x;
  e.__c = e.__(), x = t;
}
function nn(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function lr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ur(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Pt(e, t) {
  for (var n in e)
    if (n !== "__source" && !(n in t))
      return !0;
  for (var r in t)
    if (r !== "__source" && e[r] !== t[r])
      return !0;
  return !1;
}
function Dt(e) {
  this.props = e;
}
function go(e, t) {
  function n(o) {
    var i = this.props.ref, a = i == o.ref;
    return !a && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !a : Pt(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, P(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(Dt.prototype = new z()).isPureReactComponent = !0, Dt.prototype.shouldComponentUpdate = function(e, t) {
  return Pt(this.props, e) || Pt(this.state, t);
};
var $n = p.__b;
p.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), $n && $n(e);
};
var yo = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function vo(e) {
  function t(n) {
    var r = ur({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = yo, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var kn = function(e, t) {
  return e == null ? null : K(K(e).map(t));
}, Co = { map: kn, forEach: kn, count: function(e) {
  return e ? K(e).length : 0;
}, only: function(e) {
  var t = K(e);
  if (t.length !== 1)
    throw "Children.only";
  return t[0];
}, toArray: K }, wo = p.__e;
p.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; )
      if ((o = i.__c) && o.__c)
        return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  wo(e, t, n, r);
};
var On = p.unmount;
function dr(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = ur({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return dr(r, t, n);
  })), e;
}
function fr(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return fr(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function Qe() {
  this.__u = 0, this.t = null, this.__b = null;
}
function hr(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function So(e) {
  var t, n, r;
  function o(i) {
    if (t || (t = e()).then(function(a) {
      n = a.default || a;
    }, function(a) {
      r = a;
    }), r)
      throw r;
    if (!n)
      throw t;
    return P(n, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function Te() {
  this.u = null, this.o = null;
}
p.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), On && On(e);
}, (Qe.prototype = new z()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var o = hr(r.__v), i = !1, a = function() {
    i || (i = !0, n.__R = null, o ? o(s) : s());
  };
  n.__R = a;
  var s = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var c = r.state.__a;
        r.__v.__k[0] = fr(c, c.__c.__P, c.__c.__O);
      }
      var u;
      for (r.setState({ __a: r.__b = null }); u = r.t.pop(); )
        u.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(a, a);
}, Qe.prototype.componentWillUnmount = function() {
  this.t = [];
}, Qe.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = dr(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && P(H, null, e.fallback);
  return o && (o.__u &= -33), [P(H, null, t.__a ? null : e.children), o];
};
var In = function(e, t, n) {
  if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (n = e.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      e.u = n = n[2];
    }
};
function bo(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function Eo(e) {
  var t = this, n = e.i;
  t.componentWillUnmount = function() {
    re(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== n && t.componentWillUnmount(), t.l || (t.i = n, t.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r);
  } }), re(P(bo, { context: t.context }, e.__v), t.l);
}
function $o(e, t) {
  var n = P(Eo, { __v: e, i: t });
  return n.containerInfo = t, n;
}
(Te.prototype = new z()).__a = function(e) {
  var t = this, n = hr(t.__v), r = t.o.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), In(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, Te.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = K(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; )
    this.o.set(t[n], this.u = [1, 0, this.u]);
  return e.children;
}, Te.prototype.componentDidUpdate = Te.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, n) {
    In(e, n, t);
  });
};
var _r = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, ko = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Oo = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Io = /[A-Z0-9]/g, No = typeof document < "u", xo = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function Ao(e, t, n) {
  return t.__k == null && (t.textContent = ""), re(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function To(e, t, n) {
  return Kt(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
z.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(z.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Nn = p.event;
function Ro() {
}
function Lo() {
  return this.cancelBubble;
}
function Po() {
  return this.defaultPrevented;
}
p.event = function(e) {
  return Nn && (e = Nn(e)), e.persist = Ro, e.isPropagationStopped = Lo, e.isDefaultPrevented = Po, e.nativeEvent = e;
};
var rn, Do = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, xn = p.vnode;
p.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {};
    for (var i in n) {
      var a = n[i];
      if (!(i === "value" && "defaultValue" in n && a == null || No && i === "children" && r === "noscript" || i === "class" || i === "className")) {
        var s = i.toLowerCase();
        i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && a === !0 ? a = "" : s === "ondoubleclick" ? i = "ondblclick" : s !== "onchange" || r !== "input" && r !== "textarea" || xo(n.type) ? s === "onfocus" ? i = "onfocusin" : s === "onblur" ? i = "onfocusout" : Oo.test(i) ? i = s : r.indexOf("-") === -1 && ko.test(i) ? i = i.replace(Io, "-$&").toLowerCase() : a === null && (a = void 0) : s = i = "oninput", s === "oninput" && o[i = s] && (i = "oninputCapture"), o[i] = a;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = K(n.children).forEach(function(c) {
      c.props.selected = o.value.indexOf(c.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = K(n.children).forEach(function(c) {
      c.props.selected = o.multiple ? o.defaultValue.indexOf(c.props.value) != -1 : o.defaultValue == c.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", Do)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = _r, xn && xn(e);
};
var An = p.__r;
p.__r = function(e) {
  An && An(e), rn = e.__c;
};
var Tn = p.diffed;
p.diffed = function(e) {
  Tn && Tn(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), rn = null;
};
var Mo = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return rn.__n[e.__c].props.value;
} } } };
function Ho(e) {
  return P.bind(null, e);
}
function ut(e) {
  return !!e && e.$$typeof === _r;
}
function Fo(e) {
  return ut(e) && e.type === H;
}
function Bo(e) {
  return ut(e) ? Jt.apply(null, arguments) : e;
}
function Uo(e) {
  return !!e.__k && (re(null, e), !0);
}
function Wo(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var zo = function(e, t) {
  return e(t);
}, jo = function(e, t) {
  return e(t);
}, Go = H;
function pr(e) {
  e();
}
function Vo(e) {
  return e;
}
function Zo() {
  return [!1, pr];
}
var qo = ct, Yo = ut;
function Xo(e, t) {
  var n = t(), r = j({ h: { __: n, v: t } }), o = r[0].h, i = r[1];
  return ct(function() {
    o.__ = n, o.v = t, St(o) && i({ h: o });
  }, [e, n, t]), _e(function() {
    return St(o) && i({ h: o }), e(function() {
      St(o) && i({ h: o });
    });
  }, [e]), n;
}
function St(e) {
  var t, n, r = e.v, o = e.__;
  try {
    var i = r();
    return !((t = o) === (n = i) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
}
var J = { useState: j, useId: _o, useReducer: cr, useEffect: _e, useLayoutEffect: ct, useInsertionEffect: qo, useTransition: Zo, useDeferredValue: Vo, useSyncExternalStore: Xo, startTransition: pr, useRef: lt, useImperativeHandle: ho, useMemo: le, useCallback: Se, useContext: tn, useDebugValue: Rt, version: "17.0.2", Children: Co, render: Ao, hydrate: To, unmountComponentAtNode: Uo, createPortal: $o, createElement: P, createContext: no, createFactory: Ho, cloneElement: Bo, createRef: Qr, Fragment: H, isValidElement: ut, isElement: Yo, isFragment: Fo, findDOMNode: Wo, Component: z, PureComponent: Dt, memo: go, forwardRef: vo, flushSync: jo, unstable_batchedUpdates: zo, StrictMode: Go, Suspense: Qe, SuspenseList: Te, lazy: So, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Mo };
function Qo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ko = function(t, n, r, o) {
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
    var f = a[u];
    if (!c(f))
      return !1;
    var l = t[f], _ = n[f];
    if (i = r ? r.call(o, l, _, f) : void 0, i === !1 || i === void 0 && l !== _)
      return !1;
  }
  return !0;
};
const Jo = /* @__PURE__ */ Qo(Ko);
var N = "-ms-", De = "-moz-", k = "-webkit-", mr = "comm", dt = "rule", on = "decl", ei = "@import", gr = "@keyframes", ti = "@layer", ni = Math.abs, an = String.fromCharCode, Mt = Object.assign;
function ri(e, t) {
  return R(e, 0) ^ 45 ? (((t << 2 ^ R(e, 0)) << 2 ^ R(e, 1)) << 2 ^ R(e, 2)) << 2 ^ R(e, 3) : 0;
}
function yr(e) {
  return e.trim();
}
function Y(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function C(e, t, n) {
  return e.replace(t, n);
}
function Ke(e, t) {
  return e.indexOf(t);
}
function R(e, t) {
  return e.charCodeAt(t) | 0;
}
function be(e, t, n) {
  return e.slice(t, n);
}
function V(e) {
  return e.length;
}
function vr(e) {
  return e.length;
}
function Re(e, t) {
  return t.push(e), e;
}
function oi(e, t) {
  return e.map(t).join("");
}
function Rn(e, t) {
  return e.filter(function(n) {
    return !Y(n, t);
  });
}
var ft = 1, Ee = 1, Cr = 0, F = 0, A = 0, Ie = "";
function ht(e, t, n, r, o, i, a, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: ft, column: Ee, length: a, return: "", siblings: s };
}
function ne(e, t) {
  return Mt(ht("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function ve(e) {
  for (; e.root; )
    e = ne(e.root, { children: [e] });
  Re(e, e.siblings);
}
function ii() {
  return A;
}
function ai() {
  return A = F > 0 ? R(Ie, --F) : 0, Ee--, A === 10 && (Ee = 1, ft--), A;
}
function G() {
  return A = F < Cr ? R(Ie, F++) : 0, Ee++, A === 10 && (Ee = 1, ft++), A;
}
function ue() {
  return R(Ie, F);
}
function Je() {
  return F;
}
function _t(e, t) {
  return be(Ie, e, t);
}
function Ht(e) {
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
function si(e) {
  return ft = Ee = 1, Cr = V(Ie = e), F = 0, [];
}
function ci(e) {
  return Ie = "", e;
}
function bt(e) {
  return yr(_t(F - 1, Ft(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function li(e) {
  for (; (A = ue()) && A < 33; )
    G();
  return Ht(e) > 2 || Ht(A) > 3 ? "" : " ";
}
function ui(e, t) {
  for (; --t && G() && !(A < 48 || A > 102 || A > 57 && A < 65 || A > 70 && A < 97); )
    ;
  return _t(e, Je() + (t < 6 && ue() == 32 && G() == 32));
}
function Ft(e) {
  for (; G(); )
    switch (A) {
      case e:
        return F;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ft(A);
        break;
      case 40:
        e === 41 && Ft(e);
        break;
      case 92:
        G();
        break;
    }
  return F;
}
function di(e, t) {
  for (; G() && e + A !== 57; )
    if (e + A === 84 && ue() === 47)
      break;
  return "/*" + _t(t, F - 1) + "*" + an(e === 47 ? e : G());
}
function fi(e) {
  for (; !Ht(ue()); )
    G();
  return _t(e, F);
}
function hi(e) {
  return ci(et("", null, null, null, [""], e = si(e), 0, [0], e));
}
function et(e, t, n, r, o, i, a, s, c) {
  for (var u = 0, f = 0, l = a, _ = 0, h = 0, m = 0, w = 1, $ = 1, g = 1, v = 0, b = "", O = o, I = i, S = r, y = b; $; )
    switch (m = v, v = G()) {
      case 40:
        if (m != 108 && R(y, l - 1) == 58) {
          Ke(y += C(bt(v), "&", "&\f"), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        y += bt(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        y += li(m);
        break;
      case 92:
        y += ui(Je() - 1, 7);
        continue;
      case 47:
        switch (ue()) {
          case 42:
          case 47:
            Re(_i(di(G(), Je()), t, n, c), c);
            break;
          default:
            y += "/";
        }
        break;
      case 123 * w:
        s[u++] = V(y) * g;
      case 125 * w:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            $ = 0;
          case 59 + f:
            g == -1 && (y = C(y, /\f/g, "")), h > 0 && V(y) - l && Re(h > 32 ? Pn(y + ";", r, n, l - 1, c) : Pn(C(y, " ", "") + ";", r, n, l - 2, c), c);
            break;
          case 59:
            y += ";";
          default:
            if (Re(S = Ln(y, t, n, u, f, o, s, b, O = [], I = [], l, i), i), v === 123)
              if (f === 0)
                et(y, t, S, S, O, i, l, s, I);
              else
                switch (_ === 99 && R(y, 3) === 110 ? 100 : _) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    et(e, S, S, r && Re(Ln(e, S, S, 0, 0, o, s, b, o, O = [], l, I), I), o, I, l, s, r ? O : I);
                    break;
                  default:
                    et(y, S, S, S, [""], I, 0, s, I);
                }
        }
        u = f = h = 0, w = g = 1, b = y = "", l = a;
        break;
      case 58:
        l = 1 + V(y), h = m;
      default:
        if (w < 1) {
          if (v == 123)
            --w;
          else if (v == 125 && w++ == 0 && ai() == 125)
            continue;
        }
        switch (y += an(v), v * w) {
          case 38:
            g = f > 0 ? 1 : (y += "\f", -1);
            break;
          case 44:
            s[u++] = (V(y) - 1) * g, g = 1;
            break;
          case 64:
            ue() === 45 && (y += bt(G())), _ = ue(), f = l = V(b = y += fi(Je())), v++;
            break;
          case 45:
            m === 45 && V(y) == 2 && (w = 0);
        }
    }
  return i;
}
function Ln(e, t, n, r, o, i, a, s, c, u, f, l) {
  for (var _ = o - 1, h = o === 0 ? i : [""], m = vr(h), w = 0, $ = 0, g = 0; w < r; ++w)
    for (var v = 0, b = be(e, _ + 1, _ = ni($ = a[w])), O = e; v < m; ++v)
      (O = yr($ > 0 ? h[v] + " " + b : C(b, /&\f/g, h[v]))) && (c[g++] = O);
  return ht(e, t, n, o === 0 ? dt : s, c, u, f, l);
}
function _i(e, t, n, r) {
  return ht(e, t, n, mr, an(ii()), be(e, 2, -2), 0, r);
}
function Pn(e, t, n, r, o) {
  return ht(e, t, n, on, be(e, 0, r), be(e, r + 1, -1), r, o);
}
function wr(e, t, n) {
  switch (ri(e, t)) {
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
      return De + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return k + e + De + e + N + e + e;
    case 5936:
      switch (R(e, t + 11)) {
        case 114:
          return k + e + N + C(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return k + e + N + C(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return k + e + N + C(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return k + e + N + e + e;
    case 6165:
      return k + e + N + "flex-" + e + e;
    case 5187:
      return k + e + C(e, /(\w+).+(:[^]+)/, k + "box-$1$2" + N + "flex-$1$2") + e;
    case 5443:
      return k + e + N + "flex-item-" + C(e, /flex-|-self/g, "") + (Y(e, /flex-|baseline/) ? "" : N + "grid-row-" + C(e, /flex-|-self/g, "")) + e;
    case 4675:
      return k + e + N + "flex-line-pack" + C(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return k + e + N + C(e, "shrink", "negative") + e;
    case 5292:
      return k + e + N + C(e, "basis", "preferred-size") + e;
    case 6060:
      return k + "box-" + C(e, "-grow", "") + k + e + N + C(e, "grow", "positive") + e;
    case 4554:
      return k + C(e, /([^-])(transform)/g, "$1" + k + "$2") + e;
    case 6187:
      return C(C(C(e, /(zoom-|grab)/, k + "$1"), /(image-set)/, k + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return C(e, /(image-set\([^]*)/, k + "$1$`$1");
    case 4968:
      return C(C(e, /(.+:)(flex-)?(.*)/, k + "box-pack:$3" + N + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + k + e + e;
    case 4200:
      if (!Y(e, /flex-|baseline/))
        return N + "grid-column-align" + be(e, t) + e;
      break;
    case 2592:
    case 3360:
      return N + C(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, Y(r.props, /grid-\w+-end/);
      }) ? ~Ke(e + (n = n[t].value), "span") ? e : N + C(e, "-start", "") + e + N + "grid-row-span:" + (~Ke(n, "span") ? Y(n, /\d+/) : +Y(n, /\d+/) - +Y(e, /\d+/)) + ";" : N + C(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return Y(r.props, /grid-\w+-start/);
      }) ? e : N + C(C(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return C(e, /(.+)-inline(.+)/, k + "$1$2") + e;
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
      if (V(e) - 1 - t > 6)
        switch (R(e, t + 1)) {
          case 109:
            if (R(e, t + 4) !== 45)
              break;
          case 102:
            return C(e, /(.+:)(.+)-([^]+)/, "$1" + k + "$2-$3$1" + De + (R(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Ke(e, "stretch") ? wr(C(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return C(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, a, s, c, u) {
        return N + o + ":" + i + u + (a ? N + o + "-span:" + (s ? c : +c - +i) + u : "") + e;
      });
    case 4949:
      if (R(e, t + 6) === 121)
        return C(e, ":", ":" + k) + e;
      break;
    case 6444:
      switch (R(e, R(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return C(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + k + (R(e, 14) === 45 ? "inline-" : "") + "box$3$1" + k + "$2$3$1" + N + "$2box$3") + e;
        case 100:
          return C(e, ":", ":" + N) + e;
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
function ot(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function pi(e, t, n, r) {
  switch (e.type) {
    case ti:
      if (e.children.length)
        break;
    case ei:
    case on:
      return e.return = e.return || e.value;
    case mr:
      return "";
    case gr:
      return e.return = e.value + "{" + ot(e.children, r) + "}";
    case dt:
      if (!V(e.value = e.props.join(",")))
        return "";
  }
  return V(n = ot(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function mi(e) {
  var t = vr(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function gi(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function yi(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case on:
        e.return = wr(e.value, e.length, n);
        return;
      case gr:
        return ot([ne(e, { value: C(e.value, "@", "@" + k) })], r);
      case dt:
        if (e.length)
          return oi(n = e.props, function(o) {
            switch (Y(o, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                ve(ne(e, { props: [C(o, /:(read-\w+)/, ":" + De + "$1")] })), ve(ne(e, { props: [o] })), Mt(e, { props: Rn(n, r) });
                break;
              case "::placeholder":
                ve(ne(e, { props: [C(o, /:(plac\w+)/, ":" + k + "input-$1")] })), ve(ne(e, { props: [C(o, /:(plac\w+)/, ":" + De + "$1")] })), ve(ne(e, { props: [C(o, /:(plac\w+)/, N + "input-$1")] })), ve(ne(e, { props: [o] })), Mt(e, { props: Rn(n, r) });
                break;
            }
            return "";
          });
    }
}
var vi = {
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
}, E = {}, pe = typeof process < "u" && E !== void 0 && (E.REACT_APP_SC_ATTR || E.SC_ATTR) || "data-styled", sn = typeof window < "u" && "HTMLElement" in window, Ci = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && E !== void 0 && E.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && E.REACT_APP_SC_DISABLE_SPEEDY !== "" ? E.REACT_APP_SC_DISABLE_SPEEDY !== "false" && E.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && E !== void 0 && E.SC_DISABLE_SPEEDY !== void 0 && E.SC_DISABLE_SPEEDY !== "" ? E.SC_DISABLE_SPEEDY !== "false" && E.SC_DISABLE_SPEEDY : E.NODE_ENV !== "production"), Dn = /invalid hook call/i, Ve = /* @__PURE__ */ new Set(), wi = function(e, t) {
  if (E.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(a) {
        for (var s = [], c = 1; c < arguments.length; c++)
          s[c - 1] = arguments[c];
        Dn.test(a) ? (i = !1, Ve.delete(r)) : o.apply(void 0, he([a], s, !1));
      }, lt(), i && !Ve.has(r) && (console.warn(r), Ve.add(r));
    } catch (a) {
      Dn.test(a.message) && Ve.delete(r);
    } finally {
      console.error = o;
    }
  }
}, pt = Object.freeze([]), $e = Object.freeze({});
function Si(e, t, n) {
  return n === void 0 && (n = $e), e.theme !== n.theme && e.theme || t || n.theme;
}
var Bt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), bi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ei = /(^-|-$)/g;
function Mn(e) {
  return e.replace(bi, "-").replace(Ei, "");
}
var $i = /(a)(d)/gi, Hn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ut(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    n = Hn(t % 52) + n;
  return (Hn(t % 52) + n).replace($i, "$1-$2");
}
var Et, se = function(e, t) {
  for (var n = t.length; n; )
    e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Sr = function(e) {
  return se(5381, e);
};
function br(e) {
  return Ut(Sr(e) >>> 0);
}
function Er(e) {
  return E.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function $t(e) {
  return typeof e == "string" && (E.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var $r = typeof Symbol == "function" && Symbol.for, kr = $r ? Symbol.for("react.memo") : 60115, ki = $r ? Symbol.for("react.forward_ref") : 60112, Oi = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Ii = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Or = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Ni = ((Et = {})[ki] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Et[kr] = Or, Et);
function Fn(e) {
  return ("type" in (t = e) && t.type.$$typeof) === kr ? Or : "$$typeof" in e ? Ni[e.$$typeof] : Oi;
  var t;
}
var xi = Object.defineProperty, Ai = Object.getOwnPropertyNames, Bn = Object.getOwnPropertySymbols, Ti = Object.getOwnPropertyDescriptor, Ri = Object.getPrototypeOf, Un = Object.prototype;
function Ir(e, t, n) {
  if (typeof t != "string") {
    if (Un) {
      var r = Ri(t);
      r && r !== Un && Ir(e, r, n);
    }
    var o = Ai(t);
    Bn && (o = o.concat(Bn(t)));
    for (var i = Fn(e), a = Fn(t), s = 0; s < o.length; ++s) {
      var c = o[s];
      if (!(c in Ii || n && n[c] || a && c in a || i && c in i)) {
        var u = Ti(t, c);
        try {
          xi(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
function me(e) {
  return typeof e == "function";
}
function cn(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function ce(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Wt(e, t) {
  if (e.length === 0)
    return "";
  for (var n = e[0], r = 1; r < e.length; r++)
    n += t ? t + e[r] : e[r];
  return n;
}
function ke(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function zt(e, t, n) {
  if (n === void 0 && (n = !1), !n && !ke(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++)
      e[r] = zt(e[r], t[r]);
  else if (ke(t))
    for (var r in t)
      e[r] = zt(e[r], t[r]);
  return e;
}
function ln(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Li = E.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Pi() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1)
    r.push(e[o]);
  return r.forEach(function(a) {
    n = n.replace(/%[a-z]/, a);
  }), n;
}
function q(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return E.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Pi.apply(void 0, he([Li[e]], t, !1)).trim());
}
var Di = function() {
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
          throw q(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(r), this.length = i;
      for (var a = o; a < i; a++)
        this.groupSizes[a] = 0;
    }
    for (var s = this.indexOfGroup(t + 1), c = (a = 0, n.length); a < c; a++)
      this.tag.insertRule(s, n[a]) && (this.groupSizes[t]++, s++);
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
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, a = o; a < i; a++)
      n += "".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);
    return n;
  }, e;
}(), tt = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), nt = 1, Ze = function(e) {
  if (tt.has(e))
    return tt.get(e);
  for (; it.has(nt); )
    nt++;
  var t = nt++;
  if (E.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1073741824))
    throw q(16, "".concat(t));
  return tt.set(e, t), it.set(t, e), t;
}, Mi = function(e, t) {
  nt = t + 1, tt.set(e, t), it.set(t, e);
}, Hi = "style[".concat(pe, "][").concat("data-styled-version", '="').concat("6.1.1", '"]'), Fi = new RegExp("^".concat(pe, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Bi = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++)
    (r = o[i]) && e.registerName(t, r);
}, Ui = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(`/*!sc*/
`), o = [], i = 0, a = r.length; i < a; i++) {
    var s = r[i].trim();
    if (s) {
      var c = s.match(Fi);
      if (c) {
        var u = 0 | parseInt(c[1], 10), f = c[2];
        u !== 0 && (Mi(f, u), Bi(e, f, c[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else
        o.push(s);
    }
  }
};
function Wi() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Nr = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(s) {
    var c = Array.from(s.querySelectorAll("style[".concat(pe, "]")));
    return c[c.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(pe, "active"), r.setAttribute("data-styled-version", "6.1.1");
  var a = Wi();
  return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
}, zi = function() {
  function e(t) {
    this.element = Nr(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet)
        return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var a = r[o];
        if (a.ownerNode === n)
          return a;
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
}(), ji = function() {
  function e(t) {
    this.element = Nr(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), Gi = function() {
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
}(), Wn = sn, Vi = { isServer: !sn, useCSSOMInjection: !Ci }, xr = function() {
  function e(t, n, r) {
    t === void 0 && (t = $e), n === void 0 && (n = {});
    var o = this;
    this.options = L(L({}, Vi), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && sn && Wn && (Wn = !1, function(i) {
      for (var a = document.querySelectorAll(Hi), s = 0, c = a.length; s < c; s++) {
        var u = a[s];
        u && u.getAttribute(pe) !== "active" && (Ui(i, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this)), ln(this, function() {
      return function(i) {
        for (var a = i.getTag(), s = a.length, c = "", u = function(l) {
          var _ = function(g) {
            return it.get(g);
          }(l);
          if (_ === void 0)
            return "continue";
          var h = i.names.get(_), m = a.getGroup(l);
          if (h === void 0 || m.length === 0)
            return "continue";
          var w = "".concat(pe, ".g").concat(l, '[id="').concat(_, '"]'), $ = "";
          h !== void 0 && h.forEach(function(g) {
            g.length > 0 && ($ += "".concat(g, ","));
          }), c += "".concat(m).concat(w, '{content:"').concat($, '"}').concat(`/*!sc*/
`);
        }, f = 0; f < s; f++)
          u(f);
        return c;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return Ze(t);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(L(L({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new Gi(o) : r ? new zi(o) : new ji(o);
    }(this.options), new Di(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (Ze(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(Ze(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Ze(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), Zi = /&/g, qi = /^\s*\/\/.*$/gm;
function Ar(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = Ar(n.children, t)), n;
  });
}
function Tr(e) {
  var t, n, r, o = e === void 0 ? $e : e, i = o.options, a = i === void 0 ? $e : i, s = o.plugins, c = s === void 0 ? pt : s, u = function(_, h, m) {
    return m === n || m.startsWith(n) && m.endsWith(n) && m.replaceAll(n, "").length > 0 ? ".".concat(t) : _;
  }, f = c.slice();
  f.push(function(_) {
    _.type === dt && _.value.includes("&") && (_.props[0] = _.props[0].replace(Zi, n).replace(r, u));
  }), a.prefix && f.push(yi), f.push(pi);
  var l = function(_, h, m, w) {
    h === void 0 && (h = ""), m === void 0 && (m = ""), w === void 0 && (w = "&"), t = w, n = h, r = new RegExp("\\".concat(n, "\\b"), "g");
    var $ = _.replace(qi, ""), g = hi(m || h ? "".concat(m, " ").concat(h, " { ").concat($, " }") : $);
    a.namespace && (g = Ar(g, a.namespace));
    var v = [];
    return ot(g, mi(f.concat(gi(function(b) {
      return v.push(b);
    })))), v;
  };
  return l.hash = c.length ? c.reduce(function(_, h) {
    return h.name || q(15), se(_, h.name);
  }, 5381).toString() : "", l;
}
var Yi = new xr(), jt = Tr(), un = J.createContext({ shouldForwardProp: void 0, styleSheet: Yi, stylis: jt });
un.Consumer;
var Xi = J.createContext(void 0);
function Gt() {
  return tn(un);
}
function Qi(e) {
  var t = j(e.stylisPlugins), n = t[0], r = t[1], o = Gt().styleSheet, i = le(function() {
    var c = o;
    return e.sheet ? c = e.sheet : e.target && (c = c.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (c = c.reconstructWithOptions({ useCSSOMInjection: !1 })), c;
  }, [e.disableCSSOMInjection, e.sheet, e.target, o]), a = le(function() {
    return Tr({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: n });
  }, [e.enableVendorPrefixes, e.namespace, n]);
  _e(function() {
    Jo(n, e.stylisPlugins) || r(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var s = le(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: a };
  }, [e.shouldForwardProp, i, a]);
  return J.createElement(un.Provider, { value: s }, J.createElement(Xi.Provider, { value: a }, e.children));
}
var Vt = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = jt);
      var a = r.name + i.hash;
      o.hasNameForId(r.id, a) || o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, ln(this, function() {
      throw q(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = jt), this.name + t.hash;
  }, e;
}(), Ki = function(e) {
  return e >= "A" && e <= "Z";
};
function zn(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-")
      return e;
    Ki(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Rr = function(e) {
  return e == null || e === !1 || e === "";
}, Lr = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !Rr(i) && (Array.isArray(i) && i.isCss || me(i) ? r.push("".concat(zn(o), ":"), i, ";") : ke(i) ? r.push.apply(r, he(he(["".concat(o, " {")], Lr(i), !1), ["}"], !1)) : r.push("".concat(zn(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in vi || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function de(e, t, n, r) {
  if (Rr(e))
    return [];
  if (cn(e))
    return [".".concat(e.styledComponentId)];
  if (me(e)) {
    if (!me(i = e) || i.prototype && i.prototype.isReactComponent || !t)
      return [e];
    var o = e(t);
    return E.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Vt || ke(o) || o === null || console.error("".concat(Er(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), de(o, t, n, r);
  }
  var i;
  return e instanceof Vt ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : ke(e) ? Lr(e) : Array.isArray(e) ? Array.prototype.concat.apply(pt, e.map(function(a) {
    return de(a, t, n, r);
  })) : [e.toString()];
}
function Ji(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (me(n) && !cn(n))
      return !1;
  }
  return !0;
}
var ea = Sr("6.1.1"), ta = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = E.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Ji(t), this.componentId = n, this.baseHash = se(ea, n), this.baseStyle = r, xr.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash)
      if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId))
        o = ce(o, this.staticRulesId);
      else {
        var i = Wt(de(this.rules, t, n, r)), a = Ut(se(this.baseHash, i) >>> 0);
        if (!n.hasNameForId(this.componentId, a)) {
          var s = r(i, ".".concat(a), void 0, this.componentId);
          n.insertRules(this.componentId, a, s);
        }
        o = ce(o, a), this.staticRulesId = a;
      }
    else {
      for (var c = se(this.baseHash, r.hash), u = "", f = 0; f < this.rules.length; f++) {
        var l = this.rules[f];
        if (typeof l == "string")
          u += l, E.NODE_ENV !== "production" && (c = se(c, l));
        else if (l) {
          var _ = Wt(de(l, t, n, r));
          c = se(c, _ + f), u += _;
        }
      }
      if (u) {
        var h = Ut(c >>> 0);
        n.hasNameForId(this.componentId, h) || n.insertRules(this.componentId, h, r(u, ".".concat(h), void 0, this.componentId)), o = ce(o, h);
      }
    }
    return o;
  }, e;
}(), He = J.createContext(void 0);
He.Consumer;
function na() {
  var e = tn(He);
  if (!e)
    throw q(18);
  return e;
}
function ra(e) {
  var t = J.useContext(He), n = le(function() {
    return function(r, o) {
      if (!r)
        throw q(14);
      if (me(r)) {
        var i = r(o);
        if (E.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object"))
          throw q(7);
        return i;
      }
      if (Array.isArray(r) || typeof r != "object")
        throw q(8);
      return o ? L(L({}, o), r) : r;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? J.createElement(He.Provider, { value: n }, e.children) : null;
}
var kt = {}, jn = /* @__PURE__ */ new Set();
function oa(e, t, n) {
  var r = cn(e), o = e, i = !$t(e), a = t.attrs, s = a === void 0 ? pt : a, c = t.componentId, u = c === void 0 ? function(O, I) {
    var S = typeof O != "string" ? "sc" : Mn(O);
    kt[S] = (kt[S] || 0) + 1;
    var y = "".concat(S, "-").concat(br("6.1.1" + S + kt[S]));
    return I ? "".concat(I, "-").concat(y) : y;
  }(t.displayName, t.parentComponentId) : c, f = t.displayName, l = f === void 0 ? function(O) {
    return $t(O) ? "styled.".concat(O) : "Styled(".concat(Er(O), ")");
  }(e) : f, _ = t.displayName && t.componentId ? "".concat(Mn(t.displayName), "-").concat(t.componentId) : t.componentId || u, h = r && o.attrs ? o.attrs.concat(s).filter(Boolean) : s, m = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var w = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var $ = t.shouldForwardProp;
      m = function(O, I) {
        return w(O, I) && $(O, I);
      };
    } else
      m = w;
  }
  var g = new ta(n, _, r ? o.componentStyle : void 0);
  function v(O, I) {
    return function(S, y, U) {
      var T = S.attrs, ge = S.componentStyle, zr = S.defaultProps, jr = S.foldedComponentIds, fn = S.styledComponentId, Gr = S.target, Vr = J.useContext(He), Zr = Gt(), gt = S.shouldForwardProp || Zr.shouldForwardProp;
      E.NODE_ENV !== "production" && Rt(fn);
      var ee = function(Ue, Ae, We) {
        for (var ye, ie = L(L({}, Ae), { className: void 0, theme: We }), Ct = 0; Ct < Ue.length; Ct += 1) {
          var ze = me(ye = Ue[Ct]) ? ye(ie) : ye;
          for (var te in ze)
            ie[te] = te === "className" ? ce(ie[te], ze[te]) : te === "style" ? L(L({}, ie[te]), ze[te]) : ze[te];
        }
        return Ae.className && (ie.className = ce(ie.className, Ae.className)), ie;
      }(T, y, Si(y, Vr, zr) || $e), Ne = ee.as || Gr, xe = {};
      for (var M in ee)
        ee[M] === void 0 || M[0] === "$" || M === "as" || M === "theme" || (M === "forwardedAs" ? xe.as = ee.forwardedAs : gt && !gt(M, Ne) || (xe[M] = ee[M], gt || E.NODE_ENV !== "development" || fo(M) || jn.has(M) || !Bt.has(Ne) || (jn.add(M), console.warn('styled-components: it looks like an unknown prop "'.concat(M, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var yt = function(Ue, Ae) {
        var We = Gt(), ye = Ue.generateAndInjectStyles(Ae, We.styleSheet, We.stylis);
        return E.NODE_ENV !== "production" && Rt(ye), ye;
      }(ge, ee);
      E.NODE_ENV !== "production" && S.warnTooManyClasses && S.warnTooManyClasses(yt);
      var vt = ce(jr, fn);
      return yt && (vt += " " + yt), ee.className && (vt += " " + ee.className), xe[$t(Ne) && !Bt.has(Ne) ? "class" : "className"] = vt, xe.ref = U, P(Ne, xe);
    }(b, O, I);
  }
  v.displayName = l;
  var b = J.forwardRef(v);
  return b.attrs = h, b.componentStyle = g, b.displayName = l, b.shouldForwardProp = m, b.foldedComponentIds = r ? ce(o.foldedComponentIds, o.styledComponentId) : "", b.styledComponentId = _, b.target = r ? o.target : e, Object.defineProperty(b, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(O) {
    this._foldedDefaultProps = r ? function(I) {
      for (var S = [], y = 1; y < arguments.length; y++)
        S[y - 1] = arguments[y];
      for (var U = 0, T = S; U < T.length; U++)
        zt(I, T[U], !0);
      return I;
    }({}, o.defaultProps, O) : O;
  } }), E.NODE_ENV !== "production" && (wi(l, _), b.warnTooManyClasses = /* @__PURE__ */ function(O, I) {
    var S = {}, y = !1;
    return function(U) {
      if (!y && (S[U] = !0, Object.keys(S).length >= 200)) {
        var T = I ? ' with the id of "'.concat(I, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(O).concat(T, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), y = !0, S = {};
      }
    };
  }(l, _)), ln(b, function() {
    return ".".concat(b.styledComponentId);
  }), i && Ir(b, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), b;
}
function Gn(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var Vn = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function dn(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  if (me(e) || ke(e)) {
    var r = e;
    return Vn(de(Gn(pt, he([r], t, !0))));
  }
  var o = e;
  return t.length === 0 && o.length === 1 && typeof o[0] == "string" ? de(o) : Vn(de(Gn(o, t)));
}
function Zt(e, t, n) {
  if (n === void 0 && (n = $e), !t)
    throw q(1, t);
  var r = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++)
      i[a - 1] = arguments[a];
    return e(t, n, dn.apply(void 0, he([o], i, !1)));
  };
  return r.attrs = function(o) {
    return Zt(e, t, L(L({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Zt(e, t, L(L({}, n), o));
  }, r;
}
var Pr = function(e) {
  return Zt(oa, e);
}, B = Pr;
Bt.forEach(function(e) {
  B[e] = Pr(e);
});
function mt(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  E.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = Wt(dn.apply(void 0, he([e], t, !1))), o = br(r);
  return new Vt(o, r);
}
E.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var qe = "__sc-".concat(pe, "__");
E.NODE_ENV !== "production" && E.NODE_ENV !== "test" && typeof window < "u" && (window[qe] || (window[qe] = 0), window[qe] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[qe] += 1);
var ia = 0;
function d(e, t, n, r, o, i) {
  var a, s, c = {};
  for (s in t)
    s == "ref" ? a = t[s] : c[s] = t[s];
  var u = { type: e, props: c, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --ia, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (a = e.defaultProps))
    for (s in a)
      c[s] === void 0 && (c[s] = a[s]);
  return p.vnode && p.vnode(u), u;
}
const Dr = ({
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
}), D = {
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
}, aa = 2, Ot = 14, Zn = 5, qn = 0.027;
var X = /* @__PURE__ */ ((e) => (e[e.S = 300] = "S", e[e.M = 400] = "M", e[e.L = 500] = "L", e[e.Default = 600] = "Default", e))(X || {});
const Le = {
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
}, Yn = {
  loading: {
    text: "Loading. Please wait.",
    visible: !0
  },
  waiting: {
    text: "Waiting for input...",
    visible: !0
  }
}, sa = {
  [W.CANDIDATE_SELECTION]: "Stay still…",
  [W.FACE_TOO_CLOSE]: "Move back",
  [W.FACE_TOO_FAR]: "Move closer",
  [W.FACE_CENTERING]: "Center your face",
  [W.FACE_NOT_PRESENT]: "Position your face into the circle",
  [W.SHARPNESS_TOO_LOW]: "Turn face against light",
  [W.BRIGHTNESS_TOO_LOW]: "Turn face against light",
  [W.BRIGHTNESS_TOO_HIGH]: "Less light needed",
  [W.DEVICE_PITCHED]: "Hold your phone at eye level"
}, ca = D.CIRCLE_SOLID, la = "rgba(19, 19, 19, 0.5)", ua = 34, Mr = (e) => e ? e.width < e.height ? Math.max(Ot, Zn + e.width * qn) : Math.max(Ot, Zn + e.height * qn) : Ot, da = (e) => e > X.Default ? Le[X.Default] : e > X.L ? Le[X.L] : e > X.M ? Le[X.M] : Le[X.S], fa = (e) => e ? da(e.width) : Le[X.Default], ha = B.div`
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
`, _a = B.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, pa = B.p`
  background: ${(e) => e.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(e) => `${e.$fontSize}px`};
  font-family: Montserrat, Arial, sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: 1em;
  max-width: 80%;
`, qt = ({
  fontSize: e,
  Icon: t,
  isCameraReady: n,
  position: r = "absolute",
  text: o
}) => d(ha, {
  $isCameraReady: n,
  $position: r,
  children: d(_a, {
    children: [t ? d(t, {
      svgSize: e * 2
    }) : null, d(pa, {
      $fontSize: e,
      children: o
    })]
  })
}), Hr = ({
  fontSize: e,
  text: t = "An unknown error has occurred"
}) => d(qt, {
  fontSize: e,
  Icon: Dr,
  position: "relative",
  text: t
});
class ma extends z {
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
    return this.state.hasError ? d(Hr, {
      fontSize: Mr(this.props.videoElementSize),
      Icon: Dr,
      isCameraReady: !1
    }) : this.props.children;
  }
}
const ga = ({
  children: e,
  styleTarget: t,
  theme: n,
  videoElementSize: r
}) => d(Qi, {
  target: t,
  children: d(ra, {
    theme: n,
    children: d(ma, {
      videoElementSize: r,
      children: e
    })
  })
}), Fe = (e, t) => {
  const n = lt(t);
  _e(() => {
    n.current = t;
  }, [t]), _e(
    () => {
      const r = (o) => n.current(o);
      return document.addEventListener(e, r), () => {
        document.removeEventListener(e, r);
      };
    },
    [e]
    // Re-run if eventName
  );
}, ya = (e) => {
  const [t, n] = j(), r = Se((o) => {
    var i;
    n((i = o.detail) == null ? void 0 : i.size);
  }, [n]);
  return Fe(e, r), t;
}, va = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, It = {
  colors: va
}, Ca = (e) => e != null && e.theme ? {
  ...It,
  ...e.theme,
  colors: {
    ...It.colors,
    ...e.theme.colors
  }
} : It, wa = 0.75, Sa = 2, ba = (e) => Number.parseFloat(e.toFixed(3)), Fr = (e, t) => Math.min(e, t), Ea = (e, t) => {
  const n = Fr(t.width, t.height);
  return ba(e * n);
}, $a = ({
  height: e,
  width: t
}) => {
  const n = Fr(t, e) * wa, r = (t - n) / 2, o = (e - n) / 2;
  return {
    shiftX: r,
    shiftY: o,
    width: n,
    height: n
  };
}, ka = (e) => {
  const {
    height: t,
    shiftX: n,
    shiftY: r,
    width: o
  } = $a(e);
  return {
    shiftX: n / e.width,
    shiftY: r / e.height,
    width: o / e.width,
    height: t / e.height
  };
}, Oa = (e, t) => Ea(e, t) * Sa, Br = (e, t) => {
  document.dispatchEvent(new CustomEvent(e, {
    detail: t
  }));
}, at = class at {
  constructor() {
    je(this, "lastDetails", {});
    je(this, "delayedTime", 0);
  }
  static getInstance() {
    return this._instance || (this._instance = new at()), this._instance;
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
    this.isDetailChanged(t, n) && Br(t, n);
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
je(at, "_instance");
let Yt = at;
Yt.getInstance();
const Xn = (e, t) => {
  Br(e, {
    instruction: t
  });
};
class Ia {
  static async getVideoInputDeviceList() {
    return (await navigator.mediaDevices.enumerateDevices()).filter((n) => n.kind === "videoinput");
  }
}
const Na = () => {
  const [e, t] = j(!1);
  return _e(() => {
    (async () => {
      (await Ia.getVideoInputDeviceList()).length > 1 && t(!0);
    })();
  }, []), e;
}, xa = ({
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
}), Aa = ({
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
}), Ur = B.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(e) => e.$marginLeft ? `${e.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, Ta = ({
  marginLeft: e,
  size: t,
  ...n
}) => d(Ur, {
  $marginLeft: e,
  ...n,
  children: d(xa, {
    size: t
  })
}), Ra = ({
  marginLeft: e,
  size: t,
  ...n
}) => d(Ur, {
  $marginLeft: e,
  ...n,
  children: d(Aa, {
    size: t
  })
}), La = B.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.$padding}px`};
  z-index: 2;
`, Pa = ({
  customControlEvent: e,
  isSwitchCameraDisabled: t,
  videoElementSize: n
}) => {
  const r = Na(), {
    buttonPadding: o,
    iconSize: i,
    marginLeft: a
  } = fa(n), s = () => {
    Xn(e, Tt.TOGGLE_MIRROR);
  };
  return d(La, {
    $padding: o,
    children: [r && d(Ra, {
      disabled: t,
      onClick: () => {
        Xn(e, Tt.SWITCH_CAMERA);
      },
      size: i
    }), d(Ta, {
      marginLeft: r ? a : 0,
      onClick: s,
      size: i
    })]
  });
}, Da = B.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, Ma = ({
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
}), Ha = B.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`, Wr = ({
  backdropColor: e,
  children: t
}) => d(Ha, {
  children: d("svg", {
    height: "100%",
    width: "100%",
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
}), Fa = ({
  appState: e,
  appStateInstructions: t,
  backdropColor: n,
  fontSize: r,
  isBackdrop: o
}) => {
  const i = e === Z.ERROR || e === Z.RUNNING;
  return !e || i || !t[e].visible ? null : e === Z.WAITING ? d(H, {
    children: [o && d(Wr, {
      backdropColor: n
    }), d(qt, {
      fontSize: r,
      isCameraReady: !0,
      text: t[Z.WAITING].text
    })]
  }) : d(qt, {
    fontSize: r,
    Icon: Ma,
    isCameraReady: !0,
    text: t[Z.LOADING].text
  });
}, Ba = "2.5s", Ua = "0.3s", Wa = "linear", za = mt`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
mt`
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`;
mt`
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
mt`
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
const ja = B.div`
  position: absolute;
  left: 50%;

  ${(e) => e.$cssTop ? `top: ${e.$cssTop}%;` : ""}
  ${(e) => e.$cssBottom ? `bottom: ${e.$cssBottom}%;` : ""}
    ${(e) => e.$isAnimating && dn`
      animation: ${za} ${Ua}
        ${Wa} both;
      animation-delay: ${Ba};

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
`, Ga = B.div`
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
  font-family: Montserrat, Arial, sans-serif;
  font-weight: 600;
  line-height: 1em;
  font-size: ${(e) => `${e.$fontSize}px`};
  white-space: ${(e) => e.$wrap ? "break-spaces" : "nowrap"};
`, Va = ({
  children: e,
  cssBottom: t,
  cssTop: n,
  fontSize: r,
  isAnimating: o,
  isInCandidateSelection: i,
  isPortrait: a
}) => d(ja, {
  $cssBottom: t,
  $cssTop: n,
  $isAnimating: o,
  $isPortrait: a,
  children: d(Ga, {
    $fontSize: r,
    $isInCandidateSelection: i,
    $wrap: e.length > ua,
    children: e
  })
}), Za = () => d("svg", {
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
}), qa = () => d("svg", {
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
}), Ya = () => d("svg", {
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
}), Xa = () => d("svg", {
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
}), Qa = () => d("svg", {
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
}), Ka = () => d("svg", {
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
}), Ja = () => d("svg", {
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
}), es = () => d("svg", {
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
}), ts = B.div`
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
`, ns = ({
  children: e,
  isInCandidateSelection: t,
  placeholderRectangle: n
}) => d(ts, {
  $isInCandidateSelection: t,
  $placeholderRectangle: n,
  children: e
}), rs = {
  [D.CIRCLE_SOLID]: d(Za, {}),
  [D.ELLIPSE_SOLID]: d(qa, {}),
  [D.MAN_SOLID]: d(Ya, {}),
  [D.WOMAN_SOLID]: d(es, {}),
  [D.SQUARE_ROUNDED_DASH]: d(Qa, {}),
  [D.SQUARE_ROUNDED_SOLID]: d(Ka, {}),
  [D.SQUARE_DASH]: d(Xa, {}),
  [D.SQUARE_SOLID]: d(Ja, {})
}, os = ({
  backdropColor: e,
  icon: t,
  isBackdrop: n,
  placeholderRectangle: r,
  ...o
}) => d(H, {
  children: [n && d(Wr, {
    backdropColor: e,
    children: d("rect", {
      fill: "#000",
      height: `${r.height * 100}%`,
      rx: "50%",
      width: `${r.width * 100}%`,
      x: `${r.shiftX * 100}%`,
      y: `${r.shiftY * 100}%`
    })
  }), d(ns, {
    placeholderRectangle: r,
    ...o,
    children: rs[t]
  })]
}), is = () => {
  const [e, t] = j(), [n, r] = j(!1), o = Se((c) => {
    var f, l;
    t((f = c == null ? void 0 : c.detail) == null ? void 0 : f.cameraResolution);
    const u = (l = c == null ? void 0 : c.detail) == null ? void 0 : l.isMirroring;
    u !== void 0 && r(u);
  }, [t]);
  Fe(fe.CAMERA_PROPS_CHANGED, o);
  const [i, a] = j(
    W.FACE_NOT_PRESENT
    // FIXME Default instruction should not be here
  ), s = Se((c) => {
    var u;
    a((u = c == null ? void 0 : c.detail) == null ? void 0 : u.instructionCode);
  }, [a]);
  return Fe(fe.INSTRUCTION_CHANGED, s), {
    cameraResolution: e,
    instructionCode: i,
    isMirroring: n
  };
}, as = () => {
  const [e, t] = j(Z.LOADING), [n, r] = j(), o = Se((i) => {
    var s, c;
    t((s = i.detail) == null ? void 0 : s.appState);
    const a = (c = i == null ? void 0 : i.detail) == null ? void 0 : c.error;
    a && r(a);
  }, [t, r]);
  return Fe(fe.STATE_CHANGED, o), {
    appState: e,
    error: n
  };
}, ss = B.canvas`
  transform: ${(e) => e.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, cs = (e) => {
  const t = e.getContext("2d");
  t && t.clearRect(0, 0, t.canvas.width, t.canvas.height);
}, ls = ({
  cameraResolution: e,
  isImageMirror: t
}) => {
  const n = lt(null), r = na(), [o, i] = j(), a = Se((s) => {
    var c;
    i((c = s == null ? void 0 : s.detail) == null ? void 0 : c.detectedObject);
  }, [i]);
  return Fe(fe.DETECTED_FACE_CHANGED, a), _e(() => {
    if (!n.current)
      return;
    const s = (c, u) => {
      var m;
      if (!u)
        return;
      const {
        faceCenter: f,
        faceSize: l
      } = u, _ = (m = n == null ? void 0 : n.current) == null ? void 0 : m.getContext("2d");
      if (!_)
        return;
      const h = Oa(l, c);
      _.beginPath(), _.arc(f.x, f.y, h, 0, 2 * Math.PI, !1), _.lineWidth = aa, _.strokeStyle = r.colors.placeholderColor, _.stroke();
    };
    n.current.width = e.width, n.current.height = e.height, cs(n.current), s(e, o);
  }, [e, o, r.colors.placeholderColor]), d(ss, {
    ref: n,
    $isImageMirror: t
  });
}, us = ({
  appStateInstructions: e,
  backdropColor: t,
  instructions: n,
  placeholderIcon: r,
  showCameraButtons: o,
  showDetectionLayer: i,
  videoElementSize: a
}) => {
  const {
    appState: s,
    error: c
  } = as(), {
    cameraResolution: u,
    instructionCode: f,
    isMirroring: l
  } = is(), _ = f === W.CANDIDATE_SELECTION, h = Mr(a), m = r === D.CIRCLE_SOLID;
  if (s === Z.ERROR)
    return d(Hr, {
      fontSize: h,
      text: c == null ? void 0 : c.message
    });
  if (s === Z.RUNNING && u) {
    const w = ka(u);
    return (r === D.WOMAN_SOLID || r === D.MAN_SOLID || r === D.ELLIPSE_SOLID) && console.warn("The placeholder icon you are currently using is deprecated. Please use one of our alternative placeholders instead. Read more here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-face/latest/documentation/#ui-component"), d(H, {
      children: [i && d(ls, {
        cameraResolution: u,
        isImageMirror: l
      }), d(os, {
        backdropColor: t,
        icon: r,
        isBackdrop: m,
        isInCandidateSelection: _,
        placeholderRectangle: w
      }), f && d(Va, {
        cssBottom: (w.height + w.shiftY) * 100,
        fontSize: h,
        isInCandidateSelection: _,
        isPortrait: u.width < u.height,
        children: n[f]
      }), o && d(Pa, {
        customControlEvent: fe.CONTROL,
        isSwitchCameraDisabled: _,
        videoElementSize: a
      })]
    });
  }
  return d(Fa, {
    appState: s,
    appStateInstructions: e,
    backdropColor: t,
    fontSize: h,
    isBackdrop: m
  });
}, ds = (e) => {
  var s, c;
  const t = {
    ...sa,
    ...e == null ? void 0 : e.instructions
  }, n = {
    [Z.LOADING]: {
      ...Yn.loading,
      ...(s = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : s.loading
    },
    [Z.WAITING]: {
      ...Yn.waiting,
      ...(c = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : c.waiting
    }
  }, r = (e == null ? void 0 : e.placeholder) ?? ca, o = (e == null ? void 0 : e.backdropColor) ?? la, i = (e == null ? void 0 : e.showDetectionLayer) ?? !1, a = (e == null ? void 0 : e.showCameraButtons) ?? !1;
  return {
    faceInstructions: t,
    faceAppStateInstructions: n,
    facePlaceholderIcon: r,
    backdropColor: o,
    showDetectionLayer: i,
    showCameraButtons: a
  };
}, fs = ({
  props: e
}) => {
  const {
    backdropColor: t,
    faceAppStateInstructions: n,
    faceInstructions: r,
    facePlaceholderIcon: o,
    showCameraButtons: i,
    showDetectionLayer: a
  } = ds(e), s = ya(fe.VIDEO_ELEMENT_SIZE), c = Ca(e);
  return d(ga, {
    styleTarget: e == null ? void 0 : e.styleTarget,
    theme: c,
    videoElementSize: s,
    children: d(us, {
      appStateInstructions: n,
      backdropColor: t,
      instructions: r,
      placeholderIcon: o,
      showCameraButtons: i,
      showDetectionLayer: a,
      videoElementSize: s
    })
  });
};
co(fs, "x-dot-face-auto-capture-ui", ["props"]);
