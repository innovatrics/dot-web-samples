var ro = Object.defineProperty;
var oo = (e, t, n) => t in e ? ro(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ze = (e, t, n) => (oo(e, typeof t != "symbol" ? t + "" : t, n), n);
var ze, p, ir, le, Cn, ar, Rt, sr, Ue = {}, cr = [], io = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ht = Array.isArray;
function X(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function lr(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function L(e, t, n) {
  var r, o, i, a = {};
  for (i in t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? ze.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      a[i] === void 0 && (a[i] = e.defaultProps[i]);
  return He(e, a, r, o, null);
}
function He(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o ?? ++ir, __i: -1, __u: 0 };
  return o == null && p.vnode != null && p.vnode(i), i;
}
function ao() {
  return { current: null };
}
function B(e) {
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
function Pt(e) {
  (!e.__d && (e.__d = !0) && le.push(e) && !st.__r++ || Cn !== p.debounceRendering) && ((Cn = p.debounceRendering) || ar)(st);
}
function st() {
  var e, t, n, r, o, i, a, s, l;
  for (le.sort(Rt); e = le.shift(); )
    e.__d && (t = le.length, r = void 0, i = (o = (n = e).__v).__e, s = [], l = [], (a = n.__P) && ((r = X({}, o)).__v = o.__v + 1, p.vnode && p.vnode(r), tn(a, r, o, n.__n, a.ownerSVGElement !== void 0, 32 & o.__u ? [i] : null, s, i ?? ve(o), !!(32 & o.__u), l), r.__.__k[r.__i] = r, _r(s, r, l), r.__e != i && ur(r)), le.length > t && le.sort(Rt));
  st.__r = 0;
}
function fr(e, t, n, r, o, i, a, s, l, u, f) {
  var c, h, d, m, E, b = r && r.__k || cr, g = t.length;
  for (n.__d = l, so(n, t, b), l = n.__d, c = 0; c < g; c++)
    (d = n.__k[c]) != null && typeof d != "boolean" && typeof d != "function" && (h = d.__i === -1 ? Ue : b[d.__i] || Ue, d.__i = c, tn(e, d, h, o, i, a, s, l, u, f), m = d.__e, d.ref && h.ref != d.ref && (h.ref && nn(h.ref, null, d), f.push(d.ref, d.__c || m, d)), E == null && m != null && (E = m), 65536 & d.__u || h.__k === d.__k ? l = dr(d, l, e) : typeof d.type == "function" && d.__d !== void 0 ? l = d.__d : m && (l = m.nextSibling), d.__d = void 0, d.__u &= -196609);
  n.__d = l, n.__e = E;
}
function so(e, t, n) {
  var r, o, i, a, s, l = t.length, u = n.length, f = u, c = 0;
  for (e.__k = [], r = 0; r < l; r++)
    (o = e.__k[r] = (o = t[r]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? He(null, o, null, null, o) : ht(o) ? He(B, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? He(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = e, o.__b = e.__b + 1, s = co(o, n, a = r + c, f), o.__i = s, i = null, s !== -1 && (f--, (i = n[s]) && (i.__u |= 131072)), i == null || i.__v === null ? (s == -1 && c--, typeof o.type != "function" && (o.__u |= 65536)) : s !== a && (s === a + 1 ? c++ : s > a ? f > l - a ? c += s - a : c-- : c = s < a && s == a - 1 ? s - a : 0, s !== r + c && (o.__u |= 65536))) : (i = n[r]) && i.key == null && i.__e && (i.__e == e.__d && (e.__d = ve(i)), Dt(i, i, !1), n[r] = null, f--);
  if (f)
    for (r = 0; r < u; r++)
      (i = n[r]) != null && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = ve(i)), Dt(i, i));
}
function dr(e, t, n) {
  var r, o;
  if (typeof e.type == "function") {
    for (r = e.__k, o = 0; r && o < r.length; o++)
      r[o] && (r[o].__ = e, t = dr(r[o], t, n));
    return t;
  }
  return e.__e != t && (n.insertBefore(e.__e, t || null), t = e.__e), t && t.nextSibling;
}
function K(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (ht(e) ? e.some(function(n) {
    K(n, t);
  }) : t.push(e)), t;
}
function co(e, t, n, r) {
  var o = e.key, i = e.type, a = n - 1, s = n + 1, l = t[n];
  if (l === null || l && o == l.key && i === l.type)
    return n;
  if (r > (l != null && !(131072 & l.__u) ? 1 : 0))
    for (; a >= 0 || s < t.length; ) {
      if (a >= 0) {
        if ((l = t[a]) && !(131072 & l.__u) && o == l.key && i === l.type)
          return a;
        a--;
      }
      if (s < t.length) {
        if ((l = t[s]) && !(131072 & l.__u) && o == l.key && i === l.type)
          return s;
        s++;
      }
    }
  return -1;
}
function En(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || io.test(t) ? n : n + "px";
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
            n && t in n || En(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || En(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      i = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = Date.now(), e.addEventListener(t, i ? wn : Sn, i)) : e.removeEventListener(t, i ? wn : Sn, i);
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
function Sn(e) {
  var t = this.l[e.type + !1];
  if (e.t) {
    if (e.t <= t.u)
      return;
  } else
    e.t = Date.now();
  return t(p.event ? p.event(e) : e);
}
function wn(e) {
  return this.l[e.type + !0](p.event ? p.event(e) : e);
}
function tn(e, t, n, r, o, i, a, s, l, u) {
  var f, c, h, d, m, E, b, g, v, $, N, T, S, y, G, A = t.type;
  if (t.constructor !== void 0)
    return null;
  128 & n.__u && (l = !!(32 & n.__u), i = [s = t.__e = n.__e]), (f = p.__b) && f(t);
  e:
    if (typeof A == "function")
      try {
        if (g = t.props, v = (f = A.contextType) && r[f.__c], $ = f ? v ? v.props.value : f.__ : r, n.__c ? b = (c = t.__c = n.__c).__ = c.__E : ("prototype" in A && A.prototype.render ? t.__c = c = new A(g, $) : (t.__c = c = new z(g, $), c.constructor = A, c.render = uo), v && v.sub(c), c.props = g, c.state || (c.state = {}), c.context = $, c.__n = r, h = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), A.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = X({}, c.__s)), X(c.__s, A.getDerivedStateFromProps(g, c.__s))), d = c.props, m = c.state, c.__v = t, h)
          A.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (A.getDerivedStateFromProps == null && g !== d && c.componentWillReceiveProps != null && c.componentWillReceiveProps(g, $), !c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(g, c.__s, $) === !1 || t.__v === n.__v)) {
            for (t.__v !== n.__v && (c.props = g, c.state = c.__s, c.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(me) {
              me && (me.__ = t);
            }), N = 0; N < c._sb.length; N++)
              c.__h.push(c._sb[N]);
            c._sb = [], c.__h.length && a.push(c);
            break e;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(g, c.__s, $), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(d, m, E);
          });
        }
        if (c.context = $, c.props = g, c.__P = e, c.__e = !1, T = p.__r, S = 0, "prototype" in A && A.prototype.render) {
          for (c.state = c.__s, c.__d = !1, T && T(t), f = c.render(c.props, c.state, c.context), y = 0; y < c._sb.length; y++)
            c.__h.push(c._sb[y]);
          c._sb = [];
        } else
          do
            c.__d = !1, T && T(t), f = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++S < 25);
        c.state = c.__s, c.getChildContext != null && (r = X(X({}, r), c.getChildContext())), h || c.getSnapshotBeforeUpdate == null || (E = c.getSnapshotBeforeUpdate(d, m)), fr(e, ht(G = f != null && f.type === B && f.key == null ? f.props.children : f) ? G : [G], t, n, r, o, i, a, s, l, u), c.base = t.__e, t.__u &= -161, c.__h.length && a.push(c), b && (c.__E = c.__ = null);
      } catch (me) {
        t.__v = null, l || i != null ? (t.__e = s, t.__u |= l ? 160 : 32, i[i.indexOf(s)] = null) : (t.__e = n.__e, t.__k = n.__k), p.__e(me, t, n);
      }
    else
      i == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = lo(n.__e, t, n, r, o, i, a, l, u);
  (f = p.diffed) && f(t);
}
function _r(e, t, n) {
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
function lo(e, t, n, r, o, i, a, s, l) {
  var u, f, c, h, d, m, E, b = n.props, g = t.props, v = t.type;
  if (v === "svg" && (o = !0), i != null) {
    for (u = 0; u < i.length; u++)
      if ((d = i[u]) && "setAttribute" in d == !!v && (v ? d.localName === v : d.nodeType === 3)) {
        e = d, i[u] = null;
        break;
      }
  }
  if (e == null) {
    if (v === null)
      return document.createTextNode(g);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", v) : document.createElement(v, g.is && g), i = null, s = !1;
  }
  if (v === null)
    b === g || s && e.data === g || (e.data = g);
  else {
    if (i = i && ze.call(e.childNodes), b = n.props || Ue, !s && i != null)
      for (b = {}, u = 0; u < e.attributes.length; u++)
        b[(d = e.attributes[u]).name] = d.value;
    for (u in b)
      d = b[u], u == "children" || (u == "dangerouslySetInnerHTML" ? c = d : u === "key" || u in g || qe(e, u, null, d, o));
    for (u in g)
      d = g[u], u == "children" ? h = d : u == "dangerouslySetInnerHTML" ? f = d : u == "value" ? m = d : u == "checked" ? E = d : u === "key" || s && typeof d != "function" || b[u] === d || qe(e, u, d, b[u], o);
    if (f)
      s || c && (f.__html === c.__html || f.__html === e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (c && (e.innerHTML = ""), fr(e, ht(h) ? h : [h], t, n, r, o && v !== "foreignObject", i, a, i ? i[0] : n.__k && ve(n, 0), s, l), i != null)
      for (u = i.length; u--; )
        i[u] != null && lr(i[u]);
    s || (u = "value", m !== void 0 && (m !== e[u] || v === "progress" && !m || v === "option" && m !== b[u]) && qe(e, u, m, b[u], !1), u = "checked", E !== void 0 && E !== e[u] && qe(e, u, E, b[u], !1));
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
function Dt(e, t, n) {
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
      r[o] && Dt(r[o], t, n || typeof e.type != "function");
  n || e.__e == null || lr(e.__e), e.__ = e.__e = e.__d = void 0;
}
function uo(e, t, n) {
  return this.constructor(e, n);
}
function oe(e, t, n) {
  var r, o, i, a;
  p.__ && p.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], a = [], tn(t, e = (!r && n || t).__k = L(B, null, [e]), o || Ue, Ue, t.ownerSVGElement !== void 0, !r && n ? [n] : o ? null : t.firstChild ? ze.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, a), _r(i, e, a);
}
function rn(e, t) {
  oe(e, t, rn);
}
function on(e, t, n) {
  var r, o, i, a, s = X({}, e.props);
  for (i in e.type && e.type.defaultProps && (a = e.type.defaultProps), t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i] === void 0 && a !== void 0 ? a[i] : t[i];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? ze.call(arguments, 2) : n), He(e.type, s, r || e.key, o || e.ref, null);
}
function fo(e, t) {
  var n = { __c: t = "__cC" + sr++, __: e, Consumer: function(r, o) {
    return r.children(o);
  }, Provider: function(r) {
    var o, i;
    return this.getChildContext || (o = [], (i = {})[t] = this, this.getChildContext = function() {
      return i;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && o.some(function(s) {
        s.__e = !0, Pt(s);
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
ze = cr.slice, p = { __e: function(e, t, n, r) {
  for (var o, i, a; t = t.__; )
    if ((o = t.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), a = o.__d), a)
          return o.__E = o;
      } catch (s) {
        e = s;
      }
  throw e;
} }, ir = 0, z.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = X({}, this.state), typeof e == "function" && (e = e(X({}, n), this.props)), e && X(n, e), e != null && this.__v && (t && this._sb.push(t), Pt(this));
}, z.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Pt(this));
}, z.prototype.render = B, le = [], ar = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Rt = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, st.__r = 0, sr = 0;
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
var _o = ["context", "children"];
function ho(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, n = function(r, o) {
    if (r == null)
      return {};
    var i, a, s = {}, l = Object.keys(r);
    for (a = 0; a < l.length; a++)
      o.indexOf(i = l[a]) >= 0 || (s[i] = r[i]);
    return s;
  }(e, _o);
  return on(t, n);
}
function po() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = L(ho, an({}, this._props, { context: e.detail.context }), function t(n, r) {
    if (n.nodeType === 3)
      return n.data;
    if (n.nodeType !== 1)
      return null;
    var o = [], i = {}, a = 0, s = n.attributes, l = n.childNodes;
    for (a = s.length; a--; )
      s[a].name !== "slot" && (i[s[a].name] = s[a].value, i[hr(s[a].name)] = s[a].value);
    for (a = l.length; a--; ) {
      var u = t(l[a], null), f = l[a].slot;
      f ? i[f] = L(bn, { name: f }, u) : o[a] = u;
    }
    var c = r ? L(bn, null, o) : o;
    return L(r || n.nodeName.toLowerCase(), i, c);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? rn : oe)(this._vdom, this._root);
}
function hr(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function mo(e, t, n) {
  if (this._vdom) {
    var r = {};
    r[e] = n = n ?? void 0, r[hr(e)] = n, this._vdom = on(this._vdom, r), oe(this._vdom, this._root);
  }
}
function go() {
  oe(this._vdom = null, this._root);
}
function bn(e, t) {
  var n = this;
  return L("slot", an({}, e, { ref: function(r) {
    r ? (n.ref = r, n._listener || (n._listener = function(o) {
      o.stopPropagation(), o.detail.context = t;
    }, r.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function yo(e, t, n, r) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = e, i._root = r && r.shadow ? i.attachShadow({ mode: r.mode || "open" }) : i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = po, o.prototype.attributeChangedCallback = mo, o.prototype.disconnectedCallback = go, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = n, n.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom.props[i];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(i, null, a) : (this._props || (this._props = {}), this._props[i] = a, this.connectedCallback());
      var s = typeof a;
      a != null && s !== "string" && s !== "boolean" && s !== "number" || this.setAttribute(i, a);
    } });
  }), customElements.define(t || e.tagName || e.displayName || e.name, o);
}
var Lt = /* @__PURE__ */ ((e) => (e.CONTINUE_DETECTION = "continue-detection", e.SWITCH_CAMERA = "switch-camera", e.TOGGLE_MIRROR = "toggle-mirror", e))(Lt || {}), Ce = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", e.CONTROL = "face-auto-capture:control", e.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", e.FACE_DETECTION = "face-auto-capture:face-detection", e.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", e.STATE_CHANGED = "face-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", e))(Ce || {}), sn = /* @__PURE__ */ ((e) => (e.ANIMATION_END = "magnifeye-auto-capture:animation-end", e.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", e))(sn || {});
const $n = {
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
  LEFT_EYE_NOT_PRESENT: `left_${$n.EYE_NOT_PRESENT}`,
  RIGHT_EYE_NOT_PRESENT: `right_${$n.EYE_NOT_PRESENT}`,
  MOUTH_NOT_PRESENT: "mouth_not_present",
  MOUTH_SCORE_TOO_HIGH: "mouth_score_too_high",
  MOUTH_SCORE_TOO_LOW: "mouth_score_too_low"
}, vo = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  WAITING: "WAITING",
  RUNNING: "RUNNING"
}, Be = {
  ...D,
  FIT_YOUR_EYE: "fit_your_eye"
};
var We = /* @__PURE__ */ ((e) => (e.CLOSEUP = "CLOSEUP", e.DISTANT = "DISTANT", e.MIDDLE = "MIDDLE", e))(We || {});
const ne = {
  ...vo,
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
function ie(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function Co(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Eo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, So = /* @__PURE__ */ Co(
  function(e) {
    return Eo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ae, I, Nt, On, Ee = 0, pr = [], Qe = [], Nn = p.__b, Tn = p.__r, kn = p.diffed, In = p.__c, xn = p.unmount;
function Te(e, t) {
  p.__h && p.__h(I, e, Ee || t), Ee = 0;
  var n = I.__H || (I.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({ __V: Qe }), n.__[e];
}
function F(e) {
  return Ee = 1, mr(gr, e);
}
function mr(e, t, n) {
  var r = Te(ae++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : gr(void 0, t), function(s) {
    var l = r.__N ? r.__N[0] : r.__[0], u = r.t(l, s);
    l !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = I, !I.u)) {
    var o = function(s, l, u) {
      if (!r.__c.__H)
        return !0;
      var f = r.__c.__H.__.filter(function(h) {
        return h.__c;
      });
      if (f.every(function(h) {
        return !h.__N;
      }))
        return !i || i.call(this, s, l, u);
      var c = !1;
      return f.forEach(function(h) {
        if (h.__N) {
          var d = h.__[0];
          h.__ = h.__N, h.__N = void 0, d !== h.__[0] && (c = !0);
        }
      }), !(!c && r.__c.props === s) && (!i || i.call(this, s, l, u));
    };
    I.u = !0;
    var i = I.shouldComponentUpdate, a = I.componentWillUpdate;
    I.componentWillUpdate = function(s, l, u) {
      if (this.__e) {
        var f = i;
        i = void 0, o(s, l, u), i = f;
      }
      a && a.call(this, s, l, u);
    }, I.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function se(e, t) {
  var n = Te(ae++, 3);
  !p.__s && ln(n.__H, t) && (n.__ = e, n.i = t, I.__H.__h.push(n));
}
function pt(e, t) {
  var n = Te(ae++, 4);
  !p.__s && ln(n.__H, t) && (n.__ = e, n.i = t, I.__h.push(n));
}
function mt(e) {
  return Ee = 5, de(function() {
    return { current: e };
  }, []);
}
function wo(e, t, n) {
  Ee = 6, pt(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(e));
}
function de(e, t) {
  var n = Te(ae++, 7);
  return ln(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__;
}
function Se(e, t) {
  return Ee = 8, de(function() {
    return e;
  }, t);
}
function cn(e) {
  var t = I.context[e.__c], n = Te(ae++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(I)), t.props.value) : e.__;
}
function Mt(e, t) {
  p.useDebugValue && p.useDebugValue(t ? t(e) : e);
}
function bo() {
  var e = Te(ae++, 11);
  if (!e.__) {
    for (var t = I.__v; t !== null && !t.__m && t.__ !== null; )
      t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function $o() {
  for (var e; e = pr.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(et), e.__H.__h.forEach(Ht), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], p.__e(t, e.__v);
      }
}
p.__b = function(e) {
  I = null, Nn && Nn(e);
}, p.__r = function(e) {
  Tn && Tn(e), ae = 0;
  var t = (I = e.__c).__H;
  t && (Nt === I ? (t.__h = [], I.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = Qe, n.__N = n.i = void 0;
  })) : (t.__h.forEach(et), t.__h.forEach(Ht), t.__h = [], ae = 0)), Nt = I;
}, p.diffed = function(e) {
  kn && kn(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (pr.push(t) !== 1 && On === p.requestAnimationFrame || ((On = p.requestAnimationFrame) || Oo)($o)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== Qe && (n.__ = n.__V), n.i = void 0, n.__V = Qe;
  })), Nt = I = null;
}, p.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(et), n.__h = n.__h.filter(function(r) {
        return !r.__ || Ht(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], p.__e(r, n.__v);
    }
  }), In && In(e, t);
}, p.unmount = function(e) {
  xn && xn(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      et(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && p.__e(t, n.__v));
};
var An = typeof requestAnimationFrame == "function";
function Oo(e) {
  var t, n = function() {
    clearTimeout(r), An && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  An && (t = requestAnimationFrame(n));
}
function et(e) {
  var t = I, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), I = t;
}
function Ht(e) {
  var t = I;
  e.__c = e.__(), I = t;
}
function ln(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function gr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function yr(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ft(e, t) {
  for (var n in e)
    if (n !== "__source" && !(n in t))
      return !0;
  for (var r in t)
    if (r !== "__source" && e[r] !== t[r])
      return !0;
  return !1;
}
function Ut(e) {
  this.props = e;
}
function No(e, t) {
  function n(o) {
    var i = this.props.ref, a = i == o.ref;
    return !a && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !a : Ft(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, L(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(Ut.prototype = new z()).isPureReactComponent = !0, Ut.prototype.shouldComponentUpdate = function(e, t) {
  return Ft(this.props, e) || Ft(this.state, t);
};
var Rn = p.__b;
p.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Rn && Rn(e);
};
var To = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function ko(e) {
  function t(n) {
    var r = yr({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = To, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Pn = function(e, t) {
  return e == null ? null : K(K(e).map(t));
}, Io = { map: Pn, forEach: Pn, count: function(e) {
  return e ? K(e).length : 0;
}, only: function(e) {
  var t = K(e);
  if (t.length !== 1)
    throw "Children.only";
  return t[0];
}, toArray: K }, xo = p.__e;
p.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; )
      if ((o = i.__c) && o.__c)
        return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  xo(e, t, n, r);
};
var Dn = p.unmount;
function vr(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = yr({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return vr(r, t, n);
  })), e;
}
function Cr(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return Cr(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function tt() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Er(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Ao(e) {
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
    return L(n, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function De() {
  this.u = null, this.o = null;
}
p.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Dn && Dn(e);
}, (tt.prototype = new z()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var o = Er(r.__v), i = !1, a = function() {
    i || (i = !0, n.__R = null, o ? o(s) : s());
  };
  n.__R = a;
  var s = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var l = r.state.__a;
        r.__v.__k[0] = Cr(l, l.__c.__P, l.__c.__O);
      }
      var u;
      for (r.setState({ __a: r.__b = null }); u = r.t.pop(); )
        u.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(a, a);
}, tt.prototype.componentWillUnmount = function() {
  this.t = [];
}, tt.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = vr(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && L(B, null, e.fallback);
  return o && (o.__u &= -33), [L(B, null, t.__a ? null : e.children), o];
};
var Ln = function(e, t, n) {
  if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (n = e.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      e.u = n = n[2];
    }
};
function Ro(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function Po(e) {
  var t = this, n = e.i;
  t.componentWillUnmount = function() {
    oe(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== n && t.componentWillUnmount(), t.l || (t.i = n, t.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r);
  } }), oe(L(Ro, { context: t.context }, e.__v), t.l);
}
function Do(e, t) {
  var n = L(Po, { __v: e, i: t });
  return n.containerInfo = t, n;
}
(De.prototype = new z()).__a = function(e) {
  var t = this, n = Er(t.__v), r = t.o.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), Ln(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, De.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = K(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; )
    this.o.set(t[n], this.u = [1, 0, this.u]);
  return e.children;
}, De.prototype.componentDidUpdate = De.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, n) {
    Ln(e, n, t);
  });
};
var Sr = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Lo = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Mo = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Ho = /[A-Z0-9]/g, Fo = typeof document < "u", Uo = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function Bo(e, t, n) {
  return t.__k == null && (t.textContent = ""), oe(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function Wo(e, t, n) {
  return rn(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
z.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(z.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Mn = p.event;
function Go() {
}
function zo() {
  return this.cancelBubble;
}
function Vo() {
  return this.defaultPrevented;
}
p.event = function(e) {
  return Mn && (e = Mn(e)), e.persist = Go, e.isPropagationStopped = zo, e.isDefaultPrevented = Vo, e.nativeEvent = e;
};
var un, jo = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Hn = p.vnode;
p.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {};
    for (var i in n) {
      var a = n[i];
      if (!(i === "value" && "defaultValue" in n && a == null || Fo && i === "children" && r === "noscript" || i === "class" || i === "className")) {
        var s = i.toLowerCase();
        i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && a === !0 ? a = "" : s === "ondoubleclick" ? i = "ondblclick" : s !== "onchange" || r !== "input" && r !== "textarea" || Uo(n.type) ? s === "onfocus" ? i = "onfocusin" : s === "onblur" ? i = "onfocusout" : Mo.test(i) ? i = s : r.indexOf("-") === -1 && Lo.test(i) ? i = i.replace(Ho, "-$&").toLowerCase() : a === null && (a = void 0) : s = i = "oninput", s === "oninput" && o[i = s] && (i = "oninputCapture"), o[i] = a;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = K(n.children).forEach(function(l) {
      l.props.selected = o.value.indexOf(l.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = K(n.children).forEach(function(l) {
      l.props.selected = o.multiple ? o.defaultValue.indexOf(l.props.value) != -1 : o.defaultValue == l.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", jo)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = Sr, Hn && Hn(e);
};
var Fn = p.__r;
p.__r = function(e) {
  Fn && Fn(e), un = e.__c;
};
var Un = p.diffed;
p.diffed = function(e) {
  Un && Un(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), un = null;
};
var Yo = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return un.__n[e.__c].props.value;
} } } };
function Zo(e) {
  return L.bind(null, e);
}
function gt(e) {
  return !!e && e.$$typeof === Sr;
}
function qo(e) {
  return gt(e) && e.type === B;
}
function Xo(e) {
  return gt(e) ? on.apply(null, arguments) : e;
}
function Ko(e) {
  return !!e.__k && (oe(null, e), !0);
}
function Jo(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var Qo = function(e, t) {
  return e(t);
}, ei = function(e, t) {
  return e(t);
}, ti = B;
function wr(e) {
  e();
}
function ni(e) {
  return e;
}
function ri() {
  return [!1, wr];
}
var oi = pt, ii = gt;
function ai(e, t) {
  var n = t(), r = F({ h: { __: n, v: t } }), o = r[0].h, i = r[1];
  return pt(function() {
    o.__ = n, o.v = t, Tt(o) && i({ h: o });
  }, [e, n, t]), se(function() {
    return Tt(o) && i({ h: o }), e(function() {
      Tt(o) && i({ h: o });
    });
  }, [e]), n;
}
function Tt(e) {
  var t, n, r = e.v, o = e.__;
  try {
    var i = r();
    return !((t = o) === (n = i) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
}
var H = { useState: F, useId: bo, useReducer: mr, useEffect: se, useLayoutEffect: pt, useInsertionEffect: oi, useTransition: ri, useDeferredValue: ni, useSyncExternalStore: ai, startTransition: wr, useRef: mt, useImperativeHandle: wo, useMemo: de, useCallback: Se, useContext: cn, useDebugValue: Mt, version: "17.0.2", Children: Io, render: Bo, hydrate: Wo, unmountComponentAtNode: Ko, createPortal: Do, createElement: L, createContext: fo, createFactory: Zo, cloneElement: Xo, createRef: ao, Fragment: B, isValidElement: gt, isElement: ii, isFragment: qo, findDOMNode: Jo, Component: z, PureComponent: Ut, memo: No, forwardRef: ko, flushSync: ei, unstable_batchedUpdates: Qo, StrictMode: ti, Suspense: tt, SuspenseList: De, lazy: Ao, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Yo };
function si(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ci = function(t, n, r, o) {
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
  for (var l = Object.prototype.hasOwnProperty.bind(n), u = 0; u < a.length; u++) {
    var f = a[u];
    if (!l(f))
      return !1;
    var c = t[f], h = n[f];
    if (i = r ? r.call(o, c, h, f) : void 0, i === !1 || i === void 0 && c !== h)
      return !1;
  }
  return !0;
};
const li = /* @__PURE__ */ si(ci);
var k = "-ms-", Fe = "-moz-", O = "-webkit-", br = "comm", yt = "rule", fn = "decl", ui = "@import", $r = "@keyframes", fi = "@layer", di = Math.abs, dn = String.fromCharCode, Bt = Object.assign;
function _i(e, t) {
  return R(e, 0) ^ 45 ? (((t << 2 ^ R(e, 0)) << 2 ^ R(e, 1)) << 2 ^ R(e, 2)) << 2 ^ R(e, 3) : 0;
}
function Or(e) {
  return e.trim();
}
function Z(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function C(e, t, n) {
  return e.replace(t, n);
}
function nt(e, t) {
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
function Nr(e) {
  return e.length;
}
function Le(e, t) {
  return t.push(e), e;
}
function hi(e, t) {
  return e.map(t).join("");
}
function Bn(e, t) {
  return e.filter(function(n) {
    return !Z(n, t);
  });
}
var vt = 1, be = 1, Tr = 0, W = 0, x = 0, ke = "";
function Ct(e, t, n, r, o, i, a, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: vt, column: be, length: a, return: "", siblings: s };
}
function te(e, t) {
  return Bt(Ct("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function ye(e) {
  for (; e.root; )
    e = te(e.root, { children: [e] });
  Le(e, e.siblings);
}
function pi() {
  return x;
}
function mi() {
  return x = W > 0 ? R(ke, --W) : 0, be--, x === 10 && (be = 1, vt--), x;
}
function V() {
  return x = W < Tr ? R(ke, W++) : 0, be++, x === 10 && (be = 1, vt++), x;
}
function _e() {
  return R(ke, W);
}
function rt() {
  return W;
}
function Et(e, t) {
  return we(ke, e, t);
}
function Wt(e) {
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
function gi(e) {
  return vt = be = 1, Tr = j(ke = e), W = 0, [];
}
function yi(e) {
  return ke = "", e;
}
function kt(e) {
  return Or(Et(W - 1, Gt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function vi(e) {
  for (; (x = _e()) && x < 33; )
    V();
  return Wt(e) > 2 || Wt(x) > 3 ? "" : " ";
}
function Ci(e, t) {
  for (; --t && V() && !(x < 48 || x > 102 || x > 57 && x < 65 || x > 70 && x < 97); )
    ;
  return Et(e, rt() + (t < 6 && _e() == 32 && V() == 32));
}
function Gt(e) {
  for (; V(); )
    switch (x) {
      case e:
        return W;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Gt(x);
        break;
      case 40:
        e === 41 && Gt(e);
        break;
      case 92:
        V();
        break;
    }
  return W;
}
function Ei(e, t) {
  for (; V() && e + x !== 57; )
    if (e + x === 84 && _e() === 47)
      break;
  return "/*" + Et(t, W - 1) + "*" + dn(e === 47 ? e : V());
}
function Si(e) {
  for (; !Wt(_e()); )
    V();
  return Et(e, W);
}
function wi(e) {
  return yi(ot("", null, null, null, [""], e = gi(e), 0, [0], e));
}
function ot(e, t, n, r, o, i, a, s, l) {
  for (var u = 0, f = 0, c = a, h = 0, d = 0, m = 0, E = 1, b = 1, g = 1, v = 0, $ = "", N = o, T = i, S = r, y = $; b; )
    switch (m = v, v = V()) {
      case 40:
        if (m != 108 && R(y, c - 1) == 58) {
          nt(y += C(kt(v), "&", "&\f"), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        y += kt(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        y += vi(m);
        break;
      case 92:
        y += Ci(rt() - 1, 7);
        continue;
      case 47:
        switch (_e()) {
          case 42:
          case 47:
            Le(bi(Ei(V(), rt()), t, n, l), l);
            break;
          default:
            y += "/";
        }
        break;
      case 123 * E:
        s[u++] = j(y) * g;
      case 125 * E:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            b = 0;
          case 59 + f:
            g == -1 && (y = C(y, /\f/g, "")), d > 0 && j(y) - c && Le(d > 32 ? Gn(y + ";", r, n, c - 1, l) : Gn(C(y, " ", "") + ";", r, n, c - 2, l), l);
            break;
          case 59:
            y += ";";
          default:
            if (Le(S = Wn(y, t, n, u, f, o, s, $, N = [], T = [], c, i), i), v === 123)
              if (f === 0)
                ot(y, t, S, S, N, i, c, s, T);
              else
                switch (h === 99 && R(y, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ot(e, S, S, r && Le(Wn(e, S, S, 0, 0, o, s, $, o, N = [], c, T), T), o, T, c, s, r ? N : T);
                    break;
                  default:
                    ot(y, S, S, S, [""], T, 0, s, T);
                }
        }
        u = f = d = 0, E = g = 1, $ = y = "", c = a;
        break;
      case 58:
        c = 1 + j(y), d = m;
      default:
        if (E < 1) {
          if (v == 123)
            --E;
          else if (v == 125 && E++ == 0 && mi() == 125)
            continue;
        }
        switch (y += dn(v), v * E) {
          case 38:
            g = f > 0 ? 1 : (y += "\f", -1);
            break;
          case 44:
            s[u++] = (j(y) - 1) * g, g = 1;
            break;
          case 64:
            _e() === 45 && (y += kt(V())), h = _e(), f = c = j($ = y += Si(rt())), v++;
            break;
          case 45:
            m === 45 && j(y) == 2 && (E = 0);
        }
    }
  return i;
}
function Wn(e, t, n, r, o, i, a, s, l, u, f, c) {
  for (var h = o - 1, d = o === 0 ? i : [""], m = Nr(d), E = 0, b = 0, g = 0; E < r; ++E)
    for (var v = 0, $ = we(e, h + 1, h = di(b = a[E])), N = e; v < m; ++v)
      (N = Or(b > 0 ? d[v] + " " + $ : C($, /&\f/g, d[v]))) && (l[g++] = N);
  return Ct(e, t, n, o === 0 ? yt : s, l, u, f, c);
}
function bi(e, t, n, r) {
  return Ct(e, t, n, br, dn(pi()), we(e, 2, -2), 0, r);
}
function Gn(e, t, n, r, o) {
  return Ct(e, t, n, fn, we(e, 0, r), we(e, r + 1, -1), r, o);
}
function kr(e, t, n) {
  switch (_i(e, t)) {
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
      return Fe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return O + e + Fe + e + k + e + e;
    case 5936:
      switch (R(e, t + 11)) {
        case 114:
          return O + e + k + C(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return O + e + k + C(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return O + e + k + C(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return O + e + k + e + e;
    case 6165:
      return O + e + k + "flex-" + e + e;
    case 5187:
      return O + e + C(e, /(\w+).+(:[^]+)/, O + "box-$1$2" + k + "flex-$1$2") + e;
    case 5443:
      return O + e + k + "flex-item-" + C(e, /flex-|-self/g, "") + (Z(e, /flex-|baseline/) ? "" : k + "grid-row-" + C(e, /flex-|-self/g, "")) + e;
    case 4675:
      return O + e + k + "flex-line-pack" + C(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return O + e + k + C(e, "shrink", "negative") + e;
    case 5292:
      return O + e + k + C(e, "basis", "preferred-size") + e;
    case 6060:
      return O + "box-" + C(e, "-grow", "") + O + e + k + C(e, "grow", "positive") + e;
    case 4554:
      return O + C(e, /([^-])(transform)/g, "$1" + O + "$2") + e;
    case 6187:
      return C(C(C(e, /(zoom-|grab)/, O + "$1"), /(image-set)/, O + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return C(e, /(image-set\([^]*)/, O + "$1$`$1");
    case 4968:
      return C(C(e, /(.+:)(flex-)?(.*)/, O + "box-pack:$3" + k + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + O + e + e;
    case 4200:
      if (!Z(e, /flex-|baseline/))
        return k + "grid-column-align" + we(e, t) + e;
      break;
    case 2592:
    case 3360:
      return k + C(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, Z(r.props, /grid-\w+-end/);
      }) ? ~nt(e + (n = n[t].value), "span") ? e : k + C(e, "-start", "") + e + k + "grid-row-span:" + (~nt(n, "span") ? Z(n, /\d+/) : +Z(n, /\d+/) - +Z(e, /\d+/)) + ";" : k + C(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return Z(r.props, /grid-\w+-start/);
      }) ? e : k + C(C(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return C(e, /(.+)-inline(.+)/, O + "$1$2") + e;
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
            return C(e, /(.+:)(.+)-([^]+)/, "$1" + O + "$2-$3$1" + Fe + (R(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~nt(e, "stretch") ? kr(C(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return C(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, a, s, l, u) {
        return k + o + ":" + i + u + (a ? k + o + "-span:" + (s ? l : +l - +i) + u : "") + e;
      });
    case 4949:
      if (R(e, t + 6) === 121)
        return C(e, ":", ":" + O) + e;
      break;
    case 6444:
      switch (R(e, R(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return C(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + O + (R(e, 14) === 45 ? "inline-" : "") + "box$3$1" + O + "$2$3$1" + k + "$2box$3") + e;
        case 100:
          return C(e, ":", ":" + k) + e;
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
function ct(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function $i(e, t, n, r) {
  switch (e.type) {
    case fi:
      if (e.children.length)
        break;
    case ui:
    case fn:
      return e.return = e.return || e.value;
    case br:
      return "";
    case $r:
      return e.return = e.value + "{" + ct(e.children, r) + "}";
    case yt:
      if (!j(e.value = e.props.join(",")))
        return "";
  }
  return j(n = ct(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Oi(e) {
  var t = Nr(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function Ni(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Ti(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case fn:
        e.return = kr(e.value, e.length, n);
        return;
      case $r:
        return ct([te(e, { value: C(e.value, "@", "@" + O) })], r);
      case yt:
        if (e.length)
          return hi(n = e.props, function(o) {
            switch (Z(o, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                ye(te(e, { props: [C(o, /:(read-\w+)/, ":" + Fe + "$1")] })), ye(te(e, { props: [o] })), Bt(e, { props: Bn(n, r) });
                break;
              case "::placeholder":
                ye(te(e, { props: [C(o, /:(plac\w+)/, ":" + O + "input-$1")] })), ye(te(e, { props: [C(o, /:(plac\w+)/, ":" + Fe + "$1")] })), ye(te(e, { props: [C(o, /:(plac\w+)/, k + "input-$1")] })), ye(te(e, { props: [o] })), Bt(e, { props: Bn(n, r) });
                break;
            }
            return "";
          });
    }
}
var ki = {
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
}, w = {}, he = typeof process < "u" && w !== void 0 && (w.REACT_APP_SC_ATTR || w.SC_ATTR) || "data-styled", _n = typeof window < "u" && "HTMLElement" in window, Ii = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && w !== void 0 && w.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && w.REACT_APP_SC_DISABLE_SPEEDY !== "" ? w.REACT_APP_SC_DISABLE_SPEEDY !== "false" && w.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && w !== void 0 && w.SC_DISABLE_SPEEDY !== void 0 && w.SC_DISABLE_SPEEDY !== "" ? w.SC_DISABLE_SPEEDY !== "false" && w.SC_DISABLE_SPEEDY : w.NODE_ENV !== "production"), xi = {}, zn = /invalid hook call/i, Xe = /* @__PURE__ */ new Set(), Ir = function(e, t) {
  if (w.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(a) {
        for (var s = [], l = 1; l < arguments.length; l++)
          s[l - 1] = arguments[l];
        zn.test(a) ? (i = !1, Xe.delete(r)) : o.apply(void 0, ie([a], s, !1));
      }, mt(), i && !Xe.has(r) && (console.warn(r), Xe.add(r));
    } catch (a) {
      zn.test(a.message) && Xe.delete(r);
    } finally {
      console.error = o;
    }
  }
}, St = Object.freeze([]), $e = Object.freeze({});
function xr(e, t, n) {
  return n === void 0 && (n = $e), e.theme !== n.theme && e.theme || t || n.theme;
}
var zt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Ai = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ri = /(^-|-$)/g;
function Vn(e) {
  return e.replace(Ai, "-").replace(Ri, "");
}
var Pi = /(a)(d)/gi, jn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Vt(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    n = jn(t % 52) + n;
  return (jn(t % 52) + n).replace(Pi, "$1-$2");
}
var It, ue = function(e, t) {
  for (var n = t.length; n; )
    e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Ar = function(e) {
  return ue(5381, e);
};
function hn(e) {
  return Vt(Ar(e) >>> 0);
}
function Rr(e) {
  return w.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function xt(e) {
  return typeof e == "string" && (w.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Pr = typeof Symbol == "function" && Symbol.for, Dr = Pr ? Symbol.for("react.memo") : 60115, Di = Pr ? Symbol.for("react.forward_ref") : 60112, Li = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Mi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Lr = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Hi = ((It = {})[Di] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, It[Dr] = Lr, It);
function Yn(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Dr ? Lr : "$$typeof" in e ? Hi[e.$$typeof] : Li;
  var t;
}
var Fi = Object.defineProperty, Ui = Object.getOwnPropertyNames, Zn = Object.getOwnPropertySymbols, Bi = Object.getOwnPropertyDescriptor, Wi = Object.getPrototypeOf, qn = Object.prototype;
function Mr(e, t, n) {
  if (typeof t != "string") {
    if (qn) {
      var r = Wi(t);
      r && r !== qn && Mr(e, r, n);
    }
    var o = Ui(t);
    Zn && (o = o.concat(Zn(t)));
    for (var i = Yn(e), a = Yn(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!(l in Mi || n && n[l] || a && l in a || i && l in i)) {
        var u = Bi(t, l);
        try {
          Fi(e, l, u);
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
function pn(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function fe(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function lt(e, t) {
  if (e.length === 0)
    return "";
  for (var n = e[0], r = 1; r < e.length; r++)
    n += t ? t + e[r] : e[r];
  return n;
}
function Oe(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function jt(e, t, n) {
  if (n === void 0 && (n = !1), !n && !Oe(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++)
      e[r] = jt(e[r], t[r]);
  else if (Oe(t))
    for (var r in t)
      e[r] = jt(e[r], t[r]);
  return e;
}
function mn(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Gi = w.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function zi() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1)
    r.push(e[o]);
  return r.forEach(function(a) {
    n = n.replace(/%[a-z]/, a);
  }), n;
}
function Y(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return w.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(zi.apply(void 0, ie([Gi[e]], t, !1)).trim());
}
var Vi = function() {
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
          throw Y(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(r), this.length = i;
      for (var a = o; a < i; a++)
        this.groupSizes[a] = 0;
    }
    for (var s = this.indexOfGroup(t + 1), l = (a = 0, n.length); a < l; a++)
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
}(), it = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new Map(), at = 1, Ke = function(e) {
  if (it.has(e))
    return it.get(e);
  for (; ut.has(at); )
    at++;
  var t = at++;
  if (w.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1073741824))
    throw Y(16, "".concat(t));
  return it.set(e, t), ut.set(t, e), t;
}, ji = function(e, t) {
  at = t + 1, it.set(e, t), ut.set(t, e);
}, Yi = "style[".concat(he, "][").concat("data-styled-version", '="').concat("6.1.1", '"]'), Zi = new RegExp("^".concat(he, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), qi = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++)
    (r = o[i]) && e.registerName(t, r);
}, Xi = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(`/*!sc*/
`), o = [], i = 0, a = r.length; i < a; i++) {
    var s = r[i].trim();
    if (s) {
      var l = s.match(Zi);
      if (l) {
        var u = 0 | parseInt(l[1], 10), f = l[2];
        u !== 0 && (ji(f, u), qi(e, f, l[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else
        o.push(s);
    }
  }
};
function Ki() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Hr = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(s) {
    var l = Array.from(s.querySelectorAll("style[".concat(he, "]")));
    return l[l.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(he, "active"), r.setAttribute("data-styled-version", "6.1.1");
  var a = Ki();
  return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
}, Ji = function() {
  function e(t) {
    this.element = Hr(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet)
        return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var a = r[o];
        if (a.ownerNode === n)
          return a;
      }
      throw Y(17);
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
}(), Qi = function() {
  function e(t) {
    this.element = Hr(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), ea = function() {
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
}(), Xn = _n, ta = { isServer: !_n, useCSSOMInjection: !Ii }, ft = function() {
  function e(t, n, r) {
    t === void 0 && (t = $e), n === void 0 && (n = {});
    var o = this;
    this.options = P(P({}, ta), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && _n && Xn && (Xn = !1, function(i) {
      for (var a = document.querySelectorAll(Yi), s = 0, l = a.length; s < l; s++) {
        var u = a[s];
        u && u.getAttribute(he) !== "active" && (Xi(i, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this)), mn(this, function() {
      return function(i) {
        for (var a = i.getTag(), s = a.length, l = "", u = function(c) {
          var h = function(g) {
            return ut.get(g);
          }(c);
          if (h === void 0)
            return "continue";
          var d = i.names.get(h), m = a.getGroup(c);
          if (d === void 0 || m.length === 0)
            return "continue";
          var E = "".concat(he, ".g").concat(c, '[id="').concat(h, '"]'), b = "";
          d !== void 0 && d.forEach(function(g) {
            g.length > 0 && (b += "".concat(g, ","));
          }), l += "".concat(m).concat(E, '{content:"').concat(b, '"}').concat(`/*!sc*/
`);
        }, f = 0; f < s; f++)
          u(f);
        return l;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return Ke(t);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(P(P({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new ea(o) : r ? new Ji(o) : new Qi(o);
    }(this.options), new Vi(t)));
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
}(), na = /&/g, ra = /^\s*\/\/.*$/gm;
function Fr(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = Fr(n.children, t)), n;
  });
}
function Ur(e) {
  var t, n, r, o = e === void 0 ? $e : e, i = o.options, a = i === void 0 ? $e : i, s = o.plugins, l = s === void 0 ? St : s, u = function(h, d, m) {
    return m === n || m.startsWith(n) && m.endsWith(n) && m.replaceAll(n, "").length > 0 ? ".".concat(t) : h;
  }, f = l.slice();
  f.push(function(h) {
    h.type === yt && h.value.includes("&") && (h.props[0] = h.props[0].replace(na, n).replace(r, u));
  }), a.prefix && f.push(Ti), f.push($i);
  var c = function(h, d, m, E) {
    d === void 0 && (d = ""), m === void 0 && (m = ""), E === void 0 && (E = "&"), t = E, n = d, r = new RegExp("\\".concat(n, "\\b"), "g");
    var b = h.replace(ra, ""), g = wi(m || d ? "".concat(m, " ").concat(d, " { ").concat(b, " }") : b);
    a.namespace && (g = Fr(g, a.namespace));
    var v = [];
    return ct(g, Oi(f.concat(Ni(function($) {
      return v.push($);
    })))), v;
  };
  return c.hash = l.length ? l.reduce(function(h, d) {
    return d.name || Y(15), ue(h, d.name);
  }, 5381).toString() : "", c;
}
var oa = new ft(), Yt = Ur(), gn = H.createContext({ shouldForwardProp: void 0, styleSheet: oa, stylis: Yt });
gn.Consumer;
var ia = H.createContext(void 0);
function dt() {
  return cn(gn);
}
function aa(e) {
  var t = F(e.stylisPlugins), n = t[0], r = t[1], o = dt().styleSheet, i = de(function() {
    var l = o;
    return e.sheet ? l = e.sheet : e.target && (l = l.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (l = l.reconstructWithOptions({ useCSSOMInjection: !1 })), l;
  }, [e.disableCSSOMInjection, e.sheet, e.target, o]), a = de(function() {
    return Ur({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: n });
  }, [e.enableVendorPrefixes, e.namespace, n]);
  se(function() {
    li(n, e.stylisPlugins) || r(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var s = de(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: a };
  }, [e.shouldForwardProp, i, a]);
  return H.createElement(gn.Provider, { value: s }, H.createElement(ia.Provider, { value: a }, e.children));
}
var Zt = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Yt);
      var a = r.name + i.hash;
      o.hasNameForId(r.id, a) || o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, mn(this, function() {
      throw Y(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Yt), this.name + t.hash;
  }, e;
}(), sa = function(e) {
  return e >= "A" && e <= "Z";
};
function Kn(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-")
      return e;
    sa(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Br = function(e) {
  return e == null || e === !1 || e === "";
}, Wr = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !Br(i) && (Array.isArray(i) && i.isCss || pe(i) ? r.push("".concat(Kn(o), ":"), i, ";") : Oe(i) ? r.push.apply(r, ie(ie(["".concat(o, " {")], Wr(i), !1), ["}"], !1)) : r.push("".concat(Kn(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in ki || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function re(e, t, n, r) {
  if (Br(e))
    return [];
  if (pn(e))
    return [".".concat(e.styledComponentId)];
  if (pe(e)) {
    if (!pe(i = e) || i.prototype && i.prototype.isReactComponent || !t)
      return [e];
    var o = e(t);
    return w.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Zt || Oe(o) || o === null || console.error("".concat(Rr(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), re(o, t, n, r);
  }
  var i;
  return e instanceof Zt ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Oe(e) ? Wr(e) : Array.isArray(e) ? Array.prototype.concat.apply(St, e.map(function(a) {
    return re(a, t, n, r);
  })) : [e.toString()];
}
function Gr(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (pe(n) && !pn(n))
      return !1;
  }
  return !0;
}
var ca = Ar("6.1.1"), la = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = w.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Gr(t), this.componentId = n, this.baseHash = ue(ca, n), this.baseStyle = r, ft.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash)
      if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId))
        o = fe(o, this.staticRulesId);
      else {
        var i = lt(re(this.rules, t, n, r)), a = Vt(ue(this.baseHash, i) >>> 0);
        if (!n.hasNameForId(this.componentId, a)) {
          var s = r(i, ".".concat(a), void 0, this.componentId);
          n.insertRules(this.componentId, a, s);
        }
        o = fe(o, a), this.staticRulesId = a;
      }
    else {
      for (var l = ue(this.baseHash, r.hash), u = "", f = 0; f < this.rules.length; f++) {
        var c = this.rules[f];
        if (typeof c == "string")
          u += c, w.NODE_ENV !== "production" && (l = ue(l, c));
        else if (c) {
          var h = lt(re(c, t, n, r));
          l = ue(l, h + f), u += h;
        }
      }
      if (u) {
        var d = Vt(l >>> 0);
        n.hasNameForId(this.componentId, d) || n.insertRules(this.componentId, d, r(u, ".".concat(d), void 0, this.componentId)), o = fe(o, d);
      }
    }
    return o;
  }, e;
}(), Ne = H.createContext(void 0);
Ne.Consumer;
function zr() {
  var e = cn(Ne);
  if (!e)
    throw Y(18);
  return e;
}
function ua(e) {
  var t = H.useContext(Ne), n = de(function() {
    return function(r, o) {
      if (!r)
        throw Y(14);
      if (pe(r)) {
        var i = r(o);
        if (w.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object"))
          throw Y(7);
        return i;
      }
      if (Array.isArray(r) || typeof r != "object")
        throw Y(8);
      return o ? P(P({}, o), r) : r;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? H.createElement(Ne.Provider, { value: n }, e.children) : null;
}
var At = {}, Jn = /* @__PURE__ */ new Set();
function fa(e, t, n) {
  var r = pn(e), o = e, i = !xt(e), a = t.attrs, s = a === void 0 ? St : a, l = t.componentId, u = l === void 0 ? function(N, T) {
    var S = typeof N != "string" ? "sc" : Vn(N);
    At[S] = (At[S] || 0) + 1;
    var y = "".concat(S, "-").concat(hn("6.1.1" + S + At[S]));
    return T ? "".concat(T, "-").concat(y) : y;
  }(t.displayName, t.parentComponentId) : l, f = t.displayName, c = f === void 0 ? function(N) {
    return xt(N) ? "styled.".concat(N) : "Styled(".concat(Rr(N), ")");
  }(e) : f, h = t.displayName && t.componentId ? "".concat(Vn(t.displayName), "-").concat(t.componentId) : t.componentId || u, d = r && o.attrs ? o.attrs.concat(s).filter(Boolean) : s, m = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var E = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var b = t.shouldForwardProp;
      m = function(N, T) {
        return E(N, T) && b(N, T);
      };
    } else
      m = E;
  }
  var g = new la(n, h, r ? o.componentStyle : void 0);
  function v(N, T) {
    return function(S, y, G) {
      var A = S.attrs, me = S.componentStyle, Jr = S.defaultProps, Qr = S.foldedComponentIds, vn = S.styledComponentId, eo = S.target, to = H.useContext(Ne), no = dt(), wt = S.shouldForwardProp || no.shouldForwardProp;
      w.NODE_ENV !== "production" && Mt(vn);
      var Q = function(Ve, Re, je) {
        for (var ge, ce = P(P({}, Re), { className: void 0, theme: je }), Ot = 0; Ot < Ve.length; Ot += 1) {
          var Ye = pe(ge = Ve[Ot]) ? ge(ce) : ge;
          for (var ee in Ye)
            ce[ee] = ee === "className" ? fe(ce[ee], Ye[ee]) : ee === "style" ? P(P({}, ce[ee]), Ye[ee]) : Ye[ee];
        }
        return Re.className && (ce.className = fe(ce.className, Re.className)), ce;
      }(A, y, xr(y, to, Jr) || $e), xe = Q.as || eo, Ae = {};
      for (var U in Q)
        Q[U] === void 0 || U[0] === "$" || U === "as" || U === "theme" || (U === "forwardedAs" ? Ae.as = Q.forwardedAs : wt && !wt(U, xe) || (Ae[U] = Q[U], wt || w.NODE_ENV !== "development" || So(U) || Jn.has(U) || !zt.has(xe) || (Jn.add(U), console.warn('styled-components: it looks like an unknown prop "'.concat(U, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var bt = function(Ve, Re) {
        var je = dt(), ge = Ve.generateAndInjectStyles(Re, je.styleSheet, je.stylis);
        return w.NODE_ENV !== "production" && Mt(ge), ge;
      }(me, Q);
      w.NODE_ENV !== "production" && S.warnTooManyClasses && S.warnTooManyClasses(bt);
      var $t = fe(Qr, vn);
      return bt && ($t += " " + bt), Q.className && ($t += " " + Q.className), Ae[xt(xe) && !zt.has(xe) ? "class" : "className"] = $t, Ae.ref = G, L(xe, Ae);
    }($, N, T);
  }
  v.displayName = c;
  var $ = H.forwardRef(v);
  return $.attrs = d, $.componentStyle = g, $.displayName = c, $.shouldForwardProp = m, $.foldedComponentIds = r ? fe(o.foldedComponentIds, o.styledComponentId) : "", $.styledComponentId = h, $.target = r ? o.target : e, Object.defineProperty($, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(N) {
    this._foldedDefaultProps = r ? function(T) {
      for (var S = [], y = 1; y < arguments.length; y++)
        S[y - 1] = arguments[y];
      for (var G = 0, A = S; G < A.length; G++)
        jt(T, A[G], !0);
      return T;
    }({}, o.defaultProps, N) : N;
  } }), w.NODE_ENV !== "production" && (Ir(c, h), $.warnTooManyClasses = /* @__PURE__ */ function(N, T) {
    var S = {}, y = !1;
    return function(G) {
      if (!y && (S[G] = !0, Object.keys(S).length >= 200)) {
        var A = T ? ' with the id of "'.concat(T, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(N).concat(A, `.
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
  }(c, h)), mn($, function() {
    return ".".concat($.styledComponentId);
  }), i && Mr($, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), $;
}
function Qn(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var er = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function J(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  if (pe(e) || Oe(e)) {
    var r = e;
    return er(re(Qn(St, ie([r], t, !0))));
  }
  var o = e;
  return t.length === 0 && o.length === 1 && typeof o[0] == "string" ? re(o) : er(re(Qn(o, t)));
}
function qt(e, t, n) {
  if (n === void 0 && (n = $e), !t)
    throw Y(1, t);
  var r = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++)
      i[a - 1] = arguments[a];
    return e(t, n, J.apply(void 0, ie([o], i, !1)));
  };
  return r.attrs = function(o) {
    return qt(e, t, P(P({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return qt(e, t, P(P({}, n), o));
  }, r;
}
var Vr = function(e) {
  return qt(fa, e);
}, M = Vr;
zt.forEach(function(e) {
  M[e] = Vr(e);
});
var da = function() {
  function e(t, n) {
    this.rules = t, this.componentId = n, this.isStatic = Gr(t), ft.registerId(this.componentId + 1);
  }
  return e.prototype.createStyles = function(t, n, r, o) {
    var i = o(lt(re(this.rules, n, r, o)), ""), a = this.componentId + t;
    r.insertRules(a, a, i);
  }, e.prototype.removeStyles = function(t, n) {
    n.clearRules(this.componentId + t);
  }, e.prototype.renderStyles = function(t, n, r, o) {
    t > 2 && ft.registerId(this.componentId + t), this.removeStyles(t, r), this.createStyles(t, n, r, o);
  }, e;
}();
function _a(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  var r = J.apply(void 0, ie([e], t, !1)), o = "sc-global-".concat(hn(JSON.stringify(r))), i = new da(r, o);
  w.NODE_ENV !== "production" && Ir(o);
  var a = function(l) {
    var u = dt(), f = H.useContext(Ne), c = H.useRef(u.styleSheet.allocateGSInstance(o)).current;
    return w.NODE_ENV !== "production" && H.Children.count(l.children) && console.warn("The global style component ".concat(o, " was given child JSX. createGlobalStyle does not render children.")), w.NODE_ENV !== "production" && r.some(function(h) {
      return typeof h == "string" && h.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), u.styleSheet.server && s(c, l, u.styleSheet, f, u.stylis), H.useLayoutEffect(function() {
      if (!u.styleSheet.server)
        return s(c, l, u.styleSheet, f, u.stylis), function() {
          return i.removeStyles(c, u.styleSheet);
        };
    }, [c, l, u.styleSheet, f, u.stylis]), null;
  };
  function s(l, u, f, c, h) {
    if (i.isStatic)
      i.renderStyles(l, xi, f, h);
    else {
      var d = P(P({}, u), { theme: xr(u, c, a.defaultProps) });
      i.renderStyles(l, d, f, h);
    }
  }
  return H.memo(a);
}
function Ie(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  w.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = lt(J.apply(void 0, ie([e], t, !1))), o = hn(r);
  return new Zt(o, r);
}
w.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Je = "__sc-".concat(he, "__");
w.NODE_ENV !== "production" && w.NODE_ENV !== "test" && typeof window < "u" && (window[Je] || (window[Je] = 0), window[Je] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Je] += 1);
var ha = 0;
function _(e, t, n, r, o, i) {
  var a, s, l = {};
  for (s in t)
    s == "ref" ? a = t[s] : l[s] = t[s];
  var u = { type: e, props: l, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --ha, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (a = e.defaultProps))
    for (s in a)
      l[s] === void 0 && (l[s] = a[s]);
  return p.vnode && p.vnode(u), u;
}
const jr = ({
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
}), pa = 2, Yr = 14, ma = 0.0276;
var q = /* @__PURE__ */ ((e) => (e[e.S = 300] = "S", e[e.M = 400] = "M", e[e.L = 500] = "L", e[e.Default = 600] = "Default", e))(q || {});
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
}, tr = {
  loading: {
    text: "Loading. Please wait.",
    visible: !0
  },
  done: {
    text: "Waiting for input...",
    visible: !0
  }
}, ga = {
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
}, ya = {
  ...ga,
  [Be.FIT_YOUR_EYE]: "Fit your eye into square",
  [Be.DEVICE_PITCHED]: "Hold your phone at eye level"
}, va = "rgba(19, 19, 19, 0.5)", Ca = 34;
function nr(e, t) {
  return Math.max(t, t + (e - 400) * ma + 2);
}
const Zr = (e, t = Yr) => e ? e.width < e.height ? nr(e.width, t) : nr(e.height, t) : t, Ea = (e) => e > q.Default ? Me[q.Default] : e > q.L ? Me[q.L] : e > q.M ? Me[q.M] : Me[q.S], Sa = (e) => e ? Ea(e.width) : Me[q.Default], wa = M.div`
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
`, ba = M.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, $a = M.p`
  background: ${(e) => e.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(e) => `${e.$fontSize}px`};
  line-height: 1em;
  max-width: 80%;
`, Xt = ({
  fontSize: e,
  Icon: t,
  isCameraReady: n,
  position: r = "absolute",
  text: o
}) => _(wa, {
  $isCameraReady: n,
  $position: r,
  children: _(ba, {
    children: [t ? _(t, {
      svgSize: e * 2
    }) : null, _($a, {
      $fontSize: e,
      children: o
    })]
  })
}), qr = ({
  fontSize: e,
  text: t = "An unknown error has occurred"
}) => _(Xt, {
  fontSize: e,
  Icon: jr,
  position: "relative",
  text: t
});
class Oa extends z {
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
    return this.state.hasError ? _(qr, {
      fontSize: Zr(this.props.videoElementSize),
      Icon: jr,
      isCameraReady: !1
    }) : this.props.children;
  }
}
const Na = _a`
  [id^='x-dot'][id$='ui'] {
    font-family: ${(e) => e.theme.font.family};
    font-style: ${(e) => e.theme.font.style};
    font-weight: ${(e) => e.theme.font.weight};
  }
`, Ta = ({
  children: e,
  styleTarget: t,
  theme: n,
  videoElementSize: r
}) => _(aa, {
  target: t,
  children: _(ua, {
    theme: n,
    children: [_(Na, {}), _(Oa, {
      videoElementSize: r,
      children: e
    })]
  })
}), Ge = (e, t) => {
  const n = mt(t);
  se(() => {
    n.current = t;
  }, [t]), se(
    () => {
      const r = (o) => n.current(o);
      return document.addEventListener(e, r), () => {
        document.removeEventListener(e, r);
      };
    },
    [e]
    // Re-run if eventName
  );
}, ka = (e) => {
  const [t, n] = F(), r = Se((o) => {
    var i;
    n((i = o.detail) == null ? void 0 : i.size);
  }, [n]);
  return Ge(e, r), t;
};
function Ia(e, t) {
  return e ? `${e}, ${t}` : t;
}
const xa = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, Aa = {
  family: "Montserrat, Arial, sans-serif",
  weight: "600",
  style: "normal",
  minimumSize: Yr
}, Pe = {
  colors: xa,
  font: Aa
}, Ra = (e) => {
  var t;
  return e != null && e.theme ? {
    ...Pe,
    ...e.theme,
    colors: {
      ...Pe.colors,
      ...e.theme.colors
    },
    font: {
      ...Pe.font,
      ...e.theme.font,
      family: Ia((t = e.theme.font) == null ? void 0 : t.family, Pe.font.family)
    }
  } : Pe;
}, Pa = 0.75, Da = 2, yn = (e, t) => {
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
    this.isDetailChanged(t, n) && yn(t, n);
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
let Kt = _t;
Kt.getInstance();
const rr = (e, t) => {
  yn(e, {
    instruction: t
  });
}, La = (e) => {
  yn(e, {
    animationEnd: !0
  });
}, Ma = (e) => Number.parseFloat(e.toFixed(3)), Xr = (e, t) => Math.min(e, t), Ha = (e, t) => {
  const n = Xr(t.width, t.height);
  return Ma(e * n);
}, Fa = ({
  height: e,
  width: t
}) => {
  const n = Xr(t, e) * Pa, r = (t - n) / 2, o = (e - n) / 2;
  return {
    shiftX: r,
    shiftY: o,
    width: n,
    height: n
  };
}, Ua = (e) => {
  const {
    height: t,
    shiftX: n,
    shiftY: r,
    width: o
  } = Fa(e);
  return {
    shiftX: n / e.width,
    shiftY: r / e.height,
    width: o / e.width,
    height: t / e.height
  };
}, Ba = (e, t) => Ha(e, t) * Da;
class Wa {
  static async getVideoInputDeviceList() {
    return (await navigator.mediaDevices.enumerateDevices()).filter((n) => n.kind === "videoinput");
  }
}
const Ga = () => {
  const [e, t] = F(!1);
  return se(() => {
    (async () => {
      (await Wa.getVideoInputDeviceList()).length > 1 && t(!0);
    })();
  }, []), e;
}, za = ({
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
}), Va = ({
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
}), Kr = M.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(e) => e.$marginLeft ? `${e.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, ja = ({
  marginLeft: e,
  size: t,
  ...n
}) => _(Kr, {
  $marginLeft: e,
  ...n,
  children: _(za, {
    size: t
  })
}), Ya = ({
  marginLeft: e,
  size: t,
  ...n
}) => _(Kr, {
  $marginLeft: e,
  ...n,
  children: _(Va, {
    size: t
  })
}), Za = M.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.$padding}px`};
  z-index: 2;
`, qa = ({
  customControlEvent: e,
  isSwitchCameraDisabled: t,
  videoElementSize: n
}) => {
  const r = Ga(), {
    buttonPadding: o,
    iconSize: i,
    marginLeft: a
  } = Sa(n), s = () => {
    rr(e, Lt.TOGGLE_MIRROR);
  };
  return _(Za, {
    $padding: o,
    children: [r && _(Ya, {
      disabled: t,
      onClick: () => {
        rr(e, Lt.SWITCH_CAMERA);
      },
      size: i
    }), _(ja, {
      marginLeft: r ? a : 0,
      onClick: s,
      size: i
    })]
  });
}, or = 2.6, Jt = "1.5s", Qt = "1.5s", en = "ease-in-out", Xa = 2500, Ka = "2.5s", Ja = "0.3s", Qa = "linear", es = ".5s", ts = "3s", ns = "ease-in-out", rs = ".5s", os = ".5s", is = "ease-out", as = (e) => Ie`
100% {
  transform: translateX(22%)  scale(${e});
}
`, ss = (e) => Ie`
100% {
  transform: translate(34%, 8%)  scale(${e * 0.98});
}
`, cs = Ie`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`, ls = Ie`
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`, us = Ie`
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
`, fs = Ie`
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
`, ds = M.div`
  position: absolute;
  left: 50%;

  ${(e) => e.$cssTop ? `top: ${e.$cssTop}%;` : ""}
  ${(e) => e.$cssBottom ? `bottom: ${e.$cssBottom}%;` : ""}
    ${(e) => e.$isAnimating && J`
      animation: ${cs} ${Ja}
        ${Qa} both;
      animation-delay: ${Ka};

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
`, _s = M.div`
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
`, hs = ({
  children: e,
  cssBottom: t,
  cssTop: n,
  fontSize: r,
  isAnimating: o,
  isInCandidateSelection: i,
  isPortrait: a
}) => _(ds, {
  $cssBottom: t,
  $cssTop: n,
  $isAnimating: o,
  $isPortrait: a,
  children: _(_s, {
    $fontSize: r,
    $isInCandidateSelection: i,
    $wrap: e.length > Ca,
    children: e
  })
}), ps = M.canvas`
  transform: ${(e) => e.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, ms = (e) => {
  const t = e.getContext("2d");
  t && t.clearRect(0, 0, t.canvas.width, t.canvas.height);
}, gs = ({
  cameraResolution: e,
  isImageMirror: t
}) => {
  const n = mt(null), r = zr(), [o, i] = F(), a = Se((s) => {
    var l;
    i((l = s == null ? void 0 : s.detail) == null ? void 0 : l.detectedObject);
  }, [i]);
  return Ge(Ce.DETECTED_FACE_CHANGED, a), se(() => {
    if (!n.current)
      return;
    const s = (l, u) => {
      var m;
      if (!u)
        return;
      const {
        faceCenter: f,
        faceSize: c
      } = u, h = (m = n == null ? void 0 : n.current) == null ? void 0 : m.getContext("2d");
      if (!h)
        return;
      const d = Ba(c, l);
      h.beginPath(), h.arc(f.x, f.y, d, 0, 2 * Math.PI, !1), h.lineWidth = pa, h.strokeStyle = r.colors.placeholderColor, h.stroke();
    };
    n.current.width = e.width, n.current.height = e.height, ms(n.current), s(e, o);
  }, [e, o, r.colors.placeholderColor]), _(ps, {
    ref: n,
    $isImageMirror: t
  });
}, ys = () => {
  const [e, t] = F(), [n, r] = F(!1), o = Se((l) => {
    var f, c;
    t((f = l == null ? void 0 : l.detail) == null ? void 0 : f.cameraResolution);
    const u = (c = l == null ? void 0 : l.detail) == null ? void 0 : c.isMirroring;
    u !== void 0 && r(u);
  }, [t]);
  Ge(Ce.CAMERA_PROPS_CHANGED, o);
  const [i, a] = F(
    D.FACE_NOT_PRESENT
    // FIXME Default instruction should not be here
  ), s = Se((l) => {
    var u;
    a((u = l == null ? void 0 : l.detail) == null ? void 0 : u.instructionCode);
  }, [a]);
  return Ge(Ce.INSTRUCTION_CHANGED, s), {
    cameraResolution: e,
    instructionCode: i,
    isMirroring: n
  };
}, vs = (e, t) => {
  const [n, r] = F(!1);
  return se(() => {
    if (t === We.CLOSEUP) {
      r(!0);
      const o = setTimeout(() => {
        r(!1);
      }, Xa);
      return () => clearTimeout(o);
    }
  }, [t]), e && n ? e === Be.CANDIDATE_SELECTION ? e : Be.FIT_YOUR_EYE : e;
}, Cs = () => {
  const [e, t] = F(We.DISTANT), [n, r] = F(ne.LOADING), [o, i] = F(), a = Se((s) => {
    const {
      error: l,
      phase: u,
      state: f
    } = s.detail || {};
    u && t(u), f && r(f), l && i(l);
  }, [t, r, i]);
  return Ge(sn.STATUS_CHANGED, a), {
    magnifEyePhase: e,
    magnifEyeState: n,
    magnifEyeError: o
  };
}, Es = M.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, Ss = ({
  svgSize: e
}) => _(Es, {
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
}), ws = M.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`, bs = ({
  backdropColor: e,
  children: t,
  height: n,
  width: r
}) => _(ws, {
  children: _("svg", {
    viewBox: `0 0 ${r} ${n}`,
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
}), $s = ({
  backdropColor: e,
  cameraHeight: t,
  cameraWidth: n,
  fontSize: r,
  magnifEyeState: o,
  magnifEyeStateInstructions: i
}) => {
  const a = o === ne.ERROR || o === ne.RUNNING;
  return !o || a || !i[o].visible ? null : o === ne.DONE ? _(B, {
    children: [t && n && _(bs, {
      backdropColor: e,
      height: t,
      width: n
    }), _(Xt, {
      fontSize: r,
      isCameraReady: !0,
      text: i[o].text
    })]
  }) : _(B, {
    children: _(Xt, {
      fontSize: r,
      Icon: Ss,
      isCameraReady: !0,
      text: i[o].text
    })
  });
}, Os = M.div`
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

    ${(e) => e.$isAnimating && J`
        animation: ${as(or)} ${Qt}
          ${en} both;
        animation-delay: ${Jt};
      `}

    @media (max-width: 667px) {
      ${(e) => e.$isAnimating && J`
          animation: ${ss(or)} ${Qt}
            ${en} both;
          animation-delay: ${Jt};
        `}
    }
  }
`, Ns = ({
  backdropColor: e,
  handleAnimationEnd: t,
  height: n,
  initialPosition: r,
  isAnimating: o,
  isInCandidateSelection: i,
  width: a
}) => _(Os, {
  $isAnimating: o,
  $isInCandidateSelection: i,
  onAnimationEnd: t,
  children: _("svg", {
    viewBox: `0 0 ${a} ${n}`,
    children: [_("mask", {
      id: "mask",
      children: [_("rect", {
        fill: "#fff",
        height: "100%",
        width: "100%"
      }), _("rect", {
        fill: "#000",
        height: `${r.height * 100}%`,
        id: "backdrop-cutout",
        rx: "50%",
        width: `${r.width * 100}%`,
        x: `${r.shiftX * 100}%`,
        y: `${r.shiftY * 100}%`
      })]
    }), _("rect", {
      fill: e,
      height: "100%",
      mask: "url(#mask)",
      width: "100%"
    }), _("rect", {
      clipPath: "circle()",
      fill: "none",
      height: `${r.height * 100}%`,
      id: "placeholder",
      rx: "50%",
      stroke: "currentColor",
      strokeWidth: "3",
      width: `${r.width * 100}%`,
      x: `${r.shiftX * 100}%`,
      y: `${r.shiftY * 100}%`
    })]
  })
}), Ts = () => _("svg", {
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
}), ks = () => _("svg", {
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
}), Is = M.div`
  position: absolute;
  top: 47%;
  left: 43%;
  transform: translate(-50%, -50%);
  width: 7%;
  aspect-ratio: 1;

  @media (max-width: 768px) {
    width: 14%;
  }

  ${(e) => e.$isAnimating && J`
      animation: ${ls} ${Qt} ${en} both;
      animation-delay: ${Jt};
    `}
`, xs = M.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.6);
  opacity: 0;

  ${(e) => e.$isAnimating && J`
      animation: ${us} ${ts} ${ns} both;
      animation-delay: ${es};
    `}

  svg {
    display: inline-block;
    width: 100%;
    height: auto;
    filter: drop-shadow(0px 0px 5px rgba(2, 27, 65, 0.3));
  }
`, As = M.div`
  position: absolute;
  width: 100%;
  height: 100%;
  color: ${(e) => e.$isInCandidateSelection ? "#00BFB2" : "white"};
  transform: scale(0);
  opacity: 0;

  ${(e) => e.$isAnimating && J`
      animation: ${fs} ${os} ${is} both;
      animation-delay: ${rs};
    `}

  svg {
    display: inline-block;
    width: 100%;
    height: auto;
    filter: drop-shadow(0px 0px 4px rgba(2, 27, 65, 0.3));
  }
`, Rs = ({
  isAnimating: e,
  isInCandidateSelection: t
}) => _(Is, {
  $isAnimating: e,
  children: [_(As, {
    $isAnimating: e,
    $isInCandidateSelection: t,
    children: _(Ts, {})
  }), _(xs, {
    $isAnimating: e,
    children: _(ks, {})
  })]
}), Ps = ({
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
  } = ys(), {
    font: l
  } = zr(), u = Zr(o, l.minimumSize), {
    magnifEyeError: f,
    magnifEyePhase: c,
    magnifEyeState: h
  } = Cs(), d = vs(a, c), m = d === Be.CANDIDATE_SELECTION, E = c === We.MIDDLE || c === We.CLOSEUP;
  if (h === ne.ERROR)
    return _(qr, {
      fontSize: u,
      text: f == null ? void 0 : f.message
    });
  if (h === ne.RUNNING && i) {
    const b = Ua(i);
    return _(B, {
      children: [!E && _(gs, {
        cameraResolution: i,
        isImageMirror: s
      }), _(Ns, {
        backdropColor: e,
        handleAnimationEnd: () => La(sn.ANIMATION_END),
        height: i.height,
        initialPosition: b,
        isAnimating: E,
        isInCandidateSelection: m,
        width: i.width
      }), d && _(hs, {
        cssBottom: (b.height + b.shiftY) * 100,
        fontSize: u,
        isAnimating: E,
        isInCandidateSelection: m,
        isPortrait: i.width < i.height,
        children: t[d]
      }), _(Rs, {
        isAnimating: E,
        isInCandidateSelection: m
      }), r && !E && _(qa, {
        customControlEvent: Ce.CONTROL,
        isSwitchCameraDisabled: m,
        videoElementSize: o
      })]
    });
  }
  return _($s, {
    backdropColor: e,
    cameraHeight: i == null ? void 0 : i.height,
    cameraWidth: i == null ? void 0 : i.width,
    fontSize: u,
    magnifEyeState: h,
    magnifEyeStateInstructions: n
  });
}, Ds = (e) => {
  var i, a;
  const t = {
    ...ya,
    ...e == null ? void 0 : e.instructions
  }, n = {
    [ne.LOADING]: {
      ...tr.loading,
      ...(i = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : i.loading
    },
    [ne.DONE]: {
      ...tr.done,
      ...(a = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : a.done
    }
  }, r = (e == null ? void 0 : e.backdropColor) ?? va, o = (e == null ? void 0 : e.showCameraButtons) ?? !1;
  return {
    backdropColor: r,
    magnifEyeInstructions: t,
    magnifEyeStateInstructions: n,
    showCameraButtons: o
  };
}, Ls = ({
  props: e
}) => {
  const {
    backdropColor: t,
    magnifEyeInstructions: n,
    magnifEyeStateInstructions: r,
    showCameraButtons: o
  } = Ds(e), i = ka(Ce.VIDEO_ELEMENT_SIZE), a = Ra(e);
  return _(Ta, {
    styleTarget: e == null ? void 0 : e.styleTarget,
    theme: a,
    videoElementSize: i,
    children: _(Ps, {
      backdropColor: t,
      instructions: n,
      magnifEyeStateInstructions: r,
      showCameraButtons: o,
      videoElementSize: i
    })
  });
};
yo(Ls, "x-dot-magnifeye-liveness-ui", ["props"]);
