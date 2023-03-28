var Sn = Object.defineProperty;
var wn = (e, t, r) => t in e ? Sn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var et = (e, t, r) => (wn(e, typeof t != "symbol" ? t + "" : t, r), r);
var Ke, x, Pr, je, Yt, $r, lt = {}, Hr = [], En = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ce(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}
function Fr(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function oe(e, t, r) {
  var n, i, o, a = {};
  for (o in t)
    o == "key" ? n = t[o] : o == "ref" ? i = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ke.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return We(e, a, n, i, null);
}
function We(e, t, r, n, i) {
  var o = { type: e, props: t, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Pr };
  return i == null && x.vnode != null && x.vnode(o), o;
}
function bn() {
  return { current: null };
}
function we(e) {
  return e.children;
}
function ue(e, t) {
  this.props = e, this.context = t;
}
function Ye(e, t) {
  if (t == null)
    return e.__ ? Ye(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var r; t < e.__k.length; t++)
    if ((r = e.__k[t]) != null && r.__e != null)
      return r.__e;
  return typeof e.type == "function" ? Ye(e) : null;
}
function Br(e) {
  var t, r;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((r = e.__k[t]) != null && r.__e != null) {
        e.__e = e.__c.base = r.__e;
        break;
      }
    return Br(e);
  }
}
function bt(e) {
  (!e.__d && (e.__d = !0) && je.push(e) && !ut.__r++ || Yt !== x.debounceRendering) && ((Yt = x.debounceRendering) || setTimeout)(ut);
}
function ut() {
  for (var e; ut.__r = je.length; )
    e = je.sort(function(t, r) {
      return t.__v.__b - r.__v.__b;
    }), je = [], e.some(function(t) {
      var r, n, i, o, a, l;
      t.__d && (a = (o = (r = t).__v).__e, (l = r.__P) && (n = [], (i = Ce({}, o)).__v = o.__v + 1, $t(l, o, i, r.__n, l.ownerSVGElement !== void 0, o.__h != null ? [a] : null, n, a ?? Ye(o), o.__h), jr(n, o), o.__e != a && Br(o)));
    });
}
function Ur(e, t, r, n, i, o, a, l, f, h) {
  var s, g, y, m, v, S, u, E = n && n.__k || Hr, R = E.length;
  for (r.__k = [], s = 0; s < t.length; s++)
    if ((m = r.__k[s] = (m = t[s]) == null || typeof m == "boolean" ? null : typeof m == "string" || typeof m == "number" || typeof m == "bigint" ? We(null, m, null, null, m) : Array.isArray(m) ? We(we, { children: m }, null, null, null) : m.__b > 0 ? We(m.type, m.props, m.key, m.ref ? m.ref : null, m.__v) : m) != null) {
      if (m.__ = r, m.__b = r.__b + 1, (y = E[s]) === null || y && m.key == y.key && m.type === y.type)
        E[s] = void 0;
      else
        for (g = 0; g < R; g++) {
          if ((y = E[g]) && m.key == y.key && m.type === y.type) {
            E[g] = void 0;
            break;
          }
          y = null;
        }
      $t(e, m, y = y || lt, i, o, a, l, f, h), v = m.__e, (g = m.ref) && y.ref != g && (u || (u = []), y.ref && u.push(y.ref, null, m), u.push(g, m.__c || v, m)), v != null ? (S == null && (S = v), typeof m.type == "function" && m.__k === y.__k ? m.__d = f = Zr(m, f, e) : f = zr(e, m, y, E, v, f), typeof r.type == "function" && (r.__d = f)) : f && y.__e == f && f.parentNode != e && (f = Ye(y));
    }
  for (r.__e = S, s = R; s--; )
    E[s] != null && Gr(E[s], E[s]);
  if (u)
    for (s = 0; s < u.length; s++)
      Wr(u[s], u[++s], u[++s]);
}
function Zr(e, t, r) {
  for (var n, i = e.__k, o = 0; i && o < i.length; o++)
    (n = i[o]) && (n.__ = e, t = typeof n.type == "function" ? Zr(n, t, r) : zr(r, n, n, i, n.__e, t));
  return t;
}
function Le(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Array.isArray(e) ? e.some(function(r) {
    Le(r, t);
  }) : t.push(e)), t;
}
function zr(e, t, r, n, i, o) {
  var a, l, f;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (r == null || i != o || i.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(i), a = null;
      else {
        for (l = o, f = 0; (l = l.nextSibling) && f < n.length; f += 1)
          if (l == i)
            break e;
        e.insertBefore(i, o), a = o;
      }
  return a !== void 0 ? a : i.nextSibling;
}
function An(e, t, r, n, i) {
  var o;
  for (o in r)
    o === "children" || o === "key" || o in t || dt(e, o, null, r[o], n);
  for (o in t)
    i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || r[o] === t[o] || dt(e, o, t[o], r[o], n);
}
function qt(e, t, r) {
  t[0] === "-" ? e.setProperty(t, r) : e[t] = r == null ? "" : typeof r != "number" || En.test(t) ? r : r + "px";
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
            r && t in r || qt(e.style, t, "");
        if (r)
          for (t in r)
            n && r[t] === n[t] || qt(e.style, t, r[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = r, r ? n || e.addEventListener(t, o ? Kt : Xt, o) : e.removeEventListener(t, o ? Kt : Xt, o);
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
function Xt(e) {
  this.l[e.type + !1](x.event ? x.event(e) : e);
}
function Kt(e) {
  this.l[e.type + !0](x.event ? x.event(e) : e);
}
function $t(e, t, r, n, i, o, a, l, f) {
  var h, s, g, y, m, v, S, u, E, R, k, T, _, z, Q, U = t.type;
  if (t.constructor !== void 0)
    return null;
  r.__h != null && (f = r.__h, l = t.__e = r.__e, t.__h = null, o = [l]), (h = x.__b) && h(t);
  try {
    e:
      if (typeof U == "function") {
        if (u = t.props, E = (h = U.contextType) && n[h.__c], R = h ? E ? E.props.value : h.__ : n, r.__c ? S = (s = t.__c = r.__c).__ = s.__E : ("prototype" in U && U.prototype.render ? t.__c = s = new U(u, R) : (t.__c = s = new ue(u, R), s.constructor = U, s.render = xn), E && E.sub(s), s.props = u, s.state || (s.state = {}), s.context = R, s.__n = n, g = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), U.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ce({}, s.__s)), Ce(s.__s, U.getDerivedStateFromProps(u, s.__s))), y = s.props, m = s.state, g)
          U.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (U.getDerivedStateFromProps == null && u !== y && s.componentWillReceiveProps != null && s.componentWillReceiveProps(u, R), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(u, s.__s, R) === !1 || t.__v === r.__v) {
            for (s.props = u, s.state = s.__s, t.__v !== r.__v && (s.__d = !1), s.__v = t, t.__e = r.__e, t.__k = r.__k, t.__k.forEach(function(q) {
              q && (q.__ = t);
            }), k = 0; k < s._sb.length; k++)
              s.__h.push(s._sb[k]);
            s._sb = [], s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(u, s.__s, R), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(y, m, v);
          });
        }
        if (s.context = R, s.props = u, s.__v = t, s.__P = e, T = x.__r, _ = 0, "prototype" in U && U.prototype.render) {
          for (s.state = s.__s, s.__d = !1, T && T(t), h = s.render(s.props, s.state, s.context), z = 0; z < s._sb.length; z++)
            s.__h.push(s._sb[z]);
          s._sb = [];
        } else
          do
            s.__d = !1, T && T(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++_ < 25);
        s.state = s.__s, s.getChildContext != null && (n = Ce(Ce({}, n), s.getChildContext())), g || s.getSnapshotBeforeUpdate == null || (v = s.getSnapshotBeforeUpdate(y, m)), Q = h != null && h.type === we && h.key == null ? h.props.children : h, Ur(e, Array.isArray(Q) ? Q : [Q], t, r, n, i, o, a, l, f), s.base = t.__e, t.__h = null, s.__h.length && a.push(s), S && (s.__E = s.__ = null), s.__e = !1;
      } else
        o == null && t.__v === r.__v ? (t.__k = r.__k, t.__e = r.__e) : t.__e = Rn(r.__e, t, r, n, i, o, a, f);
    (h = x.diffed) && h(t);
  } catch (q) {
    t.__v = null, (f || o != null) && (t.__e = l, t.__h = !!f, o[o.indexOf(l)] = null), x.__e(q, t, r);
  }
}
function jr(e, t) {
  x.__c && x.__c(t, e), e.some(function(r) {
    try {
      e = r.__h, r.__h = [], e.some(function(n) {
        n.call(r);
      });
    } catch (n) {
      x.__e(n, r.__v);
    }
  });
}
function Rn(e, t, r, n, i, o, a, l) {
  var f, h, s, g = r.props, y = t.props, m = t.type, v = 0;
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
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", m) : document.createElement(m, y.is && y), o = null, l = !1;
  }
  if (m === null)
    g === y || l && e.data === y || (e.data = y);
  else {
    if (o = o && Ke.call(e.childNodes), h = (g = r.props || lt).dangerouslySetInnerHTML, s = y.dangerouslySetInnerHTML, !l) {
      if (o != null)
        for (g = {}, v = 0; v < e.attributes.length; v++)
          g[e.attributes[v].name] = e.attributes[v].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (An(e, y, g, i, l), s)
      t.__k = [];
    else if (v = t.props.children, Ur(e, Array.isArray(v) ? v : [v], t, r, n, i && m !== "foreignObject", o, a, o ? o[0] : r.__k && Ye(r, 0), l), o != null)
      for (v = o.length; v--; )
        o[v] != null && Fr(o[v]);
    l || ("value" in y && (v = y.value) !== void 0 && (v !== e.value || m === "progress" && !v || m === "option" && v !== g.value) && dt(e, "value", v, g.value, !1), "checked" in y && (v = y.checked) !== void 0 && v !== e.checked && dt(e, "checked", v, g.checked, !1));
  }
  return e;
}
function Wr(e, t, r) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (n) {
    x.__e(n, r);
  }
}
function Gr(e, t, r) {
  var n, i;
  if (x.unmount && x.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || Wr(n, null, t)), (n = e.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (o) {
        x.__e(o, t);
      }
    n.base = n.__P = null, e.__c = void 0;
  }
  if (n = e.__k)
    for (i = 0; i < n.length; i++)
      n[i] && Gr(n[i], t, r || typeof e.type != "function");
  r || e.__e == null || Fr(e.__e), e.__ = e.__e = e.__d = void 0;
}
function xn(e, t, r) {
  return this.constructor(e, r);
}
function Re(e, t, r) {
  var n, i, o;
  x.__ && x.__(e, t), i = (n = typeof r == "function") ? null : r && r.__k || t.__k, o = [], $t(t, e = (!n && r || t).__k = oe(we, null, [e]), i || lt, lt, t.ownerSVGElement !== void 0, !n && r ? [r] : i ? null : t.firstChild ? Ke.call(t.childNodes) : null, o, !n && r ? r : i ? i.__e : t.firstChild, n), jr(o, e);
}
function Ht(e, t) {
  Re(e, t, Ht);
}
function Ft(e, t, r) {
  var n, i, o, a = Ce({}, e.props);
  for (o in t)
    o == "key" ? n = t[o] : o == "ref" ? i = t[o] : a[o] = t[o];
  return arguments.length > 2 && (a.children = arguments.length > 3 ? Ke.call(arguments, 2) : r), We(e.type, a, n || e.key, i || e.ref, null);
}
function Tn(e, t) {
  var r = { __c: t = "__cC" + $r++, __: e, Consumer: function(n, i) {
    return n.children(i);
  }, Provider: function(n) {
    var i, o;
    return this.getChildContext || (i = [], (o = {})[t] = this, this.getChildContext = function() {
      return o;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && i.some(bt);
    }, this.sub = function(a) {
      i.push(a);
      var l = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        i.splice(i.indexOf(a), 1), l && l.call(a);
      };
    }), n.children;
  } };
  return r.Provider.__ = r.Consumer.contextType = r;
}
Ke = Hr.slice, x = { __e: function(e, t, r, n) {
  for (var i, o, a; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, n || {}), a = i.__d), a)
          return i.__E = i;
      } catch (l) {
        e = l;
      }
  throw e;
} }, Pr = 0, ue.prototype.setState = function(e, t) {
  var r;
  r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ce({}, this.state), typeof e == "function" && (e = e(Ce({}, r), this.props)), e && Ce(r, e), e != null && this.__v && (t && this._sb.push(t), bt(this));
}, ue.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), bt(this));
}, ue.prototype.render = we, je = [], ut.__r = 0, $r = 0;
function Bt() {
  return (Bt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
function kn(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, r = function(n, i) {
    if (n == null)
      return {};
    var o, a, l = {}, f = Object.keys(n);
    for (a = 0; a < f.length; a++)
      i.indexOf(o = f[a]) >= 0 || (l[o] = n[o]);
    return l;
  }(e, ["context", "children"]);
  return Ft(t, r);
}
function On() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = oe(kn, Bt({}, this._props, { context: e.detail.context }), function t(r, n) {
    if (r.nodeType === 3)
      return r.data;
    if (r.nodeType !== 1)
      return null;
    var i = [], o = {}, a = 0, l = r.attributes, f = r.childNodes;
    for (a = l.length; a--; )
      l[a].name !== "slot" && (o[l[a].name] = l[a].value, o[Yr(l[a].name)] = l[a].value);
    for (a = f.length; a--; ) {
      var h = t(f[a], null), s = f[a].slot;
      s ? o[s] = oe(Qt, { name: s }, h) : i[a] = h;
    }
    var g = n ? oe(Qt, null, i) : i;
    return oe(n || r.nodeName.toLowerCase(), o, g);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Ht : Re)(this._vdom, this._root);
}
function Yr(e) {
  return e.replace(/-(\w)/g, function(t, r) {
    return r ? r.toUpperCase() : "";
  });
}
function Mn(e, t, r) {
  if (this._vdom) {
    var n = {};
    n[e] = r = r ?? void 0, n[Yr(e)] = r, this._vdom = Ft(this._vdom, n), Re(this._vdom, this._root);
  }
}
function Dn() {
  Re(this._vdom = null, this._root);
}
function Qt(e, t) {
  var r = this;
  return oe("slot", Bt({}, e, { ref: function(n) {
    n ? (r.ref = n, r._listener || (r._listener = function(i) {
      i.stopPropagation(), i.detail.context = t;
    }, n.addEventListener("_preact", r._listener))) : r.ref.removeEventListener("_preact", r._listener);
  } }));
}
function Nn(e, t, r, n) {
  function i() {
    var o = Reflect.construct(HTMLElement, [], i);
    return o._vdomComponent = e, o._root = n && n.shadow ? o.attachShadow({ mode: "open" }) : o, o;
  }
  return (i.prototype = Object.create(HTMLElement.prototype)).constructor = i, i.prototype.connectedCallback = On, i.prototype.attributeChangedCallback = Mn, i.prototype.disconnectedCallback = Dn, r = r || e.observedAttributes || Object.keys(e.propTypes || {}), i.observedAttributes = r, r.forEach(function(o) {
    Object.defineProperty(i.prototype, o, { get: function() {
      return this._vdom.props[o];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(o, null, a) : (this._props || (this._props = {}), this._props[o] = a, this.connectedCallback());
      var l = typeof a;
      a != null && l !== "string" && l !== "boolean" && l !== "number" || this.setAttribute(o, a);
    } });
  }), customElements.define(t || e.tagName || e.displayName || e.name, i);
}
var At = /* @__PURE__ */ ((e) => (e.CONTINUE_DETECTION = "continue-detection", e.SWITCH_CAMERA = "switch-camera", e.TOGGLE_MIRROR = "toggle-mirror", e))(At || {}), Te = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", e.CONTROL = "document-auto-capture:control", e.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", e.DOCUMENT_DETECTION = "document-auto-capture:document-detection", e.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", e.STATE_CHANGED = "document-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", e))(Te || {});
const he = {
  CANDIDATE_SELECTION: "candidate_selection",
  DOCUMENT_CENTERING: "document_centering",
  DOCUMENT_TOO_CLOSE: "document_too_close",
  DOCUMENT_NOT_PRESENT: "document_not_present",
  DOCUMENT_TOO_FAR: "document_too_far",
  SHARPNESS_TOO_LOW: "sharpness_too_low",
  BRIGHTNESS_TOO_LOW: "brightness_too_low",
  BRIGHTNESS_TOO_HIGH: "brightness_too_high",
  HOTSPOTS_PRESENT: "hotspots_present"
}, be = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  WAITING: "WAITING",
  RUNNING: "RUNNING"
};
var qe = {}, In = {
  get exports() {
    return qe;
  },
  set exports(e) {
    qe = e;
  }
}, $ = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jt;
function Vn() {
  if (Jt)
    return $;
  Jt = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), s = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function S(u) {
    if (typeof u == "object" && u !== null) {
      var E = u.$$typeof;
      switch (E) {
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
                case l:
                case a:
                case f:
                case y:
                case g:
                case o:
                  return u;
                default:
                  return E;
              }
          }
        case t:
          return E;
      }
    }
  }
  return $.ContextConsumer = a, $.ContextProvider = o, $.Element = e, $.ForwardRef = f, $.Fragment = r, $.Lazy = y, $.Memo = g, $.Portal = t, $.Profiler = i, $.StrictMode = n, $.Suspense = h, $.SuspenseList = s, $.isAsyncMode = function() {
    return !1;
  }, $.isConcurrentMode = function() {
    return !1;
  }, $.isContextConsumer = function(u) {
    return S(u) === a;
  }, $.isContextProvider = function(u) {
    return S(u) === o;
  }, $.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === e;
  }, $.isForwardRef = function(u) {
    return S(u) === f;
  }, $.isFragment = function(u) {
    return S(u) === r;
  }, $.isLazy = function(u) {
    return S(u) === y;
  }, $.isMemo = function(u) {
    return S(u) === g;
  }, $.isPortal = function(u) {
    return S(u) === t;
  }, $.isProfiler = function(u) {
    return S(u) === i;
  }, $.isStrictMode = function(u) {
    return S(u) === n;
  }, $.isSuspense = function(u) {
    return S(u) === h;
  }, $.isSuspenseList = function(u) {
    return S(u) === s;
  }, $.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === r || u === i || u === n || u === h || u === s || u === m || typeof u == "object" && u !== null && (u.$$typeof === y || u.$$typeof === g || u.$$typeof === o || u.$$typeof === a || u.$$typeof === f || u.$$typeof === v || u.getModuleId !== void 0);
  }, $.typeOf = S, $;
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
var er;
function Pn() {
  return er || (er = 1, {}.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), s = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), v = !1, S = !1, u = !1, E = !1, R = !1, k;
    k = Symbol.for("react.module.reference");
    function T(L) {
      return !!(typeof L == "string" || typeof L == "function" || L === r || L === i || R || L === n || L === h || L === s || E || L === m || v || S || u || typeof L == "object" && L !== null && (L.$$typeof === y || L.$$typeof === g || L.$$typeof === o || L.$$typeof === a || L.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      L.$$typeof === k || L.getModuleId !== void 0));
    }
    function _(L) {
      if (typeof L == "object" && L !== null) {
        var D = L.$$typeof;
        switch (D) {
          case e:
            var G = L.type;
            switch (G) {
              case r:
              case i:
              case n:
              case h:
              case s:
                return G;
              default:
                var P = G && G.$$typeof;
                switch (P) {
                  case l:
                  case a:
                  case f:
                  case y:
                  case g:
                  case o:
                    return P;
                  default:
                    return D;
                }
            }
          case t:
            return D;
        }
      }
    }
    var z = a, Q = o, U = e, q = f, se = r, de = y, J = g, re = t, ie = i, X = n, ve = h, ne = s, K = !1, fe = !1;
    function ce(L) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ge(L) {
      return fe || (fe = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function A(L) {
      return _(L) === a;
    }
    function w(L) {
      return _(L) === o;
    }
    function b(L) {
      return typeof L == "object" && L !== null && L.$$typeof === e;
    }
    function O(L) {
      return _(L) === f;
    }
    function d(L) {
      return _(L) === r;
    }
    function I(L) {
      return _(L) === y;
    }
    function C(L) {
      return _(L) === g;
    }
    function Z(L) {
      return _(L) === t;
    }
    function V(L) {
      return _(L) === i;
    }
    function N(L) {
      return _(L) === n;
    }
    function p(L) {
      return _(L) === h;
    }
    function j(L) {
      return _(L) === s;
    }
    H.ContextConsumer = z, H.ContextProvider = Q, H.Element = U, H.ForwardRef = q, H.Fragment = se, H.Lazy = de, H.Memo = J, H.Portal = re, H.Profiler = ie, H.StrictMode = X, H.Suspense = ve, H.SuspenseList = ne, H.isAsyncMode = ce, H.isConcurrentMode = ge, H.isContextConsumer = A, H.isContextProvider = w, H.isElement = b, H.isForwardRef = O, H.isFragment = d, H.isLazy = I, H.isMemo = C, H.isPortal = Z, H.isProfiler = V, H.isStrictMode = N, H.isSuspense = p, H.isSuspenseList = j, H.isValidElementType = T, H.typeOf = _;
  }()), H;
}
(function(e) {
  ({}).NODE_ENV === "production" ? e.exports = Vn() : e.exports = Pn();
})(In);
var ke, W, yt, tr, Me = 0, qr = [], ot = [], rr = x.__b, nr = x.__r, or = x.diffed, ir = x.__c, ar = x.unmount;
function Pe(e, t) {
  x.__h && x.__h(W, e, Me || t), Me = 0;
  var r = W.__H || (W.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({ __V: ot }), r.__[e];
}
function _e(e) {
  return Me = 1, Xr(Kr, e);
}
function Xr(e, t, r) {
  var n = Pe(ke++, 2);
  if (n.t = e, !n.__c && (n.__ = [r ? r(t) : Kr(void 0, t), function(o) {
    var a = n.__N ? n.__N[0] : n.__[0], l = n.t(a, o);
    a !== l && (n.__N = [l, n.__[1]], n.__c.setState({}));
  }], n.__c = W, !W.u)) {
    W.u = !0;
    var i = W.shouldComponentUpdate;
    W.shouldComponentUpdate = function(o, a, l) {
      if (!n.__c.__H)
        return !0;
      var f = n.__c.__H.__.filter(function(s) {
        return s.__c;
      });
      if (f.every(function(s) {
        return !s.__N;
      }))
        return !i || i.call(this, o, a, l);
      var h = !1;
      return f.forEach(function(s) {
        if (s.__N) {
          var g = s.__[0];
          s.__ = s.__N, s.__N = void 0, g !== s.__[0] && (h = !0);
        }
      }), !(!h && n.__c.props === o) && (!i || i.call(this, o, a, l));
    };
  }
  return n.__N || n.__;
}
function De(e, t) {
  var r = Pe(ke++, 3);
  !x.__s && Ut(r.__H, t) && (r.__ = e, r.i = t, W.__H.__h.push(r));
}
function _t(e, t) {
  var r = Pe(ke++, 4);
  !x.__s && Ut(r.__H, t) && (r.__ = e, r.i = t, W.__h.push(r));
}
function pt(e) {
  return Me = 5, mt(function() {
    return { current: e };
  }, []);
}
function $n(e, t, r) {
  Me = 6, _t(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, r == null ? r : r.concat(e));
}
function mt(e, t) {
  var r = Pe(ke++, 7);
  return Ut(r.__H, t) ? (r.__V = e(), r.i = t, r.__h = e, r.__V) : r.__;
}
function Oe(e, t) {
  return Me = 8, mt(function() {
    return e;
  }, t);
}
function $e(e) {
  var t = W.context[e.__c], r = Pe(ke++, 9);
  return r.c = e, t ? (r.__ == null && (r.__ = !0, t.sub(W)), t.props.value) : e.__;
}
function Rt(e, t) {
  x.useDebugValue && x.useDebugValue(t ? t(e) : e);
}
function Hn() {
  var e = Pe(ke++, 11);
  if (!e.__) {
    for (var t = W.__v; t !== null && !t.__m && t.__ !== null; )
      t = t.__;
    var r = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + r[0] + "-" + r[1]++;
  }
  return e.__;
}
function Fn() {
  for (var e; e = qr.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(it), e.__H.__h.forEach(xt), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], x.__e(t, e.__v);
      }
}
x.__b = function(e) {
  W = null, rr && rr(e);
}, x.__r = function(e) {
  nr && nr(e), ke = 0;
  var t = (W = e.__c).__H;
  t && (yt === W ? (t.__h = [], W.__h = [], t.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.__V = ot, r.__N = r.i = void 0;
  })) : (t.__h.forEach(it), t.__h.forEach(xt), t.__h = [])), yt = W;
}, x.diffed = function(e) {
  or && or(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (qr.push(t) !== 1 && tr === x.requestAnimationFrame || ((tr = x.requestAnimationFrame) || Bn)(Fn)), t.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.__V !== ot && (r.__ = r.__V), r.i = void 0, r.__V = ot;
  })), yt = W = null;
}, x.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.forEach(it), r.__h = r.__h.filter(function(n) {
        return !n.__ || xt(n);
      });
    } catch (n) {
      t.some(function(i) {
        i.__h && (i.__h = []);
      }), t = [], x.__e(n, r.__v);
    }
  }), ir && ir(e, t);
}, x.unmount = function(e) {
  ar && ar(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      it(n);
    } catch (i) {
      t = i;
    }
  }), r.__H = void 0, t && x.__e(t, r.__v));
};
var sr = typeof requestAnimationFrame == "function";
function Bn(e) {
  var t, r = function() {
    clearTimeout(n), sr && cancelAnimationFrame(t), setTimeout(e);
  }, n = setTimeout(r, 100);
  sr && (t = requestAnimationFrame(r));
}
function it(e) {
  var t = W, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), W = t;
}
function xt(e) {
  var t = W;
  e.__c = e.__(), W = t;
}
function Ut(e, t) {
  return !e || e.length !== t.length || t.some(function(r, n) {
    return r !== e[n];
  });
}
function Kr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Qr(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}
function Tt(e, t) {
  for (var r in e)
    if (r !== "__source" && !(r in t))
      return !0;
  for (var n in t)
    if (n !== "__source" && e[n] !== t[n])
      return !0;
  return !1;
}
function Ct(e, t) {
  return e === t && (e !== 0 || 1 / e == 1 / t) || e != e && t != t;
}
function kt(e) {
  this.props = e;
}
function Un(e, t) {
  function r(i) {
    var o = this.props.ref, a = o == i.ref;
    return !a && o && (o.call ? o(null) : o.current = null), t ? !t(this.props, i) || !a : Tt(this.props, i);
  }
  function n(i) {
    return this.shouldComponentUpdate = r, oe(e, i);
  }
  return n.displayName = "Memo(" + (e.displayName || e.name) + ")", n.prototype.isReactComponent = !0, n.__f = !0, n;
}
(kt.prototype = new ue()).isPureReactComponent = !0, kt.prototype.shouldComponentUpdate = function(e, t) {
  return Tt(this.props, e) || Tt(this.state, t);
};
var cr = x.__b;
x.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), cr && cr(e);
};
var Zn = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function zn(e) {
  function t(r) {
    var n = Qr({}, r);
    return delete n.ref, e(n, r.ref || null);
  }
  return t.$$typeof = Zn, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var lr = function(e, t) {
  return e == null ? null : Le(Le(e).map(t));
}, jn = { map: lr, forEach: lr, count: function(e) {
  return e ? Le(e).length : 0;
}, only: function(e) {
  var t = Le(e);
  if (t.length !== 1)
    throw "Children.only";
  return t[0];
}, toArray: Le }, Wn = x.__e;
x.__e = function(e, t, r, n) {
  if (e.then) {
    for (var i, o = t; o = o.__; )
      if ((i = o.__c) && i.__c)
        return t.__e == null && (t.__e = r.__e, t.__k = r.__k), i.__c(e, t);
  }
  Wn(e, t, r, n);
};
var ur = x.unmount;
function Jr(e, t, r) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), e.__c.__H = null), (e = Qr({}, e)).__c != null && (e.__c.__P === r && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(n) {
    return Jr(n, t, r);
  })), e;
}
function en(e, t, r) {
  return e && (e.__v = null, e.__k = e.__k && e.__k.map(function(n) {
    return en(n, t, r);
  }), e.__c && e.__c.__P === t && (e.__e && r.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = r)), e;
}
function at() {
  this.__u = 0, this.t = null, this.__b = null;
}
function tn(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Gn(e) {
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
function Be() {
  this.u = null, this.o = null;
}
x.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), ur && ur(e);
}, (at.prototype = new ue()).__c = function(e, t) {
  var r = t.__c, n = this;
  n.t == null && (n.t = []), n.t.push(r);
  var i = tn(n.__v), o = !1, a = function() {
    o || (o = !0, r.__R = null, i ? i(l) : l());
  };
  r.__R = a;
  var l = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var h = n.state.__a;
        n.__v.__k[0] = en(h, h.__c.__P, h.__c.__O);
      }
      var s;
      for (n.setState({ __a: n.__b = null }); s = n.t.pop(); )
        s.forceUpdate();
    }
  }, f = t.__h === !0;
  n.__u++ || f || n.setState({ __a: n.__b = n.__v.__k[0] }), e.then(a, a);
}, at.prototype.componentWillUnmount = function() {
  this.t = [];
}, at.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = Jr(this.__b, r, n.__O = n.__P);
    }
    this.__b = null;
  }
  var i = t.__a && oe(we, null, e.fallback);
  return i && (i.__h = null), [oe(we, null, t.__a ? null : e.children), i];
};
var dr = function(e, t, r) {
  if (++r[1] === r[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (r = e.u; r; ) {
      for (; r.length > 3; )
        r.pop()();
      if (r[1] < r[0])
        break;
      e.u = r = r[2];
    }
};
function Yn(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function qn(e) {
  var t = this, r = e.i;
  t.componentWillUnmount = function() {
    Re(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== r && t.componentWillUnmount(), e.__v ? (t.l || (t.i = r, t.l = { nodeType: 1, parentNode: r, childNodes: [], appendChild: function(n) {
    this.childNodes.push(n), t.i.appendChild(n);
  }, insertBefore: function(n, i) {
    this.childNodes.push(n), t.i.appendChild(n);
  }, removeChild: function(n) {
    this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), t.i.removeChild(n);
  } }), Re(oe(Yn, { context: t.context }, e.__v), t.l)) : t.l && t.componentWillUnmount();
}
function Xn(e, t) {
  var r = oe(qn, { __v: e, i: t });
  return r.containerInfo = t, r;
}
(Be.prototype = new ue()).__a = function(e) {
  var t = this, r = tn(t.__v), n = t.o.get(e);
  return n[0]++, function(i) {
    var o = function() {
      t.props.revealOrder ? (n.push(i), dr(t, e, n)) : i();
    };
    r ? r(o) : o();
  };
}, Be.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = Le(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var r = t.length; r--; )
    this.o.set(t[r], this.u = [1, 0, this.u]);
  return e.children;
}, Be.prototype.componentDidUpdate = Be.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, r) {
    dr(e, r, t);
  });
};
var rn = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Kn = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Qn = typeof document < "u", Jn = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(e);
};
function eo(e, t, r) {
  return t.__k == null && (t.textContent = ""), Re(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
function to(e, t, r) {
  return Ht(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
ue.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(ue.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var fr = x.event;
function ro() {
}
function no() {
  return this.cancelBubble;
}
function oo() {
  return this.defaultPrevented;
}
x.event = function(e) {
  return fr && (e = fr(e)), e.persist = ro, e.isPropagationStopped = no, e.isDefaultPrevented = oo, e.nativeEvent = e;
};
var nn, hr = { configurable: !0, get: function() {
  return this.class;
} }, _r = x.vnode;
x.vnode = function(e) {
  var t = e.type, r = e.props, n = r;
  if (typeof t == "string") {
    var i = t.indexOf("-") === -1;
    for (var o in n = {}, r) {
      var a = r[o];
      Qn && o === "children" && t === "noscript" || o === "value" && "defaultValue" in r && a == null || (o === "defaultValue" && "value" in r && r.value == null ? o = "value" : o === "download" && a === !0 ? a = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !Jn(r.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o) ? o = o.toLowerCase() : i && Kn.test(o) ? o = o.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : a === null && (a = void 0), /^oninput$/i.test(o) && (o = o.toLowerCase(), n[o] && (o = "oninputCapture")), n[o] = a);
    }
    t == "select" && n.multiple && Array.isArray(n.value) && (n.value = Le(r.children).forEach(function(l) {
      l.props.selected = n.value.indexOf(l.props.value) != -1;
    })), t == "select" && n.defaultValue != null && (n.value = Le(r.children).forEach(function(l) {
      l.props.selected = n.multiple ? n.defaultValue.indexOf(l.props.value) != -1 : n.defaultValue == l.props.value;
    })), e.props = n, r.class != r.className && (hr.enumerable = "className" in r, r.className != null && (n.class = r.className), Object.defineProperty(n, "className", hr));
  }
  e.$$typeof = rn, _r && _r(e);
};
var pr = x.__r;
x.__r = function(e) {
  pr && pr(e), nn = e.__c;
};
var io = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return nn.__n[e.__c].props.value;
} } } };
function ao(e) {
  return oe.bind(null, e);
}
function on(e) {
  return !!e && e.$$typeof === rn;
}
function so(e) {
  return on(e) ? Ft.apply(null, arguments) : e;
}
function co(e) {
  return !!e.__k && (Re(null, e), !0);
}
function lo(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var uo = function(e, t) {
  return e(t);
}, fo = function(e, t) {
  return e(t);
}, ho = we;
function an(e) {
  e();
}
function _o(e) {
  return e;
}
function po() {
  return [!1, an];
}
var mo = _t;
function vo(e, t) {
  var r = t(), n = _e({ h: { __: r, v: t } }), i = n[0].h, o = n[1];
  return _t(function() {
    i.__ = r, i.v = t, Ct(i.__, t()) || o({ h: i });
  }, [e, r, t]), De(function() {
    return Ct(i.__, i.v()) || o({ h: i }), e(function() {
      Ct(i.__, i.v()) || o({ h: i });
    });
  }, [e]), r;
}
var Qe = { useState: _e, useId: Hn, useReducer: Xr, useEffect: De, useLayoutEffect: _t, useInsertionEffect: mo, useTransition: po, useDeferredValue: _o, useSyncExternalStore: vo, startTransition: an, useRef: pt, useImperativeHandle: $n, useMemo: mt, useCallback: Oe, useContext: $e, useDebugValue: Rt, version: "17.0.2", Children: jn, render: eo, hydrate: to, unmountComponentAtNode: co, createPortal: Xn, createElement: oe, createContext: Tn, createFactory: ao, cloneElement: so, createRef: bn, Fragment: we, isValidElement: on, findDOMNode: lo, Component: ue, PureComponent: kt, memo: Un, forwardRef: zn, flushSync: fo, unstable_batchedUpdates: uo, StrictMode: ho, Suspense: at, SuspenseList: Be, lazy: Gn, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: io };
function go(e) {
  function t(A, w, b, O, d) {
    for (var I = 0, C = 0, Z = 0, V = 0, N, p, j = 0, L = 0, D, G = D = N = 0, P = 0, ee = 0, He = 0, te = 0, Je = b.length, Fe = Je - 1, le, M = "", Y = "", vt = "", gt = "", Ee; P < Je; ) {
      if (p = b.charCodeAt(P), P === Fe && C + V + Z + I !== 0 && (C !== 0 && (p = C === 47 ? 10 : 47), V = Z = I = 0, Je++, Fe++), C + V + Z + I === 0) {
        if (P === Fe && (0 < ee && (M = M.replace(y, "")), 0 < M.trim().length)) {
          switch (p) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              M += b.charAt(P);
          }
          p = 59;
        }
        switch (p) {
          case 123:
            for (M = M.trim(), N = M.charCodeAt(0), D = 1, te = ++P; P < Je; ) {
              switch (p = b.charCodeAt(P)) {
                case 123:
                  D++;
                  break;
                case 125:
                  D--;
                  break;
                case 47:
                  switch (p = b.charCodeAt(P + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (G = P + 1; G < Fe; ++G)
                          switch (b.charCodeAt(G)) {
                            case 47:
                              if (p === 42 && b.charCodeAt(G - 1) === 42 && P + 2 !== G) {
                                P = G + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (p === 47) {
                                P = G + 1;
                                break e;
                              }
                          }
                        P = G;
                      }
                  }
                  break;
                case 91:
                  p++;
                case 40:
                  p++;
                case 34:
                case 39:
                  for (; P++ < Fe && b.charCodeAt(P) !== p; )
                    ;
              }
              if (D === 0)
                break;
              P++;
            }
            switch (D = b.substring(te, P), N === 0 && (N = (M = M.replace(g, "").trim()).charCodeAt(0)), N) {
              case 64:
                switch (0 < ee && (M = M.replace(y, "")), p = M.charCodeAt(1), p) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ee = w;
                    break;
                  default:
                    ee = ve;
                }
                if (D = t(w, ee, D, p, d + 1), te = D.length, 0 < K && (ee = r(ve, M, He), Ee = l(3, D, ee, w, re, J, te, p, d, O), M = ee.join(""), Ee !== void 0 && (te = (D = Ee.trim()).length) === 0 && (p = 0, D = "")), 0 < te)
                  switch (p) {
                    case 115:
                      M = M.replace(z, a);
                    case 100:
                    case 109:
                    case 45:
                      D = M + "{" + D + "}";
                      break;
                    case 107:
                      M = M.replace(R, "$1 $2"), D = M + "{" + D + "}", D = X === 1 || X === 2 && o("@" + D, 3) ? "@-webkit-" + D + "@" + D : "@" + D;
                      break;
                    default:
                      D = M + D, O === 112 && (D = (Y += D, ""));
                  }
                else
                  D = "";
                break;
              default:
                D = t(w, r(w, M, He), D, O, d + 1);
            }
            vt += D, D = He = ee = G = N = 0, M = "", p = b.charCodeAt(++P);
            break;
          case 125:
          case 59:
            if (M = (0 < ee ? M.replace(y, "") : M).trim(), 1 < (te = M.length))
              switch (G === 0 && (N = M.charCodeAt(0), N === 45 || 96 < N && 123 > N) && (te = (M = M.replace(" ", ":")).length), 0 < K && (Ee = l(1, M, w, A, re, J, Y.length, O, d, O)) !== void 0 && (te = (M = Ee.trim()).length) === 0 && (M = "\0\0"), N = M.charCodeAt(0), p = M.charCodeAt(1), N) {
                case 0:
                  break;
                case 64:
                  if (p === 105 || p === 99) {
                    gt += M + b.charAt(P);
                    break;
                  }
                default:
                  M.charCodeAt(te - 1) !== 58 && (Y += i(M, N, p, M.charCodeAt(2)));
              }
            He = ee = G = N = 0, M = "", p = b.charCodeAt(++P);
        }
      }
      switch (p) {
        case 13:
        case 10:
          C === 47 ? C = 0 : 1 + N === 0 && O !== 107 && 0 < M.length && (ee = 1, M += "\0"), 0 < K * ce && l(0, M, w, A, re, J, Y.length, O, d, O), J = 1, re++;
          break;
        case 59:
        case 125:
          if (C + V + Z + I === 0) {
            J++;
            break;
          }
        default:
          switch (J++, le = b.charAt(P), p) {
            case 9:
            case 32:
              if (V + I + C === 0)
                switch (j) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    le = "";
                    break;
                  default:
                    p !== 32 && (le = " ");
                }
              break;
            case 0:
              le = "\\0";
              break;
            case 12:
              le = "\\f";
              break;
            case 11:
              le = "\\v";
              break;
            case 38:
              V + C + I === 0 && (ee = He = 1, le = "\f" + le);
              break;
            case 108:
              if (V + C + I + ie === 0 && 0 < G)
                switch (P - G) {
                  case 2:
                    j === 112 && b.charCodeAt(P - 3) === 58 && (ie = j);
                  case 8:
                    L === 111 && (ie = L);
                }
              break;
            case 58:
              V + C + I === 0 && (G = P);
              break;
            case 44:
              C + Z + V + I === 0 && (ee = 1, le += "\r");
              break;
            case 34:
            case 39:
              C === 0 && (V = V === p ? 0 : V === 0 ? p : V);
              break;
            case 91:
              V + C + Z === 0 && I++;
              break;
            case 93:
              V + C + Z === 0 && I--;
              break;
            case 41:
              V + C + I === 0 && Z--;
              break;
            case 40:
              if (V + C + I === 0) {
                if (N === 0)
                  switch (2 * j + 3 * L) {
                    case 533:
                      break;
                    default:
                      N = 1;
                  }
                Z++;
              }
              break;
            case 64:
              C + Z + V + I + G + D === 0 && (D = 1);
              break;
            case 42:
            case 47:
              if (!(0 < V + I + Z))
                switch (C) {
                  case 0:
                    switch (2 * p + 3 * b.charCodeAt(P + 1)) {
                      case 235:
                        C = 47;
                        break;
                      case 220:
                        te = P, C = 42;
                    }
                    break;
                  case 42:
                    p === 47 && j === 42 && te + 2 !== P && (b.charCodeAt(te + 2) === 33 && (Y += b.substring(te, P + 1)), le = "", C = 0);
                }
          }
          C === 0 && (M += le);
      }
      L = j, j = p, P++;
    }
    if (te = Y.length, 0 < te) {
      if (ee = w, 0 < K && (Ee = l(2, Y, ee, A, re, J, te, O, d, O), Ee !== void 0 && (Y = Ee).length === 0))
        return gt + Y + vt;
      if (Y = ee.join(",") + "{" + Y + "}", X * ie !== 0) {
        switch (X !== 2 || o(Y, 2) || (ie = 0), ie) {
          case 111:
            Y = Y.replace(T, ":-moz-$1") + Y;
            break;
          case 112:
            Y = Y.replace(k, "::-webkit-input-$1") + Y.replace(k, "::-moz-$1") + Y.replace(k, ":-ms-input-$1") + Y;
        }
        ie = 0;
      }
    }
    return gt + Y + vt;
  }
  function r(A, w, b) {
    var O = w.trim().split(u);
    w = O;
    var d = O.length, I = A.length;
    switch (I) {
      case 0:
      case 1:
        var C = 0;
        for (A = I === 0 ? "" : A[0] + " "; C < d; ++C)
          w[C] = n(A, w[C], b).trim();
        break;
      default:
        var Z = C = 0;
        for (w = []; C < d; ++C)
          for (var V = 0; V < I; ++V)
            w[Z++] = n(A[V] + " ", O[C], b).trim();
    }
    return w;
  }
  function n(A, w, b) {
    var O = w.charCodeAt(0);
    switch (33 > O && (O = (w = w.trim()).charCodeAt(0)), O) {
      case 38:
        return w.replace(E, "$1" + A.trim());
      case 58:
        return A.trim() + w.replace(E, "$1" + A.trim());
      default:
        if (0 < 1 * b && 0 < w.indexOf("\f"))
          return w.replace(E, (A.charCodeAt(0) === 58 ? "" : "$1") + A.trim());
    }
    return A + w;
  }
  function i(A, w, b, O) {
    var d = A + ";", I = 2 * w + 3 * b + 4 * O;
    if (I === 944) {
      A = d.indexOf(":", 9) + 1;
      var C = d.substring(A, d.length - 1).trim();
      return C = d.substring(0, A).trim() + C + ";", X === 1 || X === 2 && o(C, 1) ? "-webkit-" + C + C : C;
    }
    if (X === 0 || X === 2 && !o(d, 1))
      return d;
    switch (I) {
      case 1015:
        return d.charCodeAt(10) === 97 ? "-webkit-" + d + d : d;
      case 951:
        return d.charCodeAt(3) === 116 ? "-webkit-" + d + d : d;
      case 963:
        return d.charCodeAt(5) === 110 ? "-webkit-" + d + d : d;
      case 1009:
        if (d.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + d + d;
      case 978:
        return "-webkit-" + d + "-moz-" + d + d;
      case 1019:
      case 983:
        return "-webkit-" + d + "-moz-" + d + "-ms-" + d + d;
      case 883:
        if (d.charCodeAt(8) === 45)
          return "-webkit-" + d + d;
        if (0 < d.indexOf("image-set(", 11))
          return d.replace(de, "$1-webkit-$2") + d;
        break;
      case 932:
        if (d.charCodeAt(4) === 45)
          switch (d.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + d.replace("-grow", "") + "-webkit-" + d + "-ms-" + d.replace("grow", "positive") + d;
            case 115:
              return "-webkit-" + d + "-ms-" + d.replace("shrink", "negative") + d;
            case 98:
              return "-webkit-" + d + "-ms-" + d.replace("basis", "preferred-size") + d;
          }
        return "-webkit-" + d + "-ms-" + d + d;
      case 964:
        return "-webkit-" + d + "-ms-flex-" + d + d;
      case 1023:
        if (d.charCodeAt(8) !== 99)
          break;
        return C = d.substring(d.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + C + "-webkit-" + d + "-ms-flex-pack" + C + d;
      case 1005:
        return v.test(d) ? d.replace(m, ":-webkit-") + d.replace(m, ":-moz-") + d : d;
      case 1e3:
        switch (C = d.substring(13).trim(), w = C.indexOf("-") + 1, C.charCodeAt(0) + C.charCodeAt(w)) {
          case 226:
            C = d.replace(_, "tb");
            break;
          case 232:
            C = d.replace(_, "tb-rl");
            break;
          case 220:
            C = d.replace(_, "lr");
            break;
          default:
            return d;
        }
        return "-webkit-" + d + "-ms-" + C + d;
      case 1017:
        if (d.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (w = (d = A).length - 10, C = (d.charCodeAt(w) === 33 ? d.substring(0, w) : d).substring(A.indexOf(":", 7) + 1).trim(), I = C.charCodeAt(0) + (C.charCodeAt(7) | 0)) {
          case 203:
            if (111 > C.charCodeAt(8))
              break;
          case 115:
            d = d.replace(C, "-webkit-" + C) + ";" + d;
            break;
          case 207:
          case 102:
            d = d.replace(C, "-webkit-" + (102 < I ? "inline-" : "") + "box") + ";" + d.replace(C, "-webkit-" + C) + ";" + d.replace(C, "-ms-" + C + "box") + ";" + d;
        }
        return d + ";";
      case 938:
        if (d.charCodeAt(5) === 45)
          switch (d.charCodeAt(6)) {
            case 105:
              return C = d.replace("-items", ""), "-webkit-" + d + "-webkit-box-" + C + "-ms-flex-" + C + d;
            case 115:
              return "-webkit-" + d + "-ms-flex-item-" + d.replace(U, "") + d;
            default:
              return "-webkit-" + d + "-ms-flex-line-pack" + d.replace("align-content", "").replace(U, "") + d;
          }
        break;
      case 973:
      case 989:
        if (d.charCodeAt(3) !== 45 || d.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (se.test(A) === !0)
          return (C = A.substring(A.indexOf(":") + 1)).charCodeAt(0) === 115 ? i(A.replace("stretch", "fill-available"), w, b, O).replace(":fill-available", ":stretch") : d.replace(C, "-webkit-" + C) + d.replace(C, "-moz-" + C.replace("fill-", "")) + d;
        break;
      case 962:
        if (d = "-webkit-" + d + (d.charCodeAt(5) === 102 ? "-ms-" + d : "") + d, b + O === 211 && d.charCodeAt(13) === 105 && 0 < d.indexOf("transform", 10))
          return d.substring(0, d.indexOf(";", 27) + 1).replace(S, "$1-webkit-$2") + d;
    }
    return d;
  }
  function o(A, w) {
    var b = A.indexOf(w === 1 ? ":" : "{"), O = A.substring(0, w !== 3 ? b : 10);
    return b = A.substring(b + 1, A.length - 1), fe(w !== 2 ? O : O.replace(q, "$1"), b, w);
  }
  function a(A, w) {
    var b = i(w, w.charCodeAt(0), w.charCodeAt(1), w.charCodeAt(2));
    return b !== w + ";" ? b.replace(Q, " or ($1)").substring(4) : "(" + w + ")";
  }
  function l(A, w, b, O, d, I, C, Z, V, N) {
    for (var p = 0, j = w, L; p < K; ++p)
      switch (L = ne[p].call(s, A, j, b, O, d, I, C, Z, V, N)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          j = L;
      }
    if (j !== w)
      return j;
  }
  function f(A) {
    switch (A) {
      case void 0:
      case null:
        K = ne.length = 0;
        break;
      default:
        if (typeof A == "function")
          ne[K++] = A;
        else if (typeof A == "object")
          for (var w = 0, b = A.length; w < b; ++w)
            f(A[w]);
        else
          ce = !!A | 0;
    }
    return f;
  }
  function h(A) {
    return A = A.prefix, A !== void 0 && (fe = null, A ? typeof A != "function" ? X = 1 : (X = 2, fe = A) : X = 0), h;
  }
  function s(A, w) {
    var b = A;
    if (33 > b.charCodeAt(0) && (b = b.trim()), ge = b, b = [ge], 0 < K) {
      var O = l(-1, w, b, b, re, J, 0, 0, 0, 0);
      O !== void 0 && typeof O == "string" && (w = O);
    }
    var d = t(ve, b, w, 0, 0);
    return 0 < K && (O = l(-2, d, b, b, re, J, d.length, 0, 0, 0), O !== void 0 && (d = O)), ge = "", ie = 0, J = re = 1, d;
  }
  var g = /^\0+/g, y = /[\0\r\f]/g, m = /: */g, v = /zoo|gra/, S = /([,: ])(transform)/g, u = /,\r+?/g, E = /([\t\r\n ])*\f?&/g, R = /@(k\w+)\s*(\S*)\s*/, k = /::(place)/g, T = /:(read-only)/g, _ = /[svh]\w+-[tblr]{2}/, z = /\(\s*(.*)\s*\)/g, Q = /([\s\S]*?);/g, U = /-self|flex-/g, q = /[^]*?(:[rp][el]a[\w-]+)[^]*/, se = /stretch|:\s*\w+\-(?:conte|avail)/, de = /([^-])(image-set\()/, J = 1, re = 1, ie = 0, X = 1, ve = [], ne = [], K = 0, fe = null, ce = 0, ge = "";
  return s.use = f, s.set = h, e !== void 0 && h(e), s;
}
var yo = {
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
function Co(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Lo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, mr = /* @__PURE__ */ Co(
  function(e) {
    return Lo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ot = {}, So = {
  get exports() {
    return Ot;
  },
  set exports(e) {
    Ot = e;
  }
}, F = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vr;
function wo() {
  if (vr)
    return F;
  vr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, s = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, u = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function k(_) {
    if (typeof _ == "object" && _ !== null) {
      var z = _.$$typeof;
      switch (z) {
        case t:
          switch (_ = _.type, _) {
            case f:
            case h:
            case n:
            case o:
            case i:
            case g:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case l:
                case s:
                case v:
                case m:
                case a:
                  return _;
                default:
                  return z;
              }
          }
        case r:
          return z;
      }
    }
  }
  function T(_) {
    return k(_) === h;
  }
  return F.AsyncMode = f, F.ConcurrentMode = h, F.ContextConsumer = l, F.ContextProvider = a, F.Element = t, F.ForwardRef = s, F.Fragment = n, F.Lazy = v, F.Memo = m, F.Portal = r, F.Profiler = o, F.StrictMode = i, F.Suspense = g, F.isAsyncMode = function(_) {
    return T(_) || k(_) === f;
  }, F.isConcurrentMode = T, F.isContextConsumer = function(_) {
    return k(_) === l;
  }, F.isContextProvider = function(_) {
    return k(_) === a;
  }, F.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === t;
  }, F.isForwardRef = function(_) {
    return k(_) === s;
  }, F.isFragment = function(_) {
    return k(_) === n;
  }, F.isLazy = function(_) {
    return k(_) === v;
  }, F.isMemo = function(_) {
    return k(_) === m;
  }, F.isPortal = function(_) {
    return k(_) === r;
  }, F.isProfiler = function(_) {
    return k(_) === o;
  }, F.isStrictMode = function(_) {
    return k(_) === i;
  }, F.isSuspense = function(_) {
    return k(_) === g;
  }, F.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === n || _ === h || _ === o || _ === i || _ === g || _ === y || typeof _ == "object" && _ !== null && (_.$$typeof === v || _.$$typeof === m || _.$$typeof === a || _.$$typeof === l || _.$$typeof === s || _.$$typeof === u || _.$$typeof === E || _.$$typeof === R || _.$$typeof === S);
  }, F.typeOf = k, F;
}
var B = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gr;
function Eo() {
  return gr || (gr = 1, {}.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, s = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, u = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function k(p) {
      return typeof p == "string" || typeof p == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      p === n || p === h || p === o || p === i || p === g || p === y || typeof p == "object" && p !== null && (p.$$typeof === v || p.$$typeof === m || p.$$typeof === a || p.$$typeof === l || p.$$typeof === s || p.$$typeof === u || p.$$typeof === E || p.$$typeof === R || p.$$typeof === S);
    }
    function T(p) {
      if (typeof p == "object" && p !== null) {
        var j = p.$$typeof;
        switch (j) {
          case t:
            var L = p.type;
            switch (L) {
              case f:
              case h:
              case n:
              case o:
              case i:
              case g:
                return L;
              default:
                var D = L && L.$$typeof;
                switch (D) {
                  case l:
                  case s:
                  case v:
                  case m:
                  case a:
                    return D;
                  default:
                    return j;
                }
            }
          case r:
            return j;
        }
      }
    }
    var _ = f, z = h, Q = l, U = a, q = t, se = s, de = n, J = v, re = m, ie = r, X = o, ve = i, ne = g, K = !1;
    function fe(p) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ce(p) || T(p) === f;
    }
    function ce(p) {
      return T(p) === h;
    }
    function ge(p) {
      return T(p) === l;
    }
    function A(p) {
      return T(p) === a;
    }
    function w(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }
    function b(p) {
      return T(p) === s;
    }
    function O(p) {
      return T(p) === n;
    }
    function d(p) {
      return T(p) === v;
    }
    function I(p) {
      return T(p) === m;
    }
    function C(p) {
      return T(p) === r;
    }
    function Z(p) {
      return T(p) === o;
    }
    function V(p) {
      return T(p) === i;
    }
    function N(p) {
      return T(p) === g;
    }
    B.AsyncMode = _, B.ConcurrentMode = z, B.ContextConsumer = Q, B.ContextProvider = U, B.Element = q, B.ForwardRef = se, B.Fragment = de, B.Lazy = J, B.Memo = re, B.Portal = ie, B.Profiler = X, B.StrictMode = ve, B.Suspense = ne, B.isAsyncMode = fe, B.isConcurrentMode = ce, B.isContextConsumer = ge, B.isContextProvider = A, B.isElement = w, B.isForwardRef = b, B.isFragment = O, B.isLazy = d, B.isMemo = I, B.isPortal = C, B.isProfiler = Z, B.isStrictMode = V, B.isSuspense = N, B.isValidElementType = k, B.typeOf = T;
  }()), B;
}
(function(e) {
  ({}).NODE_ENV === "production" ? e.exports = wo() : e.exports = Eo();
})(So);
var Zt = Ot, bo = {
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
}, Ao = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Ro = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, sn = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, zt = {};
zt[Zt.ForwardRef] = Ro;
zt[Zt.Memo] = sn;
function yr(e) {
  return Zt.isMemo(e) ? sn : zt[e.$$typeof] || bo;
}
var xo = Object.defineProperty, To = Object.getOwnPropertyNames, Cr = Object.getOwnPropertySymbols, ko = Object.getOwnPropertyDescriptor, Oo = Object.getPrototypeOf, Lr = Object.prototype;
function cn(e, t, r) {
  if (typeof t != "string") {
    if (Lr) {
      var n = Oo(t);
      n && n !== Lr && cn(e, n, r);
    }
    var i = To(t);
    Cr && (i = i.concat(Cr(t)));
    for (var o = yr(e), a = yr(t), l = 0; l < i.length; ++l) {
      var f = i[l];
      if (!Ao[f] && !(r && r[f]) && !(a && a[f]) && !(o && o[f])) {
        var h = ko(t, f);
        try {
          xo(e, f, h);
        } catch {
        }
      }
    }
  }
  return e;
}
var Mo = cn;
function pe() {
  return (pe = Object.assign || function(e) {
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
}, Mt = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !qe.typeOf(e);
}, ft = Object.freeze([]), Ae = Object.freeze({});
function Ne(e) {
  return typeof e == "function";
}
function Dt(e) {
  return {}.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function jt(e) {
  return e && typeof e.styledComponentId == "string";
}
var Ie = typeof process < "u" && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR) || "data-styled", Wt = typeof window < "u" && "HTMLElement" in window, Do = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && {}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && {}.REACT_APP_SC_DISABLE_SPEEDY !== "" ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" && {}.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && {}.SC_DISABLE_SPEEDY !== void 0 && {}.SC_DISABLE_SPEEDY !== "" ? {}.SC_DISABLE_SPEEDY !== "false" && {}.SC_DISABLE_SPEEDY : {}.NODE_ENV !== "production"), No = {}.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Io() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, n = arguments.length; r < n; r += 1)
    t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(i) {
    e = e.replace(/%[a-z]/, i);
  }), e;
}
function Se(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  throw {}.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(Io.apply(void 0, [No[e]].concat(r)).trim());
}
var Vo = function() {
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
        (a <<= 1) < 0 && Se(16, "" + r);
      this.groupSizes = new Uint32Array(a), this.groupSizes.set(i), this.length = a;
      for (var l = o; l < a; l++)
        this.groupSizes[l] = 0;
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
    for (var i = this.groupSizes[r], o = this.indexOfGroup(r), a = o + i, l = o; l < a; l++)
      n += this.tag.getRule(l) + `/*!sc*/
`;
    return n;
  }, e;
}(), st = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map(), Ge = 1, tt = function(e) {
  if (st.has(e))
    return st.get(e);
  for (; ht.has(Ge); )
    Ge++;
  var t = Ge++;
  return {}.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && Se(16, "" + t), st.set(e, t), ht.set(t, e), t;
}, Po = function(e) {
  return ht.get(e);
}, $o = function(e, t) {
  t >= Ge && (Ge = t + 1), st.set(e, t), ht.set(t, e);
}, Ho = "style[" + Ie + '][data-styled-version="5.3.6"]', Fo = new RegExp("^" + Ie + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Bo = function(e, t, r) {
  for (var n, i = r.split(","), o = 0, a = i.length; o < a; o++)
    (n = i[o]) && e.registerName(t, n);
}, Uo = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], i = 0, o = r.length; i < o; i++) {
    var a = r[i].trim();
    if (a) {
      var l = a.match(Fo);
      if (l) {
        var f = 0 | parseInt(l[1], 10), h = l[2];
        f !== 0 && ($o(h, f), Bo(e, h, l[3]), e.getTag().insertRules(f, n)), n.length = 0;
      } else
        n.push(a);
    }
  }
}, Zo = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, ln = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), i = function(l) {
    for (var f = l.childNodes, h = f.length; h >= 0; h--) {
      var s = f[h];
      if (s && s.nodeType === 1 && s.hasAttribute(Ie))
        return s;
    }
  }(r), o = i !== void 0 ? i.nextSibling : null;
  n.setAttribute(Ie, "active"), n.setAttribute("data-styled-version", "5.3.6");
  var a = Zo();
  return a && n.setAttribute("nonce", a), r.insertBefore(n, o), n;
}, zo = function() {
  function e(r) {
    var n = this.element = ln(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(i) {
      if (i.sheet)
        return i.sheet;
      for (var o = document.styleSheets, a = 0, l = o.length; a < l; a++) {
        var f = o[a];
        if (f.ownerNode === i)
          return f;
      }
      Se(17);
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
}(), jo = function() {
  function e(r) {
    var n = this.element = ln(r);
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
}(), Wo = function() {
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
}(), wr = Wt, Go = { isServer: !Wt, useCSSOMInjection: !Do }, un = function() {
  function e(r, n, i) {
    r === void 0 && (r = Ae), n === void 0 && (n = {}), this.options = pe({}, Go, {}, r), this.gs = n, this.names = new Map(i), this.server = !!r.isServer, !this.server && Wt && wr && (wr = !1, function(o) {
      for (var a = document.querySelectorAll(Ho), l = 0, f = a.length; l < f; l++) {
        var h = a[l];
        h && h.getAttribute(Ie) !== "active" && (Uo(o, h), h.parentNode && h.parentNode.removeChild(h));
      }
    }(this));
  }
  e.registerId = function(r) {
    return tt(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(pe({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (i = (n = this.options).isServer, o = n.useCSSOMInjection, a = n.target, r = i ? new Wo(a) : o ? new zo(a) : new jo(a), new Vo(r)));
    var r, n, i, o, a;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (tt(r), this.names.has(r))
      this.names.get(r).add(n);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(n), this.names.set(r, i);
    }
  }, t.insertRules = function(r, n, i) {
    this.registerName(r, n), this.getTag().insertRules(tt(r), i);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(tt(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), i = n.length, o = "", a = 0; a < i; a++) {
        var l = Po(a);
        if (l !== void 0) {
          var f = r.names.get(l), h = n.getGroup(a);
          if (f && h && f.size) {
            var s = Ie + ".g" + a + '[id="' + l + '"]', g = "";
            f !== void 0 && f.forEach(function(y) {
              y.length > 0 && (g += y + ",");
            }), o += "" + h + s + '{content:"' + g + `"}/*!sc*/
`;
          }
        }
      }
      return o;
    }(this);
  }, e;
}(), Yo = /(a)(d)/gi, Er = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Nt(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    r = Er(t % 52) + r;
  return (Er(t % 52) + r).replace(Yo, "$1-$2");
}
var xe = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, dn = function(e) {
  return xe(5381, e);
};
function qo(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Ne(r) && !jt(r))
      return !1;
  }
  return !0;
}
var Xo = dn("5.3.6"), Ko = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = {}.NODE_ENV === "production" && (n === void 0 || n.isStatic) && qo(t), this.componentId = r, this.baseHash = xe(Xo, r), this.baseStyle = n, un.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var i = this.componentId, o = [];
    if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(i, this.staticRulesId))
        o.push(this.staticRulesId);
      else {
        var a = Ve(this.rules, t, r, n).join(""), l = Nt(xe(this.baseHash, a) >>> 0);
        if (!r.hasNameForId(i, l)) {
          var f = n(a, "." + l, void 0, i);
          r.insertRules(i, l, f);
        }
        o.push(l), this.staticRulesId = l;
      }
    else {
      for (var h = this.rules.length, s = xe(this.baseHash, n.hash), g = "", y = 0; y < h; y++) {
        var m = this.rules[y];
        if (typeof m == "string")
          g += m, {}.NODE_ENV !== "production" && (s = xe(s, m + y));
        else if (m) {
          var v = Ve(m, t, r, n), S = Array.isArray(v) ? v.join("") : v;
          s = xe(s, S + y), g += S;
        }
      }
      if (g) {
        var u = Nt(s >>> 0);
        if (!r.hasNameForId(i, u)) {
          var E = n(g, "." + u, void 0, i);
          r.insertRules(i, u, E);
        }
        o.push(u);
      }
    }
    return o.join(" ");
  }, e;
}(), Qo = /^\s*\/\/.*$/gm, Jo = [":", "[", ".", "#"];
function ei(e) {
  var t, r, n, i, o = e === void 0 ? Ae : e, a = o.options, l = a === void 0 ? Ae : a, f = o.plugins, h = f === void 0 ? ft : f, s = new go(l), g = [], y = function(S) {
    function u(E) {
      if (E)
        try {
          S(E + "}");
        } catch {
        }
    }
    return function(E, R, k, T, _, z, Q, U, q, se) {
      switch (E) {
        case 1:
          if (q === 0 && R.charCodeAt(0) === 64)
            return S(R + ";"), "";
          break;
        case 2:
          if (U === 0)
            return R + "/*|*/";
          break;
        case 3:
          switch (U) {
            case 102:
            case 112:
              return S(k[0] + R), "";
            default:
              return R + (se === 0 ? "/*|*/" : "");
          }
        case -2:
          R.split("/*|*/}").forEach(u);
      }
    };
  }(function(S) {
    g.push(S);
  }), m = function(S, u, E) {
    return u === 0 && Jo.indexOf(E[r.length]) !== -1 || E.match(i) ? S : "." + t;
  };
  function v(S, u, E, R) {
    R === void 0 && (R = "&");
    var k = S.replace(Qo, ""), T = u && E ? E + " " + u + " { " + k + " }" : k;
    return t = R, r = u, n = new RegExp("\\" + r + "\\b", "g"), i = new RegExp("(\\" + r + "\\b){2,}"), s(E || !u ? "" : u, T);
  }
  return s.use([].concat(h, [function(S, u, E) {
    S === 2 && E.length && E[0].lastIndexOf(r) > 0 && (E[0] = E[0].replace(n, m));
  }, y, function(S) {
    if (S === -2) {
      var u = g;
      return g = [], u;
    }
  }])), v.hash = h.length ? h.reduce(function(S, u) {
    return u.name || Se(15), xe(S, u.name);
  }, 5381).toString() : "", v;
}
var fn = Qe.createContext();
fn.Consumer;
var hn = Qe.createContext(), ti = (hn.Consumer, new un()), It = ei();
function ri() {
  return $e(fn) || ti;
}
function ni() {
  return $e(hn) || It;
}
var oi = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(i, o) {
      o === void 0 && (o = It);
      var a = n.name + o.hash;
      i.hasNameForId(n.id, a) || i.insertRules(n.id, a, o(n.rules, a, "@keyframes"));
    }, this.toString = function() {
      return Se(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = It), this.name + t.hash;
  }, e;
}(), ii = /([A-Z])/, ai = /([A-Z])/g, si = /^ms-/, ci = function(e) {
  return "-" + e.toLowerCase();
};
function br(e) {
  return ii.test(e) ? e.replace(ai, ci).replace(si, "-ms-") : e;
}
var Ar = function(e) {
  return e == null || e === !1 || e === "";
};
function Ve(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var i, o = [], a = 0, l = e.length; a < l; a += 1)
      (i = Ve(e[a], t, r, n)) !== "" && (Array.isArray(i) ? o.push.apply(o, i) : o.push(i));
    return o;
  }
  if (Ar(e))
    return "";
  if (jt(e))
    return "." + e.styledComponentId;
  if (Ne(e)) {
    if (typeof (h = e) != "function" || h.prototype && h.prototype.isReactComponent || !t)
      return e;
    var f = e(t);
    return {}.NODE_ENV !== "production" && qe.isElement(f) && console.warn(Dt(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Ve(f, t, r, n);
  }
  var h;
  return e instanceof oi ? r ? (e.inject(r, n), e.getName(n)) : e : Mt(e) ? function s(g, y) {
    var m, v, S = [];
    for (var u in g)
      g.hasOwnProperty(u) && !Ar(g[u]) && (Array.isArray(g[u]) && g[u].isCss || Ne(g[u]) ? S.push(br(u) + ":", g[u], ";") : Mt(g[u]) ? S.push.apply(S, s(g[u], u)) : S.push(br(u) + ": " + (m = u, (v = g[u]) == null || typeof v == "boolean" || v === "" ? "" : typeof v != "number" || v === 0 || m in yo ? String(v).trim() : v + "px") + ";"));
    return y ? [y + " {"].concat(S, ["}"]) : S;
  }(e) : e.toString();
}
var Rr = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function li(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return Ne(e) || Mt(e) ? Rr(Ve(Sr(ft, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Rr(Ve(Sr(e, r)));
}
var xr = /invalid hook call/i, rt = /* @__PURE__ */ new Set(), ui = function(e, t) {
  if ({}.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var i = !0;
      console.error = function(o) {
        if (xr.test(o))
          i = !1, rt.delete(r);
        else {
          for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), f = 1; f < a; f++)
            l[f - 1] = arguments[f];
          n.apply(void 0, [o].concat(l));
        }
      }, pt(), i && !rt.has(r) && (console.warn(r), rt.add(r));
    } catch (o) {
      xr.test(o.message) && rt.delete(r);
    } finally {
      console.error = n;
    }
  }
}, di = function(e, t, r) {
  return r === void 0 && (r = Ae), e.theme !== r.theme && e.theme || t || r.theme;
}, fi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, hi = /(^-|-$)/g;
function Lt(e) {
  return e.replace(fi, "-").replace(hi, "");
}
var _i = function(e) {
  return Nt(dn(e) >>> 0);
};
function nt(e) {
  return typeof e == "string" && ({}.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Vt = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, pi = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function mi(e, t, r) {
  var n = e[r];
  Vt(t) && Vt(n) ? _n(n, t) : e[r] = t;
}
function _n(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  for (var i = 0, o = r; i < o.length; i++) {
    var a = o[i];
    if (Vt(a))
      for (var l in a)
        pi(l) && mi(e, a[l], l);
  }
  return e;
}
var Xe = Qe.createContext();
Xe.Consumer;
function vi(e) {
  var t = $e(Xe), r = mt(function() {
    return function(n, i) {
      if (!n)
        return Se(14);
      if (Ne(n)) {
        var o = n(i);
        return {}.NODE_ENV === "production" || o !== null && !Array.isArray(o) && typeof o == "object" ? o : Se(7);
      }
      return Array.isArray(n) || typeof n != "object" ? Se(8) : i ? pe({}, i, {}, n) : n;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? Qe.createElement(Xe.Provider, { value: r }, e.children) : null;
}
var St = {};
function pn(e, t, r) {
  var n = jt(e), i = !nt(e), o = t.attrs, a = o === void 0 ? ft : o, l = t.componentId, f = l === void 0 ? function(R, k) {
    var T = typeof R != "string" ? "sc" : Lt(R);
    St[T] = (St[T] || 0) + 1;
    var _ = T + "-" + _i("5.3.6" + T + St[T]);
    return k ? k + "-" + _ : _;
  }(t.displayName, t.parentComponentId) : l, h = t.displayName, s = h === void 0 ? function(R) {
    return nt(R) ? "styled." + R : "Styled(" + Dt(R) + ")";
  }(e) : h, g = t.displayName && t.componentId ? Lt(t.displayName) + "-" + t.componentId : t.componentId || f, y = n && e.attrs ? Array.prototype.concat(e.attrs, a).filter(Boolean) : a, m = t.shouldForwardProp;
  n && e.shouldForwardProp && (m = t.shouldForwardProp ? function(R, k, T) {
    return e.shouldForwardProp(R, k, T) && t.shouldForwardProp(R, k, T);
  } : e.shouldForwardProp);
  var v, S = new Ko(r, g, n ? e.componentStyle : void 0), u = S.isStatic && a.length === 0, E = function(R, k) {
    return function(T, _, z, Q) {
      var U = T.attrs, q = T.componentStyle, se = T.defaultProps, de = T.foldedComponentIds, J = T.shouldForwardProp, re = T.styledComponentId, ie = T.target;
      ({}).NODE_ENV !== "production" && Rt(re);
      var X = function(O, d, I) {
        O === void 0 && (O = Ae);
        var C = pe({}, d, { theme: O }), Z = {};
        return I.forEach(function(V) {
          var N, p, j, L = V;
          for (N in Ne(L) && (L = L(C)), L)
            C[N] = Z[N] = N === "className" ? (p = Z[N], j = L[N], p && j ? p + " " + j : p || j) : L[N];
        }), [C, Z];
      }(di(_, $e(Xe), se) || Ae, _, U), ve = X[0], ne = X[1], K = function(O, d, I, C) {
        var Z = ri(), V = ni(), N = d ? O.generateAndInjectStyles(Ae, Z, V) : O.generateAndInjectStyles(I, Z, V);
        return {}.NODE_ENV !== "production" && Rt(N), {}.NODE_ENV !== "production" && !d && C && C(N), N;
      }(q, Q, ve, {}.NODE_ENV !== "production" ? T.warnTooManyClasses : void 0), fe = z, ce = ne.$as || _.$as || ne.as || _.as || ie, ge = nt(ce), A = ne !== _ ? pe({}, _, {}, ne) : _, w = {};
      for (var b in A)
        b[0] !== "$" && b !== "as" && (b === "forwardedAs" ? w.as = A[b] : (J ? J(b, mr, ce) : !ge || mr(b)) && (w[b] = A[b]));
      return _.style && ne.style !== _.style && (w.style = pe({}, _.style, {}, ne.style)), w.className = Array.prototype.concat(de, re, K !== re ? K : null, _.className, ne.className).filter(Boolean).join(" "), w.ref = fe, oe(ce, w);
    }(v, R, k, u);
  };
  return E.displayName = s, (v = Qe.forwardRef(E)).attrs = y, v.componentStyle = S, v.displayName = s, v.shouldForwardProp = m, v.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : ft, v.styledComponentId = g, v.target = n ? e.target : e, v.withComponent = function(R) {
    var k = t.componentId, T = function(z, Q) {
      if (z == null)
        return {};
      var U, q, se = {}, de = Object.keys(z);
      for (q = 0; q < de.length; q++)
        U = de[q], Q.indexOf(U) >= 0 || (se[U] = z[U]);
      return se;
    }(t, ["componentId"]), _ = k && k + "-" + (nt(R) ? R : Lt(Dt(R)));
    return pn(R, pe({}, T, { attrs: y, componentId: _ }), r);
  }, Object.defineProperty(v, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(R) {
    this._foldedDefaultProps = n ? _n({}, e.defaultProps, R) : R;
  } }), {}.NODE_ENV !== "production" && (ui(s, g), v.warnTooManyClasses = function(R, k) {
    var T = {}, _ = !1;
    return function(z) {
      if (!_ && (T[z] = !0, Object.keys(T).length >= 200)) {
        var Q = k ? ' with the id of "' + k + '"' : "";
        console.warn("Over 200 classes were generated for component " + R + Q + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), _ = !0, T = {};
      }
    };
  }(s, g)), v.toString = function() {
    return "." + v.styledComponentId;
  }, i && Mo(v, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), v;
}
var Pt = function(e) {
  return function t(r, n, i) {
    if (i === void 0 && (i = Ae), !qe.isValidElementType(n))
      return Se(1, String(n));
    var o = function() {
      return r(n, i, li.apply(void 0, arguments));
    };
    return o.withConfig = function(a) {
      return t(r, n, pe({}, i, {}, a));
    }, o.attrs = function(a) {
      return t(r, n, pe({}, i, { attrs: Array.prototype.concat(i.attrs, a).filter(Boolean) }));
    }, o;
  }(pn, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Pt[e] = Pt(e);
});
var gi = function() {
  return $e(Xe);
};
({}).NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), {}.NODE_ENV !== "production" && {}.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const me = Pt;
var yi = 0;
function c(e, t, r, n, i) {
  var o, a, l = {};
  for (a in t)
    a == "ref" ? o = t[a] : l[a] = t[a];
  var f = { type: e, props: l, key: r, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --yi, __source: i, __self: n };
  if (typeof e == "function" && (o = e.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return x.vnode && x.vnode(f), f;
}
const mn = ({
  svgSize: e
}) => c("svg", {
  fill: "none",
  height: e,
  viewBox: "0 0 16 14",
  width: e,
  xmlns: "http://www.w3.org/2000/svg",
  children: c("path", {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })
}), ae = {
  ID_CORNERS: "id-corners",
  ID_DASH: "id-dash",
  ID_DOT: "id-dot",
  ID_SOLID: "id-solid",
  ID_PHOTO_ROUNDED: "id-photo-rounded",
  ID_CORNERS_ROUNDED: "id-corners-rounded",
  ID_DASH_ROUNDED: "id-dash-rounded",
  ID_DOT_ROUNDED: "id-dot-rounded",
  ID_SOLID_ROUNDED_BACK: "id-solid-rounded-back",
  ID_SOLID_ROUNDED: "id-solid-rounded",
  PASSPORT_SOLID_BACK: "passport-solid-back",
  PASSPORT_SOLID_BACK_BLANK: "passport-solid-back-blank"
}, Tr = 0.24, Ci = 24, Li = 2, wt = 14, kr = 5, Or = 0.027;
var ye = /* @__PURE__ */ ((e) => (e[e.S = 300] = "S", e[e.M = 400] = "M", e[e.L = 500] = "L", e[e.Default = 600] = "Default", e))(ye || {});
const Ue = {
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
}, Si = {
  [he.CANDIDATE_SELECTION]: "Hold still…",
  [he.DOCUMENT_CENTERING]: "Center document",
  [he.DOCUMENT_TOO_CLOSE]: "Move back",
  [he.DOCUMENT_NOT_PRESENT]: "Scan document",
  [he.DOCUMENT_TOO_FAR]: "Move closer",
  [he.SHARPNESS_TOO_LOW]: "More light needed",
  [he.BRIGHTNESS_TOO_LOW]: "More light needed",
  [he.BRIGHTNESS_TOO_HIGH]: "Less light needed",
  [he.HOTSPOTS_PRESENT]: "Avoid reflections"
}, Mr = {
  loading: {
    text: "Loading. Please wait.",
    visible: !0
  },
  waiting: {
    text: "Waiting for input",
    visible: !0
  }
}, wi = ae.ID_CORNERS_ROUNDED, vn = (e) => e ? e.width < e.height ? Math.max(wt, kr + e.width * Or) : Math.max(wt, kr + e.height * Or) : wt, Ei = (e) => e > ye.Default ? Ue[ye.Default] : e > ye.L ? Ue[ye.L] : e > ye.M ? Ue[ye.M] : Ue[ye.S], bi = (e) => {
  if (!e)
    return Ue[ye.Default];
  const t = Math.max(e.width, e.height);
  return Ei(t);
}, Ai = me.div`
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
`, Ri = me.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, xi = me.p`
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
`, gn = ({
  fontSize: e,
  Icon: t,
  isCameraReady: r,
  position: n = "absolute",
  text: i
}) => c(Ai, {
  isCameraReady: r,
  position: n,
  children: c(Ri, {
    children: [t ? c(t, {
      svgSize: e * 2
    }) : null, c(xi, {
      fontSize: e,
      children: i
    })]
  })
}), yn = ({
  fontSize: e,
  text: t = "An unknown error has occurred"
}) => c(gn, {
  fontSize: e,
  Icon: mn,
  position: "relative",
  text: t
});
class Ti extends ue {
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
    return this.state.hasError ? c(yn, {
      fontSize: vn(this.props.videoElementSize),
      Icon: mn,
      isCameraReady: !1
    }) : this.props.children;
  }
}
const ki = ({
  children: e,
  theme: t,
  videoElementSize: r
}) => c(vi, {
  theme: t,
  children: c(Ti, {
    videoElementSize: r,
    children: e
  })
}), Ze = (e, t) => {
  const r = pt(t);
  De(() => {
    r.current = t;
  }, [t]), De(
    () => {
      const n = (i) => r.current(i);
      return document.addEventListener(e, n), () => {
        document.removeEventListener(e, n);
      };
    },
    [e]
    // Re-run if eventName
  );
}, Oi = (e) => {
  const [t, r] = _e(), n = Oe((i) => {
    var o;
    r((o = i.detail) == null ? void 0 : o.size);
  }, [r]);
  return Ze(e, n), t;
}, Mi = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, Et = {
  colors: Mi
}, Di = (e) => e != null && e.theme ? {
  ...Et,
  ...e.theme,
  colors: {
    ...Et.colors,
    ...e.theme.colors
  }
} : Et, Ni = 1.5, Ii = 0.85, Dr = 1e3, Vi = (e) => e < Dr ? Dr : e, Pi = (e, t) => e < t ? e : t, $i = ({
  height: e,
  width: t
}) => {
  let r;
  return t > e ? r = Vi(e) : r = t, {
    width: r,
    height: Pi(e, r)
  };
}, Hi = (e) => {
  const r = $i(e).width * Ii, n = (e.width - r) / 2, i = r / Ni, o = (e.height - i) / 2;
  return {
    shiftX: n,
    shiftY: o,
    width: r,
    height: i
  };
}, Fi = (e) => {
  const {
    height: t,
    shiftX: r,
    shiftY: n,
    width: i
  } = Hi(e);
  return {
    shiftX: r / e.width,
    shiftY: n / e.height,
    width: i / e.width,
    height: t / e.height
  };
}, Cn = (e, t) => {
  document.dispatchEvent(new CustomEvent(e, {
    detail: t
  }));
}, Gt = class {
  constructor() {
    et(this, "lastDetails", {});
    et(this, "delayedTime", 0);
  }
  static getInstance() {
    return this._instance || (this._instance = new Gt()), this._instance;
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
    this.isDetailChanged(t, r) && Cn(t, r);
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
let ct = Gt;
et(ct, "_instance");
ct.getInstance();
const Nr = (e, t) => {
  Cn(e, {
    instruction: t
  });
};
class Bi {
  static async getVideoInputDeviceList() {
    return (await navigator.mediaDevices.enumerateDevices()).filter((r) => r.kind === "videoinput");
  }
}
const Ui = () => {
  const [e, t] = _e(!1);
  return De(() => {
    (async () => {
      (await Bi.getVideoInputDeviceList()).length > 1 && t(!0);
    })();
  }, []), e;
}, Zi = ({
  size: e
}) => c("svg", {
  fill: "none",
  height: e,
  viewBox: "0 0 52 52",
  width: e,
  xmlns: "http://www.w3.org/2000/svg",
  children: [c("path", {
    d: "M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z",
    fill: "#131313",
    fillOpacity: "0.3"
  }), c("circle", {
    cx: "17.5",
    cy: "24.5",
    fill: "white",
    r: "1.5"
  }), c("path", {
    d: "M15 17H16C19.5 17 23 21 23 29C22.5 29 21.5 29 20 29C20 29 20.25 33 19.5 34.5C18.75 36 16 36 16 36H15",
    stroke: "white",
    strokeWidth: "2"
  }), c("circle", {
    fill: "white",
    r: "1.5",
    transform: "matrix(-1 0 0 1 34.5 24.5)"
  }), c("path", {
    d: "M37 17H36C32.5 17 29 21 29 29C29.5 29 30.5 29 32 29C32 29 31.75 33 32.5 34.5C33.25 36 36 36 36 36H37",
    stroke: "white",
    strokeWidth: "2"
  })]
}), zi = ({
  size: e
}) => c("svg", {
  fill: "none",
  height: e,
  viewBox: "0 0 52 52",
  width: e,
  xmlns: "http://www.w3.org/2000/svg",
  children: [c("path", {
    d: "M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z",
    fill: "#131313",
    fillOpacity: "0.3"
  }), c("path", {
    d: "M15 21.375C15 19.7181 16.3431 18.375 18 18.375H20.3222C21.1014 18.375 21.8096 17.9225 22.137 17.2155L22.163 17.1595C22.4904 16.4525 23.1986 16 23.9778 16H28.0222C28.8014 16 29.5096 16.4525 29.837 17.1595L29.863 17.2155C30.1904 17.9225 30.8986 18.375 31.6778 18.375H34C35.6569 18.375 37 19.7181 37 21.375V33C37 34.6569 35.6569 36 34 36H18C16.3431 36 15 34.6569 15 33V21.375Z",
    stroke: "white",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }), c("path", {
    d: "M31.25 27C31.25 24.1005 28.8995 21.75 26 21.75C24.4024 21.75 22.9715 22.4636 22.0086 23.5894M20.75 27C20.75 29.8995 23.1005 32.25 26 32.25C27.5958 32.25 29.0253 31.538 29.9881 30.4144",
    stroke: "white",
    strokeLinecap: "round",
    strokeWidth: "1.5"
  }), c("path", {
    d: "M30.0835 26.4167L31.2502 28.1667L32.4168 26.4167",
    stroke: "white",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  }), c("path", {
    d: "M19.5835 27.5833L20.7502 25.8333L21.9168 27.5833",
    stroke: "white",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  })]
}), Ln = me.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-right: ${(e) => e.marginRight ? `${e.marginRight}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, ji = ({
  size: e,
  ...t
}) => c(Ln, {
  ...t,
  children: c(Zi, {
    size: e
  })
}), Wi = ({
  size: e,
  ...t
}) => c(Ln, {
  ...t,
  children: c(zi, {
    size: e
  })
}), Gi = me.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.padding}px`};
  z-index: 2;
`, Yi = ({
  customControlEvent: e,
  videoElementSize: t
}) => {
  const r = Ui(), {
    buttonPadding: n,
    iconSize: i,
    marginRight: o
  } = bi(t), a = () => {
    Nr(e, At.TOGGLE_MIRROR);
  }, l = () => {
    Nr(e, At.SWITCH_CAMERA);
  };
  return c(Gi, {
    padding: n,
    children: [c(ji, {
      marginRight: r ? o : 0,
      onClick: a,
      size: i
    }), r && c(Wi, {
      onClick: l,
      size: i
    })]
  });
}, qi = me.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, Xi = ({
  svgSize: e
}) => c(qi, {
  children: c("svg", {
    fill: "none",
    height: e,
    viewBox: "0 0 48 48",
    width: e,
    xmlns: "http://www.w3.org/2000/svg",
    children: [c("path", {
      d: "M30.9229 9.75026C30.9229 12.3736 28.7533 14.5002 26.0767 14.5002C23.4003 14.5002 21.2307 12.3736 21.2307 9.75026C21.2307 7.12664 23.4003 5 26.0767 5C28.7533 5 30.9229 7.12664 30.9229 9.75026Z",
      fill: "currentColor"
    }), c("path", {
      d: "M40.6155 15.8556C40.6155 18.1044 38.7559 19.9273 36.4618 19.9273C34.1675 19.9273 32.3079 18.1044 32.3079 15.8556C32.3079 13.607 34.1675 11.7842 36.4618 11.7842C38.7559 11.7842 40.6155 13.607 40.6155 15.8556Z",
      fill: "currentColor"
    }), c("path", {
      d: "M42 27.3921C42 29.2659 40.4502 30.785 38.5386 30.785C36.6267 30.785 35.0769 29.2659 35.0769 27.3921C35.0769 25.5181 36.6267 23.999 38.5386 23.999C40.4502 23.999 42 25.5181 42 27.3921Z",
      fill: "currentColor"
    }), c("path", {
      d: "M35.0766 37.5712C35.0766 39.0704 33.837 40.2858 32.3075 40.2858C30.7779 40.2858 29.5383 39.0704 29.5383 37.5712C29.5383 36.0723 30.7779 34.8569 32.3075 34.8569C33.837 34.8569 35.0766 36.0723 35.0766 37.5712Z",
      fill: "currentColor"
    }), c("path", {
      d: "M22.6154 40.2858C22.6154 41.7848 21.3756 43.0001 19.846 43.0001C18.3168 43.0001 17.0769 41.7848 17.0769 40.2858C17.0769 38.7866 18.3168 37.5713 19.846 37.5713C21.3756 37.5713 22.6154 38.7866 22.6154 40.2858Z",
      fill: "currentColor"
    }), c("path", {
      d: "M11.5382 32.8216C11.5382 33.9457 10.6085 34.8573 9.46137 34.8573C8.31426 34.8573 7.38452 33.9457 7.38452 32.8216C7.38452 31.6972 8.31426 30.7856 9.46137 30.7856C10.6085 30.7856 11.5382 31.6972 11.5382 32.8216Z",
      fill: "currentColor"
    }), c("path", {
      d: "M8.76913 21.2849C8.76913 22.0345 8.14932 22.642 7.38456 22.642C6.6198 22.642 6 22.0345 6 21.2849C6 20.5353 6.61981 19.9277 7.38456 19.9277C8.14933 19.9277 8.76913 20.5353 8.76913 21.2849Z",
      fill: "currentColor"
    }), c("path", {
      d: "M15.6927 11.7844C15.6927 12.534 15.0729 13.1415 14.3081 13.1415C13.5434 13.1415 12.9236 12.534 12.9236 11.7844C12.9236 11.0348 13.5434 10.4272 14.3081 10.4272C15.0729 10.4272 15.6927 11.0348 15.6927 11.7844Z",
      fill: "currentColor"
    })]
  })
}), Ki = ({
  appState: e,
  appStateInstructions: t,
  fontSize: r
}) => {
  const n = e === be.ERROR || e === be.RUNNING;
  return !e || n || !t[e].visible ? null : c(gn, {
    fontSize: r,
    Icon: e === be.LOADING ? Xi : void 0,
    isCameraReady: !0,
    text: t[e].text
  });
}, Qi = me.div`
  position: absolute;
  left: 50%;
  ${(e) => e.cssTop ? `top: ${e.cssTop}%;` : ""}
  ${(e) => e.cssBottom ? `bottom: ${e.cssBottom}%;` : ""}
  transform: translateX(-50%)
    translateY(
      ${(e) => e.cssTop || e.isPortrait ? "-50%" : e.isPortrait ? "" : "50%"}
    );
  z-index: 2;
`, Ji = me.div`
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
`, ea = ({
  children: e,
  fontSize: t,
  isInCandidateSelection: r,
  ...n
}) => c(Qi, {
  ...n,
  children: c(Ji, {
    fontSize: t,
    isInCandidateSelection: r,
    children: e
  })
}), ta = () => c("svg", {
  fill: "none",
  height: "104",
  preserveAspectRatio: "none",
  viewBox: "0 0 163 104",
  width: "163",
  xmlns: "http://www.w3.org/2000/svg",
  children: [c("rect", {
    fill: "white",
    height: "104",
    opacity: "0.1",
    rx: "4",
    width: "163"
  }), c("path", {
    d: "M138.294 1H160C161.105 1 162 1.89543 162 3V24.5385M24.7055 1H3C1.89543 1 1 1.89543 1 3V24.5385M1 79.4615V101C1 102.105 1.89543 103 3 103H24.7055M162 79.4615V101C162 102.105 161.105 103 160 103H138.294",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  })]
}), ra = () => c("svg", {
  fill: "none",
  height: "104",
  preserveAspectRatio: "none",
  viewBox: "0 0 163 104",
  width: "163",
  xmlns: "http://www.w3.org/2000/svg",
  children: [c("rect", {
    fill: "white",
    height: "104",
    opacity: "0.1",
    rx: "16",
    width: "163"
  }), c("path", {
    d: "M138 1H146C154.837 1 162 8.16344 162 17V25M25 1H17C8.16344 1 1 8.16344 1 17V25M1 79V87C1 95.8366 8.16344 103 17 103H25M162 79V87C162 95.8366 154.837 103 146 103H138",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2"
  })]
}), na = () => c("svg", {
  fill: "none",
  height: "104",
  preserveAspectRatio: "none",
  viewBox: "0 0 163 104",
  width: "163",
  xmlns: "http://www.w3.org/2000/svg",
  children: c("rect", {
    height: "102",
    rx: "1",
    stroke: "currentColor",
    strokeDasharray: "8 8",
    strokeLinecap: "square",
    strokeWidth: "2",
    width: "161",
    x: "1",
    y: "1"
  })
}), oa = () => c("svg", {
  fill: "none",
  height: "104",
  preserveAspectRatio: "none",
  viewBox: "0 0 163 104",
  width: "163",
  xmlns: "http://www.w3.org/2000/svg",
  children: c("rect", {
    height: "102",
    rx: "15",
    stroke: "currentColor",
    strokeDasharray: "16 16",
    strokeLinecap: "square",
    strokeWidth: "2",
    width: "161",
    x: "1",
    y: "1"
  })
}), ia = () => c("svg", {
  fill: "none",
  height: "104",
  preserveAspectRatio: "none",
  viewBox: "0 0 163 104",
  width: "163",
  xmlns: "http://www.w3.org/2000/svg",
  children: c("rect", {
    height: "102",
    stroke: "currentColor",
    strokeDasharray: "1 10 1 10",
    strokeLinecap: "square",
    strokeWidth: "2",
    width: "161",
    x: "1",
    y: "1"
  })
}), aa = () => c("svg", {
  fill: "none",
  height: "104",
  preserveAspectRatio: "none",
  viewBox: "0 0 163 104",
  width: "163",
  xmlns: "http://www.w3.org/2000/svg",
  children: c("rect", {
    height: "102",
    rx: "15",
    stroke: "currentColor",
    strokeDasharray: "1 10 1 10",
    strokeLinecap: "square",
    strokeWidth: "2",
    width: "161",
    x: "1",
    y: "1"
  })
}), sa = () => c("svg", {
  fill: "none",
  height: "104",
  preserveAspectRatio: "none",
  viewBox: "0 0 163 104",
  width: "163",
  xmlns: "http://www.w3.org/2000/svg",
  children: [c("rect", {
    fill: "white",
    height: "104",
    opacity: "0.1",
    rx: "16",
    width: "163"
  }), c("path", {
    d: "M138 1H146C154.837 1 162 8.16344 162 17V25M25 1H17C8.16344 1 1 8.16344 1 17V25M1 79V87C1 95.8366 8.16344 103 17 103H25M162 79V87C162 95.8366 154.837 103 146 103H138",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2"
  }), c("rect", {
    height: "58",
    rx: "4",
    stroke: "currentColor",
    width: "48",
    x: "11",
    y: "24"
  })]
}), ca = () => c("svg", {
  fill: "none",
  height: "104",
  preserveAspectRatio: "none",
  viewBox: "0 0 163 104",
  width: "163",
  xmlns: "http://www.w3.org/2000/svg",
  children: c("rect", {
    height: "102",
    rx: "1",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2",
    width: "161",
    x: "1",
    y: "1"
  })
}), la = () => c("svg", {
  fill: "none",
  height: "104",
  preserveAspectRatio: "none",
  viewBox: "0 0 163 104",
  width: "163",
  xmlns: "http://www.w3.org/2000/svg",
  children: [c("rect", {
    fill: "white",
    height: "104",
    opacity: "0.1",
    rx: "16",
    width: "163"
  }), c("rect", {
    height: "102",
    rx: "15",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2",
    width: "161",
    x: "1",
    y: "1"
  })]
}), ua = () => c("svg", {
  fill: "none",
  height: "104",
  preserveAspectRatio: "none",
  viewBox: "0 0 163 104",
  width: "163",
  xmlns: "http://www.w3.org/2000/svg",
  children: [c("rect", {
    fill: "white",
    height: "104",
    opacity: "0.1",
    rx: "16",
    width: "163"
  }), c("rect", {
    height: "102",
    rx: "15",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2",
    width: "161",
    x: "1",
    y: "1"
  }), c("path", {
    d: "M1 64H161.5",
    stroke: "currentColor",
    strokeWidth: "2"
  })]
}), da = () => c("svg", {
  fill: "none",
  height: "114",
  preserveAspectRatio: "none",
  viewBox: "0 0 163 114",
  width: "163",
  xmlns: "http://www.w3.org/2000/svg",
  children: [c("path", {
    d: "M2 0.5H161C161.828 0.5 162.5 1.17157 162.5 2V110C162.5 111.933 160.933 113.5 159 113.5H4C2.067 113.5 0.5 111.933 0.5 110V2C0.5 1.17157 1.17157 0.5 2 0.5Z",
    stroke: "currentColor",
    strokeLinecap: "round"
  }), c("g", {
    filter: "url(#filter0_d)",
    children: [c("path", {
      d: "M12.5813 95.8096V95.0156L10.9829 94.4795L10.7846 94.4092L10.9829 94.3359L12.5813 93.791V93L10 94.0752V94.7344L12.5813 95.8096Z",
      fill: "currentColor"
    }), c("path", {
      d: "M17.4233 95.8096V95.0156L15.825 94.4795L15.6266 94.4092L15.825 94.3359L17.4233 93.791V93L14.842 94.0752V94.7344L17.4233 95.8096Z",
      fill: "currentColor"
    }), c("path", {
      d: "M22.2654 95.8096V95.0156L20.667 94.4795L20.4687 94.4092L20.667 94.3359L22.2654 93.791V93L19.684 94.0752V94.7344L22.2654 95.8096Z",
      fill: "currentColor"
    }), c("path", {
      d: "M27.1074 95.8096V95.0156L25.509 94.4795L25.3107 94.4092L25.509 94.3359L27.1074 93.791V93L24.5261 94.0752V94.7344L27.1074 95.8096Z",
      fill: "currentColor"
    }), c("path", {
      d: "M31.9494 95.8096V95.0156L30.351 94.4795L30.1527 94.4092L30.351 94.3359L31.9494 93.791V93L29.3681 94.0752V94.7344L31.9494 95.8096Z",
      fill: "currentColor"
    }), c("path", {
      d: "M36.7914 95.8096V95.0156L35.1931 94.4795L34.9947 94.4092L35.1931 94.3359L36.7914 93.791V93L34.2101 94.0752V94.7344L36.7914 95.8096Z",
      fill: "currentColor"
    }), c("path", {
      d: "M41.6335 95.8096V95.0156L40.0351 94.4795L39.8367 94.4092L40.0351 94.3359L41.6335 93.791V93L39.0521 94.0752V94.7344L41.6335 95.8096Z",
      fill: "currentColor"
    }), c("path", {
      d: "M46.4755 95.8096V95.0156L44.8771 94.4795L44.6788 94.4092L44.8771 94.3359L46.4755 93.791V93L43.8942 94.0752V94.7344L46.4755 95.8096Z",
      fill: "currentColor"
    }), c("path", {
      d: "M51.3175 95.8096V95.0156L49.7191 94.4795L49.5208 94.4092L49.7191 94.3359L51.3175 93.791V93L48.7362 94.0752V94.7344L51.3175 95.8096Z",
      fill: "currentColor"
    }), c("path", {
      d: "M56.1595 95.8096V95.0156L54.5612 94.4795L54.3628 94.4092L54.5612 94.3359L56.1595 93.791V93L53.5782 94.0752V94.7344L56.1595 95.8096Z",
      fill: "currentColor"
    }), c("path", {
      d: "M61.0016 95.8096V95.0156L59.4032 94.4795L59.2048 94.4092L59.4032 94.3359L61.0016 93.791V93L58.4202 94.0752V94.7344L61.0016 95.8096Z",
      fill: "currentColor"
    }), c("path", {
      d: "M65.8436 95.8096V95.0156L64.2452 94.4795L64.0469 94.4092L64.2452 94.3359L65.8436 93.791V93L63.2623 94.0752V94.7344L65.8436 95.8096Z",
      fill: "currentColor"
    }), c("path", {
      d: "M70.6856 95.8096V95.0156L69.0872 94.4795L68.8889 94.4092L69.0872 94.3359L70.6856 93.791V93L68.1043 94.0752V94.7344L70.6856 95.8096Z",
      fill: "currentColor"
    }), c("path", {
      d: "M75.5276 95.8096V95.0156L73.9293 94.4795L73.7309 94.4092L73.9293 94.3359L75.5276 93.791V93L72.9463 94.0752V94.7344L75.5276 95.8096Z",
      fill: "currentColor"
    }), c("path", {
      d: "M80.3697 95.8096V95.0156L78.7713 94.4795L78.5729 94.4092L78.7713 94.3359L80.3697 93.791V93L77.7883 94.0752V94.7344L80.3697 95.8096Z",
      fill: "currentColor"
    }), c("path", {
      d: "M85.2117 95.8096V95.0156L83.6133 94.4795L83.415 94.4092L83.6133 94.3359L85.2117 93.791V93L82.6304 94.0752V94.7344L85.2117 95.8096Z",
      fill: "currentColor"
    }), c("path", {
      d: "M90.0537 95.8096V95.0156L88.4553 94.4795L88.257 94.4092L88.4553 94.3359L90.0537 93.791V93L87.4724 94.0752V94.7344L90.0537 95.8096Z",
      fill: "currentColor"
    }), c("path", {
      d: "M94.8957 95.8096V95.0156L93.2973 94.4795L93.099 94.4092L93.2973 94.3359L94.8957 93.791V93L92.3144 94.0752V94.7344L94.8957 95.8096Z",
      fill: "currentColor"
    }), c("path", {
      d: "M99.7377 95.8096V95.0156L98.1394 94.4795L97.941 94.4092L98.1394 94.3359L99.7377 93.791V93L97.1564 94.0752V94.7344L99.7377 95.8096Z",
      fill: "currentColor"
    }), c("path", {
      d: "M104.58 95.8096V95.0156L102.981 94.4795L102.783 94.4092L102.981 94.3359L104.58 93.791V93L101.998 94.0752V94.7344L104.58 95.8096Z",
      fill: "currentColor"
    }), c("path", {
      d: "M109.422 95.8096V95.0156L107.823 94.4795L107.625 94.4092L107.823 94.3359L109.422 93.791V93L106.84 94.0752V94.7344L109.422 95.8096Z",
      fill: "currentColor"
    }), c("path", {
      d: "M114.264 95.8096V95.0156L112.665 94.4795L112.467 94.4092L112.665 94.3359L114.264 93.791V93L111.683 94.0752V94.7344L114.264 95.8096Z",
      fill: "currentColor"
    }), c("path", {
      d: "M119.106 95.8096V95.0156L117.507 94.4795L117.309 94.4092L117.507 94.3359L119.106 93.791V93L116.525 94.0752V94.7344L119.106 95.8096Z",
      fill: "currentColor"
    }), c("path", {
      d: "M123.948 95.8096V95.0156L122.349 94.4795L122.151 94.4092L122.349 94.3359L123.948 93.791V93L121.367 94.0752V94.7344L123.948 95.8096Z",
      fill: "currentColor"
    }), c("path", {
      d: "M128.79 95.8096V95.0156L127.192 94.4795L126.993 94.4092L127.192 94.3359L128.79 93.791V93L126.209 94.0752V94.7344L128.79 95.8096Z",
      fill: "currentColor"
    }), c("path", {
      d: "M133.632 95.8096V95.0156L132.034 94.4795L131.835 94.4092L132.034 94.3359L133.632 93.791V93L131.051 94.0752V94.7344L133.632 95.8096Z",
      fill: "currentColor"
    }), c("path", {
      d: "M138.474 95.8096V95.0156L136.876 94.4795L136.677 94.4092L136.876 94.3359L138.474 93.791V93L135.893 94.0752V94.7344L138.474 95.8096Z",
      fill: "currentColor"
    }), c("path", {
      d: "M143.316 95.8096V95.0156L141.718 94.4795L141.519 94.4092L141.718 94.3359L143.316 93.791V93L140.735 94.0752V94.7344L143.316 95.8096Z",
      fill: "currentColor"
    }), c("path", {
      d: "M148.158 95.8096V95.0156L146.56 94.4795L146.361 94.4092L146.56 94.3359L148.158 93.791V93L145.577 94.0752V94.7344L148.158 95.8096Z",
      fill: "currentColor"
    }), c("path", {
      d: "M153 95.8096V95.0156L151.402 94.4795L151.203 94.4092L151.402 94.3359L153 93.791V93L150.419 94.0752V94.7344L153 95.8096Z",
      fill: "currentColor"
    }), c("path", {
      d: "M12.5813 103.81V103.016L10.9829 102.479L10.7846 102.409L10.9829 102.336L12.5813 101.791V101L10 102.075V102.734L12.5813 103.81Z",
      fill: "currentColor"
    }), c("path", {
      d: "M17.4233 103.81V103.016L15.825 102.479L15.6266 102.409L15.825 102.336L17.4233 101.791V101L14.842 102.075V102.734L17.4233 103.81Z",
      fill: "currentColor"
    }), c("path", {
      d: "M22.2654 103.81V103.016L20.667 102.479L20.4687 102.409L20.667 102.336L22.2654 101.791V101L19.684 102.075V102.734L22.2654 103.81Z",
      fill: "currentColor"
    }), c("path", {
      d: "M27.1074 103.81V103.016L25.509 102.479L25.3107 102.409L25.509 102.336L27.1074 101.791V101L24.5261 102.075V102.734L27.1074 103.81Z",
      fill: "currentColor"
    }), c("path", {
      d: "M31.9494 103.81V103.016L30.351 102.479L30.1527 102.409L30.351 102.336L31.9494 101.791V101L29.3681 102.075V102.734L31.9494 103.81Z",
      fill: "currentColor"
    }), c("path", {
      d: "M36.7914 103.81V103.016L35.1931 102.479L34.9947 102.409L35.1931 102.336L36.7914 101.791V101L34.2101 102.075V102.734L36.7914 103.81Z",
      fill: "currentColor"
    }), c("path", {
      d: "M41.6335 103.81V103.016L40.0351 102.479L39.8367 102.409L40.0351 102.336L41.6335 101.791V101L39.0521 102.075V102.734L41.6335 103.81Z",
      fill: "currentColor"
    }), c("path", {
      d: "M46.4755 103.81V103.016L44.8771 102.479L44.6788 102.409L44.8771 102.336L46.4755 101.791V101L43.8942 102.075V102.734L46.4755 103.81Z",
      fill: "currentColor"
    }), c("path", {
      d: "M51.3175 103.81V103.016L49.7191 102.479L49.5208 102.409L49.7191 102.336L51.3175 101.791V101L48.7362 102.075V102.734L51.3175 103.81Z",
      fill: "currentColor"
    }), c("path", {
      d: "M56.1595 103.81V103.016L54.5612 102.479L54.3628 102.409L54.5612 102.336L56.1595 101.791V101L53.5782 102.075V102.734L56.1595 103.81Z",
      fill: "currentColor"
    }), c("path", {
      d: "M61.0016 103.81V103.016L59.4032 102.479L59.2048 102.409L59.4032 102.336L61.0016 101.791V101L58.4202 102.075V102.734L61.0016 103.81Z",
      fill: "currentColor"
    }), c("path", {
      d: "M65.8436 103.81V103.016L64.2452 102.479L64.0469 102.409L64.2452 102.336L65.8436 101.791V101L63.2623 102.075V102.734L65.8436 103.81Z",
      fill: "currentColor"
    }), c("path", {
      d: "M70.6856 103.81V103.016L69.0872 102.479L68.8889 102.409L69.0872 102.336L70.6856 101.791V101L68.1043 102.075V102.734L70.6856 103.81Z",
      fill: "currentColor"
    }), c("path", {
      d: "M75.5276 103.81V103.016L73.9293 102.479L73.7309 102.409L73.9293 102.336L75.5276 101.791V101L72.9463 102.075V102.734L75.5276 103.81Z",
      fill: "currentColor"
    }), c("path", {
      d: "M80.3697 103.81V103.016L78.7713 102.479L78.5729 102.409L78.7713 102.336L80.3697 101.791V101L77.7883 102.075V102.734L80.3697 103.81Z",
      fill: "currentColor"
    }), c("path", {
      d: "M85.2117 103.81V103.016L83.6133 102.479L83.415 102.409L83.6133 102.336L85.2117 101.791V101L82.6304 102.075V102.734L85.2117 103.81Z",
      fill: "currentColor"
    }), c("path", {
      d: "M90.0537 103.81V103.016L88.4553 102.479L88.257 102.409L88.4553 102.336L90.0537 101.791V101L87.4724 102.075V102.734L90.0537 103.81Z",
      fill: "currentColor"
    }), c("path", {
      d: "M94.8957 103.81V103.016L93.2973 102.479L93.099 102.409L93.2973 102.336L94.8957 101.791V101L92.3144 102.075V102.734L94.8957 103.81Z",
      fill: "currentColor"
    }), c("path", {
      d: "M99.7377 103.81V103.016L98.1394 102.479L97.941 102.409L98.1394 102.336L99.7377 101.791V101L97.1564 102.075V102.734L99.7377 103.81Z",
      fill: "currentColor"
    }), c("path", {
      d: "M104.58 103.81V103.016L102.981 102.479L102.783 102.409L102.981 102.336L104.58 101.791V101L101.998 102.075V102.734L104.58 103.81Z",
      fill: "currentColor"
    }), c("path", {
      d: "M109.422 103.81V103.016L107.823 102.479L107.625 102.409L107.823 102.336L109.422 101.791V101L106.84 102.075V102.734L109.422 103.81Z",
      fill: "currentColor"
    }), c("path", {
      d: "M114.264 103.81V103.016L112.665 102.479L112.467 102.409L112.665 102.336L114.264 101.791V101L111.683 102.075V102.734L114.264 103.81Z",
      fill: "currentColor"
    }), c("path", {
      d: "M119.106 103.81V103.016L117.507 102.479L117.309 102.409L117.507 102.336L119.106 101.791V101L116.525 102.075V102.734L119.106 103.81Z",
      fill: "currentColor"
    }), c("path", {
      d: "M123.948 103.81V103.016L122.349 102.479L122.151 102.409L122.349 102.336L123.948 101.791V101L121.367 102.075V102.734L123.948 103.81Z",
      fill: "currentColor"
    }), c("path", {
      d: "M128.79 103.81V103.016L127.192 102.479L126.993 102.409L127.192 102.336L128.79 101.791V101L126.209 102.075V102.734L128.79 103.81Z",
      fill: "currentColor"
    }), c("path", {
      d: "M133.632 103.81V103.016L132.034 102.479L131.835 102.409L132.034 102.336L133.632 101.791V101L131.051 102.075V102.734L133.632 103.81Z",
      fill: "currentColor"
    }), c("path", {
      d: "M138.474 103.81V103.016L136.876 102.479L136.677 102.409L136.876 102.336L138.474 101.791V101L135.893 102.075V102.734L138.474 103.81Z",
      fill: "currentColor"
    }), c("path", {
      d: "M143.316 103.81V103.016L141.718 102.479L141.519 102.409L141.718 102.336L143.316 101.791V101L140.735 102.075V102.734L143.316 103.81Z",
      fill: "currentColor"
    }), c("path", {
      d: "M148.158 103.81V103.016L146.56 102.479L146.361 102.409L146.56 102.336L148.158 101.791V101L145.577 102.075V102.734L148.158 103.81Z",
      fill: "currentColor"
    }), c("path", {
      d: "M153 103.81V103.016L151.402 102.479L151.203 102.409L151.402 102.336L153 101.791V101L150.419 102.075V102.734L153 103.81Z",
      fill: "currentColor"
    })]
  }), c("path", {
    d: "M1 85H162",
    stroke: "currentColor"
  }), c("defs", {
    children: c("filter", {
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      height: "18.8096",
      id: "filter0_d",
      width: "151",
      x: "6",
      y: "93",
      children: [c("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), c("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        type: "matrix",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }), c("feOffset", {
        dy: "4"
      }), c("feGaussianBlur", {
        stdDeviation: "2"
      }), c("feColorMatrix", {
        type: "matrix",
        values: "0 0 0 0 0 0 0 0 0 0.74902 0 0 0 0 0.698039 0 0 0 0.08 0"
      }), c("feBlend", {
        in2: "BackgroundImageFix",
        mode: "darken",
        result: "effect1_dropShadow"
      }), c("feBlend", {
        in: "SourceGraphic",
        in2: "effect1_dropShadow",
        mode: "normal",
        result: "shape"
      })]
    })
  })]
}), fa = () => c("svg", {
  fill: "none",
  height: "114",
  preserveAspectRatio: "none",
  viewBox: "0 0 163 114",
  width: "163",
  xmlns: "http://www.w3.org/2000/svg",
  children: [c("path", {
    d: "M2 0.5H161C161.828 0.5 162.5 1.17157 162.5 2V110C162.5 111.933 160.933 113.5 159 113.5H4C2.067 113.5 0.5 111.933 0.5 110V2C0.5 1.17157 1.17157 0.5 2 0.5Z",
    stroke: "currentColor",
    strokeLinecap: "round"
  }), c("path", {
    d: "M1 85H162",
    stroke: "currentColor"
  }), c("defs", {
    children: c("filter", {
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      height: "18.8096",
      id: "filter0_d",
      width: "151",
      x: "6",
      y: "93",
      children: [c("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), c("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        type: "matrix",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }), c("feOffset", {
        dy: "4"
      }), c("feGaussianBlur", {
        stdDeviation: "2"
      }), c("feColorMatrix", {
        type: "matrix",
        values: "0 0 0 0 0 0 0 0 0 0.74902 0 0 0 0 0.698039 0 0 0 0.08 0"
      }), c("feBlend", {
        in2: "BackgroundImageFix",
        mode: "darken",
        result: "effect1_dropShadow"
      }), c("feBlend", {
        in: "SourceGraphic",
        in2: "effect1_dropShadow",
        mode: "normal",
        result: "shape"
      })]
    })
  })]
}), ha = me.div`
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
`, _a = ({
  children: e,
  isInCandidateSelection: t,
  placeholderRectangle: r
}) => c(ha, {
  isInCandidateSelection: t,
  placeholderRect: r,
  children: e
}), pa = {
  [ae.ID_CORNERS]: c(ta, {}),
  [ae.ID_DASH]: c(na, {}),
  [ae.ID_DOT]: c(ia, {}),
  [ae.ID_SOLID]: c(ca, {}),
  [ae.ID_PHOTO_ROUNDED]: c(sa, {}),
  [ae.ID_CORNERS_ROUNDED]: c(ra, {}),
  [ae.ID_DASH_ROUNDED]: c(oa, {}),
  [ae.ID_DOT_ROUNDED]: c(aa, {}),
  [ae.ID_SOLID_ROUNDED]: c(la, {}),
  [ae.ID_SOLID_ROUNDED_BACK]: c(ua, {}),
  [ae.PASSPORT_SOLID_BACK]: c(da, {}),
  [ae.PASSPORT_SOLID_BACK_BLANK]: c(fa, {})
}, ma = ({
  icon: e,
  ...t
}) => c(_a, {
  ...t,
  children: pa[e]
}), va = () => {
  const [e, t] = _e(), [r, n] = _e(!1), i = Oe((u) => {
    var R, k;
    t((R = u == null ? void 0 : u.detail) == null ? void 0 : R.cameraResolution);
    const E = (k = u == null ? void 0 : u.detail) == null ? void 0 : k.isMirroring;
    E !== void 0 && n(E);
  }, [t]);
  Ze(Te.CAMERA_PROPS_CHANGED, i);
  const [o, a] = _e(), l = Oe((u) => {
    var E;
    a((E = u == null ? void 0 : u.detail) == null ? void 0 : E.detectedCorners);
  }, [a]);
  Ze(Te.DETECTED_DOCUMENT_CHANGED, l);
  const [f, h] = _e(), s = Oe((u) => {
    var E;
    h((E = u == null ? void 0 : u.detail) == null ? void 0 : E.instructionCode);
  }, [h]);
  Ze(Te.INSTRUCTION_CHANGED, s);
  const [g, y] = _e(be.LOADING), [m, v] = _e(), S = Oe((u) => {
    var R, k;
    y((R = u.detail) == null ? void 0 : R.appState);
    const E = (k = u == null ? void 0 : u.detail) == null ? void 0 : k.error;
    E && v(E);
  }, [y, v]);
  return Ze(Te.STATE_CHANGED, S), {
    cameraResolution: e,
    detectedDocumentCorners: o,
    appState: g,
    error: m,
    instructionCode: f,
    isMirroring: r
  };
}, ga = me.canvas`
  transform: ${(e) => e.isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`, ze = (e, t) => Math.hypot(t.x - e.x, t.y - e.y), Ir = (e, t, r) => {
  const n = (t.x - e.x) * r, i = (t.y - e.y) * r;
  return {
    x: e.x + n,
    y: e.y + i
  };
}, Vr = (e, t, r, n) => {
  const i = ze(e, t);
  return r * n / i;
}, ya = (e) => {
  const {
    bottomLeft: t,
    bottomRight: r,
    topLeft: n,
    topRight: i
  } = e, o = ze(n, i), a = ze(i, r), l = ze(t, r), f = ze(n, t);
  return Math.min(o, a, l, f);
}, Ca = (e) => {
  const t = e.getContext("2d");
  t && t.clearRect(0, 0, t.canvas.width, t.canvas.height);
}, La = ({
  cameraResolution: e,
  documentCorners: t,
  isImageMirror: r
}) => {
  const n = pt(null), i = gi();
  return De(() => {
    if (!n.current)
      return;
    const o = (l, f, h, s) => {
      var u;
      const g = Vr(f, l, s, Tr), y = Vr(f, h, s, Tr), m = Ir(f, l, g), v = Ir(f, h, y), S = (u = n == null ? void 0 : n.current) == null ? void 0 : u.getContext("2d");
      S && (S.beginPath(), S.lineWidth = Li, S.strokeStyle = i.colors.placeholderColor, S.moveTo(m.x, m.y), S.arcTo(f.x, f.y, v.x, v.y, Ci), S.lineTo(v.x, v.y), S.stroke());
    }, a = (l) => {
      const {
        bottomLeft: f,
        bottomRight: h,
        topLeft: s,
        topRight: g
      } = l, y = ya(l);
      o(f, s, g, y), o(s, g, h, y), o(g, h, f, y), o(h, f, s, y);
    };
    n.current.width = e.width, n.current.height = e.height, Ca(n.current), a(t);
  }, [e, t, i.colors.placeholderColor]), c(ga, {
    ref: n,
    isImageMirror: r
  });
}, Sa = ({
  appStateInstructions: e,
  instructions: t,
  placeholderIcon: r,
  showCameraButtons: n,
  showDetectionLayer: i,
  videoElementSize: o
}) => {
  const {
    appState: a,
    cameraResolution: l,
    detectedDocumentCorners: f,
    error: h,
    instructionCode: s,
    isMirroring: g
  } = va(), y = s === he.CANDIDATE_SELECTION, m = vn(o);
  return a === be.ERROR ? c(yn, {
    fontSize: m,
    text: h == null ? void 0 : h.message
  }) : a === be.RUNNING && l ? c(we, {
    children: [f && i && c(La, {
      cameraResolution: l,
      documentCorners: f,
      isImageMirror: g
    }), c(ma, {
      icon: r,
      isInCandidateSelection: y,
      placeholderRectangle: Fi(l)
    }), s && c(ea, {
      cssTop: 50,
      fontSize: m,
      isInCandidateSelection: y,
      children: t[s]
    }), n && c(Yi, {
      customControlEvent: Te.CONTROL,
      videoElementSize: o
    })]
  }) : c(Ki, {
    appState: a,
    appStateInstructions: e,
    fontSize: m
  });
};
const wa = (e) => {
  var a, l;
  const t = {
    ...Si,
    ...e == null ? void 0 : e.instructions
  }, r = {
    [be.LOADING]: {
      ...Mr.loading,
      ...(a = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : a.loading
    },
    [be.WAITING]: {
      ...Mr.waiting,
      ...(l = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : l.waiting
    }
  }, n = (e == null ? void 0 : e.placeholder) ?? wi, i = (e == null ? void 0 : e.showDetectionLayer) ?? !1, o = (e == null ? void 0 : e.showCameraButtons) ?? !1;
  return {
    documentInstructions: t,
    documentAppStateInstructions: r,
    documentPlaceholderIcon: n,
    showDetectionLayer: i,
    showCameraButtons: o
  };
}, Ea = ({
  props: e
}) => {
  const {
    documentAppStateInstructions: t,
    documentInstructions: r,
    documentPlaceholderIcon: n,
    showCameraButtons: i,
    showDetectionLayer: o
  } = wa(e), a = Oi(Te.VIDEO_ELEMENT_SIZE), l = Di(e);
  return c(ki, {
    theme: l,
    videoElementSize: a,
    children: c(Sa, {
      appStateInstructions: t,
      instructions: r,
      placeholderIcon: n,
      showCameraButtons: i,
      showDetectionLayer: o,
      videoElementSize: a
    })
  });
};
Nn(Ea, "x-dot-document-auto-capture-ui", ["props"]);
