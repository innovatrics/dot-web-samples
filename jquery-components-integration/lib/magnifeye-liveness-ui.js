var Rn = Object.defineProperty;
var xn = (e, t, r) => t in e ? Rn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var tt = (e, t, r) => (xn(e, typeof t != "symbol" ? t + "" : t, r), r);
var Qe, R, Hr, Ve, Jt, Ur, ut = {}, zr = [], On = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ce(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}
function Yr(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function oe(e, t, r) {
  var n, i, o, a = {};
  for (o in t)
    o == "key" ? n = t[o] : o == "ref" ? i = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Qe.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return We(e, a, n, i, null);
}
function We(e, t, r, n, i) {
  var o = { type: e, props: t, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Hr };
  return i == null && R.vnode != null && R.vnode(o), o;
}
function kn() {
  return { current: null };
}
function we(e) {
  return e.children;
}
function fe(e, t) {
  this.props = e, this.context = t;
}
function Xe(e, t) {
  if (t == null)
    return e.__ ? Xe(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var r; t < e.__k.length; t++)
    if ((r = e.__k[t]) != null && r.__e != null)
      return r.__e;
  return typeof e.type == "function" ? Xe(e) : null;
}
function jr(e) {
  var t, r;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((r = e.__k[t]) != null && r.__e != null) {
        e.__e = e.__c.base = r.__e;
        break;
      }
    return jr(e);
  }
}
function Rt(e) {
  (!e.__d && (e.__d = !0) && Ve.push(e) && !ft.__r++ || Jt !== R.debounceRendering) && ((Jt = R.debounceRendering) || setTimeout)(ft);
}
function ft() {
  for (var e; ft.__r = Ve.length; )
    e = Ve.sort(function(t, r) {
      return t.__v.__b - r.__v.__b;
    }), Ve = [], e.some(function(t) {
      var r, n, i, o, a, c;
      t.__d && (a = (o = (r = t).__v).__e, (c = r.__P) && (n = [], (i = Ce({}, o)).__v = o.__v + 1, jt(c, o, i, r.__n, c.ownerSVGElement !== void 0, o.__h != null ? [a] : null, n, a ?? Xe(o), o.__h), Gr(n, o), o.__e != a && jr(o)));
    });
}
function Br(e, t, r, n, i, o, a, c, f, d) {
  var s, p, y, m, v, T, u, x = n && n.__k || zr, A = x.length;
  for (r.__k = [], s = 0; s < t.length; s++)
    if ((m = r.__k[s] = (m = t[s]) == null || typeof m == "boolean" ? null : typeof m == "string" || typeof m == "number" || typeof m == "bigint" ? We(null, m, null, null, m) : Array.isArray(m) ? We(we, { children: m }, null, null, null) : m.__b > 0 ? We(m.type, m.props, m.key, m.ref ? m.ref : null, m.__v) : m) != null) {
      if (m.__ = r, m.__b = r.__b + 1, (y = x[s]) === null || y && m.key == y.key && m.type === y.type)
        x[s] = void 0;
      else
        for (p = 0; p < A; p++) {
          if ((y = x[p]) && m.key == y.key && m.type === y.type) {
            x[p] = void 0;
            break;
          }
          y = null;
        }
      jt(e, m, y = y || ut, i, o, a, c, f, d), v = m.__e, (p = m.ref) && y.ref != p && (u || (u = []), y.ref && u.push(y.ref, null, m), u.push(p, m.__c || v, m)), v != null ? (T == null && (T = v), typeof m.type == "function" && m.__k === y.__k ? m.__d = f = Vr(m, f, e) : f = Wr(e, m, y, x, v, f), typeof r.type == "function" && (r.__d = f)) : f && y.__e == f && f.parentNode != e && (f = Xe(y));
    }
  for (r.__e = T, s = A; s--; )
    x[s] != null && Xr(x[s], x[s]);
  if (u)
    for (s = 0; s < u.length; s++)
      Zr(u[s], u[++s], u[++s]);
}
function Vr(e, t, r) {
  for (var n, i = e.__k, o = 0; i && o < i.length; o++)
    (n = i[o]) && (n.__ = e, t = typeof n.type == "function" ? Vr(n, t, r) : Wr(r, n, n, i, n.__e, t));
  return t;
}
function Ee(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Array.isArray(e) ? e.some(function(r) {
    Ee(r, t);
  }) : t.push(e)), t;
}
function Wr(e, t, r, n, i, o) {
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
function $n(e, t, r, n, i) {
  var o;
  for (o in r)
    o === "children" || o === "key" || o in t || dt(e, o, null, r[o], n);
  for (o in t)
    i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || r[o] === t[o] || dt(e, o, t[o], r[o], n);
}
function er(e, t, r) {
  t[0] === "-" ? e.setProperty(t, r) : e[t] = r == null ? "" : typeof r != "number" || On.test(t) ? r : r + "px";
}
function dt(e, t, r, n, i) {
  var o;
  e:
    if (t === "style")
      if (typeof r == "string")
        e.style.cssText = r;
      else {
        if (typeof n == "string" && (e.style.cssText = n = ""), n)
          for (t in n)
            r && t in r || er(e.style, t, "");
        if (r)
          for (t in r)
            n && r[t] === n[t] || er(e.style, t, r[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = r, r ? n || e.addEventListener(t, o ? rr : tr, o) : e.removeEventListener(t, o ? rr : tr, o);
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
function tr(e) {
  this.l[e.type + !1](R.event ? R.event(e) : e);
}
function rr(e) {
  this.l[e.type + !0](R.event ? R.event(e) : e);
}
function jt(e, t, r, n, i, o, a, c, f) {
  var d, s, p, y, m, v, T, u, x, A, k, O, _, B, Q, Y = t.type;
  if (t.constructor !== void 0)
    return null;
  r.__h != null && (f = r.__h, c = t.__e = r.__e, t.__h = null, o = [c]), (d = R.__b) && d(t);
  try {
    e:
      if (typeof Y == "function") {
        if (u = t.props, x = (d = Y.contextType) && n[d.__c], A = d ? x ? x.props.value : d.__ : n, r.__c ? T = (s = t.__c = r.__c).__ = s.__E : ("prototype" in Y && Y.prototype.render ? t.__c = s = new Y(u, A) : (t.__c = s = new fe(u, A), s.constructor = Y, s.render = Pn), x && x.sub(s), s.props = u, s.state || (s.state = {}), s.context = A, s.__n = n, p = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), Y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ce({}, s.__s)), Ce(s.__s, Y.getDerivedStateFromProps(u, s.__s))), y = s.props, m = s.state, p)
          Y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (Y.getDerivedStateFromProps == null && u !== y && s.componentWillReceiveProps != null && s.componentWillReceiveProps(u, A), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(u, s.__s, A) === !1 || t.__v === r.__v) {
            for (s.props = u, s.state = s.__s, t.__v !== r.__v && (s.__d = !1), s.__v = t, t.__e = r.__e, t.__k = r.__k, t.__k.forEach(function(X) {
              X && (X.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(u, s.__s, A), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(y, m, v);
          });
        }
        if (s.context = A, s.props = u, s.__v = t, s.__P = e, O = R.__r, _ = 0, "prototype" in Y && Y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, O && O(t), d = s.render(s.props, s.state, s.context), B = 0; B < s._sb.length; B++)
            s.__h.push(s._sb[B]);
          s._sb = [];
        } else
          do
            s.__d = !1, O && O(t), d = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++_ < 25);
        s.state = s.__s, s.getChildContext != null && (n = Ce(Ce({}, n), s.getChildContext())), p || s.getSnapshotBeforeUpdate == null || (v = s.getSnapshotBeforeUpdate(y, m)), Q = d != null && d.type === we && d.key == null ? d.props.children : d, Br(e, Array.isArray(Q) ? Q : [Q], t, r, n, i, o, a, c, f), s.base = t.__e, t.__h = null, s.__h.length && a.push(s), T && (s.__E = s.__ = null), s.__e = !1;
      } else
        o == null && t.__v === r.__v ? (t.__k = r.__k, t.__e = r.__e) : t.__e = Nn(r.__e, t, r, n, i, o, a, f);
    (d = R.diffed) && d(t);
  } catch (X) {
    t.__v = null, (f || o != null) && (t.__e = c, t.__h = !!f, o[o.indexOf(c)] = null), R.__e(X, t, r);
  }
}
function Gr(e, t) {
  R.__c && R.__c(t, e), e.some(function(r) {
    try {
      e = r.__h, r.__h = [], e.some(function(n) {
        n.call(r);
      });
    } catch (n) {
      R.__e(n, r.__v);
    }
  });
}
function Nn(e, t, r, n, i, o, a, c) {
  var f, d, s, p = r.props, y = t.props, m = t.type, v = 0;
  if (m === "svg" && (i = !0), o != null) {
    for (; v < o.length; v++)
      if ((f = o[v]) && "setAttribute" in f == !!m && (m ? f.localName === m : f.nodeType === 3)) {
        e = f, o[v] = null;
        break;
      }
  }
  if (e == null) {
    if (m === null)
      return document.createTextNode(y);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", m) : document.createElement(m, y.is && y), o = null, c = !1;
  }
  if (m === null)
    p === y || c && e.data === y || (e.data = y);
  else {
    if (o = o && Qe.call(e.childNodes), d = (p = r.props || ut).dangerouslySetInnerHTML, s = y.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (p = {}, v = 0; v < e.attributes.length; v++)
          p[e.attributes[v].name] = e.attributes[v].value;
      (s || d) && (s && (d && s.__html == d.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if ($n(e, y, p, i, c), s)
      t.__k = [];
    else if (v = t.props.children, Br(e, Array.isArray(v) ? v : [v], t, r, n, i && m !== "foreignObject", o, a, o ? o[0] : r.__k && Xe(r, 0), c), o != null)
      for (v = o.length; v--; )
        o[v] != null && Yr(o[v]);
    c || ("value" in y && (v = y.value) !== void 0 && (v !== e.value || m === "progress" && !v || m === "option" && v !== p.value) && dt(e, "value", v, p.value, !1), "checked" in y && (v = y.checked) !== void 0 && v !== e.checked && dt(e, "checked", v, p.checked, !1));
  }
  return e;
}
function Zr(e, t, r) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (n) {
    R.__e(n, r);
  }
}
function Xr(e, t, r) {
  var n, i;
  if (R.unmount && R.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || Zr(n, null, t)), (n = e.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (o) {
        R.__e(o, t);
      }
    n.base = n.__P = null, e.__c = void 0;
  }
  if (n = e.__k)
    for (i = 0; i < n.length; i++)
      n[i] && Xr(n[i], t, r || typeof e.type != "function");
  r || e.__e == null || Yr(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Pn(e, t, r) {
  return this.constructor(e, r);
}
function Re(e, t, r) {
  var n, i, o;
  R.__ && R.__(e, t), i = (n = typeof r == "function") ? null : r && r.__k || t.__k, o = [], jt(t, e = (!n && r || t).__k = oe(we, null, [e]), i || ut, ut, t.ownerSVGElement !== void 0, !n && r ? [r] : i ? null : t.firstChild ? Qe.call(t.childNodes) : null, o, !n && r ? r : i ? i.__e : t.firstChild, n), Gr(o, e);
}
function Bt(e, t) {
  Re(e, t, Bt);
}
function Vt(e, t, r) {
  var n, i, o, a = Ce({}, e.props);
  for (o in t)
    o == "key" ? n = t[o] : o == "ref" ? i = t[o] : a[o] = t[o];
  return arguments.length > 2 && (a.children = arguments.length > 3 ? Qe.call(arguments, 2) : r), We(e.type, a, n || e.key, i || e.ref, null);
}
function In(e, t) {
  var r = { __c: t = "__cC" + Ur++, __: e, Consumer: function(n, i) {
    return n.children(i);
  }, Provider: function(n) {
    var i, o;
    return this.getChildContext || (i = [], (o = {})[t] = this, this.getChildContext = function() {
      return o;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && i.some(Rt);
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
Qe = zr.slice, R = { __e: function(e, t, r, n) {
  for (var i, o, a; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, n || {}), a = i.__d), a)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Hr = 0, fe.prototype.setState = function(e, t) {
  var r;
  r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ce({}, this.state), typeof e == "function" && (e = e(Ce({}, r), this.props)), e && Ce(r, e), e != null && this.__v && (t && this._sb.push(t), Rt(this));
}, fe.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Rt(this));
}, fe.prototype.render = we, Ve = [], ft.__r = 0, Ur = 0;
function Wt() {
  return (Wt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
function Mn(e) {
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
  return Vt(t, r);
}
function Dn() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = oe(Mn, Wt({}, this._props, { context: e.detail.context }), function t(r, n) {
    if (r.nodeType === 3)
      return r.data;
    if (r.nodeType !== 1)
      return null;
    var i = [], o = {}, a = 0, c = r.attributes, f = r.childNodes;
    for (a = c.length; a--; )
      c[a].name !== "slot" && (o[c[a].name] = c[a].value, o[qr(c[a].name)] = c[a].value);
    for (a = f.length; a--; ) {
      var d = t(f[a], null), s = f[a].slot;
      s ? o[s] = oe(nr, { name: s }, d) : i[a] = d;
    }
    var p = n ? oe(nr, null, i) : i;
    return oe(n || r.nodeName.toLowerCase(), o, p);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Bt : Re)(this._vdom, this._root);
}
function qr(e) {
  return e.replace(/-(\w)/g, function(t, r) {
    return r ? r.toUpperCase() : "";
  });
}
function Ln(e, t, r) {
  if (this._vdom) {
    var n = {};
    n[e] = r = r ?? void 0, n[qr(e)] = r, this._vdom = Vt(this._vdom, n), Re(this._vdom, this._root);
  }
}
function Fn() {
  Re(this._vdom = null, this._root);
}
function nr(e, t) {
  var r = this;
  return oe("slot", Wt({}, e, { ref: function(n) {
    n ? (r.ref = n, r._listener || (r._listener = function(i) {
      i.stopPropagation(), i.detail.context = t;
    }, n.addEventListener("_preact", r._listener))) : r.ref.removeEventListener("_preact", r._listener);
  } }));
}
function Hn(e, t, r, n) {
  function i() {
    var o = Reflect.construct(HTMLElement, [], i);
    return o._vdomComponent = e, o._root = n && n.shadow ? o.attachShadow({ mode: "open" }) : o, o;
  }
  return (i.prototype = Object.create(HTMLElement.prototype)).constructor = i, i.prototype.connectedCallback = Dn, i.prototype.attributeChangedCallback = Ln, i.prototype.disconnectedCallback = Fn, r = r || e.observedAttributes || Object.keys(e.propTypes || {}), i.observedAttributes = r, r.forEach(function(o) {
    Object.defineProperty(i.prototype, o, { get: function() {
      return this._vdom.props[o];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(o, null, a) : (this._props || (this._props = {}), this._props[o] = a, this.connectedCallback());
      var c = typeof a;
      a != null && c !== "string" && c !== "boolean" && c !== "number" || this.setAttribute(o, a);
    } });
  }), customElements.define(t || e.tagName || e.displayName || e.name, i);
}
var xt = /* @__PURE__ */ ((e) => (e.CONTINUE_DETECTION = "continue-detection", e.SWITCH_CAMERA = "switch-camera", e.TOGGLE_MIRROR = "toggle-mirror", e))(xt || {}), Ne = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", e.CONTROL = "face-auto-capture:control", e.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", e.FACE_DETECTION = "face-auto-capture:face-detection", e.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", e.STATE_CHANGED = "face-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", e))(Ne || {}), Kr = /* @__PURE__ */ ((e) => (e.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", e))(Kr || {});
const Un = {
  CANDIDATE_SELECTION: "candidate_selection",
  FACE_TOO_CLOSE: "face_too_close",
  FACE_TOO_FAR: "face_too_far",
  FACE_CENTERING: "face_centering",
  FACE_NOT_PRESENT: "face_not_present",
  SHARPNESS_TOO_LOW: "sharpness_too_low",
  BRIGHTNESS_TOO_LOW: "brightness_too_low",
  BRIGHTNESS_TOO_HIGH: "brightness_too_high"
}, he = {
  ...Un,
  FIT_YOUR_EYE: "fit_your_eye"
};
var _t = /* @__PURE__ */ ((e) => (e.CLOSEUP = "CLOSEUP", e.DISTANT = "DISTANT", e))(_t || {}), Se = /* @__PURE__ */ ((e) => (e.DONE = "DONE", e.ERROR = "ERROR", e.LOADING = "LOADING", e.RUNNING = "RUNNING", e))(Se || {}), qe = {}, zn = {
  get exports() {
    return qe;
  },
  set exports(e) {
    qe = e;
  }
}, F = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var or;
function Yn() {
  if (or)
    return F;
  or = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), s = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function T(u) {
    if (typeof u == "object" && u !== null) {
      var x = u.$$typeof;
      switch (x) {
        case e:
          switch (u = u.type, u) {
            case r:
            case i:
            case n:
            case d:
            case s:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case c:
                case a:
                case f:
                case y:
                case p:
                case o:
                  return u;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return F.ContextConsumer = a, F.ContextProvider = o, F.Element = e, F.ForwardRef = f, F.Fragment = r, F.Lazy = y, F.Memo = p, F.Portal = t, F.Profiler = i, F.StrictMode = n, F.Suspense = d, F.SuspenseList = s, F.isAsyncMode = function() {
    return !1;
  }, F.isConcurrentMode = function() {
    return !1;
  }, F.isContextConsumer = function(u) {
    return T(u) === a;
  }, F.isContextProvider = function(u) {
    return T(u) === o;
  }, F.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === e;
  }, F.isForwardRef = function(u) {
    return T(u) === f;
  }, F.isFragment = function(u) {
    return T(u) === r;
  }, F.isLazy = function(u) {
    return T(u) === y;
  }, F.isMemo = function(u) {
    return T(u) === p;
  }, F.isPortal = function(u) {
    return T(u) === t;
  }, F.isProfiler = function(u) {
    return T(u) === i;
  }, F.isStrictMode = function(u) {
    return T(u) === n;
  }, F.isSuspense = function(u) {
    return T(u) === d;
  }, F.isSuspenseList = function(u) {
    return T(u) === s;
  }, F.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === r || u === i || u === n || u === d || u === s || u === m || typeof u == "object" && u !== null && (u.$$typeof === y || u.$$typeof === p || u.$$typeof === o || u.$$typeof === a || u.$$typeof === f || u.$$typeof === v || u.getModuleId !== void 0);
  }, F.typeOf = T, F;
}
var H = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ir;
function jn() {
  return ir || (ir = 1, {}.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), s = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), v = !1, T = !1, u = !1, x = !1, A = !1, k;
    k = Symbol.for("react.module.reference");
    function O(C) {
      return !!(typeof C == "string" || typeof C == "function" || C === r || C === i || A || C === n || C === d || C === s || x || C === m || v || T || u || typeof C == "object" && C !== null && (C.$$typeof === y || C.$$typeof === p || C.$$typeof === o || C.$$typeof === a || C.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      C.$$typeof === k || C.getModuleId !== void 0));
    }
    function _(C) {
      if (typeof C == "object" && C !== null) {
        var P = C.$$typeof;
        switch (P) {
          case e:
            var G = C.type;
            switch (G) {
              case r:
              case i:
              case n:
              case d:
              case s:
                return G;
              default:
                var L = G && G.$$typeof;
                switch (L) {
                  case c:
                  case a:
                  case f:
                  case y:
                  case p:
                  case o:
                    return L;
                  default:
                    return P;
                }
            }
          case t:
            return P;
        }
      }
    }
    var B = a, Q = o, Y = e, X = f, se = r, de = y, J = p, re = t, ie = i, q = n, ve = d, ne = s, K = !1, _e = !1;
    function le(C) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ye(C) {
      return _e || (_e = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function w(C) {
      return _(C) === a;
    }
    function S(C) {
      return _(C) === o;
    }
    function b(C) {
      return typeof C == "object" && C !== null && C.$$typeof === e;
    }
    function $(C) {
      return _(C) === f;
    }
    function l(C) {
      return _(C) === r;
    }
    function M(C) {
      return _(C) === y;
    }
    function g(C) {
      return _(C) === p;
    }
    function j(C) {
      return _(C) === t;
    }
    function D(C) {
      return _(C) === i;
    }
    function I(C) {
      return _(C) === n;
    }
    function h(C) {
      return _(C) === d;
    }
    function V(C) {
      return _(C) === s;
    }
    H.ContextConsumer = B, H.ContextProvider = Q, H.Element = Y, H.ForwardRef = X, H.Fragment = se, H.Lazy = de, H.Memo = J, H.Portal = re, H.Profiler = ie, H.StrictMode = q, H.Suspense = ve, H.SuspenseList = ne, H.isAsyncMode = le, H.isConcurrentMode = ye, H.isContextConsumer = w, H.isContextProvider = S, H.isElement = b, H.isForwardRef = $, H.isFragment = l, H.isLazy = M, H.isMemo = g, H.isPortal = j, H.isProfiler = D, H.isStrictMode = I, H.isSuspense = h, H.isSuspenseList = V, H.isValidElementType = O, H.typeOf = _;
  }()), H;
}
(function(e) {
  ({}).NODE_ENV === "production" ? e.exports = Yn() : e.exports = jn();
})(zn);
var $e, W, Et, ar, Ie = 0, Qr = [], it = [], sr = R.__b, cr = R.__r, lr = R.diffed, ur = R.__c, fr = R.unmount;
function Fe(e, t) {
  R.__h && R.__h(W, e, Ie || t), Ie = 0;
  var r = W.__H || (W.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({ __V: it }), r.__[e];
}
function ce(e) {
  return Ie = 1, Jr(en, e);
}
function Jr(e, t, r) {
  var n = Fe($e++, 2);
  if (n.t = e, !n.__c && (n.__ = [r ? r(t) : en(void 0, t), function(o) {
    var a = n.__N ? n.__N[0] : n.__[0], c = n.t(a, o);
    a !== c && (n.__N = [c, n.__[1]], n.__c.setState({}));
  }], n.__c = W, !W.u)) {
    W.u = !0;
    var i = W.shouldComponentUpdate;
    W.shouldComponentUpdate = function(o, a, c) {
      if (!n.__c.__H)
        return !0;
      var f = n.__c.__H.__.filter(function(s) {
        return s.__c;
      });
      if (f.every(function(s) {
        return !s.__N;
      }))
        return !i || i.call(this, o, a, c);
      var d = !1;
      return f.forEach(function(s) {
        if (s.__N) {
          var p = s.__[0];
          s.__ = s.__N, s.__N = void 0, p !== s.__[0] && (d = !0);
        }
      }), !(!d && n.__c.props === o) && (!i || i.call(this, o, a, c));
    };
  }
  return n.__N || n.__;
}
function ke(e, t) {
  var r = Fe($e++, 3);
  !R.__s && Gt(r.__H, t) && (r.__ = e, r.i = t, W.__H.__h.push(r));
}
function mt(e, t) {
  var r = Fe($e++, 4);
  !R.__s && Gt(r.__H, t) && (r.__ = e, r.i = t, W.__h.push(r));
}
function vt(e) {
  return Ie = 5, yt(function() {
    return { current: e };
  }, []);
}
function Bn(e, t, r) {
  Ie = 6, mt(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, r == null ? r : r.concat(e));
}
function yt(e, t) {
  var r = Fe($e++, 7);
  return Gt(r.__H, t) ? (r.__V = e(), r.i = t, r.__h = e, r.__V) : r.__;
}
function Pe(e, t) {
  return Ie = 8, yt(function() {
    return e;
  }, t);
}
function He(e) {
  var t = W.context[e.__c], r = Fe($e++, 9);
  return r.c = e, t ? (r.__ == null && (r.__ = !0, t.sub(W)), t.props.value) : e.__;
}
function Ot(e, t) {
  R.useDebugValue && R.useDebugValue(t ? t(e) : e);
}
function Vn() {
  var e = Fe($e++, 11);
  if (!e.__) {
    for (var t = W.__v; t !== null && !t.__m && t.__ !== null; )
      t = t.__;
    var r = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + r[0] + "-" + r[1]++;
  }
  return e.__;
}
function Wn() {
  for (var e; e = Qr.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(at), e.__H.__h.forEach(kt), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], R.__e(t, e.__v);
      }
}
R.__b = function(e) {
  W = null, sr && sr(e);
}, R.__r = function(e) {
  cr && cr(e), $e = 0;
  var t = (W = e.__c).__H;
  t && (Et === W ? (t.__h = [], W.__h = [], t.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.__V = it, r.__N = r.i = void 0;
  })) : (t.__h.forEach(at), t.__h.forEach(kt), t.__h = [])), Et = W;
}, R.diffed = function(e) {
  lr && lr(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Qr.push(t) !== 1 && ar === R.requestAnimationFrame || ((ar = R.requestAnimationFrame) || Gn)(Wn)), t.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.__V !== it && (r.__ = r.__V), r.i = void 0, r.__V = it;
  })), Et = W = null;
}, R.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.forEach(at), r.__h = r.__h.filter(function(n) {
        return !n.__ || kt(n);
      });
    } catch (n) {
      t.some(function(i) {
        i.__h && (i.__h = []);
      }), t = [], R.__e(n, r.__v);
    }
  }), ur && ur(e, t);
}, R.unmount = function(e) {
  fr && fr(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      at(n);
    } catch (i) {
      t = i;
    }
  }), r.__H = void 0, t && R.__e(t, r.__v));
};
var dr = typeof requestAnimationFrame == "function";
function Gn(e) {
  var t, r = function() {
    clearTimeout(n), dr && cancelAnimationFrame(t), setTimeout(e);
  }, n = setTimeout(r, 100);
  dr && (t = requestAnimationFrame(r));
}
function at(e) {
  var t = W, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), W = t;
}
function kt(e) {
  var t = W;
  e.__c = e.__(), W = t;
}
function Gt(e, t) {
  return !e || e.length !== t.length || t.some(function(r, n) {
    return r !== e[n];
  });
}
function en(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function tn(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}
function $t(e, t) {
  for (var r in e)
    if (r !== "__source" && !(r in t))
      return !0;
  for (var n in t)
    if (n !== "__source" && e[n] !== t[n])
      return !0;
  return !1;
}
function St(e, t) {
  return e === t && (e !== 0 || 1 / e == 1 / t) || e != e && t != t;
}
function Nt(e) {
  this.props = e;
}
function Zn(e, t) {
  function r(i) {
    var o = this.props.ref, a = o == i.ref;
    return !a && o && (o.call ? o(null) : o.current = null), t ? !t(this.props, i) || !a : $t(this.props, i);
  }
  function n(i) {
    return this.shouldComponentUpdate = r, oe(e, i);
  }
  return n.displayName = "Memo(" + (e.displayName || e.name) + ")", n.prototype.isReactComponent = !0, n.__f = !0, n;
}
(Nt.prototype = new fe()).isPureReactComponent = !0, Nt.prototype.shouldComponentUpdate = function(e, t) {
  return $t(this.props, e) || $t(this.state, t);
};
var _r = R.__b;
R.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), _r && _r(e);
};
var Xn = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function qn(e) {
  function t(r) {
    var n = tn({}, r);
    return delete n.ref, e(n, r.ref || null);
  }
  return t.$$typeof = Xn, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var hr = function(e, t) {
  return e == null ? null : Ee(Ee(e).map(t));
}, Kn = { map: hr, forEach: hr, count: function(e) {
  return e ? Ee(e).length : 0;
}, only: function(e) {
  var t = Ee(e);
  if (t.length !== 1)
    throw "Children.only";
  return t[0];
}, toArray: Ee }, Qn = R.__e;
R.__e = function(e, t, r, n) {
  if (e.then) {
    for (var i, o = t; o = o.__; )
      if ((i = o.__c) && i.__c)
        return t.__e == null && (t.__e = r.__e, t.__k = r.__k), i.__c(e, t);
  }
  Qn(e, t, r, n);
};
var pr = R.unmount;
function rn(e, t, r) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), e.__c.__H = null), (e = tn({}, e)).__c != null && (e.__c.__P === r && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(n) {
    return rn(n, t, r);
  })), e;
}
function nn(e, t, r) {
  return e && (e.__v = null, e.__k = e.__k && e.__k.map(function(n) {
    return nn(n, t, r);
  }), e.__c && e.__c.__P === t && (e.__e && r.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = r)), e;
}
function st() {
  this.__u = 0, this.t = null, this.__b = null;
}
function on(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Jn(e) {
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
function je() {
  this.u = null, this.o = null;
}
R.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), pr && pr(e);
}, (st.prototype = new fe()).__c = function(e, t) {
  var r = t.__c, n = this;
  n.t == null && (n.t = []), n.t.push(r);
  var i = on(n.__v), o = !1, a = function() {
    o || (o = !0, r.__R = null, i ? i(c) : c());
  };
  r.__R = a;
  var c = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var d = n.state.__a;
        n.__v.__k[0] = nn(d, d.__c.__P, d.__c.__O);
      }
      var s;
      for (n.setState({ __a: n.__b = null }); s = n.t.pop(); )
        s.forceUpdate();
    }
  }, f = t.__h === !0;
  n.__u++ || f || n.setState({ __a: n.__b = n.__v.__k[0] }), e.then(a, a);
}, st.prototype.componentWillUnmount = function() {
  this.t = [];
}, st.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = rn(this.__b, r, n.__O = n.__P);
    }
    this.__b = null;
  }
  var i = t.__a && oe(we, null, e.fallback);
  return i && (i.__h = null), [oe(we, null, t.__a ? null : e.children), i];
};
var mr = function(e, t, r) {
  if (++r[1] === r[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (r = e.u; r; ) {
      for (; r.length > 3; )
        r.pop()();
      if (r[1] < r[0])
        break;
      e.u = r = r[2];
    }
};
function eo(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function to(e) {
  var t = this, r = e.i;
  t.componentWillUnmount = function() {
    Re(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== r && t.componentWillUnmount(), e.__v ? (t.l || (t.i = r, t.l = { nodeType: 1, parentNode: r, childNodes: [], appendChild: function(n) {
    this.childNodes.push(n), t.i.appendChild(n);
  }, insertBefore: function(n, i) {
    this.childNodes.push(n), t.i.appendChild(n);
  }, removeChild: function(n) {
    this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), t.i.removeChild(n);
  } }), Re(oe(eo, { context: t.context }, e.__v), t.l)) : t.l && t.componentWillUnmount();
}
function ro(e, t) {
  var r = oe(to, { __v: e, i: t });
  return r.containerInfo = t, r;
}
(je.prototype = new fe()).__a = function(e) {
  var t = this, r = on(t.__v), n = t.o.get(e);
  return n[0]++, function(i) {
    var o = function() {
      t.props.revealOrder ? (n.push(i), mr(t, e, n)) : i();
    };
    r ? r(o) : o();
  };
}, je.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = Ee(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var r = t.length; r--; )
    this.o.set(t[r], this.u = [1, 0, this.u]);
  return e.children;
}, je.prototype.componentDidUpdate = je.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, r) {
    mr(e, r, t);
  });
};
var an = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, no = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, oo = typeof document < "u", io = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(e);
};
function ao(e, t, r) {
  return t.__k == null && (t.textContent = ""), Re(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
function so(e, t, r) {
  return Bt(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
fe.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(fe.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var vr = R.event;
function co() {
}
function lo() {
  return this.cancelBubble;
}
function uo() {
  return this.defaultPrevented;
}
R.event = function(e) {
  return vr && (e = vr(e)), e.persist = co, e.isPropagationStopped = lo, e.isDefaultPrevented = uo, e.nativeEvent = e;
};
var sn, yr = { configurable: !0, get: function() {
  return this.class;
} }, gr = R.vnode;
R.vnode = function(e) {
  var t = e.type, r = e.props, n = r;
  if (typeof t == "string") {
    var i = t.indexOf("-") === -1;
    for (var o in n = {}, r) {
      var a = r[o];
      oo && o === "children" && t === "noscript" || o === "value" && "defaultValue" in r && a == null || (o === "defaultValue" && "value" in r && r.value == null ? o = "value" : o === "download" && a === !0 ? a = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !io(r.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o) ? o = o.toLowerCase() : i && no.test(o) ? o = o.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : a === null && (a = void 0), /^oninput$/i.test(o) && (o = o.toLowerCase(), n[o] && (o = "oninputCapture")), n[o] = a);
    }
    t == "select" && n.multiple && Array.isArray(n.value) && (n.value = Ee(r.children).forEach(function(c) {
      c.props.selected = n.value.indexOf(c.props.value) != -1;
    })), t == "select" && n.defaultValue != null && (n.value = Ee(r.children).forEach(function(c) {
      c.props.selected = n.multiple ? n.defaultValue.indexOf(c.props.value) != -1 : n.defaultValue == c.props.value;
    })), e.props = n, r.class != r.className && (yr.enumerable = "className" in r, r.className != null && (n.class = r.className), Object.defineProperty(n, "className", yr));
  }
  e.$$typeof = an, gr && gr(e);
};
var Cr = R.__r;
R.__r = function(e) {
  Cr && Cr(e), sn = e.__c;
};
var fo = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return sn.__n[e.__c].props.value;
} } } };
function _o(e) {
  return oe.bind(null, e);
}
function cn(e) {
  return !!e && e.$$typeof === an;
}
function ho(e) {
  return cn(e) ? Vt.apply(null, arguments) : e;
}
function po(e) {
  return !!e.__k && (Re(null, e), !0);
}
function mo(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var vo = function(e, t) {
  return e(t);
}, yo = function(e, t) {
  return e(t);
}, go = we;
function ln(e) {
  e();
}
function Co(e) {
  return e;
}
function Eo() {
  return [!1, ln];
}
var So = mt;
function bo(e, t) {
  var r = t(), n = ce({ h: { __: r, v: t } }), i = n[0].h, o = n[1];
  return mt(function() {
    i.__ = r, i.v = t, St(i.__, t()) || o({ h: i });
  }, [e, r, t]), ke(function() {
    return St(i.__, i.v()) || o({ h: i }), e(function() {
      St(i.__, i.v()) || o({ h: i });
    });
  }, [e]), r;
}
var Je = { useState: ce, useId: Vn, useReducer: Jr, useEffect: ke, useLayoutEffect: mt, useInsertionEffect: So, useTransition: Eo, useDeferredValue: Co, useSyncExternalStore: bo, startTransition: ln, useRef: vt, useImperativeHandle: Bn, useMemo: yt, useCallback: Pe, useContext: He, useDebugValue: Ot, version: "17.0.2", Children: Kn, render: ao, hydrate: so, unmountComponentAtNode: po, createPortal: ro, createElement: oe, createContext: In, createFactory: _o, cloneElement: ho, createRef: kn, Fragment: we, isValidElement: cn, findDOMNode: mo, Component: fe, PureComponent: Nt, memo: Zn, forwardRef: qn, flushSync: yo, unstable_batchedUpdates: vo, StrictMode: go, Suspense: st, SuspenseList: je, lazy: Jn, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: fo };
function wo(e) {
  function t(w, S, b, $, l) {
    for (var M = 0, g = 0, j = 0, D = 0, I, h, V = 0, C = 0, P, G = P = I = 0, L = 0, ee = 0, ze = 0, te = 0, et = b.length, Ye = et - 1, ue, N = "", Z = "", gt = "", Ct = "", Ae; L < et; ) {
      if (h = b.charCodeAt(L), L === Ye && g + D + j + M !== 0 && (g !== 0 && (h = g === 47 ? 10 : 47), D = j = M = 0, et++, Ye++), g + D + j + M === 0) {
        if (L === Ye && (0 < ee && (N = N.replace(y, "")), 0 < N.trim().length)) {
          switch (h) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              N += b.charAt(L);
          }
          h = 59;
        }
        switch (h) {
          case 123:
            for (N = N.trim(), I = N.charCodeAt(0), P = 1, te = ++L; L < et; ) {
              switch (h = b.charCodeAt(L)) {
                case 123:
                  P++;
                  break;
                case 125:
                  P--;
                  break;
                case 47:
                  switch (h = b.charCodeAt(L + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (G = L + 1; G < Ye; ++G)
                          switch (b.charCodeAt(G)) {
                            case 47:
                              if (h === 42 && b.charCodeAt(G - 1) === 42 && L + 2 !== G) {
                                L = G + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (h === 47) {
                                L = G + 1;
                                break e;
                              }
                          }
                        L = G;
                      }
                  }
                  break;
                case 91:
                  h++;
                case 40:
                  h++;
                case 34:
                case 39:
                  for (; L++ < Ye && b.charCodeAt(L) !== h; )
                    ;
              }
              if (P === 0)
                break;
              L++;
            }
            switch (P = b.substring(te, L), I === 0 && (I = (N = N.replace(p, "").trim()).charCodeAt(0)), I) {
              case 64:
                switch (0 < ee && (N = N.replace(y, "")), h = N.charCodeAt(1), h) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ee = S;
                    break;
                  default:
                    ee = ve;
                }
                if (P = t(S, ee, P, h, l + 1), te = P.length, 0 < K && (ee = r(ve, N, ze), Ae = c(3, P, ee, S, re, J, te, h, l, $), N = ee.join(""), Ae !== void 0 && (te = (P = Ae.trim()).length) === 0 && (h = 0, P = "")), 0 < te)
                  switch (h) {
                    case 115:
                      N = N.replace(B, a);
                    case 100:
                    case 109:
                    case 45:
                      P = N + "{" + P + "}";
                      break;
                    case 107:
                      N = N.replace(A, "$1 $2"), P = N + "{" + P + "}", P = q === 1 || q === 2 && o("@" + P, 3) ? "@-webkit-" + P + "@" + P : "@" + P;
                      break;
                    default:
                      P = N + P, $ === 112 && (P = (Z += P, ""));
                  }
                else
                  P = "";
                break;
              default:
                P = t(S, r(S, N, ze), P, $, l + 1);
            }
            gt += P, P = ze = ee = G = I = 0, N = "", h = b.charCodeAt(++L);
            break;
          case 125:
          case 59:
            if (N = (0 < ee ? N.replace(y, "") : N).trim(), 1 < (te = N.length))
              switch (G === 0 && (I = N.charCodeAt(0), I === 45 || 96 < I && 123 > I) && (te = (N = N.replace(" ", ":")).length), 0 < K && (Ae = c(1, N, S, w, re, J, Z.length, $, l, $)) !== void 0 && (te = (N = Ae.trim()).length) === 0 && (N = "\0\0"), I = N.charCodeAt(0), h = N.charCodeAt(1), I) {
                case 0:
                  break;
                case 64:
                  if (h === 105 || h === 99) {
                    Ct += N + b.charAt(L);
                    break;
                  }
                default:
                  N.charCodeAt(te - 1) !== 58 && (Z += i(N, I, h, N.charCodeAt(2)));
              }
            ze = ee = G = I = 0, N = "", h = b.charCodeAt(++L);
        }
      }
      switch (h) {
        case 13:
        case 10:
          g === 47 ? g = 0 : 1 + I === 0 && $ !== 107 && 0 < N.length && (ee = 1, N += "\0"), 0 < K * le && c(0, N, S, w, re, J, Z.length, $, l, $), J = 1, re++;
          break;
        case 59:
        case 125:
          if (g + D + j + M === 0) {
            J++;
            break;
          }
        default:
          switch (J++, ue = b.charAt(L), h) {
            case 9:
            case 32:
              if (D + M + g === 0)
                switch (V) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    ue = "";
                    break;
                  default:
                    h !== 32 && (ue = " ");
                }
              break;
            case 0:
              ue = "\\0";
              break;
            case 12:
              ue = "\\f";
              break;
            case 11:
              ue = "\\v";
              break;
            case 38:
              D + g + M === 0 && (ee = ze = 1, ue = "\f" + ue);
              break;
            case 108:
              if (D + g + M + ie === 0 && 0 < G)
                switch (L - G) {
                  case 2:
                    V === 112 && b.charCodeAt(L - 3) === 58 && (ie = V);
                  case 8:
                    C === 111 && (ie = C);
                }
              break;
            case 58:
              D + g + M === 0 && (G = L);
              break;
            case 44:
              g + j + D + M === 0 && (ee = 1, ue += "\r");
              break;
            case 34:
            case 39:
              g === 0 && (D = D === h ? 0 : D === 0 ? h : D);
              break;
            case 91:
              D + g + j === 0 && M++;
              break;
            case 93:
              D + g + j === 0 && M--;
              break;
            case 41:
              D + g + M === 0 && j--;
              break;
            case 40:
              if (D + g + M === 0) {
                if (I === 0)
                  switch (2 * V + 3 * C) {
                    case 533:
                      break;
                    default:
                      I = 1;
                  }
                j++;
              }
              break;
            case 64:
              g + j + D + M + G + P === 0 && (P = 1);
              break;
            case 42:
            case 47:
              if (!(0 < D + M + j))
                switch (g) {
                  case 0:
                    switch (2 * h + 3 * b.charCodeAt(L + 1)) {
                      case 235:
                        g = 47;
                        break;
                      case 220:
                        te = L, g = 42;
                    }
                    break;
                  case 42:
                    h === 47 && V === 42 && te + 2 !== L && (b.charCodeAt(te + 2) === 33 && (Z += b.substring(te, L + 1)), ue = "", g = 0);
                }
          }
          g === 0 && (N += ue);
      }
      C = V, V = h, L++;
    }
    if (te = Z.length, 0 < te) {
      if (ee = S, 0 < K && (Ae = c(2, Z, ee, w, re, J, te, $, l, $), Ae !== void 0 && (Z = Ae).length === 0))
        return Ct + Z + gt;
      if (Z = ee.join(",") + "{" + Z + "}", q * ie !== 0) {
        switch (q !== 2 || o(Z, 2) || (ie = 0), ie) {
          case 111:
            Z = Z.replace(O, ":-moz-$1") + Z;
            break;
          case 112:
            Z = Z.replace(k, "::-webkit-input-$1") + Z.replace(k, "::-moz-$1") + Z.replace(k, ":-ms-input-$1") + Z;
        }
        ie = 0;
      }
    }
    return Ct + Z + gt;
  }
  function r(w, S, b) {
    var $ = S.trim().split(u);
    S = $;
    var l = $.length, M = w.length;
    switch (M) {
      case 0:
      case 1:
        var g = 0;
        for (w = M === 0 ? "" : w[0] + " "; g < l; ++g)
          S[g] = n(w, S[g], b).trim();
        break;
      default:
        var j = g = 0;
        for (S = []; g < l; ++g)
          for (var D = 0; D < M; ++D)
            S[j++] = n(w[D] + " ", $[g], b).trim();
    }
    return S;
  }
  function n(w, S, b) {
    var $ = S.charCodeAt(0);
    switch (33 > $ && ($ = (S = S.trim()).charCodeAt(0)), $) {
      case 38:
        return S.replace(x, "$1" + w.trim());
      case 58:
        return w.trim() + S.replace(x, "$1" + w.trim());
      default:
        if (0 < 1 * b && 0 < S.indexOf("\f"))
          return S.replace(x, (w.charCodeAt(0) === 58 ? "" : "$1") + w.trim());
    }
    return w + S;
  }
  function i(w, S, b, $) {
    var l = w + ";", M = 2 * S + 3 * b + 4 * $;
    if (M === 944) {
      w = l.indexOf(":", 9) + 1;
      var g = l.substring(w, l.length - 1).trim();
      return g = l.substring(0, w).trim() + g + ";", q === 1 || q === 2 && o(g, 1) ? "-webkit-" + g + g : g;
    }
    if (q === 0 || q === 2 && !o(l, 1))
      return l;
    switch (M) {
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
          return l.replace(de, "$1-webkit-$2") + l;
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
        return g = l.substring(l.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + g + "-webkit-" + l + "-ms-flex-pack" + g + l;
      case 1005:
        return v.test(l) ? l.replace(m, ":-webkit-") + l.replace(m, ":-moz-") + l : l;
      case 1e3:
        switch (g = l.substring(13).trim(), S = g.indexOf("-") + 1, g.charCodeAt(0) + g.charCodeAt(S)) {
          case 226:
            g = l.replace(_, "tb");
            break;
          case 232:
            g = l.replace(_, "tb-rl");
            break;
          case 220:
            g = l.replace(_, "lr");
            break;
          default:
            return l;
        }
        return "-webkit-" + l + "-ms-" + g + l;
      case 1017:
        if (l.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (S = (l = w).length - 10, g = (l.charCodeAt(S) === 33 ? l.substring(0, S) : l).substring(w.indexOf(":", 7) + 1).trim(), M = g.charCodeAt(0) + (g.charCodeAt(7) | 0)) {
          case 203:
            if (111 > g.charCodeAt(8))
              break;
          case 115:
            l = l.replace(g, "-webkit-" + g) + ";" + l;
            break;
          case 207:
          case 102:
            l = l.replace(g, "-webkit-" + (102 < M ? "inline-" : "") + "box") + ";" + l.replace(g, "-webkit-" + g) + ";" + l.replace(g, "-ms-" + g + "box") + ";" + l;
        }
        return l + ";";
      case 938:
        if (l.charCodeAt(5) === 45)
          switch (l.charCodeAt(6)) {
            case 105:
              return g = l.replace("-items", ""), "-webkit-" + l + "-webkit-box-" + g + "-ms-flex-" + g + l;
            case 115:
              return "-webkit-" + l + "-ms-flex-item-" + l.replace(Y, "") + l;
            default:
              return "-webkit-" + l + "-ms-flex-line-pack" + l.replace("align-content", "").replace(Y, "") + l;
          }
        break;
      case 973:
      case 989:
        if (l.charCodeAt(3) !== 45 || l.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (se.test(w) === !0)
          return (g = w.substring(w.indexOf(":") + 1)).charCodeAt(0) === 115 ? i(w.replace("stretch", "fill-available"), S, b, $).replace(":fill-available", ":stretch") : l.replace(g, "-webkit-" + g) + l.replace(g, "-moz-" + g.replace("fill-", "")) + l;
        break;
      case 962:
        if (l = "-webkit-" + l + (l.charCodeAt(5) === 102 ? "-ms-" + l : "") + l, b + $ === 211 && l.charCodeAt(13) === 105 && 0 < l.indexOf("transform", 10))
          return l.substring(0, l.indexOf(";", 27) + 1).replace(T, "$1-webkit-$2") + l;
    }
    return l;
  }
  function o(w, S) {
    var b = w.indexOf(S === 1 ? ":" : "{"), $ = w.substring(0, S !== 3 ? b : 10);
    return b = w.substring(b + 1, w.length - 1), _e(S !== 2 ? $ : $.replace(X, "$1"), b, S);
  }
  function a(w, S) {
    var b = i(S, S.charCodeAt(0), S.charCodeAt(1), S.charCodeAt(2));
    return b !== S + ";" ? b.replace(Q, " or ($1)").substring(4) : "(" + S + ")";
  }
  function c(w, S, b, $, l, M, g, j, D, I) {
    for (var h = 0, V = S, C; h < K; ++h)
      switch (C = ne[h].call(s, w, V, b, $, l, M, g, j, D, I)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          V = C;
      }
    if (V !== S)
      return V;
  }
  function f(w) {
    switch (w) {
      case void 0:
      case null:
        K = ne.length = 0;
        break;
      default:
        if (typeof w == "function")
          ne[K++] = w;
        else if (typeof w == "object")
          for (var S = 0, b = w.length; S < b; ++S)
            f(w[S]);
        else
          le = !!w | 0;
    }
    return f;
  }
  function d(w) {
    return w = w.prefix, w !== void 0 && (_e = null, w ? typeof w != "function" ? q = 1 : (q = 2, _e = w) : q = 0), d;
  }
  function s(w, S) {
    var b = w;
    if (33 > b.charCodeAt(0) && (b = b.trim()), ye = b, b = [ye], 0 < K) {
      var $ = c(-1, S, b, b, re, J, 0, 0, 0, 0);
      $ !== void 0 && typeof $ == "string" && (S = $);
    }
    var l = t(ve, b, S, 0, 0);
    return 0 < K && ($ = c(-2, l, b, b, re, J, l.length, 0, 0, 0), $ !== void 0 && (l = $)), ye = "", ie = 0, J = re = 1, l;
  }
  var p = /^\0+/g, y = /[\0\r\f]/g, m = /: */g, v = /zoo|gra/, T = /([,: ])(transform)/g, u = /,\r+?/g, x = /([\t\r\n ])*\f?&/g, A = /@(k\w+)\s*(\S*)\s*/, k = /::(place)/g, O = /:(read-only)/g, _ = /[svh]\w+-[tblr]{2}/, B = /\(\s*(.*)\s*\)/g, Q = /([\s\S]*?);/g, Y = /-self|flex-/g, X = /[^]*?(:[rp][el]a[\w-]+)[^]*/, se = /stretch|:\s*\w+\-(?:conte|avail)/, de = /([^-])(image-set\()/, J = 1, re = 1, ie = 0, q = 1, ve = [], ne = [], K = 0, _e = null, le = 0, ye = "";
  return s.use = f, s.set = d, e !== void 0 && d(e), s;
}
var Ao = {
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
function To(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Ro = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Er = /* @__PURE__ */ To(
  function(e) {
    return Ro.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Pt = {}, xo = {
  get exports() {
    return Pt;
  },
  set exports(e) {
    Pt = e;
  }
}, U = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sr;
function Oo() {
  if (Sr)
    return U;
  Sr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, s = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, T = e ? Symbol.for("react.block") : 60121, u = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function k(_) {
    if (typeof _ == "object" && _ !== null) {
      var B = _.$$typeof;
      switch (B) {
        case t:
          switch (_ = _.type, _) {
            case f:
            case d:
            case n:
            case o:
            case i:
            case p:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case c:
                case s:
                case v:
                case m:
                case a:
                  return _;
                default:
                  return B;
              }
          }
        case r:
          return B;
      }
    }
  }
  function O(_) {
    return k(_) === d;
  }
  return U.AsyncMode = f, U.ConcurrentMode = d, U.ContextConsumer = c, U.ContextProvider = a, U.Element = t, U.ForwardRef = s, U.Fragment = n, U.Lazy = v, U.Memo = m, U.Portal = r, U.Profiler = o, U.StrictMode = i, U.Suspense = p, U.isAsyncMode = function(_) {
    return O(_) || k(_) === f;
  }, U.isConcurrentMode = O, U.isContextConsumer = function(_) {
    return k(_) === c;
  }, U.isContextProvider = function(_) {
    return k(_) === a;
  }, U.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === t;
  }, U.isForwardRef = function(_) {
    return k(_) === s;
  }, U.isFragment = function(_) {
    return k(_) === n;
  }, U.isLazy = function(_) {
    return k(_) === v;
  }, U.isMemo = function(_) {
    return k(_) === m;
  }, U.isPortal = function(_) {
    return k(_) === r;
  }, U.isProfiler = function(_) {
    return k(_) === o;
  }, U.isStrictMode = function(_) {
    return k(_) === i;
  }, U.isSuspense = function(_) {
    return k(_) === p;
  }, U.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === n || _ === d || _ === o || _ === i || _ === p || _ === y || typeof _ == "object" && _ !== null && (_.$$typeof === v || _.$$typeof === m || _.$$typeof === a || _.$$typeof === c || _.$$typeof === s || _.$$typeof === u || _.$$typeof === x || _.$$typeof === A || _.$$typeof === T);
  }, U.typeOf = k, U;
}
var z = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var br;
function ko() {
  return br || (br = 1, {}.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, s = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, T = e ? Symbol.for("react.block") : 60121, u = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function k(h) {
      return typeof h == "string" || typeof h == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      h === n || h === d || h === o || h === i || h === p || h === y || typeof h == "object" && h !== null && (h.$$typeof === v || h.$$typeof === m || h.$$typeof === a || h.$$typeof === c || h.$$typeof === s || h.$$typeof === u || h.$$typeof === x || h.$$typeof === A || h.$$typeof === T);
    }
    function O(h) {
      if (typeof h == "object" && h !== null) {
        var V = h.$$typeof;
        switch (V) {
          case t:
            var C = h.type;
            switch (C) {
              case f:
              case d:
              case n:
              case o:
              case i:
              case p:
                return C;
              default:
                var P = C && C.$$typeof;
                switch (P) {
                  case c:
                  case s:
                  case v:
                  case m:
                  case a:
                    return P;
                  default:
                    return V;
                }
            }
          case r:
            return V;
        }
      }
    }
    var _ = f, B = d, Q = c, Y = a, X = t, se = s, de = n, J = v, re = m, ie = r, q = o, ve = i, ne = p, K = !1;
    function _e(h) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), le(h) || O(h) === f;
    }
    function le(h) {
      return O(h) === d;
    }
    function ye(h) {
      return O(h) === c;
    }
    function w(h) {
      return O(h) === a;
    }
    function S(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }
    function b(h) {
      return O(h) === s;
    }
    function $(h) {
      return O(h) === n;
    }
    function l(h) {
      return O(h) === v;
    }
    function M(h) {
      return O(h) === m;
    }
    function g(h) {
      return O(h) === r;
    }
    function j(h) {
      return O(h) === o;
    }
    function D(h) {
      return O(h) === i;
    }
    function I(h) {
      return O(h) === p;
    }
    z.AsyncMode = _, z.ConcurrentMode = B, z.ContextConsumer = Q, z.ContextProvider = Y, z.Element = X, z.ForwardRef = se, z.Fragment = de, z.Lazy = J, z.Memo = re, z.Portal = ie, z.Profiler = q, z.StrictMode = ve, z.Suspense = ne, z.isAsyncMode = _e, z.isConcurrentMode = le, z.isContextConsumer = ye, z.isContextProvider = w, z.isElement = S, z.isForwardRef = b, z.isFragment = $, z.isLazy = l, z.isMemo = M, z.isPortal = g, z.isProfiler = j, z.isStrictMode = D, z.isSuspense = I, z.isValidElementType = k, z.typeOf = O;
  }()), z;
}
(function(e) {
  ({}).NODE_ENV === "production" ? e.exports = Oo() : e.exports = ko();
})(xo);
var Zt = Pt, $o = {
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
}, No = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Po = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, un = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Xt = {};
Xt[Zt.ForwardRef] = Po;
Xt[Zt.Memo] = un;
function wr(e) {
  return Zt.isMemo(e) ? un : Xt[e.$$typeof] || $o;
}
var Io = Object.defineProperty, Mo = Object.getOwnPropertyNames, Ar = Object.getOwnPropertySymbols, Do = Object.getOwnPropertyDescriptor, Lo = Object.getPrototypeOf, Tr = Object.prototype;
function fn(e, t, r) {
  if (typeof t != "string") {
    if (Tr) {
      var n = Lo(t);
      n && n !== Tr && fn(e, n, r);
    }
    var i = Mo(t);
    Ar && (i = i.concat(Ar(t)));
    for (var o = wr(e), a = wr(t), c = 0; c < i.length; ++c) {
      var f = i[c];
      if (!No[f] && !(r && r[f]) && !(a && a[f]) && !(o && o[f])) {
        var d = Do(t, f);
        try {
          Io(e, f, d);
        } catch {
        }
      }
    }
  }
  return e;
}
var Fo = fn;
function me() {
  return (me = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Rr = function(e, t) {
  for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1)
    r.push(t[n], e[n + 1]);
  return r;
}, It = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !qe.typeOf(e);
}, ht = Object.freeze([]), Te = Object.freeze({});
function Me(e) {
  return typeof e == "function";
}
function Mt(e) {
  return {}.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function qt(e) {
  return e && typeof e.styledComponentId == "string";
}
var De = typeof process < "u" && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR) || "data-styled", Kt = typeof window < "u" && "HTMLElement" in window, Ho = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && {}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && {}.REACT_APP_SC_DISABLE_SPEEDY !== "" ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" && {}.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && {}.SC_DISABLE_SPEEDY !== void 0 && {}.SC_DISABLE_SPEEDY !== "" ? {}.SC_DISABLE_SPEEDY !== "false" && {}.SC_DISABLE_SPEEDY : {}.NODE_ENV !== "production"), Uo = {}.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function zo() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, n = arguments.length; r < n; r += 1)
    t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(i) {
    e = e.replace(/%[a-z]/, i);
  }), e;
}
function be(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  throw {}.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(zo.apply(void 0, [Uo[e]].concat(r)).trim());
}
var Yo = function() {
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
        (a <<= 1) < 0 && be(16, "" + r);
      this.groupSizes = new Uint32Array(a), this.groupSizes.set(i), this.length = a;
      for (var c = o; c < a; c++)
        this.groupSizes[c] = 0;
    }
    for (var f = this.indexOfGroup(r + 1), d = 0, s = n.length; d < s; d++)
      this.tag.insertRule(f, n[d]) && (this.groupSizes[r]++, f++);
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
}(), ct = /* @__PURE__ */ new Map(), pt = /* @__PURE__ */ new Map(), Ge = 1, rt = function(e) {
  if (ct.has(e))
    return ct.get(e);
  for (; pt.has(Ge); )
    Ge++;
  var t = Ge++;
  return {}.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && be(16, "" + t), ct.set(e, t), pt.set(t, e), t;
}, jo = function(e) {
  return pt.get(e);
}, Bo = function(e, t) {
  t >= Ge && (Ge = t + 1), ct.set(e, t), pt.set(t, e);
}, Vo = "style[" + De + '][data-styled-version="5.3.6"]', Wo = new RegExp("^" + De + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Go = function(e, t, r) {
  for (var n, i = r.split(","), o = 0, a = i.length; o < a; o++)
    (n = i[o]) && e.registerName(t, n);
}, Zo = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], i = 0, o = r.length; i < o; i++) {
    var a = r[i].trim();
    if (a) {
      var c = a.match(Wo);
      if (c) {
        var f = 0 | parseInt(c[1], 10), d = c[2];
        f !== 0 && (Bo(d, f), Go(e, d, c[3]), e.getTag().insertRules(f, n)), n.length = 0;
      } else
        n.push(a);
    }
  }
}, Xo = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, dn = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), i = function(c) {
    for (var f = c.childNodes, d = f.length; d >= 0; d--) {
      var s = f[d];
      if (s && s.nodeType === 1 && s.hasAttribute(De))
        return s;
    }
  }(r), o = i !== void 0 ? i.nextSibling : null;
  n.setAttribute(De, "active"), n.setAttribute("data-styled-version", "5.3.6");
  var a = Xo();
  return a && n.setAttribute("nonce", a), r.insertBefore(n, o), n;
}, qo = function() {
  function e(r) {
    var n = this.element = dn(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(i) {
      if (i.sheet)
        return i.sheet;
      for (var o = document.styleSheets, a = 0, c = o.length; a < c; a++) {
        var f = o[a];
        if (f.ownerNode === i)
          return f;
      }
      be(17);
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
}(), Ko = function() {
  function e(r) {
    var n = this.element = dn(r);
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
}(), Qo = function() {
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
}(), xr = Kt, Jo = { isServer: !Kt, useCSSOMInjection: !Ho }, _n = function() {
  function e(r, n, i) {
    r === void 0 && (r = Te), n === void 0 && (n = {}), this.options = me({}, Jo, {}, r), this.gs = n, this.names = new Map(i), this.server = !!r.isServer, !this.server && Kt && xr && (xr = !1, function(o) {
      for (var a = document.querySelectorAll(Vo), c = 0, f = a.length; c < f; c++) {
        var d = a[c];
        d && d.getAttribute(De) !== "active" && (Zo(o, d), d.parentNode && d.parentNode.removeChild(d));
      }
    }(this));
  }
  e.registerId = function(r) {
    return rt(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(me({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (i = (n = this.options).isServer, o = n.useCSSOMInjection, a = n.target, r = i ? new Qo(a) : o ? new qo(a) : new Ko(a), new Yo(r)));
    var r, n, i, o, a;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (rt(r), this.names.has(r))
      this.names.get(r).add(n);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(n), this.names.set(r, i);
    }
  }, t.insertRules = function(r, n, i) {
    this.registerName(r, n), this.getTag().insertRules(rt(r), i);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(rt(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), i = n.length, o = "", a = 0; a < i; a++) {
        var c = jo(a);
        if (c !== void 0) {
          var f = r.names.get(c), d = n.getGroup(a);
          if (f && d && f.size) {
            var s = De + ".g" + a + '[id="' + c + '"]', p = "";
            f !== void 0 && f.forEach(function(y) {
              y.length > 0 && (p += y + ",");
            }), o += "" + d + s + '{content:"' + p + `"}/*!sc*/
`;
          }
        }
      }
      return o;
    }(this);
  }, e;
}(), ei = /(a)(d)/gi, Or = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Dt(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    r = Or(t % 52) + r;
  return (Or(t % 52) + r).replace(ei, "$1-$2");
}
var Oe = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, hn = function(e) {
  return Oe(5381, e);
};
function ti(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Me(r) && !qt(r))
      return !1;
  }
  return !0;
}
var ri = hn("5.3.6"), ni = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = {}.NODE_ENV === "production" && (n === void 0 || n.isStatic) && ti(t), this.componentId = r, this.baseHash = Oe(ri, r), this.baseStyle = n, _n.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var i = this.componentId, o = [];
    if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(i, this.staticRulesId))
        o.push(this.staticRulesId);
      else {
        var a = Le(this.rules, t, r, n).join(""), c = Dt(Oe(this.baseHash, a) >>> 0);
        if (!r.hasNameForId(i, c)) {
          var f = n(a, "." + c, void 0, i);
          r.insertRules(i, c, f);
        }
        o.push(c), this.staticRulesId = c;
      }
    else {
      for (var d = this.rules.length, s = Oe(this.baseHash, n.hash), p = "", y = 0; y < d; y++) {
        var m = this.rules[y];
        if (typeof m == "string")
          p += m, {}.NODE_ENV !== "production" && (s = Oe(s, m + y));
        else if (m) {
          var v = Le(m, t, r, n), T = Array.isArray(v) ? v.join("") : v;
          s = Oe(s, T + y), p += T;
        }
      }
      if (p) {
        var u = Dt(s >>> 0);
        if (!r.hasNameForId(i, u)) {
          var x = n(p, "." + u, void 0, i);
          r.insertRules(i, u, x);
        }
        o.push(u);
      }
    }
    return o.join(" ");
  }, e;
}(), oi = /^\s*\/\/.*$/gm, ii = [":", "[", ".", "#"];
function ai(e) {
  var t, r, n, i, o = e === void 0 ? Te : e, a = o.options, c = a === void 0 ? Te : a, f = o.plugins, d = f === void 0 ? ht : f, s = new wo(c), p = [], y = function(T) {
    function u(x) {
      if (x)
        try {
          T(x + "}");
        } catch {
        }
    }
    return function(x, A, k, O, _, B, Q, Y, X, se) {
      switch (x) {
        case 1:
          if (X === 0 && A.charCodeAt(0) === 64)
            return T(A + ";"), "";
          break;
        case 2:
          if (Y === 0)
            return A + "/*|*/";
          break;
        case 3:
          switch (Y) {
            case 102:
            case 112:
              return T(k[0] + A), "";
            default:
              return A + (se === 0 ? "/*|*/" : "");
          }
        case -2:
          A.split("/*|*/}").forEach(u);
      }
    };
  }(function(T) {
    p.push(T);
  }), m = function(T, u, x) {
    return u === 0 && ii.indexOf(x[r.length]) !== -1 || x.match(i) ? T : "." + t;
  };
  function v(T, u, x, A) {
    A === void 0 && (A = "&");
    var k = T.replace(oi, ""), O = u && x ? x + " " + u + " { " + k + " }" : k;
    return t = A, r = u, n = new RegExp("\\" + r + "\\b", "g"), i = new RegExp("(\\" + r + "\\b){2,}"), s(x || !u ? "" : u, O);
  }
  return s.use([].concat(d, [function(T, u, x) {
    T === 2 && x.length && x[0].lastIndexOf(r) > 0 && (x[0] = x[0].replace(n, m));
  }, y, function(T) {
    if (T === -2) {
      var u = p;
      return p = [], u;
    }
  }])), v.hash = d.length ? d.reduce(function(T, u) {
    return u.name || be(15), Oe(T, u.name);
  }, 5381).toString() : "", v;
}
var pn = Je.createContext();
pn.Consumer;
var mn = Je.createContext(), si = (mn.Consumer, new _n()), Lt = ai();
function ci() {
  return He(pn) || si;
}
function li() {
  return He(mn) || Lt;
}
var vn = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(i, o) {
      o === void 0 && (o = Lt);
      var a = n.name + o.hash;
      i.hasNameForId(n.id, a) || i.insertRules(n.id, a, o(n.rules, a, "@keyframes"));
    }, this.toString = function() {
      return be(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Lt), this.name + t.hash;
  }, e;
}(), ui = /([A-Z])/, fi = /([A-Z])/g, di = /^ms-/, _i = function(e) {
  return "-" + e.toLowerCase();
};
function kr(e) {
  return ui.test(e) ? e.replace(fi, _i).replace(di, "-ms-") : e;
}
var $r = function(e) {
  return e == null || e === !1 || e === "";
};
function Le(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var i, o = [], a = 0, c = e.length; a < c; a += 1)
      (i = Le(e[a], t, r, n)) !== "" && (Array.isArray(i) ? o.push.apply(o, i) : o.push(i));
    return o;
  }
  if ($r(e))
    return "";
  if (qt(e))
    return "." + e.styledComponentId;
  if (Me(e)) {
    if (typeof (d = e) != "function" || d.prototype && d.prototype.isReactComponent || !t)
      return e;
    var f = e(t);
    return {}.NODE_ENV !== "production" && qe.isElement(f) && console.warn(Mt(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Le(f, t, r, n);
  }
  var d;
  return e instanceof vn ? r ? (e.inject(r, n), e.getName(n)) : e : It(e) ? function s(p, y) {
    var m, v, T = [];
    for (var u in p)
      p.hasOwnProperty(u) && !$r(p[u]) && (Array.isArray(p[u]) && p[u].isCss || Me(p[u]) ? T.push(kr(u) + ":", p[u], ";") : It(p[u]) ? T.push.apply(T, s(p[u], u)) : T.push(kr(u) + ": " + (m = u, (v = p[u]) == null || typeof v == "boolean" || v === "" ? "" : typeof v != "number" || v === 0 || m in Ao ? String(v).trim() : v + "px") + ";"));
    return y ? [y + " {"].concat(T, ["}"]) : T;
  }(e) : e.toString();
}
var Nr = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function xe(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return Me(e) || It(e) ? Nr(Le(Rr(ht, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Nr(Le(Rr(e, r)));
}
var Pr = /invalid hook call/i, nt = /* @__PURE__ */ new Set(), hi = function(e, t) {
  if ({}.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var i = !0;
      console.error = function(o) {
        if (Pr.test(o))
          i = !1, nt.delete(r);
        else {
          for (var a = arguments.length, c = new Array(a > 1 ? a - 1 : 0), f = 1; f < a; f++)
            c[f - 1] = arguments[f];
          n.apply(void 0, [o].concat(c));
        }
      }, vt(), i && !nt.has(r) && (console.warn(r), nt.add(r));
    } catch (o) {
      Pr.test(o.message) && nt.delete(r);
    } finally {
      console.error = n;
    }
  }
}, pi = function(e, t, r) {
  return r === void 0 && (r = Te), e.theme !== r.theme && e.theme || t || r.theme;
}, mi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, vi = /(^-|-$)/g;
function bt(e) {
  return e.replace(mi, "-").replace(vi, "");
}
var yn = function(e) {
  return Dt(hn(e) >>> 0);
};
function ot(e) {
  return typeof e == "string" && ({}.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Ft = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, yi = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function gi(e, t, r) {
  var n = e[r];
  Ft(t) && Ft(n) ? gn(n, t) : e[r] = t;
}
function gn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  for (var i = 0, o = r; i < o.length; i++) {
    var a = o[i];
    if (Ft(a))
      for (var c in a)
        yi(c) && gi(e, a[c], c);
  }
  return e;
}
var Ke = Je.createContext();
Ke.Consumer;
function Ci(e) {
  var t = He(Ke), r = yt(function() {
    return function(n, i) {
      if (!n)
        return be(14);
      if (Me(n)) {
        var o = n(i);
        return {}.NODE_ENV === "production" || o !== null && !Array.isArray(o) && typeof o == "object" ? o : be(7);
      }
      return Array.isArray(n) || typeof n != "object" ? be(8) : i ? me({}, i, {}, n) : n;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? Je.createElement(Ke.Provider, { value: r }, e.children) : null;
}
var wt = {};
function Cn(e, t, r) {
  var n = qt(e), i = !ot(e), o = t.attrs, a = o === void 0 ? ht : o, c = t.componentId, f = c === void 0 ? function(A, k) {
    var O = typeof A != "string" ? "sc" : bt(A);
    wt[O] = (wt[O] || 0) + 1;
    var _ = O + "-" + yn("5.3.6" + O + wt[O]);
    return k ? k + "-" + _ : _;
  }(t.displayName, t.parentComponentId) : c, d = t.displayName, s = d === void 0 ? function(A) {
    return ot(A) ? "styled." + A : "Styled(" + Mt(A) + ")";
  }(e) : d, p = t.displayName && t.componentId ? bt(t.displayName) + "-" + t.componentId : t.componentId || f, y = n && e.attrs ? Array.prototype.concat(e.attrs, a).filter(Boolean) : a, m = t.shouldForwardProp;
  n && e.shouldForwardProp && (m = t.shouldForwardProp ? function(A, k, O) {
    return e.shouldForwardProp(A, k, O) && t.shouldForwardProp(A, k, O);
  } : e.shouldForwardProp);
  var v, T = new ni(r, p, n ? e.componentStyle : void 0), u = T.isStatic && a.length === 0, x = function(A, k) {
    return function(O, _, B, Q) {
      var Y = O.attrs, X = O.componentStyle, se = O.defaultProps, de = O.foldedComponentIds, J = O.shouldForwardProp, re = O.styledComponentId, ie = O.target;
      ({}).NODE_ENV !== "production" && Ot(re);
      var q = function($, l, M) {
        $ === void 0 && ($ = Te);
        var g = me({}, l, { theme: $ }), j = {};
        return M.forEach(function(D) {
          var I, h, V, C = D;
          for (I in Me(C) && (C = C(g)), C)
            g[I] = j[I] = I === "className" ? (h = j[I], V = C[I], h && V ? h + " " + V : h || V) : C[I];
        }), [g, j];
      }(pi(_, He(Ke), se) || Te, _, Y), ve = q[0], ne = q[1], K = function($, l, M, g) {
        var j = ci(), D = li(), I = l ? $.generateAndInjectStyles(Te, j, D) : $.generateAndInjectStyles(M, j, D);
        return {}.NODE_ENV !== "production" && Ot(I), {}.NODE_ENV !== "production" && !l && g && g(I), I;
      }(X, Q, ve, {}.NODE_ENV !== "production" ? O.warnTooManyClasses : void 0), _e = B, le = ne.$as || _.$as || ne.as || _.as || ie, ye = ot(le), w = ne !== _ ? me({}, _, {}, ne) : _, S = {};
      for (var b in w)
        b[0] !== "$" && b !== "as" && (b === "forwardedAs" ? S.as = w[b] : (J ? J(b, Er, le) : !ye || Er(b)) && (S[b] = w[b]));
      return _.style && ne.style !== _.style && (S.style = me({}, _.style, {}, ne.style)), S.className = Array.prototype.concat(de, re, K !== re ? K : null, _.className, ne.className).filter(Boolean).join(" "), S.ref = _e, oe(le, S);
    }(v, A, k, u);
  };
  return x.displayName = s, (v = Je.forwardRef(x)).attrs = y, v.componentStyle = T, v.displayName = s, v.shouldForwardProp = m, v.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : ht, v.styledComponentId = p, v.target = n ? e.target : e, v.withComponent = function(A) {
    var k = t.componentId, O = function(B, Q) {
      if (B == null)
        return {};
      var Y, X, se = {}, de = Object.keys(B);
      for (X = 0; X < de.length; X++)
        Y = de[X], Q.indexOf(Y) >= 0 || (se[Y] = B[Y]);
      return se;
    }(t, ["componentId"]), _ = k && k + "-" + (ot(A) ? A : bt(Mt(A)));
    return Cn(A, me({}, O, { attrs: y, componentId: _ }), r);
  }, Object.defineProperty(v, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(A) {
    this._foldedDefaultProps = n ? gn({}, e.defaultProps, A) : A;
  } }), {}.NODE_ENV !== "production" && (hi(s, p), v.warnTooManyClasses = function(A, k) {
    var O = {}, _ = !1;
    return function(B) {
      if (!_ && (O[B] = !0, Object.keys(O).length >= 200)) {
        var Q = k ? ' with the id of "' + k + '"' : "";
        console.warn("Over 200 classes were generated for component " + A + Q + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), _ = !0, O = {};
      }
    };
  }(s, p)), v.toString = function() {
    return "." + v.styledComponentId;
  }, i && Fo(v, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), v;
}
var Ht = function(e) {
  return function t(r, n, i) {
    if (i === void 0 && (i = Te), !qe.isValidElementType(n))
      return be(1, String(n));
    var o = function() {
      return r(n, i, xe.apply(void 0, arguments));
    };
    return o.withConfig = function(a) {
      return t(r, n, me({}, i, {}, a));
    }, o.attrs = function(a) {
      return t(r, n, me({}, i, { attrs: Array.prototype.concat(i.attrs, a).filter(Boolean) }));
    }, o;
  }(Cn, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Ht[e] = Ht(e);
});
function Ue(e) {
  ({}).NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  var i = xe.apply(void 0, [e].concat(r)).join(""), o = yn(i);
  return new vn(o, i);
}
var Ei = function() {
  return He(Ke);
};
({}).NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), {}.NODE_ENV !== "production" && {}.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const ae = Ht;
var Si = 0;
function E(e, t, r, n, i) {
  var o, a, c = {};
  for (a in t)
    a == "ref" ? o = t[a] : c[a] = t[a];
  var f = { type: e, props: c, key: r, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Si, __source: i, __self: n };
  if (typeof e == "function" && (o = e.defaultProps))
    for (a in o)
      c[a] === void 0 && (c[a] = o[a]);
  return R.vnode && R.vnode(f), f;
}
const En = ({
  svgSize: e
}) => E("svg", {
  fill: "none",
  height: e,
  viewBox: "0 0 16 14",
  width: e,
  xmlns: "http://www.w3.org/2000/svg",
  children: E("path", {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })
}), bi = 2, At = 14, Ir = 5, Mr = 0.027;
var ge = /* @__PURE__ */ ((e) => (e[e.S = 300] = "S", e[e.M = 400] = "M", e[e.L = 500] = "L", e[e.Default = 600] = "Default", e))(ge || {});
const Be = {
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
}, Dr = {
  loading: {
    text: "Loading. Please wait.",
    visible: !0
  },
  done: {
    text: "Waiting for input",
    visible: !0
  }
}, wi = {
  [he.CANDIDATE_SELECTION]: "Stay still…",
  [he.FACE_TOO_CLOSE]: "Move back",
  [he.FACE_TOO_FAR]: "Move closer",
  [he.FACE_CENTERING]: "Center your face",
  [he.FACE_NOT_PRESENT]: "Position your face into the circle",
  [he.SHARPNESS_TOO_LOW]: "Turn face against light",
  [he.BRIGHTNESS_TOO_LOW]: "Turn face against light",
  [he.BRIGHTNESS_TOO_HIGH]: "Less light needed",
  [he.FIT_YOUR_EYE]: "Fit your eye into square"
}, Sn = (e) => e ? e.width < e.height ? Math.max(At, Ir + e.width * Mr) : Math.max(At, Ir + e.height * Mr) : At, Ai = (e) => e > ge.Default ? Be[ge.Default] : e > ge.L ? Be[ge.L] : e > ge.M ? Be[ge.M] : Be[ge.S], Ti = (e) => {
  if (!e)
    return Be[ge.Default];
  const t = Math.max(e.width, e.height);
  return Ai(t);
}, Ri = ae.div`
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
`, xi = ae.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, Oi = ae.p`
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
`, bn = ({
  fontSize: e,
  Icon: t,
  isCameraReady: r,
  position: n = "absolute",
  text: i
}) => E(Ri, {
  isCameraReady: r,
  position: n,
  children: E(xi, {
    children: [t ? E(t, {
      svgSize: e * 2
    }) : null, E(Oi, {
      fontSize: e,
      children: i
    })]
  })
}), wn = ({
  fontSize: e,
  text: t = "An unknown error has occurred"
}) => E(bn, {
  fontSize: e,
  Icon: En,
  position: "relative",
  text: t
});
class ki extends fe {
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
    return this.state.hasError ? E(wn, {
      fontSize: Sn(this.props.videoElementSize),
      Icon: En,
      isCameraReady: !1
    }) : this.props.children;
  }
}
const $i = ({
  children: e,
  theme: t,
  videoElementSize: r
}) => E(Ci, {
  theme: t,
  children: E(ki, {
    videoElementSize: r,
    children: e
  })
}), Ze = (e, t) => {
  const r = vt(t);
  ke(() => {
    r.current = t;
  }, [t]), ke(
    () => {
      const n = (i) => r.current(i);
      return document.addEventListener(e, n), () => {
        document.removeEventListener(e, n);
      };
    },
    [e]
    // Re-run if eventName
  );
}, Ni = (e) => {
  const [t, r] = ce(), n = Pe((i) => {
    var o;
    r((o = i.detail) == null ? void 0 : o.size);
  }, [r]);
  return Ze(e, n), t;
}, Pi = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, Tt = {
  colors: Pi
}, Ii = (e) => e != null && e.theme ? {
  ...Tt,
  ...e.theme,
  colors: {
    ...Tt.colors,
    ...e.theme.colors
  }
} : Tt, Mi = 0.75, Di = 1.35, Li = (e, t) => Math.min(e, t), Fi = ({
  height: e,
  width: t
}) => {
  const r = Li(t, e) * Mi, n = (t - r) / 2, i = (e - r) / 2;
  return {
    shiftX: n,
    shiftY: i,
    width: r,
    height: r
  };
}, Hi = (e) => {
  const {
    height: t,
    shiftX: r,
    shiftY: n,
    width: i
  } = Fi(e);
  return {
    shiftX: r / e.width,
    shiftY: n / e.height,
    width: i / e.width,
    height: t / e.height
  };
}, Ui = (e, t) => {
  const r = Math.abs(t.x - e.x), n = Math.abs(t.y - e.y);
  return Math.max(r, n) * Di / 2;
}, zi = () => E("svg", {
  fill: "none",
  height: "104",
  viewBox: "0 0 104 104",
  width: "104",
  xmlns: "http://www.w3.org/2000/svg",
  children: E("path", {
    d: "M1 52C1 23.8335 23.8335 1 52 1C80.1665 1 103 23.8335 103 52C103 80.1665 80.1665 103 52 103C23.8335 103 1 80.1665 1 52Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2",
    vectorEffect: "non-scaling-stroke"
  })
}), An = (e, t) => {
  document.dispatchEvent(new CustomEvent(e, {
    detail: t
  }));
}, Qt = class {
  constructor() {
    tt(this, "lastDetails", {});
    tt(this, "delayedTime", 0);
  }
  static getInstance() {
    return this._instance || (this._instance = new Qt()), this._instance;
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
    this.isDetailChanged(t, r) && An(t, r);
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
let lt = Qt;
tt(lt, "_instance");
lt.getInstance();
const Lr = (e, t) => {
  An(e, {
    instruction: t
  });
};
class Yi {
  static async getVideoInputDeviceList() {
    return (await navigator.mediaDevices.enumerateDevices()).filter((r) => r.kind === "videoinput");
  }
}
const ji = () => {
  const [e, t] = ce(!1);
  return ke(() => {
    (async () => {
      (await Yi.getVideoInputDeviceList()).length > 1 && t(!0);
    })();
  }, []), e;
}, Bi = ({
  size: e
}) => E("svg", {
  fill: "none",
  height: e,
  viewBox: "0 0 52 52",
  width: e,
  xmlns: "http://www.w3.org/2000/svg",
  children: [E("path", {
    d: "M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z",
    fill: "#131313",
    fillOpacity: "0.3"
  }), E("circle", {
    cx: "17.5",
    cy: "24.5",
    fill: "white",
    r: "1.5"
  }), E("path", {
    d: "M15 17H16C19.5 17 23 21 23 29C22.5 29 21.5 29 20 29C20 29 20.25 33 19.5 34.5C18.75 36 16 36 16 36H15",
    stroke: "white",
    strokeWidth: "2"
  }), E("circle", {
    fill: "white",
    r: "1.5",
    transform: "matrix(-1 0 0 1 34.5 24.5)"
  }), E("path", {
    d: "M37 17H36C32.5 17 29 21 29 29C29.5 29 30.5 29 32 29C32 29 31.75 33 32.5 34.5C33.25 36 36 36 36 36H37",
    stroke: "white",
    strokeWidth: "2"
  })]
}), Vi = ({
  size: e
}) => E("svg", {
  fill: "none",
  height: e,
  viewBox: "0 0 52 52",
  width: e,
  xmlns: "http://www.w3.org/2000/svg",
  children: [E("path", {
    d: "M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z",
    fill: "#131313",
    fillOpacity: "0.3"
  }), E("path", {
    d: "M15 21.375C15 19.7181 16.3431 18.375 18 18.375H20.3222C21.1014 18.375 21.8096 17.9225 22.137 17.2155L22.163 17.1595C22.4904 16.4525 23.1986 16 23.9778 16H28.0222C28.8014 16 29.5096 16.4525 29.837 17.1595L29.863 17.2155C30.1904 17.9225 30.8986 18.375 31.6778 18.375H34C35.6569 18.375 37 19.7181 37 21.375V33C37 34.6569 35.6569 36 34 36H18C16.3431 36 15 34.6569 15 33V21.375Z",
    stroke: "white",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }), E("path", {
    d: "M31.25 27C31.25 24.1005 28.8995 21.75 26 21.75C24.4024 21.75 22.9715 22.4636 22.0086 23.5894M20.75 27C20.75 29.8995 23.1005 32.25 26 32.25C27.5958 32.25 29.0253 31.538 29.9881 30.4144",
    stroke: "white",
    strokeLinecap: "round",
    strokeWidth: "1.5"
  }), E("path", {
    d: "M30.0835 26.4167L31.2502 28.1667L32.4168 26.4167",
    stroke: "white",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  }), E("path", {
    d: "M19.5835 27.5833L20.7502 25.8333L21.9168 27.5833",
    stroke: "white",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  })]
}), Tn = ae.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-right: ${(e) => e.marginRight ? `${e.marginRight}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, Wi = ({
  size: e,
  ...t
}) => E(Tn, {
  ...t,
  children: E(Bi, {
    size: e
  })
}), Gi = ({
  size: e,
  ...t
}) => E(Tn, {
  ...t,
  children: E(Vi, {
    size: e
  })
}), Zi = ae.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.padding}px`};
  z-index: 2;
`, Xi = ({
  customControlEvent: e,
  videoElementSize: t
}) => {
  const r = ji(), {
    buttonPadding: n,
    iconSize: i,
    marginRight: o
  } = Ti(t), a = () => {
    Lr(e, xt.TOGGLE_MIRROR);
  }, c = () => {
    Lr(e, xt.SWITCH_CAMERA);
  };
  return E(Zi, {
    padding: n,
    children: [E(Wi, {
      marginRight: r ? o : 0,
      onClick: a,
      size: i
    }), r && E(Gi, {
      onClick: c,
      size: i
    })]
  });
}, qi = ae.div`
  position: absolute;
  left: 50%;
  ${(e) => e.cssTop ? `top: ${e.cssTop}%;` : ""}
  ${(e) => e.cssBottom ? `bottom: ${e.cssBottom}%;` : ""}
  transform: translateX(-50%)
    translateY(
      ${(e) => e.cssTop || e.isPortrait ? "-50%" : e.isPortrait ? "" : "50%"}
    );
  z-index: 2;
`, Ki = ae.div`
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
`, Fr = ({
  children: e,
  fontSize: t,
  isInCandidateSelection: r,
  ...n
}) => E(qi, {
  ...n,
  children: E(Ki, {
    fontSize: t,
    isInCandidateSelection: r,
    children: e
  })
}), Qi = ae.canvas`
  transform: ${(e) => e.isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`, Ji = (e) => {
  const t = e.getContext("2d");
  t && t.clearRect(0, 0, t.canvas.width, t.canvas.height);
}, ea = ({
  cameraResolution: e,
  detectedFaceCorners: t,
  isImageMirror: r
}) => {
  const n = vt(null), i = Ei();
  return ke(() => {
    if (!n.current)
      return;
    const o = (a) => {
      var y;
      const {
        bottomRight: c,
        faceCenter: f,
        topLeft: d
      } = a, s = (y = n == null ? void 0 : n.current) == null ? void 0 : y.getContext("2d");
      if (!s)
        return;
      const p = Ui(d, c);
      s.beginPath(), s.arc(f.x, f.y, p, 0, 2 * Math.PI, !1), s.lineWidth = bi, s.strokeStyle = i.colors.placeholderColor, s.stroke();
    };
    n.current.width = e.width, n.current.height = e.height, Ji(n.current), o(t);
  }, [e, t, i.colors.placeholderColor]), E(Qi, {
    ref: n,
    isImageMirror: r
  });
}, ta = () => {
  const [e, t] = ce(), [r, n] = ce(!1), i = Pe((p) => {
    var m, v;
    t((m = p == null ? void 0 : p.detail) == null ? void 0 : m.cameraResolution);
    const y = (v = p == null ? void 0 : p.detail) == null ? void 0 : v.isMirroring;
    y !== void 0 && n(y);
  }, [t]);
  Ze(Ne.CAMERA_PROPS_CHANGED, i);
  const [o, a] = ce(), c = Pe((p) => {
    var y;
    a((y = p == null ? void 0 : p.detail) == null ? void 0 : y.detectedCorners);
  }, [a]);
  Ze(Ne.DETECTED_FACE_CHANGED, c);
  const [f, d] = ce(), s = Pe((p) => {
    var y;
    d((y = p == null ? void 0 : p.detail) == null ? void 0 : y.instructionCode);
  }, [d]);
  return Ze(Ne.INSTRUCTION_CHANGED, s), {
    cameraResolution: e,
    detectedFaceCorners: o,
    instructionCode: f,
    isMirroring: r
  };
}, ra = () => {
  const [e, t] = ce(_t.DISTANT), [r, n] = ce(Se.LOADING), [i, o] = ce(), a = Pe((c) => {
    const {
      error: f,
      phase: d,
      state: s
    } = c.detail || {};
    d && t(d), s && n(s), f && o(f);
  }, [t, n, o]);
  return Ze(Kr.STATUS_CHANGED, a), {
    magnifEyePhase: e,
    magnifEyeState: r,
    magnifEyeError: i
  };
};
var pe = /* @__PURE__ */ ((e) => (e.CLOSEUP = "CLOSEUP", e.DISTANT = "DISTANT", e.MIDDLE = "MIDDLE", e))(pe || {});
const na = ae.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, oa = ({
  svgSize: e
}) => E(na, {
  children: E("svg", {
    fill: "none",
    height: e,
    viewBox: "0 0 48 48",
    width: e,
    xmlns: "http://www.w3.org/2000/svg",
    children: [E("path", {
      d: "M30.9229 9.75026C30.9229 12.3736 28.7533 14.5002 26.0767 14.5002C23.4003 14.5002 21.2307 12.3736 21.2307 9.75026C21.2307 7.12664 23.4003 5 26.0767 5C28.7533 5 30.9229 7.12664 30.9229 9.75026Z",
      fill: "currentColor"
    }), E("path", {
      d: "M40.6155 15.8556C40.6155 18.1044 38.7559 19.9273 36.4618 19.9273C34.1675 19.9273 32.3079 18.1044 32.3079 15.8556C32.3079 13.607 34.1675 11.7842 36.4618 11.7842C38.7559 11.7842 40.6155 13.607 40.6155 15.8556Z",
      fill: "currentColor"
    }), E("path", {
      d: "M42 27.3921C42 29.2659 40.4502 30.785 38.5386 30.785C36.6267 30.785 35.0769 29.2659 35.0769 27.3921C35.0769 25.5181 36.6267 23.999 38.5386 23.999C40.4502 23.999 42 25.5181 42 27.3921Z",
      fill: "currentColor"
    }), E("path", {
      d: "M35.0766 37.5712C35.0766 39.0704 33.837 40.2858 32.3075 40.2858C30.7779 40.2858 29.5383 39.0704 29.5383 37.5712C29.5383 36.0723 30.7779 34.8569 32.3075 34.8569C33.837 34.8569 35.0766 36.0723 35.0766 37.5712Z",
      fill: "currentColor"
    }), E("path", {
      d: "M22.6154 40.2858C22.6154 41.7848 21.3756 43.0001 19.846 43.0001C18.3168 43.0001 17.0769 41.7848 17.0769 40.2858C17.0769 38.7866 18.3168 37.5713 19.846 37.5713C21.3756 37.5713 22.6154 38.7866 22.6154 40.2858Z",
      fill: "currentColor"
    }), E("path", {
      d: "M11.5382 32.8216C11.5382 33.9457 10.6085 34.8573 9.46137 34.8573C8.31426 34.8573 7.38452 33.9457 7.38452 32.8216C7.38452 31.6972 8.31426 30.7856 9.46137 30.7856C10.6085 30.7856 11.5382 31.6972 11.5382 32.8216Z",
      fill: "currentColor"
    }), E("path", {
      d: "M8.76913 21.2849C8.76913 22.0345 8.14932 22.642 7.38456 22.642C6.6198 22.642 6 22.0345 6 21.2849C6 20.5353 6.61981 19.9277 7.38456 19.9277C8.14933 19.9277 8.76913 20.5353 8.76913 21.2849Z",
      fill: "currentColor"
    }), E("path", {
      d: "M15.6927 11.7844C15.6927 12.534 15.0729 13.1415 14.3081 13.1415C13.5434 13.1415 12.9236 12.534 12.9236 11.7844C12.9236 11.0348 13.5434 10.4272 14.3081 10.4272C15.0729 10.4272 15.6927 11.0348 15.6927 11.7844Z",
      fill: "currentColor"
    })]
  })
}), ia = ({
  fontSize: e,
  magnifEyeState: t,
  magnifEyeStateInstructions: r
}) => {
  const n = t === Se.ERROR || t === Se.RUNNING;
  return !t || n || !r[t].visible ? null : E(bn, {
    fontSize: e,
    Icon: t === Se.LOADING ? oa : void 0,
    isCameraReady: !0,
    text: r[t].text
  });
}, aa = () => E("svg", {
  id: "Layer_1",
  style: "enable-background:new 0 0 62 62;",
  version: "1.1",
  viewBox: "0 0 62 62",
  x: "0px",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  xmlSpace: "preserve",
  y: "0px",
  children: E("path", {
    className: "st0",
    d: "M48.8,1H54c3.9,0,7,3.1,7,7v5.5 M13.2,1H8C4.1,1,1,4.1,1,8c0,1.8,0,3.7,0,5.5 M1,48.5V54c0,3.9,3.1,7,7,7h5.8 M61,48.5V54c0,3.9-3.1,7-7,7h-5.2",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "1"
  })
}), sa = () => E("svg", {
  id: "Layer_1",
  style: "enable-background:new 0 0 154 70;",
  version: "1.1",
  viewBox: "0 0 154 70",
  x: "0px",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  xmlSpace: "preserve",
  y: "0px",
  children: [E("path", {
    className: "st0",
    d: "M98.1,35c0,11-9.4,20-21,20c-11.6,0-21-9-21-20s9.4-20,21-20C88.7,15,98.1,24,98.1,35z",
    fill: "none",
    stroke: "#FFFFFF",
    strokeWidth: "2"
  }), E("path", {
    className: "st1",
    d: "M152.5,35c-0.2,0.2-0.5,0.5-0.8,0.8c-0.9,0.9-2.2,2.3-4,3.9c-3.5,3.3-8.6,7.6-15.2,11.9 C119.3,60.3,100.3,69,77.1,69c-23.2,0-42.3-8.7-55.6-17.3C14.8,47.3,9.6,43,6.1,39.7c-1.8-1.6-3.1-3-4-3.9c-0.3-0.3-0.6-0.6-0.8-0.8 c0.2-0.2,0.5-0.5,0.8-0.8c0.9-0.9,2.2-2.3,4-3.9c3.5-3.3,8.7-7.6,15.4-11.9C34.8,9.7,53.8,1,77.1,1c23.2,0,42.2,8.7,55.4,17.3 c6.6,4.3,11.7,8.7,15.2,11.9c1.7,1.6,3.1,3,4,3.9C152,34.5,152.3,34.8,152.5,35z",
    fill: "none",
    stroke: "#FFFFFF",
    strokeMiterlimit: "10",
    strokeWidth: "2"
  })]
}), Ut = "1.5s", zt = "5s", Yt = "ease-in-out", ca = "3.3s", la = "3s", ua = "linear", fa = ".5s", da = "3s", _a = "ease-in-out", ha = ".5s", pa = ".5s", ma = "ease-out", va = (e) => Ue`
35% {
  transform: translate(35%, 28%) scale(${e});
}

100% {
  transform: translate(35%, 28%) scale(${e});
}
`, ya = (e) => Ue`
35% {
  transform: translate(35%, 20%) scale(${e * 0.98});
}

100% {
  transform: translate(35%, 20%) scale(${e * 0.98});
}
`, ga = Ue`
  1% {
    opacity: 1;
  }

  99% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Ca = Ue`
  30% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }

  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`, Ea = Ue`
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
`, Sa = Ue`
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
`, ba = ae.div`
  position: absolute;
  top: ${(e) => e.initialPosition.shiftY * 100}%;
  bottom: ${(e) => (1 - e.initialPosition.shiftY - e.initialPosition.height) * 100}%;
  left: ${(e) => e.initialPosition.shiftX * 100}%;
  right: ${(e) => (1 - e.initialPosition.shiftX - e.initialPosition.width) * 100}%;
  color: ${(e) => e.isInCandidateSelection ? "#00BFB2" : "white"};
  ${(e) => e.isAnimating && xe`
      animation: ${va(e.scale)} ${zt}
        ${Yt} both;
      animation-delay: ${Ut};
    `}

  @media (max-width: 736px) {
    ${(e) => e.isAnimating && xe`
        animation: ${ya(e.scale)} ${zt}
          ${Yt} both;
        animation-delay: ${Ut};
      `}
  }

  svg {
    width: 100%;
    height: 100%;
  }
`, wa = ae.div`
  opacity: 0;

  ${(e) => e.isAnimating && xe`
      animation: ${ga} ${la}
        ${ua} both;
      animation-delay: ${ca};
    `}
`, Aa = ae.div`
  position: absolute;
  top: 47%;
  left: 43%;
  transform: translate(-50%, -50%);
  width: 7%;
  aspect-ratio: 1;

  @media (max-width: 736px) {
    width: 14%;
  }

  ${(e) => e.isAnimating && xe`
      animation: ${Ca} ${zt} ${Yt} both;
      animation-delay: ${Ut};
    `}
`, Ta = ae.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.6);
  opacity: 0;

  ${(e) => e.isAnimating && xe`
      animation: ${Ea} ${da} ${_a} both;
      animation-delay: ${fa};
    `}

  svg {
    display: inline-block;
    width: 100%;
    height: auto;
    filter: drop-shadow(0px 0px 5px rgba(2, 27, 65, 0.3));
  }
`, Ra = ae.div`
  position: absolute;
  width: 100%;
  height: 100%;
  color: ${(e) => e.isInCandidateSelection ? "#00BFB2" : "white"};
  transform: scale(0);
  opacity: 0;

  ${(e) => e.isAnimating && xe`
      animation: ${Sa} ${pa} ${ma} both;
      animation-delay: ${ha};
    `}

  svg {
    display: inline-block;
    width: 100%;
    height: auto;
    filter: drop-shadow(0px 0px 4px rgba(2, 27, 65, 0.3));
  }
`, xa = ({
  isAnimating: e,
  isInCandidateSelection: t
}) => E(Aa, {
  isAnimating: e,
  children: [E(Ra, {
    isAnimating: e,
    isInCandidateSelection: t,
    children: E(aa, {})
  }), E(Ta, {
    isAnimating: e,
    children: E(sa, {})
  })]
}), Oa = ({
  instructions: e,
  magnifEyeStateInstructions: t,
  showCameraButtons: r,
  videoElementSize: n
}) => {
  const {
    cameraResolution: i,
    detectedFaceCorners: o,
    instructionCode: a,
    isMirroring: c
  } = ta(), f = a === he.CANDIDATE_SELECTION, d = Sn(n), {
    magnifEyeError: s,
    magnifEyePhase: p,
    magnifEyeState: y
  } = ra(), [m, v] = ce(pe.DISTANT), T = m === pe.MIDDLE || m === pe.CLOSEUP ? 2.6 : 1, u = m === pe.MIDDLE || m === pe.CLOSEUP, x = () => {
    v(pe.CLOSEUP);
  };
  if (ke(() => {
    switch (p) {
      case _t.CLOSEUP:
        v(pe.MIDDLE);
        break;
      case _t.DISTANT:
      default:
        v(pe.DISTANT);
        break;
    }
  }, [p]), y === Se.ERROR)
    return E(wn, {
      fontSize: d,
      text: s == null ? void 0 : s.message
    });
  if (y === Se.RUNNING && i) {
    const A = Hi(i);
    return E(we, {
      children: [o && !u && E(ea, {
        cameraResolution: i,
        detectedFaceCorners: o,
        isImageMirror: c
      }), E(ba, {
        initialPosition: A,
        isAnimating: u,
        isInCandidateSelection: f,
        onAnimationEnd: x,
        scale: T,
        children: E(zi, {})
      }), a && m !== pe.MIDDLE && E(Fr, {
        cssBottom: (A.height + A.shiftY) * 100,
        fontSize: d,
        isInCandidateSelection: f,
        isPortrait: i.width < i.height,
        children: e[a]
      }), E(xa, {
        isAnimating: u,
        isInCandidateSelection: f
      }), E(wa, {
        isAnimating: u,
        children: E(Fr, {
          cssBottom: (A.height + A.shiftY) * 100,
          fontSize: d,
          isInCandidateSelection: f,
          isPortrait: i.width < i.height,
          children: e.fit_your_eye
        })
      }), r && E(Xi, {
        customControlEvent: Ne.CONTROL,
        videoElementSize: n
      })]
    });
  }
  return E(ia, {
    fontSize: d,
    magnifEyeState: y,
    magnifEyeStateInstructions: t
  });
};
const ka = (e) => {
  var i, o;
  const t = {
    ...wi,
    ...e == null ? void 0 : e.instructions
  }, r = {
    [Se.LOADING]: {
      ...Dr.loading,
      ...(i = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : i.loading
    },
    [Se.DONE]: {
      ...Dr.done,
      ...(o = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : o.done
    }
  }, n = (e == null ? void 0 : e.showCameraButtons) ?? !1;
  return {
    magnifEyeInstructions: t,
    magnifEyeStateInstructions: r,
    showCameraButtons: n
  };
}, $a = ({
  props: e
}) => {
  const {
    magnifEyeInstructions: t,
    magnifEyeStateInstructions: r,
    showCameraButtons: n
  } = ka(e), i = Ni(Ne.VIDEO_ELEMENT_SIZE), o = Ii(e);
  return E($i, {
    theme: o,
    videoElementSize: i,
    children: E(Oa, {
      instructions: t,
      magnifEyeStateInstructions: r,
      showCameraButtons: n,
      videoElementSize: i
    })
  });
};
Hn($a, "x-dot-magnifeye-liveness-ui", ["props"]);
