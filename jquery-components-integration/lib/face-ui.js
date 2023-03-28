var vn = Object.defineProperty;
var gn = (e, t, r) => t in e ? vn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Je = (e, t, r) => (gn(e, typeof t != "symbol" ? t + "" : t, r), r);
var Xe, A, Pr, Be, Gt, $r, ct = {}, Nr = [], yn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ce(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}
function Ir(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function oe(e, t, r) {
  var n, i, o, a = {};
  for (o in t)
    o == "key" ? n = t[o] : o == "ref" ? i = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Xe.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return Ve(e, a, n, i, null);
}
function Ve(e, t, r, n, i) {
  var o = { type: e, props: t, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Pr };
  return i == null && A.vnode != null && A.vnode(o), o;
}
function Cn() {
  return { current: null };
}
function be(e) {
  return e.children;
}
function le(e, t) {
  this.props = e, this.context = t;
}
function Ge(e, t) {
  if (t == null)
    return e.__ ? Ge(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var r; t < e.__k.length; t++)
    if ((r = e.__k[t]) != null && r.__e != null)
      return r.__e;
  return typeof e.type == "function" ? Ge(e) : null;
}
function Mr(e) {
  var t, r;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((r = e.__k[t]) != null && r.__e != null) {
        e.__e = e.__c.base = r.__e;
        break;
      }
    return Mr(e);
  }
}
function Et(e) {
  (!e.__d && (e.__d = !0) && Be.push(e) && !lt.__r++ || Gt !== A.debounceRendering) && ((Gt = A.debounceRendering) || setTimeout)(lt);
}
function lt() {
  for (var e; lt.__r = Be.length; )
    e = Be.sort(function(t, r) {
      return t.__v.__b - r.__v.__b;
    }), Be = [], e.some(function(t) {
      var r, n, i, o, a, c;
      t.__d && (a = (o = (r = t).__v).__e, (c = r.__P) && (n = [], (i = Ce({}, o)).__v = o.__v + 1, Lt(c, o, i, r.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, n, a ?? Ge(o), o.__h), Hr(n, o), o.__e != a && Mr(o)));
    });
}
function Lr(e, t, r, n, i, o, a, c, f, h) {
  var s, p, g, m, v, R, u, z = n && n.__k || Nr, T = z.length;
  for (r.__k = [], s = 0; s < t.length; s++)
    if ((m = r.__k[s] = (m = t[s]) == null || typeof m == "boolean" ? null : typeof m == "string" || typeof m == "number" || typeof m == "bigint" ? Ve(null, m, null, null, m) : Array.isArray(m) ? Ve(be, { children: m }, null, null, null) : m.__b > 0 ? Ve(m.type, m.props, m.key, m.ref ? m.ref : null, m.__v) : m) != null) {
      if (m.__ = r, m.__b = r.__b + 1, (g = z[s]) === null || g && m.key == g.key && m.type === g.type)
        z[s] = void 0;
      else
        for (p = 0; p < T; p++) {
          if ((g = z[p]) && m.key == g.key && m.type === g.type) {
            z[p] = void 0;
            break;
          }
          g = null;
        }
      Lt(e, m, g = g || ct, i, o, a, c, f, h), v = m.__e, (p = m.ref) && g.ref != p && (u || (u = []), g.ref && u.push(g.ref, null, m), u.push(p, m.__c || v, m)), v != null ? (R == null && (R = v), typeof m.type == "function" && m.__k === g.__k ? m.__d = f = Dr(m, f, e) : f = Fr(e, m, g, z, v, f), typeof r.type == "function" && (r.__d = f)) : f && g.__e == f && f.parentNode != e && (f = Ge(g));
    }
  for (r.__e = R, s = T; s--; )
    z[s] != null && jr(z[s], z[s]);
  if (u)
    for (s = 0; s < u.length; s++)
      Ur(u[s], u[++s], u[++s]);
}
function Dr(e, t, r) {
  for (var n, i = e.__k, o = 0; i && o < i.length; o++)
    (n = i[o]) && (n.__ = e, t = typeof n.type == "function" ? Dr(n, t, r) : Fr(r, n, n, i, n.__e, t));
  return t;
}
function Se(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Array.isArray(e) ? e.some(function(r) {
    Se(r, t);
  }) : t.push(e)), t;
}
function Fr(e, t, r, n, i, o) {
  var a, c, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (r == null || i != o || i.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(i), a = null;
      else {
        for (c = o, f = 0; (c = c.nextSibling) && f < n.length; f += 1)
          if (c == i)
            break e;
        e.insertBefore(i, o), a = o;
      }
  return a !== void 0 ? a : i.nextSibling;
}
function Sn(e, t, r, n, i) {
  var o;
  for (o in r)
    o === "children" || o === "key" || o in t || ut(e, o, null, r[o], n);
  for (o in t)
    i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || r[o] === t[o] || ut(e, o, t[o], r[o], n);
}
function Zt(e, t, r) {
  t[0] === "-" ? e.setProperty(t, r) : e[t] = r == null ? "" : typeof r != "number" || yn.test(t) ? r : r + "px";
}
function ut(e, t, r, n, i) {
  var o;
  e:
    if (t === "style")
      if (typeof r == "string")
        e.style.cssText = r;
      else {
        if (typeof n == "string" && (e.style.cssText = n = ""), n)
          for (t in n)
            r && t in r || Zt(e.style, t, "");
        if (r)
          for (t in r)
            n && r[t] === n[t] || Zt(e.style, t, r[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = r, r ? n || e.addEventListener(t, o ? Xt : qt, o) : e.removeEventListener(t, o ? Xt : qt, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = r ?? "";
          break e;
        } catch {
        }
      typeof r == "function" || (r == null || r === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, r));
    }
}
function qt(e) {
  this.l[e.type + !1](A.event ? A.event(e) : e);
}
function Xt(e) {
  this.l[e.type + !0](A.event ? A.event(e) : e);
}
function Lt(e, t, r, n, i, o, a, c, f) {
  var h, s, p, g, m, v, R, u, z, T, k, x, d, V, K, j = t.type;
  if (t.constructor !== void 0)
    return null;
  r.__h != null && (f = r.__h, c = t.__e = r.__e, t.__h = null, o = [c]), (h = A.__b) && h(t);
  try {
    e:
      if (typeof j == "function") {
        if (u = t.props, z = (h = j.contextType) && n[h.__c], T = h ? z ? z.props.value : h.__ : n, r.__c ? R = (s = t.__c = r.__c).__ = s.__E : ("prototype" in j && j.prototype.render ? t.__c = s = new j(u, T) : (t.__c = s = new le(u, T), s.constructor = j, s.render = bn), z && z.sub(s), s.props = u, s.state || (s.state = {}), s.context = T, s.__n = n, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), j.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ce({}, s.__s)), Ce(s.__s, j.getDerivedStateFromProps(u, s.__s))), g = s.props, m = s.state, p)
          j.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (j.getDerivedStateFromProps == null && u !== g && s.componentWillReceiveProps != null && s.componentWillReceiveProps(u, T), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(u, s.__s, T) === !1 || t.__v === r.__v) {
            for (s.props = u, s.state = s.__s, t.__v !== r.__v && (s.__d = !1), s.__v = t, t.__e = r.__e, t.__k = r.__k, t.__k.forEach(function(q) {
              q && (q.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(u, s.__s, T), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(g, m, v);
          });
        }
        if (s.context = T, s.props = u, s.__v = t, s.__P = e, x = A.__r, d = 0, "prototype" in j && j.prototype.render) {
          for (s.state = s.__s, s.__d = !1, x && x(t), h = s.render(s.props, s.state, s.context), V = 0; V < s._sb.length; V++)
            s.__h.push(s._sb[V]);
          s._sb = [];
        } else
          do
            s.__d = !1, x && x(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++d < 25);
        s.state = s.__s, s.getChildContext != null && (n = Ce(Ce({}, n), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (v = s.getSnapshotBeforeUpdate(g, m)), K = h != null && h.type === be && h.key == null ? h.props.children : h, Lr(e, Array.isArray(K) ? K : [K], t, r, n, i, o, a, c, f), s.base = t.__e, t.__h = null, s.__h.length && a.push(s), R && (s.__E = s.__ = null), s.__e = !1;
      } else
        o == null && t.__v === r.__v ? (t.__k = r.__k, t.__e = r.__e) : t.__e = wn(r.__e, t, r, n, i, o, a, f);
    (h = A.diffed) && h(t);
  } catch (q) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), A.__e(q, t, r);
  }
}
function Hr(e, t) {
  A.__c && A.__c(t, e), e.some(function(r) {
    try {
      e = r.__h, r.__h = [], e.some(function(n) {
        n.call(r);
      });
    } catch (n) {
      A.__e(n, r.__v);
    }
  });
}
function wn(e, t, r, n, i, o, a, c) {
  var f, h, s, p = r.props, g = t.props, m = t.type, v = 0;
  if (m === "svg" && (i = !0), o != null) {
    for (; v < o.length; v++)
      if ((f = o[v]) && "setAttribute" in f == !!m && (m ? f.localName === m : f.nodeType === 3)) {
        e = f, o[v] = null;
        break;
      }
  }
  if (e == null) {
    if (m === null)
      return document.createTextNode(g);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", m) : document.createElement(m, g.is && g), o = null, c = !1;
  }
  if (m === null)
    p === g || c && e.data === g || (e.data = g);
  else {
    if (o = o && Xe.call(e.childNodes), h = (p = r.props || ct).dangerouslySetInnerHTML, s = g.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (p = {}, v = 0; v < e.attributes.length; v++)
          p[e.attributes[v].name] = e.attributes[v].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Sn(e, g, p, i, c), s)
      t.__k = [];
    else if (v = t.props.children, Lr(e, Array.isArray(v) ? v : [v], t, r, n, i && m !== "foreignObject", o, a, o ? o[0] : r.__k && Ge(r, 0), c), o != null)
      for (v = o.length; v--; )
        o[v] != null && Ir(o[v]);
    c || ("value" in g && (v = g.value) !== void 0 && (v !== e.value || m === "progress" && !v || m === "option" && v !== p.value) && ut(e, "value", v, p.value, !1), "checked" in g && (v = g.checked) !== void 0 && v !== e.checked && ut(e, "checked", v, p.checked, !1));
  }
  return e;
}
function Ur(e, t, r) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (n) {
    A.__e(n, r);
  }
}
function jr(e, t, r) {
  var n, i;
  if (A.unmount && A.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || Ur(n, null, t)), (n = e.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (o) {
        A.__e(o, t);
      }
    n.base = n.__P = null, e.__c = void 0;
  }
  if (n = e.__k)
    for (i = 0; i < n.length; i++)
      n[i] && jr(n[i], t, r || typeof e.type != "function");
  r || e.__e == null || Ir(e.__e), e.__ = e.__e = e.__d = void 0;
}
function bn(e, t, r) {
  return this.constructor(e, r);
}
function Te(e, t, r) {
  var n, i, o;
  A.__ && A.__(e, t), i = (n = typeof r == "function") ? null : r && r.__k || t.__k, o = [], Lt(t, e = (!n && r || t).__k = oe(be, null, [e]), i || ct, ct, t.ownerSVGElement !== void 0, !n && r ? [r] : i ? null : t.firstChild ? Xe.call(t.childNodes) : null, o, !n && r ? r : i ? i.__e : t.firstChild, n), Hr(o, e);
}
function Dt(e, t) {
  Te(e, t, Dt);
}
function Ft(e, t, r) {
  var n, i, o, a = Ce({}, e.props);
  for (o in t)
    o == "key" ? n = t[o] : o == "ref" ? i = t[o] : a[o] = t[o];
  return arguments.length > 2 && (a.children = arguments.length > 3 ? Xe.call(arguments, 2) : r), Ve(e.type, a, n || e.key, i || e.ref, null);
}
function En(e, t) {
  var r = { __c: t = "__cC" + $r++, __: e, Consumer: function(n, i) {
    return n.children(i);
  }, Provider: function(n) {
    var i, o;
    return this.getChildContext || (i = [], (o = {})[t] = this, this.getChildContext = function() {
      return o;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && i.some(Et);
    }, this.sub = function(a) {
      i.push(a);
      var c = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        i.splice(i.indexOf(a), 1), c && c.call(a);
      };
    }), n.children;
  } };
  return r.Provider.__ = r.Consumer.contextType = r;
}
Xe = Nr.slice, A = { __e: function(e, t, r, n) {
  for (var i, o, a; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, n || {}), a = i.__d), a)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Pr = 0, le.prototype.setState = function(e, t) {
  var r;
  r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ce({}, this.state), typeof e == "function" && (e = e(Ce({}, r), this.props)), e && Ce(r, e), e != null && this.__v && (t && this._sb.push(t), Et(this));
}, le.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Et(this));
}, le.prototype.render = be, Be = [], lt.__r = 0, $r = 0;
function Ht() {
  return (Ht = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
function An(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, r = function(n, i) {
    if (n == null)
      return {};
    var o, a, c = {}, f = Object.keys(n);
    for (a = 0; a < f.length; a++)
      i.indexOf(o = f[a]) >= 0 || (c[o] = n[o]);
    return c;
  }(e, ["context", "children"]);
  return Ft(t, r);
}
function Rn() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = oe(An, Ht({}, this._props, { context: e.detail.context }), function t(r, n) {
    if (r.nodeType === 3)
      return r.data;
    if (r.nodeType !== 1)
      return null;
    var i = [], o = {}, a = 0, c = r.attributes, f = r.childNodes;
    for (a = c.length; a--; )
      c[a].name !== "slot" && (o[c[a].name] = c[a].value, o[Br(c[a].name)] = c[a].value);
    for (a = f.length; a--; ) {
      var h = t(f[a], null), s = f[a].slot;
      s ? o[s] = oe(Qt, { name: s }, h) : i[a] = h;
    }
    var p = n ? oe(Qt, null, i) : i;
    return oe(n || r.nodeName.toLowerCase(), o, p);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Dt : Te)(this._vdom, this._root);
}
function Br(e) {
  return e.replace(/-(\w)/g, function(t, r) {
    return r ? r.toUpperCase() : "";
  });
}
function Tn(e, t, r) {
  if (this._vdom) {
    var n = {};
    n[e] = r = r ?? void 0, n[Br(e)] = r, this._vdom = Ft(this._vdom, n), Te(this._vdom, this._root);
  }
}
function xn() {
  Te(this._vdom = null, this._root);
}
function Qt(e, t) {
  var r = this;
  return oe("slot", Ht({}, e, { ref: function(n) {
    n ? (r.ref = n, r._listener || (r._listener = function(i) {
      i.stopPropagation(), i.detail.context = t;
    }, n.addEventListener("_preact", r._listener))) : r.ref.removeEventListener("_preact", r._listener);
  } }));
}
function zn(e, t, r, n) {
  function i() {
    var o = Reflect.construct(HTMLElement, [], i);
    return o._vdomComponent = e, o._root = n && n.shadow ? o.attachShadow({ mode: "open" }) : o, o;
  }
  return (i.prototype = Object.create(HTMLElement.prototype)).constructor = i, i.prototype.connectedCallback = Rn, i.prototype.attributeChangedCallback = Tn, i.prototype.disconnectedCallback = xn, r = r || e.observedAttributes || Object.keys(e.propTypes || {}), i.observedAttributes = r, r.forEach(function(o) {
    Object.defineProperty(i.prototype, o, { get: function() {
      return this._vdom.props[o];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(o, null, a) : (this._props || (this._props = {}), this._props[o] = a, this.connectedCallback());
      var c = typeof a;
      a != null && c !== "string" && c !== "boolean" && c !== "number" || this.setAttribute(o, a);
    } });
  }), customElements.define(t || e.tagName || e.displayName || e.name, i);
}
var At = /* @__PURE__ */ ((e) => (e.CONTINUE_DETECTION = "continue-detection", e.SWITCH_CAMERA = "switch-camera", e.TOGGLE_MIRROR = "toggle-mirror", e))(At || {}), ze = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", e.CONTROL = "face-auto-capture:control", e.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", e.FACE_DETECTION = "face-auto-capture:face-detection", e.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", e.STATE_CHANGED = "face-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", e))(ze || {});
const ve = {
  CANDIDATE_SELECTION: "candidate_selection",
  FACE_TOO_CLOSE: "face_too_close",
  FACE_TOO_FAR: "face_too_far",
  FACE_CENTERING: "face_centering",
  FACE_NOT_PRESENT: "face_not_present",
  SHARPNESS_TOO_LOW: "sharpness_too_low",
  BRIGHTNESS_TOO_LOW: "brightness_too_low",
  BRIGHTNESS_TOO_HIGH: "brightness_too_high"
}, Ae = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  WAITING: "WAITING",
  RUNNING: "RUNNING"
};
var Ze = {}, kn = {
  get exports() {
    return Ze;
  },
  set exports(e) {
    Ze = e;
  }
}, D = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kt;
function On() {
  if (Kt)
    return D;
  Kt = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), s = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function R(u) {
    if (typeof u == "object" && u !== null) {
      var z = u.$$typeof;
      switch (z) {
        case e:
          switch (u = u.type, u) {
            case r:
            case i:
            case n:
            case h:
            case s:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case c:
                case a:
                case f:
                case g:
                case p:
                case o:
                  return u;
                default:
                  return z;
              }
          }
        case t:
          return z;
      }
    }
  }
  return D.ContextConsumer = a, D.ContextProvider = o, D.Element = e, D.ForwardRef = f, D.Fragment = r, D.Lazy = g, D.Memo = p, D.Portal = t, D.Profiler = i, D.StrictMode = n, D.Suspense = h, D.SuspenseList = s, D.isAsyncMode = function() {
    return !1;
  }, D.isConcurrentMode = function() {
    return !1;
  }, D.isContextConsumer = function(u) {
    return R(u) === a;
  }, D.isContextProvider = function(u) {
    return R(u) === o;
  }, D.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === e;
  }, D.isForwardRef = function(u) {
    return R(u) === f;
  }, D.isFragment = function(u) {
    return R(u) === r;
  }, D.isLazy = function(u) {
    return R(u) === g;
  }, D.isMemo = function(u) {
    return R(u) === p;
  }, D.isPortal = function(u) {
    return R(u) === t;
  }, D.isProfiler = function(u) {
    return R(u) === i;
  }, D.isStrictMode = function(u) {
    return R(u) === n;
  }, D.isSuspense = function(u) {
    return R(u) === h;
  }, D.isSuspenseList = function(u) {
    return R(u) === s;
  }, D.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === r || u === i || u === n || u === h || u === s || u === m || typeof u == "object" && u !== null && (u.$$typeof === g || u.$$typeof === p || u.$$typeof === o || u.$$typeof === a || u.$$typeof === f || u.$$typeof === v || u.getModuleId !== void 0);
  }, D.typeOf = R, D;
}
var F = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jt;
function Pn() {
  return Jt || (Jt = 1, {}.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), s = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), v = !1, R = !1, u = !1, z = !1, T = !1, k;
    k = Symbol.for("react.module.reference");
    function x(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === i || T || S === n || S === h || S === s || z || S === m || v || R || u || typeof S == "object" && S !== null && (S.$$typeof === g || S.$$typeof === p || S.$$typeof === o || S.$$typeof === a || S.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === k || S.getModuleId !== void 0));
    }
    function d(S) {
      if (typeof S == "object" && S !== null) {
        var $ = S.$$typeof;
        switch ($) {
          case e:
            var G = S.type;
            switch (G) {
              case r:
              case i:
              case n:
              case h:
              case s:
                return G;
              default:
                var L = G && G.$$typeof;
                switch (L) {
                  case c:
                  case a:
                  case f:
                  case g:
                  case p:
                  case o:
                    return L;
                  default:
                    return $;
                }
            }
          case t:
            return $;
        }
      }
    }
    var V = a, K = o, j = e, q = f, ae = r, ue = g, J = p, re = t, ie = i, X = n, pe = h, ne = s, Q = !1, fe = !1;
    function se(S) {
      return Q || (Q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function me(S) {
      return fe || (fe = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function E(S) {
      return d(S) === a;
    }
    function w(S) {
      return d(S) === o;
    }
    function b(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function O(S) {
      return d(S) === f;
    }
    function l(S) {
      return d(S) === r;
    }
    function I(S) {
      return d(S) === g;
    }
    function y(S) {
      return d(S) === p;
    }
    function B(S) {
      return d(S) === t;
    }
    function M(S) {
      return d(S) === i;
    }
    function N(S) {
      return d(S) === n;
    }
    function _(S) {
      return d(S) === h;
    }
    function W(S) {
      return d(S) === s;
    }
    F.ContextConsumer = V, F.ContextProvider = K, F.Element = j, F.ForwardRef = q, F.Fragment = ae, F.Lazy = ue, F.Memo = J, F.Portal = re, F.Profiler = ie, F.StrictMode = X, F.Suspense = pe, F.SuspenseList = ne, F.isAsyncMode = se, F.isConcurrentMode = me, F.isContextConsumer = E, F.isContextProvider = w, F.isElement = b, F.isForwardRef = O, F.isFragment = l, F.isLazy = I, F.isMemo = y, F.isPortal = B, F.isProfiler = M, F.isStrictMode = N, F.isSuspense = _, F.isSuspenseList = W, F.isValidElementType = x, F.typeOf = d;
  }()), F;
}
(function(e) {
  ({}).NODE_ENV === "production" ? e.exports = On() : e.exports = Pn();
})(kn);
var ke, Y, gt, er, Pe = 0, Vr = [], nt = [], tr = A.__b, rr = A.__r, nr = A.diffed, or = A.__c, ir = A.unmount;
function Le(e, t) {
  A.__h && A.__h(Y, e, Pe || t), Pe = 0;
  var r = Y.__H || (Y.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({ __V: nt }), r.__[e];
}
function de(e) {
  return Pe = 1, Wr(Yr, e);
}
function Wr(e, t, r) {
  var n = Le(ke++, 2);
  if (n.t = e, !n.__c && (n.__ = [r ? r(t) : Yr(void 0, t), function(o) {
    var a = n.__N ? n.__N[0] : n.__[0], c = n.t(a, o);
    a !== c && (n.__N = [c, n.__[1]], n.__c.setState({}));
  }], n.__c = Y, !Y.u)) {
    Y.u = !0;
    var i = Y.shouldComponentUpdate;
    Y.shouldComponentUpdate = function(o, a, c) {
      if (!n.__c.__H)
        return !0;
      var f = n.__c.__H.__.filter(function(s) {
        return s.__c;
      });
      if (f.every(function(s) {
        return !s.__N;
      }))
        return !i || i.call(this, o, a, c);
      var h = !1;
      return f.forEach(function(s) {
        if (s.__N) {
          var p = s.__[0];
          s.__ = s.__N, s.__N = void 0, p !== s.__[0] && (h = !0);
        }
      }), !(!h && n.__c.props === o) && (!i || i.call(this, o, a, c));
    };
  }
  return n.__N || n.__;
}
function $e(e, t) {
  var r = Le(ke++, 3);
  !A.__s && Ut(r.__H, t) && (r.__ = e, r.i = t, Y.__H.__h.push(r));
}
function ht(e, t) {
  var r = Le(ke++, 4);
  !A.__s && Ut(r.__H, t) && (r.__ = e, r.i = t, Y.__h.push(r));
}
function _t(e) {
  return Pe = 5, pt(function() {
    return { current: e };
  }, []);
}
function $n(e, t, r) {
  Pe = 6, ht(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, r == null ? r : r.concat(e));
}
function pt(e, t) {
  var r = Le(ke++, 7);
  return Ut(r.__H, t) ? (r.__V = e(), r.i = t, r.__h = e, r.__V) : r.__;
}
function Oe(e, t) {
  return Pe = 8, pt(function() {
    return e;
  }, t);
}
function De(e) {
  var t = Y.context[e.__c], r = Le(ke++, 9);
  return r.c = e, t ? (r.__ == null && (r.__ = !0, t.sub(Y)), t.props.value) : e.__;
}
function Rt(e, t) {
  A.useDebugValue && A.useDebugValue(t ? t(e) : e);
}
function Nn() {
  var e = Le(ke++, 11);
  if (!e.__) {
    for (var t = Y.__v; t !== null && !t.__m && t.__ !== null; )
      t = t.__;
    var r = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + r[0] + "-" + r[1]++;
  }
  return e.__;
}
function In() {
  for (var e; e = Vr.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(ot), e.__H.__h.forEach(Tt), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], A.__e(t, e.__v);
      }
}
A.__b = function(e) {
  Y = null, tr && tr(e);
}, A.__r = function(e) {
  rr && rr(e), ke = 0;
  var t = (Y = e.__c).__H;
  t && (gt === Y ? (t.__h = [], Y.__h = [], t.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.__V = nt, r.__N = r.i = void 0;
  })) : (t.__h.forEach(ot), t.__h.forEach(Tt), t.__h = [])), gt = Y;
}, A.diffed = function(e) {
  nr && nr(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Vr.push(t) !== 1 && er === A.requestAnimationFrame || ((er = A.requestAnimationFrame) || Mn)(In)), t.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.__V !== nt && (r.__ = r.__V), r.i = void 0, r.__V = nt;
  })), gt = Y = null;
}, A.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.forEach(ot), r.__h = r.__h.filter(function(n) {
        return !n.__ || Tt(n);
      });
    } catch (n) {
      t.some(function(i) {
        i.__h && (i.__h = []);
      }), t = [], A.__e(n, r.__v);
    }
  }), or && or(e, t);
}, A.unmount = function(e) {
  ir && ir(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      ot(n);
    } catch (i) {
      t = i;
    }
  }), r.__H = void 0, t && A.__e(t, r.__v));
};
var ar = typeof requestAnimationFrame == "function";
function Mn(e) {
  var t, r = function() {
    clearTimeout(n), ar && cancelAnimationFrame(t), setTimeout(e);
  }, n = setTimeout(r, 100);
  ar && (t = requestAnimationFrame(r));
}
function ot(e) {
  var t = Y, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), Y = t;
}
function Tt(e) {
  var t = Y;
  e.__c = e.__(), Y = t;
}
function Ut(e, t) {
  return !e || e.length !== t.length || t.some(function(r, n) {
    return r !== e[n];
  });
}
function Yr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Gr(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}
function xt(e, t) {
  for (var r in e)
    if (r !== "__source" && !(r in t))
      return !0;
  for (var n in t)
    if (n !== "__source" && e[n] !== t[n])
      return !0;
  return !1;
}
function yt(e, t) {
  return e === t && (e !== 0 || 1 / e == 1 / t) || e != e && t != t;
}
function zt(e) {
  this.props = e;
}
function Ln(e, t) {
  function r(i) {
    var o = this.props.ref, a = o == i.ref;
    return !a && o && (o.call ? o(null) : o.current = null), t ? !t(this.props, i) || !a : xt(this.props, i);
  }
  function n(i) {
    return this.shouldComponentUpdate = r, oe(e, i);
  }
  return n.displayName = "Memo(" + (e.displayName || e.name) + ")", n.prototype.isReactComponent = !0, n.__f = !0, n;
}
(zt.prototype = new le()).isPureReactComponent = !0, zt.prototype.shouldComponentUpdate = function(e, t) {
  return xt(this.props, e) || xt(this.state, t);
};
var sr = A.__b;
A.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), sr && sr(e);
};
var Dn = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function Fn(e) {
  function t(r) {
    var n = Gr({}, r);
    return delete n.ref, e(n, r.ref || null);
  }
  return t.$$typeof = Dn, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var cr = function(e, t) {
  return e == null ? null : Se(Se(e).map(t));
}, Hn = { map: cr, forEach: cr, count: function(e) {
  return e ? Se(e).length : 0;
}, only: function(e) {
  var t = Se(e);
  if (t.length !== 1)
    throw "Children.only";
  return t[0];
}, toArray: Se }, Un = A.__e;
A.__e = function(e, t, r, n) {
  if (e.then) {
    for (var i, o = t; o = o.__; )
      if ((i = o.__c) && i.__c)
        return t.__e == null && (t.__e = r.__e, t.__k = r.__k), i.__c(e, t);
  }
  Un(e, t, r, n);
};
var lr = A.unmount;
function Zr(e, t, r) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), e.__c.__H = null), (e = Gr({}, e)).__c != null && (e.__c.__P === r && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(n) {
    return Zr(n, t, r);
  })), e;
}
function qr(e, t, r) {
  return e && (e.__v = null, e.__k = e.__k && e.__k.map(function(n) {
    return qr(n, t, r);
  }), e.__c && e.__c.__P === t && (e.__e && r.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = r)), e;
}
function it() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Xr(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function jn(e) {
  var t, r, n;
  function i(o) {
    if (t || (t = e()).then(function(a) {
      r = a.default || a;
    }, function(a) {
      n = a;
    }), n)
      throw n;
    if (!r)
      throw t;
    return oe(r, o);
  }
  return i.displayName = "Lazy", i.__f = !0, i;
}
function Ue() {
  this.u = null, this.o = null;
}
A.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), lr && lr(e);
}, (it.prototype = new le()).__c = function(e, t) {
  var r = t.__c, n = this;
  n.t == null && (n.t = []), n.t.push(r);
  var i = Xr(n.__v), o = !1, a = function() {
    o || (o = !0, r.__R = null, i ? i(c) : c());
  };
  r.__R = a;
  var c = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var h = n.state.__a;
        n.__v.__k[0] = qr(h, h.__c.__P, h.__c.__O);
      }
      var s;
      for (n.setState({ __a: n.__b = null }); s = n.t.pop(); )
        s.forceUpdate();
    }
  }, f = t.__h === !0;
  n.__u++ || f || n.setState({ __a: n.__b = n.__v.__k[0] }), e.then(a, a);
}, it.prototype.componentWillUnmount = function() {
  this.t = [];
}, it.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = Zr(this.__b, r, n.__O = n.__P);
    }
    this.__b = null;
  }
  var i = t.__a && oe(be, null, e.fallback);
  return i && (i.__h = null), [oe(be, null, t.__a ? null : e.children), i];
};
var ur = function(e, t, r) {
  if (++r[1] === r[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (r = e.u; r; ) {
      for (; r.length > 3; )
        r.pop()();
      if (r[1] < r[0])
        break;
      e.u = r = r[2];
    }
};
function Bn(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function Vn(e) {
  var t = this, r = e.i;
  t.componentWillUnmount = function() {
    Te(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== r && t.componentWillUnmount(), e.__v ? (t.l || (t.i = r, t.l = { nodeType: 1, parentNode: r, childNodes: [], appendChild: function(n) {
    this.childNodes.push(n), t.i.appendChild(n);
  }, insertBefore: function(n, i) {
    this.childNodes.push(n), t.i.appendChild(n);
  }, removeChild: function(n) {
    this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), t.i.removeChild(n);
  } }), Te(oe(Bn, { context: t.context }, e.__v), t.l)) : t.l && t.componentWillUnmount();
}
function Wn(e, t) {
  var r = oe(Vn, { __v: e, i: t });
  return r.containerInfo = t, r;
}
(Ue.prototype = new le()).__a = function(e) {
  var t = this, r = Xr(t.__v), n = t.o.get(e);
  return n[0]++, function(i) {
    var o = function() {
      t.props.revealOrder ? (n.push(i), ur(t, e, n)) : i();
    };
    r ? r(o) : o();
  };
}, Ue.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = Se(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var r = t.length; r--; )
    this.o.set(t[r], this.u = [1, 0, this.u]);
  return e.children;
}, Ue.prototype.componentDidUpdate = Ue.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, r) {
    ur(e, r, t);
  });
};
var Qr = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Yn = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Gn = typeof document < "u", Zn = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(e);
};
function qn(e, t, r) {
  return t.__k == null && (t.textContent = ""), Te(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
function Xn(e, t, r) {
  return Dt(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
le.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(le.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var fr = A.event;
function Qn() {
}
function Kn() {
  return this.cancelBubble;
}
function Jn() {
  return this.defaultPrevented;
}
A.event = function(e) {
  return fr && (e = fr(e)), e.persist = Qn, e.isPropagationStopped = Kn, e.isDefaultPrevented = Jn, e.nativeEvent = e;
};
var Kr, dr = { configurable: !0, get: function() {
  return this.class;
} }, hr = A.vnode;
A.vnode = function(e) {
  var t = e.type, r = e.props, n = r;
  if (typeof t == "string") {
    var i = t.indexOf("-") === -1;
    for (var o in n = {}, r) {
      var a = r[o];
      Gn && o === "children" && t === "noscript" || o === "value" && "defaultValue" in r && a == null || (o === "defaultValue" && "value" in r && r.value == null ? o = "value" : o === "download" && a === !0 ? a = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !Zn(r.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o) ? o = o.toLowerCase() : i && Yn.test(o) ? o = o.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : a === null && (a = void 0), /^oninput$/i.test(o) && (o = o.toLowerCase(), n[o] && (o = "oninputCapture")), n[o] = a);
    }
    t == "select" && n.multiple && Array.isArray(n.value) && (n.value = Se(r.children).forEach(function(c) {
      c.props.selected = n.value.indexOf(c.props.value) != -1;
    })), t == "select" && n.defaultValue != null && (n.value = Se(r.children).forEach(function(c) {
      c.props.selected = n.multiple ? n.defaultValue.indexOf(c.props.value) != -1 : n.defaultValue == c.props.value;
    })), e.props = n, r.class != r.className && (dr.enumerable = "className" in r, r.className != null && (n.class = r.className), Object.defineProperty(n, "className", dr));
  }
  e.$$typeof = Qr, hr && hr(e);
};
var _r = A.__r;
A.__r = function(e) {
  _r && _r(e), Kr = e.__c;
};
var eo = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return Kr.__n[e.__c].props.value;
} } } };
function to(e) {
  return oe.bind(null, e);
}
function Jr(e) {
  return !!e && e.$$typeof === Qr;
}
function ro(e) {
  return Jr(e) ? Ft.apply(null, arguments) : e;
}
function no(e) {
  return !!e.__k && (Te(null, e), !0);
}
function oo(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var io = function(e, t) {
  return e(t);
}, ao = function(e, t) {
  return e(t);
}, so = be;
function en(e) {
  e();
}
function co(e) {
  return e;
}
function lo() {
  return [!1, en];
}
var uo = ht;
function fo(e, t) {
  var r = t(), n = de({ h: { __: r, v: t } }), i = n[0].h, o = n[1];
  return ht(function() {
    i.__ = r, i.v = t, yt(i.__, t()) || o({ h: i });
  }, [e, r, t]), $e(function() {
    return yt(i.__, i.v()) || o({ h: i }), e(function() {
      yt(i.__, i.v()) || o({ h: i });
    });
  }, [e]), r;
}
var Qe = { useState: de, useId: Nn, useReducer: Wr, useEffect: $e, useLayoutEffect: ht, useInsertionEffect: uo, useTransition: lo, useDeferredValue: co, useSyncExternalStore: fo, startTransition: en, useRef: _t, useImperativeHandle: $n, useMemo: pt, useCallback: Oe, useContext: De, useDebugValue: Rt, version: "17.0.2", Children: Hn, render: qn, hydrate: Xn, unmountComponentAtNode: no, createPortal: Wn, createElement: oe, createContext: En, createFactory: to, cloneElement: ro, createRef: Cn, Fragment: be, isValidElement: Jr, findDOMNode: oo, Component: le, PureComponent: zt, memo: Ln, forwardRef: Fn, flushSync: ao, unstable_batchedUpdates: io, StrictMode: so, Suspense: it, SuspenseList: Ue, lazy: jn, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: eo };
function ho(e) {
  function t(E, w, b, O, l) {
    for (var I = 0, y = 0, B = 0, M = 0, N, _, W = 0, S = 0, $, G = $ = N = 0, L = 0, ee = 0, Fe = 0, te = 0, Ke = b.length, He = Ke - 1, ce, P = "", Z = "", mt = "", vt = "", Ee; L < Ke; ) {
      if (_ = b.charCodeAt(L), L === He && y + M + B + I !== 0 && (y !== 0 && (_ = y === 47 ? 10 : 47), M = B = I = 0, Ke++, He++), y + M + B + I === 0) {
        if (L === He && (0 < ee && (P = P.replace(g, "")), 0 < P.trim().length)) {
          switch (_) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              P += b.charAt(L);
          }
          _ = 59;
        }
        switch (_) {
          case 123:
            for (P = P.trim(), N = P.charCodeAt(0), $ = 1, te = ++L; L < Ke; ) {
              switch (_ = b.charCodeAt(L)) {
                case 123:
                  $++;
                  break;
                case 125:
                  $--;
                  break;
                case 47:
                  switch (_ = b.charCodeAt(L + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (G = L + 1; G < He; ++G)
                          switch (b.charCodeAt(G)) {
                            case 47:
                              if (_ === 42 && b.charCodeAt(G - 1) === 42 && L + 2 !== G) {
                                L = G + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (_ === 47) {
                                L = G + 1;
                                break e;
                              }
                          }
                        L = G;
                      }
                  }
                  break;
                case 91:
                  _++;
                case 40:
                  _++;
                case 34:
                case 39:
                  for (; L++ < He && b.charCodeAt(L) !== _; )
                    ;
              }
              if ($ === 0)
                break;
              L++;
            }
            switch ($ = b.substring(te, L), N === 0 && (N = (P = P.replace(p, "").trim()).charCodeAt(0)), N) {
              case 64:
                switch (0 < ee && (P = P.replace(g, "")), _ = P.charCodeAt(1), _) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ee = w;
                    break;
                  default:
                    ee = pe;
                }
                if ($ = t(w, ee, $, _, l + 1), te = $.length, 0 < Q && (ee = r(pe, P, Fe), Ee = c(3, $, ee, w, re, J, te, _, l, O), P = ee.join(""), Ee !== void 0 && (te = ($ = Ee.trim()).length) === 0 && (_ = 0, $ = "")), 0 < te)
                  switch (_) {
                    case 115:
                      P = P.replace(V, a);
                    case 100:
                    case 109:
                    case 45:
                      $ = P + "{" + $ + "}";
                      break;
                    case 107:
                      P = P.replace(T, "$1 $2"), $ = P + "{" + $ + "}", $ = X === 1 || X === 2 && o("@" + $, 3) ? "@-webkit-" + $ + "@" + $ : "@" + $;
                      break;
                    default:
                      $ = P + $, O === 112 && ($ = (Z += $, ""));
                  }
                else
                  $ = "";
                break;
              default:
                $ = t(w, r(w, P, Fe), $, O, l + 1);
            }
            mt += $, $ = Fe = ee = G = N = 0, P = "", _ = b.charCodeAt(++L);
            break;
          case 125:
          case 59:
            if (P = (0 < ee ? P.replace(g, "") : P).trim(), 1 < (te = P.length))
              switch (G === 0 && (N = P.charCodeAt(0), N === 45 || 96 < N && 123 > N) && (te = (P = P.replace(" ", ":")).length), 0 < Q && (Ee = c(1, P, w, E, re, J, Z.length, O, l, O)) !== void 0 && (te = (P = Ee.trim()).length) === 0 && (P = "\0\0"), N = P.charCodeAt(0), _ = P.charCodeAt(1), N) {
                case 0:
                  break;
                case 64:
                  if (_ === 105 || _ === 99) {
                    vt += P + b.charAt(L);
                    break;
                  }
                default:
                  P.charCodeAt(te - 1) !== 58 && (Z += i(P, N, _, P.charCodeAt(2)));
              }
            Fe = ee = G = N = 0, P = "", _ = b.charCodeAt(++L);
        }
      }
      switch (_) {
        case 13:
        case 10:
          y === 47 ? y = 0 : 1 + N === 0 && O !== 107 && 0 < P.length && (ee = 1, P += "\0"), 0 < Q * se && c(0, P, w, E, re, J, Z.length, O, l, O), J = 1, re++;
          break;
        case 59:
        case 125:
          if (y + M + B + I === 0) {
            J++;
            break;
          }
        default:
          switch (J++, ce = b.charAt(L), _) {
            case 9:
            case 32:
              if (M + I + y === 0)
                switch (W) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    ce = "";
                    break;
                  default:
                    _ !== 32 && (ce = " ");
                }
              break;
            case 0:
              ce = "\\0";
              break;
            case 12:
              ce = "\\f";
              break;
            case 11:
              ce = "\\v";
              break;
            case 38:
              M + y + I === 0 && (ee = Fe = 1, ce = "\f" + ce);
              break;
            case 108:
              if (M + y + I + ie === 0 && 0 < G)
                switch (L - G) {
                  case 2:
                    W === 112 && b.charCodeAt(L - 3) === 58 && (ie = W);
                  case 8:
                    S === 111 && (ie = S);
                }
              break;
            case 58:
              M + y + I === 0 && (G = L);
              break;
            case 44:
              y + B + M + I === 0 && (ee = 1, ce += "\r");
              break;
            case 34:
            case 39:
              y === 0 && (M = M === _ ? 0 : M === 0 ? _ : M);
              break;
            case 91:
              M + y + B === 0 && I++;
              break;
            case 93:
              M + y + B === 0 && I--;
              break;
            case 41:
              M + y + I === 0 && B--;
              break;
            case 40:
              if (M + y + I === 0) {
                if (N === 0)
                  switch (2 * W + 3 * S) {
                    case 533:
                      break;
                    default:
                      N = 1;
                  }
                B++;
              }
              break;
            case 64:
              y + B + M + I + G + $ === 0 && ($ = 1);
              break;
            case 42:
            case 47:
              if (!(0 < M + I + B))
                switch (y) {
                  case 0:
                    switch (2 * _ + 3 * b.charCodeAt(L + 1)) {
                      case 235:
                        y = 47;
                        break;
                      case 220:
                        te = L, y = 42;
                    }
                    break;
                  case 42:
                    _ === 47 && W === 42 && te + 2 !== L && (b.charCodeAt(te + 2) === 33 && (Z += b.substring(te, L + 1)), ce = "", y = 0);
                }
          }
          y === 0 && (P += ce);
      }
      S = W, W = _, L++;
    }
    if (te = Z.length, 0 < te) {
      if (ee = w, 0 < Q && (Ee = c(2, Z, ee, E, re, J, te, O, l, O), Ee !== void 0 && (Z = Ee).length === 0))
        return vt + Z + mt;
      if (Z = ee.join(",") + "{" + Z + "}", X * ie !== 0) {
        switch (X !== 2 || o(Z, 2) || (ie = 0), ie) {
          case 111:
            Z = Z.replace(x, ":-moz-$1") + Z;
            break;
          case 112:
            Z = Z.replace(k, "::-webkit-input-$1") + Z.replace(k, "::-moz-$1") + Z.replace(k, ":-ms-input-$1") + Z;
        }
        ie = 0;
      }
    }
    return vt + Z + mt;
  }
  function r(E, w, b) {
    var O = w.trim().split(u);
    w = O;
    var l = O.length, I = E.length;
    switch (I) {
      case 0:
      case 1:
        var y = 0;
        for (E = I === 0 ? "" : E[0] + " "; y < l; ++y)
          w[y] = n(E, w[y], b).trim();
        break;
      default:
        var B = y = 0;
        for (w = []; y < l; ++y)
          for (var M = 0; M < I; ++M)
            w[B++] = n(E[M] + " ", O[y], b).trim();
    }
    return w;
  }
  function n(E, w, b) {
    var O = w.charCodeAt(0);
    switch (33 > O && (O = (w = w.trim()).charCodeAt(0)), O) {
      case 38:
        return w.replace(z, "$1" + E.trim());
      case 58:
        return E.trim() + w.replace(z, "$1" + E.trim());
      default:
        if (0 < 1 * b && 0 < w.indexOf("\f"))
          return w.replace(z, (E.charCodeAt(0) === 58 ? "" : "$1") + E.trim());
    }
    return E + w;
  }
  function i(E, w, b, O) {
    var l = E + ";", I = 2 * w + 3 * b + 4 * O;
    if (I === 944) {
      E = l.indexOf(":", 9) + 1;
      var y = l.substring(E, l.length - 1).trim();
      return y = l.substring(0, E).trim() + y + ";", X === 1 || X === 2 && o(y, 1) ? "-webkit-" + y + y : y;
    }
    if (X === 0 || X === 2 && !o(l, 1))
      return l;
    switch (I) {
      case 1015:
        return l.charCodeAt(10) === 97 ? "-webkit-" + l + l : l;
      case 951:
        return l.charCodeAt(3) === 116 ? "-webkit-" + l + l : l;
      case 963:
        return l.charCodeAt(5) === 110 ? "-webkit-" + l + l : l;
      case 1009:
        if (l.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + l + l;
      case 978:
        return "-webkit-" + l + "-moz-" + l + l;
      case 1019:
      case 983:
        return "-webkit-" + l + "-moz-" + l + "-ms-" + l + l;
      case 883:
        if (l.charCodeAt(8) === 45)
          return "-webkit-" + l + l;
        if (0 < l.indexOf("image-set(", 11))
          return l.replace(ue, "$1-webkit-$2") + l;
        break;
      case 932:
        if (l.charCodeAt(4) === 45)
          switch (l.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + l.replace("-grow", "") + "-webkit-" + l + "-ms-" + l.replace("grow", "positive") + l;
            case 115:
              return "-webkit-" + l + "-ms-" + l.replace("shrink", "negative") + l;
            case 98:
              return "-webkit-" + l + "-ms-" + l.replace("basis", "preferred-size") + l;
          }
        return "-webkit-" + l + "-ms-" + l + l;
      case 964:
        return "-webkit-" + l + "-ms-flex-" + l + l;
      case 1023:
        if (l.charCodeAt(8) !== 99)
          break;
        return y = l.substring(l.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + y + "-webkit-" + l + "-ms-flex-pack" + y + l;
      case 1005:
        return v.test(l) ? l.replace(m, ":-webkit-") + l.replace(m, ":-moz-") + l : l;
      case 1e3:
        switch (y = l.substring(13).trim(), w = y.indexOf("-") + 1, y.charCodeAt(0) + y.charCodeAt(w)) {
          case 226:
            y = l.replace(d, "tb");
            break;
          case 232:
            y = l.replace(d, "tb-rl");
            break;
          case 220:
            y = l.replace(d, "lr");
            break;
          default:
            return l;
        }
        return "-webkit-" + l + "-ms-" + y + l;
      case 1017:
        if (l.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (w = (l = E).length - 10, y = (l.charCodeAt(w) === 33 ? l.substring(0, w) : l).substring(E.indexOf(":", 7) + 1).trim(), I = y.charCodeAt(0) + (y.charCodeAt(7) | 0)) {
          case 203:
            if (111 > y.charCodeAt(8))
              break;
          case 115:
            l = l.replace(y, "-webkit-" + y) + ";" + l;
            break;
          case 207:
          case 102:
            l = l.replace(y, "-webkit-" + (102 < I ? "inline-" : "") + "box") + ";" + l.replace(y, "-webkit-" + y) + ";" + l.replace(y, "-ms-" + y + "box") + ";" + l;
        }
        return l + ";";
      case 938:
        if (l.charCodeAt(5) === 45)
          switch (l.charCodeAt(6)) {
            case 105:
              return y = l.replace("-items", ""), "-webkit-" + l + "-webkit-box-" + y + "-ms-flex-" + y + l;
            case 115:
              return "-webkit-" + l + "-ms-flex-item-" + l.replace(j, "") + l;
            default:
              return "-webkit-" + l + "-ms-flex-line-pack" + l.replace("align-content", "").replace(j, "") + l;
          }
        break;
      case 973:
      case 989:
        if (l.charCodeAt(3) !== 45 || l.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (ae.test(E) === !0)
          return (y = E.substring(E.indexOf(":") + 1)).charCodeAt(0) === 115 ? i(E.replace("stretch", "fill-available"), w, b, O).replace(":fill-available", ":stretch") : l.replace(y, "-webkit-" + y) + l.replace(y, "-moz-" + y.replace("fill-", "")) + l;
        break;
      case 962:
        if (l = "-webkit-" + l + (l.charCodeAt(5) === 102 ? "-ms-" + l : "") + l, b + O === 211 && l.charCodeAt(13) === 105 && 0 < l.indexOf("transform", 10))
          return l.substring(0, l.indexOf(";", 27) + 1).replace(R, "$1-webkit-$2") + l;
    }
    return l;
  }
  function o(E, w) {
    var b = E.indexOf(w === 1 ? ":" : "{"), O = E.substring(0, w !== 3 ? b : 10);
    return b = E.substring(b + 1, E.length - 1), fe(w !== 2 ? O : O.replace(q, "$1"), b, w);
  }
  function a(E, w) {
    var b = i(w, w.charCodeAt(0), w.charCodeAt(1), w.charCodeAt(2));
    return b !== w + ";" ? b.replace(K, " or ($1)").substring(4) : "(" + w + ")";
  }
  function c(E, w, b, O, l, I, y, B, M, N) {
    for (var _ = 0, W = w, S; _ < Q; ++_)
      switch (S = ne[_].call(s, E, W, b, O, l, I, y, B, M, N)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          W = S;
      }
    if (W !== w)
      return W;
  }
  function f(E) {
    switch (E) {
      case void 0:
      case null:
        Q = ne.length = 0;
        break;
      default:
        if (typeof E == "function")
          ne[Q++] = E;
        else if (typeof E == "object")
          for (var w = 0, b = E.length; w < b; ++w)
            f(E[w]);
        else
          se = !!E | 0;
    }
    return f;
  }
  function h(E) {
    return E = E.prefix, E !== void 0 && (fe = null, E ? typeof E != "function" ? X = 1 : (X = 2, fe = E) : X = 0), h;
  }
  function s(E, w) {
    var b = E;
    if (33 > b.charCodeAt(0) && (b = b.trim()), me = b, b = [me], 0 < Q) {
      var O = c(-1, w, b, b, re, J, 0, 0, 0, 0);
      O !== void 0 && typeof O == "string" && (w = O);
    }
    var l = t(pe, b, w, 0, 0);
    return 0 < Q && (O = c(-2, l, b, b, re, J, l.length, 0, 0, 0), O !== void 0 && (l = O)), me = "", ie = 0, J = re = 1, l;
  }
  var p = /^\0+/g, g = /[\0\r\f]/g, m = /: */g, v = /zoo|gra/, R = /([,: ])(transform)/g, u = /,\r+?/g, z = /([\t\r\n ])*\f?&/g, T = /@(k\w+)\s*(\S*)\s*/, k = /::(place)/g, x = /:(read-only)/g, d = /[svh]\w+-[tblr]{2}/, V = /\(\s*(.*)\s*\)/g, K = /([\s\S]*?);/g, j = /-self|flex-/g, q = /[^]*?(:[rp][el]a[\w-]+)[^]*/, ae = /stretch|:\s*\w+\-(?:conte|avail)/, ue = /([^-])(image-set\()/, J = 1, re = 1, ie = 0, X = 1, pe = [], ne = [], Q = 0, fe = null, se = 0, me = "";
  return s.use = f, s.set = h, e !== void 0 && h(e), s;
}
var _o = {
  animationIterationCount: 1,
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
};
function po(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var mo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, pr = /* @__PURE__ */ po(
  function(e) {
    return mo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), kt = {}, vo = {
  get exports() {
    return kt;
  },
  set exports(e) {
    kt = e;
  }
}, H = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr;
function go() {
  if (mr)
    return H;
  mr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, s = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, R = e ? Symbol.for("react.block") : 60121, u = e ? Symbol.for("react.fundamental") : 60117, z = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function k(d) {
    if (typeof d == "object" && d !== null) {
      var V = d.$$typeof;
      switch (V) {
        case t:
          switch (d = d.type, d) {
            case f:
            case h:
            case n:
            case o:
            case i:
            case p:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case c:
                case s:
                case v:
                case m:
                case a:
                  return d;
                default:
                  return V;
              }
          }
        case r:
          return V;
      }
    }
  }
  function x(d) {
    return k(d) === h;
  }
  return H.AsyncMode = f, H.ConcurrentMode = h, H.ContextConsumer = c, H.ContextProvider = a, H.Element = t, H.ForwardRef = s, H.Fragment = n, H.Lazy = v, H.Memo = m, H.Portal = r, H.Profiler = o, H.StrictMode = i, H.Suspense = p, H.isAsyncMode = function(d) {
    return x(d) || k(d) === f;
  }, H.isConcurrentMode = x, H.isContextConsumer = function(d) {
    return k(d) === c;
  }, H.isContextProvider = function(d) {
    return k(d) === a;
  }, H.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === t;
  }, H.isForwardRef = function(d) {
    return k(d) === s;
  }, H.isFragment = function(d) {
    return k(d) === n;
  }, H.isLazy = function(d) {
    return k(d) === v;
  }, H.isMemo = function(d) {
    return k(d) === m;
  }, H.isPortal = function(d) {
    return k(d) === r;
  }, H.isProfiler = function(d) {
    return k(d) === o;
  }, H.isStrictMode = function(d) {
    return k(d) === i;
  }, H.isSuspense = function(d) {
    return k(d) === p;
  }, H.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === n || d === h || d === o || d === i || d === p || d === g || typeof d == "object" && d !== null && (d.$$typeof === v || d.$$typeof === m || d.$$typeof === a || d.$$typeof === c || d.$$typeof === s || d.$$typeof === u || d.$$typeof === z || d.$$typeof === T || d.$$typeof === R);
  }, H.typeOf = k, H;
}
var U = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vr;
function yo() {
  return vr || (vr = 1, {}.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, s = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, R = e ? Symbol.for("react.block") : 60121, u = e ? Symbol.for("react.fundamental") : 60117, z = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function k(_) {
      return typeof _ == "string" || typeof _ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      _ === n || _ === h || _ === o || _ === i || _ === p || _ === g || typeof _ == "object" && _ !== null && (_.$$typeof === v || _.$$typeof === m || _.$$typeof === a || _.$$typeof === c || _.$$typeof === s || _.$$typeof === u || _.$$typeof === z || _.$$typeof === T || _.$$typeof === R);
    }
    function x(_) {
      if (typeof _ == "object" && _ !== null) {
        var W = _.$$typeof;
        switch (W) {
          case t:
            var S = _.type;
            switch (S) {
              case f:
              case h:
              case n:
              case o:
              case i:
              case p:
                return S;
              default:
                var $ = S && S.$$typeof;
                switch ($) {
                  case c:
                  case s:
                  case v:
                  case m:
                  case a:
                    return $;
                  default:
                    return W;
                }
            }
          case r:
            return W;
        }
      }
    }
    var d = f, V = h, K = c, j = a, q = t, ae = s, ue = n, J = v, re = m, ie = r, X = o, pe = i, ne = p, Q = !1;
    function fe(_) {
      return Q || (Q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), se(_) || x(_) === f;
    }
    function se(_) {
      return x(_) === h;
    }
    function me(_) {
      return x(_) === c;
    }
    function E(_) {
      return x(_) === a;
    }
    function w(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function b(_) {
      return x(_) === s;
    }
    function O(_) {
      return x(_) === n;
    }
    function l(_) {
      return x(_) === v;
    }
    function I(_) {
      return x(_) === m;
    }
    function y(_) {
      return x(_) === r;
    }
    function B(_) {
      return x(_) === o;
    }
    function M(_) {
      return x(_) === i;
    }
    function N(_) {
      return x(_) === p;
    }
    U.AsyncMode = d, U.ConcurrentMode = V, U.ContextConsumer = K, U.ContextProvider = j, U.Element = q, U.ForwardRef = ae, U.Fragment = ue, U.Lazy = J, U.Memo = re, U.Portal = ie, U.Profiler = X, U.StrictMode = pe, U.Suspense = ne, U.isAsyncMode = fe, U.isConcurrentMode = se, U.isContextConsumer = me, U.isContextProvider = E, U.isElement = w, U.isForwardRef = b, U.isFragment = O, U.isLazy = l, U.isMemo = I, U.isPortal = y, U.isProfiler = B, U.isStrictMode = M, U.isSuspense = N, U.isValidElementType = k, U.typeOf = x;
  }()), U;
}
(function(e) {
  ({}).NODE_ENV === "production" ? e.exports = go() : e.exports = yo();
})(vo);
var jt = kt, Co = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, So = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, wo = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, tn = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Bt = {};
Bt[jt.ForwardRef] = wo;
Bt[jt.Memo] = tn;
function gr(e) {
  return jt.isMemo(e) ? tn : Bt[e.$$typeof] || Co;
}
var bo = Object.defineProperty, Eo = Object.getOwnPropertyNames, yr = Object.getOwnPropertySymbols, Ao = Object.getOwnPropertyDescriptor, Ro = Object.getPrototypeOf, Cr = Object.prototype;
function rn(e, t, r) {
  if (typeof t != "string") {
    if (Cr) {
      var n = Ro(t);
      n && n !== Cr && rn(e, n, r);
    }
    var i = Eo(t);
    yr && (i = i.concat(yr(t)));
    for (var o = gr(e), a = gr(t), c = 0; c < i.length; ++c) {
      var f = i[c];
      if (!So[f] && !(r && r[f]) && !(a && a[f]) && !(o && o[f])) {
        var h = Ao(t, f);
        try {
          bo(e, f, h);
        } catch {
        }
      }
    }
  }
  return e;
}
var To = rn;
function he() {
  return (he = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Sr = function(e, t) {
  for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1)
    r.push(t[n], e[n + 1]);
  return r;
}, Ot = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Ze.typeOf(e);
}, ft = Object.freeze([]), Re = Object.freeze({});
function Ne(e) {
  return typeof e == "function";
}
function Pt(e) {
  return {}.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Vt(e) {
  return e && typeof e.styledComponentId == "string";
}
var Ie = typeof process < "u" && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR) || "data-styled", Wt = typeof window < "u" && "HTMLElement" in window, xo = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && {}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && {}.REACT_APP_SC_DISABLE_SPEEDY !== "" ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" && {}.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && {}.SC_DISABLE_SPEEDY !== void 0 && {}.SC_DISABLE_SPEEDY !== "" ? {}.SC_DISABLE_SPEEDY !== "false" && {}.SC_DISABLE_SPEEDY : {}.NODE_ENV !== "production"), zo = {}.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
` } : {};
function ko() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, n = arguments.length; r < n; r += 1)
    t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(i) {
    e = e.replace(/%[a-z]/, i);
  }), e;
}
function we(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  throw {}.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(ko.apply(void 0, [zo[e]].concat(r)).trim());
}
var Oo = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, i = 0; i < r; i++)
      n += this.groupSizes[i];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var i = this.groupSizes, o = i.length, a = o; r >= a; )
        (a <<= 1) < 0 && we(16, "" + r);
      this.groupSizes = new Uint32Array(a), this.groupSizes.set(i), this.length = a;
      for (var c = o; c < a; c++)
        this.groupSizes[c] = 0;
    }
    for (var f = this.indexOfGroup(r + 1), h = 0, s = n.length; h < s; h++)
      this.tag.insertRule(f, n[h]) && (this.groupSizes[r]++, f++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], i = this.indexOfGroup(r), o = i + n;
      this.groupSizes[r] = 0;
      for (var a = i; a < o; a++)
        this.tag.deleteRule(i);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0)
      return n;
    for (var i = this.groupSizes[r], o = this.indexOfGroup(r), a = o + i, c = o; c < a; c++)
      n += this.tag.getRule(c) + `/*!sc*/
`;
    return n;
  }, e;
}(), at = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map(), We = 1, et = function(e) {
  if (at.has(e))
    return at.get(e);
  for (; dt.has(We); )
    We++;
  var t = We++;
  return {}.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && we(16, "" + t), at.set(e, t), dt.set(t, e), t;
}, Po = function(e) {
  return dt.get(e);
}, $o = function(e, t) {
  t >= We && (We = t + 1), at.set(e, t), dt.set(t, e);
}, No = "style[" + Ie + '][data-styled-version="5.3.6"]', Io = new RegExp("^" + Ie + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Mo = function(e, t, r) {
  for (var n, i = r.split(","), o = 0, a = i.length; o < a; o++)
    (n = i[o]) && e.registerName(t, n);
}, Lo = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], i = 0, o = r.length; i < o; i++) {
    var a = r[i].trim();
    if (a) {
      var c = a.match(Io);
      if (c) {
        var f = 0 | parseInt(c[1], 10), h = c[2];
        f !== 0 && ($o(h, f), Mo(e, h, c[3]), e.getTag().insertRules(f, n)), n.length = 0;
      } else
        n.push(a);
    }
  }
}, Do = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, nn = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), i = function(c) {
    for (var f = c.childNodes, h = f.length; h >= 0; h--) {
      var s = f[h];
      if (s && s.nodeType === 1 && s.hasAttribute(Ie))
        return s;
    }
  }(r), o = i !== void 0 ? i.nextSibling : null;
  n.setAttribute(Ie, "active"), n.setAttribute("data-styled-version", "5.3.6");
  var a = Do();
  return a && n.setAttribute("nonce", a), r.insertBefore(n, o), n;
}, Fo = function() {
  function e(r) {
    var n = this.element = nn(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(i) {
      if (i.sheet)
        return i.sheet;
      for (var o = document.styleSheets, a = 0, c = o.length; a < c; a++) {
        var f = o[a];
        if (f.ownerNode === i)
          return f;
      }
      we(17);
    }(n), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    try {
      return this.sheet.insertRule(n, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, t.getRule = function(r) {
    var n = this.sheet.cssRules[r];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e;
}(), Ho = function() {
  function e(r) {
    var n = this.element = nn(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var i = document.createTextNode(n), o = this.nodes[r];
      return this.element.insertBefore(i, o || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), Uo = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    return r <= this.length && (this.rules.splice(r, 0, n), this.length++, !0);
  }, t.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), wr = Wt, jo = { isServer: !Wt, useCSSOMInjection: !xo }, on = function() {
  function e(r, n, i) {
    r === void 0 && (r = Re), n === void 0 && (n = {}), this.options = he({}, jo, {}, r), this.gs = n, this.names = new Map(i), this.server = !!r.isServer, !this.server && Wt && wr && (wr = !1, function(o) {
      for (var a = document.querySelectorAll(No), c = 0, f = a.length; c < f; c++) {
        var h = a[c];
        h && h.getAttribute(Ie) !== "active" && (Lo(o, h), h.parentNode && h.parentNode.removeChild(h));
      }
    }(this));
  }
  e.registerId = function(r) {
    return et(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(he({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (i = (n = this.options).isServer, o = n.useCSSOMInjection, a = n.target, r = i ? new Uo(a) : o ? new Fo(a) : new Ho(a), new Oo(r)));
    var r, n, i, o, a;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (et(r), this.names.has(r))
      this.names.get(r).add(n);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(n), this.names.set(r, i);
    }
  }, t.insertRules = function(r, n, i) {
    this.registerName(r, n), this.getTag().insertRules(et(r), i);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(et(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), i = n.length, o = "", a = 0; a < i; a++) {
        var c = Po(a);
        if (c !== void 0) {
          var f = r.names.get(c), h = n.getGroup(a);
          if (f && h && f.size) {
            var s = Ie + ".g" + a + '[id="' + c + '"]', p = "";
            f !== void 0 && f.forEach(function(g) {
              g.length > 0 && (p += g + ",");
            }), o += "" + h + s + '{content:"' + p + `"}/*!sc*/
`;
          }
        }
      }
      return o;
    }(this);
  }, e;
}(), Bo = /(a)(d)/gi, br = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function $t(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    r = br(t % 52) + r;
  return (br(t % 52) + r).replace(Bo, "$1-$2");
}
var xe = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, an = function(e) {
  return xe(5381, e);
};
function Vo(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Ne(r) && !Vt(r))
      return !1;
  }
  return !0;
}
var Wo = an("5.3.6"), Yo = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = {}.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Vo(t), this.componentId = r, this.baseHash = xe(Wo, r), this.baseStyle = n, on.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var i = this.componentId, o = [];
    if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(i, this.staticRulesId))
        o.push(this.staticRulesId);
      else {
        var a = Me(this.rules, t, r, n).join(""), c = $t(xe(this.baseHash, a) >>> 0);
        if (!r.hasNameForId(i, c)) {
          var f = n(a, "." + c, void 0, i);
          r.insertRules(i, c, f);
        }
        o.push(c), this.staticRulesId = c;
      }
    else {
      for (var h = this.rules.length, s = xe(this.baseHash, n.hash), p = "", g = 0; g < h; g++) {
        var m = this.rules[g];
        if (typeof m == "string")
          p += m, {}.NODE_ENV !== "production" && (s = xe(s, m + g));
        else if (m) {
          var v = Me(m, t, r, n), R = Array.isArray(v) ? v.join("") : v;
          s = xe(s, R + g), p += R;
        }
      }
      if (p) {
        var u = $t(s >>> 0);
        if (!r.hasNameForId(i, u)) {
          var z = n(p, "." + u, void 0, i);
          r.insertRules(i, u, z);
        }
        o.push(u);
      }
    }
    return o.join(" ");
  }, e;
}(), Go = /^\s*\/\/.*$/gm, Zo = [":", "[", ".", "#"];
function qo(e) {
  var t, r, n, i, o = e === void 0 ? Re : e, a = o.options, c = a === void 0 ? Re : a, f = o.plugins, h = f === void 0 ? ft : f, s = new ho(c), p = [], g = function(R) {
    function u(z) {
      if (z)
        try {
          R(z + "}");
        } catch {
        }
    }
    return function(z, T, k, x, d, V, K, j, q, ae) {
      switch (z) {
        case 1:
          if (q === 0 && T.charCodeAt(0) === 64)
            return R(T + ";"), "";
          break;
        case 2:
          if (j === 0)
            return T + "/*|*/";
          break;
        case 3:
          switch (j) {
            case 102:
            case 112:
              return R(k[0] + T), "";
            default:
              return T + (ae === 0 ? "/*|*/" : "");
          }
        case -2:
          T.split("/*|*/}").forEach(u);
      }
    };
  }(function(R) {
    p.push(R);
  }), m = function(R, u, z) {
    return u === 0 && Zo.indexOf(z[r.length]) !== -1 || z.match(i) ? R : "." + t;
  };
  function v(R, u, z, T) {
    T === void 0 && (T = "&");
    var k = R.replace(Go, ""), x = u && z ? z + " " + u + " { " + k + " }" : k;
    return t = T, r = u, n = new RegExp("\\" + r + "\\b", "g"), i = new RegExp("(\\" + r + "\\b){2,}"), s(z || !u ? "" : u, x);
  }
  return s.use([].concat(h, [function(R, u, z) {
    R === 2 && z.length && z[0].lastIndexOf(r) > 0 && (z[0] = z[0].replace(n, m));
  }, g, function(R) {
    if (R === -2) {
      var u = p;
      return p = [], u;
    }
  }])), v.hash = h.length ? h.reduce(function(R, u) {
    return u.name || we(15), xe(R, u.name);
  }, 5381).toString() : "", v;
}
var sn = Qe.createContext();
sn.Consumer;
var cn = Qe.createContext(), Xo = (cn.Consumer, new on()), Nt = qo();
function Qo() {
  return De(sn) || Xo;
}
function Ko() {
  return De(cn) || Nt;
}
var Jo = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(i, o) {
      o === void 0 && (o = Nt);
      var a = n.name + o.hash;
      i.hasNameForId(n.id, a) || i.insertRules(n.id, a, o(n.rules, a, "@keyframes"));
    }, this.toString = function() {
      return we(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Nt), this.name + t.hash;
  }, e;
}(), e1 = /([A-Z])/, t1 = /([A-Z])/g, r1 = /^ms-/, n1 = function(e) {
  return "-" + e.toLowerCase();
};
function Er(e) {
  return e1.test(e) ? e.replace(t1, n1).replace(r1, "-ms-") : e;
}
var Ar = function(e) {
  return e == null || e === !1 || e === "";
};
function Me(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var i, o = [], a = 0, c = e.length; a < c; a += 1)
      (i = Me(e[a], t, r, n)) !== "" && (Array.isArray(i) ? o.push.apply(o, i) : o.push(i));
    return o;
  }
  if (Ar(e))
    return "";
  if (Vt(e))
    return "." + e.styledComponentId;
  if (Ne(e)) {
    if (typeof (h = e) != "function" || h.prototype && h.prototype.isReactComponent || !t)
      return e;
    var f = e(t);
    return {}.NODE_ENV !== "production" && Ze.isElement(f) && console.warn(Pt(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Me(f, t, r, n);
  }
  var h;
  return e instanceof Jo ? r ? (e.inject(r, n), e.getName(n)) : e : Ot(e) ? function s(p, g) {
    var m, v, R = [];
    for (var u in p)
      p.hasOwnProperty(u) && !Ar(p[u]) && (Array.isArray(p[u]) && p[u].isCss || Ne(p[u]) ? R.push(Er(u) + ":", p[u], ";") : Ot(p[u]) ? R.push.apply(R, s(p[u], u)) : R.push(Er(u) + ": " + (m = u, (v = p[u]) == null || typeof v == "boolean" || v === "" ? "" : typeof v != "number" || v === 0 || m in _o ? String(v).trim() : v + "px") + ";"));
    return g ? [g + " {"].concat(R, ["}"]) : R;
  }(e) : e.toString();
}
var Rr = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function o1(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return Ne(e) || Ot(e) ? Rr(Me(Sr(ft, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Rr(Me(Sr(e, r)));
}
var Tr = /invalid hook call/i, tt = /* @__PURE__ */ new Set(), i1 = function(e, t) {
  if ({}.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var i = !0;
      console.error = function(o) {
        if (Tr.test(o))
          i = !1, tt.delete(r);
        else {
          for (var a = arguments.length, c = new Array(a > 1 ? a - 1 : 0), f = 1; f < a; f++)
            c[f - 1] = arguments[f];
          n.apply(void 0, [o].concat(c));
        }
      }, _t(), i && !tt.has(r) && (console.warn(r), tt.add(r));
    } catch (o) {
      Tr.test(o.message) && tt.delete(r);
    } finally {
      console.error = n;
    }
  }
}, a1 = function(e, t, r) {
  return r === void 0 && (r = Re), e.theme !== r.theme && e.theme || t || r.theme;
}, s1 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, c1 = /(^-|-$)/g;
function Ct(e) {
  return e.replace(s1, "-").replace(c1, "");
}
var l1 = function(e) {
  return $t(an(e) >>> 0);
};
function rt(e) {
  return typeof e == "string" && ({}.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var It = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, u1 = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function f1(e, t, r) {
  var n = e[r];
  It(t) && It(n) ? ln(n, t) : e[r] = t;
}
function ln(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  for (var i = 0, o = r; i < o.length; i++) {
    var a = o[i];
    if (It(a))
      for (var c in a)
        u1(c) && f1(e, a[c], c);
  }
  return e;
}
var qe = Qe.createContext();
qe.Consumer;
function d1(e) {
  var t = De(qe), r = pt(function() {
    return function(n, i) {
      if (!n)
        return we(14);
      if (Ne(n)) {
        var o = n(i);
        return {}.NODE_ENV === "production" || o !== null && !Array.isArray(o) && typeof o == "object" ? o : we(7);
      }
      return Array.isArray(n) || typeof n != "object" ? we(8) : i ? he({}, i, {}, n) : n;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? Qe.createElement(qe.Provider, { value: r }, e.children) : null;
}
var St = {};
function un(e, t, r) {
  var n = Vt(e), i = !rt(e), o = t.attrs, a = o === void 0 ? ft : o, c = t.componentId, f = c === void 0 ? function(T, k) {
    var x = typeof T != "string" ? "sc" : Ct(T);
    St[x] = (St[x] || 0) + 1;
    var d = x + "-" + l1("5.3.6" + x + St[x]);
    return k ? k + "-" + d : d;
  }(t.displayName, t.parentComponentId) : c, h = t.displayName, s = h === void 0 ? function(T) {
    return rt(T) ? "styled." + T : "Styled(" + Pt(T) + ")";
  }(e) : h, p = t.displayName && t.componentId ? Ct(t.displayName) + "-" + t.componentId : t.componentId || f, g = n && e.attrs ? Array.prototype.concat(e.attrs, a).filter(Boolean) : a, m = t.shouldForwardProp;
  n && e.shouldForwardProp && (m = t.shouldForwardProp ? function(T, k, x) {
    return e.shouldForwardProp(T, k, x) && t.shouldForwardProp(T, k, x);
  } : e.shouldForwardProp);
  var v, R = new Yo(r, p, n ? e.componentStyle : void 0), u = R.isStatic && a.length === 0, z = function(T, k) {
    return function(x, d, V, K) {
      var j = x.attrs, q = x.componentStyle, ae = x.defaultProps, ue = x.foldedComponentIds, J = x.shouldForwardProp, re = x.styledComponentId, ie = x.target;
      ({}).NODE_ENV !== "production" && Rt(re);
      var X = function(O, l, I) {
        O === void 0 && (O = Re);
        var y = he({}, l, { theme: O }), B = {};
        return I.forEach(function(M) {
          var N, _, W, S = M;
          for (N in Ne(S) && (S = S(y)), S)
            y[N] = B[N] = N === "className" ? (_ = B[N], W = S[N], _ && W ? _ + " " + W : _ || W) : S[N];
        }), [y, B];
      }(a1(d, De(qe), ae) || Re, d, j), pe = X[0], ne = X[1], Q = function(O, l, I, y) {
        var B = Qo(), M = Ko(), N = l ? O.generateAndInjectStyles(Re, B, M) : O.generateAndInjectStyles(I, B, M);
        return {}.NODE_ENV !== "production" && Rt(N), {}.NODE_ENV !== "production" && !l && y && y(N), N;
      }(q, K, pe, {}.NODE_ENV !== "production" ? x.warnTooManyClasses : void 0), fe = V, se = ne.$as || d.$as || ne.as || d.as || ie, me = rt(se), E = ne !== d ? he({}, d, {}, ne) : d, w = {};
      for (var b in E)
        b[0] !== "$" && b !== "as" && (b === "forwardedAs" ? w.as = E[b] : (J ? J(b, pr, se) : !me || pr(b)) && (w[b] = E[b]));
      return d.style && ne.style !== d.style && (w.style = he({}, d.style, {}, ne.style)), w.className = Array.prototype.concat(ue, re, Q !== re ? Q : null, d.className, ne.className).filter(Boolean).join(" "), w.ref = fe, oe(se, w);
    }(v, T, k, u);
  };
  return z.displayName = s, (v = Qe.forwardRef(z)).attrs = g, v.componentStyle = R, v.displayName = s, v.shouldForwardProp = m, v.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : ft, v.styledComponentId = p, v.target = n ? e.target : e, v.withComponent = function(T) {
    var k = t.componentId, x = function(V, K) {
      if (V == null)
        return {};
      var j, q, ae = {}, ue = Object.keys(V);
      for (q = 0; q < ue.length; q++)
        j = ue[q], K.indexOf(j) >= 0 || (ae[j] = V[j]);
      return ae;
    }(t, ["componentId"]), d = k && k + "-" + (rt(T) ? T : Ct(Pt(T)));
    return un(T, he({}, x, { attrs: g, componentId: d }), r);
  }, Object.defineProperty(v, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(T) {
    this._foldedDefaultProps = n ? ln({}, e.defaultProps, T) : T;
  } }), {}.NODE_ENV !== "production" && (i1(s, p), v.warnTooManyClasses = function(T, k) {
    var x = {}, d = !1;
    return function(V) {
      if (!d && (x[V] = !0, Object.keys(x).length >= 200)) {
        var K = k ? ' with the id of "' + k + '"' : "";
        console.warn("Over 200 classes were generated for component " + T + K + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), d = !0, x = {};
      }
    };
  }(s, p)), v.toString = function() {
    return "." + v.styledComponentId;
  }, i && To(v, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), v;
}
var Mt = function(e) {
  return function t(r, n, i) {
    if (i === void 0 && (i = Re), !Ze.isValidElementType(n))
      return we(1, String(n));
    var o = function() {
      return r(n, i, o1.apply(void 0, arguments));
    };
    return o.withConfig = function(a) {
      return t(r, n, he({}, i, {}, a));
    }, o.attrs = function(a) {
      return t(r, n, he({}, i, { attrs: Array.prototype.concat(i.attrs, a).filter(Boolean) }));
    }, o;
  }(un, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Mt[e] = Mt(e);
});
var h1 = function() {
  return De(qe);
};
({}).NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), {}.NODE_ENV !== "production" && {}.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const _e = Mt;
var _1 = 0;
function C(e, t, r, n, i) {
  var o, a, c = {};
  for (a in t)
    a == "ref" ? o = t[a] : c[a] = t[a];
  var f = { type: e, props: c, key: r, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_1, __source: i, __self: n };
  if (typeof e == "function" && (o = e.defaultProps))
    for (a in o)
      c[a] === void 0 && (c[a] = o[a]);
  return A.vnode && A.vnode(f), f;
}
const fn = ({
  svgSize: e
}) => C("svg", {
  fill: "none",
  height: e,
  viewBox: "0 0 16 14",
  width: e,
  xmlns: "http://www.w3.org/2000/svg",
  children: C("path", {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })
}), ge = {
  CIRCLE_SOLID: "circle-solid",
  ELLIPSE_SOLID: "ellipse-solid",
  MAN_SOLID: "man-solid",
  WOMAN_SOLID: "woman-solid",
  SQUARE_ROUNDED_DASH: "square-rounded-dash",
  SQUARE_ROUNDED_SOLID: "square-rounded-solid",
  SQUARE_DASH: "square-dash",
  SQUARE_SOLID: "square-solid"
}, p1 = 2, wt = 14, xr = 5, zr = 0.027;
var ye = /* @__PURE__ */ ((e) => (e[e.S = 300] = "S", e[e.M = 400] = "M", e[e.L = 500] = "L", e[e.Default = 600] = "Default", e))(ye || {});
const je = {
  [
    300
    /* S */
  ]: {
    iconSize: 40,
    marginRight: 14,
    buttonPadding: 4
  },
  [
    400
    /* M */
  ]: {
    iconSize: 45,
    marginRight: 20,
    buttonPadding: 8
  },
  [
    500
    /* L */
  ]: {
    iconSize: 52,
    marginRight: 24,
    buttonPadding: 12
  },
  [
    600
    /* Default */
  ]: {
    iconSize: 52,
    marginRight: 24,
    buttonPadding: 24
  }
}, kr = {
  loading: {
    text: "Loading. Please wait.",
    visible: !0
  },
  waiting: {
    text: "Waiting for input",
    visible: !0
  }
}, m1 = {
  [ve.CANDIDATE_SELECTION]: "Stay still…",
  [ve.FACE_TOO_CLOSE]: "Move back",
  [ve.FACE_TOO_FAR]: "Move closer",
  [ve.FACE_CENTERING]: "Center your face",
  [ve.FACE_NOT_PRESENT]: "Position your face into the circle",
  [ve.SHARPNESS_TOO_LOW]: "Turn face against light",
  [ve.BRIGHTNESS_TOO_LOW]: "Turn face against light",
  [ve.BRIGHTNESS_TOO_HIGH]: "Less light needed"
}, v1 = ge.CIRCLE_SOLID, dn = (e) => e ? e.width < e.height ? Math.max(wt, xr + e.width * zr) : Math.max(wt, xr + e.height * zr) : wt, g1 = (e) => e > ye.Default ? je[ye.Default] : e > ye.L ? je[ye.L] : e > ye.M ? je[ye.M] : je[ye.S], y1 = (e) => {
  if (!e)
    return je[ye.Default];
  const t = Math.max(e.width, e.height);
  return g1(t);
}, C1 = _e.div`
  width: 100%;
  height: 100%;
  top: 0;
  position: ${(e) => e.position};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${(e) => !e.isCameraReady && `
    height: inherit;
    aspect-ratio: 16/9;

    @media (orientation: portrait) and (max-width: 1199px) {
      aspect-ratio: 9/16;
    }
  `}
`, S1 = _e.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, w1 = _e.p`
  background: ${(e) => e.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(e) => `${e.fontSize}px`};
  font-family: Montserrat, Arial, sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: 1em;
  max-width: 80%;
`, hn = ({
  fontSize: e,
  Icon: t,
  isCameraReady: r,
  position: n = "absolute",
  text: i
}) => C(C1, {
  isCameraReady: r,
  position: n,
  children: C(S1, {
    children: [t ? C(t, {
      svgSize: e * 2
    }) : null, C(w1, {
      fontSize: e,
      children: i
    })]
  })
}), _n = ({
  fontSize: e,
  text: t = "An unknown error has occurred"
}) => C(hn, {
  fontSize: e,
  Icon: fn,
  position: "relative",
  text: t
});
class b1 extends le {
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
  componentDidCatch(t, r) {
    console.error(t, r);
  }
  render() {
    return this.state.hasError ? C(_n, {
      fontSize: dn(this.props.videoElementSize),
      Icon: fn,
      isCameraReady: !1
    }) : this.props.children;
  }
}
const E1 = ({
  children: e,
  theme: t,
  videoElementSize: r
}) => C(d1, {
  theme: t,
  children: C(b1, {
    videoElementSize: r,
    children: e
  })
}), Ye = (e, t) => {
  const r = _t(t);
  $e(() => {
    r.current = t;
  }, [t]), $e(
    () => {
      const n = (i) => r.current(i);
      return document.addEventListener(e, n), () => {
        document.removeEventListener(e, n);
      };
    },
    [e]
    // Re-run if eventName
  );
}, A1 = (e) => {
  const [t, r] = de(), n = Oe((i) => {
    var o;
    r((o = i.detail) == null ? void 0 : o.size);
  }, [r]);
  return Ye(e, n), t;
}, R1 = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, bt = {
  colors: R1
}, T1 = (e) => e != null && e.theme ? {
  ...bt,
  ...e.theme,
  colors: {
    ...bt.colors,
    ...e.theme.colors
  }
} : bt, x1 = 0.75, z1 = 1.35, k1 = (e, t) => Math.min(e, t), O1 = ({
  height: e,
  width: t
}) => {
  const r = k1(t, e) * x1, n = (t - r) / 2, i = (e - r) / 2;
  return {
    shiftX: n,
    shiftY: i,
    width: r,
    height: r
  };
}, P1 = (e) => {
  const {
    height: t,
    shiftX: r,
    shiftY: n,
    width: i
  } = O1(e);
  return {
    shiftX: r / e.width,
    shiftY: n / e.height,
    width: i / e.width,
    height: t / e.height
  };
}, $1 = (e, t) => {
  const r = Math.abs(t.x - e.x), n = Math.abs(t.y - e.y);
  return Math.max(r, n) * z1 / 2;
}, pn = (e, t) => {
  document.dispatchEvent(new CustomEvent(e, {
    detail: t
  }));
}, Yt = class {
  constructor() {
    Je(this, "lastDetails", {});
    Je(this, "delayedTime", 0);
  }
  static getInstance() {
    return this._instance || (this._instance = new Yt()), this._instance;
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
  isDetailChanged(t, r) {
    return JSON.stringify(r) !== JSON.stringify(this.lastDetails[t]) ? (this.lastDetails[t] = r, !0) : !1;
  }
  /**
   * If the detail of the event has changed, dispatch the event
   * @param {string} eventName - The name of the event to dispatch.
   * @param detail - Record<string, unknown>
   */
  dispatchCustomEventOnChange(t, r) {
    this.isDetailChanged(t, r) && pn(t, r);
  }
  /**
   * If the detail of the event has changed, delay time has passed, dispatch the event
   * @param {string} eventName - The name of the event to dispatch.
   * @param detail - Record<string, unknown>
   * @param {number} delay - How long dispatch should be delayed.
   */
  dispatchDelayedCustomEventOnChange(t, r, n) {
    const i = performance.now();
    i - this.delayedTime > n && (this.dispatchCustomEventOnChange(t, r), this.delayedTime = i);
  }
};
let st = Yt;
Je(st, "_instance");
st.getInstance();
const Or = (e, t) => {
  pn(e, {
    instruction: t
  });
};
class N1 {
  static async getVideoInputDeviceList() {
    return (await navigator.mediaDevices.enumerateDevices()).filter((r) => r.kind === "videoinput");
  }
}
const I1 = () => {
  const [e, t] = de(!1);
  return $e(() => {
    (async () => {
      (await N1.getVideoInputDeviceList()).length > 1 && t(!0);
    })();
  }, []), e;
}, M1 = ({
  size: e
}) => C("svg", {
  fill: "none",
  height: e,
  viewBox: "0 0 52 52",
  width: e,
  xmlns: "http://www.w3.org/2000/svg",
  children: [C("path", {
    d: "M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z",
    fill: "#131313",
    fillOpacity: "0.3"
  }), C("circle", {
    cx: "17.5",
    cy: "24.5",
    fill: "white",
    r: "1.5"
  }), C("path", {
    d: "M15 17H16C19.5 17 23 21 23 29C22.5 29 21.5 29 20 29C20 29 20.25 33 19.5 34.5C18.75 36 16 36 16 36H15",
    stroke: "white",
    strokeWidth: "2"
  }), C("circle", {
    fill: "white",
    r: "1.5",
    transform: "matrix(-1 0 0 1 34.5 24.5)"
  }), C("path", {
    d: "M37 17H36C32.5 17 29 21 29 29C29.5 29 30.5 29 32 29C32 29 31.75 33 32.5 34.5C33.25 36 36 36 36 36H37",
    stroke: "white",
    strokeWidth: "2"
  })]
}), L1 = ({
  size: e
}) => C("svg", {
  fill: "none",
  height: e,
  viewBox: "0 0 52 52",
  width: e,
  xmlns: "http://www.w3.org/2000/svg",
  children: [C("path", {
    d: "M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z",
    fill: "#131313",
    fillOpacity: "0.3"
  }), C("path", {
    d: "M15 21.375C15 19.7181 16.3431 18.375 18 18.375H20.3222C21.1014 18.375 21.8096 17.9225 22.137 17.2155L22.163 17.1595C22.4904 16.4525 23.1986 16 23.9778 16H28.0222C28.8014 16 29.5096 16.4525 29.837 17.1595L29.863 17.2155C30.1904 17.9225 30.8986 18.375 31.6778 18.375H34C35.6569 18.375 37 19.7181 37 21.375V33C37 34.6569 35.6569 36 34 36H18C16.3431 36 15 34.6569 15 33V21.375Z",
    stroke: "white",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }), C("path", {
    d: "M31.25 27C31.25 24.1005 28.8995 21.75 26 21.75C24.4024 21.75 22.9715 22.4636 22.0086 23.5894M20.75 27C20.75 29.8995 23.1005 32.25 26 32.25C27.5958 32.25 29.0253 31.538 29.9881 30.4144",
    stroke: "white",
    strokeLinecap: "round",
    strokeWidth: "1.5"
  }), C("path", {
    d: "M30.0835 26.4167L31.2502 28.1667L32.4168 26.4167",
    stroke: "white",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  }), C("path", {
    d: "M19.5835 27.5833L20.7502 25.8333L21.9168 27.5833",
    stroke: "white",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  })]
}), mn = _e.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-right: ${(e) => e.marginRight ? `${e.marginRight}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, D1 = ({
  size: e,
  ...t
}) => C(mn, {
  ...t,
  children: C(M1, {
    size: e
  })
}), F1 = ({
  size: e,
  ...t
}) => C(mn, {
  ...t,
  children: C(L1, {
    size: e
  })
}), H1 = _e.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.padding}px`};
  z-index: 2;
`, U1 = ({
  customControlEvent: e,
  videoElementSize: t
}) => {
  const r = I1(), {
    buttonPadding: n,
    iconSize: i,
    marginRight: o
  } = y1(t), a = () => {
    Or(e, At.TOGGLE_MIRROR);
  }, c = () => {
    Or(e, At.SWITCH_CAMERA);
  };
  return C(H1, {
    padding: n,
    children: [C(D1, {
      marginRight: r ? o : 0,
      onClick: a,
      size: i
    }), r && C(F1, {
      onClick: c,
      size: i
    })]
  });
}, j1 = _e.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, B1 = ({
  svgSize: e
}) => C(j1, {
  children: C("svg", {
    fill: "none",
    height: e,
    viewBox: "0 0 48 48",
    width: e,
    xmlns: "http://www.w3.org/2000/svg",
    children: [C("path", {
      d: "M30.9229 9.75026C30.9229 12.3736 28.7533 14.5002 26.0767 14.5002C23.4003 14.5002 21.2307 12.3736 21.2307 9.75026C21.2307 7.12664 23.4003 5 26.0767 5C28.7533 5 30.9229 7.12664 30.9229 9.75026Z",
      fill: "currentColor"
    }), C("path", {
      d: "M40.6155 15.8556C40.6155 18.1044 38.7559 19.9273 36.4618 19.9273C34.1675 19.9273 32.3079 18.1044 32.3079 15.8556C32.3079 13.607 34.1675 11.7842 36.4618 11.7842C38.7559 11.7842 40.6155 13.607 40.6155 15.8556Z",
      fill: "currentColor"
    }), C("path", {
      d: "M42 27.3921C42 29.2659 40.4502 30.785 38.5386 30.785C36.6267 30.785 35.0769 29.2659 35.0769 27.3921C35.0769 25.5181 36.6267 23.999 38.5386 23.999C40.4502 23.999 42 25.5181 42 27.3921Z",
      fill: "currentColor"
    }), C("path", {
      d: "M35.0766 37.5712C35.0766 39.0704 33.837 40.2858 32.3075 40.2858C30.7779 40.2858 29.5383 39.0704 29.5383 37.5712C29.5383 36.0723 30.7779 34.8569 32.3075 34.8569C33.837 34.8569 35.0766 36.0723 35.0766 37.5712Z",
      fill: "currentColor"
    }), C("path", {
      d: "M22.6154 40.2858C22.6154 41.7848 21.3756 43.0001 19.846 43.0001C18.3168 43.0001 17.0769 41.7848 17.0769 40.2858C17.0769 38.7866 18.3168 37.5713 19.846 37.5713C21.3756 37.5713 22.6154 38.7866 22.6154 40.2858Z",
      fill: "currentColor"
    }), C("path", {
      d: "M11.5382 32.8216C11.5382 33.9457 10.6085 34.8573 9.46137 34.8573C8.31426 34.8573 7.38452 33.9457 7.38452 32.8216C7.38452 31.6972 8.31426 30.7856 9.46137 30.7856C10.6085 30.7856 11.5382 31.6972 11.5382 32.8216Z",
      fill: "currentColor"
    }), C("path", {
      d: "M8.76913 21.2849C8.76913 22.0345 8.14932 22.642 7.38456 22.642C6.6198 22.642 6 22.0345 6 21.2849C6 20.5353 6.61981 19.9277 7.38456 19.9277C8.14933 19.9277 8.76913 20.5353 8.76913 21.2849Z",
      fill: "currentColor"
    }), C("path", {
      d: "M15.6927 11.7844C15.6927 12.534 15.0729 13.1415 14.3081 13.1415C13.5434 13.1415 12.9236 12.534 12.9236 11.7844C12.9236 11.0348 13.5434 10.4272 14.3081 10.4272C15.0729 10.4272 15.6927 11.0348 15.6927 11.7844Z",
      fill: "currentColor"
    })]
  })
}), V1 = ({
  appState: e,
  appStateInstructions: t,
  fontSize: r
}) => {
  const n = e === Ae.ERROR || e === Ae.RUNNING;
  return !e || n || !t[e].visible ? null : C(hn, {
    fontSize: r,
    Icon: e === Ae.LOADING ? B1 : void 0,
    isCameraReady: !0,
    text: t[e].text
  });
}, W1 = _e.div`
  position: absolute;
  left: 50%;
  ${(e) => e.cssTop ? `top: ${e.cssTop}%;` : ""}
  ${(e) => e.cssBottom ? `bottom: ${e.cssBottom}%;` : ""}
  transform: translateX(-50%)
    translateY(
      ${(e) => e.cssTop || e.isPortrait ? "-50%" : e.isPortrait ? "" : "50%"}
    );
  z-index: 2;
`, Y1 = _e.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 0.25em;
  margin: 0 auto;
  padding: 0.583em 0.666em;
  background: ${(e) => e.isInCandidateSelection ? `${e.theme.colors.instructionColorSuccess}` : `${e.theme.colors.instructionColor}`};
  color: ${(e) => e.theme.colors.instructionTextColor};
  border: 0;
  font-family: Montserrat, Arial, sans-serif;
  font-weight: 600;
  line-height: 1em;
  font-size: ${(e) => `${e.fontSize}px`};
  white-space: nowrap;
`, G1 = ({
  children: e,
  fontSize: t,
  isInCandidateSelection: r,
  ...n
}) => C(W1, {
  ...n,
  children: C(Y1, {
    fontSize: t,
    isInCandidateSelection: r,
    children: e
  })
}), Z1 = () => C("svg", {
  fill: "none",
  height: "104",
  viewBox: "0 0 104 104",
  width: "104",
  xmlns: "http://www.w3.org/2000/svg",
  children: C("path", {
    d: "M1 52C1 23.8335 23.8335 1 52 1C80.1665 1 103 23.8335 103 52C103 80.1665 80.1665 103 52 103C23.8335 103 1 80.1665 1 52Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2"
  })
}), q1 = () => C("svg", {
  fill: "none",
  height: "104",
  viewBox: "0 0 104 104",
  width: "104",
  xmlns: "http://www.w3.org/2000/svg",
  children: C("path", {
    d: "M52 103C28.4018 103 9 80.3296 9 52C9 23.6704 28.4018 1 52 1C75.5982 1 95 23.6704 95 52C95 80.3296 75.5982 103 52 103Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2"
  })
}), X1 = () => C("svg", {
  fill: "none",
  height: "104",
  viewBox: "0 0 104 104",
  width: "104",
  xmlns: "http://www.w3.org/2000/svg",
  children: C("path", {
    clipRule: "evenodd",
    d: "M51.8695 2C64.5766 2 72.0162 5.51372 75.8892 11.5634C79.8128 17.6922 80.2877 26.7236 78.2847 38.2537L78.1574 38.9866L78.8227 39.3193C79.4548 39.6354 79.9815 39.9396 80.3733 40.6279C80.7817 41.3454 81.1181 42.6226 80.9457 45.0366C80.6244 49.5349 79.3628 51.2414 78.3052 52.1008C77.8499 52.4707 77.4154 52.7045 76.9542 52.9528L76.9541 52.9528C76.8281 53.0207 76.7001 53.0896 76.5691 53.1626C76.0255 53.4658 75.2794 53.9173 74.9797 54.8162L74.9676 54.8526L74.9583 54.8899C73.5607 60.48 71.4743 62.9815 69.6217 65.2026C69.3409 65.5393 69.0655 65.8695 68.7987 66.203C67.7568 67.5053 66.8243 68.8874 66.3142 70.8584C65.8089 72.8106 65.7391 75.2547 66.2516 78.6713L66.2616 78.7381L66.2805 78.8029C68.7036 87.1107 74.8884 91.2894 81.5556 94.0919C82.0648 94.3059 82.651 94.0666 82.865 93.5575C83.079 93.0484 82.8398 92.4621 82.3306 92.2481C75.919 89.5531 70.4093 85.7288 68.2194 78.3074C67.7408 75.0786 67.8396 72.9468 68.2504 71.3596C68.6591 69.7802 69.3974 68.6562 70.3604 67.4524C70.6136 67.136 70.8804 66.8164 71.1569 66.4853C73.041 64.229 75.3749 61.4341 76.8862 55.4241C76.928 55.3236 77.0427 55.1885 77.5432 54.9093C77.6306 54.8606 77.7286 54.8082 77.835 54.7512L77.8351 54.7512C78.3082 54.4979 78.9484 54.1551 79.5664 53.653C81.1819 52.3404 82.5936 50.0371 82.9406 45.1791C83.127 42.5695 82.7951 40.8394 82.1114 39.6384C81.6107 38.7589 80.9623 38.2396 80.3759 37.8863C82.2608 26.5638 81.8327 17.1379 77.5735 10.485C73.175 3.6144 64.9019 0 51.8695 0C38.837 0 30.564 3.6144 26.1654 10.485C21.9062 17.1379 21.4781 26.5638 23.363 37.8863C22.7766 38.2396 22.1283 38.7589 21.6276 39.6384C20.9439 40.8394 20.612 42.5695 20.7984 45.1791C21.1454 50.0371 22.557 52.3404 24.1726 53.653C24.7905 54.1551 25.4308 54.4979 25.9039 54.7512L25.904 54.7512C26.0104 54.8082 26.1084 54.8606 26.1957 54.9093C26.6963 55.1885 26.8109 55.3236 26.8527 55.4241C28.3641 61.4341 30.6979 64.229 32.582 66.4853C32.8586 66.8164 33.1254 67.136 33.3785 67.4524C34.3416 68.6562 35.0798 69.7802 35.4886 71.3596C35.8994 72.9468 35.9981 75.0786 35.5195 78.3074C33.3297 85.7288 27.8199 89.5531 21.4083 92.2481C20.8992 92.4621 20.6599 93.0484 20.8739 93.5575C21.0879 94.0666 21.6742 94.3059 22.1833 94.0919C28.8505 91.2894 35.0354 87.1107 37.4585 78.8029L37.4774 78.7381L37.4874 78.6713C37.9999 75.2547 37.93 72.8106 37.4248 70.8584C36.9146 68.8874 35.9821 67.5053 34.9403 66.203C34.6734 65.8695 34.398 65.5393 34.1173 65.2026C32.2647 62.9815 30.1782 60.48 28.7807 54.8899L28.7714 54.8526L28.7592 54.8162C28.4596 53.9173 27.7135 53.4658 27.1698 53.1626C27.0389 53.0896 26.9109 53.0207 26.7849 52.9529L26.7848 52.9528L26.7848 52.9528C26.3235 52.7045 25.889 52.4707 25.4338 52.1008C24.3761 51.2414 23.1146 49.5349 22.7933 45.0366C22.6208 42.6226 22.9572 41.3454 23.3657 40.6279C23.7575 39.9396 24.2841 39.6354 24.9162 39.3193L25.5816 38.9866L25.4543 38.2537C23.4513 26.7236 23.9261 17.6922 27.8498 11.5634C31.7228 5.51372 39.1623 2 51.8695 2Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })
}), Q1 = () => C("svg", {
  fill: "none",
  height: "104",
  viewBox: "0 0 104 104",
  width: "104",
  xmlns: "http://www.w3.org/2000/svg",
  children: C("rect", {
    height: "102",
    rx: "3",
    stroke: "currentColor",
    strokeDasharray: "48 48",
    strokeLinecap: "square",
    strokeWidth: "2",
    width: "102",
    x: "1",
    y: "1"
  })
}), K1 = () => C("svg", {
  fill: "none",
  height: "104",
  viewBox: "0 0 104 104",
  width: "104",
  xmlns: "http://www.w3.org/2000/svg",
  children: C("rect", {
    height: "102",
    rx: "15",
    stroke: "currentColor",
    strokeDasharray: "32 32",
    strokeLinecap: "square",
    strokeWidth: "2",
    width: "102",
    x: "1",
    y: "1"
  })
}), J1 = () => C("svg", {
  fill: "none",
  height: "104",
  viewBox: "0 0 104 104",
  width: "104",
  xmlns: "http://www.w3.org/2000/svg",
  children: C("rect", {
    height: "102",
    rx: "15",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2",
    width: "102",
    x: "1",
    y: "1"
  })
}), ei = () => C("svg", {
  fill: "none",
  height: "104",
  viewBox: "0 0 104 104",
  width: "104",
  xmlns: "http://www.w3.org/2000/svg",
  children: C("rect", {
    height: "102",
    rx: "15",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2",
    width: "102",
    x: "1",
    y: "1"
  })
}), ti = () => C("svg", {
  fill: "none",
  height: "104",
  viewBox: "0 0 104 104",
  width: "104",
  xmlns: "http://www.w3.org/2000/svg",
  children: [C("mask", {
    fill: "#fff",
    id: "A",
    children: C("path", {
      d: "M51.725.109l-.073-.003c-12.128 0-20.303 5.008-25.105 11.886-4.773 6.836-6.161 15.443-4.915 22.619.549 3.16 1.075 9.238.015 13.475-1.024 4.096-2.538 7.739-3.744 10.635l-.021.049h0c-.588 1.412-1.115 2.678-1.455 3.706-.172.522-.308 1.017-.377 1.465-.064.418-.086.889.049 1.328.424 1.674 1.16 2.953 2.165 3.887s2.224 1.471 3.508 1.754c2.515.553 5.474.173 8.053-.166l.191-.025h0c1.251-.165 2.417-.318 3.475-.378 1.12-.064 2.023-.015 2.704.189.645.193 1.043.508 1.281.992.256.521.393 1.376.192 2.774-1.492 5.052-4.51 7.959-8.221 9.907-3.198 1.679-6.864 2.629-10.565 3.587h0l-2.079.544a1 1 0 1 0 .516 1.932l2.011-.525c3.696-.955 7.626-1.971 11.047-3.768 4.121-2.163 7.568-5.482 9.231-11.183l.019-.065.01-.067c.245-1.631.149-2.972-.364-4.018-.535-1.091-1.45-1.712-2.502-2.027-1.017-.305-2.197-.338-3.391-.27-1.135.064-2.37.227-3.596.388h0l-.218.029c-2.664.35-5.255.659-7.363.195-1.027-.226-1.89-.627-2.576-1.265s-1.25-1.561-1.595-2.94l-.009-.037-.012-.036s-.009-.03-.011-.105a1.93 1.93 0 0 1 .027-.329c.045-.291.143-.668.3-1.143.314-.952.814-2.154 1.422-3.614l.001-.002h0c1.203-2.888 2.773-6.658 3.837-10.916 1.163-4.652.577-11.066.015-14.303-1.166-6.713.145-14.773 4.584-21.132 4.41-6.316 11.958-11.031 23.465-11.031a1.02 1.02 0 0 0 .073-.003c.024.002.048.003.073.003 11.507 0 19.056 4.715 23.465 11.031 4.439 6.358 5.75 14.419 4.584 21.132-.562 3.237-1.148 9.651.015 14.303 1.065 4.259 2.635 8.028 3.837 10.916v.002c.608 1.46 1.108 2.662 1.422 3.614.157.474.255.851.3 1.143a1.93 1.93 0 0 1 .027.329c-.002.072-.01.102-.011.105h0l-.012.036-.009.037c-.345 1.379-.913 2.305-1.595 2.94s-1.549 1.039-2.576 1.265c-2.108.464-4.699.155-7.363-.195l-.218-.029h0c-1.226-.162-2.461-.324-3.596-.388-1.194-.068-2.374-.034-3.391.27-1.053.315-1.967.936-2.502 2.027-.513 1.046-.609 2.387-.364 4.018l.01.067.019.065c1.663 5.701 5.11 9.02 9.231 11.183 3.422 1.796 7.351 2.812 11.047 3.768h.001l2.01.525a1 1 0 1 0 .516-1.932l-2.079-.544h0c-3.701-.959-7.367-1.909-10.565-3.587-3.711-1.948-6.729-4.855-8.221-9.907-.202-1.398-.064-2.253.192-2.774.238-.484.636-.799 1.281-.992.681-.204 1.584-.253 2.704-.189 1.058.06 2.224.213 3.475.378h0l.191.025c2.579.339 5.538.719 8.053.166 1.285-.283 2.501-.817 3.508-1.754s1.742-2.214 2.165-3.887c.136-.44.114-.911.049-1.328-.069-.448-.205-.943-.377-1.465-.34-1.028-.867-2.294-1.455-3.706l-.021-.049c-1.206-2.896-2.72-6.538-3.744-10.635-1.059-4.237-.534-10.316.015-13.475 1.247-7.176-.142-15.783-4.915-22.619C72.101 5.114 63.926.106 51.798.106c-.024 0-.049.001-.073.003z",
      fillRule: "evenodd"
    })
  }), C("g", {
    fill: "currentColor",
    children: [C("path", {
      d: "M51.725.109l-.073-.003c-12.128 0-20.303 5.008-25.105 11.886-4.773 6.836-6.161 15.443-4.915 22.619.549 3.16 1.075 9.238.015 13.475-1.024 4.096-2.538 7.739-3.744 10.635l-.021.049h0c-.588 1.412-1.115 2.678-1.455 3.706-.172.522-.308 1.017-.377 1.465-.064.418-.086.889.049 1.328.424 1.674 1.16 2.953 2.165 3.887s2.224 1.471 3.508 1.754c2.515.553 5.474.173 8.053-.166l.191-.025h0c1.251-.165 2.417-.318 3.475-.378 1.12-.064 2.023-.015 2.704.189.645.193 1.043.508 1.281.992.256.521.393 1.376.192 2.774-1.492 5.052-4.51 7.959-8.221 9.907-3.198 1.679-6.864 2.629-10.565 3.587h0l-2.079.544a1 1 0 1 0 .516 1.932l2.011-.525c3.696-.955 7.626-1.971 11.047-3.768 4.121-2.163 7.568-5.482 9.231-11.183l.019-.065.01-.067c.245-1.631.149-2.972-.364-4.018-.535-1.091-1.45-1.712-2.502-2.027-1.017-.305-2.197-.338-3.391-.27-1.135.064-2.37.227-3.596.388h0l-.218.029c-2.664.35-5.255.659-7.363.195-1.027-.226-1.89-.627-2.576-1.265s-1.25-1.561-1.595-2.94l-.009-.037-.012-.036s-.009-.03-.011-.105a1.93 1.93 0 0 1 .027-.329c.045-.291.143-.668.3-1.143.314-.952.814-2.154 1.422-3.614l.001-.002h0c1.203-2.888 2.773-6.658 3.837-10.916 1.163-4.652.577-11.066.015-14.303-1.166-6.713.145-14.773 4.584-21.132 4.41-6.316 11.958-11.031 23.465-11.031a1.02 1.02 0 0 0 .073-.003c.024.002.048.003.073.003 11.507 0 19.056 4.715 23.465 11.031 4.439 6.358 5.75 14.419 4.584 21.132-.562 3.237-1.148 9.651.015 14.303 1.065 4.259 2.635 8.028 3.837 10.916v.002c.608 1.46 1.108 2.662 1.422 3.614.157.474.255.851.3 1.143a1.93 1.93 0 0 1 .027.329c-.002.072-.01.102-.011.105h0l-.012.036-.009.037c-.345 1.379-.913 2.305-1.595 2.94s-1.549 1.039-2.576 1.265c-2.108.464-4.699.155-7.363-.195l-.218-.029h0c-1.226-.162-2.461-.324-3.596-.388-1.194-.068-2.374-.034-3.391.27-1.053.315-1.967.936-2.502 2.027-.513 1.046-.609 2.387-.364 4.018l.01.067.019.065c1.663 5.701 5.11 9.02 9.231 11.183 3.422 1.796 7.351 2.812 11.047 3.768h.001l2.01.525a1 1 0 1 0 .516-1.932l-2.079-.544h0c-3.701-.959-7.367-1.909-10.565-3.587-3.711-1.948-6.729-4.855-8.221-9.907-.202-1.398-.064-2.253.192-2.774.238-.484.636-.799 1.281-.992.681-.204 1.584-.253 2.704-.189 1.058.06 2.224.213 3.475.378h0l.191.025c2.579.339 5.538.719 8.053.166 1.285-.283 2.501-.817 3.508-1.754s1.742-2.214 2.165-3.887c.136-.44.114-.911.049-1.328-.069-.448-.205-.943-.377-1.465-.34-1.028-.867-2.294-1.455-3.706l-.021-.049c-1.206-2.896-2.72-6.538-3.744-10.635-1.059-4.237-.534-10.316.015-13.475 1.247-7.176-.142-15.783-4.915-22.619C72.101 5.114 63.926.106 51.798.106c-.024 0-.049.001-.073.003z",
      fillRule: "evenodd"
    }), C("path", {
      d: "M51.725.109l-.072.997.072.005.072-.005-.072-.997zM26.547 11.992l-.82-.572h0l.82.572zm-4.915 22.619l-.985.171h0l.985-.171zm.015 13.475l.97.242h0l-.97-.242zm-3.744 10.635l.923.385h0l-.923-.384zm-.021.049l-.923-.385-.005.012.928.372zm0 0l.923.384.005-.012-.928-.372zm-1.455 3.706l-.95-.313h0l.95.313zm-.377 1.465l.988.152h0l-.988-.152zm.049 1.328l.969-.245-.006-.025-.008-.025-.956.295zm2.165 3.887l.681-.732h0l-.681.732zm3.508 1.754l-.215.977h0l.215-.977zm8.053-.166l.13.992h0l-.13-.992zm.191-.025l-.119-.993-.012.002.13.992zm0 0l.119.993.012-.002-.131-.992zm3.475-.378l.057.998h0l-.057-.998zm2.704.189l.287-.958h0l-.287.958zm1.281.992l-.898.441h0l.898-.441zm.192 2.774l.959.283.02-.069.01-.071-.99-.143zm-8.221 9.907l-.465-.885h0l.465.885zm-10.565 3.587l-.251-.968-.068.018-.065.027.384.924zm0 0l.251.968.068-.018.065-.027-.384-.923zm-2.079.544l.258.966h0l-.258-.966zm-.708 1.224l.966-.258h0l-.966.258zm1.224.708l.258.966h0l-.258-.966zm2.011-.525l-.25-.968h0l.25.968zm11.047-3.768l-.465-.885h0l.465.885zm9.231-11.183l-.96-.28h0l.96.28zm.019-.065l.96.28.019-.065.01-.067-.989-.148zm.01-.067l-.989-.148h0l.989.148zm-.364-4.018l.898-.441h0l-.898.441zm-2.502-2.027l-.287.958h0l.287-.958zm-3.391-.27l-.057-.998h0l.057.998zm-3.596.388l-.131-.992-.038.005-.037.008.206.979zm0 0l.13.991.038-.005.038-.008-.206-.978zm-.218.029l.13.992h0l-.13-.991zm-7.363.195l-.215.977h0l.215-.977zm-2.576-1.265l-.681.732h0l.681-.732zm-1.604-2.977l.97-.243-.009-.037-.012-.036-.949.316zm-.012-.036l-.406-.914-.83.369.287.861.949-.316zM18 64.575l1-.022h0l-1 .022zm.027-.329l.988.152h0l-.988-.152zm.3-1.143l.95.314h0l-.95-.314zm1.422-3.614l.923.384v-.001l-.923-.384zm.001-.002l.923.384.003-.008.003-.008-.93-.368zm0 0l-.923-.384-.003.008-.003.008.93.368zm3.837-10.916l-.97-.243h0l.97.243zm.015-14.303l-.985.171h0l.985-.171zm4.584-21.132l.82.572h0l-.82-.572zM51.725 2.103l.072-.997-.072-.005-.072.005.072.997zm23.538 11.034l-.82.572h0l.82-.572zm4.584 21.132l.985.171h0l-.985-.171zm.015 14.303l.97-.243-.97.243zM83.7 59.488l.924-.382-.001-.003-.923.385zm.001.002l-.924.382.001.003.923-.384zm1.422 3.614l.95-.313h0l-.95.313zm.3 1.143l-.988.152h0l.988-.152zm.027.329l1 .022h0l-1-.022zm-.011.105l.962.275.004-.013-.965-.262zm0 0l.949.316.007-.021.006-.021-.962-.275zm-.012.036l-.949-.316-.012.036-.009.037.97.243zm-1.604 2.977l.681.732h0l-.681-.732zm-2.576 1.265l.215.977h0l-.215-.977zm-7.363-.195l-.13.991h0l.13-.992zm-.218-.029l-.179.984.024.004.024.003.13-.991zm0 0l.179-.984-.024-.004-.024-.003-.131.992zm-3.596-.388l.057-.998h0l-.057.998zm-3.391.27l.287.958h0l-.287-.958zm-2.502 2.027l-.898-.441h0l.898.441zm-.364 4.018l.989-.148h0l-.989.148zm.01.067l-.989.148.01.067.019.065.96-.28zm.019.065l.96-.28h0l-.96.28zm9.231 11.183l.465-.885h0l-.465.885zm11.047 3.768l-.25.968.008.002.243-.97zm.001 0l.25-.968-.008-.002-.242.97zm2.01.525l.258-.966h0l-.258.966zm1.224-.708l-.966-.258h0l.966.258zm-.708-1.224l.258-.966h0l-.258.966zm-2.079-.544l-.316.949.032.011.033.008.251-.968zm0 0l.316-.949-.032-.011-.033-.009-.251.968zm-10.565-3.587l.465-.885h0l-.465.885zm-8.221-9.907l-.99.143.01.071.02.069.959-.283zm.192-2.774l-.898-.441h0l.898.441zm1.281-.992l-.287-.958h0l.287.958zm2.704-.189l-.057.998h0l.057-.998zm3.475.378l-.13.992h.003l.128-.992zm0 0l.13-.992h-.002l-.128.992zm.191.025l-.13.992h0l.13-.992zm8.053.166l.215.977h0l-.215-.977zm3.508-1.754l-.681-.732h0l.681.732zm2.165-3.887l-.956-.295-.007.025-.006.025.969.245zm.049-1.328l-.988.152h0l.988-.152zm-.377-1.465l.95-.313h0l-.95.313zm-1.455-3.706l.923-.384h0l-.923.385zm-.021-.049l-.923.384h0l.923-.385zm-3.744-10.635l.97-.242h0l-.97.242zm.015-13.475l.985.171h0l-.985-.171zm-4.915-22.619l-.82.572h0l.82-.572zM51.797-.889l-.144-.005v2l.144-1.995zm-.144-.005c-12.438 0-20.927 5.154-25.925 12.314l1.64 1.145C31.973 5.967 39.835 1.106 51.652 1.106v-2zM25.727 11.42c-4.939 7.075-6.367 15.955-5.08 23.363l1.97-.342c-1.206-6.945.143-15.278 4.749-21.875l-1.64-1.145zm-5.08 23.363c.542 3.121 1.038 9.032.03 13.062l1.94.485c1.111-4.445.556-10.691 0-13.889l-1.97.342zm.03 13.062c-1.004 4.014-2.49 7.593-3.697 10.493l1.846.769c1.204-2.892 2.747-6.599 3.791-10.777l-1.94-.485zM16.98 58.337l-.021.049 1.846.769.02-.049-1.846-.769zm-.026.062h0l1.856.745h0l-1.856-.744zm.005-.012c-.583 1.4-1.127 2.705-1.481 3.777l1.899.627c.325-.984.835-2.21 1.428-3.635l-1.846-.769zm-1.481 3.777c-.18.545-.335 1.1-.416 1.626l1.977.305c.057-.369.174-.806.338-1.304l-1.899-.627zm-.416 1.626c-.074.479-.119 1.125.082 1.776l1.911-.59c-.071-.229-.071-.525-.016-.881l-1.977-.305zm.068 1.726c.463 1.828 1.285 3.288 2.454 4.374l1.362-1.465c-.841-.783-1.492-1.881-1.877-3.401l-1.939.491zm2.454 4.374c1.169 1.087 2.561 1.687 3.974 1.998l.43-1.953c-1.156-.254-2.196-.722-3.042-1.51l-1.362 1.465zm3.974 1.998c2.718.598 5.861.183 8.399-.151l-.261-1.983c-2.621.344-5.396.689-7.708.18l-.43 1.953zm8.399-.151l.191-.025-.261-1.983-.191.025.261 1.983zm.179-.024h0l-.237-1.986h0l.237 1.986zm.012-.001c1.261-.166 2.388-.314 3.401-.371l-.113-1.997c-1.102.063-2.307.222-3.549.385l.261 1.983zm3.401-.371c1.084-.061 1.847-.005 2.36.149l.574-1.916c-.849-.254-1.891-.295-3.047-.23l.113 1.997zm2.36.149c.439.131.581.292.67.475l1.796-.881c-.386-.786-1.041-1.255-1.892-1.51l-.574 1.916zm.67.475c.131.266.287.891.1 2.191l1.979.285c.216-1.496.097-2.582-.284-3.357l-1.796.881zm.13 2.05c-1.403 4.749-4.212 7.459-7.727 9.305l.93 1.771c3.907-2.051 7.134-5.154 8.716-10.509l-1.918-.567zm-7.727 9.305c-3.077 1.616-6.626 2.54-10.351 3.505l.502 1.936c3.678-.953 7.461-1.928 10.779-3.67l-.93-1.771zM18.5 86.87h0l.767 1.847h0L18.5 86.87zm.133-.045l-2.087.546.516 1.932 2.072-.542-.502-1.936zm-2.087.546a2 2 0 0 0-1.416 2.448l1.932-.516h0l-.516-1.932zm-1.416 2.448a2 2 0 0 0 2.448 1.416l-.516-1.932h0l-1.932.516zm2.448 1.416l2.003-.523-.5-1.936-2.019.527.516 1.932zm2.003-.523c3.674-.95 7.72-1.991 11.262-3.85l-.93-1.771c-3.301 1.733-7.115 2.724-10.833 3.685l.5 1.936zm11.262-3.85c4.317-2.267 7.974-5.783 9.726-11.789l-1.92-.56c-1.574 5.397-4.812 8.518-8.736 10.578l.93 1.771zm9.726-11.789l.019-.065-1.92-.56-.019.065 1.92.56zm.048-.197l.01-.067-1.978-.297-.01.067 1.978.297zm.01-.067c.259-1.728.184-3.303-.456-4.607l-1.795.881c.386.787.503 1.895.273 3.429l1.978.297zm-.456-4.607c-.684-1.395-1.857-2.168-3.113-2.544l-.574 1.916c.85.255 1.505.723 1.892 1.51l1.795-.881zm-3.113-2.544c-1.184-.355-2.503-.381-3.735-.311l.113 1.997c1.157-.066 2.198-.025 3.047.23l.574-1.916zm-3.735-.311c-1.179.067-2.452.235-3.67.395l.261 1.983c1.235-.163 2.431-.319 3.522-.381l-.113-1.997zm-3.745.408h0l.412 1.957h0l-.412-1.957zm.075-.013l-.218.029.261 1.983.218-.029-.261-1.983zm-.218.029c-2.708.356-5.114.629-7.018.21l-.43 1.953c2.312.509 5.088.164 7.708-.18l-.261-1.983zm-7.018.21c-.898-.198-1.585-.533-2.11-1.021l-1.362 1.464c.847.788 1.886 1.255 3.042 1.51l.43-1.953zm-2.11-1.021c-.518-.482-1-1.226-1.306-2.45l-1.94.485c.384 1.534 1.037 2.642 1.884 3.429l1.362-1.464zm-1.306-2.45l-.009-.037-1.94.485.009.037 1.94-.485zm-.031-.111l-.012-.036-1.897.632.012.036 1.897-.632zm-.555 1.194a1.82 1.82 0 0 0 .594-.923 1.81 1.81 0 0 0-.01-.135.99.99 0 0 0-.013-.07c-.004-.018-.008-.032-.008-.034.002.01.005.02.007.029a.73.73 0 0 1 .009.05c.004.027.004.042.004.043l-2 .044c.002.075.007.142.016.203.005.031.01.059.016.087.003.014.006.027.009.039 0 .001-.003-.013-.007-.031-.001-.005-.008-.034-.013-.07-.003-.023-.009-.091-.011-.135.006-.114.226-.643.594-.923l.812 1.828zM19 64.553a.69.69 0 0 1 .002-.04c.002-.026.006-.064.014-.114l-1.977-.305c-.029.185-.042.353-.039.503l2-.044zm.016-.155c.033-.213.112-.531.261-.981l-1.899-.627c-.164.498-.282.934-.338 1.304l1.977.305zm.261-.981c.3-.907.782-2.069 1.396-3.543l-1.846-.769c-.602 1.446-1.12 2.688-1.449 3.685l1.899.627zm1.396-3.543l.001-.002-1.847-.768-.001.002 1.847.768zm.007-.018h0l-1.86-.736h0l1.86.736zm-.007.016c1.201-2.884 2.799-6.718 3.884-11.058l-1.94-.485c-1.044 4.177-2.586 7.883-3.79 10.774l1.846.769zm3.884-11.058c1.215-4.859.599-11.441.03-14.716l-1.971.342c.556 3.198 1.111 9.445 0 13.889l1.94.485zm.03-14.716c-1.126-6.481.146-14.269 4.419-20.388l-1.64-1.145c-4.606 6.597-5.956 14.931-4.749 21.875l1.971-.342zm4.419-20.388C33.22 7.675 40.455 3.106 51.652 3.106v-2c-11.818 0-19.679 4.861-24.285 11.459l1.64 1.145zM51.652 3.106a2.01 2.01 0 0 0 .144-.005l-.143-1.995-.001 2zm.145-2l-.144 1.995c.048.003.096.005.144.005v-2zm24.285 11.459C71.477 5.967 63.615 1.106 51.798 1.106v2c11.197 0 18.432 4.568 22.645 10.603l1.64-1.145zm4.749 21.875c1.206-6.945-.143-15.278-4.749-21.875l-1.64 1.145c4.272 6.12 5.545 13.907 4.419 20.388l1.971.342zm0 13.889c-1.111-4.445-.555-10.691 0-13.889l-1.971-.342c-.569 3.275-1.184 9.858.03 14.716l1.94-.485zm3.79 10.774c-1.204-2.892-2.746-6.597-3.79-10.774l-1.94.485c1.085 4.34 2.683 8.174 3.884 11.058l1.846-.769zm.002.005l-.001-.002-1.849.764.001.002 1.849-.764zm1.448 3.682c-.329-.996-.847-2.239-1.449-3.685l-1.846.769c.614 1.474 1.096 2.635 1.396 3.543l1.899-.627zm.338 1.304c-.057-.369-.174-.806-.338-1.304l-1.899.627c.149.451.228.768.261.981l1.977-.305zm.039.503c.003-.151-.01-.319-.039-.503l-1.977.305c.008.05.012.088.014.114.001.013.002.023.002.03l2 .054zm-.045.344l.007-.027c.003-.012.006-.025.009-.038a1.34 1.34 0 0 0 .015-.084c.008-.059.014-.124.015-.196l-1.999-.044c0 0 0-.014.004-.039.002-.013.004-.028.008-.046.002-.009.004-.018.006-.028l.006-.022 1.93.524zm-.004.013h0l-1.923-.55h0l1.923.549zm-.025.078l.012-.036-1.897-.632-.012.036 1.897.632zm.012-.036l.009-.037-1.94-.485-.009.037 1.94.485zm-1.884 3.429c.847-.787 1.5-1.895 1.884-3.429l-1.94-.485c-.306 1.224-.788 1.968-1.306 2.45l1.362 1.464zm-3.042 1.51c1.156-.254 2.196-.722 3.042-1.51l-1.362-1.464c-.525.488-1.212.823-2.11 1.021l.43 1.953zm-7.708-.18c2.621.344 5.396.689 7.708.18l-.43-1.953c-1.904.419-4.31.146-7.018-.21l-.261 1.983zm-.218-.029l.218.029.261-1.983-.218-.029-.261 1.983zm-.049-.008h0l.358-1.968h0l-.358 1.968zm-3.474-.374c1.091.062 2.287.219 3.522.381l.261-1.983c-1.218-.16-2.491-.328-3.67-.395l-.113 1.997zm-3.047.23c.849-.254 1.891-.295 3.047-.23l.113-1.997c-1.231-.07-2.55-.044-3.735.311l.574 1.916zm-1.892 1.51c.386-.787 1.042-1.255 1.892-1.51l-.574-1.916c-1.256.376-2.429 1.15-3.113 2.544l1.795.881zm-.273 3.429c-.23-1.534-.113-2.642.273-3.429l-1.795-.881c-.64 1.304-.715 2.879-.456 4.607l1.978-.297zm.01.067l-.01-.067-1.978.297.01.067 1.978-.297zm-.01-.067l-.019-.065-1.92.56.019.065 1.92-.56zm8.736 10.578c-3.924-2.06-7.162-5.181-8.736-10.578l-1.92.56c1.752 6.006 5.409 9.522 9.726 11.789l.93-1.771zm10.833 3.685c-3.718-.961-7.531-1.952-10.833-3.685l-.93 1.771c3.542 1.86 7.588 2.901 11.262 3.85l.501-1.936zm-.007-.002h-.001l-.485 1.94h.001l.485-1.94zm2.026.529l-2.018-.527-.501 1.936 2.002.523.516-1.932zm0 0h0l-.516 1.932a2 2 0 0 0 2.448-1.416l-1.932-.516zm0 0h0l1.932.516a2 2 0 0 0-1.416-2.448l-.516 1.932zm-2.072-.542l2.072.542.516-1.932-2.087-.546-.501 1.936zm-.066-.019h0l.632-1.897h0l-.632 1.897zm-10.714-3.651c3.319 1.742 7.102 2.717 10.779 3.67l.502-1.936c-3.725-.965-7.274-1.889-10.351-3.505l-.93 1.771zm-8.716-10.509c1.582 5.355 4.809 8.458 8.716 10.509l.93-1.771c-3.515-1.846-6.324-4.556-7.727-9.305l-1.918.567zm.253-3.498c-.381.776-.499 1.861-.284 3.357l1.98-.285c-.187-1.3-.031-1.924.1-2.191l-1.796-.881zm1.892-1.51c-.851.255-1.506.724-1.892 1.51l1.796.881c.09-.183.231-.343.67-.475l-.574-1.916zm3.047-.23c-1.157-.066-2.198-.025-3.047.23l.574 1.916c.513-.154 1.277-.21 2.36-.149l.113-1.997zm3.549.385c-1.242-.163-2.447-.323-3.549-.385l-.113 1.997c1.014.057 2.14.205 3.401.371l.261-1.983zm-.002 0h0l-.256 1.983h0l.256-1.984zm.194.025l-.191-.025-.261 1.983.191.025.261-1.983zm7.708.18c-2.312.509-5.088.164-7.708-.18l-.261 1.983c2.537.334 5.68.749 8.399.151l-.43-1.953zm3.042-1.51c-.847.788-1.886 1.255-3.042 1.51l.43 1.953c1.413-.311 2.805-.911 3.975-1.998l-1.362-1.465zm1.877-3.401c-.385 1.519-1.035 2.618-1.877 3.401l1.362 1.465c1.168-1.087 1.991-2.546 2.454-4.374l-1.939-.491zm.03-.931c.055.356.054.653-.017.881l1.911.59c.201-.651.156-1.297.082-1.776l-1.977.305zm-.338-1.304c.164.498.282.934.338 1.304l1.977-.305c-.081-.526-.236-1.081-.416-1.626l-1.899.627zm-1.428-3.635c.594 1.425 1.103 2.651 1.428 3.635l1.899-.627c-.354-1.072-.898-2.377-1.481-3.777l-1.846.769zm-.02-.049l.02.049 1.846-.769-.021-.049-1.846.769zm-3.791-10.777c1.044 4.178 2.587 7.885 3.791 10.777l1.846-.769c-1.208-2.9-2.694-6.478-3.697-10.493l-1.94.485zm0-13.889c-.555 3.198-1.111 9.445 0 13.889l1.94-.485c-1.007-4.03-.512-9.94.03-13.062l-1.971-.342zm-4.749-21.875c4.606 6.597 5.956 14.931 4.749 21.875l1.971.342c1.287-7.408-.14-16.287-5.08-23.363l-1.64 1.145zM51.798 1.106c11.818 0 19.679 4.861 24.285 11.459l1.64-1.145C72.724 4.26 64.236-.894 51.798-.894v2zm-.001 0l.001-2a2.01 2.01 0 0 0-.144.005l.143 1.995z",
      mask: "url(#A)"
    })]
  })]
}), ri = _e.div`
  position: absolute;
  top: ${(e) => e.placeholderRect.shiftY * 100}%;
  bottom: ${(e) => (1 - e.placeholderRect.shiftY - e.placeholderRect.height) * 100}%;
  left: ${(e) => e.placeholderRect.shiftX * 100}%;
  right: ${(e) => (1 - e.placeholderRect.shiftX - e.placeholderRect.width) * 100}%;
  color: ${(e) => e.isInCandidateSelection ? `${e.theme.colors.placeholderColorSuccess}` : `${e.theme.colors.placeholderColor}`};

  svg {
    width: 100%;
    height: 100%;
  }
`, ni = ({
  children: e,
  isInCandidateSelection: t,
  placeholderRectangle: r
}) => C(ri, {
  isInCandidateSelection: t,
  placeholderRect: r,
  children: e
}), oi = {
  [ge.CIRCLE_SOLID]: C(Z1, {}),
  [ge.ELLIPSE_SOLID]: C(q1, {}),
  [ge.MAN_SOLID]: C(X1, {}),
  [ge.WOMAN_SOLID]: C(ti, {}),
  [ge.SQUARE_ROUNDED_DASH]: C(K1, {}),
  [ge.SQUARE_ROUNDED_SOLID]: C(J1, {}),
  [ge.SQUARE_DASH]: C(Q1, {}),
  [ge.SQUARE_SOLID]: C(ei, {})
}, ii = ({
  icon: e,
  ...t
}) => C(ni, {
  ...t,
  children: oi[e]
}), ai = () => {
  const [e, t] = de(), [r, n] = de(!1), i = Oe((p) => {
    var m, v;
    t((m = p == null ? void 0 : p.detail) == null ? void 0 : m.cameraResolution);
    const g = (v = p == null ? void 0 : p.detail) == null ? void 0 : v.isMirroring;
    g !== void 0 && n(g);
  }, [t]);
  Ye(ze.CAMERA_PROPS_CHANGED, i);
  const [o, a] = de(), c = Oe((p) => {
    var g;
    a((g = p == null ? void 0 : p.detail) == null ? void 0 : g.detectedCorners);
  }, [a]);
  Ye(ze.DETECTED_FACE_CHANGED, c);
  const [f, h] = de(), s = Oe((p) => {
    var g;
    h((g = p == null ? void 0 : p.detail) == null ? void 0 : g.instructionCode);
  }, [h]);
  return Ye(ze.INSTRUCTION_CHANGED, s), {
    cameraResolution: e,
    detectedFaceCorners: o,
    instructionCode: f,
    isMirroring: r
  };
}, si = () => {
  const [e, t] = de(Ae.LOADING), [r, n] = de(), i = Oe((o) => {
    var c, f;
    t((c = o.detail) == null ? void 0 : c.appState);
    const a = (f = o == null ? void 0 : o.detail) == null ? void 0 : f.error;
    a && n(a);
  }, [t, n]);
  return Ye(ze.STATE_CHANGED, i), {
    appState: e,
    error: r
  };
}, ci = _e.canvas`
  transform: ${(e) => e.isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`, li = (e) => {
  const t = e.getContext("2d");
  t && t.clearRect(0, 0, t.canvas.width, t.canvas.height);
}, ui = ({
  cameraResolution: e,
  detectedFaceCorners: t,
  isImageMirror: r
}) => {
  const n = _t(null), i = h1();
  return $e(() => {
    if (!n.current)
      return;
    const o = (a) => {
      var g;
      const {
        bottomRight: c,
        faceCenter: f,
        topLeft: h
      } = a, s = (g = n == null ? void 0 : n.current) == null ? void 0 : g.getContext("2d");
      if (!s)
        return;
      const p = $1(h, c);
      s.beginPath(), s.arc(f.x, f.y, p, 0, 2 * Math.PI, !1), s.lineWidth = p1, s.strokeStyle = i.colors.placeholderColor, s.stroke();
    };
    n.current.width = e.width, n.current.height = e.height, li(n.current), o(t);
  }, [e, t, i.colors.placeholderColor]), C(ci, {
    ref: n,
    isImageMirror: r
  });
}, fi = ({
  appStateInstructions: e,
  instructions: t,
  placeholderIcon: r,
  showCameraButtons: n,
  showDetectionLayer: i,
  videoElementSize: o
}) => {
  const {
    appState: a,
    error: c
  } = si(), {
    cameraResolution: f,
    detectedFaceCorners: h,
    instructionCode: s,
    isMirroring: p
  } = ai(), g = s === ve.CANDIDATE_SELECTION, m = dn(o);
  if (a === Ae.ERROR)
    return C(_n, {
      fontSize: m,
      text: c == null ? void 0 : c.message
    });
  if (a === Ae.RUNNING && f) {
    const v = P1(f);
    return C(be, {
      children: [h && i && C(ui, {
        cameraResolution: f,
        detectedFaceCorners: h,
        isImageMirror: p
      }), C(ii, {
        icon: r,
        isInCandidateSelection: g,
        placeholderRectangle: v
      }), s && C(G1, {
        cssBottom: (v.height + v.shiftY) * 100,
        fontSize: m,
        isInCandidateSelection: g,
        isPortrait: f.width < f.height,
        children: t[s]
      }), n && C(U1, {
        customControlEvent: ze.CONTROL,
        videoElementSize: o
      })]
    });
  }
  return C(V1, {
    appState: a,
    appStateInstructions: e,
    fontSize: m
  });
};
const di = (e) => {
  var a, c;
  const t = {
    ...m1,
    ...e == null ? void 0 : e.instructions
  }, r = {
    [Ae.LOADING]: {
      ...kr.loading,
      ...(a = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : a.loading
    },
    [Ae.WAITING]: {
      ...kr.waiting,
      ...(c = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : c.waiting
    }
  }, n = (e == null ? void 0 : e.placeholder) ?? v1, i = (e == null ? void 0 : e.showDetectionLayer) ?? !1, o = (e == null ? void 0 : e.showCameraButtons) ?? !1;
  return {
    faceInstructions: t,
    faceAppStateInstructions: r,
    facePlaceholderIcon: n,
    showDetectionLayer: i,
    showCameraButtons: o
  };
}, hi = ({
  props: e
}) => {
  const {
    faceAppStateInstructions: t,
    faceInstructions: r,
    facePlaceholderIcon: n,
    showCameraButtons: i,
    showDetectionLayer: o
  } = di(e), a = A1(ze.VIDEO_ELEMENT_SIZE), c = T1(e);
  return C(E1, {
    theme: c,
    videoElementSize: a,
    children: C(fi, {
      appStateInstructions: t,
      instructions: r,
      placeholderIcon: n,
      showCameraButtons: i,
      showDetectionLayer: o,
      videoElementSize: a
    })
  });
};
zn(hi, "x-dot-face-auto-capture-ui", ["props"]);
