var Zr = Object.defineProperty;
var Yr = (e, t, n) => t in e ? Zr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ue = (e, t, n) => (Yr(e, typeof t != "symbol" ? t + "" : t, n), n);
var Pe, g, Vn, oe, sn, Zn, Nt, Yn, ge = {}, qn = [], qr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ot = Array.isArray;
function X(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Xn(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function D(e, t, n) {
  var r, o, i, a = {};
  for (i in t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Pe.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      a[i] === void 0 && (a[i] = e.defaultProps[i]);
  return Te(e, a, r, o, null);
}
function Te(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o ?? ++Vn };
  return o == null && g.vnode != null && g.vnode(i), i;
}
function Xr() {
  return { current: null };
}
function z(e) {
  return e.children;
}
function U(e, t) {
  this.props = e, this.context = t;
}
function Ke(e, t) {
  if (t == null)
    return e.__ ? Ke(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Ke(e) : null;
}
function Qn(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Qn(e);
  }
}
function xt(e) {
  (!e.__d && (e.__d = !0) && oe.push(e) && !Je.__r++ || sn !== g.debounceRendering) && ((sn = g.debounceRendering) || Zn)(Je);
}
function Je() {
  var e, t, n, r, o, i, a, c, l;
  for (oe.sort(Nt); e = oe.shift(); )
    e.__d && (t = oe.length, r = void 0, o = void 0, i = void 0, c = (a = (n = e).__v).__e, (l = n.__P) && (r = [], o = [], (i = X({}, a)).__v = a.__v + 1, Gt(l, a, i, n.__n, l.ownerSVGElement !== void 0, a.__h != null ? [c] : null, r, c ?? Ke(a), a.__h, o), tr(r, a, o), a.__e != c && Qn(a)), oe.length > t && oe.sort(Nt));
  Je.__r = 0;
}
function Kn(e, t, n, r, o, i, a, c, l, f, h) {
  var s, _, p, d, m, O, C, w, b, E, $ = 0, y = r && r.__k || qn, v = y.length, L = v, I = t.length;
  for (n.__k = [], s = 0; s < I; s++)
    (d = n.__k[s] = (d = t[s]) == null || typeof d == "boolean" || typeof d == "function" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" ? Te(null, d, null, null, d) : ot(d) ? Te(z, { children: d }, null, null, null) : d.__b > 0 ? Te(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d) != null && (d.__ = n, d.__b = n.__b + 1, (w = Qr(d, y, C = s + $, L)) === -1 ? p = ge : (p = y[w] || ge, y[w] = void 0, L--), Gt(e, d, p, o, i, a, c, l, f, h), m = d.__e, (_ = d.ref) && p.ref != _ && (p.ref && Vt(p.ref, null, d), h.push(_, d.__c || m, d)), m != null && (O == null && (O = m), E = !(b = p === ge || p.__v === null) && w === C, b ? w == -1 && $-- : w !== C && (w === C + 1 ? ($++, E = !0) : w > C ? L > I - C ? ($ += w - C, E = !0) : $-- : $ = w < C && w == C - 1 ? w - C : 0), C = s + $, E = E || w == s && !b, typeof d.type != "function" || w === C && p.__k !== d.__k ? typeof d.type == "function" || E ? d.__d !== void 0 ? (l = d.__d, d.__d = void 0) : l = m.nextSibling : l = er(e, m, l) : l = Jn(d, l, e), typeof n.type == "function" && (n.__d = l)));
  for (n.__e = O, s = v; s--; )
    y[s] != null && (typeof n.type == "function" && y[s].__e != null && y[s].__e == n.__d && (n.__d = y[s].__e.nextSibling), nr(y[s], y[s]));
}
function Jn(e, t, n) {
  for (var r, o = e.__k, i = 0; o && i < o.length; i++)
    (r = o[i]) && (r.__ = e, t = typeof r.type == "function" ? Jn(r, t, n) : er(n, r.__e, t));
  return t;
}
function Q(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (ot(e) ? e.some(function(n) {
    Q(n, t);
  }) : t.push(e)), t;
}
function er(e, t, n) {
  return n == null || n.parentNode !== e ? e.insertBefore(t, null) : t == n && t.parentNode != null || e.insertBefore(t, n), t.nextSibling;
}
function Qr(e, t, n, r) {
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
function Kr(e, t, n, r, o) {
  var i;
  for (i in n)
    i === "children" || i === "key" || i in t || et(e, i, null, n[i], r);
  for (i in t)
    o && typeof t[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || n[i] === t[i] || et(e, i, t[i], n[i], r);
}
function cn(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || qr.test(t) ? n : n + "px";
}
function et(e, t, n, r, o) {
  var i;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || cn(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || cn(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r || e.addEventListener(t, i ? un : ln, i) : e.removeEventListener(t, i ? un : ln, i);
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
function ln(e) {
  return this.l[e.type + !1](g.event ? g.event(e) : e);
}
function un(e) {
  return this.l[e.type + !0](g.event ? g.event(e) : e);
}
function Gt(e, t, n, r, o, i, a, c, l, f) {
  var h, s, _, p, d, m, O, C, w, b, E, $, y, v, L, I = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, c = t.__e = n.__e, t.__h = null, i = [c]), (h = g.__b) && h(t);
  try {
    e:
      if (typeof I == "function") {
        if (C = t.props, w = (h = I.contextType) && r[h.__c], b = h ? w ? w.props.value : h.__ : r, n.__c ? O = (s = t.__c = n.__c).__ = s.__E : ("prototype" in I && I.prototype.render ? t.__c = s = new I(C, b) : (t.__c = s = new U(C, b), s.constructor = I, s.render = eo), w && w.sub(s), s.props = C, s.state || (s.state = {}), s.context = b, s.__n = r, _ = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), I.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = X({}, s.__s)), X(s.__s, I.getDerivedStateFromProps(C, s.__s))), p = s.props, d = s.state, s.__v = t, _)
          I.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (I.getDerivedStateFromProps == null && C !== p && s.componentWillReceiveProps != null && s.componentWillReceiveProps(C, b), !s.__e && (s.shouldComponentUpdate != null && s.shouldComponentUpdate(C, s.__s, b) === !1 || t.__v === n.__v)) {
            for (t.__v !== n.__v && (s.props = C, s.state = s.__s, s.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(_e) {
              _e && (_e.__ = t);
            }), E = 0; E < s._sb.length; E++)
              s.__h.push(s._sb[E]);
            s._sb = [], s.__h.length && a.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(C, s.__s, b), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(p, d, m);
          });
        }
        if (s.context = b, s.props = C, s.__P = e, s.__e = !1, $ = g.__r, y = 0, "prototype" in I && I.prototype.render) {
          for (s.state = s.__s, s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), v = 0; v < s._sb.length; v++)
            s.__h.push(s._sb[v]);
          s._sb = [];
        } else
          do
            s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++y < 25);
        s.state = s.__s, s.getChildContext != null && (r = X(X({}, r), s.getChildContext())), _ || s.getSnapshotBeforeUpdate == null || (m = s.getSnapshotBeforeUpdate(p, d)), Kn(e, ot(L = h != null && h.type === z && h.key == null ? h.props.children : h) ? L : [L], t, n, r, o, i, a, c, l, f), s.base = t.__e, t.__h = null, s.__h.length && a.push(s), O && (s.__E = s.__ = null);
      } else
        i == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Jr(n.__e, t, n, r, o, i, a, l, f);
    (h = g.diffed) && h(t);
  } catch (_e) {
    t.__v = null, (l || i != null) && (t.__e = c, t.__h = !!l, i[i.indexOf(c)] = null), g.__e(_e, t, n);
  }
}
function tr(e, t, n) {
  for (var r = 0; r < n.length; r++)
    Vt(n[r], n[++r], n[++r]);
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
function Jr(e, t, n, r, o, i, a, c, l) {
  var f, h, s, _ = n.props, p = t.props, d = t.type, m = 0;
  if (d === "svg" && (o = !0), i != null) {
    for (; m < i.length; m++)
      if ((f = i[m]) && "setAttribute" in f == !!d && (d ? f.localName === d : f.nodeType === 3)) {
        e = f, i[m] = null;
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
    if (i = i && Pe.call(e.childNodes), h = (_ = n.props || ge).dangerouslySetInnerHTML, s = p.dangerouslySetInnerHTML, !c) {
      if (i != null)
        for (_ = {}, m = 0; m < e.attributes.length; m++)
          _[e.attributes[m].name] = e.attributes[m].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Kr(e, p, _, o, c), s)
      t.__k = [];
    else if (Kn(e, ot(m = t.props.children) ? m : [m], t, n, r, o && d !== "foreignObject", i, a, i ? i[0] : n.__k && Ke(n, 0), c, l), i != null)
      for (m = i.length; m--; )
        i[m] != null && Xn(i[m]);
    c || ("value" in p && (m = p.value) !== void 0 && (m !== e.value || d === "progress" && !m || d === "option" && m !== _.value) && et(e, "value", m, _.value, !1), "checked" in p && (m = p.checked) !== void 0 && m !== e.checked && et(e, "checked", m, _.checked, !1));
  }
  return e;
}
function Vt(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    g.__e(r, n);
  }
}
function nr(e, t, n) {
  var r, o;
  if (g.unmount && g.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Vt(r, null, t)), (r = e.__c) != null) {
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
      r[o] && nr(r[o], t, n || typeof e.type != "function");
  n || e.__e == null || Xn(e.__e), e.__ = e.__e = e.__d = void 0;
}
function eo(e, t, n) {
  return this.constructor(e, n);
}
function te(e, t, n) {
  var r, o, i, a;
  g.__ && g.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], a = [], Gt(t, e = (!r && n || t).__k = D(z, null, [e]), o || ge, ge, t.ownerSVGElement !== void 0, !r && n ? [n] : o ? null : t.firstChild ? Pe.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, a), tr(i, e, a);
}
function Zt(e, t) {
  te(e, t, Zt);
}
function Yt(e, t, n) {
  var r, o, i, a, c = X({}, e.props);
  for (i in e.type && e.type.defaultProps && (a = e.type.defaultProps), t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : c[i] = t[i] === void 0 && a !== void 0 ? a[i] : t[i];
  return arguments.length > 2 && (c.children = arguments.length > 3 ? Pe.call(arguments, 2) : n), Te(e.type, c, r || e.key, o || e.ref, null);
}
function to(e, t) {
  var n = { __c: t = "__cC" + Yn++, __: e, Consumer: function(r, o) {
    return r.children(o);
  }, Provider: function(r) {
    var o, i;
    return this.getChildContext || (o = [], (i = {})[t] = this, this.getChildContext = function() {
      return i;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && o.some(function(c) {
        c.__e = !0, xt(c);
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
Pe = qn.slice, g = { __e: function(e, t, n, r) {
  for (var o, i, a; t = t.__; )
    if ((o = t.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), a = o.__d), a)
          return o.__E = o;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Vn = 0, U.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = X({}, this.state), typeof e == "function" && (e = e(X({}, n), this.props)), e && X(n, e), e != null && this.__v && (t && this._sb.push(t), xt(this));
}, U.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), xt(this));
}, U.prototype.render = z, oe = [], Zn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Nt = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Je.__r = 0, Yn = 0;
function qt() {
  return (qt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function no(e) {
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
  return Yt(t, n);
}
function ro() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = D(no, qt({}, this._props, { context: e.detail.context }), function t(n, r) {
    if (n.nodeType === 3)
      return n.data;
    if (n.nodeType !== 1)
      return null;
    var o = [], i = {}, a = 0, c = n.attributes, l = n.childNodes;
    for (a = c.length; a--; )
      c[a].name !== "slot" && (i[c[a].name] = c[a].value, i[rr(c[a].name)] = c[a].value);
    for (a = l.length; a--; ) {
      var f = t(l[a], null), h = l[a].slot;
      h ? i[h] = D(dn, { name: h }, f) : o[a] = f;
    }
    var s = r ? D(dn, null, o) : o;
    return D(r || n.nodeName.toLowerCase(), i, s);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Zt : te)(this._vdom, this._root);
}
function rr(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function oo(e, t, n) {
  if (this._vdom) {
    var r = {};
    r[e] = n = n ?? void 0, r[rr(e)] = n, this._vdom = Yt(this._vdom, r), te(this._vdom, this._root);
  }
}
function io() {
  te(this._vdom = null, this._root);
}
function dn(e, t) {
  var n = this;
  return D("slot", qt({}, e, { ref: function(r) {
    r ? (n.ref = r, n._listener || (n._listener = function(o) {
      o.stopPropagation(), o.detail.context = t;
    }, r.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function ao(e, t, n, r) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = e, i._root = r && r.shadow ? i.attachShadow({ mode: "open" }) : i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = ro, o.prototype.attributeChangedCallback = oo, o.prototype.disconnectedCallback = io, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = n, n.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom.props[i];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(i, null, a) : (this._props || (this._props = {}), this._props[i] = a, this.connectedCallback());
      var c = typeof a;
      a != null && c !== "string" && c !== "boolean" && c !== "number" || this.setAttribute(i, a);
    } });
  }), customElements.define(t || e.tagName || e.displayName || e.name, o);
}
var It = /* @__PURE__ */ ((e) => (e.CONTINUE_DETECTION = "continue-detection", e.SWITCH_CAMERA = "switch-camera", e.TOGGLE_MIRROR = "toggle-mirror", e))(It || {}), le = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", e.CONTROL = "face-auto-capture:control", e.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", e.FACE_DETECTION = "face-auto-capture:face-detection", e.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", e.STATE_CHANGED = "face-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", e))(le || {});
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
}, G = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  WAITING: "WAITING",
  RUNNING: "RUNNING"
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
function ue(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function so(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var co = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, lo = /* @__PURE__ */ so(
  function(e) {
    return co.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ne, x, yt, fn, ye = 0, or = [], Ge = [], hn = g.__b, _n = g.__r, pn = g.diffed, mn = g.__c, gn = g.unmount;
function $e(e, t) {
  g.__h && g.__h(x, e, ye || t), ye = 0;
  var n = x.__H || (x.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({ __V: Ge }), n.__[e];
}
function V(e) {
  return ye = 1, ir(ar, e);
}
function ir(e, t, n) {
  var r = $e(ne++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : ar(void 0, t), function(c) {
    var l = r.__N ? r.__N[0] : r.__[0], f = r.t(l, c);
    l !== f && (r.__N = [f, r.__[1]], r.__c.setState({}));
  }], r.__c = x, !x.u)) {
    var o = function(c, l, f) {
      if (!r.__c.__H)
        return !0;
      var h = r.__c.__H.__.filter(function(_) {
        return _.__c;
      });
      if (h.every(function(_) {
        return !_.__N;
      }))
        return !i || i.call(this, c, l, f);
      var s = !1;
      return h.forEach(function(_) {
        if (_.__N) {
          var p = _.__[0];
          _.__ = _.__N, _.__N = void 0, p !== _.__[0] && (s = !0);
        }
      }), !(!s && r.__c.props === c) && (!i || i.call(this, c, l, f));
    };
    x.u = !0;
    var i = x.shouldComponentUpdate, a = x.componentWillUpdate;
    x.componentWillUpdate = function(c, l, f) {
      if (this.__e) {
        var h = i;
        i = void 0, o(c, l, f), i = h;
      }
      a && a.call(this, c, l, f);
    }, x.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function ve(e, t) {
  var n = $e(ne++, 3);
  !g.__s && Qt(n.__H, t) && (n.__ = e, n.i = t, x.__H.__h.push(n));
}
function it(e, t) {
  var n = $e(ne++, 4);
  !g.__s && Qt(n.__H, t) && (n.__ = e, n.i = t, x.__h.push(n));
}
function at(e) {
  return ye = 5, st(function() {
    return { current: e };
  }, []);
}
function uo(e, t, n) {
  ye = 6, it(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(e));
}
function st(e, t) {
  var n = $e(ne++, 7);
  return Qt(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__;
}
function Ce(e, t) {
  return ye = 8, st(function() {
    return e;
  }, t);
}
function Xt(e) {
  var t = x.context[e.__c], n = $e(ne++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(x)), t.props.value) : e.__;
}
function Ot(e, t) {
  g.useDebugValue && g.useDebugValue(t ? t(e) : e);
}
function fo() {
  var e = $e(ne++, 11);
  if (!e.__) {
    for (var t = x.__v; t !== null && !t.__m && t.__ !== null; )
      t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function ho() {
  for (var e; e = or.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(Ve), e.__H.__h.forEach(At), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], g.__e(t, e.__v);
      }
}
g.__b = function(e) {
  x = null, hn && hn(e);
}, g.__r = function(e) {
  _n && _n(e), ne = 0;
  var t = (x = e.__c).__H;
  t && (yt === x ? (t.__h = [], x.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = Ge, n.__N = n.i = void 0;
  })) : (t.__h.forEach(Ve), t.__h.forEach(At), t.__h = [], ne = 0)), yt = x;
}, g.diffed = function(e) {
  pn && pn(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (or.push(t) !== 1 && fn === g.requestAnimationFrame || ((fn = g.requestAnimationFrame) || _o)(ho)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== Ge && (n.__ = n.__V), n.i = void 0, n.__V = Ge;
  })), yt = x = null;
}, g.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(Ve), n.__h = n.__h.filter(function(r) {
        return !r.__ || At(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], g.__e(r, n.__v);
    }
  }), mn && mn(e, t);
}, g.unmount = function(e) {
  gn && gn(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      Ve(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && g.__e(t, n.__v));
};
var yn = typeof requestAnimationFrame == "function";
function _o(e) {
  var t, n = function() {
    clearTimeout(r), yn && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  yn && (t = requestAnimationFrame(n));
}
function Ve(e) {
  var t = x, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), x = t;
}
function At(e) {
  var t = x;
  e.__c = e.__(), x = t;
}
function Qt(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function ar(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function sr(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Tt(e, t) {
  for (var n in e)
    if (n !== "__source" && !(n in t))
      return !0;
  for (var r in t)
    if (r !== "__source" && e[r] !== t[r])
      return !0;
  return !1;
}
function vt(e, t) {
  return e === t && (e !== 0 || 1 / e == 1 / t) || e != e && t != t;
}
function Rt(e) {
  this.props = e;
}
function po(e, t) {
  function n(o) {
    var i = this.props.ref, a = i == o.ref;
    return !a && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !a : Tt(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, D(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(Rt.prototype = new U()).isPureReactComponent = !0, Rt.prototype.shouldComponentUpdate = function(e, t) {
  return Tt(this.props, e) || Tt(this.state, t);
};
var vn = g.__b;
g.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), vn && vn(e);
};
var mo = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function go(e) {
  function t(n) {
    var r = sr({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = mo, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Cn = function(e, t) {
  return e == null ? null : Q(Q(e).map(t));
}, yo = { map: Cn, forEach: Cn, count: function(e) {
  return e ? Q(e).length : 0;
}, only: function(e) {
  var t = Q(e);
  if (t.length !== 1)
    throw "Children.only";
  return t[0];
}, toArray: Q }, vo = g.__e;
g.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; )
      if ((o = i.__c) && o.__c)
        return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  vo(e, t, n, r);
};
var wn = g.unmount;
function cr(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = sr({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return cr(r, t, n);
  })), e;
}
function lr(e, t, n) {
  return e && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return lr(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = n)), e;
}
function Ze() {
  this.__u = 0, this.t = null, this.__b = null;
}
function ur(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Co(e) {
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
function Ie() {
  this.u = null, this.o = null;
}
g.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), wn && wn(e);
}, (Ze.prototype = new U()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var o = ur(r.__v), i = !1, a = function() {
    i || (i = !0, n.__R = null, o ? o(c) : c());
  };
  n.__R = a;
  var c = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var f = r.state.__a;
        r.__v.__k[0] = lr(f, f.__c.__P, f.__c.__O);
      }
      var h;
      for (r.setState({ __a: r.__b = null }); h = r.t.pop(); )
        h.forceUpdate();
    }
  }, l = t.__h === !0;
  r.__u++ || l || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(a, a);
}, Ze.prototype.componentWillUnmount = function() {
  this.t = [];
}, Ze.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = cr(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && D(z, null, e.fallback);
  return o && (o.__h = null), [D(z, null, t.__a ? null : e.children), o];
};
var Sn = function(e, t, n) {
  if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (n = e.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      e.u = n = n[2];
    }
};
function wo(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function So(e) {
  var t = this, n = e.i;
  t.componentWillUnmount = function() {
    te(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r);
  } }), te(D(wo, { context: t.context }, e.__v), t.l)) : t.l && t.componentWillUnmount();
}
function bo(e, t) {
  var n = D(So, { __v: e, i: t });
  return n.containerInfo = t, n;
}
(Ie.prototype = new U()).__a = function(e) {
  var t = this, n = ur(t.__v), r = t.o.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), Sn(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, Ie.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = Q(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; )
    this.o.set(t[n], this.u = [1, 0, this.u]);
  return e.children;
}, Ie.prototype.componentDidUpdate = Ie.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, n) {
    Sn(e, n, t);
  });
};
var dr = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Eo = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, $o = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, ko = /[A-Z0-9]/g, No = typeof document < "u", xo = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function Io(e, t, n) {
  return t.__k == null && (t.textContent = ""), te(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function Oo(e, t, n) {
  return Zt(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
U.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(U.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var bn = g.event;
function Ao() {
}
function To() {
  return this.cancelBubble;
}
function Ro() {
  return this.defaultPrevented;
}
g.event = function(e) {
  return bn && (e = bn(e)), e.persist = Ao, e.isPropagationStopped = To, e.isDefaultPrevented = Ro, e.nativeEvent = e;
};
var Kt, Lo = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, En = g.vnode;
g.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {};
    for (var i in n) {
      var a = n[i];
      if (!(i === "value" && "defaultValue" in n && a == null || No && i === "children" && r === "noscript" || i === "class" || i === "className")) {
        var c = i.toLowerCase();
        i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && a === !0 ? a = "" : c === "ondoubleclick" ? i = "ondblclick" : c !== "onchange" || r !== "input" && r !== "textarea" || xo(n.type) ? c === "onfocus" ? i = "onfocusin" : c === "onblur" ? i = "onfocusout" : $o.test(i) ? i = c : r.indexOf("-") === -1 && Eo.test(i) ? i = i.replace(ko, "-$&").toLowerCase() : a === null && (a = void 0) : c = i = "oninput", c === "oninput" && o[i = c] && (i = "oninputCapture"), o[i] = a;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = Q(n.children).forEach(function(l) {
      l.props.selected = o.value.indexOf(l.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = Q(n.children).forEach(function(l) {
      l.props.selected = o.multiple ? o.defaultValue.indexOf(l.props.value) != -1 : o.defaultValue == l.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", Lo)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = dr, En && En(e);
};
var $n = g.__r;
g.__r = function(e) {
  $n && $n(e), Kt = e.__c;
};
var kn = g.diffed;
g.diffed = function(e) {
  kn && kn(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), Kt = null;
};
var Do = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return Kt.__n[e.__c].props.value;
} } } };
function Po(e) {
  return D.bind(null, e);
}
function fr(e) {
  return !!e && e.$$typeof === dr;
}
function Mo(e) {
  return fr(e) ? Yt.apply(null, arguments) : e;
}
function Ho(e) {
  return !!e.__k && (te(null, e), !0);
}
function Fo(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var Bo = function(e, t) {
  return e(t);
}, Uo = function(e, t) {
  return e(t);
}, Wo = z;
function hr(e) {
  e();
}
function zo(e) {
  return e;
}
function jo() {
  return [!1, hr];
}
var Go = it;
function Vo(e, t) {
  var n = t(), r = V({ h: { __: n, v: t } }), o = r[0].h, i = r[1];
  return it(function() {
    o.__ = n, o.v = t, vt(o.__, t()) || i({ h: o });
  }, [e, n, t]), ve(function() {
    return vt(o.__, o.v()) || i({ h: o }), e(function() {
      vt(o.__, o.v()) || i({ h: o });
    });
  }, [e]), n;
}
var de = { useState: V, useId: fo, useReducer: ir, useEffect: ve, useLayoutEffect: it, useInsertionEffect: Go, useTransition: jo, useDeferredValue: zo, useSyncExternalStore: Vo, startTransition: hr, useRef: at, useImperativeHandle: uo, useMemo: st, useCallback: Ce, useContext: Xt, useDebugValue: Ot, version: "17.0.2", Children: yo, render: Io, hydrate: Oo, unmountComponentAtNode: Ho, createPortal: bo, createElement: D, createContext: to, createFactory: Po, cloneElement: Mo, createRef: Xr, Fragment: z, isValidElement: fr, findDOMNode: Fo, Component: U, PureComponent: Rt, memo: po, forwardRef: go, flushSync: Uo, unstable_batchedUpdates: Bo, StrictMode: Wo, Suspense: Ze, SuspenseList: Ie, lazy: Co, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Do }, N = "-ms-", Re = "-moz-", k = "-webkit-", _r = "comm", ct = "rule", Jt = "decl", Zo = "@import", pr = "@keyframes", Yo = "@layer", qo = Math.abs, en = String.fromCharCode, Lt = Object.assign;
function Xo(e, t) {
  return T(e, 0) ^ 45 ? (((t << 2 ^ T(e, 0)) << 2 ^ T(e, 1)) << 2 ^ T(e, 2)) << 2 ^ T(e, 3) : 0;
}
function mr(e) {
  return e.trim();
}
function Y(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function S(e, t, n) {
  return e.replace(t, n);
}
function Ye(e, t) {
  return e.indexOf(t);
}
function T(e, t) {
  return e.charCodeAt(t) | 0;
}
function we(e, t, n) {
  return e.slice(t, n);
}
function j(e) {
  return e.length;
}
function gr(e) {
  return e.length;
}
function Oe(e, t) {
  return t.push(e), e;
}
function Qo(e, t) {
  return e.map(t).join("");
}
function Nn(e, t) {
  return e.filter(function(n) {
    return !Y(n, t);
  });
}
var lt = 1, Se = 1, yr = 0, H = 0, A = 0, ke = "";
function ut(e, t, n, r, o, i, a, c) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: lt, column: Se, length: a, return: "", siblings: c };
}
function ee(e, t) {
  return Lt(ut("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function me(e) {
  for (; e.root; )
    e = ee(e.root, { children: [e] });
  Oe(e, e.siblings);
}
function Ko() {
  return A;
}
function Jo() {
  return A = H > 0 ? T(ke, --H) : 0, Se--, A === 10 && (Se = 1, lt--), A;
}
function W() {
  return A = H < yr ? T(ke, H++) : 0, Se++, A === 10 && (Se = 1, lt++), A;
}
function se() {
  return T(ke, H);
}
function qe() {
  return H;
}
function dt(e, t) {
  return we(ke, e, t);
}
function Dt(e) {
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
function ei(e) {
  return lt = Se = 1, yr = j(ke = e), H = 0, [];
}
function ti(e) {
  return ke = "", e;
}
function Ct(e) {
  return mr(dt(H - 1, Pt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ni(e) {
  for (; (A = se()) && A < 33; )
    W();
  return Dt(e) > 2 || Dt(A) > 3 ? "" : " ";
}
function ri(e, t) {
  for (; --t && W() && !(A < 48 || A > 102 || A > 57 && A < 65 || A > 70 && A < 97); )
    ;
  return dt(e, qe() + (t < 6 && se() == 32 && W() == 32));
}
function Pt(e) {
  for (; W(); )
    switch (A) {
      case e:
        return H;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Pt(A);
        break;
      case 40:
        e === 41 && Pt(e);
        break;
      case 92:
        W();
        break;
    }
  return H;
}
function oi(e, t) {
  for (; W() && e + A !== 47 + 10; )
    if (e + A === 42 + 42 && se() === 47)
      break;
  return "/*" + dt(t, H - 1) + "*" + en(e === 47 ? e : W());
}
function ii(e) {
  for (; !Dt(se()); )
    W();
  return dt(e, H);
}
function ai(e) {
  return ti(Xe("", null, null, null, [""], e = ei(e), 0, [0], e));
}
function Xe(e, t, n, r, o, i, a, c, l) {
  for (var f = 0, h = 0, s = a, _ = 0, p = 0, d = 0, m = 1, O = 1, C = 1, w = 0, b = "", E = o, $ = i, y = r, v = b; O; )
    switch (d = w, w = W()) {
      case 40:
        if (d != 108 && T(v, s - 1) == 58) {
          Ye(v += S(Ct(w), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        v += Ct(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        v += ni(d);
        break;
      case 92:
        v += ri(qe() - 1, 7);
        continue;
      case 47:
        switch (se()) {
          case 42:
          case 47:
            Oe(si(oi(W(), qe()), t, n, l), l);
            break;
          default:
            v += "/";
        }
        break;
      case 123 * m:
        c[f++] = j(v) * C;
      case 125 * m:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            O = 0;
          case 59 + h:
            C == -1 && (v = S(v, /\f/g, "")), p > 0 && j(v) - s && Oe(p > 32 ? In(v + ";", r, n, s - 1, l) : In(S(v, " ", "") + ";", r, n, s - 2, l), l);
            break;
          case 59:
            v += ";";
          default:
            if (Oe(y = xn(v, t, n, f, h, o, c, b, E = [], $ = [], s, i), i), w === 123)
              if (h === 0)
                Xe(v, t, y, y, E, i, s, c, $);
              else
                switch (_ === 99 && T(v, 3) === 110 ? 100 : _) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Xe(e, y, y, r && Oe(xn(e, y, y, 0, 0, o, c, b, o, E = [], s, $), $), o, $, s, c, r ? E : $);
                    break;
                  default:
                    Xe(v, y, y, y, [""], $, 0, c, $);
                }
        }
        f = h = p = 0, m = C = 1, b = v = "", s = a;
        break;
      case 58:
        s = 1 + j(v), p = d;
      default:
        if (m < 1) {
          if (w == 123)
            --m;
          else if (w == 125 && m++ == 0 && Jo() == 125)
            continue;
        }
        switch (v += en(w), w * m) {
          case 38:
            C = h > 0 ? 1 : (v += "\f", -1);
            break;
          case 44:
            c[f++] = (j(v) - 1) * C, C = 1;
            break;
          case 64:
            se() === 45 && (v += Ct(W())), _ = se(), h = s = j(b = v += ii(qe())), w++;
            break;
          case 45:
            d === 45 && j(v) == 2 && (m = 0);
        }
    }
  return i;
}
function xn(e, t, n, r, o, i, a, c, l, f, h, s) {
  for (var _ = o - 1, p = o === 0 ? i : [""], d = gr(p), m = 0, O = 0, C = 0; m < r; ++m)
    for (var w = 0, b = we(e, _ + 1, _ = qo(O = a[m])), E = e; w < d; ++w)
      (E = mr(O > 0 ? p[w] + " " + b : S(b, /&\f/g, p[w]))) && (l[C++] = E);
  return ut(e, t, n, o === 0 ? ct : c, l, f, h, s);
}
function si(e, t, n, r) {
  return ut(e, t, n, _r, en(Ko()), we(e, 2, -2), 0, r);
}
function In(e, t, n, r, o) {
  return ut(e, t, n, Jt, we(e, 0, r), we(e, r + 1, -1), r, o);
}
function vr(e, t, n) {
  switch (Xo(e, t)) {
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
      return Re + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return k + e + Re + e + N + e + e;
    case 5936:
      switch (T(e, t + 11)) {
        case 114:
          return k + e + N + S(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return k + e + N + S(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return k + e + N + S(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return k + e + N + e + e;
    case 6165:
      return k + e + N + "flex-" + e + e;
    case 5187:
      return k + e + S(e, /(\w+).+(:[^]+)/, k + "box-$1$2" + N + "flex-$1$2") + e;
    case 5443:
      return k + e + N + "flex-item-" + S(e, /flex-|-self/g, "") + (Y(e, /flex-|baseline/) ? "" : N + "grid-row-" + S(e, /flex-|-self/g, "")) + e;
    case 4675:
      return k + e + N + "flex-line-pack" + S(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return k + e + N + S(e, "shrink", "negative") + e;
    case 5292:
      return k + e + N + S(e, "basis", "preferred-size") + e;
    case 6060:
      return k + "box-" + S(e, "-grow", "") + k + e + N + S(e, "grow", "positive") + e;
    case 4554:
      return k + S(e, /([^-])(transform)/g, "$1" + k + "$2") + e;
    case 6187:
      return S(S(S(e, /(zoom-|grab)/, k + "$1"), /(image-set)/, k + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return S(e, /(image-set\([^]*)/, k + "$1$`$1");
    case 4968:
      return S(S(e, /(.+:)(flex-)?(.*)/, k + "box-pack:$3" + N + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + k + e + e;
    case 4200:
      if (!Y(e, /flex-|baseline/))
        return N + "grid-column-align" + we(e, t) + e;
      break;
    case 2592:
    case 3360:
      return N + S(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, Y(r.props, /grid-\w+-end/);
      }) ? ~Ye(e + (n = n[t].value), "span") ? e : N + S(e, "-start", "") + e + N + "grid-row-span:" + (~Ye(n, "span") ? Y(n, /\d+/) : +Y(n, /\d+/) - +Y(e, /\d+/)) + ";" : N + S(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return Y(r.props, /grid-\w+-start/);
      }) ? e : N + S(S(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return S(e, /(.+)-inline(.+)/, k + "$1$2") + e;
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
        switch (T(e, t + 1)) {
          case 109:
            if (T(e, t + 4) !== 45)
              break;
          case 102:
            return S(e, /(.+:)(.+)-([^]+)/, "$1" + k + "$2-$3$1" + Re + (T(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Ye(e, "stretch") ? vr(S(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return S(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, a, c, l, f) {
        return N + o + ":" + i + f + (a ? N + o + "-span:" + (c ? l : +l - +i) + f : "") + e;
      });
    case 4949:
      if (T(e, t + 6) === 121)
        return S(e, ":", ":" + k) + e;
      break;
    case 6444:
      switch (T(e, T(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return S(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + k + (T(e, 14) === 45 ? "inline-" : "") + "box$3$1" + k + "$2$3$1" + N + "$2box$3") + e;
        case 100:
          return S(e, ":", ":" + N) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return S(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function tt(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function ci(e, t, n, r) {
  switch (e.type) {
    case Yo:
      if (e.children.length)
        break;
    case Zo:
    case Jt:
      return e.return = e.return || e.value;
    case _r:
      return "";
    case pr:
      return e.return = e.value + "{" + tt(e.children, r) + "}";
    case ct:
      if (!j(e.value = e.props.join(",")))
        return "";
  }
  return j(n = tt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function li(e) {
  var t = gr(e);
  return function(n, r, o, i) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](n, r, o, i) || "";
    return a;
  };
}
function ui(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function di(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Jt:
        e.return = vr(e.value, e.length, n);
        return;
      case pr:
        return tt([ee(e, { value: S(e.value, "@", "@" + k) })], r);
      case ct:
        if (e.length)
          return Qo(n = e.props, function(o) {
            switch (Y(o, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                me(ee(e, { props: [S(o, /:(read-\w+)/, ":" + Re + "$1")] })), me(ee(e, { props: [o] })), Lt(e, { props: Nn(n, r) });
                break;
              case "::placeholder":
                me(ee(e, { props: [S(o, /:(plac\w+)/, ":" + k + "input-$1")] })), me(ee(e, { props: [S(o, /:(plac\w+)/, ":" + Re + "$1")] })), me(ee(e, { props: [S(o, /:(plac\w+)/, N + "input-$1")] })), me(ee(e, { props: [o] })), Lt(e, { props: Nn(n, r) });
                break;
            }
            return "";
          });
    }
}
var fi = {
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
}, fe = typeof process < "u" && {} !== void 0 && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR) || "data-styled", tn = typeof window < "u" && "HTMLElement" in window, hi = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && {} !== void 0 && {}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && {}.REACT_APP_SC_DISABLE_SPEEDY !== "" ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" && {}.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && {} !== void 0 && {}.SC_DISABLE_SPEEDY !== void 0 && {}.SC_DISABLE_SPEEDY !== "" ? {}.SC_DISABLE_SPEEDY !== "false" && {}.SC_DISABLE_SPEEDY : {}.NODE_ENV !== "production"), On = /invalid hook call/i, We = /* @__PURE__ */ new Set(), _i = function(e, t) {
  if ({}.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(a) {
        for (var c = [], l = 1; l < arguments.length; l++)
          c[l - 1] = arguments[l];
        On.test(a) ? (i = !1, We.delete(r)) : o.apply(void 0, ue([a], c, !1));
      }, at(), i && !We.has(r) && (console.warn(r), We.add(r));
    } catch (a) {
      On.test(a.message) && We.delete(r);
    } finally {
      console.error = o;
    }
  }
}, ft = Object.freeze([]), be = Object.freeze({});
function pi(e, t, n) {
  return n === void 0 && (n = be), e.theme !== n.theme && e.theme || t || n.theme;
}
var Cr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), mi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, gi = /(^-|-$)/g;
function An(e) {
  return e.replace(mi, "-").replace(gi, "");
}
var yi = /(a)(d)/gi, Tn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Mt(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    n = Tn(t % 52) + n;
  return (Tn(t % 52) + n).replace(yi, "$1-$2");
}
var wt, ie = function(e, t) {
  for (var n = t.length; n; )
    e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, wr = function(e) {
  return ie(5381, e);
};
function Sr(e) {
  return Mt(wr(e) >>> 0);
}
function br(e) {
  return {}.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function St(e) {
  return typeof e == "string" && ({}.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Er = typeof Symbol == "function" && Symbol.for, $r = Er ? Symbol.for("react.memo") : 60115, vi = Er ? Symbol.for("react.forward_ref") : 60112, Ci = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, wi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, kr = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Si = ((wt = {})[vi] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, wt[$r] = kr, wt);
function Rn(e) {
  return ("type" in (t = e) && t.type.$$typeof) === $r ? kr : "$$typeof" in e ? Si[e.$$typeof] : Ci;
  var t;
}
var bi = Object.defineProperty, Ei = Object.getOwnPropertyNames, Ln = Object.getOwnPropertySymbols, $i = Object.getOwnPropertyDescriptor, ki = Object.getPrototypeOf, Dn = Object.prototype;
function Nr(e, t, n) {
  if (typeof t != "string") {
    if (Dn) {
      var r = ki(t);
      r && r !== Dn && Nr(e, r, n);
    }
    var o = Ei(t);
    Ln && (o = o.concat(Ln(t)));
    for (var i = Rn(e), a = Rn(t), c = 0; c < o.length; ++c) {
      var l = o[c];
      if (!(l in wi || n && n[l] || a && l in a || i && l in i)) {
        var f = $i(t, l);
        try {
          bi(e, l, f);
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
function nn(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function ae(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Ht(e, t) {
  if (e.length === 0)
    return "";
  for (var n = e[0], r = 1; r < e.length; r++)
    n += t ? t + e[r] : e[r];
  return n;
}
function Ee(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Ft(e, t, n) {
  if (n === void 0 && (n = !1), !n && !Ee(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++)
      e[r] = Ft(e[r], t[r]);
  else if (Ee(t))
    for (var r in t)
      e[r] = Ft(e[r], t[r]);
  return e;
}
function rn(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Ni = {}.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function xi() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1)
    r.push(e[o]);
  return r.forEach(function(a) {
    n = n.replace(/%[a-z]/, a);
  }), n;
}
function Z(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return {}.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(xi.apply(void 0, ue([Ni[e]], t, !1)).trim());
}
var Ii = function() {
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
          throw Z(16, "".concat(t));
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
}(), Qe = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), bt = 1, ze = function(e) {
  if (Qe.has(e))
    return Qe.get(e);
  for (; nt.has(bt); )
    bt++;
  var t = bt++;
  if ({}.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1073741824))
    throw Z(16, "".concat(t));
  return Qe.set(e, t), nt.set(t, e), t;
}, Oi = function(e, t) {
  Qe.set(e, t), nt.set(t, e);
}, Ai = "style[".concat(fe, "][").concat("data-styled-version", '="').concat("6.0.3", '"]'), Ti = new RegExp("^".concat(fe, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Ri = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++)
    (r = o[i]) && e.registerName(t, r);
}, Li = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(`/*!sc*/
`), o = [], i = 0, a = r.length; i < a; i++) {
    var c = r[i].trim();
    if (c) {
      var l = c.match(Ti);
      if (l) {
        var f = 0 | parseInt(l[1], 10), h = l[2];
        f !== 0 && (Oi(h, f), Ri(e, h, l[3]), e.getTag().insertRules(f, o)), o.length = 0;
      } else
        o.push(c);
    }
  }
};
function Di() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var xr = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(c) {
    var l = Array.from(c.querySelectorAll("style[".concat(fe, "]")));
    return l[l.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(fe, "active"), r.setAttribute("data-styled-version", "6.0.3");
  var a = Di();
  return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
}, Pi = function() {
  function e(t) {
    this.element = xr(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet)
        return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var a = r[o];
        if (a.ownerNode === n)
          return a;
      }
      throw Z(17);
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
}(), Mi = function() {
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
}(), Hi = function() {
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
}(), Pn = tn, Fi = { isServer: !tn, useCSSOMInjection: !hi }, Ir = function() {
  function e(t, n, r) {
    t === void 0 && (t = be), n === void 0 && (n = {});
    var o = this;
    this.options = R(R({}, Fi), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && tn && Pn && (Pn = !1, function(i) {
      for (var a = document.querySelectorAll(Ai), c = 0, l = a.length; c < l; c++) {
        var f = a[c];
        f && f.getAttribute(fe) !== "active" && (Li(i, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this)), rn(this, function() {
      return function(i) {
        for (var a = i.getTag(), c = a.length, l = "", f = function(s) {
          var _ = function(C) {
            return nt.get(C);
          }(s);
          if (_ === void 0)
            return "continue";
          var p = i.names.get(_), d = a.getGroup(s);
          if (p === void 0 || d.length === 0)
            return "continue";
          var m = "".concat(fe, ".g").concat(s, '[id="').concat(_, '"]'), O = "";
          p !== void 0 && p.forEach(function(C) {
            C.length > 0 && (O += "".concat(C, ","));
          }), l += "".concat(d).concat(m, '{content:"').concat(O, '"}').concat(`/*!sc*/
`);
        }, h = 0; h < c; h++)
          f(h);
        return l;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return ze(t);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(R(R({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new Hi(o) : r ? new Pi(o) : new Mi(o);
    }(this.options), new Ii(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (ze(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(ze(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(ze(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), Bi = /&/g, Ui = /^\s*\/\/.*$/gm;
function Or(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = Or(n.children, t)), n;
  });
}
function Wi(e) {
  var t, n, r, o = e === void 0 ? be : e, i = o.options, a = i === void 0 ? be : i, c = o.plugins, l = c === void 0 ? ft : c, f = function(_, p, d) {
    return d === n || d.startsWith(n) && d.endsWith(n) && d.replaceAll(n, "").length > 0 ? ".".concat(t) : _;
  }, h = l.slice();
  h.push(function(_) {
    _.type === ct && _.value.includes("&") && (_.props[0] = _.props[0].replace(Bi, n).replace(r, f));
  }), a.prefix && h.push(di), h.push(ci);
  var s = function(_, p, d, m) {
    p === void 0 && (p = ""), d === void 0 && (d = ""), m === void 0 && (m = "&"), t = m, n = p, r = new RegExp("\\".concat(n, "\\b"), "g");
    var O = _.replace(Ui, ""), C = ai(d || p ? "".concat(d, " ").concat(p, " { ").concat(O, " }") : O);
    a.namespace && (C = Or(C, a.namespace));
    var w = [];
    return tt(C, li(h.concat(ui(function(b) {
      return w.push(b);
    })))), w;
  };
  return s.hash = l.length ? l.reduce(function(_, p) {
    return p.name || Z(15), ie(_, p.name);
  }, 5381).toString() : "", s;
}
var zi = new Ir(), Bt = Wi(), Ar = de.createContext({ shouldForwardProp: void 0, styleSheet: zi, stylis: Bt });
Ar.Consumer;
de.createContext(void 0);
function Mn() {
  return Xt(Ar);
}
var Ut = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Bt);
      var a = r.name + i.hash;
      o.hasNameForId(r.id, a) || o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, rn(this, function() {
      throw Z(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Bt), this.name + t.hash;
  }, e;
}(), ji = function(e) {
  return e >= "A" && e <= "Z";
};
function Hn(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-")
      return e;
    ji(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Tr = function(e) {
  return e == null || e === !1 || e === "";
}, Rr = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !Tr(i) && (Array.isArray(i) && i.isCss || he(i) ? r.push("".concat(Hn(o), ":"), i, ";") : Ee(i) ? r.push.apply(r, ue(ue(["".concat(o, " {")], Rr(i), !1), ["}"], !1)) : r.push("".concat(Hn(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in fi || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function ce(e, t, n, r) {
  if (Tr(e))
    return [];
  if (nn(e))
    return [".".concat(e.styledComponentId)];
  if (he(e)) {
    if (!he(i = e) || i.prototype && i.prototype.isReactComponent || !t)
      return [e];
    var o = e(t);
    return {}.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Ut || Ee(o) || o === null || console.error("".concat(br(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), ce(o, t, n, r);
  }
  var i;
  return e instanceof Ut ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Ee(e) ? Rr(e) : Array.isArray(e) ? Array.prototype.concat.apply(ft, e.map(function(a) {
    return ce(a, t, n, r);
  })) : [e.toString()];
}
function Gi(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (he(n) && !nn(n))
      return !1;
  }
  return !0;
}
var Vi = wr("6.0.3"), Zi = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = {}.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Gi(t), this.componentId = n, this.baseHash = ie(Vi, n), this.baseStyle = r, Ir.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash)
      if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId))
        o = ae(o, this.staticRulesId);
      else {
        var i = Ht(ce(this.rules, t, n, r)), a = Mt(ie(this.baseHash, i) >>> 0);
        if (!n.hasNameForId(this.componentId, a)) {
          var c = r(i, ".".concat(a), void 0, this.componentId);
          n.insertRules(this.componentId, a, c);
        }
        o = ae(o, a), this.staticRulesId = a;
      }
    else {
      for (var l = ie(this.baseHash, r.hash), f = "", h = 0; h < this.rules.length; h++) {
        var s = this.rules[h];
        if (typeof s == "string")
          f += s, {}.NODE_ENV !== "production" && (l = ie(l, s));
        else if (s) {
          var _ = Ht(ce(s, t, n, r));
          l = ie(l, _), f += _;
        }
      }
      if (f) {
        var p = Mt(l >>> 0);
        n.hasNameForId(this.componentId, p) || n.insertRules(this.componentId, p, r(f, ".".concat(p), void 0, this.componentId)), o = ae(o, p);
      }
    }
    return o;
  }, e;
}(), Le = de.createContext(void 0);
Le.Consumer;
function Yi() {
  var e = Xt(Le);
  if (!e)
    throw Z(18);
  return e;
}
function qi(e) {
  var t = de.useContext(Le), n = st(function() {
    return function(r, o) {
      if (!r)
        throw Z(14);
      if (he(r)) {
        var i = r(o);
        if ({}.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object"))
          throw Z(7);
        return i;
      }
      if (Array.isArray(r) || typeof r != "object")
        throw Z(8);
      return o ? R(R({}, o), r) : r;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? de.createElement(Le.Provider, { value: n }, e.children) : null;
}
var Et = {}, Fn = /* @__PURE__ */ new Set();
function Xi(e, t, n) {
  var r = nn(e), o = e, i = !St(e), a = t.attrs, c = a === void 0 ? ft : a, l = t.componentId, f = l === void 0 ? function(E, $) {
    var y = typeof E != "string" ? "sc" : An(E);
    Et[y] = (Et[y] || 0) + 1;
    var v = "".concat(y, "-").concat(Sr("6.0.3" + y + Et[y]));
    return $ ? "".concat($, "-").concat(v) : v;
  }(t.displayName, t.parentComponentId) : l, h = t.displayName, s = h === void 0 ? function(E) {
    return St(E) ? "styled.".concat(E) : "Styled(".concat(br(E), ")");
  }(e) : h, _ = t.displayName && t.componentId ? "".concat(An(t.displayName), "-").concat(t.componentId) : t.componentId || f, p = r && o.attrs ? o.attrs.concat(c).filter(Boolean) : c, d = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var m = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var O = t.shouldForwardProp;
      d = function(E, $) {
        return m(E, $) && O(E, $);
      };
    } else
      d = m;
  }
  var C = new Zi(n, _, r ? o.componentStyle : void 0);
  function w(E, $) {
    return function(y, v, L) {
      var I = y.attrs, _e = y.componentStyle, Wr = y.defaultProps, zr = y.foldedComponentIds, an = y.styledComponentId, jr = y.target, Gr = de.useContext(Le), Vr = Mn(), _t = y.shouldForwardProp || Vr.shouldForwardProp;
      ({}).NODE_ENV !== "production" && Ot(an);
      var K = function(He, xe, Fe) {
        for (var pe, re = R(R({}, xe), { className: void 0, theme: Fe }), gt = 0; gt < He.length; gt += 1) {
          var Be = he(pe = He[gt]) ? pe(re) : pe;
          for (var J in Be)
            re[J] = J === "className" ? ae(re[J], Be[J]) : J === "style" ? R(R({}, re[J]), Be[J]) : Be[J];
        }
        return xe.className && (re.className = ae(re.className, xe.className)), re;
      }(I, v, pi(v, Gr, Wr) || be), Me = K.as || jr, Ne = {};
      for (var M in K)
        K[M] === void 0 || M[0] === "$" || M === "as" || M === "theme" || (M === "forwardedAs" ? Ne.as = K.forwardedAs : _t && !_t(M, Me) || (Ne[M] = K[M], _t || {}.NODE_ENV !== "development" || lo(M) || Fn.has(M) || (Fn.add(M), console.warn('styled-components: it looks like an unknown prop "'.concat(M, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var pt = function(He, xe) {
        var Fe = Mn(), pe = He.generateAndInjectStyles(xe, Fe.styleSheet, Fe.stylis);
        return {}.NODE_ENV !== "production" && Ot(pe), pe;
      }(_e, K);
      ({}).NODE_ENV !== "production" && y.warnTooManyClasses && y.warnTooManyClasses(pt);
      var mt = ae(zr, an);
      return pt && (mt += " " + pt), K.className && (mt += " " + K.className), Ne[St(Me) && !Cr.has(Me) ? "class" : "className"] = mt, Ne.ref = L, D(Me, Ne);
    }(b, E, $);
  }
  ({}).NODE_ENV !== "production" && (w.displayName = s);
  var b = de.forwardRef(w);
  return b.attrs = p, b.componentStyle = C, b.shouldForwardProp = d, {}.NODE_ENV !== "production" && (b.displayName = s), b.foldedComponentIds = r ? ae(o.foldedComponentIds, o.styledComponentId) : "", b.styledComponentId = _, b.target = r ? o.target : e, Object.defineProperty(b, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = r ? function($) {
      for (var y = [], v = 1; v < arguments.length; v++)
        y[v - 1] = arguments[v];
      for (var L = 0, I = y; L < I.length; L++)
        Ft($, I[L], !0);
      return $;
    }({}, o.defaultProps, E) : E;
  } }), {}.NODE_ENV !== "production" && (_i(s, _), b.warnTooManyClasses = function(E, $) {
    var y = {}, v = !1;
    return function(L) {
      if (!v && (y[L] = !0, Object.keys(y).length >= 200)) {
        var I = $ ? ' with the id of "'.concat($, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(E).concat(I, `.
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
  }(s, _)), rn(b, function() {
    return ".".concat(b.styledComponentId);
  }), i && Nr(b, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), b;
}
function Bn(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var Un = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function on(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  if (he(e) || Ee(e)) {
    var r = e;
    return Un(ce(Bn(ft, ue([r], t, !0))));
  }
  var o = e;
  return t.length === 0 && o.length === 1 && typeof o[0] == "string" ? ce(o) : Un(ce(Bn(o, t)));
}
function Wt(e, t, n) {
  if (n === void 0 && (n = be), !t)
    throw Z(1, t);
  var r = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++)
      i[a - 1] = arguments[a];
    return e(t, n, on.apply(void 0, ue([o], i, !1)));
  };
  return r.attrs = function(o) {
    return Wt(e, t, R(R({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Wt(e, t, R(R({}, n), o));
  }, r;
}
var Lr = function(e) {
  return Wt(Xi, e);
}, F = Lr;
Cr.forEach(function(e) {
  F[e] = Lr(e);
});
function ht(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  ({}).NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = Ht(on.apply(void 0, ue([e], t, !1))), o = Sr(r);
  return new Ut(o, r);
}
({}).NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var je = "__sc-".concat(fe, "__");
({}).NODE_ENV !== "production" && {}.NODE_ENV !== "test" && typeof window < "u" && (window[je] || (window[je] = 0), window[je] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[je] += 1);
var Qi = 0;
function u(e, t, n, r, o, i) {
  var a, c, l = {};
  for (c in t)
    c == "ref" ? a = t[c] : l[c] = t[c];
  var f = { type: e, props: l, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Qi, __source: o, __self: i };
  if (typeof e == "function" && (a = e.defaultProps))
    for (c in a)
      l[c] === void 0 && (l[c] = a[c]);
  return g.vnode && g.vnode(f), f;
}
const Dr = ({
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
}), P = {
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
}, Ki = 2, $t = 14, Wn = 5, zn = 0.027;
var q = /* @__PURE__ */ ((e) => (e[e.S = 300] = "S", e[e.M = 400] = "M", e[e.L = 500] = "L", e[e.Default = 600] = "Default", e))(q || {});
const Ae = {
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
}, jn = {
  loading: {
    text: "Loading. Please wait.",
    visible: !0
  },
  waiting: {
    text: "Waiting for input...",
    visible: !0
  }
}, Ji = {
  [B.CANDIDATE_SELECTION]: "Stay still…",
  [B.FACE_TOO_CLOSE]: "Move back",
  [B.FACE_TOO_FAR]: "Move closer",
  [B.FACE_CENTERING]: "Center your face",
  [B.FACE_NOT_PRESENT]: "Position your face into the circle",
  [B.SHARPNESS_TOO_LOW]: "Turn face against light",
  [B.BRIGHTNESS_TOO_LOW]: "Turn face against light",
  [B.BRIGHTNESS_TOO_HIGH]: "Less light needed",
  [B.DEVICE_PITCHED]: "Hold your phone at eye level"
}, ea = P.CIRCLE_SOLID, ta = "rgba(19, 19, 19, 0.5)", na = 34, Pr = (e) => e ? e.width < e.height ? Math.max($t, Wn + e.width * zn) : Math.max($t, Wn + e.height * zn) : $t, ra = (e) => e > q.Default ? Ae[q.Default] : e > q.L ? Ae[q.L] : e > q.M ? Ae[q.M] : Ae[q.S], oa = (e) => e ? ra(e.width) : Ae[q.Default], ia = F.div`
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
`, aa = F.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, sa = F.p`
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
`, zt = ({
  fontSize: e,
  Icon: t,
  isCameraReady: n,
  position: r = "absolute",
  text: o
}) => u(ia, {
  $isCameraReady: n,
  $position: r,
  children: u(aa, {
    children: [t ? u(t, {
      svgSize: e * 2
    }) : null, u(sa, {
      $fontSize: e,
      children: o
    })]
  })
}), Mr = ({
  fontSize: e,
  text: t = "An unknown error has occurred"
}) => u(zt, {
  fontSize: e,
  Icon: Dr,
  position: "relative",
  text: t
});
class ca extends U {
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
    return this.state.hasError ? u(Mr, {
      fontSize: Pr(this.props.videoElementSize),
      Icon: Dr,
      isCameraReady: !1
    }) : this.props.children;
  }
}
const la = ({
  children: e,
  theme: t,
  videoElementSize: n
}) => u(qi, {
  theme: t,
  children: u(ca, {
    videoElementSize: n,
    children: e
  })
}), De = (e, t) => {
  const n = at(t);
  ve(() => {
    n.current = t;
  }, [t]), ve(
    () => {
      const r = (o) => n.current(o);
      return document.addEventListener(e, r), () => {
        document.removeEventListener(e, r);
      };
    },
    [e]
    // Re-run if eventName
  );
}, ua = (e) => {
  const [t, n] = V(), r = Ce((o) => {
    var i;
    n((i = o.detail) == null ? void 0 : i.size);
  }, [n]);
  return De(e, r), t;
}, da = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, kt = {
  colors: da
}, fa = (e) => e != null && e.theme ? {
  ...kt,
  ...e.theme,
  colors: {
    ...kt.colors,
    ...e.theme.colors
  }
} : kt, ha = 0.75, _a = 2, pa = (e) => Number.parseFloat(e.toFixed(3)), Hr = (e, t) => Math.min(e, t), ma = (e, t) => {
  const n = Hr(t.width, t.height);
  return pa(e * n);
}, ga = ({
  height: e,
  width: t
}) => {
  const n = Hr(t, e) * ha, r = (t - n) / 2, o = (e - n) / 2;
  return {
    shiftX: r,
    shiftY: o,
    width: n,
    height: n
  };
}, ya = (e) => {
  const {
    height: t,
    shiftX: n,
    shiftY: r,
    width: o
  } = ga(e);
  return {
    shiftX: n / e.width,
    shiftY: r / e.height,
    width: o / e.width,
    height: t / e.height
  };
}, va = (e, t) => ma(e, t) * _a, Fr = (e, t) => {
  document.dispatchEvent(new CustomEvent(e, {
    detail: t
  }));
}, rt = class rt {
  constructor() {
    Ue(this, "lastDetails", {});
    Ue(this, "delayedTime", 0);
  }
  static getInstance() {
    return this._instance || (this._instance = new rt()), this._instance;
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
    this.isDetailChanged(t, n) && Fr(t, n);
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
Ue(rt, "_instance");
let jt = rt;
jt.getInstance();
const Gn = (e, t) => {
  Fr(e, {
    instruction: t
  });
};
class Ca {
  static async getVideoInputDeviceList() {
    return (await navigator.mediaDevices.enumerateDevices()).filter((n) => n.kind === "videoinput");
  }
}
const wa = () => {
  const [e, t] = V(!1);
  return ve(() => {
    (async () => {
      (await Ca.getVideoInputDeviceList()).length > 1 && t(!0);
    })();
  }, []), e;
}, Sa = ({
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
}), ba = ({
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
}), Br = F.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(e) => e.$marginLeft ? `${e.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, Ea = ({
  marginLeft: e,
  size: t,
  ...n
}) => u(Br, {
  $marginLeft: e,
  ...n,
  children: u(Sa, {
    size: t
  })
}), $a = ({
  marginLeft: e,
  size: t,
  ...n
}) => u(Br, {
  $marginLeft: e,
  ...n,
  children: u(ba, {
    size: t
  })
}), ka = F.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.$padding}px`};
  z-index: 2;
`, Na = ({
  customControlEvent: e,
  isSwitchCameraDisabled: t,
  videoElementSize: n
}) => {
  const r = wa(), {
    buttonPadding: o,
    iconSize: i,
    marginLeft: a
  } = oa(n), c = () => {
    Gn(e, It.TOGGLE_MIRROR);
  };
  return u(ka, {
    $padding: o,
    children: [r && u($a, {
      disabled: t,
      onClick: () => {
        Gn(e, It.SWITCH_CAMERA);
      },
      size: i
    }), u(Ea, {
      marginLeft: r ? a : 0,
      onClick: c,
      size: i
    })]
  });
}, xa = F.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, Ia = ({
  svgSize: e
}) => u(xa, {
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
}), Oa = F.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`, Ur = ({
  backdropColor: e,
  children: t
}) => u(Oa, {
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
}), Aa = ({
  appState: e,
  appStateInstructions: t,
  backdropColor: n,
  fontSize: r,
  isBackdrop: o
}) => {
  const i = e === G.ERROR || e === G.RUNNING;
  return !e || i || !t[e].visible ? null : e === G.WAITING ? u(z, {
    children: [o && u(Ur, {
      backdropColor: n
    }), u(zt, {
      fontSize: r,
      isCameraReady: !0,
      text: t[G.WAITING].text
    })]
  }) : u(zt, {
    fontSize: r,
    Icon: Ia,
    isCameraReady: !0,
    text: t[G.LOADING].text
  });
}, Ta = "2.5s", Ra = "0.3s", La = "linear", Da = ht`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
ht`
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`;
ht`
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
ht`
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
const Pa = F.div`
  position: absolute;
  left: 50%;

  ${(e) => e.$cssTop ? `top: ${e.$cssTop}%;` : ""}
  ${(e) => e.$cssBottom ? `bottom: ${e.$cssBottom}%;` : ""}
    ${(e) => e.$isAnimating && on`
      animation: ${Da} ${Ra}
        ${La} both;
      animation-delay: ${Ta};

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
`, Ma = F.div`
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
`, Ha = ({
  children: e,
  cssBottom: t,
  cssTop: n,
  fontSize: r,
  isAnimating: o,
  isInCandidateSelection: i,
  isPortrait: a
}) => u(Pa, {
  $cssBottom: t,
  $cssTop: n,
  $isAnimating: o,
  $isPortrait: a,
  children: u(Ma, {
    $fontSize: r,
    $isInCandidateSelection: i,
    $wrap: e.length > na,
    children: e
  })
}), Fa = () => u("svg", {
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
}), Ba = () => u("svg", {
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
}), Ua = () => u("svg", {
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
}), Wa = () => u("svg", {
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
}), za = () => u("svg", {
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
}), ja = () => u("svg", {
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
}), Ga = () => u("svg", {
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
}), Va = () => u("svg", {
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
}), Za = F.div`
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
`, Ya = ({
  children: e,
  isInCandidateSelection: t,
  placeholderRectangle: n
}) => u(Za, {
  $isInCandidateSelection: t,
  $placeholderRectangle: n,
  children: e
}), qa = {
  [P.CIRCLE_SOLID]: u(Fa, {}),
  [P.ELLIPSE_SOLID]: u(Ba, {}),
  [P.MAN_SOLID]: u(Ua, {}),
  [P.WOMAN_SOLID]: u(Va, {}),
  [P.SQUARE_ROUNDED_DASH]: u(za, {}),
  [P.SQUARE_ROUNDED_SOLID]: u(ja, {}),
  [P.SQUARE_DASH]: u(Wa, {}),
  [P.SQUARE_SOLID]: u(Ga, {})
}, Xa = ({
  backdropColor: e,
  icon: t,
  isBackdrop: n,
  placeholderRectangle: r,
  ...o
}) => u(z, {
  children: [n && u(Ur, {
    backdropColor: e,
    children: u("rect", {
      fill: "#000",
      height: `${r.height * 100}%`,
      rx: "50%",
      width: `${r.width * 100}%`,
      x: `${r.shiftX * 100}%`,
      y: `${r.shiftY * 100}%`
    })
  }), u(Ya, {
    placeholderRectangle: r,
    ...o,
    children: qa[t]
  })]
}), Qa = () => {
  const [e, t] = V(), [n, r] = V(!1), o = Ce((l) => {
    var h, s;
    t((h = l == null ? void 0 : l.detail) == null ? void 0 : h.cameraResolution);
    const f = (s = l == null ? void 0 : l.detail) == null ? void 0 : s.isMirroring;
    f !== void 0 && r(f);
  }, [t]);
  De(le.CAMERA_PROPS_CHANGED, o);
  const [i, a] = V(
    B.FACE_NOT_PRESENT
    // FIXME Default instruction should not be here
  ), c = Ce((l) => {
    var f;
    a((f = l == null ? void 0 : l.detail) == null ? void 0 : f.instructionCode);
  }, [a]);
  return De(le.INSTRUCTION_CHANGED, c), {
    cameraResolution: e,
    instructionCode: i,
    isMirroring: n
  };
}, Ka = () => {
  const [e, t] = V(G.LOADING), [n, r] = V(), o = Ce((i) => {
    var c, l;
    t((c = i.detail) == null ? void 0 : c.appState);
    const a = (l = i == null ? void 0 : i.detail) == null ? void 0 : l.error;
    a && r(a);
  }, [t, r]);
  return De(le.STATE_CHANGED, o), {
    appState: e,
    error: n
  };
}, Ja = F.canvas`
  transform: ${(e) => e.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, es = (e) => {
  const t = e.getContext("2d");
  t && t.clearRect(0, 0, t.canvas.width, t.canvas.height);
}, ts = ({
  cameraResolution: e,
  isImageMirror: t
}) => {
  const n = at(null), r = Yi(), [o, i] = V(), a = Ce((c) => {
    var l;
    i((l = c == null ? void 0 : c.detail) == null ? void 0 : l.detectedObject);
  }, [i]);
  return De(le.DETECTED_FACE_CHANGED, a), ve(() => {
    if (!n.current)
      return;
    const c = (l, f) => {
      var d;
      if (!f)
        return;
      const {
        faceCenter: h,
        faceSize: s
      } = f, _ = (d = n == null ? void 0 : n.current) == null ? void 0 : d.getContext("2d");
      if (!_)
        return;
      const p = va(s, l);
      _.beginPath(), _.arc(h.x, h.y, p, 0, 2 * Math.PI, !1), _.lineWidth = Ki, _.strokeStyle = r.colors.placeholderColor, _.stroke();
    };
    n.current.width = e.width, n.current.height = e.height, es(n.current), c(e, o);
  }, [e, o, r.colors.placeholderColor]), u(Ja, {
    ref: n,
    $isImageMirror: t
  });
}, ns = ({
  appStateInstructions: e,
  backdropColor: t,
  instructions: n,
  placeholderIcon: r,
  showCameraButtons: o,
  showDetectionLayer: i,
  videoElementSize: a
}) => {
  const {
    appState: c,
    error: l
  } = Ka(), {
    cameraResolution: f,
    instructionCode: h,
    isMirroring: s
  } = Qa(), _ = h === B.CANDIDATE_SELECTION, p = Pr(a), d = r === P.CIRCLE_SOLID;
  if (c === G.ERROR)
    return u(Mr, {
      fontSize: p,
      text: l == null ? void 0 : l.message
    });
  if (c === G.RUNNING && f) {
    const m = ya(f);
    return (r === P.WOMAN_SOLID || r === P.MAN_SOLID || r === P.ELLIPSE_SOLID) && console.warn("The placeholder icon you are currently using is deprecated. Please use one of our alternative placeholders instead. Read more here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-face/latest/documentation/#ui-component"), u(z, {
      children: [i && u(ts, {
        cameraResolution: f,
        isImageMirror: s
      }), u(Xa, {
        backdropColor: t,
        icon: r,
        isBackdrop: d,
        isInCandidateSelection: _,
        placeholderRectangle: m
      }), h && u(Ha, {
        cssBottom: (m.height + m.shiftY) * 100,
        fontSize: p,
        isInCandidateSelection: _,
        isPortrait: f.width < f.height,
        children: n[h]
      }), o && u(Na, {
        customControlEvent: le.CONTROL,
        isSwitchCameraDisabled: _,
        videoElementSize: a
      })]
    });
  }
  return u(Aa, {
    appState: c,
    appStateInstructions: e,
    backdropColor: t,
    fontSize: p,
    isBackdrop: d
  });
};
const rs = (e) => {
  var c, l;
  const t = {
    ...Ji,
    ...e == null ? void 0 : e.instructions
  }, n = {
    [G.LOADING]: {
      ...jn.loading,
      ...(c = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : c.loading
    },
    [G.WAITING]: {
      ...jn.waiting,
      ...(l = e == null ? void 0 : e.appStateInstructions) == null ? void 0 : l.waiting
    }
  }, r = (e == null ? void 0 : e.placeholder) ?? ea, o = (e == null ? void 0 : e.backdropColor) ?? ta, i = (e == null ? void 0 : e.showDetectionLayer) ?? !1, a = (e == null ? void 0 : e.showCameraButtons) ?? !1;
  return {
    faceInstructions: t,
    faceAppStateInstructions: n,
    facePlaceholderIcon: r,
    backdropColor: o,
    showDetectionLayer: i,
    showCameraButtons: a
  };
}, os = ({
  props: e
}) => {
  const {
    backdropColor: t,
    faceAppStateInstructions: n,
    faceInstructions: r,
    facePlaceholderIcon: o,
    showCameraButtons: i,
    showDetectionLayer: a
  } = rs(e), c = ua(le.VIDEO_ELEMENT_SIZE), l = fa(e);
  return u(la, {
    theme: l,
    videoElementSize: c,
    children: u(ns, {
      appStateInstructions: n,
      backdropColor: t,
      instructions: r,
      placeholderIcon: o,
      showCameraButtons: i,
      showDetectionLayer: a,
      videoElementSize: c
    })
  });
};
ao(os, "x-dot-face-auto-capture-ui", ["props"]);
