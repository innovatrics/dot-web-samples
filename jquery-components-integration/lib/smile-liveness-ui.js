var so = Object.defineProperty;
var co = (e, t, n) => t in e ? so(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ze = (e, t, n) => (co(e, typeof t != "symbol" ? t + "" : t, n), n);
var ze, p, ur, ce, yn, fr, xt, dr, Ue = {}, hr = [], lo = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ft = Array.isArray;
function X(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function _r(e) {
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
  return Me(e, a, r, o, null);
}
function Me(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o ?? ++ur, __i: -1, __u: 0 };
  return o == null && p.vnode != null && p.vnode(i), i;
}
function uo() {
  return { current: null };
}
function U(e) {
  return e.children;
}
function z(e, t) {
  this.props = e, this.context = t;
}
function Se(e, t) {
  if (t == null)
    return e.__ ? Se(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Se(e) : null;
}
function pr(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return pr(e);
  }
}
function Lt(e) {
  (!e.__d && (e.__d = !0) && ce.push(e) && !at.__r++ || yn !== p.debounceRendering) && ((yn = p.debounceRendering) || fr)(at);
}
function at() {
  var e, t, n, r, o, i, a, s, l;
  for (ce.sort(xt); e = ce.shift(); )
    e.__d && (t = ce.length, r = void 0, i = (o = (n = e).__v).__e, s = [], l = [], (a = n.__P) && ((r = X({}, o)).__v = o.__v + 1, p.vnode && p.vnode(r), Jt(a, r, o, n.__n, a.ownerSVGElement !== void 0, 32 & o.__u ? [i] : null, s, i ?? Se(o), !!(32 & o.__u), l), r.__.__k[r.__i] = r, yr(s, r, l), r.__e != i && pr(r)), ce.length > t && ce.sort(xt));
  at.__r = 0;
}
function mr(e, t, n, r, o, i, a, s, l, u, f) {
  var c, _, h, g, w, S = r && r.__k || hr, m = t.length;
  for (n.__d = l, fo(n, t, S), l = n.__d, c = 0; c < m; c++)
    (h = n.__k[c]) != null && typeof h != "boolean" && typeof h != "function" && (_ = h.__i === -1 ? Ue : S[h.__i] || Ue, h.__i = c, Jt(e, h, _, o, i, a, s, l, u, f), g = h.__e, h.ref && _.ref != h.ref && (_.ref && en(_.ref, null, h), f.push(h.ref, h.__c || g, h)), w == null && g != null && (w = g), 65536 & h.__u || _.__k === h.__k ? l = gr(h, l, e) : typeof h.type == "function" && h.__d !== void 0 ? l = h.__d : g && (l = g.nextSibling), h.__d = void 0, h.__u &= -196609);
  n.__d = l, n.__e = w;
}
function fo(e, t, n) {
  var r, o, i, a, s, l = t.length, u = n.length, f = u, c = 0;
  for (e.__k = [], r = 0; r < l; r++)
    (o = e.__k[r] = (o = t[r]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? Me(null, o, null, null, o) : ft(o) ? Me(U, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? Me(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = e, o.__b = e.__b + 1, s = ho(o, n, a = r + c, f), o.__i = s, i = null, s !== -1 && (f--, (i = n[s]) && (i.__u |= 131072)), i == null || i.__v === null ? (s == -1 && c--, typeof o.type != "function" && (o.__u |= 65536)) : s !== a && (s === a + 1 ? c++ : s > a ? f > l - a ? c += s - a : c-- : c = s < a && s == a - 1 ? s - a : 0, s !== r + c && (o.__u |= 65536))) : (i = n[r]) && i.key == null && i.__e && (i.__e == e.__d && (e.__d = Se(i)), Rt(i, i, !1), n[r] = null, f--);
  if (f)
    for (r = 0; r < u; r++)
      (i = n[r]) != null && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = Se(i)), Rt(i, i));
}
function gr(e, t, n) {
  var r, o;
  if (typeof e.type == "function") {
    for (r = e.__k, o = 0; r && o < r.length; o++)
      r[o] && (r[o].__ = e, t = gr(r[o], t, n));
    return t;
  }
  return e.__e != t && (n.insertBefore(e.__e, t || null), t = e.__e), t && t.nextSibling;
}
function Q(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (ft(e) ? e.some(function(n) {
    Q(n, t);
  }) : t.push(e)), t;
}
function ho(e, t, n, r) {
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
function vn(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || lo.test(t) ? n : n + "px";
}
function Ye(e, t, n, r, o) {
  var i;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || vn(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || vn(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      i = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = Date.now(), e.addEventListener(t, i ? Sn : Cn, i)) : e.removeEventListener(t, i ? Sn : Cn, i);
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
function Cn(e) {
  var t = this.l[e.type + !1];
  if (e.t) {
    if (e.t <= t.u)
      return;
  } else
    e.t = Date.now();
  return t(p.event ? p.event(e) : e);
}
function Sn(e) {
  return this.l[e.type + !0](p.event ? p.event(e) : e);
}
function Jt(e, t, n, r, o, i, a, s, l, u) {
  var f, c, _, h, g, w, S, m, v, b, I, N, E, y, F, x = t.type;
  if (t.constructor !== void 0)
    return null;
  128 & n.__u && (l = !!(32 & n.__u), i = [s = t.__e = n.__e]), (f = p.__b) && f(t);
  e:
    if (typeof x == "function")
      try {
        if (m = t.props, v = (f = x.contextType) && r[f.__c], b = f ? v ? v.props.value : f.__ : r, n.__c ? S = (c = t.__c = n.__c).__ = c.__E : ("prototype" in x && x.prototype.render ? t.__c = c = new x(m, b) : (t.__c = c = new z(m, b), c.constructor = x, c.render = po), v && v.sub(c), c.props = m, c.state || (c.state = {}), c.context = b, c.__n = r, _ = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), x.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = X({}, c.__s)), X(c.__s, x.getDerivedStateFromProps(m, c.__s))), h = c.props, g = c.state, c.__v = t, _)
          x.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (x.getDerivedStateFromProps == null && m !== h && c.componentWillReceiveProps != null && c.componentWillReceiveProps(m, b), !c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(m, c.__s, b) === !1 || t.__v === n.__v)) {
            for (t.__v !== n.__v && (c.props = m, c.state = c.__s, c.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(ge) {
              ge && (ge.__ = t);
            }), I = 0; I < c._sb.length; I++)
              c.__h.push(c._sb[I]);
            c._sb = [], c.__h.length && a.push(c);
            break e;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(m, c.__s, b), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(h, g, w);
          });
        }
        if (c.context = b, c.props = m, c.__P = e, c.__e = !1, N = p.__r, E = 0, "prototype" in x && x.prototype.render) {
          for (c.state = c.__s, c.__d = !1, N && N(t), f = c.render(c.props, c.state, c.context), y = 0; y < c._sb.length; y++)
            c.__h.push(c._sb[y]);
          c._sb = [];
        } else
          do
            c.__d = !1, N && N(t), f = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++E < 25);
        c.state = c.__s, c.getChildContext != null && (r = X(X({}, r), c.getChildContext())), _ || c.getSnapshotBeforeUpdate == null || (w = c.getSnapshotBeforeUpdate(h, g)), mr(e, ft(F = f != null && f.type === U && f.key == null ? f.props.children : f) ? F : [F], t, n, r, o, i, a, s, l, u), c.base = t.__e, t.__u &= -161, c.__h.length && a.push(c), S && (c.__E = c.__ = null);
      } catch (ge) {
        t.__v = null, l || i != null ? (t.__e = s, t.__u |= l ? 160 : 32, i[i.indexOf(s)] = null) : (t.__e = n.__e, t.__k = n.__k), p.__e(ge, t, n);
      }
    else
      i == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = _o(n.__e, t, n, r, o, i, a, l, u);
  (f = p.diffed) && f(t);
}
function yr(e, t, n) {
  t.__d = void 0;
  for (var r = 0; r < n.length; r++)
    en(n[r], n[++r], n[++r]);
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
function _o(e, t, n, r, o, i, a, s, l) {
  var u, f, c, _, h, g, w, S = n.props, m = t.props, v = t.type;
  if (v === "svg" && (o = !0), i != null) {
    for (u = 0; u < i.length; u++)
      if ((h = i[u]) && "setAttribute" in h == !!v && (v ? h.localName === v : h.nodeType === 3)) {
        e = h, i[u] = null;
        break;
      }
  }
  if (e == null) {
    if (v === null)
      return document.createTextNode(m);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", v) : document.createElement(v, m.is && m), i = null, s = !1;
  }
  if (v === null)
    S === m || s && e.data === m || (e.data = m);
  else {
    if (i = i && ze.call(e.childNodes), S = n.props || Ue, !s && i != null)
      for (S = {}, u = 0; u < e.attributes.length; u++)
        S[(h = e.attributes[u]).name] = h.value;
    for (u in S)
      h = S[u], u == "children" || (u == "dangerouslySetInnerHTML" ? c = h : u === "key" || u in m || Ye(e, u, null, h, o));
    for (u in m)
      h = m[u], u == "children" ? _ = h : u == "dangerouslySetInnerHTML" ? f = h : u == "value" ? g = h : u == "checked" ? w = h : u === "key" || s && typeof h != "function" || S[u] === h || Ye(e, u, h, S[u], o);
    if (f)
      s || c && (f.__html === c.__html || f.__html === e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (c && (e.innerHTML = ""), mr(e, ft(_) ? _ : [_], t, n, r, o && v !== "foreignObject", i, a, i ? i[0] : n.__k && Se(n, 0), s, l), i != null)
      for (u = i.length; u--; )
        i[u] != null && _r(i[u]);
    s || (u = "value", g !== void 0 && (g !== e[u] || v === "progress" && !g || v === "option" && g !== S[u]) && Ye(e, u, g, S[u], !1), u = "checked", w !== void 0 && w !== e[u] && Ye(e, u, w, S[u], !1));
  }
  return e;
}
function en(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    p.__e(r, n);
  }
}
function Rt(e, t, n) {
  var r, o;
  if (p.unmount && p.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || en(r, null, t)), (r = e.__c) != null) {
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
  n || e.__e == null || _r(e.__e), e.__ = e.__e = e.__d = void 0;
}
function po(e, t, n) {
  return this.constructor(e, n);
}
function re(e, t, n) {
  var r, o, i, a;
  p.__ && p.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], a = [], Jt(t, e = (!r && n || t).__k = D(U, null, [e]), o || Ue, Ue, t.ownerSVGElement !== void 0, !r && n ? [n] : o ? null : t.firstChild ? ze.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, a), yr(i, e, a);
}
function tn(e, t) {
  re(e, t, tn);
}
function nn(e, t, n) {
  var r, o, i, a, s = X({}, e.props);
  for (i in e.type && e.type.defaultProps && (a = e.type.defaultProps), t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i] === void 0 && a !== void 0 ? a[i] : t[i];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? ze.call(arguments, 2) : n), Me(e.type, s, r || e.key, o || e.ref, null);
}
function mo(e, t) {
  var n = { __c: t = "__cC" + dr++, __: e, Consumer: function(r, o) {
    return r.children(o);
  }, Provider: function(r) {
    var o, i;
    return this.getChildContext || (o = [], (i = {})[t] = this, this.getChildContext = function() {
      return i;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && o.some(function(s) {
        s.__e = !0, Lt(s);
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
ze = hr.slice, p = { __e: function(e, t, n, r) {
  for (var o, i, a; t = t.__; )
    if ((o = t.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), a = o.__d), a)
          return o.__E = o;
      } catch (s) {
        e = s;
      }
  throw e;
} }, ur = 0, z.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = X({}, this.state), typeof e == "function" && (e = e(X({}, n), this.props)), e && X(n, e), e != null && this.__v && (t && this._sb.push(t), Lt(this));
}, z.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Lt(this));
}, z.prototype.render = U, ce = [], fr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, xt = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, at.__r = 0, dr = 0;
function rn() {
  return (rn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var go = ["context", "children"];
function yo(e) {
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
  }(e, go);
  return nn(t, n);
}
function vo() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = D(yo, rn({}, this._props, { context: e.detail.context }), function t(n, r) {
    if (n.nodeType === 3)
      return n.data;
    if (n.nodeType !== 1)
      return null;
    var o = [], i = {}, a = 0, s = n.attributes, l = n.childNodes;
    for (a = s.length; a--; )
      s[a].name !== "slot" && (i[s[a].name] = s[a].value, i[vr(s[a].name)] = s[a].value);
    for (a = l.length; a--; ) {
      var u = t(l[a], null), f = l[a].slot;
      f ? i[f] = D(wn, { name: f }, u) : o[a] = u;
    }
    var c = r ? D(wn, null, o) : o;
    return D(r || n.nodeName.toLowerCase(), i, c);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? tn : re)(this._vdom, this._root);
}
function vr(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function Co(e, t, n) {
  if (this._vdom) {
    var r = {};
    r[e] = n = n ?? void 0, r[vr(e)] = n, this._vdom = nn(this._vdom, r), re(this._vdom, this._root);
  }
}
function So() {
  re(this._vdom = null, this._root);
}
function wn(e, t) {
  var n = this;
  return D("slot", rn({}, e, { ref: function(r) {
    r ? (n.ref = r, n._listener || (n._listener = function(o) {
      o.stopPropagation(), o.detail.context = t;
    }, r.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function wo(e, t, n, r) {
  function o() {
    var i = Reflect.construct(HTMLElement, [], o);
    return i._vdomComponent = e, i._root = r && r.shadow ? i.attachShadow({ mode: r.mode || "open" }) : i, i;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = vo, o.prototype.attributeChangedCallback = Co, o.prototype.disconnectedCallback = So, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = n, n.forEach(function(i) {
    Object.defineProperty(o.prototype, i, { get: function() {
      return this._vdom.props[i];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(i, null, a) : (this._props || (this._props = {}), this._props[i] = a, this.connectedCallback());
      var s = typeof a;
      a != null && s !== "string" && s !== "boolean" && s !== "number" || this.setAttribute(i, a);
    } });
  }), customElements.define(t || e.tagName || e.displayName || e.name, o);
}
var Dt = /* @__PURE__ */ ((e) => (e.CONTINUE_DETECTION = "continue-detection", e.SWITCH_CAMERA = "switch-camera", e.TOGGLE_MIRROR = "toggle-mirror", e))(Dt || {}), Cr = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", e.CONTROL = "document-auto-capture:control", e.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", e.DOCUMENT_DETECTION = "document-auto-capture:document-detection", e.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", e.STATE_CHANGED = "document-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", e))(Cr || {}), Be = /* @__PURE__ */ ((e) => (e.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", e.CONTROL = "face-auto-capture:control", e.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", e.FACE_DETECTION = "face-auto-capture:face-detection", e.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", e.STATE_CHANGED = "face-auto-capture:state-changed", e.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", e))(Be || {}), on = /* @__PURE__ */ ((e) => (e.ANIMATION_END = "smile-auto-capture:animation-end", e.STATUS_CHANGED = "smile-auto-capture:status-changed", e))(on || {});
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
}, Eo = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  WAITING: "WAITING",
  RUNNING: "RUNNING"
}, Ce = {
  ...W,
  SMILE: "smile",
  SMILE_CANDIDATE_SELECTION: "smile_candidate_selection"
}, st = {
  NEUTRAL: "NEUTRAL",
  SMILE: "SMILE"
}, ne = {
  ...Eo,
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
function _e(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function bo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var $o = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ko = /* @__PURE__ */ bo(
  function(e) {
    return $o.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), oe, T, bt, En, we = 0, Sr = [], Ke = [], bn = p.__b, $n = p.__r, kn = p.diffed, In = p.__c, Nn = p.unmount;
function Ne(e, t) {
  p.__h && p.__h(T, e, we || t), we = 0;
  var n = T.__H || (T.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({ __V: Ke }), n.__[e];
}
function P(e) {
  return we = 1, wr(Er, e);
}
function wr(e, t, n) {
  var r = Ne(oe++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Er(void 0, t), function(s) {
    var l = r.__N ? r.__N[0] : r.__[0], u = r.t(l, s);
    l !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = T, !T.u)) {
    var o = function(s, l, u) {
      if (!r.__c.__H)
        return !0;
      var f = r.__c.__H.__.filter(function(_) {
        return _.__c;
      });
      if (f.every(function(_) {
        return !_.__N;
      }))
        return !i || i.call(this, s, l, u);
      var c = !1;
      return f.forEach(function(_) {
        if (_.__N) {
          var h = _.__[0];
          _.__ = _.__N, _.__N = void 0, h !== _.__[0] && (c = !0);
        }
      }), !(!c && r.__c.props === s) && (!i || i.call(this, s, l, u));
    };
    T.u = !0;
    var i = T.shouldComponentUpdate, a = T.componentWillUpdate;
    T.componentWillUpdate = function(s, l, u) {
      if (this.__e) {
        var f = i;
        i = void 0, o(s, l, u), i = f;
      }
      a && a.call(this, s, l, u);
    }, T.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function ie(e, t) {
  var n = Ne(oe++, 3);
  !p.__s && sn(n.__H, t) && (n.__ = e, n.i = t, T.__H.__h.push(n));
}
function dt(e, t) {
  var n = Ne(oe++, 4);
  !p.__s && sn(n.__H, t) && (n.__ = e, n.i = t, T.__h.push(n));
}
function ht(e) {
  return we = 5, fe(function() {
    return { current: e };
  }, []);
}
function Io(e, t, n) {
  we = 6, dt(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(e));
}
function fe(e, t) {
  var n = Ne(oe++, 7);
  return sn(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__;
}
function Ee(e, t) {
  return we = 8, fe(function() {
    return e;
  }, t);
}
function an(e) {
  var t = T.context[e.__c], n = Ne(oe++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(T)), t.props.value) : e.__;
}
function Pt(e, t) {
  p.useDebugValue && p.useDebugValue(t ? t(e) : e);
}
function No() {
  var e = Ne(oe++, 11);
  if (!e.__) {
    for (var t = T.__v; t !== null && !t.__m && t.__ !== null; )
      t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function Oo() {
  for (var e; e = Sr.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(Je), e.__H.__h.forEach(Mt), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], p.__e(t, e.__v);
      }
}
p.__b = function(e) {
  T = null, bn && bn(e);
}, p.__r = function(e) {
  $n && $n(e), oe = 0;
  var t = (T = e.__c).__H;
  t && (bt === T ? (t.__h = [], T.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = Ke, n.__N = n.i = void 0;
  })) : (t.__h.forEach(Je), t.__h.forEach(Mt), t.__h = [], oe = 0)), bt = T;
}, p.diffed = function(e) {
  kn && kn(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Sr.push(t) !== 1 && En === p.requestAnimationFrame || ((En = p.requestAnimationFrame) || To)(Oo)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== Ke && (n.__ = n.__V), n.i = void 0, n.__V = Ke;
  })), bt = T = null;
}, p.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(Je), n.__h = n.__h.filter(function(r) {
        return !r.__ || Mt(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], p.__e(r, n.__v);
    }
  }), In && In(e, t);
}, p.unmount = function(e) {
  Nn && Nn(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      Je(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && p.__e(t, n.__v));
};
var On = typeof requestAnimationFrame == "function";
function To(e) {
  var t, n = function() {
    clearTimeout(r), On && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  On && (t = requestAnimationFrame(n));
}
function Je(e) {
  var t = T, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), T = t;
}
function Mt(e) {
  var t = T;
  e.__c = e.__(), T = t;
}
function sn(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function Er(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function br(e, t) {
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
function Ut(e) {
  this.props = e;
}
function Ao(e, t) {
  function n(o) {
    var i = this.props.ref, a = i == o.ref;
    return !a && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !a : Ht(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, D(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(Ut.prototype = new z()).isPureReactComponent = !0, Ut.prototype.shouldComponentUpdate = function(e, t) {
  return Ht(this.props, e) || Ht(this.state, t);
};
var Tn = p.__b;
p.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Tn && Tn(e);
};
var xo = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function Lo(e) {
  function t(n) {
    var r = br({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = xo, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var An = function(e, t) {
  return e == null ? null : Q(Q(e).map(t));
}, Ro = { map: An, forEach: An, count: function(e) {
  return e ? Q(e).length : 0;
}, only: function(e) {
  var t = Q(e);
  if (t.length !== 1)
    throw "Children.only";
  return t[0];
}, toArray: Q }, Do = p.__e;
p.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; )
      if ((o = i.__c) && o.__c)
        return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  Do(e, t, n, r);
};
var xn = p.unmount;
function $r(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = br({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return $r(r, t, n);
  })), e;
}
function kr(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return kr(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function et() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Ir(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Po(e) {
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
function Le() {
  this.u = null, this.o = null;
}
p.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), xn && xn(e);
}, (et.prototype = new z()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var o = Ir(r.__v), i = !1, a = function() {
    i || (i = !0, n.__R = null, o ? o(s) : s());
  };
  n.__R = a;
  var s = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var l = r.state.__a;
        r.__v.__k[0] = kr(l, l.__c.__P, l.__c.__O);
      }
      var u;
      for (r.setState({ __a: r.__b = null }); u = r.t.pop(); )
        u.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(a, a);
}, et.prototype.componentWillUnmount = function() {
  this.t = [];
}, et.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = $r(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && D(U, null, e.fallback);
  return o && (o.__u &= -33), [D(U, null, t.__a ? null : e.children), o];
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
function Mo(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function Ho(e) {
  var t = this, n = e.i;
  t.componentWillUnmount = function() {
    re(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== n && t.componentWillUnmount(), t.l || (t.i = n, t.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r);
  } }), re(D(Mo, { context: t.context }, e.__v), t.l);
}
function Uo(e, t) {
  var n = D(Ho, { __v: e, i: t });
  return n.containerInfo = t, n;
}
(Le.prototype = new z()).__a = function(e) {
  var t = this, n = Ir(t.__v), r = t.o.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), Ln(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, Le.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = Q(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; )
    this.o.set(t[n], this.u = [1, 0, this.u]);
  return e.children;
}, Le.prototype.componentDidUpdate = Le.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, n) {
    Ln(e, n, t);
  });
};
var Nr = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Bo = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Fo = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Wo = /[A-Z0-9]/g, zo = typeof document < "u", jo = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function Vo(e, t, n) {
  return t.__k == null && (t.textContent = ""), re(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function Go(e, t, n) {
  return tn(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
z.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(z.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Rn = p.event;
function Zo() {
}
function Yo() {
  return this.cancelBubble;
}
function qo() {
  return this.defaultPrevented;
}
p.event = function(e) {
  return Rn && (e = Rn(e)), e.persist = Zo, e.isPropagationStopped = Yo, e.isDefaultPrevented = qo, e.nativeEvent = e;
};
var cn, Xo = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Dn = p.vnode;
p.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {};
    for (var i in n) {
      var a = n[i];
      if (!(i === "value" && "defaultValue" in n && a == null || zo && i === "children" && r === "noscript" || i === "class" || i === "className")) {
        var s = i.toLowerCase();
        i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && a === !0 ? a = "" : s === "ondoubleclick" ? i = "ondblclick" : s !== "onchange" || r !== "input" && r !== "textarea" || jo(n.type) ? s === "onfocus" ? i = "onfocusin" : s === "onblur" ? i = "onfocusout" : Fo.test(i) ? i = s : r.indexOf("-") === -1 && Bo.test(i) ? i = i.replace(Wo, "-$&").toLowerCase() : a === null && (a = void 0) : s = i = "oninput", s === "oninput" && o[i = s] && (i = "oninputCapture"), o[i] = a;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = Q(n.children).forEach(function(l) {
      l.props.selected = o.value.indexOf(l.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = Q(n.children).forEach(function(l) {
      l.props.selected = o.multiple ? o.defaultValue.indexOf(l.props.value) != -1 : o.defaultValue == l.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", Xo)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = Nr, Dn && Dn(e);
};
var Pn = p.__r;
p.__r = function(e) {
  Pn && Pn(e), cn = e.__c;
};
var Mn = p.diffed;
p.diffed = function(e) {
  Mn && Mn(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), cn = null;
};
var Qo = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return cn.__n[e.__c].props.value;
} } } };
function Ko(e) {
  return D.bind(null, e);
}
function _t(e) {
  return !!e && e.$$typeof === Nr;
}
function Jo(e) {
  return _t(e) && e.type === U;
}
function ei(e) {
  return _t(e) ? nn.apply(null, arguments) : e;
}
function ti(e) {
  return !!e.__k && (re(null, e), !0);
}
function ni(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var ri = function(e, t) {
  return e(t);
}, oi = function(e, t) {
  return e(t);
}, ii = U;
function Or(e) {
  e();
}
function ai(e) {
  return e;
}
function si() {
  return [!1, Or];
}
var ci = dt, li = _t;
function ui(e, t) {
  var n = t(), r = P({ h: { __: n, v: t } }), o = r[0].h, i = r[1];
  return dt(function() {
    o.__ = n, o.v = t, $t(o) && i({ h: o });
  }, [e, n, t]), ie(function() {
    return $t(o) && i({ h: o }), e(function() {
      $t(o) && i({ h: o });
    });
  }, [e]), n;
}
function $t(e) {
  var t, n, r = e.v, o = e.__;
  try {
    var i = r();
    return !((t = o) === (n = i) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
}
var K = { useState: P, useId: No, useReducer: wr, useEffect: ie, useLayoutEffect: dt, useInsertionEffect: ci, useTransition: si, useDeferredValue: ai, useSyncExternalStore: ui, startTransition: Or, useRef: ht, useImperativeHandle: Io, useMemo: fe, useCallback: Ee, useContext: an, useDebugValue: Pt, version: "17.0.2", Children: Ro, render: Vo, hydrate: Go, unmountComponentAtNode: ti, createPortal: Uo, createElement: D, createContext: mo, createFactory: Ko, cloneElement: ei, createRef: uo, Fragment: U, isValidElement: _t, isElement: li, isFragment: Jo, findDOMNode: ni, Component: z, PureComponent: Ut, memo: Ao, forwardRef: Lo, flushSync: oi, unstable_batchedUpdates: ri, StrictMode: ii, Suspense: et, SuspenseList: Le, lazy: Po, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Qo };
function fi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var di = function(t, n, r, o) {
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
    var c = t[f], _ = n[f];
    if (i = r ? r.call(o, c, _, f) : void 0, i === !1 || i === void 0 && c !== _)
      return !1;
  }
  return !0;
};
const hi = /* @__PURE__ */ fi(di);
var O = "-ms-", He = "-moz-", k = "-webkit-", Tr = "comm", pt = "rule", ln = "decl", _i = "@import", Ar = "@keyframes", pi = "@layer", mi = Math.abs, un = String.fromCharCode, Bt = Object.assign;
function gi(e, t) {
  return L(e, 0) ^ 45 ? (((t << 2 ^ L(e, 0)) << 2 ^ L(e, 1)) << 2 ^ L(e, 2)) << 2 ^ L(e, 3) : 0;
}
function xr(e) {
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
function L(e, t) {
  return e.charCodeAt(t) | 0;
}
function be(e, t, n) {
  return e.slice(t, n);
}
function G(e) {
  return e.length;
}
function Lr(e) {
  return e.length;
}
function Re(e, t) {
  return t.push(e), e;
}
function yi(e, t) {
  return e.map(t).join("");
}
function Hn(e, t) {
  return e.filter(function(n) {
    return !Y(n, t);
  });
}
var mt = 1, $e = 1, Rr = 0, B = 0, A = 0, Oe = "";
function gt(e, t, n, r, o, i, a, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: mt, column: $e, length: a, return: "", siblings: s };
}
function te(e, t) {
  return Bt(gt("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function ve(e) {
  for (; e.root; )
    e = te(e.root, { children: [e] });
  Re(e, e.siblings);
}
function vi() {
  return A;
}
function Ci() {
  return A = B > 0 ? L(Oe, --B) : 0, $e--, A === 10 && ($e = 1, mt--), A;
}
function j() {
  return A = B < Rr ? L(Oe, B++) : 0, $e++, A === 10 && ($e = 1, mt++), A;
}
function de() {
  return L(Oe, B);
}
function nt() {
  return B;
}
function yt(e, t) {
  return be(Oe, e, t);
}
function Ft(e) {
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
function Si(e) {
  return mt = $e = 1, Rr = G(Oe = e), B = 0, [];
}
function wi(e) {
  return Oe = "", e;
}
function kt(e) {
  return xr(yt(B - 1, Wt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ei(e) {
  for (; (A = de()) && A < 33; )
    j();
  return Ft(e) > 2 || Ft(A) > 3 ? "" : " ";
}
function bi(e, t) {
  for (; --t && j() && !(A < 48 || A > 102 || A > 57 && A < 65 || A > 70 && A < 97); )
    ;
  return yt(e, nt() + (t < 6 && de() == 32 && j() == 32));
}
function Wt(e) {
  for (; j(); )
    switch (A) {
      case e:
        return B;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Wt(A);
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
function $i(e, t) {
  for (; j() && e + A !== 57; )
    if (e + A === 84 && de() === 47)
      break;
  return "/*" + yt(t, B - 1) + "*" + un(e === 47 ? e : j());
}
function ki(e) {
  for (; !Ft(de()); )
    j();
  return yt(e, B);
}
function Ii(e) {
  return wi(rt("", null, null, null, [""], e = Si(e), 0, [0], e));
}
function rt(e, t, n, r, o, i, a, s, l) {
  for (var u = 0, f = 0, c = a, _ = 0, h = 0, g = 0, w = 1, S = 1, m = 1, v = 0, b = "", I = o, N = i, E = r, y = b; S; )
    switch (g = v, v = j()) {
      case 40:
        if (g != 108 && L(y, c - 1) == 58) {
          tt(y += C(kt(v), "&", "&\f"), "&\f") != -1 && (m = -1);
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
        y += Ei(g);
        break;
      case 92:
        y += bi(nt() - 1, 7);
        continue;
      case 47:
        switch (de()) {
          case 42:
          case 47:
            Re(Ni($i(j(), nt()), t, n, l), l);
            break;
          default:
            y += "/";
        }
        break;
      case 123 * w:
        s[u++] = G(y) * m;
      case 125 * w:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            S = 0;
          case 59 + f:
            m == -1 && (y = C(y, /\f/g, "")), h > 0 && G(y) - c && Re(h > 32 ? Bn(y + ";", r, n, c - 1, l) : Bn(C(y, " ", "") + ";", r, n, c - 2, l), l);
            break;
          case 59:
            y += ";";
          default:
            if (Re(E = Un(y, t, n, u, f, o, s, b, I = [], N = [], c, i), i), v === 123)
              if (f === 0)
                rt(y, t, E, E, I, i, c, s, N);
              else
                switch (_ === 99 && L(y, 3) === 110 ? 100 : _) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    rt(e, E, E, r && Re(Un(e, E, E, 0, 0, o, s, b, o, I = [], c, N), N), o, N, c, s, r ? I : N);
                    break;
                  default:
                    rt(y, E, E, E, [""], N, 0, s, N);
                }
        }
        u = f = h = 0, w = m = 1, b = y = "", c = a;
        break;
      case 58:
        c = 1 + G(y), h = g;
      default:
        if (w < 1) {
          if (v == 123)
            --w;
          else if (v == 125 && w++ == 0 && Ci() == 125)
            continue;
        }
        switch (y += un(v), v * w) {
          case 38:
            m = f > 0 ? 1 : (y += "\f", -1);
            break;
          case 44:
            s[u++] = (G(y) - 1) * m, m = 1;
            break;
          case 64:
            de() === 45 && (y += kt(j())), _ = de(), f = c = G(b = y += ki(nt())), v++;
            break;
          case 45:
            g === 45 && G(y) == 2 && (w = 0);
        }
    }
  return i;
}
function Un(e, t, n, r, o, i, a, s, l, u, f, c) {
  for (var _ = o - 1, h = o === 0 ? i : [""], g = Lr(h), w = 0, S = 0, m = 0; w < r; ++w)
    for (var v = 0, b = be(e, _ + 1, _ = mi(S = a[w])), I = e; v < g; ++v)
      (I = xr(S > 0 ? h[v] + " " + b : C(b, /&\f/g, h[v]))) && (l[m++] = I);
  return gt(e, t, n, o === 0 ? pt : s, l, u, f, c);
}
function Ni(e, t, n, r) {
  return gt(e, t, n, Tr, un(vi()), be(e, 2, -2), 0, r);
}
function Bn(e, t, n, r, o) {
  return gt(e, t, n, ln, be(e, 0, r), be(e, r + 1, -1), r, o);
}
function Dr(e, t, n) {
  switch (gi(e, t)) {
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
      return He + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return k + e + He + e + O + e + e;
    case 5936:
      switch (L(e, t + 11)) {
        case 114:
          return k + e + O + C(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return k + e + O + C(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return k + e + O + C(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return k + e + O + e + e;
    case 6165:
      return k + e + O + "flex-" + e + e;
    case 5187:
      return k + e + C(e, /(\w+).+(:[^]+)/, k + "box-$1$2" + O + "flex-$1$2") + e;
    case 5443:
      return k + e + O + "flex-item-" + C(e, /flex-|-self/g, "") + (Y(e, /flex-|baseline/) ? "" : O + "grid-row-" + C(e, /flex-|-self/g, "")) + e;
    case 4675:
      return k + e + O + "flex-line-pack" + C(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return k + e + O + C(e, "shrink", "negative") + e;
    case 5292:
      return k + e + O + C(e, "basis", "preferred-size") + e;
    case 6060:
      return k + "box-" + C(e, "-grow", "") + k + e + O + C(e, "grow", "positive") + e;
    case 4554:
      return k + C(e, /([^-])(transform)/g, "$1" + k + "$2") + e;
    case 6187:
      return C(C(C(e, /(zoom-|grab)/, k + "$1"), /(image-set)/, k + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return C(e, /(image-set\([^]*)/, k + "$1$`$1");
    case 4968:
      return C(C(e, /(.+:)(flex-)?(.*)/, k + "box-pack:$3" + O + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + k + e + e;
    case 4200:
      if (!Y(e, /flex-|baseline/))
        return O + "grid-column-align" + be(e, t) + e;
      break;
    case 2592:
    case 3360:
      return O + C(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, Y(r.props, /grid-\w+-end/);
      }) ? ~tt(e + (n = n[t].value), "span") ? e : O + C(e, "-start", "") + e + O + "grid-row-span:" + (~tt(n, "span") ? Y(n, /\d+/) : +Y(n, /\d+/) - +Y(e, /\d+/)) + ";" : O + C(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return Y(r.props, /grid-\w+-start/);
      }) ? e : O + C(C(e, "-end", "-span"), "span ", "") + e;
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
      if (G(e) - 1 - t > 6)
        switch (L(e, t + 1)) {
          case 109:
            if (L(e, t + 4) !== 45)
              break;
          case 102:
            return C(e, /(.+:)(.+)-([^]+)/, "$1" + k + "$2-$3$1" + He + (L(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~tt(e, "stretch") ? Dr(C(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return C(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, a, s, l, u) {
        return O + o + ":" + i + u + (a ? O + o + "-span:" + (s ? l : +l - +i) + u : "") + e;
      });
    case 4949:
      if (L(e, t + 6) === 121)
        return C(e, ":", ":" + k) + e;
      break;
    case 6444:
      switch (L(e, L(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return C(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + k + (L(e, 14) === 45 ? "inline-" : "") + "box$3$1" + k + "$2$3$1" + O + "$2box$3") + e;
        case 100:
          return C(e, ":", ":" + O) + e;
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
function Oi(e, t, n, r) {
  switch (e.type) {
    case pi:
      if (e.children.length)
        break;
    case _i:
    case ln:
      return e.return = e.return || e.value;
    case Tr:
      return "";
    case Ar:
      return e.return = e.value + "{" + ct(e.children, r) + "}";
    case pt:
      if (!G(e.value = e.props.join(",")))
        return "";
  }
  return G(n = ct(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Ti(e) {
  var t = Lr(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function Ai(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function xi(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case ln:
        e.return = Dr(e.value, e.length, n);
        return;
      case Ar:
        return ct([te(e, { value: C(e.value, "@", "@" + k) })], r);
      case pt:
        if (e.length)
          return yi(n = e.props, function(o) {
            switch (Y(o, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                ve(te(e, { props: [C(o, /:(read-\w+)/, ":" + He + "$1")] })), ve(te(e, { props: [o] })), Bt(e, { props: Hn(n, r) });
                break;
              case "::placeholder":
                ve(te(e, { props: [C(o, /:(plac\w+)/, ":" + k + "input-$1")] })), ve(te(e, { props: [C(o, /:(plac\w+)/, ":" + He + "$1")] })), ve(te(e, { props: [C(o, /:(plac\w+)/, O + "input-$1")] })), ve(te(e, { props: [o] })), Bt(e, { props: Hn(n, r) });
                break;
            }
            return "";
          });
    }
}
var Li = {
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
}, $ = {}, pe = typeof process < "u" && $ !== void 0 && ($.REACT_APP_SC_ATTR || $.SC_ATTR) || "data-styled", fn = typeof window < "u" && "HTMLElement" in window, Ri = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && $ !== void 0 && $.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && $.REACT_APP_SC_DISABLE_SPEEDY !== "" ? $.REACT_APP_SC_DISABLE_SPEEDY !== "false" && $.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && $ !== void 0 && $.SC_DISABLE_SPEEDY !== void 0 && $.SC_DISABLE_SPEEDY !== "" ? $.SC_DISABLE_SPEEDY !== "false" && $.SC_DISABLE_SPEEDY : $.NODE_ENV !== "production"), Fn = /invalid hook call/i, qe = /* @__PURE__ */ new Set(), Di = function(e, t) {
  if ($.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(a) {
        for (var s = [], l = 1; l < arguments.length; l++)
          s[l - 1] = arguments[l];
        Fn.test(a) ? (i = !1, qe.delete(r)) : o.apply(void 0, _e([a], s, !1));
      }, ht(), i && !qe.has(r) && (console.warn(r), qe.add(r));
    } catch (a) {
      Fn.test(a.message) && qe.delete(r);
    } finally {
      console.error = o;
    }
  }
}, vt = Object.freeze([]), ke = Object.freeze({});
function Pi(e, t, n) {
  return n === void 0 && (n = ke), e.theme !== n.theme && e.theme || t || n.theme;
}
var zt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Mi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Hi = /(^-|-$)/g;
function Wn(e) {
  return e.replace(Mi, "-").replace(Hi, "");
}
var Ui = /(a)(d)/gi, zn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function jt(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    n = zn(t % 52) + n;
  return (zn(t % 52) + n).replace(Ui, "$1-$2");
}
var It, le = function(e, t) {
  for (var n = t.length; n; )
    e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Pr = function(e) {
  return le(5381, e);
};
function Mr(e) {
  return jt(Pr(e) >>> 0);
}
function Hr(e) {
  return $.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Nt(e) {
  return typeof e == "string" && ($.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Ur = typeof Symbol == "function" && Symbol.for, Br = Ur ? Symbol.for("react.memo") : 60115, Bi = Ur ? Symbol.for("react.forward_ref") : 60112, Fi = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Wi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Fr = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, zi = ((It = {})[Bi] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, It[Br] = Fr, It);
function jn(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Br ? Fr : "$$typeof" in e ? zi[e.$$typeof] : Fi;
  var t;
}
var ji = Object.defineProperty, Vi = Object.getOwnPropertyNames, Vn = Object.getOwnPropertySymbols, Gi = Object.getOwnPropertyDescriptor, Zi = Object.getPrototypeOf, Gn = Object.prototype;
function Wr(e, t, n) {
  if (typeof t != "string") {
    if (Gn) {
      var r = Zi(t);
      r && r !== Gn && Wr(e, r, n);
    }
    var o = Vi(t);
    Vn && (o = o.concat(Vn(t)));
    for (var i = jn(e), a = jn(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!(l in Wi || n && n[l] || a && l in a || i && l in i)) {
        var u = Gi(t, l);
        try {
          ji(e, l, u);
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
function dn(e) {
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
function Ie(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Gt(e, t, n) {
  if (n === void 0 && (n = !1), !n && !Ie(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++)
      e[r] = Gt(e[r], t[r]);
  else if (Ie(t))
    for (var r in t)
      e[r] = Gt(e[r], t[r]);
  return e;
}
function hn(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Yi = $.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function qi() {
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
  return $.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(qi.apply(void 0, _e([Yi[e]], t, !1)).trim());
}
var Xi = function() {
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
}(), ot = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map(), it = 1, Xe = function(e) {
  if (ot.has(e))
    return ot.get(e);
  for (; lt.has(it); )
    it++;
  var t = it++;
  if ($.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1073741824))
    throw Z(16, "".concat(t));
  return ot.set(e, t), lt.set(t, e), t;
}, Qi = function(e, t) {
  it = t + 1, ot.set(e, t), lt.set(t, e);
}, Ki = "style[".concat(pe, "][").concat("data-styled-version", '="').concat("6.1.1", '"]'), Ji = new RegExp("^".concat(pe, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ea = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++)
    (r = o[i]) && e.registerName(t, r);
}, ta = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(`/*!sc*/
`), o = [], i = 0, a = r.length; i < a; i++) {
    var s = r[i].trim();
    if (s) {
      var l = s.match(Ji);
      if (l) {
        var u = 0 | parseInt(l[1], 10), f = l[2];
        u !== 0 && (Qi(f, u), ea(e, f, l[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else
        o.push(s);
    }
  }
};
function na() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var zr = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(s) {
    var l = Array.from(s.querySelectorAll("style[".concat(pe, "]")));
    return l[l.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(pe, "active"), r.setAttribute("data-styled-version", "6.1.1");
  var a = na();
  return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
}, ra = function() {
  function e(t) {
    this.element = zr(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
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
}(), oa = function() {
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
}(), ia = function() {
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
}(), Zn = fn, aa = { isServer: !fn, useCSSOMInjection: !Ri }, jr = function() {
  function e(t, n, r) {
    t === void 0 && (t = ke), n === void 0 && (n = {});
    var o = this;
    this.options = R(R({}, aa), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && fn && Zn && (Zn = !1, function(i) {
      for (var a = document.querySelectorAll(Ki), s = 0, l = a.length; s < l; s++) {
        var u = a[s];
        u && u.getAttribute(pe) !== "active" && (ta(i, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this)), hn(this, function() {
      return function(i) {
        for (var a = i.getTag(), s = a.length, l = "", u = function(c) {
          var _ = function(m) {
            return lt.get(m);
          }(c);
          if (_ === void 0)
            return "continue";
          var h = i.names.get(_), g = a.getGroup(c);
          if (h === void 0 || g.length === 0)
            return "continue";
          var w = "".concat(pe, ".g").concat(c, '[id="').concat(_, '"]'), S = "";
          h !== void 0 && h.forEach(function(m) {
            m.length > 0 && (S += "".concat(m, ","));
          }), l += "".concat(g).concat(w, '{content:"').concat(S, '"}').concat(`/*!sc*/
`);
        }, f = 0; f < s; f++)
          u(f);
        return l;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return Xe(t);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(R(R({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new ia(o) : r ? new ra(o) : new oa(o);
    }(this.options), new Xi(t)));
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
}(), sa = /&/g, ca = /^\s*\/\/.*$/gm;
function Vr(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = Vr(n.children, t)), n;
  });
}
function Gr(e) {
  var t, n, r, o = e === void 0 ? ke : e, i = o.options, a = i === void 0 ? ke : i, s = o.plugins, l = s === void 0 ? vt : s, u = function(_, h, g) {
    return g === n || g.startsWith(n) && g.endsWith(n) && g.replaceAll(n, "").length > 0 ? ".".concat(t) : _;
  }, f = l.slice();
  f.push(function(_) {
    _.type === pt && _.value.includes("&") && (_.props[0] = _.props[0].replace(sa, n).replace(r, u));
  }), a.prefix && f.push(xi), f.push(Oi);
  var c = function(_, h, g, w) {
    h === void 0 && (h = ""), g === void 0 && (g = ""), w === void 0 && (w = "&"), t = w, n = h, r = new RegExp("\\".concat(n, "\\b"), "g");
    var S = _.replace(ca, ""), m = Ii(g || h ? "".concat(g, " ").concat(h, " { ").concat(S, " }") : S);
    a.namespace && (m = Vr(m, a.namespace));
    var v = [];
    return ct(m, Ti(f.concat(Ai(function(b) {
      return v.push(b);
    })))), v;
  };
  return c.hash = l.length ? l.reduce(function(_, h) {
    return h.name || Z(15), le(_, h.name);
  }, 5381).toString() : "", c;
}
var la = new jr(), Zt = Gr(), _n = K.createContext({ shouldForwardProp: void 0, styleSheet: la, stylis: Zt });
_n.Consumer;
var ua = K.createContext(void 0);
function Yt() {
  return an(_n);
}
function fa(e) {
  var t = P(e.stylisPlugins), n = t[0], r = t[1], o = Yt().styleSheet, i = fe(function() {
    var l = o;
    return e.sheet ? l = e.sheet : e.target && (l = l.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (l = l.reconstructWithOptions({ useCSSOMInjection: !1 })), l;
  }, [e.disableCSSOMInjection, e.sheet, e.target, o]), a = fe(function() {
    return Gr({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: n });
  }, [e.enableVendorPrefixes, e.namespace, n]);
  ie(function() {
    hi(n, e.stylisPlugins) || r(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var s = fe(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: a };
  }, [e.shouldForwardProp, i, a]);
  return K.createElement(_n.Provider, { value: s }, K.createElement(ua.Provider, { value: a }, e.children));
}
var qt = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Zt);
      var a = r.name + i.hash;
      o.hasNameForId(r.id, a) || o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, hn(this, function() {
      throw Z(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Zt), this.name + t.hash;
  }, e;
}(), da = function(e) {
  return e >= "A" && e <= "Z";
};
function Yn(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-")
      return e;
    da(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Zr = function(e) {
  return e == null || e === !1 || e === "";
}, Yr = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !Zr(i) && (Array.isArray(i) && i.isCss || me(i) ? r.push("".concat(Yn(o), ":"), i, ";") : Ie(i) ? r.push.apply(r, _e(_e(["".concat(o, " {")], Yr(i), !1), ["}"], !1)) : r.push("".concat(Yn(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in Li || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function he(e, t, n, r) {
  if (Zr(e))
    return [];
  if (dn(e))
    return [".".concat(e.styledComponentId)];
  if (me(e)) {
    if (!me(i = e) || i.prototype && i.prototype.isReactComponent || !t)
      return [e];
    var o = e(t);
    return $.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof qt || Ie(o) || o === null || console.error("".concat(Hr(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), he(o, t, n, r);
  }
  var i;
  return e instanceof qt ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Ie(e) ? Yr(e) : Array.isArray(e) ? Array.prototype.concat.apply(vt, e.map(function(a) {
    return he(a, t, n, r);
  })) : [e.toString()];
}
function ha(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (me(n) && !dn(n))
      return !1;
  }
  return !0;
}
var _a = Pr("6.1.1"), pa = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = $.NODE_ENV === "production" && (r === void 0 || r.isStatic) && ha(t), this.componentId = n, this.baseHash = le(_a, n), this.baseStyle = r, jr.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash)
      if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId))
        o = ue(o, this.staticRulesId);
      else {
        var i = Vt(he(this.rules, t, n, r)), a = jt(le(this.baseHash, i) >>> 0);
        if (!n.hasNameForId(this.componentId, a)) {
          var s = r(i, ".".concat(a), void 0, this.componentId);
          n.insertRules(this.componentId, a, s);
        }
        o = ue(o, a), this.staticRulesId = a;
      }
    else {
      for (var l = le(this.baseHash, r.hash), u = "", f = 0; f < this.rules.length; f++) {
        var c = this.rules[f];
        if (typeof c == "string")
          u += c, $.NODE_ENV !== "production" && (l = le(l, c));
        else if (c) {
          var _ = Vt(he(c, t, n, r));
          l = le(l, _ + f), u += _;
        }
      }
      if (u) {
        var h = jt(l >>> 0);
        n.hasNameForId(this.componentId, h) || n.insertRules(this.componentId, h, r(u, ".".concat(h), void 0, this.componentId)), o = ue(o, h);
      }
    }
    return o;
  }, e;
}(), Fe = K.createContext(void 0);
Fe.Consumer;
function ma() {
  var e = an(Fe);
  if (!e)
    throw Z(18);
  return e;
}
function ga(e) {
  var t = K.useContext(Fe), n = fe(function() {
    return function(r, o) {
      if (!r)
        throw Z(14);
      if (me(r)) {
        var i = r(o);
        if ($.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object"))
          throw Z(7);
        return i;
      }
      if (Array.isArray(r) || typeof r != "object")
        throw Z(8);
      return o ? R(R({}, o), r) : r;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? K.createElement(Fe.Provider, { value: n }, e.children) : null;
}
var Ot = {}, qn = /* @__PURE__ */ new Set();
function ya(e, t, n) {
  var r = dn(e), o = e, i = !Nt(e), a = t.attrs, s = a === void 0 ? vt : a, l = t.componentId, u = l === void 0 ? function(I, N) {
    var E = typeof I != "string" ? "sc" : Wn(I);
    Ot[E] = (Ot[E] || 0) + 1;
    var y = "".concat(E, "-").concat(Mr("6.1.1" + E + Ot[E]));
    return N ? "".concat(N, "-").concat(y) : y;
  }(t.displayName, t.parentComponentId) : l, f = t.displayName, c = f === void 0 ? function(I) {
    return Nt(I) ? "styled.".concat(I) : "Styled(".concat(Hr(I), ")");
  }(e) : f, _ = t.displayName && t.componentId ? "".concat(Wn(t.displayName), "-").concat(t.componentId) : t.componentId || u, h = r && o.attrs ? o.attrs.concat(s).filter(Boolean) : s, g = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var w = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var S = t.shouldForwardProp;
      g = function(I, N) {
        return w(I, N) && S(I, N);
      };
    } else
      g = w;
  }
  var m = new pa(n, _, r ? o.componentStyle : void 0);
  function v(I, N) {
    return function(E, y, F) {
      var x = E.attrs, ge = E.componentStyle, no = E.defaultProps, ro = E.foldedComponentIds, gn = E.styledComponentId, oo = E.target, io = K.useContext(Fe), ao = Yt(), Ct = E.shouldForwardProp || ao.shouldForwardProp;
      $.NODE_ENV !== "production" && Pt(gn);
      var J = function(je, xe, Ve) {
        for (var ye, se = R(R({}, xe), { className: void 0, theme: Ve }), Et = 0; Et < je.length; Et += 1) {
          var Ge = me(ye = je[Et]) ? ye(se) : ye;
          for (var ee in Ge)
            se[ee] = ee === "className" ? ue(se[ee], Ge[ee]) : ee === "style" ? R(R({}, se[ee]), Ge[ee]) : Ge[ee];
        }
        return xe.className && (se.className = ue(se.className, xe.className)), se;
      }(x, y, Pi(y, io, no) || ke), Te = J.as || oo, Ae = {};
      for (var H in J)
        J[H] === void 0 || H[0] === "$" || H === "as" || H === "theme" || (H === "forwardedAs" ? Ae.as = J.forwardedAs : Ct && !Ct(H, Te) || (Ae[H] = J[H], Ct || $.NODE_ENV !== "development" || ko(H) || qn.has(H) || !zt.has(Te) || (qn.add(H), console.warn('styled-components: it looks like an unknown prop "'.concat(H, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var St = function(je, xe) {
        var Ve = Yt(), ye = je.generateAndInjectStyles(xe, Ve.styleSheet, Ve.stylis);
        return $.NODE_ENV !== "production" && Pt(ye), ye;
      }(ge, J);
      $.NODE_ENV !== "production" && E.warnTooManyClasses && E.warnTooManyClasses(St);
      var wt = ue(ro, gn);
      return St && (wt += " " + St), J.className && (wt += " " + J.className), Ae[Nt(Te) && !zt.has(Te) ? "class" : "className"] = wt, Ae.ref = F, D(Te, Ae);
    }(b, I, N);
  }
  v.displayName = c;
  var b = K.forwardRef(v);
  return b.attrs = h, b.componentStyle = m, b.displayName = c, b.shouldForwardProp = g, b.foldedComponentIds = r ? ue(o.foldedComponentIds, o.styledComponentId) : "", b.styledComponentId = _, b.target = r ? o.target : e, Object.defineProperty(b, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(I) {
    this._foldedDefaultProps = r ? function(N) {
      for (var E = [], y = 1; y < arguments.length; y++)
        E[y - 1] = arguments[y];
      for (var F = 0, x = E; F < x.length; F++)
        Gt(N, x[F], !0);
      return N;
    }({}, o.defaultProps, I) : I;
  } }), $.NODE_ENV !== "production" && (Di(c, _), b.warnTooManyClasses = /* @__PURE__ */ function(I, N) {
    var E = {}, y = !1;
    return function(F) {
      if (!y && (E[F] = !0, Object.keys(E).length >= 200)) {
        var x = N ? ' with the id of "'.concat(N, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(I).concat(x, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), y = !0, E = {};
      }
    };
  }(c, _)), hn(b, function() {
    return ".".concat(b.styledComponentId);
  }), i && Wr(b, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), b;
}
function Xn(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var Qn = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function pn(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  if (me(e) || Ie(e)) {
    var r = e;
    return Qn(he(Xn(vt, _e([r], t, !0))));
  }
  var o = e;
  return t.length === 0 && o.length === 1 && typeof o[0] == "string" ? he(o) : Qn(he(Xn(o, t)));
}
function Xt(e, t, n) {
  if (n === void 0 && (n = ke), !t)
    throw Z(1, t);
  var r = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++)
      i[a - 1] = arguments[a];
    return e(t, n, pn.apply(void 0, _e([o], i, !1)));
  };
  return r.attrs = function(o) {
    return Xt(e, t, R(R({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Xt(e, t, R(R({}, n), o));
  }, r;
}
var qr = function(e) {
  return Xt(ya, e);
}, M = qr;
zt.forEach(function(e) {
  M[e] = qr(e);
});
function ae(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  $.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = Vt(pn.apply(void 0, _e([e], t, !1))), o = Mr(r);
  return new qt(o, r);
}
$.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Qe = "__sc-".concat(pe, "__");
$.NODE_ENV !== "production" && $.NODE_ENV !== "test" && typeof window < "u" && (window[Qe] || (window[Qe] = 0), window[Qe] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Qe] += 1);
var va = 0;
function d(e, t, n, r, o, i) {
  var a, s, l = {};
  for (s in t)
    s == "ref" ? a = t[s] : l[s] = t[s];
  var u = { type: e, props: l, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --va, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (a = e.defaultProps))
    for (s in a)
      l[s] === void 0 && (l[s] = a[s]);
  return p.vnode && p.vnode(u), u;
}
const Xr = ({
  svgSize: e
}) => d("svg", {
  fill: "none",
  height: e,
  viewBox: "0 0 16 14",
  width: e,
  xmlns: "http://www.w3.org/2000/svg",
  children: d("path", {
    clipRule: "evenodd",
    d: "M14.3062 13.5002H1.69384C0.932655 13.5002 0.450552 12.6837 0.818264 12.0172L7.12444 0.587236C7.5047 -0.101994 8.49533 -0.101996 8.87559 0.587234L15.1818 12.0172C15.5495 12.6837 15.0674 13.5002 14.3062 13.5002ZM8.00001 3.25025C8.41423 3.25025 8.75002 3.58604 8.75002 4.00025V8.50025C8.75002 8.91446 8.41423 9.25025 8.00001 9.25025C7.5858 9.25025 7.25001 8.91446 7.25001 8.50025V4.00025C7.25001 3.58604 7.5858 3.25025 8.00001 3.25025ZM8.75002 11.2502C8.75002 11.6645 8.41423 12.0002 8.00001 12.0002C7.5858 12.0002 7.25001 11.6645 7.25001 11.2502C7.25001 10.836 7.5858 10.5002 8.00001 10.5002C8.41423 10.5002 8.75002 10.836 8.75002 11.2502Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })
}), V = {
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
}, Kn = 0.24, Ca = 24, Sa = 2, Tt = 14, Jn = 5, er = 0.027;
var q = /* @__PURE__ */ ((e) => (e[e.S = 300] = "S", e[e.M = 400] = "M", e[e.L = 500] = "L", e[e.Default = 600] = "Default", e))(q || {});
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
}, wa = {
  [W.CANDIDATE_SELECTION]: "Stay still…",
  [W.FACE_TOO_CLOSE]: "Move back",
  [W.FACE_TOO_FAR]: "Move closer",
  [W.FACE_CENTERING]: "Center your face",
  [W.FACE_NOT_PRESENT]: "Position your face into the circle",
  [W.SHARPNESS_TOO_LOW]: "Turn face against light",
  [W.BRIGHTNESS_TOO_LOW]: "Turn face against light",
  [W.BRIGHTNESS_TOO_HIGH]: "Less light needed",
  [W.DEVICE_PITCHED]: "Hold your phone at eye level"
}, Ea = {
  ...wa,
  [Ce.SMILE]: "Smile :)",
  [Ce.SMILE_CANDIDATE_SELECTION]: "Smile :)"
}, ba = "rgba(19, 19, 19, 0.5)", $a = 34, Qr = (e) => e ? e.width < e.height ? Math.max(Tt, Jn + e.width * er) : Math.max(Tt, Jn + e.height * er) : Tt, ka = (e) => e > q.Default ? De[q.Default] : e > q.L ? De[q.L] : e > q.M ? De[q.M] : De[q.S], Ia = (e) => e ? ka(e.width) : De[q.Default], Na = M.div`
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
`, Oa = M.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(e) => e.theme.colors.instructionTextColor};
`, Ta = M.p`
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
`, Qt = ({
  fontSize: e,
  Icon: t,
  isCameraReady: n,
  position: r = "absolute",
  text: o
}) => d(Na, {
  $isCameraReady: n,
  $position: r,
  children: d(Oa, {
    children: [t ? d(t, {
      svgSize: e * 2
    }) : null, d(Ta, {
      $fontSize: e,
      children: o
    })]
  })
}), Kr = ({
  fontSize: e,
  text: t = "An unknown error has occurred"
}) => d(Qt, {
  fontSize: e,
  Icon: Xr,
  position: "relative",
  text: t
});
class Aa extends z {
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
    return this.state.hasError ? d(Kr, {
      fontSize: Qr(this.props.videoElementSize),
      Icon: Xr,
      isCameraReady: !1
    }) : this.props.children;
  }
}
const xa = ({
  children: e,
  styleTarget: t,
  theme: n,
  videoElementSize: r
}) => d(fa, {
  target: t,
  children: d(ga, {
    theme: n,
    children: d(Aa, {
      videoElementSize: r,
      children: e
    })
  })
}), We = (e, t) => {
  const n = ht(t);
  ie(() => {
    n.current = t;
  }, [t]), ie(
    () => {
      const r = (o) => n.current(o);
      return document.addEventListener(e, r), () => {
        document.removeEventListener(e, r);
      };
    },
    [e]
    // Re-run if eventName
  );
}, La = (e) => {
  const [t, n] = P(), r = Ee((o) => {
    var i;
    n((i = o.detail) == null ? void 0 : i.size);
  }, [n]);
  return We(e, r), t;
}, Ra = {
  placeholderColor: "white",
  placeholderColorSuccess: "#00BFB2",
  instructionColor: "#F8FBFB",
  instructionColorSuccess: "#00BFB2",
  instructionTextColor: "#021B41;"
}, At = {
  colors: Ra
}, Da = (e) => e != null && e.theme ? {
  ...At,
  ...e.theme,
  colors: {
    ...At.colors,
    ...e.theme.colors
  }
} : At, Pa = 0.75, mn = (e, t) => {
  document.dispatchEvent(new CustomEvent(e, {
    detail: t
  }));
}, ut = class ut {
  constructor() {
    Ze(this, "lastDetails", {});
    Ze(this, "delayedTime", 0);
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
    this.isDetailChanged(t, n) && mn(t, n);
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
Ze(ut, "_instance");
let Kt = ut;
Kt.getInstance();
const nr = (e, t) => {
  mn(e, {
    instruction: t
  });
}, Ma = (e) => {
  mn(e, {
    animationEnd: !0
  });
}, Pe = (e, t) => Math.hypot(t.x - e.x, t.y - e.y), rr = (e, t, n) => {
  const r = (t.x - e.x) * n, o = (t.y - e.y) * n;
  return {
    x: e.x + r,
    y: e.y + o
  };
}, or = (e, t, n, r) => {
  const o = Pe(e, t);
  return n * r / o;
}, Ha = (e, t) => Math.min(e, t), Ua = ({
  height: e,
  width: t
}) => {
  const n = Ha(t, e) * Pa, r = (t - n) / 2, o = (e - n) / 2;
  return {
    shiftX: r,
    shiftY: o,
    width: n,
    height: n
  };
}, Ba = (e) => {
  const {
    height: t,
    shiftX: n,
    shiftY: r,
    width: o
  } = Ua(e);
  return {
    shiftX: n / e.width,
    shiftY: r / e.height,
    width: o / e.width,
    height: t / e.height
  };
};
class Fa {
  static async getVideoInputDeviceList() {
    return (await navigator.mediaDevices.enumerateDevices()).filter((n) => n.kind === "videoinput");
  }
}
const Wa = () => {
  const [e, t] = P(!1);
  return ie(() => {
    (async () => {
      (await Fa.getVideoInputDeviceList()).length > 1 && t(!0);
    })();
  }, []), e;
}, za = ({
  size: e
}) => d("svg", {
  fill: "none",
  height: e,
  viewBox: "0 0 52 52",
  width: e,
  xmlns: "http://www.w3.org/2000/svg",
  children: [d("path", {
    d: "M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z",
    fill: "#131313",
    fillOpacity: "0.3"
  }), d("circle", {
    cx: "17.5",
    cy: "24.5",
    fill: "white",
    r: "1.5"
  }), d("path", {
    d: "M15 17H16C19.5 17 23 21 23 29C22.5 29 21.5 29 20 29C20 29 20.25 33 19.5 34.5C18.75 36 16 36 16 36H15",
    stroke: "white",
    strokeWidth: "2"
  }), d("circle", {
    fill: "white",
    r: "1.5",
    transform: "matrix(-1 0 0 1 34.5 24.5)"
  }), d("path", {
    d: "M37 17H36C32.5 17 29 21 29 29C29.5 29 30.5 29 32 29C32 29 31.75 33 32.5 34.5C33.25 36 36 36 36 36H37",
    stroke: "white",
    strokeWidth: "2"
  })]
}), ja = ({
  size: e
}) => d("svg", {
  fill: "none",
  height: e,
  viewBox: "0 0 52 52",
  width: "52",
  xmlns: "http://www.w3.org/2000/svg",
  children: [d("circle", {
    cx: "26",
    cy: "26",
    fill: "#131313",
    fillOpacity: "0.3",
    r: "26"
  }), d("path", {
    d: "M18 26C18 25.4477 17.5523 25 17 25C16.4477 25 16 25.4477 16 26H18ZM34 26C34 26.5523 34.4477 27 35 27C35.5523 27 36 26.5523 36 26H34ZM18.3977 19.5032C18.0387 19.923 18.0879 20.5542 18.5076 20.9132C18.9273 21.2722 19.5586 21.2229 19.9176 20.8032L18.3977 19.5032ZM33.5961 32.504C33.9555 32.0846 33.9069 31.4533 33.4875 31.094C33.0681 30.7346 32.4368 30.7832 32.0775 31.2026L33.5961 32.504ZM33.8321 24.4453C33.5257 23.9858 32.9048 23.8616 32.4453 24.1679C31.9858 24.4743 31.8616 25.0952 32.1679 25.5547L33.8321 24.4453ZM35 28L34.1679 28.5547C34.3534 28.8329 34.6656 29 35 29C35.3344 29 35.6466 28.8329 35.8321 28.5547L35 28ZM37.8321 25.5547C38.1384 25.0952 38.0142 24.4743 37.5547 24.1679C37.0952 23.8616 36.4743 23.9858 36.1679 24.4453L37.8321 25.5547ZM14.1679 26.4453C13.8616 26.9048 13.9858 27.5257 14.4453 27.8321C14.9048 28.1384 15.5257 28.0142 15.8321 27.5547L14.1679 26.4453ZM17 24L17.8321 23.4453C17.6466 23.1671 17.3344 23 17 23C16.6656 23 16.3534 23.1671 16.1679 23.4453L17 24ZM18.1679 27.5547C18.4743 28.0142 19.0952 28.1384 19.5547 27.8321C20.0142 27.5257 20.1384 26.9048 19.8321 26.4453L18.1679 27.5547ZM26 34C21.5817 34 18 30.4183 18 26H16C16 31.5228 20.4772 36 26 36V34ZM26 18C30.4183 18 34 21.5817 34 26H36C36 20.4772 31.5228 16 26 16V18ZM19.9176 20.8032C21.3864 19.0859 23.5658 18 26 18V16C22.9568 16 20.2302 17.3606 18.3977 19.5032L19.9176 20.8032ZM32.0775 31.2026C30.6087 32.9165 28.4314 34 26 34V36C29.0398 36 31.7636 34.6424 33.5961 32.504L32.0775 31.2026ZM32.1679 25.5547L34.1679 28.5547L35.8321 27.4453L33.8321 24.4453L32.1679 25.5547ZM35.8321 28.5547L37.8321 25.5547L36.1679 24.4453L34.1679 27.4453L35.8321 28.5547ZM15.8321 27.5547L17.8321 24.5547L16.1679 23.4453L14.1679 26.4453L15.8321 27.5547ZM16.1679 24.5547L18.1679 27.5547L19.8321 26.4453L17.8321 23.4453L16.1679 24.5547Z",
    fill: "white"
  })]
}), Jr = M.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: ${(e) => e.$marginLeft ? `${e.$marginLeft}px` : 0};

  &:disabled {
    cursor: not-allowed;
  }
`, Va = ({
  marginLeft: e,
  size: t,
  ...n
}) => d(Jr, {
  $marginLeft: e,
  ...n,
  children: d(za, {
    size: t
  })
}), Ga = ({
  marginLeft: e,
  size: t,
  ...n
}) => d(Jr, {
  $marginLeft: e,
  ...n,
  children: d(ja, {
    size: t
  })
}), Za = M.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(e) => `${e.$padding}px`};
  z-index: 2;
`, Ya = ({
  customControlEvent: e,
  isSwitchCameraDisabled: t,
  videoElementSize: n
}) => {
  const r = Wa(), {
    buttonPadding: o,
    iconSize: i,
    marginLeft: a
  } = Ia(n), s = () => {
    nr(e, Dt.TOGGLE_MIRROR);
  };
  return d(Za, {
    $padding: o,
    children: [r && d(Ga, {
      disabled: t,
      onClick: () => {
        nr(e, Dt.SWITCH_CAMERA);
      },
      size: i
    }), d(Va, {
      marginLeft: r ? a : 0,
      onClick: s,
      size: i
    })]
  });
}, qa = "2.5s", Xa = "0.3s", Qa = "linear", Ka = ae`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
ae`
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    top: 50%;
    left: 50%;
  }
`;
ae`
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
ae`
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
const Ja = M.div`
  position: absolute;
  left: 50%;

  ${(e) => e.$cssTop ? `top: ${e.$cssTop}%;` : ""}
  ${(e) => e.$cssBottom ? `bottom: ${e.$cssBottom}%;` : ""}
    ${(e) => e.$isAnimating && pn`
      animation: ${Ka} ${Xa}
        ${Qa} both;
      animation-delay: ${qa};

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
`, es = M.div`
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
`, ts = ({
  children: e,
  cssBottom: t,
  cssTop: n,
  fontSize: r,
  isAnimating: o,
  isInCandidateSelection: i,
  isPortrait: a
}) => d(Ja, {
  $cssBottom: t,
  $cssTop: n,
  $isAnimating: o,
  $isPortrait: a,
  children: d(es, {
    $fontSize: r,
    $isInCandidateSelection: i,
    $wrap: e.length > $a,
    children: e
  })
}), ns = () => d("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: d("path", {
    d: "M2 240C2 108.556 108.556 2 240 2C371.444 2 478 108.556 478 240C478 371.444 371.444 478 240 478C108.556 478 2 371.444 2 240Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  })
}), rs = () => d("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: d("path", {
    d: "M38.9231 240C38.9231 108.23 129.248 2 240 2C350.752 2 441.077 108.23 441.077 240C441.077 371.77 350.752 478 240 478C129.248 478 38.9231 371.77 38.9231 240Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4"
  })
}), os = () => d("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: d("path", {
    clipRule: "evenodd",
    d: "M123.592 81.0326C143.203 50.4946 180.289 34 240 34C299.711 34 336.797 50.4946 356.408 81.0326C375.742 111.138 377.681 154.313 368.661 207.051C371.545 208.577 374.834 210.748 377.278 215.028C380.075 219.925 381.612 227.297 380.77 239.048C379.202 260.93 372.883 270.75 366.157 276.198C363.521 278.333 360.842 279.765 358.659 280.932C358.141 281.209 357.651 281.471 357.196 281.724C354.727 283.097 353.459 284.114 352.94 285.588C346.115 312.745 335.656 325.235 326.992 335.581C325.711 337.111 324.469 338.595 323.283 340.072C318.736 345.738 315.077 351.244 313.058 359.018C311.036 366.806 310.62 377.042 312.887 392.189C323.28 427.534 349.601 445.607 379.548 458.155C380.567 458.582 381.047 459.754 380.62 460.773C380.193 461.792 379.021 462.271 378.002 461.845C347.548 449.083 319.871 430.304 309.01 393.182L308.972 393.052L308.952 392.918C306.617 377.396 306.974 366.534 309.187 358.012C311.409 349.454 315.459 343.431 320.164 337.568C321.377 336.057 322.636 334.552 323.926 333.011C332.525 322.737 342.484 310.837 349.08 284.533L349.099 284.458L349.124 284.385C350.161 281.284 352.747 279.621 355.253 278.228C355.794 277.927 356.344 277.632 356.902 277.333C359.061 276.176 361.329 274.961 363.639 273.09C369.248 268.547 375.264 259.921 376.78 238.762C377.594 227.404 376.048 220.94 373.805 217.012C371.594 213.141 368.56 211.453 365.547 209.952L364.214 209.287L364.469 207.818C373.737 154.637 371.701 112.248 353.043 83.194C334.485 54.2962 299.065 38 240 38C180.935 38 145.516 54.2962 126.958 83.194C108.3 112.248 106.264 154.637 115.531 207.818L115.787 209.287L114.453 209.952C111.441 211.453 108.406 213.141 106.196 217.012C103.953 220.94 102.406 227.404 103.22 238.762C104.736 259.921 110.753 268.547 116.361 273.09C118.672 274.961 120.94 276.176 123.099 277.333C123.656 277.632 124.206 277.927 124.748 278.228C127.254 279.621 129.84 281.284 130.877 284.385L130.901 284.458L130.92 284.533C137.517 310.837 147.476 322.737 156.074 333.011C157.364 334.552 158.624 336.057 159.837 337.568C164.542 343.431 168.592 349.454 170.814 358.012C173.026 366.534 173.384 377.396 171.048 392.918L171.028 393.052L170.99 393.182C160.129 430.304 132.452 449.083 101.998 461.845C100.979 462.271 99.8075 461.792 99.3806 460.773C98.9537 459.754 99.4335 458.582 100.452 458.155C130.399 445.607 156.721 427.534 167.113 392.189C169.381 377.042 168.964 366.806 166.942 359.018C164.924 351.244 161.264 345.738 156.717 340.072C155.532 338.595 154.29 337.111 153.008 335.581C144.345 325.235 133.886 312.745 127.061 285.588C126.541 284.114 125.273 283.097 122.804 281.724C122.349 281.471 121.859 281.209 121.341 280.932C119.159 279.765 116.479 278.333 113.844 276.198C107.117 270.75 100.798 260.93 99.2303 239.048C98.3883 227.297 99.9259 219.925 102.722 215.028C105.166 210.748 108.455 208.577 111.339 207.051C102.319 154.313 104.259 111.138 123.592 81.0326Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })
}), is = () => d("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: d("rect", {
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
}), as = () => d("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: d("rect", {
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
}), ss = () => d("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: d("rect", {
    height: "476",
    rx: "14",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4",
    width: "476",
    x: "2",
    y: "2"
  })
}), cs = () => d("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: d("rect", {
    height: "476",
    rx: "2",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "4",
    width: "476",
    x: "2",
    y: "2"
  })
}), ls = () => d("svg", {
  fill: "none",
  height: "480",
  viewBox: "0 0 480 480",
  width: "480",
  xmlns: "http://www.w3.org/2000/svg",
  children: d("path", {
    clipRule: "evenodd",
    d: "M126.126 87.8654C147.739 56.7835 184.591 34.0001 239.665 34.0001C239.779 34.0001 239.891 34.0096 240 34.0279C240.109 34.0096 240.221 34.0001 240.335 34.0001C295.41 34.0001 332.261 56.7835 353.874 87.8654C375.428 118.862 381.724 157.957 376.086 190.544C373.539 205.262 371.039 233.823 376.056 253.971C380.828 273.135 387.879 290.154 393.431 303.54L393.491 303.685C396.23 310.287 398.627 316.064 400.16 320.726C400.933 323.077 401.511 325.214 401.797 327.079C402.073 328.879 402.11 330.618 401.637 332.107C399.79 339.478 396.615 344.943 392.398 348.881C388.174 352.825 383.031 355.122 377.446 356.355C366.388 358.799 353.231 357.133 341.237 355.551C340.93 355.51 340.623 355.47 340.317 355.43C334.586 354.672 329.126 353.951 324.151 353.668C318.894 353.368 314.374 353.574 310.799 354.649C307.298 355.702 304.789 357.558 303.304 360.596C301.785 363.704 301.203 368.322 302.207 375.153C309.297 399.432 323.779 413.44 341.432 422.745C356.457 430.665 373.692 435.144 390.741 439.575C393.916 440.401 397.085 441.224 400.232 442.068C401.298 442.354 401.931 443.451 401.645 444.518C401.359 445.585 400.262 446.218 399.196 445.932C396.115 445.106 392.991 444.294 389.842 443.477C372.804 439.052 355.041 434.44 339.567 426.283C321.093 416.546 305.757 401.713 298.328 376.139L298.29 376.01L298.271 375.877C297.181 368.587 297.678 362.998 299.71 358.839C301.787 354.59 305.326 352.119 309.647 350.819C313.895 349.541 318.973 349.366 324.378 349.674C329.508 349.966 335.107 350.706 340.788 351.457C341.112 351.5 341.436 351.543 341.76 351.585C353.925 353.19 366.342 354.713 376.583 352.45C381.65 351.33 386.088 349.3 389.668 345.957C393.241 342.621 396.083 337.86 397.773 331.072L397.791 330.998L397.815 330.925C398.022 330.302 398.087 329.272 397.843 327.686C397.605 326.133 397.102 324.232 396.36 321.976C394.875 317.458 392.525 311.794 389.74 305.081L389.737 305.073C384.19 291.701 377.028 274.428 372.174 254.937C366.952 233.964 369.571 204.733 372.144 189.862C377.623 158.197 371.48 120.191 350.59 90.149C329.759 60.1924 294.162 38.0001 240.335 38.0001C240.221 38.0001 240.109 37.9905 240 37.9722C239.891 37.9905 239.779 38.0001 239.665 38.0001C185.838 38.0001 150.241 60.1924 129.41 90.149C108.52 120.191 102.377 158.197 107.856 189.862C110.429 204.733 113.048 233.964 107.826 254.937C102.972 274.428 95.8101 291.701 90.2633 305.073L90.2607 305.079C87.4756 311.793 85.1256 317.458 83.6398 321.976C82.8977 324.232 82.3951 326.133 82.1567 327.686C81.9133 329.272 81.9778 330.302 82.1847 330.925L82.2088 330.998L82.2273 331.072C83.9176 337.86 86.7592 342.621 90.3324 345.957C93.9121 349.3 98.3505 351.33 103.417 352.45C113.658 354.713 126.075 353.19 138.24 351.585C138.564 351.543 138.888 351.5 139.212 351.457C144.893 350.706 150.492 349.966 155.622 349.674C161.027 349.366 166.105 349.541 170.353 350.819C174.674 352.119 178.213 354.59 180.29 358.839C182.323 362.998 182.819 368.587 181.73 375.877L181.71 376.01L181.672 376.139C174.243 401.713 158.907 416.546 140.433 426.283C124.959 434.44 107.196 439.052 90.1584 443.477C87.0093 444.294 83.8851 445.106 80.8046 445.932C79.7377 446.218 78.6409 445.585 78.3548 444.518C78.0687 443.451 78.7017 442.354 79.7685 442.068C82.9154 441.224 86.0842 440.401 89.2594 439.575C106.308 435.144 123.543 430.665 138.568 422.745C156.221 413.44 170.703 399.432 177.793 375.153C178.797 368.322 178.215 363.704 176.696 360.596C175.211 357.558 172.702 355.702 169.201 354.649C165.626 353.574 161.106 353.368 155.849 353.668C150.874 353.951 145.414 354.672 139.683 355.43C139.377 355.47 139.07 355.51 138.763 355.551C126.769 357.133 113.613 358.799 102.554 356.355C96.9695 355.122 91.8259 352.825 87.6024 348.881C83.3855 344.943 80.2095 339.478 78.3628 332.107C77.8896 330.618 77.9268 328.879 78.203 327.079C78.4892 325.214 79.0667 323.077 79.84 320.726C81.3732 316.064 83.7701 310.286 86.5089 303.684L86.5686 303.54C92.1215 290.154 99.1722 273.135 103.944 253.971C108.961 233.823 106.461 205.262 103.914 190.544C98.2759 157.957 104.572 118.862 126.126 87.8654Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })
}), us = M.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`, eo = ({
  backdropColor: e,
  children: t
}) => d(us, {
  children: d("svg", {
    height: "100%",
    width: "100%",
    children: [d("defs", {
      children: d("mask", {
        id: "mask",
        children: [d("rect", {
          fill: "#fff",
          height: "100%",
          width: "100%"
        }), t]
      })
    }), d("rect", {
      fill: e,
      height: "100%",
      mask: "url(#mask)",
      width: "100%"
    })]
  })
}), fs = M.div`
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
`, ds = ({
  children: e,
  isInCandidateSelection: t,
  placeholderRectangle: n
}) => d(fs, {
  $isInCandidateSelection: t,
  $placeholderRectangle: n,
  children: e
}), hs = {
  [V.CIRCLE_SOLID]: d(ns, {}),
  [V.ELLIPSE_SOLID]: d(rs, {}),
  [V.MAN_SOLID]: d(os, {}),
  [V.WOMAN_SOLID]: d(ls, {}),
  [V.SQUARE_ROUNDED_DASH]: d(as, {}),
  [V.SQUARE_ROUNDED_SOLID]: d(ss, {}),
  [V.SQUARE_DASH]: d(is, {}),
  [V.SQUARE_SOLID]: d(cs, {})
}, _s = ({
  backdropColor: e,
  icon: t,
  isBackdrop: n,
  placeholderRectangle: r,
  ...o
}) => d(U, {
  children: [n && d(eo, {
    backdropColor: e,
    children: d("rect", {
      fill: "#000",
      height: `${r.height * 100}%`,
      rx: "50%",
      width: `${r.width * 100}%`,
      x: `${r.shiftX * 100}%`,
      y: `${r.shiftY * 100}%`
    })
  }), d(ds, {
    placeholderRectangle: r,
    ...o,
    children: hs[t]
  })]
}), ps = M.canvas`
  transform: ${(e) => e.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, ms = (e) => {
  const {
    bottomLeft: t,
    bottomRight: n,
    topLeft: r,
    topRight: o
  } = e, i = Pe(r, o), a = Pe(o, n), s = Pe(t, n), l = Pe(r, t);
  return Math.min(i, a, s, l);
}, gs = (e) => {
  const t = e.getContext("2d");
  t && t.clearRect(0, 0, t.canvas.width, t.canvas.height);
}, ys = ({
  cameraResolution: e,
  isImageMirror: t
}) => {
  const n = ht(null), r = ma(), [o, i] = P(), a = Ee((s) => {
    var l;
    i((l = s == null ? void 0 : s.detail) == null ? void 0 : l.detectedObject);
  }, [i]);
  return We(Cr.DETECTED_DOCUMENT_CHANGED, a), ie(() => {
    if (!n.current)
      return;
    const s = (u, f, c, _) => {
      var v;
      const h = or(f, u, _, Kn), g = or(f, c, _, Kn), w = rr(f, u, h), S = rr(f, c, g), m = (v = n == null ? void 0 : n.current) == null ? void 0 : v.getContext("2d");
      m && (m.beginPath(), m.lineWidth = Sa, m.strokeStyle = r.colors.placeholderColor, m.moveTo(w.x, w.y), m.arcTo(f.x, f.y, S.x, S.y, Ca), m.lineTo(S.x, S.y), m.stroke());
    }, l = (u) => {
      if (!u)
        return;
      const {
        bottomLeft: f,
        bottomRight: c,
        topLeft: _,
        topRight: h
      } = u, g = ms(u);
      s(f, _, h, g), s(_, h, c, g), s(h, c, f, g), s(c, f, _, g);
    };
    n.current.width = e.width, n.current.height = e.height, gs(n.current), l(o);
  }, [e, o, r.colors.placeholderColor]), d(ps, {
    ref: n,
    $isImageMirror: t
  });
}, vs = () => {
  const [e, t] = P(), [n, r] = P(!1), o = Ee((l) => {
    var f, c;
    t((f = l == null ? void 0 : l.detail) == null ? void 0 : f.cameraResolution);
    const u = (c = l == null ? void 0 : l.detail) == null ? void 0 : c.isMirroring;
    u !== void 0 && r(u);
  }, [t]);
  We(Be.CAMERA_PROPS_CHANGED, o);
  const [i, a] = P(
    W.FACE_NOT_PRESENT
    // FIXME Default instruction should not be here
  ), s = Ee((l) => {
    var u;
    a((u = l == null ? void 0 : l.detail) == null ? void 0 : u.instructionCode);
  }, [a]);
  return We(Be.INSTRUCTION_CHANGED, s), {
    cameraResolution: e,
    instructionCode: i,
    isMirroring: n
  };
}, Cs = () => {
  const [e, t] = P(st.NEUTRAL), [n, r] = P(ne.LOADING), [o, i] = P(), a = Ee((s) => {
    const {
      error: l,
      phase: u,
      state: f
    } = s.detail || {};
    u && t(u), f && r(f), l && i(l);
  }, [t, r, i]);
  return We(on.STATUS_CHANGED, a), {
    smilePhase: e,
    smileState: n,
    smileError: o
  };
}, ir = ".3s", Ss = ".2s", ws = ".8s", ar = ".4s", sr = ".4s", Es = ".5s", bs = "1.5s", $s = 2e3, cr = ae`
0%, 100% {
    transform: scale(1);
}
50% {
    transform: scale(2);
}
`, to = ae`
0%, 100% {
    transform: scale(1,1);
    opacity: 1;
}
50% {
    transform: scale(1,0.1);
    opacity: 0.5;
}
`, lr = ae`
0% {
    stroke-dashoffset: 100;
}
100% {
    stroke-dashoffset: 200;
}
`, ks = ae`
 from {
    opacity: 1;
}
to {
    opacity: 0;
}
`, Is = (e, t) => {
  const [n, r] = P(!1);
  return ie(() => {
    t === st.SMILE && r(!0);
    const o = setTimeout(() => {
      r(!1);
    }, $s);
    return () => clearTimeout(o);
  }, [t]), t === st.SMILE && e === Ce.CANDIDATE_SELECTION ? Ce.SMILE_CANDIDATE_SELECTION : n ? Ce.SMILE : e;
}, Ns = M.div`
  color: ${(e) => e.theme.colors.instructionTextColor};
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`, Os = ({
  svgSize: e
}) => d(Ns, {
  children: d("svg", {
    fill: "none",
    height: e,
    viewBox: "0 0 48 48",
    width: e,
    xmlns: "http://www.w3.org/2000/svg",
    children: [d("path", {
      d: "M30.9229 9.75026C30.9229 12.3736 28.7533 14.5002 26.0767 14.5002C23.4003 14.5002 21.2307 12.3736 21.2307 9.75026C21.2307 7.12664 23.4003 5 26.0767 5C28.7533 5 30.9229 7.12664 30.9229 9.75026Z",
      fill: "currentColor"
    }), d("path", {
      d: "M40.6155 15.8556C40.6155 18.1044 38.7559 19.9273 36.4618 19.9273C34.1675 19.9273 32.3079 18.1044 32.3079 15.8556C32.3079 13.607 34.1675 11.7842 36.4618 11.7842C38.7559 11.7842 40.6155 13.607 40.6155 15.8556Z",
      fill: "currentColor"
    }), d("path", {
      d: "M42 27.3921C42 29.2659 40.4502 30.785 38.5386 30.785C36.6267 30.785 35.0769 29.2659 35.0769 27.3921C35.0769 25.5181 36.6267 23.999 38.5386 23.999C40.4502 23.999 42 25.5181 42 27.3921Z",
      fill: "currentColor"
    }), d("path", {
      d: "M35.0766 37.5712C35.0766 39.0704 33.837 40.2858 32.3075 40.2858C30.7779 40.2858 29.5383 39.0704 29.5383 37.5712C29.5383 36.0723 30.7779 34.8569 32.3075 34.8569C33.837 34.8569 35.0766 36.0723 35.0766 37.5712Z",
      fill: "currentColor"
    }), d("path", {
      d: "M22.6154 40.2858C22.6154 41.7848 21.3756 43.0001 19.846 43.0001C18.3168 43.0001 17.0769 41.7848 17.0769 40.2858C17.0769 38.7866 18.3168 37.5713 19.846 37.5713C21.3756 37.5713 22.6154 38.7866 22.6154 40.2858Z",
      fill: "currentColor"
    }), d("path", {
      d: "M11.5382 32.8216C11.5382 33.9457 10.6085 34.8573 9.46137 34.8573C8.31426 34.8573 7.38452 33.9457 7.38452 32.8216C7.38452 31.6972 8.31426 30.7856 9.46137 30.7856C10.6085 30.7856 11.5382 31.6972 11.5382 32.8216Z",
      fill: "currentColor"
    }), d("path", {
      d: "M8.76913 21.2849C8.76913 22.0345 8.14932 22.642 7.38456 22.642C6.6198 22.642 6 22.0345 6 21.2849C6 20.5353 6.61981 19.9277 7.38456 19.9277C8.14933 19.9277 8.76913 20.5353 8.76913 21.2849Z",
      fill: "currentColor"
    }), d("path", {
      d: "M15.6927 11.7844C15.6927 12.534 15.0729 13.1415 14.3081 13.1415C13.5434 13.1415 12.9236 12.534 12.9236 11.7844C12.9236 11.0348 13.5434 10.4272 14.3081 10.4272C15.0729 10.4272 15.6927 11.0348 15.6927 11.7844Z",
      fill: "currentColor"
    })]
  })
}), Ts = ({
  backdropColor: e,
  fontSize: t,
  smileState: n,
  smileStateInstructions: r
}) => {
  const o = n === ne.ERROR;
  return !n || o || !r[n].visible ? null : n === ne.DONE ? d(U, {
    children: [d(eo, {
      backdropColor: e
    }), d(Qt, {
      fontSize: t,
      isCameraReady: !0,
      text: r[n].text
    })]
  }) : d(Qt, {
    fontSize: t,
    Icon: Os,
    isCameraReady: !0,
    text: r[n].text
  });
}, As = M.div`
  position: absolute;
  top: ${(e) => e.$initialPosition.shiftY * 100}%;
  bottom: ${(e) => (1 - e.$initialPosition.shiftY - e.$initialPosition.height) * 100}%;
  left: ${(e) => e.$initialPosition.shiftX * 100}%;
  right: ${(e) => (1 - e.$initialPosition.shiftX - e.$initialPosition.width) * 100}%;
  animation: ${ks} ${Es} ${bs} ease-in-out;
  animation-fill-mode: forwards;

  #left-mouth {
    fill: none;
    stroke: #ffffff;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: ${lr} ${ar} ${sr} forwards;
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
    animation: ${lr} ${ar} ${sr} forwards;
  }
  #left-eye {
    transform-origin: 86.8px 96px;
    fill: #ffffff;
    animation: ${cr} ${ir} forwards;
  }
  #right-eye {
    transform-origin: 173.2px 96px;
    fill: #ffffff;
    animation:
      ${cr} ${ir} forwards,
      ${to} ${Ss} ${ws} forwards;
  }
`, xs = ({
  handleEyeBlinkAnimationEnd: e,
  initialPosition: t
}) => d(As, {
  $initialPosition: t,
  onAnimationEnd: (r) => {
    to.name === r.animationName && e();
  },
  children: d("svg", {
    viewBox: "0 0 260 260",
    children: [d("circle", {
      cx: "86.8",
      cy: "96",
      id: "left-eye",
      r: "9.6"
    }), d("circle", {
      cx: "173.2",
      cy: "96",
      id: "right-eye",
      r: "9.6"
    }), d("path", {
      d: "M62.8,156.3c0,0,20.4,35.4,66.6,35.4",
      id: "left-mouth"
    }), d("path", {
      d: "M42.8,156.3c0,0,20.4,35.4,66.6,35.4",
      id: "right-mouth"
    })]
  })
}), Ls = ({
  backdropColor: e,
  instructions: t,
  placeholderIcon: n,
  showCameraButtons: r,
  smileStateInstructions: o,
  videoElementSize: i
}) => {
  const {
    cameraResolution: a,
    instructionCode: s,
    isMirroring: l
  } = vs(), u = Qr(i), {
    smileError: f,
    smilePhase: c,
    smileState: _
  } = Cs(), h = Is(s, c), g = s === Ce.CANDIDATE_SELECTION, w = n === V.CIRCLE_SOLID, S = c === st.SMILE;
  if (_ === ne.ERROR)
    return d(Kr, {
      fontSize: u,
      text: f == null ? void 0 : f.message
    });
  if ((_ === ne.RUNNING || _ === ne.WAITING) && a) {
    const m = Ba(a);
    return d(U, {
      children: [!S && d(ys, {
        cameraResolution: a,
        isImageMirror: l
      }), d(_s, {
        backdropColor: e,
        icon: n,
        isBackdrop: w,
        isInCandidateSelection: g,
        placeholderRectangle: m
      }), S && d(xs, {
        handleEyeBlinkAnimationEnd: () => {
          Ma(on.ANIMATION_END);
        },
        initialPosition: m
      }), h && d(ts, {
        cssBottom: (m.height + m.shiftY) * 100,
        fontSize: u,
        isAnimating: !1,
        isInCandidateSelection: g,
        isPortrait: a.width < a.height,
        children: t[h]
      }), r && d(Ya, {
        customControlEvent: Be.CONTROL,
        isSwitchCameraDisabled: g,
        videoElementSize: i
      })]
    });
  }
  return d(Ts, {
    backdropColor: e,
    fontSize: u,
    smileState: _,
    smileStateInstructions: o
  });
}, Rs = (e) => {
  var i, a;
  const t = {
    ...Ea,
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
  }, r = (e == null ? void 0 : e.backdropColor) ?? ba, o = (e == null ? void 0 : e.showCameraButtons) ?? !1;
  return {
    backdropColor: r,
    smileInstructions: t,
    smileStateInstructions: n,
    showCameraButtons: o
  };
}, Ds = ({
  props: e
}) => {
  const {
    backdropColor: t,
    showCameraButtons: n,
    smileInstructions: r,
    smileStateInstructions: o
  } = Rs(e), i = La(Be.VIDEO_ELEMENT_SIZE), a = Da(e);
  return d(xa, {
    styleTarget: e == null ? void 0 : e.styleTarget,
    theme: a,
    videoElementSize: i,
    children: d(Ls, {
      backdropColor: t,
      instructions: r,
      placeholderIcon: V.CIRCLE_SOLID,
      showCameraButtons: n,
      smileStateInstructions: o,
      videoElementSize: i
    })
  });
};
wo(Ds, "x-dot-smile-liveness-ui", ["props"]);
