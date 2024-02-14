var n0 = Object.defineProperty;
var i0 = (t, o, e) => o in t ? n0(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e;
var Q = (t, o, e) => (i0(t, typeof o != "symbol" ? o + "" : o, e), e);
var Rn, Z, qa, _a, St, Ur, eg, ho, tg, Hn = {}, ng = [], o0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ki = Array.isArray;
function at(t, o) {
  for (var e in o)
    t[e] = o[e];
  return t;
}
function ig(t) {
  var o = t.parentNode;
  o && o.removeChild(t);
}
function be(t, o, e) {
  var n, i, r, a = {};
  for (r in o)
    r == "key" ? n = o[r] : r == "ref" ? i = o[r] : a[r] = o[r];
  if (arguments.length > -1 * 9323 + 39 * -95 + -13030 * -1 && (a.children = arguments.length > 3 ? Rn.call(arguments, 2) : e), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      a[r] === void 0 && (a[r] = t.defaultProps[r]);
  return Gn(t, a, n, i, null);
}
function Gn(t, o, e, n, i) {
  var r = {};
  r.type = t, r.props = o, r.key = e, r.ref = n, r.__k = null, r.__ = null, r.__b = 0, r.__e = null, r.__d = void (4710 + 29 * 7 + -289 * 17), r.__c = null, r.constructor = void (-9400 + -4 * 1758 + -2 * -8216), r.__v = i ?? ++qa, r.__i = -(-1 * 7853 + -170 * 34 + -13634 * -1), r.__u = 0;
  var a = r;
  return i == null && Z.vnode != null && Z.vnode(a), a;
}
function r0() {
  var t = {};
  return t.current = null, t;
}
function Fe(t) {
  return t.children;
}
function Oe(t, o) {
  this.props = t, this.context = o;
}
function nn(t, o) {
  if (o == null)
    return t.__ ? nn(t.__, t.__i + (103 * -43 + -4122 + -8 * -1069)) : null;
  for (var e; o < t.__k.length; o++)
    if ((e = t.__k[o]) != null && e.__e != null)
      return e.__e;
  return typeof t.type == "function" ? nn(t) : null;
}
function og(t) {
  var o, e;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, o = -6881 + 1 * -6247 + -6 * -2188; o < t.__k.length; o++)
      if ((e = t.__k[o]) != null && e.__e != null) {
        t.__e = t.__c.base = e.__e;
        break;
      }
    return og(t);
  }
}
function mo(t) {
  (!t.__d && (t.__d = !(-215 * -26 + -7458 + 467 * 4)) && St.push(t) && !fi.__r++ || Ur !== Z.debounceRendering) && ((Ur = Z.debounceRendering) || eg)(fi);
}
function fi() {
  var t, o, e, n, i, r, a, g, s;
  for (St.sort(ho); t = St.shift(); )
    t.__d && (o = St.length, n = void 0, r = (i = (e = t).__v).__e, g = [], s = [], (a = e.__P) && ((n = at({}, i)).__v = i.__v + 1, Z.vnode && Z.vnode(n), zo(a, n, i, e.__n, void (-47 * -93 + 2941 * -2 + 1 * 1511) !== a.ownerSVGElement, 23 * -97 + 63 * 101 + 50 * -82 & i.__u ? [r] : null, g, r ?? nn(i), !!(-4111 + -1 * -4143 & i.__u), s), n.__.__k[n.__i] = n, gg(g, n, s), n.__e != r && og(n)), St.length > o && St.sort(ho));
  fi.__r = 2 * -157 + 7 * -1294 + 9372;
}
function rg(t, o, e, n, i, r, a, g, s, x, C) {
  var u, p, f, v, w, E = n && n.__k || ng, k = o.length;
  for (e.__d = s, a0(e, o, E), s = e.__d, u = 2558 * 1 + 5622 + -8180; u < k; u++)
    (f = e.__k[u]) != null && typeof f != "boolean" && typeof f != "function" && (p = -(-4 * -1652 + 6778 + -13385) === f.__i ? Hn : E[f.__i] || Hn, f.__i = u, zo(t, f, p, i, r, a, g, s, x, C), v = f.__e, f.ref && p.ref != f.ref && (p.ref && $o(p.ref, null, f), C.push(f.ref, f.__c || v, f)), w == null && v != null && (w = v), 1 * 58451 + 69386 + 62301 * -1 & f.__u || p.__k === f.__k ? s = ag(f, s, t) : typeof f.type == "function" && void (4178 + -1 * 4178) !== f.__d ? s = f.__d : v && (s = v.nextSibling), f.__d = void (2 * -1357 + -8580 + 1 * 11294), f.__u &= -196609);
  e.__d = s, e.__e = w;
}
function a0(t, o, e) {
  var n, i, r, a, g, s = o.length, x = e.length, C = x, u = 199 * 32 + 333 + -6701;
  for (t.__k = [], n = -9118 + -9118 * -1; n < s; n++)
    (i = t.__k[n] = (i = o[n]) == null || typeof i == "boolean" || typeof i == "function" ? null : typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? Gn(null, i, null, null, i) : Ki(i) ? Gn(Fe, { children: i }, null, null, null) : i.constructor === void 0 && i.__b > -7896 + 8193 * 1 + -297 ? Gn(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) != null ? (i.__ = t, i.__b = t.__b + (8 * -670 + 7834 + 2473 * -1), g = g0(i, e, a = n + u, C), i.__i = g, r = null, -(2078 + -77 * -98 + -1 * 9623) !== g && (C--, (r = e[g]) && (r.__u |= 196337 + 285 * -229)), r == null || r.__v === null ? (g == -1 && u--, typeof i.type != "function" && (i.__u |= -81200 + -389 * 43 + 163463)) : g !== a && (g === a + (2 * -3652 + 699 * 14 + -2481) ? u++ : g > a ? C > s - a ? u += g - a : u-- : u = g < a && g == a - (3414 + 1 * -3413) ? g - a : -2 * 2539 + -1710 * -1 + 3368, g !== n + u && (i.__u |= 180277 + 114741 * -1))) : (r = e[n]) && r.key == null && r.__e && (r.__e == t.__d && (t.__d = nn(r)), bo(r, r, !(-4097 + 280 * -23 + 1 * 10538)), e[n] = null, C--);
  if (C)
    for (n = -15900 + 15900 * 1; n < x; n++)
      (r = e[n]) != null && -8306 + 1 * -5477 + 13783 == (131072 & r.__u) && (r.__e == t.__d && (t.__d = nn(r)), bo(r, r));
}
function ag(t, o, e) {
  var n, i;
  if (typeof t.type == "function") {
    for (n = t.__k, i = -6 * -542 + -2723 + -529 * 1; n && i < n.length; i++)
      n[i] && (n[i].__ = t, o = ag(n[i], o, e));
    return o;
  }
  return t.__e != o && (e.insertBefore(t.__e, o || null), o = t.__e), o && o.nextSibling;
}
function st(t, o) {
  return o = o || [], t == null || typeof t == "boolean" || (Ki(t) ? t.some(function(e) {
    st(e, o);
  }) : o.push(t)), o;
}
function g0(t, o, e, n) {
  var i = t.key, r = t.type, a = e - (-1327 * -7 + 2712 + -12e3), g = e + (-8299 + -5 * 901 + 12805), s = o[e];
  if (s === null || s && i == s.key && r === s.type)
    return e;
  if (n > (s != null && -1 * 4147 + -5350 + 9497 == (191953 * -1 + -3897 * -19 + 248982 & s.__u) ? -5402 + 1478 * -5 + 12793 : -4 * -1217 + -17 * -59 + -5871))
    for (; a >= 1059 * 1 + -9 * 1051 + -175 * -48 || g < o.length; ) {
      if (a >= -408 + -1 * -9561 + 27 * -339) {
        if ((s = o[a]) && 5641 * -1 + 7478 + -1837 == (-26380 + -39363 * -4 & s.__u) && i == s.key && r === s.type)
          return a;
        a--;
      }
      if (g < o.length) {
        if ((s = o[g]) && !(131072 & s.__u) && i == s.key && r === s.type)
          return g;
        g++;
      }
    }
  return -(-4 * -1713 + -373 * 17 + -510);
}
function Jr(t, o, e) {
  o[2990 + -43 * 38 + 226 * -6] === "-" ? t.setProperty(o, e ?? "") : t[o] = e == null ? "" : typeof e != "number" || o0.test(o) ? e : e + "px";
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
            e && o in e || Jr(t.style, o, "");
        if (e)
          for (o in e)
            n && e[o] === n[o] || Jr(t.style, o, e[o]);
      }
    else if (o[0] === "o" && o[8235 + -3 * -2589 + -16001] === "n")
      r = o !== (o = o.replace(/(PointerCapture)$|Capture$/, "$1")), o = o.toLowerCase() in t ? o.toLowerCase().slice(4624 + -62 * 16 + -3630) : o.slice(-5066 + -2199 * -4 + -3728), t.l || (t.l = {}), t.l[o + r] = e, e ? n ? e.u = n.u : (e.u = Date.now(), t.addEventListener(o, r ? zr : Qr, r)) : t.removeEventListener(o, r ? zr : Qr, r);
    else {
      if (i)
        o = o.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (o !== "width" && o !== "height" && o !== "href" && o !== "list" && o !== "form" && o !== "tabIndex" && o !== "download" && o !== "rowSpan" && o !== "colSpan" && o !== "role" && o in t)
        try {
          t[o] = e ?? "";
          break e;
        } catch {
        }
      typeof e == "function" || (e == null || !(-2152 + -75 * -3 + 1928) === e && o[-6362 + -1 * 3334 + -9700 * -1] !== "-" ? t.removeAttribute(o) : t.setAttribute(o, e));
    }
}
function Qr(t) {
  var o = this.l[t.type + !1];
  if (t.t) {
    if (t.t <= o.u)
      return;
  } else
    t.t = Date.now();
  return o(Z.event ? Z.event(t) : t);
}
function zr(t) {
  return this.l[t.type + !(4721 + -562 * -1 + -1761 * 3)](Z.event ? Z.event(t) : t);
}
function zo(t, o, e, n, i, r, a, g, s, x) {
  var C, u, p, f, v, w, E, k, G, H, L, D, M, K, ee, z = o.type;
  if (void (8171 + -1 * 8171) !== o.constructor)
    return null;
  -2381 * -3 + -2603 + -4412 & e.__u && (s = !!(32 & e.__u), r = [g = o.__e = e.__e]), (C = Z.__b) && C(o);
  e:
    if (typeof z == "function")
      try {
        if (k = o.props, G = (C = z.contextType) && n[C.__c], H = C ? G ? G.props.value : C.__ : n, e.__c ? E = (u = o.__c = e.__c).__ = u.__E : ("prototype" in z && z.prototype.render ? o.__c = u = new z(k, H) : (o.__c = u = new Oe(k, H), u.constructor = z, u.render = c0), G && G.sub(u), u.props = k, u.state || (u.state = {}), u.context = H, u.__n = n, p = u.__d = !0, u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), z.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = at({}, u.__s)), at(u.__s, z.getDerivedStateFromProps(k, u.__s))), f = u.props, v = u.state, u.__v = o, p)
          z.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (z.getDerivedStateFromProps == null && k !== f && u.componentWillReceiveProps != null && u.componentWillReceiveProps(k, H), !u.__e && (u.shouldComponentUpdate != null && !(-9848 + -581 * 14 + -7 * -2569) === u.shouldComponentUpdate(k, u.__s, H) || o.__v === e.__v)) {
            for (o.__v !== e.__v && (u.props = k, u.state = u.__s, u.__d = !(2 * 4689 + 5390 + -14767)), o.__e = e.__e, o.__k = e.__k, o.__k.forEach(function(te) {
              te && (te.__ = o);
            }), L = -1 * -9776 + -17 * -438 + 79 * -218; L < u._sb.length; L++)
              u.__h.push(u._sb[L]);
            u._sb = [], u.__h.length && a.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(k, u.__s, H), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(f, v, w);
          });
        }
        if (u.context = H, u.props = k, u.__P = t, u.__e = !(-28 * -341 + 4120 + -13667 * 1), D = Z.__r, M = -1254 + 73 * 59 + -3053, "prototype" in z && z.prototype.render) {
          for (u.state = u.__s, u.__d = !(-1 * -6431 + -110 * -30 + -9730), D && D(o), C = u.render(u.props, u.state, u.context), K = 0; K < u._sb.length; K++)
            u.__h.push(u._sb[K]);
          u._sb = [];
        } else
          do
            u.__d = !(-6656 + -7054 * 1 + 13711), D && D(o), C = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++M < 25);
        u.state = u.__s, u.getChildContext != null && (n = at(at({}, n), u.getChildContext())), p || u.getSnapshotBeforeUpdate == null || (w = u.getSnapshotBeforeUpdate(f, v)), rg(t, Ki(ee = C != null && C.type === Fe && C.key == null ? C.props.children : C) ? ee : [ee], o, e, n, i, r, a, g, s, x), u.base = o.__e, o.__u &= -(-7 * 1319 + -7365 + -16759 * -1), u.__h.length && a.push(u), E && (u.__E = u.__ = null);
      } catch (te) {
        o.__v = null, s || r != null ? (o.__e = g, o.__u |= s ? 7225 + 3 * -2355 : 49 * 18 + 1 * 1097 + 11 * -177, r[r.indexOf(g)] = null) : (o.__e = e.__e, o.__k = e.__k), Z.__e(te, o, e);
      }
    else
      r == null && o.__v === e.__v ? (o.__k = e.__k, o.__e = e.__e) : o.__e = s0(e.__e, o, e, n, i, r, a, s, x);
  (C = Z.diffed) && C(o);
}
function gg(t, o, e) {
  o.__d = void (-7 * -125 + -3 * 1178 + 2659);
  for (var n = 0; n < e.length; n++)
    $o(e[n], e[++n], e[++n]);
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
function s0(t, o, e, n, i, r, a, g, s) {
  var x, C, u, p, f, v, w, E = e.props, k = o.props, G = o.type;
  if (G === "svg" && (i = !(-7 * -877 + -2099 * 3 + 2 * 79)), r != null) {
    for (x = 3 * 3239 + -4933 + -4784; x < r.length; x++)
      if ((f = r[x]) && "setAttribute" in f == !!G && (G ? f.localName === G : -103 * 37 + -9929 + 13743 === f.nodeType)) {
        t = f, r[x] = null;
        break;
      }
  }
  if (t == null) {
    if (G === null)
      return document.createTextNode(k);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", G) : document.createElement(G, k.is && k), r = null, g = !(8090 + -3 * -43 + -8218);
  }
  if (G === null)
    E === k || g && t.data === k || (t.data = k);
  else {
    if (r = r && Rn.call(t.childNodes), E = e.props || Hn, !g && r != null)
      for (E = {}, x = 694 * -2 + -71 * -65 + -3227; x < t.attributes.length; x++)
        E[(f = t.attributes[x]).name] = f.value;
    for (x in E)
      f = E[x], x == "children" || (x == "dangerouslySetInnerHTML" ? u = f : x === "key" || x in k || zn(t, x, null, f, i));
    for (x in k)
      f = k[x], x == "children" ? p = f : x == "dangerouslySetInnerHTML" ? C = f : x == "value" ? v = f : x == "checked" ? w = f : x === "key" || g && typeof f != "function" || E[x] === f || zn(t, x, f, E[x], i);
    if (C)
      g || u && (C.__html === u.__html || C.__html === t.innerHTML) || (t.innerHTML = C.__html), o.__k = [];
    else if (u && (t.innerHTML = ""), rg(t, Ki(p) ? p : [p], o, e, n, i && G !== "foreignObject", r, a, r ? r[1596 + -133 * 12] : e.__k && nn(e, 6612 + 19 * 215 + -10697), g, s), r != null)
      for (x = r.length; x--; )
        r[x] != null && ig(r[x]);
    g || (x = "value", void (4916 + 1 * -7523 + 2607) !== v && (v !== t[x] || G === "progress" && !v || G === "option" && v !== E[x]) && zn(t, x, v, E[x], !(-608 + 1 * -9081 + 9690)), x = "checked", void (-2 * -1594 + 182 * 20 + 569 * -12) !== w && w !== t[x] && zn(t, x, w, E[x], !(6531 * -1 + 872 * -7 + -324 * -39)));
  }
  return t;
}
function $o(t, o, e) {
  try {
    typeof t == "function" ? t(o) : t.current = o;
  } catch (n) {
    Z.__e(n, e);
  }
}
function bo(t, o, e) {
  var n, i;
  if (Z.unmount && Z.unmount(t), (n = t.ref) && (n.current && n.current !== t.__e || $o(n, null, o)), (n = t.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (r) {
        Z.__e(r, o);
      }
    n.base = n.__P = null, t.__c = void (-6208 + 536 * -3 + 7816);
  }
  if (n = t.__k)
    for (i = 7909 * -1 + 891 * -3 + 962 * 11; i < n.length; i++)
      n[i] && bo(n[i], o, e || typeof t.type != "function");
  e || t.__e == null || ig(t.__e), t.__ = t.__e = t.__d = void (3764 * 2 + 12 * -476 + 2 * -908);
}
function c0(t, o, e) {
  return this.constructor(t, e);
}
function pt(t, o, e) {
  var n, i, r, a;
  Z.__ && Z.__(t, o), i = (n = typeof e == "function") ? null : e && e.__k || o.__k, r = [], a = [], zo(o, t = (!n && e || o).__k = be(Fe, null, [t]), i || Hn, Hn, void (-4961 + 41 * 121) !== o.ownerSVGElement, !n && e ? [e] : i ? null : o.firstChild ? Rn.call(o.childNodes) : null, r, !n && e ? e : i ? i.__e : o.firstChild, n, a), gg(r, t, a);
}
function qo(t, o) {
  pt(t, o, qo);
}
function _o(t, o, e) {
  var n, i, r, a, g = at({}, t.props);
  for (r in t.type && t.type.defaultProps && (a = t.type.defaultProps), o)
    r == "key" ? n = o[r] : r == "ref" ? i = o[r] : g[r] = void (9853 + 1 * -9853) === o[r] && void (9763 + 9566 * -1 + -197) !== a ? a[r] : o[r];
  return arguments.length > -9735 + -2903 * -2 + -1 * -3931 && (g.children = arguments.length > 191 * -5 + 13 * 758 + -8896 ? Rn.call(arguments, 5887 * 1 + -212 * 26 + -373) : e), Gn(t.type, g, n || t.key, i || t.ref, null);
}
function er(t, o) {
  var e = { __c: o = "__cC" + tg++, __: t, Consumer: function(n, i) {
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
Rn = ng.slice, Z = { __e: function(t, o, e, n) {
  for (var i, r, a; o = o.__; )
    if ((i = o.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, n || {}), a = i.__d), a)
          return i.__E = i;
      } catch (g) {
        t = g;
      }
  throw t;
} }, qa = 87 * -78 + 8557 + -1771, _a = function(t) {
  return t != null && t.constructor == null;
}, Oe.prototype.setState = function(t, o) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = at({}, this.state), typeof t == "function" && (t = t(at({}, e), this.props)), t && at(e, t), t != null && this.__v && (o && this._sb.push(o), mo(this));
}, Oe.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !(-599 * 1 + -588 + 1187), t && this.__h.push(t), mo(this));
}, Oe.prototype.render = Fe, St = [], eg = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ho = function(t, o) {
  return t.__v.__b - o.__v.__b;
}, fi.__r = 6947 * 1 + 127 * -17 + -4788, tg = 6483 + -1081 * 9 + 3246;
function tr() {
  return (tr = Object.assign ? Object.assign.bind() : function(t) {
    for (var o = -1 * -2101 + 5 * -1439 + 5095; o < arguments.length; o++) {
      var e = arguments[o];
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }
    return t;
  }).apply(this, arguments);
}
var I0 = ["context", "children"];
function x0(t) {
  this.getChildContext = function() {
    return t.context;
  };
  var o = t.children, e = function(n, i) {
    if (n == null)
      return {};
    var r, a, g = {}, s = Object.keys(n);
    for (a = 0; a < s.length; a++)
      i.indexOf(r = s[a]) >= 0 || (g[r] = n[r]);
    return g;
  }(t, I0);
  return _o(o, e);
}
function l0() {
  var t = {};
  t.detail = {}, t.bubbles = !(-492 + -6 * -82), t.cancelable = !(-7597 + 42 * 93 + 3691);
  var o = new CustomEvent("_preact", t);
  this.dispatchEvent(o), this._vdom = be(x0, tr({}, this._props, { context: o.detail.context }), function e(n, i) {
    if (2207 * -1 + 11 * -307 + 5587 === n.nodeType)
      return n.data;
    if (-2055 + 102 * 14 + 1 * 628 !== n.nodeType)
      return null;
    var r = [], a = {}, g = -35 * 182 + -4277 + 63 * 169, s = n.attributes, x = n.childNodes;
    for (g = s.length; g--; )
      s[g].name !== "slot" && (a[s[g].name] = s[g].value, a[sg(s[g].name)] = s[g].value);
    for (g = x.length; g--; ) {
      var C = e(x[g], null), u = x[g].slot;
      u ? a[u] = be($r, { name: u }, C) : r[g] = C;
    }
    var p = i ? be($r, null, r) : r;
    return be(i || n.nodeName.toLowerCase(), a, p);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? qo : pt)(this._vdom, this._root);
}
function sg(t) {
  return t.replace(/-(\w)/g, function(o, e) {
    return e ? e.toUpperCase() : "";
  });
}
function u0(t, o, e) {
  if (this._vdom) {
    var n = {};
    n[t] = e = e ?? void (1 * 2729 + -1 * 3179 + 450), n[sg(t)] = e, this._vdom = _o(this._vdom, n), pt(this._vdom, this._root);
  }
}
function C0() {
  pt(this._vdom = null, this._root);
}
function $r(t, o) {
  var e = this;
  return be("slot", tr({}, t, { ref: function(n) {
    n ? (e.ref = n, e._listener || (e._listener = function(i) {
      i.stopPropagation(), i.detail.context = o;
    }, n.addEventListener("_preact", e._listener))) : e.ref.removeEventListener("_preact", e._listener);
  } }));
}
function d0(t, o, e, n) {
  function i() {
    var r = Reflect.construct(HTMLElement, [], i);
    return r._vdomComponent = t, r._root = n && n.shadow ? r.attachShadow({ mode: n.mode || "open" }) : r, r;
  }
  return (i.prototype = Object.create(HTMLElement.prototype)).constructor = i, i.prototype.connectedCallback = l0, i.prototype.attributeChangedCallback = u0, i.prototype.disconnectedCallback = C0, e = e || t.observedAttributes || Object.keys(t.propTypes || {}), i.observedAttributes = e, e.forEach(function(r) {
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
function on(t, o, e) {
  if (e || arguments.length === 2)
    for (var n = 0, i = o.length, r; n < i; n++)
      (r || !(n in o)) && (r || (r = Array.prototype.slice.call(o, 0, n)), r[n] = o[n]);
  return t.concat(r || Array.prototype.slice.call(o));
}
function A0(t) {
  var o = Object.create(null);
  return function(e) {
    return o[e] === void 0 && (o[e] = t(e)), o[e];
  };
}
var p0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, f0 = A0(function(t) {
  return p0.test(t) || t.charCodeAt(5872 + 7414 * -1 + -2 * -771) === 62 * -67 + 4676 + 3 * -137 && t.charCodeAt(7 * -25 + 1866 * -1 + 2042) === 29 * 323 + 4061 + -6659 * 2 && t.charCodeAt(-1 * -8434 + -2 * -3229 + -14890 * 1) < -1053 + -2 * -572;
}), ft, q, oo, qr, rn = 458 + 1 * -458, cg = [], ri = [], _r = Z.__b, ea = Z.__r, ta = Z.diffed, na = Z.__c, ia = Z.unmount;
function xn(t, o) {
  Z.__h && Z.__h(q, t, rn || o), rn = -2 * -3613 + 1 * 6271 + -13497;
  var e = {};
  e.__ = [], e.__h = [];
  var n = q.__H || (q.__H = e), i = {};
  return i.__V = ri, t >= n.__.length && n.__.push(i), n.__[t];
}
function Te(t) {
  return rn = -3616 + -593 * -9 + -1720, Ig(xg, t);
}
function Ig(t, o, e) {
  var n = xn(ft++, 2);
  if (n.t = t, !n.__c && (n.__ = [e ? e(o) : xg(void 0, o), function(g) {
    var s = n.__N ? n.__N[0] : n.__[0], x = n.t(s, g);
    s !== x && (n.__N = [x, n.__[4334 + 2586 * -3 + 3425]], n.__c.setState({}));
  }], n.__c = q, !q.u)) {
    var i = function(g, s, x) {
      if (!n.__c.__H)
        return !0;
      var C = n.__c.__H.__.filter(function(p) {
        return p.__c;
      });
      if (C.every(function(p) {
        return !p.__N;
      }))
        return !r || r.call(this, g, s, x);
      var u = !(8029 + -1 * 4808 + -70 * 46);
      return C.forEach(function(p) {
        if (p.__N) {
          var f = p.__[0];
          p.__ = p.__N, p.__N = void 0, f !== p.__[0] && (u = !0);
        }
      }), !(!u && n.__c.props === g) && (!r || r.call(this, g, s, x));
    };
    q.u = !(6103 + 6 * -327 + -4141);
    var r = q.shouldComponentUpdate, a = q.componentWillUpdate;
    q.componentWillUpdate = function(g, s, x) {
      if (this.__e) {
        var C = r;
        r = void (6502 + -8297 * -1 + 3 * -4933), i(g, s, x), r = C;
      }
      a && a.call(this, g, s, x);
    }, q.shouldComponentUpdate = i;
  }
  return n.__N || n.__;
}
function Ae(t, o) {
  var e = xn(ft++, 3);
  !Z.__s && nr(e.__H, o) && (e.__ = t, e.i = o, q.__H.__h.push(e));
}
function Hi(t, o) {
  var e = xn(ft++, 4);
  !Z.__s && nr(e.__H, o) && (e.__ = t, e.i = o, q.__h.push(e));
}
function ht(t) {
  return rn = 3 * -981 + -8488 + 11436 * 1, Qe(function() {
    var o = {};
    return o.current = t, o;
  }, []);
}
function h0(t, o, e) {
  rn = 6600 + -3 * -433 + 9 * -877, Hi(function() {
    return typeof t == "function" ? (t(o()), function() {
      return t(null);
    }) : t ? (t.current = o(), function() {
      return t.current = null;
    }) : void (87 * -83 + -2114 + 9335);
  }, e == null ? e : e.concat(t));
}
function Qe(t, o) {
  var e = xn(ft++, 7);
  return nr(e.__H, o) ? (e.__V = t(), e.i = o, e.__h = t, e.__V) : e.__;
}
function hi(t, o) {
  return rn = -1 * 5642 + 4830 + 820 * 1, Qe(function() {
    return t;
  }, o);
}
function Wi(t) {
  var o = q.context[t.__c], e = xn(ft++, 43 * 131 + -2295 + -3329);
  return e.c = t, o ? (e.__ == null && (e.__ = !(-1893 * -5 + 34 * -4 + 491 * -19), o.sub(q)), o.props.value) : t.__;
}
function yo(t, o) {
  Z.useDebugValue && Z.useDebugValue(o ? o(t) : t);
}
function m0() {
  var t = xn(ft++, 11);
  if (!t.__) {
    for (var o = q.__v; o !== null && !o.__m && o.__ !== null; )
      o = o.__;
    var e = o.__m || (o.__m = [3532 + 39 * 147 + -9265, -8949 + 1 * 8949]);
    t.__ = "P" + e[-421 * 13 + 53 * -32 + 7169] + "-" + e[-715 + -331 * 23 + 8329]++;
  }
  return t.__;
}
function b0() {
  for (var t; t = cg.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(ai), t.__H.__h.forEach(vo), t.__H.__h = [];
      } catch (o) {
        t.__H.__h = [], Z.__e(o, t.__v);
      }
}
Z.__b = function(t) {
  q = null, _r && _r(t);
}, Z.__r = function(t) {
  ea && ea(t), ft = -28 * 193 + 4873 * 2 + 2 * -2171;
  var o = (q = t.__c).__H;
  o && (oo === q ? (o.__h = [], q.__h = [], o.__.forEach(function(e) {
    e.__N && (e.__ = e.__N), e.__V = ri, e.__N = e.i = void (-1 * -9547 + 1881 + -11428);
  })) : (o.__h.forEach(ai), o.__h.forEach(vo), o.__h = [], ft = 857 * 7 + -7486 + 1487)), oo = q;
}, Z.diffed = function(t) {
  ta && ta(t);
  var o = t.__c;
  o && o.__H && (o.__H.__h.length && (-6602 + -2411 * 1 + 9014 !== cg.push(o) && qr === Z.requestAnimationFrame || ((qr = Z.requestAnimationFrame) || y0)(b0)), o.__H.__.forEach(function(e) {
    e.i && (e.__H = e.i), e.__V !== ri && (e.__ = e.__V), e.i = void (5309 * 1 + 3407 + -4 * 2179), e.__V = ri;
  })), oo = q = null;
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
  }), na && na(t, o);
}, Z.unmount = function(t) {
  ia && ia(t);
  var o, e = t.__c;
  e && e.__H && (e.__H.__.forEach(function(n) {
    try {
      ai(n);
    } catch (i) {
      o = i;
    }
  }), e.__H = void (2261 * -3 + 9164 + -2381), o && Z.__e(o, e.__v));
};
var oa = typeof requestAnimationFrame == "function";
function y0(t) {
  var o, e = function() {
    clearTimeout(n), oa && cancelAnimationFrame(o), setTimeout(t);
  }, n = setTimeout(e, 100);
  oa && (o = requestAnimationFrame(e));
}
function ai(t) {
  var o = q, e = t.__c;
  typeof e == "function" && (t.__c = void (-4 * -2444 + 509 * 19 + 19447 * -1), e()), q = o;
}
function vo(t) {
  var o = q;
  t.__c = t.__(), q = o;
}
function nr(t, o) {
  return !t || t.length !== o.length || o.some(function(e, n) {
    return e !== t[n];
  });
}
function xg(t, o) {
  return typeof o == "function" ? o(t) : o;
}
function lg(t, o) {
  for (var e in o)
    t[e] = o[e];
  return t;
}
function wo(t, o) {
  for (var e in t)
    if (e !== "__source" && !(e in o))
      return !(1693 + 10 * 740 + -21 * 433);
  for (var n in o)
    if (n !== "__source" && t[n] !== o[n])
      return !0;
  return !(395 * -2 + 1 * -8258 + 1 * 9049);
}
function Bo(t) {
  this.props = t;
}
function v0(t, o) {
  function e(i) {
    var r = this.props.ref, a = r == i.ref;
    return !a && r && (r.call ? r(null) : r.current = null), o ? !o(this.props, i) || !a : wo(this.props, i);
  }
  function n(i) {
    return this.shouldComponentUpdate = e, be(t, i);
  }
  return n.displayName = "Memo(" + (t.displayName || t.name) + ")", n.prototype.isReactComponent = !(-8528 * 1 + -28 * 199 + 14100), n.__f = !(-1249 * 7 + 3514 + 5229), n;
}
(Bo.prototype = new Oe()).isPureReactComponent = !(4851 + 9409 * -1 + -4558 * -1), Bo.prototype.shouldComponentUpdate = function(t, o) {
  return wo(this.props, t) || wo(this.state, o);
};
var ra = Z.__b;
Z.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), ra && ra(t);
};
var w0 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 1 * -3251 + 3305 + 3857;
function ug(t) {
  function o(e) {
    var n = lg({}, e);
    return delete n.ref, t(n, e.ref || null);
  }
  return o.$$typeof = w0, o.render = o, o.prototype.isReactComponent = o.__f = !(192 * -33 + 1079 + -751 * -7), o.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", o;
}
var aa = function(t, o) {
  return t == null ? null : st(st(t).map(o));
}, B0 = { map: aa, forEach: aa, count: function(t) {
  return t ? st(t).length : 71 * -73 + -1058 * -7 + -2223;
}, only: function(t) {
  var o = st(t);
  if (-1175 * -1 + 5871 + -7045 !== o.length)
    throw "Children.only";
  return o[261 * -31 + -3371 + 5731 * 2];
}, toArray: st }, S0 = Z.__e;
Z.__e = function(t, o, e, n) {
  if (t.then) {
    for (var i, r = o; r = r.__; )
      if ((i = r.__c) && i.__c)
        return o.__e == null && (o.__e = e.__e, o.__k = e.__k), i.__c(t, o);
  }
  S0(t, o, e, n);
};
var ga = Z.unmount;
function Cg(t, o, e) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), t.__c.__H = null), (t = lg({}, t)).__c != null && (t.__c.__P === e && (t.__c.__P = o), t.__c = null), t.__k = t.__k && t.__k.map(function(n) {
    return Cg(n, o, e);
  })), t;
}
function dg(t, o, e) {
  return t && e && (t.__v = null, t.__k = t.__k && t.__k.map(function(n) {
    return dg(n, o, e);
  }), t.__c && t.__c.__P === o && (t.__e && e.appendChild(t.__e), t.__c.__e = !(951 * 1 + 3 * 3110 + -10281), t.__c.__P = e)), t;
}
function gi() {
  this.__u = -736 + -4 * -184, this.t = null, this.__b = null;
}
function Ag(t) {
  var o = t.__.__c;
  return o && o.__a && o.__a(t);
}
function G0(t) {
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
  return i.displayName = "Lazy", i.__f = !0, i;
}
function vn() {
  this.u = null, this.o = null;
}
Z.unmount = function(t) {
  var o = t.__c;
  o && o.__R && o.__R(), o && 1 * 4364 + 7 * -881 + 1835 & t.__u && (t.type = null), ga && ga(t);
}, (gi.prototype = new Oe()).__c = function(t, o) {
  var e = o.__c, n = this;
  n.t == null && (n.t = []), n.t.push(e);
  var i = Ag(n.__v), r = !(14670 + 1 * -14669), a = function() {
    r || (r = !(5 * 1546 + 53 * -44 + -5398), e.__R = null, i ? i(g) : g());
  };
  e.__R = a;
  var g = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var s = n.state.__a;
        n.__v.__k[-2555 + -1285 * 3 + 6410] = dg(s, s.__c.__P, s.__c.__O);
      }
      var x;
      for (n.setState({ __a: n.__b = null }); x = n.t.pop(); )
        x.forceUpdate();
    }
  };
  n.__u++ || -1646 * 1 + 2955 * -1 + 4633 & o.__u || n.setState({ __a: n.__b = n.__v.__k[-2 * 3641 + -1583 * -1 + 5699] }), t.then(a, a);
}, gi.prototype.componentWillUnmount = function() {
  this.t = [];
}, gi.prototype.render = function(t, o) {
  if (this.__b) {
    if (this.__v.__k) {
      var e = document.createElement("div"), n = this.__v.__k[-5663 * -1 + -2775 + 2 * -1444].__c;
      this.__v.__k[7 * 61 + -111 * 35 + 3458] = Cg(this.__b, e, n.__O = n.__P);
    }
    this.__b = null;
  }
  var i = o.__a && be(Fe, null, t.fallback);
  return i && (i.__u &= -(8354 + -71 * -25 + 5048 * -2)), [be(Fe, null, o.__a ? null : t.children), i];
};
var sa = function(t, o, e) {
  if (++e[-915 + -1 * -4341 + -3425] === e[0] && t.o.delete(o), t.props.revealOrder && (t.props.revealOrder[4333 * -1 + -2877 + -10 * -721] !== "t" || !t.o.size))
    for (e = t.u; e; ) {
      for (; e.length > -6891 + 6 * 1149; )
        e.pop()();
      if (e[7525 + 1 * -6790 + -734] < e[2847 * -2 + 4 * -1319 + 10970])
        break;
      t.u = e = e[729 + 727 * -1];
    }
};
function Z0(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function k0(t) {
  var o = this, e = t.i;
  o.componentWillUnmount = function() {
    pt(null, o.l), o.l = null, o.i = null;
  }, o.i && o.i !== e && o.componentWillUnmount(), o.l || (o.i = e, o.l = { nodeType: 1, parentNode: e, childNodes: [], appendChild: function(n) {
    this.childNodes.push(n), o.i.appendChild(n);
  }, insertBefore: function(n, i) {
    this.childNodes.push(n), o.i.appendChild(n);
  }, removeChild: function(n) {
    this.childNodes.splice(this.childNodes.indexOf(n) >>> -37 * -239 + 3 * -521 + -7279, 9939 + -2903 * -1 + -12841), o.i.removeChild(n);
  } }), pt(be(Z0, { context: o.context }, t.__v), o.l);
}
function K0(t, o) {
  var e = {};
  e.__v = t, e.i = o;
  var n = be(k0, e);
  return n.containerInfo = o, n;
}
(vn.prototype = new Oe()).__a = function(t) {
  var o = this, e = Ag(o.__v), n = o.o.get(t);
  return n[-70 * -1 + -25 * -29 + -795]++, function(i) {
    var r = function() {
      o.props.revealOrder ? (n.push(i), sa(o, t, n)) : i();
    };
    e ? e(r) : r();
  };
}, vn.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var o = st(t.children);
  t.revealOrder && t.revealOrder[2383 + 1 * -2383] === "b" && o.reverse();
  for (var e = o.length; e--; )
    this.o.set(o[e], this.u = [-2 * 2527 + -5881 * 1 + 10936, 2 * -1285 + 5119 * 1 + -2549, this.u]);
  return t.children;
}, vn.prototype.componentDidUpdate = vn.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(o, e) {
    sa(t, e, o);
  });
};
var pg = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 92218 + -20285 * -5 + -11 * 12140, H0 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, W0 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, O0 = /[A-Z0-9]/g, V0 = typeof document < "u", R0 = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
};
function E0(t, o, e) {
  return o.__k == null && (o.textContent = ""), pt(t, o), typeof e == "function" && e(), t ? t.__c : null;
}
function P0(t, o, e) {
  return qo(t, o), typeof e == "function" && e(), t ? t.__c : null;
}
Oe.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(Oe.prototype, t, { configurable: !(1 * 3594 + 1 * -9439 + 5845), get: function() {
    return this["UNSAFE_" + t];
  }, set: function(o) {
    var e = {};
    e.configurable = !(421 * 11 + -16 * 82 + -1 * 3319), e.writable = !(335 * -27 + -211 * 45 + 18 * 1030), e.value = o, Object.defineProperty(this, t, e);
  } });
});
var ca = Z.event;
function N0() {
}
function Y0() {
  return this.cancelBubble;
}
function T0() {
  return this.defaultPrevented;
}
Z.event = function(t) {
  return ca && (t = ca(t)), t.persist = N0, t.isPropagationStopped = Y0, t.isDefaultPrevented = T0, t.nativeEvent = t;
};
var si = {};
si.enumerable = !(-8558 + 2 * -393 + 9345), si.configurable = !(-5244 * -1 + -40 + -5204), si.get = function() {
  return this.class;
};
var ir, D0 = si, Ia = Z.vnode;
Z.vnode = function(t) {
  typeof t.type == "string" && function(o) {
    var e = o.props, n = o.type, i = {};
    for (var r in e) {
      var a = e[r];
      if (!(r === "value" && "defaultValue" in e && a == null || V0 && r === "children" && n === "noscript" || r === "class" || r === "className")) {
        var g = r.toLowerCase();
        r === "defaultValue" && "value" in e && e.value == null ? r = "value" : r === "download" && !(7118 + 37 * 78 + -10004 * 1) === a ? a = "" : g === "ondoubleclick" ? r = "ondblclick" : g !== "onchange" || n !== "input" && n !== "textarea" || R0(e.type) ? g === "onfocus" ? r = "onfocusin" : g === "onblur" ? r = "onfocusout" : W0.test(r) ? r = g : -(2 * 4071 + -5207 + -9 * 326) === n.indexOf("-") && H0.test(r) ? r = r.replace(O0, "-$&").toLowerCase() : a === null && (a = void (8273 + 6 * -347 + -6191)) : g = r = "oninput", g === "oninput" && i[r = g] && (r = "oninputCapture"), i[r] = a;
      }
    }
    n == "select" && i.multiple && Array.isArray(i.value) && (i.value = st(e.children).forEach(function(s) {
      s.props.selected = -(-9557 + 4 * 1681 + 2834) != i.value.indexOf(s.props.value);
    })), n == "select" && i.defaultValue != null && (i.value = st(e.children).forEach(function(s) {
      s.props.selected = i.multiple ? -(-2 * -1067 + -71 * 134 + 7381) != i.defaultValue.indexOf(s.props.value) : i.defaultValue == s.props.value;
    })), e.class && !e.className ? (i.class = e.class, Object.defineProperty(i, "className", D0)) : (e.className && !e.class || e.class && e.className) && (i.class = i.className = e.className), o.props = i;
  }(t), t.$$typeof = pg, Ia && Ia(t);
};
var xa = Z.__r;
Z.__r = function(t) {
  xa && xa(t), ir = t.__c;
};
var la = Z.diffed;
Z.diffed = function(t) {
  la && la(t);
  var o = t.props, e = t.__e;
  e != null && t.type === "textarea" && "value" in o && o.value !== e.value && (e.value = o.value == null ? "" : o.value), ir = null;
};
var fg = {};
fg.readContext = function(t) {
  return ir.__n[t.__c].props.value;
};
var hg = {};
hg.current = fg;
var mg = {};
mg.ReactCurrentDispatcher = hg;
var F0 = mg;
function L0(t) {
  return be.bind(null, t);
}
function Oi(t) {
  return !!t && t.$$typeof === pg;
}
function X0(t) {
  return Oi(t) && t.type === Fe;
}
function j0(t) {
  return Oi(t) ? _o.apply(null, arguments) : t;
}
function M0(t) {
  return !!t.__k && (pt(null, t), !(-5469 + 163 * -51 + 3 * 4594));
}
function U0(t) {
  return t && (t.base || 3007 + 34 * -141 + 1788 === t.nodeType && t) || null;
}
var J0 = function(t, o) {
  return t(o);
}, Q0 = function(t, o) {
  return t(o);
}, z0 = Fe;
function bg(t) {
  t();
}
function $0(t) {
  return t;
}
function q0() {
  return [!(-3691 + -284 * -13), bg];
}
var _0 = Hi, ec = Oi;
function tc(t, o) {
  var e = o(), n = Te({ h: { __: e, v: o } }), i = n[101 * -29 + 7226 + -4297].h, r = n[-5 * 447 + 995 * -4 + 6216];
  return Hi(function() {
    i.__ = e, i.v = o, ro(i) && r({ h: i });
  }, [t, e, o]), Ae(function() {
    return ro(i) && r({ h: i }), t(function() {
      ro(i) && r({ h: i });
    });
  }, [t]), e;
}
function ro(t) {
  var o, e, n = t.v, i = t.__;
  try {
    var r = n();
    return !((o = i) === (e = r) && (7463 + -1 * -9799 + -17262 !== o || (62 * 97 + 1608 * -2 + -2797) / o == (5029 + -7 * -1178 + 1 * -13274) / e) || o != o && e != e);
  } catch {
    return !(9321 + 3107 * -3);
  }
}
var Y = {};
Y.useState = Te, Y.useId = m0, Y.useReducer = Ig, Y.useEffect = Ae, Y.useLayoutEffect = Hi, Y.useInsertionEffect = _0, Y.useTransition = q0, Y.useDeferredValue = $0, Y.useSyncExternalStore = tc, Y.startTransition = bg, Y.useRef = ht, Y.useImperativeHandle = h0, Y.useMemo = Qe, Y.useCallback = hi, Y.useContext = Wi, Y.useDebugValue = yo, Y.version = "17.0.2", Y.Children = B0, Y.render = E0, Y.hydrate = P0, Y.unmountComponentAtNode = M0, Y.createPortal = K0, Y.createElement = be, Y.createContext = er, Y.createFactory = L0, Y.cloneElement = j0, Y.createRef = r0, Y.Fragment = Fe, Y.isValidElement = Oi, Y.isElement = ec, Y.isFragment = X0, Y.findDOMNode = U0, Y.Component = Oe, Y.PureComponent = Bo, Y.memo = v0, Y.forwardRef = ug, Y.flushSync = Q0, Y.unstable_batchedUpdates = J0, Y.StrictMode = z0, Y.Suspense = gi, Y.SuspenseList = vn, Y.lazy = G0, Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F0;
var Ot = Y, nc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ic(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function oc(t) {
  return t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function rc(t) {
  return t && Object.prototype.hasOwnProperty.call(t, "default") && Object.keys(t).length === 1 ? t.default : t;
}
function ac(t) {
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
const gc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: nc,
  getAugmentedNamespace: ac,
  getDefaultExportFromCjs: ic,
  getDefaultExportFromNamespaceIfNotNamed: rc,
  getDefaultExportFromNamespaceIfPresent: oc
}, Symbol.toStringTag, { value: "Module" }));
var sc = function(o, e, n, i) {
  var r = n ? n.call(i, o, e) : void 0;
  if (r !== void (1985 * 1 + -6391 + -4406 * -1))
    return !!r;
  if (o === e)
    return !0;
  if (typeof o != "object" || !o || typeof e != "object" || !e)
    return !1;
  var a = Object.keys(o), g = Object.keys(e);
  if (a.length !== g.length)
    return !1;
  for (var s = Object.prototype.hasOwnProperty.bind(e), x = -568 * -7 + 7 * 1219 + -1787 * 7; x < a.length; x++) {
    var C = a[x];
    if (!s(C))
      return !1;
    var u = o[C], p = e[C];
    if (r = n ? n.call(i, u, p, C) : void (-9022 + 9022 * 1), r === !1 || r === void (2 * 2991 + -7373 * 1 + 1 * 1391) && u !== p)
      return !1;
  }
  return !0;
};
const cc = gc.getDefaultExportFromCjs(sc);
var $ = "-ms-", Zn = "-moz-", J = "-webkit-", yg = "comm", Vi = "rule", or = "decl", Ic = "@import", vg = "@keyframes", xc = "@layer", lc = Math.abs, rr = String.fromCharCode, So = Object.assign;
function uc(t, o) {
  return le(t, 3284 * 1 + 369 * 7 + -5867) ^ -1436 + 2937 * 3 + -7330 ? (((o << 1489 * -6 + -2 * -237 + 8462 ^ le(t, 5614 + -43 * -225 + -1 * 15289)) << 5089 * -1 + 3326 * 2 + -1561 ^ le(t, -463 * -5 + -1 * -3253 + -5567 * 1)) << -12761 + 1 * 12763 ^ le(t, 5977 + 226 * -1 + -5749)) << 2 ^ le(t, 3 * 1364 + -10 * 191 + 2179 * -1) : -3457 + -2 * 2582 + 8621;
}
function wg(t) {
  return t.trim();
}
function rt(t, o) {
  return (t = o.exec(t)) ? t[-4137 + 2 * -4038 + -59 * -207] : t;
}
function T(t, o, e) {
  return t.replace(o, e);
}
function ci(t, o) {
  return t.indexOf(o);
}
function le(t, o) {
  return t.charCodeAt(o) | -2312 + 9469 * 1 + -7157;
}
function an(t, o, e) {
  return t.slice(o, e);
}
function Ue(t) {
  return t.length;
}
function Bg(t) {
  return t.length;
}
function wn(t, o) {
  return o.push(t), t;
}
function Cc(t, o) {
  return t.map(o).join("");
}
function ua(t, o) {
  return t.filter(function(e) {
    return !rt(e, o);
  });
}
var Ri = -10289 + -3 * -3430, gn = 1, Sg = -6030 + 1 * 6030, Re = -11820 + -60 * -197, ge = 8895 + 1339 * -1 + -7556, ln = "";
function Ei(t, o, e, n, i, r, a, g) {
  var s = {};
  return s.value = t, s.root = o, s.parent = e, s.type = n, s.props = i, s.children = r, s.line = Ri, s.column = gn, s.length = a, s.return = "", s.siblings = g, s;
}
function lt(t, o) {
  return So(Ei("", null, null, "", null, null, -126 * 6 + -1 * -8754 + -7998, t.siblings), t, { length: -t.length }, o);
}
function Ut(t) {
  for (; t.root; )
    t = lt(t.root, { children: [t] });
  wn(t, t.siblings);
}
function dc() {
  return ge;
}
function Ac() {
  return ge = Re > 9925 + 1 * -5009 + -4916 ? le(ln, --Re) : -5101 + 148 * 19 + -763 * -3, gn--, ge === -3171 + 6113 * 1 + -1 * 2932 && (gn = 2721 + 1032 * -2 + -656, Ri--), ge;
}
function De() {
  return ge = Re < Sg ? le(ln, Re++) : 2 * -3530 + -1607 + 8667, gn++, ge === -142 * -47 + 4700 + 2 * -5682 && (gn = 23 * -173 + -4916 + 8896, Ri++), ge;
}
function Kt() {
  return le(ln, Re);
}
function Ii() {
  return Re;
}
function Pi(t, o) {
  return an(ln, t, o);
}
function Go(t) {
  switch (t) {
    case 1 * 5164 + -23 * 359 + 3093:
    case -1788 * -1 + 71 * 32 + -4051:
    case 10:
    case 13:
    case -5370 + 113 * -5 + -17 * -351:
      return 7 * -253 + 9283 * -1 + 11059;
    case -7297 * 1 + 3483 + -1 * -3847:
    case 43:
    case 1491 + -9 * 577 + 3746:
    case -33 * -218 + 9527 + -2382 * 7:
    case -2 * -3329 + -1 * -4543 + -11139:
    case 64:
    case 18423 + 107 * -171:
    case 1 * -7057 + -8986 * -1 + -1870:
    case 123:
    case 125:
      return -313 * -5 + 759 * -5 + 2234 * 1;
    case -270 + 1 * 913 + -585:
      return -69 * -101 + -8209 * -1 + -15175 * 1;
    case -9930 + -41 * 50 + 12014:
    case 39:
    case -1350 * -5 + 1897 + -2869 * 3:
    case 4948 + -12 * -806 + -14529:
      return -8761 * 1 + 2729 * -2 + 14221;
    case 5373 + -124 * 43:
    case -8474 * -1 + 1719 * 3 + -13538:
      return 4827 * 2 + 6287 + 15940 * -1;
  }
  return 0;
}
function pc(t) {
  return Ri = gn = 5929 + 1 * 9759 + -15687, Sg = Ue(ln = t), Re = 0, [];
}
function fc(t) {
  return ln = "", t;
}
function ao(t) {
  return wg(Pi(Re - (-2197 + 1 * 9883 + -7685), Zo(t === 6054 + 6281 * -1 + 318 * 1 ? t + (-2 * 4823 + -1237 * -2 + 422 * 17) : t === 40 ? t + (266 * 15 + -1032 + -2957 * 1) : t)));
}
function hc(t) {
  for (; (ge = Kt()) && ge < 115 * -17 + 5128 + 157 * -20; )
    De();
  return Go(t) > 442 + -9936 * -1 + -10376 || Go(ge) > -1683 * 2 + -972 * 9 + 12117 * 1 ? "" : " ";
}
function mc(t, o) {
  for (; --o && De() && !(ge < 48 || ge > -3 * 3217 + 9452 + 43 * 7 || ge > 7815 + -9 * 862 && ge < -11148 + -1 * -11213 || ge > 11 * 375 + -1 * 6827 + 2772 && ge < -2 * 2379 + -9823 + 14678); )
    ;
  return Pi(t, Ii() + (o < -3 * 1270 + -155 * 29 + -1 * -8311 && Kt() == -7830 + -2462 * 1 + 10324 && De() == -20 * -296 + -2576 + -3312));
}
function Zo(t) {
  for (; De(); )
    switch (ge) {
      case t:
        return Re;
      case 151 * -53 + 3747 + 4290:
      case 7 * 687 + 55 + -4825:
        t !== 2169 * 1 + 83 * 1 + 1109 * -2 && t !== 39 && Zo(ge);
        break;
      case 21 * -313 + -3 * -2919 + 4 * -536:
        t === 2 * 1907 + -1171 + 1 * -2602 && Zo(t);
        break;
      case 6329 * 1 + 2886 * 2 + -4003 * 3:
        De();
        break;
    }
  return Re;
}
function bc(t, o) {
  for (; De() && t + ge !== -6878 + 25 * 277 + (-1696 * -2 + 464 + 3846 * -1); )
    if (t + ge === 42 + (-6966 + -4826 * 1 + 11834) && Kt() === 7970 + -14 * 383 + 13 * -197)
      break;
  return "/*" + Pi(o, Re - (271 * -7 + 6 * 267 + -74 * -4)) + "*" + rr(t === -1274 + 1 * 1321 ? t : De());
}
function yc(t) {
  for (; !Go(Kt()); )
    De();
  return Pi(t, Re);
}
function vc(t) {
  return fc(xi("", null, null, null, [""], t = pc(t), 455 * -6 + -4770 + 7500, [6215 + -4 * 1021 + -2131], t));
}
function xi(t, o, e, n, i, r, a, g, s) {
  for (var x = 0, C = 1 * -9855 + -2 * -3581 + 2693, u = a, p = 1366 * -7 + -1 * -6241 + 3321, f = 393 * 2 + 3150 + 246 * -16, v = 1595 + 1 * 7853 + 4 * -2362, w = 1 * 7673 + -379 * 15 + -1987, E = 11229 + -802 * 14, k = -528 + -236 * 38 + 9497 * 1, G = 0, H = "", L = i, D = r, M = n, K = H; E; )
    switch (v = G, G = De()) {
      case 9656 * 1 + 6443 + -53 * 303:
        if (v != 138 * 1 + -2647 + -2617 * -1 && le(K, u - (-9168 + 7 * -302 + 11283)) == 1783 + -1 * -6777 + 26 * -327) {
          ci(K += T(ao(G), "&", "&\f"), "&\f") != -(-5285 + 2 * 2643) && (k = -(-3752 + -1 * 277 + 4030));
          break;
        }
      case 2 * -3554 + -1873 + 9015:
      case 39:
      case 2658 + -2 * -1163 + -699 * 7:
        K += ao(G);
        break;
      case -4033 + -1 * -4042:
      case 7913 + 2 * 4972 + -17847:
      case -268 + -1981 * -3 + 19 * -298:
      case -8105 + 2 * 393 + 7351:
        K += hc(v);
        break;
      case -1 * 185 + -9191 + 9468:
        K += mc(Ii() - 1, -4172 + 107 * -5 + -2357 * -2);
        continue;
      case 911 * 3 + 5 * -809 + 1359:
        switch (Kt()) {
          case -1 * -9923 + -1549 + -8332:
          case 47:
            wn(wc(bc(De(), Ii()), o, e, s), s);
            break;
          default:
            K += "/";
        }
        break;
      case (1 * -4072 + -5631 + -2 * -4913) * w:
        g[x++] = Ue(K) * k;
      case (-7668 + -1 * 7585 + 15378) * w:
      case 4 * -2374 + -1402 + 10957:
      case 1815 + -16 * 557 + 7097:
        switch (G) {
          case -1 * -9771 + 9274 * 1 + -1 * 19045:
          case 7 * 139 + 4745 + -5593:
            E = 0;
          case 59 + C:
            k == -(-25 * -91 + 1585 * -5 + 1 * 5651) && (K = T(K, /\f/g, "")), f > -8 * -833 + 4357 * 1 + -103 * 107 && Ue(K) - u && wn(f > 3667 + -3635 * 1 ? da(K + ";", n, e, u - (-3011 * -2 + 4932 + -10953), s) : da(T(K, " ", "") + ";", n, e, u - (9969 + -1 * 9391 + -12 * 48), s), s);
            break;
          case 3033 * -1 + -372 * 16 + 17 * 532:
            K += ";";
          default:
            if (wn(M = Ca(K, o, e, x, C, i, g, H, L = [], D = [], u, r), r), G === 4629 + 254 * -2 + 1999 * -2)
              if (C === -4328 + -541 * -8)
                xi(K, o, M, M, L, r, u, g, D);
              else
                switch (p === -2541 + 101 * -11 + 3751 && le(K, 9885 + -1 * 9220 + -1 * 662) === 110 ? -4647 + 1198 * -8 + 14331 : p) {
                  case -40 * -110 + 3615 + -7915:
                  case 7687 + -527 * 11 + -1782:
                  case -3175 + -1 * 8219 + 11503:
                  case -2012 + 3 * 709:
                    xi(t, M, M, n && wn(Ca(t, M, M, -1152 * -3 + -3990 + 534, 4286 + -8705 * -1 + 11 * -1181, i, g, H, i, L = [], u, D), D), i, D, u, g, n ? L : D);
                    break;
                  default:
                    xi(K, M, M, M, [""], D, -10 * 676 + -2708 + 9468, g, D);
                }
        }
        x = C = f = 0, w = k = -89 * 16 + -6996 + -7 * -1203, H = K = "", u = a;
        break;
      case -1061 * 4 + -1 * 2481 + 6783:
        u = 1 + Ue(K), f = v;
      default:
        if (w < -4496 + -4497 * -1) {
          if (G == 272 * 8 + 3774 + -5827 * 1)
            --w;
          else if (G == 4126 + -28 * 187 + 5 * 247 && w++ == 466 + 3 * -1373 + 3653 && Ac() == 2 * -382 + -419 * -7 + 1022 * -2)
            continue;
        }
        switch (K += rr(G), G * w) {
          case 14 * 137 + 2313 + -4193:
            k = C > -5382 + 1732 * -5 + -1 * -14042 ? -1 * -5119 + -7 * 161 + -3991 * 1 : (K += "\f", -(-3023 * -3 + -1396 + -7672));
            break;
          case -773 * -3 + -731 * 7 + 2842:
            g[x++] = (Ue(K) - (-2 * -1108 + -1 * -1471 + -3686)) * k, k = 2439 + 1219 * -2;
            break;
          case 64:
            Kt() === 2085 + 7 * -1223 + -6521 * -1 && (K += ao(De())), p = Kt(), C = u = Ue(H = K += yc(Ii())), G++;
            break;
          case 9874 + 1 * 4271 + -25 * 564:
            v === 25 * 95 + -8283 + 5953 && Ue(K) == -8332 + -8334 * -1 && (w = -397 + -1 * -397);
        }
    }
  return r;
}
function Ca(t, o, e, n, i, r, a, g, s, x, C, u) {
  for (var p = i - 1, f = i === 14863 + 14863 * -1 ? r : [""], v = Bg(f), w = 125 * 16 + -5 * -1565 + -9825, E = 0, k = 226 * -14 + 2015 + 1149 * 1; w < n; ++w)
    for (var G = 0, H = an(t, p + (3517 * -1 + 2624 + -447 * -2), p = lc(E = a[w])), L = t; G < v; ++G)
      (L = wg(E > 1 * -2521 + 1659 + -1 * -862 ? f[G] + " " + H : T(H, /&\f/g, f[G]))) && (s[k++] = L);
  return Ei(t, o, e, i === -73 * -41 + -1 * 2197 + -796 ? Vi : g, s, x, C, u);
}
function wc(t, o, e, n) {
  return Ei(t, o, e, yg, rr(dc()), an(t, 2, -(674 * -6 + 8410 + -4364)), 9323 + -6341 * -1 + -712 * 22, n);
}
function da(t, o, e, n, i) {
  return Ei(t, o, e, or, an(t, 6887 + -71 * 97, n), an(t, n + (-8726 + -231 * -5 + 7572), -(-8 * -230 + 71 * -118 + 6539)), n, i);
}
function Gg(t, o, e) {
  switch (uc(t, o)) {
    case 7054 * -1 + -21 * 185 + 16042:
      return J + "print-" + t + t;
    case 5737:
    case -3546 + 101 * -12 + 8959:
    case 5751 + -18 * 143:
    case 3433:
    case 1641:
    case 4457:
    case -143 * 20 + -3990 + 3257 * 3:
    case 13641 + -8069 * 1:
    case 6356:
    case 3269 + 1 * 1627 + 948:
    case 7978 + -1 * 5149 + 362:
    case 10215 + 1 * -5554 + 1984:
    case -8217 + 1 * 5588 + -1 * -5634:
    case -11256 + -463 * 19 + 26444:
    case -2006 * -2 + -1590 * -1 + 277:
    case -9567 + 1519 * 10:
    case 441 * -26 + 57 * -127 + 1242 * 20:
    case 277 * -5 + 6773 + 1 * -789:
    case -2914 + -1 * -2789 + -60 * -83:
    case 4215:
    case -43 * 115 + 11702 + -368:
    case -6515 + -1 * 10177 + 21801:
    case -1 * 41 + -2 * -4597 + 1 * -3788:
    case -881 + 2 * 3251:
    case -4475 + -4152 * -2:
      return J + t + t;
    case 4789:
      return Zn + t + t;
    case 5349:
    case -5084 + -2798 * -3 + 936:
    case -7687 * -1 + 500 * -4 + -877 * 1:
    case 6968:
    case 2756:
      return J + t + Zn + t + $ + t + t;
    case 5936:
      switch (le(t, o + (-1 * 5395 + -480 * 7 + 2922 * 3))) {
        case 5751 + 4 * -2166 + 3027:
          return J + t + $ + T(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        case 9291 * -1 + 11 * 181 + -1852 * -4:
          return J + t + $ + T(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        case -142 * -64 + 1 * -5955 + -3088:
          return J + t + $ + T(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    case -13 * -94 + -14 * -328 + 1014:
    case -9420 + -1010 * 1 + -7349 * -2:
    case 1 * 6733 + 2592 + -19 * 338:
      return J + t + $ + t + t;
    case 160 + -1265 * 7 + 10 * 1486:
      return J + t + $ + "flex-" + t + t;
    case 5187:
      return J + t + T(t, /(\w+).+(:[^]+)/, J + "box-$1$2" + $ + "flex-$1$2") + t;
    case -7309 * -1 + -1 * 5257 + 3391:
      return J + t + $ + "flex-item-" + T(t, /flex-|-self/g, "") + (rt(t, /flex-|baseline/) ? "" : $ + "grid-row-" + T(t, /flex-|-self/g, "")) + t;
    case 4675:
      return J + t + $ + "flex-line-pack" + T(t, /align-content|flex-|-self/g, "") + t;
    case -1962 * -2 + 6007 + -4383:
      return J + t + $ + T(t, "shrink", "negative") + t;
    case -31 * -267 + -2 * -1927 + 6839 * -1:
      return J + t + $ + T(t, "basis", "preferred-size") + t;
    case 6060:
      return J + "box-" + T(t, "-grow", "") + J + t + $ + T(t, "grow", "positive") + t;
    case 4554:
      return J + T(t, /([^-])(transform)/g, "$1" + J + "$2") + t;
    case -439 * 8 + -10474 + -20173 * -1:
      return T(T(T(t, /(zoom-|grab)/, J + "$1"), /(image-set)/, J + "$1"), t, "") + t;
    case -181 * 7 + 10186 + -8 * 428:
    case 5 * 1588 + -283 + -3698 * 1:
      return T(t, /(image-set\([^]*)/, J + "$1$`$1");
    case 11 * -355 + -5317 + 14190:
      return T(T(t, /(.+:)(flex-)?(.*)/, J + "box-pack:$3" + $ + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + J + t + t;
    case 1623 + -9191 * -1 + -6614:
      if (!rt(t, /flex-|baseline/))
        return $ + "grid-column-align" + an(t, o) + t;
      break;
    case 2812 + -1 * 1196 + 976:
    case -5631 * 1 + 1323 + 7668:
      return $ + T(t, "template-", "") + t;
    case 9420 + 743 * -3 + -2807:
    case 7391 * 1 + 5 * 1159 + -30 * 319:
      return e && e.some(function(n, i) {
        return o = i, rt(n.props, /grid-\w+-end/);
      }) ? ~ci(t + (e = e[o].value), "span") ? t : $ + T(t, "-start", "") + t + $ + "grid-row-span:" + (~ci(e, "span") ? rt(e, /\d+/) : +rt(e, /\d+/) - +rt(t, /\d+/)) + ";" : $ + T(t, "-start", "") + t;
    case 4896:
    case 1 * -1574 + -7166 + 12868:
      return e && e.some(function(n) {
        return rt(n.props, /grid-\w+-start/);
      }) ? t : $ + T(T(t, "-end", "-span"), "span ", "") + t;
    case 3982 + -3110 * 2 + 6333:
    case -3747 * 1 + -11 * 127 + 8727:
    case 2088 + -165 * -12:
    case 7607 * 1 + -9362 + -4287 * -1:
      return T(t, /(.+)-inline(.+)/, J + "$1$2") + t;
    case -21 * -524 + 327 + 643 * -5:
    case 7059:
    case 5753:
    case -6097 + -8 * -1454:
    case 2906 + 2539 * 1:
    case 157 * 19 + 15 * -245 + 6393:
    case 3328 * -2 + 9173 * 1 + -302 * -8:
    case 1445 + 1427 * 2 + 18 * 21:
    case 5533:
    case 260 * 2 + 8633 + -1 * 3364:
    case 3291 + 84 * -26 + -103 * -38:
    case 2390 * 1 + 977 * 5 + -2510:
      if (Ue(t) - (-2474 * -2 + 1803 + -6750) - o > -1 * -23 + -2211 + 2194)
        switch (le(t, o + 1)) {
          case -15180 + -15289 * -1:
            if (le(t, o + (-8728 * -1 + 734 * -7 + 2 * -1793)) !== -6366 + 1 * 6411)
              break;
          case -8699 + 3160 * -1 + 1 * 11961:
            return T(t, /(.+:)(.+)-([^]+)/, "$1" + J + "$2-$3$1" + Zn + (le(t, o + 3) == -13 * 547 + -1 * 913 + 8132 ? "$3" : "$2-$3")) + t;
          case 115:
            return ~ci(t, "stretch") ? Gg(T(t, "stretch", "fill-available"), o, e) + t : t;
        }
      break;
    case 681 + 2657 * -1 + 54 * 132:
    case 3109 + -82 * -17 + 1417:
      return T(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, i, r, a, g, s, x) {
        return $ + i + ":" + r + x + (a ? $ + i + "-span:" + (g ? s : +s - +r) + x : "") + t;
      });
    case -6197 + 11146 * 1:
      if (le(t, o + (7398 + 66 * -112)) === -3072 + -385 * 15 + 8968)
        return T(t, ":", ":" + J) + t;
      break;
    case -8564 + -5715 * 2 + 26438:
      switch (le(t, le(t, 1651 + 6 * -267 + 1 * -35) === 45 ? 11380 + 11362 * -1 : -5293 + 24 * 39 + 4368)) {
        case 4421 + 4301 * -1:
          return T(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + J + (le(t, 1 * -4349 + 211 * 6 + 3097) === -73 * -44 + 4415 + -7582 ? "inline-" : "") + "box$3$1" + J + "$2$3$1" + $ + "$2box$3") + t;
        case -2090 + 2251 * -1 + 4441:
          return T(t, ":", ":" + $) + t;
      }
      break;
    case 3482 + 1 * 9157 + 20 * -346:
    case -1 * -6719 + -7299 + 3227:
    case 341 * 1 + 3 * 2661 + -3 * 2063:
    case 3927:
    case 1881 + 6 * 85:
      return T(t, "scroll-", "scroll-snap-") + t;
  }
  return t;
}
function mi(t, o) {
  for (var e = "", n = 8210 + -22 * 241 + 2908 * -1; n < t.length; n++)
    e += o(t[n], n, t, o) || "";
  return e;
}
function Bc(t, o, e, n) {
  switch (t.type) {
    case xc:
      if (t.children.length)
        break;
    case Ic:
    case or:
      return t.return = t.return || t.value;
    case yg:
      return "";
    case vg:
      return t.return = t.value + "{" + mi(t.children, n) + "}";
    case Vi:
      if (!Ue(t.value = t.props.join(",")))
        return "";
  }
  return Ue(e = mi(t.children, n)) ? t.return = t.value + "{" + e + "}" : "";
}
function Sc(t) {
  var o = Bg(t);
  return function(e, n, i, r) {
    for (var a = "", g = -2102 * -3 + 142 + -6448; g < o; g++)
      a += t[g](e, n, i, r) || "";
    return a;
  };
}
function Gc(t) {
  return function(o) {
    o.root || (o = o.return) && t(o);
  };
}
function Zc(t, o, e, n) {
  if (t.length > -(-3919 * -1 + 2023 * -3 + -2151 * -1) && !t.return)
    switch (t.type) {
      case or:
        t.return = Gg(t.value, t.length, e);
        return;
      case vg:
        return mi([lt(t, { value: T(t.value, "@", "@" + J) })], n);
      case Vi:
        if (t.length)
          return Cc(e = t.props, function(i) {
            switch (rt(i, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Ut(lt(t, { props: [T(i, /:(read-\w+)/, ":" + Zn + "$1")] }));
                var r = {};
                r.props = [i], Ut(lt(t, r)), So(t, { props: ua(e, n) });
                break;
              case "::placeholder":
                Ut(lt(t, { props: [T(i, /:(plac\w+)/, ":" + J + "input-$1")] })), Ut(lt(t, { props: [T(i, /:(plac\w+)/, ":" + Zn + "$1")] })), Ut(lt(t, { props: [T(i, /:(plac\w+)/, $ + "input-$1")] }));
                var a = {};
                a.props = [i], Ut(lt(t, a)), So(t, { props: ua(e, n) });
                break;
            }
            return "";
          });
    }
}
var N = {};
N.animationIterationCount = 1, N.aspectRatio = 1, N.borderImageOutset = 1, N.borderImageSlice = 1, N.borderImageWidth = 1, N.boxFlex = 1, N.boxFlexGroup = 1, N.boxOrdinalGroup = 1, N.columnCount = 1, N.columns = 1, N.flex = 1, N.flexGrow = 1, N.flexPositive = 1, N.flexShrink = 1, N.flexNegative = 1, N.flexOrder = 1, N.gridRow = 1, N.gridRowEnd = 1, N.gridRowSpan = 1, N.gridRowStart = 1, N.gridColumn = 1, N.gridColumnEnd = 1, N.gridColumnSpan = 1, N.gridColumnStart = 1, N.msGridRow = 1, N.msGridRowSpan = 1, N.msGridColumn = 1, N.msGridColumnSpan = 1, N.fontWeight = 1, N.lineHeight = 1, N.opacity = 1, N.order = 1, N.orphans = 1, N.tabSize = 1, N.widows = 1, N.zIndex = 1, N.zoom = 1, N.WebkitLineClamp = 1, N.fillOpacity = 1, N.floodOpacity = 1, N.stopOpacity = 1, N.strokeDasharray = 1, N.strokeDashoffset = 1, N.strokeMiterlimit = 1, N.strokeOpacity = 1, N.strokeWidth = 1;
var kc = N, j = {}, Vt = typeof process < "u" && void (-3330 + 50 * 89 + 4 * -280) !== j && (j.REACT_APP_SC_ATTR || j.SC_ATTR) || "data-styled", ar = typeof window < "u" && "HTMLElement" in window, Kc = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (41 * -184 + 1744 + 5800) !== j && void (1 * 5119 + -7 * -811 + -4 * 2699) !== j.REACT_APP_SC_DISABLE_SPEEDY && j.REACT_APP_SC_DISABLE_SPEEDY !== "" ? j.REACT_APP_SC_DISABLE_SPEEDY !== "false" && j.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (-50 * -140 + -7653 + -1 * -653) !== j && void (6012 + 3 * 1811 + -11445) !== j.SC_DISABLE_SPEEDY && j.SC_DISABLE_SPEEDY !== "" ? j.SC_DISABLE_SPEEDY !== "false" && j.SC_DISABLE_SPEEDY : j.NODE_ENV !== "production"), Aa = /invalid hook call/i, $n = /* @__PURE__ */ new Set(), Hc = function(t, o) {
  if (j.NODE_ENV !== "production") {
    var e = o ? ' with the id of "'.concat(o, '"') : "", n = "The component ".concat(t).concat(e, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, i = console.error;
    try {
      var r = !0;
      console.error = function(a) {
        for (var g = [], s = -2008 * 3 + -5783 + -288 * -41; s < arguments.length; s++)
          g[s - (1 * 3994 + -4549 + 556)] = arguments[s];
        Aa.test(a) ? (r = !1, $n.delete(n)) : i.apply(void (1067 + -5 * 1469 + 86 * 73), on([a], g, !1));
      }, ht(), r && !$n.has(n) && (console.warn(n), $n.add(n));
    } catch (a) {
      Aa.test(a.message) && $n.delete(n);
    } finally {
      console.error = i;
    }
  }
}, Ni = Object.freeze([]), sn = Object.freeze({});
function Wc(t, o, e) {
  return void (-3833 * -1 + 2206 + -671 * 9) === e && (e = sn), t.theme !== e.theme && t.theme || o || e.theme;
}
var ko = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Oc = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Vc = /(^-|-$)/g;
function pa(t) {
  return t.replace(Oc, "-").replace(Vc, "");
}
var Rc = /(a)(d)/gi, fa = function(t) {
  return String.fromCharCode(t + (t > 25 ? -95 * -97 + 7 * -1033 + 1 * -1945 : -5003 * 1 + 4841 + 259));
};
function Ko(t) {
  var o, e = "";
  for (o = Math.abs(t); o > 52; o = o / (-5 * 1180 + 3559 + 2393) | 11772 + 36 * -327)
    e = fa(o % (-89 * 97 + -1663 * -4 + 2033 * 1)) + e;
  return (fa(o % (5276 * 1 + -256 * -5 + 1626 * -4)) + e).replace(Rc, "$1-$2");
}
var go, Gt = function(t, o) {
  for (var e = o.length; e; )
    t = (8970 + -4631 * 2 + 325) * t ^ o.charCodeAt(--e);
  return t;
}, Zg = function(t) {
  return Gt(9 * -1017 + 1 * -6007 + -501 * -41, t);
};
function Ec(t) {
  return Ko(Zg(t) >>> 1 * -6999 + -7937 + 2 * 7468);
}
function kg(t) {
  return j.NODE_ENV !== "production" && typeof t == "string" && t || t.displayName || t.name || "Component";
}
function so(t) {
  return typeof t == "string" && (j.NODE_ENV === "production" || t.charAt(1678 + 1 * -1678) === t.charAt(83 * -39 + -3447 * 1 + 6684).toLowerCase());
}
var Ke = {};
Ke.childContextTypes = !0, Ke.contextType = !0, Ke.contextTypes = !0, Ke.defaultProps = !0, Ke.displayName = !0, Ke.getDefaultProps = !0, Ke.getDerivedStateFromError = !0, Ke.getDerivedStateFromProps = !0, Ke.mixins = !0, Ke.propTypes = !0, Ke.type = !0;
var ut = {};
ut.name = !0, ut.length = !0, ut.prototype = !0, ut.caller = !0, ut.callee = !0, ut.arguments = !0, ut.arity = !0;
var Bt = {};
Bt.$$typeof = !0, Bt.compare = !0, Bt.defaultProps = !0, Bt.displayName = !0, Bt.propTypes = !0, Bt.type = !0;
var Qt = {};
Qt.$$typeof = !0, Qt.render = !0, Qt.defaultProps = !0, Qt.displayName = !0, Qt.propTypes = !0;
var Kg = typeof Symbol == "function" && Symbol.for, Hg = Kg ? Symbol.for("react.memo") : -65583 + -20 * 4870 + -57 * -3914, Pc = Kg ? Symbol.for("react.forward_ref") : 76305 + 5 * 12357 + -77978, Nc = Ke, Yc = ut, Wg = Bt, Tc = ((go = {})[Pc] = Qt, go[Hg] = Wg, go);
function ha(t) {
  return ("type" in (o = t) && o.type.$$typeof) === Hg ? Wg : "$$typeof" in t ? Tc[t.$$typeof] : Nc;
  var o;
}
var Dc = Object.defineProperty, Fc = Object.getOwnPropertyNames, ma = Object.getOwnPropertySymbols, Lc = Object.getOwnPropertyDescriptor, Xc = Object.getPrototypeOf, ba = Object.prototype;
function Og(t, o, e) {
  if (typeof o != "string") {
    if (ba) {
      var n = Xc(o);
      n && n !== ba && Og(t, n, e);
    }
    var i = Fc(o);
    ma && (i = i.concat(ma(o)));
    for (var r = ha(t), a = ha(o), g = 3434 + 419 * -6 + -8 * 115; g < i.length; ++g) {
      var s = i[g];
      if (!(s in Yc || e && e[s] || a && s in a || r && s in r)) {
        var x = Lc(o, s);
        try {
          Dc(t, s, x);
        } catch {
        }
      }
    }
  }
  return t;
}
function cn(t) {
  return typeof t == "function";
}
function gr(t) {
  return typeof t == "object" && "styledComponentId" in t;
}
function kt(t, o) {
  return t && o ? "".concat(t, " ").concat(o) : t || o || "";
}
function ya(t, o) {
  if (3898 + -2 * 1949 === t.length)
    return "";
  for (var e = t[-1163 * -1 + -9 * -513 + 1156 * -5], n = 6479 + -20 * 209 + -766 * 3; n < t.length; n++)
    e += o ? o + t[n] : t[n];
  return e;
}
function In(t) {
  return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
}
function Ho(t, o, e) {
  if (void (-587 + -3 * 2158 + 7061) === e && (e = !1), !e && !In(t) && !Array.isArray(t))
    return o;
  if (Array.isArray(o))
    for (var n = 5829 + -1153 * 5 + -64; n < o.length; n++)
      t[n] = Ho(t[n], o[n]);
  else if (In(o))
    for (var n in o)
      t[n] = Ho(t[n], o[n]);
  return t;
}
function sr(t, o) {
  var e = {};
  e.value = o, Object.defineProperty(t, "toString", e);
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
var jc = j.NODE_ENV !== "production" ? Ie : {};
function Mc() {
  for (var t = [], o = -2272 * 1 + -1312 + 32 * 112; o < arguments.length; o++)
    t[o] = arguments[o];
  for (var e = t[-137 * -71 + -2135 * 1 + -7592], n = [], i = 4243 * -1 + 71 * 128 + 4 * -1211, r = t.length; i < r; i += 1 * -4 + -75 * -84 + -6295 * 1)
    n.push(t[i]);
  return n.forEach(function(a) {
    e = e.replace(/%[a-z]/, a);
  }), e;
}
function un(t) {
  for (var o = [], e = -7546 + -238 * 33 + 15401; e < arguments.length; e++)
    o[e - (-16119 + -3224 * -5)] = arguments[e];
  return j.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(o.length > 33 * 46 + 585 + -2103 ? " Args: ".concat(o.join(", ")) : "")) : new Error(Mc.apply(void (5264 * -1 + -2 * -4645 + 61 * -66), on([jc[t]], o, !1)).trim());
}
var Uc = function() {
  function t(o) {
    this.groupSizes = new Uint32Array(4959 + 1 * -4447), this.length = 512, this.tag = o;
  }
  return t.prototype.indexOfGroup = function(o) {
    for (var e = -27 * 89 + -6556 + 8959, n = 4618 * -1 + 362 * 25 + 4432 * -1; n < o; n++)
      e += this.groupSizes[n];
    return e;
  }, t.prototype.insertRules = function(o, e) {
    if (o >= this.groupSizes.length) {
      for (var n = this.groupSizes, i = n.length, r = i; o >= r; )
        if ((r <<= -5496 + 5497 * 1) < 2e3 + -1 * -3342 + -5342)
          throw un(1 * -8549 + -3533 * 1 + 12098, "".concat(o));
      this.groupSizes = new Uint32Array(r), this.groupSizes.set(n), this.length = r;
      for (var a = i; a < r; a++)
        this.groupSizes[a] = -61 * 127 + -211 * -11 + 5426;
    }
    for (var g = this.indexOfGroup(o + (-211 + -2 * -106)), s = (a = 2 * 2221 + -7477 + 1 * 3035, e.length); a < s; a++)
      this.tag.insertRule(g, e[a]) && (this.groupSizes[o]++, g++);
  }, t.prototype.clearGroup = function(o) {
    if (o < this.length) {
      var e = this.groupSizes[o], n = this.indexOfGroup(o), i = n + e;
      this.groupSizes[o] = 2 * 4666 + -293 * 9 + -1339 * 5;
      for (var r = n; r < i; r++)
        this.tag.deleteRule(n);
    }
  }, t.prototype.getGroup = function(o) {
    var e = "";
    if (o >= this.length || -2287 + 7549 * 1 + 5262 * -1 === this.groupSizes[o])
      return e;
    for (var n = this.groupSizes[o], i = this.indexOfGroup(o), r = i + n, a = i; a < r; a++)
      e += "".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);
    return e;
  }, t;
}(), li = /* @__PURE__ */ new Map(), bi = /* @__PURE__ */ new Map(), ui = -121 * -17 + 8489 + -10545, qn = function(t) {
  if (li.has(t))
    return li.get(t);
  for (; bi.has(ui); )
    ui++;
  var o = ui++;
  if (j.NODE_ENV !== "production" && ((-3294 + -1 * -3294 | o) < -3542 + 359 * 25 + -5433 || o > 2102638471 * 1 + -1465043118 + 436146471))
    throw un(7085 + -13 * -519 + -13816, "".concat(o));
  return li.set(t, o), bi.set(o, t), o;
}, Jc = function(t, o) {
  ui = o + (7705 + -642 * 12), li.set(t, o), bi.set(o, t);
}, Qc = "style[".concat(Vt, "][").concat("data-styled-version", '="').concat("6.1.1", '"]'), zc = new RegExp("^".concat(Vt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), $c = function(t, o, e) {
  for (var n, i = e.split(","), r = 16 * 524 + -930 * -9 + -16754, a = i.length; r < a; r++)
    (n = i[r]) && t.registerName(o, n);
}, qc = function(t, o) {
  for (var e, n = ((e = o.textContent) !== null && void (2 * 3529 + 3 * 386 + -8216) !== e ? e : "").split(`/*!sc*/
`), i = [], r = 9434 + 161 * -58 + -96, a = n.length; r < a; r++) {
    var g = n[r].trim();
    if (g) {
      var s = g.match(zc);
      if (s) {
        var x = 0 | parseInt(s[1], 10), C = s[-15 * -271 + -1 * -643 + -2 * 2353];
        5907 + 3487 * -1 + 110 * -22 !== x && (Jc(C, x), $c(t, C, s[3]), t.getTag().insertRules(x, i)), i.length = -9029 * -1 + 56 * -113 + -2701;
      } else
        i.push(g);
    }
  }
};
function _c() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Vg = function(t) {
  var o = document.head, e = t || o, n = document.createElement("style"), i = function(g) {
    var s = Array.from(g.querySelectorAll("style[".concat(Vt, "]")));
    return s[s.length - (4 * 2348 + -17 * -365 + -15596)];
  }(e), r = void (1 * 6009 + -1 * -3932 + -9941) !== i ? i.nextSibling : null;
  n.setAttribute(Vt, "active"), n.setAttribute("data-styled-version", "6.1.1");
  var a = _c();
  return a && n.setAttribute("nonce", a), e.insertBefore(n, r), n;
}, eI = function() {
  function t(o) {
    this.element = Vg(o), this.element.appendChild(document.createTextNode("")), this.sheet = function(e) {
      if (e.sheet)
        return e.sheet;
      for (var n = document.styleSheets, i = -12 * 456 + -8210 + 13682, r = n.length; i < r; i++) {
        var a = n[i];
        if (a.ownerNode === e)
          return a;
      }
      throw un(-12 * 332 + 27 * 358 + 5 * -1133);
    }(this.element), this.length = 6083 + 9227 * -1 + -2 * -1572;
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
}(), tI = function() {
  function t(o) {
    this.element = Vg(o), this.nodes = this.element.childNodes, this.length = -6 * -773 + 2888 + -1 * 7526;
  }
  return t.prototype.insertRule = function(o, e) {
    if (o <= this.length && o >= 9174 + 17 * 427 + 1 * -16433) {
      var n = document.createTextNode(e);
      return this.element.insertBefore(n, this.nodes[o] || null), this.length++, !0;
    }
    return !1;
  }, t.prototype.deleteRule = function(o) {
    this.element.removeChild(this.nodes[o]), this.length--;
  }, t.prototype.getRule = function(o) {
    return o < this.length ? this.nodes[o].textContent : "";
  }, t;
}(), nI = function() {
  function t(o) {
    this.rules = [], this.length = -14 * -3 + -3273 + 3231;
  }
  return t.prototype.insertRule = function(o, e) {
    return o <= this.length && (this.rules.splice(o, -19 * 73 + 68 * -69 + 6079, e), this.length++, !0);
  }, t.prototype.deleteRule = function(o) {
    this.rules.splice(o, 4851 + 3 * 665 + -1369 * 5), this.length--;
  }, t.prototype.getRule = function(o) {
    return o < this.length ? this.rules[o] : "";
  }, t;
}(), va = ar, iI = { isServer: !ar, useCSSOMInjection: !Kc }, Rg = function() {
  function t(o, e, n) {
    o === void 0 && (o = sn), void (7523 * 1 + 3578 * -1 + -1 * 3945) === e && (e = {});
    var i = this;
    this.options = ve(ve({}, iI), o), this.gs = e, this.names = new Map(n), this.server = !!o.isServer, !this.server && ar && va && (va = !1, function(r) {
      for (var a = document.querySelectorAll(Qc), g = -9963 + 2 * 4541 + 881, s = a.length; g < s; g++) {
        var x = a[g];
        x && x.getAttribute(Vt) !== "active" && (qc(r, x), x.parentNode && x.parentNode.removeChild(x));
      }
    }(this)), sr(this, function() {
      return function(r) {
        for (var a = r.getTag(), g = a.length, s = "", x = function(u) {
          var p = function(k) {
            return bi.get(k);
          }(u);
          if (p === void 0)
            return "continue";
          var f = r.names.get(p), v = a.getGroup(u);
          if (void (5615 + -6 * -310 + -7475) === f || 4061 * -2 + -8338 + 16460 === v.length)
            return "continue";
          var w = "".concat(Vt, ".g").concat(u, '[id="').concat(p, '"]'), E = "";
          void (-3416 + -854 * -4) !== f && f.forEach(function(k) {
            k.length > 2 * 4633 + -3 * 2305 + -2351 && (E += "".concat(k, ","));
          }), s += "".concat(v).concat(w, '{content:"').concat(E, '"}').concat(`/*!sc*/
`);
        }, C = -8715 + 313 * 17 + 3394; C < g; C++)
          x(C);
        return s;
      }(i);
    });
  }
  return t.registerId = function(o) {
    return qn(o);
  }, t.prototype.reconstructWithOptions = function(o, e) {
    return void (1451 * -1 + 2 * -1489 + 43 * 103) === e && (e = !0), new t(ve(ve({}, this.options), o), this.gs, e && this.names || void (-15 * -566 + -3084 + -5406));
  }, t.prototype.allocateGSInstance = function(o) {
    return this.gs[o] = (this.gs[o] || 979 * -8 + 238 * 37 + 974 * -1) + (2556 + -767 * -10 + -10225);
  }, t.prototype.getTag = function() {
    return this.tag || (this.tag = (o = function(e) {
      var n = e.useCSSOMInjection, i = e.target;
      return e.isServer ? new nI(i) : n ? new eI(i) : new tI(i);
    }(this.options), new Uc(o)));
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
    this.tag = void (2 * -1489 + 46 * -41 + 4864);
  }, t;
}(), oI = /&/g, rI = /^\s*\/\/.*$/gm;
function Eg(t, o) {
  return t.map(function(e) {
    return e.type === "rule" && (e.value = "".concat(o, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(o, " ")), e.props = e.props.map(function(n) {
      return "".concat(o, " ").concat(n);
    })), Array.isArray(e.children) && e.type !== "@keyframes" && (e.children = Eg(e.children, o)), e;
  });
}
function Pg(t) {
  var o, e, n, i = t === void 0 ? sn : t, r = i.options, a = void (-9261 + 1323 * 7) === r ? sn : r, g = i.plugins, s = void (3 * -2999 + 1647 + 7350) === g ? Ni : g, x = function(p, f, v) {
    return v === e || v.startsWith(e) && v.endsWith(e) && v.replaceAll(e, "").length > -596 * 7 + -2 * -2731 + -6 * 215 ? ".".concat(o) : p;
  }, C = s.slice();
  C.push(function(p) {
    p.type === Vi && p.value.includes("&") && (p.props[3 * 1769 + 81 + -5388] = p.props[-5031 + -11 * -201 + 2820].replace(oI, e).replace(n, x));
  }), a.prefix && C.push(Zc), C.push(Bc);
  var u = function(p, f, v, w) {
    void (3171 + 1 * -1249 + -1922) === f && (f = ""), void (-173 * 34 + -1 * 2083 + -531 * -15) === v && (v = ""), void (14 * 163 + -7446 + 5164 * 1) === w && (w = "&"), o = w, e = f, n = new RegExp("\\".concat(e, "\\b"), "g");
    var E = p.replace(rI, ""), k = vc(v || f ? "".concat(v, " ").concat(f, " { ").concat(E, " }") : E);
    a.namespace && (k = Eg(k, a.namespace));
    var G = [];
    return mi(k, Sc(C.concat(Gc(function(H) {
      return G.push(H);
    })))), G;
  };
  return u.hash = s.length ? s.reduce(function(p, f) {
    return f.name || un(888 * 1 + -2096 + -1 * -1223), Gt(p, f.name);
  }, -16 * 556 + 1001 + 13276).toString() : "", u;
}
var aI = new Rg(), Wo = Pg(), cr = Ot.createContext({ shouldForwardProp: void (-12322 + -122 * -101), styleSheet: aI, stylis: Wo });
cr.Consumer;
var gI = Ot.createContext(void (1 * 5455 + -5314 * -1 + -10769));
function Oo() {
  return Wi(cr);
}
function sI(t) {
  var o = Te(t.stylisPlugins), e = o[-2531 + -1 * -2531], n = o[1 * -9356 + 7241 + 92 * 23], i = Oo().styleSheet, r = Qe(function() {
    var C = i, u = {};
    return u.useCSSOMInjection = !1, t.sheet ? C = t.sheet : t.target && (C = C.reconstructWithOptions({ target: t.target }, !1)), t.disableCSSOMInjection && (C = C.reconstructWithOptions(u)), C;
  }, [t.disableCSSOMInjection, t.sheet, t.target, i]), a = Qe(function() {
    var C = {};
    C.namespace = t.namespace, C.prefix = t.enableVendorPrefixes;
    var u = {};
    return u.options = C, u.plugins = e, Pg(u);
  }, [t.enableVendorPrefixes, t.namespace, e]);
  Ae(function() {
    cc(e, t.stylisPlugins) || n(t.stylisPlugins);
  }, [t.stylisPlugins]);
  var g = Qe(function() {
    var C = {};
    return C.shouldForwardProp = t.shouldForwardProp, C.styleSheet = r, C.stylis = a, C;
  }, [t.shouldForwardProp, r, a]), s = {};
  s.value = g;
  var x = {};
  return x.value = a, Ot.createElement(cr.Provider, s, Ot.createElement(gI.Provider, x, t.children));
}
var wa = function() {
  function t(o, e) {
    var n = this;
    this.inject = function(i, r) {
      void (-421 * 1 + 314 * -14 + 4817) === r && (r = Wo);
      var a = n.name + r.hash;
      i.hasNameForId(n.id, a) || i.insertRules(n.id, a, r(n.rules, a, "@keyframes"));
    }, this.name = o, this.id = "sc-keyframes-".concat(o), this.rules = e, sr(this, function() {
      throw un(206 * -6 + 4556 + -3308, String(n.name));
    });
  }
  return t.prototype.getName = function(o) {
    return o === void 0 && (o = Wo), this.name + o.hash;
  }, t;
}(), cI = function(t) {
  return t >= "A" && t <= "Z";
};
function Ba(t) {
  for (var o = "", e = 143 * 9 + 7999 + -9286 * 1; e < t.length; e++) {
    var n = t[e];
    if (3491 + -3931 * -1 + 1 * -7421 === e && n === "-" && t[2335 + 1 * 5953 + 37 * -224] === "-")
      return t;
    cI(n) ? o += "-" + n.toLowerCase() : o += n;
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
var Ng = function(t) {
  return t == null || t === !1 || t === "";
}, Yg = function(t) {
  var o, e, n = [];
  for (var i in t) {
    var r = t[i];
    t.hasOwnProperty(i) && !Ng(r) && (Array.isArray(r) && r.isCss || cn(r) ? n.push("".concat(Ba(i), ":"), r, ";") : In(r) ? n.push.apply(n, on(on(["".concat(i, " {")], Yg(r), !1), ["}"], !1)) : n.push("".concat(Ba(i), ": ").concat((o = i, (e = r) == null || typeof e == "boolean" || e === "" ? "" : typeof e != "number" || 1 * -7537 + 1305 + -2 * -3116 === e || o in kc || o.startsWith("--") ? String(e).trim() : "".concat(e, "px")), ";")));
  }
  return n;
};
function Ht(t, o, e, n) {
  if (Ng(t))
    return [];
  if (gr(t))
    return [".".concat(t.styledComponentId)];
  if (cn(t)) {
    if (!cn(r = t) || r.prototype && r.prototype.isReactComponent || !o)
      return [t];
    var i = t(o);
    return j.NODE_ENV === "production" || typeof i != "object" || Array.isArray(i) || i instanceof wa || In(i) || i === null || console.error("".concat(kg(t), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Ht(i, o, e, n);
  }
  var r;
  return t instanceof wa ? e ? (t.inject(e, n), [t.getName(n)]) : [t] : In(t) ? Yg(t) : Array.isArray(t) ? Array.prototype.concat.apply(Ni, t.map(function(a) {
    return Ht(a, o, e, n);
  })) : [t.toString()];
}
function II(t) {
  for (var o = -22 * 449 + -4062 + 34 * 410; o < t.length; o += 1 * 3242 + -6594 + 3353) {
    var e = t[o];
    if (cn(e) && !gr(e))
      return !1;
  }
  return !0;
}
var xI = Zg("6.1.1"), lI = function() {
  function t(o, e, n) {
    this.rules = o, this.staticRulesId = "", this.isStatic = j.NODE_ENV === "production" && (void (-4036 * 2 + 1616 + 1 * 6456) === n || n.isStatic) && II(o), this.componentId = e, this.baseHash = Gt(xI, e), this.baseStyle = n, Rg.registerId(e);
  }
  return t.prototype.generateAndInjectStyles = function(o, e, n) {
    var i = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, e, n) : "";
    if (this.isStatic && !n.hash)
      if (this.staticRulesId && e.hasNameForId(this.componentId, this.staticRulesId))
        i = kt(i, this.staticRulesId);
      else {
        var r = ya(Ht(this.rules, o, e, n)), a = Ko(Gt(this.baseHash, r) >>> 8704 + -9606 * 1 + 902);
        if (!e.hasNameForId(this.componentId, a)) {
          var g = n(r, ".".concat(a), void 0, this.componentId);
          e.insertRules(this.componentId, a, g);
        }
        i = kt(i, a), this.staticRulesId = a;
      }
    else {
      for (var s = Gt(this.baseHash, n.hash), x = "", C = -57 * -114 + 89 + -6587; C < this.rules.length; C++) {
        var u = this.rules[C];
        if (typeof u == "string")
          x += u, j.NODE_ENV !== "production" && (s = Gt(s, u));
        else if (u) {
          var p = ya(Ht(u, o, e, n));
          s = Gt(s, p + C), x += p;
        }
      }
      if (x) {
        var f = Ko(s >>> 0);
        e.hasNameForId(this.componentId, f) || e.insertRules(this.componentId, f, n(x, ".".concat(f), void 0, this.componentId)), i = kt(i, f);
      }
    }
    return i;
  }, t;
}(), Tg = Ot.createContext(void 0);
Tg.Consumer;
var co = {}, Sa = /* @__PURE__ */ new Set();
function uI(t, o, e) {
  var n = gr(t), i = t, r = !so(t), a = o.attrs, g = void (-5728 + 193 * -3 + -371 * -17) === a ? Ni : a, s = o.componentId, x = void (-3927 + -1 * -603 + -4 * -831) === s ? function(D, M) {
    var K = typeof D != "string" ? "sc" : pa(D);
    co[K] = (co[K] || 0) + (-1 * -3878 + 30 * 27 + 43 * -109);
    var ee = "".concat(K, "-").concat(Ec("6.1.1" + K + co[K]));
    return M ? "".concat(M, "-").concat(ee) : ee;
  }(o.displayName, o.parentComponentId) : s, C = o.displayName, u = void (15 * -631 + -9782 + 19247) === C ? function(D) {
    return so(D) ? "styled.".concat(D) : "Styled(".concat(kg(D), ")");
  }(t) : C, p = o.displayName && o.componentId ? "".concat(pa(o.displayName), "-").concat(o.componentId) : o.componentId || x, f = n && i.attrs ? i.attrs.concat(g).filter(Boolean) : g, v = o.shouldForwardProp;
  if (n && i.shouldForwardProp) {
    var w = i.shouldForwardProp;
    if (o.shouldForwardProp) {
      var E = o.shouldForwardProp;
      v = function(D, M) {
        return w(D, M) && E(D, M);
      };
    } else
      v = w;
  }
  var k = new lI(e, p, n ? i.componentStyle : void (4705 + -110 * 22 + -2285));
  function G(D, M) {
    return function(K, ee, z) {
      var te = K.attrs, xe = K.componentStyle, ue = K.defaultProps, pe = K.foldedComponentIds, Ee = K.styledComponentId, re = K.target, ae = Ot.useContext(Tg), qe = Oo(), ct = K.shouldForwardProp || qe.shouldForwardProp;
      j.NODE_ENV !== "production" && yo(Ee);
      var we = function(mt, bt, Se) {
        var Ge = {};
        Ge.className = void (-1828 * 3 + -3 * -642 + 1779 * 2), Ge.theme = Se;
        for (var et, Pe = ve(ve({}, bt), Ge), Yt = -1 * -457 + 8497 + -407 * 22; Yt < mt.length; Yt += 2394 + 16 * 23 + -2761) {
          var Ze = cn(et = mt[Yt]) ? et(Pe) : et;
          for (var Ne in Ze)
            Pe[Ne] = Ne === "className" ? kt(Pe[Ne], Ze[Ne]) : Ne === "style" ? ve(ve({}, Pe[Ne]), Ze[Ne]) : Ze[Ne];
        }
        return bt.className && (Pe.className = kt(Pe.className, bt.className)), Pe;
      }(te, ee, Wc(ee, ae, ue) || sn), Xe = we.as || re, _e = {};
      for (var fe in we)
        void (459 + 9 * -51) === we[fe] || fe[2258 * -1 + -13 * -83 + 1179 * 1] === "$" || fe === "as" || fe === "theme" || (fe === "forwardedAs" ? _e.as = we.forwardedAs : ct && !ct(fe, Xe) || (_e[fe] = we[fe], ct || j.NODE_ENV !== "development" || f0(fe) || Sa.has(fe) || !ko.has(Xe) || (Sa.add(fe), console.warn('styled-components: it looks like an unknown prop "'.concat(fe, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Nt = function(mt, bt) {
        var Se = Oo(), Ge = mt.generateAndInjectStyles(bt, Se.styleSheet, Se.stylis);
        return j.NODE_ENV !== "production" && yo(Ge), Ge;
      }(xe, we);
      j.NODE_ENV !== "production" && K.warnTooManyClasses && K.warnTooManyClasses(Nt);
      var dn = kt(pe, Ee);
      return Nt && (dn += " " + Nt), we.className && (dn += " " + we.className), _e[so(Xe) && !ko.has(Xe) ? "class" : "className"] = dn, _e.ref = z, be(Xe, _e);
    }(H, D, M);
  }
  G.displayName = u;
  var H = Ot.forwardRef(G), L = {};
  return L.attrs = !0, L.componentStyle = !0, L.displayName = !0, L.foldedComponentIds = !0, L.shouldForwardProp = !0, L.styledComponentId = !0, L.target = !0, H.attrs = f, H.componentStyle = k, H.displayName = u, H.shouldForwardProp = v, H.foldedComponentIds = n ? kt(i.foldedComponentIds, i.styledComponentId) : "", H.styledComponentId = p, H.target = n ? i.target : t, Object.defineProperty(H, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(D) {
    this._foldedDefaultProps = n ? function(M) {
      for (var K = [], ee = -41 * 41 + -2968 + -30 * -155; ee < arguments.length; ee++)
        K[ee - (3172 * -3 + -1 * -6611 + 2906)] = arguments[ee];
      for (var z = -19 * 511 + 17 * 542 + 33 * 15, te = K; z < te.length; z++)
        Ho(M, te[z], !0);
      return M;
    }({}, i.defaultProps, D) : D;
  } }), j.NODE_ENV !== "production" && (Hc(u, p), H.warnTooManyClasses = /* @__PURE__ */ function(D, M) {
    var K = {}, ee = !1;
    return function(z) {
      if (!ee && (K[z] = !0, Object.keys(K).length >= -3 * -108 + -9654 + 9530)) {
        var te = M ? ' with the id of "'.concat(M, '"') : "";
        console.warn("Over ".concat(-9275 * -1 + 9372 + 18447 * -1, " classes were generated for component ").concat(D).concat(te, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), ee = !0, K = {};
      }
    };
  }(u, p)), sr(H, function() {
    return ".".concat(H.styledComponentId);
  }), r && Og(H, t, L), H;
}
function Ga(t, o) {
  for (var e = [t[3171 + -137 * -41 + 1 * -8788]], n = 1 * 2013 + -293 * -18 + 1041 * -7, i = o.length; n < i; n += -9260 + -8237 * -1 + 8 * 128)
    e.push(o[n], t[n + (-3133 * -1 + -484 * 12 + 2676)]);
  return e;
}
var Za = function(t) {
  var o = {};
  return o.isCss = !0, Object.assign(t, o);
};
function Dg(t) {
  for (var o = [], e = -4343 * 1 + -4353 + 8697; e < arguments.length; e++)
    o[e - (21 * -429 + -7 * 1229 + 17613)] = arguments[e];
  if (cn(t) || In(t)) {
    var n = t;
    return Za(Ht(Ga(Ni, on([n], o, !0))));
  }
  var i = t;
  return o.length === 0 && 5794 + -1931 * 3 === i.length && typeof i[3554 + -2811 * -2 + -74 * 124] == "string" ? Ht(i) : Za(Ht(Ga(i, o)));
}
function Vo(t, o, e) {
  if (void (-8545 * 1 + 1114 * -1 + 743 * 13) === e && (e = sn), !o)
    throw un(1 * 6197 + -8001 + -361 * -5, o);
  var n = function(i) {
    for (var r = [], a = 6061 * -1 + -19 * -425 + -2013 * 1; a < arguments.length; a++)
      r[a - (1093 * -7 + 1681 + 5971)] = arguments[a];
    return t(o, e, Dg.apply(void (-1795 * -3 + 893 + 6278 * -1), on([i], r, !1)));
  };
  return n.attrs = function(i) {
    return Vo(t, o, ve(ve({}, e), { attrs: Array.prototype.concat(e.attrs, i).filter(Boolean) }));
  }, n.withConfig = function(i) {
    return Vo(t, o, ve(ve({}, e), i));
  }, n;
}
var Fg = function(t) {
  return Vo(uI, t);
}, Cn = Fg;
ko.forEach(function(t) {
  Cn[t] = Fg(t);
});
j.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var _n = "__sc-".concat(Vt, "__");
j.NODE_ENV !== "production" && j.NODE_ENV !== "test" && typeof window < "u" && (window[_n] || (window[_n] = -14 * 668 + 5 * 1789 + 37 * 11), -3489 * 2 + -1 * 2773 + -53 * -184 === window[_n] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[_n] += 1);
const CI = Cn.div`
  position: relative;
`, dI = Cn.video`
  transform: ${(t) => t.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  width: 100%;
`;
class _ extends Error {
  constructor(e, n) {
    super(e);
    Q(this, "cause");
    this.name = "AutoCaptureError", this.cause = n;
  }
  static logError(e) {
  }
  static fromCameraError(e) {
    if (this.logError(e), e instanceof _)
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
    return new _(n, e);
  }
  static fromError(e) {
    if (this.logError(e), e instanceof _)
      return e;
    const n = "An unexpected error has occurred";
    return new _(n);
  }
}
var Ci = ((t) => (t.CONTINUE_DETECTION = "continue-detection", t.SWITCH_CAMERA = "switch-camera", t.TOGGLE_MIRROR = "toggle-mirror", t))(Ci || {}), Lg = ((t) => (t.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", t.CONTROL = "document-auto-capture:control", t.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", t.DOCUMENT_DETECTION = "document-auto-capture:document-detection", t.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", t.STATE_CHANGED = "document-auto-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", t))(Lg || {}), gt = ((t) => (t.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", t.CONTROL = "face-auto-capture:control", t.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", t.FACE_DETECTION = "face-auto-capture:face-detection", t.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", t.STATE_CHANGED = "face-auto-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", t))(gt || {}), Wn = ((t) => (t.ANIMATION_END = "magnifeye-auto-capture:animation-end", t.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", t))(Wn || {}), AI = ((t) => (t.ANIMATION_END = "smile-auto-capture:animation-end", t.STATUS_CHANGED = "smile-auto-capture:status-changed", t))(AI || {});
const Me = {};
Me.CANDIDATE_SELECTION = "candidate_selection", Me.FACE_TOO_CLOSE = "face_too_close", Me.FACE_TOO_FAR = "face_too_far", Me.FACE_CENTERING = "face_centering", Me.FACE_NOT_PRESENT = "face_not_present", Me.SHARPNESS_TOO_LOW = "sharpness_too_low", Me.BRIGHTNESS_TOO_LOW = "brightness_too_low", Me.BRIGHTNESS_TOO_HIGH = "brightness_too_high", Me.DEVICE_PITCHED = "device_pitched";
const Ye = Me, ot = {};
ot.isPresent = Ye.FACE_NOT_PRESENT, ot.isNotPitched = Ye.DEVICE_PITCHED, ot.isNotSmall = Ye.FACE_TOO_FAR, ot.isNotLarge = Ye.FACE_TOO_CLOSE, ot.isNotOutOfBounds = Ye.FACE_CENTERING, ot.isNotDim = Ye.BRIGHTNESS_TOO_LOW, ot.isNotBright = Ye.BRIGHTNESS_TOO_HIGH, ot.isSharp = Ye.SHARPNESS_TOO_LOW;
const pI = ot, Bn = {};
Bn.LOADING = "LOADING", Bn.ERROR = "ERROR", Bn.WAITING = "WAITING", Bn.RUNNING = "RUNNING";
const Je = Bn;
var We = ((t) => (t.CLOSEUP = "CLOSEUP", t.DISTANT = "DISTANT", t.MIDDLE = "MIDDLE", t))(We || {});
const Xg = { ...Je };
Xg.DONE = "DONE";
const qt = Xg, Yi = er(void 0);
Yi.displayName = "AppStateContext";
function jg() {
  const t = Wi(Yi);
  if (t === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return t;
}
const fI = Yi.Provider, Ti = jg, hI = jg;
class Mg extends Oe {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var e;
    const o = new _("An unknown error has occurred");
    (e = this.context) == null || e.handleError(o);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var o;
    return ((o = this.context) == null ? void 0 : o.appState) === Je.ERROR ? null : this.props.children;
  }
}
Q(Mg, "contextType", Yi);
const mI = Cn.canvas`
  transform: ${(t) => t.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
var bI = -107 * 2 + 9739 + -9525;
function se(t, o, e, n, i, r) {
  var a, g, s = {};
  for (g in o)
    g == "ref" ? a = o[g] : s[g] = o[g];
  var x = {};
  x.type = t, x.props = s, x.key = e, x.ref = a, x.__k = null, x.__ = null, x.__b = 0, x.__e = null, x.__d = void 0, x.__c = null, x.constructor = void (-19 * -334 + -5 * -208 + -1231 * 6), x.__v = --bI, x.__i = -(-9929 * 1 + 9806 + 124), x.__u = 0, x.__source = i, x.__self = r;
  var C = x;
  if (typeof t == "function" && (a = t.defaultProps))
    for (g in a)
      void (-17 * -163 + 2770 + 1 * -5541) === s[g] && (s[g] = a[g]);
  return Z.vnode && Z.vnode(C), C;
}
const yI = Cn.div`
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
function vI() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const wI = ug(({
  detectionDetails: t,
  isImageMirror: o
}, e) => vI() ? (console.log(t), se(Fe, {
  children: [se(mI, {
    ref: e,
    $isImageMirror: o
  }), se(yI, {
    children: Object.entries(t).map(([n, i]) => se("div", {
      children: [n, ": ", se("strong", {
        children: i
      })]
    }, n))
  })]
})) : null), Ug = (t) => t.length < -9394 + -16 * 593 + 821 * 23 ? -1599 + 49 * 38 + -263 : t.reduce((e, n) => e + n, -31 * 13 + -1523 * 5 + 8018) / t.length, En = (t) => Number.parseFloat(t.toFixed(3)), BI = (t) => {
  const o = t.getContext("2d");
  o && o.clearRect(0, 451 * 5 + -1874 + -381, o.canvas.width, o.canvas.height);
};
class SI {
  static async getVideoInputDeviceList() {
    return (await navigator.mediaDevices.enumerateDevices()).filter((e) => e.kind === "videoinput");
  }
}
const GI = 7720 + 2079 * 1 + 41 * -239 + 0.75, ZI = -5686 + -84 * 7 + 6276, kI = 600, KI = 0, Di = (t, o) => Math.min(t, o), HI = (t, o) => {
  const e = Di(o.width, o.height);
  return En(t * e);
}, Jg = ({ height: t, width: o }) => {
  const e = Di(o, t), n = e / (4022 + -1 * 4019) * (1 * 6121 + 2 * 1862 + -9841 * 1);
  if (o > t) {
    const r = {};
    return r.width = n, r.height = e, r;
  }
  const i = {};
  return i.width = e, i.height = n, i;
}, WI = ({ height: t, width: o }) => {
  const e = Di(o, t) * GI, n = (o - e) / (-2268 + 1 * 2270), i = (t - e) / (-7723 + -1 * 7545 + 2 * 7635), r = {};
  return r.shiftX = n, r.shiftY = i, r.width = e, r.height = e, r;
}, OI = (t, o) => HI(t, o) * ZI, VI = "@innovatrics/dot-common-auto-capture", RI = "5.2.4", EI = "module", PI = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, NI = {
  "@dot/proto-files": "1.0.3",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.2.2",
  comlink: "^4.4.1",
  preact: "^10.19.3",
  "styled-components": "^6.1.1",
  "wasm-feature-detect": "^1.6.1"
}, YI = {
  "@preact/preset-vite": "^2.7.0",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.3.3",
  vite: "^5.0.10",
  vitest: "^1.0.4"
}, TI = {
  name: VI,
  private: !0,
  version: RI,
  type: EI,
  scripts: PI,
  dependencies: NI,
  devDependencies: YI
}, DI = 5819 * 1 + -6094 + 275 * 1 + 0.4, FI = -3 * -1457 + 9001 * -1 + 4630 + 0.16, LI = 6989 + 1734 * -2 + 503 * -7 + 0.2, XI = 2354 + 3 * -211 + 1721 * -1 + 0.05, jI = -3643 * -2 + 2 * 3337 + 40 * -349 + 0.3, MI = -7363 + 212 * -20 + -41 * -283 + 0.25, UI = 417 + -139 * 3 + 0.9, JI = 2019 + -3 * 663, QI = -2627 + -1 * -2636 + 0.8100000000000005, di = {};
di.minDuration = 1e3, di.maxDuration = 2500, di.minFrames = 10;
const Io = di, Ro = {};
Ro.max = 100, Ro.min = 10;
const ka = Ro, zI = -5 * -223 + -1 * 2492 + 2097, $I = 3 * -17 + -1 * -8348 + 3 * -2699, qI = 1 * -7813 + -3547 + 11363 * 1, Qg = "AES-CBC", zg = "RSA-OAEP", _I = "SHA-256", ex = "image/jpeg", tx = -200 * -41 + 75 * 29 + -10367, nx = -13427 + 4489 * 3, ix = "SAM v1.35.3 for idcards", $g = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), Ka = () => {
  const t = /Android/i.test(navigator.userAgent), o = /Firefox/i.test(navigator.userAgent);
  return t && o;
}, ox = () => {
  const t = navigator.userAgent.includes("Chrome"), o = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return t && o ? !1 : o;
}, Eo = (t) => new Promise((o) => {
  setTimeout(o, t);
}), zt = (t) => JSON.parse(JSON.stringify(t, (o, e) => typeof e == "number" ? En(e) : e)), rx = () => TI.version, qg = (t) => new URL(t).hostname.replace("www.", ""), ax = () => qg(window.location.href) === "localhost", ei = (t) => Object.entries(t).map(([o, e]) => encodeURIComponent(o) + "=" + encodeURIComponent(e)).join("&"), gx = () => {
  const [t] = window.crypto.getRandomValues(new Uint32Array(1));
  return t.toString(1 * -5773 + -7063 + -36 * -357);
}, bn = (t) => Math.round(t / 500) * 500 / (5 * -890 + -3182 + -13 * -664), me = (t) => t ? t <= -4 * 25 + -1 * -6082 + -5981 ? Math.round(t * (9431 + -5857 * -1 + 2 * -7634)) / (9124 + 4 * 2002 + -93 * 184) : Math.round(t / (1 * -5171 + -2092 + -103 * -71)) * (-1912 * 2 + -2811 + 6685) : 1 * 1518 + -5290 * 1 + 92 * 41, ti = (t) => Math.round(t * 2) / (-7573 * 1 + -3 * 1036 + 9 * 1187), sx = (t, o) => {
  const e = t && performance.now() - t;
  return o >= Io.minFrames ? e > Io.minDuration : e > Io.maxDuration;
}, cx = (t, o) => JSON.stringify(t) === JSON.stringify(o) ? o : t, Ha = (t, o) => Math.abs(t - o);
function Ix(t, o) {
  let e;
  return (...n) => {
    const i = () => {
      clearTimeout(e), e = void 0, t(...n);
    };
    e === void (-6353 + -6353 * -1) && (e = setTimeout(i, o));
  };
}
var _g = ((t) => (t.AUTO_CAPTURE = "auto-capture", t))(_g || {});
const xo = (t) => t > 470 * 14 + 8341 + -2123 * 7 ? ">1m" : t > 103 * -15 + -4305 + 5895 ? ">45" : t > 1 * 467 + 3103 + -1 * 3540 ? ">30" : "" + t;
function ni(t, o) {
  return o ? o === "user" ? "Front Camera" : "Back Camera" : t;
}
const Jt = { appKey: "", deviceId: "", async countlyFetch(t) {
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
  const e = { _app_version: rx() }, n = { organization: qg(window.location.href) }, i = ei({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(n) });
  await this.countlyFetch(i);
}, async endSession() {
  const t = {};
  t.end_session = "1";
  const o = ei(t);
  await this.countlyFetch(o);
}, async sendAutoCaptureEvent(t, o) {
  const e = {};
  e.key = _g.AUTO_CAPTURE, e.count = 1, e.dur = o, e.segmentation = t;
  const n = [e], i = ei({ events: JSON.stringify(n) });
  await this.countlyFetch(i);
}, async sendDocumentData({ deviceName: t, documentDetection: o, facingMode: e, instructionSet: n, ...i }) {
  if (!o)
    return;
  const r = bn(i.captureProcessDurationInMs), a = { hotspots: me(o.hotspots), brightness: me(o.brightness), confidence: me(o.confidence), sharpness: me(o.sharpness), smallestEdge: me(o.smallestEdge), camera: ni(t, e), imageResolution: i.imageResolution.width + "x" + i.imageResolution.height, averageFps: ti(i.averageFps), captureTime: xo(r), instructionSet: n };
  this.sendAutoCaptureEvent(a, r);
}, async sendFaceData({ deviceName: t, faceDetection: o, facingMode: e, instructionSet: n, ...i }) {
  if (!o)
    return;
  const r = bn(i.captureProcessDurationInMs), a = { faceSize: me(o.faceSize), confidence: me(o.confidence), camera: ni(t, e), imageResolution: i.imageResolution.width + "x" + i.imageResolution.height, averageFps: ti(i.averageFps), captureTime: xo(r), instructionSet: n };
  this.sendAutoCaptureEvent(a, r);
}, async sendMagnifEyeData(t, o) {
  var u, p, f, v, w, E, k, G, H, L;
  if (!(t != null && t.length) || !(o != null && o.length))
    return;
  const [e, n, i] = t, [r, a] = o, g = ti(r.averageFps + (a == null ? void 0 : a.averageFps)) / (208 * -38 + 187 + 7719), s = bn(r.captureProcessDurationInMs), x = bn(a == null ? void 0 : a["captureProcessDurationInMs"]), C = { faceSizeDistant: me((u = e.data.detection) == null ? void 0 : u.faceSize), faceSizeCloseup: me((p = i == null ? void 0 : i.data.detection) == null ? void 0 : p.faceSize), faceSizeMiddle: me((f = n.data.detection) == null ? void 0 : f.faceSize), confidenceDistant: me((v = e.data.detection) == null ? void 0 : v.confidence), confidenceCloseup: me((w = i == null ? void 0 : i.data.detection) == null ? void 0 : w.confidence), confidenceMiddle: me((E = n.data.detection) == null ? void 0 : E.confidence), imageResolution: ((G = (k = e.data) == null ? void 0 : k["imageResolution"]) == null ? void 0 : G.width) + "x" + ((L = (H = e.data) == null ? void 0 : H["imageResolution"]) == null ? void 0 : L.height), averageFps: g, captureTimeCloseup: x > 45 ? ">45" : "" + x, captureTimeDistant: s > 761 * 10 + 260 * 25 + -14080 ? ">30" : "" + s, camera: ni(r == null ? void 0 : r.deviceName, r == null ? void 0 : r.facingMode), instructionSet: r.instructionSet };
  this.sendAutoCaptureEvent(C, s + x);
}, async sendSmileLivenessData(t, o) {
  var C, u, p, f, v, w;
  if (!(t != null && t.length) || !(o != null && o.length))
    return;
  const [e, n] = t, [i, r] = o, a = ti(i.averageFps + (r == null ? void 0 : r.averageFps)) / 2, g = bn(i.captureProcessDurationInMs), s = 3, x = { faceSize: me((C = n.data.detection) == null ? void 0 : C.faceSize), confidence: me((u = e.data.detection) == null ? void 0 : u.confidence), imageResolution: ((f = (p = e.data) == null ? void 0 : p["imageResolution"]) == null ? void 0 : f.width) + "x" + ((w = (v = e.data) == null ? void 0 : v["imageResolution"]) == null ? void 0 : w.height), averageFps: a, captureTimeNeutral: xo(g), captureTimeSmile: "" + s, camera: ni(i == null ? void 0 : i.deviceName, i.facingMode), instructionSet: i.instructionSet };
  this.sendAutoCaptureEvent(x, g + s);
} }, xx = () => {
  const t = sessionStorage.getItem("dot-user-id");
  if (t)
    return t;
  const o = gx();
  return sessionStorage.setItem("dot-user-id", o), o;
}, en = { livenessImageProcessAnalytics: [], skipSendFaceData: !1, init(t, o) {
  if (ax())
    return;
  const e = xx();
  this.skipSendFaceData = o, Jt.init(e, t);
}, endSession() {
  this.skipSendFaceData = !1, Jt.endSession();
}, sendDocumentData(t) {
  Jt.sendDocumentData(t);
}, sendFaceData(t) {
  if (this.skipSendFaceData) {
    const o = {};
    o.averageFps = t.averageFps, o.captureProcessDurationInMs = t.captureProcessDurationInMs, o.deviceName = t.deviceName, o.facingMode = t.facingMode, o.instructionSet = t.instructionSet, this.livenessImageProcessAnalytics.push(o);
    return;
  }
  Jt.sendFaceData(t);
}, sendMagnifEyeData(t) {
  Jt.sendMagnifEyeData(t, this.livenessImageProcessAnalytics), this.livenessImageProcessAnalytics = [];
}, sendSmileLivenessData(t) {
  Jt.sendSmileLivenessData(t, this.livenessImageProcessAnalytics), this.livenessImageProcessAnalytics = [];
} };
function Wa(t) {
  t.getTracks().forEach((e) => {
    e.stop();
  });
}
function lx(t, o) {
  if (!t)
    return o;
  const { detectionRecord: e, hashedDetectedImages: n } = t;
  o.hashedDetectedImages && (n == null || n.push(...o.hashedDetectedImages)), o.detectionRecord && (e == null || e.push(...o.detectionRecord));
  const i = { ...t };
  return i.hashedDetectedImages = n, i.detectionRecord = e, i;
}
const Ai = {};
Ai.width = 1920, Ai.height = 1080, Ai.facingMode = "user";
const ux = Ai;
class kn extends SI {
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
    await this.startWebcam(i), ox() && await this.startWebcam(i);
  }
  async startWebcam(e = {}) {
    var n;
    return this.stopCamera(), Ka() && await Eo(-15 * 76 + 8627 + 7037 * -1), this.mediaStream = await navigator.mediaDevices.getUserMedia(e), this.videoRef.srcObject = this.mediaStream, await this.videoRef.play(), this.videoTrack = (n = this.mediaStream) == null ? void 0 : n.getVideoTracks()[8502 + -28 * -6 + -8670], this.checkVideoTrackSettings(), this.videoTrack;
  }
  checkVideoTrackSettings() {
    var i;
    const e = (i = this.videoTrack) == null ? void 0 : i.getSettings();
    if (!(e != null && e.height) || !(e != null && e.width))
      throw new _("Could not init camera settings");
    if (Math.min(e == null ? void 0 : e.width, e == null ? void 0 : e.height) < zI)
      throw this.stopCamera(), new _("Could not init video because of low camera resolution: " + e.width + "x" + e.height + ".");
  }
  async getBestCamera(e) {
    const n = {};
    return n.video = !0, this.mediaStream = await navigator.mediaDevices.getUserMedia(n), this.stopCamera(), $g() && e === "environment" ? (await kn.getVideoInputDeviceList()).find((a) => a.label.includes("back") && a.label.includes("0")) : void (-8128 + 6530 * -1 + 14658);
  }
  async getAvailableCamerasInfo() {
    const e = await kn.getVideoInputDeviceList();
    for (const n of e) {
      Ka() && await Eo(9455 * -1 + -6433 + 21 * 778);
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
        i instanceof Error && _.logError(i);
      }
    }
  }
  getConstraints(e, n) {
    const i = { ...ux, ...e };
    i.deviceId = n ? { exact: n.deviceId } : void 0;
    const r = {};
    return r.video = i, r.audio = !1, r;
  }
  takePhoto() {
    var r;
    const e = (r = this.videoTrack) == null ? void 0 : r.getSettings();
    if (!(e != null && e.width))
      throw new _("Cant take photo - video width is undefined");
    if (!(e != null && e.height))
      throw new _("Cant take photo - video height is undefined");
    const n = document.createElement("canvas");
    n.width = e.width, n.height = e.height;
    const i = n.getContext("2d");
    if (!i)
      throw new _("Cant take photo - cant create context");
    return i.drawImage(this.videoRef, 8359 + -4717 * 1 + -3642, 9529 + -799 * -4 + -12725), n;
  }
  getCameraResolution() {
    var i;
    const e = (i = this.videoTrack) == null ? void 0 : i.getSettings();
    if (!(e != null && e.width))
      throw new _("Video width is undefined");
    if (!(e != null && e.height))
      throw new _("Video height is undefined");
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
    const e = this.videoTrack.getConstraints(), n = this.videoTrack.getSettings(), i = await kn.getVideoInputDeviceList();
    if (i.length <= -1 * 6059 + 5141 + 919)
      return;
    const r = i.findIndex((s) => s.deviceId === n.deviceId), a = i[r + (-1531 * -6 + -109 * -86 + 277 * -67)] ?? i[5671 + 1 * -1861 + -3810], g = this.getConstraints(e, a);
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
var Cx = He;
const dx = () => {
  var t;
  return ((t = Cx.VITE_APP_ENV) == null ? void 0 : t.toLowerCase()) === "dev";
};
class Ir extends Array {
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
    this.length === this.size && this.splice(-7939 + -5645 * 1 + 13584, e.length), this.push(...e);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-1426 + 8 * 1091 + -7302);
  }
}
const Ax = (t, o, e = ex) => new Promise((n) => {
  t.toBlob((i) => {
    if (!i)
      throw new Error("Canvas to Blob failed");
    n(i);
  }, e, o);
}), es = async (t) => Ax(t, 90), px = (t, o) => {
  const e = document.createElement("canvas");
  e.width = o.width, e.height = o.height;
  const n = e.getContext("2d");
  if (!n)
    throw new Error("cropImage ctx error");
  return n.drawImage(t, o.shiftX, o.shiftY, o.width, o.height, 0, 5 * -711 + -76 * 68 + 793 * 11, e.width, e.height), e;
}, fx = (t) => {
  const o = t.getContext("2d");
  if (!o)
    throw new Error("getImageDataForSam ctx error");
  const { data: e } = o.getImageData(3 * 1609 + 982 * 5 + -9737 * 1, 0, t.width, t.height);
  return e;
}, ts = (t, o, e, n) => {
  const i = t.getContext("2d");
  i && (i.beginPath(), n ? (i.fillStyle = e, i.fillRect(o.topLeft.x, o.topLeft.y, o.width, o.height)) : (i.strokeStyle = e, i.rect(o.topLeft.x, o.topLeft.y, o.width, o.height)), i.stroke());
}, lo = (t, o, e) => {
  const { height: n, shiftX: i, shiftY: r, width: a } = o, g = {};
  g.x = i, g.y = r;
  const s = {};
  s.topLeft = g, s.width = a, s.height = n, s.color = e, ts(t, s, e);
}, ns = (t, o, e) => {
  const n = t.getContext("2d");
  n && (n.fillStyle = e, n.fillRect(o.x, o.y, 495 + 43 * 19 + 1305 * -1, 7), n.beginPath());
}, hx = (t, o) => {
  const { height: e, shiftX: n, shiftY: i, width: r } = o;
  return !(t.x < n || t.x > n + r || t.y < i || t.y > i + e);
}, mx = (t, o) => Object.values(t).every((e) => hx(e, o)), is = (t, o) => {
  const e = ht(o);
  Ae(() => {
    e.current = o;
  }, [o]), Ae(() => {
    const n = (i) => e.current(i);
    return document.addEventListener(t, n), () => {
      document.removeEventListener(t, n);
    };
  }, [t]);
};
function yi() {
  throw new Error("Cycle detected");
}
var bx = Symbol.for("preact-signals");
function xr() {
  if (tn > -1 * 3373 + -3053 * -1 + 321)
    tn--;
  else {
    for (var t, o = !1; void (2676 + -892 * 3) !== Kn; ) {
      var e = Kn;
      for (Kn = void (152 * -62 + -121 * -1 + -443 * -21), Po++; void (-2841 + -3729 * -1 + 444 * -2) !== e; ) {
        var n = e.o;
        if (e.o = void (5824 + 524 * -2 + 597 * -8), e.f &= -(3580 + -54 * -179 + -13243), !(9250 + -9242 * 1 & e.f) && as(e))
          try {
            e.c();
          } catch (i) {
            !o && (t = i, o = !(82 * -51 + -74 * -71 + -8 * 134));
          }
        e = n;
      }
    }
    if (Po = 5227 + -1 * 5227, tn--, o)
      throw t;
  }
}
var ie = void (-9 * -37 + 60 * -94 + -183 * -29), Kn = void (-806 + 6917 * 1 + -21 * 291), tn = 3783 * -1 + 4253 * 1 + -470, Po = 1449 + -161 * 9, vi = 8687 + -1 * -9497 + -18184;
function os(t) {
  if (void (-1 * 5069 + 7742 + -2673) !== ie) {
    var o = t.n;
    if (void (-5 * -1753 + -515 * 7 + -344 * 15) === o || o.t !== ie)
      return o = { i: 0, S: t, p: ie.s, n: void (-3411 + -9 * -379), t: ie, e: void (-11809 + -11809 * -1), x: void (-16 * -89 + 669 * -1 + -755), r: o }, void (1 * 9179 + 7331 + -16510) !== ie.s && (ie.s.n = o), ie.s = o, t.n = o, -293 * -5 + -37 * -134 + -6391 & ie.f && t.S(o), o;
    if (-(2688 + 1 * 3683 + -6370) === o.i)
      return o.i = 1 * -2339 + -4491 * -1 + 4 * -538, void (-399 * -14 + -2170 + 8 * -427) !== o.n && (o.n.p = o.p, o.p !== void 0 && (o.p.n = o.n), o.p = ie.s, o.n = void (8392 + -2098 * 4), ie.s.n = o, ie.s = o), o;
  }
}
function de(t) {
  this.v = t, this.i = 1429 * -2 + 9829 + -6971, this.n = void (4290 + -2301 * 3 + 2613), this.t = void (-7 * -533 + 1 * -9293 + 5562);
}
de.prototype.brand = bx, de.prototype.h = function() {
  return !(34 * -59 + 5193 + -3187);
}, de.prototype.S = function(t) {
  this.t !== t && void (-1 * -2243 + 3921 + -6164) === t.e && (t.x = this.t, void (2653 * 2 + -1 * -8228 + -13534) !== this.t && (this.t.e = t), this.t = t);
}, de.prototype.U = function(t) {
  if (void (7355 + -49 * -18 + -8237) !== this.t) {
    var o = t.e, e = t.x;
    void (9059 + 4678 * 1 + -13737) !== o && (o.x = e, t.e = void (1 * -4151 + 4252 + 1 * -101)), void (8 * 944 + 2 * 3554 + 5 * -2932) !== e && (e.e = o, t.x = void (358 * 8 + -6961 + 4097)), t === this.t && (this.t = e);
  }
}, de.prototype.subscribe = function(t) {
  var o = this;
  return ur(function() {
    var e = o.value, n = -9e3 + -3 * -1854 + -1735 * -2 & this.f;
    this.f &= -(-7649 * 1 + 4 * -870 + 11162 * 1);
    try {
      t(e);
    } finally {
      this.f |= n;
    }
  });
}, de.prototype.valueOf = function() {
  return this.value;
}, de.prototype.toString = function() {
  return this.value + "";
}, de.prototype.toJSON = function() {
  return this.value;
}, de.prototype.peek = function() {
  return this.v;
}, Object.defineProperty(de.prototype, "value", { get: function() {
  var t = os(this);
  return void (9 * 877 + -4117 + -3776) !== t && (t.i = this.i), this.v;
}, set: function(t) {
  if (ie instanceof dt && function() {
    throw new Error("Computed cannot have side-effects");
  }(), t !== this.v) {
    Po > 180 * -24 + -4989 + 9409 && yi(), this.v = t, this.i++, vi++, tn++;
    try {
      for (var o = this.t; void (-1 * -8795 + -5643 + -394 * 8) !== o; o = o.x)
        o.t.N();
    } finally {
      xr();
    }
  }
} });
function rs(t) {
  return new de(t);
}
function as(t) {
  for (var o = t.s; void (1185 * 2 + 626 * 1 + -2996) !== o; o = o.n)
    if (o.S.i !== o.i || !o.S.h() || o.S.i !== o.i)
      return !0;
  return !(1 * 2193 + 5325 + -7517);
}
function gs(t) {
  for (var o = t.s; void (9575 * 1 + 15 + -9590) !== o; o = o.n) {
    var e = o.S.n;
    if (void (-1 * -5398 + 9658 + 7528 * -2) !== e && (o.r = e), o.S.n = o, o.i = -(51 * 73 + -22 * -233 + -4 * 2212), void (-13748 + 28 * 491) === o.n) {
      t.s = o;
      break;
    }
  }
}
function ss(t) {
  for (var o = t.s, e = void (2 * 4659 + 2226 + -1443 * 8); void (1 * -5909 + 3629 + -1140 * -2) !== o; ) {
    var n = o.p;
    -(-6017 * -1 + 1485 + -577 * 13) === o.i ? (o.S.U(o), void (1939 * -4 + -31 * 53 + 9399) !== n && (n.n = o.n), o.n !== void 0 && (o.n.p = n)) : e = o, o.S.n = o.r, o.r !== void 0 && (o.r = void (10 * 566 + 1 * -4327 + -1333)), o = n;
  }
  t.s = e;
}
function dt(t) {
  de.call(this, void (-1683 + -17 * -99)), this.x = t, this.s = void 0, this.g = vi - (152 * 12 + -509 * -1 + -2332), this.f = 4042 + 1 * 1023 + -5061;
}
(dt.prototype = new de()).h = function() {
  if (this.f &= -3, 4 * -31 + -1 * -9151 + -9026 & this.f)
    return !(877 * -10 + 2003 + 6768 * 1);
  if (2481 + -2449 * 1 == (36 & this.f))
    return !(-993 * 10 + 1940 + 7990);
  if (this.f &= -(5631 + -47 * 190 + 3304), this.g === vi)
    return !(2021 + 1774 * -1 + -247);
  if (this.g = vi, this.f |= 17749 + -612 * 29, this.i > 877 + 877 * -1 && !as(this))
    return this.f &= -(-1051 * 1 + -421 * -6 + -1473), !(1499 + -1499 * 1);
  var t = ie;
  try {
    gs(this), ie = this;
    var o = this.x();
    (3796 + -286 * -7 + -5782 & this.f || this.v !== o || -11122 + 2 * 5561 === this.i) && (this.v = o, this.f &= -(11841 + 16 * -739), this.i++);
  } catch (e) {
    this.v = e, this.f |= 2493 * 3 + -9802 + -2339 * -1, this.i++;
  }
  return ie = t, ss(this), this.f &= -(3 * -2886 + 4 * -185 + 25 * 376), !(-6764 + -2 * 1786 + 646 * 16);
}, dt.prototype.S = function(t) {
  if (void (-7237 * -1 + -25 * -175 + -11612) === this.t) {
    this.f |= 2 * 2462 + 1 * -6872 + -1 * -1984;
    for (var o = this.s; void (-5121 + 106 * -39 + -3085 * -3) !== o; o = o.n)
      o.S.S(o);
  }
  de.prototype.S.call(this, t);
}, dt.prototype.U = function(t) {
  if (void (5234 * -1 + -5056 + 10290) !== this.t && (de.prototype.U.call(this, t), void (-11 * 837 + -5211 + 14418) === this.t)) {
    this.f &= -(3303 * 3 + -2658 + -7218);
    for (var o = this.s; o !== void 0; o = o.n)
      o.S.U(o);
  }
}, dt.prototype.N = function() {
  if (!(6146 + -128 * 48 & this.f)) {
    this.f |= -9576 + 428 * 8 + 6158;
    for (var t = this.t; t !== void 0; t = t.x)
      t.t.N();
  }
}, dt.prototype.peek = function() {
  if (this.h() || yi(), 727 + 7 * 157 + -1810 & this.f)
    throw this.v;
  return this.v;
}, Object.defineProperty(dt.prototype, "value", { get: function() {
  4881 + -1751 * 2 + -1378 & this.f && yi();
  var t = os(this);
  if (this.h(), void (-17 * 28 + -287 * -32 + -8708 * 1) !== t && (t.i = this.i), -12 * 7 + -4434 + 4534 * 1 & this.f)
    throw this.v;
  return this.v;
} });
function yx(t) {
  return new dt(t);
}
function cs(t) {
  var o = t.u;
  if (t.u = void (-2977 + 43 * 8 + -2633 * -1), typeof o == "function") {
    tn++;
    var e = ie;
    ie = void (-12901 + 19 * 679);
    try {
      o();
    } catch (n) {
      throw t.f &= -(73 * -133 + 5 * -479 + -12106 * -1), t.f |= -1 * 8773 + 8383 + 398, lr(t), n;
    } finally {
      ie = e, xr();
    }
  }
}
function lr(t) {
  for (var o = t.s; void (-1677 * -4 + 2646 + -9354) !== o; o = o.n)
    o.S.U(o);
  t.x = void (293 * -29 + 8501 + -4), t.s = void (14684 + 4 * -3671), cs(t);
}
function vx(t) {
  if (ie !== this)
    throw new Error("Out-of-order effect");
  ss(this), ie = t, this.f &= -(-4530 + -2799 * 3 + 12929), -8022 + 730 * 11 & this.f && lr(this), xr();
}
function Sn(t) {
  this.x = t, this.u = void 0, this.s = void (-79 * -61 + 9301 + -14120), this.o = void (-67 * 103 + -20 * 92 + -1 * -8741), this.f = -4 * -2037 + -9359 + 1243;
}
Sn.prototype.c = function() {
  var t = this.S();
  try {
    if (-5627 + 196 * 23 + 1127 & this.f || void (-3 * 2597 + -7 * -261 + 5964) === this.x)
      return;
    var o = this.x();
    typeof o == "function" && (this.u = o);
  } finally {
    t();
  }
}, Sn.prototype.S = function() {
  1 & this.f && yi(), this.f |= 1, this.f &= -(27 * -237 + -6808 + 16 * 826), cs(this), gs(this), tn++;
  var t = ie;
  return ie = this, vx.bind(this, t);
}, Sn.prototype.N = function() {
  !(-6064 + 145 * -31 + 10561 & this.f) && (this.f |= -2 * -3749 + -9542 + 33 * 62, this.o = Kn, Kn = this);
}, Sn.prototype.d = function() {
  this.f |= 1762 * -4 + -4446 + -3 * -3834, 14 * -395 + 7 * 405 + -337 * -8 & this.f || lr(this);
};
function ur(t) {
  var o = new Sn(t);
  try {
    o.c();
  } catch (e) {
    throw o.d(), e;
  }
  return o.d.bind(o);
}
var uo;
function _t(t, o) {
  Z[t] = o.bind(null, Z[t] || function() {
  });
}
function ii(t) {
  uo && uo(), uo = t && t.S();
}
function Is(t) {
  var o = this, e = t.data, n = Wt(e);
  n.value = e;
  var i = Qe(function() {
    for (var r = o.__v; r = r.__; )
      if (r.__c) {
        r.__c.__$f |= -1659 + 11 * 607 + 1 * -5014;
        break;
      }
    return o.__$u.c = function() {
      var a;
      !_a(i.peek()) && -11355 + -3786 * -3 === ((a = o.base) == null ? void (5264 + -5264 * 1) : a.nodeType) ? o.base.data = i.peek() : (o.__$f |= -1 * 3742 + -3 * 2719 + 11900, o.setState({}));
    }, yx(function() {
      var a = n.value.value;
      return -5647 * -1 + -4976 * 1 + 1 * -671 === a ? 266 * 31 + 2496 + 41 * -262 : !(-4419 + -1 * -3754 + -665 * -1) === a ? "" : a || "";
    });
  }, []);
  return i.value;
}
Is.displayName = "_st";
var No = {};
No.configurable = !(11 * -5 + -5357 + 5412), No.value = void (-132 * -59 + 261 * 2 + -277 * 30);
var Yo = {};
Yo.configurable = !(5502 + -9 * 11 + -1 * 5403), Yo.value = Is;
var To = {};
To.configurable = !(-1 * 2768 + 8270 * -1 + 11038), To.get = function() {
  var t = {};
  return t.data = this, t;
};
var Do = {};
Do.configurable = !(23 * -139 + 7544 + -9 * 483), Do.value = 1;
var yn = {};
yn.constructor = No, yn.type = Yo, yn.props = To, yn.__b = Do, Object.defineProperties(de.prototype, yn), _t("__b", function(t, o) {
  if (typeof o.type == "string") {
    var e, n = o.props;
    for (var i in n)
      if (i !== "children") {
        var r = n[i];
        r instanceof de && (e || (o.__np = e = {}), e[i] = r, n[i] = r.peek());
      }
  }
  t(o);
}), _t("__r", function(t, o) {
  ii();
  var e, n = o.__c;
  n && (n.__$f &= -(44 * 12 + -49 * 163 + -3 * -2487), void (1 * 559 + 903 * 2 + -2365) === (e = n.__$u) && (n.__$u = e = function(i) {
    var r;
    return ur(function() {
      r = this;
    }), r.c = function() {
      n.__$f |= 3518 + -2 * 3911 + 4305, n.setState({});
    }, r;
  }())), ii(e), t(o);
}), _t("__e", function(t, o, e, n) {
  ii(), t(o, e, n);
}), _t("diffed", function(t, o) {
  ii();
  var e;
  if (typeof o.type == "string" && (e = o.__e)) {
    var n = o.__np, i = o.props;
    if (n) {
      var r = e.U;
      if (r)
        for (var a in r) {
          var g = r[a];
          void (2882 + -4 * 831 + 26 * 17) !== g && !(a in n) && (g.d(), r[a] = void (-3 * 393 + -3374 + -29 * -157));
        }
      else
        e.U = r = {};
      for (var s in n) {
        var x = r[s], C = n[s];
        void (-3869 + 349 * -9 + -5 * -1402) === x ? (x = wx(e, s, C, i), r[s] = x) : x.o(C, i);
      }
    }
  }
  t(o);
});
function wx(t, o, e, n) {
  var i = o in t && t.ownerSVGElement === void 0, r = rs(e);
  return { o: function(a, g) {
    r.value = a, n = g;
  }, d: ur(function() {
    var a = r.value.value;
    n[o] !== a && (n[o] = a, i ? t[o] = a : a ? t.setAttribute(o, a) : t.removeAttribute(o));
  }) };
}
_t("unmount", function(t, o) {
  if (typeof o.type == "string") {
    var e = o.__e;
    if (e) {
      var n = e.U;
      if (n) {
        e.U = void (-4502 + -3 * -425 + 3227);
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
      g && (a.__$u = void (-7094 + 131 * 57 + -373), g.d());
    }
  }
  t(o);
}), _t("__h", function(t, o, e, n) {
  (n < 5 * 365 + -207 + -1615 || n === 9) && (o.__$f |= 22 * -134 + -1504 * -4 + -3066), t(o, e, n);
}), Oe.prototype.shouldComponentUpdate = function(t, o) {
  var e = this.__$u;
  if (!(e && e.s !== void 0 || -7471 + 25 * 379 + 4 * -500 & this.__$f))
    return !0;
  if (3 * 2179 + 2 * -4279 + -1 * -2024 & this.__$f)
    return !(4377 * -1 + 163 * 59 + 2620 * -2);
  for (var n in o)
    return !(-590 + -1 * -590);
  for (var i in t)
    if (i !== "__source" && t[i] !== this.props[i])
      return !(9 * -392 + -401 * -3 + 2325);
  for (var r in this.props)
    if (!(r in t))
      return !(3292 + 21 * -46 + -2326);
  return !(8540 + -1 * 8539);
};
function Wt(t) {
  return Qe(function() {
    return rs(t);
  }, []);
}
const Bx = (t) => {
  const o = Wt(!1);
  return is(t, (n) => {
    n.detail && (o.value = n.detail.animationEnd);
  }), o;
};
var xs = ((t) => (t.DOCUMENT = "document-auto-capture:dev", t.FACE = "face-auto-capture:dev", t))(xs || {});
const Fo = {};
Fo.SIMD = "simd", Fo.NO_SIMD = "no-simd";
const Oa = Fo, ls = er(null), us = () => {
  const t = Wi(ls);
  if (!t)
    throw new Error("Missing provider for CameraOptionsContext");
  return t;
}, Sx = (t) => {
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
      faceConfidence: (r == null ? void 0 : r.faceConfidence) ?? DI,
      minFaceSizeRatio: (r == null ? void 0 : r.minFaceSizeRatio) ?? FI,
      maxFaceSizeRatio: (r == null ? void 0 : r.maxFaceSizeRatio) ?? LI,
      sharpnessThreshold: (r == null ? void 0 : r.sharpnessThreshold) ?? jI,
      brightnessLowThreshold: (r == null ? void 0 : r.brightnessLowThreshold) ?? MI,
      brightnessHighThreshold: (r == null ? void 0 : r.brightnessHighThreshold) ?? UI,
      outOfBoundsThreshold: (r == null ? void 0 : r.outOfBoundsThreshold) ?? XI,
      devicePitchAngleThreshold: (r == null ? void 0 : r.devicePitchAngleThreshold) ?? JI
    }
  };
}, Gx = ({
  cameraOptions: t,
  children: o
}) => {
  const e = Qe(() => ({
    faceCameraOptions: Sx(t)
  }), [t]);
  return se(ls.Provider, {
    value: e,
    children: o
  });
}, Cs = (t, o) => {
  const e = {};
  e.detail = o, document.dispatchEvent(new CustomEvent(t, e));
}, Zi = class Zi {
  constructor() {
    Q(this, "lastDetails", {});
    Q(this, "delayedTime", -8089 * -1 + 2321 * 1 + -10410);
  }
  static getInstance() {
    return !this._instance && (this._instance = new Zi()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = -4 * 1089 + 9034 + -1 * 4678;
  }
  isDetailChanged(o, e) {
    return JSON.stringify(e) !== JSON.stringify(this.lastDetails[o]) ? (this.lastDetails[o] = e, !0) : !1;
  }
  dispatchCustomEventOnChange(o, e) {
    this.isDetailChanged(o, e) && Cs(o, e);
  }
  dispatchDelayedCustomEventOnChange(o, e, n) {
    const i = performance.now();
    i - this.delayedTime > n && (this.dispatchCustomEventOnChange(o, e), this.delayedTime = i);
  }
};
Q(Zi, "_instance");
let On = Zi;
const Pn = On.getInstance(), Va = (t, o, e = kI) => {
  const n = {};
  n.instructionCode = o;
  const i = n;
  Pn.dispatchDelayedCustomEventOnChange(t, i, e);
}, Zx = (t, o) => {
  Pn.dispatchCustomEventOnChange(t, o);
}, kx = (t, o) => {
  const e = {};
  e.size = o;
  const n = e;
  Pn.dispatchCustomEventOnChange(t, n);
}, Kx = (t, o, e) => {
  const n = o.confidence < e ? void 0 : o, i = {};
  i.detectedObject = n;
  const r = i;
  Pn.dispatchCustomEventOnChange(t, r);
}, Hx = (t, o, e) => {
  const n = {};
  n.image = e, n.data = {}, n.data.detection = o, n.data.imageResolution = {}, n.data.imageResolution.width = e.width, n.data.imageResolution.height = e.height;
  const i = n;
  Pn.dispatchCustomEventOnChange(t, i);
}, Lo = (t, o) => {
  Cs(t, o);
}, Wx = (t, o) => {
  if (dx()) {
    const e = {};
    e.candidateSelectionImages = o;
    const n = e;
    On.getInstance().dispatchCustomEventOnChange(t, n);
  }
}, Ox = (t, o) => {
  const { cameraResolution: e, shouldMirror: n } = o;
  Ae(() => {
    if (!e)
      return;
    const i = {};
    i.cameraResolution = e, i.isMirroring = n, Zx(t, i);
  }, [e, n, t]);
}, Vx = (t) => t === Lg.CONTROL ? !$g() : !0, Rx = (t, o) => {
  const { appState: e, handleAppStateChange: n, handleError: i } = Ti(), [r, a] = Te(), g = Qe(() => {
    const x = o == null ? void 0 : o.getCameraSettings().facingMode;
    return x ? r ?? x === "user" : r ?? Vx(t);
  }, [o, r, t]);
  Ae(() => {
    const x = () => {
      e !== Je.LOADING && n(Je.RUNNING);
    }, C = () => {
      a(r === void 0 ? !g : !r);
    }, u = async () => {
      if (o) {
        n(Je.LOADING);
        try {
          await o.switchCamera(), n(Je.RUNNING);
        } catch (f) {
          if (f instanceof Error) {
            i(_.fromCameraError(f));
            return;
          }
        }
        a(void 0);
      }
    }, p = (f) => {
      var v;
      switch ((v = f.detail) == null ? void 0 : v["instruction"]) {
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
    return document.addEventListener(t, p), () => {
      document.removeEventListener(t, p);
    };
  }, [e, o, i, r, n, g, t]);
  const s = {};
  return s.shouldMirror = g, s;
}, Ex = (t, o) => {
  var s;
  const e = ht(), { handleError: n, setIsCameraReady: i } = Ti(), [r, a] = Te(), g = hi((x) => {
    a((C) => cx(x, C));
  }, []);
  return Ae(() => ((async () => {
    if (!(t != null && t.current)) {
      n(new _("Something went wrong during video initialization"));
      return;
    }
    const C = new kn(t.current);
    try {
      const u = {};
      u.facingMode = o, await C.initWebcam(u);
    } catch (u) {
      if (u instanceof Error) {
        n(_.fromCameraError(u));
        return;
      }
    }
    i(!0), g(C.getCameraResolution()), e.current = C;
  })(), function() {
    e.current && e.current.stopCamera();
  }), [o, n, i, t, g]), { cameraHandler: e.current, cameraSettings: (s = e.current) == null ? void 0 : s.getCameraSettings(), cameraResolution: r, onCameraResolutionChange: g };
}, Px = () => {
  Ae(() => (window.addEventListener("beforeunload", en.endSession), () => {
    en.endSession(), window.removeEventListener("beforeunload", en.endSession);
  }), []);
}, Nx = (t, o) => {
  const [e, n] = Te();
  Ae(() => {
    const i = () => {
      !t.current || e === window.innerWidth || (n(window.innerWidth), kx(o, t.current.getBoundingClientRect()));
    };
    return i(), window.addEventListener("resize", i), () => {
      window.removeEventListener("resize", i);
    };
  }, [t, o, e]);
};
function Yx(t) {
  return En(Math.abs(t));
}
const Tx = () => {
  const [t, o] = Te(null), e = ht(new Ir(-7894 + -1 * -7899));
  function n(r) {
    const { z: a } = r.accelerationIncludingGravity || {};
    if (!a)
      return;
    e.current.pushFixed(Yx(a));
    const g = En(Ug(e.current)), s = {};
    s.z = g, o(s);
  }
  Ae(() => (window.addEventListener("devicemotion", Ix(n, nx), !0), () => {
    window.removeEventListener("devicemotion", n, !0);
  }), []);
  const i = {};
  return i.acceleration = t, i;
}, Cr = (t) => {
  const { height: o, width: e } = Jg(t), n = (t.width - e) / (9332 * -1 + 3 * -2247 + 16075), i = (t.height - o) / (-4077 + -1 * -4079), r = {};
  return r.shiftX = n, r.shiftY = i, r.width = e, r.height = o, r;
}, ds = (t, o) => {
  const { height: e, width: n } = Jg(t), i = Di(t.width, t.height), r = n - i * o * (-5724 + 1 * 5726), a = e - i * o * (571 * -7 + 1304 * -2 + -1 * -6607), g = (t.width - r) / (-185 * 11 + -1682 * -1 + 5 * 71), s = (t.height - a) / (34 * -283 + 1271 + 8353 * 1), x = {};
  return x.shiftX = g, x.shiftY = s, x.width = r, x.height = a, x;
}, Co = (t, o) => {
  const { shiftX: e, shiftY: n } = Cr(t), i = {};
  return i.x = o.x + e, i.y = o.y + n, i;
}, Dx = (t, o) => ({ ...o, topLeft: Co(t, o.topLeft), bottomRight: Co(t, o.bottomRight), faceCenter: Co(t, o.faceCenter) }), As = (t, o) => {
  const { faceCenter: e, faceSize: n } = t, i = OI(n, o), r = {};
  r.x = e.x, r.y = e.y - i;
  const a = {};
  a.x = e.x + i, a.y = e.y;
  const g = {};
  g.x = e.x, g.y = e.y + i;
  const s = {};
  s.x = e.x - i, s.y = e.y;
  const x = {};
  return x.top = r, x.right = a, x.bottom = g, x.left = s, zt(x);
};
var Fx = { VITE_FACE_COUNTLY_APP_KEY: "5f83e83ee4cee1ab6e5bbf86e215644473299675", VITE_MAGNIFEYE_COUNTLY_APP_KEY: "d5ca54dabfb1a2c72d7090c9c8980252a879da44", VITE_DOCUMENT_COUNTLY_APP_KEY: "065cf6e242fc5e785cd17eebfbfbbd212a33133b", VITE_COUNTLY_URL: "https://innovatrics.count.ly", VITE_SMILE_COUNTLY_APP_KEY: "d64319129bb0ee02eccfab418edba9629a97d6b6", VITE_RSA_PUBLIC_KEY: "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const Lx = (t, o) => {
  const {
    bottomRight: e,
    faceCenter: n,
    topLeft: i
  } = o, r = {
    topLeft: i,
    width: e.x - i.x,
    height: e.y - i.y
  };
  ts(t, r, "rgba(255, 0, 0, 0.3)", !0), ns(t, n, "lime");
}, Xx = (t, o, e) => {
  const n = As(o, e);
  Object.values(n).map((i) => ns(t, i, "orange"));
}, jx = ({
  cameraResolution: t,
  detectionDetails: o,
  isImageMirror: e
}) => {
  const {
    faceCameraOptions: {
      thresholds: n
    }
  } = us(), i = ht(null);
  if (Ae(() => {
    if (!i.current)
      return;
    i.current.width = t.width, i.current.height = t.height, BI(i.current);
    const f = Cr(t), v = ds(t, n.outOfBoundsThreshold), w = WI(t);
    o.value && (Lx(i.current, o.value.face), Xx(i.current, o.value.face, t), lo(i.current, f, "lime"), lo(i.current, v, "yellow"), lo(i.current, w, "blue"));
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
  } = o.value, p = {
    Confidence: a.confidence,
    "Face center": JSON.stringify(a.faceCenter),
    "Face size": a.faceSize,
    Brightness: a.brightness,
    Sharpness: a.sharpness,
    "Detection time": r,
    FPS: g,
    Instruction: s,
    Resolution: JSON.stringify(C),
    "Component version": Fx.VITE_PACKAGE_VERSION
  };
  return u && (p["SAM version"] = u), x.length > 0 && (p["Invalid validators"] = x.join(", ")), se(wI, {
    ref: i,
    cameraResolution: t,
    detectionDetails: p,
    isImageMirror: e
  });
}, Mx = async () => WebAssembly.validate(new Uint8Array([2304 + -1 * -8798 + -2 * 5551, 2149 * -3 + 8621 + -2077, 1431 * -5 + 455 + 6815, 109, 4 * -2281 + 7961 + 1164, 6725 + -269 * 25, -23 * 359 + -1 * 1414 + -9671 * -1, 4775 + -1 * -6337 + -11112, 2918 * 2 + 9 * -42 + -5457, 599 * -6 + 1202 + -47 * -51, -7430 + -3 * -2477, -1 * -1405 + -7327 + 6018, 7487 + -7487 * 1, 4853 + -691 * 6 + -706, 1 * -3173 + 118 * 4 + -706 * -4, -3 * -2395 + 8638 + 113 * -140, 1330 + -11 * -587 + -7785, -13426 + -13427 * -1, -2 * 4547 + -635 * -5 + 1 * 5919, -5 * 1297 + 1 * -9691 + -1 * -16186, -5218 * 1 + -2698 * 1 + -2642 * -3, -1271 * 3 + -1099 + 17 * 289, -2196 + 1399 * 1 + 805, -1191 * -5 + 1169 * -3 + -4 * 612, -1 * 3177 + 9077 + -5835, 1 * -4847 + 6895 + 512 * -4, 72 * -109 + 25 * 107 + 1 * 5426, 1 * -8267 + 2525 * 2 + 3232, -2790 + 179 * 17, -553 * 16 + -5653 + 13 * 1123, -21 * -247 + 2770 + -7946]));
async function Ux() {
  const t = {};
  t.name = Qg, t.length = 256;
  const o = await window.crypto.subtle.generateKey(t, !0, ["encrypt", "decrypt"]), e = Uint8Array.from(Array(1 * 2437 + 7029 * 1 + -7 * 1350).fill(-7117 * 1 + -874 + 1 * 7991)), n = window.crypto.getRandomValues(e), i = {};
  return i.key = o, i.iv = n, i;
}
async function Jx(t) {
  const { iv: o, key: e } = await Ux(), n = {};
  n.name = Qg, n.iv = o;
  const i = await window.crypto.subtle.encrypt(n, e, t), r = await window.crypto.subtle.exportKey("raw", e), a = {};
  return a.message = i, a.key = r, a.iv = o, a;
}
function Qx(t) {
  const o = new ArrayBuffer(t.length), e = new Uint8Array(o);
  for (let n = -4 * -122 + 628 + 1 * -1116, i = t.length; n < i; n++)
    e[n] = t.charCodeAt(n);
  return o;
}
function zx() {
  const t = "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", o = window.atob(t), e = window.atob(o), n = Qx(e), i = {};
  return i.name = zg, i.hash = _I, window.crypto.subtle.importKey("spki", n, i, !0, ["encrypt"]);
}
async function $x(t) {
  const o = await zx(), e = {};
  return e.name = zg, window.crypto.subtle.encrypt(e, o, t);
}
async function qx(t) {
  const { iv: o, key: e, message: n } = await Jx(t), i = await $x(e), r = {};
  return r.key = i, r.iv = o, r.message = n, r;
}
async function _x(t) {
  const o = await window.crypto.subtle.digest("SHA-1", t);
  return Array.from(new Uint8Array(o)).map((e) => e.toString(77 * -41 + 6 * -415 + 5663).padStart(1 * 2753 + -319 + -2432, "0")).join("");
}
class el {
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
    Q(this, "imagesForDuplicateDetection", new Ir($I));
  }
  async initDetector(o) {
    await this.detector.initSamModule(location.href, o);
    const e = await this.detector.getSamVersion();
    this.setSamVersion(e), this.isDetectorInitialized = !0;
  }
  async getInstructionSet() {
    return await Mx() ? Oa.SIMD : Oa.NO_SIMD;
  }
  async init({ thresholds: o, wasmDirectoryPath: e }) {
    this.setThresholds(o), await this.initDetector(e);
  }
  setSamVersion(o) {
    if (!o || !this.areVersionsCompatible(o))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new _("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = o;
  }
  areVersionsCompatible(o) {
    return o === ix;
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
      throw new _("Thresholds for " + this.className + " are not provided");
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
    const e = o.length / tx, n = e / (-9 * 249 + -3155 * 3 + 11708), i = o.length / (8189 * 1 + -9691 + 1504), r = await _x(o.slice(i - n, i + n));
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
    var g = "./this.program", s = !(4200 + 8233 * 1 + -1036 * 12), x = !(-1 * 3069 + 6342 + -2 * 1636);
    s = typeof window == "object", x = typeof importScripts == "function";
    var C = "", u;
    (s || x) && (x ? C = self.location.href : document.currentScript && (C = document.currentScript.src), t && (C = t), 6904 + -4 * -633 + 2359 * -4 !== C.indexOf("blob:") ? C = C.substr(-9 * -843 + -2608 + -4979, C.lastIndexOf("/") + (203 + -7 * 982 + 6672)) : C = "", x && (u = function(c) {
      var I = new XMLHttpRequest();
      return I.open("GET", c, !(1 * 2229 + -1 * -2263 + -4491)), I.responseType = "arraybuffer", I.send(null), new Uint8Array(I.response);
    }));
    var p = e.printErr || console.warn.bind(console);
    for (a in r)
      r.hasOwnProperty(a) && (e[a] = r[a]);
    r = null, e.thisProgram && (g = e.thisProgram);
    var f;
    e.wasmBinary && (f = e.wasmBinary), e.noExitRuntime && e.noExitRuntime, typeof WebAssembly != "object" && et("no native wasm support detected");
    var v, w = !(-42 * 67 + -8149 + 10964);
    function E(c) {
      c || et("Assertion failed: undefined");
    }
    var k = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void (-307 * 11 + 8 * 461 + -311);
    function G(c, I, l) {
      var A = ue;
      if (0 < l) {
        l = I + l - (8315 * -1 + 121 * 49 + 2387);
        for (var m = 811 * 2 + 8144 + 9766 * -1; m < c.length; ++m) {
          var b = c.charCodeAt(m);
          if (16 * -516 + 51442 + -865 * -14 <= b && 57343 >= b) {
            var S = c.charCodeAt(++m);
            b = 68213 + -1 * 19922 + -5 * -3449 + ((b & 1023) << -3767 + -8065 * 1 + -382 * -31) | S & 1023;
          }
          if (-1 * -1097 + -3 * -501 + -2473 >= b) {
            if (I >= l)
              break;
            A[I++] = b;
          } else {
            if (5666 * 1 + 201 * 47 + 139 * -94 >= b) {
              if (I + (-1330 + 1 * 3811 + -62 * 40) >= l)
                break;
              A[I++] = 8275 + -7 * -1195 + -16448 | b >> -1130 + 1 * -6152 + 911 * 8;
            } else {
              if (-401 * 61 + 38709 + 51287 >= b) {
                if (I + 2 >= l)
                  break;
                A[I++] = 1 * -6129 + 977 * -2 + 8307 | b >> 1841 * 5 + 247 * 17 + 3 * -4464;
              } else {
                if (I + (4098 + -455 * 9) >= l)
                  break;
                A[I++] = -5004 + -4133 * -1 + 1111 * 1 | b >> -1 * 2307 + 9413 + -7088, A[I++] = 4 * -1336 + -4686 + 10158 | b >> -1494 + -1 * -8753 + 7247 * -1 & 63;
              }
              A[I++] = 7311 + -5401 * -1 + -12584 | b >> 6 & 1031 * -2 + -920 + 3045;
            }
            A[I++] = 128 | b & -3 * -2394 + 9227 + -16346;
          }
        }
        A[I] = -21 * 263 + 6851 + -1328;
      }
    }
    var H = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void (17845 + -215 * 83);
    function L(c, I) {
      for (var l = c >> 1, A = l + I / (-8781 + -3 * -233 + 172 * 47); !(l >= A) && Ee[l]; )
        ++l;
      if (l <<= -4045 + -23 * 406 + 28 * 478, 3809 + -5 * 1871 + 5578 < l - c && H)
        return H.decode(ue.subarray(c, l));
      for (l = -4991 * -1 + -4885 + -106, A = ""; ; ) {
        var m = pe[c + 2 * l >> 1];
        if (7905 + 1907 * -3 + -2184 == m || l == I / (-61 * 69 + 6688 + 2477 * -1))
          return A;
        ++l, A += String.fromCharCode(m);
      }
    }
    function D(c, I, l) {
      if (void (-1 * -4175 + -87 * 27 + -11 * 166) === l && (l = 2744382557 + -1 * -2366538577 + -1 * 2963437487), -5946 + 6 * 1004 + 2 * -38 > l)
        return -242 * -19 + -6210 + 1612;
      l -= 2;
      var A = I;
      l = l < 2 * c.length ? l / (381 * -25 + -4140 + -13667 * -1) : c.length;
      for (var m = -11841 + -3947 * -3; m < l; ++m)
        pe[I >> 722 * 13 + -4237 + -396 * 13] = c.charCodeAt(m), I += 2;
      return pe[I >> 3622 + 3 * -1207] = -14 * -247 + -8756 + 5298, I - A;
    }
    function M(c) {
      return 2 * c.length;
    }
    function K(c, I) {
      for (var l = -10 * -197 + 9498 + -11468, A = ""; !(l >= I / (26 * -187 + 5504 + -2 * 319)); ) {
        var m = re[c + 4 * l >> 2];
        if (141 * 56 + 2174 + -10070 == m)
          break;
        ++l, 15470 + -1 * -50066 <= m ? (m -= 9329 * -4 + 89665 * 1 + 13187, A += String.fromCharCode(95181 + -1 * -85049 + -124934 | m >> 5023 + 1 * -5013, -100847 * 1 + 10 * -8474 + 241907 * 1 | m & 1023)) : A += String.fromCharCode(m);
      }
      return A;
    }
    function ee(c, I, l) {
      if (void (-73 * 4 + -521 * -9 + -4397) === l && (l = -15338793 * 181 + -1653599367 + -15925919 * -413), 4 > l)
        return 2748 + -6 * 458;
      var A = I;
      l = A + l - (-1470 + -1474 * -1);
      for (var m = -1 * 3037 + -5788 * -1 + -3 * 917; m < c.length; ++m) {
        var b = c.charCodeAt(m);
        if (-225 * -62 + -4 * 19056 + 2 * 58785 <= b && 2 * -33526 + -566 * -31 + -106849 * -1 >= b) {
          var S = c.charCodeAt(++m);
          b = -63564 + -3 * -1335 + -1 * -125095 + ((b & -9883 + 5 * 1705 + 2381 * 1) << -1 * 2161 + -5524 + 3 * 2565) | S & -1 * -619 + 29 * -259 + -1583 * -5;
        }
        if (re[I >> 6 * -1181 + -3999 + 11087] = b, I += 11088 + -17 * 652, I + 4 > l)
          break;
      }
      return re[I >> 10948 + -2 * 5473] = -3922 + 9742 * -1 + -488 * -28, I - A;
    }
    function z(c) {
      for (var I = 8875 + 689 * 1 + 12 * -797, l = -8247 + 2749 * 3; l < c.length; ++l) {
        var A = c.charCodeAt(l);
        55296 <= A && 1 * -9355 + 98378 + -31680 >= A && ++l, I += 4;
      }
      return I;
    }
    var te, xe, ue, pe, Ee, re, ae, qe, ct;
    function we(c) {
      te = c, e.HEAP8 = xe = new Int8Array(c), e.HEAP16 = pe = new Int16Array(c), e.HEAP32 = re = new Int32Array(c), e.HEAPU8 = ue = new Uint8Array(c), e.HEAPU16 = Ee = new Uint16Array(c), e.HEAPU32 = ae = new Uint32Array(c), e.HEAPF32 = qe = new Float32Array(c), e.HEAPF64 = ct = new Float64Array(c);
    }
    var Xe = e.INITIAL_MEMORY || 4807130 * -2 + 14248008 + -3035867 * -4, _e = {};
    _e.initial = Xe / (-41 * 2749 + -970 + 73 * 2455), _e.maximum = 32768, e.wasmMemory ? v = e.wasmMemory : v = new WebAssembly.Memory(_e), v && (te = v.buffer), Xe = te.byteLength, we(te);
    var fe = [], Nt = [], dn = [], mt = [];
    function bt() {
      var c = e.preRun.shift();
      fe.unshift(c);
    }
    var Se = -6908 + 282 * -1 + 7190, Ge = null;
    e.preloadedImages = {}, e.preloadedAudios = {};
    function et(c) {
      throw e.onAbort && e.onAbort(c), p(c), w = !(-5407 + 1082 * -7 + 3 * 4327), c = new WebAssembly.RuntimeError("abort(" + c + "). Build with -s ASSERTIONS=1 for more info."), i(c), c;
    }
    function Pe(c) {
      var I = Ze;
      return String.prototype.startsWith ? I.startsWith(c) : 2 * 1899 + -2 * 4233 + 4668 === I.indexOf(c);
    }
    function Yt() {
      return Pe("data:application/octet-stream;base64,");
    }
    var Ze = "sam.wasm";
    if (!Yt()) {
      var Ne = Ze;
      Ze = e.locateFile ? e.locateFile(Ne, C) : C + Ne;
    }
    function mr() {
      try {
        if (f)
          return new Uint8Array(f);
        if (u)
          return u(Ze);
        throw "both async and sync fetching of the wasm failed";
      } catch (c) {
        et(c);
      }
    }
    function Fs() {
      var c = {};
      return c.credentials = "same-origin", f || !s && !x || typeof fetch != "function" || Pe("file://") ? Promise.resolve().then(mr) : fetch(Ze, c).then(function(I) {
        if (!I.ok)
          throw "failed to load wasm binary file at '" + Ze + "'";
        return I.arrayBuffer();
      }).catch(function() {
        return mr();
      });
    }
    function Yn(c) {
      for (; -3868 * 2 + -9325 + -121 * -141 < c.length; ) {
        var I = c.shift();
        if (typeof I == "function")
          I(e);
        else {
          var l = I.Ba;
          typeof l == "number" ? I.ta === void 0 ? Xi("v", l)() : Xi("vi", l)(I.ta) : l(void (715 + 13 * 727 + -10166) === I.ta ? null : I.ta);
        }
      }
    }
    function Xi(c, I) {
      var l = [];
      return function() {
        l.length = arguments.length;
        for (var A = 6321 + -577 * 1 + -5744; A < arguments.length; A++)
          l[A] = arguments[A];
        return l && l.length ? e["dynCall_" + c].apply(null, [I].concat(l)) : e["dynCall_" + c].call(null, I);
      };
    }
    function Ls(c) {
      this.da = c - (23 * -21 + -7215 + 7714), this.Oa = function(I) {
        re[this.da + (-7463 + 4385 * -1 + -16 * -741) >> -304 + -1 * -306] = I;
      }, this.La = function(I) {
        re[this.da + 0 >> 2] = I;
      }, this.Ma = function() {
        re[this.da + (1613 + -1 * -4337 + -5946) >> 2 * -1091 + -17 * 43 + -583 * -5] = 19378 + 1 * -19378;
      }, this.Ka = function() {
        xe[this.da + 12 >> -5426 + -5426 * -1] = 577 * 4 + 34 * -111 + 1466;
      }, this.Na = function() {
        xe[this.da + (1 * 3215 + 307 * 31 + -1817 * 7) >> 3828 + -321 * 17 + -1 * -1629] = 0;
      }, this.Fa = function(I, l) {
        this.Oa(I), this.La(l), this.Ma(), this.Ka(), this.Na();
      };
    }
    function Tn() {
      return 888 * -2 + -7643 + 1 * 9419 < Tn.xa;
    }
    function ji(c) {
      switch (c) {
        case -3535 + 1278 * 7 + 2 * -2705:
          return 0;
        case 5 * 809 + -1 * -4829 + -8872:
          return 1;
        case 12346 + 22 * -561:
          return 550 * 1 + 1 * -1484 + 18 * 52;
        case -5368 + 9 * -971 + 14115:
          return 978 * 4 + -1 * 1097 + -2812;
        default:
          throw new TypeError("Unknown type size: " + c);
      }
    }
    var br = void (-1 * -2097 + -3272 + 1175);
    function ye(c) {
      for (var I = ""; ue[c]; )
        I += br[ue[c++]];
      return I;
    }
    var Tt = {}, yt = {}, Dn = {};
    function Mi(c) {
      if (void (416 * -9 + -4665 * 2 + 13074) === c)
        return "_unknown";
      c = c.replace(/[^a-zA-Z0-9_]/g, "$");
      var I = c.charCodeAt(0);
      return 209 * -47 + 6768 + 29 * 107 <= I && -4019 + -2 * -2038 >= I ? "_" + c : c;
    }
    function Ui(c, I) {
      return c = Mi(c), new Function("body", "return function " + c + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(I);
    }
    function Ji(c) {
      var I = Error, l = Ui(c, function(A) {
        this.name = c, this.message = A, A = Error(A).stack, void (373 * 3 + 1 * -9009 + 3 * 2630) !== A && (this.stack = this.toString() + `
` + A.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return l.prototype = Object.create(I.prototype), l.prototype.constructor = l, l.prototype.toString = function() {
        return void (1353 + -1 * 3305 + 1952) === this.message ? this.name : this.name + ": " + this.message;
      }, l;
    }
    var Dt = void (523 + 4 * -1497 + -1093 * -5);
    function F(c) {
      throw new Dt(c);
    }
    var yr = void (9266 * 1 + -9625 + -359 * -1);
    function Fn(c) {
      throw new yr(c);
    }
    function Ft(c, I, l) {
      function A(y) {
        y = l(y), y.length !== c.length && Fn("Mismatched type converter count");
        for (var W = 11 * 159 + 2217 * -2 + 2685; W < c.length; ++W)
          tt(c[W], y[W]);
      }
      c.forEach(function(y) {
        Dn[y] = I;
      });
      var m = Array(I.length), b = [], S = 5815 * -1 + -3668 + 9483;
      I.forEach(function(y, W) {
        yt.hasOwnProperty(y) ? m[W] = yt[y] : (b.push(y), Tt.hasOwnProperty(y) || (Tt[y] = []), Tt[y].push(function() {
          m[W] = yt[y], ++S, S === b.length && A(m);
        }));
      }), 4737 + 1579 * -3 === b.length && A(m);
    }
    function tt(c, I, l) {
      if (l = l || {}, !("argPackAdvance" in I))
        throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var A = I.name;
      if (c || F('type "' + A + '" must have a positive integer typeid pointer'), yt.hasOwnProperty(c)) {
        if (l.Ea)
          return;
        F("Cannot register type '" + A + "' twice");
      }
      yt[c] = I, delete Dn[c], Tt.hasOwnProperty(c) && (I = Tt[c], delete Tt[c], I.forEach(function(m) {
        m();
      }));
    }
    function Xs(c) {
      var I = {};
      return I.count = c.count, I.oa = c.oa, I.pa = c.pa, I.da = c.da, I.fa = c.fa, I.ga = c.ga, I.ha = c.ha, I;
    }
    function Qi(c) {
      F(c.A.fa.ea.name + " instance already deleted");
    }
    var zi = !(-151 * -27 + -7328 + -271 * -12);
    function vr() {
    }
    function wr(c) {
      --c.count.value, 4107 * 2 + -6721 + -1493 === c.count.value && (c.ga ? c.ha.na(c.ga) : c.fa.ea.na(c.da));
    }
    function An(c) {
      return typeof FinalizationGroup > "u" ? (An = function(I) {
        return I;
      }, c) : (zi = new FinalizationGroup(function(I) {
        for (var l = I.next(); !l.done; l = I.next())
          l = l.value, l.da ? wr(l) : console.warn("object already deleted: " + l.da);
      }), An = function(I) {
        return zi.register(I, I.A, I.A), I;
      }, vr = function(I) {
        zi.unregister(I.A);
      }, An(c));
    }
    var pn = void (3127 * 1 + 4274 + 3 * -2467), fn = [];
    function $i() {
      for (; fn.length; ) {
        var c = fn.pop();
        c.A.oa = !(-3153 + 3107 * -2 + -1 * -9368), c.delete();
      }
    }
    function It() {
    }
    var Br = {};
    function js(c, I) {
      var l = e;
      if (l[c].ja === void 0) {
        var A = l[c];
        l[c] = function() {
          return l[c].ja.hasOwnProperty(arguments.length) || F("Function '" + I + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + l[c].ja + ")!"), l[c].ja[arguments.length].apply(this, arguments);
        }, l[c].ja = [], l[c].ja[A.ya] = A;
      }
    }
    function Sr(c, I, l) {
      e.hasOwnProperty(c) ? ((void (334 + -541 * -12 + 2 * -3413) === l || void (4984 * 2 + -5825 * 1 + -3 * 1381) !== e[c].ja && e[c].ja[l] !== void 0) && F("Cannot register public name '" + c + "' twice"), js(c, c), e.hasOwnProperty(l) && F("Cannot register multiple overloads of a function with the same number of arguments (" + l + ")!"), e[c].ja[l] = I) : (e[c] = I, void (-544 + 19 * 219 + 3617 * -1) !== l && (e[c].Ra = l));
    }
    function Ms(c, I, l, A, m, b, S, y) {
      this.name = c, this.constructor = I, this.ma = l, this.na = A, this.ia = m, this.Ca = b, this.qa = S, this.Aa = y;
    }
    function Ln(c, I, l) {
      for (; I !== l; )
        I.qa || F("Expected null or instance of " + l.name + ", got an instance of " + I.name), c = I.qa(c), I = I.ia;
      return c;
    }
    function Us(c, I) {
      return I === null ? (this.ua && F("null is not a valid " + this.name), -3 * -2711 + -4721 + 3412 * -1) : (I.A || F('Cannot pass "' + Xt(I) + '" as a ' + this.name), I.A.da || F("Cannot pass deleted object as a pointer of type " + this.name), Ln(I.A.da, I.A.fa.ea, this.ea));
    }
    function Js(c, I) {
      if (I === null) {
        if (this.ua && F("null is not a valid " + this.name), this.sa) {
          var l = this.Ha();
          return c !== null && c.push(this.na, l), l;
        }
        return 2380 + 10 * 879 + -5585 * 2;
      }
      if (I.A || F('Cannot pass "' + Xt(I) + '" as a ' + this.name), I.A.da || F("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && I.A.fa.ra && F("Cannot convert argument of type " + (I.A.ha ? I.A.ha.name : I.A.fa.name) + " to parameter type " + this.name), l = Ln(I.A.da, I.A.fa.ea, this.ea), this.sa)
        switch (void (7875 + 1 * -7875) === I.A.ga && F("Passing raw pointer to smart pointer is illegal"), this.Pa) {
          case 1 * -7037 + 2616 + -4421 * -1:
            I.A.ha === this ? l = I.A.ga : F("Cannot convert argument of type " + (I.A.ha ? I.A.ha.name : I.A.fa.name) + " to parameter type " + this.name);
            break;
          case 1:
            l = I.A.ga;
            break;
          case 4813 + -118 * 43 + 1 * 263:
            if (I.A.ha === this)
              l = I.A.ga;
            else {
              var A = I.clone();
              l = this.Ia(l, Lt(function() {
                A.delete();
              })), c !== null && c.push(this.na, l);
            }
            break;
          default:
            F("Unsupporting sharing policy");
        }
      return l;
    }
    function Qs(c, I) {
      return I === null ? (this.ua && F("null is not a valid " + this.name), 1534 + 1 * -1534) : (I.A || F('Cannot pass "' + Xt(I) + '" as a ' + this.name), I.A.da || F("Cannot pass deleted object as a pointer of type " + this.name), I.A.fa.ra && F("Cannot convert argument of type " + I.A.fa.name + " to parameter type " + this.name), Ln(I.A.da, I.A.fa.ea, this.ea));
    }
    function Xn(c) {
      return this.fromWireType(ae[c >> 8184 + -1 * 3727 + -4455]);
    }
    function Gr(c, I, l) {
      return I === l ? c : void (3925 + -25 * 157) === l.ia ? null : (c = Gr(c, I, l.ia), c === null ? null : l.Aa(c));
    }
    var hn = {};
    function zs(c, I) {
      for (void (-271 * 35 + -26 * 157 + -1 * -13567) === I && F("ptr should not be undefined"); c.ia; )
        I = c.qa(I), c = c.ia;
      return hn[I];
    }
    function jn(c, I) {
      I.fa && I.da || Fn("makeClassHandle requires ptr and ptrType"), !!I.ha != !!I.ga && Fn("Both smartPtrType and smartPtr must be specified");
      var l = {};
      l.value = 1, I.count = l;
      var A = {};
      A.value = I;
      var m = {};
      return m.A = A, An(Object.create(c, m));
    }
    function nt(c, I, l, A) {
      this.name = c, this.ea = I, this.ua = l, this.ra = A, this.sa = !(2703 + 1 * -4412 + -6 * -285), this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void (4470 + 1490 * -3), I.ia !== void 0 ? this.toWireType = Js : (this.toWireType = A ? Us : Qs, this.ka = null);
    }
    function Zr(c, I, l) {
      e.hasOwnProperty(c) || Fn("Replacing nonexistant public symbol"), e[c].ja !== void 0 && void (7753 + 3601 * -1 + -1 * 4152) !== l ? e[c].ja[l] = I : (e[c] = I, e[c].ya = l);
    }
    function xt(c, I) {
      c = ye(c);
      var l = Xi(c, I);
      return typeof l != "function" && F("unknown function pointer with signature " + c + ": " + I), l;
    }
    var kr = void (3769 + -93 * -1 + 1 * -3862);
    function Kr(c) {
      c = Xr(c);
      var I = ye(c);
      return it(c), I;
    }
    function mn(c, I) {
      function l(b) {
        m[b] || yt[b] || (Dn[b] ? Dn[b].forEach(l) : (A.push(b), m[b] = !(-10576 + -2644 * -4)));
      }
      var A = [], m = {};
      throw I.forEach(l), new kr(c + ": " + A.map(Kr).join([", "]));
    }
    function Hr(c, I) {
      for (var l = [], A = -4017 * -1 + -1 * -1545 + 309 * -18; A < c; A++)
        l.push(re[(I >> 1945 + -1 * 1943) + A]);
      return l;
    }
    function Mn(c) {
      for (; c.length; ) {
        var I = c.pop();
        c.pop()(I);
      }
    }
    function Wr(c, I, l) {
      return c instanceof Object || F(l + ' with invalid "this": ' + c), c instanceof I.ea.constructor || F(l + ' incompatible with "this" of type ' + c.constructor.name), c.A.da || F("cannot call emscripten binding method " + l + " on deleted object"), Ln(c.A.da, c.A.fa.ea, I.ea);
    }
    var Or = {};
    Or.value = void (38 * -96 + 3009 + 3 * 213);
    var Vr = {};
    Vr.value = null;
    var Rr = {};
    Rr.value = !(2764 + 1 * -2764);
    var Er = {};
    Er.value = !1;
    var qi = [], ke = [{}, Or, Vr, Rr, Er];
    function _i(c) {
      12301 + 1 * -12297 < c && -123 * -78 + -715 + -8879 === --ke[c].Ja && (ke[c] = void 0, qi.push(c));
    }
    function Lt(c) {
      switch (c) {
        case void (6152 + -6152 * 1):
          return -6176 + 11 * 725 + -31 * 58;
        case null:
          return -15787 + -3 * -5263;
        case !0:
          return -1207 + 1 * 3871 + -2661;
        case !(2 * -423 + 69 * 15 + -188):
          return -1 * -8443 + 530 * 6 + 1 * -11619;
        default:
          var I = qi.length ? qi.pop() : ke.length, l = {};
          return l.Ja = 1, l.value = c, ke[I] = l, I;
      }
    }
    function Xt(c) {
      if (c === null)
        return "null";
      var I = typeof c;
      return I === "object" || I === "array" || I === "function" ? c.toString() : "" + c;
    }
    function $s(c, I) {
      switch (I) {
        case -23 * -183 + 1359 + -5566:
          return function(l) {
            return this.fromWireType(qe[l >> 2]);
          };
        case 8257 * -1 + -723 * 1 + 8983:
          return function(l) {
            return this.fromWireType(ct[l >> 3]);
          };
        default:
          throw new TypeError("Unknown float type: " + c);
      }
    }
    function qs(c) {
      var I = Function;
      if (!(I instanceof Function))
        throw new TypeError("new_ called with constructor type " + typeof I + " which is not a function");
      var l = Ui(I.name || "unknownFunctionName", function() {
      });
      return l.prototype = I.prototype, l = new l(), c = I.apply(l, c), c instanceof Object ? c : l;
    }
    function _s(c, I, l) {
      switch (I) {
        case 3253 + -1602 * 2 + -1 * 49:
          return l ? function(A) {
            return xe[A];
          } : function(A) {
            return ue[A];
          };
        case 4560 + 3 * -1737 + 4 * 163:
          return l ? function(A) {
            return pe[A >> 1092 * 2 + -5158 + 2975];
          } : function(A) {
            return Ee[A >> 62 * -133 + -2488 + 10735];
          };
        case -1 * -3882 + -3 * 1162 + -394:
          return l ? function(A) {
            return re[A >> -242 + -2 * -122];
          } : function(A) {
            return ae[A >> 4529 * -1 + -4453 + 8984];
          };
        default:
          throw new TypeError("Unknown integer type: " + c);
      }
    }
    function eo(c) {
      return c || F("Cannot use deleted val. handle = " + c), ke[c].value;
    }
    function Pr(c, I) {
      var l = yt[c];
      return void (-1677 + 1577 * 3 + 6 * -509) === l && F(I + " has unknown type " + Kr(c)), l;
    }
    var e0 = {}, Nr = {};
    function Yr() {
      if (!to) {
        var c = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: g || "./this.program" }, I;
        for (I in Nr)
          c[I] = Nr[I];
        var l = [];
        for (I in c)
          l.push(I + "=" + c[I]);
        to = l;
      }
      return to;
    }
    var to, Tr = [];
    function Dr(c) {
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
              E(b === A);
            }
          } : m;
        })(l);
      return I;
    }
    for (var Fr = Array(1621 + 39 * -35), Un = -9838 + -2 * -4919; -383 * 12 + 2 * 1671 + 2 * 755 > Un; ++Un)
      Fr[Un] = String.fromCharCode(Un);
    br = Fr, Dt = e.BindingError = Ji("BindingError"), yr = e.InternalError = Ji("InternalError"), It.prototype.isAliasOf = function(c) {
      if (!(this instanceof It && c instanceof It))
        return !(6773 + 4787 * 1 + -11559);
      var I = this.A.fa.ea, l = this.A.da, A = c.A.fa.ea;
      for (c = c.A.da; I.ia; )
        l = I.qa(l), I = I.ia;
      for (; A.ia; )
        c = A.qa(c), A = A.ia;
      return I === A && l === c;
    }, It.prototype.clone = function() {
      if (this.A.da || Qi(this), this.A.pa)
        return this.A.count.value += -5912 + -114 * -65 + 499 * -3, this;
      var c = An(Object.create(Object.getPrototypeOf(this), { A: { value: Xs(this.A) } }));
      return c.A.count.value += -4033 + 1 * 2733 + 1301 * 1, c.A.oa = !(-4418 + 4419 * 1), c;
    }, It.prototype.delete = function() {
      this.A.da || Qi(this), this.A.oa && !this.A.pa && F("Object already scheduled for deletion"), vr(this), wr(this.A), this.A.pa || (this.A.ga = void 0, this.A.da = void 0);
    }, It.prototype.isDeleted = function() {
      return !this.A.da;
    }, It.prototype.deleteLater = function() {
      return this.A.da || Qi(this), this.A.oa && !this.A.pa && F("Object already scheduled for deletion"), fn.push(this), 3023 * 1 + 5038 + -155 * 52 === fn.length && pn && pn($i), this.A.oa = !(7869 + 2 * 81 + -8031), this;
    }, nt.prototype.Da = function(c) {
      return this.wa && (c = this.wa(c)), c;
    }, nt.prototype.va = function(c) {
      this.na && this.na(c);
    }, nt.prototype.argPackAdvance = -7205 + 3 * -2231 + 13906, nt.prototype.readValueFromPointer = Xn, nt.prototype.deleteObject = function(c) {
      c !== null && c.delete();
    }, nt.prototype.fromWireType = function(c) {
      function I() {
        return this.sa ? jn(this.ea.ma, { fa: this.Ga, da: l, ha: this, ga: c }) : jn(this.ea.ma, { fa: this, da: c });
      }
      var l = this.Da(c);
      if (!l)
        return this.va(c), null;
      var A = zs(this.ea, l);
      if (void (8341 + 15 * -365 + -2866) !== A)
        return 1379 + -12 * 470 + -4261 * -1 === A.A.count.value ? (A.A.da = l, A.A.ga = c, A.clone()) : (A = A.clone(), this.va(c), A);
      if (A = this.ea.Ca(l), A = Br[A], !A)
        return I.call(this);
      A = this.ra ? A.za : A.pointerType;
      var m = Gr(l, this.ea, A.ea);
      return m === null ? I.call(this) : this.sa ? jn(A.ea.ma, { fa: A, da: m, ha: this, ga: c }) : jn(A.ea.ma, { fa: A, da: m });
    }, e.getInheritedInstanceCount = function() {
      return Object.keys(hn).length;
    }, e.getLiveInheritedInstances = function() {
      var c = [], I;
      for (I in hn)
        hn.hasOwnProperty(I) && c.push(hn[I]);
      return c;
    }, e.flushPendingDeletes = $i, e.setDelayFunction = function(c) {
      pn = c, fn.length && pn && pn($i);
    }, kr = e.UnboundTypeError = Ji("UnboundTypeError"), e.count_emval_handles = function() {
      for (var c = -6923 * 1 + 81 * -77 + -28 * -470, I = -1103 + -339 * 24 + -4622 * -2; I < ke.length; ++I)
        void (994 * -1 + -2 * -4727 + -5 * 1692) !== ke[I] && ++c;
      return c;
    }, e.get_first_emval = function() {
      for (var c = 7733 + 48 * 153 + -15072; c < ke.length; ++c)
        if (void (-3836 + -3352 * 1 + -7188 * -1) !== ke[c])
          return ke[c];
      return null;
    }, Nt.push({ Ba: function() {
      Lr();
    } });
    var t0 = { z: function(c) {
      return Jn(c + (-5734 * -1 + 5571 + 1 * -11289)) + (-7208 + -151 * 20 + 10244);
    }, u: function(c, I, l) {
      throw new Ls(c).Fa(I, l), "uncaught_exception" in Tn ? Tn.xa++ : Tn.xa = 1, c;
    }, w: function(c, I, l, A, m) {
      var b = ji(l);
      I = ye(I), tt(c, { name: I, fromWireType: function(S) {
        return !!S;
      }, toWireType: function(S, y) {
        return y ? A : m;
      }, argPackAdvance: 8, readValueFromPointer: function(S) {
        if (l === 1)
          var y = xe;
        else if (-6966 + 21 * 3 + 6905 * 1 === l)
          y = pe;
        else if (13 * 73 + -6666 + 5721 === l)
          y = re;
        else
          throw new TypeError("Unknown boolean type size: " + I);
        return this.fromWireType(y[S >> b]);
      }, ka: null });
    }, i: function(c, I, l, A, m, b, S, y, W, O, V, R, U) {
      V = ye(V), b = xt(m, b), y && (y = xt(S, y)), O && (O = xt(W, O)), U = xt(R, U);
      var ce = Mi(V);
      Sr(ce, function() {
        mn("Cannot construct " + V + " due to unbound types", [A]);
      }), Ft([c, I, l], A ? [A] : [], function(P) {
        if (P = P[1 * 4997 + 589 + 42 * -133], A)
          var je = P.ea, he = je.ma;
        else
          he = It.prototype;
        P = Ui(ce, function() {
          if (Object.getPrototypeOf(this) !== jt)
            throw new Dt("Use 'new' to construct " + V);
          if (Mt.la === void 0)
            throw new Dt(V + " has no accessible constructor");
          var Mr = Mt.la[arguments.length];
          if (void (-2457 * -1 + 6038 + -1699 * 5) === Mr)
            throw new Dt("Tried to invoke ctor of " + V + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(Mt.la).toString() + ") parameters instead!");
          return Mr.apply(this, arguments);
        });
        var Be = {};
        Be.value = P;
        var vt = {};
        vt.constructor = Be;
        var jt = Object.create(he, vt);
        P.prototype = jt;
        var Mt = new Ms(V, P, jt, U, je, b, y, O);
        je = new nt(V, Mt, !(2334 * -3 + -1863 + 45 * 197), !(8009 + -2 * 586 + 2 * -3418)), he = new nt(V + "*", Mt, !(-1938 + -3142 * 2 + 2741 * 3), !(8951 + 247 * -10 + -6480));
        var jr = new nt(V + " const*", Mt, !(-7 * -679 + -7 * 190 + -29 * 118), !(7 * -1371 + 9324 + -21 * -13)), io = {};
        return io.pointerType = he, io.za = jr, Br[c] = io, Zr(ce, P), [je, he, jr];
      });
    }, h: function(c, I, l, A, m, b) {
      E(-7800 + 7800 * 1 < I);
      var S = Hr(I, l);
      m = xt(A, m);
      var y = [b], W = [];
      Ft([], [c], function(O) {
        O = O[-9126 * 1 + -494 + -4 * -2405];
        var V = "constructor " + O.name;
        if (void (7272 + -446 * 10 + -2812) === O.ea.la && (O.ea.la = []), void (2826 + -3 * -2788 + 373 * -30) !== O.ea.la[I - (1559 * 5 + -9433 * 1 + 1639)])
          throw new Dt("Cannot register multiple constructors with identical number of parameters (" + (I - 1) + ") for class '" + O.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return O.ea.la[I - (3426 * -2 + -107 * 13 + 8244)] = function() {
          mn("Cannot construct " + O.name + " due to unbound types", S);
        }, Ft([], S, function(R) {
          return O.ea.la[I - (-164 * 43 + -7473 * -1 + -420)] = function() {
            arguments.length !== I - (-2327 + 1 * 1583 + 745 * 1) && F(V + " called with " + arguments.length + " arguments, expected " + (I - (-2485 + 22 * 113))), W.length = 1 * 1393 + 47 + 9 * -160, y.length = I;
            for (var U = 1 * 8270 + 3408 + 11677 * -1; U < I; ++U)
              y[U] = R[U].toWireType(W, arguments[U - (-50 * -101 + 5218 + -10267)]);
            return U = m.apply(null, y), Mn(W), R[9164 + -2 * 131 + -8902].fromWireType(U);
          }, [];
        }), [];
      });
    }, b: function(c, I, l, A, m, b, S, y, W, O) {
      I = ye(I), m = xt(A, m), Ft([], [c], function(V) {
        V = V[0];
        var R = V.name + "." + I, U = { get: function() {
          mn("Cannot access " + R + " due to unbound types", [l, S]);
        }, enumerable: !(2191 * 2 + 5045 + -9427), configurable: !(3752 + -1 * 7747 + -47 * -85) };
        return W ? U.set = function() {
          mn("Cannot access " + R + " due to unbound types", [l, S]);
        } : U.set = function() {
          F(R + " is a read-only property");
        }, Object.defineProperty(V.ea.ma, I, U), Ft([], W ? [l, S] : [l], function(ce) {
          var P = ce[0], je = { get: function() {
            var Be = Wr(this, V, R + " getter");
            return P.fromWireType(m(b, Be));
          }, enumerable: !(2800 + 3917 * -1 + 1 * 1117) };
          if (W) {
            W = xt(y, W);
            var he = ce[1];
            je.set = function(Be) {
              var vt = Wr(this, V, R + " setter"), jt = [];
              W(O, vt, he.toWireType(jt, Be)), Mn(jt);
            };
          }
          return Object.defineProperty(V.ea.ma, I, je), [];
        }), [];
      });
    }, v: function(c, I) {
      I = ye(I), tt(c, { name: I, fromWireType: function(l) {
        var A = ke[l].value;
        return _i(l), A;
      }, toWireType: function(l, A) {
        return Lt(A);
      }, argPackAdvance: 8, readValueFromPointer: Xn, ka: null });
    }, m: function(c, I, l) {
      l = ji(l), I = ye(I), tt(c, { name: I, fromWireType: function(A) {
        return A;
      }, toWireType: function(A, m) {
        if (typeof m != "number" && typeof m != "boolean")
          throw new TypeError('Cannot convert "' + Xt(m) + '" to ' + this.name);
        return m;
      }, argPackAdvance: 8, readValueFromPointer: $s(I, l), ka: null });
    }, c: function(c, I, l, A, m, b) {
      var S = Hr(I, l);
      c = ye(c), m = xt(A, m), Sr(c, function() {
        mn("Cannot call " + c + " due to unbound types", S);
      }, I - (-4163 + 4 * 1041)), Ft([], S, function(y) {
        var W = c, O = c;
        y = [y[-1135 * -1 + -7243 + 6108], null].concat(y.slice(1));
        var V = m, R = y.length;
        -2 * -2933 + 9986 + -15850 > R && F("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var U = y[-7546 + -1 * 9624 + 1561 * 11] !== null && !(-3 * 129 + 1 * 8252 + 1 * -7864), ce = !(-1 * 7911 + 39 * 197 + 229), P = 1; P < y.length; ++P)
          if (y[P] !== null && void (1915 * -3 + -2534 + 8279) === y[P].ka) {
            ce = !(-9272 + -2 * -2203 + 6 * 811);
            break;
          }
        var je = y[-2 * -16 + -311 * -29 + -9051].name !== "void", he = "", Be = "";
        for (P = 7009 + 163 * -43; P < R - (2188 + 49 * 158 + 136 * -73); ++P)
          he += (7522 * -1 + -9957 + 17479 !== P ? ", " : "") + "arg" + P, Be += (-1 * 2691 + -183 * 47 + -941 * -12 !== P ? ", " : "") + "arg" + P + "Wired";
        O = "return function " + Mi(O) + "(" + he + `) {
if (arguments.length !== ` + (R - (-1 * -5396 + 1 * 365 + 5759 * -1)) + `) {
throwBindingError('function ` + O + " called with ' + arguments.length + ' arguments, expected " + (R - (-8126 + -1367 * -2 + -29 * -186)) + ` args!');
}
`, ce && (O += `var destructors = [];
`);
        var vt = ce ? "destructors" : "null";
        for (he = "throwBindingError invoker fn runDestructors retType classParam".split(" "), V = [F, V, b, Mn, y[17 * -43 + -6950 + 7681], y[-3713 + 659 * -5 + 7009]], U && (O += "var thisWired = classParam.toWireType(" + vt + `, this);
`), P = -1 * -9037 + 3020 + 1 * -12057; P < R - (-9144 + -83 * 41 + -47 * -267); ++P)
          O += "var arg" + P + "Wired = argType" + P + ".toWireType(" + vt + ", arg" + P + "); // " + y[P + (4 * 839 + 80 * 7 + 103 * -38)].name + `
`, he.push("argType" + P), V.push(y[P + (-1 * -8581 + -9035 + 456)]);
        if (U && (Be = "thisWired" + (17351 + -1 * 17351 < Be.length ? ", " : "") + Be), O += (je ? "var rv = " : "") + "invoker(fn" + (-1 * 4157 + 6941 + -2784 < Be.length ? ", " : "") + Be + `);
`, ce)
          O += `runDestructors(destructors);
`;
        else
          for (P = U ? 13 * -257 + -40 + 89 * 38 : 8922 * 1 + -2 * 690 + 5 * -1508; P < y.length; ++P)
            R = 8281 + -51 * 95 + 229 * -15 === P ? "thisWired" : "arg" + (P - (4816 + 4814 * -1)) + "Wired", y[P].ka !== null && (O += R + "_dtor(" + R + "); // " + y[P].name + `
`, he.push(R + "_dtor"), V.push(y[P].ka));
        return je && (O += `var ret = retType.fromWireType(rv);
return ret;
`), he.push(O + `}
`), y = qs(he).apply(null, V), Zr(W, y, I - 1), [];
      });
    }, e: function(c, I, l, A, m) {
      function b(O) {
        return O;
      }
      I = ye(I), -(-1561 * 5 + 613 * -2 + 9032) === m && (m = 2935265519 + -6 * 55077940 + 1690169416);
      var S = ji(l);
      if (-1 * 1509 + 3223 + -1714 === A) {
        var y = 32 - 8 * l;
        b = function(O) {
          return O << y >>> y;
        };
      }
      var W = -(-9658 + 2 * -3484 + 13 * 1279) != I.indexOf("unsigned");
      tt(c, { name: I, fromWireType: b, toWireType: function(O, V) {
        if (typeof V != "number" && typeof V != "boolean")
          throw new TypeError('Cannot convert "' + Xt(V) + '" to ' + this.name);
        if (V < A || V > m)
          throw new TypeError('Passing a number "' + Xt(V) + '" from JS side to C/C++ side to an argument of type "' + I + '", which is outside the valid range [' + A + ", " + m + "]!");
        return W ? V >>> 0 : V | -269 * 5 + -1686 * -1 + -341;
      }, argPackAdvance: 8, readValueFromPointer: _s(I, S, -2 * -2491 + -4290 + 1 * -692 !== A), ka: null });
    }, d: function(c, I, l) {
      function A(y) {
        y >>= 1 * -7591 + -1 * 4531 + 6062 * 2;
        var W = ae;
        return new m(te, W[y + (-6102 + -359 * -17)], W[y]);
      }
      var m = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][I];
      l = ye(l);
      var b = {};
      b.name = l, b.fromWireType = A, b.argPackAdvance = 8, b.readValueFromPointer = A;
      var S = {};
      S.Ea = !0, tt(c, b, S);
    }, n: function(c, I) {
      I = ye(I);
      var l = I === "std::string";
      tt(c, { name: I, fromWireType: function(A) {
        var m = ae[A >> 2];
        if (l)
          for (var b = A + (-26 * -115 + 1 * -3607 + -9 * -69), S = -4418 + 1 * -2830 + 7248; S <= m; ++S) {
            var y = A + 4 + S;
            if (S == m || 7198 + 59 * -122 == ue[y]) {
              if (b) {
                var W = b, O = ue, V = W + (y - b);
                for (b = W; O[b] && !(b >= V); )
                  ++b;
                if (-142 * 9 + -6898 + 8192 < b - W && O.subarray && k)
                  W = k.decode(O.subarray(W, b));
                else {
                  for (V = ""; W < b; ) {
                    var R = O[W++];
                    if (R & -449 * -2 + -3235 + 29 * 85) {
                      var U = O[W++] & 63;
                      if (3 * 1845 + 4014 + -9357 == (R & -4204 * 1 + -7 * -1366 + 2 * -2567))
                        V += String.fromCharCode((R & 8378 + -1 * 8347) << 2867 * -1 + 7203 + -2 * 2165 | U);
                      else {
                        var ce = O[W++] & 63;
                        R = 1055 + 539 * 9 + -5682 == (R & -241 * 39 + -7152 + -1 * -16791) ? (R & -4437 + 1034 * -2 + 326 * 20) << 121 * 80 + -9 * 137 + -8435 | U << -1 * 4034 + -8669 + -179 * -71 | ce : (R & -3 * 929 + -9048 + 11842) << -6957 + 9 * 775 | U << 4622 + 269 * 10 + -7300 | ce << -1497 + 2171 * -1 + 3674 | O[W++] & -199 * 46 + 10 * 890 + -317 * -1, 338 * -382 + 49099 + -2467 * -59 > R ? V += String.fromCharCode(R) : (R -= 65536, V += String.fromCharCode(6172 * 7 + 85264 + -73172 | R >> 197 * -49 + 7185 + 2478, 56320 | R & 1023));
                      }
                    } else
                      V += String.fromCharCode(R);
                  }
                  W = V;
                }
              } else
                W = "";
              if (void (-223 * -4 + -8856 + 7964) === P)
                var P = W;
              else
                P += String.fromCharCode(151 * 3 + 9 * 964 + -17 * 537), P += W;
              b = y + (785 * -12 + -8575 + 17996);
            }
          }
        else {
          for (P = Array(m), S = -1 * 4415 + -2 * -925 + -15 * -171; S < m; ++S)
            P[S] = String.fromCharCode(ue[A + (-10432 + -4 * -2609) + S]);
          P = P.join("");
        }
        return it(A), P;
      }, toWireType: function(A, m) {
        m instanceof ArrayBuffer && (m = new Uint8Array(m));
        var b = typeof m == "string";
        b || m instanceof Uint8Array || m instanceof Uint8ClampedArray || m instanceof Int8Array || F("Cannot pass non-string to std::string");
        var S = (l && b ? function() {
          for (var O = -572 * -4 + 3867 + -1231 * 5, V = -1214 + 5001 * 1 + -3787; V < m.length; ++V) {
            var R = m.charCodeAt(V);
            55296 <= R && -32886 + 43829 * 2 + 2571 >= R && (R = -69579 + 34919 * -1 + 170034 * 1 + ((R & -2805 + 1943 * -3 + 9657) << 10) | m.charCodeAt(++V) & 2 * 4197 + 67 * 53 + 43 * -254), -8136 + -229 * 1 + 193 * 44 >= R ? ++O : O = -2088 + -1 * -4135 >= R ? O + (-2973 * -2 + 19 * 113 + -8091) : 65535 >= R ? O + (-5972 * 1 + -1317 + -1 * -7292) : O + (497 * 19 + -3388 + -6051);
          }
          return O;
        } : function() {
          return m.length;
        })(), y = Jn(-4880 + -189 * -27 + -219 + S + (8522 * 1 + -7 * 969 + -1738));
        if (ae[y >> -8211 + 11 * 796 + 543 * -1] = S, l && b)
          G(m, y + (-3 * -597 + 2336 + -4123), S + (21 * 201 + -761 + -1153 * 3));
        else if (b)
          for (b = -447 + 131 * 1 + -2 * -158; b < S; ++b) {
            var W = m.charCodeAt(b);
            -5977 + 13 * -707 + 159 * 97 < W && (it(y), F("String has UTF-16 code units that do not fit in 8 bits")), ue[y + (1 * -2662 + -4 * -1910 + 1 * -4974) + b] = W;
          }
        else
          for (b = 0; b < S; ++b)
            ue[y + (-271 * 11 + 1405 + 1580) + b] = m[b];
        return A !== null && A.push(it, y), y;
      }, argPackAdvance: 8, readValueFromPointer: Xn, ka: function(A) {
        it(A);
      } });
    }, j: function(c, I, l) {
      if (l = ye(l), 2918 + -1 * 9885 + 6969 === I)
        var A = L, m = D, b = M, S = function() {
          return Ee;
        }, y = 3230 + -149 * -63 + -12616;
      else
        -1390 + -226 * 1 + 1620 === I && (A = K, m = ee, b = z, S = function() {
          return ae;
        }, y = 43 * 176 + -1 * 4217 + 17 * -197);
      tt(c, { name: l, fromWireType: function(W) {
        for (var O = ae[W >> 5 * -1655 + -2485 + 10762], V = S(), R, U = W + (4924 + 4870 * 2 + -14660), ce = 9561 + 2 * -1762 + 1 * -6037; ce <= O; ++ce) {
          var P = W + 4 + ce * I;
          (ce == O || -7579 + -29 * -41 + 6390 == V[P >> y]) && (U = A(U, P - U), void (-7135 * 1 + -82 * 32 + 3 * 3253) === R ? R = U : (R += String.fromCharCode(8454 * 1 + 3 * -2692 + -378), R += U), U = P + I);
        }
        return it(W), R;
      }, toWireType: function(W, O) {
        typeof O != "string" && F("Cannot pass non-string to C++ string type " + l);
        var V = b(O), R = Jn(1 * 2246 + 3565 + -1 * 5807 + V + I);
        return ae[R >> -23 * 263 + 5834 + 217] = V >> y, m(O, R + (-2774 + 137 * -71 + -1 * -12505), V + I), W !== null && W.push(it, R), R;
      }, argPackAdvance: 8, readValueFromPointer: Xn, ka: function(W) {
        it(W);
      } });
    }, x: function(c, I) {
      I = ye(I);
      var l = {};
      l.Qa = !(-612 + -1724 * 3 + 241 * 24), l.name = I, l.argPackAdvance = 0, l.fromWireType = function() {
      }, l.toWireType = function() {
      }, tt(c, l);
    }, k: function(c, I, l) {
      c = eo(c), I = Pr(I, "emval::as");
      var A = [], m = Lt(A);
      return re[l >> 3241 * 1 + -6034 + 43 * 65] = m, I.toWireType(A, c);
    }, g: _i, l: function(c, I) {
      return c = eo(c), I = eo(I), Lt(c[I]);
    }, p: function(c) {
      var I = e0[c];
      return Lt(void (-7994 + 820 * -2 + 9634) === I ? ye(c) : I);
    }, o: function(c) {
      Mn(ke[c].value), _i(c);
    }, y: function(c, I) {
      return c = Pr(c, "_emval_take_value"), c = c.readValueFromPointer(I), Lt(c);
    }, f: function() {
      et();
    }, q: function(c, I, l) {
      ue.copyWithin(c, I, I + l);
    }, r: function(c) {
      c >>>= 19 * -113 + 3 * -379 + 1642 * 2;
      var I = ue.length;
      if (-4142 * 396587 + 4049254652 + -259107650 < c)
        return !(1178 + 4 * -2262 + 7871);
      for (var l = -1 * 709 + -6868 + -1263 * -6; 97 * 11 + 269 * -11 + 8 * 237 >= l; l *= 212 * 47 + -9453 + 509 * -1) {
        var A = I * (1 + 0.2 / l);
        A = Math.min(A, c + 100663296), A = Math.max(16777216, c, A), -3 * -3222 + -1989 + -7677 < A % (30277 * -2 + -359 * 59 + 1 * 147271) && (A += 106103 * -1 + 74 * 289 + 150253 - A % 65536);
        e: {
          try {
            v.grow(Math.min(28 * 121335103 + 1072876264 + -2322775500, A) - te.byteLength + (1 * 32055 + 1 * 106922 + -73442) >>> 1 * 7906 + 3061 + -10951), we(v.buffer);
            var m = 8441 + -5156 * -1 + -44 * 309;
            break e;
          } catch {
          }
          m = void (31 * 291 + -9687 + 666);
        }
        if (m)
          return !(3179 * 1 + -3654 + 1 * 475);
      }
      return !(109 * -83 + 1 * -2531 + 11579);
    }, s: function(c, I) {
      var l = 0;
      return Yr().forEach(function(A, m) {
        var b = I + l;
        for (m = re[c + (-1843 * 1 + 5517 + -5 * 734) * m >> 1558 + 3 * 1931 + -7349] = b, b = -116 * 53 + -1347 + 7495; b < A.length; ++b)
          xe[m++ >> -2959 + -38 * 206 + 161 * 67] = A.charCodeAt(b);
        xe[m >> 5432 + 4601 * -1 + -831] = 4715 + 79 * 101 + 22 * -577, l += A.length + (-2677 + 1 * -422 + 3100);
      }), -3989 + -24 * -128 + -7 * -131;
    }, t: function(c, I) {
      var l = Yr();
      re[c >> -661 * -7 + -1889 * -5 + -15 * 938] = l.length;
      var A = 901 * -1 + 267 * 23 + -131 * 40;
      return l.forEach(function(m) {
        A += m.length + (-7983 + -9 * 1046 + -2 * -8699);
      }), re[I >> 6571 + 1 * 2139 + -8708] = A, 13272 + 21 * -632;
    }, a: v };
    (function() {
      function c(S) {
        S = S.exports, S = Dr(S), e.asm = S, Se--, e.monitorRunDependencies && e.monitorRunDependencies(Se), 102 + -2 * 51 == Se && Ge && (S = Ge, Ge = null, S());
      }
      function I(S) {
        c(S.instance);
      }
      function l(S) {
        return Fs().then(function(y) {
          return WebAssembly.instantiate(y, m);
        }).then(S, function(y) {
          p("failed to asynchronously prepare wasm: " + y), et(y);
        });
      }
      var A = {};
      A.a = t0;
      var m = A;
      if (Se++, e.monitorRunDependencies && e.monitorRunDependencies(Se), e.instantiateWasm)
        try {
          var b = e.instantiateWasm(m, c);
          return b = Dr(b);
        } catch (S) {
          return p("Module.instantiateWasm callback failed with error: " + S), !(3 * -873 + -8531 * -1 + -5911);
        }
      return function() {
        if (f || typeof WebAssembly.instantiateStreaming != "function" || Yt() || Pe("file://") || typeof fetch != "function")
          return l(I);
        var S = {};
        S.credentials = "same-origin", fetch(Ze, S).then(function(y) {
          return WebAssembly.instantiateStreaming(y, m).then(I, function(W) {
            return p("wasm streaming compile failed: " + W), p("falling back to ArrayBuffer instantiation"), l(I);
          });
        });
      }(), {};
    })();
    var Lr = e.___wasm_call_ctors = function() {
      return (Lr = e.___wasm_call_ctors = e.asm.B).apply(null, arguments);
    }, Jn = e._malloc = function() {
      return (Jn = e._malloc = e.asm.C).apply(null, arguments);
    }, it = e._free = function() {
      return (it = e._free = e.asm.D).apply(null, arguments);
    }, Xr = e.___getTypeName = function() {
      return (Xr = e.___getTypeName = e.asm.E).apply(null, arguments);
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
        if (!Qn && (Qn = !(-2 * 4701 + 7553 + 1849), e.calledRun = !(-1 * -2555 + -4627 * -2 + -49 * 241), !w)) {
          if (Yn(Nt), Yn(dn), n(e), e.onRuntimeInitialized && e.onRuntimeInitialized(), e.postRun)
            for (typeof e.postRun == "function" && (e.postRun = [e.postRun]); e.postRun.length; ) {
              var I = e.postRun.shift();
              mt.unshift(I);
            }
          Yn(mt);
        }
      }
      if (!(-9888 + 27 * 175 + -1 * -5163 < Se)) {
        if (e.preRun)
          for (typeof e.preRun == "function" && (e.preRun = [e.preRun]); e.preRun.length; )
            bt();
        Yn(fe), 707 * 3 + -4635 + 1 * 2514 < Se || (e.setStatus ? (e.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            e.setStatus("");
          }, 1), c();
        }, -1 * -3117 + -780 * 6 + 1564)) : c());
      }
    }
    if (e.run = no, e.preInit)
      for (typeof e.preInit == "function" && (e.preInit = [e.preInit]); 1 * -9587 + 3151 + 1 * 6436 < e.preInit.length; )
        e.preInit.pop()();
    return no(), o.ready;
  };
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ps = Symbol("Comlink.proxy"), tl = Symbol("Comlink.endpoint"), nl = Symbol("Comlink.releaseProxy"), Ao = Symbol("Comlink.finalizer"), pi = Symbol("Comlink.thrown"), fs = (t) => typeof t == "object" && t !== null || typeof t == "function", il = {
  canHandle: (t) => fs(t) && t[ps],
  serialize(t) {
    const { port1: o, port2: e } = new MessageChannel();
    return ms(t, o), [e, [e]];
  },
  deserialize(t) {
    return t.start(), ys(t);
  }
}, ol = {
  canHandle: (t) => fs(t) && pi in t,
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
}, hs = /* @__PURE__ */ new Map([
  ["proxy", il],
  ["throw", ol]
]);
function rl(t, o) {
  for (const e of t)
    if (o === e || e === "*" || e instanceof RegExp && e.test(o))
      return !0;
  return !1;
}
function ms(t, o = globalThis, e = ["*"]) {
  o.addEventListener("message", function n(i) {
    if (!i || !i.data)
      return;
    if (!rl(e, i.origin)) {
      console.warn(`Invalid origin '${i.origin}' for comlink proxy`);
      return;
    }
    const { id: r, type: a, path: g } = Object.assign({ path: [] }, i.data), s = (i.data.argumentList || []).map(Zt);
    let x;
    try {
      const C = g.slice(0, -1).reduce((p, f) => p[f], t), u = g.reduce((p, f) => p[f], t);
      switch (a) {
        case "GET":
          x = u;
          break;
        case "SET":
          C[g.slice(-1)[0]] = Zt(i.data.value), x = !0;
          break;
        case "APPLY":
          x = u.apply(C, s);
          break;
        case "CONSTRUCT":
          {
            const p = new u(...s);
            x = xl(p);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: p, port2: f } = new MessageChannel();
            ms(t, f), x = Il(p, [p]);
          }
          break;
        case "RELEASE":
          x = void 0;
          break;
        default:
          return;
      }
    } catch (C) {
      x = { value: C, [pi]: 0 };
    }
    Promise.resolve(x).catch((C) => ({ value: C, [pi]: 0 })).then((C) => {
      const [u, p] = Si(C);
      o.postMessage(Object.assign(Object.assign({}, u), { id: r }), p), a === "RELEASE" && (o.removeEventListener("message", n), bs(o), Ao in t && typeof t[Ao] == "function" && t[Ao]());
    }).catch((C) => {
      const [u, p] = Si({
        value: new TypeError("Unserializable return value"),
        [pi]: 0
      });
      o.postMessage(Object.assign(Object.assign({}, u), { id: r }), p);
    });
  }), o.start && o.start();
}
function al(t) {
  return t.constructor.name === "MessagePort";
}
function bs(t) {
  al(t) && t.close();
}
function ys(t, o) {
  return Xo(t, [], o);
}
function oi(t) {
  if (t)
    throw new Error("Proxy has been released and is not useable");
}
function vs(t) {
  return $t(t, {
    type: "RELEASE"
  }).then(() => {
    bs(t);
  });
}
const wi = /* @__PURE__ */ new WeakMap(), Bi = "FinalizationRegistry" in globalThis && new FinalizationRegistry((t) => {
  const o = (wi.get(t) || 0) - 1;
  wi.set(t, o), o === 0 && vs(t);
});
function gl(t, o) {
  const e = (wi.get(o) || 0) + 1;
  wi.set(o, e), Bi && Bi.register(t, o, t);
}
function sl(t) {
  Bi && Bi.unregister(t);
}
function Xo(t, o = [], e = function() {
}) {
  let n = !1;
  const i = new Proxy(e, {
    get(r, a) {
      if (oi(n), a === nl)
        return () => {
          sl(i), vs(t), n = !0;
        };
      if (a === "then") {
        if (o.length === 0)
          return { then: () => i };
        const g = $t(t, {
          type: "GET",
          path: o.map((s) => s.toString())
        }).then(Zt);
        return g.then.bind(g);
      }
      return Xo(t, [...o, a]);
    },
    set(r, a, g) {
      oi(n);
      const [s, x] = Si(g);
      return $t(t, {
        type: "SET",
        path: [...o, a].map((C) => C.toString()),
        value: s
      }, x).then(Zt);
    },
    apply(r, a, g) {
      oi(n);
      const s = o[o.length - 1];
      if (s === tl)
        return $t(t, {
          type: "ENDPOINT"
        }).then(Zt);
      if (s === "bind")
        return Xo(t, o.slice(0, -1));
      const [x, C] = Ra(g);
      return $t(t, {
        type: "APPLY",
        path: o.map((u) => u.toString()),
        argumentList: x
      }, C).then(Zt);
    },
    construct(r, a) {
      oi(n);
      const [g, s] = Ra(a);
      return $t(t, {
        type: "CONSTRUCT",
        path: o.map((x) => x.toString()),
        argumentList: g
      }, s).then(Zt);
    }
  });
  return gl(i, t), i;
}
function cl(t) {
  return Array.prototype.concat.apply([], t);
}
function Ra(t) {
  const o = t.map(Si);
  return [o.map((e) => e[0]), cl(o.map((e) => e[1]))];
}
const ws = /* @__PURE__ */ new WeakMap();
function Il(t, o) {
  return ws.set(t, o), t;
}
function xl(t) {
  return Object.assign(t, { [ps]: !0 });
}
function Si(t) {
  for (const [o, e] of hs)
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
    ws.get(t) || []
  ];
}
function Zt(t) {
  switch (t.type) {
    case "HANDLER":
      return hs.get(t.name).deserialize(t.value);
    case "RAW":
      return t.value;
  }
}
function $t(t, o, e) {
  return new Promise((n) => {
    const i = ll();
    t.addEventListener("message", function r(a) {
      !a.data || !a.data.id || a.data.id !== i || (t.removeEventListener("message", r), n(a.data));
    }), t.start && t.start(), t.postMessage(Object.assign({ id: i }, o), e);
  });
}
function ll() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
function ul(t, o) {
  const { z: e } = o || {};
  return !e || !t ? !0 : Math.abs(e) < t;
}
function Cl(t, o, e) {
  const n = ds(e, t), i = As(o, e);
  return mx(i, n);
}
const Bs = "dmFyIHNlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5Owp2YXIgdWUgPSAobywgdSwgZSkgPT4gdSBpbiBvID8gc2UobywgdSwgeyBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwLCB2YWx1ZTogZSB9KSA6IG9bdV0gPSBlOwp2YXIgWW4gPSAobywgdSwgZSkgPT4gKHVlKG8sIHR5cGVvZiB1ICE9ICJzeW1ib2wiID8gdSArICIiIDogdSwgZSksIGUpOwpjb25zdCBXdCA9IHsKICBzaW1kOiAic2FtX3NpbWQud2FzbSIsCiAgc2FtOiAic2FtLndhc20iCn0sIGxlID0gYXN5bmMgKCkgPT4gV2ViQXNzZW1ibHkudmFsaWRhdGUobmV3IFVpbnQ4QXJyYXkoWzAsIDk3LCAxMTUsIDEwOSwgMSwgMCwgMCwgMCwgMSwgNSwgMSwgOTYsIDAsIDEsIDEyMywgMywgMiwgMSwgMCwgMTAsIDEwLCAxLCA4LCAwLCA2NSwgMCwgMjUzLCAxNSwgMjUzLCA5OCwgMTFdKSk7CmNsYXNzIHggZXh0ZW5kcyBFcnJvciB7CiAgY29uc3RydWN0b3IoZSwgbSkgewogICAgc3VwZXIoZSk7CiAgICBZbih0aGlzLCAiY2F1c2UiKTsKICAgIHRoaXMubmFtZSA9ICJBdXRvQ2FwdHVyZUVycm9yIiwgdGhpcy5jYXVzZSA9IG07CiAgfQogIC8vIENoYW5nZSB0aGlzIHRvIERlY29yYXRvciB3aGVuIHRoZXkgd2lsbCBiZSBpbiBzdGFibGUgcmVsZWFzZQogIHN0YXRpYyBsb2dFcnJvcihlKSB7CiAgfQogIHN0YXRpYyBmcm9tQ2FtZXJhRXJyb3IoZSkgewogICAgaWYgKHRoaXMubG9nRXJyb3IoZSksIGUgaW5zdGFuY2VvZiB4KQogICAgICByZXR1cm4gZTsKICAgIGxldCBtOwogICAgc3dpdGNoIChlLm5hbWUpIHsKICAgICAgY2FzZSAiT3ZlcmNvbnN0cmFpbmVkRXJyb3IiOgogICAgICAgIG0gPSAiTWluaW11bSBxdWFsaXR5IHJlcXVpcmVtZW50cyBhcmUgbm90IG1ldCBieSB5b3VyIGNhbWVyYSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdFJlYWRhYmxlRXJyb3IiOgogICAgICBjYXNlICJBYm9ydEVycm9yIjoKICAgICAgICBtID0gIlRoZSB3ZWJjYW0gaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciBhcHBsaWNhdGlvbiI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdEFsbG93ZWRFcnJvciI6CiAgICAgICAgbSA9ICJUbyB1c2UgeW91ciBjYW1lcmEsIHlvdSBtdXN0IGFsbG93IHBlcm1pc3Npb25zIjsKICAgICAgICBicmVhazsKICAgICAgY2FzZSAiTm90Rm91bmRFcnJvciI6CiAgICAgICAgbSA9ICJUaGVyZSBpcyBubyBjYW1lcmEgYXZhaWxhYmxlIHRvIHlvdSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGRlZmF1bHQ6CiAgICAgICAgbSA9ICJBbiB1bmtub3duIGNhbWVyYSBlcnJvciBoYXMgb2NjdXJyZWQiOwogICAgICAgIGJyZWFrOwogICAgfQogICAgcmV0dXJuIG5ldyB4KG0sIGUpOwogIH0KICBzdGF0aWMgZnJvbUVycm9yKGUpIHsKICAgIGlmICh0aGlzLmxvZ0Vycm9yKGUpLCBlIGluc3RhbmNlb2YgeCkKICAgICAgcmV0dXJuIGU7CiAgICBjb25zdCBtID0gIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkIjsKICAgIHJldHVybiBuZXcgeChtKTsKICB9Cn0KY29uc3QgY2UgPSB7CiAgUkdCOiAiUkdCIiwKICBSR0JBOiAiUkdCQSIKfSwgZmUgPSAobykgPT4gTnVtYmVyLnBhcnNlRmxvYXQoby50b0ZpeGVkKDMpKSwgZGUgPSAobywgdSkgPT4gTWF0aC5taW4obywgdSk7CnZhciBoZSA9IGZ1bmN0aW9uKCkgewogIHZhciBvID0gdHlwZW9mIGRvY3VtZW50IDwgInUiICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgPyBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYyA6IHZvaWQgMDsKICByZXR1cm4gZnVuY3Rpb24odSkgewogICAgdSA9IHUgfHwge307CiAgICB2YXIgZTsKICAgIGUgfHwgKGUgPSB0eXBlb2YgdSA8ICJ1IiA/IHUgOiB7fSk7CiAgICB2YXIgbSwgZzsKICAgIGUucmVhZHkgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihuLCB0KSB7CiAgICAgIG0gPSBuLCBnID0gdDsKICAgIH0pOwogICAgdmFyIF8gPSB7fSwgdzsKICAgIGZvciAodyBpbiBlKQogICAgICBlLmhhc093blByb3BlcnR5KHcpICYmIChfW3ddID0gZVt3XSk7CiAgICB2YXIgVCA9ICIuL3RoaXMucHJvZ3JhbSIsIE0gPSAhMSwgRSA9ICExOwogICAgTSA9IHR5cGVvZiB3aW5kb3cgPT0gIm9iamVjdCIsIEUgPSB0eXBlb2YgaW1wb3J0U2NyaXB0cyA9PSAiZnVuY3Rpb24iOwogICAgdmFyIEMgPSAiIiwgUjsKICAgIChNIHx8IEUpICYmIChFID8gQyA9IHNlbGYubG9jYXRpb24uaHJlZiA6IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgKEMgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYyksIG8gJiYgKEMgPSBvKSwgQy5pbmRleE9mKCJibG9iOiIpICE9PSAwID8gQyA9IEMuc3Vic3RyKDAsIEMubGFzdEluZGV4T2YoIi8iKSArIDEpIDogQyA9ICIiLCBFICYmIChSID0gZnVuY3Rpb24obikgewogICAgICB2YXIgdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOwogICAgICByZXR1cm4gdC5vcGVuKCJHRVQiLCBuLCAhMSksIHQucmVzcG9uc2VUeXBlID0gImFycmF5YnVmZmVyIiwgdC5zZW5kKG51bGwpLCBuZXcgVWludDhBcnJheSh0LnJlc3BvbnNlKTsKICAgIH0pKTsKICAgIHZhciBTID0gZS5wcmludEVyciB8fCBjb25zb2xlLndhcm4uYmluZChjb25zb2xlKTsKICAgIGZvciAodyBpbiBfKQogICAgICBfLmhhc093blByb3BlcnR5KHcpICYmIChlW3ddID0gX1t3XSk7CiAgICBfID0gbnVsbCwgZS50aGlzUHJvZ3JhbSAmJiAoVCA9IGUudGhpc1Byb2dyYW0pOwogICAgdmFyIGo7CiAgICBlLndhc21CaW5hcnkgJiYgKGogPSBlLndhc21CaW5hcnkpLCBlLm5vRXhpdFJ1bnRpbWUgJiYgZS5ub0V4aXRSdW50aW1lLCB0eXBlb2YgV2ViQXNzZW1ibHkgIT0gIm9iamVjdCIgJiYgc24oIm5vIG5hdGl2ZSB3YXNtIHN1cHBvcnQgZGV0ZWN0ZWQiKTsKICAgIHZhciBHLCBrbiA9ICExOwogICAgZnVuY3Rpb24gWG4obikgewogICAgICBuIHx8IHNuKCJBc3NlcnRpb24gZmFpbGVkOiB1bmRlZmluZWQiKTsKICAgIH0KICAgIHZhciBLbiA9IHR5cGVvZiBUZXh0RGVjb2RlciA8ICJ1IiA/IG5ldyBUZXh0RGVjb2RlcigidXRmOCIpIDogdm9pZCAwOwogICAgZnVuY3Rpb24gTnQobiwgdCwgcikgewogICAgICB2YXIgaSA9IEY7CiAgICAgIGlmICgwIDwgcikgewogICAgICAgIHIgPSB0ICsgciAtIDE7CiAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBuLmxlbmd0aDsgKythKSB7CiAgICAgICAgICB2YXIgcyA9IG4uY2hhckNvZGVBdChhKTsKICAgICAgICAgIGlmICg1NTI5NiA8PSBzICYmIDU3MzQzID49IHMpIHsKICAgICAgICAgICAgdmFyIGMgPSBuLmNoYXJDb2RlQXQoKythKTsKICAgICAgICAgICAgcyA9IDY1NTM2ICsgKChzICYgMTAyMykgPDwgMTApIHwgYyAmIDEwMjM7CiAgICAgICAgICB9CiAgICAgICAgICBpZiAoMTI3ID49IHMpIHsKICAgICAgICAgICAgaWYgKHQgPj0gcikKICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgaVt0KytdID0gczsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIGlmICgyMDQ3ID49IHMpIHsKICAgICAgICAgICAgICBpZiAodCArIDEgPj0gcikKICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgIGlbdCsrXSA9IDE5MiB8IHMgPj4gNjsKICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICBpZiAoNjU1MzUgPj0gcykgewogICAgICAgICAgICAgICAgaWYgKHQgKyAyID49IHIpCiAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgaVt0KytdID0gMjI0IHwgcyA+PiAxMjsKICAgICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgaWYgKHQgKyAzID49IHIpCiAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgaVt0KytdID0gMjQwIHwgcyA+PiAxOCwgaVt0KytdID0gMTI4IHwgcyA+PiAxMiAmIDYzOwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgICBpW3QrK10gPSAxMjggfCBzID4+IDYgJiA2MzsKICAgICAgICAgICAgfQogICAgICAgICAgICBpW3QrK10gPSAxMjggfCBzICYgNjM7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIGlbdF0gPSAwOwogICAgICB9CiAgICB9CiAgICB2YXIgUW4gPSB0eXBlb2YgVGV4dERlY29kZXIgPCAidSIgPyBuZXcgVGV4dERlY29kZXIoInV0Zi0xNmxlIikgOiB2b2lkIDA7CiAgICBmdW5jdGlvbiBVdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSBuID4+IDEsIGkgPSByICsgdCAvIDI7ICEociA+PSBpKSAmJiBwbltyXTsgKQogICAgICAgICsrcjsKICAgICAgaWYgKHIgPDw9IDEsIDMyIDwgciAtIG4gJiYgUW4pCiAgICAgICAgcmV0dXJuIFFuLmRlY29kZShGLnN1YmFycmF5KG4sIHIpKTsKICAgICAgZm9yIChyID0gMCwgaSA9ICIiOyA7ICkgewogICAgICAgIHZhciBhID0gUVtuICsgMiAqIHIgPj4gMV07CiAgICAgICAgaWYgKGEgPT0gMCB8fCByID09IHQgLyAyKQogICAgICAgICAgcmV0dXJuIGk7CiAgICAgICAgKytyLCBpICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYSk7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIEh0KG4sIHQsIHIpIHsKICAgICAgaWYgKHIgPT09IHZvaWQgMCAmJiAociA9IDIxNDc0ODM2NDcpLCAyID4gcikKICAgICAgICByZXR1cm4gMDsKICAgICAgciAtPSAyOwogICAgICB2YXIgaSA9IHQ7CiAgICAgIHIgPSByIDwgMiAqIG4ubGVuZ3RoID8gciAvIDIgOiBuLmxlbmd0aDsKICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCByOyArK2EpCiAgICAgICAgUVt0ID4+IDFdID0gbi5jaGFyQ29kZUF0KGEpLCB0ICs9IDI7CiAgICAgIHJldHVybiBRW3QgPj4gMV0gPSAwLCB0IC0gaTsKICAgIH0KICAgIGZ1bmN0aW9uIHp0KG4pIHsKICAgICAgcmV0dXJuIDIgKiBuLmxlbmd0aDsKICAgIH0KICAgIGZ1bmN0aW9uIER0KG4sIHQpIHsKICAgICAgZm9yICh2YXIgciA9IDAsIGkgPSAiIjsgIShyID49IHQgLyA0KTsgKSB7CiAgICAgICAgdmFyIGEgPSBPW24gKyA0ICogciA+PiAyXTsKICAgICAgICBpZiAoYSA9PSAwKQogICAgICAgICAgYnJlYWs7CiAgICAgICAgKytyLCA2NTUzNiA8PSBhID8gKGEgLT0gNjU1MzYsIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiB8IGEgPj4gMTAsIDU2MzIwIHwgYSAmIDEwMjMpKSA6IGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShhKTsKICAgICAgfQogICAgICByZXR1cm4gaTsKICAgIH0KICAgIGZ1bmN0aW9uIEJ0KG4sIHQsIHIpIHsKICAgICAgaWYgKHIgPT09IHZvaWQgMCAmJiAociA9IDIxNDc0ODM2NDcpLCA0ID4gcikKICAgICAgICByZXR1cm4gMDsKICAgICAgdmFyIGkgPSB0OwogICAgICByID0gaSArIHIgLSA0OwogICAgICBmb3IgKHZhciBhID0gMDsgYSA8IG4ubGVuZ3RoOyArK2EpIHsKICAgICAgICB2YXIgcyA9IG4uY2hhckNvZGVBdChhKTsKICAgICAgICBpZiAoNTUyOTYgPD0gcyAmJiA1NzM0MyA+PSBzKSB7CiAgICAgICAgICB2YXIgYyA9IG4uY2hhckNvZGVBdCgrK2EpOwogICAgICAgICAgcyA9IDY1NTM2ICsgKChzICYgMTAyMykgPDwgMTApIHwgYyAmIDEwMjM7CiAgICAgICAgfQogICAgICAgIGlmIChPW3QgPj4gMl0gPSBzLCB0ICs9IDQsIHQgKyA0ID4gcikKICAgICAgICAgIGJyZWFrOwogICAgICB9CiAgICAgIHJldHVybiBPW3QgPj4gMl0gPSAwLCB0IC0gaTsKICAgIH0KICAgIGZ1bmN0aW9uIFZ0KG4pIHsKICAgICAgZm9yICh2YXIgdCA9IDAsIHIgPSAwOyByIDwgbi5sZW5ndGg7ICsrcikgewogICAgICAgIHZhciBpID0gbi5jaGFyQ29kZUF0KHIpOwogICAgICAgIDU1Mjk2IDw9IGkgJiYgNTczNDMgPj0gaSAmJiArK3IsIHQgKz0gNDsKICAgICAgfQogICAgICByZXR1cm4gdDsKICAgIH0KICAgIHZhciBLLCBZLCBGLCBRLCBwbiwgTywgVSwgcW4sIG50OwogICAgZnVuY3Rpb24gdHQobikgewogICAgICBLID0gbiwgZS5IRUFQOCA9IFkgPSBuZXcgSW50OEFycmF5KG4pLCBlLkhFQVAxNiA9IFEgPSBuZXcgSW50MTZBcnJheShuKSwgZS5IRUFQMzIgPSBPID0gbmV3IEludDMyQXJyYXkobiksIGUuSEVBUFU4ID0gRiA9IG5ldyBVaW50OEFycmF5KG4pLCBlLkhFQVBVMTYgPSBwbiA9IG5ldyBVaW50MTZBcnJheShuKSwgZS5IRUFQVTMyID0gVSA9IG5ldyBVaW50MzJBcnJheShuKSwgZS5IRUFQRjMyID0gcW4gPSBuZXcgRmxvYXQzMkFycmF5KG4pLCBlLkhFQVBGNjQgPSBudCA9IG5ldyBGbG9hdDY0QXJyYXkobik7CiAgICB9CiAgICB2YXIgZXQgPSBlLklOSVRJQUxfTUVNT1JZIHx8IDE2Nzc3MjE2OwogICAgZS53YXNtTWVtb3J5ID8gRyA9IGUud2FzbU1lbW9yeSA6IEcgPSBuZXcgV2ViQXNzZW1ibHkuTWVtb3J5KHsgaW5pdGlhbDogZXQgLyA2NTUzNiwgbWF4aW11bTogMzI3NjggfSksIEcgJiYgKEsgPSBHLmJ1ZmZlciksIGV0ID0gSy5ieXRlTGVuZ3RoLCB0dChLKTsKICAgIHZhciBydCA9IFtdLCBpdCA9IFtdLCBHdCA9IFtdLCBhdCA9IFtdOwogICAgZnVuY3Rpb24gWXQoKSB7CiAgICAgIHZhciBuID0gZS5wcmVSdW4uc2hpZnQoKTsKICAgICAgcnQudW5zaGlmdChuKTsKICAgIH0KICAgIHZhciBaID0gMCwgb24gPSBudWxsOwogICAgZS5wcmVsb2FkZWRJbWFnZXMgPSB7fSwgZS5wcmVsb2FkZWRBdWRpb3MgPSB7fTsKICAgIGZ1bmN0aW9uIHNuKG4pIHsKICAgICAgdGhyb3cgZS5vbkFib3J0ICYmIGUub25BYm9ydChuKSwgUyhuKSwga24gPSAhMCwgbiA9IG5ldyBXZWJBc3NlbWJseS5SdW50aW1lRXJyb3IoImFib3J0KCIgKyBuICsgIikuIEJ1aWxkIHdpdGggLXMgQVNTRVJUSU9OUz0xIGZvciBtb3JlIGluZm8uIiksIGcobiksIG47CiAgICB9CiAgICBmdW5jdGlvbiBSbihuKSB7CiAgICAgIHZhciB0ID0gJDsKICAgICAgcmV0dXJuIFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCA/IHQuc3RhcnRzV2l0aChuKSA6IHQuaW5kZXhPZihuKSA9PT0gMDsKICAgIH0KICAgIGZ1bmN0aW9uIG90KCkgewogICAgICByZXR1cm4gUm4oImRhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCwiKTsKICAgIH0KICAgIHZhciAkID0gInNhbS53YXNtIjsKICAgIGlmICghb3QoKSkgewogICAgICB2YXIgc3QgPSAkOwogICAgICAkID0gZS5sb2NhdGVGaWxlID8gZS5sb2NhdGVGaWxlKHN0LCBDKSA6IEMgKyBzdDsKICAgIH0KICAgIGZ1bmN0aW9uIHV0KCkgewogICAgICB0cnkgewogICAgICAgIGlmIChqKQogICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGopOwogICAgICAgIGlmIChSKQogICAgICAgICAgcmV0dXJuIFIoJCk7CiAgICAgICAgdGhyb3cgImJvdGggYXN5bmMgYW5kIHN5bmMgZmV0Y2hpbmcgb2YgdGhlIHdhc20gZmFpbGVkIjsKICAgICAgfSBjYXRjaCAobikgewogICAgICAgIHNuKG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBadCgpIHsKICAgICAgcmV0dXJuIGogfHwgIU0gJiYgIUUgfHwgdHlwZW9mIGZldGNoICE9ICJmdW5jdGlvbiIgfHwgUm4oImZpbGU6Ly8iKSA/IFByb21pc2UucmVzb2x2ZSgpLnRoZW4odXQpIDogZmV0Y2goJCwgeyBjcmVkZW50aWFsczogInNhbWUtb3JpZ2luIiB9KS50aGVuKGZ1bmN0aW9uKG4pIHsKICAgICAgICBpZiAoIW4ub2spCiAgICAgICAgICB0aHJvdyAiZmFpbGVkIHRvIGxvYWQgd2FzbSBiaW5hcnkgZmlsZSBhdCAnIiArICQgKyAiJyI7CiAgICAgICAgcmV0dXJuIG4uYXJyYXlCdWZmZXIoKTsKICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oKSB7CiAgICAgICAgcmV0dXJuIHV0KCk7CiAgICAgIH0pOwogICAgfQogICAgZnVuY3Rpb24geW4obikgewogICAgICBmb3IgKDsgMCA8IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4uc2hpZnQoKTsKICAgICAgICBpZiAodHlwZW9mIHQgPT0gImZ1bmN0aW9uIikKICAgICAgICAgIHQoZSk7CiAgICAgICAgZWxzZSB7CiAgICAgICAgICB2YXIgciA9IHQuQmE7CiAgICAgICAgICB0eXBlb2YgciA9PSAibnVtYmVyIiA/IHQudGEgPT09IHZvaWQgMCA/IEZuKCJ2IiwgcikoKSA6IEZuKCJ2aSIsIHIpKHQudGEpIDogcih0LnRhID09PSB2b2lkIDAgPyBudWxsIDogdC50YSk7CiAgICAgICAgfQogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBGbihuLCB0KSB7CiAgICAgIHZhciByID0gW107CiAgICAgIHJldHVybiBmdW5jdGlvbigpIHsKICAgICAgICByLmxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7CiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspCiAgICAgICAgICByW2ldID0gYXJndW1lbnRzW2ldOwogICAgICAgIHJldHVybiByICYmIHIubGVuZ3RoID8gZVsiZHluQ2FsbF8iICsgbl0uYXBwbHkobnVsbCwgW3RdLmNvbmNhdChyKSkgOiBlWyJkeW5DYWxsXyIgKyBuXS5jYWxsKG51bGwsIHQpOwogICAgICB9OwogICAgfQogICAgZnVuY3Rpb24gJHQobikgewogICAgICB0aGlzLmRhID0gbiAtIDE2LCB0aGlzLk9hID0gZnVuY3Rpb24odCkgewogICAgICAgIE9bdGhpcy5kYSArIDggPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLkxhID0gZnVuY3Rpb24odCkgewogICAgICAgIE9bdGhpcy5kYSArIDAgPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLk1hID0gZnVuY3Rpb24oKSB7CiAgICAgICAgT1t0aGlzLmRhICsgNCA+PiAyXSA9IDA7CiAgICAgIH0sIHRoaXMuS2EgPSBmdW5jdGlvbigpIHsKICAgICAgICBZW3RoaXMuZGEgKyAxMiA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuTmEgPSBmdW5jdGlvbigpIHsKICAgICAgICBZW3RoaXMuZGEgKyAxMyA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuRmEgPSBmdW5jdGlvbih0LCByKSB7CiAgICAgICAgdGhpcy5PYSh0KSwgdGhpcy5MYShyKSwgdGhpcy5NYSgpLCB0aGlzLkthKCksIHRoaXMuTmEoKTsKICAgICAgfTsKICAgIH0KICAgIGZ1bmN0aW9uIG1uKCkgewogICAgICByZXR1cm4gMCA8IG1uLnhhOwogICAgfQogICAgZnVuY3Rpb24geG4obikgewogICAgICBzd2l0Y2ggKG4pIHsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICByZXR1cm4gMDsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIDQ6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlIDg6CiAgICAgICAgICByZXR1cm4gMzsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biB0eXBlIHNpemU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgdmFyIGx0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gVyhuKSB7CiAgICAgIGZvciAodmFyIHQgPSAiIjsgRltuXTsgKQogICAgICAgIHQgKz0gbHRbRltuKytdXTsKICAgICAgcmV0dXJuIHQ7CiAgICB9CiAgICB2YXIgcSA9IHt9LCBKID0ge30sIHZuID0ge307CiAgICBmdW5jdGlvbiBJbihuKSB7CiAgICAgIGlmIChuID09PSB2b2lkIDApCiAgICAgICAgcmV0dXJuICJfdW5rbm93biI7CiAgICAgIG4gPSBuLnJlcGxhY2UoL1teYS16QS1aMC05X10vZywgIiQiKTsKICAgICAgdmFyIHQgPSBuLmNoYXJDb2RlQXQoMCk7CiAgICAgIHJldHVybiA0OCA8PSB0ICYmIDU3ID49IHQgPyAiXyIgKyBuIDogbjsKICAgIH0KICAgIGZ1bmN0aW9uIGpuKG4sIHQpIHsKICAgICAgcmV0dXJuIG4gPSBJbihuKSwgbmV3IEZ1bmN0aW9uKCJib2R5IiwgInJldHVybiBmdW5jdGlvbiAiICsgbiArIGAoKSB7CiAgICAidXNlIHN0cmljdCI7ICAgIHJldHVybiBib2R5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7Cn07CmApKHQpOwogICAgfQogICAgZnVuY3Rpb24gTG4obikgewogICAgICB2YXIgdCA9IEVycm9yLCByID0gam4obiwgZnVuY3Rpb24oaSkgewogICAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMubWVzc2FnZSA9IGksIGkgPSBFcnJvcihpKS5zdGFjaywgaSAhPT0gdm9pZCAwICYmICh0aGlzLnN0YWNrID0gdGhpcy50b1N0cmluZygpICsgYApgICsgaS5yZXBsYWNlKC9eRXJyb3IoOlteXG5dKik/XG4vLCAiIikpOwogICAgICB9KTsKICAgICAgcmV0dXJuIHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSksIHIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gciwgci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlID09PSB2b2lkIDAgPyB0aGlzLm5hbWUgOiB0aGlzLm5hbWUgKyAiOiAiICsgdGhpcy5tZXNzYWdlOwogICAgICB9LCByOwogICAgfQogICAgdmFyIG5uID0gdm9pZCAwOwogICAgZnVuY3Rpb24gdihuKSB7CiAgICAgIHRocm93IG5ldyBubihuKTsKICAgIH0KICAgIHZhciBjdCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIGduKG4pIHsKICAgICAgdGhyb3cgbmV3IGN0KG4pOwogICAgfQogICAgZnVuY3Rpb24gdG4obiwgdCwgcikgewogICAgICBmdW5jdGlvbiBpKGwpIHsKICAgICAgICBsID0gcihsKSwgbC5sZW5ndGggIT09IG4ubGVuZ3RoICYmIGduKCJNaXNtYXRjaGVkIHR5cGUgY29udmVydGVyIGNvdW50Iik7CiAgICAgICAgZm9yICh2YXIgcCA9IDA7IHAgPCBuLmxlbmd0aDsgKytwKQogICAgICAgICAgSChuW3BdLCBsW3BdKTsKICAgICAgfQogICAgICBuLmZvckVhY2goZnVuY3Rpb24obCkgewogICAgICAgIHZuW2xdID0gdDsKICAgICAgfSk7CiAgICAgIHZhciBhID0gQXJyYXkodC5sZW5ndGgpLCBzID0gW10sIGMgPSAwOwogICAgICB0LmZvckVhY2goZnVuY3Rpb24obCwgcCkgewogICAgICAgIEouaGFzT3duUHJvcGVydHkobCkgPyBhW3BdID0gSltsXSA6IChzLnB1c2gobCksIHEuaGFzT3duUHJvcGVydHkobCkgfHwgKHFbbF0gPSBbXSksIHFbbF0ucHVzaChmdW5jdGlvbigpIHsKICAgICAgICAgIGFbcF0gPSBKW2xdLCArK2MsIGMgPT09IHMubGVuZ3RoICYmIGkoYSk7CiAgICAgICAgfSkpOwogICAgICB9KSwgcy5sZW5ndGggPT09IDAgJiYgaShhKTsKICAgIH0KICAgIGZ1bmN0aW9uIEgobiwgdCwgcikgewogICAgICBpZiAociA9IHIgfHwge30sICEoImFyZ1BhY2tBZHZhbmNlIiBpbiB0KSkKICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJyZWdpc3RlclR5cGUgcmVnaXN0ZXJlZEluc3RhbmNlIHJlcXVpcmVzIGFyZ1BhY2tBZHZhbmNlIik7CiAgICAgIHZhciBpID0gdC5uYW1lOwogICAgICBpZiAobiB8fCB2KCd0eXBlICInICsgaSArICciIG11c3QgaGF2ZSBhIHBvc2l0aXZlIGludGVnZXIgdHlwZWlkIHBvaW50ZXInKSwgSi5oYXNPd25Qcm9wZXJ0eShuKSkgewogICAgICAgIGlmIChyLkVhKQogICAgICAgICAgcmV0dXJuOwogICAgICAgIHYoIkNhbm5vdCByZWdpc3RlciB0eXBlICciICsgaSArICInIHR3aWNlIik7CiAgICAgIH0KICAgICAgSltuXSA9IHQsIGRlbGV0ZSB2bltuXSwgcS5oYXNPd25Qcm9wZXJ0eShuKSAmJiAodCA9IHFbbl0sIGRlbGV0ZSBxW25dLCB0LmZvckVhY2goZnVuY3Rpb24oYSkgewogICAgICAgIGEoKTsKICAgICAgfSkpOwogICAgfQogICAgZnVuY3Rpb24gSnQobikgewogICAgICByZXR1cm4geyBjb3VudDogbi5jb3VudCwgb2E6IG4ub2EsIHBhOiBuLnBhLCBkYTogbi5kYSwgZmE6IG4uZmEsIGdhOiBuLmdhLCBoYTogbi5oYSB9OwogICAgfQogICAgZnVuY3Rpb24gTm4obikgewogICAgICB2KG4uQS5mYS5lYS5uYW1lICsgIiBpbnN0YW5jZSBhbHJlYWR5IGRlbGV0ZWQiKTsKICAgIH0KICAgIHZhciBVbiA9ICExOwogICAgZnVuY3Rpb24gZnQoKSB7CiAgICB9CiAgICBmdW5jdGlvbiBkdChuKSB7CiAgICAgIC0tbi5jb3VudC52YWx1ZSwgbi5jb3VudC52YWx1ZSA9PT0gMCAmJiAobi5nYSA/IG4uaGEubmEobi5nYSkgOiBuLmZhLmVhLm5hKG4uZGEpKTsKICAgIH0KICAgIGZ1bmN0aW9uIHVuKG4pIHsKICAgICAgcmV0dXJuIHR5cGVvZiBGaW5hbGl6YXRpb25Hcm91cCA+ICJ1IiA/ICh1biA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICByZXR1cm4gdDsKICAgICAgfSwgbikgOiAoVW4gPSBuZXcgRmluYWxpemF0aW9uR3JvdXAoZnVuY3Rpb24odCkgewogICAgICAgIGZvciAodmFyIHIgPSB0Lm5leHQoKTsgIXIuZG9uZTsgciA9IHQubmV4dCgpKQogICAgICAgICAgciA9IHIudmFsdWUsIHIuZGEgPyBkdChyKSA6IGNvbnNvbGUud2Fybigib2JqZWN0IGFscmVhZHkgZGVsZXRlZDogIiArIHIuZGEpOwogICAgICB9KSwgdW4gPSBmdW5jdGlvbih0KSB7CiAgICAgICAgcmV0dXJuIFVuLnJlZ2lzdGVyKHQsIHQuQSwgdC5BKSwgdDsKICAgICAgfSwgZnQgPSBmdW5jdGlvbih0KSB7CiAgICAgICAgVW4udW5yZWdpc3Rlcih0LkEpOwogICAgICB9LCB1bihuKSk7CiAgICB9CiAgICB2YXIgbG4gPSB2b2lkIDAsIGNuID0gW107CiAgICBmdW5jdGlvbiBIbigpIHsKICAgICAgZm9yICg7IGNuLmxlbmd0aDsgKSB7CiAgICAgICAgdmFyIG4gPSBjbi5wb3AoKTsKICAgICAgICBuLkEub2EgPSAhMSwgbi5kZWxldGUoKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gQigpIHsKICAgIH0KICAgIHZhciBodCA9IHt9OwogICAgZnVuY3Rpb24gWHQobiwgdCkgewogICAgICB2YXIgciA9IGU7CiAgICAgIGlmIChyW25dLmphID09PSB2b2lkIDApIHsKICAgICAgICB2YXIgaSA9IHJbbl07CiAgICAgICAgcltuXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgcmV0dXJuIHJbbl0uamEuaGFzT3duUHJvcGVydHkoYXJndW1lbnRzLmxlbmd0aCkgfHwgdigiRnVuY3Rpb24gJyIgKyB0ICsgIicgY2FsbGVkIHdpdGggYW4gaW52YWxpZCBudW1iZXIgb2YgYXJndW1lbnRzICgiICsgYXJndW1lbnRzLmxlbmd0aCArICIpIC0gZXhwZWN0cyBvbmUgb2YgKCIgKyByW25dLmphICsgIikhIiksIHJbbl0uamFbYXJndW1lbnRzLmxlbmd0aF0uYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICB9LCByW25dLmphID0gW10sIHJbbl0uamFbaS55YV0gPSBpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBwdChuLCB0LCByKSB7CiAgICAgIGUuaGFzT3duUHJvcGVydHkobikgPyAoKHIgPT09IHZvaWQgMCB8fCBlW25dLmphICE9PSB2b2lkIDAgJiYgZVtuXS5qYVtyXSAhPT0gdm9pZCAwKSAmJiB2KCJDYW5ub3QgcmVnaXN0ZXIgcHVibGljIG5hbWUgJyIgKyBuICsgIicgdHdpY2UiKSwgWHQobiwgbiksIGUuaGFzT3duUHJvcGVydHkocikgJiYgdigiQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIG92ZXJsb2FkcyBvZiBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgbnVtYmVyIG9mIGFyZ3VtZW50cyAoIiArIHIgKyAiKSEiKSwgZVtuXS5qYVtyXSA9IHQpIDogKGVbbl0gPSB0LCByICE9PSB2b2lkIDAgJiYgKGVbbl0uUmEgPSByKSk7CiAgICB9CiAgICBmdW5jdGlvbiBLdChuLCB0LCByLCBpLCBhLCBzLCBjLCBsKSB7CiAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMuY29uc3RydWN0b3IgPSB0LCB0aGlzLm1hID0gciwgdGhpcy5uYSA9IGksIHRoaXMuaWEgPSBhLCB0aGlzLkNhID0gcywgdGhpcy5xYSA9IGMsIHRoaXMuQWEgPSBsOwogICAgfQogICAgZnVuY3Rpb24gd24obiwgdCwgcikgewogICAgICBmb3IgKDsgdCAhPT0gcjsgKQogICAgICAgIHQucWEgfHwgdigiRXhwZWN0ZWQgbnVsbCBvciBpbnN0YW5jZSBvZiAiICsgci5uYW1lICsgIiwgZ290IGFuIGluc3RhbmNlIG9mICIgKyB0Lm5hbWUpLCBuID0gdC5xYShuKSwgdCA9IHQuaWE7CiAgICAgIHJldHVybiBuOwogICAgfQogICAgZnVuY3Rpb24gUXQobiwgdCkgewogICAgICByZXR1cm4gdCA9PT0gbnVsbCA/ICh0aGlzLnVhICYmIHYoIm51bGwgaXMgbm90IGEgdmFsaWQgIiArIHRoaXMubmFtZSksIDApIDogKHQuQSB8fCB2KCdDYW5ub3QgcGFzcyAiJyArIHJuKHQpICsgJyIgYXMgYSAnICsgdGhpcy5uYW1lKSwgdC5BLmRhIHx8IHYoIkNhbm5vdCBwYXNzIGRlbGV0ZWQgb2JqZWN0IGFzIGEgcG9pbnRlciBvZiB0eXBlICIgKyB0aGlzLm5hbWUpLCB3bih0LkEuZGEsIHQuQS5mYS5lYSwgdGhpcy5lYSkpOwogICAgfQogICAgZnVuY3Rpb24gcXQobiwgdCkgewogICAgICBpZiAodCA9PT0gbnVsbCkgewogICAgICAgIGlmICh0aGlzLnVhICYmIHYoIm51bGwgaXMgbm90IGEgdmFsaWQgIiArIHRoaXMubmFtZSksIHRoaXMuc2EpIHsKICAgICAgICAgIHZhciByID0gdGhpcy5IYSgpOwogICAgICAgICAgcmV0dXJuIG4gIT09IG51bGwgJiYgbi5wdXNoKHRoaXMubmEsIHIpLCByOwogICAgICAgIH0KICAgICAgICByZXR1cm4gMDsKICAgICAgfQogICAgICBpZiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgcm4odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksICF0aGlzLnJhICYmIHQuQS5mYS5yYSAmJiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyAodC5BLmhhID8gdC5BLmhhLm5hbWUgOiB0LkEuZmEubmFtZSkgKyAiIHRvIHBhcmFtZXRlciB0eXBlICIgKyB0aGlzLm5hbWUpLCByID0gd24odC5BLmRhLCB0LkEuZmEuZWEsIHRoaXMuZWEpLCB0aGlzLnNhKQogICAgICAgIHN3aXRjaCAodC5BLmdhID09PSB2b2lkIDAgJiYgdigiUGFzc2luZyByYXcgcG9pbnRlciB0byBzbWFydCBwb2ludGVyIGlzIGlsbGVnYWwiKSwgdGhpcy5QYSkgewogICAgICAgICAgY2FzZSAwOgogICAgICAgICAgICB0LkEuaGEgPT09IHRoaXMgPyByID0gdC5BLmdhIDogdigiQ2Fubm90IGNvbnZlcnQgYXJndW1lbnQgb2YgdHlwZSAiICsgKHQuQS5oYSA/IHQuQS5oYS5uYW1lIDogdC5BLmZhLm5hbWUpICsgIiB0byBwYXJhbWV0ZXIgdHlwZSAiICsgdGhpcy5uYW1lKTsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICBjYXNlIDE6CiAgICAgICAgICAgIHIgPSB0LkEuZ2E7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgY2FzZSAyOgogICAgICAgICAgICBpZiAodC5BLmhhID09PSB0aGlzKQogICAgICAgICAgICAgIHIgPSB0LkEuZ2E7CiAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgIHZhciBpID0gdC5jbG9uZSgpOwogICAgICAgICAgICAgIHIgPSB0aGlzLklhKHIsIGVuKGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgICAgaS5kZWxldGUoKTsKICAgICAgICAgICAgICB9KSksIG4gIT09IG51bGwgJiYgbi5wdXNoKHRoaXMubmEsIHIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgZGVmYXVsdDoKICAgICAgICAgICAgdigiVW5zdXBwb3J0aW5nIHNoYXJpbmcgcG9saWN5Iik7CiAgICAgICAgfQogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIG5lKG4sIHQpIHsKICAgICAgcmV0dXJuIHQgPT09IG51bGwgPyAodGhpcy51YSAmJiB2KCJudWxsIGlzIG5vdCBhIHZhbGlkICIgKyB0aGlzLm5hbWUpLCAwKSA6ICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBybih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgdC5BLmZhLnJhICYmIHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArIHQuQS5mYS5uYW1lICsgIiB0byBwYXJhbWV0ZXIgdHlwZSAiICsgdGhpcy5uYW1lKSwgd24odC5BLmRhLCB0LkEuZmEuZWEsIHRoaXMuZWEpKTsKICAgIH0KICAgIGZ1bmN0aW9uIEFuKG4pIHsKICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKFVbbiA+PiAyXSk7CiAgICB9CiAgICBmdW5jdGlvbiB5dChuLCB0LCByKSB7CiAgICAgIHJldHVybiB0ID09PSByID8gbiA6IHIuaWEgPT09IHZvaWQgMCA/IG51bGwgOiAobiA9IHl0KG4sIHQsIHIuaWEpLCBuID09PSBudWxsID8gbnVsbCA6IHIuQWEobikpOwogICAgfQogICAgdmFyIGZuID0ge307CiAgICBmdW5jdGlvbiB0ZShuLCB0KSB7CiAgICAgIGZvciAodCA9PT0gdm9pZCAwICYmIHYoInB0ciBzaG91bGQgbm90IGJlIHVuZGVmaW5lZCIpOyBuLmlhOyApCiAgICAgICAgdCA9IG4ucWEodCksIG4gPSBuLmlhOwogICAgICByZXR1cm4gZm5bdF07CiAgICB9CiAgICBmdW5jdGlvbiBfbihuLCB0KSB7CiAgICAgIHJldHVybiB0LmZhICYmIHQuZGEgfHwgZ24oIm1ha2VDbGFzc0hhbmRsZSByZXF1aXJlcyBwdHIgYW5kIHB0clR5cGUiKSwgISF0LmhhICE9ICEhdC5nYSAmJiBnbigiQm90aCBzbWFydFB0clR5cGUgYW5kIHNtYXJ0UHRyIG11c3QgYmUgc3BlY2lmaWVkIiksIHQuY291bnQgPSB7IHZhbHVlOiAxIH0sIHVuKE9iamVjdC5jcmVhdGUobiwgeyBBOiB7IHZhbHVlOiB0IH0gfSkpOwogICAgfQogICAgZnVuY3Rpb24geihuLCB0LCByLCBpKSB7CiAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMuZWEgPSB0LCB0aGlzLnVhID0gciwgdGhpcy5yYSA9IGksIHRoaXMuc2EgPSAhMSwgdGhpcy5uYSA9IHRoaXMuSWEgPSB0aGlzLkhhID0gdGhpcy53YSA9IHRoaXMuUGEgPSB0aGlzLkdhID0gdm9pZCAwLCB0LmlhICE9PSB2b2lkIDAgPyB0aGlzLnRvV2lyZVR5cGUgPSBxdCA6ICh0aGlzLnRvV2lyZVR5cGUgPSBpID8gUXQgOiBuZSwgdGhpcy5rYSA9IG51bGwpOwogICAgfQogICAgZnVuY3Rpb24gbXQobiwgdCwgcikgewogICAgICBlLmhhc093blByb3BlcnR5KG4pIHx8IGduKCJSZXBsYWNpbmcgbm9uZXhpc3RhbnQgcHVibGljIHN5bWJvbCIpLCBlW25dLmphICE9PSB2b2lkIDAgJiYgciAhPT0gdm9pZCAwID8gZVtuXS5qYVtyXSA9IHQgOiAoZVtuXSA9IHQsIGVbbl0ueWEgPSByKTsKICAgIH0KICAgIGZ1bmN0aW9uIFYobiwgdCkgewogICAgICBuID0gVyhuKTsKICAgICAgdmFyIHIgPSBGbihuLCB0KTsKICAgICAgcmV0dXJuIHR5cGVvZiByICE9ICJmdW5jdGlvbiIgJiYgdigidW5rbm93biBmdW5jdGlvbiBwb2ludGVyIHdpdGggc2lnbmF0dXJlICIgKyBuICsgIjogIiArIHQpLCByOwogICAgfQogICAgdmFyIHZ0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gZ3QobikgewogICAgICBuID0gYnQobik7CiAgICAgIHZhciB0ID0gVyhuKTsKICAgICAgcmV0dXJuIEQobiksIHQ7CiAgICB9CiAgICBmdW5jdGlvbiBkbihuLCB0KSB7CiAgICAgIGZ1bmN0aW9uIHIocykgewogICAgICAgIGFbc10gfHwgSltzXSB8fCAodm5bc10gPyB2bltzXS5mb3JFYWNoKHIpIDogKGkucHVzaChzKSwgYVtzXSA9ICEwKSk7CiAgICAgIH0KICAgICAgdmFyIGkgPSBbXSwgYSA9IHt9OwogICAgICB0aHJvdyB0LmZvckVhY2gociksIG5ldyB2dChuICsgIjogIiArIGkubWFwKGd0KS5qb2luKFsiLCAiXSkpOwogICAgfQogICAgZnVuY3Rpb24gd3QobiwgdCkgewogICAgICBmb3IgKHZhciByID0gW10sIGkgPSAwOyBpIDwgbjsgaSsrKQogICAgICAgIHIucHVzaChPWyh0ID4+IDIpICsgaV0pOwogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIENuKG4pIHsKICAgICAgZm9yICg7IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4ucG9wKCk7CiAgICAgICAgbi5wb3AoKSh0KTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gQXQobiwgdCwgcikgewogICAgICByZXR1cm4gbiBpbnN0YW5jZW9mIE9iamVjdCB8fCB2KHIgKyAnIHdpdGggaW52YWxpZCAidGhpcyI6ICcgKyBuKSwgbiBpbnN0YW5jZW9mIHQuZWEuY29uc3RydWN0b3IgfHwgdihyICsgJyBpbmNvbXBhdGlibGUgd2l0aCAidGhpcyIgb2YgdHlwZSAnICsgbi5jb25zdHJ1Y3Rvci5uYW1lKSwgbi5BLmRhIHx8IHYoImNhbm5vdCBjYWxsIGVtc2NyaXB0ZW4gYmluZGluZyBtZXRob2QgIiArIHIgKyAiIG9uIGRlbGV0ZWQgb2JqZWN0IiksIHduKG4uQS5kYSwgbi5BLmZhLmVhLCB0LmVhKTsKICAgIH0KICAgIHZhciB6biA9IFtdLCBJID0gW3t9LCB7IHZhbHVlOiB2b2lkIDAgfSwgeyB2YWx1ZTogbnVsbCB9LCB7IHZhbHVlOiAhMCB9LCB7IHZhbHVlOiAhMSB9XTsKICAgIGZ1bmN0aW9uIERuKG4pIHsKICAgICAgNCA8IG4gJiYgLS1JW25dLkphID09PSAwICYmIChJW25dID0gdm9pZCAwLCB6bi5wdXNoKG4pKTsKICAgIH0KICAgIGZ1bmN0aW9uIGVuKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSB2b2lkIDA6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIG51bGw6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlICEwOgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgY2FzZSAhMToKICAgICAgICAgIHJldHVybiA0OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB2YXIgdCA9IHpuLmxlbmd0aCA/IHpuLnBvcCgpIDogSS5sZW5ndGg7CiAgICAgICAgICByZXR1cm4gSVt0XSA9IHsgSmE6IDEsIHZhbHVlOiBuIH0sIHQ7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHJuKG4pIHsKICAgICAgaWYgKG4gPT09IG51bGwpCiAgICAgICAgcmV0dXJuICJudWxsIjsKICAgICAgdmFyIHQgPSB0eXBlb2YgbjsKICAgICAgcmV0dXJuIHQgPT09ICJvYmplY3QiIHx8IHQgPT09ICJhcnJheSIgfHwgdCA9PT0gImZ1bmN0aW9uIiA/IG4udG9TdHJpbmcoKSA6ICIiICsgbjsKICAgIH0KICAgIGZ1bmN0aW9uIGVlKG4sIHQpIHsKICAgICAgc3dpdGNoICh0KSB7CiAgICAgICAgY2FzZSAyOgogICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHIpIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKHFuW3IgPj4gMl0pOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDM6CiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24ocikgewogICAgICAgICAgICByZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUobnRbciA+PiAzXSk7CiAgICAgICAgICB9OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGZsb2F0IHR5cGU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gcmUobikgewogICAgICB2YXIgdCA9IEZ1bmN0aW9uOwogICAgICBpZiAoISh0IGluc3RhbmNlb2YgRnVuY3Rpb24pKQogICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIm5ld18gY2FsbGVkIHdpdGggY29uc3RydWN0b3IgdHlwZSAiICsgdHlwZW9mIHQgKyAiIHdoaWNoIGlzIG5vdCBhIGZ1bmN0aW9uIik7CiAgICAgIHZhciByID0gam4odC5uYW1lIHx8ICJ1bmtub3duRnVuY3Rpb25OYW1lIiwgZnVuY3Rpb24oKSB7CiAgICAgIH0pOwogICAgICByZXR1cm4gci5wcm90b3R5cGUgPSB0LnByb3RvdHlwZSwgciA9IG5ldyByKCksIG4gPSB0LmFwcGx5KHIsIG4pLCBuIGluc3RhbmNlb2YgT2JqZWN0ID8gbiA6IHI7CiAgICB9CiAgICBmdW5jdGlvbiBpZShuLCB0LCByKSB7CiAgICAgIHN3aXRjaCAodCkgewogICAgICAgIGNhc2UgMDoKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gWVtpXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBGW2ldOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICByZXR1cm4gciA/IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIFFbaSA+PiAxXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBwbltpID4+IDFdOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gciA/IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIE9baSA+PiAyXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBVW2kgPj4gMl07CiAgICAgICAgICB9OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGludGVnZXIgdHlwZTogIiArIG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBCbihuKSB7CiAgICAgIHJldHVybiBuIHx8IHYoIkNhbm5vdCB1c2UgZGVsZXRlZCB2YWwuIGhhbmRsZSA9ICIgKyBuKSwgSVtuXS52YWx1ZTsKICAgIH0KICAgIGZ1bmN0aW9uIF90KG4sIHQpIHsKICAgICAgdmFyIHIgPSBKW25dOwogICAgICByZXR1cm4gciA9PT0gdm9pZCAwICYmIHYodCArICIgaGFzIHVua25vd24gdHlwZSAiICsgZ3QobikpLCByOwogICAgfQogICAgdmFyIGFlID0ge30sIEN0ID0ge307CiAgICBmdW5jdGlvbiBFdCgpIHsKICAgICAgaWYgKCFWbikgewogICAgICAgIHZhciBuID0geyBVU0VSOiAid2ViX3VzZXIiLCBMT0dOQU1FOiAid2ViX3VzZXIiLCBQQVRIOiAiLyIsIFBXRDogIi8iLCBIT01FOiAiL2hvbWUvd2ViX3VzZXIiLCBMQU5HOiAodHlwZW9mIG5hdmlnYXRvciA9PSAib2JqZWN0IiAmJiBuYXZpZ2F0b3IubGFuZ3VhZ2VzICYmIG5hdmlnYXRvci5sYW5ndWFnZXNbMF0gfHwgIkMiKS5yZXBsYWNlKCItIiwgIl8iKSArICIuVVRGLTgiLCBfOiBUIHx8ICIuL3RoaXMucHJvZ3JhbSIgfSwgdDsKICAgICAgICBmb3IgKHQgaW4gQ3QpCiAgICAgICAgICBuW3RdID0gQ3RbdF07CiAgICAgICAgdmFyIHIgPSBbXTsKICAgICAgICBmb3IgKHQgaW4gbikKICAgICAgICAgIHIucHVzaCh0ICsgIj0iICsgblt0XSk7CiAgICAgICAgVm4gPSByOwogICAgICB9CiAgICAgIHJldHVybiBWbjsKICAgIH0KICAgIHZhciBWbiwgVHQgPSBbXTsKICAgIGZ1bmN0aW9uIE10KG4pIHsKICAgICAgdmFyIHQgPSB7fSwgcjsKICAgICAgZm9yIChyIGluIG4pCiAgICAgICAgKGZ1bmN0aW9uKGkpIHsKICAgICAgICAgIHZhciBhID0gbltpXTsKICAgICAgICAgIHRbaV0gPSB0eXBlb2YgYSA9PSAiZnVuY3Rpb24iID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIFR0LnB1c2goaSk7CiAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgcmV0dXJuIGEuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgICAgICAgICAgfSBmaW5hbGx5IHsKICAgICAgICAgICAgICBpZiAoa24pCiAgICAgICAgICAgICAgICByZXR1cm47CiAgICAgICAgICAgICAgdmFyIHMgPSBUdC5wb3AoKTsKICAgICAgICAgICAgICBYbihzID09PSBpKTsKICAgICAgICAgICAgfQogICAgICAgICAgfSA6IGE7CiAgICAgICAgfSkocik7CiAgICAgIHJldHVybiB0OwogICAgfQogICAgZm9yICh2YXIgUHQgPSBBcnJheSgyNTYpLCBFbiA9IDA7IDI1NiA+IEVuOyArK0VuKQogICAgICBQdFtFbl0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKEVuKTsKICAgIGx0ID0gUHQsIG5uID0gZS5CaW5kaW5nRXJyb3IgPSBMbigiQmluZGluZ0Vycm9yIiksIGN0ID0gZS5JbnRlcm5hbEVycm9yID0gTG4oIkludGVybmFsRXJyb3IiKSwgQi5wcm90b3R5cGUuaXNBbGlhc09mID0gZnVuY3Rpb24obikgewogICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQiAmJiBuIGluc3RhbmNlb2YgQikpCiAgICAgICAgcmV0dXJuICExOwogICAgICB2YXIgdCA9IHRoaXMuQS5mYS5lYSwgciA9IHRoaXMuQS5kYSwgaSA9IG4uQS5mYS5lYTsKICAgICAgZm9yIChuID0gbi5BLmRhOyB0LmlhOyApCiAgICAgICAgciA9IHQucWEociksIHQgPSB0LmlhOwogICAgICBmb3IgKDsgaS5pYTsgKQogICAgICAgIG4gPSBpLnFhKG4pLCBpID0gaS5pYTsKICAgICAgcmV0dXJuIHQgPT09IGkgJiYgciA9PT0gbjsKICAgIH0sIEIucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7CiAgICAgIGlmICh0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5wYSkKICAgICAgICByZXR1cm4gdGhpcy5BLmNvdW50LnZhbHVlICs9IDEsIHRoaXM7CiAgICAgIHZhciBuID0gdW4oT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcyksIHsgQTogeyB2YWx1ZTogSnQodGhpcy5BKSB9IH0pKTsKICAgICAgcmV0dXJuIG4uQS5jb3VudC52YWx1ZSArPSAxLCBuLkEub2EgPSAhMSwgbjsKICAgIH0sIEIucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uKCkgewogICAgICB0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5vYSAmJiAhdGhpcy5BLnBhICYmIHYoIk9iamVjdCBhbHJlYWR5IHNjaGVkdWxlZCBmb3IgZGVsZXRpb24iKSwgZnQodGhpcyksIGR0KHRoaXMuQSksIHRoaXMuQS5wYSB8fCAodGhpcy5BLmdhID0gdm9pZCAwLCB0aGlzLkEuZGEgPSB2b2lkIDApOwogICAgfSwgQi5wcm90b3R5cGUuaXNEZWxldGVkID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAhdGhpcy5BLmRhOwogICAgfSwgQi5wcm90b3R5cGUuZGVsZXRlTGF0ZXIgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIHRoaXMuQS5kYSB8fCBObih0aGlzKSwgdGhpcy5BLm9hICYmICF0aGlzLkEucGEgJiYgdigiT2JqZWN0IGFscmVhZHkgc2NoZWR1bGVkIGZvciBkZWxldGlvbiIpLCBjbi5wdXNoKHRoaXMpLCBjbi5sZW5ndGggPT09IDEgJiYgbG4gJiYgbG4oSG4pLCB0aGlzLkEub2EgPSAhMCwgdGhpczsKICAgIH0sIHoucHJvdG90eXBlLkRhID0gZnVuY3Rpb24obikgewogICAgICByZXR1cm4gdGhpcy53YSAmJiAobiA9IHRoaXMud2EobikpLCBuOwogICAgfSwgei5wcm90b3R5cGUudmEgPSBmdW5jdGlvbihuKSB7CiAgICAgIHRoaXMubmEgJiYgdGhpcy5uYShuKTsKICAgIH0sIHoucHJvdG90eXBlLmFyZ1BhY2tBZHZhbmNlID0gOCwgei5wcm90b3R5cGUucmVhZFZhbHVlRnJvbVBvaW50ZXIgPSBBbiwgei5wcm90b3R5cGUuZGVsZXRlT2JqZWN0ID0gZnVuY3Rpb24obikgewogICAgICBuICE9PSBudWxsICYmIG4uZGVsZXRlKCk7CiAgICB9LCB6LnByb3RvdHlwZS5mcm9tV2lyZVR5cGUgPSBmdW5jdGlvbihuKSB7CiAgICAgIGZ1bmN0aW9uIHQoKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuc2EgPyBfbih0aGlzLmVhLm1hLCB7IGZhOiB0aGlzLkdhLCBkYTogciwgaGE6IHRoaXMsIGdhOiBuIH0pIDogX24odGhpcy5lYS5tYSwgeyBmYTogdGhpcywgZGE6IG4gfSk7CiAgICAgIH0KICAgICAgdmFyIHIgPSB0aGlzLkRhKG4pOwogICAgICBpZiAoIXIpCiAgICAgICAgcmV0dXJuIHRoaXMudmEobiksIG51bGw7CiAgICAgIHZhciBpID0gdGUodGhpcy5lYSwgcik7CiAgICAgIGlmIChpICE9PSB2b2lkIDApCiAgICAgICAgcmV0dXJuIGkuQS5jb3VudC52YWx1ZSA9PT0gMCA/IChpLkEuZGEgPSByLCBpLkEuZ2EgPSBuLCBpLmNsb25lKCkpIDogKGkgPSBpLmNsb25lKCksIHRoaXMudmEobiksIGkpOwogICAgICBpZiAoaSA9IHRoaXMuZWEuQ2EociksIGkgPSBodFtpXSwgIWkpCiAgICAgICAgcmV0dXJuIHQuY2FsbCh0aGlzKTsKICAgICAgaSA9IHRoaXMucmEgPyBpLnphIDogaS5wb2ludGVyVHlwZTsKICAgICAgdmFyIGEgPSB5dChyLCB0aGlzLmVhLCBpLmVhKTsKICAgICAgcmV0dXJuIGEgPT09IG51bGwgPyB0LmNhbGwodGhpcykgOiB0aGlzLnNhID8gX24oaS5lYS5tYSwgeyBmYTogaSwgZGE6IGEsIGhhOiB0aGlzLCBnYTogbiB9KSA6IF9uKAogICAgICAgIGkuZWEubWEsCiAgICAgICAgeyBmYTogaSwgZGE6IGEgfQogICAgICApOwogICAgfSwgZS5nZXRJbmhlcml0ZWRJbnN0YW5jZUNvdW50ID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhmbikubGVuZ3RoOwogICAgfSwgZS5nZXRMaXZlSW5oZXJpdGVkSW5zdGFuY2VzID0gZnVuY3Rpb24oKSB7CiAgICAgIHZhciBuID0gW10sIHQ7CiAgICAgIGZvciAodCBpbiBmbikKICAgICAgICBmbi5oYXNPd25Qcm9wZXJ0eSh0KSAmJiBuLnB1c2goZm5bdF0pOwogICAgICByZXR1cm4gbjsKICAgIH0sIGUuZmx1c2hQZW5kaW5nRGVsZXRlcyA9IEhuLCBlLnNldERlbGF5RnVuY3Rpb24gPSBmdW5jdGlvbihuKSB7CiAgICAgIGxuID0gbiwgY24ubGVuZ3RoICYmIGxuICYmIGxuKEhuKTsKICAgIH0sIHZ0ID0gZS5VbmJvdW5kVHlwZUVycm9yID0gTG4oIlVuYm91bmRUeXBlRXJyb3IiKSwgZS5jb3VudF9lbXZhbF9oYW5kbGVzID0gZnVuY3Rpb24oKSB7CiAgICAgIGZvciAodmFyIG4gPSAwLCB0ID0gNTsgdCA8IEkubGVuZ3RoOyArK3QpCiAgICAgICAgSVt0XSAhPT0gdm9pZCAwICYmICsrbjsKICAgICAgcmV0dXJuIG47CiAgICB9LCBlLmdldF9maXJzdF9lbXZhbCA9IGZ1bmN0aW9uKCkgewogICAgICBmb3IgKHZhciBuID0gNTsgbiA8IEkubGVuZ3RoOyArK24pCiAgICAgICAgaWYgKElbbl0gIT09IHZvaWQgMCkKICAgICAgICAgIHJldHVybiBJW25dOwogICAgICByZXR1cm4gbnVsbDsKICAgIH0sIGl0LnB1c2goeyBCYTogZnVuY3Rpb24oKSB7CiAgICAgIFN0KCk7CiAgICB9IH0pOwogICAgdmFyIG9lID0gewogICAgICB6OiBmdW5jdGlvbihuKSB7CiAgICAgICAgcmV0dXJuIFRuKG4gKyAxNikgKyAxNjsKICAgICAgfSwKICAgICAgdTogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIHRocm93IG5ldyAkdChuKS5GYSh0LCByKSwgInVuY2F1Z2h0X2V4Y2VwdGlvbiIgaW4gbW4gPyBtbi54YSsrIDogbW4ueGEgPSAxLCBuOwogICAgICB9LAogICAgICB3OiBmdW5jdGlvbihuLCB0LCByLCBpLCBhKSB7CiAgICAgICAgdmFyIHMgPSB4bihyKTsKICAgICAgICB0ID0gVyh0KSwgSChuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oYykgewogICAgICAgICAgcmV0dXJuICEhYzsKICAgICAgICB9LCB0b1dpcmVUeXBlOiBmdW5jdGlvbihjLCBsKSB7CiAgICAgICAgICByZXR1cm4gbCA/IGkgOiBhOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogZnVuY3Rpb24oYykgewogICAgICAgICAgaWYgKHIgPT09IDEpCiAgICAgICAgICAgIHZhciBsID0gWTsKICAgICAgICAgIGVsc2UgaWYgKHIgPT09IDIpCiAgICAgICAgICAgIGwgPSBROwogICAgICAgICAgZWxzZSBpZiAociA9PT0gNCkKICAgICAgICAgICAgbCA9IE87CiAgICAgICAgICBlbHNlCiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gYm9vbGVhbiB0eXBlIHNpemU6ICIgKyB0KTsKICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShsW2MgPj4gc10pOwogICAgICAgIH0sIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBpOiBmdW5jdGlvbihuLCB0LCByLCBpLCBhLCBzLCBjLCBsLCBwLCBmLCBkLCBoLCBBKSB7CiAgICAgICAgZCA9IFcoZCksIHMgPSBWKGEsIHMpLCBsICYmIChsID0gVihjLCBsKSksIGYgJiYgKGYgPSBWKHAsIGYpKSwgQSA9IFYoaCwgQSk7CiAgICAgICAgdmFyIFAgPSBJbihkKTsKICAgICAgICBwdChQLCBmdW5jdGlvbigpIHsKICAgICAgICAgIGRuKCJDYW5ub3QgY29uc3RydWN0ICIgKyBkICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIFtpXSk7CiAgICAgICAgfSksIHRuKFtuLCB0LCByXSwgaSA/IFtpXSA6IFtdLCBmdW5jdGlvbih5KSB7CiAgICAgICAgICBpZiAoeSA9IHlbMF0sIGkpCiAgICAgICAgICAgIHZhciBOID0geS5lYSwgYiA9IE4ubWE7CiAgICAgICAgICBlbHNlCiAgICAgICAgICAgIGIgPSBCLnByb3RvdHlwZTsKICAgICAgICAgIHkgPSBqbihQLCBmdW5jdGlvbigpIHsKICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSAhPT0gaykKICAgICAgICAgICAgICB0aHJvdyBuZXcgbm4oIlVzZSAnbmV3JyB0byBjb25zdHJ1Y3QgIiArIGQpOwogICAgICAgICAgICBpZiAoTC5sYSA9PT0gdm9pZCAwKQogICAgICAgICAgICAgIHRocm93IG5ldyBubihkICsgIiBoYXMgbm8gYWNjZXNzaWJsZSBjb25zdHJ1Y3RvciIpOwogICAgICAgICAgICB2YXIgT3QgPSBMLmxhW2FyZ3VtZW50cy5sZW5ndGhdOwogICAgICAgICAgICBpZiAoT3QgPT09IHZvaWQgMCkKICAgICAgICAgICAgICB0aHJvdyBuZXcgbm4oIlRyaWVkIHRvIGludm9rZSBjdG9yIG9mICIgKyBkICsgIiB3aXRoIGludmFsaWQgbnVtYmVyIG9mIHBhcmFtZXRlcnMgKCIgKyBhcmd1bWVudHMubGVuZ3RoICsgIikgLSBleHBlY3RlZCAoIiArIE9iamVjdC5rZXlzKEwubGEpLnRvU3RyaW5nKCkgKyAiKSBwYXJhbWV0ZXJzIGluc3RlYWQhIik7CiAgICAgICAgICAgIHJldHVybiBPdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgICAgICAgfSk7CiAgICAgICAgICB2YXIgayA9IE9iamVjdC5jcmVhdGUoYiwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogeSB9IH0pOwogICAgICAgICAgeS5wcm90b3R5cGUgPSBrOwogICAgICAgICAgdmFyIEwgPSBuZXcgS3QoZCwgeSwgaywgQSwgTiwgcywgbCwgZik7CiAgICAgICAgICBOID0gbmV3IHooZCwgTCwgITAsICExKSwgYiA9IG5ldyB6KGQgKyAiKiIsIEwsICExLCAhMSk7CiAgICAgICAgICB2YXIgaG4gPSBuZXcgeihkICsgIiBjb25zdCoiLCBMLCAhMSwgITApOwogICAgICAgICAgcmV0dXJuIGh0W25dID0geyBwb2ludGVyVHlwZTogYiwgemE6IGhuIH0sIG10KFAsIHkpLCBbTiwgYiwgaG5dOwogICAgICAgIH0pOwogICAgICB9LAogICAgICBoOiBmdW5jdGlvbihuLCB0LCByLCBpLCBhLCBzKSB7CiAgICAgICAgWG4oMCA8IHQpOwogICAgICAgIHZhciBjID0gd3QodCwgcik7CiAgICAgICAgYSA9IFYoaSwgYSk7CiAgICAgICAgdmFyIGwgPSBbc10sIHAgPSBbXTsKICAgICAgICB0bihbXSwgW25dLCBmdW5jdGlvbihmKSB7CiAgICAgICAgICBmID0gZlswXTsKICAgICAgICAgIHZhciBkID0gImNvbnN0cnVjdG9yICIgKyBmLm5hbWU7CiAgICAgICAgICBpZiAoZi5lYS5sYSA9PT0gdm9pZCAwICYmIChmLmVhLmxhID0gW10pLCBmLmVhLmxhW3QgLSAxXSAhPT0gdm9pZCAwKQogICAgICAgICAgICB0aHJvdyBuZXcgbm4oIkNhbm5vdCByZWdpc3RlciBtdWx0aXBsZSBjb25zdHJ1Y3RvcnMgd2l0aCBpZGVudGljYWwgbnVtYmVyIG9mIHBhcmFtZXRlcnMgKCIgKyAodCAtIDEpICsgIikgZm9yIGNsYXNzICciICsgZi5uYW1lICsgIichIE92ZXJsb2FkIHJlc29sdXRpb24gaXMgY3VycmVudGx5IG9ubHkgcGVyZm9ybWVkIHVzaW5nIHRoZSBwYXJhbWV0ZXIgY291bnQsIG5vdCBhY3R1YWwgdHlwZSBpbmZvISIpOwogICAgICAgICAgcmV0dXJuIGYuZWEubGFbdCAtIDFdID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGRuKCJDYW5ub3QgY29uc3RydWN0ICIgKyBmLm5hbWUgKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgYyk7CiAgICAgICAgICB9LCB0bihbXSwgYywgZnVuY3Rpb24oaCkgewogICAgICAgICAgICByZXR1cm4gZi5lYS5sYVt0IC0gMV0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICBhcmd1bWVudHMubGVuZ3RoICE9PSB0IC0gMSAmJiB2KGQgKyAiIGNhbGxlZCB3aXRoICIgKyBhcmd1bWVudHMubGVuZ3RoICsgIiBhcmd1bWVudHMsIGV4cGVjdGVkICIgKyAodCAtIDEpKSwgcC5sZW5ndGggPSAwLCBsLmxlbmd0aCA9IHQ7CiAgICAgICAgICAgICAgZm9yICh2YXIgQSA9IDE7IEEgPCB0OyArK0EpCiAgICAgICAgICAgICAgICBsW0FdID0gaFtBXS50b1dpcmVUeXBlKAogICAgICAgICAgICAgICAgICBwLAogICAgICAgICAgICAgICAgICBhcmd1bWVudHNbQSAtIDFdCiAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgIHJldHVybiBBID0gYS5hcHBseShudWxsLCBsKSwgQ24ocCksIGhbMF0uZnJvbVdpcmVUeXBlKEEpOwogICAgICAgICAgICB9LCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgYjogZnVuY3Rpb24obiwgdCwgciwgaSwgYSwgcywgYywgbCwgcCwgZikgewogICAgICAgIHQgPSBXKHQpLCBhID0gVihpLCBhKSwgdG4oW10sIFtuXSwgZnVuY3Rpb24oZCkgewogICAgICAgICAgZCA9IGRbMF07CiAgICAgICAgICB2YXIgaCA9IGQubmFtZSArICIuIiArIHQsIEEgPSB7IGdldDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGRuKCJDYW5ub3QgYWNjZXNzICIgKyBoICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIFtyLCBjXSk7CiAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCB9OwogICAgICAgICAgcmV0dXJuIHAgPyBBLnNldCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBkbigiQ2Fubm90IGFjY2VzcyAiICsgaCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbciwgY10pOwogICAgICAgICAgfSA6IEEuc2V0ID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHYoaCArICIgaXMgYSByZWFkLW9ubHkgcHJvcGVydHkiKTsKICAgICAgICAgIH0sIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkLmVhLm1hLCB0LCBBKSwgdG4oW10sIHAgPyBbciwgY10gOiBbcl0sIGZ1bmN0aW9uKFApIHsKICAgICAgICAgICAgdmFyIHkgPSBQWzBdLCBOID0geyBnZXQ6IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIHZhciBrID0gQXQodGhpcywgZCwgaCArICIgZ2V0dGVyIik7CiAgICAgICAgICAgICAgcmV0dXJuIHkuZnJvbVdpcmVUeXBlKGEocywgaykpOwogICAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCB9OwogICAgICAgICAgICBpZiAocCkgewogICAgICAgICAgICAgIHAgPSBWKGwsIHApOwogICAgICAgICAgICAgIHZhciBiID0gUFsxXTsKICAgICAgICAgICAgICBOLnNldCA9IGZ1bmN0aW9uKGspIHsKICAgICAgICAgICAgICAgIHZhciBMID0gQXQodGhpcywgZCwgaCArICIgc2V0dGVyIiksIGhuID0gW107CiAgICAgICAgICAgICAgICBwKGYsIEwsIGIudG9XaXJlVHlwZShobiwgaykpLCBDbihobik7CiAgICAgICAgICAgICAgfTsKICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGQuZWEubWEsIHQsIE4pLCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgdjogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHQgPSBXKHQpLCBIKG4sIHsgbmFtZTogdCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihyKSB7CiAgICAgICAgICB2YXIgaSA9IElbcl0udmFsdWU7CiAgICAgICAgICByZXR1cm4gRG4ociksIGk7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24ociwgaSkgewogICAgICAgICAgcmV0dXJuIGVuKGkpOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBtOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgciA9IHhuKHIpLCB0ID0gVyh0KSwgSChuLCB7CiAgICAgICAgICBuYW1lOiB0LAogICAgICAgICAgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBpOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIGEpIHsKICAgICAgICAgICAgaWYgKHR5cGVvZiBhICE9ICJudW1iZXIiICYmIHR5cGVvZiBhICE9ICJib29sZWFuIikKICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCAiJyArIHJuKGEpICsgJyIgdG8gJyArIHRoaXMubmFtZSk7CiAgICAgICAgICAgIHJldHVybiBhOwogICAgICAgICAgfSwKICAgICAgICAgIGFyZ1BhY2tBZHZhbmNlOiA4LAogICAgICAgICAgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IGVlKHQsIHIpLAogICAgICAgICAga2E6IG51bGwKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgYzogZnVuY3Rpb24obiwgdCwgciwgaSwgYSwgcykgewogICAgICAgIHZhciBjID0gd3QodCwgcik7CiAgICAgICAgbiA9IFcobiksIGEgPSBWKGksIGEpLCBwdChuLCBmdW5jdGlvbigpIHsKICAgICAgICAgIGRuKCJDYW5ub3QgY2FsbCAiICsgbiArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBjKTsKICAgICAgICB9LCB0IC0gMSksIHRuKFtdLCBjLCBmdW5jdGlvbihsKSB7CiAgICAgICAgICB2YXIgcCA9IG4sIGYgPSBuOwogICAgICAgICAgbCA9IFtsWzBdLCBudWxsXS5jb25jYXQobC5zbGljZSgxKSk7CiAgICAgICAgICB2YXIgZCA9IGEsIGggPSBsLmxlbmd0aDsKICAgICAgICAgIDIgPiBoICYmIHYoImFyZ1R5cGVzIGFycmF5IHNpemUgbWlzbWF0Y2ghIE11c3QgYXQgbGVhc3QgZ2V0IHJldHVybiB2YWx1ZSBhbmQgJ3RoaXMnIHR5cGVzISIpOwogICAgICAgICAgZm9yICh2YXIgQSA9IGxbMV0gIT09IG51bGwgJiYgITEsIFAgPSAhMSwgeSA9IDE7IHkgPCBsLmxlbmd0aDsgKyt5KQogICAgICAgICAgICBpZiAobFt5XSAhPT0gbnVsbCAmJiBsW3ldLmthID09PSB2b2lkIDApIHsKICAgICAgICAgICAgICBQID0gITA7CiAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgIH0KICAgICAgICAgIHZhciBOID0gbFswXS5uYW1lICE9PSAidm9pZCIsIGIgPSAiIiwgayA9ICIiOwogICAgICAgICAgZm9yICh5ID0gMDsgeSA8IGggLSAyOyArK3kpCiAgICAgICAgICAgIGIgKz0gKHkgIT09IDAgPyAiLCAiIDogIiIpICsgImFyZyIgKyB5LCBrICs9ICh5ICE9PSAwID8gIiwgIiA6ICIiKSArICJhcmciICsgeSArICJXaXJlZCI7CiAgICAgICAgICBmID0gInJldHVybiBmdW5jdGlvbiAiICsgSW4oZikgKyAiKCIgKyBiICsgYCkgewppZiAoYXJndW1lbnRzLmxlbmd0aCAhPT0gYCArIChoIC0gMikgKyBgKSB7CnRocm93QmluZGluZ0Vycm9yKCdmdW5jdGlvbiBgICsgZiArICIgY2FsbGVkIHdpdGggJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cywgZXhwZWN0ZWQgIiArIChoIC0gMikgKyBgIGFyZ3MhJyk7Cn0KYCwgUCAmJiAoZiArPSBgdmFyIGRlc3RydWN0b3JzID0gW107CmApOwogICAgICAgICAgdmFyIEwgPSBQID8gImRlc3RydWN0b3JzIiA6ICJudWxsIjsKICAgICAgICAgIGZvciAoYiA9ICJ0aHJvd0JpbmRpbmdFcnJvciBpbnZva2VyIGZuIHJ1bkRlc3RydWN0b3JzIHJldFR5cGUgY2xhc3NQYXJhbSIuc3BsaXQoIiAiKSwgZCA9IFt2LCBkLCBzLCBDbiwgbFswXSwgbFsxXV0sIEEgJiYgKGYgKz0gInZhciB0aGlzV2lyZWQgPSBjbGFzc1BhcmFtLnRvV2lyZVR5cGUoIiArIEwgKyBgLCB0aGlzKTsKYCksIHkgPSAwOyB5IDwgaCAtIDI7ICsreSkKICAgICAgICAgICAgZiArPSAidmFyIGFyZyIgKyB5ICsgIldpcmVkID0gYXJnVHlwZSIgKyB5ICsgIi50b1dpcmVUeXBlKCIgKyBMICsgIiwgYXJnIiArIHkgKyAiKTsgLy8gIiArIGxbeSArIDJdLm5hbWUgKyBgCmAsIGIucHVzaCgiYXJnVHlwZSIgKyB5KSwgZC5wdXNoKGxbeSArIDJdKTsKICAgICAgICAgIGlmIChBICYmIChrID0gInRoaXNXaXJlZCIgKyAoMCA8IGsubGVuZ3RoID8gIiwgIiA6ICIiKSArIGspLCBmICs9IChOID8gInZhciBydiA9ICIgOiAiIikgKyAiaW52b2tlcihmbiIgKyAoMCA8IGsubGVuZ3RoID8gIiwgIiA6ICIiKSArIGsgKyBgKTsKYCwgUCkKICAgICAgICAgICAgZiArPSBgcnVuRGVzdHJ1Y3RvcnMoZGVzdHJ1Y3RvcnMpOwpgOwogICAgICAgICAgZWxzZQogICAgICAgICAgICBmb3IgKHkgPSBBID8gMSA6IDI7IHkgPCBsLmxlbmd0aDsgKyt5KQogICAgICAgICAgICAgIGggPSB5ID09PSAxID8gInRoaXNXaXJlZCIgOiAiYXJnIiArICh5IC0gMikgKyAiV2lyZWQiLCBsW3ldLmthICE9PSBudWxsICYmIChmICs9IGggKyAiX2R0b3IoIiArIGggKyAiKTsgLy8gIiArIGxbeV0ubmFtZSArIGAKYCwgYi5wdXNoKGggKyAiX2R0b3IiKSwgZC5wdXNoKGxbeV0ua2EpKTsKICAgICAgICAgIHJldHVybiBOICYmIChmICs9IGB2YXIgcmV0ID0gcmV0VHlwZS5mcm9tV2lyZVR5cGUocnYpOwpyZXR1cm4gcmV0OwpgKSwgYi5wdXNoKGYgKyBgfQpgKSwgbCA9IHJlKGIpLmFwcGx5KG51bGwsIGQpLCBtdChwLCBsLCB0IC0gMSksIFtdOwogICAgICAgIH0pOwogICAgICB9LAogICAgICBlOiBmdW5jdGlvbihuLCB0LCByLCBpLCBhKSB7CiAgICAgICAgZnVuY3Rpb24gcyhmKSB7CiAgICAgICAgICByZXR1cm4gZjsKICAgICAgICB9CiAgICAgICAgdCA9IFcodCksIGEgPT09IC0xICYmIChhID0gNDI5NDk2NzI5NSk7CiAgICAgICAgdmFyIGMgPSB4bihyKTsKICAgICAgICBpZiAoaSA9PT0gMCkgewogICAgICAgICAgdmFyIGwgPSAzMiAtIDggKiByOwogICAgICAgICAgcyA9IGZ1bmN0aW9uKGYpIHsKICAgICAgICAgICAgcmV0dXJuIGYgPDwgbCA+Pj4gbDsKICAgICAgICAgIH07CiAgICAgICAgfQogICAgICAgIHZhciBwID0gdC5pbmRleE9mKCJ1bnNpZ25lZCIpICE9IC0xOwogICAgICAgIEgobiwgeyBuYW1lOiB0LCBmcm9tV2lyZVR5cGU6IHMsIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGYsIGQpIHsKICAgICAgICAgIGlmICh0eXBlb2YgZCAhPSAibnVtYmVyIiAmJiB0eXBlb2YgZCAhPSAiYm9vbGVhbiIpCiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0ICInICsgcm4oZCkgKyAnIiB0byAnICsgdGhpcy5uYW1lKTsKICAgICAgICAgIGlmIChkIDwgaSB8fCBkID4gYSkKICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUGFzc2luZyBhIG51bWJlciAiJyArIHJuKGQpICsgJyIgZnJvbSBKUyBzaWRlIHRvIEMvQysrIHNpZGUgdG8gYW4gYXJndW1lbnQgb2YgdHlwZSAiJyArIHQgKyAnIiwgd2hpY2ggaXMgb3V0c2lkZSB0aGUgdmFsaWQgcmFuZ2UgWycgKyBpICsgIiwgIiArIGEgKyAiXSEiKTsKICAgICAgICAgIHJldHVybiBwID8gZCA+Pj4gMCA6IGQgfCAwOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogaWUodCwgYywgaSAhPT0gMCksIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBkOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgZnVuY3Rpb24gaShzKSB7CiAgICAgICAgICBzID4+PSAyOwogICAgICAgICAgdmFyIGMgPSBVOwogICAgICAgICAgcmV0dXJuIG5ldyBhKEssIGNbcyArIDFdLCBjW3NdKTsKICAgICAgICB9CiAgICAgICAgdmFyIGEgPSBbSW50OEFycmF5LCBVaW50OEFycmF5LCBJbnQxNkFycmF5LCBVaW50MTZBcnJheSwgSW50MzJBcnJheSwgVWludDMyQXJyYXksIEZsb2F0MzJBcnJheSwgRmxvYXQ2NEFycmF5XVt0XTsKICAgICAgICByID0gVyhyKSwgSChuLCB7IG5hbWU6IHIsIGZyb21XaXJlVHlwZTogaSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBpIH0sIHsgRWE6ICEwIH0pOwogICAgICB9LAogICAgICBuOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdCA9IFcodCk7CiAgICAgICAgdmFyIHIgPSB0ID09PSAic3RkOjpzdHJpbmciOwogICAgICAgIEgobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICB2YXIgYSA9IFVbaSA+PiAyXTsKICAgICAgICAgICAgaWYgKHIpCiAgICAgICAgICAgICAgZm9yICh2YXIgcyA9IGkgKyA0LCBjID0gMDsgYyA8PSBhOyArK2MpIHsKICAgICAgICAgICAgICAgIHZhciBsID0gaSArIDQgKyBjOwogICAgICAgICAgICAgICAgaWYgKGMgPT0gYSB8fCBGW2xdID09IDApIHsKICAgICAgICAgICAgICAgICAgaWYgKHMpIHsKICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IHMsIGYgPSBGLCBkID0gcCArIChsIC0gcyk7CiAgICAgICAgICAgICAgICAgICAgZm9yIChzID0gcDsgZltzXSAmJiAhKHMgPj0gZCk7ICkKICAgICAgICAgICAgICAgICAgICAgICsrczsKICAgICAgICAgICAgICAgICAgICBpZiAoMTYgPCBzIC0gcCAmJiBmLnN1YmFycmF5ICYmIEtuKQogICAgICAgICAgICAgICAgICAgICAgcCA9IEtuLmRlY29kZShmLnN1YmFycmF5KHAsIHMpKTsKICAgICAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICAgIGZvciAoZCA9ICIiOyBwIDwgczsgKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoID0gZltwKytdOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAoaCAmIDEyOCkgewogICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBBID0gZltwKytdICYgNjM7CiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChoICYgMjI0KSA9PSAxOTIpCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGggJiAzMSkgPDwgNiB8IEEpOwogICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFAgPSBmW3ArK10gJiA2MzsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGggPSAoaCAmIDI0MCkgPT0gMjI0ID8gKGggJiAxNSkgPDwgMTIgfCBBIDw8IDYgfCBQIDogKGggJiA3KSA8PCAxOCB8IEEgPDwgMTIgfCBQIDw8IDYgfCBmW3ArK10gJiA2MywgNjU1MzYgPiBoID8gZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGgpIDogKGggLT0gNjU1MzYsIGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiB8IGggPj4gMTAsIDU2MzIwIHwgaCAmIDEwMjMpKTsKICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZQogICAgICAgICAgICAgICAgICAgICAgICAgIGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShoKTsKICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgIHAgPSBkOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgfSBlbHNlCiAgICAgICAgICAgICAgICAgICAgcCA9ICIiOwogICAgICAgICAgICAgICAgICBpZiAoeSA9PT0gdm9pZCAwKQogICAgICAgICAgICAgICAgICAgIHZhciB5ID0gcDsKICAgICAgICAgICAgICAgICAgZWxzZQogICAgICAgICAgICAgICAgICAgIHkgKz0gIlwwIiwgeSArPSBwOwogICAgICAgICAgICAgICAgICBzID0gbCArIDE7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICBmb3IgKHkgPSBBcnJheShhKSwgYyA9IDA7IGMgPCBhOyArK2MpCiAgICAgICAgICAgICAgICB5W2NdID0gU3RyaW5nLmZyb21DaGFyQ29kZShGW2kgKyA0ICsgY10pOwogICAgICAgICAgICAgIHkgPSB5LmpvaW4oIiIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiBEKGkpLCB5OwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIGEpIHsKICAgICAgICAgICAgYSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyICYmIChhID0gbmV3IFVpbnQ4QXJyYXkoYSkpOwogICAgICAgICAgICB2YXIgcyA9IHR5cGVvZiBhID09ICJzdHJpbmciOwogICAgICAgICAgICBzIHx8IGEgaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IGEgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSB8fCBhIGluc3RhbmNlb2YgSW50OEFycmF5IHx8IHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gc3RkOjpzdHJpbmciKTsKICAgICAgICAgICAgdmFyIGMgPSAociAmJiBzID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IDAsIGQgPSAwOyBkIDwgYS5sZW5ndGg7ICsrZCkgewogICAgICAgICAgICAgICAgdmFyIGggPSBhLmNoYXJDb2RlQXQoZCk7CiAgICAgICAgICAgICAgICA1NTI5NiA8PSBoICYmIDU3MzQzID49IGggJiYgKGggPSA2NTUzNiArICgoaCAmIDEwMjMpIDw8IDEwKSB8IGEuY2hhckNvZGVBdCgrK2QpICYgMTAyMyksIDEyNyA+PSBoID8gKytmIDogZiA9IDIwNDcgPj0gaCA/IGYgKyAyIDogNjU1MzUgPj0gaCA/IGYgKyAzIDogZiArIDQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHJldHVybiBmOwogICAgICAgICAgICB9IDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgcmV0dXJuIGEubGVuZ3RoOwogICAgICAgICAgICB9KSgpLCBsID0gVG4oNCArIGMgKyAxKTsKICAgICAgICAgICAgaWYgKFVbbCA+PiAyXSA9IGMsIHIgJiYgcykKICAgICAgICAgICAgICBOdChhLCBsICsgNCwgYyArIDEpOwogICAgICAgICAgICBlbHNlIGlmIChzKQogICAgICAgICAgICAgIGZvciAocyA9IDA7IHMgPCBjOyArK3MpIHsKICAgICAgICAgICAgICAgIHZhciBwID0gYS5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgICAgICAgMjU1IDwgcCAmJiAoRChsKSwgdigiU3RyaW5nIGhhcyBVVEYtMTYgY29kZSB1bml0cyB0aGF0IGRvIG5vdCBmaXQgaW4gOCBiaXRzIikpLCBGW2wgKyA0ICsgc10gPSBwOwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZQogICAgICAgICAgICAgIGZvciAocyA9IDA7IHMgPCBjOyArK3MpCiAgICAgICAgICAgICAgICBGW2wgKyA0ICsgc10gPSBhW3NdOwogICAgICAgICAgICByZXR1cm4gaSAhPT0gbnVsbCAmJiBpLnB1c2goRCwgbCksIGw7CiAgICAgICAgICB9LAogICAgICAgICAgYXJnUGFja0FkdmFuY2U6IDgsCiAgICAgICAgICByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sCiAgICAgICAgICBrYTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICBEKGkpOwogICAgICAgICAgfQogICAgICAgIH0pOwogICAgICB9LAogICAgICBqOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgaWYgKHIgPSBXKHIpLCB0ID09PSAyKQogICAgICAgICAgdmFyIGkgPSBVdCwgYSA9IEh0LCBzID0genQsIGMgPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgcmV0dXJuIHBuOwogICAgICAgICAgfSwgbCA9IDE7CiAgICAgICAgZWxzZQogICAgICAgICAgdCA9PT0gNCAmJiAoaSA9IER0LCBhID0gQnQsIHMgPSBWdCwgYyA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICByZXR1cm4gVTsKICAgICAgICAgIH0sIGwgPSAyKTsKICAgICAgICBIKG4sIHsgbmFtZTogciwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihwKSB7CiAgICAgICAgICBmb3IgKHZhciBmID0gVVtwID4+IDJdLCBkID0gYygpLCBoLCBBID0gcCArIDQsIFAgPSAwOyBQIDw9IGY7ICsrUCkgewogICAgICAgICAgICB2YXIgeSA9IHAgKyA0ICsgUCAqIHQ7CiAgICAgICAgICAgIChQID09IGYgfHwgZFt5ID4+IGxdID09IDApICYmIChBID0gaShBLCB5IC0gQSksIGggPT09IHZvaWQgMCA/IGggPSBBIDogKGggKz0gIlwwIiwgaCArPSBBKSwgQSA9IHkgKyB0KTsKICAgICAgICAgIH0KICAgICAgICAgIHJldHVybiBEKHApLCBoOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHAsIGYpIHsKICAgICAgICAgIHR5cGVvZiBmICE9ICJzdHJpbmciICYmIHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gQysrIHN0cmluZyB0eXBlICIgKyByKTsKICAgICAgICAgIHZhciBkID0gcyhmKSwgaCA9IFRuKDQgKyBkICsgdCk7CiAgICAgICAgICByZXR1cm4gVVtoID4+IDJdID0gZCA+PiBsLCBhKGYsIGggKyA0LCBkICsgdCksIHAgIT09IG51bGwgJiYgcC5wdXNoKEQsIGgpLCBoOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sIGthOiBmdW5jdGlvbihwKSB7CiAgICAgICAgICBEKHApOwogICAgICAgIH0gfSk7CiAgICAgIH0sCiAgICAgIHg6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gVyh0KSwgSChuLCB7IFFhOiAhMCwgbmFtZTogdCwgYXJnUGFja0FkdmFuY2U6IDAsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSB9KTsKICAgICAgfSwKICAgICAgazogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIG4gPSBCbihuKSwgdCA9IF90KHQsICJlbXZhbDo6YXMiKTsKICAgICAgICB2YXIgaSA9IFtdLCBhID0gZW4oaSk7CiAgICAgICAgcmV0dXJuIE9bciA+PiAyXSA9IGEsIHQudG9XaXJlVHlwZShpLCBuKTsKICAgICAgfSwKICAgICAgZzogRG4sCiAgICAgIGw6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICByZXR1cm4gbiA9IEJuKG4pLCB0ID0gQm4odCksIGVuKG5bdF0pOwogICAgICB9LAogICAgICBwOiBmdW5jdGlvbihuKSB7CiAgICAgICAgdmFyIHQgPSBhZVtuXTsKICAgICAgICByZXR1cm4gZW4odCA9PT0gdm9pZCAwID8gVyhuKSA6IHQpOwogICAgICB9LAogICAgICBvOiBmdW5jdGlvbihuKSB7CiAgICAgICAgQ24oSVtuXS52YWx1ZSksIERuKG4pOwogICAgICB9LAogICAgICB5OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgcmV0dXJuIG4gPSBfdChuLCAiX2VtdmFsX3Rha2VfdmFsdWUiKSwgbiA9IG4ucmVhZFZhbHVlRnJvbVBvaW50ZXIodCksIGVuKG4pOwogICAgICB9LAogICAgICBmOiBmdW5jdGlvbigpIHsKICAgICAgICBzbigpOwogICAgICB9LAogICAgICBxOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgRi5jb3B5V2l0aGluKG4sIHQsIHQgKyByKTsKICAgICAgfSwKICAgICAgcjogZnVuY3Rpb24obikgewogICAgICAgIG4gPj4+PSAwOwogICAgICAgIHZhciB0ID0gRi5sZW5ndGg7CiAgICAgICAgaWYgKDIxNDc0ODM2NDggPCBuKQogICAgICAgICAgcmV0dXJuICExOwogICAgICAgIGZvciAodmFyIHIgPSAxOyA0ID49IHI7IHIgKj0gMikgewogICAgICAgICAgdmFyIGkgPSB0ICogKDEgKyAwLjIgLyByKTsKICAgICAgICAgIGkgPSBNYXRoLm1pbihpLCBuICsgMTAwNjYzMjk2KSwgaSA9IE1hdGgubWF4KDE2Nzc3MjE2LCBuLCBpKSwgMCA8IGkgJSA2NTUzNiAmJiAoaSArPSA2NTUzNiAtIGkgJSA2NTUzNik7CiAgICAgICAgICBuOiB7CiAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgRy5ncm93KE1hdGgubWluKDIxNDc0ODM2NDgsIGkpIC0gSy5ieXRlTGVuZ3RoICsgNjU1MzUgPj4+IDE2KSwgdHQoRy5idWZmZXIpOwogICAgICAgICAgICAgIHZhciBhID0gMTsKICAgICAgICAgICAgICBicmVhayBuOwogICAgICAgICAgICB9IGNhdGNoIHsKICAgICAgICAgICAgfQogICAgICAgICAgICBhID0gdm9pZCAwOwogICAgICAgICAgfQogICAgICAgICAgaWYgKGEpCiAgICAgICAgICAgIHJldHVybiAhMDsKICAgICAgICB9CiAgICAgICAgcmV0dXJuICExOwogICAgICB9LAogICAgICBzOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSAwOwogICAgICAgIHJldHVybiBFdCgpLmZvckVhY2goZnVuY3Rpb24oaSwgYSkgewogICAgICAgICAgdmFyIHMgPSB0ICsgcjsKICAgICAgICAgIGZvciAoYSA9IE9bbiArIDQgKiBhID4+IDJdID0gcywgcyA9IDA7IHMgPCBpLmxlbmd0aDsgKytzKQogICAgICAgICAgICBZW2ErKyA+PiAwXSA9IGkuY2hhckNvZGVBdChzKTsKICAgICAgICAgIFlbYSA+PiAwXSA9IDAsIHIgKz0gaS5sZW5ndGggKyAxOwogICAgICAgIH0pLCAwOwogICAgICB9LAogICAgICB0OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSBFdCgpOwogICAgICAgIE9bbiA+PiAyXSA9IHIubGVuZ3RoOwogICAgICAgIHZhciBpID0gMDsKICAgICAgICByZXR1cm4gci5mb3JFYWNoKGZ1bmN0aW9uKGEpIHsKICAgICAgICAgIGkgKz0gYS5sZW5ndGggKyAxOwogICAgICAgIH0pLCBPW3QgPj4gMl0gPSBpLCAwOwogICAgICB9LAogICAgICBhOiBHCiAgICB9OwogICAgKGZ1bmN0aW9uKCkgewogICAgICBmdW5jdGlvbiBuKHMpIHsKICAgICAgICBzID0gcy5leHBvcnRzLCBzID0gTXQocyksIGUuYXNtID0gcywgWi0tLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKFopLCBaID09IDAgJiYgb24gJiYgKHMgPSBvbiwgb24gPSBudWxsLCBzKCkpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIHQocykgewogICAgICAgIG4ocy5pbnN0YW5jZSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gcihzKSB7CiAgICAgICAgcmV0dXJuIFp0KCkudGhlbihmdW5jdGlvbihjKSB7CiAgICAgICAgICByZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoYywgaSk7CiAgICAgICAgfSkudGhlbihzLCBmdW5jdGlvbihjKSB7CiAgICAgICAgICBTKCJmYWlsZWQgdG8gYXN5bmNocm9ub3VzbHkgcHJlcGFyZSB3YXNtOiAiICsgYyksIHNuKGMpOwogICAgICAgIH0pOwogICAgICB9CiAgICAgIHZhciBpID0geyBhOiBvZSB9OwogICAgICBpZiAoWisrLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKFopLCBlLmluc3RhbnRpYXRlV2FzbSkKICAgICAgICB0cnkgewogICAgICAgICAgdmFyIGEgPSBlLmluc3RhbnRpYXRlV2FzbShpLCBuKTsKICAgICAgICAgIHJldHVybiBhID0gTXQoYSk7CiAgICAgICAgfSBjYXRjaCAocykgewogICAgICAgICAgcmV0dXJuIFMoIk1vZHVsZS5pbnN0YW50aWF0ZVdhc20gY2FsbGJhY2sgZmFpbGVkIHdpdGggZXJyb3I6ICIgKyBzKSwgITE7CiAgICAgICAgfQogICAgICByZXR1cm4gZnVuY3Rpb24oKSB7CiAgICAgICAgaWYgKGogfHwgdHlwZW9mIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nICE9ICJmdW5jdGlvbiIgfHwgb3QoKSB8fCBSbigiZmlsZTovLyIpIHx8IHR5cGVvZiBmZXRjaCAhPSAiZnVuY3Rpb24iKQogICAgICAgICAgcmV0dXJuIHIodCk7CiAgICAgICAgZmV0Y2goJCwgeyBjcmVkZW50aWFsczogInNhbWUtb3JpZ2luIiB9KS50aGVuKGZ1bmN0aW9uKHMpIHsKICAgICAgICAgIHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyhzLCBpKS50aGVuKHQsIGZ1bmN0aW9uKGMpIHsKICAgICAgICAgICAgcmV0dXJuIFMoIndhc20gc3RyZWFtaW5nIGNvbXBpbGUgZmFpbGVkOiAiICsgYyksIFMoImZhbGxpbmcgYmFjayB0byBBcnJheUJ1ZmZlciBpbnN0YW50aWF0aW9uIiksIHIodCk7CiAgICAgICAgICB9KTsKICAgICAgICB9KTsKICAgICAgfSgpLCB7fTsKICAgIH0pKCk7CiAgICB2YXIgU3QgPSBlLl9fX3dhc21fY2FsbF9jdG9ycyA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKFN0ID0gZS5fX193YXNtX2NhbGxfY3RvcnMgPSBlLmFzbS5CKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgVG4gPSBlLl9tYWxsb2MgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChUbiA9IGUuX21hbGxvYyA9IGUuYXNtLkMpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBEID0gZS5fZnJlZSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKEQgPSBlLl9mcmVlID0gZS5hc20uRCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGJ0ID0gZS5fX19nZXRUeXBlTmFtZSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGJ0ID0gZS5fX19nZXRUeXBlTmFtZSA9IGUuYXNtLkUpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9OwogICAgZS5fX19lbWJpbmRfcmVnaXN0ZXJfbmF0aXZlX2FuZF9idWlsdGluX3R5cGVzID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fX19lbWJpbmRfcmVnaXN0ZXJfbmF0aXZlX2FuZF9idWlsdGluX3R5cGVzID0gZS5hc20uRikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paSA9IGUuYXNtLkcpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmkgPSBlLmFzbS5IKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2kgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaSA9IGUuYXNtLkkpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaSA9IGUuYXNtLkopLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpID0gZS5hc20uSykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9maWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfZmlpID0gZS5hc20uTCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlmID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWYgPSBlLmFzbS5NKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpID0gZS5hc20uTikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWkgPSBlLmFzbS5PKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWkgPSBlLmFzbS5QKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWkgPSBlLmFzbS5RKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpID0gZS5hc20uUikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWlpaSA9IGUuYXNtLlMpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWkgPSBlLmFzbS5UKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWlpaSA9IGUuYXNtLlUpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpaWRpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWlkaSA9IGUuYXNtLlYpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpZGkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpZGkgPSBlLmFzbS5XKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWlpID0gZS5hc20uWCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWkgPSBlLmFzbS5ZKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWkgPSBlLmFzbS5aKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaSA9IGUuYXNtLl8pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdGFydF91bndpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdGFydF91bndpbmQgPSBlLmFzbS4kKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RvcF91bndpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdG9wX3Vud2luZCA9IGUuYXNtLmFhKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RhcnRfcmV3aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RhcnRfcmV3aW5kID0gZS5hc20uYmEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdG9wX3Jld2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0b3BfcmV3aW5kID0gZS5hc20uY2EpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9OwogICAgdmFyIE1uOwogICAgb24gPSBmdW5jdGlvbiBuKCkgewogICAgICBNbiB8fCBHbigpLCBNbiB8fCAob24gPSBuKTsKICAgIH07CiAgICBmdW5jdGlvbiBHbigpIHsKICAgICAgZnVuY3Rpb24gbigpIHsKICAgICAgICBpZiAoIU1uICYmIChNbiA9ICEwLCBlLmNhbGxlZFJ1biA9ICEwLCAha24pKSB7CiAgICAgICAgICBpZiAoeW4oaXQpLCB5bihHdCksIG0oZSksIGUub25SdW50aW1lSW5pdGlhbGl6ZWQgJiYgZS5vblJ1bnRpbWVJbml0aWFsaXplZCgpLCBlLnBvc3RSdW4pCiAgICAgICAgICAgIGZvciAodHlwZW9mIGUucG9zdFJ1biA9PSAiZnVuY3Rpb24iICYmIChlLnBvc3RSdW4gPSBbZS5wb3N0UnVuXSk7IGUucG9zdFJ1bi5sZW5ndGg7ICkgewogICAgICAgICAgICAgIHZhciB0ID0gZS5wb3N0UnVuLnNoaWZ0KCk7CiAgICAgICAgICAgICAgYXQudW5zaGlmdCh0KTsKICAgICAgICAgICAgfQogICAgICAgICAgeW4oYXQpOwogICAgICAgIH0KICAgICAgfQogICAgICBpZiAoISgwIDwgWikpIHsKICAgICAgICBpZiAoZS5wcmVSdW4pCiAgICAgICAgICBmb3IgKHR5cGVvZiBlLnByZVJ1biA9PSAiZnVuY3Rpb24iICYmIChlLnByZVJ1biA9IFtlLnByZVJ1bl0pOyBlLnByZVJ1bi5sZW5ndGg7ICkKICAgICAgICAgICAgWXQoKTsKICAgICAgICB5bihydCksIDAgPCBaIHx8IChlLnNldFN0YXR1cyA/IChlLnNldFN0YXR1cygiUnVubmluZy4uLiIpLCBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgICAgICAgICAgZS5zZXRTdGF0dXMoIiIpOwogICAgICAgICAgfSwgMSksIG4oKTsKICAgICAgICB9LCAxKSkgOiBuKCkpOwogICAgICB9CiAgICB9CiAgICBpZiAoZS5ydW4gPSBHbiwgZS5wcmVJbml0KQogICAgICBmb3IgKHR5cGVvZiBlLnByZUluaXQgPT0gImZ1bmN0aW9uIiAmJiAoZS5wcmVJbml0ID0gW2UucHJlSW5pdF0pOyAwIDwgZS5wcmVJbml0Lmxlbmd0aDsgKQogICAgICAgIGUucHJlSW5pdC5wb3AoKSgpOwogICAgcmV0dXJuIEduKCksIHUucmVhZHk7CiAgfTsKfSgpOwpjbGFzcyBwZSB7CiAgY29uc3RydWN0b3IoKSB7CiAgICBZbih0aGlzLCAic2FtV2FzbU1vZHVsZSIpOwogIH0KICBnZXRPdmVycmlkZGVuTW9kdWxlcyh1LCBlKSB7CiAgICByZXR1cm4gewogICAgICBsb2NhdGVGaWxlOiAobSkgPT4gbmV3IFVSTChlIHx8IG0sIHUpLmhyZWYKICAgIH07CiAgfQogIGFzeW5jIGhhbmRsZU1pc3NpbmdPckludmFsaWRTYW1Nb2R1bGUodSwgZSkgewogICAgdHJ5IHsKICAgICAgY29uc3QgbSA9IGF3YWl0IGZldGNoKHUpOwogICAgICBpZiAoIW0ub2spCiAgICAgICAgdGhyb3cgbmV3IHgoCiAgICAgICAgICBgVGhlIHBhdGggdG8gJHtlfSBpcyBpbmNvcnJlY3Qgb3IgdGhlIG1vZHVsZSBpcyBtaXNzaW5nLiBQbGVhc2UgY2hlY2sgcHJvdmlkZWQgcGF0aCB0byB3YXNtIGZpbGVzLiBDdXJyZW50IHBhdGggaXMgJHt1fWAKICAgICAgICApOwogICAgICBjb25zdCBnID0gYXdhaXQgbS5hcnJheUJ1ZmZlcigpOwogICAgICBpZiAoIVdlYkFzc2VtYmx5LnZhbGlkYXRlKGcpKQogICAgICAgIHRocm93IG5ldyB4KAogICAgICAgICAgYFRoZSBwcm92aWRlZCAke2V9IGlzIG5vdCBhIHZhbGlkIFdBU00gbW9kdWxlLiBQbGVhc2UgY2hlY2sgcHJvdmlkZWQgcGF0aCB0byB3YXNtIGZpbGVzLiBDdXJyZW50IHBhdGggaXMgJHt1fWAKICAgICAgICApOwogICAgfSBjYXRjaCAobSkgewogICAgICBpZiAobSBpbnN0YW5jZW9mIHgpCiAgICAgICAgdGhyb3cgY29uc29sZS5lcnJvcigKICAgICAgICAgICJZb3UgY2FuIGZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBob3cgdG8gaG9zdCB3YXNtIGZpbGVzIGhlcmU6IGh0dHBzOi8vZGV2ZWxvcGVycy5pbm5vdmF0cmljcy5jb20vZGlnaXRhbC1vbmJvYXJkaW5nL3RlY2huaWNhbC9yZW1vdGUvZG90LXdlYi1kb2N1bWVudC9sYXRlc3QvZG9jdW1lbnRhdGlvbi8jX2hvc3Rpbmdfc2FtX3dhc20iCiAgICAgICAgKSwgbTsKICAgIH0KICB9CiAgYXN5bmMgZ2V0V2FzbUZpbGVOYW1lKCkgewogICAgcmV0dXJuIGF3YWl0IGxlKCkgPyBXdC5zaW1kIDogV3Quc2FtOwogIH0KICBhc3luYyBpbml0U2FtTW9kdWxlKHUsIGUgPSAiL3dhc20iKSB7CiAgICBpZiAodGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICByZXR1cm47CiAgICBjb25zdCBtID0gYXdhaXQgdGhpcy5nZXRXYXNtRmlsZU5hbWUoKSwgZyA9IGAke2V9LyR7bX1gOwogICAgdHJ5IHsKICAgICAgdGhpcy5zYW1XYXNtTW9kdWxlID0gYXdhaXQgaGUodGhpcy5nZXRPdmVycmlkZGVuTW9kdWxlcyh1LCBnKSk7CiAgICB9IGNhdGNoIHsKICAgICAgdGhyb3cgYXdhaXQgdGhpcy5oYW5kbGVNaXNzaW5nT3JJbnZhbGlkU2FtTW9kdWxlKGcsIG0pLCBuZXcgeCgiQ291bGQgbm90IGluaXQgZGV0ZWN0b3IuIik7CiAgICB9CiAgfQogIGFzeW5jIGdldFNhbVZlcnNpb24oKSB7CiAgICB2YXIgZTsKICAgIGNvbnN0IHUgPSBhd2FpdCAoKGUgPSB0aGlzLnNhbVdhc21Nb2R1bGUpID09IG51bGwgPyB2b2lkIDAgOiBlLmdldEluZm9TdHJpbmcoKSk7CiAgICByZXR1cm4gdSA9PSBudWxsID8gdm9pZCAwIDogdS50cmltKCk7CiAgfQogIC8qCiAgICogSW4gVFMgNS4yLjAgd2FzIGFkZGVkIHNwZWNpYWwga2V5d29yZCAidXNpbmciIHdoaWNoIGNvdWxkIGJlIHBlcmZlY3QgZm9yIHRoaXMgY2FzZS4KICAgKiBVbmZvcnR1bmF0ZWx5LCB2aXRlIHByZWFjdCBwbHVnaW4gZG9lcyBub3Qgc3VwcG9ydCB0aGlzIHZlcnNpb24gb2YgVFMgeWV0LgogICAqIENoZWNrIHBvc3NpYmlsaXR5IG9mIHVzaW5nICJ1c2luZyIga2V5d29yZCB3aGVuIHZpdGUgcHJlYWN0IHBsdWdpbiB1cGRhdGVzCiAgICovCiAgYWxsb2NhdGVNZW1vcnkodSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyB4KCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICByZXR1cm4gdGhpcy5zYW1XYXNtTW9kdWxlLl9tYWxsb2ModSk7CiAgfQogIHJlbGVhc2VNZW1vcnkodSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyB4KCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICB0aGlzLnNhbVdhc21Nb2R1bGUuX2ZyZWUodSk7CiAgfQogIHdyaXRlRGF0YVRvTWVtb3J5KHUsIGUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgeCgiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgdGhpcy5zYW1XYXNtTW9kdWxlLkhFQVBVOC5zZXQodSwgZSk7CiAgfQp9Ci8qKgogKiBAbGljZW5zZQogKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDCiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wCiAqLwpjb25zdCBSdCA9IFN5bWJvbCgiQ29tbGluay5wcm94eSIpLCB5ZSA9IFN5bWJvbCgiQ29tbGluay5lbmRwb2ludCIpLCBtZSA9IFN5bWJvbCgiQ29tbGluay5yZWxlYXNlUHJveHkiKSwgWm4gPSBTeW1ib2woIkNvbWxpbmsuZmluYWxpemVyIiksIFNuID0gU3ltYm9sKCJDb21saW5rLnRocm93biIpLCBGdCA9IChvKSA9PiB0eXBlb2YgbyA9PSAib2JqZWN0IiAmJiBvICE9PSBudWxsIHx8IHR5cGVvZiBvID09ICJmdW5jdGlvbiIsIHZlID0gewogIGNhbkhhbmRsZTogKG8pID0+IEZ0KG8pICYmIG9bUnRdLAogIHNlcmlhbGl6ZShvKSB7CiAgICBjb25zdCB7IHBvcnQxOiB1LCBwb3J0MjogZSB9ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7CiAgICByZXR1cm4gSm4obywgdSksIFtlLCBbZV1dOwogIH0sCiAgZGVzZXJpYWxpemUobykgewogICAgcmV0dXJuIG8uc3RhcnQoKSwgX2Uobyk7CiAgfQp9LCBnZSA9IHsKICBjYW5IYW5kbGU6IChvKSA9PiBGdChvKSAmJiBTbiBpbiBvLAogIHNlcmlhbGl6ZSh7IHZhbHVlOiBvIH0pIHsKICAgIGxldCB1OwogICAgcmV0dXJuIG8gaW5zdGFuY2VvZiBFcnJvciA/IHUgPSB7CiAgICAgIGlzRXJyb3I6ICEwLAogICAgICB2YWx1ZTogewogICAgICAgIG1lc3NhZ2U6IG8ubWVzc2FnZSwKICAgICAgICBuYW1lOiBvLm5hbWUsCiAgICAgICAgc3RhY2s6IG8uc3RhY2sKICAgICAgfQogICAgfSA6IHUgPSB7IGlzRXJyb3I6ICExLCB2YWx1ZTogbyB9LCBbdSwgW11dOwogIH0sCiAgZGVzZXJpYWxpemUobykgewogICAgdGhyb3cgby5pc0Vycm9yID8gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3Ioby52YWx1ZS5tZXNzYWdlKSwgby52YWx1ZSkgOiBvLnZhbHVlOwogIH0KfSwgeHQgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcChbCiAgWyJwcm94eSIsIHZlXSwKICBbInRocm93IiwgZ2VdCl0pOwpmdW5jdGlvbiB3ZShvLCB1KSB7CiAgZm9yIChjb25zdCBlIG9mIG8pCiAgICBpZiAodSA9PT0gZSB8fCBlID09PSAiKiIgfHwgZSBpbnN0YW5jZW9mIFJlZ0V4cCAmJiBlLnRlc3QodSkpCiAgICAgIHJldHVybiAhMDsKICByZXR1cm4gITE7Cn0KZnVuY3Rpb24gSm4obywgdSA9IGdsb2JhbFRoaXMsIGUgPSBbIioiXSkgewogIHUuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGZ1bmN0aW9uIG0oZykgewogICAgaWYgKCFnIHx8ICFnLmRhdGEpCiAgICAgIHJldHVybjsKICAgIGlmICghd2UoZSwgZy5vcmlnaW4pKSB7CiAgICAgIGNvbnNvbGUud2FybihgSW52YWxpZCBvcmlnaW4gJyR7Zy5vcmlnaW59JyBmb3IgY29tbGluayBwcm94eWApOwogICAgICByZXR1cm47CiAgICB9CiAgICBjb25zdCB7IGlkOiBfLCB0eXBlOiB3LCBwYXRoOiBUIH0gPSBPYmplY3QuYXNzaWduKHsgcGF0aDogW10gfSwgZy5kYXRhKSwgTSA9IChnLmRhdGEuYXJndW1lbnRMaXN0IHx8IFtdKS5tYXAoWCk7CiAgICBsZXQgRTsKICAgIHRyeSB7CiAgICAgIGNvbnN0IEMgPSBULnNsaWNlKDAsIC0xKS5yZWR1Y2UoKFMsIGopID0+IFNbal0sIG8pLCBSID0gVC5yZWR1Y2UoKFMsIGopID0+IFNbal0sIG8pOwogICAgICBzd2l0Y2ggKHcpIHsKICAgICAgICBjYXNlICJHRVQiOgogICAgICAgICAgRSA9IFI7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJTRVQiOgogICAgICAgICAgQ1tULnNsaWNlKC0xKVswXV0gPSBYKGcuZGF0YS52YWx1ZSksIEUgPSAhMDsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIkFQUExZIjoKICAgICAgICAgIEUgPSBSLmFwcGx5KEMsIE0pOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiQ09OU1RSVUNUIjoKICAgICAgICAgIHsKICAgICAgICAgICAgY29uc3QgUyA9IG5ldyBSKC4uLk0pOwogICAgICAgICAgICBFID0gUGUoUyk7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJFTkRQT0lOVCI6CiAgICAgICAgICB7CiAgICAgICAgICAgIGNvbnN0IHsgcG9ydDE6IFMsIHBvcnQyOiBqIH0gPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTsKICAgICAgICAgICAgSm4obywgaiksIEUgPSBNZShTLCBbU10pOwogICAgICAgICAgfQogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiUkVMRUFTRSI6CiAgICAgICAgICBFID0gdm9pZCAwOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHJldHVybjsKICAgICAgfQogICAgfSBjYXRjaCAoQykgewogICAgICBFID0geyB2YWx1ZTogQywgW1NuXTogMCB9OwogICAgfQogICAgUHJvbWlzZS5yZXNvbHZlKEUpLmNhdGNoKChDKSA9PiAoeyB2YWx1ZTogQywgW1NuXTogMCB9KSkudGhlbigoQykgPT4gewogICAgICBjb25zdCBbUiwgU10gPSBXbihDKTsKICAgICAgdS5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIFIpLCB7IGlkOiBfIH0pLCBTKSwgdyA9PT0gIlJFTEVBU0UiICYmICh1LnJlbW92ZUV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBtKSwgSXQodSksIFpuIGluIG8gJiYgdHlwZW9mIG9bWm5dID09ICJmdW5jdGlvbiIgJiYgb1tabl0oKSk7CiAgICB9KS5jYXRjaCgoQykgPT4gewogICAgICBjb25zdCBbUiwgU10gPSBXbih7CiAgICAgICAgdmFsdWU6IG5ldyBUeXBlRXJyb3IoIlVuc2VyaWFsaXphYmxlIHJldHVybiB2YWx1ZSIpLAogICAgICAgIFtTbl06IDAKICAgICAgfSk7CiAgICAgIHUucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBSKSwgeyBpZDogXyB9KSwgUyk7CiAgICB9KTsKICB9KSwgdS5zdGFydCAmJiB1LnN0YXJ0KCk7Cn0KZnVuY3Rpb24gQWUobykgewogIHJldHVybiBvLmNvbnN0cnVjdG9yLm5hbWUgPT09ICJNZXNzYWdlUG9ydCI7Cn0KZnVuY3Rpb24gSXQobykgewogIEFlKG8pICYmIG8uY2xvc2UoKTsKfQpmdW5jdGlvbiBfZShvLCB1KSB7CiAgcmV0dXJuICRuKG8sIFtdLCB1KTsKfQpmdW5jdGlvbiBQbihvKSB7CiAgaWYgKG8pCiAgICB0aHJvdyBuZXcgRXJyb3IoIlByb3h5IGhhcyBiZWVuIHJlbGVhc2VkIGFuZCBpcyBub3QgdXNlYWJsZSIpOwp9CmZ1bmN0aW9uIGp0KG8pIHsKICByZXR1cm4gYW4obywgewogICAgdHlwZTogIlJFTEVBU0UiCiAgfSkudGhlbigoKSA9PiB7CiAgICBJdChvKTsKICB9KTsKfQpjb25zdCBibiA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpLCBPbiA9ICJGaW5hbGl6YXRpb25SZWdpc3RyeSIgaW4gZ2xvYmFsVGhpcyAmJiBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoKG8pID0+IHsKICBjb25zdCB1ID0gKGJuLmdldChvKSB8fCAwKSAtIDE7CiAgYm4uc2V0KG8sIHUpLCB1ID09PSAwICYmIGp0KG8pOwp9KTsKZnVuY3Rpb24gQ2UobywgdSkgewogIGNvbnN0IGUgPSAoYm4uZ2V0KHUpIHx8IDApICsgMTsKICBibi5zZXQodSwgZSksIE9uICYmIE9uLnJlZ2lzdGVyKG8sIHUsIG8pOwp9CmZ1bmN0aW9uIEVlKG8pIHsKICBPbiAmJiBPbi51bnJlZ2lzdGVyKG8pOwp9CmZ1bmN0aW9uICRuKG8sIHUgPSBbXSwgZSA9IGZ1bmN0aW9uKCkgewp9KSB7CiAgbGV0IG0gPSAhMTsKICBjb25zdCBnID0gbmV3IFByb3h5KGUsIHsKICAgIGdldChfLCB3KSB7CiAgICAgIGlmIChQbihtKSwgdyA9PT0gbWUpCiAgICAgICAgcmV0dXJuICgpID0+IHsKICAgICAgICAgIEVlKGcpLCBqdChvKSwgbSA9ICEwOwogICAgICAgIH07CiAgICAgIGlmICh3ID09PSAidGhlbiIpIHsKICAgICAgICBpZiAodS5sZW5ndGggPT09IDApCiAgICAgICAgICByZXR1cm4geyB0aGVuOiAoKSA9PiBnIH07CiAgICAgICAgY29uc3QgVCA9IGFuKG8sIHsKICAgICAgICAgIHR5cGU6ICJHRVQiLAogICAgICAgICAgcGF0aDogdS5tYXAoKE0pID0+IE0udG9TdHJpbmcoKSkKICAgICAgICB9KS50aGVuKFgpOwogICAgICAgIHJldHVybiBULnRoZW4uYmluZChUKTsKICAgICAgfQogICAgICByZXR1cm4gJG4obywgWy4uLnUsIHddKTsKICAgIH0sCiAgICBzZXQoXywgdywgVCkgewogICAgICBQbihtKTsKICAgICAgY29uc3QgW00sIEVdID0gV24oVCk7CiAgICAgIHJldHVybiBhbihvLCB7CiAgICAgICAgdHlwZTogIlNFVCIsCiAgICAgICAgcGF0aDogWy4uLnUsIHddLm1hcCgoQykgPT4gQy50b1N0cmluZygpKSwKICAgICAgICB2YWx1ZTogTQogICAgICB9LCBFKS50aGVuKFgpOwogICAgfSwKICAgIGFwcGx5KF8sIHcsIFQpIHsKICAgICAgUG4obSk7CiAgICAgIGNvbnN0IE0gPSB1W3UubGVuZ3RoIC0gMV07CiAgICAgIGlmIChNID09PSB5ZSkKICAgICAgICByZXR1cm4gYW4obywgewogICAgICAgICAgdHlwZTogIkVORFBPSU5UIgogICAgICAgIH0pLnRoZW4oWCk7CiAgICAgIGlmIChNID09PSAiYmluZCIpCiAgICAgICAgcmV0dXJuICRuKG8sIHUuc2xpY2UoMCwgLTEpKTsKICAgICAgY29uc3QgW0UsIENdID0ga3QoVCk7CiAgICAgIHJldHVybiBhbihvLCB7CiAgICAgICAgdHlwZTogIkFQUExZIiwKICAgICAgICBwYXRoOiB1Lm1hcCgoUikgPT4gUi50b1N0cmluZygpKSwKICAgICAgICBhcmd1bWVudExpc3Q6IEUKICAgICAgfSwgQykudGhlbihYKTsKICAgIH0sCiAgICBjb25zdHJ1Y3QoXywgdykgewogICAgICBQbihtKTsKICAgICAgY29uc3QgW1QsIE1dID0ga3Qodyk7CiAgICAgIHJldHVybiBhbihvLCB7CiAgICAgICAgdHlwZTogIkNPTlNUUlVDVCIsCiAgICAgICAgcGF0aDogdS5tYXAoKEUpID0+IEUudG9TdHJpbmcoKSksCiAgICAgICAgYXJndW1lbnRMaXN0OiBUCiAgICAgIH0sIE0pLnRoZW4oWCk7CiAgICB9CiAgfSk7CiAgcmV0dXJuIENlKGcsIG8pLCBnOwp9CmZ1bmN0aW9uIFRlKG8pIHsKICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgbyk7Cn0KZnVuY3Rpb24ga3QobykgewogIGNvbnN0IHUgPSBvLm1hcChXbik7CiAgcmV0dXJuIFt1Lm1hcCgoZSkgPT4gZVswXSksIFRlKHUubWFwKChlKSA9PiBlWzFdKSldOwp9CmNvbnN0IEx0ID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7CmZ1bmN0aW9uIE1lKG8sIHUpIHsKICByZXR1cm4gTHQuc2V0KG8sIHUpLCBvOwp9CmZ1bmN0aW9uIFBlKG8pIHsKICByZXR1cm4gT2JqZWN0LmFzc2lnbihvLCB7IFtSdF06ICEwIH0pOwp9CmZ1bmN0aW9uIFduKG8pIHsKICBmb3IgKGNvbnN0IFt1LCBlXSBvZiB4dCkKICAgIGlmIChlLmNhbkhhbmRsZShvKSkgewogICAgICBjb25zdCBbbSwgZ10gPSBlLnNlcmlhbGl6ZShvKTsKICAgICAgcmV0dXJuIFsKICAgICAgICB7CiAgICAgICAgICB0eXBlOiAiSEFORExFUiIsCiAgICAgICAgICBuYW1lOiB1LAogICAgICAgICAgdmFsdWU6IG0KICAgICAgICB9LAogICAgICAgIGcKICAgICAgXTsKICAgIH0KICByZXR1cm4gWwogICAgewogICAgICB0eXBlOiAiUkFXIiwKICAgICAgdmFsdWU6IG8KICAgIH0sCiAgICBMdC5nZXQobykgfHwgW10KICBdOwp9CmZ1bmN0aW9uIFgobykgewogIHN3aXRjaCAoby50eXBlKSB7CiAgICBjYXNlICJIQU5ETEVSIjoKICAgICAgcmV0dXJuIHh0LmdldChvLm5hbWUpLmRlc2VyaWFsaXplKG8udmFsdWUpOwogICAgY2FzZSAiUkFXIjoKICAgICAgcmV0dXJuIG8udmFsdWU7CiAgfQp9CmZ1bmN0aW9uIGFuKG8sIHUsIGUpIHsKICByZXR1cm4gbmV3IFByb21pc2UoKG0pID0+IHsKICAgIGNvbnN0IGcgPSBTZSgpOwogICAgby5hZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgZnVuY3Rpb24gXyh3KSB7CiAgICAgICF3LmRhdGEgfHwgIXcuZGF0YS5pZCB8fCB3LmRhdGEuaWQgIT09IGcgfHwgKG8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIF8pLCBtKHcuZGF0YSkpOwogICAgfSksIG8uc3RhcnQgJiYgby5zdGFydCgpLCBvLnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oeyBpZDogZyB9LCB1KSwgZSk7CiAgfSk7Cn0KZnVuY3Rpb24gU2UoKSB7CiAgcmV0dXJuIG5ldyBBcnJheSg0KS5maWxsKDApLm1hcCgoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikudG9TdHJpbmcoMTYpKS5qb2luKCItIik7Cn0KZnVuY3Rpb24gYmUoewogIGJvdHRvbVJpZ2h0WDogbywKICBib3R0b21SaWdodFk6IHUsCiAgdG9wTGVmdFg6IGUsCiAgdG9wTGVmdFk6IG0KfSwgZykgewogIGNvbnN0IF8gPSBNYXRoLmFicyhvIC0gZSksIHcgPSBNYXRoLmFicyh1IC0gbSksIFQgPSBNYXRoLm1heChfLCB3KSAqIDAuMzM3NSwgTSA9IGRlKGcud2lkdGgsIGcuaGVpZ2h0KTsKICByZXR1cm4gZmUoVCAvIE0pOwp9CmNsYXNzIE9lIGV4dGVuZHMgcGUgewogIHBhcnNlUmF3RGF0YSh1LCBlKSB7CiAgICBjb25zdCB7IGJyaWdodG5lc3M6IG0sIHNoYXJwbmVzczogZyB9ID0gdS5wYXJhbXMsIHsgYm90dG9tUmlnaHRYOiBfLCBib3R0b21SaWdodFk6IHcsIHRvcExlZnRYOiBULCB0b3BMZWZ0WTogTSB9ID0gdSwgRSA9IGJlKHsgYm90dG9tUmlnaHRYOiBfLCBib3R0b21SaWdodFk6IHcsIHRvcExlZnRYOiBULCB0b3BMZWZ0WTogTSB9LCBlKTsKICAgIHJldHVybiB7CiAgICAgIGNvbmZpZGVuY2U6IHUucHJvYmFiaWxpdHkgLyAxZTMsCiAgICAgIHRvcExlZnQ6IHsKICAgICAgICB4OiBULAogICAgICAgIHk6IE0KICAgICAgfSwKICAgICAgYm90dG9tUmlnaHQ6IHsKICAgICAgICB4OiBfLAogICAgICAgIHk6IHcKICAgICAgfSwKICAgICAgZmFjZUNlbnRlcjogewogICAgICAgIHg6IChUICsgXykgLyAyLAogICAgICAgIHk6IChNICsgdykgLyAyCiAgICAgIH0sCiAgICAgIGZhY2VTaXplOiBFLAogICAgICBicmlnaHRuZXNzOiBtIC8gMWUzLAogICAgICBzaGFycG5lc3M6IGcgLyAxZTMKICAgIH07CiAgfQogIGFzeW5jIGRldGVjdCh1LCBlLCBtKSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IHgoIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIGNvbnN0IGcgPSB0aGlzLmFsbG9jYXRlTWVtb3J5KHUubGVuZ3RoICogdS5CWVRFU19QRVJfRUxFTUVOVCksIF8gPSB0aGlzLmFsbG9jYXRlTWVtb3J5KHUubGVuZ3RoICogdS5CWVRFU19QRVJfRUxFTUVOVCk7CiAgICB0aGlzLndyaXRlRGF0YVRvTWVtb3J5KHUsIGcpLCB0aGlzLnNhbVdhc21Nb2R1bGUuY29udmVydFRvU2FtQ29sb3JJbWFnZSgKICAgICAgZS53aWR0aCwKICAgICAgZS5oZWlnaHQsCiAgICAgIGcsCiAgICAgIGNlLlJHQkEsCiAgICAgIF8KICAgICk7CiAgICBjb25zdCB3ID0gdGhpcy5zYW1XYXNtTW9kdWxlLmRldGVjdEZhY2VXaXRoSW1hZ2VQYXJhbWV0ZXJzKAogICAgICBlLndpZHRoLAogICAgICBlLmhlaWdodCwKICAgICAgXywKICAgICAgMCwKICAgICAgLy8gcGFyYW1XaWR0aCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICAgMAogICAgICAvLyBwYXJhbUhlaWdodCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICk7CiAgICByZXR1cm4gdGhpcy5yZWxlYXNlTWVtb3J5KGcpLCB0aGlzLnJlbGVhc2VNZW1vcnkoXyksIHRoaXMucGFyc2VSYXdEYXRhKHcsIG0pOwogIH0KfQpKbihPZSk7Cg==", Ea = typeof window < "u" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);" + atob(Bs)], { type: "text/javascript;charset=utf-8" });
function dl(t) {
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
      "data:application/javascript;base64," + Bs,
      {
        type: "module",
        name: t == null ? void 0 : t.name
      }
    );
  }
}
const ki = class ki extends el {
  constructor() {
    super(...arguments);
    Q(this, "detector");
    Q(this, "className", "FaceController");
    Q(this, "fallbackInstruction", Ye.FACE_NOT_PRESENT);
    Q(this, "pitchAngleAccelerationThreshold", null);
    Q(this, "validateDetectedObject", (e, n) => {
      const { brightnessHighThreshold: i, brightnessLowThreshold: r, faceConfidence: a, maxFaceSizeRatio: g, minFaceSizeRatio: s, outOfBoundsThreshold: x, sharpnessThreshold: C } = this.getThresholds(), u = e.confidence > a, p = e.faceSize > s, f = e.faceSize < g, v = e.sharpness > C, w = e.brightness > r, E = e.brightness < i, k = Cl(x, e, n), G = ul(this.pitchAngleAccelerationThreshold, this.acceleration), H = {};
      return H.isPresent = u, H.isNotSmall = p, H.isNotLarge = f, H.isSharp = v, H.isNotDim = w, H.isNotBright = E, H.isNotOutOfBounds = k, H.isNotPitched = G, H;
    });
    Q(this, "getInstructionCode", (e, n) => {
      var r;
      if (this.isInCandidateSelection)
        return Ye.CANDIDATE_SELECTION;
      if ((r = this.lastImage) != null && r.isValid && n)
        return Ye.CANDIDATE_SELECTION;
      if (this.lastImage && n)
        return this.lastImage.instructionCode;
      const [i] = this.getInstructionCodesForValidators(e);
      return i ?? this.fallbackInstruction;
    });
    Q(this, "getInstructionCodesForValidators", (e) => {
      const n = [];
      return Object.entries(e).forEach(([i, r]) => {
        !r && n.push(pI[i]);
      }), n;
    });
  }
  static async init() {
    const e = new dl(), n = ys(e), i = new ki(), r = await new n();
    this._instance = i, this._instance.detector = r;
  }
  static async getInstance() {
    return !this._instance && await this.init(), this._instance;
  }
  setThresholds(e) {
    super.setThresholds(e);
    const { devicePitchAngleThreshold: n } = e;
    this.pitchAngleAccelerationThreshold = QI * Math.sin(n * (Math.PI / (-2314 * -1 + -5832 + 1849 * 2)));
  }
  restart() {
    super.restart(), Va(gt.INSTRUCTION_CHANGED, void (-66 * -139 + 9360 + -18534), KI);
  }
  async processImage(e) {
    var w;
    const n = {};
    n.width = e.width, n.height = e.height;
    const i = n, r = Cr(i), a = px(e, r), g = fx(a), s = {};
    s.width = a.width, s.height = a.height;
    const x = s;
    let C = await this.detector.detect(g, x, i);
    C = Dx(i, C);
    const u = this.validateDetectedObject(C, i), p = this.isDetectionValid(u), f = this.getInstructionCode(u, p);
    if (u.isPresent && this.collectImagesForDuplicateDetection(g), this.isInCandidateSelection) {
      if (this.bestImage && p && this.isNewImageBetter(this.bestImage.detection, C)) {
        const E = { image: e, detection: zt(C) };
        this.bestImage = E, this.candidateSelectionImages.push(E);
      }
    } else if ((w = this.lastImage) != null && w.isValid && p) {
      const E = { image: e, detection: zt(C) }, k = {};
      k.image = this.lastImage.image, k.detection = this.lastImage.detection;
      const G = k;
      this.isNewImageBetter(G.detection, E.detection) ? this.bestImage = E : this.bestImage = G, this.candidateSelectionImages.push(G, E), this.isInCandidateSelection = !0;
    } else
      p ? this.lastImage = { instructionCode: f, isValid: !0, image: e, detection: zt(C) } : this.lastImage = { instructionCode: f, isValid: !1, image: e, detection: zt(C) };
    const v = { detectedFace: zt(C), instructionCode: f, invalidValidators: this.getInstructionCodesForValidators(u), isInCandidateSelection: this.isInCandidateSelection };
    return this.detectionRecord.push(v.detectedFace), Va(gt.INSTRUCTION_CHANGED, f), Kx(gt.DETECTED_FACE_CHANGED, v.detectedFace, this.getThresholds().faceConfidence), Hx(gt.FACE_DETECTION, v.detectedFace, e), v;
  }
};
Q(ki, "_instance");
let jo = ki;
const Al = (t, o) => {
  const { handleError: e } = Ti(), [n, i] = Te(), { acceleration: r } = Tx();
  n && n.setAcceleration(r), Ae(() => {
    (async () => {
      const s = await jo.getInstance();
      try {
        const x = {};
        x.wasmDirectoryPath = o, x.thresholds = t, await s.init(x);
      } catch (x) {
        if (x instanceof Error) {
          e(_.fromError(x));
          return;
        }
      }
      i(s);
    })();
  }, [e, t, o]);
  const a = {};
  return a.controller = n, a;
};
var wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ss = {}, Pa = {}, pl = fl;
function fl(t, o) {
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
var Gs = {};
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
    for (var x = null, C = [], u = 0, p = 0, f; g < s; ) {
      var v = a[g++];
      switch (p) {
        case 0:
          C[u++] = e[v >> 2], f = (v & 3) << 4, p = 1;
          break;
        case 1:
          C[u++] = e[f | v >> 4], f = (v & 15) << 2, p = 2;
          break;
        case 2:
          C[u++] = e[f | v >> 6], C[u++] = e[v & 63], p = 0;
          break;
      }
      u > 8191 && ((x || (x = [])).push(String.fromCharCode.apply(String, C)), u = 0);
    }
    return p && (C[u++] = e[f], C[u++] = 61, p === 1 && (C[u++] = 61)), x ? (u && x.push(String.fromCharCode.apply(String, C.slice(0, u))), x.join("")) : String.fromCharCode.apply(String, C.slice(0, u));
  };
  var r = "invalid encoding";
  o.decode = function(a, g, s) {
    for (var x = s, C = 0, u, p = 0; p < a.length; ) {
      var f = a.charCodeAt(p++);
      if (f === 61 && C > 1)
        break;
      if ((f = n[f]) === void 0)
        throw Error(r);
      switch (C) {
        case 0:
          u = f, C = 1;
          break;
        case 1:
          g[s++] = u << 2 | (f & 48) >> 4, u = f, C = 2;
          break;
        case 2:
          g[s++] = (u & 15) << 4 | (f & 60) >> 2, u = f, C = 3;
          break;
        case 3:
          g[s++] = (u & 3) << 6 | f, C = 0;
          break;
      }
    }
    if (C === 1)
      throw Error(r);
    return s - x;
  }, o.test = function(a) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(a);
  };
})(Gs);
var hl = Fi;
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
var ml = Na(Na);
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
    t.writeFloatLE = o.bind(null, Ya), t.writeFloatBE = o.bind(null, Ta);
    function e(n, i, r) {
      var a = n(i, r), g = (a >> 31) * 2 + 1, s = a >>> 23 & 255, x = a & 8388607;
      return s === 255 ? x ? NaN : g * (1 / 0) : s === 0 ? g * 1401298464324817e-60 * x : g * Math.pow(2, s - 150) * (x + 8388608);
    }
    t.readFloatLE = e.bind(null, Da), t.readFloatBE = e.bind(null, Fa);
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
    t.writeDoubleLE = o.bind(null, Ya, 0, 4), t.writeDoubleBE = o.bind(null, Ta, 4, 0);
    function e(n, i, r, a, g) {
      var s = n(a, g + i), x = n(a, g + r), C = (x >> 31) * 2 + 1, u = x >>> 20 & 2047, p = 4294967296 * (x & 1048575) + s;
      return u === 2047 ? p ? NaN : C * (1 / 0) : u === 0 ? C * 5e-324 * p : C * Math.pow(2, u - 1075) * (p + 4503599627370496);
    }
    t.readDoubleLE = e.bind(null, Da, 0, 4), t.readDoubleBE = e.bind(null, Fa, 4, 0);
  }(), t;
}
function Ya(t, o, e) {
  o[e] = t & 255, o[e + 1] = t >>> 8 & 255, o[e + 2] = t >>> 16 & 255, o[e + 3] = t >>> 24;
}
function Ta(t, o, e) {
  o[e] = t >>> 24, o[e + 1] = t >>> 16 & 255, o[e + 2] = t >>> 8 & 255, o[e + 3] = t & 255;
}
function Da(t, o) {
  return (t[o] | t[o + 1] << 8 | t[o + 2] << 16 | t[o + 3] << 24) >>> 0;
}
function Fa(t, o) {
  return (t[o] << 24 | t[o + 1] << 16 | t[o + 2] << 8 | t[o + 3]) >>> 0;
}
function La(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var bl = yl;
function yl(t) {
  try {
    if (typeof La != "function")
      return null;
    var o = La(t);
    return o && (o.length || Object.keys(o).length) ? o : null;
  } catch {
    return null;
  }
}
var Zs = {};
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
})(Zs);
var vl = wl;
function wl(t, o, e) {
  var n = e || 8192, i = n >>> 1, r = null, a = n;
  return function(g) {
    if (g < 1 || g > i)
      return t(g);
    a + g > n && (r = t(n), a = 0);
    var s = o.call(r, a, a += g);
    return a & 7 && (a = (a | 7) + 1), s;
  };
}
var po, Xa;
function Bl() {
  if (Xa)
    return po;
  Xa = 1, po = o;
  var t = Pt();
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
  }, po;
}
var ja;
function Pt() {
  return ja || (ja = 1, function(t) {
    var o = t;
    o.asPromise = pl, o.base64 = Gs, o.EventEmitter = hl, o.float = ml, o.inquire = bl, o.utf8 = Zs, o.pool = vl, o.LongBits = Bl(), o.isNode = !!(typeof wt < "u" && wt && wt.process && wt.process.versions && wt.process.versions.node), o.global = o.isNode && wt || typeof window < "u" && window || typeof self < "u" && self || wt, o.emptyArray = Object.freeze ? Object.freeze([]) : (
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
var ks = X, Ve = Pt(), Mo, Li = Ve.LongBits, Ma = Ve.base64, Ua = Ve.utf8;
function Nn(t, o, e) {
  this.fn = t, this.len = o, this.next = void 0, this.val = e;
}
function dr() {
}
function Sl(t) {
  this.head = t.head, this.tail = t.tail, this.len = t.len, this.next = t.states;
}
function X() {
  this.len = 0, this.head = new Nn(dr, 0, 0), this.tail = this.head, this.states = null;
}
var Ks = function() {
  return Ve.Buffer ? function() {
    return (X.create = function() {
      return new Mo();
    })();
  } : function() {
    return new X();
  };
};
X.create = Ks();
X.alloc = function(t) {
  return new Ve.Array(t);
};
Ve.Array !== Array && (X.alloc = Ve.pool(X.alloc, Ve.Array.prototype.subarray));
X.prototype._push = function(t, o, e) {
  return this.tail = this.tail.next = new Nn(t, o, e), this.len += o, this;
};
function Ar(t, o, e) {
  o[e] = t & 255;
}
function Gl(t, o, e) {
  for (; t > 127; )
    o[e++] = t & 127 | 128, t >>>= 7;
  o[e] = t;
}
function pr(t, o) {
  this.len = t, this.next = void 0, this.val = o;
}
pr.prototype = Object.create(Nn.prototype);
pr.prototype.fn = Gl;
X.prototype.uint32 = function(t) {
  return this.len += (this.tail = this.tail.next = new pr(
    (t = t >>> 0) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : 5,
    t
  )).len, this;
};
X.prototype.int32 = function(t) {
  return t < 0 ? this._push(fr, 10, Li.fromNumber(t)) : this.uint32(t);
};
X.prototype.sint32 = function(t) {
  return this.uint32((t << 1 ^ t >> 31) >>> 0);
};
function fr(t, o, e) {
  for (; t.hi; )
    o[e++] = t.lo & 127 | 128, t.lo = (t.lo >>> 7 | t.hi << 25) >>> 0, t.hi >>>= 7;
  for (; t.lo > 127; )
    o[e++] = t.lo & 127 | 128, t.lo = t.lo >>> 7;
  o[e++] = t.lo;
}
X.prototype.uint64 = function(t) {
  var o = Li.from(t);
  return this._push(fr, o.length(), o);
};
X.prototype.int64 = X.prototype.uint64;
X.prototype.sint64 = function(t) {
  var o = Li.from(t).zzEncode();
  return this._push(fr, o.length(), o);
};
X.prototype.bool = function(t) {
  return this._push(Ar, 1, t ? 1 : 0);
};
function Uo(t, o, e) {
  o[e] = t & 255, o[e + 1] = t >>> 8 & 255, o[e + 2] = t >>> 16 & 255, o[e + 3] = t >>> 24;
}
X.prototype.fixed32 = function(t) {
  return this._push(Uo, 4, t >>> 0);
};
X.prototype.sfixed32 = X.prototype.fixed32;
X.prototype.fixed64 = function(t) {
  var o = Li.from(t);
  return this._push(Uo, 4, o.lo)._push(Uo, 4, o.hi);
};
X.prototype.sfixed64 = X.prototype.fixed64;
X.prototype.float = function(t) {
  return this._push(Ve.float.writeFloatLE, 4, t);
};
X.prototype.double = function(t) {
  return this._push(Ve.float.writeDoubleLE, 8, t);
};
var Zl = Ve.Array.prototype.set ? function(t, o, e) {
  o.set(t, e);
} : function(t, o, e) {
  for (var n = 0; n < t.length; ++n)
    o[e + n] = t[n];
};
X.prototype.bytes = function(t) {
  var o = t.length >>> 0;
  if (!o)
    return this._push(Ar, 1, 0);
  if (Ve.isString(t)) {
    var e = X.alloc(o = Ma.length(t));
    Ma.decode(t, e, 0), t = e;
  }
  return this.uint32(o)._push(Zl, o, t);
};
X.prototype.string = function(t) {
  var o = Ua.length(t);
  return o ? this.uint32(o)._push(Ua.write, o, t) : this._push(Ar, 1, 0);
};
X.prototype.fork = function() {
  return this.states = new Sl(this), this.head = this.tail = new Nn(dr, 0, 0), this.len = 0, this;
};
X.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Nn(dr, 0, 0), this.len = 0), this;
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
  Mo = t, X.create = Ks(), Mo._configure();
};
var kl = ze, Hs = ks;
(ze.prototype = Object.create(Hs.prototype)).constructor = ze;
var At = Pt();
function ze() {
  Hs.call(this);
}
ze._configure = function() {
  ze.alloc = At._Buffer_allocUnsafe, ze.writeBytesBuffer = At.Buffer && At.Buffer.prototype instanceof Uint8Array && At.Buffer.prototype.set.name === "set" ? function(t, o, e) {
    o.set(t, e);
  } : function(t, o, e) {
    if (t.copy)
      t.copy(o, e, 0, t.length);
    else
      for (var n = 0; n < t.length; )
        o[e++] = t[n++];
  };
};
ze.prototype.bytes = function(t) {
  At.isString(t) && (t = At._Buffer_from(t, "base64"));
  var o = t.length >>> 0;
  return this.uint32(o), o && this._push(ze.writeBytesBuffer, o, t), this;
};
function Kl(t, o, e) {
  t.length < 40 ? At.utf8.write(t, o, e) : o.utf8Write ? o.utf8Write(t, e) : o.write(t, e);
}
ze.prototype.string = function(t) {
  var o = At.Buffer.byteLength(t);
  return this.uint32(o), o && this._push(Kl, o, t), this;
};
ze._configure();
var Ws = oe, $e = Pt(), Jo, Os = $e.LongBits, Hl = $e.utf8;
function Le(t, o) {
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
}, Vs = function() {
  return $e.Buffer ? function(t) {
    return (oe.create = function(o) {
      return $e.Buffer.isBuffer(o) ? new Jo(o) : Ja(o);
    })(t);
  } : Ja;
};
oe.create = Vs();
oe.prototype._slice = $e.Array.prototype.subarray || /* istanbul ignore next */
$e.Array.prototype.slice;
oe.prototype.uint32 = /* @__PURE__ */ function() {
  var t = 4294967295;
  return function() {
    if (t = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (t = (t | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (t = (t | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (t = (t | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (t = (t | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return t;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, Le(this, 10);
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
function fo() {
  var t = new Os(0, 0), o = 0;
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
        throw Le(this);
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
        throw Le(this);
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
    throw Le(this, 4);
  return Gi(this.buf, this.pos += 4);
};
oe.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw Le(this, 4);
  return Gi(this.buf, this.pos += 4) | 0;
};
function Qa() {
  if (this.pos + 8 > this.len)
    throw Le(this, 8);
  return new Os(Gi(this.buf, this.pos += 4), Gi(this.buf, this.pos += 4));
}
oe.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw Le(this, 4);
  var t = $e.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, t;
};
oe.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw Le(this, 4);
  var t = $e.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, t;
};
oe.prototype.bytes = function() {
  var t = this.uint32(), o = this.pos, e = this.pos + t;
  if (e > this.len)
    throw Le(this, t);
  return this.pos += t, Array.isArray(this.buf) ? this.buf.slice(o, e) : o === e ? new this.buf.constructor(0) : this._slice.call(this.buf, o, e);
};
oe.prototype.string = function() {
  var t = this.bytes();
  return Hl.read(t, 0, t.length);
};
oe.prototype.skip = function(t) {
  if (typeof t == "number") {
    if (this.pos + t > this.len)
      throw Le(this, t);
    this.pos += t;
  } else
    do
      if (this.pos >= this.len)
        throw Le(this);
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
  Jo = t, oe.create = Vs(), Jo._configure();
  var o = $e.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  $e.merge(oe.prototype, {
    int64: function() {
      return fo.call(this)[o](!1);
    },
    uint64: function() {
      return fo.call(this)[o](!0);
    },
    sint64: function() {
      return fo.call(this).zzDecode()[o](!1);
    },
    fixed64: function() {
      return Qa.call(this)[o](!0);
    },
    sfixed64: function() {
      return Qa.call(this)[o](!1);
    }
  });
};
var Wl = Rt, Rs = Ws;
(Rt.prototype = Object.create(Rs.prototype)).constructor = Rt;
var za = Pt();
function Rt(t) {
  Rs.call(this, t);
}
Rt._configure = function() {
  za.Buffer && (Rt.prototype._slice = za.Buffer.prototype.slice);
};
Rt.prototype.string = function() {
  var t = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + t, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + t, this.len));
};
Rt._configure();
var Es = {}, Ol = Vn, hr = Pt();
(Vn.prototype = Object.create(hr.EventEmitter.prototype)).constructor = Vn;
function Vn(t, o, e) {
  if (typeof t != "function")
    throw TypeError("rpcImpl must be a function");
  hr.EventEmitter.call(this), this.rpcImpl = t, this.requestDelimited = !!o, this.responseDelimited = !!e;
}
Vn.prototype.rpcCall = function t(o, e, n, i, r) {
  if (!i)
    throw TypeError("request must be specified");
  var a = this;
  if (!r)
    return hr.asPromise(t, a, o, e, n, i);
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
Vn.prototype.end = function(t) {
  return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(t) {
  var o = t;
  o.Service = Ol;
})(Es);
var Vl = {};
(function(t) {
  var o = t;
  o.build = "minimal", o.Writer = ks, o.BufferWriter = kl, o.Reader = Ws, o.BufferReader = Wl, o.util = Pt(), o.rpc = Es, o.roots = Vl, o.configure = e;
  function e() {
    o.util._configure(), o.Writer._configure(o.BufferWriter), o.Reader._configure(o.BufferReader);
  }
  e();
})(Ss);
var ne = Ss;
const B = ne.Reader, Ce = ne.Writer, h = ne.util, d = ne.roots.default || (ne.roots.default = {}), Et = d.dot = (() => {
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
      return n || (n = Ce.create()), e.token != null && Object.hasOwnProperty.call(e, "token") && n.uint32(
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
        if (i || (i = Ce.create()), n.images != null && n.images.length)
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
        return r || (r = Ce.create()), i.platform != null && Object.hasOwnProperty.call(i, "platform") && r.uint32(
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
        if (r || (r = Ce.create()), i.supportedAbis != null && i.supportedAbis.length)
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
                let p = i.uint32();
                switch (p >>> 3) {
                  case 1:
                    s = i.string();
                    break;
                  case 2:
                    x = d.dot.Int32List.decode(i, i.uint32());
                    break;
                  default:
                    i.skipType(p & 7);
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
        if (i || (i = Ce.create()), n.device != null && Object.hasOwnProperty.call(n, "device") && i.uint32(
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
        if (i || (i = Ce.create()), n.currentCameraProperties != null && Object.hasOwnProperty.call(n, "currentCameraProperties") && d.dot.v3.MediaTrackSettings.encode(n.currentCameraProperties, i.uint32(
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
        return r || (r = Ce.create()), i.aspectRatio != null && Object.hasOwnProperty.call(i, "aspectRatio") && r.uint32(
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
        return i || (i = Ce.create()), n.width != null && Object.hasOwnProperty.call(n, "width") && i.uint32(
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
        return r || (r = Ce.create()), i.cameraInitFrameResolution != null && Object.hasOwnProperty.call(i, "cameraInitFrameResolution") && d.dot.v3.ImageBitmap.encode(i.cameraInitFrameResolution, r.uint32(
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
        return i || (i = Ce.create()), n.brightness != null && Object.hasOwnProperty.call(n, "brightness") && i.uint32(
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
        return i || (i = Ce.create()), n.x != null && Object.hasOwnProperty.call(n, "x") && i.uint32(
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
        return i || (i = Ce.create()), n.image != null && Object.hasOwnProperty.call(n, "image") && d.dot.Image.encode(n.image, i.uint32(
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
        return i || (i = Ce.create()), n.image != null && Object.hasOwnProperty.call(n, "image") && d.dot.Image.encode(n.image, i.uint32(
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
        return r || (r = Ce.create()), i.documentContent != null && Object.hasOwnProperty.call(i, "documentContent") && d.dot.v3.DocumentContent.encode(i.documentContent, r.uint32(
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
        return i || (i = Ce.create()), n.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(n, "neutralExpressionFaceImage") && d.dot.Image.encode(n.neutralExpressionFaceImage, i.uint32(
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
      return n || (n = Ce.create()), e.bytes != null && Object.hasOwnProperty.call(e, "bytes") && n.uint32(
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
      if (n || (n = Ce.create()), e.items != null && e.items.length) {
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
async function Ps(t) {
  const { Image: o } = Et, e = await t.arrayBuffer(), n = new Uint8Array(e), i = {};
  i.bytes = n;
  const r = o.verify(i);
  if (r)
    throw Error(r);
  const a = {};
  return a.bytes = n, o.create(a);
}
async function Ns(t) {
  const { v3: { Metadata: o } } = Et, e = { ...t };
  e.platform = Et.Platform.WEB;
  const n = e, i = o.verify(n);
  if (i)
    throw Error(i);
  return o.create(n);
}
async function Ys(t) {
  const { Content: o } = Et, { iv: e, key: n, message: i } = await qx(t), r = { token: new Uint8Array(n), iv: e, schemaVersion: qI, bytes: new Uint8Array(i) }, a = o.verify(r);
  if (a)
    throw Error(a);
  const g = o.create(r);
  return o.encode(g).finish();
}
function Ts({ documentContent: t, faceContent: o, magnifeyeLivenessContent: e, smileLivenessContent: n }) {
  const { Blob: i } = Et.v3, r = {};
  r.documentContent = t, r.faceContent = o, r.magnifeyeLivenessContent = e, r.smileLivenessContent = n;
  const a = r, g = i.verify(a);
  if (g)
    throw Error(g);
  const s = i.create(a);
  return i.encode(s).finish();
}
async function Rl(t, o) {
  const { FaceContent: e } = Et.v3, n = await Ps(t), i = await Ns(o), r = {};
  r.image = n, r.metadata = i;
  const a = r, g = e.verify(a);
  if (g)
    throw Error(g);
  const s = e.create(a), x = {};
  return x.faceContent = s, Ts(x);
}
async function El(t, o) {
  const e = await Rl(t, o);
  return Ys(e);
}
const Pl = ({
  onPhotoTakenInternal: t
}) => {
  const {
    appState: o,
    handleAppStateChange: e,
    handleError: n
  } = Ti(), {
    faceCameraOptions: i
  } = us(), {
    cameraFacing: r,
    onPhotoTaken: a,
    sessionToken: g,
    thresholds: s,
    wasmDirectoryPath: x
  } = i, C = ht(), u = Wt(void 0), {
    cameraHandler: p,
    cameraResolution: f,
    onCameraResolutionChange: v
  } = Ex(C, r), {
    controller: w
  } = Al(s, x), {
    shouldMirror: E
  } = Rx(gt.CONTROL, p);
  return Ox(gt.CAMERA_PROPS_CHANGED, {
    cameraResolution: f,
    shouldMirror: E
  }), Px(), Ae(() => () => {
    On.getInstance().restart();
  }, []), Ae(() => {
    p != null && p.videoTrack && (w != null && w.isDetectorInitialized) && e(Je.RUNNING);
  }, [p == null ? void 0 : p.videoTrack, w == null ? void 0 : w.isDetectorInitialized, e]), Ae(() => {
    if (o !== Je.RUNNING)
      return;
    if (!p || !w)
      throw new _("Cannot start detection");
    let k = 0, G = !1, H = 0;
    const L = new Ir(30);
    w.clearImagesForDuplicateDetection();
    const D = async (K, ee, z) => {
      const te = {
        width: K.width,
        height: K.height
      }, xe = await es(K), pe = {
        ...await p.getCameraProperties(),
        detectionRecord: z,
        hashedDetectedImages: w.getImagesForDuplicateDetection()
      }, re = await El(xe, {
        sessionToken: g,
        web: pe
      }), ae = {
        detection: ee,
        imageResolution: te
      };
      Wx(xs.FACE, w.getCandidateSelectionImages()), t && t({
        cameraProperties: pe || {}
      }), a({
        image: xe,
        data: ae
      }, re);
    };
    return (async () => {
      const K = Date.now();
      for (; p.checkIfStreamIsRunning() && !G; ) {
        if (sx(k, H)) {
          const {
            detection: ae,
            image: qe
          } = w.getBestImage() || {}, ct = w.getDetectionRecord();
          if (qe && ae) {
            const we = Date.now(), Xe = Ug(L);
            en.sendFaceData({
              faceDetection: ae,
              imageResolution: {
                width: qe.width,
                height: qe.height
              },
              deviceName: await p.getDeviceName(),
              averageFps: Xe,
              captureProcessDurationInMs: we - K,
              facingMode: p.getCameraSettings().facingMode,
              instructionSet: await w.getInstructionSet()
            }), e(Je.WAITING), await D(qe, ae, ct), w.restart();
          } else
            n(new _("Something went wrong during capturing an image"));
          return;
        }
        const ee = Date.now(), z = p.takePhoto(), te = {
          width: z.width,
          height: z.height
        };
        let xe;
        try {
          xe = await w.processImage(z);
        } catch (ae) {
          ae instanceof Error && n(_.fromCameraError(ae));
          return;
        }
        const pe = Date.now() - ee, Ee = En(1e3 / pe);
        L.pushFixed(Ee);
        const re = {
          face: xe.detectedFace,
          detectionTime: pe,
          fps: Ee,
          resolution: te,
          instructionCode: xe.instructionCode,
          invalidValidators: xe.invalidValidators,
          samVersion: w.samVersion
        };
        u.value = re, xe.isInCandidateSelection && (k === 0 && (k = performance.now()), H++), v(te), await Eo(Math.max(ka.max - pe, ka.min));
      }
    })(), () => {
      G = !0;
    };
  }, [o, p, w, i, e, n, a, s.faceConfidence, v, t, g, u]), se(Fe, {
    children: [se(dI, {
      ref: C,
      $isImageMirror: E,
      autoPlay: !0,
      muted: !0,
      playsInline: !0
    }), f && o === Je.RUNNING && se(jx, {
      cameraResolution: f,
      detectionDetails: u,
      isImageMirror: E
    })]
  });
}, Nl = ({
  onPhotoTakenInternal: t,
  ...o
}) => se(Gx, {
  cameraOptions: o,
  children: se(Pl, {
    onPhotoTakenInternal: t
  })
}), Yl = ({
  children: t
}) => {
  const o = ht(null);
  return Nx(o, gt.VIDEO_ELEMENT_SIZE), se(CI, {
    ref: o,
    children: t
  });
}, Qo = {};
Qo.minFaceSizeRatio = 0.135, Qo.maxFaceSizeRatio = 0.21;
const Ds = {};
Ds.faceConfidence = 1;
const Ct = {};
Ct.minFaceSizeRatio = 0.3, Ct.maxFaceSizeRatio = 1, Ct.brightnessHighThreshold = 1, Ct.brightnessLowThreshold = -1, Ct.faceConfidence = 0.15, Ct.sharpnessThreshold = -(184 + -1 * 6823 + 6640), Ct.outOfBoundsThreshold = -(-2 * -2474 + 1020 + -1989 * 3);
const Tl = { [We.DISTANT]: Qo, [We.MIDDLE]: Ds, [We.CLOSEUP]: Ct }, Dl = Tl, $a = 1462 + 1 * -637 + -75 * 11 + 0.255;
async function Fl(t, o) {
  const { MagnifEyeLivenessContent: e } = Et.v3, n = await Promise.all(t.map(async (C) => Ps(C))), i = await Ns(o), r = {};
  r.images = n, r.metadata = i;
  const a = r, g = e.verify(a);
  if (g)
    throw Error(g);
  const s = e.create(a), x = {};
  return x.magnifeyeLivenessContent = s, Ts(x);
}
async function Ll(t, o) {
  const e = t.map((i) => i.image), n = await Fl(e, o);
  return Ys(n);
}
function Xl(t, o) {
  const e = Ha(t.faceSize, $a);
  return Ha(o.faceSize, $a) < e;
}
const jl = (t, o) => {
  const e = Wt(void 0), n = (r) => {
    if (!(!r.detail || t !== qt.RUNNING || o.value !== We.CLOSEUP)) {
      if (!e.value) {
        e.value = r.detail;
        return;
      }
      Xl(e.value.data.detection, r.detail.data.detection) && (e.value = r.detail);
    }
  };
  is(gt.FACE_DETECTION, n);
  const i = {};
  return i.middleImageBestCandidate = e, i;
}, Ml = Cn.div`
  ${(t) => t.$isSecondStep && Dg`
      transition: all 1.5s ease-in-out;
      transform: translate(16%, 5%) scale(2);
      transition-delay: 1.5s;
    `}
`, Ul = ({
  onComplete: t,
  onError: o,
  sessionToken: e,
  wasmDirectoryPath: n
}) => {
  const {
    appState: i,
    handleAppStateChange: r,
    handleError: a
  } = hI(), g = Wt(We.DISTANT), s = Wt([]), x = Wt(null), {
    middleImageBestCandidate: C
  } = jl(i, g), u = Bx(Wn.ANIMATION_END);
  function p(G) {
    s.value = [...s.value, G];
  }
  function f(G) {
    g.value = G, Lo(Wn.STATUS_CHANGED, {
      phase: G
    });
  }
  function v(G) {
    p(G), f(We.MIDDLE);
  }
  u.value && f(We.CLOSEUP);
  async function w(G) {
    if (C.value) {
      const L = {
        image: await es(C.value.image),
        data: C.value.data
      };
      p(L);
    }
    p(G);
    try {
      const H = {
        sessionToken: e,
        web: x.value
      }, L = await Ll(s.value, H), [D] = s.value;
      t(D, L), en.sendMagnifEyeData(s.value);
    } catch (H) {
      H instanceof Error && a(_.fromError(H));
      return;
    }
    r(qt.DONE);
  }
  function E(G) {
    x.value = lx(x.value, G.cameraProperties);
  }
  const k = {
    [We.DISTANT]: v,
    /**
     * we don't care about onPhotoTaken in MIDDLE phase, because faceConfidence = 1
     */
    [We.MIDDLE]: () => {
    },
    [We.CLOSEUP]: w
  };
  return se(Yl, {
    children: se(Ml, {
      $isSecondStep: g.value !== We.DISTANT,
      children: se(Nl, {
        onError: o,
        onPhotoTaken: k[g.value],
        onPhotoTakenInternal: E,
        thresholds: Dl[g.value],
        wasmDirectoryPath: n
      })
    })
  });
};
function Jl(t) {
  const [o, e] = Te(qt.LOADING), [n, i] = Te(!1), [r, a] = Te(), g = hi((x) => {
    Lo(Wn.STATUS_CHANGED, {
      state: qt.ERROR,
      error: x
    }), i(!1), t(x), a(x), e(qt.ERROR);
  }, [t]), s = hi((x) => {
    x !== qt.WAITING && (e(x), Lo(Wn.STATUS_CHANGED, {
      state: x
    }));
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
const Ql = ({
  props: t
}) => (Ae(() => {
  en.init("d5ca54dabfb1a2c72d7090c9c8980252a879da44", !0);
}, []), t ? se(sI, {
  target: t.styleTarget,
  children: se(fI, {
    value: Jl(t.onError),
    children: se(Mg, {
      children: se(Ul, {
        ...t
      })
    })
  })
}) : null);
d0(Ql, "x-dot-magnifeye-liveness", ["props"]);
