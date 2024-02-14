var Vg = Object.defineProperty;
var Eg = (t, o, e) => o in t ? Vg(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e;
var Q = (t, o, e) => (Eg(t, typeof o != "symbol" ? o + "" : o, e), e);
var kn, S, ja, Ma, yt, Tr, Ua, uo, Ja, Sn = {}, Qa = [], Pg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Si = Array.isArray;
function nt(t, o) {
  for (var e in o)
    t[e] = o[e];
  return t;
}
function za(t) {
  var o = t.parentNode;
  o && o.removeChild(t);
}
function fe(t, o, e) {
  var i, n, r, a = {};
  for (r in o)
    r == "key" ? i = o[r] : r == "ref" ? n = o[r] : a[r] = o[r];
  if (arguments.length > 823 * -5 + -1 * 5309 + 9426 && (a.children = arguments.length > -7497 * -1 + -8956 + 731 * 2 ? kn.call(arguments, 2 * -4314 + 7 * 359 + -1 * -6117) : e), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      void (4090 + -7541 * 1 + 3451) === a[r] && (a[r] = t.defaultProps[r]);
  return bn(t, a, i, n, null);
}
function bn(t, o, e, i, n) {
  var r = {};
  r.type = t, r.props = o, r.key = e, r.ref = i, r.__k = null, r.__ = null, r.__b = 0, r.__e = null, r.__d = void (-6178 + -8598 * -1 + 5 * -484), r.__c = null, r.constructor = void (-9018 + 3874 * -2 + 16766), r.__v = n ?? ++ja, r.__i = -(-1 * -6933 + -2368 + -4564), r.__u = 0;
  var a = r;
  return n == null && S.vnode != null && S.vnode(a), a;
}
function Yg() {
  var t = {};
  return t.current = null, t;
}
function Ne(t) {
  return t.children;
}
function We(t, o) {
  this.props = t, this.context = o;
}
function Jt(t, o) {
  if (o == null)
    return t.__ ? Jt(t.__, t.__i + (4951 * 1 + -8098 * 1 + 3148)) : null;
  for (var e; o < t.__k.length; o++)
    if ((e = t.__k[o]) != null && e.__e != null)
      return e.__e;
  return typeof t.type == "function" ? Jt(t) : null;
}
function $a(t) {
  var o, e;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, o = -2540 + -155 * -34 + -2730; o < t.__k.length; o++)
      if ((e = t.__k[o]) != null && e.__e != null) {
        t.__e = t.__c.base = e.__e;
        break;
      }
    return $a(t);
  }
}
function Co(t) {
  (!t.__d && (t.__d = !(-3561 * 1 + -2510 + 6071)) && yt.push(t) && !Ci.__r++ || Tr !== S.debounceRendering) && ((Tr = S.debounceRendering) || Ua)(Ci);
}
function Ci() {
  var t, o, e, i, n, r, a, s, g;
  for (yt.sort(uo); t = yt.shift(); )
    t.__d && (o = yt.length, i = void 0, r = (n = (e = t).__v).__e, s = [], g = [], (a = e.__P) && ((i = nt({}, n)).__v = n.__v + (-3464 + 63 * 55), S.vnode && S.vnode(i), Do(a, i, n, e.__n, void (-2163 + 30 * 305 + -6987) !== a.ownerSVGElement, 2922 + -7011 * -1 + 9901 * -1 & n.__u ? [r] : null, s, r ?? Jt(n), !!(32 & n.__u), g), i.__.__k[i.__i] = i, es(s, i, g), i.__e != r && $a(i)), yt.length > o && yt.sort(uo));
  Ci.__r = -7785 + 1 * -8317 + 83 * 194;
}
function qa(t, o, e, i, n, r, a, s, g, x, C) {
  var l, f, p, y, O, E = i && i.__k || Qa, Z = o.length;
  for (e.__d = g, Lg(e, o, E), g = e.__d, l = 0; l < Z; l++)
    (p = e.__k[l]) != null && typeof p != "boolean" && typeof p != "function" && (f = -(1 * 5987 + 9 * -751 + 1 * 773) === p.__i ? Sn : E[p.__i] || Sn, p.__i = l, Do(t, p, f, n, r, a, s, g, x, C), y = p.__e, p.ref && f.ref != p.ref && (f.ref && Xo(f.ref, null, p), C.push(p.ref, p.__c || y, p)), O == null && y != null && (O = y), 8 * -3461 + 4 * 31586 + 16 * -2070 & p.__u || f.__k === p.__k ? g = _a(p, g, t) : typeof p.type == "function" && void (1 * 1809 + 2366 + 1 * -4175) !== p.__d ? g = p.__d : y && (g = y.nextSibling), p.__d = void 0, p.__u &= -(-1 * -173599 + -1 * -308287 + 97 * -2941));
  e.__d = g, e.__e = O;
}
function Lg(t, o, e) {
  var i, n, r, a, s, g = o.length, x = e.length, C = x, l = -1 * 5297 + -753 * -3 + 3038;
  for (t.__k = [], i = -2 * -2699 + 3802 + -1150 * 8; i < g; i++)
    (n = t.__k[i] = (n = o[i]) == null || typeof n == "boolean" || typeof n == "function" ? null : typeof n == "string" || typeof n == "number" || typeof n == "bigint" || n.constructor == String ? bn(null, n, null, null, n) : Si(n) ? bn(Ne, { children: n }, null, null, null) : void (7802 + 2 * -3901) === n.constructor && n.__b > 0 ? bn(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v) : n) != null ? (n.__ = t, n.__b = t.__b + (-3956 + 9666 * 1 + -33 * 173), s = Ng(n, e, a = i + l, C), n.__i = s, r = null, -(-1470 + -29 * 299 + -11 * -922) !== s && (C--, (r = e[s]) && (r.__u |= 122 * 389 + 187506 + -1367 * 76)), r == null || r.__v === null ? (-(2 * 574 + -4671 * -1 + -5818) == s && l--, typeof n.type != "function" && (n.__u |= -13304 * -8 + -73489 + -2963 * -11)) : s !== a && (s === a + (-427 + -7607 * -1 + -1 * 7179) ? l++ : s > a ? C > g - a ? l += s - a : l-- : l = s < a && s == a - (9218 + 1 * 9829 + 2 * -9523) ? s - a : 9 * 372 + -61 * -11 + 4019 * -1, s !== i + l && (n.__u |= -431 * 166 + 6262 * 10 + 74462))) : (r = e[i]) && r.key == null && r.__e && (r.__e == t.__d && (t.__d = Jt(r)), Ao(r, r, !(1 * 1567 + 2137 * 2 + -40 * 146)), e[i] = null, C--);
  if (C)
    for (i = 1 * 8986 + 2361 + -7 * 1621; i < x; i++)
      (r = e[i]) != null && -1 * -3301 + -74 * 9 + 17 * -155 == (-1 * -14849 + 67050 + 49173 & r.__u) && (r.__e == t.__d && (t.__d = Jt(r)), Ao(r, r));
}
function _a(t, o, e) {
  var i, n;
  if (typeof t.type == "function") {
    for (i = t.__k, n = 0; i && n < i.length; n++)
      i[n] && (i[n].__ = t, o = _a(i[n], o, e));
    return o;
  }
  return t.__e != o && (e.insertBefore(t.__e, o || null), o = t.__e), o && o.nextSibling;
}
function it(t, o) {
  return o = o || [], t == null || typeof t == "boolean" || (Si(t) ? t.some(function(e) {
    it(e, o);
  }) : o.push(t)), o;
}
function Ng(t, o, e, i) {
  var n = t.key, r = t.type, a = e - (1055 * 8 + -1 * -2007 + -10446), s = e + (183 * 23 + -4094 + -114), g = o[e];
  if (g === null || g && n == g.key && r === g.type)
    return e;
  if (i > (g != null && !(131072 & g.__u) ? 47 * 106 + 9310 + -14291 : 1207 * -2 + -809 * 7 + -197 * -41))
    for (; a >= -4 * 814 + -7249 + -5 * -2101 || s < o.length; ) {
      if (a >= 1 * 5314 + 968 + -6282) {
        if ((g = o[a]) && 8265 + 3451 * -2 + -1363 == (267084 + 37 * -3676 & g.__u) && n == g.key && r === g.type)
          return a;
        a--;
      }
      if (s < o.length) {
        if ((g = o[s]) && 7241 + 2 * 2314 + -11869 == (-37 * 4916 + 1 * 31916 + 281048 & g.__u) && n == g.key && r === g.type)
          return s;
        s++;
      }
    }
  return -1;
}
function Fr(t, o, e) {
  o[9 * -659 + -6574 + 12505] === "-" ? t.setProperty(o, e ?? "") : t[o] = e == null ? "" : typeof e != "number" || Pg.test(o) ? e : e + "px";
}
function Xn(t, o, e, i, n) {
  var r;
  e:
    if (o === "style")
      if (typeof e == "string")
        t.style.cssText = e;
      else {
        if (typeof i == "string" && (t.style.cssText = i = ""), i)
          for (o in i)
            e && o in e || Fr(t.style, o, "");
        if (e)
          for (o in e)
            i && e[o] === i[o] || Fr(t.style, o, e[o]);
      }
    else if (o[324 + 162 * -2] === "o" && o[762 + -1843 * 2 + 225 * 13] === "n")
      r = o !== (o = o.replace(/(PointerCapture)$|Capture$/, "$1")), o = o.toLowerCase() in t ? o.toLowerCase().slice(2) : o.slice(-131 * 1 + 6124 + 3 * -1997), t.l || (t.l = {}), t.l[o + r] = e, e ? i ? e.u = i.u : (e.u = Date.now(), t.addEventListener(o, r ? Xr : Dr, r)) : t.removeEventListener(o, r ? Xr : Dr, r);
    else {
      if (n)
        o = o.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (o !== "width" && o !== "height" && o !== "href" && o !== "list" && o !== "form" && o !== "tabIndex" && o !== "download" && o !== "rowSpan" && o !== "colSpan" && o !== "role" && o in t)
        try {
          t[o] = e ?? "";
          break e;
        } catch {
        }
      typeof e == "function" || (e == null || !(-101 * -29 + 6793 + -9721) === e && o[2053 + -3 * 683] !== "-" ? t.removeAttribute(o) : t.setAttribute(o, e));
    }
}
function Dr(t) {
  var o = this.l[t.type + !1];
  if (t.t) {
    if (t.t <= o.u)
      return;
  } else
    t.t = Date.now();
  return o(S.event ? S.event(t) : t);
}
function Xr(t) {
  return this.l[t.type + !(-2654 * -2 + 746 + -2 * 3027)](S.event ? S.event(t) : t);
}
function Do(t, o, e, i, n, r, a, s, g, x) {
  var C, l, f, p, y, O, E, Z, G, L, J, D, F, k, q, z = o.type;
  if (void (-1029 + 2 * -2701 + 59 * 109) !== o.constructor)
    return null;
  5241 * -1 + -4 * 457 + 3 * 2399 & e.__u && (g = !!(-121 * -22 + -4379 + 1749 & e.__u), r = [s = o.__e = e.__e]), (C = S.__b) && C(o);
  e:
    if (typeof z == "function")
      try {
        if (Z = o.props, G = (C = z.contextType) && i[C.__c], L = C ? G ? G.props.value : C.__ : i, e.__c ? E = (l = o.__c = e.__c).__ = l.__E : ("prototype" in z && z.prototype.render ? o.__c = l = new z(Z, L) : (o.__c = l = new We(Z, L), l.constructor = z, l.render = Fg), G && G.sub(l), l.props = Z, l.state || (l.state = {}), l.context = L, l.__n = i, f = l.__d = !(3 * -245 + 76 * -19 + -2179 * -1), l.__h = [], l._sb = []), l.__s == null && (l.__s = l.state), z.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = nt({}, l.__s)), nt(l.__s, z.getDerivedStateFromProps(Z, l.__s))), p = l.props, y = l.state, l.__v = o, f)
          z.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (z.getDerivedStateFromProps == null && Z !== p && l.componentWillReceiveProps != null && l.componentWillReceiveProps(Z, L), !l.__e && (l.shouldComponentUpdate != null && l.shouldComponentUpdate(Z, l.__s, L) === !1 || o.__v === e.__v)) {
            for (o.__v !== e.__v && (l.props = Z, l.state = l.__s, l.__d = !1), o.__e = e.__e, o.__k = e.__k, o.__k.forEach(function($) {
              $ && ($.__ = o);
            }), J = -4637 + 6495 * -1 + -1012 * -11; J < l._sb.length; J++)
              l.__h.push(l._sb[J]);
            l._sb = [], l.__h.length && a.push(l);
            break e;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(Z, l.__s, L), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(p, y, O);
          });
        }
        if (l.context = L, l.props = Z, l.__P = t, l.__e = !(-8797 * -1 + 1979 + -431 * 25), D = S.__r, F = -5 * -1611 + 3166 + -229 * 49, "prototype" in z && z.prototype.render) {
          for (l.state = l.__s, l.__d = !(-17323 + 4331 * 4), D && D(o), C = l.render(l.props, l.state, l.context), k = 1 * 6243 + -2211 + 8 * -504; k < l._sb.length; k++)
            l.__h.push(l._sb[k]);
          l._sb = [];
        } else
          do
            l.__d = !(-1 * -515 + -1 * -5077 + -5591), D && D(o), C = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++F < 4 * -1009 + -389 * 7 + -128 * -53);
        l.state = l.__s, l.getChildContext != null && (i = nt(nt({}, i), l.getChildContext())), f || l.getSnapshotBeforeUpdate == null || (O = l.getSnapshotBeforeUpdate(p, y)), qa(t, Si(q = C != null && C.type === Ne && C.key == null ? C.props.children : C) ? q : [q], o, e, i, n, r, a, s, g, x), l.base = o.__e, o.__u &= -(-4865 + 1 * 5026), l.__h.length && a.push(l), E && (l.__E = l.__ = null);
      } catch ($) {
        o.__v = null, g || r != null ? (o.__e = s, o.__u |= g ? -3274 * -2 + -151 * 13 + -4425 : 12 * 212 + -7888 + 5376, r[r.indexOf(s)] = null) : (o.__e = e.__e, o.__k = e.__k), S.__e($, o, e);
      }
    else
      r == null && o.__v === e.__v ? (o.__k = e.__k, o.__e = e.__e) : o.__e = Tg(e.__e, o, e, i, n, r, a, g, x);
  (C = S.diffed) && C(o);
}
function es(t, o, e) {
  o.__d = void 0;
  for (var i = -3128 + -4 * 661 + 5772; i < e.length; i++)
    Xo(e[i], e[++i], e[++i]);
  S.__c && S.__c(o, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      S.__e(r, n.__v);
    }
  });
}
function Tg(t, o, e, i, n, r, a, s, g) {
  var x, C, l, f, p, y, O, E = e.props, Z = o.props, G = o.type;
  if (G === "svg" && (n = !(4547 + 29 * -283 + -3660 * -1)), r != null) {
    for (x = 123 * -3 + -1452 + 1821 * 1; x < r.length; x++)
      if ((p = r[x]) && "setAttribute" in p == !!G && (G ? p.localName === G : 4269 + -15 * 100 + 6 * -461 === p.nodeType)) {
        t = p, r[x] = null;
        break;
      }
  }
  if (t == null) {
    if (G === null)
      return document.createTextNode(Z);
    t = n ? document.createElementNS("http://www.w3.org/2000/svg", G) : document.createElement(G, Z.is && Z), r = null, s = !(-199 * -49 + -2556 + 22 * -327);
  }
  if (G === null)
    E === Z || s && t.data === Z || (t.data = Z);
  else {
    if (r = r && kn.call(t.childNodes), E = e.props || Sn, !s && r != null)
      for (E = {}, x = 0; x < t.attributes.length; x++)
        E[(p = t.attributes[x]).name] = p.value;
    for (x in E)
      p = E[x], x == "children" || (x == "dangerouslySetInnerHTML" ? l = p : x === "key" || x in Z || Xn(t, x, null, p, n));
    for (x in Z)
      p = Z[x], x == "children" ? f = p : x == "dangerouslySetInnerHTML" ? C = p : x == "value" ? y = p : x == "checked" ? O = p : x === "key" || s && typeof p != "function" || E[x] === p || Xn(t, x, p, E[x], n);
    if (C)
      s || l && (C.__html === l.__html || C.__html === t.innerHTML) || (t.innerHTML = C.__html), o.__k = [];
    else if (l && (t.innerHTML = ""), qa(t, Si(f) ? f : [f], o, e, i, n && G !== "foreignObject", r, a, r ? r[3804 + -12 * 317] : e.__k && Jt(e, 1 * 4374 + -15 * 503 + 3171), s, g), r != null)
      for (x = r.length; x--; )
        r[x] != null && za(r[x]);
    s || (x = "value", void (9098 + -8 * 1215 + 311 * 2) !== y && (y !== t[x] || G === "progress" && !y || G === "option" && y !== E[x]) && Xn(t, x, y, E[x], !(-5317 + 50 * -29 + 6768)), x = "checked", void (4796 + -21 * 453 + 4717) !== O && O !== t[x] && Xn(t, x, O, E[x], !(1018 * 3 + 95 * -95 + -1493 * -4)));
  }
  return t;
}
function Xo(t, o, e) {
  try {
    typeof t == "function" ? t(o) : t.current = o;
  } catch (i) {
    S.__e(i, e);
  }
}
function Ao(t, o, e) {
  var i, n;
  if (S.unmount && S.unmount(t), (i = t.ref) && (i.current && i.current !== t.__e || Xo(i, null, o)), (i = t.__c) != null) {
    if (i.componentWillUnmount)
      try {
        i.componentWillUnmount();
      } catch (r) {
        S.__e(r, o);
      }
    i.base = i.__P = null, t.__c = void (3406 + -3 * -2038 + -9520);
  }
  if (i = t.__k)
    for (n = 947 * 4 + 9 * -186 + -151 * 14; n < i.length; n++)
      i[n] && Ao(i[n], o, e || typeof t.type != "function");
  e || t.__e == null || za(t.__e), t.__ = t.__e = t.__d = void (3549 + 3 * -1183);
}
function Fg(t, o, e) {
  return this.constructor(t, e);
}
function Ct(t, o, e) {
  var i, n, r, a;
  S.__ && S.__(t, o), n = (i = typeof e == "function") ? null : e && e.__k || o.__k, r = [], a = [], Do(o, t = (!i && e || o).__k = fe(Ne, null, [t]), n || Sn, Sn, void (-1036 * 4 + 2679 + 1465) !== o.ownerSVGElement, !i && e ? [e] : n ? null : o.firstChild ? kn.call(o.childNodes) : null, r, !i && e ? e : n ? n.__e : o.firstChild, i, a), es(r, t, a);
}
function jo(t, o) {
  Ct(t, o, jo);
}
function Mo(t, o, e) {
  var i, n, r, a, s = nt({}, t.props);
  for (r in t.type && t.type.defaultProps && (a = t.type.defaultProps), o)
    r == "key" ? i = o[r] : r == "ref" ? n = o[r] : s[r] = o[r] === void 0 && void (561 + 1 * -3943 + 3382) !== a ? a[r] : o[r];
  return arguments.length > 4554 + 1 * -8945 + 191 * 23 && (s.children = arguments.length > 3444 + -7 * 773 + 1970 ? kn.call(arguments, -8198 * 1 + -5880 + 14080) : e), bn(t.type, s, i || t.key, n || t.ref, null);
}
function Uo(t, o) {
  var e = { __c: o = "__cC" + Ja++, __: t, Consumer: function(i, n) {
    return i.children(n);
  }, Provider: function(i) {
    var n, r;
    return this.getChildContext || (n = [], (r = {})[o] = this, this.getChildContext = function() {
      return r;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && n.some(function(s) {
        s.__e = !0, Co(s);
      });
    }, this.sub = function(a) {
      n.push(a);
      var s = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        n.splice(n.indexOf(a), 1), s && s.call(a);
      };
    }), i.children;
  } };
  return e.Provider.__ = e.Consumer.contextType = e;
}
kn = Qa.slice, S = { __e: function(t, o, e, i) {
  for (var n, r, a; o = o.__; )
    if ((n = o.__c) && !n.__)
      try {
        if ((r = n.constructor) && r.getDerivedStateFromError != null && (n.setState(r.getDerivedStateFromError(t)), a = n.__d), n.componentDidCatch != null && (n.componentDidCatch(t, i || {}), a = n.__d), a)
          return n.__E = n;
      } catch (s) {
        t = s;
      }
  throw t;
} }, ja = -3 * -1388 + 1 * 711 + -4875, Ma = function(t) {
  return t != null && t.constructor == null;
}, We.prototype.setState = function(t, o) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = nt({}, this.state), typeof t == "function" && (t = t(nt({}, e), this.props)), t && nt(e, t), t != null && this.__v && (o && this._sb.push(o), Co(this));
}, We.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !(-1131 * -7 + 7032 + -14949), t && this.__h.push(t), Co(this));
}, We.prototype.render = Ne, yt = [], Ua = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, uo = function(t, o) {
  return t.__v.__b - o.__v.__b;
}, Ci.__r = -15477 + 1 * 15477, Ja = -8465 + 3547 * 1 + -4918 * -1;
function Jo() {
  return (Jo = Object.assign ? Object.assign.bind() : function(t) {
    for (var o = -129 * 43 + 5 * 1611 + -2507; o < arguments.length; o++) {
      var e = arguments[o];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }).apply(this, arguments);
}
var Dg = ["context", "children"];
function Xg(t) {
  this.getChildContext = function() {
    return t.context;
  };
  var o = t.children, e = function(i, n) {
    if (i == null)
      return {};
    var r, a, s = {}, g = Object.keys(i);
    for (a = 7309 + 1 * 8383 + -15692; a < g.length; a++)
      n.indexOf(r = g[a]) >= 0 || (s[r] = i[r]);
    return s;
  }(t, Dg);
  return Mo(o, e);
}
function jg() {
  var t = {};
  t.detail = {}, t.bubbles = !0, t.cancelable = !(2433 * -2 + -7 * 259 + 6679);
  var o = new CustomEvent("_preact", t);
  this.dispatchEvent(o), this._vdom = fe(Xg, Jo({}, this._props, { context: o.detail.context }), function e(i, n) {
    if (6770 + -33 * 182 + -761 * 1 === i.nodeType)
      return i.data;
    if (-1173 + 1174 * 1 !== i.nodeType)
      return null;
    var r = [], a = {}, s = -8741 * 1 + -8476 + -3 * -5739, g = i.attributes, x = i.childNodes;
    for (s = g.length; s--; )
      g[s].name !== "slot" && (a[g[s].name] = g[s].value, a[ts(g[s].name)] = g[s].value);
    for (s = x.length; s--; ) {
      var C = e(x[s], null), l = x[s].slot;
      l ? a[l] = fe(jr, { name: l }, C) : r[s] = C;
    }
    var f = n ? fe(jr, null, r) : r;
    return fe(n || i.nodeName.toLowerCase(), a, f);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? jo : Ct)(this._vdom, this._root);
}
function ts(t) {
  return t.replace(/-(\w)/g, function(o, e) {
    return e ? e.toUpperCase() : "";
  });
}
function Mg(t, o, e) {
  if (this._vdom) {
    var i = {};
    i[t] = e = e ?? void (673 * 13 + 514 + -9263), i[ts(t)] = e, this._vdom = Mo(this._vdom, i), Ct(this._vdom, this._root);
  }
}
function Ug() {
  Ct(this._vdom = null, this._root);
}
function jr(t, o) {
  var e = this;
  return fe("slot", Jo({}, t, { ref: function(i) {
    i ? (e.ref = i, e._listener || (e._listener = function(n) {
      n.stopPropagation(), n.detail.context = o;
    }, i.addEventListener("_preact", e._listener))) : e.ref.removeEventListener("_preact", e._listener);
  } }));
}
function Jg(t, o, e, i) {
  function n() {
    var r = Reflect.construct(HTMLElement, [], n);
    return r._vdomComponent = t, r._root = i && i.shadow ? r.attachShadow({ mode: i.mode || "open" }) : r, r;
  }
  return (n.prototype = Object.create(HTMLElement.prototype)).constructor = n, n.prototype.connectedCallback = jg, n.prototype.attributeChangedCallback = Mg, n.prototype.disconnectedCallback = Ug, e = e || t.observedAttributes || Object.keys(t.propTypes || {}), n.observedAttributes = e, e.forEach(function(r) {
    Object.defineProperty(n.prototype, r, { get: function() {
      return this._vdom.props[r];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(r, null, a) : (this._props || (this._props = {}), this._props[r] = a, this.connectedCallback());
      var s = typeof a;
      a != null && s !== "string" && s !== "boolean" && s !== "number" || this.setAttribute(r, a);
    } });
  }), customElements.define(o || t.tagName || t.displayName || t.name, n);
}
var me = function() {
  return me = Object.assign || function(o) {
    for (var e, i = 1, n = arguments.length; i < n; i++) {
      e = arguments[i];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (o[r] = e[r]);
    }
    return o;
  }, me.apply(this, arguments);
};
function Qt(t, o, e) {
  if (e || arguments.length === 2)
    for (var i = 0, n = o.length, r; i < n; i++)
      (r || !(i in o)) && (r || (r = Array.prototype.slice.call(o, 0, i)), r[i] = o[i]);
  return t.concat(r || Array.prototype.slice.call(o));
}
function Qg(t) {
  var o = Object.create(null);
  return function(e) {
    return o[e] === void 0 && (o[e] = t(e)), o[e];
  };
}
var zg = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, $g = Qg(function(t) {
  return zg.test(t) || t.charCodeAt(6191 * 1 + -7937 * -1 + 2 * -7064) === -7 * -753 + 2 * 2186 + 1 * -9532 && t.charCodeAt(-65 * 119 + 7817 + -81) === 7934 + -21 * 107 + -5577 && t.charCodeAt(2) < -7559 + -1 * 3898 + -2 * -5774;
}), dt, te, _i, Mr, zt = 0, ns = [], ti = [], Ur = S.__b, Jr = S.__r, Qr = S.diffed, zr = S.__c, $r = S.unmount;
function on(t, o) {
  S.__h && S.__h(te, t, zt || o), zt = 1089 + 175 * -5 + -214;
  var e = {};
  e.__ = [], e.__h = [];
  var i = te.__H || (te.__H = e), n = {};
  return n.__V = ti, t >= i.__.length && i.__.push(n), i.__[t];
}
function je(t) {
  return zt = -2845 + 1 * 2846, is(os, t);
}
function is(t, o, e) {
  var i = on(dt++, 2);
  if (i.t = t, !i.__c && (i.__ = [e ? e(o) : os(void 0, o), function(s) {
    var g = i.__N ? i.__N[0] : i.__[0], x = i.t(g, s);
    g !== x && (i.__N = [x, i.__[5 * 222 + 943 + -2052]], i.__c.setState({}));
  }], i.__c = te, !te.u)) {
    var n = function(s, g, x) {
      if (!i.__c.__H)
        return !0;
      var C = i.__c.__H.__.filter(function(f) {
        return f.__c;
      });
      if (C.every(function(f) {
        return !f.__N;
      }))
        return !r || r.call(this, s, g, x);
      var l = !(-81 + -582 * 7 + 2 * 2078);
      return C.forEach(function(f) {
        if (f.__N) {
          var p = f.__[0];
          f.__ = f.__N, f.__N = void 0, p !== f.__[0] && (l = !0);
        }
      }), !(!l && i.__c.props === s) && (!r || r.call(this, s, g, x));
    };
    te.u = !(-257 * -13 + -6525 + 3184);
    var r = te.shouldComponentUpdate, a = te.componentWillUpdate;
    te.componentWillUpdate = function(s, g, x) {
      if (this.__e) {
        var C = r;
        r = void 0, n(s, g, x), r = C;
      }
      a && a.call(this, s, g, x);
    }, te.shouldComponentUpdate = n;
  }
  return i.__N || i.__;
}
function be(t, o) {
  var e = on(dt++, 3);
  !S.__s && Qo(e.__H, o) && (e.__ = t, e.i = o, te.__H.__h.push(e));
}
function Gi(t, o) {
  var e = on(dt++, 4);
  !S.__s && Qo(e.__H, o) && (e.__ = t, e.i = o, te.__h.push(e));
}
function rn(t) {
  return zt = 1598 + -4 * -2405 + -11213, Me(function() {
    var o = {};
    return o.current = t, o;
  }, []);
}
function qg(t, o, e) {
  zt = 11830 + -4 * 2956, Gi(function() {
    return typeof t == "function" ? (t(o()), function() {
      return t(null);
    }) : t ? (t.current = o(), function() {
      return t.current = null;
    }) : void (-8341 + -187 * -26 + 3479);
  }, e == null ? e : e.concat(t));
}
function Me(t, o) {
  var e = on(dt++, 7);
  return Qo(e.__H, o) ? (e.__V = t(), e.i = o, e.__h = t, e.__V) : e.__;
}
function di(t, o) {
  return zt = -5147 * 1 + 2789 + 2366, Me(function() {
    return t;
  }, o);
}
function Zi(t) {
  var o = te.context[t.__c], e = on(dt++, -2729 * -2 + 4303 + -23 * 424);
  return e.c = t, o ? (e.__ == null && (e.__ = !(-7749 + 1431 * 3 + 3456), o.sub(te)), o.props.value) : t.__;
}
function po(t, o) {
  S.useDebugValue && S.useDebugValue(o ? o(t) : t);
}
function _g() {
  var t = on(dt++, 11);
  if (!t.__) {
    for (var o = te.__v; o !== null && !o.__m && o.__ !== null; )
      o = o.__;
    var e = o.__m || (o.__m = [-1191 * 2 + -7600 + 1 * 9982, 4782 + -239 * 8 + 35 * -82]);
    t.__ = "P" + e[886 * 1 + 75 * -72 + 4514] + "-" + e[-2031 * 1 + 7658 * -1 + 9690]++;
  }
  return t.__;
}
function e0() {
  for (var t; t = ns.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(ni), t.__H.__h.forEach(fo), t.__H.__h = [];
      } catch (o) {
        t.__H.__h = [], S.__e(o, t.__v);
      }
}
S.__b = function(t) {
  te = null, Ur && Ur(t);
}, S.__r = function(t) {
  Jr && Jr(t), dt = 0;
  var o = (te = t.__c).__H;
  o && (_i === te ? (o.__h = [], te.__h = [], o.__.forEach(function(e) {
    e.__N && (e.__ = e.__N), e.__V = ti, e.__N = e.i = void (-401 * 13 + -8061 + 13274);
  })) : (o.__h.forEach(ni), o.__h.forEach(fo), o.__h = [], dt = 9535 + 9456 * 1 + -18991)), _i = te;
}, S.diffed = function(t) {
  Qr && Qr(t);
  var o = t.__c;
  o && o.__H && (o.__H.__h.length && (1 * 8423 + -9083 + 661 !== ns.push(o) && Mr === S.requestAnimationFrame || ((Mr = S.requestAnimationFrame) || t0)(e0)), o.__H.__.forEach(function(e) {
    e.i && (e.__H = e.i), e.__V !== ti && (e.__ = e.__V), e.i = void (-4 * -1349 + 6333 + -11729 * 1), e.__V = ti;
  })), _i = te = null;
}, S.__c = function(t, o) {
  o.some(function(e) {
    try {
      e.__h.forEach(ni), e.__h = e.__h.filter(function(i) {
        return !i.__ || fo(i);
      });
    } catch (i) {
      o.some(function(n) {
        n.__h && (n.__h = []);
      }), o = [], S.__e(i, e.__v);
    }
  }), zr && zr(t, o);
}, S.unmount = function(t) {
  $r && $r(t);
  var o, e = t.__c;
  e && e.__H && (e.__H.__.forEach(function(i) {
    try {
      ni(i);
    } catch (n) {
      o = n;
    }
  }), e.__H = void (2288 + 143 * -16), o && S.__e(o, e.__v));
};
var qr = typeof requestAnimationFrame == "function";
function t0(t) {
  var o, e = function() {
    clearTimeout(i), qr && cancelAnimationFrame(o), setTimeout(t);
  }, i = setTimeout(e, 100);
  qr && (o = requestAnimationFrame(e));
}
function ni(t) {
  var o = te, e = t.__c;
  typeof e == "function" && (t.__c = void (799 * -1 + 74 * -52 + 1 * 4647), e()), te = o;
}
function fo(t) {
  var o = te;
  t.__c = t.__(), te = o;
}
function Qo(t, o) {
  return !t || t.length !== o.length || o.some(function(e, i) {
    return e !== t[i];
  });
}
function os(t, o) {
  return typeof o == "function" ? o(t) : o;
}
function rs(t, o) {
  for (var e in o)
    t[e] = o[e];
  return t;
}
function ho(t, o) {
  for (var e in t)
    if (e !== "__source" && !(e in o))
      return !(7539 * -1 + -7274 * -1 + -265 * -1);
  for (var i in o)
    if (i !== "__source" && t[i] !== o[i])
      return !(1820 + -635 * 11 + 5165 * 1);
  return !(-1 * -7673 + 19 * -47 + -6779);
}
function mo(t) {
  this.props = t;
}
function n0(t, o) {
  function e(n) {
    var r = this.props.ref, a = r == n.ref;
    return !a && r && (r.call ? r(null) : r.current = null), o ? !o(this.props, n) || !a : ho(this.props, n);
  }
  function i(n) {
    return this.shouldComponentUpdate = e, fe(t, n);
  }
  return i.displayName = "Memo(" + (t.displayName || t.name) + ")", i.prototype.isReactComponent = !(7990 + 5097 * -1 + -2893 * 1), i.__f = !(-135 * 13 + -9442 + 11197 * 1), i;
}
(mo.prototype = new We()).isPureReactComponent = !0, mo.prototype.shouldComponentUpdate = function(t, o) {
  return ho(this.props, t) || ho(this.state, o);
};
var _r = S.__b;
S.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), _r && _r(t);
};
var i0 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || -924 + 4835 * 1;
function as(t) {
  function o(e) {
    var i = rs({}, e);
    return delete i.ref, t(i, e.ref || null);
  }
  return o.$$typeof = i0, o.render = o, o.prototype.isReactComponent = o.__f = !(3502 + -1425 * -5 + -1 * 10627), o.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", o;
}
var ea = function(t, o) {
  return t == null ? null : it(it(t).map(o));
}, o0 = { map: ea, forEach: ea, count: function(t) {
  return t ? it(t).length : 0;
}, only: function(t) {
  var o = it(t);
  if (4 * 1386 + 1 * -4366 + -107 * 11 !== o.length)
    throw "Children.only";
  return o[1 * 6424 + 7 * -271 + -4527];
}, toArray: it }, r0 = S.__e;
S.__e = function(t, o, e, i) {
  if (t.then) {
    for (var n, r = o; r = r.__; )
      if ((n = r.__c) && n.__c)
        return o.__e == null && (o.__e = e.__e, o.__k = e.__k), n.__c(t, o);
  }
  r0(t, o, e, i);
};
var ta = S.unmount;
function ss(t, o, e) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(i) {
    typeof i.__c == "function" && i.__c();
  }), t.__c.__H = null), (t = rs({}, t)).__c != null && (t.__c.__P === e && (t.__c.__P = o), t.__c = null), t.__k = t.__k && t.__k.map(function(i) {
    return ss(i, o, e);
  })), t;
}
function gs(t, o, e) {
  return t && e && (t.__v = null, t.__k = t.__k && t.__k.map(function(i) {
    return gs(i, o, e);
  }), t.__c && t.__c.__P === o && (t.__e && e.appendChild(t.__e), t.__c.__e = !(-5586 + 122 * 67 + -2588 * 1), t.__c.__P = e)), t;
}
function ii() {
  this.__u = -3 * -993 + -7785 + 4806, this.t = null, this.__b = null;
}
function cs(t) {
  var o = t.__.__c;
  return o && o.__a && o.__a(t);
}
function a0(t) {
  var o, e, i;
  function n(r) {
    if (o || (o = t()).then(function(a) {
      e = a.default || a;
    }, function(a) {
      i = a;
    }), i)
      throw i;
    if (!e)
      throw o;
    return fe(e, r);
  }
  return n.displayName = "Lazy", n.__f = !(5689 * -1 + 1 * 4124 + 1565), n;
}
function pn() {
  this.u = null, this.o = null;
}
S.unmount = function(t) {
  var o = t.__c;
  o && o.__R && o.__R(), o && -7 * 557 + -34 * 49 + 5597 & t.__u && (t.type = null), ta && ta(t);
}, (ii.prototype = new We()).__c = function(t, o) {
  var e = o.__c, i = this;
  i.t == null && (i.t = []), i.t.push(e);
  var n = cs(i.__v), r = !(-7685 + -1 * -2402 + -1321 * -4), a = function() {
    r || (r = !(4 * -5 + 5 * -1801 + 9025), e.__R = null, n ? n(s) : s());
  };
  e.__R = a;
  var s = function() {
    if (!--i.__u) {
      if (i.state.__a) {
        var g = i.state.__a;
        i.__v.__k[-8394 + 199 * -7 + 9787] = gs(g, g.__c.__P, g.__c.__O);
      }
      var x;
      for (i.setState({ __a: i.__b = null }); x = i.t.pop(); )
        x.forceUpdate();
    }
  };
  i.__u++ || 10979 + -3 * 3649 & o.__u || i.setState({ __a: i.__b = i.__v.__k[-2616 + -8 * -327] }), t.then(a, a);
}, ii.prototype.componentWillUnmount = function() {
  this.t = [];
}, ii.prototype.render = function(t, o) {
  if (this.__b) {
    if (this.__v.__k) {
      var e = document.createElement("div"), i = this.__v.__k[-7880 + -27 * 331 + 251 * 67].__c;
      this.__v.__k[-9251 + 7 * 29 + 9048] = ss(this.__b, e, i.__O = i.__P);
    }
    this.__b = null;
  }
  var n = o.__a && fe(Ne, null, t.fallback);
  return n && (n.__u &= -(629 * -6 + -8893 + -254 * -50)), [fe(Ne, null, o.__a ? null : t.children), n];
};
var na = function(t, o, e) {
  if (++e[1] === e[-1837 + -4 * -2297 + -7351] && t.o.delete(o), t.props.revealOrder && (t.props.revealOrder[-750 + -5 * -929 + -3895] !== "t" || !t.o.size))
    for (e = t.u; e; ) {
      for (; e.length > -141 * -53 + 9032 + -16502 * 1; )
        e.pop()();
      if (e[11 * 661 + -1744 + -18 * 307] < e[-8263 * 1 + 5189 + 3074])
        break;
      t.u = e = e[-1145 * -2 + -5414 + 3126];
    }
};
function s0(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function g0(t) {
  var o = this, e = t.i;
  o.componentWillUnmount = function() {
    Ct(null, o.l), o.l = null, o.i = null;
  }, o.i && o.i !== e && o.componentWillUnmount(), o.l || (o.i = e, o.l = { nodeType: 1, parentNode: e, childNodes: [], appendChild: function(i) {
    this.childNodes.push(i), o.i.appendChild(i);
  }, insertBefore: function(i, n) {
    this.childNodes.push(i), o.i.appendChild(i);
  }, removeChild: function(i) {
    this.childNodes.splice(this.childNodes.indexOf(i) >>> -5422 + -9073 * 1 + 14496, 1104 + -1 * 9493 + 8390), o.i.removeChild(i);
  } }), Ct(fe(s0, { context: o.context }, t.__v), o.l);
}
function c0(t, o) {
  var e = {};
  e.__v = t, e.i = o;
  var i = fe(g0, e);
  return i.containerInfo = o, i;
}
(pn.prototype = new We()).__a = function(t) {
  var o = this, e = cs(o.__v), i = o.o.get(t);
  return i[2 * 433 + 1725 + 1 * -2591]++, function(n) {
    var r = function() {
      o.props.revealOrder ? (i.push(n), na(o, t, i)) : n();
    };
    e ? e(r) : r();
  };
}, pn.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var o = it(t.children);
  t.revealOrder && t.revealOrder[332 + 559 * -1 + 227] === "b" && o.reverse();
  for (var e = o.length; e--; )
    this.o.set(o[e], this.u = [-6874 + -63 * 47 + 1 * 9836, 2 * -3082 + 1690 + -2 * -2237, this.u]);
  return t.children;
}, pn.prototype.componentDidUpdate = pn.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(o, e) {
    na(t, e, o);
  });
};
var Is = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 40547 + 37847 * 2 + -56138, I0 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, x0 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, l0 = /[A-Z0-9]/g, u0 = typeof document < "u", C0 = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
};
function d0(t, o, e) {
  return o.__k == null && (o.textContent = ""), Ct(t, o), typeof e == "function" && e(), t ? t.__c : null;
}
function A0(t, o, e) {
  return jo(t, o), typeof e == "function" && e(), t ? t.__c : null;
}
We.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(We.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(o) {
    var e = {};
    e.configurable = !(-7989 + -2 * 683 + 9355), e.writable = !(-397 * 8 + 1804 + 1372), e.value = o, Object.defineProperty(this, t, e);
  } });
});
var ia = S.event;
function p0() {
}
function f0() {
  return this.cancelBubble;
}
function h0() {
  return this.defaultPrevented;
}
S.event = function(t) {
  return ia && (t = ia(t)), t.persist = p0, t.isPropagationStopped = f0, t.isDefaultPrevented = h0, t.nativeEvent = t;
};
var oi = {};
oi.enumerable = !(-3577 * 1 + 1238 * -7 + 12244), oi.configurable = !(1 * -2019 + 2471 + -452), oi.get = function() {
  return this.class;
};
var zo, m0 = oi, oa = S.vnode;
S.vnode = function(t) {
  typeof t.type == "string" && function(o) {
    var e = o.props, i = o.type, n = {};
    for (var r in e) {
      var a = e[r];
      if (!(r === "value" && "defaultValue" in e && a == null || u0 && r === "children" && i === "noscript" || r === "class" || r === "className")) {
        var s = r.toLowerCase();
        r === "defaultValue" && "value" in e && e.value == null ? r = "value" : r === "download" && !(5 * 735 + 125 * 3 + 810 * -5) === a ? a = "" : s === "ondoubleclick" ? r = "ondblclick" : s !== "onchange" || i !== "input" && i !== "textarea" || C0(e.type) ? s === "onfocus" ? r = "onfocusin" : s === "onblur" ? r = "onfocusout" : x0.test(r) ? r = s : -(-1905 + -1993 * -5 + -8059 * 1) === i.indexOf("-") && I0.test(r) ? r = r.replace(l0, "-$&").toLowerCase() : a === null && (a = void (-4014 + 4453 * -2 + 12920)) : s = r = "oninput", s === "oninput" && n[r = s] && (r = "oninputCapture"), n[r] = a;
      }
    }
    i == "select" && n.multiple && Array.isArray(n.value) && (n.value = it(e.children).forEach(function(g) {
      g.props.selected = -(-1521 + -1 * 967 + 131 * 19) != n.value.indexOf(g.props.value);
    })), i == "select" && n.defaultValue != null && (n.value = it(e.children).forEach(function(g) {
      g.props.selected = n.multiple ? -(12 * 717 + 43 * -199 + -46) != n.defaultValue.indexOf(g.props.value) : n.defaultValue == g.props.value;
    })), e.class && !e.className ? (n.class = e.class, Object.defineProperty(n, "className", m0)) : (e.className && !e.class || e.class && e.className) && (n.class = n.className = e.className), o.props = n;
  }(t), t.$$typeof = Is, oa && oa(t);
};
var ra = S.__r;
S.__r = function(t) {
  ra && ra(t), zo = t.__c;
};
var aa = S.diffed;
S.diffed = function(t) {
  aa && aa(t);
  var o = t.props, e = t.__e;
  e != null && t.type === "textarea" && "value" in o && o.value !== e.value && (e.value = o.value == null ? "" : o.value), zo = null;
};
var xs = {};
xs.readContext = function(t) {
  return zo.__n[t.__c].props.value;
};
var ls = {};
ls.current = xs;
var us = {};
us.ReactCurrentDispatcher = ls;
var b0 = us;
function y0(t) {
  return fe.bind(null, t);
}
function ki(t) {
  return !!t && t.$$typeof === Is;
}
function v0(t) {
  return ki(t) && t.type === Ne;
}
function B0(t) {
  return ki(t) ? Mo.apply(null, arguments) : t;
}
function w0(t) {
  return !!t.__k && (Ct(null, t), !(6475 + 1397 * -4 + -887));
}
function S0(t) {
  return t && (t.base || t.nodeType === 1 && t) || null;
}
var G0 = function(t, o) {
  return t(o);
}, Z0 = function(t, o) {
  return t(o);
}, k0 = Ne;
function Cs(t) {
  t();
}
function H0(t) {
  return t;
}
function K0() {
  return [!(-4198 + 1 * 4938 + -739 * 1), Cs];
}
var W0 = Gi, O0 = ki;
function R0(t, o) {
  var e = o(), i = je({ h: { __: e, v: o } }), n = i[-1373 + -13 * 358 + 123 * 49].h, r = i[7884 + 8062 * 1 + -5315 * 3];
  return Gi(function() {
    n.__ = e, n.v = o, eo(n) && r({ h: n });
  }, [t, e, o]), be(function() {
    return eo(n) && r({ h: n }), t(function() {
      eo(n) && r({ h: n });
    });
  }, [t]), e;
}
function eo(t) {
  var o, e, i = t.v, n = t.__;
  try {
    var r = i();
    return !((o = n) === (e = r) && (o !== 0 || (-6804 + -2047 * -1 + 4758) / o == (-1 * -4707 + -8694 + 1 * 3988) / e) || o != o && e != e);
  } catch {
    return !0;
  }
}
var Y = {};
Y.useState = je, Y.useId = _g, Y.useReducer = is, Y.useEffect = be, Y.useLayoutEffect = Gi, Y.useInsertionEffect = W0, Y.useTransition = K0, Y.useDeferredValue = H0, Y.useSyncExternalStore = R0, Y.startTransition = Cs, Y.useRef = rn, Y.useImperativeHandle = qg, Y.useMemo = Me, Y.useCallback = di, Y.useContext = Zi, Y.useDebugValue = po, Y.version = "17.0.2", Y.Children = o0, Y.render = d0, Y.hydrate = A0, Y.unmountComponentAtNode = w0, Y.createPortal = c0, Y.createElement = fe, Y.createContext = Uo, Y.createFactory = y0, Y.cloneElement = B0, Y.createRef = Yg, Y.Fragment = Ne, Y.isValidElement = ki, Y.isElement = O0, Y.isFragment = v0, Y.findDOMNode = S0, Y.Component = We, Y.PureComponent = mo, Y.memo = n0, Y.forwardRef = as, Y.flushSync = Z0, Y.unstable_batchedUpdates = G0, Y.StrictMode = k0, Y.Suspense = ii, Y.SuspenseList = pn, Y.lazy = a0, Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = b0;
var Zt = Y, V0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function E0(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function P0(t) {
  return t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Y0(t) {
  return t && Object.prototype.hasOwnProperty.call(t, "default") && Object.keys(t).length === 1 ? t.default : t;
}
function L0(t) {
  if (t.__esModule)
    return t;
  var o = t.default;
  if (typeof o == "function") {
    var e = function i() {
      return this instanceof i ? Reflect.construct(o, arguments, this.constructor) : o.apply(this, arguments);
    };
    e.prototype = o.prototype;
  } else
    e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(t).forEach(function(i) {
    var n = Object.getOwnPropertyDescriptor(t, i);
    Object.defineProperty(e, i, n.get ? n : {
      enumerable: !0,
      get: function() {
        return t[i];
      }
    });
  }), e;
}
const N0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: V0,
  getAugmentedNamespace: L0,
  getDefaultExportFromCjs: E0,
  getDefaultExportFromNamespaceIfNotNamed: Y0,
  getDefaultExportFromNamespaceIfPresent: P0
}, Symbol.toStringTag, { value: "Module" }));
var T0 = function(o, e, i, n) {
  var r = i ? i.call(n, o, e) : void 0;
  if (r !== void (-6286 + 7 * 898))
    return !!r;
  if (o === e)
    return !0;
  if (typeof o != "object" || !o || typeof e != "object" || !e)
    return !1;
  var a = Object.keys(o), s = Object.keys(e);
  if (a.length !== s.length)
    return !1;
  for (var g = Object.prototype.hasOwnProperty.bind(e), x = 1 * -3662 + 2 * 1629 + 404; x < a.length; x++) {
    var C = a[x];
    if (!g(C))
      return !1;
    var l = o[C], f = e[C];
    if (r = i ? i.call(n, l, f, C) : void (44 * -4 + -2506 + 1341 * 2), r === !1 || r === void (-4887 + 9 * 543) && l !== f)
      return !1;
  }
  return !0;
};
const F0 = N0.getDefaultExportFromCjs(T0);
var ee = "-ms-", yn = "-moz-", U = "-webkit-", ds = "comm", Hi = "rule", $o = "decl", D0 = "@import", As = "@keyframes", X0 = "@layer", j0 = Math.abs, qo = String.fromCharCode, bo = Object.assign;
function M0(t, o) {
  return xe(t, 3207 + -8788 * 1 + 5581) ^ -5891 * 1 + 6775 + -839 ? (((o << -5 * 11 + 7 * -817 + 5776 ^ xe(t, -6439 * 1 + 5864 + -1 * -575)) << -1149 * 7 + 9046 + -1001 ^ xe(t, -2114 + 2 * -898 + 3911)) << 14484 + 14482 * -1 ^ xe(t, -1 * -9908 + 8607 + -18513)) << 198 + -9 * -991 + 1823 * -5 ^ xe(t, -1039 * -9 + 3367 + -12715) : -22 * 323 + -3105 + 10211;
}
function ps(t) {
  return t.trim();
}
function tt(t, o) {
  return (t = o.exec(t)) ? t[3309 * -1 + -548 * -4 + -1117 * -1] : t;
}
function N(t, o, e) {
  return t.replace(o, e);
}
function ri(t, o) {
  return t.indexOf(o);
}
function xe(t, o) {
  return t.charCodeAt(o) | -195 + -6 * 23 + 333;
}
function $t(t, o, e) {
  return t.slice(o, e);
}
function Xe(t) {
  return t.length;
}
function fs(t) {
  return t.length;
}
function fn(t, o) {
  return o.push(t), t;
}
function U0(t, o) {
  return t.map(o).join("");
}
function sa(t, o) {
  return t.filter(function(e) {
    return !tt(e, o);
  });
}
var Ki = 2 * 2369 + 7655 + -12392, qt = -3303 + -4241 * -1 + 1 * -937, hs = 53 * 179 + -419 * 7 + 29 * -226, Re = -1061 * 9 + -1427 * 5 + -4 * -4171, se = 5184 + 103 * 59 + 11261 * -1, an = "";
function Wi(t, o, e, i, n, r, a, s) {
  var g = {};
  return g.value = t, g.root = o, g.parent = e, g.type = i, g.props = n, g.children = r, g.line = Ki, g.column = qt, g.length = a, g.return = "", g.siblings = s, g;
}
function ct(t, o) {
  return bo(Wi("", null, null, "", null, null, 8 * -478 + 7624 + -3800, t.siblings), t, { length: -t.length }, o);
}
function Ft(t) {
  for (; t.root; )
    t = ct(t.root, { children: [t] });
  fn(t, t.siblings);
}
function J0() {
  return se;
}
function Q0() {
  return se = Re > 1470 + -355 * 5 + 305 ? xe(an, --Re) : -6613 * 1 + 2339 * -2 + 11291, qt--, se === -8909 + 22 * 367 + -65 * -13 && (qt = -8086 + -1 * 3709 + 11796, Ki--), se;
}
function Le() {
  return se = Re < hs ? xe(an, Re++) : 8595 + 1 * 8011 + 16606 * -1, qt++, se === 10 && (qt = -249 * -39 + 24 * 310 + -17150, Ki++), se;
}
function St() {
  return xe(an, Re);
}
function ai() {
  return Re;
}
function Oi(t, o) {
  return $t(an, t, o);
}
function yo(t) {
  switch (t) {
    case 1313 * 3 + 1315 + 5254 * -1:
    case -1126 + -853 * -6 + 3983 * -1:
    case -5 * -897 + 33 * 223 + -11834:
    case 13:
    case -8882 * -1 + 2 * -291 + -8268:
      return 1063 * 4 + 2160 + -6407;
    case 2505 + 50 * -105 + 2778:
    case -4976 + -8933 * -1 + -3914:
    case -6526 + 90 * 73:
    case 47:
    case 2 * -1587 + 163 * 12 + 1280:
    case -1 * -7199 + 7314 + 14449 * -1:
    case 126:
    case 8431 + -158 * 7 + -21 * 346:
    case 1323 + -5 * 240:
    case -1 * 2116 + 13 * 295 + -1594:
      return -558 + -8 * 933 + 8026;
    case 43 * -71 + 9 * 787 + -3972:
      return 2 * -4167 + 1223 * 6 + 999;
    case 103 * 19 + 9802 + -11725:
    case 39:
    case 1 * 9241 + 7897 + -17098:
    case -6270 + 37 * -85 + -49 * -194:
      return -4623 * 2 + 7594 + 1654;
    case 41:
    case 93:
      return 8994 * 1 + -997 * 1 + -7996;
  }
  return 1 * 6792 + 7 * -576 + 2760 * -1;
}
function z0(t) {
  return Ki = qt = 5913 * -1 + 395 * 7 + 3149, hs = Xe(an = t), Re = 677 * -13 + 1 * -4421 + 6611 * 2, [];
}
function $0(t) {
  return an = "", t;
}
function to(t) {
  return ps(Oi(Re - (-1 * -4019 + -9183 * 1 + -5165 * -1), vo(t === -1 * 933 + -37 * 93 + 4465 ? t + (1 * -8521 + 5530 + 73 * 41) : t === -67 * 142 + -17 * -2 + 9520 ? t + 1 : t)));
}
function q0(t) {
  for (; (se = St()) && se < 5 * -181 + 7190 + -6252; )
    Le();
  return yo(t) > 358 + 1433 * -4 + 5376 || yo(se) > -6456 + 1 * 5077 + -1382 * -1 ? "" : " ";
}
function _0(t, o) {
  for (; --o && Le() && !(se < -11 * 457 + -5440 + 3505 * 3 || se > 25 * -33 + -132 * 18 + 3303 || se > 13877 + -5 * 2764 && se < -2 * -316 + 203 * 9 + -2394 || se > -1440 + -1 * -1510 && se < -686 + 2423 * 2 + -4063); )
    ;
  return Oi(t, ai() + (o < -1361 * 1 + -5067 * -1 + -3700 && St() == 2617 * -2 + 4143 + 1123 && Le() == 32));
}
function vo(t) {
  for (; Le(); )
    switch (se) {
      case t:
        return Re;
      case -3720 + 1 * 3754:
      case 4 * -139 + -5456 + 6051 * 1:
        t !== -1 * 5141 + -2 * -218 + 4739 && t !== 146 * -52 + 2257 + 5374 && vo(se);
        break;
      case 71 * -22 + -1784 + 2 * 1693:
        t === 1261 * -2 + 2 * 2442 + -2321 && vo(t);
        break;
      case 287 * -26 + -9625 + 17179 * 1:
        Le();
        break;
    }
  return Re;
}
function ec(t, o) {
  for (; Le() && t + se !== 3 * 346 + 3341 + -4332 + 10; )
    if (t + se === 3287 * -3 + -2 * -1121 + 47 * 163 + (-2 * 3799 + -8585 + 16225) && St() === 73 * 17 + 6544 + 73 * -106)
      break;
  return "/*" + Oi(o, Re - (1411 * -1 + 15 * 261 + 1 * -2503)) + "*" + qo(t === 4 * 359 + 9187 + -10576 ? t : Le());
}
function tc(t) {
  for (; !yo(St()); )
    Le();
  return Oi(t, Re);
}
function nc(t) {
  return $0(si("", null, null, null, [""], t = z0(t), 220 * -4 + -1758 + 2638, [0], t));
}
function si(t, o, e, i, n, r, a, s, g) {
  for (var x = 0, C = 4 * -2133 + -6768 + -150 * -102, l = a, f = 9945 + 7877 * 1 + 266 * -67, p = 0, y = 1 * -8117 + -6 * -1321 + 191, O = 53 * -91 + 21 * -286 + -114 * -95, E = 1, Z = 9095 * -1 + 2271 * 1 + 6825, G = 0, L = "", J = n, D = r, F = i, k = L; E; )
    switch (y = G, G = Le()) {
      case 7176 + -4 * -775 + -1706 * 6:
        if (y != 5671 + -5563 * 1 && xe(k, l - (-1 * 4552 + 177 * 25 + -4 * -32)) == -7 * -361 + 3 * -737 + -258 * 1) {
          ri(k += N(to(G), "&", "&\f"), "&\f") != -(-2081 * 4 + 2698 * 1 + 5627) && (Z = -(-257 * 12 + -526 + 3611));
          break;
        }
      case 34:
      case 469 * 19 + 5779 * -1 + -3093:
      case -310 + -1 * -401:
        k += to(G);
        break;
      case -1395 + 1404 * 1:
      case 7938 + 32 * -35 + -37 * 184:
      case 9560 + 1 * -4486 + -5061:
      case 9115 + -1 * 9083:
        k += q0(y);
        break;
      case -4294 + 68 * 99 + -2346:
        k += _0(ai() - (11 * 239 + 7346 * 1 + -9974 * 1), -82 * -15 + 1 * -2339 + 1116);
        continue;
      case 6078 + 501 * 10 + -181 * 61:
        switch (St()) {
          case -68 * -53 + -4 * -564 + -1 * 5818:
          case 1432 + 1 * -1385:
            fn(ic(ec(Le(), ai()), o, e, g), g);
            break;
          default:
            k += "/";
        }
        break;
      case (1 * -3963 + 346 * -15 + 9276) * O:
        s[x++] = Xe(k) * Z;
      case (431 * -13 + -1 * 7487 + 13215) * O:
      case 8 * 2 + 2024 + -1981:
      case 7080 + -4 * 484 + -5144 * 1:
        switch (G) {
          case -5869 * 1 + 5123 + 746 * 1:
          case 4027 + 1 * 5062 + -8964:
            E = 4641 + 2573 * -2 + 505 * 1;
          case 204 + -2 * -4132 + -8409 + C:
            Z == -(1 * -4342 + 79 * 11 + 3474) && (k = N(k, /\f/g, "")), p > -1559 * 6 + -851 + 10205 && Xe(k) - l && fn(p > -6410 + -6442 * -1 ? ca(k + ";", i, e, l - (-4459 + -1 * -4038 + 422), g) : ca(N(k, " ", "") + ";", i, e, l - (5 * -1460 + 1 * -7320 + 14622), g), g);
            break;
          case -1084 + 3 * 381:
            k += ";";
          default:
            if (fn(F = ga(k, o, e, x, C, n, s, L, J = [], D = [], l, r), r), G === -1 * 9593 + 7455 + -119 * -19)
              if (C === -900 + 9100 * -1 + -2500 * -4)
                si(k, o, F, F, J, r, l, s, D);
              else
                switch (f === 1 * -6151 + 2755 + 3495 && xe(k, 3) === 1095 + -3175 * -1 + -4160 ? -2 * 2841 + -2054 + 7836 : f) {
                  case -2203 * 3 + 9127 + -6 * 403:
                  case -1240 + 5 * 218 + 258:
                  case -627 * 13 + 7896 + 91 * 4:
                  case 1 * -5458 + -9387 + -340 * -44:
                    si(t, F, F, i && fn(ga(t, F, F, -35 * -2 + -2 * -523 + -1116, -4331 + 61 * 71, n, s, L, n, J = [], l, D), D), n, D, l, s, i ? J : D);
                    break;
                  default:
                    si(k, F, F, F, [""], D, 6193 * -1 + 9847 * 1 + -3654, s, D);
                }
        }
        x = C = p = 2 * 927 + 3442 + -5296, O = Z = -43 * -33 + 5355 + 1 * -6773, L = k = "", l = a;
        break;
      case -7 * 1066 + -1 * -3995 + -47 * -75:
        l = -11374 + -25 * -455 + Xe(k), p = y;
      default:
        if (O < 1084 + -1777 * 3 + 4248) {
          if (G == 123)
            --O;
          else if (G == 9880 + 1 * -4735 + -5 * 1004 && O++ == -171 * 39 + 221 + 248 * 26 && Q0() == 125)
            continue;
        }
        switch (k += qo(G), G * O) {
          case 2728 + 269 * -10:
            Z = C > 107 * 67 + -372 * 1 + -1 * 6797 ? 17 * -347 + 5631 + -269 * -1 : (k += "\f", -(-1 * 2887 + -4812 + 154 * 50));
            break;
          case -3440 + 31 * -158 + 127 * 66:
            s[x++] = (Xe(k) - (1 * 8902 + 12 * 5 + -8961)) * Z, Z = -3853 * 1 + -1251 + -1 * -5105;
            break;
          case -1 * -5759 + -16 * -217 + -9167:
            St() === -257 * 7 + 7374 + -5530 && (k += to(Le())), f = St(), C = l = Xe(L = k += tc(ai())), G++;
            break;
          case 45:
            y === 669 * 1 + -215 * 34 + 2 * 3343 && Xe(k) == 14389 + 1 * -14387 && (O = 4348 * 1 + 5563 + 11 * -901);
        }
    }
  return r;
}
function ga(t, o, e, i, n, r, a, s, g, x, C, l) {
  for (var f = n - 1, p = n === 2565 + 205 * -19 + 1330 ? r : [""], y = fs(p), O = 241 * 37 + -129 * 3 + -4265 * 2, E = 2720 + -3 * 2545 + 983 * 5, Z = 107 * -33 + 9065 + -1 * 5534; O < i; ++O)
    for (var G = -3535 + -505 * -7, L = $t(t, f + (-5755 + 184 * -4 + -3 * -2164), f = j0(E = a[O])), J = t; G < y; ++G)
      (J = ps(E > 0 ? p[G] + " " + L : N(L, /&\f/g, p[G]))) && (g[Z++] = J);
  return Wi(t, o, e, n === -1 * 9514 + -12 * -766 + -46 * -7 ? Hi : s, g, x, C, l);
}
function ic(t, o, e, i) {
  return Wi(t, o, e, ds, qo(J0()), $t(t, 2, -(499 * -5 + -6701 * -1 + -4204)), -1 * 3233 + -2117 * -1 + 6 * 186, i);
}
function ca(t, o, e, i, n) {
  return Wi(t, o, e, $o, $t(t, -1 * -7702 + -517 * -13 + 14423 * -1, i), $t(t, i + (13 * -121 + -15 * 304 + 6134), -(-59 * -28 + -2942 + -1291 * -1)), i, n);
}
function ms(t, o, e) {
  switch (M0(t, o)) {
    case -8693 + -1 * 4219 + 18015:
      return U + "print-" + t + t;
    case -3650 + 59 * 74 + 5021:
    case 1 * 1284 + -37 * 29 + 5 * 798:
    case 1 * 2068 + -514 * -5 + -1461:
    case 2118 + -1315 * -1:
    case -4 * 1787 + 2297 * -4 + 17977:
    case 5782 + -3244 * -1 + -4569:
    case -1 * -47 + 16 * -444 + 9978:
    case 8213 + -2641 * 1:
    case -683 * 1 + 6552 + 1 * 487:
    case -375 * 14 + -1303 * 8 + 29 * 742:
    case 28 * 337 + -1462 + 4783 * -1:
    case 11117 + 61 * -92 + 1140:
    case 1902 + -62 * -29 + -695:
    case -74 * -91 + -8343 + 2 * 4e3:
    case 1987 + -227 * 39 + 12745 * 1:
    case 5623:
    case -3967 + 1 * 10102:
    case -2234 * 2 + 2 * 158 + 8751:
    case -9593 + 1 * -1535 + -1453 * -11:
    case -97 * -53 + -1 * -7142 + 2 * -4034:
    case 8793 + 1 * 99 + -1 * 2503:
    case 19 * -217 + -2985 * 1 + 12217:
    case 5428 + -7 * 9:
    case 2161 * 3 + -3 * 3557 + 9809:
    case -778 + 1 * -148 + 4755:
      return U + t + t;
    case -1 * -2142 + 301 + 1 * 2346:
      return yn + t + t;
    case -5884 + -2293 * 4 + 20405:
    case -5550 * -1 + 495 * 19 + -1 * 10709:
    case 985 + -149 * -37 + 2 * -844:
    case 9138 + -249 * 33 + 6047:
    case 2756:
      return U + t + yn + t + ee + t + t;
    case -1 * 1509 + -3 * 2701 + 15548:
      switch (xe(t, o + (-771 + -3722 * -1 + -14 * 210))) {
        case 5807 + 19 * -131 + -3204:
          return U + t + ee + N(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        case -22 * 298 + 59 * 164 + -3012:
          return U + t + ee + N(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        case -8943 + -3 * -2996:
          return U + t + ee + N(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    case -1373 + 443 * -8 + 11745:
    case -3278 + 1285 * -1 + 8831 * 1:
    case -8417 + 212 * -45 + 20860:
      return U + t + ee + t + t;
    case 3 * 2399 + -12095 + 11063:
      return U + t + ee + "flex-" + t + t;
    case 4816 + 1667 * -6 + 11 * 943:
      return U + t + N(t, /(\w+).+(:[^]+)/, U + "box-$1$2" + ee + "flex-$1$2") + t;
    case -47 * 139 + 2399 + -157 * -61:
      return U + t + ee + "flex-item-" + N(t, /flex-|-self/g, "") + (tt(t, /flex-|baseline/) ? "" : ee + "grid-row-" + N(t, /flex-|-self/g, "")) + t;
    case -211 * -7 + -5351 + 8549:
      return U + t + ee + "flex-line-pack" + N(t, /align-content|flex-|-self/g, "") + t;
    case 260 + -3 * -1289 + 7 * 203:
      return U + t + ee + N(t, "shrink", "negative") + t;
    case 5292:
      return U + t + ee + N(t, "basis", "preferred-size") + t;
    case 11877 + 1 * -3842 + -5 * 395:
      return U + "box-" + N(t, "-grow", "") + U + t + ee + N(t, "grow", "positive") + t;
    case -19 * -453 + 3778 + 191 * -41:
      return U + N(t, /([^-])(transform)/g, "$1" + U + "$2") + t;
    case 5761 + -1 * 8386 + 4 * 2203:
      return N(N(N(t, /(zoom-|grab)/, U + "$1"), /(image-set)/, U + "$1"), t, "") + t;
    case -445 * -4 + -1 * -1783 + 1932:
    case -4 * -1762 + -3 * 2512 + 4447:
      return N(t, /(image-set\([^]*)/, U + "$1$`$1");
    case 4538 + -1015 * -2 + -1600:
      return N(N(t, /(.+:)(flex-)?(.*)/, U + "box-pack:$3" + ee + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + U + t + t;
    case 7402 + 5 * 1622 + -11312:
      if (!tt(t, /flex-|baseline/))
        return ee + "grid-column-align" + $t(t, o) + t;
      break;
    case 7 * -194 + 2477 + 1473:
    case 5212 + -926 * 2:
      return ee + N(t, "template-", "") + t;
    case -40 * 223 + 204 * 29 + 7388:
    case -17 * -145 + 7742 + -6591:
      return e && e.some(function(i, n) {
        return o = n, tt(i.props, /grid-\w+-end/);
      }) ? ~ri(t + (e = e[o].value), "span") ? t : ee + N(t, "-start", "") + t + ee + "grid-row-span:" + (~ri(e, "span") ? tt(e, /\d+/) : +tt(e, /\d+/) - +tt(t, /\d+/)) + ";" : ee + N(t, "-start", "") + t;
    case -3485 + 1 * 2441 + 5940:
    case 5 * 1861 + -55 + -197 * 26:
      return e && e.some(function(i) {
        return tt(i.props, /grid-\w+-start/);
      }) ? t : ee + N(N(t, "-end", "-span"), "span ", "") + t;
    case -1 * -3719 + 1 * 2455 + -11 * 189:
    case -7102 + 1 * 9410 + 1275:
    case 1 * -8711 + 1 * -178 + 12957:
    case 4 * -164 + -1023 + 4211 * 1:
      return N(t, /(.+)-inline(.+)/, U + "$1$2") + t;
    case 356 * 11 + -10896 + 629 * 24:
    case -1643 + -253 * -4 + 7690:
    case -4311 + 58 * -79 + 14646:
    case -9649 + 3796 * 4:
    case -575 + -147 * 14 + 8078:
    case -6077 * -1 + 1181 * 5 + -6281:
    case -6527 + -3 * 2628 + 19344:
    case -905 + 8 * -1126 + 14590:
    case 4857 * 2 + -161 * 5 + -3376:
    case 1 * -517 + -2727 + -3011 * -3:
    case 1 * -9231 + 2 * 3558 + 7136:
    case 4765:
      if (Xe(t) - (245 * -27 + -3472 * 1 + -26 * -388) - o > 2 * 848 + 8186 + -1 * 9876)
        switch (xe(t, o + (40 * 38 + -5768 + 607 * 7))) {
          case -4 * 881 + -49 * 39 + 44 * 126:
            if (xe(t, o + (671 + -4900 * 2 + 9133)) !== 2 * 4253 + 6707 * -1 + 877 * -2)
              break;
          case -2 * -2051 + -7480 + 8 * 435:
            return N(t, /(.+:)(.+)-([^]+)/, "$1" + U + "$2-$3$1" + yn + (xe(t, o + (9 * -412 + 4142 + -431)) == -3 * 2062 + -2023 + -8317 * -1 ? "$3" : "$2-$3")) + t;
          case -13096 + 13211 * 1:
            return ~ri(t, "stretch") ? ms(N(t, "stretch", "fill-available"), o, e) + t : t;
        }
      break;
    case 5152:
    case -6881 + -251 * -51:
      return N(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(i, n, r, a, s, g, x) {
        return ee + n + ":" + r + x + (a ? ee + n + "-span:" + (s ? g : +g - +r) + x : "") + t;
      });
    case -10 * 588 + 4732 + 6097:
      if (xe(t, o + 6) === 121)
        return N(t, ":", ":" + U) + t;
      break;
    case -2462 * 2 + 6 * 779 + 3347 * 2:
      switch (xe(t, xe(t, 951 * 3 + -5136 + 1 * 2297) === 45 ? 3467 + 1 * -3449 : 1265 * -1 + 3 * -983 + 4225)) {
        case -1990 + -96 * -32 + 481 * -2:
          return N(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + U + (xe(t, -9396 + 2287 * 2 + -806 * -6) === 9597 + 597 * -16 ? "inline-" : "") + "box$3$1" + U + "$2$3$1" + ee + "$2box$3") + t;
        case -6319 + -3503 * 1 + 9922:
          return N(t, ":", ":" + ee) + t;
      }
      break;
    case -853 * 10 + -978 + 1 * 15227:
    case 3527 + -955 * 7 + 27 * 215:
    case 2111 * -3 + 7019 * -1 + 15487:
    case -4418 + -1 * -4882 + -1 * -3463:
    case 6339 * -1 + 2 * 168 + 8394:
      return N(t, "scroll-", "scroll-snap-") + t;
  }
  return t;
}
function Ai(t, o) {
  for (var e = "", i = 6968 + 1 * -6968; i < t.length; i++)
    e += o(t[i], i, t, o) || "";
  return e;
}
function oc(t, o, e, i) {
  switch (t.type) {
    case X0:
      if (t.children.length)
        break;
    case D0:
    case $o:
      return t.return = t.return || t.value;
    case ds:
      return "";
    case As:
      return t.return = t.value + "{" + Ai(t.children, i) + "}";
    case Hi:
      if (!Xe(t.value = t.props.join(",")))
        return "";
  }
  return Xe(e = Ai(t.children, i)) ? t.return = t.value + "{" + e + "}" : "";
}
function rc(t) {
  var o = fs(t);
  return function(e, i, n, r) {
    for (var a = "", s = 0; s < o; s++)
      a += t[s](e, i, n, r) || "";
    return a;
  };
}
function ac(t) {
  return function(o) {
    o.root || (o = o.return) && t(o);
  };
}
function sc(t, o, e, i) {
  if (t.length > -(-6480 + -47 * -25 + 5306) && !t.return)
    switch (t.type) {
      case $o:
        t.return = ms(t.value, t.length, e);
        return;
      case As:
        return Ai([ct(t, { value: N(t.value, "@", "@" + U) })], i);
      case Hi:
        if (t.length)
          return U0(e = t.props, function(n) {
            switch (tt(n, i = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Ft(ct(t, { props: [N(n, /:(read-\w+)/, ":" + yn + "$1")] }));
                var r = {};
                r.props = [n], Ft(ct(t, r)), bo(t, { props: sa(e, i) });
                break;
              case "::placeholder":
                Ft(ct(t, { props: [N(n, /:(plac\w+)/, ":" + U + "input-$1")] })), Ft(ct(t, { props: [N(n, /:(plac\w+)/, ":" + yn + "$1")] })), Ft(ct(t, { props: [N(n, /:(plac\w+)/, ee + "input-$1")] }));
                var a = {};
                a.props = [n], Ft(ct(t, a)), bo(t, { props: sa(e, i) });
                break;
            }
            return "";
          });
    }
}
var P = {};
P.animationIterationCount = 1, P.aspectRatio = 1, P.borderImageOutset = 1, P.borderImageSlice = 1, P.borderImageWidth = 1, P.boxFlex = 1, P.boxFlexGroup = 1, P.boxOrdinalGroup = 1, P.columnCount = 1, P.columns = 1, P.flex = 1, P.flexGrow = 1, P.flexPositive = 1, P.flexShrink = 1, P.flexNegative = 1, P.flexOrder = 1, P.gridRow = 1, P.gridRowEnd = 1, P.gridRowSpan = 1, P.gridRowStart = 1, P.gridColumn = 1, P.gridColumnEnd = 1, P.gridColumnSpan = 1, P.gridColumnStart = 1, P.msGridRow = 1, P.msGridRowSpan = 1, P.msGridColumn = 1, P.msGridColumnSpan = 1, P.fontWeight = 1, P.lineHeight = 1, P.opacity = 1, P.order = 1, P.orphans = 1, P.tabSize = 1, P.widows = 1, P.zIndex = 1, P.zoom = 1, P.WebkitLineClamp = 1, P.fillOpacity = 1, P.floodOpacity = 1, P.stopOpacity = 1, P.strokeDasharray = 1, P.strokeDashoffset = 1, P.strokeMiterlimit = 1, P.strokeOpacity = 1, P.strokeWidth = 1;
var gc = P, j = {}, kt = typeof process < "u" && j !== void 0 && (j.REACT_APP_SC_ATTR || j.SC_ATTR) || "data-styled", _o = typeof window < "u" && "HTMLElement" in window, cc = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (4859 * -1 + -1 * -1187 + -108 * -34) !== j && void (-5899 + 502 * -10 + 10919) !== j.REACT_APP_SC_DISABLE_SPEEDY && j.REACT_APP_SC_DISABLE_SPEEDY !== "" ? j.REACT_APP_SC_DISABLE_SPEEDY !== "false" && j.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (4773 * -1 + -512 + 5285) !== j && void (-1 * 6451 + 2 * 1167 + 4117) !== j.SC_DISABLE_SPEEDY && j.SC_DISABLE_SPEEDY !== "" ? j.SC_DISABLE_SPEEDY !== "false" && j.SC_DISABLE_SPEEDY : j.NODE_ENV !== "production"), Ia = /invalid hook call/i, jn = /* @__PURE__ */ new Set(), Ic = function(t, o) {
  if (j.NODE_ENV !== "production") {
    var e = o ? ' with the id of "'.concat(o, '"') : "", i = "The component ".concat(t).concat(e, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var r = !0;
      console.error = function(a) {
        for (var s = [], g = 1; g < arguments.length; g++)
          s[g - (31 * 53 + -3776 * 2 + 10 * 591)] = arguments[g];
        Ia.test(a) ? (r = !1, jn.delete(i)) : n.apply(void (-1373 + 3 * 1973 + 2 * -2273), Qt([a], s, !1));
      }, rn(), r && !jn.has(i) && (console.warn(i), jn.add(i));
    } catch (a) {
      Ia.test(a.message) && jn.delete(i);
    } finally {
      console.error = n;
    }
  }
}, Ri = Object.freeze([]), _t = Object.freeze({});
function xc(t, o, e) {
  return void (-11 * 202 + -3468 + 5690) === e && (e = _t), t.theme !== e.theme && t.theme || o || e.theme;
}
var Bo = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), lc = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, uc = /(^-|-$)/g;
function xa(t) {
  return t.replace(lc, "-").replace(uc, "");
}
var Cc = /(a)(d)/gi, la = function(t) {
  return String.fromCharCode(t + (t > 13 * 164 + 1 * 7892 + 11 * -909 ? -1993 * 3 + -11 * 185 + 8053 : 5972 + 105 * 31 + -10 * 913));
};
function wo(t) {
  var o, e = "";
  for (o = Math.abs(t); o > -2944 + -14 * -214; o = o / (4633 + 59 * -133 + 3266) | 10957 + -1 * 10957)
    e = la(o % (-697 * -1 + -5206 + -1 * -4561)) + e;
  return (la(o % (-3967 * 1 + -17 * 80 + 5379)) + e).replace(Cc, "$1-$2");
}
var no, vt = function(t, o) {
  for (var e = o.length; e; )
    t = (3 * 3083 + 335 + 1 * -9551) * t ^ o.charCodeAt(--e);
  return t;
}, bs = function(t) {
  return vt(5381, t);
};
function dc(t) {
  return wo(bs(t) >>> 4874 + -2437 * 2);
}
function ys(t) {
  return j.NODE_ENV !== "production" && typeof t == "string" && t || t.displayName || t.name || "Component";
}
function io(t) {
  return typeof t == "string" && (j.NODE_ENV === "production" || t.charAt(-1797 + 10 * 74 + 7 * 151) === t.charAt(-1 * -5651 + 8443 + 7047 * -2).toLowerCase());
}
var He = {};
He.childContextTypes = !0, He.contextType = !0, He.contextTypes = !0, He.defaultProps = !0, He.displayName = !0, He.getDefaultProps = !0, He.getDerivedStateFromError = !0, He.getDerivedStateFromProps = !0, He.mixins = !0, He.propTypes = !0, He.type = !0;
var It = {};
It.name = !0, It.length = !0, It.prototype = !0, It.caller = !0, It.callee = !0, It.arguments = !0, It.arity = !0;
var bt = {};
bt.$$typeof = !0, bt.compare = !0, bt.defaultProps = !0, bt.displayName = !0, bt.propTypes = !0, bt.type = !0;
var Xt = {};
Xt.$$typeof = !0, Xt.render = !0, Xt.defaultProps = !0, Xt.displayName = !0, Xt.propTypes = !0;
var vs = typeof Symbol == "function" && Symbol.for, Bs = vs ? Symbol.for("react.memo") : 50935 * 1 + 27964 + -18784, Ac = vs ? Symbol.for("react.forward_ref") : -18059 * -5 + -58323 + 28140, pc = He, fc = It, ws = bt, hc = ((no = {})[Ac] = Xt, no[Bs] = ws, no);
function ua(t) {
  return ("type" in (o = t) && o.type.$$typeof) === Bs ? ws : "$$typeof" in t ? hc[t.$$typeof] : pc;
  var o;
}
var mc = Object.defineProperty, bc = Object.getOwnPropertyNames, Ca = Object.getOwnPropertySymbols, yc = Object.getOwnPropertyDescriptor, vc = Object.getPrototypeOf, da = Object.prototype;
function Ss(t, o, e) {
  if (typeof o != "string") {
    if (da) {
      var i = vc(o);
      i && i !== da && Ss(t, i, e);
    }
    var n = bc(o);
    Ca && (n = n.concat(Ca(o)));
    for (var r = ua(t), a = ua(o), s = -118 * 11 + 27 * 118 + -1888; s < n.length; ++s) {
      var g = n[s];
      if (!(g in fc || e && e[g] || a && g in a || r && g in r)) {
        var x = yc(o, g);
        try {
          mc(t, g, x);
        } catch {
        }
      }
    }
  }
  return t;
}
function en(t) {
  return typeof t == "function";
}
function er(t) {
  return typeof t == "object" && "styledComponentId" in t;
}
function wt(t, o) {
  return t && o ? "".concat(t, " ").concat(o) : t || o || "";
}
function Aa(t, o) {
  if (9085 + 507 * -18 + -1 * -41 === t.length)
    return "";
  for (var e = t[-695 * 12 + 3866 + 4474], i = 6820 + -534 * 17 + 2259; i < t.length; i++)
    e += o ? o + t[i] : t[i];
  return e;
}
function tn(t) {
  return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
}
function So(t, o, e) {
  if (void (-335 + -1 * -9043 + -1244 * 7) === e && (e = !1), !e && !tn(t) && !Array.isArray(t))
    return o;
  if (Array.isArray(o))
    for (var i = 6740 + -1 * 7355 + 15 * 41; i < o.length; i++)
      t[i] = So(t[i], o[i]);
  else if (tn(o))
    for (var i in o)
      t[i] = So(t[i], o[i]);
  return t;
}
function tr(t, o) {
  var e = {};
  e.value = o, Object.defineProperty(t, "toString", e);
}
var ce = {};
ce[1] = `Cannot create styled-component for component: %s.

`, ce[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, ce[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, ce[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, ce[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, ce[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, ce[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', ce[8] = `ThemeProvider: Please make your "theme" prop an object.

`, ce[9] = "Missing document `<head>`\n\n", ce[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, ce[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, ce[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", ce[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, ce[14] = `ThemeProvider: "theme" prop is required.

`, ce[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", ce[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, ce[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, ce[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var Bc = j.NODE_ENV !== "production" ? ce : {};
function wc() {
  for (var t = [], o = -9008 + 35 * -100 + 12508; o < arguments.length; o++)
    t[o] = arguments[o];
  for (var e = t[29 * 56 + 13 * 644 + -2499 * 4], i = [], n = 5895 + -2947 * 2, r = t.length; n < r; n += -1534 * -1 + 7 * -293 + 518)
    i.push(t[n]);
  return i.forEach(function(a) {
    e = e.replace(/%[a-z]/, a);
  }), e;
}
function sn(t) {
  for (var o = [], e = 9101 * -1 + 1061 + -8041 * -1; e < arguments.length; e++)
    o[e - (-494 * 1 + 7736 + -7241)] = arguments[e];
  return j.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(o.length > 129 * 10 + 7825 + -9115 ? " Args: ".concat(o.join(", ")) : "")) : new Error(wc.apply(void (-3 * -113 + -1669 * -1 + 1004 * -2), Qt([Bc[t]], o, !1)).trim());
}
var Sc = function() {
  function t(o) {
    this.groupSizes = new Uint32Array(512), this.length = 3 * -53 + -9275 + -9946 * -1, this.tag = o;
  }
  return t.prototype.indexOfGroup = function(o) {
    for (var e = 29 + 29 * -1, i = -301 * 5 + -369 + 1874; i < o; i++)
      e += this.groupSizes[i];
    return e;
  }, t.prototype.insertRules = function(o, e) {
    if (o >= this.groupSizes.length) {
      for (var i = this.groupSizes, n = i.length, r = n; o >= r; )
        if ((r <<= 1) < -71 * 13 + -3 * -4 + 911)
          throw sn(1109 * 9 + 4453 + -2403 * 6, "".concat(o));
      this.groupSizes = new Uint32Array(r), this.groupSizes.set(i), this.length = r;
      for (var a = n; a < r; a++)
        this.groupSizes[a] = -2798 * 3 + -1 * -8193 + 201;
    }
    for (var s = this.indexOfGroup(o + (2 * -82 + -1453 * -5 + -7100)), g = (a = -3486 + 10 * 940 + -5914, e.length); a < g; a++)
      this.tag.insertRule(s, e[a]) && (this.groupSizes[o]++, s++);
  }, t.prototype.clearGroup = function(o) {
    if (o < this.length) {
      var e = this.groupSizes[o], i = this.indexOfGroup(o), n = i + e;
      this.groupSizes[o] = -890 * -3 + -4584 + 22 * 87;
      for (var r = i; r < n; r++)
        this.tag.deleteRule(i);
    }
  }, t.prototype.getGroup = function(o) {
    var e = "";
    if (o >= this.length || 2361 + 241 * -17 + -28 * -62 === this.groupSizes[o])
      return e;
    for (var i = this.groupSizes[o], n = this.indexOfGroup(o), r = n + i, a = n; a < r; a++)
      e += "".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);
    return e;
  }, t;
}(), gi = /* @__PURE__ */ new Map(), pi = /* @__PURE__ */ new Map(), ci = -8559 + 43 * 162 + 1594, Mn = function(t) {
  if (gi.has(t))
    return gi.get(t);
  for (; pi.has(ci); )
    ci++;
  var o = ci++;
  if (j.NODE_ENV !== "production" && ((54 * -125 + -119 * 62 + -14128 * -1 | o) < -389 * -25 + -3 * -969 + -6316 * 2 || o > -367682832 * 3 + 1393904 * -863 + -97264 * -34748))
    throw sn(1 * -5854 + -8180 + 14050, "".concat(o));
  return gi.set(t, o), pi.set(o, t), o;
}, Gc = function(t, o) {
  ci = o + 1, gi.set(t, o), pi.set(o, t);
}, Zc = "style[".concat(kt, "][").concat("data-styled-version", '="').concat("6.1.1", '"]'), kc = new RegExp("^".concat(kt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Hc = function(t, o, e) {
  for (var i, n = e.split(","), r = 18 * -193 + 8093 + -4619, a = n.length; r < a; r++)
    (i = n[r]) && t.registerName(o, i);
}, Kc = function(t, o) {
  for (var e, i = ((e = o.textContent) !== null && void (-5794 + 51 * 34 + 4060) !== e ? e : "").split(`/*!sc*/
`), n = [], r = 2632 + -4714 * 1 + 347 * 6, a = i.length; r < a; r++) {
    var s = i[r].trim();
    if (s) {
      var g = s.match(kc);
      if (g) {
        var x = 0 | parseInt(g[1], 10), C = g[-543 * 5 + -1 * -2793 + -76];
        -336 + 1126 * -3 + 3714 !== x && (Gc(C, x), Hc(t, C, g[-8312 + -8315 * -1]), t.getTag().insertRules(x, n)), n.length = -3527 * 1 + 1 * -5283 + 2 * 4405;
      } else
        n.push(s);
    }
  }
};
function Wc() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Gs = function(t) {
  var o = document.head, e = t || o, i = document.createElement("style"), n = function(s) {
    var g = Array.from(s.querySelectorAll("style[".concat(kt, "]")));
    return g[g.length - (241 + -2 * 3252 + 6264)];
  }(e), r = void (247 + -247 * 1) !== n ? n.nextSibling : null;
  i.setAttribute(kt, "active"), i.setAttribute("data-styled-version", "6.1.1");
  var a = Wc();
  return a && i.setAttribute("nonce", a), e.insertBefore(i, r), i;
}, Oc = function() {
  function t(o) {
    this.element = Gs(o), this.element.appendChild(document.createTextNode("")), this.sheet = function(e) {
      if (e.sheet)
        return e.sheet;
      for (var i = document.styleSheets, n = -3555 + 1 * 3555, r = i.length; n < r; n++) {
        var a = i[n];
        if (a.ownerNode === e)
          return a;
      }
      throw sn(17);
    }(this.element), this.length = -66 + -11 * -6;
  }
  return t.prototype.insertRule = function(o, e) {
    try {
      return this.sheet.insertRule(e, o), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.prototype.deleteRule = function(o) {
    this.sheet.deleteRule(o), this.length--;
  }, t.prototype.getRule = function(o) {
    var e = this.sheet.cssRules[o];
    return e && e.cssText ? e.cssText : "";
  }, t;
}(), Rc = function() {
  function t(o) {
    this.element = Gs(o), this.nodes = this.element.childNodes, this.length = 1 * -3836 + 3 * -1842 + 9362;
  }
  return t.prototype.insertRule = function(o, e) {
    if (o <= this.length && o >= 359 * -11 + 1804 * 2 + 341) {
      var i = document.createTextNode(e);
      return this.element.insertBefore(i, this.nodes[o] || null), this.length++, !0;
    }
    return !1;
  }, t.prototype.deleteRule = function(o) {
    this.element.removeChild(this.nodes[o]), this.length--;
  }, t.prototype.getRule = function(o) {
    return o < this.length ? this.nodes[o].textContent : "";
  }, t;
}(), Vc = function() {
  function t(o) {
    this.rules = [], this.length = -6726 * -1 + -5939 * 1 + -787;
  }
  return t.prototype.insertRule = function(o, e) {
    return o <= this.length && (this.rules.splice(o, -1 * 8128 + -2690 + 3606 * 3, e), this.length++, !0);
  }, t.prototype.deleteRule = function(o) {
    this.rules.splice(o, -1 * -558 + 4853 + -2705 * 2), this.length--;
  }, t.prototype.getRule = function(o) {
    return o < this.length ? this.rules[o] : "";
  }, t;
}(), pa = _o, Ec = { isServer: !_o, useCSSOMInjection: !cc }, Zs = function() {
  function t(o, e, i) {
    void (89 * -69 + -3539 + 9680) === o && (o = _t), void (-5859 + 175 * 3 + -2 * -2667) === e && (e = {});
    var n = this;
    this.options = me(me({}, Ec), o), this.gs = e, this.names = new Map(i), this.server = !!o.isServer, !this.server && _o && pa && (pa = !1, function(r) {
      for (var a = document.querySelectorAll(Zc), s = 0, g = a.length; s < g; s++) {
        var x = a[s];
        x && x.getAttribute(kt) !== "active" && (Kc(r, x), x.parentNode && x.parentNode.removeChild(x));
      }
    }(this)), tr(this, function() {
      return function(r) {
        for (var a = r.getTag(), s = a.length, g = "", x = function(l) {
          var f = function(Z) {
            return pi.get(Z);
          }(l);
          if (void (-9 * 898 + 2539 * -3 + -3 * -5233) === f)
            return "continue";
          var p = r.names.get(f), y = a.getGroup(l);
          if (void (3268 + 293 * -24 + -1 * -3764) === p || 32 * 199 + 1232 + 1 * -7600 === y.length)
            return "continue";
          var O = "".concat(kt, ".g").concat(l, '[id="').concat(f, '"]'), E = "";
          void (-11920 + -149 * -80) !== p && p.forEach(function(Z) {
            Z.length > 6 * -453 + -1 * 7301 + 43 * 233 && (E += "".concat(Z, ","));
          }), g += "".concat(y).concat(O, '{content:"').concat(E, '"}').concat(`/*!sc*/
`);
        }, C = 162 * -17 + 2284 + 5 * 94; C < s; C++)
          x(C);
        return g;
      }(n);
    });
  }
  return t.registerId = function(o) {
    return Mn(o);
  }, t.prototype.reconstructWithOptions = function(o, e) {
    return void (-2456 + 31 * 183 + 3217 * -1) === e && (e = !0), new t(me(me({}, this.options), o), this.gs, e && this.names || void (-8952 + -2984 * -3));
  }, t.prototype.allocateGSInstance = function(o) {
    return this.gs[o] = (this.gs[o] || 0) + 1;
  }, t.prototype.getTag = function() {
    return this.tag || (this.tag = (o = function(e) {
      var i = e.useCSSOMInjection, n = e.target;
      return e.isServer ? new Vc(n) : i ? new Oc(n) : new Rc(n);
    }(this.options), new Sc(o)));
    var o;
  }, t.prototype.hasNameForId = function(o, e) {
    return this.names.has(o) && this.names.get(o).has(e);
  }, t.prototype.registerName = function(o, e) {
    if (Mn(o), this.names.has(o))
      this.names.get(o).add(e);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(e), this.names.set(o, i);
    }
  }, t.prototype.insertRules = function(o, e, i) {
    this.registerName(o, e), this.getTag().insertRules(Mn(o), i);
  }, t.prototype.clearNames = function(o) {
    this.names.has(o) && this.names.get(o).clear();
  }, t.prototype.clearRules = function(o) {
    this.getTag().clearGroup(Mn(o)), this.clearNames(o);
  }, t.prototype.clearTag = function() {
    this.tag = void (283 + -3 * 3101 + -110 * -82);
  }, t;
}(), Pc = /&/g, Yc = /^\s*\/\/.*$/gm;
function ks(t, o) {
  return t.map(function(e) {
    return e.type === "rule" && (e.value = "".concat(o, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(o, " ")), e.props = e.props.map(function(i) {
      return "".concat(o, " ").concat(i);
    })), Array.isArray(e.children) && e.type !== "@keyframes" && (e.children = ks(e.children, o)), e;
  });
}
function Hs(t) {
  var o, e, i, n = t === void 0 ? _t : t, r = n.options, a = void (-1788 + -12 * 521 + 8040) === r ? _t : r, s = n.plugins, g = void (-67 * -35 + 5674 + -8019) === s ? Ri : s, x = function(f, p, y) {
    return y === e || y.startsWith(e) && y.endsWith(e) && y.replaceAll(e, "").length > 7987 * -1 + -1 * -5228 + 2759 ? ".".concat(o) : f;
  }, C = g.slice();
  C.push(function(f) {
    f.type === Hi && f.value.includes("&") && (f.props[-4223 * 1 + -8114 + 73 * 169] = f.props[49 * 152 + 199 * -6 + -6254].replace(Pc, e).replace(i, x));
  }), a.prefix && C.push(sc), C.push(oc);
  var l = function(f, p, y, O) {
    p === void 0 && (p = ""), void (2341 + 235 * -25 + -31 * -114) === y && (y = ""), void (2394 + -1 * -2634 + -5028) === O && (O = "&"), o = O, e = p, i = new RegExp("\\".concat(e, "\\b"), "g");
    var E = f.replace(Yc, ""), Z = nc(y || p ? "".concat(y, " ").concat(p, " { ").concat(E, " }") : E);
    a.namespace && (Z = ks(Z, a.namespace));
    var G = [];
    return Ai(Z, rc(C.concat(ac(function(L) {
      return G.push(L);
    })))), G;
  };
  return l.hash = g.length ? g.reduce(function(f, p) {
    return p.name || sn(-399 * 9 + 8540 + -2 * 2467), vt(f, p.name);
  }, -1701 + -7082 * -1).toString() : "", l;
}
var Lc = new Zs(), Go = Hs(), nr = Zt.createContext({ shouldForwardProp: void (-2 * -4058 + 27 * -127 + -4687), styleSheet: Lc, stylis: Go });
nr.Consumer;
var Nc = Zt.createContext(void (-5 * -454 + -2242 + 28 * -1));
function Zo() {
  return Zi(nr);
}
function Tc(t) {
  var o = je(t.stylisPlugins), e = o[11 * -379 + 7856 * -1 + 13 * 925], i = o[-686 + 7 * 308 + -13 * 113], n = Zo().styleSheet, r = Me(function() {
    var C = n, l = {};
    return l.useCSSOMInjection = !1, t.sheet ? C = t.sheet : t.target && (C = C.reconstructWithOptions({ target: t.target }, !1)), t.disableCSSOMInjection && (C = C.reconstructWithOptions(l)), C;
  }, [t.disableCSSOMInjection, t.sheet, t.target, n]), a = Me(function() {
    var C = {};
    C.namespace = t.namespace, C.prefix = t.enableVendorPrefixes;
    var l = {};
    return l.options = C, l.plugins = e, Hs(l);
  }, [t.enableVendorPrefixes, t.namespace, e]);
  be(function() {
    F0(e, t.stylisPlugins) || i(t.stylisPlugins);
  }, [t.stylisPlugins]);
  var s = Me(function() {
    var C = {};
    return C.shouldForwardProp = t.shouldForwardProp, C.styleSheet = r, C.stylis = a, C;
  }, [t.shouldForwardProp, r, a]), g = {};
  g.value = s;
  var x = {};
  return x.value = a, Zt.createElement(nr.Provider, g, Zt.createElement(Nc.Provider, x, t.children));
}
var fa = function() {
  function t(o, e) {
    var i = this;
    this.inject = function(n, r) {
      void (11373 + 1 * -11373) === r && (r = Go);
      var a = i.name + r.hash;
      n.hasNameForId(i.id, a) || n.insertRules(i.id, a, r(i.rules, a, "@keyframes"));
    }, this.name = o, this.id = "sc-keyframes-".concat(o), this.rules = e, tr(this, function() {
      throw sn(-3461 * -2 + -2438 * -3 + -14224, String(i.name));
    });
  }
  return t.prototype.getName = function(o) {
    return void (1 * -4253 + 4149 + -4 * -26) === o && (o = Go), this.name + o.hash;
  }, t;
}(), Fc = function(t) {
  return t >= "A" && t <= "Z";
};
function ha(t) {
  for (var o = "", e = 4803 + 6679 * 1 + -11482; e < t.length; e++) {
    var i = t[e];
    if (3845 + 2 * -1922 === e && i === "-" && t[-4620 + -85 * -69 + 3 * -415] === "-")
      return t;
    Fc(i) ? o += "-" + i.toLowerCase() : o += i;
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
var Ks = function(t) {
  return t == null || t === !1 || t === "";
}, Ws = function(t) {
  var o, e, i = [];
  for (var n in t) {
    var r = t[n];
    t.hasOwnProperty(n) && !Ks(r) && (Array.isArray(r) && r.isCss || en(r) ? i.push("".concat(ha(n), ":"), r, ";") : tn(r) ? i.push.apply(i, Qt(Qt(["".concat(n, " {")], Ws(r), !1), ["}"], !1)) : i.push("".concat(ha(n), ": ").concat((o = n, (e = r) == null || typeof e == "boolean" || e === "" ? "" : typeof e != "number" || -593 * 14 + -11 * -185 + 6267 === e || o in gc || o.startsWith("--") ? String(e).trim() : "".concat(e, "px")), ";")));
  }
  return i;
};
function Gt(t, o, e, i) {
  if (Ks(t))
    return [];
  if (er(t))
    return [".".concat(t.styledComponentId)];
  if (en(t)) {
    if (!en(r = t) || r.prototype && r.prototype.isReactComponent || !o)
      return [t];
    var n = t(o);
    return j.NODE_ENV === "production" || typeof n != "object" || Array.isArray(n) || n instanceof fa || tn(n) || n === null || console.error("".concat(ys(t), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Gt(n, o, e, i);
  }
  var r;
  return t instanceof fa ? e ? (t.inject(e, i), [t.getName(i)]) : [t] : tn(t) ? Ws(t) : Array.isArray(t) ? Array.prototype.concat.apply(Ri, t.map(function(a) {
    return Gt(a, o, e, i);
  })) : [t.toString()];
}
function Dc(t) {
  for (var o = -23 * -149 + 2 * -274 + -2879; o < t.length; o += 8102 * -1 + 796 + 7307) {
    var e = t[o];
    if (en(e) && !er(e))
      return !1;
  }
  return !0;
}
var Xc = bs("6.1.1"), jc = function() {
  function t(o, e, i) {
    this.rules = o, this.staticRulesId = "", this.isStatic = j.NODE_ENV === "production" && (void (-15314 + -62 * -247) === i || i.isStatic) && Dc(o), this.componentId = e, this.baseHash = vt(Xc, e), this.baseStyle = i, Zs.registerId(e);
  }
  return t.prototype.generateAndInjectStyles = function(o, e, i) {
    var n = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, e, i) : "";
    if (this.isStatic && !i.hash)
      if (this.staticRulesId && e.hasNameForId(this.componentId, this.staticRulesId))
        n = wt(n, this.staticRulesId);
      else {
        var r = Aa(Gt(this.rules, o, e, i)), a = wo(vt(this.baseHash, r) >>> -937 * -9 + 8674 * 1 + -17107 * 1);
        if (!e.hasNameForId(this.componentId, a)) {
          var s = i(r, ".".concat(a), void 0, this.componentId);
          e.insertRules(this.componentId, a, s);
        }
        n = wt(n, a), this.staticRulesId = a;
      }
    else {
      for (var g = vt(this.baseHash, i.hash), x = "", C = 2880 + 3754 * -1 + 874; C < this.rules.length; C++) {
        var l = this.rules[C];
        if (typeof l == "string")
          x += l, j.NODE_ENV !== "production" && (g = vt(g, l));
        else if (l) {
          var f = Aa(Gt(l, o, e, i));
          g = vt(g, f + C), x += f;
        }
      }
      if (x) {
        var p = wo(g >>> 0);
        e.hasNameForId(this.componentId, p) || e.insertRules(this.componentId, p, i(x, ".".concat(p), void (5180 + 4 * -1784 + 1956), this.componentId)), n = wt(n, p);
      }
    }
    return n;
  }, t;
}(), Os = Zt.createContext(void (1 * 1474 + -132 + -1342));
Os.Consumer;
var oo = {}, ma = /* @__PURE__ */ new Set();
function Mc(t, o, e) {
  var i = er(t), n = t, r = !io(t), a = o.attrs, s = a === void 0 ? Ri : a, g = o.componentId, x = void (-2519 + 1 * 2519) === g ? function(D, F) {
    var k = typeof D != "string" ? "sc" : xa(D);
    oo[k] = (oo[k] || 11927 + 1 * -11927) + (-5 * -1809 + -3721 + -5323);
    var q = "".concat(k, "-").concat(dc("6.1.1" + k + oo[k]));
    return F ? "".concat(F, "-").concat(q) : q;
  }(o.displayName, o.parentComponentId) : g, C = o.displayName, l = void (7477 + 7477 * -1) === C ? function(D) {
    return io(D) ? "styled.".concat(D) : "Styled(".concat(ys(D), ")");
  }(t) : C, f = o.displayName && o.componentId ? "".concat(xa(o.displayName), "-").concat(o.componentId) : o.componentId || x, p = i && n.attrs ? n.attrs.concat(s).filter(Boolean) : s, y = o.shouldForwardProp;
  if (i && n.shouldForwardProp) {
    var O = n.shouldForwardProp;
    if (o.shouldForwardProp) {
      var E = o.shouldForwardProp;
      y = function(D, F) {
        return O(D, F) && E(D, F);
      };
    } else
      y = O;
  }
  var Z = new jc(e, f, i ? n.componentStyle : void (4354 + -1 * 3239 + 1115 * -1));
  function G(D, F) {
    return function(k, q, z) {
      var $ = k.attrs, Ve = k.componentStyle, re = k.defaultProps, we = k.foldedComponentIds, Ee = k.styledComponentId, _ = k.target, Ce = Zt.useContext(Os), Wt = Zo(), rt = k.shouldForwardProp || Wt.shouldForwardProp;
      j.NODE_ENV !== "production" && po(Ee);
      var ye = function(At, pt, Se) {
        var Ge = {};
        Ge.className = void (15 * -538 + 7585 * 1 + 1 * 485), Ge.theme = Se;
        for (var ze, Pe = me(me({}, pt), Ge), Rt = -251 * 3 + -9667 + -1042 * -10; Rt < At.length; Rt += -9931 + 97 * -79 + 5865 * 3) {
          var Ze = en(ze = At[Rt]) ? ze(Pe) : ze;
          for (var Ye in Ze)
            Pe[Ye] = Ye === "className" ? wt(Pe[Ye], Ze[Ye]) : Ye === "style" ? me(me({}, Pe[Ye]), Ze[Ye]) : Ze[Ye];
        }
        return pt.className && (Pe.className = wt(Pe.className, pt.className)), Pe;
      }($, q, xc(q, Ce, re) || _t), at = ye.as || _, Qe = {};
      for (var de in ye)
        void (7570 + -1 * -8693 + 1251 * -13) === ye[de] || de[-130 * 14 + -1758 + 3578] === "$" || de === "as" || de === "theme" || (de === "forwardedAs" ? Qe.as = ye.forwardedAs : rt && !rt(de, at) || (Qe[de] = ye[de], rt || j.NODE_ENV !== "development" || $g(de) || ma.has(de) || !Bo.has(at) || (ma.add(de), console.warn('styled-components: it looks like an unknown prop "'.concat(de, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Ot = function(At, pt) {
        var Se = Zo(), Ge = At.generateAndInjectStyles(pt, Se.styleSheet, Se.stylis);
        return j.NODE_ENV !== "production" && po(Ge), Ge;
      }(Ve, ye);
      j.NODE_ENV !== "production" && k.warnTooManyClasses && k.warnTooManyClasses(Ot);
      var gn = wt(we, Ee);
      return Ot && (gn += " " + Ot), ye.className && (gn += " " + ye.className), Qe[io(at) && !Bo.has(at) ? "class" : "className"] = gn, Qe.ref = z, fe(at, Qe);
    }(L, D, F);
  }
  G.displayName = l;
  var L = Zt.forwardRef(G), J = {};
  return J.attrs = !0, J.componentStyle = !0, J.displayName = !0, J.foldedComponentIds = !0, J.shouldForwardProp = !0, J.styledComponentId = !0, J.target = !0, L.attrs = p, L.componentStyle = Z, L.displayName = l, L.shouldForwardProp = y, L.foldedComponentIds = i ? wt(n.foldedComponentIds, n.styledComponentId) : "", L.styledComponentId = f, L.target = i ? n.target : t, Object.defineProperty(L, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(D) {
    this._foldedDefaultProps = i ? function(F) {
      for (var k = [], q = 1; q < arguments.length; q++)
        k[q - (-2951 * -2 + 6391 + 12292 * -1)] = arguments[q];
      for (var z = 2802 * -1 + 1277 * -1 + 1 * 4079, $ = k; z < $.length; z++)
        So(F, $[z], !0);
      return F;
    }({}, n.defaultProps, D) : D;
  } }), j.NODE_ENV !== "production" && (Ic(l, f), L.warnTooManyClasses = /* @__PURE__ */ function(D, F) {
    var k = {}, q = !1;
    return function(z) {
      if (!q && (k[z] = !0, Object.keys(k).length >= 6 * 1228 + 123 * -12 + -2 * 2846)) {
        var $ = F ? ' with the id of "'.concat(F, '"') : "";
        console.warn("Over ".concat(-29 * -151 + 4809 + -42 * 214, " classes were generated for component ").concat(D).concat($, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), q = !0, k = {};
      }
    };
  }(l, f)), tr(L, function() {
    return ".".concat(L.styledComponentId);
  }), r && Ss(L, t, J), L;
}
function ba(t, o) {
  for (var e = [t[-2111 * 3 + 15 * 47 + 5628]], i = 0, n = o.length; i < n; i += -1 * -5107 + 2514 * -3 + 2436)
    e.push(o[i], t[i + (1905 * -1 + -3781 + 5687)]);
  return e;
}
var ya = function(t) {
  var o = {};
  return o.isCss = !0, Object.assign(t, o);
};
function Uc(t) {
  for (var o = [], e = 68 * -82 + -3546 + 3 * 3041; e < arguments.length; e++)
    o[e - (6287 * -1 + 6614 * -1 + 6451 * 2)] = arguments[e];
  if (en(t) || tn(t)) {
    var i = t;
    return ya(Gt(ba(Ri, Qt([i], o, !0))));
  }
  var n = t;
  return 3269 * 2 + 5507 * -1 + 1031 * -1 === o.length && 44 * -107 + -9496 * 1 + 14205 === n.length && typeof n[-4656 + -7 * -475 + -11 * -121] == "string" ? Gt(n) : ya(Gt(ba(n, o)));
}
function ko(t, o, e) {
  if (void (-3589 * -1 + -9224 + 5635 * 1) === e && (e = _t), !o)
    throw sn(1, o);
  var i = function(n) {
    for (var r = [], a = -1 * -3022 + 1 * -3682 + 661; a < arguments.length; a++)
      r[a - (4093 + 14 * -62 + -3224)] = arguments[a];
    return t(o, e, Uc.apply(void (234 * -5 + 8943 + 3 * -2591), Qt([n], r, !1)));
  };
  return i.attrs = function(n) {
    return ko(t, o, me(me({}, e), { attrs: Array.prototype.concat(e.attrs, n).filter(Boolean) }));
  }, i.withConfig = function(n) {
    return ko(t, o, me(me({}, e), n));
  }, i;
}
var Rs = function(t) {
  return ko(Mc, t);
}, Hn = Rs;
Bo.forEach(function(t) {
  Hn[t] = Rs(t);
});
j.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Un = "__sc-".concat(kt, "__");
j.NODE_ENV !== "production" && j.NODE_ENV !== "test" && typeof window < "u" && (window[Un] || (window[Un] = 0), -1 * 1847 + 8289 + -6441 === window[Un] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Un] += 2809 * -1 + -116 * -14 + 1186);
const Jc = Hn.div`
  position: relative;
`, Qc = Hn.video`
  transform: ${(t) => t.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  width: 100%;
`;
class ne extends Error {
  constructor(e, i) {
    super(e);
    Q(this, "cause");
    this.name = "AutoCaptureError", this.cause = i;
  }
  static logError(e) {
  }
  static fromCameraError(e) {
    if (this.logError(e), e instanceof ne)
      return e;
    let i;
    switch (e.name) {
      case "OverconstrainedError":
        i = "Minimum quality requirements are not met by your camera";
        break;
      case "NotReadableError":
      case "AbortError":
        i = "The webcam is already in use by another application";
        break;
      case "NotAllowedError":
        i = "To use your camera, you must allow permissions";
        break;
      case "NotFoundError":
        i = "There is no camera available to you";
        break;
      default:
        i = "An unknown camera error has occurred";
        break;
    }
    return new ne(i, e);
  }
  static fromError(e) {
    if (this.logError(e), e instanceof ne)
      return e;
    const i = "An unexpected error has occurred";
    return new ne(i);
  }
}
var Ii = ((t) => (t.CONTINUE_DETECTION = "continue-detection", t.SWITCH_CAMERA = "switch-camera", t.TOGGLE_MIRROR = "toggle-mirror", t))(Ii || {}), ot = ((t) => (t.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", t.CONTROL = "document-auto-capture:control", t.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", t.DOCUMENT_DETECTION = "document-auto-capture:document-detection", t.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", t.STATE_CHANGED = "document-auto-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", t))(ot || {}), zc = ((t) => (t.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", t.CONTROL = "face-auto-capture:control", t.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", t.FACE_DETECTION = "face-auto-capture:face-detection", t.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", t.STATE_CHANGED = "face-auto-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", t))(zc || {}), $c = ((t) => (t.ANIMATION_END = "magnifeye-auto-capture:animation-end", t.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", t))($c || {}), qc = ((t) => (t.ANIMATION_END = "smile-auto-capture:animation-end", t.STATUS_CHANGED = "smile-auto-capture:status-changed", t))(qc || {});
const et = {};
et.CANDIDATE_SELECTION = "candidate_selection", et.DOCUMENT_CENTERING = "document_centering", et.DOCUMENT_NOT_PRESENT = "document_not_present", et.DOCUMENT_TOO_FAR = "document_too_far", et.SHARPNESS_TOO_LOW = "sharpness_too_low", et.BRIGHTNESS_TOO_LOW = "brightness_too_low", et.BRIGHTNESS_TOO_HIGH = "brightness_too_high", et.HOTSPOTS_PRESENT = "hotspots_present";
const De = et, xt = {};
xt.isPresent = De.DOCUMENT_NOT_PRESENT, xt.isNotSmall = De.DOCUMENT_TOO_FAR, xt.isNotOutOfBounds = De.DOCUMENT_CENTERING, xt.isSharp = De.SHARPNESS_TOO_LOW, xt.isNotDim = De.BRIGHTNESS_TOO_LOW, xt.isNotBright = De.BRIGHTNESS_TOO_HIGH, xt.noHotspots = De.HOTSPOTS_PRESENT;
const _c = xt, hn = {};
hn.LOADING = "LOADING", hn.ERROR = "ERROR", hn.WAITING = "WAITING", hn.RUNNING = "RUNNING";
const Ke = hn;
var eI = ((t) => (t.CLOSEUP = "CLOSEUP", t.DISTANT = "DISTANT", t.MIDDLE = "MIDDLE", t))(eI || {});
const Vi = Uo(void 0);
Vi.displayName = "AppStateContext";
function tI() {
  const t = Zi(Vi);
  if (t === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return t;
}
const nI = Vi.Provider, Ei = tI;
class Vs extends We {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var e;
    const o = new ne("An unknown error has occurred");
    (e = this.context) == null || e.handleError(o);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var o;
    return ((o = this.context) == null ? void 0 : o.appState) === Ke.ERROR ? null : this.props.children;
  }
}
Q(Vs, "contextType", Vi);
const iI = Hn.canvas`
  transform: ${(t) => t.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
var oI = 9290 + 5987 * 1 + -15277;
function Ie(t, o, e, i, n, r) {
  var a, s, g = {};
  for (s in o)
    s == "ref" ? a = o[s] : g[s] = o[s];
  var x = {};
  x.type = t, x.props = g, x.key = e, x.ref = a, x.__k = null, x.__ = null, x.__b = 0, x.__e = null, x.__d = void 0, x.__c = null, x.constructor = void (-2027 + 195 * -13 + 4562), x.__v = --oI, x.__i = -1, x.__u = 0, x.__source = n, x.__self = r;
  var C = x;
  if (typeof t == "function" && (a = t.defaultProps))
    for (s in a)
      void (1265 * 4 + 1780 + -6840) === g[s] && (g[s] = a[s]);
  return S.vnode && S.vnode(C), C;
}
const rI = Hn.div`
  background-color: #00000060;
  color: #fff;
  font-size: 13px;
  width: 300px;
  padding: 10px;
  z-index: 1;
  word-break: break-word;
  position: absolute;
  top: 0;
`;
function aI() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const sI = as(({
  detectionDetails: t,
  isImageMirror: o
}, e) => aI() ? (console.log(t), Ie(Ne, {
  children: [Ie(iI, {
    ref: e,
    $isImageMirror: o
  }), Ie(rI, {
    children: Object.entries(t).map(([i, n]) => Ie("div", {
      children: [i, ": ", Ie("strong", {
        children: n
      })]
    }, i))
  })]
})) : null), gI = 131 * 73 + 1 * 8275 + 1 * -17837 + 0.5, cI = 1 * 6211 + -1200 + -5011 + 0.85, ro = 4933 * 1 + -3076 + -1 * 857, II = -4917 + -2795 * 1 + 2 * 4156, xI = 8038 + 1 * -8458 + 15 * 28, lI = (t, o) => {
  const e = {};
  e.detail = o, document.dispatchEvent(new CustomEvent(t, e));
}, Bi = class Bi {
  constructor() {
    Q(this, "lastDetails", {});
    Q(this, "delayedTime", -8 * 593 + 94 * 95 + -4186);
  }
  static getInstance() {
    return !this._instance && (this._instance = new Bi()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 4732 + 1 * -4732;
  }
  isDetailChanged(o, e) {
    return JSON.stringify(e) !== JSON.stringify(this.lastDetails[o]) ? (this.lastDetails[o] = e, !0) : !1;
  }
  dispatchCustomEventOnChange(o, e) {
    this.isDetailChanged(o, e) && lI(o, e);
  }
  dispatchDelayedCustomEventOnChange(o, e, i) {
    const n = performance.now();
    n - this.delayedTime > i && (this.dispatchCustomEventOnChange(o, e), this.delayedTime = n);
  }
};
Q(Bi, "_instance");
let Gn = Bi;
const Kn = Gn.getInstance(), va = (t, o, e = II) => {
  const i = {};
  i.instructionCode = o;
  const n = i;
  Kn.dispatchDelayedCustomEventOnChange(t, n, e);
}, Ba = (t, o) => {
  Kn.dispatchCustomEventOnChange(t, o);
}, uI = (t, o) => {
  Kn.dispatchCustomEventOnChange(t, o);
}, CI = (t, o) => {
  const e = {};
  e.size = o;
  const i = e;
  Kn.dispatchCustomEventOnChange(t, i);
}, dI = (t, o, e) => {
  const i = o.confidence < e ? void 0 : o, n = {};
  n.detectedObject = i;
  const r = n;
  Kn.dispatchCustomEventOnChange(t, r);
};
var Es = ((t) => (t.DOCUMENT = "document-auto-capture:dev", t.FACE = "face-auto-capture:dev", t))(Es || {});
const Ho = {};
Ho.SIMD = "simd", Ho.NO_SIMD = "no-simd";
const wa = Ho;
function AI(t, o) {
  const [e, i] = je(Ke.LOADING), [n, r] = je(!1), [a, s] = je(), g = di((l) => {
    const f = {};
    f.appState = Ke.ERROR, f.error = l, Ba(o, f), r(!1), t(l), s(l), i(Ke.ERROR);
  }, [t, o]), x = di((l) => {
    const f = {};
    f.appState = l, Ba(o, f), i(l);
  }, [o]), C = {};
  return C.appState = e, C.isCameraReady = n, C.setIsCameraReady = r, C.handleAppStateChange = x, C.handleError = g, C.error = a, C;
}
const Jn = (t, o) => Math.hypot(o.x - t.x, o.y - t.y), pI = (t) => t.length < 1006 + -7 * -422 + -3959 ? -9535 * -1 + 26 * 88 + -11823 : t.reduce((e, i) => e + i, -2 * 2524 + -7582 + -1263 * -10) / t.length, Ps = (t) => Number.parseFloat(t.toFixed(1 * 9923 + 295 * -7 + -7855)), fI = (t) => {
  const o = t.getContext("2d");
  o && o.clearRect(-4816 + 688 * 7, -4940 + 2205 * -1 + 1429 * 5, o.canvas.width, o.canvas.height);
};
class hI {
  static async getVideoInputDeviceList() {
    return (await navigator.mediaDevices.enumerateDevices()).filter((e) => e.kind === "videoinput");
  }
}
const mI = (t, o) => t < ro && o >= ro ? ro : t, bI = (t, o) => t < o ? t : o, ir = ({ height: t, width: o }) => {
  let e;
  return o > t ? e = mI(t, o) : e = o, { width: e, height: bI(t, e) };
}, yI = (t) => {
  const o = ir(t).width, e = o * cI, i = (t.width - e) / 2, n = e / gI, r = (t.height - n) / (-1388 + -695 * -2), a = {};
  return a.shiftX = i, a.shiftY = r, a.width = e, a.height = n, a;
}, vI = (t) => {
  const { bottomLeft: o, bottomRight: e, topLeft: i, topRight: n } = t, r = Jn(i, n), a = Jn(n, e), s = Jn(o, e), g = Jn(i, o);
  return Math.min(r, a, s, g);
}, BI = "@innovatrics/dot-common-auto-capture", wI = "5.2.4", SI = "module", GI = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, ZI = {
  "@dot/proto-files": "1.0.3",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.2.2",
  comlink: "^4.4.1",
  preact: "^10.19.3",
  "styled-components": "^6.1.1",
  "wasm-feature-detect": "^1.6.1"
}, kI = {
  "@preact/preset-vite": "^2.7.0",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.3.3",
  vite: "^5.0.10",
  vitest: "^1.0.4"
}, HI = {
  name: BI,
  private: !0,
  version: wI,
  type: SI,
  scripts: GI,
  dependencies: ZI,
  devDependencies: kI
}, KI = 5821 + 714 * 2 + -7249 + 0.8, WI = 4613 * -2 + 4741 + 195 * 23 + 0.43, OI = 6 * -598 + -1607 * 1 + 5195 + 0.03, RI = 2382 * 3 + -1 * 2939 + -4207 * 1 + 0.5, VI = -5672 * -1 + 905 * -10 + -1689 * -2 + 0.25, EI = 9 * -344 + -7711 + 10807 + 0.9, PI = 776 * 11 + 3 * -2434 + -617 * 2 + 0.1, xi = {};
xi.minDuration = 1e3, xi.maxDuration = 2500, xi.minFrames = 10;
const ao = xi, Ko = {};
Ko.max = 100, Ko.min = 10;
const Sa = Ko, YI = -493 + -369 * -9 + -2108, LI = 1039 * -9 + 4626 + 985 * 5, NI = 3, Ys = "AES-CBC", Ls = "RSA-OAEP", TI = "SHA-256", FI = "image/jpeg", DI = 8, XI = "SAM v1.35.3 for idcards", or = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), Ga = () => {
  const t = /Android/i.test(navigator.userAgent), o = /Firefox/i.test(navigator.userAgent);
  return t && o;
}, jI = () => {
  const t = navigator.userAgent.includes("Chrome"), o = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return t && o ? !1 : o;
}, Wo = (t) => new Promise((o) => {
  setTimeout(o, t);
}), Cn = (t) => JSON.parse(JSON.stringify(t, (o, e) => typeof e == "number" ? Ps(e) : e)), MI = () => HI.version, Ns = (t) => new URL(t).hostname.replace("www.", ""), UI = () => Ns(window.location.href) === "localhost", Qn = (t) => Object.entries(t).map(([o, e]) => encodeURIComponent(o) + "=" + encodeURIComponent(e)).join("&"), JI = () => {
  const [t] = window.crypto.getRandomValues(new Uint32Array(1));
  return t.toString(-3 * -269 + -3434 + 2643);
}, dn = (t) => Math.round(t / 500) * 500 / (3 * 2747 + 10 + -7251), pe = (t) => t ? t <= 1297 * 2 + 29 * 263 + 5110 * -2 ? Math.round(t * 20) / (9678 + 6 * 298 + 97 * -118) : Math.round(t / 50) * (-8165 + 8 * 869 + 1263) : 1 * -964 + 3488 + -1 * 2524, zn = (t) => Math.round(t * (1033 * -5 + 85 * -66 + -1 * -10777)) / 2, QI = (t, o) => {
  const e = t && performance.now() - t;
  return o >= ao.minFrames ? e > ao.minDuration : e > ao.maxDuration;
}, zI = (t, o) => JSON.stringify(t) === JSON.stringify(o) ? o : t;
var Ts = ((t) => (t.AUTO_CAPTURE = "auto-capture", t))(Ts || {});
const so = (t) => t > -1 * 3915 + 2 * -2927 + 9829 ? ">1m" : t > -3639 * 2 + 9639 + -2316 ? ">45" : t > 30 ? ">30" : "" + t;
function $n(t, o) {
  return o ? o === "user" ? "Front Camera" : "Back Camera" : t;
}
const Dt = { appKey: "", deviceId: "", async countlyFetch(t) {
  if (!this.appKey || !this.deviceId)
    return;
  const o = {};
  o.Accept = "application/json";
  const e = {};
  e.method = "GET", e.headers = o;
  const i = e, n = "https://innovatrics.count.ly/i?", r = {};
  r.app_key = this.appKey, r.device_id = this.deviceId;
  const a = Qn(r);
  await fetch("" + n + a + "&" + t, i);
}, async init(t, o) {
  if (!o)
    return;
  this.appKey = o, this.deviceId = t;
  const e = { _app_version: MI() }, i = { organization: Ns(window.location.href) }, n = Qn({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(i) });
  await this.countlyFetch(n);
}, async endSession() {
  const t = {};
  t.end_session = "1";
  const o = Qn(t);
  await this.countlyFetch(o);
}, async sendAutoCaptureEvent(t, o) {
  const e = {};
  e.key = Ts.AUTO_CAPTURE, e.count = 1, e.dur = o, e.segmentation = t;
  const i = [e], n = Qn({ events: JSON.stringify(i) });
  await this.countlyFetch(n);
}, async sendDocumentData({ deviceName: t, documentDetection: o, facingMode: e, instructionSet: i, ...n }) {
  if (!o)
    return;
  const r = dn(n.captureProcessDurationInMs), a = { hotspots: pe(o.hotspots), brightness: pe(o.brightness), confidence: pe(o.confidence), sharpness: pe(o.sharpness), smallestEdge: pe(o.smallestEdge), camera: $n(t, e), imageResolution: n.imageResolution.width + "x" + n.imageResolution.height, averageFps: zn(n.averageFps), captureTime: so(r), instructionSet: i };
  this.sendAutoCaptureEvent(a, r);
}, async sendFaceData({ deviceName: t, faceDetection: o, facingMode: e, instructionSet: i, ...n }) {
  if (!o)
    return;
  const r = dn(n.captureProcessDurationInMs), a = { faceSize: pe(o.faceSize), confidence: pe(o.confidence), camera: $n(t, e), imageResolution: n.imageResolution.width + "x" + n.imageResolution.height, averageFps: zn(n.averageFps), captureTime: so(r), instructionSet: i };
  this.sendAutoCaptureEvent(a, r);
}, async sendMagnifEyeData(t, o) {
  var l, f, p, y, O, E, Z, G, L, J;
  if (!(t != null && t.length) || !(o != null && o.length))
    return;
  const [e, i, n] = t, [r, a] = o, s = zn(r.averageFps + (a == null ? void 0 : a.averageFps)) / (1 * 2386 + 1 * -7989 + 5605), g = dn(r.captureProcessDurationInMs), x = dn(a == null ? void 0 : a["captureProcessDurationInMs"]), C = { faceSizeDistant: pe((l = e.data.detection) == null ? void 0 : l.faceSize), faceSizeCloseup: pe((f = n == null ? void 0 : n.data.detection) == null ? void 0 : f.faceSize), faceSizeMiddle: pe((p = i.data.detection) == null ? void 0 : p.faceSize), confidenceDistant: pe((y = e.data.detection) == null ? void 0 : y.confidence), confidenceCloseup: pe((O = n == null ? void 0 : n.data.detection) == null ? void 0 : O.confidence), confidenceMiddle: pe((E = i.data.detection) == null ? void 0 : E.confidence), imageResolution: ((G = (Z = e.data) == null ? void 0 : Z["imageResolution"]) == null ? void 0 : G.width) + "x" + ((J = (L = e.data) == null ? void 0 : L["imageResolution"]) == null ? void 0 : J.height), averageFps: s, captureTimeCloseup: x > 31 * 262 + 211 * -45 + -709 * -2 ? ">45" : "" + x, captureTimeDistant: g > -3 * 1953 + -2 * -3133 + -29 * 13 ? ">30" : "" + g, camera: $n(r == null ? void 0 : r.deviceName, r == null ? void 0 : r.facingMode), instructionSet: r.instructionSet };
  this.sendAutoCaptureEvent(C, g + x);
}, async sendSmileLivenessData(t, o) {
  var C, l, f, p, y, O;
  if (!(t != null && t.length) || !(o != null && o.length))
    return;
  const [e, i] = t, [n, r] = o, a = zn(n.averageFps + (r == null ? void 0 : r.averageFps)) / (3177 + -1 * 1481 + 7 * -242), s = dn(n.captureProcessDurationInMs), g = 525 * -2 + 9212 + 41 * -199, x = { faceSize: pe((C = i.data.detection) == null ? void 0 : C.faceSize), confidence: pe((l = e.data.detection) == null ? void 0 : l.confidence), imageResolution: ((p = (f = e.data) == null ? void 0 : f["imageResolution"]) == null ? void 0 : p.width) + "x" + ((O = (y = e.data) == null ? void 0 : y["imageResolution"]) == null ? void 0 : O.height), averageFps: a, captureTimeNeutral: so(s), captureTimeSmile: "" + g, camera: $n(n == null ? void 0 : n.deviceName, n.facingMode), instructionSet: n.instructionSet };
  this.sendAutoCaptureEvent(x, s + g);
} }, $I = () => {
  const t = sessionStorage.getItem("dot-user-id");
  if (t)
    return t;
  const o = JI();
  return sessionStorage.setItem("dot-user-id", o), o;
}, vn = { livenessImageProcessAnalytics: [], skipSendFaceData: !1, init(t, o) {
  if (UI())
    return;
  const e = $I();
  this.skipSendFaceData = o, Dt.init(e, t);
}, endSession() {
  this.skipSendFaceData = !1, Dt.endSession();
}, sendDocumentData(t) {
  Dt.sendDocumentData(t);
}, sendFaceData(t) {
  if (this.skipSendFaceData) {
    const o = {};
    o.averageFps = t.averageFps, o.captureProcessDurationInMs = t.captureProcessDurationInMs, o.deviceName = t.deviceName, o.facingMode = t.facingMode, o.instructionSet = t.instructionSet, this.livenessImageProcessAnalytics.push(o);
    return;
  }
  Dt.sendFaceData(t);
}, sendMagnifEyeData(t) {
  Dt.sendMagnifEyeData(t, this.livenessImageProcessAnalytics), this.livenessImageProcessAnalytics = [];
}, sendSmileLivenessData(t) {
  Dt.sendSmileLivenessData(t, this.livenessImageProcessAnalytics), this.livenessImageProcessAnalytics = [];
} };
function Za(t) {
  t.getTracks().forEach((e) => {
    e.stop();
  });
}
const li = {};
li.width = 1920, li.height = 1080, li.facingMode = "user";
const qI = li;
class Bn extends hI {
  constructor(e) {
    super();
    Q(this, "videoRef");
    Q(this, "mediaStream", null);
    Q(this, "videoTrack", null);
    Q(this, "availableCameraProperties", []);
    this.videoRef = e;
  }
  async initWebcam(e = {}) {
    const i = await this.getBestCamera(e.facingMode);
    await this.getAvailableCamerasInfo();
    const n = this.getConstraints(e, i);
    await this.startWebcam(n), jI() && await this.startWebcam(n);
  }
  async startWebcam(e = {}) {
    var i;
    return this.stopCamera(), Ga() && await Wo(51 * -8 + -23 * -278 + -1 * 5536), this.mediaStream = await navigator.mediaDevices.getUserMedia(e), this.videoRef.srcObject = this.mediaStream, await this.videoRef.play(), this.videoTrack = (i = this.mediaStream) == null ? void 0 : i.getVideoTracks()[-32 * 269 + 1893 * -4 + -809 * -20], this.checkVideoTrackSettings(), this.videoTrack;
  }
  checkVideoTrackSettings() {
    var n;
    const e = (n = this.videoTrack) == null ? void 0 : n.getSettings();
    if (!(e != null && e.height) || !(e != null && e.width))
      throw new ne("Could not init camera settings");
    if (Math.min(e == null ? void 0 : e.width, e == null ? void 0 : e.height) < YI)
      throw this.stopCamera(), new ne("Could not init video because of low camera resolution: " + e.width + "x" + e.height + ".");
  }
  async getBestCamera(e) {
    const i = {};
    if (i.video = !0, this.mediaStream = await navigator.mediaDevices.getUserMedia(i), this.stopCamera(), or() && e === "environment")
      return (await Bn.getVideoInputDeviceList()).find((a) => a.label.includes("back") && a.label.includes("0"));
  }
  async getAvailableCamerasInfo() {
    const e = await Bn.getVideoInputDeviceList();
    for (const i of e) {
      Ga() && await Wo(-197 * -35 + -8516 + 2071);
      try {
        const n = {};
        n.deviceId = i.deviceId, n.width = 480;
        const r = {};
        r.video = n;
        const a = await navigator.mediaDevices.getUserMedia(r), [s] = a.getVideoTracks(), g = s.getSettings(), x = { ...g };
        x.deviceName = s.label;
        const C = {};
        C.cameraProperties = x;
        const l = C;
        this.availableCameraProperties.push(l), Za(a);
      } catch (n) {
        n instanceof Error && ne.logError(n);
      }
    }
  }
  getConstraints(e, i) {
    const n = { ...qI, ...e };
    n.deviceId = i ? { exact: i.deviceId } : void (-1073 + -614 * -6 + -7 * 373);
    const r = {};
    return r.video = n, r.audio = !1, r;
  }
  takePhoto() {
    var r;
    const e = (r = this.videoTrack) == null ? void 0 : r.getSettings();
    if (!(e != null && e.width))
      throw new ne("Cant take photo - video width is undefined");
    if (!(e != null && e.height))
      throw new ne("Cant take photo - video height is undefined");
    const i = document.createElement("canvas");
    i.width = e.width, i.height = e.height;
    const n = i.getContext("2d");
    if (!n)
      throw new ne("Cant take photo - cant create context");
    return n.drawImage(this.videoRef, 5 * -530 + 1851 + -1 * -799, 1982 + 371 * -2 + 20 * -62), i;
  }
  getCameraResolution() {
    var n;
    const e = (n = this.videoTrack) == null ? void 0 : n.getSettings();
    if (!(e != null && e.width))
      throw new ne("Video width is undefined");
    if (!(e != null && e.height))
      throw new ne("Video height is undefined");
    const i = {};
    return i.width = e.width, i.height = e.height, i;
  }
  getCameraSettings() {
    if (!this.videoTrack)
      throw Error("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  async getDeviceName() {
    if (!this.videoTrack)
      throw Error("Video track must be initialized to get device name");
    const e = this.videoTrack.getSettings(), i = await navigator.mediaDevices.enumerateDevices(), n = i.find((r) => r.deviceId === e.deviceId);
    return n == null ? void 0 : n.label;
  }
  async applyNewConstraints(e) {
    if (!this.videoTrack)
      throw Error("Video track must be initialized to set new constraints");
    await this.videoTrack.applyConstraints(e);
  }
  async switchCamera() {
    if (!this.videoTrack)
      throw Error("Video track must be initialized to set new constraints");
    const e = this.videoTrack.getConstraints(), i = this.videoTrack.getSettings(), n = await Bn.getVideoInputDeviceList();
    if (n.length <= 1090 + -791 * -4 + 4253 * -1)
      return;
    const r = n.findIndex((g) => g.deviceId === i.deviceId), a = n[r + 1] ?? n[7408 + 8 * -926], s = this.getConstraints(e, a);
    await this.startWebcam(s);
  }
  stopCamera() {
    this.mediaStream && (Za(this.mediaStream), this.videoRef.srcObject = null);
  }
  checkIfStreamIsRunning() {
    return !!this.videoRef.srcObject;
  }
  async getCameraProperties() {
    const e = await this.getDeviceName(), i = this.getCameraSettings(), n = { ...i };
    n.deviceName = e;
    const r = {};
    return r.currentCameraProperties = n, r.availableCameraProperties = this.availableCameraProperties, r;
  }
}
var Be = {};
Be.VITE_FACE_COUNTLY_APP_KEY = "5f83e83ee4cee1ab6e5bbf86e215644473299675", Be.VITE_MAGNIFEYE_COUNTLY_APP_KEY = "d5ca54dabfb1a2c72d7090c9c8980252a879da44", Be.VITE_DOCUMENT_COUNTLY_APP_KEY = "065cf6e242fc5e785cd17eebfbfbbd212a33133b", Be.VITE_COUNTLY_URL = "https://innovatrics.count.ly", Be.VITE_SMILE_COUNTLY_APP_KEY = "d64319129bb0ee02eccfab418edba9629a97d6b6", Be.VITE_RSA_PUBLIC_KEY = "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", Be.BASE_URL = "/", Be.MODE = "production", Be.DEV = !1, Be.PROD = !0, Be.SSR = !1, Be.VITE_PACKAGE_VERSION = "5.2.4";
var _I = Be;
const ex = () => {
  var t;
  return ((t = _I.VITE_APP_ENV) == null ? void 0 : t.toLowerCase()) === "dev";
};
class Fs extends Array {
  constructor(e) {
    super();
    Q(this, "size");
    this.size = e;
  }
  pushFixed(...e) {
    if (e.length > this.size) {
      const i = e.slice(-this.size);
      this.push(...i);
      return;
    }
    this.length === this.size && this.splice(-29 * 139 + 4314 + -283, e.length), this.push(...e);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-7741 * 1 + 8857 + 1116 * -1);
  }
}
const tx = (t, o, e = FI) => new Promise((i) => {
  t.toBlob((n) => {
    if (!n)
      throw new Error("Canvas to Blob failed");
    i(n);
  }, e, o);
}), nx = async (t) => tx(t, 1 * -4933 + -6754 + 1 * 11777), ix = (t, o) => {
  const e = document.createElement("canvas");
  e.width = o.width, e.height = o.height;
  const i = e.getContext("2d");
  if (!i)
    throw new Error("cropImage ctx error");
  return i.drawImage(t, o.shiftX, o.shiftY, o.width, o.height, 635 + -314 * -1 + -949, 9350 + 374 * -25, e.width, e.height), e;
}, ox = (t) => {
  const o = t.getContext("2d");
  if (!o)
    throw new Error("getImageDataForSam ctx error");
  const { data: e } = o.getImageData(0, 383 * 23 + 286 * 21 + 14815 * -1, t.width, t.height);
  return e;
}, rx = (t, o, e, i) => {
  const n = t.getContext("2d");
  n && (n.beginPath(), i ? (n.fillStyle = e, n.fillRect(o.topLeft.x, o.topLeft.y, o.width, o.height)) : (n.strokeStyle = e, n.rect(o.topLeft.x, o.topLeft.y, o.width, o.height)), n.stroke());
}, go = (t, o, e) => {
  const { height: i, shiftX: n, shiftY: r, width: a } = o, s = {};
  s.x = n, s.y = r;
  const g = {};
  g.topLeft = s, g.width = a, g.height = i, g.color = e, rx(t, g, e);
}, ax = (t, o, e, i) => {
  const n = t.getContext("2d");
  if (!n)
    return;
  const { bottomLeft: r, bottomRight: a, topLeft: s, topRight: g } = o;
  i ? n.fillStyle = e : n.strokeStyle = e, n.beginPath(), n.moveTo(s.x, s.y), n.lineTo(g.x, g.y), n.lineTo(a.x, a.y), n.lineTo(r.x, r.y), n.closePath(), i ? n.fill() : n.stroke();
}, sx = (t, o) => {
  const { height: e, shiftX: i, shiftY: n, width: r } = o;
  return !(t.x < i || t.x > i + r || t.y < n || t.y > n + e);
}, gx = (t, o) => Object.values(t).every((e) => sx(e, o)), Ds = Uo(null), Xs = () => {
  const t = Zi(Ds);
  if (!t)
    throw new Error("Missing provider for CameraOptionsContext");
  return t;
}, cx = (t) => {
  const {
    cameraFacing: o,
    onError: e,
    onPhotoTaken: i,
    sessionToken: n,
    thresholds: r,
    wasmDirectoryPath: a
  } = t, s = or() ? "environment" : "user";
  return {
    onPhotoTaken: i,
    onError: e,
    cameraFacing: o ?? s,
    wasmDirectoryPath: a,
    sessionToken: n,
    thresholds: {
      confidenceThreshold: (r == null ? void 0 : r.confidenceThreshold) ?? KI,
      sharpnessThreshold: (r == null ? void 0 : r.sharpnessThreshold) ?? RI,
      brightnessLowThreshold: (r == null ? void 0 : r.brightnessLowThreshold) ?? VI,
      brightnessHighThreshold: (r == null ? void 0 : r.brightnessHighThreshold) ?? EI,
      hotspotsScoreThreshold: (r == null ? void 0 : r.hotspotsScoreThreshold) ?? PI,
      sizeSmallThreshold: (r == null ? void 0 : r.sizeSmallThreshold) ?? WI,
      outOfBoundsThreshold: (r == null ? void 0 : r.outOfBoundsThreshold) ?? OI
    }
  };
}, js = ({
  cameraOptions: t,
  children: o
}) => {
  const e = Me(() => ({
    documentCameraOptions: cx(t)
  }), [t]);
  return Ie(Ds.Provider, {
    value: e,
    children: o
  });
}, Ix = (t, o) => {
  if (ex()) {
    const e = {};
    e.candidateSelectionImages = o;
    const i = e;
    Gn.getInstance().dispatchCustomEventOnChange(t, i);
  }
}, xx = (t, o) => {
  const { cameraResolution: e, shouldMirror: i } = o;
  be(() => {
    if (!e)
      return;
    const n = {};
    n.cameraResolution = e, n.isMirroring = i, uI(t, n);
  }, [e, i, t]);
}, lx = (t) => t === ot.CONTROL ? !or() : !0, ux = (t, o) => {
  const { appState: e, handleAppStateChange: i, handleError: n } = Ei(), [r, a] = je(), s = Me(() => {
    const x = o == null ? void 0 : o.getCameraSettings().facingMode;
    return x ? r ?? x === "user" : r ?? lx(t);
  }, [o, r, t]);
  be(() => {
    const x = () => {
      e !== Ke.LOADING && i(Ke.RUNNING);
    }, C = () => {
      a(r === void 0 ? !s : !r);
    }, l = async () => {
      if (o) {
        i(Ke.LOADING);
        try {
          await o.switchCamera(), i(Ke.RUNNING);
        } catch (p) {
          if (p instanceof Error) {
            n(ne.fromCameraError(p));
            return;
          }
        }
        a(void 0);
      }
    }, f = (p) => {
      var y;
      switch ((y = p.detail) == null ? void 0 : y["instruction"]) {
        case Ii.CONTINUE_DETECTION:
          x();
          break;
        case Ii.TOGGLE_MIRROR:
          C();
          break;
        case Ii.SWITCH_CAMERA:
          l();
          break;
        default:
          return;
      }
    };
    return document.addEventListener(t, f), () => {
      document.removeEventListener(t, f);
    };
  }, [e, o, n, r, i, s, t]);
  const g = {};
  return g.shouldMirror = s, g;
}, Cx = (t, o) => {
  var g;
  const e = rn(), { handleError: i, setIsCameraReady: n } = Ei(), [r, a] = je(), s = di((x) => {
    a((C) => zI(x, C));
  }, []);
  return be(() => ((async () => {
    if (!(t != null && t.current)) {
      i(new ne("Something went wrong during video initialization"));
      return;
    }
    const C = new Bn(t.current);
    try {
      const l = {};
      l.facingMode = o, await C.initWebcam(l);
    } catch (l) {
      if (l instanceof Error) {
        i(ne.fromCameraError(l));
        return;
      }
    }
    n(!0), s(C.getCameraResolution()), e.current = C;
  })(), function() {
    e.current && e.current.stopCamera();
  }), [o, i, n, t, s]), { cameraHandler: e.current, cameraSettings: (g = e.current) == null ? void 0 : g.getCameraSettings(), cameraResolution: r, onCameraResolutionChange: s };
}, dx = () => {
  be(() => (window.addEventListener("beforeunload", vn.endSession), () => {
    vn.endSession(), window.removeEventListener("beforeunload", vn.endSession);
  }), []);
}, Ax = (t, o) => {
  const [e, i] = je();
  be(() => {
    const n = () => {
      !t.current || e === window.innerWidth || (i(window.innerWidth), CI(o, t.current.getBoundingClientRect()));
    };
    return n(), window.addEventListener("resize", n), () => {
      window.removeEventListener("resize", n);
    };
  }, [t, o, e]);
};
function fi() {
  throw new Error("Cycle detected");
}
var px = Symbol.for("preact-signals");
function rr() {
  if (Ut > 1214 * 7 + -2 * -1711 + 3973 * -3)
    Ut--;
  else {
    for (var t, o = !1; void (-8255 + 635 * 13) !== wn; ) {
      var e = wn;
      for (wn = void (-4612 + -101 * 29 + 7541), Oo++; void (-6515 + 1 * 6515) !== e; ) {
        var i = e.o;
        if (e.o = void (-6801 + -2267 * -3), e.f &= -(5948 + -183 * -23 + 2 * -5077), !(-2 * -3338 + 11 * 305 + 771 * -13 & e.f) && Js(e))
          try {
            e.c();
          } catch (n) {
            !o && (t = n, o = !(19 * -419 + -1 * 8719 + 30 * 556));
          }
        e = i;
      }
    }
    if (Oo = -265 * -25 + 8656 + 7 * -2183, Ut--, o)
      throw t;
  }
}
var oe = void (-1 * 811 + 7864 + -2351 * 3), wn = void (-1 * 1369 + -1415 + 2784), Ut = -1 * 7789 + 4328 + 3461 * 1, Oo = -2 * 1498 + 7629 + -4633, hi = -3948 + -927 * 3 + 6729;
function Ms(t) {
  if (void (2748 * -1 + 5 * 16 + 116 * 23) !== oe) {
    var o = t.n;
    if (void (-1162 * -1 + -2495 * -1 + -1 * 3657) === o || o.t !== oe)
      return o = { i: 0, S: t, p: oe.s, n: void 0, t: oe, e: void 0, x: void (4338 + -1930 * -3 + -10128), r: o }, void (-7394 + 7394 * 1) !== oe.s && (oe.s.n = o), oe.s = o, t.n = o, 3015 + -451 * -13 + -4423 * 2 & oe.f && t.S(o), o;
    if (-(1201 * -8 + -783 + 10392) === o.i)
      return o.i = 808 + -1143 * -3 + -4237 * 1, void (213 * 9 + -8360 * -1 + -10277) !== o.n && (o.n.p = o.p, void (2 * 3947 + 8033 + 3 * -5309) !== o.p && (o.p.n = o.n), o.p = oe.s, o.n = void (-12 * -815 + 3 * 2609 + -17607), oe.s.n = o, oe.s = o), o;
  }
}
function ue(t) {
  this.v = t, this.i = 2101 * -4 + -8211 + -16615 * -1, this.n = void 0, this.t = void 0;
}
ue.prototype.brand = px, ue.prototype.h = function() {
  return !0;
}, ue.prototype.S = function(t) {
  this.t !== t && t.e === void 0 && (t.x = this.t, void (-2904 + -125 * 19 + -1 * -5279) !== this.t && (this.t.e = t), this.t = t);
}, ue.prototype.U = function(t) {
  if (void (21 * 432 + 794 * -9 + -1 * 1926) !== this.t) {
    var o = t.e, e = t.x;
    void (-1902 + -11 * 45 + 2397) !== o && (o.x = e, t.e = void (2693 + -491 * -17 + -11040)), void (-363 + -2 * -1959 + -3555) !== e && (e.e = o, t.x = void (-1 * 6769 + -8200 + 14969)), t === this.t && (this.t = e);
  }
}, ue.prototype.subscribe = function(t) {
  var o = this;
  return sr(function() {
    var e = o.value, i = 12420 + 6194 * -2 & this.f;
    this.f &= -(3919 + -5 * -431 + 863 * -7);
    try {
      t(e);
    } finally {
      this.f |= i;
    }
  });
}, ue.prototype.valueOf = function() {
  return this.value;
}, ue.prototype.toString = function() {
  return this.value + "";
}, ue.prototype.toJSON = function() {
  return this.value;
}, ue.prototype.peek = function() {
  return this.v;
}, Object.defineProperty(ue.prototype, "value", { get: function() {
  var t = Ms(this);
  return t !== void 0 && (t.i = this.i), this.v;
}, set: function(t) {
  if (oe instanceof lt && function() {
    throw new Error("Computed cannot have side-effects");
  }(), t !== this.v) {
    Oo > -4057 * -2 + -164 + 1 * -7850 && fi(), this.v = t, this.i++, hi++, Ut++;
    try {
      for (var o = this.t; void (555 * -2 + 1318 * -4 + 6382 * 1) !== o; o = o.x)
        o.t.N();
    } finally {
      rr();
    }
  }
} });
function Us(t) {
  return new ue(t);
}
function Js(t) {
  for (var o = t.s; void (-2093 + -161 * -13) !== o; o = o.n)
    if (o.S.i !== o.i || !o.S.h() || o.S.i !== o.i)
      return !0;
  return !(-691 * -12 + -1 * 8309 + 18);
}
function Qs(t) {
  for (var o = t.s; void (5386 + -2 * 2744 + 1 * 102) !== o; o = o.n) {
    var e = o.S.n;
    if (void (-12231 + 81 * 151) !== e && (o.r = e), o.S.n = o, o.i = -(7946 + -541 * -6 + -31 * 361), void (4330 + -30 * -64 + -5 * 1250) === o.n) {
      t.s = o;
      break;
    }
  }
}
function zs(t) {
  for (var o = t.s, e = void (8118 + 2 * -977 + 268 * -23); void (1972 * 1 + -62 * 141 + 3385 * 2) !== o; ) {
    var i = o.p;
    -(7 * 546 + -1084 + -391 * 7) === o.i ? (o.S.U(o), void (3 * 3023 + -3 * 1113 + -2 * 2865) !== i && (i.n = o.n), void (845 + 1 * -845) !== o.n && (o.n.p = i)) : e = o, o.S.n = o.r, o.r !== void 0 && (o.r = void (43 * 131 + 1 * 2190 + 1 * -7823)), o = i;
  }
  t.s = e;
}
function lt(t) {
  ue.call(this, void (2 * -3470 + 2 * 887 + 5166)), this.x = t, this.s = void (3647 * 2 + 1676 + -8970), this.g = hi - 1, this.f = 269 * 34 + -5 * -1497 + 1279 * -13;
}
(lt.prototype = new ue()).h = function() {
  if (this.f &= -(5474 + 1 * -7798 + -1 * -2327), -5 * -1217 + -37 * 53 + -4123 & this.f)
    return !(85 * 7 + 2 * -1319 + -1 * -2044);
  if (97 * -7 + 3593 + -22 * 131 == (-3733 + 3769 * 1 & this.f))
    return !0;
  if (this.f &= -(-2674 + 761 * 6 + -1887), this.g === hi)
    return !(-398 * -1 + 1021 + -43 * 33);
  if (this.g = hi, this.f |= 6200 + 75 * -74 + -649, this.i > 107 * 3 + 6586 + -6907 && !Js(this))
    return this.f &= -(1 * -9667 + 6400 + 3269), !(9646 + 1 * -9303 + -343);
  var t = oe;
  try {
    Qs(this), oe = this;
    var o = this.x();
    (5872 + 96 * -61 & this.f || this.v !== o || 61 * -148 + -2993 * -1 + -5 * -1207 === this.i) && (this.v = o, this.f &= -(7789 + -1 * 1367 + -35 * 183), this.i++);
  } catch (e) {
    this.v = e, this.f |= -8179 * -1 + -718 + -7445, this.i++;
  }
  return oe = t, zs(this), this.f &= -(1 * -5227 + 7047 + -1818), !(7893 + 2 * 2809 + -1 * 13511);
}, lt.prototype.S = function(t) {
  if (void (3508 * 2 + 2363 * -3 + 73) === this.t) {
    this.f |= -1201 + -1237 * -1;
    for (var o = this.s; void (2428 + 13 * 57 + -3169) !== o; o = o.n)
      o.S.S(o);
  }
  ue.prototype.S.call(this, t);
}, lt.prototype.U = function(t) {
  if (void (2171 * -1 + -6604 + 585 * 15) !== this.t && (ue.prototype.U.call(this, t), void (-9134 + 19 * -251 + 13903 * 1) === this.t)) {
    this.f &= -(-19491 + -2 * -9762);
    for (var o = this.s; void (8126 * -1 + 1913 + -327 * -19) !== o; o = o.n)
      o.S.U(o);
  }
}, lt.prototype.N = function() {
  if (!(-1971 * -1 + -3 * 2169 + 2269 * 2 & this.f)) {
    this.f |= -5938 + -2972 * -2;
    for (var t = this.t; void (3553 + -14 * 118 + -1901) !== t; t = t.x)
      t.t.N();
  }
}, lt.prototype.peek = function() {
  if (this.h() || fi(), -1621 * -1 + 3079 + -4684 & this.f)
    throw this.v;
  return this.v;
}, Object.defineProperty(lt.prototype, "value", { get: function() {
  10148 + 139 * -73 & this.f && fi();
  var t = Ms(this);
  if (this.h(), void (-1 * 9008 + 5 * -222 + -2 * -5059) !== t && (t.i = this.i), -683 + 12 * 160 + -1221 & this.f)
    throw this.v;
  return this.v;
} });
function fx(t) {
  return new lt(t);
}
function $s(t) {
  var o = t.u;
  if (t.u = void (-939 * 2 + -851 + 1 * 2729), typeof o == "function") {
    Ut++;
    var e = oe;
    oe = void (1363 + -1181 * -1 + -2544);
    try {
      o();
    } catch (i) {
      throw t.f &= -(-4819 * 2 + 19 * -44 + 10476), t.f |= -8 * 1230 + 14 * 25 + -2 * -4749, ar(t), i;
    } finally {
      oe = e, rr();
    }
  }
}
function ar(t) {
  for (var o = t.s; void (-751 * -13 + -18 * 375 + -3013) !== o; o = o.n)
    o.S.U(o);
  t.x = void (1 * -1109 + 1 * 2531 + -79 * 18), t.s = void (2204 + -29 * 76), $s(t);
}
function hx(t) {
  if (oe !== this)
    throw new Error("Out-of-order effect");
  zs(this), oe = t, this.f &= -(12 * -617 + 4265 + -1047 * -3), 8 & this.f && ar(this), rr();
}
function mn(t) {
  this.x = t, this.u = void (-1 * 7444 + -3345 + 1 * 10789), this.s = void (-207 * -27 + 5 * -1906 + 3941), this.o = void 0, this.f = 5173 + -5141 * 1;
}
mn.prototype.c = function() {
  var t = this.S();
  try {
    if (1081 * -9 + 2351 * -4 + 19141 & this.f || void (-10 * -61 + -6862 + 6252) === this.x)
      return;
    var o = this.x();
    typeof o == "function" && (this.u = o);
  } finally {
    t();
  }
}, mn.prototype.S = function() {
  216 * 16 + -172 * 5 + -2595 & this.f && fi(), this.f |= -6295 + -47 * 152 + -6 * -2240, this.f &= -(9348 + 283 * -33), $s(this), Qs(this), Ut++;
  var t = oe;
  return oe = this, hx.bind(this, t);
}, mn.prototype.N = function() {
  !(-4409 + -8026 * 1 + 1 * 12437 & this.f) && (this.f |= 4269 + 17 * -251, this.o = wn, wn = this);
}, mn.prototype.d = function() {
  this.f |= -3 * -46 + 1 * 6316 + 586 * -11, 1 * -2395 + -164 * 52 + 10924 & this.f || ar(this);
};
function sr(t) {
  var o = new mn(t);
  try {
    o.c();
  } catch (e) {
    throw o.d(), e;
  }
  return o.d.bind(o);
}
var co;
function Mt(t, o) {
  S[t] = o.bind(null, S[t] || function() {
  });
}
function qn(t) {
  co && co(), co = t && t.S();
}
function qs(t) {
  var o = this, e = t.data, i = _s(e);
  i.value = e;
  var n = Me(function() {
    for (var r = o.__v; r = r.__; )
      if (r.__c) {
        r.__c.__$f |= 16091 + -1 * 16087;
        break;
      }
    return o.__$u.c = function() {
      var a;
      !Ma(n.peek()) && -1 * -7851 + 1211 * 3 + 1 * -11481 === ((a = o.base) == null ? void (-1 * 1249 + -639 * -5 + -1946) : a.nodeType) ? o.base.data = n.peek() : (o.__$f |= 13642 + -13641 * 1, o.setState({}));
    }, fx(function() {
      var a = i.value.value;
      return 131 * 55 + -8999 * -1 + 16204 * -1 === a ? -1 * 4461 + 8768 + -1 * 4307 : !(-2721 * 1 + 8465 * -1 + -47 * -238) === a ? "" : a || "";
    });
  }, []);
  return n.value;
}
qs.displayName = "_st";
var Ro = {};
Ro.configurable = !(-78 * -25 + 2554 + 8 * -563), Ro.value = void (9 * -1035 + -84 * -13 + 8223);
var Vo = {};
Vo.configurable = !0, Vo.value = qs;
var Eo = {};
Eo.configurable = !(919 * -4 + -518 + -6 * -699), Eo.get = function() {
  var t = {};
  return t.data = this, t;
};
var Po = {};
Po.configurable = !0, Po.value = 1;
var An = {};
An.constructor = Ro, An.type = Vo, An.props = Eo, An.__b = Po, Object.defineProperties(ue.prototype, An), Mt("__b", function(t, o) {
  if (typeof o.type == "string") {
    var e, i = o.props;
    for (var n in i)
      if (n !== "children") {
        var r = i[n];
        r instanceof ue && (e || (o.__np = e = {}), e[n] = r, i[n] = r.peek());
      }
  }
  t(o);
}), Mt("__r", function(t, o) {
  qn();
  var e, i = o.__c;
  i && (i.__$f &= -(3489 + 166 * 29 + -8301), void (-457 * 1 + 99 * -94 + 9763) === (e = i.__$u) && (i.__$u = e = function(n) {
    var r;
    return sr(function() {
      r = this;
    }), r.c = function() {
      i.__$f |= -3494 + -43 * 197 + -62 * -193, i.setState({});
    }, r;
  }())), qn(e), t(o);
}), Mt("__e", function(t, o, e, i) {
  qn(), t(o, e, i);
}), Mt("diffed", function(t, o) {
  qn();
  var e;
  if (typeof o.type == "string" && (e = o.__e)) {
    var i = o.__np, n = o.props;
    if (i) {
      var r = e.U;
      if (r)
        for (var a in r) {
          var s = r[a];
          s !== void 0 && !(a in i) && (s.d(), r[a] = void (4 * 2248 + 2469 + -73 * 157));
        }
      else
        e.U = r = {};
      for (var g in i) {
        var x = r[g], C = i[g];
        void (-4845 + -85 * -57) === x ? (x = mx(e, g, C, n), r[g] = x) : x.o(C, n);
      }
    }
  }
  t(o);
});
function mx(t, o, e, i) {
  var n = o in t && t.ownerSVGElement === void 0, r = Us(e);
  return { o: function(a, s) {
    r.value = a, i = s;
  }, d: sr(function() {
    var a = r.value.value;
    i[o] !== a && (i[o] = a, n ? t[o] = a : a ? t.setAttribute(o, a) : t.removeAttribute(o));
  }) };
}
Mt("unmount", function(t, o) {
  if (typeof o.type == "string") {
    var e = o.__e;
    if (e) {
      var i = e.U;
      if (i) {
        e.U = void (-9619 * -1 + -295 * 23 + 2 * -1417);
        for (var n in i) {
          var r = i[n];
          r && r.d();
        }
      }
    }
  } else {
    var a = o.__c;
    if (a) {
      var s = a.__$u;
      s && (a.__$u = void (1255 * 6 + 1497 * -1 + 2011 * -3), s.d());
    }
  }
  t(o);
}), Mt("__h", function(t, o, e, i) {
  (i < -5420 + -3317 * -3 + -4528 || -3 * -382 + 79 * -91 + -1513 * -4 === i) && (o.__$f |= 1750 + 4654 * 1 + 2 * -3201), t(o, e, i);
}), We.prototype.shouldComponentUpdate = function(t, o) {
  var e = this.__$u;
  if (!(e && void (-9646 + 37 * -31 + -10793 * -1) !== e.s || -4502 + 718 * -1 + 5224 & this.__$f))
    return !(9392 + -5 * 1231 + -3237);
  if (-3 * -2813 + 31 * 31 + -9397 & this.__$f)
    return !(-1 * -811 + 9972 + -1 * 10783);
  for (var i in o)
    return !(2 * -2190 + -1 * 911 + -37 * -143);
  for (var n in t)
    if (n !== "__source" && t[n] !== this.props[n])
      return !(290 * 11 + -1228 * -3 + -2 * 3437);
  for (var r in this.props)
    if (!(r in t))
      return !(1 * -5315 + -393 * 5 + 7280);
  return !(-62 * 102 + 2095 + 47 * 90);
};
function _s(t) {
  return Me(function() {
    return Us(t);
  }, []);
}
const gr = (t) => {
  const { height: o, width: e } = ir(t), i = (t.width - e) / (-7877 * 1 + 103 * 21 + 5716), n = (t.height - o) / 2, r = {};
  return r.shiftX = i, r.shiftY = n, r.width = e, r.height = o, r;
}, eg = (t, o) => {
  const e = ir(t), i = e.width - e.width * 2 * o, n = e.height - e.height * (-1 * -349 + -3637 * -1 + -3984) * o, r = (t.width - i) / (6889 + 7 * 947 + 6758 * -2), a = (t.height - n) / (3740 + -534 * 7), s = {};
  return s.width = i, s.height = n, s.shiftX = r, s.shiftY = a, s;
}, _n = (t, o) => {
  const { shiftX: e, shiftY: i } = gr(t), n = {};
  return n.x = o.x + e, n.y = o.y + i, n;
}, bx = (t, o) => ({ ...o, topLeft: _n(t, o.topLeft), topRight: _n(t, o.topRight), bottomRight: _n(t, o.bottomRight), bottomLeft: _n(t, o.bottomLeft) }), yx = ({
  cameraResolution: t,
  detectionDetails: o,
  isImageMirror: e
}) => {
  const {
    documentCameraOptions: {
      thresholds: i
    }
  } = Xs(), n = rn(null);
  if (be(() => {
    if (!(n != null && n.current))
      return;
    n.current.width = t.width, n.current.height = t.height, fI(n.current);
    const p = gr(t), y = eg(t, i.outOfBoundsThreshold), O = yI(t);
    o.value && (ax(n.current, o.value.document, "red"), go(n.current, p, "lime"), go(n.current, y, "yellow"), go(n.current, O, "blue"));
  }, [t, o, i.outOfBoundsThreshold]), !o.value)
    return null;
  const {
    detectionTime: r,
    document: a,
    fps: s,
    instructionCode: g,
    invalidValidators: x,
    resolution: C,
    samVersion: l
  } = o.value, f = {
    Confidence: a.confidence,
    "Smallest edge": a.smallestEdge,
    Brightness: a.brightness,
    Hotspots: a.hotspots,
    Sharpness: a.sharpness,
    "Detection time": r,
    FPS: s,
    Instruction: g,
    Resolution: JSON.stringify(C),
    "Component version": "5.2.4"
  };
  return l && (f["SAM version"] = l), x.length > 0 && (f["Invalid validators"] = x.join(", ")), Ie(sI, {
    ref: n,
    cameraResolution: t,
    detectionDetails: f,
    isImageMirror: e
  });
}, vx = async () => WebAssembly.validate(new Uint8Array([-18129 + -6043 * -3, 97, 1635 + -5 * 267 + 37 * -5, 2939 + 3 * -2279 + 4007, 1681 + 15 * -478 + 5490, -7372 + -8285 * -1 + 913 * -1, -11625 + -1 * -11625, 1096 * -3 + -17 * 1 + 3305, 1 * -4432 + 76 * 11 + 3597, 7 * 1097 + -217 * -10 + 92 * -107, 10226 + -409 * 25, 31 * -20 + -614 * 9 + 6242, -1597 * -1 + 4649 * 2 + -10895 * 1, -474 * -3 + -5036 + -241 * -15, 2418 + -5 * 459, 55 * 102 + -6056 + 449, 41 * 157 + 5979 * 1 + -12414, -3828 + 1 * 6316 + -2487, -2751 * 2 + 1 * 2492 + -70 * -43, 4877 + 331 * -6 + -67 * 43, 356 * -13 + -14 * -492 + -2250, 2 * 3 + 8015 + 4010 * -2, -163 * 51 + 6643 + 1678, 46 * 7 + 2911 + -3233, 9654 + 2131 * -1 + -7458, -8 * -1151 + -1252 * -3 + -12964, 2945 + 141 * -50 + 4358, 2297 + -1141 * 2, 253, -3 * -1073 + -6807 * -1 + -17 * 584, -1 * -705 + 8802 + -9496]));
async function Bx() {
  const t = {};
  t.name = Ys, t.length = 256;
  const o = await window.crypto.subtle.generateKey(t, !0, ["encrypt", "decrypt"]), e = Uint8Array.from(Array(554 + 9 * 317 + 1 * -3391).fill(-1 * -5276 + -16 * 10 + -5116)), i = window.crypto.getRandomValues(e), n = {};
  return n.key = o, n.iv = i, n;
}
async function wx(t) {
  const { iv: o, key: e } = await Bx(), i = {};
  i.name = Ys, i.iv = o;
  const n = await window.crypto.subtle.encrypt(i, e, t), r = await window.crypto.subtle.exportKey("raw", e), a = {};
  return a.message = n, a.key = r, a.iv = o, a;
}
function Sx(t) {
  const o = new ArrayBuffer(t.length), e = new Uint8Array(o);
  for (let i = -5 * 178 + 8422 + 1076 * -7, n = t.length; i < n; i++)
    e[i] = t.charCodeAt(i);
  return o;
}
function Gx() {
  const t = "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", o = window.atob(t), e = window.atob(o), i = Sx(e), n = {};
  return n.name = Ls, n.hash = TI, window.crypto.subtle.importKey("spki", i, n, !0, ["encrypt"]);
}
async function Zx(t) {
  const o = await Gx(), e = {};
  return e.name = Ls, window.crypto.subtle.encrypt(e, o, t);
}
async function kx(t) {
  const { iv: o, key: e, message: i } = await wx(t), n = await Zx(e), r = {};
  return r.key = n, r.iv = o, r.message = i, r;
}
async function Hx(t) {
  const o = await window.crypto.subtle.digest("SHA-1", t);
  return Array.from(new Uint8Array(o)).map((e) => e.toString(4359 + -7 * 199 + -2950).padStart(97 * 17 + -2 * -2969 + -7585, "0")).join("");
}
class Kx {
  constructor() {
    Q(this, "samVersion", null);
    Q(this, "isDetectorInitialized", !1);
    Q(this, "isInCandidateSelection", !1);
    Q(this, "lastImage", null);
    Q(this, "bestImage", null);
    Q(this, "detectionRecord", []);
    Q(this, "candidateSelectionImages", []);
    Q(this, "thresholds", null);
    Q(this, "acceleration", null);
    Q(this, "imagesForDuplicateDetection", new Fs(LI));
  }
  async initDetector(o) {
    await this.detector.initSamModule(location.href, o);
    const e = await this.detector.getSamVersion();
    this.setSamVersion(e), this.isDetectorInitialized = !0;
  }
  async getInstructionSet() {
    return await vx() ? wa.SIMD : wa.NO_SIMD;
  }
  async init({ thresholds: o, wasmDirectoryPath: e }) {
    this.setThresholds(o), await this.initDetector(e);
  }
  setSamVersion(o) {
    if (!o || !this.areVersionsCompatible(o))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new ne("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = o;
  }
  areVersionsCompatible(o) {
    return o === XI;
  }
  getCandidateSelectionImages() {
    return this.candidateSelectionImages;
  }
  getBestImage() {
    return this.bestImage;
  }
  getDetectionRecord() {
    return this.detectionRecord;
  }
  getThresholds() {
    if (!this.thresholds)
      throw new ne("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
  setThresholds(o) {
    this.thresholds = o;
  }
  setAcceleration(o) {
    this.acceleration = o;
  }
  restart() {
    this.isInCandidateSelection = !1, this.lastImage = null, this.bestImage = null, this.candidateSelectionImages = [], this.detectionRecord = [], this.clearImagesForDuplicateDetection();
  }
  isDetectionValid(o) {
    return Object.values(o).every((i) => i === !0);
  }
  isNewImageBetter(o, e) {
    return e.sharpness > o.sharpness;
  }
  async collectImagesForDuplicateDetection(o) {
    const e = o.length / DI, i = e / (757 * 6 + 2269 * -4 + 4536), n = o.length / (-10632 + -13 * -818), r = await Hx(o.slice(n - i, n + i));
    this.imagesForDuplicateDetection.pushFixed(r);
  }
  clearImagesForDuplicateDetection() {
    this.imagesForDuplicateDetection.clear();
  }
  getImagesForDuplicateDetection() {
    return this.imagesForDuplicateDetection.getAsArray();
  }
}
(function() {
  var t = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0;
  return function(o) {
    o = o || {};
    var e;
    e || (e = typeof o < "u" ? o : {});
    var i, n;
    e.ready = new Promise(function(c, I) {
      i = c, n = I;
    });
    var r = {}, a;
    for (a in e)
      e.hasOwnProperty(a) && (r[a] = e[a]);
    var s = "./this.program", g = !(-139 * 37 + 5783 + -639), x = !(-625 + -1599 * -5 + -7369);
    g = typeof window == "object", x = typeof importScripts == "function";
    var C = "", l;
    (g || x) && (x ? C = self.location.href : document.currentScript && (C = document.currentScript.src), t && (C = t), -1 * -802 + 3446 + -4248 !== C.indexOf("blob:") ? C = C.substr(8949 + -5 * -1447 + 2312 * -7, C.lastIndexOf("/") + (1460 + -1514 * 1 + 55)) : C = "", x && (l = function(c) {
      var I = new XMLHttpRequest();
      return I.open("GET", c, !(-2655 * -1 + -5611 * 1 + 2957)), I.responseType = "arraybuffer", I.send(null), new Uint8Array(I.response);
    }));
    var f = e.printErr || console.warn.bind(console);
    for (a in r)
      r.hasOwnProperty(a) && (e[a] = r[a]);
    r = null, e.thisProgram && (s = e.thisProgram);
    var p;
    e.wasmBinary && (p = e.wasmBinary), e.noExitRuntime && e.noExitRuntime, typeof WebAssembly != "object" && ze("no native wasm support detected");
    var y, O = !(-9898 * -1 + 2095 + -11992);
    function E(c) {
      c || ze("Assertion failed: undefined");
    }
    var Z = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void (65 * 107 + 5 * 1115 + 358 * -35);
    function G(c, I, u) {
      var A = re;
      if (0 < u) {
        u = I + u - (-6272 + 17 * -535 + -8 * -1921);
        for (var m = 3 * 1274 + -3947 + 5 * 25; m < c.length; ++m) {
          var b = c.charCodeAt(m);
          if (-1 * 76517 + -1 * 81905 + 1 * 213718 <= b && -29 * 1367 + 124 * 842 + -7422 >= b) {
            var w = c.charCodeAt(++m);
            b = 84767 + -39 * 1578 + -42311 * -1 + ((b & -36 * 260 + 2 * -449 + 11281) << 10) | w & 1023;
          }
          if (127 >= b) {
            if (I >= u)
              break;
            A[I++] = b;
          } else {
            if (9565 + 5605 * -1 + 1913 * -1 >= b) {
              if (I + 1 >= u)
                break;
              A[I++] = 12 * -776 + -1 * 6659 + 16163 | b >> -34 * 37 + 1 * 3583 + -1 * 2319;
            } else {
              if (65535 >= b) {
                if (I + (-2 * -3778 + -109 * 37 + 3521 * -1) >= u)
                  break;
                A[I++] = -2 * -3543 + -1 * 3033 + 3829 * -1 | b >> -2229 + 57 * 2 + 2127 * 1;
              } else {
                if (I + (-53 * -41 + 843 * 9 + -9757) >= u)
                  break;
                A[I++] = -7849 + 2 * 1563 + 4963 | b >> -9 * 6 + 9561 + -9489, A[I++] = -1 * -6294 + 123 * 47 + -919 * 13 | b >> 12 & -4322 + 422 * 16 + -1 * 2367;
              }
              A[I++] = -1 * -4691 + -134 * 10 + 293 * -11 | b >> -59 * 13 + 1 * 1153 + -380 & 1890 + 3 * -1803 + 3582;
            }
            A[I++] = 17 * 359 + 281 * -5 + -914 * 5 | b & 63;
          }
        }
        A[I] = 4206 * -2 + -2763 + 75 * 149;
      }
    }
    var L = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void (-571 * -16 + -1598 + -1 * 7538);
    function J(c, I) {
      for (var u = c >> 1, A = u + I / (-1145 * -1 + 5 * -515 + -179 * -8); !(u >= A) && Ee[u]; )
        ++u;
      if (u <<= 3639 * 1 + 712 * 11 + -11470, 32 < u - c && L)
        return L.decode(re.subarray(c, u));
      for (u = -8567 * 1 + 46 * -47 + 10729, A = ""; ; ) {
        var m = we[c + 2 * u >> 1];
        if (-29 * 337 + -8601 + 9187 * 2 == m || u == I / (-3450 + 2 * 1726))
          return A;
        ++u, A += String.fromCharCode(m);
      }
    }
    function D(c, I, u) {
      if (void (-31 * 121 + 301 + -50 * -69) === u && (u = 2147483647), -3106 + -2 * -2574 + -2040 > u)
        return 838 * 1 + -6533 + 5695;
      u -= -1967 + 1969 * 1;
      var A = I;
      u = u < (1617 + 23 * 279 + -8032) * c.length ? u / (-2553 * -1 + 1989 * -1 + -562) : c.length;
      for (var m = -131 * -34 + 7970 + -12424; m < u; ++m)
        we[I >> 1] = c.charCodeAt(m), I += 10 * -935 + -1151 + 10503;
      return we[I >> -457 * -10 + 59 * 37 + 1688 * -4] = 1 * -3106 + -6127 + -9233 * -1, I - A;
    }
    function F(c) {
      return (2992 * -2 + -7897 + 1 * 13883) * c.length;
    }
    function k(c, I) {
      for (var u = -5552 + 58 * -131 + 13150, A = ""; !(u >= I / (2 * -1063 + 8729 * 1 + -6599)); ) {
        var m = _[c + 4 * u >> 2];
        if (8469 + -9 * 941 == m)
          break;
        ++u, 126601 + 79 * 563 + -105542 <= m ? (m -= 1 * -17084 + -10 * 2406 + 106680, A += String.fromCharCode(-48805 + 11282 * -9 + -29 * -7091 | m >> -2366 + -2 * -1188, 923 * -40 + -3596 + 96836 | m & 4003 * -2 + -2 * -1041 + 6947 * 1)) : A += String.fromCharCode(m);
      }
      return A;
    }
    function q(c, I, u) {
      if (void (2509 * -1 + 2279 + 1 * 230) === u && (u = -623384760 + -4 * -65812908 + 2507616775), 4 > u)
        return 0;
      var A = I;
      u = A + u - (-4602 + 6991 * 1 + 3 * -795);
      for (var m = 279 + -971 * 8 + 1 * 7489; m < c.length; ++m) {
        var b = c.charCodeAt(m);
        if (-43 * -494 + 101844 + 1 * -67790 <= b && 57343 >= b) {
          var w = c.charCodeAt(++m);
          b = -310 * 45 + 115269 + -35783 + ((b & -2033 + -46 * -194 + -5868) << -1 * 305 + -1313 * -3 + 12 * -302) | w & -120 * 36 + -9873 + 15216;
        }
        if (_[I >> 2] = b, I += -1917 * -2 + -7054 + 3224, I + (1 * -5939 + -2 * 2995 + 1 * 11933) > u)
          break;
      }
      return _[I >> 2] = -1652 + -2837 * 1 + -1 * -4489, I - A;
    }
    function z(c) {
      for (var I = -9420 + -60 * -157, u = -3 * -2707 + -287 * 9 + -5538; u < c.length; ++u) {
        var A = c.charCodeAt(u);
        55296 <= A && 57343 >= A && ++u, I += -7132 + 446 * 16;
      }
      return I;
    }
    var $, Ve, re, we, Ee, _, Ce, Wt, rt;
    function ye(c) {
      $ = c, e.HEAP8 = Ve = new Int8Array(c), e.HEAP16 = we = new Int16Array(c), e.HEAP32 = _ = new Int32Array(c), e.HEAPU8 = re = new Uint8Array(c), e.HEAPU16 = Ee = new Uint16Array(c), e.HEAPU32 = Ce = new Uint32Array(c), e.HEAPF32 = Wt = new Float32Array(c), e.HEAPF64 = rt = new Float64Array(c);
    }
    var at = e.INITIAL_MEMORY || -11920757 * -1 + 11758124 + -6901665, Qe = {};
    Qe.initial = at / (-65787 + 5 * -15937 + 211008), Qe.maximum = 32768, e.wasmMemory ? y = e.wasmMemory : y = new WebAssembly.Memory(Qe), y && ($ = y.buffer), at = $.byteLength, ye($);
    var de = [], Ot = [], gn = [], At = [];
    function pt() {
      var c = e.preRun.shift();
      de.unshift(c);
    }
    var Se = -43 * -155 + 3447 * 1 + -316 * 32, Ge = null;
    e.preloadedImages = {}, e.preloadedAudios = {};
    function ze(c) {
      throw e.onAbort && e.onAbort(c), f(c), O = !(-9579 + -3193 * -3), c = new WebAssembly.RuntimeError("abort(" + c + "). Build with -s ASSERTIONS=1 for more info."), n(c), c;
    }
    function Pe(c) {
      var I = Ze;
      return String.prototype.startsWith ? I.startsWith(c) : -495 * -1 + -3548 * -2 + -7591 === I.indexOf(c);
    }
    function Rt() {
      return Pe("data:application/octet-stream;base64,");
    }
    var Ze = "sam.wasm";
    if (!Rt()) {
      var Ye = Ze;
      Ze = e.locateFile ? e.locateFile(Ye, C) : C + Ye;
    }
    function Cr() {
      try {
        if (p)
          return new Uint8Array(p);
        if (l)
          return l(Ze);
        throw "both async and sync fetching of the wasm failed";
      } catch (c) {
        ze(c);
      }
    }
    function bg() {
      var c = {};
      return c.credentials = "same-origin", p || !g && !x || typeof fetch != "function" || Pe("file://") ? Promise.resolve().then(Cr) : fetch(Ze, c).then(function(I) {
        if (!I.ok)
          throw "failed to load wasm binary file at '" + Ze + "'";
        return I.arrayBuffer();
      }).catch(function() {
        return Cr();
      });
    }
    function On(c) {
      for (; 7508 + -2 * -1474 + -8 * 1307 < c.length; ) {
        var I = c.shift();
        if (typeof I == "function")
          I(e);
        else {
          var u = I.Ba;
          typeof u == "number" ? void (-6561 + 3889 * -1 + 10450) === I.ta ? Li("v", u)() : Li("vi", u)(I.ta) : u(void (1285 + 257 * -5) === I.ta ? null : I.ta);
        }
      }
    }
    function Li(c, I) {
      var u = [];
      return function() {
        u.length = arguments.length;
        for (var A = -4952 + -94 * 15 + 6362; A < arguments.length; A++)
          u[A] = arguments[A];
        return u && u.length ? e["dynCall_" + c].apply(null, [I].concat(u)) : e["dynCall_" + c].call(null, I);
      };
    }
    function yg(c) {
      this.da = c - (-78 * 118 + -124 * -19 + 208 * 33), this.Oa = function(I) {
        _[this.da + (90 * -23 + 1 * 4179 + 191 * -11) >> -925 + 163 * -16 + 3535] = I;
      }, this.La = function(I) {
        _[this.da + (-665 * -7 + -9059 + 6 * 734) >> 3644 + -313 * -1 + -3955] = I;
      }, this.Ma = function() {
        _[this.da + (98 * -80 + 60 * -1 + 208 * 38) >> -17 * 201 + 2 * -342 + -1 * -4103] = 0;
      }, this.Ka = function() {
        Ve[this.da + (1 * -8164 + -1879 + 10055 * 1) >> -1382 + -1811 * -4 + -5862] = 0;
      }, this.Na = function() {
        Ve[this.da + (-9251 + -7 * 101 + 9971) >> 227 * 21 + 672 + -259 * 21] = 1 * -1851 + -584 + 2435;
      }, this.Fa = function(I, u) {
        this.Oa(I), this.La(u), this.Ma(), this.Ka(), this.Na();
      };
    }
    function Rn() {
      return 3588 + -299 * 12 < Rn.xa;
    }
    function Ni(c) {
      switch (c) {
        case 131 + 1 * -2523 + 2393:
          return 27 * -147 + -2424 + 6393;
        case 3308 + -125 * -23 + -6181:
          return 2 * 3133 + 220 * -19 + -2085;
        case -7744 + 2 * 3874:
          return -3195 + 4827 * -2 + 12851 * 1;
        case -4261 + 2 * -1063 + 1279 * 5:
          return 5513 + -5510 * 1;
        default:
          throw new TypeError("Unknown type size: " + c);
      }
    }
    var dr = void (-1 * -785 + -38 * 39 + 697);
    function he(c) {
      for (var I = ""; re[c]; )
        I += dr[re[c++]];
      return I;
    }
    var Vt = {}, ft = {}, Vn = {};
    function Ti(c) {
      if (void (-1929 + 2422 * -1 + 4351) === c)
        return "_unknown";
      c = c.replace(/[^a-zA-Z0-9_]/g, "$");
      var I = c.charCodeAt(0);
      return -3435 + 11 * 306 + -9 * -13 <= I && -1 * 7305 + 62 * -14 + -5 * -1646 >= I ? "_" + c : c;
    }
    function Fi(c, I) {
      return c = Ti(c), new Function("body", "return function " + c + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(I);
    }
    function Di(c) {
      var I = Error, u = Fi(c, function(A) {
        this.name = c, this.message = A, A = Error(A).stack, void (-8750 + -3677 * -1 + -267 * -19) !== A && (this.stack = this.toString() + `
` + A.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return u.prototype = Object.create(I.prototype), u.prototype.constructor = u, u.prototype.toString = function() {
        return void (845 * -8 + -70 * -11 + 5990) === this.message ? this.name : this.name + ": " + this.message;
      }, u;
    }
    var Et = void (-7 * 1127 + -275 + 4082 * 2);
    function T(c) {
      throw new Et(c);
    }
    var Ar = void (-5415 + 991 * 2 + -3433 * -1);
    function En(c) {
      throw new Ar(c);
    }
    function Pt(c, I, u) {
      function A(v) {
        v = u(v), v.length !== c.length && En("Mismatched type converter count");
        for (var H = -6026 * -1 + -4237 + 1 * -1789; H < c.length; ++H)
          $e(c[H], v[H]);
      }
      c.forEach(function(v) {
        Vn[v] = I;
      });
      var m = Array(I.length), b = [], w = 0;
      I.forEach(function(v, H) {
        ft.hasOwnProperty(v) ? m[H] = ft[v] : (b.push(v), Vt.hasOwnProperty(v) || (Vt[v] = []), Vt[v].push(function() {
          m[H] = ft[v], ++w, w === b.length && A(m);
        }));
      }), 686 + -2 * 932 + 1178 === b.length && A(m);
    }
    function $e(c, I, u) {
      if (u = u || {}, !("argPackAdvance" in I))
        throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var A = I.name;
      if (c || T('type "' + A + '" must have a positive integer typeid pointer'), ft.hasOwnProperty(c)) {
        if (u.Ea)
          return;
        T("Cannot register type '" + A + "' twice");
      }
      ft[c] = I, delete Vn[c], Vt.hasOwnProperty(c) && (I = Vt[c], delete Vt[c], I.forEach(function(m) {
        m();
      }));
    }
    function vg(c) {
      var I = {};
      return I.count = c.count, I.oa = c.oa, I.pa = c.pa, I.da = c.da, I.fa = c.fa, I.ga = c.ga, I.ha = c.ha, I;
    }
    function Xi(c) {
      T(c.A.fa.ea.name + " instance already deleted");
    }
    var ji = !(1949 * -2 + -2199 + -2 * -3049);
    function pr() {
    }
    function fr(c) {
      --c.count.value, -581 * -7 + -9069 * -1 + -13136 === c.count.value && (c.ga ? c.ha.na(c.ga) : c.fa.ea.na(c.da));
    }
    function cn(c) {
      return typeof FinalizationGroup > "u" ? (cn = function(I) {
        return I;
      }, c) : (ji = new FinalizationGroup(function(I) {
        for (var u = I.next(); !u.done; u = I.next())
          u = u.value, u.da ? fr(u) : console.warn("object already deleted: " + u.da);
      }), cn = function(I) {
        return ji.register(I, I.A, I.A), I;
      }, pr = function(I) {
        ji.unregister(I.A);
      }, cn(c));
    }
    var In = void (-67 * -26 + 5219 * -1 + -57 * -61), xn = [];
    function Mi() {
      for (; xn.length; ) {
        var c = xn.pop();
        c.A.oa = !1, c.delete();
      }
    }
    function st() {
    }
    var hr = {};
    function Bg(c, I) {
      var u = e;
      if (void (829 * -2 + 8171 + -39 * 167) === u[c].ja) {
        var A = u[c];
        u[c] = function() {
          return u[c].ja.hasOwnProperty(arguments.length) || T("Function '" + I + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + u[c].ja + ")!"), u[c].ja[arguments.length].apply(this, arguments);
        }, u[c].ja = [], u[c].ja[A.ya] = A;
      }
    }
    function mr(c, I, u) {
      e.hasOwnProperty(c) ? ((void (1 * 1859 + 8119 + -3 * 3326) === u || void (-4 * 1149 + 9215 + -4619) !== e[c].ja && void (-3957 + -4147 * 1 + 2026 * 4) !== e[c].ja[u]) && T("Cannot register public name '" + c + "' twice"), Bg(c, c), e.hasOwnProperty(u) && T("Cannot register multiple overloads of a function with the same number of arguments (" + u + ")!"), e[c].ja[u] = I) : (e[c] = I, void (2204 + -186 * -2 + 644 * -4) !== u && (e[c].Ra = u));
    }
    function wg(c, I, u, A, m, b, w, v) {
      this.name = c, this.constructor = I, this.ma = u, this.na = A, this.ia = m, this.Ca = b, this.qa = w, this.Aa = v;
    }
    function Pn(c, I, u) {
      for (; I !== u; )
        I.qa || T("Expected null or instance of " + u.name + ", got an instance of " + I.name), c = I.qa(c), I = I.ia;
      return c;
    }
    function Sg(c, I) {
      return I === null ? (this.ua && T("null is not a valid " + this.name), -282 + 94 * 3) : (I.A || T('Cannot pass "' + Lt(I) + '" as a ' + this.name), I.A.da || T("Cannot pass deleted object as a pointer of type " + this.name), Pn(I.A.da, I.A.fa.ea, this.ea));
    }
    function Gg(c, I) {
      if (I === null) {
        if (this.ua && T("null is not a valid " + this.name), this.sa) {
          var u = this.Ha();
          return c !== null && c.push(this.na, u), u;
        }
        return -6995 + -1 * -8213 + -609 * 2;
      }
      if (I.A || T('Cannot pass "' + Lt(I) + '" as a ' + this.name), I.A.da || T("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && I.A.fa.ra && T("Cannot convert argument of type " + (I.A.ha ? I.A.ha.name : I.A.fa.name) + " to parameter type " + this.name), u = Pn(I.A.da, I.A.fa.ea, this.ea), this.sa)
        switch (void (-3965 + 4571 * 1 + -606) === I.A.ga && T("Passing raw pointer to smart pointer is illegal"), this.Pa) {
          case 245 * -7 + -8 * 796 + 8083:
            I.A.ha === this ? u = I.A.ga : T("Cannot convert argument of type " + (I.A.ha ? I.A.ha.name : I.A.fa.name) + " to parameter type " + this.name);
            break;
          case 42 * 223 + 4871 + -2 * 7118:
            u = I.A.ga;
            break;
          case -188 * -4 + 1244 + -1994:
            if (I.A.ha === this)
              u = I.A.ga;
            else {
              var A = I.clone();
              u = this.Ia(u, Yt(function() {
                A.delete();
              })), c !== null && c.push(this.na, u);
            }
            break;
          default:
            T("Unsupporting sharing policy");
        }
      return u;
    }
    function Zg(c, I) {
      return I === null ? (this.ua && T("null is not a valid " + this.name), 8435 + -1 * 7561 + -874) : (I.A || T('Cannot pass "' + Lt(I) + '" as a ' + this.name), I.A.da || T("Cannot pass deleted object as a pointer of type " + this.name), I.A.fa.ra && T("Cannot convert argument of type " + I.A.fa.name + " to parameter type " + this.name), Pn(I.A.da, I.A.fa.ea, this.ea));
    }
    function Yn(c) {
      return this.fromWireType(Ce[c >> 15 * 511 + -1 * 7252 + -1 * 411]);
    }
    function br(c, I, u) {
      return I === u ? c : void (-1 * -5699 + 3907 * 1 + 1601 * -6) === u.ia ? null : (c = br(c, I, u.ia), c === null ? null : u.Aa(c));
    }
    var ln = {};
    function kg(c, I) {
      for (I === void 0 && T("ptr should not be undefined"); c.ia; )
        I = c.qa(I), c = c.ia;
      return ln[I];
    }
    function Ln(c, I) {
      I.fa && I.da || En("makeClassHandle requires ptr and ptrType"), !!I.ha != !!I.ga && En("Both smartPtrType and smartPtr must be specified");
      var u = {};
      u.value = 1, I.count = u;
      var A = {};
      A.value = I;
      var m = {};
      return m.A = A, cn(Object.create(c, m));
    }
    function qe(c, I, u, A) {
      this.name = c, this.ea = I, this.ua = u, this.ra = A, this.sa = !(-1 * -4207 + 6248 + -10454 * 1), this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void (2675 * 1 + -1980 + 139 * -5), void (7 * -971 + -4 * 563 + -1 * -9049) !== I.ia ? this.toWireType = Gg : (this.toWireType = A ? Sg : Zg, this.ka = null);
    }
    function yr(c, I, u) {
      e.hasOwnProperty(c) || En("Replacing nonexistant public symbol"), void (-10654 + 1 * 10654) !== e[c].ja && void (7447 + -4 * 2129 + 1069) !== u ? e[c].ja[u] = I : (e[c] = I, e[c].ya = u);
    }
    function gt(c, I) {
      c = he(c);
      var u = Li(c, I);
      return typeof u != "function" && T("unknown function pointer with signature " + c + ": " + I), u;
    }
    var vr = void (6459 + 1 * -5045 + -14 * 101);
    function Br(c) {
      c = Yr(c);
      var I = he(c);
      return _e(c), I;
    }
    function un(c, I) {
      function u(b) {
        m[b] || ft[b] || (Vn[b] ? Vn[b].forEach(u) : (A.push(b), m[b] = !(-6659 * 1 + 53 * 164 + -2033)));
      }
      var A = [], m = {};
      throw I.forEach(u), new vr(c + ": " + A.map(Br).join([", "]));
    }
    function wr(c, I) {
      for (var u = [], A = -1 * -8558 + -5081 * 1 + -3477; A < c; A++)
        u.push(_[(I >> -179 * -33 + 1 * -415 + 10 * -549) + A]);
      return u;
    }
    function Nn(c) {
      for (; c.length; ) {
        var I = c.pop();
        c.pop()(I);
      }
    }
    function Sr(c, I, u) {
      return c instanceof Object || T(u + ' with invalid "this": ' + c), c instanceof I.ea.constructor || T(u + ' incompatible with "this" of type ' + c.constructor.name), c.A.da || T("cannot call emscripten binding method " + u + " on deleted object"), Pn(c.A.da, c.A.fa.ea, I.ea);
    }
    var Gr = {};
    Gr.value = void (-29 * 107 + 5 * 341 + 1398);
    var Zr = {};
    Zr.value = null;
    var kr = {};
    kr.value = !(-1939 + -1939 * -1);
    var Hr = {};
    Hr.value = !(9777 * 1 + 1072 * 6 + -16208);
    var Ui = [], ke = [{}, Gr, Zr, kr, Hr];
    function Ji(c) {
      -1 * 8854 + 392 + 8466 < c && 21 * -108 + 8157 + 5889 * -1 === --ke[c].Ja && (ke[c] = void (17 + 1 * -17), Ui.push(c));
    }
    function Yt(c) {
      switch (c) {
        case void (-670 * -13 + 8545 + -17255):
          return -2 * 3911 + -609 * 5 + 11 * 988;
        case null:
          return -1 * -3454 + -92 + -3360;
        case !(-19 * -509 + -6164 * 1 + -3507 * 1):
          return 11265 + -1877 * 6;
        case !(8228 + 947 * 7 + -14856):
          return -6757 + -1 * 8263 + -4 * -3756;
        default:
          var I = Ui.length ? Ui.pop() : ke.length, u = {};
          return u.Ja = 1, u.value = c, ke[I] = u, I;
      }
    }
    function Lt(c) {
      if (c === null)
        return "null";
      var I = typeof c;
      return I === "object" || I === "array" || I === "function" ? c.toString() : "" + c;
    }
    function Hg(c, I) {
      switch (I) {
        case -2299 + -2 * 2687 + 1535 * 5:
          return function(u) {
            return this.fromWireType(Wt[u >> -9342 + -51 * 18 + 10262]);
          };
        case 3:
          return function(u) {
            return this.fromWireType(rt[u >> -1115 + 2833 * -1 + -1 * -3951]);
          };
        default:
          throw new TypeError("Unknown float type: " + c);
      }
    }
    function Kg(c) {
      var I = Function;
      if (!(I instanceof Function))
        throw new TypeError("new_ called with constructor type " + typeof I + " which is not a function");
      var u = Fi(I.name || "unknownFunctionName", function() {
      });
      return u.prototype = I.prototype, u = new u(), c = I.apply(u, c), c instanceof Object ? c : u;
    }
    function Wg(c, I, u) {
      switch (I) {
        case -94 * -64 + 2 * -3206 + 396:
          return u ? function(A) {
            return Ve[A];
          } : function(A) {
            return re[A];
          };
        case -2773 + 1 * 4186 + -1412:
          return u ? function(A) {
            return we[A >> 16186 + -195 * 83];
          } : function(A) {
            return Ee[A >> 8896 + 3 * -1577 + 694 * -6];
          };
        case 3324 + -3322 * 1:
          return u ? function(A) {
            return _[A >> -7521 + 1546 * 5 + -1 * 207];
          } : function(A) {
            return Ce[A >> 1 * -4688 + 164 * 43 + -2362];
          };
        default:
          throw new TypeError("Unknown integer type: " + c);
      }
    }
    function Qi(c) {
      return c || T("Cannot use deleted val. handle = " + c), ke[c].value;
    }
    function Kr(c, I) {
      var u = ft[c];
      return void (9227 * -1 + -4341 * 2 + 17909) === u && T(I + " has unknown type " + Br(c)), u;
    }
    var Og = {}, Wr = {};
    function Or() {
      if (!zi) {
        var c = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: s || "./this.program" }, I;
        for (I in Wr)
          c[I] = Wr[I];
        var u = [];
        for (I in c)
          u.push(I + "=" + c[I]);
        zi = u;
      }
      return zi;
    }
    var zi, Rr = [];
    function Vr(c) {
      var I = {}, u;
      for (u in c)
        (function(A) {
          var m = c[A];
          I[A] = typeof m == "function" ? function() {
            Rr.push(A);
            try {
              return m.apply(null, arguments);
            } finally {
              if (O)
                return;
              var b = Rr.pop();
              E(b === A);
            }
          } : m;
        })(u);
      return I;
    }
    for (var Er = Array(-1 * 6912 + -546 * -9 + 2254), Tn = -5 * -1367 + 13 * -195 + -20 * 215; 256 > Tn; ++Tn)
      Er[Tn] = String.fromCharCode(Tn);
    dr = Er, Et = e.BindingError = Di("BindingError"), Ar = e.InternalError = Di("InternalError"), st.prototype.isAliasOf = function(c) {
      if (!(this instanceof st && c instanceof st))
        return !(-499 * -5 + 2762 + 12 * -438);
      var I = this.A.fa.ea, u = this.A.da, A = c.A.fa.ea;
      for (c = c.A.da; I.ia; )
        u = I.qa(u), I = I.ia;
      for (; A.ia; )
        c = A.qa(c), A = A.ia;
      return I === A && u === c;
    }, st.prototype.clone = function() {
      if (this.A.da || Xi(this), this.A.pa)
        return this.A.count.value += 2399 + -2 * 1199, this;
      var c = cn(Object.create(Object.getPrototypeOf(this), { A: { value: vg(this.A) } }));
      return c.A.count.value += 51 * 140 + 89 * -109 + 2562, c.A.oa = !(-9492 + -23 * -358 + 1 * 1259), c;
    }, st.prototype.delete = function() {
      this.A.da || Xi(this), this.A.oa && !this.A.pa && T("Object already scheduled for deletion"), pr(this), fr(this.A), this.A.pa || (this.A.ga = void (542 * -14 + 7534 + -6 * -9), this.A.da = void (-1991 + 1 * 1991));
    }, st.prototype.isDeleted = function() {
      return !this.A.da;
    }, st.prototype.deleteLater = function() {
      return this.A.da || Xi(this), this.A.oa && !this.A.pa && T("Object already scheduled for deletion"), xn.push(this), 1 * -6331 + -8884 + -5072 * -3 === xn.length && In && In(Mi), this.A.oa = !(-371 + 13 * -291 + 4154 * 1), this;
    }, qe.prototype.Da = function(c) {
      return this.wa && (c = this.wa(c)), c;
    }, qe.prototype.va = function(c) {
      this.na && this.na(c);
    }, qe.prototype.argPackAdvance = 469 * 13 + -1 * 9695 + 3606, qe.prototype.readValueFromPointer = Yn, qe.prototype.deleteObject = function(c) {
      c !== null && c.delete();
    }, qe.prototype.fromWireType = function(c) {
      function I() {
        return this.sa ? Ln(this.ea.ma, { fa: this.Ga, da: u, ha: this, ga: c }) : Ln(this.ea.ma, { fa: this, da: c });
      }
      var u = this.Da(c);
      if (!u)
        return this.va(c), null;
      var A = kg(this.ea, u);
      if (void (-6652 * 1 + -1 * -8009 + -1357 * 1) !== A)
        return -8657 + 9 * 773 + 170 * 10 === A.A.count.value ? (A.A.da = u, A.A.ga = c, A.clone()) : (A = A.clone(), this.va(c), A);
      if (A = this.ea.Ca(u), A = hr[A], !A)
        return I.call(this);
      A = this.ra ? A.za : A.pointerType;
      var m = br(u, this.ea, A.ea);
      return m === null ? I.call(this) : this.sa ? Ln(A.ea.ma, { fa: A, da: m, ha: this, ga: c }) : Ln(A.ea.ma, { fa: A, da: m });
    }, e.getInheritedInstanceCount = function() {
      return Object.keys(ln).length;
    }, e.getLiveInheritedInstances = function() {
      var c = [], I;
      for (I in ln)
        ln.hasOwnProperty(I) && c.push(ln[I]);
      return c;
    }, e.flushPendingDeletes = Mi, e.setDelayFunction = function(c) {
      In = c, xn.length && In && In(Mi);
    }, vr = e.UnboundTypeError = Di("UnboundTypeError"), e.count_emval_handles = function() {
      for (var c = 0, I = 1 * 9662 + -1 * 1478 + -8179; I < ke.length; ++I)
        void (-6 * 523 + 35 * -30 + -698 * -6) !== ke[I] && ++c;
      return c;
    }, e.get_first_emval = function() {
      for (var c = -15 * -488 + 862 + -8177; c < ke.length; ++c)
        if (void (-1 * -9217 + -4575 + -4642) !== ke[c])
          return ke[c];
      return null;
    }, Ot.push({ Ba: function() {
      Pr();
    } });
    var Rg = { z: function(c) {
      return Fn(c + (-1211 * -7 + 7221 * -1 + 20 * -62)) + (1 * 3054 + -46 * 131 + 2988);
    }, u: function(c, I, u) {
      throw new yg(c).Fa(I, u), "uncaught_exception" in Rn ? Rn.xa++ : Rn.xa = 5629 * 1 + 1048 * 2 + 4 * -1931, c;
    }, w: function(c, I, u, A, m) {
      var b = Ni(u);
      I = he(I), $e(c, { name: I, fromWireType: function(w) {
        return !!w;
      }, toWireType: function(w, v) {
        return v ? A : m;
      }, argPackAdvance: 8, readValueFromPointer: function(w) {
        if (-2764 * 3 + 1 * 7430 + 863 === u)
          var v = Ve;
        else if (-2368 + 30 * 79 === u)
          v = we;
        else if (u === 4)
          v = _;
        else
          throw new TypeError("Unknown boolean type size: " + I);
        return this.fromWireType(v[w >> b]);
      }, ka: null });
    }, i: function(c, I, u, A, m, b, w, v, H, K, W, R, M) {
      W = he(W), b = gt(m, b), v && (v = gt(w, v)), K && (K = gt(H, K)), M = gt(R, M);
      var ge = Ti(W);
      mr(ge, function() {
        un("Cannot construct " + W + " due to unbound types", [A]);
      }), Pt([c, I, u], A ? [A] : [], function(V) {
        if (V = V[0], A)
          var Fe = V.ea, Ae = Fe.ma;
        else
          Ae = st.prototype;
        V = Fi(ge, function() {
          if (Object.getPrototypeOf(this) !== Nt)
            throw new Et("Use 'new' to construct " + W);
          if (Tt.la === void 0)
            throw new Et(W + " has no accessible constructor");
          var Nr = Tt.la[arguments.length];
          if (void (-2944 + -4571 * -1 + -1627) === Nr)
            throw new Et("Tried to invoke ctor of " + W + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(Tt.la).toString() + ") parameters instead!");
          return Nr.apply(this, arguments);
        });
        var ve = {};
        ve.value = V;
        var ht = {};
        ht.constructor = ve;
        var Nt = Object.create(Ae, ht);
        V.prototype = Nt;
        var Tt = new wg(W, V, Nt, M, Fe, b, v, K);
        Fe = new qe(W, Tt, !(-6230 * 1 + -14 * 86 + 7434), !(8832 + 4 * -2407 + 797)), Ae = new qe(W + "*", Tt, !(-5442 + 1 * 5575 + 2 * -66), !(1 * -11 + -7 * 313 + -2203 * -1));
        var Lr = new qe(W + " const*", Tt, !(-1 * 3035 + -60 * -20 + 1836), !(61 * 157 + -125 * -62 + 17327 * -1)), qi = {};
        return qi.pointerType = Ae, qi.za = Lr, hr[c] = qi, yr(ge, V), [Fe, Ae, Lr];
      });
    }, h: function(c, I, u, A, m, b) {
      E(9771 * 1 + 3529 + -4 * 3325 < I);
      var w = wr(I, u);
      m = gt(A, m);
      var v = [b], H = [];
      Pt([], [c], function(K) {
        K = K[1187 * -2 + -165 * -25 + -1751];
        var W = "constructor " + K.name;
        if (void (1 * -7195 + -1 * 2581 + 9776) === K.ea.la && (K.ea.la = []), K.ea.la[I - (93 + -92 * 1)] !== void 0)
          throw new Et("Cannot register multiple constructors with identical number of parameters (" + (I - (-8028 * -1 + 8434 + -16461)) + ") for class '" + K.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return K.ea.la[I - 1] = function() {
          un("Cannot construct " + K.name + " due to unbound types", w);
        }, Pt([], w, function(R) {
          return K.ea.la[I - (1010 * -9 + -23 * 77 + 2 * 5431)] = function() {
            arguments.length !== I - (4017 + -2 * 1259 + -1498) && T(W + " called with " + arguments.length + " arguments, expected " + (I - 1)), H.length = -2834 + 7703 * 1 + 4869 * -1, v.length = I;
            for (var M = 1665 * -1 + -3 * 304 + 2578; M < I; ++M)
              v[M] = R[M].toWireType(H, arguments[M - (6747 + -1 * 1236 + -19 * 290)]);
            return M = m.apply(null, v), Nn(H), R[-4567 + 1 * 5910 + -1343].fromWireType(M);
          }, [];
        }), [];
      });
    }, b: function(c, I, u, A, m, b, w, v, H, K) {
      I = he(I), m = gt(A, m), Pt([], [c], function(W) {
        W = W[0];
        var R = W.name + "." + I, M = { get: function() {
          un("Cannot access " + R + " due to unbound types", [u, w]);
        }, enumerable: !(-3002 * 1 + 8171 + 3 * -1723), configurable: !0 };
        return H ? M.set = function() {
          un("Cannot access " + R + " due to unbound types", [u, w]);
        } : M.set = function() {
          T(R + " is a read-only property");
        }, Object.defineProperty(W.ea.ma, I, M), Pt([], H ? [u, w] : [u], function(ge) {
          var V = ge[0], Fe = { get: function() {
            var ve = Sr(this, W, R + " getter");
            return V.fromWireType(m(b, ve));
          }, enumerable: !(5693 * -1 + 8485 + 698 * -4) };
          if (H) {
            H = gt(v, H);
            var Ae = ge[-62 * -54 + -7907 + 4560];
            Fe.set = function(ve) {
              var ht = Sr(this, W, R + " setter"), Nt = [];
              H(K, ht, Ae.toWireType(Nt, ve)), Nn(Nt);
            };
          }
          return Object.defineProperty(W.ea.ma, I, Fe), [];
        }), [];
      });
    }, v: function(c, I) {
      I = he(I), $e(c, { name: I, fromWireType: function(u) {
        var A = ke[u].value;
        return Ji(u), A;
      }, toWireType: function(u, A) {
        return Yt(A);
      }, argPackAdvance: 8, readValueFromPointer: Yn, ka: null });
    }, m: function(c, I, u) {
      u = Ni(u), I = he(I), $e(c, { name: I, fromWireType: function(A) {
        return A;
      }, toWireType: function(A, m) {
        if (typeof m != "number" && typeof m != "boolean")
          throw new TypeError('Cannot convert "' + Lt(m) + '" to ' + this.name);
        return m;
      }, argPackAdvance: 8, readValueFromPointer: Hg(I, u), ka: null });
    }, c: function(c, I, u, A, m, b) {
      var w = wr(I, u);
      c = he(c), m = gt(A, m), mr(c, function() {
        un("Cannot call " + c + " due to unbound types", w);
      }, I - (-8 * 35 + 6268 + 1 * -5987)), Pt([], w, function(v) {
        var H = c, K = c;
        v = [v[-14 * -247 + 1004 + -4462], null].concat(v.slice(-7411 + 1 * 6628 + 56 * 14));
        var W = m, R = v.length;
        -2746 + -1 * -3523 + 155 * -5 > R && T("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var M = v[-4183 + 2092 * 2] !== null && !(-7693 + 151 * -2 + 2 * 3998), ge = !(-16 * 608 + -5374 + -15103 * -1), V = -1 * 385 + -3 * 1235 + 4091; V < v.length; ++V)
          if (v[V] !== null && void (982 + 134 * -47 + -443 * -12) === v[V].ka) {
            ge = !(29 * -343 + 27 * -201 + 15374);
            break;
          }
        var Fe = v[-1 * 9921 + 1061 * -1 + 10982].name !== "void", Ae = "", ve = "";
        for (V = -223 * 26 + 48 * 71 + 2390; V < R - (9943 * 1 + 10 * 249 + -12431); ++V)
          Ae += (-127 * -37 + -6078 + 1379 !== V ? ", " : "") + "arg" + V, ve += (V !== 0 ? ", " : "") + "arg" + V + "Wired";
        K = "return function " + Ti(K) + "(" + Ae + `) {
if (arguments.length !== ` + (R - (3643 + -16 * 452 + 3591)) + `) {
throwBindingError('function ` + K + " called with ' + arguments.length + ' arguments, expected " + (R - (-8707 * 1 + 1295 + -1 * -7414)) + ` args!');
}
`, ge && (K += `var destructors = [];
`);
        var ht = ge ? "destructors" : "null";
        for (Ae = "throwBindingError invoker fn runDestructors retType classParam".split(" "), W = [T, W, b, Nn, v[3 * -3218 + 1495 + 8159], v[-4756 + -1 * -3699 + 1058]], M && (K += "var thisWired = classParam.toWireType(" + ht + `, this);
`), V = 5065 + 1 * -2092 + -2973; V < R - 2; ++V)
          K += "var arg" + V + "Wired = argType" + V + ".toWireType(" + ht + ", arg" + V + "); // " + v[V + (1663 * -1 + -6 * 62 + 2037)].name + `
`, Ae.push("argType" + V), W.push(v[V + (91 * 67 + -8313 + -1 * -2218)]);
        if (M && (ve = "thisWired" + (1911 + -103 * 43 + 2518 * 1 < ve.length ? ", " : "") + ve), K += (Fe ? "var rv = " : "") + "invoker(fn" + (0 < ve.length ? ", " : "") + ve + `);
`, ge)
          K += `runDestructors(destructors);
`;
        else
          for (V = M ? -251 * 37 + -9603 + -6297 * -3 : -1763 * -2 + -1 * -8982 + -481 * 26; V < v.length; ++V)
            R = -59 * -41 + 2292 + -4710 === V ? "thisWired" : "arg" + (V - (2 * 3863 + 1 * -7067 + -657 * 1)) + "Wired", v[V].ka !== null && (K += R + "_dtor(" + R + "); // " + v[V].name + `
`, Ae.push(R + "_dtor"), W.push(v[V].ka));
        return Fe && (K += `var ret = retType.fromWireType(rv);
return ret;
`), Ae.push(K + `}
`), v = Kg(Ae).apply(null, W), yr(H, v, I - (5275 + 44 * 29 + 262 * -25)), [];
      });
    }, e: function(c, I, u, A, m) {
      function b(K) {
        return K;
      }
      I = he(I), -(-5613 * -1 + -4 * 229 + -4696) === m && (m = -12 * -59963980 + -220621 * -24139 + -1750170784);
      var w = Ni(u);
      if (-677 + -1 * 2284 + -1 * -2961 === A) {
        var v = 32 - 8 * u;
        b = function(K) {
          return K << v >>> v;
        };
      }
      var H = -(-9350 + -2 * 2974 + -15299 * -1) != I.indexOf("unsigned");
      $e(c, { name: I, fromWireType: b, toWireType: function(K, W) {
        if (typeof W != "number" && typeof W != "boolean")
          throw new TypeError('Cannot convert "' + Lt(W) + '" to ' + this.name);
        if (W < A || W > m)
          throw new TypeError('Passing a number "' + Lt(W) + '" from JS side to C/C++ side to an argument of type "' + I + '", which is outside the valid range [' + A + ", " + m + "]!");
        return H ? W >>> -1207 * 7 + -9358 + -1 * -17807 : W | 213 * -33 + 1071 + -993 * -6;
      }, argPackAdvance: 8, readValueFromPointer: Wg(I, w, -3 * 245 + 7021 + -6286 !== A), ka: null });
    }, d: function(c, I, u) {
      function A(v) {
        v >>= 2;
        var H = Ce;
        return new m($, H[v + (1 * -9178 + -2478 + 11657)], H[v]);
      }
      var m = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][I];
      u = he(u);
      var b = {};
      b.name = u, b.fromWireType = A, b.argPackAdvance = 8, b.readValueFromPointer = A;
      var w = {};
      w.Ea = !(5505 + 503 * -7 + -1984 * 1), $e(c, b, w);
    }, n: function(c, I) {
      I = he(I);
      var u = I === "std::string";
      $e(c, { name: I, fromWireType: function(A) {
        var m = Ce[A >> 2];
        if (u)
          for (var b = A + (2965 * 2 + -5052 + -874), w = 2172 + 3 * 269 + 331 * -9; w <= m; ++w) {
            var v = A + 4 + w;
            if (w == m || re[v] == 0) {
              if (b) {
                var H = b, K = re, W = H + (v - b);
                for (b = H; K[b] && !(b >= W); )
                  ++b;
                if (-2485 + 1 * 2501 < b - H && K.subarray && Z)
                  H = Z.decode(K.subarray(H, b));
                else {
                  for (W = ""; H < b; ) {
                    var R = K[H++];
                    if (R & 1 * -8863 + -65 * 122 + 16921) {
                      var M = K[H++] & 63;
                      if (-3030 + -693 * -11 + 489 * -9 == (R & 4216 + 91 * -63 + 1741))
                        W += String.fromCharCode((R & -23 * 430 + 4503 + 14 * 387) << 26 * 118 + 3759 + 1 * -6821 | M);
                      else {
                        var ge = K[H++] & 63;
                        R = 4 * 2137 + 1562 + -4943 * 2 == (R & -19 * 432 + -1 * 6139 + 14587) ? (R & 7343 + -2 * -1630 + -10588) << 9931 * 1 + -1 * -7835 + 269 * -66 | M << 5515 + 5509 * -1 | ge : (R & -1077 * 1 + -1 * 109 + 1193) << 1739 * -3 + 487 + 4 * 1187 | M << 5913 * 1 + -5293 + -1 * 608 | ge << -54 * 9 + -3313 + 3805 | K[H++] & -1 * -338 + 6683 * 1 + -6958, -106522 + -11 * 5273 + -230061 * -1 > R ? W += String.fromCharCode(R) : (R -= 79399 + 3 * -4621, W += String.fromCharCode(-109497 + 233 * -100 + 188093 * 1 | R >> -3562 * 1 + 8840 + -5268, -11605 + -22 * 1028 + 90541 | R & 432 + -1239 * -1 + 2 * -324));
                      }
                    } else
                      W += String.fromCharCode(R);
                  }
                  H = W;
                }
              } else
                H = "";
              if (void (-1 * -2263 + -270 * 25 + 641 * 7) === V)
                var V = H;
              else
                V += "\0", V += H;
              b = v + (-13 * -405 + 3166 + -8430);
            }
          }
        else {
          for (V = Array(m), w = 10320 + 2064 * -5; w < m; ++w)
            V[w] = String.fromCharCode(re[A + 4 + w]);
          V = V.join("");
        }
        return _e(A), V;
      }, toWireType: function(A, m) {
        m instanceof ArrayBuffer && (m = new Uint8Array(m));
        var b = typeof m == "string";
        b || m instanceof Uint8Array || m instanceof Uint8ClampedArray || m instanceof Int8Array || T("Cannot pass non-string to std::string");
        var w = (u && b ? function() {
          for (var K = -2734 + 1 * 2734, W = 6695 + 43 * 31 + 669 * -12; W < m.length; ++W) {
            var R = m.charCodeAt(W);
            55296 <= R && 57343 >= R && (R = 63 * -721 + -6 * 8186 + 160075 + ((R & -607 + -37 * -31 + -69 * -7) << 10) | m.charCodeAt(++W) & 5247 * -1 + -235 * -2 + 5800), 7778 + 4084 * -1 + -1 * 3567 >= R ? ++K : K = -6087 + 1642 * 1 + 6492 * 1 >= R ? K + (-6112 + 3 * -617 + 7965) : 2 * 470 + 24953 + -13214 * -3 >= R ? K + (-7140 + 4 * -643 + 1 * 9715) : K + (-1 * 9483 + 2 * 3757 + 1 * 1973);
          }
          return K;
        } : function() {
          return m.length;
        })(), v = Fn(279 + 4899 * -2 + 9523 * 1 + w + (1 * 551 + -6534 + 5984));
        if (Ce[v >> 9269 + -3 * 3089] = w, u && b)
          G(m, v + (577 * -9 + -250 * -13 + 3 * 649), w + (2122 * -4 + 8579 + -90));
        else if (b)
          for (b = -166 * 53 + 7779 + 1 * 1019; b < w; ++b) {
            var H = m.charCodeAt(b);
            778 * -5 + 3968 + 177 < H && (_e(v), T("String has UTF-16 code units that do not fit in 8 bits")), re[v + (-7020 + -1 * 7253 + -14277 * -1) + b] = H;
          }
        else
          for (b = 37 * -199 + 6331 + 1032; b < w; ++b)
            re[v + (1 * -2003 + -3764 + 5771) + b] = m[b];
        return A !== null && A.push(_e, v), v;
      }, argPackAdvance: 8, readValueFromPointer: Yn, ka: function(A) {
        _e(A);
      } });
    }, j: function(c, I, u) {
      if (u = he(u), 14458 + 14456 * -1 === I)
        var A = J, m = D, b = F, w = function() {
          return Ee;
        }, v = 307 * -19 + 7333 * 1 + 1499 * -1;
      else
        -6547 + 3 * 997 + 3560 === I && (A = k, m = q, b = z, w = function() {
          return Ce;
        }, v = 2);
      $e(c, { name: u, fromWireType: function(H) {
        for (var K = Ce[H >> -3647 + 9145 * -1 + 12794], W = w(), R, M = H + (2411 + -3 * -2761 + -1069 * 10), ge = 4934 + 9312 * 1 + -14246; ge <= K; ++ge) {
          var V = H + 4 + ge * I;
          (ge == K || -147 * 9 + 6043 + -4720 == W[V >> v]) && (M = A(M, V - M), void (-1 * -3017 + -6 * 809 + 167 * 11) === R ? R = M : (R += String.fromCharCode(8209 + 1 * -6701 + -1508), R += M), M = V + I);
        }
        return _e(H), R;
      }, toWireType: function(H, K) {
        typeof K != "string" && T("Cannot pass non-string to C++ string type " + u);
        var W = b(K), R = Fn(4 + W + I);
        return Ce[R >> -4572 + 5 * 1518 + -3016] = W >> v, m(K, R + (9981 * -1 + -2993 + 12978), W + I), H !== null && H.push(_e, R), R;
      }, argPackAdvance: 8, readValueFromPointer: Yn, ka: function(H) {
        _e(H);
      } });
    }, x: function(c, I) {
      I = he(I);
      var u = {};
      u.Qa = !(4817 + -4817 * 1), u.name = I, u.argPackAdvance = 0, u.fromWireType = function() {
      }, u.toWireType = function() {
      }, $e(c, u);
    }, k: function(c, I, u) {
      c = Qi(c), I = Kr(I, "emval::as");
      var A = [], m = Yt(A);
      return _[u >> 17 * -191 + 4020 + -771] = m, I.toWireType(A, c);
    }, g: Ji, l: function(c, I) {
      return c = Qi(c), I = Qi(I), Yt(c[I]);
    }, p: function(c) {
      var I = Og[c];
      return Yt(void (12913 + 12913 * -1) === I ? he(c) : I);
    }, o: function(c) {
      Nn(ke[c].value), Ji(c);
    }, y: function(c, I) {
      return c = Kr(c, "_emval_take_value"), c = c.readValueFromPointer(I), Yt(c);
    }, f: function() {
      ze();
    }, q: function(c, I, u) {
      re.copyWithin(c, I, I + u);
    }, r: function(c) {
      c >>>= 140 * 71 + -992 + -2237 * 4;
      var I = re.length;
      if (867605294 + 458150652 * 9 + -2843477514 < c)
        return !(-8741 + 19 * -336 + 15126);
      for (var u = 13 * -11 + 26 * 143 + -3574; -1855 * 5 + 3 * 1155 + 9 * 646 >= u; u *= -1 * 4835 + 241 * -31 + 181 * 68) {
        var A = I * (1 + 0.2 / u);
        A = Math.min(A, c + (-122873922 + 7210878 * 31)), A = Math.max(-488849 * -7 + 12921229 + 434044, c, A), -1 * -4145 + 7933 + -12078 < A % (-118577 + -164 * 347 + -241021 * -1) && (A += 19367 + 337 * 137 - A % (-946 * 131 + 118022 * -1 + 307484));
        e: {
          try {
            y.grow(Math.min(1559160332 + -6 * -98053886, A) - $.byteLength + (-1093 * -70 + 1966 * -39 + 65699) >>> 16), ye(y.buffer);
            var m = 1;
            break e;
          } catch {
          }
          m = void (9971 + 68 * 2 + -3369 * 3);
        }
        if (m)
          return !0;
      }
      return !(569 * -7 + -3967 + -7951 * -1);
    }, s: function(c, I) {
      var u = 0;
      return Or().forEach(function(A, m) {
        var b = I + u;
        for (m = _[c + (5 * 17 + 58 * -20 + 83 * 13) * m >> 4354 + 397 * -19 + 3191] = b, b = 8887 * 1 + 145 * 58 + -17297; b < A.length; ++b)
          Ve[m++ >> -5339 + -1 * -9243 + -244 * 16] = A.charCodeAt(b);
        Ve[m >> -1859 + -2 * -3782 + -5705] = 2 * 579 + -1 * 2773 + 85 * 19, u += A.length + (6071 + 5 * -1214);
      }), -1471 * -1 + -12 * 158 + 425;
    }, t: function(c, I) {
      var u = Or();
      _[c >> 7511 + -2503 * 3] = u.length;
      var A = -467 + -1 * -467;
      return u.forEach(function(m) {
        A += m.length + (9751 + -3 * 2014 + -618 * 6);
      }), _[I >> 2 * 2426 + -9478 + 4628] = A, -6473 * 1 + 1424 + -187 * -27;
    }, a: y };
    (function() {
      function c(w) {
        w = w.exports, w = Vr(w), e.asm = w, Se--, e.monitorRunDependencies && e.monitorRunDependencies(Se), -151 * -2 + 611 + 913 * -1 == Se && Ge && (w = Ge, Ge = null, w());
      }
      function I(w) {
        c(w.instance);
      }
      function u(w) {
        return bg().then(function(v) {
          return WebAssembly.instantiate(v, m);
        }).then(w, function(v) {
          f("failed to asynchronously prepare wasm: " + v), ze(v);
        });
      }
      var A = {};
      A.a = Rg;
      var m = A;
      if (Se++, e.monitorRunDependencies && e.monitorRunDependencies(Se), e.instantiateWasm)
        try {
          var b = e.instantiateWasm(m, c);
          return b = Vr(b);
        } catch (w) {
          return f("Module.instantiateWasm callback failed with error: " + w), !(971 * 9 + -9873 + -1135 * -1);
        }
      return function() {
        if (p || typeof WebAssembly.instantiateStreaming != "function" || Rt() || Pe("file://") || typeof fetch != "function")
          return u(I);
        var w = {};
        w.credentials = "same-origin", fetch(Ze, w).then(function(v) {
          return WebAssembly.instantiateStreaming(v, m).then(I, function(H) {
            return f("wasm streaming compile failed: " + H), f("falling back to ArrayBuffer instantiation"), u(I);
          });
        });
      }(), {};
    })();
    var Pr = e.___wasm_call_ctors = function() {
      return (Pr = e.___wasm_call_ctors = e.asm.B).apply(null, arguments);
    }, Fn = e._malloc = function() {
      return (Fn = e._malloc = e.asm.C).apply(null, arguments);
    }, _e = e._free = function() {
      return (_e = e._free = e.asm.D).apply(null, arguments);
    }, Yr = e.___getTypeName = function() {
      return (Yr = e.___getTypeName = e.asm.E).apply(null, arguments);
    };
    e.___embind_register_native_and_builtin_types = function() {
      return (e.___embind_register_native_and_builtin_types = e.asm.F).apply(null, arguments);
    }, e.dynCall_ii = function() {
      return (e.dynCall_ii = e.asm.G).apply(null, arguments);
    }, e.dynCall_vi = function() {
      return (e.dynCall_vi = e.asm.H).apply(null, arguments);
    }, e.dynCall_i = function() {
      return (e.dynCall_i = e.asm.I).apply(null, arguments);
    }, e.dynCall_iii = function() {
      return (e.dynCall_iii = e.asm.J).apply(null, arguments);
    }, e.dynCall_viii = function() {
      return (e.dynCall_viii = e.asm.K).apply(null, arguments);
    }, e.dynCall_fii = function() {
      return (e.dynCall_fii = e.asm.L).apply(null, arguments);
    }, e.dynCall_viif = function() {
      return (e.dynCall_viif = e.asm.M).apply(null, arguments);
    }, e.dynCall_viiii = function() {
      return (e.dynCall_viiii = e.asm.N).apply(null, arguments);
    }, e.dynCall_viiiiii = function() {
      return (e.dynCall_viiiiii = e.asm.O).apply(null, arguments);
    }, e.dynCall_iiiiii = function() {
      return (e.dynCall_iiiiii = e.asm.P).apply(null, arguments);
    }, e.dynCall_viiiii = function() {
      return (e.dynCall_viiiii = e.asm.Q).apply(null, arguments);
    }, e.dynCall_iiiii = function() {
      return (e.dynCall_iiiii = e.asm.R).apply(null, arguments);
    }, e.dynCall_iiiiiiii = function() {
      return (e.dynCall_iiiiiiii = e.asm.S).apply(null, arguments);
    }, e.dynCall_viiiiiii = function() {
      return (e.dynCall_viiiiiii = e.asm.T).apply(null, arguments);
    }, e.dynCall_iiiiiii = function() {
      return (e.dynCall_iiiiiii = e.asm.U).apply(null, arguments);
    }, e.dynCall_viiiiiiiiidi = function() {
      return (e.dynCall_viiiiiiiiidi = e.asm.V).apply(null, arguments);
    }, e.dynCall_viiiiiiiidi = function() {
      return (e.dynCall_viiiiiiiidi = e.asm.W).apply(null, arguments);
    }, e.dynCall_viiiiiiiiii = function() {
      return (e.dynCall_viiiiiiiiii = e.asm.X).apply(null, arguments);
    }, e.dynCall_viiiiiiiii = function() {
      return (e.dynCall_viiiiiiiii = e.asm.Y).apply(null, arguments);
    }, e.dynCall_viiiiiiii = function() {
      return (e.dynCall_viiiiiiii = e.asm.Z).apply(null, arguments);
    }, e.dynCall_iiii = function() {
      return (e.dynCall_iiii = e.asm._).apply(null, arguments);
    }, e._asyncify_start_unwind = function() {
      return (e._asyncify_start_unwind = e.asm.$).apply(null, arguments);
    }, e._asyncify_stop_unwind = function() {
      return (e._asyncify_stop_unwind = e.asm.aa).apply(null, arguments);
    }, e._asyncify_start_rewind = function() {
      return (e._asyncify_start_rewind = e.asm.ba).apply(null, arguments);
    }, e._asyncify_stop_rewind = function() {
      return (e._asyncify_stop_rewind = e.asm.ca).apply(null, arguments);
    };
    var Dn;
    Ge = function c() {
      Dn || $i(), Dn || (Ge = c);
    };
    function $i() {
      function c() {
        if (!Dn && (Dn = !0, e.calledRun = !(9126 + -187 * 49 + 37), !O)) {
          if (On(Ot), On(gn), i(e), e.onRuntimeInitialized && e.onRuntimeInitialized(), e.postRun)
            for (typeof e.postRun == "function" && (e.postRun = [e.postRun]); e.postRun.length; ) {
              var I = e.postRun.shift();
              At.unshift(I);
            }
          On(At);
        }
      }
      if (!(2760 + 14 * -79 + 827 * -2 < Se)) {
        if (e.preRun)
          for (typeof e.preRun == "function" && (e.preRun = [e.preRun]); e.preRun.length; )
            pt();
        On(de), 0 < Se || (e.setStatus ? (e.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            e.setStatus("");
          }, 227 * 34 + 3721 + -11438), c();
        }, 7385 * -1 + 4072 + 3314)) : c());
      }
    }
    if (e.run = $i, e.preInit)
      for (typeof e.preInit == "function" && (e.preInit = [e.preInit]); 10 * -413 + -4940 + 9070 < e.preInit.length; )
        e.preInit.pop()();
    return $i(), o.ready;
  };
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const tg = Symbol("Comlink.proxy"), Wx = Symbol("Comlink.endpoint"), Ox = Symbol("Comlink.releaseProxy"), Io = Symbol("Comlink.finalizer"), ui = Symbol("Comlink.thrown"), ng = (t) => typeof t == "object" && t !== null || typeof t == "function", Rx = {
  canHandle: (t) => ng(t) && t[tg],
  serialize(t) {
    const { port1: o, port2: e } = new MessageChannel();
    return og(t, o), [e, [e]];
  },
  deserialize(t) {
    return t.start(), ag(t);
  }
}, Vx = {
  canHandle: (t) => ng(t) && ui in t,
  serialize({ value: t }) {
    let o;
    return t instanceof Error ? o = {
      isError: !0,
      value: {
        message: t.message,
        name: t.name,
        stack: t.stack
      }
    } : o = { isError: !1, value: t }, [o, []];
  },
  deserialize(t) {
    throw t.isError ? Object.assign(new Error(t.value.message), t.value) : t.value;
  }
}, ig = /* @__PURE__ */ new Map([
  ["proxy", Rx],
  ["throw", Vx]
]);
function Ex(t, o) {
  for (const e of t)
    if (o === e || e === "*" || e instanceof RegExp && e.test(o))
      return !0;
  return !1;
}
function og(t, o = globalThis, e = ["*"]) {
  o.addEventListener("message", function i(n) {
    if (!n || !n.data)
      return;
    if (!Ex(e, n.origin)) {
      console.warn(`Invalid origin '${n.origin}' for comlink proxy`);
      return;
    }
    const { id: r, type: a, path: s } = Object.assign({ path: [] }, n.data), g = (n.data.argumentList || []).map(Bt);
    let x;
    try {
      const C = s.slice(0, -1).reduce((f, p) => f[p], t), l = s.reduce((f, p) => f[p], t);
      switch (a) {
        case "GET":
          x = l;
          break;
        case "SET":
          C[s.slice(-1)[0]] = Bt(n.data.value), x = !0;
          break;
        case "APPLY":
          x = l.apply(C, g);
          break;
        case "CONSTRUCT":
          {
            const f = new l(...g);
            x = Fx(f);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: f, port2: p } = new MessageChannel();
            og(t, p), x = Tx(f, [f]);
          }
          break;
        case "RELEASE":
          x = void 0;
          break;
        default:
          return;
      }
    } catch (C) {
      x = { value: C, [ui]: 0 };
    }
    Promise.resolve(x).catch((C) => ({ value: C, [ui]: 0 })).then((C) => {
      const [l, f] = yi(C);
      o.postMessage(Object.assign(Object.assign({}, l), { id: r }), f), a === "RELEASE" && (o.removeEventListener("message", i), rg(o), Io in t && typeof t[Io] == "function" && t[Io]());
    }).catch((C) => {
      const [l, f] = yi({
        value: new TypeError("Unserializable return value"),
        [ui]: 0
      });
      o.postMessage(Object.assign(Object.assign({}, l), { id: r }), f);
    });
  }), o.start && o.start();
}
function Px(t) {
  return t.constructor.name === "MessagePort";
}
function rg(t) {
  Px(t) && t.close();
}
function ag(t, o) {
  return Yo(t, [], o);
}
function ei(t) {
  if (t)
    throw new Error("Proxy has been released and is not useable");
}
function sg(t) {
  return jt(t, {
    type: "RELEASE"
  }).then(() => {
    rg(t);
  });
}
const mi = /* @__PURE__ */ new WeakMap(), bi = "FinalizationRegistry" in globalThis && new FinalizationRegistry((t) => {
  const o = (mi.get(t) || 0) - 1;
  mi.set(t, o), o === 0 && sg(t);
});
function Yx(t, o) {
  const e = (mi.get(o) || 0) + 1;
  mi.set(o, e), bi && bi.register(t, o, t);
}
function Lx(t) {
  bi && bi.unregister(t);
}
function Yo(t, o = [], e = function() {
}) {
  let i = !1;
  const n = new Proxy(e, {
    get(r, a) {
      if (ei(i), a === Ox)
        return () => {
          Lx(n), sg(t), i = !0;
        };
      if (a === "then") {
        if (o.length === 0)
          return { then: () => n };
        const s = jt(t, {
          type: "GET",
          path: o.map((g) => g.toString())
        }).then(Bt);
        return s.then.bind(s);
      }
      return Yo(t, [...o, a]);
    },
    set(r, a, s) {
      ei(i);
      const [g, x] = yi(s);
      return jt(t, {
        type: "SET",
        path: [...o, a].map((C) => C.toString()),
        value: g
      }, x).then(Bt);
    },
    apply(r, a, s) {
      ei(i);
      const g = o[o.length - 1];
      if (g === Wx)
        return jt(t, {
          type: "ENDPOINT"
        }).then(Bt);
      if (g === "bind")
        return Yo(t, o.slice(0, -1));
      const [x, C] = ka(s);
      return jt(t, {
        type: "APPLY",
        path: o.map((l) => l.toString()),
        argumentList: x
      }, C).then(Bt);
    },
    construct(r, a) {
      ei(i);
      const [s, g] = ka(a);
      return jt(t, {
        type: "CONSTRUCT",
        path: o.map((x) => x.toString()),
        argumentList: s
      }, g).then(Bt);
    }
  });
  return Yx(n, t), n;
}
function Nx(t) {
  return Array.prototype.concat.apply([], t);
}
function ka(t) {
  const o = t.map(yi);
  return [o.map((e) => e[0]), Nx(o.map((e) => e[1]))];
}
const gg = /* @__PURE__ */ new WeakMap();
function Tx(t, o) {
  return gg.set(t, o), t;
}
function Fx(t) {
  return Object.assign(t, { [tg]: !0 });
}
function yi(t) {
  for (const [o, e] of ig)
    if (e.canHandle(t)) {
      const [i, n] = e.serialize(t);
      return [
        {
          type: "HANDLER",
          name: o,
          value: i
        },
        n
      ];
    }
  return [
    {
      type: "RAW",
      value: t
    },
    gg.get(t) || []
  ];
}
function Bt(t) {
  switch (t.type) {
    case "HANDLER":
      return ig.get(t.name).deserialize(t.value);
    case "RAW":
      return t.value;
  }
}
function jt(t, o, e) {
  return new Promise((i) => {
    const n = Dx();
    t.addEventListener("message", function r(a) {
      !a.data || !a.data.id || a.data.id !== n || (t.removeEventListener("message", r), i(a.data));
    }), t.start && t.start(), t.postMessage(Object.assign({ id: n }, o), e);
  });
}
function Dx() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const Xx = (t, o, e) => {
  const i = eg(e, t), { bottomLeft: n, bottomRight: r, topLeft: a, topRight: s } = o, g = {};
  return g.topLeft = a, g.topRight = s, g.bottomLeft = n, g.bottomRight = r, gx(g, i);
}, cg = "dmFyIHVlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5Owp2YXIgbGUgPSAocywgdSwgZSkgPT4gdSBpbiBzID8gdWUocywgdSwgeyBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwLCB2YWx1ZTogZSB9KSA6IHNbdV0gPSBlOwp2YXIgWW4gPSAocywgdSwgZSkgPT4gKGxlKHMsIHR5cGVvZiB1ICE9ICJzeW1ib2wiID8gdSArICIiIDogdSwgZSksIGUpOwpjb25zdCBrdCA9IHsKICBzaW1kOiAic2FtX3NpbWQud2FzbSIsCiAgc2FtOiAic2FtLndhc20iCn0sIGNlID0gYXN5bmMgKCkgPT4gV2ViQXNzZW1ibHkudmFsaWRhdGUobmV3IFVpbnQ4QXJyYXkoWzAsIDk3LCAxMTUsIDEwOSwgMSwgMCwgMCwgMCwgMSwgNSwgMSwgOTYsIDAsIDEsIDEyMywgMywgMiwgMSwgMCwgMTAsIDEwLCAxLCA4LCAwLCA2NSwgMCwgMjUzLCAxNSwgMjUzLCA5OCwgMTFdKSk7CmNsYXNzIEYgZXh0ZW5kcyBFcnJvciB7CiAgY29uc3RydWN0b3IoZSwgbSkgewogICAgc3VwZXIoZSk7CiAgICBZbih0aGlzLCAiY2F1c2UiKTsKICAgIHRoaXMubmFtZSA9ICJBdXRvQ2FwdHVyZUVycm9yIiwgdGhpcy5jYXVzZSA9IG07CiAgfQogIC8vIENoYW5nZSB0aGlzIHRvIERlY29yYXRvciB3aGVuIHRoZXkgd2lsbCBiZSBpbiBzdGFibGUgcmVsZWFzZQogIHN0YXRpYyBsb2dFcnJvcihlKSB7CiAgfQogIHN0YXRpYyBmcm9tQ2FtZXJhRXJyb3IoZSkgewogICAgaWYgKHRoaXMubG9nRXJyb3IoZSksIGUgaW5zdGFuY2VvZiBGKQogICAgICByZXR1cm4gZTsKICAgIGxldCBtOwogICAgc3dpdGNoIChlLm5hbWUpIHsKICAgICAgY2FzZSAiT3ZlcmNvbnN0cmFpbmVkRXJyb3IiOgogICAgICAgIG0gPSAiTWluaW11bSBxdWFsaXR5IHJlcXVpcmVtZW50cyBhcmUgbm90IG1ldCBieSB5b3VyIGNhbWVyYSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdFJlYWRhYmxlRXJyb3IiOgogICAgICBjYXNlICJBYm9ydEVycm9yIjoKICAgICAgICBtID0gIlRoZSB3ZWJjYW0gaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciBhcHBsaWNhdGlvbiI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdEFsbG93ZWRFcnJvciI6CiAgICAgICAgbSA9ICJUbyB1c2UgeW91ciBjYW1lcmEsIHlvdSBtdXN0IGFsbG93IHBlcm1pc3Npb25zIjsKICAgICAgICBicmVhazsKICAgICAgY2FzZSAiTm90Rm91bmRFcnJvciI6CiAgICAgICAgbSA9ICJUaGVyZSBpcyBubyBjYW1lcmEgYXZhaWxhYmxlIHRvIHlvdSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGRlZmF1bHQ6CiAgICAgICAgbSA9ICJBbiB1bmtub3duIGNhbWVyYSBlcnJvciBoYXMgb2NjdXJyZWQiOwogICAgICAgIGJyZWFrOwogICAgfQogICAgcmV0dXJuIG5ldyBGKG0sIGUpOwogIH0KICBzdGF0aWMgZnJvbUVycm9yKGUpIHsKICAgIGlmICh0aGlzLmxvZ0Vycm9yKGUpLCBlIGluc3RhbmNlb2YgRikKICAgICAgcmV0dXJuIGU7CiAgICBjb25zdCBtID0gIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkIjsKICAgIHJldHVybiBuZXcgRihtKTsKICB9Cn0KY29uc3QgZmUgPSB7CiAgUkdCOiAiUkdCIiwKICBSR0JBOiAiUkdCQSIKfSwgTW4gPSAocywgdSkgPT4gTWF0aC5oeXBvdCh1LnggLSBzLngsIHUueSAtIHMueSksIGRlID0gKHMpID0+IHsKICBjb25zdCB7IGJvdHRvbUxlZnQ6IHUsIGJvdHRvbVJpZ2h0OiBlLCB0b3BMZWZ0OiBtLCB0b3BSaWdodDogZyB9ID0gcywgQyA9IE1uKG0sIGcpLCBBID0gTW4oZywgZSksIE0gPSBNbih1LCBlKSwgVyA9IE1uKG0sIHUpOwogIHJldHVybiBNYXRoLm1pbihDLCBBLCBNLCBXKTsKfTsKdmFyIGhlID0gZnVuY3Rpb24oKSB7CiAgdmFyIHMgPSB0eXBlb2YgZG9jdW1lbnQgPCAidSIgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdCA/IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjIDogdm9pZCAwOwogIHJldHVybiBmdW5jdGlvbih1KSB7CiAgICB1ID0gdSB8fCB7fTsKICAgIHZhciBlOwogICAgZSB8fCAoZSA9IHR5cGVvZiB1IDwgInUiID8gdSA6IHt9KTsKICAgIHZhciBtLCBnOwogICAgZS5yZWFkeSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgbSA9IG4sIGcgPSB0OwogICAgfSk7CiAgICB2YXIgQyA9IHt9LCBBOwogICAgZm9yIChBIGluIGUpCiAgICAgIGUuaGFzT3duUHJvcGVydHkoQSkgJiYgKENbQV0gPSBlW0FdKTsKICAgIHZhciBNID0gIi4vdGhpcy5wcm9ncmFtIiwgVyA9ICExLCBFID0gITE7CiAgICBXID0gdHlwZW9mIHdpbmRvdyA9PSAib2JqZWN0IiwgRSA9IHR5cGVvZiBpbXBvcnRTY3JpcHRzID09ICJmdW5jdGlvbiI7CiAgICB2YXIgXyA9ICIiLCBSOwogICAgKFcgfHwgRSkgJiYgKEUgPyBfID0gc2VsZi5sb2NhdGlvbi5ocmVmIDogZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiAoXyA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjKSwgcyAmJiAoXyA9IHMpLCBfLmluZGV4T2YoImJsb2I6IikgIT09IDAgPyBfID0gXy5zdWJzdHIoMCwgXy5sYXN0SW5kZXhPZigiLyIpICsgMSkgOiBfID0gIiIsIEUgJiYgKFIgPSBmdW5jdGlvbihuKSB7CiAgICAgIHZhciB0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7CiAgICAgIHJldHVybiB0Lm9wZW4oIkdFVCIsIG4sICExKSwgdC5yZXNwb25zZVR5cGUgPSAiYXJyYXlidWZmZXIiLCB0LnNlbmQobnVsbCksIG5ldyBVaW50OEFycmF5KHQucmVzcG9uc2UpOwogICAgfSkpOwogICAgdmFyIFAgPSBlLnByaW50RXJyIHx8IGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpOwogICAgZm9yIChBIGluIEMpCiAgICAgIEMuaGFzT3duUHJvcGVydHkoQSkgJiYgKGVbQV0gPSBDW0FdKTsKICAgIEMgPSBudWxsLCBlLnRoaXNQcm9ncmFtICYmIChNID0gZS50aGlzUHJvZ3JhbSk7CiAgICB2YXIgTDsKICAgIGUud2FzbUJpbmFyeSAmJiAoTCA9IGUud2FzbUJpbmFyeSksIGUubm9FeGl0UnVudGltZSAmJiBlLm5vRXhpdFJ1bnRpbWUsIHR5cGVvZiBXZWJBc3NlbWJseSAhPSAib2JqZWN0IiAmJiBzbigibm8gbmF0aXZlIHdhc20gc3VwcG9ydCBkZXRlY3RlZCIpOwogICAgdmFyIEcsIFJuID0gITE7CiAgICBmdW5jdGlvbiBRbihuKSB7CiAgICAgIG4gfHwgc24oIkFzc2VydGlvbiBmYWlsZWQ6IHVuZGVmaW5lZCIpOwogICAgfQogICAgdmFyIFhuID0gdHlwZW9mIFRleHREZWNvZGVyIDwgInUiID8gbmV3IFRleHREZWNvZGVyKCJ1dGY4IikgOiB2b2lkIDA7CiAgICBmdW5jdGlvbiBIdChuLCB0LCByKSB7CiAgICAgIHZhciBpID0geDsKICAgICAgaWYgKDAgPCByKSB7CiAgICAgICAgciA9IHQgKyByIC0gMTsKICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IG4ubGVuZ3RoOyArK2EpIHsKICAgICAgICAgIHZhciBvID0gbi5jaGFyQ29kZUF0KGEpOwogICAgICAgICAgaWYgKDU1Mjk2IDw9IG8gJiYgNTczNDMgPj0gbykgewogICAgICAgICAgICB2YXIgYyA9IG4uY2hhckNvZGVBdCgrK2EpOwogICAgICAgICAgICBvID0gNjU1MzYgKyAoKG8gJiAxMDIzKSA8PCAxMCkgfCBjICYgMTAyMzsKICAgICAgICAgIH0KICAgICAgICAgIGlmICgxMjcgPj0gbykgewogICAgICAgICAgICBpZiAodCA+PSByKQogICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICBpW3QrK10gPSBvOwogICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgaWYgKDIwNDcgPj0gbykgewogICAgICAgICAgICAgIGlmICh0ICsgMSA+PSByKQogICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgaVt0KytdID0gMTkyIHwgbyA+PiA2OwogICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgIGlmICg2NTUzNSA+PSBvKSB7CiAgICAgICAgICAgICAgICBpZiAodCArIDIgPj0gcikKICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgICBpW3QrK10gPSAyMjQgfCBvID4+IDEyOwogICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICBpZiAodCArIDMgPj0gcikKICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgICBpW3QrK10gPSAyNDAgfCBvID4+IDE4LCBpW3QrK10gPSAxMjggfCBvID4+IDEyICYgNjM7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIGlbdCsrXSA9IDEyOCB8IG8gPj4gNiAmIDYzOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGlbdCsrXSA9IDEyOCB8IG8gJiA2MzsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgaVt0XSA9IDA7CiAgICAgIH0KICAgIH0KICAgIHZhciBxbiA9IHR5cGVvZiBUZXh0RGVjb2RlciA8ICJ1IiA/IG5ldyBUZXh0RGVjb2RlcigidXRmLTE2bGUiKSA6IHZvaWQgMDsKICAgIGZ1bmN0aW9uIFV0KG4sIHQpIHsKICAgICAgZm9yICh2YXIgciA9IG4gPj4gMSwgaSA9IHIgKyB0IC8gMjsgIShyID49IGkpICYmIHBuW3JdOyApCiAgICAgICAgKytyOwogICAgICBpZiAociA8PD0gMSwgMzIgPCByIC0gbiAmJiBxbikKICAgICAgICByZXR1cm4gcW4uZGVjb2RlKHguc3ViYXJyYXkobiwgcikpOwogICAgICBmb3IgKHIgPSAwLCBpID0gIiI7IDsgKSB7CiAgICAgICAgdmFyIGEgPSBYW24gKyAyICogciA+PiAxXTsKICAgICAgICBpZiAoYSA9PSAwIHx8IHIgPT0gdCAvIDIpCiAgICAgICAgICByZXR1cm4gaTsKICAgICAgICArK3IsIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShhKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24genQobiwgdCwgcikgewogICAgICBpZiAociA9PT0gdm9pZCAwICYmIChyID0gMjE0NzQ4MzY0NyksIDIgPiByKQogICAgICAgIHJldHVybiAwOwogICAgICByIC09IDI7CiAgICAgIHZhciBpID0gdDsKICAgICAgciA9IHIgPCAyICogbi5sZW5ndGggPyByIC8gMiA6IG4ubGVuZ3RoOwogICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHI7ICsrYSkKICAgICAgICBYW3QgPj4gMV0gPSBuLmNoYXJDb2RlQXQoYSksIHQgKz0gMjsKICAgICAgcmV0dXJuIFhbdCA+PiAxXSA9IDAsIHQgLSBpOwogICAgfQogICAgZnVuY3Rpb24gQnQobikgewogICAgICByZXR1cm4gMiAqIG4ubGVuZ3RoOwogICAgfQogICAgZnVuY3Rpb24gRHQobiwgdCkgewogICAgICBmb3IgKHZhciByID0gMCwgaSA9ICIiOyAhKHIgPj0gdCAvIDQpOyApIHsKICAgICAgICB2YXIgYSA9IGJbbiArIDQgKiByID4+IDJdOwogICAgICAgIGlmIChhID09IDApCiAgICAgICAgICBicmVhazsKICAgICAgICArK3IsIDY1NTM2IDw9IGEgPyAoYSAtPSA2NTUzNiwgaSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDU1Mjk2IHwgYSA+PiAxMCwgNTYzMjAgfCBhICYgMTAyMykpIDogaSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGEpOwogICAgICB9CiAgICAgIHJldHVybiBpOwogICAgfQogICAgZnVuY3Rpb24gVnQobiwgdCwgcikgewogICAgICBpZiAociA9PT0gdm9pZCAwICYmIChyID0gMjE0NzQ4MzY0NyksIDQgPiByKQogICAgICAgIHJldHVybiAwOwogICAgICB2YXIgaSA9IHQ7CiAgICAgIHIgPSBpICsgciAtIDQ7CiAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgbi5sZW5ndGg7ICsrYSkgewogICAgICAgIHZhciBvID0gbi5jaGFyQ29kZUF0KGEpOwogICAgICAgIGlmICg1NTI5NiA8PSBvICYmIDU3MzQzID49IG8pIHsKICAgICAgICAgIHZhciBjID0gbi5jaGFyQ29kZUF0KCsrYSk7CiAgICAgICAgICBvID0gNjU1MzYgKyAoKG8gJiAxMDIzKSA8PCAxMCkgfCBjICYgMTAyMzsKICAgICAgICB9CiAgICAgICAgaWYgKGJbdCA+PiAyXSA9IG8sIHQgKz0gNCwgdCArIDQgPiByKQogICAgICAgICAgYnJlYWs7CiAgICAgIH0KICAgICAgcmV0dXJuIGJbdCA+PiAyXSA9IDAsIHQgLSBpOwogICAgfQogICAgZnVuY3Rpb24gR3QobikgewogICAgICBmb3IgKHZhciB0ID0gMCwgciA9IDA7IHIgPCBuLmxlbmd0aDsgKytyKSB7CiAgICAgICAgdmFyIGkgPSBuLmNoYXJDb2RlQXQocik7CiAgICAgICAgNTUyOTYgPD0gaSAmJiA1NzM0MyA+PSBpICYmICsrciwgdCArPSA0OwogICAgICB9CiAgICAgIHJldHVybiB0OwogICAgfQogICAgdmFyIFEsICQsIHgsIFgsIHBuLCBiLCBILCBudCwgdHQ7CiAgICBmdW5jdGlvbiBldChuKSB7CiAgICAgIFEgPSBuLCBlLkhFQVA4ID0gJCA9IG5ldyBJbnQ4QXJyYXkobiksIGUuSEVBUDE2ID0gWCA9IG5ldyBJbnQxNkFycmF5KG4pLCBlLkhFQVAzMiA9IGIgPSBuZXcgSW50MzJBcnJheShuKSwgZS5IRUFQVTggPSB4ID0gbmV3IFVpbnQ4QXJyYXkobiksIGUuSEVBUFUxNiA9IHBuID0gbmV3IFVpbnQxNkFycmF5KG4pLCBlLkhFQVBVMzIgPSBIID0gbmV3IFVpbnQzMkFycmF5KG4pLCBlLkhFQVBGMzIgPSBudCA9IG5ldyBGbG9hdDMyQXJyYXkobiksIGUuSEVBUEY2NCA9IHR0ID0gbmV3IEZsb2F0NjRBcnJheShuKTsKICAgIH0KICAgIHZhciBydCA9IGUuSU5JVElBTF9NRU1PUlkgfHwgMTY3NzcyMTY7CiAgICBlLndhc21NZW1vcnkgPyBHID0gZS53YXNtTWVtb3J5IDogRyA9IG5ldyBXZWJBc3NlbWJseS5NZW1vcnkoeyBpbml0aWFsOiBydCAvIDY1NTM2LCBtYXhpbXVtOiAzMjc2OCB9KSwgRyAmJiAoUSA9IEcuYnVmZmVyKSwgcnQgPSBRLmJ5dGVMZW5ndGgsIGV0KFEpOwogICAgdmFyIGl0ID0gW10sIGF0ID0gW10sICR0ID0gW10sIG90ID0gW107CiAgICBmdW5jdGlvbiBZdCgpIHsKICAgICAgdmFyIG4gPSBlLnByZVJ1bi5zaGlmdCgpOwogICAgICBpdC51bnNoaWZ0KG4pOwogICAgfQogICAgdmFyIFkgPSAwLCBvbiA9IG51bGw7CiAgICBlLnByZWxvYWRlZEltYWdlcyA9IHt9LCBlLnByZWxvYWRlZEF1ZGlvcyA9IHt9OwogICAgZnVuY3Rpb24gc24obikgewogICAgICB0aHJvdyBlLm9uQWJvcnQgJiYgZS5vbkFib3J0KG4pLCBQKG4pLCBSbiA9ICEwLCBuID0gbmV3IFdlYkFzc2VtYmx5LlJ1bnRpbWVFcnJvcigiYWJvcnQoIiArIG4gKyAiKS4gQnVpbGQgd2l0aCAtcyBBU1NFUlRJT05TPTEgZm9yIG1vcmUgaW5mby4iKSwgZyhuKSwgbjsKICAgIH0KICAgIGZ1bmN0aW9uIHhuKG4pIHsKICAgICAgdmFyIHQgPSBaOwogICAgICByZXR1cm4gU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoID8gdC5zdGFydHNXaXRoKG4pIDogdC5pbmRleE9mKG4pID09PSAwOwogICAgfQogICAgZnVuY3Rpb24gc3QoKSB7CiAgICAgIHJldHVybiB4bigiZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LCIpOwogICAgfQogICAgdmFyIFogPSAic2FtLndhc20iOwogICAgaWYgKCFzdCgpKSB7CiAgICAgIHZhciB1dCA9IFo7CiAgICAgIFogPSBlLmxvY2F0ZUZpbGUgPyBlLmxvY2F0ZUZpbGUodXQsIF8pIDogXyArIHV0OwogICAgfQogICAgZnVuY3Rpb24gbHQoKSB7CiAgICAgIHRyeSB7CiAgICAgICAgaWYgKEwpCiAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoTCk7CiAgICAgICAgaWYgKFIpCiAgICAgICAgICByZXR1cm4gUihaKTsKICAgICAgICB0aHJvdyAiYm90aCBhc3luYyBhbmQgc3luYyBmZXRjaGluZyBvZiB0aGUgd2FzbSBmYWlsZWQiOwogICAgICB9IGNhdGNoIChuKSB7CiAgICAgICAgc24obik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIFp0KCkgewogICAgICByZXR1cm4gTCB8fCAhVyAmJiAhRSB8fCB0eXBlb2YgZmV0Y2ggIT0gImZ1bmN0aW9uIiB8fCB4bigiZmlsZTovLyIpID8gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihsdCkgOiBmZXRjaChaLCB7IGNyZWRlbnRpYWxzOiAic2FtZS1vcmlnaW4iIH0pLnRoZW4oZnVuY3Rpb24obikgewogICAgICAgIGlmICghbi5vaykKICAgICAgICAgIHRocm93ICJmYWlsZWQgdG8gbG9hZCB3YXNtIGJpbmFyeSBmaWxlIGF0ICciICsgWiArICInIjsKICAgICAgICByZXR1cm4gbi5hcnJheUJ1ZmZlcigpOwogICAgICB9KS5jYXRjaChmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gbHQoKTsKICAgICAgfSk7CiAgICB9CiAgICBmdW5jdGlvbiB5bihuKSB7CiAgICAgIGZvciAoOyAwIDwgbi5sZW5ndGg7ICkgewogICAgICAgIHZhciB0ID0gbi5zaGlmdCgpOwogICAgICAgIGlmICh0eXBlb2YgdCA9PSAiZnVuY3Rpb24iKQogICAgICAgICAgdChlKTsKICAgICAgICBlbHNlIHsKICAgICAgICAgIHZhciByID0gdC5CYTsKICAgICAgICAgIHR5cGVvZiByID09ICJudW1iZXIiID8gdC50YSA9PT0gdm9pZCAwID8gRm4oInYiLCByKSgpIDogRm4oInZpIiwgcikodC50YSkgOiByKHQudGEgPT09IHZvaWQgMCA/IG51bGwgOiB0LnRhKTsKICAgICAgICB9CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIEZuKG4sIHQpIHsKICAgICAgdmFyIHIgPSBbXTsKICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkgewogICAgICAgIHIubGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsKICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykKICAgICAgICAgIHJbaV0gPSBhcmd1bWVudHNbaV07CiAgICAgICAgcmV0dXJuIHIgJiYgci5sZW5ndGggPyBlWyJkeW5DYWxsXyIgKyBuXS5hcHBseShudWxsLCBbdF0uY29uY2F0KHIpKSA6IGVbImR5bkNhbGxfIiArIG5dLmNhbGwobnVsbCwgdCk7CiAgICAgIH07CiAgICB9CiAgICBmdW5jdGlvbiBKdChuKSB7CiAgICAgIHRoaXMuZGEgPSBuIC0gMTYsIHRoaXMuT2EgPSBmdW5jdGlvbih0KSB7CiAgICAgICAgYlt0aGlzLmRhICsgOCA+PiAyXSA9IHQ7CiAgICAgIH0sIHRoaXMuTGEgPSBmdW5jdGlvbih0KSB7CiAgICAgICAgYlt0aGlzLmRhICsgMCA+PiAyXSA9IHQ7CiAgICAgIH0sIHRoaXMuTWEgPSBmdW5jdGlvbigpIHsKICAgICAgICBiW3RoaXMuZGEgKyA0ID4+IDJdID0gMDsKICAgICAgfSwgdGhpcy5LYSA9IGZ1bmN0aW9uKCkgewogICAgICAgICRbdGhpcy5kYSArIDEyID4+IDBdID0gMDsKICAgICAgfSwgdGhpcy5OYSA9IGZ1bmN0aW9uKCkgewogICAgICAgICRbdGhpcy5kYSArIDEzID4+IDBdID0gMDsKICAgICAgfSwgdGhpcy5GYSA9IGZ1bmN0aW9uKHQsIHIpIHsKICAgICAgICB0aGlzLk9hKHQpLCB0aGlzLkxhKHIpLCB0aGlzLk1hKCksIHRoaXMuS2EoKSwgdGhpcy5OYSgpOwogICAgICB9OwogICAgfQogICAgZnVuY3Rpb24gbW4oKSB7CiAgICAgIHJldHVybiAwIDwgbW4ueGE7CiAgICB9CiAgICBmdW5jdGlvbiBJbihuKSB7CiAgICAgIHN3aXRjaCAobikgewogICAgICAgIGNhc2UgMToKICAgICAgICAgIHJldHVybiAwOwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiAxOwogICAgICAgIGNhc2UgNDoKICAgICAgICAgIHJldHVybiAyOwogICAgICAgIGNhc2UgODoKICAgICAgICAgIHJldHVybiAzOwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIHR5cGUgc2l6ZTogIiArIG4pOwogICAgICB9CiAgICB9CiAgICB2YXIgY3QgPSB2b2lkIDA7CiAgICBmdW5jdGlvbiBTKG4pIHsKICAgICAgZm9yICh2YXIgdCA9ICIiOyB4W25dOyApCiAgICAgICAgdCArPSBjdFt4W24rK11dOwogICAgICByZXR1cm4gdDsKICAgIH0KICAgIHZhciBxID0ge30sIEogPSB7fSwgdm4gPSB7fTsKICAgIGZ1bmN0aW9uIExuKG4pIHsKICAgICAgaWYgKG4gPT09IHZvaWQgMCkKICAgICAgICByZXR1cm4gIl91bmtub3duIjsKICAgICAgbiA9IG4ucmVwbGFjZSgvW15hLXpBLVowLTlfXS9nLCAiJCIpOwogICAgICB2YXIgdCA9IG4uY2hhckNvZGVBdCgwKTsKICAgICAgcmV0dXJuIDQ4IDw9IHQgJiYgNTcgPj0gdCA/ICJfIiArIG4gOiBuOwogICAgfQogICAgZnVuY3Rpb24gam4obiwgdCkgewogICAgICByZXR1cm4gbiA9IExuKG4pLCBuZXcgRnVuY3Rpb24oImJvZHkiLCAicmV0dXJuIGZ1bmN0aW9uICIgKyBuICsgYCgpIHsKICAgICJ1c2Ugc3RyaWN0IjsgICAgcmV0dXJuIGJvZHkuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKfTsKYCkodCk7CiAgICB9CiAgICBmdW5jdGlvbiBObihuKSB7CiAgICAgIHZhciB0ID0gRXJyb3IsIHIgPSBqbihuLCBmdW5jdGlvbihpKSB7CiAgICAgICAgdGhpcy5uYW1lID0gbiwgdGhpcy5tZXNzYWdlID0gaSwgaSA9IEVycm9yKGkpLnN0YWNrLCBpICE9PSB2b2lkIDAgJiYgKHRoaXMuc3RhY2sgPSB0aGlzLnRvU3RyaW5nKCkgKyBgCmAgKyBpLnJlcGxhY2UoL15FcnJvcig6W15cbl0qKT9cbi8sICIiKSk7CiAgICAgIH0pOwogICAgICByZXR1cm4gci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHQucHJvdG90eXBlKSwgci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSByLCByLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkgewogICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2UgPT09IHZvaWQgMCA/IHRoaXMubmFtZSA6IHRoaXMubmFtZSArICI6ICIgKyB0aGlzLm1lc3NhZ2U7CiAgICAgIH0sIHI7CiAgICB9CiAgICB2YXIgbm4gPSB2b2lkIDA7CiAgICBmdW5jdGlvbiB2KG4pIHsKICAgICAgdGhyb3cgbmV3IG5uKG4pOwogICAgfQogICAgdmFyIGZ0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gZ24obikgewogICAgICB0aHJvdyBuZXcgZnQobik7CiAgICB9CiAgICBmdW5jdGlvbiB0bihuLCB0LCByKSB7CiAgICAgIGZ1bmN0aW9uIGkobCkgewogICAgICAgIGwgPSByKGwpLCBsLmxlbmd0aCAhPT0gbi5sZW5ndGggJiYgZ24oIk1pc21hdGNoZWQgdHlwZSBjb252ZXJ0ZXIgY291bnQiKTsKICAgICAgICBmb3IgKHZhciBwID0gMDsgcCA8IG4ubGVuZ3RoOyArK3ApCiAgICAgICAgICBVKG5bcF0sIGxbcF0pOwogICAgICB9CiAgICAgIG4uZm9yRWFjaChmdW5jdGlvbihsKSB7CiAgICAgICAgdm5bbF0gPSB0OwogICAgICB9KTsKICAgICAgdmFyIGEgPSBBcnJheSh0Lmxlbmd0aCksIG8gPSBbXSwgYyA9IDA7CiAgICAgIHQuZm9yRWFjaChmdW5jdGlvbihsLCBwKSB7CiAgICAgICAgSi5oYXNPd25Qcm9wZXJ0eShsKSA/IGFbcF0gPSBKW2xdIDogKG8ucHVzaChsKSwgcS5oYXNPd25Qcm9wZXJ0eShsKSB8fCAocVtsXSA9IFtdKSwgcVtsXS5wdXNoKGZ1bmN0aW9uKCkgewogICAgICAgICAgYVtwXSA9IEpbbF0sICsrYywgYyA9PT0gby5sZW5ndGggJiYgaShhKTsKICAgICAgICB9KSk7CiAgICAgIH0pLCBvLmxlbmd0aCA9PT0gMCAmJiBpKGEpOwogICAgfQogICAgZnVuY3Rpb24gVShuLCB0LCByKSB7CiAgICAgIGlmIChyID0gciB8fCB7fSwgISgiYXJnUGFja0FkdmFuY2UiIGluIHQpKQogICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoInJlZ2lzdGVyVHlwZSByZWdpc3RlcmVkSW5zdGFuY2UgcmVxdWlyZXMgYXJnUGFja0FkdmFuY2UiKTsKICAgICAgdmFyIGkgPSB0Lm5hbWU7CiAgICAgIGlmIChuIHx8IHYoJ3R5cGUgIicgKyBpICsgJyIgbXVzdCBoYXZlIGEgcG9zaXRpdmUgaW50ZWdlciB0eXBlaWQgcG9pbnRlcicpLCBKLmhhc093blByb3BlcnR5KG4pKSB7CiAgICAgICAgaWYgKHIuRWEpCiAgICAgICAgICByZXR1cm47CiAgICAgICAgdigiQ2Fubm90IHJlZ2lzdGVyIHR5cGUgJyIgKyBpICsgIicgdHdpY2UiKTsKICAgICAgfQogICAgICBKW25dID0gdCwgZGVsZXRlIHZuW25dLCBxLmhhc093blByb3BlcnR5KG4pICYmICh0ID0gcVtuXSwgZGVsZXRlIHFbbl0sIHQuZm9yRWFjaChmdW5jdGlvbihhKSB7CiAgICAgICAgYSgpOwogICAgICB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiBLdChuKSB7CiAgICAgIHJldHVybiB7IGNvdW50OiBuLmNvdW50LCBvYTogbi5vYSwgcGE6IG4ucGEsIGRhOiBuLmRhLCBmYTogbi5mYSwgZ2E6IG4uZ2EsIGhhOiBuLmhhIH07CiAgICB9CiAgICBmdW5jdGlvbiBIbihuKSB7CiAgICAgIHYobi5BLmZhLmVhLm5hbWUgKyAiIGluc3RhbmNlIGFscmVhZHkgZGVsZXRlZCIpOwogICAgfQogICAgdmFyIFVuID0gITE7CiAgICBmdW5jdGlvbiBkdCgpIHsKICAgIH0KICAgIGZ1bmN0aW9uIGh0KG4pIHsKICAgICAgLS1uLmNvdW50LnZhbHVlLCBuLmNvdW50LnZhbHVlID09PSAwICYmIChuLmdhID8gbi5oYS5uYShuLmdhKSA6IG4uZmEuZWEubmEobi5kYSkpOwogICAgfQogICAgZnVuY3Rpb24gdW4obikgewogICAgICByZXR1cm4gdHlwZW9mIEZpbmFsaXphdGlvbkdyb3VwID4gInUiID8gKHVuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiB0OwogICAgICB9LCBuKSA6IChVbiA9IG5ldyBGaW5hbGl6YXRpb25Hcm91cChmdW5jdGlvbih0KSB7CiAgICAgICAgZm9yICh2YXIgciA9IHQubmV4dCgpOyAhci5kb25lOyByID0gdC5uZXh0KCkpCiAgICAgICAgICByID0gci52YWx1ZSwgci5kYSA/IGh0KHIpIDogY29uc29sZS53YXJuKCJvYmplY3QgYWxyZWFkeSBkZWxldGVkOiAiICsgci5kYSk7CiAgICAgIH0pLCB1biA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICByZXR1cm4gVW4ucmVnaXN0ZXIodCwgdC5BLCB0LkEpLCB0OwogICAgICB9LCBkdCA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICBVbi51bnJlZ2lzdGVyKHQuQSk7CiAgICAgIH0sIHVuKG4pKTsKICAgIH0KICAgIHZhciBsbiA9IHZvaWQgMCwgY24gPSBbXTsKICAgIGZ1bmN0aW9uIHpuKCkgewogICAgICBmb3IgKDsgY24ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgbiA9IGNuLnBvcCgpOwogICAgICAgIG4uQS5vYSA9ICExLCBuLmRlbGV0ZSgpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBEKCkgewogICAgfQogICAgdmFyIHB0ID0ge307CiAgICBmdW5jdGlvbiBRdChuLCB0KSB7CiAgICAgIHZhciByID0gZTsKICAgICAgaWYgKHJbbl0uamEgPT09IHZvaWQgMCkgewogICAgICAgIHZhciBpID0gcltuXTsKICAgICAgICByW25dID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICByZXR1cm4gcltuXS5qYS5oYXNPd25Qcm9wZXJ0eShhcmd1bWVudHMubGVuZ3RoKSB8fCB2KCJGdW5jdGlvbiAnIiArIHQgKyAiJyBjYWxsZWQgd2l0aCBhbiBpbnZhbGlkIG51bWJlciBvZiBhcmd1bWVudHMgKCIgKyBhcmd1bWVudHMubGVuZ3RoICsgIikgLSBleHBlY3RzIG9uZSBvZiAoIiArIHJbbl0uamEgKyAiKSEiKSwgcltuXS5qYVthcmd1bWVudHMubGVuZ3RoXS5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgICAgIH0sIHJbbl0uamEgPSBbXSwgcltuXS5qYVtpLnlhXSA9IGk7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHl0KG4sIHQsIHIpIHsKICAgICAgZS5oYXNPd25Qcm9wZXJ0eShuKSA/ICgociA9PT0gdm9pZCAwIHx8IGVbbl0uamEgIT09IHZvaWQgMCAmJiBlW25dLmphW3JdICE9PSB2b2lkIDApICYmIHYoIkNhbm5vdCByZWdpc3RlciBwdWJsaWMgbmFtZSAnIiArIG4gKyAiJyB0d2ljZSIpLCBRdChuLCBuKSwgZS5oYXNPd25Qcm9wZXJ0eShyKSAmJiB2KCJDYW5ub3QgcmVnaXN0ZXIgbXVsdGlwbGUgb3ZlcmxvYWRzIG9mIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBudW1iZXIgb2YgYXJndW1lbnRzICgiICsgciArICIpISIpLCBlW25dLmphW3JdID0gdCkgOiAoZVtuXSA9IHQsIHIgIT09IHZvaWQgMCAmJiAoZVtuXS5SYSA9IHIpKTsKICAgIH0KICAgIGZ1bmN0aW9uIFh0KG4sIHQsIHIsIGksIGEsIG8sIGMsIGwpIHsKICAgICAgdGhpcy5uYW1lID0gbiwgdGhpcy5jb25zdHJ1Y3RvciA9IHQsIHRoaXMubWEgPSByLCB0aGlzLm5hID0gaSwgdGhpcy5pYSA9IGEsIHRoaXMuQ2EgPSBvLCB0aGlzLnFhID0gYywgdGhpcy5BYSA9IGw7CiAgICB9CiAgICBmdW5jdGlvbiB3bihuLCB0LCByKSB7CiAgICAgIGZvciAoOyB0ICE9PSByOyApCiAgICAgICAgdC5xYSB8fCB2KCJFeHBlY3RlZCBudWxsIG9yIGluc3RhbmNlIG9mICIgKyByLm5hbWUgKyAiLCBnb3QgYW4gaW5zdGFuY2Ugb2YgIiArIHQubmFtZSksIG4gPSB0LnFhKG4pLCB0ID0gdC5pYTsKICAgICAgcmV0dXJuIG47CiAgICB9CiAgICBmdW5jdGlvbiBxdChuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgcm4odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIHduKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiBuZShuLCB0KSB7CiAgICAgIGlmICh0ID09PSBudWxsKSB7CiAgICAgICAgaWYgKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgdGhpcy5zYSkgewogICAgICAgICAgdmFyIHIgPSB0aGlzLkhhKCk7CiAgICAgICAgICByZXR1cm4gbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgciksIHI7CiAgICAgICAgfQogICAgICAgIHJldHVybiAwOwogICAgICB9CiAgICAgIGlmICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBybih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgIXRoaXMucmEgJiYgdC5BLmZhLnJhICYmIHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArICh0LkEuaGEgPyB0LkEuaGEubmFtZSA6IHQuQS5mYS5uYW1lKSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIHIgPSB3bih0LkEuZGEsIHQuQS5mYS5lYSwgdGhpcy5lYSksIHRoaXMuc2EpCiAgICAgICAgc3dpdGNoICh0LkEuZ2EgPT09IHZvaWQgMCAmJiB2KCJQYXNzaW5nIHJhdyBwb2ludGVyIHRvIHNtYXJ0IHBvaW50ZXIgaXMgaWxsZWdhbCIpLCB0aGlzLlBhKSB7CiAgICAgICAgICBjYXNlIDA6CiAgICAgICAgICAgIHQuQS5oYSA9PT0gdGhpcyA/IHIgPSB0LkEuZ2EgOiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyAodC5BLmhhID8gdC5BLmhhLm5hbWUgOiB0LkEuZmEubmFtZSkgKyAiIHRvIHBhcmFtZXRlciB0eXBlICIgKyB0aGlzLm5hbWUpOwogICAgICAgICAgICBicmVhazsKICAgICAgICAgIGNhc2UgMToKICAgICAgICAgICAgciA9IHQuQS5nYTsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICBjYXNlIDI6CiAgICAgICAgICAgIGlmICh0LkEuaGEgPT09IHRoaXMpCiAgICAgICAgICAgICAgciA9IHQuQS5nYTsKICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgdmFyIGkgPSB0LmNsb25lKCk7CiAgICAgICAgICAgICAgciA9IHRoaXMuSWEociwgZW4oZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgICBpLmRlbGV0ZSgpOwogICAgICAgICAgICAgIH0pKSwgbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgcik7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICBkZWZhdWx0OgogICAgICAgICAgICB2KCJVbnN1cHBvcnRpbmcgc2hhcmluZyBwb2xpY3kiKTsKICAgICAgICB9CiAgICAgIHJldHVybiByOwogICAgfQogICAgZnVuY3Rpb24gdGUobiwgdCkgewogICAgICByZXR1cm4gdCA9PT0gbnVsbCA/ICh0aGlzLnVhICYmIHYoIm51bGwgaXMgbm90IGEgdmFsaWQgIiArIHRoaXMubmFtZSksIDApIDogKHQuQSB8fCB2KCdDYW5ub3QgcGFzcyAiJyArIHJuKHQpICsgJyIgYXMgYSAnICsgdGhpcy5uYW1lKSwgdC5BLmRhIHx8IHYoIkNhbm5vdCBwYXNzIGRlbGV0ZWQgb2JqZWN0IGFzIGEgcG9pbnRlciBvZiB0eXBlICIgKyB0aGlzLm5hbWUpLCB0LkEuZmEucmEgJiYgdigiQ2Fubm90IGNvbnZlcnQgYXJndW1lbnQgb2YgdHlwZSAiICsgdC5BLmZhLm5hbWUgKyAiIHRvIHBhcmFtZXRlciB0eXBlICIgKyB0aGlzLm5hbWUpLCB3bih0LkEuZGEsIHQuQS5mYS5lYSwgdGhpcy5lYSkpOwogICAgfQogICAgZnVuY3Rpb24gQW4obikgewogICAgICByZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUoSFtuID4+IDJdKTsKICAgIH0KICAgIGZ1bmN0aW9uIG10KG4sIHQsIHIpIHsKICAgICAgcmV0dXJuIHQgPT09IHIgPyBuIDogci5pYSA9PT0gdm9pZCAwID8gbnVsbCA6IChuID0gbXQobiwgdCwgci5pYSksIG4gPT09IG51bGwgPyBudWxsIDogci5BYShuKSk7CiAgICB9CiAgICB2YXIgZm4gPSB7fTsKICAgIGZ1bmN0aW9uIGVlKG4sIHQpIHsKICAgICAgZm9yICh0ID09PSB2b2lkIDAgJiYgdigicHRyIHNob3VsZCBub3QgYmUgdW5kZWZpbmVkIik7IG4uaWE7ICkKICAgICAgICB0ID0gbi5xYSh0KSwgbiA9IG4uaWE7CiAgICAgIHJldHVybiBmblt0XTsKICAgIH0KICAgIGZ1bmN0aW9uIF9uKG4sIHQpIHsKICAgICAgcmV0dXJuIHQuZmEgJiYgdC5kYSB8fCBnbigibWFrZUNsYXNzSGFuZGxlIHJlcXVpcmVzIHB0ciBhbmQgcHRyVHlwZSIpLCAhIXQuaGEgIT0gISF0LmdhICYmIGduKCJCb3RoIHNtYXJ0UHRyVHlwZSBhbmQgc21hcnRQdHIgbXVzdCBiZSBzcGVjaWZpZWQiKSwgdC5jb3VudCA9IHsgdmFsdWU6IDEgfSwgdW4oT2JqZWN0LmNyZWF0ZShuLCB7IEE6IHsgdmFsdWU6IHQgfSB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiB6KG4sIHQsIHIsIGkpIHsKICAgICAgdGhpcy5uYW1lID0gbiwgdGhpcy5lYSA9IHQsIHRoaXMudWEgPSByLCB0aGlzLnJhID0gaSwgdGhpcy5zYSA9ICExLCB0aGlzLm5hID0gdGhpcy5JYSA9IHRoaXMuSGEgPSB0aGlzLndhID0gdGhpcy5QYSA9IHRoaXMuR2EgPSB2b2lkIDAsIHQuaWEgIT09IHZvaWQgMCA/IHRoaXMudG9XaXJlVHlwZSA9IG5lIDogKHRoaXMudG9XaXJlVHlwZSA9IGkgPyBxdCA6IHRlLCB0aGlzLmthID0gbnVsbCk7CiAgICB9CiAgICBmdW5jdGlvbiB2dChuLCB0LCByKSB7CiAgICAgIGUuaGFzT3duUHJvcGVydHkobikgfHwgZ24oIlJlcGxhY2luZyBub25leGlzdGFudCBwdWJsaWMgc3ltYm9sIiksIGVbbl0uamEgIT09IHZvaWQgMCAmJiByICE9PSB2b2lkIDAgPyBlW25dLmphW3JdID0gdCA6IChlW25dID0gdCwgZVtuXS55YSA9IHIpOwogICAgfQogICAgZnVuY3Rpb24gVihuLCB0KSB7CiAgICAgIG4gPSBTKG4pOwogICAgICB2YXIgciA9IEZuKG4sIHQpOwogICAgICByZXR1cm4gdHlwZW9mIHIgIT0gImZ1bmN0aW9uIiAmJiB2KCJ1bmtub3duIGZ1bmN0aW9uIHBvaW50ZXIgd2l0aCBzaWduYXR1cmUgIiArIG4gKyAiOiAiICsgdCksIHI7CiAgICB9CiAgICB2YXIgZ3QgPSB2b2lkIDA7CiAgICBmdW5jdGlvbiB3dChuKSB7CiAgICAgIG4gPSBidChuKTsKICAgICAgdmFyIHQgPSBTKG4pOwogICAgICByZXR1cm4gQihuKSwgdDsKICAgIH0KICAgIGZ1bmN0aW9uIGRuKG4sIHQpIHsKICAgICAgZnVuY3Rpb24gcihvKSB7CiAgICAgICAgYVtvXSB8fCBKW29dIHx8ICh2bltvXSA/IHZuW29dLmZvckVhY2gocikgOiAoaS5wdXNoKG8pLCBhW29dID0gITApKTsKICAgICAgfQogICAgICB2YXIgaSA9IFtdLCBhID0ge307CiAgICAgIHRocm93IHQuZm9yRWFjaChyKSwgbmV3IGd0KG4gKyAiOiAiICsgaS5tYXAod3QpLmpvaW4oWyIsICJdKSk7CiAgICB9CiAgICBmdW5jdGlvbiBBdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSBbXSwgaSA9IDA7IGkgPCBuOyBpKyspCiAgICAgICAgci5wdXNoKGJbKHQgPj4gMikgKyBpXSk7CiAgICAgIHJldHVybiByOwogICAgfQogICAgZnVuY3Rpb24gQ24obikgewogICAgICBmb3IgKDsgbi5sZW5ndGg7ICkgewogICAgICAgIHZhciB0ID0gbi5wb3AoKTsKICAgICAgICBuLnBvcCgpKHQpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBfdChuLCB0LCByKSB7CiAgICAgIHJldHVybiBuIGluc3RhbmNlb2YgT2JqZWN0IHx8IHYociArICcgd2l0aCBpbnZhbGlkICJ0aGlzIjogJyArIG4pLCBuIGluc3RhbmNlb2YgdC5lYS5jb25zdHJ1Y3RvciB8fCB2KHIgKyAnIGluY29tcGF0aWJsZSB3aXRoICJ0aGlzIiBvZiB0eXBlICcgKyBuLmNvbnN0cnVjdG9yLm5hbWUpLCBuLkEuZGEgfHwgdigiY2Fubm90IGNhbGwgZW1zY3JpcHRlbiBiaW5kaW5nIG1ldGhvZCAiICsgciArICIgb24gZGVsZXRlZCBvYmplY3QiKSwgd24obi5BLmRhLCBuLkEuZmEuZWEsIHQuZWEpOwogICAgfQogICAgdmFyIEJuID0gW10sIEkgPSBbe30sIHsgdmFsdWU6IHZvaWQgMCB9LCB7IHZhbHVlOiBudWxsIH0sIHsgdmFsdWU6ICEwIH0sIHsgdmFsdWU6ICExIH1dOwogICAgZnVuY3Rpb24gRG4obikgewogICAgICA0IDwgbiAmJiAtLUlbbl0uSmEgPT09IDAgJiYgKElbbl0gPSB2b2lkIDAsIEJuLnB1c2gobikpOwogICAgfQogICAgZnVuY3Rpb24gZW4obikgewogICAgICBzd2l0Y2ggKG4pIHsKICAgICAgICBjYXNlIHZvaWQgMDoKICAgICAgICAgIHJldHVybiAxOwogICAgICAgIGNhc2UgbnVsbDoKICAgICAgICAgIHJldHVybiAyOwogICAgICAgIGNhc2UgITA6CiAgICAgICAgICByZXR1cm4gMzsKICAgICAgICBjYXNlICExOgogICAgICAgICAgcmV0dXJuIDQ7CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHZhciB0ID0gQm4ubGVuZ3RoID8gQm4ucG9wKCkgOiBJLmxlbmd0aDsKICAgICAgICAgIHJldHVybiBJW3RdID0geyBKYTogMSwgdmFsdWU6IG4gfSwgdDsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gcm4obikgewogICAgICBpZiAobiA9PT0gbnVsbCkKICAgICAgICByZXR1cm4gIm51bGwiOwogICAgICB2YXIgdCA9IHR5cGVvZiBuOwogICAgICByZXR1cm4gdCA9PT0gIm9iamVjdCIgfHwgdCA9PT0gImFycmF5IiB8fCB0ID09PSAiZnVuY3Rpb24iID8gbi50b1N0cmluZygpIDogIiIgKyBuOwogICAgfQogICAgZnVuY3Rpb24gcmUobiwgdCkgewogICAgICBzd2l0Y2ggKHQpIHsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24ocikgewogICAgICAgICAgICByZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUobnRbciA+PiAyXSk7CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMzoKICAgICAgICAgIHJldHVybiBmdW5jdGlvbihyKSB7CiAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZSh0dFtyID4+IDNdKTsKICAgICAgICAgIH07CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gZmxvYXQgdHlwZTogIiArIG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBpZShuKSB7CiAgICAgIHZhciB0ID0gRnVuY3Rpb247CiAgICAgIGlmICghKHQgaW5zdGFuY2VvZiBGdW5jdGlvbikpCiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigibmV3XyBjYWxsZWQgd2l0aCBjb25zdHJ1Y3RvciB0eXBlICIgKyB0eXBlb2YgdCArICIgd2hpY2ggaXMgbm90IGEgZnVuY3Rpb24iKTsKICAgICAgdmFyIHIgPSBqbih0Lm5hbWUgfHwgInVua25vd25GdW5jdGlvbk5hbWUiLCBmdW5jdGlvbigpIHsKICAgICAgfSk7CiAgICAgIHJldHVybiByLnByb3RvdHlwZSA9IHQucHJvdG90eXBlLCByID0gbmV3IHIoKSwgbiA9IHQuYXBwbHkociwgbiksIG4gaW5zdGFuY2VvZiBPYmplY3QgPyBuIDogcjsKICAgIH0KICAgIGZ1bmN0aW9uIGFlKG4sIHQsIHIpIHsKICAgICAgc3dpdGNoICh0KSB7CiAgICAgICAgY2FzZSAwOgogICAgICAgICAgcmV0dXJuIHIgPyBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiAkW2ldOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIHhbaV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMToKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gWFtpID4+IDFdOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIHBuW2kgPj4gMV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gYltpID4+IDJdOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIEhbaSA+PiAyXTsKICAgICAgICAgIH07CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gaW50ZWdlciB0eXBlOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIFZuKG4pIHsKICAgICAgcmV0dXJuIG4gfHwgdigiQ2Fubm90IHVzZSBkZWxldGVkIHZhbC4gaGFuZGxlID0gIiArIG4pLCBJW25dLnZhbHVlOwogICAgfQogICAgZnVuY3Rpb24gQ3QobiwgdCkgewogICAgICB2YXIgciA9IEpbbl07CiAgICAgIHJldHVybiByID09PSB2b2lkIDAgJiYgdih0ICsgIiBoYXMgdW5rbm93biB0eXBlICIgKyB3dChuKSksIHI7CiAgICB9CiAgICB2YXIgb2UgPSB7fSwgRXQgPSB7fTsKICAgIGZ1bmN0aW9uIFR0KCkgewogICAgICBpZiAoIUduKSB7CiAgICAgICAgdmFyIG4gPSB7IFVTRVI6ICJ3ZWJfdXNlciIsIExPR05BTUU6ICJ3ZWJfdXNlciIsIFBBVEg6ICIvIiwgUFdEOiAiLyIsIEhPTUU6ICIvaG9tZS93ZWJfdXNlciIsIExBTkc6ICh0eXBlb2YgbmF2aWdhdG9yID09ICJvYmplY3QiICYmIG5hdmlnYXRvci5sYW5ndWFnZXMgJiYgbmF2aWdhdG9yLmxhbmd1YWdlc1swXSB8fCAiQyIpLnJlcGxhY2UoIi0iLCAiXyIpICsgIi5VVEYtOCIsIF86IE0gfHwgIi4vdGhpcy5wcm9ncmFtIiB9LCB0OwogICAgICAgIGZvciAodCBpbiBFdCkKICAgICAgICAgIG5bdF0gPSBFdFt0XTsKICAgICAgICB2YXIgciA9IFtdOwogICAgICAgIGZvciAodCBpbiBuKQogICAgICAgICAgci5wdXNoKHQgKyAiPSIgKyBuW3RdKTsKICAgICAgICBHbiA9IHI7CiAgICAgIH0KICAgICAgcmV0dXJuIEduOwogICAgfQogICAgdmFyIEduLCBQdCA9IFtdOwogICAgZnVuY3Rpb24gTXQobikgewogICAgICB2YXIgdCA9IHt9LCByOwogICAgICBmb3IgKHIgaW4gbikKICAgICAgICAoZnVuY3Rpb24oaSkgewogICAgICAgICAgdmFyIGEgPSBuW2ldOwogICAgICAgICAgdFtpXSA9IHR5cGVvZiBhID09ICJmdW5jdGlvbiIgPyBmdW5jdGlvbigpIHsKICAgICAgICAgICAgUHQucHVzaChpKTsKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICByZXR1cm4gYS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgICAgICAgICB9IGZpbmFsbHkgewogICAgICAgICAgICAgIGlmIChSbikKICAgICAgICAgICAgICAgIHJldHVybjsKICAgICAgICAgICAgICB2YXIgbyA9IFB0LnBvcCgpOwogICAgICAgICAgICAgIFFuKG8gPT09IGkpOwogICAgICAgICAgICB9CiAgICAgICAgICB9IDogYTsKICAgICAgICB9KShyKTsKICAgICAgcmV0dXJuIHQ7CiAgICB9CiAgICBmb3IgKHZhciBXdCA9IEFycmF5KDI1NiksIEVuID0gMDsgMjU2ID4gRW47ICsrRW4pCiAgICAgIFd0W0VuXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoRW4pOwogICAgY3QgPSBXdCwgbm4gPSBlLkJpbmRpbmdFcnJvciA9IE5uKCJCaW5kaW5nRXJyb3IiKSwgZnQgPSBlLkludGVybmFsRXJyb3IgPSBObigiSW50ZXJuYWxFcnJvciIpLCBELnByb3RvdHlwZS5pc0FsaWFzT2YgPSBmdW5jdGlvbihuKSB7CiAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBEICYmIG4gaW5zdGFuY2VvZiBEKSkKICAgICAgICByZXR1cm4gITE7CiAgICAgIHZhciB0ID0gdGhpcy5BLmZhLmVhLCByID0gdGhpcy5BLmRhLCBpID0gbi5BLmZhLmVhOwogICAgICBmb3IgKG4gPSBuLkEuZGE7IHQuaWE7ICkKICAgICAgICByID0gdC5xYShyKSwgdCA9IHQuaWE7CiAgICAgIGZvciAoOyBpLmlhOyApCiAgICAgICAgbiA9IGkucWEobiksIGkgPSBpLmlhOwogICAgICByZXR1cm4gdCA9PT0gaSAmJiByID09PSBuOwogICAgfSwgRC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHsKICAgICAgaWYgKHRoaXMuQS5kYSB8fCBIbih0aGlzKSwgdGhpcy5BLnBhKQogICAgICAgIHJldHVybiB0aGlzLkEuY291bnQudmFsdWUgKz0gMSwgdGhpczsKICAgICAgdmFyIG4gPSB1bihPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSwgeyBBOiB7IHZhbHVlOiBLdCh0aGlzLkEpIH0gfSkpOwogICAgICByZXR1cm4gbi5BLmNvdW50LnZhbHVlICs9IDEsIG4uQS5vYSA9ICExLCBuOwogICAgfSwgRC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24oKSB7CiAgICAgIHRoaXMuQS5kYSB8fCBIbih0aGlzKSwgdGhpcy5BLm9hICYmICF0aGlzLkEucGEgJiYgdigiT2JqZWN0IGFscmVhZHkgc2NoZWR1bGVkIGZvciBkZWxldGlvbiIpLCBkdCh0aGlzKSwgaHQodGhpcy5BKSwgdGhpcy5BLnBhIHx8ICh0aGlzLkEuZ2EgPSB2b2lkIDAsIHRoaXMuQS5kYSA9IHZvaWQgMCk7CiAgICB9LCBELnByb3RvdHlwZS5pc0RlbGV0ZWQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuICF0aGlzLkEuZGE7CiAgICB9LCBELnByb3RvdHlwZS5kZWxldGVMYXRlciA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gdGhpcy5BLmRhIHx8IEhuKHRoaXMpLCB0aGlzLkEub2EgJiYgIXRoaXMuQS5wYSAmJiB2KCJPYmplY3QgYWxyZWFkeSBzY2hlZHVsZWQgZm9yIGRlbGV0aW9uIiksIGNuLnB1c2godGhpcyksIGNuLmxlbmd0aCA9PT0gMSAmJiBsbiAmJiBsbih6biksIHRoaXMuQS5vYSA9ICEwLCB0aGlzOwogICAgfSwgei5wcm90b3R5cGUuRGEgPSBmdW5jdGlvbihuKSB7CiAgICAgIHJldHVybiB0aGlzLndhICYmIChuID0gdGhpcy53YShuKSksIG47CiAgICB9LCB6LnByb3RvdHlwZS52YSA9IGZ1bmN0aW9uKG4pIHsKICAgICAgdGhpcy5uYSAmJiB0aGlzLm5hKG4pOwogICAgfSwgei5wcm90b3R5cGUuYXJnUGFja0FkdmFuY2UgPSA4LCB6LnByb3RvdHlwZS5yZWFkVmFsdWVGcm9tUG9pbnRlciA9IEFuLCB6LnByb3RvdHlwZS5kZWxldGVPYmplY3QgPSBmdW5jdGlvbihuKSB7CiAgICAgIG4gIT09IG51bGwgJiYgbi5kZWxldGUoKTsKICAgIH0sIHoucHJvdG90eXBlLmZyb21XaXJlVHlwZSA9IGZ1bmN0aW9uKG4pIHsKICAgICAgZnVuY3Rpb24gdCgpIHsKICAgICAgICByZXR1cm4gdGhpcy5zYSA/IF9uKHRoaXMuZWEubWEsIHsgZmE6IHRoaXMuR2EsIGRhOiByLCBoYTogdGhpcywgZ2E6IG4gfSkgOiBfbih0aGlzLmVhLm1hLCB7IGZhOiB0aGlzLCBkYTogbiB9KTsKICAgICAgfQogICAgICB2YXIgciA9IHRoaXMuRGEobik7CiAgICAgIGlmICghcikKICAgICAgICByZXR1cm4gdGhpcy52YShuKSwgbnVsbDsKICAgICAgdmFyIGkgPSBlZSh0aGlzLmVhLCByKTsKICAgICAgaWYgKGkgIT09IHZvaWQgMCkKICAgICAgICByZXR1cm4gaS5BLmNvdW50LnZhbHVlID09PSAwID8gKGkuQS5kYSA9IHIsIGkuQS5nYSA9IG4sIGkuY2xvbmUoKSkgOiAoaSA9IGkuY2xvbmUoKSwgdGhpcy52YShuKSwgaSk7CiAgICAgIGlmIChpID0gdGhpcy5lYS5DYShyKSwgaSA9IHB0W2ldLCAhaSkKICAgICAgICByZXR1cm4gdC5jYWxsKHRoaXMpOwogICAgICBpID0gdGhpcy5yYSA/IGkuemEgOiBpLnBvaW50ZXJUeXBlOwogICAgICB2YXIgYSA9IG10KHIsIHRoaXMuZWEsIGkuZWEpOwogICAgICByZXR1cm4gYSA9PT0gbnVsbCA/IHQuY2FsbCh0aGlzKSA6IHRoaXMuc2EgPyBfbihpLmVhLm1hLCB7IGZhOiBpLCBkYTogYSwgaGE6IHRoaXMsIGdhOiBuIH0pIDogX24oCiAgICAgICAgaS5lYS5tYSwKICAgICAgICB7IGZhOiBpLCBkYTogYSB9CiAgICAgICk7CiAgICB9LCBlLmdldEluaGVyaXRlZEluc3RhbmNlQ291bnQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGZuKS5sZW5ndGg7CiAgICB9LCBlLmdldExpdmVJbmhlcml0ZWRJbnN0YW5jZXMgPSBmdW5jdGlvbigpIHsKICAgICAgdmFyIG4gPSBbXSwgdDsKICAgICAgZm9yICh0IGluIGZuKQogICAgICAgIGZuLmhhc093blByb3BlcnR5KHQpICYmIG4ucHVzaChmblt0XSk7CiAgICAgIHJldHVybiBuOwogICAgfSwgZS5mbHVzaFBlbmRpbmdEZWxldGVzID0gem4sIGUuc2V0RGVsYXlGdW5jdGlvbiA9IGZ1bmN0aW9uKG4pIHsKICAgICAgbG4gPSBuLCBjbi5sZW5ndGggJiYgbG4gJiYgbG4oem4pOwogICAgfSwgZ3QgPSBlLlVuYm91bmRUeXBlRXJyb3IgPSBObigiVW5ib3VuZFR5cGVFcnJvciIpLCBlLmNvdW50X2VtdmFsX2hhbmRsZXMgPSBmdW5jdGlvbigpIHsKICAgICAgZm9yICh2YXIgbiA9IDAsIHQgPSA1OyB0IDwgSS5sZW5ndGg7ICsrdCkKICAgICAgICBJW3RdICE9PSB2b2lkIDAgJiYgKytuOwogICAgICByZXR1cm4gbjsKICAgIH0sIGUuZ2V0X2ZpcnN0X2VtdmFsID0gZnVuY3Rpb24oKSB7CiAgICAgIGZvciAodmFyIG4gPSA1OyBuIDwgSS5sZW5ndGg7ICsrbikKICAgICAgICBpZiAoSVtuXSAhPT0gdm9pZCAwKQogICAgICAgICAgcmV0dXJuIElbbl07CiAgICAgIHJldHVybiBudWxsOwogICAgfSwgYXQucHVzaCh7IEJhOiBmdW5jdGlvbigpIHsKICAgICAgT3QoKTsKICAgIH0gfSk7CiAgICB2YXIgc2UgPSB7CiAgICAgIHo6IGZ1bmN0aW9uKG4pIHsKICAgICAgICByZXR1cm4gVG4obiArIDE2KSArIDE2OwogICAgICB9LAogICAgICB1OiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgdGhyb3cgbmV3IEp0KG4pLkZhKHQsIHIpLCAidW5jYXVnaHRfZXhjZXB0aW9uIiBpbiBtbiA/IG1uLnhhKysgOiBtbi54YSA9IDEsIG47CiAgICAgIH0sCiAgICAgIHc6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIGEpIHsKICAgICAgICB2YXIgbyA9IEluKHIpOwogICAgICAgIHQgPSBTKHQpLCBVKG4sIHsgbmFtZTogdCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihjKSB7CiAgICAgICAgICByZXR1cm4gISFjOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGMsIGwpIHsKICAgICAgICAgIHJldHVybiBsID8gaSA6IGE7CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBmdW5jdGlvbihjKSB7CiAgICAgICAgICBpZiAociA9PT0gMSkKICAgICAgICAgICAgdmFyIGwgPSAkOwogICAgICAgICAgZWxzZSBpZiAociA9PT0gMikKICAgICAgICAgICAgbCA9IFg7CiAgICAgICAgICBlbHNlIGlmIChyID09PSA0KQogICAgICAgICAgICBsID0gYjsKICAgICAgICAgIGVsc2UKICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBib29sZWFuIHR5cGUgc2l6ZTogIiArIHQpOwogICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKGxbYyA+PiBvXSk7CiAgICAgICAgfSwga2E6IG51bGwgfSk7CiAgICAgIH0sCiAgICAgIGk6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIGEsIG8sIGMsIGwsIHAsIGYsIGQsIGgsIHcpIHsKICAgICAgICBkID0gUyhkKSwgbyA9IFYoYSwgbyksIGwgJiYgKGwgPSBWKGMsIGwpKSwgZiAmJiAoZiA9IFYocCwgZikpLCB3ID0gVihoLCB3KTsKICAgICAgICB2YXIgVCA9IExuKGQpOwogICAgICAgIHl0KFQsIGZ1bmN0aW9uKCkgewogICAgICAgICAgZG4oIkNhbm5vdCBjb25zdHJ1Y3QgIiArIGQgKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgW2ldKTsKICAgICAgICB9KSwgdG4oW24sIHQsIHJdLCBpID8gW2ldIDogW10sIGZ1bmN0aW9uKHkpIHsKICAgICAgICAgIGlmICh5ID0geVswXSwgaSkKICAgICAgICAgICAgdmFyIE4gPSB5LmVhLCBPID0gTi5tYTsKICAgICAgICAgIGVsc2UKICAgICAgICAgICAgTyA9IEQucHJvdG90eXBlOwogICAgICAgICAgeSA9IGpuKFQsIGZ1bmN0aW9uKCkgewogICAgICAgICAgICBpZiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpICE9PSBrKQogICAgICAgICAgICAgIHRocm93IG5ldyBubigiVXNlICduZXcnIHRvIGNvbnN0cnVjdCAiICsgZCk7CiAgICAgICAgICAgIGlmIChqLmxhID09PSB2b2lkIDApCiAgICAgICAgICAgICAgdGhyb3cgbmV3IG5uKGQgKyAiIGhhcyBubyBhY2Nlc3NpYmxlIGNvbnN0cnVjdG9yIik7CiAgICAgICAgICAgIHZhciBTdCA9IGoubGFbYXJndW1lbnRzLmxlbmd0aF07CiAgICAgICAgICAgIGlmIChTdCA9PT0gdm9pZCAwKQogICAgICAgICAgICAgIHRocm93IG5ldyBubigiVHJpZWQgdG8gaW52b2tlIGN0b3Igb2YgIiArIGQgKyAiIHdpdGggaW52YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVycyAoIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiKSAtIGV4cGVjdGVkICgiICsgT2JqZWN0LmtleXMoai5sYSkudG9TdHJpbmcoKSArICIpIHBhcmFtZXRlcnMgaW5zdGVhZCEiKTsKICAgICAgICAgICAgcmV0dXJuIFN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgICB9KTsKICAgICAgICAgIHZhciBrID0gT2JqZWN0LmNyZWF0ZShPLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiB5IH0gfSk7CiAgICAgICAgICB5LnByb3RvdHlwZSA9IGs7CiAgICAgICAgICB2YXIgaiA9IG5ldyBYdChkLCB5LCBrLCB3LCBOLCBvLCBsLCBmKTsKICAgICAgICAgIE4gPSBuZXcgeihkLCBqLCAhMCwgITEpLCBPID0gbmV3IHooZCArICIqIiwgaiwgITEsICExKTsKICAgICAgICAgIHZhciBobiA9IG5ldyB6KGQgKyAiIGNvbnN0KiIsIGosICExLCAhMCk7CiAgICAgICAgICByZXR1cm4gcHRbbl0gPSB7IHBvaW50ZXJUeXBlOiBPLCB6YTogaG4gfSwgdnQoVCwgeSksIFtOLCBPLCBobl07CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGg6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIGEsIG8pIHsKICAgICAgICBRbigwIDwgdCk7CiAgICAgICAgdmFyIGMgPSBBdCh0LCByKTsKICAgICAgICBhID0gVihpLCBhKTsKICAgICAgICB2YXIgbCA9IFtvXSwgcCA9IFtdOwogICAgICAgIHRuKFtdLCBbbl0sIGZ1bmN0aW9uKGYpIHsKICAgICAgICAgIGYgPSBmWzBdOwogICAgICAgICAgdmFyIGQgPSAiY29uc3RydWN0b3IgIiArIGYubmFtZTsKICAgICAgICAgIGlmIChmLmVhLmxhID09PSB2b2lkIDAgJiYgKGYuZWEubGEgPSBbXSksIGYuZWEubGFbdCAtIDFdICE9PSB2b2lkIDApCiAgICAgICAgICAgIHRocm93IG5ldyBubigiQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIGNvbnN0cnVjdG9ycyB3aXRoIGlkZW50aWNhbCBudW1iZXIgb2YgcGFyYW1ldGVycyAoIiArICh0IC0gMSkgKyAiKSBmb3IgY2xhc3MgJyIgKyBmLm5hbWUgKyAiJyEgT3ZlcmxvYWQgcmVzb2x1dGlvbiBpcyBjdXJyZW50bHkgb25seSBwZXJmb3JtZWQgdXNpbmcgdGhlIHBhcmFtZXRlciBjb3VudCwgbm90IGFjdHVhbCB0eXBlIGluZm8hIik7CiAgICAgICAgICByZXR1cm4gZi5lYS5sYVt0IC0gMV0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgZG4oIkNhbm5vdCBjb25zdHJ1Y3QgIiArIGYubmFtZSArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBjKTsKICAgICAgICAgIH0sIHRuKFtdLCBjLCBmdW5jdGlvbihoKSB7CiAgICAgICAgICAgIHJldHVybiBmLmVhLmxhW3QgLSAxXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIGFyZ3VtZW50cy5sZW5ndGggIT09IHQgLSAxICYmIHYoZCArICIgY2FsbGVkIHdpdGggIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiIGFyZ3VtZW50cywgZXhwZWN0ZWQgIiArICh0IC0gMSkpLCBwLmxlbmd0aCA9IDAsIGwubGVuZ3RoID0gdDsKICAgICAgICAgICAgICBmb3IgKHZhciB3ID0gMTsgdyA8IHQ7ICsrdykKICAgICAgICAgICAgICAgIGxbd10gPSBoW3ddLnRvV2lyZVR5cGUoCiAgICAgICAgICAgICAgICAgIHAsCiAgICAgICAgICAgICAgICAgIGFyZ3VtZW50c1t3IC0gMV0KICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgcmV0dXJuIHcgPSBhLmFwcGx5KG51bGwsIGwpLCBDbihwKSwgaFswXS5mcm9tV2lyZVR5cGUodyk7CiAgICAgICAgICAgIH0sIFtdOwogICAgICAgICAgfSksIFtdOwogICAgICAgIH0pOwogICAgICB9LAogICAgICBiOiBmdW5jdGlvbihuLCB0LCByLCBpLCBhLCBvLCBjLCBsLCBwLCBmKSB7CiAgICAgICAgdCA9IFModCksIGEgPSBWKGksIGEpLCB0bihbXSwgW25dLCBmdW5jdGlvbihkKSB7CiAgICAgICAgICBkID0gZFswXTsKICAgICAgICAgIHZhciBoID0gZC5uYW1lICsgIi4iICsgdCwgdyA9IHsgZ2V0OiBmdW5jdGlvbigpIHsKICAgICAgICAgICAgZG4oIkNhbm5vdCBhY2Nlc3MgIiArIGggKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgW3IsIGNdKTsKICAgICAgICAgIH0sIGVudW1lcmFibGU6ICEwLCBjb25maWd1cmFibGU6ICEwIH07CiAgICAgICAgICByZXR1cm4gcCA/IHcuc2V0ID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGRuKCJDYW5ub3QgYWNjZXNzICIgKyBoICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIFtyLCBjXSk7CiAgICAgICAgICB9IDogdy5zZXQgPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgdihoICsgIiBpcyBhIHJlYWQtb25seSBwcm9wZXJ0eSIpOwogICAgICAgICAgfSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGQuZWEubWEsIHQsIHcpLCB0bihbXSwgcCA/IFtyLCBjXSA6IFtyXSwgZnVuY3Rpb24oVCkgewogICAgICAgICAgICB2YXIgeSA9IFRbMF0sIE4gPSB7IGdldDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgdmFyIGsgPSBfdCh0aGlzLCBkLCBoICsgIiBnZXR0ZXIiKTsKICAgICAgICAgICAgICByZXR1cm4geS5mcm9tV2lyZVR5cGUoYShvLCBrKSk7CiAgICAgICAgICAgIH0sIGVudW1lcmFibGU6ICEwIH07CiAgICAgICAgICAgIGlmIChwKSB7CiAgICAgICAgICAgICAgcCA9IFYobCwgcCk7CiAgICAgICAgICAgICAgdmFyIE8gPSBUWzFdOwogICAgICAgICAgICAgIE4uc2V0ID0gZnVuY3Rpb24oaykgewogICAgICAgICAgICAgICAgdmFyIGogPSBfdCh0aGlzLCBkLCBoICsgIiBzZXR0ZXIiKSwgaG4gPSBbXTsKICAgICAgICAgICAgICAgIHAoZiwgaiwgTy50b1dpcmVUeXBlKGhuLCBrKSksIENuKGhuKTsKICAgICAgICAgICAgICB9OwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZC5lYS5tYSwgdCwgTiksIFtdOwogICAgICAgICAgfSksIFtdOwogICAgICAgIH0pOwogICAgICB9LAogICAgICB2OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdCA9IFModCksIFUobiwgeyBuYW1lOiB0LCBmcm9tV2lyZVR5cGU6IGZ1bmN0aW9uKHIpIHsKICAgICAgICAgIHZhciBpID0gSVtyXS52YWx1ZTsKICAgICAgICAgIHJldHVybiBEbihyKSwgaTsKICAgICAgICB9LCB0b1dpcmVUeXBlOiBmdW5jdGlvbihyLCBpKSB7CiAgICAgICAgICByZXR1cm4gZW4oaSk7CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBBbiwga2E6IG51bGwgfSk7CiAgICAgIH0sCiAgICAgIG06IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICByID0gSW4ociksIHQgPSBTKHQpLCBVKG4sIHsKICAgICAgICAgIG5hbWU6IHQsCiAgICAgICAgICBmcm9tV2lyZVR5cGU6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIGk7CiAgICAgICAgICB9LAogICAgICAgICAgdG9XaXJlVHlwZTogZnVuY3Rpb24oaSwgYSkgewogICAgICAgICAgICBpZiAodHlwZW9mIGEgIT0gIm51bWJlciIgJiYgdHlwZW9mIGEgIT0gImJvb2xlYW4iKQogICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0ICInICsgcm4oYSkgKyAnIiB0byAnICsgdGhpcy5uYW1lKTsKICAgICAgICAgICAgcmV0dXJuIGE7CiAgICAgICAgICB9LAogICAgICAgICAgYXJnUGFja0FkdmFuY2U6IDgsCiAgICAgICAgICByZWFkVmFsdWVGcm9tUG9pbnRlcjogcmUodCwgciksCiAgICAgICAgICBrYTogbnVsbAogICAgICAgIH0pOwogICAgICB9LAogICAgICBjOiBmdW5jdGlvbihuLCB0LCByLCBpLCBhLCBvKSB7CiAgICAgICAgdmFyIGMgPSBBdCh0LCByKTsKICAgICAgICBuID0gUyhuKSwgYSA9IFYoaSwgYSksIHl0KG4sIGZ1bmN0aW9uKCkgewogICAgICAgICAgZG4oIkNhbm5vdCBjYWxsICIgKyBuICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIGMpOwogICAgICAgIH0sIHQgLSAxKSwgdG4oW10sIGMsIGZ1bmN0aW9uKGwpIHsKICAgICAgICAgIHZhciBwID0gbiwgZiA9IG47CiAgICAgICAgICBsID0gW2xbMF0sIG51bGxdLmNvbmNhdChsLnNsaWNlKDEpKTsKICAgICAgICAgIHZhciBkID0gYSwgaCA9IGwubGVuZ3RoOwogICAgICAgICAgMiA+IGggJiYgdigiYXJnVHlwZXMgYXJyYXkgc2l6ZSBtaXNtYXRjaCEgTXVzdCBhdCBsZWFzdCBnZXQgcmV0dXJuIHZhbHVlIGFuZCAndGhpcycgdHlwZXMhIik7CiAgICAgICAgICBmb3IgKHZhciB3ID0gbFsxXSAhPT0gbnVsbCAmJiAhMSwgVCA9ICExLCB5ID0gMTsgeSA8IGwubGVuZ3RoOyArK3kpCiAgICAgICAgICAgIGlmIChsW3ldICE9PSBudWxsICYmIGxbeV0ua2EgPT09IHZvaWQgMCkgewogICAgICAgICAgICAgIFQgPSAhMDsKICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgfQogICAgICAgICAgdmFyIE4gPSBsWzBdLm5hbWUgIT09ICJ2b2lkIiwgTyA9ICIiLCBrID0gIiI7CiAgICAgICAgICBmb3IgKHkgPSAwOyB5IDwgaCAtIDI7ICsreSkKICAgICAgICAgICAgTyArPSAoeSAhPT0gMCA/ICIsICIgOiAiIikgKyAiYXJnIiArIHksIGsgKz0gKHkgIT09IDAgPyAiLCAiIDogIiIpICsgImFyZyIgKyB5ICsgIldpcmVkIjsKICAgICAgICAgIGYgPSAicmV0dXJuIGZ1bmN0aW9uICIgKyBMbihmKSArICIoIiArIE8gKyBgKSB7CmlmIChhcmd1bWVudHMubGVuZ3RoICE9PSBgICsgKGggLSAyKSArIGApIHsKdGhyb3dCaW5kaW5nRXJyb3IoJ2Z1bmN0aW9uIGAgKyBmICsgIiBjYWxsZWQgd2l0aCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLCBleHBlY3RlZCAiICsgKGggLSAyKSArIGAgYXJncyEnKTsKfQpgLCBUICYmIChmICs9IGB2YXIgZGVzdHJ1Y3RvcnMgPSBbXTsKYCk7CiAgICAgICAgICB2YXIgaiA9IFQgPyAiZGVzdHJ1Y3RvcnMiIDogIm51bGwiOwogICAgICAgICAgZm9yIChPID0gInRocm93QmluZGluZ0Vycm9yIGludm9rZXIgZm4gcnVuRGVzdHJ1Y3RvcnMgcmV0VHlwZSBjbGFzc1BhcmFtIi5zcGxpdCgiICIpLCBkID0gW3YsIGQsIG8sIENuLCBsWzBdLCBsWzFdXSwgdyAmJiAoZiArPSAidmFyIHRoaXNXaXJlZCA9IGNsYXNzUGFyYW0udG9XaXJlVHlwZSgiICsgaiArIGAsIHRoaXMpOwpgKSwgeSA9IDA7IHkgPCBoIC0gMjsgKyt5KQogICAgICAgICAgICBmICs9ICJ2YXIgYXJnIiArIHkgKyAiV2lyZWQgPSBhcmdUeXBlIiArIHkgKyAiLnRvV2lyZVR5cGUoIiArIGogKyAiLCBhcmciICsgeSArICIpOyAvLyAiICsgbFt5ICsgMl0ubmFtZSArIGAKYCwgTy5wdXNoKCJhcmdUeXBlIiArIHkpLCBkLnB1c2gobFt5ICsgMl0pOwogICAgICAgICAgaWYgKHcgJiYgKGsgPSAidGhpc1dpcmVkIiArICgwIDwgay5sZW5ndGggPyAiLCAiIDogIiIpICsgayksIGYgKz0gKE4gPyAidmFyIHJ2ID0gIiA6ICIiKSArICJpbnZva2VyKGZuIiArICgwIDwgay5sZW5ndGggPyAiLCAiIDogIiIpICsgayArIGApOwpgLCBUKQogICAgICAgICAgICBmICs9IGBydW5EZXN0cnVjdG9ycyhkZXN0cnVjdG9ycyk7CmA7CiAgICAgICAgICBlbHNlCiAgICAgICAgICAgIGZvciAoeSA9IHcgPyAxIDogMjsgeSA8IGwubGVuZ3RoOyArK3kpCiAgICAgICAgICAgICAgaCA9IHkgPT09IDEgPyAidGhpc1dpcmVkIiA6ICJhcmciICsgKHkgLSAyKSArICJXaXJlZCIsIGxbeV0ua2EgIT09IG51bGwgJiYgKGYgKz0gaCArICJfZHRvcigiICsgaCArICIpOyAvLyAiICsgbFt5XS5uYW1lICsgYApgLCBPLnB1c2goaCArICJfZHRvciIpLCBkLnB1c2gobFt5XS5rYSkpOwogICAgICAgICAgcmV0dXJuIE4gJiYgKGYgKz0gYHZhciByZXQgPSByZXRUeXBlLmZyb21XaXJlVHlwZShydik7CnJldHVybiByZXQ7CmApLCBPLnB1c2goZiArIGB9CmApLCBsID0gaWUoTykuYXBwbHkobnVsbCwgZCksIHZ0KHAsIGwsIHQgLSAxKSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGU6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIGEpIHsKICAgICAgICBmdW5jdGlvbiBvKGYpIHsKICAgICAgICAgIHJldHVybiBmOwogICAgICAgIH0KICAgICAgICB0ID0gUyh0KSwgYSA9PT0gLTEgJiYgKGEgPSA0Mjk0OTY3Mjk1KTsKICAgICAgICB2YXIgYyA9IEluKHIpOwogICAgICAgIGlmIChpID09PSAwKSB7CiAgICAgICAgICB2YXIgbCA9IDMyIC0gOCAqIHI7CiAgICAgICAgICBvID0gZnVuY3Rpb24oZikgewogICAgICAgICAgICByZXR1cm4gZiA8PCBsID4+PiBsOwogICAgICAgICAgfTsKICAgICAgICB9CiAgICAgICAgdmFyIHAgPSB0LmluZGV4T2YoInVuc2lnbmVkIikgIT0gLTE7CiAgICAgICAgVShuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogbywgdG9XaXJlVHlwZTogZnVuY3Rpb24oZiwgZCkgewogICAgICAgICAgaWYgKHR5cGVvZiBkICE9ICJudW1iZXIiICYmIHR5cGVvZiBkICE9ICJib29sZWFuIikKICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgIicgKyBybihkKSArICciIHRvICcgKyB0aGlzLm5hbWUpOwogICAgICAgICAgaWYgKGQgPCBpIHx8IGQgPiBhKQogICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQYXNzaW5nIGEgbnVtYmVyICInICsgcm4oZCkgKyAnIiBmcm9tIEpTIHNpZGUgdG8gQy9DKysgc2lkZSB0byBhbiBhcmd1bWVudCBvZiB0eXBlICInICsgdCArICciLCB3aGljaCBpcyBvdXRzaWRlIHRoZSB2YWxpZCByYW5nZSBbJyArIGkgKyAiLCAiICsgYSArICJdISIpOwogICAgICAgICAgcmV0dXJuIHAgPyBkID4+PiAwIDogZCB8IDA7CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBhZSh0LCBjLCBpICE9PSAwKSwga2E6IG51bGwgfSk7CiAgICAgIH0sCiAgICAgIGQ6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBmdW5jdGlvbiBpKG8pIHsKICAgICAgICAgIG8gPj49IDI7CiAgICAgICAgICB2YXIgYyA9IEg7CiAgICAgICAgICByZXR1cm4gbmV3IGEoUSwgY1tvICsgMV0sIGNbb10pOwogICAgICAgIH0KICAgICAgICB2YXIgYSA9IFtJbnQ4QXJyYXksIFVpbnQ4QXJyYXksIEludDE2QXJyYXksIFVpbnQxNkFycmF5LCBJbnQzMkFycmF5LCBVaW50MzJBcnJheSwgRmxvYXQzMkFycmF5LCBGbG9hdDY0QXJyYXldW3RdOwogICAgICAgIHIgPSBTKHIpLCBVKG4sIHsgbmFtZTogciwgZnJvbVdpcmVUeXBlOiBpLCBhcmdQYWNrQWR2YW5jZTogOCwgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IGkgfSwgeyBFYTogITAgfSk7CiAgICAgIH0sCiAgICAgIG46IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUyh0KTsKICAgICAgICB2YXIgciA9IHQgPT09ICJzdGQ6OnN0cmluZyI7CiAgICAgICAgVShuLCB7CiAgICAgICAgICBuYW1lOiB0LAogICAgICAgICAgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHZhciBhID0gSFtpID4+IDJdOwogICAgICAgICAgICBpZiAocikKICAgICAgICAgICAgICBmb3IgKHZhciBvID0gaSArIDQsIGMgPSAwOyBjIDw9IGE7ICsrYykgewogICAgICAgICAgICAgICAgdmFyIGwgPSBpICsgNCArIGM7CiAgICAgICAgICAgICAgICBpZiAoYyA9PSBhIHx8IHhbbF0gPT0gMCkgewogICAgICAgICAgICAgICAgICBpZiAobykgewogICAgICAgICAgICAgICAgICAgIHZhciBwID0gbywgZiA9IHgsIGQgPSBwICsgKGwgLSBvKTsKICAgICAgICAgICAgICAgICAgICBmb3IgKG8gPSBwOyBmW29dICYmICEobyA+PSBkKTsgKQogICAgICAgICAgICAgICAgICAgICAgKytvOwogICAgICAgICAgICAgICAgICAgIGlmICgxNiA8IG8gLSBwICYmIGYuc3ViYXJyYXkgJiYgWG4pCiAgICAgICAgICAgICAgICAgICAgICBwID0gWG4uZGVjb2RlKGYuc3ViYXJyYXkocCwgbykpOwogICAgICAgICAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgICAgICAgICAgZm9yIChkID0gIiI7IHAgPCBvOyApIHsKICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBmW3ArK107CiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoICYgMTI4KSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHcgPSBmW3ArK10gJiA2MzsKICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGggJiAyMjQpID09IDE5MikKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoaCAmIDMxKSA8PCA2IHwgdyk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgVCA9IGZbcCsrXSAmIDYzOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgaCA9IChoICYgMjQwKSA9PSAyMjQgPyAoaCAmIDE1KSA8PCAxMiB8IHcgPDwgNiB8IFQgOiAoaCAmIDcpIDw8IDE4IHwgdyA8PCAxMiB8IFQgPDwgNiB8IGZbcCsrXSAmIDYzLCA2NTUzNiA+IGggPyBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoaCkgOiAoaCAtPSA2NTUzNiwgZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDU1Mjk2IHwgaCA+PiAxMCwgNTYzMjAgfCBoICYgMTAyMykpOwogICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlCiAgICAgICAgICAgICAgICAgICAgICAgICAgZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGgpOwogICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgcCA9IGQ7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICB9IGVsc2UKICAgICAgICAgICAgICAgICAgICBwID0gIiI7CiAgICAgICAgICAgICAgICAgIGlmICh5ID09PSB2b2lkIDApCiAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBwOwogICAgICAgICAgICAgICAgICBlbHNlCiAgICAgICAgICAgICAgICAgICAgeSArPSAiXDAiLCB5ICs9IHA7CiAgICAgICAgICAgICAgICAgIG8gPSBsICsgMTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICB9CiAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgIGZvciAoeSA9IEFycmF5KGEpLCBjID0gMDsgYyA8IGE7ICsrYykKICAgICAgICAgICAgICAgIHlbY10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHhbaSArIDQgKyBjXSk7CiAgICAgICAgICAgICAgeSA9IHkuam9pbigiIik7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIEIoaSksIHk7CiAgICAgICAgICB9LAogICAgICAgICAgdG9XaXJlVHlwZTogZnVuY3Rpb24oaSwgYSkgewogICAgICAgICAgICBhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgJiYgKGEgPSBuZXcgVWludDhBcnJheShhKSk7CiAgICAgICAgICAgIHZhciBvID0gdHlwZW9mIGEgPT0gInN0cmluZyI7CiAgICAgICAgICAgIG8gfHwgYSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgfHwgYSBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5IHx8IGEgaW5zdGFuY2VvZiBJbnQ4QXJyYXkgfHwgdigiQ2Fubm90IHBhc3Mgbm9uLXN0cmluZyB0byBzdGQ6OnN0cmluZyIpOwogICAgICAgICAgICB2YXIgYyA9IChyICYmIG8gPyBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICBmb3IgKHZhciBmID0gMCwgZCA9IDA7IGQgPCBhLmxlbmd0aDsgKytkKSB7CiAgICAgICAgICAgICAgICB2YXIgaCA9IGEuY2hhckNvZGVBdChkKTsKICAgICAgICAgICAgICAgIDU1Mjk2IDw9IGggJiYgNTczNDMgPj0gaCAmJiAoaCA9IDY1NTM2ICsgKChoICYgMTAyMykgPDwgMTApIHwgYS5jaGFyQ29kZUF0KCsrZCkgJiAxMDIzKSwgMTI3ID49IGggPyArK2YgOiBmID0gMjA0NyA+PSBoID8gZiArIDIgOiA2NTUzNSA+PSBoID8gZiArIDMgOiBmICsgNDsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgcmV0dXJuIGY7CiAgICAgICAgICAgIH0gOiBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICByZXR1cm4gYS5sZW5ndGg7CiAgICAgICAgICAgIH0pKCksIGwgPSBUbig0ICsgYyArIDEpOwogICAgICAgICAgICBpZiAoSFtsID4+IDJdID0gYywgciAmJiBvKQogICAgICAgICAgICAgIEh0KGEsIGwgKyA0LCBjICsgMSk7CiAgICAgICAgICAgIGVsc2UgaWYgKG8pCiAgICAgICAgICAgICAgZm9yIChvID0gMDsgbyA8IGM7ICsrbykgewogICAgICAgICAgICAgICAgdmFyIHAgPSBhLmNoYXJDb2RlQXQobyk7CiAgICAgICAgICAgICAgICAyNTUgPCBwICYmIChCKGwpLCB2KCJTdHJpbmcgaGFzIFVURi0xNiBjb2RlIHVuaXRzIHRoYXQgZG8gbm90IGZpdCBpbiA4IGJpdHMiKSksIHhbbCArIDQgKyBvXSA9IHA7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlCiAgICAgICAgICAgICAgZm9yIChvID0gMDsgbyA8IGM7ICsrbykKICAgICAgICAgICAgICAgIHhbbCArIDQgKyBvXSA9IGFbb107CiAgICAgICAgICAgIHJldHVybiBpICE9PSBudWxsICYmIGkucHVzaChCLCBsKSwgbDsKICAgICAgICAgIH0sCiAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBBbiwKICAgICAgICAgIGthOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIEIoaSk7CiAgICAgICAgICB9CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGo6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBpZiAociA9IFMociksIHQgPT09IDIpCiAgICAgICAgICB2YXIgaSA9IFV0LCBhID0genQsIG8gPSBCdCwgYyA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICByZXR1cm4gcG47CiAgICAgICAgICB9LCBsID0gMTsKICAgICAgICBlbHNlCiAgICAgICAgICB0ID09PSA0ICYmIChpID0gRHQsIGEgPSBWdCwgbyA9IEd0LCBjID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHJldHVybiBIOwogICAgICAgICAgfSwgbCA9IDIpOwogICAgICAgIFUobiwgeyBuYW1lOiByLCBmcm9tV2lyZVR5cGU6IGZ1bmN0aW9uKHApIHsKICAgICAgICAgIGZvciAodmFyIGYgPSBIW3AgPj4gMl0sIGQgPSBjKCksIGgsIHcgPSBwICsgNCwgVCA9IDA7IFQgPD0gZjsgKytUKSB7CiAgICAgICAgICAgIHZhciB5ID0gcCArIDQgKyBUICogdDsKICAgICAgICAgICAgKFQgPT0gZiB8fCBkW3kgPj4gbF0gPT0gMCkgJiYgKHcgPSBpKHcsIHkgLSB3KSwgaCA9PT0gdm9pZCAwID8gaCA9IHcgOiAoaCArPSAiXDAiLCBoICs9IHcpLCB3ID0geSArIHQpOwogICAgICAgICAgfQogICAgICAgICAgcmV0dXJuIEIocCksIGg7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24ocCwgZikgewogICAgICAgICAgdHlwZW9mIGYgIT0gInN0cmluZyIgJiYgdigiQ2Fubm90IHBhc3Mgbm9uLXN0cmluZyB0byBDKysgc3RyaW5nIHR5cGUgIiArIHIpOwogICAgICAgICAgdmFyIGQgPSBvKGYpLCBoID0gVG4oNCArIGQgKyB0KTsKICAgICAgICAgIHJldHVybiBIW2ggPj4gMl0gPSBkID4+IGwsIGEoZiwgaCArIDQsIGQgKyB0KSwgcCAhPT0gbnVsbCAmJiBwLnB1c2goQiwgaCksIGg7CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBBbiwga2E6IGZ1bmN0aW9uKHApIHsKICAgICAgICAgIEIocCk7CiAgICAgICAgfSB9KTsKICAgICAgfSwKICAgICAgeDogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHQgPSBTKHQpLCBVKG4sIHsgUWE6ICEwLCBuYW1lOiB0LCBhcmdQYWNrQWR2YW5jZTogMCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbigpIHsKICAgICAgICB9LCB0b1dpcmVUeXBlOiBmdW5jdGlvbigpIHsKICAgICAgICB9IH0pOwogICAgICB9LAogICAgICBrOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgbiA9IFZuKG4pLCB0ID0gQ3QodCwgImVtdmFsOjphcyIpOwogICAgICAgIHZhciBpID0gW10sIGEgPSBlbihpKTsKICAgICAgICByZXR1cm4gYltyID4+IDJdID0gYSwgdC50b1dpcmVUeXBlKGksIG4pOwogICAgICB9LAogICAgICBnOiBEbiwKICAgICAgbDogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHJldHVybiBuID0gVm4obiksIHQgPSBWbih0KSwgZW4oblt0XSk7CiAgICAgIH0sCiAgICAgIHA6IGZ1bmN0aW9uKG4pIHsKICAgICAgICB2YXIgdCA9IG9lW25dOwogICAgICAgIHJldHVybiBlbih0ID09PSB2b2lkIDAgPyBTKG4pIDogdCk7CiAgICAgIH0sCiAgICAgIG86IGZ1bmN0aW9uKG4pIHsKICAgICAgICBDbihJW25dLnZhbHVlKSwgRG4obik7CiAgICAgIH0sCiAgICAgIHk6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICByZXR1cm4gbiA9IEN0KG4sICJfZW12YWxfdGFrZV92YWx1ZSIpLCBuID0gbi5yZWFkVmFsdWVGcm9tUG9pbnRlcih0KSwgZW4obik7CiAgICAgIH0sCiAgICAgIGY6IGZ1bmN0aW9uKCkgewogICAgICAgIHNuKCk7CiAgICAgIH0sCiAgICAgIHE6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICB4LmNvcHlXaXRoaW4obiwgdCwgdCArIHIpOwogICAgICB9LAogICAgICByOiBmdW5jdGlvbihuKSB7CiAgICAgICAgbiA+Pj49IDA7CiAgICAgICAgdmFyIHQgPSB4Lmxlbmd0aDsKICAgICAgICBpZiAoMjE0NzQ4MzY0OCA8IG4pCiAgICAgICAgICByZXR1cm4gITE7CiAgICAgICAgZm9yICh2YXIgciA9IDE7IDQgPj0gcjsgciAqPSAyKSB7CiAgICAgICAgICB2YXIgaSA9IHQgKiAoMSArIDAuMiAvIHIpOwogICAgICAgICAgaSA9IE1hdGgubWluKGksIG4gKyAxMDA2NjMyOTYpLCBpID0gTWF0aC5tYXgoMTY3NzcyMTYsIG4sIGkpLCAwIDwgaSAlIDY1NTM2ICYmIChpICs9IDY1NTM2IC0gaSAlIDY1NTM2KTsKICAgICAgICAgIG46IHsKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICBHLmdyb3coTWF0aC5taW4oMjE0NzQ4MzY0OCwgaSkgLSBRLmJ5dGVMZW5ndGggKyA2NTUzNSA+Pj4gMTYpLCBldChHLmJ1ZmZlcik7CiAgICAgICAgICAgICAgdmFyIGEgPSAxOwogICAgICAgICAgICAgIGJyZWFrIG47CiAgICAgICAgICAgIH0gY2F0Y2ggewogICAgICAgICAgICB9CiAgICAgICAgICAgIGEgPSB2b2lkIDA7CiAgICAgICAgICB9CiAgICAgICAgICBpZiAoYSkKICAgICAgICAgICAgcmV0dXJuICEwOwogICAgICAgIH0KICAgICAgICByZXR1cm4gITE7CiAgICAgIH0sCiAgICAgIHM6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB2YXIgciA9IDA7CiAgICAgICAgcmV0dXJuIFR0KCkuZm9yRWFjaChmdW5jdGlvbihpLCBhKSB7CiAgICAgICAgICB2YXIgbyA9IHQgKyByOwogICAgICAgICAgZm9yIChhID0gYltuICsgNCAqIGEgPj4gMl0gPSBvLCBvID0gMDsgbyA8IGkubGVuZ3RoOyArK28pCiAgICAgICAgICAgICRbYSsrID4+IDBdID0gaS5jaGFyQ29kZUF0KG8pOwogICAgICAgICAgJFthID4+IDBdID0gMCwgciArPSBpLmxlbmd0aCArIDE7CiAgICAgICAgfSksIDA7CiAgICAgIH0sCiAgICAgIHQ6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB2YXIgciA9IFR0KCk7CiAgICAgICAgYltuID4+IDJdID0gci5sZW5ndGg7CiAgICAgICAgdmFyIGkgPSAwOwogICAgICAgIHJldHVybiByLmZvckVhY2goZnVuY3Rpb24oYSkgewogICAgICAgICAgaSArPSBhLmxlbmd0aCArIDE7CiAgICAgICAgfSksIGJbdCA+PiAyXSA9IGksIDA7CiAgICAgIH0sCiAgICAgIGE6IEcKICAgIH07CiAgICAoZnVuY3Rpb24oKSB7CiAgICAgIGZ1bmN0aW9uIG4obykgewogICAgICAgIG8gPSBvLmV4cG9ydHMsIG8gPSBNdChvKSwgZS5hc20gPSBvLCBZLS0sIGUubW9uaXRvclJ1bkRlcGVuZGVuY2llcyAmJiBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMoWSksIFkgPT0gMCAmJiBvbiAmJiAobyA9IG9uLCBvbiA9IG51bGwsIG8oKSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gdChvKSB7CiAgICAgICAgbihvLmluc3RhbmNlKTsKICAgICAgfQogICAgICBmdW5jdGlvbiByKG8pIHsKICAgICAgICByZXR1cm4gWnQoKS50aGVuKGZ1bmN0aW9uKGMpIHsKICAgICAgICAgIHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShjLCBpKTsKICAgICAgICB9KS50aGVuKG8sIGZ1bmN0aW9uKGMpIHsKICAgICAgICAgIFAoImZhaWxlZCB0byBhc3luY2hyb25vdXNseSBwcmVwYXJlIHdhc206ICIgKyBjKSwgc24oYyk7CiAgICAgICAgfSk7CiAgICAgIH0KICAgICAgdmFyIGkgPSB7IGE6IHNlIH07CiAgICAgIGlmIChZKyssIGUubW9uaXRvclJ1bkRlcGVuZGVuY2llcyAmJiBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMoWSksIGUuaW5zdGFudGlhdGVXYXNtKQogICAgICAgIHRyeSB7CiAgICAgICAgICB2YXIgYSA9IGUuaW5zdGFudGlhdGVXYXNtKGksIG4pOwogICAgICAgICAgcmV0dXJuIGEgPSBNdChhKTsKICAgICAgICB9IGNhdGNoIChvKSB7CiAgICAgICAgICByZXR1cm4gUCgiTW9kdWxlLmluc3RhbnRpYXRlV2FzbSBjYWxsYmFjayBmYWlsZWQgd2l0aCBlcnJvcjogIiArIG8pLCAhMTsKICAgICAgICB9CiAgICAgIHJldHVybiBmdW5jdGlvbigpIHsKICAgICAgICBpZiAoTCB8fCB0eXBlb2YgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcgIT0gImZ1bmN0aW9uIiB8fCBzdCgpIHx8IHhuKCJmaWxlOi8vIikgfHwgdHlwZW9mIGZldGNoICE9ICJmdW5jdGlvbiIpCiAgICAgICAgICByZXR1cm4gcih0KTsKICAgICAgICBmZXRjaChaLCB7IGNyZWRlbnRpYWxzOiAic2FtZS1vcmlnaW4iIH0pLnRoZW4oZnVuY3Rpb24obykgewogICAgICAgICAgcmV0dXJuIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKG8sIGkpLnRoZW4odCwgZnVuY3Rpb24oYykgewogICAgICAgICAgICByZXR1cm4gUCgid2FzbSBzdHJlYW1pbmcgY29tcGlsZSBmYWlsZWQ6ICIgKyBjKSwgUCgiZmFsbGluZyBiYWNrIHRvIEFycmF5QnVmZmVyIGluc3RhbnRpYXRpb24iKSwgcih0KTsKICAgICAgICAgIH0pOwogICAgICAgIH0pOwogICAgICB9KCksIHt9OwogICAgfSkoKTsKICAgIHZhciBPdCA9IGUuX19fd2FzbV9jYWxsX2N0b3JzID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoT3QgPSBlLl9fX3dhc21fY2FsbF9jdG9ycyA9IGUuYXNtLkIpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBUbiA9IGUuX21hbGxvYyA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKFRuID0gZS5fbWFsbG9jID0gZS5hc20uQykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIEIgPSBlLl9mcmVlID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoQiA9IGUuX2ZyZWUgPSBlLmFzbS5EKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgYnQgPSBlLl9fX2dldFR5cGVOYW1lID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoYnQgPSBlLl9fX2dldFR5cGVOYW1lID0gZS5hc20uRSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH07CiAgICBlLl9fX2VtYmluZF9yZWdpc3Rlcl9uYXRpdmVfYW5kX2J1aWx0aW5fdHlwZXMgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9fX2VtYmluZF9yZWdpc3Rlcl9uYXRpdmVfYW5kX2J1aWx0aW5fdHlwZXMgPSBlLmFzbS5GKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpID0gZS5hc20uRykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aSA9IGUuYXNtLkgpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9pID0gZS5hc20uSSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpID0gZS5hc20uSikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWkgPSBlLmFzbS5LKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2ZpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9maWkgPSBlLmFzbS5MKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWYgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpZiA9IGUuYXNtLk0pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWkgPSBlLmFzbS5OKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaSA9IGUuYXNtLk8pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpaSA9IGUuYXNtLlApLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaSA9IGUuYXNtLlEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWkgPSBlLmFzbS5SKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpaWlpID0gZS5hc20uUykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaSA9IGUuYXNtLlQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWlpID0gZS5hc20uVSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlpZGkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaWRpID0gZS5hc20uVikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlkaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlkaSA9IGUuYXNtLlcpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaWkgPSBlLmFzbS5YKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaSA9IGUuYXNtLlkpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaSA9IGUuYXNtLlopLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpID0gZS5hc20uXykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0YXJ0X3Vud2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0YXJ0X3Vud2luZCA9IGUuYXNtLiQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdG9wX3Vud2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0b3BfdW53aW5kID0gZS5hc20uYWEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdGFydF9yZXdpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdGFydF9yZXdpbmQgPSBlLmFzbS5iYSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0b3BfcmV3aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RvcF9yZXdpbmQgPSBlLmFzbS5jYSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH07CiAgICB2YXIgUG47CiAgICBvbiA9IGZ1bmN0aW9uIG4oKSB7CiAgICAgIFBuIHx8ICRuKCksIFBuIHx8IChvbiA9IG4pOwogICAgfTsKICAgIGZ1bmN0aW9uICRuKCkgewogICAgICBmdW5jdGlvbiBuKCkgewogICAgICAgIGlmICghUG4gJiYgKFBuID0gITAsIGUuY2FsbGVkUnVuID0gITAsICFSbikpIHsKICAgICAgICAgIGlmICh5bihhdCksIHluKCR0KSwgbShlKSwgZS5vblJ1bnRpbWVJbml0aWFsaXplZCAmJiBlLm9uUnVudGltZUluaXRpYWxpemVkKCksIGUucG9zdFJ1bikKICAgICAgICAgICAgZm9yICh0eXBlb2YgZS5wb3N0UnVuID09ICJmdW5jdGlvbiIgJiYgKGUucG9zdFJ1biA9IFtlLnBvc3RSdW5dKTsgZS5wb3N0UnVuLmxlbmd0aDsgKSB7CiAgICAgICAgICAgICAgdmFyIHQgPSBlLnBvc3RSdW4uc2hpZnQoKTsKICAgICAgICAgICAgICBvdC51bnNoaWZ0KHQpOwogICAgICAgICAgICB9CiAgICAgICAgICB5bihvdCk7CiAgICAgICAgfQogICAgICB9CiAgICAgIGlmICghKDAgPCBZKSkgewogICAgICAgIGlmIChlLnByZVJ1bikKICAgICAgICAgIGZvciAodHlwZW9mIGUucHJlUnVuID09ICJmdW5jdGlvbiIgJiYgKGUucHJlUnVuID0gW2UucHJlUnVuXSk7IGUucHJlUnVuLmxlbmd0aDsgKQogICAgICAgICAgICBZdCgpOwogICAgICAgIHluKGl0KSwgMCA8IFkgfHwgKGUuc2V0U3RhdHVzID8gKGUuc2V0U3RhdHVzKCJSdW5uaW5nLi4uIiksIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7CiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgICAgICAgICBlLnNldFN0YXR1cygiIik7CiAgICAgICAgICB9LCAxKSwgbigpOwogICAgICAgIH0sIDEpKSA6IG4oKSk7CiAgICAgIH0KICAgIH0KICAgIGlmIChlLnJ1biA9ICRuLCBlLnByZUluaXQpCiAgICAgIGZvciAodHlwZW9mIGUucHJlSW5pdCA9PSAiZnVuY3Rpb24iICYmIChlLnByZUluaXQgPSBbZS5wcmVJbml0XSk7IDAgPCBlLnByZUluaXQubGVuZ3RoOyApCiAgICAgICAgZS5wcmVJbml0LnBvcCgpKCk7CiAgICByZXR1cm4gJG4oKSwgdS5yZWFkeTsKICB9Owp9KCk7CmNsYXNzIHBlIHsKICBjb25zdHJ1Y3RvcigpIHsKICAgIFluKHRoaXMsICJzYW1XYXNtTW9kdWxlIik7CiAgfQogIGdldE92ZXJyaWRkZW5Nb2R1bGVzKHUsIGUpIHsKICAgIHJldHVybiB7CiAgICAgIGxvY2F0ZUZpbGU6IChtKSA9PiBuZXcgVVJMKGUgfHwgbSwgdSkuaHJlZgogICAgfTsKICB9CiAgYXN5bmMgaGFuZGxlTWlzc2luZ09ySW52YWxpZFNhbU1vZHVsZSh1LCBlKSB7CiAgICB0cnkgewogICAgICBjb25zdCBtID0gYXdhaXQgZmV0Y2godSk7CiAgICAgIGlmICghbS5vaykKICAgICAgICB0aHJvdyBuZXcgRigKICAgICAgICAgIGBUaGUgcGF0aCB0byAke2V9IGlzIGluY29ycmVjdCBvciB0aGUgbW9kdWxlIGlzIG1pc3NpbmcuIFBsZWFzZSBjaGVjayBwcm92aWRlZCBwYXRoIHRvIHdhc20gZmlsZXMuIEN1cnJlbnQgcGF0aCBpcyAke3V9YAogICAgICAgICk7CiAgICAgIGNvbnN0IGcgPSBhd2FpdCBtLmFycmF5QnVmZmVyKCk7CiAgICAgIGlmICghV2ViQXNzZW1ibHkudmFsaWRhdGUoZykpCiAgICAgICAgdGhyb3cgbmV3IEYoCiAgICAgICAgICBgVGhlIHByb3ZpZGVkICR7ZX0gaXMgbm90IGEgdmFsaWQgV0FTTSBtb2R1bGUuIFBsZWFzZSBjaGVjayBwcm92aWRlZCBwYXRoIHRvIHdhc20gZmlsZXMuIEN1cnJlbnQgcGF0aCBpcyAke3V9YAogICAgICAgICk7CiAgICB9IGNhdGNoIChtKSB7CiAgICAgIGlmIChtIGluc3RhbmNlb2YgRikKICAgICAgICB0aHJvdyBjb25zb2xlLmVycm9yKAogICAgICAgICAgIllvdSBjYW4gZmluZCBtb3JlIGluZm9ybWF0aW9uIGFib3V0IGhvdyB0byBob3N0IHdhc20gZmlsZXMgaGVyZTogaHR0cHM6Ly9kZXZlbG9wZXJzLmlubm92YXRyaWNzLmNvbS9kaWdpdGFsLW9uYm9hcmRpbmcvdGVjaG5pY2FsL3JlbW90ZS9kb3Qtd2ViLWRvY3VtZW50L2xhdGVzdC9kb2N1bWVudGF0aW9uLyNfaG9zdGluZ19zYW1fd2FzbSIKICAgICAgICApLCBtOwogICAgfQogIH0KICBhc3luYyBnZXRXYXNtRmlsZU5hbWUoKSB7CiAgICByZXR1cm4gYXdhaXQgY2UoKSA/IGt0LnNpbWQgOiBrdC5zYW07CiAgfQogIGFzeW5jIGluaXRTYW1Nb2R1bGUodSwgZSA9ICIvd2FzbSIpIHsKICAgIGlmICh0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHJldHVybjsKICAgIGNvbnN0IG0gPSBhd2FpdCB0aGlzLmdldFdhc21GaWxlTmFtZSgpLCBnID0gYCR7ZX0vJHttfWA7CiAgICB0cnkgewogICAgICB0aGlzLnNhbVdhc21Nb2R1bGUgPSBhd2FpdCBoZSh0aGlzLmdldE92ZXJyaWRkZW5Nb2R1bGVzKHUsIGcpKTsKICAgIH0gY2F0Y2ggewogICAgICB0aHJvdyBhd2FpdCB0aGlzLmhhbmRsZU1pc3NpbmdPckludmFsaWRTYW1Nb2R1bGUoZywgbSksIG5ldyBGKCJDb3VsZCBub3QgaW5pdCBkZXRlY3Rvci4iKTsKICAgIH0KICB9CiAgYXN5bmMgZ2V0U2FtVmVyc2lvbigpIHsKICAgIHZhciBlOwogICAgY29uc3QgdSA9IGF3YWl0ICgoZSA9IHRoaXMuc2FtV2FzbU1vZHVsZSkgPT0gbnVsbCA/IHZvaWQgMCA6IGUuZ2V0SW5mb1N0cmluZygpKTsKICAgIHJldHVybiB1ID09IG51bGwgPyB2b2lkIDAgOiB1LnRyaW0oKTsKICB9CiAgLyoKICAgKiBJbiBUUyA1LjIuMCB3YXMgYWRkZWQgc3BlY2lhbCBrZXl3b3JkICJ1c2luZyIgd2hpY2ggY291bGQgYmUgcGVyZmVjdCBmb3IgdGhpcyBjYXNlLgogICAqIFVuZm9ydHVuYXRlbHksIHZpdGUgcHJlYWN0IHBsdWdpbiBkb2VzIG5vdCBzdXBwb3J0IHRoaXMgdmVyc2lvbiBvZiBUUyB5ZXQuCiAgICogQ2hlY2sgcG9zc2liaWxpdHkgb2YgdXNpbmcgInVzaW5nIiBrZXl3b3JkIHdoZW4gdml0ZSBwcmVhY3QgcGx1Z2luIHVwZGF0ZXMKICAgKi8KICBhbGxvY2F0ZU1lbW9yeSh1KSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IEYoIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIHJldHVybiB0aGlzLnNhbVdhc21Nb2R1bGUuX21hbGxvYyh1KTsKICB9CiAgcmVsZWFzZU1lbW9yeSh1KSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IEYoIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIHRoaXMuc2FtV2FzbU1vZHVsZS5fZnJlZSh1KTsKICB9CiAgd3JpdGVEYXRhVG9NZW1vcnkodSwgZSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBGKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICB0aGlzLnNhbVdhc21Nb2R1bGUuSEVBUFU4LnNldCh1LCBlKTsKICB9Cn0KLyoqCiAqIEBsaWNlbnNlCiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTEMKICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAKICovCmNvbnN0IHh0ID0gU3ltYm9sKCJDb21saW5rLnByb3h5IiksIHllID0gU3ltYm9sKCJDb21saW5rLmVuZHBvaW50IiksIG1lID0gU3ltYm9sKCJDb21saW5rLnJlbGVhc2VQcm94eSIpLCBabiA9IFN5bWJvbCgiQ29tbGluay5maW5hbGl6ZXIiKSwgT24gPSBTeW1ib2woIkNvbWxpbmsudGhyb3duIiksIEZ0ID0gKHMpID0+IHR5cGVvZiBzID09ICJvYmplY3QiICYmIHMgIT09IG51bGwgfHwgdHlwZW9mIHMgPT0gImZ1bmN0aW9uIiwgdmUgPSB7CiAgY2FuSGFuZGxlOiAocykgPT4gRnQocykgJiYgc1t4dF0sCiAgc2VyaWFsaXplKHMpIHsKICAgIGNvbnN0IHsgcG9ydDE6IHUsIHBvcnQyOiBlIH0gPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTsKICAgIHJldHVybiBLbihzLCB1KSwgW2UsIFtlXV07CiAgfSwKICBkZXNlcmlhbGl6ZShzKSB7CiAgICByZXR1cm4gcy5zdGFydCgpLCBfZShzKTsKICB9Cn0sIGdlID0gewogIGNhbkhhbmRsZTogKHMpID0+IEZ0KHMpICYmIE9uIGluIHMsCiAgc2VyaWFsaXplKHsgdmFsdWU6IHMgfSkgewogICAgbGV0IHU7CiAgICByZXR1cm4gcyBpbnN0YW5jZW9mIEVycm9yID8gdSA9IHsKICAgICAgaXNFcnJvcjogITAsCiAgICAgIHZhbHVlOiB7CiAgICAgICAgbWVzc2FnZTogcy5tZXNzYWdlLAogICAgICAgIG5hbWU6IHMubmFtZSwKICAgICAgICBzdGFjazogcy5zdGFjawogICAgICB9CiAgICB9IDogdSA9IHsgaXNFcnJvcjogITEsIHZhbHVlOiBzIH0sIFt1LCBbXV07CiAgfSwKICBkZXNlcmlhbGl6ZShzKSB7CiAgICB0aHJvdyBzLmlzRXJyb3IgPyBPYmplY3QuYXNzaWduKG5ldyBFcnJvcihzLnZhbHVlLm1lc3NhZ2UpLCBzLnZhbHVlKSA6IHMudmFsdWU7CiAgfQp9LCBJdCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKFsKICBbInByb3h5IiwgdmVdLAogIFsidGhyb3ciLCBnZV0KXSk7CmZ1bmN0aW9uIHdlKHMsIHUpIHsKICBmb3IgKGNvbnN0IGUgb2YgcykKICAgIGlmICh1ID09PSBlIHx8IGUgPT09ICIqIiB8fCBlIGluc3RhbmNlb2YgUmVnRXhwICYmIGUudGVzdCh1KSkKICAgICAgcmV0dXJuICEwOwogIHJldHVybiAhMTsKfQpmdW5jdGlvbiBLbihzLCB1ID0gZ2xvYmFsVGhpcywgZSA9IFsiKiJdKSB7CiAgdS5hZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgZnVuY3Rpb24gbShnKSB7CiAgICBpZiAoIWcgfHwgIWcuZGF0YSkKICAgICAgcmV0dXJuOwogICAgaWYgKCF3ZShlLCBnLm9yaWdpbikpIHsKICAgICAgY29uc29sZS53YXJuKGBJbnZhbGlkIG9yaWdpbiAnJHtnLm9yaWdpbn0nIGZvciBjb21saW5rIHByb3h5YCk7CiAgICAgIHJldHVybjsKICAgIH0KICAgIGNvbnN0IHsgaWQ6IEMsIHR5cGU6IEEsIHBhdGg6IE0gfSA9IE9iamVjdC5hc3NpZ24oeyBwYXRoOiBbXSB9LCBnLmRhdGEpLCBXID0gKGcuZGF0YS5hcmd1bWVudExpc3QgfHwgW10pLm1hcChLKTsKICAgIGxldCBFOwogICAgdHJ5IHsKICAgICAgY29uc3QgXyA9IE0uc2xpY2UoMCwgLTEpLnJlZHVjZSgoUCwgTCkgPT4gUFtMXSwgcyksIFIgPSBNLnJlZHVjZSgoUCwgTCkgPT4gUFtMXSwgcyk7CiAgICAgIHN3aXRjaCAoQSkgewogICAgICAgIGNhc2UgIkdFVCI6CiAgICAgICAgICBFID0gUjsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIlNFVCI6CiAgICAgICAgICBfW00uc2xpY2UoLTEpWzBdXSA9IEsoZy5kYXRhLnZhbHVlKSwgRSA9ICEwOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiQVBQTFkiOgogICAgICAgICAgRSA9IFIuYXBwbHkoXywgVyk7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJDT05TVFJVQ1QiOgogICAgICAgICAgewogICAgICAgICAgICBjb25zdCBQID0gbmV3IFIoLi4uVyk7CiAgICAgICAgICAgIEUgPSBNZShQKTsKICAgICAgICAgIH0KICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIkVORFBPSU5UIjoKICAgICAgICAgIHsKICAgICAgICAgICAgY29uc3QgeyBwb3J0MTogUCwgcG9ydDI6IEwgfSA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpOwogICAgICAgICAgICBLbihzLCBMKSwgRSA9IFBlKFAsIFtQXSk7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJSRUxFQVNFIjoKICAgICAgICAgIEUgPSB2b2lkIDA7CiAgICAgICAgICBicmVhazsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgcmV0dXJuOwogICAgICB9CiAgICB9IGNhdGNoIChfKSB7CiAgICAgIEUgPSB7IHZhbHVlOiBfLCBbT25dOiAwIH07CiAgICB9CiAgICBQcm9taXNlLnJlc29sdmUoRSkuY2F0Y2goKF8pID0+ICh7IHZhbHVlOiBfLCBbT25dOiAwIH0pKS50aGVuKChfKSA9PiB7CiAgICAgIGNvbnN0IFtSLCBQXSA9IGtuKF8pOwogICAgICB1LnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgUiksIHsgaWQ6IEMgfSksIFApLCBBID09PSAiUkVMRUFTRSIgJiYgKHUucmVtb3ZlRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIG0pLCBMdCh1KSwgWm4gaW4gcyAmJiB0eXBlb2Ygc1tabl0gPT0gImZ1bmN0aW9uIiAmJiBzW1puXSgpKTsKICAgIH0pLmNhdGNoKChfKSA9PiB7CiAgICAgIGNvbnN0IFtSLCBQXSA9IGtuKHsKICAgICAgICB2YWx1ZTogbmV3IFR5cGVFcnJvcigiVW5zZXJpYWxpemFibGUgcmV0dXJuIHZhbHVlIiksCiAgICAgICAgW09uXTogMAogICAgICB9KTsKICAgICAgdS5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIFIpLCB7IGlkOiBDIH0pLCBQKTsKICAgIH0pOwogIH0pLCB1LnN0YXJ0ICYmIHUuc3RhcnQoKTsKfQpmdW5jdGlvbiBBZShzKSB7CiAgcmV0dXJuIHMuY29uc3RydWN0b3IubmFtZSA9PT0gIk1lc3NhZ2VQb3J0IjsKfQpmdW5jdGlvbiBMdChzKSB7CiAgQWUocykgJiYgcy5jbG9zZSgpOwp9CmZ1bmN0aW9uIF9lKHMsIHUpIHsKICByZXR1cm4gSm4ocywgW10sIHUpOwp9CmZ1bmN0aW9uIFduKHMpIHsKICBpZiAocykKICAgIHRocm93IG5ldyBFcnJvcigiUHJveHkgaGFzIGJlZW4gcmVsZWFzZWQgYW5kIGlzIG5vdCB1c2VhYmxlIik7Cn0KZnVuY3Rpb24ganQocykgewogIHJldHVybiBhbihzLCB7CiAgICB0eXBlOiAiUkVMRUFTRSIKICB9KS50aGVuKCgpID0+IHsKICAgIEx0KHMpOwogIH0pOwp9CmNvbnN0IGJuID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCksIFNuID0gIkZpbmFsaXphdGlvblJlZ2lzdHJ5IiBpbiBnbG9iYWxUaGlzICYmIG5ldyBGaW5hbGl6YXRpb25SZWdpc3RyeSgocykgPT4gewogIGNvbnN0IHUgPSAoYm4uZ2V0KHMpIHx8IDApIC0gMTsKICBibi5zZXQocywgdSksIHUgPT09IDAgJiYganQocyk7Cn0pOwpmdW5jdGlvbiBDZShzLCB1KSB7CiAgY29uc3QgZSA9IChibi5nZXQodSkgfHwgMCkgKyAxOwogIGJuLnNldCh1LCBlKSwgU24gJiYgU24ucmVnaXN0ZXIocywgdSwgcyk7Cn0KZnVuY3Rpb24gRWUocykgewogIFNuICYmIFNuLnVucmVnaXN0ZXIocyk7Cn0KZnVuY3Rpb24gSm4ocywgdSA9IFtdLCBlID0gZnVuY3Rpb24oKSB7Cn0pIHsKICBsZXQgbSA9ICExOwogIGNvbnN0IGcgPSBuZXcgUHJveHkoZSwgewogICAgZ2V0KEMsIEEpIHsKICAgICAgaWYgKFduKG0pLCBBID09PSBtZSkKICAgICAgICByZXR1cm4gKCkgPT4gewogICAgICAgICAgRWUoZyksIGp0KHMpLCBtID0gITA7CiAgICAgICAgfTsKICAgICAgaWYgKEEgPT09ICJ0aGVuIikgewogICAgICAgIGlmICh1Lmxlbmd0aCA9PT0gMCkKICAgICAgICAgIHJldHVybiB7IHRoZW46ICgpID0+IGcgfTsKICAgICAgICBjb25zdCBNID0gYW4ocywgewogICAgICAgICAgdHlwZTogIkdFVCIsCiAgICAgICAgICBwYXRoOiB1Lm1hcCgoVykgPT4gVy50b1N0cmluZygpKQogICAgICAgIH0pLnRoZW4oSyk7CiAgICAgICAgcmV0dXJuIE0udGhlbi5iaW5kKE0pOwogICAgICB9CiAgICAgIHJldHVybiBKbihzLCBbLi4udSwgQV0pOwogICAgfSwKICAgIHNldChDLCBBLCBNKSB7CiAgICAgIFduKG0pOwogICAgICBjb25zdCBbVywgRV0gPSBrbihNKTsKICAgICAgcmV0dXJuIGFuKHMsIHsKICAgICAgICB0eXBlOiAiU0VUIiwKICAgICAgICBwYXRoOiBbLi4udSwgQV0ubWFwKChfKSA9PiBfLnRvU3RyaW5nKCkpLAogICAgICAgIHZhbHVlOiBXCiAgICAgIH0sIEUpLnRoZW4oSyk7CiAgICB9LAogICAgYXBwbHkoQywgQSwgTSkgewogICAgICBXbihtKTsKICAgICAgY29uc3QgVyA9IHVbdS5sZW5ndGggLSAxXTsKICAgICAgaWYgKFcgPT09IHllKQogICAgICAgIHJldHVybiBhbihzLCB7CiAgICAgICAgICB0eXBlOiAiRU5EUE9JTlQiCiAgICAgICAgfSkudGhlbihLKTsKICAgICAgaWYgKFcgPT09ICJiaW5kIikKICAgICAgICByZXR1cm4gSm4ocywgdS5zbGljZSgwLCAtMSkpOwogICAgICBjb25zdCBbRSwgX10gPSBSdChNKTsKICAgICAgcmV0dXJuIGFuKHMsIHsKICAgICAgICB0eXBlOiAiQVBQTFkiLAogICAgICAgIHBhdGg6IHUubWFwKChSKSA9PiBSLnRvU3RyaW5nKCkpLAogICAgICAgIGFyZ3VtZW50TGlzdDogRQogICAgICB9LCBfKS50aGVuKEspOwogICAgfSwKICAgIGNvbnN0cnVjdChDLCBBKSB7CiAgICAgIFduKG0pOwogICAgICBjb25zdCBbTSwgV10gPSBSdChBKTsKICAgICAgcmV0dXJuIGFuKHMsIHsKICAgICAgICB0eXBlOiAiQ09OU1RSVUNUIiwKICAgICAgICBwYXRoOiB1Lm1hcCgoRSkgPT4gRS50b1N0cmluZygpKSwKICAgICAgICBhcmd1bWVudExpc3Q6IE0KICAgICAgfSwgVykudGhlbihLKTsKICAgIH0KICB9KTsKICByZXR1cm4gQ2UoZywgcyksIGc7Cn0KZnVuY3Rpb24gVGUocykgewogIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBzKTsKfQpmdW5jdGlvbiBSdChzKSB7CiAgY29uc3QgdSA9IHMubWFwKGtuKTsKICByZXR1cm4gW3UubWFwKChlKSA9PiBlWzBdKSwgVGUodS5tYXAoKGUpID0+IGVbMV0pKV07Cn0KY29uc3QgTnQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTsKZnVuY3Rpb24gUGUocywgdSkgewogIHJldHVybiBOdC5zZXQocywgdSksIHM7Cn0KZnVuY3Rpb24gTWUocykgewogIHJldHVybiBPYmplY3QuYXNzaWduKHMsIHsgW3h0XTogITAgfSk7Cn0KZnVuY3Rpb24ga24ocykgewogIGZvciAoY29uc3QgW3UsIGVdIG9mIEl0KQogICAgaWYgKGUuY2FuSGFuZGxlKHMpKSB7CiAgICAgIGNvbnN0IFttLCBnXSA9IGUuc2VyaWFsaXplKHMpOwogICAgICByZXR1cm4gWwogICAgICAgIHsKICAgICAgICAgIHR5cGU6ICJIQU5ETEVSIiwKICAgICAgICAgIG5hbWU6IHUsCiAgICAgICAgICB2YWx1ZTogbQogICAgICAgIH0sCiAgICAgICAgZwogICAgICBdOwogICAgfQogIHJldHVybiBbCiAgICB7CiAgICAgIHR5cGU6ICJSQVciLAogICAgICB2YWx1ZTogcwogICAgfSwKICAgIE50LmdldChzKSB8fCBbXQogIF07Cn0KZnVuY3Rpb24gSyhzKSB7CiAgc3dpdGNoIChzLnR5cGUpIHsKICAgIGNhc2UgIkhBTkRMRVIiOgogICAgICByZXR1cm4gSXQuZ2V0KHMubmFtZSkuZGVzZXJpYWxpemUocy52YWx1ZSk7CiAgICBjYXNlICJSQVciOgogICAgICByZXR1cm4gcy52YWx1ZTsKICB9Cn0KZnVuY3Rpb24gYW4ocywgdSwgZSkgewogIHJldHVybiBuZXcgUHJvbWlzZSgobSkgPT4gewogICAgY29uc3QgZyA9IFdlKCk7CiAgICBzLmFkZEV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBmdW5jdGlvbiBDKEEpIHsKICAgICAgIUEuZGF0YSB8fCAhQS5kYXRhLmlkIHx8IEEuZGF0YS5pZCAhPT0gZyB8fCAocy5yZW1vdmVFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgQyksIG0oQS5kYXRhKSk7CiAgICB9KSwgcy5zdGFydCAmJiBzLnN0YXJ0KCksIHMucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbih7IGlkOiBnIH0sIHUpLCBlKTsKICB9KTsKfQpmdW5jdGlvbiBXZSgpIHsKICByZXR1cm4gbmV3IEFycmF5KDQpLmZpbGwoMCkubWFwKCgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKS50b1N0cmluZygxNikpLmpvaW4oIi0iKTsKfQpjbGFzcyBPZSBleHRlbmRzIHBlIHsKICBwYXJzZVJhd0RhdGEodSkgewogICAgY29uc3QgeyBicmlnaHRuZXNzOiBlLCBob3RzcG90czogbSwgc2hhcnBuZXNzOiBnIH0gPSB1LnBhcmFtcywgQyA9IHsKICAgICAgY29uZmlkZW5jZTogdS5zY29yZSAvIDFlMywKICAgICAgdG9wTGVmdDogewogICAgICAgIHg6IHUueDAsCiAgICAgICAgeTogdS55MAogICAgICB9LAogICAgICB0b3BSaWdodDogewogICAgICAgIHg6IHUueDEsCiAgICAgICAgeTogdS55MQogICAgICB9LAogICAgICBib3R0b21SaWdodDogewogICAgICAgIHg6IHUueDIsCiAgICAgICAgeTogdS55MgogICAgICB9LAogICAgICBib3R0b21MZWZ0OiB7CiAgICAgICAgeDogdS54MywKICAgICAgICB5OiB1LnkzCiAgICAgIH0sCiAgICAgIGJyaWdodG5lc3M6IGUgLyAxZTMsCiAgICAgIGhvdHNwb3RzOiBtIC8gMWUzLAogICAgICBzaGFycG5lc3M6IGcgLyAxZTMKICAgIH07CiAgICByZXR1cm4gewogICAgICAuLi5DLAogICAgICBzbWFsbGVzdEVkZ2U6IGRlKEMpCiAgICB9OwogIH0KICBhc3luYyBkZXRlY3QodSwgZSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBGKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICBjb25zdCBtID0gdGhpcy5hbGxvY2F0ZU1lbW9yeSh1Lmxlbmd0aCAqIHUuQllURVNfUEVSX0VMRU1FTlQpLCBnID0gdGhpcy5hbGxvY2F0ZU1lbW9yeSh1Lmxlbmd0aCAqIHUuQllURVNfUEVSX0VMRU1FTlQpOwogICAgdGhpcy53cml0ZURhdGFUb01lbW9yeSh1LCBtKSwgdGhpcy5zYW1XYXNtTW9kdWxlLmNvbnZlcnRUb1NhbUNvbG9ySW1hZ2UoCiAgICAgIGUud2lkdGgsCiAgICAgIGUuaGVpZ2h0LAogICAgICBtLAogICAgICBmZS5SR0JBLAogICAgICBnCiAgICApOwogICAgY29uc3QgQyA9IHRoaXMuc2FtV2FzbU1vZHVsZS5kZXRlY3REb2N1bWVudFdpdGhJbWFnZVBhcmFtZXRlcnMoCiAgICAgIGUud2lkdGgsCiAgICAgIGUuaGVpZ2h0LAogICAgICBnLAogICAgICAwLAogICAgICAvLyBwYXJhbVdpZHRoIHNob3VsZCBiZSAwIChkZWZhdWx0IHZhbHVlKQogICAgICAwLAogICAgICAvLyBwYXJhbUhlaWdodCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICAgMAogICAgICAvLyBkb2N1bWVudERldGVjdGlvbk9wdGlvbnMgLSBzcGVlZCBvcHRpb24gLSBzZXQgYXMgInN0YW5kYXJkIGZ1bGwgbWV0aG9kIgogICAgKTsKICAgIHJldHVybiB0aGlzLnJlbGVhc2VNZW1vcnkobSksIHRoaXMucmVsZWFzZU1lbW9yeShnKSwgdGhpcy5wYXJzZVJhd0RhdGEoQyk7CiAgfQp9CktuKE9lKTsK", Ha = typeof window < "u" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);" + atob(cg)], { type: "text/javascript;charset=utf-8" });
function jx(t) {
  let o;
  try {
    if (o = Ha && (window.URL || window.webkitURL).createObjectURL(Ha), !o)
      throw "";
    const e = new Worker(o, {
      type: "module",
      name: t == null ? void 0 : t.name
    });
    return e.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(o);
    }), e;
  } catch {
    return new Worker(
      "data:application/javascript;base64," + cg,
      {
        type: "module",
        name: t == null ? void 0 : t.name
      }
    );
  }
}
const wi = class wi extends Kx {
  constructor() {
    super(...arguments);
    Q(this, "detector");
    Q(this, "className", "DocumentController");
    Q(this, "fallbackInstruction", De.DOCUMENT_NOT_PRESENT);
    Q(this, "getInstructionCode", (e, i) => {
      var r;
      if (this.isInCandidateSelection)
        return De.CANDIDATE_SELECTION;
      if ((r = this.lastImage) != null && r.isValid && i)
        return De.CANDIDATE_SELECTION;
      if (this.lastImage && i)
        return this.lastImage.instructionCode;
      const [n] = this.getInstructionCodesForValidators(e);
      return n ?? this.fallbackInstruction;
    });
    Q(this, "getInstructionCodesForValidators", (e) => {
      const i = [];
      return Object.entries(e).forEach(([n, r]) => {
        !r && i.push(_c[n]);
      }), i;
    });
    Q(this, "transformSmallestEdgeRelativeToDetectionFrameWidth", (e, i) => {
      const n = vI(e), r = n / i.width, a = { ...e };
      return a.smallestEdge = r, a;
    });
  }
  static async init() {
    const e = new jx(), i = ag(e), n = new wi(), r = await new i();
    this._instance = n, this._instance.detector = r;
  }
  static async getInstance() {
    return !this._instance && await this.init(), this._instance;
  }
  restart() {
    super.restart(), va(ot.INSTRUCTION_CHANGED, this.fallbackInstruction, xI);
  }
  validateDetectedObject(e, i) {
    const { brightnessHighThreshold: n, brightnessLowThreshold: r, confidenceThreshold: a, hotspotsScoreThreshold: s, outOfBoundsThreshold: g, sharpnessThreshold: x, sizeSmallThreshold: C } = this.getThresholds(), l = e.confidence > a, f = e.sharpness > x, p = e.brightness > r, y = e.brightness < n, O = e.hotspots < s, E = Xx(g, e, i), Z = e.smallestEdge > C, G = {};
    return G.isPresent = l, G.isSharp = f, G.isNotDim = p, G.isNotBright = y, G.noHotspots = O, G.isNotOutOfBounds = E, G.isNotSmall = Z, G;
  }
  async processImage(e) {
    var O;
    const i = {};
    i.width = e.width, i.height = e.height;
    const n = i, r = gr(n), a = ix(e, r), s = ox(a), g = {};
    g.width = a.width, g.height = a.height;
    const x = g;
    let C = await this.detector.detect(s, x);
    C = bx(n, C), C = this.transformSmallestEdgeRelativeToDetectionFrameWidth(C, x);
    const l = this.validateDetectedObject(C, n), f = this.isDetectionValid(l), p = this.getInstructionCode(l, f);
    if (l.isPresent && this.collectImagesForDuplicateDetection(s), this.isInCandidateSelection) {
      if (this.bestImage && f && this.isNewImageBetter(this.bestImage.detection, C)) {
        const E = { image: e, detection: Cn(C) };
        this.bestImage = E, this.candidateSelectionImages.push(E);
      }
    } else if ((O = this.lastImage) != null && O.isValid && f) {
      const E = { image: e, detection: Cn(C) }, Z = {};
      Z.image = this.lastImage.image, Z.detection = this.lastImage.detection;
      const G = Z;
      this.isNewImageBetter(G.detection, E.detection) ? this.bestImage = E : this.bestImage = G, this.candidateSelectionImages.push(G, E), this.isInCandidateSelection = !0;
    } else
      f ? this.lastImage = { instructionCode: p, isValid: !0, image: e, detection: Cn(C) } : this.lastImage = { instructionCode: p, isValid: !1, image: e, detection: Cn(C) };
    const y = { detectedDocument: Cn(C), instructionCode: p, isInCandidateSelection: this.isInCandidateSelection, invalidValidators: this.getInstructionCodesForValidators(l) };
    return this.detectionRecord.push(y.detectedDocument), va(ot.INSTRUCTION_CHANGED, p), dI(ot.DETECTED_DOCUMENT_CHANGED, y.detectedDocument, this.getThresholds().confidenceThreshold), y;
  }
};
Q(wi, "_instance");
let Lo = wi;
const Mx = (t, o) => {
  const { handleError: e } = Ei(), [i, n] = je();
  be(() => {
    (async () => {
      const s = await Lo.getInstance();
      try {
        const g = {};
        g.wasmDirectoryPath = o, g.thresholds = t, await s.init(g);
      } catch (g) {
        if (g instanceof Error) {
          e(ne.fromError(g));
          return;
        }
      }
      n(s);
    })();
  }, [e, t, o]);
  const r = {};
  return r.controller = i, r;
};
var mt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ig = {}, Ka = {}, Ux = Jx;
function Jx(t, o) {
  for (var e = new Array(arguments.length - 1), i = 0, n = 2, r = !0; n < arguments.length; )
    e[i++] = arguments[n++];
  return new Promise(function(a, s) {
    e[i] = function(g) {
      if (r)
        if (r = !1, g)
          s(g);
        else {
          for (var x = new Array(arguments.length - 1), C = 0; C < x.length; )
            x[C++] = arguments[C];
          a.apply(null, x);
        }
    };
    try {
      t.apply(o || null, e);
    } catch (g) {
      r && (r = !1, s(g));
    }
  });
}
var xg = {};
(function(t) {
  var o = t;
  o.length = function(a) {
    var s = a.length;
    if (!s)
      return 0;
    for (var g = 0; --s % 4 > 1 && a.charAt(s) === "="; )
      ++g;
    return Math.ceil(a.length * 3) / 4 - g;
  };
  for (var e = new Array(64), i = new Array(123), n = 0; n < 64; )
    i[e[n] = n < 26 ? n + 65 : n < 52 ? n + 71 : n < 62 ? n - 4 : n - 59 | 43] = n++;
  o.encode = function(a, s, g) {
    for (var x = null, C = [], l = 0, f = 0, p; s < g; ) {
      var y = a[s++];
      switch (f) {
        case 0:
          C[l++] = e[y >> 2], p = (y & 3) << 4, f = 1;
          break;
        case 1:
          C[l++] = e[p | y >> 4], p = (y & 15) << 2, f = 2;
          break;
        case 2:
          C[l++] = e[p | y >> 6], C[l++] = e[y & 63], f = 0;
          break;
      }
      l > 8191 && ((x || (x = [])).push(String.fromCharCode.apply(String, C)), l = 0);
    }
    return f && (C[l++] = e[p], C[l++] = 61, f === 1 && (C[l++] = 61)), x ? (l && x.push(String.fromCharCode.apply(String, C.slice(0, l))), x.join("")) : String.fromCharCode.apply(String, C.slice(0, l));
  };
  var r = "invalid encoding";
  o.decode = function(a, s, g) {
    for (var x = g, C = 0, l, f = 0; f < a.length; ) {
      var p = a.charCodeAt(f++);
      if (p === 61 && C > 1)
        break;
      if ((p = i[p]) === void 0)
        throw Error(r);
      switch (C) {
        case 0:
          l = p, C = 1;
          break;
        case 1:
          s[g++] = l << 2 | (p & 48) >> 4, l = p, C = 2;
          break;
        case 2:
          s[g++] = (l & 15) << 4 | (p & 60) >> 2, l = p, C = 3;
          break;
        case 3:
          s[g++] = (l & 3) << 6 | p, C = 0;
          break;
      }
    }
    if (C === 1)
      throw Error(r);
    return g - x;
  }, o.test = function(a) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(a);
  };
})(xg);
var Qx = Pi;
function Pi() {
  this._listeners = {};
}
Pi.prototype.on = function(t, o, e) {
  return (this._listeners[t] || (this._listeners[t] = [])).push({
    fn: o,
    ctx: e || this
  }), this;
};
Pi.prototype.off = function(t, o) {
  if (t === void 0)
    this._listeners = {};
  else if (o === void 0)
    this._listeners[t] = [];
  else
    for (var e = this._listeners[t], i = 0; i < e.length; )
      e[i].fn === o ? e.splice(i, 1) : ++i;
  return this;
};
Pi.prototype.emit = function(t) {
  var o = this._listeners[t];
  if (o) {
    for (var e = [], i = 1; i < arguments.length; )
      e.push(arguments[i++]);
    for (i = 0; i < o.length; )
      o[i].fn.apply(o[i++].ctx, e);
  }
  return this;
};
var zx = Wa(Wa);
function Wa(t) {
  return typeof Float32Array < "u" ? function() {
    var o = new Float32Array([-0]), e = new Uint8Array(o.buffer), i = e[3] === 128;
    function n(g, x, C) {
      o[0] = g, x[C] = e[0], x[C + 1] = e[1], x[C + 2] = e[2], x[C + 3] = e[3];
    }
    function r(g, x, C) {
      o[0] = g, x[C] = e[3], x[C + 1] = e[2], x[C + 2] = e[1], x[C + 3] = e[0];
    }
    t.writeFloatLE = i ? n : r, t.writeFloatBE = i ? r : n;
    function a(g, x) {
      return e[0] = g[x], e[1] = g[x + 1], e[2] = g[x + 2], e[3] = g[x + 3], o[0];
    }
    function s(g, x) {
      return e[3] = g[x], e[2] = g[x + 1], e[1] = g[x + 2], e[0] = g[x + 3], o[0];
    }
    t.readFloatLE = i ? a : s, t.readFloatBE = i ? s : a;
  }() : function() {
    function o(i, n, r, a) {
      var s = n < 0 ? 1 : 0;
      if (s && (n = -n), n === 0)
        i(1 / n > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), r, a);
      else if (isNaN(n))
        i(2143289344, r, a);
      else if (n > 34028234663852886e22)
        i((s << 31 | 2139095040) >>> 0, r, a);
      else if (n < 11754943508222875e-54)
        i((s << 31 | Math.round(n / 1401298464324817e-60)) >>> 0, r, a);
      else {
        var g = Math.floor(Math.log(n) / Math.LN2), x = Math.round(n * Math.pow(2, -g) * 8388608) & 8388607;
        i((s << 31 | g + 127 << 23 | x) >>> 0, r, a);
      }
    }
    t.writeFloatLE = o.bind(null, Oa), t.writeFloatBE = o.bind(null, Ra);
    function e(i, n, r) {
      var a = i(n, r), s = (a >> 31) * 2 + 1, g = a >>> 23 & 255, x = a & 8388607;
      return g === 255 ? x ? NaN : s * (1 / 0) : g === 0 ? s * 1401298464324817e-60 * x : s * Math.pow(2, g - 150) * (x + 8388608);
    }
    t.readFloatLE = e.bind(null, Va), t.readFloatBE = e.bind(null, Ea);
  }(), typeof Float64Array < "u" ? function() {
    var o = new Float64Array([-0]), e = new Uint8Array(o.buffer), i = e[7] === 128;
    function n(g, x, C) {
      o[0] = g, x[C] = e[0], x[C + 1] = e[1], x[C + 2] = e[2], x[C + 3] = e[3], x[C + 4] = e[4], x[C + 5] = e[5], x[C + 6] = e[6], x[C + 7] = e[7];
    }
    function r(g, x, C) {
      o[0] = g, x[C] = e[7], x[C + 1] = e[6], x[C + 2] = e[5], x[C + 3] = e[4], x[C + 4] = e[3], x[C + 5] = e[2], x[C + 6] = e[1], x[C + 7] = e[0];
    }
    t.writeDoubleLE = i ? n : r, t.writeDoubleBE = i ? r : n;
    function a(g, x) {
      return e[0] = g[x], e[1] = g[x + 1], e[2] = g[x + 2], e[3] = g[x + 3], e[4] = g[x + 4], e[5] = g[x + 5], e[6] = g[x + 6], e[7] = g[x + 7], o[0];
    }
    function s(g, x) {
      return e[7] = g[x], e[6] = g[x + 1], e[5] = g[x + 2], e[4] = g[x + 3], e[3] = g[x + 4], e[2] = g[x + 5], e[1] = g[x + 6], e[0] = g[x + 7], o[0];
    }
    t.readDoubleLE = i ? a : s, t.readDoubleBE = i ? s : a;
  }() : function() {
    function o(i, n, r, a, s, g) {
      var x = a < 0 ? 1 : 0;
      if (x && (a = -a), a === 0)
        i(0, s, g + n), i(1 / a > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), s, g + r);
      else if (isNaN(a))
        i(0, s, g + n), i(2146959360, s, g + r);
      else if (a > 17976931348623157e292)
        i(0, s, g + n), i((x << 31 | 2146435072) >>> 0, s, g + r);
      else {
        var C;
        if (a < 22250738585072014e-324)
          C = a / 5e-324, i(C >>> 0, s, g + n), i((x << 31 | C / 4294967296) >>> 0, s, g + r);
        else {
          var l = Math.floor(Math.log(a) / Math.LN2);
          l === 1024 && (l = 1023), C = a * Math.pow(2, -l), i(C * 4503599627370496 >>> 0, s, g + n), i((x << 31 | l + 1023 << 20 | C * 1048576 & 1048575) >>> 0, s, g + r);
        }
      }
    }
    t.writeDoubleLE = o.bind(null, Oa, 0, 4), t.writeDoubleBE = o.bind(null, Ra, 4, 0);
    function e(i, n, r, a, s) {
      var g = i(a, s + n), x = i(a, s + r), C = (x >> 31) * 2 + 1, l = x >>> 20 & 2047, f = 4294967296 * (x & 1048575) + g;
      return l === 2047 ? f ? NaN : C * (1 / 0) : l === 0 ? C * 5e-324 * f : C * Math.pow(2, l - 1075) * (f + 4503599627370496);
    }
    t.readDoubleLE = e.bind(null, Va, 0, 4), t.readDoubleBE = e.bind(null, Ea, 4, 0);
  }(), t;
}
function Oa(t, o, e) {
  o[e] = t & 255, o[e + 1] = t >>> 8 & 255, o[e + 2] = t >>> 16 & 255, o[e + 3] = t >>> 24;
}
function Ra(t, o, e) {
  o[e] = t >>> 24, o[e + 1] = t >>> 16 & 255, o[e + 2] = t >>> 8 & 255, o[e + 3] = t & 255;
}
function Va(t, o) {
  return (t[o] | t[o + 1] << 8 | t[o + 2] << 16 | t[o + 3] << 24) >>> 0;
}
function Ea(t, o) {
  return (t[o] << 24 | t[o + 1] << 16 | t[o + 2] << 8 | t[o + 3]) >>> 0;
}
function Pa(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var $x = qx;
function qx(t) {
  try {
    if (typeof Pa != "function")
      return null;
    var o = Pa(t);
    return o && (o.length || Object.keys(o).length) ? o : null;
  } catch {
    return null;
  }
}
var lg = {};
(function(t) {
  var o = t;
  o.length = function(e) {
    for (var i = 0, n = 0, r = 0; r < e.length; ++r)
      n = e.charCodeAt(r), n < 128 ? i += 1 : n < 2048 ? i += 2 : (n & 64512) === 55296 && (e.charCodeAt(r + 1) & 64512) === 56320 ? (++r, i += 4) : i += 3;
    return i;
  }, o.read = function(e, i, n) {
    var r = n - i;
    if (r < 1)
      return "";
    for (var a = null, s = [], g = 0, x; i < n; )
      x = e[i++], x < 128 ? s[g++] = x : x > 191 && x < 224 ? s[g++] = (x & 31) << 6 | e[i++] & 63 : x > 239 && x < 365 ? (x = ((x & 7) << 18 | (e[i++] & 63) << 12 | (e[i++] & 63) << 6 | e[i++] & 63) - 65536, s[g++] = 55296 + (x >> 10), s[g++] = 56320 + (x & 1023)) : s[g++] = (x & 15) << 12 | (e[i++] & 63) << 6 | e[i++] & 63, g > 8191 && ((a || (a = [])).push(String.fromCharCode.apply(String, s)), g = 0);
    return a ? (g && a.push(String.fromCharCode.apply(String, s.slice(0, g))), a.join("")) : String.fromCharCode.apply(String, s.slice(0, g));
  }, o.write = function(e, i, n) {
    for (var r = n, a, s, g = 0; g < e.length; ++g)
      a = e.charCodeAt(g), a < 128 ? i[n++] = a : a < 2048 ? (i[n++] = a >> 6 | 192, i[n++] = a & 63 | 128) : (a & 64512) === 55296 && ((s = e.charCodeAt(g + 1)) & 64512) === 56320 ? (a = 65536 + ((a & 1023) << 10) + (s & 1023), ++g, i[n++] = a >> 18 | 240, i[n++] = a >> 12 & 63 | 128, i[n++] = a >> 6 & 63 | 128, i[n++] = a & 63 | 128) : (i[n++] = a >> 12 | 224, i[n++] = a >> 6 & 63 | 128, i[n++] = a & 63 | 128);
    return n - r;
  };
})(lg);
var _x = el;
function el(t, o, e) {
  var i = e || 8192, n = i >>> 1, r = null, a = i;
  return function(s) {
    if (s < 1 || s > n)
      return t(s);
    a + s > i && (r = t(i), a = 0);
    var g = o.call(r, a, a += s);
    return a & 7 && (a = (a | 7) + 1), g;
  };
}
var xo, Ya;
function tl() {
  if (Ya)
    return xo;
  Ya = 1, xo = o;
  var t = Kt();
  function o(r, a) {
    this.lo = r >>> 0, this.hi = a >>> 0;
  }
  var e = o.zero = new o(0, 0);
  e.toNumber = function() {
    return 0;
  }, e.zzEncode = e.zzDecode = function() {
    return this;
  }, e.length = function() {
    return 1;
  };
  var i = o.zeroHash = "\0\0\0\0\0\0\0\0";
  o.fromNumber = function(r) {
    if (r === 0)
      return e;
    var a = r < 0;
    a && (r = -r);
    var s = r >>> 0, g = (r - s) / 4294967296 >>> 0;
    return a && (g = ~g >>> 0, s = ~s >>> 0, ++s > 4294967295 && (s = 0, ++g > 4294967295 && (g = 0))), new o(s, g);
  }, o.from = function(r) {
    if (typeof r == "number")
      return o.fromNumber(r);
    if (t.isString(r))
      if (t.Long)
        r = t.Long.fromString(r);
      else
        return o.fromNumber(parseInt(r, 10));
    return r.low || r.high ? new o(r.low >>> 0, r.high >>> 0) : e;
  }, o.prototype.toNumber = function(r) {
    if (!r && this.hi >>> 31) {
      var a = ~this.lo + 1 >>> 0, s = ~this.hi >>> 0;
      return a || (s = s + 1 >>> 0), -(a + s * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  }, o.prototype.toLong = function(r) {
    return t.Long ? new t.Long(this.lo | 0, this.hi | 0, !!r) : { low: this.lo | 0, high: this.hi | 0, unsigned: !!r };
  };
  var n = String.prototype.charCodeAt;
  return o.fromHash = function(r) {
    return r === i ? e : new o(
      (n.call(r, 0) | n.call(r, 1) << 8 | n.call(r, 2) << 16 | n.call(r, 3) << 24) >>> 0,
      (n.call(r, 4) | n.call(r, 5) << 8 | n.call(r, 6) << 16 | n.call(r, 7) << 24) >>> 0
    );
  }, o.prototype.toHash = function() {
    return String.fromCharCode(
      this.lo & 255,
      this.lo >>> 8 & 255,
      this.lo >>> 16 & 255,
      this.lo >>> 24,
      this.hi & 255,
      this.hi >>> 8 & 255,
      this.hi >>> 16 & 255,
      this.hi >>> 24
    );
  }, o.prototype.zzEncode = function() {
    var r = this.hi >> 31;
    return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ r) >>> 0, this.lo = (this.lo << 1 ^ r) >>> 0, this;
  }, o.prototype.zzDecode = function() {
    var r = -(this.lo & 1);
    return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ r) >>> 0, this.hi = (this.hi >>> 1 ^ r) >>> 0, this;
  }, o.prototype.length = function() {
    var r = this.lo, a = (this.lo >>> 28 | this.hi << 4) >>> 0, s = this.hi >>> 24;
    return s === 0 ? a === 0 ? r < 16384 ? r < 128 ? 1 : 2 : r < 2097152 ? 3 : 4 : a < 16384 ? a < 128 ? 5 : 6 : a < 2097152 ? 7 : 8 : s < 128 ? 9 : 10;
  }, xo;
}
var La;
function Kt() {
  return La || (La = 1, function(t) {
    var o = t;
    o.asPromise = Ux, o.base64 = xg, o.EventEmitter = Qx, o.float = zx, o.inquire = $x, o.utf8 = lg, o.pool = _x, o.LongBits = tl(), o.isNode = !!(typeof mt < "u" && mt && mt.process && mt.process.versions && mt.process.versions.node), o.global = o.isNode && mt || typeof window < "u" && window || typeof self < "u" && self || mt, o.emptyArray = Object.freeze ? Object.freeze([]) : (
      /* istanbul ignore next */
      []
    ), o.emptyObject = Object.freeze ? Object.freeze({}) : (
      /* istanbul ignore next */
      {}
    ), o.isInteger = Number.isInteger || /* istanbul ignore next */
    function(n) {
      return typeof n == "number" && isFinite(n) && Math.floor(n) === n;
    }, o.isString = function(n) {
      return typeof n == "string" || n instanceof String;
    }, o.isObject = function(n) {
      return n && typeof n == "object";
    }, o.isset = /**
    * Checks if a property on a message is considered to be present.
    * @param {Object} obj Plain object or message instance
    * @param {string} prop Property name
    * @returns {boolean} `true` if considered to be present, otherwise `false`
    */
    o.isSet = function(n, r) {
      var a = n[r];
      return a != null && n.hasOwnProperty(r) ? typeof a != "object" || (Array.isArray(a) ? a.length : Object.keys(a).length) > 0 : !1;
    }, o.Buffer = function() {
      try {
        var n = o.inquire("buffer").Buffer;
        return n.prototype.utf8Write ? n : (
          /* istanbul ignore next */
          null
        );
      } catch {
        return null;
      }
    }(), o._Buffer_from = null, o._Buffer_allocUnsafe = null, o.newBuffer = function(n) {
      return typeof n == "number" ? o.Buffer ? o._Buffer_allocUnsafe(n) : new o.Array(n) : o.Buffer ? o._Buffer_from(n) : typeof Uint8Array > "u" ? n : new Uint8Array(n);
    }, o.Array = typeof Uint8Array < "u" ? Uint8Array : Array, o.Long = /* istanbul ignore next */
    o.global.dcodeIO && /* istanbul ignore next */
    o.global.dcodeIO.Long || /* istanbul ignore next */
    o.global.Long || o.inquire("long"), o.key2Re = /^true|false|0|1$/, o.key32Re = /^-?(?:0|[1-9][0-9]*)$/, o.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, o.longToHash = function(n) {
      return n ? o.LongBits.from(n).toHash() : o.LongBits.zeroHash;
    }, o.longFromHash = function(n, r) {
      var a = o.LongBits.fromHash(n);
      return o.Long ? o.Long.fromBits(a.lo, a.hi, r) : a.toNumber(!!r);
    };
    function e(n, r, a) {
      for (var s = Object.keys(r), g = 0; g < s.length; ++g)
        (n[s[g]] === void 0 || !a) && (n[s[g]] = r[s[g]]);
      return n;
    }
    o.merge = e, o.lcFirst = function(n) {
      return n.charAt(0).toLowerCase() + n.substring(1);
    };
    function i(n) {
      function r(a, s) {
        if (!(this instanceof r))
          return new r(a, s);
        Object.defineProperty(this, "message", { get: function() {
          return a;
        } }), Error.captureStackTrace ? Error.captureStackTrace(this, r) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), s && e(this, s);
      }
      return r.prototype = Object.create(Error.prototype, {
        constructor: {
          value: r,
          writable: !0,
          enumerable: !1,
          configurable: !0
        },
        name: {
          get: function() {
            return n;
          },
          set: void 0,
          enumerable: !1,
          // configurable: false would accurately preserve the behavior of
          // the original, but I'm guessing that was not intentional.
          // For an actual error subclass, this property would
          // be configurable.
          configurable: !0
        },
        toString: {
          value: function() {
            return this.name + ": " + this.message;
          },
          writable: !0,
          enumerable: !1,
          configurable: !0
        }
      }), r;
    }
    o.newError = i, o.ProtocolError = i("ProtocolError"), o.oneOfGetter = function(n) {
      for (var r = {}, a = 0; a < n.length; ++a)
        r[n[a]] = 1;
      return function() {
        for (var s = Object.keys(this), g = s.length - 1; g > -1; --g)
          if (r[s[g]] === 1 && this[s[g]] !== void 0 && this[s[g]] !== null)
            return s[g];
      };
    }, o.oneOfSetter = function(n) {
      return function(r) {
        for (var a = 0; a < n.length; ++a)
          n[a] !== r && delete this[n[a]];
      };
    }, o.toJSONOptions = {
      longs: String,
      enums: String,
      bytes: String,
      json: !0
    }, o._configure = function() {
      var n = o.Buffer;
      if (!n) {
        o._Buffer_from = o._Buffer_allocUnsafe = null;
        return;
      }
      o._Buffer_from = n.from !== Uint8Array.from && n.from || /* istanbul ignore next */
      function(r, a) {
        return new n(r, a);
      }, o._Buffer_allocUnsafe = n.allocUnsafe || /* istanbul ignore next */
      function(r) {
        return new n(r);
      };
    };
  }(Ka)), Ka;
}
var ug = X, Oe = Kt(), No, Yi = Oe.LongBits, Na = Oe.base64, Ta = Oe.utf8;
function Wn(t, o, e) {
  this.fn = t, this.len = o, this.next = void 0, this.val = e;
}
function cr() {
}
function nl(t) {
  this.head = t.head, this.tail = t.tail, this.len = t.len, this.next = t.states;
}
function X() {
  this.len = 0, this.head = new Wn(cr, 0, 0), this.tail = this.head, this.states = null;
}
var Cg = function() {
  return Oe.Buffer ? function() {
    return (X.create = function() {
      return new No();
    })();
  } : function() {
    return new X();
  };
};
X.create = Cg();
X.alloc = function(t) {
  return new Oe.Array(t);
};
Oe.Array !== Array && (X.alloc = Oe.pool(X.alloc, Oe.Array.prototype.subarray));
X.prototype._push = function(t, o, e) {
  return this.tail = this.tail.next = new Wn(t, o, e), this.len += o, this;
};
function Ir(t, o, e) {
  o[e] = t & 255;
}
function il(t, o, e) {
  for (; t > 127; )
    o[e++] = t & 127 | 128, t >>>= 7;
  o[e] = t;
}
function xr(t, o) {
  this.len = t, this.next = void 0, this.val = o;
}
xr.prototype = Object.create(Wn.prototype);
xr.prototype.fn = il;
X.prototype.uint32 = function(t) {
  return this.len += (this.tail = this.tail.next = new xr(
    (t = t >>> 0) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : 5,
    t
  )).len, this;
};
X.prototype.int32 = function(t) {
  return t < 0 ? this._push(lr, 10, Yi.fromNumber(t)) : this.uint32(t);
};
X.prototype.sint32 = function(t) {
  return this.uint32((t << 1 ^ t >> 31) >>> 0);
};
function lr(t, o, e) {
  for (; t.hi; )
    o[e++] = t.lo & 127 | 128, t.lo = (t.lo >>> 7 | t.hi << 25) >>> 0, t.hi >>>= 7;
  for (; t.lo > 127; )
    o[e++] = t.lo & 127 | 128, t.lo = t.lo >>> 7;
  o[e++] = t.lo;
}
X.prototype.uint64 = function(t) {
  var o = Yi.from(t);
  return this._push(lr, o.length(), o);
};
X.prototype.int64 = X.prototype.uint64;
X.prototype.sint64 = function(t) {
  var o = Yi.from(t).zzEncode();
  return this._push(lr, o.length(), o);
};
X.prototype.bool = function(t) {
  return this._push(Ir, 1, t ? 1 : 0);
};
function To(t, o, e) {
  o[e] = t & 255, o[e + 1] = t >>> 8 & 255, o[e + 2] = t >>> 16 & 255, o[e + 3] = t >>> 24;
}
X.prototype.fixed32 = function(t) {
  return this._push(To, 4, t >>> 0);
};
X.prototype.sfixed32 = X.prototype.fixed32;
X.prototype.fixed64 = function(t) {
  var o = Yi.from(t);
  return this._push(To, 4, o.lo)._push(To, 4, o.hi);
};
X.prototype.sfixed64 = X.prototype.fixed64;
X.prototype.float = function(t) {
  return this._push(Oe.float.writeFloatLE, 4, t);
};
X.prototype.double = function(t) {
  return this._push(Oe.float.writeDoubleLE, 8, t);
};
var ol = Oe.Array.prototype.set ? function(t, o, e) {
  o.set(t, e);
} : function(t, o, e) {
  for (var i = 0; i < t.length; ++i)
    o[e + i] = t[i];
};
X.prototype.bytes = function(t) {
  var o = t.length >>> 0;
  if (!o)
    return this._push(Ir, 1, 0);
  if (Oe.isString(t)) {
    var e = X.alloc(o = Na.length(t));
    Na.decode(t, e, 0), t = e;
  }
  return this.uint32(o)._push(ol, o, t);
};
X.prototype.string = function(t) {
  var o = Ta.length(t);
  return o ? this.uint32(o)._push(Ta.write, o, t) : this._push(Ir, 1, 0);
};
X.prototype.fork = function() {
  return this.states = new nl(this), this.head = this.tail = new Wn(cr, 0, 0), this.len = 0, this;
};
X.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Wn(cr, 0, 0), this.len = 0), this;
};
X.prototype.ldelim = function() {
  var t = this.head, o = this.tail, e = this.len;
  return this.reset().uint32(e), e && (this.tail.next = t.next, this.tail = o, this.len += e), this;
};
X.prototype.finish = function() {
  for (var t = this.head.next, o = this.constructor.alloc(this.len), e = 0; t; )
    t.fn(t.val, o, e), e += t.len, t = t.next;
  return o;
};
X._configure = function(t) {
  No = t, X.create = Cg(), No._configure();
};
var rl = Ue, dg = ug;
(Ue.prototype = Object.create(dg.prototype)).constructor = Ue;
var ut = Kt();
function Ue() {
  dg.call(this);
}
Ue._configure = function() {
  Ue.alloc = ut._Buffer_allocUnsafe, Ue.writeBytesBuffer = ut.Buffer && ut.Buffer.prototype instanceof Uint8Array && ut.Buffer.prototype.set.name === "set" ? function(t, o, e) {
    o.set(t, e);
  } : function(t, o, e) {
    if (t.copy)
      t.copy(o, e, 0, t.length);
    else
      for (var i = 0; i < t.length; )
        o[e++] = t[i++];
  };
};
Ue.prototype.bytes = function(t) {
  ut.isString(t) && (t = ut._Buffer_from(t, "base64"));
  var o = t.length >>> 0;
  return this.uint32(o), o && this._push(Ue.writeBytesBuffer, o, t), this;
};
function al(t, o, e) {
  t.length < 40 ? ut.utf8.write(t, o, e) : o.utf8Write ? o.utf8Write(t, e) : o.write(t, e);
}
Ue.prototype.string = function(t) {
  var o = ut.Buffer.byteLength(t);
  return this.uint32(o), o && this._push(al, o, t), this;
};
Ue._configure();
var Ag = ae, Je = Kt(), Fo, pg = Je.LongBits, sl = Je.utf8;
function Te(t, o) {
  return RangeError("index out of range: " + t.pos + " + " + (o || 1) + " > " + t.len);
}
function ae(t) {
  this.buf = t, this.pos = 0, this.len = t.length;
}
var Fa = typeof Uint8Array < "u" ? function(t) {
  if (t instanceof Uint8Array || Array.isArray(t))
    return new ae(t);
  throw Error("illegal buffer");
} : function(t) {
  if (Array.isArray(t))
    return new ae(t);
  throw Error("illegal buffer");
}, fg = function() {
  return Je.Buffer ? function(t) {
    return (ae.create = function(o) {
      return Je.Buffer.isBuffer(o) ? new Fo(o) : Fa(o);
    })(t);
  } : Fa;
};
ae.create = fg();
ae.prototype._slice = Je.Array.prototype.subarray || /* istanbul ignore next */
Je.Array.prototype.slice;
ae.prototype.uint32 = /* @__PURE__ */ function() {
  var t = 4294967295;
  return function() {
    if (t = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (t = (t | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (t = (t | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (t = (t | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (t = (t | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return t;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, Te(this, 10);
    return t;
  };
}();
ae.prototype.int32 = function() {
  return this.uint32() | 0;
};
ae.prototype.sint32 = function() {
  var t = this.uint32();
  return t >>> 1 ^ -(t & 1) | 0;
};
function lo() {
  var t = new pg(0, 0), o = 0;
  if (this.len - this.pos > 4) {
    for (; o < 4; ++o)
      if (t.lo = (t.lo | (this.buf[this.pos] & 127) << o * 7) >>> 0, this.buf[this.pos++] < 128)
        return t;
    if (t.lo = (t.lo | (this.buf[this.pos] & 127) << 28) >>> 0, t.hi = (t.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
      return t;
    o = 0;
  } else {
    for (; o < 3; ++o) {
      if (this.pos >= this.len)
        throw Te(this);
      if (t.lo = (t.lo | (this.buf[this.pos] & 127) << o * 7) >>> 0, this.buf[this.pos++] < 128)
        return t;
    }
    return t.lo = (t.lo | (this.buf[this.pos++] & 127) << o * 7) >>> 0, t;
  }
  if (this.len - this.pos > 4) {
    for (; o < 5; ++o)
      if (t.hi = (t.hi | (this.buf[this.pos] & 127) << o * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return t;
  } else
    for (; o < 5; ++o) {
      if (this.pos >= this.len)
        throw Te(this);
      if (t.hi = (t.hi | (this.buf[this.pos] & 127) << o * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return t;
    }
  throw Error("invalid varint encoding");
}
ae.prototype.bool = function() {
  return this.uint32() !== 0;
};
function vi(t, o) {
  return (t[o - 4] | t[o - 3] << 8 | t[o - 2] << 16 | t[o - 1] << 24) >>> 0;
}
ae.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw Te(this, 4);
  return vi(this.buf, this.pos += 4);
};
ae.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw Te(this, 4);
  return vi(this.buf, this.pos += 4) | 0;
};
function Da() {
  if (this.pos + 8 > this.len)
    throw Te(this, 8);
  return new pg(vi(this.buf, this.pos += 4), vi(this.buf, this.pos += 4));
}
ae.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw Te(this, 4);
  var t = Je.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, t;
};
ae.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw Te(this, 4);
  var t = Je.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, t;
};
ae.prototype.bytes = function() {
  var t = this.uint32(), o = this.pos, e = this.pos + t;
  if (e > this.len)
    throw Te(this, t);
  return this.pos += t, Array.isArray(this.buf) ? this.buf.slice(o, e) : o === e ? new this.buf.constructor(0) : this._slice.call(this.buf, o, e);
};
ae.prototype.string = function() {
  var t = this.bytes();
  return sl.read(t, 0, t.length);
};
ae.prototype.skip = function(t) {
  if (typeof t == "number") {
    if (this.pos + t > this.len)
      throw Te(this, t);
    this.pos += t;
  } else
    do
      if (this.pos >= this.len)
        throw Te(this);
    while (this.buf[this.pos++] & 128);
  return this;
};
ae.prototype.skipType = function(t) {
  switch (t) {
    case 0:
      this.skip();
      break;
    case 1:
      this.skip(8);
      break;
    case 2:
      this.skip(this.uint32());
      break;
    case 3:
      for (; (t = this.uint32() & 7) !== 4; )
        this.skipType(t);
      break;
    case 5:
      this.skip(4);
      break;
    default:
      throw Error("invalid wire type " + t + " at offset " + this.pos);
  }
  return this;
};
ae._configure = function(t) {
  Fo = t, ae.create = fg(), Fo._configure();
  var o = Je.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  Je.merge(ae.prototype, {
    int64: function() {
      return lo.call(this)[o](!1);
    },
    uint64: function() {
      return lo.call(this)[o](!0);
    },
    sint64: function() {
      return lo.call(this).zzDecode()[o](!1);
    },
    fixed64: function() {
      return Da.call(this)[o](!0);
    },
    sfixed64: function() {
      return Da.call(this)[o](!1);
    }
  });
};
var gl = Ht, hg = Ag;
(Ht.prototype = Object.create(hg.prototype)).constructor = Ht;
var Xa = Kt();
function Ht(t) {
  hg.call(this, t);
}
Ht._configure = function() {
  Xa.Buffer && (Ht.prototype._slice = Xa.Buffer.prototype.slice);
};
Ht.prototype.string = function() {
  var t = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + t, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + t, this.len));
};
Ht._configure();
var mg = {}, cl = Zn, ur = Kt();
(Zn.prototype = Object.create(ur.EventEmitter.prototype)).constructor = Zn;
function Zn(t, o, e) {
  if (typeof t != "function")
    throw TypeError("rpcImpl must be a function");
  ur.EventEmitter.call(this), this.rpcImpl = t, this.requestDelimited = !!o, this.responseDelimited = !!e;
}
Zn.prototype.rpcCall = function t(o, e, i, n, r) {
  if (!n)
    throw TypeError("request must be specified");
  var a = this;
  if (!r)
    return ur.asPromise(t, a, o, e, i, n);
  if (!a.rpcImpl) {
    setTimeout(function() {
      r(Error("already ended"));
    }, 0);
    return;
  }
  try {
    return a.rpcImpl(
      o,
      e[a.requestDelimited ? "encodeDelimited" : "encode"](n).finish(),
      function(s, g) {
        if (s)
          return a.emit("error", s, o), r(s);
        if (g === null) {
          a.end(
            /* endedByRPC */
            !0
          );
          return;
        }
        if (!(g instanceof i))
          try {
            g = i[a.responseDelimited ? "decodeDelimited" : "decode"](g);
          } catch (x) {
            return a.emit("error", x, o), r(x);
          }
        return a.emit("data", g, o), r(null, g);
      }
    );
  } catch (s) {
    a.emit("error", s, o), setTimeout(function() {
      r(s);
    }, 0);
    return;
  }
};
Zn.prototype.end = function(t) {
  return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(t) {
  var o = t;
  o.Service = cl;
})(mg);
var Il = {};
(function(t) {
  var o = t;
  o.build = "minimal", o.Writer = ug, o.BufferWriter = rl, o.Reader = Ag, o.BufferReader = gl, o.util = Kt(), o.rpc = mg, o.roots = Il, o.configure = e;
  function e() {
    o.util._configure(), o.Writer._configure(o.BufferWriter), o.Reader._configure(o.BufferReader);
  }
  e();
})(Ig);
var ie = Ig;
const B = ie.Reader, le = ie.Writer, h = ie.util, d = ie.roots.default || (ie.roots.default = {}), nn = d.dot = (() => {
  const t = {};
  return t.Content = function() {
    function o(e) {
      if (e)
        for (let i = Object.keys(e), n = 0; n < i.length; ++n)
          e[i[n]] != null && (this[i[n]] = e[i[n]]);
    }
    return o.prototype.token = h.newBuffer([]), o.prototype.iv = h.newBuffer([]), o.prototype.schemaVersion = 0, o.prototype.bytes = h.newBuffer([]), o.create = function(e) {
      return new o(e);
    }, o.encode = function(e, i) {
      return i || (i = le.create()), e.token != null && Object.hasOwnProperty.call(e, "token") && i.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(e.token), e.iv != null && Object.hasOwnProperty.call(e, "iv") && i.uint32(
        /* id 2, wireType 2 =*/
        18
      ).bytes(e.iv), e.schemaVersion != null && Object.hasOwnProperty.call(e, "schemaVersion") && i.uint32(
        /* id 3, wireType 0 =*/
        24
      ).int32(e.schemaVersion), e.bytes != null && Object.hasOwnProperty.call(e, "bytes") && i.uint32(
        /* id 4, wireType 2 =*/
        34
      ).bytes(e.bytes), i;
    }, o.encodeDelimited = function(e, i) {
      return this.encode(e, i).ldelim();
    }, o.decode = function(e, i) {
      e instanceof B || (e = B.create(e));
      let n = i === void 0 ? e.len : e.pos + i, r = new d.dot.Content();
      for (; e.pos < n; ) {
        let a = e.uint32();
        switch (a >>> 3) {
          case 1: {
            r.token = e.bytes();
            break;
          }
          case 2: {
            r.iv = e.bytes();
            break;
          }
          case 3: {
            r.schemaVersion = e.int32();
            break;
          }
          case 4: {
            r.bytes = e.bytes();
            break;
          }
          default:
            e.skipType(a & 7);
            break;
        }
      }
      return r;
    }, o.decodeDelimited = function(e) {
      return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
    }, o.verify = function(e) {
      return typeof e != "object" || e === null ? "object expected" : e.token != null && e.hasOwnProperty("token") && !(e.token && typeof e.token.length == "number" || h.isString(e.token)) ? "token: buffer expected" : e.iv != null && e.hasOwnProperty("iv") && !(e.iv && typeof e.iv.length == "number" || h.isString(e.iv)) ? "iv: buffer expected" : e.schemaVersion != null && e.hasOwnProperty("schemaVersion") && !h.isInteger(e.schemaVersion) ? "schemaVersion: integer expected" : e.bytes != null && e.hasOwnProperty("bytes") && !(e.bytes && typeof e.bytes.length == "number" || h.isString(e.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(e) {
      if (e instanceof d.dot.Content)
        return e;
      let i = new d.dot.Content();
      return e.token != null && (typeof e.token == "string" ? h.base64.decode(e.token, i.token = h.newBuffer(h.base64.length(e.token)), 0) : e.token.length >= 0 && (i.token = e.token)), e.iv != null && (typeof e.iv == "string" ? h.base64.decode(e.iv, i.iv = h.newBuffer(h.base64.length(e.iv)), 0) : e.iv.length >= 0 && (i.iv = e.iv)), e.schemaVersion != null && (i.schemaVersion = e.schemaVersion | 0), e.bytes != null && (typeof e.bytes == "string" ? h.base64.decode(e.bytes, i.bytes = h.newBuffer(h.base64.length(e.bytes)), 0) : e.bytes.length >= 0 && (i.bytes = e.bytes)), i;
    }, o.toObject = function(e, i) {
      i || (i = {});
      let n = {};
      return i.defaults && (i.bytes === String ? n.token = "" : (n.token = [], i.bytes !== Array && (n.token = h.newBuffer(n.token))), i.bytes === String ? n.iv = "" : (n.iv = [], i.bytes !== Array && (n.iv = h.newBuffer(n.iv))), n.schemaVersion = 0, i.bytes === String ? n.bytes = "" : (n.bytes = [], i.bytes !== Array && (n.bytes = h.newBuffer(n.bytes)))), e.token != null && e.hasOwnProperty("token") && (n.token = i.bytes === String ? h.base64.encode(e.token, 0, e.token.length) : i.bytes === Array ? Array.prototype.slice.call(e.token) : e.token), e.iv != null && e.hasOwnProperty("iv") && (n.iv = i.bytes === String ? h.base64.encode(e.iv, 0, e.iv.length) : i.bytes === Array ? Array.prototype.slice.call(e.iv) : e.iv), e.schemaVersion != null && e.hasOwnProperty("schemaVersion") && (n.schemaVersion = e.schemaVersion), e.bytes != null && e.hasOwnProperty("bytes") && (n.bytes = i.bytes === String ? h.base64.encode(e.bytes, 0, e.bytes.length) : i.bytes === Array ? Array.prototype.slice.call(e.bytes) : e.bytes), n;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, ie.util.toJSONOptions);
    }, o.getTypeUrl = function(e) {
      return e === void 0 && (e = "type.googleapis.com"), e + "/dot.Content";
    }, o;
  }(), t.v3 = function() {
    const o = {};
    return o.MagnifEyeLivenessContent = function() {
      function e(i) {
        if (this.images = [], i)
          for (let n = Object.keys(i), r = 0; r < n.length; ++r)
            i[n[r]] != null && (this[n[r]] = i[n[r]]);
      }
      return e.prototype.images = h.emptyArray, e.prototype.metadata = null, e.create = function(i) {
        return new e(i);
      }, e.encode = function(i, n) {
        if (n || (n = le.create()), i.images != null && i.images.length)
          for (let r = 0; r < i.images.length; ++r)
            d.dot.Image.encode(i.images[r], n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return i.metadata != null && Object.hasOwnProperty.call(i, "metadata") && d.dot.v3.Metadata.encode(i.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, e.encodeDelimited = function(i, n) {
        return this.encode(i, n).ldelim();
      }, e.decode = function(i, n) {
        i instanceof B || (i = B.create(i));
        let r = n === void 0 ? i.len : i.pos + n, a = new d.dot.v3.MagnifEyeLivenessContent();
        for (; i.pos < r; ) {
          let s = i.uint32();
          switch (s >>> 3) {
            case 1: {
              a.images && a.images.length || (a.images = []), a.images.push(d.dot.Image.decode(i, i.uint32()));
              break;
            }
            case 2: {
              a.metadata = d.dot.v3.Metadata.decode(i, i.uint32());
              break;
            }
            default:
              i.skipType(s & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(i) {
        return i instanceof B || (i = new B(i)), this.decode(i, i.uint32());
      }, e.verify = function(i) {
        if (typeof i != "object" || i === null)
          return "object expected";
        if (i.images != null && i.hasOwnProperty("images")) {
          if (!Array.isArray(i.images))
            return "images: array expected";
          for (let n = 0; n < i.images.length; ++n) {
            let r = d.dot.Image.verify(i.images[n]);
            if (r)
              return "images." + r;
          }
        }
        if (i.metadata != null && i.hasOwnProperty("metadata")) {
          let n = d.dot.v3.Metadata.verify(i.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, e.fromObject = function(i) {
        if (i instanceof d.dot.v3.MagnifEyeLivenessContent)
          return i;
        let n = new d.dot.v3.MagnifEyeLivenessContent();
        if (i.images) {
          if (!Array.isArray(i.images))
            throw TypeError(".dot.v3.MagnifEyeLivenessContent.images: array expected");
          n.images = [];
          for (let r = 0; r < i.images.length; ++r) {
            if (typeof i.images[r] != "object")
              throw TypeError(".dot.v3.MagnifEyeLivenessContent.images: object expected");
            n.images[r] = d.dot.Image.fromObject(i.images[r]);
          }
        }
        if (i.metadata != null) {
          if (typeof i.metadata != "object")
            throw TypeError(".dot.v3.MagnifEyeLivenessContent.metadata: object expected");
          n.metadata = d.dot.v3.Metadata.fromObject(i.metadata);
        }
        return n;
      }, e.toObject = function(i, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.images = []), n.defaults && (r.metadata = null), i.images && i.images.length) {
          r.images = [];
          for (let a = 0; a < i.images.length; ++a)
            r.images[a] = d.dot.Image.toObject(i.images[a], n);
        }
        return i.metadata != null && i.hasOwnProperty("metadata") && (r.metadata = d.dot.v3.Metadata.toObject(i.metadata, n)), r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, e.getTypeUrl = function(i) {
        return i === void 0 && (i = "type.googleapis.com"), i + "/dot.v3.MagnifEyeLivenessContent";
      }, e;
    }(), o.Metadata = function() {
      function e(n) {
        if (n)
          for (let r = Object.keys(n), a = 0; a < r.length; ++a)
            n[r[a]] != null && (this[r[a]] = n[r[a]]);
      }
      e.prototype.platform = 0, e.prototype.sessionToken = null, e.prototype.web = null, e.prototype.android = null, e.prototype.ios = null;
      let i;
      return Object.defineProperty(e.prototype, "_sessionToken", {
        get: h.oneOfGetter(i = ["sessionToken"]),
        set: h.oneOfSetter(i)
      }), Object.defineProperty(e.prototype, "metadata", {
        get: h.oneOfGetter(i = ["web", "android", "ios"]),
        set: h.oneOfSetter(i)
      }), e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, r) {
        return r || (r = le.create()), n.platform != null && Object.hasOwnProperty.call(n, "platform") && r.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(n.platform), n.web != null && Object.hasOwnProperty.call(n, "web") && d.dot.v3.WebMetadata.encode(n.web, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.android != null && Object.hasOwnProperty.call(n, "android") && d.dot.v3.AndroidMetadata.encode(n.android, r.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.ios != null && Object.hasOwnProperty.call(n, "ios") && d.dot.v3.IosMetadata.encode(n.ios, r.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), n.sessionToken != null && Object.hasOwnProperty.call(n, "sessionToken") && r.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(n.sessionToken), r;
      }, e.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, e.decode = function(n, r) {
        n instanceof B || (n = B.create(n));
        let a = r === void 0 ? n.len : n.pos + r, s = new d.dot.v3.Metadata();
        for (; n.pos < a; ) {
          let g = n.uint32();
          switch (g >>> 3) {
            case 1: {
              s.platform = n.int32();
              break;
            }
            case 5: {
              s.sessionToken = n.string();
              break;
            }
            case 2: {
              s.web = d.dot.v3.WebMetadata.decode(n, n.uint32());
              break;
            }
            case 3: {
              s.android = d.dot.v3.AndroidMetadata.decode(n, n.uint32());
              break;
            }
            case 4: {
              s.ios = d.dot.v3.IosMetadata.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(g & 7);
              break;
          }
        }
        return s;
      }, e.decodeDelimited = function(n) {
        return n instanceof B || (n = new B(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        let r = {};
        if (n.platform != null && n.hasOwnProperty("platform"))
          switch (n.platform) {
            default:
              return "platform: enum value expected";
            case 0:
            case 1:
            case 2:
              break;
          }
        if (n.sessionToken != null && n.hasOwnProperty("sessionToken") && (r._sessionToken = 1, !h.isString(n.sessionToken)))
          return "sessionToken: string expected";
        if (n.web != null && n.hasOwnProperty("web")) {
          r.metadata = 1;
          {
            let a = d.dot.v3.WebMetadata.verify(n.web);
            if (a)
              return "web." + a;
          }
        }
        if (n.android != null && n.hasOwnProperty("android")) {
          if (r.metadata === 1)
            return "metadata: multiple values";
          r.metadata = 1;
          {
            let a = d.dot.v3.AndroidMetadata.verify(n.android);
            if (a)
              return "android." + a;
          }
        }
        if (n.ios != null && n.hasOwnProperty("ios")) {
          if (r.metadata === 1)
            return "metadata: multiple values";
          r.metadata = 1;
          {
            let a = d.dot.v3.IosMetadata.verify(n.ios);
            if (a)
              return "ios." + a;
          }
        }
        return null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.Metadata)
          return n;
        let r = new d.dot.v3.Metadata();
        switch (n.platform) {
          default:
            if (typeof n.platform == "number") {
              r.platform = n.platform;
              break;
            }
            break;
          case "WEB":
          case 0:
            r.platform = 0;
            break;
          case "ANDROID":
          case 1:
            r.platform = 1;
            break;
          case "IOS":
          case 2:
            r.platform = 2;
            break;
        }
        if (n.sessionToken != null && (r.sessionToken = String(n.sessionToken)), n.web != null) {
          if (typeof n.web != "object")
            throw TypeError(".dot.v3.Metadata.web: object expected");
          r.web = d.dot.v3.WebMetadata.fromObject(n.web);
        }
        if (n.android != null) {
          if (typeof n.android != "object")
            throw TypeError(".dot.v3.Metadata.android: object expected");
          r.android = d.dot.v3.AndroidMetadata.fromObject(n.android);
        }
        if (n.ios != null) {
          if (typeof n.ios != "object")
            throw TypeError(".dot.v3.Metadata.ios: object expected");
          r.ios = d.dot.v3.IosMetadata.fromObject(n.ios);
        }
        return r;
      }, e.toObject = function(n, r) {
        r || (r = {});
        let a = {};
        return r.defaults && (a.platform = r.enums === String ? "WEB" : 0), n.platform != null && n.hasOwnProperty("platform") && (a.platform = r.enums === String ? d.dot.Platform[n.platform] === void 0 ? n.platform : d.dot.Platform[n.platform] : n.platform), n.web != null && n.hasOwnProperty("web") && (a.web = d.dot.v3.WebMetadata.toObject(n.web, r), r.oneofs && (a.metadata = "web")), n.android != null && n.hasOwnProperty("android") && (a.android = d.dot.v3.AndroidMetadata.toObject(n.android, r), r.oneofs && (a.metadata = "android")), n.ios != null && n.hasOwnProperty("ios") && (a.ios = d.dot.v3.IosMetadata.toObject(n.ios, r), r.oneofs && (a.metadata = "ios")), n.sessionToken != null && n.hasOwnProperty("sessionToken") && (a.sessionToken = n.sessionToken, r.oneofs && (a._sessionToken = "sessionToken")), a;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.Metadata";
      }, e;
    }(), o.AndroidMetadata = function() {
      function e(n) {
        if (this.supportedAbis = [], this.digests = [], this.dynamicCameraFrameProperties = {}, n)
          for (let r = Object.keys(n), a = 0; a < r.length; ++a)
            n[r[a]] != null && (this[r[a]] = n[r[a]]);
      }
      e.prototype.supportedAbis = h.emptyArray, e.prototype.device = null, e.prototype.digests = h.emptyArray, e.prototype.dynamicCameraFrameProperties = h.emptyObject;
      let i;
      return Object.defineProperty(e.prototype, "_device", {
        get: h.oneOfGetter(i = ["device"]),
        set: h.oneOfSetter(i)
      }), e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, r) {
        if (r || (r = le.create()), n.supportedAbis != null && n.supportedAbis.length)
          for (let a = 0; a < n.supportedAbis.length; ++a)
            r.uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(n.supportedAbis[a]);
        if (n.device != null && Object.hasOwnProperty.call(n, "device") && r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(n.device), n.digests != null && n.digests.length)
          for (let a = 0; a < n.digests.length; ++a)
            r.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(n.digests[a]);
        if (n.dynamicCameraFrameProperties != null && Object.hasOwnProperty.call(n, "dynamicCameraFrameProperties"))
          for (let a = Object.keys(n.dynamicCameraFrameProperties), s = 0; s < a.length; ++s)
            r.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(a[s]), d.dot.Int32List.encode(n.dynamicCameraFrameProperties[a[s]], r.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        return r;
      }, e.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, e.decode = function(n, r) {
        n instanceof B || (n = B.create(n));
        let a = r === void 0 ? n.len : n.pos + r, s = new d.dot.v3.AndroidMetadata(), g, x;
        for (; n.pos < a; ) {
          let C = n.uint32();
          switch (C >>> 3) {
            case 1: {
              s.supportedAbis && s.supportedAbis.length || (s.supportedAbis = []), s.supportedAbis.push(n.string());
              break;
            }
            case 2: {
              s.device = n.string();
              break;
            }
            case 3: {
              s.digests && s.digests.length || (s.digests = []), s.digests.push(n.bytes());
              break;
            }
            case 4: {
              s.dynamicCameraFrameProperties === h.emptyObject && (s.dynamicCameraFrameProperties = {});
              let l = n.uint32() + n.pos;
              for (g = "", x = null; n.pos < l; ) {
                let f = n.uint32();
                switch (f >>> 3) {
                  case 1:
                    g = n.string();
                    break;
                  case 2:
                    x = d.dot.Int32List.decode(n, n.uint32());
                    break;
                  default:
                    n.skipType(f & 7);
                    break;
                }
              }
              s.dynamicCameraFrameProperties[g] = x;
              break;
            }
            default:
              n.skipType(C & 7);
              break;
          }
        }
        return s;
      }, e.decodeDelimited = function(n) {
        return n instanceof B || (n = new B(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.supportedAbis != null && n.hasOwnProperty("supportedAbis")) {
          if (!Array.isArray(n.supportedAbis))
            return "supportedAbis: array expected";
          for (let r = 0; r < n.supportedAbis.length; ++r)
            if (!h.isString(n.supportedAbis[r]))
              return "supportedAbis: string[] expected";
        }
        if (n.device != null && n.hasOwnProperty("device") && !h.isString(n.device))
          return "device: string expected";
        if (n.digests != null && n.hasOwnProperty("digests")) {
          if (!Array.isArray(n.digests))
            return "digests: array expected";
          for (let r = 0; r < n.digests.length; ++r)
            if (!(n.digests[r] && typeof n.digests[r].length == "number" || h.isString(n.digests[r])))
              return "digests: buffer[] expected";
        }
        if (n.dynamicCameraFrameProperties != null && n.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!h.isObject(n.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let r = Object.keys(n.dynamicCameraFrameProperties);
          for (let a = 0; a < r.length; ++a) {
            let s = d.dot.Int32List.verify(n.dynamicCameraFrameProperties[r[a]]);
            if (s)
              return "dynamicCameraFrameProperties." + s;
          }
        }
        return null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.AndroidMetadata)
          return n;
        let r = new d.dot.v3.AndroidMetadata();
        if (n.supportedAbis) {
          if (!Array.isArray(n.supportedAbis))
            throw TypeError(".dot.v3.AndroidMetadata.supportedAbis: array expected");
          r.supportedAbis = [];
          for (let a = 0; a < n.supportedAbis.length; ++a)
            r.supportedAbis[a] = String(n.supportedAbis[a]);
        }
        if (n.device != null && (r.device = String(n.device)), n.digests) {
          if (!Array.isArray(n.digests))
            throw TypeError(".dot.v3.AndroidMetadata.digests: array expected");
          r.digests = [];
          for (let a = 0; a < n.digests.length; ++a)
            typeof n.digests[a] == "string" ? h.base64.decode(n.digests[a], r.digests[a] = h.newBuffer(h.base64.length(n.digests[a])), 0) : n.digests[a].length >= 0 && (r.digests[a] = n.digests[a]);
        }
        if (n.dynamicCameraFrameProperties) {
          if (typeof n.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v3.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          r.dynamicCameraFrameProperties = {};
          for (let a = Object.keys(n.dynamicCameraFrameProperties), s = 0; s < a.length; ++s) {
            if (typeof n.dynamicCameraFrameProperties[a[s]] != "object")
              throw TypeError(".dot.v3.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            r.dynamicCameraFrameProperties[a[s]] = d.dot.Int32List.fromObject(n.dynamicCameraFrameProperties[a[s]]);
          }
        }
        return r;
      }, e.toObject = function(n, r) {
        r || (r = {});
        let a = {};
        if ((r.arrays || r.defaults) && (a.supportedAbis = [], a.digests = []), (r.objects || r.defaults) && (a.dynamicCameraFrameProperties = {}), n.supportedAbis && n.supportedAbis.length) {
          a.supportedAbis = [];
          for (let g = 0; g < n.supportedAbis.length; ++g)
            a.supportedAbis[g] = n.supportedAbis[g];
        }
        if (n.device != null && n.hasOwnProperty("device") && (a.device = n.device, r.oneofs && (a._device = "device")), n.digests && n.digests.length) {
          a.digests = [];
          for (let g = 0; g < n.digests.length; ++g)
            a.digests[g] = r.bytes === String ? h.base64.encode(n.digests[g], 0, n.digests[g].length) : r.bytes === Array ? Array.prototype.slice.call(n.digests[g]) : n.digests[g];
        }
        let s;
        if (n.dynamicCameraFrameProperties && (s = Object.keys(n.dynamicCameraFrameProperties)).length) {
          a.dynamicCameraFrameProperties = {};
          for (let g = 0; g < s.length; ++g)
            a.dynamicCameraFrameProperties[s[g]] = d.dot.Int32List.toObject(n.dynamicCameraFrameProperties[s[g]], r);
        }
        return a;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.AndroidMetadata";
      }, e;
    }(), o.IosMetadata = function() {
      function e(i) {
        if (this.digests = [], this.isoValues = [], i)
          for (let n = Object.keys(i), r = 0; r < n.length; ++r)
            i[n[r]] != null && (this[n[r]] = i[n[r]]);
      }
      return e.prototype.device = h.newBuffer([]), e.prototype.architecture = !1, e.prototype.digests = h.emptyArray, e.prototype.isoValues = h.emptyArray, e.create = function(i) {
        return new e(i);
      }, e.encode = function(i, n) {
        if (n || (n = le.create()), i.device != null && Object.hasOwnProperty.call(i, "device") && n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).bytes(i.device), i.architecture != null && Object.hasOwnProperty.call(i, "architecture") && n.uint32(
          /* id 2, wireType 0 =*/
          16
        ).bool(i.architecture), i.digests != null && i.digests.length)
          for (let r = 0; r < i.digests.length; ++r)
            n.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(i.digests[r]);
        if (i.isoValues != null && i.isoValues.length) {
          n.uint32(
            /* id 4, wireType 2 =*/
            34
          ).fork();
          for (let r = 0; r < i.isoValues.length; ++r)
            n.int32(i.isoValues[r]);
          n.ldelim();
        }
        return n;
      }, e.encodeDelimited = function(i, n) {
        return this.encode(i, n).ldelim();
      }, e.decode = function(i, n) {
        i instanceof B || (i = B.create(i));
        let r = n === void 0 ? i.len : i.pos + n, a = new d.dot.v3.IosMetadata();
        for (; i.pos < r; ) {
          let s = i.uint32();
          switch (s >>> 3) {
            case 1: {
              a.device = i.bytes();
              break;
            }
            case 2: {
              a.architecture = i.bool();
              break;
            }
            case 3: {
              a.digests && a.digests.length || (a.digests = []), a.digests.push(i.bytes());
              break;
            }
            case 4: {
              if (a.isoValues && a.isoValues.length || (a.isoValues = []), (s & 7) === 2) {
                let g = i.uint32() + i.pos;
                for (; i.pos < g; )
                  a.isoValues.push(i.int32());
              } else
                a.isoValues.push(i.int32());
              break;
            }
            default:
              i.skipType(s & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(i) {
        return i instanceof B || (i = new B(i)), this.decode(i, i.uint32());
      }, e.verify = function(i) {
        if (typeof i != "object" || i === null)
          return "object expected";
        if (i.device != null && i.hasOwnProperty("device") && !(i.device && typeof i.device.length == "number" || h.isString(i.device)))
          return "device: buffer expected";
        if (i.architecture != null && i.hasOwnProperty("architecture") && typeof i.architecture != "boolean")
          return "architecture: boolean expected";
        if (i.digests != null && i.hasOwnProperty("digests")) {
          if (!Array.isArray(i.digests))
            return "digests: array expected";
          for (let n = 0; n < i.digests.length; ++n)
            if (!(i.digests[n] && typeof i.digests[n].length == "number" || h.isString(i.digests[n])))
              return "digests: buffer[] expected";
        }
        if (i.isoValues != null && i.hasOwnProperty("isoValues")) {
          if (!Array.isArray(i.isoValues))
            return "isoValues: array expected";
          for (let n = 0; n < i.isoValues.length; ++n)
            if (!h.isInteger(i.isoValues[n]))
              return "isoValues: integer[] expected";
        }
        return null;
      }, e.fromObject = function(i) {
        if (i instanceof d.dot.v3.IosMetadata)
          return i;
        let n = new d.dot.v3.IosMetadata();
        if (i.device != null && (typeof i.device == "string" ? h.base64.decode(i.device, n.device = h.newBuffer(h.base64.length(i.device)), 0) : i.device.length >= 0 && (n.device = i.device)), i.architecture != null && (n.architecture = !!i.architecture), i.digests) {
          if (!Array.isArray(i.digests))
            throw TypeError(".dot.v3.IosMetadata.digests: array expected");
          n.digests = [];
          for (let r = 0; r < i.digests.length; ++r)
            typeof i.digests[r] == "string" ? h.base64.decode(i.digests[r], n.digests[r] = h.newBuffer(h.base64.length(i.digests[r])), 0) : i.digests[r].length >= 0 && (n.digests[r] = i.digests[r]);
        }
        if (i.isoValues) {
          if (!Array.isArray(i.isoValues))
            throw TypeError(".dot.v3.IosMetadata.isoValues: array expected");
          n.isoValues = [];
          for (let r = 0; r < i.isoValues.length; ++r)
            n.isoValues[r] = i.isoValues[r] | 0;
        }
        return n;
      }, e.toObject = function(i, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.digests = [], r.isoValues = []), n.defaults && (n.bytes === String ? r.device = "" : (r.device = [], n.bytes !== Array && (r.device = h.newBuffer(r.device))), r.architecture = !1), i.device != null && i.hasOwnProperty("device") && (r.device = n.bytes === String ? h.base64.encode(i.device, 0, i.device.length) : n.bytes === Array ? Array.prototype.slice.call(i.device) : i.device), i.architecture != null && i.hasOwnProperty("architecture") && (r.architecture = i.architecture), i.digests && i.digests.length) {
          r.digests = [];
          for (let a = 0; a < i.digests.length; ++a)
            r.digests[a] = n.bytes === String ? h.base64.encode(i.digests[a], 0, i.digests[a].length) : n.bytes === Array ? Array.prototype.slice.call(i.digests[a]) : i.digests[a];
        }
        if (i.isoValues && i.isoValues.length) {
          r.isoValues = [];
          for (let a = 0; a < i.isoValues.length; ++a)
            r.isoValues[a] = i.isoValues[a];
        }
        return r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, e.getTypeUrl = function(i) {
        return i === void 0 && (i = "type.googleapis.com"), i + "/dot.v3.IosMetadata";
      }, e;
    }(), o.WebMetadata = function() {
      function e(i) {
        if (this.availableCameraProperties = [], this.hashedDetectedImages = [], this.detectionRecord = [], i)
          for (let n = Object.keys(i), r = 0; r < n.length; ++r)
            i[n[r]] != null && (this[n[r]] = i[n[r]]);
      }
      return e.prototype.currentCameraProperties = null, e.prototype.availableCameraProperties = h.emptyArray, e.prototype.hashedDetectedImages = h.emptyArray, e.prototype.detectionRecord = h.emptyArray, e.create = function(i) {
        return new e(i);
      }, e.encode = function(i, n) {
        if (n || (n = le.create()), i.currentCameraProperties != null && Object.hasOwnProperty.call(i, "currentCameraProperties") && d.dot.v3.MediaTrackSettings.encode(i.currentCameraProperties, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), i.availableCameraProperties != null && i.availableCameraProperties.length)
          for (let r = 0; r < i.availableCameraProperties.length; ++r)
            d.dot.v3.CameraProperties.encode(i.availableCameraProperties[r], n.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim();
        if (i.hashedDetectedImages != null && i.hashedDetectedImages.length)
          for (let r = 0; r < i.hashedDetectedImages.length; ++r)
            n.uint32(
              /* id 3, wireType 2 =*/
              26
            ).string(i.hashedDetectedImages[r]);
        if (i.detectionRecord != null && i.detectionRecord.length)
          for (let r = 0; r < i.detectionRecord.length; ++r)
            d.dot.v3.DetectedObject.encode(i.detectionRecord[r], n.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        return n;
      }, e.encodeDelimited = function(i, n) {
        return this.encode(i, n).ldelim();
      }, e.decode = function(i, n) {
        i instanceof B || (i = B.create(i));
        let r = n === void 0 ? i.len : i.pos + n, a = new d.dot.v3.WebMetadata();
        for (; i.pos < r; ) {
          let s = i.uint32();
          switch (s >>> 3) {
            case 1: {
              a.currentCameraProperties = d.dot.v3.MediaTrackSettings.decode(i, i.uint32());
              break;
            }
            case 2: {
              a.availableCameraProperties && a.availableCameraProperties.length || (a.availableCameraProperties = []), a.availableCameraProperties.push(d.dot.v3.CameraProperties.decode(i, i.uint32()));
              break;
            }
            case 3: {
              a.hashedDetectedImages && a.hashedDetectedImages.length || (a.hashedDetectedImages = []), a.hashedDetectedImages.push(i.string());
              break;
            }
            case 4: {
              a.detectionRecord && a.detectionRecord.length || (a.detectionRecord = []), a.detectionRecord.push(d.dot.v3.DetectedObject.decode(i, i.uint32()));
              break;
            }
            default:
              i.skipType(s & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(i) {
        return i instanceof B || (i = new B(i)), this.decode(i, i.uint32());
      }, e.verify = function(i) {
        if (typeof i != "object" || i === null)
          return "object expected";
        if (i.currentCameraProperties != null && i.hasOwnProperty("currentCameraProperties")) {
          let n = d.dot.v3.MediaTrackSettings.verify(i.currentCameraProperties);
          if (n)
            return "currentCameraProperties." + n;
        }
        if (i.availableCameraProperties != null && i.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(i.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let n = 0; n < i.availableCameraProperties.length; ++n) {
            let r = d.dot.v3.CameraProperties.verify(i.availableCameraProperties[n]);
            if (r)
              return "availableCameraProperties." + r;
          }
        }
        if (i.hashedDetectedImages != null && i.hasOwnProperty("hashedDetectedImages")) {
          if (!Array.isArray(i.hashedDetectedImages))
            return "hashedDetectedImages: array expected";
          for (let n = 0; n < i.hashedDetectedImages.length; ++n)
            if (!h.isString(i.hashedDetectedImages[n]))
              return "hashedDetectedImages: string[] expected";
        }
        if (i.detectionRecord != null && i.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(i.detectionRecord))
            return "detectionRecord: array expected";
          for (let n = 0; n < i.detectionRecord.length; ++n) {
            let r = d.dot.v3.DetectedObject.verify(i.detectionRecord[n]);
            if (r)
              return "detectionRecord." + r;
          }
        }
        return null;
      }, e.fromObject = function(i) {
        if (i instanceof d.dot.v3.WebMetadata)
          return i;
        let n = new d.dot.v3.WebMetadata();
        if (i.currentCameraProperties != null) {
          if (typeof i.currentCameraProperties != "object")
            throw TypeError(".dot.v3.WebMetadata.currentCameraProperties: object expected");
          n.currentCameraProperties = d.dot.v3.MediaTrackSettings.fromObject(i.currentCameraProperties);
        }
        if (i.availableCameraProperties) {
          if (!Array.isArray(i.availableCameraProperties))
            throw TypeError(".dot.v3.WebMetadata.availableCameraProperties: array expected");
          n.availableCameraProperties = [];
          for (let r = 0; r < i.availableCameraProperties.length; ++r) {
            if (typeof i.availableCameraProperties[r] != "object")
              throw TypeError(".dot.v3.WebMetadata.availableCameraProperties: object expected");
            n.availableCameraProperties[r] = d.dot.v3.CameraProperties.fromObject(i.availableCameraProperties[r]);
          }
        }
        if (i.hashedDetectedImages) {
          if (!Array.isArray(i.hashedDetectedImages))
            throw TypeError(".dot.v3.WebMetadata.hashedDetectedImages: array expected");
          n.hashedDetectedImages = [];
          for (let r = 0; r < i.hashedDetectedImages.length; ++r)
            n.hashedDetectedImages[r] = String(i.hashedDetectedImages[r]);
        }
        if (i.detectionRecord) {
          if (!Array.isArray(i.detectionRecord))
            throw TypeError(".dot.v3.WebMetadata.detectionRecord: array expected");
          n.detectionRecord = [];
          for (let r = 0; r < i.detectionRecord.length; ++r) {
            if (typeof i.detectionRecord[r] != "object")
              throw TypeError(".dot.v3.WebMetadata.detectionRecord: object expected");
            n.detectionRecord[r] = d.dot.v3.DetectedObject.fromObject(i.detectionRecord[r]);
          }
        }
        return n;
      }, e.toObject = function(i, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.availableCameraProperties = [], r.hashedDetectedImages = [], r.detectionRecord = []), n.defaults && (r.currentCameraProperties = null), i.currentCameraProperties != null && i.hasOwnProperty("currentCameraProperties") && (r.currentCameraProperties = d.dot.v3.MediaTrackSettings.toObject(i.currentCameraProperties, n)), i.availableCameraProperties && i.availableCameraProperties.length) {
          r.availableCameraProperties = [];
          for (let a = 0; a < i.availableCameraProperties.length; ++a)
            r.availableCameraProperties[a] = d.dot.v3.CameraProperties.toObject(i.availableCameraProperties[a], n);
        }
        if (i.hashedDetectedImages && i.hashedDetectedImages.length) {
          r.hashedDetectedImages = [];
          for (let a = 0; a < i.hashedDetectedImages.length; ++a)
            r.hashedDetectedImages[a] = i.hashedDetectedImages[a];
        }
        if (i.detectionRecord && i.detectionRecord.length) {
          r.detectionRecord = [];
          for (let a = 0; a < i.detectionRecord.length; ++a)
            r.detectionRecord[a] = d.dot.v3.DetectedObject.toObject(i.detectionRecord[a], n);
        }
        return r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, e.getTypeUrl = function(i) {
        return i === void 0 && (i = "type.googleapis.com"), i + "/dot.v3.WebMetadata";
      }, e;
    }(), o.MediaTrackSettings = function() {
      function e(n) {
        if (n)
          for (let r = Object.keys(n), a = 0; a < r.length; ++a)
            n[r[a]] != null && (this[r[a]] = n[r[a]]);
      }
      e.prototype.aspectRatio = null, e.prototype.autoGainControl = null, e.prototype.channelCount = null, e.prototype.deviceId = null, e.prototype.displaySurface = null, e.prototype.echoCancellation = null, e.prototype.facingMode = null, e.prototype.frameRate = null, e.prototype.groupId = null, e.prototype.height = null, e.prototype.noiseSuppression = null, e.prototype.sampleRate = null, e.prototype.sampleSize = null, e.prototype.width = null, e.prototype.deviceName = null;
      let i;
      return Object.defineProperty(e.prototype, "_aspectRatio", {
        get: h.oneOfGetter(i = ["aspectRatio"]),
        set: h.oneOfSetter(i)
      }), Object.defineProperty(e.prototype, "_autoGainControl", {
        get: h.oneOfGetter(i = ["autoGainControl"]),
        set: h.oneOfSetter(i)
      }), Object.defineProperty(e.prototype, "_channelCount", {
        get: h.oneOfGetter(i = ["channelCount"]),
        set: h.oneOfSetter(i)
      }), Object.defineProperty(e.prototype, "_deviceId", {
        get: h.oneOfGetter(i = ["deviceId"]),
        set: h.oneOfSetter(i)
      }), Object.defineProperty(e.prototype, "_displaySurface", {
        get: h.oneOfGetter(i = ["displaySurface"]),
        set: h.oneOfSetter(i)
      }), Object.defineProperty(e.prototype, "_echoCancellation", {
        get: h.oneOfGetter(i = ["echoCancellation"]),
        set: h.oneOfSetter(i)
      }), Object.defineProperty(e.prototype, "_facingMode", {
        get: h.oneOfGetter(i = ["facingMode"]),
        set: h.oneOfSetter(i)
      }), Object.defineProperty(e.prototype, "_frameRate", {
        get: h.oneOfGetter(i = ["frameRate"]),
        set: h.oneOfSetter(i)
      }), Object.defineProperty(e.prototype, "_groupId", {
        get: h.oneOfGetter(i = ["groupId"]),
        set: h.oneOfSetter(i)
      }), Object.defineProperty(e.prototype, "_height", {
        get: h.oneOfGetter(i = ["height"]),
        set: h.oneOfSetter(i)
      }), Object.defineProperty(e.prototype, "_noiseSuppression", {
        get: h.oneOfGetter(i = ["noiseSuppression"]),
        set: h.oneOfSetter(i)
      }), Object.defineProperty(e.prototype, "_sampleRate", {
        get: h.oneOfGetter(i = ["sampleRate"]),
        set: h.oneOfSetter(i)
      }), Object.defineProperty(e.prototype, "_sampleSize", {
        get: h.oneOfGetter(i = ["sampleSize"]),
        set: h.oneOfSetter(i)
      }), Object.defineProperty(e.prototype, "_width", {
        get: h.oneOfGetter(i = ["width"]),
        set: h.oneOfSetter(i)
      }), Object.defineProperty(e.prototype, "_deviceName", {
        get: h.oneOfGetter(i = ["deviceName"]),
        set: h.oneOfSetter(i)
      }), e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, r) {
        return r || (r = le.create()), n.aspectRatio != null && Object.hasOwnProperty.call(n, "aspectRatio") && r.uint32(
          /* id 1, wireType 1 =*/
          9
        ).double(n.aspectRatio), n.autoGainControl != null && Object.hasOwnProperty.call(n, "autoGainControl") && r.uint32(
          /* id 2, wireType 0 =*/
          16
        ).bool(n.autoGainControl), n.channelCount != null && Object.hasOwnProperty.call(n, "channelCount") && r.uint32(
          /* id 3, wireType 0 =*/
          24
        ).int32(n.channelCount), n.deviceId != null && Object.hasOwnProperty.call(n, "deviceId") && r.uint32(
          /* id 4, wireType 2 =*/
          34
        ).string(n.deviceId), n.displaySurface != null && Object.hasOwnProperty.call(n, "displaySurface") && r.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(n.displaySurface), n.echoCancellation != null && Object.hasOwnProperty.call(n, "echoCancellation") && r.uint32(
          /* id 6, wireType 0 =*/
          48
        ).bool(n.echoCancellation), n.facingMode != null && Object.hasOwnProperty.call(n, "facingMode") && r.uint32(
          /* id 7, wireType 2 =*/
          58
        ).string(n.facingMode), n.frameRate != null && Object.hasOwnProperty.call(n, "frameRate") && r.uint32(
          /* id 8, wireType 1 =*/
          65
        ).double(n.frameRate), n.groupId != null && Object.hasOwnProperty.call(n, "groupId") && r.uint32(
          /* id 9, wireType 2 =*/
          74
        ).string(n.groupId), n.height != null && Object.hasOwnProperty.call(n, "height") && r.uint32(
          /* id 10, wireType 0 =*/
          80
        ).int32(n.height), n.noiseSuppression != null && Object.hasOwnProperty.call(n, "noiseSuppression") && r.uint32(
          /* id 11, wireType 0 =*/
          88
        ).bool(n.noiseSuppression), n.sampleRate != null && Object.hasOwnProperty.call(n, "sampleRate") && r.uint32(
          /* id 12, wireType 0 =*/
          96
        ).int32(n.sampleRate), n.sampleSize != null && Object.hasOwnProperty.call(n, "sampleSize") && r.uint32(
          /* id 13, wireType 0 =*/
          104
        ).int32(n.sampleSize), n.width != null && Object.hasOwnProperty.call(n, "width") && r.uint32(
          /* id 14, wireType 0 =*/
          112
        ).int32(n.width), n.deviceName != null && Object.hasOwnProperty.call(n, "deviceName") && r.uint32(
          /* id 15, wireType 2 =*/
          122
        ).string(n.deviceName), r;
      }, e.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, e.decode = function(n, r) {
        n instanceof B || (n = B.create(n));
        let a = r === void 0 ? n.len : n.pos + r, s = new d.dot.v3.MediaTrackSettings();
        for (; n.pos < a; ) {
          let g = n.uint32();
          switch (g >>> 3) {
            case 1: {
              s.aspectRatio = n.double();
              break;
            }
            case 2: {
              s.autoGainControl = n.bool();
              break;
            }
            case 3: {
              s.channelCount = n.int32();
              break;
            }
            case 4: {
              s.deviceId = n.string();
              break;
            }
            case 5: {
              s.displaySurface = n.string();
              break;
            }
            case 6: {
              s.echoCancellation = n.bool();
              break;
            }
            case 7: {
              s.facingMode = n.string();
              break;
            }
            case 8: {
              s.frameRate = n.double();
              break;
            }
            case 9: {
              s.groupId = n.string();
              break;
            }
            case 10: {
              s.height = n.int32();
              break;
            }
            case 11: {
              s.noiseSuppression = n.bool();
              break;
            }
            case 12: {
              s.sampleRate = n.int32();
              break;
            }
            case 13: {
              s.sampleSize = n.int32();
              break;
            }
            case 14: {
              s.width = n.int32();
              break;
            }
            case 15: {
              s.deviceName = n.string();
              break;
            }
            default:
              n.skipType(g & 7);
              break;
          }
        }
        return s;
      }, e.decodeDelimited = function(n) {
        return n instanceof B || (n = new B(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        return typeof n != "object" || n === null ? "object expected" : n.aspectRatio != null && n.hasOwnProperty("aspectRatio") && typeof n.aspectRatio != "number" ? "aspectRatio: number expected" : n.autoGainControl != null && n.hasOwnProperty("autoGainControl") && typeof n.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : n.channelCount != null && n.hasOwnProperty("channelCount") && !h.isInteger(n.channelCount) ? "channelCount: integer expected" : n.deviceId != null && n.hasOwnProperty("deviceId") && !h.isString(n.deviceId) ? "deviceId: string expected" : n.displaySurface != null && n.hasOwnProperty("displaySurface") && !h.isString(n.displaySurface) ? "displaySurface: string expected" : n.echoCancellation != null && n.hasOwnProperty("echoCancellation") && typeof n.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : n.facingMode != null && n.hasOwnProperty("facingMode") && !h.isString(n.facingMode) ? "facingMode: string expected" : n.frameRate != null && n.hasOwnProperty("frameRate") && typeof n.frameRate != "number" ? "frameRate: number expected" : n.groupId != null && n.hasOwnProperty("groupId") && !h.isString(n.groupId) ? "groupId: string expected" : n.height != null && n.hasOwnProperty("height") && !h.isInteger(n.height) ? "height: integer expected" : n.noiseSuppression != null && n.hasOwnProperty("noiseSuppression") && typeof n.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : n.sampleRate != null && n.hasOwnProperty("sampleRate") && !h.isInteger(n.sampleRate) ? "sampleRate: integer expected" : n.sampleSize != null && n.hasOwnProperty("sampleSize") && !h.isInteger(n.sampleSize) ? "sampleSize: integer expected" : n.width != null && n.hasOwnProperty("width") && !h.isInteger(n.width) ? "width: integer expected" : n.deviceName != null && n.hasOwnProperty("deviceName") && !h.isString(n.deviceName) ? "deviceName: string expected" : null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.MediaTrackSettings)
          return n;
        let r = new d.dot.v3.MediaTrackSettings();
        return n.aspectRatio != null && (r.aspectRatio = Number(n.aspectRatio)), n.autoGainControl != null && (r.autoGainControl = !!n.autoGainControl), n.channelCount != null && (r.channelCount = n.channelCount | 0), n.deviceId != null && (r.deviceId = String(n.deviceId)), n.displaySurface != null && (r.displaySurface = String(n.displaySurface)), n.echoCancellation != null && (r.echoCancellation = !!n.echoCancellation), n.facingMode != null && (r.facingMode = String(n.facingMode)), n.frameRate != null && (r.frameRate = Number(n.frameRate)), n.groupId != null && (r.groupId = String(n.groupId)), n.height != null && (r.height = n.height | 0), n.noiseSuppression != null && (r.noiseSuppression = !!n.noiseSuppression), n.sampleRate != null && (r.sampleRate = n.sampleRate | 0), n.sampleSize != null && (r.sampleSize = n.sampleSize | 0), n.width != null && (r.width = n.width | 0), n.deviceName != null && (r.deviceName = String(n.deviceName)), r;
      }, e.toObject = function(n, r) {
        r || (r = {});
        let a = {};
        return n.aspectRatio != null && n.hasOwnProperty("aspectRatio") && (a.aspectRatio = r.json && !isFinite(n.aspectRatio) ? String(n.aspectRatio) : n.aspectRatio, r.oneofs && (a._aspectRatio = "aspectRatio")), n.autoGainControl != null && n.hasOwnProperty("autoGainControl") && (a.autoGainControl = n.autoGainControl, r.oneofs && (a._autoGainControl = "autoGainControl")), n.channelCount != null && n.hasOwnProperty("channelCount") && (a.channelCount = n.channelCount, r.oneofs && (a._channelCount = "channelCount")), n.deviceId != null && n.hasOwnProperty("deviceId") && (a.deviceId = n.deviceId, r.oneofs && (a._deviceId = "deviceId")), n.displaySurface != null && n.hasOwnProperty("displaySurface") && (a.displaySurface = n.displaySurface, r.oneofs && (a._displaySurface = "displaySurface")), n.echoCancellation != null && n.hasOwnProperty("echoCancellation") && (a.echoCancellation = n.echoCancellation, r.oneofs && (a._echoCancellation = "echoCancellation")), n.facingMode != null && n.hasOwnProperty("facingMode") && (a.facingMode = n.facingMode, r.oneofs && (a._facingMode = "facingMode")), n.frameRate != null && n.hasOwnProperty("frameRate") && (a.frameRate = r.json && !isFinite(n.frameRate) ? String(n.frameRate) : n.frameRate, r.oneofs && (a._frameRate = "frameRate")), n.groupId != null && n.hasOwnProperty("groupId") && (a.groupId = n.groupId, r.oneofs && (a._groupId = "groupId")), n.height != null && n.hasOwnProperty("height") && (a.height = n.height, r.oneofs && (a._height = "height")), n.noiseSuppression != null && n.hasOwnProperty("noiseSuppression") && (a.noiseSuppression = n.noiseSuppression, r.oneofs && (a._noiseSuppression = "noiseSuppression")), n.sampleRate != null && n.hasOwnProperty("sampleRate") && (a.sampleRate = n.sampleRate, r.oneofs && (a._sampleRate = "sampleRate")), n.sampleSize != null && n.hasOwnProperty("sampleSize") && (a.sampleSize = n.sampleSize, r.oneofs && (a._sampleSize = "sampleSize")), n.width != null && n.hasOwnProperty("width") && (a.width = n.width, r.oneofs && (a._width = "width")), n.deviceName != null && n.hasOwnProperty("deviceName") && (a.deviceName = n.deviceName, r.oneofs && (a._deviceName = "deviceName")), a;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.MediaTrackSettings";
      }, e;
    }(), o.ImageBitmap = function() {
      function e(i) {
        if (i)
          for (let n = Object.keys(i), r = 0; r < n.length; ++r)
            i[n[r]] != null && (this[n[r]] = i[n[r]]);
      }
      return e.prototype.width = 0, e.prototype.height = 0, e.create = function(i) {
        return new e(i);
      }, e.encode = function(i, n) {
        return n || (n = le.create()), i.width != null && Object.hasOwnProperty.call(i, "width") && n.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(i.width), i.height != null && Object.hasOwnProperty.call(i, "height") && n.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(i.height), n;
      }, e.encodeDelimited = function(i, n) {
        return this.encode(i, n).ldelim();
      }, e.decode = function(i, n) {
        i instanceof B || (i = B.create(i));
        let r = n === void 0 ? i.len : i.pos + n, a = new d.dot.v3.ImageBitmap();
        for (; i.pos < r; ) {
          let s = i.uint32();
          switch (s >>> 3) {
            case 1: {
              a.width = i.int32();
              break;
            }
            case 2: {
              a.height = i.int32();
              break;
            }
            default:
              i.skipType(s & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(i) {
        return i instanceof B || (i = new B(i)), this.decode(i, i.uint32());
      }, e.verify = function(i) {
        return typeof i != "object" || i === null ? "object expected" : i.width != null && i.hasOwnProperty("width") && !h.isInteger(i.width) ? "width: integer expected" : i.height != null && i.hasOwnProperty("height") && !h.isInteger(i.height) ? "height: integer expected" : null;
      }, e.fromObject = function(i) {
        if (i instanceof d.dot.v3.ImageBitmap)
          return i;
        let n = new d.dot.v3.ImageBitmap();
        return i.width != null && (n.width = i.width | 0), i.height != null && (n.height = i.height | 0), n;
      }, e.toObject = function(i, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.width = 0, r.height = 0), i.width != null && i.hasOwnProperty("width") && (r.width = i.width), i.height != null && i.hasOwnProperty("height") && (r.height = i.height), r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, e.getTypeUrl = function(i) {
        return i === void 0 && (i = "type.googleapis.com"), i + "/dot.v3.ImageBitmap";
      }, e;
    }(), o.CameraProperties = function() {
      function e(n) {
        if (n)
          for (let r = Object.keys(n), a = 0; a < r.length; ++a)
            n[r[a]] != null && (this[r[a]] = n[r[a]]);
      }
      e.prototype.cameraInitFrameResolution = null, e.prototype.cameraProperties = null;
      let i;
      return Object.defineProperty(e.prototype, "_cameraInitFrameResolution", {
        get: h.oneOfGetter(i = ["cameraInitFrameResolution"]),
        set: h.oneOfSetter(i)
      }), e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, r) {
        return r || (r = le.create()), n.cameraInitFrameResolution != null && Object.hasOwnProperty.call(n, "cameraInitFrameResolution") && d.dot.v3.ImageBitmap.encode(n.cameraInitFrameResolution, r.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.cameraProperties != null && Object.hasOwnProperty.call(n, "cameraProperties") && d.dot.v3.MediaTrackSettings.encode(n.cameraProperties, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), r;
      }, e.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, e.decode = function(n, r) {
        n instanceof B || (n = B.create(n));
        let a = r === void 0 ? n.len : n.pos + r, s = new d.dot.v3.CameraProperties();
        for (; n.pos < a; ) {
          let g = n.uint32();
          switch (g >>> 3) {
            case 1: {
              s.cameraInitFrameResolution = d.dot.v3.ImageBitmap.decode(n, n.uint32());
              break;
            }
            case 2: {
              s.cameraProperties = d.dot.v3.MediaTrackSettings.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(g & 7);
              break;
          }
        }
        return s;
      }, e.decodeDelimited = function(n) {
        return n instanceof B || (n = new B(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.cameraInitFrameResolution != null && n.hasOwnProperty("cameraInitFrameResolution")) {
          let r = d.dot.v3.ImageBitmap.verify(n.cameraInitFrameResolution);
          if (r)
            return "cameraInitFrameResolution." + r;
        }
        if (n.cameraProperties != null && n.hasOwnProperty("cameraProperties")) {
          let r = d.dot.v3.MediaTrackSettings.verify(n.cameraProperties);
          if (r)
            return "cameraProperties." + r;
        }
        return null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.CameraProperties)
          return n;
        let r = new d.dot.v3.CameraProperties();
        if (n.cameraInitFrameResolution != null) {
          if (typeof n.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v3.CameraProperties.cameraInitFrameResolution: object expected");
          r.cameraInitFrameResolution = d.dot.v3.ImageBitmap.fromObject(n.cameraInitFrameResolution);
        }
        if (n.cameraProperties != null) {
          if (typeof n.cameraProperties != "object")
            throw TypeError(".dot.v3.CameraProperties.cameraProperties: object expected");
          r.cameraProperties = d.dot.v3.MediaTrackSettings.fromObject(n.cameraProperties);
        }
        return r;
      }, e.toObject = function(n, r) {
        r || (r = {});
        let a = {};
        return r.defaults && (a.cameraProperties = null), n.cameraInitFrameResolution != null && n.hasOwnProperty("cameraInitFrameResolution") && (a.cameraInitFrameResolution = d.dot.v3.ImageBitmap.toObject(n.cameraInitFrameResolution, r), r.oneofs && (a._cameraInitFrameResolution = "cameraInitFrameResolution")), n.cameraProperties != null && n.hasOwnProperty("cameraProperties") && (a.cameraProperties = d.dot.v3.MediaTrackSettings.toObject(n.cameraProperties, r)), a;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.CameraProperties";
      }, e;
    }(), o.DetectedObject = function() {
      function e(i) {
        if (i)
          for (let n = Object.keys(i), r = 0; r < n.length; ++r)
            i[n[r]] != null && (this[n[r]] = i[n[r]]);
      }
      return e.prototype.brightness = 0, e.prototype.sharpness = 0, e.prototype.hotspots = 0, e.prototype.confidence = 0, e.prototype.faceSize = 0, e.prototype.faceCenter = null, e.prototype.smallestEdge = 0, e.prototype.bottomLeft = null, e.prototype.bottomRight = null, e.prototype.topLeft = null, e.prototype.topRight = null, e.create = function(i) {
        return new e(i);
      }, e.encode = function(i, n) {
        return n || (n = le.create()), i.brightness != null && Object.hasOwnProperty.call(i, "brightness") && n.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(i.brightness), i.sharpness != null && Object.hasOwnProperty.call(i, "sharpness") && n.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(i.sharpness), i.hotspots != null && Object.hasOwnProperty.call(i, "hotspots") && n.uint32(
          /* id 3, wireType 5 =*/
          29
        ).float(i.hotspots), i.confidence != null && Object.hasOwnProperty.call(i, "confidence") && n.uint32(
          /* id 4, wireType 5 =*/
          37
        ).float(i.confidence), i.faceSize != null && Object.hasOwnProperty.call(i, "faceSize") && n.uint32(
          /* id 5, wireType 5 =*/
          45
        ).float(i.faceSize), i.faceCenter != null && Object.hasOwnProperty.call(i, "faceCenter") && d.dot.v3.Point.encode(i.faceCenter, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), i.smallestEdge != null && Object.hasOwnProperty.call(i, "smallestEdge") && n.uint32(
          /* id 7, wireType 5 =*/
          61
        ).float(i.smallestEdge), i.bottomLeft != null && Object.hasOwnProperty.call(i, "bottomLeft") && d.dot.v3.Point.encode(i.bottomLeft, n.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), i.bottomRight != null && Object.hasOwnProperty.call(i, "bottomRight") && d.dot.v3.Point.encode(i.bottomRight, n.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), i.topLeft != null && Object.hasOwnProperty.call(i, "topLeft") && d.dot.v3.Point.encode(i.topLeft, n.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), i.topRight != null && Object.hasOwnProperty.call(i, "topRight") && d.dot.v3.Point.encode(i.topRight, n.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), n;
      }, e.encodeDelimited = function(i, n) {
        return this.encode(i, n).ldelim();
      }, e.decode = function(i, n) {
        i instanceof B || (i = B.create(i));
        let r = n === void 0 ? i.len : i.pos + n, a = new d.dot.v3.DetectedObject();
        for (; i.pos < r; ) {
          let s = i.uint32();
          switch (s >>> 3) {
            case 1: {
              a.brightness = i.float();
              break;
            }
            case 2: {
              a.sharpness = i.float();
              break;
            }
            case 3: {
              a.hotspots = i.float();
              break;
            }
            case 4: {
              a.confidence = i.float();
              break;
            }
            case 5: {
              a.faceSize = i.float();
              break;
            }
            case 6: {
              a.faceCenter = d.dot.v3.Point.decode(i, i.uint32());
              break;
            }
            case 7: {
              a.smallestEdge = i.float();
              break;
            }
            case 8: {
              a.bottomLeft = d.dot.v3.Point.decode(i, i.uint32());
              break;
            }
            case 9: {
              a.bottomRight = d.dot.v3.Point.decode(i, i.uint32());
              break;
            }
            case 10: {
              a.topLeft = d.dot.v3.Point.decode(i, i.uint32());
              break;
            }
            case 11: {
              a.topRight = d.dot.v3.Point.decode(i, i.uint32());
              break;
            }
            default:
              i.skipType(s & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(i) {
        return i instanceof B || (i = new B(i)), this.decode(i, i.uint32());
      }, e.verify = function(i) {
        if (typeof i != "object" || i === null)
          return "object expected";
        if (i.brightness != null && i.hasOwnProperty("brightness") && typeof i.brightness != "number")
          return "brightness: number expected";
        if (i.sharpness != null && i.hasOwnProperty("sharpness") && typeof i.sharpness != "number")
          return "sharpness: number expected";
        if (i.hotspots != null && i.hasOwnProperty("hotspots") && typeof i.hotspots != "number")
          return "hotspots: number expected";
        if (i.confidence != null && i.hasOwnProperty("confidence") && typeof i.confidence != "number")
          return "confidence: number expected";
        if (i.faceSize != null && i.hasOwnProperty("faceSize") && typeof i.faceSize != "number")
          return "faceSize: number expected";
        if (i.faceCenter != null && i.hasOwnProperty("faceCenter")) {
          let n = d.dot.v3.Point.verify(i.faceCenter);
          if (n)
            return "faceCenter." + n;
        }
        if (i.smallestEdge != null && i.hasOwnProperty("smallestEdge") && typeof i.smallestEdge != "number")
          return "smallestEdge: number expected";
        if (i.bottomLeft != null && i.hasOwnProperty("bottomLeft")) {
          let n = d.dot.v3.Point.verify(i.bottomLeft);
          if (n)
            return "bottomLeft." + n;
        }
        if (i.bottomRight != null && i.hasOwnProperty("bottomRight")) {
          let n = d.dot.v3.Point.verify(i.bottomRight);
          if (n)
            return "bottomRight." + n;
        }
        if (i.topLeft != null && i.hasOwnProperty("topLeft")) {
          let n = d.dot.v3.Point.verify(i.topLeft);
          if (n)
            return "topLeft." + n;
        }
        if (i.topRight != null && i.hasOwnProperty("topRight")) {
          let n = d.dot.v3.Point.verify(i.topRight);
          if (n)
            return "topRight." + n;
        }
        return null;
      }, e.fromObject = function(i) {
        if (i instanceof d.dot.v3.DetectedObject)
          return i;
        let n = new d.dot.v3.DetectedObject();
        if (i.brightness != null && (n.brightness = Number(i.brightness)), i.sharpness != null && (n.sharpness = Number(i.sharpness)), i.hotspots != null && (n.hotspots = Number(i.hotspots)), i.confidence != null && (n.confidence = Number(i.confidence)), i.faceSize != null && (n.faceSize = Number(i.faceSize)), i.faceCenter != null) {
          if (typeof i.faceCenter != "object")
            throw TypeError(".dot.v3.DetectedObject.faceCenter: object expected");
          n.faceCenter = d.dot.v3.Point.fromObject(i.faceCenter);
        }
        if (i.smallestEdge != null && (n.smallestEdge = Number(i.smallestEdge)), i.bottomLeft != null) {
          if (typeof i.bottomLeft != "object")
            throw TypeError(".dot.v3.DetectedObject.bottomLeft: object expected");
          n.bottomLeft = d.dot.v3.Point.fromObject(i.bottomLeft);
        }
        if (i.bottomRight != null) {
          if (typeof i.bottomRight != "object")
            throw TypeError(".dot.v3.DetectedObject.bottomRight: object expected");
          n.bottomRight = d.dot.v3.Point.fromObject(i.bottomRight);
        }
        if (i.topLeft != null) {
          if (typeof i.topLeft != "object")
            throw TypeError(".dot.v3.DetectedObject.topLeft: object expected");
          n.topLeft = d.dot.v3.Point.fromObject(i.topLeft);
        }
        if (i.topRight != null) {
          if (typeof i.topRight != "object")
            throw TypeError(".dot.v3.DetectedObject.topRight: object expected");
          n.topRight = d.dot.v3.Point.fromObject(i.topRight);
        }
        return n;
      }, e.toObject = function(i, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.brightness = 0, r.sharpness = 0, r.hotspots = 0, r.confidence = 0, r.faceSize = 0, r.faceCenter = null, r.smallestEdge = 0, r.bottomLeft = null, r.bottomRight = null, r.topLeft = null, r.topRight = null), i.brightness != null && i.hasOwnProperty("brightness") && (r.brightness = n.json && !isFinite(i.brightness) ? String(i.brightness) : i.brightness), i.sharpness != null && i.hasOwnProperty("sharpness") && (r.sharpness = n.json && !isFinite(i.sharpness) ? String(i.sharpness) : i.sharpness), i.hotspots != null && i.hasOwnProperty("hotspots") && (r.hotspots = n.json && !isFinite(i.hotspots) ? String(i.hotspots) : i.hotspots), i.confidence != null && i.hasOwnProperty("confidence") && (r.confidence = n.json && !isFinite(i.confidence) ? String(i.confidence) : i.confidence), i.faceSize != null && i.hasOwnProperty("faceSize") && (r.faceSize = n.json && !isFinite(i.faceSize) ? String(i.faceSize) : i.faceSize), i.faceCenter != null && i.hasOwnProperty("faceCenter") && (r.faceCenter = d.dot.v3.Point.toObject(i.faceCenter, n)), i.smallestEdge != null && i.hasOwnProperty("smallestEdge") && (r.smallestEdge = n.json && !isFinite(i.smallestEdge) ? String(i.smallestEdge) : i.smallestEdge), i.bottomLeft != null && i.hasOwnProperty("bottomLeft") && (r.bottomLeft = d.dot.v3.Point.toObject(i.bottomLeft, n)), i.bottomRight != null && i.hasOwnProperty("bottomRight") && (r.bottomRight = d.dot.v3.Point.toObject(i.bottomRight, n)), i.topLeft != null && i.hasOwnProperty("topLeft") && (r.topLeft = d.dot.v3.Point.toObject(i.topLeft, n)), i.topRight != null && i.hasOwnProperty("topRight") && (r.topRight = d.dot.v3.Point.toObject(i.topRight, n)), r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, e.getTypeUrl = function(i) {
        return i === void 0 && (i = "type.googleapis.com"), i + "/dot.v3.DetectedObject";
      }, e;
    }(), o.Point = function() {
      function e(i) {
        if (i)
          for (let n = Object.keys(i), r = 0; r < n.length; ++r)
            i[n[r]] != null && (this[n[r]] = i[n[r]]);
      }
      return e.prototype.x = 0, e.prototype.y = 0, e.create = function(i) {
        return new e(i);
      }, e.encode = function(i, n) {
        return n || (n = le.create()), i.x != null && Object.hasOwnProperty.call(i, "x") && n.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(i.x), i.y != null && Object.hasOwnProperty.call(i, "y") && n.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(i.y), n;
      }, e.encodeDelimited = function(i, n) {
        return this.encode(i, n).ldelim();
      }, e.decode = function(i, n) {
        i instanceof B || (i = B.create(i));
        let r = n === void 0 ? i.len : i.pos + n, a = new d.dot.v3.Point();
        for (; i.pos < r; ) {
          let s = i.uint32();
          switch (s >>> 3) {
            case 1: {
              a.x = i.float();
              break;
            }
            case 2: {
              a.y = i.float();
              break;
            }
            default:
              i.skipType(s & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(i) {
        return i instanceof B || (i = new B(i)), this.decode(i, i.uint32());
      }, e.verify = function(i) {
        return typeof i != "object" || i === null ? "object expected" : i.x != null && i.hasOwnProperty("x") && typeof i.x != "number" ? "x: number expected" : i.y != null && i.hasOwnProperty("y") && typeof i.y != "number" ? "y: number expected" : null;
      }, e.fromObject = function(i) {
        if (i instanceof d.dot.v3.Point)
          return i;
        let n = new d.dot.v3.Point();
        return i.x != null && (n.x = Number(i.x)), i.y != null && (n.y = Number(i.y)), n;
      }, e.toObject = function(i, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.x = 0, r.y = 0), i.x != null && i.hasOwnProperty("x") && (r.x = n.json && !isFinite(i.x) ? String(i.x) : i.x), i.y != null && i.hasOwnProperty("y") && (r.y = n.json && !isFinite(i.y) ? String(i.y) : i.y), r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, e.getTypeUrl = function(i) {
        return i === void 0 && (i = "type.googleapis.com"), i + "/dot.v3.Point";
      }, e;
    }(), o.FaceContent = function() {
      function e(i) {
        if (i)
          for (let n = Object.keys(i), r = 0; r < n.length; ++r)
            i[n[r]] != null && (this[n[r]] = i[n[r]]);
      }
      return e.prototype.image = null, e.prototype.metadata = null, e.create = function(i) {
        return new e(i);
      }, e.encode = function(i, n) {
        return n || (n = le.create()), i.image != null && Object.hasOwnProperty.call(i, "image") && d.dot.Image.encode(i.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), i.metadata != null && Object.hasOwnProperty.call(i, "metadata") && d.dot.v3.Metadata.encode(i.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, e.encodeDelimited = function(i, n) {
        return this.encode(i, n).ldelim();
      }, e.decode = function(i, n) {
        i instanceof B || (i = B.create(i));
        let r = n === void 0 ? i.len : i.pos + n, a = new d.dot.v3.FaceContent();
        for (; i.pos < r; ) {
          let s = i.uint32();
          switch (s >>> 3) {
            case 1: {
              a.image = d.dot.Image.decode(i, i.uint32());
              break;
            }
            case 2: {
              a.metadata = d.dot.v3.Metadata.decode(i, i.uint32());
              break;
            }
            default:
              i.skipType(s & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(i) {
        return i instanceof B || (i = new B(i)), this.decode(i, i.uint32());
      }, e.verify = function(i) {
        if (typeof i != "object" || i === null)
          return "object expected";
        if (i.image != null && i.hasOwnProperty("image")) {
          let n = d.dot.Image.verify(i.image);
          if (n)
            return "image." + n;
        }
        if (i.metadata != null && i.hasOwnProperty("metadata")) {
          let n = d.dot.v3.Metadata.verify(i.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, e.fromObject = function(i) {
        if (i instanceof d.dot.v3.FaceContent)
          return i;
        let n = new d.dot.v3.FaceContent();
        if (i.image != null) {
          if (typeof i.image != "object")
            throw TypeError(".dot.v3.FaceContent.image: object expected");
          n.image = d.dot.Image.fromObject(i.image);
        }
        if (i.metadata != null) {
          if (typeof i.metadata != "object")
            throw TypeError(".dot.v3.FaceContent.metadata: object expected");
          n.metadata = d.dot.v3.Metadata.fromObject(i.metadata);
        }
        return n;
      }, e.toObject = function(i, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.image = null, r.metadata = null), i.image != null && i.hasOwnProperty("image") && (r.image = d.dot.Image.toObject(i.image, n)), i.metadata != null && i.hasOwnProperty("metadata") && (r.metadata = d.dot.v3.Metadata.toObject(i.metadata, n)), r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, e.getTypeUrl = function(i) {
        return i === void 0 && (i = "type.googleapis.com"), i + "/dot.v3.FaceContent";
      }, e;
    }(), o.DocumentContent = function() {
      function e(i) {
        if (i)
          for (let n = Object.keys(i), r = 0; r < n.length; ++r)
            i[n[r]] != null && (this[n[r]] = i[n[r]]);
      }
      return e.prototype.image = null, e.prototype.metadata = null, e.create = function(i) {
        return new e(i);
      }, e.encode = function(i, n) {
        return n || (n = le.create()), i.image != null && Object.hasOwnProperty.call(i, "image") && d.dot.Image.encode(i.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), i.metadata != null && Object.hasOwnProperty.call(i, "metadata") && d.dot.v3.Metadata.encode(i.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, e.encodeDelimited = function(i, n) {
        return this.encode(i, n).ldelim();
      }, e.decode = function(i, n) {
        i instanceof B || (i = B.create(i));
        let r = n === void 0 ? i.len : i.pos + n, a = new d.dot.v3.DocumentContent();
        for (; i.pos < r; ) {
          let s = i.uint32();
          switch (s >>> 3) {
            case 1: {
              a.image = d.dot.Image.decode(i, i.uint32());
              break;
            }
            case 2: {
              a.metadata = d.dot.v3.Metadata.decode(i, i.uint32());
              break;
            }
            default:
              i.skipType(s & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(i) {
        return i instanceof B || (i = new B(i)), this.decode(i, i.uint32());
      }, e.verify = function(i) {
        if (typeof i != "object" || i === null)
          return "object expected";
        if (i.image != null && i.hasOwnProperty("image")) {
          let n = d.dot.Image.verify(i.image);
          if (n)
            return "image." + n;
        }
        if (i.metadata != null && i.hasOwnProperty("metadata")) {
          let n = d.dot.v3.Metadata.verify(i.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, e.fromObject = function(i) {
        if (i instanceof d.dot.v3.DocumentContent)
          return i;
        let n = new d.dot.v3.DocumentContent();
        if (i.image != null) {
          if (typeof i.image != "object")
            throw TypeError(".dot.v3.DocumentContent.image: object expected");
          n.image = d.dot.Image.fromObject(i.image);
        }
        if (i.metadata != null) {
          if (typeof i.metadata != "object")
            throw TypeError(".dot.v3.DocumentContent.metadata: object expected");
          n.metadata = d.dot.v3.Metadata.fromObject(i.metadata);
        }
        return n;
      }, e.toObject = function(i, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.image = null, r.metadata = null), i.image != null && i.hasOwnProperty("image") && (r.image = d.dot.Image.toObject(i.image, n)), i.metadata != null && i.hasOwnProperty("metadata") && (r.metadata = d.dot.v3.Metadata.toObject(i.metadata, n)), r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, e.getTypeUrl = function(i) {
        return i === void 0 && (i = "type.googleapis.com"), i + "/dot.v3.DocumentContent";
      }, e;
    }(), o.Blob = function() {
      function e(n) {
        if (n)
          for (let r = Object.keys(n), a = 0; a < r.length; ++a)
            n[r[a]] != null && (this[r[a]] = n[r[a]]);
      }
      e.prototype.documentContent = null, e.prototype.faceContent = null, e.prototype.magnifeyeLivenessContent = null, e.prototype.smileLivenessContent = null;
      let i;
      return Object.defineProperty(e.prototype, "blob", {
        get: h.oneOfGetter(i = ["documentContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent"]),
        set: h.oneOfSetter(i)
      }), e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, r) {
        return r || (r = le.create()), n.documentContent != null && Object.hasOwnProperty.call(n, "documentContent") && d.dot.v3.DocumentContent.encode(n.documentContent, r.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.faceContent != null && Object.hasOwnProperty.call(n, "faceContent") && d.dot.v3.FaceContent.encode(n.faceContent, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(n, "magnifeyeLivenessContent") && d.dot.v3.MagnifEyeLivenessContent.encode(n.magnifeyeLivenessContent, r.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.smileLivenessContent != null && Object.hasOwnProperty.call(n, "smileLivenessContent") && d.dot.v3.SmileLivenessContent.encode(n.smileLivenessContent, r.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), r;
      }, e.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, e.decode = function(n, r) {
        n instanceof B || (n = B.create(n));
        let a = r === void 0 ? n.len : n.pos + r, s = new d.dot.v3.Blob();
        for (; n.pos < a; ) {
          let g = n.uint32();
          switch (g >>> 3) {
            case 1: {
              s.documentContent = d.dot.v3.DocumentContent.decode(n, n.uint32());
              break;
            }
            case 2: {
              s.faceContent = d.dot.v3.FaceContent.decode(n, n.uint32());
              break;
            }
            case 3: {
              s.magnifeyeLivenessContent = d.dot.v3.MagnifEyeLivenessContent.decode(n, n.uint32());
              break;
            }
            case 4: {
              s.smileLivenessContent = d.dot.v3.SmileLivenessContent.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(g & 7);
              break;
          }
        }
        return s;
      }, e.decodeDelimited = function(n) {
        return n instanceof B || (n = new B(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        let r = {};
        if (n.documentContent != null && n.hasOwnProperty("documentContent")) {
          r.blob = 1;
          {
            let a = d.dot.v3.DocumentContent.verify(n.documentContent);
            if (a)
              return "documentContent." + a;
          }
        }
        if (n.faceContent != null && n.hasOwnProperty("faceContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let a = d.dot.v3.FaceContent.verify(n.faceContent);
            if (a)
              return "faceContent." + a;
          }
        }
        if (n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let a = d.dot.v3.MagnifEyeLivenessContent.verify(n.magnifeyeLivenessContent);
            if (a)
              return "magnifeyeLivenessContent." + a;
          }
        }
        if (n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let a = d.dot.v3.SmileLivenessContent.verify(n.smileLivenessContent);
            if (a)
              return "smileLivenessContent." + a;
          }
        }
        return null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.Blob)
          return n;
        let r = new d.dot.v3.Blob();
        if (n.documentContent != null) {
          if (typeof n.documentContent != "object")
            throw TypeError(".dot.v3.Blob.documentContent: object expected");
          r.documentContent = d.dot.v3.DocumentContent.fromObject(n.documentContent);
        }
        if (n.faceContent != null) {
          if (typeof n.faceContent != "object")
            throw TypeError(".dot.v3.Blob.faceContent: object expected");
          r.faceContent = d.dot.v3.FaceContent.fromObject(n.faceContent);
        }
        if (n.magnifeyeLivenessContent != null) {
          if (typeof n.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v3.Blob.magnifeyeLivenessContent: object expected");
          r.magnifeyeLivenessContent = d.dot.v3.MagnifEyeLivenessContent.fromObject(n.magnifeyeLivenessContent);
        }
        if (n.smileLivenessContent != null) {
          if (typeof n.smileLivenessContent != "object")
            throw TypeError(".dot.v3.Blob.smileLivenessContent: object expected");
          r.smileLivenessContent = d.dot.v3.SmileLivenessContent.fromObject(n.smileLivenessContent);
        }
        return r;
      }, e.toObject = function(n, r) {
        r || (r = {});
        let a = {};
        return n.documentContent != null && n.hasOwnProperty("documentContent") && (a.documentContent = d.dot.v3.DocumentContent.toObject(n.documentContent, r), r.oneofs && (a.blob = "documentContent")), n.faceContent != null && n.hasOwnProperty("faceContent") && (a.faceContent = d.dot.v3.FaceContent.toObject(n.faceContent, r), r.oneofs && (a.blob = "faceContent")), n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent") && (a.magnifeyeLivenessContent = d.dot.v3.MagnifEyeLivenessContent.toObject(n.magnifeyeLivenessContent, r), r.oneofs && (a.blob = "magnifeyeLivenessContent")), n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent") && (a.smileLivenessContent = d.dot.v3.SmileLivenessContent.toObject(n.smileLivenessContent, r), r.oneofs && (a.blob = "smileLivenessContent")), a;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.Blob";
      }, e;
    }(), o.SmileLivenessContent = function() {
      function e(i) {
        if (i)
          for (let n = Object.keys(i), r = 0; r < n.length; ++r)
            i[n[r]] != null && (this[n[r]] = i[n[r]]);
      }
      return e.prototype.neutralExpressionFaceImage = null, e.prototype.smileExpressionFaceImage = null, e.prototype.metadata = null, e.create = function(i) {
        return new e(i);
      }, e.encode = function(i, n) {
        return n || (n = le.create()), i.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(i, "neutralExpressionFaceImage") && d.dot.Image.encode(i.neutralExpressionFaceImage, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), i.smileExpressionFaceImage != null && Object.hasOwnProperty.call(i, "smileExpressionFaceImage") && d.dot.Image.encode(i.smileExpressionFaceImage, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), i.metadata != null && Object.hasOwnProperty.call(i, "metadata") && d.dot.v3.Metadata.encode(i.metadata, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n;
      }, e.encodeDelimited = function(i, n) {
        return this.encode(i, n).ldelim();
      }, e.decode = function(i, n) {
        i instanceof B || (i = B.create(i));
        let r = n === void 0 ? i.len : i.pos + n, a = new d.dot.v3.SmileLivenessContent();
        for (; i.pos < r; ) {
          let s = i.uint32();
          switch (s >>> 3) {
            case 1: {
              a.neutralExpressionFaceImage = d.dot.Image.decode(i, i.uint32());
              break;
            }
            case 2: {
              a.smileExpressionFaceImage = d.dot.Image.decode(i, i.uint32());
              break;
            }
            case 3: {
              a.metadata = d.dot.v3.Metadata.decode(i, i.uint32());
              break;
            }
            default:
              i.skipType(s & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(i) {
        return i instanceof B || (i = new B(i)), this.decode(i, i.uint32());
      }, e.verify = function(i) {
        if (typeof i != "object" || i === null)
          return "object expected";
        if (i.neutralExpressionFaceImage != null && i.hasOwnProperty("neutralExpressionFaceImage")) {
          let n = d.dot.Image.verify(i.neutralExpressionFaceImage);
          if (n)
            return "neutralExpressionFaceImage." + n;
        }
        if (i.smileExpressionFaceImage != null && i.hasOwnProperty("smileExpressionFaceImage")) {
          let n = d.dot.Image.verify(i.smileExpressionFaceImage);
          if (n)
            return "smileExpressionFaceImage." + n;
        }
        if (i.metadata != null && i.hasOwnProperty("metadata")) {
          let n = d.dot.v3.Metadata.verify(i.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, e.fromObject = function(i) {
        if (i instanceof d.dot.v3.SmileLivenessContent)
          return i;
        let n = new d.dot.v3.SmileLivenessContent();
        if (i.neutralExpressionFaceImage != null) {
          if (typeof i.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v3.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          n.neutralExpressionFaceImage = d.dot.Image.fromObject(i.neutralExpressionFaceImage);
        }
        if (i.smileExpressionFaceImage != null) {
          if (typeof i.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v3.SmileLivenessContent.smileExpressionFaceImage: object expected");
          n.smileExpressionFaceImage = d.dot.Image.fromObject(i.smileExpressionFaceImage);
        }
        if (i.metadata != null) {
          if (typeof i.metadata != "object")
            throw TypeError(".dot.v3.SmileLivenessContent.metadata: object expected");
          n.metadata = d.dot.v3.Metadata.fromObject(i.metadata);
        }
        return n;
      }, e.toObject = function(i, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.neutralExpressionFaceImage = null, r.smileExpressionFaceImage = null, r.metadata = null), i.neutralExpressionFaceImage != null && i.hasOwnProperty("neutralExpressionFaceImage") && (r.neutralExpressionFaceImage = d.dot.Image.toObject(i.neutralExpressionFaceImage, n)), i.smileExpressionFaceImage != null && i.hasOwnProperty("smileExpressionFaceImage") && (r.smileExpressionFaceImage = d.dot.Image.toObject(i.smileExpressionFaceImage, n)), i.metadata != null && i.hasOwnProperty("metadata") && (r.metadata = d.dot.v3.Metadata.toObject(i.metadata, n)), r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ie.util.toJSONOptions);
      }, e.getTypeUrl = function(i) {
        return i === void 0 && (i = "type.googleapis.com"), i + "/dot.v3.SmileLivenessContent";
      }, e;
    }(), o;
  }(), t.Image = function() {
    function o(e) {
      if (e)
        for (let i = Object.keys(e), n = 0; n < i.length; ++n)
          e[i[n]] != null && (this[i[n]] = e[i[n]]);
    }
    return o.prototype.bytes = h.newBuffer([]), o.create = function(e) {
      return new o(e);
    }, o.encode = function(e, i) {
      return i || (i = le.create()), e.bytes != null && Object.hasOwnProperty.call(e, "bytes") && i.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(e.bytes), i;
    }, o.encodeDelimited = function(e, i) {
      return this.encode(e, i).ldelim();
    }, o.decode = function(e, i) {
      e instanceof B || (e = B.create(e));
      let n = i === void 0 ? e.len : e.pos + i, r = new d.dot.Image();
      for (; e.pos < n; ) {
        let a = e.uint32();
        switch (a >>> 3) {
          case 1: {
            r.bytes = e.bytes();
            break;
          }
          default:
            e.skipType(a & 7);
            break;
        }
      }
      return r;
    }, o.decodeDelimited = function(e) {
      return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
    }, o.verify = function(e) {
      return typeof e != "object" || e === null ? "object expected" : e.bytes != null && e.hasOwnProperty("bytes") && !(e.bytes && typeof e.bytes.length == "number" || h.isString(e.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(e) {
      if (e instanceof d.dot.Image)
        return e;
      let i = new d.dot.Image();
      return e.bytes != null && (typeof e.bytes == "string" ? h.base64.decode(e.bytes, i.bytes = h.newBuffer(h.base64.length(e.bytes)), 0) : e.bytes.length >= 0 && (i.bytes = e.bytes)), i;
    }, o.toObject = function(e, i) {
      i || (i = {});
      let n = {};
      return i.defaults && (i.bytes === String ? n.bytes = "" : (n.bytes = [], i.bytes !== Array && (n.bytes = h.newBuffer(n.bytes)))), e.bytes != null && e.hasOwnProperty("bytes") && (n.bytes = i.bytes === String ? h.base64.encode(e.bytes, 0, e.bytes.length) : i.bytes === Array ? Array.prototype.slice.call(e.bytes) : e.bytes), n;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, ie.util.toJSONOptions);
    }, o.getTypeUrl = function(e) {
      return e === void 0 && (e = "type.googleapis.com"), e + "/dot.Image";
    }, o;
  }(), t.Int32List = function() {
    function o(e) {
      if (this.items = [], e)
        for (let i = Object.keys(e), n = 0; n < i.length; ++n)
          e[i[n]] != null && (this[i[n]] = e[i[n]]);
    }
    return o.prototype.items = h.emptyArray, o.create = function(e) {
      return new o(e);
    }, o.encode = function(e, i) {
      if (i || (i = le.create()), e.items != null && e.items.length) {
        i.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork();
        for (let n = 0; n < e.items.length; ++n)
          i.int32(e.items[n]);
        i.ldelim();
      }
      return i;
    }, o.encodeDelimited = function(e, i) {
      return this.encode(e, i).ldelim();
    }, o.decode = function(e, i) {
      e instanceof B || (e = B.create(e));
      let n = i === void 0 ? e.len : e.pos + i, r = new d.dot.Int32List();
      for (; e.pos < n; ) {
        let a = e.uint32();
        switch (a >>> 3) {
          case 1: {
            if (r.items && r.items.length || (r.items = []), (a & 7) === 2) {
              let s = e.uint32() + e.pos;
              for (; e.pos < s; )
                r.items.push(e.int32());
            } else
              r.items.push(e.int32());
            break;
          }
          default:
            e.skipType(a & 7);
            break;
        }
      }
      return r;
    }, o.decodeDelimited = function(e) {
      return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
    }, o.verify = function(e) {
      if (typeof e != "object" || e === null)
        return "object expected";
      if (e.items != null && e.hasOwnProperty("items")) {
        if (!Array.isArray(e.items))
          return "items: array expected";
        for (let i = 0; i < e.items.length; ++i)
          if (!h.isInteger(e.items[i]))
            return "items: integer[] expected";
      }
      return null;
    }, o.fromObject = function(e) {
      if (e instanceof d.dot.Int32List)
        return e;
      let i = new d.dot.Int32List();
      if (e.items) {
        if (!Array.isArray(e.items))
          throw TypeError(".dot.Int32List.items: array expected");
        i.items = [];
        for (let n = 0; n < e.items.length; ++n)
          i.items[n] = e.items[n] | 0;
      }
      return i;
    }, o.toObject = function(e, i) {
      i || (i = {});
      let n = {};
      if ((i.arrays || i.defaults) && (n.items = []), e.items && e.items.length) {
        n.items = [];
        for (let r = 0; r < e.items.length; ++r)
          n.items[r] = e.items[r];
      }
      return n;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, ie.util.toJSONOptions);
    }, o.getTypeUrl = function(e) {
      return e === void 0 && (e = "type.googleapis.com"), e + "/dot.Int32List";
    }, o;
  }(), t.Platform = function() {
    const o = {}, e = Object.create(o);
    return e[o[0] = "WEB"] = 0, e[o[1] = "ANDROID"] = 1, e[o[2] = "IOS"] = 2, e;
  }(), t;
})();
async function xl(t) {
  const { Image: o } = nn, e = await t.arrayBuffer(), i = new Uint8Array(e), n = {};
  n.bytes = i;
  const r = o.verify(n);
  if (r)
    throw Error(r);
  const a = {};
  return a.bytes = i, o.create(a);
}
async function ll(t) {
  const { v3: { Metadata: o } } = nn, e = { ...t };
  e.platform = nn.Platform.WEB;
  const i = e, n = o.verify(i);
  if (n)
    throw Error(n);
  return o.create(i);
}
async function ul(t) {
  const { Content: o } = nn, { iv: e, key: i, message: n } = await kx(t), r = { token: new Uint8Array(i), iv: e, schemaVersion: NI, bytes: new Uint8Array(n) }, a = o.verify(r);
  if (a)
    throw Error(a);
  const s = o.create(r);
  return o.encode(s).finish();
}
function Cl({ documentContent: t, faceContent: o, magnifeyeLivenessContent: e, smileLivenessContent: i }) {
  const { Blob: n } = nn.v3, r = {};
  r.documentContent = t, r.faceContent = o, r.magnifeyeLivenessContent = e, r.smileLivenessContent = i;
  const a = r, s = n.verify(a);
  if (s)
    throw Error(s);
  const g = n.create(a);
  return n.encode(g).finish();
}
async function dl(t, o) {
  const { DocumentContent: e } = nn.v3, i = await xl(t), n = await ll(o), r = {};
  r.image = i, r.metadata = n;
  const a = r, s = e.verify(a);
  if (s)
    throw Error(s);
  const g = e.create(a), x = {};
  return x.documentContent = g, Cl(x);
}
async function Al(t, o) {
  const e = await dl(t, o);
  return ul(e);
}
const pl = () => {
  const {
    appState: t,
    handleAppStateChange: o,
    handleError: e
  } = Ei(), {
    documentCameraOptions: i
  } = Xs(), {
    cameraFacing: n,
    onPhotoTaken: r,
    sessionToken: a,
    thresholds: s,
    wasmDirectoryPath: g
  } = i, x = rn(), C = _s(void 0), {
    cameraHandler: l,
    cameraResolution: f,
    onCameraResolutionChange: p
  } = Cx(x, n), {
    controller: y
  } = Mx(s, g), {
    shouldMirror: O
  } = ux(ot.CONTROL, l);
  return xx(ot.CAMERA_PROPS_CHANGED, {
    cameraResolution: f,
    shouldMirror: O
  }), dx(), be(() => () => {
    Gn.getInstance().restart();
  }, []), be(() => {
    l != null && l.videoTrack && (y != null && y.isDetectorInitialized) && o(Ke.RUNNING);
  }, [l == null ? void 0 : l.videoTrack, y == null ? void 0 : y.isDetectorInitialized, o]), be(() => {
    if (t !== Ke.RUNNING)
      return;
    if (!l || !y)
      throw new ne("Cannot start detection");
    let E = 0, Z = !1, G = 0;
    const L = new Fs(30);
    y.clearImagesForDuplicateDetection();
    const J = async (F, k, q) => {
      const z = {
        width: F.width,
        height: F.height
      }, $ = await nx(F), re = {
        ...await l.getCameraProperties(),
        detectionRecord: q,
        hashedDetectedImages: y.getImagesForDuplicateDetection()
      }, Ee = await Al($, {
        sessionToken: a,
        web: re
      }), _ = {
        detection: k,
        imageResolution: z
      };
      Ix(Es.DOCUMENT, y.getCandidateSelectionImages()), r({
        image: $,
        data: _
      }, Ee);
    };
    return (async () => {
      const F = Date.now();
      for (; l.checkIfStreamIsRunning() && !Z; ) {
        if (QI(E, G)) {
          const {
            detection: _,
            image: Ce
          } = y.getBestImage() || {}, Wt = y.getDetectionRecord();
          if (Ce && _) {
            const rt = Date.now(), ye = pI(L);
            vn.sendDocumentData({
              documentDetection: _,
              imageResolution: {
                width: Ce.width,
                height: Ce.height
              },
              deviceName: await l.getDeviceName(),
              averageFps: ye,
              captureProcessDurationInMs: rt - F,
              facingMode: l.getCameraSettings().facingMode,
              instructionSet: await y.getInstructionSet()
            }), await J(Ce, _, Wt), o(Ke.WAITING), y.restart();
          } else
            e(new ne("Something went wrong during capturing an image"));
          return;
        }
        const k = Date.now(), q = l.takePhoto(), z = {
          width: q.width,
          height: q.height
        };
        let $;
        try {
          $ = await y.processImage(q);
        } catch (_) {
          _ instanceof Error && e(ne.fromCameraError(_));
          return;
        }
        const re = Date.now() - k, we = Ps(1e3 / re);
        L.pushFixed(we);
        const Ee = {
          document: $.detectedDocument,
          detectionTime: re,
          fps: we,
          resolution: z,
          instructionCode: $.instructionCode,
          samVersion: y.samVersion,
          invalidValidators: $.invalidValidators
        };
        C.value = Ee, $.isInCandidateSelection && (E === 0 && (E = performance.now()), G++), p(z), await Wo(Math.max(Sa.max - re, Sa.min));
      }
    })(), () => {
      Z = !0;
    };
  }, [t, l, y, i, o, e, r, s.confidenceThreshold, p, a, C]), Ie(Ne, {
    children: [Ie(Qc, {
      ref: x,
      $isImageMirror: O,
      autoPlay: !0,
      muted: !0,
      playsInline: !0
    }), f && t === Ke.RUNNING && Ie(yx, {
      cameraResolution: f,
      detectionDetails: C,
      isImageMirror: O
    })]
  });
}, fl = ({
  ...t
}) => Ie(js, {
  cameraOptions: t,
  children: Ie(pl, {})
}), hl = ({
  children: t
}) => {
  const o = rn(null);
  return Ax(o, ot.VIDEO_ELEMENT_SIZE), Ie(Jc, {
    ref: o,
    children: t
  });
}, ml = ({
  cameraOptions: t
}) => (be(() => {
  vn.init("065cf6e242fc5e785cd17eebfbfbbd212a33133b");
}, []), t ? Ie(Tc, {
  target: t.styleTarget,
  children: Ie(js, {
    cameraOptions: t,
    children: Ie(nI, {
      value: AI(t.onError, ot.STATE_CHANGED),
      children: Ie(Vs, {
        children: Ie(hl, {
          children: Ie(fl, {
            ...t
          })
        })
      })
    })
  })
}) : null);
Jg(ml, "x-dot-document-auto-capture", ["cameraOptions"]);
