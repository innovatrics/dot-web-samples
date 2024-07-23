var eo = Object.defineProperty;
var ro = (t, e, r) => e in t ? eo(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var zt = (t, e, r) => (ro(t, typeof e != "symbol" ? e + "" : e, r), r);
var Ut, m, en, ct, _r, rn, Me, nn, Bt = {}, on = [], no = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, he = Array.isArray;
function J(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}
function an(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function R(t, e, r) {
  var n, o, i, a = {};
  for (i in e)
    i == "key" ? n = e[i] : i == "ref" ? o = e[i] : a[i] = e[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ut.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null)
    for (i in t.defaultProps)
      a[i] === void 0 && (a[i] = t.defaultProps[i]);
  return Pt(t, a, n, o, null);
}
function Pt(t, e, r, n, o) {
  var i = { type: t, props: e, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o ?? ++en, __i: -1, __u: 0 };
  return o == null && m.vnode != null && m.vnode(i), i;
}
function oo() {
  return { current: null };
}
function Z(t) {
  return t.children;
}
function F(t, e) {
  this.props = t, this.context = e;
}
function Ct(t, e) {
  if (e == null)
    return t.__ ? Ct(t.__, t.__i + 1) : null;
  for (var r; e < t.__k.length; e++)
    if ((r = t.__k[e]) != null && r.__e != null)
      return r.__e;
  return typeof t.type == "function" ? Ct(t) : null;
}
function sn(t) {
  var e, r;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((r = t.__k[e]) != null && r.__e != null) {
        t.__e = t.__c.base = r.__e;
        break;
      }
    return sn(t);
  }
}
function Re(t) {
  (!t.__d && (t.__d = !0) && ct.push(t) && !ie.__r++ || _r !== m.debounceRendering) && ((_r = m.debounceRendering) || rn)(ie);
}
function ie() {
  var t, e, r, n, o, i, a, c, l;
  for (ct.sort(Me); t = ct.shift(); )
    t.__d && (e = ct.length, n = void 0, i = (o = (r = t).__v).__e, c = [], l = [], (a = r.__P) && ((n = J({}, o)).__v = o.__v + 1, m.vnode && m.vnode(n), Qe(a, n, o, r.__n, a.ownerSVGElement !== void 0, 32 & o.__u ? [i] : null, c, i ?? Ct(o), !!(32 & o.__u), l), n.__.__k[n.__i] = n, un(c, n, l), n.__e != i && sn(n)), ct.length > e && ct.sort(Me));
  ie.__r = 0;
}
function cn(t, e, r, n, o, i, a, c, l, d, f) {
  var u, p, h, _, L, C = n && n.__k || on, g = e.length;
  for (r.__d = l, io(r, e, C), l = r.__d, u = 0; u < g; u++)
    (h = r.__k[u]) != null && typeof h != "boolean" && typeof h != "function" && (p = h.__i === -1 ? Bt : C[h.__i] || Bt, h.__i = u, Qe(t, h, p, o, i, a, c, l, d, f), _ = h.__e, h.ref && p.ref != h.ref && (p.ref && tr(p.ref, null, h), f.push(h.ref, h.__c || _, h)), L == null && _ != null && (L = _), 65536 & h.__u || p.__k === h.__k ? l = ln(h, l, t) : typeof h.type == "function" && h.__d !== void 0 ? l = h.__d : _ && (l = _.nextSibling), h.__d = void 0, h.__u &= -196609);
  r.__d = l, r.__e = L;
}
function io(t, e, r) {
  var n, o, i, a, c, l = e.length, d = r.length, f = d, u = 0;
  for (t.__k = [], n = 0; n < l; n++)
    (o = t.__k[n] = (o = e[n]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? Pt(null, o, null, null, o) : he(o) ? Pt(Z, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? Pt(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = t, o.__b = t.__b + 1, c = ao(o, r, a = n + u, f), o.__i = c, i = null, c !== -1 && (f--, (i = r[c]) && (i.__u |= 131072)), i == null || i.__v === null ? (c == -1 && u--, typeof o.type != "function" && (o.__u |= 65536)) : c !== a && (c === a + 1 ? u++ : c > a ? f > l - a ? u += c - a : u-- : u = c < a && c == a - 1 ? c - a : 0, c !== n + u && (o.__u |= 65536))) : (i = r[n]) && i.key == null && i.__e && (i.__e == t.__d && (t.__d = Ct(i)), Te(i, i, !1), r[n] = null, f--);
  if (f)
    for (n = 0; n < d; n++)
      (i = r[n]) != null && !(131072 & i.__u) && (i.__e == t.__d && (t.__d = Ct(i)), Te(i, i));
}
function ln(t, e, r) {
  var n, o;
  if (typeof t.type == "function") {
    for (n = t.__k, o = 0; n && o < n.length; o++)
      n[o] && (n[o].__ = t, e = ln(n[o], e, r));
    return e;
  }
  return t.__e != e && (r.insertBefore(t.__e, e || null), e = t.__e), e && e.nextSibling;
}
function Q(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (he(t) ? t.some(function(r) {
    Q(r, e);
  }) : e.push(t)), e;
}
function ao(t, e, r, n) {
  var o = t.key, i = t.type, a = r - 1, c = r + 1, l = e[r];
  if (l === null || l && o == l.key && i === l.type)
    return r;
  if (n > (l != null && !(131072 & l.__u) ? 1 : 0))
    for (; a >= 0 || c < e.length; ) {
      if (a >= 0) {
        if ((l = e[a]) && !(131072 & l.__u) && o == l.key && i === l.type)
          return a;
        a--;
      }
      if (c < e.length) {
        if ((l = e[c]) && !(131072 & l.__u) && o == l.key && i === l.type)
          return c;
        c++;
      }
    }
  return -1;
}
function mr(t, e, r) {
  e[0] === "-" ? t.setProperty(e, r ?? "") : t[e] = r == null ? "" : typeof r != "number" || no.test(e) ? r : r + "px";
}
function jt(t, e, r, n, o) {
  var i;
  t:
    if (e === "style")
      if (typeof r == "string")
        t.style.cssText = r;
      else {
        if (typeof n == "string" && (t.style.cssText = n = ""), n)
          for (e in n)
            r && e in r || mr(t.style, e, "");
        if (r)
          for (e in r)
            n && r[e] === n[e] || mr(t.style, e, r[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      i = e !== (e = e.replace(/(PointerCapture)$|Capture$/, "$1")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = r, r ? n ? r.u = n.u : (r.u = Date.now(), t.addEventListener(e, i ? Lr : gr, i)) : t.removeEventListener(e, i ? Lr : gr, i);
    else {
      if (o)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e !== "rowSpan" && e !== "colSpan" && e !== "role" && e in t)
        try {
          t[e] = r ?? "";
          break t;
        } catch {
        }
      typeof r == "function" || (r == null || r === !1 && e[4] !== "-" ? t.removeAttribute(e) : t.setAttribute(e, r));
    }
}
function gr(t) {
  var e = this.l[t.type + !1];
  if (t.t) {
    if (t.t <= e.u)
      return;
  } else
    t.t = Date.now();
  return e(m.event ? m.event(t) : t);
}
function Lr(t) {
  return this.l[t.type + !0](m.event ? m.event(t) : t);
}
function Qe(t, e, r, n, o, i, a, c, l, d) {
  var f, u, p, h, _, L, C, g, v, V, k, O, S, y, U, N = e.type;
  if (e.constructor !== void 0)
    return null;
  128 & r.__u && (l = !!(32 & r.__u), i = [c = e.__e = r.__e]), (f = m.__b) && f(e);
  t:
    if (typeof N == "function")
      try {
        if (g = e.props, v = (f = N.contextType) && n[f.__c], V = f ? v ? v.props.value : f.__ : n, r.__c ? C = (u = e.__c = r.__c).__ = u.__E : ("prototype" in N && N.prototype.render ? e.__c = u = new N(g, V) : (e.__c = u = new F(g, V), u.constructor = N, u.render = co), v && v.sub(u), u.props = g, u.state || (u.state = {}), u.context = V, u.__n = n, p = u.__d = !0, u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), N.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = J({}, u.__s)), J(u.__s, N.getDerivedStateFromProps(g, u.__s))), h = u.props, _ = u.state, u.__v = e, p)
          N.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (N.getDerivedStateFromProps == null && g !== h && u.componentWillReceiveProps != null && u.componentWillReceiveProps(g, V), !u.__e && (u.shouldComponentUpdate != null && u.shouldComponentUpdate(g, u.__s, V) === !1 || e.__v === r.__v)) {
            for (e.__v !== r.__v && (u.props = g, u.state = u.__s, u.__d = !1), e.__e = r.__e, e.__k = r.__k, e.__k.forEach(function(gt) {
              gt && (gt.__ = e);
            }), k = 0; k < u._sb.length; k++)
              u.__h.push(u._sb[k]);
            u._sb = [], u.__h.length && a.push(u);
            break t;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(g, u.__s, V), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(h, _, L);
          });
        }
        if (u.context = V, u.props = g, u.__P = t, u.__e = !1, O = m.__r, S = 0, "prototype" in N && N.prototype.render) {
          for (u.state = u.__s, u.__d = !1, O && O(e), f = u.render(u.props, u.state, u.context), y = 0; y < u._sb.length; y++)
            u.__h.push(u._sb[y]);
          u._sb = [];
        } else
          do
            u.__d = !1, O && O(e), f = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++S < 25);
        u.state = u.__s, u.getChildContext != null && (n = J(J({}, n), u.getChildContext())), p || u.getSnapshotBeforeUpdate == null || (L = u.getSnapshotBeforeUpdate(h, _)), cn(t, he(U = f != null && f.type === Z && f.key == null ? f.props.children : f) ? U : [U], e, r, n, o, i, a, c, l, d), u.base = e.__e, e.__u &= -161, u.__h.length && a.push(u), C && (u.__E = u.__ = null);
      } catch (gt) {
        e.__v = null, l || i != null ? (e.__e = c, e.__u |= l ? 160 : 32, i[i.indexOf(c)] = null) : (e.__e = r.__e, e.__k = r.__k), m.__e(gt, e, r);
      }
    else
      i == null && e.__v === r.__v ? (e.__k = r.__k, e.__e = r.__e) : e.__e = so(r.__e, e, r, n, o, i, a, l, d);
  (f = m.diffed) && f(e);
}
function un(t, e, r) {
  e.__d = void 0;
  for (var n = 0; n < r.length; n++)
    tr(r[n], r[++n], r[++n]);
  m.__c && m.__c(e, t), t.some(function(o) {
    try {
      t = o.__h, o.__h = [], t.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      m.__e(i, o.__v);
    }
  });
}
function so(t, e, r, n, o, i, a, c, l) {
  var d, f, u, p, h, _, L, C = r.props, g = e.props, v = e.type;
  if (v === "svg" && (o = !0), i != null) {
    for (d = 0; d < i.length; d++)
      if ((h = i[d]) && "setAttribute" in h == !!v && (v ? h.localName === v : h.nodeType === 3)) {
        t = h, i[d] = null;
        break;
      }
  }
  if (t == null) {
    if (v === null)
      return document.createTextNode(g);
    t = o ? document.createElementNS("http://www.w3.org/2000/svg", v) : document.createElement(v, g.is && g), i = null, c = !1;
  }
  if (v === null)
    C === g || c && t.data === g || (t.data = g);
  else {
    if (i = i && Ut.call(t.childNodes), C = r.props || Bt, !c && i != null)
      for (C = {}, d = 0; d < t.attributes.length; d++)
        C[(h = t.attributes[d]).name] = h.value;
    for (d in C)
      h = C[d], d == "children" || (d == "dangerouslySetInnerHTML" ? u = h : d === "key" || d in g || jt(t, d, null, h, o));
    for (d in g)
      h = g[d], d == "children" ? p = h : d == "dangerouslySetInnerHTML" ? f = h : d == "value" ? _ = h : d == "checked" ? L = h : d === "key" || c && typeof h != "function" || C[d] === h || jt(t, d, h, C[d], o);
    if (f)
      c || u && (f.__html === u.__html || f.__html === t.innerHTML) || (t.innerHTML = f.__html), e.__k = [];
    else if (u && (t.innerHTML = ""), cn(t, he(p) ? p : [p], e, r, n, o && v !== "foreignObject", i, a, i ? i[0] : r.__k && Ct(r, 0), c, l), i != null)
      for (d = i.length; d--; )
        i[d] != null && an(i[d]);
    c || (d = "value", _ !== void 0 && (_ !== t[d] || v === "progress" && !_ || v === "option" && _ !== C[d]) && jt(t, d, _, C[d], !1), d = "checked", L !== void 0 && L !== t[d] && jt(t, d, L, C[d], !1));
  }
  return t;
}
function tr(t, e, r) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (n) {
    m.__e(n, r);
  }
}
function Te(t, e, r) {
  var n, o;
  if (m.unmount && m.unmount(t), (n = t.ref) && (n.current && n.current !== t.__e || tr(n, null, e)), (n = t.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (i) {
        m.__e(i, e);
      }
    n.base = n.__P = null, t.__c = void 0;
  }
  if (n = t.__k)
    for (o = 0; o < n.length; o++)
      n[o] && Te(n[o], e, r || typeof t.type != "function");
  r || t.__e == null || an(t.__e), t.__ = t.__e = t.__d = void 0;
}
function co(t, e, r) {
  return this.constructor(t, r);
}
function ot(t, e, r) {
  var n, o, i, a;
  m.__ && m.__(t, e), o = (n = typeof r == "function") ? null : r && r.__k || e.__k, i = [], a = [], Qe(e, t = (!n && r || e).__k = R(Z, null, [t]), o || Bt, Bt, e.ownerSVGElement !== void 0, !n && r ? [r] : o ? null : e.firstChild ? Ut.call(e.childNodes) : null, i, !n && r ? r : o ? o.__e : e.firstChild, n, a), un(i, t, a);
}
function er(t, e) {
  ot(t, e, er);
}
function rr(t, e, r) {
  var n, o, i, a, c = J({}, t.props);
  for (i in t.type && t.type.defaultProps && (a = t.type.defaultProps), e)
    i == "key" ? n = e[i] : i == "ref" ? o = e[i] : c[i] = e[i] === void 0 && a !== void 0 ? a[i] : e[i];
  return arguments.length > 2 && (c.children = arguments.length > 3 ? Ut.call(arguments, 2) : r), Pt(t.type, c, n || t.key, o || t.ref, null);
}
function lo(t, e) {
  var r = { __c: e = "__cC" + nn++, __: t, Consumer: function(n, o) {
    return n.children(o);
  }, Provider: function(n) {
    var o, i;
    return this.getChildContext || (o = [], (i = {})[e] = this, this.getChildContext = function() {
      return i;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && o.some(function(c) {
        c.__e = !0, Re(c);
      });
    }, this.sub = function(a) {
      o.push(a);
      var c = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        o.splice(o.indexOf(a), 1), c && c.call(a);
      };
    }), n.children;
  } };
  return r.Provider.__ = r.Consumer.contextType = r;
}
Ut = on.slice, m = { __e: function(t, e, r, n) {
  for (var o, i, a; e = e.__; )
    if ((o = e.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(t)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, n || {}), a = o.__d), a)
          return o.__E = o;
      } catch (c) {
        t = c;
      }
  throw t;
} }, en = 0, F.prototype.setState = function(t, e) {
  var r;
  r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = J({}, this.state), typeof t == "function" && (t = t(J({}, r), this.props)), t && J(r, t), t != null && this.__v && (e && this._sb.push(e), Re(this));
}, F.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Re(this));
}, F.prototype.render = Z, ct = [], rn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Me = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, ie.__r = 0, nn = 0;
function nr() {
  return (nr = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }).apply(this, arguments);
}
var uo = ["context", "children"];
function ho(t) {
  this.getChildContext = function() {
    return t.context;
  };
  var e = t.children, r = function(n, o) {
    if (n == null)
      return {};
    var i, a, c = {}, l = Object.keys(n);
    for (a = 0; a < l.length; a++)
      o.indexOf(i = l[a]) >= 0 || (c[i] = n[i]);
    return c;
  }(t, uo);
  return rr(e, r);
}
function fo() {
  var t = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(t), this._vdom = R(ho, nr({}, this._props, { context: t.detail.context }), function e(r, n) {
    if (r.nodeType === 3)
      return r.data;
    if (r.nodeType !== 1)
      return null;
    var o = [], i = {}, a = 0, c = r.attributes, l = r.childNodes;
    for (a = c.length; a--; )
      c[a].name !== "slot" && (i[c[a].name] = c[a].value, i[dn(c[a].name)] = c[a].value);
    for (a = l.length; a--; ) {
      var d = e(l[a], null), f = l[a].slot;
      f ? i[f] = R(yr, { name: f }, d) : o[a] = d;
    }
    var u = n ? R(yr, null, o) : o;
    return R(n || r.nodeName.toLowerCase(), i, u);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? er : ot)(this._vdom, this._root);
}
function dn(t) {
  return t.replace(/-(\w)/g, function(e, r) {
    return r ? r.toUpperCase() : "";
  });
}
function po(t, e, r) {
  if (this._vdom) {
    var n = {};
    n[t] = r = r ?? void 0, n[dn(t)] = r, this._vdom = rr(this._vdom, n), ot(this._vdom, this._root);
  }
}
function _o() {
  ot(this._vdom = null, this._root);
}
function yr(t, e) {
  var r = this;
  return R("slot", nr({}, t, { ref: function(n) {
    n ? (r.ref = n, r._listener || (r._listener = function(o) {
      o.stopPropagation(), o.detail.context = e;
    }, n.addEventListener("_preact", r._listener))) : r.ref.removeEventListener("_preact", r._listener);
  } }));
}
function mo(t, e, r, n) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = t, i._root = n && n.shadow ? i.attachShadow({ mode: n.mode || "open" }) : i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = fo, o.prototype.attributeChangedCallback = po, o.prototype.disconnectedCallback = _o, r = r || t.observedAttributes || Object.keys(t.propTypes || {}), o.observedAttributes = r, r.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom.props[i];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(i, null, a) : (this._props || (this._props = {}), this._props[i] = a, this.connectedCallback());
      var c = typeof a;
      a != null && c !== "string" && c !== "boolean" && c !== "number" || this.setAttribute(i, a);
    } });
  }), customElements.define(e || t.tagName || t.displayName || t.name, o);
}
var Ae = /* @__PURE__ */ ((t) => (t.CONTINUE_DETECTION = "continue-detection", t.SWITCH_CAMERA = "switch-camera", t.TOGGLE_MIRROR = "toggle-mirror", t))(Ae || {}), dt = /* @__PURE__ */ ((t) => (t.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", t.CONTROL = "document-auto-capture:control", t.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", t.DOCUMENT_DETECTION = "document-auto-capture:document-detection", t.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", t.STATE_CHANGED = "document-auto-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", t))(dt || {});
const z = {
  CANDIDATE_SELECTION: "candidate_selection",
  DOCUMENT_CENTERING: "document_centering",
  DOCUMENT_NOT_PRESENT: "document_not_present",
  DOCUMENT_TOO_FAR: "document_too_far",
  SHARPNESS_TOO_LOW: "sharpness_too_low",
  BRIGHTNESS_TOO_LOW: "brightness_too_low",
  BRIGHTNESS_TOO_HIGH: "brightness_too_high",
  HOTSPOTS_PRESENT: "hotspots_present"
}, Y = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  WAITING: "WAITING",
  RUNNING: "RUNNING"
};
var M = function() {
  return M = Object.assign || function(e) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, M.apply(this, arguments);
};
function it(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = e.length, i; n < o; n++)
      (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return t.concat(i || Array.prototype.slice.call(e));
}
function go(t) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return e[r] === void 0 && (e[r] = t(r)), e[r];
  };
}
var Lo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, yo = /* @__PURE__ */ go(
  function(t) {
    return Lo.test(t) || t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) < 91;
  }
  /* Z+1 */
), at, $, ke, vr, wt = 0, hn = [], Kt = [], Cr = m.__b, wr = m.__r, Sr = m.diffed, br = m.__c, Vr = m.unmount;
function Ot(t, e) {
  m.__h && m.__h($, t, wt || e), wt = 0;
  var r = $.__H || ($.__H = { __: [], __h: [] });
  return t >= r.__.length && r.__.push({ __V: Kt }), r.__[t];
}
function W(t) {
  return wt = 1, fn(pn, t);
}
function fn(t, e, r) {
  var n = Ot(at++, 2);
  if (n.t = t, !n.__c && (n.__ = [r ? r(e) : pn(void 0, e), function(c) {
    var l = n.__N ? n.__N[0] : n.__[0], d = n.t(l, c);
    l !== d && (n.__N = [d, n.__[1]], n.__c.setState({}));
  }], n.__c = $, !$.u)) {
    var o = function(c, l, d) {
      if (!n.__c.__H)
        return !0;
      var f = n.__c.__H.__.filter(function(p) {
        return p.__c;
      });
      if (f.every(function(p) {
        return !p.__N;
      }))
        return !i || i.call(this, c, l, d);
      var u = !1;
      return f.forEach(function(p) {
        if (p.__N) {
          var h = p.__[0];
          p.__ = p.__N, p.__N = void 0, h !== p.__[0] && (u = !0);
        }
      }), !(!u && n.__c.props === c) && (!i || i.call(this, c, l, d));
    };
    $.u = !0;
    var i = $.shouldComponentUpdate, a = $.componentWillUpdate;
    $.componentWillUpdate = function(c, l, d) {
      if (this.__e) {
        var f = i;
        i = void 0, o(c, l, d), i = f;
      }
      a && a.call(this, c, l, d);
    }, $.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function pt(t, e) {
  var r = Ot(at++, 3);
  !m.__s && ir(r.__H, e) && (r.__ = t, r.i = e, $.__H.__h.push(r));
}
function fe(t, e) {
  var r = Ot(at++, 4);
  !m.__s && ir(r.__H, e) && (r.__ = t, r.i = e, $.__h.push(r));
}
function pe(t) {
  return wt = 5, ht(function() {
    return { current: t };
  }, []);
}
function vo(t, e, r) {
  wt = 6, fe(function() {
    return typeof t == "function" ? (t(e()), function() {
      return t(null);
    }) : t ? (t.current = e(), function() {
      return t.current = null;
    }) : void 0;
  }, r == null ? r : r.concat(t));
}
function ht(t, e) {
  var r = Ot(at++, 7);
  return ir(r.__H, e) ? (r.__V = t(), r.i = e, r.__h = t, r.__V) : r.__;
}
function vt(t, e) {
  return wt = 8, ht(function() {
    return t;
  }, e);
}
function or(t) {
  var e = $.context[t.__c], r = Ot(at++, 9);
  return r.c = t, e ? (r.__ == null && (r.__ = !0, e.sub($)), e.props.value) : t.__;
}
function Pe(t, e) {
  m.useDebugValue && m.useDebugValue(e ? e(t) : t);
}
function Co() {
  var t = Ot(at++, 11);
  if (!t.__) {
    for (var e = $.__v; e !== null && !e.__m && e.__ !== null; )
      e = e.__;
    var r = e.__m || (e.__m = [0, 0]);
    t.__ = "P" + r[0] + "-" + r[1]++;
  }
  return t.__;
}
function wo() {
  for (var t; t = hn.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(Jt), t.__H.__h.forEach(Ze), t.__H.__h = [];
      } catch (e) {
        t.__H.__h = [], m.__e(e, t.__v);
      }
}
m.__b = function(t) {
  $ = null, Cr && Cr(t);
}, m.__r = function(t) {
  wr && wr(t), at = 0;
  var e = ($ = t.__c).__H;
  e && (ke === $ ? (e.__h = [], $.__h = [], e.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.__V = Kt, r.__N = r.i = void 0;
  })) : (e.__h.forEach(Jt), e.__h.forEach(Ze), e.__h = [], at = 0)), ke = $;
}, m.diffed = function(t) {
  Sr && Sr(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (hn.push(e) !== 1 && vr === m.requestAnimationFrame || ((vr = m.requestAnimationFrame) || So)(wo)), e.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.__V !== Kt && (r.__ = r.__V), r.i = void 0, r.__V = Kt;
  })), ke = $ = null;
}, m.__c = function(t, e) {
  e.some(function(r) {
    try {
      r.__h.forEach(Jt), r.__h = r.__h.filter(function(n) {
        return !n.__ || Ze(n);
      });
    } catch (n) {
      e.some(function(o) {
        o.__h && (o.__h = []);
      }), e = [], m.__e(n, r.__v);
    }
  }), br && br(t, e);
}, m.unmount = function(t) {
  Vr && Vr(t);
  var e, r = t.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      Jt(n);
    } catch (o) {
      e = o;
    }
  }), r.__H = void 0, e && m.__e(e, r.__v));
};
var Er = typeof requestAnimationFrame == "function";
function So(t) {
  var e, r = function() {
    clearTimeout(n), Er && cancelAnimationFrame(e), setTimeout(t);
  }, n = setTimeout(r, 100);
  Er && (e = requestAnimationFrame(r));
}
function Jt(t) {
  var e = $, r = t.__c;
  typeof r == "function" && (t.__c = void 0, r()), $ = e;
}
function Ze(t) {
  var e = $;
  t.__c = t.__(), $ = e;
}
function ir(t, e) {
  return !t || t.length !== e.length || e.some(function(r, n) {
    return r !== t[n];
  });
}
function pn(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function _n(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}
function He(t, e) {
  for (var r in t)
    if (r !== "__source" && !(r in e))
      return !0;
  for (var n in e)
    if (n !== "__source" && t[n] !== e[n])
      return !0;
  return !1;
}
function Be(t) {
  this.props = t;
}
function bo(t, e) {
  function r(o) {
    var i = this.props.ref, a = i == o.ref;
    return !a && i && (i.call ? i(null) : i.current = null), e ? !e(this.props, o) || !a : He(this.props, o);
  }
  function n(o) {
    return this.shouldComponentUpdate = r, R(t, o);
  }
  return n.displayName = "Memo(" + (t.displayName || t.name) + ")", n.prototype.isReactComponent = !0, n.__f = !0, n;
}
(Be.prototype = new F()).isPureReactComponent = !0, Be.prototype.shouldComponentUpdate = function(t, e) {
  return He(this.props, t) || He(this.state, e);
};
var kr = m.__b;
m.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), kr && kr(t);
};
var Vo = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function Eo(t) {
  function e(r) {
    var n = _n({}, r);
    return delete n.ref, t(n, r.ref || null);
  }
  return e.$$typeof = Vo, e.render = e, e.prototype.isReactComponent = e.__f = !0, e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", e;
}
var Or = function(t, e) {
  return t == null ? null : Q(Q(t).map(e));
}, ko = { map: Or, forEach: Or, count: function(t) {
  return t ? Q(t).length : 0;
}, only: function(t) {
  var e = Q(t);
  if (e.length !== 1)
    throw "Children.only";
  return e[0];
}, toArray: Q }, Oo = m.__e;
m.__e = function(t, e, r, n) {
  if (t.then) {
    for (var o, i = e; i = i.__; )
      if ((o = i.__c) && o.__c)
        return e.__e == null && (e.__e = r.__e, e.__k = r.__k), o.__c(t, e);
  }
  Oo(t, e, r, n);
};
var xr = m.unmount;
function mn(t, e, r) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), t.__c.__H = null), (t = _n({}, t)).__c != null && (t.__c.__P === r && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function(n) {
    return mn(n, e, r);
  })), t;
}
function gn(t, e, r) {
  return t && r && (t.__v = null, t.__k = t.__k && t.__k.map(function(n) {
    return gn(n, e, r);
  }), t.__c && t.__c.__P === e && (t.__e && r.appendChild(t.__e), t.__c.__e = !0, t.__c.__P = r)), t;
}
function Qt() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Ln(t) {
  var e = t.__.__c;
  return e && e.__a && e.__a(t);
}
function xo(t) {
  var e, r, n;
  function o(i) {
    if (e || (e = t()).then(function(a) {
      r = a.default || a;
    }, function(a) {
      n = a;
    }), n)
      throw n;
    if (!r)
      throw e;
    return R(r, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function Mt() {
  this.u = null, this.o = null;
}
m.unmount = function(t) {
  var e = t.__c;
  e && e.__R && e.__R(), e && 32 & t.__u && (t.type = null), xr && xr(t);
}, (Qt.prototype = new F()).__c = function(t, e) {
  var r = e.__c, n = this;
  n.t == null && (n.t = []), n.t.push(r);
  var o = Ln(n.__v), i = !1, a = function() {
    i || (i = !0, r.__R = null, o ? o(c) : c());
  };
  r.__R = a;
  var c = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var l = n.state.__a;
        n.__v.__k[0] = gn(l, l.__c.__P, l.__c.__O);
      }
      var d;
      for (n.setState({ __a: n.__b = null }); d = n.t.pop(); )
        d.forceUpdate();
    }
  };
  n.__u++ || 32 & e.__u || n.setState({ __a: n.__b = n.__v.__k[0] }), t.then(a, a);
}, Qt.prototype.componentWillUnmount = function() {
  this.t = [];
}, Qt.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = mn(this.__b, r, n.__O = n.__P);
    }
    this.__b = null;
  }
  var o = e.__a && R(Z, null, t.fallback);
  return o && (o.__u &= -33), [R(Z, null, e.__a ? null : t.children), o];
};
var $r = function(t, e, r) {
  if (++r[1] === r[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size))
    for (r = t.u; r; ) {
      for (; r.length > 3; )
        r.pop()();
      if (r[1] < r[0])
        break;
      t.u = r = r[2];
    }
};
function $o(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function Io(t) {
  var e = this, r = t.i;
  e.componentWillUnmount = function() {
    ot(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== r && e.componentWillUnmount(), e.l || (e.i = r, e.l = { nodeType: 1, parentNode: r, childNodes: [], appendChild: function(n) {
    this.childNodes.push(n), e.i.appendChild(n);
  }, insertBefore: function(n, o) {
    this.childNodes.push(n), e.i.appendChild(n);
  }, removeChild: function(n) {
    this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), e.i.removeChild(n);
  } }), ot(R($o, { context: e.context }, t.__v), e.l);
}
function No(t, e) {
  var r = R(Io, { __v: t, i: e });
  return r.containerInfo = e, r;
}
(Mt.prototype = new F()).__a = function(t) {
  var e = this, r = Ln(e.__v), n = e.o.get(t);
  return n[0]++, function(o) {
    var i = function() {
      e.props.revealOrder ? (n.push(o), $r(e, t, n)) : o();
    };
    r ? r(i) : i();
  };
}, Mt.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = Q(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var r = e.length; r--; )
    this.o.set(e[r], this.u = [1, 0, this.u]);
  return t.children;
}, Mt.prototype.componentDidUpdate = Mt.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(e, r) {
    $r(t, r, e);
  });
};
var yn = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Do = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Mo = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Ro = /[A-Z0-9]/g, To = typeof document < "u", Ao = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
};
function Po(t, e, r) {
  return e.__k == null && (e.textContent = ""), ot(t, e), typeof r == "function" && r(), t ? t.__c : null;
}
function Zo(t, e, r) {
  return er(t, e), typeof r == "function" && r(), t ? t.__c : null;
}
F.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(F.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var Ir = m.event;
function Ho() {
}
function Bo() {
  return this.cancelBubble;
}
function Uo() {
  return this.defaultPrevented;
}
m.event = function(t) {
  return Ir && (t = Ir(t)), t.persist = Ho, t.isPropagationStopped = Bo, t.isDefaultPrevented = Uo, t.nativeEvent = t;
};
var ar, Wo = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Nr = m.vnode;
m.vnode = function(t) {
  typeof t.type == "string" && function(e) {
    var r = e.props, n = e.type, o = {};
    for (var i in r) {
      var a = r[i];
      if (!(i === "value" && "defaultValue" in r && a == null || To && i === "children" && n === "noscript" || i === "class" || i === "className")) {
        var c = i.toLowerCase();
        i === "defaultValue" && "value" in r && r.value == null ? i = "value" : i === "download" && a === !0 ? a = "" : c === "ondoubleclick" ? i = "ondblclick" : c !== "onchange" || n !== "input" && n !== "textarea" || Ao(r.type) ? c === "onfocus" ? i = "onfocusin" : c === "onblur" ? i = "onfocusout" : Mo.test(i) ? i = c : n.indexOf("-") === -1 && Do.test(i) ? i = i.replace(Ro, "-$&").toLowerCase() : a === null && (a = void 0) : c = i = "oninput", c === "oninput" && o[i = c] && (i = "oninputCapture"), o[i] = a;
      }
    }
    n == "select" && o.multiple && Array.isArray(o.value) && (o.value = Q(r.children).forEach(function(l) {
      l.props.selected = o.value.indexOf(l.props.value) != -1;
    })), n == "select" && o.defaultValue != null && (o.value = Q(r.children).forEach(function(l) {
      l.props.selected = o.multiple ? o.defaultValue.indexOf(l.props.value) != -1 : o.defaultValue == l.props.value;
    })), r.class && !r.className ? (o.class = r.class, Object.defineProperty(o, "className", Wo)) : (r.className && !r.class || r.class && r.className) && (o.class = o.className = r.className), e.props = o;
  }(t), t.$$typeof = yn, Nr && Nr(t);
};
var Dr = m.__r;
m.__r = function(t) {
  Dr && Dr(t), ar = t.__c;
};
var Mr = m.diffed;
m.diffed = function(t) {
  Mr && Mr(t);
  var e = t.props, r = t.__e;
  r != null && t.type === "textarea" && "value" in e && e.value !== r.value && (r.value = e.value == null ? "" : e.value), ar = null;
};
var Fo = { ReactCurrentDispatcher: { current: { readContext: function(t) {
  return ar.__n[t.__c].props.value;
} } } };
function Go(t) {
  return R.bind(null, t);
}
function _e(t) {
  return !!t && t.$$typeof === yn;
}
function zo(t) {
  return _e(t) && t.type === Z;
}
function jo(t) {
  return _e(t) ? rr.apply(null, arguments) : t;
}
function Yo(t) {
  return !!t.__k && (ot(null, t), !0);
}
function qo(t) {
  return t && (t.base || t.nodeType === 1 && t) || null;
}
var Xo = function(t, e) {
  return t(e);
}, Ko = function(t, e) {
  return t(e);
}, Jo = Z;
function vn(t) {
  t();
}
function Qo(t) {
  return t;
}
function ti() {
  return [!1, vn];
}
var ei = fe, ri = _e;
function ni(t, e) {
  var r = e(), n = W({ h: { __: r, v: e } }), o = n[0].h, i = n[1];
  return fe(function() {
    o.__ = r, o.v = e, Oe(o) && i({ h: o });
  }, [t, r, e]), pt(function() {
    return Oe(o) && i({ h: o }), t(function() {
      Oe(o) && i({ h: o });
    });
  }, [t]), r;
}
function Oe(t) {
  var e, r, n = t.v, o = t.__;
  try {
    var i = n();
    return !((e = o) === (r = i) && (e !== 0 || 1 / e == 1 / r) || e != e && r != r);
  } catch {
    return !0;
  }
}
var A = { useState: W, useId: Co, useReducer: fn, useEffect: pt, useLayoutEffect: fe, useInsertionEffect: ei, useTransition: ti, useDeferredValue: Qo, useSyncExternalStore: ni, startTransition: vn, useRef: pe, useImperativeHandle: vo, useMemo: ht, useCallback: vt, useContext: or, useDebugValue: Pe, version: "17.0.2", Children: ko, render: Po, hydrate: Zo, unmountComponentAtNode: Yo, createPortal: No, createElement: R, createContext: lo, createFactory: Go, cloneElement: jo, createRef: oo, Fragment: Z, isValidElement: _e, isElement: ri, isFragment: zo, findDOMNode: qo, Component: F, PureComponent: Be, memo: bo, forwardRef: Eo, flushSync: Ko, unstable_batchedUpdates: Xo, StrictMode: Jo, Suspense: Qt, SuspenseList: Mt, lazy: xo, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Fo };
function oi(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ii = function(e, r, n, o) {
  var i = n ? n.call(o, e, r) : void 0;
  if (i !== void 0)
    return !!i;
  if (e === r)
    return !0;
  if (typeof e != "object" || !e || typeof r != "object" || !r)
    return !1;
  var a = Object.keys(e), c = Object.keys(r);
  if (a.length !== c.length)
    return !1;
  for (var l = Object.prototype.hasOwnProperty.bind(r), d = 0; d < a.length; d++) {
    var f = a[d];
    if (!l(f))
      return !1;
    var u = e[f], p = r[f];
    if (i = n ? n.call(o, u, p, f) : void 0, i === !1 || i === void 0 && u !== p)
      return !1;
  }
  return !0;
};
const ai = /* @__PURE__ */ oi(ii);
var x = "-ms-", Zt = "-moz-", E = "-webkit-", Cn = "comm", me = "rule", sr = "decl", si = "@import", wn = "@keyframes", ci = "@layer", li = Math.abs, cr = String.fromCharCode, Ue = Object.assign;
function ui(t, e) {
  return D(t, 0) ^ 45 ? (((e << 2 ^ D(t, 0)) << 2 ^ D(t, 1)) << 2 ^ D(t, 2)) << 2 ^ D(t, 3) : 0;
}
function Sn(t) {
  return t.trim();
}
function X(t, e) {
  return (t = e.exec(t)) ? t[0] : t;
}
function w(t, e, r) {
  return t.replace(e, r);
}
function te(t, e) {
  return t.indexOf(e);
}
function D(t, e) {
  return t.charCodeAt(e) | 0;
}
function St(t, e, r) {
  return t.slice(e, r);
}
function j(t) {
  return t.length;
}
function bn(t) {
  return t.length;
}
function Rt(t, e) {
  return e.push(t), t;
}
function di(t, e) {
  return t.map(e).join("");
}
function Rr(t, e) {
  return t.filter(function(r) {
    return !X(r, e);
  });
}
var ge = 1, bt = 1, Vn = 0, H = 0, I = 0, xt = "";
function Le(t, e, r, n, o, i, a, c) {
  return { value: t, root: e, parent: r, type: n, props: o, children: i, line: ge, column: bt, length: a, return: "", siblings: c };
}
function rt(t, e) {
  return Ue(Le("", null, null, "", null, null, 0, t.siblings), t, { length: -t.length }, e);
}
function yt(t) {
  for (; t.root; )
    t = rt(t.root, { children: [t] });
  Rt(t, t.siblings);
}
function hi() {
  return I;
}
function fi() {
  return I = H > 0 ? D(xt, --H) : 0, bt--, I === 10 && (bt = 1, ge--), I;
}
function G() {
  return I = H < Vn ? D(xt, H++) : 0, bt++, I === 10 && (bt = 1, ge++), I;
}
function ft() {
  return D(xt, H);
}
function ee() {
  return H;
}
function ye(t, e) {
  return St(xt, t, e);
}
function We(t) {
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
function pi(t) {
  return ge = bt = 1, Vn = j(xt = t), H = 0, [];
}
function _i(t) {
  return xt = "", t;
}
function xe(t) {
  return Sn(ye(H - 1, Fe(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function mi(t) {
  for (; (I = ft()) && I < 33; )
    G();
  return We(t) > 2 || We(I) > 3 ? "" : " ";
}
function gi(t, e) {
  for (; --e && G() && !(I < 48 || I > 102 || I > 57 && I < 65 || I > 70 && I < 97); )
    ;
  return ye(t, ee() + (e < 6 && ft() == 32 && G() == 32));
}
function Fe(t) {
  for (; G(); )
    switch (I) {
      case t:
        return H;
      case 34:
      case 39:
        t !== 34 && t !== 39 && Fe(I);
        break;
      case 40:
        t === 41 && Fe(t);
        break;
      case 92:
        G();
        break;
    }
  return H;
}
function Li(t, e) {
  for (; G() && t + I !== 57; )
    if (t + I === 84 && ft() === 47)
      break;
  return "/*" + ye(e, H - 1) + "*" + cr(t === 47 ? t : G());
}
function yi(t) {
  for (; !We(ft()); )
    G();
  return ye(t, H);
}
function vi(t) {
  return _i(re("", null, null, null, [""], t = pi(t), 0, [0], t));
}
function re(t, e, r, n, o, i, a, c, l) {
  for (var d = 0, f = 0, u = a, p = 0, h = 0, _ = 0, L = 1, C = 1, g = 1, v = 0, V = "", k = o, O = i, S = n, y = V; C; )
    switch (_ = v, v = G()) {
      case 40:
        if (_ != 108 && D(y, u - 1) == 58) {
          te(y += w(xe(v), "&", "&\f"), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        y += xe(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        y += mi(_);
        break;
      case 92:
        y += gi(ee() - 1, 7);
        continue;
      case 47:
        switch (ft()) {
          case 42:
          case 47:
            Rt(Ci(Li(G(), ee()), e, r, l), l);
            break;
          default:
            y += "/";
        }
        break;
      case 123 * L:
        c[d++] = j(y) * g;
      case 125 * L:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            C = 0;
          case 59 + f:
            g == -1 && (y = w(y, /\f/g, "")), h > 0 && j(y) - u && Rt(h > 32 ? Ar(y + ";", n, r, u - 1, l) : Ar(w(y, " ", "") + ";", n, r, u - 2, l), l);
            break;
          case 59:
            y += ";";
          default:
            if (Rt(S = Tr(y, e, r, d, f, o, c, V, k = [], O = [], u, i), i), v === 123)
              if (f === 0)
                re(y, e, S, S, k, i, u, c, O);
              else
                switch (p === 99 && D(y, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    re(t, S, S, n && Rt(Tr(t, S, S, 0, 0, o, c, V, o, k = [], u, O), O), o, O, u, c, n ? k : O);
                    break;
                  default:
                    re(y, S, S, S, [""], O, 0, c, O);
                }
        }
        d = f = h = 0, L = g = 1, V = y = "", u = a;
        break;
      case 58:
        u = 1 + j(y), h = _;
      default:
        if (L < 1) {
          if (v == 123)
            --L;
          else if (v == 125 && L++ == 0 && fi() == 125)
            continue;
        }
        switch (y += cr(v), v * L) {
          case 38:
            g = f > 0 ? 1 : (y += "\f", -1);
            break;
          case 44:
            c[d++] = (j(y) - 1) * g, g = 1;
            break;
          case 64:
            ft() === 45 && (y += xe(G())), p = ft(), f = u = j(V = y += yi(ee())), v++;
            break;
          case 45:
            _ === 45 && j(y) == 2 && (L = 0);
        }
    }
  return i;
}
function Tr(t, e, r, n, o, i, a, c, l, d, f, u) {
  for (var p = o - 1, h = o === 0 ? i : [""], _ = bn(h), L = 0, C = 0, g = 0; L < n; ++L)
    for (var v = 0, V = St(t, p + 1, p = li(C = a[L])), k = t; v < _; ++v)
      (k = Sn(C > 0 ? h[v] + " " + V : w(V, /&\f/g, h[v]))) && (l[g++] = k);
  return Le(t, e, r, o === 0 ? me : c, l, d, f, u);
}
function Ci(t, e, r, n) {
  return Le(t, e, r, Cn, cr(hi()), St(t, 2, -2), 0, n);
}
function Ar(t, e, r, n, o) {
  return Le(t, e, r, sr, St(t, 0, n), St(t, n + 1, -1), n, o);
}
function En(t, e, r) {
  switch (ui(t, e)) {
    case 5103:
      return E + "print-" + t + t;
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
      return E + t + t;
    case 4789:
      return Zt + t + t;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return E + t + Zt + t + x + t + t;
    case 5936:
      switch (D(t, e + 11)) {
        case 114:
          return E + t + x + w(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        case 108:
          return E + t + x + w(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        case 45:
          return E + t + x + w(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    case 6828:
    case 4268:
    case 2903:
      return E + t + x + t + t;
    case 6165:
      return E + t + x + "flex-" + t + t;
    case 5187:
      return E + t + w(t, /(\w+).+(:[^]+)/, E + "box-$1$2" + x + "flex-$1$2") + t;
    case 5443:
      return E + t + x + "flex-item-" + w(t, /flex-|-self/g, "") + (X(t, /flex-|baseline/) ? "" : x + "grid-row-" + w(t, /flex-|-self/g, "")) + t;
    case 4675:
      return E + t + x + "flex-line-pack" + w(t, /align-content|flex-|-self/g, "") + t;
    case 5548:
      return E + t + x + w(t, "shrink", "negative") + t;
    case 5292:
      return E + t + x + w(t, "basis", "preferred-size") + t;
    case 6060:
      return E + "box-" + w(t, "-grow", "") + E + t + x + w(t, "grow", "positive") + t;
    case 4554:
      return E + w(t, /([^-])(transform)/g, "$1" + E + "$2") + t;
    case 6187:
      return w(w(w(t, /(zoom-|grab)/, E + "$1"), /(image-set)/, E + "$1"), t, "") + t;
    case 5495:
    case 3959:
      return w(t, /(image-set\([^]*)/, E + "$1$`$1");
    case 4968:
      return w(w(t, /(.+:)(flex-)?(.*)/, E + "box-pack:$3" + x + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + E + t + t;
    case 4200:
      if (!X(t, /flex-|baseline/))
        return x + "grid-column-align" + St(t, e) + t;
      break;
    case 2592:
    case 3360:
      return x + w(t, "template-", "") + t;
    case 4384:
    case 3616:
      return r && r.some(function(n, o) {
        return e = o, X(n.props, /grid-\w+-end/);
      }) ? ~te(t + (r = r[e].value), "span") ? t : x + w(t, "-start", "") + t + x + "grid-row-span:" + (~te(r, "span") ? X(r, /\d+/) : +X(r, /\d+/) - +X(t, /\d+/)) + ";" : x + w(t, "-start", "") + t;
    case 4896:
    case 4128:
      return r && r.some(function(n) {
        return X(n.props, /grid-\w+-start/);
      }) ? t : x + w(w(t, "-end", "-span"), "span ", "") + t;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return w(t, /(.+)-inline(.+)/, E + "$1$2") + t;
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
      if (j(t) - 1 - e > 6)
        switch (D(t, e + 1)) {
          case 109:
            if (D(t, e + 4) !== 45)
              break;
          case 102:
            return w(t, /(.+:)(.+)-([^]+)/, "$1" + E + "$2-$3$1" + Zt + (D(t, e + 3) == 108 ? "$3" : "$2-$3")) + t;
          case 115:
            return ~te(t, "stretch") ? En(w(t, "stretch", "fill-available"), e, r) + t : t;
        }
      break;
    case 5152:
    case 5920:
      return w(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, i, a, c, l, d) {
        return x + o + ":" + i + d + (a ? x + o + "-span:" + (c ? l : +l - +i) + d : "") + t;
      });
    case 4949:
      if (D(t, e + 6) === 121)
        return w(t, ":", ":" + E) + t;
      break;
    case 6444:
      switch (D(t, D(t, 14) === 45 ? 18 : 11)) {
        case 120:
          return w(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + E + (D(t, 14) === 45 ? "inline-" : "") + "box$3$1" + E + "$2$3$1" + x + "$2box$3") + t;
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
function ae(t, e) {
  for (var r = "", n = 0; n < t.length; n++)
    r += e(t[n], n, t, e) || "";
  return r;
}
function wi(t, e, r, n) {
  switch (t.type) {
    case ci:
      if (t.children.length)
        break;
    case si:
    case sr:
      return t.return = t.return || t.value;
    case Cn:
      return "";
    case wn:
      return t.return = t.value + "{" + ae(t.children, n) + "}";
    case me:
      if (!j(t.value = t.props.join(",")))
        return "";
  }
  return j(r = ae(t.children, n)) ? t.return = t.value + "{" + r + "}" : "";
}
function Si(t) {
  var e = bn(t);
  return function(r, n, o, i) {
    for (var a = "", c = 0; c < e; c++)
      a += t[c](r, n, o, i) || "";
    return a;
  };
}
function bi(t) {
  return function(e) {
    e.root || (e = e.return) && t(e);
  };
}
function Vi(t, e, r, n) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case sr:
        t.return = En(t.value, t.length, r);
        return;
      case wn:
        return ae([rt(t, { value: w(t.value, "@", "@" + E) })], n);
      case me:
        if (t.length)
          return di(r = t.props, function(o) {
            switch (X(o, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                yt(rt(t, { props: [w(o, /:(read-\w+)/, ":" + Zt + "$1")] })), yt(rt(t, { props: [o] })), Ue(t, { props: Rr(r, n) });
                break;
              case "::placeholder":
                yt(rt(t, { props: [w(o, /:(plac\w+)/, ":" + E + "input-$1")] })), yt(rt(t, { props: [w(o, /:(plac\w+)/, ":" + Zt + "$1")] })), yt(rt(t, { props: [w(o, /:(plac\w+)/, x + "input-$1")] })), yt(rt(t, { props: [o] })), Ue(t, { props: Rr(r, n) });
                break;
            }
            return "";
          });
    }
}
var Ei = {
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
}, b = {}, _t = typeof process < "u" && b !== void 0 && (b.REACT_APP_SC_ATTR || b.SC_ATTR) || "data-styled", lr = typeof window < "u" && "HTMLElement" in window, ki = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && b !== void 0 && b.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && b.REACT_APP_SC_DISABLE_SPEEDY !== "" ? b.REACT_APP_SC_DISABLE_SPEEDY !== "false" && b.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && b !== void 0 && b.SC_DISABLE_SPEEDY !== void 0 && b.SC_DISABLE_SPEEDY !== "" ? b.SC_DISABLE_SPEEDY !== "false" && b.SC_DISABLE_SPEEDY : b.NODE_ENV !== "production"), Oi = {}, Pr = /invalid hook call/i, Yt = /* @__PURE__ */ new Set(), kn = function(t, e) {
  if (b.NODE_ENV !== "production") {
    var r = e ? ' with the id of "'.concat(e, '"') : "", n = "The component ".concat(t).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(a) {
        for (var c = [], l = 1; l < arguments.length; l++)
          c[l - 1] = arguments[l];
        Pr.test(a) ? (i = !1, Yt.delete(n)) : o.apply(void 0, it([a], c, !1));
      }, pe(), i && !Yt.has(n) && (console.warn(n), Yt.add(n));
    } catch (a) {
      Pr.test(a.message) && Yt.delete(n);
    } finally {
      console.error = o;
    }
  }
}, ve = Object.freeze([]), Vt = Object.freeze({});
function On(t, e, r) {
  return r === void 0 && (r = Vt), t.theme !== r.theme && t.theme || e || r.theme;
}
var Ge = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), xi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, $i = /(^-|-$)/g;
function Zr(t) {
  return t.replace(xi, "-").replace($i, "");
}
var Ii = /(a)(d)/gi, Hr = function(t) {
  return String.fromCharCode(t + (t > 25 ? 39 : 97));
};
function ze(t) {
  var e, r = "";
  for (e = Math.abs(t); e > 52; e = e / 52 | 0)
    r = Hr(e % 52) + r;
  return (Hr(e % 52) + r).replace(Ii, "$1-$2");
}
var $e, lt = function(t, e) {
  for (var r = e.length; r; )
    t = 33 * t ^ e.charCodeAt(--r);
  return t;
}, xn = function(t) {
  return lt(5381, t);
};
function ur(t) {
  return ze(xn(t) >>> 0);
}
function $n(t) {
  return b.NODE_ENV !== "production" && typeof t == "string" && t || t.displayName || t.name || "Component";
}
function Ie(t) {
  return typeof t == "string" && (b.NODE_ENV === "production" || t.charAt(0) === t.charAt(0).toLowerCase());
}
var In = typeof Symbol == "function" && Symbol.for, Nn = In ? Symbol.for("react.memo") : 60115, Ni = In ? Symbol.for("react.forward_ref") : 60112, Di = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Mi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Dn = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Ri = (($e = {})[Ni] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, $e[Nn] = Dn, $e);
function Br(t) {
  return ("type" in (e = t) && e.type.$$typeof) === Nn ? Dn : "$$typeof" in t ? Ri[t.$$typeof] : Di;
  var e;
}
var Ti = Object.defineProperty, Ai = Object.getOwnPropertyNames, Ur = Object.getOwnPropertySymbols, Pi = Object.getOwnPropertyDescriptor, Zi = Object.getPrototypeOf, Wr = Object.prototype;
function Mn(t, e, r) {
  if (typeof e != "string") {
    if (Wr) {
      var n = Zi(e);
      n && n !== Wr && Mn(t, n, r);
    }
    var o = Ai(e);
    Ur && (o = o.concat(Ur(e)));
    for (var i = Br(t), a = Br(e), c = 0; c < o.length; ++c) {
      var l = o[c];
      if (!(l in Mi || r && r[l] || a && l in a || i && l in i)) {
        var d = Pi(e, l);
        try {
          Ti(t, l, d);
        } catch {
        }
      }
    }
  }
  return t;
}
function mt(t) {
  return typeof t == "function";
}
function dr(t) {
  return typeof t == "object" && "styledComponentId" in t;
}
function ut(t, e) {
  return t && e ? "".concat(t, " ").concat(e) : t || e || "";
}
function se(t, e) {
  if (t.length === 0)
    return "";
  for (var r = t[0], n = 1; n < t.length; n++)
    r += e ? e + t[n] : t[n];
  return r;
}
function Et(t) {
  return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
}
function je(t, e, r) {
  if (r === void 0 && (r = !1), !r && !Et(t) && !Array.isArray(t))
    return e;
  if (Array.isArray(e))
    for (var n = 0; n < e.length; n++)
      t[n] = je(t[n], e[n]);
  else if (Et(e))
    for (var n in e)
      t[n] = je(t[n], e[n]);
  return t;
}
function hr(t, e) {
  Object.defineProperty(t, "toString", { value: e });
}
var Hi = b.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Bi() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  for (var r = t[0], n = [], o = 1, i = t.length; o < i; o += 1)
    n.push(t[o]);
  return n.forEach(function(a) {
    r = r.replace(/%[a-z]/, a);
  }), r;
}
function q(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  return b.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(e.length > 0 ? " Args: ".concat(e.join(", ")) : "")) : new Error(Bi.apply(void 0, it([Hi[t]], e, !1)).trim());
}
var Ui = function() {
  function t(e) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
  }
  return t.prototype.indexOfGroup = function(e) {
    for (var r = 0, n = 0; n < e; n++)
      r += this.groupSizes[n];
    return r;
  }, t.prototype.insertRules = function(e, r) {
    if (e >= this.groupSizes.length) {
      for (var n = this.groupSizes, o = n.length, i = o; e >= i; )
        if ((i <<= 1) < 0)
          throw q(16, "".concat(e));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(n), this.length = i;
      for (var a = o; a < i; a++)
        this.groupSizes[a] = 0;
    }
    for (var c = this.indexOfGroup(e + 1), l = (a = 0, r.length); a < l; a++)
      this.tag.insertRule(c, r[a]) && (this.groupSizes[e]++, c++);
  }, t.prototype.clearGroup = function(e) {
    if (e < this.length) {
      var r = this.groupSizes[e], n = this.indexOfGroup(e), o = n + r;
      this.groupSizes[e] = 0;
      for (var i = n; i < o; i++)
        this.tag.deleteRule(n);
    }
  }, t.prototype.getGroup = function(e) {
    var r = "";
    if (e >= this.length || this.groupSizes[e] === 0)
      return r;
    for (var n = this.groupSizes[e], o = this.indexOfGroup(e), i = o + n, a = o; a < i; a++)
      r += "".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);
    return r;
  }, t;
}(), ne = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), oe = 1, qt = function(t) {
  if (ne.has(t))
    return ne.get(t);
  for (; ce.has(oe); )
    oe++;
  var e = oe++;
  if (b.NODE_ENV !== "production" && ((0 | e) < 0 || e > 1073741824))
    throw q(16, "".concat(e));
  return ne.set(t, e), ce.set(e, t), e;
}, Wi = function(t, e) {
  oe = e + 1, ne.set(t, e), ce.set(e, t);
}, Fi = "style[".concat(_t, "][").concat("data-styled-version", '="').concat("6.1.1", '"]'), Gi = new RegExp("^".concat(_t, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), zi = function(t, e, r) {
  for (var n, o = r.split(","), i = 0, a = o.length; i < a; i++)
    (n = o[i]) && t.registerName(e, n);
}, ji = function(t, e) {
  for (var r, n = ((r = e.textContent) !== null && r !== void 0 ? r : "").split(`/*!sc*/
`), o = [], i = 0, a = n.length; i < a; i++) {
    var c = n[i].trim();
    if (c) {
      var l = c.match(Gi);
      if (l) {
        var d = 0 | parseInt(l[1], 10), f = l[2];
        d !== 0 && (Wi(f, d), zi(t, f, l[3]), t.getTag().insertRules(d, o)), o.length = 0;
      } else
        o.push(c);
    }
  }
};
function Yi() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Rn = function(t) {
  var e = document.head, r = t || e, n = document.createElement("style"), o = function(c) {
    var l = Array.from(c.querySelectorAll("style[".concat(_t, "]")));
    return l[l.length - 1];
  }(r), i = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(_t, "active"), n.setAttribute("data-styled-version", "6.1.1");
  var a = Yi();
  return a && n.setAttribute("nonce", a), r.insertBefore(n, i), n;
}, qi = function() {
  function t(e) {
    this.element = Rn(e), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet)
        return r.sheet;
      for (var n = document.styleSheets, o = 0, i = n.length; o < i; o++) {
        var a = n[o];
        if (a.ownerNode === r)
          return a;
      }
      throw q(17);
    }(this.element), this.length = 0;
  }
  return t.prototype.insertRule = function(e, r) {
    try {
      return this.sheet.insertRule(r, e), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.prototype.deleteRule = function(e) {
    this.sheet.deleteRule(e), this.length--;
  }, t.prototype.getRule = function(e) {
    var r = this.sheet.cssRules[e];
    return r && r.cssText ? r.cssText : "";
  }, t;
}(), Xi = function() {
  function t(e) {
    this.element = Rn(e), this.nodes = this.element.childNodes, this.length = 0;
  }
  return t.prototype.insertRule = function(e, r) {
    if (e <= this.length && e >= 0) {
      var n = document.createTextNode(r);
      return this.element.insertBefore(n, this.nodes[e] || null), this.length++, !0;
    }
    return !1;
  }, t.prototype.deleteRule = function(e) {
    this.element.removeChild(this.nodes[e]), this.length--;
  }, t.prototype.getRule = function(e) {
    return e < this.length ? this.nodes[e].textContent : "";
  }, t;
}(), Ki = function() {
  function t(e) {
    this.rules = [], this.length = 0;
  }
  return t.prototype.insertRule = function(e, r) {
    return e <= this.length && (this.rules.splice(e, 0, r), this.length++, !0);
  }, t.prototype.deleteRule = function(e) {
    this.rules.splice(e, 1), this.length--;
  }, t.prototype.getRule = function(e) {
    return e < this.length ? this.rules[e] : "";
  }, t;
}(), Fr = lr, Ji = { isServer: !lr, useCSSOMInjection: !ki }, le = function() {
  function t(e, r, n) {
    e === void 0 && (e = Vt), r === void 0 && (r = {});
    var o = this;
    this.options = M(M({}, Ji), e), this.gs = r, this.names = new Map(n), this.server = !!e.isServer, !this.server && lr && Fr && (Fr = !1, function(i) {
      for (var a = document.querySelectorAll(Fi), c = 0, l = a.length; c < l; c++) {
        var d = a[c];
        d && d.getAttribute(_t) !== "active" && (ji(i, d), d.parentNode && d.parentNode.removeChild(d));
      }
    }(this)), hr(this, function() {
      return function(i) {
        for (var a = i.getTag(), c = a.length, l = "", d = function(u) {
          var p = function(g) {
            return ce.get(g);
          }(u);
          if (p === void 0)
            return "continue";
          var h = i.names.get(p), _ = a.getGroup(u);
          if (h === void 0 || _.length === 0)
            return "continue";
          var L = "".concat(_t, ".g").concat(u, '[id="').concat(p, '"]'), C = "";
          h !== void 0 && h.forEach(function(g) {
            g.length > 0 && (C += "".concat(g, ","));
          }), l += "".concat(_).concat(L, '{content:"').concat(C, '"}').concat(`/*!sc*/
`);
        }, f = 0; f < c; f++)
          d(f);
        return l;
      }(o);
    });
  }
  return t.registerId = function(e) {
    return qt(e);
  }, t.prototype.reconstructWithOptions = function(e, r) {
    return r === void 0 && (r = !0), new t(M(M({}, this.options), e), this.gs, r && this.names || void 0);
  }, t.prototype.allocateGSInstance = function(e) {
    return this.gs[e] = (this.gs[e] || 0) + 1;
  }, t.prototype.getTag = function() {
    return this.tag || (this.tag = (e = function(r) {
      var n = r.useCSSOMInjection, o = r.target;
      return r.isServer ? new Ki(o) : n ? new qi(o) : new Xi(o);
    }(this.options), new Ui(e)));
    var e;
  }, t.prototype.hasNameForId = function(e, r) {
    return this.names.has(e) && this.names.get(e).has(r);
  }, t.prototype.registerName = function(e, r) {
    if (qt(e), this.names.has(e))
      this.names.get(e).add(r);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(r), this.names.set(e, n);
    }
  }, t.prototype.insertRules = function(e, r, n) {
    this.registerName(e, r), this.getTag().insertRules(qt(e), n);
  }, t.prototype.clearNames = function(e) {
    this.names.has(e) && this.names.get(e).clear();
  }, t.prototype.clearRules = function(e) {
    this.getTag().clearGroup(qt(e)), this.clearNames(e);
  }, t.prototype.clearTag = function() {
    this.tag = void 0;
  }, t;
}(), Qi = /&/g, ta = /^\s*\/\/.*$/gm;
function Tn(t, e) {
  return t.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(e, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(e, " ")), r.props = r.props.map(function(n) {
      return "".concat(e, " ").concat(n);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = Tn(r.children, e)), r;
  });
}
function An(t) {
  var e, r, n, o = t === void 0 ? Vt : t, i = o.options, a = i === void 0 ? Vt : i, c = o.plugins, l = c === void 0 ? ve : c, d = function(p, h, _) {
    return _ === r || _.startsWith(r) && _.endsWith(r) && _.replaceAll(r, "").length > 0 ? ".".concat(e) : p;
  }, f = l.slice();
  f.push(function(p) {
    p.type === me && p.value.includes("&") && (p.props[0] = p.props[0].replace(Qi, r).replace(n, d));
  }), a.prefix && f.push(Vi), f.push(wi);
  var u = function(p, h, _, L) {
    h === void 0 && (h = ""), _ === void 0 && (_ = ""), L === void 0 && (L = "&"), e = L, r = h, n = new RegExp("\\".concat(r, "\\b"), "g");
    var C = p.replace(ta, ""), g = vi(_ || h ? "".concat(_, " ").concat(h, " { ").concat(C, " }") : C);
    a.namespace && (g = Tn(g, a.namespace));
    var v = [];
    return ae(g, Si(f.concat(bi(function(V) {
      return v.push(V);
    })))), v;
  };
  return u.hash = l.length ? l.reduce(function(p, h) {
    return h.name || q(15), lt(p, h.name);
  }, 5381).toString() : "", u;
}
var ea = new le(), Ye = An(), fr = A.createContext({ shouldForwardProp: void 0, styleSheet: ea, stylis: Ye });
fr.Consumer;
var ra = A.createContext(void 0);
function ue() {
  return or(fr);
}
function na(t) {
  var e = W(t.stylisPlugins), r = e[0], n = e[1], o = ue().styleSheet, i = ht(function() {
    var l = o;
    return t.sheet ? l = t.sheet : t.target && (l = l.reconstructWithOptions({ target: t.target }, !1)), t.disableCSSOMInjection && (l = l.reconstructWithOptions({ useCSSOMInjection: !1 })), l;
  }, [t.disableCSSOMInjection, t.sheet, t.target, o]), a = ht(function() {
    return An({ options: { namespace: t.namespace, prefix: t.enableVendorPrefixes }, plugins: r });
  }, [t.enableVendorPrefixes, t.namespace, r]);
  pt(function() {
    ai(r, t.stylisPlugins) || n(t.stylisPlugins);
  }, [t.stylisPlugins]);
  var c = ht(function() {
    return { shouldForwardProp: t.shouldForwardProp, styleSheet: i, stylis: a };
  }, [t.shouldForwardProp, i, a]);
  return A.createElement(fr.Provider, { value: c }, A.createElement(ra.Provider, { value: a }, t.children));
}
var qe = function() {
  function t(e, r) {
    var n = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Ye);
      var a = n.name + i.hash;
      o.hasNameForId(n.id, a) || o.insertRules(n.id, a, i(n.rules, a, "@keyframes"));
    }, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = r, hr(this, function() {
      throw q(12, String(n.name));
    });
  }
  return t.prototype.getName = function(e) {
    return e === void 0 && (e = Ye), this.name + e.hash;
  }, t;
}(), oa = function(t) {
  return t >= "A" && t <= "Z";
};
function Gr(t) {
  for (var e = "", r = 0; r < t.length; r++) {
    var n = t[r];
    if (r === 1 && n === "-" && t[0] === "-")
      return t;
    oa(n) ? e += "-" + n.toLowerCase() : e += n;
  }
  return e.startsWith("ms-") ? "-" + e : e;
}
var Pn = function(t) {
  return t == null || t === !1 || t === "";
}, Zn = function(t) {
  var e, r, n = [];
  for (var o in t) {
    var i = t[o];
    t.hasOwnProperty(o) && !Pn(i) && (Array.isArray(i) && i.isCss || mt(i) ? n.push("".concat(Gr(o), ":"), i, ";") : Et(i) ? n.push.apply(n, it(it(["".concat(o, " {")], Zn(i), !1), ["}"], !1)) : n.push("".concat(Gr(o), ": ").concat((e = o, (r = i) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || e in Ei || e.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return n;
};
function nt(t, e, r, n) {
  if (Pn(t))
    return [];
  if (dr(t))
    return [".".concat(t.styledComponentId)];
  if (mt(t)) {
    if (!mt(i = t) || i.prototype && i.prototype.isReactComponent || !e)
      return [t];
    var o = t(e);
    return b.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof qe || Et(o) || o === null || console.error("".concat($n(t), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), nt(o, e, r, n);
  }
  var i;
  return t instanceof qe ? r ? (t.inject(r, n), [t.getName(n)]) : [t] : Et(t) ? Zn(t) : Array.isArray(t) ? Array.prototype.concat.apply(ve, t.map(function(a) {
    return nt(a, e, r, n);
  })) : [t.toString()];
}
function Hn(t) {
  for (var e = 0; e < t.length; e += 1) {
    var r = t[e];
    if (mt(r) && !dr(r))
      return !1;
  }
  return !0;
}
var ia = xn("6.1.1"), aa = function() {
  function t(e, r, n) {
    this.rules = e, this.staticRulesId = "", this.isStatic = b.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Hn(e), this.componentId = r, this.baseHash = lt(ia, r), this.baseStyle = n, le.registerId(r);
  }
  return t.prototype.generateAndInjectStyles = function(e, r, n) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, r, n) : "";
    if (this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId))
        o = ut(o, this.staticRulesId);
      else {
        var i = se(nt(this.rules, e, r, n)), a = ze(lt(this.baseHash, i) >>> 0);
        if (!r.hasNameForId(this.componentId, a)) {
          var c = n(i, ".".concat(a), void 0, this.componentId);
          r.insertRules(this.componentId, a, c);
        }
        o = ut(o, a), this.staticRulesId = a;
      }
    else {
      for (var l = lt(this.baseHash, n.hash), d = "", f = 0; f < this.rules.length; f++) {
        var u = this.rules[f];
        if (typeof u == "string")
          d += u, b.NODE_ENV !== "production" && (l = lt(l, u));
        else if (u) {
          var p = se(nt(u, e, r, n));
          l = lt(l, p + f), d += p;
        }
      }
      if (d) {
        var h = ze(l >>> 0);
        r.hasNameForId(this.componentId, h) || r.insertRules(this.componentId, h, n(d, ".".concat(h), void 0, this.componentId)), o = ut(o, h);
      }
    }
    return o;
  }, t;
}(), kt = A.createContext(void 0);
kt.Consumer;
function Bn() {
  var t = or(kt);
  if (!t)
    throw q(18);
  return t;
}
function sa(t) {
  var e = A.useContext(kt), r = ht(function() {
    return function(n, o) {
      if (!n)
        throw q(14);
      if (mt(n)) {
        var i = n(o);
        if (b.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object"))
          throw q(7);
        return i;
      }
      if (Array.isArray(n) || typeof n != "object")
        throw q(8);
      return o ? M(M({}, o), n) : n;
    }(t.theme, e);
  }, [t.theme, e]);
  return t.children ? A.createElement(kt.Provider, { value: r }, t.children) : null;
}
var Ne = {}, zr = /* @__PURE__ */ new Set();
function ca(t, e, r) {
  var n = dr(t), o = t, i = !Ie(t), a = e.attrs, c = a === void 0 ? ve : a, l = e.componentId, d = l === void 0 ? function(k, O) {
    var S = typeof k != "string" ? "sc" : Zr(k);
    Ne[S] = (Ne[S] || 0) + 1;
    var y = "".concat(S, "-").concat(ur("6.1.1" + S + Ne[S]));
    return O ? "".concat(O, "-").concat(y) : y;
  }(e.displayName, e.parentComponentId) : l, f = e.displayName, u = f === void 0 ? function(k) {
    return Ie(k) ? "styled.".concat(k) : "Styled(".concat($n(k), ")");
  }(t) : f, p = e.displayName && e.componentId ? "".concat(Zr(e.displayName), "-").concat(e.componentId) : e.componentId || d, h = n && o.attrs ? o.attrs.concat(c).filter(Boolean) : c, _ = e.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var L = o.shouldForwardProp;
    if (e.shouldForwardProp) {
      var C = e.shouldForwardProp;
      _ = function(k, O) {
        return L(k, O) && C(k, O);
      };
    } else
      _ = L;
  }
  var g = new aa(r, p, n ? o.componentStyle : void 0);
  function v(k, O) {
    return function(S, y, U) {
      var N = S.attrs, gt = S.componentStyle, Xn = S.defaultProps, Kn = S.foldedComponentIds, pr = S.styledComponentId, Jn = S.target, Qn = A.useContext(kt), to = ue(), Se = S.shouldForwardProp || to.shouldForwardProp;
      b.NODE_ENV !== "production" && Pe(pr);
      var tt = function(Wt, Nt, Ft) {
        for (var Lt, st = M(M({}, Nt), { className: void 0, theme: Ft }), Ee = 0; Ee < Wt.length; Ee += 1) {
          var Gt = mt(Lt = Wt[Ee]) ? Lt(st) : Lt;
          for (var et in Gt)
            st[et] = et === "className" ? ut(st[et], Gt[et]) : et === "style" ? M(M({}, st[et]), Gt[et]) : Gt[et];
        }
        return Nt.className && (st.className = ut(st.className, Nt.className)), st;
      }(N, y, On(y, Qn, Xn) || Vt), $t = tt.as || Jn, It = {};
      for (var P in tt)
        tt[P] === void 0 || P[0] === "$" || P === "as" || P === "theme" || (P === "forwardedAs" ? It.as = tt.forwardedAs : Se && !Se(P, $t) || (It[P] = tt[P], Se || b.NODE_ENV !== "development" || yo(P) || zr.has(P) || !Ge.has($t) || (zr.add(P), console.warn('styled-components: it looks like an unknown prop "'.concat(P, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var be = function(Wt, Nt) {
        var Ft = ue(), Lt = Wt.generateAndInjectStyles(Nt, Ft.styleSheet, Ft.stylis);
        return b.NODE_ENV !== "production" && Pe(Lt), Lt;
      }(gt, tt);
      b.NODE_ENV !== "production" && S.warnTooManyClasses && S.warnTooManyClasses(be);
      var Ve = ut(Kn, pr);
      return be && (Ve += " " + be), tt.className && (Ve += " " + tt.className), It[Ie($t) && !Ge.has($t) ? "class" : "className"] = Ve, It.ref = U, R($t, It);
    }(V, k, O);
  }
  v.displayName = u;
  var V = A.forwardRef(v);
  return V.attrs = h, V.componentStyle = g, V.displayName = u, V.shouldForwardProp = _, V.foldedComponentIds = n ? ut(o.foldedComponentIds, o.styledComponentId) : "", V.styledComponentId = p, V.target = n ? o.target : t, Object.defineProperty(V, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(k) {
    this._foldedDefaultProps = n ? function(O) {
      for (var S = [], y = 1; y < arguments.length; y++)
        S[y - 1] = arguments[y];
      for (var U = 0, N = S; U < N.length; U++)
        je(O, N[U], !0);
      return O;
    }({}, o.defaultProps, k) : k;
  } }), b.NODE_ENV !== "production" && (kn(u, p), V.warnTooManyClasses = /* @__PURE__ */ function(k, O) {
    var S = {}, y = !1;
    return function(U) {
      if (!y && (S[U] = !0, Object.keys(S).length >= 200)) {
        var N = O ? ' with the id of "'.concat(O, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(k).concat(N, `.
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
  }(u, p)), hr(V, function() {
    return ".".concat(V.styledComponentId);
  }), i && Mn(V, t, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), V;
}
function jr(t, e) {
  for (var r = [t[0]], n = 0, o = e.length; n < o; n += 1)
    r.push(e[n], t[n + 1]);
  return r;
}
var Yr = function(t) {
  return Object.assign(t, { isCss: !0 });
};
function Ce(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  if (mt(t) || Et(t)) {
    var n = t;
    return Yr(nt(jr(ve, it([n], e, !0))));
  }
  var o = t;
  return e.length === 0 && o.length === 1 && typeof o[0] == "string" ? nt(o) : Yr(nt(jr(o, e)));
}
function Xe(t, e, r) {
  if (r === void 0 && (r = Vt), !e)
    throw q(1, e);
  var n = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++)
      i[a - 1] = arguments[a];
    return t(e, r, Ce.apply(void 0, it([o], i, !1)));
  };
  return n.attrs = function(o) {
    return Xe(t, e, M(M({}, r), { attrs: Array.prototype.concat(r.attrs, o).filter(Boolean) }));
  }, n.withConfig = function(o) {
    return Xe(t, e, M(M({}, r), o));
  }, n;
}
var Un = function(t) {
  return Xe(ca, t);
}, B = Un;
Ge.forEach(function(t) {
  B[t] = Un(t);
});
var la = function() {
  function t(e, r) {
    this.rules = e, this.componentId = r, this.isStatic = Hn(e), le.registerId(this.componentId + 1);
  }
  return t.prototype.createStyles = function(e, r, n, o) {
    var i = o(se(nt(this.rules, r, n, o)), ""), a = this.componentId + e;
    n.insertRules(a, a, i);
  }, t.prototype.removeStyles = function(e, r) {
    r.clearRules(this.componentId + e);
  }, t.prototype.renderStyles = function(e, r, n, o) {
    e > 2 && le.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, r, n, o);
  }, t;
}();
function ua(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  var n = Ce.apply(void 0, it([t], e, !1)), o = "sc-global-".concat(ur(JSON.stringify(n))), i = new la(n, o);
  b.NODE_ENV !== "production" && kn(o);
  var a = function(l) {
    var d = ue(), f = A.useContext(kt), u = A.useRef(d.styleSheet.allocateGSInstance(o)).current;
    return b.NODE_ENV !== "production" && A.Children.count(l.children) && console.warn("The global style component ".concat(o, " was given child JSX. createGlobalStyle does not render children.")), b.NODE_ENV !== "production" && n.some(function(p) {
      return typeof p == "string" && p.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), d.styleSheet.server && c(u, l, d.styleSheet, f, d.stylis), A.useLayoutEffect(function() {
      if (!d.styleSheet.server)
        return c(u, l, d.styleSheet, f, d.stylis), function() {
          return i.removeStyles(u, d.styleSheet);
        };
    }, [u, l, d.styleSheet, f, d.stylis]), null;
  };
  function c(l, d, f, u, p) {
    if (i.isStatic)
      i.renderStyles(l, Oi, f, p);
    else {
      var h = M(M({}, d), { theme: On(d, u, a.defaultProps) });
      i.renderStyles(l, h, f, p);
    }
  }
  return A.memo(a);
}
function we(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  b.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var n = se(Ce.apply(void 0, it([t], e, !1))), o = ur(n);
  return new qe(o, n);
}
b.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Xt = "__sc-".concat(_t, "__");
b.NODE_ENV !== "production" && b.NODE_ENV !== "test" && typeof window < "u" && (window[Xt] || (window[Xt] = 0), window[Xt] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Xt] += 1);
var da = 0;
function s(t, e, r, n, o, i) {
  var a, c, l = {};
  for (c in e)
    c == "ref" ? a = e[c] : l[c] = e[c];
  var d = { type: t, props: l, key: r, ref: a, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --da, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof t == "function" && (a = t.defaultProps))
    for (c in a)
      l[c] === void 0 && (l[c] = a[c]);
  return m.vnode && m.vnode(d), d;
}
const Wn = ({
  svgSize: t
}) => s("svg", {
  fill: "none",
  height: t,
  viewBox: "0 0 16 14",
  width: t,
  xmlns: "http://www.w3.org/2000/svg",
  children: s("path", {
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
}, qr = 0.24, ha = 24, fa = 2, Fn = 14, pa = 0.0276;
var K = /* @__PURE__ */ ((t) => (t[t.S = 300] = "S", t[t.M = 400] = "M", t[t.L = 500] = "L", t[t.Default = 600] = "Default", t))(K || {});
const Tt = {
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
}, _a = {
  [z.CANDIDATE_SELECTION]: "Hold still…",
  [z.DOCUMENT_CENTERING]: "Center document",
  [z.DOCUMENT_NOT_PRESENT]: "Scan document",
  [z.DOCUMENT_TOO_FAR]: "Move closer",
  [z.SHARPNESS_TOO_LOW]: "More light needed",
  [z.BRIGHTNESS_TOO_LOW]: "More light needed",
  [z.BRIGHTNESS_TOO_HIGH]: "Less light needed",
  [z.HOTSPOTS_PRESENT]: "Avoid reflections"
}, Xr = {
  loading: {
    text: "Loading. Please wait.",
    visible: !0
  },
  waiting: {
    text: "Waiting for input...",
    visible: !0
  }
}, ma = T.ID_CORNERS_ROUNDED, ga = "rgba(19, 19, 19, 0.5)", La = 34;
function Kr(t, e) {
  return Math.max(e, e + (t - 400) * pa + 2);
}
const Gn = (t, e = Fn) => t ? t.width < t.height ? Kr(t.width, e) : Kr(t.height, e) : e, ya = (t) => t > K.Default ? Tt[K.Default] : t > K.L ? Tt[K.L] : t > K.M ? Tt[K.M] : Tt[K.S], va = (t) => t ? ya(t.width) : Tt[K.Default], Ca = B.div`
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
`, wa = B.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(t) => t.theme.colors.instructionTextColor};
`, Sa = B.p`
  background: ${(t) => t.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(t) => `${t.$fontSize}px`};
  line-height: 1em;
  max-width: 80%;
`, Ke = ({
  fontSize: t,
  Icon: e,
  isCameraReady: r,
  position: n = "absolute",
  text: o
}) => s(Ca, {
  $isCameraReady: r,
  $position: n,
  children: s(wa, {
    children: [e ? s(e, {
      svgSize: t * 2
    }) : null, s(Sa, {
      $fontSize: t,
      children: o
    })]
  })
}), zn = ({
  fontSize: t,
  text: e = "An unknown error has occurred"
}) => s(Ke, {
  fontSize: t,
  Icon: Wn,
  position: "relative",
  text: e
});
class ba extends F {
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
  componentDidCatch(e, r) {
    console.error(e, r);
  }
  render() {
    return this.state.hasError ? s(zn, {
      fontSize: Gn(this.props.videoElementSize),
      Icon: Wn,
      isCameraReady: !1
    }) : this.props.children;
  }
}
const Va = ua`
  [id^='x-dot'][id$='ui'] {
    font-family: ${(t) => t.theme.font.family};
    font-style: ${(t) => t.theme.font.style};
    font-weight: ${(t) => t.theme.font.weight};
  }
`, Ea = ({
  children: t,
  styleTarget: e,
  theme: r,
  videoElementSize: n
}) => s(na, {
  target: e,
  children: s(sa, {
    theme: r,
    children: [s(Va, {}), s(ba, {
      videoElementSize: n,
      children: t
    })]
  })
}), Ht = (t, e) => {
  const r = pe(e);
  pt(() => {
    r.current = e;
  }, [e]), pt(
    () => {
      const n = (o) => r.current(o);
      return document.addEventListener(t, n), () => {
        document.removeEventListener(t, n);
      };
    },
    [t]
    // Re-run if eventName
  );
}, ka = (t) => {
  const [e, r] = W(), n = vt((o) => {
    var i;
    r((i = o.detail) == null ? void 0 : i.size);
  }, [r]);
  return Ht(t, n), e;
};
function Oa(t, e) {
  return t ? `${t}, ${e}` : e;
}
const xa = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, $a = {
  family: "Montserrat, Arial, sans-serif",
  weight: "600",
  style: "normal",
  minimumSize: Fn
}, Dt = {
  colors: xa,
  font: $a
}, Ia = (t) => {
  var e;
  return t != null && t.theme ? {
    ...Dt,
    ...t.theme,
    colors: {
      ...Dt.colors,
      ...t.theme.colors
    },
    font: {
      ...Dt.font,
      ...t.theme.font,
      family: Oa((e = t.theme.font) == null ? void 0 : e.family, Dt.font.family)
    }
  } : Dt;
}, Na = 1.5, Da = 0.85, De = 1e3, Ma = (t, e) => t < De && e >= De ? De : t, Ra = (t, e) => t < e ? t : e, Ta = ({
  height: t,
  width: e
}) => {
  let r;
  return e > t ? r = Ma(t, e) : r = e, {
    width: r,
    height: Ra(t, r)
  };
}, Aa = (t) => {
  const r = Ta(t).width * Da, n = (t.width - r) / 2, o = r / Na, i = (t.height - o) / 2;
  return {
    shiftX: n,
    shiftY: i,
    width: r,
    height: o
  };
}, Pa = (t) => {
  const {
    height: e,
    shiftX: r,
    shiftY: n,
    width: o
  } = Aa(t);
  return {
    shiftX: r / t.width,
    shiftY: n / t.height,
    width: o / t.width,
    height: e / t.height
  };
}, jn = (t, e) => {
  document.dispatchEvent(new CustomEvent(t, {
    detail: e
  }));
}, de = class de {
  constructor() {
    zt(this, "lastDetails", {});
    zt(this, "delayedTime", 0);
  }
  static getInstance() {
    return this._instance || (this._instance = new de()), this._instance;
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
  isDetailChanged(e, r) {
    return JSON.stringify(r) !== JSON.stringify(this.lastDetails[e]) ? (this.lastDetails[e] = r, !0) : !1;
  }
  /**
   * If the detail of the event has changed, dispatch the event
   * @param {string} eventName - The name of the event to dispatch.
   * @param detail - Record<string, unknown>
   */
  dispatchCustomEventOnChange(e, r) {
    this.isDetailChanged(e, r) && jn(e, r);
  }
  /**
   * If the detail of the event has changed, delay time has passed, dispatch the event
   * @param {string} eventName - The name of the event to dispatch.
   * @param detail - Record<string, unknown>
   * @param {number} delay - How long dispatch should be delayed.
   */
  dispatchDelayedCustomEventOnChange(e, r, n) {
    const o = performance.now();
    o - this.delayedTime > n && (this.dispatchCustomEventOnChange(e, r), this.delayedTime = o);
  }
};
zt(de, "_instance");
let Je = de;
Je.getInstance();
const Jr = (t, e) => {
  jn(t, {
    instruction: e
  });
};
class Za {
  static async getVideoInputDeviceList() {
    return (await navigator.mediaDevices.enumerateDevices()).filter((r) => r.kind === "videoinput");
  }
}
const Ha = () => {
  const [t, e] = W(!1);
  return pt(() => {
    (async () => {
      (await Za.getVideoInputDeviceList()).length > 1 && e(!0);
    })();
  }, []), t;
}, Ba = ({
  size: t
}) => s("svg", {
  fill: "none",
  height: t,
  viewBox: "0 0 52 52",
  width: t,
  xmlns: "http://www.w3.org/2000/svg",
  children: [s("path", {
    d: "M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z",
    fill: "#131313",
    fillOpacity: "0.3"
  }), s("circle", {
    cx: "17.5",
    cy: "24.5",
    fill: "white",
    r: "1.5"
  }), s("path", {
    d: "M15 17H16C19.5 17 23 21 23 29C22.5 29 21.5 29 20 29C20 29 20.25 33 19.5 34.5C18.75 36 16 36 16 36H15",
    stroke: "white",
    strokeWidth: "2"
  }), s("circle", {
    fill: "white",
    r: "1.5",
    transform: "matrix(-1 0 0 1 34.5 24.5)"
  }), s("path", {
    d: "M37 17H36C32.5 17 29 21 29 29C29.5 29 30.5 29 32 29C32 29 31.75 33 32.5 34.5C33.25 36 36 36 36 36H37",
    stroke: "white",
    strokeWidth: "2"
  })]
}), Ua = ({
  size: t
}) => s("svg", {
  fill: "none",
  height: t,
  viewBox: "0 0 52 52",
  width: "52",
  xmlns: "http://www.w3.org/2000/svg",
  children: [s("circle", {
    cx: "26",
    cy: "26",
    fill: "#131313",
    fillOpacity: "0.3",
    r: "26"
  }), s("path", {
    d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
    fill: "white"
  })]
}), Yn = B.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(t) => t.$marginLeft ? `${t.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, Wa = ({
  marginLeft: t,
  size: e,
  ...r
}) => s(Yn, {
  $marginLeft: t,
  ...r,
  children: s(Ba, {
    size: e
  })
}), Fa = ({
  marginLeft: t,
  size: e,
  ...r
}) => s(Yn, {
  $marginLeft: t,
  ...r,
  children: s(Ua, {
    size: e
  })
}), Ga = B.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(t) => `${t.$padding}px`};
  z-index: 2;
`, za = ({
  customControlEvent: t,
  isSwitchCameraDisabled: e,
  videoElementSize: r
}) => {
  const n = Ha(), {
    buttonPadding: o,
    iconSize: i,
    marginLeft: a
  } = va(r), c = () => {
    Jr(t, Ae.TOGGLE_MIRROR);
  };
  return s(Ga, {
    $padding: o,
    children: [n && s(Fa, {
      disabled: e,
      onClick: () => {
        Jr(t, Ae.SWITCH_CAMERA);
      },
      size: i
    }), s(Wa, {
      marginLeft: n ? a : 0,
      onClick: c,
      size: i
    })]
  });
}, ja = B.div`
  color: ${(t) => t.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, Ya = ({
  svgSize: t
}) => s(ja, {
  children: s("svg", {
    fill: "none",
    height: t,
    viewBox: "0 0 48 48",
    width: t,
    xmlns: "http://www.w3.org/2000/svg",
    children: [s("path", {
      d: "M30.9229 9.75026C30.9229 12.3736 28.7533 14.5002 26.0767 14.5002C23.4003 14.5002 21.2307 12.3736 21.2307 9.75026C21.2307 7.12664 23.4003 5 26.0767 5C28.7533 5 30.9229 7.12664 30.9229 9.75026Z",
      fill: "currentColor"
    }), s("path", {
      d: "M40.6155 15.8556C40.6155 18.1044 38.7559 19.9273 36.4618 19.9273C34.1675 19.9273 32.3079 18.1044 32.3079 15.8556C32.3079 13.607 34.1675 11.7842 36.4618 11.7842C38.7559 11.7842 40.6155 13.607 40.6155 15.8556Z",
      fill: "currentColor"
    }), s("path", {
      d: "M42 27.3921C42 29.2659 40.4502 30.785 38.5386 30.785C36.6267 30.785 35.0769 29.2659 35.0769 27.3921C35.0769 25.5181 36.6267 23.999 38.5386 23.999C40.4502 23.999 42 25.5181 42 27.3921Z",
      fill: "currentColor"
    }), s("path", {
      d: "M35.0766 37.5712C35.0766 39.0704 33.837 40.2858 32.3075 40.2858C30.7779 40.2858 29.5383 39.0704 29.5383 37.5712C29.5383 36.0723 30.7779 34.8569 32.3075 34.8569C33.837 34.8569 35.0766 36.0723 35.0766 37.5712Z",
      fill: "currentColor"
    }), s("path", {
      d: "M22.6154 40.2858C22.6154 41.7848 21.3756 43.0001 19.846 43.0001C18.3168 43.0001 17.0769 41.7848 17.0769 40.2858C17.0769 38.7866 18.3168 37.5713 19.846 37.5713C21.3756 37.5713 22.6154 38.7866 22.6154 40.2858Z",
      fill: "currentColor"
    }), s("path", {
      d: "M11.5382 32.8216C11.5382 33.9457 10.6085 34.8573 9.46137 34.8573C8.31426 34.8573 7.38452 33.9457 7.38452 32.8216C7.38452 31.6972 8.31426 30.7856 9.46137 30.7856C10.6085 30.7856 11.5382 31.6972 11.5382 32.8216Z",
      fill: "currentColor"
    }), s("path", {
      d: "M8.76913 21.2849C8.76913 22.0345 8.14932 22.642 7.38456 22.642C6.6198 22.642 6 22.0345 6 21.2849C6 20.5353 6.61981 19.9277 7.38456 19.9277C8.14933 19.9277 8.76913 20.5353 8.76913 21.2849Z",
      fill: "currentColor"
    }), s("path", {
      d: "M15.6927 11.7844C15.6927 12.534 15.0729 13.1415 14.3081 13.1415C13.5434 13.1415 12.9236 12.534 12.9236 11.7844C12.9236 11.0348 13.5434 10.4272 14.3081 10.4272C15.0729 10.4272 15.6927 11.0348 15.6927 11.7844Z",
      fill: "currentColor"
    })]
  })
}), qa = B.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`, qn = ({
  backdropColor: t,
  children: e,
  height: r,
  width: n
}) => s(qa, {
  children: s("svg", {
    viewBox: `0 0 ${n} ${r}`,
    children: [s("defs", {
      children: s("mask", {
        id: "mask",
        children: [s("rect", {
          fill: "#fff",
          height: "100%",
          width: "100%"
        }), e]
      })
    }), s("rect", {
      fill: t,
      height: "100%",
      mask: "url(#mask)",
      width: "100%"
    })]
  })
}), Xa = ({
  appState: t,
  appStateInstructions: e,
  backdropColor: r,
  cameraHeight: n,
  cameraWidth: o,
  fontSize: i,
  isBackdrop: a
}) => {
  const c = t === Y.ERROR || t === Y.RUNNING;
  return !t || c || !e[t].visible ? null : t === Y.WAITING ? s(Z, {
    children: [a && n && o && s(qn, {
      backdropColor: r,
      height: n,
      width: o
    }), s(Ke, {
      fontSize: i,
      isCameraReady: !0,
      text: e[Y.WAITING].text
    })]
  }) : s(Ke, {
    fontSize: i,
    Icon: Ya,
    isCameraReady: !0,
    text: e[Y.LOADING].text
  });
}, Ka = "2.5s", Ja = "0.3s", Qa = "linear", ts = we`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
we`
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`;
we`
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
we`
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
const es = B.div`
  position: absolute;
  left: 50%;

  ${(t) => t.$cssTop ? `top: ${t.$cssTop}%;` : ""}
  ${(t) => t.$cssBottom ? `bottom: ${t.$cssBottom}%;` : ""}
    ${(t) => t.$isAnimating && Ce`
      animation: ${ts} ${Ja}
        ${Qa} both;
      animation-delay: ${Ka};

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
`, rs = B.div`
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
  line-height: 1em;
  font-size: ${(t) => `${t.$fontSize}px`};
  white-space: ${(t) => t.$wrap ? "break-spaces" : "nowrap"};
`, ns = ({
  children: t,
  cssBottom: e,
  cssTop: r,
  fontSize: n,
  isAnimating: o,
  isInCandidateSelection: i,
  isPortrait: a
}) => s(es, {
  $cssBottom: e,
  $cssTop: r,
  $isAnimating: o,
  $isPortrait: a,
  children: s(rs, {
    $fontSize: n,
    $isInCandidateSelection: i,
    $wrap: t.length > La,
    children: t
  })
});
function os(t) {
  return s("rect", {
    fill: "#000",
    ...t,
    rx: "2%"
  });
}
const is = () => s("svg", {
  fill: "none",
  height: "402",
  preserveAspectRatio: "none",
  viewBox: "0 0 630 402",
  width: "630",
  xmlns: "http://www.w3.org/2000/svg",
  children: [s("rect", {
    fill: "white",
    height: "402",
    opacity: "0.1",
    rx: "4",
    width: "630"
  }), s("path", {
    d: "M535.828 2H626C627.105 2 628 2.89543 628 4V93.8462M94.1718 2H4C2.89543 2 2 2.89543 2 4V93.8462M2 308.154V398C2 399.105 2.89543 400 4 400H94.1718M628 308.154V398C628 399.105 627.105 400 626 400H535.828",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  })]
}), as = () => s("svg", {
  fill: "none",
  height: "404",
  preserveAspectRatio: "none",
  viewBox: "0 0 632 404",
  width: "632",
  xmlns: "http://www.w3.org/2000/svg",
  children: [s("rect", {
    fill: "white",
    height: "402",
    opacity: "0.1",
    rx: "17",
    width: "630",
    x: "1",
    y: "1"
  }), s("path", {
    d: "M536.385 2H614C622.837 2 630 9.16344 630 18V96.1176M95.6149 2H18C9.16344 2 2 9.16344 2 18V96.1176M2 307.882V386C2 394.837 9.16343 402 18 402H95.6149M630 307.882V386C630 394.837 622.837 402 614 402H536.385",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  })]
}), ss = () => s("svg", {
  fill: "none",
  height: "402",
  preserveAspectRatio: "none",
  viewBox: "0 0 630 402",
  width: "630",
  xmlns: "http://www.w3.org/2000/svg",
  children: [s("mask", {
    fill: "white",
    id: "path-2-inside-1_1_3694",
    children: s("rect", {
      height: "402",
      rx: "2",
      width: "630"
    })
  }), s("rect", {
    height: "402",
    mask: "url(#path-2-inside-1_1_3694)",
    rx: "2",
    stroke: "currentColor",
    strokeDasharray: "14 14",
    strokeLinecap: "square",
    strokeWidth: "8",
    width: "630"
  })]
}), cs = () => s("svg", {
  fill: "none",
  height: "402",
  preserveAspectRatio: "none",
  viewBox: "0 0 630 402",
  width: "630",
  xmlns: "http://www.w3.org/2000/svg",
  children: [s("rect", {
    fill: "white",
    height: "402",
    opacity: "0.1",
    rx: "16",
    width: "630"
  }), s("rect", {
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
}), ls = () => s("svg", {
  fill: "none",
  height: "402",
  preserveAspectRatio: "none",
  viewBox: "0 0 630 402",
  width: "630",
  xmlns: "http://www.w3.org/2000/svg",
  children: s("rect", {
    height: "398",
    stroke: "currentColor",
    strokeDasharray: "1 12 1 12",
    strokeLinecap: "square",
    strokeWidth: "4",
    width: "626",
    x: "2",
    y: "2"
  })
}), us = () => s("svg", {
  fill: "none",
  height: "402",
  preserveAspectRatio: "none",
  viewBox: "0 0 630 402",
  width: "630",
  xmlns: "http://www.w3.org/2000/svg",
  children: s("rect", {
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
}), ds = () => s("svg", {
  fill: "none",
  height: "404",
  preserveAspectRatio: "none",
  viewBox: "0 0 632 404",
  width: "632",
  xmlns: "http://www.w3.org/2000/svg",
  children: [s("rect", {
    fill: "white",
    height: "402",
    opacity: "0.1",
    rx: "17",
    width: "630",
    x: "1",
    y: "1"
  }), s("path", {
    d: "M536.385 2H614C622.837 2 630 9.16344 630 18V96.1176M95.6149 2H18C9.16344 2 2 9.16344 2 18V96.1176M2 307.882V386C2 394.837 9.16343 402 18 402H95.6149M630 307.882V386C630 394.837 622.837 402 614 402H536.385",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  }), s("rect", {
    height: "208.731",
    rx: "4",
    stroke: "currentColor",
    strokeWidth: "2",
    width: "170.061",
    x: "35.7852",
    y: "97.6345"
  })]
}), hs = () => s("svg", {
  fill: "none",
  height: "402",
  preserveAspectRatio: "none",
  viewBox: "0 0 630 402",
  width: "630",
  xmlns: "http://www.w3.org/2000/svg",
  children: [s("rect", {
    fill: "white",
    height: "402",
    opacity: "0.1",
    rx: "4",
    width: "630"
  }), s("mask", {
    fill: "white",
    id: "path-2-inside-1_1_3696",
    children: s("rect", {
      height: "402",
      rx: "2",
      width: "630"
    })
  }), s("rect", {
    height: "402",
    mask: "url(#path-2-inside-1_1_3696)",
    rx: "2",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "8",
    width: "630"
  })]
}), fs = () => s("svg", {
  fill: "none",
  height: "402",
  preserveAspectRatio: "none",
  viewBox: "0 0 630 402",
  width: "630",
  xmlns: "http://www.w3.org/2000/svg",
  children: [s("rect", {
    fill: "white",
    height: "402",
    opacity: "0.1",
    rx: "16",
    width: "630"
  }), s("rect", {
    height: "398",
    rx: "14",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4",
    width: "626",
    x: "2",
    y: "2"
  })]
}), ps = () => s("svg", {
  fill: "none",
  height: "402",
  preserveAspectRatio: "none",
  viewBox: "0 0 630 402",
  width: "630",
  xmlns: "http://www.w3.org/2000/svg",
  children: [s("path", {
    d: "M626 251.4V386C626 392.6 620.6 398 614 398H16C9.4 398 4 392.6 4 386V251.4H626ZM628 247.4H2C0.9 247.4 0 248.3 0 249.4V386C0 394.8 7.2 402 16 402H614C622.8 402 630 394.8 630 386V249.4C630 248.3 629.1 247.4 628 247.4Z",
    fill: "currentColor"
  }), s("path", {
    d: "M2 16C2 8.3 8.3 2 16 2H614C621.7 2 628 8.3 628 16V247.4V386C628 393.7 621.7 400 614 400H16C8.3 400 2 393.7 2 386V247.4V16Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  })]
}), _s = () => s("svg", {
  fill: "none",
  height: "402",
  preserveAspectRatio: "none",
  viewBox: "0 0 630 402",
  width: "630",
  xmlns: "http://www.w3.org/2000/svg",
  children: [s("path", {
    d: "M16 0H614C622.8 0 630 7.2 630 16V386C630 394.8 622.8 402 614 402H16C7.2 402 0 394.8 0 386V16C0 7.2 7.2 0 16 0Z",
    fill: "none",
    opacity: "0.1"
  }), s("path", {
    d: "M16 400C8.3 400 2 393.7 2 386V249.4H628V386C628 393.7 621.7 400 614 400H16Z",
    fill: "none"
  }), s("path", {
    d: "M626 251.4V386C626 392.6 620.6 398 614 398H16C9.4 398 4 392.6 4 386V251.4H626ZM628 247.4H2C0.9 247.4 0 248.3 0 249.4V386C0 394.8 7.2 402 16 402H614C622.8 402 630 394.8 630 386V249.4C630 248.3 629.1 247.4 628 247.4Z",
    fill: "currentColor"
  }), s("path", {
    d: "M48.6001 296V292.9L42.4001 290.8L41.6001 290.5L42.4001 290.2L48.6001 288.1V285L38.6001 289.2V291.7L48.6001 296Z",
    fill: "currentColor"
  }), s("path", {
    d: "M67.3001 296V292.9L61.1 290.8L60.3 290.5L61.1 290.2L67.3001 288.1V285L57.3 289.2V291.7L67.3001 296Z",
    fill: "currentColor"
  }), s("path", {
    d: "M86.1001 296V292.9L79.9001 290.8L79.1001 290.5L79.9001 290.2L86.1001 288.1V285L76.1001 289.2V291.7L86.1001 296Z",
    fill: "currentColor"
  }), s("path", {
    d: "M104.8 296V292.9L98.6 290.8L97.8 290.5L98.6 290.2L104.8 288.1V285L94.8 289.2V291.7L104.8 296Z",
    fill: "currentColor"
  }), s("path", {
    d: "M123.5 296V292.9L117.3 290.8L116.5 290.5L117.3 290.2L123.5 288.1V285L113.5 289.2V291.7L123.5 296Z",
    fill: "currentColor"
  }), s("path", {
    d: "M142.2 296V292.9L136 290.8L135.2 290.5L136 290.2L142.2 288.1V285L132.2 289.2V291.7L142.2 296Z",
    fill: "currentColor"
  }), s("path", {
    d: "M160.9 296V292.9L154.7 290.8L153.9 290.5L154.7 290.2L160.9 288.1V285L150.9 289.2V291.7L160.9 296Z",
    fill: "currentColor"
  }), s("path", {
    d: "M179.6 296V292.9L173.4 290.8L172.6 290.5L173.4 290.2L179.6 288.1V285L169.6 289.2V291.7L179.6 296Z",
    fill: "currentColor"
  }), s("path", {
    d: "M198.3 296V292.9L192.1 290.8L191.3 290.5L192.1 290.2L198.3 288.1V285L188.3 289.2V291.7L198.3 296Z",
    fill: "currentColor"
  }), s("path", {
    d: "M217.1 296V292.9L210.9 290.8L210.1 290.5L210.9 290.2L217.1 288.1V285L207.1 289.2V291.7L217.1 296Z",
    fill: "currentColor"
  }), s("path", {
    d: "M235.8 296V292.9L229.6 290.8L228.8 290.5L229.6 290.2L235.8 288.1V285L225.8 289.2V291.7L235.8 296Z",
    fill: "currentColor"
  }), s("path", {
    d: "M254.5 296V292.9L248.3 290.8L247.5 290.5L248.3 290.2L254.5 288.1V285L244.5 289.2V291.7L254.5 296Z",
    fill: "currentColor"
  }), s("path", {
    d: "M273.2 296V292.9L267 290.8L266.2 290.5L267 290.2L273.2 288.1V285L263.2 289.2V291.7L273.2 296Z",
    fill: "currentColor"
  }), s("path", {
    d: "M291.9 296V292.9L285.7 290.8L284.9 290.5L285.7 290.2L291.9 288.1V285L281.9 289.2V291.7L291.9 296Z",
    fill: "currentColor"
  }), s("path", {
    d: "M310.6 296V292.9L304.4 290.8L303.6 290.5L304.4 290.2L310.6 288.1V285L300.6 289.2V291.7L310.6 296Z",
    fill: "currentColor"
  }), s("path", {
    d: "M329.3 296V292.9L323.1 290.8L322.3 290.5L323.1 290.2L329.3 288.1V285L319.3 289.2V291.7L329.3 296Z",
    fill: "currentColor"
  }), s("path", {
    d: "M348.1 296V292.9L341.9 290.8L341.1 290.5L341.9 290.2L348.1 288.1V285L338.1 289.2V291.7L348.1 296Z",
    fill: "currentColor"
  }), s("path", {
    d: "M366.8 296V292.9L360.6 290.8L359.8 290.5L360.6 290.2L366.8 288.1V285L356.8 289.2V291.7L366.8 296Z",
    fill: "currentColor"
  }), s("path", {
    d: "M385.5 296V292.9L379.3 290.8L378.5 290.5L379.3 290.2L385.5 288.1V285L375.5 289.2V291.7L385.5 296Z",
    fill: "currentColor"
  }), s("path", {
    d: "M404.2 296V292.9L398 290.8L397.2 290.5L398 290.2L404.2 288.1V285L394.2 289.2V291.7L404.2 296Z",
    fill: "currentColor"
  }), s("path", {
    d: "M422.9 296V292.9L416.7 290.8L415.9 290.5L416.7 290.2L422.9 288.1V285L412.9 289.2V291.7L422.9 296Z",
    fill: "currentColor"
  }), s("path", {
    d: "M441.6 296V292.9L435.4 290.8L434.6 290.5L435.4 290.2L441.6 288.1V285L431.6 289.2V291.7L441.6 296Z",
    fill: "currentColor"
  }), s("path", {
    d: "M460.3 296V292.9L454.1 290.8L453.3 290.5L454.1 290.2L460.3 288.1V285L450.3 289.2V291.7L460.3 296Z",
    fill: "currentColor"
  }), s("path", {
    d: "M479.1 296V292.9L472.9 290.8L472.1 290.5L472.9 290.2L479.1 288.1V285L469.1 289.2V291.7L479.1 296Z",
    fill: "currentColor"
  }), s("path", {
    d: "M497.8 296V292.9L491.6 290.8L490.8 290.5L491.6 290.2L497.8 288.1V285L487.8 289.2V291.7L497.8 296Z",
    fill: "currentColor"
  }), s("path", {
    d: "M516.5 296V292.9L510.3 290.8L509.5 290.5L510.3 290.2L516.5 288.1V285L506.5 289.2V291.7L516.5 296Z",
    fill: "currentColor"
  }), s("path", {
    d: "M535.2 296V292.9L529 290.8L528.2 290.5L529 290.2L535.2 288.1V285L525.2 289.2V291.7L535.2 296Z",
    fill: "currentColor"
  }), s("path", {
    d: "M553.9 296V292.9L547.7 290.8L546.9 290.5L547.7 290.2L553.9 288.1V285L543.9 289.2V291.7L553.9 296Z",
    fill: "currentColor"
  }), s("path", {
    d: "M572.6 296V292.9L566.4 290.8L565.6 290.5L566.4 290.2L572.6 288.1V285L562.6 289.2V291.7L572.6 296Z",
    fill: "currentColor"
  }), s("path", {
    d: "M591.3 296V292.9L585.1 290.8L584.3 290.5L585.1 290.2L591.3 288.1V285L581.3 289.2V291.7L591.3 296Z",
    fill: "currentColor"
  }), s("path", {
    d: "M48.6001 326.9V323.8L42.4001 321.7L41.6001 321.4L42.4001 321.1L48.6001 319V315.9L38.6001 320.1V322.6L48.6001 326.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M67.3001 326.9V323.8L61.1 321.7L60.3 321.4L61.1 321.1L67.3001 319V315.9L57.3 320.1V322.6L67.3001 326.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M86.1001 326.9V323.8L79.9001 321.7L79.1001 321.4L79.9001 321.1L86.1001 319V315.9L76.1001 320.1V322.6L86.1001 326.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M104.8 326.9V323.8L98.6 321.7L97.8 321.4L98.6 321.1L104.8 319V315.9L94.8 320.1V322.6L104.8 326.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M123.5 326.9V323.8L117.3 321.7L116.5 321.4L117.3 321.1L123.5 319V315.9L113.5 320.1V322.6L123.5 326.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M142.2 326.9V323.8L136 321.7L135.2 321.4L136 321.1L142.2 319V315.9L132.2 320.1V322.6L142.2 326.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M160.9 326.9V323.8L154.7 321.7L153.9 321.4L154.7 321.1L160.9 319V315.9L150.9 320.1V322.6L160.9 326.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M179.6 326.9V323.8L173.4 321.7L172.6 321.4L173.4 321.1L179.6 319V315.9L169.6 320.1V322.6L179.6 326.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M198.3 326.9V323.8L192.1 321.7L191.3 321.4L192.1 321.1L198.3 319V315.9L188.3 320.1V322.6L198.3 326.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M217.1 326.9V323.8L210.9 321.7L210.1 321.4L210.9 321.1L217.1 319V315.9L207.1 320.1V322.6L217.1 326.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M235.8 326.9V323.8L229.6 321.7L228.8 321.4L229.6 321.1L235.8 319V315.9L225.8 320.1V322.6L235.8 326.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M254.5 326.9V323.8L248.3 321.7L247.5 321.4L248.3 321.1L254.5 319V315.9L244.5 320.1V322.6L254.5 326.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M273.2 326.9V323.8L267 321.7L266.2 321.4L267 321.1L273.2 319V315.9L263.2 320.1V322.6L273.2 326.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M291.9 326.9V323.8L285.7 321.7L284.9 321.4L285.7 321.1L291.9 319V315.9L281.9 320.1V322.6L291.9 326.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M310.6 326.9V323.8L304.4 321.7L303.6 321.4L304.4 321.1L310.6 319V315.9L300.6 320.1V322.6L310.6 326.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M329.3 326.9V323.8L323.1 321.7L322.3 321.4L323.1 321.1L329.3 319V315.9L319.3 320.1V322.6L329.3 326.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M348.1 326.9V323.8L341.9 321.7L341.1 321.4L341.9 321.1L348.1 319V315.9L338.1 320.1V322.6L348.1 326.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M366.8 326.9V323.8L360.6 321.7L359.8 321.4L360.6 321.1L366.8 319V315.9L356.8 320.1V322.6L366.8 326.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M385.5 326.9V323.8L379.3 321.7L378.5 321.4L379.3 321.1L385.5 319V315.9L375.5 320.1V322.6L385.5 326.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M404.2 326.9V323.8L398 321.7L397.2 321.4L398 321.1L404.2 319V315.9L394.2 320.1V322.6L404.2 326.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M422.9 326.9V323.8L416.7 321.7L415.9 321.4L416.7 321.1L422.9 319V315.9L412.9 320.1V322.6L422.9 326.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M441.6 326.9V323.8L435.4 321.7L434.6 321.4L435.4 321.1L441.6 319V315.9L431.6 320.1V322.6L441.6 326.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M460.3 326.9V323.8L454.1 321.7L453.3 321.4L454.1 321.1L460.3 319V315.9L450.3 320.1V322.6L460.3 326.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M479.1 326.9V323.8L472.9 321.7L472.1 321.4L472.9 321.1L479.1 319V315.9L469.1 320.1V322.6L479.1 326.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M497.8 326.9V323.8L491.6 321.7L490.8 321.4L491.6 321.1L497.8 319V315.9L487.8 320.1V322.6L497.8 326.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M516.5 326.9V323.8L510.3 321.7L509.5 321.4L510.3 321.1L516.5 319V315.9L506.5 320.1V322.6L516.5 326.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M535.2 326.9V323.8L529 321.7L528.2 321.4L529 321.1L535.2 319V315.9L525.2 320.1V322.6L535.2 326.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M553.9 326.9V323.8L547.7 321.7L546.9 321.4L547.7 321.1L553.9 319V315.9L543.9 320.1V322.6L553.9 326.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M572.6 326.9V323.8L566.4 321.7L565.6 321.4L566.4 321.1L572.6 319V315.9L562.6 320.1V322.6L572.6 326.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M591.3 326.9V323.8L585.1 321.7L584.3 321.4L585.1 321.1L591.3 319V315.9L581.3 320.1V322.6L591.3 326.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M48.6001 357.9V354.8L42.4001 352.7L41.6001 352.4L42.4001 352.1L48.6001 350V347L38.6001 351.2V353.7L48.6001 357.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M67.3001 357.9V354.8L61.1 352.7L60.3 352.4L61.1 352.1L67.3001 350V347L57.3 351.2V353.7L67.3001 357.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M86.1001 357.9V354.8L79.9001 352.7L79.1001 352.4L79.9001 352.1L86.1001 350V347L76.1001 351.2V353.7L86.1001 357.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M104.8 357.9V354.8L98.6 352.7L97.8 352.4L98.6 352.1L104.8 350V347L94.8 351.2V353.7L104.8 357.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M123.5 357.9V354.8L117.3 352.7L116.5 352.4L117.3 352.1L123.5 350V347L113.5 351.2V353.7L123.5 357.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M142.2 357.9V354.8L136 352.7L135.2 352.4L136 352.1L142.2 350V347L132.2 351.2V353.7L142.2 357.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M160.9 357.9V354.8L154.7 352.7L153.9 352.4L154.7 352.1L160.9 350V347L150.9 351.2V353.7L160.9 357.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M179.6 357.9V354.8L173.4 352.7L172.6 352.4L173.4 352.1L179.6 350V347L169.6 351.2V353.7L179.6 357.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M198.3 357.9V354.8L192.1 352.7L191.3 352.4L192.1 352.1L198.3 350V347L188.3 351.2V353.7L198.3 357.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M217.1 357.9V354.8L210.9 352.7L210.1 352.4L210.9 352.1L217.1 350V347L207.1 351.2V353.7L217.1 357.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M235.8 357.9V354.8L229.6 352.7L228.8 352.4L229.6 352.1L235.8 350V347L225.8 351.2V353.7L235.8 357.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M254.5 357.9V354.8L248.3 352.7L247.5 352.4L248.3 352.1L254.5 350V347L244.5 351.2V353.7L254.5 357.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M273.2 357.9V354.8L267 352.7L266.2 352.4L267 352.1L273.2 350V347L263.2 351.2V353.7L273.2 357.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M291.9 357.9V354.8L285.7 352.7L284.9 352.4L285.7 352.1L291.9 350V347L281.9 351.2V353.7L291.9 357.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M310.6 357.9V354.8L304.4 352.7L303.6 352.4L304.4 352.1L310.6 350V347L300.6 351.2V353.7L310.6 357.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M329.3 357.9V354.8L323.1 352.7L322.3 352.4L323.1 352.1L329.3 350V347L319.3 351.2V353.7L329.3 357.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M348.1 357.9V354.8L341.9 352.7L341.1 352.4L341.9 352.1L348.1 350V347L338.1 351.2V353.7L348.1 357.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M366.8 357.9V354.8L360.6 352.7L359.8 352.4L360.6 352.1L366.8 350V347L356.8 351.2V353.7L366.8 357.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M385.5 357.9V354.8L379.3 352.7L378.5 352.4L379.3 352.1L385.5 350V347L375.5 351.2V353.7L385.5 357.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M404.2 357.9V354.8L398 352.7L397.2 352.4L398 352.1L404.2 350V347L394.2 351.2V353.7L404.2 357.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M422.9 357.9V354.8L416.7 352.7L415.9 352.4L416.7 352.1L422.9 350V347L412.9 351.2V353.7L422.9 357.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M441.6 357.9V354.8L435.4 352.7L434.6 352.4L435.4 352.1L441.6 350V347L431.6 351.2V353.7L441.6 357.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M460.3 357.9V354.8L454.1 352.7L453.3 352.4L454.1 352.1L460.3 350V347L450.3 351.2V353.7L460.3 357.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M479.1 357.9V354.8L472.9 352.7L472.1 352.4L472.9 352.1L479.1 350V347L469.1 351.2V353.7L479.1 357.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M497.8 357.9V354.8L491.6 352.7L490.8 352.4L491.6 352.1L497.8 350V347L487.8 351.2V353.7L497.8 357.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M516.5 357.9V354.8L510.3 352.7L509.5 352.4L510.3 352.1L516.5 350V347L506.5 351.2V353.7L516.5 357.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M535.2 357.9V354.8L529 352.7L528.2 352.4L529 352.1L535.2 350V347L525.2 351.2V353.7L535.2 357.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M553.9 357.9V354.8L547.7 352.7L546.9 352.4L547.7 352.1L553.9 350V347L543.9 351.2V353.7L553.9 357.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M572.6 357.9V354.8L566.4 352.7L565.6 352.4L566.4 352.1L572.6 350V347L562.6 351.2V353.7L572.6 357.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M591.3 357.9V354.8L585.1 352.7L584.3 352.4L585.1 352.1L591.3 350V347L581.3 351.2V353.7L591.3 357.9Z",
    fill: "currentColor"
  }), s("path", {
    d: "M2 16C2 8.3 8.3 2 16 2H614C621.7 2 628 8.3 628 16V247.4V386C628 393.7 621.7 400 614 400H16C8.3 400 2 393.7 2 386V247.4V16Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  })]
}), ms = () => s("svg", {
  fill: "none",
  height: "114",
  preserveAspectRatio: "none",
  viewBox: "0 0 163 114",
  width: "163",
  xmlns: "http://www.w3.org/2000/svg",
  children: [s("path", {
    d: "M2 0.5H161C161.828 0.5 162.5 1.17157 162.5 2V110C162.5 111.933 160.933 113.5 159 113.5H4C2.067 113.5 0.5 111.933 0.5 110V2C0.5 1.17157 1.17157 0.5 2 0.5Z",
    stroke: "currentColor",
    strokeLinecap: "round"
  }), s("path", {
    d: "M1 85H162",
    stroke: "currentColor"
  }), s("defs", {
    children: s("filter", {
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      height: "18.8096",
      id: "filter0_d",
      width: "151",
      x: "6",
      y: "93",
      children: [s("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), s("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        type: "matrix",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }), s("feOffset", {
        dy: "4"
      }), s("feGaussianBlur", {
        stdDeviation: "2"
      }), s("feColorMatrix", {
        type: "matrix",
        values: "0 0 0 0 0 0 0 0 0 0.74902 0 0 0 0 0.698039 0 0 0 0.08 0"
      }), s("feBlend", {
        in2: "BackgroundImageFix",
        mode: "darken",
        result: "effect1_dropShadow"
      }), s("feBlend", {
        in: "SourceGraphic",
        in2: "effect1_dropShadow",
        mode: "normal",
        result: "shape"
      })]
    })
  })]
}), gs = B.div`
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
`, Ls = ({
  children: t,
  isInCandidateSelection: e,
  placeholderRectangle: r
}) => s(gs, {
  $isInCandidateSelection: e,
  $placeholderRectangle: r,
  children: t
}), ys = {
  [T.ID_CORNERS]: s(is, {}),
  [T.ID_DASH]: s(ss, {}),
  [T.ID_DOT]: s(ls, {}),
  [T.ID_SOLID]: s(hs, {}),
  [T.ID_PHOTO_ROUNDED]: s(ds, {}),
  [T.ID_CORNERS_ROUNDED]: s(as, {}),
  [T.ID_DASH_ROUNDED]: s(cs, {}),
  [T.ID_DOT_ROUNDED]: s(us, {}),
  [T.ID_SOLID_ROUNDED]: s(fs, {}),
  [T.ID_SOLID_ROUNDED_BACK]: s(ps, {}),
  [T.PASSPORT_SOLID_BACK]: s(_s, {}),
  [T.PASSPORT_SOLID_BACK_BLANK]: s(ms, {})
}, vs = ({
  backdropColor: t,
  backdropHeight: e,
  backdropWidth: r,
  icon: n,
  isBackdrop: o,
  placeholderRectangle: i,
  ...a
}) => s(Z, {
  children: [o && s(qn, {
    backdropColor: t,
    height: e,
    width: r,
    children: s(os, {
      height: `${i.height * 100}%`,
      width: `${i.width * 100}%`,
      x: `${i.shiftX * 100}%`,
      y: `${i.shiftY * 100}%`
    })
  }), s(Ls, {
    placeholderRectangle: i,
    ...a,
    children: ys[n]
  })]
}), Cs = () => {
  const [t, e] = W(), [r, n] = W(!1), o = vt((h) => {
    var L, C;
    e((L = h == null ? void 0 : h.detail) == null ? void 0 : L.cameraResolution);
    const _ = (C = h == null ? void 0 : h.detail) == null ? void 0 : C.isMirroring;
    _ !== void 0 && n(_);
  }, [e]);
  Ht(dt.CAMERA_PROPS_CHANGED, o);
  const [i, a] = W(
    z.DOCUMENT_NOT_PRESENT
    // FIXME Default instruction should not be here
  ), c = vt((h) => {
    var _;
    a((_ = h == null ? void 0 : h.detail) == null ? void 0 : _.instructionCode);
  }, [a]);
  Ht(dt.INSTRUCTION_CHANGED, c);
  const [l, d] = W(Y.LOADING), [f, u] = W(), p = vt((h) => {
    var L, C;
    d((L = h.detail) == null ? void 0 : L.appState);
    const _ = (C = h == null ? void 0 : h.detail) == null ? void 0 : C.error;
    _ && u(_);
  }, [d, u]);
  return Ht(dt.STATE_CHANGED, p), {
    cameraResolution: t,
    appState: l,
    error: f,
    instructionCode: i,
    isMirroring: r
  };
}, ws = B.canvas`
  transform: ${(t) => t.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, At = (t, e) => Math.hypot(e.x - t.x, e.y - t.y), Qr = (t, e, r) => {
  const n = (e.x - t.x) * r, o = (e.y - t.y) * r;
  return {
    x: t.x + n,
    y: t.y + o
  };
}, tn = (t, e, r, n) => {
  const o = At(t, e);
  return r * n / o;
}, Ss = (t) => {
  const {
    bottomLeft: e,
    bottomRight: r,
    topLeft: n,
    topRight: o
  } = t, i = At(n, o), a = At(o, r), c = At(e, r), l = At(n, e);
  return Math.min(i, a, c, l);
}, bs = (t) => {
  const e = t.getContext("2d");
  e && e.clearRect(0, 0, e.canvas.width, e.canvas.height);
}, Vs = ({
  cameraResolution: t,
  isImageMirror: e
}) => {
  const r = pe(null), n = Bn(), [o, i] = W(), a = vt((c) => {
    var l;
    i((l = c == null ? void 0 : c.detail) == null ? void 0 : l.detectedObject);
  }, [i]);
  return Ht(dt.DETECTED_DOCUMENT_CHANGED, a), pt(() => {
    if (!r.current)
      return;
    const c = (d, f, u, p) => {
      var v;
      const h = tn(f, d, p, qr), _ = tn(f, u, p, qr), L = Qr(f, d, h), C = Qr(f, u, _), g = (v = r == null ? void 0 : r.current) == null ? void 0 : v.getContext("2d");
      g && (g.beginPath(), g.lineWidth = fa, g.strokeStyle = n.colors.placeholderColor, g.moveTo(L.x, L.y), g.arcTo(f.x, f.y, C.x, C.y, ha), g.lineTo(C.x, C.y), g.stroke());
    }, l = (d) => {
      if (!d)
        return;
      const {
        bottomLeft: f,
        bottomRight: u,
        topLeft: p,
        topRight: h
      } = d, _ = Ss(d);
      c(f, p, h, _), c(p, h, u, _), c(h, u, f, _), c(u, f, p, _);
    };
    r.current.width = t.width, r.current.height = t.height, bs(r.current), l(o);
  }, [t, o, n.colors.placeholderColor]), s(ws, {
    ref: r,
    $isImageMirror: e
  });
}, Es = ({
  appStateInstructions: t,
  backdropColor: e,
  instructions: r,
  placeholderIcon: n,
  showCameraButtons: o,
  showDetectionLayer: i,
  videoElementSize: a
}) => {
  const {
    appState: c,
    cameraResolution: l,
    error: d,
    instructionCode: f,
    isMirroring: u
  } = Cs(), p = f === z.CANDIDATE_SELECTION, {
    font: h
  } = Bn(), _ = Gn(a, h.minimumSize), L = n === T.ID_CORNERS_ROUNDED;
  return c === Y.ERROR ? s(zn, {
    fontSize: _,
    text: d == null ? void 0 : d.message
  }) : c === Y.RUNNING && l ? s(Z, {
    children: [i && s(Vs, {
      cameraResolution: l,
      isImageMirror: u
    }), s(vs, {
      backdropColor: e,
      backdropHeight: l.height,
      backdropWidth: l.width,
      icon: n,
      isBackdrop: L,
      isInCandidateSelection: p,
      placeholderRectangle: Pa(l)
    }), f && s(ns, {
      cssTop: 50,
      fontSize: _,
      isInCandidateSelection: p,
      children: r[f]
    }), o && s(za, {
      customControlEvent: dt.CONTROL,
      isSwitchCameraDisabled: p,
      videoElementSize: a
    })]
  }) : s(Xa, {
    appState: c,
    appStateInstructions: t,
    backdropColor: e,
    cameraHeight: l == null ? void 0 : l.height,
    cameraWidth: l == null ? void 0 : l.width,
    fontSize: _,
    isBackdrop: L
  });
}, ks = (t) => {
  var c, l;
  const e = {
    ..._a,
    ...t == null ? void 0 : t.instructions
  }, r = {
    [Y.LOADING]: {
      ...Xr.loading,
      ...(c = t == null ? void 0 : t.appStateInstructions) == null ? void 0 : c.loading
    },
    [Y.WAITING]: {
      ...Xr.waiting,
      ...(l = t == null ? void 0 : t.appStateInstructions) == null ? void 0 : l.waiting
    }
  }, n = (t == null ? void 0 : t.placeholder) ?? ma, o = (t == null ? void 0 : t.backdropColor) ?? ga, i = (t == null ? void 0 : t.showDetectionLayer) ?? !1, a = (t == null ? void 0 : t.showCameraButtons) ?? !1;
  return {
    documentInstructions: e,
    documentAppStateInstructions: r,
    documentPlaceholderIcon: n,
    backdropColor: o,
    showDetectionLayer: i,
    showCameraButtons: a
  };
}, Os = ({
  props: t
}) => {
  const {
    backdropColor: e,
    documentAppStateInstructions: r,
    documentInstructions: n,
    documentPlaceholderIcon: o,
    showCameraButtons: i,
    showDetectionLayer: a
  } = ks(t), c = ka(dt.VIDEO_ELEMENT_SIZE), l = Ia(t);
  return s(Ea, {
    styleTarget: t == null ? void 0 : t.styleTarget,
    theme: l,
    videoElementSize: c,
    children: s(Es, {
      appStateInstructions: r,
      backdropColor: e,
      instructions: n,
      placeholderIcon: o,
      showCameraButtons: i,
      showDetectionLayer: a,
      videoElementSize: c
    })
  });
};
mo(Os, "x-dot-document-auto-capture-ui", ["props"]);
