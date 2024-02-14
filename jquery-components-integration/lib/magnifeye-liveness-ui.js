var Qr = Object.defineProperty;
var eo = (e, t, n) => t in e ? Qr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ye = (e, t, n) => (eo(e, typeof t != "symbol" ? t + "" : t, n), n);
var ze, p, or, se, vn, ir, xt, ar, He = {}, sr = [], to = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, lt = Array.isArray;
function q(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function cr(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function D(e, t, n) {
  var r, o, i, a = {};
  for (i in t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? ze.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      a[i] === void 0 && (a[i] = e.defaultProps[i]);
  return Le(e, a, r, o, null);
}
function Le(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o ?? ++or, __i: -1, __u: 0 };
  return o == null && p.vnode != null && p.vnode(i), i;
}
function no() {
  return { current: null };
}
function F(e) {
  return e.children;
}
function z(e, t) {
  this.props = e, this.context = t;
}
function ve(e, t) {
  if (t == null)
    return e.__ ? ve(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? ve(e) : null;
}
function ur(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ur(e);
  }
}
function At(e) {
  (!e.__d && (e.__d = !0) && se.push(e) && !at.__r++ || vn !== p.debounceRendering) && ((vn = p.debounceRendering) || ir)(at);
}
function at() {
  var e, t, n, r, o, i, a, s, u;
  for (se.sort(xt); e = se.shift(); )
    e.__d && (t = se.length, r = void 0, i = (o = (n = e).__v).__e, s = [], u = [], (a = n.__P) && ((r = q({}, o)).__v = o.__v + 1, p.vnode && p.vnode(r), tn(a, r, o, n.__n, a.ownerSVGElement !== void 0, 32 & o.__u ? [i] : null, s, i ?? ve(o), !!(32 & o.__u), u), r.__.__k[r.__i] = r, dr(s, r, u), r.__e != i && ur(r)), se.length > t && se.sort(xt));
  at.__r = 0;
}
function lr(e, t, n, r, o, i, a, s, u, l, f) {
  var c, h, d, m, E, $ = r && r.__k || sr, g = t.length;
  for (n.__d = u, ro(n, t, $), u = n.__d, c = 0; c < g; c++)
    (d = n.__k[c]) != null && typeof d != "boolean" && typeof d != "function" && (h = d.__i === -1 ? He : $[d.__i] || He, d.__i = c, tn(e, d, h, o, i, a, s, u, l, f), m = d.__e, d.ref && h.ref != d.ref && (h.ref && nn(h.ref, null, d), f.push(d.ref, d.__c || m, d)), E == null && m != null && (E = m), 65536 & d.__u || h.__k === d.__k ? u = fr(d, u, e) : typeof d.type == "function" && d.__d !== void 0 ? u = d.__d : m && (u = m.nextSibling), d.__d = void 0, d.__u &= -196609);
  n.__d = u, n.__e = E;
}
function ro(e, t, n) {
  var r, o, i, a, s, u = t.length, l = n.length, f = l, c = 0;
  for (e.__k = [], r = 0; r < u; r++)
    (o = e.__k[r] = (o = t[r]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? Le(null, o, null, null, o) : lt(o) ? Le(F, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? Le(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = e, o.__b = e.__b + 1, s = oo(o, n, a = r + c, f), o.__i = s, i = null, s !== -1 && (f--, (i = n[s]) && (i.__u |= 131072)), i == null || i.__v === null ? (s == -1 && c--, typeof o.type != "function" && (o.__u |= 65536)) : s !== a && (s === a + 1 ? c++ : s > a ? f > u - a ? c += s - a : c-- : c = s < a && s == a - 1 ? s - a : 0, s !== r + c && (o.__u |= 65536))) : (i = n[r]) && i.key == null && i.__e && (i.__e == e.__d && (e.__d = ve(i)), Rt(i, i, !1), n[r] = null, f--);
  if (f)
    for (r = 0; r < l; r++)
      (i = n[r]) != null && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = ve(i)), Rt(i, i));
}
function fr(e, t, n) {
  var r, o;
  if (typeof e.type == "function") {
    for (r = e.__k, o = 0; r && o < r.length; o++)
      r[o] && (r[o].__ = e, t = fr(r[o], t, n));
    return t;
  }
  return e.__e != t && (n.insertBefore(e.__e, t || null), t = e.__e), t && t.nextSibling;
}
function X(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (lt(e) ? e.some(function(n) {
    X(n, t);
  }) : t.push(e)), t;
}
function oo(e, t, n, r) {
  var o = e.key, i = e.type, a = n - 1, s = n + 1, u = t[n];
  if (u === null || u && o == u.key && i === u.type)
    return n;
  if (r > (u != null && !(131072 & u.__u) ? 1 : 0))
    for (; a >= 0 || s < t.length; ) {
      if (a >= 0) {
        if ((u = t[a]) && !(131072 & u.__u) && o == u.key && i === u.type)
          return a;
        a--;
      }
      if (s < t.length) {
        if ((u = t[s]) && !(131072 & u.__u) && o == u.key && i === u.type)
          return s;
        s++;
      }
    }
  return -1;
}
function Cn(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || to.test(t) ? n : n + "px";
}
function Ze(e, t, n, r, o) {
  var i;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Cn(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Cn(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      i = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = Date.now(), e.addEventListener(t, i ? bn : En, i)) : e.removeEventListener(t, i ? bn : En, i);
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
function En(e) {
  var t = this.l[e.type + !1];
  if (e.t) {
    if (e.t <= t.u)
      return;
  } else
    e.t = Date.now();
  return t(p.event ? p.event(e) : e);
}
function bn(e) {
  return this.l[e.type + !0](p.event ? p.event(e) : e);
}
function tn(e, t, n, r, o, i, a, s, u, l) {
  var f, c, h, d, m, E, $, g, v, w, N, O, b, y, U, A = t.type;
  if (t.constructor !== void 0)
    return null;
  128 & n.__u && (u = !!(32 & n.__u), i = [s = t.__e = n.__e]), (f = p.__b) && f(t);
  e:
    if (typeof A == "function")
      try {
        if (g = t.props, v = (f = A.contextType) && r[f.__c], w = f ? v ? v.props.value : f.__ : r, n.__c ? $ = (c = t.__c = n.__c).__ = c.__E : ("prototype" in A && A.prototype.render ? t.__c = c = new A(g, w) : (t.__c = c = new z(g, w), c.constructor = A, c.render = ao), v && v.sub(c), c.props = g, c.state || (c.state = {}), c.context = w, c.__n = r, h = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), A.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = q({}, c.__s)), q(c.__s, A.getDerivedStateFromProps(g, c.__s))), d = c.props, m = c.state, c.__v = t, h)
          A.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (A.getDerivedStateFromProps == null && g !== d && c.componentWillReceiveProps != null && c.componentWillReceiveProps(g, w), !c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(g, c.__s, w) === !1 || t.__v === n.__v)) {
            for (t.__v !== n.__v && (c.props = g, c.state = c.__s, c.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(me) {
              me && (me.__ = t);
            }), N = 0; N < c._sb.length; N++)
              c.__h.push(c._sb[N]);
            c._sb = [], c.__h.length && a.push(c);
            break e;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(g, c.__s, w), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(d, m, E);
          });
        }
        if (c.context = w, c.props = g, c.__P = e, c.__e = !1, O = p.__r, b = 0, "prototype" in A && A.prototype.render) {
          for (c.state = c.__s, c.__d = !1, O && O(t), f = c.render(c.props, c.state, c.context), y = 0; y < c._sb.length; y++)
            c.__h.push(c._sb[y]);
          c._sb = [];
        } else
          do
            c.__d = !1, O && O(t), f = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++b < 25);
        c.state = c.__s, c.getChildContext != null && (r = q(q({}, r), c.getChildContext())), h || c.getSnapshotBeforeUpdate == null || (E = c.getSnapshotBeforeUpdate(d, m)), lr(e, lt(U = f != null && f.type === F && f.key == null ? f.props.children : f) ? U : [U], t, n, r, o, i, a, s, u, l), c.base = t.__e, t.__u &= -161, c.__h.length && a.push(c), $ && (c.__E = c.__ = null);
      } catch (me) {
        t.__v = null, u || i != null ? (t.__e = s, t.__u |= u ? 160 : 32, i[i.indexOf(s)] = null) : (t.__e = n.__e, t.__k = n.__k), p.__e(me, t, n);
      }
    else
      i == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = io(n.__e, t, n, r, o, i, a, u, l);
  (f = p.diffed) && f(t);
}
function dr(e, t, n) {
  t.__d = void 0;
  for (var r = 0; r < n.length; r++)
    nn(n[r], n[++r], n[++r]);
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
function io(e, t, n, r, o, i, a, s, u) {
  var l, f, c, h, d, m, E, $ = n.props, g = t.props, v = t.type;
  if (v === "svg" && (o = !0), i != null) {
    for (l = 0; l < i.length; l++)
      if ((d = i[l]) && "setAttribute" in d == !!v && (v ? d.localName === v : d.nodeType === 3)) {
        e = d, i[l] = null;
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
    if (i = i && ze.call(e.childNodes), $ = n.props || He, !s && i != null)
      for ($ = {}, l = 0; l < e.attributes.length; l++)
        $[(d = e.attributes[l]).name] = d.value;
    for (l in $)
      d = $[l], l == "children" || (l == "dangerouslySetInnerHTML" ? c = d : l === "key" || l in g || Ze(e, l, null, d, o));
    for (l in g)
      d = g[l], l == "children" ? h = d : l == "dangerouslySetInnerHTML" ? f = d : l == "value" ? m = d : l == "checked" ? E = d : l === "key" || s && typeof d != "function" || $[l] === d || Ze(e, l, d, $[l], o);
    if (f)
      s || c && (f.__html === c.__html || f.__html === e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (c && (e.innerHTML = ""), lr(e, lt(h) ? h : [h], t, n, r, o && v !== "foreignObject", i, a, i ? i[0] : n.__k && ve(n, 0), s, u), i != null)
      for (l = i.length; l--; )
        i[l] != null && cr(i[l]);
    s || (l = "value", m !== void 0 && (m !== e[l] || v === "progress" && !m || v === "option" && m !== $[l]) && Ze(e, l, m, $[l], !1), l = "checked", E !== void 0 && E !== e[l] && Ze(e, l, E, $[l], !1));
  }
  return e;
}
function nn(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    p.__e(r, n);
  }
}
function Rt(e, t, n) {
  var r, o;
  if (p.unmount && p.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || nn(r, null, t)), (r = e.__c) != null) {
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
      r[o] && Rt(r[o], t, n || typeof e.type != "function");
  n || e.__e == null || cr(e.__e), e.__ = e.__e = e.__d = void 0;
}
function ao(e, t, n) {
  return this.constructor(e, n);
}
function ne(e, t, n) {
  var r, o, i, a;
  p.__ && p.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], a = [], tn(t, e = (!r && n || t).__k = D(F, null, [e]), o || He, He, t.ownerSVGElement !== void 0, !r && n ? [n] : o ? null : t.firstChild ? ze.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, a), dr(i, e, a);
}
function rn(e, t) {
  ne(e, t, rn);
}
function on(e, t, n) {
  var r, o, i, a, s = q({}, e.props);
  for (i in e.type && e.type.defaultProps && (a = e.type.defaultProps), t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i] === void 0 && a !== void 0 ? a[i] : t[i];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? ze.call(arguments, 2) : n), Le(e.type, s, r || e.key, o || e.ref, null);
}
function so(e, t) {
  var n = { __c: t = "__cC" + ar++, __: e, Consumer: function(r, o) {
    return r.children(o);
  }, Provider: function(r) {
    var o, i;
    return this.getChildContext || (o = [], (i = {})[t] = this, this.getChildContext = function() {
      return i;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && o.some(function(s) {
        s.__e = !0, At(s);
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
ze = sr.slice, p = { __e: function(e, t, n, r) {
  for (var o, i, a; t = t.__; )
    if ((o = t.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), a = o.__d), a)
          return o.__E = o;
      } catch (s) {
        e = s;
      }
  throw e;
} }, or = 0, z.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = q({}, this.state), typeof e == "function" && (e = e(q({}, n), this.props)), e && q(n, e), e != null && this.__v && (t && this._sb.push(t), At(this));
}, z.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), At(this));
}, z.prototype.render = F, se = [], ir = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, xt = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, at.__r = 0, ar = 0;
function an() {
  return (an = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var co = ["context", "children"];
function uo(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, n = function(r, o) {
    if (r == null)
      return {};
    var i, a, s = {}, u = Object.keys(r);
    for (a = 0; a < u.length; a++)
      o.indexOf(i = u[a]) >= 0 || (s[i] = r[i]);
    return s;
  }(e, co);
  return on(t, n);
}
function lo() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = D(uo, an({}, this._props, { context: e.detail.context }), function t(n, r) {
    if (n.nodeType === 3)
      return n.data;
    if (n.nodeType !== 1)
      return null;
    var o = [], i = {}, a = 0, s = n.attributes, u = n.childNodes;
    for (a = s.length; a--; )
      s[a].name !== "slot" && (i[s[a].name] = s[a].value, i[_r(s[a].name)] = s[a].value);
    for (a = u.length; a--; ) {
      var l = t(u[a], null), f = u[a].slot;
      f ? i[f] = D(wn, { name: f }, l) : o[a] = l;
    }
    var c = r ? D(wn, null, o) : o;
    return D(r || n.nodeName.toLowerCase(), i, c);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? rn : ne)(this._vdom, this._root);
}
function _r(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function fo(e, t, n) {
  if (this._vdom) {
    var r = {};
    r[e] = n = n ?? void 0, r[_r(e)] = n, this._vdom = on(this._vdom, r), ne(this._vdom, this._root);
  }
}
function _o() {
  ne(this._vdom = null, this._root);
}
function wn(e, t) {
  var n = this;
  return D("slot", an({}, e, { ref: function(r) {
    r ? (n.ref = r, n._listener || (n._listener = function(o) {
      o.stopPropagation(), o.detail.context = t;
    }, r.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function ho(e, t, n, r) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = e, i._root = r && r.shadow ? i.attachShadow({ mode: r.mode || "open" }) : i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = lo, o.prototype.attributeChangedCallback = fo, o.prototype.disconnectedCallback = _o, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = n, n.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom.props[i];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(i, null, a) : (this._props || (this._props = {}), this._props[i] = a, this.connectedCallback());
      var s = typeof a;
      a != null && s !== "string" && s !== "boolean" && s !== "number" || this.setAttribute(i, a);
    } });
  }), customElements.define(t || e.tagName || e.displayName || e.name, o);
}
var Pt = /* @__PURE__ */ ((e) => (e.CONTINUE_DETECTION = "continue-detection", e.SWITCH_CAMERA = "switch-camera", e.TOGGLE_MIRROR = "toggle-mirror", e))(Pt || {}), Ce = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", e.CONTROL = "face-auto-capture:control", e.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", e.FACE_DETECTION = "face-auto-capture:face-detection", e.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", e.STATE_CHANGED = "face-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", e))(Ce || {}), sn = /* @__PURE__ */ ((e) => (e.ANIMATION_END = "magnifeye-auto-capture:animation-end", e.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", e))(sn || {});
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
}, po = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  WAITING: "WAITING",
  RUNNING: "RUNNING"
}, Fe = {
  ...W,
  FIT_YOUR_EYE: "fit_your_eye"
};
var Be = /* @__PURE__ */ ((e) => (e.CLOSEUP = "CLOSEUP", e.DISTANT = "DISTANT", e.MIDDLE = "MIDDLE", e))(Be || {});
const te = {
  ...po,
  DONE: "DONE"
};
var P = function() {
  return P = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, P.apply(this, arguments);
};
function _e(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function mo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var go = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, yo = /* @__PURE__ */ mo(
  function(e) {
    return go.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), re, T, wt, Sn, Ee = 0, hr = [], Je = [], $n = p.__b, kn = p.__r, Nn = p.diffed, On = p.__c, In = p.unmount;
function Ne(e, t) {
  p.__h && p.__h(T, e, Ee || t), Ee = 0;
  var n = T.__H || (T.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({ __V: Je }), n.__[e];
}
function M(e) {
  return Ee = 1, pr(mr, e);
}
function pr(e, t, n) {
  var r = Ne(re++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : mr(void 0, t), function(s) {
    var u = r.__N ? r.__N[0] : r.__[0], l = r.t(u, s);
    u !== l && (r.__N = [l, r.__[1]], r.__c.setState({}));
  }], r.__c = T, !T.u)) {
    var o = function(s, u, l) {
      if (!r.__c.__H)
        return !0;
      var f = r.__c.__H.__.filter(function(h) {
        return h.__c;
      });
      if (f.every(function(h) {
        return !h.__N;
      }))
        return !i || i.call(this, s, u, l);
      var c = !1;
      return f.forEach(function(h) {
        if (h.__N) {
          var d = h.__[0];
          h.__ = h.__N, h.__N = void 0, d !== h.__[0] && (c = !0);
        }
      }), !(!c && r.__c.props === s) && (!i || i.call(this, s, u, l));
    };
    T.u = !0;
    var i = T.shouldComponentUpdate, a = T.componentWillUpdate;
    T.componentWillUpdate = function(s, u, l) {
      if (this.__e) {
        var f = i;
        i = void 0, o(s, u, l), i = f;
      }
      a && a.call(this, s, u, l);
    }, T.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function oe(e, t) {
  var n = Ne(re++, 3);
  !p.__s && un(n.__H, t) && (n.__ = e, n.i = t, T.__H.__h.push(n));
}
function ft(e, t) {
  var n = Ne(re++, 4);
  !p.__s && un(n.__H, t) && (n.__ = e, n.i = t, T.__h.push(n));
}
function dt(e) {
  return Ee = 5, le(function() {
    return { current: e };
  }, []);
}
function vo(e, t, n) {
  Ee = 6, ft(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(e));
}
function le(e, t) {
  var n = Ne(re++, 7);
  return un(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__;
}
function be(e, t) {
  return Ee = 8, le(function() {
    return e;
  }, t);
}
function cn(e) {
  var t = T.context[e.__c], n = Ne(re++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(T)), t.props.value) : e.__;
}
function Dt(e, t) {
  p.useDebugValue && p.useDebugValue(t ? t(e) : e);
}
function Co() {
  var e = Ne(re++, 11);
  if (!e.__) {
    for (var t = T.__v; t !== null && !t.__m && t.__ !== null; )
      t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function Eo() {
  for (var e; e = hr.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(Qe), e.__H.__h.forEach(Lt), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], p.__e(t, e.__v);
      }
}
p.__b = function(e) {
  T = null, $n && $n(e);
}, p.__r = function(e) {
  kn && kn(e), re = 0;
  var t = (T = e.__c).__H;
  t && (wt === T ? (t.__h = [], T.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = Je, n.__N = n.i = void 0;
  })) : (t.__h.forEach(Qe), t.__h.forEach(Lt), t.__h = [], re = 0)), wt = T;
}, p.diffed = function(e) {
  Nn && Nn(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (hr.push(t) !== 1 && Sn === p.requestAnimationFrame || ((Sn = p.requestAnimationFrame) || bo)(Eo)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== Je && (n.__ = n.__V), n.i = void 0, n.__V = Je;
  })), wt = T = null;
}, p.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(Qe), n.__h = n.__h.filter(function(r) {
        return !r.__ || Lt(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], p.__e(r, n.__v);
    }
  }), On && On(e, t);
}, p.unmount = function(e) {
  In && In(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      Qe(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && p.__e(t, n.__v));
};
var Tn = typeof requestAnimationFrame == "function";
function bo(e) {
  var t, n = function() {
    clearTimeout(r), Tn && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  Tn && (t = requestAnimationFrame(n));
}
function Qe(e) {
  var t = T, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), T = t;
}
function Lt(e) {
  var t = T;
  e.__c = e.__(), T = t;
}
function un(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function mr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function gr(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Mt(e, t) {
  for (var n in e)
    if (n !== "__source" && !(n in t))
      return !0;
  for (var r in t)
    if (r !== "__source" && e[r] !== t[r])
      return !0;
  return !1;
}
function Ht(e) {
  this.props = e;
}
function wo(e, t) {
  function n(o) {
    var i = this.props.ref, a = i == o.ref;
    return !a && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !a : Mt(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, D(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(Ht.prototype = new z()).isPureReactComponent = !0, Ht.prototype.shouldComponentUpdate = function(e, t) {
  return Mt(this.props, e) || Mt(this.state, t);
};
var xn = p.__b;
p.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), xn && xn(e);
};
var So = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function $o(e) {
  function t(n) {
    var r = gr({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = So, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var An = function(e, t) {
  return e == null ? null : X(X(e).map(t));
}, ko = { map: An, forEach: An, count: function(e) {
  return e ? X(e).length : 0;
}, only: function(e) {
  var t = X(e);
  if (t.length !== 1)
    throw "Children.only";
  return t[0];
}, toArray: X }, No = p.__e;
p.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; )
      if ((o = i.__c) && o.__c)
        return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  No(e, t, n, r);
};
var Rn = p.unmount;
function yr(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = gr({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return yr(r, t, n);
  })), e;
}
function vr(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return vr(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function et() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Cr(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Oo(e) {
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
    return D(n, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function Re() {
  this.u = null, this.o = null;
}
p.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Rn && Rn(e);
}, (et.prototype = new z()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var o = Cr(r.__v), i = !1, a = function() {
    i || (i = !0, n.__R = null, o ? o(s) : s());
  };
  n.__R = a;
  var s = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var u = r.state.__a;
        r.__v.__k[0] = vr(u, u.__c.__P, u.__c.__O);
      }
      var l;
      for (r.setState({ __a: r.__b = null }); l = r.t.pop(); )
        l.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(a, a);
}, et.prototype.componentWillUnmount = function() {
  this.t = [];
}, et.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = yr(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && D(F, null, e.fallback);
  return o && (o.__u &= -33), [D(F, null, t.__a ? null : e.children), o];
};
var Pn = function(e, t, n) {
  if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (n = e.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      e.u = n = n[2];
    }
};
function Io(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function To(e) {
  var t = this, n = e.i;
  t.componentWillUnmount = function() {
    ne(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== n && t.componentWillUnmount(), t.l || (t.i = n, t.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r);
  } }), ne(D(Io, { context: t.context }, e.__v), t.l);
}
function xo(e, t) {
  var n = D(To, { __v: e, i: t });
  return n.containerInfo = t, n;
}
(Re.prototype = new z()).__a = function(e) {
  var t = this, n = Cr(t.__v), r = t.o.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), Pn(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, Re.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = X(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; )
    this.o.set(t[n], this.u = [1, 0, this.u]);
  return e.children;
}, Re.prototype.componentDidUpdate = Re.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, n) {
    Pn(e, n, t);
  });
};
var Er = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Ao = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Ro = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Po = /[A-Z0-9]/g, Do = typeof document < "u", Lo = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function Mo(e, t, n) {
  return t.__k == null && (t.textContent = ""), ne(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function Ho(e, t, n) {
  return rn(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
z.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(z.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Dn = p.event;
function Fo() {
}
function Bo() {
  return this.cancelBubble;
}
function Uo() {
  return this.defaultPrevented;
}
p.event = function(e) {
  return Dn && (e = Dn(e)), e.persist = Fo, e.isPropagationStopped = Bo, e.isDefaultPrevented = Uo, e.nativeEvent = e;
};
var ln, Wo = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Ln = p.vnode;
p.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {};
    for (var i in n) {
      var a = n[i];
      if (!(i === "value" && "defaultValue" in n && a == null || Do && i === "children" && r === "noscript" || i === "class" || i === "className")) {
        var s = i.toLowerCase();
        i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && a === !0 ? a = "" : s === "ondoubleclick" ? i = "ondblclick" : s !== "onchange" || r !== "input" && r !== "textarea" || Lo(n.type) ? s === "onfocus" ? i = "onfocusin" : s === "onblur" ? i = "onfocusout" : Ro.test(i) ? i = s : r.indexOf("-") === -1 && Ao.test(i) ? i = i.replace(Po, "-$&").toLowerCase() : a === null && (a = void 0) : s = i = "oninput", s === "oninput" && o[i = s] && (i = "oninputCapture"), o[i] = a;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = X(n.children).forEach(function(u) {
      u.props.selected = o.value.indexOf(u.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = X(n.children).forEach(function(u) {
      u.props.selected = o.multiple ? o.defaultValue.indexOf(u.props.value) != -1 : o.defaultValue == u.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", Wo)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = Er, Ln && Ln(e);
};
var Mn = p.__r;
p.__r = function(e) {
  Mn && Mn(e), ln = e.__c;
};
var Hn = p.diffed;
p.diffed = function(e) {
  Hn && Hn(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), ln = null;
};
var zo = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return ln.__n[e.__c].props.value;
} } } };
function Vo(e) {
  return D.bind(null, e);
}
function _t(e) {
  return !!e && e.$$typeof === Er;
}
function jo(e) {
  return _t(e) && e.type === F;
}
function Go(e) {
  return _t(e) ? on.apply(null, arguments) : e;
}
function Yo(e) {
  return !!e.__k && (ne(null, e), !0);
}
function Zo(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var qo = function(e, t) {
  return e(t);
}, Xo = function(e, t) {
  return e(t);
}, Ko = F;
function br(e) {
  e();
}
function Jo(e) {
  return e;
}
function Qo() {
  return [!1, br];
}
var ei = ft, ti = _t;
function ni(e, t) {
  var n = t(), r = M({ h: { __: n, v: t } }), o = r[0].h, i = r[1];
  return ft(function() {
    o.__ = n, o.v = t, St(o) && i({ h: o });
  }, [e, n, t]), oe(function() {
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
var K = { useState: M, useId: Co, useReducer: pr, useEffect: oe, useLayoutEffect: ft, useInsertionEffect: ei, useTransition: Qo, useDeferredValue: Jo, useSyncExternalStore: ni, startTransition: br, useRef: dt, useImperativeHandle: vo, useMemo: le, useCallback: be, useContext: cn, useDebugValue: Dt, version: "17.0.2", Children: ko, render: Mo, hydrate: Ho, unmountComponentAtNode: Yo, createPortal: xo, createElement: D, createContext: so, createFactory: Vo, cloneElement: Go, createRef: no, Fragment: F, isValidElement: _t, isElement: ti, isFragment: jo, findDOMNode: Zo, Component: z, PureComponent: Ht, memo: wo, forwardRef: $o, flushSync: Xo, unstable_batchedUpdates: qo, StrictMode: Ko, Suspense: et, SuspenseList: Re, lazy: Oo, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: zo };
function ri(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var oi = function(t, n, r, o) {
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
    var f = a[l];
    if (!u(f))
      return !1;
    var c = t[f], h = n[f];
    if (i = r ? r.call(o, c, h, f) : void 0, i === !1 || i === void 0 && c !== h)
      return !1;
  }
  return !0;
};
const ii = /* @__PURE__ */ ri(oi);
var I = "-ms-", Me = "-moz-", k = "-webkit-", wr = "comm", ht = "rule", fn = "decl", ai = "@import", Sr = "@keyframes", si = "@layer", ci = Math.abs, dn = String.fromCharCode, Ft = Object.assign;
function ui(e, t) {
  return R(e, 0) ^ 45 ? (((t << 2 ^ R(e, 0)) << 2 ^ R(e, 1)) << 2 ^ R(e, 2)) << 2 ^ R(e, 3) : 0;
}
function $r(e) {
  return e.trim();
}
function Y(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function C(e, t, n) {
  return e.replace(t, n);
}
function tt(e, t) {
  return e.indexOf(t);
}
function R(e, t) {
  return e.charCodeAt(t) | 0;
}
function we(e, t, n) {
  return e.slice(t, n);
}
function j(e) {
  return e.length;
}
function kr(e) {
  return e.length;
}
function Pe(e, t) {
  return t.push(e), e;
}
function li(e, t) {
  return e.map(t).join("");
}
function Fn(e, t) {
  return e.filter(function(n) {
    return !Y(n, t);
  });
}
var pt = 1, Se = 1, Nr = 0, B = 0, x = 0, Oe = "";
function mt(e, t, n, r, o, i, a, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: pt, column: Se, length: a, return: "", siblings: s };
}
function ee(e, t) {
  return Ft(mt("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function ye(e) {
  for (; e.root; )
    e = ee(e.root, { children: [e] });
  Pe(e, e.siblings);
}
function fi() {
  return x;
}
function di() {
  return x = B > 0 ? R(Oe, --B) : 0, Se--, x === 10 && (Se = 1, pt--), x;
}
function V() {
  return x = B < Nr ? R(Oe, B++) : 0, Se++, x === 10 && (Se = 1, pt++), x;
}
function fe() {
  return R(Oe, B);
}
function nt() {
  return B;
}
function gt(e, t) {
  return we(Oe, e, t);
}
function Bt(e) {
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
function _i(e) {
  return pt = Se = 1, Nr = j(Oe = e), B = 0, [];
}
function hi(e) {
  return Oe = "", e;
}
function $t(e) {
  return $r(gt(B - 1, Ut(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function pi(e) {
  for (; (x = fe()) && x < 33; )
    V();
  return Bt(e) > 2 || Bt(x) > 3 ? "" : " ";
}
function mi(e, t) {
  for (; --t && V() && !(x < 48 || x > 102 || x > 57 && x < 65 || x > 70 && x < 97); )
    ;
  return gt(e, nt() + (t < 6 && fe() == 32 && V() == 32));
}
function Ut(e) {
  for (; V(); )
    switch (x) {
      case e:
        return B;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ut(x);
        break;
      case 40:
        e === 41 && Ut(e);
        break;
      case 92:
        V();
        break;
    }
  return B;
}
function gi(e, t) {
  for (; V() && e + x !== 57; )
    if (e + x === 84 && fe() === 47)
      break;
  return "/*" + gt(t, B - 1) + "*" + dn(e === 47 ? e : V());
}
function yi(e) {
  for (; !Bt(fe()); )
    V();
  return gt(e, B);
}
function vi(e) {
  return hi(rt("", null, null, null, [""], e = _i(e), 0, [0], e));
}
function rt(e, t, n, r, o, i, a, s, u) {
  for (var l = 0, f = 0, c = a, h = 0, d = 0, m = 0, E = 1, $ = 1, g = 1, v = 0, w = "", N = o, O = i, b = r, y = w; $; )
    switch (m = v, v = V()) {
      case 40:
        if (m != 108 && R(y, c - 1) == 58) {
          tt(y += C($t(v), "&", "&\f"), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        y += $t(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        y += pi(m);
        break;
      case 92:
        y += mi(nt() - 1, 7);
        continue;
      case 47:
        switch (fe()) {
          case 42:
          case 47:
            Pe(Ci(gi(V(), nt()), t, n, u), u);
            break;
          default:
            y += "/";
        }
        break;
      case 123 * E:
        s[l++] = j(y) * g;
      case 125 * E:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            $ = 0;
          case 59 + f:
            g == -1 && (y = C(y, /\f/g, "")), d > 0 && j(y) - c && Pe(d > 32 ? Un(y + ";", r, n, c - 1, u) : Un(C(y, " ", "") + ";", r, n, c - 2, u), u);
            break;
          case 59:
            y += ";";
          default:
            if (Pe(b = Bn(y, t, n, l, f, o, s, w, N = [], O = [], c, i), i), v === 123)
              if (f === 0)
                rt(y, t, b, b, N, i, c, s, O);
              else
                switch (h === 99 && R(y, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    rt(e, b, b, r && Pe(Bn(e, b, b, 0, 0, o, s, w, o, N = [], c, O), O), o, O, c, s, r ? N : O);
                    break;
                  default:
                    rt(y, b, b, b, [""], O, 0, s, O);
                }
        }
        l = f = d = 0, E = g = 1, w = y = "", c = a;
        break;
      case 58:
        c = 1 + j(y), d = m;
      default:
        if (E < 1) {
          if (v == 123)
            --E;
          else if (v == 125 && E++ == 0 && di() == 125)
            continue;
        }
        switch (y += dn(v), v * E) {
          case 38:
            g = f > 0 ? 1 : (y += "\f", -1);
            break;
          case 44:
            s[l++] = (j(y) - 1) * g, g = 1;
            break;
          case 64:
            fe() === 45 && (y += $t(V())), h = fe(), f = c = j(w = y += yi(nt())), v++;
            break;
          case 45:
            m === 45 && j(y) == 2 && (E = 0);
        }
    }
  return i;
}
function Bn(e, t, n, r, o, i, a, s, u, l, f, c) {
  for (var h = o - 1, d = o === 0 ? i : [""], m = kr(d), E = 0, $ = 0, g = 0; E < r; ++E)
    for (var v = 0, w = we(e, h + 1, h = ci($ = a[E])), N = e; v < m; ++v)
      (N = $r($ > 0 ? d[v] + " " + w : C(w, /&\f/g, d[v]))) && (u[g++] = N);
  return mt(e, t, n, o === 0 ? ht : s, u, l, f, c);
}
function Ci(e, t, n, r) {
  return mt(e, t, n, wr, dn(fi()), we(e, 2, -2), 0, r);
}
function Un(e, t, n, r, o) {
  return mt(e, t, n, fn, we(e, 0, r), we(e, r + 1, -1), r, o);
}
function Or(e, t, n) {
  switch (ui(e, t)) {
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
      return Me + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return k + e + Me + e + I + e + e;
    case 5936:
      switch (R(e, t + 11)) {
        case 114:
          return k + e + I + C(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return k + e + I + C(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return k + e + I + C(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return k + e + I + e + e;
    case 6165:
      return k + e + I + "flex-" + e + e;
    case 5187:
      return k + e + C(e, /(\w+).+(:[^]+)/, k + "box-$1$2" + I + "flex-$1$2") + e;
    case 5443:
      return k + e + I + "flex-item-" + C(e, /flex-|-self/g, "") + (Y(e, /flex-|baseline/) ? "" : I + "grid-row-" + C(e, /flex-|-self/g, "")) + e;
    case 4675:
      return k + e + I + "flex-line-pack" + C(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return k + e + I + C(e, "shrink", "negative") + e;
    case 5292:
      return k + e + I + C(e, "basis", "preferred-size") + e;
    case 6060:
      return k + "box-" + C(e, "-grow", "") + k + e + I + C(e, "grow", "positive") + e;
    case 4554:
      return k + C(e, /([^-])(transform)/g, "$1" + k + "$2") + e;
    case 6187:
      return C(C(C(e, /(zoom-|grab)/, k + "$1"), /(image-set)/, k + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return C(e, /(image-set\([^]*)/, k + "$1$`$1");
    case 4968:
      return C(C(e, /(.+:)(flex-)?(.*)/, k + "box-pack:$3" + I + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + k + e + e;
    case 4200:
      if (!Y(e, /flex-|baseline/))
        return I + "grid-column-align" + we(e, t) + e;
      break;
    case 2592:
    case 3360:
      return I + C(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, Y(r.props, /grid-\w+-end/);
      }) ? ~tt(e + (n = n[t].value), "span") ? e : I + C(e, "-start", "") + e + I + "grid-row-span:" + (~tt(n, "span") ? Y(n, /\d+/) : +Y(n, /\d+/) - +Y(e, /\d+/)) + ";" : I + C(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return Y(r.props, /grid-\w+-start/);
      }) ? e : I + C(C(e, "-end", "-span"), "span ", "") + e;
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
      if (j(e) - 1 - t > 6)
        switch (R(e, t + 1)) {
          case 109:
            if (R(e, t + 4) !== 45)
              break;
          case 102:
            return C(e, /(.+:)(.+)-([^]+)/, "$1" + k + "$2-$3$1" + Me + (R(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~tt(e, "stretch") ? Or(C(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return C(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, a, s, u, l) {
        return I + o + ":" + i + l + (a ? I + o + "-span:" + (s ? u : +u - +i) + l : "") + e;
      });
    case 4949:
      if (R(e, t + 6) === 121)
        return C(e, ":", ":" + k) + e;
      break;
    case 6444:
      switch (R(e, R(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return C(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + k + (R(e, 14) === 45 ? "inline-" : "") + "box$3$1" + k + "$2$3$1" + I + "$2box$3") + e;
        case 100:
          return C(e, ":", ":" + I) + e;
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
function st(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Ei(e, t, n, r) {
  switch (e.type) {
    case si:
      if (e.children.length)
        break;
    case ai:
    case fn:
      return e.return = e.return || e.value;
    case wr:
      return "";
    case Sr:
      return e.return = e.value + "{" + st(e.children, r) + "}";
    case ht:
      if (!j(e.value = e.props.join(",")))
        return "";
  }
  return j(n = st(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function bi(e) {
  var t = kr(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function wi(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Si(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case fn:
        e.return = Or(e.value, e.length, n);
        return;
      case Sr:
        return st([ee(e, { value: C(e.value, "@", "@" + k) })], r);
      case ht:
        if (e.length)
          return li(n = e.props, function(o) {
            switch (Y(o, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                ye(ee(e, { props: [C(o, /:(read-\w+)/, ":" + Me + "$1")] })), ye(ee(e, { props: [o] })), Ft(e, { props: Fn(n, r) });
                break;
              case "::placeholder":
                ye(ee(e, { props: [C(o, /:(plac\w+)/, ":" + k + "input-$1")] })), ye(ee(e, { props: [C(o, /:(plac\w+)/, ":" + Me + "$1")] })), ye(ee(e, { props: [C(o, /:(plac\w+)/, I + "input-$1")] })), ye(ee(e, { props: [o] })), Ft(e, { props: Fn(n, r) });
                break;
            }
            return "";
          });
    }
}
var $i = {
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
}, S = {}, he = typeof process < "u" && S !== void 0 && (S.REACT_APP_SC_ATTR || S.SC_ATTR) || "data-styled", _n = typeof window < "u" && "HTMLElement" in window, ki = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && S !== void 0 && S.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && S.REACT_APP_SC_DISABLE_SPEEDY !== "" ? S.REACT_APP_SC_DISABLE_SPEEDY !== "false" && S.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && S !== void 0 && S.SC_DISABLE_SPEEDY !== void 0 && S.SC_DISABLE_SPEEDY !== "" ? S.SC_DISABLE_SPEEDY !== "false" && S.SC_DISABLE_SPEEDY : S.NODE_ENV !== "production"), Wn = /invalid hook call/i, qe = /* @__PURE__ */ new Set(), Ni = function(e, t) {
  if (S.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(a) {
        for (var s = [], u = 1; u < arguments.length; u++)
          s[u - 1] = arguments[u];
        Wn.test(a) ? (i = !1, qe.delete(r)) : o.apply(void 0, _e([a], s, !1));
      }, dt(), i && !qe.has(r) && (console.warn(r), qe.add(r));
    } catch (a) {
      Wn.test(a.message) && qe.delete(r);
    } finally {
      console.error = o;
    }
  }
}, yt = Object.freeze([]), $e = Object.freeze({});
function Oi(e, t, n) {
  return n === void 0 && (n = $e), e.theme !== n.theme && e.theme || t || n.theme;
}
var Wt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Ii = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ti = /(^-|-$)/g;
function zn(e) {
  return e.replace(Ii, "-").replace(Ti, "");
}
var xi = /(a)(d)/gi, Vn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function zt(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    n = Vn(t % 52) + n;
  return (Vn(t % 52) + n).replace(xi, "$1-$2");
}
var kt, ce = function(e, t) {
  for (var n = t.length; n; )
    e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Ir = function(e) {
  return ce(5381, e);
};
function Tr(e) {
  return zt(Ir(e) >>> 0);
}
function xr(e) {
  return S.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Nt(e) {
  return typeof e == "string" && (S.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Ar = typeof Symbol == "function" && Symbol.for, Rr = Ar ? Symbol.for("react.memo") : 60115, Ai = Ar ? Symbol.for("react.forward_ref") : 60112, Ri = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Pi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Pr = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Di = ((kt = {})[Ai] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, kt[Rr] = Pr, kt);
function jn(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Rr ? Pr : "$$typeof" in e ? Di[e.$$typeof] : Ri;
  var t;
}
var Li = Object.defineProperty, Mi = Object.getOwnPropertyNames, Gn = Object.getOwnPropertySymbols, Hi = Object.getOwnPropertyDescriptor, Fi = Object.getPrototypeOf, Yn = Object.prototype;
function Dr(e, t, n) {
  if (typeof t != "string") {
    if (Yn) {
      var r = Fi(t);
      r && r !== Yn && Dr(e, r, n);
    }
    var o = Mi(t);
    Gn && (o = o.concat(Gn(t)));
    for (var i = jn(e), a = jn(t), s = 0; s < o.length; ++s) {
      var u = o[s];
      if (!(u in Pi || n && n[u] || a && u in a || i && u in i)) {
        var l = Hi(t, u);
        try {
          Li(e, u, l);
        } catch {
        }
      }
    }
  }
  return e;
}
function pe(e) {
  return typeof e == "function";
}
function hn(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function ue(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Vt(e, t) {
  if (e.length === 0)
    return "";
  for (var n = e[0], r = 1; r < e.length; r++)
    n += t ? t + e[r] : e[r];
  return n;
}
function ke(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function jt(e, t, n) {
  if (n === void 0 && (n = !1), !n && !ke(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++)
      e[r] = jt(e[r], t[r]);
  else if (ke(t))
    for (var r in t)
      e[r] = jt(e[r], t[r]);
  return e;
}
function pn(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Bi = S.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Ui() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1)
    r.push(e[o]);
  return r.forEach(function(a) {
    n = n.replace(/%[a-z]/, a);
  }), n;
}
function G(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return S.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Ui.apply(void 0, _e([Bi[e]], t, !1)).trim());
}
var Wi = function() {
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
          throw G(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(r), this.length = i;
      for (var a = o; a < i; a++)
        this.groupSizes[a] = 0;
    }
    for (var s = this.indexOfGroup(t + 1), u = (a = 0, n.length); a < u; a++)
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
}(), ot = /* @__PURE__ */ new Map(), ct = /* @__PURE__ */ new Map(), it = 1, Xe = function(e) {
  if (ot.has(e))
    return ot.get(e);
  for (; ct.has(it); )
    it++;
  var t = it++;
  if (S.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1073741824))
    throw G(16, "".concat(t));
  return ot.set(e, t), ct.set(t, e), t;
}, zi = function(e, t) {
  it = t + 1, ot.set(e, t), ct.set(t, e);
}, Vi = "style[".concat(he, "][").concat("data-styled-version", '="').concat("6.1.1", '"]'), ji = new RegExp("^".concat(he, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Gi = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++)
    (r = o[i]) && e.registerName(t, r);
}, Yi = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(`/*!sc*/
`), o = [], i = 0, a = r.length; i < a; i++) {
    var s = r[i].trim();
    if (s) {
      var u = s.match(ji);
      if (u) {
        var l = 0 | parseInt(u[1], 10), f = u[2];
        l !== 0 && (zi(f, l), Gi(e, f, u[3]), e.getTag().insertRules(l, o)), o.length = 0;
      } else
        o.push(s);
    }
  }
};
function Zi() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Lr = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(s) {
    var u = Array.from(s.querySelectorAll("style[".concat(he, "]")));
    return u[u.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(he, "active"), r.setAttribute("data-styled-version", "6.1.1");
  var a = Zi();
  return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
}, qi = function() {
  function e(t) {
    this.element = Lr(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet)
        return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var a = r[o];
        if (a.ownerNode === n)
          return a;
      }
      throw G(17);
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
}(), Xi = function() {
  function e(t) {
    this.element = Lr(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), Ki = function() {
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
}(), Zn = _n, Ji = { isServer: !_n, useCSSOMInjection: !ki }, Mr = function() {
  function e(t, n, r) {
    t === void 0 && (t = $e), n === void 0 && (n = {});
    var o = this;
    this.options = P(P({}, Ji), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && _n && Zn && (Zn = !1, function(i) {
      for (var a = document.querySelectorAll(Vi), s = 0, u = a.length; s < u; s++) {
        var l = a[s];
        l && l.getAttribute(he) !== "active" && (Yi(i, l), l.parentNode && l.parentNode.removeChild(l));
      }
    }(this)), pn(this, function() {
      return function(i) {
        for (var a = i.getTag(), s = a.length, u = "", l = function(c) {
          var h = function(g) {
            return ct.get(g);
          }(c);
          if (h === void 0)
            return "continue";
          var d = i.names.get(h), m = a.getGroup(c);
          if (d === void 0 || m.length === 0)
            return "continue";
          var E = "".concat(he, ".g").concat(c, '[id="').concat(h, '"]'), $ = "";
          d !== void 0 && d.forEach(function(g) {
            g.length > 0 && ($ += "".concat(g, ","));
          }), u += "".concat(m).concat(E, '{content:"').concat($, '"}').concat(`/*!sc*/
`);
        }, f = 0; f < s; f++)
          l(f);
        return u;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return Xe(t);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(P(P({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new Ki(o) : r ? new qi(o) : new Xi(o);
    }(this.options), new Wi(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (Xe(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(Xe(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Xe(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), Qi = /&/g, ea = /^\s*\/\/.*$/gm;
function Hr(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = Hr(n.children, t)), n;
  });
}
function Fr(e) {
  var t, n, r, o = e === void 0 ? $e : e, i = o.options, a = i === void 0 ? $e : i, s = o.plugins, u = s === void 0 ? yt : s, l = function(h, d, m) {
    return m === n || m.startsWith(n) && m.endsWith(n) && m.replaceAll(n, "").length > 0 ? ".".concat(t) : h;
  }, f = u.slice();
  f.push(function(h) {
    h.type === ht && h.value.includes("&") && (h.props[0] = h.props[0].replace(Qi, n).replace(r, l));
  }), a.prefix && f.push(Si), f.push(Ei);
  var c = function(h, d, m, E) {
    d === void 0 && (d = ""), m === void 0 && (m = ""), E === void 0 && (E = "&"), t = E, n = d, r = new RegExp("\\".concat(n, "\\b"), "g");
    var $ = h.replace(ea, ""), g = vi(m || d ? "".concat(m, " ").concat(d, " { ").concat($, " }") : $);
    a.namespace && (g = Hr(g, a.namespace));
    var v = [];
    return st(g, bi(f.concat(wi(function(w) {
      return v.push(w);
    })))), v;
  };
  return c.hash = u.length ? u.reduce(function(h, d) {
    return d.name || G(15), ce(h, d.name);
  }, 5381).toString() : "", c;
}
var ta = new Mr(), Gt = Fr(), mn = K.createContext({ shouldForwardProp: void 0, styleSheet: ta, stylis: Gt });
mn.Consumer;
var na = K.createContext(void 0);
function Yt() {
  return cn(mn);
}
function ra(e) {
  var t = M(e.stylisPlugins), n = t[0], r = t[1], o = Yt().styleSheet, i = le(function() {
    var u = o;
    return e.sheet ? u = e.sheet : e.target && (u = u.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (u = u.reconstructWithOptions({ useCSSOMInjection: !1 })), u;
  }, [e.disableCSSOMInjection, e.sheet, e.target, o]), a = le(function() {
    return Fr({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: n });
  }, [e.enableVendorPrefixes, e.namespace, n]);
  oe(function() {
    ii(n, e.stylisPlugins) || r(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var s = le(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: a };
  }, [e.shouldForwardProp, i, a]);
  return K.createElement(mn.Provider, { value: s }, K.createElement(na.Provider, { value: a }, e.children));
}
var Zt = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Gt);
      var a = r.name + i.hash;
      o.hasNameForId(r.id, a) || o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, pn(this, function() {
      throw G(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Gt), this.name + t.hash;
  }, e;
}(), oa = function(e) {
  return e >= "A" && e <= "Z";
};
function qn(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-")
      return e;
    oa(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Br = function(e) {
  return e == null || e === !1 || e === "";
}, Ur = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !Br(i) && (Array.isArray(i) && i.isCss || pe(i) ? r.push("".concat(qn(o), ":"), i, ";") : ke(i) ? r.push.apply(r, _e(_e(["".concat(o, " {")], Ur(i), !1), ["}"], !1)) : r.push("".concat(qn(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in $i || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function de(e, t, n, r) {
  if (Br(e))
    return [];
  if (hn(e))
    return [".".concat(e.styledComponentId)];
  if (pe(e)) {
    if (!pe(i = e) || i.prototype && i.prototype.isReactComponent || !t)
      return [e];
    var o = e(t);
    return S.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Zt || ke(o) || o === null || console.error("".concat(xr(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), de(o, t, n, r);
  }
  var i;
  return e instanceof Zt ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : ke(e) ? Ur(e) : Array.isArray(e) ? Array.prototype.concat.apply(yt, e.map(function(a) {
    return de(a, t, n, r);
  })) : [e.toString()];
}
function ia(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (pe(n) && !hn(n))
      return !1;
  }
  return !0;
}
var aa = Ir("6.1.1"), sa = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = S.NODE_ENV === "production" && (r === void 0 || r.isStatic) && ia(t), this.componentId = n, this.baseHash = ce(aa, n), this.baseStyle = r, Mr.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash)
      if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId))
        o = ue(o, this.staticRulesId);
      else {
        var i = Vt(de(this.rules, t, n, r)), a = zt(ce(this.baseHash, i) >>> 0);
        if (!n.hasNameForId(this.componentId, a)) {
          var s = r(i, ".".concat(a), void 0, this.componentId);
          n.insertRules(this.componentId, a, s);
        }
        o = ue(o, a), this.staticRulesId = a;
      }
    else {
      for (var u = ce(this.baseHash, r.hash), l = "", f = 0; f < this.rules.length; f++) {
        var c = this.rules[f];
        if (typeof c == "string")
          l += c, S.NODE_ENV !== "production" && (u = ce(u, c));
        else if (c) {
          var h = Vt(de(c, t, n, r));
          u = ce(u, h + f), l += h;
        }
      }
      if (l) {
        var d = zt(u >>> 0);
        n.hasNameForId(this.componentId, d) || n.insertRules(this.componentId, d, r(l, ".".concat(d), void 0, this.componentId)), o = ue(o, d);
      }
    }
    return o;
  }, e;
}(), Ue = K.createContext(void 0);
Ue.Consumer;
function ca() {
  var e = cn(Ue);
  if (!e)
    throw G(18);
  return e;
}
function ua(e) {
  var t = K.useContext(Ue), n = le(function() {
    return function(r, o) {
      if (!r)
        throw G(14);
      if (pe(r)) {
        var i = r(o);
        if (S.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object"))
          throw G(7);
        return i;
      }
      if (Array.isArray(r) || typeof r != "object")
        throw G(8);
      return o ? P(P({}, o), r) : r;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? K.createElement(Ue.Provider, { value: n }, e.children) : null;
}
var Ot = {}, Xn = /* @__PURE__ */ new Set();
function la(e, t, n) {
  var r = hn(e), o = e, i = !Nt(e), a = t.attrs, s = a === void 0 ? yt : a, u = t.componentId, l = u === void 0 ? function(N, O) {
    var b = typeof N != "string" ? "sc" : zn(N);
    Ot[b] = (Ot[b] || 0) + 1;
    var y = "".concat(b, "-").concat(Tr("6.1.1" + b + Ot[b]));
    return O ? "".concat(O, "-").concat(y) : y;
  }(t.displayName, t.parentComponentId) : u, f = t.displayName, c = f === void 0 ? function(N) {
    return Nt(N) ? "styled.".concat(N) : "Styled(".concat(xr(N), ")");
  }(e) : f, h = t.displayName && t.componentId ? "".concat(zn(t.displayName), "-").concat(t.componentId) : t.componentId || l, d = r && o.attrs ? o.attrs.concat(s).filter(Boolean) : s, m = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var E = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var $ = t.shouldForwardProp;
      m = function(N, O) {
        return E(N, O) && $(N, O);
      };
    } else
      m = E;
  }
  var g = new sa(n, h, r ? o.componentStyle : void 0);
  function v(N, O) {
    return function(b, y, U) {
      var A = b.attrs, me = b.componentStyle, Zr = b.defaultProps, qr = b.foldedComponentIds, yn = b.styledComponentId, Xr = b.target, Kr = K.useContext(Ue), Jr = Yt(), vt = b.shouldForwardProp || Jr.shouldForwardProp;
      S.NODE_ENV !== "production" && Dt(yn);
      var J = function(Ve, Ae, je) {
        for (var ge, ae = P(P({}, Ae), { className: void 0, theme: je }), bt = 0; bt < Ve.length; bt += 1) {
          var Ge = pe(ge = Ve[bt]) ? ge(ae) : ge;
          for (var Q in Ge)
            ae[Q] = Q === "className" ? ue(ae[Q], Ge[Q]) : Q === "style" ? P(P({}, ae[Q]), Ge[Q]) : Ge[Q];
        }
        return Ae.className && (ae.className = ue(ae.className, Ae.className)), ae;
      }(A, y, Oi(y, Kr, Zr) || $e), Te = J.as || Xr, xe = {};
      for (var H in J)
        J[H] === void 0 || H[0] === "$" || H === "as" || H === "theme" || (H === "forwardedAs" ? xe.as = J.forwardedAs : vt && !vt(H, Te) || (xe[H] = J[H], vt || S.NODE_ENV !== "development" || yo(H) || Xn.has(H) || !Wt.has(Te) || (Xn.add(H), console.warn('styled-components: it looks like an unknown prop "'.concat(H, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Ct = function(Ve, Ae) {
        var je = Yt(), ge = Ve.generateAndInjectStyles(Ae, je.styleSheet, je.stylis);
        return S.NODE_ENV !== "production" && Dt(ge), ge;
      }(me, J);
      S.NODE_ENV !== "production" && b.warnTooManyClasses && b.warnTooManyClasses(Ct);
      var Et = ue(qr, yn);
      return Ct && (Et += " " + Ct), J.className && (Et += " " + J.className), xe[Nt(Te) && !Wt.has(Te) ? "class" : "className"] = Et, xe.ref = U, D(Te, xe);
    }(w, N, O);
  }
  v.displayName = c;
  var w = K.forwardRef(v);
  return w.attrs = d, w.componentStyle = g, w.displayName = c, w.shouldForwardProp = m, w.foldedComponentIds = r ? ue(o.foldedComponentIds, o.styledComponentId) : "", w.styledComponentId = h, w.target = r ? o.target : e, Object.defineProperty(w, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(N) {
    this._foldedDefaultProps = r ? function(O) {
      for (var b = [], y = 1; y < arguments.length; y++)
        b[y - 1] = arguments[y];
      for (var U = 0, A = b; U < A.length; U++)
        jt(O, A[U], !0);
      return O;
    }({}, o.defaultProps, N) : N;
  } }), S.NODE_ENV !== "production" && (Ni(c, h), w.warnTooManyClasses = /* @__PURE__ */ function(N, O) {
    var b = {}, y = !1;
    return function(U) {
      if (!y && (b[U] = !0, Object.keys(b).length >= 200)) {
        var A = O ? ' with the id of "'.concat(O, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(N).concat(A, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), y = !0, b = {};
      }
    };
  }(c, h)), pn(w, function() {
    return ".".concat(w.styledComponentId);
  }), i && Dr(w, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), w;
}
function Kn(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var Jn = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function ie(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  if (pe(e) || ke(e)) {
    var r = e;
    return Jn(de(Kn(yt, _e([r], t, !0))));
  }
  var o = e;
  return t.length === 0 && o.length === 1 && typeof o[0] == "string" ? de(o) : Jn(de(Kn(o, t)));
}
function qt(e, t, n) {
  if (n === void 0 && (n = $e), !t)
    throw G(1, t);
  var r = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++)
      i[a - 1] = arguments[a];
    return e(t, n, ie.apply(void 0, _e([o], i, !1)));
  };
  return r.attrs = function(o) {
    return qt(e, t, P(P({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return qt(e, t, P(P({}, n), o));
  }, r;
}
var Wr = function(e) {
  return qt(la, e);
}, L = Wr;
Wt.forEach(function(e) {
  L[e] = Wr(e);
});
function Ie(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  S.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = Vt(ie.apply(void 0, _e([e], t, !1))), o = Tr(r);
  return new Zt(o, r);
}
S.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Ke = "__sc-".concat(he, "__");
S.NODE_ENV !== "production" && S.NODE_ENV !== "test" && typeof window < "u" && (window[Ke] || (window[Ke] = 0), window[Ke] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Ke] += 1);
var fa = 0;
function _(e, t, n, r, o, i) {
  var a, s, u = {};
  for (s in t)
    s == "ref" ? a = t[s] : u[s] = t[s];
  var l = { type: e, props: u, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --fa, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (a = e.defaultProps))
    for (s in a)
      u[s] === void 0 && (u[s] = a[s]);
  return p.vnode && p.vnode(l), l;
}
const zr = ({
  svgSize: e
}) => _("svg", {
  fill: "none",
  height: e,
  viewBox: "0 0 16 14",
  width: e,
  xmlns: "http://www.w3.org/2000/svg",
  children: _("path", {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })
}), da = 2, It = 14, Qn = 5, er = 0.027;
var Z = /* @__PURE__ */ ((e) => (e[e.S = 300] = "S", e[e.M = 400] = "M", e[e.L = 500] = "L", e[e.Default = 600] = "Default", e))(Z || {});
const De = {
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
}, tr = {
  loading: {
    text: "Loading. Please wait.",
    visible: !0
  },
  done: {
    text: "Waiting for input...",
    visible: !0
  }
}, _a = {
  [W.CANDIDATE_SELECTION]: "Stay still…",
  [W.FACE_TOO_CLOSE]: "Move back",
  [W.FACE_TOO_FAR]: "Move closer",
  [W.FACE_CENTERING]: "Center your face",
  [W.FACE_NOT_PRESENT]: "Position your face into the circle",
  [W.SHARPNESS_TOO_LOW]: "Turn face against light",
  [W.BRIGHTNESS_TOO_LOW]: "Turn face against light",
  [W.BRIGHTNESS_TOO_HIGH]: "Less light needed",
  [W.DEVICE_PITCHED]: "Hold your phone at eye level"
}, ha = {
  ..._a,
  [Fe.FIT_YOUR_EYE]: "Fit your eye into square",
  [Fe.DEVICE_PITCHED]: "Hold your phone at eye level"
}, pa = "rgba(19, 19, 19, 0.5)", ma = 34, Vr = (e) => e ? e.width < e.height ? Math.max(It, Qn + e.width * er) : Math.max(It, Qn + e.height * er) : It, ga = (e) => e > Z.Default ? De[Z.Default] : e > Z.L ? De[Z.L] : e > Z.M ? De[Z.M] : De[Z.S], ya = (e) => e ? ga(e.width) : De[Z.Default], va = L.div`
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
`, Ca = L.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, Ea = L.p`
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
`, Xt = ({
  fontSize: e,
  Icon: t,
  isCameraReady: n,
  position: r = "absolute",
  text: o
}) => _(va, {
  $isCameraReady: n,
  $position: r,
  children: _(Ca, {
    children: [t ? _(t, {
      svgSize: e * 2
    }) : null, _(Ea, {
      $fontSize: e,
      children: o
    })]
  })
}), jr = ({
  fontSize: e,
  text: t = "An unknown error has occurred"
}) => _(Xt, {
  fontSize: e,
  Icon: zr,
  position: "relative",
  text: t
});
class ba extends z {
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
    return this.state.hasError ? _(jr, {
      fontSize: Vr(this.props.videoElementSize),
      Icon: zr,
      isCameraReady: !1
    }) : this.props.children;
  }
}
const wa = ({
  children: e,
  styleTarget: t,
  theme: n,
  videoElementSize: r
}) => _(ra, {
  target: t,
  children: _(ua, {
    theme: n,
    children: _(ba, {
      videoElementSize: r,
      children: e
    })
  })
}), We = (e, t) => {
  const n = dt(t);
  oe(() => {
    n.current = t;
  }, [t]), oe(
    () => {
      const r = (o) => n.current(o);
      return document.addEventListener(e, r), () => {
        document.removeEventListener(e, r);
      };
    },
    [e]
    // Re-run if eventName
  );
}, Sa = (e) => {
  const [t, n] = M(), r = be((o) => {
    var i;
    n((i = o.detail) == null ? void 0 : i.size);
  }, [n]);
  return We(e, r), t;
}, $a = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, Tt = {
  colors: $a
}, ka = (e) => e != null && e.theme ? {
  ...Tt,
  ...e.theme,
  colors: {
    ...Tt.colors,
    ...e.theme.colors
  }
} : Tt, Na = 0.75, Oa = 2, gn = (e, t) => {
  document.dispatchEvent(new CustomEvent(e, {
    detail: t
  }));
}, ut = class ut {
  constructor() {
    Ye(this, "lastDetails", {});
    Ye(this, "delayedTime", 0);
  }
  static getInstance() {
    return this._instance || (this._instance = new ut()), this._instance;
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
    this.isDetailChanged(t, n) && gn(t, n);
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
Ye(ut, "_instance");
let Kt = ut;
Kt.getInstance();
const nr = (e, t) => {
  gn(e, {
    instruction: t
  });
}, Ia = (e) => {
  gn(e, {
    animationEnd: !0
  });
}, Ta = (e) => Number.parseFloat(e.toFixed(3)), Gr = (e, t) => Math.min(e, t), xa = (e, t) => {
  const n = Gr(t.width, t.height);
  return Ta(e * n);
}, Aa = ({
  height: e,
  width: t
}) => {
  const n = Gr(t, e) * Na, r = (t - n) / 2, o = (e - n) / 2;
  return {
    shiftX: r,
    shiftY: o,
    width: n,
    height: n
  };
}, Ra = (e) => {
  const {
    height: t,
    shiftX: n,
    shiftY: r,
    width: o
  } = Aa(e);
  return {
    shiftX: n / e.width,
    shiftY: r / e.height,
    width: o / e.width,
    height: t / e.height
  };
}, Pa = (e, t) => xa(e, t) * Oa;
class Da {
  static async getVideoInputDeviceList() {
    return (await navigator.mediaDevices.enumerateDevices()).filter((n) => n.kind === "videoinput");
  }
}
const La = () => {
  const [e, t] = M(!1);
  return oe(() => {
    (async () => {
      (await Da.getVideoInputDeviceList()).length > 1 && t(!0);
    })();
  }, []), e;
}, Ma = ({
  size: e
}) => _("svg", {
  fill: "none",
  height: e,
  viewBox: "0 0 52 52",
  width: e,
  xmlns: "http://www.w3.org/2000/svg",
  children: [_("path", {
    d: "M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z",
    fill: "#131313",
    fillOpacity: "0.3"
  }), _("circle", {
    cx: "17.5",
    cy: "24.5",
    fill: "white",
    r: "1.5"
  }), _("path", {
    d: "M15 17H16C19.5 17 23 21 23 29C22.5 29 21.5 29 20 29C20 29 20.25 33 19.5 34.5C18.75 36 16 36 16 36H15",
    stroke: "white",
    strokeWidth: "2"
  }), _("circle", {
    fill: "white",
    r: "1.5",
    transform: "matrix(-1 0 0 1 34.5 24.5)"
  }), _("path", {
    d: "M37 17H36C32.5 17 29 21 29 29C29.5 29 30.5 29 32 29C32 29 31.75 33 32.5 34.5C33.25 36 36 36 36 36H37",
    stroke: "white",
    strokeWidth: "2"
  })]
}), Ha = ({
  size: e
}) => _("svg", {
  fill: "none",
  height: e,
  viewBox: "0 0 52 52",
  width: "52",
  xmlns: "http://www.w3.org/2000/svg",
  children: [_("circle", {
    cx: "26",
    cy: "26",
    fill: "#131313",
    fillOpacity: "0.3",
    r: "26"
  }), _("path", {
    d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
    fill: "white"
  })]
}), Yr = L.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(e) => e.$marginLeft ? `${e.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, Fa = ({
  marginLeft: e,
  size: t,
  ...n
}) => _(Yr, {
  $marginLeft: e,
  ...n,
  children: _(Ma, {
    size: t
  })
}), Ba = ({
  marginLeft: e,
  size: t,
  ...n
}) => _(Yr, {
  $marginLeft: e,
  ...n,
  children: _(Ha, {
    size: t
  })
}), Ua = L.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.$padding}px`};
  z-index: 2;
`, Wa = ({
  customControlEvent: e,
  isSwitchCameraDisabled: t,
  videoElementSize: n
}) => {
  const r = La(), {
    buttonPadding: o,
    iconSize: i,
    marginLeft: a
  } = ya(n), s = () => {
    nr(e, Pt.TOGGLE_MIRROR);
  };
  return _(Ua, {
    $padding: o,
    children: [r && _(Ba, {
      disabled: t,
      onClick: () => {
        nr(e, Pt.SWITCH_CAMERA);
      },
      size: i
    }), _(Fa, {
      marginLeft: r ? a : 0,
      onClick: s,
      size: i
    })]
  });
}, rr = 2.6, Jt = "1.5s", Qt = "1.5s", en = "ease-in-out", za = 2500, Va = "2.5s", ja = "0.3s", Ga = "linear", Ya = ".5s", Za = "3s", qa = "ease-in-out", Xa = ".5s", Ka = ".5s", Ja = "ease-out", Qa = (e) => Ie`
100% {
  transform: translateX(22%)  scale(${e});
}
`, es = (e) => Ie`
100% {
  transform: translate(34%, 8%)  scale(${e * 0.98});
}
`, ts = Ie`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`, ns = Ie`
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`, rs = Ie`
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
`, os = Ie`
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
`, is = L.div`
  position: absolute;
  left: 50%;

  ${(e) => e.$cssTop ? `top: ${e.$cssTop}%;` : ""}
  ${(e) => e.$cssBottom ? `bottom: ${e.$cssBottom}%;` : ""}
    ${(e) => e.$isAnimating && ie`
      animation: ${ts} ${ja}
        ${Ga} both;
      animation-delay: ${Va};

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
`, as = L.div`
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
`, ss = ({
  children: e,
  cssBottom: t,
  cssTop: n,
  fontSize: r,
  isAnimating: o,
  isInCandidateSelection: i,
  isPortrait: a
}) => _(is, {
  $cssBottom: t,
  $cssTop: n,
  $isAnimating: o,
  $isPortrait: a,
  children: _(as, {
    $fontSize: r,
    $isInCandidateSelection: i,
    $wrap: e.length > ma,
    children: e
  })
}), cs = L.canvas`
  transform: ${(e) => e.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, us = (e) => {
  const t = e.getContext("2d");
  t && t.clearRect(0, 0, t.canvas.width, t.canvas.height);
}, ls = ({
  cameraResolution: e,
  isImageMirror: t
}) => {
  const n = dt(null), r = ca(), [o, i] = M(), a = be((s) => {
    var u;
    i((u = s == null ? void 0 : s.detail) == null ? void 0 : u.detectedObject);
  }, [i]);
  return We(Ce.DETECTED_FACE_CHANGED, a), oe(() => {
    if (!n.current)
      return;
    const s = (u, l) => {
      var m;
      if (!l)
        return;
      const {
        faceCenter: f,
        faceSize: c
      } = l, h = (m = n == null ? void 0 : n.current) == null ? void 0 : m.getContext("2d");
      if (!h)
        return;
      const d = Pa(c, u);
      h.beginPath(), h.arc(f.x, f.y, d, 0, 2 * Math.PI, !1), h.lineWidth = da, h.strokeStyle = r.colors.placeholderColor, h.stroke();
    };
    n.current.width = e.width, n.current.height = e.height, us(n.current), s(e, o);
  }, [e, o, r.colors.placeholderColor]), _(cs, {
    ref: n,
    $isImageMirror: t
  });
}, fs = () => {
  const [e, t] = M(), [n, r] = M(!1), o = be((u) => {
    var f, c;
    t((f = u == null ? void 0 : u.detail) == null ? void 0 : f.cameraResolution);
    const l = (c = u == null ? void 0 : u.detail) == null ? void 0 : c.isMirroring;
    l !== void 0 && r(l);
  }, [t]);
  We(Ce.CAMERA_PROPS_CHANGED, o);
  const [i, a] = M(
    W.FACE_NOT_PRESENT
    // FIXME Default instruction should not be here
  ), s = be((u) => {
    var l;
    a((l = u == null ? void 0 : u.detail) == null ? void 0 : l.instructionCode);
  }, [a]);
  return We(Ce.INSTRUCTION_CHANGED, s), {
    cameraResolution: e,
    instructionCode: i,
    isMirroring: n
  };
}, ds = (e, t) => {
  const [n, r] = M(!1);
  return oe(() => {
    if (t === Be.CLOSEUP) {
      r(!0);
      const o = setTimeout(() => {
        r(!1);
      }, za);
      return () => clearTimeout(o);
    }
  }, [t]), e && n ? e === Fe.CANDIDATE_SELECTION ? e : Fe.FIT_YOUR_EYE : e;
}, _s = () => {
  const [e, t] = M(Be.DISTANT), [n, r] = M(te.LOADING), [o, i] = M(), a = be((s) => {
    const {
      error: u,
      phase: l,
      state: f
    } = s.detail || {};
    l && t(l), f && r(f), u && i(u);
  }, [t, r, i]);
  return We(sn.STATUS_CHANGED, a), {
    magnifEyePhase: e,
    magnifEyeState: n,
    magnifEyeError: o
  };
}, hs = L.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, ps = ({
  svgSize: e
}) => _(hs, {
  children: _("svg", {
    fill: "none",
    height: e,
    viewBox: "0 0 48 48",
    width: e,
    xmlns: "http://www.w3.org/2000/svg",
    children: [_("path", {
      d: "M30.9229 9.75026C30.9229 12.3736 28.7533 14.5002 26.0767 14.5002C23.4003 14.5002 21.2307 12.3736 21.2307 9.75026C21.2307 7.12664 23.4003 5 26.0767 5C28.7533 5 30.9229 7.12664 30.9229 9.75026Z",
      fill: "currentColor"
    }), _("path", {
      d: "M40.6155 15.8556C40.6155 18.1044 38.7559 19.9273 36.4618 19.9273C34.1675 19.9273 32.3079 18.1044 32.3079 15.8556C32.3079 13.607 34.1675 11.7842 36.4618 11.7842C38.7559 11.7842 40.6155 13.607 40.6155 15.8556Z",
      fill: "currentColor"
    }), _("path", {
      d: "M42 27.3921C42 29.2659 40.4502 30.785 38.5386 30.785C36.6267 30.785 35.0769 29.2659 35.0769 27.3921C35.0769 25.5181 36.6267 23.999 38.5386 23.999C40.4502 23.999 42 25.5181 42 27.3921Z",
      fill: "currentColor"
    }), _("path", {
      d: "M35.0766 37.5712C35.0766 39.0704 33.837 40.2858 32.3075 40.2858C30.7779 40.2858 29.5383 39.0704 29.5383 37.5712C29.5383 36.0723 30.7779 34.8569 32.3075 34.8569C33.837 34.8569 35.0766 36.0723 35.0766 37.5712Z",
      fill: "currentColor"
    }), _("path", {
      d: "M22.6154 40.2858C22.6154 41.7848 21.3756 43.0001 19.846 43.0001C18.3168 43.0001 17.0769 41.7848 17.0769 40.2858C17.0769 38.7866 18.3168 37.5713 19.846 37.5713C21.3756 37.5713 22.6154 38.7866 22.6154 40.2858Z",
      fill: "currentColor"
    }), _("path", {
      d: "M11.5382 32.8216C11.5382 33.9457 10.6085 34.8573 9.46137 34.8573C8.31426 34.8573 7.38452 33.9457 7.38452 32.8216C7.38452 31.6972 8.31426 30.7856 9.46137 30.7856C10.6085 30.7856 11.5382 31.6972 11.5382 32.8216Z",
      fill: "currentColor"
    }), _("path", {
      d: "M8.76913 21.2849C8.76913 22.0345 8.14932 22.642 7.38456 22.642C6.6198 22.642 6 22.0345 6 21.2849C6 20.5353 6.61981 19.9277 7.38456 19.9277C8.14933 19.9277 8.76913 20.5353 8.76913 21.2849Z",
      fill: "currentColor"
    }), _("path", {
      d: "M15.6927 11.7844C15.6927 12.534 15.0729 13.1415 14.3081 13.1415C13.5434 13.1415 12.9236 12.534 12.9236 11.7844C12.9236 11.0348 13.5434 10.4272 14.3081 10.4272C15.0729 10.4272 15.6927 11.0348 15.6927 11.7844Z",
      fill: "currentColor"
    })]
  })
}), ms = L.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`, gs = ({
  backdropColor: e,
  children: t
}) => _(ms, {
  children: _("svg", {
    height: "100%",
    width: "100%",
    children: [_("defs", {
      children: _("mask", {
        id: "mask",
        children: [_("rect", {
          fill: "#fff",
          height: "100%",
          width: "100%"
        }), t]
      })
    }), _("rect", {
      fill: e,
      height: "100%",
      mask: "url(#mask)",
      width: "100%"
    })]
  })
}), ys = ({
  backdropColor: e,
  fontSize: t,
  magnifEyeState: n,
  magnifEyeStateInstructions: r
}) => {
  const o = n === te.ERROR || n === te.RUNNING;
  return !n || o || !r[n].visible ? null : n === te.DONE ? _(F, {
    children: [_(gs, {
      backdropColor: e
    }), _(Xt, {
      fontSize: t,
      isCameraReady: !0,
      text: r[n].text
    })]
  }) : _(F, {
    children: _(Xt, {
      fontSize: t,
      Icon: ps,
      isCameraReady: !0,
      text: r[n].text
    })
  });
}, vs = L.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${(e) => e.$isInCandidateSelection ? `${e.theme.colors.placeholderColorSuccess}` : `${e.theme.colors.placeholderColor}`};

  #backdrop-cutout,
  #placeholder {
    @media (min-width: 668px) {
      stroke-width: 4;
    }
    @media (min-width: 2240px) {
      stroke-width: 6;
    }
    transform-origin: center;

    ${(e) => e.$isAnimating && ie`
        animation: ${Qa(rr)} ${Qt}
          ${en} both;
        animation-delay: ${Jt};
      `}

    @media (max-width: 667px) {
      ${(e) => e.$isAnimating && ie`
          animation: ${es(rr)} ${Qt}
            ${en} both;
          animation-delay: ${Jt};
        `}
    }
  }
`, Cs = ({
  backdropColor: e,
  handleAnimationEnd: t,
  initialPosition: n,
  isAnimating: r,
  isInCandidateSelection: o
}) => _(vs, {
  $isAnimating: r,
  $isInCandidateSelection: o,
  onAnimationEnd: t,
  children: _("svg", {
    height: "100%",
    width: "100%",
    children: [_("mask", {
      id: "mask",
      children: [_("rect", {
        fill: "#fff",
        height: "100%",
        width: "100%"
      }), _("rect", {
        fill: "#000",
        height: `${n.height * 100}%`,
        id: "backdrop-cutout",
        rx: "50%",
        width: `${n.width * 100}%`,
        x: `${n.shiftX * 100}%`,
        y: `${n.shiftY * 100}%`
      })]
    }), _("rect", {
      fill: e,
      height: "100%",
      mask: "url(#mask)",
      width: "100%"
    }), _("rect", {
      clipPath: "circle()",
      fill: "none",
      height: `${n.height * 100}%`,
      id: "placeholder",
      rx: "50%",
      stroke: "currentColor",
      strokeWidth: "3",
      width: `${n.width * 100}%`,
      x: `${n.shiftX * 100}%`,
      y: `${n.shiftY * 100}%`
    })]
  })
}), Es = () => _("svg", {
  id: "Layer_1",
  style: "enable-background:new 0 0 62 62;",
  version: "1.1",
  viewBox: "0 0 62 62",
  x: "0px",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  xmlSpace: "preserve",
  y: "0px",
  children: _("path", {
    className: "st0",
    d: "M48.8,1H54c3.9,0,7,3.1,7,7v5.5 M13.2,1H8C4.1,1,1,4.1,1,8c0,1.8,0,3.7,0,5.5 M1,48.5V54c0,3.9,3.1,7,7,7h5.8 M61,48.5V54c0,3.9-3.1,7-7,7h-5.2",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "1"
  })
}), bs = () => _("svg", {
  id: "Layer_1",
  style: "enable-background:new 0 0 154 70;",
  version: "1.1",
  viewBox: "0 0 154 70",
  x: "0px",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  xmlSpace: "preserve",
  y: "0px",
  children: [_("path", {
    className: "st0",
    d: "M98.1,35c0,11-9.4,20-21,20c-11.6,0-21-9-21-20s9.4-20,21-20C88.7,15,98.1,24,98.1,35z",
    fill: "none",
    stroke: "#FFFFFF",
    strokeWidth: "2"
  }), _("path", {
    className: "st1",
    d: "M152.5,35c-0.2,0.2-0.5,0.5-0.8,0.8c-0.9,0.9-2.2,2.3-4,3.9c-3.5,3.3-8.6,7.6-15.2,11.9 C119.3,60.3,100.3,69,77.1,69c-23.2,0-42.3-8.7-55.6-17.3C14.8,47.3,9.6,43,6.1,39.7c-1.8-1.6-3.1-3-4-3.9c-0.3-0.3-0.6-0.6-0.8-0.8 c0.2-0.2,0.5-0.5,0.8-0.8c0.9-0.9,2.2-2.3,4-3.9c3.5-3.3,8.7-7.6,15.4-11.9C34.8,9.7,53.8,1,77.1,1c23.2,0,42.2,8.7,55.4,17.3 c6.6,4.3,11.7,8.7,15.2,11.9c1.7,1.6,3.1,3,4,3.9C152,34.5,152.3,34.8,152.5,35z",
    fill: "none",
    stroke: "#FFFFFF",
    strokeMiterlimit: "10",
    strokeWidth: "2"
  })]
}), ws = L.div`
  position: absolute;
  top: 47%;
  left: 43%;
  transform: translate(-50%, -50%);
  width: 7%;
  aspect-ratio: 1;

  @media (max-width: 768px) {
    width: 14%;
  }

  ${(e) => e.$isAnimating && ie`
      animation: ${ns} ${Qt} ${en} both;
      animation-delay: ${Jt};
    `}
`, Ss = L.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.6);
  opacity: 0;

  ${(e) => e.$isAnimating && ie`
      animation: ${rs} ${Za} ${qa} both;
      animation-delay: ${Ya};
    `}

  svg {
    display: inline-block;
    width: 100%;
    height: auto;
    filter: drop-shadow(0px 0px 5px rgba(2, 27, 65, 0.3));
  }
`, $s = L.div`
  position: absolute;
  width: 100%;
  height: 100%;
  color: ${(e) => e.$isInCandidateSelection ? "#00BFB2" : "white"};
  transform: scale(0);
  opacity: 0;

  ${(e) => e.$isAnimating && ie`
      animation: ${os} ${Ka} ${Ja} both;
      animation-delay: ${Xa};
    `}

  svg {
    display: inline-block;
    width: 100%;
    height: auto;
    filter: drop-shadow(0px 0px 4px rgba(2, 27, 65, 0.3));
  }
`, ks = ({
  isAnimating: e,
  isInCandidateSelection: t
}) => _(ws, {
  $isAnimating: e,
  children: [_($s, {
    $isAnimating: e,
    $isInCandidateSelection: t,
    children: _(Es, {})
  }), _(Ss, {
    $isAnimating: e,
    children: _(bs, {})
  })]
}), Ns = ({
  backdropColor: e,
  instructions: t,
  magnifEyeStateInstructions: n,
  showCameraButtons: r,
  videoElementSize: o
}) => {
  const {
    cameraResolution: i,
    instructionCode: a,
    isMirroring: s
  } = fs(), u = Vr(o), {
    magnifEyeError: l,
    magnifEyePhase: f,
    magnifEyeState: c
  } = _s(), h = ds(a, f), d = h === Fe.CANDIDATE_SELECTION, m = f === Be.MIDDLE || f === Be.CLOSEUP;
  if (c === te.ERROR)
    return _(jr, {
      fontSize: u,
      text: l == null ? void 0 : l.message
    });
  if (c === te.RUNNING && i) {
    const E = Ra(i);
    return _(F, {
      children: [!m && _(ls, {
        cameraResolution: i,
        isImageMirror: s
      }), _(Cs, {
        backdropColor: e,
        handleAnimationEnd: () => Ia(sn.ANIMATION_END),
        initialPosition: E,
        isAnimating: m,
        isInCandidateSelection: d
      }), h && _(ss, {
        cssBottom: (E.height + E.shiftY) * 100,
        fontSize: u,
        isAnimating: m,
        isInCandidateSelection: d,
        isPortrait: i.width < i.height,
        children: t[h]
      }), _(ks, {
        isAnimating: m,
        isInCandidateSelection: d
      }), r && !m && _(Wa, {
        customControlEvent: Ce.CONTROL,
        isSwitchCameraDisabled: d,
        videoElementSize: o
      })]
    });
  }
  return _(ys, {
    backdropColor: e,
    fontSize: u,
    magnifEyeState: c,
    magnifEyeStateInstructions: n
  });
}, Os = (e) => {
  var i, a;
  const t = {
    ...ha,
    ...e == null ? void 0 : e.instructions
  }, n = {
    [te.LOADING]: {
      ...tr.loading,
      ...(i = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : i.loading
    },
    [te.DONE]: {
      ...tr.done,
      ...(a = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : a.done
    }
  }, r = (e == null ? void 0 : e.backdropColor) ?? pa, o = (e == null ? void 0 : e.showCameraButtons) ?? !1;
  return {
    backdropColor: r,
    magnifEyeInstructions: t,
    magnifEyeStateInstructions: n,
    showCameraButtons: o
  };
}, Is = ({
  props: e
}) => {
  const {
    backdropColor: t,
    magnifEyeInstructions: n,
    magnifEyeStateInstructions: r,
    showCameraButtons: o
  } = Os(e), i = Sa(Ce.VIDEO_ELEMENT_SIZE), a = ka(e);
  return _(wa, {
    styleTarget: e == null ? void 0 : e.styleTarget,
    theme: a,
    videoElementSize: i,
    children: _(Ns, {
      backdropColor: t,
      instructions: n,
      magnifEyeStateInstructions: r,
      showCameraButtons: o,
      videoElementSize: i
    })
  });
};
ho(Is, "x-dot-magnifeye-liveness-ui", ["props"]);
