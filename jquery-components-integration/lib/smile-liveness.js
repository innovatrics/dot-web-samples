var zs = Object.defineProperty;
var $s = (t, o, e) => o in t ? zs(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e;
var Q = (t, o, e) => ($s(t, typeof o != "symbol" ? o + "" : o, e), e);
var Vn, Z, $a, qa, wt, Jr, _a, ho, eg, Kn = {}, tg = [], qs = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ki = Array.isArray;
function rt(t, o) {
  for (var e in o)
    t[e] = o[e];
  return t;
}
function ng(t) {
  var o = t.parentNode;
  o && o.removeChild(t);
}
function be(t, o, e) {
  var n, i, r, a = {};
  for (r in o)
    r == "key" ? n = o[r] : r == "ref" ? i = o[r] : a[r] = o[r];
  if (arguments.length > 181 + 179 * -1 && (a.children = arguments.length > 8422 * -1 + -7364 + 15789 ? Vn.call(arguments, -6246 + -71 * -98 + 142 * -5) : e), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      void (-5524 + 2 * 2762) === a[r] && (a[r] = t.defaultProps[r]);
  return Bn(t, a, n, i, null);
}
function Bn(t, o, e, n, i) {
  var r = {};
  r.type = t, r.props = o, r.key = e, r.ref = n, r.__k = null, r.__ = null, r.__b = 0, r.__e = null, r.__d = void (-5031 + 173 * -53 + -10 * -1420), r.__c = null, r.constructor = void (-1 * -3662 + 3160 + -18 * 379), r.__v = i ?? ++$a, r.__i = -(4626 * -2 + 769 * 3 + 6946), r.__u = 0;
  var a = r;
  return i == null && Z.vnode != null && Z.vnode(a), a;
}
function _s() {
  var t = {};
  return t.current = null, t;
}
function Te(t) {
  return t.children;
}
function We(t, o) {
  this.props = t, this.context = o;
}
function tn(t, o) {
  if (o == null)
    return t.__ ? tn(t.__, t.__i + (-1572 + -212 * 3 + 2209)) : null;
  for (var e; o < t.__k.length; o++)
    if ((e = t.__k[o]) != null && e.__e != null)
      return e.__e;
  return typeof t.type == "function" ? tn(t) : null;
}
function ig(t) {
  var o, e;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, o = -5252 + -29 * 307 + -2831 * -5; o < t.__k.length; o++)
      if ((e = t.__k[o]) != null && e.__e != null) {
        t.__e = t.__c.base = e.__e;
        break;
      }
    return ig(t);
  }
}
function mo(t) {
  (!t.__d && (t.__d = !0) && wt.push(t) && !pi.__r++ || Jr !== Z.debounceRendering) && ((Jr = Z.debounceRendering) || _a)(pi);
}
function pi() {
  var t, o, e, n, i, r, a, g, s;
  for (wt.sort(ho); t = wt.shift(); )
    t.__d && (o = wt.length, n = void (117 * -46 + 9754 + 2186 * -2), r = (i = (e = t).__v).__e, g = [], s = [], (a = e.__P) && ((n = rt({}, i)).__v = i.__v + (16 * -35 + -8683 + 9244), Z.vnode && Z.vnode(n), $o(a, n, i, e.__n, void (1 * 473 + -9027 + -7 * -1222) !== a.ownerSVGElement, -5937 + 121 * -23 + 8752 & i.__u ? [r] : null, g, r ?? tn(i), !!(-16926 + -122 * -139 & i.__u), s), n.__.__k[n.__i] = n, ag(g, n, s), n.__e != r && ig(n)), wt.length > o && wt.sort(ho));
  pi.__r = 3 * -878 + -7691 + -1475 * -7;
}
function og(t, o, e, n, i, r, a, g, s, x, C) {
  var u, f, p, v, w, K = n && n.__k || tg, G = o.length;
  for (e.__d = s, e0(e, o, K), s = e.__d, u = 3025 + 1 * 7863 + 4 * -2722; u < G; u++)
    (p = e.__k[u]) != null && typeof p != "boolean" && typeof p != "function" && (f = -(-203 + -2 * 2273 + -950 * -5) === p.__i ? Kn : K[p.__i] || Kn, p.__i = u, $o(t, p, f, i, r, a, g, s, x, C), v = p.__e, p.ref && f.ref != p.ref && (f.ref && qo(f.ref, null, p), C.push(p.ref, p.__c || v, p)), w == null && v != null && (w = v), 1 * -17206 + -85491 + 1 * 168233 & p.__u || f.__k === p.__k ? s = rg(p, s, t) : typeof p.type == "function" && void (-8 * -467 + -2945 * -1 + -6681 * 1) !== p.__d ? s = p.__d : v && (s = v.nextSibling), p.__d = void (-112 * -30 + 9580 + -2 * 6470), p.__u &= -(-974 * -302 + 246008 + -343547));
  e.__d = s, e.__e = w;
}
function e0(t, o, e) {
  var n, i, r, a, g, s = o.length, x = e.length, C = x, u = -5991 + -522 * 16 + 1 * 14343;
  for (t.__k = [], n = 14576 + 2 * -7288; n < s; n++)
    (i = t.__k[n] = (i = o[n]) == null || typeof i == "boolean" || typeof i == "function" ? null : typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? Bn(null, i, null, null, i) : Ki(i) ? Bn(Te, { children: i }, null, null, null) : void (1 * -7507 + -7601 + 15108) === i.constructor && i.__b > 0 ? Bn(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) != null ? (i.__ = t, i.__b = t.__b + (-7896 * 1 + -2068 + 5 * 1993), g = t0(i, e, a = n + u, C), i.__i = g, r = null, -(1642 + 174 * -18 + 1 * 1491) !== g && (C--, (r = e[g]) && (r.__u |= 103279 + -1 * -27793)), r == null || r.__v === null ? (-(-14972 + -21 * -713) == g && u--, typeof i.type != "function" && (i.__u |= 103787 * 1 + -16 * -1526 + -33 * 1899)) : g !== a && (g === a + (123 * -78 + -5 * -1642 + 277 * 5) ? u++ : g > a ? C > s - a ? u += g - a : u-- : u = g < a && g == a - (2686 * 1 + 6535 + 9220 * -1) ? g - a : -8956 * -1 + 1 * -3691 + -5265, g !== n + u && (i.__u |= 14749 * -3 + 2 * -43678 + 197139))) : (r = e[n]) && r.key == null && r.__e && (r.__e == t.__d && (t.__d = tn(r)), bo(r, r, !(-135 * 42 + -4087 + 82 * 119)), e[n] = null, C--);
  if (C)
    for (n = 82 * 85 + 1 * 865 + -7835; n < x; n++)
      (r = e[n]) != null && 10433 + -10433 * 1 == (-48 * 1536 + 129640 + 75160 & r.__u) && (r.__e == t.__d && (t.__d = tn(r)), bo(r, r));
}
function rg(t, o, e) {
  var n, i;
  if (typeof t.type == "function") {
    for (n = t.__k, i = -912 + 2146 * -1 + 3058; n && i < n.length; i++)
      n[i] && (n[i].__ = t, o = rg(n[i], o, e));
    return o;
  }
  return t.__e != o && (e.insertBefore(t.__e, o || null), o = t.__e), o && o.nextSibling;
}
function at(t, o) {
  return o = o || [], t == null || typeof t == "boolean" || (Ki(t) ? t.some(function(e) {
    at(e, o);
  }) : o.push(t)), o;
}
function t0(t, o, e, n) {
  var i = t.key, r = t.type, a = e - (1013 + 1 * -3797 + 5 * 557), g = e + 1, s = o[e];
  if (s === null || s && i == s.key && r === s.type)
    return e;
  if (n > (s != null && 3 * -2605 + -47 * -151 + 718 == (-71 * -1795 + -201 * -1168 + -231141 * 1 & s.__u) ? 1 * -1295 + 2 * -359 + -1 * -2014 : 1 * -4625 + 11 * -257 + 7452))
    for (; a >= 6 * -419 + -7228 + 9742 || g < o.length; ) {
      if (a >= 1 * 395 + 1 * -767 + 372) {
        if ((s = o[a]) && -3305 * 3 + 1539 + 8376 == (-8237 * 19 + 92522 + -195053 * -1 & s.__u) && i == s.key && r === s.type)
          return a;
        a--;
      }
      if (g < o.length) {
        if ((s = o[g]) && !(-28 * -7250 + -108618 + -2446 * -15 & s.__u) && i == s.key && r === s.type)
          return g;
        g++;
      }
    }
  return -(-1499 * 5 + 1 * 7247 + 249 * 1);
}
function Qr(t, o, e) {
  o[7 * -911 + -6282 + 1 * 12659] === "-" ? t.setProperty(o, e ?? "") : t[o] = e == null ? "" : typeof e != "number" || qs.test(o) ? e : e + "px";
}
function zn(t, o, e, n, i) {
  var r;
  e:
    if (o === "style")
      if (typeof e == "string")
        t.style.cssText = e;
      else {
        if (typeof n == "string" && (t.style.cssText = n = ""), n)
          for (o in n)
            e && o in e || Qr(t.style, o, "");
        if (e)
          for (o in e)
            n && e[o] === n[o] || Qr(t.style, o, e[o]);
      }
    else if (o[-7171 + 15 * 419 + 886] === "o" && o[1] === "n")
      r = o !== (o = o.replace(/(PointerCapture)$|Capture$/, "$1")), o = o.toLowerCase() in t ? o.toLowerCase().slice(-542 * -8 + -9 * 383 + -887 * 1) : o.slice(133 * -46 + 14 * -254 + 9676), t.l || (t.l = {}), t.l[o + r] = e, e ? n ? e.u = n.u : (e.u = Date.now(), t.addEventListener(o, r ? $r : zr, r)) : t.removeEventListener(o, r ? $r : zr, r);
    else {
      if (i)
        o = o.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (o !== "width" && o !== "height" && o !== "href" && o !== "list" && o !== "form" && o !== "tabIndex" && o !== "download" && o !== "rowSpan" && o !== "colSpan" && o !== "role" && o in t)
        try {
          t[o] = e ?? "";
          break e;
        } catch {
        }
      typeof e == "function" || (e == null || !(-188 * 31 + 1 * -74 + -5903 * -1) === e && o[4] !== "-" ? t.removeAttribute(o) : t.setAttribute(o, e));
    }
}
function zr(t) {
  var o = this.l[t.type + !1];
  if (t.t) {
    if (t.t <= o.u)
      return;
  } else
    t.t = Date.now();
  return o(Z.event ? Z.event(t) : t);
}
function $r(t) {
  return this.l[t.type + !(3179 * 1 + 5527 * -1 + -4 * -587)](Z.event ? Z.event(t) : t);
}
function $o(t, o, e, n, i, r, a, g, s, x) {
  var C, u, f, p, v, w, K, G, W, O, J, F, j, k, ee, z = o.type;
  if (void (47 * 141 + -8731 * -1 + -15358) !== o.constructor)
    return null;
  128 & e.__u && (s = !!(2 * 4082 + 1862 + 4997 * -2 & e.__u), r = [g = o.__e = e.__e]), (C = Z.__b) && C(o);
  e:
    if (typeof z == "function")
      try {
        if (G = o.props, W = (C = z.contextType) && n[C.__c], O = C ? W ? W.props.value : C.__ : n, e.__c ? K = (u = o.__c = e.__c).__ = u.__E : ("prototype" in z && z.prototype.render ? o.__c = u = new z(G, O) : (o.__c = u = new We(G, O), u.constructor = z, u.render = i0), W && W.sub(u), u.props = G, u.state || (u.state = {}), u.context = O, u.__n = n, f = u.__d = !(7190 + 17 * -83 + -1 * 5779), u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), z.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = rt({}, u.__s)), rt(u.__s, z.getDerivedStateFromProps(G, u.__s))), p = u.props, v = u.state, u.__v = o, f)
          z.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (z.getDerivedStateFromProps == null && G !== p && u.componentWillReceiveProps != null && u.componentWillReceiveProps(G, O), !u.__e && (u.shouldComponentUpdate != null && !(-9456 + -87 * -94 + 1279) === u.shouldComponentUpdate(G, u.__s, O) || o.__v === e.__v)) {
            for (o.__v !== e.__v && (u.props = G, u.state = u.__s, u.__d = !(-26 * -273 + 1 * 9421 + 6 * -2753)), o.__e = e.__e, o.__k = e.__k, o.__k.forEach(function(te) {
              te && (te.__ = o);
            }), J = 7008 + -6977 * -1 + -13985; J < u._sb.length; J++)
              u.__h.push(u._sb[J]);
            u._sb = [], u.__h.length && a.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(G, u.__s, O), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(p, v, w);
          });
        }
        if (u.context = O, u.props = G, u.__P = t, u.__e = !(-17 * 370 + -7373 + -854 * -16), F = Z.__r, j = 0, "prototype" in z && z.prototype.render) {
          for (u.state = u.__s, u.__d = !1, F && F(o), C = u.render(u.props, u.state, u.context), k = 6902 + -6585 * 1 + -1 * 317; k < u._sb.length; k++)
            u.__h.push(u._sb[k]);
          u._sb = [];
        } else
          do
            u.__d = !(1 * 2954 + 3479 + -6432), F && F(o), C = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++j < -1427 * -5 + -8869 + 1759 * 1);
        u.state = u.__s, u.getChildContext != null && (n = rt(rt({}, n), u.getChildContext())), f || u.getSnapshotBeforeUpdate == null || (w = u.getSnapshotBeforeUpdate(p, v)), og(t, Ki(ee = C != null && C.type === Te && C.key == null ? C.props.children : C) ? ee : [ee], o, e, n, i, r, a, g, s, x), u.base = o.__e, o.__u &= -(-4327 * 2 + 599 * -5 + 5 * 2362), u.__h.length && a.push(u), K && (u.__E = u.__ = null);
      } catch (te) {
        o.__v = null, s || r != null ? (o.__e = g, o.__u |= s ? -1 * -8791 + -469 + -8162 : 4 * -49 + -2 * -4951 + -9674, r[r.indexOf(g)] = null) : (o.__e = e.__e, o.__k = e.__k), Z.__e(te, o, e);
      }
    else
      r == null && o.__v === e.__v ? (o.__k = e.__k, o.__e = e.__e) : o.__e = n0(e.__e, o, e, n, i, r, a, s, x);
  (C = Z.diffed) && C(o);
}
function ag(t, o, e) {
  o.__d = void (1 * 9199 + 9 * 90 + 1 * -10009);
  for (var n = -64 * -136 + -1763 + 11 * -631; n < e.length; n++)
    qo(e[n], e[++n], e[++n]);
  Z.__c && Z.__c(o, t), t.some(function(i) {
    try {
      t = i.__h, i.__h = [], t.some(function(r) {
        r.call(i);
      });
    } catch (r) {
      Z.__e(r, i.__v);
    }
  });
}
function n0(t, o, e, n, i, r, a, g, s) {
  var x, C, u, f, p, v, w, K = e.props, G = o.props, W = o.type;
  if (W === "svg" && (i = !(-5836 + 4 * 1459)), r != null) {
    for (x = -8740 + 748 * 3 + 6496; x < r.length; x++)
      if ((p = r[x]) && "setAttribute" in p == !!W && (W ? p.localName === W : p.nodeType === 3)) {
        t = p, r[x] = null;
        break;
      }
  }
  if (t == null) {
    if (W === null)
      return document.createTextNode(G);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", W) : document.createElement(W, G.is && G), r = null, g = !(17832 + -11 * 1621);
  }
  if (W === null)
    K === G || g && t.data === G || (t.data = G);
  else {
    if (r = r && Vn.call(t.childNodes), K = e.props || Kn, !g && r != null)
      for (K = {}, x = -2604 + -1519 * 1 + 4123; x < t.attributes.length; x++)
        K[(p = t.attributes[x]).name] = p.value;
    for (x in K)
      p = K[x], x == "children" || (x == "dangerouslySetInnerHTML" ? u = p : x === "key" || x in G || zn(t, x, null, p, i));
    for (x in G)
      p = G[x], x == "children" ? f = p : x == "dangerouslySetInnerHTML" ? C = p : x == "value" ? v = p : x == "checked" ? w = p : x === "key" || g && typeof p != "function" || K[x] === p || zn(t, x, p, K[x], i);
    if (C)
      g || u && (C.__html === u.__html || C.__html === t.innerHTML) || (t.innerHTML = C.__html), o.__k = [];
    else if (u && (t.innerHTML = ""), og(t, Ki(f) ? f : [f], o, e, n, i && W !== "foreignObject", r, a, r ? r[4479 + -1 * 1597 + -1441 * 2] : e.__k && tn(e, -8725 + 3431 * 2 + -23 * -81), g, s), r != null)
      for (x = r.length; x--; )
        r[x] != null && ng(r[x]);
    g || (x = "value", void (3 * -1687 + 8902 * -1 + 1 * 13963) !== v && (v !== t[x] || W === "progress" && !v || W === "option" && v !== K[x]) && zn(t, x, v, K[x], !(-643 * 6 + 4104 + -49 * 5)), x = "checked", void (13 * -211 + -7623 + 73 * 142) !== w && w !== t[x] && zn(t, x, w, K[x], !(9 * 800 + 3642 + -37 * 293)));
  }
  return t;
}
function qo(t, o, e) {
  try {
    typeof t == "function" ? t(o) : t.current = o;
  } catch (n) {
    Z.__e(n, e);
  }
}
function bo(t, o, e) {
  var n, i;
  if (Z.unmount && Z.unmount(t), (n = t.ref) && (n.current && n.current !== t.__e || qo(n, null, o)), (n = t.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (r) {
        Z.__e(r, o);
      }
    n.base = n.__P = null, t.__c = void (298 * -19 + -8079 + 13741);
  }
  if (n = t.__k)
    for (i = 206 + 1 * 8357 + -8563; i < n.length; i++)
      n[i] && bo(n[i], o, e || typeof t.type != "function");
  e || t.__e == null || ng(t.__e), t.__ = t.__e = t.__d = void (-6445 * 1 + -5916 + 12361);
}
function i0(t, o, e) {
  return this.constructor(t, e);
}
function dt(t, o, e) {
  var n, i, r, a;
  Z.__ && Z.__(t, o), i = (n = typeof e == "function") ? null : e && e.__k || o.__k, r = [], a = [], $o(o, t = (!n && e || o).__k = be(Te, null, [t]), i || Kn, Kn, void (2737 + -1126 * 6 + 4019) !== o.ownerSVGElement, !n && e ? [e] : i ? null : o.firstChild ? Vn.call(o.childNodes) : null, r, !n && e ? e : i ? i.__e : o.firstChild, n, a), ag(r, t, a);
}
function _o(t, o) {
  dt(t, o, _o);
}
function er(t, o, e) {
  var n, i, r, a, g = rt({}, t.props);
  for (r in t.type && t.type.defaultProps && (a = t.type.defaultProps), o)
    r == "key" ? n = o[r] : r == "ref" ? i = o[r] : g[r] = o[r] === void 0 && void (-6515 + 7 * 1348 + -2921 * 1) !== a ? a[r] : o[r];
  return arguments.length > 80 * -32 + -3590 * -1 + -1028 && (g.children = arguments.length > -3722 + -5 * -1920 + -1 * 5875 ? Vn.call(arguments, -401 * -10 + -9149 + 5141) : e), Bn(t.type, g, n || t.key, i || t.ref, null);
}
function tr(t, o) {
  var e = { __c: o = "__cC" + eg++, __: t, Consumer: function(n, i) {
    return n.children(i);
  }, Provider: function(n) {
    var i, r;
    return this.getChildContext || (i = [], (r = {})[o] = this, this.getChildContext = function() {
      return r;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && i.some(function(g) {
        g.__e = !0, mo(g);
      });
    }, this.sub = function(a) {
      i.push(a);
      var g = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        i.splice(i.indexOf(a), 1), g && g.call(a);
      };
    }), n.children;
  } };
  return e.Provider.__ = e.Consumer.contextType = e;
}
Vn = tg.slice, Z = { __e: function(t, o, e, n) {
  for (var i, r, a; o = o.__; )
    if ((i = o.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, n || {}), a = i.__d), a)
          return i.__E = i;
      } catch (g) {
        t = g;
      }
  throw t;
} }, $a = 9741 + 1 * -3939 + 3 * -1934, qa = function(t) {
  return t != null && t.constructor == null;
}, We.prototype.setState = function(t, o) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = rt({}, this.state), typeof t == "function" && (t = t(rt({}, e), this.props)), t && rt(e, t), t != null && this.__v && (o && this._sb.push(o), mo(this));
}, We.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !(7973 + -27 * 127 + -284 * 16), t && this.__h.push(t), mo(this));
}, We.prototype.render = Te, wt = [], _a = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ho = function(t, o) {
  return t.__v.__b - o.__v.__b;
}, pi.__r = 6059 + -4670 * -2 + -15399, eg = -4302 + 3812 * 1 + -490 * -1;
function nr() {
  return (nr = Object.assign ? Object.assign.bind() : function(t) {
    for (var o = 2 * 4639 + -116 * -16 + -11133; o < arguments.length; o++) {
      var e = arguments[o];
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }
    return t;
  }).apply(this, arguments);
}
var o0 = ["context", "children"];
function r0(t) {
  this.getChildContext = function() {
    return t.context;
  };
  var o = t.children, e = function(n, i) {
    if (n == null)
      return {};
    var r, a, g = {}, s = Object.keys(n);
    for (a = -499 * -2 + -3474 + 2476; a < s.length; a++)
      i.indexOf(r = s[a]) >= -149 * -67 + 5542 + -15525 || (g[r] = n[r]);
    return g;
  }(t, o0);
  return er(o, e);
}
function a0() {
  var t = {};
  t.detail = {}, t.bubbles = !(1242 * 8 + -16 * 548 + -1168), t.cancelable = !(-70 * -119 + -283 * 13 + -4651);
  var o = new CustomEvent("_preact", t);
  this.dispatchEvent(o), this._vdom = be(r0, nr({}, this._props, { context: o.detail.context }), function e(n, i) {
    if (193 * -36 + -6118 + 13069 === n.nodeType)
      return n.data;
    if (-435 + 1 * -4003 + 4439 !== n.nodeType)
      return null;
    var r = [], a = {}, g = -431 * -5 + -302 * -32 + 53 * -223, s = n.attributes, x = n.childNodes;
    for (g = s.length; g--; )
      s[g].name !== "slot" && (a[s[g].name] = s[g].value, a[gg(s[g].name)] = s[g].value);
    for (g = x.length; g--; ) {
      var C = e(x[g], null), u = x[g].slot;
      u ? a[u] = be(qr, { name: u }, C) : r[g] = C;
    }
    var f = i ? be(qr, null, r) : r;
    return be(i || n.nodeName.toLowerCase(), a, f);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? _o : dt)(this._vdom, this._root);
}
function gg(t) {
  return t.replace(/-(\w)/g, function(o, e) {
    return e ? e.toUpperCase() : "";
  });
}
function g0(t, o, e) {
  if (this._vdom) {
    var n = {};
    n[t] = e = e ?? void (-7817 + 11 * -781 + 14 * 1172), n[gg(t)] = e, this._vdom = er(this._vdom, n), dt(this._vdom, this._root);
  }
}
function s0() {
  dt(this._vdom = null, this._root);
}
function qr(t, o) {
  var e = this;
  return be("slot", nr({}, t, { ref: function(n) {
    n ? (e.ref = n, e._listener || (e._listener = function(i) {
      i.stopPropagation(), i.detail.context = o;
    }, n.addEventListener("_preact", e._listener))) : e.ref.removeEventListener("_preact", e._listener);
  } }));
}
function c0(t, o, e, n) {
  function i() {
    var r = Reflect.construct(HTMLElement, [], i);
    return r._vdomComponent = t, r._root = n && n.shadow ? r.attachShadow({ mode: n.mode || "open" }) : r, r;
  }
  return (i.prototype = Object.create(HTMLElement.prototype)).constructor = i, i.prototype.connectedCallback = a0, i.prototype.attributeChangedCallback = g0, i.prototype.disconnectedCallback = s0, e = e || t.observedAttributes || Object.keys(t.propTypes || {}), i.observedAttributes = e, e.forEach(function(r) {
    Object.defineProperty(i.prototype, r, { get: function() {
      return this._vdom.props[r];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(r, null, a) : (this._props || (this._props = {}), this._props[r] = a, this.connectedCallback());
      var g = typeof a;
      a != null && g !== "string" && g !== "boolean" && g !== "number" || this.setAttribute(r, a);
    } });
  }), customElements.define(o || t.tagName || t.displayName || t.name, i);
}
var ve = function() {
  return ve = Object.assign || function(o) {
    for (var e, n = 1, i = arguments.length; n < i; n++) {
      e = arguments[n];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (o[r] = e[r]);
    }
    return o;
  }, ve.apply(this, arguments);
};
function nn(t, o, e) {
  if (e || arguments.length === 2)
    for (var n = 0, i = o.length, r; n < i; n++)
      (r || !(n in o)) && (r || (r = Array.prototype.slice.call(o, 0, n)), r[n] = o[n]);
  return t.concat(r || Array.prototype.slice.call(o));
}
function I0(t) {
  var o = Object.create(null);
  return function(e) {
    return o[e] === void 0 && (o[e] = t(e)), o[e];
  };
}
var x0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, l0 = I0(function(t) {
  return x0.test(t) || t.charCodeAt(-65 * -69 + 5 * 11 + -4540) === 10758 + -7 * 1521 && t.charCodeAt(-34 * 205 + -2 * -458 + 1 * 6055) === 1 * 5006 + 7727 + -12623 && t.charCodeAt(2) < 101 + -1 * 10;
}), At, _, oo, _r, on = 22 * -58 + -8377 + -7 * -1379, sg = [], ri = [], ea = Z.__b, ta = Z.__r, na = Z.diffed, ia = Z.__c, oa = Z.unmount;
function In(t, o) {
  Z.__h && Z.__h(_, t, on || o), on = 0;
  var e = {};
  e.__ = [], e.__h = [];
  var n = _.__H || (_.__H = e), i = {};
  return i.__V = ri, t >= n.__.length && n.__.push(i), n.__[t];
}
function Ye(t) {
  return on = 1, cg(Ig, t);
}
function cg(t, o, e) {
  var n = In(At++, 2);
  if (n.t = t, !n.__c && (n.__ = [e ? e(o) : Ig(void (640 * 15 + -1706 * 4 + -347 * 8), o), function(g) {
    var s = n.__N ? n.__N[0] : n.__[0], x = n.t(s, g);
    s !== x && (n.__N = [x, n.__[-8730 + -615 * 15 + 17956]], n.__c.setState({}));
  }], n.__c = _, !_.u)) {
    var i = function(g, s, x) {
      if (!n.__c.__H)
        return !0;
      var C = n.__c.__H.__.filter(function(f) {
        return f.__c;
      });
      if (C.every(function(f) {
        return !f.__N;
      }))
        return !r || r.call(this, g, s, x);
      var u = !(949 * -1 + 1200 * -4 + 10 * 575);
      return C.forEach(function(f) {
        if (f.__N) {
          var p = f.__[0];
          f.__ = f.__N, f.__N = void 0, p !== f.__[0] && (u = !0);
        }
      }), !(!u && n.__c.props === g) && (!r || r.call(this, g, s, x));
    };
    _.u = !(-33 * 19 + -81 * 12 + 1599);
    var r = _.shouldComponentUpdate, a = _.componentWillUpdate;
    _.componentWillUpdate = function(g, s, x) {
      if (this.__e) {
        var C = r;
        r = void 0, i(g, s, x), r = C;
      }
      a && a.call(this, g, s, x);
    }, _.shouldComponentUpdate = i;
  }
  return n.__N || n.__;
}
function ue(t, o) {
  var e = In(At++, 3);
  !Z.__s && ir(e.__H, o) && (e.__ = t, e.i = o, _.__H.__h.push(e));
}
function Hi(t, o) {
  var e = In(At++, 4);
  !Z.__s && ir(e.__H, o) && (e.__ = t, e.i = o, _.__h.push(e));
}
function ft(t) {
  return on = 6390 + -5 * 1277, Je(function() {
    var o = {};
    return o.current = t, o;
  }, []);
}
function u0(t, o, e) {
  on = 179 * -46 + 778 + 7462, Hi(function() {
    return typeof t == "function" ? (t(o()), function() {
      return t(null);
    }) : t ? (t.current = o(), function() {
      return t.current = null;
    }) : void (8794 * 1 + 79 * -85 + -2079);
  }, e == null ? e : e.concat(t));
}
function Je(t, o) {
  var e = In(At++, 7);
  return ir(e.__H, o) ? (e.__V = t(), e.i = o, e.__h = t, e.__V) : e.__;
}
function hi(t, o) {
  return on = -4828 + -6 * -806, Je(function() {
    return t;
  }, o);
}
function Wi(t) {
  var o = _.context[t.__c], e = In(At++, -4221 + -30 * -141);
  return e.c = t, o ? (e.__ == null && (e.__ = !(-170 * -40 + 1 * 7309 + -3 * 4703), o.sub(_)), o.props.value) : t.__;
}
function yo(t, o) {
  Z.useDebugValue && Z.useDebugValue(o ? o(t) : t);
}
function C0() {
  var t = In(At++, 11);
  if (!t.__) {
    for (var o = _.__v; o !== null && !o.__m && o.__ !== null; )
      o = o.__;
    var e = o.__m || (o.__m = [-2815 + -73 * -113 + -247 * 22, 1 * 2274 + -6384 + 1 * 4110]);
    t.__ = "P" + e[-8140 + 3 * 3241 + -1 * 1583] + "-" + e[-1 * -534 + -2756 + 2223]++;
  }
  return t.__;
}
function d0() {
  for (var t; t = sg.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(ai), t.__H.__h.forEach(vo), t.__H.__h = [];
      } catch (o) {
        t.__H.__h = [], Z.__e(o, t.__v);
      }
}
Z.__b = function(t) {
  _ = null, ea && ea(t);
}, Z.__r = function(t) {
  ta && ta(t), At = 0;
  var o = (_ = t.__c).__H;
  o && (oo === _ ? (o.__h = [], _.__h = [], o.__.forEach(function(e) {
    e.__N && (e.__ = e.__N), e.__V = ri, e.__N = e.i = void (-1086 * 9 + 914 + 2 * 4430);
  })) : (o.__h.forEach(ai), o.__h.forEach(vo), o.__h = [], At = 22 * -7 + -5703 + 5857)), oo = _;
}, Z.diffed = function(t) {
  na && na(t);
  var o = t.__c;
  o && o.__H && (o.__H.__h.length && (-394 * -1 + 119 * 3 + -150 * 5 !== sg.push(o) && _r === Z.requestAnimationFrame || ((_r = Z.requestAnimationFrame) || A0)(d0)), o.__H.__.forEach(function(e) {
    e.i && (e.__H = e.i), e.__V !== ri && (e.__ = e.__V), e.i = void (5538 + 15 * -37 + -1661 * 3), e.__V = ri;
  })), oo = _ = null;
}, Z.__c = function(t, o) {
  o.some(function(e) {
    try {
      e.__h.forEach(ai), e.__h = e.__h.filter(function(n) {
        return !n.__ || vo(n);
      });
    } catch (n) {
      o.some(function(i) {
        i.__h && (i.__h = []);
      }), o = [], Z.__e(n, e.__v);
    }
  }), ia && ia(t, o);
}, Z.unmount = function(t) {
  oa && oa(t);
  var o, e = t.__c;
  e && e.__H && (e.__H.__.forEach(function(n) {
    try {
      ai(n);
    } catch (i) {
      o = i;
    }
  }), e.__H = void (5306 + -19 * -315 + -11291), o && Z.__e(o, e.__v));
};
var ra = typeof requestAnimationFrame == "function";
function A0(t) {
  var o, e = function() {
    clearTimeout(n), ra && cancelAnimationFrame(o), setTimeout(t);
  }, n = setTimeout(e, 100);
  ra && (o = requestAnimationFrame(e));
}
function ai(t) {
  var o = _, e = t.__c;
  typeof e == "function" && (t.__c = void 0, e()), _ = o;
}
function vo(t) {
  var o = _;
  t.__c = t.__(), _ = o;
}
function ir(t, o) {
  return !t || t.length !== o.length || o.some(function(e, n) {
    return e !== t[n];
  });
}
function Ig(t, o) {
  return typeof o == "function" ? o(t) : o;
}
function xg(t, o) {
  for (var e in o)
    t[e] = o[e];
  return t;
}
function wo(t, o) {
  for (var e in t)
    if (e !== "__source" && !(e in o))
      return !(10572 + -1 * 10572);
  for (var n in o)
    if (n !== "__source" && t[n] !== o[n])
      return !(-784 * -3 + 1 * -569 + 1 * -1783);
  return !1;
}
function Bo(t) {
  this.props = t;
}
function f0(t, o) {
  function e(i) {
    var r = this.props.ref, a = r == i.ref;
    return !a && r && (r.call ? r(null) : r.current = null), o ? !o(this.props, i) || !a : wo(this.props, i);
  }
  function n(i) {
    return this.shouldComponentUpdate = e, be(t, i);
  }
  return n.displayName = "Memo(" + (t.displayName || t.name) + ")", n.prototype.isReactComponent = !(-4652 * -2 + -1425 + -7879), n.__f = !(-11261 + 1 * 11261), n;
}
(Bo.prototype = new We()).isPureReactComponent = !(2213 * -1 + -2235 + -278 * -16), Bo.prototype.shouldComponentUpdate = function(t, o) {
  return wo(this.props, t) || wo(this.state, o);
};
var aa = Z.__b;
Z.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), aa && aa(t);
};
var p0 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || -4626 * -1 + -3416 + -73 * -37;
function lg(t) {
  function o(e) {
    var n = xg({}, e);
    return delete n.ref, t(n, e.ref || null);
  }
  return o.$$typeof = p0, o.render = o, o.prototype.isReactComponent = o.__f = !(-44 * -83 + 1935 + -5587), o.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", o;
}
var ga = function(t, o) {
  return t == null ? null : at(at(t).map(o));
}, h0 = { map: ga, forEach: ga, count: function(t) {
  return t ? at(t).length : 3 * -1948 + -1 * 6209 + 1 * 12053;
}, only: function(t) {
  var o = at(t);
  if (-213 * 27 + 5388 + 364 !== o.length)
    throw "Children.only";
  return o[-4345 * 2 + 4249 * -2 + 2 * 8594];
}, toArray: at }, m0 = Z.__e;
Z.__e = function(t, o, e, n) {
  if (t.then) {
    for (var i, r = o; r = r.__; )
      if ((i = r.__c) && i.__c)
        return o.__e == null && (o.__e = e.__e, o.__k = e.__k), i.__c(t, o);
  }
  m0(t, o, e, n);
};
var sa = Z.unmount;
function ug(t, o, e) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), t.__c.__H = null), (t = xg({}, t)).__c != null && (t.__c.__P === e && (t.__c.__P = o), t.__c = null), t.__k = t.__k && t.__k.map(function(n) {
    return ug(n, o, e);
  })), t;
}
function Cg(t, o, e) {
  return t && e && (t.__v = null, t.__k = t.__k && t.__k.map(function(n) {
    return Cg(n, o, e);
  }), t.__c && t.__c.__P === o && (t.__e && e.appendChild(t.__e), t.__c.__e = !(5725 + -5821 * 1 + 96), t.__c.__P = e)), t;
}
function gi() {
  this.__u = 15 * -295 + -7897 + 1 * 12322, this.t = null, this.__b = null;
}
function dg(t) {
  var o = t.__.__c;
  return o && o.__a && o.__a(t);
}
function b0(t) {
  var o, e, n;
  function i(r) {
    if (o || (o = t()).then(function(a) {
      e = a.default || a;
    }, function(a) {
      n = a;
    }), n)
      throw n;
    if (!e)
      throw o;
    return be(e, r);
  }
  return i.displayName = "Lazy", i.__f = !(-227 * -13 + -5 * -1525 + -10576), i;
}
function bn() {
  this.u = null, this.o = null;
}
Z.unmount = function(t) {
  var o = t.__c;
  o && o.__R && o.__R(), o && -3068 + 9412 * 1 + -6312 & t.__u && (t.type = null), sa && sa(t);
}, (gi.prototype = new We()).__c = function(t, o) {
  var e = o.__c, n = this;
  n.t == null && (n.t = []), n.t.push(e);
  var i = dg(n.__v), r = !(4087 + -3177 * -2 + 5 * -2088), a = function() {
    r || (r = !(1 * 9671 + 43 * 1 + -9714), e.__R = null, i ? i(g) : g());
  };
  e.__R = a;
  var g = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var s = n.state.__a;
        n.__v.__k[-497 * -16 + -203 * -29 + 659 * -21] = Cg(s, s.__c.__P, s.__c.__O);
      }
      var x;
      for (n.setState({ __a: n.__b = null }); x = n.t.pop(); )
        x.forceUpdate();
    }
  };
  n.__u++ || -3337 + -4099 * 1 + 1867 * 4 & o.__u || n.setState({ __a: n.__b = n.__v.__k[125 * -41 + -20 * 5 + 25 * 209] }), t.then(a, a);
}, gi.prototype.componentWillUnmount = function() {
  this.t = [];
}, gi.prototype.render = function(t, o) {
  if (this.__b) {
    if (this.__v.__k) {
      var e = document.createElement("div"), n = this.__v.__k[-49 * -186 + -7428 + -1686].__c;
      this.__v.__k[-4339 + -1 * 4534 + 467 * 19] = ug(this.__b, e, n.__O = n.__P);
    }
    this.__b = null;
  }
  var i = o.__a && be(Te, null, t.fallback);
  return i && (i.__u &= -(1151 * 7 + 3930 + -11954)), [be(Te, null, o.__a ? null : t.children), i];
};
var ca = function(t, o, e) {
  if (++e[3777 * -1 + -5384 + -9 * -1018] === e[7747 * -1 + -1 * -1162 + 6585] && t.o.delete(o), t.props.revealOrder && (t.props.revealOrder[4637 * -1 + 5696 + -1059] !== "t" || !t.o.size))
    for (e = t.u; e; ) {
      for (; e.length > -4846 + -899 * -10 + 4141 * -1; )
        e.pop()();
      if (e[-1 * -7589 + -4851 + -119 * 23] < e[0])
        break;
      t.u = e = e[1 * -957 + -4300 + 1753 * 3];
    }
};
function y0(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function v0(t) {
  var o = this, e = t.i;
  o.componentWillUnmount = function() {
    dt(null, o.l), o.l = null, o.i = null;
  }, o.i && o.i !== e && o.componentWillUnmount(), o.l || (o.i = e, o.l = { nodeType: 1, parentNode: e, childNodes: [], appendChild: function(n) {
    this.childNodes.push(n), o.i.appendChild(n);
  }, insertBefore: function(n, i) {
    this.childNodes.push(n), o.i.appendChild(n);
  }, removeChild: function(n) {
    this.childNodes.splice(this.childNodes.indexOf(n) >>> 1 * 7187 + -9298 + 2112, 1), o.i.removeChild(n);
  } }), dt(be(y0, { context: o.context }, t.__v), o.l);
}
function w0(t, o) {
  var e = {};
  e.__v = t, e.i = o;
  var n = be(v0, e);
  return n.containerInfo = o, n;
}
(bn.prototype = new We()).__a = function(t) {
  var o = this, e = dg(o.__v), n = o.o.get(t);
  return n[5256 + -1231 * -5 + -11411]++, function(i) {
    var r = function() {
      o.props.revealOrder ? (n.push(i), ca(o, t, n)) : i();
    };
    e ? e(r) : r();
  };
}, bn.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var o = at(t.children);
  t.revealOrder && t.revealOrder[5108 * 1 + -5229 + 1 * 121] === "b" && o.reverse();
  for (var e = o.length; e--; )
    this.o.set(o[e], this.u = [-6673 + -1091 * 2 + 27 * 328, 29 * -26 + -1 * -4895 + -1 * 4141, this.u]);
  return t.children;
}, bn.prototype.componentDidUpdate = bn.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(o, e) {
    ca(t, e, o);
  });
};
var Ag = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 176227 + 12 * -9677, B0 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, S0 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, G0 = /[A-Z0-9]/g, Z0 = typeof document < "u", k0 = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
};
function K0(t, o, e) {
  return o.__k == null && (o.textContent = ""), dt(t, o), typeof e == "function" && e(), t ? t.__c : null;
}
function H0(t, o, e) {
  return _o(t, o), typeof e == "function" && e(), t ? t.__c : null;
}
We.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(We.prototype, t, { configurable: !(15 * -19 + -7007 + -3646 * -2), get: function() {
    return this["UNSAFE_" + t];
  }, set: function(o) {
    var e = {};
    e.configurable = !(5753 + -1 * -7556 + 1 * -13309), e.writable = !(717 * 10 + -4038 + 18 * -174), e.value = o, Object.defineProperty(this, t, e);
  } });
});
var Ia = Z.event;
function W0() {
}
function O0() {
  return this.cancelBubble;
}
function V0() {
  return this.defaultPrevented;
}
Z.event = function(t) {
  return Ia && (t = Ia(t)), t.persist = W0, t.isPropagationStopped = O0, t.isDefaultPrevented = V0, t.nativeEvent = t;
};
var si = {};
si.enumerable = !(25 * -31 + -7235 + -1 * -8011), si.configurable = !(8503 + 593 * 8 + -13247 * 1), si.get = function() {
  return this.class;
};
var or, R0 = si, xa = Z.vnode;
Z.vnode = function(t) {
  typeof t.type == "string" && function(o) {
    var e = o.props, n = o.type, i = {};
    for (var r in e) {
      var a = e[r];
      if (!(r === "value" && "defaultValue" in e && a == null || Z0 && r === "children" && n === "noscript" || r === "class" || r === "className")) {
        var g = r.toLowerCase();
        r === "defaultValue" && "value" in e && e.value == null ? r = "value" : r === "download" && !(3 * -2867 + 8426 + 175) === a ? a = "" : g === "ondoubleclick" ? r = "ondblclick" : g !== "onchange" || n !== "input" && n !== "textarea" || k0(e.type) ? g === "onfocus" ? r = "onfocusin" : g === "onblur" ? r = "onfocusout" : S0.test(r) ? r = g : n.indexOf("-") === -1 && B0.test(r) ? r = r.replace(G0, "-$&").toLowerCase() : a === null && (a = void (-68 * -2 + -106 * -4 + -560 * 1)) : g = r = "oninput", g === "oninput" && i[r = g] && (r = "oninputCapture"), i[r] = a;
      }
    }
    n == "select" && i.multiple && Array.isArray(i.value) && (i.value = at(e.children).forEach(function(s) {
      s.props.selected = -(1663 * -1 + -1 * 1309 + 2973) != i.value.indexOf(s.props.value);
    })), n == "select" && i.defaultValue != null && (i.value = at(e.children).forEach(function(s) {
      s.props.selected = i.multiple ? i.defaultValue.indexOf(s.props.value) != -1 : i.defaultValue == s.props.value;
    })), e.class && !e.className ? (i.class = e.class, Object.defineProperty(i, "className", R0)) : (e.className && !e.class || e.class && e.className) && (i.class = i.className = e.className), o.props = i;
  }(t), t.$$typeof = Ag, xa && xa(t);
};
var la = Z.__r;
Z.__r = function(t) {
  la && la(t), or = t.__c;
};
var ua = Z.diffed;
Z.diffed = function(t) {
  ua && ua(t);
  var o = t.props, e = t.__e;
  e != null && t.type === "textarea" && "value" in o && o.value !== e.value && (e.value = o.value == null ? "" : o.value), or = null;
};
var fg = {};
fg.readContext = function(t) {
  return or.__n[t.__c].props.value;
};
var pg = {};
pg.current = fg;
var hg = {};
hg.ReactCurrentDispatcher = pg;
var E0 = hg;
function P0(t) {
  return be.bind(null, t);
}
function Oi(t) {
  return !!t && t.$$typeof === Ag;
}
function N0(t) {
  return Oi(t) && t.type === Te;
}
function Y0(t) {
  return Oi(t) ? er.apply(null, arguments) : t;
}
function L0(t) {
  return !!t.__k && (dt(null, t), !(2 * -4207 + 158 * -5 + 52 * 177));
}
function T0(t) {
  return t && (t.base || -7404 + 101 * -3 + -2 * -3854 === t.nodeType && t) || null;
}
var F0 = function(t, o) {
  return t(o);
}, D0 = function(t, o) {
  return t(o);
}, X0 = Te;
function mg(t) {
  t();
}
function j0(t) {
  return t;
}
function M0() {
  return [!(-3 * -2201 + 6921 + -13523), mg];
}
var U0 = Hi, J0 = Oi;
function Q0(t, o) {
  var e = o(), n = Ye({ h: { __: e, v: o } }), i = n[5914 + 1 * 5561 + -11475].h, r = n[-1 * -1074 + 96 * -70 + 5647];
  return Hi(function() {
    i.__ = e, i.v = o, ro(i) && r({ h: i });
  }, [t, e, o]), ue(function() {
    return ro(i) && r({ h: i }), t(function() {
      ro(i) && r({ h: i });
    });
  }, [t]), e;
}
function ro(t) {
  var o, e, n = t.v, i = t.__;
  try {
    var r = n();
    return !((o = i) === (e = r) && (-9988 + -1 * 7997 + -33 * -545 !== o || (-428 * -8 + -74 * -37 + -61 * 101) / o == (3901 + 1 * 6183 + -10083) / e) || o != o && e != e);
  } catch {
    return !(1292 * -5 + 4615 + 1845);
  }
}
var Y = {};
Y.useState = Ye, Y.useId = C0, Y.useReducer = cg, Y.useEffect = ue, Y.useLayoutEffect = Hi, Y.useInsertionEffect = U0, Y.useTransition = M0, Y.useDeferredValue = j0, Y.useSyncExternalStore = Q0, Y.startTransition = mg, Y.useRef = ft, Y.useImperativeHandle = u0, Y.useMemo = Je, Y.useCallback = hi, Y.useContext = Wi, Y.useDebugValue = yo, Y.version = "17.0.2", Y.Children = h0, Y.render = K0, Y.hydrate = H0, Y.unmountComponentAtNode = L0, Y.createPortal = w0, Y.createElement = be, Y.createContext = tr, Y.createFactory = P0, Y.cloneElement = Y0, Y.createRef = _s, Y.Fragment = Te, Y.isValidElement = Oi, Y.isElement = J0, Y.isFragment = N0, Y.findDOMNode = T0, Y.Component = We, Y.PureComponent = Bo, Y.memo = f0, Y.forwardRef = lg, Y.flushSync = D0, Y.unstable_batchedUpdates = F0, Y.StrictMode = X0, Y.Suspense = gi, Y.SuspenseList = bn, Y.lazy = b0, Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = E0;
var Ht = Y, z0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $0(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function q0(t) {
  return t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function _0(t) {
  return t && Object.prototype.hasOwnProperty.call(t, "default") && Object.keys(t).length === 1 ? t.default : t;
}
function ec(t) {
  if (t.__esModule)
    return t;
  var o = t.default;
  if (typeof o == "function") {
    var e = function n() {
      return this instanceof n ? Reflect.construct(o, arguments, this.constructor) : o.apply(this, arguments);
    };
    e.prototype = o.prototype;
  } else
    e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(e, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), e;
}
const tc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: z0,
  getAugmentedNamespace: ec,
  getDefaultExportFromCjs: $0,
  getDefaultExportFromNamespaceIfNotNamed: _0,
  getDefaultExportFromNamespaceIfPresent: q0
}, Symbol.toStringTag, { value: "Module" }));
var nc = function(o, e, n, i) {
  var r = n ? n.call(i, o, e) : void 0;
  if (r !== void (797 * -12 + 9525 + 39 * 1))
    return !!r;
  if (o === e)
    return !0;
  if (typeof o != "object" || !o || typeof e != "object" || !e)
    return !1;
  var a = Object.keys(o), g = Object.keys(e);
  if (a.length !== g.length)
    return !1;
  for (var s = Object.prototype.hasOwnProperty.bind(e), x = 8 * -679 + -8367 * 1 + 13799 * 1; x < a.length; x++) {
    var C = a[x];
    if (!s(C))
      return !1;
    var u = o[C], f = e[C];
    if (r = n ? n.call(i, u, f, C) : void (4513 * 1 + -2 * 3604 + 2695), r === !1 || r === void 0 && u !== f)
      return !1;
  }
  return !0;
};
const ic = tc.getDefaultExportFromCjs(nc);
var $ = "-ms-", Sn = "-moz-", U = "-webkit-", bg = "comm", Vi = "rule", rr = "decl", oc = "@import", yg = "@keyframes", rc = "@layer", ac = Math.abs, ar = String.fromCharCode, So = Object.assign;
function gc(t, o) {
  return le(t, -13 * -229 + 1 * 6451 + 4 * -2357) ^ -1589 + -526 * -13 + 4 * -1301 ? (((o << -1 * 221 + 567 + -344 ^ le(t, -3 * -2433 + 1145 + 8444 * -1)) << -1 * -17 + -3200 + 3185 ^ le(t, 33 * 127 + -672 + -3518)) << -7877 + 7879 * 1 ^ le(t, 1 * 6277 + 1 * -5653 + -622 * 1)) << 6624 + 602 * -11 ^ le(t, -3 * -3170 + -71 * -67 + -14264) : -38 * -57 + -7 * 925 + 1 * 4309;
}
function vg(t) {
  return t.trim();
}
function ot(t, o) {
  return (t = o.exec(t)) ? t[0] : t;
}
function L(t, o, e) {
  return t.replace(o, e);
}
function ci(t, o) {
  return t.indexOf(o);
}
function le(t, o) {
  return t.charCodeAt(o) | 2614 + -4494 * 1 + 1880;
}
function rn(t, o, e) {
  return t.slice(o, e);
}
function Me(t) {
  return t.length;
}
function wg(t) {
  return t.length;
}
function yn(t, o) {
  return o.push(t), t;
}
function sc(t, o) {
  return t.map(o).join("");
}
function Ca(t, o) {
  return t.filter(function(e) {
    return !ot(e, o);
  });
}
var Ri = 1621 * 1 + -665 * 7 + 5 * 607, an = 1, Bg = 17 * 127 + -127 * 1 + -2032, Ve = -4586 + 2 * 3779 + 2 * -1486, ge = -3225 + -4877 * 2 + -1 * -12979, xn = "";
function Ei(t, o, e, n, i, r, a, g) {
  var s = {};
  return s.value = t, s.root = o, s.parent = e, s.type = n, s.props = i, s.children = r, s.line = Ri, s.column = an, s.length = a, s.return = "", s.siblings = g, s;
}
function It(t, o) {
  return So(Ei("", null, null, "", null, null, -7605 + 10 * -180 + 9405, t.siblings), t, { length: -t.length }, o);
}
function jt(t) {
  for (; t.root; )
    t = It(t.root, { children: [t] });
  yn(t, t.siblings);
}
function cc() {
  return ge;
}
function Ic() {
  return ge = Ve > 4505 + -67 * -11 + -5242 ? le(xn, --Ve) : 0, an--, ge === -3096 * 1 + 6591 + -3485 && (an = 722 * -5 + 25 * -107 + 6286, Ri--), ge;
}
function Le() {
  return ge = Ve < Bg ? le(xn, Ve++) : -1967 + 1967 * 1, an++, ge === -3446 + -14 * 504 + -584 * -18 && (an = -6 * -1412 + -718 + -1 * 7753, Ri++), ge;
}
function kt() {
  return le(xn, Ve);
}
function Ii() {
  return Ve;
}
function Pi(t, o) {
  return rn(xn, t, o);
}
function Go(t) {
  switch (t) {
    case -13 * 259 + -5085 + -1 * -8452:
    case 1011 * -2 + 44 + -1 * -1987:
    case -4115 + -463 * -11 + -968:
    case 2246 + 1 * -2233:
    case -5411 + 5443 * 1:
      return -10147 + 216 * 47;
    case 1743 + -3114 * -3 + -36 * 307:
    case -4288 + -4849 * -1 + -74 * 7:
    case -3107 * -1 + -304 * -4 + -4279:
    case 1029 + -2 * 491:
    case 31 * -269 + -1089 * 2 + 10579 * 1:
    case -3357 + 134 * -7 + 4359 * 1:
    case 286 * -31 + -7324 + 16316 * 1:
    case -8435 * 1 + 3 * 770 + 6184:
    case 657 * -10 + -2218 * -3 + -1 * -39:
    case -2 * -2579 + -2670 * 3 + 2977:
      return 67 * 77 + 5507 + -1777 * 6;
    case 4465 * -1 + -6773 + 1412 * 8:
      return 9174 * -1 + 5433 + 3744;
    case 113 * -48 + 9904 + -19 * 234:
    case 9373 + -13 * 718:
    case -24 * 30 + -5247 + 6007:
    case 6935 + 58 * -118:
      return -276 + 2 * 139;
    case -7018 + -1 * 9476 + -1 * -16535:
    case 5103 + 3 * 346 + 21 * -288:
      return 1;
  }
  return 0;
}
function xc(t) {
  return Ri = an = 2576 + -1 * -2264 + -1613 * 3, Bg = Me(xn = t), Ve = -1379 * -1 + -4330 + 2951, [];
}
function lc(t) {
  return xn = "", t;
}
function ao(t) {
  return vg(Pi(Ve - (-1 * 1401 + -2 * 4184 + 9770), Zo(t === -4146 + -193 * 37 + 1 * 11378 ? t + (-1 * 6117 + -5767 + -1 * -11886) : t === 40 ? t + 1 : t)));
}
function uc(t) {
  for (; (ge = kt()) && ge < 33; )
    Le();
  return Go(t) > -196 * 26 + 409 * -7 + -419 * -19 || Go(ge) > -5755 + 1 * -1578 + 3668 * 2 ? "" : " ";
}
function Cc(t, o) {
  for (; --o && Le() && !(ge < 6029 + -6 * 677 + -1919 * 1 || ge > -66 * -72 + -5297 + 647 || ge > 3622 + -5 * -1770 + -191 * 65 && ge < 12077 + 28 * -429 || ge > -7599 + -821 * -2 + 6027 && ge < -8580 + 2 * 417 + -31 * -253); )
    ;
  return Pi(t, Ii() + (o < 1 * 6094 + -1 * 8819 + -2731 * -1 && kt() == 1475 + -37 * 39 && Le() == -351 * -12 + -31 * 17 + -13 * 281));
}
function Zo(t) {
  for (; Le(); )
    switch (ge) {
      case t:
        return Ve;
      case 34:
      case -2354 * 1 + -47 * -151 + -112 * 42:
        t !== 3 * -168 + -349 * 9 + 3679 && t !== -6106 + 5 * 1229 && Zo(ge);
        break;
      case 49 * 33 + 9821 + -11398:
        t === 9410 + 1 * -8354 + -1015 && Zo(t);
        break;
      case -13889 + 11 * 1271:
        Le();
        break;
    }
  return Ve;
}
function dc(t, o) {
  for (; Le() && t + ge !== 15 * 632 + 1 * -7781 + 28 * -59 + 10; )
    if (t + ge === 42 + (-20 * 284 + 6417 + -139 * 5) && kt() === 4862 * 1 + -2313 + -2502)
      break;
  return "/*" + Pi(o, Ve - (-3 * -195 + -1 * 2135 + 1551)) + "*" + ar(t === 42 * 227 + 6635 + -5374 * 3 ? t : Le());
}
function Ac(t) {
  for (; !Go(kt()); )
    Le();
  return Pi(t, Ve);
}
function fc(t) {
  return lc(xi("", null, null, null, [""], t = xc(t), 2861 * -3 + 413 + 215 * 38, [0], t));
}
function xi(t, o, e, n, i, r, a, g, s) {
  for (var x = 0, C = -1172 + -4 * -293, u = a, f = 0, p = -3544 + -2 * -1772, v = 8606 * -1 + 97 * 29 + -3 * -1931, w = 3716 + -743 * 5, K = 5 * 1181 + -6014 + -2 * -55, G = -8217 + 8218 * 1, W = 0, O = "", J = i, F = r, j = n, k = O; K; )
    switch (v = W, W = Le()) {
      case 40:
        if (v != -3930 + 3 * 1346 && le(k, u - 1) == 74 * -68 + -3507 + 8597) {
          ci(k += L(ao(W), "&", "&\f"), "&\f") != -(-8 * -85 + 2982 + -7 * 523) && (G = -1);
          break;
        }
      case -2 * -2249 + 1 * 8259 + 3 * -4241:
      case 7808 + 1 * -7769:
      case -3059 + 3646 * 1 + -496:
        k += ao(W);
        break;
      case -1 * 8977 + -6958 + -15944 * -1:
      case -3331 * 3 + -2562 + 12565:
      case -2962 * -2 + -8261 + -470 * -5:
      case 10055 + -13 * 771:
        k += uc(v);
        break;
      case 1 * -4657 + -1581 + 6330:
        k += Cc(Ii() - (-52 * 176 + 3253 + 5900), -6653 * 1 + 240 + 6420);
        continue;
      case 83 * 2 + -2 * -709 + -29 * 53:
        switch (kt()) {
          case 5649 + -27 * -212 + 1 * -11331:
          case 6260 + 13 * -698 + 2861:
            yn(pc(dc(Le(), Ii()), o, e, s), s);
            break;
          default:
            k += "/";
        }
        break;
      case (2689 * 1 + -4436 + 1870) * w:
        g[x++] = Me(k) * G;
      case (-9060 + -167 * -55) * w:
      case -157 * 49 + 721 + 7031:
      case 139 * 17 + 163 * -10 + -733:
        switch (W) {
          case -9591 + -417 * -23:
          case 7225 * -1 + -880 + 5 * 1646:
            K = -7089 * 1 + 4564 + 2525;
          case 6160 + -2576 * -2 + 341 * -33 + C:
            G == -(6382 * -1 + -2233 + 718 * 12) && (k = L(k, /\f/g, "")), p > 0 && Me(k) - u && yn(p > -3 * -2677 + -7230 + -769 ? Aa(k + ";", n, e, u - (-75 * 12 + -4823 + 9 * 636), s) : Aa(L(k, " ", "") + ";", n, e, u - (8078 + -12 * 673), s), s);
            break;
          case -3671 + 1 * -4865 + 955 * 9:
            k += ";";
          default:
            if (yn(j = da(k, o, e, x, C, i, g, O, J = [], F = [], u, r), r), W === -1925 + 1 * 2699 + -651)
              if (C === -6269 * 1 + 7812 + -1543 * 1)
                xi(k, o, j, j, J, r, u, g, F);
              else
                switch (f === 718 + -7057 * 1 + 6438 && le(k, 5700 + 6255 * -1 + 186 * 3) === 110 ? 279 + 1 * 9395 + -9574 : f) {
                  case -8784 + -3989 * 1 + 12873:
                  case -1597 * 6 + -3637 + 13327:
                  case 109:
                  case 9604 + 139 * 19 + -6065 * 2:
                    xi(t, j, j, n && yn(da(t, j, j, -93 * -65 + -37 * 65 + -7 * 520, -22 * 34 + -1794 + 31 * 82, i, g, O, i, J = [], u, F), F), i, F, u, g, n ? J : F);
                    break;
                  default:
                    xi(k, j, j, j, [""], F, -567 + 1 * -7652 + 8219 * 1, g, F);
                }
        }
        x = C = p = -8691 + -415 * -1 + 2 * 4138, w = G = -7222 + 7223 * 1, O = k = "", u = a;
        break;
      case -4658 * -2 + 10 * -680 + -2458:
        u = -5 * 1373 + -9062 + 15928 + Me(k), p = v;
      default:
        if (w < 8680 + 11 * -789) {
          if (W == 8451 + 1 * -822 + 54 * -139)
            --w;
          else if (W == -1 * 1365 + 7 * 1202 + -6924 && w++ == 280 + -523 * -3 + -1 * 1849 && Ic() == -4869 + -17 * 469 + 12967)
            continue;
        }
        switch (k += ar(W), W * w) {
          case -1703 * -3 + -5631 + 560:
            G = C > 0 ? -2535 + 17 * -107 + -65 * -67 : (k += "\f", -(6414 + -191 * -4 + -7177));
            break;
          case -3 * -1443 + 1 * -3649 + 1 * -636:
            g[x++] = (Me(k) - 1) * G, G = 67 * 101 + -2295 + -17 * 263;
            break;
          case 7089 * 1 + 4870 * 2 + 1 * -16765:
            kt() === -29 * -179 + -2575 + -2571 && (k += ao(Le())), f = kt(), C = u = Me(O = k += Ac(Ii())), W++;
            break;
          case 530 + -97 * 5:
            v === 45 && Me(k) == 1 * -2509 + 7453 * 1 + -14 * 353 && (w = -1 * -7298 + 1 * 7253 + -14551);
        }
    }
  return r;
}
function da(t, o, e, n, i, r, a, g, s, x, C, u) {
  for (var f = i - 1, p = i === 9574 + 9397 * -1 + 59 * -3 ? r : [""], v = wg(p), w = -9109 + 1451 * -3 + 13462, K = -5 * -1789 + -2226 + 1 * -6719, G = 1253 + 14 * 411 + -49 * 143; w < n; ++w)
    for (var W = 1391 + -142 * -10 + -3 * 937, O = rn(t, f + (6805 + -7949 * 1 + 5 * 229), f = ac(K = a[w])), J = t; W < v; ++W)
      (J = vg(K > 0 ? p[W] + " " + O : L(O, /&\f/g, p[W]))) && (s[G++] = J);
  return Ei(t, o, e, i === -908 + -1 * -1937 + -21 * 49 ? Vi : g, s, x, C, u);
}
function pc(t, o, e, n) {
  return Ei(t, o, e, bg, ar(cc()), rn(t, -6 * 717 + -4609 + 2971 * 3, -(151 * -58 + -75 * -35 + 6135)), -1162 + -2 * -581, n);
}
function Aa(t, o, e, n, i) {
  return Ei(t, o, e, rr, rn(t, 2821 + 9337 * -1 + 3 * 2172, n), rn(t, n + (19 * 442 + 1127 * 2 + 1 * -10651), -(1 * -6229 + -1585 + 7815)), n, i);
}
function Sg(t, o, e) {
  switch (gc(t, o)) {
    case 93 * 91 + 4 * -1349 + 2036:
      return U + "print-" + t + t;
    case -206 * 13 + 1252 * 6 + 3 * 301:
    case 1 * 7793 + -511 + -1 * 3081:
    case 8033 + -66 * 80 + 424:
    case 9433 + 625 * 16 + 20 * -800:
    case 6517 + 5 * 1119 + -37 * 283:
    case -8317 + -1921 * 1 + 14695:
    case 2 * 2531 + 2432 + -1 * 4573:
    case -126 * 27 + -4382 + 13356:
    case -6 * 1927 + 778 * 2 + -606 * -27:
    case 1856 + 997 * 4:
    case 4278 + -1087 * 1:
    case -11342 + 1953 * 3 + 16 * 758:
    case -1770 * -5 + 7777 + -13622 * 1:
    case -633 + -4837 * 1 + 1 * 11861:
    case 8 * -25 + -29 * 11 + -7 * -914:
    case 9796 + -758 * -2 + -5689:
    case -508 * -5 + -3517 + 508 * 14:
    case 4973 * 1 + 1 * -914 + -2 * -270:
    case 7954 * -1 + -9881 * 1 + 22690:
    case -678 * -2 + 350 * 7 + 409:
    case 5792 + -12119 * 1 + 12716:
    case -12 * 800 + -4 * 2261 + -1 * -23753:
    case -98 + 1 * -6442 + 1 * 11905:
    case 2166 * -1 + -7258 + 1003 * 15:
    case 4 * 2029 + -9865 + 5578:
      return U + t + t;
    case -11 * 824 + -1 * 5375 + 38 * 506:
      return Sn + t + t;
    case 7 * 1433 + 9 * 219 + -1 * 6653:
    case -588 + 1361 * 4 + -610:
    case 4771 * -1 + 1 * -906 + 10487:
    case 6968:
    case 130 + 2626 * 1:
      return U + t + Sn + t + $ + t + t;
    case -280 + 5 * 1343 + -499 * 1:
      switch (le(t, o + 11)) {
        case 114:
          return U + t + $ + L(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        case 1 * 7416 + 6976 + -14284:
          return U + t + $ + L(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        case -2 * -4525 + 8454 + 17459 * -1:
          return U + t + $ + L(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    case 117 * 67 + -3821 + 2810:
    case -3 * -1906 + -14 * -226 + -4614:
    case -2932 + 65 * -98 + 12205:
      return U + t + $ + t + t;
    case 6165:
      return U + t + $ + "flex-" + t + t;
    case -10069 * -1 + -495 * -19 + -14287:
      return U + t + L(t, /(\w+).+(:[^]+)/, U + "box-$1$2" + $ + "flex-$1$2") + t;
    case 1 * -4707 + -257 + 10407:
      return U + t + $ + "flex-item-" + L(t, /flex-|-self/g, "") + (ot(t, /flex-|baseline/) ? "" : $ + "grid-row-" + L(t, /flex-|-self/g, "")) + t;
    case -9103 * -1 + 3403 + -7831:
      return U + t + $ + "flex-line-pack" + L(t, /align-content|flex-|-self/g, "") + t;
    case -1232 * 4 + -9834 + -3385 * -6:
      return U + t + $ + L(t, "shrink", "negative") + t;
    case -5977 + 59 * 191:
      return U + t + $ + L(t, "basis", "preferred-size") + t;
    case 6060:
      return U + "box-" + L(t, "-grow", "") + U + t + $ + L(t, "grow", "positive") + t;
    case -7468 + 7478 * 1 + -71 * -64:
      return U + L(t, /([^-])(transform)/g, "$1" + U + "$2") + t;
    case 2844 + -16 * 253 + 7391:
      return L(L(L(t, /(zoom-|grab)/, U + "$1"), /(image-set)/, U + "$1"), t, "") + t;
    case -4336 + 87 * 113:
    case 5474 + -303 * 5:
      return L(t, /(image-set\([^]*)/, U + "$1$`$1");
    case 8094 + -6 * 521:
      return L(L(t, /(.+:)(flex-)?(.*)/, U + "box-pack:$3" + $ + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + U + t + t;
    case -2 * -4236 + 4205 + -8477:
      if (!ot(t, /flex-|baseline/))
        return $ + "grid-column-align" + rn(t, o) + t;
      break;
    case 2592:
    case -7 * -197 + -5665 + -3823 * -2:
      return $ + L(t, "template-", "") + t;
    case -13 * -217 + -43 * 34 + 3025:
    case -3 * -973 + 221 * 5 + -24 * 17:
      return e && e.some(function(n, i) {
        return o = i, ot(n.props, /grid-\w+-end/);
      }) ? ~ci(t + (e = e[o].value), "span") ? t : $ + L(t, "-start", "") + t + $ + "grid-row-span:" + (~ci(e, "span") ? ot(e, /\d+/) : +ot(e, /\d+/) - +ot(t, /\d+/)) + ";" : $ + L(t, "-start", "") + t;
    case 7176 + -1495 * -4 + 118 * -70:
    case -1105 * -7 + 9809 + -39 * 344:
      return e && e.some(function(n) {
        return ot(n.props, /grid-\w+-start/);
      }) ? t : $ + L(L(t, "-end", "-span"), "span ", "") + t;
    case 11996 + 1 * -7901:
    case 6131 + -66 * 67 + 1 * 1874:
    case -6190 + -1 * -5045 + -1 * -5213:
    case 1654 + -1 * -8607 + 59 * -131:
      return L(t, /(.+)-inline(.+)/, U + "$1$2") + t;
    case 8116:
    case -7786 * -1 + -27 + -25 * 28:
    case 5753:
    case -8441 + 3494 * 4:
    case 69 + -29 * -286 + -2918:
    case 10358 * -1 + 1283 * 2 + 1 * 13493:
    case -5887 + 1 * 1447 + 9373:
    case -4 * 1632 + 1 * 6463 + -2371 * -2:
    case 8714 + -577 * 19 + 7782:
    case -6417 + -11 * 487 + -7 * -2509:
    case -3918 + -1 * 1114 + -3351 * -3:
    case 87 * 27 + 9460 + 587 * -12:
      if (Me(t) - (-3165 + 3 * 31 + 3073) - o > -5243 + -107 * -49 + 6)
        switch (le(t, o + (-5858 * -1 + -198 * 29 + 115 * -1))) {
          case 7 * 1061 + -2 * 1033 + -4 * 1313:
            if (le(t, o + (3 * -2734 + 2017 * 4 + 138)) !== -2 * -1994 + -1264 * 6 + -3641 * -1)
              break;
          case -4258 + -1618 * -1 + 2742:
            return L(t, /(.+:)(.+)-([^]+)/, "$1" + U + "$2-$3$1" + Sn + (le(t, o + (65 * -54 + -11 * 186 + 5559)) == 2046 + -13 * 446 + 1930 * 2 ? "$3" : "$2-$3")) + t;
          case 2748 + 6 * -1322 + 5299:
            return ~ci(t, "stretch") ? Sg(L(t, "stretch", "fill-available"), o, e) + t : t;
        }
      break;
    case -859 + -1 * -6011:
    case 1 * -159 + -8243 + 2 * 7161:
      return L(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, i, r, a, g, s, x) {
        return $ + i + ":" + r + x + (a ? $ + i + "-span:" + (g ? s : +s - +r) + x : "") + t;
      });
    case -1786 * -2 + 4546 + 3169 * -1:
      if (le(t, o + (4716 + -3 * 1570)) === -1 * -2969 + 9 * -389 + -1 * -653)
        return L(t, ":", ":" + U) + t;
      break;
    case 7328 + 1307 * -1 + 423:
      switch (le(t, le(t, 633 * 11 + 1 * 8111 + 5020 * -3) === 45 ? 18 : -1 * -4195 + 5373 + -9557)) {
        case -19 * 302 + 1859 + 3999:
          return L(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + U + (le(t, 1 * 882 + 1473 * -3 + 3551) === -1 * 9141 + 5955 + 3231 ? "inline-" : "") + "box$3$1" + U + "$2$3$1" + $ + "$2box$3") + t;
        case -1315 + 5 * -1153 + 7180:
          return L(t, ":", ":" + $) + t;
      }
      break;
    case 5719:
    case 4104 + -13 * -668 + -1 * 10141:
    case 2135:
    case 2778 + 1 * 4778 + -3629:
    case 2391:
      return L(t, "scroll-", "scroll-snap-") + t;
  }
  return t;
}
function mi(t, o) {
  for (var e = "", n = 19 * -475 + -7181 * 1 + 222 * 73; n < t.length; n++)
    e += o(t[n], n, t, o) || "";
  return e;
}
function hc(t, o, e, n) {
  switch (t.type) {
    case rc:
      if (t.children.length)
        break;
    case oc:
    case rr:
      return t.return = t.return || t.value;
    case bg:
      return "";
    case yg:
      return t.return = t.value + "{" + mi(t.children, n) + "}";
    case Vi:
      if (!Me(t.value = t.props.join(",")))
        return "";
  }
  return Me(e = mi(t.children, n)) ? t.return = t.value + "{" + e + "}" : "";
}
function mc(t) {
  var o = wg(t);
  return function(e, n, i, r) {
    for (var a = "", g = 1827 + 4111 * 1 + -5938; g < o; g++)
      a += t[g](e, n, i, r) || "";
    return a;
  };
}
function bc(t) {
  return function(o) {
    o.root || (o = o.return) && t(o);
  };
}
function yc(t, o, e, n) {
  if (t.length > -(27 * 10 + -1937 + 1668) && !t.return)
    switch (t.type) {
      case rr:
        t.return = Sg(t.value, t.length, e);
        return;
      case yg:
        return mi([It(t, { value: L(t.value, "@", "@" + U) })], n);
      case Vi:
        if (t.length)
          return sc(e = t.props, function(i) {
            switch (ot(i, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                jt(It(t, { props: [L(i, /:(read-\w+)/, ":" + Sn + "$1")] }));
                var r = {};
                r.props = [i], jt(It(t, r)), So(t, { props: Ca(e, n) });
                break;
              case "::placeholder":
                jt(It(t, { props: [L(i, /:(plac\w+)/, ":" + U + "input-$1")] })), jt(It(t, { props: [L(i, /:(plac\w+)/, ":" + Sn + "$1")] })), jt(It(t, { props: [L(i, /:(plac\w+)/, $ + "input-$1")] }));
                var a = {};
                a.props = [i], jt(It(t, a)), So(t, { props: Ca(e, n) });
                break;
            }
            return "";
          });
    }
}
var N = {};
N.animationIterationCount = 1, N.aspectRatio = 1, N.borderImageOutset = 1, N.borderImageSlice = 1, N.borderImageWidth = 1, N.boxFlex = 1, N.boxFlexGroup = 1, N.boxOrdinalGroup = 1, N.columnCount = 1, N.columns = 1, N.flex = 1, N.flexGrow = 1, N.flexPositive = 1, N.flexShrink = 1, N.flexNegative = 1, N.flexOrder = 1, N.gridRow = 1, N.gridRowEnd = 1, N.gridRowSpan = 1, N.gridRowStart = 1, N.gridColumn = 1, N.gridColumnEnd = 1, N.gridColumnSpan = 1, N.gridColumnStart = 1, N.msGridRow = 1, N.msGridRowSpan = 1, N.msGridColumn = 1, N.msGridColumnSpan = 1, N.fontWeight = 1, N.lineHeight = 1, N.opacity = 1, N.order = 1, N.orphans = 1, N.tabSize = 1, N.widows = 1, N.zIndex = 1, N.zoom = 1, N.WebkitLineClamp = 1, N.fillOpacity = 1, N.floodOpacity = 1, N.stopOpacity = 1, N.strokeDasharray = 1, N.strokeDashoffset = 1, N.strokeMiterlimit = 1, N.strokeOpacity = 1, N.strokeWidth = 1;
var vc = N, X = {}, Wt = typeof process < "u" && void (6142 + 181 * -7 + -4875 * 1) !== X && (X.REACT_APP_SC_ATTR || X.SC_ATTR) || "data-styled", gr = typeof window < "u" && "HTMLElement" in window, wc = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (913 * 5 + 5298 + -1 * 9863) !== X && void (403 * 1 + -560 * 11 + 5757) !== X.REACT_APP_SC_DISABLE_SPEEDY && X.REACT_APP_SC_DISABLE_SPEEDY !== "" ? X.REACT_APP_SC_DISABLE_SPEEDY !== "false" && X.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (67 * 17 + -299 * -1 + -1438) !== X && void (-462 + 77 * 6) !== X.SC_DISABLE_SPEEDY && X.SC_DISABLE_SPEEDY !== "" ? X.SC_DISABLE_SPEEDY !== "false" && X.SC_DISABLE_SPEEDY : X.NODE_ENV !== "production"), fa = /invalid hook call/i, $n = /* @__PURE__ */ new Set(), Bc = function(t, o) {
  if (X.NODE_ENV !== "production") {
    var e = o ? ' with the id of "'.concat(o, '"') : "", n = "The component ".concat(t).concat(e, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, i = console.error;
    try {
      var r = !0;
      console.error = function(a) {
        for (var g = [], s = -7676 + -151 * 57 + -1357 * -12; s < arguments.length; s++)
          g[s - (1 * -7336 + 2180 + -3 * -1719)] = arguments[s];
        fa.test(a) ? (r = !1, $n.delete(n)) : i.apply(void (1 * 7949 + 113 + -8062), nn([a], g, !1));
      }, ft(), r && !$n.has(n) && (console.warn(n), $n.add(n));
    } catch (a) {
      fa.test(a.message) && $n.delete(n);
    } finally {
      console.error = i;
    }
  }
}, Ni = Object.freeze([]), gn = Object.freeze({});
function Sc(t, o, e) {
  return void (1 * -7598 + -7 * -578 + -1 * -3552) === e && (e = gn), t.theme !== e.theme && t.theme || o || e.theme;
}
var ko = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Gc = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Zc = /(^-|-$)/g;
function pa(t) {
  return t.replace(Gc, "-").replace(Zc, "");
}
var kc = /(a)(d)/gi, ha = function(t) {
  return String.fromCharCode(t + (t > 25 ? 1 * -8900 + -111 * -78 + 281 : 97));
};
function Ko(t) {
  var o, e = "";
  for (o = Math.abs(t); o > 1319 + -27 * -103 + -88 * 46; o = o / (10799 + -1 * 10747) | -8539 + -1 * -8539)
    e = ha(o % (-4718 + 30 * 159)) + e;
  return (ha(o % 52) + e).replace(kc, "$1-$2");
}
var go, Bt = function(t, o) {
  for (var e = o.length; e; )
    t = (1 * 7953 + -1 * 4927 + -2993) * t ^ o.charCodeAt(--e);
  return t;
}, Gg = function(t) {
  return Bt(5381, t);
};
function Kc(t) {
  return Ko(Gg(t) >>> -3 * 433 + 5271 + -3972);
}
function Zg(t) {
  return X.NODE_ENV !== "production" && typeof t == "string" && t || t.displayName || t.name || "Component";
}
function so(t) {
  return typeof t == "string" && (X.NODE_ENV === "production" || t.charAt(16569 + -789 * 21) === t.charAt(-838 + -2 * -477 + -116).toLowerCase());
}
var Ke = {};
Ke.childContextTypes = !0, Ke.contextType = !0, Ke.contextTypes = !0, Ke.defaultProps = !0, Ke.displayName = !0, Ke.getDefaultProps = !0, Ke.getDerivedStateFromError = !0, Ke.getDerivedStateFromProps = !0, Ke.mixins = !0, Ke.propTypes = !0, Ke.type = !0;
var xt = {};
xt.name = !0, xt.length = !0, xt.prototype = !0, xt.caller = !0, xt.callee = !0, xt.arguments = !0, xt.arity = !0;
var vt = {};
vt.$$typeof = !0, vt.compare = !0, vt.defaultProps = !0, vt.displayName = !0, vt.propTypes = !0, vt.type = !0;
var Ut = {};
Ut.$$typeof = !0, Ut.render = !0, Ut.defaultProps = !0, Ut.displayName = !0, Ut.propTypes = !0;
var kg = typeof Symbol == "function" && Symbol.for, Kg = kg ? Symbol.for("react.memo") : 25670 + 94684 * -1 + 129129, Hc = kg ? Symbol.for("react.forward_ref") : 39198 * -2 + -212 * 302 + 11 * 18412, Wc = Ke, Oc = xt, Hg = vt, Vc = ((go = {})[Hc] = Ut, go[Kg] = Hg, go);
function ma(t) {
  return ("type" in (o = t) && o.type.$$typeof) === Kg ? Hg : "$$typeof" in t ? Vc[t.$$typeof] : Wc;
  var o;
}
var Rc = Object.defineProperty, Ec = Object.getOwnPropertyNames, ba = Object.getOwnPropertySymbols, Pc = Object.getOwnPropertyDescriptor, Nc = Object.getPrototypeOf, ya = Object.prototype;
function Wg(t, o, e) {
  if (typeof o != "string") {
    if (ya) {
      var n = Nc(o);
      n && n !== ya && Wg(t, n, e);
    }
    var i = Ec(o);
    ba && (i = i.concat(ba(o)));
    for (var r = ma(t), a = ma(o), g = 6490 + -399 * 17 + 293; g < i.length; ++g) {
      var s = i[g];
      if (!(s in Oc || e && e[s] || a && s in a || r && s in r)) {
        var x = Pc(o, s);
        try {
          Rc(t, s, x);
        } catch {
        }
      }
    }
  }
  return t;
}
function sn(t) {
  return typeof t == "function";
}
function sr(t) {
  return typeof t == "object" && "styledComponentId" in t;
}
function Gt(t, o) {
  return t && o ? "".concat(t, " ").concat(o) : t || o || "";
}
function va(t, o) {
  if (-1529 * -5 + -1428 + -6217 === t.length)
    return "";
  for (var e = t[1 * 7382 + -3620 + 418 * -9], n = -8766 * -1 + -6511 + 14 * -161; n < t.length; n++)
    e += o ? o + t[n] : t[n];
  return e;
}
function cn(t) {
  return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
}
function Ho(t, o, e) {
  if (void (-251 + -8 * -842 + -6485) === e && (e = !1), !e && !cn(t) && !Array.isArray(t))
    return o;
  if (Array.isArray(o))
    for (var n = -6986 + 998 * 7; n < o.length; n++)
      t[n] = Ho(t[n], o[n]);
  else if (cn(o))
    for (var n in o)
      t[n] = Ho(t[n], o[n]);
  return t;
}
function cr(t, o) {
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
var Yc = X.NODE_ENV !== "production" ? ce : {};
function Lc() {
  for (var t = [], o = -1 * -5998 + 3 * -1049 + -2851; o < arguments.length; o++)
    t[o] = arguments[o];
  for (var e = t[1547 + 1 * -1547], n = [], i = -1 * -2797 + 9538 + -2 * 6167, r = t.length; i < r; i += -24 * -5 + 285 + -404)
    n.push(t[i]);
  return n.forEach(function(a) {
    e = e.replace(/%[a-z]/, a);
  }), e;
}
function ln(t) {
  for (var o = [], e = 101 * -1 + -7416 + 7518; e < arguments.length; e++)
    o[e - (8 * -766 + -5780 + 11909)] = arguments[e];
  return X.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(o.length > 5991 + -1997 * 3 ? " Args: ".concat(o.join(", ")) : "")) : new Error(Lc.apply(void (-115 * 18 + 14 + 2056), nn([Yc[t]], o, !1)).trim());
}
var Tc = function() {
  function t(o) {
    this.groupSizes = new Uint32Array(5 * -516 + -980 * 1 + -2 * -2036), this.length = 512, this.tag = o;
  }
  return t.prototype.indexOfGroup = function(o) {
    for (var e = 8355 + -3 * 2785, n = -37 * -107 + -7107 + 3148 * 1; n < o; n++)
      e += this.groupSizes[n];
    return e;
  }, t.prototype.insertRules = function(o, e) {
    if (o >= this.groupSizes.length) {
      for (var n = this.groupSizes, i = n.length, r = i; o >= r; )
        if ((r <<= 773 * 1 + -322 + 50 * -9) < 1 * 9996 + 7620 + -17616)
          throw ln(-4298 + -269 * -27 + -2949, "".concat(o));
      this.groupSizes = new Uint32Array(r), this.groupSizes.set(n), this.length = r;
      for (var a = i; a < r; a++)
        this.groupSizes[a] = -9837 + -398 * -6 + 3 * 2483;
    }
    for (var g = this.indexOfGroup(o + (9387 + -5 * 262 + 12 * -673)), s = (a = 11844 + 282 * -42, e.length); a < s; a++)
      this.tag.insertRule(g, e[a]) && (this.groupSizes[o]++, g++);
  }, t.prototype.clearGroup = function(o) {
    if (o < this.length) {
      var e = this.groupSizes[o], n = this.indexOfGroup(o), i = n + e;
      this.groupSizes[o] = -1997 * 1 + -7216 + 9213;
      for (var r = n; r < i; r++)
        this.tag.deleteRule(n);
    }
  }, t.prototype.getGroup = function(o) {
    var e = "";
    if (o >= this.length || this.groupSizes[o] === 0)
      return e;
    for (var n = this.groupSizes[o], i = this.indexOfGroup(o), r = i + n, a = i; a < r; a++)
      e += "".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);
    return e;
  }, t;
}(), li = /* @__PURE__ */ new Map(), bi = /* @__PURE__ */ new Map(), ui = 1, qn = function(t) {
  if (li.has(t))
    return li.get(t);
  for (; bi.has(ui); )
    ui++;
  var o = ui++;
  if (X.NODE_ENV !== "production" && ((-2724 + 109 * -54 + 8610 | o) < 8222 + -9689 * -1 + 1 * -17911 || o > 1073741824))
    throw ln(16, "".concat(o));
  return li.set(t, o), bi.set(o, t), o;
}, Fc = function(t, o) {
  ui = o + (1053 + -1 * -5603 + -6655), li.set(t, o), bi.set(o, t);
}, Dc = "style[".concat(Wt, "][").concat("data-styled-version", '="').concat("6.1.1", '"]'), Xc = new RegExp("^".concat(Wt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), jc = function(t, o, e) {
  for (var n, i = e.split(","), r = 5752 + -3994 * 1 + 6 * -293, a = i.length; r < a; r++)
    (n = i[r]) && t.registerName(o, n);
}, Mc = function(t, o) {
  for (var e, n = ((e = o.textContent) !== null && void (43 * -16 + 2842 + -2154) !== e ? e : "").split(`/*!sc*/
`), i = [], r = 3518 * -2 + -6474 + -965 * -14, a = n.length; r < a; r++) {
    var g = n[r].trim();
    if (g) {
      var s = g.match(Xc);
      if (s) {
        var x = 0 | parseInt(s[1], 10), C = s[-16 * 131 + -8306 + 10404];
        -3 * -3287 + 7 * -1303 + -740 !== x && (Fc(C, x), jc(t, C, s[4667 * 1 + 9206 + 73 * -190]), t.getTag().insertRules(x, i)), i.length = 9110 + 9110 * -1;
      } else
        i.push(g);
    }
  }
};
function Uc() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Og = function(t) {
  var o = document.head, e = t || o, n = document.createElement("style"), i = function(g) {
    var s = Array.from(g.querySelectorAll("style[".concat(Wt, "]")));
    return s[s.length - (-3297 + -626 * 1 + 3924)];
  }(e), r = void (8565 * 1 + 1 * 7643 + 8104 * -2) !== i ? i.nextSibling : null;
  n.setAttribute(Wt, "active"), n.setAttribute("data-styled-version", "6.1.1");
  var a = Uc();
  return a && n.setAttribute("nonce", a), e.insertBefore(n, r), n;
}, Jc = function() {
  function t(o) {
    this.element = Og(o), this.element.appendChild(document.createTextNode("")), this.sheet = function(e) {
      if (e.sheet)
        return e.sheet;
      for (var n = document.styleSheets, i = 0, r = n.length; i < r; i++) {
        var a = n[i];
        if (a.ownerNode === e)
          return a;
      }
      throw ln(-8170 + 257 * 10 + 5617);
    }(this.element), this.length = 6 * -1329 + -1779 * -3 + 3 * 879;
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
}(), Qc = function() {
  function t(o) {
    this.element = Og(o), this.nodes = this.element.childNodes, this.length = 89 * -26 + 5601 + -3287;
  }
  return t.prototype.insertRule = function(o, e) {
    if (o <= this.length && o >= 3716 + 2 * 1348 + 6412 * -1) {
      var n = document.createTextNode(e);
      return this.element.insertBefore(n, this.nodes[o] || null), this.length++, !0;
    }
    return !1;
  }, t.prototype.deleteRule = function(o) {
    this.element.removeChild(this.nodes[o]), this.length--;
  }, t.prototype.getRule = function(o) {
    return o < this.length ? this.nodes[o].textContent : "";
  }, t;
}(), zc = function() {
  function t(o) {
    this.rules = [], this.length = 9088 + -1159 * 3 + -5611;
  }
  return t.prototype.insertRule = function(o, e) {
    return o <= this.length && (this.rules.splice(o, -804 + 39 * -66 + 3378, e), this.length++, !0);
  }, t.prototype.deleteRule = function(o) {
    this.rules.splice(o, 2998 + -425 * -19 + 5536 * -2), this.length--;
  }, t.prototype.getRule = function(o) {
    return o < this.length ? this.rules[o] : "";
  }, t;
}(), wa = gr, $c = { isServer: !gr, useCSSOMInjection: !wc }, Vg = function() {
  function t(o, e, n) {
    void (1 * -8803 + -5819 + 14622) === o && (o = gn), void (13808 + 13808 * -1) === e && (e = {});
    var i = this;
    this.options = ve(ve({}, $c), o), this.gs = e, this.names = new Map(n), this.server = !!o.isServer, !this.server && gr && wa && (wa = !1, function(r) {
      for (var a = document.querySelectorAll(Dc), g = 4886 + 698 * -7, s = a.length; g < s; g++) {
        var x = a[g];
        x && x.getAttribute(Wt) !== "active" && (Mc(r, x), x.parentNode && x.parentNode.removeChild(x));
      }
    }(this)), cr(this, function() {
      return function(r) {
        for (var a = r.getTag(), g = a.length, s = "", x = function(u) {
          var f = function(G) {
            return bi.get(G);
          }(u);
          if (void (-14587 + -29 * -503) === f)
            return "continue";
          var p = r.names.get(f), v = a.getGroup(u);
          if (p === void 0 || -1082 * 6 + -1921 + 8413 === v.length)
            return "continue";
          var w = "".concat(Wt, ".g").concat(u, '[id="').concat(f, '"]'), K = "";
          void (-111 * 1 + 4507 * 2 + -8903) !== p && p.forEach(function(G) {
            G.length > -9683 + 2161 * -2 + 14005 && (K += "".concat(G, ","));
          }), s += "".concat(v).concat(w, '{content:"').concat(K, '"}').concat(`/*!sc*/
`);
        }, C = 15412 + 15412 * -1; C < g; C++)
          x(C);
        return s;
      }(i);
    });
  }
  return t.registerId = function(o) {
    return qn(o);
  }, t.prototype.reconstructWithOptions = function(o, e) {
    return e === void 0 && (e = !0), new t(ve(ve({}, this.options), o), this.gs, e && this.names || void (5207 + 1143 * -1 + -4064));
  }, t.prototype.allocateGSInstance = function(o) {
    return this.gs[o] = (this.gs[o] || -1 * 2593 + -3093 + 5686 * 1) + (-17 * 5 + -6133 + 6219);
  }, t.prototype.getTag = function() {
    return this.tag || (this.tag = (o = function(e) {
      var n = e.useCSSOMInjection, i = e.target;
      return e.isServer ? new zc(i) : n ? new Jc(i) : new Qc(i);
    }(this.options), new Tc(o)));
    var o;
  }, t.prototype.hasNameForId = function(o, e) {
    return this.names.has(o) && this.names.get(o).has(e);
  }, t.prototype.registerName = function(o, e) {
    if (qn(o), this.names.has(o))
      this.names.get(o).add(e);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(e), this.names.set(o, n);
    }
  }, t.prototype.insertRules = function(o, e, n) {
    this.registerName(o, e), this.getTag().insertRules(qn(o), n);
  }, t.prototype.clearNames = function(o) {
    this.names.has(o) && this.names.get(o).clear();
  }, t.prototype.clearRules = function(o) {
    this.getTag().clearGroup(qn(o)), this.clearNames(o);
  }, t.prototype.clearTag = function() {
    this.tag = void (3160 * -2 + 553 + -79 * -73);
  }, t;
}(), qc = /&/g, _c = /^\s*\/\/.*$/gm;
function Rg(t, o) {
  return t.map(function(e) {
    return e.type === "rule" && (e.value = "".concat(o, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(o, " ")), e.props = e.props.map(function(n) {
      return "".concat(o, " ").concat(n);
    })), Array.isArray(e.children) && e.type !== "@keyframes" && (e.children = Rg(e.children, o)), e;
  });
}
function Eg(t) {
  var o, e, n, i = t === void 0 ? gn : t, r = i.options, a = void (-1 * 949 + 5399 + -4450) === r ? gn : r, g = i.plugins, s = void (2772 + -7079 * 1 + 4307) === g ? Ni : g, x = function(f, p, v) {
    return v === e || v.startsWith(e) && v.endsWith(e) && v.replaceAll(e, "").length > -1 * -3713 + -7457 + -39 * -96 ? ".".concat(o) : f;
  }, C = s.slice();
  C.push(function(f) {
    f.type === Vi && f.value.includes("&") && (f.props[-16105 + -16105 * -1] = f.props[3 * 1099 + -4809 + -126 * -12].replace(qc, e).replace(n, x));
  }), a.prefix && C.push(yc), C.push(hc);
  var u = function(f, p, v, w) {
    void (4044 + 127 * -16 + -2012) === p && (p = ""), void (983 * -10 + -5998 + 15828) === v && (v = ""), void (2059 * -2 + 439 * 4 + -1 * -2362) === w && (w = "&"), o = w, e = p, n = new RegExp("\\".concat(e, "\\b"), "g");
    var K = f.replace(_c, ""), G = fc(v || p ? "".concat(v, " ").concat(p, " { ").concat(K, " }") : K);
    a.namespace && (G = Rg(G, a.namespace));
    var W = [];
    return mi(G, mc(C.concat(bc(function(O) {
      return W.push(O);
    })))), W;
  };
  return u.hash = s.length ? s.reduce(function(f, p) {
    return p.name || ln(11438 + -11423 * 1), Bt(f, p.name);
  }, 5 * -1709 + -8 * -536 + 9638).toString() : "", u;
}
var eI = new Vg(), Wo = Eg(), Ir = Ht.createContext({ shouldForwardProp: void (-5024 + -10 * -919 + -4166), styleSheet: eI, stylis: Wo });
Ir.Consumer;
var tI = Ht.createContext(void (-4695 + 717 * 5 + 1110));
function Oo() {
  return Wi(Ir);
}
function nI(t) {
  var o = Ye(t.stylisPlugins), e = o[0], n = o[-2 * 3948 + -2 * -3811 + 275], i = Oo().styleSheet, r = Je(function() {
    var C = i, u = {};
    return u.useCSSOMInjection = !1, t.sheet ? C = t.sheet : t.target && (C = C.reconstructWithOptions({ target: t.target }, !1)), t.disableCSSOMInjection && (C = C.reconstructWithOptions(u)), C;
  }, [t.disableCSSOMInjection, t.sheet, t.target, i]), a = Je(function() {
    var C = {};
    C.namespace = t.namespace, C.prefix = t.enableVendorPrefixes;
    var u = {};
    return u.options = C, u.plugins = e, Eg(u);
  }, [t.enableVendorPrefixes, t.namespace, e]);
  ue(function() {
    ic(e, t.stylisPlugins) || n(t.stylisPlugins);
  }, [t.stylisPlugins]);
  var g = Je(function() {
    var C = {};
    return C.shouldForwardProp = t.shouldForwardProp, C.styleSheet = r, C.stylis = a, C;
  }, [t.shouldForwardProp, r, a]), s = {};
  s.value = g;
  var x = {};
  return x.value = a, Ht.createElement(Ir.Provider, s, Ht.createElement(tI.Provider, x, t.children));
}
var Ba = function() {
  function t(o, e) {
    var n = this;
    this.inject = function(i, r) {
      void (-19 * -137 + -5783 + 3180) === r && (r = Wo);
      var a = n.name + r.hash;
      i.hasNameForId(n.id, a) || i.insertRules(n.id, a, r(n.rules, a, "@keyframes"));
    }, this.name = o, this.id = "sc-keyframes-".concat(o), this.rules = e, cr(this, function() {
      throw ln(-1526 + 1 * 244 + -1 * -1294, String(n.name));
    });
  }
  return t.prototype.getName = function(o) {
    return void (8131 * -1 + -7507 + 15638) === o && (o = Wo), this.name + o.hash;
  }, t;
}(), iI = function(t) {
  return t >= "A" && t <= "Z";
};
function Sa(t) {
  for (var o = "", e = -1626 * 1 + 616 + 1010; e < t.length; e++) {
    var n = t[e];
    if (1555 + 222 * -7 === e && n === "-" && t[-4 * 127 + -1479 * 3 + -43 * -115] === "-")
      return t;
    iI(n) ? o += "-" + n.toLowerCase() : o += n;
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
var Pg = function(t) {
  return t == null || t === !1 || t === "";
}, Ng = function(t) {
  var o, e, n = [];
  for (var i in t) {
    var r = t[i];
    t.hasOwnProperty(i) && !Pg(r) && (Array.isArray(r) && r.isCss || sn(r) ? n.push("".concat(Sa(i), ":"), r, ";") : cn(r) ? n.push.apply(n, nn(nn(["".concat(i, " {")], Ng(r), !1), ["}"], !1)) : n.push("".concat(Sa(i), ": ").concat((o = i, (e = r) == null || typeof e == "boolean" || e === "" ? "" : typeof e != "number" || e === 0 || o in vc || o.startsWith("--") ? String(e).trim() : "".concat(e, "px")), ";")));
  }
  return n;
};
function Kt(t, o, e, n) {
  if (Pg(t))
    return [];
  if (sr(t))
    return [".".concat(t.styledComponentId)];
  if (sn(t)) {
    if (!sn(r = t) || r.prototype && r.prototype.isReactComponent || !o)
      return [t];
    var i = t(o);
    return X.NODE_ENV === "production" || typeof i != "object" || Array.isArray(i) || i instanceof Ba || cn(i) || i === null || console.error("".concat(Zg(t), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Kt(i, o, e, n);
  }
  var r;
  return t instanceof Ba ? e ? (t.inject(e, n), [t.getName(n)]) : [t] : cn(t) ? Ng(t) : Array.isArray(t) ? Array.prototype.concat.apply(Ni, t.map(function(a) {
    return Kt(a, o, e, n);
  })) : [t.toString()];
}
function oI(t) {
  for (var o = 1997 + -1 * 7157 + 5160; o < t.length; o += -9431 * 1 + -4069 + 13501) {
    var e = t[o];
    if (sn(e) && !sr(e))
      return !1;
  }
  return !0;
}
var rI = Gg("6.1.1"), aI = function() {
  function t(o, e, n) {
    this.rules = o, this.staticRulesId = "", this.isStatic = X.NODE_ENV === "production" && (void (-1322 + -2 * -661) === n || n.isStatic) && oI(o), this.componentId = e, this.baseHash = Bt(rI, e), this.baseStyle = n, Vg.registerId(e);
  }
  return t.prototype.generateAndInjectStyles = function(o, e, n) {
    var i = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, e, n) : "";
    if (this.isStatic && !n.hash)
      if (this.staticRulesId && e.hasNameForId(this.componentId, this.staticRulesId))
        i = Gt(i, this.staticRulesId);
      else {
        var r = va(Kt(this.rules, o, e, n)), a = Ko(Bt(this.baseHash, r) >>> -3340 + 6077 * 1 + 391 * -7);
        if (!e.hasNameForId(this.componentId, a)) {
          var g = n(r, ".".concat(a), void 0, this.componentId);
          e.insertRules(this.componentId, a, g);
        }
        i = Gt(i, a), this.staticRulesId = a;
      }
    else {
      for (var s = Bt(this.baseHash, n.hash), x = "", C = -467 * 15 + 1 * -8747 + 15752 * 1; C < this.rules.length; C++) {
        var u = this.rules[C];
        if (typeof u == "string")
          x += u, X.NODE_ENV !== "production" && (s = Bt(s, u));
        else if (u) {
          var f = va(Kt(u, o, e, n));
          s = Bt(s, f + C), x += f;
        }
      }
      if (x) {
        var p = Ko(s >>> 0);
        e.hasNameForId(this.componentId, p) || e.insertRules(this.componentId, p, n(x, ".".concat(p), void (-7542 + -3 * -501 + 6039), this.componentId)), i = Gt(i, p);
      }
    }
    return i;
  }, t;
}(), Yg = Ht.createContext(void 0);
Yg.Consumer;
var co = {}, Ga = /* @__PURE__ */ new Set();
function gI(t, o, e) {
  var n = sr(t), i = t, r = !so(t), a = o.attrs, g = a === void 0 ? Ni : a, s = o.componentId, x = void (888 + -168 * -30 + -38 * 156) === s ? function(F, j) {
    var k = typeof F != "string" ? "sc" : pa(F);
    co[k] = (co[k] || 6297 + -589 * -10 + -12187) + (23 * 108 + 139 * 17 + -4846);
    var ee = "".concat(k, "-").concat(Kc("6.1.1" + k + co[k]));
    return j ? "".concat(j, "-").concat(ee) : ee;
  }(o.displayName, o.parentComponentId) : s, C = o.displayName, u = void (16156 + -577 * 28) === C ? function(F) {
    return so(F) ? "styled.".concat(F) : "Styled(".concat(Zg(F), ")");
  }(t) : C, f = o.displayName && o.componentId ? "".concat(pa(o.displayName), "-").concat(o.componentId) : o.componentId || x, p = n && i.attrs ? i.attrs.concat(g).filter(Boolean) : g, v = o.shouldForwardProp;
  if (n && i.shouldForwardProp) {
    var w = i.shouldForwardProp;
    if (o.shouldForwardProp) {
      var K = o.shouldForwardProp;
      v = function(F, j) {
        return w(F, j) && K(F, j);
      };
    } else
      v = w;
  }
  var G = new aI(e, f, n ? i.componentStyle : void (1 * 4681 + 1 * 6910 + -11591));
  function W(F, j) {
    return function(k, ee, z) {
      var te = k.attrs, xe = k.componentStyle, Ce = k.defaultProps, fe = k.foldedComponentIds, Re = k.styledComponentId, re = k.target, ae = Ht.useContext(Yg), $e = Oo(), gt = k.shouldForwardProp || $e.shouldForwardProp;
      X.NODE_ENV !== "production" && yo(Re);
      var we = function(pt, ht, Se) {
        var Ge = {};
        Ge.className = void (-1182 * 2 + 7877 + -5513), Ge.theme = Se;
        for (var _e, Ee = ve(ve({}, ht), Ge), Pt = -1 * 6158 + -8573 + 1 * 14731; Pt < pt.length; Pt += 19 * 307 + -2107 * -4 + 2 * -7130) {
          var Ze = sn(_e = pt[Pt]) ? _e(Ee) : _e;
          for (var Pe in Ze)
            Ee[Pe] = Pe === "className" ? Gt(Ee[Pe], Ze[Pe]) : Pe === "style" ? ve(ve({}, Ee[Pe]), Ze[Pe]) : Ze[Pe];
        }
        return ht.className && (Ee.className = Gt(Ee.className, ht.className)), Ee;
      }(te, ee, Sc(ee, ae, Ce) || gn), De = we.as || re, qe = {};
      for (var pe in we)
        void (-8 * 1093 + -2 * 746 + 10236) === we[pe] || pe[-94 * 39 + -2 * -1042 + 1582] === "$" || pe === "as" || pe === "theme" || (pe === "forwardedAs" ? qe.as = we.forwardedAs : gt && !gt(pe, De) || (qe[pe] = we[pe], gt || X.NODE_ENV !== "development" || l0(pe) || Ga.has(pe) || !ko.has(De) || (Ga.add(pe), console.warn('styled-components: it looks like an unknown prop "'.concat(pe, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Et = function(pt, ht) {
        var Se = Oo(), Ge = pt.generateAndInjectStyles(ht, Se.styleSheet, Se.stylis);
        return X.NODE_ENV !== "production" && yo(Ge), Ge;
      }(xe, we);
      X.NODE_ENV !== "production" && k.warnTooManyClasses && k.warnTooManyClasses(Et);
      var un = Gt(fe, Re);
      return Et && (un += " " + Et), we.className && (un += " " + we.className), qe[so(De) && !ko.has(De) ? "class" : "className"] = un, qe.ref = z, be(De, qe);
    }(O, F, j);
  }
  W.displayName = u;
  var O = Ht.forwardRef(W), J = {};
  return J.attrs = !0, J.componentStyle = !0, J.displayName = !0, J.foldedComponentIds = !0, J.shouldForwardProp = !0, J.styledComponentId = !0, J.target = !0, O.attrs = p, O.componentStyle = G, O.displayName = u, O.shouldForwardProp = v, O.foldedComponentIds = n ? Gt(i.foldedComponentIds, i.styledComponentId) : "", O.styledComponentId = f, O.target = n ? i.target : t, Object.defineProperty(O, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(F) {
    this._foldedDefaultProps = n ? function(j) {
      for (var k = [], ee = -23 * 402 + 73 * 56 + 5159; ee < arguments.length; ee++)
        k[ee - (-727 * 2 + -2915 * 1 + 4370)] = arguments[ee];
      for (var z = -4197 + 298 * 29 + 127 * -35, te = k; z < te.length; z++)
        Ho(j, te[z], !0);
      return j;
    }({}, i.defaultProps, F) : F;
  } }), X.NODE_ENV !== "production" && (Bc(u, f), O.warnTooManyClasses = /* @__PURE__ */ function(F, j) {
    var k = {}, ee = !1;
    return function(z) {
      if (!ee && (k[z] = !0, Object.keys(k).length >= 5059 + 60 * 112 + -1 * 11579)) {
        var te = j ? ' with the id of "'.concat(j, '"') : "";
        console.warn("Over ".concat(-5923 + 31 * 317 + -3704, " classes were generated for component ").concat(F).concat(te, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), ee = !0, k = {};
      }
    };
  }(u, f)), cr(O, function() {
    return ".".concat(O.styledComponentId);
  }), r && Wg(O, t, J), O;
}
function Za(t, o) {
  for (var e = [t[0]], n = -18084 + -44 * -411, i = o.length; n < i; n += 107 * 92 + -426 + -9417)
    e.push(o[n], t[n + (-2827 * 1 + -5004 + 7832)]);
  return e;
}
var ka = function(t) {
  var o = {};
  return o.isCss = !0, Object.assign(t, o);
};
function sI(t) {
  for (var o = [], e = 5542 + -3 * 1847; e < arguments.length; e++)
    o[e - (-7569 + 2 * 3785)] = arguments[e];
  if (sn(t) || cn(t)) {
    var n = t;
    return ka(Kt(Za(Ni, nn([n], o, !0))));
  }
  var i = t;
  return 199 * -43 + -2351 * 3 + 15610 === o.length && 1 * -4822 + -9520 + 14343 === i.length && typeof i[4053 + -1 * -680 + -4733 * 1] == "string" ? Kt(i) : ka(Kt(Za(i, o)));
}
function Vo(t, o, e) {
  if (e === void 0 && (e = gn), !o)
    throw ln(1 * -3649 + -5871 + 9521, o);
  var n = function(i) {
    for (var r = [], a = 2944 + 1637 * -1 + -1306; a < arguments.length; a++)
      r[a - (-233 * -10 + 7276 + -9605)] = arguments[a];
    return t(o, e, sI.apply(void 0, nn([i], r, !1)));
  };
  return n.attrs = function(i) {
    return Vo(t, o, ve(ve({}, e), { attrs: Array.prototype.concat(e.attrs, i).filter(Boolean) }));
  }, n.withConfig = function(i) {
    return Vo(t, o, ve(ve({}, e), i));
  }, n;
}
var Lg = function(t) {
  return Vo(gI, t);
}, Rn = Lg;
ko.forEach(function(t) {
  Rn[t] = Lg(t);
});
X.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var _n = "__sc-".concat(Wt, "__");
X.NODE_ENV !== "production" && X.NODE_ENV !== "test" && typeof window < "u" && (window[_n] || (window[_n] = 0), 6443 + 1626 * 1 + -8068 === window[_n] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[_n] += 8952 + 8643 * 1 + -17594);
const cI = Rn.div`
  position: relative;
`, II = Rn.video`
  transform: ${(t) => t.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  width: 100%;
`;
class q extends Error {
  constructor(e, n) {
    super(e);
    Q(this, "cause");
    this.name = "AutoCaptureError", this.cause = n;
  }
  static logError(e) {
  }
  static fromCameraError(e) {
    if (this.logError(e), e instanceof q)
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
    return new q(n, e);
  }
  static fromError(e) {
    if (this.logError(e), e instanceof q)
      return e;
    const n = "An unexpected error has occurred";
    return new q(n);
  }
}
var Ci = ((t) => (t.CONTINUE_DETECTION = "continue-detection", t.SWITCH_CAMERA = "switch-camera", t.TOGGLE_MIRROR = "toggle-mirror", t))(Ci || {}), Tg = ((t) => (t.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", t.CONTROL = "document-auto-capture:control", t.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", t.DOCUMENT_DETECTION = "document-auto-capture:document-detection", t.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", t.STATE_CHANGED = "document-auto-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", t))(Tg || {}), ut = ((t) => (t.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", t.CONTROL = "face-auto-capture:control", t.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", t.FACE_DETECTION = "face-auto-capture:face-detection", t.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", t.STATE_CHANGED = "face-auto-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", t))(ut || {}), xI = ((t) => (t.ANIMATION_END = "magnifeye-auto-capture:animation-end", t.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", t))(xI || {}), Hn = ((t) => (t.ANIMATION_END = "smile-auto-capture:animation-end", t.STATUS_CHANGED = "smile-auto-capture:status-changed", t))(Hn || {});
const je = {};
je.CANDIDATE_SELECTION = "candidate_selection", je.FACE_TOO_CLOSE = "face_too_close", je.FACE_TOO_FAR = "face_too_far", je.FACE_CENTERING = "face_centering", je.FACE_NOT_PRESENT = "face_not_present", je.SHARPNESS_TOO_LOW = "sharpness_too_low", je.BRIGHTNESS_TOO_LOW = "brightness_too_low", je.BRIGHTNESS_TOO_HIGH = "brightness_too_high", je.DEVICE_PITCHED = "device_pitched";
const Ne = je, it = {};
it.isPresent = Ne.FACE_NOT_PRESENT, it.isNotPitched = Ne.DEVICE_PITCHED, it.isNotSmall = Ne.FACE_TOO_FAR, it.isNotLarge = Ne.FACE_TOO_CLOSE, it.isNotOutOfBounds = Ne.FACE_CENTERING, it.isNotDim = Ne.BRIGHTNESS_TOO_LOW, it.isNotBright = Ne.BRIGHTNESS_TOO_HIGH, it.isSharp = Ne.SHARPNESS_TOO_LOW;
const lI = it, vn = {};
vn.LOADING = "LOADING", vn.ERROR = "ERROR", vn.WAITING = "WAITING", vn.RUNNING = "RUNNING";
const Ue = vn;
var uI = ((t) => (t.CLOSEUP = "CLOSEUP", t.DISTANT = "DISTANT", t.MIDDLE = "MIDDLE", t))(uI || {});
const Ro = {};
Ro.NEUTRAL = "NEUTRAL", Ro.SMILE = "SMILE";
const $t = Ro, Fg = { ...Ue };
Fg.DONE = "DONE";
const Gn = Fg, Yi = tr(void 0);
Yi.displayName = "AppStateContext";
function Dg() {
  const t = Wi(Yi);
  if (t === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return t;
}
const CI = Yi.Provider, Li = Dg, dI = Dg;
class Xg extends We {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var e;
    const o = new q("An unknown error has occurred");
    (e = this.context) == null || e.handleError(o);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var o;
    return ((o = this.context) == null ? void 0 : o.appState) === Ue.ERROR ? null : this.props.children;
  }
}
Q(Xg, "contextType", Yi);
const AI = Rn.canvas`
  transform: ${(t) => t.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
var fI = -5019 * -1 + -1 * -2855 + -7874;
function Ie(t, o, e, n, i, r) {
  var a, g, s = {};
  for (g in o)
    g == "ref" ? a = o[g] : s[g] = o[g];
  var x = {};
  x.type = t, x.props = s, x.key = e, x.ref = a, x.__k = null, x.__ = null, x.__b = 0, x.__e = null, x.__d = void 0, x.__c = null, x.constructor = void (1093 * 3 + -8354 + 5075), x.__v = --fI, x.__i = -(2617 * 3 + 3149 + -17 * 647), x.__u = 0, x.__source = i, x.__self = r;
  var C = x;
  if (typeof t == "function" && (a = t.defaultProps))
    for (g in a)
      void (-1 * -981 + -764 + -217 * 1) === s[g] && (s[g] = a[g]);
  return Z.vnode && Z.vnode(C), C;
}
const pI = Rn.div`
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
function hI() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const mI = lg(({
  detectionDetails: t,
  isImageMirror: o
}, e) => hI() ? (console.log(t), Ie(Te, {
  children: [Ie(AI, {
    ref: e,
    $isImageMirror: o
  }), Ie(pI, {
    children: Object.entries(t).map(([n, i]) => Ie("div", {
      children: [n, ": ", Ie("strong", {
        children: i
      })]
    }, n))
  })]
})) : null), jg = (t) => t.length < 8253 + 1 * 1995 + -1 * 10247 ? -9958 + 1 * -1861 + 53 * 223 : t.reduce((e, n) => e + n, 2995 + -6 * -1603 + 1 * -12613) / t.length, En = (t) => Number.parseFloat(t.toFixed(-323 * -4 + 1 * 766 + -2055)), bI = (t) => {
  const o = t.getContext("2d");
  o && o.clearRect(-1605 + -23 * -1 + -226 * -7, -2809 + 19 * 219 + -338 * 4, o.canvas.width, o.canvas.height);
};
class yI {
  static async getVideoInputDeviceList() {
    return (await navigator.mediaDevices.enumerateDevices()).filter((e) => e.kind === "videoinput");
  }
}
const vI = -2 * 947 + -9553 + 11447 + 0.75, wI = 418 + -8 * 52, BI = 122 + 287 * -9 + 3061, SI = -751 * 11 + 4 * -1198 + 13053, Ti = (t, o) => Math.min(t, o), GI = (t, o) => {
  const e = Ti(o.width, o.height);
  return En(t * e);
}, Mg = ({ height: t, width: o }) => {
  const e = Ti(o, t), n = e / (1 * 9140 + -1 * -8928 + 1 * -18065) * (-495 + 1 * 499);
  if (o > t) {
    const r = {};
    return r.width = n, r.height = e, r;
  }
  const i = {};
  return i.width = e, i.height = n, i;
}, ZI = ({ height: t, width: o }) => {
  const e = Ti(o, t) * vI, n = (o - e) / (5496 + -1 * -3877 + 1 * -9371), i = (t - e) / (7577 + 5 * -751 + -3820), r = {};
  return r.shiftX = n, r.shiftY = i, r.width = e, r.height = e, r;
}, kI = (t, o) => GI(t, o) * wI, KI = "@innovatrics/dot-common-auto-capture", HI = "5.2.4", WI = "module", OI = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, VI = {
  "@dot/proto-files": "1.0.3",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.2.2",
  comlink: "^4.4.1",
  preact: "^10.19.3",
  "styled-components": "^6.1.1",
  "wasm-feature-detect": "^1.6.1"
}, RI = {
  "@preact/preset-vite": "^2.7.0",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.3.3",
  vite: "^5.0.10",
  vitest: "^1.0.4"
}, EI = {
  name: KI,
  private: !0,
  version: HI,
  type: WI,
  scripts: OI,
  dependencies: VI,
  devDependencies: RI
}, PI = -3183 + 1061 * 3 + 0.4, NI = -5263 * -1 + 5 * -1954 + -4507 * -1 + 0.16, YI = 1 * 8395 + 7589 + 144 * -111 + 0.2, LI = -7935 + -19 * 324 + -427 * -33 + 0.05, TI = 9826 + -3 * 3126 + -448 + 0.3, FI = 7916 + -4 * 1214 + -3060 + 0.25, DI = -4950 + 9 * -379 + 8361 * 1 + 0.9, XI = 486 * -8 + -7318 * 1 + 11236, jI = -425 * 8 + 17 * 581 + -6468 + 0.8100000000000005, di = {};
di.minDuration = 1e3, di.maxDuration = 2500, di.minFrames = 10;
const Io = di, Eo = {};
Eo.max = 100, Eo.min = 10;
const Ka = Eo, MI = -5119 + 5839 * 1, UI = -13590 + 5 * 2758, JI = -9800 + 1 * 8819 + 984, Ug = "AES-CBC", Jg = "RSA-OAEP", QI = "SHA-256", zI = "image/jpeg", $I = -52 + -10 * -6, qI = 3311 * 1 + -8571 + -212 * -25, _I = "SAM v1.35.3 for idcards", Qg = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), Ha = () => {
  const t = /Android/i.test(navigator.userAgent), o = /Firefox/i.test(navigator.userAgent);
  return t && o;
}, ex = () => {
  const t = navigator.userAgent.includes("Chrome"), o = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return t && o ? !1 : o;
}, Po = (t) => new Promise((o) => {
  setTimeout(o, t);
}), Jt = (t) => JSON.parse(JSON.stringify(t, (o, e) => typeof e == "number" ? En(e) : e)), tx = () => EI.version, zg = (t) => new URL(t).hostname.replace("www.", ""), nx = () => zg(window.location.href) === "localhost", ei = (t) => Object.entries(t).map(([o, e]) => encodeURIComponent(o) + "=" + encodeURIComponent(e)).join("&"), ix = () => {
  const [t] = window.crypto.getRandomValues(new Uint32Array(1));
  return t.toString(-1586 + 534 * 3);
}, hn = (t) => Math.round(t / 500) * 500 / (1 * -9759 + 2327 + 8432), me = (t) => t ? t <= -1 * -713 + -2 * 2061 + 3410 ? Math.round(t * 20) / (1 * -8353 + 1 * 7598 + -25 * -31) : Math.round(t / (3626 + -149 * 24)) * 50 : 1889 * 4 + 1 * -1253 + 573 * -11, ti = (t) => Math.round(t * (-4031 * 1 + -6 * -141 + -3187 * -1)) / (2 * 1889 + 1197 + -4973), ox = (t, o) => {
  const e = t && performance.now() - t;
  return o >= Io.minFrames ? e > Io.minDuration : e > Io.maxDuration;
}, rx = (t, o) => JSON.stringify(t) === JSON.stringify(o) ? o : t;
function ax(t, o) {
  let e;
  return (...n) => {
    const i = () => {
      clearTimeout(e), e = void 0, t(...n);
    };
    e === void (-16187 + -16187 * -1) && (e = setTimeout(i, o));
  };
}
var $g = ((t) => (t.AUTO_CAPTURE = "auto-capture", t))($g || {});
const xo = (t) => t > -4406 + -20 * -383 + 2 * -1597 ? ">1m" : t > -2556 + 1 * 5479 + -2878 ? ">45" : t > -9876 + -3 * 1635 + 3 * 4937 ? ">30" : "" + t;
function ni(t, o) {
  return o ? o === "user" ? "Front Camera" : "Back Camera" : t;
}
const Mt = { appKey: "", deviceId: "", async countlyFetch(t) {
  if (!this.appKey || !this.deviceId)
    return;
  const o = {};
  o.Accept = "application/json";
  const e = {};
  e.method = "GET", e.headers = o;
  const n = e, i = "https://innovatrics.count.ly/i?", r = {};
  r.app_key = this.appKey, r.device_id = this.deviceId;
  const a = ei(r);
  await fetch("" + i + a + "&" + t, n);
}, async init(t, o) {
  if (!o)
    return;
  this.appKey = o, this.deviceId = t;
  const e = { _app_version: tx() }, n = { organization: zg(window.location.href) }, i = ei({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(n) });
  await this.countlyFetch(i);
}, async endSession() {
  const t = {};
  t.end_session = "1";
  const o = ei(t);
  await this.countlyFetch(o);
}, async sendAutoCaptureEvent(t, o) {
  const e = {};
  e.key = $g.AUTO_CAPTURE, e.count = 1, e.dur = o, e.segmentation = t;
  const n = [e], i = ei({ events: JSON.stringify(n) });
  await this.countlyFetch(i);
}, async sendDocumentData({ deviceName: t, documentDetection: o, facingMode: e, instructionSet: n, ...i }) {
  if (!o)
    return;
  const r = hn(i.captureProcessDurationInMs), a = { hotspots: me(o.hotspots), brightness: me(o.brightness), confidence: me(o.confidence), sharpness: me(o.sharpness), smallestEdge: me(o.smallestEdge), camera: ni(t, e), imageResolution: i.imageResolution.width + "x" + i.imageResolution.height, averageFps: ti(i.averageFps), captureTime: xo(r), instructionSet: n };
  this.sendAutoCaptureEvent(a, r);
}, async sendFaceData({ deviceName: t, faceDetection: o, facingMode: e, instructionSet: n, ...i }) {
  if (!o)
    return;
  const r = hn(i.captureProcessDurationInMs), a = { faceSize: me(o.faceSize), confidence: me(o.confidence), camera: ni(t, e), imageResolution: i.imageResolution.width + "x" + i.imageResolution.height, averageFps: ti(i.averageFps), captureTime: xo(r), instructionSet: n };
  this.sendAutoCaptureEvent(a, r);
}, async sendMagnifEyeData(t, o) {
  var u, f, p, v, w, K, G, W, O, J;
  if (!(t != null && t.length) || !(o != null && o.length))
    return;
  const [e, n, i] = t, [r, a] = o, g = ti(r.averageFps + (a == null ? void 0 : a.averageFps)) / (-8174 + 1 * 9465 + 1289 * -1), s = hn(r.captureProcessDurationInMs), x = hn(a == null ? void 0 : a["captureProcessDurationInMs"]), C = { faceSizeDistant: me((u = e.data.detection) == null ? void 0 : u.faceSize), faceSizeCloseup: me((f = i == null ? void 0 : i.data.detection) == null ? void 0 : f.faceSize), faceSizeMiddle: me((p = n.data.detection) == null ? void 0 : p.faceSize), confidenceDistant: me((v = e.data.detection) == null ? void 0 : v.confidence), confidenceCloseup: me((w = i == null ? void 0 : i.data.detection) == null ? void 0 : w.confidence), confidenceMiddle: me((K = n.data.detection) == null ? void 0 : K.confidence), imageResolution: ((W = (G = e.data) == null ? void 0 : G["imageResolution"]) == null ? void 0 : W.width) + "x" + ((J = (O = e.data) == null ? void 0 : O["imageResolution"]) == null ? void 0 : J.height), averageFps: g, captureTimeCloseup: x > 4959 + 53 * -97 + 227 ? ">45" : "" + x, captureTimeDistant: s > 4096 + -697 * -1 + -4763 ? ">30" : "" + s, camera: ni(r == null ? void 0 : r.deviceName, r == null ? void 0 : r.facingMode), instructionSet: r.instructionSet };
  this.sendAutoCaptureEvent(C, s + x);
}, async sendSmileLivenessData(t, o) {
  var C, u, f, p, v, w;
  if (!(t != null && t.length) || !(o != null && o.length))
    return;
  const [e, n] = t, [i, r] = o, a = ti(i.averageFps + (r == null ? void 0 : r.averageFps)) / (1156 + -19 * 347 + 259 * 21), g = hn(i.captureProcessDurationInMs), s = -5629 + -1 * -5294 + 1 * 338, x = { faceSize: me((C = n.data.detection) == null ? void 0 : C.faceSize), confidence: me((u = e.data.detection) == null ? void 0 : u.confidence), imageResolution: ((p = (f = e.data) == null ? void 0 : f["imageResolution"]) == null ? void 0 : p.width) + "x" + ((w = (v = e.data) == null ? void 0 : v["imageResolution"]) == null ? void 0 : w.height), averageFps: a, captureTimeNeutral: xo(g), captureTimeSmile: "" + s, camera: ni(i == null ? void 0 : i.deviceName, i.facingMode), instructionSet: i.instructionSet };
  this.sendAutoCaptureEvent(x, g + s);
} }, gx = () => {
  const t = sessionStorage.getItem("dot-user-id");
  if (t)
    return t;
  const o = ix();
  return sessionStorage.setItem("dot-user-id", o), o;
}, _t = { livenessImageProcessAnalytics: [], skipSendFaceData: !1, init(t, o) {
  if (nx())
    return;
  const e = gx();
  this.skipSendFaceData = o, Mt.init(e, t);
}, endSession() {
  this.skipSendFaceData = !1, Mt.endSession();
}, sendDocumentData(t) {
  Mt.sendDocumentData(t);
}, sendFaceData(t) {
  if (this.skipSendFaceData) {
    const o = {};
    o.averageFps = t.averageFps, o.captureProcessDurationInMs = t.captureProcessDurationInMs, o.deviceName = t.deviceName, o.facingMode = t.facingMode, o.instructionSet = t.instructionSet, this.livenessImageProcessAnalytics.push(o);
    return;
  }
  Mt.sendFaceData(t);
}, sendMagnifEyeData(t) {
  Mt.sendMagnifEyeData(t, this.livenessImageProcessAnalytics), this.livenessImageProcessAnalytics = [];
}, sendSmileLivenessData(t) {
  Mt.sendSmileLivenessData(t, this.livenessImageProcessAnalytics), this.livenessImageProcessAnalytics = [];
} };
function Wa(t) {
  t.getTracks().forEach((e) => {
    e.stop();
  });
}
function sx(t, o) {
  if (!t)
    return o;
  const { detectionRecord: e, hashedDetectedImages: n } = t;
  o.hashedDetectedImages && (n == null || n.push(...o.hashedDetectedImages)), o.detectionRecord && (e == null || e.push(...o.detectionRecord));
  const i = { ...t };
  return i.hashedDetectedImages = n, i.detectionRecord = e, i;
}
const Ai = {};
Ai.width = 1920, Ai.height = 1080, Ai.facingMode = "user";
const cx = Ai;
class Zn extends yI {
  constructor(e) {
    super();
    Q(this, "videoRef");
    Q(this, "mediaStream", null);
    Q(this, "videoTrack", null);
    Q(this, "availableCameraProperties", []);
    this.videoRef = e;
  }
  async initWebcam(e = {}) {
    const n = await this.getBestCamera(e.facingMode);
    await this.getAvailableCamerasInfo();
    const i = this.getConstraints(e, n);
    await this.startWebcam(i), ex() && await this.startWebcam(i);
  }
  async startWebcam(e = {}) {
    var n;
    return this.stopCamera(), Ha() && await Po(8540 + 2 * -4045), this.mediaStream = await navigator.mediaDevices.getUserMedia(e), this.videoRef.srcObject = this.mediaStream, await this.videoRef.play(), this.videoTrack = (n = this.mediaStream) == null ? void 0 : n.getVideoTracks()[4 * 629 + -1216 + -1300], this.checkVideoTrackSettings(), this.videoTrack;
  }
  checkVideoTrackSettings() {
    var i;
    const e = (i = this.videoTrack) == null ? void 0 : i.getSettings();
    if (!(e != null && e.height) || !(e != null && e.width))
      throw new q("Could not init camera settings");
    if (Math.min(e == null ? void 0 : e.width, e == null ? void 0 : e.height) < MI)
      throw this.stopCamera(), new q("Could not init video because of low camera resolution: " + e.width + "x" + e.height + ".");
  }
  async getBestCamera(e) {
    const n = {};
    return n.video = !0, this.mediaStream = await navigator.mediaDevices.getUserMedia(n), this.stopCamera(), Qg() && e === "environment" ? (await Zn.getVideoInputDeviceList()).find((a) => a.label.includes("back") && a.label.includes("0")) : void (1 * 6673 + 104 * 8 + -79 * 95);
  }
  async getAvailableCamerasInfo() {
    const e = await Zn.getVideoInputDeviceList();
    for (const n of e) {
      Ha() && await Po(-2777 * 1 + -2 * -2371 + -1515 * 1);
      try {
        const i = {};
        i.deviceId = n.deviceId, i.width = 480;
        const r = {};
        r.video = i;
        const a = await navigator.mediaDevices.getUserMedia(r), [g] = a.getVideoTracks(), s = g.getSettings(), x = { ...s };
        x.deviceName = g.label;
        const C = {};
        C.cameraProperties = x;
        const u = C;
        this.availableCameraProperties.push(u), Wa(a);
      } catch (i) {
        i instanceof Error && q.logError(i);
      }
    }
  }
  getConstraints(e, n) {
    const i = { ...cx, ...e };
    i.deviceId = n ? { exact: n.deviceId } : void (1434 * 5 + -9520 + -1 * -2350);
    const r = {};
    return r.video = i, r.audio = !1, r;
  }
  takePhoto() {
    var r;
    const e = (r = this.videoTrack) == null ? void 0 : r.getSettings();
    if (!(e != null && e.width))
      throw new q("Cant take photo - video width is undefined");
    if (!(e != null && e.height))
      throw new q("Cant take photo - video height is undefined");
    const n = document.createElement("canvas");
    n.width = e.width, n.height = e.height;
    const i = n.getContext("2d");
    if (!i)
      throw new q("Cant take photo - cant create context");
    return i.drawImage(this.videoRef, -41 * -66 + -89 * -53 + 571 * -13, 0), n;
  }
  getCameraResolution() {
    var i;
    const e = (i = this.videoTrack) == null ? void 0 : i.getSettings();
    if (!(e != null && e.width))
      throw new q("Video width is undefined");
    if (!(e != null && e.height))
      throw new q("Video height is undefined");
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
    const e = this.videoTrack.getSettings(), n = await navigator.mediaDevices.enumerateDevices(), i = n.find((r) => r.deviceId === e.deviceId);
    return i == null ? void 0 : i.label;
  }
  async applyNewConstraints(e) {
    if (!this.videoTrack)
      throw Error("Video track must be initialized to set new constraints");
    await this.videoTrack.applyConstraints(e);
  }
  async switchCamera() {
    if (!this.videoTrack)
      throw Error("Video track must be initialized to set new constraints");
    const e = this.videoTrack.getConstraints(), n = this.videoTrack.getSettings(), i = await Zn.getVideoInputDeviceList();
    if (i.length <= 2119 * 1 + -3088 * -2 + 319 * -26)
      return;
    const r = i.findIndex((s) => s.deviceId === n.deviceId), a = i[r + 1] ?? i[5549 + 6263 * 1 + -5906 * 2], g = this.getConstraints(e, a);
    await this.startWebcam(g);
  }
  stopCamera() {
    this.mediaStream && (Wa(this.mediaStream), this.videoRef.srcObject = null);
  }
  checkIfStreamIsRunning() {
    return !!this.videoRef.srcObject;
  }
  async getCameraProperties() {
    const e = await this.getDeviceName(), n = this.getCameraSettings(), i = { ...n };
    i.deviceName = e;
    const r = {};
    return r.currentCameraProperties = i, r.availableCameraProperties = this.availableCameraProperties, r;
  }
}
var He = {};
He.VITE_FACE_COUNTLY_APP_KEY = "5f83e83ee4cee1ab6e5bbf86e215644473299675", He.VITE_MAGNIFEYE_COUNTLY_APP_KEY = "d5ca54dabfb1a2c72d7090c9c8980252a879da44", He.VITE_DOCUMENT_COUNTLY_APP_KEY = "065cf6e242fc5e785cd17eebfbfbbd212a33133b", He.VITE_COUNTLY_URL = "https://innovatrics.count.ly", He.VITE_SMILE_COUNTLY_APP_KEY = "d64319129bb0ee02eccfab418edba9629a97d6b6", He.VITE_RSA_PUBLIC_KEY = "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", He.BASE_URL = "/", He.MODE = "production", He.DEV = !1, He.PROD = !0, He.SSR = !1;
var Ix = He;
const xx = () => {
  var t;
  return ((t = Ix.VITE_APP_ENV) == null ? void 0 : t.toLowerCase()) === "dev";
};
class xr extends Array {
  constructor(e) {
    super();
    Q(this, "size");
    this.size = e;
  }
  pushFixed(...e) {
    if (e.length > this.size) {
      const n = e.slice(-this.size);
      this.push(...n);
      return;
    }
    this.length === this.size && this.splice(-2149 + 38 * -67 + 5 * 939, e.length), this.push(...e);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(1 * -7841 + -17 * -94 + 6243);
  }
}
const lx = (t, o, e = zI) => new Promise((n) => {
  t.toBlob((i) => {
    if (!i)
      throw new Error("Canvas to Blob failed");
    n(i);
  }, e, o);
}), ux = async (t) => lx(t, 90), Cx = (t, o) => {
  const e = document.createElement("canvas");
  e.width = o.width, e.height = o.height;
  const n = e.getContext("2d");
  if (!n)
    throw new Error("cropImage ctx error");
  return n.drawImage(t, o.shiftX, o.shiftY, o.width, o.height, 149 * 41 + -9396 + 173 * 19, -7767 + 7 * -568 + 11743 * 1, e.width, e.height), e;
}, dx = (t) => {
  const o = t.getContext("2d");
  if (!o)
    throw new Error("getImageDataForSam ctx error");
  const { data: e } = o.getImageData(710 * 2 + 4349 + 5769 * -1, 3173 * -3 + -3894 + 3 * 4471, t.width, t.height);
  return e;
}, qg = (t, o, e, n) => {
  const i = t.getContext("2d");
  i && (i.beginPath(), n ? (i.fillStyle = e, i.fillRect(o.topLeft.x, o.topLeft.y, o.width, o.height)) : (i.strokeStyle = e, i.rect(o.topLeft.x, o.topLeft.y, o.width, o.height)), i.stroke());
}, lo = (t, o, e) => {
  const { height: n, shiftX: i, shiftY: r, width: a } = o, g = {};
  g.x = i, g.y = r;
  const s = {};
  s.topLeft = g, s.width = a, s.height = n, s.color = e, qg(t, s, e);
}, _g = (t, o, e) => {
  const n = t.getContext("2d");
  n && (n.fillStyle = e, n.fillRect(o.x, o.y, -763 + 97 * -89 + 9403, -1 * -9037 + -2075 * 4 + -730), n.beginPath());
}, Ax = (t, o) => {
  const { height: e, shiftX: n, shiftY: i, width: r } = o;
  return !(t.x < n || t.x > n + r || t.y < i || t.y > i + e);
}, fx = (t, o) => Object.values(t).every((e) => Ax(e, o)), px = (t, o) => {
  const e = ft(o);
  ue(() => {
    e.current = o;
  }, [o]), ue(() => {
    const n = (i) => e.current(i);
    return document.addEventListener(t, n), () => {
      document.removeEventListener(t, n);
    };
  }, [t]);
};
function yi() {
  throw new Error("Cycle detected");
}
var hx = Symbol.for("preact-signals");
function lr() {
  if (en > 1)
    en--;
  else {
    for (var t, o = !1; void (-7607 * -1 + 9136 + -16743) !== kn; ) {
      var e = kn;
      for (kn = void (-7225 + -2 * 2153 + -13 * -887), No++; void (6841 + -4567 * -2 + -1 * 15975) !== e; ) {
        var n = e.o;
        if (e.o = void (-138 * 53 + 3152 * -1 + 10466), e.f &= -(5195 + -1056 * -3 + -5 * 1672), !(15 * 254 + 2921 + -6723 & e.f) && ns(e))
          try {
            e.c();
          } catch (i) {
            !o && (t = i, o = !(-5058 + -8 * -467 + 1322));
          }
        e = n;
      }
    }
    if (No = 0, en--, o)
      throw t;
  }
}
var ie = void (1 * -8365 + -139 * 62 + -333 * -51), kn = void (5331 * -1 + 8858 + -3527), en = -6004 + 316 * 19, No = 8812 * -1 + 4 * 951 + 5008, vi = 8719 + -49 * -87 + 12982 * -1;
function es(t) {
  if (void (-3681 + 9515 * -1 + 2 * 6598) !== ie) {
    var o = t.n;
    if (void (-2 * -457 + -7579 + -43 * -155) === o || o.t !== ie)
      return o = { i: 0, S: t, p: ie.s, n: void (65 * 19 + -1 * 7211 + 5976), t: ie, e: void (-1 * -7941 + 3870 + -11811), x: void (5103 + 5103 * -1), r: o }, void (-6733 + -5 * -655 + -38 * -91) !== ie.s && (ie.s.n = o), ie.s = o, t.n = o, 5931 + -21 * 383 + 2144 & ie.f && t.S(o), o;
    if (-(-4038 + -1 * 887 + 4926) === o.i)
      return o.i = 3555 + -6 * -94 + 3 * -1373, o.n !== void 0 && (o.n.p = o.p, void (-601 * -5 + -1696 + 11 * -119) !== o.p && (o.p.n = o.n), o.p = ie.s, o.n = void (-96 * 102 + 209 * 47 + 31 * -1), ie.s.n = o, ie.s = o), o;
  }
}
function Ae(t) {
  this.v = t, this.i = -3541 + -5 * 771 + -1 * -7396, this.n = void (-4483 * -1 + 633 * -1 + -70 * 55), this.t = void (-7 * 1389 + -99 * 29 + -12594 * -1);
}
Ae.prototype.brand = hx, Ae.prototype.h = function() {
  return !0;
}, Ae.prototype.S = function(t) {
  this.t !== t && t.e === void 0 && (t.x = this.t, void (1 * 4423 + 1280 + -5703) !== this.t && (this.t.e = t), this.t = t);
}, Ae.prototype.U = function(t) {
  if (this.t !== void 0) {
    var o = t.e, e = t.x;
    void (-1 * 3478 + 3 * -691 + 5551) !== o && (o.x = e, t.e = void (4013 * -1 + 7532 + -17 * 207)), void (169 * -22 + 641 * 3 + 1795) !== e && (e.e = o, t.x = void (7449 + 151 * -53 + 554)), t === this.t && (this.t = e);
  }
}, Ae.prototype.subscribe = function(t) {
  var o = this;
  return Cr(function() {
    var e = o.value, n = 2 * 39 + -20 * -328 + -6606 & this.f;
    this.f &= -33;
    try {
      t(e);
    } finally {
      this.f |= n;
    }
  });
}, Ae.prototype.valueOf = function() {
  return this.value;
}, Ae.prototype.toString = function() {
  return this.value + "";
}, Ae.prototype.toJSON = function() {
  return this.value;
}, Ae.prototype.peek = function() {
  return this.v;
}, Object.defineProperty(Ae.prototype, "value", { get: function() {
  var t = es(this);
  return void (9278 * 1 + -2273 * 2 + 2 * -2366) !== t && (t.i = this.i), this.v;
}, set: function(t) {
  if (ie instanceof lt && function() {
    throw new Error("Computed cannot have side-effects");
  }(), t !== this.v) {
    No > 31 * 103 + -9 * 1063 + 249 * 26 && yi(), this.v = t, this.i++, vi++, en++;
    try {
      for (var o = this.t; void (1954 + 6 * 1111 + -8620) !== o; o = o.x)
        o.t.N();
    } finally {
      lr();
    }
  }
} });
function ts(t) {
  return new Ae(t);
}
function ns(t) {
  for (var o = t.s; void (5683 + 3 * -501 + -4180) !== o; o = o.n)
    if (o.S.i !== o.i || !o.S.h() || o.S.i !== o.i)
      return !(899 * -2 + -9 * -337 + -19 * 65);
  return !(-600 * 8 + 1 * -7451 + 2 * 6126);
}
function is(t) {
  for (var o = t.s; void (-113 * -73 + -6626 + -1623) !== o; o = o.n) {
    var e = o.S.n;
    if (void (-6571 + 1 * 6571) !== e && (o.r = e), o.S.n = o, o.i = -(4660 + -4659 * 1), void (328 * -17 + 5048 + -132 * -4) === o.n) {
      t.s = o;
      break;
    }
  }
}
function os(t) {
  for (var o = t.s, e = void (5081 * -1 + -543 * -5 + 182 * 13); o !== void 0; ) {
    var n = o.p;
    -(-5556 + 1861 * 5 + -3748) === o.i ? (o.S.U(o), n !== void 0 && (n.n = o.n), o.n !== void 0 && (o.n.p = n)) : e = o, o.S.n = o.r, void (-1 * -4918 + -193 * -6 + 2 * -3038) !== o.r && (o.r = void (-1 * 977 + -6010 + 6987)), o = n;
  }
  t.s = e;
}
function lt(t) {
  Ae.call(this, void 0), this.x = t, this.s = void (489 * -17 + 2212 + -1 * -6101), this.g = vi - (1 * 2393 + -5515 + -3 * -1041), this.f = -1901 * 3 + -870 + 6577;
}
(lt.prototype = new Ae()).h = function() {
  if (this.f &= -(989 * 6 + 4 * -87 + -5583), -4311 + -154 * -28 & this.f)
    return !(69 * 103 + 40 * 202 + -7593 * 2);
  if (-8499 + -1 * -8119 + 412 == (36 & this.f))
    return !(-6589 + 9 * 9 + 6508);
  if (this.f &= -(4005 + 1933 * 4 + -11732), this.g === vi)
    return !(2507 + 3 * -412 + -1271);
  if (this.g = vi, this.f |= 21 * -213 + 2 * -578 + 5630, this.i > -4425 * 1 + 1 * -9833 + 14258 && !ns(this))
    return this.f &= -(-139 * -38 + -4721 + -559), !(-5418 + -387 * -14);
  var t = ie;
  try {
    is(this), ie = this;
    var o = this.x();
    (16 & this.f || this.v !== o || -7930 + 122 * 65 === this.i) && (this.v = o, this.f &= -17, this.i++);
  } catch (e) {
    this.v = e, this.f |= 16, this.i++;
  }
  return ie = t, os(this), this.f &= -(-1945 * -1 + -5026 + 3083), !(4 * -1639 + -5297 + -1 * -11853);
}, lt.prototype.S = function(t) {
  if (void (8368 + 354 * 1 + -8722) === this.t) {
    this.f |= 5143 * -1 + 2 * -601 + 6381;
    for (var o = this.s; void (1 * -1089 + -6749 + 7838) !== o; o = o.n)
      o.S.S(o);
  }
  Ae.prototype.S.call(this, t);
}, lt.prototype.U = function(t) {
  if (void (1030 * 2 + -6028 + -31 * -128) !== this.t && (Ae.prototype.U.call(this, t), void (1 * -1126 + 2659 * -1 + 3785) === this.t)) {
    this.f &= -(1445 * -1 + 7622 + -6144);
    for (var o = this.s; void (86 * -4 + 8119 + -7775) !== o; o = o.n)
      o.S.U(o);
  }
}, lt.prototype.N = function() {
  if (!(7824 * 1 + 1 * 5289 + 7 * -1873 & this.f)) {
    this.f |= -9 * 801 + -6394 + 13609;
    for (var t = this.t; void (1009 + -1009 * 1) !== t; t = t.x)
      t.t.N();
  }
}, lt.prototype.peek = function() {
  if (this.h() || yi(), -147 * -1 + -1 * -289 + -1 * 420 & this.f)
    throw this.v;
  return this.v;
}, Object.defineProperty(lt.prototype, "value", { get: function() {
  -3384 + 38 * 5 + 3195 & this.f && yi();
  var t = es(this);
  if (this.h(), t !== void 0 && (t.i = this.i), -477 * -18 + -6183 + -2387 & this.f)
    throw this.v;
  return this.v;
} });
function mx(t) {
  return new lt(t);
}
function rs(t) {
  var o = t.u;
  if (t.u = void (7 * -1085 + 613 * 1 + -2 * -3491), typeof o == "function") {
    en++;
    var e = ie;
    ie = void (10 * 3 + 4726 * 1 + -4756);
    try {
      o();
    } catch (n) {
      throw t.f &= -(-4283 * 2 + 9998 + -1430), t.f |= -6821 + 6829 * 1, ur(t), n;
    } finally {
      ie = e, lr();
    }
  }
}
function ur(t) {
  for (var o = t.s; void (89 * -7 + -1 * -7554 + -6931 * 1) !== o; o = o.n)
    o.S.U(o);
  t.x = void (-1950 * -5 + 7396 * -1 + -2 * 1177), t.s = void (4 * -813 + 1427 + 1825), rs(t);
}
function bx(t) {
  if (ie !== this)
    throw new Error("Out-of-order effect");
  os(this), ie = t, this.f &= -(1328 + -3 * -2669 + -153 * 61), -19 * 221 + -1 * -1471 + 48 * 57 & this.f && ur(this), lr();
}
function wn(t) {
  this.x = t, this.u = void (17 * -494 + 2255 + 6143), this.s = void 0, this.o = void (2239 * -3 + 2 * -822 + -8361 * -1), this.f = -2826 + 437 * 1 + 807 * 3;
}
wn.prototype.c = function() {
  var t = this.S();
  try {
    if (-563 * 13 + -1 * 3215 + 10542 * 1 & this.f || void (2332 + -3 * 1052 + -206 * -4) === this.x)
      return;
    var o = this.x();
    typeof o == "function" && (this.u = o);
  } finally {
    t();
  }
}, wn.prototype.S = function() {
  2097 + 2 * -1048 & this.f && yi(), this.f |= 1, this.f &= -(-7 * 1399 + 38 * -241 + -9480 * -2), rs(this), is(this), en++;
  var t = ie;
  return ie = this, bx.bind(this, t);
}, wn.prototype.N = function() {
  !(2689 + 13 * 221 + -5560 & this.f) && (this.f |= -1499 * -1 + -8279 + 2 * 3391, this.o = kn, kn = this);
}, wn.prototype.d = function() {
  this.f |= 1822 * 1 + 2 * -3184 + -759 * -6, 8539 + -3071 * 3 + 675 & this.f || ur(this);
};
function Cr(t) {
  var o = new wn(t);
  try {
    o.c();
  } catch (e) {
    throw o.d(), e;
  }
  return o.d.bind(o);
}
var uo;
function qt(t, o) {
  Z[t] = o.bind(null, Z[t] || function() {
  });
}
function ii(t) {
  uo && uo(), uo = t && t.S();
}
function as(t) {
  var o = this, e = t.data, n = Zt(e);
  n.value = e;
  var i = Je(function() {
    for (var r = o.__v; r = r.__; )
      if (r.__c) {
        r.__c.__$f |= -1 * 5101 + -3 * -391 + -3932 * -1;
        break;
      }
    return o.__$u.c = function() {
      var a;
      !qa(i.peek()) && ((a = o.base) == null ? void (8618 + -1 * -5259 + 1 * -13877) : a.nodeType) === 3 ? o.base.data = i.peek() : (o.__$f |= 3467 * 1 + 6 * -1041 + -1390 * -2, o.setState({}));
    }, mx(function() {
      var a = n.value.value;
      return -7441 + -25 * 220 + 12941 === a ? 0 : a === !0 ? "" : a || "";
    });
  }, []);
  return i.value;
}
as.displayName = "_st";
var Yo = {};
Yo.configurable = !0, Yo.value = void (-1021 * 5 + 5417 + -312);
var Lo = {};
Lo.configurable = !(-29 * 118 + -581 * 17 + 13299), Lo.value = as;
var To = {};
To.configurable = !(-909 * -1 + 1352 + 323 * -7), To.get = function() {
  var t = {};
  return t.data = this, t;
};
var Fo = {};
Fo.configurable = !(-1117 * 7 + 9017 * -1 + 2 * 8418), Fo.value = 1;
var mn = {};
mn.constructor = Yo, mn.type = Lo, mn.props = To, mn.__b = Fo, Object.defineProperties(Ae.prototype, mn), qt("__b", function(t, o) {
  if (typeof o.type == "string") {
    var e, n = o.props;
    for (var i in n)
      if (i !== "children") {
        var r = n[i];
        r instanceof Ae && (e || (o.__np = e = {}), e[i] = r, n[i] = r.peek());
      }
  }
  t(o);
}), qt("__r", function(t, o) {
  ii();
  var e, n = o.__c;
  n && (n.__$f &= -(-1773 + 71 * 25), void (4789 + 925 * 4 + 8489 * -1) === (e = n.__$u) && (n.__$u = e = function(i) {
    var r;
    return Cr(function() {
      r = this;
    }), r.c = function() {
      n.__$f |= -13 * -95 + -3757 * -1 + -4991, n.setState({});
    }, r;
  }())), ii(e), t(o);
}), qt("__e", function(t, o, e, n) {
  ii(), t(o, e, n);
}), qt("diffed", function(t, o) {
  ii();
  var e;
  if (typeof o.type == "string" && (e = o.__e)) {
    var n = o.__np, i = o.props;
    if (n) {
      var r = e.U;
      if (r)
        for (var a in r) {
          var g = r[a];
          void (-227 * -29 + 5599 + -12182) !== g && !(a in n) && (g.d(), r[a] = void (-2488 + -47 * 137 + -113 * -79));
        }
      else
        e.U = r = {};
      for (var s in n) {
        var x = r[s], C = n[s];
        void (-1 * -620 + -7583 + 6963) === x ? (x = yx(e, s, C, i), r[s] = x) : x.o(C, i);
      }
    }
  }
  t(o);
});
function yx(t, o, e, n) {
  var i = o in t && t.ownerSVGElement === void 0, r = ts(e);
  return { o: function(a, g) {
    r.value = a, n = g;
  }, d: Cr(function() {
    var a = r.value.value;
    n[o] !== a && (n[o] = a, i ? t[o] = a : a ? t.setAttribute(o, a) : t.removeAttribute(o));
  }) };
}
qt("unmount", function(t, o) {
  if (typeof o.type == "string") {
    var e = o.__e;
    if (e) {
      var n = e.U;
      if (n) {
        e.U = void (-8787 + -759 * 2 + -9 * -1145);
        for (var i in n) {
          var r = n[i];
          r && r.d();
        }
      }
    }
  } else {
    var a = o.__c;
    if (a) {
      var g = a.__$u;
      g && (a.__$u = void (-11402 + -5701 * -2), g.d());
    }
  }
  t(o);
}), qt("__h", function(t, o, e, n) {
  (n < 2 * -1681 + -8925 + 12290 || -100 + -13 * 407 + -135 * -40 === n) && (o.__$f |= 8172 + -5214 * 1 + -2956), t(o, e, n);
}), We.prototype.shouldComponentUpdate = function(t, o) {
  var e = this.__$u;
  if (!(e && e.s !== void 0 || -2 * 2195 + 9936 + -5542 & this.__$f))
    return !0;
  if (3 & this.__$f)
    return !(-8924 + -97 * -92);
  for (var n in o)
    return !(1143 * 8 + -1 * -2492 + 2 * -5818);
  for (var i in t)
    if (i !== "__source" && t[i] !== this.props[i])
      return !(282 * 7 + -3925 + 1 * 1951);
  for (var r in this.props)
    if (!(r in t))
      return !0;
  return !(-4404 + 7614 * 1 + -3209);
};
function Zt(t) {
  return Je(function() {
    return ts(t);
  }, []);
}
const vx = (t) => {
  const o = Zt(!1);
  return px(t, (n) => {
    n.detail && (o.value = n.detail.animationEnd);
  }), o;
};
var gs = ((t) => (t.DOCUMENT = "document-auto-capture:dev", t.FACE = "face-auto-capture:dev", t))(gs || {});
const Do = {};
Do.SIMD = "simd", Do.NO_SIMD = "no-simd";
const Oa = Do, ss = tr(null), cs = () => {
  const t = Wi(ss);
  if (!t)
    throw new Error("Missing provider for CameraOptionsContext");
  return t;
}, wx = (t) => {
  const {
    cameraFacing: o,
    onError: e,
    onPhotoTaken: n,
    sessionToken: i,
    thresholds: r,
    wasmDirectoryPath: a
  } = t;
  return {
    onPhotoTaken: n,
    onError: e,
    cameraFacing: o ?? "user",
    wasmDirectoryPath: a,
    sessionToken: i,
    thresholds: {
      faceConfidence: (r == null ? void 0 : r.faceConfidence) ?? PI,
      minFaceSizeRatio: (r == null ? void 0 : r.minFaceSizeRatio) ?? NI,
      maxFaceSizeRatio: (r == null ? void 0 : r.maxFaceSizeRatio) ?? YI,
      sharpnessThreshold: (r == null ? void 0 : r.sharpnessThreshold) ?? TI,
      brightnessLowThreshold: (r == null ? void 0 : r.brightnessLowThreshold) ?? FI,
      brightnessHighThreshold: (r == null ? void 0 : r.brightnessHighThreshold) ?? DI,
      outOfBoundsThreshold: (r == null ? void 0 : r.outOfBoundsThreshold) ?? LI,
      devicePitchAngleThreshold: (r == null ? void 0 : r.devicePitchAngleThreshold) ?? XI
    }
  };
}, Bx = ({
  cameraOptions: t,
  children: o
}) => {
  const e = Je(() => ({
    faceCameraOptions: wx(t)
  }), [t]);
  return Ie(ss.Provider, {
    value: e,
    children: o
  });
}, Is = (t, o) => {
  const e = {};
  e.detail = o, document.dispatchEvent(new CustomEvent(t, e));
}, Zi = class Zi {
  constructor() {
    Q(this, "lastDetails", {});
    Q(this, "delayedTime", 4959 + -3251 * -3 + -14712);
  }
  static getInstance() {
    return !this._instance && (this._instance = new Zi()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = -8797 + -1 * -4226 + 4571 * 1;
  }
  isDetailChanged(o, e) {
    return JSON.stringify(e) !== JSON.stringify(this.lastDetails[o]) ? (this.lastDetails[o] = e, !0) : !1;
  }
  dispatchCustomEventOnChange(o, e) {
    this.isDetailChanged(o, e) && Is(o, e);
  }
  dispatchDelayedCustomEventOnChange(o, e, n) {
    const i = performance.now();
    i - this.delayedTime > n && (this.dispatchCustomEventOnChange(o, e), this.delayedTime = i);
  }
};
Q(Zi, "_instance");
let Wn = Zi;
const Pn = Wn.getInstance(), Va = (t, o, e = BI) => {
  const n = {};
  n.instructionCode = o;
  const i = n;
  Pn.dispatchDelayedCustomEventOnChange(t, i, e);
}, Sx = (t, o) => {
  Pn.dispatchCustomEventOnChange(t, o);
}, Gx = (t, o) => {
  const e = {};
  e.size = o;
  const n = e;
  Pn.dispatchCustomEventOnChange(t, n);
}, Zx = (t, o, e) => {
  const n = o.confidence < e ? void 0 : o, i = {};
  i.detectedObject = n;
  const r = i;
  Pn.dispatchCustomEventOnChange(t, r);
}, kx = (t, o, e) => {
  const n = {};
  n.image = e, n.data = {}, n.data.detection = o, n.data.imageResolution = {}, n.data.imageResolution.width = e.width, n.data.imageResolution.height = e.height;
  const i = n;
  Pn.dispatchCustomEventOnChange(t, i);
}, Xo = (t, o) => {
  Is(t, o);
}, Kx = (t, o) => {
  if (xx()) {
    const e = {};
    e.candidateSelectionImages = o;
    const n = e;
    Wn.getInstance().dispatchCustomEventOnChange(t, n);
  }
}, Hx = (t, o) => {
  const { cameraResolution: e, shouldMirror: n } = o;
  ue(() => {
    if (!e)
      return;
    const i = {};
    i.cameraResolution = e, i.isMirroring = n, Sx(t, i);
  }, [e, n, t]);
}, Wx = (t) => t === Tg.CONTROL ? !Qg() : !0, Ox = (t, o) => {
  const { appState: e, handleAppStateChange: n, handleError: i } = Li(), [r, a] = Ye(), g = Je(() => {
    const x = o == null ? void 0 : o.getCameraSettings().facingMode;
    return x ? r ?? x === "user" : r ?? Wx(t);
  }, [o, r, t]);
  ue(() => {
    const x = () => {
      e !== Ue.LOADING && n(Ue.RUNNING);
    }, C = () => {
      a(r === void 0 ? !g : !r);
    }, u = async () => {
      if (o) {
        n(Ue.LOADING);
        try {
          await o.switchCamera(), n(Ue.RUNNING);
        } catch (p) {
          if (p instanceof Error) {
            i(q.fromCameraError(p));
            return;
          }
        }
        a(void 0);
      }
    }, f = (p) => {
      var v;
      switch ((v = p.detail) == null ? void 0 : v["instruction"]) {
        case Ci.CONTINUE_DETECTION:
          x();
          break;
        case Ci.TOGGLE_MIRROR:
          C();
          break;
        case Ci.SWITCH_CAMERA:
          u();
          break;
        default:
          return;
      }
    };
    return document.addEventListener(t, f), () => {
      document.removeEventListener(t, f);
    };
  }, [e, o, i, r, n, g, t]);
  const s = {};
  return s.shouldMirror = g, s;
}, Vx = (t, o) => {
  var s;
  const e = ft(), { handleError: n, setIsCameraReady: i } = Li(), [r, a] = Ye(), g = hi((x) => {
    a((C) => rx(x, C));
  }, []);
  return ue(() => ((async () => {
    if (!(t != null && t.current)) {
      n(new q("Something went wrong during video initialization"));
      return;
    }
    const C = new Zn(t.current);
    try {
      const u = {};
      u.facingMode = o, await C.initWebcam(u);
    } catch (u) {
      if (u instanceof Error) {
        n(q.fromCameraError(u));
        return;
      }
    }
    i(!0), g(C.getCameraResolution()), e.current = C;
  })(), function() {
    e.current && e.current.stopCamera();
  }), [o, n, i, t, g]), { cameraHandler: e.current, cameraSettings: (s = e.current) == null ? void 0 : s.getCameraSettings(), cameraResolution: r, onCameraResolutionChange: g };
}, Rx = () => {
  ue(() => (window.addEventListener("beforeunload", _t.endSession), () => {
    _t.endSession(), window.removeEventListener("beforeunload", _t.endSession);
  }), []);
}, Ex = (t, o) => {
  const [e, n] = Ye();
  ue(() => {
    const i = () => {
      !t.current || e === window.innerWidth || (n(window.innerWidth), Gx(o, t.current.getBoundingClientRect()));
    };
    return i(), window.addEventListener("resize", i), () => {
      window.removeEventListener("resize", i);
    };
  }, [t, o, e]);
};
function Px(t) {
  return En(Math.abs(t));
}
const Nx = () => {
  const [t, o] = Ye(null), e = ft(new xr(-3717 + 7127 * -1 + 10849));
  function n(r) {
    const { z: a } = r.accelerationIncludingGravity || {};
    if (!a)
      return;
    e.current.pushFixed(Px(a));
    const g = En(jg(e.current)), s = {};
    s.z = g, o(s);
  }
  ue(() => (window.addEventListener("devicemotion", ax(n, qI), !0), () => {
    window.removeEventListener("devicemotion", n, !0);
  }), []);
  const i = {};
  return i.acceleration = t, i;
}, dr = (t) => {
  const { height: o, width: e } = Mg(t), n = (t.width - e) / (106 * 93 + -1 * 5170 + -4686), i = (t.height - o) / (-1 * -6467 + -117 * 75 + -1 * -2310), r = {};
  return r.shiftX = n, r.shiftY = i, r.width = e, r.height = o, r;
}, xs = (t, o) => {
  const { height: e, width: n } = Mg(t), i = Ti(t.width, t.height), r = n - i * o * 2, a = e - i * o * (7 * -187 + 898 + 413 * 1), g = (t.width - r) / (-11145 + -11147 * -1), s = (t.height - a) / (-5871 + -1 * -5873), x = {};
  return x.shiftX = g, x.shiftY = s, x.width = r, x.height = a, x;
}, Co = (t, o) => {
  const { shiftX: e, shiftY: n } = dr(t), i = {};
  return i.x = o.x + e, i.y = o.y + n, i;
}, Yx = (t, o) => ({ ...o, topLeft: Co(t, o.topLeft), bottomRight: Co(t, o.bottomRight), faceCenter: Co(t, o.faceCenter) }), ls = (t, o) => {
  const { faceCenter: e, faceSize: n } = t, i = kI(n, o), r = {};
  r.x = e.x, r.y = e.y - i;
  const a = {};
  a.x = e.x + i, a.y = e.y;
  const g = {};
  g.x = e.x, g.y = e.y + i;
  const s = {};
  s.x = e.x - i, s.y = e.y;
  const x = {};
  return x.top = r, x.right = a, x.bottom = g, x.left = s, Jt(x);
};
var Lx = { VITE_FACE_COUNTLY_APP_KEY: "5f83e83ee4cee1ab6e5bbf86e215644473299675", VITE_MAGNIFEYE_COUNTLY_APP_KEY: "d5ca54dabfb1a2c72d7090c9c8980252a879da44", VITE_DOCUMENT_COUNTLY_APP_KEY: "065cf6e242fc5e785cd17eebfbfbbd212a33133b", VITE_COUNTLY_URL: "https://innovatrics.count.ly", VITE_SMILE_COUNTLY_APP_KEY: "d64319129bb0ee02eccfab418edba9629a97d6b6", VITE_RSA_PUBLIC_KEY: "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const Tx = (t, o) => {
  const {
    bottomRight: e,
    faceCenter: n,
    topLeft: i
  } = o, r = {
    topLeft: i,
    width: e.x - i.x,
    height: e.y - i.y
  };
  qg(t, r, "rgba(255, 0, 0, 0.3)", !0), _g(t, n, "lime");
}, Fx = (t, o, e) => {
  const n = ls(o, e);
  Object.values(n).map((i) => _g(t, i, "orange"));
}, Dx = ({
  cameraResolution: t,
  detectionDetails: o,
  isImageMirror: e
}) => {
  const {
    faceCameraOptions: {
      thresholds: n
    }
  } = cs(), i = ft(null);
  if (ue(() => {
    if (!i.current)
      return;
    i.current.width = t.width, i.current.height = t.height, bI(i.current);
    const p = dr(t), v = xs(t, n.outOfBoundsThreshold), w = ZI(t);
    o.value && (Tx(i.current, o.value.face), Fx(i.current, o.value.face, t), lo(i.current, p, "lime"), lo(i.current, v, "yellow"), lo(i.current, w, "blue"));
  }, [t, n, o]), !o.value)
    return null;
  const {
    detectionTime: r,
    face: a,
    fps: g,
    instructionCode: s,
    invalidValidators: x,
    resolution: C,
    samVersion: u
  } = o.value, f = {
    Confidence: a.confidence,
    "Face center": JSON.stringify(a.faceCenter),
    "Face size": a.faceSize,
    Brightness: a.brightness,
    Sharpness: a.sharpness,
    "Detection time": r,
    FPS: g,
    Instruction: s,
    Resolution: JSON.stringify(C),
    "Component version": Lx.VITE_PACKAGE_VERSION
  };
  return u && (f["SAM version"] = u), x.length > 0 && (f["Invalid validators"] = x.join(", ")), Ie(mI, {
    ref: i,
    cameraResolution: t,
    detectionDetails: f,
    isImageMirror: e
  });
}, Xx = async () => WebAssembly.validate(new Uint8Array([4318 + 1 * -8361 + 4043, 2 * -743 + -1368 + -1 * -2951, -26 * -83 + 1447 + -5 * 698, 1449 * -2 + 2637 + -1 * -370, -498 + 1 * 4519 + 20 * -201, 1 * 2308 + -768 * 3 + -1 * 4, -1 * -7742 + -11 * 59 + 7093 * -1, 3239 + -1 * -413 + -3652, -2 * -2182 + 4491 + 1 * -8854, -15057 + 886 * 17, 1 * -9263 + -1043 + -10307 * -1, -58 * -50 + -1163 * -5 + -8619, 18 * 217 + -5448 + 1542, 368 * 1 + 106 * -18 + 67 * 23, -2731 * 2 + -6605 + -5 * -2438, 5 * -65 + 4 * 764 + 31 * -88, 2, 4585 * 1 + 4527 * 1 + -9111, 1 * 1405 + -3647 + 2242, -2503 + -2513 * -1, -569 * -7 + 1 * 666 + -4639, 1, 1632 + -6529 * 1 + -45 * -109, 4350 + -1291 * -2 + -6932, -3406 + 296 * -7 + -1 * -5543, -5353 + -5353 * -1, 12354 + 12101 * -1, -1869 + -3061 * 3 + -217 * -51, -12846 + -1 * -13099, 198 * -4 + 1019 + 129 * -1, 11]));
async function jx() {
  const t = {};
  t.name = Ug, t.length = 256;
  const o = await window.crypto.subtle.generateKey(t, !0, ["encrypt", "decrypt"]), e = Uint8Array.from(Array(-590 + -1 * -606).fill(0)), n = window.crypto.getRandomValues(e), i = {};
  return i.key = o, i.iv = n, i;
}
async function Mx(t) {
  const { iv: o, key: e } = await jx(), n = {};
  n.name = Ug, n.iv = o;
  const i = await window.crypto.subtle.encrypt(n, e, t), r = await window.crypto.subtle.exportKey("raw", e), a = {};
  return a.message = i, a.key = r, a.iv = o, a;
}
function Ux(t) {
  const o = new ArrayBuffer(t.length), e = new Uint8Array(o);
  for (let n = -227 * -37 + 3467 * -2 + -1 * 1465, i = t.length; n < i; n++)
    e[n] = t.charCodeAt(n);
  return o;
}
function Jx() {
  const t = "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", o = window.atob(t), e = window.atob(o), n = Ux(e), i = {};
  return i.name = Jg, i.hash = QI, window.crypto.subtle.importKey("spki", n, i, !0, ["encrypt"]);
}
async function Qx(t) {
  const o = await Jx(), e = {};
  return e.name = Jg, window.crypto.subtle.encrypt(e, o, t);
}
async function zx(t) {
  const { iv: o, key: e, message: n } = await Mx(t), i = await Qx(e), r = {};
  return r.key = i, r.iv = o, r.message = n, r;
}
async function $x(t) {
  const o = await window.crypto.subtle.digest("SHA-1", t);
  return Array.from(new Uint8Array(o)).map((e) => e.toString(115 + 3048 * 3 + -9243).padStart(-5275 + 3 * 1759, "0")).join("");
}
class qx {
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
    Q(this, "imagesForDuplicateDetection", new xr(UI));
  }
  async initDetector(o) {
    await this.detector.initSamModule(location.href, o);
    const e = await this.detector.getSamVersion();
    this.setSamVersion(e), this.isDetectorInitialized = !0;
  }
  async getInstructionSet() {
    return await Xx() ? Oa.SIMD : Oa.NO_SIMD;
  }
  async init({ thresholds: o, wasmDirectoryPath: e }) {
    this.setThresholds(o), await this.initDetector(e);
  }
  setSamVersion(o) {
    if (!o || !this.areVersionsCompatible(o))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new q("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = o;
  }
  areVersionsCompatible(o) {
    return o === _I;
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
      throw new q("Thresholds for " + this.className + " are not provided");
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
    return Object.values(o).every((n) => n === !0);
  }
  isNewImageBetter(o, e) {
    return e.sharpness > o.sharpness;
  }
  async collectImagesForDuplicateDetection(o) {
    const e = o.length / $I, n = e / (6682 + -1 * -2659 + 3 * -3113), i = o.length / 2, r = await $x(o.slice(i - n, i + n));
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
    var n, i;
    e.ready = new Promise(function(c, I) {
      n = c, i = I;
    });
    var r = {}, a;
    for (a in e)
      e.hasOwnProperty(a) && (r[a] = e[a]);
    var g = "./this.program", s = !(8563 + 11 * -737 + 7 * -65), x = !(-1565 * 3 + -5321 + 3339 * 3);
    s = typeof window == "object", x = typeof importScripts == "function";
    var C = "", u;
    (s || x) && (x ? C = self.location.href : document.currentScript && (C = document.currentScript.src), t && (C = t), -98 * -101 + -947 + -8951 !== C.indexOf("blob:") ? C = C.substr(0, C.lastIndexOf("/") + (-925 * -1 + 9382 + -1 * 10306)) : C = "", x && (u = function(c) {
      var I = new XMLHttpRequest();
      return I.open("GET", c, !1), I.responseType = "arraybuffer", I.send(null), new Uint8Array(I.response);
    }));
    var f = e.printErr || console.warn.bind(console);
    for (a in r)
      r.hasOwnProperty(a) && (e[a] = r[a]);
    r = null, e.thisProgram && (g = e.thisProgram);
    var p;
    e.wasmBinary && (p = e.wasmBinary), e.noExitRuntime && e.noExitRuntime, typeof WebAssembly != "object" && _e("no native wasm support detected");
    var v, w = !1;
    function K(c) {
      c || _e("Assertion failed: undefined");
    }
    var G = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void (8 * 61 + 7603 + -899 * 9);
    function W(c, I, l) {
      var A = Ce;
      if (-3136 + -9 * 753 + 9913 < l) {
        l = I + l - (3 * -702 + 8567 + 340 * -19);
        for (var m = -1 * -4380 + 8211 + -1 * 12591; m < c.length; ++m) {
          var b = c.charCodeAt(m);
          if (-1 * -20285 + -2 * -21592 + -8173 <= b && 67 * -1431 + -63679 + 216899 >= b) {
            var S = c.charCodeAt(++m);
            b = -126964 + -1 * 92080 + -204 * -1395 + ((b & -1 * 2059 + -8942 + 12 * 1002) << 9822 + 2473 * -3 + 2393 * -1) | S & 6390 + 1061 * -3 + -8 * 273;
          }
          if (2248 + 127 * 31 + -6058 >= b) {
            if (I >= l)
              break;
            A[I++] = b;
          } else {
            if (-1 * 7677 + 7411 * 1 + 2313 >= b) {
              if (I + (-49 * -23 + 56 * 116 + -103 * 74) >= l)
                break;
              A[I++] = -1056 + -3 * 3227 + 10929 | b >> 255 * 10 + -8390 * 1 + 5846 * 1;
            } else {
              if (55728 + 3 * 3269 >= b) {
                if (I + (-8700 + 38 * 229) >= l)
                  break;
                A[I++] = 924 + -1 * 7245 + -5 * -1309 | b >> 12;
              } else {
                if (I + (137 * 70 + 4189 + -13776) >= l)
                  break;
                A[I++] = -4578 + -146 * -33 | b >> -12 * 446 + 2778 + -6 * -432, A[I++] = -1 * -9977 + 1859 + -11708 | b >> -1374 * -1 + 74 * -17 + -104 & 94 * 52 + -3 * 1977 + 1106;
              }
              A[I++] = -5117 + -481 * -7 + 313 * 6 | b >> -1500 * -2 + -7 * -543 + -755 * 9 & -7879 + -6 * 298 + 9730;
            }
            A[I++] = 128 | b & 1 * 9395 + 1 * 2251 + -11583;
          }
        }
        A[I] = -323 * 1 + -33 * 111 + 3986;
      }
    }
    var O = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void (-4108 + 1658 * -3 + 478 * 19);
    function J(c, I) {
      for (var l = c >> 1, A = l + I / 2; !(l >= A) && Re[l]; )
        ++l;
      if (l <<= 9464 + 67 * 101 + 15 * -1082, 89 * -67 + -73 * 1 + -1 * -6068 < l - c && O)
        return O.decode(Ce.subarray(c, l));
      for (l = 1366 * 3 + -3944 + -154, A = ""; ; ) {
        var m = fe[c + 2 * l >> 1];
        if (4 * -520 + -57 * -12 + 1396 == m || l == I / (1 * 440 + -1 * 5645 + 41 * 127))
          return A;
        ++l, A += String.fromCharCode(m);
      }
    }
    function F(c, I, l) {
      if (void (3177 + -1 * 8582 + -23 * -235) === l && (l = 1010506822 + -16477925 * -69), -1762 + -1 * -1764 > l)
        return 12 * -582 + 6721 + -1 * -263;
      l -= 2;
      var A = I;
      l = l < (-9728 + 432 * -1 + -10162 * -1) * c.length ? l / (179 * 38 + -3055 + -3745) : c.length;
      for (var m = 1378 + 689 * -2; m < l; ++m)
        fe[I >> -3 * 2140 + 2564 + 551 * 7] = c.charCodeAt(m), I += -1 * 5341 + 5286 + 57 * 1;
      return fe[I >> -5356 * 1 + 2952 + 2405] = -2593 * -1 + -1382 * 4 + 2935, I - A;
    }
    function j(c) {
      return (793 + 791 * -1) * c.length;
    }
    function k(c, I) {
      for (var l = -9346 + -1 * -5867 + 3479, A = ""; !(l >= I / (9587 * -1 + -1427 * -5 + 2456)); ) {
        var m = re[c + 4 * l >> 2];
        if (4168 + 7753 * -1 + 3585 == m)
          break;
        ++l, -37669 + 5669 * 1 + 97536 <= m ? (m -= -85 * -1327 + 119613 + -204 * 818, A += String.fromCharCode(-3055 + -692 * 23 + 74267 | m >> -2374 + -298 * -8, 102130 + -68209 * 1 + 1723 * 13 | m & -5233 * 1 + -2 * -1603 + 1 * 3050)) : A += String.fromCharCode(m);
      }
      return A;
    }
    function ee(c, I, l) {
      if (void (-835 * -11 + 9974 + 2737 * -7) === l && (l = -2569736861 + -810418167 * -3 + -232479 * -9833), -5670 + 487 * 1 + 5187 > l)
        return 1680 + 1680 * -1;
      var A = I;
      l = A + l - (1 * 4 + -1 * -335 + -335);
      for (var m = -6 * -1074 + 8139 * 1 + 1 * -14583; m < c.length; ++m) {
        var b = c.charCodeAt(m);
        if (42728 + -275 * 277 + 88743 <= b && -355 + -674 * -4 + 55002 >= b) {
          var S = c.charCodeAt(++m);
          b = 1 * -96158 + 31905 * 2 + 32628 * 3 + ((b & -87 * 41 + 2951 + 1639) << -12770 + 2 * 6390) | S & 1 * 9571 + -8458 + 15 * -6;
        }
        if (re[I >> -6545 + -5 * 1515 + 14122] = b, I += -4412 * -2 + 497 * -1 + -7 * 1189, I + (1 * 3743 + -9201 + -5462 * -1) > l)
          break;
      }
      return re[I >> 732 + 730 * -1] = 7039 + -1 * 2915 + 1 * -4124, I - A;
    }
    function z(c) {
      for (var I = -919 + -3062 * 2 + 7043, l = -8303 + -1 * 554 + 8857 * 1; l < c.length; ++l) {
        var A = c.charCodeAt(l);
        -8329 + 7 * 1193 + -1906 * -29 <= A && -98155 + 109651 * 1 + -19 * -2413 >= A && ++l, I += -1 * 1023 + 241 * -13 + 40 * 104;
      }
      return I;
    }
    var te, xe, Ce, fe, Re, re, ae, $e, gt;
    function we(c) {
      te = c, e.HEAP8 = xe = new Int8Array(c), e.HEAP16 = fe = new Int16Array(c), e.HEAP32 = re = new Int32Array(c), e.HEAPU8 = Ce = new Uint8Array(c), e.HEAPU16 = Re = new Uint16Array(c), e.HEAPU32 = ae = new Uint32Array(c), e.HEAPF32 = $e = new Float32Array(c), e.HEAPF64 = gt = new Float64Array(c);
    }
    var De = e.INITIAL_MEMORY || 5 * 447871 + -13979780 + 28517641, qe = {};
    qe.initial = De / (-22822 + 2 * 44179), qe.maximum = 32768, e.wasmMemory ? v = e.wasmMemory : v = new WebAssembly.Memory(qe), v && (te = v.buffer), De = te.byteLength, we(te);
    var pe = [], Et = [], un = [], pt = [];
    function ht() {
      var c = e.preRun.shift();
      pe.unshift(c);
    }
    var Se = 293 * 29 + -1288 + 81 * -89, Ge = null;
    e.preloadedImages = {}, e.preloadedAudios = {};
    function _e(c) {
      throw e.onAbort && e.onAbort(c), f(c), w = !(-292 * 31 + 3274 + 5778), c = new WebAssembly.RuntimeError("abort(" + c + "). Build with -s ASSERTIONS=1 for more info."), i(c), c;
    }
    function Ee(c) {
      var I = Ze;
      return String.prototype.startsWith ? I.startsWith(c) : -663 * 13 + 8034 + 585 === I.indexOf(c);
    }
    function Pt() {
      return Ee("data:application/octet-stream;base64,");
    }
    var Ze = "sam.wasm";
    if (!Pt()) {
      var Pe = Ze;
      Ze = e.locateFile ? e.locateFile(Pe, C) : C + Pe;
    }
    function br() {
      try {
        if (p)
          return new Uint8Array(p);
        if (u)
          return u(Ze);
        throw "both async and sync fetching of the wasm failed";
      } catch (c) {
        _e(c);
      }
    }
    function Es() {
      var c = {};
      return c.credentials = "same-origin", p || !s && !x || typeof fetch != "function" || Ee("file://") ? Promise.resolve().then(br) : fetch(Ze, c).then(function(I) {
        if (!I.ok)
          throw "failed to load wasm binary file at '" + Ze + "'";
        return I.arrayBuffer();
      }).catch(function() {
        return br();
      });
    }
    function Yn(c) {
      for (; 0 < c.length; ) {
        var I = c.shift();
        if (typeof I == "function")
          I(e);
        else {
          var l = I.Ba;
          typeof l == "number" ? void (-1 * -3177 + 5722 + -8899) === I.ta ? Xi("v", l)() : Xi("vi", l)(I.ta) : l(void (1 * -6521 + -2983 + 264 * 36) === I.ta ? null : I.ta);
        }
      }
    }
    function Xi(c, I) {
      var l = [];
      return function() {
        l.length = arguments.length;
        for (var A = -23 * -191 + -8364 + -361 * -11; A < arguments.length; A++)
          l[A] = arguments[A];
        return l && l.length ? e["dynCall_" + c].apply(null, [I].concat(l)) : e["dynCall_" + c].call(null, I);
      };
    }
    function Ps(c) {
      this.da = c - 16, this.Oa = function(I) {
        re[this.da + (-3257 * 1 + 7595 + -4330) >> 581 * 17 + 4135 + 30 * -467] = I;
      }, this.La = function(I) {
        re[this.da + (9844 + 7261 * -1 + -2583) >> 213 * 3 + -1 * -502 + 17 * -67] = I;
      }, this.Ma = function() {
        re[this.da + (485 + -1 * 481) >> -1 * -190 + 1535 + 1723 * -1] = -157 + 2813 * 1 + -2656;
      }, this.Ka = function() {
        xe[this.da + (-3 * -2069 + 1401 + 422 * -18) >> -2855 * -1 + 902 + -3757] = -7551 + 9743 * 1 + -1 * 2192;
      }, this.Na = function() {
        xe[this.da + (-5 * 59 + -9431 * -1 + 9123 * -1) >> 181 * 51 + 8105 + -17336] = -6089 + -1 * -2065 + 4024;
      }, this.Fa = function(I, l) {
        this.Oa(I), this.La(l), this.Ma(), this.Ka(), this.Na();
      };
    }
    function Ln() {
      return -7906 + 134 * 59 < Ln.xa;
    }
    function ji(c) {
      switch (c) {
        case 8818 + 3 * -2939:
          return 8011 * -1 + 2129 * -4 + 16527;
        case 10491 + -17 * 617:
          return 7992 + -1830 * 3 + -2501;
        case -545 + 1 * 9769 + -9220:
          return 19 * -341 + 6337 * 1 + 72 * 2;
        case -2480 + -3 * -37 + -2377 * -1:
          return 3;
        default:
          throw new TypeError("Unknown type size: " + c);
      }
    }
    var yr = void (-18 * 166 + -1 * -7801 + -4813);
    function ye(c) {
      for (var I = ""; Ce[c]; )
        I += yr[Ce[c++]];
      return I;
    }
    var Nt = {}, mt = {}, Tn = {};
    function Mi(c) {
      if (void (-9877 + -1411 * -7) === c)
        return "_unknown";
      c = c.replace(/[^a-zA-Z0-9_]/g, "$");
      var I = c.charCodeAt(3 * 2859 + 8280 + -1 * 16857);
      return -5413 + 184 * -10 + -149 * -49 <= I && -5505 + 1 * 29 + -5533 * -1 >= I ? "_" + c : c;
    }
    function Ui(c, I) {
      return c = Mi(c), new Function("body", "return function " + c + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(I);
    }
    function Ji(c) {
      var I = Error, l = Ui(c, function(A) {
        this.name = c, this.message = A, A = Error(A).stack, void (347 * -19 + 8278 * 1 + -1685 * 1) !== A && (this.stack = this.toString() + `
` + A.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return l.prototype = Object.create(I.prototype), l.prototype.constructor = l, l.prototype.toString = function() {
        return void (-9433 + 3981 * 2 + 1471 * 1) === this.message ? this.name : this.name + ": " + this.message;
      }, l;
    }
    var Yt = void (9394 + -142 * 11 + -8 * 979);
    function T(c) {
      throw new Yt(c);
    }
    var vr = void (6867 + -5690 * 1 + -107 * 11);
    function Fn(c) {
      throw new vr(c);
    }
    function Lt(c, I, l) {
      function A(y) {
        y = l(y), y.length !== c.length && Fn("Mismatched type converter count");
        for (var H = -8649 + 3 * 2883; H < c.length; ++H)
          et(c[H], y[H]);
      }
      c.forEach(function(y) {
        Tn[y] = I;
      });
      var m = Array(I.length), b = [], S = 97 * -83 + -3896 + 11947;
      I.forEach(function(y, H) {
        mt.hasOwnProperty(y) ? m[H] = mt[y] : (b.push(y), Nt.hasOwnProperty(y) || (Nt[y] = []), Nt[y].push(function() {
          m[H] = mt[y], ++S, S === b.length && A(m);
        }));
      }), -2055 + -37 * 251 + 11342 === b.length && A(m);
    }
    function et(c, I, l) {
      if (l = l || {}, !("argPackAdvance" in I))
        throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var A = I.name;
      if (c || T('type "' + A + '" must have a positive integer typeid pointer'), mt.hasOwnProperty(c)) {
        if (l.Ea)
          return;
        T("Cannot register type '" + A + "' twice");
      }
      mt[c] = I, delete Tn[c], Nt.hasOwnProperty(c) && (I = Nt[c], delete Nt[c], I.forEach(function(m) {
        m();
      }));
    }
    function Ns(c) {
      var I = {};
      return I.count = c.count, I.oa = c.oa, I.pa = c.pa, I.da = c.da, I.fa = c.fa, I.ga = c.ga, I.ha = c.ha, I;
    }
    function Qi(c) {
      T(c.A.fa.ea.name + " instance already deleted");
    }
    var zi = !(10003 + -6 * 1667);
    function wr() {
    }
    function Br(c) {
      --c.count.value, 3 * 2657 + 9439 + -1 * 17410 === c.count.value && (c.ga ? c.ha.na(c.ga) : c.fa.ea.na(c.da));
    }
    function Cn(c) {
      return typeof FinalizationGroup > "u" ? (Cn = function(I) {
        return I;
      }, c) : (zi = new FinalizationGroup(function(I) {
        for (var l = I.next(); !l.done; l = I.next())
          l = l.value, l.da ? Br(l) : console.warn("object already deleted: " + l.da);
      }), Cn = function(I) {
        return zi.register(I, I.A, I.A), I;
      }, wr = function(I) {
        zi.unregister(I.A);
      }, Cn(c));
    }
    var dn = void (-2511 + -837 * -3), An = [];
    function $i() {
      for (; An.length; ) {
        var c = An.pop();
        c.A.oa = !(9498 + -68 * 7 + -31 * 291), c.delete();
      }
    }
    function st() {
    }
    var Sr = {};
    function Ys(c, I) {
      var l = e;
      if (void (-4537 + -7 * -515 + 466 * 2) === l[c].ja) {
        var A = l[c];
        l[c] = function() {
          return l[c].ja.hasOwnProperty(arguments.length) || T("Function '" + I + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + l[c].ja + ")!"), l[c].ja[arguments.length].apply(this, arguments);
        }, l[c].ja = [], l[c].ja[A.ya] = A;
      }
    }
    function Gr(c, I, l) {
      e.hasOwnProperty(c) ? ((void (1990 * 4 + -1016 + -6944) === l || e[c].ja !== void 0 && void (-1199 * -6 + -5972 + -1222) !== e[c].ja[l]) && T("Cannot register public name '" + c + "' twice"), Ys(c, c), e.hasOwnProperty(l) && T("Cannot register multiple overloads of a function with the same number of arguments (" + l + ")!"), e[c].ja[l] = I) : (e[c] = I, void (-2167 + -665 * -15 + -7808) !== l && (e[c].Ra = l));
    }
    function Ls(c, I, l, A, m, b, S, y) {
      this.name = c, this.constructor = I, this.ma = l, this.na = A, this.ia = m, this.Ca = b, this.qa = S, this.Aa = y;
    }
    function Dn(c, I, l) {
      for (; I !== l; )
        I.qa || T("Expected null or instance of " + l.name + ", got an instance of " + I.name), c = I.qa(c), I = I.ia;
      return c;
    }
    function Ts(c, I) {
      return I === null ? (this.ua && T("null is not a valid " + this.name), -1 * 4409 + -634 * 1 + 5043) : (I.A || T('Cannot pass "' + Ft(I) + '" as a ' + this.name), I.A.da || T("Cannot pass deleted object as a pointer of type " + this.name), Dn(I.A.da, I.A.fa.ea, this.ea));
    }
    function Fs(c, I) {
      if (I === null) {
        if (this.ua && T("null is not a valid " + this.name), this.sa) {
          var l = this.Ha();
          return c !== null && c.push(this.na, l), l;
        }
        return -9 * -27 + -11 * -878 + 1 * -9901;
      }
      if (I.A || T('Cannot pass "' + Ft(I) + '" as a ' + this.name), I.A.da || T("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && I.A.fa.ra && T("Cannot convert argument of type " + (I.A.ha ? I.A.ha.name : I.A.fa.name) + " to parameter type " + this.name), l = Dn(I.A.da, I.A.fa.ea, this.ea), this.sa)
        switch (void (-1 * 5339 + 813 * 4 + 2087) === I.A.ga && T("Passing raw pointer to smart pointer is illegal"), this.Pa) {
          case -4433 + 13 * 341:
            I.A.ha === this ? l = I.A.ga : T("Cannot convert argument of type " + (I.A.ha ? I.A.ha.name : I.A.fa.name) + " to parameter type " + this.name);
            break;
          case -3652 + 1 * 2721 + 932:
            l = I.A.ga;
            break;
          case -1 * 3247 + 1499 * -4 + 9245:
            if (I.A.ha === this)
              l = I.A.ga;
            else {
              var A = I.clone();
              l = this.Ia(l, Tt(function() {
                A.delete();
              })), c !== null && c.push(this.na, l);
            }
            break;
          default:
            T("Unsupporting sharing policy");
        }
      return l;
    }
    function Ds(c, I) {
      return I === null ? (this.ua && T("null is not a valid " + this.name), 5335 + 1 * 4559 + -9894) : (I.A || T('Cannot pass "' + Ft(I) + '" as a ' + this.name), I.A.da || T("Cannot pass deleted object as a pointer of type " + this.name), I.A.fa.ra && T("Cannot convert argument of type " + I.A.fa.name + " to parameter type " + this.name), Dn(I.A.da, I.A.fa.ea, this.ea));
    }
    function Xn(c) {
      return this.fromWireType(ae[c >> 50 * 9 + -1 * -1571 + -2019]);
    }
    function Zr(c, I, l) {
      return I === l ? c : void (4 * 409 + -45 * -197 + 10501 * -1) === l.ia ? null : (c = Zr(c, I, l.ia), c === null ? null : l.Aa(c));
    }
    var fn = {};
    function Xs(c, I) {
      for (void (-155 + -1 * -155) === I && T("ptr should not be undefined"); c.ia; )
        I = c.qa(I), c = c.ia;
      return fn[I];
    }
    function jn(c, I) {
      I.fa && I.da || Fn("makeClassHandle requires ptr and ptrType"), !!I.ha != !!I.ga && Fn("Both smartPtrType and smartPtr must be specified");
      var l = {};
      l.value = 1, I.count = l;
      var A = {};
      A.value = I;
      var m = {};
      return m.A = A, Cn(Object.create(c, m));
    }
    function tt(c, I, l, A) {
      this.name = c, this.ea = I, this.ua = l, this.ra = A, this.sa = !(-8932 + 1 * 8933), this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void (-5 * -419 + 3772 + -5867 * 1), void (7547 + -1 * 7547) !== I.ia ? this.toWireType = Fs : (this.toWireType = A ? Ts : Ds, this.ka = null);
    }
    function kr(c, I, l) {
      e.hasOwnProperty(c) || Fn("Replacing nonexistant public symbol"), void (4531 + -6 * -1137 + -11353 * 1) !== e[c].ja && void (-1386 * -5 + 8659 + -15589) !== l ? e[c].ja[l] = I : (e[c] = I, e[c].ya = l);
    }
    function ct(c, I) {
      c = ye(c);
      var l = Xi(c, I);
      return typeof l != "function" && T("unknown function pointer with signature " + c + ": " + I), l;
    }
    var Kr = void (8045 + -12 * 345 + 55 * -71);
    function Hr(c) {
      c = jr(c);
      var I = ye(c);
      return nt(c), I;
    }
    function pn(c, I) {
      function l(b) {
        m[b] || mt[b] || (Tn[b] ? Tn[b].forEach(l) : (A.push(b), m[b] = !(5044 + 2 * -2522)));
      }
      var A = [], m = {};
      throw I.forEach(l), new Kr(c + ": " + A.map(Hr).join([", "]));
    }
    function Wr(c, I) {
      for (var l = [], A = -1131 + 46 * 22 + 119 * 1; A < c; A++)
        l.push(re[(I >> -6477 + 589 * 11) + A]);
      return l;
    }
    function Mn(c) {
      for (; c.length; ) {
        var I = c.pop();
        c.pop()(I);
      }
    }
    function Or(c, I, l) {
      return c instanceof Object || T(l + ' with invalid "this": ' + c), c instanceof I.ea.constructor || T(l + ' incompatible with "this" of type ' + c.constructor.name), c.A.da || T("cannot call emscripten binding method " + l + " on deleted object"), Dn(c.A.da, c.A.fa.ea, I.ea);
    }
    var Vr = {};
    Vr.value = void (1 * 3380 + 6979 + 9 * -1151);
    var Rr = {};
    Rr.value = null;
    var Er = {};
    Er.value = !(-2981 + 775 * -1 + 3756);
    var Pr = {};
    Pr.value = !(337 * 13 + -5 * -74 + -4750);
    var qi = [], ke = [{}, Vr, Rr, Er, Pr];
    function _i(c) {
      -1 * -7643 + -1271 + -16 * 398 < c && --ke[c].Ja === 0 && (ke[c] = void (5255 + 1051 * -5), qi.push(c));
    }
    function Tt(c) {
      switch (c) {
        case void (5537 + 10 * -129 + -137 * 31):
          return 1;
        case null:
          return 57 * -67 + -2239 * -4 + -5135;
        case !(3709 * -1 + -9967 + 13676):
          return -4 * -863 + 3184 + 99 * -67;
        case !(-1002 * 7 + -1232 + 3 * 2749):
          return 2939 * -2 + -136 * 4 + 6426;
        default:
          var I = qi.length ? qi.pop() : ke.length, l = {};
          return l.Ja = 1, l.value = c, ke[I] = l, I;
      }
    }
    function Ft(c) {
      if (c === null)
        return "null";
      var I = typeof c;
      return I === "object" || I === "array" || I === "function" ? c.toString() : "" + c;
    }
    function js(c, I) {
      switch (I) {
        case 2:
          return function(l) {
            return this.fromWireType($e[l >> 31 * -147 + 2 * -2887 + 1 * 10333]);
          };
        case -1122 + -165 * 16 + 3765:
          return function(l) {
            return this.fromWireType(gt[l >> 6973 + -4561 * -1 + -11531 * 1]);
          };
        default:
          throw new TypeError("Unknown float type: " + c);
      }
    }
    function Ms(c) {
      var I = Function;
      if (!(I instanceof Function))
        throw new TypeError("new_ called with constructor type " + typeof I + " which is not a function");
      var l = Ui(I.name || "unknownFunctionName", function() {
      });
      return l.prototype = I.prototype, l = new l(), c = I.apply(l, c), c instanceof Object ? c : l;
    }
    function Us(c, I, l) {
      switch (I) {
        case 2 * -3764 + -9463 + 16991:
          return l ? function(A) {
            return xe[A];
          } : function(A) {
            return Ce[A];
          };
        case 1:
          return l ? function(A) {
            return fe[A >> -6960 + -1249 * -2 + 4463];
          } : function(A) {
            return Re[A >> 7 * 497 + -619 * 10 + 2712];
          };
        case 3326 * 2 + 5922 + -449 * 28:
          return l ? function(A) {
            return re[A >> -4 * 1669 + 4237 * -1 + -1 * -10915];
          } : function(A) {
            return ae[A >> 1 * -1576 + -2705 + -1 * -4283];
          };
        default:
          throw new TypeError("Unknown integer type: " + c);
      }
    }
    function eo(c) {
      return c || T("Cannot use deleted val. handle = " + c), ke[c].value;
    }
    function Nr(c, I) {
      var l = mt[c];
      return void (-17 * -119 + -5375 + -1 * -3352) === l && T(I + " has unknown type " + Hr(c)), l;
    }
    var Js = {}, Yr = {};
    function Lr() {
      if (!to) {
        var c = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: g || "./this.program" }, I;
        for (I in Yr)
          c[I] = Yr[I];
        var l = [];
        for (I in c)
          l.push(I + "=" + c[I]);
        to = l;
      }
      return to;
    }
    var to, Tr = [];
    function Fr(c) {
      var I = {}, l;
      for (l in c)
        (function(A) {
          var m = c[A];
          I[A] = typeof m == "function" ? function() {
            Tr.push(A);
            try {
              return m.apply(null, arguments);
            } finally {
              if (w)
                return;
              var b = Tr.pop();
              K(b === A);
            }
          } : m;
        })(l);
      return I;
    }
    for (var Dr = Array(-4 * 830 + -1 * 826 + 142 * 31), Un = 3721 + 6 * -153 + -2803 * 1; 8648 + -116 * 1 + 2069 * -4 > Un; ++Un)
      Dr[Un] = String.fromCharCode(Un);
    yr = Dr, Yt = e.BindingError = Ji("BindingError"), vr = e.InternalError = Ji("InternalError"), st.prototype.isAliasOf = function(c) {
      if (!(this instanceof st && c instanceof st))
        return !(1383 * -2 + 7 * -41 + 3054);
      var I = this.A.fa.ea, l = this.A.da, A = c.A.fa.ea;
      for (c = c.A.da; I.ia; )
        l = I.qa(l), I = I.ia;
      for (; A.ia; )
        c = A.qa(c), A = A.ia;
      return I === A && l === c;
    }, st.prototype.clone = function() {
      if (this.A.da || Qi(this), this.A.pa)
        return this.A.count.value += -15164 + 1 * 15165, this;
      var c = Cn(Object.create(Object.getPrototypeOf(this), { A: { value: Ns(this.A) } }));
      return c.A.count.value += -199 * 27 + 2495 + -2879 * -1, c.A.oa = !(-8662 + -3 * -1226 + 997 * 5), c;
    }, st.prototype.delete = function() {
      this.A.da || Qi(this), this.A.oa && !this.A.pa && T("Object already scheduled for deletion"), wr(this), Br(this.A), this.A.pa || (this.A.ga = void (4408 + -1 * 5692 + 1284), this.A.da = void (-2861 * 2 + -6763 + 12485));
    }, st.prototype.isDeleted = function() {
      return !this.A.da;
    }, st.prototype.deleteLater = function() {
      return this.A.da || Qi(this), this.A.oa && !this.A.pa && T("Object already scheduled for deletion"), An.push(this), 15 * -229 + 8600 + -5164 === An.length && dn && dn($i), this.A.oa = !(41 * -40 + 2581 * -1 + -3 * -1407), this;
    }, tt.prototype.Da = function(c) {
      return this.wa && (c = this.wa(c)), c;
    }, tt.prototype.va = function(c) {
      this.na && this.na(c);
    }, tt.prototype.argPackAdvance = 8, tt.prototype.readValueFromPointer = Xn, tt.prototype.deleteObject = function(c) {
      c !== null && c.delete();
    }, tt.prototype.fromWireType = function(c) {
      function I() {
        return this.sa ? jn(this.ea.ma, { fa: this.Ga, da: l, ha: this, ga: c }) : jn(this.ea.ma, { fa: this, da: c });
      }
      var l = this.Da(c);
      if (!l)
        return this.va(c), null;
      var A = Xs(this.ea, l);
      if (void (-3432 + 1429 * 4 + -1142 * 2) !== A)
        return -1960 + 493 * -7 + 1 * 5411 === A.A.count.value ? (A.A.da = l, A.A.ga = c, A.clone()) : (A = A.clone(), this.va(c), A);
      if (A = this.ea.Ca(l), A = Sr[A], !A)
        return I.call(this);
      A = this.ra ? A.za : A.pointerType;
      var m = Zr(l, this.ea, A.ea);
      return m === null ? I.call(this) : this.sa ? jn(A.ea.ma, { fa: A, da: m, ha: this, ga: c }) : jn(A.ea.ma, { fa: A, da: m });
    }, e.getInheritedInstanceCount = function() {
      return Object.keys(fn).length;
    }, e.getLiveInheritedInstances = function() {
      var c = [], I;
      for (I in fn)
        fn.hasOwnProperty(I) && c.push(fn[I]);
      return c;
    }, e.flushPendingDeletes = $i, e.setDelayFunction = function(c) {
      dn = c, An.length && dn && dn($i);
    }, Kr = e.UnboundTypeError = Ji("UnboundTypeError"), e.count_emval_handles = function() {
      for (var c = 157 + -1 * 157, I = 9185 + -1 * -5309 + 1 * -14489; I < ke.length; ++I)
        ke[I] !== void 0 && ++c;
      return c;
    }, e.get_first_emval = function() {
      for (var c = 1 * 4397 + -4805 + 413; c < ke.length; ++c)
        if (void (-9535 + 283 * -4 + -1 * -10667) !== ke[c])
          return ke[c];
      return null;
    }, Et.push({ Ba: function() {
      Xr();
    } });
    var Qs = { z: function(c) {
      return Jn(c + 16) + (1 * 1245 + -9523 + -13 * -638);
    }, u: function(c, I, l) {
      throw new Ps(c).Fa(I, l), "uncaught_exception" in Ln ? Ln.xa++ : Ln.xa = -7881 + 1 * 7882, c;
    }, w: function(c, I, l, A, m) {
      var b = ji(l);
      I = ye(I), et(c, { name: I, fromWireType: function(S) {
        return !!S;
      }, toWireType: function(S, y) {
        return y ? A : m;
      }, argPackAdvance: 8, readValueFromPointer: function(S) {
        if (6302 + 6301 * -1 === l)
          var y = xe;
        else if (-4252 * -2 + 6841 * 1 + -229 * 67 === l)
          y = fe;
        else if (-489 * 19 + 8590 + 705 === l)
          y = re;
        else
          throw new TypeError("Unknown boolean type size: " + I);
        return this.fromWireType(y[S >> b]);
      }, ka: null });
    }, i: function(c, I, l, A, m, b, S, y, H, V, R, E, M) {
      R = ye(R), b = ct(m, b), y && (y = ct(S, y)), V && (V = ct(H, V)), M = ct(E, M);
      var se = Mi(R);
      Gr(se, function() {
        pn("Cannot construct " + R + " due to unbound types", [A]);
      }), Lt([c, I, l], A ? [A] : [], function(P) {
        if (P = P[-9057 + -22 * 2 + 9101], A)
          var Xe = P.ea, he = Xe.ma;
        else
          he = st.prototype;
        P = Ui(se, function() {
          if (Object.getPrototypeOf(this) !== Dt)
            throw new Yt("Use 'new' to construct " + R);
          if (void (4597 * 1 + 233 + -4830) === Xt.la)
            throw new Yt(R + " has no accessible constructor");
          var Ur = Xt.la[arguments.length];
          if (void (-85 * 42 + -571 * -10 + -2140) === Ur)
            throw new Yt("Tried to invoke ctor of " + R + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(Xt.la).toString() + ") parameters instead!");
          return Ur.apply(this, arguments);
        });
        var Be = {};
        Be.value = P;
        var bt = {};
        bt.constructor = Be;
        var Dt = Object.create(he, bt);
        P.prototype = Dt;
        var Xt = new Ls(R, P, Dt, M, Xe, b, y, V);
        Xe = new tt(R, Xt, !0, !1), he = new tt(R + "*", Xt, !1, !(24 * 161 + -9189 + 5326));
        var Mr = new tt(R + " const*", Xt, !(-9221 * 1 + -7125 * -1 + 2097), !(9060 + -5519 * -1 + -14579)), io = {};
        return io.pointerType = he, io.za = Mr, Sr[c] = io, kr(se, P), [Xe, he, Mr];
      });
    }, h: function(c, I, l, A, m, b) {
      K(1175 * 1 + 8636 + -9811 * 1 < I);
      var S = Wr(I, l);
      m = ct(A, m);
      var y = [b], H = [];
      Lt([], [c], function(V) {
        V = V[-152 * -57 + 2 * 3331 + -7663 * 2];
        var R = "constructor " + V.name;
        if (void (-2947 * 1 + -238 + 3185) === V.ea.la && (V.ea.la = []), void (9036 + -430 * -22 + -18496) !== V.ea.la[I - (5841 + 11 * 219 + -8249)])
          throw new Yt("Cannot register multiple constructors with identical number of parameters (" + (I - (1557 + 1 * 3494 + -5050 * 1)) + ") for class '" + V.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return V.ea.la[I - (-7669 + 2 * 3835)] = function() {
          pn("Cannot construct " + V.name + " due to unbound types", S);
        }, Lt([], S, function(E) {
          return V.ea.la[I - (6517 + -6757 * 1 + 241 * 1)] = function() {
            arguments.length !== I - (7 * -673 + 7444 + -2732) && T(R + " called with " + arguments.length + " arguments, expected " + (I - (8556 + 31 * -252 + -743 * 1))), H.length = 742 + -14 * 53, y.length = I;
            for (var M = -167 * -42 + 2637 * 2 + -12287 * 1; M < I; ++M)
              y[M] = E[M].toWireType(H, arguments[M - (-2 * -2498 + 8685 + -13680 * 1)]);
            return M = m.apply(null, y), Mn(H), E[-7252 + -1 * 5039 + 12291].fromWireType(M);
          }, [];
        }), [];
      });
    }, b: function(c, I, l, A, m, b, S, y, H, V) {
      I = ye(I), m = ct(A, m), Lt([], [c], function(R) {
        R = R[3961 + -1 * 167 + -3794];
        var E = R.name + "." + I, M = { get: function() {
          pn("Cannot access " + E + " due to unbound types", [l, S]);
        }, enumerable: !(-1 * -7105 + 6511 + -592 * 23), configurable: !0 };
        return H ? M.set = function() {
          pn("Cannot access " + E + " due to unbound types", [l, S]);
        } : M.set = function() {
          T(E + " is a read-only property");
        }, Object.defineProperty(R.ea.ma, I, M), Lt([], H ? [l, S] : [l], function(se) {
          var P = se[0], Xe = { get: function() {
            var Be = Or(this, R, E + " getter");
            return P.fromWireType(m(b, Be));
          }, enumerable: !0 };
          if (H) {
            H = ct(y, H);
            var he = se[-9669 + -1 * -5864 + 3806];
            Xe.set = function(Be) {
              var bt = Or(this, R, E + " setter"), Dt = [];
              H(V, bt, he.toWireType(Dt, Be)), Mn(Dt);
            };
          }
          return Object.defineProperty(R.ea.ma, I, Xe), [];
        }), [];
      });
    }, v: function(c, I) {
      I = ye(I), et(c, { name: I, fromWireType: function(l) {
        var A = ke[l].value;
        return _i(l), A;
      }, toWireType: function(l, A) {
        return Tt(A);
      }, argPackAdvance: 8, readValueFromPointer: Xn, ka: null });
    }, m: function(c, I, l) {
      l = ji(l), I = ye(I), et(c, { name: I, fromWireType: function(A) {
        return A;
      }, toWireType: function(A, m) {
        if (typeof m != "number" && typeof m != "boolean")
          throw new TypeError('Cannot convert "' + Ft(m) + '" to ' + this.name);
        return m;
      }, argPackAdvance: 8, readValueFromPointer: js(I, l), ka: null });
    }, c: function(c, I, l, A, m, b) {
      var S = Wr(I, l);
      c = ye(c), m = ct(A, m), Gr(c, function() {
        pn("Cannot call " + c + " due to unbound types", S);
      }, I - (529 * -8 + -7632 + -3 * -3955)), Lt([], S, function(y) {
        var H = c, V = c;
        y = [y[-16 * 397 + 6299 * 1 + 53], null].concat(y.slice(4 * 1737 + -6714 * 1 + -1 * 233));
        var R = m, E = y.length;
        4 * -2374 + -4787 + 14285 > E && T("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var M = y[-958 * -7 + -13 * 210 + -3975] !== null && !(-6347 * 1 + -4363 * -2 + -2 * 1189), se = !(9327 + 1 * -4436 + -4890), P = -1 * 4142 + -7374 + 11517; P < y.length; ++P)
          if (y[P] !== null && void (81 * -71 + 3913 + 1 * 1838) === y[P].ka) {
            se = !(-3 * -267 + -2833 + 2032);
            break;
          }
        var Xe = y[6858 + -6 * 891 + -1512].name !== "void", he = "", Be = "";
        for (P = 2058 * 4 + 6105 + -4779 * 3; P < E - (5383 + 196 * -23 + -873); ++P)
          he += (P !== 0 ? ", " : "") + "arg" + P, Be += (-8600 + -50 * 79 + 12550 !== P ? ", " : "") + "arg" + P + "Wired";
        V = "return function " + Mi(V) + "(" + he + `) {
if (arguments.length !== ` + (E - (4614 + 1 * 2252 + -6864)) + `) {
throwBindingError('function ` + V + " called with ' + arguments.length + ' arguments, expected " + (E - 2) + ` args!');
}
`, se && (V += `var destructors = [];
`);
        var bt = se ? "destructors" : "null";
        for (he = "throwBindingError invoker fn runDestructors retType classParam".split(" "), R = [T, R, b, Mn, y[-8680 * 1 + -87 * -69 + 2677], y[-7241 + -1381 * 2 + 10004]], M && (V += "var thisWired = classParam.toWireType(" + bt + `, this);
`), P = -9505 + 1231 * 3 + 2906 * 2; P < E - (251 * -8 + 8969 * 1 + -6959 * 1); ++P)
          V += "var arg" + P + "Wired = argType" + P + ".toWireType(" + bt + ", arg" + P + "); // " + y[P + (-9278 * -1 + 2033 + -11309 * 1)].name + `
`, he.push("argType" + P), R.push(y[P + (5 * -898 + -3817 + 8309)]);
        if (M && (Be = "thisWired" + (0 < Be.length ? ", " : "") + Be), V += (Xe ? "var rv = " : "") + "invoker(fn" + (-1239 + -4035 * 1 + 2637 * 2 < Be.length ? ", " : "") + Be + `);
`, se)
          V += `runDestructors(destructors);
`;
        else
          for (P = M ? 6393 + -1598 * 4 : 3646 + -5 * 667 + -3 * 103; P < y.length; ++P)
            E = 403 * -3 + 5 * 927 + -1 * 3425 === P ? "thisWired" : "arg" + (P - (2631 + -569 * -4 + -4905)) + "Wired", y[P].ka !== null && (V += E + "_dtor(" + E + "); // " + y[P].name + `
`, he.push(E + "_dtor"), R.push(y[P].ka));
        return Xe && (V += `var ret = retType.fromWireType(rv);
return ret;
`), he.push(V + `}
`), y = Ms(he).apply(null, R), kr(H, y, I - (1 * 5155 + -2579 + -103 * 25)), [];
      });
    }, e: function(c, I, l, A, m) {
      function b(V) {
        return V;
      }
      I = ye(I), -(1686 + -337 * 5) === m && (m = 7213 * -297664 + 7562629567 * 1 + 79 * -14184960);
      var S = ji(l);
      if (-5169 * 1 + 7618 + -31 * 79 === A) {
        var y = 32 - 8 * l;
        b = function(V) {
          return V << y >>> y;
        };
      }
      var H = -(-57 * -103 + 1341 + -7211 * 1) != I.indexOf("unsigned");
      et(c, { name: I, fromWireType: b, toWireType: function(V, R) {
        if (typeof R != "number" && typeof R != "boolean")
          throw new TypeError('Cannot convert "' + Ft(R) + '" to ' + this.name);
        if (R < A || R > m)
          throw new TypeError('Passing a number "' + Ft(R) + '" from JS side to C/C++ side to an argument of type "' + I + '", which is outside the valid range [' + A + ", " + m + "]!");
        return H ? R >>> -1 * -1929 + -109 * 59 + -1 * -4502 : R | 944 * -7 + 440 * 19 + -1752;
      }, argPackAdvance: 8, readValueFromPointer: Us(I, S, 3169 + 2 * -3479 + 3789 !== A), ka: null });
    }, d: function(c, I, l) {
      function A(y) {
        y >>= -6444 + 220 * -15 + 9746;
        var H = ae;
        return new m(te, H[y + (13600 + 1 * -13599)], H[y]);
      }
      var m = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][I];
      l = ye(l);
      var b = {};
      b.name = l, b.fromWireType = A, b.argPackAdvance = 8, b.readValueFromPointer = A;
      var S = {};
      S.Ea = !(-7117 + -1 * -2713 + 4404), et(c, b, S);
    }, n: function(c, I) {
      I = ye(I);
      var l = I === "std::string";
      et(c, { name: I, fromWireType: function(A) {
        var m = ae[A >> 2];
        if (l)
          for (var b = A + (-5605 + -71 * -79), S = -619 * 7 + 6321 + -1988; S <= m; ++S) {
            var y = A + 4 + S;
            if (S == m || Ce[y] == 0) {
              if (b) {
                var H = b, V = Ce, R = H + (y - b);
                for (b = H; V[b] && !(b >= R); )
                  ++b;
                if (-11100 + 4 * 2779 < b - H && V.subarray && G)
                  H = G.decode(V.subarray(H, b));
                else {
                  for (R = ""; H < b; ) {
                    var E = V[H++];
                    if (E & 1 * -1137 + -1 * 3433 + 54 * 87) {
                      var M = V[H++] & 63;
                      if (-3 * 2153 + -5797 * -1 + 854 == (E & 3455 + -1303 * 1 + 482 * -4))
                        R += String.fromCharCode((E & 10228 + 3399 * -3) << 8002 * 1 + 3827 + -11823 | M);
                      else {
                        var se = V[H++] & 63;
                        E = -18 * -533 + -934 + 444 * -19 == (E & 7587 + 124 * -12 + -31 * 189) ? (E & 2652 + -673 * -1 + 662 * -5) << 12 | M << -1595 * 6 + -10 * -994 + 52 * -7 | se : (E & -407 * 18 + 5138 + 2195) << 7 * 1301 + -8829 * 1 + -130 * 2 | M << -8693 + 1 * -5524 + 14229 | se << -1 * 8785 + -9299 + 335 * 54 | V[H++] & -742 + -43 * -152 + -5731, -29242 * -4 + -57917 + 6485 > E ? R += String.fromCharCode(E) : (E -= 37599 + 105926 * 1 + -77989 * 1, R += String.fromCharCode(109935 + -3 * -36469 + -164046 | E >> -9687 + -9697 * -1, -3187 * -1 + -41 * -1123 + 5 * 1418 | E & 7373 + -30 * 105 + -3200));
                      }
                    } else
                      R += String.fromCharCode(E);
                  }
                  H = R;
                }
              } else
                H = "";
              if (void (74 * 28 + 3709 * 1 + 41 * -141) === P)
                var P = H;
              else
                P += String.fromCharCode(-11291 + -11291 * -1), P += H;
              b = y + (-1619 + -2 * 2566 + -211 * -32);
            }
          }
        else {
          for (P = Array(m), S = 0; S < m; ++S)
            P[S] = String.fromCharCode(Ce[A + (-4287 * 1 + -167 * -38 + -5 * 411) + S]);
          P = P.join("");
        }
        return nt(A), P;
      }, toWireType: function(A, m) {
        m instanceof ArrayBuffer && (m = new Uint8Array(m));
        var b = typeof m == "string";
        b || m instanceof Uint8Array || m instanceof Uint8ClampedArray || m instanceof Int8Array || T("Cannot pass non-string to std::string");
        var S = (l && b ? function() {
          for (var V = 1 * 1477 + 399 * 7 + -427 * 10, R = 0; R < m.length; ++R) {
            var E = m.charCodeAt(R);
            -18673 * -5 + -19686 + -31 * 593 <= E && -7922 * -2 + -102005 * -1 + 2 * -30253 >= E && (E = 94837 + 1 * -29301 + ((E & -11 * -867 + 1821 + -10335) << 1228 * 6 + -23 + -7335) | m.charCodeAt(++R) & 11 * -829 + 8499 + 31 * 53), -1103 * -1 + -1 * -5101 + 103 * -59 >= E ? ++V : V = 519 * -13 + 6026 + 2768 >= E ? V + (3893 * -1 + 522 + 1 * 3373) : 3 * 879 + 6622 * 1 + -28138 * -2 >= E ? V + (28 * 103 + 4 * 19 + -2957) : V + (-353 * -4 + 9921 + -1 * 11329);
          }
          return V;
        } : function() {
          return m.length;
        })(), y = Jn(-6 * 113 + -1747 * -2 + -2812 + S + (2 * 3353 + 5463 + -12168));
        if (ae[y >> -1 * -2353 + 4363 + -746 * 9] = S, l && b)
          W(m, y + (-1 * 285 + 2 * 284 + -279), S + (-2002 + 1 * 2003));
        else if (b)
          for (b = 0; b < S; ++b) {
            var H = m.charCodeAt(b);
            -2865 * -1 + -847 * 9 + 5013 < H && (nt(y), T("String has UTF-16 code units that do not fit in 8 bits")), Ce[y + (-10 * -988 + -2767 * 1 + 1 * -7109) + b] = H;
          }
        else
          for (b = 0; b < S; ++b)
            Ce[y + (-881 * 7 + -7944 + 14115) + b] = m[b];
        return A !== null && A.push(nt, y), y;
      }, argPackAdvance: 8, readValueFromPointer: Xn, ka: function(A) {
        nt(A);
      } });
    }, j: function(c, I, l) {
      if (l = ye(l), -250 * 8 + -75 * 95 + 9127 === I)
        var A = J, m = F, b = j, S = function() {
          return Re;
        }, y = -9 * 67 + -2782 * -3 + -158 * 49;
      else
        -11 * -697 + -652 + -7011 === I && (A = k, m = ee, b = z, S = function() {
          return ae;
        }, y = -673 * 11 + -3 * 2356 + 14473);
      et(c, { name: l, fromWireType: function(H) {
        for (var V = ae[H >> 2], R = S(), E, M = H + (-5 * 1062 + 1 * 2370 + 2944), se = -39 * 53 + 1 * -4051 + 38 * 161; se <= V; ++se) {
          var P = H + 4 + se * I;
          (se == V || 2514 * 3 + 4926 + -12468 == R[P >> y]) && (M = A(M, P - M), void (-3203 * -2 + 2211 * 4 + -1 * 15250) === E ? E = M : (E += String.fromCharCode(-5501 * -1 + -977 * 1 + -4524), E += M), M = P + I);
        }
        return nt(H), E;
      }, toWireType: function(H, V) {
        typeof V != "string" && T("Cannot pass non-string to C++ string type " + l);
        var R = b(V), E = Jn(-2096 * -4 + 5 * 1929 + 25 * -721 + R + I);
        return ae[E >> 5994 + -749 * 8] = R >> y, m(V, E + (-940 * 9 + 6486 + 1978), R + I), H !== null && H.push(nt, E), E;
      }, argPackAdvance: 8, readValueFromPointer: Xn, ka: function(H) {
        nt(H);
      } });
    }, x: function(c, I) {
      I = ye(I);
      var l = {};
      l.Qa = !(-8363 + 1 * 9011 + -648), l.name = I, l.argPackAdvance = 0, l.fromWireType = function() {
      }, l.toWireType = function() {
      }, et(c, l);
    }, k: function(c, I, l) {
      c = eo(c), I = Nr(I, "emval::as");
      var A = [], m = Tt(A);
      return re[l >> 4066 * -1 + -7541 + -11609 * -1] = m, I.toWireType(A, c);
    }, g: _i, l: function(c, I) {
      return c = eo(c), I = eo(I), Tt(c[I]);
    }, p: function(c) {
      var I = Js[c];
      return Tt(void (-259 * 1 + 37 * 197 + -7030) === I ? ye(c) : I);
    }, o: function(c) {
      Mn(ke[c].value), _i(c);
    }, y: function(c, I) {
      return c = Nr(c, "_emval_take_value"), c = c.readValueFromPointer(I), Tt(c);
    }, f: function() {
      _e();
    }, q: function(c, I, l) {
      Ce.copyWithin(c, I, I + l);
    }, r: function(c) {
      c >>>= 547 + -37 * 158 + 5299;
      var I = Ce.length;
      if (895514734 + 217 * 5769442 < c)
        return !(3685 + -7 * -673 + -8395);
      for (var l = 1; 37 * -259 + -1 * 2014 + 11601 >= l; l *= -53 * -98 + 1051 * -9 + 1 * 4267) {
        var A = I * (1 + 0.2 / l);
        A = Math.min(A, c + (-24167246 * 5 + 190598282 + 30901244)), A = Math.max(-18 * 1322665 + 1 * 2024319 + 38560867, c, A), -15504 + 68 * 228 < A % 65536 && (A += 4021 * -24 + -2 * 26041 + 843 * 254 - A % (9655 * -1 + -68116 + -15923 * -9));
        e: {
          try {
            v.grow(Math.min(-1656853982 + 3733 * 1019110, A) - te.byteLength + 65535 >>> 14175 + 14159 * -1), we(v.buffer);
            var m = 8228 + 5407 * -1 + 2 * -1410;
            break e;
          } catch {
          }
          m = void (17 * 323 + -9389 + 3898);
        }
        if (m)
          return !(-11 * -897 + 6277 * 1 + -4036 * 4);
      }
      return !(-2844 + -1 * -2845);
    }, s: function(c, I) {
      var l = 0;
      return Lr().forEach(function(A, m) {
        var b = I + l;
        for (m = re[c + (-77 + -9349 * -1 + 4 * -2317) * m >> 1851 * 1 + 1268 * -6 + -1 * -5759] = b, b = -1848 + 155 * -23 + 1 * 5413; b < A.length; ++b)
          xe[m++ >> -8133 + -65 * 94 + 14243] = A.charCodeAt(b);
        xe[m >> 0] = -919 * -9 + -764 * -12 + -17439, l += A.length + (3499 + -354 * 2 + -2790);
      }), -7145 + -5357 * 1 + 47 * 266;
    }, t: function(c, I) {
      var l = Lr();
      re[c >> -1875 + -1877 * -1] = l.length;
      var A = 8354 + -1 * 5571 + -2783;
      return l.forEach(function(m) {
        A += m.length + (-61 * -107 + -2669 + -3857);
      }), re[I >> -15806 + 4 * 3952] = A, -151 * 55 + 5 * 503 + 5790;
    }, a: v };
    (function() {
      function c(S) {
        S = S.exports, S = Fr(S), e.asm = S, Se--, e.monitorRunDependencies && e.monitorRunDependencies(Se), 46 * 53 + 2797 + -5235 == Se && Ge && (S = Ge, Ge = null, S());
      }
      function I(S) {
        c(S.instance);
      }
      function l(S) {
        return Es().then(function(y) {
          return WebAssembly.instantiate(y, m);
        }).then(S, function(y) {
          f("failed to asynchronously prepare wasm: " + y), _e(y);
        });
      }
      var A = {};
      A.a = Qs;
      var m = A;
      if (Se++, e.monitorRunDependencies && e.monitorRunDependencies(Se), e.instantiateWasm)
        try {
          var b = e.instantiateWasm(m, c);
          return b = Fr(b);
        } catch (S) {
          return f("Module.instantiateWasm callback failed with error: " + S), !(-6402 + -11 * -761 + 246 * -8);
        }
      return function() {
        if (p || typeof WebAssembly.instantiateStreaming != "function" || Pt() || Ee("file://") || typeof fetch != "function")
          return l(I);
        var S = {};
        S.credentials = "same-origin", fetch(Ze, S).then(function(y) {
          return WebAssembly.instantiateStreaming(y, m).then(I, function(H) {
            return f("wasm streaming compile failed: " + H), f("falling back to ArrayBuffer instantiation"), l(I);
          });
        });
      }(), {};
    })();
    var Xr = e.___wasm_call_ctors = function() {
      return (Xr = e.___wasm_call_ctors = e.asm.B).apply(null, arguments);
    }, Jn = e._malloc = function() {
      return (Jn = e._malloc = e.asm.C).apply(null, arguments);
    }, nt = e._free = function() {
      return (nt = e._free = e.asm.D).apply(null, arguments);
    }, jr = e.___getTypeName = function() {
      return (jr = e.___getTypeName = e.asm.E).apply(null, arguments);
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
    var Qn;
    Ge = function c() {
      Qn || no(), Qn || (Ge = c);
    };
    function no() {
      function c() {
        if (!Qn && (Qn = !0, e.calledRun = !(-2 * 972 + -577 * -13 + -5557), !w)) {
          if (Yn(Et), Yn(un), n(e), e.onRuntimeInitialized && e.onRuntimeInitialized(), e.postRun)
            for (typeof e.postRun == "function" && (e.postRun = [e.postRun]); e.postRun.length; ) {
              var I = e.postRun.shift();
              pt.unshift(I);
            }
          Yn(pt);
        }
      }
      if (!(7788 + 3 * -989 + -4821 * 1 < Se)) {
        if (e.preRun)
          for (typeof e.preRun == "function" && (e.preRun = [e.preRun]); e.preRun.length; )
            ht();
        Yn(pe), 1 * -6203 + 31 * 122 + 807 * 3 < Se || (e.setStatus ? (e.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            e.setStatus("");
          }, 2 * 3756 + 4918 * 2 + -17347), c();
        }, -2145 + -35 * 227 + -1 * -10091)) : c());
      }
    }
    if (e.run = no, e.preInit)
      for (typeof e.preInit == "function" && (e.preInit = [e.preInit]); 8102 * -1 + 6544 + 1558 < e.preInit.length; )
        e.preInit.pop()();
    return no(), o.ready;
  };
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const us = Symbol("Comlink.proxy"), _x = Symbol("Comlink.endpoint"), el = Symbol("Comlink.releaseProxy"), Ao = Symbol("Comlink.finalizer"), fi = Symbol("Comlink.thrown"), Cs = (t) => typeof t == "object" && t !== null || typeof t == "function", tl = {
  canHandle: (t) => Cs(t) && t[us],
  serialize(t) {
    const { port1: o, port2: e } = new MessageChannel();
    return As(t, o), [e, [e]];
  },
  deserialize(t) {
    return t.start(), ps(t);
  }
}, nl = {
  canHandle: (t) => Cs(t) && fi in t,
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
}, ds = /* @__PURE__ */ new Map([
  ["proxy", tl],
  ["throw", nl]
]);
function il(t, o) {
  for (const e of t)
    if (o === e || e === "*" || e instanceof RegExp && e.test(o))
      return !0;
  return !1;
}
function As(t, o = globalThis, e = ["*"]) {
  o.addEventListener("message", function n(i) {
    if (!i || !i.data)
      return;
    if (!il(e, i.origin)) {
      console.warn(`Invalid origin '${i.origin}' for comlink proxy`);
      return;
    }
    const { id: r, type: a, path: g } = Object.assign({ path: [] }, i.data), s = (i.data.argumentList || []).map(St);
    let x;
    try {
      const C = g.slice(0, -1).reduce((f, p) => f[p], t), u = g.reduce((f, p) => f[p], t);
      switch (a) {
        case "GET":
          x = u;
          break;
        case "SET":
          C[g.slice(-1)[0]] = St(i.data.value), x = !0;
          break;
        case "APPLY":
          x = u.apply(C, s);
          break;
        case "CONSTRUCT":
          {
            const f = new u(...s);
            x = cl(f);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: f, port2: p } = new MessageChannel();
            As(t, p), x = sl(f, [f]);
          }
          break;
        case "RELEASE":
          x = void 0;
          break;
        default:
          return;
      }
    } catch (C) {
      x = { value: C, [fi]: 0 };
    }
    Promise.resolve(x).catch((C) => ({ value: C, [fi]: 0 })).then((C) => {
      const [u, f] = Si(C);
      o.postMessage(Object.assign(Object.assign({}, u), { id: r }), f), a === "RELEASE" && (o.removeEventListener("message", n), fs(o), Ao in t && typeof t[Ao] == "function" && t[Ao]());
    }).catch((C) => {
      const [u, f] = Si({
        value: new TypeError("Unserializable return value"),
        [fi]: 0
      });
      o.postMessage(Object.assign(Object.assign({}, u), { id: r }), f);
    });
  }), o.start && o.start();
}
function ol(t) {
  return t.constructor.name === "MessagePort";
}
function fs(t) {
  ol(t) && t.close();
}
function ps(t, o) {
  return jo(t, [], o);
}
function oi(t) {
  if (t)
    throw new Error("Proxy has been released and is not useable");
}
function hs(t) {
  return Qt(t, {
    type: "RELEASE"
  }).then(() => {
    fs(t);
  });
}
const wi = /* @__PURE__ */ new WeakMap(), Bi = "FinalizationRegistry" in globalThis && new FinalizationRegistry((t) => {
  const o = (wi.get(t) || 0) - 1;
  wi.set(t, o), o === 0 && hs(t);
});
function rl(t, o) {
  const e = (wi.get(o) || 0) + 1;
  wi.set(o, e), Bi && Bi.register(t, o, t);
}
function al(t) {
  Bi && Bi.unregister(t);
}
function jo(t, o = [], e = function() {
}) {
  let n = !1;
  const i = new Proxy(e, {
    get(r, a) {
      if (oi(n), a === el)
        return () => {
          al(i), hs(t), n = !0;
        };
      if (a === "then") {
        if (o.length === 0)
          return { then: () => i };
        const g = Qt(t, {
          type: "GET",
          path: o.map((s) => s.toString())
        }).then(St);
        return g.then.bind(g);
      }
      return jo(t, [...o, a]);
    },
    set(r, a, g) {
      oi(n);
      const [s, x] = Si(g);
      return Qt(t, {
        type: "SET",
        path: [...o, a].map((C) => C.toString()),
        value: s
      }, x).then(St);
    },
    apply(r, a, g) {
      oi(n);
      const s = o[o.length - 1];
      if (s === _x)
        return Qt(t, {
          type: "ENDPOINT"
        }).then(St);
      if (s === "bind")
        return jo(t, o.slice(0, -1));
      const [x, C] = Ra(g);
      return Qt(t, {
        type: "APPLY",
        path: o.map((u) => u.toString()),
        argumentList: x
      }, C).then(St);
    },
    construct(r, a) {
      oi(n);
      const [g, s] = Ra(a);
      return Qt(t, {
        type: "CONSTRUCT",
        path: o.map((x) => x.toString()),
        argumentList: g
      }, s).then(St);
    }
  });
  return rl(i, t), i;
}
function gl(t) {
  return Array.prototype.concat.apply([], t);
}
function Ra(t) {
  const o = t.map(Si);
  return [o.map((e) => e[0]), gl(o.map((e) => e[1]))];
}
const ms = /* @__PURE__ */ new WeakMap();
function sl(t, o) {
  return ms.set(t, o), t;
}
function cl(t) {
  return Object.assign(t, { [us]: !0 });
}
function Si(t) {
  for (const [o, e] of ds)
    if (e.canHandle(t)) {
      const [n, i] = e.serialize(t);
      return [
        {
          type: "HANDLER",
          name: o,
          value: n
        },
        i
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
function St(t) {
  switch (t.type) {
    case "HANDLER":
      return ds.get(t.name).deserialize(t.value);
    case "RAW":
      return t.value;
  }
}
function Qt(t, o, e) {
  return new Promise((n) => {
    const i = Il();
    t.addEventListener("message", function r(a) {
      !a.data || !a.data.id || a.data.id !== i || (t.removeEventListener("message", r), n(a.data));
    }), t.start && t.start(), t.postMessage(Object.assign({ id: i }, o), e);
  });
}
function Il() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
function xl(t, o) {
  const { z: e } = o || {};
  return !e || !t ? !0 : Math.abs(e) < t;
}
function ll(t, o, e) {
  const n = xs(e, t), i = ls(o, e);
  return fx(i, n);
}
const bs = "dmFyIHNlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5Owp2YXIgdWUgPSAobywgdSwgZSkgPT4gdSBpbiBvID8gc2UobywgdSwgeyBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwLCB2YWx1ZTogZSB9KSA6IG9bdV0gPSBlOwp2YXIgWW4gPSAobywgdSwgZSkgPT4gKHVlKG8sIHR5cGVvZiB1ICE9ICJzeW1ib2wiID8gdSArICIiIDogdSwgZSksIGUpOwpjb25zdCBXdCA9IHsKICBzaW1kOiAic2FtX3NpbWQud2FzbSIsCiAgc2FtOiAic2FtLndhc20iCn0sIGxlID0gYXN5bmMgKCkgPT4gV2ViQXNzZW1ibHkudmFsaWRhdGUobmV3IFVpbnQ4QXJyYXkoWzAsIDk3LCAxMTUsIDEwOSwgMSwgMCwgMCwgMCwgMSwgNSwgMSwgOTYsIDAsIDEsIDEyMywgMywgMiwgMSwgMCwgMTAsIDEwLCAxLCA4LCAwLCA2NSwgMCwgMjUzLCAxNSwgMjUzLCA5OCwgMTFdKSk7CmNsYXNzIHggZXh0ZW5kcyBFcnJvciB7CiAgY29uc3RydWN0b3IoZSwgbSkgewogICAgc3VwZXIoZSk7CiAgICBZbih0aGlzLCAiY2F1c2UiKTsKICAgIHRoaXMubmFtZSA9ICJBdXRvQ2FwdHVyZUVycm9yIiwgdGhpcy5jYXVzZSA9IG07CiAgfQogIC8vIENoYW5nZSB0aGlzIHRvIERlY29yYXRvciB3aGVuIHRoZXkgd2lsbCBiZSBpbiBzdGFibGUgcmVsZWFzZQogIHN0YXRpYyBsb2dFcnJvcihlKSB7CiAgfQogIHN0YXRpYyBmcm9tQ2FtZXJhRXJyb3IoZSkgewogICAgaWYgKHRoaXMubG9nRXJyb3IoZSksIGUgaW5zdGFuY2VvZiB4KQogICAgICByZXR1cm4gZTsKICAgIGxldCBtOwogICAgc3dpdGNoIChlLm5hbWUpIHsKICAgICAgY2FzZSAiT3ZlcmNvbnN0cmFpbmVkRXJyb3IiOgogICAgICAgIG0gPSAiTWluaW11bSBxdWFsaXR5IHJlcXVpcmVtZW50cyBhcmUgbm90IG1ldCBieSB5b3VyIGNhbWVyYSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdFJlYWRhYmxlRXJyb3IiOgogICAgICBjYXNlICJBYm9ydEVycm9yIjoKICAgICAgICBtID0gIlRoZSB3ZWJjYW0gaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciBhcHBsaWNhdGlvbiI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdEFsbG93ZWRFcnJvciI6CiAgICAgICAgbSA9ICJUbyB1c2UgeW91ciBjYW1lcmEsIHlvdSBtdXN0IGFsbG93IHBlcm1pc3Npb25zIjsKICAgICAgICBicmVhazsKICAgICAgY2FzZSAiTm90Rm91bmRFcnJvciI6CiAgICAgICAgbSA9ICJUaGVyZSBpcyBubyBjYW1lcmEgYXZhaWxhYmxlIHRvIHlvdSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGRlZmF1bHQ6CiAgICAgICAgbSA9ICJBbiB1bmtub3duIGNhbWVyYSBlcnJvciBoYXMgb2NjdXJyZWQiOwogICAgICAgIGJyZWFrOwogICAgfQogICAgcmV0dXJuIG5ldyB4KG0sIGUpOwogIH0KICBzdGF0aWMgZnJvbUVycm9yKGUpIHsKICAgIGlmICh0aGlzLmxvZ0Vycm9yKGUpLCBlIGluc3RhbmNlb2YgeCkKICAgICAgcmV0dXJuIGU7CiAgICBjb25zdCBtID0gIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkIjsKICAgIHJldHVybiBuZXcgeChtKTsKICB9Cn0KY29uc3QgY2UgPSB7CiAgUkdCOiAiUkdCIiwKICBSR0JBOiAiUkdCQSIKfSwgZmUgPSAobykgPT4gTnVtYmVyLnBhcnNlRmxvYXQoby50b0ZpeGVkKDMpKSwgZGUgPSAobywgdSkgPT4gTWF0aC5taW4obywgdSk7CnZhciBoZSA9IGZ1bmN0aW9uKCkgewogIHZhciBvID0gdHlwZW9mIGRvY3VtZW50IDwgInUiICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgPyBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYyA6IHZvaWQgMDsKICByZXR1cm4gZnVuY3Rpb24odSkgewogICAgdSA9IHUgfHwge307CiAgICB2YXIgZTsKICAgIGUgfHwgKGUgPSB0eXBlb2YgdSA8ICJ1IiA/IHUgOiB7fSk7CiAgICB2YXIgbSwgZzsKICAgIGUucmVhZHkgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihuLCB0KSB7CiAgICAgIG0gPSBuLCBnID0gdDsKICAgIH0pOwogICAgdmFyIF8gPSB7fSwgdzsKICAgIGZvciAodyBpbiBlKQogICAgICBlLmhhc093blByb3BlcnR5KHcpICYmIChfW3ddID0gZVt3XSk7CiAgICB2YXIgVCA9ICIuL3RoaXMucHJvZ3JhbSIsIE0gPSAhMSwgRSA9ICExOwogICAgTSA9IHR5cGVvZiB3aW5kb3cgPT0gIm9iamVjdCIsIEUgPSB0eXBlb2YgaW1wb3J0U2NyaXB0cyA9PSAiZnVuY3Rpb24iOwogICAgdmFyIEMgPSAiIiwgUjsKICAgIChNIHx8IEUpICYmIChFID8gQyA9IHNlbGYubG9jYXRpb24uaHJlZiA6IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgKEMgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYyksIG8gJiYgKEMgPSBvKSwgQy5pbmRleE9mKCJibG9iOiIpICE9PSAwID8gQyA9IEMuc3Vic3RyKDAsIEMubGFzdEluZGV4T2YoIi8iKSArIDEpIDogQyA9ICIiLCBFICYmIChSID0gZnVuY3Rpb24obikgewogICAgICB2YXIgdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOwogICAgICByZXR1cm4gdC5vcGVuKCJHRVQiLCBuLCAhMSksIHQucmVzcG9uc2VUeXBlID0gImFycmF5YnVmZmVyIiwgdC5zZW5kKG51bGwpLCBuZXcgVWludDhBcnJheSh0LnJlc3BvbnNlKTsKICAgIH0pKTsKICAgIHZhciBTID0gZS5wcmludEVyciB8fCBjb25zb2xlLndhcm4uYmluZChjb25zb2xlKTsKICAgIGZvciAodyBpbiBfKQogICAgICBfLmhhc093blByb3BlcnR5KHcpICYmIChlW3ddID0gX1t3XSk7CiAgICBfID0gbnVsbCwgZS50aGlzUHJvZ3JhbSAmJiAoVCA9IGUudGhpc1Byb2dyYW0pOwogICAgdmFyIGo7CiAgICBlLndhc21CaW5hcnkgJiYgKGogPSBlLndhc21CaW5hcnkpLCBlLm5vRXhpdFJ1bnRpbWUgJiYgZS5ub0V4aXRSdW50aW1lLCB0eXBlb2YgV2ViQXNzZW1ibHkgIT0gIm9iamVjdCIgJiYgc24oIm5vIG5hdGl2ZSB3YXNtIHN1cHBvcnQgZGV0ZWN0ZWQiKTsKICAgIHZhciBHLCBrbiA9ICExOwogICAgZnVuY3Rpb24gWG4obikgewogICAgICBuIHx8IHNuKCJBc3NlcnRpb24gZmFpbGVkOiB1bmRlZmluZWQiKTsKICAgIH0KICAgIHZhciBLbiA9IHR5cGVvZiBUZXh0RGVjb2RlciA8ICJ1IiA/IG5ldyBUZXh0RGVjb2RlcigidXRmOCIpIDogdm9pZCAwOwogICAgZnVuY3Rpb24gTnQobiwgdCwgcikgewogICAgICB2YXIgaSA9IEY7CiAgICAgIGlmICgwIDwgcikgewogICAgICAgIHIgPSB0ICsgciAtIDE7CiAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBuLmxlbmd0aDsgKythKSB7CiAgICAgICAgICB2YXIgcyA9IG4uY2hhckNvZGVBdChhKTsKICAgICAgICAgIGlmICg1NTI5NiA8PSBzICYmIDU3MzQzID49IHMpIHsKICAgICAgICAgICAgdmFyIGMgPSBuLmNoYXJDb2RlQXQoKythKTsKICAgICAgICAgICAgcyA9IDY1NTM2ICsgKChzICYgMTAyMykgPDwgMTApIHwgYyAmIDEwMjM7CiAgICAgICAgICB9CiAgICAgICAgICBpZiAoMTI3ID49IHMpIHsKICAgICAgICAgICAgaWYgKHQgPj0gcikKICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgaVt0KytdID0gczsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIGlmICgyMDQ3ID49IHMpIHsKICAgICAgICAgICAgICBpZiAodCArIDEgPj0gcikKICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgIGlbdCsrXSA9IDE5MiB8IHMgPj4gNjsKICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICBpZiAoNjU1MzUgPj0gcykgewogICAgICAgICAgICAgICAgaWYgKHQgKyAyID49IHIpCiAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgaVt0KytdID0gMjI0IHwgcyA+PiAxMjsKICAgICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgaWYgKHQgKyAzID49IHIpCiAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgaVt0KytdID0gMjQwIHwgcyA+PiAxOCwgaVt0KytdID0gMTI4IHwgcyA+PiAxMiAmIDYzOwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgICBpW3QrK10gPSAxMjggfCBzID4+IDYgJiA2MzsKICAgICAgICAgICAgfQogICAgICAgICAgICBpW3QrK10gPSAxMjggfCBzICYgNjM7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIGlbdF0gPSAwOwogICAgICB9CiAgICB9CiAgICB2YXIgUW4gPSB0eXBlb2YgVGV4dERlY29kZXIgPCAidSIgPyBuZXcgVGV4dERlY29kZXIoInV0Zi0xNmxlIikgOiB2b2lkIDA7CiAgICBmdW5jdGlvbiBVdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSBuID4+IDEsIGkgPSByICsgdCAvIDI7ICEociA+PSBpKSAmJiBwbltyXTsgKQogICAgICAgICsrcjsKICAgICAgaWYgKHIgPDw9IDEsIDMyIDwgciAtIG4gJiYgUW4pCiAgICAgICAgcmV0dXJuIFFuLmRlY29kZShGLnN1YmFycmF5KG4sIHIpKTsKICAgICAgZm9yIChyID0gMCwgaSA9ICIiOyA7ICkgewogICAgICAgIHZhciBhID0gUVtuICsgMiAqIHIgPj4gMV07CiAgICAgICAgaWYgKGEgPT0gMCB8fCByID09IHQgLyAyKQogICAgICAgICAgcmV0dXJuIGk7CiAgICAgICAgKytyLCBpICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYSk7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIEh0KG4sIHQsIHIpIHsKICAgICAgaWYgKHIgPT09IHZvaWQgMCAmJiAociA9IDIxNDc0ODM2NDcpLCAyID4gcikKICAgICAgICByZXR1cm4gMDsKICAgICAgciAtPSAyOwogICAgICB2YXIgaSA9IHQ7CiAgICAgIHIgPSByIDwgMiAqIG4ubGVuZ3RoID8gciAvIDIgOiBuLmxlbmd0aDsKICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCByOyArK2EpCiAgICAgICAgUVt0ID4+IDFdID0gbi5jaGFyQ29kZUF0KGEpLCB0ICs9IDI7CiAgICAgIHJldHVybiBRW3QgPj4gMV0gPSAwLCB0IC0gaTsKICAgIH0KICAgIGZ1bmN0aW9uIHp0KG4pIHsKICAgICAgcmV0dXJuIDIgKiBuLmxlbmd0aDsKICAgIH0KICAgIGZ1bmN0aW9uIER0KG4sIHQpIHsKICAgICAgZm9yICh2YXIgciA9IDAsIGkgPSAiIjsgIShyID49IHQgLyA0KTsgKSB7CiAgICAgICAgdmFyIGEgPSBPW24gKyA0ICogciA+PiAyXTsKICAgICAgICBpZiAoYSA9PSAwKQogICAgICAgICAgYnJlYWs7CiAgICAgICAgKytyLCA2NTUzNiA8PSBhID8gKGEgLT0gNjU1MzYsIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiB8IGEgPj4gMTAsIDU2MzIwIHwgYSAmIDEwMjMpKSA6IGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShhKTsKICAgICAgfQogICAgICByZXR1cm4gaTsKICAgIH0KICAgIGZ1bmN0aW9uIEJ0KG4sIHQsIHIpIHsKICAgICAgaWYgKHIgPT09IHZvaWQgMCAmJiAociA9IDIxNDc0ODM2NDcpLCA0ID4gcikKICAgICAgICByZXR1cm4gMDsKICAgICAgdmFyIGkgPSB0OwogICAgICByID0gaSArIHIgLSA0OwogICAgICBmb3IgKHZhciBhID0gMDsgYSA8IG4ubGVuZ3RoOyArK2EpIHsKICAgICAgICB2YXIgcyA9IG4uY2hhckNvZGVBdChhKTsKICAgICAgICBpZiAoNTUyOTYgPD0gcyAmJiA1NzM0MyA+PSBzKSB7CiAgICAgICAgICB2YXIgYyA9IG4uY2hhckNvZGVBdCgrK2EpOwogICAgICAgICAgcyA9IDY1NTM2ICsgKChzICYgMTAyMykgPDwgMTApIHwgYyAmIDEwMjM7CiAgICAgICAgfQogICAgICAgIGlmIChPW3QgPj4gMl0gPSBzLCB0ICs9IDQsIHQgKyA0ID4gcikKICAgICAgICAgIGJyZWFrOwogICAgICB9CiAgICAgIHJldHVybiBPW3QgPj4gMl0gPSAwLCB0IC0gaTsKICAgIH0KICAgIGZ1bmN0aW9uIFZ0KG4pIHsKICAgICAgZm9yICh2YXIgdCA9IDAsIHIgPSAwOyByIDwgbi5sZW5ndGg7ICsrcikgewogICAgICAgIHZhciBpID0gbi5jaGFyQ29kZUF0KHIpOwogICAgICAgIDU1Mjk2IDw9IGkgJiYgNTczNDMgPj0gaSAmJiArK3IsIHQgKz0gNDsKICAgICAgfQogICAgICByZXR1cm4gdDsKICAgIH0KICAgIHZhciBLLCBZLCBGLCBRLCBwbiwgTywgVSwgcW4sIG50OwogICAgZnVuY3Rpb24gdHQobikgewogICAgICBLID0gbiwgZS5IRUFQOCA9IFkgPSBuZXcgSW50OEFycmF5KG4pLCBlLkhFQVAxNiA9IFEgPSBuZXcgSW50MTZBcnJheShuKSwgZS5IRUFQMzIgPSBPID0gbmV3IEludDMyQXJyYXkobiksIGUuSEVBUFU4ID0gRiA9IG5ldyBVaW50OEFycmF5KG4pLCBlLkhFQVBVMTYgPSBwbiA9IG5ldyBVaW50MTZBcnJheShuKSwgZS5IRUFQVTMyID0gVSA9IG5ldyBVaW50MzJBcnJheShuKSwgZS5IRUFQRjMyID0gcW4gPSBuZXcgRmxvYXQzMkFycmF5KG4pLCBlLkhFQVBGNjQgPSBudCA9IG5ldyBGbG9hdDY0QXJyYXkobik7CiAgICB9CiAgICB2YXIgZXQgPSBlLklOSVRJQUxfTUVNT1JZIHx8IDE2Nzc3MjE2OwogICAgZS53YXNtTWVtb3J5ID8gRyA9IGUud2FzbU1lbW9yeSA6IEcgPSBuZXcgV2ViQXNzZW1ibHkuTWVtb3J5KHsgaW5pdGlhbDogZXQgLyA2NTUzNiwgbWF4aW11bTogMzI3NjggfSksIEcgJiYgKEsgPSBHLmJ1ZmZlciksIGV0ID0gSy5ieXRlTGVuZ3RoLCB0dChLKTsKICAgIHZhciBydCA9IFtdLCBpdCA9IFtdLCBHdCA9IFtdLCBhdCA9IFtdOwogICAgZnVuY3Rpb24gWXQoKSB7CiAgICAgIHZhciBuID0gZS5wcmVSdW4uc2hpZnQoKTsKICAgICAgcnQudW5zaGlmdChuKTsKICAgIH0KICAgIHZhciBaID0gMCwgb24gPSBudWxsOwogICAgZS5wcmVsb2FkZWRJbWFnZXMgPSB7fSwgZS5wcmVsb2FkZWRBdWRpb3MgPSB7fTsKICAgIGZ1bmN0aW9uIHNuKG4pIHsKICAgICAgdGhyb3cgZS5vbkFib3J0ICYmIGUub25BYm9ydChuKSwgUyhuKSwga24gPSAhMCwgbiA9IG5ldyBXZWJBc3NlbWJseS5SdW50aW1lRXJyb3IoImFib3J0KCIgKyBuICsgIikuIEJ1aWxkIHdpdGggLXMgQVNTRVJUSU9OUz0xIGZvciBtb3JlIGluZm8uIiksIGcobiksIG47CiAgICB9CiAgICBmdW5jdGlvbiBSbihuKSB7CiAgICAgIHZhciB0ID0gJDsKICAgICAgcmV0dXJuIFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCA/IHQuc3RhcnRzV2l0aChuKSA6IHQuaW5kZXhPZihuKSA9PT0gMDsKICAgIH0KICAgIGZ1bmN0aW9uIG90KCkgewogICAgICByZXR1cm4gUm4oImRhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCwiKTsKICAgIH0KICAgIHZhciAkID0gInNhbS53YXNtIjsKICAgIGlmICghb3QoKSkgewogICAgICB2YXIgc3QgPSAkOwogICAgICAkID0gZS5sb2NhdGVGaWxlID8gZS5sb2NhdGVGaWxlKHN0LCBDKSA6IEMgKyBzdDsKICAgIH0KICAgIGZ1bmN0aW9uIHV0KCkgewogICAgICB0cnkgewogICAgICAgIGlmIChqKQogICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGopOwogICAgICAgIGlmIChSKQogICAgICAgICAgcmV0dXJuIFIoJCk7CiAgICAgICAgdGhyb3cgImJvdGggYXN5bmMgYW5kIHN5bmMgZmV0Y2hpbmcgb2YgdGhlIHdhc20gZmFpbGVkIjsKICAgICAgfSBjYXRjaCAobikgewogICAgICAgIHNuKG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBadCgpIHsKICAgICAgcmV0dXJuIGogfHwgIU0gJiYgIUUgfHwgdHlwZW9mIGZldGNoICE9ICJmdW5jdGlvbiIgfHwgUm4oImZpbGU6Ly8iKSA/IFByb21pc2UucmVzb2x2ZSgpLnRoZW4odXQpIDogZmV0Y2goJCwgeyBjcmVkZW50aWFsczogInNhbWUtb3JpZ2luIiB9KS50aGVuKGZ1bmN0aW9uKG4pIHsKICAgICAgICBpZiAoIW4ub2spCiAgICAgICAgICB0aHJvdyAiZmFpbGVkIHRvIGxvYWQgd2FzbSBiaW5hcnkgZmlsZSBhdCAnIiArICQgKyAiJyI7CiAgICAgICAgcmV0dXJuIG4uYXJyYXlCdWZmZXIoKTsKICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oKSB7CiAgICAgICAgcmV0dXJuIHV0KCk7CiAgICAgIH0pOwogICAgfQogICAgZnVuY3Rpb24geW4obikgewogICAgICBmb3IgKDsgMCA8IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4uc2hpZnQoKTsKICAgICAgICBpZiAodHlwZW9mIHQgPT0gImZ1bmN0aW9uIikKICAgICAgICAgIHQoZSk7CiAgICAgICAgZWxzZSB7CiAgICAgICAgICB2YXIgciA9IHQuQmE7CiAgICAgICAgICB0eXBlb2YgciA9PSAibnVtYmVyIiA/IHQudGEgPT09IHZvaWQgMCA/IEZuKCJ2IiwgcikoKSA6IEZuKCJ2aSIsIHIpKHQudGEpIDogcih0LnRhID09PSB2b2lkIDAgPyBudWxsIDogdC50YSk7CiAgICAgICAgfQogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBGbihuLCB0KSB7CiAgICAgIHZhciByID0gW107CiAgICAgIHJldHVybiBmdW5jdGlvbigpIHsKICAgICAgICByLmxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7CiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspCiAgICAgICAgICByW2ldID0gYXJndW1lbnRzW2ldOwogICAgICAgIHJldHVybiByICYmIHIubGVuZ3RoID8gZVsiZHluQ2FsbF8iICsgbl0uYXBwbHkobnVsbCwgW3RdLmNvbmNhdChyKSkgOiBlWyJkeW5DYWxsXyIgKyBuXS5jYWxsKG51bGwsIHQpOwogICAgICB9OwogICAgfQogICAgZnVuY3Rpb24gJHQobikgewogICAgICB0aGlzLmRhID0gbiAtIDE2LCB0aGlzLk9hID0gZnVuY3Rpb24odCkgewogICAgICAgIE9bdGhpcy5kYSArIDggPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLkxhID0gZnVuY3Rpb24odCkgewogICAgICAgIE9bdGhpcy5kYSArIDAgPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLk1hID0gZnVuY3Rpb24oKSB7CiAgICAgICAgT1t0aGlzLmRhICsgNCA+PiAyXSA9IDA7CiAgICAgIH0sIHRoaXMuS2EgPSBmdW5jdGlvbigpIHsKICAgICAgICBZW3RoaXMuZGEgKyAxMiA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuTmEgPSBmdW5jdGlvbigpIHsKICAgICAgICBZW3RoaXMuZGEgKyAxMyA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuRmEgPSBmdW5jdGlvbih0LCByKSB7CiAgICAgICAgdGhpcy5PYSh0KSwgdGhpcy5MYShyKSwgdGhpcy5NYSgpLCB0aGlzLkthKCksIHRoaXMuTmEoKTsKICAgICAgfTsKICAgIH0KICAgIGZ1bmN0aW9uIG1uKCkgewogICAgICByZXR1cm4gMCA8IG1uLnhhOwogICAgfQogICAgZnVuY3Rpb24geG4obikgewogICAgICBzd2l0Y2ggKG4pIHsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICByZXR1cm4gMDsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIDQ6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlIDg6CiAgICAgICAgICByZXR1cm4gMzsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biB0eXBlIHNpemU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgdmFyIGx0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gVyhuKSB7CiAgICAgIGZvciAodmFyIHQgPSAiIjsgRltuXTsgKQogICAgICAgIHQgKz0gbHRbRltuKytdXTsKICAgICAgcmV0dXJuIHQ7CiAgICB9CiAgICB2YXIgcSA9IHt9LCBKID0ge30sIHZuID0ge307CiAgICBmdW5jdGlvbiBJbihuKSB7CiAgICAgIGlmIChuID09PSB2b2lkIDApCiAgICAgICAgcmV0dXJuICJfdW5rbm93biI7CiAgICAgIG4gPSBuLnJlcGxhY2UoL1teYS16QS1aMC05X10vZywgIiQiKTsKICAgICAgdmFyIHQgPSBuLmNoYXJDb2RlQXQoMCk7CiAgICAgIHJldHVybiA0OCA8PSB0ICYmIDU3ID49IHQgPyAiXyIgKyBuIDogbjsKICAgIH0KICAgIGZ1bmN0aW9uIGpuKG4sIHQpIHsKICAgICAgcmV0dXJuIG4gPSBJbihuKSwgbmV3IEZ1bmN0aW9uKCJib2R5IiwgInJldHVybiBmdW5jdGlvbiAiICsgbiArIGAoKSB7CiAgICAidXNlIHN0cmljdCI7ICAgIHJldHVybiBib2R5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7Cn07CmApKHQpOwogICAgfQogICAgZnVuY3Rpb24gTG4obikgewogICAgICB2YXIgdCA9IEVycm9yLCByID0gam4obiwgZnVuY3Rpb24oaSkgewogICAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMubWVzc2FnZSA9IGksIGkgPSBFcnJvcihpKS5zdGFjaywgaSAhPT0gdm9pZCAwICYmICh0aGlzLnN0YWNrID0gdGhpcy50b1N0cmluZygpICsgYApgICsgaS5yZXBsYWNlKC9eRXJyb3IoOlteXG5dKik/XG4vLCAiIikpOwogICAgICB9KTsKICAgICAgcmV0dXJuIHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSksIHIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gciwgci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlID09PSB2b2lkIDAgPyB0aGlzLm5hbWUgOiB0aGlzLm5hbWUgKyAiOiAiICsgdGhpcy5tZXNzYWdlOwogICAgICB9LCByOwogICAgfQogICAgdmFyIG5uID0gdm9pZCAwOwogICAgZnVuY3Rpb24gdihuKSB7CiAgICAgIHRocm93IG5ldyBubihuKTsKICAgIH0KICAgIHZhciBjdCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIGduKG4pIHsKICAgICAgdGhyb3cgbmV3IGN0KG4pOwogICAgfQogICAgZnVuY3Rpb24gdG4obiwgdCwgcikgewogICAgICBmdW5jdGlvbiBpKGwpIHsKICAgICAgICBsID0gcihsKSwgbC5sZW5ndGggIT09IG4ubGVuZ3RoICYmIGduKCJNaXNtYXRjaGVkIHR5cGUgY29udmVydGVyIGNvdW50Iik7CiAgICAgICAgZm9yICh2YXIgcCA9IDA7IHAgPCBuLmxlbmd0aDsgKytwKQogICAgICAgICAgSChuW3BdLCBsW3BdKTsKICAgICAgfQogICAgICBuLmZvckVhY2goZnVuY3Rpb24obCkgewogICAgICAgIHZuW2xdID0gdDsKICAgICAgfSk7CiAgICAgIHZhciBhID0gQXJyYXkodC5sZW5ndGgpLCBzID0gW10sIGMgPSAwOwogICAgICB0LmZvckVhY2goZnVuY3Rpb24obCwgcCkgewogICAgICAgIEouaGFzT3duUHJvcGVydHkobCkgPyBhW3BdID0gSltsXSA6IChzLnB1c2gobCksIHEuaGFzT3duUHJvcGVydHkobCkgfHwgKHFbbF0gPSBbXSksIHFbbF0ucHVzaChmdW5jdGlvbigpIHsKICAgICAgICAgIGFbcF0gPSBKW2xdLCArK2MsIGMgPT09IHMubGVuZ3RoICYmIGkoYSk7CiAgICAgICAgfSkpOwogICAgICB9KSwgcy5sZW5ndGggPT09IDAgJiYgaShhKTsKICAgIH0KICAgIGZ1bmN0aW9uIEgobiwgdCwgcikgewogICAgICBpZiAociA9IHIgfHwge30sICEoImFyZ1BhY2tBZHZhbmNlIiBpbiB0KSkKICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJyZWdpc3RlclR5cGUgcmVnaXN0ZXJlZEluc3RhbmNlIHJlcXVpcmVzIGFyZ1BhY2tBZHZhbmNlIik7CiAgICAgIHZhciBpID0gdC5uYW1lOwogICAgICBpZiAobiB8fCB2KCd0eXBlICInICsgaSArICciIG11c3QgaGF2ZSBhIHBvc2l0aXZlIGludGVnZXIgdHlwZWlkIHBvaW50ZXInKSwgSi5oYXNPd25Qcm9wZXJ0eShuKSkgewogICAgICAgIGlmIChyLkVhKQogICAgICAgICAgcmV0dXJuOwogICAgICAgIHYoIkNhbm5vdCByZWdpc3RlciB0eXBlICciICsgaSArICInIHR3aWNlIik7CiAgICAgIH0KICAgICAgSltuXSA9IHQsIGRlbGV0ZSB2bltuXSwgcS5oYXNPd25Qcm9wZXJ0eShuKSAmJiAodCA9IHFbbl0sIGRlbGV0ZSBxW25dLCB0LmZvckVhY2goZnVuY3Rpb24oYSkgewogICAgICAgIGEoKTsKICAgICAgfSkpOwogICAgfQogICAgZnVuY3Rpb24gSnQobikgewogICAgICByZXR1cm4geyBjb3VudDogbi5jb3VudCwgb2E6IG4ub2EsIHBhOiBuLnBhLCBkYTogbi5kYSwgZmE6IG4uZmEsIGdhOiBuLmdhLCBoYTogbi5oYSB9OwogICAgfQogICAgZnVuY3Rpb24gTm4obikgewogICAgICB2KG4uQS5mYS5lYS5uYW1lICsgIiBpbnN0YW5jZSBhbHJlYWR5IGRlbGV0ZWQiKTsKICAgIH0KICAgIHZhciBVbiA9ICExOwogICAgZnVuY3Rpb24gZnQoKSB7CiAgICB9CiAgICBmdW5jdGlvbiBkdChuKSB7CiAgICAgIC0tbi5jb3VudC52YWx1ZSwgbi5jb3VudC52YWx1ZSA9PT0gMCAmJiAobi5nYSA/IG4uaGEubmEobi5nYSkgOiBuLmZhLmVhLm5hKG4uZGEpKTsKICAgIH0KICAgIGZ1bmN0aW9uIHVuKG4pIHsKICAgICAgcmV0dXJuIHR5cGVvZiBGaW5hbGl6YXRpb25Hcm91cCA+ICJ1IiA/ICh1biA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICByZXR1cm4gdDsKICAgICAgfSwgbikgOiAoVW4gPSBuZXcgRmluYWxpemF0aW9uR3JvdXAoZnVuY3Rpb24odCkgewogICAgICAgIGZvciAodmFyIHIgPSB0Lm5leHQoKTsgIXIuZG9uZTsgciA9IHQubmV4dCgpKQogICAgICAgICAgciA9IHIudmFsdWUsIHIuZGEgPyBkdChyKSA6IGNvbnNvbGUud2Fybigib2JqZWN0IGFscmVhZHkgZGVsZXRlZDogIiArIHIuZGEpOwogICAgICB9KSwgdW4gPSBmdW5jdGlvbih0KSB7CiAgICAgICAgcmV0dXJuIFVuLnJlZ2lzdGVyKHQsIHQuQSwgdC5BKSwgdDsKICAgICAgfSwgZnQgPSBmdW5jdGlvbih0KSB7CiAgICAgICAgVW4udW5yZWdpc3Rlcih0LkEpOwogICAgICB9LCB1bihuKSk7CiAgICB9CiAgICB2YXIgbG4gPSB2b2lkIDAsIGNuID0gW107CiAgICBmdW5jdGlvbiBIbigpIHsKICAgICAgZm9yICg7IGNuLmxlbmd0aDsgKSB7CiAgICAgICAgdmFyIG4gPSBjbi5wb3AoKTsKICAgICAgICBuLkEub2EgPSAhMSwgbi5kZWxldGUoKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gQigpIHsKICAgIH0KICAgIHZhciBodCA9IHt9OwogICAgZnVuY3Rpb24gWHQobiwgdCkgewogICAgICB2YXIgciA9IGU7CiAgICAgIGlmIChyW25dLmphID09PSB2b2lkIDApIHsKICAgICAgICB2YXIgaSA9IHJbbl07CiAgICAgICAgcltuXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgcmV0dXJuIHJbbl0uamEuaGFzT3duUHJvcGVydHkoYXJndW1lbnRzLmxlbmd0aCkgfHwgdigiRnVuY3Rpb24gJyIgKyB0ICsgIicgY2FsbGVkIHdpdGggYW4gaW52YWxpZCBudW1iZXIgb2YgYXJndW1lbnRzICgiICsgYXJndW1lbnRzLmxlbmd0aCArICIpIC0gZXhwZWN0cyBvbmUgb2YgKCIgKyByW25dLmphICsgIikhIiksIHJbbl0uamFbYXJndW1lbnRzLmxlbmd0aF0uYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICB9LCByW25dLmphID0gW10sIHJbbl0uamFbaS55YV0gPSBpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBwdChuLCB0LCByKSB7CiAgICAgIGUuaGFzT3duUHJvcGVydHkobikgPyAoKHIgPT09IHZvaWQgMCB8fCBlW25dLmphICE9PSB2b2lkIDAgJiYgZVtuXS5qYVtyXSAhPT0gdm9pZCAwKSAmJiB2KCJDYW5ub3QgcmVnaXN0ZXIgcHVibGljIG5hbWUgJyIgKyBuICsgIicgdHdpY2UiKSwgWHQobiwgbiksIGUuaGFzT3duUHJvcGVydHkocikgJiYgdigiQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIG92ZXJsb2FkcyBvZiBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgbnVtYmVyIG9mIGFyZ3VtZW50cyAoIiArIHIgKyAiKSEiKSwgZVtuXS5qYVtyXSA9IHQpIDogKGVbbl0gPSB0LCByICE9PSB2b2lkIDAgJiYgKGVbbl0uUmEgPSByKSk7CiAgICB9CiAgICBmdW5jdGlvbiBLdChuLCB0LCByLCBpLCBhLCBzLCBjLCBsKSB7CiAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMuY29uc3RydWN0b3IgPSB0LCB0aGlzLm1hID0gciwgdGhpcy5uYSA9IGksIHRoaXMuaWEgPSBhLCB0aGlzLkNhID0gcywgdGhpcy5xYSA9IGMsIHRoaXMuQWEgPSBsOwogICAgfQogICAgZnVuY3Rpb24gd24obiwgdCwgcikgewogICAgICBmb3IgKDsgdCAhPT0gcjsgKQogICAgICAgIHQucWEgfHwgdigiRXhwZWN0ZWQgbnVsbCBvciBpbnN0YW5jZSBvZiAiICsgci5uYW1lICsgIiwgZ290IGFuIGluc3RhbmNlIG9mICIgKyB0Lm5hbWUpLCBuID0gdC5xYShuKSwgdCA9IHQuaWE7CiAgICAgIHJldHVybiBuOwogICAgfQogICAgZnVuY3Rpb24gUXQobiwgdCkgewogICAgICByZXR1cm4gdCA9PT0gbnVsbCA/ICh0aGlzLnVhICYmIHYoIm51bGwgaXMgbm90IGEgdmFsaWQgIiArIHRoaXMubmFtZSksIDApIDogKHQuQSB8fCB2KCdDYW5ub3QgcGFzcyAiJyArIHJuKHQpICsgJyIgYXMgYSAnICsgdGhpcy5uYW1lKSwgdC5BLmRhIHx8IHYoIkNhbm5vdCBwYXNzIGRlbGV0ZWQgb2JqZWN0IGFzIGEgcG9pbnRlciBvZiB0eXBlICIgKyB0aGlzLm5hbWUpLCB3bih0LkEuZGEsIHQuQS5mYS5lYSwgdGhpcy5lYSkpOwogICAgfQogICAgZnVuY3Rpb24gcXQobiwgdCkgewogICAgICBpZiAodCA9PT0gbnVsbCkgewogICAgICAgIGlmICh0aGlzLnVhICYmIHYoIm51bGwgaXMgbm90IGEgdmFsaWQgIiArIHRoaXMubmFtZSksIHRoaXMuc2EpIHsKICAgICAgICAgIHZhciByID0gdGhpcy5IYSgpOwogICAgICAgICAgcmV0dXJuIG4gIT09IG51bGwgJiYgbi5wdXNoKHRoaXMubmEsIHIpLCByOwogICAgICAgIH0KICAgICAgICByZXR1cm4gMDsKICAgICAgfQogICAgICBpZiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgcm4odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksICF0aGlzLnJhICYmIHQuQS5mYS5yYSAmJiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyAodC5BLmhhID8gdC5BLmhhLm5hbWUgOiB0LkEuZmEubmFtZSkgKyAiIHRvIHBhcmFtZXRlciB0eXBlICIgKyB0aGlzLm5hbWUpLCByID0gd24odC5BLmRhLCB0LkEuZmEuZWEsIHRoaXMuZWEpLCB0aGlzLnNhKQogICAgICAgIHN3aXRjaCAodC5BLmdhID09PSB2b2lkIDAgJiYgdigiUGFzc2luZyByYXcgcG9pbnRlciB0byBzbWFydCBwb2ludGVyIGlzIGlsbGVnYWwiKSwgdGhpcy5QYSkgewogICAgICAgICAgY2FzZSAwOgogICAgICAgICAgICB0LkEuaGEgPT09IHRoaXMgPyByID0gdC5BLmdhIDogdigiQ2Fubm90IGNvbnZlcnQgYXJndW1lbnQgb2YgdHlwZSAiICsgKHQuQS5oYSA/IHQuQS5oYS5uYW1lIDogdC5BLmZhLm5hbWUpICsgIiB0byBwYXJhbWV0ZXIgdHlwZSAiICsgdGhpcy5uYW1lKTsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICBjYXNlIDE6CiAgICAgICAgICAgIHIgPSB0LkEuZ2E7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgY2FzZSAyOgogICAgICAgICAgICBpZiAodC5BLmhhID09PSB0aGlzKQogICAgICAgICAgICAgIHIgPSB0LkEuZ2E7CiAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgIHZhciBpID0gdC5jbG9uZSgpOwogICAgICAgICAgICAgIHIgPSB0aGlzLklhKHIsIGVuKGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgICAgaS5kZWxldGUoKTsKICAgICAgICAgICAgICB9KSksIG4gIT09IG51bGwgJiYgbi5wdXNoKHRoaXMubmEsIHIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgZGVmYXVsdDoKICAgICAgICAgICAgdigiVW5zdXBwb3J0aW5nIHNoYXJpbmcgcG9saWN5Iik7CiAgICAgICAgfQogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIG5lKG4sIHQpIHsKICAgICAgcmV0dXJuIHQgPT09IG51bGwgPyAodGhpcy51YSAmJiB2KCJudWxsIGlzIG5vdCBhIHZhbGlkICIgKyB0aGlzLm5hbWUpLCAwKSA6ICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBybih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgdC5BLmZhLnJhICYmIHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArIHQuQS5mYS5uYW1lICsgIiB0byBwYXJhbWV0ZXIgdHlwZSAiICsgdGhpcy5uYW1lKSwgd24odC5BLmRhLCB0LkEuZmEuZWEsIHRoaXMuZWEpKTsKICAgIH0KICAgIGZ1bmN0aW9uIEFuKG4pIHsKICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKFVbbiA+PiAyXSk7CiAgICB9CiAgICBmdW5jdGlvbiB5dChuLCB0LCByKSB7CiAgICAgIHJldHVybiB0ID09PSByID8gbiA6IHIuaWEgPT09IHZvaWQgMCA/IG51bGwgOiAobiA9IHl0KG4sIHQsIHIuaWEpLCBuID09PSBudWxsID8gbnVsbCA6IHIuQWEobikpOwogICAgfQogICAgdmFyIGZuID0ge307CiAgICBmdW5jdGlvbiB0ZShuLCB0KSB7CiAgICAgIGZvciAodCA9PT0gdm9pZCAwICYmIHYoInB0ciBzaG91bGQgbm90IGJlIHVuZGVmaW5lZCIpOyBuLmlhOyApCiAgICAgICAgdCA9IG4ucWEodCksIG4gPSBuLmlhOwogICAgICByZXR1cm4gZm5bdF07CiAgICB9CiAgICBmdW5jdGlvbiBfbihuLCB0KSB7CiAgICAgIHJldHVybiB0LmZhICYmIHQuZGEgfHwgZ24oIm1ha2VDbGFzc0hhbmRsZSByZXF1aXJlcyBwdHIgYW5kIHB0clR5cGUiKSwgISF0LmhhICE9ICEhdC5nYSAmJiBnbigiQm90aCBzbWFydFB0clR5cGUgYW5kIHNtYXJ0UHRyIG11c3QgYmUgc3BlY2lmaWVkIiksIHQuY291bnQgPSB7IHZhbHVlOiAxIH0sIHVuKE9iamVjdC5jcmVhdGUobiwgeyBBOiB7IHZhbHVlOiB0IH0gfSkpOwogICAgfQogICAgZnVuY3Rpb24geihuLCB0LCByLCBpKSB7CiAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMuZWEgPSB0LCB0aGlzLnVhID0gciwgdGhpcy5yYSA9IGksIHRoaXMuc2EgPSAhMSwgdGhpcy5uYSA9IHRoaXMuSWEgPSB0aGlzLkhhID0gdGhpcy53YSA9IHRoaXMuUGEgPSB0aGlzLkdhID0gdm9pZCAwLCB0LmlhICE9PSB2b2lkIDAgPyB0aGlzLnRvV2lyZVR5cGUgPSBxdCA6ICh0aGlzLnRvV2lyZVR5cGUgPSBpID8gUXQgOiBuZSwgdGhpcy5rYSA9IG51bGwpOwogICAgfQogICAgZnVuY3Rpb24gbXQobiwgdCwgcikgewogICAgICBlLmhhc093blByb3BlcnR5KG4pIHx8IGduKCJSZXBsYWNpbmcgbm9uZXhpc3RhbnQgcHVibGljIHN5bWJvbCIpLCBlW25dLmphICE9PSB2b2lkIDAgJiYgciAhPT0gdm9pZCAwID8gZVtuXS5qYVtyXSA9IHQgOiAoZVtuXSA9IHQsIGVbbl0ueWEgPSByKTsKICAgIH0KICAgIGZ1bmN0aW9uIFYobiwgdCkgewogICAgICBuID0gVyhuKTsKICAgICAgdmFyIHIgPSBGbihuLCB0KTsKICAgICAgcmV0dXJuIHR5cGVvZiByICE9ICJmdW5jdGlvbiIgJiYgdigidW5rbm93biBmdW5jdGlvbiBwb2ludGVyIHdpdGggc2lnbmF0dXJlICIgKyBuICsgIjogIiArIHQpLCByOwogICAgfQogICAgdmFyIHZ0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gZ3QobikgewogICAgICBuID0gYnQobik7CiAgICAgIHZhciB0ID0gVyhuKTsKICAgICAgcmV0dXJuIEQobiksIHQ7CiAgICB9CiAgICBmdW5jdGlvbiBkbihuLCB0KSB7CiAgICAgIGZ1bmN0aW9uIHIocykgewogICAgICAgIGFbc10gfHwgSltzXSB8fCAodm5bc10gPyB2bltzXS5mb3JFYWNoKHIpIDogKGkucHVzaChzKSwgYVtzXSA9ICEwKSk7CiAgICAgIH0KICAgICAgdmFyIGkgPSBbXSwgYSA9IHt9OwogICAgICB0aHJvdyB0LmZvckVhY2gociksIG5ldyB2dChuICsgIjogIiArIGkubWFwKGd0KS5qb2luKFsiLCAiXSkpOwogICAgfQogICAgZnVuY3Rpb24gd3QobiwgdCkgewogICAgICBmb3IgKHZhciByID0gW10sIGkgPSAwOyBpIDwgbjsgaSsrKQogICAgICAgIHIucHVzaChPWyh0ID4+IDIpICsgaV0pOwogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIENuKG4pIHsKICAgICAgZm9yICg7IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4ucG9wKCk7CiAgICAgICAgbi5wb3AoKSh0KTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gQXQobiwgdCwgcikgewogICAgICByZXR1cm4gbiBpbnN0YW5jZW9mIE9iamVjdCB8fCB2KHIgKyAnIHdpdGggaW52YWxpZCAidGhpcyI6ICcgKyBuKSwgbiBpbnN0YW5jZW9mIHQuZWEuY29uc3RydWN0b3IgfHwgdihyICsgJyBpbmNvbXBhdGlibGUgd2l0aCAidGhpcyIgb2YgdHlwZSAnICsgbi5jb25zdHJ1Y3Rvci5uYW1lKSwgbi5BLmRhIHx8IHYoImNhbm5vdCBjYWxsIGVtc2NyaXB0ZW4gYmluZGluZyBtZXRob2QgIiArIHIgKyAiIG9uIGRlbGV0ZWQgb2JqZWN0IiksIHduKG4uQS5kYSwgbi5BLmZhLmVhLCB0LmVhKTsKICAgIH0KICAgIHZhciB6biA9IFtdLCBJID0gW3t9LCB7IHZhbHVlOiB2b2lkIDAgfSwgeyB2YWx1ZTogbnVsbCB9LCB7IHZhbHVlOiAhMCB9LCB7IHZhbHVlOiAhMSB9XTsKICAgIGZ1bmN0aW9uIERuKG4pIHsKICAgICAgNCA8IG4gJiYgLS1JW25dLkphID09PSAwICYmIChJW25dID0gdm9pZCAwLCB6bi5wdXNoKG4pKTsKICAgIH0KICAgIGZ1bmN0aW9uIGVuKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSB2b2lkIDA6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIG51bGw6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlICEwOgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgY2FzZSAhMToKICAgICAgICAgIHJldHVybiA0OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB2YXIgdCA9IHpuLmxlbmd0aCA/IHpuLnBvcCgpIDogSS5sZW5ndGg7CiAgICAgICAgICByZXR1cm4gSVt0XSA9IHsgSmE6IDEsIHZhbHVlOiBuIH0sIHQ7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHJuKG4pIHsKICAgICAgaWYgKG4gPT09IG51bGwpCiAgICAgICAgcmV0dXJuICJudWxsIjsKICAgICAgdmFyIHQgPSB0eXBlb2YgbjsKICAgICAgcmV0dXJuIHQgPT09ICJvYmplY3QiIHx8IHQgPT09ICJhcnJheSIgfHwgdCA9PT0gImZ1bmN0aW9uIiA/IG4udG9TdHJpbmcoKSA6ICIiICsgbjsKICAgIH0KICAgIGZ1bmN0aW9uIGVlKG4sIHQpIHsKICAgICAgc3dpdGNoICh0KSB7CiAgICAgICAgY2FzZSAyOgogICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHIpIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKHFuW3IgPj4gMl0pOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDM6CiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24ocikgewogICAgICAgICAgICByZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUobnRbciA+PiAzXSk7CiAgICAgICAgICB9OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGZsb2F0IHR5cGU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gcmUobikgewogICAgICB2YXIgdCA9IEZ1bmN0aW9uOwogICAgICBpZiAoISh0IGluc3RhbmNlb2YgRnVuY3Rpb24pKQogICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIm5ld18gY2FsbGVkIHdpdGggY29uc3RydWN0b3IgdHlwZSAiICsgdHlwZW9mIHQgKyAiIHdoaWNoIGlzIG5vdCBhIGZ1bmN0aW9uIik7CiAgICAgIHZhciByID0gam4odC5uYW1lIHx8ICJ1bmtub3duRnVuY3Rpb25OYW1lIiwgZnVuY3Rpb24oKSB7CiAgICAgIH0pOwogICAgICByZXR1cm4gci5wcm90b3R5cGUgPSB0LnByb3RvdHlwZSwgciA9IG5ldyByKCksIG4gPSB0LmFwcGx5KHIsIG4pLCBuIGluc3RhbmNlb2YgT2JqZWN0ID8gbiA6IHI7CiAgICB9CiAgICBmdW5jdGlvbiBpZShuLCB0LCByKSB7CiAgICAgIHN3aXRjaCAodCkgewogICAgICAgIGNhc2UgMDoKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gWVtpXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBGW2ldOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICByZXR1cm4gciA/IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIFFbaSA+PiAxXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBwbltpID4+IDFdOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gciA/IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIE9baSA+PiAyXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBVW2kgPj4gMl07CiAgICAgICAgICB9OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGludGVnZXIgdHlwZTogIiArIG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBCbihuKSB7CiAgICAgIHJldHVybiBuIHx8IHYoIkNhbm5vdCB1c2UgZGVsZXRlZCB2YWwuIGhhbmRsZSA9ICIgKyBuKSwgSVtuXS52YWx1ZTsKICAgIH0KICAgIGZ1bmN0aW9uIF90KG4sIHQpIHsKICAgICAgdmFyIHIgPSBKW25dOwogICAgICByZXR1cm4gciA9PT0gdm9pZCAwICYmIHYodCArICIgaGFzIHVua25vd24gdHlwZSAiICsgZ3QobikpLCByOwogICAgfQogICAgdmFyIGFlID0ge30sIEN0ID0ge307CiAgICBmdW5jdGlvbiBFdCgpIHsKICAgICAgaWYgKCFWbikgewogICAgICAgIHZhciBuID0geyBVU0VSOiAid2ViX3VzZXIiLCBMT0dOQU1FOiAid2ViX3VzZXIiLCBQQVRIOiAiLyIsIFBXRDogIi8iLCBIT01FOiAiL2hvbWUvd2ViX3VzZXIiLCBMQU5HOiAodHlwZW9mIG5hdmlnYXRvciA9PSAib2JqZWN0IiAmJiBuYXZpZ2F0b3IubGFuZ3VhZ2VzICYmIG5hdmlnYXRvci5sYW5ndWFnZXNbMF0gfHwgIkMiKS5yZXBsYWNlKCItIiwgIl8iKSArICIuVVRGLTgiLCBfOiBUIHx8ICIuL3RoaXMucHJvZ3JhbSIgfSwgdDsKICAgICAgICBmb3IgKHQgaW4gQ3QpCiAgICAgICAgICBuW3RdID0gQ3RbdF07CiAgICAgICAgdmFyIHIgPSBbXTsKICAgICAgICBmb3IgKHQgaW4gbikKICAgICAgICAgIHIucHVzaCh0ICsgIj0iICsgblt0XSk7CiAgICAgICAgVm4gPSByOwogICAgICB9CiAgICAgIHJldHVybiBWbjsKICAgIH0KICAgIHZhciBWbiwgVHQgPSBbXTsKICAgIGZ1bmN0aW9uIE10KG4pIHsKICAgICAgdmFyIHQgPSB7fSwgcjsKICAgICAgZm9yIChyIGluIG4pCiAgICAgICAgKGZ1bmN0aW9uKGkpIHsKICAgICAgICAgIHZhciBhID0gbltpXTsKICAgICAgICAgIHRbaV0gPSB0eXBlb2YgYSA9PSAiZnVuY3Rpb24iID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIFR0LnB1c2goaSk7CiAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgcmV0dXJuIGEuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgICAgICAgICAgfSBmaW5hbGx5IHsKICAgICAgICAgICAgICBpZiAoa24pCiAgICAgICAgICAgICAgICByZXR1cm47CiAgICAgICAgICAgICAgdmFyIHMgPSBUdC5wb3AoKTsKICAgICAgICAgICAgICBYbihzID09PSBpKTsKICAgICAgICAgICAgfQogICAgICAgICAgfSA6IGE7CiAgICAgICAgfSkocik7CiAgICAgIHJldHVybiB0OwogICAgfQogICAgZm9yICh2YXIgUHQgPSBBcnJheSgyNTYpLCBFbiA9IDA7IDI1NiA+IEVuOyArK0VuKQogICAgICBQdFtFbl0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKEVuKTsKICAgIGx0ID0gUHQsIG5uID0gZS5CaW5kaW5nRXJyb3IgPSBMbigiQmluZGluZ0Vycm9yIiksIGN0ID0gZS5JbnRlcm5hbEVycm9yID0gTG4oIkludGVybmFsRXJyb3IiKSwgQi5wcm90b3R5cGUuaXNBbGlhc09mID0gZnVuY3Rpb24obikgewogICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQiAmJiBuIGluc3RhbmNlb2YgQikpCiAgICAgICAgcmV0dXJuICExOwogICAgICB2YXIgdCA9IHRoaXMuQS5mYS5lYSwgciA9IHRoaXMuQS5kYSwgaSA9IG4uQS5mYS5lYTsKICAgICAgZm9yIChuID0gbi5BLmRhOyB0LmlhOyApCiAgICAgICAgciA9IHQucWEociksIHQgPSB0LmlhOwogICAgICBmb3IgKDsgaS5pYTsgKQogICAgICAgIG4gPSBpLnFhKG4pLCBpID0gaS5pYTsKICAgICAgcmV0dXJuIHQgPT09IGkgJiYgciA9PT0gbjsKICAgIH0sIEIucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7CiAgICAgIGlmICh0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5wYSkKICAgICAgICByZXR1cm4gdGhpcy5BLmNvdW50LnZhbHVlICs9IDEsIHRoaXM7CiAgICAgIHZhciBuID0gdW4oT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcyksIHsgQTogeyB2YWx1ZTogSnQodGhpcy5BKSB9IH0pKTsKICAgICAgcmV0dXJuIG4uQS5jb3VudC52YWx1ZSArPSAxLCBuLkEub2EgPSAhMSwgbjsKICAgIH0sIEIucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uKCkgewogICAgICB0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5vYSAmJiAhdGhpcy5BLnBhICYmIHYoIk9iamVjdCBhbHJlYWR5IHNjaGVkdWxlZCBmb3IgZGVsZXRpb24iKSwgZnQodGhpcyksIGR0KHRoaXMuQSksIHRoaXMuQS5wYSB8fCAodGhpcy5BLmdhID0gdm9pZCAwLCB0aGlzLkEuZGEgPSB2b2lkIDApOwogICAgfSwgQi5wcm90b3R5cGUuaXNEZWxldGVkID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAhdGhpcy5BLmRhOwogICAgfSwgQi5wcm90b3R5cGUuZGVsZXRlTGF0ZXIgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIHRoaXMuQS5kYSB8fCBObih0aGlzKSwgdGhpcy5BLm9hICYmICF0aGlzLkEucGEgJiYgdigiT2JqZWN0IGFscmVhZHkgc2NoZWR1bGVkIGZvciBkZWxldGlvbiIpLCBjbi5wdXNoKHRoaXMpLCBjbi5sZW5ndGggPT09IDEgJiYgbG4gJiYgbG4oSG4pLCB0aGlzLkEub2EgPSAhMCwgdGhpczsKICAgIH0sIHoucHJvdG90eXBlLkRhID0gZnVuY3Rpb24obikgewogICAgICByZXR1cm4gdGhpcy53YSAmJiAobiA9IHRoaXMud2EobikpLCBuOwogICAgfSwgei5wcm90b3R5cGUudmEgPSBmdW5jdGlvbihuKSB7CiAgICAgIHRoaXMubmEgJiYgdGhpcy5uYShuKTsKICAgIH0sIHoucHJvdG90eXBlLmFyZ1BhY2tBZHZhbmNlID0gOCwgei5wcm90b3R5cGUucmVhZFZhbHVlRnJvbVBvaW50ZXIgPSBBbiwgei5wcm90b3R5cGUuZGVsZXRlT2JqZWN0ID0gZnVuY3Rpb24obikgewogICAgICBuICE9PSBudWxsICYmIG4uZGVsZXRlKCk7CiAgICB9LCB6LnByb3RvdHlwZS5mcm9tV2lyZVR5cGUgPSBmdW5jdGlvbihuKSB7CiAgICAgIGZ1bmN0aW9uIHQoKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuc2EgPyBfbih0aGlzLmVhLm1hLCB7IGZhOiB0aGlzLkdhLCBkYTogciwgaGE6IHRoaXMsIGdhOiBuIH0pIDogX24odGhpcy5lYS5tYSwgeyBmYTogdGhpcywgZGE6IG4gfSk7CiAgICAgIH0KICAgICAgdmFyIHIgPSB0aGlzLkRhKG4pOwogICAgICBpZiAoIXIpCiAgICAgICAgcmV0dXJuIHRoaXMudmEobiksIG51bGw7CiAgICAgIHZhciBpID0gdGUodGhpcy5lYSwgcik7CiAgICAgIGlmIChpICE9PSB2b2lkIDApCiAgICAgICAgcmV0dXJuIGkuQS5jb3VudC52YWx1ZSA9PT0gMCA/IChpLkEuZGEgPSByLCBpLkEuZ2EgPSBuLCBpLmNsb25lKCkpIDogKGkgPSBpLmNsb25lKCksIHRoaXMudmEobiksIGkpOwogICAgICBpZiAoaSA9IHRoaXMuZWEuQ2EociksIGkgPSBodFtpXSwgIWkpCiAgICAgICAgcmV0dXJuIHQuY2FsbCh0aGlzKTsKICAgICAgaSA9IHRoaXMucmEgPyBpLnphIDogaS5wb2ludGVyVHlwZTsKICAgICAgdmFyIGEgPSB5dChyLCB0aGlzLmVhLCBpLmVhKTsKICAgICAgcmV0dXJuIGEgPT09IG51bGwgPyB0LmNhbGwodGhpcykgOiB0aGlzLnNhID8gX24oaS5lYS5tYSwgeyBmYTogaSwgZGE6IGEsIGhhOiB0aGlzLCBnYTogbiB9KSA6IF9uKAogICAgICAgIGkuZWEubWEsCiAgICAgICAgeyBmYTogaSwgZGE6IGEgfQogICAgICApOwogICAgfSwgZS5nZXRJbmhlcml0ZWRJbnN0YW5jZUNvdW50ID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhmbikubGVuZ3RoOwogICAgfSwgZS5nZXRMaXZlSW5oZXJpdGVkSW5zdGFuY2VzID0gZnVuY3Rpb24oKSB7CiAgICAgIHZhciBuID0gW10sIHQ7CiAgICAgIGZvciAodCBpbiBmbikKICAgICAgICBmbi5oYXNPd25Qcm9wZXJ0eSh0KSAmJiBuLnB1c2goZm5bdF0pOwogICAgICByZXR1cm4gbjsKICAgIH0sIGUuZmx1c2hQZW5kaW5nRGVsZXRlcyA9IEhuLCBlLnNldERlbGF5RnVuY3Rpb24gPSBmdW5jdGlvbihuKSB7CiAgICAgIGxuID0gbiwgY24ubGVuZ3RoICYmIGxuICYmIGxuKEhuKTsKICAgIH0sIHZ0ID0gZS5VbmJvdW5kVHlwZUVycm9yID0gTG4oIlVuYm91bmRUeXBlRXJyb3IiKSwgZS5jb3VudF9lbXZhbF9oYW5kbGVzID0gZnVuY3Rpb24oKSB7CiAgICAgIGZvciAodmFyIG4gPSAwLCB0ID0gNTsgdCA8IEkubGVuZ3RoOyArK3QpCiAgICAgICAgSVt0XSAhPT0gdm9pZCAwICYmICsrbjsKICAgICAgcmV0dXJuIG47CiAgICB9LCBlLmdldF9maXJzdF9lbXZhbCA9IGZ1bmN0aW9uKCkgewogICAgICBmb3IgKHZhciBuID0gNTsgbiA8IEkubGVuZ3RoOyArK24pCiAgICAgICAgaWYgKElbbl0gIT09IHZvaWQgMCkKICAgICAgICAgIHJldHVybiBJW25dOwogICAgICByZXR1cm4gbnVsbDsKICAgIH0sIGl0LnB1c2goeyBCYTogZnVuY3Rpb24oKSB7CiAgICAgIFN0KCk7CiAgICB9IH0pOwogICAgdmFyIG9lID0gewogICAgICB6OiBmdW5jdGlvbihuKSB7CiAgICAgICAgcmV0dXJuIFRuKG4gKyAxNikgKyAxNjsKICAgICAgfSwKICAgICAgdTogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIHRocm93IG5ldyAkdChuKS5GYSh0LCByKSwgInVuY2F1Z2h0X2V4Y2VwdGlvbiIgaW4gbW4gPyBtbi54YSsrIDogbW4ueGEgPSAxLCBuOwogICAgICB9LAogICAgICB3OiBmdW5jdGlvbihuLCB0LCByLCBpLCBhKSB7CiAgICAgICAgdmFyIHMgPSB4bihyKTsKICAgICAgICB0ID0gVyh0KSwgSChuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oYykgewogICAgICAgICAgcmV0dXJuICEhYzsKICAgICAgICB9LCB0b1dpcmVUeXBlOiBmdW5jdGlvbihjLCBsKSB7CiAgICAgICAgICByZXR1cm4gbCA/IGkgOiBhOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogZnVuY3Rpb24oYykgewogICAgICAgICAgaWYgKHIgPT09IDEpCiAgICAgICAgICAgIHZhciBsID0gWTsKICAgICAgICAgIGVsc2UgaWYgKHIgPT09IDIpCiAgICAgICAgICAgIGwgPSBROwogICAgICAgICAgZWxzZSBpZiAociA9PT0gNCkKICAgICAgICAgICAgbCA9IE87CiAgICAgICAgICBlbHNlCiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gYm9vbGVhbiB0eXBlIHNpemU6ICIgKyB0KTsKICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShsW2MgPj4gc10pOwogICAgICAgIH0sIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBpOiBmdW5jdGlvbihuLCB0LCByLCBpLCBhLCBzLCBjLCBsLCBwLCBmLCBkLCBoLCBBKSB7CiAgICAgICAgZCA9IFcoZCksIHMgPSBWKGEsIHMpLCBsICYmIChsID0gVihjLCBsKSksIGYgJiYgKGYgPSBWKHAsIGYpKSwgQSA9IFYoaCwgQSk7CiAgICAgICAgdmFyIFAgPSBJbihkKTsKICAgICAgICBwdChQLCBmdW5jdGlvbigpIHsKICAgICAgICAgIGRuKCJDYW5ub3QgY29uc3RydWN0ICIgKyBkICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIFtpXSk7CiAgICAgICAgfSksIHRuKFtuLCB0LCByXSwgaSA/IFtpXSA6IFtdLCBmdW5jdGlvbih5KSB7CiAgICAgICAgICBpZiAoeSA9IHlbMF0sIGkpCiAgICAgICAgICAgIHZhciBOID0geS5lYSwgYiA9IE4ubWE7CiAgICAgICAgICBlbHNlCiAgICAgICAgICAgIGIgPSBCLnByb3RvdHlwZTsKICAgICAgICAgIHkgPSBqbihQLCBmdW5jdGlvbigpIHsKICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSAhPT0gaykKICAgICAgICAgICAgICB0aHJvdyBuZXcgbm4oIlVzZSAnbmV3JyB0byBjb25zdHJ1Y3QgIiArIGQpOwogICAgICAgICAgICBpZiAoTC5sYSA9PT0gdm9pZCAwKQogICAgICAgICAgICAgIHRocm93IG5ldyBubihkICsgIiBoYXMgbm8gYWNjZXNzaWJsZSBjb25zdHJ1Y3RvciIpOwogICAgICAgICAgICB2YXIgT3QgPSBMLmxhW2FyZ3VtZW50cy5sZW5ndGhdOwogICAgICAgICAgICBpZiAoT3QgPT09IHZvaWQgMCkKICAgICAgICAgICAgICB0aHJvdyBuZXcgbm4oIlRyaWVkIHRvIGludm9rZSBjdG9yIG9mICIgKyBkICsgIiB3aXRoIGludmFsaWQgbnVtYmVyIG9mIHBhcmFtZXRlcnMgKCIgKyBhcmd1bWVudHMubGVuZ3RoICsgIikgLSBleHBlY3RlZCAoIiArIE9iamVjdC5rZXlzKEwubGEpLnRvU3RyaW5nKCkgKyAiKSBwYXJhbWV0ZXJzIGluc3RlYWQhIik7CiAgICAgICAgICAgIHJldHVybiBPdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgICAgICAgfSk7CiAgICAgICAgICB2YXIgayA9IE9iamVjdC5jcmVhdGUoYiwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogeSB9IH0pOwogICAgICAgICAgeS5wcm90b3R5cGUgPSBrOwogICAgICAgICAgdmFyIEwgPSBuZXcgS3QoZCwgeSwgaywgQSwgTiwgcywgbCwgZik7CiAgICAgICAgICBOID0gbmV3IHooZCwgTCwgITAsICExKSwgYiA9IG5ldyB6KGQgKyAiKiIsIEwsICExLCAhMSk7CiAgICAgICAgICB2YXIgaG4gPSBuZXcgeihkICsgIiBjb25zdCoiLCBMLCAhMSwgITApOwogICAgICAgICAgcmV0dXJuIGh0W25dID0geyBwb2ludGVyVHlwZTogYiwgemE6IGhuIH0sIG10KFAsIHkpLCBbTiwgYiwgaG5dOwogICAgICAgIH0pOwogICAgICB9LAogICAgICBoOiBmdW5jdGlvbihuLCB0LCByLCBpLCBhLCBzKSB7CiAgICAgICAgWG4oMCA8IHQpOwogICAgICAgIHZhciBjID0gd3QodCwgcik7CiAgICAgICAgYSA9IFYoaSwgYSk7CiAgICAgICAgdmFyIGwgPSBbc10sIHAgPSBbXTsKICAgICAgICB0bihbXSwgW25dLCBmdW5jdGlvbihmKSB7CiAgICAgICAgICBmID0gZlswXTsKICAgICAgICAgIHZhciBkID0gImNvbnN0cnVjdG9yICIgKyBmLm5hbWU7CiAgICAgICAgICBpZiAoZi5lYS5sYSA9PT0gdm9pZCAwICYmIChmLmVhLmxhID0gW10pLCBmLmVhLmxhW3QgLSAxXSAhPT0gdm9pZCAwKQogICAgICAgICAgICB0aHJvdyBuZXcgbm4oIkNhbm5vdCByZWdpc3RlciBtdWx0aXBsZSBjb25zdHJ1Y3RvcnMgd2l0aCBpZGVudGljYWwgbnVtYmVyIG9mIHBhcmFtZXRlcnMgKCIgKyAodCAtIDEpICsgIikgZm9yIGNsYXNzICciICsgZi5uYW1lICsgIichIE92ZXJsb2FkIHJlc29sdXRpb24gaXMgY3VycmVudGx5IG9ubHkgcGVyZm9ybWVkIHVzaW5nIHRoZSBwYXJhbWV0ZXIgY291bnQsIG5vdCBhY3R1YWwgdHlwZSBpbmZvISIpOwogICAgICAgICAgcmV0dXJuIGYuZWEubGFbdCAtIDFdID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGRuKCJDYW5ub3QgY29uc3RydWN0ICIgKyBmLm5hbWUgKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgYyk7CiAgICAgICAgICB9LCB0bihbXSwgYywgZnVuY3Rpb24oaCkgewogICAgICAgICAgICByZXR1cm4gZi5lYS5sYVt0IC0gMV0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICBhcmd1bWVudHMubGVuZ3RoICE9PSB0IC0gMSAmJiB2KGQgKyAiIGNhbGxlZCB3aXRoICIgKyBhcmd1bWVudHMubGVuZ3RoICsgIiBhcmd1bWVudHMsIGV4cGVjdGVkICIgKyAodCAtIDEpKSwgcC5sZW5ndGggPSAwLCBsLmxlbmd0aCA9IHQ7CiAgICAgICAgICAgICAgZm9yICh2YXIgQSA9IDE7IEEgPCB0OyArK0EpCiAgICAgICAgICAgICAgICBsW0FdID0gaFtBXS50b1dpcmVUeXBlKAogICAgICAgICAgICAgICAgICBwLAogICAgICAgICAgICAgICAgICBhcmd1bWVudHNbQSAtIDFdCiAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgIHJldHVybiBBID0gYS5hcHBseShudWxsLCBsKSwgQ24ocCksIGhbMF0uZnJvbVdpcmVUeXBlKEEpOwogICAgICAgICAgICB9LCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgYjogZnVuY3Rpb24obiwgdCwgciwgaSwgYSwgcywgYywgbCwgcCwgZikgewogICAgICAgIHQgPSBXKHQpLCBhID0gVihpLCBhKSwgdG4oW10sIFtuXSwgZnVuY3Rpb24oZCkgewogICAgICAgICAgZCA9IGRbMF07CiAgICAgICAgICB2YXIgaCA9IGQubmFtZSArICIuIiArIHQsIEEgPSB7IGdldDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGRuKCJDYW5ub3QgYWNjZXNzICIgKyBoICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIFtyLCBjXSk7CiAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCB9OwogICAgICAgICAgcmV0dXJuIHAgPyBBLnNldCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBkbigiQ2Fubm90IGFjY2VzcyAiICsgaCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbciwgY10pOwogICAgICAgICAgfSA6IEEuc2V0ID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHYoaCArICIgaXMgYSByZWFkLW9ubHkgcHJvcGVydHkiKTsKICAgICAgICAgIH0sIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkLmVhLm1hLCB0LCBBKSwgdG4oW10sIHAgPyBbciwgY10gOiBbcl0sIGZ1bmN0aW9uKFApIHsKICAgICAgICAgICAgdmFyIHkgPSBQWzBdLCBOID0geyBnZXQ6IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIHZhciBrID0gQXQodGhpcywgZCwgaCArICIgZ2V0dGVyIik7CiAgICAgICAgICAgICAgcmV0dXJuIHkuZnJvbVdpcmVUeXBlKGEocywgaykpOwogICAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCB9OwogICAgICAgICAgICBpZiAocCkgewogICAgICAgICAgICAgIHAgPSBWKGwsIHApOwogICAgICAgICAgICAgIHZhciBiID0gUFsxXTsKICAgICAgICAgICAgICBOLnNldCA9IGZ1bmN0aW9uKGspIHsKICAgICAgICAgICAgICAgIHZhciBMID0gQXQodGhpcywgZCwgaCArICIgc2V0dGVyIiksIGhuID0gW107CiAgICAgICAgICAgICAgICBwKGYsIEwsIGIudG9XaXJlVHlwZShobiwgaykpLCBDbihobik7CiAgICAgICAgICAgICAgfTsKICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGQuZWEubWEsIHQsIE4pLCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgdjogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHQgPSBXKHQpLCBIKG4sIHsgbmFtZTogdCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihyKSB7CiAgICAgICAgICB2YXIgaSA9IElbcl0udmFsdWU7CiAgICAgICAgICByZXR1cm4gRG4ociksIGk7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24ociwgaSkgewogICAgICAgICAgcmV0dXJuIGVuKGkpOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBtOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgciA9IHhuKHIpLCB0ID0gVyh0KSwgSChuLCB7CiAgICAgICAgICBuYW1lOiB0LAogICAgICAgICAgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBpOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIGEpIHsKICAgICAgICAgICAgaWYgKHR5cGVvZiBhICE9ICJudW1iZXIiICYmIHR5cGVvZiBhICE9ICJib29sZWFuIikKICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCAiJyArIHJuKGEpICsgJyIgdG8gJyArIHRoaXMubmFtZSk7CiAgICAgICAgICAgIHJldHVybiBhOwogICAgICAgICAgfSwKICAgICAgICAgIGFyZ1BhY2tBZHZhbmNlOiA4LAogICAgICAgICAgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IGVlKHQsIHIpLAogICAgICAgICAga2E6IG51bGwKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgYzogZnVuY3Rpb24obiwgdCwgciwgaSwgYSwgcykgewogICAgICAgIHZhciBjID0gd3QodCwgcik7CiAgICAgICAgbiA9IFcobiksIGEgPSBWKGksIGEpLCBwdChuLCBmdW5jdGlvbigpIHsKICAgICAgICAgIGRuKCJDYW5ub3QgY2FsbCAiICsgbiArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBjKTsKICAgICAgICB9LCB0IC0gMSksIHRuKFtdLCBjLCBmdW5jdGlvbihsKSB7CiAgICAgICAgICB2YXIgcCA9IG4sIGYgPSBuOwogICAgICAgICAgbCA9IFtsWzBdLCBudWxsXS5jb25jYXQobC5zbGljZSgxKSk7CiAgICAgICAgICB2YXIgZCA9IGEsIGggPSBsLmxlbmd0aDsKICAgICAgICAgIDIgPiBoICYmIHYoImFyZ1R5cGVzIGFycmF5IHNpemUgbWlzbWF0Y2ghIE11c3QgYXQgbGVhc3QgZ2V0IHJldHVybiB2YWx1ZSBhbmQgJ3RoaXMnIHR5cGVzISIpOwogICAgICAgICAgZm9yICh2YXIgQSA9IGxbMV0gIT09IG51bGwgJiYgITEsIFAgPSAhMSwgeSA9IDE7IHkgPCBsLmxlbmd0aDsgKyt5KQogICAgICAgICAgICBpZiAobFt5XSAhPT0gbnVsbCAmJiBsW3ldLmthID09PSB2b2lkIDApIHsKICAgICAgICAgICAgICBQID0gITA7CiAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgIH0KICAgICAgICAgIHZhciBOID0gbFswXS5uYW1lICE9PSAidm9pZCIsIGIgPSAiIiwgayA9ICIiOwogICAgICAgICAgZm9yICh5ID0gMDsgeSA8IGggLSAyOyArK3kpCiAgICAgICAgICAgIGIgKz0gKHkgIT09IDAgPyAiLCAiIDogIiIpICsgImFyZyIgKyB5LCBrICs9ICh5ICE9PSAwID8gIiwgIiA6ICIiKSArICJhcmciICsgeSArICJXaXJlZCI7CiAgICAgICAgICBmID0gInJldHVybiBmdW5jdGlvbiAiICsgSW4oZikgKyAiKCIgKyBiICsgYCkgewppZiAoYXJndW1lbnRzLmxlbmd0aCAhPT0gYCArIChoIC0gMikgKyBgKSB7CnRocm93QmluZGluZ0Vycm9yKCdmdW5jdGlvbiBgICsgZiArICIgY2FsbGVkIHdpdGggJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cywgZXhwZWN0ZWQgIiArIChoIC0gMikgKyBgIGFyZ3MhJyk7Cn0KYCwgUCAmJiAoZiArPSBgdmFyIGRlc3RydWN0b3JzID0gW107CmApOwogICAgICAgICAgdmFyIEwgPSBQID8gImRlc3RydWN0b3JzIiA6ICJudWxsIjsKICAgICAgICAgIGZvciAoYiA9ICJ0aHJvd0JpbmRpbmdFcnJvciBpbnZva2VyIGZuIHJ1bkRlc3RydWN0b3JzIHJldFR5cGUgY2xhc3NQYXJhbSIuc3BsaXQoIiAiKSwgZCA9IFt2LCBkLCBzLCBDbiwgbFswXSwgbFsxXV0sIEEgJiYgKGYgKz0gInZhciB0aGlzV2lyZWQgPSBjbGFzc1BhcmFtLnRvV2lyZVR5cGUoIiArIEwgKyBgLCB0aGlzKTsKYCksIHkgPSAwOyB5IDwgaCAtIDI7ICsreSkKICAgICAgICAgICAgZiArPSAidmFyIGFyZyIgKyB5ICsgIldpcmVkID0gYXJnVHlwZSIgKyB5ICsgIi50b1dpcmVUeXBlKCIgKyBMICsgIiwgYXJnIiArIHkgKyAiKTsgLy8gIiArIGxbeSArIDJdLm5hbWUgKyBgCmAsIGIucHVzaCgiYXJnVHlwZSIgKyB5KSwgZC5wdXNoKGxbeSArIDJdKTsKICAgICAgICAgIGlmIChBICYmIChrID0gInRoaXNXaXJlZCIgKyAoMCA8IGsubGVuZ3RoID8gIiwgIiA6ICIiKSArIGspLCBmICs9IChOID8gInZhciBydiA9ICIgOiAiIikgKyAiaW52b2tlcihmbiIgKyAoMCA8IGsubGVuZ3RoID8gIiwgIiA6ICIiKSArIGsgKyBgKTsKYCwgUCkKICAgICAgICAgICAgZiArPSBgcnVuRGVzdHJ1Y3RvcnMoZGVzdHJ1Y3RvcnMpOwpgOwogICAgICAgICAgZWxzZQogICAgICAgICAgICBmb3IgKHkgPSBBID8gMSA6IDI7IHkgPCBsLmxlbmd0aDsgKyt5KQogICAgICAgICAgICAgIGggPSB5ID09PSAxID8gInRoaXNXaXJlZCIgOiAiYXJnIiArICh5IC0gMikgKyAiV2lyZWQiLCBsW3ldLmthICE9PSBudWxsICYmIChmICs9IGggKyAiX2R0b3IoIiArIGggKyAiKTsgLy8gIiArIGxbeV0ubmFtZSArIGAKYCwgYi5wdXNoKGggKyAiX2R0b3IiKSwgZC5wdXNoKGxbeV0ua2EpKTsKICAgICAgICAgIHJldHVybiBOICYmIChmICs9IGB2YXIgcmV0ID0gcmV0VHlwZS5mcm9tV2lyZVR5cGUocnYpOwpyZXR1cm4gcmV0OwpgKSwgYi5wdXNoKGYgKyBgfQpgKSwgbCA9IHJlKGIpLmFwcGx5KG51bGwsIGQpLCBtdChwLCBsLCB0IC0gMSksIFtdOwogICAgICAgIH0pOwogICAgICB9LAogICAgICBlOiBmdW5jdGlvbihuLCB0LCByLCBpLCBhKSB7CiAgICAgICAgZnVuY3Rpb24gcyhmKSB7CiAgICAgICAgICByZXR1cm4gZjsKICAgICAgICB9CiAgICAgICAgdCA9IFcodCksIGEgPT09IC0xICYmIChhID0gNDI5NDk2NzI5NSk7CiAgICAgICAgdmFyIGMgPSB4bihyKTsKICAgICAgICBpZiAoaSA9PT0gMCkgewogICAgICAgICAgdmFyIGwgPSAzMiAtIDggKiByOwogICAgICAgICAgcyA9IGZ1bmN0aW9uKGYpIHsKICAgICAgICAgICAgcmV0dXJuIGYgPDwgbCA+Pj4gbDsKICAgICAgICAgIH07CiAgICAgICAgfQogICAgICAgIHZhciBwID0gdC5pbmRleE9mKCJ1bnNpZ25lZCIpICE9IC0xOwogICAgICAgIEgobiwgeyBuYW1lOiB0LCBmcm9tV2lyZVR5cGU6IHMsIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGYsIGQpIHsKICAgICAgICAgIGlmICh0eXBlb2YgZCAhPSAibnVtYmVyIiAmJiB0eXBlb2YgZCAhPSAiYm9vbGVhbiIpCiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0ICInICsgcm4oZCkgKyAnIiB0byAnICsgdGhpcy5uYW1lKTsKICAgICAgICAgIGlmIChkIDwgaSB8fCBkID4gYSkKICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUGFzc2luZyBhIG51bWJlciAiJyArIHJuKGQpICsgJyIgZnJvbSBKUyBzaWRlIHRvIEMvQysrIHNpZGUgdG8gYW4gYXJndW1lbnQgb2YgdHlwZSAiJyArIHQgKyAnIiwgd2hpY2ggaXMgb3V0c2lkZSB0aGUgdmFsaWQgcmFuZ2UgWycgKyBpICsgIiwgIiArIGEgKyAiXSEiKTsKICAgICAgICAgIHJldHVybiBwID8gZCA+Pj4gMCA6IGQgfCAwOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogaWUodCwgYywgaSAhPT0gMCksIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBkOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgZnVuY3Rpb24gaShzKSB7CiAgICAgICAgICBzID4+PSAyOwogICAgICAgICAgdmFyIGMgPSBVOwogICAgICAgICAgcmV0dXJuIG5ldyBhKEssIGNbcyArIDFdLCBjW3NdKTsKICAgICAgICB9CiAgICAgICAgdmFyIGEgPSBbSW50OEFycmF5LCBVaW50OEFycmF5LCBJbnQxNkFycmF5LCBVaW50MTZBcnJheSwgSW50MzJBcnJheSwgVWludDMyQXJyYXksIEZsb2F0MzJBcnJheSwgRmxvYXQ2NEFycmF5XVt0XTsKICAgICAgICByID0gVyhyKSwgSChuLCB7IG5hbWU6IHIsIGZyb21XaXJlVHlwZTogaSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBpIH0sIHsgRWE6ICEwIH0pOwogICAgICB9LAogICAgICBuOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdCA9IFcodCk7CiAgICAgICAgdmFyIHIgPSB0ID09PSAic3RkOjpzdHJpbmciOwogICAgICAgIEgobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICB2YXIgYSA9IFVbaSA+PiAyXTsKICAgICAgICAgICAgaWYgKHIpCiAgICAgICAgICAgICAgZm9yICh2YXIgcyA9IGkgKyA0LCBjID0gMDsgYyA8PSBhOyArK2MpIHsKICAgICAgICAgICAgICAgIHZhciBsID0gaSArIDQgKyBjOwogICAgICAgICAgICAgICAgaWYgKGMgPT0gYSB8fCBGW2xdID09IDApIHsKICAgICAgICAgICAgICAgICAgaWYgKHMpIHsKICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IHMsIGYgPSBGLCBkID0gcCArIChsIC0gcyk7CiAgICAgICAgICAgICAgICAgICAgZm9yIChzID0gcDsgZltzXSAmJiAhKHMgPj0gZCk7ICkKICAgICAgICAgICAgICAgICAgICAgICsrczsKICAgICAgICAgICAgICAgICAgICBpZiAoMTYgPCBzIC0gcCAmJiBmLnN1YmFycmF5ICYmIEtuKQogICAgICAgICAgICAgICAgICAgICAgcCA9IEtuLmRlY29kZShmLnN1YmFycmF5KHAsIHMpKTsKICAgICAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICAgIGZvciAoZCA9ICIiOyBwIDwgczsgKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoID0gZltwKytdOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAoaCAmIDEyOCkgewogICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBBID0gZltwKytdICYgNjM7CiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChoICYgMjI0KSA9PSAxOTIpCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGggJiAzMSkgPDwgNiB8IEEpOwogICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFAgPSBmW3ArK10gJiA2MzsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGggPSAoaCAmIDI0MCkgPT0gMjI0ID8gKGggJiAxNSkgPDwgMTIgfCBBIDw8IDYgfCBQIDogKGggJiA3KSA8PCAxOCB8IEEgPDwgMTIgfCBQIDw8IDYgfCBmW3ArK10gJiA2MywgNjU1MzYgPiBoID8gZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGgpIDogKGggLT0gNjU1MzYsIGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiB8IGggPj4gMTAsIDU2MzIwIHwgaCAmIDEwMjMpKTsKICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZQogICAgICAgICAgICAgICAgICAgICAgICAgIGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShoKTsKICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgIHAgPSBkOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgfSBlbHNlCiAgICAgICAgICAgICAgICAgICAgcCA9ICIiOwogICAgICAgICAgICAgICAgICBpZiAoeSA9PT0gdm9pZCAwKQogICAgICAgICAgICAgICAgICAgIHZhciB5ID0gcDsKICAgICAgICAgICAgICAgICAgZWxzZQogICAgICAgICAgICAgICAgICAgIHkgKz0gIlwwIiwgeSArPSBwOwogICAgICAgICAgICAgICAgICBzID0gbCArIDE7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICBmb3IgKHkgPSBBcnJheShhKSwgYyA9IDA7IGMgPCBhOyArK2MpCiAgICAgICAgICAgICAgICB5W2NdID0gU3RyaW5nLmZyb21DaGFyQ29kZShGW2kgKyA0ICsgY10pOwogICAgICAgICAgICAgIHkgPSB5LmpvaW4oIiIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiBEKGkpLCB5OwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIGEpIHsKICAgICAgICAgICAgYSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyICYmIChhID0gbmV3IFVpbnQ4QXJyYXkoYSkpOwogICAgICAgICAgICB2YXIgcyA9IHR5cGVvZiBhID09ICJzdHJpbmciOwogICAgICAgICAgICBzIHx8IGEgaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IGEgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSB8fCBhIGluc3RhbmNlb2YgSW50OEFycmF5IHx8IHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gc3RkOjpzdHJpbmciKTsKICAgICAgICAgICAgdmFyIGMgPSAociAmJiBzID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IDAsIGQgPSAwOyBkIDwgYS5sZW5ndGg7ICsrZCkgewogICAgICAgICAgICAgICAgdmFyIGggPSBhLmNoYXJDb2RlQXQoZCk7CiAgICAgICAgICAgICAgICA1NTI5NiA8PSBoICYmIDU3MzQzID49IGggJiYgKGggPSA2NTUzNiArICgoaCAmIDEwMjMpIDw8IDEwKSB8IGEuY2hhckNvZGVBdCgrK2QpICYgMTAyMyksIDEyNyA+PSBoID8gKytmIDogZiA9IDIwNDcgPj0gaCA/IGYgKyAyIDogNjU1MzUgPj0gaCA/IGYgKyAzIDogZiArIDQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHJldHVybiBmOwogICAgICAgICAgICB9IDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgcmV0dXJuIGEubGVuZ3RoOwogICAgICAgICAgICB9KSgpLCBsID0gVG4oNCArIGMgKyAxKTsKICAgICAgICAgICAgaWYgKFVbbCA+PiAyXSA9IGMsIHIgJiYgcykKICAgICAgICAgICAgICBOdChhLCBsICsgNCwgYyArIDEpOwogICAgICAgICAgICBlbHNlIGlmIChzKQogICAgICAgICAgICAgIGZvciAocyA9IDA7IHMgPCBjOyArK3MpIHsKICAgICAgICAgICAgICAgIHZhciBwID0gYS5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgICAgICAgMjU1IDwgcCAmJiAoRChsKSwgdigiU3RyaW5nIGhhcyBVVEYtMTYgY29kZSB1bml0cyB0aGF0IGRvIG5vdCBmaXQgaW4gOCBiaXRzIikpLCBGW2wgKyA0ICsgc10gPSBwOwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZQogICAgICAgICAgICAgIGZvciAocyA9IDA7IHMgPCBjOyArK3MpCiAgICAgICAgICAgICAgICBGW2wgKyA0ICsgc10gPSBhW3NdOwogICAgICAgICAgICByZXR1cm4gaSAhPT0gbnVsbCAmJiBpLnB1c2goRCwgbCksIGw7CiAgICAgICAgICB9LAogICAgICAgICAgYXJnUGFja0FkdmFuY2U6IDgsCiAgICAgICAgICByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sCiAgICAgICAgICBrYTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICBEKGkpOwogICAgICAgICAgfQogICAgICAgIH0pOwogICAgICB9LAogICAgICBqOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgaWYgKHIgPSBXKHIpLCB0ID09PSAyKQogICAgICAgICAgdmFyIGkgPSBVdCwgYSA9IEh0LCBzID0genQsIGMgPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgcmV0dXJuIHBuOwogICAgICAgICAgfSwgbCA9IDE7CiAgICAgICAgZWxzZQogICAgICAgICAgdCA9PT0gNCAmJiAoaSA9IER0LCBhID0gQnQsIHMgPSBWdCwgYyA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICByZXR1cm4gVTsKICAgICAgICAgIH0sIGwgPSAyKTsKICAgICAgICBIKG4sIHsgbmFtZTogciwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihwKSB7CiAgICAgICAgICBmb3IgKHZhciBmID0gVVtwID4+IDJdLCBkID0gYygpLCBoLCBBID0gcCArIDQsIFAgPSAwOyBQIDw9IGY7ICsrUCkgewogICAgICAgICAgICB2YXIgeSA9IHAgKyA0ICsgUCAqIHQ7CiAgICAgICAgICAgIChQID09IGYgfHwgZFt5ID4+IGxdID09IDApICYmIChBID0gaShBLCB5IC0gQSksIGggPT09IHZvaWQgMCA/IGggPSBBIDogKGggKz0gIlwwIiwgaCArPSBBKSwgQSA9IHkgKyB0KTsKICAgICAgICAgIH0KICAgICAgICAgIHJldHVybiBEKHApLCBoOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHAsIGYpIHsKICAgICAgICAgIHR5cGVvZiBmICE9ICJzdHJpbmciICYmIHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gQysrIHN0cmluZyB0eXBlICIgKyByKTsKICAgICAgICAgIHZhciBkID0gcyhmKSwgaCA9IFRuKDQgKyBkICsgdCk7CiAgICAgICAgICByZXR1cm4gVVtoID4+IDJdID0gZCA+PiBsLCBhKGYsIGggKyA0LCBkICsgdCksIHAgIT09IG51bGwgJiYgcC5wdXNoKEQsIGgpLCBoOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sIGthOiBmdW5jdGlvbihwKSB7CiAgICAgICAgICBEKHApOwogICAgICAgIH0gfSk7CiAgICAgIH0sCiAgICAgIHg6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gVyh0KSwgSChuLCB7IFFhOiAhMCwgbmFtZTogdCwgYXJnUGFja0FkdmFuY2U6IDAsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSB9KTsKICAgICAgfSwKICAgICAgazogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIG4gPSBCbihuKSwgdCA9IF90KHQsICJlbXZhbDo6YXMiKTsKICAgICAgICB2YXIgaSA9IFtdLCBhID0gZW4oaSk7CiAgICAgICAgcmV0dXJuIE9bciA+PiAyXSA9IGEsIHQudG9XaXJlVHlwZShpLCBuKTsKICAgICAgfSwKICAgICAgZzogRG4sCiAgICAgIGw6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICByZXR1cm4gbiA9IEJuKG4pLCB0ID0gQm4odCksIGVuKG5bdF0pOwogICAgICB9LAogICAgICBwOiBmdW5jdGlvbihuKSB7CiAgICAgICAgdmFyIHQgPSBhZVtuXTsKICAgICAgICByZXR1cm4gZW4odCA9PT0gdm9pZCAwID8gVyhuKSA6IHQpOwogICAgICB9LAogICAgICBvOiBmdW5jdGlvbihuKSB7CiAgICAgICAgQ24oSVtuXS52YWx1ZSksIERuKG4pOwogICAgICB9LAogICAgICB5OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgcmV0dXJuIG4gPSBfdChuLCAiX2VtdmFsX3Rha2VfdmFsdWUiKSwgbiA9IG4ucmVhZFZhbHVlRnJvbVBvaW50ZXIodCksIGVuKG4pOwogICAgICB9LAogICAgICBmOiBmdW5jdGlvbigpIHsKICAgICAgICBzbigpOwogICAgICB9LAogICAgICBxOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgRi5jb3B5V2l0aGluKG4sIHQsIHQgKyByKTsKICAgICAgfSwKICAgICAgcjogZnVuY3Rpb24obikgewogICAgICAgIG4gPj4+PSAwOwogICAgICAgIHZhciB0ID0gRi5sZW5ndGg7CiAgICAgICAgaWYgKDIxNDc0ODM2NDggPCBuKQogICAgICAgICAgcmV0dXJuICExOwogICAgICAgIGZvciAodmFyIHIgPSAxOyA0ID49IHI7IHIgKj0gMikgewogICAgICAgICAgdmFyIGkgPSB0ICogKDEgKyAwLjIgLyByKTsKICAgICAgICAgIGkgPSBNYXRoLm1pbihpLCBuICsgMTAwNjYzMjk2KSwgaSA9IE1hdGgubWF4KDE2Nzc3MjE2LCBuLCBpKSwgMCA8IGkgJSA2NTUzNiAmJiAoaSArPSA2NTUzNiAtIGkgJSA2NTUzNik7CiAgICAgICAgICBuOiB7CiAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgRy5ncm93KE1hdGgubWluKDIxNDc0ODM2NDgsIGkpIC0gSy5ieXRlTGVuZ3RoICsgNjU1MzUgPj4+IDE2KSwgdHQoRy5idWZmZXIpOwogICAgICAgICAgICAgIHZhciBhID0gMTsKICAgICAgICAgICAgICBicmVhayBuOwogICAgICAgICAgICB9IGNhdGNoIHsKICAgICAgICAgICAgfQogICAgICAgICAgICBhID0gdm9pZCAwOwogICAgICAgICAgfQogICAgICAgICAgaWYgKGEpCiAgICAgICAgICAgIHJldHVybiAhMDsKICAgICAgICB9CiAgICAgICAgcmV0dXJuICExOwogICAgICB9LAogICAgICBzOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSAwOwogICAgICAgIHJldHVybiBFdCgpLmZvckVhY2goZnVuY3Rpb24oaSwgYSkgewogICAgICAgICAgdmFyIHMgPSB0ICsgcjsKICAgICAgICAgIGZvciAoYSA9IE9bbiArIDQgKiBhID4+IDJdID0gcywgcyA9IDA7IHMgPCBpLmxlbmd0aDsgKytzKQogICAgICAgICAgICBZW2ErKyA+PiAwXSA9IGkuY2hhckNvZGVBdChzKTsKICAgICAgICAgIFlbYSA+PiAwXSA9IDAsIHIgKz0gaS5sZW5ndGggKyAxOwogICAgICAgIH0pLCAwOwogICAgICB9LAogICAgICB0OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSBFdCgpOwogICAgICAgIE9bbiA+PiAyXSA9IHIubGVuZ3RoOwogICAgICAgIHZhciBpID0gMDsKICAgICAgICByZXR1cm4gci5mb3JFYWNoKGZ1bmN0aW9uKGEpIHsKICAgICAgICAgIGkgKz0gYS5sZW5ndGggKyAxOwogICAgICAgIH0pLCBPW3QgPj4gMl0gPSBpLCAwOwogICAgICB9LAogICAgICBhOiBHCiAgICB9OwogICAgKGZ1bmN0aW9uKCkgewogICAgICBmdW5jdGlvbiBuKHMpIHsKICAgICAgICBzID0gcy5leHBvcnRzLCBzID0gTXQocyksIGUuYXNtID0gcywgWi0tLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKFopLCBaID09IDAgJiYgb24gJiYgKHMgPSBvbiwgb24gPSBudWxsLCBzKCkpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIHQocykgewogICAgICAgIG4ocy5pbnN0YW5jZSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gcihzKSB7CiAgICAgICAgcmV0dXJuIFp0KCkudGhlbihmdW5jdGlvbihjKSB7CiAgICAgICAgICByZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoYywgaSk7CiAgICAgICAgfSkudGhlbihzLCBmdW5jdGlvbihjKSB7CiAgICAgICAgICBTKCJmYWlsZWQgdG8gYXN5bmNocm9ub3VzbHkgcHJlcGFyZSB3YXNtOiAiICsgYyksIHNuKGMpOwogICAgICAgIH0pOwogICAgICB9CiAgICAgIHZhciBpID0geyBhOiBvZSB9OwogICAgICBpZiAoWisrLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKFopLCBlLmluc3RhbnRpYXRlV2FzbSkKICAgICAgICB0cnkgewogICAgICAgICAgdmFyIGEgPSBlLmluc3RhbnRpYXRlV2FzbShpLCBuKTsKICAgICAgICAgIHJldHVybiBhID0gTXQoYSk7CiAgICAgICAgfSBjYXRjaCAocykgewogICAgICAgICAgcmV0dXJuIFMoIk1vZHVsZS5pbnN0YW50aWF0ZVdhc20gY2FsbGJhY2sgZmFpbGVkIHdpdGggZXJyb3I6ICIgKyBzKSwgITE7CiAgICAgICAgfQogICAgICByZXR1cm4gZnVuY3Rpb24oKSB7CiAgICAgICAgaWYgKGogfHwgdHlwZW9mIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nICE9ICJmdW5jdGlvbiIgfHwgb3QoKSB8fCBSbigiZmlsZTovLyIpIHx8IHR5cGVvZiBmZXRjaCAhPSAiZnVuY3Rpb24iKQogICAgICAgICAgcmV0dXJuIHIodCk7CiAgICAgICAgZmV0Y2goJCwgeyBjcmVkZW50aWFsczogInNhbWUtb3JpZ2luIiB9KS50aGVuKGZ1bmN0aW9uKHMpIHsKICAgICAgICAgIHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyhzLCBpKS50aGVuKHQsIGZ1bmN0aW9uKGMpIHsKICAgICAgICAgICAgcmV0dXJuIFMoIndhc20gc3RyZWFtaW5nIGNvbXBpbGUgZmFpbGVkOiAiICsgYyksIFMoImZhbGxpbmcgYmFjayB0byBBcnJheUJ1ZmZlciBpbnN0YW50aWF0aW9uIiksIHIodCk7CiAgICAgICAgICB9KTsKICAgICAgICB9KTsKICAgICAgfSgpLCB7fTsKICAgIH0pKCk7CiAgICB2YXIgU3QgPSBlLl9fX3dhc21fY2FsbF9jdG9ycyA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKFN0ID0gZS5fX193YXNtX2NhbGxfY3RvcnMgPSBlLmFzbS5CKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgVG4gPSBlLl9tYWxsb2MgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChUbiA9IGUuX21hbGxvYyA9IGUuYXNtLkMpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBEID0gZS5fZnJlZSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKEQgPSBlLl9mcmVlID0gZS5hc20uRCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGJ0ID0gZS5fX19nZXRUeXBlTmFtZSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGJ0ID0gZS5fX19nZXRUeXBlTmFtZSA9IGUuYXNtLkUpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9OwogICAgZS5fX19lbWJpbmRfcmVnaXN0ZXJfbmF0aXZlX2FuZF9idWlsdGluX3R5cGVzID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fX19lbWJpbmRfcmVnaXN0ZXJfbmF0aXZlX2FuZF9idWlsdGluX3R5cGVzID0gZS5hc20uRikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paSA9IGUuYXNtLkcpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmkgPSBlLmFzbS5IKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2kgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaSA9IGUuYXNtLkkpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaSA9IGUuYXNtLkopLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpID0gZS5hc20uSykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9maWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfZmlpID0gZS5hc20uTCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlmID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWYgPSBlLmFzbS5NKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpID0gZS5hc20uTikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWkgPSBlLmFzbS5PKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWkgPSBlLmFzbS5QKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWkgPSBlLmFzbS5RKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpID0gZS5hc20uUikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWlpaSA9IGUuYXNtLlMpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWkgPSBlLmFzbS5UKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWlpaSA9IGUuYXNtLlUpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpaWRpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWlkaSA9IGUuYXNtLlYpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpZGkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpZGkgPSBlLmFzbS5XKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWlpID0gZS5hc20uWCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWkgPSBlLmFzbS5ZKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWkgPSBlLmFzbS5aKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaSA9IGUuYXNtLl8pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdGFydF91bndpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdGFydF91bndpbmQgPSBlLmFzbS4kKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RvcF91bndpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdG9wX3Vud2luZCA9IGUuYXNtLmFhKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RhcnRfcmV3aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RhcnRfcmV3aW5kID0gZS5hc20uYmEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdG9wX3Jld2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0b3BfcmV3aW5kID0gZS5hc20uY2EpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9OwogICAgdmFyIE1uOwogICAgb24gPSBmdW5jdGlvbiBuKCkgewogICAgICBNbiB8fCBHbigpLCBNbiB8fCAob24gPSBuKTsKICAgIH07CiAgICBmdW5jdGlvbiBHbigpIHsKICAgICAgZnVuY3Rpb24gbigpIHsKICAgICAgICBpZiAoIU1uICYmIChNbiA9ICEwLCBlLmNhbGxlZFJ1biA9ICEwLCAha24pKSB7CiAgICAgICAgICBpZiAoeW4oaXQpLCB5bihHdCksIG0oZSksIGUub25SdW50aW1lSW5pdGlhbGl6ZWQgJiYgZS5vblJ1bnRpbWVJbml0aWFsaXplZCgpLCBlLnBvc3RSdW4pCiAgICAgICAgICAgIGZvciAodHlwZW9mIGUucG9zdFJ1biA9PSAiZnVuY3Rpb24iICYmIChlLnBvc3RSdW4gPSBbZS5wb3N0UnVuXSk7IGUucG9zdFJ1bi5sZW5ndGg7ICkgewogICAgICAgICAgICAgIHZhciB0ID0gZS5wb3N0UnVuLnNoaWZ0KCk7CiAgICAgICAgICAgICAgYXQudW5zaGlmdCh0KTsKICAgICAgICAgICAgfQogICAgICAgICAgeW4oYXQpOwogICAgICAgIH0KICAgICAgfQogICAgICBpZiAoISgwIDwgWikpIHsKICAgICAgICBpZiAoZS5wcmVSdW4pCiAgICAgICAgICBmb3IgKHR5cGVvZiBlLnByZVJ1biA9PSAiZnVuY3Rpb24iICYmIChlLnByZVJ1biA9IFtlLnByZVJ1bl0pOyBlLnByZVJ1bi5sZW5ndGg7ICkKICAgICAgICAgICAgWXQoKTsKICAgICAgICB5bihydCksIDAgPCBaIHx8IChlLnNldFN0YXR1cyA/IChlLnNldFN0YXR1cygiUnVubmluZy4uLiIpLCBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgICAgICAgICAgZS5zZXRTdGF0dXMoIiIpOwogICAgICAgICAgfSwgMSksIG4oKTsKICAgICAgICB9LCAxKSkgOiBuKCkpOwogICAgICB9CiAgICB9CiAgICBpZiAoZS5ydW4gPSBHbiwgZS5wcmVJbml0KQogICAgICBmb3IgKHR5cGVvZiBlLnByZUluaXQgPT0gImZ1bmN0aW9uIiAmJiAoZS5wcmVJbml0ID0gW2UucHJlSW5pdF0pOyAwIDwgZS5wcmVJbml0Lmxlbmd0aDsgKQogICAgICAgIGUucHJlSW5pdC5wb3AoKSgpOwogICAgcmV0dXJuIEduKCksIHUucmVhZHk7CiAgfTsKfSgpOwpjbGFzcyBwZSB7CiAgY29uc3RydWN0b3IoKSB7CiAgICBZbih0aGlzLCAic2FtV2FzbU1vZHVsZSIpOwogIH0KICBnZXRPdmVycmlkZGVuTW9kdWxlcyh1LCBlKSB7CiAgICByZXR1cm4gewogICAgICBsb2NhdGVGaWxlOiAobSkgPT4gbmV3IFVSTChlIHx8IG0sIHUpLmhyZWYKICAgIH07CiAgfQogIGFzeW5jIGhhbmRsZU1pc3NpbmdPckludmFsaWRTYW1Nb2R1bGUodSwgZSkgewogICAgdHJ5IHsKICAgICAgY29uc3QgbSA9IGF3YWl0IGZldGNoKHUpOwogICAgICBpZiAoIW0ub2spCiAgICAgICAgdGhyb3cgbmV3IHgoCiAgICAgICAgICBgVGhlIHBhdGggdG8gJHtlfSBpcyBpbmNvcnJlY3Qgb3IgdGhlIG1vZHVsZSBpcyBtaXNzaW5nLiBQbGVhc2UgY2hlY2sgcHJvdmlkZWQgcGF0aCB0byB3YXNtIGZpbGVzLiBDdXJyZW50IHBhdGggaXMgJHt1fWAKICAgICAgICApOwogICAgICBjb25zdCBnID0gYXdhaXQgbS5hcnJheUJ1ZmZlcigpOwogICAgICBpZiAoIVdlYkFzc2VtYmx5LnZhbGlkYXRlKGcpKQogICAgICAgIHRocm93IG5ldyB4KAogICAgICAgICAgYFRoZSBwcm92aWRlZCAke2V9IGlzIG5vdCBhIHZhbGlkIFdBU00gbW9kdWxlLiBQbGVhc2UgY2hlY2sgcHJvdmlkZWQgcGF0aCB0byB3YXNtIGZpbGVzLiBDdXJyZW50IHBhdGggaXMgJHt1fWAKICAgICAgICApOwogICAgfSBjYXRjaCAobSkgewogICAgICBpZiAobSBpbnN0YW5jZW9mIHgpCiAgICAgICAgdGhyb3cgY29uc29sZS5lcnJvcigKICAgICAgICAgICJZb3UgY2FuIGZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBob3cgdG8gaG9zdCB3YXNtIGZpbGVzIGhlcmU6IGh0dHBzOi8vZGV2ZWxvcGVycy5pbm5vdmF0cmljcy5jb20vZGlnaXRhbC1vbmJvYXJkaW5nL3RlY2huaWNhbC9yZW1vdGUvZG90LXdlYi1kb2N1bWVudC9sYXRlc3QvZG9jdW1lbnRhdGlvbi8jX2hvc3Rpbmdfc2FtX3dhc20iCiAgICAgICAgKSwgbTsKICAgIH0KICB9CiAgYXN5bmMgZ2V0V2FzbUZpbGVOYW1lKCkgewogICAgcmV0dXJuIGF3YWl0IGxlKCkgPyBXdC5zaW1kIDogV3Quc2FtOwogIH0KICBhc3luYyBpbml0U2FtTW9kdWxlKHUsIGUgPSAiL3dhc20iKSB7CiAgICBpZiAodGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICByZXR1cm47CiAgICBjb25zdCBtID0gYXdhaXQgdGhpcy5nZXRXYXNtRmlsZU5hbWUoKSwgZyA9IGAke2V9LyR7bX1gOwogICAgdHJ5IHsKICAgICAgdGhpcy5zYW1XYXNtTW9kdWxlID0gYXdhaXQgaGUodGhpcy5nZXRPdmVycmlkZGVuTW9kdWxlcyh1LCBnKSk7CiAgICB9IGNhdGNoIHsKICAgICAgdGhyb3cgYXdhaXQgdGhpcy5oYW5kbGVNaXNzaW5nT3JJbnZhbGlkU2FtTW9kdWxlKGcsIG0pLCBuZXcgeCgiQ291bGQgbm90IGluaXQgZGV0ZWN0b3IuIik7CiAgICB9CiAgfQogIGFzeW5jIGdldFNhbVZlcnNpb24oKSB7CiAgICB2YXIgZTsKICAgIGNvbnN0IHUgPSBhd2FpdCAoKGUgPSB0aGlzLnNhbVdhc21Nb2R1bGUpID09IG51bGwgPyB2b2lkIDAgOiBlLmdldEluZm9TdHJpbmcoKSk7CiAgICByZXR1cm4gdSA9PSBudWxsID8gdm9pZCAwIDogdS50cmltKCk7CiAgfQogIC8qCiAgICogSW4gVFMgNS4yLjAgd2FzIGFkZGVkIHNwZWNpYWwga2V5d29yZCAidXNpbmciIHdoaWNoIGNvdWxkIGJlIHBlcmZlY3QgZm9yIHRoaXMgY2FzZS4KICAgKiBVbmZvcnR1bmF0ZWx5LCB2aXRlIHByZWFjdCBwbHVnaW4gZG9lcyBub3Qgc3VwcG9ydCB0aGlzIHZlcnNpb24gb2YgVFMgeWV0LgogICAqIENoZWNrIHBvc3NpYmlsaXR5IG9mIHVzaW5nICJ1c2luZyIga2V5d29yZCB3aGVuIHZpdGUgcHJlYWN0IHBsdWdpbiB1cGRhdGVzCiAgICovCiAgYWxsb2NhdGVNZW1vcnkodSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyB4KCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICByZXR1cm4gdGhpcy5zYW1XYXNtTW9kdWxlLl9tYWxsb2ModSk7CiAgfQogIHJlbGVhc2VNZW1vcnkodSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyB4KCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICB0aGlzLnNhbVdhc21Nb2R1bGUuX2ZyZWUodSk7CiAgfQogIHdyaXRlRGF0YVRvTWVtb3J5KHUsIGUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgeCgiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgdGhpcy5zYW1XYXNtTW9kdWxlLkhFQVBVOC5zZXQodSwgZSk7CiAgfQp9Ci8qKgogKiBAbGljZW5zZQogKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDCiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wCiAqLwpjb25zdCBSdCA9IFN5bWJvbCgiQ29tbGluay5wcm94eSIpLCB5ZSA9IFN5bWJvbCgiQ29tbGluay5lbmRwb2ludCIpLCBtZSA9IFN5bWJvbCgiQ29tbGluay5yZWxlYXNlUHJveHkiKSwgWm4gPSBTeW1ib2woIkNvbWxpbmsuZmluYWxpemVyIiksIFNuID0gU3ltYm9sKCJDb21saW5rLnRocm93biIpLCBGdCA9IChvKSA9PiB0eXBlb2YgbyA9PSAib2JqZWN0IiAmJiBvICE9PSBudWxsIHx8IHR5cGVvZiBvID09ICJmdW5jdGlvbiIsIHZlID0gewogIGNhbkhhbmRsZTogKG8pID0+IEZ0KG8pICYmIG9bUnRdLAogIHNlcmlhbGl6ZShvKSB7CiAgICBjb25zdCB7IHBvcnQxOiB1LCBwb3J0MjogZSB9ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7CiAgICByZXR1cm4gSm4obywgdSksIFtlLCBbZV1dOwogIH0sCiAgZGVzZXJpYWxpemUobykgewogICAgcmV0dXJuIG8uc3RhcnQoKSwgX2Uobyk7CiAgfQp9LCBnZSA9IHsKICBjYW5IYW5kbGU6IChvKSA9PiBGdChvKSAmJiBTbiBpbiBvLAogIHNlcmlhbGl6ZSh7IHZhbHVlOiBvIH0pIHsKICAgIGxldCB1OwogICAgcmV0dXJuIG8gaW5zdGFuY2VvZiBFcnJvciA/IHUgPSB7CiAgICAgIGlzRXJyb3I6ICEwLAogICAgICB2YWx1ZTogewogICAgICAgIG1lc3NhZ2U6IG8ubWVzc2FnZSwKICAgICAgICBuYW1lOiBvLm5hbWUsCiAgICAgICAgc3RhY2s6IG8uc3RhY2sKICAgICAgfQogICAgfSA6IHUgPSB7IGlzRXJyb3I6ICExLCB2YWx1ZTogbyB9LCBbdSwgW11dOwogIH0sCiAgZGVzZXJpYWxpemUobykgewogICAgdGhyb3cgby5pc0Vycm9yID8gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3Ioby52YWx1ZS5tZXNzYWdlKSwgby52YWx1ZSkgOiBvLnZhbHVlOwogIH0KfSwgeHQgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcChbCiAgWyJwcm94eSIsIHZlXSwKICBbInRocm93IiwgZ2VdCl0pOwpmdW5jdGlvbiB3ZShvLCB1KSB7CiAgZm9yIChjb25zdCBlIG9mIG8pCiAgICBpZiAodSA9PT0gZSB8fCBlID09PSAiKiIgfHwgZSBpbnN0YW5jZW9mIFJlZ0V4cCAmJiBlLnRlc3QodSkpCiAgICAgIHJldHVybiAhMDsKICByZXR1cm4gITE7Cn0KZnVuY3Rpb24gSm4obywgdSA9IGdsb2JhbFRoaXMsIGUgPSBbIioiXSkgewogIHUuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGZ1bmN0aW9uIG0oZykgewogICAgaWYgKCFnIHx8ICFnLmRhdGEpCiAgICAgIHJldHVybjsKICAgIGlmICghd2UoZSwgZy5vcmlnaW4pKSB7CiAgICAgIGNvbnNvbGUud2FybihgSW52YWxpZCBvcmlnaW4gJyR7Zy5vcmlnaW59JyBmb3IgY29tbGluayBwcm94eWApOwogICAgICByZXR1cm47CiAgICB9CiAgICBjb25zdCB7IGlkOiBfLCB0eXBlOiB3LCBwYXRoOiBUIH0gPSBPYmplY3QuYXNzaWduKHsgcGF0aDogW10gfSwgZy5kYXRhKSwgTSA9IChnLmRhdGEuYXJndW1lbnRMaXN0IHx8IFtdKS5tYXAoWCk7CiAgICBsZXQgRTsKICAgIHRyeSB7CiAgICAgIGNvbnN0IEMgPSBULnNsaWNlKDAsIC0xKS5yZWR1Y2UoKFMsIGopID0+IFNbal0sIG8pLCBSID0gVC5yZWR1Y2UoKFMsIGopID0+IFNbal0sIG8pOwogICAgICBzd2l0Y2ggKHcpIHsKICAgICAgICBjYXNlICJHRVQiOgogICAgICAgICAgRSA9IFI7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJTRVQiOgogICAgICAgICAgQ1tULnNsaWNlKC0xKVswXV0gPSBYKGcuZGF0YS52YWx1ZSksIEUgPSAhMDsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIkFQUExZIjoKICAgICAgICAgIEUgPSBSLmFwcGx5KEMsIE0pOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiQ09OU1RSVUNUIjoKICAgICAgICAgIHsKICAgICAgICAgICAgY29uc3QgUyA9IG5ldyBSKC4uLk0pOwogICAgICAgICAgICBFID0gUGUoUyk7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJFTkRQT0lOVCI6CiAgICAgICAgICB7CiAgICAgICAgICAgIGNvbnN0IHsgcG9ydDE6IFMsIHBvcnQyOiBqIH0gPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTsKICAgICAgICAgICAgSm4obywgaiksIEUgPSBNZShTLCBbU10pOwogICAgICAgICAgfQogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiUkVMRUFTRSI6CiAgICAgICAgICBFID0gdm9pZCAwOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHJldHVybjsKICAgICAgfQogICAgfSBjYXRjaCAoQykgewogICAgICBFID0geyB2YWx1ZTogQywgW1NuXTogMCB9OwogICAgfQogICAgUHJvbWlzZS5yZXNvbHZlKEUpLmNhdGNoKChDKSA9PiAoeyB2YWx1ZTogQywgW1NuXTogMCB9KSkudGhlbigoQykgPT4gewogICAgICBjb25zdCBbUiwgU10gPSBXbihDKTsKICAgICAgdS5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIFIpLCB7IGlkOiBfIH0pLCBTKSwgdyA9PT0gIlJFTEVBU0UiICYmICh1LnJlbW92ZUV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBtKSwgSXQodSksIFpuIGluIG8gJiYgdHlwZW9mIG9bWm5dID09ICJmdW5jdGlvbiIgJiYgb1tabl0oKSk7CiAgICB9KS5jYXRjaCgoQykgPT4gewogICAgICBjb25zdCBbUiwgU10gPSBXbih7CiAgICAgICAgdmFsdWU6IG5ldyBUeXBlRXJyb3IoIlVuc2VyaWFsaXphYmxlIHJldHVybiB2YWx1ZSIpLAogICAgICAgIFtTbl06IDAKICAgICAgfSk7CiAgICAgIHUucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBSKSwgeyBpZDogXyB9KSwgUyk7CiAgICB9KTsKICB9KSwgdS5zdGFydCAmJiB1LnN0YXJ0KCk7Cn0KZnVuY3Rpb24gQWUobykgewogIHJldHVybiBvLmNvbnN0cnVjdG9yLm5hbWUgPT09ICJNZXNzYWdlUG9ydCI7Cn0KZnVuY3Rpb24gSXQobykgewogIEFlKG8pICYmIG8uY2xvc2UoKTsKfQpmdW5jdGlvbiBfZShvLCB1KSB7CiAgcmV0dXJuICRuKG8sIFtdLCB1KTsKfQpmdW5jdGlvbiBQbihvKSB7CiAgaWYgKG8pCiAgICB0aHJvdyBuZXcgRXJyb3IoIlByb3h5IGhhcyBiZWVuIHJlbGVhc2VkIGFuZCBpcyBub3QgdXNlYWJsZSIpOwp9CmZ1bmN0aW9uIGp0KG8pIHsKICByZXR1cm4gYW4obywgewogICAgdHlwZTogIlJFTEVBU0UiCiAgfSkudGhlbigoKSA9PiB7CiAgICBJdChvKTsKICB9KTsKfQpjb25zdCBibiA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpLCBPbiA9ICJGaW5hbGl6YXRpb25SZWdpc3RyeSIgaW4gZ2xvYmFsVGhpcyAmJiBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoKG8pID0+IHsKICBjb25zdCB1ID0gKGJuLmdldChvKSB8fCAwKSAtIDE7CiAgYm4uc2V0KG8sIHUpLCB1ID09PSAwICYmIGp0KG8pOwp9KTsKZnVuY3Rpb24gQ2UobywgdSkgewogIGNvbnN0IGUgPSAoYm4uZ2V0KHUpIHx8IDApICsgMTsKICBibi5zZXQodSwgZSksIE9uICYmIE9uLnJlZ2lzdGVyKG8sIHUsIG8pOwp9CmZ1bmN0aW9uIEVlKG8pIHsKICBPbiAmJiBPbi51bnJlZ2lzdGVyKG8pOwp9CmZ1bmN0aW9uICRuKG8sIHUgPSBbXSwgZSA9IGZ1bmN0aW9uKCkgewp9KSB7CiAgbGV0IG0gPSAhMTsKICBjb25zdCBnID0gbmV3IFByb3h5KGUsIHsKICAgIGdldChfLCB3KSB7CiAgICAgIGlmIChQbihtKSwgdyA9PT0gbWUpCiAgICAgICAgcmV0dXJuICgpID0+IHsKICAgICAgICAgIEVlKGcpLCBqdChvKSwgbSA9ICEwOwogICAgICAgIH07CiAgICAgIGlmICh3ID09PSAidGhlbiIpIHsKICAgICAgICBpZiAodS5sZW5ndGggPT09IDApCiAgICAgICAgICByZXR1cm4geyB0aGVuOiAoKSA9PiBnIH07CiAgICAgICAgY29uc3QgVCA9IGFuKG8sIHsKICAgICAgICAgIHR5cGU6ICJHRVQiLAogICAgICAgICAgcGF0aDogdS5tYXAoKE0pID0+IE0udG9TdHJpbmcoKSkKICAgICAgICB9KS50aGVuKFgpOwogICAgICAgIHJldHVybiBULnRoZW4uYmluZChUKTsKICAgICAgfQogICAgICByZXR1cm4gJG4obywgWy4uLnUsIHddKTsKICAgIH0sCiAgICBzZXQoXywgdywgVCkgewogICAgICBQbihtKTsKICAgICAgY29uc3QgW00sIEVdID0gV24oVCk7CiAgICAgIHJldHVybiBhbihvLCB7CiAgICAgICAgdHlwZTogIlNFVCIsCiAgICAgICAgcGF0aDogWy4uLnUsIHddLm1hcCgoQykgPT4gQy50b1N0cmluZygpKSwKICAgICAgICB2YWx1ZTogTQogICAgICB9LCBFKS50aGVuKFgpOwogICAgfSwKICAgIGFwcGx5KF8sIHcsIFQpIHsKICAgICAgUG4obSk7CiAgICAgIGNvbnN0IE0gPSB1W3UubGVuZ3RoIC0gMV07CiAgICAgIGlmIChNID09PSB5ZSkKICAgICAgICByZXR1cm4gYW4obywgewogICAgICAgICAgdHlwZTogIkVORFBPSU5UIgogICAgICAgIH0pLnRoZW4oWCk7CiAgICAgIGlmIChNID09PSAiYmluZCIpCiAgICAgICAgcmV0dXJuICRuKG8sIHUuc2xpY2UoMCwgLTEpKTsKICAgICAgY29uc3QgW0UsIENdID0ga3QoVCk7CiAgICAgIHJldHVybiBhbihvLCB7CiAgICAgICAgdHlwZTogIkFQUExZIiwKICAgICAgICBwYXRoOiB1Lm1hcCgoUikgPT4gUi50b1N0cmluZygpKSwKICAgICAgICBhcmd1bWVudExpc3Q6IEUKICAgICAgfSwgQykudGhlbihYKTsKICAgIH0sCiAgICBjb25zdHJ1Y3QoXywgdykgewogICAgICBQbihtKTsKICAgICAgY29uc3QgW1QsIE1dID0ga3Qodyk7CiAgICAgIHJldHVybiBhbihvLCB7CiAgICAgICAgdHlwZTogIkNPTlNUUlVDVCIsCiAgICAgICAgcGF0aDogdS5tYXAoKEUpID0+IEUudG9TdHJpbmcoKSksCiAgICAgICAgYXJndW1lbnRMaXN0OiBUCiAgICAgIH0sIE0pLnRoZW4oWCk7CiAgICB9CiAgfSk7CiAgcmV0dXJuIENlKGcsIG8pLCBnOwp9CmZ1bmN0aW9uIFRlKG8pIHsKICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgbyk7Cn0KZnVuY3Rpb24ga3QobykgewogIGNvbnN0IHUgPSBvLm1hcChXbik7CiAgcmV0dXJuIFt1Lm1hcCgoZSkgPT4gZVswXSksIFRlKHUubWFwKChlKSA9PiBlWzFdKSldOwp9CmNvbnN0IEx0ID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7CmZ1bmN0aW9uIE1lKG8sIHUpIHsKICByZXR1cm4gTHQuc2V0KG8sIHUpLCBvOwp9CmZ1bmN0aW9uIFBlKG8pIHsKICByZXR1cm4gT2JqZWN0LmFzc2lnbihvLCB7IFtSdF06ICEwIH0pOwp9CmZ1bmN0aW9uIFduKG8pIHsKICBmb3IgKGNvbnN0IFt1LCBlXSBvZiB4dCkKICAgIGlmIChlLmNhbkhhbmRsZShvKSkgewogICAgICBjb25zdCBbbSwgZ10gPSBlLnNlcmlhbGl6ZShvKTsKICAgICAgcmV0dXJuIFsKICAgICAgICB7CiAgICAgICAgICB0eXBlOiAiSEFORExFUiIsCiAgICAgICAgICBuYW1lOiB1LAogICAgICAgICAgdmFsdWU6IG0KICAgICAgICB9LAogICAgICAgIGcKICAgICAgXTsKICAgIH0KICByZXR1cm4gWwogICAgewogICAgICB0eXBlOiAiUkFXIiwKICAgICAgdmFsdWU6IG8KICAgIH0sCiAgICBMdC5nZXQobykgfHwgW10KICBdOwp9CmZ1bmN0aW9uIFgobykgewogIHN3aXRjaCAoby50eXBlKSB7CiAgICBjYXNlICJIQU5ETEVSIjoKICAgICAgcmV0dXJuIHh0LmdldChvLm5hbWUpLmRlc2VyaWFsaXplKG8udmFsdWUpOwogICAgY2FzZSAiUkFXIjoKICAgICAgcmV0dXJuIG8udmFsdWU7CiAgfQp9CmZ1bmN0aW9uIGFuKG8sIHUsIGUpIHsKICByZXR1cm4gbmV3IFByb21pc2UoKG0pID0+IHsKICAgIGNvbnN0IGcgPSBTZSgpOwogICAgby5hZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgZnVuY3Rpb24gXyh3KSB7CiAgICAgICF3LmRhdGEgfHwgIXcuZGF0YS5pZCB8fCB3LmRhdGEuaWQgIT09IGcgfHwgKG8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIF8pLCBtKHcuZGF0YSkpOwogICAgfSksIG8uc3RhcnQgJiYgby5zdGFydCgpLCBvLnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oeyBpZDogZyB9LCB1KSwgZSk7CiAgfSk7Cn0KZnVuY3Rpb24gU2UoKSB7CiAgcmV0dXJuIG5ldyBBcnJheSg0KS5maWxsKDApLm1hcCgoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikudG9TdHJpbmcoMTYpKS5qb2luKCItIik7Cn0KZnVuY3Rpb24gYmUoewogIGJvdHRvbVJpZ2h0WDogbywKICBib3R0b21SaWdodFk6IHUsCiAgdG9wTGVmdFg6IGUsCiAgdG9wTGVmdFk6IG0KfSwgZykgewogIGNvbnN0IF8gPSBNYXRoLmFicyhvIC0gZSksIHcgPSBNYXRoLmFicyh1IC0gbSksIFQgPSBNYXRoLm1heChfLCB3KSAqIDAuMzM3NSwgTSA9IGRlKGcud2lkdGgsIGcuaGVpZ2h0KTsKICByZXR1cm4gZmUoVCAvIE0pOwp9CmNsYXNzIE9lIGV4dGVuZHMgcGUgewogIHBhcnNlUmF3RGF0YSh1LCBlKSB7CiAgICBjb25zdCB7IGJyaWdodG5lc3M6IG0sIHNoYXJwbmVzczogZyB9ID0gdS5wYXJhbXMsIHsgYm90dG9tUmlnaHRYOiBfLCBib3R0b21SaWdodFk6IHcsIHRvcExlZnRYOiBULCB0b3BMZWZ0WTogTSB9ID0gdSwgRSA9IGJlKHsgYm90dG9tUmlnaHRYOiBfLCBib3R0b21SaWdodFk6IHcsIHRvcExlZnRYOiBULCB0b3BMZWZ0WTogTSB9LCBlKTsKICAgIHJldHVybiB7CiAgICAgIGNvbmZpZGVuY2U6IHUucHJvYmFiaWxpdHkgLyAxZTMsCiAgICAgIHRvcExlZnQ6IHsKICAgICAgICB4OiBULAogICAgICAgIHk6IE0KICAgICAgfSwKICAgICAgYm90dG9tUmlnaHQ6IHsKICAgICAgICB4OiBfLAogICAgICAgIHk6IHcKICAgICAgfSwKICAgICAgZmFjZUNlbnRlcjogewogICAgICAgIHg6IChUICsgXykgLyAyLAogICAgICAgIHk6IChNICsgdykgLyAyCiAgICAgIH0sCiAgICAgIGZhY2VTaXplOiBFLAogICAgICBicmlnaHRuZXNzOiBtIC8gMWUzLAogICAgICBzaGFycG5lc3M6IGcgLyAxZTMKICAgIH07CiAgfQogIGFzeW5jIGRldGVjdCh1LCBlLCBtKSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IHgoIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIGNvbnN0IGcgPSB0aGlzLmFsbG9jYXRlTWVtb3J5KHUubGVuZ3RoICogdS5CWVRFU19QRVJfRUxFTUVOVCksIF8gPSB0aGlzLmFsbG9jYXRlTWVtb3J5KHUubGVuZ3RoICogdS5CWVRFU19QRVJfRUxFTUVOVCk7CiAgICB0aGlzLndyaXRlRGF0YVRvTWVtb3J5KHUsIGcpLCB0aGlzLnNhbVdhc21Nb2R1bGUuY29udmVydFRvU2FtQ29sb3JJbWFnZSgKICAgICAgZS53aWR0aCwKICAgICAgZS5oZWlnaHQsCiAgICAgIGcsCiAgICAgIGNlLlJHQkEsCiAgICAgIF8KICAgICk7CiAgICBjb25zdCB3ID0gdGhpcy5zYW1XYXNtTW9kdWxlLmRldGVjdEZhY2VXaXRoSW1hZ2VQYXJhbWV0ZXJzKAogICAgICBlLndpZHRoLAogICAgICBlLmhlaWdodCwKICAgICAgXywKICAgICAgMCwKICAgICAgLy8gcGFyYW1XaWR0aCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICAgMAogICAgICAvLyBwYXJhbUhlaWdodCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICk7CiAgICByZXR1cm4gdGhpcy5yZWxlYXNlTWVtb3J5KGcpLCB0aGlzLnJlbGVhc2VNZW1vcnkoXyksIHRoaXMucGFyc2VSYXdEYXRhKHcsIG0pOwogIH0KfQpKbihPZSk7Cg==", Ea = typeof window < "u" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);" + atob(bs)], { type: "text/javascript;charset=utf-8" });
function ul(t) {
  let o;
  try {
    if (o = Ea && (window.URL || window.webkitURL).createObjectURL(Ea), !o)
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
      "data:application/javascript;base64," + bs,
      {
        type: "module",
        name: t == null ? void 0 : t.name
      }
    );
  }
}
const ki = class ki extends qx {
  constructor() {
    super(...arguments);
    Q(this, "detector");
    Q(this, "className", "FaceController");
    Q(this, "fallbackInstruction", Ne.FACE_NOT_PRESENT);
    Q(this, "pitchAngleAccelerationThreshold", null);
    Q(this, "validateDetectedObject", (e, n) => {
      const { brightnessHighThreshold: i, brightnessLowThreshold: r, faceConfidence: a, maxFaceSizeRatio: g, minFaceSizeRatio: s, outOfBoundsThreshold: x, sharpnessThreshold: C } = this.getThresholds(), u = e.confidence > a, f = e.faceSize > s, p = e.faceSize < g, v = e.sharpness > C, w = e.brightness > r, K = e.brightness < i, G = ll(x, e, n), W = xl(this.pitchAngleAccelerationThreshold, this.acceleration), O = {};
      return O.isPresent = u, O.isNotSmall = f, O.isNotLarge = p, O.isSharp = v, O.isNotDim = w, O.isNotBright = K, O.isNotOutOfBounds = G, O.isNotPitched = W, O;
    });
    Q(this, "getInstructionCode", (e, n) => {
      var r;
      if (this.isInCandidateSelection)
        return Ne.CANDIDATE_SELECTION;
      if ((r = this.lastImage) != null && r.isValid && n)
        return Ne.CANDIDATE_SELECTION;
      if (this.lastImage && n)
        return this.lastImage.instructionCode;
      const [i] = this.getInstructionCodesForValidators(e);
      return i ?? this.fallbackInstruction;
    });
    Q(this, "getInstructionCodesForValidators", (e) => {
      const n = [];
      return Object.entries(e).forEach(([i, r]) => {
        !r && n.push(lI[i]);
      }), n;
    });
  }
  static async init() {
    const e = new ul(), n = ps(e), i = new ki(), r = await new n();
    this._instance = i, this._instance.detector = r;
  }
  static async getInstance() {
    return !this._instance && await this.init(), this._instance;
  }
  setThresholds(e) {
    super.setThresholds(e);
    const { devicePitchAngleThreshold: n } = e;
    this.pitchAngleAccelerationThreshold = jI * Math.sin(n * (Math.PI / 180));
  }
  restart() {
    super.restart(), Va(ut.INSTRUCTION_CHANGED, void (44 * 12 + 1 * 2775 + 1 * -3303), SI);
  }
  async processImage(e) {
    var w;
    const n = {};
    n.width = e.width, n.height = e.height;
    const i = n, r = dr(i), a = Cx(e, r), g = dx(a), s = {};
    s.width = a.width, s.height = a.height;
    const x = s;
    let C = await this.detector.detect(g, x, i);
    C = Yx(i, C);
    const u = this.validateDetectedObject(C, i), f = this.isDetectionValid(u), p = this.getInstructionCode(u, f);
    if (u.isPresent && this.collectImagesForDuplicateDetection(g), this.isInCandidateSelection) {
      if (this.bestImage && f && this.isNewImageBetter(this.bestImage.detection, C)) {
        const K = { image: e, detection: Jt(C) };
        this.bestImage = K, this.candidateSelectionImages.push(K);
      }
    } else if ((w = this.lastImage) != null && w.isValid && f) {
      const K = { image: e, detection: Jt(C) }, G = {};
      G.image = this.lastImage.image, G.detection = this.lastImage.detection;
      const W = G;
      this.isNewImageBetter(W.detection, K.detection) ? this.bestImage = K : this.bestImage = W, this.candidateSelectionImages.push(W, K), this.isInCandidateSelection = !0;
    } else
      f ? this.lastImage = { instructionCode: p, isValid: !0, image: e, detection: Jt(C) } : this.lastImage = { instructionCode: p, isValid: !1, image: e, detection: Jt(C) };
    const v = { detectedFace: Jt(C), instructionCode: p, invalidValidators: this.getInstructionCodesForValidators(u), isInCandidateSelection: this.isInCandidateSelection };
    return this.detectionRecord.push(v.detectedFace), Va(ut.INSTRUCTION_CHANGED, p), Zx(ut.DETECTED_FACE_CHANGED, v.detectedFace, this.getThresholds().faceConfidence), kx(ut.FACE_DETECTION, v.detectedFace, e), v;
  }
};
Q(ki, "_instance");
let Mo = ki;
const Cl = (t, o) => {
  const { handleError: e } = Li(), [n, i] = Ye(), { acceleration: r } = Nx();
  n && n.setAcceleration(r), ue(() => {
    (async () => {
      const s = await Mo.getInstance();
      try {
        const x = {};
        x.wasmDirectoryPath = o, x.thresholds = t, await s.init(x);
      } catch (x) {
        if (x instanceof Error) {
          e(q.fromError(x));
          return;
        }
      }
      i(s);
    })();
  }, [e, t, o]);
  const a = {};
  return a.controller = n, a;
};
var yt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ys = {}, Pa = {}, dl = Al;
function Al(t, o) {
  for (var e = new Array(arguments.length - 1), n = 0, i = 2, r = !0; i < arguments.length; )
    e[n++] = arguments[i++];
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
      t.apply(o || null, e);
    } catch (s) {
      r && (r = !1, g(s));
    }
  });
}
var vs = {};
(function(t) {
  var o = t;
  o.length = function(a) {
    var g = a.length;
    if (!g)
      return 0;
    for (var s = 0; --g % 4 > 1 && a.charAt(g) === "="; )
      ++s;
    return Math.ceil(a.length * 3) / 4 - s;
  };
  for (var e = new Array(64), n = new Array(123), i = 0; i < 64; )
    n[e[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
  o.encode = function(a, g, s) {
    for (var x = null, C = [], u = 0, f = 0, p; g < s; ) {
      var v = a[g++];
      switch (f) {
        case 0:
          C[u++] = e[v >> 2], p = (v & 3) << 4, f = 1;
          break;
        case 1:
          C[u++] = e[p | v >> 4], p = (v & 15) << 2, f = 2;
          break;
        case 2:
          C[u++] = e[p | v >> 6], C[u++] = e[v & 63], f = 0;
          break;
      }
      u > 8191 && ((x || (x = [])).push(String.fromCharCode.apply(String, C)), u = 0);
    }
    return f && (C[u++] = e[p], C[u++] = 61, f === 1 && (C[u++] = 61)), x ? (u && x.push(String.fromCharCode.apply(String, C.slice(0, u))), x.join("")) : String.fromCharCode.apply(String, C.slice(0, u));
  };
  var r = "invalid encoding";
  o.decode = function(a, g, s) {
    for (var x = s, C = 0, u, f = 0; f < a.length; ) {
      var p = a.charCodeAt(f++);
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
  }, o.test = function(a) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(a);
  };
})(vs);
var fl = Fi;
function Fi() {
  this._listeners = {};
}
Fi.prototype.on = function(t, o, e) {
  return (this._listeners[t] || (this._listeners[t] = [])).push({
    fn: o,
    ctx: e || this
  }), this;
};
Fi.prototype.off = function(t, o) {
  if (t === void 0)
    this._listeners = {};
  else if (o === void 0)
    this._listeners[t] = [];
  else
    for (var e = this._listeners[t], n = 0; n < e.length; )
      e[n].fn === o ? e.splice(n, 1) : ++n;
  return this;
};
Fi.prototype.emit = function(t) {
  var o = this._listeners[t];
  if (o) {
    for (var e = [], n = 1; n < arguments.length; )
      e.push(arguments[n++]);
    for (n = 0; n < o.length; )
      o[n].fn.apply(o[n++].ctx, e);
  }
  return this;
};
var pl = Na(Na);
function Na(t) {
  return typeof Float32Array < "u" ? function() {
    var o = new Float32Array([-0]), e = new Uint8Array(o.buffer), n = e[3] === 128;
    function i(s, x, C) {
      o[0] = s, x[C] = e[0], x[C + 1] = e[1], x[C + 2] = e[2], x[C + 3] = e[3];
    }
    function r(s, x, C) {
      o[0] = s, x[C] = e[3], x[C + 1] = e[2], x[C + 2] = e[1], x[C + 3] = e[0];
    }
    t.writeFloatLE = n ? i : r, t.writeFloatBE = n ? r : i;
    function a(s, x) {
      return e[0] = s[x], e[1] = s[x + 1], e[2] = s[x + 2], e[3] = s[x + 3], o[0];
    }
    function g(s, x) {
      return e[3] = s[x], e[2] = s[x + 1], e[1] = s[x + 2], e[0] = s[x + 3], o[0];
    }
    t.readFloatLE = n ? a : g, t.readFloatBE = n ? g : a;
  }() : function() {
    function o(n, i, r, a) {
      var g = i < 0 ? 1 : 0;
      if (g && (i = -i), i === 0)
        n(1 / i > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), r, a);
      else if (isNaN(i))
        n(2143289344, r, a);
      else if (i > 34028234663852886e22)
        n((g << 31 | 2139095040) >>> 0, r, a);
      else if (i < 11754943508222875e-54)
        n((g << 31 | Math.round(i / 1401298464324817e-60)) >>> 0, r, a);
      else {
        var s = Math.floor(Math.log(i) / Math.LN2), x = Math.round(i * Math.pow(2, -s) * 8388608) & 8388607;
        n((g << 31 | s + 127 << 23 | x) >>> 0, r, a);
      }
    }
    t.writeFloatLE = o.bind(null, Ya), t.writeFloatBE = o.bind(null, La);
    function e(n, i, r) {
      var a = n(i, r), g = (a >> 31) * 2 + 1, s = a >>> 23 & 255, x = a & 8388607;
      return s === 255 ? x ? NaN : g * (1 / 0) : s === 0 ? g * 1401298464324817e-60 * x : g * Math.pow(2, s - 150) * (x + 8388608);
    }
    t.readFloatLE = e.bind(null, Ta), t.readFloatBE = e.bind(null, Fa);
  }(), typeof Float64Array < "u" ? function() {
    var o = new Float64Array([-0]), e = new Uint8Array(o.buffer), n = e[7] === 128;
    function i(s, x, C) {
      o[0] = s, x[C] = e[0], x[C + 1] = e[1], x[C + 2] = e[2], x[C + 3] = e[3], x[C + 4] = e[4], x[C + 5] = e[5], x[C + 6] = e[6], x[C + 7] = e[7];
    }
    function r(s, x, C) {
      o[0] = s, x[C] = e[7], x[C + 1] = e[6], x[C + 2] = e[5], x[C + 3] = e[4], x[C + 4] = e[3], x[C + 5] = e[2], x[C + 6] = e[1], x[C + 7] = e[0];
    }
    t.writeDoubleLE = n ? i : r, t.writeDoubleBE = n ? r : i;
    function a(s, x) {
      return e[0] = s[x], e[1] = s[x + 1], e[2] = s[x + 2], e[3] = s[x + 3], e[4] = s[x + 4], e[5] = s[x + 5], e[6] = s[x + 6], e[7] = s[x + 7], o[0];
    }
    function g(s, x) {
      return e[7] = s[x], e[6] = s[x + 1], e[5] = s[x + 2], e[4] = s[x + 3], e[3] = s[x + 4], e[2] = s[x + 5], e[1] = s[x + 6], e[0] = s[x + 7], o[0];
    }
    t.readDoubleLE = n ? a : g, t.readDoubleBE = n ? g : a;
  }() : function() {
    function o(n, i, r, a, g, s) {
      var x = a < 0 ? 1 : 0;
      if (x && (a = -a), a === 0)
        n(0, g, s + i), n(1 / a > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), g, s + r);
      else if (isNaN(a))
        n(0, g, s + i), n(2146959360, g, s + r);
      else if (a > 17976931348623157e292)
        n(0, g, s + i), n((x << 31 | 2146435072) >>> 0, g, s + r);
      else {
        var C;
        if (a < 22250738585072014e-324)
          C = a / 5e-324, n(C >>> 0, g, s + i), n((x << 31 | C / 4294967296) >>> 0, g, s + r);
        else {
          var u = Math.floor(Math.log(a) / Math.LN2);
          u === 1024 && (u = 1023), C = a * Math.pow(2, -u), n(C * 4503599627370496 >>> 0, g, s + i), n((x << 31 | u + 1023 << 20 | C * 1048576 & 1048575) >>> 0, g, s + r);
        }
      }
    }
    t.writeDoubleLE = o.bind(null, Ya, 0, 4), t.writeDoubleBE = o.bind(null, La, 4, 0);
    function e(n, i, r, a, g) {
      var s = n(a, g + i), x = n(a, g + r), C = (x >> 31) * 2 + 1, u = x >>> 20 & 2047, f = 4294967296 * (x & 1048575) + s;
      return u === 2047 ? f ? NaN : C * (1 / 0) : u === 0 ? C * 5e-324 * f : C * Math.pow(2, u - 1075) * (f + 4503599627370496);
    }
    t.readDoubleLE = e.bind(null, Ta, 0, 4), t.readDoubleBE = e.bind(null, Fa, 4, 0);
  }(), t;
}
function Ya(t, o, e) {
  o[e] = t & 255, o[e + 1] = t >>> 8 & 255, o[e + 2] = t >>> 16 & 255, o[e + 3] = t >>> 24;
}
function La(t, o, e) {
  o[e] = t >>> 24, o[e + 1] = t >>> 16 & 255, o[e + 2] = t >>> 8 & 255, o[e + 3] = t & 255;
}
function Ta(t, o) {
  return (t[o] | t[o + 1] << 8 | t[o + 2] << 16 | t[o + 3] << 24) >>> 0;
}
function Fa(t, o) {
  return (t[o] << 24 | t[o + 1] << 16 | t[o + 2] << 8 | t[o + 3]) >>> 0;
}
function Da(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var hl = ml;
function ml(t) {
  try {
    if (typeof Da != "function")
      return null;
    var o = Da(t);
    return o && (o.length || Object.keys(o).length) ? o : null;
  } catch {
    return null;
  }
}
var ws = {};
(function(t) {
  var o = t;
  o.length = function(e) {
    for (var n = 0, i = 0, r = 0; r < e.length; ++r)
      i = e.charCodeAt(r), i < 128 ? n += 1 : i < 2048 ? n += 2 : (i & 64512) === 55296 && (e.charCodeAt(r + 1) & 64512) === 56320 ? (++r, n += 4) : n += 3;
    return n;
  }, o.read = function(e, n, i) {
    var r = i - n;
    if (r < 1)
      return "";
    for (var a = null, g = [], s = 0, x; n < i; )
      x = e[n++], x < 128 ? g[s++] = x : x > 191 && x < 224 ? g[s++] = (x & 31) << 6 | e[n++] & 63 : x > 239 && x < 365 ? (x = ((x & 7) << 18 | (e[n++] & 63) << 12 | (e[n++] & 63) << 6 | e[n++] & 63) - 65536, g[s++] = 55296 + (x >> 10), g[s++] = 56320 + (x & 1023)) : g[s++] = (x & 15) << 12 | (e[n++] & 63) << 6 | e[n++] & 63, s > 8191 && ((a || (a = [])).push(String.fromCharCode.apply(String, g)), s = 0);
    return a ? (s && a.push(String.fromCharCode.apply(String, g.slice(0, s))), a.join("")) : String.fromCharCode.apply(String, g.slice(0, s));
  }, o.write = function(e, n, i) {
    for (var r = i, a, g, s = 0; s < e.length; ++s)
      a = e.charCodeAt(s), a < 128 ? n[i++] = a : a < 2048 ? (n[i++] = a >> 6 | 192, n[i++] = a & 63 | 128) : (a & 64512) === 55296 && ((g = e.charCodeAt(s + 1)) & 64512) === 56320 ? (a = 65536 + ((a & 1023) << 10) + (g & 1023), ++s, n[i++] = a >> 18 | 240, n[i++] = a >> 12 & 63 | 128, n[i++] = a >> 6 & 63 | 128, n[i++] = a & 63 | 128) : (n[i++] = a >> 12 | 224, n[i++] = a >> 6 & 63 | 128, n[i++] = a & 63 | 128);
    return i - r;
  };
})(ws);
var bl = yl;
function yl(t, o, e) {
  var n = e || 8192, i = n >>> 1, r = null, a = n;
  return function(g) {
    if (g < 1 || g > i)
      return t(g);
    a + g > n && (r = t(n), a = 0);
    var s = o.call(r, a, a += g);
    return a & 7 && (a = (a | 7) + 1), s;
  };
}
var fo, Xa;
function vl() {
  if (Xa)
    return fo;
  Xa = 1, fo = o;
  var t = Rt();
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
  var n = o.zeroHash = "\0\0\0\0\0\0\0\0";
  o.fromNumber = function(r) {
    if (r === 0)
      return e;
    var a = r < 0;
    a && (r = -r);
    var g = r >>> 0, s = (r - g) / 4294967296 >>> 0;
    return a && (s = ~s >>> 0, g = ~g >>> 0, ++g > 4294967295 && (g = 0, ++s > 4294967295 && (s = 0))), new o(g, s);
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
      var a = ~this.lo + 1 >>> 0, g = ~this.hi >>> 0;
      return a || (g = g + 1 >>> 0), -(a + g * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  }, o.prototype.toLong = function(r) {
    return t.Long ? new t.Long(this.lo | 0, this.hi | 0, !!r) : { low: this.lo | 0, high: this.hi | 0, unsigned: !!r };
  };
  var i = String.prototype.charCodeAt;
  return o.fromHash = function(r) {
    return r === n ? e : new o(
      (i.call(r, 0) | i.call(r, 1) << 8 | i.call(r, 2) << 16 | i.call(r, 3) << 24) >>> 0,
      (i.call(r, 4) | i.call(r, 5) << 8 | i.call(r, 6) << 16 | i.call(r, 7) << 24) >>> 0
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
    var r = this.lo, a = (this.lo >>> 28 | this.hi << 4) >>> 0, g = this.hi >>> 24;
    return g === 0 ? a === 0 ? r < 16384 ? r < 128 ? 1 : 2 : r < 2097152 ? 3 : 4 : a < 16384 ? a < 128 ? 5 : 6 : a < 2097152 ? 7 : 8 : g < 128 ? 9 : 10;
  }, fo;
}
var ja;
function Rt() {
  return ja || (ja = 1, function(t) {
    var o = t;
    o.asPromise = dl, o.base64 = vs, o.EventEmitter = fl, o.float = pl, o.inquire = hl, o.utf8 = ws, o.pool = bl, o.LongBits = vl(), o.isNode = !!(typeof yt < "u" && yt && yt.process && yt.process.versions && yt.process.versions.node), o.global = o.isNode && yt || typeof window < "u" && window || typeof self < "u" && self || yt, o.emptyArray = Object.freeze ? Object.freeze([]) : (
      /* istanbul ignore next */
      []
    ), o.emptyObject = Object.freeze ? Object.freeze({}) : (
      /* istanbul ignore next */
      {}
    ), o.isInteger = Number.isInteger || /* istanbul ignore next */
    function(i) {
      return typeof i == "number" && isFinite(i) && Math.floor(i) === i;
    }, o.isString = function(i) {
      return typeof i == "string" || i instanceof String;
    }, o.isObject = function(i) {
      return i && typeof i == "object";
    }, o.isset = /**
    * Checks if a property on a message is considered to be present.
    * @param {Object} obj Plain object or message instance
    * @param {string} prop Property name
    * @returns {boolean} `true` if considered to be present, otherwise `false`
    */
    o.isSet = function(i, r) {
      var a = i[r];
      return a != null && i.hasOwnProperty(r) ? typeof a != "object" || (Array.isArray(a) ? a.length : Object.keys(a).length) > 0 : !1;
    }, o.Buffer = function() {
      try {
        var i = o.inquire("buffer").Buffer;
        return i.prototype.utf8Write ? i : (
          /* istanbul ignore next */
          null
        );
      } catch {
        return null;
      }
    }(), o._Buffer_from = null, o._Buffer_allocUnsafe = null, o.newBuffer = function(i) {
      return typeof i == "number" ? o.Buffer ? o._Buffer_allocUnsafe(i) : new o.Array(i) : o.Buffer ? o._Buffer_from(i) : typeof Uint8Array > "u" ? i : new Uint8Array(i);
    }, o.Array = typeof Uint8Array < "u" ? Uint8Array : Array, o.Long = /* istanbul ignore next */
    o.global.dcodeIO && /* istanbul ignore next */
    o.global.dcodeIO.Long || /* istanbul ignore next */
    o.global.Long || o.inquire("long"), o.key2Re = /^true|false|0|1$/, o.key32Re = /^-?(?:0|[1-9][0-9]*)$/, o.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, o.longToHash = function(i) {
      return i ? o.LongBits.from(i).toHash() : o.LongBits.zeroHash;
    }, o.longFromHash = function(i, r) {
      var a = o.LongBits.fromHash(i);
      return o.Long ? o.Long.fromBits(a.lo, a.hi, r) : a.toNumber(!!r);
    };
    function e(i, r, a) {
      for (var g = Object.keys(r), s = 0; s < g.length; ++s)
        (i[g[s]] === void 0 || !a) && (i[g[s]] = r[g[s]]);
      return i;
    }
    o.merge = e, o.lcFirst = function(i) {
      return i.charAt(0).toLowerCase() + i.substring(1);
    };
    function n(i) {
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
            return i;
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
    o.newError = n, o.ProtocolError = n("ProtocolError"), o.oneOfGetter = function(i) {
      for (var r = {}, a = 0; a < i.length; ++a)
        r[i[a]] = 1;
      return function() {
        for (var g = Object.keys(this), s = g.length - 1; s > -1; --s)
          if (r[g[s]] === 1 && this[g[s]] !== void 0 && this[g[s]] !== null)
            return g[s];
      };
    }, o.oneOfSetter = function(i) {
      return function(r) {
        for (var a = 0; a < i.length; ++a)
          i[a] !== r && delete this[i[a]];
      };
    }, o.toJSONOptions = {
      longs: String,
      enums: String,
      bytes: String,
      json: !0
    }, o._configure = function() {
      var i = o.Buffer;
      if (!i) {
        o._Buffer_from = o._Buffer_allocUnsafe = null;
        return;
      }
      o._Buffer_from = i.from !== Uint8Array.from && i.from || /* istanbul ignore next */
      function(r, a) {
        return new i(r, a);
      }, o._Buffer_allocUnsafe = i.allocUnsafe || /* istanbul ignore next */
      function(r) {
        return new i(r);
      };
    };
  }(Pa)), Pa;
}
var Bs = D, Oe = Rt(), Uo, Di = Oe.LongBits, Ma = Oe.base64, Ua = Oe.utf8;
function Nn(t, o, e) {
  this.fn = t, this.len = o, this.next = void 0, this.val = e;
}
function Ar() {
}
function wl(t) {
  this.head = t.head, this.tail = t.tail, this.len = t.len, this.next = t.states;
}
function D() {
  this.len = 0, this.head = new Nn(Ar, 0, 0), this.tail = this.head, this.states = null;
}
var Ss = function() {
  return Oe.Buffer ? function() {
    return (D.create = function() {
      return new Uo();
    })();
  } : function() {
    return new D();
  };
};
D.create = Ss();
D.alloc = function(t) {
  return new Oe.Array(t);
};
Oe.Array !== Array && (D.alloc = Oe.pool(D.alloc, Oe.Array.prototype.subarray));
D.prototype._push = function(t, o, e) {
  return this.tail = this.tail.next = new Nn(t, o, e), this.len += o, this;
};
function fr(t, o, e) {
  o[e] = t & 255;
}
function Bl(t, o, e) {
  for (; t > 127; )
    o[e++] = t & 127 | 128, t >>>= 7;
  o[e] = t;
}
function pr(t, o) {
  this.len = t, this.next = void 0, this.val = o;
}
pr.prototype = Object.create(Nn.prototype);
pr.prototype.fn = Bl;
D.prototype.uint32 = function(t) {
  return this.len += (this.tail = this.tail.next = new pr(
    (t = t >>> 0) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : 5,
    t
  )).len, this;
};
D.prototype.int32 = function(t) {
  return t < 0 ? this._push(hr, 10, Di.fromNumber(t)) : this.uint32(t);
};
D.prototype.sint32 = function(t) {
  return this.uint32((t << 1 ^ t >> 31) >>> 0);
};
function hr(t, o, e) {
  for (; t.hi; )
    o[e++] = t.lo & 127 | 128, t.lo = (t.lo >>> 7 | t.hi << 25) >>> 0, t.hi >>>= 7;
  for (; t.lo > 127; )
    o[e++] = t.lo & 127 | 128, t.lo = t.lo >>> 7;
  o[e++] = t.lo;
}
D.prototype.uint64 = function(t) {
  var o = Di.from(t);
  return this._push(hr, o.length(), o);
};
D.prototype.int64 = D.prototype.uint64;
D.prototype.sint64 = function(t) {
  var o = Di.from(t).zzEncode();
  return this._push(hr, o.length(), o);
};
D.prototype.bool = function(t) {
  return this._push(fr, 1, t ? 1 : 0);
};
function Jo(t, o, e) {
  o[e] = t & 255, o[e + 1] = t >>> 8 & 255, o[e + 2] = t >>> 16 & 255, o[e + 3] = t >>> 24;
}
D.prototype.fixed32 = function(t) {
  return this._push(Jo, 4, t >>> 0);
};
D.prototype.sfixed32 = D.prototype.fixed32;
D.prototype.fixed64 = function(t) {
  var o = Di.from(t);
  return this._push(Jo, 4, o.lo)._push(Jo, 4, o.hi);
};
D.prototype.sfixed64 = D.prototype.fixed64;
D.prototype.float = function(t) {
  return this._push(Oe.float.writeFloatLE, 4, t);
};
D.prototype.double = function(t) {
  return this._push(Oe.float.writeDoubleLE, 8, t);
};
var Sl = Oe.Array.prototype.set ? function(t, o, e) {
  o.set(t, e);
} : function(t, o, e) {
  for (var n = 0; n < t.length; ++n)
    o[e + n] = t[n];
};
D.prototype.bytes = function(t) {
  var o = t.length >>> 0;
  if (!o)
    return this._push(fr, 1, 0);
  if (Oe.isString(t)) {
    var e = D.alloc(o = Ma.length(t));
    Ma.decode(t, e, 0), t = e;
  }
  return this.uint32(o)._push(Sl, o, t);
};
D.prototype.string = function(t) {
  var o = Ua.length(t);
  return o ? this.uint32(o)._push(Ua.write, o, t) : this._push(fr, 1, 0);
};
D.prototype.fork = function() {
  return this.states = new wl(this), this.head = this.tail = new Nn(Ar, 0, 0), this.len = 0, this;
};
D.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Nn(Ar, 0, 0), this.len = 0), this;
};
D.prototype.ldelim = function() {
  var t = this.head, o = this.tail, e = this.len;
  return this.reset().uint32(e), e && (this.tail.next = t.next, this.tail = o, this.len += e), this;
};
D.prototype.finish = function() {
  for (var t = this.head.next, o = this.constructor.alloc(this.len), e = 0; t; )
    t.fn(t.val, o, e), e += t.len, t = t.next;
  return o;
};
D._configure = function(t) {
  Uo = t, D.create = Ss(), Uo._configure();
};
var Gl = Qe, Gs = Bs;
(Qe.prototype = Object.create(Gs.prototype)).constructor = Qe;
var Ct = Rt();
function Qe() {
  Gs.call(this);
}
Qe._configure = function() {
  Qe.alloc = Ct._Buffer_allocUnsafe, Qe.writeBytesBuffer = Ct.Buffer && Ct.Buffer.prototype instanceof Uint8Array && Ct.Buffer.prototype.set.name === "set" ? function(t, o, e) {
    o.set(t, e);
  } : function(t, o, e) {
    if (t.copy)
      t.copy(o, e, 0, t.length);
    else
      for (var n = 0; n < t.length; )
        o[e++] = t[n++];
  };
};
Qe.prototype.bytes = function(t) {
  Ct.isString(t) && (t = Ct._Buffer_from(t, "base64"));
  var o = t.length >>> 0;
  return this.uint32(o), o && this._push(Qe.writeBytesBuffer, o, t), this;
};
function Zl(t, o, e) {
  t.length < 40 ? Ct.utf8.write(t, o, e) : o.utf8Write ? o.utf8Write(t, e) : o.write(t, e);
}
Qe.prototype.string = function(t) {
  var o = Ct.Buffer.byteLength(t);
  return this.uint32(o), o && this._push(Zl, o, t), this;
};
Qe._configure();
var Zs = oe, ze = Rt(), Qo, ks = ze.LongBits, kl = ze.utf8;
function Fe(t, o) {
  return RangeError("index out of range: " + t.pos + " + " + (o || 1) + " > " + t.len);
}
function oe(t) {
  this.buf = t, this.pos = 0, this.len = t.length;
}
var Ja = typeof Uint8Array < "u" ? function(t) {
  if (t instanceof Uint8Array || Array.isArray(t))
    return new oe(t);
  throw Error("illegal buffer");
} : function(t) {
  if (Array.isArray(t))
    return new oe(t);
  throw Error("illegal buffer");
}, Ks = function() {
  return ze.Buffer ? function(t) {
    return (oe.create = function(o) {
      return ze.Buffer.isBuffer(o) ? new Qo(o) : Ja(o);
    })(t);
  } : Ja;
};
oe.create = Ks();
oe.prototype._slice = ze.Array.prototype.subarray || /* istanbul ignore next */
ze.Array.prototype.slice;
oe.prototype.uint32 = /* @__PURE__ */ function() {
  var t = 4294967295;
  return function() {
    if (t = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (t = (t | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (t = (t | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (t = (t | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (t = (t | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return t;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, Fe(this, 10);
    return t;
  };
}();
oe.prototype.int32 = function() {
  return this.uint32() | 0;
};
oe.prototype.sint32 = function() {
  var t = this.uint32();
  return t >>> 1 ^ -(t & 1) | 0;
};
function po() {
  var t = new ks(0, 0), o = 0;
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
        throw Fe(this);
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
        throw Fe(this);
      if (t.hi = (t.hi | (this.buf[this.pos] & 127) << o * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return t;
    }
  throw Error("invalid varint encoding");
}
oe.prototype.bool = function() {
  return this.uint32() !== 0;
};
function Gi(t, o) {
  return (t[o - 4] | t[o - 3] << 8 | t[o - 2] << 16 | t[o - 1] << 24) >>> 0;
}
oe.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw Fe(this, 4);
  return Gi(this.buf, this.pos += 4);
};
oe.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw Fe(this, 4);
  return Gi(this.buf, this.pos += 4) | 0;
};
function Qa() {
  if (this.pos + 8 > this.len)
    throw Fe(this, 8);
  return new ks(Gi(this.buf, this.pos += 4), Gi(this.buf, this.pos += 4));
}
oe.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw Fe(this, 4);
  var t = ze.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, t;
};
oe.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw Fe(this, 4);
  var t = ze.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, t;
};
oe.prototype.bytes = function() {
  var t = this.uint32(), o = this.pos, e = this.pos + t;
  if (e > this.len)
    throw Fe(this, t);
  return this.pos += t, Array.isArray(this.buf) ? this.buf.slice(o, e) : o === e ? new this.buf.constructor(0) : this._slice.call(this.buf, o, e);
};
oe.prototype.string = function() {
  var t = this.bytes();
  return kl.read(t, 0, t.length);
};
oe.prototype.skip = function(t) {
  if (typeof t == "number") {
    if (this.pos + t > this.len)
      throw Fe(this, t);
    this.pos += t;
  } else
    do
      if (this.pos >= this.len)
        throw Fe(this);
    while (this.buf[this.pos++] & 128);
  return this;
};
oe.prototype.skipType = function(t) {
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
oe._configure = function(t) {
  Qo = t, oe.create = Ks(), Qo._configure();
  var o = ze.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  ze.merge(oe.prototype, {
    int64: function() {
      return po.call(this)[o](!1);
    },
    uint64: function() {
      return po.call(this)[o](!0);
    },
    sint64: function() {
      return po.call(this).zzDecode()[o](!1);
    },
    fixed64: function() {
      return Qa.call(this)[o](!0);
    },
    sfixed64: function() {
      return Qa.call(this)[o](!1);
    }
  });
};
var Kl = Ot, Hs = Zs;
(Ot.prototype = Object.create(Hs.prototype)).constructor = Ot;
var za = Rt();
function Ot(t) {
  Hs.call(this, t);
}
Ot._configure = function() {
  za.Buffer && (Ot.prototype._slice = za.Buffer.prototype.slice);
};
Ot.prototype.string = function() {
  var t = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + t, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + t, this.len));
};
Ot._configure();
var Ws = {}, Hl = On, mr = Rt();
(On.prototype = Object.create(mr.EventEmitter.prototype)).constructor = On;
function On(t, o, e) {
  if (typeof t != "function")
    throw TypeError("rpcImpl must be a function");
  mr.EventEmitter.call(this), this.rpcImpl = t, this.requestDelimited = !!o, this.responseDelimited = !!e;
}
On.prototype.rpcCall = function t(o, e, n, i, r) {
  if (!i)
    throw TypeError("request must be specified");
  var a = this;
  if (!r)
    return mr.asPromise(t, a, o, e, n, i);
  if (!a.rpcImpl) {
    setTimeout(function() {
      r(Error("already ended"));
    }, 0);
    return;
  }
  try {
    return a.rpcImpl(
      o,
      e[a.requestDelimited ? "encodeDelimited" : "encode"](i).finish(),
      function(g, s) {
        if (g)
          return a.emit("error", g, o), r(g);
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
            return a.emit("error", x, o), r(x);
          }
        return a.emit("data", s, o), r(null, s);
      }
    );
  } catch (g) {
    a.emit("error", g, o), setTimeout(function() {
      r(g);
    }, 0);
    return;
  }
};
On.prototype.end = function(t) {
  return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(t) {
  var o = t;
  o.Service = Hl;
})(Ws);
var Wl = {};
(function(t) {
  var o = t;
  o.build = "minimal", o.Writer = Bs, o.BufferWriter = Gl, o.Reader = Zs, o.BufferReader = Kl, o.util = Rt(), o.rpc = Ws, o.roots = Wl, o.configure = e;
  function e() {
    o.util._configure(), o.Writer._configure(o.BufferWriter), o.Reader._configure(o.BufferReader);
  }
  e();
})(ys);
var ne = ys;
const B = ne.Reader, de = ne.Writer, h = ne.util, d = ne.roots.default || (ne.roots.default = {}), Vt = d.dot = (() => {
  const t = {};
  return t.Content = function() {
    function o(e) {
      if (e)
        for (let n = Object.keys(e), i = 0; i < n.length; ++i)
          e[n[i]] != null && (this[n[i]] = e[n[i]]);
    }
    return o.prototype.token = h.newBuffer([]), o.prototype.iv = h.newBuffer([]), o.prototype.schemaVersion = 0, o.prototype.bytes = h.newBuffer([]), o.create = function(e) {
      return new o(e);
    }, o.encode = function(e, n) {
      return n || (n = de.create()), e.token != null && Object.hasOwnProperty.call(e, "token") && n.uint32(
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
    }, o.encodeDelimited = function(e, n) {
      return this.encode(e, n).ldelim();
    }, o.decode = function(e, n) {
      e instanceof B || (e = B.create(e));
      let i = n === void 0 ? e.len : e.pos + n, r = new d.dot.Content();
      for (; e.pos < i; ) {
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
      let n = new d.dot.Content();
      return e.token != null && (typeof e.token == "string" ? h.base64.decode(e.token, n.token = h.newBuffer(h.base64.length(e.token)), 0) : e.token.length >= 0 && (n.token = e.token)), e.iv != null && (typeof e.iv == "string" ? h.base64.decode(e.iv, n.iv = h.newBuffer(h.base64.length(e.iv)), 0) : e.iv.length >= 0 && (n.iv = e.iv)), e.schemaVersion != null && (n.schemaVersion = e.schemaVersion | 0), e.bytes != null && (typeof e.bytes == "string" ? h.base64.decode(e.bytes, n.bytes = h.newBuffer(h.base64.length(e.bytes)), 0) : e.bytes.length >= 0 && (n.bytes = e.bytes)), n;
    }, o.toObject = function(e, n) {
      n || (n = {});
      let i = {};
      return n.defaults && (n.bytes === String ? i.token = "" : (i.token = [], n.bytes !== Array && (i.token = h.newBuffer(i.token))), n.bytes === String ? i.iv = "" : (i.iv = [], n.bytes !== Array && (i.iv = h.newBuffer(i.iv))), i.schemaVersion = 0, n.bytes === String ? i.bytes = "" : (i.bytes = [], n.bytes !== Array && (i.bytes = h.newBuffer(i.bytes)))), e.token != null && e.hasOwnProperty("token") && (i.token = n.bytes === String ? h.base64.encode(e.token, 0, e.token.length) : n.bytes === Array ? Array.prototype.slice.call(e.token) : e.token), e.iv != null && e.hasOwnProperty("iv") && (i.iv = n.bytes === String ? h.base64.encode(e.iv, 0, e.iv.length) : n.bytes === Array ? Array.prototype.slice.call(e.iv) : e.iv), e.schemaVersion != null && e.hasOwnProperty("schemaVersion") && (i.schemaVersion = e.schemaVersion), e.bytes != null && e.hasOwnProperty("bytes") && (i.bytes = n.bytes === String ? h.base64.encode(e.bytes, 0, e.bytes.length) : n.bytes === Array ? Array.prototype.slice.call(e.bytes) : e.bytes), i;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, ne.util.toJSONOptions);
    }, o.getTypeUrl = function(e) {
      return e === void 0 && (e = "type.googleapis.com"), e + "/dot.Content";
    }, o;
  }(), t.v3 = function() {
    const o = {};
    return o.MagnifEyeLivenessContent = function() {
      function e(n) {
        if (this.images = [], n)
          for (let i = Object.keys(n), r = 0; r < i.length; ++r)
            n[i[r]] != null && (this[i[r]] = n[i[r]]);
      }
      return e.prototype.images = h.emptyArray, e.prototype.metadata = null, e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, i) {
        if (i || (i = de.create()), n.images != null && n.images.length)
          for (let r = 0; r < n.images.length; ++r)
            d.dot.Image.encode(n.images[r], i.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return n.metadata != null && Object.hasOwnProperty.call(n, "metadata") && d.dot.v3.Metadata.encode(n.metadata, i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), i;
      }, e.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, e.decode = function(n, i) {
        n instanceof B || (n = B.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new d.dot.v3.MagnifEyeLivenessContent();
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
        return n instanceof B || (n = new B(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.images != null && n.hasOwnProperty("images")) {
          if (!Array.isArray(n.images))
            return "images: array expected";
          for (let i = 0; i < n.images.length; ++i) {
            let r = d.dot.Image.verify(n.images[i]);
            if (r)
              return "images." + r;
          }
        }
        if (n.metadata != null && n.hasOwnProperty("metadata")) {
          let i = d.dot.v3.Metadata.verify(n.metadata);
          if (i)
            return "metadata." + i;
        }
        return null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.MagnifEyeLivenessContent)
          return n;
        let i = new d.dot.v3.MagnifEyeLivenessContent();
        if (n.images) {
          if (!Array.isArray(n.images))
            throw TypeError(".dot.v3.MagnifEyeLivenessContent.images: array expected");
          i.images = [];
          for (let r = 0; r < n.images.length; ++r) {
            if (typeof n.images[r] != "object")
              throw TypeError(".dot.v3.MagnifEyeLivenessContent.images: object expected");
            i.images[r] = d.dot.Image.fromObject(n.images[r]);
          }
        }
        if (n.metadata != null) {
          if (typeof n.metadata != "object")
            throw TypeError(".dot.v3.MagnifEyeLivenessContent.metadata: object expected");
          i.metadata = d.dot.v3.Metadata.fromObject(n.metadata);
        }
        return i;
      }, e.toObject = function(n, i) {
        i || (i = {});
        let r = {};
        if ((i.arrays || i.defaults) && (r.images = []), i.defaults && (r.metadata = null), n.images && n.images.length) {
          r.images = [];
          for (let a = 0; a < n.images.length; ++a)
            r.images[a] = d.dot.Image.toObject(n.images[a], i);
        }
        return n.metadata != null && n.hasOwnProperty("metadata") && (r.metadata = d.dot.v3.Metadata.toObject(n.metadata, i)), r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.MagnifEyeLivenessContent";
      }, e;
    }(), o.Metadata = function() {
      function e(i) {
        if (i)
          for (let r = Object.keys(i), a = 0; a < r.length; ++a)
            i[r[a]] != null && (this[r[a]] = i[r[a]]);
      }
      e.prototype.platform = 0, e.prototype.sessionToken = null, e.prototype.web = null, e.prototype.android = null, e.prototype.ios = null;
      let n;
      return Object.defineProperty(e.prototype, "_sessionToken", {
        get: h.oneOfGetter(n = ["sessionToken"]),
        set: h.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "metadata", {
        get: h.oneOfGetter(n = ["web", "android", "ios"]),
        set: h.oneOfSetter(n)
      }), e.create = function(i) {
        return new e(i);
      }, e.encode = function(i, r) {
        return r || (r = de.create()), i.platform != null && Object.hasOwnProperty.call(i, "platform") && r.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(i.platform), i.web != null && Object.hasOwnProperty.call(i, "web") && d.dot.v3.WebMetadata.encode(i.web, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), i.android != null && Object.hasOwnProperty.call(i, "android") && d.dot.v3.AndroidMetadata.encode(i.android, r.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), i.ios != null && Object.hasOwnProperty.call(i, "ios") && d.dot.v3.IosMetadata.encode(i.ios, r.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), i.sessionToken != null && Object.hasOwnProperty.call(i, "sessionToken") && r.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(i.sessionToken), r;
      }, e.encodeDelimited = function(i, r) {
        return this.encode(i, r).ldelim();
      }, e.decode = function(i, r) {
        i instanceof B || (i = B.create(i));
        let a = r === void 0 ? i.len : i.pos + r, g = new d.dot.v3.Metadata();
        for (; i.pos < a; ) {
          let s = i.uint32();
          switch (s >>> 3) {
            case 1: {
              g.platform = i.int32();
              break;
            }
            case 5: {
              g.sessionToken = i.string();
              break;
            }
            case 2: {
              g.web = d.dot.v3.WebMetadata.decode(i, i.uint32());
              break;
            }
            case 3: {
              g.android = d.dot.v3.AndroidMetadata.decode(i, i.uint32());
              break;
            }
            case 4: {
              g.ios = d.dot.v3.IosMetadata.decode(i, i.uint32());
              break;
            }
            default:
              i.skipType(s & 7);
              break;
          }
        }
        return g;
      }, e.decodeDelimited = function(i) {
        return i instanceof B || (i = new B(i)), this.decode(i, i.uint32());
      }, e.verify = function(i) {
        if (typeof i != "object" || i === null)
          return "object expected";
        let r = {};
        if (i.platform != null && i.hasOwnProperty("platform"))
          switch (i.platform) {
            default:
              return "platform: enum value expected";
            case 0:
            case 1:
            case 2:
              break;
          }
        if (i.sessionToken != null && i.hasOwnProperty("sessionToken") && (r._sessionToken = 1, !h.isString(i.sessionToken)))
          return "sessionToken: string expected";
        if (i.web != null && i.hasOwnProperty("web")) {
          r.metadata = 1;
          {
            let a = d.dot.v3.WebMetadata.verify(i.web);
            if (a)
              return "web." + a;
          }
        }
        if (i.android != null && i.hasOwnProperty("android")) {
          if (r.metadata === 1)
            return "metadata: multiple values";
          r.metadata = 1;
          {
            let a = d.dot.v3.AndroidMetadata.verify(i.android);
            if (a)
              return "android." + a;
          }
        }
        if (i.ios != null && i.hasOwnProperty("ios")) {
          if (r.metadata === 1)
            return "metadata: multiple values";
          r.metadata = 1;
          {
            let a = d.dot.v3.IosMetadata.verify(i.ios);
            if (a)
              return "ios." + a;
          }
        }
        return null;
      }, e.fromObject = function(i) {
        if (i instanceof d.dot.v3.Metadata)
          return i;
        let r = new d.dot.v3.Metadata();
        switch (i.platform) {
          default:
            if (typeof i.platform == "number") {
              r.platform = i.platform;
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
        if (i.sessionToken != null && (r.sessionToken = String(i.sessionToken)), i.web != null) {
          if (typeof i.web != "object")
            throw TypeError(".dot.v3.Metadata.web: object expected");
          r.web = d.dot.v3.WebMetadata.fromObject(i.web);
        }
        if (i.android != null) {
          if (typeof i.android != "object")
            throw TypeError(".dot.v3.Metadata.android: object expected");
          r.android = d.dot.v3.AndroidMetadata.fromObject(i.android);
        }
        if (i.ios != null) {
          if (typeof i.ios != "object")
            throw TypeError(".dot.v3.Metadata.ios: object expected");
          r.ios = d.dot.v3.IosMetadata.fromObject(i.ios);
        }
        return r;
      }, e.toObject = function(i, r) {
        r || (r = {});
        let a = {};
        return r.defaults && (a.platform = r.enums === String ? "WEB" : 0), i.platform != null && i.hasOwnProperty("platform") && (a.platform = r.enums === String ? d.dot.Platform[i.platform] === void 0 ? i.platform : d.dot.Platform[i.platform] : i.platform), i.web != null && i.hasOwnProperty("web") && (a.web = d.dot.v3.WebMetadata.toObject(i.web, r), r.oneofs && (a.metadata = "web")), i.android != null && i.hasOwnProperty("android") && (a.android = d.dot.v3.AndroidMetadata.toObject(i.android, r), r.oneofs && (a.metadata = "android")), i.ios != null && i.hasOwnProperty("ios") && (a.ios = d.dot.v3.IosMetadata.toObject(i.ios, r), r.oneofs && (a.metadata = "ios")), i.sessionToken != null && i.hasOwnProperty("sessionToken") && (a.sessionToken = i.sessionToken, r.oneofs && (a._sessionToken = "sessionToken")), a;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, e.getTypeUrl = function(i) {
        return i === void 0 && (i = "type.googleapis.com"), i + "/dot.v3.Metadata";
      }, e;
    }(), o.AndroidMetadata = function() {
      function e(i) {
        if (this.supportedAbis = [], this.digests = [], this.dynamicCameraFrameProperties = {}, i)
          for (let r = Object.keys(i), a = 0; a < r.length; ++a)
            i[r[a]] != null && (this[r[a]] = i[r[a]]);
      }
      e.prototype.supportedAbis = h.emptyArray, e.prototype.device = null, e.prototype.digests = h.emptyArray, e.prototype.dynamicCameraFrameProperties = h.emptyObject;
      let n;
      return Object.defineProperty(e.prototype, "_device", {
        get: h.oneOfGetter(n = ["device"]),
        set: h.oneOfSetter(n)
      }), e.create = function(i) {
        return new e(i);
      }, e.encode = function(i, r) {
        if (r || (r = de.create()), i.supportedAbis != null && i.supportedAbis.length)
          for (let a = 0; a < i.supportedAbis.length; ++a)
            r.uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(i.supportedAbis[a]);
        if (i.device != null && Object.hasOwnProperty.call(i, "device") && r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(i.device), i.digests != null && i.digests.length)
          for (let a = 0; a < i.digests.length; ++a)
            r.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(i.digests[a]);
        if (i.dynamicCameraFrameProperties != null && Object.hasOwnProperty.call(i, "dynamicCameraFrameProperties"))
          for (let a = Object.keys(i.dynamicCameraFrameProperties), g = 0; g < a.length; ++g)
            r.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(a[g]), d.dot.Int32List.encode(i.dynamicCameraFrameProperties[a[g]], r.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        return r;
      }, e.encodeDelimited = function(i, r) {
        return this.encode(i, r).ldelim();
      }, e.decode = function(i, r) {
        i instanceof B || (i = B.create(i));
        let a = r === void 0 ? i.len : i.pos + r, g = new d.dot.v3.AndroidMetadata(), s, x;
        for (; i.pos < a; ) {
          let C = i.uint32();
          switch (C >>> 3) {
            case 1: {
              g.supportedAbis && g.supportedAbis.length || (g.supportedAbis = []), g.supportedAbis.push(i.string());
              break;
            }
            case 2: {
              g.device = i.string();
              break;
            }
            case 3: {
              g.digests && g.digests.length || (g.digests = []), g.digests.push(i.bytes());
              break;
            }
            case 4: {
              g.dynamicCameraFrameProperties === h.emptyObject && (g.dynamicCameraFrameProperties = {});
              let u = i.uint32() + i.pos;
              for (s = "", x = null; i.pos < u; ) {
                let f = i.uint32();
                switch (f >>> 3) {
                  case 1:
                    s = i.string();
                    break;
                  case 2:
                    x = d.dot.Int32List.decode(i, i.uint32());
                    break;
                  default:
                    i.skipType(f & 7);
                    break;
                }
              }
              g.dynamicCameraFrameProperties[s] = x;
              break;
            }
            default:
              i.skipType(C & 7);
              break;
          }
        }
        return g;
      }, e.decodeDelimited = function(i) {
        return i instanceof B || (i = new B(i)), this.decode(i, i.uint32());
      }, e.verify = function(i) {
        if (typeof i != "object" || i === null)
          return "object expected";
        if (i.supportedAbis != null && i.hasOwnProperty("supportedAbis")) {
          if (!Array.isArray(i.supportedAbis))
            return "supportedAbis: array expected";
          for (let r = 0; r < i.supportedAbis.length; ++r)
            if (!h.isString(i.supportedAbis[r]))
              return "supportedAbis: string[] expected";
        }
        if (i.device != null && i.hasOwnProperty("device") && !h.isString(i.device))
          return "device: string expected";
        if (i.digests != null && i.hasOwnProperty("digests")) {
          if (!Array.isArray(i.digests))
            return "digests: array expected";
          for (let r = 0; r < i.digests.length; ++r)
            if (!(i.digests[r] && typeof i.digests[r].length == "number" || h.isString(i.digests[r])))
              return "digests: buffer[] expected";
        }
        if (i.dynamicCameraFrameProperties != null && i.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!h.isObject(i.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let r = Object.keys(i.dynamicCameraFrameProperties);
          for (let a = 0; a < r.length; ++a) {
            let g = d.dot.Int32List.verify(i.dynamicCameraFrameProperties[r[a]]);
            if (g)
              return "dynamicCameraFrameProperties." + g;
          }
        }
        return null;
      }, e.fromObject = function(i) {
        if (i instanceof d.dot.v3.AndroidMetadata)
          return i;
        let r = new d.dot.v3.AndroidMetadata();
        if (i.supportedAbis) {
          if (!Array.isArray(i.supportedAbis))
            throw TypeError(".dot.v3.AndroidMetadata.supportedAbis: array expected");
          r.supportedAbis = [];
          for (let a = 0; a < i.supportedAbis.length; ++a)
            r.supportedAbis[a] = String(i.supportedAbis[a]);
        }
        if (i.device != null && (r.device = String(i.device)), i.digests) {
          if (!Array.isArray(i.digests))
            throw TypeError(".dot.v3.AndroidMetadata.digests: array expected");
          r.digests = [];
          for (let a = 0; a < i.digests.length; ++a)
            typeof i.digests[a] == "string" ? h.base64.decode(i.digests[a], r.digests[a] = h.newBuffer(h.base64.length(i.digests[a])), 0) : i.digests[a].length >= 0 && (r.digests[a] = i.digests[a]);
        }
        if (i.dynamicCameraFrameProperties) {
          if (typeof i.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v3.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          r.dynamicCameraFrameProperties = {};
          for (let a = Object.keys(i.dynamicCameraFrameProperties), g = 0; g < a.length; ++g) {
            if (typeof i.dynamicCameraFrameProperties[a[g]] != "object")
              throw TypeError(".dot.v3.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            r.dynamicCameraFrameProperties[a[g]] = d.dot.Int32List.fromObject(i.dynamicCameraFrameProperties[a[g]]);
          }
        }
        return r;
      }, e.toObject = function(i, r) {
        r || (r = {});
        let a = {};
        if ((r.arrays || r.defaults) && (a.supportedAbis = [], a.digests = []), (r.objects || r.defaults) && (a.dynamicCameraFrameProperties = {}), i.supportedAbis && i.supportedAbis.length) {
          a.supportedAbis = [];
          for (let s = 0; s < i.supportedAbis.length; ++s)
            a.supportedAbis[s] = i.supportedAbis[s];
        }
        if (i.device != null && i.hasOwnProperty("device") && (a.device = i.device, r.oneofs && (a._device = "device")), i.digests && i.digests.length) {
          a.digests = [];
          for (let s = 0; s < i.digests.length; ++s)
            a.digests[s] = r.bytes === String ? h.base64.encode(i.digests[s], 0, i.digests[s].length) : r.bytes === Array ? Array.prototype.slice.call(i.digests[s]) : i.digests[s];
        }
        let g;
        if (i.dynamicCameraFrameProperties && (g = Object.keys(i.dynamicCameraFrameProperties)).length) {
          a.dynamicCameraFrameProperties = {};
          for (let s = 0; s < g.length; ++s)
            a.dynamicCameraFrameProperties[g[s]] = d.dot.Int32List.toObject(i.dynamicCameraFrameProperties[g[s]], r);
        }
        return a;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, e.getTypeUrl = function(i) {
        return i === void 0 && (i = "type.googleapis.com"), i + "/dot.v3.AndroidMetadata";
      }, e;
    }(), o.IosMetadata = function() {
      function e(n) {
        if (this.digests = [], this.isoValues = [], n)
          for (let i = Object.keys(n), r = 0; r < i.length; ++r)
            n[i[r]] != null && (this[i[r]] = n[i[r]]);
      }
      return e.prototype.device = h.newBuffer([]), e.prototype.architecture = !1, e.prototype.digests = h.emptyArray, e.prototype.isoValues = h.emptyArray, e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, i) {
        if (i || (i = de.create()), n.device != null && Object.hasOwnProperty.call(n, "device") && i.uint32(
          /* id 1, wireType 2 =*/
          10
        ).bytes(n.device), n.architecture != null && Object.hasOwnProperty.call(n, "architecture") && i.uint32(
          /* id 2, wireType 0 =*/
          16
        ).bool(n.architecture), n.digests != null && n.digests.length)
          for (let r = 0; r < n.digests.length; ++r)
            i.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(n.digests[r]);
        if (n.isoValues != null && n.isoValues.length) {
          i.uint32(
            /* id 4, wireType 2 =*/
            34
          ).fork();
          for (let r = 0; r < n.isoValues.length; ++r)
            i.int32(n.isoValues[r]);
          i.ldelim();
        }
        return i;
      }, e.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, e.decode = function(n, i) {
        n instanceof B || (n = B.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new d.dot.v3.IosMetadata();
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
        return n instanceof B || (n = new B(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.device != null && n.hasOwnProperty("device") && !(n.device && typeof n.device.length == "number" || h.isString(n.device)))
          return "device: buffer expected";
        if (n.architecture != null && n.hasOwnProperty("architecture") && typeof n.architecture != "boolean")
          return "architecture: boolean expected";
        if (n.digests != null && n.hasOwnProperty("digests")) {
          if (!Array.isArray(n.digests))
            return "digests: array expected";
          for (let i = 0; i < n.digests.length; ++i)
            if (!(n.digests[i] && typeof n.digests[i].length == "number" || h.isString(n.digests[i])))
              return "digests: buffer[] expected";
        }
        if (n.isoValues != null && n.hasOwnProperty("isoValues")) {
          if (!Array.isArray(n.isoValues))
            return "isoValues: array expected";
          for (let i = 0; i < n.isoValues.length; ++i)
            if (!h.isInteger(n.isoValues[i]))
              return "isoValues: integer[] expected";
        }
        return null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.IosMetadata)
          return n;
        let i = new d.dot.v3.IosMetadata();
        if (n.device != null && (typeof n.device == "string" ? h.base64.decode(n.device, i.device = h.newBuffer(h.base64.length(n.device)), 0) : n.device.length >= 0 && (i.device = n.device)), n.architecture != null && (i.architecture = !!n.architecture), n.digests) {
          if (!Array.isArray(n.digests))
            throw TypeError(".dot.v3.IosMetadata.digests: array expected");
          i.digests = [];
          for (let r = 0; r < n.digests.length; ++r)
            typeof n.digests[r] == "string" ? h.base64.decode(n.digests[r], i.digests[r] = h.newBuffer(h.base64.length(n.digests[r])), 0) : n.digests[r].length >= 0 && (i.digests[r] = n.digests[r]);
        }
        if (n.isoValues) {
          if (!Array.isArray(n.isoValues))
            throw TypeError(".dot.v3.IosMetadata.isoValues: array expected");
          i.isoValues = [];
          for (let r = 0; r < n.isoValues.length; ++r)
            i.isoValues[r] = n.isoValues[r] | 0;
        }
        return i;
      }, e.toObject = function(n, i) {
        i || (i = {});
        let r = {};
        if ((i.arrays || i.defaults) && (r.digests = [], r.isoValues = []), i.defaults && (i.bytes === String ? r.device = "" : (r.device = [], i.bytes !== Array && (r.device = h.newBuffer(r.device))), r.architecture = !1), n.device != null && n.hasOwnProperty("device") && (r.device = i.bytes === String ? h.base64.encode(n.device, 0, n.device.length) : i.bytes === Array ? Array.prototype.slice.call(n.device) : n.device), n.architecture != null && n.hasOwnProperty("architecture") && (r.architecture = n.architecture), n.digests && n.digests.length) {
          r.digests = [];
          for (let a = 0; a < n.digests.length; ++a)
            r.digests[a] = i.bytes === String ? h.base64.encode(n.digests[a], 0, n.digests[a].length) : i.bytes === Array ? Array.prototype.slice.call(n.digests[a]) : n.digests[a];
        }
        if (n.isoValues && n.isoValues.length) {
          r.isoValues = [];
          for (let a = 0; a < n.isoValues.length; ++a)
            r.isoValues[a] = n.isoValues[a];
        }
        return r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.IosMetadata";
      }, e;
    }(), o.WebMetadata = function() {
      function e(n) {
        if (this.availableCameraProperties = [], this.hashedDetectedImages = [], this.detectionRecord = [], n)
          for (let i = Object.keys(n), r = 0; r < i.length; ++r)
            n[i[r]] != null && (this[i[r]] = n[i[r]]);
      }
      return e.prototype.currentCameraProperties = null, e.prototype.availableCameraProperties = h.emptyArray, e.prototype.hashedDetectedImages = h.emptyArray, e.prototype.detectionRecord = h.emptyArray, e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, i) {
        if (i || (i = de.create()), n.currentCameraProperties != null && Object.hasOwnProperty.call(n, "currentCameraProperties") && d.dot.v3.MediaTrackSettings.encode(n.currentCameraProperties, i.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.availableCameraProperties != null && n.availableCameraProperties.length)
          for (let r = 0; r < n.availableCameraProperties.length; ++r)
            d.dot.v3.CameraProperties.encode(n.availableCameraProperties[r], i.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim();
        if (n.hashedDetectedImages != null && n.hashedDetectedImages.length)
          for (let r = 0; r < n.hashedDetectedImages.length; ++r)
            i.uint32(
              /* id 3, wireType 2 =*/
              26
            ).string(n.hashedDetectedImages[r]);
        if (n.detectionRecord != null && n.detectionRecord.length)
          for (let r = 0; r < n.detectionRecord.length; ++r)
            d.dot.v3.DetectedObject.encode(n.detectionRecord[r], i.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        return i;
      }, e.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, e.decode = function(n, i) {
        n instanceof B || (n = B.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new d.dot.v3.WebMetadata();
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
        return n instanceof B || (n = new B(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.currentCameraProperties != null && n.hasOwnProperty("currentCameraProperties")) {
          let i = d.dot.v3.MediaTrackSettings.verify(n.currentCameraProperties);
          if (i)
            return "currentCameraProperties." + i;
        }
        if (n.availableCameraProperties != null && n.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(n.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let i = 0; i < n.availableCameraProperties.length; ++i) {
            let r = d.dot.v3.CameraProperties.verify(n.availableCameraProperties[i]);
            if (r)
              return "availableCameraProperties." + r;
          }
        }
        if (n.hashedDetectedImages != null && n.hasOwnProperty("hashedDetectedImages")) {
          if (!Array.isArray(n.hashedDetectedImages))
            return "hashedDetectedImages: array expected";
          for (let i = 0; i < n.hashedDetectedImages.length; ++i)
            if (!h.isString(n.hashedDetectedImages[i]))
              return "hashedDetectedImages: string[] expected";
        }
        if (n.detectionRecord != null && n.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(n.detectionRecord))
            return "detectionRecord: array expected";
          for (let i = 0; i < n.detectionRecord.length; ++i) {
            let r = d.dot.v3.DetectedObject.verify(n.detectionRecord[i]);
            if (r)
              return "detectionRecord." + r;
          }
        }
        return null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.WebMetadata)
          return n;
        let i = new d.dot.v3.WebMetadata();
        if (n.currentCameraProperties != null) {
          if (typeof n.currentCameraProperties != "object")
            throw TypeError(".dot.v3.WebMetadata.currentCameraProperties: object expected");
          i.currentCameraProperties = d.dot.v3.MediaTrackSettings.fromObject(n.currentCameraProperties);
        }
        if (n.availableCameraProperties) {
          if (!Array.isArray(n.availableCameraProperties))
            throw TypeError(".dot.v3.WebMetadata.availableCameraProperties: array expected");
          i.availableCameraProperties = [];
          for (let r = 0; r < n.availableCameraProperties.length; ++r) {
            if (typeof n.availableCameraProperties[r] != "object")
              throw TypeError(".dot.v3.WebMetadata.availableCameraProperties: object expected");
            i.availableCameraProperties[r] = d.dot.v3.CameraProperties.fromObject(n.availableCameraProperties[r]);
          }
        }
        if (n.hashedDetectedImages) {
          if (!Array.isArray(n.hashedDetectedImages))
            throw TypeError(".dot.v3.WebMetadata.hashedDetectedImages: array expected");
          i.hashedDetectedImages = [];
          for (let r = 0; r < n.hashedDetectedImages.length; ++r)
            i.hashedDetectedImages[r] = String(n.hashedDetectedImages[r]);
        }
        if (n.detectionRecord) {
          if (!Array.isArray(n.detectionRecord))
            throw TypeError(".dot.v3.WebMetadata.detectionRecord: array expected");
          i.detectionRecord = [];
          for (let r = 0; r < n.detectionRecord.length; ++r) {
            if (typeof n.detectionRecord[r] != "object")
              throw TypeError(".dot.v3.WebMetadata.detectionRecord: object expected");
            i.detectionRecord[r] = d.dot.v3.DetectedObject.fromObject(n.detectionRecord[r]);
          }
        }
        return i;
      }, e.toObject = function(n, i) {
        i || (i = {});
        let r = {};
        if ((i.arrays || i.defaults) && (r.availableCameraProperties = [], r.hashedDetectedImages = [], r.detectionRecord = []), i.defaults && (r.currentCameraProperties = null), n.currentCameraProperties != null && n.hasOwnProperty("currentCameraProperties") && (r.currentCameraProperties = d.dot.v3.MediaTrackSettings.toObject(n.currentCameraProperties, i)), n.availableCameraProperties && n.availableCameraProperties.length) {
          r.availableCameraProperties = [];
          for (let a = 0; a < n.availableCameraProperties.length; ++a)
            r.availableCameraProperties[a] = d.dot.v3.CameraProperties.toObject(n.availableCameraProperties[a], i);
        }
        if (n.hashedDetectedImages && n.hashedDetectedImages.length) {
          r.hashedDetectedImages = [];
          for (let a = 0; a < n.hashedDetectedImages.length; ++a)
            r.hashedDetectedImages[a] = n.hashedDetectedImages[a];
        }
        if (n.detectionRecord && n.detectionRecord.length) {
          r.detectionRecord = [];
          for (let a = 0; a < n.detectionRecord.length; ++a)
            r.detectionRecord[a] = d.dot.v3.DetectedObject.toObject(n.detectionRecord[a], i);
        }
        return r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.WebMetadata";
      }, e;
    }(), o.MediaTrackSettings = function() {
      function e(i) {
        if (i)
          for (let r = Object.keys(i), a = 0; a < r.length; ++a)
            i[r[a]] != null && (this[r[a]] = i[r[a]]);
      }
      e.prototype.aspectRatio = null, e.prototype.autoGainControl = null, e.prototype.channelCount = null, e.prototype.deviceId = null, e.prototype.displaySurface = null, e.prototype.echoCancellation = null, e.prototype.facingMode = null, e.prototype.frameRate = null, e.prototype.groupId = null, e.prototype.height = null, e.prototype.noiseSuppression = null, e.prototype.sampleRate = null, e.prototype.sampleSize = null, e.prototype.width = null, e.prototype.deviceName = null;
      let n;
      return Object.defineProperty(e.prototype, "_aspectRatio", {
        get: h.oneOfGetter(n = ["aspectRatio"]),
        set: h.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_autoGainControl", {
        get: h.oneOfGetter(n = ["autoGainControl"]),
        set: h.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_channelCount", {
        get: h.oneOfGetter(n = ["channelCount"]),
        set: h.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_deviceId", {
        get: h.oneOfGetter(n = ["deviceId"]),
        set: h.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_displaySurface", {
        get: h.oneOfGetter(n = ["displaySurface"]),
        set: h.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_echoCancellation", {
        get: h.oneOfGetter(n = ["echoCancellation"]),
        set: h.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_facingMode", {
        get: h.oneOfGetter(n = ["facingMode"]),
        set: h.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_frameRate", {
        get: h.oneOfGetter(n = ["frameRate"]),
        set: h.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_groupId", {
        get: h.oneOfGetter(n = ["groupId"]),
        set: h.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_height", {
        get: h.oneOfGetter(n = ["height"]),
        set: h.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_noiseSuppression", {
        get: h.oneOfGetter(n = ["noiseSuppression"]),
        set: h.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_sampleRate", {
        get: h.oneOfGetter(n = ["sampleRate"]),
        set: h.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_sampleSize", {
        get: h.oneOfGetter(n = ["sampleSize"]),
        set: h.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_width", {
        get: h.oneOfGetter(n = ["width"]),
        set: h.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_deviceName", {
        get: h.oneOfGetter(n = ["deviceName"]),
        set: h.oneOfSetter(n)
      }), e.create = function(i) {
        return new e(i);
      }, e.encode = function(i, r) {
        return r || (r = de.create()), i.aspectRatio != null && Object.hasOwnProperty.call(i, "aspectRatio") && r.uint32(
          /* id 1, wireType 1 =*/
          9
        ).double(i.aspectRatio), i.autoGainControl != null && Object.hasOwnProperty.call(i, "autoGainControl") && r.uint32(
          /* id 2, wireType 0 =*/
          16
        ).bool(i.autoGainControl), i.channelCount != null && Object.hasOwnProperty.call(i, "channelCount") && r.uint32(
          /* id 3, wireType 0 =*/
          24
        ).int32(i.channelCount), i.deviceId != null && Object.hasOwnProperty.call(i, "deviceId") && r.uint32(
          /* id 4, wireType 2 =*/
          34
        ).string(i.deviceId), i.displaySurface != null && Object.hasOwnProperty.call(i, "displaySurface") && r.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(i.displaySurface), i.echoCancellation != null && Object.hasOwnProperty.call(i, "echoCancellation") && r.uint32(
          /* id 6, wireType 0 =*/
          48
        ).bool(i.echoCancellation), i.facingMode != null && Object.hasOwnProperty.call(i, "facingMode") && r.uint32(
          /* id 7, wireType 2 =*/
          58
        ).string(i.facingMode), i.frameRate != null && Object.hasOwnProperty.call(i, "frameRate") && r.uint32(
          /* id 8, wireType 1 =*/
          65
        ).double(i.frameRate), i.groupId != null && Object.hasOwnProperty.call(i, "groupId") && r.uint32(
          /* id 9, wireType 2 =*/
          74
        ).string(i.groupId), i.height != null && Object.hasOwnProperty.call(i, "height") && r.uint32(
          /* id 10, wireType 0 =*/
          80
        ).int32(i.height), i.noiseSuppression != null && Object.hasOwnProperty.call(i, "noiseSuppression") && r.uint32(
          /* id 11, wireType 0 =*/
          88
        ).bool(i.noiseSuppression), i.sampleRate != null && Object.hasOwnProperty.call(i, "sampleRate") && r.uint32(
          /* id 12, wireType 0 =*/
          96
        ).int32(i.sampleRate), i.sampleSize != null && Object.hasOwnProperty.call(i, "sampleSize") && r.uint32(
          /* id 13, wireType 0 =*/
          104
        ).int32(i.sampleSize), i.width != null && Object.hasOwnProperty.call(i, "width") && r.uint32(
          /* id 14, wireType 0 =*/
          112
        ).int32(i.width), i.deviceName != null && Object.hasOwnProperty.call(i, "deviceName") && r.uint32(
          /* id 15, wireType 2 =*/
          122
        ).string(i.deviceName), r;
      }, e.encodeDelimited = function(i, r) {
        return this.encode(i, r).ldelim();
      }, e.decode = function(i, r) {
        i instanceof B || (i = B.create(i));
        let a = r === void 0 ? i.len : i.pos + r, g = new d.dot.v3.MediaTrackSettings();
        for (; i.pos < a; ) {
          let s = i.uint32();
          switch (s >>> 3) {
            case 1: {
              g.aspectRatio = i.double();
              break;
            }
            case 2: {
              g.autoGainControl = i.bool();
              break;
            }
            case 3: {
              g.channelCount = i.int32();
              break;
            }
            case 4: {
              g.deviceId = i.string();
              break;
            }
            case 5: {
              g.displaySurface = i.string();
              break;
            }
            case 6: {
              g.echoCancellation = i.bool();
              break;
            }
            case 7: {
              g.facingMode = i.string();
              break;
            }
            case 8: {
              g.frameRate = i.double();
              break;
            }
            case 9: {
              g.groupId = i.string();
              break;
            }
            case 10: {
              g.height = i.int32();
              break;
            }
            case 11: {
              g.noiseSuppression = i.bool();
              break;
            }
            case 12: {
              g.sampleRate = i.int32();
              break;
            }
            case 13: {
              g.sampleSize = i.int32();
              break;
            }
            case 14: {
              g.width = i.int32();
              break;
            }
            case 15: {
              g.deviceName = i.string();
              break;
            }
            default:
              i.skipType(s & 7);
              break;
          }
        }
        return g;
      }, e.decodeDelimited = function(i) {
        return i instanceof B || (i = new B(i)), this.decode(i, i.uint32());
      }, e.verify = function(i) {
        return typeof i != "object" || i === null ? "object expected" : i.aspectRatio != null && i.hasOwnProperty("aspectRatio") && typeof i.aspectRatio != "number" ? "aspectRatio: number expected" : i.autoGainControl != null && i.hasOwnProperty("autoGainControl") && typeof i.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : i.channelCount != null && i.hasOwnProperty("channelCount") && !h.isInteger(i.channelCount) ? "channelCount: integer expected" : i.deviceId != null && i.hasOwnProperty("deviceId") && !h.isString(i.deviceId) ? "deviceId: string expected" : i.displaySurface != null && i.hasOwnProperty("displaySurface") && !h.isString(i.displaySurface) ? "displaySurface: string expected" : i.echoCancellation != null && i.hasOwnProperty("echoCancellation") && typeof i.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : i.facingMode != null && i.hasOwnProperty("facingMode") && !h.isString(i.facingMode) ? "facingMode: string expected" : i.frameRate != null && i.hasOwnProperty("frameRate") && typeof i.frameRate != "number" ? "frameRate: number expected" : i.groupId != null && i.hasOwnProperty("groupId") && !h.isString(i.groupId) ? "groupId: string expected" : i.height != null && i.hasOwnProperty("height") && !h.isInteger(i.height) ? "height: integer expected" : i.noiseSuppression != null && i.hasOwnProperty("noiseSuppression") && typeof i.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : i.sampleRate != null && i.hasOwnProperty("sampleRate") && !h.isInteger(i.sampleRate) ? "sampleRate: integer expected" : i.sampleSize != null && i.hasOwnProperty("sampleSize") && !h.isInteger(i.sampleSize) ? "sampleSize: integer expected" : i.width != null && i.hasOwnProperty("width") && !h.isInteger(i.width) ? "width: integer expected" : i.deviceName != null && i.hasOwnProperty("deviceName") && !h.isString(i.deviceName) ? "deviceName: string expected" : null;
      }, e.fromObject = function(i) {
        if (i instanceof d.dot.v3.MediaTrackSettings)
          return i;
        let r = new d.dot.v3.MediaTrackSettings();
        return i.aspectRatio != null && (r.aspectRatio = Number(i.aspectRatio)), i.autoGainControl != null && (r.autoGainControl = !!i.autoGainControl), i.channelCount != null && (r.channelCount = i.channelCount | 0), i.deviceId != null && (r.deviceId = String(i.deviceId)), i.displaySurface != null && (r.displaySurface = String(i.displaySurface)), i.echoCancellation != null && (r.echoCancellation = !!i.echoCancellation), i.facingMode != null && (r.facingMode = String(i.facingMode)), i.frameRate != null && (r.frameRate = Number(i.frameRate)), i.groupId != null && (r.groupId = String(i.groupId)), i.height != null && (r.height = i.height | 0), i.noiseSuppression != null && (r.noiseSuppression = !!i.noiseSuppression), i.sampleRate != null && (r.sampleRate = i.sampleRate | 0), i.sampleSize != null && (r.sampleSize = i.sampleSize | 0), i.width != null && (r.width = i.width | 0), i.deviceName != null && (r.deviceName = String(i.deviceName)), r;
      }, e.toObject = function(i, r) {
        r || (r = {});
        let a = {};
        return i.aspectRatio != null && i.hasOwnProperty("aspectRatio") && (a.aspectRatio = r.json && !isFinite(i.aspectRatio) ? String(i.aspectRatio) : i.aspectRatio, r.oneofs && (a._aspectRatio = "aspectRatio")), i.autoGainControl != null && i.hasOwnProperty("autoGainControl") && (a.autoGainControl = i.autoGainControl, r.oneofs && (a._autoGainControl = "autoGainControl")), i.channelCount != null && i.hasOwnProperty("channelCount") && (a.channelCount = i.channelCount, r.oneofs && (a._channelCount = "channelCount")), i.deviceId != null && i.hasOwnProperty("deviceId") && (a.deviceId = i.deviceId, r.oneofs && (a._deviceId = "deviceId")), i.displaySurface != null && i.hasOwnProperty("displaySurface") && (a.displaySurface = i.displaySurface, r.oneofs && (a._displaySurface = "displaySurface")), i.echoCancellation != null && i.hasOwnProperty("echoCancellation") && (a.echoCancellation = i.echoCancellation, r.oneofs && (a._echoCancellation = "echoCancellation")), i.facingMode != null && i.hasOwnProperty("facingMode") && (a.facingMode = i.facingMode, r.oneofs && (a._facingMode = "facingMode")), i.frameRate != null && i.hasOwnProperty("frameRate") && (a.frameRate = r.json && !isFinite(i.frameRate) ? String(i.frameRate) : i.frameRate, r.oneofs && (a._frameRate = "frameRate")), i.groupId != null && i.hasOwnProperty("groupId") && (a.groupId = i.groupId, r.oneofs && (a._groupId = "groupId")), i.height != null && i.hasOwnProperty("height") && (a.height = i.height, r.oneofs && (a._height = "height")), i.noiseSuppression != null && i.hasOwnProperty("noiseSuppression") && (a.noiseSuppression = i.noiseSuppression, r.oneofs && (a._noiseSuppression = "noiseSuppression")), i.sampleRate != null && i.hasOwnProperty("sampleRate") && (a.sampleRate = i.sampleRate, r.oneofs && (a._sampleRate = "sampleRate")), i.sampleSize != null && i.hasOwnProperty("sampleSize") && (a.sampleSize = i.sampleSize, r.oneofs && (a._sampleSize = "sampleSize")), i.width != null && i.hasOwnProperty("width") && (a.width = i.width, r.oneofs && (a._width = "width")), i.deviceName != null && i.hasOwnProperty("deviceName") && (a.deviceName = i.deviceName, r.oneofs && (a._deviceName = "deviceName")), a;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, e.getTypeUrl = function(i) {
        return i === void 0 && (i = "type.googleapis.com"), i + "/dot.v3.MediaTrackSettings";
      }, e;
    }(), o.ImageBitmap = function() {
      function e(n) {
        if (n)
          for (let i = Object.keys(n), r = 0; r < i.length; ++r)
            n[i[r]] != null && (this[i[r]] = n[i[r]]);
      }
      return e.prototype.width = 0, e.prototype.height = 0, e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, i) {
        return i || (i = de.create()), n.width != null && Object.hasOwnProperty.call(n, "width") && i.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(n.width), n.height != null && Object.hasOwnProperty.call(n, "height") && i.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(n.height), i;
      }, e.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, e.decode = function(n, i) {
        n instanceof B || (n = B.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new d.dot.v3.ImageBitmap();
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
        return n instanceof B || (n = new B(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        return typeof n != "object" || n === null ? "object expected" : n.width != null && n.hasOwnProperty("width") && !h.isInteger(n.width) ? "width: integer expected" : n.height != null && n.hasOwnProperty("height") && !h.isInteger(n.height) ? "height: integer expected" : null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.ImageBitmap)
          return n;
        let i = new d.dot.v3.ImageBitmap();
        return n.width != null && (i.width = n.width | 0), n.height != null && (i.height = n.height | 0), i;
      }, e.toObject = function(n, i) {
        i || (i = {});
        let r = {};
        return i.defaults && (r.width = 0, r.height = 0), n.width != null && n.hasOwnProperty("width") && (r.width = n.width), n.height != null && n.hasOwnProperty("height") && (r.height = n.height), r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.ImageBitmap";
      }, e;
    }(), o.CameraProperties = function() {
      function e(i) {
        if (i)
          for (let r = Object.keys(i), a = 0; a < r.length; ++a)
            i[r[a]] != null && (this[r[a]] = i[r[a]]);
      }
      e.prototype.cameraInitFrameResolution = null, e.prototype.cameraProperties = null;
      let n;
      return Object.defineProperty(e.prototype, "_cameraInitFrameResolution", {
        get: h.oneOfGetter(n = ["cameraInitFrameResolution"]),
        set: h.oneOfSetter(n)
      }), e.create = function(i) {
        return new e(i);
      }, e.encode = function(i, r) {
        return r || (r = de.create()), i.cameraInitFrameResolution != null && Object.hasOwnProperty.call(i, "cameraInitFrameResolution") && d.dot.v3.ImageBitmap.encode(i.cameraInitFrameResolution, r.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), i.cameraProperties != null && Object.hasOwnProperty.call(i, "cameraProperties") && d.dot.v3.MediaTrackSettings.encode(i.cameraProperties, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), r;
      }, e.encodeDelimited = function(i, r) {
        return this.encode(i, r).ldelim();
      }, e.decode = function(i, r) {
        i instanceof B || (i = B.create(i));
        let a = r === void 0 ? i.len : i.pos + r, g = new d.dot.v3.CameraProperties();
        for (; i.pos < a; ) {
          let s = i.uint32();
          switch (s >>> 3) {
            case 1: {
              g.cameraInitFrameResolution = d.dot.v3.ImageBitmap.decode(i, i.uint32());
              break;
            }
            case 2: {
              g.cameraProperties = d.dot.v3.MediaTrackSettings.decode(i, i.uint32());
              break;
            }
            default:
              i.skipType(s & 7);
              break;
          }
        }
        return g;
      }, e.decodeDelimited = function(i) {
        return i instanceof B || (i = new B(i)), this.decode(i, i.uint32());
      }, e.verify = function(i) {
        if (typeof i != "object" || i === null)
          return "object expected";
        if (i.cameraInitFrameResolution != null && i.hasOwnProperty("cameraInitFrameResolution")) {
          let r = d.dot.v3.ImageBitmap.verify(i.cameraInitFrameResolution);
          if (r)
            return "cameraInitFrameResolution." + r;
        }
        if (i.cameraProperties != null && i.hasOwnProperty("cameraProperties")) {
          let r = d.dot.v3.MediaTrackSettings.verify(i.cameraProperties);
          if (r)
            return "cameraProperties." + r;
        }
        return null;
      }, e.fromObject = function(i) {
        if (i instanceof d.dot.v3.CameraProperties)
          return i;
        let r = new d.dot.v3.CameraProperties();
        if (i.cameraInitFrameResolution != null) {
          if (typeof i.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v3.CameraProperties.cameraInitFrameResolution: object expected");
          r.cameraInitFrameResolution = d.dot.v3.ImageBitmap.fromObject(i.cameraInitFrameResolution);
        }
        if (i.cameraProperties != null) {
          if (typeof i.cameraProperties != "object")
            throw TypeError(".dot.v3.CameraProperties.cameraProperties: object expected");
          r.cameraProperties = d.dot.v3.MediaTrackSettings.fromObject(i.cameraProperties);
        }
        return r;
      }, e.toObject = function(i, r) {
        r || (r = {});
        let a = {};
        return r.defaults && (a.cameraProperties = null), i.cameraInitFrameResolution != null && i.hasOwnProperty("cameraInitFrameResolution") && (a.cameraInitFrameResolution = d.dot.v3.ImageBitmap.toObject(i.cameraInitFrameResolution, r), r.oneofs && (a._cameraInitFrameResolution = "cameraInitFrameResolution")), i.cameraProperties != null && i.hasOwnProperty("cameraProperties") && (a.cameraProperties = d.dot.v3.MediaTrackSettings.toObject(i.cameraProperties, r)), a;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, e.getTypeUrl = function(i) {
        return i === void 0 && (i = "type.googleapis.com"), i + "/dot.v3.CameraProperties";
      }, e;
    }(), o.DetectedObject = function() {
      function e(n) {
        if (n)
          for (let i = Object.keys(n), r = 0; r < i.length; ++r)
            n[i[r]] != null && (this[i[r]] = n[i[r]]);
      }
      return e.prototype.brightness = 0, e.prototype.sharpness = 0, e.prototype.hotspots = 0, e.prototype.confidence = 0, e.prototype.faceSize = 0, e.prototype.faceCenter = null, e.prototype.smallestEdge = 0, e.prototype.bottomLeft = null, e.prototype.bottomRight = null, e.prototype.topLeft = null, e.prototype.topRight = null, e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, i) {
        return i || (i = de.create()), n.brightness != null && Object.hasOwnProperty.call(n, "brightness") && i.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(n.brightness), n.sharpness != null && Object.hasOwnProperty.call(n, "sharpness") && i.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(n.sharpness), n.hotspots != null && Object.hasOwnProperty.call(n, "hotspots") && i.uint32(
          /* id 3, wireType 5 =*/
          29
        ).float(n.hotspots), n.confidence != null && Object.hasOwnProperty.call(n, "confidence") && i.uint32(
          /* id 4, wireType 5 =*/
          37
        ).float(n.confidence), n.faceSize != null && Object.hasOwnProperty.call(n, "faceSize") && i.uint32(
          /* id 5, wireType 5 =*/
          45
        ).float(n.faceSize), n.faceCenter != null && Object.hasOwnProperty.call(n, "faceCenter") && d.dot.v3.Point.encode(n.faceCenter, i.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), n.smallestEdge != null && Object.hasOwnProperty.call(n, "smallestEdge") && i.uint32(
          /* id 7, wireType 5 =*/
          61
        ).float(n.smallestEdge), n.bottomLeft != null && Object.hasOwnProperty.call(n, "bottomLeft") && d.dot.v3.Point.encode(n.bottomLeft, i.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), n.bottomRight != null && Object.hasOwnProperty.call(n, "bottomRight") && d.dot.v3.Point.encode(n.bottomRight, i.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), n.topLeft != null && Object.hasOwnProperty.call(n, "topLeft") && d.dot.v3.Point.encode(n.topLeft, i.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), n.topRight != null && Object.hasOwnProperty.call(n, "topRight") && d.dot.v3.Point.encode(n.topRight, i.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), i;
      }, e.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, e.decode = function(n, i) {
        n instanceof B || (n = B.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new d.dot.v3.DetectedObject();
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
        return n instanceof B || (n = new B(n)), this.decode(n, n.uint32());
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
          let i = d.dot.v3.Point.verify(n.faceCenter);
          if (i)
            return "faceCenter." + i;
        }
        if (n.smallestEdge != null && n.hasOwnProperty("smallestEdge") && typeof n.smallestEdge != "number")
          return "smallestEdge: number expected";
        if (n.bottomLeft != null && n.hasOwnProperty("bottomLeft")) {
          let i = d.dot.v3.Point.verify(n.bottomLeft);
          if (i)
            return "bottomLeft." + i;
        }
        if (n.bottomRight != null && n.hasOwnProperty("bottomRight")) {
          let i = d.dot.v3.Point.verify(n.bottomRight);
          if (i)
            return "bottomRight." + i;
        }
        if (n.topLeft != null && n.hasOwnProperty("topLeft")) {
          let i = d.dot.v3.Point.verify(n.topLeft);
          if (i)
            return "topLeft." + i;
        }
        if (n.topRight != null && n.hasOwnProperty("topRight")) {
          let i = d.dot.v3.Point.verify(n.topRight);
          if (i)
            return "topRight." + i;
        }
        return null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.DetectedObject)
          return n;
        let i = new d.dot.v3.DetectedObject();
        if (n.brightness != null && (i.brightness = Number(n.brightness)), n.sharpness != null && (i.sharpness = Number(n.sharpness)), n.hotspots != null && (i.hotspots = Number(n.hotspots)), n.confidence != null && (i.confidence = Number(n.confidence)), n.faceSize != null && (i.faceSize = Number(n.faceSize)), n.faceCenter != null) {
          if (typeof n.faceCenter != "object")
            throw TypeError(".dot.v3.DetectedObject.faceCenter: object expected");
          i.faceCenter = d.dot.v3.Point.fromObject(n.faceCenter);
        }
        if (n.smallestEdge != null && (i.smallestEdge = Number(n.smallestEdge)), n.bottomLeft != null) {
          if (typeof n.bottomLeft != "object")
            throw TypeError(".dot.v3.DetectedObject.bottomLeft: object expected");
          i.bottomLeft = d.dot.v3.Point.fromObject(n.bottomLeft);
        }
        if (n.bottomRight != null) {
          if (typeof n.bottomRight != "object")
            throw TypeError(".dot.v3.DetectedObject.bottomRight: object expected");
          i.bottomRight = d.dot.v3.Point.fromObject(n.bottomRight);
        }
        if (n.topLeft != null) {
          if (typeof n.topLeft != "object")
            throw TypeError(".dot.v3.DetectedObject.topLeft: object expected");
          i.topLeft = d.dot.v3.Point.fromObject(n.topLeft);
        }
        if (n.topRight != null) {
          if (typeof n.topRight != "object")
            throw TypeError(".dot.v3.DetectedObject.topRight: object expected");
          i.topRight = d.dot.v3.Point.fromObject(n.topRight);
        }
        return i;
      }, e.toObject = function(n, i) {
        i || (i = {});
        let r = {};
        return i.defaults && (r.brightness = 0, r.sharpness = 0, r.hotspots = 0, r.confidence = 0, r.faceSize = 0, r.faceCenter = null, r.smallestEdge = 0, r.bottomLeft = null, r.bottomRight = null, r.topLeft = null, r.topRight = null), n.brightness != null && n.hasOwnProperty("brightness") && (r.brightness = i.json && !isFinite(n.brightness) ? String(n.brightness) : n.brightness), n.sharpness != null && n.hasOwnProperty("sharpness") && (r.sharpness = i.json && !isFinite(n.sharpness) ? String(n.sharpness) : n.sharpness), n.hotspots != null && n.hasOwnProperty("hotspots") && (r.hotspots = i.json && !isFinite(n.hotspots) ? String(n.hotspots) : n.hotspots), n.confidence != null && n.hasOwnProperty("confidence") && (r.confidence = i.json && !isFinite(n.confidence) ? String(n.confidence) : n.confidence), n.faceSize != null && n.hasOwnProperty("faceSize") && (r.faceSize = i.json && !isFinite(n.faceSize) ? String(n.faceSize) : n.faceSize), n.faceCenter != null && n.hasOwnProperty("faceCenter") && (r.faceCenter = d.dot.v3.Point.toObject(n.faceCenter, i)), n.smallestEdge != null && n.hasOwnProperty("smallestEdge") && (r.smallestEdge = i.json && !isFinite(n.smallestEdge) ? String(n.smallestEdge) : n.smallestEdge), n.bottomLeft != null && n.hasOwnProperty("bottomLeft") && (r.bottomLeft = d.dot.v3.Point.toObject(n.bottomLeft, i)), n.bottomRight != null && n.hasOwnProperty("bottomRight") && (r.bottomRight = d.dot.v3.Point.toObject(n.bottomRight, i)), n.topLeft != null && n.hasOwnProperty("topLeft") && (r.topLeft = d.dot.v3.Point.toObject(n.topLeft, i)), n.topRight != null && n.hasOwnProperty("topRight") && (r.topRight = d.dot.v3.Point.toObject(n.topRight, i)), r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.DetectedObject";
      }, e;
    }(), o.Point = function() {
      function e(n) {
        if (n)
          for (let i = Object.keys(n), r = 0; r < i.length; ++r)
            n[i[r]] != null && (this[i[r]] = n[i[r]]);
      }
      return e.prototype.x = 0, e.prototype.y = 0, e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, i) {
        return i || (i = de.create()), n.x != null && Object.hasOwnProperty.call(n, "x") && i.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(n.x), n.y != null && Object.hasOwnProperty.call(n, "y") && i.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(n.y), i;
      }, e.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, e.decode = function(n, i) {
        n instanceof B || (n = B.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new d.dot.v3.Point();
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
        return n instanceof B || (n = new B(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        return typeof n != "object" || n === null ? "object expected" : n.x != null && n.hasOwnProperty("x") && typeof n.x != "number" ? "x: number expected" : n.y != null && n.hasOwnProperty("y") && typeof n.y != "number" ? "y: number expected" : null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.Point)
          return n;
        let i = new d.dot.v3.Point();
        return n.x != null && (i.x = Number(n.x)), n.y != null && (i.y = Number(n.y)), i;
      }, e.toObject = function(n, i) {
        i || (i = {});
        let r = {};
        return i.defaults && (r.x = 0, r.y = 0), n.x != null && n.hasOwnProperty("x") && (r.x = i.json && !isFinite(n.x) ? String(n.x) : n.x), n.y != null && n.hasOwnProperty("y") && (r.y = i.json && !isFinite(n.y) ? String(n.y) : n.y), r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.Point";
      }, e;
    }(), o.FaceContent = function() {
      function e(n) {
        if (n)
          for (let i = Object.keys(n), r = 0; r < i.length; ++r)
            n[i[r]] != null && (this[i[r]] = n[i[r]]);
      }
      return e.prototype.image = null, e.prototype.metadata = null, e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, i) {
        return i || (i = de.create()), n.image != null && Object.hasOwnProperty.call(n, "image") && d.dot.Image.encode(n.image, i.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.metadata != null && Object.hasOwnProperty.call(n, "metadata") && d.dot.v3.Metadata.encode(n.metadata, i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), i;
      }, e.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, e.decode = function(n, i) {
        n instanceof B || (n = B.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new d.dot.v3.FaceContent();
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
        return n instanceof B || (n = new B(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.image != null && n.hasOwnProperty("image")) {
          let i = d.dot.Image.verify(n.image);
          if (i)
            return "image." + i;
        }
        if (n.metadata != null && n.hasOwnProperty("metadata")) {
          let i = d.dot.v3.Metadata.verify(n.metadata);
          if (i)
            return "metadata." + i;
        }
        return null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.FaceContent)
          return n;
        let i = new d.dot.v3.FaceContent();
        if (n.image != null) {
          if (typeof n.image != "object")
            throw TypeError(".dot.v3.FaceContent.image: object expected");
          i.image = d.dot.Image.fromObject(n.image);
        }
        if (n.metadata != null) {
          if (typeof n.metadata != "object")
            throw TypeError(".dot.v3.FaceContent.metadata: object expected");
          i.metadata = d.dot.v3.Metadata.fromObject(n.metadata);
        }
        return i;
      }, e.toObject = function(n, i) {
        i || (i = {});
        let r = {};
        return i.defaults && (r.image = null, r.metadata = null), n.image != null && n.hasOwnProperty("image") && (r.image = d.dot.Image.toObject(n.image, i)), n.metadata != null && n.hasOwnProperty("metadata") && (r.metadata = d.dot.v3.Metadata.toObject(n.metadata, i)), r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.FaceContent";
      }, e;
    }(), o.DocumentContent = function() {
      function e(n) {
        if (n)
          for (let i = Object.keys(n), r = 0; r < i.length; ++r)
            n[i[r]] != null && (this[i[r]] = n[i[r]]);
      }
      return e.prototype.image = null, e.prototype.metadata = null, e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, i) {
        return i || (i = de.create()), n.image != null && Object.hasOwnProperty.call(n, "image") && d.dot.Image.encode(n.image, i.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.metadata != null && Object.hasOwnProperty.call(n, "metadata") && d.dot.v3.Metadata.encode(n.metadata, i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), i;
      }, e.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, e.decode = function(n, i) {
        n instanceof B || (n = B.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new d.dot.v3.DocumentContent();
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
        return n instanceof B || (n = new B(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.image != null && n.hasOwnProperty("image")) {
          let i = d.dot.Image.verify(n.image);
          if (i)
            return "image." + i;
        }
        if (n.metadata != null && n.hasOwnProperty("metadata")) {
          let i = d.dot.v3.Metadata.verify(n.metadata);
          if (i)
            return "metadata." + i;
        }
        return null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.DocumentContent)
          return n;
        let i = new d.dot.v3.DocumentContent();
        if (n.image != null) {
          if (typeof n.image != "object")
            throw TypeError(".dot.v3.DocumentContent.image: object expected");
          i.image = d.dot.Image.fromObject(n.image);
        }
        if (n.metadata != null) {
          if (typeof n.metadata != "object")
            throw TypeError(".dot.v3.DocumentContent.metadata: object expected");
          i.metadata = d.dot.v3.Metadata.fromObject(n.metadata);
        }
        return i;
      }, e.toObject = function(n, i) {
        i || (i = {});
        let r = {};
        return i.defaults && (r.image = null, r.metadata = null), n.image != null && n.hasOwnProperty("image") && (r.image = d.dot.Image.toObject(n.image, i)), n.metadata != null && n.hasOwnProperty("metadata") && (r.metadata = d.dot.v3.Metadata.toObject(n.metadata, i)), r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.DocumentContent";
      }, e;
    }(), o.Blob = function() {
      function e(i) {
        if (i)
          for (let r = Object.keys(i), a = 0; a < r.length; ++a)
            i[r[a]] != null && (this[r[a]] = i[r[a]]);
      }
      e.prototype.documentContent = null, e.prototype.faceContent = null, e.prototype.magnifeyeLivenessContent = null, e.prototype.smileLivenessContent = null;
      let n;
      return Object.defineProperty(e.prototype, "blob", {
        get: h.oneOfGetter(n = ["documentContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent"]),
        set: h.oneOfSetter(n)
      }), e.create = function(i) {
        return new e(i);
      }, e.encode = function(i, r) {
        return r || (r = de.create()), i.documentContent != null && Object.hasOwnProperty.call(i, "documentContent") && d.dot.v3.DocumentContent.encode(i.documentContent, r.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), i.faceContent != null && Object.hasOwnProperty.call(i, "faceContent") && d.dot.v3.FaceContent.encode(i.faceContent, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), i.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(i, "magnifeyeLivenessContent") && d.dot.v3.MagnifEyeLivenessContent.encode(i.magnifeyeLivenessContent, r.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), i.smileLivenessContent != null && Object.hasOwnProperty.call(i, "smileLivenessContent") && d.dot.v3.SmileLivenessContent.encode(i.smileLivenessContent, r.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), r;
      }, e.encodeDelimited = function(i, r) {
        return this.encode(i, r).ldelim();
      }, e.decode = function(i, r) {
        i instanceof B || (i = B.create(i));
        let a = r === void 0 ? i.len : i.pos + r, g = new d.dot.v3.Blob();
        for (; i.pos < a; ) {
          let s = i.uint32();
          switch (s >>> 3) {
            case 1: {
              g.documentContent = d.dot.v3.DocumentContent.decode(i, i.uint32());
              break;
            }
            case 2: {
              g.faceContent = d.dot.v3.FaceContent.decode(i, i.uint32());
              break;
            }
            case 3: {
              g.magnifeyeLivenessContent = d.dot.v3.MagnifEyeLivenessContent.decode(i, i.uint32());
              break;
            }
            case 4: {
              g.smileLivenessContent = d.dot.v3.SmileLivenessContent.decode(i, i.uint32());
              break;
            }
            default:
              i.skipType(s & 7);
              break;
          }
        }
        return g;
      }, e.decodeDelimited = function(i) {
        return i instanceof B || (i = new B(i)), this.decode(i, i.uint32());
      }, e.verify = function(i) {
        if (typeof i != "object" || i === null)
          return "object expected";
        let r = {};
        if (i.documentContent != null && i.hasOwnProperty("documentContent")) {
          r.blob = 1;
          {
            let a = d.dot.v3.DocumentContent.verify(i.documentContent);
            if (a)
              return "documentContent." + a;
          }
        }
        if (i.faceContent != null && i.hasOwnProperty("faceContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let a = d.dot.v3.FaceContent.verify(i.faceContent);
            if (a)
              return "faceContent." + a;
          }
        }
        if (i.magnifeyeLivenessContent != null && i.hasOwnProperty("magnifeyeLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let a = d.dot.v3.MagnifEyeLivenessContent.verify(i.magnifeyeLivenessContent);
            if (a)
              return "magnifeyeLivenessContent." + a;
          }
        }
        if (i.smileLivenessContent != null && i.hasOwnProperty("smileLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let a = d.dot.v3.SmileLivenessContent.verify(i.smileLivenessContent);
            if (a)
              return "smileLivenessContent." + a;
          }
        }
        return null;
      }, e.fromObject = function(i) {
        if (i instanceof d.dot.v3.Blob)
          return i;
        let r = new d.dot.v3.Blob();
        if (i.documentContent != null) {
          if (typeof i.documentContent != "object")
            throw TypeError(".dot.v3.Blob.documentContent: object expected");
          r.documentContent = d.dot.v3.DocumentContent.fromObject(i.documentContent);
        }
        if (i.faceContent != null) {
          if (typeof i.faceContent != "object")
            throw TypeError(".dot.v3.Blob.faceContent: object expected");
          r.faceContent = d.dot.v3.FaceContent.fromObject(i.faceContent);
        }
        if (i.magnifeyeLivenessContent != null) {
          if (typeof i.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v3.Blob.magnifeyeLivenessContent: object expected");
          r.magnifeyeLivenessContent = d.dot.v3.MagnifEyeLivenessContent.fromObject(i.magnifeyeLivenessContent);
        }
        if (i.smileLivenessContent != null) {
          if (typeof i.smileLivenessContent != "object")
            throw TypeError(".dot.v3.Blob.smileLivenessContent: object expected");
          r.smileLivenessContent = d.dot.v3.SmileLivenessContent.fromObject(i.smileLivenessContent);
        }
        return r;
      }, e.toObject = function(i, r) {
        r || (r = {});
        let a = {};
        return i.documentContent != null && i.hasOwnProperty("documentContent") && (a.documentContent = d.dot.v3.DocumentContent.toObject(i.documentContent, r), r.oneofs && (a.blob = "documentContent")), i.faceContent != null && i.hasOwnProperty("faceContent") && (a.faceContent = d.dot.v3.FaceContent.toObject(i.faceContent, r), r.oneofs && (a.blob = "faceContent")), i.magnifeyeLivenessContent != null && i.hasOwnProperty("magnifeyeLivenessContent") && (a.magnifeyeLivenessContent = d.dot.v3.MagnifEyeLivenessContent.toObject(i.magnifeyeLivenessContent, r), r.oneofs && (a.blob = "magnifeyeLivenessContent")), i.smileLivenessContent != null && i.hasOwnProperty("smileLivenessContent") && (a.smileLivenessContent = d.dot.v3.SmileLivenessContent.toObject(i.smileLivenessContent, r), r.oneofs && (a.blob = "smileLivenessContent")), a;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, e.getTypeUrl = function(i) {
        return i === void 0 && (i = "type.googleapis.com"), i + "/dot.v3.Blob";
      }, e;
    }(), o.SmileLivenessContent = function() {
      function e(n) {
        if (n)
          for (let i = Object.keys(n), r = 0; r < i.length; ++r)
            n[i[r]] != null && (this[i[r]] = n[i[r]]);
      }
      return e.prototype.neutralExpressionFaceImage = null, e.prototype.smileExpressionFaceImage = null, e.prototype.metadata = null, e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, i) {
        return i || (i = de.create()), n.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(n, "neutralExpressionFaceImage") && d.dot.Image.encode(n.neutralExpressionFaceImage, i.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.smileExpressionFaceImage != null && Object.hasOwnProperty.call(n, "smileExpressionFaceImage") && d.dot.Image.encode(n.smileExpressionFaceImage, i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.metadata != null && Object.hasOwnProperty.call(n, "metadata") && d.dot.v3.Metadata.encode(n.metadata, i.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), i;
      }, e.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, e.decode = function(n, i) {
        n instanceof B || (n = B.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new d.dot.v3.SmileLivenessContent();
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
        return n instanceof B || (n = new B(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.neutralExpressionFaceImage != null && n.hasOwnProperty("neutralExpressionFaceImage")) {
          let i = d.dot.Image.verify(n.neutralExpressionFaceImage);
          if (i)
            return "neutralExpressionFaceImage." + i;
        }
        if (n.smileExpressionFaceImage != null && n.hasOwnProperty("smileExpressionFaceImage")) {
          let i = d.dot.Image.verify(n.smileExpressionFaceImage);
          if (i)
            return "smileExpressionFaceImage." + i;
        }
        if (n.metadata != null && n.hasOwnProperty("metadata")) {
          let i = d.dot.v3.Metadata.verify(n.metadata);
          if (i)
            return "metadata." + i;
        }
        return null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.SmileLivenessContent)
          return n;
        let i = new d.dot.v3.SmileLivenessContent();
        if (n.neutralExpressionFaceImage != null) {
          if (typeof n.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v3.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          i.neutralExpressionFaceImage = d.dot.Image.fromObject(n.neutralExpressionFaceImage);
        }
        if (n.smileExpressionFaceImage != null) {
          if (typeof n.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v3.SmileLivenessContent.smileExpressionFaceImage: object expected");
          i.smileExpressionFaceImage = d.dot.Image.fromObject(n.smileExpressionFaceImage);
        }
        if (n.metadata != null) {
          if (typeof n.metadata != "object")
            throw TypeError(".dot.v3.SmileLivenessContent.metadata: object expected");
          i.metadata = d.dot.v3.Metadata.fromObject(n.metadata);
        }
        return i;
      }, e.toObject = function(n, i) {
        i || (i = {});
        let r = {};
        return i.defaults && (r.neutralExpressionFaceImage = null, r.smileExpressionFaceImage = null, r.metadata = null), n.neutralExpressionFaceImage != null && n.hasOwnProperty("neutralExpressionFaceImage") && (r.neutralExpressionFaceImage = d.dot.Image.toObject(n.neutralExpressionFaceImage, i)), n.smileExpressionFaceImage != null && n.hasOwnProperty("smileExpressionFaceImage") && (r.smileExpressionFaceImage = d.dot.Image.toObject(n.smileExpressionFaceImage, i)), n.metadata != null && n.hasOwnProperty("metadata") && (r.metadata = d.dot.v3.Metadata.toObject(n.metadata, i)), r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.SmileLivenessContent";
      }, e;
    }(), o;
  }(), t.Image = function() {
    function o(e) {
      if (e)
        for (let n = Object.keys(e), i = 0; i < n.length; ++i)
          e[n[i]] != null && (this[n[i]] = e[n[i]]);
    }
    return o.prototype.bytes = h.newBuffer([]), o.create = function(e) {
      return new o(e);
    }, o.encode = function(e, n) {
      return n || (n = de.create()), e.bytes != null && Object.hasOwnProperty.call(e, "bytes") && n.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(e.bytes), n;
    }, o.encodeDelimited = function(e, n) {
      return this.encode(e, n).ldelim();
    }, o.decode = function(e, n) {
      e instanceof B || (e = B.create(e));
      let i = n === void 0 ? e.len : e.pos + n, r = new d.dot.Image();
      for (; e.pos < i; ) {
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
      let n = new d.dot.Image();
      return e.bytes != null && (typeof e.bytes == "string" ? h.base64.decode(e.bytes, n.bytes = h.newBuffer(h.base64.length(e.bytes)), 0) : e.bytes.length >= 0 && (n.bytes = e.bytes)), n;
    }, o.toObject = function(e, n) {
      n || (n = {});
      let i = {};
      return n.defaults && (n.bytes === String ? i.bytes = "" : (i.bytes = [], n.bytes !== Array && (i.bytes = h.newBuffer(i.bytes)))), e.bytes != null && e.hasOwnProperty("bytes") && (i.bytes = n.bytes === String ? h.base64.encode(e.bytes, 0, e.bytes.length) : n.bytes === Array ? Array.prototype.slice.call(e.bytes) : e.bytes), i;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, ne.util.toJSONOptions);
    }, o.getTypeUrl = function(e) {
      return e === void 0 && (e = "type.googleapis.com"), e + "/dot.Image";
    }, o;
  }(), t.Int32List = function() {
    function o(e) {
      if (this.items = [], e)
        for (let n = Object.keys(e), i = 0; i < n.length; ++i)
          e[n[i]] != null && (this[n[i]] = e[n[i]]);
    }
    return o.prototype.items = h.emptyArray, o.create = function(e) {
      return new o(e);
    }, o.encode = function(e, n) {
      if (n || (n = de.create()), e.items != null && e.items.length) {
        n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork();
        for (let i = 0; i < e.items.length; ++i)
          n.int32(e.items[i]);
        n.ldelim();
      }
      return n;
    }, o.encodeDelimited = function(e, n) {
      return this.encode(e, n).ldelim();
    }, o.decode = function(e, n) {
      e instanceof B || (e = B.create(e));
      let i = n === void 0 ? e.len : e.pos + n, r = new d.dot.Int32List();
      for (; e.pos < i; ) {
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
    }, o.decodeDelimited = function(e) {
      return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
    }, o.verify = function(e) {
      if (typeof e != "object" || e === null)
        return "object expected";
      if (e.items != null && e.hasOwnProperty("items")) {
        if (!Array.isArray(e.items))
          return "items: array expected";
        for (let n = 0; n < e.items.length; ++n)
          if (!h.isInteger(e.items[n]))
            return "items: integer[] expected";
      }
      return null;
    }, o.fromObject = function(e) {
      if (e instanceof d.dot.Int32List)
        return e;
      let n = new d.dot.Int32List();
      if (e.items) {
        if (!Array.isArray(e.items))
          throw TypeError(".dot.Int32List.items: array expected");
        n.items = [];
        for (let i = 0; i < e.items.length; ++i)
          n.items[i] = e.items[i] | 0;
      }
      return n;
    }, o.toObject = function(e, n) {
      n || (n = {});
      let i = {};
      if ((n.arrays || n.defaults) && (i.items = []), e.items && e.items.length) {
        i.items = [];
        for (let r = 0; r < e.items.length; ++r)
          i.items[r] = e.items[r];
      }
      return i;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, ne.util.toJSONOptions);
    }, o.getTypeUrl = function(e) {
      return e === void 0 && (e = "type.googleapis.com"), e + "/dot.Int32List";
    }, o;
  }(), t.Platform = function() {
    const o = {}, e = Object.create(o);
    return e[o[0] = "WEB"] = 0, e[o[1] = "ANDROID"] = 1, e[o[2] = "IOS"] = 2, e;
  }(), t;
})();
async function zo(t) {
  const { Image: o } = Vt, e = await t.arrayBuffer(), n = new Uint8Array(e), i = {};
  i.bytes = n;
  const r = o.verify(i);
  if (r)
    throw Error(r);
  const a = {};
  return a.bytes = n, o.create(a);
}
async function Os(t) {
  const { v3: { Metadata: o } } = Vt, e = { ...t };
  e.platform = Vt.Platform.WEB;
  const n = e, i = o.verify(n);
  if (i)
    throw Error(i);
  return o.create(n);
}
async function Vs(t) {
  const { Content: o } = Vt, { iv: e, key: n, message: i } = await zx(t), r = { token: new Uint8Array(n), iv: e, schemaVersion: JI, bytes: new Uint8Array(i) }, a = o.verify(r);
  if (a)
    throw Error(a);
  const g = o.create(r);
  return o.encode(g).finish();
}
function Rs({ documentContent: t, faceContent: o, magnifeyeLivenessContent: e, smileLivenessContent: n }) {
  const { Blob: i } = Vt.v3, r = {};
  r.documentContent = t, r.faceContent = o, r.magnifeyeLivenessContent = e, r.smileLivenessContent = n;
  const a = r, g = i.verify(a);
  if (g)
    throw Error(g);
  const s = i.create(a);
  return i.encode(s).finish();
}
async function Ol(t, o) {
  const { FaceContent: e } = Vt.v3, n = await zo(t), i = await Os(o), r = {};
  r.image = n, r.metadata = i;
  const a = r, g = e.verify(a);
  if (g)
    throw Error(g);
  const s = e.create(a), x = {};
  return x.faceContent = s, Rs(x);
}
async function Vl(t, o) {
  const e = await Ol(t, o);
  return Vs(e);
}
const Rl = ({
  onPhotoTakenInternal: t
}) => {
  const {
    appState: o,
    handleAppStateChange: e,
    handleError: n
  } = Li(), {
    faceCameraOptions: i
  } = cs(), {
    cameraFacing: r,
    onPhotoTaken: a,
    sessionToken: g,
    thresholds: s,
    wasmDirectoryPath: x
  } = i, C = ft(), u = Zt(void 0), {
    cameraHandler: f,
    cameraResolution: p,
    onCameraResolutionChange: v
  } = Vx(C, r), {
    controller: w
  } = Cl(s, x), {
    shouldMirror: K
  } = Ox(ut.CONTROL, f);
  return Hx(ut.CAMERA_PROPS_CHANGED, {
    cameraResolution: p,
    shouldMirror: K
  }), Rx(), ue(() => () => {
    Wn.getInstance().restart();
  }, []), ue(() => {
    f != null && f.videoTrack && (w != null && w.isDetectorInitialized) && e(Ue.RUNNING);
  }, [f == null ? void 0 : f.videoTrack, w == null ? void 0 : w.isDetectorInitialized, e]), ue(() => {
    if (o !== Ue.RUNNING)
      return;
    if (!f || !w)
      throw new q("Cannot start detection");
    let G = 0, W = !1, O = 0;
    const J = new xr(30);
    w.clearImagesForDuplicateDetection();
    const F = async (k, ee, z) => {
      const te = {
        width: k.width,
        height: k.height
      }, xe = await ux(k), fe = {
        ...await f.getCameraProperties(),
        detectionRecord: z,
        hashedDetectedImages: w.getImagesForDuplicateDetection()
      }, re = await Vl(xe, {
        sessionToken: g,
        web: fe
      }), ae = {
        detection: ee,
        imageResolution: te
      };
      Kx(gs.FACE, w.getCandidateSelectionImages()), t && t({
        cameraProperties: fe || {}
      }), a({
        image: xe,
        data: ae
      }, re);
    };
    return (async () => {
      const k = Date.now();
      for (; f.checkIfStreamIsRunning() && !W; ) {
        if (ox(G, O)) {
          const {
            detection: ae,
            image: $e
          } = w.getBestImage() || {}, gt = w.getDetectionRecord();
          if ($e && ae) {
            const we = Date.now(), De = jg(J);
            _t.sendFaceData({
              faceDetection: ae,
              imageResolution: {
                width: $e.width,
                height: $e.height
              },
              deviceName: await f.getDeviceName(),
              averageFps: De,
              captureProcessDurationInMs: we - k,
              facingMode: f.getCameraSettings().facingMode,
              instructionSet: await w.getInstructionSet()
            }), e(Ue.WAITING), await F($e, ae, gt), w.restart();
          } else
            n(new q("Something went wrong during capturing an image"));
          return;
        }
        const ee = Date.now(), z = f.takePhoto(), te = {
          width: z.width,
          height: z.height
        };
        let xe;
        try {
          xe = await w.processImage(z);
        } catch (ae) {
          ae instanceof Error && n(q.fromCameraError(ae));
          return;
        }
        const fe = Date.now() - ee, Re = En(1e3 / fe);
        J.pushFixed(Re);
        const re = {
          face: xe.detectedFace,
          detectionTime: fe,
          fps: Re,
          resolution: te,
          instructionCode: xe.instructionCode,
          invalidValidators: xe.invalidValidators,
          samVersion: w.samVersion
        };
        u.value = re, xe.isInCandidateSelection && (G === 0 && (G = performance.now()), O++), v(te), await Po(Math.max(Ka.max - fe, Ka.min));
      }
    })(), () => {
      W = !0;
    };
  }, [o, f, w, i, e, n, a, s.faceConfidence, v, t, g, u]), Ie(Te, {
    children: [Ie(II, {
      ref: C,
      $isImageMirror: K,
      autoPlay: !0,
      muted: !0,
      playsInline: !0
    }), p && o === Ue.RUNNING && Ie(Dx, {
      cameraResolution: p,
      detectionDetails: u,
      isImageMirror: K
    })]
  });
}, El = ({
  onPhotoTakenInternal: t,
  ...o
}) => Ie(Bx, {
  cameraOptions: o,
  children: Ie(Rl, {
    onPhotoTakenInternal: t
  })
}), Pl = ({
  children: t
}) => {
  const o = ft(null);
  return Ex(o, ut.VIDEO_ELEMENT_SIZE), Ie(cI, {
    ref: o,
    children: t
  });
}, zt = {};
zt.brightnessHighThreshold = 1, zt.brightnessLowThreshold = -(2711 * -1 + 1781 + 931), zt.sharpnessThreshold = -(9247 + -1203 * 7 + -825), zt.outOfBoundsThreshold = -1, zt.minFaceSizeRatio = 0.1;
const Nl = { [$t.NEUTRAL]: {}, [$t.SMILE]: zt }, Yl = Nl;
async function Ll(t, o, e) {
  const { SmileLivenessContent: n } = Vt.v3, i = await zo(t), r = await zo(o), a = await Os(e), g = {};
  g.neutralExpressionFaceImage = i, g.smileExpressionFaceImage = r, g.metadata = a;
  const s = g, x = n.verify(s);
  if (x)
    throw Error(x);
  const C = n.create(s), u = {};
  return u.smileLivenessContent = C, Rs(u);
}
async function Tl(t, o, e) {
  const n = await Ll(t, o, e);
  return Vs(n);
}
const Fl = ({
  onComplete: t,
  onError: o,
  sessionToken: e,
  wasmDirectoryPath: n
}) => {
  const {
    handleAppStateChange: i,
    handleError: r
  } = dI(), a = Zt($t.NEUTRAL), g = Zt(null), s = Zt(null), x = vx(Hn.ANIMATION_END), C = Zt(null);
  ue(() => {
    x.value && i(Gn.RUNNING);
  }, [i, x.value]);
  function u(K) {
    a.value = K, Xo(Hn.STATUS_CHANGED, {
      phase: K
    });
  }
  function f(K) {
    g.value = K, u($t.SMILE);
  }
  async function p(K) {
    s.value = K;
    try {
      if (!g.value || !s.value)
        throw new q("Missing face data");
      const G = {
        sessionToken: e,
        web: C.value
      }, W = await Tl(g.value.image, s.value.image, G), O = [g.value, s.value];
      t(O, W), _t.sendSmileLivenessData(O), i(Gn.DONE);
    } catch (G) {
      G instanceof Error && r(q.fromError(G));
      return;
    }
  }
  function v(K) {
    C.value = sx(C.value, K.cameraProperties);
  }
  const w = {
    [$t.NEUTRAL]: f,
    [$t.SMILE]: p
  };
  return Ie(Pl, {
    children: Ie(El, {
      onError: o,
      onPhotoTaken: w[a.value],
      onPhotoTakenInternal: v,
      thresholds: Yl[a.value],
      wasmDirectoryPath: n
    })
  });
};
function Dl(t) {
  const [o, e] = Ye(Gn.LOADING), [n, i] = Ye(!1), [r, a] = Ye(), g = hi((x) => {
    Xo(Hn.STATUS_CHANGED, {
      state: Gn.ERROR,
      error: x
    }), i(!1), t(x), a(x), e(Gn.ERROR);
  }, [t]), s = hi((x) => {
    e(x), Xo(Hn.STATUS_CHANGED, {
      state: x
    });
  }, []);
  return {
    appState: o,
    isCameraReady: n,
    setIsCameraReady: i,
    handleAppStateChange: s,
    handleError: g,
    error: r
  };
}
const Xl = ({
  props: t
}) => (ue(() => {
  _t.init("d64319129bb0ee02eccfab418edba9629a97d6b6", !0);
}, []), t ? Ie(nI, {
  target: t.styleTarget,
  children: Ie(CI, {
    value: Dl(t.onError),
    children: Ie(Xg, {
      children: Ie(Fl, {
        ...t
      })
    })
  })
}) : null);
c0(Xl, "x-dot-smile-liveness", ["props"]);
