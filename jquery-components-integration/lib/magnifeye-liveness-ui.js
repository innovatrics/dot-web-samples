var Jr = Object.defineProperty;
var Qr = (e, t, n) => t in e ? Jr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ve = (e, t, n) => (Qr(e, typeof t != "symbol" ? t + "" : t, n), n);
var Fe, g, Qn, oe, hn, er, Ot, tr, ge = {}, nr = [], eo = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, st = Array.isArray;
function Z(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function rr(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function P(e, t, n) {
  var r, o, i, a = {};
  for (i in t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Fe.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      a[i] === void 0 && (a[i] = e.defaultProps[i]);
  return Re(e, a, r, o, null);
}
function Re(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o ?? ++Qn };
  return o == null && g.vnode != null && g.vnode(i), i;
}
function to() {
  return { current: null };
}
function W(e) {
  return e.children;
}
function U(e, t) {
  this.props = e, this.context = t;
}
function tt(e, t) {
  if (t == null)
    return e.__ ? tt(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? tt(e) : null;
}
function or(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return or(e);
  }
}
function At(e) {
  (!e.__d && (e.__d = !0) && oe.push(e) && !nt.__r++ || hn !== g.debounceRendering) && ((hn = g.debounceRendering) || er)(nt);
}
function nt() {
  var e, t, n, r, o, i, a, c, l;
  for (oe.sort(Ot); e = oe.shift(); )
    e.__d && (t = oe.length, r = void 0, o = void 0, i = void 0, c = (a = (n = e).__v).__e, (l = n.__P) && (r = [], o = [], (i = Z({}, a)).__v = a.__v + 1, Xt(l, a, i, n.__n, l.ownerSVGElement !== void 0, a.__h != null ? [c] : null, r, c ?? tt(a), a.__h, o), cr(r, a, o), a.__e != c && or(a)), oe.length > t && oe.sort(Ot));
  nt.__r = 0;
}
function ir(e, t, n, r, o, i, a, c, l, d, f) {
  var s, _, p, u, m, A, C, E, w, S, $ = 0, y = r && r.__k || nr, v = y.length, D = v, O = t.length;
  for (n.__k = [], s = 0; s < O; s++)
    (u = n.__k[s] = (u = t[s]) == null || typeof u == "boolean" || typeof u == "function" ? null : typeof u == "string" || typeof u == "number" || typeof u == "bigint" ? Re(null, u, null, null, u) : st(u) ? Re(W, { children: u }, null, null, null) : u.__b > 0 ? Re(u.type, u.props, u.key, u.ref ? u.ref : null, u.__v) : u) != null && (u.__ = n, u.__b = n.__b + 1, (E = no(u, y, C = s + $, D)) === -1 ? p = ge : (p = y[E] || ge, y[E] = void 0, D--), Xt(e, u, p, o, i, a, c, l, d, f), m = u.__e, (_ = u.ref) && p.ref != _ && (p.ref && Kt(p.ref, null, u), f.push(_, u.__c || m, u)), m != null && (A == null && (A = m), S = !(w = p === ge || p.__v === null) && E === C, w ? E == -1 && $-- : E !== C && (E === C + 1 ? ($++, S = !0) : E > C ? D > O - C ? ($ += E - C, S = !0) : $-- : $ = E < C && E == C - 1 ? E - C : 0), C = s + $, S = S || E == s && !w, typeof u.type != "function" || E === C && p.__k !== u.__k ? typeof u.type == "function" || S ? u.__d !== void 0 ? (l = u.__d, u.__d = void 0) : l = m.nextSibling : l = sr(e, m, l) : l = ar(u, l, e), typeof n.type == "function" && (n.__d = l)));
  for (n.__e = A, s = v; s--; )
    y[s] != null && (typeof n.type == "function" && y[s].__e != null && y[s].__e == n.__d && (n.__d = y[s].__e.nextSibling), lr(y[s], y[s]));
}
function ar(e, t, n) {
  for (var r, o = e.__k, i = 0; o && i < o.length; i++)
    (r = o[i]) && (r.__ = e, t = typeof r.type == "function" ? ar(r, t, n) : sr(n, r.__e, t));
  return t;
}
function q(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (st(e) ? e.some(function(n) {
    q(n, t);
  }) : t.push(e)), t;
}
function sr(e, t, n) {
  return n == null || n.parentNode !== e ? e.insertBefore(t, null) : t == n && t.parentNode != null || e.insertBefore(t, n), t.nextSibling;
}
function no(e, t, n, r) {
  var o = e.key, i = e.type, a = n - 1, c = n + 1, l = t[n];
  if (l === null || l && o == l.key && i === l.type)
    return n;
  if (r > (l != null ? 1 : 0))
    for (; a >= 0 || c < t.length; ) {
      if (a >= 0) {
        if ((l = t[a]) && o == l.key && i === l.type)
          return a;
        a--;
      }
      if (c < t.length) {
        if ((l = t[c]) && o == l.key && i === l.type)
          return c;
        c++;
      }
    }
  return -1;
}
function ro(e, t, n, r, o) {
  var i;
  for (i in n)
    i === "children" || i === "key" || i in t || rt(e, i, null, n[i], r);
  for (i in t)
    o && typeof t[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || n[i] === t[i] || rt(e, i, t[i], n[i], r);
}
function _n(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || eo.test(t) ? n : n + "px";
}
function rt(e, t, n, r, o) {
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
      i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r || e.addEventListener(t, i ? mn : pn, i) : e.removeEventListener(t, i ? mn : pn, i);
    else if (t !== "dangerouslySetInnerHTML") {
      if (o)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t !== "rowSpan" && t !== "colSpan" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t[4] !== "-" ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function pn(e) {
  return this.l[e.type + !1](g.event ? g.event(e) : e);
}
function mn(e) {
  return this.l[e.type + !0](g.event ? g.event(e) : e);
}
function Xt(e, t, n, r, o, i, a, c, l, d) {
  var f, s, _, p, u, m, A, C, E, w, S, $, y, v, D, O = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, c = t.__e = n.__e, t.__h = null, i = [c]), (f = g.__b) && f(t);
  try {
    e:
      if (typeof O == "function") {
        if (C = t.props, E = (f = O.contextType) && r[f.__c], w = f ? E ? E.props.value : f.__ : r, n.__c ? A = (s = t.__c = n.__c).__ = s.__E : ("prototype" in O && O.prototype.render ? t.__c = s = new O(C, w) : (t.__c = s = new U(C, w), s.constructor = O, s.render = io), E && E.sub(s), s.props = C, s.state || (s.state = {}), s.context = w, s.__n = r, _ = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), O.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Z({}, s.__s)), Z(s.__s, O.getDerivedStateFromProps(C, s.__s))), p = s.props, u = s.state, s.__v = t, _)
          O.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (O.getDerivedStateFromProps == null && C !== p && s.componentWillReceiveProps != null && s.componentWillReceiveProps(C, w), !s.__e && (s.shouldComponentUpdate != null && s.shouldComponentUpdate(C, s.__s, w) === !1 || t.__v === n.__v)) {
            for (t.__v !== n.__v && (s.props = C, s.state = s.__s, s.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(_e) {
              _e && (_e.__ = t);
            }), S = 0; S < s._sb.length; S++)
              s.__h.push(s._sb[S]);
            s._sb = [], s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(C, s.__s, w), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(p, u, m);
          });
        }
        if (s.context = w, s.props = C, s.__P = e, s.__e = !1, $ = g.__r, y = 0, "prototype" in O && O.prototype.render) {
          for (s.state = s.__s, s.__d = !1, $ && $(t), f = s.render(s.props, s.state, s.context), v = 0; v < s._sb.length; v++)
            s.__h.push(s._sb[v]);
          s._sb = [];
        } else
          do
            s.__d = !1, $ && $(t), f = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++y < 25);
        s.state = s.__s, s.getChildContext != null && (r = Z(Z({}, r), s.getChildContext())), _ || s.getSnapshotBeforeUpdate == null || (m = s.getSnapshotBeforeUpdate(p, u)), ir(e, st(D = f != null && f.type === W && f.key == null ? f.props.children : f) ? D : [D], t, n, r, o, i, a, c, l, d), s.base = t.__e, t.__h = null, s.__h.length && a.push(s), A && (s.__E = s.__ = null);
      } else
        i == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = oo(n.__e, t, n, r, o, i, a, l, d);
    (f = g.diffed) && f(t);
  } catch (_e) {
    t.__v = null, (l || i != null) && (t.__e = c, t.__h = !!l, i[i.indexOf(c)] = null), g.__e(_e, t, n);
  }
}
function cr(e, t, n) {
  for (var r = 0; r < n.length; r++)
    Kt(n[r], n[++r], n[++r]);
  g.__c && g.__c(t, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      g.__e(i, o.__v);
    }
  });
}
function oo(e, t, n, r, o, i, a, c, l) {
  var d, f, s, _ = n.props, p = t.props, u = t.type, m = 0;
  if (u === "svg" && (o = !0), i != null) {
    for (; m < i.length; m++)
      if ((d = i[m]) && "setAttribute" in d == !!u && (u ? d.localName === u : d.nodeType === 3)) {
        e = d, i[m] = null;
        break;
      }
  }
  if (e == null) {
    if (u === null)
      return document.createTextNode(p);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", u) : document.createElement(u, p.is && p), i = null, c = !1;
  }
  if (u === null)
    _ === p || c && e.data === p || (e.data = p);
  else {
    if (i = i && Fe.call(e.childNodes), f = (_ = n.props || ge).dangerouslySetInnerHTML, s = p.dangerouslySetInnerHTML, !c) {
      if (i != null)
        for (_ = {}, m = 0; m < e.attributes.length; m++)
          _[e.attributes[m].name] = e.attributes[m].value;
      (s || f) && (s && (f && s.__html == f.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (ro(e, p, _, o, c), s)
      t.__k = [];
    else if (ir(e, st(m = t.props.children) ? m : [m], t, n, r, o && u !== "foreignObject", i, a, i ? i[0] : n.__k && tt(n, 0), c, l), i != null)
      for (m = i.length; m--; )
        i[m] != null && rr(i[m]);
    c || ("value" in p && (m = p.value) !== void 0 && (m !== e.value || u === "progress" && !m || u === "option" && m !== _.value) && rt(e, "value", m, _.value, !1), "checked" in p && (m = p.checked) !== void 0 && m !== e.checked && rt(e, "checked", m, _.checked, !1));
  }
  return e;
}
function Kt(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    g.__e(r, n);
  }
}
function lr(e, t, n) {
  var r, o;
  if (g.unmount && g.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Kt(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (i) {
        g.__e(i, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (o = 0; o < r.length; o++)
      r[o] && lr(r[o], t, n || typeof e.type != "function");
  n || e.__e == null || rr(e.__e), e.__ = e.__e = e.__d = void 0;
}
function io(e, t, n) {
  return this.constructor(e, n);
}
function ee(e, t, n) {
  var r, o, i, a;
  g.__ && g.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], a = [], Xt(t, e = (!r && n || t).__k = P(W, null, [e]), o || ge, ge, t.ownerSVGElement !== void 0, !r && n ? [n] : o ? null : t.firstChild ? Fe.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, a), cr(i, e, a);
}
function Jt(e, t) {
  ee(e, t, Jt);
}
function Qt(e, t, n) {
  var r, o, i, a, c = Z({}, e.props);
  for (i in e.type && e.type.defaultProps && (a = e.type.defaultProps), t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : c[i] = t[i] === void 0 && a !== void 0 ? a[i] : t[i];
  return arguments.length > 2 && (c.children = arguments.length > 3 ? Fe.call(arguments, 2) : n), Re(e.type, c, r || e.key, o || e.ref, null);
}
function ao(e, t) {
  var n = { __c: t = "__cC" + tr++, __: e, Consumer: function(r, o) {
    return r.children(o);
  }, Provider: function(r) {
    var o, i;
    return this.getChildContext || (o = [], (i = {})[t] = this, this.getChildContext = function() {
      return i;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && o.some(function(c) {
        c.__e = !0, At(c);
      });
    }, this.sub = function(a) {
      o.push(a);
      var c = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        o.splice(o.indexOf(a), 1), c && c.call(a);
      };
    }), r.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
Fe = nr.slice, g = { __e: function(e, t, n, r) {
  for (var o, i, a; t = t.__; )
    if ((o = t.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), a = o.__d), a)
          return o.__E = o;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Qn = 0, U.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Z({}, this.state), typeof e == "function" && (e = e(Z({}, n), this.props)), e && Z(n, e), e != null && this.__v && (t && this._sb.push(t), At(this));
}, U.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), At(this));
}, U.prototype.render = W, oe = [], er = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ot = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, nt.__r = 0, tr = 0;
function en() {
  return (en = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function so(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, n = function(r, o) {
    if (r == null)
      return {};
    var i, a, c = {}, l = Object.keys(r);
    for (a = 0; a < l.length; a++)
      o.indexOf(i = l[a]) >= 0 || (c[i] = r[i]);
    return c;
  }(e, ["context", "children"]);
  return Qt(t, n);
}
function co() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = P(so, en({}, this._props, { context: e.detail.context }), function t(n, r) {
    if (n.nodeType === 3)
      return n.data;
    if (n.nodeType !== 1)
      return null;
    var o = [], i = {}, a = 0, c = n.attributes, l = n.childNodes;
    for (a = c.length; a--; )
      c[a].name !== "slot" && (i[c[a].name] = c[a].value, i[ur(c[a].name)] = c[a].value);
    for (a = l.length; a--; ) {
      var d = t(l[a], null), f = l[a].slot;
      f ? i[f] = P(gn, { name: f }, d) : o[a] = d;
    }
    var s = r ? P(gn, null, o) : o;
    return P(r || n.nodeName.toLowerCase(), i, s);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Jt : ee)(this._vdom, this._root);
}
function ur(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function lo(e, t, n) {
  if (this._vdom) {
    var r = {};
    r[e] = n = n ?? void 0, r[ur(e)] = n, this._vdom = Qt(this._vdom, r), ee(this._vdom, this._root);
  }
}
function uo() {
  ee(this._vdom = null, this._root);
}
function gn(e, t) {
  var n = this;
  return P("slot", en({}, e, { ref: function(r) {
    r ? (n.ref = r, n._listener || (n._listener = function(o) {
      o.stopPropagation(), o.detail.context = t;
    }, r.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function fo(e, t, n, r) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = e, i._root = r && r.shadow ? i.attachShadow({ mode: "open" }) : i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = co, o.prototype.attributeChangedCallback = lo, o.prototype.disconnectedCallback = uo, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = n, n.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom.props[i];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(i, null, a) : (this._props || (this._props = {}), this._props[i] = a, this.connectedCallback());
      var c = typeof a;
      a != null && c !== "string" && c !== "boolean" && c !== "number" || this.setAttribute(i, a);
    } });
  }), customElements.define(t || e.tagName || e.displayName || e.name, o);
}
var xt = /* @__PURE__ */ ((e) => (e.CONTINUE_DETECTION = "continue-detection", e.SWITCH_CAMERA = "switch-camera", e.TOGGLE_MIRROR = "toggle-mirror", e))(xt || {}), ye = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", e.CONTROL = "face-auto-capture:control", e.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", e.FACE_DETECTION = "face-auto-capture:face-detection", e.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", e.STATE_CHANGED = "face-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", e))(ye || {}), tn = /* @__PURE__ */ ((e) => (e.ANIMATION_END = "magnifeye-auto-capture:animation-end", e.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", e))(tn || {});
const B = {
  CANDIDATE_SELECTION: "candidate_selection",
  FACE_TOO_CLOSE: "face_too_close",
  FACE_TOO_FAR: "face_too_far",
  FACE_CENTERING: "face_centering",
  FACE_NOT_PRESENT: "face_not_present",
  SHARPNESS_TOO_LOW: "sharpness_too_low",
  BRIGHTNESS_TOO_LOW: "brightness_too_low",
  BRIGHTNESS_TOO_HIGH: "brightness_too_high",
  DEVICE_PITCHED: "device_pitched"
}, ho = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  WAITING: "WAITING",
  RUNNING: "RUNNING"
}, Pe = {
  ...B,
  FIT_YOUR_EYE: "fit_your_eye"
};
var Le = /* @__PURE__ */ ((e) => (e.CLOSEUP = "CLOSEUP", e.DISTANT = "DISTANT", e.MIDDLE = "MIDDLE", e))(Le || {});
const Q = {
  ...ho,
  DONE: "DONE"
};
var R = function() {
  return R = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, R.apply(this, arguments);
};
function le(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function _o(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var po = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, mo = /* @__PURE__ */ _o(
  function(e) {
    return po.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), te, I, Ct, yn, ve = 0, dr = [], Ze = [], vn = g.__b, Cn = g.__r, En = g.diffed, bn = g.__c, wn = g.unmount;
function $e(e, t) {
  g.__h && g.__h(I, e, ve || t), ve = 0;
  var n = I.__H || (I.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({ __V: Ze }), n.__[e];
}
function H(e) {
  return ve = 1, fr(hr, e);
}
function fr(e, t, n) {
  var r = $e(te++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : hr(void 0, t), function(c) {
    var l = r.__N ? r.__N[0] : r.__[0], d = r.t(l, c);
    l !== d && (r.__N = [d, r.__[1]], r.__c.setState({}));
  }], r.__c = I, !I.u)) {
    var o = function(c, l, d) {
      if (!r.__c.__H)
        return !0;
      var f = r.__c.__H.__.filter(function(_) {
        return _.__c;
      });
      if (f.every(function(_) {
        return !_.__N;
      }))
        return !i || i.call(this, c, l, d);
      var s = !1;
      return f.forEach(function(_) {
        if (_.__N) {
          var p = _.__[0];
          _.__ = _.__N, _.__N = void 0, p !== _.__[0] && (s = !0);
        }
      }), !(!s && r.__c.props === c) && (!i || i.call(this, c, l, d));
    };
    I.u = !0;
    var i = I.shouldComponentUpdate, a = I.componentWillUpdate;
    I.componentWillUpdate = function(c, l, d) {
      if (this.__e) {
        var f = i;
        i = void 0, o(c, l, d), i = f;
      }
      a && a.call(this, c, l, d);
    }, I.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function ue(e, t) {
  var n = $e(te++, 3);
  !g.__s && rn(n.__H, t) && (n.__ = e, n.i = t, I.__H.__h.push(n));
}
function ct(e, t) {
  var n = $e(te++, 4);
  !g.__s && rn(n.__H, t) && (n.__ = e, n.i = t, I.__h.push(n));
}
function lt(e) {
  return ve = 5, ut(function() {
    return { current: e };
  }, []);
}
function go(e, t, n) {
  ve = 6, ct(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(e));
}
function ut(e, t) {
  var n = $e(te++, 7);
  return rn(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__;
}
function Ce(e, t) {
  return ve = 8, ut(function() {
    return e;
  }, t);
}
function nn(e) {
  var t = I.context[e.__c], n = $e(te++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(I)), t.props.value) : e.__;
}
function Tt(e, t) {
  g.useDebugValue && g.useDebugValue(t ? t(e) : e);
}
function yo() {
  var e = $e(te++, 11);
  if (!e.__) {
    for (var t = I.__v; t !== null && !t.__m && t.__ !== null; )
      t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function vo() {
  for (var e; e = dr.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(qe), e.__H.__h.forEach(Rt), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], g.__e(t, e.__v);
      }
}
g.__b = function(e) {
  I = null, vn && vn(e);
}, g.__r = function(e) {
  Cn && Cn(e), te = 0;
  var t = (I = e.__c).__H;
  t && (Ct === I ? (t.__h = [], I.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = Ze, n.__N = n.i = void 0;
  })) : (t.__h.forEach(qe), t.__h.forEach(Rt), t.__h = [], te = 0)), Ct = I;
}, g.diffed = function(e) {
  En && En(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (dr.push(t) !== 1 && yn === g.requestAnimationFrame || ((yn = g.requestAnimationFrame) || Co)(vo)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== Ze && (n.__ = n.__V), n.i = void 0, n.__V = Ze;
  })), Ct = I = null;
}, g.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(qe), n.__h = n.__h.filter(function(r) {
        return !r.__ || Rt(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], g.__e(r, n.__v);
    }
  }), bn && bn(e, t);
}, g.unmount = function(e) {
  wn && wn(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      qe(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && g.__e(t, n.__v));
};
var Sn = typeof requestAnimationFrame == "function";
function Co(e) {
  var t, n = function() {
    clearTimeout(r), Sn && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  Sn && (t = requestAnimationFrame(n));
}
function qe(e) {
  var t = I, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), I = t;
}
function Rt(e) {
  var t = I;
  e.__c = e.__(), I = t;
}
function rn(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function hr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function _r(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Dt(e, t) {
  for (var n in e)
    if (n !== "__source" && !(n in t))
      return !0;
  for (var r in t)
    if (r !== "__source" && e[r] !== t[r])
      return !0;
  return !1;
}
function Et(e, t) {
  return e === t && (e !== 0 || 1 / e == 1 / t) || e != e && t != t;
}
function Pt(e) {
  this.props = e;
}
function Eo(e, t) {
  function n(o) {
    var i = this.props.ref, a = i == o.ref;
    return !a && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !a : Dt(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, P(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(Pt.prototype = new U()).isPureReactComponent = !0, Pt.prototype.shouldComponentUpdate = function(e, t) {
  return Dt(this.props, e) || Dt(this.state, t);
};
var $n = g.__b;
g.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), $n && $n(e);
};
var bo = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function wo(e) {
  function t(n) {
    var r = _r({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = bo, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Nn = function(e, t) {
  return e == null ? null : q(q(e).map(t));
}, So = { map: Nn, forEach: Nn, count: function(e) {
  return e ? q(e).length : 0;
}, only: function(e) {
  var t = q(e);
  if (t.length !== 1)
    throw "Children.only";
  return t[0];
}, toArray: q }, $o = g.__e;
g.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; )
      if ((o = i.__c) && o.__c)
        return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  $o(e, t, n, r);
};
var kn = g.unmount;
function pr(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = _r({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return pr(r, t, n);
  })), e;
}
function mr(e, t, n) {
  return e && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return mr(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = n)), e;
}
function Xe() {
  this.__u = 0, this.t = null, this.__b = null;
}
function gr(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function No(e) {
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
function Ae() {
  this.u = null, this.o = null;
}
g.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), kn && kn(e);
}, (Xe.prototype = new U()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var o = gr(r.__v), i = !1, a = function() {
    i || (i = !0, n.__R = null, o ? o(c) : c());
  };
  n.__R = a;
  var c = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var d = r.state.__a;
        r.__v.__k[0] = mr(d, d.__c.__P, d.__c.__O);
      }
      var f;
      for (r.setState({ __a: r.__b = null }); f = r.t.pop(); )
        f.forceUpdate();
    }
  }, l = t.__h === !0;
  r.__u++ || l || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(a, a);
}, Xe.prototype.componentWillUnmount = function() {
  this.t = [];
}, Xe.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = pr(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && P(W, null, e.fallback);
  return o && (o.__h = null), [P(W, null, t.__a ? null : e.children), o];
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
function ko(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function Io(e) {
  var t = this, n = e.i;
  t.componentWillUnmount = function() {
    ee(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r);
  } }), ee(P(ko, { context: t.context }, e.__v), t.l)) : t.l && t.componentWillUnmount();
}
function Oo(e, t) {
  var n = P(Io, { __v: e, i: t });
  return n.containerInfo = t, n;
}
(Ae.prototype = new U()).__a = function(e) {
  var t = this, n = gr(t.__v), r = t.o.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), In(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, Ae.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = q(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; )
    this.o.set(t[n], this.u = [1, 0, this.u]);
  return e.children;
}, Ae.prototype.componentDidUpdate = Ae.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, n) {
    In(e, n, t);
  });
};
var yr = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Ao = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, xo = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, To = /[A-Z0-9]/g, Ro = typeof document < "u", Do = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function Po(e, t, n) {
  return t.__k == null && (t.textContent = ""), ee(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function Lo(e, t, n) {
  return Jt(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
U.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(U.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var On = g.event;
function Mo() {
}
function Ho() {
  return this.cancelBubble;
}
function Fo() {
  return this.defaultPrevented;
}
g.event = function(e) {
  return On && (e = On(e)), e.persist = Mo, e.isPropagationStopped = Ho, e.isDefaultPrevented = Fo, e.nativeEvent = e;
};
var on, Bo = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, An = g.vnode;
g.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {};
    for (var i in n) {
      var a = n[i];
      if (!(i === "value" && "defaultValue" in n && a == null || Ro && i === "children" && r === "noscript" || i === "class" || i === "className")) {
        var c = i.toLowerCase();
        i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && a === !0 ? a = "" : c === "ondoubleclick" ? i = "ondblclick" : c !== "onchange" || r !== "input" && r !== "textarea" || Do(n.type) ? c === "onfocus" ? i = "onfocusin" : c === "onblur" ? i = "onfocusout" : xo.test(i) ? i = c : r.indexOf("-") === -1 && Ao.test(i) ? i = i.replace(To, "-$&").toLowerCase() : a === null && (a = void 0) : c = i = "oninput", c === "oninput" && o[i = c] && (i = "oninputCapture"), o[i] = a;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = q(n.children).forEach(function(l) {
      l.props.selected = o.value.indexOf(l.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = q(n.children).forEach(function(l) {
      l.props.selected = o.multiple ? o.defaultValue.indexOf(l.props.value) != -1 : o.defaultValue == l.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", Bo)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = yr, An && An(e);
};
var xn = g.__r;
g.__r = function(e) {
  xn && xn(e), on = e.__c;
};
var Tn = g.diffed;
g.diffed = function(e) {
  Tn && Tn(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), on = null;
};
var Uo = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return on.__n[e.__c].props.value;
} } } };
function zo(e) {
  return P.bind(null, e);
}
function vr(e) {
  return !!e && e.$$typeof === yr;
}
function Wo(e) {
  return vr(e) ? Qt.apply(null, arguments) : e;
}
function Vo(e) {
  return !!e.__k && (ee(null, e), !0);
}
function jo(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var Go = function(e, t) {
  return e(t);
}, Yo = function(e, t) {
  return e(t);
}, Zo = W;
function Cr(e) {
  e();
}
function qo(e) {
  return e;
}
function Xo() {
  return [!1, Cr];
}
var Ko = ct;
function Jo(e, t) {
  var n = t(), r = H({ h: { __: n, v: t } }), o = r[0].h, i = r[1];
  return ct(function() {
    o.__ = n, o.v = t, Et(o.__, t()) || i({ h: o });
  }, [e, n, t]), ue(function() {
    return Et(o.__, o.v()) || i({ h: o }), e(function() {
      Et(o.__, o.v()) || i({ h: o });
    });
  }, [e]), n;
}
var de = { useState: H, useId: yo, useReducer: fr, useEffect: ue, useLayoutEffect: ct, useInsertionEffect: Ko, useTransition: Xo, useDeferredValue: qo, useSyncExternalStore: Jo, startTransition: Cr, useRef: lt, useImperativeHandle: go, useMemo: ut, useCallback: Ce, useContext: nn, useDebugValue: Tt, version: "17.0.2", Children: So, render: Po, hydrate: Lo, unmountComponentAtNode: Vo, createPortal: Oo, createElement: P, createContext: ao, createFactory: zo, cloneElement: Wo, createRef: to, Fragment: W, isValidElement: vr, findDOMNode: jo, Component: U, PureComponent: Pt, memo: Eo, forwardRef: wo, flushSync: Yo, unstable_batchedUpdates: Go, StrictMode: Zo, Suspense: Xe, SuspenseList: Ae, lazy: No, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Uo }, k = "-ms-", De = "-moz-", N = "-webkit-", Er = "comm", dt = "rule", an = "decl", Qo = "@import", br = "@keyframes", ei = "@layer", ti = Math.abs, sn = String.fromCharCode, Lt = Object.assign;
function ni(e, t) {
  return T(e, 0) ^ 45 ? (((t << 2 ^ T(e, 0)) << 2 ^ T(e, 1)) << 2 ^ T(e, 2)) << 2 ^ T(e, 3) : 0;
}
function wr(e) {
  return e.trim();
}
function G(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function b(e, t, n) {
  return e.replace(t, n);
}
function Ke(e, t) {
  return e.indexOf(t);
}
function T(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ee(e, t, n) {
  return e.slice(t, n);
}
function V(e) {
  return e.length;
}
function Sr(e) {
  return e.length;
}
function xe(e, t) {
  return t.push(e), e;
}
function ri(e, t) {
  return e.map(t).join("");
}
function Rn(e, t) {
  return e.filter(function(n) {
    return !G(n, t);
  });
}
var ft = 1, be = 1, $r = 0, F = 0, x = 0, Ne = "";
function ht(e, t, n, r, o, i, a, c) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: ft, column: be, length: a, return: "", siblings: c };
}
function J(e, t) {
  return Lt(ht("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function me(e) {
  for (; e.root; )
    e = J(e.root, { children: [e] });
  xe(e, e.siblings);
}
function oi() {
  return x;
}
function ii() {
  return x = F > 0 ? T(Ne, --F) : 0, be--, x === 10 && (be = 1, ft--), x;
}
function z() {
  return x = F < $r ? T(Ne, F++) : 0, be++, x === 10 && (be = 1, ft++), x;
}
function se() {
  return T(Ne, F);
}
function Je() {
  return F;
}
function _t(e, t) {
  return Ee(Ne, e, t);
}
function Mt(e) {
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
function ai(e) {
  return ft = be = 1, $r = V(Ne = e), F = 0, [];
}
function si(e) {
  return Ne = "", e;
}
function bt(e) {
  return wr(_t(F - 1, Ht(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ci(e) {
  for (; (x = se()) && x < 33; )
    z();
  return Mt(e) > 2 || Mt(x) > 3 ? "" : " ";
}
function li(e, t) {
  for (; --t && z() && !(x < 48 || x > 102 || x > 57 && x < 65 || x > 70 && x < 97); )
    ;
  return _t(e, Je() + (t < 6 && se() == 32 && z() == 32));
}
function Ht(e) {
  for (; z(); )
    switch (x) {
      case e:
        return F;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ht(x);
        break;
      case 40:
        e === 41 && Ht(e);
        break;
      case 92:
        z();
        break;
    }
  return F;
}
function ui(e, t) {
  for (; z() && e + x !== 47 + 10; )
    if (e + x === 42 + 42 && se() === 47)
      break;
  return "/*" + _t(t, F - 1) + "*" + sn(e === 47 ? e : z());
}
function di(e) {
  for (; !Mt(se()); )
    z();
  return _t(e, F);
}
function fi(e) {
  return si(Qe("", null, null, null, [""], e = ai(e), 0, [0], e));
}
function Qe(e, t, n, r, o, i, a, c, l) {
  for (var d = 0, f = 0, s = a, _ = 0, p = 0, u = 0, m = 1, A = 1, C = 1, E = 0, w = "", S = o, $ = i, y = r, v = w; A; )
    switch (u = E, E = z()) {
      case 40:
        if (u != 108 && T(v, s - 1) == 58) {
          Ke(v += b(bt(E), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        v += bt(E);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        v += ci(u);
        break;
      case 92:
        v += li(Je() - 1, 7);
        continue;
      case 47:
        switch (se()) {
          case 42:
          case 47:
            xe(hi(ui(z(), Je()), t, n, l), l);
            break;
          default:
            v += "/";
        }
        break;
      case 123 * m:
        c[d++] = V(v) * C;
      case 125 * m:
      case 59:
      case 0:
        switch (E) {
          case 0:
          case 125:
            A = 0;
          case 59 + f:
            C == -1 && (v = b(v, /\f/g, "")), p > 0 && V(v) - s && xe(p > 32 ? Pn(v + ";", r, n, s - 1, l) : Pn(b(v, " ", "") + ";", r, n, s - 2, l), l);
            break;
          case 59:
            v += ";";
          default:
            if (xe(y = Dn(v, t, n, d, f, o, c, w, S = [], $ = [], s, i), i), E === 123)
              if (f === 0)
                Qe(v, t, y, y, S, i, s, c, $);
              else
                switch (_ === 99 && T(v, 3) === 110 ? 100 : _) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Qe(e, y, y, r && xe(Dn(e, y, y, 0, 0, o, c, w, o, S = [], s, $), $), o, $, s, c, r ? S : $);
                    break;
                  default:
                    Qe(v, y, y, y, [""], $, 0, c, $);
                }
        }
        d = f = p = 0, m = C = 1, w = v = "", s = a;
        break;
      case 58:
        s = 1 + V(v), p = u;
      default:
        if (m < 1) {
          if (E == 123)
            --m;
          else if (E == 125 && m++ == 0 && ii() == 125)
            continue;
        }
        switch (v += sn(E), E * m) {
          case 38:
            C = f > 0 ? 1 : (v += "\f", -1);
            break;
          case 44:
            c[d++] = (V(v) - 1) * C, C = 1;
            break;
          case 64:
            se() === 45 && (v += bt(z())), _ = se(), f = s = V(w = v += di(Je())), E++;
            break;
          case 45:
            u === 45 && V(v) == 2 && (m = 0);
        }
    }
  return i;
}
function Dn(e, t, n, r, o, i, a, c, l, d, f, s) {
  for (var _ = o - 1, p = o === 0 ? i : [""], u = Sr(p), m = 0, A = 0, C = 0; m < r; ++m)
    for (var E = 0, w = Ee(e, _ + 1, _ = ti(A = a[m])), S = e; E < u; ++E)
      (S = wr(A > 0 ? p[E] + " " + w : b(w, /&\f/g, p[E]))) && (l[C++] = S);
  return ht(e, t, n, o === 0 ? dt : c, l, d, f, s);
}
function hi(e, t, n, r) {
  return ht(e, t, n, Er, sn(oi()), Ee(e, 2, -2), 0, r);
}
function Pn(e, t, n, r, o) {
  return ht(e, t, n, an, Ee(e, 0, r), Ee(e, r + 1, -1), r, o);
}
function Nr(e, t, n) {
  switch (ni(e, t)) {
    case 5103:
      return N + "print-" + e + e;
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
      return N + e + e;
    case 4789:
      return De + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return N + e + De + e + k + e + e;
    case 5936:
      switch (T(e, t + 11)) {
        case 114:
          return N + e + k + b(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return N + e + k + b(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return N + e + k + b(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return N + e + k + e + e;
    case 6165:
      return N + e + k + "flex-" + e + e;
    case 5187:
      return N + e + b(e, /(\w+).+(:[^]+)/, N + "box-$1$2" + k + "flex-$1$2") + e;
    case 5443:
      return N + e + k + "flex-item-" + b(e, /flex-|-self/g, "") + (G(e, /flex-|baseline/) ? "" : k + "grid-row-" + b(e, /flex-|-self/g, "")) + e;
    case 4675:
      return N + e + k + "flex-line-pack" + b(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return N + e + k + b(e, "shrink", "negative") + e;
    case 5292:
      return N + e + k + b(e, "basis", "preferred-size") + e;
    case 6060:
      return N + "box-" + b(e, "-grow", "") + N + e + k + b(e, "grow", "positive") + e;
    case 4554:
      return N + b(e, /([^-])(transform)/g, "$1" + N + "$2") + e;
    case 6187:
      return b(b(b(e, /(zoom-|grab)/, N + "$1"), /(image-set)/, N + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return b(e, /(image-set\([^]*)/, N + "$1$`$1");
    case 4968:
      return b(b(e, /(.+:)(flex-)?(.*)/, N + "box-pack:$3" + k + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + N + e + e;
    case 4200:
      if (!G(e, /flex-|baseline/))
        return k + "grid-column-align" + Ee(e, t) + e;
      break;
    case 2592:
    case 3360:
      return k + b(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, G(r.props, /grid-\w+-end/);
      }) ? ~Ke(e + (n = n[t].value), "span") ? e : k + b(e, "-start", "") + e + k + "grid-row-span:" + (~Ke(n, "span") ? G(n, /\d+/) : +G(n, /\d+/) - +G(e, /\d+/)) + ";" : k + b(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return G(r.props, /grid-\w+-start/);
      }) ? e : k + b(b(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return b(e, /(.+)-inline(.+)/, N + "$1$2") + e;
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
        switch (T(e, t + 1)) {
          case 109:
            if (T(e, t + 4) !== 45)
              break;
          case 102:
            return b(e, /(.+:)(.+)-([^]+)/, "$1" + N + "$2-$3$1" + De + (T(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Ke(e, "stretch") ? Nr(b(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return b(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, a, c, l, d) {
        return k + o + ":" + i + d + (a ? k + o + "-span:" + (c ? l : +l - +i) + d : "") + e;
      });
    case 4949:
      if (T(e, t + 6) === 121)
        return b(e, ":", ":" + N) + e;
      break;
    case 6444:
      switch (T(e, T(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return b(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + N + (T(e, 14) === 45 ? "inline-" : "") + "box$3$1" + N + "$2$3$1" + k + "$2box$3") + e;
        case 100:
          return b(e, ":", ":" + k) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return b(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function ot(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function _i(e, t, n, r) {
  switch (e.type) {
    case ei:
      if (e.children.length)
        break;
    case Qo:
    case an:
      return e.return = e.return || e.value;
    case Er:
      return "";
    case br:
      return e.return = e.value + "{" + ot(e.children, r) + "}";
    case dt:
      if (!V(e.value = e.props.join(",")))
        return "";
  }
  return V(n = ot(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function pi(e) {
  var t = Sr(e);
  return function(n, r, o, i) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](n, r, o, i) || "";
    return a;
  };
}
function mi(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function gi(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case an:
        e.return = Nr(e.value, e.length, n);
        return;
      case br:
        return ot([J(e, { value: b(e.value, "@", "@" + N) })], r);
      case dt:
        if (e.length)
          return ri(n = e.props, function(o) {
            switch (G(o, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                me(J(e, { props: [b(o, /:(read-\w+)/, ":" + De + "$1")] })), me(J(e, { props: [o] })), Lt(e, { props: Rn(n, r) });
                break;
              case "::placeholder":
                me(J(e, { props: [b(o, /:(plac\w+)/, ":" + N + "input-$1")] })), me(J(e, { props: [b(o, /:(plac\w+)/, ":" + De + "$1")] })), me(J(e, { props: [b(o, /:(plac\w+)/, k + "input-$1")] })), me(J(e, { props: [o] })), Lt(e, { props: Rn(n, r) });
                break;
            }
            return "";
          });
    }
}
var yi = {
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
}, fe = typeof process < "u" && {} !== void 0 && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR) || "data-styled", cn = typeof window < "u" && "HTMLElement" in window, vi = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && {} !== void 0 && {}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && {}.REACT_APP_SC_DISABLE_SPEEDY !== "" ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" && {}.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && {} !== void 0 && {}.SC_DISABLE_SPEEDY !== void 0 && {}.SC_DISABLE_SPEEDY !== "" ? {}.SC_DISABLE_SPEEDY !== "false" && {}.SC_DISABLE_SPEEDY : {}.NODE_ENV !== "production"), Ln = /invalid hook call/i, je = /* @__PURE__ */ new Set(), Ci = function(e, t) {
  if ({}.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(a) {
        for (var c = [], l = 1; l < arguments.length; l++)
          c[l - 1] = arguments[l];
        Ln.test(a) ? (i = !1, je.delete(r)) : o.apply(void 0, le([a], c, !1));
      }, lt(), i && !je.has(r) && (console.warn(r), je.add(r));
    } catch (a) {
      Ln.test(a.message) && je.delete(r);
    } finally {
      console.error = o;
    }
  }
}, pt = Object.freeze([]), we = Object.freeze({});
function Ei(e, t, n) {
  return n === void 0 && (n = we), e.theme !== n.theme && e.theme || t || n.theme;
}
var kr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), bi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, wi = /(^-|-$)/g;
function Mn(e) {
  return e.replace(bi, "-").replace(wi, "");
}
var Si = /(a)(d)/gi, Hn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ft(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    n = Hn(t % 52) + n;
  return (Hn(t % 52) + n).replace(Si, "$1-$2");
}
var wt, ie = function(e, t) {
  for (var n = t.length; n; )
    e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Ir = function(e) {
  return ie(5381, e);
};
function Or(e) {
  return Ft(Ir(e) >>> 0);
}
function Ar(e) {
  return {}.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function St(e) {
  return typeof e == "string" && ({}.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var xr = typeof Symbol == "function" && Symbol.for, Tr = xr ? Symbol.for("react.memo") : 60115, $i = xr ? Symbol.for("react.forward_ref") : 60112, Ni = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, ki = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Rr = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Ii = ((wt = {})[$i] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, wt[Tr] = Rr, wt);
function Fn(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Tr ? Rr : "$$typeof" in e ? Ii[e.$$typeof] : Ni;
  var t;
}
var Oi = Object.defineProperty, Ai = Object.getOwnPropertyNames, Bn = Object.getOwnPropertySymbols, xi = Object.getOwnPropertyDescriptor, Ti = Object.getPrototypeOf, Un = Object.prototype;
function Dr(e, t, n) {
  if (typeof t != "string") {
    if (Un) {
      var r = Ti(t);
      r && r !== Un && Dr(e, r, n);
    }
    var o = Ai(t);
    Bn && (o = o.concat(Bn(t)));
    for (var i = Fn(e), a = Fn(t), c = 0; c < o.length; ++c) {
      var l = o[c];
      if (!(l in ki || n && n[l] || a && l in a || i && l in i)) {
        var d = xi(t, l);
        try {
          Oi(e, l, d);
        } catch {
        }
      }
    }
  }
  return e;
}
function he(e) {
  return typeof e == "function";
}
function ln(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function ae(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Bt(e, t) {
  if (e.length === 0)
    return "";
  for (var n = e[0], r = 1; r < e.length; r++)
    n += t ? t + e[r] : e[r];
  return n;
}
function Se(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Ut(e, t, n) {
  if (n === void 0 && (n = !1), !n && !Se(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++)
      e[r] = Ut(e[r], t[r]);
  else if (Se(t))
    for (var r in t)
      e[r] = Ut(e[r], t[r]);
  return e;
}
function un(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Ri = {}.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Di() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1)
    r.push(e[o]);
  return r.forEach(function(a) {
    n = n.replace(/%[a-z]/, a);
  }), n;
}
function j(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return {}.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Di.apply(void 0, le([Ri[e]], t, !1)).trim());
}
var Pi = function() {
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
          throw j(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(r), this.length = i;
      for (var a = o; a < i; a++)
        this.groupSizes[a] = 0;
    }
    for (var c = this.indexOfGroup(t + 1), l = (a = 0, n.length); a < l; a++)
      this.tag.insertRule(c, n[a]) && (this.groupSizes[t]++, c++);
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
}(), et = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), $t = 1, Ge = function(e) {
  if (et.has(e))
    return et.get(e);
  for (; it.has($t); )
    $t++;
  var t = $t++;
  if ({}.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1073741824))
    throw j(16, "".concat(t));
  return et.set(e, t), it.set(t, e), t;
}, Li = function(e, t) {
  et.set(e, t), it.set(t, e);
}, Mi = "style[".concat(fe, "][").concat("data-styled-version", '="').concat("6.0.3", '"]'), Hi = new RegExp("^".concat(fe, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Fi = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++)
    (r = o[i]) && e.registerName(t, r);
}, Bi = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(`/*!sc*/
`), o = [], i = 0, a = r.length; i < a; i++) {
    var c = r[i].trim();
    if (c) {
      var l = c.match(Hi);
      if (l) {
        var d = 0 | parseInt(l[1], 10), f = l[2];
        d !== 0 && (Li(f, d), Fi(e, f, l[3]), e.getTag().insertRules(d, o)), o.length = 0;
      } else
        o.push(c);
    }
  }
};
function Ui() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Pr = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(c) {
    var l = Array.from(c.querySelectorAll("style[".concat(fe, "]")));
    return l[l.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(fe, "active"), r.setAttribute("data-styled-version", "6.0.3");
  var a = Ui();
  return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
}, zi = function() {
  function e(t) {
    this.element = Pr(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet)
        return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var a = r[o];
        if (a.ownerNode === n)
          return a;
      }
      throw j(17);
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
}(), Wi = function() {
  function e(t) {
    this.element = Pr(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), Vi = function() {
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
}(), zn = cn, ji = { isServer: !cn, useCSSOMInjection: !vi }, Lr = function() {
  function e(t, n, r) {
    t === void 0 && (t = we), n === void 0 && (n = {});
    var o = this;
    this.options = R(R({}, ji), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && cn && zn && (zn = !1, function(i) {
      for (var a = document.querySelectorAll(Mi), c = 0, l = a.length; c < l; c++) {
        var d = a[c];
        d && d.getAttribute(fe) !== "active" && (Bi(i, d), d.parentNode && d.parentNode.removeChild(d));
      }
    }(this)), un(this, function() {
      return function(i) {
        for (var a = i.getTag(), c = a.length, l = "", d = function(s) {
          var _ = function(C) {
            return it.get(C);
          }(s);
          if (_ === void 0)
            return "continue";
          var p = i.names.get(_), u = a.getGroup(s);
          if (p === void 0 || u.length === 0)
            return "continue";
          var m = "".concat(fe, ".g").concat(s, '[id="').concat(_, '"]'), A = "";
          p !== void 0 && p.forEach(function(C) {
            C.length > 0 && (A += "".concat(C, ","));
          }), l += "".concat(u).concat(m, '{content:"').concat(A, '"}').concat(`/*!sc*/
`);
        }, f = 0; f < c; f++)
          d(f);
        return l;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return Ge(t);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(R(R({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new Vi(o) : r ? new zi(o) : new Wi(o);
    }(this.options), new Pi(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (Ge(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(Ge(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Ge(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), Gi = /&/g, Yi = /^\s*\/\/.*$/gm;
function Mr(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = Mr(n.children, t)), n;
  });
}
function Zi(e) {
  var t, n, r, o = e === void 0 ? we : e, i = o.options, a = i === void 0 ? we : i, c = o.plugins, l = c === void 0 ? pt : c, d = function(_, p, u) {
    return u === n || u.startsWith(n) && u.endsWith(n) && u.replaceAll(n, "").length > 0 ? ".".concat(t) : _;
  }, f = l.slice();
  f.push(function(_) {
    _.type === dt && _.value.includes("&") && (_.props[0] = _.props[0].replace(Gi, n).replace(r, d));
  }), a.prefix && f.push(gi), f.push(_i);
  var s = function(_, p, u, m) {
    p === void 0 && (p = ""), u === void 0 && (u = ""), m === void 0 && (m = "&"), t = m, n = p, r = new RegExp("\\".concat(n, "\\b"), "g");
    var A = _.replace(Yi, ""), C = fi(u || p ? "".concat(u, " ").concat(p, " { ").concat(A, " }") : A);
    a.namespace && (C = Mr(C, a.namespace));
    var E = [];
    return ot(C, pi(f.concat(mi(function(w) {
      return E.push(w);
    })))), E;
  };
  return s.hash = l.length ? l.reduce(function(_, p) {
    return p.name || j(15), ie(_, p.name);
  }, 5381).toString() : "", s;
}
var qi = new Lr(), zt = Zi(), Hr = de.createContext({ shouldForwardProp: void 0, styleSheet: qi, stylis: zt });
Hr.Consumer;
de.createContext(void 0);
function Wn() {
  return nn(Hr);
}
var Wt = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = zt);
      var a = r.name + i.hash;
      o.hasNameForId(r.id, a) || o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, un(this, function() {
      throw j(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = zt), this.name + t.hash;
  }, e;
}(), Xi = function(e) {
  return e >= "A" && e <= "Z";
};
function Vn(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-")
      return e;
    Xi(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Fr = function(e) {
  return e == null || e === !1 || e === "";
}, Br = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !Fr(i) && (Array.isArray(i) && i.isCss || he(i) ? r.push("".concat(Vn(o), ":"), i, ";") : Se(i) ? r.push.apply(r, le(le(["".concat(o, " {")], Br(i), !1), ["}"], !1)) : r.push("".concat(Vn(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in yi || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function ce(e, t, n, r) {
  if (Fr(e))
    return [];
  if (ln(e))
    return [".".concat(e.styledComponentId)];
  if (he(e)) {
    if (!he(i = e) || i.prototype && i.prototype.isReactComponent || !t)
      return [e];
    var o = e(t);
    return {}.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Wt || Se(o) || o === null || console.error("".concat(Ar(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), ce(o, t, n, r);
  }
  var i;
  return e instanceof Wt ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Se(e) ? Br(e) : Array.isArray(e) ? Array.prototype.concat.apply(pt, e.map(function(a) {
    return ce(a, t, n, r);
  })) : [e.toString()];
}
function Ki(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (he(n) && !ln(n))
      return !1;
  }
  return !0;
}
var Ji = Ir("6.0.3"), Qi = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = {}.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Ki(t), this.componentId = n, this.baseHash = ie(Ji, n), this.baseStyle = r, Lr.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash)
      if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId))
        o = ae(o, this.staticRulesId);
      else {
        var i = Bt(ce(this.rules, t, n, r)), a = Ft(ie(this.baseHash, i) >>> 0);
        if (!n.hasNameForId(this.componentId, a)) {
          var c = r(i, ".".concat(a), void 0, this.componentId);
          n.insertRules(this.componentId, a, c);
        }
        o = ae(o, a), this.staticRulesId = a;
      }
    else {
      for (var l = ie(this.baseHash, r.hash), d = "", f = 0; f < this.rules.length; f++) {
        var s = this.rules[f];
        if (typeof s == "string")
          d += s, {}.NODE_ENV !== "production" && (l = ie(l, s));
        else if (s) {
          var _ = Bt(ce(s, t, n, r));
          l = ie(l, _), d += _;
        }
      }
      if (d) {
        var p = Ft(l >>> 0);
        n.hasNameForId(this.componentId, p) || n.insertRules(this.componentId, p, r(d, ".".concat(p), void 0, this.componentId)), o = ae(o, p);
      }
    }
    return o;
  }, e;
}(), Me = de.createContext(void 0);
Me.Consumer;
function ea() {
  var e = nn(Me);
  if (!e)
    throw j(18);
  return e;
}
function ta(e) {
  var t = de.useContext(Me), n = ut(function() {
    return function(r, o) {
      if (!r)
        throw j(14);
      if (he(r)) {
        var i = r(o);
        if ({}.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object"))
          throw j(7);
        return i;
      }
      if (Array.isArray(r) || typeof r != "object")
        throw j(8);
      return o ? R(R({}, o), r) : r;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? de.createElement(Me.Provider, { value: n }, e.children) : null;
}
var Nt = {}, jn = /* @__PURE__ */ new Set();
function na(e, t, n) {
  var r = ln(e), o = e, i = !St(e), a = t.attrs, c = a === void 0 ? pt : a, l = t.componentId, d = l === void 0 ? function(S, $) {
    var y = typeof S != "string" ? "sc" : Mn(S);
    Nt[y] = (Nt[y] || 0) + 1;
    var v = "".concat(y, "-").concat(Or("6.0.3" + y + Nt[y]));
    return $ ? "".concat($, "-").concat(v) : v;
  }(t.displayName, t.parentComponentId) : l, f = t.displayName, s = f === void 0 ? function(S) {
    return St(S) ? "styled.".concat(S) : "Styled(".concat(Ar(S), ")");
  }(e) : f, _ = t.displayName && t.componentId ? "".concat(Mn(t.displayName), "-").concat(t.componentId) : t.componentId || d, p = r && o.attrs ? o.attrs.concat(c).filter(Boolean) : c, u = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var m = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var A = t.shouldForwardProp;
      u = function(S, $) {
        return m(S, $) && A(S, $);
      };
    } else
      u = m;
  }
  var C = new Qi(n, _, r ? o.componentStyle : void 0);
  function E(S, $) {
    return function(y, v, D) {
      var O = y.attrs, _e = y.componentStyle, Yr = y.defaultProps, Zr = y.foldedComponentIds, fn = y.styledComponentId, qr = y.target, Xr = de.useContext(Me), Kr = Wn(), mt = y.shouldForwardProp || Kr.shouldForwardProp;
      ({}).NODE_ENV !== "production" && Tt(fn);
      var X = function(Ue, Oe, ze) {
        for (var pe, re = R(R({}, Oe), { className: void 0, theme: ze }), vt = 0; vt < Ue.length; vt += 1) {
          var We = he(pe = Ue[vt]) ? pe(re) : pe;
          for (var K in We)
            re[K] = K === "className" ? ae(re[K], We[K]) : K === "style" ? R(R({}, re[K]), We[K]) : We[K];
        }
        return Oe.className && (re.className = ae(re.className, Oe.className)), re;
      }(O, v, Ei(v, Xr, Yr) || we), Be = X.as || qr, Ie = {};
      for (var M in X)
        X[M] === void 0 || M[0] === "$" || M === "as" || M === "theme" || (M === "forwardedAs" ? Ie.as = X.forwardedAs : mt && !mt(M, Be) || (Ie[M] = X[M], mt || {}.NODE_ENV !== "development" || mo(M) || jn.has(M) || (jn.add(M), console.warn('styled-components: it looks like an unknown prop "'.concat(M, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var gt = function(Ue, Oe) {
        var ze = Wn(), pe = Ue.generateAndInjectStyles(Oe, ze.styleSheet, ze.stylis);
        return {}.NODE_ENV !== "production" && Tt(pe), pe;
      }(_e, X);
      ({}).NODE_ENV !== "production" && y.warnTooManyClasses && y.warnTooManyClasses(gt);
      var yt = ae(Zr, fn);
      return gt && (yt += " " + gt), X.className && (yt += " " + X.className), Ie[St(Be) && !kr.has(Be) ? "class" : "className"] = yt, Ie.ref = D, P(Be, Ie);
    }(w, S, $);
  }
  ({}).NODE_ENV !== "production" && (E.displayName = s);
  var w = de.forwardRef(E);
  return w.attrs = p, w.componentStyle = C, w.shouldForwardProp = u, {}.NODE_ENV !== "production" && (w.displayName = s), w.foldedComponentIds = r ? ae(o.foldedComponentIds, o.styledComponentId) : "", w.styledComponentId = _, w.target = r ? o.target : e, Object.defineProperty(w, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(S) {
    this._foldedDefaultProps = r ? function($) {
      for (var y = [], v = 1; v < arguments.length; v++)
        y[v - 1] = arguments[v];
      for (var D = 0, O = y; D < O.length; D++)
        Ut($, O[D], !0);
      return $;
    }({}, o.defaultProps, S) : S;
  } }), {}.NODE_ENV !== "production" && (Ci(s, _), w.warnTooManyClasses = function(S, $) {
    var y = {}, v = !1;
    return function(D) {
      if (!v && (y[D] = !0, Object.keys(y).length >= 200)) {
        var O = $ ? ' with the id of "'.concat($, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(S).concat(O, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), v = !0, y = {};
      }
    };
  }(s, _)), un(w, function() {
    return ".".concat(w.styledComponentId);
  }), i && Dr(w, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), w;
}
function Gn(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var Yn = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function ne(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  if (he(e) || Se(e)) {
    var r = e;
    return Yn(ce(Gn(pt, le([r], t, !0))));
  }
  var o = e;
  return t.length === 0 && o.length === 1 && typeof o[0] == "string" ? ce(o) : Yn(ce(Gn(o, t)));
}
function Vt(e, t, n) {
  if (n === void 0 && (n = we), !t)
    throw j(1, t);
  var r = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++)
      i[a - 1] = arguments[a];
    return e(t, n, ne.apply(void 0, le([o], i, !1)));
  };
  return r.attrs = function(o) {
    return Vt(e, t, R(R({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Vt(e, t, R(R({}, n), o));
  }, r;
}
var Ur = function(e) {
  return Vt(na, e);
}, L = Ur;
kr.forEach(function(e) {
  L[e] = Ur(e);
});
function ke(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  ({}).NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = Bt(ne.apply(void 0, le([e], t, !1))), o = Or(r);
  return new Wt(o, r);
}
({}).NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Ye = "__sc-".concat(fe, "__");
({}).NODE_ENV !== "production" && {}.NODE_ENV !== "test" && typeof window < "u" && (window[Ye] || (window[Ye] = 0), window[Ye] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Ye] += 1);
var ra = 0;
function h(e, t, n, r, o, i) {
  var a, c, l = {};
  for (c in t)
    c == "ref" ? a = t[c] : l[c] = t[c];
  var d = { type: e, props: l, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --ra, __source: o, __self: i };
  if (typeof e == "function" && (a = e.defaultProps))
    for (c in a)
      l[c] === void 0 && (l[c] = a[c]);
  return g.vnode && g.vnode(d), d;
}
const zr = ({
  svgSize: e
}) => h("svg", {
  fill: "none",
  height: e,
  viewBox: "0 0 16 14",
  width: e,
  xmlns: "http://www.w3.org/2000/svg",
  children: h("path", {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })
}), oa = 2, kt = 14, Zn = 5, qn = 0.027;
var Y = /* @__PURE__ */ ((e) => (e[e.S = 300] = "S", e[e.M = 400] = "M", e[e.L = 500] = "L", e[e.Default = 600] = "Default", e))(Y || {});
const Te = {
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
}, Xn = {
  loading: {
    text: "Loading. Please wait.",
    visible: !0
  },
  done: {
    text: "Waiting for input...",
    visible: !0
  }
}, ia = {
  [B.CANDIDATE_SELECTION]: "Stay still…",
  [B.FACE_TOO_CLOSE]: "Move back",
  [B.FACE_TOO_FAR]: "Move closer",
  [B.FACE_CENTERING]: "Center your face",
  [B.FACE_NOT_PRESENT]: "Position your face into the circle",
  [B.SHARPNESS_TOO_LOW]: "Turn face against light",
  [B.BRIGHTNESS_TOO_LOW]: "Turn face against light",
  [B.BRIGHTNESS_TOO_HIGH]: "Less light needed",
  [B.DEVICE_PITCHED]: "Hold your phone at eye level"
}, aa = {
  ...ia,
  [Pe.FIT_YOUR_EYE]: "Fit your eye into square",
  [Pe.DEVICE_PITCHED]: "Hold your phone at eye level"
}, sa = "rgba(19, 19, 19, 0.5)", ca = 34, Wr = (e) => e ? e.width < e.height ? Math.max(kt, Zn + e.width * qn) : Math.max(kt, Zn + e.height * qn) : kt, la = (e) => e > Y.Default ? Te[Y.Default] : e > Y.L ? Te[Y.L] : e > Y.M ? Te[Y.M] : Te[Y.S], ua = (e) => e ? la(e.width) : Te[Y.Default], da = L.div`
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
`, fa = L.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, ha = L.p`
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
`, jt = ({
  fontSize: e,
  Icon: t,
  isCameraReady: n,
  position: r = "absolute",
  text: o
}) => h(da, {
  $isCameraReady: n,
  $position: r,
  children: h(fa, {
    children: [t ? h(t, {
      svgSize: e * 2
    }) : null, h(ha, {
      $fontSize: e,
      children: o
    })]
  })
}), Vr = ({
  fontSize: e,
  text: t = "An unknown error has occurred"
}) => h(jt, {
  fontSize: e,
  Icon: zr,
  position: "relative",
  text: t
});
class _a extends U {
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
    return this.state.hasError ? h(Vr, {
      fontSize: Wr(this.props.videoElementSize),
      Icon: zr,
      isCameraReady: !1
    }) : this.props.children;
  }
}
const pa = ({
  children: e,
  theme: t,
  videoElementSize: n
}) => h(ta, {
  theme: t,
  children: h(_a, {
    videoElementSize: n,
    children: e
  })
}), He = (e, t) => {
  const n = lt(t);
  ue(() => {
    n.current = t;
  }, [t]), ue(
    () => {
      const r = (o) => n.current(o);
      return document.addEventListener(e, r), () => {
        document.removeEventListener(e, r);
      };
    },
    [e]
    // Re-run if eventName
  );
}, ma = (e) => {
  const [t, n] = H(), r = Ce((o) => {
    var i;
    n((i = o.detail) == null ? void 0 : i.size);
  }, [n]);
  return He(e, r), t;
}, ga = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, It = {
  colors: ga
}, ya = (e) => e != null && e.theme ? {
  ...It,
  ...e.theme,
  colors: {
    ...It.colors,
    ...e.theme.colors
  }
} : It, va = 0.75, Ca = 2, dn = (e, t) => {
  document.dispatchEvent(new CustomEvent(e, {
    detail: t
  }));
}, at = class at {
  constructor() {
    Ve(this, "lastDetails", {});
    Ve(this, "delayedTime", 0);
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
    this.isDetailChanged(t, n) && dn(t, n);
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
Ve(at, "_instance");
let Gt = at;
Gt.getInstance();
const Kn = (e, t) => {
  dn(e, {
    instruction: t
  });
}, Ea = (e) => {
  dn(e, {
    animationEnd: !0
  });
}, ba = (e) => Number.parseFloat(e.toFixed(3)), jr = (e, t) => Math.min(e, t), wa = (e, t) => {
  const n = jr(t.width, t.height);
  return ba(e * n);
}, Sa = ({
  height: e,
  width: t
}) => {
  const n = jr(t, e) * va, r = (t - n) / 2, o = (e - n) / 2;
  return {
    shiftX: r,
    shiftY: o,
    width: n,
    height: n
  };
}, $a = (e) => {
  const {
    height: t,
    shiftX: n,
    shiftY: r,
    width: o
  } = Sa(e);
  return {
    shiftX: n / e.width,
    shiftY: r / e.height,
    width: o / e.width,
    height: t / e.height
  };
}, Na = (e, t) => wa(e, t) * Ca;
class ka {
  static async getVideoInputDeviceList() {
    return (await navigator.mediaDevices.enumerateDevices()).filter((n) => n.kind === "videoinput");
  }
}
const Ia = () => {
  const [e, t] = H(!1);
  return ue(() => {
    (async () => {
      (await ka.getVideoInputDeviceList()).length > 1 && t(!0);
    })();
  }, []), e;
}, Oa = ({
  size: e
}) => h("svg", {
  fill: "none",
  height: e,
  viewBox: "0 0 52 52",
  width: e,
  xmlns: "http://www.w3.org/2000/svg",
  children: [h("path", {
    d: "M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z",
    fill: "#131313",
    fillOpacity: "0.3"
  }), h("circle", {
    cx: "17.5",
    cy: "24.5",
    fill: "white",
    r: "1.5"
  }), h("path", {
    d: "M15 17H16C19.5 17 23 21 23 29C22.5 29 21.5 29 20 29C20 29 20.25 33 19.5 34.5C18.75 36 16 36 16 36H15",
    stroke: "white",
    strokeWidth: "2"
  }), h("circle", {
    fill: "white",
    r: "1.5",
    transform: "matrix(-1 0 0 1 34.5 24.5)"
  }), h("path", {
    d: "M37 17H36C32.5 17 29 21 29 29C29.5 29 30.5 29 32 29C32 29 31.75 33 32.5 34.5C33.25 36 36 36 36 36H37",
    stroke: "white",
    strokeWidth: "2"
  })]
}), Aa = ({
  size: e
}) => h("svg", {
  fill: "none",
  height: e,
  viewBox: "0 0 52 52",
  width: "52",
  xmlns: "http://www.w3.org/2000/svg",
  children: [h("circle", {
    cx: "26",
    cy: "26",
    fill: "#131313",
    fillOpacity: "0.3",
    r: "26"
  }), h("path", {
    d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
    fill: "white"
  })]
}), Gr = L.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(e) => e.$marginLeft ? `${e.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, xa = ({
  marginLeft: e,
  size: t,
  ...n
}) => h(Gr, {
  $marginLeft: e,
  ...n,
  children: h(Oa, {
    size: t
  })
}), Ta = ({
  marginLeft: e,
  size: t,
  ...n
}) => h(Gr, {
  $marginLeft: e,
  ...n,
  children: h(Aa, {
    size: t
  })
}), Ra = L.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.$padding}px`};
  z-index: 2;
`, Da = ({
  customControlEvent: e,
  isSwitchCameraDisabled: t,
  videoElementSize: n
}) => {
  const r = Ia(), {
    buttonPadding: o,
    iconSize: i,
    marginLeft: a
  } = ua(n), c = () => {
    Kn(e, xt.TOGGLE_MIRROR);
  };
  return h(Ra, {
    $padding: o,
    children: [r && h(Ta, {
      disabled: t,
      onClick: () => {
        Kn(e, xt.SWITCH_CAMERA);
      },
      size: i
    }), h(xa, {
      marginLeft: r ? a : 0,
      onClick: c,
      size: i
    })]
  });
}, Jn = 2.6, Yt = "1.5s", Zt = "1.5s", qt = "ease-in-out", Pa = 2500, La = "2.5s", Ma = "0.3s", Ha = "linear", Fa = ".5s", Ba = "3s", Ua = "ease-in-out", za = ".5s", Wa = ".5s", Va = "ease-out", ja = (e) => ke`
100% {
  transform: translateX(22%)  scale(${e});
}
`, Ga = (e) => ke`
100% {
  transform: translate(34%, 8%)  scale(${e * 0.98});
}
`, Ya = ke`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`, Za = ke`
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`, qa = ke`
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
`, Xa = ke`
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
`, Ka = L.div`
  position: absolute;
  left: 50%;

  ${(e) => e.$cssTop ? `top: ${e.$cssTop}%;` : ""}
  ${(e) => e.$cssBottom ? `bottom: ${e.$cssBottom}%;` : ""}
    ${(e) => e.$isAnimating && ne`
      animation: ${Ya} ${Ma}
        ${Ha} both;
      animation-delay: ${La};

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
`, Ja = L.div`
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
`, Qa = ({
  children: e,
  cssBottom: t,
  cssTop: n,
  fontSize: r,
  isAnimating: o,
  isInCandidateSelection: i,
  isPortrait: a
}) => h(Ka, {
  $cssBottom: t,
  $cssTop: n,
  $isAnimating: o,
  $isPortrait: a,
  children: h(Ja, {
    $fontSize: r,
    $isInCandidateSelection: i,
    $wrap: e.length > ca,
    children: e
  })
}), es = L.canvas`
  transform: ${(e) => e.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, ts = (e) => {
  const t = e.getContext("2d");
  t && t.clearRect(0, 0, t.canvas.width, t.canvas.height);
}, ns = ({
  cameraResolution: e,
  isImageMirror: t
}) => {
  const n = lt(null), r = ea(), [o, i] = H(), a = Ce((c) => {
    var l;
    i((l = c == null ? void 0 : c.detail) == null ? void 0 : l.detectedObject);
  }, [i]);
  return He(ye.DETECTED_FACE_CHANGED, a), ue(() => {
    if (!n.current)
      return;
    const c = (l, d) => {
      var u;
      if (!d)
        return;
      const {
        faceCenter: f,
        faceSize: s
      } = d, _ = (u = n == null ? void 0 : n.current) == null ? void 0 : u.getContext("2d");
      if (!_)
        return;
      const p = Na(s, l);
      _.beginPath(), _.arc(f.x, f.y, p, 0, 2 * Math.PI, !1), _.lineWidth = oa, _.strokeStyle = r.colors.placeholderColor, _.stroke();
    };
    n.current.width = e.width, n.current.height = e.height, ts(n.current), c(e, o);
  }, [e, o, r.colors.placeholderColor]), h(es, {
    ref: n,
    $isImageMirror: t
  });
}, rs = () => {
  const [e, t] = H(), [n, r] = H(!1), o = Ce((l) => {
    var f, s;
    t((f = l == null ? void 0 : l.detail) == null ? void 0 : f.cameraResolution);
    const d = (s = l == null ? void 0 : l.detail) == null ? void 0 : s.isMirroring;
    d !== void 0 && r(d);
  }, [t]);
  He(ye.CAMERA_PROPS_CHANGED, o);
  const [i, a] = H(
    B.FACE_NOT_PRESENT
    // FIXME Default instruction should not be here
  ), c = Ce((l) => {
    var d;
    a((d = l == null ? void 0 : l.detail) == null ? void 0 : d.instructionCode);
  }, [a]);
  return He(ye.INSTRUCTION_CHANGED, c), {
    cameraResolution: e,
    instructionCode: i,
    isMirroring: n
  };
}, os = (e, t) => {
  const [n, r] = H(!1);
  return ue(() => {
    if (t === Le.CLOSEUP) {
      r(!0);
      const o = setTimeout(() => {
        r(!1);
      }, Pa);
      return () => clearTimeout(o);
    }
  }, [t]), e && n ? e === Pe.CANDIDATE_SELECTION ? e : Pe.FIT_YOUR_EYE : e;
}, is = () => {
  const [e, t] = H(Le.DISTANT), [n, r] = H(Q.LOADING), [o, i] = H(), a = Ce((c) => {
    const {
      error: l,
      phase: d,
      state: f
    } = c.detail || {};
    d && t(d), f && r(f), l && i(l);
  }, [t, r, i]);
  return He(tn.STATUS_CHANGED, a), {
    magnifEyePhase: e,
    magnifEyeState: n,
    magnifEyeError: o
  };
}, as = L.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, ss = ({
  svgSize: e
}) => h(as, {
  children: h("svg", {
    fill: "none",
    height: e,
    viewBox: "0 0 48 48",
    width: e,
    xmlns: "http://www.w3.org/2000/svg",
    children: [h("path", {
      d: "M30.9229 9.75026C30.9229 12.3736 28.7533 14.5002 26.0767 14.5002C23.4003 14.5002 21.2307 12.3736 21.2307 9.75026C21.2307 7.12664 23.4003 5 26.0767 5C28.7533 5 30.9229 7.12664 30.9229 9.75026Z",
      fill: "currentColor"
    }), h("path", {
      d: "M40.6155 15.8556C40.6155 18.1044 38.7559 19.9273 36.4618 19.9273C34.1675 19.9273 32.3079 18.1044 32.3079 15.8556C32.3079 13.607 34.1675 11.7842 36.4618 11.7842C38.7559 11.7842 40.6155 13.607 40.6155 15.8556Z",
      fill: "currentColor"
    }), h("path", {
      d: "M42 27.3921C42 29.2659 40.4502 30.785 38.5386 30.785C36.6267 30.785 35.0769 29.2659 35.0769 27.3921C35.0769 25.5181 36.6267 23.999 38.5386 23.999C40.4502 23.999 42 25.5181 42 27.3921Z",
      fill: "currentColor"
    }), h("path", {
      d: "M35.0766 37.5712C35.0766 39.0704 33.837 40.2858 32.3075 40.2858C30.7779 40.2858 29.5383 39.0704 29.5383 37.5712C29.5383 36.0723 30.7779 34.8569 32.3075 34.8569C33.837 34.8569 35.0766 36.0723 35.0766 37.5712Z",
      fill: "currentColor"
    }), h("path", {
      d: "M22.6154 40.2858C22.6154 41.7848 21.3756 43.0001 19.846 43.0001C18.3168 43.0001 17.0769 41.7848 17.0769 40.2858C17.0769 38.7866 18.3168 37.5713 19.846 37.5713C21.3756 37.5713 22.6154 38.7866 22.6154 40.2858Z",
      fill: "currentColor"
    }), h("path", {
      d: "M11.5382 32.8216C11.5382 33.9457 10.6085 34.8573 9.46137 34.8573C8.31426 34.8573 7.38452 33.9457 7.38452 32.8216C7.38452 31.6972 8.31426 30.7856 9.46137 30.7856C10.6085 30.7856 11.5382 31.6972 11.5382 32.8216Z",
      fill: "currentColor"
    }), h("path", {
      d: "M8.76913 21.2849C8.76913 22.0345 8.14932 22.642 7.38456 22.642C6.6198 22.642 6 22.0345 6 21.2849C6 20.5353 6.61981 19.9277 7.38456 19.9277C8.14933 19.9277 8.76913 20.5353 8.76913 21.2849Z",
      fill: "currentColor"
    }), h("path", {
      d: "M15.6927 11.7844C15.6927 12.534 15.0729 13.1415 14.3081 13.1415C13.5434 13.1415 12.9236 12.534 12.9236 11.7844C12.9236 11.0348 13.5434 10.4272 14.3081 10.4272C15.0729 10.4272 15.6927 11.0348 15.6927 11.7844Z",
      fill: "currentColor"
    })]
  })
}), cs = L.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`, ls = ({
  backdropColor: e,
  children: t
}) => h(cs, {
  children: h("svg", {
    height: "100%",
    width: "100%",
    children: [h("defs", {
      children: h("mask", {
        id: "mask",
        children: [h("rect", {
          fill: "#fff",
          height: "100%",
          width: "100%"
        }), t]
      })
    }), h("rect", {
      fill: e,
      height: "100%",
      mask: "url(#mask)",
      width: "100%"
    })]
  })
}), us = ({
  backdropColor: e,
  fontSize: t,
  magnifEyeState: n,
  magnifEyeStateInstructions: r
}) => {
  const o = n === Q.ERROR || n === Q.RUNNING;
  return !n || o || !r[n].visible ? null : n === Q.DONE ? h(W, {
    children: [h(ls, {
      backdropColor: e
    }), h(jt, {
      fontSize: t,
      isCameraReady: !0,
      text: r[n].text
    })]
  }) : h(W, {
    children: h(jt, {
      fontSize: t,
      Icon: ss,
      isCameraReady: !0,
      text: r[n].text
    })
  });
}, ds = L.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${(e) => e.$isInCandidateSelection ? `${e.theme.colors.placeholderColorSuccess}` : `${e.theme.colors.placeholderColor}`};

  #backdrop-cutout,
  #placeholder {
    transform-origin: center;

    ${(e) => e.$isAnimating && ne`
        animation: ${ja(Jn)} ${Zt}
          ${qt} both;
        animation-delay: ${Yt};
      `}

    @media (max-width: 667px) {
      ${(e) => e.$isAnimating && ne`
          animation: ${Ga(Jn)} ${Zt}
            ${qt} both;
          animation-delay: ${Yt};
        `}
    }
  }
`, fs = ({
  backdropColor: e,
  handleAnimationEnd: t,
  initialPosition: n,
  isAnimating: r,
  isInCandidateSelection: o
}) => h(ds, {
  $isAnimating: r,
  $isInCandidateSelection: o,
  onAnimationEnd: t,
  children: h("svg", {
    height: "100%",
    width: "100%",
    children: [h("mask", {
      id: "mask",
      children: [h("rect", {
        fill: "#fff",
        height: "100%",
        width: "100%"
      }), h("rect", {
        fill: "#000",
        height: `${n.height * 100}%`,
        id: "backdrop-cutout",
        rx: "50%",
        width: `${n.width * 100}%`,
        x: `${n.shiftX * 100}%`,
        y: `${n.shiftY * 100}%`
      })]
    }), h("rect", {
      clipPath: "circle()",
      fill: "none",
      height: `${n.height * 100}%`,
      id: "placeholder",
      rx: "50%",
      stroke: "currentColor",
      strokeWidth: "8",
      width: `${n.width * 100}%`,
      x: `${n.shiftX * 100}%`,
      y: `${n.shiftY * 100}%`
    }), h("rect", {
      fill: e,
      height: "100%",
      mask: "url(#mask)",
      width: "100%"
    })]
  })
}), hs = () => h("svg", {
  id: "Layer_1",
  style: "enable-background:new 0 0 62 62;",
  version: "1.1",
  viewBox: "0 0 62 62",
  x: "0px",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  xmlSpace: "preserve",
  y: "0px",
  children: h("path", {
    className: "st0",
    d: "M48.8,1H54c3.9,0,7,3.1,7,7v5.5 M13.2,1H8C4.1,1,1,4.1,1,8c0,1.8,0,3.7,0,5.5 M1,48.5V54c0,3.9,3.1,7,7,7h5.8 M61,48.5V54c0,3.9-3.1,7-7,7h-5.2",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "1"
  })
}), _s = () => h("svg", {
  id: "Layer_1",
  style: "enable-background:new 0 0 154 70;",
  version: "1.1",
  viewBox: "0 0 154 70",
  x: "0px",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  xmlSpace: "preserve",
  y: "0px",
  children: [h("path", {
    className: "st0",
    d: "M98.1,35c0,11-9.4,20-21,20c-11.6,0-21-9-21-20s9.4-20,21-20C88.7,15,98.1,24,98.1,35z",
    fill: "none",
    stroke: "#FFFFFF",
    strokeWidth: "2"
  }), h("path", {
    className: "st1",
    d: "M152.5,35c-0.2,0.2-0.5,0.5-0.8,0.8c-0.9,0.9-2.2,2.3-4,3.9c-3.5,3.3-8.6,7.6-15.2,11.9 C119.3,60.3,100.3,69,77.1,69c-23.2,0-42.3-8.7-55.6-17.3C14.8,47.3,9.6,43,6.1,39.7c-1.8-1.6-3.1-3-4-3.9c-0.3-0.3-0.6-0.6-0.8-0.8 c0.2-0.2,0.5-0.5,0.8-0.8c0.9-0.9,2.2-2.3,4-3.9c3.5-3.3,8.7-7.6,15.4-11.9C34.8,9.7,53.8,1,77.1,1c23.2,0,42.2,8.7,55.4,17.3 c6.6,4.3,11.7,8.7,15.2,11.9c1.7,1.6,3.1,3,4,3.9C152,34.5,152.3,34.8,152.5,35z",
    fill: "none",
    stroke: "#FFFFFF",
    strokeMiterlimit: "10",
    strokeWidth: "2"
  })]
}), ps = L.div`
  position: absolute;
  top: 47%;
  left: 43%;
  transform: translate(-50%, -50%);
  width: 7%;
  aspect-ratio: 1;

  @media (max-width: 768px) {
    width: 14%;
  }

  ${(e) => e.$isAnimating && ne`
      animation: ${Za} ${Zt} ${qt} both;
      animation-delay: ${Yt};
    `}
`, ms = L.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.6);
  opacity: 0;

  ${(e) => e.$isAnimating && ne`
      animation: ${qa} ${Ba} ${Ua} both;
      animation-delay: ${Fa};
    `}

  svg {
    display: inline-block;
    width: 100%;
    height: auto;
    filter: drop-shadow(0px 0px 5px rgba(2, 27, 65, 0.3));
  }
`, gs = L.div`
  position: absolute;
  width: 100%;
  height: 100%;
  color: ${(e) => e.$isInCandidateSelection ? "#00BFB2" : "white"};
  transform: scale(0);
  opacity: 0;

  ${(e) => e.$isAnimating && ne`
      animation: ${Xa} ${Wa} ${Va} both;
      animation-delay: ${za};
    `}

  svg {
    display: inline-block;
    width: 100%;
    height: auto;
    filter: drop-shadow(0px 0px 4px rgba(2, 27, 65, 0.3));
  }
`, ys = ({
  isAnimating: e,
  isInCandidateSelection: t
}) => h(ps, {
  $isAnimating: e,
  children: [h(gs, {
    $isAnimating: e,
    $isInCandidateSelection: t,
    children: h(hs, {})
  }), h(ms, {
    $isAnimating: e,
    children: h(_s, {})
  })]
}), vs = ({
  backdropColor: e,
  instructions: t,
  magnifEyeStateInstructions: n,
  showCameraButtons: r,
  videoElementSize: o
}) => {
  const {
    cameraResolution: i,
    instructionCode: a,
    isMirroring: c
  } = rs(), l = Wr(o), {
    magnifEyeError: d,
    magnifEyePhase: f,
    magnifEyeState: s
  } = is(), _ = os(a, f), p = _ === Pe.CANDIDATE_SELECTION, u = f === Le.MIDDLE || f === Le.CLOSEUP;
  if (s === Q.ERROR)
    return h(Vr, {
      fontSize: l,
      text: d == null ? void 0 : d.message
    });
  if (s === Q.RUNNING && i) {
    const m = $a(i);
    return h(W, {
      children: [!u && h(ns, {
        cameraResolution: i,
        isImageMirror: c
      }), h(fs, {
        backdropColor: e,
        handleAnimationEnd: () => Ea(tn.ANIMATION_END),
        initialPosition: m,
        isAnimating: u,
        isInCandidateSelection: p
      }), _ && h(Qa, {
        cssBottom: (m.height + m.shiftY) * 100,
        fontSize: l,
        isAnimating: u,
        isInCandidateSelection: p,
        isPortrait: i.width < i.height,
        children: t[_]
      }), h(ys, {
        isAnimating: u,
        isInCandidateSelection: p
      }), r && !u && h(Da, {
        customControlEvent: ye.CONTROL,
        isSwitchCameraDisabled: p,
        videoElementSize: o
      })]
    });
  }
  return h(us, {
    backdropColor: e,
    fontSize: l,
    magnifEyeState: s,
    magnifEyeStateInstructions: n
  });
};
const Cs = (e) => {
  var i, a;
  const t = {
    ...aa,
    ...e == null ? void 0 : e.instructions
  }, n = {
    [Q.LOADING]: {
      ...Xn.loading,
      ...(i = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : i.loading
    },
    [Q.DONE]: {
      ...Xn.done,
      ...(a = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : a.done
    }
  }, r = (e == null ? void 0 : e.backdropColor) ?? sa, o = (e == null ? void 0 : e.showCameraButtons) ?? !1;
  return {
    backdropColor: r,
    magnifEyeInstructions: t,
    magnifEyeStateInstructions: n,
    showCameraButtons: o
  };
}, Es = ({
  props: e
}) => {
  const {
    backdropColor: t,
    magnifEyeInstructions: n,
    magnifEyeStateInstructions: r,
    showCameraButtons: o
  } = Cs(e), i = ma(ye.VIDEO_ELEMENT_SIZE), a = ya(e);
  return h(pa, {
    theme: a,
    videoElementSize: i,
    children: h(vs, {
      backdropColor: t,
      instructions: n,
      magnifEyeStateInstructions: r,
      showCameraButtons: o,
      videoElementSize: i
    })
  });
};
fo(Es, "x-dot-magnifeye-liveness-ui", ["props"]);
