var Kr = Object.defineProperty;
var Jr = (t, e, n) => e in t ? Kr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Ut = (t, e, n) => (Jr(t, typeof e != "symbol" ? e + "" : e, n), n);
var At, g, Kn, ot, cn, Jn, xe, Qn, gt = {}, tr = [], Qr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ie = Array.isArray;
function X(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function er(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function R(t, e, n) {
  var r, o, i, s = {};
  for (i in e)
    i == "key" ? r = e[i] : i == "ref" ? o = e[i] : s[i] = e[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? At.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (i in t.defaultProps)
      s[i] === void 0 && (s[i] = t.defaultProps[i]);
  return Dt(t, s, r, o, null);
}
function Dt(t, e, n, r, o) {
  var i = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o ?? ++Kn };
  return o == null && g.vnode != null && g.vnode(i), i;
}
function to() {
  return { current: null };
}
function U(t) {
  return t.children;
}
function H(t, e) {
  this.props = t, this.context = e;
}
function Qt(t, e) {
  if (e == null)
    return t.__ ? Qt(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Qt(t) : null;
}
function nr(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return nr(t);
  }
}
function Ne(t) {
  (!t.__d && (t.__d = !0) && ot.push(t) && !te.__r++ || cn !== g.debounceRendering) && ((cn = g.debounceRendering) || Jn)(te);
}
function te() {
  var t, e, n, r, o, i, s, l, u;
  for (ot.sort(xe); t = ot.shift(); )
    t.__d && (e = ot.length, r = void 0, o = void 0, i = void 0, l = (s = (n = t).__v).__e, (u = n.__P) && (r = [], o = [], (i = X({}, s)).__v = s.__v + 1, Ge(u, s, i, n.__n, u.ownerSVGElement !== void 0, s.__h != null ? [l] : null, r, l ?? Qt(s), s.__h, o), ar(r, s, o), s.__e != l && nr(s)), ot.length > e && ot.sort(xe));
  te.__r = 0;
}
function rr(t, e, n, r, o, i, s, l, u, p, f) {
  var c, _, h, d, m, E, L, C, S, b, V = 0, y = r && r.__k || tr, v = y.length, M = v, O = e.length;
  for (n.__k = [], c = 0; c < O; c++)
    (d = n.__k[c] = (d = e[c]) == null || typeof d == "boolean" || typeof d == "function" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" ? Dt(null, d, null, null, d) : ie(d) ? Dt(U, { children: d }, null, null, null) : d.__b > 0 ? Dt(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d) != null && (d.__ = n, d.__b = n.__b + 1, (C = eo(d, y, L = c + V, M)) === -1 ? h = gt : (h = y[C] || gt, y[C] = void 0, M--), Ge(t, d, h, o, i, s, l, u, p, f), m = d.__e, (_ = d.ref) && h.ref != _ && (h.ref && je(h.ref, null, d), f.push(_, d.__c || m, d)), m != null && (E == null && (E = m), b = !(S = h === gt || h.__v === null) && C === L, S ? C == -1 && V-- : C !== L && (C === L + 1 ? (V++, b = !0) : C > L ? M > O - L ? (V += C - L, b = !0) : V-- : V = C < L && C == L - 1 ? C - L : 0), L = c + V, b = b || C == c && !S, typeof d.type != "function" || C === L && h.__k !== d.__k ? typeof d.type == "function" || b ? d.__d !== void 0 ? (u = d.__d, d.__d = void 0) : u = m.nextSibling : u = ir(t, m, u) : u = or(d, u, t), typeof n.type == "function" && (n.__d = u)));
  for (n.__e = E, c = v; c--; )
    y[c] != null && (typeof n.type == "function" && y[c].__e != null && y[c].__e == n.__d && (n.__d = y[c].__e.nextSibling), sr(y[c], y[c]));
}
function or(t, e, n) {
  for (var r, o = t.__k, i = 0; o && i < o.length; i++)
    (r = o[i]) && (r.__ = t, e = typeof r.type == "function" ? or(r, e, n) : ir(n, r.__e, e));
  return e;
}
function K(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (ie(t) ? t.some(function(n) {
    K(n, e);
  }) : e.push(t)), e;
}
function ir(t, e, n) {
  return n == null || n.parentNode !== t ? t.insertBefore(e, null) : e == n && e.parentNode != null || t.insertBefore(e, n), e.nextSibling;
}
function eo(t, e, n, r) {
  var o = t.key, i = t.type, s = n - 1, l = n + 1, u = e[n];
  if (u === null || u && o == u.key && i === u.type)
    return n;
  if (r > (u != null ? 1 : 0))
    for (; s >= 0 || l < e.length; ) {
      if (s >= 0) {
        if ((u = e[s]) && o == u.key && i === u.type)
          return s;
        s--;
      }
      if (l < e.length) {
        if ((u = e[l]) && o == u.key && i === u.type)
          return l;
        l++;
      }
    }
  return -1;
}
function no(t, e, n, r, o) {
  var i;
  for (i in n)
    i === "children" || i === "key" || i in e || ee(t, i, null, n[i], r);
  for (i in e)
    o && typeof e[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || n[i] === e[i] || ee(t, i, e[i], n[i], r);
}
function ln(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || Qr.test(e) ? n : n + "px";
}
function ee(t, e, n, r, o) {
  var i;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof r == "string" && (t.style.cssText = r = ""), r)
          for (e in r)
            n && e in n || ln(t.style, e, "");
        if (n)
          for (e in n)
            r && n[e] === r[e] || ln(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      i = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = n, n ? r || t.addEventListener(e, i ? dn : un, i) : t.removeEventListener(e, i ? dn : un, i);
    else if (e !== "dangerouslySetInnerHTML") {
      if (o)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e !== "rowSpan" && e !== "colSpan" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e[4] !== "-" ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function un(t) {
  return this.l[t.type + !1](g.event ? g.event(t) : t);
}
function dn(t) {
  return this.l[t.type + !0](g.event ? g.event(t) : t);
}
function Ge(t, e, n, r, o, i, s, l, u, p) {
  var f, c, _, h, d, m, E, L, C, S, b, V, y, v, M, O = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (u = n.__h, l = e.__e = n.__e, e.__h = null, i = [l]), (f = g.__b) && f(e);
  try {
    t:
      if (typeof O == "function") {
        if (L = e.props, C = (f = O.contextType) && r[f.__c], S = f ? C ? C.props.value : f.__ : r, n.__c ? E = (c = e.__c = n.__c).__ = c.__E : ("prototype" in O && O.prototype.render ? e.__c = c = new O(L, S) : (e.__c = c = new H(L, S), c.constructor = O, c.render = oo), C && C.sub(c), c.props = L, c.state || (c.state = {}), c.context = S, c.__n = r, _ = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), O.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = X({}, c.__s)), X(c.__s, O.getDerivedStateFromProps(L, c.__s))), h = c.props, d = c.state, c.__v = e, _)
          O.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (O.getDerivedStateFromProps == null && L !== h && c.componentWillReceiveProps != null && c.componentWillReceiveProps(L, S), !c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(L, c.__s, S) === !1 || e.__v === n.__v)) {
            for (e.__v !== n.__v && (c.props = L, c.state = c.__s, c.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(pt) {
              pt && (pt.__ = e);
            }), b = 0; b < c._sb.length; b++)
              c.__h.push(c._sb[b]);
            c._sb = [], c.__h.length && s.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(L, c.__s, S), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(h, d, m);
          });
        }
        if (c.context = S, c.props = L, c.__P = t, c.__e = !1, V = g.__r, y = 0, "prototype" in O && O.prototype.render) {
          for (c.state = c.__s, c.__d = !1, V && V(e), f = c.render(c.props, c.state, c.context), v = 0; v < c._sb.length; v++)
            c.__h.push(c._sb[v]);
          c._sb = [];
        } else
          do
            c.__d = !1, V && V(e), f = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++y < 25);
        c.state = c.__s, c.getChildContext != null && (r = X(X({}, r), c.getChildContext())), _ || c.getSnapshotBeforeUpdate == null || (m = c.getSnapshotBeforeUpdate(h, d)), rr(t, ie(M = f != null && f.type === U && f.key == null ? f.props.children : f) ? M : [M], e, n, r, o, i, s, l, u, p), c.base = e.__e, e.__h = null, c.__h.length && s.push(c), E && (c.__E = c.__ = null);
      } else
        i == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = ro(n.__e, e, n, r, o, i, s, u, p);
    (f = g.diffed) && f(e);
  } catch (pt) {
    e.__v = null, (u || i != null) && (e.__e = l, e.__h = !!u, i[i.indexOf(l)] = null), g.__e(pt, e, n);
  }
}
function ar(t, e, n) {
  for (var r = 0; r < n.length; r++)
    je(n[r], n[++r], n[++r]);
  g.__c && g.__c(e, t), t.some(function(o) {
    try {
      t = o.__h, o.__h = [], t.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      g.__e(i, o.__v);
    }
  });
}
function ro(t, e, n, r, o, i, s, l, u) {
  var p, f, c, _ = n.props, h = e.props, d = e.type, m = 0;
  if (d === "svg" && (o = !0), i != null) {
    for (; m < i.length; m++)
      if ((p = i[m]) && "setAttribute" in p == !!d && (d ? p.localName === d : p.nodeType === 3)) {
        t = p, i[m] = null;
        break;
      }
  }
  if (t == null) {
    if (d === null)
      return document.createTextNode(h);
    t = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, h.is && h), i = null, l = !1;
  }
  if (d === null)
    _ === h || l && t.data === h || (t.data = h);
  else {
    if (i = i && At.call(t.childNodes), f = (_ = n.props || gt).dangerouslySetInnerHTML, c = h.dangerouslySetInnerHTML, !l) {
      if (i != null)
        for (_ = {}, m = 0; m < t.attributes.length; m++)
          _[t.attributes[m].name] = t.attributes[m].value;
      (c || f) && (c && (f && c.__html == f.__html || c.__html === t.innerHTML) || (t.innerHTML = c && c.__html || ""));
    }
    if (no(t, h, _, o, l), c)
      e.__k = [];
    else if (rr(t, ie(m = e.props.children) ? m : [m], e, n, r, o && d !== "foreignObject", i, s, i ? i[0] : n.__k && Qt(n, 0), l, u), i != null)
      for (m = i.length; m--; )
        i[m] != null && er(i[m]);
    l || ("value" in h && (m = h.value) !== void 0 && (m !== t.value || d === "progress" && !m || d === "option" && m !== _.value) && ee(t, "value", m, _.value, !1), "checked" in h && (m = h.checked) !== void 0 && m !== t.checked && ee(t, "checked", m, _.checked, !1));
  }
  return t;
}
function je(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (r) {
    g.__e(r, n);
  }
}
function sr(t, e, n) {
  var r, o;
  if (g.unmount && g.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || je(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (i) {
        g.__e(i, e);
      }
    r.base = r.__P = null, t.__c = void 0;
  }
  if (r = t.__k)
    for (o = 0; o < r.length; o++)
      r[o] && sr(r[o], e, n || typeof t.type != "function");
  n || t.__e == null || er(t.__e), t.__ = t.__e = t.__d = void 0;
}
function oo(t, e, n) {
  return this.constructor(t, n);
}
function et(t, e, n) {
  var r, o, i, s;
  g.__ && g.__(t, e), o = (r = typeof n == "function") ? null : n && n.__k || e.__k, i = [], s = [], Ge(e, t = (!r && n || e).__k = R(U, null, [t]), o || gt, gt, e.ownerSVGElement !== void 0, !r && n ? [n] : o ? null : e.firstChild ? At.call(e.childNodes) : null, i, !r && n ? n : o ? o.__e : e.firstChild, r, s), ar(i, t, s);
}
function Ye(t, e) {
  et(t, e, Ye);
}
function qe(t, e, n) {
  var r, o, i, s, l = X({}, t.props);
  for (i in t.type && t.type.defaultProps && (s = t.type.defaultProps), e)
    i == "key" ? r = e[i] : i == "ref" ? o = e[i] : l[i] = e[i] === void 0 && s !== void 0 ? s[i] : e[i];
  return arguments.length > 2 && (l.children = arguments.length > 3 ? At.call(arguments, 2) : n), Dt(t.type, l, r || t.key, o || t.ref, null);
}
function io(t, e) {
  var n = { __c: e = "__cC" + Qn++, __: t, Consumer: function(r, o) {
    return r.children(o);
  }, Provider: function(r) {
    var o, i;
    return this.getChildContext || (o = [], (i = {})[e] = this, this.getChildContext = function() {
      return i;
    }, this.shouldComponentUpdate = function(s) {
      this.props.value !== s.value && o.some(function(l) {
        l.__e = !0, Ne(l);
      });
    }, this.sub = function(s) {
      o.push(s);
      var l = s.componentWillUnmount;
      s.componentWillUnmount = function() {
        o.splice(o.indexOf(s), 1), l && l.call(s);
      };
    }), r.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
At = tr.slice, g = { __e: function(t, e, n, r) {
  for (var o, i, s; e = e.__; )
    if ((o = e.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(t)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, r || {}), s = o.__d), s)
          return o.__E = o;
      } catch (l) {
        t = l;
      }
  throw t;
} }, Kn = 0, H.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = X({}, this.state), typeof t == "function" && (t = t(X({}, n), this.props)), t && X(n, t), t != null && this.__v && (e && this._sb.push(e), Ne(this));
}, H.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ne(this));
}, H.prototype.render = U, ot = [], Jn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, xe = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, te.__r = 0, Qn = 0;
function Xe() {
  return (Xe = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }).apply(this, arguments);
}
function ao(t) {
  this.getChildContext = function() {
    return t.context;
  };
  var e = t.children, n = function(r, o) {
    if (r == null)
      return {};
    var i, s, l = {}, u = Object.keys(r);
    for (s = 0; s < u.length; s++)
      o.indexOf(i = u[s]) >= 0 || (l[i] = r[i]);
    return l;
  }(t, ["context", "children"]);
  return qe(e, n);
}
function so() {
  var t = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(t), this._vdom = R(ao, Xe({}, this._props, { context: t.detail.context }), function e(n, r) {
    if (n.nodeType === 3)
      return n.data;
    if (n.nodeType !== 1)
      return null;
    var o = [], i = {}, s = 0, l = n.attributes, u = n.childNodes;
    for (s = l.length; s--; )
      l[s].name !== "slot" && (i[l[s].name] = l[s].value, i[cr(l[s].name)] = l[s].value);
    for (s = u.length; s--; ) {
      var p = e(u[s], null), f = u[s].slot;
      f ? i[f] = R(hn, { name: f }, p) : o[s] = p;
    }
    var c = r ? R(hn, null, o) : o;
    return R(r || n.nodeName.toLowerCase(), i, c);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Ye : et)(this._vdom, this._root);
}
function cr(t) {
  return t.replace(/-(\w)/g, function(e, n) {
    return n ? n.toUpperCase() : "";
  });
}
function co(t, e, n) {
  if (this._vdom) {
    var r = {};
    r[t] = n = n ?? void 0, r[cr(t)] = n, this._vdom = qe(this._vdom, r), et(this._vdom, this._root);
  }
}
function lo() {
  et(this._vdom = null, this._root);
}
function hn(t, e) {
  var n = this;
  return R("slot", Xe({}, t, { ref: function(r) {
    r ? (n.ref = r, n._listener || (n._listener = function(o) {
      o.stopPropagation(), o.detail.context = e;
    }, r.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function uo(t, e, n, r) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = t, i._root = r && r.shadow ? i.attachShadow({ mode: "open" }) : i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = so, o.prototype.attributeChangedCallback = co, o.prototype.disconnectedCallback = lo, n = n || t.observedAttributes || Object.keys(t.propTypes || {}), o.observedAttributes = n, n.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom.props[i];
    }, set: function(s) {
      this._vdom ? this.attributeChangedCallback(i, null, s) : (this._props || (this._props = {}), this._props[i] = s, this.connectedCallback());
      var l = typeof s;
      s != null && l !== "string" && l !== "boolean" && l !== "number" || this.setAttribute(i, s);
    } });
  }), customElements.define(e || t.tagName || t.displayName || t.name, o);
}
var Oe = /* @__PURE__ */ ((t) => (t.CONTINUE_DETECTION = "continue-detection", t.SWITCH_CAMERA = "switch-camera", t.TOGGLE_MIRROR = "toggle-mirror", t))(Oe || {}), st = /* @__PURE__ */ ((t) => (t.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", t.CONTROL = "document-auto-capture:control", t.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", t.DOCUMENT_DETECTION = "document-auto-capture:document-detection", t.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", t.STATE_CHANGED = "document-auto-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", t))(st || {});
const W = {
  CANDIDATE_SELECTION: "candidate_selection",
  DOCUMENT_CENTERING: "document_centering",
  DOCUMENT_NOT_PRESENT: "document_not_present",
  DOCUMENT_TOO_FAR: "document_too_far",
  SHARPNESS_TOO_LOW: "sharpness_too_low",
  BRIGHTNESS_TOO_LOW: "brightness_too_low",
  BRIGHTNESS_TOO_HIGH: "brightness_too_high",
  HOTSPOTS_PRESENT: "hotspots_present"
}, F = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  WAITING: "WAITING",
  RUNNING: "RUNNING"
};
var D = function() {
  return D = Object.assign || function(e) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, D.apply(this, arguments);
};
function ut(t, e, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = e.length, i; r < o; r++)
      (i || !(r in e)) && (i || (i = Array.prototype.slice.call(e, 0, r)), i[r] = e[r]);
  return t.concat(i || Array.prototype.slice.call(e));
}
function ho(t) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return e[n] === void 0 && (e[n] = t(n)), e[n];
  };
}
var fo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, po = /* @__PURE__ */ ho(
  function(t) {
    return fo.test(t) || t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) < 91;
  }
  /* Z+1 */
), nt, N, ye, fn, yt = 0, lr = [], Gt = [], pn = g.__b, _n = g.__r, mn = g.diffed, gn = g.__c, Ln = g.unmount;
function Vt(t, e) {
  g.__h && g.__h(N, t, yt || e), yt = 0;
  var n = N.__H || (N.__H = { __: [], __h: [] });
  return t >= n.__.length && n.__.push({ __V: Gt }), n.__[t];
}
function G(t) {
  return yt = 1, ur(dr, t);
}
function ur(t, e, n) {
  var r = Vt(nt++, 2);
  if (r.t = t, !r.__c && (r.__ = [n ? n(e) : dr(void 0, e), function(l) {
    var u = r.__N ? r.__N[0] : r.__[0], p = r.t(u, l);
    u !== p && (r.__N = [p, r.__[1]], r.__c.setState({}));
  }], r.__c = N, !N.u)) {
    var o = function(l, u, p) {
      if (!r.__c.__H)
        return !0;
      var f = r.__c.__H.__.filter(function(_) {
        return _.__c;
      });
      if (f.every(function(_) {
        return !_.__N;
      }))
        return !i || i.call(this, l, u, p);
      var c = !1;
      return f.forEach(function(_) {
        if (_.__N) {
          var h = _.__[0];
          _.__ = _.__N, _.__N = void 0, h !== _.__[0] && (c = !0);
        }
      }), !(!c && r.__c.props === l) && (!i || i.call(this, l, u, p));
    };
    N.u = !0;
    var i = N.shouldComponentUpdate, s = N.componentWillUpdate;
    N.componentWillUpdate = function(l, u, p) {
      if (this.__e) {
        var f = i;
        i = void 0, o(l, u, p), i = f;
      }
      s && s.call(this, l, u, p);
    }, N.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function vt(t, e) {
  var n = Vt(nt++, 3);
  !g.__s && Je(n.__H, e) && (n.__ = t, n.i = e, N.__H.__h.push(n));
}
function ae(t, e) {
  var n = Vt(nt++, 4);
  !g.__s && Je(n.__H, e) && (n.__ = t, n.i = e, N.__h.push(n));
}
function se(t) {
  return yt = 5, ce(function() {
    return { current: t };
  }, []);
}
function _o(t, e, n) {
  yt = 6, ae(function() {
    return typeof t == "function" ? (t(e()), function() {
      return t(null);
    }) : t ? (t.current = e(), function() {
      return t.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(t));
}
function ce(t, e) {
  var n = Vt(nt++, 7);
  return Je(n.__H, e) ? (n.__V = t(), n.i = e, n.__h = t, n.__V) : n.__;
}
function Lt(t, e) {
  return yt = 8, ce(function() {
    return t;
  }, e);
}
function Ke(t) {
  var e = N.context[t.__c], n = Vt(nt++, 9);
  return n.c = t, e ? (n.__ == null && (n.__ = !0, e.sub(N)), e.props.value) : t.__;
}
function Ie(t, e) {
  g.useDebugValue && g.useDebugValue(e ? e(t) : t);
}
function mo() {
  var t = Vt(nt++, 11);
  if (!t.__) {
    for (var e = N.__v; e !== null && !e.__m && e.__ !== null; )
      e = e.__;
    var n = e.__m || (e.__m = [0, 0]);
    t.__ = "P" + n[0] + "-" + n[1]++;
  }
  return t.__;
}
function go() {
  for (var t; t = lr.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(jt), t.__H.__h.forEach($e), t.__H.__h = [];
      } catch (e) {
        t.__H.__h = [], g.__e(e, t.__v);
      }
}
g.__b = function(t) {
  N = null, pn && pn(t);
}, g.__r = function(t) {
  _n && _n(t), nt = 0;
  var e = (N = t.__c).__H;
  e && (ye === N ? (e.__h = [], N.__h = [], e.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = Gt, n.__N = n.i = void 0;
  })) : (e.__h.forEach(jt), e.__h.forEach($e), e.__h = [], nt = 0)), ye = N;
}, g.diffed = function(t) {
  mn && mn(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (lr.push(e) !== 1 && fn === g.requestAnimationFrame || ((fn = g.requestAnimationFrame) || Lo)(go)), e.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== Gt && (n.__ = n.__V), n.i = void 0, n.__V = Gt;
  })), ye = N = null;
}, g.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.forEach(jt), n.__h = n.__h.filter(function(r) {
        return !r.__ || $e(r);
      });
    } catch (r) {
      e.some(function(o) {
        o.__h && (o.__h = []);
      }), e = [], g.__e(r, n.__v);
    }
  }), gn && gn(t, e);
}, g.unmount = function(t) {
  Ln && Ln(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      jt(r);
    } catch (o) {
      e = o;
    }
  }), n.__H = void 0, e && g.__e(e, n.__v));
};
var yn = typeof requestAnimationFrame == "function";
function Lo(t) {
  var e, n = function() {
    clearTimeout(r), yn && cancelAnimationFrame(e), setTimeout(t);
  }, r = setTimeout(n, 100);
  yn && (e = requestAnimationFrame(n));
}
function jt(t) {
  var e = N, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), N = e;
}
function $e(t) {
  var e = N;
  t.__c = t.__(), N = e;
}
function Je(t, e) {
  return !t || t.length !== e.length || e.some(function(n, r) {
    return n !== t[r];
  });
}
function dr(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function hr(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function De(t, e) {
  for (var n in t)
    if (n !== "__source" && !(n in e))
      return !0;
  for (var r in e)
    if (r !== "__source" && t[r] !== e[r])
      return !0;
  return !1;
}
function ve(t, e) {
  return t === e && (t !== 0 || 1 / t == 1 / e) || t != t && e != e;
}
function Me(t) {
  this.props = t;
}
function yo(t, e) {
  function n(o) {
    var i = this.props.ref, s = i == o.ref;
    return !s && i && (i.call ? i(null) : i.current = null), e ? !e(this.props, o) || !s : De(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, R(t, o);
  }
  return r.displayName = "Memo(" + (t.displayName || t.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(Me.prototype = new H()).isPureReactComponent = !0, Me.prototype.shouldComponentUpdate = function(t, e) {
  return De(this.props, t) || De(this.state, e);
};
var vn = g.__b;
g.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), vn && vn(t);
};
var vo = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function Co(t) {
  function e(n) {
    var r = hr({}, n);
    return delete r.ref, t(r, n.ref || null);
  }
  return e.$$typeof = vo, e.render = e, e.prototype.isReactComponent = e.__f = !0, e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", e;
}
var Cn = function(t, e) {
  return t == null ? null : K(K(t).map(e));
}, wo = { map: Cn, forEach: Cn, count: function(t) {
  return t ? K(t).length : 0;
}, only: function(t) {
  var e = K(t);
  if (e.length !== 1)
    throw "Children.only";
  return e[0];
}, toArray: K }, So = g.__e;
g.__e = function(t, e, n, r) {
  if (t.then) {
    for (var o, i = e; i = i.__; )
      if ((o = i.__c) && o.__c)
        return e.__e == null && (e.__e = n.__e, e.__k = n.__k), o.__c(t, e);
  }
  So(t, e, n, r);
};
var wn = g.unmount;
function fr(t, e, n) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), t.__c.__H = null), (t = hr({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function(r) {
    return fr(r, e, n);
  })), t;
}
function pr(t, e, n) {
  return t && (t.__v = null, t.__k = t.__k && t.__k.map(function(r) {
    return pr(r, e, n);
  }), t.__c && t.__c.__P === e && (t.__e && n.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = n)), t;
}
function Yt() {
  this.__u = 0, this.t = null, this.__b = null;
}
function _r(t) {
  var e = t.__.__c;
  return e && e.__a && e.__a(t);
}
function bo(t) {
  var e, n, r;
  function o(i) {
    if (e || (e = t()).then(function(s) {
      n = s.default || s;
    }, function(s) {
      r = s;
    }), r)
      throw r;
    if (!n)
      throw e;
    return R(n, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function Nt() {
  this.u = null, this.o = null;
}
g.unmount = function(t) {
  var e = t.__c;
  e && e.__R && e.__R(), e && t.__h === !0 && (t.type = null), wn && wn(t);
}, (Yt.prototype = new H()).__c = function(t, e) {
  var n = e.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var o = _r(r.__v), i = !1, s = function() {
    i || (i = !0, n.__R = null, o ? o(l) : l());
  };
  n.__R = s;
  var l = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var p = r.state.__a;
        r.__v.__k[0] = pr(p, p.__c.__P, p.__c.__O);
      }
      var f;
      for (r.setState({ __a: r.__b = null }); f = r.t.pop(); )
        f.forceUpdate();
    }
  }, u = e.__h === !0;
  r.__u++ || u || r.setState({ __a: r.__b = r.__v.__k[0] }), t.then(s, s);
}, Yt.prototype.componentWillUnmount = function() {
  this.t = [];
}, Yt.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = fr(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = e.__a && R(U, null, t.fallback);
  return o && (o.__h = null), [R(U, null, e.__a ? null : t.children), o];
};
var Sn = function(t, e, n) {
  if (++n[1] === n[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size))
    for (n = t.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      t.u = n = n[2];
    }
};
function Vo(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function Eo(t) {
  var e = this, n = t.i;
  e.componentWillUnmount = function() {
    et(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== n && e.componentWillUnmount(), t.__v ? (e.l || (e.i = n, e.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), e.i.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), e.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), e.i.removeChild(r);
  } }), et(R(Vo, { context: e.context }, t.__v), e.l)) : e.l && e.componentWillUnmount();
}
function ko(t, e) {
  var n = R(Eo, { __v: t, i: e });
  return n.containerInfo = e, n;
}
(Nt.prototype = new H()).__a = function(t) {
  var e = this, n = _r(e.__v), r = e.o.get(t);
  return r[0]++, function(o) {
    var i = function() {
      e.props.revealOrder ? (r.push(o), Sn(e, t, r)) : o();
    };
    n ? n(i) : i();
  };
}, Nt.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = K(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var n = e.length; n--; )
    this.o.set(e[n], this.u = [1, 0, this.u]);
  return t.children;
}, Nt.prototype.componentDidUpdate = Nt.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(e, n) {
    Sn(t, n, e);
  });
};
var mr = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, xo = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, No = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Oo = /[A-Z0-9]/g, Io = typeof document < "u", $o = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
};
function Do(t, e, n) {
  return e.__k == null && (e.textContent = ""), et(t, e), typeof n == "function" && n(), t ? t.__c : null;
}
function Mo(t, e, n) {
  return Ye(t, e), typeof n == "function" && n(), t ? t.__c : null;
}
H.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(H.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var bn = g.event;
function Ro() {
}
function To() {
  return this.cancelBubble;
}
function Ao() {
  return this.defaultPrevented;
}
g.event = function(t) {
  return bn && (t = bn(t)), t.persist = Ro, t.isPropagationStopped = To, t.isDefaultPrevented = Ao, t.nativeEvent = t;
};
var Qe, Po = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Vn = g.vnode;
g.vnode = function(t) {
  typeof t.type == "string" && function(e) {
    var n = e.props, r = e.type, o = {};
    for (var i in n) {
      var s = n[i];
      if (!(i === "value" && "defaultValue" in n && s == null || Io && i === "children" && r === "noscript" || i === "class" || i === "className")) {
        var l = i.toLowerCase();
        i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && s === !0 ? s = "" : l === "ondoubleclick" ? i = "ondblclick" : l !== "onchange" || r !== "input" && r !== "textarea" || $o(n.type) ? l === "onfocus" ? i = "onfocusin" : l === "onblur" ? i = "onfocusout" : No.test(i) ? i = l : r.indexOf("-") === -1 && xo.test(i) ? i = i.replace(Oo, "-$&").toLowerCase() : s === null && (s = void 0) : l = i = "oninput", l === "oninput" && o[i = l] && (i = "oninputCapture"), o[i] = s;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = K(n.children).forEach(function(u) {
      u.props.selected = o.value.indexOf(u.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = K(n.children).forEach(function(u) {
      u.props.selected = o.multiple ? o.defaultValue.indexOf(u.props.value) != -1 : o.defaultValue == u.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", Po)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), e.props = o;
  }(t), t.$$typeof = mr, Vn && Vn(t);
};
var En = g.__r;
g.__r = function(t) {
  En && En(t), Qe = t.__c;
};
var kn = g.diffed;
g.diffed = function(t) {
  kn && kn(t);
  var e = t.props, n = t.__e;
  n != null && t.type === "textarea" && "value" in e && e.value !== n.value && (n.value = e.value == null ? "" : e.value), Qe = null;
};
var Zo = { ReactCurrentDispatcher: { current: { readContext: function(t) {
  return Qe.__n[t.__c].props.value;
} } } };
function Ho(t) {
  return R.bind(null, t);
}
function gr(t) {
  return !!t && t.$$typeof === mr;
}
function Bo(t) {
  return gr(t) ? qe.apply(null, arguments) : t;
}
function Uo(t) {
  return !!t.__k && (et(null, t), !0);
}
function Wo(t) {
  return t && (t.base || t.nodeType === 1 && t) || null;
}
var zo = function(t, e) {
  return t(e);
}, Fo = function(t, e) {
  return t(e);
}, Go = U;
function Lr(t) {
  t();
}
function jo(t) {
  return t;
}
function Yo() {
  return [!1, Lr];
}
var qo = ae;
function Xo(t, e) {
  var n = e(), r = G({ h: { __: n, v: e } }), o = r[0].h, i = r[1];
  return ae(function() {
    o.__ = n, o.v = e, ve(o.__, e()) || i({ h: o });
  }, [t, n, e]), vt(function() {
    return ve(o.__, o.v()) || i({ h: o }), t(function() {
      ve(o.__, o.v()) || i({ h: o });
    });
  }, [t]), n;
}
var dt = { useState: G, useId: mo, useReducer: ur, useEffect: vt, useLayoutEffect: ae, useInsertionEffect: qo, useTransition: Yo, useDeferredValue: jo, useSyncExternalStore: Xo, startTransition: Lr, useRef: se, useImperativeHandle: _o, useMemo: ce, useCallback: Lt, useContext: Ke, useDebugValue: Ie, version: "17.0.2", Children: wo, render: Do, hydrate: Mo, unmountComponentAtNode: Uo, createPortal: ko, createElement: R, createContext: io, createFactory: Ho, cloneElement: Bo, createRef: to, Fragment: U, isValidElement: gr, findDOMNode: Wo, Component: H, PureComponent: Me, memo: yo, forwardRef: Co, flushSync: Fo, unstable_batchedUpdates: zo, StrictMode: Go, Suspense: Yt, SuspenseList: Nt, lazy: bo, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Zo }, x = "-ms-", Mt = "-moz-", k = "-webkit-", yr = "comm", le = "rule", tn = "decl", Ko = "@import", vr = "@keyframes", Jo = "@layer", Qo = Math.abs, en = String.fromCharCode, Re = Object.assign;
function ti(t, e) {
  return $(t, 0) ^ 45 ? (((e << 2 ^ $(t, 0)) << 2 ^ $(t, 1)) << 2 ^ $(t, 2)) << 2 ^ $(t, 3) : 0;
}
function Cr(t) {
  return t.trim();
}
function Y(t, e) {
  return (t = e.exec(t)) ? t[0] : t;
}
function w(t, e, n) {
  return t.replace(e, n);
}
function qt(t, e) {
  return t.indexOf(e);
}
function $(t, e) {
  return t.charCodeAt(e) | 0;
}
function Ct(t, e, n) {
  return t.slice(e, n);
}
function z(t) {
  return t.length;
}
function wr(t) {
  return t.length;
}
function Ot(t, e) {
  return e.push(t), t;
}
function ei(t, e) {
  return t.map(e).join("");
}
function xn(t, e) {
  return t.filter(function(n) {
    return !Y(n, e);
  });
}
var ue = 1, wt = 1, Sr = 0, P = 0, I = 0, Et = "";
function de(t, e, n, r, o, i, s, l) {
  return { value: t, root: e, parent: n, type: r, props: o, children: i, line: ue, column: wt, length: s, return: "", siblings: l };
}
function tt(t, e) {
  return Re(de("", null, null, "", null, null, 0, t.siblings), t, { length: -t.length }, e);
}
function mt(t) {
  for (; t.root; )
    t = tt(t.root, { children: [t] });
  Ot(t, t.siblings);
}
function ni() {
  return I;
}
function ri() {
  return I = P > 0 ? $(Et, --P) : 0, wt--, I === 10 && (wt = 1, ue--), I;
}
function B() {
  return I = P < Sr ? $(Et, P++) : 0, wt++, I === 10 && (wt = 1, ue++), I;
}
function ct() {
  return $(Et, P);
}
function Xt() {
  return P;
}
function he(t, e) {
  return Ct(Et, t, e);
}
function Te(t) {
  switch (t) {
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
function oi(t) {
  return ue = wt = 1, Sr = z(Et = t), P = 0, [];
}
function ii(t) {
  return Et = "", t;
}
function Ce(t) {
  return Cr(he(P - 1, Ae(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function ai(t) {
  for (; (I = ct()) && I < 33; )
    B();
  return Te(t) > 2 || Te(I) > 3 ? "" : " ";
}
function si(t, e) {
  for (; --e && B() && !(I < 48 || I > 102 || I > 57 && I < 65 || I > 70 && I < 97); )
    ;
  return he(t, Xt() + (e < 6 && ct() == 32 && B() == 32));
}
function Ae(t) {
  for (; B(); )
    switch (I) {
      case t:
        return P;
      case 34:
      case 39:
        t !== 34 && t !== 39 && Ae(I);
        break;
      case 40:
        t === 41 && Ae(t);
        break;
      case 92:
        B();
        break;
    }
  return P;
}
function ci(t, e) {
  for (; B() && t + I !== 47 + 10; )
    if (t + I === 42 + 42 && ct() === 47)
      break;
  return "/*" + he(e, P - 1) + "*" + en(t === 47 ? t : B());
}
function li(t) {
  for (; !Te(ct()); )
    B();
  return he(t, P);
}
function ui(t) {
  return ii(Kt("", null, null, null, [""], t = oi(t), 0, [0], t));
}
function Kt(t, e, n, r, o, i, s, l, u) {
  for (var p = 0, f = 0, c = s, _ = 0, h = 0, d = 0, m = 1, E = 1, L = 1, C = 0, S = "", b = o, V = i, y = r, v = S; E; )
    switch (d = C, C = B()) {
      case 40:
        if (d != 108 && $(v, c - 1) == 58) {
          qt(v += w(Ce(C), "&", "&\f"), "&\f") != -1 && (L = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        v += Ce(C);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        v += ai(d);
        break;
      case 92:
        v += si(Xt() - 1, 7);
        continue;
      case 47:
        switch (ct()) {
          case 42:
          case 47:
            Ot(di(ci(B(), Xt()), e, n, u), u);
            break;
          default:
            v += "/";
        }
        break;
      case 123 * m:
        l[p++] = z(v) * L;
      case 125 * m:
      case 59:
      case 0:
        switch (C) {
          case 0:
          case 125:
            E = 0;
          case 59 + f:
            L == -1 && (v = w(v, /\f/g, "")), h > 0 && z(v) - c && Ot(h > 32 ? On(v + ";", r, n, c - 1, u) : On(w(v, " ", "") + ";", r, n, c - 2, u), u);
            break;
          case 59:
            v += ";";
          default:
            if (Ot(y = Nn(v, e, n, p, f, o, l, S, b = [], V = [], c, i), i), C === 123)
              if (f === 0)
                Kt(v, e, y, y, b, i, c, l, V);
              else
                switch (_ === 99 && $(v, 3) === 110 ? 100 : _) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Kt(t, y, y, r && Ot(Nn(t, y, y, 0, 0, o, l, S, o, b = [], c, V), V), o, V, c, l, r ? b : V);
                    break;
                  default:
                    Kt(v, y, y, y, [""], V, 0, l, V);
                }
        }
        p = f = h = 0, m = L = 1, S = v = "", c = s;
        break;
      case 58:
        c = 1 + z(v), h = d;
      default:
        if (m < 1) {
          if (C == 123)
            --m;
          else if (C == 125 && m++ == 0 && ri() == 125)
            continue;
        }
        switch (v += en(C), C * m) {
          case 38:
            L = f > 0 ? 1 : (v += "\f", -1);
            break;
          case 44:
            l[p++] = (z(v) - 1) * L, L = 1;
            break;
          case 64:
            ct() === 45 && (v += Ce(B())), _ = ct(), f = c = z(S = v += li(Xt())), C++;
            break;
          case 45:
            d === 45 && z(v) == 2 && (m = 0);
        }
    }
  return i;
}
function Nn(t, e, n, r, o, i, s, l, u, p, f, c) {
  for (var _ = o - 1, h = o === 0 ? i : [""], d = wr(h), m = 0, E = 0, L = 0; m < r; ++m)
    for (var C = 0, S = Ct(t, _ + 1, _ = Qo(E = s[m])), b = t; C < d; ++C)
      (b = Cr(E > 0 ? h[C] + " " + S : w(S, /&\f/g, h[C]))) && (u[L++] = b);
  return de(t, e, n, o === 0 ? le : l, u, p, f, c);
}
function di(t, e, n, r) {
  return de(t, e, n, yr, en(ni()), Ct(t, 2, -2), 0, r);
}
function On(t, e, n, r, o) {
  return de(t, e, n, tn, Ct(t, 0, r), Ct(t, r + 1, -1), r, o);
}
function br(t, e, n) {
  switch (ti(t, e)) {
    case 5103:
      return k + "print-" + t + t;
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
      return k + t + t;
    case 4789:
      return Mt + t + t;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return k + t + Mt + t + x + t + t;
    case 5936:
      switch ($(t, e + 11)) {
        case 114:
          return k + t + x + w(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        case 108:
          return k + t + x + w(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        case 45:
          return k + t + x + w(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    case 6828:
    case 4268:
    case 2903:
      return k + t + x + t + t;
    case 6165:
      return k + t + x + "flex-" + t + t;
    case 5187:
      return k + t + w(t, /(\w+).+(:[^]+)/, k + "box-$1$2" + x + "flex-$1$2") + t;
    case 5443:
      return k + t + x + "flex-item-" + w(t, /flex-|-self/g, "") + (Y(t, /flex-|baseline/) ? "" : x + "grid-row-" + w(t, /flex-|-self/g, "")) + t;
    case 4675:
      return k + t + x + "flex-line-pack" + w(t, /align-content|flex-|-self/g, "") + t;
    case 5548:
      return k + t + x + w(t, "shrink", "negative") + t;
    case 5292:
      return k + t + x + w(t, "basis", "preferred-size") + t;
    case 6060:
      return k + "box-" + w(t, "-grow", "") + k + t + x + w(t, "grow", "positive") + t;
    case 4554:
      return k + w(t, /([^-])(transform)/g, "$1" + k + "$2") + t;
    case 6187:
      return w(w(w(t, /(zoom-|grab)/, k + "$1"), /(image-set)/, k + "$1"), t, "") + t;
    case 5495:
    case 3959:
      return w(t, /(image-set\([^]*)/, k + "$1$`$1");
    case 4968:
      return w(w(t, /(.+:)(flex-)?(.*)/, k + "box-pack:$3" + x + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + k + t + t;
    case 4200:
      if (!Y(t, /flex-|baseline/))
        return x + "grid-column-align" + Ct(t, e) + t;
      break;
    case 2592:
    case 3360:
      return x + w(t, "template-", "") + t;
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return e = o, Y(r.props, /grid-\w+-end/);
      }) ? ~qt(t + (n = n[e].value), "span") ? t : x + w(t, "-start", "") + t + x + "grid-row-span:" + (~qt(n, "span") ? Y(n, /\d+/) : +Y(n, /\d+/) - +Y(t, /\d+/)) + ";" : x + w(t, "-start", "") + t;
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return Y(r.props, /grid-\w+-start/);
      }) ? t : x + w(w(t, "-end", "-span"), "span ", "") + t;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return w(t, /(.+)-inline(.+)/, k + "$1$2") + t;
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
      if (z(t) - 1 - e > 6)
        switch ($(t, e + 1)) {
          case 109:
            if ($(t, e + 4) !== 45)
              break;
          case 102:
            return w(t, /(.+:)(.+)-([^]+)/, "$1" + k + "$2-$3$1" + Mt + ($(t, e + 3) == 108 ? "$3" : "$2-$3")) + t;
          case 115:
            return ~qt(t, "stretch") ? br(w(t, "stretch", "fill-available"), e, n) + t : t;
        }
      break;
    case 5152:
    case 5920:
      return w(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, l, u, p) {
        return x + o + ":" + i + p + (s ? x + o + "-span:" + (l ? u : +u - +i) + p : "") + t;
      });
    case 4949:
      if ($(t, e + 6) === 121)
        return w(t, ":", ":" + k) + t;
      break;
    case 6444:
      switch ($(t, $(t, 14) === 45 ? 18 : 11)) {
        case 120:
          return w(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + k + ($(t, 14) === 45 ? "inline-" : "") + "box$3$1" + k + "$2$3$1" + x + "$2box$3") + t;
        case 100:
          return w(t, ":", ":" + x) + t;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return w(t, "scroll-", "scroll-snap-") + t;
  }
  return t;
}
function ne(t, e) {
  for (var n = "", r = 0; r < t.length; r++)
    n += e(t[r], r, t, e) || "";
  return n;
}
function hi(t, e, n, r) {
  switch (t.type) {
    case Jo:
      if (t.children.length)
        break;
    case Ko:
    case tn:
      return t.return = t.return || t.value;
    case yr:
      return "";
    case vr:
      return t.return = t.value + "{" + ne(t.children, r) + "}";
    case le:
      if (!z(t.value = t.props.join(",")))
        return "";
  }
  return z(n = ne(t.children, r)) ? t.return = t.value + "{" + n + "}" : "";
}
function fi(t) {
  var e = wr(t);
  return function(n, r, o, i) {
    for (var s = "", l = 0; l < e; l++)
      s += t[l](n, r, o, i) || "";
    return s;
  };
}
function pi(t) {
  return function(e) {
    e.root || (e = e.return) && t(e);
  };
}
function _i(t, e, n, r) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case tn:
        t.return = br(t.value, t.length, n);
        return;
      case vr:
        return ne([tt(t, { value: w(t.value, "@", "@" + k) })], r);
      case le:
        if (t.length)
          return ei(n = t.props, function(o) {
            switch (Y(o, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                mt(tt(t, { props: [w(o, /:(read-\w+)/, ":" + Mt + "$1")] })), mt(tt(t, { props: [o] })), Re(t, { props: xn(n, r) });
                break;
              case "::placeholder":
                mt(tt(t, { props: [w(o, /:(plac\w+)/, ":" + k + "input-$1")] })), mt(tt(t, { props: [w(o, /:(plac\w+)/, ":" + Mt + "$1")] })), mt(tt(t, { props: [w(o, /:(plac\w+)/, x + "input-$1")] })), mt(tt(t, { props: [o] })), Re(t, { props: xn(n, r) });
                break;
            }
            return "";
          });
    }
}
var mi = {
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
}, ht = typeof process < "u" && {} !== void 0 && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR) || "data-styled", nn = typeof window < "u" && "HTMLElement" in window, gi = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && {} !== void 0 && {}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && {}.REACT_APP_SC_DISABLE_SPEEDY !== "" ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" && {}.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && {} !== void 0 && {}.SC_DISABLE_SPEEDY !== void 0 && {}.SC_DISABLE_SPEEDY !== "" ? {}.SC_DISABLE_SPEEDY !== "false" && {}.SC_DISABLE_SPEEDY : {}.NODE_ENV !== "production"), In = /invalid hook call/i, Wt = /* @__PURE__ */ new Set(), Li = function(t, e) {
  if ({}.NODE_ENV !== "production") {
    var n = e ? ' with the id of "'.concat(e, '"') : "", r = "The component ".concat(t).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(s) {
        for (var l = [], u = 1; u < arguments.length; u++)
          l[u - 1] = arguments[u];
        In.test(s) ? (i = !1, Wt.delete(r)) : o.apply(void 0, ut([s], l, !1));
      }, se(), i && !Wt.has(r) && (console.warn(r), Wt.add(r));
    } catch (s) {
      In.test(s.message) && Wt.delete(r);
    } finally {
      console.error = o;
    }
  }
}, fe = Object.freeze([]), St = Object.freeze({});
function yi(t, e, n) {
  return n === void 0 && (n = St), t.theme !== n.theme && t.theme || e || n.theme;
}
var Vr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), vi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ci = /(^-|-$)/g;
function $n(t) {
  return t.replace(vi, "-").replace(Ci, "");
}
var wi = /(a)(d)/gi, Dn = function(t) {
  return String.fromCharCode(t + (t > 25 ? 39 : 97));
};
function Pe(t) {
  var e, n = "";
  for (e = Math.abs(t); e > 52; e = e / 52 | 0)
    n = Dn(e % 52) + n;
  return (Dn(e % 52) + n).replace(wi, "$1-$2");
}
var we, it = function(t, e) {
  for (var n = e.length; n; )
    t = 33 * t ^ e.charCodeAt(--n);
  return t;
}, Er = function(t) {
  return it(5381, t);
};
function kr(t) {
  return Pe(Er(t) >>> 0);
}
function xr(t) {
  return {}.NODE_ENV !== "production" && typeof t == "string" && t || t.displayName || t.name || "Component";
}
function Se(t) {
  return typeof t == "string" && ({}.NODE_ENV === "production" || t.charAt(0) === t.charAt(0).toLowerCase());
}
var Nr = typeof Symbol == "function" && Symbol.for, Or = Nr ? Symbol.for("react.memo") : 60115, Si = Nr ? Symbol.for("react.forward_ref") : 60112, bi = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Vi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Ir = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Ei = ((we = {})[Si] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, we[Or] = Ir, we);
function Mn(t) {
  return ("type" in (e = t) && e.type.$$typeof) === Or ? Ir : "$$typeof" in t ? Ei[t.$$typeof] : bi;
  var e;
}
var ki = Object.defineProperty, xi = Object.getOwnPropertyNames, Rn = Object.getOwnPropertySymbols, Ni = Object.getOwnPropertyDescriptor, Oi = Object.getPrototypeOf, Tn = Object.prototype;
function $r(t, e, n) {
  if (typeof e != "string") {
    if (Tn) {
      var r = Oi(e);
      r && r !== Tn && $r(t, r, n);
    }
    var o = xi(e);
    Rn && (o = o.concat(Rn(e)));
    for (var i = Mn(t), s = Mn(e), l = 0; l < o.length; ++l) {
      var u = o[l];
      if (!(u in Vi || n && n[u] || s && u in s || i && u in i)) {
        var p = Ni(e, u);
        try {
          ki(t, u, p);
        } catch {
        }
      }
    }
  }
  return t;
}
function ft(t) {
  return typeof t == "function";
}
function rn(t) {
  return typeof t == "object" && "styledComponentId" in t;
}
function at(t, e) {
  return t && e ? "".concat(t, " ").concat(e) : t || e || "";
}
function Ze(t, e) {
  if (t.length === 0)
    return "";
  for (var n = t[0], r = 1; r < t.length; r++)
    n += e ? e + t[r] : t[r];
  return n;
}
function bt(t) {
  return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
}
function He(t, e, n) {
  if (n === void 0 && (n = !1), !n && !bt(t) && !Array.isArray(t))
    return e;
  if (Array.isArray(e))
    for (var r = 0; r < e.length; r++)
      t[r] = He(t[r], e[r]);
  else if (bt(e))
    for (var r in e)
      t[r] = He(t[r], e[r]);
  return t;
}
function on(t, e) {
  Object.defineProperty(t, "toString", { value: e });
}
var Ii = {}.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function $i() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  for (var n = t[0], r = [], o = 1, i = t.length; o < i; o += 1)
    r.push(t[o]);
  return r.forEach(function(s) {
    n = n.replace(/%[a-z]/, s);
  }), n;
}
function j(t) {
  for (var e = [], n = 1; n < arguments.length; n++)
    e[n - 1] = arguments[n];
  return {}.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(e.length > 0 ? " Args: ".concat(e.join(", ")) : "")) : new Error($i.apply(void 0, ut([Ii[t]], e, !1)).trim());
}
var Di = function() {
  function t(e) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
  }
  return t.prototype.indexOfGroup = function(e) {
    for (var n = 0, r = 0; r < e; r++)
      n += this.groupSizes[r];
    return n;
  }, t.prototype.insertRules = function(e, n) {
    if (e >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; e >= i; )
        if ((i <<= 1) < 0)
          throw j(16, "".concat(e));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(r), this.length = i;
      for (var s = o; s < i; s++)
        this.groupSizes[s] = 0;
    }
    for (var l = this.indexOfGroup(e + 1), u = (s = 0, n.length); s < u; s++)
      this.tag.insertRule(l, n[s]) && (this.groupSizes[e]++, l++);
  }, t.prototype.clearGroup = function(e) {
    if (e < this.length) {
      var n = this.groupSizes[e], r = this.indexOfGroup(e), o = r + n;
      this.groupSizes[e] = 0;
      for (var i = r; i < o; i++)
        this.tag.deleteRule(r);
    }
  }, t.prototype.getGroup = function(e) {
    var n = "";
    if (e >= this.length || this.groupSizes[e] === 0)
      return n;
    for (var r = this.groupSizes[e], o = this.indexOfGroup(e), i = o + r, s = o; s < i; s++)
      n += "".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);
    return n;
  }, t;
}(), Jt = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), be = 1, zt = function(t) {
  if (Jt.has(t))
    return Jt.get(t);
  for (; re.has(be); )
    be++;
  var e = be++;
  if ({}.NODE_ENV !== "production" && ((0 | e) < 0 || e > 1073741824))
    throw j(16, "".concat(e));
  return Jt.set(t, e), re.set(e, t), e;
}, Mi = function(t, e) {
  Jt.set(t, e), re.set(e, t);
}, Ri = "style[".concat(ht, "][").concat("data-styled-version", '="').concat("6.0.3", '"]'), Ti = new RegExp("^".concat(ht, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Ai = function(t, e, n) {
  for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++)
    (r = o[i]) && t.registerName(e, r);
}, Pi = function(t, e) {
  for (var n, r = ((n = e.textContent) !== null && n !== void 0 ? n : "").split(`/*!sc*/
`), o = [], i = 0, s = r.length; i < s; i++) {
    var l = r[i].trim();
    if (l) {
      var u = l.match(Ti);
      if (u) {
        var p = 0 | parseInt(u[1], 10), f = u[2];
        p !== 0 && (Mi(f, p), Ai(t, f, u[3]), t.getTag().insertRules(p, o)), o.length = 0;
      } else
        o.push(l);
    }
  }
};
function Zi() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Dr = function(t) {
  var e = document.head, n = t || e, r = document.createElement("style"), o = function(l) {
    var u = Array.from(l.querySelectorAll("style[".concat(ht, "]")));
    return u[u.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ht, "active"), r.setAttribute("data-styled-version", "6.0.3");
  var s = Zi();
  return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r;
}, Hi = function() {
  function t(e) {
    this.element = Dr(e), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet)
        return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var s = r[o];
        if (s.ownerNode === n)
          return s;
      }
      throw j(17);
    }(this.element), this.length = 0;
  }
  return t.prototype.insertRule = function(e, n) {
    try {
      return this.sheet.insertRule(n, e), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.prototype.deleteRule = function(e) {
    this.sheet.deleteRule(e), this.length--;
  }, t.prototype.getRule = function(e) {
    var n = this.sheet.cssRules[e];
    return n && n.cssText ? n.cssText : "";
  }, t;
}(), Bi = function() {
  function t(e) {
    this.element = Dr(e), this.nodes = this.element.childNodes, this.length = 0;
  }
  return t.prototype.insertRule = function(e, n) {
    if (e <= this.length && e >= 0) {
      var r = document.createTextNode(n);
      return this.element.insertBefore(r, this.nodes[e] || null), this.length++, !0;
    }
    return !1;
  }, t.prototype.deleteRule = function(e) {
    this.element.removeChild(this.nodes[e]), this.length--;
  }, t.prototype.getRule = function(e) {
    return e < this.length ? this.nodes[e].textContent : "";
  }, t;
}(), Ui = function() {
  function t(e) {
    this.rules = [], this.length = 0;
  }
  return t.prototype.insertRule = function(e, n) {
    return e <= this.length && (this.rules.splice(e, 0, n), this.length++, !0);
  }, t.prototype.deleteRule = function(e) {
    this.rules.splice(e, 1), this.length--;
  }, t.prototype.getRule = function(e) {
    return e < this.length ? this.rules[e] : "";
  }, t;
}(), An = nn, Wi = { isServer: !nn, useCSSOMInjection: !gi }, Mr = function() {
  function t(e, n, r) {
    e === void 0 && (e = St), n === void 0 && (n = {});
    var o = this;
    this.options = D(D({}, Wi), e), this.gs = n, this.names = new Map(r), this.server = !!e.isServer, !this.server && nn && An && (An = !1, function(i) {
      for (var s = document.querySelectorAll(Ri), l = 0, u = s.length; l < u; l++) {
        var p = s[l];
        p && p.getAttribute(ht) !== "active" && (Pi(i, p), p.parentNode && p.parentNode.removeChild(p));
      }
    }(this)), on(this, function() {
      return function(i) {
        for (var s = i.getTag(), l = s.length, u = "", p = function(c) {
          var _ = function(L) {
            return re.get(L);
          }(c);
          if (_ === void 0)
            return "continue";
          var h = i.names.get(_), d = s.getGroup(c);
          if (h === void 0 || d.length === 0)
            return "continue";
          var m = "".concat(ht, ".g").concat(c, '[id="').concat(_, '"]'), E = "";
          h !== void 0 && h.forEach(function(L) {
            L.length > 0 && (E += "".concat(L, ","));
          }), u += "".concat(d).concat(m, '{content:"').concat(E, '"}').concat(`/*!sc*/
`);
        }, f = 0; f < l; f++)
          p(f);
        return u;
      }(o);
    });
  }
  return t.registerId = function(e) {
    return zt(e);
  }, t.prototype.reconstructWithOptions = function(e, n) {
    return n === void 0 && (n = !0), new t(D(D({}, this.options), e), this.gs, n && this.names || void 0);
  }, t.prototype.allocateGSInstance = function(e) {
    return this.gs[e] = (this.gs[e] || 0) + 1;
  }, t.prototype.getTag = function() {
    return this.tag || (this.tag = (e = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new Ui(o) : r ? new Hi(o) : new Bi(o);
    }(this.options), new Di(e)));
    var e;
  }, t.prototype.hasNameForId = function(e, n) {
    return this.names.has(e) && this.names.get(e).has(n);
  }, t.prototype.registerName = function(e, n) {
    if (zt(e), this.names.has(e))
      this.names.get(e).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(e, r);
    }
  }, t.prototype.insertRules = function(e, n, r) {
    this.registerName(e, n), this.getTag().insertRules(zt(e), r);
  }, t.prototype.clearNames = function(e) {
    this.names.has(e) && this.names.get(e).clear();
  }, t.prototype.clearRules = function(e) {
    this.getTag().clearGroup(zt(e)), this.clearNames(e);
  }, t.prototype.clearTag = function() {
    this.tag = void 0;
  }, t;
}(), zi = /&/g, Fi = /^\s*\/\/.*$/gm;
function Rr(t, e) {
  return t.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(e, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(e, " ")), n.props = n.props.map(function(r) {
      return "".concat(e, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = Rr(n.children, e)), n;
  });
}
function Gi(t) {
  var e, n, r, o = t === void 0 ? St : t, i = o.options, s = i === void 0 ? St : i, l = o.plugins, u = l === void 0 ? fe : l, p = function(_, h, d) {
    return d === n || d.startsWith(n) && d.endsWith(n) && d.replaceAll(n, "").length > 0 ? ".".concat(e) : _;
  }, f = u.slice();
  f.push(function(_) {
    _.type === le && _.value.includes("&") && (_.props[0] = _.props[0].replace(zi, n).replace(r, p));
  }), s.prefix && f.push(_i), f.push(hi);
  var c = function(_, h, d, m) {
    h === void 0 && (h = ""), d === void 0 && (d = ""), m === void 0 && (m = "&"), e = m, n = h, r = new RegExp("\\".concat(n, "\\b"), "g");
    var E = _.replace(Fi, ""), L = ui(d || h ? "".concat(d, " ").concat(h, " { ").concat(E, " }") : E);
    s.namespace && (L = Rr(L, s.namespace));
    var C = [];
    return ne(L, fi(f.concat(pi(function(S) {
      return C.push(S);
    })))), C;
  };
  return c.hash = u.length ? u.reduce(function(_, h) {
    return h.name || j(15), it(_, h.name);
  }, 5381).toString() : "", c;
}
var ji = new Mr(), Be = Gi(), Tr = dt.createContext({ shouldForwardProp: void 0, styleSheet: ji, stylis: Be });
Tr.Consumer;
dt.createContext(void 0);
function Pn() {
  return Ke(Tr);
}
var Ue = function() {
  function t(e, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Be);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = n, on(this, function() {
      throw j(12, String(r.name));
    });
  }
  return t.prototype.getName = function(e) {
    return e === void 0 && (e = Be), this.name + e.hash;
  }, t;
}(), Yi = function(t) {
  return t >= "A" && t <= "Z";
};
function Zn(t) {
  for (var e = "", n = 0; n < t.length; n++) {
    var r = t[n];
    if (n === 1 && r === "-" && t[0] === "-")
      return t;
    Yi(r) ? e += "-" + r.toLowerCase() : e += r;
  }
  return e.startsWith("ms-") ? "-" + e : e;
}
var Ar = function(t) {
  return t == null || t === !1 || t === "";
}, Pr = function(t) {
  var e, n, r = [];
  for (var o in t) {
    var i = t[o];
    t.hasOwnProperty(o) && !Ar(i) && (Array.isArray(i) && i.isCss || ft(i) ? r.push("".concat(Zn(o), ":"), i, ";") : bt(i) ? r.push.apply(r, ut(ut(["".concat(o, " {")], Pr(i), !1), ["}"], !1)) : r.push("".concat(Zn(o), ": ").concat((e = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || e in mi || e.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function lt(t, e, n, r) {
  if (Ar(t))
    return [];
  if (rn(t))
    return [".".concat(t.styledComponentId)];
  if (ft(t)) {
    if (!ft(i = t) || i.prototype && i.prototype.isReactComponent || !e)
      return [t];
    var o = t(e);
    return {}.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Ue || bt(o) || o === null || console.error("".concat(xr(t), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), lt(o, e, n, r);
  }
  var i;
  return t instanceof Ue ? n ? (t.inject(n, r), [t.getName(r)]) : [t] : bt(t) ? Pr(t) : Array.isArray(t) ? Array.prototype.concat.apply(fe, t.map(function(s) {
    return lt(s, e, n, r);
  })) : [t.toString()];
}
function qi(t) {
  for (var e = 0; e < t.length; e += 1) {
    var n = t[e];
    if (ft(n) && !rn(n))
      return !1;
  }
  return !0;
}
var Xi = Er("6.0.3"), Ki = function() {
  function t(e, n, r) {
    this.rules = e, this.staticRulesId = "", this.isStatic = {}.NODE_ENV === "production" && (r === void 0 || r.isStatic) && qi(e), this.componentId = n, this.baseHash = it(Xi, n), this.baseStyle = r, Mr.registerId(n);
  }
  return t.prototype.generateAndInjectStyles = function(e, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, n, r) : "";
    if (this.isStatic && !r.hash)
      if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId))
        o = at(o, this.staticRulesId);
      else {
        var i = Ze(lt(this.rules, e, n, r)), s = Pe(it(this.baseHash, i) >>> 0);
        if (!n.hasNameForId(this.componentId, s)) {
          var l = r(i, ".".concat(s), void 0, this.componentId);
          n.insertRules(this.componentId, s, l);
        }
        o = at(o, s), this.staticRulesId = s;
      }
    else {
      for (var u = it(this.baseHash, r.hash), p = "", f = 0; f < this.rules.length; f++) {
        var c = this.rules[f];
        if (typeof c == "string")
          p += c, {}.NODE_ENV !== "production" && (u = it(u, c));
        else if (c) {
          var _ = Ze(lt(c, e, n, r));
          u = it(u, _), p += _;
        }
      }
      if (p) {
        var h = Pe(u >>> 0);
        n.hasNameForId(this.componentId, h) || n.insertRules(this.componentId, h, r(p, ".".concat(h), void 0, this.componentId)), o = at(o, h);
      }
    }
    return o;
  }, t;
}(), Tt = dt.createContext(void 0);
Tt.Consumer;
function Ji() {
  var t = Ke(Tt);
  if (!t)
    throw j(18);
  return t;
}
function Qi(t) {
  var e = dt.useContext(Tt), n = ce(function() {
    return function(r, o) {
      if (!r)
        throw j(14);
      if (ft(r)) {
        var i = r(o);
        if ({}.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object"))
          throw j(7);
        return i;
      }
      if (Array.isArray(r) || typeof r != "object")
        throw j(8);
      return o ? D(D({}, o), r) : r;
    }(t.theme, e);
  }, [t.theme, e]);
  return t.children ? dt.createElement(Tt.Provider, { value: n }, t.children) : null;
}
var Ve = {}, Hn = /* @__PURE__ */ new Set();
function ta(t, e, n) {
  var r = rn(t), o = t, i = !Se(t), s = e.attrs, l = s === void 0 ? fe : s, u = e.componentId, p = u === void 0 ? function(b, V) {
    var y = typeof b != "string" ? "sc" : $n(b);
    Ve[y] = (Ve[y] || 0) + 1;
    var v = "".concat(y, "-").concat(kr("6.0.3" + y + Ve[y]));
    return V ? "".concat(V, "-").concat(v) : v;
  }(e.displayName, e.parentComponentId) : u, f = e.displayName, c = f === void 0 ? function(b) {
    return Se(b) ? "styled.".concat(b) : "Styled(".concat(xr(b), ")");
  }(t) : f, _ = e.displayName && e.componentId ? "".concat($n(e.displayName), "-").concat(e.componentId) : e.componentId || p, h = r && o.attrs ? o.attrs.concat(l).filter(Boolean) : l, d = e.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var m = o.shouldForwardProp;
    if (e.shouldForwardProp) {
      var E = e.shouldForwardProp;
      d = function(b, V) {
        return m(b, V) && E(b, V);
      };
    } else
      d = m;
  }
  var L = new Ki(n, _, r ? o.componentStyle : void 0);
  function C(b, V) {
    return function(y, v, M) {
      var O = y.attrs, pt = y.componentStyle, Gr = y.defaultProps, jr = y.foldedComponentIds, sn = y.styledComponentId, Yr = y.target, qr = dt.useContext(Tt), Xr = Pn(), _e = y.shouldForwardProp || Xr.shouldForwardProp;
      ({}).NODE_ENV !== "production" && Ie(sn);
      var J = function(Zt, xt, Ht) {
        for (var _t, rt = D(D({}, xt), { className: void 0, theme: Ht }), Le = 0; Le < Zt.length; Le += 1) {
          var Bt = ft(_t = Zt[Le]) ? _t(rt) : _t;
          for (var Q in Bt)
            rt[Q] = Q === "className" ? at(rt[Q], Bt[Q]) : Q === "style" ? D(D({}, rt[Q]), Bt[Q]) : Bt[Q];
        }
        return xt.className && (rt.className = at(rt.className, xt.className)), rt;
      }(O, v, yi(v, qr, Gr) || St), Pt = J.as || Yr, kt = {};
      for (var A in J)
        J[A] === void 0 || A[0] === "$" || A === "as" || A === "theme" || (A === "forwardedAs" ? kt.as = J.forwardedAs : _e && !_e(A, Pt) || (kt[A] = J[A], _e || {}.NODE_ENV !== "development" || po(A) || Hn.has(A) || (Hn.add(A), console.warn('styled-components: it looks like an unknown prop "'.concat(A, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var me = function(Zt, xt) {
        var Ht = Pn(), _t = Zt.generateAndInjectStyles(xt, Ht.styleSheet, Ht.stylis);
        return {}.NODE_ENV !== "production" && Ie(_t), _t;
      }(pt, J);
      ({}).NODE_ENV !== "production" && y.warnTooManyClasses && y.warnTooManyClasses(me);
      var ge = at(jr, sn);
      return me && (ge += " " + me), J.className && (ge += " " + J.className), kt[Se(Pt) && !Vr.has(Pt) ? "class" : "className"] = ge, kt.ref = M, R(Pt, kt);
    }(S, b, V);
  }
  ({}).NODE_ENV !== "production" && (C.displayName = c);
  var S = dt.forwardRef(C);
  return S.attrs = h, S.componentStyle = L, S.shouldForwardProp = d, {}.NODE_ENV !== "production" && (S.displayName = c), S.foldedComponentIds = r ? at(o.foldedComponentIds, o.styledComponentId) : "", S.styledComponentId = _, S.target = r ? o.target : t, Object.defineProperty(S, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(b) {
    this._foldedDefaultProps = r ? function(V) {
      for (var y = [], v = 1; v < arguments.length; v++)
        y[v - 1] = arguments[v];
      for (var M = 0, O = y; M < O.length; M++)
        He(V, O[M], !0);
      return V;
    }({}, o.defaultProps, b) : b;
  } }), {}.NODE_ENV !== "production" && (Li(c, _), S.warnTooManyClasses = function(b, V) {
    var y = {}, v = !1;
    return function(M) {
      if (!v && (y[M] = !0, Object.keys(y).length >= 200)) {
        var O = V ? ' with the id of "'.concat(V, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(b).concat(O, `.
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
  }(c, _)), on(S, function() {
    return ".".concat(S.styledComponentId);
  }), i && $r(S, t, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), S;
}
function Bn(t, e) {
  for (var n = [t[0]], r = 0, o = e.length; r < o; r += 1)
    n.push(e[r], t[r + 1]);
  return n;
}
var Un = function(t) {
  return Object.assign(t, { isCss: !0 });
};
function an(t) {
  for (var e = [], n = 1; n < arguments.length; n++)
    e[n - 1] = arguments[n];
  if (ft(t) || bt(t)) {
    var r = t;
    return Un(lt(Bn(fe, ut([r], e, !0))));
  }
  var o = t;
  return e.length === 0 && o.length === 1 && typeof o[0] == "string" ? lt(o) : Un(lt(Bn(o, e)));
}
function We(t, e, n) {
  if (n === void 0 && (n = St), !e)
    throw j(1, e);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++)
      i[s - 1] = arguments[s];
    return t(e, n, an.apply(void 0, ut([o], i, !1)));
  };
  return r.attrs = function(o) {
    return We(t, e, D(D({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return We(t, e, D(D({}, n), o));
  }, r;
}
var Zr = function(t) {
  return We(ta, t);
}, Z = Zr;
Vr.forEach(function(t) {
  Z[t] = Zr(t);
});
function pe(t) {
  for (var e = [], n = 1; n < arguments.length; n++)
    e[n - 1] = arguments[n];
  ({}).NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = Ze(an.apply(void 0, ut([t], e, !1))), o = kr(r);
  return new Ue(o, r);
}
({}).NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Ft = "__sc-".concat(ht, "__");
({}).NODE_ENV !== "production" && {}.NODE_ENV !== "test" && typeof window < "u" && (window[Ft] || (window[Ft] = 0), window[Ft] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Ft] += 1);
var ea = 0;
function a(t, e, n, r, o, i) {
  var s, l, u = {};
  for (l in e)
    l == "ref" ? s = e[l] : u[l] = e[l];
  var p = { type: t, props: u, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --ea, __source: o, __self: i };
  if (typeof t == "function" && (s = t.defaultProps))
    for (l in s)
      u[l] === void 0 && (u[l] = s[l]);
  return g.vnode && g.vnode(p), p;
}
const Hr = ({
  svgSize: t
}) => a("svg", {
  fill: "none",
  height: t,
  viewBox: "0 0 16 14",
  width: t,
  xmlns: "http://www.w3.org/2000/svg",
  children: a("path", {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })
}), T = {
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
}, Wn = 0.24, na = 24, ra = 2, Ee = 14, zn = 5, Fn = 0.027;
var q = /* @__PURE__ */ ((t) => (t[t.S = 300] = "S", t[t.M = 400] = "M", t[t.L = 500] = "L", t[t.Default = 600] = "Default", t))(q || {});
const It = {
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
}, oa = {
  [W.CANDIDATE_SELECTION]: "Hold still…",
  [W.DOCUMENT_CENTERING]: "Center document",
  [W.DOCUMENT_NOT_PRESENT]: "Scan document",
  [W.DOCUMENT_TOO_FAR]: "Move closer",
  [W.SHARPNESS_TOO_LOW]: "More light needed",
  [W.BRIGHTNESS_TOO_LOW]: "More light needed",
  [W.BRIGHTNESS_TOO_HIGH]: "Less light needed",
  [W.HOTSPOTS_PRESENT]: "Avoid reflections"
}, Gn = {
  loading: {
    text: "Loading. Please wait.",
    visible: !0
  },
  waiting: {
    text: "Waiting for input...",
    visible: !0
  }
}, ia = T.ID_CORNERS_ROUNDED, aa = "rgba(19, 19, 19, 0.5)", sa = 34, Br = (t) => t ? t.width < t.height ? Math.max(Ee, zn + t.width * Fn) : Math.max(Ee, zn + t.height * Fn) : Ee, ca = (t) => t > q.Default ? It[q.Default] : t > q.L ? It[q.L] : t > q.M ? It[q.M] : It[q.S], la = (t) => t ? ca(t.width) : It[q.Default], ua = Z.div`
  width: 100%;
  height: 100%;
  top: 0;
  position: ${(t) => t.$position};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${(t) => !t.$isCameraReady && `
    height: inherit;
    aspect-ratio: 16/9;

    @media (orientation: portrait) and (max-width: 1199px) {
      aspect-ratio: 9/16;
    }
  `}
`, da = Z.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(t) => t.theme.colors.instructionTextColor};
`, ha = Z.p`
  background: ${(t) => t.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(t) => `${t.$fontSize}px`};
  font-family: Montserrat, Arial, sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: 1em;
  max-width: 80%;
`, ze = ({
  fontSize: t,
  Icon: e,
  isCameraReady: n,
  position: r = "absolute",
  text: o
}) => a(ua, {
  $isCameraReady: n,
  $position: r,
  children: a(da, {
    children: [e ? a(e, {
      svgSize: t * 2
    }) : null, a(ha, {
      $fontSize: t,
      children: o
    })]
  })
}), Ur = ({
  fontSize: t,
  text: e = "An unknown error has occurred"
}) => a(ze, {
  fontSize: t,
  Icon: Hr,
  position: "relative",
  text: e
});
class fa extends H {
  constructor(e) {
    super(e), this.state = {
      hasError: !1
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(e) {
    return {
      hasError: !0
    };
  }
  componentDidCatch(e, n) {
    console.error(e, n);
  }
  render() {
    return this.state.hasError ? a(Ur, {
      fontSize: Br(this.props.videoElementSize),
      Icon: Hr,
      isCameraReady: !1
    }) : this.props.children;
  }
}
const pa = ({
  children: t,
  theme: e,
  videoElementSize: n
}) => a(Qi, {
  theme: e,
  children: a(fa, {
    videoElementSize: n,
    children: t
  })
}), Rt = (t, e) => {
  const n = se(e);
  vt(() => {
    n.current = e;
  }, [e]), vt(
    () => {
      const r = (o) => n.current(o);
      return document.addEventListener(t, r), () => {
        document.removeEventListener(t, r);
      };
    },
    [t]
    // Re-run if eventName
  );
}, _a = (t) => {
  const [e, n] = G(), r = Lt((o) => {
    var i;
    n((i = o.detail) == null ? void 0 : i.size);
  }, [n]);
  return Rt(t, r), e;
}, ma = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, ke = {
  colors: ma
}, ga = (t) => t != null && t.theme ? {
  ...ke,
  ...t.theme,
  colors: {
    ...ke.colors,
    ...t.theme.colors
  }
} : ke, La = 1.5, ya = 0.85, jn = 1e3, va = (t) => t < jn ? jn : t, Ca = (t, e) => t < e ? t : e, wa = ({
  height: t,
  width: e
}) => {
  let n;
  return e > t ? n = va(t) : n = e, {
    width: n,
    height: Ca(t, n)
  };
}, Sa = (t) => {
  const n = wa(t).width * ya, r = (t.width - n) / 2, o = n / La, i = (t.height - o) / 2;
  return {
    shiftX: r,
    shiftY: i,
    width: n,
    height: o
  };
}, ba = (t) => {
  const {
    height: e,
    shiftX: n,
    shiftY: r,
    width: o
  } = Sa(t);
  return {
    shiftX: n / t.width,
    shiftY: r / t.height,
    width: o / t.width,
    height: e / t.height
  };
}, Wr = (t, e) => {
  document.dispatchEvent(new CustomEvent(t, {
    detail: e
  }));
}, oe = class oe {
  constructor() {
    Ut(this, "lastDetails", {});
    Ut(this, "delayedTime", 0);
  }
  static getInstance() {
    return this._instance || (this._instance = new oe()), this._instance;
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
  isDetailChanged(e, n) {
    return JSON.stringify(n) !== JSON.stringify(this.lastDetails[e]) ? (this.lastDetails[e] = n, !0) : !1;
  }
  /**
   * If the detail of the event has changed, dispatch the event
   * @param {string} eventName - The name of the event to dispatch.
   * @param detail - Record<string, unknown>
   */
  dispatchCustomEventOnChange(e, n) {
    this.isDetailChanged(e, n) && Wr(e, n);
  }
  /**
   * If the detail of the event has changed, delay time has passed, dispatch the event
   * @param {string} eventName - The name of the event to dispatch.
   * @param detail - Record<string, unknown>
   * @param {number} delay - How long dispatch should be delayed.
   */
  dispatchDelayedCustomEventOnChange(e, n, r) {
    const o = performance.now();
    o - this.delayedTime > r && (this.dispatchCustomEventOnChange(e, n), this.delayedTime = o);
  }
};
Ut(oe, "_instance");
let Fe = oe;
Fe.getInstance();
const Yn = (t, e) => {
  Wr(t, {
    instruction: e
  });
};
class Va {
  static async getVideoInputDeviceList() {
    return (await navigator.mediaDevices.enumerateDevices()).filter((n) => n.kind === "videoinput");
  }
}
const Ea = () => {
  const [t, e] = G(!1);
  return vt(() => {
    (async () => {
      (await Va.getVideoInputDeviceList()).length > 1 && e(!0);
    })();
  }, []), t;
}, ka = ({
  size: t
}) => a("svg", {
  fill: "none",
  height: t,
  viewBox: "0 0 52 52",
  width: t,
  xmlns: "http://www.w3.org/2000/svg",
  children: [a("path", {
    d: "M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z",
    fill: "#131313",
    fillOpacity: "0.3"
  }), a("circle", {
    cx: "17.5",
    cy: "24.5",
    fill: "white",
    r: "1.5"
  }), a("path", {
    d: "M15 17H16C19.5 17 23 21 23 29C22.5 29 21.5 29 20 29C20 29 20.25 33 19.5 34.5C18.75 36 16 36 16 36H15",
    stroke: "white",
    strokeWidth: "2"
  }), a("circle", {
    fill: "white",
    r: "1.5",
    transform: "matrix(-1 0 0 1 34.5 24.5)"
  }), a("path", {
    d: "M37 17H36C32.5 17 29 21 29 29C29.5 29 30.5 29 32 29C32 29 31.75 33 32.5 34.5C33.25 36 36 36 36 36H37",
    stroke: "white",
    strokeWidth: "2"
  })]
}), xa = ({
  size: t
}) => a("svg", {
  fill: "none",
  height: t,
  viewBox: "0 0 52 52",
  width: "52",
  xmlns: "http://www.w3.org/2000/svg",
  children: [a("circle", {
    cx: "26",
    cy: "26",
    fill: "#131313",
    fillOpacity: "0.3",
    r: "26"
  }), a("path", {
    d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
    fill: "white"
  })]
}), zr = Z.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(t) => t.$marginLeft ? `${t.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, Na = ({
  marginLeft: t,
  size: e,
  ...n
}) => a(zr, {
  $marginLeft: t,
  ...n,
  children: a(ka, {
    size: e
  })
}), Oa = ({
  marginLeft: t,
  size: e,
  ...n
}) => a(zr, {
  $marginLeft: t,
  ...n,
  children: a(xa, {
    size: e
  })
}), Ia = Z.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(t) => `${t.$padding}px`};
  z-index: 2;
`, $a = ({
  customControlEvent: t,
  isSwitchCameraDisabled: e,
  videoElementSize: n
}) => {
  const r = Ea(), {
    buttonPadding: o,
    iconSize: i,
    marginLeft: s
  } = la(n), l = () => {
    Yn(t, Oe.TOGGLE_MIRROR);
  };
  return a(Ia, {
    $padding: o,
    children: [r && a(Oa, {
      disabled: e,
      onClick: () => {
        Yn(t, Oe.SWITCH_CAMERA);
      },
      size: i
    }), a(Na, {
      marginLeft: r ? s : 0,
      onClick: l,
      size: i
    })]
  });
}, Da = Z.div`
  color: ${(t) => t.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, Ma = ({
  svgSize: t
}) => a(Da, {
  children: a("svg", {
    fill: "none",
    height: t,
    viewBox: "0 0 48 48",
    width: t,
    xmlns: "http://www.w3.org/2000/svg",
    children: [a("path", {
      d: "M30.9229 9.75026C30.9229 12.3736 28.7533 14.5002 26.0767 14.5002C23.4003 14.5002 21.2307 12.3736 21.2307 9.75026C21.2307 7.12664 23.4003 5 26.0767 5C28.7533 5 30.9229 7.12664 30.9229 9.75026Z",
      fill: "currentColor"
    }), a("path", {
      d: "M40.6155 15.8556C40.6155 18.1044 38.7559 19.9273 36.4618 19.9273C34.1675 19.9273 32.3079 18.1044 32.3079 15.8556C32.3079 13.607 34.1675 11.7842 36.4618 11.7842C38.7559 11.7842 40.6155 13.607 40.6155 15.8556Z",
      fill: "currentColor"
    }), a("path", {
      d: "M42 27.3921C42 29.2659 40.4502 30.785 38.5386 30.785C36.6267 30.785 35.0769 29.2659 35.0769 27.3921C35.0769 25.5181 36.6267 23.999 38.5386 23.999C40.4502 23.999 42 25.5181 42 27.3921Z",
      fill: "currentColor"
    }), a("path", {
      d: "M35.0766 37.5712C35.0766 39.0704 33.837 40.2858 32.3075 40.2858C30.7779 40.2858 29.5383 39.0704 29.5383 37.5712C29.5383 36.0723 30.7779 34.8569 32.3075 34.8569C33.837 34.8569 35.0766 36.0723 35.0766 37.5712Z",
      fill: "currentColor"
    }), a("path", {
      d: "M22.6154 40.2858C22.6154 41.7848 21.3756 43.0001 19.846 43.0001C18.3168 43.0001 17.0769 41.7848 17.0769 40.2858C17.0769 38.7866 18.3168 37.5713 19.846 37.5713C21.3756 37.5713 22.6154 38.7866 22.6154 40.2858Z",
      fill: "currentColor"
    }), a("path", {
      d: "M11.5382 32.8216C11.5382 33.9457 10.6085 34.8573 9.46137 34.8573C8.31426 34.8573 7.38452 33.9457 7.38452 32.8216C7.38452 31.6972 8.31426 30.7856 9.46137 30.7856C10.6085 30.7856 11.5382 31.6972 11.5382 32.8216Z",
      fill: "currentColor"
    }), a("path", {
      d: "M8.76913 21.2849C8.76913 22.0345 8.14932 22.642 7.38456 22.642C6.6198 22.642 6 22.0345 6 21.2849C6 20.5353 6.61981 19.9277 7.38456 19.9277C8.14933 19.9277 8.76913 20.5353 8.76913 21.2849Z",
      fill: "currentColor"
    }), a("path", {
      d: "M15.6927 11.7844C15.6927 12.534 15.0729 13.1415 14.3081 13.1415C13.5434 13.1415 12.9236 12.534 12.9236 11.7844C12.9236 11.0348 13.5434 10.4272 14.3081 10.4272C15.0729 10.4272 15.6927 11.0348 15.6927 11.7844Z",
      fill: "currentColor"
    })]
  })
}), Ra = Z.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`, Fr = ({
  backdropColor: t,
  children: e
}) => a(Ra, {
  children: a("svg", {
    height: "100%",
    width: "100%",
    children: [a("defs", {
      children: a("mask", {
        id: "mask",
        children: [a("rect", {
          fill: "#fff",
          height: "100%",
          width: "100%"
        }), e]
      })
    }), a("rect", {
      fill: t,
      height: "100%",
      mask: "url(#mask)",
      width: "100%"
    })]
  })
}), Ta = ({
  appState: t,
  appStateInstructions: e,
  backdropColor: n,
  fontSize: r,
  isBackdrop: o
}) => {
  const i = t === F.ERROR || t === F.RUNNING;
  return !t || i || !e[t].visible ? null : t === F.WAITING ? a(U, {
    children: [o && a(Fr, {
      backdropColor: n
    }), a(ze, {
      fontSize: r,
      isCameraReady: !0,
      text: e[F.WAITING].text
    })]
  }) : a(ze, {
    fontSize: r,
    Icon: Ma,
    isCameraReady: !0,
    text: e[F.LOADING].text
  });
}, Aa = "2.5s", Pa = "0.3s", Za = "linear", Ha = pe`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
pe`
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`;
pe`
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
pe`
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
const Ba = Z.div`
  position: absolute;
  left: 50%;

  ${(t) => t.$cssTop ? `top: ${t.$cssTop}%;` : ""}
  ${(t) => t.$cssBottom ? `bottom: ${t.$cssBottom}%;` : ""}
    ${(t) => t.$isAnimating && an`
      animation: ${Ha} ${Pa}
        ${Za} both;
      animation-delay: ${Aa};

      @media (orientation: landscape) {
        bottom: ${t.$cssBottom ? t.$cssBottom - 15 : ""}%;
      }

      @media (max-width: 1024px) and (orientation: landscape) {
        bottom: ${t.$cssBottom ? t.$cssBottom - 13 : ""}%;
      }

      @media (max-width: 768px) {
        bottom: ${t.$cssBottom ? t.$cssBottom + 3 : ""}%;
      }

      @media (max-width: 480px) and (orientation: portrait) {
        bottom: ${t.$cssBottom ? t.$cssBottom - 10 : ""}%;
      }
    `};

  transform: translateX(-50%)
    translateY(
      ${(t) => t.$cssTop || t.$isPortrait ? "-50%" : t.$isPortrait ? "" : "50%"}
    );
  z-index: 2;
`, Ua = Z.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 0.25em;
  margin: 0 auto;
  padding: 0.583em 0.666em;
  background: ${(t) => t.$isInCandidateSelection ? `${t.theme.colors.instructionColorSuccess}` : `${t.theme.colors.instructionColor}`};
  color: ${(t) => t.theme.colors.instructionTextColor};
  border: 0;
  font-family: Montserrat, Arial, sans-serif;
  font-weight: 600;
  line-height: 1em;
  font-size: ${(t) => `${t.$fontSize}px`};
  white-space: ${(t) => t.$wrap ? "break-spaces" : "nowrap"};
`, Wa = ({
  children: t,
  cssBottom: e,
  cssTop: n,
  fontSize: r,
  isAnimating: o,
  isInCandidateSelection: i,
  isPortrait: s
}) => a(Ba, {
  $cssBottom: e,
  $cssTop: n,
  $isAnimating: o,
  $isPortrait: s,
  children: a(Ua, {
    $fontSize: r,
    $isInCandidateSelection: i,
    $wrap: t.length > sa,
    children: t
  })
}), za = () => a("svg", {
  fill: "none",
  height: "402",
  preserveAspectRatio: "none",
  viewBox: "0 0 630 402",
  width: "630",
  xmlns: "http://www.w3.org/2000/svg",
  children: [a("rect", {
    fill: "white",
    height: "402",
    opacity: "0.1",
    rx: "4",
    width: "630"
  }), a("path", {
    d: "M535.828 2H626C627.105 2 628 2.89543 628 4V93.8462M94.1718 2H4C2.89543 2 2 2.89543 2 4V93.8462M2 308.154V398C2 399.105 2.89543 400 4 400H94.1718M628 308.154V398C628 399.105 627.105 400 626 400H535.828",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  })]
}), Fa = () => a("svg", {
  fill: "none",
  height: "404",
  preserveAspectRatio: "none",
  viewBox: "0 0 632 404",
  width: "632",
  xmlns: "http://www.w3.org/2000/svg",
  children: [a("rect", {
    fill: "white",
    height: "402",
    opacity: "0.1",
    rx: "17",
    width: "630",
    x: "1",
    y: "1"
  }), a("path", {
    d: "M536.385 2H614C622.837 2 630 9.16344 630 18V96.1176M95.6149 2H18C9.16344 2 2 9.16344 2 18V96.1176M2 307.882V386C2 394.837 9.16343 402 18 402H95.6149M630 307.882V386C630 394.837 622.837 402 614 402H536.385",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  })]
}), Ga = () => a("svg", {
  fill: "none",
  height: "402",
  preserveAspectRatio: "none",
  viewBox: "0 0 630 402",
  width: "630",
  xmlns: "http://www.w3.org/2000/svg",
  children: [a("mask", {
    fill: "white",
    id: "path-2-inside-1_1_3694",
    children: a("rect", {
      height: "402",
      rx: "2",
      width: "630"
    })
  }), a("rect", {
    height: "402",
    mask: "url(#path-2-inside-1_1_3694)",
    rx: "2",
    stroke: "currentColor",
    strokeDasharray: "14 14",
    strokeLinecap: "square",
    strokeWidth: "8",
    width: "630"
  })]
}), ja = () => a("svg", {
  fill: "none",
  height: "402",
  preserveAspectRatio: "none",
  viewBox: "0 0 630 402",
  width: "630",
  xmlns: "http://www.w3.org/2000/svg",
  children: [a("rect", {
    fill: "white",
    height: "402",
    opacity: "0.1",
    rx: "16",
    width: "630"
  }), a("rect", {
    height: "398",
    rx: "14",
    stroke: "currentColor",
    strokeDasharray: "14 14",
    strokeLinecap: "square",
    strokeWidth: "4",
    width: "626",
    x: "2",
    y: "2"
  })]
}), Ya = () => a("svg", {
  fill: "none",
  height: "402",
  preserveAspectRatio: "none",
  viewBox: "0 0 630 402",
  width: "630",
  xmlns: "http://www.w3.org/2000/svg",
  children: a("rect", {
    height: "398",
    stroke: "currentColor",
    strokeDasharray: "1 12 1 12",
    strokeLinecap: "square",
    strokeWidth: "4",
    width: "626",
    x: "2",
    y: "2"
  })
}), qa = () => a("svg", {
  fill: "none",
  height: "402",
  preserveAspectRatio: "none",
  viewBox: "0 0 630 402",
  width: "630",
  xmlns: "http://www.w3.org/2000/svg",
  children: a("rect", {
    height: "398",
    rx: "14",
    stroke: "currentColor",
    strokeDasharray: "1 12 1 12",
    strokeLinecap: "square",
    strokeWidth: "4",
    width: "626",
    x: "2",
    y: "2"
  })
}), Xa = () => a("svg", {
  fill: "none",
  height: "404",
  preserveAspectRatio: "none",
  viewBox: "0 0 632 404",
  width: "632",
  xmlns: "http://www.w3.org/2000/svg",
  children: [a("rect", {
    fill: "white",
    height: "402",
    opacity: "0.1",
    rx: "17",
    width: "630",
    x: "1",
    y: "1"
  }), a("path", {
    d: "M536.385 2H614C622.837 2 630 9.16344 630 18V96.1176M95.6149 2H18C9.16344 2 2 9.16344 2 18V96.1176M2 307.882V386C2 394.837 9.16343 402 18 402H95.6149M630 307.882V386C630 394.837 622.837 402 614 402H536.385",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  }), a("rect", {
    height: "208.731",
    rx: "4",
    stroke: "currentColor",
    strokeWidth: "2",
    width: "170.061",
    x: "35.7852",
    y: "97.6345"
  })]
}), Ka = () => a("svg", {
  fill: "none",
  height: "402",
  preserveAspectRatio: "none",
  viewBox: "0 0 630 402",
  width: "630",
  xmlns: "http://www.w3.org/2000/svg",
  children: [a("rect", {
    fill: "white",
    height: "402",
    opacity: "0.1",
    rx: "4",
    width: "630"
  }), a("mask", {
    fill: "white",
    id: "path-2-inside-1_1_3696",
    children: a("rect", {
      height: "402",
      rx: "2",
      width: "630"
    })
  }), a("rect", {
    height: "402",
    mask: "url(#path-2-inside-1_1_3696)",
    rx: "2",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "8",
    width: "630"
  })]
}), Ja = () => a("svg", {
  fill: "none",
  height: "402",
  preserveAspectRatio: "none",
  viewBox: "0 0 630 402",
  width: "630",
  xmlns: "http://www.w3.org/2000/svg",
  children: [a("rect", {
    fill: "white",
    height: "402",
    opacity: "0.1",
    rx: "16",
    width: "630"
  }), a("rect", {
    height: "398",
    rx: "14",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4",
    width: "626",
    x: "2",
    y: "2"
  })]
}), Qa = () => a("svg", {
  fill: "none",
  height: "402",
  preserveAspectRatio: "none",
  viewBox: "0 0 630 402",
  width: "630",
  xmlns: "http://www.w3.org/2000/svg",
  children: [a("path", {
    d: "M626 251.4V386C626 392.6 620.6 398 614 398H16C9.4 398 4 392.6 4 386V251.4H626ZM628 247.4H2C0.9 247.4 0 248.3 0 249.4V386C0 394.8 7.2 402 16 402H614C622.8 402 630 394.8 630 386V249.4C630 248.3 629.1 247.4 628 247.4Z",
    fill: "currentColor"
  }), a("path", {
    d: "M2 16C2 8.3 8.3 2 16 2H614C621.7 2 628 8.3 628 16V247.4V386C628 393.7 621.7 400 614 400H16C8.3 400 2 393.7 2 386V247.4V16Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  })]
}), ts = () => a("svg", {
  fill: "none",
  height: "402",
  preserveAspectRatio: "none",
  viewBox: "0 0 630 402",
  width: "630",
  xmlns: "http://www.w3.org/2000/svg",
  children: [a("path", {
    d: "M16 0H614C622.8 0 630 7.2 630 16V386C630 394.8 622.8 402 614 402H16C7.2 402 0 394.8 0 386V16C0 7.2 7.2 0 16 0Z",
    fill: "none",
    opacity: "0.1"
  }), a("path", {
    d: "M16 400C8.3 400 2 393.7 2 386V249.4H628V386C628 393.7 621.7 400 614 400H16Z",
    fill: "none"
  }), a("path", {
    d: "M626 251.4V386C626 392.6 620.6 398 614 398H16C9.4 398 4 392.6 4 386V251.4H626ZM628 247.4H2C0.9 247.4 0 248.3 0 249.4V386C0 394.8 7.2 402 16 402H614C622.8 402 630 394.8 630 386V249.4C630 248.3 629.1 247.4 628 247.4Z",
    fill: "currentColor"
  }), a("path", {
    d: "M48.6001 296V292.9L42.4001 290.8L41.6001 290.5L42.4001 290.2L48.6001 288.1V285L38.6001 289.2V291.7L48.6001 296Z",
    fill: "currentColor"
  }), a("path", {
    d: "M67.3001 296V292.9L61.1 290.8L60.3 290.5L61.1 290.2L67.3001 288.1V285L57.3 289.2V291.7L67.3001 296Z",
    fill: "currentColor"
  }), a("path", {
    d: "M86.1001 296V292.9L79.9001 290.8L79.1001 290.5L79.9001 290.2L86.1001 288.1V285L76.1001 289.2V291.7L86.1001 296Z",
    fill: "currentColor"
  }), a("path", {
    d: "M104.8 296V292.9L98.6 290.8L97.8 290.5L98.6 290.2L104.8 288.1V285L94.8 289.2V291.7L104.8 296Z",
    fill: "currentColor"
  }), a("path", {
    d: "M123.5 296V292.9L117.3 290.8L116.5 290.5L117.3 290.2L123.5 288.1V285L113.5 289.2V291.7L123.5 296Z",
    fill: "currentColor"
  }), a("path", {
    d: "M142.2 296V292.9L136 290.8L135.2 290.5L136 290.2L142.2 288.1V285L132.2 289.2V291.7L142.2 296Z",
    fill: "currentColor"
  }), a("path", {
    d: "M160.9 296V292.9L154.7 290.8L153.9 290.5L154.7 290.2L160.9 288.1V285L150.9 289.2V291.7L160.9 296Z",
    fill: "currentColor"
  }), a("path", {
    d: "M179.6 296V292.9L173.4 290.8L172.6 290.5L173.4 290.2L179.6 288.1V285L169.6 289.2V291.7L179.6 296Z",
    fill: "currentColor"
  }), a("path", {
    d: "M198.3 296V292.9L192.1 290.8L191.3 290.5L192.1 290.2L198.3 288.1V285L188.3 289.2V291.7L198.3 296Z",
    fill: "currentColor"
  }), a("path", {
    d: "M217.1 296V292.9L210.9 290.8L210.1 290.5L210.9 290.2L217.1 288.1V285L207.1 289.2V291.7L217.1 296Z",
    fill: "currentColor"
  }), a("path", {
    d: "M235.8 296V292.9L229.6 290.8L228.8 290.5L229.6 290.2L235.8 288.1V285L225.8 289.2V291.7L235.8 296Z",
    fill: "currentColor"
  }), a("path", {
    d: "M254.5 296V292.9L248.3 290.8L247.5 290.5L248.3 290.2L254.5 288.1V285L244.5 289.2V291.7L254.5 296Z",
    fill: "currentColor"
  }), a("path", {
    d: "M273.2 296V292.9L267 290.8L266.2 290.5L267 290.2L273.2 288.1V285L263.2 289.2V291.7L273.2 296Z",
    fill: "currentColor"
  }), a("path", {
    d: "M291.9 296V292.9L285.7 290.8L284.9 290.5L285.7 290.2L291.9 288.1V285L281.9 289.2V291.7L291.9 296Z",
    fill: "currentColor"
  }), a("path", {
    d: "M310.6 296V292.9L304.4 290.8L303.6 290.5L304.4 290.2L310.6 288.1V285L300.6 289.2V291.7L310.6 296Z",
    fill: "currentColor"
  }), a("path", {
    d: "M329.3 296V292.9L323.1 290.8L322.3 290.5L323.1 290.2L329.3 288.1V285L319.3 289.2V291.7L329.3 296Z",
    fill: "currentColor"
  }), a("path", {
    d: "M348.1 296V292.9L341.9 290.8L341.1 290.5L341.9 290.2L348.1 288.1V285L338.1 289.2V291.7L348.1 296Z",
    fill: "currentColor"
  }), a("path", {
    d: "M366.8 296V292.9L360.6 290.8L359.8 290.5L360.6 290.2L366.8 288.1V285L356.8 289.2V291.7L366.8 296Z",
    fill: "currentColor"
  }), a("path", {
    d: "M385.5 296V292.9L379.3 290.8L378.5 290.5L379.3 290.2L385.5 288.1V285L375.5 289.2V291.7L385.5 296Z",
    fill: "currentColor"
  }), a("path", {
    d: "M404.2 296V292.9L398 290.8L397.2 290.5L398 290.2L404.2 288.1V285L394.2 289.2V291.7L404.2 296Z",
    fill: "currentColor"
  }), a("path", {
    d: "M422.9 296V292.9L416.7 290.8L415.9 290.5L416.7 290.2L422.9 288.1V285L412.9 289.2V291.7L422.9 296Z",
    fill: "currentColor"
  }), a("path", {
    d: "M441.6 296V292.9L435.4 290.8L434.6 290.5L435.4 290.2L441.6 288.1V285L431.6 289.2V291.7L441.6 296Z",
    fill: "currentColor"
  }), a("path", {
    d: "M460.3 296V292.9L454.1 290.8L453.3 290.5L454.1 290.2L460.3 288.1V285L450.3 289.2V291.7L460.3 296Z",
    fill: "currentColor"
  }), a("path", {
    d: "M479.1 296V292.9L472.9 290.8L472.1 290.5L472.9 290.2L479.1 288.1V285L469.1 289.2V291.7L479.1 296Z",
    fill: "currentColor"
  }), a("path", {
    d: "M497.8 296V292.9L491.6 290.8L490.8 290.5L491.6 290.2L497.8 288.1V285L487.8 289.2V291.7L497.8 296Z",
    fill: "currentColor"
  }), a("path", {
    d: "M516.5 296V292.9L510.3 290.8L509.5 290.5L510.3 290.2L516.5 288.1V285L506.5 289.2V291.7L516.5 296Z",
    fill: "currentColor"
  }), a("path", {
    d: "M535.2 296V292.9L529 290.8L528.2 290.5L529 290.2L535.2 288.1V285L525.2 289.2V291.7L535.2 296Z",
    fill: "currentColor"
  }), a("path", {
    d: "M553.9 296V292.9L547.7 290.8L546.9 290.5L547.7 290.2L553.9 288.1V285L543.9 289.2V291.7L553.9 296Z",
    fill: "currentColor"
  }), a("path", {
    d: "M572.6 296V292.9L566.4 290.8L565.6 290.5L566.4 290.2L572.6 288.1V285L562.6 289.2V291.7L572.6 296Z",
    fill: "currentColor"
  }), a("path", {
    d: "M591.3 296V292.9L585.1 290.8L584.3 290.5L585.1 290.2L591.3 288.1V285L581.3 289.2V291.7L591.3 296Z",
    fill: "currentColor"
  }), a("path", {
    d: "M48.6001 326.9V323.8L42.4001 321.7L41.6001 321.4L42.4001 321.1L48.6001 319V315.9L38.6001 320.1V322.6L48.6001 326.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M67.3001 326.9V323.8L61.1 321.7L60.3 321.4L61.1 321.1L67.3001 319V315.9L57.3 320.1V322.6L67.3001 326.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M86.1001 326.9V323.8L79.9001 321.7L79.1001 321.4L79.9001 321.1L86.1001 319V315.9L76.1001 320.1V322.6L86.1001 326.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M104.8 326.9V323.8L98.6 321.7L97.8 321.4L98.6 321.1L104.8 319V315.9L94.8 320.1V322.6L104.8 326.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M123.5 326.9V323.8L117.3 321.7L116.5 321.4L117.3 321.1L123.5 319V315.9L113.5 320.1V322.6L123.5 326.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M142.2 326.9V323.8L136 321.7L135.2 321.4L136 321.1L142.2 319V315.9L132.2 320.1V322.6L142.2 326.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M160.9 326.9V323.8L154.7 321.7L153.9 321.4L154.7 321.1L160.9 319V315.9L150.9 320.1V322.6L160.9 326.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M179.6 326.9V323.8L173.4 321.7L172.6 321.4L173.4 321.1L179.6 319V315.9L169.6 320.1V322.6L179.6 326.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M198.3 326.9V323.8L192.1 321.7L191.3 321.4L192.1 321.1L198.3 319V315.9L188.3 320.1V322.6L198.3 326.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M217.1 326.9V323.8L210.9 321.7L210.1 321.4L210.9 321.1L217.1 319V315.9L207.1 320.1V322.6L217.1 326.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M235.8 326.9V323.8L229.6 321.7L228.8 321.4L229.6 321.1L235.8 319V315.9L225.8 320.1V322.6L235.8 326.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M254.5 326.9V323.8L248.3 321.7L247.5 321.4L248.3 321.1L254.5 319V315.9L244.5 320.1V322.6L254.5 326.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M273.2 326.9V323.8L267 321.7L266.2 321.4L267 321.1L273.2 319V315.9L263.2 320.1V322.6L273.2 326.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M291.9 326.9V323.8L285.7 321.7L284.9 321.4L285.7 321.1L291.9 319V315.9L281.9 320.1V322.6L291.9 326.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M310.6 326.9V323.8L304.4 321.7L303.6 321.4L304.4 321.1L310.6 319V315.9L300.6 320.1V322.6L310.6 326.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M329.3 326.9V323.8L323.1 321.7L322.3 321.4L323.1 321.1L329.3 319V315.9L319.3 320.1V322.6L329.3 326.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M348.1 326.9V323.8L341.9 321.7L341.1 321.4L341.9 321.1L348.1 319V315.9L338.1 320.1V322.6L348.1 326.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M366.8 326.9V323.8L360.6 321.7L359.8 321.4L360.6 321.1L366.8 319V315.9L356.8 320.1V322.6L366.8 326.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M385.5 326.9V323.8L379.3 321.7L378.5 321.4L379.3 321.1L385.5 319V315.9L375.5 320.1V322.6L385.5 326.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M404.2 326.9V323.8L398 321.7L397.2 321.4L398 321.1L404.2 319V315.9L394.2 320.1V322.6L404.2 326.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M422.9 326.9V323.8L416.7 321.7L415.9 321.4L416.7 321.1L422.9 319V315.9L412.9 320.1V322.6L422.9 326.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M441.6 326.9V323.8L435.4 321.7L434.6 321.4L435.4 321.1L441.6 319V315.9L431.6 320.1V322.6L441.6 326.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M460.3 326.9V323.8L454.1 321.7L453.3 321.4L454.1 321.1L460.3 319V315.9L450.3 320.1V322.6L460.3 326.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M479.1 326.9V323.8L472.9 321.7L472.1 321.4L472.9 321.1L479.1 319V315.9L469.1 320.1V322.6L479.1 326.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M497.8 326.9V323.8L491.6 321.7L490.8 321.4L491.6 321.1L497.8 319V315.9L487.8 320.1V322.6L497.8 326.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M516.5 326.9V323.8L510.3 321.7L509.5 321.4L510.3 321.1L516.5 319V315.9L506.5 320.1V322.6L516.5 326.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M535.2 326.9V323.8L529 321.7L528.2 321.4L529 321.1L535.2 319V315.9L525.2 320.1V322.6L535.2 326.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M553.9 326.9V323.8L547.7 321.7L546.9 321.4L547.7 321.1L553.9 319V315.9L543.9 320.1V322.6L553.9 326.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M572.6 326.9V323.8L566.4 321.7L565.6 321.4L566.4 321.1L572.6 319V315.9L562.6 320.1V322.6L572.6 326.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M591.3 326.9V323.8L585.1 321.7L584.3 321.4L585.1 321.1L591.3 319V315.9L581.3 320.1V322.6L591.3 326.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M48.6001 357.9V354.8L42.4001 352.7L41.6001 352.4L42.4001 352.1L48.6001 350V347L38.6001 351.2V353.7L48.6001 357.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M67.3001 357.9V354.8L61.1 352.7L60.3 352.4L61.1 352.1L67.3001 350V347L57.3 351.2V353.7L67.3001 357.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M86.1001 357.9V354.8L79.9001 352.7L79.1001 352.4L79.9001 352.1L86.1001 350V347L76.1001 351.2V353.7L86.1001 357.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M104.8 357.9V354.8L98.6 352.7L97.8 352.4L98.6 352.1L104.8 350V347L94.8 351.2V353.7L104.8 357.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M123.5 357.9V354.8L117.3 352.7L116.5 352.4L117.3 352.1L123.5 350V347L113.5 351.2V353.7L123.5 357.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M142.2 357.9V354.8L136 352.7L135.2 352.4L136 352.1L142.2 350V347L132.2 351.2V353.7L142.2 357.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M160.9 357.9V354.8L154.7 352.7L153.9 352.4L154.7 352.1L160.9 350V347L150.9 351.2V353.7L160.9 357.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M179.6 357.9V354.8L173.4 352.7L172.6 352.4L173.4 352.1L179.6 350V347L169.6 351.2V353.7L179.6 357.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M198.3 357.9V354.8L192.1 352.7L191.3 352.4L192.1 352.1L198.3 350V347L188.3 351.2V353.7L198.3 357.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M217.1 357.9V354.8L210.9 352.7L210.1 352.4L210.9 352.1L217.1 350V347L207.1 351.2V353.7L217.1 357.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M235.8 357.9V354.8L229.6 352.7L228.8 352.4L229.6 352.1L235.8 350V347L225.8 351.2V353.7L235.8 357.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M254.5 357.9V354.8L248.3 352.7L247.5 352.4L248.3 352.1L254.5 350V347L244.5 351.2V353.7L254.5 357.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M273.2 357.9V354.8L267 352.7L266.2 352.4L267 352.1L273.2 350V347L263.2 351.2V353.7L273.2 357.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M291.9 357.9V354.8L285.7 352.7L284.9 352.4L285.7 352.1L291.9 350V347L281.9 351.2V353.7L291.9 357.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M310.6 357.9V354.8L304.4 352.7L303.6 352.4L304.4 352.1L310.6 350V347L300.6 351.2V353.7L310.6 357.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M329.3 357.9V354.8L323.1 352.7L322.3 352.4L323.1 352.1L329.3 350V347L319.3 351.2V353.7L329.3 357.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M348.1 357.9V354.8L341.9 352.7L341.1 352.4L341.9 352.1L348.1 350V347L338.1 351.2V353.7L348.1 357.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M366.8 357.9V354.8L360.6 352.7L359.8 352.4L360.6 352.1L366.8 350V347L356.8 351.2V353.7L366.8 357.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M385.5 357.9V354.8L379.3 352.7L378.5 352.4L379.3 352.1L385.5 350V347L375.5 351.2V353.7L385.5 357.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M404.2 357.9V354.8L398 352.7L397.2 352.4L398 352.1L404.2 350V347L394.2 351.2V353.7L404.2 357.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M422.9 357.9V354.8L416.7 352.7L415.9 352.4L416.7 352.1L422.9 350V347L412.9 351.2V353.7L422.9 357.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M441.6 357.9V354.8L435.4 352.7L434.6 352.4L435.4 352.1L441.6 350V347L431.6 351.2V353.7L441.6 357.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M460.3 357.9V354.8L454.1 352.7L453.3 352.4L454.1 352.1L460.3 350V347L450.3 351.2V353.7L460.3 357.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M479.1 357.9V354.8L472.9 352.7L472.1 352.4L472.9 352.1L479.1 350V347L469.1 351.2V353.7L479.1 357.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M497.8 357.9V354.8L491.6 352.7L490.8 352.4L491.6 352.1L497.8 350V347L487.8 351.2V353.7L497.8 357.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M516.5 357.9V354.8L510.3 352.7L509.5 352.4L510.3 352.1L516.5 350V347L506.5 351.2V353.7L516.5 357.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M535.2 357.9V354.8L529 352.7L528.2 352.4L529 352.1L535.2 350V347L525.2 351.2V353.7L535.2 357.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M553.9 357.9V354.8L547.7 352.7L546.9 352.4L547.7 352.1L553.9 350V347L543.9 351.2V353.7L553.9 357.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M572.6 357.9V354.8L566.4 352.7L565.6 352.4L566.4 352.1L572.6 350V347L562.6 351.2V353.7L572.6 357.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M591.3 357.9V354.8L585.1 352.7L584.3 352.4L585.1 352.1L591.3 350V347L581.3 351.2V353.7L591.3 357.9Z",
    fill: "currentColor"
  }), a("path", {
    d: "M2 16C2 8.3 8.3 2 16 2H614C621.7 2 628 8.3 628 16V247.4V386C628 393.7 621.7 400 614 400H16C8.3 400 2 393.7 2 386V247.4V16Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  })]
}), es = () => a("svg", {
  fill: "none",
  height: "114",
  preserveAspectRatio: "none",
  viewBox: "0 0 163 114",
  width: "163",
  xmlns: "http://www.w3.org/2000/svg",
  children: [a("path", {
    d: "M2 0.5H161C161.828 0.5 162.5 1.17157 162.5 2V110C162.5 111.933 160.933 113.5 159 113.5H4C2.067 113.5 0.5 111.933 0.5 110V2C0.5 1.17157 1.17157 0.5 2 0.5Z",
    stroke: "currentColor",
    strokeLinecap: "round"
  }), a("path", {
    d: "M1 85H162",
    stroke: "currentColor"
  }), a("defs", {
    children: a("filter", {
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      height: "18.8096",
      id: "filter0_d",
      width: "151",
      x: "6",
      y: "93",
      children: [a("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), a("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        type: "matrix",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }), a("feOffset", {
        dy: "4"
      }), a("feGaussianBlur", {
        stdDeviation: "2"
      }), a("feColorMatrix", {
        type: "matrix",
        values: "0 0 0 0 0 0 0 0 0 0.74902 0 0 0 0 0.698039 0 0 0 0.08 0"
      }), a("feBlend", {
        in2: "BackgroundImageFix",
        mode: "darken",
        result: "effect1_dropShadow"
      }), a("feBlend", {
        in: "SourceGraphic",
        in2: "effect1_dropShadow",
        mode: "normal",
        result: "shape"
      })]
    })
  })]
}), ns = Z.div`
  position: absolute;
  top: ${(t) => t.$placeholderRectangle.shiftY * 100}%;
  bottom: ${(t) => (1 - t.$placeholderRectangle.shiftY - t.$placeholderRectangle.height) * 100}%;
  left: ${(t) => t.$placeholderRectangle.shiftX * 100}%;
  right: ${(t) => (1 - t.$placeholderRectangle.shiftX - t.$placeholderRectangle.width) * 100}%;
  color: ${(t) => t.$isInCandidateSelection ? `${t.theme.colors.placeholderColorSuccess}` : `${t.theme.colors.placeholderColor}`};

  svg {
    width: 100%;
    height: 100%;
  }
`, rs = ({
  children: t,
  isInCandidateSelection: e,
  placeholderRectangle: n
}) => a(ns, {
  $isInCandidateSelection: e,
  $placeholderRectangle: n,
  children: t
}), os = {
  [T.ID_CORNERS]: a(za, {}),
  [T.ID_DASH]: a(Ga, {}),
  [T.ID_DOT]: a(Ya, {}),
  [T.ID_SOLID]: a(Ka, {}),
  [T.ID_PHOTO_ROUNDED]: a(Xa, {}),
  [T.ID_CORNERS_ROUNDED]: a(Fa, {}),
  [T.ID_DASH_ROUNDED]: a(ja, {}),
  [T.ID_DOT_ROUNDED]: a(qa, {}),
  [T.ID_SOLID_ROUNDED]: a(Ja, {}),
  [T.ID_SOLID_ROUNDED_BACK]: a(Qa, {}),
  [T.PASSPORT_SOLID_BACK]: a(ts, {}),
  [T.PASSPORT_SOLID_BACK_BLANK]: a(es, {})
}, is = ({
  backdropColor: t,
  icon: e,
  isBackdrop: n,
  placeholderRectangle: r,
  ...o
}) => a(U, {
  children: [n && a(Fr, {
    backdropColor: t,
    children: a("rect", {
      fill: "#000",
      height: `${r.height * 100}%`,
      rx: "2%",
      width: `${r.width * 100}%`,
      x: `${r.shiftX * 100}%`,
      y: `${r.shiftY * 100}%`
    })
  }), a(rs, {
    placeholderRectangle: r,
    ...o,
    children: os[e]
  })]
}), as = () => {
  const [t, e] = G(), [n, r] = G(!1), o = Lt((h) => {
    var m, E;
    e((m = h == null ? void 0 : h.detail) == null ? void 0 : m.cameraResolution);
    const d = (E = h == null ? void 0 : h.detail) == null ? void 0 : E.isMirroring;
    d !== void 0 && r(d);
  }, [e]);
  Rt(st.CAMERA_PROPS_CHANGED, o);
  const [i, s] = G(
    W.DOCUMENT_NOT_PRESENT
    // FIXME Default instruction should not be here
  ), l = Lt((h) => {
    var d;
    s((d = h == null ? void 0 : h.detail) == null ? void 0 : d.instructionCode);
  }, [s]);
  Rt(st.INSTRUCTION_CHANGED, l);
  const [u, p] = G(F.LOADING), [f, c] = G(), _ = Lt((h) => {
    var m, E;
    p((m = h.detail) == null ? void 0 : m.appState);
    const d = (E = h == null ? void 0 : h.detail) == null ? void 0 : E.error;
    d && c(d);
  }, [p, c]);
  return Rt(st.STATE_CHANGED, _), {
    cameraResolution: t,
    appState: u,
    error: f,
    instructionCode: i,
    isMirroring: n
  };
}, ss = Z.canvas`
  transform: ${(t) => t.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, $t = (t, e) => Math.hypot(e.x - t.x, e.y - t.y), qn = (t, e, n) => {
  const r = (e.x - t.x) * n, o = (e.y - t.y) * n;
  return {
    x: t.x + r,
    y: t.y + o
  };
}, Xn = (t, e, n, r) => {
  const o = $t(t, e);
  return n * r / o;
}, cs = (t) => {
  const {
    bottomLeft: e,
    bottomRight: n,
    topLeft: r,
    topRight: o
  } = t, i = $t(r, o), s = $t(o, n), l = $t(e, n), u = $t(r, e);
  return Math.min(i, s, l, u);
}, ls = (t) => {
  const e = t.getContext("2d");
  e && e.clearRect(0, 0, e.canvas.width, e.canvas.height);
}, us = ({
  cameraResolution: t,
  isImageMirror: e
}) => {
  const n = se(null), r = Ji(), [o, i] = G(), s = Lt((l) => {
    var u;
    i((u = l == null ? void 0 : l.detail) == null ? void 0 : u.detectedObject);
  }, [i]);
  return Rt(st.DETECTED_DOCUMENT_CHANGED, s), vt(() => {
    if (!n.current)
      return;
    const l = (p, f, c, _) => {
      var C;
      const h = Xn(f, p, _, Wn), d = Xn(f, c, _, Wn), m = qn(f, p, h), E = qn(f, c, d), L = (C = n == null ? void 0 : n.current) == null ? void 0 : C.getContext("2d");
      L && (L.beginPath(), L.lineWidth = ra, L.strokeStyle = r.colors.placeholderColor, L.moveTo(m.x, m.y), L.arcTo(f.x, f.y, E.x, E.y, na), L.lineTo(E.x, E.y), L.stroke());
    }, u = (p) => {
      if (!p)
        return;
      const {
        bottomLeft: f,
        bottomRight: c,
        topLeft: _,
        topRight: h
      } = p, d = cs(p);
      l(f, _, h, d), l(_, h, c, d), l(h, c, f, d), l(c, f, _, d);
    };
    n.current.width = t.width, n.current.height = t.height, ls(n.current), u(o);
  }, [t, o, r.colors.placeholderColor]), a(ss, {
    ref: n,
    $isImageMirror: e
  });
}, ds = ({
  appStateInstructions: t,
  backdropColor: e,
  instructions: n,
  placeholderIcon: r,
  showCameraButtons: o,
  showDetectionLayer: i,
  videoElementSize: s
}) => {
  const {
    appState: l,
    cameraResolution: u,
    error: p,
    instructionCode: f,
    isMirroring: c
  } = as(), _ = f === W.CANDIDATE_SELECTION, h = Br(s), d = r === T.ID_CORNERS_ROUNDED;
  return l === F.ERROR ? a(Ur, {
    fontSize: h,
    text: p == null ? void 0 : p.message
  }) : l === F.RUNNING && u ? a(U, {
    children: [i && a(us, {
      cameraResolution: u,
      isImageMirror: c
    }), a(is, {
      backdropColor: e,
      icon: r,
      isBackdrop: d,
      isInCandidateSelection: _,
      placeholderRectangle: ba(u)
    }), f && a(Wa, {
      cssTop: 50,
      fontSize: h,
      isInCandidateSelection: _,
      children: n[f]
    }), o && a($a, {
      customControlEvent: st.CONTROL,
      isSwitchCameraDisabled: _,
      videoElementSize: s
    })]
  }) : a(Ta, {
    appState: l,
    appStateInstructions: t,
    backdropColor: e,
    fontSize: h,
    isBackdrop: d
  });
};
const hs = (t) => {
  var l, u;
  const e = {
    ...oa,
    ...t == null ? void 0 : t.instructions
  }, n = {
    [F.LOADING]: {
      ...Gn.loading,
      ...(l = t == null ? void 0 : t.appStateInstructions) == null ? void 0 : l.loading
    },
    [F.WAITING]: {
      ...Gn.waiting,
      ...(u = t == null ? void 0 : t.appStateInstructions) == null ? void 0 : u.waiting
    }
  }, r = (t == null ? void 0 : t.placeholder) ?? ia, o = (t == null ? void 0 : t.backdropColor) ?? aa, i = (t == null ? void 0 : t.showDetectionLayer) ?? !1, s = (t == null ? void 0 : t.showCameraButtons) ?? !1;
  return {
    documentInstructions: e,
    documentAppStateInstructions: n,
    documentPlaceholderIcon: r,
    backdropColor: o,
    showDetectionLayer: i,
    showCameraButtons: s
  };
}, fs = ({
  props: t
}) => {
  const {
    backdropColor: e,
    documentAppStateInstructions: n,
    documentInstructions: r,
    documentPlaceholderIcon: o,
    showCameraButtons: i,
    showDetectionLayer: s
  } = hs(t), l = _a(st.VIDEO_ELEMENT_SIZE), u = ga(t);
  return a(pa, {
    theme: u,
    videoElementSize: l,
    children: a(ds, {
      appStateInstructions: n,
      backdropColor: e,
      instructions: r,
      placeholderIcon: o,
      showCameraButtons: i,
      showDetectionLayer: s,
      videoElementSize: l
    })
  });
};
uo(fs, "x-dot-document-auto-capture-ui", ["props"]);
