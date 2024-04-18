var e0 = Object.defineProperty;
var t0 = (t, i, e) => i in t ? e0(t, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[i] = e;
var j = (t, i, e) => (t0(t, typeof i != "symbol" ? i + "" : i, e), e);
var On, Z, Ua, Qa, Bt, Dr, za, Ci, $a, Zn = {}, qa = [], n0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, So = Array.isArray;
function at(t, i) {
  for (var e in i)
    t[e] = i[e];
  return t;
}
function _a(t) {
  var i = t.parentNode;
  i && i.removeChild(t);
}
function he(t, i, e) {
  var n, o, r, a = {};
  for (r in i)
    r == "key" ? n = i[r] : r == "ref" ? o = i[r] : a[r] = i[r];
  if (arguments.length > -1152 + 1 * 1154 && (a.children = arguments.length > 95 + -2 * -647 + -14 * 99 ? On.call(arguments, -1 * -7517 + -7742 + 227) : e), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      void (173 * 3 + 2555 + -106 * 29) === a[r] && (a[r] = t.defaultProps[r]);
  return wn(t, a, n, o, null);
}
function wn(t, i, e, n, o) {
  var r = {};
  r.type = t, r.props = i, r.key = e, r.ref = n, r.__k = null, r.__ = null, r.__b = 0, r.__e = null, r.__d = void (23 * 49 + -2169 + 2 * 521), r.__c = null, r.constructor = void (5396 + -1 * 5396), r.__v = o ?? ++Ua, r.__i = -(-152 * -5 + -8794 * 1 + 1 * 8035), r.__u = 0;
  var a = r;
  return o == null && Z.vnode != null && Z.vnode(a), a;
}
function o0() {
  var t = {};
  return t.current = null, t;
}
function Fe(t) {
  return t.children;
}
function We(t, i) {
  this.props = t, this.context = i;
}
function en(t, i) {
  if (i == null)
    return t.__ ? en(t.__, t.__i + (13714 + -3 * 4571)) : null;
  for (var e; i < t.__k.length; i++)
    if ((e = t.__k[i]) != null && e.__e != null)
      return e.__e;
  return typeof t.type == "function" ? en(t) : null;
}
function eg(t) {
  var i, e;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, i = -6419 + -49 * -131; i < t.__k.length; i++)
      if ((e = t.__k[i]) != null && e.__e != null) {
        t.__e = t.__c.base = e.__e;
        break;
      }
    return eg(t);
  }
}
function di(t) {
  (!t.__d && (t.__d = !(-5425 + -695 * -5 + 1950)) && Bt.push(t) && !uo.__r++ || Dr !== Z.debounceRendering) && ((Dr = Z.debounceRendering) || za)(uo);
}
function uo() {
  var t, i, e, n, o, r, a, g, s;
  for (Bt.sort(Ci); t = Bt.shift(); )
    t.__d && (i = Bt.length, n = void 0, r = (o = (e = t).__v).__e, g = [], s = [], (a = e.__P) && ((n = at({}, o)).__v = o.__v + (1080 * -1 + -2882 + 3963), Z.vnode && Z.vnode(n), ji(a, n, o, e.__n, void (-2 * -1019 + -2802 + -382 * -2) !== a.ownerSVGElement, 6967 + 3709 * 1 + -3548 * 3 & o.__u ? [r] : null, g, r ?? en(o), !!(-1 * 165 + -3066 + 3263 & o.__u), s), n.__.__k[n.__i] = n, og(g, n, s), n.__e != r && eg(n)), Bt.length > i && Bt.sort(Ci));
  uo.__r = 4900 * -2 + -6667 * -1 + 3133;
}
function tg(t, i, e, n, o, r, a, g, s, x, C) {
  var u, h, p, v, E, B = n && n.__k || qa, k = i.length;
  for (e.__d = s, i0(e, i, B), s = e.__d, u = 1308 * 1 + 47 * -1 + -1261; u < k; u++)
    (p = e.__k[u]) != null && typeof p != "boolean" && typeof p != "function" && (h = -(2451 + -175 * 14) === p.__i ? Zn : B[p.__i] || Zn, p.__i = u, ji(t, p, h, o, r, a, g, s, x, C), v = p.__e, p.ref && h.ref != p.ref && (h.ref && Mi(h.ref, null, p), C.push(p.ref, p.__c || v, p)), E == null && v != null && (E = v), 65536 & p.__u || h.__k === p.__k ? s = ng(p, s, t) : typeof p.type == "function" && p.__d !== void 0 ? s = p.__d : v && (s = v.nextSibling), p.__d = void (-62 * -78 + -401 * 4 + -1616 * 2), p.__u &= -(94121 * -1 + 2 * 174095 + 85 * -676));
  e.__d = s, e.__e = E;
}
function i0(t, i, e) {
  var n, o, r, a, g, s = i.length, x = e.length, C = x, u = 8028 + 15 * 453 + -9 * 1647;
  for (t.__k = [], n = 32 + 4 * -8; n < s; n++)
    (o = t.__k[n] = (o = i[n]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? wn(null, o, null, null, o) : So(o) ? wn(Fe, { children: o }, null, null, null) : void (-2239 + 1 * -2657 + 544 * 9) === o.constructor && o.__b > -8047 + -59 * -157 + 8 * -152 ? wn(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = t, o.__b = t.__b + (-5871 * 1 + 23 * 73 + -599 * -7), g = r0(o, e, a = n + u, C), o.__i = g, r = null, -(3043 + -1014 * 3) !== g && (C--, (r = e[g]) && (r.__u |= -205218 + -3 * 27551 + 418943)), r == null || r.__v === null ? (g == -1 && u--, typeof o.type != "function" && (o.__u |= 35403 * -2 + 11 * 11867 + 1161 * 5)) : g !== a && (g === a + 1 ? u++ : g > a ? C > s - a ? u += g - a : u-- : u = g < a && g == a - (-11 * 62 + -134 * 11 + -3 * -719) ? g - a : -7083 + -9 * -787, g !== n + u && (o.__u |= -30107 + 4 * 27430 + -14077))) : (r = e[n]) && r.key == null && r.__e && (r.__e == t.__d && (t.__d = en(r)), Ai(r, r, !1), e[n] = null, C--);
  if (C)
    for (n = 7421 + 3 * 2242 + 47 * -301; n < x; n++)
      (r = e[n]) != null && -4798 * 1 + -1 * 5585 + 10383 == (-379 * -618 + 88730 + -191880 & r.__u) && (r.__e == t.__d && (t.__d = en(r)), Ai(r, r));
}
function ng(t, i, e) {
  var n, o;
  if (typeof t.type == "function") {
    for (n = t.__k, o = -5357 * -1 + -6491 + 21 * 54; n && o < n.length; o++)
      n[o] && (n[o].__ = t, i = ng(n[o], i, e));
    return i;
  }
  return t.__e != i && (e.insertBefore(t.__e, i || null), i = t.__e), i && i.nextSibling;
}
function st(t, i) {
  return i = i || [], t == null || typeof t == "boolean" || (So(t) ? t.some(function(e) {
    st(e, i);
  }) : i.push(t)), i;
}
function r0(t, i, e, n) {
  var o = t.key, r = t.type, a = e - (-1 * 793 + 19 + -155 * -5), g = e + (-4459 * 2 + -3203 * -1 + -5716 * -1), s = i[e];
  if (s === null || s && o == s.key && r === s.type)
    return e;
  if (n > (s != null && -3731 + 1 * -1089 + -482 * -10 == (-1 * -65642 + 67667 + 2237 * -1 & s.__u) ? 3 * 2713 + -3638 + -375 * 12 : 85 * -29 + 6211 + -3746))
    for (; a >= 5405 + 3274 * -1 + -2131 * 1 || g < i.length; ) {
      if (a >= -2648 + -9 * 813 + 5 * 1993) {
        if ((s = i[a]) && -66 * 151 + 1986 + 7980 == (158516 + -4 * 27858 + 83988 & s.__u) && o == s.key && r === s.type)
          return a;
        a--;
      }
      if (g < i.length) {
        if ((s = i[g]) && 5206 + 1 * 6763 + 11969 * -1 == (4687 * 3 + -17 * -10529 + -61982 & s.__u) && o == s.key && r === s.type)
          return g;
        g++;
      }
    }
  return -(-6 * 668 + -2563 + 124 * 53);
}
function Fr(t, i, e) {
  i[-1 * 1273 + -1 * -3377 + -2104] === "-" ? t.setProperty(i, e ?? "") : t[i] = e == null ? "" : typeof e != "number" || n0.test(i) ? e : e + "px";
}
function Jn(t, i, e, n, o) {
  var r;
  e:
    if (i === "style")
      if (typeof e == "string")
        t.style.cssText = e;
      else {
        if (typeof n == "string" && (t.style.cssText = n = ""), n)
          for (i in n)
            e && i in e || Fr(t.style, i, "");
        if (e)
          for (i in e)
            n && e[i] === n[i] || Fr(t.style, i, e[i]);
      }
    else if (i[3715 + -3715 * 1] === "o" && i[-411 * -7 + 5425 + -3 * 2767] === "n")
      r = i !== (i = i.replace(/(PointerCapture)$|Capture$/, "$1")), i = i.toLowerCase() in t ? i.toLowerCase().slice(5 * -1138 + -1343 + 21 * 335) : i.slice(1392 + -5 * 278), t.l || (t.l = {}), t.l[i + r] = e, e ? n ? e.u = n.u : (e.u = Date.now(), t.addEventListener(i, r ? jr : Xr, r)) : t.removeEventListener(i, r ? jr : Xr, r);
    else {
      if (o)
        i = i.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (i !== "width" && i !== "height" && i !== "href" && i !== "list" && i !== "form" && i !== "tabIndex" && i !== "download" && i !== "rowSpan" && i !== "colSpan" && i !== "role" && i in t)
        try {
          t[i] = e ?? "";
          break e;
        } catch {
        }
      typeof e == "function" || (e == null || !(190 * -8 + 231 + 1290) === e && i[-1 * -6301 + 1 * -7818 + 1521] !== "-" ? t.removeAttribute(i) : t.setAttribute(i, e));
    }
}
function Xr(t) {
  var i = this.l[t.type + !1];
  if (t.t) {
    if (t.t <= i.u)
      return;
  } else
    t.t = Date.now();
  return i(Z.event ? Z.event(t) : t);
}
function jr(t) {
  return this.l[t.type + !0](Z.event ? Z.event(t) : t);
}
function ji(t, i, e, n, o, r, a, g, s, x) {
  var C, u, h, p, v, E, B, k, K, G, F, L, X, O, $, z = i.type;
  if (void (874 + 46 * -19) !== i.constructor)
    return null;
  -1841 * 4 + 7717 * 1 + 3 * -75 & e.__u && (s = !!(-17139 + -77 * -223 & e.__u), r = [g = i.__e = e.__e]), (C = Z.__b) && C(i);
  e:
    if (typeof z == "function")
      try {
        if (k = i.props, K = (C = z.contextType) && n[C.__c], G = C ? K ? K.props.value : C.__ : n, e.__c ? B = (u = i.__c = e.__c).__ = u.__E : ("prototype" in z && z.prototype.render ? i.__c = u = new z(k, G) : (i.__c = u = new We(k, G), u.constructor = z, u.render = g0), K && K.sub(u), u.props = k, u.state || (u.state = {}), u.context = G, u.__n = n, h = u.__d = !(-31 * -151 + 5328 + -1 * 10009), u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), z.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = at({}, u.__s)), at(u.__s, z.getDerivedStateFromProps(k, u.__s))), p = u.props, v = u.state, u.__v = i, h)
          z.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (z.getDerivedStateFromProps == null && k !== p && u.componentWillReceiveProps != null && u.componentWillReceiveProps(k, G), !u.__e && (u.shouldComponentUpdate != null && !(4 * -1301 + 1777 + 3428) === u.shouldComponentUpdate(k, u.__s, G) || i.__v === e.__v)) {
            for (i.__v !== e.__v && (u.props = k, u.state = u.__s, u.__d = !(11008 + -3 * 3669)), i.__e = e.__e, i.__k = e.__k, i.__k.forEach(function(ee) {
              ee && (ee.__ = i);
            }), F = 1 * 5186 + -8002 + 16 * 176; F < u._sb.length; F++)
              u.__h.push(u._sb[F]);
            u._sb = [], u.__h.length && a.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(k, u.__s, G), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(p, v, E);
          });
        }
        if (u.context = G, u.props = k, u.__P = t, u.__e = !(4689 + -1329 * 1 + -3359), L = Z.__r, X = -7485 + 5926 * 1 + 1559, "prototype" in z && z.prototype.render) {
          for (u.state = u.__s, u.__d = !(-2056 + -187 * -11), L && L(i), C = u.render(u.props, u.state, u.context), O = -3 * 947 + -5251 + 34 * 238; O < u._sb.length; O++)
            u.__h.push(u._sb[O]);
          u._sb = [];
        } else
          do
            u.__d = !(-9427 + -365 * -2 + 1 * 8698), L && L(i), C = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++X < 25);
        u.state = u.__s, u.getChildContext != null && (n = at(at({}, n), u.getChildContext())), h || u.getSnapshotBeforeUpdate == null || (E = u.getSnapshotBeforeUpdate(p, v)), tg(t, So($ = C != null && C.type === Fe && C.key == null ? C.props.children : C) ? $ : [$], i, e, n, o, r, a, g, s, x), u.base = i.__e, i.__u &= -(-4821 + 6263 * -1 + 11245), u.__h.length && a.push(u), B && (u.__E = u.__ = null);
      } catch (ee) {
        i.__v = null, s || r != null ? (i.__e = g, i.__u |= s ? -5690 * -1 + -4953 + -577 : 1 * -919 + 2813 + -1862, r[r.indexOf(g)] = null) : (i.__e = e.__e, i.__k = e.__k), Z.__e(ee, i, e);
      }
    else
      r == null && i.__v === e.__v ? (i.__k = e.__k, i.__e = e.__e) : i.__e = a0(e.__e, i, e, n, o, r, a, s, x);
  (C = Z.diffed) && C(i);
}
function og(t, i, e) {
  i.__d = void (9755 * 1 + 3563 + -13318 * 1);
  for (var n = -163 * -59 + -1374 + -1 * 8243; n < e.length; n++)
    Mi(e[n], e[++n], e[++n]);
  Z.__c && Z.__c(i, t), t.some(function(o) {
    try {
      t = o.__h, o.__h = [], t.some(function(r) {
        r.call(o);
      });
    } catch (r) {
      Z.__e(r, o.__v);
    }
  });
}
function a0(t, i, e, n, o, r, a, g, s) {
  var x, C, u, h, p, v, E, B = e.props, k = i.props, K = i.type;
  if (K === "svg" && (o = !(-41 * -11 + -3854 * -2 + -8159)), r != null) {
    for (x = -6932 + 8017 * -1 + 14949; x < r.length; x++)
      if ((p = r[x]) && "setAttribute" in p == !!K && (K ? p.localName === K : 1 * 7287 + -7 * -1345 + -16699 === p.nodeType)) {
        t = p, r[x] = null;
        break;
      }
  }
  if (t == null) {
    if (K === null)
      return document.createTextNode(k);
    t = o ? document.createElementNS("http://www.w3.org/2000/svg", K) : document.createElement(K, k.is && k), r = null, g = !(6 * 838 + 7906 + -12933);
  }
  if (K === null)
    B === k || g && t.data === k || (t.data = k);
  else {
    if (r = r && On.call(t.childNodes), B = e.props || Zn, !g && r != null)
      for (B = {}, x = 0; x < t.attributes.length; x++)
        B[(p = t.attributes[x]).name] = p.value;
    for (x in B)
      p = B[x], x == "children" || (x == "dangerouslySetInnerHTML" ? u = p : x === "key" || x in k || Jn(t, x, null, p, o));
    for (x in k)
      p = k[x], x == "children" ? h = p : x == "dangerouslySetInnerHTML" ? C = p : x == "value" ? v = p : x == "checked" ? E = p : x === "key" || g && typeof p != "function" || B[x] === p || Jn(t, x, p, B[x], o);
    if (C)
      g || u && (C.__html === u.__html || C.__html === t.innerHTML) || (t.innerHTML = C.__html), i.__k = [];
    else if (u && (t.innerHTML = ""), tg(t, So(h) ? h : [h], i, e, n, o && K !== "foreignObject", r, a, r ? r[3 * -599 + 4944 + -3147] : e.__k && en(e, -11 * -823 + 27 + -9080), g, s), r != null)
      for (x = r.length; x--; )
        r[x] != null && _a(r[x]);
    g || (x = "value", void (176 * -16 + 2 * 1823 + 415 * -2) !== v && (v !== t[x] || K === "progress" && !v || K === "option" && v !== B[x]) && Jn(t, x, v, B[x], !(5016 + 4535 * -1 + -30 * 16)), x = "checked", void (57 * -45 + 2 * -3136 + 8837 * 1) !== E && E !== t[x] && Jn(t, x, E, B[x], !(-170 + -1 * 8804 + 25 * 359)));
  }
  return t;
}
function Mi(t, i, e) {
  try {
    typeof t == "function" ? t(i) : t.current = i;
  } catch (n) {
    Z.__e(n, e);
  }
}
function Ai(t, i, e) {
  var n, o;
  if (Z.unmount && Z.unmount(t), (n = t.ref) && (n.current && n.current !== t.__e || Mi(n, null, i)), (n = t.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (r) {
        Z.__e(r, i);
      }
    n.base = n.__P = null, t.__c = void 0;
  }
  if (n = t.__k)
    for (o = 0; o < n.length; o++)
      n[o] && Ai(n[o], i, e || typeof t.type != "function");
  e || t.__e == null || _a(t.__e), t.__ = t.__e = t.__d = void (-10063 + -1 * -10063);
}
function g0(t, i, e) {
  return this.constructor(t, e);
}
function At(t, i, e) {
  var n, o, r, a;
  Z.__ && Z.__(t, i), o = (n = typeof e == "function") ? null : e && e.__k || i.__k, r = [], a = [], ji(i, t = (!n && e || i).__k = he(Fe, null, [t]), o || Zn, Zn, void (-785 * -7 + 2 * -4319 + 3143) !== i.ownerSVGElement, !n && e ? [e] : o ? null : i.firstChild ? On.call(i.childNodes) : null, r, !n && e ? e : o ? o.__e : i.firstChild, n, a), og(r, t, a);
}
function Ji(t, i) {
  At(t, i, Ji);
}
function Ui(t, i, e) {
  var n, o, r, a, g = at({}, t.props);
  for (r in t.type && t.type.defaultProps && (a = t.type.defaultProps), i)
    r == "key" ? n = i[r] : r == "ref" ? o = i[r] : g[r] = void (1 * 3429 + -1 * 3991 + 562) === i[r] && a !== void 0 ? a[r] : i[r];
  return arguments.length > -1 * -9893 + 9745 + -19636 * 1 && (g.children = arguments.length > 2964 + 1 * 5741 + -8702 ? On.call(arguments, -2769 + -137 * 41 + -12 * -699) : e), wn(t.type, g, n || t.key, o || t.ref, null);
}
function Qi(t, i) {
  var e = { __c: i = "__cC" + $a++, __: t, Consumer: function(n, o) {
    return n.children(o);
  }, Provider: function(n) {
    var o, r;
    return this.getChildContext || (o = [], (r = {})[i] = this, this.getChildContext = function() {
      return r;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && o.some(function(g) {
        g.__e = !0, di(g);
      });
    }, this.sub = function(a) {
      o.push(a);
      var g = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        o.splice(o.indexOf(a), 1), g && g.call(a);
      };
    }), n.children;
  } };
  return e.Provider.__ = e.Consumer.contextType = e;
}
On = qa.slice, Z = { __e: function(t, i, e, n) {
  for (var o, r, a; i = i.__; )
    if ((o = i.__c) && !o.__)
      try {
        if ((r = o.constructor) && r.getDerivedStateFromError != null && (o.setState(r.getDerivedStateFromError(t)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, n || {}), a = o.__d), a)
          return o.__E = o;
      } catch (g) {
        t = g;
      }
  throw t;
} }, Ua = 0, Qa = function(t) {
  return t != null && t.constructor == null;
}, We.prototype.setState = function(t, i) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = at({}, this.state), typeof t == "function" && (t = t(at({}, e), this.props)), t && at(e, t), t != null && this.__v && (i && this._sb.push(i), di(this));
}, We.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !(9067 + 1 * -6955 + 11 * -192), t && this.__h.push(t), di(this));
}, We.prototype.render = Fe, Bt = [], za = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ci = function(t, i) {
  return t.__v.__b - i.__v.__b;
}, uo.__r = 1 * 3617 + -15 * 477 + 3538, $a = 2 * -2792 + 3964 + 1620;
function zi() {
  return (zi = Object.assign ? Object.assign.bind() : function(t) {
    for (var i = 97 * 98 + 2214 + 11719 * -1; i < arguments.length; i++) {
      var e = arguments[i];
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }
    return t;
  }).apply(this, arguments);
}
var s0 = ["context", "children"];
function c0(t) {
  this.getChildContext = function() {
    return t.context;
  };
  var i = t.children, e = function(n, o) {
    if (n == null)
      return {};
    var r, a, g = {}, s = Object.keys(n);
    for (a = 1093 * 1 + 1 * 4551 + -4 * 1411; a < s.length; a++)
      o.indexOf(r = s[a]) >= 7583 * 1 + 20 * -262 + -3 * 781 || (g[r] = n[r]);
    return g;
  }(t, s0);
  return Ui(i, e);
}
function I0() {
  var t = {};
  t.detail = {}, t.bubbles = !(9534 + 73 * 75 + -5003 * 3), t.cancelable = !(-2417 * -4 + -9 * 702 + -3350);
  var i = new CustomEvent("_preact", t);
  this.dispatchEvent(i), this._vdom = he(c0, zi({}, this._props, { context: i.detail.context }), function e(n, o) {
    if (8933 + 1 * -8169 + -761 === n.nodeType)
      return n.data;
    if (-3979 * 1 + 1 * -4062 + 8042 !== n.nodeType)
      return null;
    var r = [], a = {}, g = 413 * 15 + -1471 + -4724, s = n.attributes, x = n.childNodes;
    for (g = s.length; g--; )
      s[g].name !== "slot" && (a[s[g].name] = s[g].value, a[ig(s[g].name)] = s[g].value);
    for (g = x.length; g--; ) {
      var C = e(x[g], null), u = x[g].slot;
      u ? a[u] = he(Mr, { name: u }, C) : r[g] = C;
    }
    var h = o ? he(Mr, null, r) : r;
    return he(o || n.nodeName.toLowerCase(), a, h);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Ji : At)(this._vdom, this._root);
}
function ig(t) {
  return t.replace(/-(\w)/g, function(i, e) {
    return e ? e.toUpperCase() : "";
  });
}
function x0(t, i, e) {
  if (this._vdom) {
    var n = {};
    n[t] = e = e ?? void (2279 + -43 * 53), n[ig(t)] = e, this._vdom = Ui(this._vdom, n), At(this._vdom, this._root);
  }
}
function l0() {
  At(this._vdom = null, this._root);
}
function Mr(t, i) {
  var e = this;
  return he("slot", zi({}, t, { ref: function(n) {
    n ? (e.ref = n, e._listener || (e._listener = function(o) {
      o.stopPropagation(), o.detail.context = i;
    }, n.addEventListener("_preact", e._listener))) : e.ref.removeEventListener("_preact", e._listener);
  } }));
}
function u0(t, i, e, n) {
  function o() {
    var r = Reflect.construct(HTMLElement, [], o);
    return r._vdomComponent = t, r._root = n && n.shadow ? r.attachShadow({ mode: n.mode || "open" }) : r, r;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = I0, o.prototype.attributeChangedCallback = x0, o.prototype.disconnectedCallback = l0, e = e || t.observedAttributes || Object.keys(t.propTypes || {}), o.observedAttributes = e, e.forEach(function(r) {
    Object.defineProperty(o.prototype, r, { get: function() {
      return this._vdom.props[r];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(r, null, a) : (this._props || (this._props = {}), this._props[r] = a, this.connectedCallback());
      var g = typeof a;
      a != null && g !== "string" && g !== "boolean" && g !== "number" || this.setAttribute(r, a);
    } });
  }), customElements.define(i || t.tagName || t.displayName || t.name, o);
}
var ye = function() {
  return ye = Object.assign || function(i) {
    for (var e, n = 1, o = arguments.length; n < o; n++) {
      e = arguments[n];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (i[r] = e[r]);
    }
    return i;
  }, ye.apply(this, arguments);
};
function tn(t, i, e) {
  if (e || arguments.length === 2)
    for (var n = 0, o = i.length, r; n < o; n++)
      (r || !(n in i)) && (r || (r = Array.prototype.slice.call(i, 0, n)), r[n] = i[n]);
  return t.concat(r || Array.prototype.slice.call(i));
}
function C0(t) {
  var i = Object.create(null);
  return function(e) {
    return i[e] === void 0 && (i[e] = t(e)), i[e];
  };
}
var d0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, A0 = C0(function(t) {
  return d0.test(t) || t.charCodeAt(-1 * 1753 + -4143 * 1 + 5896) === 3199 + -1 * -6023 + -3037 * 3 && t.charCodeAt(-4 * -51 + 487 * -3 + -74 * -17) === 1 * 185 + 7589 * 1 + 7664 * -1 && t.charCodeAt(-1110 * -1 + 1923 * 2 + -2 * 2477) < -11 * -432 + -1 * -7183 + -6 * 1974;
}), pt, _, ei, Jr, nn = 2 * -2069 + 2546 + 1592, rg = [], eo = [], Ur = Z.__b, Qr = Z.__r, zr = Z.diffed, $r = Z.__c, qr = Z.unmount;
function cn(t, i) {
  Z.__h && Z.__h(_, t, nn || i), nn = -4857 + 3513 * 1 + 1344;
  var e = {};
  e.__ = [], e.__h = [];
  var n = _.__H || (_.__H = e), o = {};
  return o.__V = eo, t >= n.__.length && n.__.push(o), n.__[t];
}
function Te(t) {
  return nn = -14508 + -1319 * -11, ag(gg, t);
}
function ag(t, i, e) {
  var n = cn(pt++, 2);
  if (n.t = t, !n.__c && (n.__ = [e ? e(i) : gg(void (4712 + -5 * -337 + -6397), i), function(g) {
    var s = n.__N ? n.__N[0] : n.__[0], x = n.t(s, g);
    s !== x && (n.__N = [x, n.__[4701 + 297 * -21 + 1537 * 1]], n.__c.setState({}));
  }], n.__c = _, !_.u)) {
    var o = function(g, s, x) {
      if (!n.__c.__H)
        return !0;
      var C = n.__c.__H.__.filter(function(h) {
        return h.__c;
      });
      if (C.every(function(h) {
        return !h.__N;
      }))
        return !r || r.call(this, g, s, x);
      var u = !(9966 * 1 + -2793 + -7172);
      return C.forEach(function(h) {
        if (h.__N) {
          var p = h.__[0];
          h.__ = h.__N, h.__N = void 0, p !== h.__[0] && (u = !0);
        }
      }), !(!u && n.__c.props === g) && (!r || r.call(this, g, s, x));
    };
    _.u = !0;
    var r = _.shouldComponentUpdate, a = _.componentWillUpdate;
    _.componentWillUpdate = function(g, s, x) {
      if (this.__e) {
        var C = r;
        r = void (-5078 + -2 * 1851 + 439 * 20), o(g, s, x), r = C;
      }
      a && a.call(this, g, s, x);
    }, _.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function Ce(t, i) {
  var e = cn(pt++, 3);
  !Z.__s && $i(e.__H, i) && (e.__ = t, e.i = i, _.__H.__h.push(e));
}
function Go(t, i) {
  var e = cn(pt++, 4);
  !Z.__s && $i(e.__H, i) && (e.__ = t, e.i = i, _.__h.push(e));
}
function ht(t) {
  return nn = 3183 * -1 + 11 * 505 + -2367, $e(function() {
    var i = {};
    return i.current = t, i;
  }, []);
}
function p0(t, i, e) {
  nn = 319 * 17 + -1787 + 22 * -165, Go(function() {
    return typeof t == "function" ? (t(i()), function() {
      return t(null);
    }) : t ? (t.current = i(), function() {
      return t.current = null;
    }) : void (1 * 83 + 4989 + -634 * 8);
  }, e == null ? e : e.concat(t));
}
function $e(t, i) {
  var e = cn(pt++, 7);
  return $i(e.__H, i) ? (e.__V = t(), e.i = i, e.__h = t, e.__V) : e.__;
}
function Co(t, i) {
  return nn = -4431 + -29 * -118 + -1 * -1017, $e(function() {
    return t;
  }, i);
}
function Zo(t) {
  var i = _.context[t.__c], e = cn(pt++, 2 * 1033 + -4311 + -161 * -14);
  return e.c = t, i ? (e.__ == null && (e.__ = !(-207 + -560 * -3 + 491 * -3), i.sub(_)), i.props.value) : t.__;
}
function pi(t, i) {
  Z.useDebugValue && Z.useDebugValue(i ? i(t) : t);
}
function h0() {
  var t = cn(pt++, 11);
  if (!t.__) {
    for (var i = _.__v; i !== null && !i.__m && i.__ !== null; )
      i = i.__;
    var e = i.__m || (i.__m = [0, 3665 * -2 + 1982 * -4 + 1 * 15258]);
    t.__ = "P" + e[-2345 + -469 * -5] + "-" + e[608 * 8 + -1 * -2913 + -7776]++;
  }
  return t.__;
}
function f0() {
  for (var t; t = rg.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(to), t.__H.__h.forEach(hi), t.__H.__h = [];
      } catch (i) {
        t.__H.__h = [], Z.__e(i, t.__v);
      }
}
Z.__b = function(t) {
  _ = null, Ur && Ur(t);
}, Z.__r = function(t) {
  Qr && Qr(t), pt = -23 * -5 + 360 * -16 + 5645;
  var i = (_ = t.__c).__H;
  i && (ei === _ ? (i.__h = [], _.__h = [], i.__.forEach(function(e) {
    e.__N && (e.__ = e.__N), e.__V = eo, e.__N = e.i = void (-5825 + -1 * -4919 + -906 * -1);
  })) : (i.__h.forEach(to), i.__h.forEach(hi), i.__h = [], pt = -1 * 7748 + 5862 + -46 * -41)), ei = _;
}, Z.diffed = function(t) {
  zr && zr(t);
  var i = t.__c;
  i && i.__H && (i.__H.__h.length && (-19 * -246 + -543 * -17 + 632 * -22 !== rg.push(i) && Jr === Z.requestAnimationFrame || ((Jr = Z.requestAnimationFrame) || m0)(f0)), i.__H.__.forEach(function(e) {
    e.i && (e.__H = e.i), e.__V !== eo && (e.__ = e.__V), e.i = void 0, e.__V = eo;
  })), ei = _ = null;
}, Z.__c = function(t, i) {
  i.some(function(e) {
    try {
      e.__h.forEach(to), e.__h = e.__h.filter(function(n) {
        return !n.__ || hi(n);
      });
    } catch (n) {
      i.some(function(o) {
        o.__h && (o.__h = []);
      }), i = [], Z.__e(n, e.__v);
    }
  }), $r && $r(t, i);
}, Z.unmount = function(t) {
  qr && qr(t);
  var i, e = t.__c;
  e && e.__H && (e.__H.__.forEach(function(n) {
    try {
      to(n);
    } catch (o) {
      i = o;
    }
  }), e.__H = void (-5273 + -1 * -5273), i && Z.__e(i, e.__v));
};
var _r = typeof requestAnimationFrame == "function";
function m0(t) {
  var i, e = function() {
    clearTimeout(n), _r && cancelAnimationFrame(i), setTimeout(t);
  }, n = setTimeout(e, 100);
  _r && (i = requestAnimationFrame(e));
}
function to(t) {
  var i = _, e = t.__c;
  typeof e == "function" && (t.__c = void (-145 * -59 + -2925 + 10 * -563), e()), _ = i;
}
function hi(t) {
  var i = _;
  t.__c = t.__(), _ = i;
}
function $i(t, i) {
  return !t || t.length !== i.length || i.some(function(e, n) {
    return e !== t[n];
  });
}
function gg(t, i) {
  return typeof i == "function" ? i(t) : i;
}
function sg(t, i) {
  for (var e in i)
    t[e] = i[e];
  return t;
}
function fi(t, i) {
  for (var e in t)
    if (e !== "__source" && !(e in i))
      return !(-944 * 1 + 109 * 47 + -4179);
  for (var n in i)
    if (n !== "__source" && t[n] !== i[n])
      return !(8443 + 1 * -6859 + -1584);
  return !(3 * 2292 + -57 * -113 + -13316);
}
function mi(t) {
  this.props = t;
}
function b0(t, i) {
  function e(o) {
    var r = this.props.ref, a = r == o.ref;
    return !a && r && (r.call ? r(null) : r.current = null), i ? !i(this.props, o) || !a : fi(this.props, o);
  }
  function n(o) {
    return this.shouldComponentUpdate = e, he(t, o);
  }
  return n.displayName = "Memo(" + (t.displayName || t.name) + ")", n.prototype.isReactComponent = !(13160 + 1880 * -7), n.__f = !(-1 * 1987 + 1969 + 6 * 3), n;
}
(mi.prototype = new We()).isPureReactComponent = !(14 * -597 + 26 * -97 + 10880), mi.prototype.shouldComponentUpdate = function(t, i) {
  return fi(this.props, t) || fi(this.state, i);
};
var ea = Z.__b;
Z.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), ea && ea(t);
};
var y0 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || -1 * -2711 + -7823 + 9023;
function cg(t) {
  function i(e) {
    var n = sg({}, e);
    return delete n.ref, t(n, e.ref || null);
  }
  return i.$$typeof = y0, i.render = i, i.prototype.isReactComponent = i.__f = !(3114 * 1 + 1504 * 2 + -6122), i.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", i;
}
var ta = function(t, i) {
  return t == null ? null : st(st(t).map(i));
}, v0 = { map: ta, forEach: ta, count: function(t) {
  return t ? st(t).length : 771 * 7 + 5715 + -11112;
}, only: function(t) {
  var i = st(t);
  if (i.length !== 1)
    throw "Children.only";
  return i[-4 * -1395 + 9187 + -14767];
}, toArray: st }, w0 = Z.__e;
Z.__e = function(t, i, e, n) {
  if (t.then) {
    for (var o, r = i; r = r.__; )
      if ((o = r.__c) && o.__c)
        return i.__e == null && (i.__e = e.__e, i.__k = e.__k), o.__c(t, i);
  }
  w0(t, i, e, n);
};
var na = Z.unmount;
function Ig(t, i, e) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), t.__c.__H = null), (t = sg({}, t)).__c != null && (t.__c.__P === e && (t.__c.__P = i), t.__c = null), t.__k = t.__k && t.__k.map(function(n) {
    return Ig(n, i, e);
  })), t;
}
function xg(t, i, e) {
  return t && e && (t.__v = null, t.__k = t.__k && t.__k.map(function(n) {
    return xg(n, i, e);
  }), t.__c && t.__c.__P === i && (t.__e && e.appendChild(t.__e), t.__c.__e = !0, t.__c.__P = e)), t;
}
function no() {
  this.__u = -3 * 829 + 5767 * -1 + -2 * -4127, this.t = null, this.__b = null;
}
function lg(t) {
  var i = t.__.__c;
  return i && i.__a && i.__a(t);
}
function B0(t) {
  var i, e, n;
  function o(r) {
    if (i || (i = t()).then(function(a) {
      e = a.default || a;
    }, function(a) {
      n = a;
    }), n)
      throw n;
    if (!e)
      throw i;
    return he(e, r);
  }
  return o.displayName = "Lazy", o.__f = !(-1 * 182 + -7 * 913 + 1 * 6573), o;
}
function mn() {
  this.u = null, this.o = null;
}
Z.unmount = function(t) {
  var i = t.__c;
  i && i.__R && i.__R(), i && -4693 + -844 * -2 + 3037 & t.__u && (t.type = null), na && na(t);
}, (no.prototype = new We()).__c = function(t, i) {
  var e = i.__c, n = this;
  n.t == null && (n.t = []), n.t.push(e);
  var o = lg(n.__v), r = !1, a = function() {
    r || (r = !(-4780 + 1 * 6979 + 2199 * -1), e.__R = null, o ? o(g) : g());
  };
  e.__R = a;
  var g = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var s = n.state.__a;
        n.__v.__k[3124 * 2 + -1438 + -185 * 26] = xg(s, s.__c.__P, s.__c.__O);
      }
      var x;
      for (n.setState({ __a: n.__b = null }); x = n.t.pop(); )
        x.forceUpdate();
    }
  };
  n.__u++ || -1 * -599 + -116 * -53 + 1343 * -5 & i.__u || n.setState({ __a: n.__b = n.__v.__k[5641 * 1 + 2319 + -7960] }), t.then(a, a);
}, no.prototype.componentWillUnmount = function() {
  this.t = [];
}, no.prototype.render = function(t, i) {
  if (this.__b) {
    if (this.__v.__k) {
      var e = document.createElement("div"), n = this.__v.__k[3432 + -1217 * 3 + 219].__c;
      this.__v.__k[0] = Ig(this.__b, e, n.__O = n.__P);
    }
    this.__b = null;
  }
  var o = i.__a && he(Fe, null, t.fallback);
  return o && (o.__u &= -(-1 * 2089 + 9052 + -385 * 18)), [he(Fe, null, i.__a ? null : t.children), o];
};
var oa = function(t, i, e) {
  if (++e[1579 + 3 * -95 + 1293 * -1] === e[8830 + 9703 * -1 + 873] && t.o.delete(i), t.props.revealOrder && (t.props.revealOrder[-1497 * 6 + -2195 + 11177] !== "t" || !t.o.size))
    for (e = t.u; e; ) {
      for (; e.length > -7 * 419 + 4846 + -1910 * 1; )
        e.pop()();
      if (e[1] < e[3 * 1789 + -5062 * 1 + 5 * -61])
        break;
      t.u = e = e[3258 + -4 * 814];
    }
};
function S0(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function G0(t) {
  var i = this, e = t.i;
  i.componentWillUnmount = function() {
    At(null, i.l), i.l = null, i.i = null;
  }, i.i && i.i !== e && i.componentWillUnmount(), i.l || (i.i = e, i.l = { nodeType: 1, parentNode: e, childNodes: [], appendChild: function(n) {
    this.childNodes.push(n), i.i.appendChild(n);
  }, insertBefore: function(n, o) {
    this.childNodes.push(n), i.i.appendChild(n);
  }, removeChild: function(n) {
    this.childNodes.splice(this.childNodes.indexOf(n) >>> 6810 + 6809 * -1, -1121 * 4 + 4977 + -492), i.i.removeChild(n);
  } }), At(he(S0, { context: i.context }, t.__v), i.l);
}
function Z0(t, i) {
  var e = {};
  e.__v = t, e.i = i;
  var n = he(G0, e);
  return n.containerInfo = i, n;
}
(mn.prototype = new We()).__a = function(t) {
  var i = this, e = lg(i.__v), n = i.o.get(t);
  return n[9262 + -842 * 11]++, function(o) {
    var r = function() {
      i.props.revealOrder ? (n.push(o), oa(i, t, n)) : o();
    };
    e ? e(r) : r();
  };
}, mn.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var i = st(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && i.reverse();
  for (var e = i.length; e--; )
    this.o.set(i[e], this.u = [3639 * -1 + -1 * 9403 + -1 * -13043, -1 * 4390 + -7108 + 5749 * 2, this.u]);
  return t.children;
}, mn.prototype.componentDidUpdate = mn.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(i, e) {
    oa(t, e, i);
  });
};
var ug = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 196350 + 136247 * -1, k0 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, K0 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, H0 = /[A-Z0-9]/g, O0 = typeof document < "u", W0 = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
};
function R0(t, i, e) {
  return i.__k == null && (i.textContent = ""), At(t, i), typeof e == "function" && e(), t ? t.__c : null;
}
function V0(t, i, e) {
  return Ji(t, i), typeof e == "function" && e(), t ? t.__c : null;
}
We.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(We.prototype, t, { configurable: !(-1 * -7293 + -3916 + -307 * 11), get: function() {
    return this["UNSAFE_" + t];
  }, set: function(i) {
    var e = {};
    e.configurable = !(8179 * 1 + -520 * -17 + -17019), e.writable = !0, e.value = i, Object.defineProperty(this, t, e);
  } });
});
var ia = Z.event;
function E0() {
}
function P0() {
  return this.cancelBubble;
}
function N0() {
  return this.defaultPrevented;
}
Z.event = function(t) {
  return ia && (t = ia(t)), t.persist = E0, t.isPropagationStopped = P0, t.isDefaultPrevented = N0, t.nativeEvent = t;
};
var oo = {};
oo.enumerable = !(881 * 9 + 50 * 46 + -5114 * 2), oo.configurable = !0, oo.get = function() {
  return this.class;
};
var qi, Y0 = oo, ra = Z.vnode;
Z.vnode = function(t) {
  typeof t.type == "string" && function(i) {
    var e = i.props, n = i.type, o = {};
    for (var r in e) {
      var a = e[r];
      if (!(r === "value" && "defaultValue" in e && a == null || O0 && r === "children" && n === "noscript" || r === "class" || r === "className")) {
        var g = r.toLowerCase();
        r === "defaultValue" && "value" in e && e.value == null ? r = "value" : r === "download" && !(8733 + -3079 * -3 + 2995 * -6) === a ? a = "" : g === "ondoubleclick" ? r = "ondblclick" : g !== "onchange" || n !== "input" && n !== "textarea" || W0(e.type) ? g === "onfocus" ? r = "onfocusin" : g === "onblur" ? r = "onfocusout" : K0.test(r) ? r = g : -(-9879 + -301 * 27 + 18007) === n.indexOf("-") && k0.test(r) ? r = r.replace(H0, "-$&").toLowerCase() : a === null && (a = void (-1 * 9901 + 863 * 10 + 41 * 31)) : g = r = "oninput", g === "oninput" && o[r = g] && (r = "oninputCapture"), o[r] = a;
      }
    }
    n == "select" && o.multiple && Array.isArray(o.value) && (o.value = st(e.children).forEach(function(s) {
      s.props.selected = -(6 * -1112 + -4 * 2153 + -1019 * -15) != o.value.indexOf(s.props.value);
    })), n == "select" && o.defaultValue != null && (o.value = st(e.children).forEach(function(s) {
      s.props.selected = o.multiple ? -(3 * 892 + 1 * -8953 + 6278) != o.defaultValue.indexOf(s.props.value) : o.defaultValue == s.props.value;
    })), e.class && !e.className ? (o.class = e.class, Object.defineProperty(o, "className", Y0)) : (e.className && !e.class || e.class && e.className) && (o.class = o.className = e.className), i.props = o;
  }(t), t.$$typeof = ug, ra && ra(t);
};
var aa = Z.__r;
Z.__r = function(t) {
  aa && aa(t), qi = t.__c;
};
var ga = Z.diffed;
Z.diffed = function(t) {
  ga && ga(t);
  var i = t.props, e = t.__e;
  e != null && t.type === "textarea" && "value" in i && i.value !== e.value && (e.value = i.value == null ? "" : i.value), qi = null;
};
var Cg = {};
Cg.readContext = function(t) {
  return qi.__n[t.__c].props.value;
};
var dg = {};
dg.current = Cg;
var Ag = {};
Ag.ReactCurrentDispatcher = dg;
var L0 = Ag;
function T0(t) {
  return he.bind(null, t);
}
function ko(t) {
  return !!t && t.$$typeof === ug;
}
function D0(t) {
  return ko(t) && t.type === Fe;
}
function F0(t) {
  return ko(t) ? Ui.apply(null, arguments) : t;
}
function X0(t) {
  return !!t.__k && (At(null, t), !(-1 * -9641 + 6 * -1327 + -1679 * 1));
}
function j0(t) {
  return t && (t.base || -3334 * -2 + 59 + 6726 * -1 === t.nodeType && t) || null;
}
var M0 = function(t, i) {
  return t(i);
}, J0 = function(t, i) {
  return t(i);
}, U0 = Fe;
function pg(t) {
  t();
}
function Q0(t) {
  return t;
}
function z0() {
  return [!(-4564 + -1 * 5272 + -1093 * -9), pg];
}
var $0 = Go, q0 = ko;
function _0(t, i) {
  var e = i(), n = Te({ h: { __: e, v: i } }), o = n[-196 * -41 + -3233 + -4803].h, r = n[-8870 + 321 * 5 + -7 * -1038];
  return Go(function() {
    o.__ = e, o.v = i, ti(o) && r({ h: o });
  }, [t, e, i]), Ce(function() {
    return ti(o) && r({ h: o }), t(function() {
      ti(o) && r({ h: o });
    });
  }, [t]), e;
}
function ti(t) {
  var i, e, n = t.v, o = t.__;
  try {
    var r = n();
    return !((i = o) === (e = r) && (1266 + 6 * -211 !== i || (-3440 + 1937 * 1 + 752 * 2) / i == (-2213 * 1 + 4057 + -1843) / e) || i != i && e != e);
  } catch {
    return !0;
  }
}
var Y = {};
Y.useState = Te, Y.useId = h0, Y.useReducer = ag, Y.useEffect = Ce, Y.useLayoutEffect = Go, Y.useInsertionEffect = $0, Y.useTransition = z0, Y.useDeferredValue = Q0, Y.useSyncExternalStore = _0, Y.startTransition = pg, Y.useRef = ht, Y.useImperativeHandle = p0, Y.useMemo = $e, Y.useCallback = Co, Y.useContext = Zo, Y.useDebugValue = pi, Y.version = "17.0.2", Y.Children = v0, Y.render = R0, Y.hydrate = V0, Y.unmountComponentAtNode = X0, Y.createPortal = Z0, Y.createElement = he, Y.createContext = Qi, Y.createFactory = T0, Y.cloneElement = F0, Y.createRef = o0, Y.Fragment = Fe, Y.isValidElement = ko, Y.isElement = q0, Y.isFragment = D0, Y.findDOMNode = j0, Y.Component = We, Y.PureComponent = mi, Y.memo = b0, Y.forwardRef = cg, Y.flushSync = J0, Y.unstable_batchedUpdates = M0, Y.StrictMode = U0, Y.Suspense = no, Y.SuspenseList = mn, Y.lazy = B0, Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L0;
var Ot = Y, ec = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function tc(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function nc(t) {
  return t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function oc(t) {
  return t && Object.prototype.hasOwnProperty.call(t, "default") && Object.keys(t).length === 1 ? t.default : t;
}
function ic(t) {
  if (t.__esModule)
    return t;
  var i = t.default;
  if (typeof i == "function") {
    var e = function n() {
      return this instanceof n ? Reflect.construct(i, arguments, this.constructor) : i.apply(this, arguments);
    };
    e.prototype = i.prototype;
  } else
    e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(e, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), e;
}
const rc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: ec,
  getAugmentedNamespace: ic,
  getDefaultExportFromCjs: tc,
  getDefaultExportFromNamespaceIfNotNamed: oc,
  getDefaultExportFromNamespaceIfPresent: nc
}, Symbol.toStringTag, { value: "Module" }));
var ac = function(i, e, n, o) {
  var r = n ? n.call(o, i, e) : void 0;
  if (r !== void (386 * 22 + -2317 + -6175))
    return !!r;
  if (i === e)
    return !0;
  if (typeof i != "object" || !i || typeof e != "object" || !e)
    return !1;
  var a = Object.keys(i), g = Object.keys(e);
  if (a.length !== g.length)
    return !1;
  for (var s = Object.prototype.hasOwnProperty.bind(e), x = 0; x < a.length; x++) {
    var C = a[x];
    if (!s(C))
      return !1;
    var u = i[C], h = e[C];
    if (r = n ? n.call(o, u, h, C) : void (953 * -8 + 1 * -5366 + -866 * -15), r === !1 || r === void 0 && u !== h)
      return !1;
  }
  return !0;
};
const gc = rc.getDefaultExportFromCjs(ac);
var q = "-ms-", Bn = "-moz-", Q = "-webkit-", hg = "comm", Ko = "rule", _i = "decl", sc = "@import", fg = "@keyframes", cc = "@layer", Ic = Math.abs, er = String.fromCharCode, bi = Object.assign;
function xc(t, i) {
  return xe(t, -21 * -17 + 3 * -2041 + 5766) ^ -172 * -11 + 109 * -37 + 2186 ? (((i << 519 * -1 + 1124 * -2 + 1 * 2769 ^ xe(t, 8483 + 1 * -8483)) << 3040 + -14 * 217 ^ xe(t, 1)) << -4516 + -25 * -183 + 1 * -57 ^ xe(t, 2)) << 2 ^ xe(t, -2967 + -2 * 4451 + 11872) : 4587 + -11 * -275 + 3806 * -2;
}
function mg(t) {
  return t.trim();
}
function rt(t, i) {
  return (t = i.exec(t)) ? t[-1 * 923 + -9140 + 10063] : t;
}
function T(t, i, e) {
  return t.replace(i, e);
}
function io(t, i) {
  return t.indexOf(i);
}
function xe(t, i) {
  return t.charCodeAt(i) | 2998 + -1 * 2261 + -1 * 737;
}
function on(t, i, e) {
  return t.slice(i, e);
}
function Qe(t) {
  return t.length;
}
function bg(t) {
  return t.length;
}
function bn(t, i) {
  return i.push(t), t;
}
function lc(t, i) {
  return t.map(i).join("");
}
function sa(t, i) {
  return t.filter(function(e) {
    return !rt(e, i);
  });
}
var Ho = 337 * 11 + -512 * -7 + -7290, rn = 4256 + -37 * 115, yg = -1 * -6334 + -3460 * 1 + -6 * 479, Ve = -1 * 4196 + 345 * -27 + -1 * -13511, ge = -514 * -16 + -17 * 331 + -49 * 53, In = "";
function Oo(t, i, e, n, o, r, a, g) {
  var s = {};
  return s.value = t, s.root = i, s.parent = e, s.type = n, s.props = o, s.children = r, s.line = Ho, s.column = rn, s.length = a, s.return = "", s.siblings = g, s;
}
function xt(t, i) {
  return bi(Oo("", null, null, "", null, null, 29 * -10 + -2311 * 1 + 2601, t.siblings), t, { length: -t.length }, i);
}
function Mt(t) {
  for (; t.root; )
    t = xt(t.root, { children: [t] });
  bn(t, t.siblings);
}
function uc() {
  return ge;
}
function Cc() {
  return ge = Ve > 2968 + 463 * -2 + 2 * -1021 ? xe(In, --Ve) : -9962 + -3209 * 2 + -52 * -315, rn--, ge === -58 * 74 + -8268 + 12570 && (rn = -4595 + 1069 * -1 + 5665, Ho--), ge;
}
function De() {
  return ge = Ve < yg ? xe(In, Ve++) : -14844 + -4948 * -3, rn++, ge === 49 * 3 + -71 * -10 + 77 * -11 && (rn = -1 * -6983 + -1211 + 1 * -5771, Ho++), ge;
}
function kt() {
  return xe(In, Ve);
}
function ro() {
  return Ve;
}
function Wo(t, i) {
  return on(In, t, i);
}
function yi(t) {
  switch (t) {
    case 16 * 188 + -5 * -901 + -7513:
    case -4416 + 3386 * 2 + -2347:
    case -8 * 874 + 4262 * 1 + 2740:
    case 8859 + 4423 * -2:
    case -2124 * 1 + 2202 * 1 + 46 * -1:
      return -3810 + -5 * -858 + -5 * 95;
    case -2321 * 3 + 79 * -34 + -9682 * -1:
    case 2 * 1883 + -4303 * -1 + -8026:
    case -9354 + -1 * -9398:
    case 6 * -842 + 4508 + 591:
    case -52 * -33 + -9909 + 8255 * 1:
    case 64:
    case 126:
    case 1816 + -1 * 1757:
    case 1 * -3683 + -6390 + -4 * -2549:
    case -18 * 197 + -1 * -7257 + -3586:
      return 1 * 2591 + -2 * 4714 + 6841;
    case -103 * -94 + -4370 + -5254:
      return 6842 + 977 * -7;
    case -1 * -7886 + -5628 + -2224:
    case -12 * -346 + -8439 + 4326:
    case -2633 * 2 + 1136 + -1 * -4170:
    case -6960 + 87 * 104 + -1997:
      return 19 * -311 + -3 * 2557 + 13582 * 1;
    case 41:
    case 7338 + -23 * 315:
      return -3 * -1731 + -4063 + 1 * -1129;
  }
  return -9842 + 74 * 133;
}
function dc(t) {
  return Ho = rn = 471 + -1930 * -1 + -480 * 5, yg = Qe(In = t), Ve = 967 + -9554 * 1 + 8587, [];
}
function Ac(t) {
  return In = "", t;
}
function ni(t) {
  return mg(Wo(Ve - (-1 * 6196 + 9731 + 62 * -57), vi(t === -5 * 1775 + -784 + 9750 ? t + (-1 * -9124 + -3147 + -5 * 1195) : t === 1748 + -6079 * 1 + 4371 ? t + 1 : t)));
}
function pc(t) {
  for (; (ge = kt()) && ge < 4250 + -2 * -4413 + -1 * 13043; )
    De();
  return yi(t) > 7221 + -43 * 159 + -382 || yi(ge) > 3 * -2594 + 5119 * 1 + -62 * -43 ? "" : " ";
}
function hc(t, i) {
  for (; --i && De() && !(ge < 2915 * 1 + -3 * -880 + -5507 || ge > 102 || ge > 57 && ge < -5888 + -1096 * 1 + 1007 * 7 || ge > 9812 + -1224 * -1 + -5483 * 2 && ge < -54 + 2 * -3334 + -6819 * -1); )
    ;
  return Wo(t, ro() + (i < -2398 + -601 * -4 && kt() == 2 * -310 + 1163 * 7 + -7489 && De() == 32));
}
function vi(t) {
  for (; De(); )
    switch (ge) {
      case t:
        return Ve;
      case -8941 + -1 * -9859 + -884:
      case 39:
        t !== -6358 + -2032 * 2 + 1307 * 8 && t !== 39 && vi(ge);
        break;
      case -24 * -215 + -8595 + 3475:
        t === 3517 * -1 + -6710 + 10268 && vi(t);
        break;
      case -4544 + -122 * -38:
        De();
        break;
    }
  return Ve;
}
function fc(t, i) {
  for (; De() && t + ge !== 17 * -337 + 2220 + 3556 + (-11 * 526 + -8450 + 14246); )
    if (t + ge === -12929 + 763 * 17 + (-8696 * -1 + 4875 + -13529 * 1) && kt() === 147 * 41 + -123 * -41 + 1 * -11023)
      break;
  return "/*" + Wo(i, Ve - 1) + "*" + er(t === -9086 * -1 + -6109 + -2930 ? t : De());
}
function mc(t) {
  for (; !yi(kt()); )
    De();
  return Wo(t, Ve);
}
function bc(t) {
  return Ac(ao("", null, null, null, [""], t = dc(t), 2735 + -3466 * -2 + 1 * -9667, [9391 * 1 + -216 * 1 + 5 * -1835], t));
}
function ao(t, i, e, n, o, r, a, g, s) {
  for (var x = 0, C = 1 * 5233 + -89 * 5 + 684 * -7, u = a, h = 6961 + 5 * -1261 + 41 * -16, p = -9 * -196 + -1751 + -13, v = 1051 * -2 + -1065 + -3167 * -1, E = 283 * -13 + -1454 + -5134 * -1, B = 1, k = 42 + -2498 * -1 + -2539 * 1, K = 8 * 12 + 9282 + -9378, G = "", F = o, L = r, X = n, O = G; B; )
    switch (v = K, K = De()) {
      case 778 + -1 * -4112 + -4850:
        if (v != 108 && xe(O, u - (6 * 1637 + -1 * 6971 + -2850)) == -5 * 792 + 7245 + -3227) {
          io(O += T(ni(K), "&", "&\f"), "&\f") != -(1 * 9514 + -6485 + -3028) && (k = -(-6717 + -1019 * 2 + 8756));
          break;
        }
      case -1 * 3701 + 2468 + 1267:
      case 1 * 9064 + -197 * -4 + -9813:
      case 6 * 797 + -1 * -3529 + -8220:
        O += ni(K);
        break;
      case 9:
      case -2309 + 1 * 2319:
      case 934 * 10 + -3 * 311 + -8394:
      case -1 * -8276 + -1 * 6357 + -37 * 51:
        O += pc(v);
        break;
      case 1533 + 11 * -131:
        O += hc(ro() - (15418 + -1 * 15417), 53 * 15 + -2 * -2397 + 2791 * -2);
        continue;
      case 1 * -6583 + -1 * 5804 + 12434:
        switch (kt()) {
          case -316 * -3 + 2098 * 3 + -160 * 45:
          case -1 * -5851 + -6705 + -1 * -901:
            bn(yc(fc(De(), ro()), i, e, s), s);
            break;
          default:
            O += "/";
        }
        break;
      case (281 * 16 + 389 + -2 * 2381) * E:
        g[x++] = Qe(O) * k;
      case (-2385 + 251 * 10) * E:
      case -8942 + 1 * 5513 + -2 * -1744:
      case -8873 + 1 * 6971 + 6 * 317:
        switch (K) {
          case -1 * -4099 + 146 * 14 + -1 * 6143:
          case -9556 + -7507 * 1 + 17188:
            B = -1 * 6271 + -1254 + 7525 * 1;
          case -1094 * -5 + -9884 + 71 * 63 + C:
            k == -(-922 * 4 + -1 * -4264 + -575) && (O = T(O, /\f/g, "")), p > 0 && Qe(O) - u && bn(p > 32 ? Ia(O + ";", n, e, u - (8381 * -1 + -8200 + 16582 * 1), s) : Ia(T(O, " ", "") + ";", n, e, u - (11164 + -1 * 11162), s), s);
            break;
          case 2387 + -291 * 8:
            O += ";";
          default:
            if (bn(X = ca(O, i, e, x, C, o, g, G, F = [], L = [], u, r), r), K === -4488 + -3 * -1537)
              if (C === 0)
                ao(O, i, X, X, F, r, u, g, L);
              else
                switch (h === 99 && xe(O, 3902 + -1 * 6134 + -745 * -3) === 9702 + 1199 * -8 ? 1 * -2279 + -7380 + -3253 * -3 : h) {
                  case -5883 + 1 * -9197 + 15180:
                  case -8983 + -1 * -9091:
                  case 20 * -303 + 43 * -44 + 8061:
                  case -311 * -23 + -9 * 1018 + 2124:
                    ao(t, X, X, n && bn(ca(t, X, X, -3577 * -1 + 8645 + -12222, -941 * 1 + -7 * -10 + 1 * 871, o, g, G, o, F = [], u, L), L), o, L, u, g, n ? F : L);
                    break;
                  default:
                    ao(O, X, X, X, [""], L, -133 + 7 * 19, g, L);
                }
        }
        x = C = p = 1 * 3323 + -2170 + 1 * -1153, E = k = -11287 + 136 * 83, G = O = "", u = a;
        break;
      case 6023 + 3141 * 3 + 4 * -3847:
        u = 8096 + 236 * 14 + -11399 + Qe(O), p = v;
      default:
        if (E < 4457 * -1 + -100 + 4558) {
          if (K == -344 + -1 * -467)
            --E;
          else if (K == 1425 + 25 * -52 && E++ == 1437 * -5 + 3364 * -1 + -11 * -959 && Cc() == -4441 + -1 * -3868 + -349 * -2)
            continue;
        }
        switch (O += er(K), K * E) {
          case 191 * 16 + 6764 + -9782:
            k = C > -2 * 3583 + -679 * 11 + 14635 ? -3 * 2505 + 7237 + 279 : (O += "\f", -(-61 * -65 + 1 * 6040 + 2 * -5002));
            break;
          case 44:
            g[x++] = (Qe(O) - (-12 * 295 + 2877 + 664)) * k, k = -5157 + -29 * 267 + 1 * 12901;
            break;
          case -1 * -3222 + -4257 + 7 * 157:
            kt() === 5171 + 1 * 8429 + -5 * 2711 && (O += ni(De())), h = kt(), C = u = Qe(G = O += mc(ro())), K++;
            break;
          case 3090 + 10 * -186 + 1185 * -1:
            v === -3134 + -1 * -9566 + 2129 * -3 && Qe(O) == 1857 + -1099 * -1 + -2954 && (E = -5966 + 38 * 157);
        }
    }
  return r;
}
function ca(t, i, e, n, o, r, a, g, s, x, C, u) {
  for (var h = o - 1, p = o === 0 ? r : [""], v = bg(p), E = -2232 * -3 + 102 * 4 + -7104, B = -9721 + -753 * -7 + 4450 * 1, k = 2027 * 2 + -1529 + 2525 * -1; E < n; ++E)
    for (var K = 11011 + 847 * -13, G = on(t, h + (-8370 + 361 * 7 + 5844 * 1), h = Ic(B = a[E])), F = t; K < v; ++K)
      (F = mg(B > -4221 + -63 * -67 ? p[K] + " " + G : T(G, /&\f/g, p[K]))) && (s[k++] = F);
  return Oo(t, i, e, o === 8863 * -1 + 635 * 2 + -2531 * -3 ? Ko : g, s, x, C, u);
}
function yc(t, i, e, n) {
  return Oo(t, i, e, hg, er(uc()), on(t, 2, -(5 * 1793 + -1 * 2342 + -6621)), 6416 + 19 * -92 + -1556 * 3, n);
}
function Ia(t, i, e, n, o) {
  return Oo(t, i, e, _i, on(t, -7081 + 1 * 3139 + 1314 * 3, n), on(t, n + (-5349 + 5 * 915 + -155 * -5), -(2521 + -1719 * -3 + -7677)), n, o);
}
function vg(t, i, e) {
  switch (xc(t, i)) {
    case 142 * -71 + 1166 * -8 + -24513 * -1:
      return Q + "print-" + t + t;
    case -1878 * -1 + -9041 + -12900 * -1:
    case -3913 + 302 * -27 + 16268:
    case 9702 + 3 * -1627 + -1644:
    case -1 * -6499 + 707 + -343 * 11:
    case -6368 + -145 * 65 + 1 * 17434:
    case 1 * -594 + -8914 + 13965:
    case -2743 + 3 * -1895 + -97 * -117:
    case 5572:
    case 1 * -11243 + -21 * 593 + 30052:
    case 5844:
    case -7921 + 6218 * -1 + -5 * -3466:
    case -1665 + -15 * -554:
    case 3005:
    case 2 * 4139 + 3 * 2221 + -8550:
    case 1 * 9787 + -1008 * 4 + 4 * 31:
    case 5623:
    case -9925 * -1 + -6 * 1519 + 1331 * 4:
    case -766 + 691 * -5 + -5 * -1764:
    case 3889 + -74 * 71 + 6220:
    case -8006 + 2537 * -1 + 157 * 94:
    case 6650 + -1 * 261:
    case 7605 + -125 * -8 + -3496:
    case -37 * 62 + 89 * 17 + -439 * -14:
    case 5621:
    case 9052 + 8 * 972 + -12999:
      return Q + t + t;
    case -3311 + -1 * -245 + 5 * 1571:
      return Bn + t + t;
    case -1018 + 2 * 131 + 6105:
    case 2205 + -1 * -2041:
    case -1 * 3617 + 1930 + 6497:
    case 5851 * 2 + 4742 * -1 + 2 * 4:
    case -1457 + -587 * -13 + -3418:
      return Q + t + Bn + t + q + t + t;
    case 3465 + 1 * 3866 + -1395:
      switch (xe(t, i + (9534 + -2589 * -3 + -665 * 26))) {
        case 114:
          return Q + t + q + T(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        case -2305 + -1 * -2413:
          return Q + t + q + T(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        case -9 * -411 + 4549 + -8203:
          return Q + t + q + T(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    case 369 * -29 + -937 + 9233 * 2:
    case 2033 + 3 * 745:
    case 4158 + 35 * -79 + 1510:
      return Q + t + q + t + t;
    case -658 + 1 * 6823:
      return Q + t + q + "flex-" + t + t;
    case 907 * 5 + -4560 + 5212:
      return Q + t + T(t, /(\w+).+(:[^]+)/, Q + "box-$1$2" + q + "flex-$1$2") + t;
    case 926 * 5 + 106 * -1 + 1 * 919:
      return Q + t + q + "flex-item-" + T(t, /flex-|-self/g, "") + (rt(t, /flex-|baseline/) ? "" : q + "grid-row-" + T(t, /flex-|-self/g, "")) + t;
    case 4675:
      return Q + t + q + "flex-line-pack" + T(t, /align-content|flex-|-self/g, "") + t;
    case -1285 * 6 + 6833 * 1 + 6425:
      return Q + t + q + T(t, "shrink", "negative") + t;
    case 3 * 1259 + -1 * 2595 + 4110:
      return Q + t + q + T(t, "basis", "preferred-size") + t;
    case -8771 + 14831 * 1:
      return Q + "box-" + T(t, "-grow", "") + Q + t + q + T(t, "grow", "positive") + t;
    case -6541 + -398 * 5 + -5 * -2617:
      return Q + T(t, /([^-])(transform)/g, "$1" + Q + "$2") + t;
    case -587 * -1 + -1 * 8526 + -2 * -7063:
      return T(T(T(t, /(zoom-|grab)/, Q + "$1"), /(image-set)/, Q + "$1"), t, "") + t;
    case -3 * -1723 + 1 * 817 + -491:
    case 3959:
      return T(t, /(image-set\([^]*)/, Q + "$1$`$1");
    case 3 * -3251 + 6639 + 8082:
      return T(T(t, /(.+:)(flex-)?(.*)/, Q + "box-pack:$3" + q + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Q + t + t;
    case 6244 + -1627 * -3 + -1 * 6925:
      if (!rt(t, /flex-|baseline/))
        return q + "grid-column-align" + on(t, i) + t;
      break;
    case 10 * -153 + -8294 + 12416:
    case -7642 + 110 * -37 + -2512 * -6:
      return q + T(t, "template-", "") + t;
    case -51 + 26 * 193 + -583:
    case -103 * -25 + -4620 + -17 * -333:
      return e && e.some(function(n, o) {
        return i = o, rt(n.props, /grid-\w+-end/);
      }) ? ~io(t + (e = e[i].value), "span") ? t : q + T(t, "-start", "") + t + q + "grid-row-span:" + (~io(e, "span") ? rt(e, /\d+/) : +rt(e, /\d+/) - +rt(t, /\d+/)) + ";" : q + T(t, "-start", "") + t;
    case 2239 * 2 + -2652 + -2 * -1535:
    case 2881 * 1 + 2 * -1933 + 5113:
      return e && e.some(function(n) {
        return rt(n.props, /grid-\w+-start/);
      }) ? t : q + T(T(t, "-end", "-span"), "span ", "") + t;
    case 1 * -803 + 2 * 4037 + -3176:
    case -1 * 9645 + -1 * 7071 + 20299:
    case -31 * -36 + -70 * 82 + 2173 * 4:
    case -2 * 1673 + 6154 + -276:
      return T(t, /(.+)-inline(.+)/, Q + "$1$2") + t;
    case -1 * -13111 + 9293 + -38 * 376:
    case 22373 + 62 * -247:
    case 5753:
    case 2127 + -2 * 61 + -1 * -3530:
    case -5 * 673 + 1197 + 7613:
    case -8474 + -1 * 2119 + 16294:
    case 1 * 6527 + 4931 * 1 + -6525:
    case 3860 + -7 * -487 + -2592:
    case -2510 + -8043 * -1:
    case -582 * -5 + -3737 + 827 * 8:
    case 1174 * 3 + -6540 + 1 * 8039:
    case 16 * -509 + 5649 + -363 * -20:
      if (Qe(t) - (-4195 * 2 + -5 * -466 + 6061) - i > -4958 * -1 + -113 * -47 + 311 * -33)
        switch (xe(t, i + (68 * -73 + -1 * 9649 + 14614))) {
          case 109:
            if (xe(t, i + 4) !== -2 * 3161 + -107 * 1 + 6474)
              break;
          case -5058 + -120 * -43:
            return T(t, /(.+:)(.+)-([^]+)/, "$1" + Q + "$2-$3$1" + Bn + (xe(t, i + (1432 + 22 * -296 + 13 * 391)) == 7531 + -220 * 4 + -3 * 2181 ? "$3" : "$2-$3")) + t;
          case 115:
            return ~io(t, "stretch") ? vg(T(t, "stretch", "fill-available"), i, e) + t : t;
        }
      break;
    case 4734 + 481 * 4 + 6 * -251:
    case 7549 + -1629 * 1:
      return T(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, r, a, g, s, x) {
        return q + o + ":" + r + x + (a ? q + o + "-span:" + (g ? s : +s - +r) + x : "") + t;
      });
    case 1677 + 2195 * 3 + 1 * -3313:
      if (xe(t, i + (3 * 2843 + 1857 * 3 + -14094 * 1)) === -2 * 1245 + -17 * 29 + 3104 * 1)
        return T(t, ":", ":" + Q) + t;
      break;
    case 6444:
      switch (xe(t, xe(t, -17 * 514 + -1 * -8311 + 441) === 154 * 1 + -8120 + 8011 ? 18 : -5247 + -1 * -9641 + 4383 * -1)) {
        case 534 + 9749 * -1 + 1 * 9335:
          return T(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + Q + (xe(t, -215 + 1 * 229) === -9802 + -977 * 9 + 18640 ? "inline-" : "") + "box$3$1" + Q + "$2$3$1" + q + "$2box$3") + t;
        case -3 * -4 + -1031 * -4 + -2 * 2018:
          return T(t, ":", ":" + q) + t;
      }
      break;
    case -469 + 11 * 937 + -4119:
    case 11 * 877 + 149 * -13 + -5063:
    case -6388 + 268 * 1 + 1 * 8255:
    case -13802 + 17729 * 1:
    case 4677 + -2 * 3364 + 2221 * 2:
      return T(t, "scroll-", "scroll-snap-") + t;
  }
  return t;
}
function Ao(t, i) {
  for (var e = "", n = 0; n < t.length; n++)
    e += i(t[n], n, t, i) || "";
  return e;
}
function vc(t, i, e, n) {
  switch (t.type) {
    case cc:
      if (t.children.length)
        break;
    case sc:
    case _i:
      return t.return = t.return || t.value;
    case hg:
      return "";
    case fg:
      return t.return = t.value + "{" + Ao(t.children, n) + "}";
    case Ko:
      if (!Qe(t.value = t.props.join(",")))
        return "";
  }
  return Qe(e = Ao(t.children, n)) ? t.return = t.value + "{" + e + "}" : "";
}
function wc(t) {
  var i = bg(t);
  return function(e, n, o, r) {
    for (var a = "", g = 3536 + -145 * 59 + 3 * 1673; g < i; g++)
      a += t[g](e, n, o, r) || "";
    return a;
  };
}
function Bc(t) {
  return function(i) {
    i.root || (i = i.return) && t(i);
  };
}
function Sc(t, i, e, n) {
  if (t.length > -(-82 * 20 + 5781 + -4140) && !t.return)
    switch (t.type) {
      case _i:
        t.return = vg(t.value, t.length, e);
        return;
      case fg:
        return Ao([xt(t, { value: T(t.value, "@", "@" + Q) })], n);
      case Ko:
        if (t.length)
          return lc(e = t.props, function(o) {
            switch (rt(o, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Mt(xt(t, { props: [T(o, /:(read-\w+)/, ":" + Bn + "$1")] }));
                var r = {};
                r.props = [o], Mt(xt(t, r)), bi(t, { props: sa(e, n) });
                break;
              case "::placeholder":
                Mt(xt(t, { props: [T(o, /:(plac\w+)/, ":" + Q + "input-$1")] })), Mt(xt(t, { props: [T(o, /:(plac\w+)/, ":" + Bn + "$1")] })), Mt(xt(t, { props: [T(o, /:(plac\w+)/, q + "input-$1")] }));
                var a = {};
                a.props = [o], Mt(xt(t, a)), bi(t, { props: sa(e, n) });
                break;
            }
            return "";
          });
    }
}
var N = {};
N.animationIterationCount = 1, N.aspectRatio = 1, N.borderImageOutset = 1, N.borderImageSlice = 1, N.borderImageWidth = 1, N.boxFlex = 1, N.boxFlexGroup = 1, N.boxOrdinalGroup = 1, N.columnCount = 1, N.columns = 1, N.flex = 1, N.flexGrow = 1, N.flexPositive = 1, N.flexShrink = 1, N.flexNegative = 1, N.flexOrder = 1, N.gridRow = 1, N.gridRowEnd = 1, N.gridRowSpan = 1, N.gridRowStart = 1, N.gridColumn = 1, N.gridColumnEnd = 1, N.gridColumnSpan = 1, N.gridColumnStart = 1, N.msGridRow = 1, N.msGridRowSpan = 1, N.msGridColumn = 1, N.msGridColumnSpan = 1, N.fontWeight = 1, N.lineHeight = 1, N.opacity = 1, N.order = 1, N.orphans = 1, N.tabSize = 1, N.widows = 1, N.zIndex = 1, N.zoom = 1, N.WebkitLineClamp = 1, N.fillOpacity = 1, N.floodOpacity = 1, N.stopOpacity = 1, N.strokeDasharray = 1, N.strokeDashoffset = 1, N.strokeMiterlimit = 1, N.strokeOpacity = 1, N.strokeWidth = 1;
var Gc = N, J = {}, Wt = typeof process < "u" && void (1899 * -3 + 8590 + -1 * 2893) !== J && (J.REACT_APP_SC_ATTR || J.SC_ATTR) || "data-styled", tr = typeof window < "u" && "HTMLElement" in window, Zc = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (-3901 + 1 * 5465 + -46 * 34) !== J && void (6396 + 13 * 467 + -13 * 959) !== J.REACT_APP_SC_DISABLE_SPEEDY && J.REACT_APP_SC_DISABLE_SPEEDY !== "" ? J.REACT_APP_SC_DISABLE_SPEEDY !== "false" && J.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (-4810 * 1 + -6732 + 11542) !== J && void (-246 * 21 + 2 * -2854 + -1 * -10874) !== J.SC_DISABLE_SPEEDY && J.SC_DISABLE_SPEEDY !== "" ? J.SC_DISABLE_SPEEDY !== "false" && J.SC_DISABLE_SPEEDY : J.NODE_ENV !== "production"), xa = /invalid hook call/i, Un = /* @__PURE__ */ new Set(), kc = function(t, i) {
  if (J.NODE_ENV !== "production") {
    var e = i ? ' with the id of "'.concat(i, '"') : "", n = "The component ".concat(t).concat(e, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var r = !0;
      console.error = function(a) {
        for (var g = [], s = 10 * -499 + 6533 + 771 * -2; s < arguments.length; s++)
          g[s - (-2 * -4956 + 1 * 8186 + 1 * -18097)] = arguments[s];
        xa.test(a) ? (r = !1, Un.delete(n)) : o.apply(void (2 * -3747 + 1563 + -1 * -5931), tn([a], g, !1));
      }, ht(), r && !Un.has(n) && (console.warn(n), Un.add(n));
    } catch (a) {
      xa.test(a.message) && Un.delete(n);
    } finally {
      console.error = o;
    }
  }
}, Ro = Object.freeze([]), an = Object.freeze({});
function Kc(t, i, e) {
  return void (7 * -292 + 16 * -222 + 5596) === e && (e = an), t.theme !== e.theme && t.theme || i || e.theme;
}
var wi = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Hc = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Oc = /(^-|-$)/g;
function la(t) {
  return t.replace(Hc, "-").replace(Oc, "");
}
var Wc = /(a)(d)/gi, ua = function(t) {
  return String.fromCharCode(t + (t > 25 ? 5829 + -2 * 2895 : 6337 * 1 + 6 * 440 + -8880));
};
function Bi(t) {
  var i, e = "";
  for (i = Math.abs(t); i > 5946 + -5894 * 1; i = i / (2566 + -3883 * -1 + -6397) | 4241 + -1 * 4241)
    e = ua(i % (1 * 1982 + -163 * -7 + -3071)) + e;
  return (ua(i % (1 * -4471 + 265 * -7 + 6378 * 1)) + e).replace(Wc, "$1-$2");
}
var oi, St = function(t, i) {
  for (var e = i.length; e; )
    t = (-2455 + 1 * -158 + 1 * 2646) * t ^ i.charCodeAt(--e);
  return t;
}, wg = function(t) {
  return St(-1873 * -3 + 10068 + -10306, t);
};
function Rc(t) {
  return Bi(wg(t) >>> -1779 * 1 + -275 * 19 + -103 * -68);
}
function Bg(t) {
  return J.NODE_ENV !== "production" && typeof t == "string" && t || t.displayName || t.name || "Component";
}
function ii(t) {
  return typeof t == "string" && (J.NODE_ENV === "production" || t.charAt(0) === t.charAt(3624 + 3 * 2657 + -11595).toLowerCase());
}
var He = {};
He.childContextTypes = !0, He.contextType = !0, He.contextTypes = !0, He.defaultProps = !0, He.displayName = !0, He.getDefaultProps = !0, He.getDerivedStateFromError = !0, He.getDerivedStateFromProps = !0, He.mixins = !0, He.propTypes = !0, He.type = !0;
var lt = {};
lt.name = !0, lt.length = !0, lt.prototype = !0, lt.caller = !0, lt.callee = !0, lt.arguments = !0, lt.arity = !0;
var wt = {};
wt.$$typeof = !0, wt.compare = !0, wt.defaultProps = !0, wt.displayName = !0, wt.propTypes = !0, wt.type = !0;
var Ut = {};
Ut.$$typeof = !0, Ut.render = !0, Ut.defaultProps = !0, Ut.displayName = !0, Ut.propTypes = !0;
var Sg = typeof Symbol == "function" && Symbol.for, Gg = Sg ? Symbol.for("react.memo") : -68587 * -1 + -106863 + -98391 * -1, Vc = Sg ? Symbol.for("react.forward_ref") : -7346 + 1631 * 16 + -1 * -41362, Ec = He, Pc = lt, Zg = wt, Nc = ((oi = {})[Vc] = Ut, oi[Gg] = Zg, oi);
function Ca(t) {
  return ("type" in (i = t) && i.type.$$typeof) === Gg ? Zg : "$$typeof" in t ? Nc[t.$$typeof] : Ec;
  var i;
}
var Yc = Object.defineProperty, Lc = Object.getOwnPropertyNames, da = Object.getOwnPropertySymbols, Tc = Object.getOwnPropertyDescriptor, Dc = Object.getPrototypeOf, Aa = Object.prototype;
function kg(t, i, e) {
  if (typeof i != "string") {
    if (Aa) {
      var n = Dc(i);
      n && n !== Aa && kg(t, n, e);
    }
    var o = Lc(i);
    da && (o = o.concat(da(i)));
    for (var r = Ca(t), a = Ca(i), g = -1834 + 43 * -101 + 6177; g < o.length; ++g) {
      var s = o[g];
      if (!(s in Pc || e && e[s] || a && s in a || r && s in r)) {
        var x = Tc(i, s);
        try {
          Yc(t, s, x);
        } catch {
        }
      }
    }
  }
  return t;
}
function gn(t) {
  return typeof t == "function";
}
function nr(t) {
  return typeof t == "object" && "styledComponentId" in t;
}
function Zt(t, i) {
  return t && i ? "".concat(t, " ").concat(i) : t || i || "";
}
function pa(t, i) {
  if (4464 + -9111 * -1 + -13575 === t.length)
    return "";
  for (var e = t[6 * -1348 + -5371 + 13459 * 1], n = 47 * 137 + 3035 + -9473; n < t.length; n++)
    e += i ? i + t[n] : t[n];
  return e;
}
function sn(t) {
  return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
}
function Si(t, i, e) {
  if (void (2 * 4229 + 22 * -233 + 28 * -119) === e && (e = !1), !e && !sn(t) && !Array.isArray(t))
    return i;
  if (Array.isArray(i))
    for (var n = -5080 * 1 + 9329 + -4249 * 1; n < i.length; n++)
      t[n] = Si(t[n], i[n]);
  else if (sn(i))
    for (var n in i)
      t[n] = Si(t[n], i[n]);
  return t;
}
function or(t, i) {
  var e = {};
  e.value = i, Object.defineProperty(t, "toString", e);
}
var Ie = {};
Ie[1] = `Cannot create styled-component for component: %s.

`, Ie[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, Ie[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, Ie[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, Ie[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, Ie[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, Ie[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', Ie[8] = `ThemeProvider: Please make your "theme" prop an object.

`, Ie[9] = "Missing document `<head>`\n\n", Ie[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, Ie[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, Ie[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", Ie[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, Ie[14] = `ThemeProvider: "theme" prop is required.

`, Ie[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", Ie[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, Ie[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, Ie[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var Fc = J.NODE_ENV !== "production" ? Ie : {};
function Xc() {
  for (var t = [], i = -9515 * -1 + 8639 + -18154; i < arguments.length; i++)
    t[i] = arguments[i];
  for (var e = t[13 * 507 + -6775 + 1 * 184], n = [], o = 71 * 31 + -7361 + 5161, r = t.length; o < r; o += 1 * -9041 + -28 + 9070)
    n.push(t[o]);
  return n.forEach(function(a) {
    e = e.replace(/%[a-z]/, a);
  }), e;
}
function xn(t) {
  for (var i = [], e = -69 * -137 + 6909 * 1 + -16361; e < arguments.length; e++)
    i[e - (927 * 1 + 805 * 4 + -2 * 2073)] = arguments[e];
  return J.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(i.length > 2951 * -1 + -149 + 310 * 10 ? " Args: ".concat(i.join(", ")) : "")) : new Error(Xc.apply(void (-13336 + 4 * 3334), tn([Fc[t]], i, !1)).trim());
}
var jc = function() {
  function t(i) {
    this.groupSizes = new Uint32Array(1743 + -1 * -4259 + -5490), this.length = 18370 + 17858 * -1, this.tag = i;
  }
  return t.prototype.indexOfGroup = function(i) {
    for (var e = 3466 + -33 * 234 + -14 * -304, n = 4918 * 1 + 416 + -762 * 7; n < i; n++)
      e += this.groupSizes[n];
    return e;
  }, t.prototype.insertRules = function(i, e) {
    if (i >= this.groupSizes.length) {
      for (var n = this.groupSizes, o = n.length, r = o; i >= r; )
        if ((r <<= 1935 + 2 * 2521 + -109 * 64) < 229 + 1 * -229)
          throw xn(-76 * -57 + -6210 + 1 * 1894, "".concat(i));
      this.groupSizes = new Uint32Array(r), this.groupSizes.set(n), this.length = r;
      for (var a = o; a < r; a++)
        this.groupSizes[a] = 1 * -3253 + 3803 * -1 + 7056;
    }
    for (var g = this.indexOfGroup(i + (5485 * 1 + -5753 * 1 + -1 * -269)), s = (a = 13 * 4 + -1 * -2741 + -1 * 2793, e.length); a < s; a++)
      this.tag.insertRule(g, e[a]) && (this.groupSizes[i]++, g++);
  }, t.prototype.clearGroup = function(i) {
    if (i < this.length) {
      var e = this.groupSizes[i], n = this.indexOfGroup(i), o = n + e;
      this.groupSizes[i] = -1718 * -2 + 9575 + 4337 * -3;
      for (var r = n; r < o; r++)
        this.tag.deleteRule(n);
    }
  }, t.prototype.getGroup = function(i) {
    var e = "";
    if (i >= this.length || 7649 + 772 * 3 + -9965 === this.groupSizes[i])
      return e;
    for (var n = this.groupSizes[i], o = this.indexOfGroup(i), r = o + n, a = o; a < r; a++)
      e += "".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);
    return e;
  }, t;
}(), go = /* @__PURE__ */ new Map(), po = /* @__PURE__ */ new Map(), so = -7192 + -1 * -302 + 6891, Qn = function(t) {
  if (go.has(t))
    return go.get(t);
  for (; po.has(so); )
    so++;
  var i = so++;
  if (J.NODE_ENV !== "production" && ((0 | i) < 2896 + 2 * -1448 || i > -1998241344 + 268547 * -3802 + -2046499431 * -2))
    throw xn(-1 * 5721 + 8363 + -13 * 202, "".concat(i));
  return go.set(t, i), po.set(i, t), i;
}, Mc = function(t, i) {
  so = i + (-6797 + 58 * 6 + 6450), go.set(t, i), po.set(i, t);
}, Jc = "style[".concat(Wt, "][").concat("data-styled-version", '="').concat("6.1.1", '"]'), Uc = new RegExp("^".concat(Wt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Qc = function(t, i, e) {
  for (var n, o = e.split(","), r = 1640 + -40 * 41, a = o.length; r < a; r++)
    (n = o[r]) && t.registerName(i, n);
}, zc = function(t, i) {
  for (var e, n = ((e = i.textContent) !== null && void (-8 * -491 + 1179 + -5107) !== e ? e : "").split(`/*!sc*/
`), o = [], r = 1 * 4557 + 7987 + -12544, a = n.length; r < a; r++) {
    var g = n[r].trim();
    if (g) {
      var s = g.match(Uc);
      if (s) {
        var x = 0 | parseInt(s[1], 10), C = s[-7180 * 1 + -7850 + 4 * 3758];
        53 * -73 + -1 * 9189 + 13058 !== x && (Mc(C, x), Qc(t, C, s[6861 + 2286 * -3]), t.getTag().insertRules(x, o)), o.length = 617 * -3 + -2 * 3532 + 8915;
      } else
        o.push(g);
    }
  }
};
function $c() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Kg = function(t) {
  var i = document.head, e = t || i, n = document.createElement("style"), o = function(g) {
    var s = Array.from(g.querySelectorAll("style[".concat(Wt, "]")));
    return s[s.length - (-8197 + -1 * 3919 + 1731 * 7)];
  }(e), r = void (462 * 14 + 1920 + -8388) !== o ? o.nextSibling : null;
  n.setAttribute(Wt, "active"), n.setAttribute("data-styled-version", "6.1.1");
  var a = $c();
  return a && n.setAttribute("nonce", a), e.insertBefore(n, r), n;
}, qc = function() {
  function t(i) {
    this.element = Kg(i), this.element.appendChild(document.createTextNode("")), this.sheet = function(e) {
      if (e.sheet)
        return e.sheet;
      for (var n = document.styleSheets, o = -3159 + -27 * -117, r = n.length; o < r; o++) {
        var a = n[o];
        if (a.ownerNode === e)
          return a;
      }
      throw xn(-9659 + 1047 * -1 + -1 * -10723);
    }(this.element), this.length = 863 * 9 + -1261 * -1 + -148 * 61;
  }
  return t.prototype.insertRule = function(i, e) {
    try {
      return this.sheet.insertRule(e, i), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.prototype.deleteRule = function(i) {
    this.sheet.deleteRule(i), this.length--;
  }, t.prototype.getRule = function(i) {
    var e = this.sheet.cssRules[i];
    return e && e.cssText ? e.cssText : "";
  }, t;
}(), _c = function() {
  function t(i) {
    this.element = Kg(i), this.nodes = this.element.childNodes, this.length = -1 * -6381 + -3335 + 2 * -1523;
  }
  return t.prototype.insertRule = function(i, e) {
    if (i <= this.length && i >= 8005 + -28 * -73 + 773 * -13) {
      var n = document.createTextNode(e);
      return this.element.insertBefore(n, this.nodes[i] || null), this.length++, !0;
    }
    return !1;
  }, t.prototype.deleteRule = function(i) {
    this.element.removeChild(this.nodes[i]), this.length--;
  }, t.prototype.getRule = function(i) {
    return i < this.length ? this.nodes[i].textContent : "";
  }, t;
}(), eI = function() {
  function t(i) {
    this.rules = [], this.length = 5837 + 1 * 4760 + -10597;
  }
  return t.prototype.insertRule = function(i, e) {
    return i <= this.length && (this.rules.splice(i, 1 * 8538 + 9304 + -11 * 1622, e), this.length++, !0);
  }, t.prototype.deleteRule = function(i) {
    this.rules.splice(i, 1 * 1900 + -112 * -43 + -6715 * 1), this.length--;
  }, t.prototype.getRule = function(i) {
    return i < this.length ? this.rules[i] : "";
  }, t;
}(), ha = tr, tI = { isServer: !tr, useCSSOMInjection: !Zc }, Hg = function() {
  function t(i, e, n) {
    void (6639 * -1 + 1 * 4178 + 1 * 2461) === i && (i = an), void (8 * -1089 + 4847 + 3865) === e && (e = {});
    var o = this;
    this.options = ye(ye({}, tI), i), this.gs = e, this.names = new Map(n), this.server = !!i.isServer, !this.server && tr && ha && (ha = !1, function(r) {
      for (var a = document.querySelectorAll(Jc), g = 150 * -1 + -9 * -883 + -7797, s = a.length; g < s; g++) {
        var x = a[g];
        x && x.getAttribute(Wt) !== "active" && (zc(r, x), x.parentNode && x.parentNode.removeChild(x));
      }
    }(this)), or(this, function() {
      return function(r) {
        for (var a = r.getTag(), g = a.length, s = "", x = function(u) {
          var h = function(k) {
            return po.get(k);
          }(u);
          if (void (6 * 615 + 7801 * 1 + 11491 * -1) === h)
            return "continue";
          var p = r.names.get(h), v = a.getGroup(u);
          if (void (3 * 859 + -8670 + 6093) === p || 8615 + 551 * 6 + -11921 === v.length)
            return "continue";
          var E = "".concat(Wt, ".g").concat(u, '[id="').concat(h, '"]'), B = "";
          void (-7 * 297 + -7845 + -4 * -2481) !== p && p.forEach(function(k) {
            k.length > -9232 + -5489 * 1 + 14721 * 1 && (B += "".concat(k, ","));
          }), s += "".concat(v).concat(E, '{content:"').concat(B, '"}').concat(`/*!sc*/
`);
        }, C = 25 * -272 + -547 * 1 + -31 * -237; C < g; C++)
          x(C);
        return s;
      }(o);
    });
  }
  return t.registerId = function(i) {
    return Qn(i);
  }, t.prototype.reconstructWithOptions = function(i, e) {
    return void (-9303 + 3 * 3101) === e && (e = !0), new t(ye(ye({}, this.options), i), this.gs, e && this.names || void 0);
  }, t.prototype.allocateGSInstance = function(i) {
    return this.gs[i] = (this.gs[i] || -607 * 1 + 4228 + -3621) + (-8098 * 1 + -8824 + 16923 * 1);
  }, t.prototype.getTag = function() {
    return this.tag || (this.tag = (i = function(e) {
      var n = e.useCSSOMInjection, o = e.target;
      return e.isServer ? new eI(o) : n ? new qc(o) : new _c(o);
    }(this.options), new jc(i)));
    var i;
  }, t.prototype.hasNameForId = function(i, e) {
    return this.names.has(i) && this.names.get(i).has(e);
  }, t.prototype.registerName = function(i, e) {
    if (Qn(i), this.names.has(i))
      this.names.get(i).add(e);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(e), this.names.set(i, n);
    }
  }, t.prototype.insertRules = function(i, e, n) {
    this.registerName(i, e), this.getTag().insertRules(Qn(i), n);
  }, t.prototype.clearNames = function(i) {
    this.names.has(i) && this.names.get(i).clear();
  }, t.prototype.clearRules = function(i) {
    this.getTag().clearGroup(Qn(i)), this.clearNames(i);
  }, t.prototype.clearTag = function() {
    this.tag = void (-5806 + 1 * 2372 + 2 * 1717);
  }, t;
}(), nI = /&/g, oI = /^\s*\/\/.*$/gm;
function Og(t, i) {
  return t.map(function(e) {
    return e.type === "rule" && (e.value = "".concat(i, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(i, " ")), e.props = e.props.map(function(n) {
      return "".concat(i, " ").concat(n);
    })), Array.isArray(e.children) && e.type !== "@keyframes" && (e.children = Og(e.children, i)), e;
  });
}
function Wg(t) {
  var i, e, n, o = t === void 0 ? an : t, r = o.options, a = void (909 + 5938 * -1 + 5029) === r ? an : r, g = o.plugins, s = void (-4852 * 1 + -3 * 67 + 1 * 5053) === g ? Ro : g, x = function(h, p, v) {
    return v === e || v.startsWith(e) && v.endsWith(e) && v.replaceAll(e, "").length > 699 * 5 + -2 * 3974 + 4453 * 1 ? ".".concat(i) : h;
  }, C = s.slice();
  C.push(function(h) {
    h.type === Ko && h.value.includes("&") && (h.props[0] = h.props[-34 * 269 + -1 * 944 + 10090].replace(nI, e).replace(n, x));
  }), a.prefix && C.push(Sc), C.push(vc);
  var u = function(h, p, v, E) {
    void (1 * 4519 + 1 * -4821 + 302) === p && (p = ""), void (-9701 + -537 * 14 + -17219 * -1) === v && (v = ""), void (-102 * 59 + -5 * -181 + 5113) === E && (E = "&"), i = E, e = p, n = new RegExp("\\".concat(e, "\\b"), "g");
    var B = h.replace(oI, ""), k = bc(v || p ? "".concat(v, " ").concat(p, " { ").concat(B, " }") : B);
    a.namespace && (k = Og(k, a.namespace));
    var K = [];
    return Ao(k, wc(C.concat(Bc(function(G) {
      return K.push(G);
    })))), K;
  };
  return u.hash = s.length ? s.reduce(function(h, p) {
    return p.name || xn(9613 + 1 * 5129 + -1 * 14727), St(h, p.name);
  }, -6595 + 2994 * 4).toString() : "", u;
}
var iI = new Hg(), Gi = Wg(), ir = Ot.createContext({ shouldForwardProp: void 0, styleSheet: iI, stylis: Gi });
ir.Consumer;
var rI = Ot.createContext(void (-2819 + 667 * -1 + 6 * 581));
function Zi() {
  return Zo(ir);
}
function aI(t) {
  var i = Te(t.stylisPlugins), e = i[0], n = i[5134 + 29 * -177], o = Zi().styleSheet, r = $e(function() {
    var C = o, u = {};
    return u.useCSSOMInjection = !1, t.sheet ? C = t.sheet : t.target && (C = C.reconstructWithOptions({ target: t.target }, !1)), t.disableCSSOMInjection && (C = C.reconstructWithOptions(u)), C;
  }, [t.disableCSSOMInjection, t.sheet, t.target, o]), a = $e(function() {
    var C = {};
    C.namespace = t.namespace, C.prefix = t.enableVendorPrefixes;
    var u = {};
    return u.options = C, u.plugins = e, Wg(u);
  }, [t.enableVendorPrefixes, t.namespace, e]);
  Ce(function() {
    gc(e, t.stylisPlugins) || n(t.stylisPlugins);
  }, [t.stylisPlugins]);
  var g = $e(function() {
    var C = {};
    return C.shouldForwardProp = t.shouldForwardProp, C.styleSheet = r, C.stylis = a, C;
  }, [t.shouldForwardProp, r, a]), s = {};
  s.value = g;
  var x = {};
  return x.value = a, Ot.createElement(ir.Provider, s, Ot.createElement(rI.Provider, x, t.children));
}
var fa = function() {
  function t(i, e) {
    var n = this;
    this.inject = function(o, r) {
      void (-1040 * 8 + -4683 + 1 * 13003) === r && (r = Gi);
      var a = n.name + r.hash;
      o.hasNameForId(n.id, a) || o.insertRules(n.id, a, r(n.rules, a, "@keyframes"));
    }, this.name = i, this.id = "sc-keyframes-".concat(i), this.rules = e, or(this, function() {
      throw xn(17 * -456 + -1139 + 8903, String(n.name));
    });
  }
  return t.prototype.getName = function(i) {
    return void (-1 * -9721 + 9283 * 1 + -19004) === i && (i = Gi), this.name + i.hash;
  }, t;
}(), gI = function(t) {
  return t >= "A" && t <= "Z";
};
function ma(t) {
  for (var i = "", e = 0; e < t.length; e++) {
    var n = t[e];
    if (4147 + 3041 * 1 + 7187 * -1 === e && n === "-" && t[-5053 * -1 + -1 * -5091 + -10144] === "-")
      return t;
    gI(n) ? i += "-" + n.toLowerCase() : i += n;
  }
  return i.startsWith("ms-") ? "-" + i : i;
}
var Rg = function(t) {
  return t == null || t === !1 || t === "";
}, Vg = function(t) {
  var i, e, n = [];
  for (var o in t) {
    var r = t[o];
    t.hasOwnProperty(o) && !Rg(r) && (Array.isArray(r) && r.isCss || gn(r) ? n.push("".concat(ma(o), ":"), r, ";") : sn(r) ? n.push.apply(n, tn(tn(["".concat(o, " {")], Vg(r), !1), ["}"], !1)) : n.push("".concat(ma(o), ": ").concat((i = o, (e = r) == null || typeof e == "boolean" || e === "" ? "" : typeof e != "number" || 3 * -1931 + 22 * -232 + 1 * 10897 === e || i in Gc || i.startsWith("--") ? String(e).trim() : "".concat(e, "px")), ";")));
  }
  return n;
};
function Kt(t, i, e, n) {
  if (Rg(t))
    return [];
  if (nr(t))
    return [".".concat(t.styledComponentId)];
  if (gn(t)) {
    if (!gn(r = t) || r.prototype && r.prototype.isReactComponent || !i)
      return [t];
    var o = t(i);
    return J.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof fa || sn(o) || o === null || console.error("".concat(Bg(t), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Kt(o, i, e, n);
  }
  var r;
  return t instanceof fa ? e ? (t.inject(e, n), [t.getName(n)]) : [t] : sn(t) ? Vg(t) : Array.isArray(t) ? Array.prototype.concat.apply(Ro, t.map(function(a) {
    return Kt(a, i, e, n);
  })) : [t.toString()];
}
function sI(t) {
  for (var i = 17 * 75 + 4397 * -2 + 7519; i < t.length; i += -27 * -87 + -3 * -2306 + -9266) {
    var e = t[i];
    if (gn(e) && !nr(e))
      return !1;
  }
  return !0;
}
var cI = wg("6.1.1"), II = function() {
  function t(i, e, n) {
    this.rules = i, this.staticRulesId = "", this.isStatic = J.NODE_ENV === "production" && (void (-7323 + -7 * -321 + 5076) === n || n.isStatic) && sI(i), this.componentId = e, this.baseHash = St(cI, e), this.baseStyle = n, Hg.registerId(e);
  }
  return t.prototype.generateAndInjectStyles = function(i, e, n) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(i, e, n) : "";
    if (this.isStatic && !n.hash)
      if (this.staticRulesId && e.hasNameForId(this.componentId, this.staticRulesId))
        o = Zt(o, this.staticRulesId);
      else {
        var r = pa(Kt(this.rules, i, e, n)), a = Bi(St(this.baseHash, r) >>> 0);
        if (!e.hasNameForId(this.componentId, a)) {
          var g = n(r, ".".concat(a), void 0, this.componentId);
          e.insertRules(this.componentId, a, g);
        }
        o = Zt(o, a), this.staticRulesId = a;
      }
    else {
      for (var s = St(this.baseHash, n.hash), x = "", C = -7037 + -227 * -31; C < this.rules.length; C++) {
        var u = this.rules[C];
        if (typeof u == "string")
          x += u, J.NODE_ENV !== "production" && (s = St(s, u));
        else if (u) {
          var h = pa(Kt(u, i, e, n));
          s = St(s, h + C), x += h;
        }
      }
      if (x) {
        var p = Bi(s >>> 0);
        e.hasNameForId(this.componentId, p) || e.insertRules(this.componentId, p, n(x, ".".concat(p), void (6114 + -2038 * 3), this.componentId)), o = Zt(o, p);
      }
    }
    return o;
  }, t;
}(), Eg = Ot.createContext(void (-14 * 287 + -6883 + 10901));
Eg.Consumer;
var ri = {}, ba = /* @__PURE__ */ new Set();
function xI(t, i, e) {
  var n = nr(t), o = t, r = !ii(t), a = i.attrs, g = void (-6360 + -6360 * -1) === a ? Ro : a, s = i.componentId, x = void (2022 + 1 * -2022) === s ? function(L, X) {
    var O = typeof L != "string" ? "sc" : la(L);
    ri[O] = (ri[O] || 0) + (1 * -8583 + -227 * -25 + 2909 * 1);
    var $ = "".concat(O, "-").concat(Rc("6.1.1" + O + ri[O]));
    return X ? "".concat(X, "-").concat($) : $;
  }(i.displayName, i.parentComponentId) : s, C = i.displayName, u = C === void 0 ? function(L) {
    return ii(L) ? "styled.".concat(L) : "Styled(".concat(Bg(L), ")");
  }(t) : C, h = i.displayName && i.componentId ? "".concat(la(i.displayName), "-").concat(i.componentId) : i.componentId || x, p = n && o.attrs ? o.attrs.concat(g).filter(Boolean) : g, v = i.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var E = o.shouldForwardProp;
    if (i.shouldForwardProp) {
      var B = i.shouldForwardProp;
      v = function(L, X) {
        return E(L, X) && B(L, X);
      };
    } else
      v = E;
  }
  var k = new II(e, h, n ? o.componentStyle : void (-193 * -19 + 3658 + -7325));
  function K(L, X) {
    return function(O, $, z) {
      var ee = O.attrs, fe = O.componentStyle, te = O.defaultProps, je = O.foldedComponentIds, me = O.styledComponentId, ae = O.target, de = Ot.useContext(Eg), ve = Zi(), Ee = O.shouldForwardProp || ve.shouldForwardProp;
      J.NODE_ENV !== "production" && pi(me);
      var we = function(ft, mt, Ge) {
        var Ze = {};
        Ze.className = void (633 * 10 + 9827 * -1 + 3497 * 1), Ze.theme = Ge;
        for (var et, Ne = ye(ye({}, mt), Ze), Nt = 17 * -462 + -1 * 1307 + 9161; Nt < ft.length; Nt += -1225 * 1 + 1 * -6907 + 8133) {
          var ke = gn(et = ft[Nt]) ? et(Ne) : et;
          for (var Ye in ke)
            Ne[Ye] = Ye === "className" ? Zt(Ne[Ye], ke[Ye]) : Ye === "style" ? ye(ye({}, Ne[Ye]), ke[Ye]) : ke[Ye];
        }
        return mt.className && (Ne.className = Zt(Ne.className, mt.className)), Ne;
      }(ee, $, Kc($, de, te) || an), Me = we.as || ae, Pe = {};
      for (var Ae in we)
        void (4157 + 2708 * 1 + -1373 * 5) === we[Ae] || Ae[168 * 38 + -5 * 1969 + 3461] === "$" || Ae === "as" || Ae === "theme" || (Ae === "forwardedAs" ? Pe.as = we.forwardedAs : Ee && !Ee(Ae, Me) || (Pe[Ae] = we[Ae], Ee || J.NODE_ENV !== "development" || A0(Ae) || ba.has(Ae) || !wi.has(Me) || (ba.add(Ae), console.warn('styled-components: it looks like an unknown prop "'.concat(Ae, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Pt = function(ft, mt) {
        var Ge = Zi(), Ze = ft.generateAndInjectStyles(mt, Ge.styleSheet, Ge.stylis);
        return J.NODE_ENV !== "production" && pi(Ze), Ze;
      }(fe, we);
      J.NODE_ENV !== "production" && O.warnTooManyClasses && O.warnTooManyClasses(Pt);
      var un = Zt(je, me);
      return Pt && (un += " " + Pt), we.className && (un += " " + we.className), Pe[ii(Me) && !wi.has(Me) ? "class" : "className"] = un, Pe.ref = z, he(Me, Pe);
    }(G, L, X);
  }
  K.displayName = u;
  var G = Ot.forwardRef(K), F = {};
  return F.attrs = !0, F.componentStyle = !0, F.displayName = !0, F.foldedComponentIds = !0, F.shouldForwardProp = !0, F.styledComponentId = !0, F.target = !0, G.attrs = p, G.componentStyle = k, G.displayName = u, G.shouldForwardProp = v, G.foldedComponentIds = n ? Zt(o.foldedComponentIds, o.styledComponentId) : "", G.styledComponentId = h, G.target = n ? o.target : t, Object.defineProperty(G, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(L) {
    this._foldedDefaultProps = n ? function(X) {
      for (var O = [], $ = 7090 + -206 * -46 + -16565; $ < arguments.length; $++)
        O[$ - (-9800 + 2 * 4426 + -1 * -949)] = arguments[$];
      for (var z = -13931 + -13931 * -1, ee = O; z < ee.length; z++)
        Si(X, ee[z], !0);
      return X;
    }({}, o.defaultProps, L) : L;
  } }), J.NODE_ENV !== "production" && (kc(u, h), G.warnTooManyClasses = /* @__PURE__ */ function(L, X) {
    var O = {}, $ = !1;
    return function(z) {
      if (!$ && (O[z] = !0, Object.keys(O).length >= 200)) {
        var ee = X ? ' with the id of "'.concat(X, '"') : "";
        console.warn("Over ".concat(1447 * 3 + -3638 + -503, " classes were generated for component ").concat(L).concat(ee, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), $ = !0, O = {};
      }
    };
  }(u, h)), or(G, function() {
    return ".".concat(G.styledComponentId);
  }), r && kg(G, t, F), G;
}
function ya(t, i) {
  for (var e = [t[-1 * 6947 + 4690 + -61 * -37]], n = -48 * 142 + 763 * 7 + -59 * -25, o = i.length; n < o; n += -3144 + 74 * -55 + 7215)
    e.push(i[n], t[n + (1094 * -8 + 1 * 6571 + 1 * 2182)]);
  return e;
}
var va = function(t) {
  var i = {};
  return i.isCss = !0, Object.assign(t, i);
};
function Pg(t) {
  for (var i = [], e = 2539 * 3 + -9433 + -1817 * -1; e < arguments.length; e++)
    i[e - (5804 * 1 + 538 * -14 + 1729 * 1)] = arguments[e];
  if (gn(t) || sn(t)) {
    var n = t;
    return va(Kt(ya(Ro, tn([n], i, !0))));
  }
  var o = t;
  return 8 * -649 + 9469 + -4277 === i.length && 1165 * -6 + 2 * 457 + 59 * 103 === o.length && typeof o[0] == "string" ? Kt(o) : va(Kt(ya(o, i)));
}
function ki(t, i, e) {
  if (void (7 * 1282 + -720 + -8254) === e && (e = an), !i)
    throw xn(6137 + -4133 * 1 + 2003 * -1, i);
  var n = function(o) {
    for (var r = [], a = 202 + -1 * 201; a < arguments.length; a++)
      r[a - 1] = arguments[a];
    return t(i, e, Pg.apply(void 0, tn([o], r, !1)));
  };
  return n.attrs = function(o) {
    return ki(t, i, ye(ye({}, e), { attrs: Array.prototype.concat(e.attrs, o).filter(Boolean) }));
  }, n.withConfig = function(o) {
    return ki(t, i, ye(ye({}, e), o));
  }, n;
}
var Ng = function(t) {
  return ki(xI, t);
}, ln = Ng;
wi.forEach(function(t) {
  ln[t] = Ng(t);
});
J.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var zn = "__sc-".concat(Wt, "__");
J.NODE_ENV !== "production" && J.NODE_ENV !== "test" && typeof window < "u" && (window[zn] || (window[zn] = -9602 + 1546 * -6 + -9439 * -2), 7188 * 1 + -478 * -10 + -3989 * 3 === window[zn] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[zn] += 3574 + -2572 * -1 + -6145);
const lI = ln.div`
  position: relative;
`, uI = ln.video`
  transform: ${(t) => t.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  width: 100%;
`;
class ne extends Error {
  constructor(e, n) {
    super(e);
    j(this, "cause");
    this.name = "AutoCaptureError", this.cause = n;
  }
  static logError(e) {
  }
  static fromCameraError(e) {
    if (this.logError(e), e instanceof ne)
      return e;
    let n;
    switch (e.name) {
      case "OverconstrainedError":
        n = "Minimum quality requirements are not met by your camera";
        break;
      case "NotReadableError":
      case "AbortError":
        n = "The webcam is already in use by another application";
        break;
      case "NotAllowedError":
        n = "To use your camera, you must allow permissions";
        break;
      case "NotFoundError":
        n = "There is no camera available to you";
        break;
      default:
        n = "An unknown camera error has occurred";
        break;
    }
    return new ne(n, e);
  }
  static fromError(e) {
    if (this.logError(e), e instanceof ne)
      return e;
    const n = "An unexpected error has occurred";
    return new ne(n);
  }
}
var co = ((t) => (t.CONTINUE_DETECTION = "continue-detection", t.SWITCH_CAMERA = "switch-camera", t.TOGGLE_MIRROR = "toggle-mirror", t))(co || {}), Yg = ((t) => (t.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", t.CONTROL = "document-auto-capture:control", t.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", t.DOCUMENT_DETECTION = "document-auto-capture:document-detection", t.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", t.STATE_CHANGED = "document-auto-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", t))(Yg || {}), gt = ((t) => (t.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", t.CONTROL = "face-auto-capture:control", t.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", t.FACE_DETECTION = "face-auto-capture:face-detection", t.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", t.STATE_CHANGED = "face-auto-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", t))(gt || {}), kn = ((t) => (t.ANIMATION_END = "magnifeye-auto-capture:animation-end", t.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", t))(kn || {}), CI = ((t) => (t.ANIMATION_END = "smile-auto-capture:animation-end", t.STATUS_CHANGED = "smile-auto-capture:status-changed", t))(CI || {});
const Ue = {};
Ue.CANDIDATE_SELECTION = "candidate_selection", Ue.FACE_TOO_CLOSE = "face_too_close", Ue.FACE_TOO_FAR = "face_too_far", Ue.FACE_CENTERING = "face_centering", Ue.FACE_NOT_PRESENT = "face_not_present", Ue.SHARPNESS_TOO_LOW = "sharpness_too_low", Ue.BRIGHTNESS_TOO_LOW = "brightness_too_low", Ue.BRIGHTNESS_TOO_HIGH = "brightness_too_high", Ue.DEVICE_PITCHED = "device_pitched";
const Le = Ue, it = {};
it.isPresent = Le.FACE_NOT_PRESENT, it.isNotPitched = Le.DEVICE_PITCHED, it.isNotSmall = Le.FACE_TOO_FAR, it.isNotLarge = Le.FACE_TOO_CLOSE, it.isNotOutOfBounds = Le.FACE_CENTERING, it.isNotDim = Le.BRIGHTNESS_TOO_LOW, it.isNotBright = Le.BRIGHTNESS_TOO_HIGH, it.isSharp = Le.SHARPNESS_TOO_LOW;
const dI = it, yn = {};
yn.LOADING = "LOADING", yn.ERROR = "ERROR", yn.WAITING = "WAITING", yn.RUNNING = "RUNNING";
const ze = yn;
var Oe = ((t) => (t.CLOSEUP = "CLOSEUP", t.DISTANT = "DISTANT", t.MIDDLE = "MIDDLE", t))(Oe || {});
const Lg = { ...ze };
Lg.DONE = "DONE";
const $t = Lg, Vo = Qi(void 0);
Vo.displayName = "AppStateContext";
function Tg() {
  const t = Zo(Vo);
  if (t === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return t;
}
const AI = Vo.Provider, Eo = Tg, pI = Tg;
class Dg extends We {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var e;
    const i = new ne("An unknown error has occurred");
    (e = this.context) == null || e.handleError(i);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var i;
    return ((i = this.context) == null ? void 0 : i.appState) === ze.ERROR ? null : this.props.children;
  }
}
j(Dg, "contextType", Vo);
const hI = ln.canvas`
  transform: ${(t) => t.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
var fI = 1323 + 3006 * 1 + -4329;
function se(t, i, e, n, o, r) {
  var a, g, s = {};
  for (g in i)
    g == "ref" ? a = i[g] : s[g] = i[g];
  var x = {};
  x.type = t, x.props = s, x.key = e, x.ref = a, x.__k = null, x.__ = null, x.__b = 0, x.__e = null, x.__d = void (-81 * 99 + 3043 + 4976), x.__c = null, x.constructor = void 0, x.__v = --fI, x.__i = -(482 + 37 * -267 + -254 * -37), x.__u = 0, x.__source = o, x.__self = r;
  var C = x;
  if (typeof t == "function" && (a = t.defaultProps))
    for (g in a)
      void (-1280 * -5 + 71 * -117 + -1 * -1907) === s[g] && (s[g] = a[g]);
  return Z.vnode && Z.vnode(C), C;
}
const mI = ln.div`
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
function bI() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const yI = cg(({
  detectionDetails: t,
  isImageMirror: i
}, e) => bI() ? (console.log(t), se(Fe, {
  children: [se(hI, {
    ref: e,
    $isImageMirror: i
  }), se(mI, {
    children: Object.entries(t).map(([n, o]) => se("div", {
      children: [n, ": ", se("strong", {
        children: o
      })]
    }, n))
  })]
})) : null), Fg = (t, i) => {
  const e = ht(i);
  Ce(() => {
    e.current = i;
  }, [i]), Ce(() => {
    const n = (o) => e.current(o);
    return document.addEventListener(t, n), () => {
      document.removeEventListener(t, n);
    };
  }, [t]);
};
function ho() {
  throw new Error("Cycle detected");
}
var vI = Symbol.for("preact-signals");
function rr() {
  if (_t > 1 * -2066 + 6 * 206 + 831)
    _t--;
  else {
    for (var t, i = !1; void (6 * -989 + -2939 + -467 * -19) !== Sn; ) {
      var e = Sn;
      for (Sn = void (1678 * 2 + -6565 + 3209), Ki++; void (-358 * 8 + 814 + 2050) !== e; ) {
        var n = e.o;
        if (e.o = void (2915 * 1 + 139 + -6 * 509), e.f &= -(-8526 + 8529 * 1), !(-1 * 1783 + -9873 + 11664 & e.f) && Mg(e))
          try {
            e.c();
          } catch (o) {
            !i && (t = o, i = !0);
          }
        e = n;
      }
    }
    if (Ki = 656 * 1 + 1 * -3412 + 2756, _t--, i)
      throw t;
  }
}
var ie = void (188 * 19 + 1935 + -1 * 5507), Sn = void (-1909 + 83 * 23), _t = 7744 + -7833 * -1 + -15577 * 1, Ki = -2 * -994 + 6221 + -1 * 8209, fo = 2 * -1152 + 2288 + -2 * -8;
function Xg(t) {
  if (void (-13257 + 1 * 13257) !== ie) {
    var i = t.n;
    if (void (-2510 + 2510 * 1) === i || i.t !== ie)
      return i = { i: 0, S: t, p: ie.s, n: void (7356 + 2 * -655 + -6046), t: ie, e: void (5512 + 50 * 131 + 37 * -326), x: void (-121 * 49 + 1 * -71 + 6e3), r: i }, void (-7588 + 7881 * 1 + -293) !== ie.s && (ie.s.n = i), ie.s = i, t.n = i, 1 * 5667 + 1291 + -6926 & ie.f && t.S(i), i;
    if (-(-245 * 22 + 533 * -13 + 12320) === i.i)
      return i.i = -5834 * -1 + -237 * -42 + -15788, void (-1 * -5263 + -6935 + 1672) !== i.n && (i.n.p = i.p, void (6670 + -115 * 58) !== i.p && (i.p.n = i.n), i.p = ie.s, i.n = void 0, ie.s.n = i, ie.s = i), i;
  }
}
function ue(t) {
  this.v = t, this.i = -4492 + 5 * -1721 + 13097, this.n = void (8588 + -194 * -6 + -9752), this.t = void (5 * -60 + 1895 * -1 + 2195);
}
ue.prototype.brand = vI, ue.prototype.h = function() {
  return !(-7458 + 2486 * 3);
}, ue.prototype.S = function(t) {
  this.t !== t && void (1374 * 1 + -8946 + 7572) === t.e && (t.x = this.t, void (1 * 9313 + 1895 * 1 + 467 * -24) !== this.t && (this.t.e = t), this.t = t);
}, ue.prototype.U = function(t) {
  if (void (-1579 * -4 + -7723 + 1407) !== this.t) {
    var i = t.e, e = t.x;
    void (10996 + -2 * 5498) !== i && (i.x = e, t.e = void (737 + 1 * -1571 + 834)), void (2161 + 4504 * 1 + 1 * -6665) !== e && (e.e = i, t.x = void (-7 * -533 + -9638 + 537 * 11)), t === this.t && (this.t = e);
  }
}, ue.prototype.subscribe = function(t) {
  var i = this;
  return gr(function() {
    var e = i.value, n = 791 * 1 + 6985 + -7744 & this.f;
    this.f &= -(3888 + 117 * 61 + -10992);
    try {
      t(e);
    } finally {
      this.f |= n;
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
  var t = Xg(this);
  return void (-115 * -49 + -9979 + 12 * 362) !== t && (t.i = this.i), this.v;
}, set: function(t) {
  if (ie instanceof Ct && function() {
    throw new Error("Computed cannot have side-effects");
  }(), t !== this.v) {
    Ki > -5464 * 1 + -9442 + -15006 * -1 && ho(), this.v = t, this.i++, fo++, _t++;
    try {
      for (var i = this.t; void (12548 + -3137 * 4) !== i; i = i.x)
        i.t.N();
    } finally {
      rr();
    }
  }
} });
function jg(t) {
  return new ue(t);
}
function Mg(t) {
  for (var i = t.s; void (1 * -9986 + -6913 + 16899) !== i; i = i.n)
    if (i.S.i !== i.i || !i.S.h() || i.S.i !== i.i)
      return !(-14560 + 112 * 130);
  return !(-12865 + 1 * 12866);
}
function Jg(t) {
  for (var i = t.s; void (-5357 + 1 * -9188 + -2909 * -5) !== i; i = i.n) {
    var e = i.S.n;
    if (void (4078 + -1779 * 2 + 130 * -4) !== e && (i.r = e), i.S.n = i, i.i = -(5781 + 1156 * -5), i.n === void 0) {
      t.s = i;
      break;
    }
  }
}
function Ug(t) {
  for (var i = t.s, e = void 0; void (-310 * 21 + 73 * -13 + 7459 * 1) !== i; ) {
    var n = i.p;
    -(5546 + -32 * 257 + 2679) === i.i ? (i.S.U(i), void (-175 * -50 + -175 * 34 + -2 * 1400) !== n && (n.n = i.n), void (3325 + 665 * -5) !== i.n && (i.n.p = n)) : e = i, i.S.n = i.r, void (-2665 * -1 + -3734 + 1 * 1069) !== i.r && (i.r = void (-856 * -6 + -3134 + -26 * 77)), i = n;
  }
  t.s = e;
}
function Ct(t) {
  ue.call(this, void (-18465 + 1231 * 15)), this.x = t, this.s = void (19 * 262 + -50 * -37 + -12 * 569), this.g = fo - (-4722 * 1 + -3031 * -2 + -1339), this.f = 6426 + 22 * -5 + -6312;
}
(Ct.prototype = new ue()).h = function() {
  if (this.f &= -(-3 * -1597 + 5791 + 149 * -71), 491 * -17 + 1 * -8048 + 16396 & this.f)
    return !(-886 * -11 + 9846 + -1507 * 13);
  if (-1977 * -3 + 4644 + 13 * -811 == (-8123 * 1 + -9371 * -1 + -1212 & this.f))
    return !(2194 + 1307 * 1 + 9 * -389);
  if (this.f &= -(-3559 * -1 + 14 * -282 + 394), this.g === fo)
    return !(20 * 104 + 4145 * 1 + 5 * -1245);
  if (this.g = fo, this.f |= -2487 + 1244 * 2, this.i > 8678 + -1117 * -1 + -9795 && !Mg(this))
    return this.f &= -(-83 * 101 + 3630 + 1 * 4755), !(-75 * -29 + 3523 + -2 * 2849);
  var t = ie;
  try {
    Jg(this), ie = this;
    var i = this.x();
    (-19 * -83 + -2967 * 2 + 4373 & this.f || this.v !== i || this.i === 0) && (this.v = i, this.f &= -(-5 * 430 + 2106 + 61), this.i++);
  } catch (e) {
    this.v = e, this.f |= -6086 * 1 + -3481 + 9583, this.i++;
  }
  return ie = t, Ug(this), this.f &= -(-2134 + 8 * 267), !(1478 * -3 + -31 * -43 + 3101);
}, Ct.prototype.S = function(t) {
  if (void (3302 + -6282 * 1 + -149 * -20) === this.t) {
    this.f |= -3 * 2545 + -2 * 2753 + 1 * 13177;
    for (var i = this.s; void (4048 + 487 * -2 + -58 * 53) !== i; i = i.n)
      i.S.S(i);
  }
  ue.prototype.S.call(this, t);
}, Ct.prototype.U = function(t) {
  if (void (6894 * 1 + -2 * -4093 + -15080) !== this.t && (ue.prototype.U.call(this, t), void (-999 * 3 + -5335 + 8332) === this.t)) {
    this.f &= -(1 * 1244 + 9293 * 1 + 1 * -10504);
    for (var i = this.s; void (1 * -1061 + -988 + 3 * 683) !== i; i = i.n)
      i.S.U(i);
  }
}, Ct.prototype.N = function() {
  if (!(-2255 * -2 + -15 * -269 + 8543 * -1 & this.f)) {
    this.f |= 6;
    for (var t = this.t; void (-71 * 31 + -8948 + 11149) !== t; t = t.x)
      t.t.N();
  }
}, Ct.prototype.peek = function() {
  if (this.h() || ho(), 185 * 40 + 8626 + 16010 * -1 & this.f)
    throw this.v;
  return this.v;
}, Object.defineProperty(Ct.prototype, "value", { get: function() {
  -1962 + -151 * -13 & this.f && ho();
  var t = Xg(this);
  if (this.h(), void (-7 * -1359 + -363 * 8 + 3 * -2203) !== t && (t.i = this.i), 283 * 9 + 702 * -6 + -1681 * -1 & this.f)
    throw this.v;
  return this.v;
} });
function wI(t) {
  return new Ct(t);
}
function Qg(t) {
  var i = t.u;
  if (t.u = void (2221 + 2221 * -1), typeof i == "function") {
    _t++;
    var e = ie;
    ie = void (-38 * -183 + -9256 + -1 * -2302);
    try {
      i();
    } catch (n) {
      throw t.f &= -(266 * -32 + -101 * 73 + -1 * -15887), t.f |= 8, ar(t), n;
    } finally {
      ie = e, rr();
    }
  }
}
function ar(t) {
  for (var i = t.s; void (-6080 + 190 * 32) !== i; i = i.n)
    i.S.U(i);
  t.x = void (-25 * 59 + 8253 + -6778), t.s = void (-64 + 8 * 8), Qg(t);
}
function BI(t) {
  if (ie !== this)
    throw new Error("Out-of-order effect");
  Ug(this), ie = t, this.f &= -(-8141 * 1 + -7642 + 15785), 1 * 1661 + 5329 * -1 + -919 * -4 & this.f && ar(this), rr();
}
function vn(t) {
  this.x = t, this.u = void (3374 + 1977 * -5 + 6511), this.s = void (3225 + -16 * -26 + -3641 * 1), this.o = void (-1048 + -14 * 248 + -8 * -565), this.f = -1 * -7339 + 9278 * -1 + 1971;
}
vn.prototype.c = function() {
  var t = this.S();
  try {
    if (849 * 6 + -1 * 1527 + -3559 & this.f || void (-3 * -1303 + 2 * 2171 + 8251 * -1) === this.x)
      return;
    var i = this.x();
    typeof i == "function" && (this.u = i);
  } finally {
    t();
  }
}, vn.prototype.S = function() {
  -1 * 6529 + -1478 * 2 + 34 * 279 & this.f && ho(), this.f |= 2 * -4898 + 2536 + 7261, this.f &= -(6514 + -49 * -197 + -16158 * 1), Qg(this), Jg(this), _t++;
  var t = ie;
  return ie = this, BI.bind(this, t);
}, vn.prototype.N = function() {
  !(2 & this.f) && (this.f |= -4882 + 148 * 33, this.o = Sn, Sn = this);
}, vn.prototype.d = function() {
  this.f |= 8759 + -3344 * 1 + -5407, -216 * -10 + 2912 + -5071 * 1 & this.f || ar(this);
};
function gr(t) {
  var i = new vn(t);
  try {
    i.c();
  } catch (e) {
    throw i.d(), e;
  }
  return i.d.bind(i);
}
var ai;
function qt(t, i) {
  Z[t] = i.bind(null, Z[t] || function() {
  });
}
function $n(t) {
  ai && ai(), ai = t && t.S();
}
function zg(t) {
  var i = this, e = t.data, n = Ht(e);
  n.value = e;
  var o = $e(function() {
    for (var r = i.__v; r = r.__; )
      if (r.__c) {
        r.__c.__$f |= -2540 + -798 * -2 + 158 * 6;
        break;
      }
    return i.__$u.c = function() {
      var a;
      !Qa(o.peek()) && 8283 + 115 * -72 === ((a = i.base) == null ? void (29 * -276 + 5755 * 1 + -2249 * -1) : a.nodeType) ? i.base.data = o.peek() : (i.__$f |= 1, i.setState({}));
    }, wI(function() {
      var a = n.value.value;
      return a === 0 ? 244 * -36 + -83 * 57 + 13515 : !(1 * 163 + -4133 * 1 + -794 * -5) === a ? "" : a || "";
    });
  }, []);
  return o.value;
}
zg.displayName = "_st";
var Hi = {};
Hi.configurable = !(-133 * -49 + 2057 + -8574 * 1), Hi.value = void (-1 * -9187 + 2234 * 4 + 18123 * -1);
var Oi = {};
Oi.configurable = !0, Oi.value = zg;
var Wi = {};
Wi.configurable = !(9273 + 4 * 405 + -10893 * 1), Wi.get = function() {
  var t = {};
  return t.data = this, t;
};
var Ri = {};
Ri.configurable = !(-8590 + 1 * 2091 + 6499), Ri.value = 1;
var fn = {};
fn.constructor = Hi, fn.type = Oi, fn.props = Wi, fn.__b = Ri, Object.defineProperties(ue.prototype, fn), qt("__b", function(t, i) {
  if (typeof i.type == "string") {
    var e, n = i.props;
    for (var o in n)
      if (o !== "children") {
        var r = n[o];
        r instanceof ue && (e || (i.__np = e = {}), e[o] = r, n[o] = r.peek());
      }
  }
  t(i);
}), qt("__r", function(t, i) {
  $n();
  var e, n = i.__c;
  n && (n.__$f &= -(3 * 1368 + 9736 + -13838), void (-10786 + -1 * -10786) === (e = n.__$u) && (n.__$u = e = function(o) {
    var r;
    return gr(function() {
      r = this;
    }), r.c = function() {
      n.__$f |= 2359 + -393 * 6, n.setState({});
    }, r;
  }())), $n(e), t(i);
}), qt("__e", function(t, i, e, n) {
  $n(), t(i, e, n);
}), qt("diffed", function(t, i) {
  $n();
  var e;
  if (typeof i.type == "string" && (e = i.__e)) {
    var n = i.__np, o = i.props;
    if (n) {
      var r = e.U;
      if (r)
        for (var a in r) {
          var g = r[a];
          void (4207 * -2 + -7871 + -5 * -3257) !== g && !(a in n) && (g.d(), r[a] = void (-9948 + -1 * -9948));
        }
      else
        e.U = r = {};
      for (var s in n) {
        var x = r[s], C = n[s];
        void (25 * -110 + 1 * 1201 + 1 * 1549) === x ? (x = SI(e, s, C, o), r[s] = x) : x.o(C, o);
      }
    }
  }
  t(i);
});
function SI(t, i, e, n) {
  var o = i in t && t.ownerSVGElement === void 0, r = jg(e);
  return { o: function(a, g) {
    r.value = a, n = g;
  }, d: gr(function() {
    var a = r.value.value;
    n[i] !== a && (n[i] = a, o ? t[i] = a : a ? t.setAttribute(i, a) : t.removeAttribute(i));
  }) };
}
qt("unmount", function(t, i) {
  if (typeof i.type == "string") {
    var e = i.__e;
    if (e) {
      var n = e.U;
      if (n) {
        e.U = void (-3706 + -218 * -17);
        for (var o in n) {
          var r = n[o];
          r && r.d();
        }
      }
    }
  } else {
    var a = i.__c;
    if (a) {
      var g = a.__$u;
      g && (a.__$u = void (1 * 5003 + 9511 * 1 + -14514), g.d());
    }
  }
  t(i);
}), qt("__h", function(t, i, e, n) {
  (n < 3 || -2778 + 1 * 8311 + -5524 * 1 === n) && (i.__$f |= -923 * -1 + 9397 + -10318), t(i, e, n);
}), We.prototype.shouldComponentUpdate = function(t, i) {
  var e = this.__$u;
  if (!(e && void (7009 * 1 + 2031 + -1 * 9040) !== e.s || -783 + 1 * 787 & this.__$f))
    return !0;
  if (-141 * 5 + 890 * 11 + -9082 & this.__$f)
    return !(3049 * 3 + -164 + 13 * -691);
  for (var n in i)
    return !(-3864 + 933 * -6 + 1 * 9462);
  for (var o in t)
    if (o !== "__source" && t[o] !== this.props[o])
      return !0;
  for (var r in this.props)
    if (!(r in t))
      return !(-36 * 31 + -859 + 1975);
  return !(1291 + -129 * 10);
};
function Ht(t) {
  return $e(function() {
    return jg(t);
  }, []);
}
const GI = (t) => {
  const i = Ht(!1);
  return Fg(t, (n) => {
    n.detail && (i.value = n.detail.animationEnd);
  }), i;
};
var $g = ((t) => (t.DOCUMENT = "document-auto-capture:dev", t.FACE = "face-auto-capture:dev", t))($g || {});
const Vi = {};
Vi.SIMD = "simd", Vi.NO_SIMD = "no-simd";
const wa = Vi;
function Ba(t) {
  t.getTracks().forEach((e) => {
    e.stop();
  });
}
function ZI(t, i) {
  if (!t)
    return i;
  const { detectionRecord: e, hashedDetectedImages: n } = t;
  i.hashedDetectedImages && (n == null || n.push(...i.hashedDetectedImages)), i.detectionRecord && (e == null || e.push(...i.detectionRecord));
  const o = { ...t };
  return o.hashedDetectedImages = n, o.detectionRecord = e, o;
}
const kI = -1351 * 2 + -651 + -1 * -3353 + 0.4, KI = -218 * -34 + -1 * -9050 + -16462 + 0.16, HI = 859 + -1879 * 1 + 1020 + 0.2, OI = -1 * 1894 + 145 * 62 + 887 * -8 + 0.05, WI = 2658 + -5 * -1831 + 11813 * -1 + 0.3, RI = -136 * -36 + -5624 + -26 * -28 + 0.25, VI = -3389 + -239 * -17 + 2 * -337 + 0.9, EI = 1089 * -3 + -5081 * -1 + 892 * -2, PI = 1678 * -1 + 1943 + -256 + 0.8100000000000005, Io = {};
Io.minDuration = 1e3, Io.maxDuration = 2500, Io.minFrames = 10;
const gi = Io, Ei = {};
Ei.max = 100, Ei.min = 10;
const Sa = Ei, NI = 1906 * -4 + -4219 + 1 * 12563, YI = -9336 + 293 * 19 + -49 * -81, LI = 3, qg = "AES-CBC", _g = "RSA-OAEP", TI = "SHA-256", DI = "image/jpeg", FI = -75 * 123 + -619 * -13 + 1186, XI = 1 * 4654 + -7 * -19 + -4747, jI = "SAM v1.35.3 for idcards", MI = (t, i, e = DI) => new Promise((n) => {
  t.toBlob((o) => {
    if (!o)
      throw new Error("Canvas to Blob failed");
    n(o);
  }, e, i);
}), es = async (t) => MI(t, 684 * -8 + 6823 + -1 * 1261), JI = (t, i) => {
  const e = document.createElement("canvas");
  e.width = i.width, e.height = i.height;
  const n = e.getContext("2d");
  if (!n)
    throw new Error("cropImage ctx error");
  return n.drawImage(t, i.shiftX, i.shiftY, i.width, i.height, 969 + 323 * -3, 1057 * -7 + 9548 + -2149 * 1, e.width, e.height), e;
}, UI = (t) => {
  const i = t.getContext("2d");
  if (!i)
    throw new Error("getImageDataForSam ctx error");
  const { data: e } = i.getImageData(-4480 + 212 * 10 + -1180 * -2, 4835 + -4835 * 1, t.width, t.height);
  return e;
}, ts = (t, i, e, n) => {
  const o = t.getContext("2d");
  o && (o.beginPath(), n ? (o.fillStyle = e, o.fillRect(i.topLeft.x, i.topLeft.y, i.width, i.height)) : (o.strokeStyle = e, o.rect(i.topLeft.x, i.topLeft.y, i.width, i.height)), o.stroke());
}, si = (t, i, e) => {
  const { height: n, shiftX: o, shiftY: r, width: a } = i, g = {};
  g.x = o, g.y = r;
  const s = {};
  s.topLeft = g, s.width = a, s.height = n, s.color = e, ts(t, s, e);
}, ns = (t, i, e) => {
  const n = t.getContext("2d");
  n && (n.fillStyle = e, n.fillRect(i.x, i.y, -43 + 10 * 5, 5551 + 308 * -18), n.beginPath());
}, os = Qi(null), is = () => {
  const t = Zo(os);
  if (!t)
    throw new Error("Missing provider for CameraOptionsContext");
  return t;
}, QI = (t) => {
  const {
    cameraFacing: i,
    onError: e,
    onPhotoTaken: n,
    sessionToken: o,
    thresholds: r,
    wasmDirectoryPath: a
  } = t;
  return {
    onPhotoTaken: n,
    onError: e,
    cameraFacing: i ?? "user",
    wasmDirectoryPath: a,
    sessionToken: o,
    thresholds: {
      faceConfidence: (r == null ? void 0 : r.faceConfidence) ?? kI,
      minFaceSizeRatio: (r == null ? void 0 : r.minFaceSizeRatio) ?? KI,
      maxFaceSizeRatio: (r == null ? void 0 : r.maxFaceSizeRatio) ?? HI,
      sharpnessThreshold: (r == null ? void 0 : r.sharpnessThreshold) ?? WI,
      brightnessLowThreshold: (r == null ? void 0 : r.brightnessLowThreshold) ?? RI,
      brightnessHighThreshold: (r == null ? void 0 : r.brightnessHighThreshold) ?? VI,
      outOfBoundsThreshold: (r == null ? void 0 : r.outOfBoundsThreshold) ?? OI,
      devicePitchAngleThreshold: (r == null ? void 0 : r.devicePitchAngleThreshold) ?? EI
    }
  };
}, zI = ({
  cameraOptions: t,
  children: i
}) => {
  const e = $e(() => ({
    faceCameraOptions: QI(t)
  }), [t]);
  return se(os.Provider, {
    value: e,
    children: i
  });
}, $I = -2 * -4364 + -207 + -8521 + 0.75, qI = -4091 + -4093 * -1, _I = 600, ex = -52 * -8 + -3 * 2746 + 7822, rs = (t, i) => {
  const e = {};
  e.detail = i, document.dispatchEvent(new CustomEvent(t, e));
}, wo = class wo {
  constructor() {
    j(this, "lastDetails", {});
    j(this, "delayedTime", -1721 + -17 * -10 + -517 * -3);
  }
  static getInstance() {
    return !this._instance && (this._instance = new wo()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = -3599 + -3599 * -1;
  }
  isDetailChanged(i, e) {
    return JSON.stringify(e) !== JSON.stringify(this.lastDetails[i]) ? (this.lastDetails[i] = e, !0) : !1;
  }
  dispatchCustomEventOnChange(i, e) {
    this.isDetailChanged(i, e) && rs(i, e);
  }
  dispatchDelayedCustomEventOnChange(i, e, n) {
    const o = performance.now();
    o - this.delayedTime > n && (this.dispatchCustomEventOnChange(i, e), this.delayedTime = o);
  }
};
j(wo, "_instance");
let Kn = wo;
const Wn = Kn.getInstance(), Ga = (t, i, e = _I) => {
  const n = {};
  n.instructionCode = i;
  const o = n;
  Wn.dispatchDelayedCustomEventOnChange(t, o, e);
}, tx = (t, i) => {
  Wn.dispatchCustomEventOnChange(t, i);
}, nx = (t, i) => {
  const e = {};
  e.size = i;
  const n = e;
  Wn.dispatchCustomEventOnChange(t, n);
}, ox = (t, i, e) => {
  const n = i.confidence < e ? void 0 : i, o = {};
  o.detectedObject = n;
  const r = o;
  Wn.dispatchCustomEventOnChange(t, r);
}, ix = (t, i, e) => {
  const n = {};
  n.image = e, n.data = {}, n.data.detection = i, n.data.imageResolution = {}, n.data.imageResolution.width = e.width, n.data.imageResolution.height = e.height;
  const o = n;
  Wn.dispatchCustomEventOnChange(t, o);
}, Pi = (t, i) => {
  rs(t, i);
};
var Se = {};
Se.VITE_FACE_COUNTLY_APP_KEY = "5f83e83ee4cee1ab6e5bbf86e215644473299675", Se.VITE_MAGNIFEYE_COUNTLY_APP_KEY = "d5ca54dabfb1a2c72d7090c9c8980252a879da44", Se.VITE_DOCUMENT_COUNTLY_APP_KEY = "065cf6e242fc5e785cd17eebfbfbbd212a33133b", Se.VITE_COUNTLY_URL = "https://innovatrics.count.ly", Se.VITE_SMILE_COUNTLY_APP_KEY = "d64319129bb0ee02eccfab418edba9629a97d6b6", Se.VITE_RSA_PUBLIC_KEY = "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", Se.BASE_URL = "/", Se.MODE = "production", Se.DEV = !1, Se.PROD = !0, Se.SSR = !1, Se.VITE_PACKAGE_VERSION = "5.2.8";
var rx = Se;
const ax = () => {
  var t;
  return ((t = rx.VITE_APP_ENV) == null ? void 0 : t.toLowerCase()) === "dev";
}, gx = (t, i) => {
  if (ax()) {
    const e = {};
    e.candidateSelectionImages = i;
    const n = e;
    Kn.getInstance().dispatchCustomEventOnChange(t, n);
  }
}, sx = (t, i) => {
  const { cameraResolution: e, shouldMirror: n } = i;
  Ce(() => {
    if (!e)
      return;
    const o = {};
    o.cameraResolution = e, o.isMirroring = n, tx(t, o);
  }, [e, n, t]);
}, as = (t) => t.length < 279 * 19 + -9219 * 1 + -3919 * -1 ? 4146 + -67 * -94 + -10444 : t.reduce((e, n) => e + n, 1 * -6019 + 2993 * -1 + 9012) / t.length, Rn = (t) => Number.parseFloat(t.toFixed(1580 * -4 + 1522 + -1 * -4801)), cx = (t) => {
  const i = t.getContext("2d");
  i && i.clearRect(0, 1556 + -1066 * -3 + -4754, i.canvas.width, i.canvas.height);
};
class Ix {
  static async getVideoInputDeviceList() {
    return (await navigator.mediaDevices.enumerateDevices()).filter((e) => e.kind === "videoinput");
  }
}
const Po = (t, i) => Math.min(t, i), xx = (t, i) => {
  const e = Po(i.width, i.height);
  return Rn(t * e);
}, gs = ({ height: t, width: i }) => {
  const e = Po(i, t), n = e / (497 * -5 + 468 + 2020) * (236 + 58 * -4);
  if (i > t) {
    const r = {};
    return r.width = n, r.height = e, r;
  }
  const o = {};
  return o.width = e, o.height = n, o;
}, lx = ({ height: t, width: i }) => {
  const e = Po(i, t) * $I, n = (i - e) / 2, o = (t - e) / (-7419 + -42 * -13 + 6875), r = {};
  return r.shiftX = n, r.shiftY = o, r.width = e, r.height = e, r;
}, ux = (t, i) => xx(t, i) * qI, Cx = "@innovatrics/dot-common-auto-capture", dx = "5.2.8", Ax = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, px = {
  "@dot/proto-files": "1.0.3",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.2.2",
  comlink: "^4.4.1",
  preact: "^10.19.3",
  "styled-components": "^6.1.1",
  "wasm-feature-detect": "^1.6.1"
}, hx = {
  "@preact/preset-vite": "^2.7.0",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.3.3",
  vite: "^5.0.10",
  vitest: "^1.0.4"
}, fx = {
  name: Cx,
  private: !0,
  version: dx,
  scripts: Ax,
  dependencies: px,
  devDependencies: hx
}, ss = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), Za = () => {
  const t = /Android/i.test(navigator.userAgent), i = /Firefox/i.test(navigator.userAgent);
  return t && i;
}, mx = () => {
  const t = navigator.userAgent.includes("Chrome"), i = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return t && i ? !1 : i;
}, Ni = (t) => new Promise((i) => {
  setTimeout(i, t);
}), Qt = (t) => JSON.parse(JSON.stringify(t, (i, e) => typeof e == "number" ? Rn(e) : e)), cs = () => fx.version, Is = (t) => new URL(t).hostname.replace("www.", ""), bx = () => Is(window.location.href) === "localhost", qn = (t) => Object.entries(t).map(([i, e]) => encodeURIComponent(i) + "=" + encodeURIComponent(e)).join("&"), yx = (t, i) => {
  const e = t && performance.now() - t;
  return i >= gi.minFrames ? e > gi.minDuration : e > gi.maxDuration;
}, vx = (t, i) => JSON.stringify(t) === JSON.stringify(i) ? i : t, ka = (t, i) => Math.abs(t - i);
function wx(t, i) {
  let e;
  return (...n) => {
    const o = () => {
      clearTimeout(e), e = void 0, t(...n);
    };
    e === void (-1 * -9491 + -6763 + 2728 * -1) && (e = setTimeout(o, i));
  };
}
const Bx = (t) => t === Yg.CONTROL ? !ss() : !0, Sx = (t, i) => {
  const { appState: e, handleAppStateChange: n, handleError: o } = Eo(), [r, a] = Te(), g = $e(() => {
    const x = i == null ? void 0 : i.getCameraSettings().facingMode;
    return x ? r ?? x === "user" : r ?? Bx(t);
  }, [i, r, t]);
  Ce(() => {
    const x = () => {
      e !== ze.LOADING && n(ze.RUNNING);
    }, C = () => {
      a(r === void 0 ? !g : !r);
    }, u = async () => {
      if (i) {
        n(ze.LOADING);
        try {
          await i.switchCamera(), n(ze.RUNNING);
        } catch (p) {
          if (p instanceof Error) {
            o(ne.fromCameraError(p));
            return;
          }
        }
        a(void 0);
      }
    }, h = (p) => {
      var v;
      switch ((v = p.detail) == null ? void 0 : v["instruction"]) {
        case co.CONTINUE_DETECTION:
          x();
          break;
        case co.TOGGLE_MIRROR:
          C();
          break;
        case co.SWITCH_CAMERA:
          u();
          break;
        default:
          return;
      }
    };
    return document.addEventListener(t, h), () => {
      document.removeEventListener(t, h);
    };
  }, [e, i, o, r, n, g, t]);
  const s = {};
  return s.shouldMirror = g, s;
}, xo = {};
xo.width = 1920, xo.height = 1080, xo.facingMode = "user";
const Gx = xo;
class Gn extends Ix {
  constructor(e) {
    super();
    j(this, "videoRef");
    j(this, "mediaStream", null);
    j(this, "videoTrack", null);
    j(this, "availableCameraProperties", []);
    this.videoRef = e;
  }
  async initWebcam(e = {}) {
    const n = await this.getBestCamera(e.facingMode);
    await this.getAvailableCamerasInfo();
    const o = this.getConstraints(e, n);
    await this.startWebcam(o), mx() && await this.startWebcam(o);
  }
  async startWebcam(e = {}) {
    var n;
    return this.stopCamera(), Za() && await Ni(450), this.mediaStream = await navigator.mediaDevices.getUserMedia(e), this.videoRef.srcObject = this.mediaStream, await this.videoRef.play(), this.videoTrack = (n = this.mediaStream) == null ? void 0 : n.getVideoTracks()[-8699 + 2140 * -4 + -17259 * -1], this.checkVideoTrackSettings(), this.videoTrack;
  }
  checkVideoTrackSettings() {
    var o;
    const e = (o = this.videoTrack) == null ? void 0 : o.getSettings();
    if (!(e != null && e.height) || !(e != null && e.width))
      throw new ne("Could not init camera settings");
    if (Math.min(e == null ? void 0 : e.width, e == null ? void 0 : e.height) < NI)
      throw this.stopCamera(), new ne("Could not init video because of low camera resolution: " + e.width + "x" + e.height + ".");
  }
  async getBestCamera(e) {
    const n = {};
    return n.video = !0, this.mediaStream = await navigator.mediaDevices.getUserMedia(n), this.stopCamera(), ss() && e === "environment" ? (await Gn.getVideoInputDeviceList()).find((a) => a.label.includes("back") && a.label.includes("0")) : void (1389 + 7978 * -1 + 6589);
  }
  async getAvailableCamerasInfo() {
    const e = await Gn.getVideoInputDeviceList();
    for (const n of e) {
      Za() && await Ni(-6976 + 1243 * 4 + 2454);
      try {
        const o = {};
        o.deviceId = n.deviceId, o.width = 480;
        const r = {};
        r.video = o;
        const a = await navigator.mediaDevices.getUserMedia(r), [g] = a.getVideoTracks(), s = g.getSettings(), x = { ...s };
        x.deviceName = g.label;
        const C = {};
        C.cameraProperties = x;
        const u = C;
        this.availableCameraProperties.push(u), Ba(a);
      } catch (o) {
        o instanceof Error && ne.logError(o);
      }
    }
  }
  getConstraints(e, n) {
    const o = { ...Gx, ...e };
    o.deviceId = n ? { exact: n.deviceId } : void (-3 * -1065 + 1 * 9731 + -12926);
    const r = {};
    return r.video = o, r.audio = !1, r;
  }
  takePhoto() {
    var r;
    const e = (r = this.videoTrack) == null ? void 0 : r.getSettings();
    if (!(e != null && e.width))
      throw new ne("Cant take photo - video width is undefined");
    if (!(e != null && e.height))
      throw new ne("Cant take photo - video height is undefined");
    const n = document.createElement("canvas");
    n.width = e.width, n.height = e.height;
    const o = n.getContext("2d");
    if (!o)
      throw new ne("Cant take photo - cant create context");
    return o.drawImage(this.videoRef, 71 * 68 + -2785 + -2043, -11599 + 7 * 1657), n;
  }
  getCameraResolution() {
    var o;
    const e = (o = this.videoTrack) == null ? void 0 : o.getSettings();
    if (!(e != null && e.width))
      throw new ne("Video width is undefined");
    if (!(e != null && e.height))
      throw new ne("Video height is undefined");
    const n = {};
    return n.width = e.width, n.height = e.height, n;
  }
  getCameraSettings() {
    if (!this.videoTrack)
      throw Error("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  async getDeviceName() {
    if (!this.videoTrack)
      throw Error("Video track must be initialized to get device name");
    const e = this.videoTrack.getSettings(), n = await navigator.mediaDevices.enumerateDevices(), o = n.find((r) => r.deviceId === e.deviceId);
    return o == null ? void 0 : o.label;
  }
  async applyNewConstraints(e) {
    if (!this.videoTrack)
      throw Error("Video track must be initialized to set new constraints");
    await this.videoTrack.applyConstraints(e);
  }
  async switchCamera() {
    if (!this.videoTrack)
      throw Error("Video track must be initialized to set new constraints");
    const e = this.videoTrack.getConstraints(), n = this.videoTrack.getSettings(), o = await Gn.getVideoInputDeviceList();
    if (o.length <= -8092 + -8093 * -1)
      return;
    const r = o.findIndex((s) => s.deviceId === n.deviceId), a = o[r + (9 * -287 + 17 * -58 + -6 * -595)] ?? o[-8518 * 1 + 3 * -850 + 11068], g = this.getConstraints(e, a);
    await this.startWebcam(g);
  }
  stopCamera() {
    this.mediaStream && (Ba(this.mediaStream), this.videoRef.srcObject = null);
  }
  checkIfStreamIsRunning() {
    return !!this.videoRef.srcObject;
  }
  async getCameraProperties() {
    const e = await this.getDeviceName(), n = this.getCameraSettings(), o = { ...n };
    o.deviceName = e;
    const r = {};
    return r.currentCameraProperties = o, r.availableCameraProperties = this.availableCameraProperties, r;
  }
}
const Zx = (t, i) => {
  var s;
  const e = ht(), { handleError: n, setIsCameraReady: o } = Eo(), [r, a] = Te(), g = Co((x) => {
    a((C) => vx(x, C));
  }, []);
  return Ce(() => ((async () => {
    if (!(t != null && t.current)) {
      n(new ne("Something went wrong during video initialization"));
      return;
    }
    const C = new Gn(t.current);
    try {
      const u = {};
      u.facingMode = i, await C.initWebcam(u);
    } catch (u) {
      if (u instanceof Error) {
        n(ne.fromCameraError(u));
        return;
      }
    }
    o(!0), g(C.getCameraResolution()), e.current = C;
  })(), function() {
    e.current && e.current.stopCamera();
  }), [i, n, o, t, g]), { cameraHandler: e.current, cameraSettings: (s = e.current) == null ? void 0 : s.getCameraSettings(), cameraResolution: r, onCameraResolutionChange: g };
}, kx = (t) => {
  Ce(() => (window.addEventListener("beforeunload", t.endSession), () => {
    t.endSession(), window.removeEventListener("beforeunload", t.endSession);
  }), [t]);
}, Kx = (t, i) => {
  const [e, n] = Te();
  Ce(() => {
    const o = () => {
      !t.current || e === window.innerWidth || (n(window.innerWidth), nx(i, t.current.getBoundingClientRect()));
    };
    return o(), window.addEventListener("resize", o), () => {
      window.removeEventListener("resize", o);
    };
  }, [t, i, e]);
};
class sr extends Array {
  constructor(e) {
    super();
    j(this, "size");
    this.size = e;
  }
  pushFixed(...e) {
    if (e.length > this.size) {
      const n = e.slice(-this.size);
      this.push(...n);
      return;
    }
    this.length === this.size && this.splice(41 * -52 + 994 + -1138 * -1, e.length), this.push(...e);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(0);
  }
}
const Hx = (t, i) => {
  const { height: e, shiftX: n, shiftY: o, width: r } = i;
  return !(t.x < n || t.x > n + r || t.y < o || t.y > o + e);
}, Ox = (t, i) => Object.values(t).every((e) => Hx(e, i));
function Wx(t) {
  return Rn(Math.abs(t));
}
const Rx = () => {
  const [t, i] = Te(null), e = ht(new sr(-5578 + -3 * -1861));
  function n(r) {
    const { z: a } = r.accelerationIncludingGravity || {};
    if (!a)
      return;
    e.current.pushFixed(Wx(a));
    const g = Rn(as(e.current)), s = {};
    s.z = g, i(s);
  }
  Ce(() => (window.addEventListener("devicemotion", wx(n, XI), !0), () => {
    window.removeEventListener("devicemotion", n, !0);
  }), []);
  const o = {};
  return o.acceleration = t, o;
}, cr = (t) => {
  const { height: i, width: e } = gs(t), n = (t.width - e) / (-16 * 149 + 1 * 49 + 2337), o = (t.height - i) / (1574 * 2 + -2123 * 3 + 3223), r = {};
  return r.shiftX = n, r.shiftY = o, r.width = e, r.height = i, r;
}, xs = (t, i) => {
  const { height: e, width: n } = gs(t), o = Po(t.width, t.height), r = n - o * i * 2, a = e - o * i * 2, g = (t.width - r) / (-6360 + -6362 * -1), s = (t.height - a) / (4599 * 1 + 2 * -2721 + 845), x = {};
  return x.shiftX = g, x.shiftY = s, x.width = r, x.height = a, x;
}, ci = (t, i) => {
  const { shiftX: e, shiftY: n } = cr(t), o = {};
  return o.x = i.x + e, o.y = i.y + n, o;
}, Vx = (t, i) => ({ ...i, topLeft: ci(t, i.topLeft), bottomRight: ci(t, i.bottomRight), faceCenter: ci(t, i.faceCenter) }), ls = (t, i) => {
  const { faceCenter: e, faceSize: n } = t, o = ux(n, i), r = {};
  r.x = e.x, r.y = e.y - o;
  const a = {};
  a.x = e.x + o, a.y = e.y;
  const g = {};
  g.x = e.x, g.y = e.y + o;
  const s = {};
  s.x = e.x - o, s.y = e.y;
  const x = {};
  return x.top = r, x.right = a, x.bottom = g, x.left = s, Qt(x);
}, Ex = (t, i) => {
  const {
    bottomRight: e,
    faceCenter: n,
    topLeft: o
  } = i, r = {
    topLeft: o,
    width: e.x - o.x,
    height: e.y - o.y
  };
  ts(t, r, "rgba(255, 0, 0, 0.3)", !0), ns(t, n, "lime");
}, Px = (t, i, e) => {
  const n = ls(i, e);
  Object.values(n).map((o) => ns(t, o, "orange"));
}, Nx = ({
  cameraResolution: t,
  detectionDetails: i,
  isImageMirror: e
}) => {
  const {
    faceCameraOptions: {
      thresholds: n
    }
  } = is(), o = ht(null);
  if (Ce(() => {
    if (!o.current)
      return;
    o.current.width = t.width, o.current.height = t.height, cx(o.current);
    const p = cr(t), v = xs(t, n.outOfBoundsThreshold), E = lx(t);
    i.value && (Ex(o.current, i.value.face), Px(o.current, i.value.face, t), si(o.current, p, "lime"), si(o.current, v, "yellow"), si(o.current, E, "blue"));
  }, [t, n, i]), !i.value)
    return null;
  const {
    detectionTime: r,
    face: a,
    fps: g,
    instructionCode: s,
    invalidValidators: x,
    resolution: C,
    samVersion: u
  } = i.value, h = {
    Confidence: a.confidence,
    "Face center": JSON.stringify(a.faceCenter),
    "Face size": a.faceSize,
    Brightness: a.brightness,
    Sharpness: a.sharpness,
    "Detection time": r,
    FPS: g,
    Instruction: s,
    Resolution: JSON.stringify(C),
    "Component version": "5.2.8"
  };
  return u && (h["SAM version"] = u), x.length > 0 && (h["Invalid validators"] = x.join(", ")), se(yI, {
    ref: o,
    cameraResolution: t,
    detectionDetails: h,
    isImageMirror: e
  });
}, Yx = async () => WebAssembly.validate(new Uint8Array([10632 + -6 * 1772, -3484 * -1 + -201 * 22 + 1035, 7877 + 1 * -7762, 1 * -5659 + -319 * 1 + 2029 * 3, 83 * -27 + 6573 + -4331, 15176 + -1897 * 8, 7830 + 4805 * -2 + -89 * -20, -824 + -553 * 5 + 97 * 37, 1, -2 * -4935 + 1766 + 11631 * -1, 1, -3 * -2461 + -5190 + -9 * 233, 0, 38 * 123 + -679 + -3994, 4941 + 1851 * -1 + -2967 * 1, 4487 + 1 * -4484, 813 * -10 + -9582 + -1042 * -17, -2 * -879 + -5685 + 982 * 4, -4 * -167 + -1 * -2201 + -1 * 2869, 108 * 43 + 628 * -2 + -3378, -17 * -197 + -3026 + -313, 35 * -83 + 52 * 53 + 150, 17 * 467 + -3152 * 1 + -9 * 531, 7791 * -1 + -1 * 8737 + -16528 * -1, 1 * -1019 + 1105 * -6 + 7714, 4509 + 1974 * -1 + -2535, -253 * 28 + 2 * -2427 + -1 * -12191, 8837 + 13 * -130 + -7132, 491 * 8 + -3295 + -380, 9475 + -3 * -66 + -9575, -723 * 2 + -4 * -1902 + 1 * -6151]));
async function Lx() {
  const t = {};
  t.name = qg, t.length = 256;
  const i = await window.crypto.subtle.generateKey(t, !0, ["encrypt", "decrypt"]), e = Uint8Array.from(Array(-67 * -3 + 1583 + -1768).fill(-398 + -3 * 36 + 506)), n = window.crypto.getRandomValues(e), o = {};
  return o.key = i, o.iv = n, o;
}
async function Tx(t) {
  const { iv: i, key: e } = await Lx(), n = {};
  n.name = qg, n.iv = i;
  const o = await window.crypto.subtle.encrypt(n, e, t), r = await window.crypto.subtle.exportKey("raw", e), a = {};
  return a.message = o, a.key = r, a.iv = i, a;
}
function Dx(t) {
  const i = new ArrayBuffer(t.length), e = new Uint8Array(i);
  for (let n = 7648 + -8 * 640 + -2528, o = t.length; n < o; n++)
    e[n] = t.charCodeAt(n);
  return i;
}
function Fx() {
  const t = "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", i = window.atob(t), e = window.atob(i), n = Dx(e), o = {};
  return o.name = _g, o.hash = TI, window.crypto.subtle.importKey("spki", n, o, !0, ["encrypt"]);
}
async function Xx(t) {
  const i = await Fx(), e = {};
  return e.name = _g, window.crypto.subtle.encrypt(e, i, t);
}
async function jx(t) {
  const { iv: i, key: e, message: n } = await Tx(t), o = await Xx(e), r = {};
  return r.key = o, r.iv = i, r.message = n, r;
}
async function Mx(t) {
  const i = await window.crypto.subtle.digest("SHA-1", t);
  return Array.from(new Uint8Array(i)).map((e) => e.toString(-7402 * 1 + 2 * 4663 + -1908).padStart(2, "0")).join("");
}
class Jx {
  constructor() {
    j(this, "samVersion", null);
    j(this, "isDetectorInitialized", !1);
    j(this, "isInCandidateSelection", !1);
    j(this, "lastImage", null);
    j(this, "bestImage", null);
    j(this, "detectionRecord", []);
    j(this, "candidateSelectionImages", []);
    j(this, "thresholds", null);
    j(this, "acceleration", null);
    j(this, "imagesForDuplicateDetection", new sr(YI));
  }
  async initDetector(i) {
    await this.detector.initSamModule(location.href, i);
    const e = await this.detector.getSamVersion();
    this.setSamVersion(e), this.isDetectorInitialized = !0;
  }
  async getInstructionSet() {
    return await Yx() ? wa.SIMD : wa.NO_SIMD;
  }
  async init({ thresholds: i, wasmDirectoryPath: e }) {
    this.setThresholds(i), await this.initDetector(e);
  }
  setSamVersion(i) {
    if (!i || !this.areVersionsCompatible(i))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new ne("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = i;
  }
  areVersionsCompatible(i) {
    return i === jI;
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
  setThresholds(i) {
    this.thresholds = i;
  }
  setAcceleration(i) {
    this.acceleration = i;
  }
  restart() {
    this.isInCandidateSelection = !1, this.lastImage = null, this.bestImage = null, this.candidateSelectionImages = [], this.detectionRecord = [], this.clearImagesForDuplicateDetection();
  }
  isDetectionValid(i) {
    return Object.values(i).every((n) => n === !0);
  }
  isNewImageBetter(i, e) {
    return e.sharpness > i.sharpness;
  }
  async collectImagesForDuplicateDetection(i) {
    const e = i.length / FI, n = e / (2 * 607 + -28 * -10 + -1492), o = i.length / (-3943 + -3945 * -1), r = await Mx(i.slice(o - n, o + n));
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
  return function(i) {
    i = i || {};
    var e;
    e || (e = typeof i < "u" ? i : {});
    var n, o;
    e.ready = new Promise(function(c, I) {
      n = c, o = I;
    });
    var r = {}, a;
    for (a in e)
      e.hasOwnProperty(a) && (r[a] = e[a]);
    var g = "./this.program", s = !1, x = !1;
    s = typeof window == "object", x = typeof importScripts == "function";
    var C = "", u;
    (s || x) && (x ? C = self.location.href : document.currentScript && (C = document.currentScript.src), t && (C = t), 14 * -158 + 2753 + -541 * 1 !== C.indexOf("blob:") ? C = C.substr(-1674 * 5 + -3125 + -605 * -19, C.lastIndexOf("/") + 1) : C = "", x && (u = function(c) {
      var I = new XMLHttpRequest();
      return I.open("GET", c, !1), I.responseType = "arraybuffer", I.send(null), new Uint8Array(I.response);
    }));
    var h = e.printErr || console.warn.bind(console);
    for (a in r)
      r.hasOwnProperty(a) && (e[a] = r[a]);
    r = null, e.thisProgram && (g = e.thisProgram);
    var p;
    e.wasmBinary && (p = e.wasmBinary), e.noExitRuntime && e.noExitRuntime, typeof WebAssembly != "object" && et("no native wasm support detected");
    var v, E = !(-2071 * 1 + -5 * 1607 + -3 * -3369);
    function B(c) {
      c || et("Assertion failed: undefined");
    }
    var k = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void (-4544 + -1 * 8087 + 17 * 743);
    function K(c, I, l) {
      var A = te;
      if (-10243 + -1 * -10243 < l) {
        l = I + l - 1;
        for (var m = 0; m < c.length; ++m) {
          var b = c.charCodeAt(m);
          if (55296 <= b && -77436 + -134779 * -1 >= b) {
            var S = c.charCodeAt(++m);
            b = 121993 * -1 + -96701 + 284230 + ((b & -1 * -3323 + 1 * 2919 + -5219) << 2937 + -1 * 2927) | S & 101 * -1 + -5245 * 1 + -3 * -2123;
          }
          if (127 >= b) {
            if (I >= l)
              break;
            A[I++] = b;
          } else {
            if (343 * 19 + -34 * -85 + -7360 >= b) {
              if (I + (-21 * 7 + 2051 + 1903 * -1) >= l)
                break;
              A[I++] = -7797 + 3 * 2663 | b >> -9447 + -1 * 3863 + 13316;
            } else {
              if (-1696 * -41 + 1 * 67989 + -3130 * 23 >= b) {
                if (I + 2 >= l)
                  break;
                A[I++] = -1 * -1609 + -1465 + 8 * 10 | b >> 12;
              } else {
                if (I + (3821 + 2498 * 2 + 3 * -2938) >= l)
                  break;
                A[I++] = -3 * -1206 + -1205 + -1 * 2173 | b >> -5 * 839 + 3042 + 1171, A[I++] = -224 * 20 + 6365 + -1757 | b >> -2008 + 2297 * -1 + -3 * -1439 & 97 * 17 + -6799 * -1 + -8385;
              }
              A[I++] = 1 * -3539 + 2892 + 775 | b >> 1411 * -3 + 1 * -8706 + 12945 & 3 * -663 + -2359 + -11 * -401;
            }
            A[I++] = 50 + 1 * -1979 + -2057 * -1 | b & 63;
          }
        }
        A[I] = 9631 + -4258 * -1 + -323 * 43;
      }
    }
    var G = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0;
    function F(c, I) {
      for (var l = c >> 1, A = l + I / 2; !(l >= A) && me[l]; )
        ++l;
      if (l <<= 2 * 694 + -4796 + 3409, 261 * 17 + 898 + 1 * -5303 < l - c && G)
        return G.decode(te.subarray(c, l));
      for (l = 601 + -4 * -1579 + -6917, A = ""; ; ) {
        var m = je[c + 2 * l >> 1];
        if (6653 * -1 + 29 * 13 + -3138 * -2 == m || l == I / (-15 * -359 + 2630 * 1 + 1 * -8013))
          return A;
        ++l, A += String.fromCharCode(m);
      }
    }
    function L(c, I, l) {
      if (void (4355 * -1 + 1 * -2079 + -2 * -3217) === l && (l = -978969973 + -156322681 * -20), 2 * -4149 + -5224 + 13524 > l)
        return 3247 * -1 + -3146 + 2131 * 3;
      l -= 6 * -963 + 862 * 7 + -254;
      var A = I;
      l = l < (7932 * -1 + -128 * -23 + 4990) * c.length ? l / (22 * -259 + -2 * -4647 + 599 * -6) : c.length;
      for (var m = 0; m < l; ++m)
        je[I >> -4776 + 17 * 281] = c.charCodeAt(m), I += 3604 * 2 + 1949 + 5 * -1831;
      return je[I >> -7257 + -463 * 13 + 13277] = 3901 * 1 + 373 * -13 + 948, I - A;
    }
    function X(c) {
      return (15725 + -15723 * 1) * c.length;
    }
    function O(c, I) {
      for (var l = -3597 * 1 + -2 * 2609 + -1 * -8815, A = ""; !(l >= I / (-14123 + -17 * -831)); ) {
        var m = ae[c + 4 * l >> 2];
        if (-53 * -164 + -7940 + -47 * 16 == m)
          break;
        ++l, 33 * 2253 + -29 * 4082 + 109565 <= m ? (m -= 1 * -44719 + -2 * -51719 + 6817, A += String.fromCharCode(119 * 233 + -1 * 91733 + 119302 | m >> 2003 + 1 * -1993, 56320 | m & 3 * 2554 + 1055 + -7694)) : A += String.fromCharCode(m);
      }
      return A;
    }
    function $(c, I, l) {
      if (void (1 * -9635 + 6 * 1497 + 653) === l && (l = -3976283444 + -471059007 * -13), -829 + 1 * 833 > l)
        return 2 * 4229 + 3231 + 11689 * -1;
      var A = I;
      l = A + l - (-1 * -3873 + 3005 + -6874);
      for (var m = 0; m < c.length; ++m) {
        var b = c.charCodeAt(m);
        if (1 * 68403 + -83600 + 70493 <= b && -27934 + -36 * 431 + 100793 >= b) {
          var S = c.charCodeAt(++m);
          b = 65536 + ((b & 2629 * -2 + 5699 + -3 * -194) << -2560 + 4 * 1282 + -2558) | S & 4475 + -1 * -2663 + -6115;
        }
        if (ae[I >> 1639 + -1 * 1637] = b, I += -8249 + 1 * 8081 + 172, I + (-9075 + -7381 * 1 + 16460) > l)
          break;
      }
      return ae[I >> -3051 + -71 * -43] = 19 * -333 + 3056 + 3271, I - A;
    }
    function z(c) {
      for (var I = -2650 * 1 + 158 * 23 + 492 * -2, l = -4 * -1505 + -5 * -686 + -9450; l < c.length; ++l) {
        var A = c.charCodeAt(l);
        55296 <= A && 57343 >= A && ++l, I += -169 * -47 + -5733 + 1103 * -2;
      }
      return I;
    }
    var ee, fe, te, je, me, ae, de, ve, Ee;
    function we(c) {
      ee = c, e.HEAP8 = fe = new Int8Array(c), e.HEAP16 = je = new Int16Array(c), e.HEAP32 = ae = new Int32Array(c), e.HEAPU8 = te = new Uint8Array(c), e.HEAPU16 = me = new Uint16Array(c), e.HEAPU32 = de = new Uint32Array(c), e.HEAPF32 = ve = new Float32Array(c), e.HEAPF64 = Ee = new Float64Array(c);
    }
    var Me = e.INITIAL_MEMORY || -14784 * 233 + -5821 * -2787 + 1 * 3998761, Pe = {};
    Pe.initial = Me / (-118266 + 2043 * -8 + 2 * 100073), Pe.maximum = 32768, e.wasmMemory ? v = e.wasmMemory : v = new WebAssembly.Memory(Pe), v && (ee = v.buffer), Me = ee.byteLength, we(ee);
    var Ae = [], Pt = [], un = [], ft = [];
    function mt() {
      var c = e.preRun.shift();
      Ae.unshift(c);
    }
    var Ge = 218 * 11 + -1887 * -5 + -11833, Ze = null;
    e.preloadedImages = {}, e.preloadedAudios = {};
    function et(c) {
      throw e.onAbort && e.onAbort(c), h(c), E = !(7 * -367 + -109 * 84 + 1 * 11725), c = new WebAssembly.RuntimeError("abort(" + c + "). Build with -s ASSERTIONS=1 for more info."), o(c), c;
    }
    function Ne(c) {
      var I = ke;
      return String.prototype.startsWith ? I.startsWith(c) : 1916 + 1879 * -3 + -61 * -61 === I.indexOf(c);
    }
    function Nt() {
      return Ne("data:application/octet-stream;base64,");
    }
    var ke = "sam.wasm";
    if (!Nt()) {
      var Ye = ke;
      ke = e.locateFile ? e.locateFile(Ye, C) : C + Ye;
    }
    function dr() {
      try {
        if (p)
          return new Uint8Array(p);
        if (u)
          return u(ke);
        throw "both async and sync fetching of the wasm failed";
      } catch (c) {
        et(c);
      }
    }
    function Ls() {
      var c = {};
      return c.credentials = "same-origin", p || !s && !x || typeof fetch != "function" || Ne("file://") ? Promise.resolve().then(dr) : fetch(ke, c).then(function(I) {
        if (!I.ok)
          throw "failed to load wasm binary file at '" + ke + "'";
        return I.arrayBuffer();
      }).catch(function() {
        return dr();
      });
    }
    function En(c) {
      for (; 617 * 12 + 7398 + -2467 * 6 < c.length; ) {
        var I = c.shift();
        if (typeof I == "function")
          I(e);
        else {
          var l = I.Ba;
          typeof l == "number" ? void (3062 * 3 + -7699 + -1 * 1487) === I.ta ? Lo("v", l)() : Lo("vi", l)(I.ta) : l(void (-748 + -17 * -44) === I.ta ? null : I.ta);
        }
      }
    }
    function Lo(c, I) {
      var l = [];
      return function() {
        l.length = arguments.length;
        for (var A = 1 * 5929 + 42 * 180 + -13489; A < arguments.length; A++)
          l[A] = arguments[A];
        return l && l.length ? e["dynCall_" + c].apply(null, [I].concat(l)) : e["dynCall_" + c].call(null, I);
      };
    }
    function Ts(c) {
      this.da = c - (4894 + -160 * -8 + -1 * 6158), this.Oa = function(I) {
        ae[this.da + (1 * -2193 + 7833 + -5632) >> 613 * 11 + -4306 + -2435] = I;
      }, this.La = function(I) {
        ae[this.da + (5798 + 1 * -5798) >> 74 * -76 + 2 * 4118 + -290 * 9] = I;
      }, this.Ma = function() {
        ae[this.da + (-9154 + 1 * -7851 + 73 * 233) >> 2 * -3585 + -9661 + 1 * 16833] = 0;
      }, this.Ka = function() {
        fe[this.da + 12 >> 3 * -2469 + -3 * 2239 + -4 * -3531] = 959 * 2 + -8146 + 6228;
      }, this.Na = function() {
        fe[this.da + (521 * 13 + -3568 * -1 + -10328) >> -1478 * 5 + 371 * -7 + -3329 * -3] = 1153 * -5 + -1 * -1727 + 4038;
      }, this.Fa = function(I, l) {
        this.Oa(I), this.La(l), this.Ma(), this.Ka(), this.Na();
      };
    }
    function Pn() {
      return 1877 * 4 + -1 * -8839 + -5449 * 3 < Pn.xa;
    }
    function To(c) {
      switch (c) {
        case 18 * -442 + 512 * 2 + 6933:
          return 9753 * -1 + -4279 + -8 * -1754;
        case 16 * -241 + 118 * 1 + 3740:
          return -465 + -233 * -2;
        case -4806 + 867 * -1 + 811 * 7:
          return 1593 + -1830 * 2 + -2069 * -1;
        case -6311 * -1 + -28 * -329 + -15515:
          return 1 * -5867 + 724 * -6 + 1 * 10214;
        default:
          throw new TypeError("Unknown type size: " + c);
      }
    }
    var Ar = void (-1 * 780 + 9751 + 8971 * -1);
    function be(c) {
      for (var I = ""; te[c]; )
        I += Ar[te[c++]];
      return I;
    }
    var Yt = {}, bt = {}, Nn = {};
    function Do(c) {
      if (void (2921 + 23 * -127) === c)
        return "_unknown";
      c = c.replace(/[^a-zA-Z0-9_]/g, "$");
      var I = c.charCodeAt(-5715 + -1814 * -2 + -1 * -2087);
      return 1 * -454 + 8399 + -1 * 7897 <= I && 2723 + 59 * -52 + 3 * 134 >= I ? "_" + c : c;
    }
    function Fo(c, I) {
      return c = Do(c), new Function("body", "return function " + c + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(I);
    }
    function Xo(c) {
      var I = Error, l = Fo(c, function(A) {
        this.name = c, this.message = A, A = Error(A).stack, void (-5777 + 1 * 2909 + 1 * 2868) !== A && (this.stack = this.toString() + `
` + A.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return l.prototype = Object.create(I.prototype), l.prototype.constructor = l, l.prototype.toString = function() {
        return void (-6678 + -995 * 1 + 7673) === this.message ? this.name : this.name + ": " + this.message;
      }, l;
    }
    var Lt = void (2503 + -9995 * -1 + -12498);
    function D(c) {
      throw new Lt(c);
    }
    var pr = void 0;
    function Yn(c) {
      throw new pr(c);
    }
    function Tt(c, I, l) {
      function A(y) {
        y = l(y), y.length !== c.length && Yn("Mismatched type converter count");
        for (var H = -109 * 1 + 5390 + -5281; H < c.length; ++H)
          tt(c[H], y[H]);
      }
      c.forEach(function(y) {
        Nn[y] = I;
      });
      var m = Array(I.length), b = [], S = 4 * -843 + -1112 + 4484;
      I.forEach(function(y, H) {
        bt.hasOwnProperty(y) ? m[H] = bt[y] : (b.push(y), Yt.hasOwnProperty(y) || (Yt[y] = []), Yt[y].push(function() {
          m[H] = bt[y], ++S, S === b.length && A(m);
        }));
      }), 3 * 713 + 1621 * 4 + -8623 === b.length && A(m);
    }
    function tt(c, I, l) {
      if (l = l || {}, !("argPackAdvance" in I))
        throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var A = I.name;
      if (c || D('type "' + A + '" must have a positive integer typeid pointer'), bt.hasOwnProperty(c)) {
        if (l.Ea)
          return;
        D("Cannot register type '" + A + "' twice");
      }
      bt[c] = I, delete Nn[c], Yt.hasOwnProperty(c) && (I = Yt[c], delete Yt[c], I.forEach(function(m) {
        m();
      }));
    }
    function Ds(c) {
      var I = {};
      return I.count = c.count, I.oa = c.oa, I.pa = c.pa, I.da = c.da, I.fa = c.fa, I.ga = c.ga, I.ha = c.ha, I;
    }
    function jo(c) {
      D(c.A.fa.ea.name + " instance already deleted");
    }
    var Mo = !(-9385 * -1 + 1 * 3457 + -12841);
    function hr() {
    }
    function fr(c) {
      --c.count.value, -5888 * -1 + -7172 + 4 * 321 === c.count.value && (c.ga ? c.ha.na(c.ga) : c.fa.ea.na(c.da));
    }
    function Cn(c) {
      return typeof FinalizationGroup > "u" ? (Cn = function(I) {
        return I;
      }, c) : (Mo = new FinalizationGroup(function(I) {
        for (var l = I.next(); !l.done; l = I.next())
          l = l.value, l.da ? fr(l) : console.warn("object already deleted: " + l.da);
      }), Cn = function(I) {
        return Mo.register(I, I.A, I.A), I;
      }, hr = function(I) {
        Mo.unregister(I.A);
      }, Cn(c));
    }
    var dn = void (29 * -79 + -261 * -2 + 1769), An = [];
    function Jo() {
      for (; An.length; ) {
        var c = An.pop();
        c.A.oa = !(3 * 340 + -3429 + 241 * 10), c.delete();
      }
    }
    function ct() {
    }
    var mr = {};
    function Fs(c, I) {
      var l = e;
      if (void (347 + 1 * -6542 + 6195) === l[c].ja) {
        var A = l[c];
        l[c] = function() {
          return l[c].ja.hasOwnProperty(arguments.length) || D("Function '" + I + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + l[c].ja + ")!"), l[c].ja[arguments.length].apply(this, arguments);
        }, l[c].ja = [], l[c].ja[A.ya] = A;
      }
    }
    function br(c, I, l) {
      e.hasOwnProperty(c) ? ((void (9679 * -1 + 119 * 19 + 7418) === l || void (3729 + 6385 * -1 + 8 * 332) !== e[c].ja && void (-1223 * 7 + 1 * 1373 + 3 * 2396) !== e[c].ja[l]) && D("Cannot register public name '" + c + "' twice"), Fs(c, c), e.hasOwnProperty(l) && D("Cannot register multiple overloads of a function with the same number of arguments (" + l + ")!"), e[c].ja[l] = I) : (e[c] = I, void (-9362 + 15 * -361 + 14777) !== l && (e[c].Ra = l));
    }
    function Xs(c, I, l, A, m, b, S, y) {
      this.name = c, this.constructor = I, this.ma = l, this.na = A, this.ia = m, this.Ca = b, this.qa = S, this.Aa = y;
    }
    function Ln(c, I, l) {
      for (; I !== l; )
        I.qa || D("Expected null or instance of " + l.name + ", got an instance of " + I.name), c = I.qa(c), I = I.ia;
      return c;
    }
    function js(c, I) {
      return I === null ? (this.ua && D("null is not a valid " + this.name), 3228 + -1 * -4490 + -7718) : (I.A || D('Cannot pass "' + Ft(I) + '" as a ' + this.name), I.A.da || D("Cannot pass deleted object as a pointer of type " + this.name), Ln(I.A.da, I.A.fa.ea, this.ea));
    }
    function Ms(c, I) {
      if (I === null) {
        if (this.ua && D("null is not a valid " + this.name), this.sa) {
          var l = this.Ha();
          return c !== null && c.push(this.na, l), l;
        }
        return -3915 + -22 * -182 + -89;
      }
      if (I.A || D('Cannot pass "' + Ft(I) + '" as a ' + this.name), I.A.da || D("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && I.A.fa.ra && D("Cannot convert argument of type " + (I.A.ha ? I.A.ha.name : I.A.fa.name) + " to parameter type " + this.name), l = Ln(I.A.da, I.A.fa.ea, this.ea), this.sa)
        switch (void (6386 * -1 + 5042 + 1344) === I.A.ga && D("Passing raw pointer to smart pointer is illegal"), this.Pa) {
          case 4847 + -4847 * 1:
            I.A.ha === this ? l = I.A.ga : D("Cannot convert argument of type " + (I.A.ha ? I.A.ha.name : I.A.fa.name) + " to parameter type " + this.name);
            break;
          case 1:
            l = I.A.ga;
            break;
          case 408 * 1 + -9080 + -4337 * -2:
            if (I.A.ha === this)
              l = I.A.ga;
            else {
              var A = I.clone();
              l = this.Ia(l, Dt(function() {
                A.delete();
              })), c !== null && c.push(this.na, l);
            }
            break;
          default:
            D("Unsupporting sharing policy");
        }
      return l;
    }
    function Js(c, I) {
      return I === null ? (this.ua && D("null is not a valid " + this.name), 3339 + -6 * 254 + -1815) : (I.A || D('Cannot pass "' + Ft(I) + '" as a ' + this.name), I.A.da || D("Cannot pass deleted object as a pointer of type " + this.name), I.A.fa.ra && D("Cannot convert argument of type " + I.A.fa.name + " to parameter type " + this.name), Ln(I.A.da, I.A.fa.ea, this.ea));
    }
    function Tn(c) {
      return this.fromWireType(de[c >> -1 * -3259 + 6199 * 1 + -9456]);
    }
    function yr(c, I, l) {
      return I === l ? c : l.ia === void 0 ? null : (c = yr(c, I, l.ia), c === null ? null : l.Aa(c));
    }
    var pn = {};
    function Us(c, I) {
      for (void (1814 * -1 + 1 * -4282 + 6096) === I && D("ptr should not be undefined"); c.ia; )
        I = c.qa(I), c = c.ia;
      return pn[I];
    }
    function Dn(c, I) {
      I.fa && I.da || Yn("makeClassHandle requires ptr and ptrType"), !!I.ha != !!I.ga && Yn("Both smartPtrType and smartPtr must be specified");
      var l = {};
      l.value = 1, I.count = l;
      var A = {};
      A.value = I;
      var m = {};
      return m.A = A, Cn(Object.create(c, m));
    }
    function nt(c, I, l, A) {
      this.name = c, this.ea = I, this.ua = l, this.ra = A, this.sa = !(-181 * 37 + 8632 + -1934), this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void (-3 * -2789 + -4884 + -3483), void (-6 * -1230 + 64 * 103 + -13972) !== I.ia ? this.toWireType = Ms : (this.toWireType = A ? js : Js, this.ka = null);
    }
    function vr(c, I, l) {
      e.hasOwnProperty(c) || Yn("Replacing nonexistant public symbol"), void (7729 + 123 * 26 + -10927) !== e[c].ja && l !== void 0 ? e[c].ja[l] = I : (e[c] = I, e[c].ya = l);
    }
    function It(c, I) {
      c = be(c);
      var l = Lo(c, I);
      return typeof l != "function" && D("unknown function pointer with signature " + c + ": " + I), l;
    }
    var wr = void 0;
    function Br(c) {
      c = Yr(c);
      var I = be(c);
      return ot(c), I;
    }
    function hn(c, I) {
      function l(b) {
        m[b] || bt[b] || (Nn[b] ? Nn[b].forEach(l) : (A.push(b), m[b] = !(-3555 + -3 * 1486 + 8013)));
      }
      var A = [], m = {};
      throw I.forEach(l), new wr(c + ": " + A.map(Br).join([", "]));
    }
    function Sr(c, I) {
      for (var l = [], A = -1889 + 2 * 1747 + -1605; A < c; A++)
        l.push(ae[(I >> -4231 * 1 + 5828 + -1595 * 1) + A]);
      return l;
    }
    function Fn(c) {
      for (; c.length; ) {
        var I = c.pop();
        c.pop()(I);
      }
    }
    function Gr(c, I, l) {
      return c instanceof Object || D(l + ' with invalid "this": ' + c), c instanceof I.ea.constructor || D(l + ' incompatible with "this" of type ' + c.constructor.name), c.A.da || D("cannot call emscripten binding method " + l + " on deleted object"), Ln(c.A.da, c.A.fa.ea, I.ea);
    }
    var Zr = {};
    Zr.value = void (6778 + -29 * 97 + -3965);
    var kr = {};
    kr.value = null;
    var Kr = {};
    Kr.value = !0;
    var Hr = {};
    Hr.value = !(493 * -9 + -41 * -12 + 3946);
    var Uo = [], Ke = [{}, Zr, kr, Kr, Hr];
    function Qo(c) {
      4426 + -134 * 33 < c && -17 * 158 + -4503 + 7189 === --Ke[c].Ja && (Ke[c] = void (8596 + -435 * -6 + -11206), Uo.push(c));
    }
    function Dt(c) {
      switch (c) {
        case void (2767 + 6267 * -1 + 3500):
          return 3571 + -13 * -289 + -7327;
        case null:
          return 17 * 302 + -11 * 701 + 2579;
        case !(2310 + -6 * 1661 + -8 * -957):
          return 2838 + 2835 * -1;
        case !(-464 * 12 + -5469 + -2 * -5519):
          return 6199 + 19 * -472 + 2773;
        default:
          var I = Uo.length ? Uo.pop() : Ke.length, l = {};
          return l.Ja = 1, l.value = c, Ke[I] = l, I;
      }
    }
    function Ft(c) {
      if (c === null)
        return "null";
      var I = typeof c;
      return I === "object" || I === "array" || I === "function" ? c.toString() : "" + c;
    }
    function Qs(c, I) {
      switch (I) {
        case 2:
          return function(l) {
            return this.fromWireType(ve[l >> 4847 + 6 * 252 + 2119 * -3]);
          };
        case 3775 * 1 + -1193 + -1 * 2579:
          return function(l) {
            return this.fromWireType(Ee[l >> 6698 + -12 * -67 + -7499]);
          };
        default:
          throw new TypeError("Unknown float type: " + c);
      }
    }
    function zs(c) {
      var I = Function;
      if (!(I instanceof Function))
        throw new TypeError("new_ called with constructor type " + typeof I + " which is not a function");
      var l = Fo(I.name || "unknownFunctionName", function() {
      });
      return l.prototype = I.prototype, l = new l(), c = I.apply(l, c), c instanceof Object ? c : l;
    }
    function $s(c, I, l) {
      switch (I) {
        case 1438 + -3 * -205 + -2053:
          return l ? function(A) {
            return fe[A];
          } : function(A) {
            return te[A];
          };
        case 1:
          return l ? function(A) {
            return je[A >> 28 * -281 + -5228 + 13097];
          } : function(A) {
            return me[A >> -8 * 524 + 2265 + 1928 * 1];
          };
        case 47 * 166 + 5121 + -12921:
          return l ? function(A) {
            return ae[A >> 2973 + 2971 * -1];
          } : function(A) {
            return de[A >> -3407 + 242 * -4 + 3 * 1459];
          };
        default:
          throw new TypeError("Unknown integer type: " + c);
      }
    }
    function zo(c) {
      return c || D("Cannot use deleted val. handle = " + c), Ke[c].value;
    }
    function Or(c, I) {
      var l = bt[c];
      return void (12721 + -1 * 12721) === l && D(I + " has unknown type " + Br(c)), l;
    }
    var qs = {}, Wr = {};
    function Rr() {
      if (!$o) {
        var c = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: g || "./this.program" }, I;
        for (I in Wr)
          c[I] = Wr[I];
        var l = [];
        for (I in c)
          l.push(I + "=" + c[I]);
        $o = l;
      }
      return $o;
    }
    var $o, Vr = [];
    function Er(c) {
      var I = {}, l;
      for (l in c)
        (function(A) {
          var m = c[A];
          I[A] = typeof m == "function" ? function() {
            Vr.push(A);
            try {
              return m.apply(null, arguments);
            } finally {
              if (E)
                return;
              var b = Vr.pop();
              B(b === A);
            }
          } : m;
        })(l);
      return I;
    }
    for (var Pr = Array(4213 + 8115 * -1 + 4158), Xn = 2029 + 3 * 1445 + -6364; 1 * -214 + 5485 + -5015 > Xn; ++Xn)
      Pr[Xn] = String.fromCharCode(Xn);
    Ar = Pr, Lt = e.BindingError = Xo("BindingError"), pr = e.InternalError = Xo("InternalError"), ct.prototype.isAliasOf = function(c) {
      if (!(this instanceof ct && c instanceof ct))
        return !(-19 * -127 + 5847 * -1 + 5 * 687);
      var I = this.A.fa.ea, l = this.A.da, A = c.A.fa.ea;
      for (c = c.A.da; I.ia; )
        l = I.qa(l), I = I.ia;
      for (; A.ia; )
        c = A.qa(c), A = A.ia;
      return I === A && l === c;
    }, ct.prototype.clone = function() {
      if (this.A.da || jo(this), this.A.pa)
        return this.A.count.value += 7 * 618 + -2335 + -1990, this;
      var c = Cn(Object.create(Object.getPrototypeOf(this), { A: { value: Ds(this.A) } }));
      return c.A.count.value += 1, c.A.oa = !(-5 * 1429 + 9082 + 968 * -2), c;
    }, ct.prototype.delete = function() {
      this.A.da || jo(this), this.A.oa && !this.A.pa && D("Object already scheduled for deletion"), hr(this), fr(this.A), this.A.pa || (this.A.ga = void (4922 + -55 * 12 + -2 * 2131), this.A.da = void (-2 * 1223 + -7746 + -5096 * -2));
    }, ct.prototype.isDeleted = function() {
      return !this.A.da;
    }, ct.prototype.deleteLater = function() {
      return this.A.da || jo(this), this.A.oa && !this.A.pa && D("Object already scheduled for deletion"), An.push(this), 649 * -1 + -7748 + 8398 === An.length && dn && dn(Jo), this.A.oa = !(-1 * 5948 + 1 * 1684 + -13 * -328), this;
    }, nt.prototype.Da = function(c) {
      return this.wa && (c = this.wa(c)), c;
    }, nt.prototype.va = function(c) {
      this.na && this.na(c);
    }, nt.prototype.argPackAdvance = 8, nt.prototype.readValueFromPointer = Tn, nt.prototype.deleteObject = function(c) {
      c !== null && c.delete();
    }, nt.prototype.fromWireType = function(c) {
      function I() {
        return this.sa ? Dn(this.ea.ma, { fa: this.Ga, da: l, ha: this, ga: c }) : Dn(this.ea.ma, { fa: this, da: c });
      }
      var l = this.Da(c);
      if (!l)
        return this.va(c), null;
      var A = Us(this.ea, l);
      if (void (8961 + 87 * -103) !== A)
        return A.A.count.value === 0 ? (A.A.da = l, A.A.ga = c, A.clone()) : (A = A.clone(), this.va(c), A);
      if (A = this.ea.Ca(l), A = mr[A], !A)
        return I.call(this);
      A = this.ra ? A.za : A.pointerType;
      var m = yr(l, this.ea, A.ea);
      return m === null ? I.call(this) : this.sa ? Dn(A.ea.ma, { fa: A, da: m, ha: this, ga: c }) : Dn(A.ea.ma, { fa: A, da: m });
    }, e.getInheritedInstanceCount = function() {
      return Object.keys(pn).length;
    }, e.getLiveInheritedInstances = function() {
      var c = [], I;
      for (I in pn)
        pn.hasOwnProperty(I) && c.push(pn[I]);
      return c;
    }, e.flushPendingDeletes = Jo, e.setDelayFunction = function(c) {
      dn = c, An.length && dn && dn(Jo);
    }, wr = e.UnboundTypeError = Xo("UnboundTypeError"), e.count_emval_handles = function() {
      for (var c = -2158 + -1 * -4933 + -2775, I = -10 * -878 + -3723 + -4 * 1263; I < Ke.length; ++I)
        void (-8152 + -5 * 1383 + 793 * 19) !== Ke[I] && ++c;
      return c;
    }, e.get_first_emval = function() {
      for (var c = 1519 * 3 + 2461 + 7013 * -1; c < Ke.length; ++c)
        if (void (-9881 + -6234 * -1 + 3647) !== Ke[c])
          return Ke[c];
      return null;
    }, Pt.push({ Ba: function() {
      Nr();
    } });
    var _s = { z: function(c) {
      return jn(c + (-10 * -719 + -2 * -3537 + -13 * 1096)) + (3 * -1039 + -7088 + 10221);
    }, u: function(c, I, l) {
      throw new Ts(c).Fa(I, l), "uncaught_exception" in Pn ? Pn.xa++ : Pn.xa = -8930 * 1 + -5861 * 1 + 7396 * 2, c;
    }, w: function(c, I, l, A, m) {
      var b = To(l);
      I = be(I), tt(c, { name: I, fromWireType: function(S) {
        return !!S;
      }, toWireType: function(S, y) {
        return y ? A : m;
      }, argPackAdvance: 8, readValueFromPointer: function(S) {
        if (-6057 + -13 * -466 === l)
          var y = fe;
        else if (-9074 * -1 + -4 * -1401 + -2 * 7338 === l)
          y = je;
        else if (-4958 + 46 * 49 + 2708 === l)
          y = ae;
        else
          throw new TypeError("Unknown boolean type size: " + I);
        return this.fromWireType(y[S >> b]);
      }, ka: null });
    }, i: function(c, I, l, A, m, b, S, y, H, W, R, V, U) {
      R = be(R), b = It(m, b), y && (y = It(S, y)), W && (W = It(H, W)), U = It(V, U);
      var ce = Do(R);
      br(ce, function() {
        hn("Cannot construct " + R + " due to unbound types", [A]);
      }), Tt([c, I, l], A ? [A] : [], function(P) {
        if (P = P[-3390 + 10 * 339], A)
          var Je = P.ea, pe = Je.ma;
        else
          pe = ct.prototype;
        P = Fo(ce, function() {
          if (Object.getPrototypeOf(this) !== Xt)
            throw new Lt("Use 'new' to construct " + R);
          if (void (-31 * 153 + -5364 + -10107 * -1) === jt.la)
            throw new Lt(R + " has no accessible constructor");
          var Tr = jt.la[arguments.length];
          if (void (1357 * -7 + -7852 + 17351) === Tr)
            throw new Lt("Tried to invoke ctor of " + R + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(jt.la).toString() + ") parameters instead!");
          return Tr.apply(this, arguments);
        });
        var Be = {};
        Be.value = P;
        var yt = {};
        yt.constructor = Be;
        var Xt = Object.create(pe, yt);
        P.prototype = Xt;
        var jt = new Xs(R, P, Xt, U, Je, b, y, W);
        Je = new nt(R, jt, !(1 * -8026 + -15 * -557 + -329), !(-849 * 11 + -5234 + -21 * -694)), pe = new nt(R + "*", jt, !(4976 * 1 + -1 * -7811 + -12786), !(-16778 + -7 * -2397));
        var Lr = new nt(R + " const*", jt, !(1 * 7822 + 3371 * -2 + -1079), !(-8190 + 1 * -2993 + 11183)), _o = {};
        return _o.pointerType = pe, _o.za = Lr, mr[c] = _o, vr(ce, P), [Je, pe, Lr];
      });
    }, h: function(c, I, l, A, m, b) {
      B(6 * -1399 + -8525 + 16919 * 1 < I);
      var S = Sr(I, l);
      m = It(A, m);
      var y = [b], H = [];
      Tt([], [c], function(W) {
        W = W[13788 + 1532 * -9];
        var R = "constructor " + W.name;
        if (W.ea.la === void 0 && (W.ea.la = []), void (-1587 + 2 * -811 + -1 * -3209) !== W.ea.la[I - 1])
          throw new Lt("Cannot register multiple constructors with identical number of parameters (" + (I - (88 + 1 * -87)) + ") for class '" + W.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return W.ea.la[I - (21 * 181 + 7642 + 1907 * -6)] = function() {
          hn("Cannot construct " + W.name + " due to unbound types", S);
        }, Tt([], S, function(V) {
          return W.ea.la[I - (7652 + 451 * 3 + -9004)] = function() {
            arguments.length !== I - 1 && D(R + " called with " + arguments.length + " arguments, expected " + (I - (-8941 + -3 * 843 + 11471))), H.length = 1476 + -1 * 5899 + 4423 * 1, y.length = I;
            for (var U = 521 * -10 + 1983 + 3228; U < I; ++U)
              y[U] = V[U].toWireType(H, arguments[U - (4688 + -1987 * -1 + -47 * 142)]);
            return U = m.apply(null, y), Fn(H), V[-1 * -1058 + -1717 * 1 + -659 * -1].fromWireType(U);
          }, [];
        }), [];
      });
    }, b: function(c, I, l, A, m, b, S, y, H, W) {
      I = be(I), m = It(A, m), Tt([], [c], function(R) {
        R = R[-4060 * -2 + -2 * -4468 + -17056];
        var V = R.name + "." + I, U = { get: function() {
          hn("Cannot access " + V + " due to unbound types", [l, S]);
        }, enumerable: !(7675 + 25 * 41 + -8700), configurable: !(2 * -1072 + 8499 * -1 + 10643) };
        return H ? U.set = function() {
          hn("Cannot access " + V + " due to unbound types", [l, S]);
        } : U.set = function() {
          D(V + " is a read-only property");
        }, Object.defineProperty(R.ea.ma, I, U), Tt([], H ? [l, S] : [l], function(ce) {
          var P = ce[0], Je = { get: function() {
            var Be = Gr(this, R, V + " getter");
            return P.fromWireType(m(b, Be));
          }, enumerable: !0 };
          if (H) {
            H = It(y, H);
            var pe = ce[4079 + 5 * 463 + 6393 * -1];
            Je.set = function(Be) {
              var yt = Gr(this, R, V + " setter"), Xt = [];
              H(W, yt, pe.toWireType(Xt, Be)), Fn(Xt);
            };
          }
          return Object.defineProperty(R.ea.ma, I, Je), [];
        }), [];
      });
    }, v: function(c, I) {
      I = be(I), tt(c, { name: I, fromWireType: function(l) {
        var A = Ke[l].value;
        return Qo(l), A;
      }, toWireType: function(l, A) {
        return Dt(A);
      }, argPackAdvance: 8, readValueFromPointer: Tn, ka: null });
    }, m: function(c, I, l) {
      l = To(l), I = be(I), tt(c, { name: I, fromWireType: function(A) {
        return A;
      }, toWireType: function(A, m) {
        if (typeof m != "number" && typeof m != "boolean")
          throw new TypeError('Cannot convert "' + Ft(m) + '" to ' + this.name);
        return m;
      }, argPackAdvance: 8, readValueFromPointer: Qs(I, l), ka: null });
    }, c: function(c, I, l, A, m, b) {
      var S = Sr(I, l);
      c = be(c), m = It(A, m), br(c, function() {
        hn("Cannot call " + c + " due to unbound types", S);
      }, I - (-5775 + -15 * -474 + -1334)), Tt([], S, function(y) {
        var H = c, W = c;
        y = [y[0], null].concat(y.slice(-625 + -4171 * 2 + 8968 * 1));
        var R = m, V = y.length;
        2 > V && D("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var U = y[8641 + -1080 * 8] !== null && !(-7758 + 1803 * -3 + 13168), ce = !(2 * 3574 + -1558 * -2 + -10263), P = -5713 * 1 + 488 * 10 + 834; P < y.length; ++P)
          if (y[P] !== null && void (7 * -331 + -1292 + 3609) === y[P].ka) {
            ce = !0;
            break;
          }
        var Je = y[-12 * -539 + 4659 + -11127].name !== "void", pe = "", Be = "";
        for (P = 7763 + -4153 * 1 + -361 * 10; P < V - (9755 + 1 * -4153 + -160 * 35); ++P)
          pe += (P !== 0 ? ", " : "") + "arg" + P, Be += (-9378 + -6 * -1563 !== P ? ", " : "") + "arg" + P + "Wired";
        W = "return function " + Do(W) + "(" + pe + `) {
if (arguments.length !== ` + (V - (1445 + -4006 * -1 + -5449)) + `) {
throwBindingError('function ` + W + " called with ' + arguments.length + ' arguments, expected " + (V - (-2294 * 1 + -3293 * -1 + -997)) + ` args!');
}
`, ce && (W += `var destructors = [];
`);
        var yt = ce ? "destructors" : "null";
        for (pe = "throwBindingError invoker fn runDestructors retType classParam".split(" "), R = [D, R, b, Fn, y[9785 + -212 * -44 + -19113], y[9164 + -1044 * 1 + -8119]], U && (W += "var thisWired = classParam.toWireType(" + yt + `, this);
`), P = -1 * -269 + -1 * -9166 + -17 * 555; P < V - (969 + -101 * -17 + -2684); ++P)
          W += "var arg" + P + "Wired = argType" + P + ".toWireType(" + yt + ", arg" + P + "); // " + y[P + (-5255 + -1 * 3223 + -10 * -848)].name + `
`, pe.push("argType" + P), R.push(y[P + (-4898 + -156 * 47 + 12232)]);
        if (U && (Be = "thisWired" + (-3512 + 1 * 3512 < Be.length ? ", " : "") + Be), W += (Je ? "var rv = " : "") + "invoker(fn" + (-5 * -1051 + 4928 + -10183 < Be.length ? ", " : "") + Be + `);
`, ce)
          W += `runDestructors(destructors);
`;
        else
          for (P = U ? -16447 + -2 * -8224 : 3 * -3039 + 1 * 9905 + -131 * 6; P < y.length; ++P)
            V = 3737 + -679 * -1 + -4415 === P ? "thisWired" : "arg" + (P - (-533 * -16 + -27 * 322 + 168)) + "Wired", y[P].ka !== null && (W += V + "_dtor(" + V + "); // " + y[P].name + `
`, pe.push(V + "_dtor"), R.push(y[P].ka));
        return Je && (W += `var ret = retType.fromWireType(rv);
return ret;
`), pe.push(W + `}
`), y = zs(pe).apply(null, R), vr(H, y, I - (6 * -1203 + 77 * 107 + -1020)), [];
      });
    }, e: function(c, I, l, A, m) {
      function b(W) {
        return W;
      }
      I = be(I), -(3 * -247 + -4881 + 5623) === m && (m = 147479 * -32449 + 1 * 333001972 + 8747511394);
      var S = To(l);
      if (1124 * -5 + 7757 * 1 + 2137 * -1 === A) {
        var y = 32 - 8 * l;
        b = function(W) {
          return W << y >>> y;
        };
      }
      var H = -(-716 * 2 + -3145 + 4578) != I.indexOf("unsigned");
      tt(c, { name: I, fromWireType: b, toWireType: function(W, R) {
        if (typeof R != "number" && typeof R != "boolean")
          throw new TypeError('Cannot convert "' + Ft(R) + '" to ' + this.name);
        if (R < A || R > m)
          throw new TypeError('Passing a number "' + Ft(R) + '" from JS side to C/C++ side to an argument of type "' + I + '", which is outside the valid range [' + A + ", " + m + "]!");
        return H ? R >>> 0 : R | 1731 + -103 * -19 + -1 * 3688;
      }, argPackAdvance: 8, readValueFromPointer: $s(I, S, A !== 0), ka: null });
    }, d: function(c, I, l) {
      function A(y) {
        y >>= -3306 + 1 * 3308;
        var H = de;
        return new m(ee, H[y + (-30 * 43 + -3 * 3033 + 10390)], H[y]);
      }
      var m = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][I];
      l = be(l);
      var b = {};
      b.name = l, b.fromWireType = A, b.argPackAdvance = 8, b.readValueFromPointer = A;
      var S = {};
      S.Ea = !(3061 + 1 * 6659 + -9720), tt(c, b, S);
    }, n: function(c, I) {
      I = be(I);
      var l = I === "std::string";
      tt(c, { name: I, fromWireType: function(A) {
        var m = de[A >> 2];
        if (l)
          for (var b = A + (139 + 1 * -5207 + 5072), S = 4773 + -1 * 4773; S <= m; ++S) {
            var y = A + 4 + S;
            if (S == m || 9020 + 2 * 461 + 1 * -9942 == te[y]) {
              if (b) {
                var H = b, W = te, R = H + (y - b);
                for (b = H; W[b] && !(b >= R); )
                  ++b;
                if (1 * 1841 + -33 * -296 + -11593 < b - H && W.subarray && k)
                  H = k.decode(W.subarray(H, b));
                else {
                  for (R = ""; H < b; ) {
                    var V = W[H++];
                    if (V & -5150 + -13 * -406) {
                      var U = W[H++] & 63;
                      if ((V & -109 * 65 + -74 * -32 + 4941 * 1) == 192)
                        R += String.fromCharCode((V & -17 * 211 + -1 * -7646 + 1 * -4028) << 32 * 301 + -1 * -5100 + -14726 | U);
                      else {
                        var ce = W[H++] & 63;
                        V = (V & -1 * 3849 + 2493 + 1596) == 224 ? (V & 7075 + -5 * 1412) << -6666 + 11 * -751 + -14939 * -1 | U << -7477 * -1 + 57 * -127 + -116 * 2 | ce : (V & -3982 * -2 + -2 * 3634 + -53 * 13) << 7964 + -53 * -123 + -14465 | U << 228 + -633 * 2 + 1050 | ce << -2 * 661 + 6005 + -4677 | W[H++] & -314 * 4 + -2 * 547 + 2413, -446 * 201 + 1 * -19354 + 174536 > V ? R += String.fromCharCode(V) : (V -= -1547 * 53 + -64320 + 5167 * 41, R += String.fromCharCode(26677 + -61 * 785 + 131 * 584 | V >> -5447 + 321 * 17, 229 * -383 + 11131 * 7 + 2 * 33055 | V & 7113 + 63 * 129 + -14217 * 1));
                      }
                    } else
                      R += String.fromCharCode(V);
                  }
                  H = R;
                }
              } else
                H = "";
              if (void (-3904 + 14 * -698 + 4 * 3419) === P)
                var P = H;
              else
                P += String.fromCharCode(5228 + 4 * -1307), P += H;
              b = y + 1;
            }
          }
        else {
          for (P = Array(m), S = 883 * -11 + 1 * -192 + 9905; S < m; ++S)
            P[S] = String.fromCharCode(te[A + (3700 + 56 * -66) + S]);
          P = P.join("");
        }
        return ot(A), P;
      }, toWireType: function(A, m) {
        m instanceof ArrayBuffer && (m = new Uint8Array(m));
        var b = typeof m == "string";
        b || m instanceof Uint8Array || m instanceof Uint8ClampedArray || m instanceof Int8Array || D("Cannot pass non-string to std::string");
        var S = (l && b ? function() {
          for (var W = 0, R = 5189 * -1 + -542 + 521 * 11; R < m.length; ++R) {
            var V = m.charCodeAt(R);
            -74803 + 197 * 2 + 8647 * 15 <= V && -78183 + -2791 * 13 + 11 * 15619 >= V && (V = 23145 + 1 * -88549 + 10 * 13094 + ((V & 1023) << 1430 + -401 * 23 + 289 * 27) | m.charCodeAt(++R) & 1 * 3631 + 9288 + -11896), 16480 + -5451 * 3 >= V ? ++W : W = 2047 >= V ? W + (103 * 13 + 5 * 1289 + -7782) : 65535 >= V ? W + (-13 * -375 + 6291 + -11163) : W + (-132 * 49 + -1 * -8759 + -2287);
          }
          return W;
        } : function() {
          return m.length;
        })(), y = jn(2126 + -383 * -17 + 8633 * -1 + S + (1 * 41 + 133 * -2 + 226));
        if (de[y >> 1 * -821 + -8508 + 9331] = S, l && b)
          K(m, y + (-65 * 134 + 194 * 7 + 3 * 2452), S + (2767 + 1 * -7903 + 1 * 5137));
        else if (b)
          for (b = -1048 * 3 + 3735 + -591 * 1; b < S; ++b) {
            var H = m.charCodeAt(b);
            746 * -1 + -11 * 59 + 1650 < H && (ot(y), D("String has UTF-16 code units that do not fit in 8 bits")), te[y + (107 * -11 + -4369 + 5550) + b] = H;
          }
        else
          for (b = 0; b < S; ++b)
            te[y + (-13422 + -1 * -13426) + b] = m[b];
        return A !== null && A.push(ot, y), y;
      }, argPackAdvance: 8, readValueFromPointer: Tn, ka: function(A) {
        ot(A);
      } });
    }, j: function(c, I, l) {
      if (l = be(l), -379 * 13 + 25 * -229 + 10654 === I)
        var A = F, m = L, b = X, S = function() {
          return me;
        }, y = -2059 + -206 * -10;
      else
        I === 4 && (A = O, m = $, b = z, S = function() {
          return de;
        }, y = 5053 + -5051 * 1);
      tt(c, { name: l, fromWireType: function(H) {
        for (var W = de[H >> 8494 * -1 + 3819 * -2 + 2689 * 6], R = S(), V, U = H + 4, ce = 78 * -127 + 2 * 4169 + -224 * -7; ce <= W; ++ce) {
          var P = H + 4 + ce * I;
          (ce == W || -13 * -82 + 8705 * -1 + 7639 == R[P >> y]) && (U = A(U, P - U), void (2595 * 1 + -5 * 1251 + 60 * 61) === V ? V = U : (V += String.fromCharCode(1405 + -697 * 14 + 1 * 8353), V += U), U = P + I);
        }
        return ot(H), V;
      }, toWireType: function(H, W) {
        typeof W != "string" && D("Cannot pass non-string to C++ string type " + l);
        var R = b(W), V = jn(3242 * 1 + -4510 + 3 * 424 + R + I);
        return de[V >> 2] = R >> y, m(W, V + (-3271 * -1 + 5327 + -1 * 8594), R + I), H !== null && H.push(ot, V), V;
      }, argPackAdvance: 8, readValueFromPointer: Tn, ka: function(H) {
        ot(H);
      } });
    }, x: function(c, I) {
      I = be(I);
      var l = {};
      l.Qa = !(-10654 + -1522 * -7), l.name = I, l.argPackAdvance = 0, l.fromWireType = function() {
      }, l.toWireType = function() {
      }, tt(c, l);
    }, k: function(c, I, l) {
      c = zo(c), I = Or(I, "emval::as");
      var A = [], m = Dt(A);
      return ae[l >> 1486 + -1 * -7363 + -8847] = m, I.toWireType(A, c);
    }, g: Qo, l: function(c, I) {
      return c = zo(c), I = zo(I), Dt(c[I]);
    }, p: function(c) {
      var I = qs[c];
      return Dt(void (342 * -12 + 6574 + 19 * -130) === I ? be(c) : I);
    }, o: function(c) {
      Fn(Ke[c].value), Qo(c);
    }, y: function(c, I) {
      return c = Or(c, "_emval_take_value"), c = c.readValueFromPointer(I), Dt(c);
    }, f: function() {
      et();
    }, q: function(c, I, l) {
      te.copyWithin(c, I, I + l);
    }, r: function(c) {
      c >>>= -4934 * -2 + 4720 + -14588;
      var I = te.length;
      if (-1355261384 + -1 * -1850749742 + 1651995290 < c)
        return !1;
      for (var l = 7768 * -1 + -5630 + 1 * 13399; -1 * 7093 + -963 * -10 + 149 * -17 >= l; l *= -2 * 1765 + -747 + 4279) {
        var A = I * (1 + 0.2 / l);
        A = Math.min(A, c + (-19008435 * 8 + -178767119 + 431497895)), A = Math.max(20532119 + -8 * -3235405 + -3293127 * 9, c, A), -291 * 3 + 1 * -2661 + -6 * -589 < A % (-152283 + 203 * 1073) && (A += -101560 + -167096 * -1 - A % (-130589 + 2 * -20939 + 238003));
        e: {
          try {
            v.grow(Math.min(50 * -26326585 + -18 * -163606985 + 518887168, A) - ee.byteLength + (1 * -41563 + 86440 + 2 * 10329) >>> 5710 + 13 * -438), we(v.buffer);
            var m = 2194 + -1 * -7790 + -9983;
            break e;
          } catch {
          }
          m = void (3816 + -1 * 5198 + -1382 * -1);
        }
        if (m)
          return !(8758 + 2 * -4379);
      }
      return !(4005 + -364 * 11);
    }, s: function(c, I) {
      var l = 0;
      return Rr().forEach(function(A, m) {
        var b = I + l;
        for (m = ae[c + (34 * 113 + 1005 + 4843 * -1) * m >> -5 * -806 + -8 + -4020] = b, b = -153 + 153 * 1; b < A.length; ++b)
          fe[m++ >> 0] = A.charCodeAt(b);
        fe[m >> -6115 * 1 + 4919 * -1 + 11034] = 7812 + -87 * -33 + -10683, l += A.length + 1;
      }), -39 * -125 + 451 + 2 * -2663;
    }, t: function(c, I) {
      var l = Rr();
      ae[c >> 12524 + 6261 * -2] = l.length;
      var A = -36 * 263 + 421 * -22 + 1 * 18730;
      return l.forEach(function(m) {
        A += m.length + (-61 * -83 + 3901 * -1 + -1 * 1161);
      }), ae[I >> 1033 * -2 + 46 * 145 + -39 * 118] = A, 1 * 769 + 1868 + -2637;
    }, a: v };
    (function() {
      function c(S) {
        S = S.exports, S = Er(S), e.asm = S, Ge--, e.monitorRunDependencies && e.monitorRunDependencies(Ge), 42 * 201 + -19 * 53 + -1 * 7435 == Ge && Ze && (S = Ze, Ze = null, S());
      }
      function I(S) {
        c(S.instance);
      }
      function l(S) {
        return Ls().then(function(y) {
          return WebAssembly.instantiate(y, m);
        }).then(S, function(y) {
          h("failed to asynchronously prepare wasm: " + y), et(y);
        });
      }
      var A = {};
      A.a = _s;
      var m = A;
      if (Ge++, e.monitorRunDependencies && e.monitorRunDependencies(Ge), e.instantiateWasm)
        try {
          var b = e.instantiateWasm(m, c);
          return b = Er(b);
        } catch (S) {
          return h("Module.instantiateWasm callback failed with error: " + S), !1;
        }
      return function() {
        if (p || typeof WebAssembly.instantiateStreaming != "function" || Nt() || Ne("file://") || typeof fetch != "function")
          return l(I);
        var S = {};
        S.credentials = "same-origin", fetch(ke, S).then(function(y) {
          return WebAssembly.instantiateStreaming(y, m).then(I, function(H) {
            return h("wasm streaming compile failed: " + H), h("falling back to ArrayBuffer instantiation"), l(I);
          });
        });
      }(), {};
    })();
    var Nr = e.___wasm_call_ctors = function() {
      return (Nr = e.___wasm_call_ctors = e.asm.B).apply(null, arguments);
    }, jn = e._malloc = function() {
      return (jn = e._malloc = e.asm.C).apply(null, arguments);
    }, ot = e._free = function() {
      return (ot = e._free = e.asm.D).apply(null, arguments);
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
    var Mn;
    Ze = function c() {
      Mn || qo(), Mn || (Ze = c);
    };
    function qo() {
      function c() {
        if (!Mn && (Mn = !(-7043 * -1 + 3 * -2907 + 1678), e.calledRun = !(1 * 9181 + 7545 + -2 * 8363), !E)) {
          if (En(Pt), En(un), n(e), e.onRuntimeInitialized && e.onRuntimeInitialized(), e.postRun)
            for (typeof e.postRun == "function" && (e.postRun = [e.postRun]); e.postRun.length; ) {
              var I = e.postRun.shift();
              ft.unshift(I);
            }
          En(ft);
        }
      }
      if (!(-5284 + 25 * 11 + 1 * 5009 < Ge)) {
        if (e.preRun)
          for (typeof e.preRun == "function" && (e.preRun = [e.preRun]); e.preRun.length; )
            mt();
        En(Ae), 64 + 1 * -2246 + 2182 < Ge || (e.setStatus ? (e.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            e.setStatus("");
          }, 15 * -421 + -5738 + 12054), c();
        }, 1)) : c());
      }
    }
    if (e.run = qo, e.preInit)
      for (typeof e.preInit == "function" && (e.preInit = [e.preInit]); 3977 * -2 + 5045 + -1 * -2909 < e.preInit.length; )
        e.preInit.pop()();
    return qo(), i.ready;
  };
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const us = Symbol("Comlink.proxy"), Ux = Symbol("Comlink.endpoint"), Qx = Symbol("Comlink.releaseProxy"), Ii = Symbol("Comlink.finalizer"), lo = Symbol("Comlink.thrown"), Cs = (t) => typeof t == "object" && t !== null || typeof t == "function", zx = {
  canHandle: (t) => Cs(t) && t[us],
  serialize(t) {
    const { port1: i, port2: e } = new MessageChannel();
    return As(t, i), [e, [e]];
  },
  deserialize(t) {
    return t.start(), hs(t);
  }
}, $x = {
  canHandle: (t) => Cs(t) && lo in t,
  serialize({ value: t }) {
    let i;
    return t instanceof Error ? i = {
      isError: !0,
      value: {
        message: t.message,
        name: t.name,
        stack: t.stack
      }
    } : i = { isError: !1, value: t }, [i, []];
  },
  deserialize(t) {
    throw t.isError ? Object.assign(new Error(t.value.message), t.value) : t.value;
  }
}, ds = /* @__PURE__ */ new Map([
  ["proxy", zx],
  ["throw", $x]
]);
function qx(t, i) {
  for (const e of t)
    if (i === e || e === "*" || e instanceof RegExp && e.test(i))
      return !0;
  return !1;
}
function As(t, i = globalThis, e = ["*"]) {
  i.addEventListener("message", function n(o) {
    if (!o || !o.data)
      return;
    if (!qx(e, o.origin)) {
      console.warn(`Invalid origin '${o.origin}' for comlink proxy`);
      return;
    }
    const { id: r, type: a, path: g } = Object.assign({ path: [] }, o.data), s = (o.data.argumentList || []).map(Gt);
    let x;
    try {
      const C = g.slice(0, -1).reduce((h, p) => h[p], t), u = g.reduce((h, p) => h[p], t);
      switch (a) {
        case "GET":
          x = u;
          break;
        case "SET":
          C[g.slice(-1)[0]] = Gt(o.data.value), x = !0;
          break;
        case "APPLY":
          x = u.apply(C, s);
          break;
        case "CONSTRUCT":
          {
            const h = new u(...s);
            x = il(h);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: h, port2: p } = new MessageChannel();
            As(t, p), x = ol(h, [h]);
          }
          break;
        case "RELEASE":
          x = void 0;
          break;
        default:
          return;
      }
    } catch (C) {
      x = { value: C, [lo]: 0 };
    }
    Promise.resolve(x).catch((C) => ({ value: C, [lo]: 0 })).then((C) => {
      const [u, h] = yo(C);
      i.postMessage(Object.assign(Object.assign({}, u), { id: r }), h), a === "RELEASE" && (i.removeEventListener("message", n), ps(i), Ii in t && typeof t[Ii] == "function" && t[Ii]());
    }).catch((C) => {
      const [u, h] = yo({
        value: new TypeError("Unserializable return value"),
        [lo]: 0
      });
      i.postMessage(Object.assign(Object.assign({}, u), { id: r }), h);
    });
  }), i.start && i.start();
}
function _x(t) {
  return t.constructor.name === "MessagePort";
}
function ps(t) {
  _x(t) && t.close();
}
function hs(t, i) {
  return Yi(t, [], i);
}
function _n(t) {
  if (t)
    throw new Error("Proxy has been released and is not useable");
}
function fs(t) {
  return zt(t, {
    type: "RELEASE"
  }).then(() => {
    ps(t);
  });
}
const mo = /* @__PURE__ */ new WeakMap(), bo = "FinalizationRegistry" in globalThis && new FinalizationRegistry((t) => {
  const i = (mo.get(t) || 0) - 1;
  mo.set(t, i), i === 0 && fs(t);
});
function el(t, i) {
  const e = (mo.get(i) || 0) + 1;
  mo.set(i, e), bo && bo.register(t, i, t);
}
function tl(t) {
  bo && bo.unregister(t);
}
function Yi(t, i = [], e = function() {
}) {
  let n = !1;
  const o = new Proxy(e, {
    get(r, a) {
      if (_n(n), a === Qx)
        return () => {
          tl(o), fs(t), n = !0;
        };
      if (a === "then") {
        if (i.length === 0)
          return { then: () => o };
        const g = zt(t, {
          type: "GET",
          path: i.map((s) => s.toString())
        }).then(Gt);
        return g.then.bind(g);
      }
      return Yi(t, [...i, a]);
    },
    set(r, a, g) {
      _n(n);
      const [s, x] = yo(g);
      return zt(t, {
        type: "SET",
        path: [...i, a].map((C) => C.toString()),
        value: s
      }, x).then(Gt);
    },
    apply(r, a, g) {
      _n(n);
      const s = i[i.length - 1];
      if (s === Ux)
        return zt(t, {
          type: "ENDPOINT"
        }).then(Gt);
      if (s === "bind")
        return Yi(t, i.slice(0, -1));
      const [x, C] = Ka(g);
      return zt(t, {
        type: "APPLY",
        path: i.map((u) => u.toString()),
        argumentList: x
      }, C).then(Gt);
    },
    construct(r, a) {
      _n(n);
      const [g, s] = Ka(a);
      return zt(t, {
        type: "CONSTRUCT",
        path: i.map((x) => x.toString()),
        argumentList: g
      }, s).then(Gt);
    }
  });
  return el(o, t), o;
}
function nl(t) {
  return Array.prototype.concat.apply([], t);
}
function Ka(t) {
  const i = t.map(yo);
  return [i.map((e) => e[0]), nl(i.map((e) => e[1]))];
}
const ms = /* @__PURE__ */ new WeakMap();
function ol(t, i) {
  return ms.set(t, i), t;
}
function il(t) {
  return Object.assign(t, { [us]: !0 });
}
function yo(t) {
  for (const [i, e] of ds)
    if (e.canHandle(t)) {
      const [n, o] = e.serialize(t);
      return [
        {
          type: "HANDLER",
          name: i,
          value: n
        },
        o
      ];
    }
  return [
    {
      type: "RAW",
      value: t
    },
    ms.get(t) || []
  ];
}
function Gt(t) {
  switch (t.type) {
    case "HANDLER":
      return ds.get(t.name).deserialize(t.value);
    case "RAW":
      return t.value;
  }
}
function zt(t, i, e) {
  return new Promise((n) => {
    const o = rl();
    t.addEventListener("message", function r(a) {
      !a.data || !a.data.id || a.data.id !== o || (t.removeEventListener("message", r), n(a.data));
    }), t.start && t.start(), t.postMessage(Object.assign({ id: o }, i), e);
  });
}
function rl() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
function al(t, i) {
  const { z: e } = i || {};
  return !e || !t ? !0 : Math.abs(e) < t;
}
function gl(t, i, e) {
  const n = xs(e, t), o = ls(i, e);
  return Ox(o, n);
}
const bs = "dmFyIHNlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5Owp2YXIgdWUgPSAobywgdSwgZSkgPT4gdSBpbiBvID8gc2UobywgdSwgeyBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwLCB2YWx1ZTogZSB9KSA6IG9bdV0gPSBlOwp2YXIgWW4gPSAobywgdSwgZSkgPT4gKHVlKG8sIHR5cGVvZiB1ICE9ICJzeW1ib2wiID8gdSArICIiIDogdSwgZSksIGUpOwpjb25zdCBXdCA9IHsKICBzaW1kOiAic2FtX3NpbWQud2FzbSIsCiAgc2FtOiAic2FtLndhc20iCn0sIGxlID0gYXN5bmMgKCkgPT4gV2ViQXNzZW1ibHkudmFsaWRhdGUobmV3IFVpbnQ4QXJyYXkoWzAsIDk3LCAxMTUsIDEwOSwgMSwgMCwgMCwgMCwgMSwgNSwgMSwgOTYsIDAsIDEsIDEyMywgMywgMiwgMSwgMCwgMTAsIDEwLCAxLCA4LCAwLCA2NSwgMCwgMjUzLCAxNSwgMjUzLCA5OCwgMTFdKSk7CmNsYXNzIHggZXh0ZW5kcyBFcnJvciB7CiAgY29uc3RydWN0b3IoZSwgbSkgewogICAgc3VwZXIoZSk7CiAgICBZbih0aGlzLCAiY2F1c2UiKTsKICAgIHRoaXMubmFtZSA9ICJBdXRvQ2FwdHVyZUVycm9yIiwgdGhpcy5jYXVzZSA9IG07CiAgfQogIC8vIENoYW5nZSB0aGlzIHRvIERlY29yYXRvciB3aGVuIHRoZXkgd2lsbCBiZSBpbiBzdGFibGUgcmVsZWFzZQogIHN0YXRpYyBsb2dFcnJvcihlKSB7CiAgfQogIHN0YXRpYyBmcm9tQ2FtZXJhRXJyb3IoZSkgewogICAgaWYgKHRoaXMubG9nRXJyb3IoZSksIGUgaW5zdGFuY2VvZiB4KQogICAgICByZXR1cm4gZTsKICAgIGxldCBtOwogICAgc3dpdGNoIChlLm5hbWUpIHsKICAgICAgY2FzZSAiT3ZlcmNvbnN0cmFpbmVkRXJyb3IiOgogICAgICAgIG0gPSAiTWluaW11bSBxdWFsaXR5IHJlcXVpcmVtZW50cyBhcmUgbm90IG1ldCBieSB5b3VyIGNhbWVyYSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdFJlYWRhYmxlRXJyb3IiOgogICAgICBjYXNlICJBYm9ydEVycm9yIjoKICAgICAgICBtID0gIlRoZSB3ZWJjYW0gaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciBhcHBsaWNhdGlvbiI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdEFsbG93ZWRFcnJvciI6CiAgICAgICAgbSA9ICJUbyB1c2UgeW91ciBjYW1lcmEsIHlvdSBtdXN0IGFsbG93IHBlcm1pc3Npb25zIjsKICAgICAgICBicmVhazsKICAgICAgY2FzZSAiTm90Rm91bmRFcnJvciI6CiAgICAgICAgbSA9ICJUaGVyZSBpcyBubyBjYW1lcmEgYXZhaWxhYmxlIHRvIHlvdSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGRlZmF1bHQ6CiAgICAgICAgbSA9ICJBbiB1bmtub3duIGNhbWVyYSBlcnJvciBoYXMgb2NjdXJyZWQiOwogICAgICAgIGJyZWFrOwogICAgfQogICAgcmV0dXJuIG5ldyB4KG0sIGUpOwogIH0KICBzdGF0aWMgZnJvbUVycm9yKGUpIHsKICAgIGlmICh0aGlzLmxvZ0Vycm9yKGUpLCBlIGluc3RhbmNlb2YgeCkKICAgICAgcmV0dXJuIGU7CiAgICBjb25zdCBtID0gIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkIjsKICAgIHJldHVybiBuZXcgeChtKTsKICB9Cn0KY29uc3QgY2UgPSB7CiAgUkdCOiAiUkdCIiwKICBSR0JBOiAiUkdCQSIKfSwgZmUgPSAobykgPT4gTnVtYmVyLnBhcnNlRmxvYXQoby50b0ZpeGVkKDMpKSwgZGUgPSAobywgdSkgPT4gTWF0aC5taW4obywgdSk7CnZhciBoZSA9IGZ1bmN0aW9uKCkgewogIHZhciBvID0gdHlwZW9mIGRvY3VtZW50IDwgInUiICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgPyBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYyA6IHZvaWQgMDsKICByZXR1cm4gZnVuY3Rpb24odSkgewogICAgdSA9IHUgfHwge307CiAgICB2YXIgZTsKICAgIGUgfHwgKGUgPSB0eXBlb2YgdSA8ICJ1IiA/IHUgOiB7fSk7CiAgICB2YXIgbSwgZzsKICAgIGUucmVhZHkgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihuLCB0KSB7CiAgICAgIG0gPSBuLCBnID0gdDsKICAgIH0pOwogICAgdmFyIF8gPSB7fSwgdzsKICAgIGZvciAodyBpbiBlKQogICAgICBlLmhhc093blByb3BlcnR5KHcpICYmIChfW3ddID0gZVt3XSk7CiAgICB2YXIgVCA9ICIuL3RoaXMucHJvZ3JhbSIsIE0gPSAhMSwgRSA9ICExOwogICAgTSA9IHR5cGVvZiB3aW5kb3cgPT0gIm9iamVjdCIsIEUgPSB0eXBlb2YgaW1wb3J0U2NyaXB0cyA9PSAiZnVuY3Rpb24iOwogICAgdmFyIEMgPSAiIiwgUjsKICAgIChNIHx8IEUpICYmIChFID8gQyA9IHNlbGYubG9jYXRpb24uaHJlZiA6IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgKEMgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYyksIG8gJiYgKEMgPSBvKSwgQy5pbmRleE9mKCJibG9iOiIpICE9PSAwID8gQyA9IEMuc3Vic3RyKDAsIEMubGFzdEluZGV4T2YoIi8iKSArIDEpIDogQyA9ICIiLCBFICYmIChSID0gZnVuY3Rpb24obikgewogICAgICB2YXIgdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOwogICAgICByZXR1cm4gdC5vcGVuKCJHRVQiLCBuLCAhMSksIHQucmVzcG9uc2VUeXBlID0gImFycmF5YnVmZmVyIiwgdC5zZW5kKG51bGwpLCBuZXcgVWludDhBcnJheSh0LnJlc3BvbnNlKTsKICAgIH0pKTsKICAgIHZhciBTID0gZS5wcmludEVyciB8fCBjb25zb2xlLndhcm4uYmluZChjb25zb2xlKTsKICAgIGZvciAodyBpbiBfKQogICAgICBfLmhhc093blByb3BlcnR5KHcpICYmIChlW3ddID0gX1t3XSk7CiAgICBfID0gbnVsbCwgZS50aGlzUHJvZ3JhbSAmJiAoVCA9IGUudGhpc1Byb2dyYW0pOwogICAgdmFyIGo7CiAgICBlLndhc21CaW5hcnkgJiYgKGogPSBlLndhc21CaW5hcnkpLCBlLm5vRXhpdFJ1bnRpbWUgJiYgZS5ub0V4aXRSdW50aW1lLCB0eXBlb2YgV2ViQXNzZW1ibHkgIT0gIm9iamVjdCIgJiYgc24oIm5vIG5hdGl2ZSB3YXNtIHN1cHBvcnQgZGV0ZWN0ZWQiKTsKICAgIHZhciBHLCBrbiA9ICExOwogICAgZnVuY3Rpb24gWG4obikgewogICAgICBuIHx8IHNuKCJBc3NlcnRpb24gZmFpbGVkOiB1bmRlZmluZWQiKTsKICAgIH0KICAgIHZhciBLbiA9IHR5cGVvZiBUZXh0RGVjb2RlciA8ICJ1IiA/IG5ldyBUZXh0RGVjb2RlcigidXRmOCIpIDogdm9pZCAwOwogICAgZnVuY3Rpb24gTnQobiwgdCwgcikgewogICAgICB2YXIgaSA9IEY7CiAgICAgIGlmICgwIDwgcikgewogICAgICAgIHIgPSB0ICsgciAtIDE7CiAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBuLmxlbmd0aDsgKythKSB7CiAgICAgICAgICB2YXIgcyA9IG4uY2hhckNvZGVBdChhKTsKICAgICAgICAgIGlmICg1NTI5NiA8PSBzICYmIDU3MzQzID49IHMpIHsKICAgICAgICAgICAgdmFyIGMgPSBuLmNoYXJDb2RlQXQoKythKTsKICAgICAgICAgICAgcyA9IDY1NTM2ICsgKChzICYgMTAyMykgPDwgMTApIHwgYyAmIDEwMjM7CiAgICAgICAgICB9CiAgICAgICAgICBpZiAoMTI3ID49IHMpIHsKICAgICAgICAgICAgaWYgKHQgPj0gcikKICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgaVt0KytdID0gczsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIGlmICgyMDQ3ID49IHMpIHsKICAgICAgICAgICAgICBpZiAodCArIDEgPj0gcikKICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgIGlbdCsrXSA9IDE5MiB8IHMgPj4gNjsKICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICBpZiAoNjU1MzUgPj0gcykgewogICAgICAgICAgICAgICAgaWYgKHQgKyAyID49IHIpCiAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgaVt0KytdID0gMjI0IHwgcyA+PiAxMjsKICAgICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgaWYgKHQgKyAzID49IHIpCiAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgaVt0KytdID0gMjQwIHwgcyA+PiAxOCwgaVt0KytdID0gMTI4IHwgcyA+PiAxMiAmIDYzOwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgICBpW3QrK10gPSAxMjggfCBzID4+IDYgJiA2MzsKICAgICAgICAgICAgfQogICAgICAgICAgICBpW3QrK10gPSAxMjggfCBzICYgNjM7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIGlbdF0gPSAwOwogICAgICB9CiAgICB9CiAgICB2YXIgUW4gPSB0eXBlb2YgVGV4dERlY29kZXIgPCAidSIgPyBuZXcgVGV4dERlY29kZXIoInV0Zi0xNmxlIikgOiB2b2lkIDA7CiAgICBmdW5jdGlvbiBVdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSBuID4+IDEsIGkgPSByICsgdCAvIDI7ICEociA+PSBpKSAmJiBwbltyXTsgKQogICAgICAgICsrcjsKICAgICAgaWYgKHIgPDw9IDEsIDMyIDwgciAtIG4gJiYgUW4pCiAgICAgICAgcmV0dXJuIFFuLmRlY29kZShGLnN1YmFycmF5KG4sIHIpKTsKICAgICAgZm9yIChyID0gMCwgaSA9ICIiOyA7ICkgewogICAgICAgIHZhciBhID0gUVtuICsgMiAqIHIgPj4gMV07CiAgICAgICAgaWYgKGEgPT0gMCB8fCByID09IHQgLyAyKQogICAgICAgICAgcmV0dXJuIGk7CiAgICAgICAgKytyLCBpICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYSk7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIEh0KG4sIHQsIHIpIHsKICAgICAgaWYgKHIgPT09IHZvaWQgMCAmJiAociA9IDIxNDc0ODM2NDcpLCAyID4gcikKICAgICAgICByZXR1cm4gMDsKICAgICAgciAtPSAyOwogICAgICB2YXIgaSA9IHQ7CiAgICAgIHIgPSByIDwgMiAqIG4ubGVuZ3RoID8gciAvIDIgOiBuLmxlbmd0aDsKICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCByOyArK2EpCiAgICAgICAgUVt0ID4+IDFdID0gbi5jaGFyQ29kZUF0KGEpLCB0ICs9IDI7CiAgICAgIHJldHVybiBRW3QgPj4gMV0gPSAwLCB0IC0gaTsKICAgIH0KICAgIGZ1bmN0aW9uIHp0KG4pIHsKICAgICAgcmV0dXJuIDIgKiBuLmxlbmd0aDsKICAgIH0KICAgIGZ1bmN0aW9uIER0KG4sIHQpIHsKICAgICAgZm9yICh2YXIgciA9IDAsIGkgPSAiIjsgIShyID49IHQgLyA0KTsgKSB7CiAgICAgICAgdmFyIGEgPSBPW24gKyA0ICogciA+PiAyXTsKICAgICAgICBpZiAoYSA9PSAwKQogICAgICAgICAgYnJlYWs7CiAgICAgICAgKytyLCA2NTUzNiA8PSBhID8gKGEgLT0gNjU1MzYsIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiB8IGEgPj4gMTAsIDU2MzIwIHwgYSAmIDEwMjMpKSA6IGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShhKTsKICAgICAgfQogICAgICByZXR1cm4gaTsKICAgIH0KICAgIGZ1bmN0aW9uIEJ0KG4sIHQsIHIpIHsKICAgICAgaWYgKHIgPT09IHZvaWQgMCAmJiAociA9IDIxNDc0ODM2NDcpLCA0ID4gcikKICAgICAgICByZXR1cm4gMDsKICAgICAgdmFyIGkgPSB0OwogICAgICByID0gaSArIHIgLSA0OwogICAgICBmb3IgKHZhciBhID0gMDsgYSA8IG4ubGVuZ3RoOyArK2EpIHsKICAgICAgICB2YXIgcyA9IG4uY2hhckNvZGVBdChhKTsKICAgICAgICBpZiAoNTUyOTYgPD0gcyAmJiA1NzM0MyA+PSBzKSB7CiAgICAgICAgICB2YXIgYyA9IG4uY2hhckNvZGVBdCgrK2EpOwogICAgICAgICAgcyA9IDY1NTM2ICsgKChzICYgMTAyMykgPDwgMTApIHwgYyAmIDEwMjM7CiAgICAgICAgfQogICAgICAgIGlmIChPW3QgPj4gMl0gPSBzLCB0ICs9IDQsIHQgKyA0ID4gcikKICAgICAgICAgIGJyZWFrOwogICAgICB9CiAgICAgIHJldHVybiBPW3QgPj4gMl0gPSAwLCB0IC0gaTsKICAgIH0KICAgIGZ1bmN0aW9uIFZ0KG4pIHsKICAgICAgZm9yICh2YXIgdCA9IDAsIHIgPSAwOyByIDwgbi5sZW5ndGg7ICsrcikgewogICAgICAgIHZhciBpID0gbi5jaGFyQ29kZUF0KHIpOwogICAgICAgIDU1Mjk2IDw9IGkgJiYgNTczNDMgPj0gaSAmJiArK3IsIHQgKz0gNDsKICAgICAgfQogICAgICByZXR1cm4gdDsKICAgIH0KICAgIHZhciBLLCBZLCBGLCBRLCBwbiwgTywgVSwgcW4sIG50OwogICAgZnVuY3Rpb24gdHQobikgewogICAgICBLID0gbiwgZS5IRUFQOCA9IFkgPSBuZXcgSW50OEFycmF5KG4pLCBlLkhFQVAxNiA9IFEgPSBuZXcgSW50MTZBcnJheShuKSwgZS5IRUFQMzIgPSBPID0gbmV3IEludDMyQXJyYXkobiksIGUuSEVBUFU4ID0gRiA9IG5ldyBVaW50OEFycmF5KG4pLCBlLkhFQVBVMTYgPSBwbiA9IG5ldyBVaW50MTZBcnJheShuKSwgZS5IRUFQVTMyID0gVSA9IG5ldyBVaW50MzJBcnJheShuKSwgZS5IRUFQRjMyID0gcW4gPSBuZXcgRmxvYXQzMkFycmF5KG4pLCBlLkhFQVBGNjQgPSBudCA9IG5ldyBGbG9hdDY0QXJyYXkobik7CiAgICB9CiAgICB2YXIgZXQgPSBlLklOSVRJQUxfTUVNT1JZIHx8IDE2Nzc3MjE2OwogICAgZS53YXNtTWVtb3J5ID8gRyA9IGUud2FzbU1lbW9yeSA6IEcgPSBuZXcgV2ViQXNzZW1ibHkuTWVtb3J5KHsgaW5pdGlhbDogZXQgLyA2NTUzNiwgbWF4aW11bTogMzI3NjggfSksIEcgJiYgKEsgPSBHLmJ1ZmZlciksIGV0ID0gSy5ieXRlTGVuZ3RoLCB0dChLKTsKICAgIHZhciBydCA9IFtdLCBpdCA9IFtdLCBHdCA9IFtdLCBhdCA9IFtdOwogICAgZnVuY3Rpb24gWXQoKSB7CiAgICAgIHZhciBuID0gZS5wcmVSdW4uc2hpZnQoKTsKICAgICAgcnQudW5zaGlmdChuKTsKICAgIH0KICAgIHZhciBaID0gMCwgb24gPSBudWxsOwogICAgZS5wcmVsb2FkZWRJbWFnZXMgPSB7fSwgZS5wcmVsb2FkZWRBdWRpb3MgPSB7fTsKICAgIGZ1bmN0aW9uIHNuKG4pIHsKICAgICAgdGhyb3cgZS5vbkFib3J0ICYmIGUub25BYm9ydChuKSwgUyhuKSwga24gPSAhMCwgbiA9IG5ldyBXZWJBc3NlbWJseS5SdW50aW1lRXJyb3IoImFib3J0KCIgKyBuICsgIikuIEJ1aWxkIHdpdGggLXMgQVNTRVJUSU9OUz0xIGZvciBtb3JlIGluZm8uIiksIGcobiksIG47CiAgICB9CiAgICBmdW5jdGlvbiBSbihuKSB7CiAgICAgIHZhciB0ID0gJDsKICAgICAgcmV0dXJuIFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCA/IHQuc3RhcnRzV2l0aChuKSA6IHQuaW5kZXhPZihuKSA9PT0gMDsKICAgIH0KICAgIGZ1bmN0aW9uIG90KCkgewogICAgICByZXR1cm4gUm4oImRhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCwiKTsKICAgIH0KICAgIHZhciAkID0gInNhbS53YXNtIjsKICAgIGlmICghb3QoKSkgewogICAgICB2YXIgc3QgPSAkOwogICAgICAkID0gZS5sb2NhdGVGaWxlID8gZS5sb2NhdGVGaWxlKHN0LCBDKSA6IEMgKyBzdDsKICAgIH0KICAgIGZ1bmN0aW9uIHV0KCkgewogICAgICB0cnkgewogICAgICAgIGlmIChqKQogICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGopOwogICAgICAgIGlmIChSKQogICAgICAgICAgcmV0dXJuIFIoJCk7CiAgICAgICAgdGhyb3cgImJvdGggYXN5bmMgYW5kIHN5bmMgZmV0Y2hpbmcgb2YgdGhlIHdhc20gZmFpbGVkIjsKICAgICAgfSBjYXRjaCAobikgewogICAgICAgIHNuKG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBadCgpIHsKICAgICAgcmV0dXJuIGogfHwgIU0gJiYgIUUgfHwgdHlwZW9mIGZldGNoICE9ICJmdW5jdGlvbiIgfHwgUm4oImZpbGU6Ly8iKSA/IFByb21pc2UucmVzb2x2ZSgpLnRoZW4odXQpIDogZmV0Y2goJCwgeyBjcmVkZW50aWFsczogInNhbWUtb3JpZ2luIiB9KS50aGVuKGZ1bmN0aW9uKG4pIHsKICAgICAgICBpZiAoIW4ub2spCiAgICAgICAgICB0aHJvdyAiZmFpbGVkIHRvIGxvYWQgd2FzbSBiaW5hcnkgZmlsZSBhdCAnIiArICQgKyAiJyI7CiAgICAgICAgcmV0dXJuIG4uYXJyYXlCdWZmZXIoKTsKICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oKSB7CiAgICAgICAgcmV0dXJuIHV0KCk7CiAgICAgIH0pOwogICAgfQogICAgZnVuY3Rpb24geW4obikgewogICAgICBmb3IgKDsgMCA8IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4uc2hpZnQoKTsKICAgICAgICBpZiAodHlwZW9mIHQgPT0gImZ1bmN0aW9uIikKICAgICAgICAgIHQoZSk7CiAgICAgICAgZWxzZSB7CiAgICAgICAgICB2YXIgciA9IHQuQmE7CiAgICAgICAgICB0eXBlb2YgciA9PSAibnVtYmVyIiA/IHQudGEgPT09IHZvaWQgMCA/IEZuKCJ2IiwgcikoKSA6IEZuKCJ2aSIsIHIpKHQudGEpIDogcih0LnRhID09PSB2b2lkIDAgPyBudWxsIDogdC50YSk7CiAgICAgICAgfQogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBGbihuLCB0KSB7CiAgICAgIHZhciByID0gW107CiAgICAgIHJldHVybiBmdW5jdGlvbigpIHsKICAgICAgICByLmxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7CiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspCiAgICAgICAgICByW2ldID0gYXJndW1lbnRzW2ldOwogICAgICAgIHJldHVybiByICYmIHIubGVuZ3RoID8gZVsiZHluQ2FsbF8iICsgbl0uYXBwbHkobnVsbCwgW3RdLmNvbmNhdChyKSkgOiBlWyJkeW5DYWxsXyIgKyBuXS5jYWxsKG51bGwsIHQpOwogICAgICB9OwogICAgfQogICAgZnVuY3Rpb24gJHQobikgewogICAgICB0aGlzLmRhID0gbiAtIDE2LCB0aGlzLk9hID0gZnVuY3Rpb24odCkgewogICAgICAgIE9bdGhpcy5kYSArIDggPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLkxhID0gZnVuY3Rpb24odCkgewogICAgICAgIE9bdGhpcy5kYSArIDAgPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLk1hID0gZnVuY3Rpb24oKSB7CiAgICAgICAgT1t0aGlzLmRhICsgNCA+PiAyXSA9IDA7CiAgICAgIH0sIHRoaXMuS2EgPSBmdW5jdGlvbigpIHsKICAgICAgICBZW3RoaXMuZGEgKyAxMiA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuTmEgPSBmdW5jdGlvbigpIHsKICAgICAgICBZW3RoaXMuZGEgKyAxMyA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuRmEgPSBmdW5jdGlvbih0LCByKSB7CiAgICAgICAgdGhpcy5PYSh0KSwgdGhpcy5MYShyKSwgdGhpcy5NYSgpLCB0aGlzLkthKCksIHRoaXMuTmEoKTsKICAgICAgfTsKICAgIH0KICAgIGZ1bmN0aW9uIG1uKCkgewogICAgICByZXR1cm4gMCA8IG1uLnhhOwogICAgfQogICAgZnVuY3Rpb24geG4obikgewogICAgICBzd2l0Y2ggKG4pIHsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICByZXR1cm4gMDsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIDQ6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlIDg6CiAgICAgICAgICByZXR1cm4gMzsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biB0eXBlIHNpemU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgdmFyIGx0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gVyhuKSB7CiAgICAgIGZvciAodmFyIHQgPSAiIjsgRltuXTsgKQogICAgICAgIHQgKz0gbHRbRltuKytdXTsKICAgICAgcmV0dXJuIHQ7CiAgICB9CiAgICB2YXIgcSA9IHt9LCBKID0ge30sIHZuID0ge307CiAgICBmdW5jdGlvbiBJbihuKSB7CiAgICAgIGlmIChuID09PSB2b2lkIDApCiAgICAgICAgcmV0dXJuICJfdW5rbm93biI7CiAgICAgIG4gPSBuLnJlcGxhY2UoL1teYS16QS1aMC05X10vZywgIiQiKTsKICAgICAgdmFyIHQgPSBuLmNoYXJDb2RlQXQoMCk7CiAgICAgIHJldHVybiA0OCA8PSB0ICYmIDU3ID49IHQgPyAiXyIgKyBuIDogbjsKICAgIH0KICAgIGZ1bmN0aW9uIGpuKG4sIHQpIHsKICAgICAgcmV0dXJuIG4gPSBJbihuKSwgbmV3IEZ1bmN0aW9uKCJib2R5IiwgInJldHVybiBmdW5jdGlvbiAiICsgbiArIGAoKSB7CiAgICAidXNlIHN0cmljdCI7ICAgIHJldHVybiBib2R5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7Cn07CmApKHQpOwogICAgfQogICAgZnVuY3Rpb24gTG4obikgewogICAgICB2YXIgdCA9IEVycm9yLCByID0gam4obiwgZnVuY3Rpb24oaSkgewogICAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMubWVzc2FnZSA9IGksIGkgPSBFcnJvcihpKS5zdGFjaywgaSAhPT0gdm9pZCAwICYmICh0aGlzLnN0YWNrID0gdGhpcy50b1N0cmluZygpICsgYApgICsgaS5yZXBsYWNlKC9eRXJyb3IoOlteXG5dKik/XG4vLCAiIikpOwogICAgICB9KTsKICAgICAgcmV0dXJuIHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSksIHIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gciwgci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlID09PSB2b2lkIDAgPyB0aGlzLm5hbWUgOiB0aGlzLm5hbWUgKyAiOiAiICsgdGhpcy5tZXNzYWdlOwogICAgICB9LCByOwogICAgfQogICAgdmFyIG5uID0gdm9pZCAwOwogICAgZnVuY3Rpb24gdihuKSB7CiAgICAgIHRocm93IG5ldyBubihuKTsKICAgIH0KICAgIHZhciBjdCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIGduKG4pIHsKICAgICAgdGhyb3cgbmV3IGN0KG4pOwogICAgfQogICAgZnVuY3Rpb24gdG4obiwgdCwgcikgewogICAgICBmdW5jdGlvbiBpKGwpIHsKICAgICAgICBsID0gcihsKSwgbC5sZW5ndGggIT09IG4ubGVuZ3RoICYmIGduKCJNaXNtYXRjaGVkIHR5cGUgY29udmVydGVyIGNvdW50Iik7CiAgICAgICAgZm9yICh2YXIgcCA9IDA7IHAgPCBuLmxlbmd0aDsgKytwKQogICAgICAgICAgSChuW3BdLCBsW3BdKTsKICAgICAgfQogICAgICBuLmZvckVhY2goZnVuY3Rpb24obCkgewogICAgICAgIHZuW2xdID0gdDsKICAgICAgfSk7CiAgICAgIHZhciBhID0gQXJyYXkodC5sZW5ndGgpLCBzID0gW10sIGMgPSAwOwogICAgICB0LmZvckVhY2goZnVuY3Rpb24obCwgcCkgewogICAgICAgIEouaGFzT3duUHJvcGVydHkobCkgPyBhW3BdID0gSltsXSA6IChzLnB1c2gobCksIHEuaGFzT3duUHJvcGVydHkobCkgfHwgKHFbbF0gPSBbXSksIHFbbF0ucHVzaChmdW5jdGlvbigpIHsKICAgICAgICAgIGFbcF0gPSBKW2xdLCArK2MsIGMgPT09IHMubGVuZ3RoICYmIGkoYSk7CiAgICAgICAgfSkpOwogICAgICB9KSwgcy5sZW5ndGggPT09IDAgJiYgaShhKTsKICAgIH0KICAgIGZ1bmN0aW9uIEgobiwgdCwgcikgewogICAgICBpZiAociA9IHIgfHwge30sICEoImFyZ1BhY2tBZHZhbmNlIiBpbiB0KSkKICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJyZWdpc3RlclR5cGUgcmVnaXN0ZXJlZEluc3RhbmNlIHJlcXVpcmVzIGFyZ1BhY2tBZHZhbmNlIik7CiAgICAgIHZhciBpID0gdC5uYW1lOwogICAgICBpZiAobiB8fCB2KCd0eXBlICInICsgaSArICciIG11c3QgaGF2ZSBhIHBvc2l0aXZlIGludGVnZXIgdHlwZWlkIHBvaW50ZXInKSwgSi5oYXNPd25Qcm9wZXJ0eShuKSkgewogICAgICAgIGlmIChyLkVhKQogICAgICAgICAgcmV0dXJuOwogICAgICAgIHYoIkNhbm5vdCByZWdpc3RlciB0eXBlICciICsgaSArICInIHR3aWNlIik7CiAgICAgIH0KICAgICAgSltuXSA9IHQsIGRlbGV0ZSB2bltuXSwgcS5oYXNPd25Qcm9wZXJ0eShuKSAmJiAodCA9IHFbbl0sIGRlbGV0ZSBxW25dLCB0LmZvckVhY2goZnVuY3Rpb24oYSkgewogICAgICAgIGEoKTsKICAgICAgfSkpOwogICAgfQogICAgZnVuY3Rpb24gSnQobikgewogICAgICByZXR1cm4geyBjb3VudDogbi5jb3VudCwgb2E6IG4ub2EsIHBhOiBuLnBhLCBkYTogbi5kYSwgZmE6IG4uZmEsIGdhOiBuLmdhLCBoYTogbi5oYSB9OwogICAgfQogICAgZnVuY3Rpb24gTm4obikgewogICAgICB2KG4uQS5mYS5lYS5uYW1lICsgIiBpbnN0YW5jZSBhbHJlYWR5IGRlbGV0ZWQiKTsKICAgIH0KICAgIHZhciBVbiA9ICExOwogICAgZnVuY3Rpb24gZnQoKSB7CiAgICB9CiAgICBmdW5jdGlvbiBkdChuKSB7CiAgICAgIC0tbi5jb3VudC52YWx1ZSwgbi5jb3VudC52YWx1ZSA9PT0gMCAmJiAobi5nYSA/IG4uaGEubmEobi5nYSkgOiBuLmZhLmVhLm5hKG4uZGEpKTsKICAgIH0KICAgIGZ1bmN0aW9uIHVuKG4pIHsKICAgICAgcmV0dXJuIHR5cGVvZiBGaW5hbGl6YXRpb25Hcm91cCA+ICJ1IiA/ICh1biA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICByZXR1cm4gdDsKICAgICAgfSwgbikgOiAoVW4gPSBuZXcgRmluYWxpemF0aW9uR3JvdXAoZnVuY3Rpb24odCkgewogICAgICAgIGZvciAodmFyIHIgPSB0Lm5leHQoKTsgIXIuZG9uZTsgciA9IHQubmV4dCgpKQogICAgICAgICAgciA9IHIudmFsdWUsIHIuZGEgPyBkdChyKSA6IGNvbnNvbGUud2Fybigib2JqZWN0IGFscmVhZHkgZGVsZXRlZDogIiArIHIuZGEpOwogICAgICB9KSwgdW4gPSBmdW5jdGlvbih0KSB7CiAgICAgICAgcmV0dXJuIFVuLnJlZ2lzdGVyKHQsIHQuQSwgdC5BKSwgdDsKICAgICAgfSwgZnQgPSBmdW5jdGlvbih0KSB7CiAgICAgICAgVW4udW5yZWdpc3Rlcih0LkEpOwogICAgICB9LCB1bihuKSk7CiAgICB9CiAgICB2YXIgbG4gPSB2b2lkIDAsIGNuID0gW107CiAgICBmdW5jdGlvbiBIbigpIHsKICAgICAgZm9yICg7IGNuLmxlbmd0aDsgKSB7CiAgICAgICAgdmFyIG4gPSBjbi5wb3AoKTsKICAgICAgICBuLkEub2EgPSAhMSwgbi5kZWxldGUoKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gQigpIHsKICAgIH0KICAgIHZhciBodCA9IHt9OwogICAgZnVuY3Rpb24gWHQobiwgdCkgewogICAgICB2YXIgciA9IGU7CiAgICAgIGlmIChyW25dLmphID09PSB2b2lkIDApIHsKICAgICAgICB2YXIgaSA9IHJbbl07CiAgICAgICAgcltuXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgcmV0dXJuIHJbbl0uamEuaGFzT3duUHJvcGVydHkoYXJndW1lbnRzLmxlbmd0aCkgfHwgdigiRnVuY3Rpb24gJyIgKyB0ICsgIicgY2FsbGVkIHdpdGggYW4gaW52YWxpZCBudW1iZXIgb2YgYXJndW1lbnRzICgiICsgYXJndW1lbnRzLmxlbmd0aCArICIpIC0gZXhwZWN0cyBvbmUgb2YgKCIgKyByW25dLmphICsgIikhIiksIHJbbl0uamFbYXJndW1lbnRzLmxlbmd0aF0uYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICB9LCByW25dLmphID0gW10sIHJbbl0uamFbaS55YV0gPSBpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBwdChuLCB0LCByKSB7CiAgICAgIGUuaGFzT3duUHJvcGVydHkobikgPyAoKHIgPT09IHZvaWQgMCB8fCBlW25dLmphICE9PSB2b2lkIDAgJiYgZVtuXS5qYVtyXSAhPT0gdm9pZCAwKSAmJiB2KCJDYW5ub3QgcmVnaXN0ZXIgcHVibGljIG5hbWUgJyIgKyBuICsgIicgdHdpY2UiKSwgWHQobiwgbiksIGUuaGFzT3duUHJvcGVydHkocikgJiYgdigiQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIG92ZXJsb2FkcyBvZiBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgbnVtYmVyIG9mIGFyZ3VtZW50cyAoIiArIHIgKyAiKSEiKSwgZVtuXS5qYVtyXSA9IHQpIDogKGVbbl0gPSB0LCByICE9PSB2b2lkIDAgJiYgKGVbbl0uUmEgPSByKSk7CiAgICB9CiAgICBmdW5jdGlvbiBLdChuLCB0LCByLCBpLCBhLCBzLCBjLCBsKSB7CiAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMuY29uc3RydWN0b3IgPSB0LCB0aGlzLm1hID0gciwgdGhpcy5uYSA9IGksIHRoaXMuaWEgPSBhLCB0aGlzLkNhID0gcywgdGhpcy5xYSA9IGMsIHRoaXMuQWEgPSBsOwogICAgfQogICAgZnVuY3Rpb24gd24obiwgdCwgcikgewogICAgICBmb3IgKDsgdCAhPT0gcjsgKQogICAgICAgIHQucWEgfHwgdigiRXhwZWN0ZWQgbnVsbCBvciBpbnN0YW5jZSBvZiAiICsgci5uYW1lICsgIiwgZ290IGFuIGluc3RhbmNlIG9mICIgKyB0Lm5hbWUpLCBuID0gdC5xYShuKSwgdCA9IHQuaWE7CiAgICAgIHJldHVybiBuOwogICAgfQogICAgZnVuY3Rpb24gUXQobiwgdCkgewogICAgICByZXR1cm4gdCA9PT0gbnVsbCA/ICh0aGlzLnVhICYmIHYoIm51bGwgaXMgbm90IGEgdmFsaWQgIiArIHRoaXMubmFtZSksIDApIDogKHQuQSB8fCB2KCdDYW5ub3QgcGFzcyAiJyArIHJuKHQpICsgJyIgYXMgYSAnICsgdGhpcy5uYW1lKSwgdC5BLmRhIHx8IHYoIkNhbm5vdCBwYXNzIGRlbGV0ZWQgb2JqZWN0IGFzIGEgcG9pbnRlciBvZiB0eXBlICIgKyB0aGlzLm5hbWUpLCB3bih0LkEuZGEsIHQuQS5mYS5lYSwgdGhpcy5lYSkpOwogICAgfQogICAgZnVuY3Rpb24gcXQobiwgdCkgewogICAgICBpZiAodCA9PT0gbnVsbCkgewogICAgICAgIGlmICh0aGlzLnVhICYmIHYoIm51bGwgaXMgbm90IGEgdmFsaWQgIiArIHRoaXMubmFtZSksIHRoaXMuc2EpIHsKICAgICAgICAgIHZhciByID0gdGhpcy5IYSgpOwogICAgICAgICAgcmV0dXJuIG4gIT09IG51bGwgJiYgbi5wdXNoKHRoaXMubmEsIHIpLCByOwogICAgICAgIH0KICAgICAgICByZXR1cm4gMDsKICAgICAgfQogICAgICBpZiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgcm4odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksICF0aGlzLnJhICYmIHQuQS5mYS5yYSAmJiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyAodC5BLmhhID8gdC5BLmhhLm5hbWUgOiB0LkEuZmEubmFtZSkgKyAiIHRvIHBhcmFtZXRlciB0eXBlICIgKyB0aGlzLm5hbWUpLCByID0gd24odC5BLmRhLCB0LkEuZmEuZWEsIHRoaXMuZWEpLCB0aGlzLnNhKQogICAgICAgIHN3aXRjaCAodC5BLmdhID09PSB2b2lkIDAgJiYgdigiUGFzc2luZyByYXcgcG9pbnRlciB0byBzbWFydCBwb2ludGVyIGlzIGlsbGVnYWwiKSwgdGhpcy5QYSkgewogICAgICAgICAgY2FzZSAwOgogICAgICAgICAgICB0LkEuaGEgPT09IHRoaXMgPyByID0gdC5BLmdhIDogdigiQ2Fubm90IGNvbnZlcnQgYXJndW1lbnQgb2YgdHlwZSAiICsgKHQuQS5oYSA/IHQuQS5oYS5uYW1lIDogdC5BLmZhLm5hbWUpICsgIiB0byBwYXJhbWV0ZXIgdHlwZSAiICsgdGhpcy5uYW1lKTsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICBjYXNlIDE6CiAgICAgICAgICAgIHIgPSB0LkEuZ2E7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgY2FzZSAyOgogICAgICAgICAgICBpZiAodC5BLmhhID09PSB0aGlzKQogICAgICAgICAgICAgIHIgPSB0LkEuZ2E7CiAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgIHZhciBpID0gdC5jbG9uZSgpOwogICAgICAgICAgICAgIHIgPSB0aGlzLklhKHIsIGVuKGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgICAgaS5kZWxldGUoKTsKICAgICAgICAgICAgICB9KSksIG4gIT09IG51bGwgJiYgbi5wdXNoKHRoaXMubmEsIHIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgZGVmYXVsdDoKICAgICAgICAgICAgdigiVW5zdXBwb3J0aW5nIHNoYXJpbmcgcG9saWN5Iik7CiAgICAgICAgfQogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIG5lKG4sIHQpIHsKICAgICAgcmV0dXJuIHQgPT09IG51bGwgPyAodGhpcy51YSAmJiB2KCJudWxsIGlzIG5vdCBhIHZhbGlkICIgKyB0aGlzLm5hbWUpLCAwKSA6ICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBybih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgdC5BLmZhLnJhICYmIHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArIHQuQS5mYS5uYW1lICsgIiB0byBwYXJhbWV0ZXIgdHlwZSAiICsgdGhpcy5uYW1lKSwgd24odC5BLmRhLCB0LkEuZmEuZWEsIHRoaXMuZWEpKTsKICAgIH0KICAgIGZ1bmN0aW9uIEFuKG4pIHsKICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKFVbbiA+PiAyXSk7CiAgICB9CiAgICBmdW5jdGlvbiB5dChuLCB0LCByKSB7CiAgICAgIHJldHVybiB0ID09PSByID8gbiA6IHIuaWEgPT09IHZvaWQgMCA/IG51bGwgOiAobiA9IHl0KG4sIHQsIHIuaWEpLCBuID09PSBudWxsID8gbnVsbCA6IHIuQWEobikpOwogICAgfQogICAgdmFyIGZuID0ge307CiAgICBmdW5jdGlvbiB0ZShuLCB0KSB7CiAgICAgIGZvciAodCA9PT0gdm9pZCAwICYmIHYoInB0ciBzaG91bGQgbm90IGJlIHVuZGVmaW5lZCIpOyBuLmlhOyApCiAgICAgICAgdCA9IG4ucWEodCksIG4gPSBuLmlhOwogICAgICByZXR1cm4gZm5bdF07CiAgICB9CiAgICBmdW5jdGlvbiBfbihuLCB0KSB7CiAgICAgIHJldHVybiB0LmZhICYmIHQuZGEgfHwgZ24oIm1ha2VDbGFzc0hhbmRsZSByZXF1aXJlcyBwdHIgYW5kIHB0clR5cGUiKSwgISF0LmhhICE9ICEhdC5nYSAmJiBnbigiQm90aCBzbWFydFB0clR5cGUgYW5kIHNtYXJ0UHRyIG11c3QgYmUgc3BlY2lmaWVkIiksIHQuY291bnQgPSB7IHZhbHVlOiAxIH0sIHVuKE9iamVjdC5jcmVhdGUobiwgeyBBOiB7IHZhbHVlOiB0IH0gfSkpOwogICAgfQogICAgZnVuY3Rpb24geihuLCB0LCByLCBpKSB7CiAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMuZWEgPSB0LCB0aGlzLnVhID0gciwgdGhpcy5yYSA9IGksIHRoaXMuc2EgPSAhMSwgdGhpcy5uYSA9IHRoaXMuSWEgPSB0aGlzLkhhID0gdGhpcy53YSA9IHRoaXMuUGEgPSB0aGlzLkdhID0gdm9pZCAwLCB0LmlhICE9PSB2b2lkIDAgPyB0aGlzLnRvV2lyZVR5cGUgPSBxdCA6ICh0aGlzLnRvV2lyZVR5cGUgPSBpID8gUXQgOiBuZSwgdGhpcy5rYSA9IG51bGwpOwogICAgfQogICAgZnVuY3Rpb24gbXQobiwgdCwgcikgewogICAgICBlLmhhc093blByb3BlcnR5KG4pIHx8IGduKCJSZXBsYWNpbmcgbm9uZXhpc3RhbnQgcHVibGljIHN5bWJvbCIpLCBlW25dLmphICE9PSB2b2lkIDAgJiYgciAhPT0gdm9pZCAwID8gZVtuXS5qYVtyXSA9IHQgOiAoZVtuXSA9IHQsIGVbbl0ueWEgPSByKTsKICAgIH0KICAgIGZ1bmN0aW9uIFYobiwgdCkgewogICAgICBuID0gVyhuKTsKICAgICAgdmFyIHIgPSBGbihuLCB0KTsKICAgICAgcmV0dXJuIHR5cGVvZiByICE9ICJmdW5jdGlvbiIgJiYgdigidW5rbm93biBmdW5jdGlvbiBwb2ludGVyIHdpdGggc2lnbmF0dXJlICIgKyBuICsgIjogIiArIHQpLCByOwogICAgfQogICAgdmFyIHZ0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gZ3QobikgewogICAgICBuID0gYnQobik7CiAgICAgIHZhciB0ID0gVyhuKTsKICAgICAgcmV0dXJuIEQobiksIHQ7CiAgICB9CiAgICBmdW5jdGlvbiBkbihuLCB0KSB7CiAgICAgIGZ1bmN0aW9uIHIocykgewogICAgICAgIGFbc10gfHwgSltzXSB8fCAodm5bc10gPyB2bltzXS5mb3JFYWNoKHIpIDogKGkucHVzaChzKSwgYVtzXSA9ICEwKSk7CiAgICAgIH0KICAgICAgdmFyIGkgPSBbXSwgYSA9IHt9OwogICAgICB0aHJvdyB0LmZvckVhY2gociksIG5ldyB2dChuICsgIjogIiArIGkubWFwKGd0KS5qb2luKFsiLCAiXSkpOwogICAgfQogICAgZnVuY3Rpb24gd3QobiwgdCkgewogICAgICBmb3IgKHZhciByID0gW10sIGkgPSAwOyBpIDwgbjsgaSsrKQogICAgICAgIHIucHVzaChPWyh0ID4+IDIpICsgaV0pOwogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIENuKG4pIHsKICAgICAgZm9yICg7IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4ucG9wKCk7CiAgICAgICAgbi5wb3AoKSh0KTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gQXQobiwgdCwgcikgewogICAgICByZXR1cm4gbiBpbnN0YW5jZW9mIE9iamVjdCB8fCB2KHIgKyAnIHdpdGggaW52YWxpZCAidGhpcyI6ICcgKyBuKSwgbiBpbnN0YW5jZW9mIHQuZWEuY29uc3RydWN0b3IgfHwgdihyICsgJyBpbmNvbXBhdGlibGUgd2l0aCAidGhpcyIgb2YgdHlwZSAnICsgbi5jb25zdHJ1Y3Rvci5uYW1lKSwgbi5BLmRhIHx8IHYoImNhbm5vdCBjYWxsIGVtc2NyaXB0ZW4gYmluZGluZyBtZXRob2QgIiArIHIgKyAiIG9uIGRlbGV0ZWQgb2JqZWN0IiksIHduKG4uQS5kYSwgbi5BLmZhLmVhLCB0LmVhKTsKICAgIH0KICAgIHZhciB6biA9IFtdLCBJID0gW3t9LCB7IHZhbHVlOiB2b2lkIDAgfSwgeyB2YWx1ZTogbnVsbCB9LCB7IHZhbHVlOiAhMCB9LCB7IHZhbHVlOiAhMSB9XTsKICAgIGZ1bmN0aW9uIERuKG4pIHsKICAgICAgNCA8IG4gJiYgLS1JW25dLkphID09PSAwICYmIChJW25dID0gdm9pZCAwLCB6bi5wdXNoKG4pKTsKICAgIH0KICAgIGZ1bmN0aW9uIGVuKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSB2b2lkIDA6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIG51bGw6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlICEwOgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgY2FzZSAhMToKICAgICAgICAgIHJldHVybiA0OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB2YXIgdCA9IHpuLmxlbmd0aCA/IHpuLnBvcCgpIDogSS5sZW5ndGg7CiAgICAgICAgICByZXR1cm4gSVt0XSA9IHsgSmE6IDEsIHZhbHVlOiBuIH0sIHQ7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHJuKG4pIHsKICAgICAgaWYgKG4gPT09IG51bGwpCiAgICAgICAgcmV0dXJuICJudWxsIjsKICAgICAgdmFyIHQgPSB0eXBlb2YgbjsKICAgICAgcmV0dXJuIHQgPT09ICJvYmplY3QiIHx8IHQgPT09ICJhcnJheSIgfHwgdCA9PT0gImZ1bmN0aW9uIiA/IG4udG9TdHJpbmcoKSA6ICIiICsgbjsKICAgIH0KICAgIGZ1bmN0aW9uIGVlKG4sIHQpIHsKICAgICAgc3dpdGNoICh0KSB7CiAgICAgICAgY2FzZSAyOgogICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHIpIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKHFuW3IgPj4gMl0pOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDM6CiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24ocikgewogICAgICAgICAgICByZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUobnRbciA+PiAzXSk7CiAgICAgICAgICB9OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGZsb2F0IHR5cGU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gcmUobikgewogICAgICB2YXIgdCA9IEZ1bmN0aW9uOwogICAgICBpZiAoISh0IGluc3RhbmNlb2YgRnVuY3Rpb24pKQogICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIm5ld18gY2FsbGVkIHdpdGggY29uc3RydWN0b3IgdHlwZSAiICsgdHlwZW9mIHQgKyAiIHdoaWNoIGlzIG5vdCBhIGZ1bmN0aW9uIik7CiAgICAgIHZhciByID0gam4odC5uYW1lIHx8ICJ1bmtub3duRnVuY3Rpb25OYW1lIiwgZnVuY3Rpb24oKSB7CiAgICAgIH0pOwogICAgICByZXR1cm4gci5wcm90b3R5cGUgPSB0LnByb3RvdHlwZSwgciA9IG5ldyByKCksIG4gPSB0LmFwcGx5KHIsIG4pLCBuIGluc3RhbmNlb2YgT2JqZWN0ID8gbiA6IHI7CiAgICB9CiAgICBmdW5jdGlvbiBpZShuLCB0LCByKSB7CiAgICAgIHN3aXRjaCAodCkgewogICAgICAgIGNhc2UgMDoKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gWVtpXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBGW2ldOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICByZXR1cm4gciA/IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIFFbaSA+PiAxXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBwbltpID4+IDFdOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gciA/IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIE9baSA+PiAyXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBVW2kgPj4gMl07CiAgICAgICAgICB9OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGludGVnZXIgdHlwZTogIiArIG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBCbihuKSB7CiAgICAgIHJldHVybiBuIHx8IHYoIkNhbm5vdCB1c2UgZGVsZXRlZCB2YWwuIGhhbmRsZSA9ICIgKyBuKSwgSVtuXS52YWx1ZTsKICAgIH0KICAgIGZ1bmN0aW9uIF90KG4sIHQpIHsKICAgICAgdmFyIHIgPSBKW25dOwogICAgICByZXR1cm4gciA9PT0gdm9pZCAwICYmIHYodCArICIgaGFzIHVua25vd24gdHlwZSAiICsgZ3QobikpLCByOwogICAgfQogICAgdmFyIGFlID0ge30sIEN0ID0ge307CiAgICBmdW5jdGlvbiBFdCgpIHsKICAgICAgaWYgKCFWbikgewogICAgICAgIHZhciBuID0geyBVU0VSOiAid2ViX3VzZXIiLCBMT0dOQU1FOiAid2ViX3VzZXIiLCBQQVRIOiAiLyIsIFBXRDogIi8iLCBIT01FOiAiL2hvbWUvd2ViX3VzZXIiLCBMQU5HOiAodHlwZW9mIG5hdmlnYXRvciA9PSAib2JqZWN0IiAmJiBuYXZpZ2F0b3IubGFuZ3VhZ2VzICYmIG5hdmlnYXRvci5sYW5ndWFnZXNbMF0gfHwgIkMiKS5yZXBsYWNlKCItIiwgIl8iKSArICIuVVRGLTgiLCBfOiBUIHx8ICIuL3RoaXMucHJvZ3JhbSIgfSwgdDsKICAgICAgICBmb3IgKHQgaW4gQ3QpCiAgICAgICAgICBuW3RdID0gQ3RbdF07CiAgICAgICAgdmFyIHIgPSBbXTsKICAgICAgICBmb3IgKHQgaW4gbikKICAgICAgICAgIHIucHVzaCh0ICsgIj0iICsgblt0XSk7CiAgICAgICAgVm4gPSByOwogICAgICB9CiAgICAgIHJldHVybiBWbjsKICAgIH0KICAgIHZhciBWbiwgVHQgPSBbXTsKICAgIGZ1bmN0aW9uIE10KG4pIHsKICAgICAgdmFyIHQgPSB7fSwgcjsKICAgICAgZm9yIChyIGluIG4pCiAgICAgICAgKGZ1bmN0aW9uKGkpIHsKICAgICAgICAgIHZhciBhID0gbltpXTsKICAgICAgICAgIHRbaV0gPSB0eXBlb2YgYSA9PSAiZnVuY3Rpb24iID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIFR0LnB1c2goaSk7CiAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgcmV0dXJuIGEuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgICAgICAgICAgfSBmaW5hbGx5IHsKICAgICAgICAgICAgICBpZiAoa24pCiAgICAgICAgICAgICAgICByZXR1cm47CiAgICAgICAgICAgICAgdmFyIHMgPSBUdC5wb3AoKTsKICAgICAgICAgICAgICBYbihzID09PSBpKTsKICAgICAgICAgICAgfQogICAgICAgICAgfSA6IGE7CiAgICAgICAgfSkocik7CiAgICAgIHJldHVybiB0OwogICAgfQogICAgZm9yICh2YXIgUHQgPSBBcnJheSgyNTYpLCBFbiA9IDA7IDI1NiA+IEVuOyArK0VuKQogICAgICBQdFtFbl0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKEVuKTsKICAgIGx0ID0gUHQsIG5uID0gZS5CaW5kaW5nRXJyb3IgPSBMbigiQmluZGluZ0Vycm9yIiksIGN0ID0gZS5JbnRlcm5hbEVycm9yID0gTG4oIkludGVybmFsRXJyb3IiKSwgQi5wcm90b3R5cGUuaXNBbGlhc09mID0gZnVuY3Rpb24obikgewogICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQiAmJiBuIGluc3RhbmNlb2YgQikpCiAgICAgICAgcmV0dXJuICExOwogICAgICB2YXIgdCA9IHRoaXMuQS5mYS5lYSwgciA9IHRoaXMuQS5kYSwgaSA9IG4uQS5mYS5lYTsKICAgICAgZm9yIChuID0gbi5BLmRhOyB0LmlhOyApCiAgICAgICAgciA9IHQucWEociksIHQgPSB0LmlhOwogICAgICBmb3IgKDsgaS5pYTsgKQogICAgICAgIG4gPSBpLnFhKG4pLCBpID0gaS5pYTsKICAgICAgcmV0dXJuIHQgPT09IGkgJiYgciA9PT0gbjsKICAgIH0sIEIucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7CiAgICAgIGlmICh0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5wYSkKICAgICAgICByZXR1cm4gdGhpcy5BLmNvdW50LnZhbHVlICs9IDEsIHRoaXM7CiAgICAgIHZhciBuID0gdW4oT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcyksIHsgQTogeyB2YWx1ZTogSnQodGhpcy5BKSB9IH0pKTsKICAgICAgcmV0dXJuIG4uQS5jb3VudC52YWx1ZSArPSAxLCBuLkEub2EgPSAhMSwgbjsKICAgIH0sIEIucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uKCkgewogICAgICB0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5vYSAmJiAhdGhpcy5BLnBhICYmIHYoIk9iamVjdCBhbHJlYWR5IHNjaGVkdWxlZCBmb3IgZGVsZXRpb24iKSwgZnQodGhpcyksIGR0KHRoaXMuQSksIHRoaXMuQS5wYSB8fCAodGhpcy5BLmdhID0gdm9pZCAwLCB0aGlzLkEuZGEgPSB2b2lkIDApOwogICAgfSwgQi5wcm90b3R5cGUuaXNEZWxldGVkID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAhdGhpcy5BLmRhOwogICAgfSwgQi5wcm90b3R5cGUuZGVsZXRlTGF0ZXIgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIHRoaXMuQS5kYSB8fCBObih0aGlzKSwgdGhpcy5BLm9hICYmICF0aGlzLkEucGEgJiYgdigiT2JqZWN0IGFscmVhZHkgc2NoZWR1bGVkIGZvciBkZWxldGlvbiIpLCBjbi5wdXNoKHRoaXMpLCBjbi5sZW5ndGggPT09IDEgJiYgbG4gJiYgbG4oSG4pLCB0aGlzLkEub2EgPSAhMCwgdGhpczsKICAgIH0sIHoucHJvdG90eXBlLkRhID0gZnVuY3Rpb24obikgewogICAgICByZXR1cm4gdGhpcy53YSAmJiAobiA9IHRoaXMud2EobikpLCBuOwogICAgfSwgei5wcm90b3R5cGUudmEgPSBmdW5jdGlvbihuKSB7CiAgICAgIHRoaXMubmEgJiYgdGhpcy5uYShuKTsKICAgIH0sIHoucHJvdG90eXBlLmFyZ1BhY2tBZHZhbmNlID0gOCwgei5wcm90b3R5cGUucmVhZFZhbHVlRnJvbVBvaW50ZXIgPSBBbiwgei5wcm90b3R5cGUuZGVsZXRlT2JqZWN0ID0gZnVuY3Rpb24obikgewogICAgICBuICE9PSBudWxsICYmIG4uZGVsZXRlKCk7CiAgICB9LCB6LnByb3RvdHlwZS5mcm9tV2lyZVR5cGUgPSBmdW5jdGlvbihuKSB7CiAgICAgIGZ1bmN0aW9uIHQoKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuc2EgPyBfbih0aGlzLmVhLm1hLCB7IGZhOiB0aGlzLkdhLCBkYTogciwgaGE6IHRoaXMsIGdhOiBuIH0pIDogX24odGhpcy5lYS5tYSwgeyBmYTogdGhpcywgZGE6IG4gfSk7CiAgICAgIH0KICAgICAgdmFyIHIgPSB0aGlzLkRhKG4pOwogICAgICBpZiAoIXIpCiAgICAgICAgcmV0dXJuIHRoaXMudmEobiksIG51bGw7CiAgICAgIHZhciBpID0gdGUodGhpcy5lYSwgcik7CiAgICAgIGlmIChpICE9PSB2b2lkIDApCiAgICAgICAgcmV0dXJuIGkuQS5jb3VudC52YWx1ZSA9PT0gMCA/IChpLkEuZGEgPSByLCBpLkEuZ2EgPSBuLCBpLmNsb25lKCkpIDogKGkgPSBpLmNsb25lKCksIHRoaXMudmEobiksIGkpOwogICAgICBpZiAoaSA9IHRoaXMuZWEuQ2EociksIGkgPSBodFtpXSwgIWkpCiAgICAgICAgcmV0dXJuIHQuY2FsbCh0aGlzKTsKICAgICAgaSA9IHRoaXMucmEgPyBpLnphIDogaS5wb2ludGVyVHlwZTsKICAgICAgdmFyIGEgPSB5dChyLCB0aGlzLmVhLCBpLmVhKTsKICAgICAgcmV0dXJuIGEgPT09IG51bGwgPyB0LmNhbGwodGhpcykgOiB0aGlzLnNhID8gX24oaS5lYS5tYSwgeyBmYTogaSwgZGE6IGEsIGhhOiB0aGlzLCBnYTogbiB9KSA6IF9uKAogICAgICAgIGkuZWEubWEsCiAgICAgICAgeyBmYTogaSwgZGE6IGEgfQogICAgICApOwogICAgfSwgZS5nZXRJbmhlcml0ZWRJbnN0YW5jZUNvdW50ID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhmbikubGVuZ3RoOwogICAgfSwgZS5nZXRMaXZlSW5oZXJpdGVkSW5zdGFuY2VzID0gZnVuY3Rpb24oKSB7CiAgICAgIHZhciBuID0gW10sIHQ7CiAgICAgIGZvciAodCBpbiBmbikKICAgICAgICBmbi5oYXNPd25Qcm9wZXJ0eSh0KSAmJiBuLnB1c2goZm5bdF0pOwogICAgICByZXR1cm4gbjsKICAgIH0sIGUuZmx1c2hQZW5kaW5nRGVsZXRlcyA9IEhuLCBlLnNldERlbGF5RnVuY3Rpb24gPSBmdW5jdGlvbihuKSB7CiAgICAgIGxuID0gbiwgY24ubGVuZ3RoICYmIGxuICYmIGxuKEhuKTsKICAgIH0sIHZ0ID0gZS5VbmJvdW5kVHlwZUVycm9yID0gTG4oIlVuYm91bmRUeXBlRXJyb3IiKSwgZS5jb3VudF9lbXZhbF9oYW5kbGVzID0gZnVuY3Rpb24oKSB7CiAgICAgIGZvciAodmFyIG4gPSAwLCB0ID0gNTsgdCA8IEkubGVuZ3RoOyArK3QpCiAgICAgICAgSVt0XSAhPT0gdm9pZCAwICYmICsrbjsKICAgICAgcmV0dXJuIG47CiAgICB9LCBlLmdldF9maXJzdF9lbXZhbCA9IGZ1bmN0aW9uKCkgewogICAgICBmb3IgKHZhciBuID0gNTsgbiA8IEkubGVuZ3RoOyArK24pCiAgICAgICAgaWYgKElbbl0gIT09IHZvaWQgMCkKICAgICAgICAgIHJldHVybiBJW25dOwogICAgICByZXR1cm4gbnVsbDsKICAgIH0sIGl0LnB1c2goeyBCYTogZnVuY3Rpb24oKSB7CiAgICAgIFN0KCk7CiAgICB9IH0pOwogICAgdmFyIG9lID0gewogICAgICB6OiBmdW5jdGlvbihuKSB7CiAgICAgICAgcmV0dXJuIFRuKG4gKyAxNikgKyAxNjsKICAgICAgfSwKICAgICAgdTogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIHRocm93IG5ldyAkdChuKS5GYSh0LCByKSwgInVuY2F1Z2h0X2V4Y2VwdGlvbiIgaW4gbW4gPyBtbi54YSsrIDogbW4ueGEgPSAxLCBuOwogICAgICB9LAogICAgICB3OiBmdW5jdGlvbihuLCB0LCByLCBpLCBhKSB7CiAgICAgICAgdmFyIHMgPSB4bihyKTsKICAgICAgICB0ID0gVyh0KSwgSChuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oYykgewogICAgICAgICAgcmV0dXJuICEhYzsKICAgICAgICB9LCB0b1dpcmVUeXBlOiBmdW5jdGlvbihjLCBsKSB7CiAgICAgICAgICByZXR1cm4gbCA/IGkgOiBhOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogZnVuY3Rpb24oYykgewogICAgICAgICAgaWYgKHIgPT09IDEpCiAgICAgICAgICAgIHZhciBsID0gWTsKICAgICAgICAgIGVsc2UgaWYgKHIgPT09IDIpCiAgICAgICAgICAgIGwgPSBROwogICAgICAgICAgZWxzZSBpZiAociA9PT0gNCkKICAgICAgICAgICAgbCA9IE87CiAgICAgICAgICBlbHNlCiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gYm9vbGVhbiB0eXBlIHNpemU6ICIgKyB0KTsKICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShsW2MgPj4gc10pOwogICAgICAgIH0sIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBpOiBmdW5jdGlvbihuLCB0LCByLCBpLCBhLCBzLCBjLCBsLCBwLCBmLCBkLCBoLCBBKSB7CiAgICAgICAgZCA9IFcoZCksIHMgPSBWKGEsIHMpLCBsICYmIChsID0gVihjLCBsKSksIGYgJiYgKGYgPSBWKHAsIGYpKSwgQSA9IFYoaCwgQSk7CiAgICAgICAgdmFyIFAgPSBJbihkKTsKICAgICAgICBwdChQLCBmdW5jdGlvbigpIHsKICAgICAgICAgIGRuKCJDYW5ub3QgY29uc3RydWN0ICIgKyBkICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIFtpXSk7CiAgICAgICAgfSksIHRuKFtuLCB0LCByXSwgaSA/IFtpXSA6IFtdLCBmdW5jdGlvbih5KSB7CiAgICAgICAgICBpZiAoeSA9IHlbMF0sIGkpCiAgICAgICAgICAgIHZhciBOID0geS5lYSwgYiA9IE4ubWE7CiAgICAgICAgICBlbHNlCiAgICAgICAgICAgIGIgPSBCLnByb3RvdHlwZTsKICAgICAgICAgIHkgPSBqbihQLCBmdW5jdGlvbigpIHsKICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSAhPT0gaykKICAgICAgICAgICAgICB0aHJvdyBuZXcgbm4oIlVzZSAnbmV3JyB0byBjb25zdHJ1Y3QgIiArIGQpOwogICAgICAgICAgICBpZiAoTC5sYSA9PT0gdm9pZCAwKQogICAgICAgICAgICAgIHRocm93IG5ldyBubihkICsgIiBoYXMgbm8gYWNjZXNzaWJsZSBjb25zdHJ1Y3RvciIpOwogICAgICAgICAgICB2YXIgT3QgPSBMLmxhW2FyZ3VtZW50cy5sZW5ndGhdOwogICAgICAgICAgICBpZiAoT3QgPT09IHZvaWQgMCkKICAgICAgICAgICAgICB0aHJvdyBuZXcgbm4oIlRyaWVkIHRvIGludm9rZSBjdG9yIG9mICIgKyBkICsgIiB3aXRoIGludmFsaWQgbnVtYmVyIG9mIHBhcmFtZXRlcnMgKCIgKyBhcmd1bWVudHMubGVuZ3RoICsgIikgLSBleHBlY3RlZCAoIiArIE9iamVjdC5rZXlzKEwubGEpLnRvU3RyaW5nKCkgKyAiKSBwYXJhbWV0ZXJzIGluc3RlYWQhIik7CiAgICAgICAgICAgIHJldHVybiBPdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgICAgICAgfSk7CiAgICAgICAgICB2YXIgayA9IE9iamVjdC5jcmVhdGUoYiwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogeSB9IH0pOwogICAgICAgICAgeS5wcm90b3R5cGUgPSBrOwogICAgICAgICAgdmFyIEwgPSBuZXcgS3QoZCwgeSwgaywgQSwgTiwgcywgbCwgZik7CiAgICAgICAgICBOID0gbmV3IHooZCwgTCwgITAsICExKSwgYiA9IG5ldyB6KGQgKyAiKiIsIEwsICExLCAhMSk7CiAgICAgICAgICB2YXIgaG4gPSBuZXcgeihkICsgIiBjb25zdCoiLCBMLCAhMSwgITApOwogICAgICAgICAgcmV0dXJuIGh0W25dID0geyBwb2ludGVyVHlwZTogYiwgemE6IGhuIH0sIG10KFAsIHkpLCBbTiwgYiwgaG5dOwogICAgICAgIH0pOwogICAgICB9LAogICAgICBoOiBmdW5jdGlvbihuLCB0LCByLCBpLCBhLCBzKSB7CiAgICAgICAgWG4oMCA8IHQpOwogICAgICAgIHZhciBjID0gd3QodCwgcik7CiAgICAgICAgYSA9IFYoaSwgYSk7CiAgICAgICAgdmFyIGwgPSBbc10sIHAgPSBbXTsKICAgICAgICB0bihbXSwgW25dLCBmdW5jdGlvbihmKSB7CiAgICAgICAgICBmID0gZlswXTsKICAgICAgICAgIHZhciBkID0gImNvbnN0cnVjdG9yICIgKyBmLm5hbWU7CiAgICAgICAgICBpZiAoZi5lYS5sYSA9PT0gdm9pZCAwICYmIChmLmVhLmxhID0gW10pLCBmLmVhLmxhW3QgLSAxXSAhPT0gdm9pZCAwKQogICAgICAgICAgICB0aHJvdyBuZXcgbm4oIkNhbm5vdCByZWdpc3RlciBtdWx0aXBsZSBjb25zdHJ1Y3RvcnMgd2l0aCBpZGVudGljYWwgbnVtYmVyIG9mIHBhcmFtZXRlcnMgKCIgKyAodCAtIDEpICsgIikgZm9yIGNsYXNzICciICsgZi5uYW1lICsgIichIE92ZXJsb2FkIHJlc29sdXRpb24gaXMgY3VycmVudGx5IG9ubHkgcGVyZm9ybWVkIHVzaW5nIHRoZSBwYXJhbWV0ZXIgY291bnQsIG5vdCBhY3R1YWwgdHlwZSBpbmZvISIpOwogICAgICAgICAgcmV0dXJuIGYuZWEubGFbdCAtIDFdID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGRuKCJDYW5ub3QgY29uc3RydWN0ICIgKyBmLm5hbWUgKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgYyk7CiAgICAgICAgICB9LCB0bihbXSwgYywgZnVuY3Rpb24oaCkgewogICAgICAgICAgICByZXR1cm4gZi5lYS5sYVt0IC0gMV0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICBhcmd1bWVudHMubGVuZ3RoICE9PSB0IC0gMSAmJiB2KGQgKyAiIGNhbGxlZCB3aXRoICIgKyBhcmd1bWVudHMubGVuZ3RoICsgIiBhcmd1bWVudHMsIGV4cGVjdGVkICIgKyAodCAtIDEpKSwgcC5sZW5ndGggPSAwLCBsLmxlbmd0aCA9IHQ7CiAgICAgICAgICAgICAgZm9yICh2YXIgQSA9IDE7IEEgPCB0OyArK0EpCiAgICAgICAgICAgICAgICBsW0FdID0gaFtBXS50b1dpcmVUeXBlKAogICAgICAgICAgICAgICAgICBwLAogICAgICAgICAgICAgICAgICBhcmd1bWVudHNbQSAtIDFdCiAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgIHJldHVybiBBID0gYS5hcHBseShudWxsLCBsKSwgQ24ocCksIGhbMF0uZnJvbVdpcmVUeXBlKEEpOwogICAgICAgICAgICB9LCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgYjogZnVuY3Rpb24obiwgdCwgciwgaSwgYSwgcywgYywgbCwgcCwgZikgewogICAgICAgIHQgPSBXKHQpLCBhID0gVihpLCBhKSwgdG4oW10sIFtuXSwgZnVuY3Rpb24oZCkgewogICAgICAgICAgZCA9IGRbMF07CiAgICAgICAgICB2YXIgaCA9IGQubmFtZSArICIuIiArIHQsIEEgPSB7IGdldDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGRuKCJDYW5ub3QgYWNjZXNzICIgKyBoICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIFtyLCBjXSk7CiAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCB9OwogICAgICAgICAgcmV0dXJuIHAgPyBBLnNldCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBkbigiQ2Fubm90IGFjY2VzcyAiICsgaCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbciwgY10pOwogICAgICAgICAgfSA6IEEuc2V0ID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHYoaCArICIgaXMgYSByZWFkLW9ubHkgcHJvcGVydHkiKTsKICAgICAgICAgIH0sIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkLmVhLm1hLCB0LCBBKSwgdG4oW10sIHAgPyBbciwgY10gOiBbcl0sIGZ1bmN0aW9uKFApIHsKICAgICAgICAgICAgdmFyIHkgPSBQWzBdLCBOID0geyBnZXQ6IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIHZhciBrID0gQXQodGhpcywgZCwgaCArICIgZ2V0dGVyIik7CiAgICAgICAgICAgICAgcmV0dXJuIHkuZnJvbVdpcmVUeXBlKGEocywgaykpOwogICAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCB9OwogICAgICAgICAgICBpZiAocCkgewogICAgICAgICAgICAgIHAgPSBWKGwsIHApOwogICAgICAgICAgICAgIHZhciBiID0gUFsxXTsKICAgICAgICAgICAgICBOLnNldCA9IGZ1bmN0aW9uKGspIHsKICAgICAgICAgICAgICAgIHZhciBMID0gQXQodGhpcywgZCwgaCArICIgc2V0dGVyIiksIGhuID0gW107CiAgICAgICAgICAgICAgICBwKGYsIEwsIGIudG9XaXJlVHlwZShobiwgaykpLCBDbihobik7CiAgICAgICAgICAgICAgfTsKICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGQuZWEubWEsIHQsIE4pLCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgdjogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHQgPSBXKHQpLCBIKG4sIHsgbmFtZTogdCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihyKSB7CiAgICAgICAgICB2YXIgaSA9IElbcl0udmFsdWU7CiAgICAgICAgICByZXR1cm4gRG4ociksIGk7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24ociwgaSkgewogICAgICAgICAgcmV0dXJuIGVuKGkpOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBtOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgciA9IHhuKHIpLCB0ID0gVyh0KSwgSChuLCB7CiAgICAgICAgICBuYW1lOiB0LAogICAgICAgICAgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBpOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIGEpIHsKICAgICAgICAgICAgaWYgKHR5cGVvZiBhICE9ICJudW1iZXIiICYmIHR5cGVvZiBhICE9ICJib29sZWFuIikKICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCAiJyArIHJuKGEpICsgJyIgdG8gJyArIHRoaXMubmFtZSk7CiAgICAgICAgICAgIHJldHVybiBhOwogICAgICAgICAgfSwKICAgICAgICAgIGFyZ1BhY2tBZHZhbmNlOiA4LAogICAgICAgICAgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IGVlKHQsIHIpLAogICAgICAgICAga2E6IG51bGwKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgYzogZnVuY3Rpb24obiwgdCwgciwgaSwgYSwgcykgewogICAgICAgIHZhciBjID0gd3QodCwgcik7CiAgICAgICAgbiA9IFcobiksIGEgPSBWKGksIGEpLCBwdChuLCBmdW5jdGlvbigpIHsKICAgICAgICAgIGRuKCJDYW5ub3QgY2FsbCAiICsgbiArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBjKTsKICAgICAgICB9LCB0IC0gMSksIHRuKFtdLCBjLCBmdW5jdGlvbihsKSB7CiAgICAgICAgICB2YXIgcCA9IG4sIGYgPSBuOwogICAgICAgICAgbCA9IFtsWzBdLCBudWxsXS5jb25jYXQobC5zbGljZSgxKSk7CiAgICAgICAgICB2YXIgZCA9IGEsIGggPSBsLmxlbmd0aDsKICAgICAgICAgIDIgPiBoICYmIHYoImFyZ1R5cGVzIGFycmF5IHNpemUgbWlzbWF0Y2ghIE11c3QgYXQgbGVhc3QgZ2V0IHJldHVybiB2YWx1ZSBhbmQgJ3RoaXMnIHR5cGVzISIpOwogICAgICAgICAgZm9yICh2YXIgQSA9IGxbMV0gIT09IG51bGwgJiYgITEsIFAgPSAhMSwgeSA9IDE7IHkgPCBsLmxlbmd0aDsgKyt5KQogICAgICAgICAgICBpZiAobFt5XSAhPT0gbnVsbCAmJiBsW3ldLmthID09PSB2b2lkIDApIHsKICAgICAgICAgICAgICBQID0gITA7CiAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgIH0KICAgICAgICAgIHZhciBOID0gbFswXS5uYW1lICE9PSAidm9pZCIsIGIgPSAiIiwgayA9ICIiOwogICAgICAgICAgZm9yICh5ID0gMDsgeSA8IGggLSAyOyArK3kpCiAgICAgICAgICAgIGIgKz0gKHkgIT09IDAgPyAiLCAiIDogIiIpICsgImFyZyIgKyB5LCBrICs9ICh5ICE9PSAwID8gIiwgIiA6ICIiKSArICJhcmciICsgeSArICJXaXJlZCI7CiAgICAgICAgICBmID0gInJldHVybiBmdW5jdGlvbiAiICsgSW4oZikgKyAiKCIgKyBiICsgYCkgewppZiAoYXJndW1lbnRzLmxlbmd0aCAhPT0gYCArIChoIC0gMikgKyBgKSB7CnRocm93QmluZGluZ0Vycm9yKCdmdW5jdGlvbiBgICsgZiArICIgY2FsbGVkIHdpdGggJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cywgZXhwZWN0ZWQgIiArIChoIC0gMikgKyBgIGFyZ3MhJyk7Cn0KYCwgUCAmJiAoZiArPSBgdmFyIGRlc3RydWN0b3JzID0gW107CmApOwogICAgICAgICAgdmFyIEwgPSBQID8gImRlc3RydWN0b3JzIiA6ICJudWxsIjsKICAgICAgICAgIGZvciAoYiA9ICJ0aHJvd0JpbmRpbmdFcnJvciBpbnZva2VyIGZuIHJ1bkRlc3RydWN0b3JzIHJldFR5cGUgY2xhc3NQYXJhbSIuc3BsaXQoIiAiKSwgZCA9IFt2LCBkLCBzLCBDbiwgbFswXSwgbFsxXV0sIEEgJiYgKGYgKz0gInZhciB0aGlzV2lyZWQgPSBjbGFzc1BhcmFtLnRvV2lyZVR5cGUoIiArIEwgKyBgLCB0aGlzKTsKYCksIHkgPSAwOyB5IDwgaCAtIDI7ICsreSkKICAgICAgICAgICAgZiArPSAidmFyIGFyZyIgKyB5ICsgIldpcmVkID0gYXJnVHlwZSIgKyB5ICsgIi50b1dpcmVUeXBlKCIgKyBMICsgIiwgYXJnIiArIHkgKyAiKTsgLy8gIiArIGxbeSArIDJdLm5hbWUgKyBgCmAsIGIucHVzaCgiYXJnVHlwZSIgKyB5KSwgZC5wdXNoKGxbeSArIDJdKTsKICAgICAgICAgIGlmIChBICYmIChrID0gInRoaXNXaXJlZCIgKyAoMCA8IGsubGVuZ3RoID8gIiwgIiA6ICIiKSArIGspLCBmICs9IChOID8gInZhciBydiA9ICIgOiAiIikgKyAiaW52b2tlcihmbiIgKyAoMCA8IGsubGVuZ3RoID8gIiwgIiA6ICIiKSArIGsgKyBgKTsKYCwgUCkKICAgICAgICAgICAgZiArPSBgcnVuRGVzdHJ1Y3RvcnMoZGVzdHJ1Y3RvcnMpOwpgOwogICAgICAgICAgZWxzZQogICAgICAgICAgICBmb3IgKHkgPSBBID8gMSA6IDI7IHkgPCBsLmxlbmd0aDsgKyt5KQogICAgICAgICAgICAgIGggPSB5ID09PSAxID8gInRoaXNXaXJlZCIgOiAiYXJnIiArICh5IC0gMikgKyAiV2lyZWQiLCBsW3ldLmthICE9PSBudWxsICYmIChmICs9IGggKyAiX2R0b3IoIiArIGggKyAiKTsgLy8gIiArIGxbeV0ubmFtZSArIGAKYCwgYi5wdXNoKGggKyAiX2R0b3IiKSwgZC5wdXNoKGxbeV0ua2EpKTsKICAgICAgICAgIHJldHVybiBOICYmIChmICs9IGB2YXIgcmV0ID0gcmV0VHlwZS5mcm9tV2lyZVR5cGUocnYpOwpyZXR1cm4gcmV0OwpgKSwgYi5wdXNoKGYgKyBgfQpgKSwgbCA9IHJlKGIpLmFwcGx5KG51bGwsIGQpLCBtdChwLCBsLCB0IC0gMSksIFtdOwogICAgICAgIH0pOwogICAgICB9LAogICAgICBlOiBmdW5jdGlvbihuLCB0LCByLCBpLCBhKSB7CiAgICAgICAgZnVuY3Rpb24gcyhmKSB7CiAgICAgICAgICByZXR1cm4gZjsKICAgICAgICB9CiAgICAgICAgdCA9IFcodCksIGEgPT09IC0xICYmIChhID0gNDI5NDk2NzI5NSk7CiAgICAgICAgdmFyIGMgPSB4bihyKTsKICAgICAgICBpZiAoaSA9PT0gMCkgewogICAgICAgICAgdmFyIGwgPSAzMiAtIDggKiByOwogICAgICAgICAgcyA9IGZ1bmN0aW9uKGYpIHsKICAgICAgICAgICAgcmV0dXJuIGYgPDwgbCA+Pj4gbDsKICAgICAgICAgIH07CiAgICAgICAgfQogICAgICAgIHZhciBwID0gdC5pbmRleE9mKCJ1bnNpZ25lZCIpICE9IC0xOwogICAgICAgIEgobiwgeyBuYW1lOiB0LCBmcm9tV2lyZVR5cGU6IHMsIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGYsIGQpIHsKICAgICAgICAgIGlmICh0eXBlb2YgZCAhPSAibnVtYmVyIiAmJiB0eXBlb2YgZCAhPSAiYm9vbGVhbiIpCiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0ICInICsgcm4oZCkgKyAnIiB0byAnICsgdGhpcy5uYW1lKTsKICAgICAgICAgIGlmIChkIDwgaSB8fCBkID4gYSkKICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUGFzc2luZyBhIG51bWJlciAiJyArIHJuKGQpICsgJyIgZnJvbSBKUyBzaWRlIHRvIEMvQysrIHNpZGUgdG8gYW4gYXJndW1lbnQgb2YgdHlwZSAiJyArIHQgKyAnIiwgd2hpY2ggaXMgb3V0c2lkZSB0aGUgdmFsaWQgcmFuZ2UgWycgKyBpICsgIiwgIiArIGEgKyAiXSEiKTsKICAgICAgICAgIHJldHVybiBwID8gZCA+Pj4gMCA6IGQgfCAwOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogaWUodCwgYywgaSAhPT0gMCksIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBkOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgZnVuY3Rpb24gaShzKSB7CiAgICAgICAgICBzID4+PSAyOwogICAgICAgICAgdmFyIGMgPSBVOwogICAgICAgICAgcmV0dXJuIG5ldyBhKEssIGNbcyArIDFdLCBjW3NdKTsKICAgICAgICB9CiAgICAgICAgdmFyIGEgPSBbSW50OEFycmF5LCBVaW50OEFycmF5LCBJbnQxNkFycmF5LCBVaW50MTZBcnJheSwgSW50MzJBcnJheSwgVWludDMyQXJyYXksIEZsb2F0MzJBcnJheSwgRmxvYXQ2NEFycmF5XVt0XTsKICAgICAgICByID0gVyhyKSwgSChuLCB7IG5hbWU6IHIsIGZyb21XaXJlVHlwZTogaSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBpIH0sIHsgRWE6ICEwIH0pOwogICAgICB9LAogICAgICBuOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdCA9IFcodCk7CiAgICAgICAgdmFyIHIgPSB0ID09PSAic3RkOjpzdHJpbmciOwogICAgICAgIEgobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICB2YXIgYSA9IFVbaSA+PiAyXTsKICAgICAgICAgICAgaWYgKHIpCiAgICAgICAgICAgICAgZm9yICh2YXIgcyA9IGkgKyA0LCBjID0gMDsgYyA8PSBhOyArK2MpIHsKICAgICAgICAgICAgICAgIHZhciBsID0gaSArIDQgKyBjOwogICAgICAgICAgICAgICAgaWYgKGMgPT0gYSB8fCBGW2xdID09IDApIHsKICAgICAgICAgICAgICAgICAgaWYgKHMpIHsKICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IHMsIGYgPSBGLCBkID0gcCArIChsIC0gcyk7CiAgICAgICAgICAgICAgICAgICAgZm9yIChzID0gcDsgZltzXSAmJiAhKHMgPj0gZCk7ICkKICAgICAgICAgICAgICAgICAgICAgICsrczsKICAgICAgICAgICAgICAgICAgICBpZiAoMTYgPCBzIC0gcCAmJiBmLnN1YmFycmF5ICYmIEtuKQogICAgICAgICAgICAgICAgICAgICAgcCA9IEtuLmRlY29kZShmLnN1YmFycmF5KHAsIHMpKTsKICAgICAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICAgIGZvciAoZCA9ICIiOyBwIDwgczsgKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoID0gZltwKytdOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAoaCAmIDEyOCkgewogICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBBID0gZltwKytdICYgNjM7CiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChoICYgMjI0KSA9PSAxOTIpCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGggJiAzMSkgPDwgNiB8IEEpOwogICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFAgPSBmW3ArK10gJiA2MzsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGggPSAoaCAmIDI0MCkgPT0gMjI0ID8gKGggJiAxNSkgPDwgMTIgfCBBIDw8IDYgfCBQIDogKGggJiA3KSA8PCAxOCB8IEEgPDwgMTIgfCBQIDw8IDYgfCBmW3ArK10gJiA2MywgNjU1MzYgPiBoID8gZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGgpIDogKGggLT0gNjU1MzYsIGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiB8IGggPj4gMTAsIDU2MzIwIHwgaCAmIDEwMjMpKTsKICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZQogICAgICAgICAgICAgICAgICAgICAgICAgIGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShoKTsKICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgIHAgPSBkOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgfSBlbHNlCiAgICAgICAgICAgICAgICAgICAgcCA9ICIiOwogICAgICAgICAgICAgICAgICBpZiAoeSA9PT0gdm9pZCAwKQogICAgICAgICAgICAgICAgICAgIHZhciB5ID0gcDsKICAgICAgICAgICAgICAgICAgZWxzZQogICAgICAgICAgICAgICAgICAgIHkgKz0gIlwwIiwgeSArPSBwOwogICAgICAgICAgICAgICAgICBzID0gbCArIDE7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICBmb3IgKHkgPSBBcnJheShhKSwgYyA9IDA7IGMgPCBhOyArK2MpCiAgICAgICAgICAgICAgICB5W2NdID0gU3RyaW5nLmZyb21DaGFyQ29kZShGW2kgKyA0ICsgY10pOwogICAgICAgICAgICAgIHkgPSB5LmpvaW4oIiIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiBEKGkpLCB5OwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIGEpIHsKICAgICAgICAgICAgYSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyICYmIChhID0gbmV3IFVpbnQ4QXJyYXkoYSkpOwogICAgICAgICAgICB2YXIgcyA9IHR5cGVvZiBhID09ICJzdHJpbmciOwogICAgICAgICAgICBzIHx8IGEgaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IGEgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSB8fCBhIGluc3RhbmNlb2YgSW50OEFycmF5IHx8IHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gc3RkOjpzdHJpbmciKTsKICAgICAgICAgICAgdmFyIGMgPSAociAmJiBzID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IDAsIGQgPSAwOyBkIDwgYS5sZW5ndGg7ICsrZCkgewogICAgICAgICAgICAgICAgdmFyIGggPSBhLmNoYXJDb2RlQXQoZCk7CiAgICAgICAgICAgICAgICA1NTI5NiA8PSBoICYmIDU3MzQzID49IGggJiYgKGggPSA2NTUzNiArICgoaCAmIDEwMjMpIDw8IDEwKSB8IGEuY2hhckNvZGVBdCgrK2QpICYgMTAyMyksIDEyNyA+PSBoID8gKytmIDogZiA9IDIwNDcgPj0gaCA/IGYgKyAyIDogNjU1MzUgPj0gaCA/IGYgKyAzIDogZiArIDQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHJldHVybiBmOwogICAgICAgICAgICB9IDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgcmV0dXJuIGEubGVuZ3RoOwogICAgICAgICAgICB9KSgpLCBsID0gVG4oNCArIGMgKyAxKTsKICAgICAgICAgICAgaWYgKFVbbCA+PiAyXSA9IGMsIHIgJiYgcykKICAgICAgICAgICAgICBOdChhLCBsICsgNCwgYyArIDEpOwogICAgICAgICAgICBlbHNlIGlmIChzKQogICAgICAgICAgICAgIGZvciAocyA9IDA7IHMgPCBjOyArK3MpIHsKICAgICAgICAgICAgICAgIHZhciBwID0gYS5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgICAgICAgMjU1IDwgcCAmJiAoRChsKSwgdigiU3RyaW5nIGhhcyBVVEYtMTYgY29kZSB1bml0cyB0aGF0IGRvIG5vdCBmaXQgaW4gOCBiaXRzIikpLCBGW2wgKyA0ICsgc10gPSBwOwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZQogICAgICAgICAgICAgIGZvciAocyA9IDA7IHMgPCBjOyArK3MpCiAgICAgICAgICAgICAgICBGW2wgKyA0ICsgc10gPSBhW3NdOwogICAgICAgICAgICByZXR1cm4gaSAhPT0gbnVsbCAmJiBpLnB1c2goRCwgbCksIGw7CiAgICAgICAgICB9LAogICAgICAgICAgYXJnUGFja0FkdmFuY2U6IDgsCiAgICAgICAgICByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sCiAgICAgICAgICBrYTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICBEKGkpOwogICAgICAgICAgfQogICAgICAgIH0pOwogICAgICB9LAogICAgICBqOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgaWYgKHIgPSBXKHIpLCB0ID09PSAyKQogICAgICAgICAgdmFyIGkgPSBVdCwgYSA9IEh0LCBzID0genQsIGMgPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgcmV0dXJuIHBuOwogICAgICAgICAgfSwgbCA9IDE7CiAgICAgICAgZWxzZQogICAgICAgICAgdCA9PT0gNCAmJiAoaSA9IER0LCBhID0gQnQsIHMgPSBWdCwgYyA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICByZXR1cm4gVTsKICAgICAgICAgIH0sIGwgPSAyKTsKICAgICAgICBIKG4sIHsgbmFtZTogciwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihwKSB7CiAgICAgICAgICBmb3IgKHZhciBmID0gVVtwID4+IDJdLCBkID0gYygpLCBoLCBBID0gcCArIDQsIFAgPSAwOyBQIDw9IGY7ICsrUCkgewogICAgICAgICAgICB2YXIgeSA9IHAgKyA0ICsgUCAqIHQ7CiAgICAgICAgICAgIChQID09IGYgfHwgZFt5ID4+IGxdID09IDApICYmIChBID0gaShBLCB5IC0gQSksIGggPT09IHZvaWQgMCA/IGggPSBBIDogKGggKz0gIlwwIiwgaCArPSBBKSwgQSA9IHkgKyB0KTsKICAgICAgICAgIH0KICAgICAgICAgIHJldHVybiBEKHApLCBoOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHAsIGYpIHsKICAgICAgICAgIHR5cGVvZiBmICE9ICJzdHJpbmciICYmIHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gQysrIHN0cmluZyB0eXBlICIgKyByKTsKICAgICAgICAgIHZhciBkID0gcyhmKSwgaCA9IFRuKDQgKyBkICsgdCk7CiAgICAgICAgICByZXR1cm4gVVtoID4+IDJdID0gZCA+PiBsLCBhKGYsIGggKyA0LCBkICsgdCksIHAgIT09IG51bGwgJiYgcC5wdXNoKEQsIGgpLCBoOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sIGthOiBmdW5jdGlvbihwKSB7CiAgICAgICAgICBEKHApOwogICAgICAgIH0gfSk7CiAgICAgIH0sCiAgICAgIHg6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gVyh0KSwgSChuLCB7IFFhOiAhMCwgbmFtZTogdCwgYXJnUGFja0FkdmFuY2U6IDAsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSB9KTsKICAgICAgfSwKICAgICAgazogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIG4gPSBCbihuKSwgdCA9IF90KHQsICJlbXZhbDo6YXMiKTsKICAgICAgICB2YXIgaSA9IFtdLCBhID0gZW4oaSk7CiAgICAgICAgcmV0dXJuIE9bciA+PiAyXSA9IGEsIHQudG9XaXJlVHlwZShpLCBuKTsKICAgICAgfSwKICAgICAgZzogRG4sCiAgICAgIGw6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICByZXR1cm4gbiA9IEJuKG4pLCB0ID0gQm4odCksIGVuKG5bdF0pOwogICAgICB9LAogICAgICBwOiBmdW5jdGlvbihuKSB7CiAgICAgICAgdmFyIHQgPSBhZVtuXTsKICAgICAgICByZXR1cm4gZW4odCA9PT0gdm9pZCAwID8gVyhuKSA6IHQpOwogICAgICB9LAogICAgICBvOiBmdW5jdGlvbihuKSB7CiAgICAgICAgQ24oSVtuXS52YWx1ZSksIERuKG4pOwogICAgICB9LAogICAgICB5OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgcmV0dXJuIG4gPSBfdChuLCAiX2VtdmFsX3Rha2VfdmFsdWUiKSwgbiA9IG4ucmVhZFZhbHVlRnJvbVBvaW50ZXIodCksIGVuKG4pOwogICAgICB9LAogICAgICBmOiBmdW5jdGlvbigpIHsKICAgICAgICBzbigpOwogICAgICB9LAogICAgICBxOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgRi5jb3B5V2l0aGluKG4sIHQsIHQgKyByKTsKICAgICAgfSwKICAgICAgcjogZnVuY3Rpb24obikgewogICAgICAgIG4gPj4+PSAwOwogICAgICAgIHZhciB0ID0gRi5sZW5ndGg7CiAgICAgICAgaWYgKDIxNDc0ODM2NDggPCBuKQogICAgICAgICAgcmV0dXJuICExOwogICAgICAgIGZvciAodmFyIHIgPSAxOyA0ID49IHI7IHIgKj0gMikgewogICAgICAgICAgdmFyIGkgPSB0ICogKDEgKyAwLjIgLyByKTsKICAgICAgICAgIGkgPSBNYXRoLm1pbihpLCBuICsgMTAwNjYzMjk2KSwgaSA9IE1hdGgubWF4KDE2Nzc3MjE2LCBuLCBpKSwgMCA8IGkgJSA2NTUzNiAmJiAoaSArPSA2NTUzNiAtIGkgJSA2NTUzNik7CiAgICAgICAgICBuOiB7CiAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgRy5ncm93KE1hdGgubWluKDIxNDc0ODM2NDgsIGkpIC0gSy5ieXRlTGVuZ3RoICsgNjU1MzUgPj4+IDE2KSwgdHQoRy5idWZmZXIpOwogICAgICAgICAgICAgIHZhciBhID0gMTsKICAgICAgICAgICAgICBicmVhayBuOwogICAgICAgICAgICB9IGNhdGNoIHsKICAgICAgICAgICAgfQogICAgICAgICAgICBhID0gdm9pZCAwOwogICAgICAgICAgfQogICAgICAgICAgaWYgKGEpCiAgICAgICAgICAgIHJldHVybiAhMDsKICAgICAgICB9CiAgICAgICAgcmV0dXJuICExOwogICAgICB9LAogICAgICBzOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSAwOwogICAgICAgIHJldHVybiBFdCgpLmZvckVhY2goZnVuY3Rpb24oaSwgYSkgewogICAgICAgICAgdmFyIHMgPSB0ICsgcjsKICAgICAgICAgIGZvciAoYSA9IE9bbiArIDQgKiBhID4+IDJdID0gcywgcyA9IDA7IHMgPCBpLmxlbmd0aDsgKytzKQogICAgICAgICAgICBZW2ErKyA+PiAwXSA9IGkuY2hhckNvZGVBdChzKTsKICAgICAgICAgIFlbYSA+PiAwXSA9IDAsIHIgKz0gaS5sZW5ndGggKyAxOwogICAgICAgIH0pLCAwOwogICAgICB9LAogICAgICB0OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSBFdCgpOwogICAgICAgIE9bbiA+PiAyXSA9IHIubGVuZ3RoOwogICAgICAgIHZhciBpID0gMDsKICAgICAgICByZXR1cm4gci5mb3JFYWNoKGZ1bmN0aW9uKGEpIHsKICAgICAgICAgIGkgKz0gYS5sZW5ndGggKyAxOwogICAgICAgIH0pLCBPW3QgPj4gMl0gPSBpLCAwOwogICAgICB9LAogICAgICBhOiBHCiAgICB9OwogICAgKGZ1bmN0aW9uKCkgewogICAgICBmdW5jdGlvbiBuKHMpIHsKICAgICAgICBzID0gcy5leHBvcnRzLCBzID0gTXQocyksIGUuYXNtID0gcywgWi0tLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKFopLCBaID09IDAgJiYgb24gJiYgKHMgPSBvbiwgb24gPSBudWxsLCBzKCkpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIHQocykgewogICAgICAgIG4ocy5pbnN0YW5jZSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gcihzKSB7CiAgICAgICAgcmV0dXJuIFp0KCkudGhlbihmdW5jdGlvbihjKSB7CiAgICAgICAgICByZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoYywgaSk7CiAgICAgICAgfSkudGhlbihzLCBmdW5jdGlvbihjKSB7CiAgICAgICAgICBTKCJmYWlsZWQgdG8gYXN5bmNocm9ub3VzbHkgcHJlcGFyZSB3YXNtOiAiICsgYyksIHNuKGMpOwogICAgICAgIH0pOwogICAgICB9CiAgICAgIHZhciBpID0geyBhOiBvZSB9OwogICAgICBpZiAoWisrLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKFopLCBlLmluc3RhbnRpYXRlV2FzbSkKICAgICAgICB0cnkgewogICAgICAgICAgdmFyIGEgPSBlLmluc3RhbnRpYXRlV2FzbShpLCBuKTsKICAgICAgICAgIHJldHVybiBhID0gTXQoYSk7CiAgICAgICAgfSBjYXRjaCAocykgewogICAgICAgICAgcmV0dXJuIFMoIk1vZHVsZS5pbnN0YW50aWF0ZVdhc20gY2FsbGJhY2sgZmFpbGVkIHdpdGggZXJyb3I6ICIgKyBzKSwgITE7CiAgICAgICAgfQogICAgICByZXR1cm4gZnVuY3Rpb24oKSB7CiAgICAgICAgaWYgKGogfHwgdHlwZW9mIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nICE9ICJmdW5jdGlvbiIgfHwgb3QoKSB8fCBSbigiZmlsZTovLyIpIHx8IHR5cGVvZiBmZXRjaCAhPSAiZnVuY3Rpb24iKQogICAgICAgICAgcmV0dXJuIHIodCk7CiAgICAgICAgZmV0Y2goJCwgeyBjcmVkZW50aWFsczogInNhbWUtb3JpZ2luIiB9KS50aGVuKGZ1bmN0aW9uKHMpIHsKICAgICAgICAgIHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyhzLCBpKS50aGVuKHQsIGZ1bmN0aW9uKGMpIHsKICAgICAgICAgICAgcmV0dXJuIFMoIndhc20gc3RyZWFtaW5nIGNvbXBpbGUgZmFpbGVkOiAiICsgYyksIFMoImZhbGxpbmcgYmFjayB0byBBcnJheUJ1ZmZlciBpbnN0YW50aWF0aW9uIiksIHIodCk7CiAgICAgICAgICB9KTsKICAgICAgICB9KTsKICAgICAgfSgpLCB7fTsKICAgIH0pKCk7CiAgICB2YXIgU3QgPSBlLl9fX3dhc21fY2FsbF9jdG9ycyA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKFN0ID0gZS5fX193YXNtX2NhbGxfY3RvcnMgPSBlLmFzbS5CKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgVG4gPSBlLl9tYWxsb2MgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChUbiA9IGUuX21hbGxvYyA9IGUuYXNtLkMpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBEID0gZS5fZnJlZSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKEQgPSBlLl9mcmVlID0gZS5hc20uRCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGJ0ID0gZS5fX19nZXRUeXBlTmFtZSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGJ0ID0gZS5fX19nZXRUeXBlTmFtZSA9IGUuYXNtLkUpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9OwogICAgZS5fX19lbWJpbmRfcmVnaXN0ZXJfbmF0aXZlX2FuZF9idWlsdGluX3R5cGVzID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fX19lbWJpbmRfcmVnaXN0ZXJfbmF0aXZlX2FuZF9idWlsdGluX3R5cGVzID0gZS5hc20uRikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paSA9IGUuYXNtLkcpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmkgPSBlLmFzbS5IKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2kgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaSA9IGUuYXNtLkkpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaSA9IGUuYXNtLkopLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpID0gZS5hc20uSykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9maWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfZmlpID0gZS5hc20uTCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlmID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWYgPSBlLmFzbS5NKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpID0gZS5hc20uTikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWkgPSBlLmFzbS5PKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWkgPSBlLmFzbS5QKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWkgPSBlLmFzbS5RKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpID0gZS5hc20uUikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWlpaSA9IGUuYXNtLlMpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWkgPSBlLmFzbS5UKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWlpaSA9IGUuYXNtLlUpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpaWRpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWlkaSA9IGUuYXNtLlYpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpZGkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpZGkgPSBlLmFzbS5XKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWlpID0gZS5hc20uWCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWkgPSBlLmFzbS5ZKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWkgPSBlLmFzbS5aKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaSA9IGUuYXNtLl8pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdGFydF91bndpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdGFydF91bndpbmQgPSBlLmFzbS4kKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RvcF91bndpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdG9wX3Vud2luZCA9IGUuYXNtLmFhKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RhcnRfcmV3aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RhcnRfcmV3aW5kID0gZS5hc20uYmEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdG9wX3Jld2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0b3BfcmV3aW5kID0gZS5hc20uY2EpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9OwogICAgdmFyIE1uOwogICAgb24gPSBmdW5jdGlvbiBuKCkgewogICAgICBNbiB8fCBHbigpLCBNbiB8fCAob24gPSBuKTsKICAgIH07CiAgICBmdW5jdGlvbiBHbigpIHsKICAgICAgZnVuY3Rpb24gbigpIHsKICAgICAgICBpZiAoIU1uICYmIChNbiA9ICEwLCBlLmNhbGxlZFJ1biA9ICEwLCAha24pKSB7CiAgICAgICAgICBpZiAoeW4oaXQpLCB5bihHdCksIG0oZSksIGUub25SdW50aW1lSW5pdGlhbGl6ZWQgJiYgZS5vblJ1bnRpbWVJbml0aWFsaXplZCgpLCBlLnBvc3RSdW4pCiAgICAgICAgICAgIGZvciAodHlwZW9mIGUucG9zdFJ1biA9PSAiZnVuY3Rpb24iICYmIChlLnBvc3RSdW4gPSBbZS5wb3N0UnVuXSk7IGUucG9zdFJ1bi5sZW5ndGg7ICkgewogICAgICAgICAgICAgIHZhciB0ID0gZS5wb3N0UnVuLnNoaWZ0KCk7CiAgICAgICAgICAgICAgYXQudW5zaGlmdCh0KTsKICAgICAgICAgICAgfQogICAgICAgICAgeW4oYXQpOwogICAgICAgIH0KICAgICAgfQogICAgICBpZiAoISgwIDwgWikpIHsKICAgICAgICBpZiAoZS5wcmVSdW4pCiAgICAgICAgICBmb3IgKHR5cGVvZiBlLnByZVJ1biA9PSAiZnVuY3Rpb24iICYmIChlLnByZVJ1biA9IFtlLnByZVJ1bl0pOyBlLnByZVJ1bi5sZW5ndGg7ICkKICAgICAgICAgICAgWXQoKTsKICAgICAgICB5bihydCksIDAgPCBaIHx8IChlLnNldFN0YXR1cyA/IChlLnNldFN0YXR1cygiUnVubmluZy4uLiIpLCBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgICAgICAgICAgZS5zZXRTdGF0dXMoIiIpOwogICAgICAgICAgfSwgMSksIG4oKTsKICAgICAgICB9LCAxKSkgOiBuKCkpOwogICAgICB9CiAgICB9CiAgICBpZiAoZS5ydW4gPSBHbiwgZS5wcmVJbml0KQogICAgICBmb3IgKHR5cGVvZiBlLnByZUluaXQgPT0gImZ1bmN0aW9uIiAmJiAoZS5wcmVJbml0ID0gW2UucHJlSW5pdF0pOyAwIDwgZS5wcmVJbml0Lmxlbmd0aDsgKQogICAgICAgIGUucHJlSW5pdC5wb3AoKSgpOwogICAgcmV0dXJuIEduKCksIHUucmVhZHk7CiAgfTsKfSgpOwpjbGFzcyBwZSB7CiAgY29uc3RydWN0b3IoKSB7CiAgICBZbih0aGlzLCAic2FtV2FzbU1vZHVsZSIpOwogIH0KICBnZXRPdmVycmlkZGVuTW9kdWxlcyh1LCBlKSB7CiAgICByZXR1cm4gewogICAgICBsb2NhdGVGaWxlOiAobSkgPT4gbmV3IFVSTChlIHx8IG0sIHUpLmhyZWYKICAgIH07CiAgfQogIGFzeW5jIGhhbmRsZU1pc3NpbmdPckludmFsaWRTYW1Nb2R1bGUodSwgZSkgewogICAgdHJ5IHsKICAgICAgY29uc3QgbSA9IGF3YWl0IGZldGNoKHUpOwogICAgICBpZiAoIW0ub2spCiAgICAgICAgdGhyb3cgbmV3IHgoCiAgICAgICAgICBgVGhlIHBhdGggdG8gJHtlfSBpcyBpbmNvcnJlY3Qgb3IgdGhlIG1vZHVsZSBpcyBtaXNzaW5nLiBQbGVhc2UgY2hlY2sgcHJvdmlkZWQgcGF0aCB0byB3YXNtIGZpbGVzLiBDdXJyZW50IHBhdGggaXMgJHt1fWAKICAgICAgICApOwogICAgICBjb25zdCBnID0gYXdhaXQgbS5hcnJheUJ1ZmZlcigpOwogICAgICBpZiAoIVdlYkFzc2VtYmx5LnZhbGlkYXRlKGcpKQogICAgICAgIHRocm93IG5ldyB4KAogICAgICAgICAgYFRoZSBwcm92aWRlZCAke2V9IGlzIG5vdCBhIHZhbGlkIFdBU00gbW9kdWxlLiBQbGVhc2UgY2hlY2sgcHJvdmlkZWQgcGF0aCB0byB3YXNtIGZpbGVzLiBDdXJyZW50IHBhdGggaXMgJHt1fWAKICAgICAgICApOwogICAgfSBjYXRjaCAobSkgewogICAgICBpZiAobSBpbnN0YW5jZW9mIHgpCiAgICAgICAgdGhyb3cgY29uc29sZS5lcnJvcigKICAgICAgICAgICJZb3UgY2FuIGZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBob3cgdG8gaG9zdCB3YXNtIGZpbGVzIGhlcmU6IGh0dHBzOi8vZGV2ZWxvcGVycy5pbm5vdmF0cmljcy5jb20vZGlnaXRhbC1vbmJvYXJkaW5nL3RlY2huaWNhbC9yZW1vdGUvZG90LXdlYi1kb2N1bWVudC9sYXRlc3QvZG9jdW1lbnRhdGlvbi8jX2hvc3Rpbmdfc2FtX3dhc20iCiAgICAgICAgKSwgbTsKICAgIH0KICB9CiAgYXN5bmMgZ2V0V2FzbUZpbGVOYW1lKCkgewogICAgcmV0dXJuIGF3YWl0IGxlKCkgPyBXdC5zaW1kIDogV3Quc2FtOwogIH0KICBhc3luYyBpbml0U2FtTW9kdWxlKHUsIGUgPSAiL3dhc20iKSB7CiAgICBpZiAodGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICByZXR1cm47CiAgICBjb25zdCBtID0gYXdhaXQgdGhpcy5nZXRXYXNtRmlsZU5hbWUoKSwgZyA9IGAke2V9LyR7bX1gOwogICAgdHJ5IHsKICAgICAgdGhpcy5zYW1XYXNtTW9kdWxlID0gYXdhaXQgaGUodGhpcy5nZXRPdmVycmlkZGVuTW9kdWxlcyh1LCBnKSk7CiAgICB9IGNhdGNoIHsKICAgICAgdGhyb3cgYXdhaXQgdGhpcy5oYW5kbGVNaXNzaW5nT3JJbnZhbGlkU2FtTW9kdWxlKGcsIG0pLCBuZXcgeCgiQ291bGQgbm90IGluaXQgZGV0ZWN0b3IuIik7CiAgICB9CiAgfQogIGFzeW5jIGdldFNhbVZlcnNpb24oKSB7CiAgICB2YXIgZTsKICAgIGNvbnN0IHUgPSBhd2FpdCAoKGUgPSB0aGlzLnNhbVdhc21Nb2R1bGUpID09IG51bGwgPyB2b2lkIDAgOiBlLmdldEluZm9TdHJpbmcoKSk7CiAgICByZXR1cm4gdSA9PSBudWxsID8gdm9pZCAwIDogdS50cmltKCk7CiAgfQogIC8qCiAgICogSW4gVFMgNS4yLjAgd2FzIGFkZGVkIHNwZWNpYWwga2V5d29yZCAidXNpbmciIHdoaWNoIGNvdWxkIGJlIHBlcmZlY3QgZm9yIHRoaXMgY2FzZS4KICAgKiBVbmZvcnR1bmF0ZWx5LCB2aXRlIHByZWFjdCBwbHVnaW4gZG9lcyBub3Qgc3VwcG9ydCB0aGlzIHZlcnNpb24gb2YgVFMgeWV0LgogICAqIENoZWNrIHBvc3NpYmlsaXR5IG9mIHVzaW5nICJ1c2luZyIga2V5d29yZCB3aGVuIHZpdGUgcHJlYWN0IHBsdWdpbiB1cGRhdGVzCiAgICovCiAgYWxsb2NhdGVNZW1vcnkodSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyB4KCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICByZXR1cm4gdGhpcy5zYW1XYXNtTW9kdWxlLl9tYWxsb2ModSk7CiAgfQogIHJlbGVhc2VNZW1vcnkodSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyB4KCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICB0aGlzLnNhbVdhc21Nb2R1bGUuX2ZyZWUodSk7CiAgfQogIHdyaXRlRGF0YVRvTWVtb3J5KHUsIGUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgeCgiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgdGhpcy5zYW1XYXNtTW9kdWxlLkhFQVBVOC5zZXQodSwgZSk7CiAgfQp9Ci8qKgogKiBAbGljZW5zZQogKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDCiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wCiAqLwpjb25zdCBSdCA9IFN5bWJvbCgiQ29tbGluay5wcm94eSIpLCB5ZSA9IFN5bWJvbCgiQ29tbGluay5lbmRwb2ludCIpLCBtZSA9IFN5bWJvbCgiQ29tbGluay5yZWxlYXNlUHJveHkiKSwgWm4gPSBTeW1ib2woIkNvbWxpbmsuZmluYWxpemVyIiksIFNuID0gU3ltYm9sKCJDb21saW5rLnRocm93biIpLCBGdCA9IChvKSA9PiB0eXBlb2YgbyA9PSAib2JqZWN0IiAmJiBvICE9PSBudWxsIHx8IHR5cGVvZiBvID09ICJmdW5jdGlvbiIsIHZlID0gewogIGNhbkhhbmRsZTogKG8pID0+IEZ0KG8pICYmIG9bUnRdLAogIHNlcmlhbGl6ZShvKSB7CiAgICBjb25zdCB7IHBvcnQxOiB1LCBwb3J0MjogZSB9ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7CiAgICByZXR1cm4gSm4obywgdSksIFtlLCBbZV1dOwogIH0sCiAgZGVzZXJpYWxpemUobykgewogICAgcmV0dXJuIG8uc3RhcnQoKSwgX2Uobyk7CiAgfQp9LCBnZSA9IHsKICBjYW5IYW5kbGU6IChvKSA9PiBGdChvKSAmJiBTbiBpbiBvLAogIHNlcmlhbGl6ZSh7IHZhbHVlOiBvIH0pIHsKICAgIGxldCB1OwogICAgcmV0dXJuIG8gaW5zdGFuY2VvZiBFcnJvciA/IHUgPSB7CiAgICAgIGlzRXJyb3I6ICEwLAogICAgICB2YWx1ZTogewogICAgICAgIG1lc3NhZ2U6IG8ubWVzc2FnZSwKICAgICAgICBuYW1lOiBvLm5hbWUsCiAgICAgICAgc3RhY2s6IG8uc3RhY2sKICAgICAgfQogICAgfSA6IHUgPSB7IGlzRXJyb3I6ICExLCB2YWx1ZTogbyB9LCBbdSwgW11dOwogIH0sCiAgZGVzZXJpYWxpemUobykgewogICAgdGhyb3cgby5pc0Vycm9yID8gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3Ioby52YWx1ZS5tZXNzYWdlKSwgby52YWx1ZSkgOiBvLnZhbHVlOwogIH0KfSwgeHQgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcChbCiAgWyJwcm94eSIsIHZlXSwKICBbInRocm93IiwgZ2VdCl0pOwpmdW5jdGlvbiB3ZShvLCB1KSB7CiAgZm9yIChjb25zdCBlIG9mIG8pCiAgICBpZiAodSA9PT0gZSB8fCBlID09PSAiKiIgfHwgZSBpbnN0YW5jZW9mIFJlZ0V4cCAmJiBlLnRlc3QodSkpCiAgICAgIHJldHVybiAhMDsKICByZXR1cm4gITE7Cn0KZnVuY3Rpb24gSm4obywgdSA9IGdsb2JhbFRoaXMsIGUgPSBbIioiXSkgewogIHUuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGZ1bmN0aW9uIG0oZykgewogICAgaWYgKCFnIHx8ICFnLmRhdGEpCiAgICAgIHJldHVybjsKICAgIGlmICghd2UoZSwgZy5vcmlnaW4pKSB7CiAgICAgIGNvbnNvbGUud2FybihgSW52YWxpZCBvcmlnaW4gJyR7Zy5vcmlnaW59JyBmb3IgY29tbGluayBwcm94eWApOwogICAgICByZXR1cm47CiAgICB9CiAgICBjb25zdCB7IGlkOiBfLCB0eXBlOiB3LCBwYXRoOiBUIH0gPSBPYmplY3QuYXNzaWduKHsgcGF0aDogW10gfSwgZy5kYXRhKSwgTSA9IChnLmRhdGEuYXJndW1lbnRMaXN0IHx8IFtdKS5tYXAoWCk7CiAgICBsZXQgRTsKICAgIHRyeSB7CiAgICAgIGNvbnN0IEMgPSBULnNsaWNlKDAsIC0xKS5yZWR1Y2UoKFMsIGopID0+IFNbal0sIG8pLCBSID0gVC5yZWR1Y2UoKFMsIGopID0+IFNbal0sIG8pOwogICAgICBzd2l0Y2ggKHcpIHsKICAgICAgICBjYXNlICJHRVQiOgogICAgICAgICAgRSA9IFI7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJTRVQiOgogICAgICAgICAgQ1tULnNsaWNlKC0xKVswXV0gPSBYKGcuZGF0YS52YWx1ZSksIEUgPSAhMDsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIkFQUExZIjoKICAgICAgICAgIEUgPSBSLmFwcGx5KEMsIE0pOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiQ09OU1RSVUNUIjoKICAgICAgICAgIHsKICAgICAgICAgICAgY29uc3QgUyA9IG5ldyBSKC4uLk0pOwogICAgICAgICAgICBFID0gUGUoUyk7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJFTkRQT0lOVCI6CiAgICAgICAgICB7CiAgICAgICAgICAgIGNvbnN0IHsgcG9ydDE6IFMsIHBvcnQyOiBqIH0gPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTsKICAgICAgICAgICAgSm4obywgaiksIEUgPSBNZShTLCBbU10pOwogICAgICAgICAgfQogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiUkVMRUFTRSI6CiAgICAgICAgICBFID0gdm9pZCAwOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHJldHVybjsKICAgICAgfQogICAgfSBjYXRjaCAoQykgewogICAgICBFID0geyB2YWx1ZTogQywgW1NuXTogMCB9OwogICAgfQogICAgUHJvbWlzZS5yZXNvbHZlKEUpLmNhdGNoKChDKSA9PiAoeyB2YWx1ZTogQywgW1NuXTogMCB9KSkudGhlbigoQykgPT4gewogICAgICBjb25zdCBbUiwgU10gPSBXbihDKTsKICAgICAgdS5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIFIpLCB7IGlkOiBfIH0pLCBTKSwgdyA9PT0gIlJFTEVBU0UiICYmICh1LnJlbW92ZUV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBtKSwgSXQodSksIFpuIGluIG8gJiYgdHlwZW9mIG9bWm5dID09ICJmdW5jdGlvbiIgJiYgb1tabl0oKSk7CiAgICB9KS5jYXRjaCgoQykgPT4gewogICAgICBjb25zdCBbUiwgU10gPSBXbih7CiAgICAgICAgdmFsdWU6IG5ldyBUeXBlRXJyb3IoIlVuc2VyaWFsaXphYmxlIHJldHVybiB2YWx1ZSIpLAogICAgICAgIFtTbl06IDAKICAgICAgfSk7CiAgICAgIHUucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBSKSwgeyBpZDogXyB9KSwgUyk7CiAgICB9KTsKICB9KSwgdS5zdGFydCAmJiB1LnN0YXJ0KCk7Cn0KZnVuY3Rpb24gQWUobykgewogIHJldHVybiBvLmNvbnN0cnVjdG9yLm5hbWUgPT09ICJNZXNzYWdlUG9ydCI7Cn0KZnVuY3Rpb24gSXQobykgewogIEFlKG8pICYmIG8uY2xvc2UoKTsKfQpmdW5jdGlvbiBfZShvLCB1KSB7CiAgcmV0dXJuICRuKG8sIFtdLCB1KTsKfQpmdW5jdGlvbiBQbihvKSB7CiAgaWYgKG8pCiAgICB0aHJvdyBuZXcgRXJyb3IoIlByb3h5IGhhcyBiZWVuIHJlbGVhc2VkIGFuZCBpcyBub3QgdXNlYWJsZSIpOwp9CmZ1bmN0aW9uIGp0KG8pIHsKICByZXR1cm4gYW4obywgewogICAgdHlwZTogIlJFTEVBU0UiCiAgfSkudGhlbigoKSA9PiB7CiAgICBJdChvKTsKICB9KTsKfQpjb25zdCBibiA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpLCBPbiA9ICJGaW5hbGl6YXRpb25SZWdpc3RyeSIgaW4gZ2xvYmFsVGhpcyAmJiBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoKG8pID0+IHsKICBjb25zdCB1ID0gKGJuLmdldChvKSB8fCAwKSAtIDE7CiAgYm4uc2V0KG8sIHUpLCB1ID09PSAwICYmIGp0KG8pOwp9KTsKZnVuY3Rpb24gQ2UobywgdSkgewogIGNvbnN0IGUgPSAoYm4uZ2V0KHUpIHx8IDApICsgMTsKICBibi5zZXQodSwgZSksIE9uICYmIE9uLnJlZ2lzdGVyKG8sIHUsIG8pOwp9CmZ1bmN0aW9uIEVlKG8pIHsKICBPbiAmJiBPbi51bnJlZ2lzdGVyKG8pOwp9CmZ1bmN0aW9uICRuKG8sIHUgPSBbXSwgZSA9IGZ1bmN0aW9uKCkgewp9KSB7CiAgbGV0IG0gPSAhMTsKICBjb25zdCBnID0gbmV3IFByb3h5KGUsIHsKICAgIGdldChfLCB3KSB7CiAgICAgIGlmIChQbihtKSwgdyA9PT0gbWUpCiAgICAgICAgcmV0dXJuICgpID0+IHsKICAgICAgICAgIEVlKGcpLCBqdChvKSwgbSA9ICEwOwogICAgICAgIH07CiAgICAgIGlmICh3ID09PSAidGhlbiIpIHsKICAgICAgICBpZiAodS5sZW5ndGggPT09IDApCiAgICAgICAgICByZXR1cm4geyB0aGVuOiAoKSA9PiBnIH07CiAgICAgICAgY29uc3QgVCA9IGFuKG8sIHsKICAgICAgICAgIHR5cGU6ICJHRVQiLAogICAgICAgICAgcGF0aDogdS5tYXAoKE0pID0+IE0udG9TdHJpbmcoKSkKICAgICAgICB9KS50aGVuKFgpOwogICAgICAgIHJldHVybiBULnRoZW4uYmluZChUKTsKICAgICAgfQogICAgICByZXR1cm4gJG4obywgWy4uLnUsIHddKTsKICAgIH0sCiAgICBzZXQoXywgdywgVCkgewogICAgICBQbihtKTsKICAgICAgY29uc3QgW00sIEVdID0gV24oVCk7CiAgICAgIHJldHVybiBhbihvLCB7CiAgICAgICAgdHlwZTogIlNFVCIsCiAgICAgICAgcGF0aDogWy4uLnUsIHddLm1hcCgoQykgPT4gQy50b1N0cmluZygpKSwKICAgICAgICB2YWx1ZTogTQogICAgICB9LCBFKS50aGVuKFgpOwogICAgfSwKICAgIGFwcGx5KF8sIHcsIFQpIHsKICAgICAgUG4obSk7CiAgICAgIGNvbnN0IE0gPSB1W3UubGVuZ3RoIC0gMV07CiAgICAgIGlmIChNID09PSB5ZSkKICAgICAgICByZXR1cm4gYW4obywgewogICAgICAgICAgdHlwZTogIkVORFBPSU5UIgogICAgICAgIH0pLnRoZW4oWCk7CiAgICAgIGlmIChNID09PSAiYmluZCIpCiAgICAgICAgcmV0dXJuICRuKG8sIHUuc2xpY2UoMCwgLTEpKTsKICAgICAgY29uc3QgW0UsIENdID0ga3QoVCk7CiAgICAgIHJldHVybiBhbihvLCB7CiAgICAgICAgdHlwZTogIkFQUExZIiwKICAgICAgICBwYXRoOiB1Lm1hcCgoUikgPT4gUi50b1N0cmluZygpKSwKICAgICAgICBhcmd1bWVudExpc3Q6IEUKICAgICAgfSwgQykudGhlbihYKTsKICAgIH0sCiAgICBjb25zdHJ1Y3QoXywgdykgewogICAgICBQbihtKTsKICAgICAgY29uc3QgW1QsIE1dID0ga3Qodyk7CiAgICAgIHJldHVybiBhbihvLCB7CiAgICAgICAgdHlwZTogIkNPTlNUUlVDVCIsCiAgICAgICAgcGF0aDogdS5tYXAoKEUpID0+IEUudG9TdHJpbmcoKSksCiAgICAgICAgYXJndW1lbnRMaXN0OiBUCiAgICAgIH0sIE0pLnRoZW4oWCk7CiAgICB9CiAgfSk7CiAgcmV0dXJuIENlKGcsIG8pLCBnOwp9CmZ1bmN0aW9uIFRlKG8pIHsKICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgbyk7Cn0KZnVuY3Rpb24ga3QobykgewogIGNvbnN0IHUgPSBvLm1hcChXbik7CiAgcmV0dXJuIFt1Lm1hcCgoZSkgPT4gZVswXSksIFRlKHUubWFwKChlKSA9PiBlWzFdKSldOwp9CmNvbnN0IEx0ID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7CmZ1bmN0aW9uIE1lKG8sIHUpIHsKICByZXR1cm4gTHQuc2V0KG8sIHUpLCBvOwp9CmZ1bmN0aW9uIFBlKG8pIHsKICByZXR1cm4gT2JqZWN0LmFzc2lnbihvLCB7IFtSdF06ICEwIH0pOwp9CmZ1bmN0aW9uIFduKG8pIHsKICBmb3IgKGNvbnN0IFt1LCBlXSBvZiB4dCkKICAgIGlmIChlLmNhbkhhbmRsZShvKSkgewogICAgICBjb25zdCBbbSwgZ10gPSBlLnNlcmlhbGl6ZShvKTsKICAgICAgcmV0dXJuIFsKICAgICAgICB7CiAgICAgICAgICB0eXBlOiAiSEFORExFUiIsCiAgICAgICAgICBuYW1lOiB1LAogICAgICAgICAgdmFsdWU6IG0KICAgICAgICB9LAogICAgICAgIGcKICAgICAgXTsKICAgIH0KICByZXR1cm4gWwogICAgewogICAgICB0eXBlOiAiUkFXIiwKICAgICAgdmFsdWU6IG8KICAgIH0sCiAgICBMdC5nZXQobykgfHwgW10KICBdOwp9CmZ1bmN0aW9uIFgobykgewogIHN3aXRjaCAoby50eXBlKSB7CiAgICBjYXNlICJIQU5ETEVSIjoKICAgICAgcmV0dXJuIHh0LmdldChvLm5hbWUpLmRlc2VyaWFsaXplKG8udmFsdWUpOwogICAgY2FzZSAiUkFXIjoKICAgICAgcmV0dXJuIG8udmFsdWU7CiAgfQp9CmZ1bmN0aW9uIGFuKG8sIHUsIGUpIHsKICByZXR1cm4gbmV3IFByb21pc2UoKG0pID0+IHsKICAgIGNvbnN0IGcgPSBTZSgpOwogICAgby5hZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgZnVuY3Rpb24gXyh3KSB7CiAgICAgICF3LmRhdGEgfHwgIXcuZGF0YS5pZCB8fCB3LmRhdGEuaWQgIT09IGcgfHwgKG8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIF8pLCBtKHcuZGF0YSkpOwogICAgfSksIG8uc3RhcnQgJiYgby5zdGFydCgpLCBvLnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oeyBpZDogZyB9LCB1KSwgZSk7CiAgfSk7Cn0KZnVuY3Rpb24gU2UoKSB7CiAgcmV0dXJuIG5ldyBBcnJheSg0KS5maWxsKDApLm1hcCgoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikudG9TdHJpbmcoMTYpKS5qb2luKCItIik7Cn0KZnVuY3Rpb24gYmUoewogIGJvdHRvbVJpZ2h0WDogbywKICBib3R0b21SaWdodFk6IHUsCiAgdG9wTGVmdFg6IGUsCiAgdG9wTGVmdFk6IG0KfSwgZykgewogIGNvbnN0IF8gPSBNYXRoLmFicyhvIC0gZSksIHcgPSBNYXRoLmFicyh1IC0gbSksIFQgPSBNYXRoLm1heChfLCB3KSAqIDAuMzM3NSwgTSA9IGRlKGcud2lkdGgsIGcuaGVpZ2h0KTsKICByZXR1cm4gZmUoVCAvIE0pOwp9CmNsYXNzIE9lIGV4dGVuZHMgcGUgewogIHBhcnNlUmF3RGF0YSh1LCBlKSB7CiAgICBjb25zdCB7IGJyaWdodG5lc3M6IG0sIHNoYXJwbmVzczogZyB9ID0gdS5wYXJhbXMsIHsgYm90dG9tUmlnaHRYOiBfLCBib3R0b21SaWdodFk6IHcsIHRvcExlZnRYOiBULCB0b3BMZWZ0WTogTSB9ID0gdSwgRSA9IGJlKHsgYm90dG9tUmlnaHRYOiBfLCBib3R0b21SaWdodFk6IHcsIHRvcExlZnRYOiBULCB0b3BMZWZ0WTogTSB9LCBlKTsKICAgIHJldHVybiB7CiAgICAgIGNvbmZpZGVuY2U6IHUucHJvYmFiaWxpdHkgLyAxZTMsCiAgICAgIHRvcExlZnQ6IHsKICAgICAgICB4OiBULAogICAgICAgIHk6IE0KICAgICAgfSwKICAgICAgYm90dG9tUmlnaHQ6IHsKICAgICAgICB4OiBfLAogICAgICAgIHk6IHcKICAgICAgfSwKICAgICAgZmFjZUNlbnRlcjogewogICAgICAgIHg6IChUICsgXykgLyAyLAogICAgICAgIHk6IChNICsgdykgLyAyCiAgICAgIH0sCiAgICAgIGZhY2VTaXplOiBFLAogICAgICBicmlnaHRuZXNzOiBtIC8gMWUzLAogICAgICBzaGFycG5lc3M6IGcgLyAxZTMKICAgIH07CiAgfQogIGFzeW5jIGRldGVjdCh1LCBlLCBtKSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IHgoIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIGNvbnN0IGcgPSB0aGlzLmFsbG9jYXRlTWVtb3J5KHUubGVuZ3RoICogdS5CWVRFU19QRVJfRUxFTUVOVCksIF8gPSB0aGlzLmFsbG9jYXRlTWVtb3J5KHUubGVuZ3RoICogdS5CWVRFU19QRVJfRUxFTUVOVCk7CiAgICB0aGlzLndyaXRlRGF0YVRvTWVtb3J5KHUsIGcpLCB0aGlzLnNhbVdhc21Nb2R1bGUuY29udmVydFRvU2FtQ29sb3JJbWFnZSgKICAgICAgZS53aWR0aCwKICAgICAgZS5oZWlnaHQsCiAgICAgIGcsCiAgICAgIGNlLlJHQkEsCiAgICAgIF8KICAgICk7CiAgICBjb25zdCB3ID0gdGhpcy5zYW1XYXNtTW9kdWxlLmRldGVjdEZhY2VXaXRoSW1hZ2VQYXJhbWV0ZXJzKAogICAgICBlLndpZHRoLAogICAgICBlLmhlaWdodCwKICAgICAgXywKICAgICAgMCwKICAgICAgLy8gcGFyYW1XaWR0aCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICAgMAogICAgICAvLyBwYXJhbUhlaWdodCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICk7CiAgICByZXR1cm4gdGhpcy5yZWxlYXNlTWVtb3J5KGcpLCB0aGlzLnJlbGVhc2VNZW1vcnkoXyksIHRoaXMucGFyc2VSYXdEYXRhKHcsIG0pOwogIH0KfQpKbihPZSk7Cg==", Ha = typeof window < "u" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);" + atob(bs)], { type: "text/javascript;charset=utf-8" });
function sl(t) {
  let i;
  try {
    if (i = Ha && (window.URL || window.webkitURL).createObjectURL(Ha), !i)
      throw "";
    const e = new Worker(i, {
      type: "module",
      name: t == null ? void 0 : t.name
    });
    return e.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(i);
    }), e;
  } catch {
    return new Worker(
      "data:application/javascript;base64," + bs,
      {
        type: "module",
        name: t == null ? void 0 : t.name
      }
    );
  }
}
const Bo = class Bo extends Jx {
  constructor() {
    super(...arguments);
    j(this, "detector");
    j(this, "className", "FaceController");
    j(this, "fallbackInstruction", Le.FACE_NOT_PRESENT);
    j(this, "pitchAngleAccelerationThreshold", null);
    j(this, "validateDetectedObject", (e, n) => {
      const { brightnessHighThreshold: o, brightnessLowThreshold: r, faceConfidence: a, maxFaceSizeRatio: g, minFaceSizeRatio: s, outOfBoundsThreshold: x, sharpnessThreshold: C } = this.getThresholds(), u = e.confidence > a, h = e.faceSize > s, p = e.faceSize < g, v = e.sharpness > C, E = e.brightness > r, B = e.brightness < o, k = gl(x, e, n), K = al(this.pitchAngleAccelerationThreshold, this.acceleration), G = {};
      return G.isPresent = u, G.isNotSmall = h, G.isNotLarge = p, G.isSharp = v, G.isNotDim = E, G.isNotBright = B, G.isNotOutOfBounds = k, G.isNotPitched = K, G;
    });
    j(this, "getInstructionCode", (e, n) => {
      var r;
      if (this.isInCandidateSelection)
        return Le.CANDIDATE_SELECTION;
      if ((r = this.lastImage) != null && r.isValid && n)
        return Le.CANDIDATE_SELECTION;
      if (this.lastImage && n)
        return this.lastImage.instructionCode;
      const [o] = this.getInstructionCodesForValidators(e);
      return o ?? this.fallbackInstruction;
    });
    j(this, "getInstructionCodesForValidators", (e) => {
      const n = [];
      return Object.entries(e).forEach(([o, r]) => {
        !r && n.push(dI[o]);
      }), n;
    });
  }
  static async init() {
    const e = new sl(), n = hs(e), o = new Bo(), r = await new n();
    this._instance = o, this._instance.detector = r;
  }
  static async getInstance() {
    return !this._instance && await this.init(), this._instance;
  }
  setThresholds(e) {
    super.setThresholds(e);
    const { devicePitchAngleThreshold: n } = e;
    this.pitchAngleAccelerationThreshold = PI * Math.sin(n * (Math.PI / (-8136 + -2 * -2699 + 2918)));
  }
  restart() {
    super.restart(), Ga(gt.INSTRUCTION_CHANGED, void 0, ex);
  }
  async processImage(e) {
    var E;
    const n = {};
    n.width = e.width, n.height = e.height;
    const o = n, r = cr(o), a = JI(e, r), g = UI(a), s = {};
    s.width = a.width, s.height = a.height;
    const x = s;
    let C = await this.detector.detect(g, x, o);
    C = Vx(o, C);
    const u = this.validateDetectedObject(C, o), h = this.isDetectionValid(u), p = this.getInstructionCode(u, h);
    if (u.isPresent && this.collectImagesForDuplicateDetection(g), this.isInCandidateSelection) {
      if (this.bestImage && h && this.isNewImageBetter(this.bestImage.detection, C)) {
        const B = { image: e, detection: Qt(C) };
        this.bestImage = B, this.candidateSelectionImages.push(B);
      }
    } else if ((E = this.lastImage) != null && E.isValid && h) {
      const B = { image: e, detection: Qt(C) }, k = {};
      k.image = this.lastImage.image, k.detection = this.lastImage.detection;
      const K = k;
      this.isNewImageBetter(K.detection, B.detection) ? this.bestImage = B : this.bestImage = K, this.candidateSelectionImages.push(K, B), this.isInCandidateSelection = !0;
    } else
      h ? this.lastImage = { instructionCode: p, isValid: !0, image: e, detection: Qt(C) } : this.lastImage = { instructionCode: p, isValid: !1, image: e, detection: Qt(C) };
    const v = { detectedFace: Qt(C), instructionCode: p, invalidValidators: this.getInstructionCodesForValidators(u), isInCandidateSelection: this.isInCandidateSelection };
    return this.detectionRecord.push(v.detectedFace), Ga(gt.INSTRUCTION_CHANGED, p), ox(gt.DETECTED_FACE_CHANGED, v.detectedFace, this.getThresholds().faceConfidence), ix(gt.FACE_DETECTION, v.detectedFace, e), v;
  }
};
j(Bo, "_instance");
let Li = Bo;
const cl = (t, i) => {
  const { handleError: e } = Eo(), [n, o] = Te(), { acceleration: r } = Rx();
  n && n.setAcceleration(r), Ce(() => {
    (async () => {
      const s = await Li.getInstance();
      try {
        const x = {};
        x.wasmDirectoryPath = i, x.thresholds = t, await s.init(x);
      } catch (x) {
        if (x instanceof Error) {
          e(ne.fromError(x));
          return;
        }
      }
      o(s);
    })();
  }, [e, t, i]);
  const a = {};
  return a.controller = n, a;
};
var vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ys = {}, Oa = {}, Il = xl;
function xl(t, i) {
  for (var e = new Array(arguments.length - 1), n = 0, o = 2, r = !0; o < arguments.length; )
    e[n++] = arguments[o++];
  return new Promise(function(a, g) {
    e[n] = function(s) {
      if (r)
        if (r = !1, s)
          g(s);
        else {
          for (var x = new Array(arguments.length - 1), C = 0; C < x.length; )
            x[C++] = arguments[C];
          a.apply(null, x);
        }
    };
    try {
      t.apply(i || null, e);
    } catch (s) {
      r && (r = !1, g(s));
    }
  });
}
var vs = {};
(function(t) {
  var i = t;
  i.length = function(a) {
    var g = a.length;
    if (!g)
      return 0;
    for (var s = 0; --g % 4 > 1 && a.charAt(g) === "="; )
      ++s;
    return Math.ceil(a.length * 3) / 4 - s;
  };
  for (var e = new Array(64), n = new Array(123), o = 0; o < 64; )
    n[e[o] = o < 26 ? o + 65 : o < 52 ? o + 71 : o < 62 ? o - 4 : o - 59 | 43] = o++;
  i.encode = function(a, g, s) {
    for (var x = null, C = [], u = 0, h = 0, p; g < s; ) {
      var v = a[g++];
      switch (h) {
        case 0:
          C[u++] = e[v >> 2], p = (v & 3) << 4, h = 1;
          break;
        case 1:
          C[u++] = e[p | v >> 4], p = (v & 15) << 2, h = 2;
          break;
        case 2:
          C[u++] = e[p | v >> 6], C[u++] = e[v & 63], h = 0;
          break;
      }
      u > 8191 && ((x || (x = [])).push(String.fromCharCode.apply(String, C)), u = 0);
    }
    return h && (C[u++] = e[p], C[u++] = 61, h === 1 && (C[u++] = 61)), x ? (u && x.push(String.fromCharCode.apply(String, C.slice(0, u))), x.join("")) : String.fromCharCode.apply(String, C.slice(0, u));
  };
  var r = "invalid encoding";
  i.decode = function(a, g, s) {
    for (var x = s, C = 0, u, h = 0; h < a.length; ) {
      var p = a.charCodeAt(h++);
      if (p === 61 && C > 1)
        break;
      if ((p = n[p]) === void 0)
        throw Error(r);
      switch (C) {
        case 0:
          u = p, C = 1;
          break;
        case 1:
          g[s++] = u << 2 | (p & 48) >> 4, u = p, C = 2;
          break;
        case 2:
          g[s++] = (u & 15) << 4 | (p & 60) >> 2, u = p, C = 3;
          break;
        case 3:
          g[s++] = (u & 3) << 6 | p, C = 0;
          break;
      }
    }
    if (C === 1)
      throw Error(r);
    return s - x;
  }, i.test = function(a) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(a);
  };
})(vs);
var ll = No;
function No() {
  this._listeners = {};
}
No.prototype.on = function(t, i, e) {
  return (this._listeners[t] || (this._listeners[t] = [])).push({
    fn: i,
    ctx: e || this
  }), this;
};
No.prototype.off = function(t, i) {
  if (t === void 0)
    this._listeners = {};
  else if (i === void 0)
    this._listeners[t] = [];
  else
    for (var e = this._listeners[t], n = 0; n < e.length; )
      e[n].fn === i ? e.splice(n, 1) : ++n;
  return this;
};
No.prototype.emit = function(t) {
  var i = this._listeners[t];
  if (i) {
    for (var e = [], n = 1; n < arguments.length; )
      e.push(arguments[n++]);
    for (n = 0; n < i.length; )
      i[n].fn.apply(i[n++].ctx, e);
  }
  return this;
};
var ul = Wa(Wa);
function Wa(t) {
  return typeof Float32Array < "u" ? function() {
    var i = new Float32Array([-0]), e = new Uint8Array(i.buffer), n = e[3] === 128;
    function o(s, x, C) {
      i[0] = s, x[C] = e[0], x[C + 1] = e[1], x[C + 2] = e[2], x[C + 3] = e[3];
    }
    function r(s, x, C) {
      i[0] = s, x[C] = e[3], x[C + 1] = e[2], x[C + 2] = e[1], x[C + 3] = e[0];
    }
    t.writeFloatLE = n ? o : r, t.writeFloatBE = n ? r : o;
    function a(s, x) {
      return e[0] = s[x], e[1] = s[x + 1], e[2] = s[x + 2], e[3] = s[x + 3], i[0];
    }
    function g(s, x) {
      return e[3] = s[x], e[2] = s[x + 1], e[1] = s[x + 2], e[0] = s[x + 3], i[0];
    }
    t.readFloatLE = n ? a : g, t.readFloatBE = n ? g : a;
  }() : function() {
    function i(n, o, r, a) {
      var g = o < 0 ? 1 : 0;
      if (g && (o = -o), o === 0)
        n(1 / o > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), r, a);
      else if (isNaN(o))
        n(2143289344, r, a);
      else if (o > 34028234663852886e22)
        n((g << 31 | 2139095040) >>> 0, r, a);
      else if (o < 11754943508222875e-54)
        n((g << 31 | Math.round(o / 1401298464324817e-60)) >>> 0, r, a);
      else {
        var s = Math.floor(Math.log(o) / Math.LN2), x = Math.round(o * Math.pow(2, -s) * 8388608) & 8388607;
        n((g << 31 | s + 127 << 23 | x) >>> 0, r, a);
      }
    }
    t.writeFloatLE = i.bind(null, Ra), t.writeFloatBE = i.bind(null, Va);
    function e(n, o, r) {
      var a = n(o, r), g = (a >> 31) * 2 + 1, s = a >>> 23 & 255, x = a & 8388607;
      return s === 255 ? x ? NaN : g * (1 / 0) : s === 0 ? g * 1401298464324817e-60 * x : g * Math.pow(2, s - 150) * (x + 8388608);
    }
    t.readFloatLE = e.bind(null, Ea), t.readFloatBE = e.bind(null, Pa);
  }(), typeof Float64Array < "u" ? function() {
    var i = new Float64Array([-0]), e = new Uint8Array(i.buffer), n = e[7] === 128;
    function o(s, x, C) {
      i[0] = s, x[C] = e[0], x[C + 1] = e[1], x[C + 2] = e[2], x[C + 3] = e[3], x[C + 4] = e[4], x[C + 5] = e[5], x[C + 6] = e[6], x[C + 7] = e[7];
    }
    function r(s, x, C) {
      i[0] = s, x[C] = e[7], x[C + 1] = e[6], x[C + 2] = e[5], x[C + 3] = e[4], x[C + 4] = e[3], x[C + 5] = e[2], x[C + 6] = e[1], x[C + 7] = e[0];
    }
    t.writeDoubleLE = n ? o : r, t.writeDoubleBE = n ? r : o;
    function a(s, x) {
      return e[0] = s[x], e[1] = s[x + 1], e[2] = s[x + 2], e[3] = s[x + 3], e[4] = s[x + 4], e[5] = s[x + 5], e[6] = s[x + 6], e[7] = s[x + 7], i[0];
    }
    function g(s, x) {
      return e[7] = s[x], e[6] = s[x + 1], e[5] = s[x + 2], e[4] = s[x + 3], e[3] = s[x + 4], e[2] = s[x + 5], e[1] = s[x + 6], e[0] = s[x + 7], i[0];
    }
    t.readDoubleLE = n ? a : g, t.readDoubleBE = n ? g : a;
  }() : function() {
    function i(n, o, r, a, g, s) {
      var x = a < 0 ? 1 : 0;
      if (x && (a = -a), a === 0)
        n(0, g, s + o), n(1 / a > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), g, s + r);
      else if (isNaN(a))
        n(0, g, s + o), n(2146959360, g, s + r);
      else if (a > 17976931348623157e292)
        n(0, g, s + o), n((x << 31 | 2146435072) >>> 0, g, s + r);
      else {
        var C;
        if (a < 22250738585072014e-324)
          C = a / 5e-324, n(C >>> 0, g, s + o), n((x << 31 | C / 4294967296) >>> 0, g, s + r);
        else {
          var u = Math.floor(Math.log(a) / Math.LN2);
          u === 1024 && (u = 1023), C = a * Math.pow(2, -u), n(C * 4503599627370496 >>> 0, g, s + o), n((x << 31 | u + 1023 << 20 | C * 1048576 & 1048575) >>> 0, g, s + r);
        }
      }
    }
    t.writeDoubleLE = i.bind(null, Ra, 0, 4), t.writeDoubleBE = i.bind(null, Va, 4, 0);
    function e(n, o, r, a, g) {
      var s = n(a, g + o), x = n(a, g + r), C = (x >> 31) * 2 + 1, u = x >>> 20 & 2047, h = 4294967296 * (x & 1048575) + s;
      return u === 2047 ? h ? NaN : C * (1 / 0) : u === 0 ? C * 5e-324 * h : C * Math.pow(2, u - 1075) * (h + 4503599627370496);
    }
    t.readDoubleLE = e.bind(null, Ea, 0, 4), t.readDoubleBE = e.bind(null, Pa, 4, 0);
  }(), t;
}
function Ra(t, i, e) {
  i[e] = t & 255, i[e + 1] = t >>> 8 & 255, i[e + 2] = t >>> 16 & 255, i[e + 3] = t >>> 24;
}
function Va(t, i, e) {
  i[e] = t >>> 24, i[e + 1] = t >>> 16 & 255, i[e + 2] = t >>> 8 & 255, i[e + 3] = t & 255;
}
function Ea(t, i) {
  return (t[i] | t[i + 1] << 8 | t[i + 2] << 16 | t[i + 3] << 24) >>> 0;
}
function Pa(t, i) {
  return (t[i] << 24 | t[i + 1] << 16 | t[i + 2] << 8 | t[i + 3]) >>> 0;
}
function Na(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Cl = dl;
function dl(t) {
  try {
    if (typeof Na != "function")
      return null;
    var i = Na(t);
    return i && (i.length || Object.keys(i).length) ? i : null;
  } catch {
    return null;
  }
}
var ws = {};
(function(t) {
  var i = t;
  i.length = function(e) {
    for (var n = 0, o = 0, r = 0; r < e.length; ++r)
      o = e.charCodeAt(r), o < 128 ? n += 1 : o < 2048 ? n += 2 : (o & 64512) === 55296 && (e.charCodeAt(r + 1) & 64512) === 56320 ? (++r, n += 4) : n += 3;
    return n;
  }, i.read = function(e, n, o) {
    var r = o - n;
    if (r < 1)
      return "";
    for (var a = null, g = [], s = 0, x; n < o; )
      x = e[n++], x < 128 ? g[s++] = x : x > 191 && x < 224 ? g[s++] = (x & 31) << 6 | e[n++] & 63 : x > 239 && x < 365 ? (x = ((x & 7) << 18 | (e[n++] & 63) << 12 | (e[n++] & 63) << 6 | e[n++] & 63) - 65536, g[s++] = 55296 + (x >> 10), g[s++] = 56320 + (x & 1023)) : g[s++] = (x & 15) << 12 | (e[n++] & 63) << 6 | e[n++] & 63, s > 8191 && ((a || (a = [])).push(String.fromCharCode.apply(String, g)), s = 0);
    return a ? (s && a.push(String.fromCharCode.apply(String, g.slice(0, s))), a.join("")) : String.fromCharCode.apply(String, g.slice(0, s));
  }, i.write = function(e, n, o) {
    for (var r = o, a, g, s = 0; s < e.length; ++s)
      a = e.charCodeAt(s), a < 128 ? n[o++] = a : a < 2048 ? (n[o++] = a >> 6 | 192, n[o++] = a & 63 | 128) : (a & 64512) === 55296 && ((g = e.charCodeAt(s + 1)) & 64512) === 56320 ? (a = 65536 + ((a & 1023) << 10) + (g & 1023), ++s, n[o++] = a >> 18 | 240, n[o++] = a >> 12 & 63 | 128, n[o++] = a >> 6 & 63 | 128, n[o++] = a & 63 | 128) : (n[o++] = a >> 12 | 224, n[o++] = a >> 6 & 63 | 128, n[o++] = a & 63 | 128);
    return o - r;
  };
})(ws);
var Al = pl;
function pl(t, i, e) {
  var n = e || 8192, o = n >>> 1, r = null, a = n;
  return function(g) {
    if (g < 1 || g > o)
      return t(g);
    a + g > n && (r = t(n), a = 0);
    var s = i.call(r, a, a += g);
    return a & 7 && (a = (a | 7) + 1), s;
  };
}
var xi, Ya;
function hl() {
  if (Ya)
    return xi;
  Ya = 1, xi = i;
  var t = Et();
  function i(r, a) {
    this.lo = r >>> 0, this.hi = a >>> 0;
  }
  var e = i.zero = new i(0, 0);
  e.toNumber = function() {
    return 0;
  }, e.zzEncode = e.zzDecode = function() {
    return this;
  }, e.length = function() {
    return 1;
  };
  var n = i.zeroHash = "\0\0\0\0\0\0\0\0";
  i.fromNumber = function(r) {
    if (r === 0)
      return e;
    var a = r < 0;
    a && (r = -r);
    var g = r >>> 0, s = (r - g) / 4294967296 >>> 0;
    return a && (s = ~s >>> 0, g = ~g >>> 0, ++g > 4294967295 && (g = 0, ++s > 4294967295 && (s = 0))), new i(g, s);
  }, i.from = function(r) {
    if (typeof r == "number")
      return i.fromNumber(r);
    if (t.isString(r))
      if (t.Long)
        r = t.Long.fromString(r);
      else
        return i.fromNumber(parseInt(r, 10));
    return r.low || r.high ? new i(r.low >>> 0, r.high >>> 0) : e;
  }, i.prototype.toNumber = function(r) {
    if (!r && this.hi >>> 31) {
      var a = ~this.lo + 1 >>> 0, g = ~this.hi >>> 0;
      return a || (g = g + 1 >>> 0), -(a + g * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  }, i.prototype.toLong = function(r) {
    return t.Long ? new t.Long(this.lo | 0, this.hi | 0, !!r) : { low: this.lo | 0, high: this.hi | 0, unsigned: !!r };
  };
  var o = String.prototype.charCodeAt;
  return i.fromHash = function(r) {
    return r === n ? e : new i(
      (o.call(r, 0) | o.call(r, 1) << 8 | o.call(r, 2) << 16 | o.call(r, 3) << 24) >>> 0,
      (o.call(r, 4) | o.call(r, 5) << 8 | o.call(r, 6) << 16 | o.call(r, 7) << 24) >>> 0
    );
  }, i.prototype.toHash = function() {
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
  }, i.prototype.zzEncode = function() {
    var r = this.hi >> 31;
    return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ r) >>> 0, this.lo = (this.lo << 1 ^ r) >>> 0, this;
  }, i.prototype.zzDecode = function() {
    var r = -(this.lo & 1);
    return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ r) >>> 0, this.hi = (this.hi >>> 1 ^ r) >>> 0, this;
  }, i.prototype.length = function() {
    var r = this.lo, a = (this.lo >>> 28 | this.hi << 4) >>> 0, g = this.hi >>> 24;
    return g === 0 ? a === 0 ? r < 16384 ? r < 128 ? 1 : 2 : r < 2097152 ? 3 : 4 : a < 16384 ? a < 128 ? 5 : 6 : a < 2097152 ? 7 : 8 : g < 128 ? 9 : 10;
  }, xi;
}
var La;
function Et() {
  return La || (La = 1, function(t) {
    var i = t;
    i.asPromise = Il, i.base64 = vs, i.EventEmitter = ll, i.float = ul, i.inquire = Cl, i.utf8 = ws, i.pool = Al, i.LongBits = hl(), i.isNode = !!(typeof vt < "u" && vt && vt.process && vt.process.versions && vt.process.versions.node), i.global = i.isNode && vt || typeof window < "u" && window || typeof self < "u" && self || vt, i.emptyArray = Object.freeze ? Object.freeze([]) : (
      /* istanbul ignore next */
      []
    ), i.emptyObject = Object.freeze ? Object.freeze({}) : (
      /* istanbul ignore next */
      {}
    ), i.isInteger = Number.isInteger || /* istanbul ignore next */
    function(o) {
      return typeof o == "number" && isFinite(o) && Math.floor(o) === o;
    }, i.isString = function(o) {
      return typeof o == "string" || o instanceof String;
    }, i.isObject = function(o) {
      return o && typeof o == "object";
    }, i.isset = /**
    * Checks if a property on a message is considered to be present.
    * @param {Object} obj Plain object or message instance
    * @param {string} prop Property name
    * @returns {boolean} `true` if considered to be present, otherwise `false`
    */
    i.isSet = function(o, r) {
      var a = o[r];
      return a != null && o.hasOwnProperty(r) ? typeof a != "object" || (Array.isArray(a) ? a.length : Object.keys(a).length) > 0 : !1;
    }, i.Buffer = function() {
      try {
        var o = i.inquire("buffer").Buffer;
        return o.prototype.utf8Write ? o : (
          /* istanbul ignore next */
          null
        );
      } catch {
        return null;
      }
    }(), i._Buffer_from = null, i._Buffer_allocUnsafe = null, i.newBuffer = function(o) {
      return typeof o == "number" ? i.Buffer ? i._Buffer_allocUnsafe(o) : new i.Array(o) : i.Buffer ? i._Buffer_from(o) : typeof Uint8Array > "u" ? o : new Uint8Array(o);
    }, i.Array = typeof Uint8Array < "u" ? Uint8Array : Array, i.Long = /* istanbul ignore next */
    i.global.dcodeIO && /* istanbul ignore next */
    i.global.dcodeIO.Long || /* istanbul ignore next */
    i.global.Long || i.inquire("long"), i.key2Re = /^true|false|0|1$/, i.key32Re = /^-?(?:0|[1-9][0-9]*)$/, i.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, i.longToHash = function(o) {
      return o ? i.LongBits.from(o).toHash() : i.LongBits.zeroHash;
    }, i.longFromHash = function(o, r) {
      var a = i.LongBits.fromHash(o);
      return i.Long ? i.Long.fromBits(a.lo, a.hi, r) : a.toNumber(!!r);
    };
    function e(o, r, a) {
      for (var g = Object.keys(r), s = 0; s < g.length; ++s)
        (o[g[s]] === void 0 || !a) && (o[g[s]] = r[g[s]]);
      return o;
    }
    i.merge = e, i.lcFirst = function(o) {
      return o.charAt(0).toLowerCase() + o.substring(1);
    };
    function n(o) {
      function r(a, g) {
        if (!(this instanceof r))
          return new r(a, g);
        Object.defineProperty(this, "message", { get: function() {
          return a;
        } }), Error.captureStackTrace ? Error.captureStackTrace(this, r) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), g && e(this, g);
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
            return o;
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
    i.newError = n, i.ProtocolError = n("ProtocolError"), i.oneOfGetter = function(o) {
      for (var r = {}, a = 0; a < o.length; ++a)
        r[o[a]] = 1;
      return function() {
        for (var g = Object.keys(this), s = g.length - 1; s > -1; --s)
          if (r[g[s]] === 1 && this[g[s]] !== void 0 && this[g[s]] !== null)
            return g[s];
      };
    }, i.oneOfSetter = function(o) {
      return function(r) {
        for (var a = 0; a < o.length; ++a)
          o[a] !== r && delete this[o[a]];
      };
    }, i.toJSONOptions = {
      longs: String,
      enums: String,
      bytes: String,
      json: !0
    }, i._configure = function() {
      var o = i.Buffer;
      if (!o) {
        i._Buffer_from = i._Buffer_allocUnsafe = null;
        return;
      }
      i._Buffer_from = o.from !== Uint8Array.from && o.from || /* istanbul ignore next */
      function(r, a) {
        return new o(r, a);
      }, i._Buffer_allocUnsafe = o.allocUnsafe || /* istanbul ignore next */
      function(r) {
        return new o(r);
      };
    };
  }(Oa)), Oa;
}
var Bs = M, Re = Et(), Ti, Yo = Re.LongBits, Ta = Re.base64, Da = Re.utf8;
function Vn(t, i, e) {
  this.fn = t, this.len = i, this.next = void 0, this.val = e;
}
function Ir() {
}
function fl(t) {
  this.head = t.head, this.tail = t.tail, this.len = t.len, this.next = t.states;
}
function M() {
  this.len = 0, this.head = new Vn(Ir, 0, 0), this.tail = this.head, this.states = null;
}
var Ss = function() {
  return Re.Buffer ? function() {
    return (M.create = function() {
      return new Ti();
    })();
  } : function() {
    return new M();
  };
};
M.create = Ss();
M.alloc = function(t) {
  return new Re.Array(t);
};
Re.Array !== Array && (M.alloc = Re.pool(M.alloc, Re.Array.prototype.subarray));
M.prototype._push = function(t, i, e) {
  return this.tail = this.tail.next = new Vn(t, i, e), this.len += i, this;
};
function xr(t, i, e) {
  i[e] = t & 255;
}
function ml(t, i, e) {
  for (; t > 127; )
    i[e++] = t & 127 | 128, t >>>= 7;
  i[e] = t;
}
function lr(t, i) {
  this.len = t, this.next = void 0, this.val = i;
}
lr.prototype = Object.create(Vn.prototype);
lr.prototype.fn = ml;
M.prototype.uint32 = function(t) {
  return this.len += (this.tail = this.tail.next = new lr(
    (t = t >>> 0) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : 5,
    t
  )).len, this;
};
M.prototype.int32 = function(t) {
  return t < 0 ? this._push(ur, 10, Yo.fromNumber(t)) : this.uint32(t);
};
M.prototype.sint32 = function(t) {
  return this.uint32((t << 1 ^ t >> 31) >>> 0);
};
function ur(t, i, e) {
  for (; t.hi; )
    i[e++] = t.lo & 127 | 128, t.lo = (t.lo >>> 7 | t.hi << 25) >>> 0, t.hi >>>= 7;
  for (; t.lo > 127; )
    i[e++] = t.lo & 127 | 128, t.lo = t.lo >>> 7;
  i[e++] = t.lo;
}
M.prototype.uint64 = function(t) {
  var i = Yo.from(t);
  return this._push(ur, i.length(), i);
};
M.prototype.int64 = M.prototype.uint64;
M.prototype.sint64 = function(t) {
  var i = Yo.from(t).zzEncode();
  return this._push(ur, i.length(), i);
};
M.prototype.bool = function(t) {
  return this._push(xr, 1, t ? 1 : 0);
};
function Di(t, i, e) {
  i[e] = t & 255, i[e + 1] = t >>> 8 & 255, i[e + 2] = t >>> 16 & 255, i[e + 3] = t >>> 24;
}
M.prototype.fixed32 = function(t) {
  return this._push(Di, 4, t >>> 0);
};
M.prototype.sfixed32 = M.prototype.fixed32;
M.prototype.fixed64 = function(t) {
  var i = Yo.from(t);
  return this._push(Di, 4, i.lo)._push(Di, 4, i.hi);
};
M.prototype.sfixed64 = M.prototype.fixed64;
M.prototype.float = function(t) {
  return this._push(Re.float.writeFloatLE, 4, t);
};
M.prototype.double = function(t) {
  return this._push(Re.float.writeDoubleLE, 8, t);
};
var bl = Re.Array.prototype.set ? function(t, i, e) {
  i.set(t, e);
} : function(t, i, e) {
  for (var n = 0; n < t.length; ++n)
    i[e + n] = t[n];
};
M.prototype.bytes = function(t) {
  var i = t.length >>> 0;
  if (!i)
    return this._push(xr, 1, 0);
  if (Re.isString(t)) {
    var e = M.alloc(i = Ta.length(t));
    Ta.decode(t, e, 0), t = e;
  }
  return this.uint32(i)._push(bl, i, t);
};
M.prototype.string = function(t) {
  var i = Da.length(t);
  return i ? this.uint32(i)._push(Da.write, i, t) : this._push(xr, 1, 0);
};
M.prototype.fork = function() {
  return this.states = new fl(this), this.head = this.tail = new Vn(Ir, 0, 0), this.len = 0, this;
};
M.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Vn(Ir, 0, 0), this.len = 0), this;
};
M.prototype.ldelim = function() {
  var t = this.head, i = this.tail, e = this.len;
  return this.reset().uint32(e), e && (this.tail.next = t.next, this.tail = i, this.len += e), this;
};
M.prototype.finish = function() {
  for (var t = this.head.next, i = this.constructor.alloc(this.len), e = 0; t; )
    t.fn(t.val, i, e), e += t.len, t = t.next;
  return i;
};
M._configure = function(t) {
  Ti = t, M.create = Ss(), Ti._configure();
};
var yl = qe, Gs = Bs;
(qe.prototype = Object.create(Gs.prototype)).constructor = qe;
var dt = Et();
function qe() {
  Gs.call(this);
}
qe._configure = function() {
  qe.alloc = dt._Buffer_allocUnsafe, qe.writeBytesBuffer = dt.Buffer && dt.Buffer.prototype instanceof Uint8Array && dt.Buffer.prototype.set.name === "set" ? function(t, i, e) {
    i.set(t, e);
  } : function(t, i, e) {
    if (t.copy)
      t.copy(i, e, 0, t.length);
    else
      for (var n = 0; n < t.length; )
        i[e++] = t[n++];
  };
};
qe.prototype.bytes = function(t) {
  dt.isString(t) && (t = dt._Buffer_from(t, "base64"));
  var i = t.length >>> 0;
  return this.uint32(i), i && this._push(qe.writeBytesBuffer, i, t), this;
};
function vl(t, i, e) {
  t.length < 40 ? dt.utf8.write(t, i, e) : i.utf8Write ? i.utf8Write(t, e) : i.write(t, e);
}
qe.prototype.string = function(t) {
  var i = dt.Buffer.byteLength(t);
  return this.uint32(i), i && this._push(vl, i, t), this;
};
qe._configure();
var Zs = re, _e = Et(), Fi, ks = _e.LongBits, wl = _e.utf8;
function Xe(t, i) {
  return RangeError("index out of range: " + t.pos + " + " + (i || 1) + " > " + t.len);
}
function re(t) {
  this.buf = t, this.pos = 0, this.len = t.length;
}
var Fa = typeof Uint8Array < "u" ? function(t) {
  if (t instanceof Uint8Array || Array.isArray(t))
    return new re(t);
  throw Error("illegal buffer");
} : function(t) {
  if (Array.isArray(t))
    return new re(t);
  throw Error("illegal buffer");
}, Ks = function() {
  return _e.Buffer ? function(t) {
    return (re.create = function(i) {
      return _e.Buffer.isBuffer(i) ? new Fi(i) : Fa(i);
    })(t);
  } : Fa;
};
re.create = Ks();
re.prototype._slice = _e.Array.prototype.subarray || /* istanbul ignore next */
_e.Array.prototype.slice;
re.prototype.uint32 = /* @__PURE__ */ function() {
  var t = 4294967295;
  return function() {
    if (t = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (t = (t | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (t = (t | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (t = (t | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (t = (t | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return t;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, Xe(this, 10);
    return t;
  };
}();
re.prototype.int32 = function() {
  return this.uint32() | 0;
};
re.prototype.sint32 = function() {
  var t = this.uint32();
  return t >>> 1 ^ -(t & 1) | 0;
};
function li() {
  var t = new ks(0, 0), i = 0;
  if (this.len - this.pos > 4) {
    for (; i < 4; ++i)
      if (t.lo = (t.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0, this.buf[this.pos++] < 128)
        return t;
    if (t.lo = (t.lo | (this.buf[this.pos] & 127) << 28) >>> 0, t.hi = (t.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
      return t;
    i = 0;
  } else {
    for (; i < 3; ++i) {
      if (this.pos >= this.len)
        throw Xe(this);
      if (t.lo = (t.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0, this.buf[this.pos++] < 128)
        return t;
    }
    return t.lo = (t.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0, t;
  }
  if (this.len - this.pos > 4) {
    for (; i < 5; ++i)
      if (t.hi = (t.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return t;
  } else
    for (; i < 5; ++i) {
      if (this.pos >= this.len)
        throw Xe(this);
      if (t.hi = (t.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return t;
    }
  throw Error("invalid varint encoding");
}
re.prototype.bool = function() {
  return this.uint32() !== 0;
};
function vo(t, i) {
  return (t[i - 4] | t[i - 3] << 8 | t[i - 2] << 16 | t[i - 1] << 24) >>> 0;
}
re.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw Xe(this, 4);
  return vo(this.buf, this.pos += 4);
};
re.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw Xe(this, 4);
  return vo(this.buf, this.pos += 4) | 0;
};
function Xa() {
  if (this.pos + 8 > this.len)
    throw Xe(this, 8);
  return new ks(vo(this.buf, this.pos += 4), vo(this.buf, this.pos += 4));
}
re.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw Xe(this, 4);
  var t = _e.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, t;
};
re.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw Xe(this, 4);
  var t = _e.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, t;
};
re.prototype.bytes = function() {
  var t = this.uint32(), i = this.pos, e = this.pos + t;
  if (e > this.len)
    throw Xe(this, t);
  return this.pos += t, Array.isArray(this.buf) ? this.buf.slice(i, e) : i === e ? new this.buf.constructor(0) : this._slice.call(this.buf, i, e);
};
re.prototype.string = function() {
  var t = this.bytes();
  return wl.read(t, 0, t.length);
};
re.prototype.skip = function(t) {
  if (typeof t == "number") {
    if (this.pos + t > this.len)
      throw Xe(this, t);
    this.pos += t;
  } else
    do
      if (this.pos >= this.len)
        throw Xe(this);
    while (this.buf[this.pos++] & 128);
  return this;
};
re.prototype.skipType = function(t) {
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
re._configure = function(t) {
  Fi = t, re.create = Ks(), Fi._configure();
  var i = _e.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  _e.merge(re.prototype, {
    int64: function() {
      return li.call(this)[i](!1);
    },
    uint64: function() {
      return li.call(this)[i](!0);
    },
    sint64: function() {
      return li.call(this).zzDecode()[i](!1);
    },
    fixed64: function() {
      return Xa.call(this)[i](!0);
    },
    sfixed64: function() {
      return Xa.call(this)[i](!1);
    }
  });
};
var Bl = Rt, Hs = Zs;
(Rt.prototype = Object.create(Hs.prototype)).constructor = Rt;
var ja = Et();
function Rt(t) {
  Hs.call(this, t);
}
Rt._configure = function() {
  ja.Buffer && (Rt.prototype._slice = ja.Buffer.prototype.slice);
};
Rt.prototype.string = function() {
  var t = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + t, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + t, this.len));
};
Rt._configure();
var Os = {}, Sl = Hn, Cr = Et();
(Hn.prototype = Object.create(Cr.EventEmitter.prototype)).constructor = Hn;
function Hn(t, i, e) {
  if (typeof t != "function")
    throw TypeError("rpcImpl must be a function");
  Cr.EventEmitter.call(this), this.rpcImpl = t, this.requestDelimited = !!i, this.responseDelimited = !!e;
}
Hn.prototype.rpcCall = function t(i, e, n, o, r) {
  if (!o)
    throw TypeError("request must be specified");
  var a = this;
  if (!r)
    return Cr.asPromise(t, a, i, e, n, o);
  if (!a.rpcImpl) {
    setTimeout(function() {
      r(Error("already ended"));
    }, 0);
    return;
  }
  try {
    return a.rpcImpl(
      i,
      e[a.requestDelimited ? "encodeDelimited" : "encode"](o).finish(),
      function(g, s) {
        if (g)
          return a.emit("error", g, i), r(g);
        if (s === null) {
          a.end(
            /* endedByRPC */
            !0
          );
          return;
        }
        if (!(s instanceof n))
          try {
            s = n[a.responseDelimited ? "decodeDelimited" : "decode"](s);
          } catch (x) {
            return a.emit("error", x, i), r(x);
          }
        return a.emit("data", s, i), r(null, s);
      }
    );
  } catch (g) {
    a.emit("error", g, i), setTimeout(function() {
      r(g);
    }, 0);
    return;
  }
};
Hn.prototype.end = function(t) {
  return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(t) {
  var i = t;
  i.Service = Sl;
})(Os);
var Gl = {};
(function(t) {
  var i = t;
  i.build = "minimal", i.Writer = Bs, i.BufferWriter = yl, i.Reader = Zs, i.BufferReader = Bl, i.util = Et(), i.rpc = Os, i.roots = Gl, i.configure = e;
  function e() {
    i.util._configure(), i.Writer._configure(i.BufferWriter), i.Reader._configure(i.BufferReader);
  }
  e();
})(ys);
var oe = ys;
const w = oe.Reader, le = oe.Writer, f = oe.util, d = oe.roots.default || (oe.roots.default = {}), Vt = d.dot = (() => {
  const t = {};
  return t.Content = function() {
    function i(e) {
      if (e)
        for (let n = Object.keys(e), o = 0; o < n.length; ++o)
          e[n[o]] != null && (this[n[o]] = e[n[o]]);
    }
    return i.prototype.token = f.newBuffer([]), i.prototype.iv = f.newBuffer([]), i.prototype.schemaVersion = 0, i.prototype.bytes = f.newBuffer([]), i.create = function(e) {
      return new i(e);
    }, i.encode = function(e, n) {
      return n || (n = le.create()), e.token != null && Object.hasOwnProperty.call(e, "token") && n.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(e.token), e.iv != null && Object.hasOwnProperty.call(e, "iv") && n.uint32(
        /* id 2, wireType 2 =*/
        18
      ).bytes(e.iv), e.schemaVersion != null && Object.hasOwnProperty.call(e, "schemaVersion") && n.uint32(
        /* id 3, wireType 0 =*/
        24
      ).int32(e.schemaVersion), e.bytes != null && Object.hasOwnProperty.call(e, "bytes") && n.uint32(
        /* id 4, wireType 2 =*/
        34
      ).bytes(e.bytes), n;
    }, i.encodeDelimited = function(e, n) {
      return this.encode(e, n).ldelim();
    }, i.decode = function(e, n) {
      e instanceof w || (e = w.create(e));
      let o = n === void 0 ? e.len : e.pos + n, r = new d.dot.Content();
      for (; e.pos < o; ) {
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
    }, i.decodeDelimited = function(e) {
      return e instanceof w || (e = new w(e)), this.decode(e, e.uint32());
    }, i.verify = function(e) {
      return typeof e != "object" || e === null ? "object expected" : e.token != null && e.hasOwnProperty("token") && !(e.token && typeof e.token.length == "number" || f.isString(e.token)) ? "token: buffer expected" : e.iv != null && e.hasOwnProperty("iv") && !(e.iv && typeof e.iv.length == "number" || f.isString(e.iv)) ? "iv: buffer expected" : e.schemaVersion != null && e.hasOwnProperty("schemaVersion") && !f.isInteger(e.schemaVersion) ? "schemaVersion: integer expected" : e.bytes != null && e.hasOwnProperty("bytes") && !(e.bytes && typeof e.bytes.length == "number" || f.isString(e.bytes)) ? "bytes: buffer expected" : null;
    }, i.fromObject = function(e) {
      if (e instanceof d.dot.Content)
        return e;
      let n = new d.dot.Content();
      return e.token != null && (typeof e.token == "string" ? f.base64.decode(e.token, n.token = f.newBuffer(f.base64.length(e.token)), 0) : e.token.length >= 0 && (n.token = e.token)), e.iv != null && (typeof e.iv == "string" ? f.base64.decode(e.iv, n.iv = f.newBuffer(f.base64.length(e.iv)), 0) : e.iv.length >= 0 && (n.iv = e.iv)), e.schemaVersion != null && (n.schemaVersion = e.schemaVersion | 0), e.bytes != null && (typeof e.bytes == "string" ? f.base64.decode(e.bytes, n.bytes = f.newBuffer(f.base64.length(e.bytes)), 0) : e.bytes.length >= 0 && (n.bytes = e.bytes)), n;
    }, i.toObject = function(e, n) {
      n || (n = {});
      let o = {};
      return n.defaults && (n.bytes === String ? o.token = "" : (o.token = [], n.bytes !== Array && (o.token = f.newBuffer(o.token))), n.bytes === String ? o.iv = "" : (o.iv = [], n.bytes !== Array && (o.iv = f.newBuffer(o.iv))), o.schemaVersion = 0, n.bytes === String ? o.bytes = "" : (o.bytes = [], n.bytes !== Array && (o.bytes = f.newBuffer(o.bytes)))), e.token != null && e.hasOwnProperty("token") && (o.token = n.bytes === String ? f.base64.encode(e.token, 0, e.token.length) : n.bytes === Array ? Array.prototype.slice.call(e.token) : e.token), e.iv != null && e.hasOwnProperty("iv") && (o.iv = n.bytes === String ? f.base64.encode(e.iv, 0, e.iv.length) : n.bytes === Array ? Array.prototype.slice.call(e.iv) : e.iv), e.schemaVersion != null && e.hasOwnProperty("schemaVersion") && (o.schemaVersion = e.schemaVersion), e.bytes != null && e.hasOwnProperty("bytes") && (o.bytes = n.bytes === String ? f.base64.encode(e.bytes, 0, e.bytes.length) : n.bytes === Array ? Array.prototype.slice.call(e.bytes) : e.bytes), o;
    }, i.prototype.toJSON = function() {
      return this.constructor.toObject(this, oe.util.toJSONOptions);
    }, i.getTypeUrl = function(e) {
      return e === void 0 && (e = "type.googleapis.com"), e + "/dot.Content";
    }, i;
  }(), t.v3 = function() {
    const i = {};
    return i.MagnifEyeLivenessContent = function() {
      function e(n) {
        if (this.images = [], n)
          for (let o = Object.keys(n), r = 0; r < o.length; ++r)
            n[o[r]] != null && (this[o[r]] = n[o[r]]);
      }
      return e.prototype.images = f.emptyArray, e.prototype.metadata = null, e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, o) {
        if (o || (o = le.create()), n.images != null && n.images.length)
          for (let r = 0; r < n.images.length; ++r)
            d.dot.Image.encode(n.images[r], o.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return n.metadata != null && Object.hasOwnProperty.call(n, "metadata") && d.dot.v3.Metadata.encode(n.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), o;
      }, e.encodeDelimited = function(n, o) {
        return this.encode(n, o).ldelim();
      }, e.decode = function(n, o) {
        n instanceof w || (n = w.create(n));
        let r = o === void 0 ? n.len : n.pos + o, a = new d.dot.v3.MagnifEyeLivenessContent();
        for (; n.pos < r; ) {
          let g = n.uint32();
          switch (g >>> 3) {
            case 1: {
              a.images && a.images.length || (a.images = []), a.images.push(d.dot.Image.decode(n, n.uint32()));
              break;
            }
            case 2: {
              a.metadata = d.dot.v3.Metadata.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(g & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(n) {
        return n instanceof w || (n = new w(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.images != null && n.hasOwnProperty("images")) {
          if (!Array.isArray(n.images))
            return "images: array expected";
          for (let o = 0; o < n.images.length; ++o) {
            let r = d.dot.Image.verify(n.images[o]);
            if (r)
              return "images." + r;
          }
        }
        if (n.metadata != null && n.hasOwnProperty("metadata")) {
          let o = d.dot.v3.Metadata.verify(n.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.MagnifEyeLivenessContent)
          return n;
        let o = new d.dot.v3.MagnifEyeLivenessContent();
        if (n.images) {
          if (!Array.isArray(n.images))
            throw TypeError(".dot.v3.MagnifEyeLivenessContent.images: array expected");
          o.images = [];
          for (let r = 0; r < n.images.length; ++r) {
            if (typeof n.images[r] != "object")
              throw TypeError(".dot.v3.MagnifEyeLivenessContent.images: object expected");
            o.images[r] = d.dot.Image.fromObject(n.images[r]);
          }
        }
        if (n.metadata != null) {
          if (typeof n.metadata != "object")
            throw TypeError(".dot.v3.MagnifEyeLivenessContent.metadata: object expected");
          o.metadata = d.dot.v3.Metadata.fromObject(n.metadata);
        }
        return o;
      }, e.toObject = function(n, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.images = []), o.defaults && (r.metadata = null), n.images && n.images.length) {
          r.images = [];
          for (let a = 0; a < n.images.length; ++a)
            r.images[a] = d.dot.Image.toObject(n.images[a], o);
        }
        return n.metadata != null && n.hasOwnProperty("metadata") && (r.metadata = d.dot.v3.Metadata.toObject(n.metadata, o)), r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, oe.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.MagnifEyeLivenessContent";
      }, e;
    }(), i.Metadata = function() {
      function e(o) {
        if (o)
          for (let r = Object.keys(o), a = 0; a < r.length; ++a)
            o[r[a]] != null && (this[r[a]] = o[r[a]]);
      }
      e.prototype.platform = 0, e.prototype.sessionToken = null, e.prototype.web = null, e.prototype.android = null, e.prototype.ios = null;
      let n;
      return Object.defineProperty(e.prototype, "_sessionToken", {
        get: f.oneOfGetter(n = ["sessionToken"]),
        set: f.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "metadata", {
        get: f.oneOfGetter(n = ["web", "android", "ios"]),
        set: f.oneOfSetter(n)
      }), e.create = function(o) {
        return new e(o);
      }, e.encode = function(o, r) {
        return r || (r = le.create()), o.platform != null && Object.hasOwnProperty.call(o, "platform") && r.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(o.platform), o.web != null && Object.hasOwnProperty.call(o, "web") && d.dot.v3.WebMetadata.encode(o.web, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), o.android != null && Object.hasOwnProperty.call(o, "android") && d.dot.v3.AndroidMetadata.encode(o.android, r.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o.ios != null && Object.hasOwnProperty.call(o, "ios") && d.dot.v3.IosMetadata.encode(o.ios, r.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), o.sessionToken != null && Object.hasOwnProperty.call(o, "sessionToken") && r.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(o.sessionToken), r;
      }, e.encodeDelimited = function(o, r) {
        return this.encode(o, r).ldelim();
      }, e.decode = function(o, r) {
        o instanceof w || (o = w.create(o));
        let a = r === void 0 ? o.len : o.pos + r, g = new d.dot.v3.Metadata();
        for (; o.pos < a; ) {
          let s = o.uint32();
          switch (s >>> 3) {
            case 1: {
              g.platform = o.int32();
              break;
            }
            case 5: {
              g.sessionToken = o.string();
              break;
            }
            case 2: {
              g.web = d.dot.v3.WebMetadata.decode(o, o.uint32());
              break;
            }
            case 3: {
              g.android = d.dot.v3.AndroidMetadata.decode(o, o.uint32());
              break;
            }
            case 4: {
              g.ios = d.dot.v3.IosMetadata.decode(o, o.uint32());
              break;
            }
            default:
              o.skipType(s & 7);
              break;
          }
        }
        return g;
      }, e.decodeDelimited = function(o) {
        return o instanceof w || (o = new w(o)), this.decode(o, o.uint32());
      }, e.verify = function(o) {
        if (typeof o != "object" || o === null)
          return "object expected";
        let r = {};
        if (o.platform != null && o.hasOwnProperty("platform"))
          switch (o.platform) {
            default:
              return "platform: enum value expected";
            case 0:
            case 1:
            case 2:
              break;
          }
        if (o.sessionToken != null && o.hasOwnProperty("sessionToken") && (r._sessionToken = 1, !f.isString(o.sessionToken)))
          return "sessionToken: string expected";
        if (o.web != null && o.hasOwnProperty("web")) {
          r.metadata = 1;
          {
            let a = d.dot.v3.WebMetadata.verify(o.web);
            if (a)
              return "web." + a;
          }
        }
        if (o.android != null && o.hasOwnProperty("android")) {
          if (r.metadata === 1)
            return "metadata: multiple values";
          r.metadata = 1;
          {
            let a = d.dot.v3.AndroidMetadata.verify(o.android);
            if (a)
              return "android." + a;
          }
        }
        if (o.ios != null && o.hasOwnProperty("ios")) {
          if (r.metadata === 1)
            return "metadata: multiple values";
          r.metadata = 1;
          {
            let a = d.dot.v3.IosMetadata.verify(o.ios);
            if (a)
              return "ios." + a;
          }
        }
        return null;
      }, e.fromObject = function(o) {
        if (o instanceof d.dot.v3.Metadata)
          return o;
        let r = new d.dot.v3.Metadata();
        switch (o.platform) {
          default:
            if (typeof o.platform == "number") {
              r.platform = o.platform;
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
        if (o.sessionToken != null && (r.sessionToken = String(o.sessionToken)), o.web != null) {
          if (typeof o.web != "object")
            throw TypeError(".dot.v3.Metadata.web: object expected");
          r.web = d.dot.v3.WebMetadata.fromObject(o.web);
        }
        if (o.android != null) {
          if (typeof o.android != "object")
            throw TypeError(".dot.v3.Metadata.android: object expected");
          r.android = d.dot.v3.AndroidMetadata.fromObject(o.android);
        }
        if (o.ios != null) {
          if (typeof o.ios != "object")
            throw TypeError(".dot.v3.Metadata.ios: object expected");
          r.ios = d.dot.v3.IosMetadata.fromObject(o.ios);
        }
        return r;
      }, e.toObject = function(o, r) {
        r || (r = {});
        let a = {};
        return r.defaults && (a.platform = r.enums === String ? "WEB" : 0), o.platform != null && o.hasOwnProperty("platform") && (a.platform = r.enums === String ? d.dot.Platform[o.platform] === void 0 ? o.platform : d.dot.Platform[o.platform] : o.platform), o.web != null && o.hasOwnProperty("web") && (a.web = d.dot.v3.WebMetadata.toObject(o.web, r), r.oneofs && (a.metadata = "web")), o.android != null && o.hasOwnProperty("android") && (a.android = d.dot.v3.AndroidMetadata.toObject(o.android, r), r.oneofs && (a.metadata = "android")), o.ios != null && o.hasOwnProperty("ios") && (a.ios = d.dot.v3.IosMetadata.toObject(o.ios, r), r.oneofs && (a.metadata = "ios")), o.sessionToken != null && o.hasOwnProperty("sessionToken") && (a.sessionToken = o.sessionToken, r.oneofs && (a._sessionToken = "sessionToken")), a;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, oe.util.toJSONOptions);
      }, e.getTypeUrl = function(o) {
        return o === void 0 && (o = "type.googleapis.com"), o + "/dot.v3.Metadata";
      }, e;
    }(), i.AndroidMetadata = function() {
      function e(o) {
        if (this.supportedAbis = [], this.digests = [], this.dynamicCameraFrameProperties = {}, o)
          for (let r = Object.keys(o), a = 0; a < r.length; ++a)
            o[r[a]] != null && (this[r[a]] = o[r[a]]);
      }
      e.prototype.supportedAbis = f.emptyArray, e.prototype.device = null, e.prototype.digests = f.emptyArray, e.prototype.dynamicCameraFrameProperties = f.emptyObject;
      let n;
      return Object.defineProperty(e.prototype, "_device", {
        get: f.oneOfGetter(n = ["device"]),
        set: f.oneOfSetter(n)
      }), e.create = function(o) {
        return new e(o);
      }, e.encode = function(o, r) {
        if (r || (r = le.create()), o.supportedAbis != null && o.supportedAbis.length)
          for (let a = 0; a < o.supportedAbis.length; ++a)
            r.uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(o.supportedAbis[a]);
        if (o.device != null && Object.hasOwnProperty.call(o, "device") && r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(o.device), o.digests != null && o.digests.length)
          for (let a = 0; a < o.digests.length; ++a)
            r.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(o.digests[a]);
        if (o.dynamicCameraFrameProperties != null && Object.hasOwnProperty.call(o, "dynamicCameraFrameProperties"))
          for (let a = Object.keys(o.dynamicCameraFrameProperties), g = 0; g < a.length; ++g)
            r.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(a[g]), d.dot.Int32List.encode(o.dynamicCameraFrameProperties[a[g]], r.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        return r;
      }, e.encodeDelimited = function(o, r) {
        return this.encode(o, r).ldelim();
      }, e.decode = function(o, r) {
        o instanceof w || (o = w.create(o));
        let a = r === void 0 ? o.len : o.pos + r, g = new d.dot.v3.AndroidMetadata(), s, x;
        for (; o.pos < a; ) {
          let C = o.uint32();
          switch (C >>> 3) {
            case 1: {
              g.supportedAbis && g.supportedAbis.length || (g.supportedAbis = []), g.supportedAbis.push(o.string());
              break;
            }
            case 2: {
              g.device = o.string();
              break;
            }
            case 3: {
              g.digests && g.digests.length || (g.digests = []), g.digests.push(o.bytes());
              break;
            }
            case 4: {
              g.dynamicCameraFrameProperties === f.emptyObject && (g.dynamicCameraFrameProperties = {});
              let u = o.uint32() + o.pos;
              for (s = "", x = null; o.pos < u; ) {
                let h = o.uint32();
                switch (h >>> 3) {
                  case 1:
                    s = o.string();
                    break;
                  case 2:
                    x = d.dot.Int32List.decode(o, o.uint32());
                    break;
                  default:
                    o.skipType(h & 7);
                    break;
                }
              }
              g.dynamicCameraFrameProperties[s] = x;
              break;
            }
            default:
              o.skipType(C & 7);
              break;
          }
        }
        return g;
      }, e.decodeDelimited = function(o) {
        return o instanceof w || (o = new w(o)), this.decode(o, o.uint32());
      }, e.verify = function(o) {
        if (typeof o != "object" || o === null)
          return "object expected";
        if (o.supportedAbis != null && o.hasOwnProperty("supportedAbis")) {
          if (!Array.isArray(o.supportedAbis))
            return "supportedAbis: array expected";
          for (let r = 0; r < o.supportedAbis.length; ++r)
            if (!f.isString(o.supportedAbis[r]))
              return "supportedAbis: string[] expected";
        }
        if (o.device != null && o.hasOwnProperty("device") && !f.isString(o.device))
          return "device: string expected";
        if (o.digests != null && o.hasOwnProperty("digests")) {
          if (!Array.isArray(o.digests))
            return "digests: array expected";
          for (let r = 0; r < o.digests.length; ++r)
            if (!(o.digests[r] && typeof o.digests[r].length == "number" || f.isString(o.digests[r])))
              return "digests: buffer[] expected";
        }
        if (o.dynamicCameraFrameProperties != null && o.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!f.isObject(o.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let r = Object.keys(o.dynamicCameraFrameProperties);
          for (let a = 0; a < r.length; ++a) {
            let g = d.dot.Int32List.verify(o.dynamicCameraFrameProperties[r[a]]);
            if (g)
              return "dynamicCameraFrameProperties." + g;
          }
        }
        return null;
      }, e.fromObject = function(o) {
        if (o instanceof d.dot.v3.AndroidMetadata)
          return o;
        let r = new d.dot.v3.AndroidMetadata();
        if (o.supportedAbis) {
          if (!Array.isArray(o.supportedAbis))
            throw TypeError(".dot.v3.AndroidMetadata.supportedAbis: array expected");
          r.supportedAbis = [];
          for (let a = 0; a < o.supportedAbis.length; ++a)
            r.supportedAbis[a] = String(o.supportedAbis[a]);
        }
        if (o.device != null && (r.device = String(o.device)), o.digests) {
          if (!Array.isArray(o.digests))
            throw TypeError(".dot.v3.AndroidMetadata.digests: array expected");
          r.digests = [];
          for (let a = 0; a < o.digests.length; ++a)
            typeof o.digests[a] == "string" ? f.base64.decode(o.digests[a], r.digests[a] = f.newBuffer(f.base64.length(o.digests[a])), 0) : o.digests[a].length >= 0 && (r.digests[a] = o.digests[a]);
        }
        if (o.dynamicCameraFrameProperties) {
          if (typeof o.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v3.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          r.dynamicCameraFrameProperties = {};
          for (let a = Object.keys(o.dynamicCameraFrameProperties), g = 0; g < a.length; ++g) {
            if (typeof o.dynamicCameraFrameProperties[a[g]] != "object")
              throw TypeError(".dot.v3.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            r.dynamicCameraFrameProperties[a[g]] = d.dot.Int32List.fromObject(o.dynamicCameraFrameProperties[a[g]]);
          }
        }
        return r;
      }, e.toObject = function(o, r) {
        r || (r = {});
        let a = {};
        if ((r.arrays || r.defaults) && (a.supportedAbis = [], a.digests = []), (r.objects || r.defaults) && (a.dynamicCameraFrameProperties = {}), o.supportedAbis && o.supportedAbis.length) {
          a.supportedAbis = [];
          for (let s = 0; s < o.supportedAbis.length; ++s)
            a.supportedAbis[s] = o.supportedAbis[s];
        }
        if (o.device != null && o.hasOwnProperty("device") && (a.device = o.device, r.oneofs && (a._device = "device")), o.digests && o.digests.length) {
          a.digests = [];
          for (let s = 0; s < o.digests.length; ++s)
            a.digests[s] = r.bytes === String ? f.base64.encode(o.digests[s], 0, o.digests[s].length) : r.bytes === Array ? Array.prototype.slice.call(o.digests[s]) : o.digests[s];
        }
        let g;
        if (o.dynamicCameraFrameProperties && (g = Object.keys(o.dynamicCameraFrameProperties)).length) {
          a.dynamicCameraFrameProperties = {};
          for (let s = 0; s < g.length; ++s)
            a.dynamicCameraFrameProperties[g[s]] = d.dot.Int32List.toObject(o.dynamicCameraFrameProperties[g[s]], r);
        }
        return a;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, oe.util.toJSONOptions);
      }, e.getTypeUrl = function(o) {
        return o === void 0 && (o = "type.googleapis.com"), o + "/dot.v3.AndroidMetadata";
      }, e;
    }(), i.IosMetadata = function() {
      function e(n) {
        if (this.digests = [], this.isoValues = [], n)
          for (let o = Object.keys(n), r = 0; r < o.length; ++r)
            n[o[r]] != null && (this[o[r]] = n[o[r]]);
      }
      return e.prototype.device = f.newBuffer([]), e.prototype.architecture = !1, e.prototype.digests = f.emptyArray, e.prototype.isoValues = f.emptyArray, e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, o) {
        if (o || (o = le.create()), n.device != null && Object.hasOwnProperty.call(n, "device") && o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).bytes(n.device), n.architecture != null && Object.hasOwnProperty.call(n, "architecture") && o.uint32(
          /* id 2, wireType 0 =*/
          16
        ).bool(n.architecture), n.digests != null && n.digests.length)
          for (let r = 0; r < n.digests.length; ++r)
            o.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(n.digests[r]);
        if (n.isoValues != null && n.isoValues.length) {
          o.uint32(
            /* id 4, wireType 2 =*/
            34
          ).fork();
          for (let r = 0; r < n.isoValues.length; ++r)
            o.int32(n.isoValues[r]);
          o.ldelim();
        }
        return o;
      }, e.encodeDelimited = function(n, o) {
        return this.encode(n, o).ldelim();
      }, e.decode = function(n, o) {
        n instanceof w || (n = w.create(n));
        let r = o === void 0 ? n.len : n.pos + o, a = new d.dot.v3.IosMetadata();
        for (; n.pos < r; ) {
          let g = n.uint32();
          switch (g >>> 3) {
            case 1: {
              a.device = n.bytes();
              break;
            }
            case 2: {
              a.architecture = n.bool();
              break;
            }
            case 3: {
              a.digests && a.digests.length || (a.digests = []), a.digests.push(n.bytes());
              break;
            }
            case 4: {
              if (a.isoValues && a.isoValues.length || (a.isoValues = []), (g & 7) === 2) {
                let s = n.uint32() + n.pos;
                for (; n.pos < s; )
                  a.isoValues.push(n.int32());
              } else
                a.isoValues.push(n.int32());
              break;
            }
            default:
              n.skipType(g & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(n) {
        return n instanceof w || (n = new w(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.device != null && n.hasOwnProperty("device") && !(n.device && typeof n.device.length == "number" || f.isString(n.device)))
          return "device: buffer expected";
        if (n.architecture != null && n.hasOwnProperty("architecture") && typeof n.architecture != "boolean")
          return "architecture: boolean expected";
        if (n.digests != null && n.hasOwnProperty("digests")) {
          if (!Array.isArray(n.digests))
            return "digests: array expected";
          for (let o = 0; o < n.digests.length; ++o)
            if (!(n.digests[o] && typeof n.digests[o].length == "number" || f.isString(n.digests[o])))
              return "digests: buffer[] expected";
        }
        if (n.isoValues != null && n.hasOwnProperty("isoValues")) {
          if (!Array.isArray(n.isoValues))
            return "isoValues: array expected";
          for (let o = 0; o < n.isoValues.length; ++o)
            if (!f.isInteger(n.isoValues[o]))
              return "isoValues: integer[] expected";
        }
        return null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.IosMetadata)
          return n;
        let o = new d.dot.v3.IosMetadata();
        if (n.device != null && (typeof n.device == "string" ? f.base64.decode(n.device, o.device = f.newBuffer(f.base64.length(n.device)), 0) : n.device.length >= 0 && (o.device = n.device)), n.architecture != null && (o.architecture = !!n.architecture), n.digests) {
          if (!Array.isArray(n.digests))
            throw TypeError(".dot.v3.IosMetadata.digests: array expected");
          o.digests = [];
          for (let r = 0; r < n.digests.length; ++r)
            typeof n.digests[r] == "string" ? f.base64.decode(n.digests[r], o.digests[r] = f.newBuffer(f.base64.length(n.digests[r])), 0) : n.digests[r].length >= 0 && (o.digests[r] = n.digests[r]);
        }
        if (n.isoValues) {
          if (!Array.isArray(n.isoValues))
            throw TypeError(".dot.v3.IosMetadata.isoValues: array expected");
          o.isoValues = [];
          for (let r = 0; r < n.isoValues.length; ++r)
            o.isoValues[r] = n.isoValues[r] | 0;
        }
        return o;
      }, e.toObject = function(n, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.digests = [], r.isoValues = []), o.defaults && (o.bytes === String ? r.device = "" : (r.device = [], o.bytes !== Array && (r.device = f.newBuffer(r.device))), r.architecture = !1), n.device != null && n.hasOwnProperty("device") && (r.device = o.bytes === String ? f.base64.encode(n.device, 0, n.device.length) : o.bytes === Array ? Array.prototype.slice.call(n.device) : n.device), n.architecture != null && n.hasOwnProperty("architecture") && (r.architecture = n.architecture), n.digests && n.digests.length) {
          r.digests = [];
          for (let a = 0; a < n.digests.length; ++a)
            r.digests[a] = o.bytes === String ? f.base64.encode(n.digests[a], 0, n.digests[a].length) : o.bytes === Array ? Array.prototype.slice.call(n.digests[a]) : n.digests[a];
        }
        if (n.isoValues && n.isoValues.length) {
          r.isoValues = [];
          for (let a = 0; a < n.isoValues.length; ++a)
            r.isoValues[a] = n.isoValues[a];
        }
        return r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, oe.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.IosMetadata";
      }, e;
    }(), i.WebMetadata = function() {
      function e(n) {
        if (this.availableCameraProperties = [], this.hashedDetectedImages = [], this.detectionRecord = [], n)
          for (let o = Object.keys(n), r = 0; r < o.length; ++r)
            n[o[r]] != null && (this[o[r]] = n[o[r]]);
      }
      return e.prototype.currentCameraProperties = null, e.prototype.availableCameraProperties = f.emptyArray, e.prototype.hashedDetectedImages = f.emptyArray, e.prototype.detectionRecord = f.emptyArray, e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, o) {
        if (o || (o = le.create()), n.currentCameraProperties != null && Object.hasOwnProperty.call(n, "currentCameraProperties") && d.dot.v3.MediaTrackSettings.encode(n.currentCameraProperties, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.availableCameraProperties != null && n.availableCameraProperties.length)
          for (let r = 0; r < n.availableCameraProperties.length; ++r)
            d.dot.v3.CameraProperties.encode(n.availableCameraProperties[r], o.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim();
        if (n.hashedDetectedImages != null && n.hashedDetectedImages.length)
          for (let r = 0; r < n.hashedDetectedImages.length; ++r)
            o.uint32(
              /* id 3, wireType 2 =*/
              26
            ).string(n.hashedDetectedImages[r]);
        if (n.detectionRecord != null && n.detectionRecord.length)
          for (let r = 0; r < n.detectionRecord.length; ++r)
            d.dot.v3.DetectedObject.encode(n.detectionRecord[r], o.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        return o;
      }, e.encodeDelimited = function(n, o) {
        return this.encode(n, o).ldelim();
      }, e.decode = function(n, o) {
        n instanceof w || (n = w.create(n));
        let r = o === void 0 ? n.len : n.pos + o, a = new d.dot.v3.WebMetadata();
        for (; n.pos < r; ) {
          let g = n.uint32();
          switch (g >>> 3) {
            case 1: {
              a.currentCameraProperties = d.dot.v3.MediaTrackSettings.decode(n, n.uint32());
              break;
            }
            case 2: {
              a.availableCameraProperties && a.availableCameraProperties.length || (a.availableCameraProperties = []), a.availableCameraProperties.push(d.dot.v3.CameraProperties.decode(n, n.uint32()));
              break;
            }
            case 3: {
              a.hashedDetectedImages && a.hashedDetectedImages.length || (a.hashedDetectedImages = []), a.hashedDetectedImages.push(n.string());
              break;
            }
            case 4: {
              a.detectionRecord && a.detectionRecord.length || (a.detectionRecord = []), a.detectionRecord.push(d.dot.v3.DetectedObject.decode(n, n.uint32()));
              break;
            }
            default:
              n.skipType(g & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(n) {
        return n instanceof w || (n = new w(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.currentCameraProperties != null && n.hasOwnProperty("currentCameraProperties")) {
          let o = d.dot.v3.MediaTrackSettings.verify(n.currentCameraProperties);
          if (o)
            return "currentCameraProperties." + o;
        }
        if (n.availableCameraProperties != null && n.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(n.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let o = 0; o < n.availableCameraProperties.length; ++o) {
            let r = d.dot.v3.CameraProperties.verify(n.availableCameraProperties[o]);
            if (r)
              return "availableCameraProperties." + r;
          }
        }
        if (n.hashedDetectedImages != null && n.hasOwnProperty("hashedDetectedImages")) {
          if (!Array.isArray(n.hashedDetectedImages))
            return "hashedDetectedImages: array expected";
          for (let o = 0; o < n.hashedDetectedImages.length; ++o)
            if (!f.isString(n.hashedDetectedImages[o]))
              return "hashedDetectedImages: string[] expected";
        }
        if (n.detectionRecord != null && n.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(n.detectionRecord))
            return "detectionRecord: array expected";
          for (let o = 0; o < n.detectionRecord.length; ++o) {
            let r = d.dot.v3.DetectedObject.verify(n.detectionRecord[o]);
            if (r)
              return "detectionRecord." + r;
          }
        }
        return null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.WebMetadata)
          return n;
        let o = new d.dot.v3.WebMetadata();
        if (n.currentCameraProperties != null) {
          if (typeof n.currentCameraProperties != "object")
            throw TypeError(".dot.v3.WebMetadata.currentCameraProperties: object expected");
          o.currentCameraProperties = d.dot.v3.MediaTrackSettings.fromObject(n.currentCameraProperties);
        }
        if (n.availableCameraProperties) {
          if (!Array.isArray(n.availableCameraProperties))
            throw TypeError(".dot.v3.WebMetadata.availableCameraProperties: array expected");
          o.availableCameraProperties = [];
          for (let r = 0; r < n.availableCameraProperties.length; ++r) {
            if (typeof n.availableCameraProperties[r] != "object")
              throw TypeError(".dot.v3.WebMetadata.availableCameraProperties: object expected");
            o.availableCameraProperties[r] = d.dot.v3.CameraProperties.fromObject(n.availableCameraProperties[r]);
          }
        }
        if (n.hashedDetectedImages) {
          if (!Array.isArray(n.hashedDetectedImages))
            throw TypeError(".dot.v3.WebMetadata.hashedDetectedImages: array expected");
          o.hashedDetectedImages = [];
          for (let r = 0; r < n.hashedDetectedImages.length; ++r)
            o.hashedDetectedImages[r] = String(n.hashedDetectedImages[r]);
        }
        if (n.detectionRecord) {
          if (!Array.isArray(n.detectionRecord))
            throw TypeError(".dot.v3.WebMetadata.detectionRecord: array expected");
          o.detectionRecord = [];
          for (let r = 0; r < n.detectionRecord.length; ++r) {
            if (typeof n.detectionRecord[r] != "object")
              throw TypeError(".dot.v3.WebMetadata.detectionRecord: object expected");
            o.detectionRecord[r] = d.dot.v3.DetectedObject.fromObject(n.detectionRecord[r]);
          }
        }
        return o;
      }, e.toObject = function(n, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.availableCameraProperties = [], r.hashedDetectedImages = [], r.detectionRecord = []), o.defaults && (r.currentCameraProperties = null), n.currentCameraProperties != null && n.hasOwnProperty("currentCameraProperties") && (r.currentCameraProperties = d.dot.v3.MediaTrackSettings.toObject(n.currentCameraProperties, o)), n.availableCameraProperties && n.availableCameraProperties.length) {
          r.availableCameraProperties = [];
          for (let a = 0; a < n.availableCameraProperties.length; ++a)
            r.availableCameraProperties[a] = d.dot.v3.CameraProperties.toObject(n.availableCameraProperties[a], o);
        }
        if (n.hashedDetectedImages && n.hashedDetectedImages.length) {
          r.hashedDetectedImages = [];
          for (let a = 0; a < n.hashedDetectedImages.length; ++a)
            r.hashedDetectedImages[a] = n.hashedDetectedImages[a];
        }
        if (n.detectionRecord && n.detectionRecord.length) {
          r.detectionRecord = [];
          for (let a = 0; a < n.detectionRecord.length; ++a)
            r.detectionRecord[a] = d.dot.v3.DetectedObject.toObject(n.detectionRecord[a], o);
        }
        return r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, oe.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.WebMetadata";
      }, e;
    }(), i.MediaTrackSettings = function() {
      function e(o) {
        if (o)
          for (let r = Object.keys(o), a = 0; a < r.length; ++a)
            o[r[a]] != null && (this[r[a]] = o[r[a]]);
      }
      e.prototype.aspectRatio = null, e.prototype.autoGainControl = null, e.prototype.channelCount = null, e.prototype.deviceId = null, e.prototype.displaySurface = null, e.prototype.echoCancellation = null, e.prototype.facingMode = null, e.prototype.frameRate = null, e.prototype.groupId = null, e.prototype.height = null, e.prototype.noiseSuppression = null, e.prototype.sampleRate = null, e.prototype.sampleSize = null, e.prototype.width = null, e.prototype.deviceName = null;
      let n;
      return Object.defineProperty(e.prototype, "_aspectRatio", {
        get: f.oneOfGetter(n = ["aspectRatio"]),
        set: f.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_autoGainControl", {
        get: f.oneOfGetter(n = ["autoGainControl"]),
        set: f.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_channelCount", {
        get: f.oneOfGetter(n = ["channelCount"]),
        set: f.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_deviceId", {
        get: f.oneOfGetter(n = ["deviceId"]),
        set: f.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_displaySurface", {
        get: f.oneOfGetter(n = ["displaySurface"]),
        set: f.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_echoCancellation", {
        get: f.oneOfGetter(n = ["echoCancellation"]),
        set: f.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_facingMode", {
        get: f.oneOfGetter(n = ["facingMode"]),
        set: f.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_frameRate", {
        get: f.oneOfGetter(n = ["frameRate"]),
        set: f.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_groupId", {
        get: f.oneOfGetter(n = ["groupId"]),
        set: f.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_height", {
        get: f.oneOfGetter(n = ["height"]),
        set: f.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_noiseSuppression", {
        get: f.oneOfGetter(n = ["noiseSuppression"]),
        set: f.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_sampleRate", {
        get: f.oneOfGetter(n = ["sampleRate"]),
        set: f.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_sampleSize", {
        get: f.oneOfGetter(n = ["sampleSize"]),
        set: f.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_width", {
        get: f.oneOfGetter(n = ["width"]),
        set: f.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_deviceName", {
        get: f.oneOfGetter(n = ["deviceName"]),
        set: f.oneOfSetter(n)
      }), e.create = function(o) {
        return new e(o);
      }, e.encode = function(o, r) {
        return r || (r = le.create()), o.aspectRatio != null && Object.hasOwnProperty.call(o, "aspectRatio") && r.uint32(
          /* id 1, wireType 1 =*/
          9
        ).double(o.aspectRatio), o.autoGainControl != null && Object.hasOwnProperty.call(o, "autoGainControl") && r.uint32(
          /* id 2, wireType 0 =*/
          16
        ).bool(o.autoGainControl), o.channelCount != null && Object.hasOwnProperty.call(o, "channelCount") && r.uint32(
          /* id 3, wireType 0 =*/
          24
        ).int32(o.channelCount), o.deviceId != null && Object.hasOwnProperty.call(o, "deviceId") && r.uint32(
          /* id 4, wireType 2 =*/
          34
        ).string(o.deviceId), o.displaySurface != null && Object.hasOwnProperty.call(o, "displaySurface") && r.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(o.displaySurface), o.echoCancellation != null && Object.hasOwnProperty.call(o, "echoCancellation") && r.uint32(
          /* id 6, wireType 0 =*/
          48
        ).bool(o.echoCancellation), o.facingMode != null && Object.hasOwnProperty.call(o, "facingMode") && r.uint32(
          /* id 7, wireType 2 =*/
          58
        ).string(o.facingMode), o.frameRate != null && Object.hasOwnProperty.call(o, "frameRate") && r.uint32(
          /* id 8, wireType 1 =*/
          65
        ).double(o.frameRate), o.groupId != null && Object.hasOwnProperty.call(o, "groupId") && r.uint32(
          /* id 9, wireType 2 =*/
          74
        ).string(o.groupId), o.height != null && Object.hasOwnProperty.call(o, "height") && r.uint32(
          /* id 10, wireType 0 =*/
          80
        ).int32(o.height), o.noiseSuppression != null && Object.hasOwnProperty.call(o, "noiseSuppression") && r.uint32(
          /* id 11, wireType 0 =*/
          88
        ).bool(o.noiseSuppression), o.sampleRate != null && Object.hasOwnProperty.call(o, "sampleRate") && r.uint32(
          /* id 12, wireType 0 =*/
          96
        ).int32(o.sampleRate), o.sampleSize != null && Object.hasOwnProperty.call(o, "sampleSize") && r.uint32(
          /* id 13, wireType 0 =*/
          104
        ).int32(o.sampleSize), o.width != null && Object.hasOwnProperty.call(o, "width") && r.uint32(
          /* id 14, wireType 0 =*/
          112
        ).int32(o.width), o.deviceName != null && Object.hasOwnProperty.call(o, "deviceName") && r.uint32(
          /* id 15, wireType 2 =*/
          122
        ).string(o.deviceName), r;
      }, e.encodeDelimited = function(o, r) {
        return this.encode(o, r).ldelim();
      }, e.decode = function(o, r) {
        o instanceof w || (o = w.create(o));
        let a = r === void 0 ? o.len : o.pos + r, g = new d.dot.v3.MediaTrackSettings();
        for (; o.pos < a; ) {
          let s = o.uint32();
          switch (s >>> 3) {
            case 1: {
              g.aspectRatio = o.double();
              break;
            }
            case 2: {
              g.autoGainControl = o.bool();
              break;
            }
            case 3: {
              g.channelCount = o.int32();
              break;
            }
            case 4: {
              g.deviceId = o.string();
              break;
            }
            case 5: {
              g.displaySurface = o.string();
              break;
            }
            case 6: {
              g.echoCancellation = o.bool();
              break;
            }
            case 7: {
              g.facingMode = o.string();
              break;
            }
            case 8: {
              g.frameRate = o.double();
              break;
            }
            case 9: {
              g.groupId = o.string();
              break;
            }
            case 10: {
              g.height = o.int32();
              break;
            }
            case 11: {
              g.noiseSuppression = o.bool();
              break;
            }
            case 12: {
              g.sampleRate = o.int32();
              break;
            }
            case 13: {
              g.sampleSize = o.int32();
              break;
            }
            case 14: {
              g.width = o.int32();
              break;
            }
            case 15: {
              g.deviceName = o.string();
              break;
            }
            default:
              o.skipType(s & 7);
              break;
          }
        }
        return g;
      }, e.decodeDelimited = function(o) {
        return o instanceof w || (o = new w(o)), this.decode(o, o.uint32());
      }, e.verify = function(o) {
        return typeof o != "object" || o === null ? "object expected" : o.aspectRatio != null && o.hasOwnProperty("aspectRatio") && typeof o.aspectRatio != "number" ? "aspectRatio: number expected" : o.autoGainControl != null && o.hasOwnProperty("autoGainControl") && typeof o.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : o.channelCount != null && o.hasOwnProperty("channelCount") && !f.isInteger(o.channelCount) ? "channelCount: integer expected" : o.deviceId != null && o.hasOwnProperty("deviceId") && !f.isString(o.deviceId) ? "deviceId: string expected" : o.displaySurface != null && o.hasOwnProperty("displaySurface") && !f.isString(o.displaySurface) ? "displaySurface: string expected" : o.echoCancellation != null && o.hasOwnProperty("echoCancellation") && typeof o.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : o.facingMode != null && o.hasOwnProperty("facingMode") && !f.isString(o.facingMode) ? "facingMode: string expected" : o.frameRate != null && o.hasOwnProperty("frameRate") && typeof o.frameRate != "number" ? "frameRate: number expected" : o.groupId != null && o.hasOwnProperty("groupId") && !f.isString(o.groupId) ? "groupId: string expected" : o.height != null && o.hasOwnProperty("height") && !f.isInteger(o.height) ? "height: integer expected" : o.noiseSuppression != null && o.hasOwnProperty("noiseSuppression") && typeof o.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : o.sampleRate != null && o.hasOwnProperty("sampleRate") && !f.isInteger(o.sampleRate) ? "sampleRate: integer expected" : o.sampleSize != null && o.hasOwnProperty("sampleSize") && !f.isInteger(o.sampleSize) ? "sampleSize: integer expected" : o.width != null && o.hasOwnProperty("width") && !f.isInteger(o.width) ? "width: integer expected" : o.deviceName != null && o.hasOwnProperty("deviceName") && !f.isString(o.deviceName) ? "deviceName: string expected" : null;
      }, e.fromObject = function(o) {
        if (o instanceof d.dot.v3.MediaTrackSettings)
          return o;
        let r = new d.dot.v3.MediaTrackSettings();
        return o.aspectRatio != null && (r.aspectRatio = Number(o.aspectRatio)), o.autoGainControl != null && (r.autoGainControl = !!o.autoGainControl), o.channelCount != null && (r.channelCount = o.channelCount | 0), o.deviceId != null && (r.deviceId = String(o.deviceId)), o.displaySurface != null && (r.displaySurface = String(o.displaySurface)), o.echoCancellation != null && (r.echoCancellation = !!o.echoCancellation), o.facingMode != null && (r.facingMode = String(o.facingMode)), o.frameRate != null && (r.frameRate = Number(o.frameRate)), o.groupId != null && (r.groupId = String(o.groupId)), o.height != null && (r.height = o.height | 0), o.noiseSuppression != null && (r.noiseSuppression = !!o.noiseSuppression), o.sampleRate != null && (r.sampleRate = o.sampleRate | 0), o.sampleSize != null && (r.sampleSize = o.sampleSize | 0), o.width != null && (r.width = o.width | 0), o.deviceName != null && (r.deviceName = String(o.deviceName)), r;
      }, e.toObject = function(o, r) {
        r || (r = {});
        let a = {};
        return o.aspectRatio != null && o.hasOwnProperty("aspectRatio") && (a.aspectRatio = r.json && !isFinite(o.aspectRatio) ? String(o.aspectRatio) : o.aspectRatio, r.oneofs && (a._aspectRatio = "aspectRatio")), o.autoGainControl != null && o.hasOwnProperty("autoGainControl") && (a.autoGainControl = o.autoGainControl, r.oneofs && (a._autoGainControl = "autoGainControl")), o.channelCount != null && o.hasOwnProperty("channelCount") && (a.channelCount = o.channelCount, r.oneofs && (a._channelCount = "channelCount")), o.deviceId != null && o.hasOwnProperty("deviceId") && (a.deviceId = o.deviceId, r.oneofs && (a._deviceId = "deviceId")), o.displaySurface != null && o.hasOwnProperty("displaySurface") && (a.displaySurface = o.displaySurface, r.oneofs && (a._displaySurface = "displaySurface")), o.echoCancellation != null && o.hasOwnProperty("echoCancellation") && (a.echoCancellation = o.echoCancellation, r.oneofs && (a._echoCancellation = "echoCancellation")), o.facingMode != null && o.hasOwnProperty("facingMode") && (a.facingMode = o.facingMode, r.oneofs && (a._facingMode = "facingMode")), o.frameRate != null && o.hasOwnProperty("frameRate") && (a.frameRate = r.json && !isFinite(o.frameRate) ? String(o.frameRate) : o.frameRate, r.oneofs && (a._frameRate = "frameRate")), o.groupId != null && o.hasOwnProperty("groupId") && (a.groupId = o.groupId, r.oneofs && (a._groupId = "groupId")), o.height != null && o.hasOwnProperty("height") && (a.height = o.height, r.oneofs && (a._height = "height")), o.noiseSuppression != null && o.hasOwnProperty("noiseSuppression") && (a.noiseSuppression = o.noiseSuppression, r.oneofs && (a._noiseSuppression = "noiseSuppression")), o.sampleRate != null && o.hasOwnProperty("sampleRate") && (a.sampleRate = o.sampleRate, r.oneofs && (a._sampleRate = "sampleRate")), o.sampleSize != null && o.hasOwnProperty("sampleSize") && (a.sampleSize = o.sampleSize, r.oneofs && (a._sampleSize = "sampleSize")), o.width != null && o.hasOwnProperty("width") && (a.width = o.width, r.oneofs && (a._width = "width")), o.deviceName != null && o.hasOwnProperty("deviceName") && (a.deviceName = o.deviceName, r.oneofs && (a._deviceName = "deviceName")), a;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, oe.util.toJSONOptions);
      }, e.getTypeUrl = function(o) {
        return o === void 0 && (o = "type.googleapis.com"), o + "/dot.v3.MediaTrackSettings";
      }, e;
    }(), i.ImageBitmap = function() {
      function e(n) {
        if (n)
          for (let o = Object.keys(n), r = 0; r < o.length; ++r)
            n[o[r]] != null && (this[o[r]] = n[o[r]]);
      }
      return e.prototype.width = 0, e.prototype.height = 0, e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, o) {
        return o || (o = le.create()), n.width != null && Object.hasOwnProperty.call(n, "width") && o.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(n.width), n.height != null && Object.hasOwnProperty.call(n, "height") && o.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(n.height), o;
      }, e.encodeDelimited = function(n, o) {
        return this.encode(n, o).ldelim();
      }, e.decode = function(n, o) {
        n instanceof w || (n = w.create(n));
        let r = o === void 0 ? n.len : n.pos + o, a = new d.dot.v3.ImageBitmap();
        for (; n.pos < r; ) {
          let g = n.uint32();
          switch (g >>> 3) {
            case 1: {
              a.width = n.int32();
              break;
            }
            case 2: {
              a.height = n.int32();
              break;
            }
            default:
              n.skipType(g & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(n) {
        return n instanceof w || (n = new w(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        return typeof n != "object" || n === null ? "object expected" : n.width != null && n.hasOwnProperty("width") && !f.isInteger(n.width) ? "width: integer expected" : n.height != null && n.hasOwnProperty("height") && !f.isInteger(n.height) ? "height: integer expected" : null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.ImageBitmap)
          return n;
        let o = new d.dot.v3.ImageBitmap();
        return n.width != null && (o.width = n.width | 0), n.height != null && (o.height = n.height | 0), o;
      }, e.toObject = function(n, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.width = 0, r.height = 0), n.width != null && n.hasOwnProperty("width") && (r.width = n.width), n.height != null && n.hasOwnProperty("height") && (r.height = n.height), r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, oe.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.ImageBitmap";
      }, e;
    }(), i.CameraProperties = function() {
      function e(o) {
        if (o)
          for (let r = Object.keys(o), a = 0; a < r.length; ++a)
            o[r[a]] != null && (this[r[a]] = o[r[a]]);
      }
      e.prototype.cameraInitFrameResolution = null, e.prototype.cameraProperties = null;
      let n;
      return Object.defineProperty(e.prototype, "_cameraInitFrameResolution", {
        get: f.oneOfGetter(n = ["cameraInitFrameResolution"]),
        set: f.oneOfSetter(n)
      }), e.create = function(o) {
        return new e(o);
      }, e.encode = function(o, r) {
        return r || (r = le.create()), o.cameraInitFrameResolution != null && Object.hasOwnProperty.call(o, "cameraInitFrameResolution") && d.dot.v3.ImageBitmap.encode(o.cameraInitFrameResolution, r.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), o.cameraProperties != null && Object.hasOwnProperty.call(o, "cameraProperties") && d.dot.v3.MediaTrackSettings.encode(o.cameraProperties, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), r;
      }, e.encodeDelimited = function(o, r) {
        return this.encode(o, r).ldelim();
      }, e.decode = function(o, r) {
        o instanceof w || (o = w.create(o));
        let a = r === void 0 ? o.len : o.pos + r, g = new d.dot.v3.CameraProperties();
        for (; o.pos < a; ) {
          let s = o.uint32();
          switch (s >>> 3) {
            case 1: {
              g.cameraInitFrameResolution = d.dot.v3.ImageBitmap.decode(o, o.uint32());
              break;
            }
            case 2: {
              g.cameraProperties = d.dot.v3.MediaTrackSettings.decode(o, o.uint32());
              break;
            }
            default:
              o.skipType(s & 7);
              break;
          }
        }
        return g;
      }, e.decodeDelimited = function(o) {
        return o instanceof w || (o = new w(o)), this.decode(o, o.uint32());
      }, e.verify = function(o) {
        if (typeof o != "object" || o === null)
          return "object expected";
        if (o.cameraInitFrameResolution != null && o.hasOwnProperty("cameraInitFrameResolution")) {
          let r = d.dot.v3.ImageBitmap.verify(o.cameraInitFrameResolution);
          if (r)
            return "cameraInitFrameResolution." + r;
        }
        if (o.cameraProperties != null && o.hasOwnProperty("cameraProperties")) {
          let r = d.dot.v3.MediaTrackSettings.verify(o.cameraProperties);
          if (r)
            return "cameraProperties." + r;
        }
        return null;
      }, e.fromObject = function(o) {
        if (o instanceof d.dot.v3.CameraProperties)
          return o;
        let r = new d.dot.v3.CameraProperties();
        if (o.cameraInitFrameResolution != null) {
          if (typeof o.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v3.CameraProperties.cameraInitFrameResolution: object expected");
          r.cameraInitFrameResolution = d.dot.v3.ImageBitmap.fromObject(o.cameraInitFrameResolution);
        }
        if (o.cameraProperties != null) {
          if (typeof o.cameraProperties != "object")
            throw TypeError(".dot.v3.CameraProperties.cameraProperties: object expected");
          r.cameraProperties = d.dot.v3.MediaTrackSettings.fromObject(o.cameraProperties);
        }
        return r;
      }, e.toObject = function(o, r) {
        r || (r = {});
        let a = {};
        return r.defaults && (a.cameraProperties = null), o.cameraInitFrameResolution != null && o.hasOwnProperty("cameraInitFrameResolution") && (a.cameraInitFrameResolution = d.dot.v3.ImageBitmap.toObject(o.cameraInitFrameResolution, r), r.oneofs && (a._cameraInitFrameResolution = "cameraInitFrameResolution")), o.cameraProperties != null && o.hasOwnProperty("cameraProperties") && (a.cameraProperties = d.dot.v3.MediaTrackSettings.toObject(o.cameraProperties, r)), a;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, oe.util.toJSONOptions);
      }, e.getTypeUrl = function(o) {
        return o === void 0 && (o = "type.googleapis.com"), o + "/dot.v3.CameraProperties";
      }, e;
    }(), i.DetectedObject = function() {
      function e(n) {
        if (n)
          for (let o = Object.keys(n), r = 0; r < o.length; ++r)
            n[o[r]] != null && (this[o[r]] = n[o[r]]);
      }
      return e.prototype.brightness = 0, e.prototype.sharpness = 0, e.prototype.hotspots = 0, e.prototype.confidence = 0, e.prototype.faceSize = 0, e.prototype.faceCenter = null, e.prototype.smallestEdge = 0, e.prototype.bottomLeft = null, e.prototype.bottomRight = null, e.prototype.topLeft = null, e.prototype.topRight = null, e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, o) {
        return o || (o = le.create()), n.brightness != null && Object.hasOwnProperty.call(n, "brightness") && o.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(n.brightness), n.sharpness != null && Object.hasOwnProperty.call(n, "sharpness") && o.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(n.sharpness), n.hotspots != null && Object.hasOwnProperty.call(n, "hotspots") && o.uint32(
          /* id 3, wireType 5 =*/
          29
        ).float(n.hotspots), n.confidence != null && Object.hasOwnProperty.call(n, "confidence") && o.uint32(
          /* id 4, wireType 5 =*/
          37
        ).float(n.confidence), n.faceSize != null && Object.hasOwnProperty.call(n, "faceSize") && o.uint32(
          /* id 5, wireType 5 =*/
          45
        ).float(n.faceSize), n.faceCenter != null && Object.hasOwnProperty.call(n, "faceCenter") && d.dot.v3.Point.encode(n.faceCenter, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), n.smallestEdge != null && Object.hasOwnProperty.call(n, "smallestEdge") && o.uint32(
          /* id 7, wireType 5 =*/
          61
        ).float(n.smallestEdge), n.bottomLeft != null && Object.hasOwnProperty.call(n, "bottomLeft") && d.dot.v3.Point.encode(n.bottomLeft, o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), n.bottomRight != null && Object.hasOwnProperty.call(n, "bottomRight") && d.dot.v3.Point.encode(n.bottomRight, o.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), n.topLeft != null && Object.hasOwnProperty.call(n, "topLeft") && d.dot.v3.Point.encode(n.topLeft, o.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), n.topRight != null && Object.hasOwnProperty.call(n, "topRight") && d.dot.v3.Point.encode(n.topRight, o.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), o;
      }, e.encodeDelimited = function(n, o) {
        return this.encode(n, o).ldelim();
      }, e.decode = function(n, o) {
        n instanceof w || (n = w.create(n));
        let r = o === void 0 ? n.len : n.pos + o, a = new d.dot.v3.DetectedObject();
        for (; n.pos < r; ) {
          let g = n.uint32();
          switch (g >>> 3) {
            case 1: {
              a.brightness = n.float();
              break;
            }
            case 2: {
              a.sharpness = n.float();
              break;
            }
            case 3: {
              a.hotspots = n.float();
              break;
            }
            case 4: {
              a.confidence = n.float();
              break;
            }
            case 5: {
              a.faceSize = n.float();
              break;
            }
            case 6: {
              a.faceCenter = d.dot.v3.Point.decode(n, n.uint32());
              break;
            }
            case 7: {
              a.smallestEdge = n.float();
              break;
            }
            case 8: {
              a.bottomLeft = d.dot.v3.Point.decode(n, n.uint32());
              break;
            }
            case 9: {
              a.bottomRight = d.dot.v3.Point.decode(n, n.uint32());
              break;
            }
            case 10: {
              a.topLeft = d.dot.v3.Point.decode(n, n.uint32());
              break;
            }
            case 11: {
              a.topRight = d.dot.v3.Point.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(g & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(n) {
        return n instanceof w || (n = new w(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.brightness != null && n.hasOwnProperty("brightness") && typeof n.brightness != "number")
          return "brightness: number expected";
        if (n.sharpness != null && n.hasOwnProperty("sharpness") && typeof n.sharpness != "number")
          return "sharpness: number expected";
        if (n.hotspots != null && n.hasOwnProperty("hotspots") && typeof n.hotspots != "number")
          return "hotspots: number expected";
        if (n.confidence != null && n.hasOwnProperty("confidence") && typeof n.confidence != "number")
          return "confidence: number expected";
        if (n.faceSize != null && n.hasOwnProperty("faceSize") && typeof n.faceSize != "number")
          return "faceSize: number expected";
        if (n.faceCenter != null && n.hasOwnProperty("faceCenter")) {
          let o = d.dot.v3.Point.verify(n.faceCenter);
          if (o)
            return "faceCenter." + o;
        }
        if (n.smallestEdge != null && n.hasOwnProperty("smallestEdge") && typeof n.smallestEdge != "number")
          return "smallestEdge: number expected";
        if (n.bottomLeft != null && n.hasOwnProperty("bottomLeft")) {
          let o = d.dot.v3.Point.verify(n.bottomLeft);
          if (o)
            return "bottomLeft." + o;
        }
        if (n.bottomRight != null && n.hasOwnProperty("bottomRight")) {
          let o = d.dot.v3.Point.verify(n.bottomRight);
          if (o)
            return "bottomRight." + o;
        }
        if (n.topLeft != null && n.hasOwnProperty("topLeft")) {
          let o = d.dot.v3.Point.verify(n.topLeft);
          if (o)
            return "topLeft." + o;
        }
        if (n.topRight != null && n.hasOwnProperty("topRight")) {
          let o = d.dot.v3.Point.verify(n.topRight);
          if (o)
            return "topRight." + o;
        }
        return null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.DetectedObject)
          return n;
        let o = new d.dot.v3.DetectedObject();
        if (n.brightness != null && (o.brightness = Number(n.brightness)), n.sharpness != null && (o.sharpness = Number(n.sharpness)), n.hotspots != null && (o.hotspots = Number(n.hotspots)), n.confidence != null && (o.confidence = Number(n.confidence)), n.faceSize != null && (o.faceSize = Number(n.faceSize)), n.faceCenter != null) {
          if (typeof n.faceCenter != "object")
            throw TypeError(".dot.v3.DetectedObject.faceCenter: object expected");
          o.faceCenter = d.dot.v3.Point.fromObject(n.faceCenter);
        }
        if (n.smallestEdge != null && (o.smallestEdge = Number(n.smallestEdge)), n.bottomLeft != null) {
          if (typeof n.bottomLeft != "object")
            throw TypeError(".dot.v3.DetectedObject.bottomLeft: object expected");
          o.bottomLeft = d.dot.v3.Point.fromObject(n.bottomLeft);
        }
        if (n.bottomRight != null) {
          if (typeof n.bottomRight != "object")
            throw TypeError(".dot.v3.DetectedObject.bottomRight: object expected");
          o.bottomRight = d.dot.v3.Point.fromObject(n.bottomRight);
        }
        if (n.topLeft != null) {
          if (typeof n.topLeft != "object")
            throw TypeError(".dot.v3.DetectedObject.topLeft: object expected");
          o.topLeft = d.dot.v3.Point.fromObject(n.topLeft);
        }
        if (n.topRight != null) {
          if (typeof n.topRight != "object")
            throw TypeError(".dot.v3.DetectedObject.topRight: object expected");
          o.topRight = d.dot.v3.Point.fromObject(n.topRight);
        }
        return o;
      }, e.toObject = function(n, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.brightness = 0, r.sharpness = 0, r.hotspots = 0, r.confidence = 0, r.faceSize = 0, r.faceCenter = null, r.smallestEdge = 0, r.bottomLeft = null, r.bottomRight = null, r.topLeft = null, r.topRight = null), n.brightness != null && n.hasOwnProperty("brightness") && (r.brightness = o.json && !isFinite(n.brightness) ? String(n.brightness) : n.brightness), n.sharpness != null && n.hasOwnProperty("sharpness") && (r.sharpness = o.json && !isFinite(n.sharpness) ? String(n.sharpness) : n.sharpness), n.hotspots != null && n.hasOwnProperty("hotspots") && (r.hotspots = o.json && !isFinite(n.hotspots) ? String(n.hotspots) : n.hotspots), n.confidence != null && n.hasOwnProperty("confidence") && (r.confidence = o.json && !isFinite(n.confidence) ? String(n.confidence) : n.confidence), n.faceSize != null && n.hasOwnProperty("faceSize") && (r.faceSize = o.json && !isFinite(n.faceSize) ? String(n.faceSize) : n.faceSize), n.faceCenter != null && n.hasOwnProperty("faceCenter") && (r.faceCenter = d.dot.v3.Point.toObject(n.faceCenter, o)), n.smallestEdge != null && n.hasOwnProperty("smallestEdge") && (r.smallestEdge = o.json && !isFinite(n.smallestEdge) ? String(n.smallestEdge) : n.smallestEdge), n.bottomLeft != null && n.hasOwnProperty("bottomLeft") && (r.bottomLeft = d.dot.v3.Point.toObject(n.bottomLeft, o)), n.bottomRight != null && n.hasOwnProperty("bottomRight") && (r.bottomRight = d.dot.v3.Point.toObject(n.bottomRight, o)), n.topLeft != null && n.hasOwnProperty("topLeft") && (r.topLeft = d.dot.v3.Point.toObject(n.topLeft, o)), n.topRight != null && n.hasOwnProperty("topRight") && (r.topRight = d.dot.v3.Point.toObject(n.topRight, o)), r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, oe.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.DetectedObject";
      }, e;
    }(), i.Point = function() {
      function e(n) {
        if (n)
          for (let o = Object.keys(n), r = 0; r < o.length; ++r)
            n[o[r]] != null && (this[o[r]] = n[o[r]]);
      }
      return e.prototype.x = 0, e.prototype.y = 0, e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, o) {
        return o || (o = le.create()), n.x != null && Object.hasOwnProperty.call(n, "x") && o.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(n.x), n.y != null && Object.hasOwnProperty.call(n, "y") && o.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(n.y), o;
      }, e.encodeDelimited = function(n, o) {
        return this.encode(n, o).ldelim();
      }, e.decode = function(n, o) {
        n instanceof w || (n = w.create(n));
        let r = o === void 0 ? n.len : n.pos + o, a = new d.dot.v3.Point();
        for (; n.pos < r; ) {
          let g = n.uint32();
          switch (g >>> 3) {
            case 1: {
              a.x = n.float();
              break;
            }
            case 2: {
              a.y = n.float();
              break;
            }
            default:
              n.skipType(g & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(n) {
        return n instanceof w || (n = new w(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        return typeof n != "object" || n === null ? "object expected" : n.x != null && n.hasOwnProperty("x") && typeof n.x != "number" ? "x: number expected" : n.y != null && n.hasOwnProperty("y") && typeof n.y != "number" ? "y: number expected" : null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.Point)
          return n;
        let o = new d.dot.v3.Point();
        return n.x != null && (o.x = Number(n.x)), n.y != null && (o.y = Number(n.y)), o;
      }, e.toObject = function(n, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.x = 0, r.y = 0), n.x != null && n.hasOwnProperty("x") && (r.x = o.json && !isFinite(n.x) ? String(n.x) : n.x), n.y != null && n.hasOwnProperty("y") && (r.y = o.json && !isFinite(n.y) ? String(n.y) : n.y), r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, oe.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.Point";
      }, e;
    }(), i.FaceContent = function() {
      function e(n) {
        if (n)
          for (let o = Object.keys(n), r = 0; r < o.length; ++r)
            n[o[r]] != null && (this[o[r]] = n[o[r]]);
      }
      return e.prototype.image = null, e.prototype.metadata = null, e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, o) {
        return o || (o = le.create()), n.image != null && Object.hasOwnProperty.call(n, "image") && d.dot.Image.encode(n.image, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.metadata != null && Object.hasOwnProperty.call(n, "metadata") && d.dot.v3.Metadata.encode(n.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), o;
      }, e.encodeDelimited = function(n, o) {
        return this.encode(n, o).ldelim();
      }, e.decode = function(n, o) {
        n instanceof w || (n = w.create(n));
        let r = o === void 0 ? n.len : n.pos + o, a = new d.dot.v3.FaceContent();
        for (; n.pos < r; ) {
          let g = n.uint32();
          switch (g >>> 3) {
            case 1: {
              a.image = d.dot.Image.decode(n, n.uint32());
              break;
            }
            case 2: {
              a.metadata = d.dot.v3.Metadata.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(g & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(n) {
        return n instanceof w || (n = new w(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.image != null && n.hasOwnProperty("image")) {
          let o = d.dot.Image.verify(n.image);
          if (o)
            return "image." + o;
        }
        if (n.metadata != null && n.hasOwnProperty("metadata")) {
          let o = d.dot.v3.Metadata.verify(n.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.FaceContent)
          return n;
        let o = new d.dot.v3.FaceContent();
        if (n.image != null) {
          if (typeof n.image != "object")
            throw TypeError(".dot.v3.FaceContent.image: object expected");
          o.image = d.dot.Image.fromObject(n.image);
        }
        if (n.metadata != null) {
          if (typeof n.metadata != "object")
            throw TypeError(".dot.v3.FaceContent.metadata: object expected");
          o.metadata = d.dot.v3.Metadata.fromObject(n.metadata);
        }
        return o;
      }, e.toObject = function(n, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.image = null, r.metadata = null), n.image != null && n.hasOwnProperty("image") && (r.image = d.dot.Image.toObject(n.image, o)), n.metadata != null && n.hasOwnProperty("metadata") && (r.metadata = d.dot.v3.Metadata.toObject(n.metadata, o)), r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, oe.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.FaceContent";
      }, e;
    }(), i.DocumentContent = function() {
      function e(n) {
        if (n)
          for (let o = Object.keys(n), r = 0; r < o.length; ++r)
            n[o[r]] != null && (this[o[r]] = n[o[r]]);
      }
      return e.prototype.image = null, e.prototype.metadata = null, e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, o) {
        return o || (o = le.create()), n.image != null && Object.hasOwnProperty.call(n, "image") && d.dot.Image.encode(n.image, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.metadata != null && Object.hasOwnProperty.call(n, "metadata") && d.dot.v3.Metadata.encode(n.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), o;
      }, e.encodeDelimited = function(n, o) {
        return this.encode(n, o).ldelim();
      }, e.decode = function(n, o) {
        n instanceof w || (n = w.create(n));
        let r = o === void 0 ? n.len : n.pos + o, a = new d.dot.v3.DocumentContent();
        for (; n.pos < r; ) {
          let g = n.uint32();
          switch (g >>> 3) {
            case 1: {
              a.image = d.dot.Image.decode(n, n.uint32());
              break;
            }
            case 2: {
              a.metadata = d.dot.v3.Metadata.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(g & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(n) {
        return n instanceof w || (n = new w(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.image != null && n.hasOwnProperty("image")) {
          let o = d.dot.Image.verify(n.image);
          if (o)
            return "image." + o;
        }
        if (n.metadata != null && n.hasOwnProperty("metadata")) {
          let o = d.dot.v3.Metadata.verify(n.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.DocumentContent)
          return n;
        let o = new d.dot.v3.DocumentContent();
        if (n.image != null) {
          if (typeof n.image != "object")
            throw TypeError(".dot.v3.DocumentContent.image: object expected");
          o.image = d.dot.Image.fromObject(n.image);
        }
        if (n.metadata != null) {
          if (typeof n.metadata != "object")
            throw TypeError(".dot.v3.DocumentContent.metadata: object expected");
          o.metadata = d.dot.v3.Metadata.fromObject(n.metadata);
        }
        return o;
      }, e.toObject = function(n, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.image = null, r.metadata = null), n.image != null && n.hasOwnProperty("image") && (r.image = d.dot.Image.toObject(n.image, o)), n.metadata != null && n.hasOwnProperty("metadata") && (r.metadata = d.dot.v3.Metadata.toObject(n.metadata, o)), r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, oe.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.DocumentContent";
      }, e;
    }(), i.Blob = function() {
      function e(o) {
        if (o)
          for (let r = Object.keys(o), a = 0; a < r.length; ++a)
            o[r[a]] != null && (this[r[a]] = o[r[a]]);
      }
      e.prototype.documentContent = null, e.prototype.faceContent = null, e.prototype.magnifeyeLivenessContent = null, e.prototype.smileLivenessContent = null;
      let n;
      return Object.defineProperty(e.prototype, "blob", {
        get: f.oneOfGetter(n = ["documentContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent"]),
        set: f.oneOfSetter(n)
      }), e.create = function(o) {
        return new e(o);
      }, e.encode = function(o, r) {
        return r || (r = le.create()), o.documentContent != null && Object.hasOwnProperty.call(o, "documentContent") && d.dot.v3.DocumentContent.encode(o.documentContent, r.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), o.faceContent != null && Object.hasOwnProperty.call(o, "faceContent") && d.dot.v3.FaceContent.encode(o.faceContent, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), o.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(o, "magnifeyeLivenessContent") && d.dot.v3.MagnifEyeLivenessContent.encode(o.magnifeyeLivenessContent, r.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o.smileLivenessContent != null && Object.hasOwnProperty.call(o, "smileLivenessContent") && d.dot.v3.SmileLivenessContent.encode(o.smileLivenessContent, r.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), r;
      }, e.encodeDelimited = function(o, r) {
        return this.encode(o, r).ldelim();
      }, e.decode = function(o, r) {
        o instanceof w || (o = w.create(o));
        let a = r === void 0 ? o.len : o.pos + r, g = new d.dot.v3.Blob();
        for (; o.pos < a; ) {
          let s = o.uint32();
          switch (s >>> 3) {
            case 1: {
              g.documentContent = d.dot.v3.DocumentContent.decode(o, o.uint32());
              break;
            }
            case 2: {
              g.faceContent = d.dot.v3.FaceContent.decode(o, o.uint32());
              break;
            }
            case 3: {
              g.magnifeyeLivenessContent = d.dot.v3.MagnifEyeLivenessContent.decode(o, o.uint32());
              break;
            }
            case 4: {
              g.smileLivenessContent = d.dot.v3.SmileLivenessContent.decode(o, o.uint32());
              break;
            }
            default:
              o.skipType(s & 7);
              break;
          }
        }
        return g;
      }, e.decodeDelimited = function(o) {
        return o instanceof w || (o = new w(o)), this.decode(o, o.uint32());
      }, e.verify = function(o) {
        if (typeof o != "object" || o === null)
          return "object expected";
        let r = {};
        if (o.documentContent != null && o.hasOwnProperty("documentContent")) {
          r.blob = 1;
          {
            let a = d.dot.v3.DocumentContent.verify(o.documentContent);
            if (a)
              return "documentContent." + a;
          }
        }
        if (o.faceContent != null && o.hasOwnProperty("faceContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let a = d.dot.v3.FaceContent.verify(o.faceContent);
            if (a)
              return "faceContent." + a;
          }
        }
        if (o.magnifeyeLivenessContent != null && o.hasOwnProperty("magnifeyeLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let a = d.dot.v3.MagnifEyeLivenessContent.verify(o.magnifeyeLivenessContent);
            if (a)
              return "magnifeyeLivenessContent." + a;
          }
        }
        if (o.smileLivenessContent != null && o.hasOwnProperty("smileLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let a = d.dot.v3.SmileLivenessContent.verify(o.smileLivenessContent);
            if (a)
              return "smileLivenessContent." + a;
          }
        }
        return null;
      }, e.fromObject = function(o) {
        if (o instanceof d.dot.v3.Blob)
          return o;
        let r = new d.dot.v3.Blob();
        if (o.documentContent != null) {
          if (typeof o.documentContent != "object")
            throw TypeError(".dot.v3.Blob.documentContent: object expected");
          r.documentContent = d.dot.v3.DocumentContent.fromObject(o.documentContent);
        }
        if (o.faceContent != null) {
          if (typeof o.faceContent != "object")
            throw TypeError(".dot.v3.Blob.faceContent: object expected");
          r.faceContent = d.dot.v3.FaceContent.fromObject(o.faceContent);
        }
        if (o.magnifeyeLivenessContent != null) {
          if (typeof o.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v3.Blob.magnifeyeLivenessContent: object expected");
          r.magnifeyeLivenessContent = d.dot.v3.MagnifEyeLivenessContent.fromObject(o.magnifeyeLivenessContent);
        }
        if (o.smileLivenessContent != null) {
          if (typeof o.smileLivenessContent != "object")
            throw TypeError(".dot.v3.Blob.smileLivenessContent: object expected");
          r.smileLivenessContent = d.dot.v3.SmileLivenessContent.fromObject(o.smileLivenessContent);
        }
        return r;
      }, e.toObject = function(o, r) {
        r || (r = {});
        let a = {};
        return o.documentContent != null && o.hasOwnProperty("documentContent") && (a.documentContent = d.dot.v3.DocumentContent.toObject(o.documentContent, r), r.oneofs && (a.blob = "documentContent")), o.faceContent != null && o.hasOwnProperty("faceContent") && (a.faceContent = d.dot.v3.FaceContent.toObject(o.faceContent, r), r.oneofs && (a.blob = "faceContent")), o.magnifeyeLivenessContent != null && o.hasOwnProperty("magnifeyeLivenessContent") && (a.magnifeyeLivenessContent = d.dot.v3.MagnifEyeLivenessContent.toObject(o.magnifeyeLivenessContent, r), r.oneofs && (a.blob = "magnifeyeLivenessContent")), o.smileLivenessContent != null && o.hasOwnProperty("smileLivenessContent") && (a.smileLivenessContent = d.dot.v3.SmileLivenessContent.toObject(o.smileLivenessContent, r), r.oneofs && (a.blob = "smileLivenessContent")), a;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, oe.util.toJSONOptions);
      }, e.getTypeUrl = function(o) {
        return o === void 0 && (o = "type.googleapis.com"), o + "/dot.v3.Blob";
      }, e;
    }(), i.SmileLivenessContent = function() {
      function e(n) {
        if (n)
          for (let o = Object.keys(n), r = 0; r < o.length; ++r)
            n[o[r]] != null && (this[o[r]] = n[o[r]]);
      }
      return e.prototype.neutralExpressionFaceImage = null, e.prototype.smileExpressionFaceImage = null, e.prototype.metadata = null, e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, o) {
        return o || (o = le.create()), n.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(n, "neutralExpressionFaceImage") && d.dot.Image.encode(n.neutralExpressionFaceImage, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.smileExpressionFaceImage != null && Object.hasOwnProperty.call(n, "smileExpressionFaceImage") && d.dot.Image.encode(n.smileExpressionFaceImage, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.metadata != null && Object.hasOwnProperty.call(n, "metadata") && d.dot.v3.Metadata.encode(n.metadata, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o;
      }, e.encodeDelimited = function(n, o) {
        return this.encode(n, o).ldelim();
      }, e.decode = function(n, o) {
        n instanceof w || (n = w.create(n));
        let r = o === void 0 ? n.len : n.pos + o, a = new d.dot.v3.SmileLivenessContent();
        for (; n.pos < r; ) {
          let g = n.uint32();
          switch (g >>> 3) {
            case 1: {
              a.neutralExpressionFaceImage = d.dot.Image.decode(n, n.uint32());
              break;
            }
            case 2: {
              a.smileExpressionFaceImage = d.dot.Image.decode(n, n.uint32());
              break;
            }
            case 3: {
              a.metadata = d.dot.v3.Metadata.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(g & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(n) {
        return n instanceof w || (n = new w(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.neutralExpressionFaceImage != null && n.hasOwnProperty("neutralExpressionFaceImage")) {
          let o = d.dot.Image.verify(n.neutralExpressionFaceImage);
          if (o)
            return "neutralExpressionFaceImage." + o;
        }
        if (n.smileExpressionFaceImage != null && n.hasOwnProperty("smileExpressionFaceImage")) {
          let o = d.dot.Image.verify(n.smileExpressionFaceImage);
          if (o)
            return "smileExpressionFaceImage." + o;
        }
        if (n.metadata != null && n.hasOwnProperty("metadata")) {
          let o = d.dot.v3.Metadata.verify(n.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.SmileLivenessContent)
          return n;
        let o = new d.dot.v3.SmileLivenessContent();
        if (n.neutralExpressionFaceImage != null) {
          if (typeof n.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v3.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          o.neutralExpressionFaceImage = d.dot.Image.fromObject(n.neutralExpressionFaceImage);
        }
        if (n.smileExpressionFaceImage != null) {
          if (typeof n.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v3.SmileLivenessContent.smileExpressionFaceImage: object expected");
          o.smileExpressionFaceImage = d.dot.Image.fromObject(n.smileExpressionFaceImage);
        }
        if (n.metadata != null) {
          if (typeof n.metadata != "object")
            throw TypeError(".dot.v3.SmileLivenessContent.metadata: object expected");
          o.metadata = d.dot.v3.Metadata.fromObject(n.metadata);
        }
        return o;
      }, e.toObject = function(n, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.neutralExpressionFaceImage = null, r.smileExpressionFaceImage = null, r.metadata = null), n.neutralExpressionFaceImage != null && n.hasOwnProperty("neutralExpressionFaceImage") && (r.neutralExpressionFaceImage = d.dot.Image.toObject(n.neutralExpressionFaceImage, o)), n.smileExpressionFaceImage != null && n.hasOwnProperty("smileExpressionFaceImage") && (r.smileExpressionFaceImage = d.dot.Image.toObject(n.smileExpressionFaceImage, o)), n.metadata != null && n.hasOwnProperty("metadata") && (r.metadata = d.dot.v3.Metadata.toObject(n.metadata, o)), r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, oe.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.SmileLivenessContent";
      }, e;
    }(), i;
  }(), t.Image = function() {
    function i(e) {
      if (e)
        for (let n = Object.keys(e), o = 0; o < n.length; ++o)
          e[n[o]] != null && (this[n[o]] = e[n[o]]);
    }
    return i.prototype.bytes = f.newBuffer([]), i.create = function(e) {
      return new i(e);
    }, i.encode = function(e, n) {
      return n || (n = le.create()), e.bytes != null && Object.hasOwnProperty.call(e, "bytes") && n.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(e.bytes), n;
    }, i.encodeDelimited = function(e, n) {
      return this.encode(e, n).ldelim();
    }, i.decode = function(e, n) {
      e instanceof w || (e = w.create(e));
      let o = n === void 0 ? e.len : e.pos + n, r = new d.dot.Image();
      for (; e.pos < o; ) {
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
    }, i.decodeDelimited = function(e) {
      return e instanceof w || (e = new w(e)), this.decode(e, e.uint32());
    }, i.verify = function(e) {
      return typeof e != "object" || e === null ? "object expected" : e.bytes != null && e.hasOwnProperty("bytes") && !(e.bytes && typeof e.bytes.length == "number" || f.isString(e.bytes)) ? "bytes: buffer expected" : null;
    }, i.fromObject = function(e) {
      if (e instanceof d.dot.Image)
        return e;
      let n = new d.dot.Image();
      return e.bytes != null && (typeof e.bytes == "string" ? f.base64.decode(e.bytes, n.bytes = f.newBuffer(f.base64.length(e.bytes)), 0) : e.bytes.length >= 0 && (n.bytes = e.bytes)), n;
    }, i.toObject = function(e, n) {
      n || (n = {});
      let o = {};
      return n.defaults && (n.bytes === String ? o.bytes = "" : (o.bytes = [], n.bytes !== Array && (o.bytes = f.newBuffer(o.bytes)))), e.bytes != null && e.hasOwnProperty("bytes") && (o.bytes = n.bytes === String ? f.base64.encode(e.bytes, 0, e.bytes.length) : n.bytes === Array ? Array.prototype.slice.call(e.bytes) : e.bytes), o;
    }, i.prototype.toJSON = function() {
      return this.constructor.toObject(this, oe.util.toJSONOptions);
    }, i.getTypeUrl = function(e) {
      return e === void 0 && (e = "type.googleapis.com"), e + "/dot.Image";
    }, i;
  }(), t.Int32List = function() {
    function i(e) {
      if (this.items = [], e)
        for (let n = Object.keys(e), o = 0; o < n.length; ++o)
          e[n[o]] != null && (this[n[o]] = e[n[o]]);
    }
    return i.prototype.items = f.emptyArray, i.create = function(e) {
      return new i(e);
    }, i.encode = function(e, n) {
      if (n || (n = le.create()), e.items != null && e.items.length) {
        n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork();
        for (let o = 0; o < e.items.length; ++o)
          n.int32(e.items[o]);
        n.ldelim();
      }
      return n;
    }, i.encodeDelimited = function(e, n) {
      return this.encode(e, n).ldelim();
    }, i.decode = function(e, n) {
      e instanceof w || (e = w.create(e));
      let o = n === void 0 ? e.len : e.pos + n, r = new d.dot.Int32List();
      for (; e.pos < o; ) {
        let a = e.uint32();
        switch (a >>> 3) {
          case 1: {
            if (r.items && r.items.length || (r.items = []), (a & 7) === 2) {
              let g = e.uint32() + e.pos;
              for (; e.pos < g; )
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
    }, i.decodeDelimited = function(e) {
      return e instanceof w || (e = new w(e)), this.decode(e, e.uint32());
    }, i.verify = function(e) {
      if (typeof e != "object" || e === null)
        return "object expected";
      if (e.items != null && e.hasOwnProperty("items")) {
        if (!Array.isArray(e.items))
          return "items: array expected";
        for (let n = 0; n < e.items.length; ++n)
          if (!f.isInteger(e.items[n]))
            return "items: integer[] expected";
      }
      return null;
    }, i.fromObject = function(e) {
      if (e instanceof d.dot.Int32List)
        return e;
      let n = new d.dot.Int32List();
      if (e.items) {
        if (!Array.isArray(e.items))
          throw TypeError(".dot.Int32List.items: array expected");
        n.items = [];
        for (let o = 0; o < e.items.length; ++o)
          n.items[o] = e.items[o] | 0;
      }
      return n;
    }, i.toObject = function(e, n) {
      n || (n = {});
      let o = {};
      if ((n.arrays || n.defaults) && (o.items = []), e.items && e.items.length) {
        o.items = [];
        for (let r = 0; r < e.items.length; ++r)
          o.items[r] = e.items[r];
      }
      return o;
    }, i.prototype.toJSON = function() {
      return this.constructor.toObject(this, oe.util.toJSONOptions);
    }, i.getTypeUrl = function(e) {
      return e === void 0 && (e = "type.googleapis.com"), e + "/dot.Int32List";
    }, i;
  }(), t.Platform = function() {
    const i = {}, e = Object.create(i);
    return e[i[0] = "WEB"] = 0, e[i[1] = "ANDROID"] = 1, e[i[2] = "IOS"] = 2, e;
  }(), t;
})();
async function Ws(t) {
  const { Image: i } = Vt, e = await t.arrayBuffer(), n = new Uint8Array(e), o = {};
  o.bytes = n;
  const r = i.verify(o);
  if (r)
    throw Error(r);
  const a = {};
  return a.bytes = n, i.create(a);
}
async function Rs(t) {
  const { v3: { Metadata: i } } = Vt, e = { ...t };
  e.platform = Vt.Platform.WEB;
  const n = e, o = i.verify(n);
  if (o)
    throw Error(o);
  return i.create(n);
}
async function Vs(t) {
  const { Content: i } = Vt, { iv: e, key: n, message: o } = await jx(t), r = { token: new Uint8Array(n), iv: e, schemaVersion: LI, bytes: new Uint8Array(o) }, a = i.verify(r);
  if (a)
    throw Error(a);
  const g = i.create(r);
  return i.encode(g).finish();
}
function Es({ documentContent: t, faceContent: i, magnifeyeLivenessContent: e, smileLivenessContent: n }) {
  const { Blob: o } = Vt.v3, r = {};
  r.documentContent = t, r.faceContent = i, r.magnifeyeLivenessContent = e, r.smileLivenessContent = n;
  const a = r, g = o.verify(a);
  if (g)
    throw Error(g);
  const s = o.create(a);
  return o.encode(s).finish();
}
async function Zl(t, i) {
  const { FaceContent: e } = Vt.v3, n = await Ws(t), o = await Rs(i), r = {};
  r.image = n, r.metadata = o;
  const a = r, g = e.verify(a);
  if (g)
    throw Error(g);
  const s = e.create(a), x = {};
  return x.faceContent = s, Es(x);
}
async function kl(t, i) {
  const e = await Zl(t, i);
  return Vs(e);
}
const Kl = ({
  onPhotoTakenInternal: t
}) => {
  const {
    analytics: i,
    appState: e,
    handleAppStateChange: n,
    handleError: o
  } = Eo(), {
    faceCameraOptions: r
  } = is(), {
    cameraFacing: a,
    onPhotoTaken: g,
    sessionToken: s,
    thresholds: x,
    wasmDirectoryPath: C
  } = r, u = ht(), h = Ht(void 0), {
    cameraHandler: p,
    cameraResolution: v,
    onCameraResolutionChange: E
  } = Zx(u, a), {
    controller: B
  } = cl(x, C), {
    shouldMirror: k
  } = Sx(gt.CONTROL, p);
  return sx(gt.CAMERA_PROPS_CHANGED, {
    cameraResolution: v,
    shouldMirror: k
  }), kx(i), Ce(() => () => {
    Kn.getInstance().restart();
  }, []), Ce(() => {
    p != null && p.videoTrack && (B != null && B.isDetectorInitialized) && n(ze.RUNNING);
  }, [p == null ? void 0 : p.videoTrack, B == null ? void 0 : B.isDetectorInitialized, n]), Ce(() => {
    if (e !== ze.RUNNING)
      return;
    if (!p || !B)
      throw new ne("Cannot start detection");
    let K = 0, G = !1, F = 0;
    const L = new sr(30);
    B.clearImagesForDuplicateDetection();
    const X = async ($, z, ee) => {
      const fe = {
        width: $.width,
        height: $.height
      }, te = await es($), me = {
        ...await p.getCameraProperties(),
        detectionRecord: ee,
        hashedDetectedImages: B.getImagesForDuplicateDetection()
      }, de = await kl(te, {
        sessionToken: s,
        web: me
      }), ve = {
        detection: z,
        imageResolution: fe
      };
      gx($g.FACE, B.getCandidateSelectionImages()), t && t({
        cameraProperties: me || {}
      }), g({
        image: te,
        data: ve
      }, de);
    };
    return (async () => {
      const $ = Date.now();
      for (; p.checkIfStreamIsRunning() && !G; ) {
        if (yx(K, F)) {
          const {
            detection: ve,
            image: Ee
          } = B.getBestImage() || {}, we = B.getDetectionRecord();
          if (Ee && ve) {
            const Me = Date.now(), Pe = as(L);
            i.trackCaptureProcess({
              faceDetection: ve,
              imageResolution: {
                width: Ee.width,
                height: Ee.height
              },
              deviceName: await p.getDeviceName(),
              averageFps: Pe,
              captureProcessDurationInMs: Me - $,
              facingMode: p.getCameraSettings().facingMode,
              instructionSet: await B.getInstructionSet()
            }), n(ze.WAITING), await X(Ee, ve, we), B.restart();
          } else
            o(new ne("Something went wrong during capturing an image"));
          return;
        }
        const z = Date.now(), ee = p.takePhoto(), fe = {
          width: ee.width,
          height: ee.height
        };
        let te;
        try {
          te = await B.processImage(ee);
        } catch (ve) {
          ve instanceof Error && o(ne.fromCameraError(ve));
          return;
        }
        const me = Date.now() - z, ae = Rn(1e3 / me);
        L.pushFixed(ae);
        const de = {
          face: te.detectedFace,
          detectionTime: me,
          fps: ae,
          resolution: fe,
          instructionCode: te.instructionCode,
          invalidValidators: te.invalidValidators,
          samVersion: B.samVersion
        };
        h.value = de, te.isInCandidateSelection && (K === 0 && (K = performance.now()), F++), E(fe), await Ni(Math.max(Sa.max - me, Sa.min));
      }
    })(), () => {
      G = !0;
    };
  }, [e, p, B, r, n, o, g, x.faceConfidence, E, t, s, h, i]), se(Fe, {
    children: [se(uI, {
      ref: u,
      $isImageMirror: k,
      autoPlay: !0,
      muted: !0,
      playsInline: !0
    }), v && e === ze.RUNNING && se(Nx, {
      cameraResolution: v,
      detectionDetails: h,
      isImageMirror: k
    })]
  });
}, Hl = ({
  onPhotoTakenInternal: t,
  ...i
}) => se(zI, {
  cameraOptions: i,
  children: se(Kl, {
    onPhotoTakenInternal: t
  })
}), Ol = ({
  children: t
}) => {
  const i = ht(null);
  return Kx(i, gt.VIDEO_ELEMENT_SIZE), se(lI, {
    ref: i,
    children: t
  });
}, Xi = {};
Xi.minFaceSizeRatio = 0.135, Xi.maxFaceSizeRatio = 0.21;
const Ps = {};
Ps.faceConfidence = 1;
const ut = {};
ut.minFaceSizeRatio = 0.3, ut.maxFaceSizeRatio = 1, ut.brightnessHighThreshold = 1, ut.brightnessLowThreshold = -(-5261 * 1 + 13 * -492 + -1943 * -6), ut.faceConfidence = 0.15, ut.sharpnessThreshold = -(-39 * 37 + -1 * -3979 + -2535), ut.outOfBoundsThreshold = -(-1 * 7643 + -4 * 491 + 4 * 2402);
const Wl = { [Oe.DISTANT]: Xi, [Oe.MIDDLE]: Ps, [Oe.CLOSEUP]: ut }, Rl = Wl, Ma = -9252 + -169 * 11 + -1 * -11111 + 0.255;
async function Vl(t, i) {
  const { MagnifEyeLivenessContent: e } = Vt.v3, n = await Promise.all(t.map(async (C) => Ws(C))), o = await Rs(i), r = {};
  r.images = n, r.metadata = o;
  const a = r, g = e.verify(a);
  if (g)
    throw Error(g);
  const s = e.create(a), x = {};
  return x.magnifeyeLivenessContent = s, Es(x);
}
async function El(t, i) {
  const e = t.map((o) => o.image), n = await Vl(e, i);
  return Vs(n);
}
function Pl(t, i) {
  const e = ka(t.faceSize, Ma);
  return ka(i.faceSize, Ma) < e;
}
const Nl = (t, i) => {
  const e = Ht(void 0), n = (r) => {
    if (!(!r.detail || t !== $t.RUNNING || i.value !== Oe.CLOSEUP)) {
      if (!e.value) {
        e.value = r.detail;
        return;
      }
      Pl(e.value.data.detection, r.detail.data.detection) && (e.value = r.detail);
    }
  };
  Fg(gt.FACE_DETECTION, n);
  const o = {};
  return o.middleImageBestCandidate = e, o;
}, Yl = ln.div`
  ${(t) => t.$isSecondStep && Pg`
      transition: all 1.5s ease-in-out;
      transform: translate(16%, 5%) scale(2);
      transition-delay: 1.5s;
    `}
`, Ll = ({
  onComplete: t,
  onError: i,
  sessionToken: e,
  wasmDirectoryPath: n
}) => {
  const {
    analytics: o,
    appState: r,
    handleAppStateChange: a,
    handleError: g
  } = pI(), s = Ht(Oe.DISTANT), x = Ht([]), C = Ht(null), {
    middleImageBestCandidate: u
  } = Nl(r, s), h = GI(kn.ANIMATION_END);
  function p(G) {
    x.value = [...x.value, G];
  }
  function v(G) {
    s.value = G, Pi(kn.STATUS_CHANGED, {
      phase: G
    });
  }
  function E(G) {
    p(G), v(Oe.MIDDLE);
  }
  h.value && v(Oe.CLOSEUP);
  async function B(G) {
    if (u.value) {
      const L = {
        image: await es(u.value.image),
        data: u.value.data
      };
      p(L);
    }
    p(G);
    try {
      const F = {
        sessionToken: e,
        web: C.value
      }, L = await El(x.value, F), [X] = x.value;
      t(X, L), o.trackLivenessProcess(x.value);
    } catch (F) {
      F instanceof Error && g(ne.fromError(F));
      return;
    }
    a($t.DONE);
  }
  function k(G) {
    C.value = ZI(C.value, G.cameraProperties);
  }
  const K = {
    [Oe.DISTANT]: E,
    /**
     * we don't care about onPhotoTaken in MIDDLE phase, because faceConfidence = 1
     */
    [Oe.MIDDLE]: () => {
    },
    [Oe.CLOSEUP]: B
  };
  return se(Ol, {
    children: se(Yl, {
      $isSecondStep: s.value !== Oe.DISTANT,
      children: se(Hl, {
        onError: i,
        onPhotoTaken: K[s.value],
        onPhotoTakenInternal: k,
        thresholds: Rl[s.value],
        wasmDirectoryPath: n
      })
    })
  });
};
var Ns = ((t) => (t.AUTO_CAPTURE = "auto-capture", t))(Ns || {});
class Tl {
  constructor() {
    j(this, "appKey", "");
    j(this, "deviceId", "");
  }
  async countlyFetch(i) {
    if (!this.appKey || !this.deviceId)
      return;
    const e = {};
    e.Accept = "application/json";
    const n = {};
    n.method = "GET", n.headers = e;
    const o = n, r = "https://innovatrics.count.ly/i?", a = {};
    a.app_key = this.appKey, a.device_id = this.deviceId;
    const g = qn(a);
    await fetch("" + r + g + "&" + i, o);
  }
  async init(i, e) {
    if (!e)
      return;
    this.appKey = e, this.deviceId = i;
    const n = { _app_version: cs() }, o = { organization: Is(window.location.href) }, r = qn({ begin_session: "1", metrics: JSON.stringify(n), user_details: JSON.stringify(o) });
    await this.countlyFetch(r);
  }
  async endSession() {
    const i = {};
    i.end_session = "1";
    const e = qn(i);
    await this.countlyFetch(e);
  }
  async sendAutoCaptureEvent(i, e) {
    const n = {};
    n.key = Ns.AUTO_CAPTURE, n.count = 1, n.dur = e, n.segmentation = i;
    const o = [n], r = qn({ events: JSON.stringify(o) });
    await this.countlyFetch(r);
  }
}
const ui = new Tl();
function Dl() {
  const [t] = window.crypto.getRandomValues(new Uint32Array(1));
  return t.toString(1 * -7793 + -8063 + -15872 * -1);
}
function Fl() {
  const t = sessionStorage.getItem("dot-user-id");
  if (t)
    return t;
  const i = Dl();
  return sessionStorage.setItem("dot-user-id", i), i;
}
function Xl(t, i) {
  return i ? i === "user" ? "Front Camera" : "Back Camera" : t;
}
const Ja = (t) => Math.round(t / 500) * 500 / (9534 + 3 * -31 + 8441 * -1), Jt = (t) => t ? t <= -3560 + 3 * 1187 ? Math.round(t * (7895 * 1 + -309 * 14 + -3549)) / (-2666 + 2 * 1343) : Math.round(t / (3707 + 159 * -23)) * (1313 + -1 * -6284 + 7547 * -1) : 443 * -3 + 2808 + 29 * -51, jl = (t) => Math.round(t * (5 * 433 + 4243 * -1 + 416 * 5)) / 2;
class Ml {
  constructor() {
    j(this, "countly", ui);
  }
  createSegmentation(i) {
    return { appVersion: cs(), ...i };
  }
  init(i) {
    if (bx())
      return;
    const e = Fl();
    ui.init(e, i);
  }
  endSession() {
    ui.endSession();
  }
}
class Jl extends Ml {
  constructor() {
    super(...arguments);
    j(this, "captureProcessAnalytics", []);
  }
  trackCaptureProcess(e) {
    this.captureProcessAnalytics.push(e);
  }
}
class Ul extends Jl {
  trackLivenessProcess(i) {
    var u, h, p, v, E, B, k, K, G, F;
    if (!i.length || !this.captureProcessAnalytics.length)
      return;
    const [e, n, o] = i, [r, a] = this.captureProcessAnalytics, g = jl(r.averageFps + (a == null ? void 0 : a.averageFps)) / (8567 + 5 * -1713), s = Ja(r.captureProcessDurationInMs), x = Ja(a == null ? void 0 : a["captureProcessDurationInMs"]), C = this.createSegmentation({ faceSizeDistant: Jt((u = e.data.detection) == null ? void 0 : u.faceSize), faceSizeCloseup: Jt((h = o == null ? void 0 : o.data.detection) == null ? void 0 : h.faceSize), faceSizeMiddle: Jt((p = n.data.detection) == null ? void 0 : p.faceSize), confidenceDistant: Jt((v = e.data.detection) == null ? void 0 : v.confidence), confidenceCloseup: Jt((E = o == null ? void 0 : o.data.detection) == null ? void 0 : E.confidence), confidenceMiddle: Jt((B = n.data.detection) == null ? void 0 : B.confidence), imageResolution: ((K = (k = e.data) == null ? void 0 : k["imageResolution"]) == null ? void 0 : K.width) + "x" + ((F = (G = e.data) == null ? void 0 : G["imageResolution"]) == null ? void 0 : F.height), averageFps: g, captureTimeCloseup: x > -15760 + -145 * -109 ? ">45" : "" + x, captureTimeDistant: s > -9230 + 1852 * 5 ? ">30" : "" + s, camera: Xl(r == null ? void 0 : r.deviceName, r == null ? void 0 : r.facingMode), instructionSet: r.instructionSet });
    this.countly.sendAutoCaptureEvent(C, s + x);
  }
}
const Ys = new Ul();
function Ql(t) {
  const [i, e] = Te($t.LOADING), [n, o] = Te(!1), [r, a] = Te(), g = Co((x) => {
    Pi(kn.STATUS_CHANGED, {
      state: $t.ERROR,
      error: x
    }), o(!1), t(x), a(x), e($t.ERROR);
  }, [t]), s = Co((x) => {
    x !== $t.WAITING && (e(x), Pi(kn.STATUS_CHANGED, {
      state: x
    }));
  }, []);
  return {
    appState: i,
    isCameraReady: n,
    setIsCameraReady: o,
    handleAppStateChange: s,
    handleError: g,
    error: r,
    analytics: Ys
  };
}
const zl = ({
  props: t
}) => (Ce(() => {
  Ys.init("d5ca54dabfb1a2c72d7090c9c8980252a879da44");
}, []), t ? se(aI, {
  target: t.styleTarget,
  children: se(AI, {
    value: Ql(t.onError),
    children: se(Dg, {
      children: se(Ll, {
        ...t
      })
    })
  })
}) : null);
u0(zl, "x-dot-magnifeye-liveness", ["props"]);
