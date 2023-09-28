var ao = Object.defineProperty;
var so = (e, t, n) => t in e ? ao(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var je = (e, t, n) => (so(e, typeof t != "symbol" ? t + "" : t, n), n);
var Ue, y, ir, ie, fn, ar, At, sr, ye = {}, cr = [], co = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ct = Array.isArray;
function q(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function lr(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function D(e, t, n) {
  var r, o, i, a = {};
  for (i in t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ue.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      a[i] === void 0 && (a[i] = e.defaultProps[i]);
  return Re(e, a, r, o, null);
}
function Re(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o ?? ++ir };
  return o == null && y.vnode != null && y.vnode(i), i;
}
function lo() {
  return { current: null };
}
function W(e) {
  return e.children;
}
function F(e, t) {
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
function Tt(e) {
  (!e.__d && (e.__d = !0) && ie.push(e) && !nt.__r++ || fn !== y.debounceRendering) && ((fn = y.debounceRendering) || ar)(nt);
}
function nt() {
  var e, t, n, r, o, i, a, c, l;
  for (ie.sort(At); e = ie.shift(); )
    e.__d && (t = ie.length, r = void 0, o = void 0, i = void 0, c = (a = (n = e).__v).__e, (l = n.__P) && (r = [], o = [], (i = q({}, a)).__v = a.__v + 1, Yt(l, a, i, n.__n, l.ownerSVGElement !== void 0, a.__h != null ? [c] : null, r, c ?? tt(a), a.__h, o), _r(r, a, o), a.__e != c && ur(a)), ie.length > t && ie.sort(At));
  nt.__r = 0;
}
function dr(e, t, n, r, o, i, a, c, l, h, f) {
  var s, _, p, d, m, k, g, S, w, b, $ = 0, v = r && r.__k || cr, C = v.length, R = C, A = t.length;
  for (n.__k = [], s = 0; s < A; s++)
    (d = n.__k[s] = (d = t[s]) == null || typeof d == "boolean" || typeof d == "function" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" ? Re(null, d, null, null, d) : ct(d) ? Re(W, { children: d }, null, null, null) : d.__b > 0 ? Re(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d) != null && (d.__ = n, d.__b = n.__b + 1, (S = uo(d, v, g = s + $, R)) === -1 ? p = ye : (p = v[S] || ye, v[S] = void 0, R--), Yt(e, d, p, o, i, a, c, l, h, f), m = d.__e, (_ = d.ref) && p.ref != _ && (p.ref && qt(p.ref, null, d), f.push(_, d.__c || m, d)), m != null && (k == null && (k = m), b = !(w = p === ye || p.__v === null) && S === g, w ? S == -1 && $-- : S !== g && (S === g + 1 ? ($++, b = !0) : S > g ? R > A - g ? ($ += S - g, b = !0) : $-- : $ = S < g && S == g - 1 ? S - g : 0), g = s + $, b = b || S == s && !w, typeof d.type != "function" || S === g && p.__k !== d.__k ? typeof d.type == "function" || b ? d.__d !== void 0 ? (l = d.__d, d.__d = void 0) : l = m.nextSibling : l = hr(e, m, l) : l = fr(d, l, e), typeof n.type == "function" && (n.__d = l)));
  for (n.__e = k, s = C; s--; )
    v[s] != null && (typeof n.type == "function" && v[s].__e != null && v[s].__e == n.__d && (n.__d = v[s].__e.nextSibling), pr(v[s], v[s]));
}
function fr(e, t, n) {
  for (var r, o = e.__k, i = 0; o && i < o.length; i++)
    (r = o[i]) && (r.__ = e, t = typeof r.type == "function" ? fr(r, t, n) : hr(n, r.__e, t));
  return t;
}
function X(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (ct(e) ? e.some(function(n) {
    X(n, t);
  }) : t.push(e)), t;
}
function hr(e, t, n) {
  return n == null || n.parentNode !== e ? e.insertBefore(t, null) : t == n && t.parentNode != null || e.insertBefore(t, n), t.nextSibling;
}
function uo(e, t, n, r) {
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
function fo(e, t, n, r, o) {
  var i;
  for (i in n)
    i === "children" || i === "key" || i in t || rt(e, i, null, n[i], r);
  for (i in t)
    o && typeof t[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || n[i] === t[i] || rt(e, i, t[i], n[i], r);
}
function hn(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || co.test(t) ? n : n + "px";
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
            n && t in n || hn(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || hn(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r || e.addEventListener(t, i ? pn : _n, i) : e.removeEventListener(t, i ? pn : _n, i);
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
function _n(e) {
  return this.l[e.type + !1](y.event ? y.event(e) : e);
}
function pn(e) {
  return this.l[e.type + !0](y.event ? y.event(e) : e);
}
function Yt(e, t, n, r, o, i, a, c, l, h) {
  var f, s, _, p, d, m, k, g, S, w, b, $, v, C, R, A = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, c = t.__e = n.__e, t.__h = null, i = [c]), (f = y.__b) && f(t);
  try {
    e:
      if (typeof A == "function") {
        if (g = t.props, S = (f = A.contextType) && r[f.__c], w = f ? S ? S.props.value : f.__ : r, n.__c ? k = (s = t.__c = n.__c).__ = s.__E : ("prototype" in A && A.prototype.render ? t.__c = s = new A(g, w) : (t.__c = s = new F(g, w), s.constructor = A, s.render = _o), S && S.sub(s), s.props = g, s.state || (s.state = {}), s.context = w, s.__n = r, _ = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), A.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = q({}, s.__s)), q(s.__s, A.getDerivedStateFromProps(g, s.__s))), p = s.props, d = s.state, s.__v = t, _)
          A.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (A.getDerivedStateFromProps == null && g !== p && s.componentWillReceiveProps != null && s.componentWillReceiveProps(g, w), !s.__e && (s.shouldComponentUpdate != null && s.shouldComponentUpdate(g, s.__s, w) === !1 || t.__v === n.__v)) {
            for (t.__v !== n.__v && (s.props = g, s.state = s.__s, s.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(pe) {
              pe && (pe.__ = t);
            }), b = 0; b < s._sb.length; b++)
              s.__h.push(s._sb[b]);
            s._sb = [], s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(g, s.__s, w), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(p, d, m);
          });
        }
        if (s.context = w, s.props = g, s.__P = e, s.__e = !1, $ = y.__r, v = 0, "prototype" in A && A.prototype.render) {
          for (s.state = s.__s, s.__d = !1, $ && $(t), f = s.render(s.props, s.state, s.context), C = 0; C < s._sb.length; C++)
            s.__h.push(s._sb[C]);
          s._sb = [];
        } else
          do
            s.__d = !1, $ && $(t), f = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++v < 25);
        s.state = s.__s, s.getChildContext != null && (r = q(q({}, r), s.getChildContext())), _ || s.getSnapshotBeforeUpdate == null || (m = s.getSnapshotBeforeUpdate(p, d)), dr(e, ct(R = f != null && f.type === W && f.key == null ? f.props.children : f) ? R : [R], t, n, r, o, i, a, c, l, h), s.base = t.__e, t.__h = null, s.__h.length && a.push(s), k && (s.__E = s.__ = null);
      } else
        i == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = ho(n.__e, t, n, r, o, i, a, l, h);
    (f = y.diffed) && f(t);
  } catch (pe) {
    t.__v = null, (l || i != null) && (t.__e = c, t.__h = !!l, i[i.indexOf(c)] = null), y.__e(pe, t, n);
  }
}
function _r(e, t, n) {
  for (var r = 0; r < n.length; r++)
    qt(n[r], n[++r], n[++r]);
  y.__c && y.__c(t, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      y.__e(i, o.__v);
    }
  });
}
function ho(e, t, n, r, o, i, a, c, l) {
  var h, f, s, _ = n.props, p = t.props, d = t.type, m = 0;
  if (d === "svg" && (o = !0), i != null) {
    for (; m < i.length; m++)
      if ((h = i[m]) && "setAttribute" in h == !!d && (d ? h.localName === d : h.nodeType === 3)) {
        e = h, i[m] = null;
        break;
      }
  }
  if (e == null) {
    if (d === null)
      return document.createTextNode(p);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), i = null, c = !1;
  }
  if (d === null)
    _ === p || c && e.data === p || (e.data = p);
  else {
    if (i = i && Ue.call(e.childNodes), f = (_ = n.props || ye).dangerouslySetInnerHTML, s = p.dangerouslySetInnerHTML, !c) {
      if (i != null)
        for (_ = {}, m = 0; m < e.attributes.length; m++)
          _[e.attributes[m].name] = e.attributes[m].value;
      (s || f) && (s && (f && s.__html == f.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (fo(e, p, _, o, c), s)
      t.__k = [];
    else if (dr(e, ct(m = t.props.children) ? m : [m], t, n, r, o && d !== "foreignObject", i, a, i ? i[0] : n.__k && tt(n, 0), c, l), i != null)
      for (m = i.length; m--; )
        i[m] != null && lr(i[m]);
    c || ("value" in p && (m = p.value) !== void 0 && (m !== e.value || d === "progress" && !m || d === "option" && m !== _.value) && rt(e, "value", m, _.value, !1), "checked" in p && (m = p.checked) !== void 0 && m !== e.checked && rt(e, "checked", m, _.checked, !1));
  }
  return e;
}
function qt(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    y.__e(r, n);
  }
}
function pr(e, t, n) {
  var r, o;
  if (y.unmount && y.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || qt(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (i) {
        y.__e(i, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (o = 0; o < r.length; o++)
      r[o] && pr(r[o], t, n || typeof e.type != "function");
  n || e.__e == null || lr(e.__e), e.__ = e.__e = e.__d = void 0;
}
function _o(e, t, n) {
  return this.constructor(e, n);
}
function te(e, t, n) {
  var r, o, i, a;
  y.__ && y.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], a = [], Yt(t, e = (!r && n || t).__k = D(W, null, [e]), o || ye, ye, t.ownerSVGElement !== void 0, !r && n ? [n] : o ? null : t.firstChild ? Ue.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, a), _r(i, e, a);
}
function Xt(e, t) {
  te(e, t, Xt);
}
function Qt(e, t, n) {
  var r, o, i, a, c = q({}, e.props);
  for (i in e.type && e.type.defaultProps && (a = e.type.defaultProps), t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : c[i] = t[i] === void 0 && a !== void 0 ? a[i] : t[i];
  return arguments.length > 2 && (c.children = arguments.length > 3 ? Ue.call(arguments, 2) : n), Re(e.type, c, r || e.key, o || e.ref, null);
}
function po(e, t) {
  var n = { __c: t = "__cC" + sr++, __: e, Consumer: function(r, o) {
    return r.children(o);
  }, Provider: function(r) {
    var o, i;
    return this.getChildContext || (o = [], (i = {})[t] = this, this.getChildContext = function() {
      return i;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && o.some(function(c) {
        c.__e = !0, Tt(c);
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
Ue = cr.slice, y = { __e: function(e, t, n, r) {
  for (var o, i, a; t = t.__; )
    if ((o = t.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), a = o.__d), a)
          return o.__E = o;
      } catch (c) {
        e = c;
      }
  throw e;
} }, ir = 0, F.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = q({}, this.state), typeof e == "function" && (e = e(q({}, n), this.props)), e && q(n, e), e != null && this.__v && (t && this._sb.push(t), Tt(this));
}, F.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Tt(this));
}, F.prototype.render = W, ie = [], ar = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, At = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, nt.__r = 0, sr = 0;
function Kt() {
  return (Kt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function mo(e) {
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
function go() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = D(mo, Kt({}, this._props, { context: e.detail.context }), function t(n, r) {
    if (n.nodeType === 3)
      return n.data;
    if (n.nodeType !== 1)
      return null;
    var o = [], i = {}, a = 0, c = n.attributes, l = n.childNodes;
    for (a = c.length; a--; )
      c[a].name !== "slot" && (i[c[a].name] = c[a].value, i[mr(c[a].name)] = c[a].value);
    for (a = l.length; a--; ) {
      var h = t(l[a], null), f = l[a].slot;
      f ? i[f] = D(mn, { name: f }, h) : o[a] = h;
    }
    var s = r ? D(mn, null, o) : o;
    return D(r || n.nodeName.toLowerCase(), i, s);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Xt : te)(this._vdom, this._root);
}
function mr(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function yo(e, t, n) {
  if (this._vdom) {
    var r = {};
    r[e] = n = n ?? void 0, r[mr(e)] = n, this._vdom = Qt(this._vdom, r), te(this._vdom, this._root);
  }
}
function vo() {
  te(this._vdom = null, this._root);
}
function mn(e, t) {
  var n = this;
  return D("slot", Kt({}, e, { ref: function(r) {
    r ? (n.ref = r, n._listener || (n._listener = function(o) {
      o.stopPropagation(), o.detail.context = t;
    }, r.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function Co(e, t, n, r) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = e, i._root = r && r.shadow ? i.attachShadow({ mode: "open" }) : i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = go, o.prototype.attributeChangedCallback = yo, o.prototype.disconnectedCallback = vo, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = n, n.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom.props[i];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(i, null, a) : (this._props || (this._props = {}), this._props[i] = a, this.connectedCallback());
      var c = typeof a;
      a != null && c !== "string" && c !== "boolean" && c !== "number" || this.setAttribute(i, a);
    } });
  }), customElements.define(t || e.tagName || e.displayName || e.name, o);
}
var xt = /* @__PURE__ */ ((e) => (e.CONTINUE_DETECTION = "continue-detection", e.SWITCH_CAMERA = "switch-camera", e.TOGGLE_MIRROR = "toggle-mirror", e))(xt || {}), gr = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", e.CONTROL = "document-auto-capture:control", e.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", e.DOCUMENT_DETECTION = "document-auto-capture:document-detection", e.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", e.STATE_CHANGED = "document-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", e))(gr || {}), Pe = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", e.CONTROL = "face-auto-capture:control", e.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", e.FACE_DETECTION = "face-auto-capture:face-detection", e.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", e.STATE_CHANGED = "face-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", e))(Pe || {}), Jt = /* @__PURE__ */ ((e) => (e.ANIMATION_END = "smile-auto-capture:animation-end", e.STATUS_CHANGED = "smile-auto-capture:status-changed", e))(Jt || {});
const B = {
  CANDIDATE_SELECTION: "candidate_selection",
  FACE_TOO_CLOSE: "face_too_close",
  FACE_TOO_FAR: "face_too_far",
  FACE_CENTERING: "face_centering",
  FACE_NOT_PRESENT: "face_not_present",
  SHARPNESS_TOO_LOW: "sharpness_too_low",
  BRIGHTNESS_TOO_LOW: "brightness_too_low",
  BRIGHTNESS_TOO_HIGH: "brightness_too_high",
  DEVICE_TILTED: "device_tilted"
}, So = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  WAITING: "WAITING",
  RUNNING: "RUNNING"
}, ve = {
  ...B,
  SMILE: "smile",
  SMILE_CANDIDATE_SELECTION: "smile_candidate_selection"
}, ot = {
  NEUTRAL: "NEUTRAL",
  SMILE: "SMILE"
}, ee = {
  ...So,
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
function ue(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function Eo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var wo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, bo = /* @__PURE__ */ Eo(
  function(e) {
    return wo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ne, O, St, gn, Ce = 0, yr = [], Ye = [], yn = y.__b, vn = y.__r, Cn = y.diffed, Sn = y.__c, En = y.unmount;
function Ne(e, t) {
  y.__h && y.__h(O, e, Ce || t), Ce = 0;
  var n = O.__H || (O.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({ __V: Ye }), n.__[e];
}
function H(e) {
  return Ce = 1, vr(Cr, e);
}
function vr(e, t, n) {
  var r = Ne(ne++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Cr(void 0, t), function(c) {
    var l = r.__N ? r.__N[0] : r.__[0], h = r.t(l, c);
    l !== h && (r.__N = [h, r.__[1]], r.__c.setState({}));
  }], r.__c = O, !O.u)) {
    var o = function(c, l, h) {
      if (!r.__c.__H)
        return !0;
      var f = r.__c.__H.__.filter(function(_) {
        return _.__c;
      });
      if (f.every(function(_) {
        return !_.__N;
      }))
        return !i || i.call(this, c, l, h);
      var s = !1;
      return f.forEach(function(_) {
        if (_.__N) {
          var p = _.__[0];
          _.__ = _.__N, _.__N = void 0, p !== _.__[0] && (s = !0);
        }
      }), !(!s && r.__c.props === c) && (!i || i.call(this, c, l, h));
    };
    O.u = !0;
    var i = O.shouldComponentUpdate, a = O.componentWillUpdate;
    O.componentWillUpdate = function(c, l, h) {
      if (this.__e) {
        var f = i;
        i = void 0, o(c, l, h), i = f;
      }
      a && a.call(this, c, l, h);
    }, O.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function de(e, t) {
  var n = Ne(ne++, 3);
  !y.__s && tn(n.__H, t) && (n.__ = e, n.i = t, O.__H.__h.push(n));
}
function lt(e, t) {
  var n = Ne(ne++, 4);
  !y.__s && tn(n.__H, t) && (n.__ = e, n.i = t, O.__h.push(n));
}
function ut(e) {
  return Ce = 5, dt(function() {
    return { current: e };
  }, []);
}
function $o(e, t, n) {
  Ce = 6, lt(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(e));
}
function dt(e, t) {
  var n = Ne(ne++, 7);
  return tn(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__;
}
function Se(e, t) {
  return Ce = 8, dt(function() {
    return e;
  }, t);
}
function en(e) {
  var t = O.context[e.__c], n = Ne(ne++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(O)), t.props.value) : e.__;
}
function Lt(e, t) {
  y.useDebugValue && y.useDebugValue(t ? t(e) : e);
}
function No() {
  var e = Ne(ne++, 11);
  if (!e.__) {
    for (var t = O.__v; t !== null && !t.__m && t.__ !== null; )
      t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function ko() {
  for (var e; e = yr.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(qe), e.__H.__h.forEach(Rt), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], y.__e(t, e.__v);
      }
}
y.__b = function(e) {
  O = null, yn && yn(e);
}, y.__r = function(e) {
  vn && vn(e), ne = 0;
  var t = (O = e.__c).__H;
  t && (St === O ? (t.__h = [], O.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = Ye, n.__N = n.i = void 0;
  })) : (t.__h.forEach(qe), t.__h.forEach(Rt), t.__h = [], ne = 0)), St = O;
}, y.diffed = function(e) {
  Cn && Cn(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (yr.push(t) !== 1 && gn === y.requestAnimationFrame || ((gn = y.requestAnimationFrame) || Io)(ko)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== Ye && (n.__ = n.__V), n.i = void 0, n.__V = Ye;
  })), St = O = null;
}, y.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(qe), n.__h = n.__h.filter(function(r) {
        return !r.__ || Rt(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], y.__e(r, n.__v);
    }
  }), Sn && Sn(e, t);
}, y.unmount = function(e) {
  En && En(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      qe(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && y.__e(t, n.__v));
};
var wn = typeof requestAnimationFrame == "function";
function Io(e) {
  var t, n = function() {
    clearTimeout(r), wn && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  wn && (t = requestAnimationFrame(n));
}
function qe(e) {
  var t = O, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), O = t;
}
function Rt(e) {
  var t = O;
  e.__c = e.__(), O = t;
}
function tn(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function Cr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Sr(e, t) {
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
function Oo(e, t) {
  function n(o) {
    var i = this.props.ref, a = i == o.ref;
    return !a && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !a : Dt(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, D(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(Pt.prototype = new F()).isPureReactComponent = !0, Pt.prototype.shouldComponentUpdate = function(e, t) {
  return Dt(this.props, e) || Dt(this.state, t);
};
var bn = y.__b;
y.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), bn && bn(e);
};
var Ao = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function To(e) {
  function t(n) {
    var r = Sr({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = Ao, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var $n = function(e, t) {
  return e == null ? null : X(X(e).map(t));
}, xo = { map: $n, forEach: $n, count: function(e) {
  return e ? X(e).length : 0;
}, only: function(e) {
  var t = X(e);
  if (t.length !== 1)
    throw "Children.only";
  return t[0];
}, toArray: X }, Lo = y.__e;
y.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; )
      if ((o = i.__c) && o.__c)
        return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  Lo(e, t, n, r);
};
var Nn = y.unmount;
function Er(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = Sr({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return Er(r, t, n);
  })), e;
}
function wr(e, t, n) {
  return e && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return wr(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = n)), e;
}
function Xe() {
  this.__u = 0, this.t = null, this.__b = null;
}
function br(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Ro(e) {
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
function Ae() {
  this.u = null, this.o = null;
}
y.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), Nn && Nn(e);
}, (Xe.prototype = new F()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var o = br(r.__v), i = !1, a = function() {
    i || (i = !0, n.__R = null, o ? o(c) : c());
  };
  n.__R = a;
  var c = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var h = r.state.__a;
        r.__v.__k[0] = wr(h, h.__c.__P, h.__c.__O);
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
      this.__v.__k[0] = Er(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && D(W, null, e.fallback);
  return o && (o.__h = null), [D(W, null, t.__a ? null : e.children), o];
};
var kn = function(e, t, n) {
  if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (n = e.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      e.u = n = n[2];
    }
};
function Do(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function Po(e) {
  var t = this, n = e.i;
  t.componentWillUnmount = function() {
    te(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r);
  } }), te(D(Do, { context: t.context }, e.__v), t.l)) : t.l && t.componentWillUnmount();
}
function Mo(e, t) {
  var n = D(Po, { __v: e, i: t });
  return n.containerInfo = t, n;
}
(Ae.prototype = new F()).__a = function(e) {
  var t = this, n = br(t.__v), r = t.o.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), kn(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, Ae.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = X(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; )
    this.o.set(t[n], this.u = [1, 0, this.u]);
  return e.children;
}, Ae.prototype.componentDidUpdate = Ae.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, n) {
    kn(e, n, t);
  });
};
var $r = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Ho = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Uo = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Bo = /[A-Z0-9]/g, Fo = typeof document < "u", zo = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function Wo(e, t, n) {
  return t.__k == null && (t.textContent = ""), te(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function jo(e, t, n) {
  return Xt(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
F.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(F.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var In = y.event;
function Vo() {
}
function Go() {
  return this.cancelBubble;
}
function Zo() {
  return this.defaultPrevented;
}
y.event = function(e) {
  return In && (e = In(e)), e.persist = Vo, e.isPropagationStopped = Go, e.isDefaultPrevented = Zo, e.nativeEvent = e;
};
var nn, Yo = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, On = y.vnode;
y.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {};
    for (var i in n) {
      var a = n[i];
      if (!(i === "value" && "defaultValue" in n && a == null || Fo && i === "children" && r === "noscript" || i === "class" || i === "className")) {
        var c = i.toLowerCase();
        i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && a === !0 ? a = "" : c === "ondoubleclick" ? i = "ondblclick" : c !== "onchange" || r !== "input" && r !== "textarea" || zo(n.type) ? c === "onfocus" ? i = "onfocusin" : c === "onblur" ? i = "onfocusout" : Uo.test(i) ? i = c : r.indexOf("-") === -1 && Ho.test(i) ? i = i.replace(Bo, "-$&").toLowerCase() : a === null && (a = void 0) : c = i = "oninput", c === "oninput" && o[i = c] && (i = "oninputCapture"), o[i] = a;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = X(n.children).forEach(function(l) {
      l.props.selected = o.value.indexOf(l.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = X(n.children).forEach(function(l) {
      l.props.selected = o.multiple ? o.defaultValue.indexOf(l.props.value) != -1 : o.defaultValue == l.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", Yo)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = $r, On && On(e);
};
var An = y.__r;
y.__r = function(e) {
  An && An(e), nn = e.__c;
};
var Tn = y.diffed;
y.diffed = function(e) {
  Tn && Tn(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), nn = null;
};
var qo = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return nn.__n[e.__c].props.value;
} } } };
function Xo(e) {
  return D.bind(null, e);
}
function Nr(e) {
  return !!e && e.$$typeof === $r;
}
function Qo(e) {
  return Nr(e) ? Qt.apply(null, arguments) : e;
}
function Ko(e) {
  return !!e.__k && (te(null, e), !0);
}
function Jo(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var ei = function(e, t) {
  return e(t);
}, ti = function(e, t) {
  return e(t);
}, ni = W;
function kr(e) {
  e();
}
function ri(e) {
  return e;
}
function oi() {
  return [!1, kr];
}
var ii = lt;
function ai(e, t) {
  var n = t(), r = H({ h: { __: n, v: t } }), o = r[0].h, i = r[1];
  return lt(function() {
    o.__ = n, o.v = t, Et(o.__, t()) || i({ h: o });
  }, [e, n, t]), de(function() {
    return Et(o.__, o.v()) || i({ h: o }), e(function() {
      Et(o.__, o.v()) || i({ h: o });
    });
  }, [e]), n;
}
var fe = { useState: H, useId: No, useReducer: vr, useEffect: de, useLayoutEffect: lt, useInsertionEffect: ii, useTransition: oi, useDeferredValue: ri, useSyncExternalStore: ai, startTransition: kr, useRef: ut, useImperativeHandle: $o, useMemo: dt, useCallback: Se, useContext: en, useDebugValue: Lt, version: "17.0.2", Children: xo, render: Wo, hydrate: jo, unmountComponentAtNode: Ko, createPortal: Mo, createElement: D, createContext: po, createFactory: Xo, cloneElement: Qo, createRef: lo, Fragment: W, isValidElement: Nr, findDOMNode: Jo, Component: F, PureComponent: Pt, memo: Oo, forwardRef: To, flushSync: ti, unstable_batchedUpdates: ei, StrictMode: ni, Suspense: Xe, SuspenseList: Ae, lazy: Ro, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: qo }, I = "-ms-", De = "-moz-", N = "-webkit-", Ir = "comm", ft = "rule", rn = "decl", si = "@import", Or = "@keyframes", ci = "@layer", li = Math.abs, on = String.fromCharCode, Mt = Object.assign;
function ui(e, t) {
  return x(e, 0) ^ 45 ? (((t << 2 ^ x(e, 0)) << 2 ^ x(e, 1)) << 2 ^ x(e, 2)) << 2 ^ x(e, 3) : 0;
}
function Ar(e) {
  return e.trim();
}
function Z(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function E(e, t, n) {
  return e.replace(t, n);
}
function Qe(e, t) {
  return e.indexOf(t);
}
function x(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ee(e, t, n) {
  return e.slice(t, n);
}
function V(e) {
  return e.length;
}
function Tr(e) {
  return e.length;
}
function Te(e, t) {
  return t.push(e), e;
}
function di(e, t) {
  return e.map(t).join("");
}
function xn(e, t) {
  return e.filter(function(n) {
    return !Z(n, t);
  });
}
var ht = 1, we = 1, xr = 0, U = 0, T = 0, ke = "";
function _t(e, t, n, r, o, i, a, c) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: ht, column: we, length: a, return: "", siblings: c };
}
function J(e, t) {
  return Mt(_t("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function ge(e) {
  for (; e.root; )
    e = J(e.root, { children: [e] });
  Te(e, e.siblings);
}
function fi() {
  return T;
}
function hi() {
  return T = U > 0 ? x(ke, --U) : 0, we--, T === 10 && (we = 1, ht--), T;
}
function z() {
  return T = U < xr ? x(ke, U++) : 0, we++, T === 10 && (we = 1, ht++), T;
}
function ce() {
  return x(ke, U);
}
function Ke() {
  return U;
}
function pt(e, t) {
  return Ee(ke, e, t);
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
function _i(e) {
  return ht = we = 1, xr = V(ke = e), U = 0, [];
}
function pi(e) {
  return ke = "", e;
}
function wt(e) {
  return Ar(pt(U - 1, Ut(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function mi(e) {
  for (; (T = ce()) && T < 33; )
    z();
  return Ht(e) > 2 || Ht(T) > 3 ? "" : " ";
}
function gi(e, t) {
  for (; --t && z() && !(T < 48 || T > 102 || T > 57 && T < 65 || T > 70 && T < 97); )
    ;
  return pt(e, Ke() + (t < 6 && ce() == 32 && z() == 32));
}
function Ut(e) {
  for (; z(); )
    switch (T) {
      case e:
        return U;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ut(T);
        break;
      case 40:
        e === 41 && Ut(e);
        break;
      case 92:
        z();
        break;
    }
  return U;
}
function yi(e, t) {
  for (; z() && e + T !== 47 + 10; )
    if (e + T === 42 + 42 && ce() === 47)
      break;
  return "/*" + pt(t, U - 1) + "*" + on(e === 47 ? e : z());
}
function vi(e) {
  for (; !Ht(ce()); )
    z();
  return pt(e, U);
}
function Ci(e) {
  return pi(Je("", null, null, null, [""], e = _i(e), 0, [0], e));
}
function Je(e, t, n, r, o, i, a, c, l) {
  for (var h = 0, f = 0, s = a, _ = 0, p = 0, d = 0, m = 1, k = 1, g = 1, S = 0, w = "", b = o, $ = i, v = r, C = w; k; )
    switch (d = S, S = z()) {
      case 40:
        if (d != 108 && x(C, s - 1) == 58) {
          Qe(C += E(wt(S), "&", "&\f"), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += wt(S);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += mi(d);
        break;
      case 92:
        C += gi(Ke() - 1, 7);
        continue;
      case 47:
        switch (ce()) {
          case 42:
          case 47:
            Te(Si(yi(z(), Ke()), t, n, l), l);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * m:
        c[h++] = V(C) * g;
      case 125 * m:
      case 59:
      case 0:
        switch (S) {
          case 0:
          case 125:
            k = 0;
          case 59 + f:
            g == -1 && (C = E(C, /\f/g, "")), p > 0 && V(C) - s && Te(p > 32 ? Rn(C + ";", r, n, s - 1, l) : Rn(E(C, " ", "") + ";", r, n, s - 2, l), l);
            break;
          case 59:
            C += ";";
          default:
            if (Te(v = Ln(C, t, n, h, f, o, c, w, b = [], $ = [], s, i), i), S === 123)
              if (f === 0)
                Je(C, t, v, v, b, i, s, c, $);
              else
                switch (_ === 99 && x(C, 3) === 110 ? 100 : _) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Je(e, v, v, r && Te(Ln(e, v, v, 0, 0, o, c, w, o, b = [], s, $), $), o, $, s, c, r ? b : $);
                    break;
                  default:
                    Je(C, v, v, v, [""], $, 0, c, $);
                }
        }
        h = f = p = 0, m = g = 1, w = C = "", s = a;
        break;
      case 58:
        s = 1 + V(C), p = d;
      default:
        if (m < 1) {
          if (S == 123)
            --m;
          else if (S == 125 && m++ == 0 && hi() == 125)
            continue;
        }
        switch (C += on(S), S * m) {
          case 38:
            g = f > 0 ? 1 : (C += "\f", -1);
            break;
          case 44:
            c[h++] = (V(C) - 1) * g, g = 1;
            break;
          case 64:
            ce() === 45 && (C += wt(z())), _ = ce(), f = s = V(w = C += vi(Ke())), S++;
            break;
          case 45:
            d === 45 && V(C) == 2 && (m = 0);
        }
    }
  return i;
}
function Ln(e, t, n, r, o, i, a, c, l, h, f, s) {
  for (var _ = o - 1, p = o === 0 ? i : [""], d = Tr(p), m = 0, k = 0, g = 0; m < r; ++m)
    for (var S = 0, w = Ee(e, _ + 1, _ = li(k = a[m])), b = e; S < d; ++S)
      (b = Ar(k > 0 ? p[S] + " " + w : E(w, /&\f/g, p[S]))) && (l[g++] = b);
  return _t(e, t, n, o === 0 ? ft : c, l, h, f, s);
}
function Si(e, t, n, r) {
  return _t(e, t, n, Ir, on(fi()), Ee(e, 2, -2), 0, r);
}
function Rn(e, t, n, r, o) {
  return _t(e, t, n, rn, Ee(e, 0, r), Ee(e, r + 1, -1), r, o);
}
function Lr(e, t, n) {
  switch (ui(e, t)) {
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
      return N + e + De + e + I + e + e;
    case 5936:
      switch (x(e, t + 11)) {
        case 114:
          return N + e + I + E(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return N + e + I + E(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return N + e + I + E(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return N + e + I + e + e;
    case 6165:
      return N + e + I + "flex-" + e + e;
    case 5187:
      return N + e + E(e, /(\w+).+(:[^]+)/, N + "box-$1$2" + I + "flex-$1$2") + e;
    case 5443:
      return N + e + I + "flex-item-" + E(e, /flex-|-self/g, "") + (Z(e, /flex-|baseline/) ? "" : I + "grid-row-" + E(e, /flex-|-self/g, "")) + e;
    case 4675:
      return N + e + I + "flex-line-pack" + E(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return N + e + I + E(e, "shrink", "negative") + e;
    case 5292:
      return N + e + I + E(e, "basis", "preferred-size") + e;
    case 6060:
      return N + "box-" + E(e, "-grow", "") + N + e + I + E(e, "grow", "positive") + e;
    case 4554:
      return N + E(e, /([^-])(transform)/g, "$1" + N + "$2") + e;
    case 6187:
      return E(E(E(e, /(zoom-|grab)/, N + "$1"), /(image-set)/, N + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return E(e, /(image-set\([^]*)/, N + "$1$`$1");
    case 4968:
      return E(E(e, /(.+:)(flex-)?(.*)/, N + "box-pack:$3" + I + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + N + e + e;
    case 4200:
      if (!Z(e, /flex-|baseline/))
        return I + "grid-column-align" + Ee(e, t) + e;
      break;
    case 2592:
    case 3360:
      return I + E(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, Z(r.props, /grid-\w+-end/);
      }) ? ~Qe(e + (n = n[t].value), "span") ? e : I + E(e, "-start", "") + e + I + "grid-row-span:" + (~Qe(n, "span") ? Z(n, /\d+/) : +Z(n, /\d+/) - +Z(e, /\d+/)) + ";" : I + E(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return Z(r.props, /grid-\w+-start/);
      }) ? e : I + E(E(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return E(e, /(.+)-inline(.+)/, N + "$1$2") + e;
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
        switch (x(e, t + 1)) {
          case 109:
            if (x(e, t + 4) !== 45)
              break;
          case 102:
            return E(e, /(.+:)(.+)-([^]+)/, "$1" + N + "$2-$3$1" + De + (x(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Qe(e, "stretch") ? Lr(E(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return E(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, a, c, l, h) {
        return I + o + ":" + i + h + (a ? I + o + "-span:" + (c ? l : +l - +i) + h : "") + e;
      });
    case 4949:
      if (x(e, t + 6) === 121)
        return E(e, ":", ":" + N) + e;
      break;
    case 6444:
      switch (x(e, x(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return E(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + N + (x(e, 14) === 45 ? "inline-" : "") + "box$3$1" + N + "$2$3$1" + I + "$2box$3") + e;
        case 100:
          return E(e, ":", ":" + I) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return E(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function it(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Ei(e, t, n, r) {
  switch (e.type) {
    case ci:
      if (e.children.length)
        break;
    case si:
    case rn:
      return e.return = e.return || e.value;
    case Ir:
      return "";
    case Or:
      return e.return = e.value + "{" + it(e.children, r) + "}";
    case ft:
      if (!V(e.value = e.props.join(",")))
        return "";
  }
  return V(n = it(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function wi(e) {
  var t = Tr(e);
  return function(n, r, o, i) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](n, r, o, i) || "";
    return a;
  };
}
function bi(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function $i(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case rn:
        e.return = Lr(e.value, e.length, n);
        return;
      case Or:
        return it([J(e, { value: E(e.value, "@", "@" + N) })], r);
      case ft:
        if (e.length)
          return di(n = e.props, function(o) {
            switch (Z(o, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                ge(J(e, { props: [E(o, /:(read-\w+)/, ":" + De + "$1")] })), ge(J(e, { props: [o] })), Mt(e, { props: xn(n, r) });
                break;
              case "::placeholder":
                ge(J(e, { props: [E(o, /:(plac\w+)/, ":" + N + "input-$1")] })), ge(J(e, { props: [E(o, /:(plac\w+)/, ":" + De + "$1")] })), ge(J(e, { props: [E(o, /:(plac\w+)/, I + "input-$1")] })), ge(J(e, { props: [o] })), Mt(e, { props: xn(n, r) });
                break;
            }
            return "";
          });
    }
}
var Ni = {
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
}, he = typeof process < "u" && {} !== void 0 && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR) || "data-styled", an = typeof window < "u" && "HTMLElement" in window, ki = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && {} !== void 0 && {}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && {}.REACT_APP_SC_DISABLE_SPEEDY !== "" ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" && {}.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && {} !== void 0 && {}.SC_DISABLE_SPEEDY !== void 0 && {}.SC_DISABLE_SPEEDY !== "" ? {}.SC_DISABLE_SPEEDY !== "false" && {}.SC_DISABLE_SPEEDY : {}.NODE_ENV !== "production"), Dn = /invalid hook call/i, Ve = /* @__PURE__ */ new Set(), Ii = function(e, t) {
  if ({}.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(a) {
        for (var c = [], l = 1; l < arguments.length; l++)
          c[l - 1] = arguments[l];
        Dn.test(a) ? (i = !1, Ve.delete(r)) : o.apply(void 0, ue([a], c, !1));
      }, ut(), i && !Ve.has(r) && (console.warn(r), Ve.add(r));
    } catch (a) {
      Dn.test(a.message) && Ve.delete(r);
    } finally {
      console.error = o;
    }
  }
}, mt = Object.freeze([]), be = Object.freeze({});
function Oi(e, t, n) {
  return n === void 0 && (n = be), e.theme !== n.theme && e.theme || t || n.theme;
}
var Rr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Ai = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ti = /(^-|-$)/g;
function Pn(e) {
  return e.replace(Ai, "-").replace(Ti, "");
}
var xi = /(a)(d)/gi, Mn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Bt(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    n = Mn(t % 52) + n;
  return (Mn(t % 52) + n).replace(xi, "$1-$2");
}
var bt, ae = function(e, t) {
  for (var n = t.length; n; )
    e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Dr = function(e) {
  return ae(5381, e);
};
function Pr(e) {
  return Bt(Dr(e) >>> 0);
}
function Mr(e) {
  return {}.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function $t(e) {
  return typeof e == "string" && ({}.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Hr = typeof Symbol == "function" && Symbol.for, Ur = Hr ? Symbol.for("react.memo") : 60115, Li = Hr ? Symbol.for("react.forward_ref") : 60112, Ri = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Di = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Br = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Pi = ((bt = {})[Li] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, bt[Ur] = Br, bt);
function Hn(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Ur ? Br : "$$typeof" in e ? Pi[e.$$typeof] : Ri;
  var t;
}
var Mi = Object.defineProperty, Hi = Object.getOwnPropertyNames, Un = Object.getOwnPropertySymbols, Ui = Object.getOwnPropertyDescriptor, Bi = Object.getPrototypeOf, Bn = Object.prototype;
function Fr(e, t, n) {
  if (typeof t != "string") {
    if (Bn) {
      var r = Bi(t);
      r && r !== Bn && Fr(e, r, n);
    }
    var o = Hi(t);
    Un && (o = o.concat(Un(t)));
    for (var i = Hn(e), a = Hn(t), c = 0; c < o.length; ++c) {
      var l = o[c];
      if (!(l in Di || n && n[l] || a && l in a || i && l in i)) {
        var h = Ui(t, l);
        try {
          Mi(e, l, h);
        } catch {
        }
      }
    }
  }
  return e;
}
function _e(e) {
  return typeof e == "function";
}
function sn(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function se(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Ft(e, t) {
  if (e.length === 0)
    return "";
  for (var n = e[0], r = 1; r < e.length; r++)
    n += t ? t + e[r] : e[r];
  return n;
}
function $e(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function zt(e, t, n) {
  if (n === void 0 && (n = !1), !n && !$e(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++)
      e[r] = zt(e[r], t[r]);
  else if ($e(t))
    for (var r in t)
      e[r] = zt(e[r], t[r]);
  return e;
}
function cn(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Fi = {}.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function G(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return {}.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(zi.apply(void 0, ue([Fi[e]], t, !1)).trim());
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
}(), et = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), Nt = 1, Ge = function(e) {
  if (et.has(e))
    return et.get(e);
  for (; at.has(Nt); )
    Nt++;
  var t = Nt++;
  if ({}.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1073741824))
    throw G(16, "".concat(t));
  return et.set(e, t), at.set(t, e), t;
}, ji = function(e, t) {
  et.set(e, t), at.set(t, e);
}, Vi = "style[".concat(he, "][").concat("data-styled-version", '="').concat("6.0.3", '"]'), Gi = new RegExp("^".concat(he, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Zi = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++)
    (r = o[i]) && e.registerName(t, r);
}, Yi = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(`/*!sc*/
`), o = [], i = 0, a = r.length; i < a; i++) {
    var c = r[i].trim();
    if (c) {
      var l = c.match(Gi);
      if (l) {
        var h = 0 | parseInt(l[1], 10), f = l[2];
        h !== 0 && (ji(f, h), Zi(e, f, l[3]), e.getTag().insertRules(h, o)), o.length = 0;
      } else
        o.push(c);
    }
  }
};
function qi() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var zr = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(c) {
    var l = Array.from(c.querySelectorAll("style[".concat(he, "]")));
    return l[l.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(he, "active"), r.setAttribute("data-styled-version", "6.0.3");
  var a = qi();
  return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
}, Xi = function() {
  function e(t) {
    this.element = zr(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
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
}(), Qi = function() {
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
}(), Fn = an, Ji = { isServer: !an, useCSSOMInjection: !ki }, Wr = function() {
  function e(t, n, r) {
    t === void 0 && (t = be), n === void 0 && (n = {});
    var o = this;
    this.options = L(L({}, Ji), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && an && Fn && (Fn = !1, function(i) {
      for (var a = document.querySelectorAll(Vi), c = 0, l = a.length; c < l; c++) {
        var h = a[c];
        h && h.getAttribute(he) !== "active" && (Yi(i, h), h.parentNode && h.parentNode.removeChild(h));
      }
    }(this)), cn(this, function() {
      return function(i) {
        for (var a = i.getTag(), c = a.length, l = "", h = function(s) {
          var _ = function(g) {
            return at.get(g);
          }(s);
          if (_ === void 0)
            return "continue";
          var p = i.names.get(_), d = a.getGroup(s);
          if (p === void 0 || d.length === 0)
            return "continue";
          var m = "".concat(he, ".g").concat(s, '[id="').concat(_, '"]'), k = "";
          p !== void 0 && p.forEach(function(g) {
            g.length > 0 && (k += "".concat(g, ","));
          }), l += "".concat(d).concat(m, '{content:"').concat(k, '"}').concat(`/*!sc*/
`);
        }, f = 0; f < c; f++)
          h(f);
        return l;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return Ge(t);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(L(L({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new Ki(o) : r ? new Xi(o) : new Qi(o);
    }(this.options), new Wi(t)));
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
}(), ea = /&/g, ta = /^\s*\/\/.*$/gm;
function jr(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = jr(n.children, t)), n;
  });
}
function na(e) {
  var t, n, r, o = e === void 0 ? be : e, i = o.options, a = i === void 0 ? be : i, c = o.plugins, l = c === void 0 ? mt : c, h = function(_, p, d) {
    return d === n || d.startsWith(n) && d.endsWith(n) && d.replaceAll(n, "").length > 0 ? ".".concat(t) : _;
  }, f = l.slice();
  f.push(function(_) {
    _.type === ft && _.value.includes("&") && (_.props[0] = _.props[0].replace(ea, n).replace(r, h));
  }), a.prefix && f.push($i), f.push(Ei);
  var s = function(_, p, d, m) {
    p === void 0 && (p = ""), d === void 0 && (d = ""), m === void 0 && (m = "&"), t = m, n = p, r = new RegExp("\\".concat(n, "\\b"), "g");
    var k = _.replace(ta, ""), g = Ci(d || p ? "".concat(d, " ").concat(p, " { ").concat(k, " }") : k);
    a.namespace && (g = jr(g, a.namespace));
    var S = [];
    return it(g, wi(f.concat(bi(function(w) {
      return S.push(w);
    })))), S;
  };
  return s.hash = l.length ? l.reduce(function(_, p) {
    return p.name || G(15), ae(_, p.name);
  }, 5381).toString() : "", s;
}
var ra = new Wr(), Wt = na(), Vr = fe.createContext({ shouldForwardProp: void 0, styleSheet: ra, stylis: Wt });
Vr.Consumer;
fe.createContext(void 0);
function zn() {
  return en(Vr);
}
var jt = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Wt);
      var a = r.name + i.hash;
      o.hasNameForId(r.id, a) || o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, cn(this, function() {
      throw G(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Wt), this.name + t.hash;
  }, e;
}(), oa = function(e) {
  return e >= "A" && e <= "Z";
};
function Wn(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-")
      return e;
    oa(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Gr = function(e) {
  return e == null || e === !1 || e === "";
}, Zr = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !Gr(i) && (Array.isArray(i) && i.isCss || _e(i) ? r.push("".concat(Wn(o), ":"), i, ";") : $e(i) ? r.push.apply(r, ue(ue(["".concat(o, " {")], Zr(i), !1), ["}"], !1)) : r.push("".concat(Wn(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in Ni || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function le(e, t, n, r) {
  if (Gr(e))
    return [];
  if (sn(e))
    return [".".concat(e.styledComponentId)];
  if (_e(e)) {
    if (!_e(i = e) || i.prototype && i.prototype.isReactComponent || !t)
      return [e];
    var o = e(t);
    return {}.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof jt || $e(o) || o === null || console.error("".concat(Mr(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), le(o, t, n, r);
  }
  var i;
  return e instanceof jt ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : $e(e) ? Zr(e) : Array.isArray(e) ? Array.prototype.concat.apply(mt, e.map(function(a) {
    return le(a, t, n, r);
  })) : [e.toString()];
}
function ia(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (_e(n) && !sn(n))
      return !1;
  }
  return !0;
}
var aa = Dr("6.0.3"), sa = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = {}.NODE_ENV === "production" && (r === void 0 || r.isStatic) && ia(t), this.componentId = n, this.baseHash = ae(aa, n), this.baseStyle = r, Wr.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash)
      if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId))
        o = se(o, this.staticRulesId);
      else {
        var i = Ft(le(this.rules, t, n, r)), a = Bt(ae(this.baseHash, i) >>> 0);
        if (!n.hasNameForId(this.componentId, a)) {
          var c = r(i, ".".concat(a), void 0, this.componentId);
          n.insertRules(this.componentId, a, c);
        }
        o = se(o, a), this.staticRulesId = a;
      }
    else {
      for (var l = ae(this.baseHash, r.hash), h = "", f = 0; f < this.rules.length; f++) {
        var s = this.rules[f];
        if (typeof s == "string")
          h += s, {}.NODE_ENV !== "production" && (l = ae(l, s));
        else if (s) {
          var _ = Ft(le(s, t, n, r));
          l = ae(l, _), h += _;
        }
      }
      if (h) {
        var p = Bt(l >>> 0);
        n.hasNameForId(this.componentId, p) || n.insertRules(this.componentId, p, r(h, ".".concat(p), void 0, this.componentId)), o = se(o, p);
      }
    }
    return o;
  }, e;
}(), Me = fe.createContext(void 0);
Me.Consumer;
function ca() {
  var e = en(Me);
  if (!e)
    throw G(18);
  return e;
}
function la(e) {
  var t = fe.useContext(Me), n = dt(function() {
    return function(r, o) {
      if (!r)
        throw G(14);
      if (_e(r)) {
        var i = r(o);
        if ({}.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object"))
          throw G(7);
        return i;
      }
      if (Array.isArray(r) || typeof r != "object")
        throw G(8);
      return o ? L(L({}, o), r) : r;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? fe.createElement(Me.Provider, { value: n }, e.children) : null;
}
var kt = {}, jn = /* @__PURE__ */ new Set();
function ua(e, t, n) {
  var r = sn(e), o = e, i = !$t(e), a = t.attrs, c = a === void 0 ? mt : a, l = t.componentId, h = l === void 0 ? function(b, $) {
    var v = typeof b != "string" ? "sc" : Pn(b);
    kt[v] = (kt[v] || 0) + 1;
    var C = "".concat(v, "-").concat(Pr("6.0.3" + v + kt[v]));
    return $ ? "".concat($, "-").concat(C) : C;
  }(t.displayName, t.parentComponentId) : l, f = t.displayName, s = f === void 0 ? function(b) {
    return $t(b) ? "styled.".concat(b) : "Styled(".concat(Mr(b), ")");
  }(e) : f, _ = t.displayName && t.componentId ? "".concat(Pn(t.displayName), "-").concat(t.componentId) : t.componentId || h, p = r && o.attrs ? o.attrs.concat(c).filter(Boolean) : c, d = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var m = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var k = t.shouldForwardProp;
      d = function(b, $) {
        return m(b, $) && k(b, $);
      };
    } else
      d = m;
  }
  var g = new sa(n, _, r ? o.componentStyle : void 0);
  function S(b, $) {
    return function(v, C, R) {
      var A = v.attrs, pe = v.componentStyle, to = v.defaultProps, no = v.foldedComponentIds, dn = v.styledComponentId, ro = v.target, oo = fe.useContext(Me), io = zn(), gt = v.shouldForwardProp || io.shouldForwardProp;
      ({}).NODE_ENV !== "production" && Lt(dn);
      var Q = function(Fe, Oe, ze) {
        for (var me, oe = L(L({}, Oe), { className: void 0, theme: ze }), Ct = 0; Ct < Fe.length; Ct += 1) {
          var We = _e(me = Fe[Ct]) ? me(oe) : me;
          for (var K in We)
            oe[K] = K === "className" ? se(oe[K], We[K]) : K === "style" ? L(L({}, oe[K]), We[K]) : We[K];
        }
        return Oe.className && (oe.className = se(oe.className, Oe.className)), oe;
      }(A, C, Oi(C, oo, to) || be), Be = Q.as || ro, Ie = {};
      for (var M in Q)
        Q[M] === void 0 || M[0] === "$" || M === "as" || M === "theme" || (M === "forwardedAs" ? Ie.as = Q.forwardedAs : gt && !gt(M, Be) || (Ie[M] = Q[M], gt || {}.NODE_ENV !== "development" || bo(M) || jn.has(M) || (jn.add(M), console.warn('styled-components: it looks like an unknown prop "'.concat(M, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var yt = function(Fe, Oe) {
        var ze = zn(), me = Fe.generateAndInjectStyles(Oe, ze.styleSheet, ze.stylis);
        return {}.NODE_ENV !== "production" && Lt(me), me;
      }(pe, Q);
      ({}).NODE_ENV !== "production" && v.warnTooManyClasses && v.warnTooManyClasses(yt);
      var vt = se(no, dn);
      return yt && (vt += " " + yt), Q.className && (vt += " " + Q.className), Ie[$t(Be) && !Rr.has(Be) ? "class" : "className"] = vt, Ie.ref = R, D(Be, Ie);
    }(w, b, $);
  }
  ({}).NODE_ENV !== "production" && (S.displayName = s);
  var w = fe.forwardRef(S);
  return w.attrs = p, w.componentStyle = g, w.shouldForwardProp = d, {}.NODE_ENV !== "production" && (w.displayName = s), w.foldedComponentIds = r ? se(o.foldedComponentIds, o.styledComponentId) : "", w.styledComponentId = _, w.target = r ? o.target : e, Object.defineProperty(w, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(b) {
    this._foldedDefaultProps = r ? function($) {
      for (var v = [], C = 1; C < arguments.length; C++)
        v[C - 1] = arguments[C];
      for (var R = 0, A = v; R < A.length; R++)
        zt($, A[R], !0);
      return $;
    }({}, o.defaultProps, b) : b;
  } }), {}.NODE_ENV !== "production" && (Ii(s, _), w.warnTooManyClasses = function(b, $) {
    var v = {}, C = !1;
    return function(R) {
      if (!C && (v[R] = !0, Object.keys(v).length >= 200)) {
        var A = $ ? ' with the id of "'.concat($, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(b).concat(A, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), C = !0, v = {};
      }
    };
  }(s, _)), cn(w, function() {
    return ".".concat(w.styledComponentId);
  }), i && Fr(w, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), w;
}
function Vn(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var Gn = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function ln(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  if (_e(e) || $e(e)) {
    var r = e;
    return Gn(le(Vn(mt, ue([r], t, !0))));
  }
  var o = e;
  return t.length === 0 && o.length === 1 && typeof o[0] == "string" ? le(o) : Gn(le(Vn(o, t)));
}
function Vt(e, t, n) {
  if (n === void 0 && (n = be), !t)
    throw G(1, t);
  var r = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++)
      i[a - 1] = arguments[a];
    return e(t, n, ln.apply(void 0, ue([o], i, !1)));
  };
  return r.attrs = function(o) {
    return Vt(e, t, L(L({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Vt(e, t, L(L({}, n), o));
  }, r;
}
var Yr = function(e) {
  return Vt(ua, e);
}, P = Yr;
Rr.forEach(function(e) {
  P[e] = Yr(e);
});
function re(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  ({}).NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = Ft(ln.apply(void 0, ue([e], t, !1))), o = Pr(r);
  return new jt(o, r);
}
({}).NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Ze = "__sc-".concat(he, "__");
({}).NODE_ENV !== "production" && {}.NODE_ENV !== "test" && typeof window < "u" && (window[Ze] || (window[Ze] = 0), window[Ze] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Ze] += 1);
var da = 0;
function u(e, t, n, r, o, i) {
  var a, c, l = {};
  for (c in t)
    c == "ref" ? a = t[c] : l[c] = t[c];
  var h = { type: e, props: l, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --da, __source: o, __self: i };
  if (typeof e == "function" && (a = e.defaultProps))
    for (c in a)
      l[c] === void 0 && (l[c] = a[c]);
  return y.vnode && y.vnode(h), h;
}
const qr = ({
  svgSize: e
}) => u("svg", {
  fill: "none",
  height: e,
  viewBox: "0 0 16 14",
  width: e,
  xmlns: "http://www.w3.org/2000/svg",
  children: u("path", {
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
}, Zn = 0.24, fa = 24, ha = 2, It = 14, Yn = 5, qn = 0.027;
var Y = /* @__PURE__ */ ((e) => (e[e.S = 300] = "S", e[e.M = 400] = "M", e[e.L = 500] = "L", e[e.Default = 600] = "Default", e))(Y || {});
const xe = {
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
}, _a = {
  [B.CANDIDATE_SELECTION]: "Stay still…",
  [B.FACE_TOO_CLOSE]: "Move back",
  [B.FACE_TOO_FAR]: "Move closer",
  [B.FACE_CENTERING]: "Center your face",
  [B.FACE_NOT_PRESENT]: "Position your face into the circle",
  [B.SHARPNESS_TOO_LOW]: "Turn face against light",
  [B.BRIGHTNESS_TOO_LOW]: "Turn face against light",
  [B.BRIGHTNESS_TOO_HIGH]: "Less light needed",
  [B.DEVICE_TILTED]: "Hold your phone at eye level"
}, pa = {
  ..._a,
  [ve.SMILE]: "Smile :)",
  [ve.SMILE_CANDIDATE_SELECTION]: "Smile :)"
}, ma = "rgba(19, 19, 19, 0.5)", ga = 34, Xr = (e) => e ? e.width < e.height ? Math.max(It, Yn + e.width * qn) : Math.max(It, Yn + e.height * qn) : It, ya = (e) => e > Y.Default ? xe[Y.Default] : e > Y.L ? xe[Y.L] : e > Y.M ? xe[Y.M] : xe[Y.S], va = (e) => e ? ya(e.width) : xe[Y.Default], Ca = P.div`
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
`, Sa = P.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, Ea = P.p`
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
`, Gt = ({
  fontSize: e,
  Icon: t,
  isCameraReady: n,
  position: r = "absolute",
  text: o
}) => u(Ca, {
  $isCameraReady: n,
  $position: r,
  children: u(Sa, {
    children: [t ? u(t, {
      svgSize: e * 2
    }) : null, u(Ea, {
      $fontSize: e,
      children: o
    })]
  })
}), Qr = ({
  fontSize: e,
  text: t = "An unknown error has occurred"
}) => u(Gt, {
  fontSize: e,
  Icon: qr,
  position: "relative",
  text: t
});
class wa extends F {
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
    return this.state.hasError ? u(Qr, {
      fontSize: Xr(this.props.videoElementSize),
      Icon: qr,
      isCameraReady: !1
    }) : this.props.children;
  }
}
const ba = ({
  children: e,
  theme: t,
  videoElementSize: n
}) => u(la, {
  theme: t,
  children: u(wa, {
    videoElementSize: n,
    children: e
  })
}), He = (e, t) => {
  const n = ut(t);
  de(() => {
    n.current = t;
  }, [t]), de(
    () => {
      const r = (o) => n.current(o);
      return document.addEventListener(e, r), () => {
        document.removeEventListener(e, r);
      };
    },
    [e]
    // Re-run if eventName
  );
}, $a = (e) => {
  const [t, n] = H(), r = Se((o) => {
    var i;
    n((i = o.detail) == null ? void 0 : i.size);
  }, [n]);
  return He(e, r), t;
}, Na = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, Ot = {
  colors: Na
}, ka = (e) => e != null && e.theme ? {
  ...Ot,
  ...e.theme,
  colors: {
    ...Ot.colors,
    ...e.theme.colors
  }
} : Ot;
const Ia = 0.75, un = (e, t) => {
  document.dispatchEvent(new CustomEvent(e, {
    detail: t
  }));
}, st = class st {
  constructor() {
    je(this, "lastDetails", {});
    je(this, "delayedTime", 0);
  }
  static getInstance() {
    return this._instance || (this._instance = new st()), this._instance;
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
    this.isDetailChanged(t, n) && un(t, n);
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
je(st, "_instance");
let Zt = st;
Zt.getInstance();
const Qn = (e, t) => {
  un(e, {
    instruction: t
  });
}, Oa = (e) => {
  un(e, {
    animationEnd: !0
  });
}, Le = (e, t) => Math.hypot(t.x - e.x, t.y - e.y), Kn = (e, t, n) => {
  const r = (t.x - e.x) * n, o = (t.y - e.y) * n;
  return {
    x: e.x + r,
    y: e.y + o
  };
}, Jn = (e, t, n, r) => {
  const o = Le(e, t);
  return n * r / o;
}, Aa = (e, t) => Math.min(e, t), Ta = ({
  height: e,
  width: t
}) => {
  const n = Aa(t, e) * Ia, r = (t - n) / 2, o = (e - n) / 2;
  return {
    shiftX: r,
    shiftY: o,
    width: n,
    height: n
  };
}, xa = (e) => {
  const {
    height: t,
    shiftX: n,
    shiftY: r,
    width: o
  } = Ta(e);
  return {
    shiftX: n / e.width,
    shiftY: r / e.height,
    width: o / e.width,
    height: t / e.height
  };
};
class La {
  static async getVideoInputDeviceList() {
    return (await navigator.mediaDevices.enumerateDevices()).filter((n) => n.kind === "videoinput");
  }
}
const Ra = () => {
  const [e, t] = H(!1);
  return de(() => {
    (async () => {
      (await La.getVideoInputDeviceList()).length > 1 && t(!0);
    })();
  }, []), e;
}, Da = ({
  size: e
}) => u("svg", {
  fill: "none",
  height: e,
  viewBox: "0 0 52 52",
  width: e,
  xmlns: "http://www.w3.org/2000/svg",
  children: [u("path", {
    d: "M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z",
    fill: "#131313",
    fillOpacity: "0.3"
  }), u("circle", {
    cx: "17.5",
    cy: "24.5",
    fill: "white",
    r: "1.5"
  }), u("path", {
    d: "M15 17H16C19.5 17 23 21 23 29C22.5 29 21.5 29 20 29C20 29 20.25 33 19.5 34.5C18.75 36 16 36 16 36H15",
    stroke: "white",
    strokeWidth: "2"
  }), u("circle", {
    fill: "white",
    r: "1.5",
    transform: "matrix(-1 0 0 1 34.5 24.5)"
  }), u("path", {
    d: "M37 17H36C32.5 17 29 21 29 29C29.5 29 30.5 29 32 29C32 29 31.75 33 32.5 34.5C33.25 36 36 36 36 36H37",
    stroke: "white",
    strokeWidth: "2"
  })]
}), Pa = ({
  size: e
}) => u("svg", {
  fill: "none",
  height: e,
  viewBox: "0 0 52 52",
  width: "52",
  xmlns: "http://www.w3.org/2000/svg",
  children: [u("circle", {
    cx: "26",
    cy: "26",
    fill: "#131313",
    fillOpacity: "0.3",
    r: "26"
  }), u("path", {
    d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
    fill: "white"
  })]
}), Kr = P.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(e) => e.$marginLeft ? `${e.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, Ma = ({
  marginLeft: e,
  size: t,
  ...n
}) => u(Kr, {
  $marginLeft: e,
  ...n,
  children: u(Da, {
    size: t
  })
}), Ha = ({
  marginLeft: e,
  size: t,
  ...n
}) => u(Kr, {
  $marginLeft: e,
  ...n,
  children: u(Pa, {
    size: t
  })
}), Ua = P.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.$padding}px`};
  z-index: 2;
`, Ba = ({
  customControlEvent: e,
  videoElementSize: t
}) => {
  const n = Ra(), {
    buttonPadding: r,
    iconSize: o,
    marginLeft: i
  } = va(t), a = () => {
    Qn(e, xt.TOGGLE_MIRROR);
  };
  return u(Ua, {
    $padding: r,
    children: [n && u(Ha, {
      onClick: () => {
        Qn(e, xt.SWITCH_CAMERA);
      },
      size: o
    }), u(Ma, {
      marginLeft: n ? i : 0,
      onClick: a,
      size: o
    })]
  });
}, Fa = "2.5s", za = "0.3s", Wa = "linear", ja = re`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
re`
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`;
re`
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
re`
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
const Va = P.div`
  position: absolute;
  left: 50%;

  ${(e) => e.$cssTop ? `top: ${e.$cssTop}%;` : ""}
  ${(e) => e.$cssBottom ? `bottom: ${e.$cssBottom}%;` : ""}
    ${(e) => e.$isAnimating && ln`
      animation: ${ja} ${za}
        ${Wa} both;
      animation-delay: ${Fa};

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
`, Ga = P.div`
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
`, Za = ({
  children: e,
  cssBottom: t,
  cssTop: n,
  fontSize: r,
  isAnimating: o,
  isInCandidateSelection: i,
  isPortrait: a
}) => u(Va, {
  $cssBottom: t,
  $cssTop: n,
  $isAnimating: o,
  $isPortrait: a,
  children: u(Ga, {
    $fontSize: r,
    $isInCandidateSelection: i,
    $wrap: e.length > ga,
    children: e
  })
}), Ya = () => u("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: u("path", {
    d: "M2 240C2 108.556 108.556 2 240 2C371.444 2 478 108.556 478 240C478 371.444 371.444 478 240 478C108.556 478 2 371.444 2 240Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  })
}), qa = () => u("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: u("path", {
    d: "M38.9231 240C38.9231 108.23 129.248 2 240 2C350.752 2 441.077 108.23 441.077 240C441.077 371.77 350.752 478 240 478C129.248 478 38.9231 371.77 38.9231 240Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  })
}), Xa = () => u("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: u("path", {
    clipRule: "evenodd",
    d: "M123.592 81.0326C143.203 50.4946 180.289 34 240 34C299.711 34 336.797 50.4946 356.408 81.0326C375.742 111.138 377.681 154.313 368.661 207.051C371.545 208.577 374.834 210.748 377.278 215.028C380.075 219.925 381.612 227.297 380.77 239.048C379.202 260.93 372.883 270.75 366.157 276.198C363.521 278.333 360.842 279.765 358.659 280.932C358.141 281.209 357.651 281.471 357.196 281.724C354.727 283.097 353.459 284.114 352.94 285.588C346.115 312.745 335.656 325.235 326.992 335.581C325.711 337.111 324.469 338.595 323.283 340.072C318.736 345.738 315.077 351.244 313.058 359.018C311.036 366.806 310.62 377.042 312.887 392.189C323.28 427.534 349.601 445.607 379.548 458.155C380.567 458.582 381.047 459.754 380.62 460.773C380.193 461.792 379.021 462.271 378.002 461.845C347.548 449.083 319.871 430.304 309.01 393.182L308.972 393.052L308.952 392.918C306.617 377.396 306.974 366.534 309.187 358.012C311.409 349.454 315.459 343.431 320.164 337.568C321.377 336.057 322.636 334.552 323.926 333.011C332.525 322.737 342.484 310.837 349.08 284.533L349.099 284.458L349.124 284.385C350.161 281.284 352.747 279.621 355.253 278.228C355.794 277.927 356.344 277.632 356.902 277.333C359.061 276.176 361.329 274.961 363.639 273.09C369.248 268.547 375.264 259.921 376.78 238.762C377.594 227.404 376.048 220.94 373.805 217.012C371.594 213.141 368.56 211.453 365.547 209.952L364.214 209.287L364.469 207.818C373.737 154.637 371.701 112.248 353.043 83.194C334.485 54.2962 299.065 38 240 38C180.935 38 145.516 54.2962 126.958 83.194C108.3 112.248 106.264 154.637 115.531 207.818L115.787 209.287L114.453 209.952C111.441 211.453 108.406 213.141 106.196 217.012C103.953 220.94 102.406 227.404 103.22 238.762C104.736 259.921 110.753 268.547 116.361 273.09C118.672 274.961 120.94 276.176 123.099 277.333C123.656 277.632 124.206 277.927 124.748 278.228C127.254 279.621 129.84 281.284 130.877 284.385L130.901 284.458L130.92 284.533C137.517 310.837 147.476 322.737 156.074 333.011C157.364 334.552 158.624 336.057 159.837 337.568C164.542 343.431 168.592 349.454 170.814 358.012C173.026 366.534 173.384 377.396 171.048 392.918L171.028 393.052L170.99 393.182C160.129 430.304 132.452 449.083 101.998 461.845C100.979 462.271 99.8075 461.792 99.3806 460.773C98.9537 459.754 99.4335 458.582 100.452 458.155C130.399 445.607 156.721 427.534 167.113 392.189C169.381 377.042 168.964 366.806 166.942 359.018C164.924 351.244 161.264 345.738 156.717 340.072C155.532 338.595 154.29 337.111 153.008 335.581C144.345 325.235 133.886 312.745 127.061 285.588C126.541 284.114 125.273 283.097 122.804 281.724C122.349 281.471 121.859 281.209 121.341 280.932C119.159 279.765 116.479 278.333 113.844 276.198C107.117 270.75 100.798 260.93 99.2303 239.048C98.3883 227.297 99.9259 219.925 102.722 215.028C105.166 210.748 108.455 208.577 111.339 207.051C102.319 154.313 104.259 111.138 123.592 81.0326Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })
}), Qa = () => u("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: u("rect", {
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
}), Ka = () => u("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: u("rect", {
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
}), Ja = () => u("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: u("rect", {
    height: "476",
    rx: "14",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4",
    width: "476",
    x: "2",
    y: "2"
  })
}), es = () => u("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: u("rect", {
    height: "476",
    rx: "2",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4",
    width: "476",
    x: "2",
    y: "2"
  })
}), ts = () => u("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: u("path", {
    clipRule: "evenodd",
    d: "M126.126 87.8654C147.739 56.7835 184.591 34.0001 239.665 34.0001C239.779 34.0001 239.891 34.0096 240 34.0279C240.109 34.0096 240.221 34.0001 240.335 34.0001C295.41 34.0001 332.261 56.7835 353.874 87.8654C375.428 118.862 381.724 157.957 376.086 190.544C373.539 205.262 371.039 233.823 376.056 253.971C380.828 273.135 387.879 290.154 393.431 303.54L393.491 303.685C396.23 310.287 398.627 316.064 400.16 320.726C400.933 323.077 401.511 325.214 401.797 327.079C402.073 328.879 402.11 330.618 401.637 332.107C399.79 339.478 396.615 344.943 392.398 348.881C388.174 352.825 383.031 355.122 377.446 356.355C366.388 358.799 353.231 357.133 341.237 355.551C340.93 355.51 340.623 355.47 340.317 355.43C334.586 354.672 329.126 353.951 324.151 353.668C318.894 353.368 314.374 353.574 310.799 354.649C307.298 355.702 304.789 357.558 303.304 360.596C301.785 363.704 301.203 368.322 302.207 375.153C309.297 399.432 323.779 413.44 341.432 422.745C356.457 430.665 373.692 435.144 390.741 439.575C393.916 440.401 397.085 441.224 400.232 442.068C401.298 442.354 401.931 443.451 401.645 444.518C401.359 445.585 400.262 446.218 399.196 445.932C396.115 445.106 392.991 444.294 389.842 443.477C372.804 439.052 355.041 434.44 339.567 426.283C321.093 416.546 305.757 401.713 298.328 376.139L298.29 376.01L298.271 375.877C297.181 368.587 297.678 362.998 299.71 358.839C301.787 354.59 305.326 352.119 309.647 350.819C313.895 349.541 318.973 349.366 324.378 349.674C329.508 349.966 335.107 350.706 340.788 351.457C341.112 351.5 341.436 351.543 341.76 351.585C353.925 353.19 366.342 354.713 376.583 352.45C381.65 351.33 386.088 349.3 389.668 345.957C393.241 342.621 396.083 337.86 397.773 331.072L397.791 330.998L397.815 330.925C398.022 330.302 398.087 329.272 397.843 327.686C397.605 326.133 397.102 324.232 396.36 321.976C394.875 317.458 392.525 311.794 389.74 305.081L389.737 305.073C384.19 291.701 377.028 274.428 372.174 254.937C366.952 233.964 369.571 204.733 372.144 189.862C377.623 158.197 371.48 120.191 350.59 90.149C329.759 60.1924 294.162 38.0001 240.335 38.0001C240.221 38.0001 240.109 37.9905 240 37.9722C239.891 37.9905 239.779 38.0001 239.665 38.0001C185.838 38.0001 150.241 60.1924 129.41 90.149C108.52 120.191 102.377 158.197 107.856 189.862C110.429 204.733 113.048 233.964 107.826 254.937C102.972 274.428 95.8101 291.701 90.2633 305.073L90.2607 305.079C87.4756 311.793 85.1256 317.458 83.6398 321.976C82.8977 324.232 82.3951 326.133 82.1567 327.686C81.9133 329.272 81.9778 330.302 82.1847 330.925L82.2088 330.998L82.2273 331.072C83.9176 337.86 86.7592 342.621 90.3324 345.957C93.9121 349.3 98.3505 351.33 103.417 352.45C113.658 354.713 126.075 353.19 138.24 351.585C138.564 351.543 138.888 351.5 139.212 351.457C144.893 350.706 150.492 349.966 155.622 349.674C161.027 349.366 166.105 349.541 170.353 350.819C174.674 352.119 178.213 354.59 180.29 358.839C182.323 362.998 182.819 368.587 181.73 375.877L181.71 376.01L181.672 376.139C174.243 401.713 158.907 416.546 140.433 426.283C124.959 434.44 107.196 439.052 90.1584 443.477C87.0093 444.294 83.8851 445.106 80.8046 445.932C79.7377 446.218 78.6409 445.585 78.3548 444.518C78.0687 443.451 78.7017 442.354 79.7685 442.068C82.9154 441.224 86.0842 440.401 89.2594 439.575C106.308 435.144 123.543 430.665 138.568 422.745C156.221 413.44 170.703 399.432 177.793 375.153C178.797 368.322 178.215 363.704 176.696 360.596C175.211 357.558 172.702 355.702 169.201 354.649C165.626 353.574 161.106 353.368 155.849 353.668C150.874 353.951 145.414 354.672 139.683 355.43C139.377 355.47 139.07 355.51 138.763 355.551C126.769 357.133 113.613 358.799 102.554 356.355C96.9695 355.122 91.8259 352.825 87.6024 348.881C83.3855 344.943 80.2095 339.478 78.3628 332.107C77.8896 330.618 77.9268 328.879 78.203 327.079C78.4892 325.214 79.0667 323.077 79.84 320.726C81.3732 316.064 83.7701 310.286 86.5089 303.684L86.5686 303.54C92.1215 290.154 99.1722 273.135 103.944 253.971C108.961 233.823 106.461 205.262 103.914 190.544C98.2759 157.957 104.572 118.862 126.126 87.8654Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })
}), ns = P.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`, Jr = ({
  backdropColor: e,
  children: t
}) => u(ns, {
  children: u("svg", {
    height: "100%",
    width: "100%",
    children: [u("defs", {
      children: u("mask", {
        id: "mask",
        children: [u("rect", {
          fill: "#fff",
          height: "100%",
          width: "100%"
        }), t]
      })
    }), u("rect", {
      fill: e,
      height: "100%",
      mask: "url(#mask)",
      width: "100%"
    })]
  })
}), rs = P.div`
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
`, os = ({
  children: e,
  isInCandidateSelection: t,
  placeholderRectangle: n
}) => u(rs, {
  $isInCandidateSelection: t,
  $placeholderRectangle: n,
  children: e
}), is = {
  [j.CIRCLE_SOLID]: u(Ya, {}),
  [j.ELLIPSE_SOLID]: u(qa, {}),
  [j.MAN_SOLID]: u(Xa, {}),
  [j.WOMAN_SOLID]: u(ts, {}),
  [j.SQUARE_ROUNDED_DASH]: u(Ka, {}),
  [j.SQUARE_ROUNDED_SOLID]: u(Ja, {}),
  [j.SQUARE_DASH]: u(Qa, {}),
  [j.SQUARE_SOLID]: u(es, {})
}, as = ({
  backdropColor: e,
  icon: t,
  isBackdrop: n,
  placeholderRectangle: r,
  ...o
}) => u(W, {
  children: [n && u(Jr, {
    backdropColor: e,
    children: u("rect", {
      fill: "#000",
      height: `${r.height * 100}%`,
      rx: "50%",
      width: `${r.width * 100}%`,
      x: `${r.shiftX * 100}%`,
      y: `${r.shiftY * 100}%`
    })
  }), u(os, {
    placeholderRectangle: r,
    ...o,
    children: is[t]
  })]
}), ss = P.canvas`
  transform: ${(e) => e.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, cs = (e) => {
  const {
    bottomLeft: t,
    bottomRight: n,
    topLeft: r,
    topRight: o
  } = e, i = Le(r, o), a = Le(o, n), c = Le(t, n), l = Le(r, t);
  return Math.min(i, a, c, l);
}, ls = (e) => {
  const t = e.getContext("2d");
  t && t.clearRect(0, 0, t.canvas.width, t.canvas.height);
}, us = ({
  cameraResolution: e,
  isImageMirror: t
}) => {
  const n = ut(null), r = ca(), [o, i] = H(), a = Se((c) => {
    var l;
    i((l = c == null ? void 0 : c.detail) == null ? void 0 : l.detectedObject);
  }, [i]);
  return He(gr.DETECTED_DOCUMENT_CHANGED, a), de(() => {
    if (!n.current)
      return;
    const c = (h, f, s, _) => {
      var S;
      const p = Jn(f, h, _, Zn), d = Jn(f, s, _, Zn), m = Kn(f, h, p), k = Kn(f, s, d), g = (S = n == null ? void 0 : n.current) == null ? void 0 : S.getContext("2d");
      g && (g.beginPath(), g.lineWidth = ha, g.strokeStyle = r.colors.placeholderColor, g.moveTo(m.x, m.y), g.arcTo(f.x, f.y, k.x, k.y, fa), g.lineTo(k.x, k.y), g.stroke());
    }, l = (h) => {
      if (!h)
        return;
      const {
        bottomLeft: f,
        bottomRight: s,
        topLeft: _,
        topRight: p
      } = h, d = cs(h);
      c(f, _, p, d), c(_, p, s, d), c(p, s, f, d), c(s, f, _, d);
    };
    n.current.width = e.width, n.current.height = e.height, ls(n.current), l(o);
  }, [e, o, r.colors.placeholderColor]), u(ss, {
    ref: n,
    $isImageMirror: t
  });
}, ds = () => {
  const [e, t] = H(), [n, r] = H(!1), o = Se((l) => {
    var f, s;
    t((f = l == null ? void 0 : l.detail) == null ? void 0 : f.cameraResolution);
    const h = (s = l == null ? void 0 : l.detail) == null ? void 0 : s.isMirroring;
    h !== void 0 && r(h);
  }, [t]);
  He(Pe.CAMERA_PROPS_CHANGED, o);
  const [i, a] = H(
    B.FACE_NOT_PRESENT
    // FIXME Default instruction should not be here
  ), c = Se((l) => {
    var h;
    a((h = l == null ? void 0 : l.detail) == null ? void 0 : h.instructionCode);
  }, [a]);
  return He(Pe.INSTRUCTION_CHANGED, c), {
    cameraResolution: e,
    instructionCode: i,
    isMirroring: n
  };
}, fs = () => {
  const [e, t] = H(ot.NEUTRAL), [n, r] = H(ee.LOADING), [o, i] = H(), a = Se((c) => {
    const {
      error: l,
      phase: h,
      state: f
    } = c.detail || {};
    h && t(h), f && r(f), l && i(l);
  }, [t, r, i]);
  return He(Jt.STATUS_CHANGED, a), {
    smilePhase: e,
    smileState: n,
    smileError: o
  };
}, er = ".3s", hs = ".2s", _s = ".8s", tr = ".4s", nr = ".4s", ps = ".5s", ms = "1.5s", gs = 2e3, rr = re`
0%, 100% {
    transform: scale(1);
}
50% {
    transform: scale(2);
}
`, eo = re`
0%, 100% {
    transform: scale(1,1);
    opacity: 1;
}
50% {
    transform: scale(1,0.1);
    opacity: 0.5;
}
`, or = re`
0% {
    stroke-dashoffset: 100;
}
100% {
    stroke-dashoffset: 200;
}
`, ys = re`
 from {
    opacity: 1;
}
to {
    opacity: 0;
}
`, vs = (e, t) => {
  const [n, r] = H(!1);
  return de(() => {
    t === ot.SMILE && r(!0);
    const o = setTimeout(() => {
      r(!1);
    }, gs);
    return () => clearTimeout(o);
  }, [t]), t === ot.SMILE && e === ve.CANDIDATE_SELECTION ? ve.SMILE_CANDIDATE_SELECTION : n ? ve.SMILE : e;
}, Cs = P.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, Ss = ({
  svgSize: e
}) => u(Cs, {
  children: u("svg", {
    fill: "none",
    height: e,
    viewBox: "0 0 48 48",
    width: e,
    xmlns: "http://www.w3.org/2000/svg",
    children: [u("path", {
      d: "M30.9229 9.75026C30.9229 12.3736 28.7533 14.5002 26.0767 14.5002C23.4003 14.5002 21.2307 12.3736 21.2307 9.75026C21.2307 7.12664 23.4003 5 26.0767 5C28.7533 5 30.9229 7.12664 30.9229 9.75026Z",
      fill: "currentColor"
    }), u("path", {
      d: "M40.6155 15.8556C40.6155 18.1044 38.7559 19.9273 36.4618 19.9273C34.1675 19.9273 32.3079 18.1044 32.3079 15.8556C32.3079 13.607 34.1675 11.7842 36.4618 11.7842C38.7559 11.7842 40.6155 13.607 40.6155 15.8556Z",
      fill: "currentColor"
    }), u("path", {
      d: "M42 27.3921C42 29.2659 40.4502 30.785 38.5386 30.785C36.6267 30.785 35.0769 29.2659 35.0769 27.3921C35.0769 25.5181 36.6267 23.999 38.5386 23.999C40.4502 23.999 42 25.5181 42 27.3921Z",
      fill: "currentColor"
    }), u("path", {
      d: "M35.0766 37.5712C35.0766 39.0704 33.837 40.2858 32.3075 40.2858C30.7779 40.2858 29.5383 39.0704 29.5383 37.5712C29.5383 36.0723 30.7779 34.8569 32.3075 34.8569C33.837 34.8569 35.0766 36.0723 35.0766 37.5712Z",
      fill: "currentColor"
    }), u("path", {
      d: "M22.6154 40.2858C22.6154 41.7848 21.3756 43.0001 19.846 43.0001C18.3168 43.0001 17.0769 41.7848 17.0769 40.2858C17.0769 38.7866 18.3168 37.5713 19.846 37.5713C21.3756 37.5713 22.6154 38.7866 22.6154 40.2858Z",
      fill: "currentColor"
    }), u("path", {
      d: "M11.5382 32.8216C11.5382 33.9457 10.6085 34.8573 9.46137 34.8573C8.31426 34.8573 7.38452 33.9457 7.38452 32.8216C7.38452 31.6972 8.31426 30.7856 9.46137 30.7856C10.6085 30.7856 11.5382 31.6972 11.5382 32.8216Z",
      fill: "currentColor"
    }), u("path", {
      d: "M8.76913 21.2849C8.76913 22.0345 8.14932 22.642 7.38456 22.642C6.6198 22.642 6 22.0345 6 21.2849C6 20.5353 6.61981 19.9277 7.38456 19.9277C8.14933 19.9277 8.76913 20.5353 8.76913 21.2849Z",
      fill: "currentColor"
    }), u("path", {
      d: "M15.6927 11.7844C15.6927 12.534 15.0729 13.1415 14.3081 13.1415C13.5434 13.1415 12.9236 12.534 12.9236 11.7844C12.9236 11.0348 13.5434 10.4272 14.3081 10.4272C15.0729 10.4272 15.6927 11.0348 15.6927 11.7844Z",
      fill: "currentColor"
    })]
  })
}), Es = ({
  backdropColor: e,
  fontSize: t,
  smileState: n,
  smileStateInstructions: r
}) => {
  const o = n === ee.ERROR;
  return !n || o || !r[n].visible ? null : n === ee.DONE ? u(W, {
    children: [u(Jr, {
      backdropColor: e
    }), u(Gt, {
      fontSize: t,
      isCameraReady: !0,
      text: r[n].text
    })]
  }) : u(Gt, {
    fontSize: t,
    Icon: Ss,
    isCameraReady: !0,
    text: r[n].text
  });
}, ws = P.div`
  position: absolute;
  top: ${(e) => e.$initialPosition.shiftY * 100}%;
  bottom: ${(e) => (1 - e.$initialPosition.shiftY - e.$initialPosition.height) * 100}%;
  left: ${(e) => e.$initialPosition.shiftX * 100}%;
  right: ${(e) => (1 - e.$initialPosition.shiftX - e.$initialPosition.width) * 100}%;
  animation: ${ys} ${ps} ${ms} ease-in-out;
  animation-fill-mode: forwards;

  #left-mouth {
    fill: none;
    stroke: #ffffff;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: ${or} ${tr} ${nr} forwards;
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
    animation: ${or} ${tr} ${nr} forwards;
  }
  #left-eye {
    transform-origin: 86.8px 96px;
    fill: #ffffff;
    animation: ${rr} ${er} forwards;
  }
  #right-eye {
    transform-origin: 173.2px 96px;
    fill: #ffffff;
    animation:
      ${rr} ${er} forwards,
      ${eo} ${hs} ${_s} forwards;
  }
`, bs = ({
  handleEyeBlinkAnimationEnd: e,
  initialPosition: t
}) => u(ws, {
  $initialPosition: t,
  onAnimationEnd: (r) => {
    eo.name === r.animationName && e();
  },
  children: u("svg", {
    viewBox: "0 0 260 260",
    children: [u("circle", {
      cx: "86.8",
      cy: "96",
      id: "left-eye",
      r: "9.6"
    }), u("circle", {
      cx: "173.2",
      cy: "96",
      id: "right-eye",
      r: "9.6"
    }), u("path", {
      d: "M62.8,156.3c0,0,20.4,35.4,66.6,35.4",
      id: "left-mouth"
    }), u("path", {
      d: "M42.8,156.3c0,0,20.4,35.4,66.6,35.4",
      id: "right-mouth"
    })]
  })
}), $s = ({
  backdropColor: e,
  instructions: t,
  placeholderIcon: n,
  showCameraButtons: r,
  smileStateInstructions: o,
  videoElementSize: i
}) => {
  const {
    cameraResolution: a,
    instructionCode: c,
    isMirroring: l
  } = ds(), h = Xr(i), {
    smileError: f,
    smilePhase: s,
    smileState: _
  } = fs(), p = vs(c, s), d = c === ve.CANDIDATE_SELECTION, m = n === j.CIRCLE_SOLID, k = s === ot.SMILE;
  if (_ === ee.ERROR)
    return u(Qr, {
      fontSize: h,
      text: f == null ? void 0 : f.message
    });
  if ((_ === ee.RUNNING || _ === ee.WAITING) && a) {
    const g = xa(a);
    return u(W, {
      children: [!k && u(us, {
        cameraResolution: a,
        isImageMirror: l
      }), u(as, {
        backdropColor: e,
        icon: n,
        isBackdrop: m,
        isInCandidateSelection: d,
        placeholderRectangle: g
      }), k && u(bs, {
        handleEyeBlinkAnimationEnd: () => {
          Oa(Jt.ANIMATION_END);
        },
        initialPosition: g
      }), p && u(Za, {
        cssBottom: (g.height + g.shiftY) * 100,
        fontSize: h,
        isAnimating: !1,
        isInCandidateSelection: d,
        isPortrait: a.width < a.height,
        children: t[p]
      }), r && u(Ba, {
        customControlEvent: Pe.CONTROL,
        videoElementSize: i
      })]
    });
  }
  return u(Es, {
    backdropColor: e,
    fontSize: h,
    smileState: _,
    smileStateInstructions: o
  });
}, Ns = (e) => {
  var i, a;
  const t = {
    ...pa,
    ...e == null ? void 0 : e.instructions
  }, n = {
    [ee.LOADING]: {
      ...Xn.loading,
      ...(i = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : i.loading
    },
    [ee.DONE]: {
      ...Xn.done,
      ...(a = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : a.done
    }
  }, r = (e == null ? void 0 : e.backdropColor) ?? ma, o = (e == null ? void 0 : e.showCameraButtons) ?? !1;
  return {
    backdropColor: r,
    smileInstructions: t,
    smileStateInstructions: n,
    showCameraButtons: o
  };
}, ks = ({
  props: e
}) => {
  const {
    backdropColor: t,
    showCameraButtons: n,
    smileInstructions: r,
    smileStateInstructions: o
  } = Ns(e), i = $a(Pe.VIDEO_ELEMENT_SIZE), a = ka(e);
  return u(ba, {
    theme: a,
    videoElementSize: i,
    children: u($s, {
      backdropColor: t,
      instructions: r,
      placeholderIcon: j.CIRCLE_SOLID,
      showCameraButtons: n,
      smileStateInstructions: o,
      videoElementSize: i
    })
  });
};
Co(ks, "x-dot-smile-liveness-ui", ["props"]);
