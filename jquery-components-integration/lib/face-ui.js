var Kr = Object.defineProperty;
var Jr = (e, t, n) => t in e ? Kr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ve = (e, t, n) => (Jr(e, typeof t != "symbol" ? t + "" : t, n), n);
var Be, p, Kn, ce, _n, Jn, At, er, Fe = {}, tr = [], eo = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, dt = Array.isArray;
function K(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function nr(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function D(e, t, n) {
  var r, o, i, a = {};
  for (i in t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Be.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      a[i] === void 0 && (a[i] = e.defaultProps[i]);
  return Me(e, a, r, o, null);
}
function Me(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o ?? ++Kn, __i: -1, __u: 0 };
  return o == null && p.vnode != null && p.vnode(i), i;
}
function to() {
  return { current: null };
}
function U(e) {
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
function rr(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return rr(e);
  }
}
function Rt(e) {
  (!e.__d && (e.__d = !0) && ce.push(e) && !ot.__r++ || _n !== p.debounceRendering) && ((_n = p.debounceRendering) || Jn)(ot);
}
function ot() {
  var e, t, n, r, o, i, a, s, c;
  for (ce.sort(At); e = ce.shift(); )
    e.__d && (t = ce.length, r = void 0, i = (o = (n = e).__v).__e, s = [], c = [], (a = n.__P) && ((r = K({}, o)).__v = o.__v + 1, p.vnode && p.vnode(r), Qt(a, r, o, n.__n, a.ownerSVGElement !== void 0, 32 & o.__u ? [i] : null, s, i ?? Ce(o), !!(32 & o.__u), c), r.__.__k[r.__i] = r, ar(s, r, c), r.__e != i && rr(r)), ce.length > t && ce.sort(At));
  ot.__r = 0;
}
function or(e, t, n, r, o, i, a, s, c, u, d) {
  var l, _, h, m, S, E = r && r.__k || tr, g = t.length;
  for (n.__d = c, no(n, t, E), c = n.__d, l = 0; l < g; l++)
    (h = n.__k[l]) != null && typeof h != "boolean" && typeof h != "function" && (_ = h.__i === -1 ? Fe : E[h.__i] || Fe, h.__i = l, Qt(e, h, _, o, i, a, s, c, u, d), m = h.__e, h.ref && _.ref != h.ref && (_.ref && Kt(_.ref, null, h), d.push(h.ref, h.__c || m, h)), S == null && m != null && (S = m), 65536 & h.__u || _.__k === h.__k ? c = ir(h, c, e) : typeof h.type == "function" && h.__d !== void 0 ? c = h.__d : m && (c = m.nextSibling), h.__d = void 0, h.__u &= -196609);
  n.__d = c, n.__e = S;
}
function no(e, t, n) {
  var r, o, i, a, s, c = t.length, u = n.length, d = u, l = 0;
  for (e.__k = [], r = 0; r < c; r++)
    (o = e.__k[r] = (o = t[r]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? Me(null, o, null, null, o) : dt(o) ? Me(U, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? Me(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = e, o.__b = e.__b + 1, s = ro(o, n, a = r + l, d), o.__i = s, i = null, s !== -1 && (d--, (i = n[s]) && (i.__u |= 131072)), i == null || i.__v === null ? (s == -1 && l--, typeof o.type != "function" && (o.__u |= 65536)) : s !== a && (s === a + 1 ? l++ : s > a ? d > c - a ? l += s - a : l-- : l = s < a && s == a - 1 ? s - a : 0, s !== r + l && (o.__u |= 65536))) : (i = n[r]) && i.key == null && i.__e && (i.__e == e.__d && (e.__d = Ce(i)), Pt(i, i, !1), n[r] = null, d--);
  if (d)
    for (r = 0; r < u; r++)
      (i = n[r]) != null && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = Ce(i)), Pt(i, i));
}
function ir(e, t, n) {
  var r, o;
  if (typeof e.type == "function") {
    for (r = e.__k, o = 0; r && o < r.length; o++)
      r[o] && (r[o].__ = e, t = ir(r[o], t, n));
    return t;
  }
  return e.__e != t && (n.insertBefore(e.__e, t || null), t = e.__e), t && t.nextSibling;
}
function J(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (dt(e) ? e.some(function(n) {
    J(n, t);
  }) : t.push(e)), t;
}
function ro(e, t, n, r) {
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
function pn(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || eo.test(t) ? n : n + "px";
}
function je(e, t, n, r, o) {
  var i;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || pn(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || pn(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      i = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = Date.now(), e.addEventListener(t, i ? gn : mn, i)) : e.removeEventListener(t, i ? gn : mn, i);
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
function mn(e) {
  var t = this.l[e.type + !1];
  if (e.t) {
    if (e.t <= t.u)
      return;
  } else
    e.t = Date.now();
  return t(p.event ? p.event(e) : e);
}
function gn(e) {
  return this.l[e.type + !0](p.event ? p.event(e) : e);
}
function Qt(e, t, n, r, o, i, a, s, c, u) {
  var d, l, _, h, m, S, E, g, v, O, k, N, w, y, G, A = t.type;
  if (t.constructor !== void 0)
    return null;
  128 & n.__u && (c = !!(32 & n.__u), i = [s = t.__e = n.__e]), (d = p.__b) && d(t);
  e:
    if (typeof A == "function")
      try {
        if (g = t.props, v = (d = A.contextType) && r[d.__c], O = d ? v ? v.props.value : d.__ : r, n.__c ? E = (l = t.__c = n.__c).__ = l.__E : ("prototype" in A && A.prototype.render ? t.__c = l = new A(g, O) : (t.__c = l = new z(g, O), l.constructor = A, l.render = io), v && v.sub(l), l.props = g, l.state || (l.state = {}), l.context = O, l.__n = r, _ = l.__d = !0, l.__h = [], l._sb = []), l.__s == null && (l.__s = l.state), A.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = K({}, l.__s)), K(l.__s, A.getDerivedStateFromProps(g, l.__s))), h = l.props, m = l.state, l.__v = t, _)
          A.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (A.getDerivedStateFromProps == null && g !== h && l.componentWillReceiveProps != null && l.componentWillReceiveProps(g, O), !l.__e && (l.shouldComponentUpdate != null && l.shouldComponentUpdate(g, l.__s, O) === !1 || t.__v === n.__v)) {
            for (t.__v !== n.__v && (l.props = g, l.state = l.__s, l.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(ge) {
              ge && (ge.__ = t);
            }), k = 0; k < l._sb.length; k++)
              l.__h.push(l._sb[k]);
            l._sb = [], l.__h.length && a.push(l);
            break e;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(g, l.__s, O), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(h, m, S);
          });
        }
        if (l.context = O, l.props = g, l.__P = e, l.__e = !1, N = p.__r, w = 0, "prototype" in A && A.prototype.render) {
          for (l.state = l.__s, l.__d = !1, N && N(t), d = l.render(l.props, l.state, l.context), y = 0; y < l._sb.length; y++)
            l.__h.push(l._sb[y]);
          l._sb = [];
        } else
          do
            l.__d = !1, N && N(t), d = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++w < 25);
        l.state = l.__s, l.getChildContext != null && (r = K(K({}, r), l.getChildContext())), _ || l.getSnapshotBeforeUpdate == null || (S = l.getSnapshotBeforeUpdate(h, m)), or(e, dt(G = d != null && d.type === U && d.key == null ? d.props.children : d) ? G : [G], t, n, r, o, i, a, s, c, u), l.base = t.__e, t.__u &= -161, l.__h.length && a.push(l), E && (l.__E = l.__ = null);
      } catch (ge) {
        t.__v = null, c || i != null ? (t.__e = s, t.__u |= c ? 160 : 32, i[i.indexOf(s)] = null) : (t.__e = n.__e, t.__k = n.__k), p.__e(ge, t, n);
      }
    else
      i == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = oo(n.__e, t, n, r, o, i, a, c, u);
  (d = p.diffed) && d(t);
}
function ar(e, t, n) {
  t.__d = void 0;
  for (var r = 0; r < n.length; r++)
    Kt(n[r], n[++r], n[++r]);
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
function oo(e, t, n, r, o, i, a, s, c) {
  var u, d, l, _, h, m, S, E = n.props, g = t.props, v = t.type;
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
    E === g || s && e.data === g || (e.data = g);
  else {
    if (i = i && Be.call(e.childNodes), E = n.props || Fe, !s && i != null)
      for (E = {}, u = 0; u < e.attributes.length; u++)
        E[(h = e.attributes[u]).name] = h.value;
    for (u in E)
      h = E[u], u == "children" || (u == "dangerouslySetInnerHTML" ? l = h : u === "key" || u in g || je(e, u, null, h, o));
    for (u in g)
      h = g[u], u == "children" ? _ = h : u == "dangerouslySetInnerHTML" ? d = h : u == "value" ? m = h : u == "checked" ? S = h : u === "key" || s && typeof h != "function" || E[u] === h || je(e, u, h, E[u], o);
    if (d)
      s || l && (d.__html === l.__html || d.__html === e.innerHTML) || (e.innerHTML = d.__html), t.__k = [];
    else if (l && (e.innerHTML = ""), or(e, dt(_) ? _ : [_], t, n, r, o && v !== "foreignObject", i, a, i ? i[0] : n.__k && Ce(n, 0), s, c), i != null)
      for (u = i.length; u--; )
        i[u] != null && nr(i[u]);
    s || (u = "value", m !== void 0 && (m !== e[u] || v === "progress" && !m || v === "option" && m !== E[u]) && je(e, u, m, E[u], !1), u = "checked", S !== void 0 && S !== e[u] && je(e, u, S, E[u], !1));
  }
  return e;
}
function Kt(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    p.__e(r, n);
  }
}
function Pt(e, t, n) {
  var r, o;
  if (p.unmount && p.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Kt(r, null, t)), (r = e.__c) != null) {
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
      r[o] && Pt(r[o], t, n || typeof e.type != "function");
  n || e.__e == null || nr(e.__e), e.__ = e.__e = e.__d = void 0;
}
function io(e, t, n) {
  return this.constructor(e, n);
}
function oe(e, t, n) {
  var r, o, i, a;
  p.__ && p.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], a = [], Qt(t, e = (!r && n || t).__k = D(U, null, [e]), o || Fe, Fe, t.ownerSVGElement !== void 0, !r && n ? [n] : o ? null : t.firstChild ? Be.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, a), ar(i, e, a);
}
function Jt(e, t) {
  oe(e, t, Jt);
}
function en(e, t, n) {
  var r, o, i, a, s = K({}, e.props);
  for (i in e.type && e.type.defaultProps && (a = e.type.defaultProps), t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i] === void 0 && a !== void 0 ? a[i] : t[i];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? Be.call(arguments, 2) : n), Me(e.type, s, r || e.key, o || e.ref, null);
}
function ao(e, t) {
  var n = { __c: t = "__cC" + er++, __: e, Consumer: function(r, o) {
    return r.children(o);
  }, Provider: function(r) {
    var o, i;
    return this.getChildContext || (o = [], (i = {})[t] = this, this.getChildContext = function() {
      return i;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && o.some(function(s) {
        s.__e = !0, Rt(s);
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
Be = tr.slice, p = { __e: function(e, t, n, r) {
  for (var o, i, a; t = t.__; )
    if ((o = t.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), a = o.__d), a)
          return o.__E = o;
      } catch (s) {
        e = s;
      }
  throw e;
} }, Kn = 0, z.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = K({}, this.state), typeof e == "function" && (e = e(K({}, n), this.props)), e && K(n, e), e != null && this.__v && (t && this._sb.push(t), Rt(this));
}, z.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Rt(this));
}, z.prototype.render = U, ce = [], Jn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, At = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, ot.__r = 0, er = 0;
function tn() {
  return (tn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var so = ["context", "children"];
function co(e) {
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
  }(e, so);
  return en(t, n);
}
function lo() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = D(co, tn({}, this._props, { context: e.detail.context }), function t(n, r) {
    if (n.nodeType === 3)
      return n.data;
    if (n.nodeType !== 1)
      return null;
    var o = [], i = {}, a = 0, s = n.attributes, c = n.childNodes;
    for (a = s.length; a--; )
      s[a].name !== "slot" && (i[s[a].name] = s[a].value, i[sr(s[a].name)] = s[a].value);
    for (a = c.length; a--; ) {
      var u = t(c[a], null), d = c[a].slot;
      d ? i[d] = D(yn, { name: d }, u) : o[a] = u;
    }
    var l = r ? D(yn, null, o) : o;
    return D(r || n.nodeName.toLowerCase(), i, l);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Jt : oe)(this._vdom, this._root);
}
function sr(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function uo(e, t, n) {
  if (this._vdom) {
    var r = {};
    r[e] = n = n ?? void 0, r[sr(e)] = n, this._vdom = en(this._vdom, r), oe(this._vdom, this._root);
  }
}
function fo() {
  oe(this._vdom = null, this._root);
}
function yn(e, t) {
  var n = this;
  return D("slot", tn({}, e, { ref: function(r) {
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
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = lo, o.prototype.attributeChangedCallback = uo, o.prototype.disconnectedCallback = fo, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = n, n.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom.props[i];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(i, null, a) : (this._props || (this._props = {}), this._props[i] = a, this.connectedCallback());
      var s = typeof a;
      a != null && s !== "string" && s !== "boolean" && s !== "number" || this.setAttribute(i, a);
    } });
  }), customElements.define(t || e.tagName || e.displayName || e.name, o);
}
var Lt = /* @__PURE__ */ ((e) => (e.CONTINUE_DETECTION = "continue-detection", e.SWITCH_CAMERA = "switch-camera", e.TOGGLE_MIRROR = "toggle-mirror", e))(Lt || {}), he = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", e.CONTROL = "face-auto-capture:control", e.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", e.FACE_DETECTION = "face-auto-capture:face-detection", e.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", e.STATE_CHANGED = "face-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", e))(he || {});
const vn = {
  EYE_NOT_PRESENT: "eye_not_present"
}, L = {
  CANDIDATE_SELECTION: "candidate_selection",
  FACE_TOO_CLOSE: "face_too_close",
  FACE_TOO_FAR: "face_too_far",
  FACE_CENTERING: "face_centering",
  FACE_NOT_PRESENT: "face_not_present",
  SHARPNESS_TOO_LOW: "sharpness_too_low",
  BRIGHTNESS_TOO_LOW: "brightness_too_low",
  BRIGHTNESS_TOO_HIGH: "brightness_too_high",
  DEVICE_PITCHED: "device_pitched",
  LEFT_EYE_NOT_PRESENT: `left_${vn.EYE_NOT_PRESENT}`,
  RIGHT_EYE_NOT_PRESENT: `right_${vn.EYE_NOT_PRESENT}`,
  MOUTH_NOT_PRESENT: "mouth_not_present",
  MOUTH_SCORE_TOO_HIGH: "mouth_score_too_high",
  MOUTH_SCORE_TOO_LOW: "mouth_score_too_low"
}, Y = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  WAITING: "WAITING",
  RUNNING: "RUNNING"
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
), ae, T, $t, Cn, Se = 0, cr = [], Xe = [], Sn = p.__b, wn = p.__r, bn = p.diffed, En = p.__c, On = p.unmount;
function Ne(e, t) {
  p.__h && p.__h(T, e, Se || t), Se = 0;
  var n = T.__H || (T.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({ __V: Xe }), n.__[e];
}
function V(e) {
  return Se = 1, lr(ur, e);
}
function lr(e, t, n) {
  var r = Ne(ae++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : ur(void 0, t), function(s) {
    var c = r.__N ? r.__N[0] : r.__[0], u = r.t(c, s);
    c !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = T, !T.u)) {
    var o = function(s, c, u) {
      if (!r.__c.__H)
        return !0;
      var d = r.__c.__H.__.filter(function(_) {
        return _.__c;
      });
      if (d.every(function(_) {
        return !_.__N;
      }))
        return !i || i.call(this, s, c, u);
      var l = !1;
      return d.forEach(function(_) {
        if (_.__N) {
          var h = _.__[0];
          _.__ = _.__N, _.__N = void 0, h !== _.__[0] && (l = !0);
        }
      }), !(!l && r.__c.props === s) && (!i || i.call(this, s, c, u));
    };
    T.u = !0;
    var i = T.shouldComponentUpdate, a = T.componentWillUpdate;
    T.componentWillUpdate = function(s, c, u) {
      if (this.__e) {
        var d = i;
        i = void 0, o(s, c, u), i = d;
      }
      a && a.call(this, s, c, u);
    }, T.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function _e(e, t) {
  var n = Ne(ae++, 3);
  !p.__s && rn(n.__H, t) && (n.__ = e, n.i = t, T.__H.__h.push(n));
}
function ft(e, t) {
  var n = Ne(ae++, 4);
  !p.__s && rn(n.__H, t) && (n.__ = e, n.i = t, T.__h.push(n));
}
function ht(e) {
  return Se = 5, de(function() {
    return { current: e };
  }, []);
}
function go(e, t, n) {
  Se = 6, ft(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(e));
}
function de(e, t) {
  var n = Ne(ae++, 7);
  return rn(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__;
}
function we(e, t) {
  return Se = 8, de(function() {
    return e;
  }, t);
}
function nn(e) {
  var t = T.context[e.__c], n = Ne(ae++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(T)), t.props.value) : e.__;
}
function Dt(e, t) {
  p.useDebugValue && p.useDebugValue(t ? t(e) : e);
}
function yo() {
  var e = Ne(ae++, 11);
  if (!e.__) {
    for (var t = T.__v; t !== null && !t.__m && t.__ !== null; )
      t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function vo() {
  for (var e; e = cr.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(Qe), e.__H.__h.forEach(Mt), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], p.__e(t, e.__v);
      }
}
p.__b = function(e) {
  T = null, Sn && Sn(e);
}, p.__r = function(e) {
  wn && wn(e), ae = 0;
  var t = (T = e.__c).__H;
  t && ($t === T ? (t.__h = [], T.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = Xe, n.__N = n.i = void 0;
  })) : (t.__h.forEach(Qe), t.__h.forEach(Mt), t.__h = [], ae = 0)), $t = T;
}, p.diffed = function(e) {
  bn && bn(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (cr.push(t) !== 1 && Cn === p.requestAnimationFrame || ((Cn = p.requestAnimationFrame) || Co)(vo)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== Xe && (n.__ = n.__V), n.i = void 0, n.__V = Xe;
  })), $t = T = null;
}, p.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(Qe), n.__h = n.__h.filter(function(r) {
        return !r.__ || Mt(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], p.__e(r, n.__v);
    }
  }), En && En(e, t);
}, p.unmount = function(e) {
  On && On(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      Qe(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && p.__e(t, n.__v));
};
var $n = typeof requestAnimationFrame == "function";
function Co(e) {
  var t, n = function() {
    clearTimeout(r), $n && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  $n && (t = requestAnimationFrame(n));
}
function Qe(e) {
  var t = T, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), T = t;
}
function Mt(e) {
  var t = T;
  e.__c = e.__(), T = t;
}
function rn(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function ur(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function dr(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ht(e, t) {
  for (var n in e)
    if (n !== "__source" && !(n in t))
      return !0;
  for (var r in t)
    if (r !== "__source" && e[r] !== t[r])
      return !0;
  return !1;
}
function Ft(e) {
  this.props = e;
}
function So(e, t) {
  function n(o) {
    var i = this.props.ref, a = i == o.ref;
    return !a && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !a : Ht(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, D(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(Ft.prototype = new z()).isPureReactComponent = !0, Ft.prototype.shouldComponentUpdate = function(e, t) {
  return Ht(this.props, e) || Ht(this.state, t);
};
var kn = p.__b;
p.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), kn && kn(e);
};
var wo = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function bo(e) {
  function t(n) {
    var r = dr({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = wo, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Nn = function(e, t) {
  return e == null ? null : J(J(e).map(t));
}, Eo = { map: Nn, forEach: Nn, count: function(e) {
  return e ? J(e).length : 0;
}, only: function(e) {
  var t = J(e);
  if (t.length !== 1)
    throw "Children.only";
  return t[0];
}, toArray: J }, Oo = p.__e;
p.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; )
      if ((o = i.__c) && o.__c)
        return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  Oo(e, t, n, r);
};
var In = p.unmount;
function fr(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = dr({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return fr(r, t, n);
  })), e;
}
function hr(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return hr(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function Ke() {
  this.__u = 0, this.t = null, this.__b = null;
}
function _r(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function $o(e) {
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
function Pe() {
  this.u = null, this.o = null;
}
p.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), In && In(e);
}, (Ke.prototype = new z()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var o = _r(r.__v), i = !1, a = function() {
    i || (i = !0, n.__R = null, o ? o(s) : s());
  };
  n.__R = a;
  var s = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var c = r.state.__a;
        r.__v.__k[0] = hr(c, c.__c.__P, c.__c.__O);
      }
      var u;
      for (r.setState({ __a: r.__b = null }); u = r.t.pop(); )
        u.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(a, a);
}, Ke.prototype.componentWillUnmount = function() {
  this.t = [];
}, Ke.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = fr(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && D(U, null, e.fallback);
  return o && (o.__u &= -33), [D(U, null, t.__a ? null : e.children), o];
};
var Tn = function(e, t, n) {
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
function No(e) {
  var t = this, n = e.i;
  t.componentWillUnmount = function() {
    oe(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== n && t.componentWillUnmount(), t.l || (t.i = n, t.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r);
  } }), oe(D(ko, { context: t.context }, e.__v), t.l);
}
function Io(e, t) {
  var n = D(No, { __v: e, i: t });
  return n.containerInfo = t, n;
}
(Pe.prototype = new z()).__a = function(e) {
  var t = this, n = _r(t.__v), r = t.o.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), Tn(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, Pe.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = J(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; )
    this.o.set(t[n], this.u = [1, 0, this.u]);
  return e.children;
}, Pe.prototype.componentDidUpdate = Pe.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, n) {
    Tn(e, n, t);
  });
};
var pr = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, To = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, xo = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Ao = /[A-Z0-9]/g, Ro = typeof document < "u", Po = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function Lo(e, t, n) {
  return t.__k == null && (t.textContent = ""), oe(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function Do(e, t, n) {
  return Jt(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
z.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(z.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var xn = p.event;
function Mo() {
}
function Ho() {
  return this.cancelBubble;
}
function Fo() {
  return this.defaultPrevented;
}
p.event = function(e) {
  return xn && (e = xn(e)), e.persist = Mo, e.isPropagationStopped = Ho, e.isDefaultPrevented = Fo, e.nativeEvent = e;
};
var on, Uo = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, An = p.vnode;
p.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {};
    for (var i in n) {
      var a = n[i];
      if (!(i === "value" && "defaultValue" in n && a == null || Ro && i === "children" && r === "noscript" || i === "class" || i === "className")) {
        var s = i.toLowerCase();
        i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && a === !0 ? a = "" : s === "ondoubleclick" ? i = "ondblclick" : s !== "onchange" || r !== "input" && r !== "textarea" || Po(n.type) ? s === "onfocus" ? i = "onfocusin" : s === "onblur" ? i = "onfocusout" : xo.test(i) ? i = s : r.indexOf("-") === -1 && To.test(i) ? i = i.replace(Ao, "-$&").toLowerCase() : a === null && (a = void 0) : s = i = "oninput", s === "oninput" && o[i = s] && (i = "oninputCapture"), o[i] = a;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = J(n.children).forEach(function(c) {
      c.props.selected = o.value.indexOf(c.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = J(n.children).forEach(function(c) {
      c.props.selected = o.multiple ? o.defaultValue.indexOf(c.props.value) != -1 : o.defaultValue == c.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", Uo)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = pr, An && An(e);
};
var Rn = p.__r;
p.__r = function(e) {
  Rn && Rn(e), on = e.__c;
};
var Pn = p.diffed;
p.diffed = function(e) {
  Pn && Pn(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), on = null;
};
var Bo = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return on.__n[e.__c].props.value;
} } } };
function Wo(e) {
  return D.bind(null, e);
}
function _t(e) {
  return !!e && e.$$typeof === pr;
}
function Go(e) {
  return _t(e) && e.type === U;
}
function zo(e) {
  return _t(e) ? en.apply(null, arguments) : e;
}
function Vo(e) {
  return !!e.__k && (oe(null, e), !0);
}
function jo(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var Zo = function(e, t) {
  return e(t);
}, Yo = function(e, t) {
  return e(t);
}, qo = U;
function mr(e) {
  e();
}
function Xo(e) {
  return e;
}
function Qo() {
  return [!1, mr];
}
var Ko = ft, Jo = _t;
function ei(e, t) {
  var n = t(), r = V({ h: { __: n, v: t } }), o = r[0].h, i = r[1];
  return ft(function() {
    o.__ = n, o.v = t, kt(o) && i({ h: o });
  }, [e, n, t]), _e(function() {
    return kt(o) && i({ h: o }), e(function() {
      kt(o) && i({ h: o });
    });
  }, [e]), n;
}
function kt(e) {
  var t, n, r = e.v, o = e.__;
  try {
    var i = r();
    return !((t = o) === (n = i) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
}
var M = { useState: V, useId: yo, useReducer: lr, useEffect: _e, useLayoutEffect: ft, useInsertionEffect: Ko, useTransition: Qo, useDeferredValue: Xo, useSyncExternalStore: ei, startTransition: mr, useRef: ht, useImperativeHandle: go, useMemo: de, useCallback: we, useContext: nn, useDebugValue: Dt, version: "17.0.2", Children: Eo, render: Lo, hydrate: Do, unmountComponentAtNode: Vo, createPortal: Io, createElement: D, createContext: ao, createFactory: Wo, cloneElement: zo, createRef: to, Fragment: U, isValidElement: _t, isElement: Jo, isFragment: Go, findDOMNode: jo, Component: z, PureComponent: Ft, memo: So, forwardRef: bo, flushSync: Yo, unstable_batchedUpdates: Zo, StrictMode: qo, Suspense: Ke, SuspenseList: Pe, lazy: $o, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Bo };
function ti(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ni = function(t, n, r, o) {
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
    var d = a[u];
    if (!c(d))
      return !1;
    var l = t[d], _ = n[d];
    if (i = r ? r.call(o, l, _, d) : void 0, i === !1 || i === void 0 && l !== _)
      return !1;
  }
  return !0;
};
const ri = /* @__PURE__ */ ti(ni);
var I = "-ms-", He = "-moz-", $ = "-webkit-", gr = "comm", pt = "rule", an = "decl", oi = "@import", yr = "@keyframes", ii = "@layer", ai = Math.abs, sn = String.fromCharCode, Ut = Object.assign;
function si(e, t) {
  return R(e, 0) ^ 45 ? (((t << 2 ^ R(e, 0)) << 2 ^ R(e, 1)) << 2 ^ R(e, 2)) << 2 ^ R(e, 3) : 0;
}
function vr(e) {
  return e.trim();
}
function X(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function C(e, t, n) {
  return e.replace(t, n);
}
function Je(e, t) {
  return e.indexOf(t);
}
function R(e, t) {
  return e.charCodeAt(t) | 0;
}
function be(e, t, n) {
  return e.slice(t, n);
}
function Z(e) {
  return e.length;
}
function Cr(e) {
  return e.length;
}
function Le(e, t) {
  return t.push(e), e;
}
function ci(e, t) {
  return e.map(t).join("");
}
function Ln(e, t) {
  return e.filter(function(n) {
    return !X(n, t);
  });
}
var mt = 1, Ee = 1, Sr = 0, B = 0, x = 0, Ie = "";
function gt(e, t, n, r, o, i, a, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: mt, column: Ee, length: a, return: "", siblings: s };
}
function ne(e, t) {
  return Ut(gt("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function ve(e) {
  for (; e.root; )
    e = ne(e.root, { children: [e] });
  Le(e, e.siblings);
}
function li() {
  return x;
}
function ui() {
  return x = B > 0 ? R(Ie, --B) : 0, Ee--, x === 10 && (Ee = 1, mt--), x;
}
function j() {
  return x = B < Sr ? R(Ie, B++) : 0, Ee++, x === 10 && (Ee = 1, mt++), x;
}
function fe() {
  return R(Ie, B);
}
function et() {
  return B;
}
function yt(e, t) {
  return be(Ie, e, t);
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
function di(e) {
  return mt = Ee = 1, Sr = Z(Ie = e), B = 0, [];
}
function fi(e) {
  return Ie = "", e;
}
function Nt(e) {
  return vr(yt(B - 1, Wt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function hi(e) {
  for (; (x = fe()) && x < 33; )
    j();
  return Bt(e) > 2 || Bt(x) > 3 ? "" : " ";
}
function _i(e, t) {
  for (; --t && j() && !(x < 48 || x > 102 || x > 57 && x < 65 || x > 70 && x < 97); )
    ;
  return yt(e, et() + (t < 6 && fe() == 32 && j() == 32));
}
function Wt(e) {
  for (; j(); )
    switch (x) {
      case e:
        return B;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Wt(x);
        break;
      case 40:
        e === 41 && Wt(e);
        break;
      case 92:
        j();
        break;
    }
  return B;
}
function pi(e, t) {
  for (; j() && e + x !== 57; )
    if (e + x === 84 && fe() === 47)
      break;
  return "/*" + yt(t, B - 1) + "*" + sn(e === 47 ? e : j());
}
function mi(e) {
  for (; !Bt(fe()); )
    j();
  return yt(e, B);
}
function gi(e) {
  return fi(tt("", null, null, null, [""], e = di(e), 0, [0], e));
}
function tt(e, t, n, r, o, i, a, s, c) {
  for (var u = 0, d = 0, l = a, _ = 0, h = 0, m = 0, S = 1, E = 1, g = 1, v = 0, O = "", k = o, N = i, w = r, y = O; E; )
    switch (m = v, v = j()) {
      case 40:
        if (m != 108 && R(y, l - 1) == 58) {
          Je(y += C(Nt(v), "&", "&\f"), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        y += Nt(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        y += hi(m);
        break;
      case 92:
        y += _i(et() - 1, 7);
        continue;
      case 47:
        switch (fe()) {
          case 42:
          case 47:
            Le(yi(pi(j(), et()), t, n, c), c);
            break;
          default:
            y += "/";
        }
        break;
      case 123 * S:
        s[u++] = Z(y) * g;
      case 125 * S:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            E = 0;
          case 59 + d:
            g == -1 && (y = C(y, /\f/g, "")), h > 0 && Z(y) - l && Le(h > 32 ? Mn(y + ";", r, n, l - 1, c) : Mn(C(y, " ", "") + ";", r, n, l - 2, c), c);
            break;
          case 59:
            y += ";";
          default:
            if (Le(w = Dn(y, t, n, u, d, o, s, O, k = [], N = [], l, i), i), v === 123)
              if (d === 0)
                tt(y, t, w, w, k, i, l, s, N);
              else
                switch (_ === 99 && R(y, 3) === 110 ? 100 : _) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    tt(e, w, w, r && Le(Dn(e, w, w, 0, 0, o, s, O, o, k = [], l, N), N), o, N, l, s, r ? k : N);
                    break;
                  default:
                    tt(y, w, w, w, [""], N, 0, s, N);
                }
        }
        u = d = h = 0, S = g = 1, O = y = "", l = a;
        break;
      case 58:
        l = 1 + Z(y), h = m;
      default:
        if (S < 1) {
          if (v == 123)
            --S;
          else if (v == 125 && S++ == 0 && ui() == 125)
            continue;
        }
        switch (y += sn(v), v * S) {
          case 38:
            g = d > 0 ? 1 : (y += "\f", -1);
            break;
          case 44:
            s[u++] = (Z(y) - 1) * g, g = 1;
            break;
          case 64:
            fe() === 45 && (y += Nt(j())), _ = fe(), d = l = Z(O = y += mi(et())), v++;
            break;
          case 45:
            m === 45 && Z(y) == 2 && (S = 0);
        }
    }
  return i;
}
function Dn(e, t, n, r, o, i, a, s, c, u, d, l) {
  for (var _ = o - 1, h = o === 0 ? i : [""], m = Cr(h), S = 0, E = 0, g = 0; S < r; ++S)
    for (var v = 0, O = be(e, _ + 1, _ = ai(E = a[S])), k = e; v < m; ++v)
      (k = vr(E > 0 ? h[v] + " " + O : C(O, /&\f/g, h[v]))) && (c[g++] = k);
  return gt(e, t, n, o === 0 ? pt : s, c, u, d, l);
}
function yi(e, t, n, r) {
  return gt(e, t, n, gr, sn(li()), be(e, 2, -2), 0, r);
}
function Mn(e, t, n, r, o) {
  return gt(e, t, n, an, be(e, 0, r), be(e, r + 1, -1), r, o);
}
function wr(e, t, n) {
  switch (si(e, t)) {
    case 5103:
      return $ + "print-" + e + e;
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
      return $ + e + e;
    case 4789:
      return He + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return $ + e + He + e + I + e + e;
    case 5936:
      switch (R(e, t + 11)) {
        case 114:
          return $ + e + I + C(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return $ + e + I + C(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return $ + e + I + C(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return $ + e + I + e + e;
    case 6165:
      return $ + e + I + "flex-" + e + e;
    case 5187:
      return $ + e + C(e, /(\w+).+(:[^]+)/, $ + "box-$1$2" + I + "flex-$1$2") + e;
    case 5443:
      return $ + e + I + "flex-item-" + C(e, /flex-|-self/g, "") + (X(e, /flex-|baseline/) ? "" : I + "grid-row-" + C(e, /flex-|-self/g, "")) + e;
    case 4675:
      return $ + e + I + "flex-line-pack" + C(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return $ + e + I + C(e, "shrink", "negative") + e;
    case 5292:
      return $ + e + I + C(e, "basis", "preferred-size") + e;
    case 6060:
      return $ + "box-" + C(e, "-grow", "") + $ + e + I + C(e, "grow", "positive") + e;
    case 4554:
      return $ + C(e, /([^-])(transform)/g, "$1" + $ + "$2") + e;
    case 6187:
      return C(C(C(e, /(zoom-|grab)/, $ + "$1"), /(image-set)/, $ + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return C(e, /(image-set\([^]*)/, $ + "$1$`$1");
    case 4968:
      return C(C(e, /(.+:)(flex-)?(.*)/, $ + "box-pack:$3" + I + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + $ + e + e;
    case 4200:
      if (!X(e, /flex-|baseline/))
        return I + "grid-column-align" + be(e, t) + e;
      break;
    case 2592:
    case 3360:
      return I + C(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, X(r.props, /grid-\w+-end/);
      }) ? ~Je(e + (n = n[t].value), "span") ? e : I + C(e, "-start", "") + e + I + "grid-row-span:" + (~Je(n, "span") ? X(n, /\d+/) : +X(n, /\d+/) - +X(e, /\d+/)) + ";" : I + C(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return X(r.props, /grid-\w+-start/);
      }) ? e : I + C(C(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return C(e, /(.+)-inline(.+)/, $ + "$1$2") + e;
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
      if (Z(e) - 1 - t > 6)
        switch (R(e, t + 1)) {
          case 109:
            if (R(e, t + 4) !== 45)
              break;
          case 102:
            return C(e, /(.+:)(.+)-([^]+)/, "$1" + $ + "$2-$3$1" + He + (R(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Je(e, "stretch") ? wr(C(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return C(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, a, s, c, u) {
        return I + o + ":" + i + u + (a ? I + o + "-span:" + (s ? c : +c - +i) + u : "") + e;
      });
    case 4949:
      if (R(e, t + 6) === 121)
        return C(e, ":", ":" + $) + e;
      break;
    case 6444:
      switch (R(e, R(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return C(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + $ + (R(e, 14) === 45 ? "inline-" : "") + "box$3$1" + $ + "$2$3$1" + I + "$2box$3") + e;
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
function it(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function vi(e, t, n, r) {
  switch (e.type) {
    case ii:
      if (e.children.length)
        break;
    case oi:
    case an:
      return e.return = e.return || e.value;
    case gr:
      return "";
    case yr:
      return e.return = e.value + "{" + it(e.children, r) + "}";
    case pt:
      if (!Z(e.value = e.props.join(",")))
        return "";
  }
  return Z(n = it(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Ci(e) {
  var t = Cr(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function Si(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function wi(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case an:
        e.return = wr(e.value, e.length, n);
        return;
      case yr:
        return it([ne(e, { value: C(e.value, "@", "@" + $) })], r);
      case pt:
        if (e.length)
          return ci(n = e.props, function(o) {
            switch (X(o, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                ve(ne(e, { props: [C(o, /:(read-\w+)/, ":" + He + "$1")] })), ve(ne(e, { props: [o] })), Ut(e, { props: Ln(n, r) });
                break;
              case "::placeholder":
                ve(ne(e, { props: [C(o, /:(plac\w+)/, ":" + $ + "input-$1")] })), ve(ne(e, { props: [C(o, /:(plac\w+)/, ":" + He + "$1")] })), ve(ne(e, { props: [C(o, /:(plac\w+)/, I + "input-$1")] })), ve(ne(e, { props: [o] })), Ut(e, { props: Ln(n, r) });
                break;
            }
            return "";
          });
    }
}
var bi = {
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
}, b = {}, pe = typeof process < "u" && b !== void 0 && (b.REACT_APP_SC_ATTR || b.SC_ATTR) || "data-styled", cn = typeof window < "u" && "HTMLElement" in window, Ei = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && b !== void 0 && b.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && b.REACT_APP_SC_DISABLE_SPEEDY !== "" ? b.REACT_APP_SC_DISABLE_SPEEDY !== "false" && b.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && b !== void 0 && b.SC_DISABLE_SPEEDY !== void 0 && b.SC_DISABLE_SPEEDY !== "" ? b.SC_DISABLE_SPEEDY !== "false" && b.SC_DISABLE_SPEEDY : b.NODE_ENV !== "production"), Oi = {}, Hn = /invalid hook call/i, Ze = /* @__PURE__ */ new Set(), br = function(e, t) {
  if (b.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(a) {
        for (var s = [], c = 1; c < arguments.length; c++)
          s[c - 1] = arguments[c];
        Hn.test(a) ? (i = !1, Ze.delete(r)) : o.apply(void 0, ie([a], s, !1));
      }, ht(), i && !Ze.has(r) && (console.warn(r), Ze.add(r));
    } catch (a) {
      Hn.test(a.message) && Ze.delete(r);
    } finally {
      console.error = o;
    }
  }
}, vt = Object.freeze([]), Oe = Object.freeze({});
function Er(e, t, n) {
  return n === void 0 && (n = Oe), e.theme !== n.theme && e.theme || t || n.theme;
}
var Gt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), $i = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ki = /(^-|-$)/g;
function Fn(e) {
  return e.replace($i, "-").replace(ki, "");
}
var Ni = /(a)(d)/gi, Un = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function zt(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    n = Un(t % 52) + n;
  return (Un(t % 52) + n).replace(Ni, "$1-$2");
}
var It, le = function(e, t) {
  for (var n = t.length; n; )
    e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Or = function(e) {
  return le(5381, e);
};
function ln(e) {
  return zt(Or(e) >>> 0);
}
function $r(e) {
  return b.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Tt(e) {
  return typeof e == "string" && (b.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var kr = typeof Symbol == "function" && Symbol.for, Nr = kr ? Symbol.for("react.memo") : 60115, Ii = kr ? Symbol.for("react.forward_ref") : 60112, Ti = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, xi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Ir = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Ai = ((It = {})[Ii] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, It[Nr] = Ir, It);
function Bn(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Nr ? Ir : "$$typeof" in e ? Ai[e.$$typeof] : Ti;
  var t;
}
var Ri = Object.defineProperty, Pi = Object.getOwnPropertyNames, Wn = Object.getOwnPropertySymbols, Li = Object.getOwnPropertyDescriptor, Di = Object.getPrototypeOf, Gn = Object.prototype;
function Tr(e, t, n) {
  if (typeof t != "string") {
    if (Gn) {
      var r = Di(t);
      r && r !== Gn && Tr(e, r, n);
    }
    var o = Pi(t);
    Wn && (o = o.concat(Wn(t)));
    for (var i = Bn(e), a = Bn(t), s = 0; s < o.length; ++s) {
      var c = o[s];
      if (!(c in xi || n && n[c] || a && c in a || i && c in i)) {
        var u = Li(t, c);
        try {
          Ri(e, c, u);
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
function un(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function ue(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function at(e, t) {
  if (e.length === 0)
    return "";
  for (var n = e[0], r = 1; r < e.length; r++)
    n += t ? t + e[r] : e[r];
  return n;
}
function $e(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Vt(e, t, n) {
  if (n === void 0 && (n = !1), !n && !$e(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++)
      e[r] = Vt(e[r], t[r]);
  else if ($e(t))
    for (var r in t)
      e[r] = Vt(e[r], t[r]);
  return e;
}
function dn(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Mi = b.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Hi() {
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
  return b.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Hi.apply(void 0, ie([Mi[e]], t, !1)).trim());
}
var Fi = function() {
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
}(), nt = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), rt = 1, Ye = function(e) {
  if (nt.has(e))
    return nt.get(e);
  for (; st.has(rt); )
    rt++;
  var t = rt++;
  if (b.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1073741824))
    throw q(16, "".concat(t));
  return nt.set(e, t), st.set(t, e), t;
}, Ui = function(e, t) {
  rt = t + 1, nt.set(e, t), st.set(t, e);
}, Bi = "style[".concat(pe, "][").concat("data-styled-version", '="').concat("6.1.1", '"]'), Wi = new RegExp("^".concat(pe, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Gi = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++)
    (r = o[i]) && e.registerName(t, r);
}, zi = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(`/*!sc*/
`), o = [], i = 0, a = r.length; i < a; i++) {
    var s = r[i].trim();
    if (s) {
      var c = s.match(Wi);
      if (c) {
        var u = 0 | parseInt(c[1], 10), d = c[2];
        u !== 0 && (Ui(d, u), Gi(e, d, c[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else
        o.push(s);
    }
  }
};
function Vi() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var xr = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(s) {
    var c = Array.from(s.querySelectorAll("style[".concat(pe, "]")));
    return c[c.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(pe, "active"), r.setAttribute("data-styled-version", "6.1.1");
  var a = Vi();
  return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
}, ji = function() {
  function e(t) {
    this.element = xr(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
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
}(), Zi = function() {
  function e(t) {
    this.element = xr(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), Yi = function() {
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
}(), zn = cn, qi = { isServer: !cn, useCSSOMInjection: !Ei }, ct = function() {
  function e(t, n, r) {
    t === void 0 && (t = Oe), n === void 0 && (n = {});
    var o = this;
    this.options = P(P({}, qi), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && cn && zn && (zn = !1, function(i) {
      for (var a = document.querySelectorAll(Bi), s = 0, c = a.length; s < c; s++) {
        var u = a[s];
        u && u.getAttribute(pe) !== "active" && (zi(i, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this)), dn(this, function() {
      return function(i) {
        for (var a = i.getTag(), s = a.length, c = "", u = function(l) {
          var _ = function(g) {
            return st.get(g);
          }(l);
          if (_ === void 0)
            return "continue";
          var h = i.names.get(_), m = a.getGroup(l);
          if (h === void 0 || m.length === 0)
            return "continue";
          var S = "".concat(pe, ".g").concat(l, '[id="').concat(_, '"]'), E = "";
          h !== void 0 && h.forEach(function(g) {
            g.length > 0 && (E += "".concat(g, ","));
          }), c += "".concat(m).concat(S, '{content:"').concat(E, '"}').concat(`/*!sc*/
`);
        }, d = 0; d < s; d++)
          u(d);
        return c;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return Ye(t);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(P(P({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new Yi(o) : r ? new ji(o) : new Zi(o);
    }(this.options), new Fi(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (Ye(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(Ye(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Ye(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), Xi = /&/g, Qi = /^\s*\/\/.*$/gm;
function Ar(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = Ar(n.children, t)), n;
  });
}
function Rr(e) {
  var t, n, r, o = e === void 0 ? Oe : e, i = o.options, a = i === void 0 ? Oe : i, s = o.plugins, c = s === void 0 ? vt : s, u = function(_, h, m) {
    return m === n || m.startsWith(n) && m.endsWith(n) && m.replaceAll(n, "").length > 0 ? ".".concat(t) : _;
  }, d = c.slice();
  d.push(function(_) {
    _.type === pt && _.value.includes("&") && (_.props[0] = _.props[0].replace(Xi, n).replace(r, u));
  }), a.prefix && d.push(wi), d.push(vi);
  var l = function(_, h, m, S) {
    h === void 0 && (h = ""), m === void 0 && (m = ""), S === void 0 && (S = "&"), t = S, n = h, r = new RegExp("\\".concat(n, "\\b"), "g");
    var E = _.replace(Qi, ""), g = gi(m || h ? "".concat(m, " ").concat(h, " { ").concat(E, " }") : E);
    a.namespace && (g = Ar(g, a.namespace));
    var v = [];
    return it(g, Ci(d.concat(Si(function(O) {
      return v.push(O);
    })))), v;
  };
  return l.hash = c.length ? c.reduce(function(_, h) {
    return h.name || q(15), le(_, h.name);
  }, 5381).toString() : "", l;
}
var Ki = new ct(), jt = Rr(), fn = M.createContext({ shouldForwardProp: void 0, styleSheet: Ki, stylis: jt });
fn.Consumer;
var Ji = M.createContext(void 0);
function lt() {
  return nn(fn);
}
function ea(e) {
  var t = V(e.stylisPlugins), n = t[0], r = t[1], o = lt().styleSheet, i = de(function() {
    var c = o;
    return e.sheet ? c = e.sheet : e.target && (c = c.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (c = c.reconstructWithOptions({ useCSSOMInjection: !1 })), c;
  }, [e.disableCSSOMInjection, e.sheet, e.target, o]), a = de(function() {
    return Rr({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: n });
  }, [e.enableVendorPrefixes, e.namespace, n]);
  _e(function() {
    ri(n, e.stylisPlugins) || r(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var s = de(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: a };
  }, [e.shouldForwardProp, i, a]);
  return M.createElement(fn.Provider, { value: s }, M.createElement(Ji.Provider, { value: a }, e.children));
}
var Zt = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = jt);
      var a = r.name + i.hash;
      o.hasNameForId(r.id, a) || o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, dn(this, function() {
      throw q(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = jt), this.name + t.hash;
  }, e;
}(), ta = function(e) {
  return e >= "A" && e <= "Z";
};
function Vn(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-")
      return e;
    ta(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Pr = function(e) {
  return e == null || e === !1 || e === "";
}, Lr = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !Pr(i) && (Array.isArray(i) && i.isCss || me(i) ? r.push("".concat(Vn(o), ":"), i, ";") : $e(i) ? r.push.apply(r, ie(ie(["".concat(o, " {")], Lr(i), !1), ["}"], !1)) : r.push("".concat(Vn(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in bi || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function re(e, t, n, r) {
  if (Pr(e))
    return [];
  if (un(e))
    return [".".concat(e.styledComponentId)];
  if (me(e)) {
    if (!me(i = e) || i.prototype && i.prototype.isReactComponent || !t)
      return [e];
    var o = e(t);
    return b.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Zt || $e(o) || o === null || console.error("".concat($r(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), re(o, t, n, r);
  }
  var i;
  return e instanceof Zt ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : $e(e) ? Lr(e) : Array.isArray(e) ? Array.prototype.concat.apply(vt, e.map(function(a) {
    return re(a, t, n, r);
  })) : [e.toString()];
}
function Dr(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (me(n) && !un(n))
      return !1;
  }
  return !0;
}
var na = Or("6.1.1"), ra = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = b.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Dr(t), this.componentId = n, this.baseHash = le(na, n), this.baseStyle = r, ct.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash)
      if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId))
        o = ue(o, this.staticRulesId);
      else {
        var i = at(re(this.rules, t, n, r)), a = zt(le(this.baseHash, i) >>> 0);
        if (!n.hasNameForId(this.componentId, a)) {
          var s = r(i, ".".concat(a), void 0, this.componentId);
          n.insertRules(this.componentId, a, s);
        }
        o = ue(o, a), this.staticRulesId = a;
      }
    else {
      for (var c = le(this.baseHash, r.hash), u = "", d = 0; d < this.rules.length; d++) {
        var l = this.rules[d];
        if (typeof l == "string")
          u += l, b.NODE_ENV !== "production" && (c = le(c, l));
        else if (l) {
          var _ = at(re(l, t, n, r));
          c = le(c, _ + d), u += _;
        }
      }
      if (u) {
        var h = zt(c >>> 0);
        n.hasNameForId(this.componentId, h) || n.insertRules(this.componentId, h, r(u, ".".concat(h), void 0, this.componentId)), o = ue(o, h);
      }
    }
    return o;
  }, e;
}(), ke = M.createContext(void 0);
ke.Consumer;
function Mr() {
  var e = nn(ke);
  if (!e)
    throw q(18);
  return e;
}
function oa(e) {
  var t = M.useContext(ke), n = de(function() {
    return function(r, o) {
      if (!r)
        throw q(14);
      if (me(r)) {
        var i = r(o);
        if (b.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object"))
          throw q(7);
        return i;
      }
      if (Array.isArray(r) || typeof r != "object")
        throw q(8);
      return o ? P(P({}, o), r) : r;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? M.createElement(ke.Provider, { value: n }, e.children) : null;
}
var xt = {}, jn = /* @__PURE__ */ new Set();
function ia(e, t, n) {
  var r = un(e), o = e, i = !Tt(e), a = t.attrs, s = a === void 0 ? vt : a, c = t.componentId, u = c === void 0 ? function(k, N) {
    var w = typeof k != "string" ? "sc" : Fn(k);
    xt[w] = (xt[w] || 0) + 1;
    var y = "".concat(w, "-").concat(ln("6.1.1" + w + xt[w]));
    return N ? "".concat(N, "-").concat(y) : y;
  }(t.displayName, t.parentComponentId) : c, d = t.displayName, l = d === void 0 ? function(k) {
    return Tt(k) ? "styled.".concat(k) : "Styled(".concat($r(k), ")");
  }(e) : d, _ = t.displayName && t.componentId ? "".concat(Fn(t.displayName), "-").concat(t.componentId) : t.componentId || u, h = r && o.attrs ? o.attrs.concat(s).filter(Boolean) : s, m = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var S = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var E = t.shouldForwardProp;
      m = function(k, N) {
        return S(k, N) && E(k, N);
      };
    } else
      m = S;
  }
  var g = new ra(n, _, r ? o.componentStyle : void 0);
  function v(k, N) {
    return function(w, y, G) {
      var A = w.attrs, ge = w.componentStyle, Zr = w.defaultProps, Yr = w.foldedComponentIds, hn = w.styledComponentId, qr = w.target, Xr = M.useContext(ke), Qr = lt(), wt = w.shouldForwardProp || Qr.shouldForwardProp;
      b.NODE_ENV !== "production" && Dt(hn);
      var ee = function(We, Ae, Ge) {
        for (var ye, se = P(P({}, Ae), { className: void 0, theme: Ge }), Ot = 0; Ot < We.length; Ot += 1) {
          var ze = me(ye = We[Ot]) ? ye(se) : ye;
          for (var te in ze)
            se[te] = te === "className" ? ue(se[te], ze[te]) : te === "style" ? P(P({}, se[te]), ze[te]) : ze[te];
        }
        return Ae.className && (se.className = ue(se.className, Ae.className)), se;
      }(A, y, Er(y, Xr, Zr) || Oe), Te = ee.as || qr, xe = {};
      for (var F in ee)
        ee[F] === void 0 || F[0] === "$" || F === "as" || F === "theme" || (F === "forwardedAs" ? xe.as = ee.forwardedAs : wt && !wt(F, Te) || (xe[F] = ee[F], wt || b.NODE_ENV !== "development" || mo(F) || jn.has(F) || !Gt.has(Te) || (jn.add(F), console.warn('styled-components: it looks like an unknown prop "'.concat(F, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var bt = function(We, Ae) {
        var Ge = lt(), ye = We.generateAndInjectStyles(Ae, Ge.styleSheet, Ge.stylis);
        return b.NODE_ENV !== "production" && Dt(ye), ye;
      }(ge, ee);
      b.NODE_ENV !== "production" && w.warnTooManyClasses && w.warnTooManyClasses(bt);
      var Et = ue(Yr, hn);
      return bt && (Et += " " + bt), ee.className && (Et += " " + ee.className), xe[Tt(Te) && !Gt.has(Te) ? "class" : "className"] = Et, xe.ref = G, D(Te, xe);
    }(O, k, N);
  }
  v.displayName = l;
  var O = M.forwardRef(v);
  return O.attrs = h, O.componentStyle = g, O.displayName = l, O.shouldForwardProp = m, O.foldedComponentIds = r ? ue(o.foldedComponentIds, o.styledComponentId) : "", O.styledComponentId = _, O.target = r ? o.target : e, Object.defineProperty(O, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(k) {
    this._foldedDefaultProps = r ? function(N) {
      for (var w = [], y = 1; y < arguments.length; y++)
        w[y - 1] = arguments[y];
      for (var G = 0, A = w; G < A.length; G++)
        Vt(N, A[G], !0);
      return N;
    }({}, o.defaultProps, k) : k;
  } }), b.NODE_ENV !== "production" && (br(l, _), O.warnTooManyClasses = /* @__PURE__ */ function(k, N) {
    var w = {}, y = !1;
    return function(G) {
      if (!y && (w[G] = !0, Object.keys(w).length >= 200)) {
        var A = N ? ' with the id of "'.concat(N, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(k).concat(A, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), y = !0, w = {};
      }
    };
  }(l, _)), dn(O, function() {
    return ".".concat(O.styledComponentId);
  }), i && Tr(O, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), O;
}
function Zn(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var Yn = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Ct(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  if (me(e) || $e(e)) {
    var r = e;
    return Yn(re(Zn(vt, ie([r], t, !0))));
  }
  var o = e;
  return t.length === 0 && o.length === 1 && typeof o[0] == "string" ? re(o) : Yn(re(Zn(o, t)));
}
function Yt(e, t, n) {
  if (n === void 0 && (n = Oe), !t)
    throw q(1, t);
  var r = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++)
      i[a - 1] = arguments[a];
    return e(t, n, Ct.apply(void 0, ie([o], i, !1)));
  };
  return r.attrs = function(o) {
    return Yt(e, t, P(P({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Yt(e, t, P(P({}, n), o));
  }, r;
}
var Hr = function(e) {
  return Yt(ia, e);
}, W = Hr;
Gt.forEach(function(e) {
  W[e] = Hr(e);
});
var aa = function() {
  function e(t, n) {
    this.rules = t, this.componentId = n, this.isStatic = Dr(t), ct.registerId(this.componentId + 1);
  }
  return e.prototype.createStyles = function(t, n, r, o) {
    var i = o(at(re(this.rules, n, r, o)), ""), a = this.componentId + t;
    r.insertRules(a, a, i);
  }, e.prototype.removeStyles = function(t, n) {
    n.clearRules(this.componentId + t);
  }, e.prototype.renderStyles = function(t, n, r, o) {
    t > 2 && ct.registerId(this.componentId + t), this.removeStyles(t, r), this.createStyles(t, n, r, o);
  }, e;
}();
function sa(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  var r = Ct.apply(void 0, ie([e], t, !1)), o = "sc-global-".concat(ln(JSON.stringify(r))), i = new aa(r, o);
  b.NODE_ENV !== "production" && br(o);
  var a = function(c) {
    var u = lt(), d = M.useContext(ke), l = M.useRef(u.styleSheet.allocateGSInstance(o)).current;
    return b.NODE_ENV !== "production" && M.Children.count(c.children) && console.warn("The global style component ".concat(o, " was given child JSX. createGlobalStyle does not render children.")), b.NODE_ENV !== "production" && r.some(function(_) {
      return typeof _ == "string" && _.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), u.styleSheet.server && s(l, c, u.styleSheet, d, u.stylis), M.useLayoutEffect(function() {
      if (!u.styleSheet.server)
        return s(l, c, u.styleSheet, d, u.stylis), function() {
          return i.removeStyles(l, u.styleSheet);
        };
    }, [l, c, u.styleSheet, d, u.stylis]), null;
  };
  function s(c, u, d, l, _) {
    if (i.isStatic)
      i.renderStyles(c, Oi, d, _);
    else {
      var h = P(P({}, u), { theme: Er(u, l, a.defaultProps) });
      i.renderStyles(c, h, d, _);
    }
  }
  return M.memo(a);
}
function St(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  b.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = at(Ct.apply(void 0, ie([e], t, !1))), o = ln(r);
  return new Zt(o, r);
}
b.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var qe = "__sc-".concat(pe, "__");
b.NODE_ENV !== "production" && b.NODE_ENV !== "test" && typeof window < "u" && (window[qe] || (window[qe] = 0), window[qe] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[qe] += 1);
var ca = 0;
function f(e, t, n, r, o, i) {
  var a, s, c = {};
  for (s in t)
    s == "ref" ? a = t[s] : c[s] = t[s];
  var u = { type: e, props: c, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --ca, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (a = e.defaultProps))
    for (s in a)
      c[s] === void 0 && (c[s] = a[s]);
  return p.vnode && p.vnode(u), u;
}
const Fr = ({
  svgSize: e
}) => f("svg", {
  fill: "none",
  height: e,
  viewBox: "0 0 16 14",
  width: e,
  xmlns: "http://www.w3.org/2000/svg",
  children: f("path", {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })
}), H = {
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
}, la = 2, Ur = 14, ua = 0.0276;
var Q = /* @__PURE__ */ ((e) => (e[e.S = 300] = "S", e[e.M = 400] = "M", e[e.L = 500] = "L", e[e.Default = 600] = "Default", e))(Q || {});
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
}, qn = {
  loading: {
    text: "Loading. Please wait.",
    visible: !0
  },
  waiting: {
    text: "Waiting for input...",
    visible: !0
  }
}, da = {
  [L.CANDIDATE_SELECTION]: "Stay still…",
  [L.FACE_TOO_CLOSE]: "Move back",
  [L.FACE_TOO_FAR]: "Move closer",
  [L.FACE_CENTERING]: "Center your face",
  [L.FACE_NOT_PRESENT]: "Position your face into the circle",
  [L.SHARPNESS_TOO_LOW]: "Turn face against light",
  [L.BRIGHTNESS_TOO_LOW]: "Turn face against light",
  [L.BRIGHTNESS_TOO_HIGH]: "Less light needed",
  [L.DEVICE_PITCHED]: "Hold your phone at eye level",
  [L.LEFT_EYE_NOT_PRESENT]: "Position your face into the circle",
  [L.RIGHT_EYE_NOT_PRESENT]: "Position your face into the circle",
  [L.MOUTH_SCORE_TOO_HIGH]: "Keep neutral expression",
  [L.MOUTH_SCORE_TOO_LOW]: "Smile :)",
  [L.MOUTH_NOT_PRESENT]: "Position your face into the circle"
}, fa = H.CIRCLE_SOLID, ha = "rgba(19, 19, 19, 0.5)", _a = 34;
function Xn(e, t) {
  return Math.max(t, t + (e - 400) * ua + 2);
}
const Br = (e, t = Ur) => e ? e.width < e.height ? Xn(e.width, t) : Xn(e.height, t) : t, pa = (e) => e > Q.Default ? De[Q.Default] : e > Q.L ? De[Q.L] : e > Q.M ? De[Q.M] : De[Q.S], ma = (e) => e ? pa(e.width) : De[Q.Default], ga = W.div`
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
`, ya = W.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, va = W.p`
  background: ${(e) => e.theme.colors.instructionColor};
  border-radius: 0.25em;
  padding: 0.583em 0.666em;
  margin: 0.8em 0;
  font-size: ${(e) => `${e.$fontSize}px`};
  line-height: 1em;
  max-width: 80%;
`, qt = ({
  fontSize: e,
  Icon: t,
  isCameraReady: n,
  position: r = "absolute",
  text: o
}) => f(ga, {
  $isCameraReady: n,
  $position: r,
  children: f(ya, {
    children: [t ? f(t, {
      svgSize: e * 2
    }) : null, f(va, {
      $fontSize: e,
      children: o
    })]
  })
}), Wr = ({
  fontSize: e,
  text: t = "An unknown error has occurred"
}) => f(qt, {
  fontSize: e,
  Icon: Fr,
  position: "relative",
  text: t
});
class Ca extends z {
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
    return this.state.hasError ? f(Wr, {
      fontSize: Br(this.props.videoElementSize),
      Icon: Fr,
      isCameraReady: !1
    }) : this.props.children;
  }
}
const Sa = sa`
  [id^='x-dot'][id$='ui'] {
    font-family: ${(e) => e.theme.font.family};
    font-style: ${(e) => e.theme.font.style};
    font-weight: ${(e) => e.theme.font.weight};
  }
`, wa = ({
  children: e,
  styleTarget: t,
  theme: n,
  videoElementSize: r
}) => f(ea, {
  target: t,
  children: f(oa, {
    theme: n,
    children: [f(Sa, {}), f(Ca, {
      videoElementSize: r,
      children: e
    })]
  })
}), Ue = (e, t) => {
  const n = ht(t);
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
}, ba = (e) => {
  const [t, n] = V(), r = we((o) => {
    var i;
    n((i = o.detail) == null ? void 0 : i.size);
  }, [n]);
  return Ue(e, r), t;
};
function Ea(e, t) {
  return e ? `${e}, ${t}` : t;
}
const Oa = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, $a = {
  family: "Montserrat, Arial, sans-serif",
  weight: "600",
  style: "normal",
  minimumSize: Ur
}, Re = {
  colors: Oa,
  font: $a
}, ka = (e) => {
  var t;
  return e != null && e.theme ? {
    ...Re,
    ...e.theme,
    colors: {
      ...Re.colors,
      ...e.theme.colors
    },
    font: {
      ...Re.font,
      ...e.theme.font,
      family: Ea((t = e.theme.font) == null ? void 0 : t.family, Re.font.family)
    }
  } : Re;
}, Na = 0.75, Ia = 2, Ta = (e) => Number.parseFloat(e.toFixed(3)), Gr = (e, t) => Math.min(e, t), xa = (e, t) => {
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
}, Pa = (e, t) => xa(e, t) * Ia, zr = (e, t) => {
  document.dispatchEvent(new CustomEvent(e, {
    detail: t
  }));
}, ut = class ut {
  constructor() {
    Ve(this, "lastDetails", {});
    Ve(this, "delayedTime", 0);
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
    this.isDetailChanged(t, n) && zr(t, n);
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
Ve(ut, "_instance");
let Xt = ut;
Xt.getInstance();
const Qn = (e, t) => {
  zr(e, {
    instruction: t
  });
};
class La {
  static async getVideoInputDeviceList() {
    return (await navigator.mediaDevices.enumerateDevices()).filter((n) => n.kind === "videoinput");
  }
}
const Da = () => {
  const [e, t] = V(!1);
  return _e(() => {
    (async () => {
      (await La.getVideoInputDeviceList()).length > 1 && t(!0);
    })();
  }, []), e;
}, Ma = ({
  size: e
}) => f("svg", {
  fill: "none",
  height: e,
  viewBox: "0 0 52 52",
  width: e,
  xmlns: "http://www.w3.org/2000/svg",
  children: [f("path", {
    d: "M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z",
    fill: "#131313",
    fillOpacity: "0.3"
  }), f("circle", {
    cx: "17.5",
    cy: "24.5",
    fill: "white",
    r: "1.5"
  }), f("path", {
    d: "M15 17H16C19.5 17 23 21 23 29C22.5 29 21.5 29 20 29C20 29 20.25 33 19.5 34.5C18.75 36 16 36 16 36H15",
    stroke: "white",
    strokeWidth: "2"
  }), f("circle", {
    fill: "white",
    r: "1.5",
    transform: "matrix(-1 0 0 1 34.5 24.5)"
  }), f("path", {
    d: "M37 17H36C32.5 17 29 21 29 29C29.5 29 30.5 29 32 29C32 29 31.75 33 32.5 34.5C33.25 36 36 36 36 36H37",
    stroke: "white",
    strokeWidth: "2"
  })]
}), Ha = ({
  size: e
}) => f("svg", {
  fill: "none",
  height: e,
  viewBox: "0 0 52 52",
  width: "52",
  xmlns: "http://www.w3.org/2000/svg",
  children: [f("circle", {
    cx: "26",
    cy: "26",
    fill: "#131313",
    fillOpacity: "0.3",
    r: "26"
  }), f("path", {
    d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
    fill: "white"
  })]
}), Vr = W.button`
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
}) => f(Vr, {
  $marginLeft: e,
  ...n,
  children: f(Ma, {
    size: t
  })
}), Ua = ({
  marginLeft: e,
  size: t,
  ...n
}) => f(Vr, {
  $marginLeft: e,
  ...n,
  children: f(Ha, {
    size: t
  })
}), Ba = W.div`
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
  const r = Da(), {
    buttonPadding: o,
    iconSize: i,
    marginLeft: a
  } = ma(n), s = () => {
    Qn(e, Lt.TOGGLE_MIRROR);
  };
  return f(Ba, {
    $padding: o,
    children: [r && f(Ua, {
      disabled: t,
      onClick: () => {
        Qn(e, Lt.SWITCH_CAMERA);
      },
      size: i
    }), f(Fa, {
      marginLeft: r ? a : 0,
      onClick: s,
      size: i
    })]
  });
}, Ga = W.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, za = ({
  svgSize: e
}) => f(Ga, {
  children: f("svg", {
    fill: "none",
    height: e,
    viewBox: "0 0 48 48",
    width: e,
    xmlns: "http://www.w3.org/2000/svg",
    children: [f("path", {
      d: "M30.9229 9.75026C30.9229 12.3736 28.7533 14.5002 26.0767 14.5002C23.4003 14.5002 21.2307 12.3736 21.2307 9.75026C21.2307 7.12664 23.4003 5 26.0767 5C28.7533 5 30.9229 7.12664 30.9229 9.75026Z",
      fill: "currentColor"
    }), f("path", {
      d: "M40.6155 15.8556C40.6155 18.1044 38.7559 19.9273 36.4618 19.9273C34.1675 19.9273 32.3079 18.1044 32.3079 15.8556C32.3079 13.607 34.1675 11.7842 36.4618 11.7842C38.7559 11.7842 40.6155 13.607 40.6155 15.8556Z",
      fill: "currentColor"
    }), f("path", {
      d: "M42 27.3921C42 29.2659 40.4502 30.785 38.5386 30.785C36.6267 30.785 35.0769 29.2659 35.0769 27.3921C35.0769 25.5181 36.6267 23.999 38.5386 23.999C40.4502 23.999 42 25.5181 42 27.3921Z",
      fill: "currentColor"
    }), f("path", {
      d: "M35.0766 37.5712C35.0766 39.0704 33.837 40.2858 32.3075 40.2858C30.7779 40.2858 29.5383 39.0704 29.5383 37.5712C29.5383 36.0723 30.7779 34.8569 32.3075 34.8569C33.837 34.8569 35.0766 36.0723 35.0766 37.5712Z",
      fill: "currentColor"
    }), f("path", {
      d: "M22.6154 40.2858C22.6154 41.7848 21.3756 43.0001 19.846 43.0001C18.3168 43.0001 17.0769 41.7848 17.0769 40.2858C17.0769 38.7866 18.3168 37.5713 19.846 37.5713C21.3756 37.5713 22.6154 38.7866 22.6154 40.2858Z",
      fill: "currentColor"
    }), f("path", {
      d: "M11.5382 32.8216C11.5382 33.9457 10.6085 34.8573 9.46137 34.8573C8.31426 34.8573 7.38452 33.9457 7.38452 32.8216C7.38452 31.6972 8.31426 30.7856 9.46137 30.7856C10.6085 30.7856 11.5382 31.6972 11.5382 32.8216Z",
      fill: "currentColor"
    }), f("path", {
      d: "M8.76913 21.2849C8.76913 22.0345 8.14932 22.642 7.38456 22.642C6.6198 22.642 6 22.0345 6 21.2849C6 20.5353 6.61981 19.9277 7.38456 19.9277C8.14933 19.9277 8.76913 20.5353 8.76913 21.2849Z",
      fill: "currentColor"
    }), f("path", {
      d: "M15.6927 11.7844C15.6927 12.534 15.0729 13.1415 14.3081 13.1415C13.5434 13.1415 12.9236 12.534 12.9236 11.7844C12.9236 11.0348 13.5434 10.4272 14.3081 10.4272C15.0729 10.4272 15.6927 11.0348 15.6927 11.7844Z",
      fill: "currentColor"
    })]
  })
}), Va = W.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`, jr = ({
  backdropColor: e,
  children: t,
  height: n,
  width: r
}) => f(Va, {
  children: f("svg", {
    viewBox: `0 0 ${r} ${n}`,
    children: [f("defs", {
      children: f("mask", {
        id: "mask",
        children: [f("rect", {
          fill: "#fff",
          height: "100%",
          width: "100%"
        }), t]
      })
    }), f("rect", {
      fill: e,
      height: "100%",
      mask: "url(#mask)",
      width: "100%"
    })]
  })
}), ja = ({
  appState: e,
  appStateInstructions: t,
  backdropColor: n,
  cameraHeight: r,
  cameraWidth: o,
  fontSize: i,
  isBackdrop: a
}) => {
  const s = e === Y.ERROR || e === Y.RUNNING;
  return !e || s || !t[e].visible ? null : e === Y.WAITING ? f(U, {
    children: [a && r && o && f(jr, {
      backdropColor: n,
      height: r,
      width: o
    }), f(qt, {
      fontSize: i,
      isCameraReady: !0,
      text: t[Y.WAITING].text
    })]
  }) : f(qt, {
    fontSize: i,
    Icon: za,
    isCameraReady: !0,
    text: t[Y.LOADING].text
  });
}, Za = "2.5s", Ya = "0.3s", qa = "linear", Xa = St`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
St`
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`;
St`
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
St`
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
const Qa = W.div`
  position: absolute;
  left: 50%;

  ${(e) => e.$cssTop ? `top: ${e.$cssTop}%;` : ""}
  ${(e) => e.$cssBottom ? `bottom: ${e.$cssBottom}%;` : ""}
    ${(e) => e.$isAnimating && Ct`
      animation: ${Xa} ${Ya}
        ${qa} both;
      animation-delay: ${Za};

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
`, Ka = W.div`
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
`, Ja = ({
  children: e,
  cssBottom: t,
  cssTop: n,
  fontSize: r,
  isAnimating: o,
  isInCandidateSelection: i,
  isPortrait: a
}) => f(Qa, {
  $cssBottom: t,
  $cssTop: n,
  $isAnimating: o,
  $isPortrait: a,
  children: f(Ka, {
    $fontSize: r,
    $isInCandidateSelection: i,
    $wrap: e.length > _a,
    children: e
  })
});
function es(e) {
  return f("rect", {
    fill: "#000",
    ...e,
    rx: "50%"
  });
}
const ts = () => f("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: f("path", {
    d: "M2 240C2 108.556 108.556 2 240 2C371.444 2 478 108.556 478 240C478 371.444 371.444 478 240 478C108.556 478 2 371.444 2 240Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  })
}), ns = () => f("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: f("path", {
    d: "M38.9231 240C38.9231 108.23 129.248 2 240 2C350.752 2 441.077 108.23 441.077 240C441.077 371.77 350.752 478 240 478C129.248 478 38.9231 371.77 38.9231 240Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  })
}), rs = () => f("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: f("path", {
    clipRule: "evenodd",
    d: "M123.592 81.0326C143.203 50.4946 180.289 34 240 34C299.711 34 336.797 50.4946 356.408 81.0326C375.742 111.138 377.681 154.313 368.661 207.051C371.545 208.577 374.834 210.748 377.278 215.028C380.075 219.925 381.612 227.297 380.77 239.048C379.202 260.93 372.883 270.75 366.157 276.198C363.521 278.333 360.842 279.765 358.659 280.932C358.141 281.209 357.651 281.471 357.196 281.724C354.727 283.097 353.459 284.114 352.94 285.588C346.115 312.745 335.656 325.235 326.992 335.581C325.711 337.111 324.469 338.595 323.283 340.072C318.736 345.738 315.077 351.244 313.058 359.018C311.036 366.806 310.62 377.042 312.887 392.189C323.28 427.534 349.601 445.607 379.548 458.155C380.567 458.582 381.047 459.754 380.62 460.773C380.193 461.792 379.021 462.271 378.002 461.845C347.548 449.083 319.871 430.304 309.01 393.182L308.972 393.052L308.952 392.918C306.617 377.396 306.974 366.534 309.187 358.012C311.409 349.454 315.459 343.431 320.164 337.568C321.377 336.057 322.636 334.552 323.926 333.011C332.525 322.737 342.484 310.837 349.08 284.533L349.099 284.458L349.124 284.385C350.161 281.284 352.747 279.621 355.253 278.228C355.794 277.927 356.344 277.632 356.902 277.333C359.061 276.176 361.329 274.961 363.639 273.09C369.248 268.547 375.264 259.921 376.78 238.762C377.594 227.404 376.048 220.94 373.805 217.012C371.594 213.141 368.56 211.453 365.547 209.952L364.214 209.287L364.469 207.818C373.737 154.637 371.701 112.248 353.043 83.194C334.485 54.2962 299.065 38 240 38C180.935 38 145.516 54.2962 126.958 83.194C108.3 112.248 106.264 154.637 115.531 207.818L115.787 209.287L114.453 209.952C111.441 211.453 108.406 213.141 106.196 217.012C103.953 220.94 102.406 227.404 103.22 238.762C104.736 259.921 110.753 268.547 116.361 273.09C118.672 274.961 120.94 276.176 123.099 277.333C123.656 277.632 124.206 277.927 124.748 278.228C127.254 279.621 129.84 281.284 130.877 284.385L130.901 284.458L130.92 284.533C137.517 310.837 147.476 322.737 156.074 333.011C157.364 334.552 158.624 336.057 159.837 337.568C164.542 343.431 168.592 349.454 170.814 358.012C173.026 366.534 173.384 377.396 171.048 392.918L171.028 393.052L170.99 393.182C160.129 430.304 132.452 449.083 101.998 461.845C100.979 462.271 99.8075 461.792 99.3806 460.773C98.9537 459.754 99.4335 458.582 100.452 458.155C130.399 445.607 156.721 427.534 167.113 392.189C169.381 377.042 168.964 366.806 166.942 359.018C164.924 351.244 161.264 345.738 156.717 340.072C155.532 338.595 154.29 337.111 153.008 335.581C144.345 325.235 133.886 312.745 127.061 285.588C126.541 284.114 125.273 283.097 122.804 281.724C122.349 281.471 121.859 281.209 121.341 280.932C119.159 279.765 116.479 278.333 113.844 276.198C107.117 270.75 100.798 260.93 99.2303 239.048C98.3883 227.297 99.9259 219.925 102.722 215.028C105.166 210.748 108.455 208.577 111.339 207.051C102.319 154.313 104.259 111.138 123.592 81.0326Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })
}), os = () => f("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: f("rect", {
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
}), is = () => f("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: f("rect", {
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
}), as = () => f("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: f("rect", {
    height: "476",
    rx: "14",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4",
    width: "476",
    x: "2",
    y: "2"
  })
}), ss = () => f("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: f("rect", {
    height: "476",
    rx: "2",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4",
    width: "476",
    x: "2",
    y: "2"
  })
}), cs = () => f("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: f("path", {
    clipRule: "evenodd",
    d: "M126.126 87.8654C147.739 56.7835 184.591 34.0001 239.665 34.0001C239.779 34.0001 239.891 34.0096 240 34.0279C240.109 34.0096 240.221 34.0001 240.335 34.0001C295.41 34.0001 332.261 56.7835 353.874 87.8654C375.428 118.862 381.724 157.957 376.086 190.544C373.539 205.262 371.039 233.823 376.056 253.971C380.828 273.135 387.879 290.154 393.431 303.54L393.491 303.685C396.23 310.287 398.627 316.064 400.16 320.726C400.933 323.077 401.511 325.214 401.797 327.079C402.073 328.879 402.11 330.618 401.637 332.107C399.79 339.478 396.615 344.943 392.398 348.881C388.174 352.825 383.031 355.122 377.446 356.355C366.388 358.799 353.231 357.133 341.237 355.551C340.93 355.51 340.623 355.47 340.317 355.43C334.586 354.672 329.126 353.951 324.151 353.668C318.894 353.368 314.374 353.574 310.799 354.649C307.298 355.702 304.789 357.558 303.304 360.596C301.785 363.704 301.203 368.322 302.207 375.153C309.297 399.432 323.779 413.44 341.432 422.745C356.457 430.665 373.692 435.144 390.741 439.575C393.916 440.401 397.085 441.224 400.232 442.068C401.298 442.354 401.931 443.451 401.645 444.518C401.359 445.585 400.262 446.218 399.196 445.932C396.115 445.106 392.991 444.294 389.842 443.477C372.804 439.052 355.041 434.44 339.567 426.283C321.093 416.546 305.757 401.713 298.328 376.139L298.29 376.01L298.271 375.877C297.181 368.587 297.678 362.998 299.71 358.839C301.787 354.59 305.326 352.119 309.647 350.819C313.895 349.541 318.973 349.366 324.378 349.674C329.508 349.966 335.107 350.706 340.788 351.457C341.112 351.5 341.436 351.543 341.76 351.585C353.925 353.19 366.342 354.713 376.583 352.45C381.65 351.33 386.088 349.3 389.668 345.957C393.241 342.621 396.083 337.86 397.773 331.072L397.791 330.998L397.815 330.925C398.022 330.302 398.087 329.272 397.843 327.686C397.605 326.133 397.102 324.232 396.36 321.976C394.875 317.458 392.525 311.794 389.74 305.081L389.737 305.073C384.19 291.701 377.028 274.428 372.174 254.937C366.952 233.964 369.571 204.733 372.144 189.862C377.623 158.197 371.48 120.191 350.59 90.149C329.759 60.1924 294.162 38.0001 240.335 38.0001C240.221 38.0001 240.109 37.9905 240 37.9722C239.891 37.9905 239.779 38.0001 239.665 38.0001C185.838 38.0001 150.241 60.1924 129.41 90.149C108.52 120.191 102.377 158.197 107.856 189.862C110.429 204.733 113.048 233.964 107.826 254.937C102.972 274.428 95.8101 291.701 90.2633 305.073L90.2607 305.079C87.4756 311.793 85.1256 317.458 83.6398 321.976C82.8977 324.232 82.3951 326.133 82.1567 327.686C81.9133 329.272 81.9778 330.302 82.1847 330.925L82.2088 330.998L82.2273 331.072C83.9176 337.86 86.7592 342.621 90.3324 345.957C93.9121 349.3 98.3505 351.33 103.417 352.45C113.658 354.713 126.075 353.19 138.24 351.585C138.564 351.543 138.888 351.5 139.212 351.457C144.893 350.706 150.492 349.966 155.622 349.674C161.027 349.366 166.105 349.541 170.353 350.819C174.674 352.119 178.213 354.59 180.29 358.839C182.323 362.998 182.819 368.587 181.73 375.877L181.71 376.01L181.672 376.139C174.243 401.713 158.907 416.546 140.433 426.283C124.959 434.44 107.196 439.052 90.1584 443.477C87.0093 444.294 83.8851 445.106 80.8046 445.932C79.7377 446.218 78.6409 445.585 78.3548 444.518C78.0687 443.451 78.7017 442.354 79.7685 442.068C82.9154 441.224 86.0842 440.401 89.2594 439.575C106.308 435.144 123.543 430.665 138.568 422.745C156.221 413.44 170.703 399.432 177.793 375.153C178.797 368.322 178.215 363.704 176.696 360.596C175.211 357.558 172.702 355.702 169.201 354.649C165.626 353.574 161.106 353.368 155.849 353.668C150.874 353.951 145.414 354.672 139.683 355.43C139.377 355.47 139.07 355.51 138.763 355.551C126.769 357.133 113.613 358.799 102.554 356.355C96.9695 355.122 91.8259 352.825 87.6024 348.881C83.3855 344.943 80.2095 339.478 78.3628 332.107C77.8896 330.618 77.9268 328.879 78.203 327.079C78.4892 325.214 79.0667 323.077 79.84 320.726C81.3732 316.064 83.7701 310.286 86.5089 303.684L86.5686 303.54C92.1215 290.154 99.1722 273.135 103.944 253.971C108.961 233.823 106.461 205.262 103.914 190.544C98.2759 157.957 104.572 118.862 126.126 87.8654Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })
}), ls = W.div`
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
`, us = ({
  children: e,
  isInCandidateSelection: t,
  placeholderRectangle: n
}) => f(ls, {
  $isInCandidateSelection: t,
  $placeholderRectangle: n,
  children: e
}), ds = {
  [H.CIRCLE_SOLID]: f(ts, {}),
  [H.ELLIPSE_SOLID]: f(ns, {}),
  [H.MAN_SOLID]: f(rs, {}),
  [H.WOMAN_SOLID]: f(cs, {}),
  [H.SQUARE_ROUNDED_DASH]: f(is, {}),
  [H.SQUARE_ROUNDED_SOLID]: f(as, {}),
  [H.SQUARE_DASH]: f(os, {}),
  [H.SQUARE_SOLID]: f(ss, {})
}, fs = ({
  backdropColor: e,
  backdropHeight: t,
  backdropWidth: n,
  icon: r,
  isBackdrop: o,
  placeholderRectangle: i,
  ...a
}) => f(U, {
  children: [o && f(jr, {
    backdropColor: e,
    height: t,
    width: n,
    children: f(es, {
      height: `${i.height * 100}%`,
      width: `${i.width * 100}%`,
      x: `${i.shiftX * 100}%`,
      y: `${i.shiftY * 100}%`
    })
  }), f(us, {
    placeholderRectangle: i,
    ...a,
    children: ds[r]
  })]
}), hs = () => {
  const [e, t] = V(), [n, r] = V(!1), o = we((c) => {
    var d, l;
    t((d = c == null ? void 0 : c.detail) == null ? void 0 : d.cameraResolution);
    const u = (l = c == null ? void 0 : c.detail) == null ? void 0 : l.isMirroring;
    u !== void 0 && r(u);
  }, [t]);
  Ue(he.CAMERA_PROPS_CHANGED, o);
  const [i, a] = V(
    L.FACE_NOT_PRESENT
    // FIXME Default instruction should not be here
  ), s = we((c) => {
    var u;
    a((u = c == null ? void 0 : c.detail) == null ? void 0 : u.instructionCode);
  }, [a]);
  return Ue(he.INSTRUCTION_CHANGED, s), {
    cameraResolution: e,
    instructionCode: i,
    isMirroring: n
  };
}, _s = () => {
  const [e, t] = V(Y.LOADING), [n, r] = V(), o = we((i) => {
    var s, c;
    t((s = i.detail) == null ? void 0 : s.appState);
    const a = (c = i == null ? void 0 : i.detail) == null ? void 0 : c.error;
    a && r(a);
  }, [t, r]);
  return Ue(he.STATE_CHANGED, o), {
    appState: e,
    error: n
  };
}, ps = W.canvas`
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
  const n = ht(null), r = Mr(), [o, i] = V(), a = we((s) => {
    var c;
    i((c = s == null ? void 0 : s.detail) == null ? void 0 : c.detectedObject);
  }, [i]);
  return Ue(he.DETECTED_FACE_CHANGED, a), _e(() => {
    if (!n.current)
      return;
    const s = (c, u) => {
      var m;
      if (!u)
        return;
      const {
        faceCenter: d,
        faceSize: l
      } = u, _ = (m = n == null ? void 0 : n.current) == null ? void 0 : m.getContext("2d");
      if (!_)
        return;
      const h = Pa(l, c);
      _.beginPath(), _.arc(d.x, d.y, h, 0, 2 * Math.PI, !1), _.lineWidth = la, _.strokeStyle = r.colors.placeholderColor, _.stroke();
    };
    n.current.width = e.width, n.current.height = e.height, ms(n.current), s(e, o);
  }, [e, o, r.colors.placeholderColor]), f(ps, {
    ref: n,
    $isImageMirror: t
  });
}, ys = ({
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
  } = _s(), {
    cameraResolution: u,
    instructionCode: d,
    isMirroring: l
  } = hs(), _ = d === L.CANDIDATE_SELECTION, {
    font: h
  } = Mr(), m = Br(a, h.minimumSize), S = r === H.CIRCLE_SOLID;
  if (s === Y.ERROR)
    return f(Wr, {
      fontSize: m,
      text: c == null ? void 0 : c.message
    });
  if (s === Y.RUNNING && u) {
    const E = Ra(u);
    return (r === H.WOMAN_SOLID || r === H.MAN_SOLID || r === H.ELLIPSE_SOLID) && console.warn("The placeholder icon you are currently using is deprecated. Please use one of our alternative placeholders instead. Read more here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-face/latest/documentation/#ui-component"), f(U, {
      children: [i && f(gs, {
        cameraResolution: u,
        isImageMirror: l
      }), f(fs, {
        backdropColor: t,
        backdropHeight: u.height,
        backdropWidth: u.width,
        icon: r,
        isBackdrop: S,
        isInCandidateSelection: _,
        placeholderRectangle: E
      }), d && f(Ja, {
        cssBottom: (E.height + E.shiftY) * 100,
        fontSize: m,
        isInCandidateSelection: _,
        isPortrait: u.width < u.height,
        children: n[d]
      }), o && f(Wa, {
        customControlEvent: he.CONTROL,
        isSwitchCameraDisabled: _,
        videoElementSize: a
      })]
    });
  }
  return f(ja, {
    appState: s,
    appStateInstructions: e,
    backdropColor: t,
    cameraHeight: u == null ? void 0 : u.height,
    cameraWidth: u == null ? void 0 : u.width,
    fontSize: m,
    isBackdrop: S
  });
}, vs = (e) => {
  var s, c;
  const t = {
    ...da,
    ...e == null ? void 0 : e.instructions
  }, n = {
    [Y.LOADING]: {
      ...qn.loading,
      ...(s = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : s.loading
    },
    [Y.WAITING]: {
      ...qn.waiting,
      ...(c = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : c.waiting
    }
  }, r = (e == null ? void 0 : e.placeholder) ?? fa, o = (e == null ? void 0 : e.backdropColor) ?? ha, i = (e == null ? void 0 : e.showDetectionLayer) ?? !1, a = (e == null ? void 0 : e.showCameraButtons) ?? !1;
  return {
    faceInstructions: t,
    faceAppStateInstructions: n,
    facePlaceholderIcon: r,
    backdropColor: o,
    showDetectionLayer: i,
    showCameraButtons: a
  };
}, Cs = ({
  props: e
}) => {
  const {
    backdropColor: t,
    faceAppStateInstructions: n,
    faceInstructions: r,
    facePlaceholderIcon: o,
    showCameraButtons: i,
    showDetectionLayer: a
  } = vs(e), s = ba(he.VIDEO_ELEMENT_SIZE), c = ka(e);
  return f(wa, {
    styleTarget: e == null ? void 0 : e.styleTarget,
    theme: c,
    videoElementSize: s,
    children: f(ys, {
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
ho(Cs, "x-dot-face-auto-capture-ui", ["props"]);
