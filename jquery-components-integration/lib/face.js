var R0 = Object.defineProperty;
var P0 = (t, i, e) => i in t ? R0(t, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[i] = e;
var X = (t, i, e) => (P0(t, typeof i != "symbol" ? i + "" : i, e), e);
var Sn, S, Na, La, yt, Vr, Fa, si, Ta, vn = {}, Da = [], E0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, mo = Array.isArray;
function at(t, i) {
  for (var e in i)
    t[e] = i[e];
  return t;
}
function Xa(t) {
  var i = t.parentNode;
  i && i.removeChild(t);
}
function pe(t, i, e) {
  var n, o, r, a = {};
  for (r in i)
    r == "key" ? n = i[r] : r == "ref" ? o = i[r] : a[r] = i[r];
  if (arguments.length > 35 * 258 + 1899 + -10927 && (a.children = arguments.length > -8907 * 1 + 1 * 1945 + 6965 ? Sn.call(arguments, -4841 * 2 + 869 * 1 + 8815) : e), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      void (-6 * -763 + -218 * 30 + 1962) === a[r] && (a[r] = t.defaultProps[r]);
  return fn(t, a, n, o, null);
}
function fn(t, i, e, n, o) {
  var r = {};
  r.type = t, r.props = i, r.key = e, r.ref = n, r.__k = null, r.__ = null, r.__b = 0, r.__e = null, r.__d = void (-3 * 785 + -3370 + 5725), r.__c = null, r.constructor = void (38 * 257 + 2630 + 12396 * -1), r.__v = o ?? ++Na, r.__i = -1, r.__u = 0;
  var a = r;
  return o == null && S.vnode != null && S.vnode(a), a;
}
function Y0() {
  var t = {};
  return t.current = null, t;
}
function De(t) {
  return t.children;
}
function Oe(t, i) {
  this.props = t, this.context = i;
}
function Ut(t, i) {
  if (i == null)
    return t.__ ? Ut(t.__, t.__i + (3 * -639 + 8104 + -1031 * 6)) : null;
  for (var e; i < t.__k.length; i++)
    if ((e = t.__k[i]) != null && e.__e != null)
      return e.__e;
  return typeof t.type == "function" ? Ut(t) : null;
}
function ja(t) {
  var i, e;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, i = -5291 + -61 * -53 + 1 * 2058; i < t.__k.length; i++)
      if ((e = t.__k[i]) != null && e.__e != null) {
        t.__e = t.__c.base = e.__e;
        break;
      }
    return ja(t);
  }
}
function ci(t) {
  (!t.__d && (t.__d = !(2885 + 2049 * 1 + -4934)) && yt.push(t) && !go.__r++ || Vr !== S.debounceRendering) && ((Vr = S.debounceRendering) || Fa)(go);
}
function go() {
  var t, i, e, n, o, r, a, g, s;
  for (yt.sort(si); t = yt.shift(); )
    t.__d && (i = yt.length, n = void (4567 * 1 + 9691 + -2 * 7129), r = (o = (e = t).__v).__e, g = [], s = [], (a = e.__P) && ((n = at({}, o)).__v = o.__v + (10 * -991 + -1124 * -4 + 19 * 285), S.vnode && S.vnode(n), Ei(a, n, o, e.__n, void (14 * 127 + 1934 + 58 * -64) !== a.ownerSVGElement, -10326 + 1 * 10358 & o.__u ? [r] : null, g, r ?? Ut(o), !!(6970 + -1 * -9484 + -16422 * 1 & o.__u), s), n.__.__k[n.__i] = n, Ua(g, n, s), n.__e != r && ja(n)), yt.length > i && yt.sort(si));
  go.__r = -3 * 1847 + 5320 + -221 * -1;
}
function Ja(t, i, e, n, o, r, a, g, s, x, C) {
  var u, f, p, v, E, G = n && n.__k || Da, Z = i.length;
  for (e.__d = s, N0(e, i, G), s = e.__d, u = -26 * 381 + -4225 + -1087 * -13; u < Z; u++)
    (p = e.__k[u]) != null && typeof p != "boolean" && typeof p != "function" && (f = -(-9844 + 1 * -3407 + 13252) === p.__i ? vn : G[p.__i] || vn, p.__i = u, Ei(t, p, f, o, r, a, g, s, x, C), v = p.__e, p.ref && f.ref != p.ref && (f.ref && Yi(f.ref, null, p), C.push(p.ref, p.__c || v, p)), E == null && v != null && (E = v), -65132 + 1165 * 45 + -7113 * -11 & p.__u || f.__k === p.__k ? s = Ma(p, s, t) : typeof p.type == "function" && void (2307 * 1 + -129 + -6 * 363) !== p.__d ? s = p.__d : v && (s = v.nextSibling), p.__d = void 0, p.__u &= -(-178855 + -1 * -4061 + 371403));
  e.__d = s, e.__e = E;
}
function N0(t, i, e) {
  var n, o, r, a, g, s = i.length, x = e.length, C = x, u = 3324 + -33 * 149 + -3 * -531;
  for (t.__k = [], n = 2961 * 2 + -1 * 9767 + -3845 * -1; n < s; n++)
    (o = t.__k[n] = (o = i[n]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? fn(null, o, null, null, o) : mo(o) ? fn(De, { children: o }, null, null, null) : void (-2922 + 1 * -8643 + 11565) === o.constructor && o.__b > -9926 + 1418 * 7 ? fn(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = t, o.__b = t.__b + (-316 * 2 + 142 * 23 + -1 * 2633), g = L0(o, e, a = n + u, C), o.__i = g, r = null, g !== -1 && (C--, (r = e[g]) && (r.__u |= 131072)), r == null || r.__v === null ? (-(-5284 + -8027 * 1 + -64 * -208) == g && u--, typeof o.type != "function" && (o.__u |= 337 * -331 + 60801 * -2 + 298685)) : g !== a && (g === a + (-9939 * 1 + 1 * 844 + 9096) ? u++ : g > a ? C > s - a ? u += g - a : u-- : u = g < a && g == a - (-8895 * 1 + 8033 + 863) ? g - a : -13 * 753 + 8469 * 1 + 8 * 165, g !== n + u && (o.__u |= -1 * -70191 + -58403 + 53748))) : (r = e[n]) && r.key == null && r.__e && (r.__e == t.__d && (t.__d = Ut(r)), Ii(r, r, !(-17062 + 17063 * 1)), e[n] = null, C--);
  if (C)
    for (n = -5211 + 15 * -83 + 6456; n < x; n++)
      (r = e[n]) != null && -4346 * -1 + -135 * -22 + -4 * 1829 == (176589 + -13 * -5948 + -122841 & r.__u) && (r.__e == t.__d && (t.__d = Ut(r)), Ii(r, r));
}
function Ma(t, i, e) {
  var n, o;
  if (typeof t.type == "function") {
    for (n = t.__k, o = -2971 * -2 + 46 * -64 + -2998; n && o < n.length; o++)
      n[o] && (n[o].__ = t, i = Ma(n[o], i, e));
    return i;
  }
  return t.__e != i && (e.insertBefore(t.__e, i || null), i = t.__e), i && i.nextSibling;
}
function gt(t, i) {
  return i = i || [], t == null || typeof t == "boolean" || (mo(t) ? t.some(function(e) {
    gt(e, i);
  }) : i.push(t)), i;
}
function L0(t, i, e, n) {
  var o = t.key, r = t.type, a = e - (-58 * 98 + -3223 + 34 * 262), g = e + (2085 + 2084 * -1), s = i[e];
  if (s === null || s && o == s.key && r === s.type)
    return e;
  if (n > (s != null && -4327 + -4 * 607 + 6755 == (67 * 2153 + 116911 + -130090 & s.__u) ? 4764 + 433 * -11 : -4586 * -1 + -1908 + -26 * 103))
    for (; a >= -913 * -5 + 4403 * 1 + -8968 || g < i.length; ) {
      if (a >= -601 + 3057 * 1 + -2456) {
        if ((s = i[a]) && 5135 * -1 + 8166 + -3031 == (-432630 + -563702 * -1 & s.__u) && o == s.key && r === s.type)
          return a;
        a--;
      }
      if (g < i.length) {
        if ((s = i[g]) && 2479 * 2 + 385 + 3 * -1781 == (71883 + 2041 * 29 & s.__u) && o == s.key && r === s.type)
          return g;
        g++;
      }
    }
  return -(4698 + -1 * 1729 + -2968);
}
function Rr(t, i, e) {
  i[0] === "-" ? t.setProperty(i, e ?? "") : t[i] = e == null ? "" : typeof e != "number" || E0.test(i) ? e : e + "px";
}
function Fn(t, i, e, n, o) {
  var r;
  e:
    if (i === "style")
      if (typeof e == "string")
        t.style.cssText = e;
      else {
        if (typeof n == "string" && (t.style.cssText = n = ""), n)
          for (i in n)
            e && i in e || Rr(t.style, i, "");
        if (e)
          for (i in e)
            n && e[i] === n[i] || Rr(t.style, i, e[i]);
      }
    else if (i[-3150 + 227 * -26 + -292 * -31] === "o" && i[-4144 + -7 * -191 + 2808] === "n")
      r = i !== (i = i.replace(/(PointerCapture)$|Capture$/, "$1")), i = i.toLowerCase() in t ? i.toLowerCase().slice(-1 * -8658 + 3513 + -12169) : i.slice(-3016 + 1006 * 3), t.l || (t.l = {}), t.l[i + r] = e, e ? n ? e.u = n.u : (e.u = Date.now(), t.addEventListener(i, r ? Er : Pr, r)) : t.removeEventListener(i, r ? Er : Pr, r);
    else {
      if (o)
        i = i.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (i !== "width" && i !== "height" && i !== "href" && i !== "list" && i !== "form" && i !== "tabIndex" && i !== "download" && i !== "rowSpan" && i !== "colSpan" && i !== "role" && i in t)
        try {
          t[i] = e ?? "";
          break e;
        } catch {
        }
      typeof e == "function" || (e == null || e === !1 && i[-1555 * 6 + 4160 + 5174] !== "-" ? t.removeAttribute(i) : t.setAttribute(i, e));
    }
}
function Pr(t) {
  var i = this.l[t.type + !1];
  if (t.t) {
    if (t.t <= i.u)
      return;
  } else
    t.t = Date.now();
  return i(S.event ? S.event(t) : t);
}
function Er(t) {
  return this.l[t.type + !0](S.event ? S.event(t) : t);
}
function Ei(t, i, e, n, o, r, a, g, s, x) {
  var C, u, f, p, v, E, G, Z, V, P, Q, T, j, K, $, z = i.type;
  if (void (-7681 * -1 + -62 * 117 + -427) !== i.constructor)
    return null;
  -2 * 2569 + 2 * -2893 + 11052 & e.__u && (s = !!(-475 * 9 + -1 * 9497 + 6902 * 2 & e.__u), r = [g = i.__e = e.__e]), (C = S.__b) && C(i);
  e:
    if (typeof z == "function")
      try {
        if (Z = i.props, V = (C = z.contextType) && n[C.__c], P = C ? V ? V.props.value : C.__ : n, e.__c ? G = (u = i.__c = e.__c).__ = u.__E : ("prototype" in z && z.prototype.render ? i.__c = u = new z(Z, P) : (i.__c = u = new Oe(Z, P), u.constructor = z, u.render = T0), V && V.sub(u), u.props = Z, u.state || (u.state = {}), u.context = P, u.__n = n, f = u.__d = !(570 + -229 * 7 + 1 * 1033), u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), z.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = at({}, u.__s)), at(u.__s, z.getDerivedStateFromProps(Z, u.__s))), p = u.props, v = u.state, u.__v = i, f)
          z.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (z.getDerivedStateFromProps == null && Z !== p && u.componentWillReceiveProps != null && u.componentWillReceiveProps(Z, P), !u.__e && (u.shouldComponentUpdate != null && !(-1649 * -6 + 6772 + -1515 * 11) === u.shouldComponentUpdate(Z, u.__s, P) || i.__v === e.__v)) {
            for (i.__v !== e.__v && (u.props = Z, u.state = u.__s, u.__d = !(-8523 + -292 * -28 + 348)), i.__e = e.__e, i.__k = e.__k, i.__k.forEach(function(ee) {
              ee && (ee.__ = i);
            }), Q = -5752 + 2 * 2876; Q < u._sb.length; Q++)
              u.__h.push(u._sb[Q]);
            u._sb = [], u.__h.length && a.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(Z, u.__s, P), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(p, v, E);
          });
        }
        if (u.context = P, u.props = Z, u.__P = t, u.__e = !(-11 * 67 + 663 + 75), T = S.__r, j = -6470 + -2 * 1544 + 9558, "prototype" in z && z.prototype.render) {
          for (u.state = u.__s, u.__d = !(-401 * 1 + -43 * -18 + 372 * -1), T && T(i), C = u.render(u.props, u.state, u.context), K = 9318 + -13 * 91 + -1627 * 5; K < u._sb.length; K++)
            u.__h.push(u._sb[K]);
          u._sb = [];
        } else
          do
            u.__d = !(23 * -142 + -3 * 335 + 4272), T && T(i), C = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++j < -8589 + 487 * -3 + -155 * -65);
        u.state = u.__s, u.getChildContext != null && (n = at(at({}, n), u.getChildContext())), f || u.getSnapshotBeforeUpdate == null || (E = u.getSnapshotBeforeUpdate(p, v)), Ja(t, mo($ = C != null && C.type === De && C.key == null ? C.props.children : C) ? $ : [$], i, e, n, o, r, a, g, s, x), u.base = i.__e, i.__u &= -161, u.__h.length && a.push(u), G && (u.__E = u.__ = null);
      } catch (ee) {
        i.__v = null, s || r != null ? (i.__e = g, i.__u |= s ? 4474 + -6189 * -1 + -9 * 1167 : -1 * 3578 + -9364 + 499 * 26, r[r.indexOf(g)] = null) : (i.__e = e.__e, i.__k = e.__k), S.__e(ee, i, e);
      }
    else
      r == null && i.__v === e.__v ? (i.__k = e.__k, i.__e = e.__e) : i.__e = F0(e.__e, i, e, n, o, r, a, s, x);
  (C = S.diffed) && C(i);
}
function Ua(t, i, e) {
  i.__d = void (-4565 + 1 * 2693 + 4 * 468);
  for (var n = 1108 * -1 + 46 * 197 + 97 * -82; n < e.length; n++)
    Yi(e[n], e[++n], e[++n]);
  S.__c && S.__c(i, t), t.some(function(o) {
    try {
      t = o.__h, o.__h = [], t.some(function(r) {
        r.call(o);
      });
    } catch (r) {
      S.__e(r, o.__v);
    }
  });
}
function F0(t, i, e, n, o, r, a, g, s) {
  var x, C, u, f, p, v, E, G = e.props, Z = i.props, V = i.type;
  if (V === "svg" && (o = !(2 * -997 + -3087 + 5081)), r != null) {
    for (x = 7778 + 6579 * 1 + -14357; x < r.length; x++)
      if ((p = r[x]) && "setAttribute" in p == !!V && (V ? p.localName === V : 1 * 746 + -7471 + 6728 === p.nodeType)) {
        t = p, r[x] = null;
        break;
      }
  }
  if (t == null) {
    if (V === null)
      return document.createTextNode(Z);
    t = o ? document.createElementNS("http://www.w3.org/2000/svg", V) : document.createElement(V, Z.is && Z), r = null, g = !(9815 * 1 + -1 * 8807 + -1007 * 1);
  }
  if (V === null)
    G === Z || g && t.data === Z || (t.data = Z);
  else {
    if (r = r && Sn.call(t.childNodes), G = e.props || vn, !g && r != null)
      for (G = {}, x = 0; x < t.attributes.length; x++)
        G[(p = t.attributes[x]).name] = p.value;
    for (x in G)
      p = G[x], x == "children" || (x == "dangerouslySetInnerHTML" ? u = p : x === "key" || x in Z || Fn(t, x, null, p, o));
    for (x in Z)
      p = Z[x], x == "children" ? f = p : x == "dangerouslySetInnerHTML" ? C = p : x == "value" ? v = p : x == "checked" ? E = p : x === "key" || g && typeof p != "function" || G[x] === p || Fn(t, x, p, G[x], o);
    if (C)
      g || u && (C.__html === u.__html || C.__html === t.innerHTML) || (t.innerHTML = C.__html), i.__k = [];
    else if (u && (t.innerHTML = ""), Ja(t, mo(f) ? f : [f], i, e, n, o && V !== "foreignObject", r, a, r ? r[190 * 9 + -1 * -2311 + -4021] : e.__k && Ut(e, 8 * -551 + 6221 + -1813), g, s), r != null)
      for (x = r.length; x--; )
        r[x] != null && Xa(r[x]);
    g || (x = "value", void (14536 + 79 * -184) !== v && (v !== t[x] || V === "progress" && !v || V === "option" && v !== G[x]) && Fn(t, x, v, G[x], !(1 * -6553 + -4418 + -13 * -844)), x = "checked", E !== void 0 && E !== t[x] && Fn(t, x, E, G[x], !(-3099 * 1 + -9399 + 12499)));
  }
  return t;
}
function Yi(t, i, e) {
  try {
    typeof t == "function" ? t(i) : t.current = i;
  } catch (n) {
    S.__e(n, e);
  }
}
function Ii(t, i, e) {
  var n, o;
  if (S.unmount && S.unmount(t), (n = t.ref) && (n.current && n.current !== t.__e || Yi(n, null, i)), (n = t.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (r) {
        S.__e(r, i);
      }
    n.base = n.__P = null, t.__c = void (41 * -115 + -4592 + 9307);
  }
  if (n = t.__k)
    for (o = -5226 + -5121 * 1 + 3449 * 3; o < n.length; o++)
      n[o] && Ii(n[o], i, e || typeof t.type != "function");
  e || t.__e == null || Xa(t.__e), t.__ = t.__e = t.__d = void 0;
}
function T0(t, i, e) {
  return this.constructor(t, e);
}
function Ct(t, i, e) {
  var n, o, r, a;
  S.__ && S.__(t, i), o = (n = typeof e == "function") ? null : e && e.__k || i.__k, r = [], a = [], Ei(i, t = (!n && e || i).__k = pe(De, null, [t]), o || vn, vn, i.ownerSVGElement !== void 0, !n && e ? [e] : o ? null : i.firstChild ? Sn.call(i.childNodes) : null, r, !n && e ? e : o ? o.__e : i.firstChild, n, a), Ua(r, t, a);
}
function Ni(t, i) {
  Ct(t, i, Ni);
}
function Li(t, i, e) {
  var n, o, r, a, g = at({}, t.props);
  for (r in t.type && t.type.defaultProps && (a = t.type.defaultProps), i)
    r == "key" ? n = i[r] : r == "ref" ? o = i[r] : g[r] = void (1 * 8727 + 3204 + -3977 * 3) === i[r] && void (-1482 + -3 * -494) !== a ? a[r] : i[r];
  return arguments.length > -6504 + -2 * -3253 && (g.children = arguments.length > 3316 + 3313 * -1 ? Sn.call(arguments, -3206 * -2 + 972 + -7382) : e), fn(t.type, g, n || t.key, o || t.ref, null);
}
function Fi(t, i) {
  var e = { __c: i = "__cC" + Ta++, __: t, Consumer: function(n, o) {
    return n.children(o);
  }, Provider: function(n) {
    var o, r;
    return this.getChildContext || (o = [], (r = {})[i] = this, this.getChildContext = function() {
      return r;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && o.some(function(g) {
        g.__e = !0, ci(g);
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
Sn = Da.slice, S = { __e: function(t, i, e, n) {
  for (var o, r, a; i = i.__; )
    if ((o = i.__c) && !o.__)
      try {
        if ((r = o.constructor) && r.getDerivedStateFromError != null && (o.setState(r.getDerivedStateFromError(t)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, n || {}), a = o.__d), a)
          return o.__E = o;
      } catch (g) {
        t = g;
      }
  throw t;
} }, Na = 8429 + 9863 * -1 + -1434 * -1, La = function(t) {
  return t != null && t.constructor == null;
}, Oe.prototype.setState = function(t, i) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = at({}, this.state), typeof t == "function" && (t = t(at({}, e), this.props)), t && at(e, t), t != null && this.__v && (i && this._sb.push(i), ci(this));
}, Oe.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !(9569 + 112 * 44 + -14497), t && this.__h.push(t), ci(this));
}, Oe.prototype.render = De, yt = [], Fa = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, si = function(t, i) {
  return t.__v.__b - i.__v.__b;
}, go.__r = 631 * 4 + 1 * -5078 + 2554, Ta = 8114 * -1 + -8352 + 8233 * 2;
function Ti() {
  return (Ti = Object.assign ? Object.assign.bind() : function(t) {
    for (var i = 9253 + 5303 * 1 + 41 * -355; i < arguments.length; i++) {
      var e = arguments[i];
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }
    return t;
  }).apply(this, arguments);
}
var D0 = ["context", "children"];
function X0(t) {
  this.getChildContext = function() {
    return t.context;
  };
  var i = t.children, e = function(n, o) {
    if (n == null)
      return {};
    var r, a, g = {}, s = Object.keys(n);
    for (a = -177 * 7 + -139 * 1 + -106 * -13; a < s.length; a++)
      o.indexOf(r = s[a]) >= 0 || (g[r] = n[r]);
    return g;
  }(t, D0);
  return Li(i, e);
}
function j0() {
  var t = {};
  t.detail = {}, t.bubbles = !(-1 * 9634 + 1 * -2098 + 11732), t.cancelable = !(2732 + 2732 * -1);
  var i = new CustomEvent("_preact", t);
  this.dispatchEvent(i), this._vdom = pe(X0, Ti({}, this._props, { context: i.detail.context }), function e(n, o) {
    if (964 + 961 * -1 === n.nodeType)
      return n.data;
    if (40 * -60 + 5027 + -2626 !== n.nodeType)
      return null;
    var r = [], a = {}, g = -1588 + -1 * 5381 + 6969, s = n.attributes, x = n.childNodes;
    for (g = s.length; g--; )
      s[g].name !== "slot" && (a[s[g].name] = s[g].value, a[Qa(s[g].name)] = s[g].value);
    for (g = x.length; g--; ) {
      var C = e(x[g], null), u = x[g].slot;
      u ? a[u] = pe(Yr, { name: u }, C) : r[g] = C;
    }
    var f = o ? pe(Yr, null, r) : r;
    return pe(o || n.nodeName.toLowerCase(), a, f);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Ni : Ct)(this._vdom, this._root);
}
function Qa(t) {
  return t.replace(/-(\w)/g, function(i, e) {
    return e ? e.toUpperCase() : "";
  });
}
function J0(t, i, e) {
  if (this._vdom) {
    var n = {};
    n[t] = e = e ?? void (7033 + -1 * 2614 + -4419), n[Qa(t)] = e, this._vdom = Li(this._vdom, n), Ct(this._vdom, this._root);
  }
}
function M0() {
  Ct(this._vdom = null, this._root);
}
function Yr(t, i) {
  var e = this;
  return pe("slot", Ti({}, t, { ref: function(n) {
    n ? (e.ref = n, e._listener || (e._listener = function(o) {
      o.stopPropagation(), o.detail.context = i;
    }, n.addEventListener("_preact", e._listener))) : e.ref.removeEventListener("_preact", e._listener);
  } }));
}
function U0(t, i, e, n) {
  function o() {
    var r = Reflect.construct(HTMLElement, [], o);
    return r._vdomComponent = t, r._root = n && n.shadow ? r.attachShadow({ mode: n.mode || "open" }) : r, r;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = j0, o.prototype.attributeChangedCallback = J0, o.prototype.disconnectedCallback = M0, e = e || t.observedAttributes || Object.keys(t.propTypes || {}), o.observedAttributes = e, e.forEach(function(r) {
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
function Qt(t, i, e) {
  if (e || arguments.length === 2)
    for (var n = 0, o = i.length, r; n < o; n++)
      (r || !(n in i)) && (r || (r = Array.prototype.slice.call(i, 0, n)), r[n] = i[n]);
  return t.concat(r || Array.prototype.slice.call(i));
}
function Q0(t) {
  var i = Object.create(null);
  return function(e) {
    return i[e] === void 0 && (i[e] = t(e)), i[e];
  };
}
var z0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, $0 = Q0(function(t) {
  return z0.test(t) || t.charCodeAt(-1297 * 2 + -5699 + 1 * 8293) === -8079 * 1 + 5764 + 2426 && t.charCodeAt(76 * -131 + -489 * -11 + 4578) === 110 && t.charCodeAt(3057 * 3 + -4099 + -5070) < 2544 * 1 + 1 * -1465 + 494 * -2;
}), dt, _, Uo, Nr, zt = 0, za = [], Un = [], Lr = S.__b, Fr = S.__r, Tr = S.diffed, Dr = S.__c, Xr = S.unmount;
function on(t, i) {
  S.__h && S.__h(_, t, zt || i), zt = -4461 + 783 * 10 + 3 * -1123;
  var e = {};
  e.__ = [], e.__h = [];
  var n = _.__H || (_.__H = e), o = {};
  return o.__V = Un, t >= n.__.length && n.__.push(o), n.__[t];
}
function Fe(t) {
  return zt = -7796 + 339 * 23, $a(qa, t);
}
function $a(t, i, e) {
  var n = on(dt++, 2);
  if (n.t = t, !n.__c && (n.__ = [e ? e(i) : qa(void 0, i), function(g) {
    var s = n.__N ? n.__N[0] : n.__[0], x = n.t(s, g);
    s !== x && (n.__N = [x, n.__[1]], n.__c.setState({}));
  }], n.__c = _, !_.u)) {
    var o = function(g, s, x) {
      if (!n.__c.__H)
        return !0;
      var C = n.__c.__H.__.filter(function(f) {
        return f.__c;
      });
      if (C.every(function(f) {
        return !f.__N;
      }))
        return !r || r.call(this, g, s, x);
      var u = !(4500 + -1 * 7877 + 3378);
      return C.forEach(function(f) {
        if (f.__N) {
          var p = f.__[0];
          f.__ = f.__N, f.__N = void 0, p !== f.__[0] && (u = !0);
        }
      }), !(!u && n.__c.props === g) && (!r || r.call(this, g, s, x));
    };
    _.u = !(-7 * 273 + 3278 + 1 * -1367);
    var r = _.shouldComponentUpdate, a = _.componentWillUpdate;
    _.componentWillUpdate = function(g, s, x) {
      if (this.__e) {
        var C = r;
        r = void (1451 * 1 + -461 * -17 + 54 * -172), o(g, s, x), r = C;
      }
      a && a.call(this, g, s, x);
    }, _.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function he(t, i) {
  var e = on(dt++, 3);
  !S.__s && Di(e.__H, i) && (e.__ = t, e.i = i, _.__H.__h.push(e));
}
function bo(t, i) {
  var e = on(dt++, 4);
  !S.__s && Di(e.__H, i) && (e.__ = t, e.i = i, _.__h.push(e));
}
function Ht(t) {
  return zt = -1 * -3691 + 9191 + -163 * 79, $e(function() {
    var i = {};
    return i.current = t, i;
  }, []);
}
function q0(t, i, e) {
  zt = -8083 * -1 + -8583 + 506, bo(function() {
    return typeof t == "function" ? (t(i()), function() {
      return t(null);
    }) : t ? (t.current = i(), function() {
      return t.current = null;
    }) : void (14 * -331 + 8625 + -307 * 13);
  }, e == null ? e : e.concat(t));
}
function $e(t, i) {
  var e = on(dt++, 7);
  return Di(e.__H, i) ? (e.__V = t(), e.i = i, e.__h = t, e.__V) : e.__;
}
function so(t, i) {
  return zt = 8, $e(function() {
    return t;
  }, i);
}
function yo(t) {
  var i = _.context[t.__c], e = on(dt++, 9);
  return e.c = t, i ? (e.__ == null && (e.__ = !(687 * -12 + 211 * -35 + 15629), i.sub(_)), i.props.value) : t.__;
}
function xi(t, i) {
  S.useDebugValue && S.useDebugValue(i ? i(t) : t);
}
function _0() {
  var t = on(dt++, 11);
  if (!t.__) {
    for (var i = _.__v; i !== null && !i.__m && i.__ !== null; )
      i = i.__;
    var e = i.__m || (i.__m = [10 * -243 + -4 * -1087 + -1918, -5 * -747 + -5023 + 1288]);
    t.__ = "P" + e[571 * -5 + 1223 + 1632] + "-" + e[1]++;
  }
  return t.__;
}
function es() {
  for (var t; t = za.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(Qn), t.__H.__h.forEach(li), t.__H.__h = [];
      } catch (i) {
        t.__H.__h = [], S.__e(i, t.__v);
      }
}
S.__b = function(t) {
  _ = null, Lr && Lr(t);
}, S.__r = function(t) {
  Fr && Fr(t), dt = -12 * -822 + -1557 + -8307;
  var i = (_ = t.__c).__H;
  i && (Uo === _ ? (i.__h = [], _.__h = [], i.__.forEach(function(e) {
    e.__N && (e.__ = e.__N), e.__V = Un, e.__N = e.i = void (4946 + -4946 * 1);
  })) : (i.__h.forEach(Qn), i.__h.forEach(li), i.__h = [], dt = 0)), Uo = _;
}, S.diffed = function(t) {
  Tr && Tr(t);
  var i = t.__c;
  i && i.__H && (i.__H.__h.length && (-1 * -5331 + 1344 + -1 * 6674 !== za.push(i) && Nr === S.requestAnimationFrame || ((Nr = S.requestAnimationFrame) || ts)(es)), i.__H.__.forEach(function(e) {
    e.i && (e.__H = e.i), e.__V !== Un && (e.__ = e.__V), e.i = void (-688 + 2363 * 3 + -6401), e.__V = Un;
  })), Uo = _ = null;
}, S.__c = function(t, i) {
  i.some(function(e) {
    try {
      e.__h.forEach(Qn), e.__h = e.__h.filter(function(n) {
        return !n.__ || li(n);
      });
    } catch (n) {
      i.some(function(o) {
        o.__h && (o.__h = []);
      }), i = [], S.__e(n, e.__v);
    }
  }), Dr && Dr(t, i);
}, S.unmount = function(t) {
  Xr && Xr(t);
  var i, e = t.__c;
  e && e.__H && (e.__H.__.forEach(function(n) {
    try {
      Qn(n);
    } catch (o) {
      i = o;
    }
  }), e.__H = void (754 + -4 * 469 + 1122), i && S.__e(i, e.__v));
};
var jr = typeof requestAnimationFrame == "function";
function ts(t) {
  var i, e = function() {
    clearTimeout(n), jr && cancelAnimationFrame(i), setTimeout(t);
  }, n = setTimeout(e, 100);
  jr && (i = requestAnimationFrame(e));
}
function Qn(t) {
  var i = _, e = t.__c;
  typeof e == "function" && (t.__c = void (-8176 + 5 * 1103 + 2661), e()), _ = i;
}
function li(t) {
  var i = _;
  t.__c = t.__(), _ = i;
}
function Di(t, i) {
  return !t || t.length !== i.length || i.some(function(e, n) {
    return e !== t[n];
  });
}
function qa(t, i) {
  return typeof i == "function" ? i(t) : i;
}
function _a(t, i) {
  for (var e in i)
    t[e] = i[e];
  return t;
}
function ui(t, i) {
  for (var e in t)
    if (e !== "__source" && !(e in i))
      return !(1456 + -14 * 527 + 9 * 658);
  for (var n in i)
    if (n !== "__source" && t[n] !== i[n])
      return !(9318 + -3086 * -3 + 2322 * -8);
  return !(-5087 + 267 * 8 + 2952);
}
function Ci(t) {
  this.props = t;
}
function ns(t, i) {
  function e(o) {
    var r = this.props.ref, a = r == o.ref;
    return !a && r && (r.call ? r(null) : r.current = null), i ? !i(this.props, o) || !a : ui(this.props, o);
  }
  function n(o) {
    return this.shouldComponentUpdate = e, pe(t, o);
  }
  return n.displayName = "Memo(" + (t.displayName || t.name) + ")", n.prototype.isReactComponent = !(994 + -7 * 142), n.__f = !(6860 + -2452 * 4 + 2948), n;
}
(Ci.prototype = new Oe()).isPureReactComponent = !(387 * 2 + 326 * 6 + -3 * 910), Ci.prototype.shouldComponentUpdate = function(t, i) {
  return ui(this.props, t) || ui(this.state, i);
};
var Jr = S.__b;
S.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), Jr && Jr(t);
};
var os = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function eg(t) {
  function i(e) {
    var n = _a({}, e);
    return delete n.ref, t(n, e.ref || null);
  }
  return i.$$typeof = os, i.render = i, i.prototype.isReactComponent = i.__f = !(-2 * -4726 + 649 * -4 + 6856 * -1), i.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", i;
}
var Mr = function(t, i) {
  return t == null ? null : gt(gt(t).map(i));
}, is = { map: Mr, forEach: Mr, count: function(t) {
  return t ? gt(t).length : 1 * -2363 + -1 * -3607 + -1244;
}, only: function(t) {
  var i = gt(t);
  if (-316 + -317 * -1 !== i.length)
    throw "Children.only";
  return i[1 * -3489 + 478 + -1 * -3011];
}, toArray: gt }, rs = S.__e;
S.__e = function(t, i, e, n) {
  if (t.then) {
    for (var o, r = i; r = r.__; )
      if ((o = r.__c) && o.__c)
        return i.__e == null && (i.__e = e.__e, i.__k = e.__k), o.__c(t, i);
  }
  rs(t, i, e, n);
};
var Ur = S.unmount;
function tg(t, i, e) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), t.__c.__H = null), (t = _a({}, t)).__c != null && (t.__c.__P === e && (t.__c.__P = i), t.__c = null), t.__k = t.__k && t.__k.map(function(n) {
    return tg(n, i, e);
  })), t;
}
function ng(t, i, e) {
  return t && e && (t.__v = null, t.__k = t.__k && t.__k.map(function(n) {
    return ng(n, i, e);
  }), t.__c && t.__c.__P === i && (t.__e && e.appendChild(t.__e), t.__c.__e = !(12802 + 12802 * -1), t.__c.__P = e)), t;
}
function zn() {
  this.__u = 9035 + 1807 * -5, this.t = null, this.__b = null;
}
function og(t) {
  var i = t.__.__c;
  return i && i.__a && i.__a(t);
}
function as(t) {
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
    return pe(e, r);
  }
  return o.displayName = "Lazy", o.__f = !(2 * -3302 + 1826 + 4778), o;
}
function dn() {
  this.u = null, this.o = null;
}
S.unmount = function(t) {
  var i = t.__c;
  i && i.__R && i.__R(), i && 896 + -6 * -159 + 606 * -3 & t.__u && (t.type = null), Ur && Ur(t);
}, (zn.prototype = new Oe()).__c = function(t, i) {
  var e = i.__c, n = this;
  n.t == null && (n.t = []), n.t.push(e);
  var o = og(n.__v), r = !(-1747 + -2 * -874), a = function() {
    r || (r = !(7112 + 1 * -1081 + -163 * 37), e.__R = null, o ? o(g) : g());
  };
  e.__R = a;
  var g = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var s = n.state.__a;
        n.__v.__k[159 * -12 + -7 * -754 + -3370] = ng(s, s.__c.__P, s.__c.__O);
      }
      var x;
      for (n.setState({ __a: n.__b = null }); x = n.t.pop(); )
        x.forceUpdate();
    }
  };
  n.__u++ || 7227 + 14 * -647 + 9 * 207 & i.__u || n.setState({ __a: n.__b = n.__v.__k[16602 + -3 * 5534] }), t.then(a, a);
}, zn.prototype.componentWillUnmount = function() {
  this.t = [];
}, zn.prototype.render = function(t, i) {
  if (this.__b) {
    if (this.__v.__k) {
      var e = document.createElement("div"), n = this.__v.__k[-6510 + 1837 * -1 + 8347].__c;
      this.__v.__k[3463 * -2 + -2 * -3727 + -3 * 176] = tg(this.__b, e, n.__O = n.__P);
    }
    this.__b = null;
  }
  var o = i.__a && pe(De, null, t.fallback);
  return o && (o.__u &= -(53 * 178 + 5034 + -14435)), [pe(De, null, i.__a ? null : t.children), o];
};
var Qr = function(t, i, e) {
  if (++e[1] === e[-8654 * 1 + -9759 + -1 * -18413] && t.o.delete(i), t.props.revealOrder && (t.props.revealOrder[3 * 1163 + -1235 + -2254] !== "t" || !t.o.size))
    for (e = t.u; e; ) {
      for (; e.length > 3; )
        e.pop()();
      if (e[-1454 + 247 * 23 + 2113 * -2] < e[7550 + -3 * -2875 + -16175])
        break;
      t.u = e = e[-1905 * 3 + 1702 + 4015];
    }
};
function gs(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function ss(t) {
  var i = this, e = t.i;
  i.componentWillUnmount = function() {
    Ct(null, i.l), i.l = null, i.i = null;
  }, i.i && i.i !== e && i.componentWillUnmount(), i.l || (i.i = e, i.l = { nodeType: 1, parentNode: e, childNodes: [], appendChild: function(n) {
    this.childNodes.push(n), i.i.appendChild(n);
  }, insertBefore: function(n, o) {
    this.childNodes.push(n), i.i.appendChild(n);
  }, removeChild: function(n) {
    this.childNodes.splice(this.childNodes.indexOf(n) >>> -3745 * -1 + -6710 + -2966 * -1, -9093 + -754 * -4 + -1 * -6078), i.i.removeChild(n);
  } }), Ct(pe(gs, { context: i.context }, t.__v), i.l);
}
function cs(t, i) {
  var e = {};
  e.__v = t, e.i = i;
  var n = pe(ss, e);
  return n.containerInfo = i, n;
}
(dn.prototype = new Oe()).__a = function(t) {
  var i = this, e = og(i.__v), n = i.o.get(t);
  return n[-13 * 282 + 1312 + 2354]++, function(o) {
    var r = function() {
      i.props.revealOrder ? (n.push(o), Qr(i, t, n)) : o();
    };
    e ? e(r) : r();
  };
}, dn.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var i = gt(t.children);
  t.revealOrder && t.revealOrder[5864 + -1 * 5864] === "b" && i.reverse();
  for (var e = i.length; e--; )
    this.o.set(i[e], this.u = [1367 + 1 * -1366, -9642 + 13 * -126 + 11280, this.u]);
  return t.children;
}, dn.prototype.componentDidUpdate = dn.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(i, e) {
    Qr(t, e, i);
  });
};
var ig = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || -92047 + -46 * -1061 + 103344, Is = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, xs = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, ls = /[A-Z0-9]/g, us = typeof document < "u", Cs = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
};
function ds(t, i, e) {
  return i.__k == null && (i.textContent = ""), Ct(t, i), typeof e == "function" && e(), t ? t.__c : null;
}
function As(t, i, e) {
  return Ni(t, i), typeof e == "function" && e(), t ? t.__c : null;
}
Oe.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(Oe.prototype, t, { configurable: !(5 * 1339 + 7345 + -13 * 1080), get: function() {
    return this["UNSAFE_" + t];
  }, set: function(i) {
    var e = {};
    e.configurable = !(-4150 + -10 * -415), e.writable = !(6989 + 1117 * -3 + -3638), e.value = i, Object.defineProperty(this, t, e);
  } });
});
var zr = S.event;
function ps() {
}
function hs() {
  return this.cancelBubble;
}
function fs() {
  return this.defaultPrevented;
}
S.event = function(t) {
  return zr && (t = zr(t)), t.persist = ps, t.isPropagationStopped = hs, t.isDefaultPrevented = fs, t.nativeEvent = t;
};
var $n = {};
$n.enumerable = !(6753 + 2570 * 1 + 79 * -118), $n.configurable = !(8629 + 4162 * 2 + 5651 * -3), $n.get = function() {
  return this.class;
};
var Xi, ms = $n, $r = S.vnode;
S.vnode = function(t) {
  typeof t.type == "string" && function(i) {
    var e = i.props, n = i.type, o = {};
    for (var r in e) {
      var a = e[r];
      if (!(r === "value" && "defaultValue" in e && a == null || us && r === "children" && n === "noscript" || r === "class" || r === "className")) {
        var g = r.toLowerCase();
        r === "defaultValue" && "value" in e && e.value == null ? r = "value" : r === "download" && !(-16 * -362 + -3523 + -2269 * 1) === a ? a = "" : g === "ondoubleclick" ? r = "ondblclick" : g !== "onchange" || n !== "input" && n !== "textarea" || Cs(e.type) ? g === "onfocus" ? r = "onfocusin" : g === "onblur" ? r = "onfocusout" : xs.test(r) ? r = g : -(8574 + 300 * 9 + -11273) === n.indexOf("-") && Is.test(r) ? r = r.replace(ls, "-$&").toLowerCase() : a === null && (a = void (5777 + 2721 * 1 + -8498)) : g = r = "oninput", g === "oninput" && o[r = g] && (r = "oninputCapture"), o[r] = a;
      }
    }
    n == "select" && o.multiple && Array.isArray(o.value) && (o.value = gt(e.children).forEach(function(s) {
      s.props.selected = -(-7 * 611 + -8468 + 2 * 6373) != o.value.indexOf(s.props.value);
    })), n == "select" && o.defaultValue != null && (o.value = gt(e.children).forEach(function(s) {
      s.props.selected = o.multiple ? -(-17110 + 17111 * 1) != o.defaultValue.indexOf(s.props.value) : o.defaultValue == s.props.value;
    })), e.class && !e.className ? (o.class = e.class, Object.defineProperty(o, "className", ms)) : (e.className && !e.class || e.class && e.className) && (o.class = o.className = e.className), i.props = o;
  }(t), t.$$typeof = ig, $r && $r(t);
};
var qr = S.__r;
S.__r = function(t) {
  qr && qr(t), Xi = t.__c;
};
var _r = S.diffed;
S.diffed = function(t) {
  _r && _r(t);
  var i = t.props, e = t.__e;
  e != null && t.type === "textarea" && "value" in i && i.value !== e.value && (e.value = i.value == null ? "" : i.value), Xi = null;
};
var rg = {};
rg.readContext = function(t) {
  return Xi.__n[t.__c].props.value;
};
var ag = {};
ag.current = rg;
var gg = {};
gg.ReactCurrentDispatcher = ag;
var bs = gg;
function ys(t) {
  return pe.bind(null, t);
}
function vo(t) {
  return !!t && t.$$typeof === ig;
}
function vs(t) {
  return vo(t) && t.type === De;
}
function ws(t) {
  return vo(t) ? Li.apply(null, arguments) : t;
}
function Bs(t) {
  return !!t.__k && (Ct(null, t), !(-2818 + -109 * 20 + -6 * -833));
}
function Ss(t) {
  return t && (t.base || 3944 + 1 * 7933 + -11876 === t.nodeType && t) || null;
}
var Gs = function(t, i) {
  return t(i);
}, Zs = function(t, i) {
  return t(i);
}, ks = De;
function sg(t) {
  t();
}
function Ks(t) {
  return t;
}
function Hs() {
  return [!(1 * 2141 + 43 * 215 + 759 * -15), sg];
}
var Ws = bo, Os = vo;
function Vs(t, i) {
  var e = i(), n = Fe({ h: { __: e, v: i } }), o = n[2227 * -3 + 7983 + -1302].h, r = n[6614 + -9204 * -1 + 1 * -15817];
  return bo(function() {
    o.__ = e, o.v = i, Qo(o) && r({ h: o });
  }, [t, e, i]), he(function() {
    return Qo(o) && r({ h: o }), t(function() {
      Qo(o) && r({ h: o });
    });
  }, [t]), e;
}
function Qo(t) {
  var i, e, n = t.v, o = t.__;
  try {
    var r = n();
    return !((i = o) === (e = r) && (-2209 * -1 + -4662 + 2453 !== i || (-4283 * -2 + 827 + -9392) / i == (-6067 * -1 + -569 * -10 + 1 * -11756) / e) || i != i && e != e);
  } catch {
    return !(-321 * 19 + 111 + -998 * -6);
  }
}
var N = {};
N.useState = Fe, N.useId = _0, N.useReducer = $a, N.useEffect = he, N.useLayoutEffect = bo, N.useInsertionEffect = Ws, N.useTransition = Hs, N.useDeferredValue = Ks, N.useSyncExternalStore = Vs, N.startTransition = sg, N.useRef = Ht, N.useImperativeHandle = q0, N.useMemo = $e, N.useCallback = so, N.useContext = yo, N.useDebugValue = xi, N.version = "17.0.2", N.Children = is, N.render = ds, N.hydrate = As, N.unmountComponentAtNode = Bs, N.createPortal = cs, N.createElement = pe, N.createContext = Fi, N.createFactory = ys, N.cloneElement = ws, N.createRef = Y0, N.Fragment = De, N.isValidElement = vo, N.isElement = Os, N.isFragment = vs, N.findDOMNode = Ss, N.Component = Oe, N.PureComponent = Ci, N.memo = ns, N.forwardRef = eg, N.flushSync = Zs, N.unstable_batchedUpdates = Gs, N.StrictMode = ks, N.Suspense = zn, N.SuspenseList = dn, N.lazy = as, N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bs;
var Zt = N, Rs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ps(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Es(t) {
  return t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Ys(t) {
  return t && Object.prototype.hasOwnProperty.call(t, "default") && Object.keys(t).length === 1 ? t.default : t;
}
function Ns(t) {
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
const Ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: Rs,
  getAugmentedNamespace: Ns,
  getDefaultExportFromCjs: Ps,
  getDefaultExportFromNamespaceIfNotNamed: Ys,
  getDefaultExportFromNamespaceIfPresent: Es
}, Symbol.toStringTag, { value: "Module" }));
var Fs = function(i, e, n, o) {
  var r = n ? n.call(o, i, e) : void 0;
  if (r !== void (-343 * 23 + 6775 * -1 + 14664))
    return !!r;
  if (i === e)
    return !0;
  if (typeof i != "object" || !i || typeof e != "object" || !e)
    return !1;
  var a = Object.keys(i), g = Object.keys(e);
  if (a.length !== g.length)
    return !1;
  for (var s = Object.prototype.hasOwnProperty.bind(e), x = -2 * -4321 + 2322 + -1 * 10964; x < a.length; x++) {
    var C = a[x];
    if (!s(C))
      return !1;
    var u = i[C], f = e[C];
    if (r = n ? n.call(o, u, f, C) : void (-46 * -62 + 3495 + 1 * -6347), r === !1 || r === void (8189 + -2243 * 2 + -3703) && u !== f)
      return !1;
  }
  return !0;
};
const Ts = Ls.getDefaultExportFromCjs(Fs);
var q = "-ms-", mn = "-moz-", U = "-webkit-", cg = "comm", wo = "rule", ji = "decl", Ds = "@import", Ig = "@keyframes", Xs = "@layer", js = Math.abs, Ji = String.fromCharCode, di = Object.assign;
function Js(t, i) {
  return Ie(t, 5512 + -1 * 4196 + -1316) ^ 5630 + -1345 * 3 + -5 * 310 ? (((i << 180 * -10 + -2677 + 4479 ^ Ie(t, 3867 + 1 * -3867)) << -5 * 757 + 13 * -709 + 13004 ^ Ie(t, -4846 * -1 + 2 * -4463 + 4081)) << 3941 + -2 * -3609 + -1 * 11157 ^ Ie(t, 34 * 202 + 1 * 5242 + 12108 * -1)) << 1 * 2696 + 1 * 7681 + -10375 ^ Ie(t, 36 + 6 * -833 + 4965) : 1 * 5227 + 7281 * 1 + -106 * 118;
}
function xg(t) {
  return t.trim();
}
function rt(t, i) {
  return (t = i.exec(t)) ? t[-3 * -421 + -2519 + 1256] : t;
}
function L(t, i, e) {
  return t.replace(i, e);
}
function qn(t, i) {
  return t.indexOf(i);
}
function Ie(t, i) {
  return t.charCodeAt(i) | 3563 + -1 * -3595 + -7158;
}
function $t(t, i, e) {
  return t.slice(i, e);
}
function Qe(t) {
  return t.length;
}
function lg(t) {
  return t.length;
}
function An(t, i) {
  return i.push(t), t;
}
function Ms(t, i) {
  return t.map(i).join("");
}
function ea(t, i) {
  return t.filter(function(e) {
    return !rt(e, i);
  });
}
var Bo = 1 * 1902 + -7 * 1 + -1894 * 1, qt = 1, ug = -8123 * -1 + -2774 + -5349 * 1, Re = 5 * -479 + 22 * -409 + 11393 * 1, ge = -643 * -10 + -6465 * -1 + -12895, rn = "";
function So(t, i, e, n, o, r, a, g) {
  var s = {};
  return s.value = t, s.root = i, s.parent = e, s.type = n, s.props = o, s.children = r, s.line = Bo, s.column = qt, s.length = a, s.return = "", s.siblings = g, s;
}
function It(t, i) {
  return di(So("", null, null, "", null, null, 0, t.siblings), t, { length: -t.length }, i);
}
function Tt(t) {
  for (; t.root; )
    t = It(t.root, { children: [t] });
  An(t, t.siblings);
}
function Us() {
  return ge;
}
function Qs() {
  return ge = Re > 149 * -2 + 29 * -53 + 1835 ? Ie(rn, --Re) : 0, qt--, ge === 260 + -2 * 3881 + 7512 && (qt = 2815 + 32 * 281 + -5903 * 2, Bo--), ge;
}
function Te() {
  return ge = Re < ug ? Ie(rn, Re++) : 14386 + -7193 * 2, qt++, ge === -17780 + 8895 * 2 && (qt = 9330 + 26 * -308 + -1 * 1321, Bo++), ge;
}
function St() {
  return Ie(rn, Re);
}
function _n() {
  return Re;
}
function Go(t, i) {
  return $t(rn, t, i);
}
function Ai(t) {
  switch (t) {
    case 14 * -239 + -2244 * 2 + 7834 * 1:
    case -924 * 1 + -7001 + 2 * 3967:
    case 5003 + -4993 * 1:
    case 81 * 123 + 2563 + -1 * 12513:
    case 33 * 43 + 8265 + -9652:
      return 5923 + -2 * -593 + -7104;
    case 33:
    case 3 * -3108 + 3 * -534 + 10969:
    case 44:
    case -254 + 9325 * -1 + 9626:
    case 6 * -1497 + 1352 * 6 + 932:
    case -1193 * 1 + -7179 * 1 + 8436:
    case 3746 * 2 + 1864 + -9230:
    case 59:
    case -6118 + 7 * -1084 + 13829 * 1:
    case -3550 + 735 * 5:
      return 4;
    case -3 * -3287 + -540 * 4 + -7643:
      return 7162 + -1 * -3453 + -10612;
    case -239 * -18 + -2291 * -1 + 6559 * -1:
    case -4 * 1657 + 5930 + -67 * -11:
    case -3914 + -4 * -1843 + 2 * -1709:
    case -1 * 787 + -4142 * 1 + 5020:
      return -6416 * -1 + 9301 + -15715;
    case -3853 * -2 + 5077 * 1 + 277 * -46:
    case -9506 + 9599 * 1:
      return 1;
  }
  return 176 + -131 * -58 + 598 * -13;
}
function zs(t) {
  return Bo = qt = 1, ug = Qe(rn = t), Re = 649 + -2 * -683 + -2015, [];
}
function $s(t) {
  return rn = "", t;
}
function zo(t) {
  return xg(Go(Re - 1, pi(t === -1836 + -1109 * 4 + 21 * 303 ? t + (-3756 + -1 * -8839 + 5081 * -1) : t === -7112 + 29 * -197 + 12865 ? t + (701 + 254 * -30 + 6920) : t)));
}
function qs(t) {
  for (; (ge = St()) && ge < 1 * 1994 + 7444 + -9405; )
    Te();
  return Ai(t) > 9022 * -1 + 3802 + 5222 || Ai(ge) > -3 * 354 + -9 * 833 + 8562 ? "" : " ";
}
function _s(t, i) {
  for (; --i && Te() && !(ge < 7404 + -1076 * 1 + 20 * -314 || ge > 102 || ge > 840 + 29 * -27 && ge < -8366 + 6247 * -1 + 14678 || ge > 1 * 3775 + 5293 + -8998 && ge < -135 * 45 + 3 * -233 + -6871 * -1); )
    ;
  return Go(t, _n() + (i < -7021 + 2 * 1978 + 3071 && St() == 32 && Te() == 70 + 1 * -38));
}
function pi(t) {
  for (; Te(); )
    switch (ge) {
      case t:
        return Re;
      case -7735 + 43 * -93 + 8 * 1471:
      case -5984 + 3345 * -1 + 9368:
        t !== -7879 + 1 * 7913 && t !== 7119 + -30 * 236 && pi(ge);
        break;
      case 137 * -68 + -1 * -1879 + 7477:
        t === -1443 + -1 * -1484 && pi(t);
        break;
      case -3 * -159 + 7569 + -82 * 97:
        Te();
        break;
    }
  return Re;
}
function ec(t, i) {
  for (; Te() && t + ge !== 47 + (1 * -6899 + 9586 + -2677); )
    if (t + ge === 3369 + 600 * -15 + 5673 + (4142 + 9 * -42 + -1861 * 2) && St() === 7717 * 1 + -857 * 4 + -4242)
      break;
  return "/*" + Go(i, Re - (-8816 + -4374 * -1 + -3 * -1481)) + "*" + Ji(t === -22 * -156 + 1373 + 6 * -793 ? t : Te());
}
function tc(t) {
  for (; !Ai(St()); )
    Te();
  return Go(t, Re);
}
function nc(t) {
  return $s(eo("", null, null, null, [""], t = zs(t), -107 * -3 + -4447 * -1 + -4768, [1540 + 5 * -308], t));
}
function eo(t, i, e, n, o, r, a, g, s) {
  for (var x = 0, C = -4586 + 2293 * 2, u = a, f = -7365 + 1473 * 5, p = 795 * -9 + -3125 + 10280, v = 9205 + 1841 * -5, E = -2647 * -3 + -83 * 39 + 1 * -4703, G = -5 * 871 + 7466 + -3110, Z = 1, V = -179 * -50 + -227 * 27 + -2821, P = "", Q = o, T = r, j = n, K = P; G; )
    switch (v = V, V = Te()) {
      case -8606 + 1 * 3934 + 4 * 1178:
        if (v != -7595 + -577 * -9 + -5 * -502 && Ie(K, u - (8283 + 101 * -82)) == 79 * -1 + 1 * -5639 + 2888 * 2) {
          qn(K += L(zo(V), "&", "&\f"), "&\f") != -(-187 * -7 + 6728 + -8036) && (Z = -(7757 + -1 * -5978 + 42 * -327));
          break;
        }
      case 163 * 35 + 190 + -5861:
      case 39:
      case 91:
        K += zo(V);
        break;
      case 9:
      case -5521 + 3 * 2458 + 1 * -1843:
      case 6900 + -1 * 4971 + -1916:
      case 514 * -1 + 6530 + 2992 * -2:
        K += qs(v);
        break;
      case 9353 + -416 * -12 + -14253 * 1:
        K += _s(_n() - (8326 + -2942 * -1 + -11267), -6807 + -79 * -40 + 3654);
        continue;
      case 3456 + 6989 * 1 + 3 * -3466:
        switch (St()) {
          case -101 * 11 + 1006 * -9 + 10207:
          case -2010 + -2683 * -1 + -626:
            An(oc(ec(Te(), _n()), i, e, s), s);
            break;
          default:
            K += "/";
        }
        break;
      case (-2 * -566 + 1873 * -1 + -24 * -36) * E:
        g[x++] = Qe(K) * Z;
      case (-5832 + -7628 * 1 + 13585) * E:
      case 3425 + 349 * 13 + 7 * -1129:
      case 0:
        switch (V) {
          case -1 * 3512 + 5701 + 199 * -11:
          case -218 * -7 + 8336 + -9737:
            G = -211 * 24 + -2817 + 213 * 37;
          case -8993 + 146 * 62 + C:
            Z == -(8045 * -1 + 2 * 4876 + -1 * 1706) && (K = L(K, /\f/g, "")), p > -1098 * 3 + -2535 + 87 * 67 && Qe(K) - u && An(p > -3023 + 1 * -4303 + 7358 ? na(K + ";", n, e, u - (-252 * -12 + -7859 + -2418 * -2), s) : na(L(K, " ", "") + ";", n, e, u - (-1 * 8143 + 4 * -899 + 1 * 11741), s), s);
            break;
          case 497 * 8 + -2793 + -1124:
            K += ";";
          default:
            if (An(j = ta(K, i, e, x, C, o, g, P, Q = [], T = [], u, r), r), V === 7739 + -9 * -316 + -10460)
              if (C === -7115 + 1 * 7115)
                eo(K, i, j, j, Q, r, u, g, T);
              else
                switch (f === -9544 * -1 + -1182 + -8263 && Ie(K, 3 * 347 + 4672 + -5 * 1142) === -1891 + -8 * -1230 + 603 * -13 ? 462 * 7 + -3287 * -2 + -4 * 2427 : f) {
                  case -10251 + 11 * 941:
                  case -17 * 355 + -4 * 166 + 6807 * 1:
                  case 11 * -355 + 1783 * 2 + 7 * 64:
                  case -4561 * 1 + 8995 + 4319 * -1:
                    eo(t, j, j, n && An(ta(t, j, j, -2 * 1774 + -5256 + -4402 * -2, -1 * 7057 + 866 + -6191 * -1, o, g, P, o, Q = [], u, T), T), o, T, u, g, n ? Q : T);
                    break;
                  default:
                    eo(K, j, j, j, [""], T, -6201 + 87 * -14 + 2473 * 3, g, T);
                }
        }
        x = C = p = -2323 + 101 * 23, E = Z = -5 * -269 + 3317 + -4661, P = K = "", u = a;
        break;
      case 58:
        u = -8829 + -1 * -8830 + Qe(K), p = v;
      default:
        if (E < 1) {
          if (V == 123)
            --E;
          else if (V == 2 * 3029 + -7490 + 1557 && E++ == 8903 + 8 * -1007 + -847 && Qs() == 5515 + 1 * -3002 + -2388)
            continue;
        }
        switch (K += Ji(V), V * E) {
          case 417 + -1654 * -1 + -19 * 107:
            Z = C > -5472 + 684 * 8 ? -2 * -4817 + 101 * 38 + -1 * 13471 : (K += "\f", -(-19 * -412 + -5012 + -563 * 5));
            break;
          case -4115 + -1 * 9760 + -13919 * -1:
            g[x++] = (Qe(K) - (2180 + 1 * -2179)) * Z, Z = -1318 + -47 * 37 + 3058;
            break;
          case 643 * 11 + -1 * 716 + 203 * -31:
            St() === 6 * 433 + 7053 + -4803 * 2 && (K += zo(Te())), f = St(), C = u = Qe(P = K += tc(_n())), V++;
            break;
          case -9993 * 1 + -655 * -12 + 2178:
            v === 898 + 173 * -26 + 3645 && Qe(K) == 7224 + 3611 * -2 && (E = -7962 + -3819 * -1 + -1 * -4143);
        }
    }
  return r;
}
function ta(t, i, e, n, o, r, a, g, s, x, C, u) {
  for (var f = o - 1, p = o === -1 * -3970 + 3449 + -1 * 7419 ? r : [""], v = lg(p), E = -3 * -3055 + -4282 + -4883, G = -10034 + 346 * 29, Z = 9601 * 1 + 2123 + -11724; E < n; ++E)
    for (var V = 6117 * -1 + 5519 + 299 * 2, P = $t(t, f + (-2704 + 2705 * 1), f = js(G = a[E])), Q = t; V < v; ++V)
      (Q = xg(G > -4236 + -19 * -476 + -4808 ? p[V] + " " + P : L(P, /&\f/g, p[V]))) && (s[Z++] = Q);
  return So(t, i, e, o === -2384 + -1 * 3714 + -6098 * -1 ? wo : g, s, x, C, u);
}
function oc(t, i, e, n) {
  return So(t, i, e, cg, Ji(Us()), $t(t, 2, -(-107 * -25 + 2 * -467 + 1 * -1739)), 0, n);
}
function na(t, i, e, n, o) {
  return So(t, i, e, ji, $t(t, -9941 + 2 * 4523 + 895, n), $t(t, n + (-162 * -19 + -2887 * -3 + -11738), -(-8297 + -1 * 2729 + -11027 * -1)), n, o);
}
function Cg(t, i, e) {
  switch (Js(t, i)) {
    case -4463 + 4783 * 2:
      return U + "print-" + t + t;
    case -18 * -298 + 9685 + -9312:
    case -641 * -4 + -9535 + -7 * -1596:
    case 3177:
    case 2 * -1079 + -4 * 565 + 3 * 2617:
    case -8472 * 1 + 1822 + 8291:
    case -5298 + 3 * -1427 + -2 * -7018:
    case 2921:
    case 5572:
    case -139 + 2461 * 5 + 2 * -2905:
    case -212 * 22 + 8685 + 1 * 1823:
    case 3938 + -9062 * 1 + 1663 * 5:
    case 9941 * 1 + -2816 + -480:
    case 2098 * 1 + -6961 + -3934 * -2:
    case -51 * 73 + 158 * -31 + 15012:
    case -172 * -64 + 1 * -5923 + -397 * -2:
    case -4768 + -3 * -2271 + 3578:
    case 1 * -2474 + -5591 * -2 + -2573:
    case 335 * -12 + 8 * -2 + 8635:
    case -131 * -11 + -3 * -1574 + -3 * 436:
    case -2764 + -1 * -8878 + -1899:
    case -10939 + -23 * 389 + -5255 * -5:
    case 37 + 317 * 16:
    case 1 * -5766 + 6 * -1735 + 21541:
    case 5851 * 1 + -4 * 1138 + 2 * 2161:
    case -1 * 2594 + 8806 + -2383:
      return U + t + t;
    case -1009 * 5 + -5823 + -921 * -17:
      return mn + t + t;
    case -221 * -23 + -91 * -63 + 1 * -5467:
    case -3268 + -2 * -3757:
    case -4577 + 3 * 3129:
    case -811 * -1 + 4120 + 2037 * 1:
    case -11 * 479 + -942 + 8967:
      return U + t + mn + t + q + t + t;
    case 5936:
      switch (Ie(t, i + (4124 + -930 * -7 + -1 * 10623))) {
        case 3571 * 2 + -1801 + -5227:
          return U + t + q + L(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        case 1 * -7309 + 8967 + -1550:
          return U + t + q + L(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        case 7 * 773 + -3109 + 61 * -37:
          return U + t + q + L(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    case 2706 + 4 * 2325 + -5178:
    case 4168 + 10 * 10:
    case -5474 + 1 * 8377:
      return U + t + q + t + t;
    case 3688 * 3 + -7831 + -1466 * -2:
      return U + t + q + "flex-" + t + t;
    case 1 * 2098 + -6346 + 9435:
      return U + t + L(t, /(\w+).+(:[^]+)/, U + "box-$1$2" + q + "flex-$1$2") + t;
    case 9759 + 1 * 1073 + -5389:
      return U + t + q + "flex-item-" + L(t, /flex-|-self/g, "") + (rt(t, /flex-|baseline/) ? "" : q + "grid-row-" + L(t, /flex-|-self/g, "")) + t;
    case -41 * -91 + 1402 + -458 * 1:
      return U + t + q + "flex-line-pack" + L(t, /align-content|flex-|-self/g, "") + t;
    case -775 * -4 + 8686 + -1 * 6238:
      return U + t + q + L(t, "shrink", "negative") + t;
    case 9901 * 1 + -622 + -3987:
      return U + t + q + L(t, "basis", "preferred-size") + t;
    case 6060:
      return U + "box-" + L(t, "-grow", "") + U + t + q + L(t, "grow", "positive") + t;
    case 1 * -9539 + -9197 * 1 + 23290:
      return U + L(t, /([^-])(transform)/g, "$1" + U + "$2") + t;
    case 13 * 67 + 9132 + -636 * 6:
      return L(L(L(t, /(zoom-|grab)/, U + "$1"), /(image-set)/, U + "$1"), t, "") + t;
    case 1517 + -17 * -234:
    case -6110 + -10069 * -1:
      return L(t, /(image-set\([^]*)/, U + "$1$`$1");
    case 2464 + -7459 * -1 + -4955 * 1:
      return L(L(t, /(.+:)(flex-)?(.*)/, U + "box-pack:$3" + q + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + U + t + t;
    case -25 + 4225 * 1:
      if (!rt(t, /flex-|baseline/))
        return q + "grid-column-align" + $t(t, i) + t;
      break;
    case 2592:
    case 1 * 2886 + 1 * 181 + 293:
      return q + L(t, "template-", "") + t;
    case -6 * 1087 + 5846 + 5060:
    case 2306 * -1 + 5979 + -57 * 1:
      return e && e.some(function(n, o) {
        return i = o, rt(n.props, /grid-\w+-end/);
      }) ? ~qn(t + (e = e[i].value), "span") ? t : q + L(t, "-start", "") + t + q + "grid-row-span:" + (~qn(e, "span") ? rt(e, /\d+/) : +rt(e, /\d+/) - +rt(t, /\d+/)) + ";" : q + L(t, "-start", "") + t;
    case -2511 + -4 * -278 + -5 * -1259:
    case 16 * -217 + 37 * -24 + -4 * -2122:
      return e && e.some(function(n) {
        return rt(n.props, /grid-\w+-start/);
      }) ? t : q + L(L(t, "-end", "-span"), "span ", "") + t;
    case 4095:
    case -158 * 47 + 1947 + 197 * 46:
    case 2638 * 1 + -7614 + 9044:
    case -457 * -10 + 9289 * -1 + 7251:
      return L(t, /(.+)-inline(.+)/, U + "$1$2") + t;
    case 8116:
    case 5 * -577 + 5683 * -2 + 21310:
    case 5912 + 367 * -12 + 1415 * 3:
    case 59 * -39 + 59 * 167 + -2017 * 1:
    case -2235 + 1920 * 4:
    case -11220 + -519 * 19 + 2 * 13391:
    case 1741 * -2 + 756 + 7659:
    case 17 * 127 + -19 * 298 + 8180:
    case -8591 * 1 + -3768 + -28 * -639:
    case 1201 * 5 + -4942 + 17 * 278:
    case 5021:
    case -2495 + -3 * -742 + -5034 * -1:
      if (Qe(t) - (3806 + 3805 * -1) - i > 10411 + 5 * -2081)
        switch (Ie(t, i + (-10 * 232 + 9444 + 17 * -419))) {
          case 219 * -29 + -11 * -181 + 4469:
            if (Ie(t, i + (2037 + -17 * -521 + -10890)) !== 1 * 6433 + 804 * -3 + -994 * 4)
              break;
          case -424 + 2 * 263:
            return L(t, /(.+:)(.+)-([^]+)/, "$1" + U + "$2-$3$1" + mn + (Ie(t, i + (1 * -538 + -1 * 9437 + 9978)) == 210 + -1 * -9769 + -1 * 9871 ? "$3" : "$2-$3")) + t;
          case -3133 + -28 * -116:
            return ~qn(t, "stretch") ? Cg(L(t, "stretch", "fill-available"), i, e) + t : t;
        }
      break;
    case 2 * -4789 + -8882 * 1 + -23612 * -1:
    case 1 * -9218 + 349 * -32 + 26306:
      return L(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, r, a, g, s, x) {
        return q + o + ":" + r + x + (a ? q + o + "-span:" + (g ? s : +s - +r) + x : "") + t;
      });
    case 2721 * -3 + -7689 * -1 + 17 * 319:
      if (Ie(t, i + (3805 * 1 + 8026 * -1 + -1 * -4227)) === -75 * 123 + 2772 + 6574)
        return L(t, ":", ":" + U) + t;
      break;
    case 2 * -1453 + -380 * 24 + 18470:
      switch (Ie(t, Ie(t, 8698 + 52 * -167) === 7 * 944 + -101 * -76 + -491 * 29 ? -229 * 27 + 486 * 14 + -67 * 9 : -1567 * 4 + -26 * -26 + 5603)) {
        case -10 * -869 + -3185 + 5385 * -1:
          return L(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + U + (Ie(t, -705 * 10 + 182 * 3 + 6518) === -9960 + -349 * -17 + -1018 * -4 ? "inline-" : "") + "box$3$1" + U + "$2$3$1" + q + "$2box$3") + t;
        case -20 * 329 + 9037 + -2357:
          return L(t, ":", ":" + q) + t;
      }
      break;
    case -5 * -853 + 93 * 47 + -2917 * 1:
    case 2161 + -243 * -2:
    case -3621 + 73 * 67 + 865:
    case 8353 + 1 * 7859 + -12285:
    case -9646 + -542 * -11 + 6075:
      return L(t, "scroll-", "scroll-snap-") + t;
  }
  return t;
}
function co(t, i) {
  for (var e = "", n = 0; n < t.length; n++)
    e += i(t[n], n, t, i) || "";
  return e;
}
function ic(t, i, e, n) {
  switch (t.type) {
    case Xs:
      if (t.children.length)
        break;
    case Ds:
    case ji:
      return t.return = t.return || t.value;
    case cg:
      return "";
    case Ig:
      return t.return = t.value + "{" + co(t.children, n) + "}";
    case wo:
      if (!Qe(t.value = t.props.join(",")))
        return "";
  }
  return Qe(e = co(t.children, n)) ? t.return = t.value + "{" + e + "}" : "";
}
function rc(t) {
  var i = lg(t);
  return function(e, n, o, r) {
    for (var a = "", g = -2 * 639 + 3290 + -2012; g < i; g++)
      a += t[g](e, n, o, r) || "";
    return a;
  };
}
function ac(t) {
  return function(i) {
    i.root || (i = i.return) && t(i);
  };
}
function gc(t, i, e, n) {
  if (t.length > -(1 * -5963 + 5807 + 157) && !t.return)
    switch (t.type) {
      case ji:
        t.return = Cg(t.value, t.length, e);
        return;
      case Ig:
        return co([It(t, { value: L(t.value, "@", "@" + U) })], n);
      case wo:
        if (t.length)
          return Ms(e = t.props, function(o) {
            switch (rt(o, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Tt(It(t, { props: [L(o, /:(read-\w+)/, ":" + mn + "$1")] }));
                var r = {};
                r.props = [o], Tt(It(t, r)), di(t, { props: ea(e, n) });
                break;
              case "::placeholder":
                Tt(It(t, { props: [L(o, /:(plac\w+)/, ":" + U + "input-$1")] })), Tt(It(t, { props: [L(o, /:(plac\w+)/, ":" + mn + "$1")] })), Tt(It(t, { props: [L(o, /:(plac\w+)/, q + "input-$1")] }));
                var a = {};
                a.props = [o], Tt(It(t, a)), di(t, { props: ea(e, n) });
                break;
            }
            return "";
          });
    }
}
var Y = {};
Y.animationIterationCount = 1, Y.aspectRatio = 1, Y.borderImageOutset = 1, Y.borderImageSlice = 1, Y.borderImageWidth = 1, Y.boxFlex = 1, Y.boxFlexGroup = 1, Y.boxOrdinalGroup = 1, Y.columnCount = 1, Y.columns = 1, Y.flex = 1, Y.flexGrow = 1, Y.flexPositive = 1, Y.flexShrink = 1, Y.flexNegative = 1, Y.flexOrder = 1, Y.gridRow = 1, Y.gridRowEnd = 1, Y.gridRowSpan = 1, Y.gridRowStart = 1, Y.gridColumn = 1, Y.gridColumnEnd = 1, Y.gridColumnSpan = 1, Y.gridColumnStart = 1, Y.msGridRow = 1, Y.msGridRowSpan = 1, Y.msGridColumn = 1, Y.msGridColumnSpan = 1, Y.fontWeight = 1, Y.lineHeight = 1, Y.opacity = 1, Y.order = 1, Y.orphans = 1, Y.tabSize = 1, Y.widows = 1, Y.zIndex = 1, Y.zoom = 1, Y.WebkitLineClamp = 1, Y.fillOpacity = 1, Y.floodOpacity = 1, Y.stopOpacity = 1, Y.strokeDasharray = 1, Y.strokeDashoffset = 1, Y.strokeMiterlimit = 1, Y.strokeOpacity = 1, Y.strokeWidth = 1;
var sc = Y, J = {}, kt = typeof process < "u" && void (-2 * 4583 + -8578 + 17744) !== J && (J.REACT_APP_SC_ATTR || J.SC_ATTR) || "data-styled", Mi = typeof window < "u" && "HTMLElement" in window, cc = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && J !== void 0 && void (-5161 * 1 + -1397 * -6 + -3221) !== J.REACT_APP_SC_DISABLE_SPEEDY && J.REACT_APP_SC_DISABLE_SPEEDY !== "" ? J.REACT_APP_SC_DISABLE_SPEEDY !== "false" && J.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (2 * -3058 + 7721 + -1605) !== J && void (-4457 + -3 * -569 + -250 * -11) !== J.SC_DISABLE_SPEEDY && J.SC_DISABLE_SPEEDY !== "" ? J.SC_DISABLE_SPEEDY !== "false" && J.SC_DISABLE_SPEEDY : J.NODE_ENV !== "production"), oa = /invalid hook call/i, Tn = /* @__PURE__ */ new Set(), Ic = function(t, i) {
  if (J.NODE_ENV !== "production") {
    var e = i ? ' with the id of "'.concat(i, '"') : "", n = "The component ".concat(t).concat(e, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var r = !0;
      console.error = function(a) {
        for (var g = [], s = 71 * -113 + -4332 + -1 * -12356; s < arguments.length; s++)
          g[s - 1] = arguments[s];
        oa.test(a) ? (r = !1, Tn.delete(n)) : o.apply(void (823 * 4 + -3 * 1631 + -1 * -1601), Qt([a], g, !1));
      }, Ht(), r && !Tn.has(n) && (console.warn(n), Tn.add(n));
    } catch (a) {
      oa.test(a.message) && Tn.delete(n);
    } finally {
      console.error = o;
    }
  }
}, Zo = Object.freeze([]), _t = Object.freeze({});
function xc(t, i, e) {
  return void (-12 * -393 + 1 * -6169 + 1453 * 1) === e && (e = _t), t.theme !== e.theme && t.theme || i || e.theme;
}
var hi = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), lc = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, uc = /(^-|-$)/g;
function ia(t) {
  return t.replace(lc, "-").replace(uc, "");
}
var Cc = /(a)(d)/gi, ra = function(t) {
  return String.fromCharCode(t + (t > 4551 + -2 * 3079 + 1632 ? 22 * 425 + -1 * -4540 + -13851 : -4654 + -3265 * -3 + -5044));
};
function fi(t) {
  var i, e = "";
  for (i = Math.abs(t); i > -3793 + 5 * 769; i = i / (-12 * 479 + 5943 + 143 * -1) | 4511 + 13 * -741 + 5122)
    e = ra(i % 52) + e;
  return (ra(i % (-1277 * -5 + 4 * 1569 + 467 * -27)) + e).replace(Cc, "$1-$2");
}
var $o, vt = function(t, i) {
  for (var e = i.length; e; )
    t = 33 * t ^ i.charCodeAt(--e);
  return t;
}, dg = function(t) {
  return vt(-97 * 6 + 1 * -3433 + 9396, t);
};
function dc(t) {
  return fi(dg(t) >>> -1019 * 4 + -23 * -293 + -1 * 2663);
}
function Ag(t) {
  return J.NODE_ENV !== "production" && typeof t == "string" && t || t.displayName || t.name || "Component";
}
function qo(t) {
  return typeof t == "string" && (J.NODE_ENV === "production" || t.charAt(1256 + 1362 * 3 + -2 * 2671) === t.charAt(-2293 * 1 + 8184 + -1 * 5891).toLowerCase());
}
var He = {};
He.childContextTypes = !0, He.contextType = !0, He.contextTypes = !0, He.defaultProps = !0, He.displayName = !0, He.getDefaultProps = !0, He.getDerivedStateFromError = !0, He.getDerivedStateFromProps = !0, He.mixins = !0, He.propTypes = !0, He.type = !0;
var xt = {};
xt.name = !0, xt.length = !0, xt.prototype = !0, xt.caller = !0, xt.callee = !0, xt.arguments = !0, xt.arity = !0;
var bt = {};
bt.$$typeof = !0, bt.compare = !0, bt.defaultProps = !0, bt.displayName = !0, bt.propTypes = !0, bt.type = !0;
var Dt = {};
Dt.$$typeof = !0, Dt.render = !0, Dt.defaultProps = !0, Dt.displayName = !0, Dt.propTypes = !0;
var pg = typeof Symbol == "function" && Symbol.for, hg = pg ? Symbol.for("react.memo") : 1 * 60963 + 24 * 1518 + -37280, Ac = pg ? Symbol.for("react.forward_ref") : -19 * -1479 + 44063 + -12052, pc = He, hc = xt, fg = bt, fc = (($o = {})[Ac] = Dt, $o[hg] = fg, $o);
function aa(t) {
  return ("type" in (i = t) && i.type.$$typeof) === hg ? fg : "$$typeof" in t ? fc[t.$$typeof] : pc;
  var i;
}
var mc = Object.defineProperty, bc = Object.getOwnPropertyNames, ga = Object.getOwnPropertySymbols, yc = Object.getOwnPropertyDescriptor, vc = Object.getPrototypeOf, sa = Object.prototype;
function mg(t, i, e) {
  if (typeof i != "string") {
    if (sa) {
      var n = vc(i);
      n && n !== sa && mg(t, n, e);
    }
    var o = bc(i);
    ga && (o = o.concat(ga(i)));
    for (var r = aa(t), a = aa(i), g = -1745 + -84 * 24 + 3761; g < o.length; ++g) {
      var s = o[g];
      if (!(s in hc || e && e[s] || a && s in a || r && s in r)) {
        var x = yc(i, s);
        try {
          mc(t, s, x);
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
function Ui(t) {
  return typeof t == "object" && "styledComponentId" in t;
}
function Bt(t, i) {
  return t && i ? "".concat(t, " ").concat(i) : t || i || "";
}
function ca(t, i) {
  if (1 * -2018 + 21 * 134 + 4 * -199 === t.length)
    return "";
  for (var e = t[-2348 + -419 * 1 + -2767 * -1], n = 10418 + 1 * -10417; n < t.length; n++)
    e += i ? i + t[n] : t[n];
  return e;
}
function tn(t) {
  return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
}
function mi(t, i, e) {
  if (void (100 * -17 + -715 + 2415) === e && (e = !1), !e && !tn(t) && !Array.isArray(t))
    return i;
  if (Array.isArray(i))
    for (var n = 6225 + -3 * 2075; n < i.length; n++)
      t[n] = mi(t[n], i[n]);
  else if (tn(i))
    for (var n in i)
      t[n] = mi(t[n], i[n]);
  return t;
}
function Qi(t, i) {
  var e = {};
  e.value = i, Object.defineProperty(t, "toString", e);
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
var wc = J.NODE_ENV !== "production" ? ce : {};
function Bc() {
  for (var t = [], i = 0; i < arguments.length; i++)
    t[i] = arguments[i];
  for (var e = t[-811 * -1 + -2 * 3030 + -1 * -5249], n = [], o = 201 + -755 * 3 + 59 * 35, r = t.length; o < r; o += 1 * 1412 + -97 * 89 + 1 * 7222)
    n.push(t[o]);
  return n.forEach(function(a) {
    e = e.replace(/%[a-z]/, a);
  }), e;
}
function an(t) {
  for (var i = [], e = 99 * -49 + -1 * -9974 + -5122; e < arguments.length; e++)
    i[e - (17 * -105 + -112 * -47 + -2 * 1739)] = arguments[e];
  return J.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(i.length > 0 ? " Args: ".concat(i.join(", ")) : "")) : new Error(Bc.apply(void (2 * -4255 + 43 * 101 + 4167), Qt([wc[t]], i, !1)).trim());
}
var Sc = function() {
  function t(i) {
    this.groupSizes = new Uint32Array(-5393 + -5 * -1181), this.length = -2 * 353 + -9829 + 11047 * 1, this.tag = i;
  }
  return t.prototype.indexOfGroup = function(i) {
    for (var e = 0, n = -9 * -112 + 1862 + -2870; n < i; n++)
      e += this.groupSizes[n];
    return e;
  }, t.prototype.insertRules = function(i, e) {
    if (i >= this.groupSizes.length) {
      for (var n = this.groupSizes, o = n.length, r = o; i >= r; )
        if ((r <<= -1 * -9634 + 9888 + 2169 * -9) < 1034 * -6 + -2754 + 8958)
          throw an(-1 * 7731 + 8 * -830 + 14387, "".concat(i));
      this.groupSizes = new Uint32Array(r), this.groupSizes.set(n), this.length = r;
      for (var a = o; a < r; a++)
        this.groupSizes[a] = -5 * -148 + -353 * -6 + 1 * -2858;
    }
    for (var g = this.indexOfGroup(i + (7933 + -627 * 1 + 15 * -487)), s = (a = -6620 + -4019 * -1 + 2601, e.length); a < s; a++)
      this.tag.insertRule(g, e[a]) && (this.groupSizes[i]++, g++);
  }, t.prototype.clearGroup = function(i) {
    if (i < this.length) {
      var e = this.groupSizes[i], n = this.indexOfGroup(i), o = n + e;
      this.groupSizes[i] = 0;
      for (var r = n; r < o; r++)
        this.tag.deleteRule(n);
    }
  }, t.prototype.getGroup = function(i) {
    var e = "";
    if (i >= this.length || -1 * -6652 + 4 * -1987 + 1296 === this.groupSizes[i])
      return e;
    for (var n = this.groupSizes[i], o = this.indexOfGroup(i), r = o + n, a = o; a < r; a++)
      e += "".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);
    return e;
  }, t;
}(), to = /* @__PURE__ */ new Map(), Io = /* @__PURE__ */ new Map(), no = 4 * 296 + 5263 + -6446, Dn = function(t) {
  if (to.has(t))
    return to.get(t);
  for (; Io.has(no); )
    no++;
  var i = no++;
  if (J.NODE_ENV !== "production" && ((-5304 + 2 * -1201 + 7706 | i) < -1213 * -4 + 2628 * -1 + 278 * -8 || i > 1639489950 + 626 * -903751))
    throw an(11618 + 1 * -11602, "".concat(i));
  return to.set(t, i), Io.set(i, t), i;
}, Gc = function(t, i) {
  no = i + (6 * -536 + -3218 + 6435), to.set(t, i), Io.set(i, t);
}, Zc = "style[".concat(kt, "][").concat("data-styled-version", '="').concat("6.1.1", '"]'), kc = new RegExp("^".concat(kt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Kc = function(t, i, e) {
  for (var n, o = e.split(","), r = 1 * 9443 + -9940 + 497, a = o.length; r < a; r++)
    (n = o[r]) && t.registerName(i, n);
}, Hc = function(t, i) {
  for (var e, n = ((e = i.textContent) !== null && void (61 * -109 + 6 * 659 + 2695 * 1) !== e ? e : "").split(`/*!sc*/
`), o = [], r = -109 + 2 * -4044 + 8197, a = n.length; r < a; r++) {
    var g = n[r].trim();
    if (g) {
      var s = g.match(kc);
      if (s) {
        var x = 0 | parseInt(s[1], 10), C = s[13 * 114 + -5422 * -1 + -6902];
        5015 + 727 * -5 + -1380 !== x && (Gc(C, x), Kc(t, C, s[3]), t.getTag().insertRules(x, o)), o.length = -343 * 15 + -478 * -18 + 1 * -3459;
      } else
        o.push(g);
    }
  }
};
function Wc() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var bg = function(t) {
  var i = document.head, e = t || i, n = document.createElement("style"), o = function(g) {
    var s = Array.from(g.querySelectorAll("style[".concat(kt, "]")));
    return s[s.length - (1 * 4863 + 116 * 1 + -4978)];
  }(e), r = void (5795 + 305 * -19) !== o ? o.nextSibling : null;
  n.setAttribute(kt, "active"), n.setAttribute("data-styled-version", "6.1.1");
  var a = Wc();
  return a && n.setAttribute("nonce", a), e.insertBefore(n, r), n;
}, Oc = function() {
  function t(i) {
    this.element = bg(i), this.element.appendChild(document.createTextNode("")), this.sheet = function(e) {
      if (e.sheet)
        return e.sheet;
      for (var n = document.styleSheets, o = -3 * -3079 + -89 * 73 + 4 * -685, r = n.length; o < r; o++) {
        var a = n[o];
        if (a.ownerNode === e)
          return a;
      }
      throw an(3872 + -3 * 1285);
    }(this.element), this.length = -11 * -746 + 20 * -94 + -2 * 3163;
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
}(), Vc = function() {
  function t(i) {
    this.element = bg(i), this.nodes = this.element.childNodes, this.length = 4 * 1514 + 242 * 33 + -14042;
  }
  return t.prototype.insertRule = function(i, e) {
    if (i <= this.length && i >= 1 * -2551 + -1753 + -4 * -1076) {
      var n = document.createTextNode(e);
      return this.element.insertBefore(n, this.nodes[i] || null), this.length++, !0;
    }
    return !1;
  }, t.prototype.deleteRule = function(i) {
    this.element.removeChild(this.nodes[i]), this.length--;
  }, t.prototype.getRule = function(i) {
    return i < this.length ? this.nodes[i].textContent : "";
  }, t;
}(), Rc = function() {
  function t(i) {
    this.rules = [], this.length = 1535 * -4 + -7907 + 14047 * 1;
  }
  return t.prototype.insertRule = function(i, e) {
    return i <= this.length && (this.rules.splice(i, -10024 + -1 * -10024, e), this.length++, !0);
  }, t.prototype.deleteRule = function(i) {
    this.rules.splice(i, -6482 + -2 * 3158 + 12799 * 1), this.length--;
  }, t.prototype.getRule = function(i) {
    return i < this.length ? this.rules[i] : "";
  }, t;
}(), Ia = Mi, Pc = { isServer: !Mi, useCSSOMInjection: !cc }, yg = function() {
  function t(i, e, n) {
    void (-8579 * 1 + 6013 + 2566) === i && (i = _t), void (-2 * -789 + -38 * -37 + -2984) === e && (e = {});
    var o = this;
    this.options = ye(ye({}, Pc), i), this.gs = e, this.names = new Map(n), this.server = !!i.isServer, !this.server && Mi && Ia && (Ia = !1, function(r) {
      for (var a = document.querySelectorAll(Zc), g = 1 * 9969 + -8133 + 918 * -2, s = a.length; g < s; g++) {
        var x = a[g];
        x && x.getAttribute(kt) !== "active" && (Hc(r, x), x.parentNode && x.parentNode.removeChild(x));
      }
    }(this)), Qi(this, function() {
      return function(r) {
        for (var a = r.getTag(), g = a.length, s = "", x = function(u) {
          var f = function(Z) {
            return Io.get(Z);
          }(u);
          if (void (1818 + -914 * -7 + 4108 * -2) === f)
            return "continue";
          var p = r.names.get(f), v = a.getGroup(u);
          if (void (11 * -298 + 2984 + -98 * -3) === p || -2633 + -2633 * -1 === v.length)
            return "continue";
          var E = "".concat(kt, ".g").concat(u, '[id="').concat(f, '"]'), G = "";
          p !== void 0 && p.forEach(function(Z) {
            Z.length > 1 * 4078 + -1 * 7311 + 53 * 61 && (G += "".concat(Z, ","));
          }), s += "".concat(v).concat(E, '{content:"').concat(G, '"}').concat(`/*!sc*/
`);
        }, C = 11503 + 1 * -11503; C < g; C++)
          x(C);
        return s;
      }(o);
    });
  }
  return t.registerId = function(i) {
    return Dn(i);
  }, t.prototype.reconstructWithOptions = function(i, e) {
    return void (45 * -60 + 9645 + -6945) === e && (e = !0), new t(ye(ye({}, this.options), i), this.gs, e && this.names || void (4049 + 1 * -4049));
  }, t.prototype.allocateGSInstance = function(i) {
    return this.gs[i] = (this.gs[i] || 5 * -1965 + 2 * 1738 + 6349) + (-74 * 108 + -1213 * -6 + -715 * -1);
  }, t.prototype.getTag = function() {
    return this.tag || (this.tag = (i = function(e) {
      var n = e.useCSSOMInjection, o = e.target;
      return e.isServer ? new Rc(o) : n ? new Oc(o) : new Vc(o);
    }(this.options), new Sc(i)));
    var i;
  }, t.prototype.hasNameForId = function(i, e) {
    return this.names.has(i) && this.names.get(i).has(e);
  }, t.prototype.registerName = function(i, e) {
    if (Dn(i), this.names.has(i))
      this.names.get(i).add(e);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(e), this.names.set(i, n);
    }
  }, t.prototype.insertRules = function(i, e, n) {
    this.registerName(i, e), this.getTag().insertRules(Dn(i), n);
  }, t.prototype.clearNames = function(i) {
    this.names.has(i) && this.names.get(i).clear();
  }, t.prototype.clearRules = function(i) {
    this.getTag().clearGroup(Dn(i)), this.clearNames(i);
  }, t.prototype.clearTag = function() {
    this.tag = void (3016 * 1 + -5190 + 2174);
  }, t;
}(), Ec = /&/g, Yc = /^\s*\/\/.*$/gm;
function vg(t, i) {
  return t.map(function(e) {
    return e.type === "rule" && (e.value = "".concat(i, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(i, " ")), e.props = e.props.map(function(n) {
      return "".concat(i, " ").concat(n);
    })), Array.isArray(e.children) && e.type !== "@keyframes" && (e.children = vg(e.children, i)), e;
  });
}
function wg(t) {
  var i, e, n, o = t === void 0 ? _t : t, r = o.options, a = void (2495 * 3 + -4 * -2381 + 17009 * -1) === r ? _t : r, g = o.plugins, s = void (6427 + 1 * -6427) === g ? Zo : g, x = function(f, p, v) {
    return v === e || v.startsWith(e) && v.endsWith(e) && v.replaceAll(e, "").length > -3979 + 9631 * 1 + -5652 ? ".".concat(i) : f;
  }, C = s.slice();
  C.push(function(f) {
    f.type === wo && f.value.includes("&") && (f.props[4824 * 1 + -5 * 1642 + 3386] = f.props[160 * -45 + -2 * 3381 + 13962].replace(Ec, e).replace(n, x));
  }), a.prefix && C.push(gc), C.push(ic);
  var u = function(f, p, v, E) {
    p === void 0 && (p = ""), void (-1736 + 2 * 1427 + -1118) === v && (v = ""), void (1609 + -15 * 47 + -904) === E && (E = "&"), i = E, e = p, n = new RegExp("\\".concat(e, "\\b"), "g");
    var G = f.replace(Yc, ""), Z = nc(v || p ? "".concat(v, " ").concat(p, " { ").concat(G, " }") : G);
    a.namespace && (Z = vg(Z, a.namespace));
    var V = [];
    return co(Z, rc(C.concat(ac(function(P) {
      return V.push(P);
    })))), V;
  };
  return u.hash = s.length ? s.reduce(function(f, p) {
    return p.name || an(94 * -89 + 28 * 235 + 1801), vt(f, p.name);
  }, 5381).toString() : "", u;
}
var Nc = new yg(), bi = wg(), zi = Zt.createContext({ shouldForwardProp: void (-418 + -1 * 3653 + -3 * -1357), styleSheet: Nc, stylis: bi });
zi.Consumer;
var Lc = Zt.createContext(void (1 * 1300 + -5897 + 4597));
function yi() {
  return yo(zi);
}
function Fc(t) {
  var i = Fe(t.stylisPlugins), e = i[2 * -3345 + 5510 * 1 + 20 * 59], n = i[944 + 1504 * -3 + -3569 * -1], o = yi().styleSheet, r = $e(function() {
    var C = o, u = {};
    return u.useCSSOMInjection = !1, t.sheet ? C = t.sheet : t.target && (C = C.reconstructWithOptions({ target: t.target }, !1)), t.disableCSSOMInjection && (C = C.reconstructWithOptions(u)), C;
  }, [t.disableCSSOMInjection, t.sheet, t.target, o]), a = $e(function() {
    var C = {};
    C.namespace = t.namespace, C.prefix = t.enableVendorPrefixes;
    var u = {};
    return u.options = C, u.plugins = e, wg(u);
  }, [t.enableVendorPrefixes, t.namespace, e]);
  he(function() {
    Ts(e, t.stylisPlugins) || n(t.stylisPlugins);
  }, [t.stylisPlugins]);
  var g = $e(function() {
    var C = {};
    return C.shouldForwardProp = t.shouldForwardProp, C.styleSheet = r, C.stylis = a, C;
  }, [t.shouldForwardProp, r, a]), s = {};
  s.value = g;
  var x = {};
  return x.value = a, Zt.createElement(zi.Provider, s, Zt.createElement(Lc.Provider, x, t.children));
}
var xa = function() {
  function t(i, e) {
    var n = this;
    this.inject = function(o, r) {
      r === void 0 && (r = bi);
      var a = n.name + r.hash;
      o.hasNameForId(n.id, a) || o.insertRules(n.id, a, r(n.rules, a, "@keyframes"));
    }, this.name = i, this.id = "sc-keyframes-".concat(i), this.rules = e, Qi(this, function() {
      throw an(-1 * -4011 + -2105 + -1894, String(n.name));
    });
  }
  return t.prototype.getName = function(i) {
    return void (8145 + 164 * 41 + -14869) === i && (i = bi), this.name + i.hash;
  }, t;
}(), Tc = function(t) {
  return t >= "A" && t <= "Z";
};
function la(t) {
  for (var i = "", e = -5945 + -16 * -7 + 5833; e < t.length; e++) {
    var n = t[e];
    if (-49 * 149 + 1 * 8943 + -1641 === e && n === "-" && t[-9820 + 491 * 20] === "-")
      return t;
    Tc(n) ? i += "-" + n.toLowerCase() : i += n;
  }
  return i.startsWith("ms-") ? "-" + i : i;
}
var Bg = function(t) {
  return t == null || t === !1 || t === "";
}, Sg = function(t) {
  var i, e, n = [];
  for (var o in t) {
    var r = t[o];
    t.hasOwnProperty(o) && !Bg(r) && (Array.isArray(r) && r.isCss || en(r) ? n.push("".concat(la(o), ":"), r, ";") : tn(r) ? n.push.apply(n, Qt(Qt(["".concat(o, " {")], Sg(r), !1), ["}"], !1)) : n.push("".concat(la(o), ": ").concat((i = o, (e = r) == null || typeof e == "boolean" || e === "" ? "" : typeof e != "number" || 632 * -10 + -4617 + -1 * -10937 === e || i in sc || i.startsWith("--") ? String(e).trim() : "".concat(e, "px")), ";")));
  }
  return n;
};
function Gt(t, i, e, n) {
  if (Bg(t))
    return [];
  if (Ui(t))
    return [".".concat(t.styledComponentId)];
  if (en(t)) {
    if (!en(r = t) || r.prototype && r.prototype.isReactComponent || !i)
      return [t];
    var o = t(i);
    return J.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof xa || tn(o) || o === null || console.error("".concat(Ag(t), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Gt(o, i, e, n);
  }
  var r;
  return t instanceof xa ? e ? (t.inject(e, n), [t.getName(n)]) : [t] : tn(t) ? Sg(t) : Array.isArray(t) ? Array.prototype.concat.apply(Zo, t.map(function(a) {
    return Gt(a, i, e, n);
  })) : [t.toString()];
}
function Dc(t) {
  for (var i = 4714 + 1843 * -1 + -2871; i < t.length; i += -6581 * 1 + 2394 + 4188) {
    var e = t[i];
    if (en(e) && !Ui(e))
      return !1;
  }
  return !0;
}
var Xc = dg("6.1.1"), jc = function() {
  function t(i, e, n) {
    this.rules = i, this.staticRulesId = "", this.isStatic = J.NODE_ENV === "production" && (void (1766 * -1 + 3542 + 444 * -4) === n || n.isStatic) && Dc(i), this.componentId = e, this.baseHash = vt(Xc, e), this.baseStyle = n, yg.registerId(e);
  }
  return t.prototype.generateAndInjectStyles = function(i, e, n) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(i, e, n) : "";
    if (this.isStatic && !n.hash)
      if (this.staticRulesId && e.hasNameForId(this.componentId, this.staticRulesId))
        o = Bt(o, this.staticRulesId);
      else {
        var r = ca(Gt(this.rules, i, e, n)), a = fi(vt(this.baseHash, r) >>> 5173 * 1 + 4497 + 4835 * -2);
        if (!e.hasNameForId(this.componentId, a)) {
          var g = n(r, ".".concat(a), void 0, this.componentId);
          e.insertRules(this.componentId, a, g);
        }
        o = Bt(o, a), this.staticRulesId = a;
      }
    else {
      for (var s = vt(this.baseHash, n.hash), x = "", C = 7022 * 1 + -7229 * 1 + 207; C < this.rules.length; C++) {
        var u = this.rules[C];
        if (typeof u == "string")
          x += u, J.NODE_ENV !== "production" && (s = vt(s, u));
        else if (u) {
          var f = ca(Gt(u, i, e, n));
          s = vt(s, f + C), x += f;
        }
      }
      if (x) {
        var p = fi(s >>> 0);
        e.hasNameForId(this.componentId, p) || e.insertRules(this.componentId, p, n(x, ".".concat(p), void (8 * -392 + 2659 + 477), this.componentId)), o = Bt(o, p);
      }
    }
    return o;
  }, t;
}(), Gg = Zt.createContext(void (1 * -1070 + 41 * -214 + 9844));
Gg.Consumer;
var _o = {}, ua = /* @__PURE__ */ new Set();
function Jc(t, i, e) {
  var n = Ui(t), o = t, r = !qo(t), a = i.attrs, g = void (1033 * -5 + 11 * -411 + 9686) === a ? Zo : a, s = i.componentId, x = void (1 * 4414 + -5844 + 130 * 11) === s ? function(T, j) {
    var K = typeof T != "string" ? "sc" : ia(T);
    _o[K] = (_o[K] || -307 * -2 + -7550 + 6936) + (5953 + 16 * -372);
    var $ = "".concat(K, "-").concat(dc("6.1.1" + K + _o[K]));
    return j ? "".concat(j, "-").concat($) : $;
  }(i.displayName, i.parentComponentId) : s, C = i.displayName, u = void (1217 * -4 + 6606 + 22 * -79) === C ? function(T) {
    return qo(T) ? "styled.".concat(T) : "Styled(".concat(Ag(T), ")");
  }(t) : C, f = i.displayName && i.componentId ? "".concat(ia(i.displayName), "-").concat(i.componentId) : i.componentId || x, p = n && o.attrs ? o.attrs.concat(g).filter(Boolean) : g, v = i.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var E = o.shouldForwardProp;
    if (i.shouldForwardProp) {
      var G = i.shouldForwardProp;
      v = function(T, j) {
        return E(T, j) && G(T, j);
      };
    } else
      v = E;
  }
  var Z = new jc(e, f, n ? o.componentStyle : void (2 * -3543 + 207 + 6879));
  function V(T, j) {
    return function(K, $, z) {
      var ee = K.attrs, fe = K.componentStyle, te = K.defaultProps, je = K.foldedComponentIds, me = K.styledComponentId, ae = K.target, Ce = Zt.useContext(Gg), ve = yi(), Pe = K.shouldForwardProp || ve.shouldForwardProp;
      J.NODE_ENV !== "production" && xi(me);
      var we = function(At, pt, Ge) {
        var Ze = {};
        Ze.className = void (4405 * -2 + -6455 + 15265), Ze.theme = Ge;
        for (var et, Ye = ye(ye({}, pt), Ze), Vt = 9956 + 1 * 9247 + -19203; Vt < At.length; Vt += 9758 + 11 * -887) {
          var ke = en(et = At[Vt]) ? et(Ye) : et;
          for (var Ne in ke)
            Ye[Ne] = Ne === "className" ? Bt(Ye[Ne], ke[Ne]) : Ne === "style" ? ye(ye({}, Ye[Ne]), ke[Ne]) : ke[Ne];
        }
        return pt.className && (Ye.className = Bt(Ye.className, pt.className)), Ye;
      }(ee, $, xc($, Ce, te) || _t), Je = we.as || ae, Ee = {};
      for (var de in we)
        void (1 * 1822 + 4364 + 3093 * -2) === we[de] || de[-6507 + 75 * -109 + 14682 * 1] === "$" || de === "as" || de === "theme" || (de === "forwardedAs" ? Ee.as = we.forwardedAs : Pe && !Pe(de, Je) || (Ee[de] = we[de], Pe || J.NODE_ENV !== "development" || $0(de) || ua.has(de) || !hi.has(Je) || (ua.add(de), console.warn('styled-components: it looks like an unknown prop "'.concat(de, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Ot = function(At, pt) {
        var Ge = yi(), Ze = At.generateAndInjectStyles(pt, Ge.styleSheet, Ge.stylis);
        return J.NODE_ENV !== "production" && xi(Ze), Ze;
      }(fe, we);
      J.NODE_ENV !== "production" && K.warnTooManyClasses && K.warnTooManyClasses(Ot);
      var sn = Bt(je, me);
      return Ot && (sn += " " + Ot), we.className && (sn += " " + we.className), Ee[qo(Je) && !hi.has(Je) ? "class" : "className"] = sn, Ee.ref = z, pe(Je, Ee);
    }(P, T, j);
  }
  V.displayName = u;
  var P = Zt.forwardRef(V), Q = {};
  return Q.attrs = !0, Q.componentStyle = !0, Q.displayName = !0, Q.foldedComponentIds = !0, Q.shouldForwardProp = !0, Q.styledComponentId = !0, Q.target = !0, P.attrs = p, P.componentStyle = Z, P.displayName = u, P.shouldForwardProp = v, P.foldedComponentIds = n ? Bt(o.foldedComponentIds, o.styledComponentId) : "", P.styledComponentId = f, P.target = n ? o.target : t, Object.defineProperty(P, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(T) {
    this._foldedDefaultProps = n ? function(j) {
      for (var K = [], $ = 1; $ < arguments.length; $++)
        K[$ - (-3 * -3 + 5731 * 1 + -5739 * 1)] = arguments[$];
      for (var z = 1 * 7989 + -2264 + -5725, ee = K; z < ee.length; z++)
        mi(j, ee[z], !0);
      return j;
    }({}, o.defaultProps, T) : T;
  } }), J.NODE_ENV !== "production" && (Ic(u, f), P.warnTooManyClasses = /* @__PURE__ */ function(T, j) {
    var K = {}, $ = !1;
    return function(z) {
      if (!$ && (K[z] = !0, Object.keys(K).length >= 1 * -7426 + 6725 + 901)) {
        var ee = j ? ' with the id of "'.concat(j, '"') : "";
        console.warn("Over ".concat(623 + -3505 * 1 + 23 * 134, " classes were generated for component ").concat(T).concat(ee, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), $ = !0, K = {};
      }
    };
  }(u, f)), Qi(P, function() {
    return ".".concat(P.styledComponentId);
  }), r && mg(P, t, Q), P;
}
function Ca(t, i) {
  for (var e = [t[7717 + 23 * 77 + 9488 * -1]], n = 0, o = i.length; n < o; n += 6302 + 7 * -413 + -3410)
    e.push(i[n], t[n + (860 + -859 * 1)]);
  return e;
}
var da = function(t) {
  var i = {};
  return i.isCss = !0, Object.assign(t, i);
};
function Mc(t) {
  for (var i = [], e = 14327 + 377 * -38; e < arguments.length; e++)
    i[e - 1] = arguments[e];
  if (en(t) || tn(t)) {
    var n = t;
    return da(Gt(Ca(Zo, Qt([n], i, !0))));
  }
  var o = t;
  return -9793 + 1 * 9439 + 118 * 3 === i.length && -3289 + 1 * 3290 === o.length && typeof o[6 * -1138 + 996 + -81 * -72] == "string" ? Gt(o) : da(Gt(Ca(o, i)));
}
function vi(t, i, e) {
  if (void (1545 + 140 * 7 + -2525) === e && (e = _t), !i)
    throw an(-1065 * -9 + 6242 * 1 + -15826, i);
  var n = function(o) {
    for (var r = [], a = -5719 + -127 * -19 + 3307 * 1; a < arguments.length; a++)
      r[a - (1216 + 1 * 2492 + -3707)] = arguments[a];
    return t(i, e, Mc.apply(void (-24 * 184 + 34 * -215 + 11726), Qt([o], r, !1)));
  };
  return n.attrs = function(o) {
    return vi(t, i, ye(ye({}, e), { attrs: Array.prototype.concat(e.attrs, o).filter(Boolean) }));
  }, n.withConfig = function(o) {
    return vi(t, i, ye(ye({}, e), o));
  }, n;
}
var Zg = function(t) {
  return vi(Jc, t);
}, Gn = Zg;
hi.forEach(function(t) {
  Gn[t] = Zg(t);
});
J.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Xn = "__sc-".concat(kt, "__");
J.NODE_ENV !== "production" && J.NODE_ENV !== "test" && typeof window < "u" && (window[Xn] || (window[Xn] = 15 * 525 + 1 * 2191 + -10066), 26 * -22 + -16 * 73 + 1741 === window[Xn] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Xn] += 6754 + 3087 * 1 + -9840);
const Uc = Gn.div`
  position: relative;
`, Qc = Gn.video`
  transform: ${(t) => t.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  width: 100%;
`;
class ne extends Error {
  constructor(e, n) {
    super(e);
    X(this, "cause");
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
var oo = ((t) => (t.CONTINUE_DETECTION = "continue-detection", t.SWITCH_CAMERA = "switch-camera", t.TOGGLE_MIRROR = "toggle-mirror", t))(oo || {}), kg = ((t) => (t.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", t.CONTROL = "document-auto-capture:control", t.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", t.DOCUMENT_DETECTION = "document-auto-capture:document-detection", t.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", t.STATE_CHANGED = "document-auto-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", t))(kg || {}), ze = ((t) => (t.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", t.CONTROL = "face-auto-capture:control", t.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", t.FACE_DETECTION = "face-auto-capture:face-detection", t.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", t.STATE_CHANGED = "face-auto-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", t))(ze || {}), zc = ((t) => (t.ANIMATION_END = "magnifeye-auto-capture:animation-end", t.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", t))(zc || {}), $c = ((t) => (t.ANIMATION_END = "smile-auto-capture:animation-end", t.STATUS_CHANGED = "smile-auto-capture:status-changed", t))($c || {});
const Ue = {};
Ue.CANDIDATE_SELECTION = "candidate_selection", Ue.FACE_TOO_CLOSE = "face_too_close", Ue.FACE_TOO_FAR = "face_too_far", Ue.FACE_CENTERING = "face_centering", Ue.FACE_NOT_PRESENT = "face_not_present", Ue.SHARPNESS_TOO_LOW = "sharpness_too_low", Ue.BRIGHTNESS_TOO_LOW = "brightness_too_low", Ue.BRIGHTNESS_TOO_HIGH = "brightness_too_high", Ue.DEVICE_PITCHED = "device_pitched";
const Le = Ue, it = {};
it.isPresent = Le.FACE_NOT_PRESENT, it.isNotPitched = Le.DEVICE_PITCHED, it.isNotSmall = Le.FACE_TOO_FAR, it.isNotLarge = Le.FACE_TOO_CLOSE, it.isNotOutOfBounds = Le.FACE_CENTERING, it.isNotDim = Le.BRIGHTNESS_TOO_LOW, it.isNotBright = Le.BRIGHTNESS_TOO_HIGH, it.isSharp = Le.SHARPNESS_TOO_LOW;
const qc = it, pn = {};
pn.LOADING = "LOADING", pn.ERROR = "ERROR", pn.WAITING = "WAITING", pn.RUNNING = "RUNNING";
const We = pn;
var _c = ((t) => (t.CLOSEUP = "CLOSEUP", t.DISTANT = "DISTANT", t.MIDDLE = "MIDDLE", t))(_c || {});
const ko = Fi(void 0);
ko.displayName = "AppStateContext";
function eI() {
  const t = yo(ko);
  if (t === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return t;
}
const tI = ko.Provider, Ko = eI;
class Kg extends Oe {
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
    return ((i = this.context) == null ? void 0 : i.appState) === We.ERROR ? null : this.props.children;
  }
}
X(Kg, "contextType", ko);
const nI = Gn.canvas`
  transform: ${(t) => t.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
var oI = 1464 + 1 * -1464;
function xe(t, i, e, n, o, r) {
  var a, g, s = {};
  for (g in i)
    g == "ref" ? a = i[g] : s[g] = i[g];
  var x = {};
  x.type = t, x.props = s, x.key = e, x.ref = a, x.__k = null, x.__ = null, x.__b = 0, x.__e = null, x.__d = void (-709 + 709 * 1), x.__c = null, x.constructor = void (-4 * -139 + -23 * -389 + -9503), x.__v = --oI, x.__i = -(1 * 4913 + 4 * -1009 + 2 * -438), x.__u = 0, x.__source = o, x.__self = r;
  var C = x;
  if (typeof t == "function" && (a = t.defaultProps))
    for (g in a)
      void (-13963 + 13963 * 1) === s[g] && (s[g] = a[g]);
  return S.vnode && S.vnode(C), C;
}
const iI = Gn.div`
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
function rI() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const aI = eg(({
  detectionDetails: t,
  isImageMirror: i
}, e) => rI() ? (console.log(t), xe(De, {
  children: [xe(nI, {
    ref: e,
    $isImageMirror: i
  }), xe(iI, {
    children: Object.entries(t).map(([n, o]) => xe("div", {
      children: [n, ": ", xe("strong", {
        children: o
      })]
    }, n))
  })]
})) : null), gI = -3016 + -3364 * -2 + -3712 + 0.4, sI = 5150 + -10 * 515 + 0.16, cI = -8585 + -17 * -505 + 0.2, II = 8188 + -89 * 92 + 0.05, xI = 0 + 0.3, lI = -5806 + -4465 * -2 + -3124 + 0.25, uI = -7611 + 2026 * -4 + 15715 * 1 + 0.9, CI = 2447 * -3 + 2533 + 4838, dI = -14 * -490 + -13 * 193 + -4342 + 0.8100000000000005, io = {};
io.minDuration = 1e3, io.maxDuration = 2500, io.minFrames = 10;
const ei = io, wi = {};
wi.max = 100, wi.min = 10;
const Aa = wi, AI = -1 * 623 + 3198 * -1 + 4541, pI = -163 * -17 + -6657 + -1 * -4086, hI = 3, Hg = "AES-CBC", Wg = "RSA-OAEP", fI = "SHA-256", mI = "image/jpeg", bI = 732 * -5 + 2884 + 784, yI = 40, vI = "SAM v1.35.3 for idcards", Og = Fi(null), Vg = () => {
  const t = yo(Og);
  if (!t)
    throw new Error("Missing provider for CameraOptionsContext");
  return t;
}, wI = (t) => {
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
      faceConfidence: (r == null ? void 0 : r.faceConfidence) ?? gI,
      minFaceSizeRatio: (r == null ? void 0 : r.minFaceSizeRatio) ?? sI,
      maxFaceSizeRatio: (r == null ? void 0 : r.maxFaceSizeRatio) ?? cI,
      sharpnessThreshold: (r == null ? void 0 : r.sharpnessThreshold) ?? xI,
      brightnessLowThreshold: (r == null ? void 0 : r.brightnessLowThreshold) ?? lI,
      brightnessHighThreshold: (r == null ? void 0 : r.brightnessHighThreshold) ?? uI,
      outOfBoundsThreshold: (r == null ? void 0 : r.outOfBoundsThreshold) ?? II,
      devicePitchAngleThreshold: (r == null ? void 0 : r.devicePitchAngleThreshold) ?? CI
    }
  };
}, BI = ({
  cameraOptions: t,
  children: i
}) => {
  const e = $e(() => ({
    faceCameraOptions: wI(t)
  }), [t]);
  return xe(Og.Provider, {
    value: e,
    children: i
  });
}, SI = 845 * -7 + -492 + 6407 + 0.75, GI = 2 * -331 + -9338 + 10002, ZI = -1 * 2630 + 1568 + 554 * 3, kI = 0, KI = (t, i) => {
  const e = {};
  e.detail = i, document.dispatchEvent(new CustomEvent(t, e));
}, ho = class ho {
  constructor() {
    X(this, "lastDetails", {});
    X(this, "delayedTime", -8284 + 1 * 8451 + -167 * 1);
  }
  static getInstance() {
    return !this._instance && (this._instance = new ho()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 1698 + -2 * 849;
  }
  isDetailChanged(i, e) {
    return JSON.stringify(e) !== JSON.stringify(this.lastDetails[i]) ? (this.lastDetails[i] = e, !0) : !1;
  }
  dispatchCustomEventOnChange(i, e) {
    this.isDetailChanged(i, e) && KI(i, e);
  }
  dispatchDelayedCustomEventOnChange(i, e, n) {
    const o = performance.now();
    o - this.delayedTime > n && (this.dispatchCustomEventOnChange(i, e), this.delayedTime = o);
  }
};
X(ho, "_instance");
let wn = ho;
const gn = wn.getInstance(), pa = (t, i, e = ZI) => {
  const n = {};
  n.instructionCode = i;
  const o = n;
  gn.dispatchDelayedCustomEventOnChange(t, o, e);
}, ha = (t, i) => {
  gn.dispatchCustomEventOnChange(t, i);
}, HI = (t, i) => {
  gn.dispatchCustomEventOnChange(t, i);
}, WI = (t, i) => {
  const e = {};
  e.size = i;
  const n = e;
  gn.dispatchCustomEventOnChange(t, n);
}, OI = (t, i, e) => {
  const n = i.confidence < e ? void 0 : i, o = {};
  o.detectedObject = n;
  const r = o;
  gn.dispatchCustomEventOnChange(t, r);
}, VI = (t, i, e) => {
  const n = {};
  n.image = e, n.data = {}, n.data.detection = i, n.data.imageResolution = {}, n.data.imageResolution.width = e.width, n.data.imageResolution.height = e.height;
  const o = n;
  gn.dispatchCustomEventOnChange(t, o);
};
var Se = {};
Se.VITE_FACE_COUNTLY_APP_KEY = "5f83e83ee4cee1ab6e5bbf86e215644473299675", Se.VITE_MAGNIFEYE_COUNTLY_APP_KEY = "d5ca54dabfb1a2c72d7090c9c8980252a879da44", Se.VITE_DOCUMENT_COUNTLY_APP_KEY = "065cf6e242fc5e785cd17eebfbfbbd212a33133b", Se.VITE_COUNTLY_URL = "https://innovatrics.count.ly", Se.VITE_SMILE_COUNTLY_APP_KEY = "d64319129bb0ee02eccfab418edba9629a97d6b6", Se.VITE_RSA_PUBLIC_KEY = "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", Se.BASE_URL = "/", Se.MODE = "production", Se.DEV = !1, Se.PROD = !0, Se.SSR = !1, Se.VITE_PACKAGE_VERSION = "5.2.8";
var RI = Se;
const PI = () => {
  var t;
  return ((t = RI.VITE_APP_ENV) == null ? void 0 : t.toLowerCase()) === "dev";
}, EI = (t, i, e = mI) => new Promise((n) => {
  t.toBlob((o) => {
    if (!o)
      throw new Error("Canvas to Blob failed");
    n(o);
  }, e, i);
}), YI = async (t) => EI(t, 121 * -37 + -6 * 1145 + 11437), NI = (t, i) => {
  const e = document.createElement("canvas");
  e.width = i.width, e.height = i.height;
  const n = e.getContext("2d");
  if (!n)
    throw new Error("cropImage ctx error");
  return n.drawImage(t, i.shiftX, i.shiftY, i.width, i.height, 58 * -2 + 2400 + -1 * 2284, -3753 + -2168 * -2 + -53 * 11, e.width, e.height), e;
}, LI = (t) => {
  const i = t.getContext("2d");
  if (!i)
    throw new Error("getImageDataForSam ctx error");
  const { data: e } = i.getImageData(-21 * 214 + 2215 + 53 * 43, -1 * 9802 + 7858 + 1944, t.width, t.height);
  return e;
}, Rg = (t, i, e, n) => {
  const o = t.getContext("2d");
  o && (o.beginPath(), n ? (o.fillStyle = e, o.fillRect(i.topLeft.x, i.topLeft.y, i.width, i.height)) : (o.strokeStyle = e, o.rect(i.topLeft.x, i.topLeft.y, i.width, i.height)), o.stroke());
}, ti = (t, i, e) => {
  const { height: n, shiftX: o, shiftY: r, width: a } = i, g = {};
  g.x = o, g.y = r;
  const s = {};
  s.topLeft = g, s.width = a, s.height = n, s.color = e, Rg(t, s, e);
}, Pg = (t, i, e) => {
  const n = t.getContext("2d");
  n && (n.fillStyle = e, n.fillRect(i.x, i.y, 638 * 3 + 17 * -109 + -54 * 1, 7), n.beginPath());
}, FI = (t, i) => {
  if (PI()) {
    const e = {};
    e.candidateSelectionImages = i;
    const n = e;
    wn.getInstance().dispatchCustomEventOnChange(t, n);
  }
}, TI = (t, i) => {
  const { cameraResolution: e, shouldMirror: n } = i;
  he(() => {
    if (!e)
      return;
    const o = {};
    o.cameraResolution = e, o.isMirroring = n, HI(t, o);
  }, [e, n, t]);
};
var Eg = ((t) => (t.DOCUMENT = "document-auto-capture:dev", t.FACE = "face-auto-capture:dev", t))(Eg || {});
const Bi = {};
Bi.SIMD = "simd", Bi.NO_SIMD = "no-simd";
const fa = Bi, Yg = (t) => t.length < 2019 * -4 + 7420 + 9 * 73 ? 3106 * -3 + -4134 + -177 * -76 : t.reduce((e, n) => e + n, 0) / t.length, Zn = (t) => Number.parseFloat(t.toFixed(634 + 631 * -1)), DI = (t) => {
  const i = t.getContext("2d");
  i && i.clearRect(-4695 + 7 * -1027 + 2 * 5942, -114 * 72 + -2474 * 4 + -4 * -4526, i.canvas.width, i.canvas.height);
};
class XI {
  static async getVideoInputDeviceList() {
    return (await navigator.mediaDevices.enumerateDevices()).filter((e) => e.kind === "videoinput");
  }
}
const Ho = (t, i) => Math.min(t, i), jI = (t, i) => {
  const e = Ho(i.width, i.height);
  return Zn(t * e);
}, Ng = ({ height: t, width: i }) => {
  const e = Ho(i, t), n = e / (-2697 + 307 * 13 + -1291) * (-6852 + 1015 * -9 + -1 * -15991);
  if (i > t) {
    const r = {};
    return r.width = n, r.height = e, r;
  }
  const o = {};
  return o.width = e, o.height = n, o;
}, JI = ({ height: t, width: i }) => {
  const e = Ho(i, t) * SI, n = (i - e) / (-5648 + 251 * -2 + 6152), o = (t - e) / (-5471 * 1 + -294 + -1 * -5767), r = {};
  return r.shiftX = n, r.shiftY = o, r.width = e, r.height = e, r;
}, MI = (t, i) => jI(t, i) * GI, UI = "@innovatrics/dot-common-auto-capture", QI = "5.2.8", zI = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, $I = {
  "@dot/proto-files": "1.0.3",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.2.2",
  comlink: "^4.4.1",
  preact: "^10.19.3",
  "styled-components": "^6.1.1",
  "wasm-feature-detect": "^1.6.1"
}, qI = {
  "@preact/preset-vite": "^2.7.0",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.3.3",
  vite: "^5.0.10",
  vitest: "^1.0.4"
}, _I = {
  name: UI,
  private: !0,
  version: QI,
  scripts: zI,
  dependencies: $I,
  devDependencies: qI
}, Lg = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), ma = () => {
  const t = /Android/i.test(navigator.userAgent), i = /Firefox/i.test(navigator.userAgent);
  return t && i;
}, ex = () => {
  const t = navigator.userAgent.includes("Chrome"), i = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return t && i ? !1 : i;
}, Si = (t) => new Promise((i) => {
  setTimeout(i, t);
}), Xt = (t) => JSON.parse(JSON.stringify(t, (i, e) => typeof e == "number" ? Zn(e) : e)), Fg = () => _I.version, Tg = (t) => new URL(t).hostname.replace("www.", ""), tx = () => Tg(window.location.href) === "localhost", jn = (t) => Object.entries(t).map(([i, e]) => encodeURIComponent(i) + "=" + encodeURIComponent(e)).join("&"), nx = (t, i) => {
  const e = t && performance.now() - t;
  return i >= ei.minFrames ? e > ei.minDuration : e > ei.maxDuration;
}, ox = (t, i) => JSON.stringify(t) === JSON.stringify(i) ? i : t;
function ix(t, i) {
  let e;
  return (...n) => {
    const o = () => {
      clearTimeout(e), e = void 0, t(...n);
    };
    e === void (5241 + -10 * -888 + -14121) && (e = setTimeout(o, i));
  };
}
const rx = (t) => t === kg.CONTROL ? !Lg() : !0, ax = (t, i) => {
  const { appState: e, handleAppStateChange: n, handleError: o } = Ko(), [r, a] = Fe(), g = $e(() => {
    const x = i == null ? void 0 : i.getCameraSettings().facingMode;
    return x ? r ?? x === "user" : r ?? rx(t);
  }, [i, r, t]);
  he(() => {
    const x = () => {
      e !== We.LOADING && n(We.RUNNING);
    }, C = () => {
      a(r === void 0 ? !g : !r);
    }, u = async () => {
      if (i) {
        n(We.LOADING);
        try {
          await i.switchCamera(), n(We.RUNNING);
        } catch (p) {
          if (p instanceof Error) {
            o(ne.fromCameraError(p));
            return;
          }
        }
        a(void 0);
      }
    }, f = (p) => {
      var v;
      switch ((v = p.detail) == null ? void 0 : v["instruction"]) {
        case oo.CONTINUE_DETECTION:
          x();
          break;
        case oo.TOGGLE_MIRROR:
          C();
          break;
        case oo.SWITCH_CAMERA:
          u();
          break;
        default:
          return;
      }
    };
    return document.addEventListener(t, f), () => {
      document.removeEventListener(t, f);
    };
  }, [e, i, o, r, n, g, t]);
  const s = {};
  return s.shouldMirror = g, s;
};
function ba(t) {
  t.getTracks().forEach((e) => {
    e.stop();
  });
}
const ro = {};
ro.width = 1920, ro.height = 1080, ro.facingMode = "user";
const gx = ro;
class bn extends XI {
  constructor(e) {
    super();
    X(this, "videoRef");
    X(this, "mediaStream", null);
    X(this, "videoTrack", null);
    X(this, "availableCameraProperties", []);
    this.videoRef = e;
  }
  async initWebcam(e = {}) {
    const n = await this.getBestCamera(e.facingMode);
    await this.getAvailableCamerasInfo();
    const o = this.getConstraints(e, n);
    await this.startWebcam(o), ex() && await this.startWebcam(o);
  }
  async startWebcam(e = {}) {
    var n;
    return this.stopCamera(), ma() && await Si(-37 * -11 + 7162 + -113 * 63), this.mediaStream = await navigator.mediaDevices.getUserMedia(e), this.videoRef.srcObject = this.mediaStream, await this.videoRef.play(), this.videoTrack = (n = this.mediaStream) == null ? void 0 : n.getVideoTracks()[4603 + -4603 * 1], this.checkVideoTrackSettings(), this.videoTrack;
  }
  checkVideoTrackSettings() {
    var o;
    const e = (o = this.videoTrack) == null ? void 0 : o.getSettings();
    if (!(e != null && e.height) || !(e != null && e.width))
      throw new ne("Could not init camera settings");
    if (Math.min(e == null ? void 0 : e.width, e == null ? void 0 : e.height) < AI)
      throw this.stopCamera(), new ne("Could not init video because of low camera resolution: " + e.width + "x" + e.height + ".");
  }
  async getBestCamera(e) {
    const n = {};
    return n.video = !0, this.mediaStream = await navigator.mediaDevices.getUserMedia(n), this.stopCamera(), Lg() && e === "environment" ? (await bn.getVideoInputDeviceList()).find((a) => a.label.includes("back") && a.label.includes("0")) : void (-6073 * 1 + 3577 + 2496);
  }
  async getAvailableCamerasInfo() {
    const e = await bn.getVideoInputDeviceList();
    for (const n of e) {
      ma() && await Si(5527 * -1 + -6871 * -1 + -894);
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
        this.availableCameraProperties.push(u), ba(a);
      } catch (o) {
        o instanceof Error && ne.logError(o);
      }
    }
  }
  getConstraints(e, n) {
    const o = { ...gx, ...e };
    o.deviceId = n ? { exact: n.deviceId } : void (8269 * -1 + 8821 * -1 + -2 * -8545);
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
    return o.drawImage(this.videoRef, -907 * -6 + 8902 + -14344, -8665 + -173 * -11 + 21 * 322), n;
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
    const e = this.videoTrack.getConstraints(), n = this.videoTrack.getSettings(), o = await bn.getVideoInputDeviceList();
    if (o.length <= 4 + -1 * -6134 + -6137)
      return;
    const r = o.findIndex((s) => s.deviceId === n.deviceId), a = o[r + (317 * -2 + -12 * -701 + 707 * -11)] ?? o[-1 * -7302 + -3303 + 129 * -31], g = this.getConstraints(e, a);
    await this.startWebcam(g);
  }
  stopCamera() {
    this.mediaStream && (ba(this.mediaStream), this.videoRef.srcObject = null);
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
const sx = (t, i) => {
  var s;
  const e = Ht(), { handleError: n, setIsCameraReady: o } = Ko(), [r, a] = Fe(), g = so((x) => {
    a((C) => ox(x, C));
  }, []);
  return he(() => ((async () => {
    if (!(t != null && t.current)) {
      n(new ne("Something went wrong during video initialization"));
      return;
    }
    const C = new bn(t.current);
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
}, cx = (t) => {
  he(() => (window.addEventListener("beforeunload", t.endSession), () => {
    t.endSession(), window.removeEventListener("beforeunload", t.endSession);
  }), [t]);
}, Ix = (t, i) => {
  const [e, n] = Fe();
  he(() => {
    const o = () => {
      !t.current || e === window.innerWidth || (n(window.innerWidth), WI(i, t.current.getBoundingClientRect()));
    };
    return o(), window.addEventListener("resize", o), () => {
      window.removeEventListener("resize", o);
    };
  }, [t, i, e]);
};
class $i extends Array {
  constructor(e) {
    super();
    X(this, "size");
    this.size = e;
  }
  pushFixed(...e) {
    if (e.length > this.size) {
      const n = e.slice(-this.size);
      this.push(...n);
      return;
    }
    this.length === this.size && this.splice(-1 * 6055 + 2243 * 1 + 2 * 1906, e.length), this.push(...e);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(1 * -2780 + -5632 + 2804 * 3);
  }
}
const xx = (t, i) => {
  const { height: e, shiftX: n, shiftY: o, width: r } = i;
  return !(t.x < n || t.x > n + r || t.y < o || t.y > o + e);
}, lx = (t, i) => Object.values(t).every((e) => xx(e, i));
function ux(t) {
  return Zn(Math.abs(t));
}
const Cx = () => {
  const [t, i] = Fe(null), e = Ht(new $i(-1 * -7732 + -32 * 6 + 55 * -137));
  function n(r) {
    const { z: a } = r.accelerationIncludingGravity || {};
    if (!a)
      return;
    e.current.pushFixed(ux(a));
    const g = Zn(Yg(e.current)), s = {};
    s.z = g, i(s);
  }
  he(() => (window.addEventListener("devicemotion", ix(n, yI), !0), () => {
    window.removeEventListener("devicemotion", n, !0);
  }), []);
  const o = {};
  return o.acceleration = t, o;
};
function xo() {
  throw new Error("Cycle detected");
}
var dx = Symbol.for("preact-signals");
function qi() {
  if (Mt > -9948 + -1 * -9949)
    Mt--;
  else {
    for (var t, i = !1; void (7 * 327 + 2406 + 5 * -939) !== yn; ) {
      var e = yn;
      for (yn = void (6953 + -98 * -56 + -12441), Gi++; void (-4626 + 4626 * 1) !== e; ) {
        var n = e.o;
        if (e.o = void (9805 + -4742 * -2 + -19289), e.f &= -(5846 * 1 + -5472 + -1 * 371), !(146 * -18 + -2972 + 5608 & e.f) && jg(e))
          try {
            e.c();
          } catch (o) {
            !i && (t = o, i = !(1 * 7531 + 3 * -2188 + -967 * 1));
          }
        e = n;
      }
    }
    if (Gi = 12 * -268 + -3977 + -7193 * -1, Mt--, i)
      throw t;
  }
}
var ie = void 0, yn = void (-22 * 306 + 7933 + -1201), Mt = -19 * 362 + -1354 * 1 + -42 * -196, Gi = 0, lo = 0;
function Dg(t) {
  if (ie !== void 0) {
    var i = t.n;
    if (void (5830 + -35 * 229 + 2185) === i || i.t !== ie)
      return i = { i: 0, S: t, p: ie.s, n: void (-1920 * -3 + 11 * -581 + -631 * -1), t: ie, e: void (219 * 37 + -9542 * 1 + -1439 * -1), x: void (-7885 + -8315 * -1 + -430), r: i }, void (5234 + -8728 * -1 + -13962) !== ie.s && (ie.s.n = i), ie.s = i, t.n = i, 32 & ie.f && t.S(i), i;
    if (-(3895 + -9 * 61 + -223 * 15) === i.i)
      return i.i = -17 * -269 + 3551 + -8124, void (-7 * -922 + 5630 + -12084) !== i.n && (i.n.p = i.p, void (-1343 * 2 + -1499 * -3 + -1811) !== i.p && (i.p.n = i.n), i.p = ie.s, i.n = void 0, ie.s.n = i, ie.s = i), i;
  }
}
function ue(t) {
  this.v = t, this.i = -9463 * 1 + -79 * 79 + 15704, this.n = void (83 * 13 + -2933 + 1854), this.t = void (11 * 802 + -7575 + -1 * 1247);
}
ue.prototype.brand = dx, ue.prototype.h = function() {
  return !(-1 * 1153 + 3549 + -2396);
}, ue.prototype.S = function(t) {
  this.t !== t && void (-10269 + -163 * -63) === t.e && (t.x = this.t, void (307 * 23 + 4425 + -11486) !== this.t && (this.t.e = t), this.t = t);
}, ue.prototype.U = function(t) {
  if (void (3865 * 2 + -676 + -7054) !== this.t) {
    var i = t.e, e = t.x;
    void (-2315 * -2 + 1889 * 5 + -5 * 2815) !== i && (i.x = e, t.e = void (2135 * -4 + 3010 * -2 + 224 * 65)), void (-7 * 27 + -83 * -57 + -3 * 1514) !== e && (e.e = i, t.x = void (5717 + -5717 * 1)), t === this.t && (this.t = e);
  }
}, ue.prototype.subscribe = function(t) {
  var i = this;
  return er(function() {
    var e = i.value, n = 9 * -348 + -39 * -71 + 395 & this.f;
    this.f &= -(33 * -71 + -3050 + 2713 * 2);
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
  var t = Dg(this);
  return void (-2 * -366 + 2493 * 3 + -161 * 51) !== t && (t.i = this.i), this.v;
}, set: function(t) {
  if (ie instanceof lt && function() {
    throw new Error("Computed cannot have side-effects");
  }(), t !== this.v) {
    Gi > 5 * 349 + 89 * 58 + -3 * 2269 && xo(), this.v = t, this.i++, lo++, Mt++;
    try {
      for (var i = this.t; void (-5661 + 6 * -583 + 9159) !== i; i = i.x)
        i.t.N();
    } finally {
      qi();
    }
  }
} });
function Xg(t) {
  return new ue(t);
}
function jg(t) {
  for (var i = t.s; void (-321 * 27 + 4924 + -1 * -3743) !== i; i = i.n)
    if (i.S.i !== i.i || !i.S.h() || i.S.i !== i.i)
      return !(3 * -2929 + -1 * -2919 + 5868);
  return !(21 * -337 + 85 * -43 + 10733);
}
function Jg(t) {
  for (var i = t.s; i !== void 0; i = i.n) {
    var e = i.S.n;
    if (void (-3258 + 543 * 6) !== e && (i.r = e), i.S.n = i, i.i = -(977 * -7 + 137 * -59 + 14923), void (3883 + -3 * -2531 + -38 * 302) === i.n) {
      t.s = i;
      break;
    }
  }
}
function Mg(t) {
  for (var i = t.s, e = void (8365 + 1 * 9341 + 17706 * -1); i !== void 0; ) {
    var n = i.p;
    -(-6458 + 18 * 375 + -1 * 291) === i.i ? (i.S.U(i), void (-1 * -1523 + -3657 + 194 * 11) !== n && (n.n = i.n), void (4709 + 4709 * -1) !== i.n && (i.n.p = n)) : e = i, i.S.n = i.r, void (6593 + 1 * -6593) !== i.r && (i.r = void (-5 * -573 + -7 * -581 + 6932 * -1)), i = n;
  }
  t.s = e;
}
function lt(t) {
  ue.call(this, void (-3076 + -2 * -1538)), this.x = t, this.s = void (-4238 * 2 + -8085 + 16561 * 1), this.g = lo - (1 * -1450 + -2274 + -25 * -149), this.f = -9662 + -537 * -18;
}
(lt.prototype = new ue()).h = function() {
  if (this.f &= -(223 * -6 + -6030 + 7371), 5486 + 7 * -287 + -3476 & this.f)
    return !(-9259 * 1 + 1867 * 5 + -75 * 1);
  if ((-2754 + 155 * 18 & this.f) == 32)
    return !(67 * 22 + -1 * -1911 + -677 * 5);
  if (this.f &= -(-7814 * -1 + -6764 + 1045 * -1), this.g === lo)
    return !(-6896 * 1 + -2103 + 1 * 8999);
  if (this.g = lo, this.f |= -44 * -178 + -481 + -7350, this.i > 6873 + -27 * -243 + -13434 * 1 && !jg(this))
    return this.f &= -(-269 + 1 * 271), !(-1 * -9874 + -3428 + -6446);
  var t = ie;
  try {
    Jg(this), ie = this;
    var i = this.x();
    (-6852 + -13 * 251 + 921 * 11 & this.f || this.v !== i || this.i === 0) && (this.v = i, this.f &= -(45 * -121 + 6620 + -1158), this.i++);
  } catch (e) {
    this.v = e, this.f |= -12341 + 9 * 1373, this.i++;
  }
  return ie = t, Mg(this), this.f &= -2, !(1036 * -7 + -1 * 6815 + -9 * -1563);
}, lt.prototype.S = function(t) {
  if (void (2198 + -11 * 138 + -40 * 17) === this.t) {
    this.f |= -5 * 172 + 5553 + -4657;
    for (var i = this.s; void (767 * -7 + 2 * -3361 + 1 * 12091) !== i; i = i.n)
      i.S.S(i);
  }
  ue.prototype.S.call(this, t);
}, lt.prototype.U = function(t) {
  if (void (2974 * -2 + -1263 + 7211) !== this.t && (ue.prototype.U.call(this, t), this.t === void 0)) {
    this.f &= -(5 * 1586 + -5385 + -2512);
    for (var i = this.s; void (2 * 4387 + -9542 * -1 + -19 * 964) !== i; i = i.n)
      i.S.U(i);
  }
}, lt.prototype.N = function() {
  if (!(-157 * -61 + -7596 + -1 * 1979 & this.f)) {
    this.f |= 2 * -3203 + -3263 + 9675;
    for (var t = this.t; void (5191 + 79 * -1 + -5112) !== t; t = t.x)
      t.t.N();
  }
}, lt.prototype.peek = function() {
  if (this.h() || xo(), 16 & this.f)
    throw this.v;
  return this.v;
}, Object.defineProperty(lt.prototype, "value", { get: function() {
  2992 + 7706 * -1 + 4715 & this.f && xo();
  var t = Dg(this);
  if (this.h(), void (-9534 + 3084 * 2 + 3366) !== t && (t.i = this.i), 1 * 7439 + -2770 * -2 + 87 * -149 & this.f)
    throw this.v;
  return this.v;
} });
function Ax(t) {
  return new lt(t);
}
function Ug(t) {
  var i = t.u;
  if (t.u = void (6076 + 30 * -37 + -4966), typeof i == "function") {
    Mt++;
    var e = ie;
    ie = void (-167 * 19 + 9998 + -6825);
    try {
      i();
    } catch (n) {
      throw t.f &= -(-2463 + 493 * 5), t.f |= -3379 * 1 + -632 * 2 + 4651, _i(t), n;
    } finally {
      ie = e, qi();
    }
  }
}
function _i(t) {
  for (var i = t.s; void (4481 + -3 * -1027 + -2 * 3781) !== i; i = i.n)
    i.S.U(i);
  t.x = void (-1 * 6640 + 4 * 714 + 172 * 22), t.s = void (1 * 2687 + -8753 * -1 + -11440), Ug(t);
}
function px(t) {
  if (ie !== this)
    throw new Error("Out-of-order effect");
  Mg(this), ie = t, this.f &= -(-8287 + -4 * -662 + -5641 * -1), 8 * 1002 + -4 * -1726 + -1864 * 8 & this.f && _i(this), qi();
}
function hn(t) {
  this.x = t, this.u = void (1210 + -306 * -1 + -1516), this.s = void (9449 + -11 * 859), this.o = void (-1 * 5646 + -2933 + 8579), this.f = 1014 + 563 * 11 + -1025 * 7;
}
hn.prototype.c = function() {
  var t = this.S();
  try {
    if (393 * 5 + 5476 + -1 * 7433 & this.f || void (-7271 + 15 * 450 + 521) === this.x)
      return;
    var i = this.x();
    typeof i == "function" && (this.u = i);
  } finally {
    t();
  }
}, hn.prototype.S = function() {
  -8131 * -1 + 75 * -77 + -2355 & this.f && xo(), this.f |= 1, this.f &= -(-1201 * 7 + -9896 + 168 * 109), Ug(this), Jg(this), Mt++;
  var t = ie;
  return ie = this, px.bind(this, t);
}, hn.prototype.N = function() {
  !(2673 * 3 + -1 * -9209 + 27 * -638 & this.f) && (this.f |= -377 * -19 + 2 * -1357 + 4447 * -1, this.o = yn, yn = this);
}, hn.prototype.d = function() {
  this.f |= 3317 * 3 + 478 * -19 + 3 * -287, 5426 + -775 * 7 & this.f || _i(this);
};
function er(t) {
  var i = new hn(t);
  try {
    i.c();
  } catch (e) {
    throw i.d(), e;
  }
  return i.d.bind(i);
}
var ni;
function Jt(t, i) {
  S[t] = i.bind(null, S[t] || function() {
  });
}
function Jn(t) {
  ni && ni(), ni = t && t.S();
}
function Qg(t) {
  var i = this, e = t.data, n = zg(e);
  n.value = e;
  var o = $e(function() {
    for (var r = i.__v; r = r.__; )
      if (r.__c) {
        r.__c.__$f |= 109 * -17 + -5901 + 7758;
        break;
      }
    return i.__$u.c = function() {
      var a;
      !La(o.peek()) && ((a = i.base) == null ? void (-136 * 25 + 9244 + 4 * -1461) : a.nodeType) === 3 ? i.base.data = o.peek() : (i.__$f |= -8921 + -1271 * -2 + 6380, i.setState({}));
    }, Ax(function() {
      var a = n.value.value;
      return 2 * 1339 + -4098 * 1 + 1420 === a ? 1733 * 4 + 5716 + -12648 : !(1993 + -1 * 1993) === a ? "" : a || "";
    });
  }, []);
  return o.value;
}
Qg.displayName = "_st";
var Zi = {};
Zi.configurable = !(-69 + 3539 * 1 + -3470), Zi.value = void (-4 * 1392 + 233 * 1 + 5335);
var ki = {};
ki.configurable = !(-9843 + -2 * -250 + 9343), ki.value = Qg;
var Ki = {};
Ki.configurable = !(2 * -3930 + 3 * 291 + 6987), Ki.get = function() {
  var t = {};
  return t.data = this, t;
};
var Hi = {};
Hi.configurable = !(-21 * -103 + -2956 + -61 * -13), Hi.value = 1;
var Cn = {};
Cn.constructor = Zi, Cn.type = ki, Cn.props = Ki, Cn.__b = Hi, Object.defineProperties(ue.prototype, Cn), Jt("__b", function(t, i) {
  if (typeof i.type == "string") {
    var e, n = i.props;
    for (var o in n)
      if (o !== "children") {
        var r = n[o];
        r instanceof ue && (e || (i.__np = e = {}), e[o] = r, n[o] = r.peek());
      }
  }
  t(i);
}), Jt("__r", function(t, i) {
  Jn();
  var e, n = i.__c;
  n && (n.__$f &= -(-37 * 95 + 1572 * -4 + 53 * 185), void (2765 * -1 + 139 * -2 + -1 * -3043) === (e = n.__$u) && (n.__$u = e = function(o) {
    var r;
    return er(function() {
      r = this;
    }), r.c = function() {
      n.__$f |= 1 * -1613 + -1628 * -1 + -14, n.setState({});
    }, r;
  }())), Jn(e), t(i);
}), Jt("__e", function(t, i, e, n) {
  Jn(), t(i, e, n);
}), Jt("diffed", function(t, i) {
  Jn();
  var e;
  if (typeof i.type == "string" && (e = i.__e)) {
    var n = i.__np, o = i.props;
    if (n) {
      var r = e.U;
      if (r)
        for (var a in r) {
          var g = r[a];
          void (-1 * -3134 + -543 * -14 + -10736) !== g && !(a in n) && (g.d(), r[a] = void (1 * -2778 + -1 * 9178 + -14 * -854));
        }
      else
        e.U = r = {};
      for (var s in n) {
        var x = r[s], C = n[s];
        void (-181 * -16 + -8976 + 6080) === x ? (x = hx(e, s, C, o), r[s] = x) : x.o(C, o);
      }
    }
  }
  t(i);
});
function hx(t, i, e, n) {
  var o = i in t && t.ownerSVGElement === void 0, r = Xg(e);
  return { o: function(a, g) {
    r.value = a, n = g;
  }, d: er(function() {
    var a = r.value.value;
    n[i] !== a && (n[i] = a, o ? t[i] = a : a ? t.setAttribute(i, a) : t.removeAttribute(i));
  }) };
}
Jt("unmount", function(t, i) {
  if (typeof i.type == "string") {
    var e = i.__e;
    if (e) {
      var n = e.U;
      if (n) {
        e.U = void (-18 * -529 + -7364 + -1079 * 2);
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
      g && (a.__$u = void 0, g.d());
    }
  }
  t(i);
}), Jt("__h", function(t, i, e, n) {
  (n < -13 * -597 + -2647 * 1 + -5111 || -1439 + 1 * 6717 + -5269 === n) && (i.__$f |= -6064 + -4 * 1262 + 11114), t(i, e, n);
}), Oe.prototype.shouldComponentUpdate = function(t, i) {
  var e = this.__$u;
  if (!(e && void (-1675 + -5 * -335) !== e.s || -941 + 945 * 1 & this.__$f))
    return !(-2104 * 4 + -6 * -1411 + 1 * -50);
  if (4606 + -3579 * -1 + 1 * -8182 & this.__$f)
    return !(-4 * 30 + 9007 + -8887);
  for (var n in i)
    return !(-191 * -32 + 6221 * -1 + 109);
  for (var o in t)
    if (o !== "__source" && t[o] !== this.props[o])
      return !(-31 * -58 + 23 * -111 + 5 * 151);
  for (var r in this.props)
    if (!(r in t))
      return !(-31 * 173 + 1 * -8837 + 100 * 142);
  return !(3 * -10 + -478 * -11 + 5227 * -1);
};
function zg(t) {
  return $e(function() {
    return Xg(t);
  }, []);
}
const tr = (t) => {
  const { height: i, width: e } = Ng(t), n = (t.width - e) / (-3167 + 1 * -6231 + 100 * 94), o = (t.height - i) / (1 * 6676 + 3376 + -10050), r = {};
  return r.shiftX = n, r.shiftY = o, r.width = e, r.height = i, r;
}, $g = (t, i) => {
  const { height: e, width: n } = Ng(t), o = Ho(t.width, t.height), r = n - o * i * (701 * -9 + -65 * -113 + 94 * -11), a = e - o * i * (31 * -96 + 21 * 5 + 2873), g = (t.width - r) / (155 * 39 + 1 * -7853 + 1810), s = (t.height - a) / (-8701 * -1 + 6765 + -15464), x = {};
  return x.shiftX = g, x.shiftY = s, x.width = r, x.height = a, x;
}, oi = (t, i) => {
  const { shiftX: e, shiftY: n } = tr(t), o = {};
  return o.x = i.x + e, o.y = i.y + n, o;
}, fx = (t, i) => ({ ...i, topLeft: oi(t, i.topLeft), bottomRight: oi(t, i.bottomRight), faceCenter: oi(t, i.faceCenter) }), qg = (t, i) => {
  const { faceCenter: e, faceSize: n } = t, o = MI(n, i), r = {};
  r.x = e.x, r.y = e.y - o;
  const a = {};
  a.x = e.x + o, a.y = e.y;
  const g = {};
  g.x = e.x, g.y = e.y + o;
  const s = {};
  s.x = e.x - o, s.y = e.y;
  const x = {};
  return x.top = r, x.right = a, x.bottom = g, x.left = s, Xt(x);
}, mx = (t, i) => {
  const {
    bottomRight: e,
    faceCenter: n,
    topLeft: o
  } = i, r = {
    topLeft: o,
    width: e.x - o.x,
    height: e.y - o.y
  };
  Rg(t, r, "rgba(255, 0, 0, 0.3)", !0), Pg(t, n, "lime");
}, bx = (t, i, e) => {
  const n = qg(i, e);
  Object.values(n).map((o) => Pg(t, o, "orange"));
}, yx = ({
  cameraResolution: t,
  detectionDetails: i,
  isImageMirror: e
}) => {
  const {
    faceCameraOptions: {
      thresholds: n
    }
  } = Vg(), o = Ht(null);
  if (he(() => {
    if (!o.current)
      return;
    o.current.width = t.width, o.current.height = t.height, DI(o.current);
    const p = tr(t), v = $g(t, n.outOfBoundsThreshold), E = JI(t);
    i.value && (mx(o.current, i.value.face), bx(o.current, i.value.face, t), ti(o.current, p, "lime"), ti(o.current, v, "yellow"), ti(o.current, E, "blue"));
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
  } = i.value, f = {
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
  return u && (f["SAM version"] = u), x.length > 0 && (f["Invalid validators"] = x.join(", ")), xe(aI, {
    ref: o,
    cameraResolution: t,
    detectionDetails: f,
    isImageMirror: e
  });
}, vx = async () => WebAssembly.validate(new Uint8Array([7423 + 13 * -571, -7624 + -9094 * 1 + 16815, 1 * -9602 + -664 * 10 + 16357, 222 + -1 * -3068 + -3181 * 1, -6 * -1234 + 1404 + -1 * 8807, -7084 * -1 + 28 * -137 + 2 * -1624, 1 * -3299 + -6544 + -579 * -17, 431 * -12 + 3 * 971 + 251 * 9, 1371 + 5099 * -1 + -1243 * -3, 4023 + -1114 * 3 + -676, -7485 + -3182 * -1 + 4304, 96, 307 * 20 + -6171 + 31, 5185 + -162 * 32, 3 * 3103 + -269 * -30 + -17256, -69 * 85 + -229 * 19 + 11 * 929, 26 * -207 + 4595 * -1 + 1 * 9979, 1, 732 + -2 * 366, 10, -152 * -47 + -1124 + 10 * -601, 1, -11 * 831 + 8509 + 640, 0, -223 + 28 * 53 + -598 * 2, 1716 + 26 * -66, 253, 3991 * -1 + 8775 + 251 * -19, 253, -8306 + -206 * -35 + -6 * -199, -2 * 3253 + -1 * 6949 + 13466]));
async function wx() {
  const t = {};
  t.name = Hg, t.length = 256;
  const i = await window.crypto.subtle.generateKey(t, !0, ["encrypt", "decrypt"]), e = Uint8Array.from(Array(-3 * -1455 + 2694 + 1 * -7043).fill(13621 + 1 * -13621)), n = window.crypto.getRandomValues(e), o = {};
  return o.key = i, o.iv = n, o;
}
async function Bx(t) {
  const { iv: i, key: e } = await wx(), n = {};
  n.name = Hg, n.iv = i;
  const o = await window.crypto.subtle.encrypt(n, e, t), r = await window.crypto.subtle.exportKey("raw", e), a = {};
  return a.message = o, a.key = r, a.iv = i, a;
}
function Sx(t) {
  const i = new ArrayBuffer(t.length), e = new Uint8Array(i);
  for (let n = -1 * -2327 + -1 * -967 + -3294, o = t.length; n < o; n++)
    e[n] = t.charCodeAt(n);
  return i;
}
function Gx() {
  const t = "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", i = window.atob(t), e = window.atob(i), n = Sx(e), o = {};
  return o.name = Wg, o.hash = fI, window.crypto.subtle.importKey("spki", n, o, !0, ["encrypt"]);
}
async function Zx(t) {
  const i = await Gx(), e = {};
  return e.name = Wg, window.crypto.subtle.encrypt(e, i, t);
}
async function kx(t) {
  const { iv: i, key: e, message: n } = await Bx(t), o = await Zx(e), r = {};
  return r.key = o, r.iv = i, r.message = n, r;
}
async function Kx(t) {
  const i = await window.crypto.subtle.digest("SHA-1", t);
  return Array.from(new Uint8Array(i)).map((e) => e.toString(16).padStart(-1266 + -317 * -4, "0")).join("");
}
class Hx {
  constructor() {
    X(this, "samVersion", null);
    X(this, "isDetectorInitialized", !1);
    X(this, "isInCandidateSelection", !1);
    X(this, "lastImage", null);
    X(this, "bestImage", null);
    X(this, "detectionRecord", []);
    X(this, "candidateSelectionImages", []);
    X(this, "thresholds", null);
    X(this, "acceleration", null);
    X(this, "imagesForDuplicateDetection", new $i(pI));
  }
  async initDetector(i) {
    await this.detector.initSamModule(location.href, i);
    const e = await this.detector.getSamVersion();
    this.setSamVersion(e), this.isDetectorInitialized = !0;
  }
  async getInstructionSet() {
    return await vx() ? fa.SIMD : fa.NO_SIMD;
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
    return i === vI;
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
    const e = i.length / bI, n = e / (-4715 + -2 * 2627 + -169 * -59), o = i.length / (-8513 * 1 + 1566 + 1 * 6949), r = await Kx(i.slice(o - n, o + n));
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
    var g = "./this.program", s = !(5 * -1249 + 880 * -9 + -1574 * -9), x = !1;
    s = typeof window == "object", x = typeof importScripts == "function";
    var C = "", u;
    (s || x) && (x ? C = self.location.href : document.currentScript && (C = document.currentScript.src), t && (C = t), 4739 + 3637 * -1 + 2 * -551 !== C.indexOf("blob:") ? C = C.substr(0, C.lastIndexOf("/") + (1 * -2361 + 3139 * 3 + -1 * 7055)) : C = "", x && (u = function(c) {
      var I = new XMLHttpRequest();
      return I.open("GET", c, !(1 * 8819 + -5479 + -3339)), I.responseType = "arraybuffer", I.send(null), new Uint8Array(I.response);
    }));
    var f = e.printErr || console.warn.bind(console);
    for (a in r)
      r.hasOwnProperty(a) && (e[a] = r[a]);
    r = null, e.thisProgram && (g = e.thisProgram);
    var p;
    e.wasmBinary && (p = e.wasmBinary), e.noExitRuntime && e.noExitRuntime, typeof WebAssembly != "object" && et("no native wasm support detected");
    var v, E = !(3142 * -3 + -1036 * 6 + 15643);
    function G(c) {
      c || et("Assertion failed: undefined");
    }
    var Z = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void (3016 + 434 * 1 + -3450);
    function V(c, I, l) {
      var A = te;
      if (957 * -5 + -8891 + 13676 < l) {
        l = I + l - (717 * 11 + 2920 + -10806);
        for (var m = 7155 + -2 * 518 + 211 * -29; m < c.length; ++m) {
          var b = c.charCodeAt(m);
          if (-3 * 4204 + -104955 + -19207 * -9 <= b && 42218 + 41 * 1855 + 18 * -3385 >= b) {
            var B = c.charCodeAt(++m);
            b = 85408 + -102 * 727 + -54282 * -1 + ((b & -501 * -4 + -2 * 3679 + 6377) << 1 * 580 + -2 * 3802 + 7034) | B & 3 * -1579 + 7 * 382 + -2 * -1543;
          }
          if (-4170 + -327 * 4 + 1 * 5605 >= b) {
            if (I >= l)
              break;
            A[I++] = b;
          } else {
            if (-6 * 419 + 1941 * 5 + 1286 * -4 >= b) {
              if (I + (-523 * -5 + 4 * 2161 + -433 * 26) >= l)
                break;
              A[I++] = 8294 + 1 * 8384 + 2 * -8243 | b >> -1 * -1319 + -97 * 21 + 4 * 181;
            } else {
              if (377 * -212 + 40707 + 4 * 26188 >= b) {
                if (I + 2 >= l)
                  break;
                A[I++] = 1 * 1172 + 182 * 43 + -8774 | b >> -7087 + 2638 * -1 + 9737;
              } else {
                if (I + (5029 * 1 + -6140 + 2 * 557) >= l)
                  break;
                A[I++] = 7187 + 2 * -4332 + 1717 | b >> -1 * 3005 + -1979 + 5002, A[I++] = -365 * -1 + 506 * 7 + -3779 | b >> -17 * 194 + -262 * -34 + 6 * -933 & 9709 + -6315 * -1 + 1 * -15961;
              }
              A[I++] = -709 + 5113 * -1 + -50 * -119 | b >> -3649 + 1 * 3655 & -8833 * -1 + 1 * 8623 + -17393;
            }
            A[I++] = -1515 * -3 + 9369 + -13786 | b & 63;
          }
        }
        A[I] = -9360 + -18 * 22 + 2 * 4878;
      }
    }
    var P = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0;
    function Q(c, I) {
      for (var l = c >> 1, A = l + I / (-12869 + 1 * 12871); !(l >= A) && me[l]; )
        ++l;
      if (l <<= 1489 * 2 + -5745 * -1 + 2 * -4361, 4720 + 61 * -83 + 375 < l - c && P)
        return P.decode(te.subarray(c, l));
      for (l = -2 * -2101 + 1 * 389 + 4591 * -1, A = ""; ; ) {
        var m = je[c + 2 * l >> 1];
        if (12372 + -6186 * 2 == m || l == I / (-33 * -70 + 73 * 26 + -701 * 6))
          return A;
        ++l, A += String.fromCharCode(m);
      }
    }
    function T(c, I, l) {
      if (void (3164 + 69 * 44 + -6200) === l && (l = 2147483647), -11 * 221 + -1203 + -36 * -101 > l)
        return 2 * 4166 + 8494 + -16826;
      l -= -3361 + -1 * -3363;
      var A = I;
      l = l < (4128 + 2 * -2063) * c.length ? l / (-1023 * 2 + -1201 * 7 + 10455) : c.length;
      for (var m = -3365 * 1 + -3140 + 6505; m < l; ++m)
        je[I >> 5187 + -38 * 211 + 2832] = c.charCodeAt(m), I += 2 * 562 + 1404 + -2526;
      return je[I >> 8456 + 54 * -72 + 4567 * -1] = -54 * 123 + -1 * -3763 + 2879, I - A;
    }
    function j(c) {
      return (5151 + -8998 * 1 + 3849) * c.length;
    }
    function K(c, I) {
      for (var l = -8968 + -365 * -16 + 3128, A = ""; !(l >= I / (-102 * -87 + -640 + -8230)); ) {
        var m = ae[c + 4 * l >> 2];
        if (-472 * -14 + -9203 * -1 + 15811 * -1 == m)
          break;
        ++l, 65536 <= m ? (m -= 183 * -537 + -5 * 1390 + 170757, A += String.fromCharCode(51234 + -11 * -2181 + -19929 | m >> 10, 10511 * -4 + 29613 + -68751 * -1 | m & -1566 * -4 + -341 + -4900)) : A += String.fromCharCode(m);
      }
      return A;
    }
    function $(c, I, l) {
      if (void (-7 * 1428 + -20 * -29 + 44 * 214) === l && (l = -3719912471 + -1 * 3683234309 + 9550630427), -3849 * 1 + 1 * 2342 + -1511 * -1 > l)
        return 5443 + -23 * 172 + -1487 * 1;
      var A = I;
      l = A + l - (-8997 + -9001 * -1);
      for (var m = -3515 + 1 * -6217 + -3244 * -3; m < c.length; ++m) {
        var b = c.charCodeAt(m);
        if (74325 + -3 * -19653 + -77988 <= b && -24 * -1626 + -9283 * 5 + 64734 >= b) {
          var B = c.charCodeAt(++m);
          b = -1 * -96711 + -72237 + 419 * 98 + ((b & 1023) << 488 * -18 + -7929 + -7 * -2389) | B & 202 * -13 + -48 * -21 + 2641;
        }
        if (ae[I >> -2 * -1460 + -3243 + -5 * -65] = b, I += -125 + -7 * 742 + 5323, I + (7676 * -1 + 70 * 49 + 4250) > l)
          break;
      }
      return ae[I >> 2] = -59 * -71 + 7506 + 1 * -11695, I - A;
    }
    function z(c) {
      for (var I = 17 * 302 + -15 * 153 + -2839, l = 6620 + 3310 * -2; l < c.length; ++l) {
        var A = c.charCodeAt(l);
        55296 <= A && -13 * 3373 + 2 * 251 + 20138 * 5 >= A && ++l, I += 3782 + -33 * 161 + 1535;
      }
      return I;
    }
    var ee, fe, te, je, me, ae, Ce, ve, Pe;
    function we(c) {
      ee = c, e.HEAP8 = fe = new Int8Array(c), e.HEAP16 = je = new Int16Array(c), e.HEAP32 = ae = new Int32Array(c), e.HEAPU8 = te = new Uint8Array(c), e.HEAPU16 = me = new Uint16Array(c), e.HEAPU32 = Ce = new Uint32Array(c), e.HEAPF32 = ve = new Float32Array(c), e.HEAPF64 = Pe = new Float64Array(c);
    }
    var Je = e.INITIAL_MEMORY || 16777216, Ee = {};
    Ee.initial = Je / (13730 + -2 * -25903), Ee.maximum = 32768, e.wasmMemory ? v = e.wasmMemory : v = new WebAssembly.Memory(Ee), v && (ee = v.buffer), Je = ee.byteLength, we(ee);
    var de = [], Ot = [], sn = [], At = [];
    function pt() {
      var c = e.preRun.shift();
      de.unshift(c);
    }
    var Ge = 1913 * -5 + -4065 + 13630, Ze = null;
    e.preloadedImages = {}, e.preloadedAudios = {};
    function et(c) {
      throw e.onAbort && e.onAbort(c), f(c), E = !(-1 * 6717 + -1 * 8317 + 15034), c = new WebAssembly.RuntimeError("abort(" + c + "). Build with -s ASSERTIONS=1 for more info."), o(c), c;
    }
    function Ye(c) {
      var I = ke;
      return String.prototype.startsWith ? I.startsWith(c) : -6821 + 6821 * 1 === I.indexOf(c);
    }
    function Vt() {
      return Ye("data:application/octet-stream;base64,");
    }
    var ke = "sam.wasm";
    if (!Vt()) {
      var Ne = ke;
      ke = e.locateFile ? e.locateFile(Ne, C) : C + Ne;
    }
    function gr() {
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
    function b0() {
      var c = {};
      return c.credentials = "same-origin", p || !s && !x || typeof fetch != "function" || Ye("file://") ? Promise.resolve().then(gr) : fetch(ke, c).then(function(I) {
        if (!I.ok)
          throw "failed to load wasm binary file at '" + ke + "'";
        return I.arrayBuffer();
      }).catch(function() {
        return gr();
      });
    }
    function Kn(c) {
      for (; -1264 + 8149 * 1 + -6885 < c.length; ) {
        var I = c.shift();
        if (typeof I == "function")
          I(e);
        else {
          var l = I.Ba;
          typeof l == "number" ? void (389 * -19 + 9256 + -1865) === I.ta ? Vo("v", l)() : Vo("vi", l)(I.ta) : l(void (-11202 + 5601 * 2) === I.ta ? null : I.ta);
        }
      }
    }
    function Vo(c, I) {
      var l = [];
      return function() {
        l.length = arguments.length;
        for (var A = -3 * 609 + 1 * -2231 + 1 * 4058; A < arguments.length; A++)
          l[A] = arguments[A];
        return l && l.length ? e["dynCall_" + c].apply(null, [I].concat(l)) : e["dynCall_" + c].call(null, I);
      };
    }
    function y0(c) {
      this.da = c - (-2989 * 1 + -3699 + 6704), this.Oa = function(I) {
        ae[this.da + (-2 * -692 + -1967 + 591) >> 193 * 7 + -3617 + 2268] = I;
      }, this.La = function(I) {
        ae[this.da + (-11 * -241 + -4 * -1300 + -1 * 7851) >> 1 * 3649 + 7589 * 1 + -11236] = I;
      }, this.Ma = function() {
        ae[this.da + (1 * -4135 + 9655 + -5516) >> 6758 + -6756 * 1] = 495 + 33 * -15;
      }, this.Ka = function() {
        fe[this.da + (-47 * -127 + 47 * 93 + -8 * 1291) >> 3135 + -3 * -2699 + -11232] = 12947 + -1177 * 11;
      }, this.Na = function() {
        fe[this.da + (-1223 * 8 + -5740 + 15537) >> -8 * 758 + -332 + -13 * -492] = 9852 + -7182 * -1 + -17034;
      }, this.Fa = function(I, l) {
        this.Oa(I), this.La(l), this.Ma(), this.Ka(), this.Na();
      };
    }
    function Hn() {
      return 0 < Hn.xa;
    }
    function Ro(c) {
      switch (c) {
        case 5649 + 12 * -73 + 2 * -2386:
          return 16943 + 16943 * -1;
        case 302 * -13 + 8308 + -4380:
          return 1;
        case -43 * -104 + 1566 + -3017 * 2:
          return -597 + 3 * 2704 + -7513;
        case 8:
          return 823 * 7 + -173 * -11 + -7661;
        default:
          throw new TypeError("Unknown type size: " + c);
      }
    }
    var sr = void (2375 * 1 + 2956 + -5331);
    function be(c) {
      for (var I = ""; te[c]; )
        I += sr[te[c++]];
      return I;
    }
    var Rt = {}, ht = {}, Wn = {};
    function Po(c) {
      if (void (-10 * -829 + -1 * 6722 + -1568) === c)
        return "_unknown";
      c = c.replace(/[^a-zA-Z0-9_]/g, "$");
      var I = c.charCodeAt(1543 * 1 + -4781 + -2 * -1619);
      return -2825 * -1 + 3465 + -6242 <= I && 263 * 26 + -2160 + -4621 >= I ? "_" + c : c;
    }
    function Eo(c, I) {
      return c = Po(c), new Function("body", "return function " + c + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(I);
    }
    function Yo(c) {
      var I = Error, l = Eo(c, function(A) {
        this.name = c, this.message = A, A = Error(A).stack, A !== void 0 && (this.stack = this.toString() + `
` + A.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return l.prototype = Object.create(I.prototype), l.prototype.constructor = l, l.prototype.toString = function() {
        return this.message === void 0 ? this.name : this.name + ": " + this.message;
      }, l;
    }
    var Pt = void (6581 + 5007 * -1 + -1574);
    function F(c) {
      throw new Pt(c);
    }
    var cr = void (-387 + 3 * 129);
    function On(c) {
      throw new cr(c);
    }
    function Et(c, I, l) {
      function A(y) {
        y = l(y), y.length !== c.length && On("Mismatched type converter count");
        for (var k = -9031 + -1959 * -5 + -764; k < c.length; ++k)
          tt(c[k], y[k]);
      }
      c.forEach(function(y) {
        Wn[y] = I;
      });
      var m = Array(I.length), b = [], B = 9806 + -51 * -21 + -10877;
      I.forEach(function(y, k) {
        ht.hasOwnProperty(y) ? m[k] = ht[y] : (b.push(y), Rt.hasOwnProperty(y) || (Rt[y] = []), Rt[y].push(function() {
          m[k] = ht[y], ++B, B === b.length && A(m);
        }));
      }), 14 * -699 + 4968 + 4818 === b.length && A(m);
    }
    function tt(c, I, l) {
      if (l = l || {}, !("argPackAdvance" in I))
        throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var A = I.name;
      if (c || F('type "' + A + '" must have a positive integer typeid pointer'), ht.hasOwnProperty(c)) {
        if (l.Ea)
          return;
        F("Cannot register type '" + A + "' twice");
      }
      ht[c] = I, delete Wn[c], Rt.hasOwnProperty(c) && (I = Rt[c], delete Rt[c], I.forEach(function(m) {
        m();
      }));
    }
    function v0(c) {
      var I = {};
      return I.count = c.count, I.oa = c.oa, I.pa = c.pa, I.da = c.da, I.fa = c.fa, I.ga = c.ga, I.ha = c.ha, I;
    }
    function No(c) {
      F(c.A.fa.ea.name + " instance already deleted");
    }
    var Lo = !(697 + 1 * -696);
    function Ir() {
    }
    function xr(c) {
      --c.count.value, 5931 + -2095 * -1 + -8026 === c.count.value && (c.ga ? c.ha.na(c.ga) : c.fa.ea.na(c.da));
    }
    function cn(c) {
      return typeof FinalizationGroup > "u" ? (cn = function(I) {
        return I;
      }, c) : (Lo = new FinalizationGroup(function(I) {
        for (var l = I.next(); !l.done; l = I.next())
          l = l.value, l.da ? xr(l) : console.warn("object already deleted: " + l.da);
      }), cn = function(I) {
        return Lo.register(I, I.A, I.A), I;
      }, Ir = function(I) {
        Lo.unregister(I.A);
      }, cn(c));
    }
    var In = void (-146 * 5 + 17 * -358 + -71 * -96), xn = [];
    function Fo() {
      for (; xn.length; ) {
        var c = xn.pop();
        c.A.oa = !(5704 + 3 * -725 + -3528), c.delete();
      }
    }
    function st() {
    }
    var lr = {};
    function w0(c, I) {
      var l = e;
      if (void (-1755 * -1 + 4189 + -5944) === l[c].ja) {
        var A = l[c];
        l[c] = function() {
          return l[c].ja.hasOwnProperty(arguments.length) || F("Function '" + I + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + l[c].ja + ")!"), l[c].ja[arguments.length].apply(this, arguments);
        }, l[c].ja = [], l[c].ja[A.ya] = A;
      }
    }
    function ur(c, I, l) {
      e.hasOwnProperty(c) ? ((void (-4606 + 1 * -4069 + 8675) === l || e[c].ja !== void 0 && void (-1 * 203 + 223 * -14 + 665 * 5) !== e[c].ja[l]) && F("Cannot register public name '" + c + "' twice"), w0(c, c), e.hasOwnProperty(l) && F("Cannot register multiple overloads of a function with the same number of arguments (" + l + ")!"), e[c].ja[l] = I) : (e[c] = I, void (1966 * 2 + -7738 + 3806 * 1) !== l && (e[c].Ra = l));
    }
    function B0(c, I, l, A, m, b, B, y) {
      this.name = c, this.constructor = I, this.ma = l, this.na = A, this.ia = m, this.Ca = b, this.qa = B, this.Aa = y;
    }
    function Vn(c, I, l) {
      for (; I !== l; )
        I.qa || F("Expected null or instance of " + l.name + ", got an instance of " + I.name), c = I.qa(c), I = I.ia;
      return c;
    }
    function S0(c, I) {
      return I === null ? (this.ua && F("null is not a valid " + this.name), -2496 + 312 * 8) : (I.A || F('Cannot pass "' + Nt(I) + '" as a ' + this.name), I.A.da || F("Cannot pass deleted object as a pointer of type " + this.name), Vn(I.A.da, I.A.fa.ea, this.ea));
    }
    function G0(c, I) {
      if (I === null) {
        if (this.ua && F("null is not a valid " + this.name), this.sa) {
          var l = this.Ha();
          return c !== null && c.push(this.na, l), l;
        }
        return -949 * 5 + -5 * -1315 + -1830;
      }
      if (I.A || F('Cannot pass "' + Nt(I) + '" as a ' + this.name), I.A.da || F("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && I.A.fa.ra && F("Cannot convert argument of type " + (I.A.ha ? I.A.ha.name : I.A.fa.name) + " to parameter type " + this.name), l = Vn(I.A.da, I.A.fa.ea, this.ea), this.sa)
        switch (I.A.ga === void 0 && F("Passing raw pointer to smart pointer is illegal"), this.Pa) {
          case -9411 * -1 + -9643 + 4 * 58:
            I.A.ha === this ? l = I.A.ga : F("Cannot convert argument of type " + (I.A.ha ? I.A.ha.name : I.A.fa.name) + " to parameter type " + this.name);
            break;
          case -1 * -3188 + 2632 + 5819 * -1:
            l = I.A.ga;
            break;
          case -1061 * -2 + -1219 + -901:
            if (I.A.ha === this)
              l = I.A.ga;
            else {
              var A = I.clone();
              l = this.Ia(l, Yt(function() {
                A.delete();
              })), c !== null && c.push(this.na, l);
            }
            break;
          default:
            F("Unsupporting sharing policy");
        }
      return l;
    }
    function Z0(c, I) {
      return I === null ? (this.ua && F("null is not a valid " + this.name), -1478 + -8852 * 1 + 5165 * 2) : (I.A || F('Cannot pass "' + Nt(I) + '" as a ' + this.name), I.A.da || F("Cannot pass deleted object as a pointer of type " + this.name), I.A.fa.ra && F("Cannot convert argument of type " + I.A.fa.name + " to parameter type " + this.name), Vn(I.A.da, I.A.fa.ea, this.ea));
    }
    function Rn(c) {
      return this.fromWireType(Ce[c >> -68 * -81 + 474 * -12 + 182 * 1]);
    }
    function Cr(c, I, l) {
      return I === l ? c : void (-13 * 401 + -1501 + 1 * 6714) === l.ia ? null : (c = Cr(c, I, l.ia), c === null ? null : l.Aa(c));
    }
    var ln = {};
    function k0(c, I) {
      for (void (-6060 + -65 * 1 + 6125 * 1) === I && F("ptr should not be undefined"); c.ia; )
        I = c.qa(I), c = c.ia;
      return ln[I];
    }
    function Pn(c, I) {
      I.fa && I.da || On("makeClassHandle requires ptr and ptrType"), !!I.ha != !!I.ga && On("Both smartPtrType and smartPtr must be specified");
      var l = {};
      l.value = 1, I.count = l;
      var A = {};
      A.value = I;
      var m = {};
      return m.A = A, cn(Object.create(c, m));
    }
    function nt(c, I, l, A) {
      this.name = c, this.ea = I, this.ua = l, this.ra = A, this.sa = !(1 * -1259 + 1 * -6301 + -1 * -7561), this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void (-8819 * 1 + 3415 * -1 + 12234), void (-1 * -9128 + -2861 * -3 + -89 * 199) !== I.ia ? this.toWireType = G0 : (this.toWireType = A ? S0 : Z0, this.ka = null);
    }
    function dr(c, I, l) {
      e.hasOwnProperty(c) || On("Replacing nonexistant public symbol"), void (8225 * 1 + -1 * 8467 + 242) !== e[c].ja && l !== void 0 ? e[c].ja[l] = I : (e[c] = I, e[c].ya = l);
    }
    function ct(c, I) {
      c = be(c);
      var l = Vo(c, I);
      return typeof l != "function" && F("unknown function pointer with signature " + c + ": " + I), l;
    }
    var Ar = void (1 * 3311 + 1 * -3814 + 503);
    function pr(c) {
      c = Hr(c);
      var I = be(c);
      return ot(c), I;
    }
    function un(c, I) {
      function l(b) {
        m[b] || ht[b] || (Wn[b] ? Wn[b].forEach(l) : (A.push(b), m[b] = !(-2452 * 2 + -2629 + 279 * 27)));
      }
      var A = [], m = {};
      throw I.forEach(l), new Ar(c + ": " + A.map(pr).join([", "]));
    }
    function hr(c, I) {
      for (var l = [], A = 1 * 6040 + -2 * 193 + -5654; A < c; A++)
        l.push(ae[(I >> 1 * -4897 + -4547 + 9446) + A]);
      return l;
    }
    function En(c) {
      for (; c.length; ) {
        var I = c.pop();
        c.pop()(I);
      }
    }
    function fr(c, I, l) {
      return c instanceof Object || F(l + ' with invalid "this": ' + c), c instanceof I.ea.constructor || F(l + ' incompatible with "this" of type ' + c.constructor.name), c.A.da || F("cannot call emscripten binding method " + l + " on deleted object"), Vn(c.A.da, c.A.fa.ea, I.ea);
    }
    var mr = {};
    mr.value = void (-9780 + 1 * 6487 + 3293);
    var br = {};
    br.value = null;
    var yr = {};
    yr.value = !(-6349 + 3 * 1019 + 3292);
    var vr = {};
    vr.value = !(2252 * -3 + -10 * 3 + 1 * 6787);
    var To = [], Ke = [{}, mr, br, yr, vr];
    function Do(c) {
      419 * -4 + 2472 + -792 < c && -2 * 2011 + -1 * 9345 + 1 * 13367 === --Ke[c].Ja && (Ke[c] = void (-6724 + -1545 * -3 + -1 * -2089), To.push(c));
    }
    function Yt(c) {
      switch (c) {
        case void (-1 * 2465 + -284 * -27 + -5203 * 1):
          return -137 + 138 * 1;
        case null:
          return -383 * -19 + 349 * -16 + -1 * 1691;
        case !(31 * 73 + 2 * -234 + -1795):
          return 3;
        case !(137 * 71 + -2779 + -6947):
          return 99 + 5 * 557 + -2880;
        default:
          var I = To.length ? To.pop() : Ke.length, l = {};
          return l.Ja = 1, l.value = c, Ke[I] = l, I;
      }
    }
    function Nt(c) {
      if (c === null)
        return "null";
      var I = typeof c;
      return I === "object" || I === "array" || I === "function" ? c.toString() : "" + c;
    }
    function K0(c, I) {
      switch (I) {
        case -7788 + 864 * -7 + 13838:
          return function(l) {
            return this.fromWireType(ve[l >> -1 * -2633 + 1 * 9803 + -12434]);
          };
        case -3550 + 121 * -67 + -2915 * -4:
          return function(l) {
            return this.fromWireType(Pe[l >> -17 * 376 + -87 * -37 + 397 * 8]);
          };
        default:
          throw new TypeError("Unknown float type: " + c);
      }
    }
    function H0(c) {
      var I = Function;
      if (!(I instanceof Function))
        throw new TypeError("new_ called with constructor type " + typeof I + " which is not a function");
      var l = Eo(I.name || "unknownFunctionName", function() {
      });
      return l.prototype = I.prototype, l = new l(), c = I.apply(l, c), c instanceof Object ? c : l;
    }
    function W0(c, I, l) {
      switch (I) {
        case -179 * -43 + -1 * -9587 + -58 * 298:
          return l ? function(A) {
            return fe[A];
          } : function(A) {
            return te[A];
          };
        case -1 * 6239 + 4649 * -1 + 1 * 10889:
          return l ? function(A) {
            return je[A >> 1];
          } : function(A) {
            return me[A >> 9519 + -1913 * 1 + 2535 * -3];
          };
        case -9051 + -291 * 34 + 1 * 18947:
          return l ? function(A) {
            return ae[A >> 1 * 3032 + 4651 + -7681];
          } : function(A) {
            return Ce[A >> -971 * -1 + 8317 + -4643 * 2];
          };
        default:
          throw new TypeError("Unknown integer type: " + c);
      }
    }
    function Xo(c) {
      return c || F("Cannot use deleted val. handle = " + c), Ke[c].value;
    }
    function wr(c, I) {
      var l = ht[c];
      return l === void 0 && F(I + " has unknown type " + pr(c)), l;
    }
    var O0 = {}, Br = {};
    function Sr() {
      if (!jo) {
        var c = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: g || "./this.program" }, I;
        for (I in Br)
          c[I] = Br[I];
        var l = [];
        for (I in c)
          l.push(I + "=" + c[I]);
        jo = l;
      }
      return jo;
    }
    var jo, Gr = [];
    function Zr(c) {
      var I = {}, l;
      for (l in c)
        (function(A) {
          var m = c[A];
          I[A] = typeof m == "function" ? function() {
            Gr.push(A);
            try {
              return m.apply(null, arguments);
            } finally {
              if (E)
                return;
              var b = Gr.pop();
              G(b === A);
            }
          } : m;
        })(l);
      return I;
    }
    for (var kr = Array(1045 + -4874 * -1 + -5663), Yn = 2084 + 2084 * -1; 15 * -75 + -9463 + -4 * -2711 > Yn; ++Yn)
      kr[Yn] = String.fromCharCode(Yn);
    sr = kr, Pt = e.BindingError = Yo("BindingError"), cr = e.InternalError = Yo("InternalError"), st.prototype.isAliasOf = function(c) {
      if (!(this instanceof st && c instanceof st))
        return !(-4259 * -1 + -3457 + -801);
      var I = this.A.fa.ea, l = this.A.da, A = c.A.fa.ea;
      for (c = c.A.da; I.ia; )
        l = I.qa(l), I = I.ia;
      for (; A.ia; )
        c = A.qa(c), A = A.ia;
      return I === A && l === c;
    }, st.prototype.clone = function() {
      if (this.A.da || No(this), this.A.pa)
        return this.A.count.value += -5867 + -1403 * -2 + 3062, this;
      var c = cn(Object.create(Object.getPrototypeOf(this), { A: { value: v0(this.A) } }));
      return c.A.count.value += 2159 + -9722 * -1 + 1188 * -10, c.A.oa = !(-271 * -19 + -1 * 393 + -4755), c;
    }, st.prototype.delete = function() {
      this.A.da || No(this), this.A.oa && !this.A.pa && F("Object already scheduled for deletion"), Ir(this), xr(this.A), this.A.pa || (this.A.ga = void (-1 * -4769 + -7430 + 2661), this.A.da = void (9065 + -3027 * -3 + -18146 * 1));
    }, st.prototype.isDeleted = function() {
      return !this.A.da;
    }, st.prototype.deleteLater = function() {
      return this.A.da || No(this), this.A.oa && !this.A.pa && F("Object already scheduled for deletion"), xn.push(this), -5231 + -3 * -1744 === xn.length && In && In(Fo), this.A.oa = !0, this;
    }, nt.prototype.Da = function(c) {
      return this.wa && (c = this.wa(c)), c;
    }, nt.prototype.va = function(c) {
      this.na && this.na(c);
    }, nt.prototype.argPackAdvance = 2106 + -2098 * 1, nt.prototype.readValueFromPointer = Rn, nt.prototype.deleteObject = function(c) {
      c !== null && c.delete();
    }, nt.prototype.fromWireType = function(c) {
      function I() {
        return this.sa ? Pn(this.ea.ma, { fa: this.Ga, da: l, ha: this, ga: c }) : Pn(this.ea.ma, { fa: this, da: c });
      }
      var l = this.Da(c);
      if (!l)
        return this.va(c), null;
      var A = k0(this.ea, l);
      if (void (-4 * 2406 + -3091 + 12715) !== A)
        return 397 * -5 + -6184 + 8169 === A.A.count.value ? (A.A.da = l, A.A.ga = c, A.clone()) : (A = A.clone(), this.va(c), A);
      if (A = this.ea.Ca(l), A = lr[A], !A)
        return I.call(this);
      A = this.ra ? A.za : A.pointerType;
      var m = Cr(l, this.ea, A.ea);
      return m === null ? I.call(this) : this.sa ? Pn(A.ea.ma, { fa: A, da: m, ha: this, ga: c }) : Pn(A.ea.ma, { fa: A, da: m });
    }, e.getInheritedInstanceCount = function() {
      return Object.keys(ln).length;
    }, e.getLiveInheritedInstances = function() {
      var c = [], I;
      for (I in ln)
        ln.hasOwnProperty(I) && c.push(ln[I]);
      return c;
    }, e.flushPendingDeletes = Fo, e.setDelayFunction = function(c) {
      In = c, xn.length && In && In(Fo);
    }, Ar = e.UnboundTypeError = Yo("UnboundTypeError"), e.count_emval_handles = function() {
      for (var c = 12516 + -894 * 14, I = 3 * -1942 + -7069 + 12900; I < Ke.length; ++I)
        void (4 * -2362 + 6976 + 2472) !== Ke[I] && ++c;
      return c;
    }, e.get_first_emval = function() {
      for (var c = 5; c < Ke.length; ++c)
        if (void (8630 + 13 * 639 + 16937 * -1) !== Ke[c])
          return Ke[c];
      return null;
    }, Ot.push({ Ba: function() {
      Kr();
    } });
    var V0 = { z: function(c) {
      return Nn(c + (-11282 + -1883 * -6)) + 16;
    }, u: function(c, I, l) {
      throw new y0(c).Fa(I, l), "uncaught_exception" in Hn ? Hn.xa++ : Hn.xa = 1, c;
    }, w: function(c, I, l, A, m) {
      var b = Ro(l);
      I = be(I), tt(c, { name: I, fromWireType: function(B) {
        return !!B;
      }, toWireType: function(B, y) {
        return y ? A : m;
      }, argPackAdvance: 8, readValueFromPointer: function(B) {
        if (-1667 * 1 + 53 * -164 + 370 * 28 === l)
          var y = fe;
        else if (280 * -32 + -2769 + 1 * 11731 === l)
          y = je;
        else if (8513 + 6393 * 1 + -14902 === l)
          y = ae;
        else
          throw new TypeError("Unknown boolean type size: " + I);
        return this.fromWireType(y[B >> b]);
      }, ka: null });
    }, i: function(c, I, l, A, m, b, B, y, k, H, W, O, M) {
      W = be(W), b = ct(m, b), y && (y = ct(B, y)), H && (H = ct(k, H)), M = ct(O, M);
      var se = Po(W);
      ur(se, function() {
        un("Cannot construct " + W + " due to unbound types", [A]);
      }), Et([c, I, l], A ? [A] : [], function(R) {
        if (R = R[-1 * -2699 + -5049 + -2 * -1175], A)
          var Me = R.ea, Ae = Me.ma;
        else
          Ae = st.prototype;
        R = Eo(se, function() {
          if (Object.getPrototypeOf(this) !== Lt)
            throw new Pt("Use 'new' to construct " + W);
          if (void (8871 + -2374 * 1 + -6497) === Ft.la)
            throw new Pt(W + " has no accessible constructor");
          var Or = Ft.la[arguments.length];
          if (void (-1726 + -5 * -444 + -494) === Or)
            throw new Pt("Tried to invoke ctor of " + W + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(Ft.la).toString() + ") parameters instead!");
          return Or.apply(this, arguments);
        });
        var Be = {};
        Be.value = R;
        var ft = {};
        ft.constructor = Be;
        var Lt = Object.create(Ae, ft);
        R.prototype = Lt;
        var Ft = new B0(W, R, Lt, M, Me, b, y, H);
        Me = new nt(W, Ft, !(-5 * -593 + -9121 + 6156), !(-4 * 35 + -6921 + 33 * 214)), Ae = new nt(W + "*", Ft, !(-308 + 3 * 103), !(-9982 + 9171 * -1 + 19154));
        var Wr = new nt(W + " const*", Ft, !(1711 * 4 + -1939 + 8 * -613), !(-7742 + 1106 * 7)), Mo = {};
        return Mo.pointerType = Ae, Mo.za = Wr, lr[c] = Mo, dr(se, R), [Me, Ae, Wr];
      });
    }, h: function(c, I, l, A, m, b) {
      G(-7958 * 1 + 3 * -101 + 8261 < I);
      var B = hr(I, l);
      m = ct(A, m);
      var y = [b], k = [];
      Et([], [c], function(H) {
        H = H[311 * -2 + -9 * -489 + -3779];
        var W = "constructor " + H.name;
        if (void (-74 * -53 + -3 * 681 + -1879 * 1) === H.ea.la && (H.ea.la = []), H.ea.la[I - (44 * 113 + -4 * -69 + -9 * 583)] !== void 0)
          throw new Pt("Cannot register multiple constructors with identical number of parameters (" + (I - 1) + ") for class '" + H.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return H.ea.la[I - (5662 + 7331 * -1 + 1670)] = function() {
          un("Cannot construct " + H.name + " due to unbound types", B);
        }, Et([], B, function(O) {
          return H.ea.la[I - (-5 * 995 + 2 * 2981 + 2 * -493)] = function() {
            arguments.length !== I - (-1 * 8543 + 3622 + 2461 * 2) && F(W + " called with " + arguments.length + " arguments, expected " + (I - (-1376 + -78 * -19 + 1 * -105))), k.length = 0, y.length = I;
            for (var M = 1; M < I; ++M)
              y[M] = O[M].toWireType(k, arguments[M - (-12812 + -12813 * -1)]);
            return M = m.apply(null, y), En(k), O[149 * -31 + -14 * -25 + 4269].fromWireType(M);
          }, [];
        }), [];
      });
    }, b: function(c, I, l, A, m, b, B, y, k, H) {
      I = be(I), m = ct(A, m), Et([], [c], function(W) {
        W = W[-9783 + -445 * 13 + 15568];
        var O = W.name + "." + I, M = { get: function() {
          un("Cannot access " + O + " due to unbound types", [l, B]);
        }, enumerable: !(3813 * -2 + -6041 + 13667), configurable: !0 };
        return k ? M.set = function() {
          un("Cannot access " + O + " due to unbound types", [l, B]);
        } : M.set = function() {
          F(O + " is a read-only property");
        }, Object.defineProperty(W.ea.ma, I, M), Et([], k ? [l, B] : [l], function(se) {
          var R = se[0], Me = { get: function() {
            var Be = fr(this, W, O + " getter");
            return R.fromWireType(m(b, Be));
          }, enumerable: !(-685 + -5 * -137) };
          if (k) {
            k = ct(y, k);
            var Ae = se[-86 * -22 + -180 + -29 * 59];
            Me.set = function(Be) {
              var ft = fr(this, W, O + " setter"), Lt = [];
              k(H, ft, Ae.toWireType(Lt, Be)), En(Lt);
            };
          }
          return Object.defineProperty(W.ea.ma, I, Me), [];
        }), [];
      });
    }, v: function(c, I) {
      I = be(I), tt(c, { name: I, fromWireType: function(l) {
        var A = Ke[l].value;
        return Do(l), A;
      }, toWireType: function(l, A) {
        return Yt(A);
      }, argPackAdvance: 8, readValueFromPointer: Rn, ka: null });
    }, m: function(c, I, l) {
      l = Ro(l), I = be(I), tt(c, { name: I, fromWireType: function(A) {
        return A;
      }, toWireType: function(A, m) {
        if (typeof m != "number" && typeof m != "boolean")
          throw new TypeError('Cannot convert "' + Nt(m) + '" to ' + this.name);
        return m;
      }, argPackAdvance: 8, readValueFromPointer: K0(I, l), ka: null });
    }, c: function(c, I, l, A, m, b) {
      var B = hr(I, l);
      c = be(c), m = ct(A, m), ur(c, function() {
        un("Cannot call " + c + " due to unbound types", B);
      }, I - (-17 * -337 + -1594 + -4134)), Et([], B, function(y) {
        var k = c, H = c;
        y = [y[-1 * -1262 + -3096 + -1834 * -1], null].concat(y.slice(-5220 + 3 * -1837 + 2683 * 4));
        var W = m, O = y.length;
        2 > O && F("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var M = y[-5149 + -3 * -371 + 4037] !== null && !(8247 + -434 * 19), se = !(1961 + -185 * 37 + 4885), R = 1620 + -1039 * 5 + -149 * -24; R < y.length; ++R)
          if (y[R] !== null && void (-35 * 5 + 4827 * -1 + 82 * 61) === y[R].ka) {
            se = !(4 * 1939 + -3055 + -1 * 4701);
            break;
          }
        var Me = y[2 * -4252 + -142 * -29 + 4386].name !== "void", Ae = "", Be = "";
        for (R = 0; R < O - (7 * -107 + -7364 + -3 * -2705); ++R)
          Ae += (3 * 818 + -6397 + 1 * 3943 !== R ? ", " : "") + "arg" + R, Be += (964 * 8 + -101 * 57 + -1955 !== R ? ", " : "") + "arg" + R + "Wired";
        H = "return function " + Po(H) + "(" + Ae + `) {
if (arguments.length !== ` + (O - (7371 + 6614 * -1 + -755)) + `) {
throwBindingError('function ` + H + " called with ' + arguments.length + ' arguments, expected " + (O - (-434 + 1 * 2096 + 5 * -332)) + ` args!');
}
`, se && (H += `var destructors = [];
`);
        var ft = se ? "destructors" : "null";
        for (Ae = "throwBindingError invoker fn runDestructors retType classParam".split(" "), W = [F, W, b, En, y[-9101 + -1 * 2657 + 11758], y[107 * 37 + 144 * -48 + 2954]], M && (H += "var thisWired = classParam.toWireType(" + ft + `, this);
`), R = -2882 + 7365 * -1 + 10247; R < O - (8161 * 1 + -4491 * 1 + -3668); ++R)
          H += "var arg" + R + "Wired = argType" + R + ".toWireType(" + ft + ", arg" + R + "); // " + y[R + 2].name + `
`, Ae.push("argType" + R), W.push(y[R + (-23 * -360 + -1 * -1227 + -9505)]);
        if (M && (Be = "thisWired" + (870 + -70 * 38 + 1790 < Be.length ? ", " : "") + Be), H += (Me ? "var rv = " : "") + "invoker(fn" + (-6534 + -9 * 127 + 7677 * 1 < Be.length ? ", " : "") + Be + `);
`, se)
          H += `runDestructors(destructors);
`;
        else
          for (R = M ? 9889 + -425 * -7 + 19 * -677 : -3700 + -1234 * -3; R < y.length; ++R)
            O = 9128 + -1 * 6029 + 1549 * -2 === R ? "thisWired" : "arg" + (R - (-82 * -21 + 1 * 7867 + 1 * -9587)) + "Wired", y[R].ka !== null && (H += O + "_dtor(" + O + "); // " + y[R].name + `
`, Ae.push(O + "_dtor"), W.push(y[R].ka));
        return Me && (H += `var ret = retType.fromWireType(rv);
return ret;
`), Ae.push(H + `}
`), y = H0(Ae).apply(null, W), dr(k, y, I - (1 * 6635 + -5371 + -1263)), [];
      });
    }, e: function(c, I, l, A, m) {
      function b(H) {
        return H;
      }
      I = be(I), -(112 * -89 + 6829 + 3140) === m && (m = -1 * -6686558619 + -1597624888 + -793966436);
      var B = Ro(l);
      if (-1 * 9398 + 193 * 19 + 5731 === A) {
        var y = 32 - 8 * l;
        b = function(H) {
          return H << y >>> y;
        };
      }
      var k = -(2669 + -584 * 1 + -2084) != I.indexOf("unsigned");
      tt(c, { name: I, fromWireType: b, toWireType: function(H, W) {
        if (typeof W != "number" && typeof W != "boolean")
          throw new TypeError('Cannot convert "' + Nt(W) + '" to ' + this.name);
        if (W < A || W > m)
          throw new TypeError('Passing a number "' + Nt(W) + '" from JS side to C/C++ side to an argument of type "' + I + '", which is outside the valid range [' + A + ", " + m + "]!");
        return k ? W >>> -9051 + 3 * -234 + -3 * -3251 : W | -6602 * 1 + 3361 * -1 + 1107 * 9;
      }, argPackAdvance: 8, readValueFromPointer: W0(I, B, -9241 + -9241 * -1 !== A), ka: null });
    }, d: function(c, I, l) {
      function A(y) {
        y >>= 968 + -1 * -1e4 + -10966;
        var k = Ce;
        return new m(ee, k[y + (5609 + 4217 * -2 + -942 * -3)], k[y]);
      }
      var m = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][I];
      l = be(l);
      var b = {};
      b.name = l, b.fromWireType = A, b.argPackAdvance = 8, b.readValueFromPointer = A;
      var B = {};
      B.Ea = !(9997 + -904 * -2 + -11805), tt(c, b, B);
    }, n: function(c, I) {
      I = be(I);
      var l = I === "std::string";
      tt(c, { name: I, fromWireType: function(A) {
        var m = Ce[A >> 2];
        if (l)
          for (var b = A + 4, B = -14768 + 14768 * 1; B <= m; ++B) {
            var y = A + 4 + B;
            if (B == m || 1 * -4467 + 470 + 3997 == te[y]) {
              if (b) {
                var k = b, H = te, W = k + (y - b);
                for (b = k; H[b] && !(b >= W); )
                  ++b;
                if (-167 + -502 * 1 + 685 < b - k && H.subarray && Z)
                  k = Z.decode(H.subarray(k, b));
                else {
                  for (W = ""; k < b; ) {
                    var O = H[k++];
                    if (O & 2 * -1166 + -2466 * -4 + -1234 * 6) {
                      var M = H[k++] & 63;
                      if (-181 * -17 + 91 * 15 + -4250 == (O & 3891 + -317 * -8 + -1 * 6203))
                        W += String.fromCharCode((O & 31) << -518 * -15 + -4 * 1839 + -408 | M);
                      else {
                        var se = H[k++] & 63;
                        O = -5217 + -1 * 3634 + 9075 == (O & -1973 * -1 + 5630 + -7363) ? (O & 4355 + -4 * 1085) << 1 * -4461 + -1 * -7582 + -3109 | M << 1 * 5666 + 1489 * -2 + 9 * -298 | se : (O & 7) << 9700 + -51 * 15 + -37 * 241 | M << -30 * 317 + 51 * 166 + -22 * -48 | se << 3208 * -1 + 1759 + 1455 | H[k++] & 63, 63441 + 2805 * -29 + 83440 > O ? W += String.fromCharCode(O) : (O -= -66166 + 131702 * 1, W += String.fromCharCode(-26761 + 31 * 2647 | O >> 10, 393 * -101 + -74738 + 170751 | O & 89 * 1 + 115 * -47 + -2113 * -3));
                      }
                    } else
                      W += String.fromCharCode(O);
                  }
                  k = W;
                }
              } else
                k = "";
              if (void (-1 * -895 + -6163 * 1 + -12 * -439) === R)
                var R = k;
              else
                R += String.fromCharCode(-4165 + -314 * 2 + 4793), R += k;
              b = y + (859 * -1 + -2939 + 3799);
            }
          }
        else {
          for (R = Array(m), B = -30 * 31 + 1 * 8803 + -7873; B < m; ++B)
            R[B] = String.fromCharCode(te[A + (4599 + -13 * -14 + 17 * -281) + B]);
          R = R.join("");
        }
        return ot(A), R;
      }, toWireType: function(A, m) {
        m instanceof ArrayBuffer && (m = new Uint8Array(m));
        var b = typeof m == "string";
        b || m instanceof Uint8Array || m instanceof Uint8ClampedArray || m instanceof Int8Array || F("Cannot pass non-string to std::string");
        var B = (l && b ? function() {
          for (var H = 0, W = 1011 + 1 * -191 + -820; W < m.length; ++W) {
            var O = m.charCodeAt(W);
            6750 + 2697 * 18 <= O && -7 * -5243 + 20027 * 2 + -422 * 46 >= O && (O = 8 * -35 + -59 * -1529 + -24395 + ((O & 4 * -1713 + -12 * 587 + -1 * -14919) << 363 * 3 + -412 + 23 * -29) | m.charCodeAt(++W) & -417 + 7 * -358 + 3946), 5362 + 1 * 1747 + -6982 >= O ? ++H : H = 2047 >= O ? H + (-19 * -421 + -785 * 8 + -1717) : -1507 * 77 + 1 * 94831 + 86743 * 1 >= O ? H + (-301 * 14 + -1503 + -22 * -260) : H + (15 * 626 + -1 * 7637 + -1749);
          }
          return H;
        } : function() {
          return m.length;
        })(), y = Nn(1 * -1893 + -2616 + 1 * 4513 + B + (25 * -349 + -708 + 9434));
        if (Ce[y >> -6529 * -1 + 3489 * 2 + -13505] = B, l && b)
          V(m, y + (-5534 + 923 * 6), B + (5323 * -1 + 516 + 4808));
        else if (b)
          for (b = 28 * 107 + 9614 + -970 * 13; b < B; ++b) {
            var k = m.charCodeAt(b);
            -1 * 8726 + -1023 + -4 * -2501 < k && (ot(y), F("String has UTF-16 code units that do not fit in 8 bits")), te[y + (-7094 + 212 * 46 + -2654) + b] = k;
          }
        else
          for (b = -2543 * -1 + 183 * 19 + -6020; b < B; ++b)
            te[y + 4 + b] = m[b];
        return A !== null && A.push(ot, y), y;
      }, argPackAdvance: 8, readValueFromPointer: Rn, ka: function(A) {
        ot(A);
      } });
    }, j: function(c, I, l) {
      if (l = be(l), -19569 + -1 * -19571 === I)
        var A = Q, m = T, b = j, B = function() {
          return me;
        }, y = -5792 + 1265 * 1 + -283 * -16;
      else
        -2661 * -1 + 9 * 1041 + 859 * -14 === I && (A = K, m = $, b = z, B = function() {
          return Ce;
        }, y = 9183 + 37 * 259 + -4691 * 4);
      tt(c, { name: l, fromWireType: function(k) {
        for (var H = Ce[k >> -4020 * 1 + 4 * 2116 + -4442], W = B(), O, M = k + (3089 * 1 + 598 * -5 + -95), se = -5303 + 5303 * 1; se <= H; ++se) {
          var R = k + 4 + se * I;
          (se == H || 6018 + -4 * -1152 + 23 * -462 == W[R >> y]) && (M = A(M, R - M), O === void 0 ? O = M : (O += String.fromCharCode(99 * 19 + -7590 + -173 * -33), O += M), M = R + I);
        }
        return ot(k), O;
      }, toWireType: function(k, H) {
        typeof H != "string" && F("Cannot pass non-string to C++ string type " + l);
        var W = b(H), O = Nn(4469 + -234 * -21 + 1 * -9379 + W + I);
        return Ce[O >> -761 * 2 + -7431 + 8955] = W >> y, m(H, O + (-2651 + -226 * -25 + -2995), W + I), k !== null && k.push(ot, O), O;
      }, argPackAdvance: 8, readValueFromPointer: Rn, ka: function(k) {
        ot(k);
      } });
    }, x: function(c, I) {
      I = be(I);
      var l = {};
      l.Qa = !(-101 * -4 + -5385 + -4981 * -1), l.name = I, l.argPackAdvance = 0, l.fromWireType = function() {
      }, l.toWireType = function() {
      }, tt(c, l);
    }, k: function(c, I, l) {
      c = Xo(c), I = wr(I, "emval::as");
      var A = [], m = Yt(A);
      return ae[l >> 7637 + -13 * 284 + -3943] = m, I.toWireType(A, c);
    }, g: Do, l: function(c, I) {
      return c = Xo(c), I = Xo(I), Yt(c[I]);
    }, p: function(c) {
      var I = O0[c];
      return Yt(void (-1034 * 2 + 8720 + 6652 * -1) === I ? be(c) : I);
    }, o: function(c) {
      En(Ke[c].value), Do(c);
    }, y: function(c, I) {
      return c = wr(c, "_emval_take_value"), c = c.readValueFromPointer(I), Yt(c);
    }, f: function() {
      et();
    }, q: function(c, I, l) {
      te.copyWithin(c, I, I + l);
    }, r: function(c) {
      c >>>= 0;
      var I = te.length;
      if (-525306144 + 3338185 * 824 + -77874648 < c)
        return !1;
      for (var l = 1; 1 * 6914 + -7415 * 1 + -1 * -505 >= l; l *= -431 * -17 + -85 * 28 + -4945) {
        var A = I * (1 + 0.2 / l);
        A = Math.min(A, c + 100663296), A = Math.max(16777216, c, A), 13 * 623 + -743 + -7356 < A % (2 * 45703 + -100561 + 74691) && (A += 52012 + -4 * -3381 - A % (1 * 26819 + -89096 + 127813));
        e: {
          try {
            v.grow(Math.min(-338572 * -2246 + -2835674906 + 4222725842, A) - ee.byteLength + (55095 + 1 * 99748 + -89308) >>> -1 * 8773 + 269 * 4 + 2571 * 3), we(v.buffer);
            var m = 14 * -274 + -8667 + 12504;
            break e;
          } catch {
          }
          m = void (-3 * 1879 + -771 + 6408);
        }
        if (m)
          return !(-8040 + -34 * -248 + -14 * 28);
      }
      return !(6858 + 72 * 17 + 8081 * -1);
    }, s: function(c, I) {
      var l = 0;
      return Sr().forEach(function(A, m) {
        var b = I + l;
        for (m = ae[c + (-1072 + -1619 * -6 + -8638) * m >> 6307 + 40 * 87 + -515 * 19] = b, b = 5908 + 8 * 767 + -12044; b < A.length; ++b)
          fe[m++ >> 1915 + 2 * 1913 + -1 * 5741] = A.charCodeAt(b);
        fe[m >> -9024 + 1901 * 1 + 1 * 7123] = 338 * -22 + -22 * 113 + 9922, l += A.length + (2341 * -1 + -26 * -326 + 1 * -6134);
      }), 1783 + -61 * 122 + -1 * -5659;
    }, t: function(c, I) {
      var l = Sr();
      ae[c >> 2] = l.length;
      var A = 249 * -7 + -2814 + 4557;
      return l.forEach(function(m) {
        A += m.length + (-1 * 1399 + 673 + 727);
      }), ae[I >> 2] = A, -4246 + -1 * -4246;
    }, a: v };
    (function() {
      function c(B) {
        B = B.exports, B = Zr(B), e.asm = B, Ge--, e.monitorRunDependencies && e.monitorRunDependencies(Ge), 3187 * 3 + -14 * -633 + -18423 == Ge && Ze && (B = Ze, Ze = null, B());
      }
      function I(B) {
        c(B.instance);
      }
      function l(B) {
        return b0().then(function(y) {
          return WebAssembly.instantiate(y, m);
        }).then(B, function(y) {
          f("failed to asynchronously prepare wasm: " + y), et(y);
        });
      }
      var A = {};
      A.a = V0;
      var m = A;
      if (Ge++, e.monitorRunDependencies && e.monitorRunDependencies(Ge), e.instantiateWasm)
        try {
          var b = e.instantiateWasm(m, c);
          return b = Zr(b);
        } catch (B) {
          return f("Module.instantiateWasm callback failed with error: " + B), !(11628 + 11627 * -1);
        }
      return function() {
        if (p || typeof WebAssembly.instantiateStreaming != "function" || Vt() || Ye("file://") || typeof fetch != "function")
          return l(I);
        var B = {};
        B.credentials = "same-origin", fetch(ke, B).then(function(y) {
          return WebAssembly.instantiateStreaming(y, m).then(I, function(k) {
            return f("wasm streaming compile failed: " + k), f("falling back to ArrayBuffer instantiation"), l(I);
          });
        });
      }(), {};
    })();
    var Kr = e.___wasm_call_ctors = function() {
      return (Kr = e.___wasm_call_ctors = e.asm.B).apply(null, arguments);
    }, Nn = e._malloc = function() {
      return (Nn = e._malloc = e.asm.C).apply(null, arguments);
    }, ot = e._free = function() {
      return (ot = e._free = e.asm.D).apply(null, arguments);
    }, Hr = e.___getTypeName = function() {
      return (Hr = e.___getTypeName = e.asm.E).apply(null, arguments);
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
    var Ln;
    Ze = function c() {
      Ln || Jo(), Ln || (Ze = c);
    };
    function Jo() {
      function c() {
        if (!Ln && (Ln = !(-9550 + 4 * 2157 + 922), e.calledRun = !(-1224 * -1 + -5760 + 9 * 504), !E)) {
          if (Kn(Ot), Kn(sn), n(e), e.onRuntimeInitialized && e.onRuntimeInitialized(), e.postRun)
            for (typeof e.postRun == "function" && (e.postRun = [e.postRun]); e.postRun.length; ) {
              var I = e.postRun.shift();
              At.unshift(I);
            }
          Kn(At);
        }
      }
      if (!(8 * -407 + 5838 + 1 * -2582 < Ge)) {
        if (e.preRun)
          for (typeof e.preRun == "function" && (e.preRun = [e.preRun]); e.preRun.length; )
            pt();
        Kn(de), 1 * 9278 + -8461 + -817 < Ge || (e.setStatus ? (e.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            e.setStatus("");
          }, 45 * -23 + -7127 * 1 + 8163), c();
        }, -2224 + -2 * -4988 + -7751)) : c());
      }
    }
    if (e.run = Jo, e.preInit)
      for (typeof e.preInit == "function" && (e.preInit = [e.preInit]); -2083 + 633 * -1 + 97 * 28 < e.preInit.length; )
        e.preInit.pop()();
    return Jo(), i.ready;
  };
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const _g = Symbol("Comlink.proxy"), Wx = Symbol("Comlink.endpoint"), Ox = Symbol("Comlink.releaseProxy"), ii = Symbol("Comlink.finalizer"), ao = Symbol("Comlink.thrown"), e0 = (t) => typeof t == "object" && t !== null || typeof t == "function", Vx = {
  canHandle: (t) => e0(t) && t[_g],
  serialize(t) {
    const { port1: i, port2: e } = new MessageChannel();
    return n0(t, i), [e, [e]];
  },
  deserialize(t) {
    return t.start(), i0(t);
  }
}, Rx = {
  canHandle: (t) => e0(t) && ao in t,
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
}, t0 = /* @__PURE__ */ new Map([
  ["proxy", Vx],
  ["throw", Rx]
]);
function Px(t, i) {
  for (const e of t)
    if (i === e || e === "*" || e instanceof RegExp && e.test(i))
      return !0;
  return !1;
}
function n0(t, i = globalThis, e = ["*"]) {
  i.addEventListener("message", function n(o) {
    if (!o || !o.data)
      return;
    if (!Px(e, o.origin)) {
      console.warn(`Invalid origin '${o.origin}' for comlink proxy`);
      return;
    }
    const { id: r, type: a, path: g } = Object.assign({ path: [] }, o.data), s = (o.data.argumentList || []).map(wt);
    let x;
    try {
      const C = g.slice(0, -1).reduce((f, p) => f[p], t), u = g.reduce((f, p) => f[p], t);
      switch (a) {
        case "GET":
          x = u;
          break;
        case "SET":
          C[g.slice(-1)[0]] = wt(o.data.value), x = !0;
          break;
        case "APPLY":
          x = u.apply(C, s);
          break;
        case "CONSTRUCT":
          {
            const f = new u(...s);
            x = Tx(f);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: f, port2: p } = new MessageChannel();
            n0(t, p), x = Fx(f, [f]);
          }
          break;
        case "RELEASE":
          x = void 0;
          break;
        default:
          return;
      }
    } catch (C) {
      x = { value: C, [ao]: 0 };
    }
    Promise.resolve(x).catch((C) => ({ value: C, [ao]: 0 })).then((C) => {
      const [u, f] = Ao(C);
      i.postMessage(Object.assign(Object.assign({}, u), { id: r }), f), a === "RELEASE" && (i.removeEventListener("message", n), o0(i), ii in t && typeof t[ii] == "function" && t[ii]());
    }).catch((C) => {
      const [u, f] = Ao({
        value: new TypeError("Unserializable return value"),
        [ao]: 0
      });
      i.postMessage(Object.assign(Object.assign({}, u), { id: r }), f);
    });
  }), i.start && i.start();
}
function Ex(t) {
  return t.constructor.name === "MessagePort";
}
function o0(t) {
  Ex(t) && t.close();
}
function i0(t, i) {
  return Wi(t, [], i);
}
function Mn(t) {
  if (t)
    throw new Error("Proxy has been released and is not useable");
}
function r0(t) {
  return jt(t, {
    type: "RELEASE"
  }).then(() => {
    o0(t);
  });
}
const uo = /* @__PURE__ */ new WeakMap(), Co = "FinalizationRegistry" in globalThis && new FinalizationRegistry((t) => {
  const i = (uo.get(t) || 0) - 1;
  uo.set(t, i), i === 0 && r0(t);
});
function Yx(t, i) {
  const e = (uo.get(i) || 0) + 1;
  uo.set(i, e), Co && Co.register(t, i, t);
}
function Nx(t) {
  Co && Co.unregister(t);
}
function Wi(t, i = [], e = function() {
}) {
  let n = !1;
  const o = new Proxy(e, {
    get(r, a) {
      if (Mn(n), a === Ox)
        return () => {
          Nx(o), r0(t), n = !0;
        };
      if (a === "then") {
        if (i.length === 0)
          return { then: () => o };
        const g = jt(t, {
          type: "GET",
          path: i.map((s) => s.toString())
        }).then(wt);
        return g.then.bind(g);
      }
      return Wi(t, [...i, a]);
    },
    set(r, a, g) {
      Mn(n);
      const [s, x] = Ao(g);
      return jt(t, {
        type: "SET",
        path: [...i, a].map((C) => C.toString()),
        value: s
      }, x).then(wt);
    },
    apply(r, a, g) {
      Mn(n);
      const s = i[i.length - 1];
      if (s === Wx)
        return jt(t, {
          type: "ENDPOINT"
        }).then(wt);
      if (s === "bind")
        return Wi(t, i.slice(0, -1));
      const [x, C] = ya(g);
      return jt(t, {
        type: "APPLY",
        path: i.map((u) => u.toString()),
        argumentList: x
      }, C).then(wt);
    },
    construct(r, a) {
      Mn(n);
      const [g, s] = ya(a);
      return jt(t, {
        type: "CONSTRUCT",
        path: i.map((x) => x.toString()),
        argumentList: g
      }, s).then(wt);
    }
  });
  return Yx(o, t), o;
}
function Lx(t) {
  return Array.prototype.concat.apply([], t);
}
function ya(t) {
  const i = t.map(Ao);
  return [i.map((e) => e[0]), Lx(i.map((e) => e[1]))];
}
const a0 = /* @__PURE__ */ new WeakMap();
function Fx(t, i) {
  return a0.set(t, i), t;
}
function Tx(t) {
  return Object.assign(t, { [_g]: !0 });
}
function Ao(t) {
  for (const [i, e] of t0)
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
    a0.get(t) || []
  ];
}
function wt(t) {
  switch (t.type) {
    case "HANDLER":
      return t0.get(t.name).deserialize(t.value);
    case "RAW":
      return t.value;
  }
}
function jt(t, i, e) {
  return new Promise((n) => {
    const o = Dx();
    t.addEventListener("message", function r(a) {
      !a.data || !a.data.id || a.data.id !== o || (t.removeEventListener("message", r), n(a.data));
    }), t.start && t.start(), t.postMessage(Object.assign({ id: o }, i), e);
  });
}
function Dx() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
function Xx(t, i) {
  const { z: e } = i || {};
  return !e || !t ? !0 : Math.abs(e) < t;
}
function jx(t, i, e) {
  const n = $g(e, t), o = qg(i, e);
  return lx(o, n);
}
const g0 = "dmFyIHNlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5Owp2YXIgdWUgPSAobywgdSwgZSkgPT4gdSBpbiBvID8gc2UobywgdSwgeyBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwLCB2YWx1ZTogZSB9KSA6IG9bdV0gPSBlOwp2YXIgWW4gPSAobywgdSwgZSkgPT4gKHVlKG8sIHR5cGVvZiB1ICE9ICJzeW1ib2wiID8gdSArICIiIDogdSwgZSksIGUpOwpjb25zdCBXdCA9IHsKICBzaW1kOiAic2FtX3NpbWQud2FzbSIsCiAgc2FtOiAic2FtLndhc20iCn0sIGxlID0gYXN5bmMgKCkgPT4gV2ViQXNzZW1ibHkudmFsaWRhdGUobmV3IFVpbnQ4QXJyYXkoWzAsIDk3LCAxMTUsIDEwOSwgMSwgMCwgMCwgMCwgMSwgNSwgMSwgOTYsIDAsIDEsIDEyMywgMywgMiwgMSwgMCwgMTAsIDEwLCAxLCA4LCAwLCA2NSwgMCwgMjUzLCAxNSwgMjUzLCA5OCwgMTFdKSk7CmNsYXNzIHggZXh0ZW5kcyBFcnJvciB7CiAgY29uc3RydWN0b3IoZSwgbSkgewogICAgc3VwZXIoZSk7CiAgICBZbih0aGlzLCAiY2F1c2UiKTsKICAgIHRoaXMubmFtZSA9ICJBdXRvQ2FwdHVyZUVycm9yIiwgdGhpcy5jYXVzZSA9IG07CiAgfQogIC8vIENoYW5nZSB0aGlzIHRvIERlY29yYXRvciB3aGVuIHRoZXkgd2lsbCBiZSBpbiBzdGFibGUgcmVsZWFzZQogIHN0YXRpYyBsb2dFcnJvcihlKSB7CiAgfQogIHN0YXRpYyBmcm9tQ2FtZXJhRXJyb3IoZSkgewogICAgaWYgKHRoaXMubG9nRXJyb3IoZSksIGUgaW5zdGFuY2VvZiB4KQogICAgICByZXR1cm4gZTsKICAgIGxldCBtOwogICAgc3dpdGNoIChlLm5hbWUpIHsKICAgICAgY2FzZSAiT3ZlcmNvbnN0cmFpbmVkRXJyb3IiOgogICAgICAgIG0gPSAiTWluaW11bSBxdWFsaXR5IHJlcXVpcmVtZW50cyBhcmUgbm90IG1ldCBieSB5b3VyIGNhbWVyYSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdFJlYWRhYmxlRXJyb3IiOgogICAgICBjYXNlICJBYm9ydEVycm9yIjoKICAgICAgICBtID0gIlRoZSB3ZWJjYW0gaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciBhcHBsaWNhdGlvbiI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdEFsbG93ZWRFcnJvciI6CiAgICAgICAgbSA9ICJUbyB1c2UgeW91ciBjYW1lcmEsIHlvdSBtdXN0IGFsbG93IHBlcm1pc3Npb25zIjsKICAgICAgICBicmVhazsKICAgICAgY2FzZSAiTm90Rm91bmRFcnJvciI6CiAgICAgICAgbSA9ICJUaGVyZSBpcyBubyBjYW1lcmEgYXZhaWxhYmxlIHRvIHlvdSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGRlZmF1bHQ6CiAgICAgICAgbSA9ICJBbiB1bmtub3duIGNhbWVyYSBlcnJvciBoYXMgb2NjdXJyZWQiOwogICAgICAgIGJyZWFrOwogICAgfQogICAgcmV0dXJuIG5ldyB4KG0sIGUpOwogIH0KICBzdGF0aWMgZnJvbUVycm9yKGUpIHsKICAgIGlmICh0aGlzLmxvZ0Vycm9yKGUpLCBlIGluc3RhbmNlb2YgeCkKICAgICAgcmV0dXJuIGU7CiAgICBjb25zdCBtID0gIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkIjsKICAgIHJldHVybiBuZXcgeChtKTsKICB9Cn0KY29uc3QgY2UgPSB7CiAgUkdCOiAiUkdCIiwKICBSR0JBOiAiUkdCQSIKfSwgZmUgPSAobykgPT4gTnVtYmVyLnBhcnNlRmxvYXQoby50b0ZpeGVkKDMpKSwgZGUgPSAobywgdSkgPT4gTWF0aC5taW4obywgdSk7CnZhciBoZSA9IGZ1bmN0aW9uKCkgewogIHZhciBvID0gdHlwZW9mIGRvY3VtZW50IDwgInUiICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgPyBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYyA6IHZvaWQgMDsKICByZXR1cm4gZnVuY3Rpb24odSkgewogICAgdSA9IHUgfHwge307CiAgICB2YXIgZTsKICAgIGUgfHwgKGUgPSB0eXBlb2YgdSA8ICJ1IiA/IHUgOiB7fSk7CiAgICB2YXIgbSwgZzsKICAgIGUucmVhZHkgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihuLCB0KSB7CiAgICAgIG0gPSBuLCBnID0gdDsKICAgIH0pOwogICAgdmFyIF8gPSB7fSwgdzsKICAgIGZvciAodyBpbiBlKQogICAgICBlLmhhc093blByb3BlcnR5KHcpICYmIChfW3ddID0gZVt3XSk7CiAgICB2YXIgVCA9ICIuL3RoaXMucHJvZ3JhbSIsIE0gPSAhMSwgRSA9ICExOwogICAgTSA9IHR5cGVvZiB3aW5kb3cgPT0gIm9iamVjdCIsIEUgPSB0eXBlb2YgaW1wb3J0U2NyaXB0cyA9PSAiZnVuY3Rpb24iOwogICAgdmFyIEMgPSAiIiwgUjsKICAgIChNIHx8IEUpICYmIChFID8gQyA9IHNlbGYubG9jYXRpb24uaHJlZiA6IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgKEMgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYyksIG8gJiYgKEMgPSBvKSwgQy5pbmRleE9mKCJibG9iOiIpICE9PSAwID8gQyA9IEMuc3Vic3RyKDAsIEMubGFzdEluZGV4T2YoIi8iKSArIDEpIDogQyA9ICIiLCBFICYmIChSID0gZnVuY3Rpb24obikgewogICAgICB2YXIgdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOwogICAgICByZXR1cm4gdC5vcGVuKCJHRVQiLCBuLCAhMSksIHQucmVzcG9uc2VUeXBlID0gImFycmF5YnVmZmVyIiwgdC5zZW5kKG51bGwpLCBuZXcgVWludDhBcnJheSh0LnJlc3BvbnNlKTsKICAgIH0pKTsKICAgIHZhciBTID0gZS5wcmludEVyciB8fCBjb25zb2xlLndhcm4uYmluZChjb25zb2xlKTsKICAgIGZvciAodyBpbiBfKQogICAgICBfLmhhc093blByb3BlcnR5KHcpICYmIChlW3ddID0gX1t3XSk7CiAgICBfID0gbnVsbCwgZS50aGlzUHJvZ3JhbSAmJiAoVCA9IGUudGhpc1Byb2dyYW0pOwogICAgdmFyIGo7CiAgICBlLndhc21CaW5hcnkgJiYgKGogPSBlLndhc21CaW5hcnkpLCBlLm5vRXhpdFJ1bnRpbWUgJiYgZS5ub0V4aXRSdW50aW1lLCB0eXBlb2YgV2ViQXNzZW1ibHkgIT0gIm9iamVjdCIgJiYgc24oIm5vIG5hdGl2ZSB3YXNtIHN1cHBvcnQgZGV0ZWN0ZWQiKTsKICAgIHZhciBHLCBrbiA9ICExOwogICAgZnVuY3Rpb24gWG4obikgewogICAgICBuIHx8IHNuKCJBc3NlcnRpb24gZmFpbGVkOiB1bmRlZmluZWQiKTsKICAgIH0KICAgIHZhciBLbiA9IHR5cGVvZiBUZXh0RGVjb2RlciA8ICJ1IiA/IG5ldyBUZXh0RGVjb2RlcigidXRmOCIpIDogdm9pZCAwOwogICAgZnVuY3Rpb24gTnQobiwgdCwgcikgewogICAgICB2YXIgaSA9IEY7CiAgICAgIGlmICgwIDwgcikgewogICAgICAgIHIgPSB0ICsgciAtIDE7CiAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBuLmxlbmd0aDsgKythKSB7CiAgICAgICAgICB2YXIgcyA9IG4uY2hhckNvZGVBdChhKTsKICAgICAgICAgIGlmICg1NTI5NiA8PSBzICYmIDU3MzQzID49IHMpIHsKICAgICAgICAgICAgdmFyIGMgPSBuLmNoYXJDb2RlQXQoKythKTsKICAgICAgICAgICAgcyA9IDY1NTM2ICsgKChzICYgMTAyMykgPDwgMTApIHwgYyAmIDEwMjM7CiAgICAgICAgICB9CiAgICAgICAgICBpZiAoMTI3ID49IHMpIHsKICAgICAgICAgICAgaWYgKHQgPj0gcikKICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgaVt0KytdID0gczsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIGlmICgyMDQ3ID49IHMpIHsKICAgICAgICAgICAgICBpZiAodCArIDEgPj0gcikKICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgIGlbdCsrXSA9IDE5MiB8IHMgPj4gNjsKICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICBpZiAoNjU1MzUgPj0gcykgewogICAgICAgICAgICAgICAgaWYgKHQgKyAyID49IHIpCiAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgaVt0KytdID0gMjI0IHwgcyA+PiAxMjsKICAgICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgaWYgKHQgKyAzID49IHIpCiAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgaVt0KytdID0gMjQwIHwgcyA+PiAxOCwgaVt0KytdID0gMTI4IHwgcyA+PiAxMiAmIDYzOwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgICBpW3QrK10gPSAxMjggfCBzID4+IDYgJiA2MzsKICAgICAgICAgICAgfQogICAgICAgICAgICBpW3QrK10gPSAxMjggfCBzICYgNjM7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIGlbdF0gPSAwOwogICAgICB9CiAgICB9CiAgICB2YXIgUW4gPSB0eXBlb2YgVGV4dERlY29kZXIgPCAidSIgPyBuZXcgVGV4dERlY29kZXIoInV0Zi0xNmxlIikgOiB2b2lkIDA7CiAgICBmdW5jdGlvbiBVdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSBuID4+IDEsIGkgPSByICsgdCAvIDI7ICEociA+PSBpKSAmJiBwbltyXTsgKQogICAgICAgICsrcjsKICAgICAgaWYgKHIgPDw9IDEsIDMyIDwgciAtIG4gJiYgUW4pCiAgICAgICAgcmV0dXJuIFFuLmRlY29kZShGLnN1YmFycmF5KG4sIHIpKTsKICAgICAgZm9yIChyID0gMCwgaSA9ICIiOyA7ICkgewogICAgICAgIHZhciBhID0gUVtuICsgMiAqIHIgPj4gMV07CiAgICAgICAgaWYgKGEgPT0gMCB8fCByID09IHQgLyAyKQogICAgICAgICAgcmV0dXJuIGk7CiAgICAgICAgKytyLCBpICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYSk7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIEh0KG4sIHQsIHIpIHsKICAgICAgaWYgKHIgPT09IHZvaWQgMCAmJiAociA9IDIxNDc0ODM2NDcpLCAyID4gcikKICAgICAgICByZXR1cm4gMDsKICAgICAgciAtPSAyOwogICAgICB2YXIgaSA9IHQ7CiAgICAgIHIgPSByIDwgMiAqIG4ubGVuZ3RoID8gciAvIDIgOiBuLmxlbmd0aDsKICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCByOyArK2EpCiAgICAgICAgUVt0ID4+IDFdID0gbi5jaGFyQ29kZUF0KGEpLCB0ICs9IDI7CiAgICAgIHJldHVybiBRW3QgPj4gMV0gPSAwLCB0IC0gaTsKICAgIH0KICAgIGZ1bmN0aW9uIHp0KG4pIHsKICAgICAgcmV0dXJuIDIgKiBuLmxlbmd0aDsKICAgIH0KICAgIGZ1bmN0aW9uIER0KG4sIHQpIHsKICAgICAgZm9yICh2YXIgciA9IDAsIGkgPSAiIjsgIShyID49IHQgLyA0KTsgKSB7CiAgICAgICAgdmFyIGEgPSBPW24gKyA0ICogciA+PiAyXTsKICAgICAgICBpZiAoYSA9PSAwKQogICAgICAgICAgYnJlYWs7CiAgICAgICAgKytyLCA2NTUzNiA8PSBhID8gKGEgLT0gNjU1MzYsIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiB8IGEgPj4gMTAsIDU2MzIwIHwgYSAmIDEwMjMpKSA6IGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShhKTsKICAgICAgfQogICAgICByZXR1cm4gaTsKICAgIH0KICAgIGZ1bmN0aW9uIEJ0KG4sIHQsIHIpIHsKICAgICAgaWYgKHIgPT09IHZvaWQgMCAmJiAociA9IDIxNDc0ODM2NDcpLCA0ID4gcikKICAgICAgICByZXR1cm4gMDsKICAgICAgdmFyIGkgPSB0OwogICAgICByID0gaSArIHIgLSA0OwogICAgICBmb3IgKHZhciBhID0gMDsgYSA8IG4ubGVuZ3RoOyArK2EpIHsKICAgICAgICB2YXIgcyA9IG4uY2hhckNvZGVBdChhKTsKICAgICAgICBpZiAoNTUyOTYgPD0gcyAmJiA1NzM0MyA+PSBzKSB7CiAgICAgICAgICB2YXIgYyA9IG4uY2hhckNvZGVBdCgrK2EpOwogICAgICAgICAgcyA9IDY1NTM2ICsgKChzICYgMTAyMykgPDwgMTApIHwgYyAmIDEwMjM7CiAgICAgICAgfQogICAgICAgIGlmIChPW3QgPj4gMl0gPSBzLCB0ICs9IDQsIHQgKyA0ID4gcikKICAgICAgICAgIGJyZWFrOwogICAgICB9CiAgICAgIHJldHVybiBPW3QgPj4gMl0gPSAwLCB0IC0gaTsKICAgIH0KICAgIGZ1bmN0aW9uIFZ0KG4pIHsKICAgICAgZm9yICh2YXIgdCA9IDAsIHIgPSAwOyByIDwgbi5sZW5ndGg7ICsrcikgewogICAgICAgIHZhciBpID0gbi5jaGFyQ29kZUF0KHIpOwogICAgICAgIDU1Mjk2IDw9IGkgJiYgNTczNDMgPj0gaSAmJiArK3IsIHQgKz0gNDsKICAgICAgfQogICAgICByZXR1cm4gdDsKICAgIH0KICAgIHZhciBLLCBZLCBGLCBRLCBwbiwgTywgVSwgcW4sIG50OwogICAgZnVuY3Rpb24gdHQobikgewogICAgICBLID0gbiwgZS5IRUFQOCA9IFkgPSBuZXcgSW50OEFycmF5KG4pLCBlLkhFQVAxNiA9IFEgPSBuZXcgSW50MTZBcnJheShuKSwgZS5IRUFQMzIgPSBPID0gbmV3IEludDMyQXJyYXkobiksIGUuSEVBUFU4ID0gRiA9IG5ldyBVaW50OEFycmF5KG4pLCBlLkhFQVBVMTYgPSBwbiA9IG5ldyBVaW50MTZBcnJheShuKSwgZS5IRUFQVTMyID0gVSA9IG5ldyBVaW50MzJBcnJheShuKSwgZS5IRUFQRjMyID0gcW4gPSBuZXcgRmxvYXQzMkFycmF5KG4pLCBlLkhFQVBGNjQgPSBudCA9IG5ldyBGbG9hdDY0QXJyYXkobik7CiAgICB9CiAgICB2YXIgZXQgPSBlLklOSVRJQUxfTUVNT1JZIHx8IDE2Nzc3MjE2OwogICAgZS53YXNtTWVtb3J5ID8gRyA9IGUud2FzbU1lbW9yeSA6IEcgPSBuZXcgV2ViQXNzZW1ibHkuTWVtb3J5KHsgaW5pdGlhbDogZXQgLyA2NTUzNiwgbWF4aW11bTogMzI3NjggfSksIEcgJiYgKEsgPSBHLmJ1ZmZlciksIGV0ID0gSy5ieXRlTGVuZ3RoLCB0dChLKTsKICAgIHZhciBydCA9IFtdLCBpdCA9IFtdLCBHdCA9IFtdLCBhdCA9IFtdOwogICAgZnVuY3Rpb24gWXQoKSB7CiAgICAgIHZhciBuID0gZS5wcmVSdW4uc2hpZnQoKTsKICAgICAgcnQudW5zaGlmdChuKTsKICAgIH0KICAgIHZhciBaID0gMCwgb24gPSBudWxsOwogICAgZS5wcmVsb2FkZWRJbWFnZXMgPSB7fSwgZS5wcmVsb2FkZWRBdWRpb3MgPSB7fTsKICAgIGZ1bmN0aW9uIHNuKG4pIHsKICAgICAgdGhyb3cgZS5vbkFib3J0ICYmIGUub25BYm9ydChuKSwgUyhuKSwga24gPSAhMCwgbiA9IG5ldyBXZWJBc3NlbWJseS5SdW50aW1lRXJyb3IoImFib3J0KCIgKyBuICsgIikuIEJ1aWxkIHdpdGggLXMgQVNTRVJUSU9OUz0xIGZvciBtb3JlIGluZm8uIiksIGcobiksIG47CiAgICB9CiAgICBmdW5jdGlvbiBSbihuKSB7CiAgICAgIHZhciB0ID0gJDsKICAgICAgcmV0dXJuIFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCA/IHQuc3RhcnRzV2l0aChuKSA6IHQuaW5kZXhPZihuKSA9PT0gMDsKICAgIH0KICAgIGZ1bmN0aW9uIG90KCkgewogICAgICByZXR1cm4gUm4oImRhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCwiKTsKICAgIH0KICAgIHZhciAkID0gInNhbS53YXNtIjsKICAgIGlmICghb3QoKSkgewogICAgICB2YXIgc3QgPSAkOwogICAgICAkID0gZS5sb2NhdGVGaWxlID8gZS5sb2NhdGVGaWxlKHN0LCBDKSA6IEMgKyBzdDsKICAgIH0KICAgIGZ1bmN0aW9uIHV0KCkgewogICAgICB0cnkgewogICAgICAgIGlmIChqKQogICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGopOwogICAgICAgIGlmIChSKQogICAgICAgICAgcmV0dXJuIFIoJCk7CiAgICAgICAgdGhyb3cgImJvdGggYXN5bmMgYW5kIHN5bmMgZmV0Y2hpbmcgb2YgdGhlIHdhc20gZmFpbGVkIjsKICAgICAgfSBjYXRjaCAobikgewogICAgICAgIHNuKG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBadCgpIHsKICAgICAgcmV0dXJuIGogfHwgIU0gJiYgIUUgfHwgdHlwZW9mIGZldGNoICE9ICJmdW5jdGlvbiIgfHwgUm4oImZpbGU6Ly8iKSA/IFByb21pc2UucmVzb2x2ZSgpLnRoZW4odXQpIDogZmV0Y2goJCwgeyBjcmVkZW50aWFsczogInNhbWUtb3JpZ2luIiB9KS50aGVuKGZ1bmN0aW9uKG4pIHsKICAgICAgICBpZiAoIW4ub2spCiAgICAgICAgICB0aHJvdyAiZmFpbGVkIHRvIGxvYWQgd2FzbSBiaW5hcnkgZmlsZSBhdCAnIiArICQgKyAiJyI7CiAgICAgICAgcmV0dXJuIG4uYXJyYXlCdWZmZXIoKTsKICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oKSB7CiAgICAgICAgcmV0dXJuIHV0KCk7CiAgICAgIH0pOwogICAgfQogICAgZnVuY3Rpb24geW4obikgewogICAgICBmb3IgKDsgMCA8IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4uc2hpZnQoKTsKICAgICAgICBpZiAodHlwZW9mIHQgPT0gImZ1bmN0aW9uIikKICAgICAgICAgIHQoZSk7CiAgICAgICAgZWxzZSB7CiAgICAgICAgICB2YXIgciA9IHQuQmE7CiAgICAgICAgICB0eXBlb2YgciA9PSAibnVtYmVyIiA/IHQudGEgPT09IHZvaWQgMCA/IEZuKCJ2IiwgcikoKSA6IEZuKCJ2aSIsIHIpKHQudGEpIDogcih0LnRhID09PSB2b2lkIDAgPyBudWxsIDogdC50YSk7CiAgICAgICAgfQogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBGbihuLCB0KSB7CiAgICAgIHZhciByID0gW107CiAgICAgIHJldHVybiBmdW5jdGlvbigpIHsKICAgICAgICByLmxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7CiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspCiAgICAgICAgICByW2ldID0gYXJndW1lbnRzW2ldOwogICAgICAgIHJldHVybiByICYmIHIubGVuZ3RoID8gZVsiZHluQ2FsbF8iICsgbl0uYXBwbHkobnVsbCwgW3RdLmNvbmNhdChyKSkgOiBlWyJkeW5DYWxsXyIgKyBuXS5jYWxsKG51bGwsIHQpOwogICAgICB9OwogICAgfQogICAgZnVuY3Rpb24gJHQobikgewogICAgICB0aGlzLmRhID0gbiAtIDE2LCB0aGlzLk9hID0gZnVuY3Rpb24odCkgewogICAgICAgIE9bdGhpcy5kYSArIDggPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLkxhID0gZnVuY3Rpb24odCkgewogICAgICAgIE9bdGhpcy5kYSArIDAgPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLk1hID0gZnVuY3Rpb24oKSB7CiAgICAgICAgT1t0aGlzLmRhICsgNCA+PiAyXSA9IDA7CiAgICAgIH0sIHRoaXMuS2EgPSBmdW5jdGlvbigpIHsKICAgICAgICBZW3RoaXMuZGEgKyAxMiA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuTmEgPSBmdW5jdGlvbigpIHsKICAgICAgICBZW3RoaXMuZGEgKyAxMyA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuRmEgPSBmdW5jdGlvbih0LCByKSB7CiAgICAgICAgdGhpcy5PYSh0KSwgdGhpcy5MYShyKSwgdGhpcy5NYSgpLCB0aGlzLkthKCksIHRoaXMuTmEoKTsKICAgICAgfTsKICAgIH0KICAgIGZ1bmN0aW9uIG1uKCkgewogICAgICByZXR1cm4gMCA8IG1uLnhhOwogICAgfQogICAgZnVuY3Rpb24geG4obikgewogICAgICBzd2l0Y2ggKG4pIHsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICByZXR1cm4gMDsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIDQ6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlIDg6CiAgICAgICAgICByZXR1cm4gMzsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biB0eXBlIHNpemU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgdmFyIGx0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gVyhuKSB7CiAgICAgIGZvciAodmFyIHQgPSAiIjsgRltuXTsgKQogICAgICAgIHQgKz0gbHRbRltuKytdXTsKICAgICAgcmV0dXJuIHQ7CiAgICB9CiAgICB2YXIgcSA9IHt9LCBKID0ge30sIHZuID0ge307CiAgICBmdW5jdGlvbiBJbihuKSB7CiAgICAgIGlmIChuID09PSB2b2lkIDApCiAgICAgICAgcmV0dXJuICJfdW5rbm93biI7CiAgICAgIG4gPSBuLnJlcGxhY2UoL1teYS16QS1aMC05X10vZywgIiQiKTsKICAgICAgdmFyIHQgPSBuLmNoYXJDb2RlQXQoMCk7CiAgICAgIHJldHVybiA0OCA8PSB0ICYmIDU3ID49IHQgPyAiXyIgKyBuIDogbjsKICAgIH0KICAgIGZ1bmN0aW9uIGpuKG4sIHQpIHsKICAgICAgcmV0dXJuIG4gPSBJbihuKSwgbmV3IEZ1bmN0aW9uKCJib2R5IiwgInJldHVybiBmdW5jdGlvbiAiICsgbiArIGAoKSB7CiAgICAidXNlIHN0cmljdCI7ICAgIHJldHVybiBib2R5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7Cn07CmApKHQpOwogICAgfQogICAgZnVuY3Rpb24gTG4obikgewogICAgICB2YXIgdCA9IEVycm9yLCByID0gam4obiwgZnVuY3Rpb24oaSkgewogICAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMubWVzc2FnZSA9IGksIGkgPSBFcnJvcihpKS5zdGFjaywgaSAhPT0gdm9pZCAwICYmICh0aGlzLnN0YWNrID0gdGhpcy50b1N0cmluZygpICsgYApgICsgaS5yZXBsYWNlKC9eRXJyb3IoOlteXG5dKik/XG4vLCAiIikpOwogICAgICB9KTsKICAgICAgcmV0dXJuIHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSksIHIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gciwgci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlID09PSB2b2lkIDAgPyB0aGlzLm5hbWUgOiB0aGlzLm5hbWUgKyAiOiAiICsgdGhpcy5tZXNzYWdlOwogICAgICB9LCByOwogICAgfQogICAgdmFyIG5uID0gdm9pZCAwOwogICAgZnVuY3Rpb24gdihuKSB7CiAgICAgIHRocm93IG5ldyBubihuKTsKICAgIH0KICAgIHZhciBjdCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIGduKG4pIHsKICAgICAgdGhyb3cgbmV3IGN0KG4pOwogICAgfQogICAgZnVuY3Rpb24gdG4obiwgdCwgcikgewogICAgICBmdW5jdGlvbiBpKGwpIHsKICAgICAgICBsID0gcihsKSwgbC5sZW5ndGggIT09IG4ubGVuZ3RoICYmIGduKCJNaXNtYXRjaGVkIHR5cGUgY29udmVydGVyIGNvdW50Iik7CiAgICAgICAgZm9yICh2YXIgcCA9IDA7IHAgPCBuLmxlbmd0aDsgKytwKQogICAgICAgICAgSChuW3BdLCBsW3BdKTsKICAgICAgfQogICAgICBuLmZvckVhY2goZnVuY3Rpb24obCkgewogICAgICAgIHZuW2xdID0gdDsKICAgICAgfSk7CiAgICAgIHZhciBhID0gQXJyYXkodC5sZW5ndGgpLCBzID0gW10sIGMgPSAwOwogICAgICB0LmZvckVhY2goZnVuY3Rpb24obCwgcCkgewogICAgICAgIEouaGFzT3duUHJvcGVydHkobCkgPyBhW3BdID0gSltsXSA6IChzLnB1c2gobCksIHEuaGFzT3duUHJvcGVydHkobCkgfHwgKHFbbF0gPSBbXSksIHFbbF0ucHVzaChmdW5jdGlvbigpIHsKICAgICAgICAgIGFbcF0gPSBKW2xdLCArK2MsIGMgPT09IHMubGVuZ3RoICYmIGkoYSk7CiAgICAgICAgfSkpOwogICAgICB9KSwgcy5sZW5ndGggPT09IDAgJiYgaShhKTsKICAgIH0KICAgIGZ1bmN0aW9uIEgobiwgdCwgcikgewogICAgICBpZiAociA9IHIgfHwge30sICEoImFyZ1BhY2tBZHZhbmNlIiBpbiB0KSkKICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJyZWdpc3RlclR5cGUgcmVnaXN0ZXJlZEluc3RhbmNlIHJlcXVpcmVzIGFyZ1BhY2tBZHZhbmNlIik7CiAgICAgIHZhciBpID0gdC5uYW1lOwogICAgICBpZiAobiB8fCB2KCd0eXBlICInICsgaSArICciIG11c3QgaGF2ZSBhIHBvc2l0aXZlIGludGVnZXIgdHlwZWlkIHBvaW50ZXInKSwgSi5oYXNPd25Qcm9wZXJ0eShuKSkgewogICAgICAgIGlmIChyLkVhKQogICAgICAgICAgcmV0dXJuOwogICAgICAgIHYoIkNhbm5vdCByZWdpc3RlciB0eXBlICciICsgaSArICInIHR3aWNlIik7CiAgICAgIH0KICAgICAgSltuXSA9IHQsIGRlbGV0ZSB2bltuXSwgcS5oYXNPd25Qcm9wZXJ0eShuKSAmJiAodCA9IHFbbl0sIGRlbGV0ZSBxW25dLCB0LmZvckVhY2goZnVuY3Rpb24oYSkgewogICAgICAgIGEoKTsKICAgICAgfSkpOwogICAgfQogICAgZnVuY3Rpb24gSnQobikgewogICAgICByZXR1cm4geyBjb3VudDogbi5jb3VudCwgb2E6IG4ub2EsIHBhOiBuLnBhLCBkYTogbi5kYSwgZmE6IG4uZmEsIGdhOiBuLmdhLCBoYTogbi5oYSB9OwogICAgfQogICAgZnVuY3Rpb24gTm4obikgewogICAgICB2KG4uQS5mYS5lYS5uYW1lICsgIiBpbnN0YW5jZSBhbHJlYWR5IGRlbGV0ZWQiKTsKICAgIH0KICAgIHZhciBVbiA9ICExOwogICAgZnVuY3Rpb24gZnQoKSB7CiAgICB9CiAgICBmdW5jdGlvbiBkdChuKSB7CiAgICAgIC0tbi5jb3VudC52YWx1ZSwgbi5jb3VudC52YWx1ZSA9PT0gMCAmJiAobi5nYSA/IG4uaGEubmEobi5nYSkgOiBuLmZhLmVhLm5hKG4uZGEpKTsKICAgIH0KICAgIGZ1bmN0aW9uIHVuKG4pIHsKICAgICAgcmV0dXJuIHR5cGVvZiBGaW5hbGl6YXRpb25Hcm91cCA+ICJ1IiA/ICh1biA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICByZXR1cm4gdDsKICAgICAgfSwgbikgOiAoVW4gPSBuZXcgRmluYWxpemF0aW9uR3JvdXAoZnVuY3Rpb24odCkgewogICAgICAgIGZvciAodmFyIHIgPSB0Lm5leHQoKTsgIXIuZG9uZTsgciA9IHQubmV4dCgpKQogICAgICAgICAgciA9IHIudmFsdWUsIHIuZGEgPyBkdChyKSA6IGNvbnNvbGUud2Fybigib2JqZWN0IGFscmVhZHkgZGVsZXRlZDogIiArIHIuZGEpOwogICAgICB9KSwgdW4gPSBmdW5jdGlvbih0KSB7CiAgICAgICAgcmV0dXJuIFVuLnJlZ2lzdGVyKHQsIHQuQSwgdC5BKSwgdDsKICAgICAgfSwgZnQgPSBmdW5jdGlvbih0KSB7CiAgICAgICAgVW4udW5yZWdpc3Rlcih0LkEpOwogICAgICB9LCB1bihuKSk7CiAgICB9CiAgICB2YXIgbG4gPSB2b2lkIDAsIGNuID0gW107CiAgICBmdW5jdGlvbiBIbigpIHsKICAgICAgZm9yICg7IGNuLmxlbmd0aDsgKSB7CiAgICAgICAgdmFyIG4gPSBjbi5wb3AoKTsKICAgICAgICBuLkEub2EgPSAhMSwgbi5kZWxldGUoKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gQigpIHsKICAgIH0KICAgIHZhciBodCA9IHt9OwogICAgZnVuY3Rpb24gWHQobiwgdCkgewogICAgICB2YXIgciA9IGU7CiAgICAgIGlmIChyW25dLmphID09PSB2b2lkIDApIHsKICAgICAgICB2YXIgaSA9IHJbbl07CiAgICAgICAgcltuXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgcmV0dXJuIHJbbl0uamEuaGFzT3duUHJvcGVydHkoYXJndW1lbnRzLmxlbmd0aCkgfHwgdigiRnVuY3Rpb24gJyIgKyB0ICsgIicgY2FsbGVkIHdpdGggYW4gaW52YWxpZCBudW1iZXIgb2YgYXJndW1lbnRzICgiICsgYXJndW1lbnRzLmxlbmd0aCArICIpIC0gZXhwZWN0cyBvbmUgb2YgKCIgKyByW25dLmphICsgIikhIiksIHJbbl0uamFbYXJndW1lbnRzLmxlbmd0aF0uYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICB9LCByW25dLmphID0gW10sIHJbbl0uamFbaS55YV0gPSBpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBwdChuLCB0LCByKSB7CiAgICAgIGUuaGFzT3duUHJvcGVydHkobikgPyAoKHIgPT09IHZvaWQgMCB8fCBlW25dLmphICE9PSB2b2lkIDAgJiYgZVtuXS5qYVtyXSAhPT0gdm9pZCAwKSAmJiB2KCJDYW5ub3QgcmVnaXN0ZXIgcHVibGljIG5hbWUgJyIgKyBuICsgIicgdHdpY2UiKSwgWHQobiwgbiksIGUuaGFzT3duUHJvcGVydHkocikgJiYgdigiQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIG92ZXJsb2FkcyBvZiBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgbnVtYmVyIG9mIGFyZ3VtZW50cyAoIiArIHIgKyAiKSEiKSwgZVtuXS5qYVtyXSA9IHQpIDogKGVbbl0gPSB0LCByICE9PSB2b2lkIDAgJiYgKGVbbl0uUmEgPSByKSk7CiAgICB9CiAgICBmdW5jdGlvbiBLdChuLCB0LCByLCBpLCBhLCBzLCBjLCBsKSB7CiAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMuY29uc3RydWN0b3IgPSB0LCB0aGlzLm1hID0gciwgdGhpcy5uYSA9IGksIHRoaXMuaWEgPSBhLCB0aGlzLkNhID0gcywgdGhpcy5xYSA9IGMsIHRoaXMuQWEgPSBsOwogICAgfQogICAgZnVuY3Rpb24gd24obiwgdCwgcikgewogICAgICBmb3IgKDsgdCAhPT0gcjsgKQogICAgICAgIHQucWEgfHwgdigiRXhwZWN0ZWQgbnVsbCBvciBpbnN0YW5jZSBvZiAiICsgci5uYW1lICsgIiwgZ290IGFuIGluc3RhbmNlIG9mICIgKyB0Lm5hbWUpLCBuID0gdC5xYShuKSwgdCA9IHQuaWE7CiAgICAgIHJldHVybiBuOwogICAgfQogICAgZnVuY3Rpb24gUXQobiwgdCkgewogICAgICByZXR1cm4gdCA9PT0gbnVsbCA/ICh0aGlzLnVhICYmIHYoIm51bGwgaXMgbm90IGEgdmFsaWQgIiArIHRoaXMubmFtZSksIDApIDogKHQuQSB8fCB2KCdDYW5ub3QgcGFzcyAiJyArIHJuKHQpICsgJyIgYXMgYSAnICsgdGhpcy5uYW1lKSwgdC5BLmRhIHx8IHYoIkNhbm5vdCBwYXNzIGRlbGV0ZWQgb2JqZWN0IGFzIGEgcG9pbnRlciBvZiB0eXBlICIgKyB0aGlzLm5hbWUpLCB3bih0LkEuZGEsIHQuQS5mYS5lYSwgdGhpcy5lYSkpOwogICAgfQogICAgZnVuY3Rpb24gcXQobiwgdCkgewogICAgICBpZiAodCA9PT0gbnVsbCkgewogICAgICAgIGlmICh0aGlzLnVhICYmIHYoIm51bGwgaXMgbm90IGEgdmFsaWQgIiArIHRoaXMubmFtZSksIHRoaXMuc2EpIHsKICAgICAgICAgIHZhciByID0gdGhpcy5IYSgpOwogICAgICAgICAgcmV0dXJuIG4gIT09IG51bGwgJiYgbi5wdXNoKHRoaXMubmEsIHIpLCByOwogICAgICAgIH0KICAgICAgICByZXR1cm4gMDsKICAgICAgfQogICAgICBpZiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgcm4odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksICF0aGlzLnJhICYmIHQuQS5mYS5yYSAmJiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyAodC5BLmhhID8gdC5BLmhhLm5hbWUgOiB0LkEuZmEubmFtZSkgKyAiIHRvIHBhcmFtZXRlciB0eXBlICIgKyB0aGlzLm5hbWUpLCByID0gd24odC5BLmRhLCB0LkEuZmEuZWEsIHRoaXMuZWEpLCB0aGlzLnNhKQogICAgICAgIHN3aXRjaCAodC5BLmdhID09PSB2b2lkIDAgJiYgdigiUGFzc2luZyByYXcgcG9pbnRlciB0byBzbWFydCBwb2ludGVyIGlzIGlsbGVnYWwiKSwgdGhpcy5QYSkgewogICAgICAgICAgY2FzZSAwOgogICAgICAgICAgICB0LkEuaGEgPT09IHRoaXMgPyByID0gdC5BLmdhIDogdigiQ2Fubm90IGNvbnZlcnQgYXJndW1lbnQgb2YgdHlwZSAiICsgKHQuQS5oYSA/IHQuQS5oYS5uYW1lIDogdC5BLmZhLm5hbWUpICsgIiB0byBwYXJhbWV0ZXIgdHlwZSAiICsgdGhpcy5uYW1lKTsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICBjYXNlIDE6CiAgICAgICAgICAgIHIgPSB0LkEuZ2E7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgY2FzZSAyOgogICAgICAgICAgICBpZiAodC5BLmhhID09PSB0aGlzKQogICAgICAgICAgICAgIHIgPSB0LkEuZ2E7CiAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgIHZhciBpID0gdC5jbG9uZSgpOwogICAgICAgICAgICAgIHIgPSB0aGlzLklhKHIsIGVuKGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgICAgaS5kZWxldGUoKTsKICAgICAgICAgICAgICB9KSksIG4gIT09IG51bGwgJiYgbi5wdXNoKHRoaXMubmEsIHIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgZGVmYXVsdDoKICAgICAgICAgICAgdigiVW5zdXBwb3J0aW5nIHNoYXJpbmcgcG9saWN5Iik7CiAgICAgICAgfQogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIG5lKG4sIHQpIHsKICAgICAgcmV0dXJuIHQgPT09IG51bGwgPyAodGhpcy51YSAmJiB2KCJudWxsIGlzIG5vdCBhIHZhbGlkICIgKyB0aGlzLm5hbWUpLCAwKSA6ICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBybih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgdC5BLmZhLnJhICYmIHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArIHQuQS5mYS5uYW1lICsgIiB0byBwYXJhbWV0ZXIgdHlwZSAiICsgdGhpcy5uYW1lKSwgd24odC5BLmRhLCB0LkEuZmEuZWEsIHRoaXMuZWEpKTsKICAgIH0KICAgIGZ1bmN0aW9uIEFuKG4pIHsKICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKFVbbiA+PiAyXSk7CiAgICB9CiAgICBmdW5jdGlvbiB5dChuLCB0LCByKSB7CiAgICAgIHJldHVybiB0ID09PSByID8gbiA6IHIuaWEgPT09IHZvaWQgMCA/IG51bGwgOiAobiA9IHl0KG4sIHQsIHIuaWEpLCBuID09PSBudWxsID8gbnVsbCA6IHIuQWEobikpOwogICAgfQogICAgdmFyIGZuID0ge307CiAgICBmdW5jdGlvbiB0ZShuLCB0KSB7CiAgICAgIGZvciAodCA9PT0gdm9pZCAwICYmIHYoInB0ciBzaG91bGQgbm90IGJlIHVuZGVmaW5lZCIpOyBuLmlhOyApCiAgICAgICAgdCA9IG4ucWEodCksIG4gPSBuLmlhOwogICAgICByZXR1cm4gZm5bdF07CiAgICB9CiAgICBmdW5jdGlvbiBfbihuLCB0KSB7CiAgICAgIHJldHVybiB0LmZhICYmIHQuZGEgfHwgZ24oIm1ha2VDbGFzc0hhbmRsZSByZXF1aXJlcyBwdHIgYW5kIHB0clR5cGUiKSwgISF0LmhhICE9ICEhdC5nYSAmJiBnbigiQm90aCBzbWFydFB0clR5cGUgYW5kIHNtYXJ0UHRyIG11c3QgYmUgc3BlY2lmaWVkIiksIHQuY291bnQgPSB7IHZhbHVlOiAxIH0sIHVuKE9iamVjdC5jcmVhdGUobiwgeyBBOiB7IHZhbHVlOiB0IH0gfSkpOwogICAgfQogICAgZnVuY3Rpb24geihuLCB0LCByLCBpKSB7CiAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMuZWEgPSB0LCB0aGlzLnVhID0gciwgdGhpcy5yYSA9IGksIHRoaXMuc2EgPSAhMSwgdGhpcy5uYSA9IHRoaXMuSWEgPSB0aGlzLkhhID0gdGhpcy53YSA9IHRoaXMuUGEgPSB0aGlzLkdhID0gdm9pZCAwLCB0LmlhICE9PSB2b2lkIDAgPyB0aGlzLnRvV2lyZVR5cGUgPSBxdCA6ICh0aGlzLnRvV2lyZVR5cGUgPSBpID8gUXQgOiBuZSwgdGhpcy5rYSA9IG51bGwpOwogICAgfQogICAgZnVuY3Rpb24gbXQobiwgdCwgcikgewogICAgICBlLmhhc093blByb3BlcnR5KG4pIHx8IGduKCJSZXBsYWNpbmcgbm9uZXhpc3RhbnQgcHVibGljIHN5bWJvbCIpLCBlW25dLmphICE9PSB2b2lkIDAgJiYgciAhPT0gdm9pZCAwID8gZVtuXS5qYVtyXSA9IHQgOiAoZVtuXSA9IHQsIGVbbl0ueWEgPSByKTsKICAgIH0KICAgIGZ1bmN0aW9uIFYobiwgdCkgewogICAgICBuID0gVyhuKTsKICAgICAgdmFyIHIgPSBGbihuLCB0KTsKICAgICAgcmV0dXJuIHR5cGVvZiByICE9ICJmdW5jdGlvbiIgJiYgdigidW5rbm93biBmdW5jdGlvbiBwb2ludGVyIHdpdGggc2lnbmF0dXJlICIgKyBuICsgIjogIiArIHQpLCByOwogICAgfQogICAgdmFyIHZ0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gZ3QobikgewogICAgICBuID0gYnQobik7CiAgICAgIHZhciB0ID0gVyhuKTsKICAgICAgcmV0dXJuIEQobiksIHQ7CiAgICB9CiAgICBmdW5jdGlvbiBkbihuLCB0KSB7CiAgICAgIGZ1bmN0aW9uIHIocykgewogICAgICAgIGFbc10gfHwgSltzXSB8fCAodm5bc10gPyB2bltzXS5mb3JFYWNoKHIpIDogKGkucHVzaChzKSwgYVtzXSA9ICEwKSk7CiAgICAgIH0KICAgICAgdmFyIGkgPSBbXSwgYSA9IHt9OwogICAgICB0aHJvdyB0LmZvckVhY2gociksIG5ldyB2dChuICsgIjogIiArIGkubWFwKGd0KS5qb2luKFsiLCAiXSkpOwogICAgfQogICAgZnVuY3Rpb24gd3QobiwgdCkgewogICAgICBmb3IgKHZhciByID0gW10sIGkgPSAwOyBpIDwgbjsgaSsrKQogICAgICAgIHIucHVzaChPWyh0ID4+IDIpICsgaV0pOwogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIENuKG4pIHsKICAgICAgZm9yICg7IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4ucG9wKCk7CiAgICAgICAgbi5wb3AoKSh0KTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gQXQobiwgdCwgcikgewogICAgICByZXR1cm4gbiBpbnN0YW5jZW9mIE9iamVjdCB8fCB2KHIgKyAnIHdpdGggaW52YWxpZCAidGhpcyI6ICcgKyBuKSwgbiBpbnN0YW5jZW9mIHQuZWEuY29uc3RydWN0b3IgfHwgdihyICsgJyBpbmNvbXBhdGlibGUgd2l0aCAidGhpcyIgb2YgdHlwZSAnICsgbi5jb25zdHJ1Y3Rvci5uYW1lKSwgbi5BLmRhIHx8IHYoImNhbm5vdCBjYWxsIGVtc2NyaXB0ZW4gYmluZGluZyBtZXRob2QgIiArIHIgKyAiIG9uIGRlbGV0ZWQgb2JqZWN0IiksIHduKG4uQS5kYSwgbi5BLmZhLmVhLCB0LmVhKTsKICAgIH0KICAgIHZhciB6biA9IFtdLCBJID0gW3t9LCB7IHZhbHVlOiB2b2lkIDAgfSwgeyB2YWx1ZTogbnVsbCB9LCB7IHZhbHVlOiAhMCB9LCB7IHZhbHVlOiAhMSB9XTsKICAgIGZ1bmN0aW9uIERuKG4pIHsKICAgICAgNCA8IG4gJiYgLS1JW25dLkphID09PSAwICYmIChJW25dID0gdm9pZCAwLCB6bi5wdXNoKG4pKTsKICAgIH0KICAgIGZ1bmN0aW9uIGVuKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSB2b2lkIDA6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIG51bGw6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlICEwOgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgY2FzZSAhMToKICAgICAgICAgIHJldHVybiA0OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB2YXIgdCA9IHpuLmxlbmd0aCA/IHpuLnBvcCgpIDogSS5sZW5ndGg7CiAgICAgICAgICByZXR1cm4gSVt0XSA9IHsgSmE6IDEsIHZhbHVlOiBuIH0sIHQ7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHJuKG4pIHsKICAgICAgaWYgKG4gPT09IG51bGwpCiAgICAgICAgcmV0dXJuICJudWxsIjsKICAgICAgdmFyIHQgPSB0eXBlb2YgbjsKICAgICAgcmV0dXJuIHQgPT09ICJvYmplY3QiIHx8IHQgPT09ICJhcnJheSIgfHwgdCA9PT0gImZ1bmN0aW9uIiA/IG4udG9TdHJpbmcoKSA6ICIiICsgbjsKICAgIH0KICAgIGZ1bmN0aW9uIGVlKG4sIHQpIHsKICAgICAgc3dpdGNoICh0KSB7CiAgICAgICAgY2FzZSAyOgogICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHIpIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKHFuW3IgPj4gMl0pOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDM6CiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24ocikgewogICAgICAgICAgICByZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUobnRbciA+PiAzXSk7CiAgICAgICAgICB9OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGZsb2F0IHR5cGU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gcmUobikgewogICAgICB2YXIgdCA9IEZ1bmN0aW9uOwogICAgICBpZiAoISh0IGluc3RhbmNlb2YgRnVuY3Rpb24pKQogICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIm5ld18gY2FsbGVkIHdpdGggY29uc3RydWN0b3IgdHlwZSAiICsgdHlwZW9mIHQgKyAiIHdoaWNoIGlzIG5vdCBhIGZ1bmN0aW9uIik7CiAgICAgIHZhciByID0gam4odC5uYW1lIHx8ICJ1bmtub3duRnVuY3Rpb25OYW1lIiwgZnVuY3Rpb24oKSB7CiAgICAgIH0pOwogICAgICByZXR1cm4gci5wcm90b3R5cGUgPSB0LnByb3RvdHlwZSwgciA9IG5ldyByKCksIG4gPSB0LmFwcGx5KHIsIG4pLCBuIGluc3RhbmNlb2YgT2JqZWN0ID8gbiA6IHI7CiAgICB9CiAgICBmdW5jdGlvbiBpZShuLCB0LCByKSB7CiAgICAgIHN3aXRjaCAodCkgewogICAgICAgIGNhc2UgMDoKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gWVtpXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBGW2ldOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICByZXR1cm4gciA/IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIFFbaSA+PiAxXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBwbltpID4+IDFdOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gciA/IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIE9baSA+PiAyXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBVW2kgPj4gMl07CiAgICAgICAgICB9OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGludGVnZXIgdHlwZTogIiArIG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBCbihuKSB7CiAgICAgIHJldHVybiBuIHx8IHYoIkNhbm5vdCB1c2UgZGVsZXRlZCB2YWwuIGhhbmRsZSA9ICIgKyBuKSwgSVtuXS52YWx1ZTsKICAgIH0KICAgIGZ1bmN0aW9uIF90KG4sIHQpIHsKICAgICAgdmFyIHIgPSBKW25dOwogICAgICByZXR1cm4gciA9PT0gdm9pZCAwICYmIHYodCArICIgaGFzIHVua25vd24gdHlwZSAiICsgZ3QobikpLCByOwogICAgfQogICAgdmFyIGFlID0ge30sIEN0ID0ge307CiAgICBmdW5jdGlvbiBFdCgpIHsKICAgICAgaWYgKCFWbikgewogICAgICAgIHZhciBuID0geyBVU0VSOiAid2ViX3VzZXIiLCBMT0dOQU1FOiAid2ViX3VzZXIiLCBQQVRIOiAiLyIsIFBXRDogIi8iLCBIT01FOiAiL2hvbWUvd2ViX3VzZXIiLCBMQU5HOiAodHlwZW9mIG5hdmlnYXRvciA9PSAib2JqZWN0IiAmJiBuYXZpZ2F0b3IubGFuZ3VhZ2VzICYmIG5hdmlnYXRvci5sYW5ndWFnZXNbMF0gfHwgIkMiKS5yZXBsYWNlKCItIiwgIl8iKSArICIuVVRGLTgiLCBfOiBUIHx8ICIuL3RoaXMucHJvZ3JhbSIgfSwgdDsKICAgICAgICBmb3IgKHQgaW4gQ3QpCiAgICAgICAgICBuW3RdID0gQ3RbdF07CiAgICAgICAgdmFyIHIgPSBbXTsKICAgICAgICBmb3IgKHQgaW4gbikKICAgICAgICAgIHIucHVzaCh0ICsgIj0iICsgblt0XSk7CiAgICAgICAgVm4gPSByOwogICAgICB9CiAgICAgIHJldHVybiBWbjsKICAgIH0KICAgIHZhciBWbiwgVHQgPSBbXTsKICAgIGZ1bmN0aW9uIE10KG4pIHsKICAgICAgdmFyIHQgPSB7fSwgcjsKICAgICAgZm9yIChyIGluIG4pCiAgICAgICAgKGZ1bmN0aW9uKGkpIHsKICAgICAgICAgIHZhciBhID0gbltpXTsKICAgICAgICAgIHRbaV0gPSB0eXBlb2YgYSA9PSAiZnVuY3Rpb24iID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIFR0LnB1c2goaSk7CiAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgcmV0dXJuIGEuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgICAgICAgICAgfSBmaW5hbGx5IHsKICAgICAgICAgICAgICBpZiAoa24pCiAgICAgICAgICAgICAgICByZXR1cm47CiAgICAgICAgICAgICAgdmFyIHMgPSBUdC5wb3AoKTsKICAgICAgICAgICAgICBYbihzID09PSBpKTsKICAgICAgICAgICAgfQogICAgICAgICAgfSA6IGE7CiAgICAgICAgfSkocik7CiAgICAgIHJldHVybiB0OwogICAgfQogICAgZm9yICh2YXIgUHQgPSBBcnJheSgyNTYpLCBFbiA9IDA7IDI1NiA+IEVuOyArK0VuKQogICAgICBQdFtFbl0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKEVuKTsKICAgIGx0ID0gUHQsIG5uID0gZS5CaW5kaW5nRXJyb3IgPSBMbigiQmluZGluZ0Vycm9yIiksIGN0ID0gZS5JbnRlcm5hbEVycm9yID0gTG4oIkludGVybmFsRXJyb3IiKSwgQi5wcm90b3R5cGUuaXNBbGlhc09mID0gZnVuY3Rpb24obikgewogICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQiAmJiBuIGluc3RhbmNlb2YgQikpCiAgICAgICAgcmV0dXJuICExOwogICAgICB2YXIgdCA9IHRoaXMuQS5mYS5lYSwgciA9IHRoaXMuQS5kYSwgaSA9IG4uQS5mYS5lYTsKICAgICAgZm9yIChuID0gbi5BLmRhOyB0LmlhOyApCiAgICAgICAgciA9IHQucWEociksIHQgPSB0LmlhOwogICAgICBmb3IgKDsgaS5pYTsgKQogICAgICAgIG4gPSBpLnFhKG4pLCBpID0gaS5pYTsKICAgICAgcmV0dXJuIHQgPT09IGkgJiYgciA9PT0gbjsKICAgIH0sIEIucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7CiAgICAgIGlmICh0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5wYSkKICAgICAgICByZXR1cm4gdGhpcy5BLmNvdW50LnZhbHVlICs9IDEsIHRoaXM7CiAgICAgIHZhciBuID0gdW4oT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcyksIHsgQTogeyB2YWx1ZTogSnQodGhpcy5BKSB9IH0pKTsKICAgICAgcmV0dXJuIG4uQS5jb3VudC52YWx1ZSArPSAxLCBuLkEub2EgPSAhMSwgbjsKICAgIH0sIEIucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uKCkgewogICAgICB0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5vYSAmJiAhdGhpcy5BLnBhICYmIHYoIk9iamVjdCBhbHJlYWR5IHNjaGVkdWxlZCBmb3IgZGVsZXRpb24iKSwgZnQodGhpcyksIGR0KHRoaXMuQSksIHRoaXMuQS5wYSB8fCAodGhpcy5BLmdhID0gdm9pZCAwLCB0aGlzLkEuZGEgPSB2b2lkIDApOwogICAgfSwgQi5wcm90b3R5cGUuaXNEZWxldGVkID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAhdGhpcy5BLmRhOwogICAgfSwgQi5wcm90b3R5cGUuZGVsZXRlTGF0ZXIgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIHRoaXMuQS5kYSB8fCBObih0aGlzKSwgdGhpcy5BLm9hICYmICF0aGlzLkEucGEgJiYgdigiT2JqZWN0IGFscmVhZHkgc2NoZWR1bGVkIGZvciBkZWxldGlvbiIpLCBjbi5wdXNoKHRoaXMpLCBjbi5sZW5ndGggPT09IDEgJiYgbG4gJiYgbG4oSG4pLCB0aGlzLkEub2EgPSAhMCwgdGhpczsKICAgIH0sIHoucHJvdG90eXBlLkRhID0gZnVuY3Rpb24obikgewogICAgICByZXR1cm4gdGhpcy53YSAmJiAobiA9IHRoaXMud2EobikpLCBuOwogICAgfSwgei5wcm90b3R5cGUudmEgPSBmdW5jdGlvbihuKSB7CiAgICAgIHRoaXMubmEgJiYgdGhpcy5uYShuKTsKICAgIH0sIHoucHJvdG90eXBlLmFyZ1BhY2tBZHZhbmNlID0gOCwgei5wcm90b3R5cGUucmVhZFZhbHVlRnJvbVBvaW50ZXIgPSBBbiwgei5wcm90b3R5cGUuZGVsZXRlT2JqZWN0ID0gZnVuY3Rpb24obikgewogICAgICBuICE9PSBudWxsICYmIG4uZGVsZXRlKCk7CiAgICB9LCB6LnByb3RvdHlwZS5mcm9tV2lyZVR5cGUgPSBmdW5jdGlvbihuKSB7CiAgICAgIGZ1bmN0aW9uIHQoKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuc2EgPyBfbih0aGlzLmVhLm1hLCB7IGZhOiB0aGlzLkdhLCBkYTogciwgaGE6IHRoaXMsIGdhOiBuIH0pIDogX24odGhpcy5lYS5tYSwgeyBmYTogdGhpcywgZGE6IG4gfSk7CiAgICAgIH0KICAgICAgdmFyIHIgPSB0aGlzLkRhKG4pOwogICAgICBpZiAoIXIpCiAgICAgICAgcmV0dXJuIHRoaXMudmEobiksIG51bGw7CiAgICAgIHZhciBpID0gdGUodGhpcy5lYSwgcik7CiAgICAgIGlmIChpICE9PSB2b2lkIDApCiAgICAgICAgcmV0dXJuIGkuQS5jb3VudC52YWx1ZSA9PT0gMCA/IChpLkEuZGEgPSByLCBpLkEuZ2EgPSBuLCBpLmNsb25lKCkpIDogKGkgPSBpLmNsb25lKCksIHRoaXMudmEobiksIGkpOwogICAgICBpZiAoaSA9IHRoaXMuZWEuQ2EociksIGkgPSBodFtpXSwgIWkpCiAgICAgICAgcmV0dXJuIHQuY2FsbCh0aGlzKTsKICAgICAgaSA9IHRoaXMucmEgPyBpLnphIDogaS5wb2ludGVyVHlwZTsKICAgICAgdmFyIGEgPSB5dChyLCB0aGlzLmVhLCBpLmVhKTsKICAgICAgcmV0dXJuIGEgPT09IG51bGwgPyB0LmNhbGwodGhpcykgOiB0aGlzLnNhID8gX24oaS5lYS5tYSwgeyBmYTogaSwgZGE6IGEsIGhhOiB0aGlzLCBnYTogbiB9KSA6IF9uKAogICAgICAgIGkuZWEubWEsCiAgICAgICAgeyBmYTogaSwgZGE6IGEgfQogICAgICApOwogICAgfSwgZS5nZXRJbmhlcml0ZWRJbnN0YW5jZUNvdW50ID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhmbikubGVuZ3RoOwogICAgfSwgZS5nZXRMaXZlSW5oZXJpdGVkSW5zdGFuY2VzID0gZnVuY3Rpb24oKSB7CiAgICAgIHZhciBuID0gW10sIHQ7CiAgICAgIGZvciAodCBpbiBmbikKICAgICAgICBmbi5oYXNPd25Qcm9wZXJ0eSh0KSAmJiBuLnB1c2goZm5bdF0pOwogICAgICByZXR1cm4gbjsKICAgIH0sIGUuZmx1c2hQZW5kaW5nRGVsZXRlcyA9IEhuLCBlLnNldERlbGF5RnVuY3Rpb24gPSBmdW5jdGlvbihuKSB7CiAgICAgIGxuID0gbiwgY24ubGVuZ3RoICYmIGxuICYmIGxuKEhuKTsKICAgIH0sIHZ0ID0gZS5VbmJvdW5kVHlwZUVycm9yID0gTG4oIlVuYm91bmRUeXBlRXJyb3IiKSwgZS5jb3VudF9lbXZhbF9oYW5kbGVzID0gZnVuY3Rpb24oKSB7CiAgICAgIGZvciAodmFyIG4gPSAwLCB0ID0gNTsgdCA8IEkubGVuZ3RoOyArK3QpCiAgICAgICAgSVt0XSAhPT0gdm9pZCAwICYmICsrbjsKICAgICAgcmV0dXJuIG47CiAgICB9LCBlLmdldF9maXJzdF9lbXZhbCA9IGZ1bmN0aW9uKCkgewogICAgICBmb3IgKHZhciBuID0gNTsgbiA8IEkubGVuZ3RoOyArK24pCiAgICAgICAgaWYgKElbbl0gIT09IHZvaWQgMCkKICAgICAgICAgIHJldHVybiBJW25dOwogICAgICByZXR1cm4gbnVsbDsKICAgIH0sIGl0LnB1c2goeyBCYTogZnVuY3Rpb24oKSB7CiAgICAgIFN0KCk7CiAgICB9IH0pOwogICAgdmFyIG9lID0gewogICAgICB6OiBmdW5jdGlvbihuKSB7CiAgICAgICAgcmV0dXJuIFRuKG4gKyAxNikgKyAxNjsKICAgICAgfSwKICAgICAgdTogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIHRocm93IG5ldyAkdChuKS5GYSh0LCByKSwgInVuY2F1Z2h0X2V4Y2VwdGlvbiIgaW4gbW4gPyBtbi54YSsrIDogbW4ueGEgPSAxLCBuOwogICAgICB9LAogICAgICB3OiBmdW5jdGlvbihuLCB0LCByLCBpLCBhKSB7CiAgICAgICAgdmFyIHMgPSB4bihyKTsKICAgICAgICB0ID0gVyh0KSwgSChuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oYykgewogICAgICAgICAgcmV0dXJuICEhYzsKICAgICAgICB9LCB0b1dpcmVUeXBlOiBmdW5jdGlvbihjLCBsKSB7CiAgICAgICAgICByZXR1cm4gbCA/IGkgOiBhOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogZnVuY3Rpb24oYykgewogICAgICAgICAgaWYgKHIgPT09IDEpCiAgICAgICAgICAgIHZhciBsID0gWTsKICAgICAgICAgIGVsc2UgaWYgKHIgPT09IDIpCiAgICAgICAgICAgIGwgPSBROwogICAgICAgICAgZWxzZSBpZiAociA9PT0gNCkKICAgICAgICAgICAgbCA9IE87CiAgICAgICAgICBlbHNlCiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gYm9vbGVhbiB0eXBlIHNpemU6ICIgKyB0KTsKICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShsW2MgPj4gc10pOwogICAgICAgIH0sIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBpOiBmdW5jdGlvbihuLCB0LCByLCBpLCBhLCBzLCBjLCBsLCBwLCBmLCBkLCBoLCBBKSB7CiAgICAgICAgZCA9IFcoZCksIHMgPSBWKGEsIHMpLCBsICYmIChsID0gVihjLCBsKSksIGYgJiYgKGYgPSBWKHAsIGYpKSwgQSA9IFYoaCwgQSk7CiAgICAgICAgdmFyIFAgPSBJbihkKTsKICAgICAgICBwdChQLCBmdW5jdGlvbigpIHsKICAgICAgICAgIGRuKCJDYW5ub3QgY29uc3RydWN0ICIgKyBkICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIFtpXSk7CiAgICAgICAgfSksIHRuKFtuLCB0LCByXSwgaSA/IFtpXSA6IFtdLCBmdW5jdGlvbih5KSB7CiAgICAgICAgICBpZiAoeSA9IHlbMF0sIGkpCiAgICAgICAgICAgIHZhciBOID0geS5lYSwgYiA9IE4ubWE7CiAgICAgICAgICBlbHNlCiAgICAgICAgICAgIGIgPSBCLnByb3RvdHlwZTsKICAgICAgICAgIHkgPSBqbihQLCBmdW5jdGlvbigpIHsKICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSAhPT0gaykKICAgICAgICAgICAgICB0aHJvdyBuZXcgbm4oIlVzZSAnbmV3JyB0byBjb25zdHJ1Y3QgIiArIGQpOwogICAgICAgICAgICBpZiAoTC5sYSA9PT0gdm9pZCAwKQogICAgICAgICAgICAgIHRocm93IG5ldyBubihkICsgIiBoYXMgbm8gYWNjZXNzaWJsZSBjb25zdHJ1Y3RvciIpOwogICAgICAgICAgICB2YXIgT3QgPSBMLmxhW2FyZ3VtZW50cy5sZW5ndGhdOwogICAgICAgICAgICBpZiAoT3QgPT09IHZvaWQgMCkKICAgICAgICAgICAgICB0aHJvdyBuZXcgbm4oIlRyaWVkIHRvIGludm9rZSBjdG9yIG9mICIgKyBkICsgIiB3aXRoIGludmFsaWQgbnVtYmVyIG9mIHBhcmFtZXRlcnMgKCIgKyBhcmd1bWVudHMubGVuZ3RoICsgIikgLSBleHBlY3RlZCAoIiArIE9iamVjdC5rZXlzKEwubGEpLnRvU3RyaW5nKCkgKyAiKSBwYXJhbWV0ZXJzIGluc3RlYWQhIik7CiAgICAgICAgICAgIHJldHVybiBPdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgICAgICAgfSk7CiAgICAgICAgICB2YXIgayA9IE9iamVjdC5jcmVhdGUoYiwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogeSB9IH0pOwogICAgICAgICAgeS5wcm90b3R5cGUgPSBrOwogICAgICAgICAgdmFyIEwgPSBuZXcgS3QoZCwgeSwgaywgQSwgTiwgcywgbCwgZik7CiAgICAgICAgICBOID0gbmV3IHooZCwgTCwgITAsICExKSwgYiA9IG5ldyB6KGQgKyAiKiIsIEwsICExLCAhMSk7CiAgICAgICAgICB2YXIgaG4gPSBuZXcgeihkICsgIiBjb25zdCoiLCBMLCAhMSwgITApOwogICAgICAgICAgcmV0dXJuIGh0W25dID0geyBwb2ludGVyVHlwZTogYiwgemE6IGhuIH0sIG10KFAsIHkpLCBbTiwgYiwgaG5dOwogICAgICAgIH0pOwogICAgICB9LAogICAgICBoOiBmdW5jdGlvbihuLCB0LCByLCBpLCBhLCBzKSB7CiAgICAgICAgWG4oMCA8IHQpOwogICAgICAgIHZhciBjID0gd3QodCwgcik7CiAgICAgICAgYSA9IFYoaSwgYSk7CiAgICAgICAgdmFyIGwgPSBbc10sIHAgPSBbXTsKICAgICAgICB0bihbXSwgW25dLCBmdW5jdGlvbihmKSB7CiAgICAgICAgICBmID0gZlswXTsKICAgICAgICAgIHZhciBkID0gImNvbnN0cnVjdG9yICIgKyBmLm5hbWU7CiAgICAgICAgICBpZiAoZi5lYS5sYSA9PT0gdm9pZCAwICYmIChmLmVhLmxhID0gW10pLCBmLmVhLmxhW3QgLSAxXSAhPT0gdm9pZCAwKQogICAgICAgICAgICB0aHJvdyBuZXcgbm4oIkNhbm5vdCByZWdpc3RlciBtdWx0aXBsZSBjb25zdHJ1Y3RvcnMgd2l0aCBpZGVudGljYWwgbnVtYmVyIG9mIHBhcmFtZXRlcnMgKCIgKyAodCAtIDEpICsgIikgZm9yIGNsYXNzICciICsgZi5uYW1lICsgIichIE92ZXJsb2FkIHJlc29sdXRpb24gaXMgY3VycmVudGx5IG9ubHkgcGVyZm9ybWVkIHVzaW5nIHRoZSBwYXJhbWV0ZXIgY291bnQsIG5vdCBhY3R1YWwgdHlwZSBpbmZvISIpOwogICAgICAgICAgcmV0dXJuIGYuZWEubGFbdCAtIDFdID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGRuKCJDYW5ub3QgY29uc3RydWN0ICIgKyBmLm5hbWUgKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgYyk7CiAgICAgICAgICB9LCB0bihbXSwgYywgZnVuY3Rpb24oaCkgewogICAgICAgICAgICByZXR1cm4gZi5lYS5sYVt0IC0gMV0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICBhcmd1bWVudHMubGVuZ3RoICE9PSB0IC0gMSAmJiB2KGQgKyAiIGNhbGxlZCB3aXRoICIgKyBhcmd1bWVudHMubGVuZ3RoICsgIiBhcmd1bWVudHMsIGV4cGVjdGVkICIgKyAodCAtIDEpKSwgcC5sZW5ndGggPSAwLCBsLmxlbmd0aCA9IHQ7CiAgICAgICAgICAgICAgZm9yICh2YXIgQSA9IDE7IEEgPCB0OyArK0EpCiAgICAgICAgICAgICAgICBsW0FdID0gaFtBXS50b1dpcmVUeXBlKAogICAgICAgICAgICAgICAgICBwLAogICAgICAgICAgICAgICAgICBhcmd1bWVudHNbQSAtIDFdCiAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgIHJldHVybiBBID0gYS5hcHBseShudWxsLCBsKSwgQ24ocCksIGhbMF0uZnJvbVdpcmVUeXBlKEEpOwogICAgICAgICAgICB9LCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgYjogZnVuY3Rpb24obiwgdCwgciwgaSwgYSwgcywgYywgbCwgcCwgZikgewogICAgICAgIHQgPSBXKHQpLCBhID0gVihpLCBhKSwgdG4oW10sIFtuXSwgZnVuY3Rpb24oZCkgewogICAgICAgICAgZCA9IGRbMF07CiAgICAgICAgICB2YXIgaCA9IGQubmFtZSArICIuIiArIHQsIEEgPSB7IGdldDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGRuKCJDYW5ub3QgYWNjZXNzICIgKyBoICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIFtyLCBjXSk7CiAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCB9OwogICAgICAgICAgcmV0dXJuIHAgPyBBLnNldCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBkbigiQ2Fubm90IGFjY2VzcyAiICsgaCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbciwgY10pOwogICAgICAgICAgfSA6IEEuc2V0ID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHYoaCArICIgaXMgYSByZWFkLW9ubHkgcHJvcGVydHkiKTsKICAgICAgICAgIH0sIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkLmVhLm1hLCB0LCBBKSwgdG4oW10sIHAgPyBbciwgY10gOiBbcl0sIGZ1bmN0aW9uKFApIHsKICAgICAgICAgICAgdmFyIHkgPSBQWzBdLCBOID0geyBnZXQ6IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIHZhciBrID0gQXQodGhpcywgZCwgaCArICIgZ2V0dGVyIik7CiAgICAgICAgICAgICAgcmV0dXJuIHkuZnJvbVdpcmVUeXBlKGEocywgaykpOwogICAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCB9OwogICAgICAgICAgICBpZiAocCkgewogICAgICAgICAgICAgIHAgPSBWKGwsIHApOwogICAgICAgICAgICAgIHZhciBiID0gUFsxXTsKICAgICAgICAgICAgICBOLnNldCA9IGZ1bmN0aW9uKGspIHsKICAgICAgICAgICAgICAgIHZhciBMID0gQXQodGhpcywgZCwgaCArICIgc2V0dGVyIiksIGhuID0gW107CiAgICAgICAgICAgICAgICBwKGYsIEwsIGIudG9XaXJlVHlwZShobiwgaykpLCBDbihobik7CiAgICAgICAgICAgICAgfTsKICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGQuZWEubWEsIHQsIE4pLCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgdjogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHQgPSBXKHQpLCBIKG4sIHsgbmFtZTogdCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihyKSB7CiAgICAgICAgICB2YXIgaSA9IElbcl0udmFsdWU7CiAgICAgICAgICByZXR1cm4gRG4ociksIGk7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24ociwgaSkgewogICAgICAgICAgcmV0dXJuIGVuKGkpOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBtOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgciA9IHhuKHIpLCB0ID0gVyh0KSwgSChuLCB7CiAgICAgICAgICBuYW1lOiB0LAogICAgICAgICAgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBpOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIGEpIHsKICAgICAgICAgICAgaWYgKHR5cGVvZiBhICE9ICJudW1iZXIiICYmIHR5cGVvZiBhICE9ICJib29sZWFuIikKICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCAiJyArIHJuKGEpICsgJyIgdG8gJyArIHRoaXMubmFtZSk7CiAgICAgICAgICAgIHJldHVybiBhOwogICAgICAgICAgfSwKICAgICAgICAgIGFyZ1BhY2tBZHZhbmNlOiA4LAogICAgICAgICAgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IGVlKHQsIHIpLAogICAgICAgICAga2E6IG51bGwKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgYzogZnVuY3Rpb24obiwgdCwgciwgaSwgYSwgcykgewogICAgICAgIHZhciBjID0gd3QodCwgcik7CiAgICAgICAgbiA9IFcobiksIGEgPSBWKGksIGEpLCBwdChuLCBmdW5jdGlvbigpIHsKICAgICAgICAgIGRuKCJDYW5ub3QgY2FsbCAiICsgbiArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBjKTsKICAgICAgICB9LCB0IC0gMSksIHRuKFtdLCBjLCBmdW5jdGlvbihsKSB7CiAgICAgICAgICB2YXIgcCA9IG4sIGYgPSBuOwogICAgICAgICAgbCA9IFtsWzBdLCBudWxsXS5jb25jYXQobC5zbGljZSgxKSk7CiAgICAgICAgICB2YXIgZCA9IGEsIGggPSBsLmxlbmd0aDsKICAgICAgICAgIDIgPiBoICYmIHYoImFyZ1R5cGVzIGFycmF5IHNpemUgbWlzbWF0Y2ghIE11c3QgYXQgbGVhc3QgZ2V0IHJldHVybiB2YWx1ZSBhbmQgJ3RoaXMnIHR5cGVzISIpOwogICAgICAgICAgZm9yICh2YXIgQSA9IGxbMV0gIT09IG51bGwgJiYgITEsIFAgPSAhMSwgeSA9IDE7IHkgPCBsLmxlbmd0aDsgKyt5KQogICAgICAgICAgICBpZiAobFt5XSAhPT0gbnVsbCAmJiBsW3ldLmthID09PSB2b2lkIDApIHsKICAgICAgICAgICAgICBQID0gITA7CiAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgIH0KICAgICAgICAgIHZhciBOID0gbFswXS5uYW1lICE9PSAidm9pZCIsIGIgPSAiIiwgayA9ICIiOwogICAgICAgICAgZm9yICh5ID0gMDsgeSA8IGggLSAyOyArK3kpCiAgICAgICAgICAgIGIgKz0gKHkgIT09IDAgPyAiLCAiIDogIiIpICsgImFyZyIgKyB5LCBrICs9ICh5ICE9PSAwID8gIiwgIiA6ICIiKSArICJhcmciICsgeSArICJXaXJlZCI7CiAgICAgICAgICBmID0gInJldHVybiBmdW5jdGlvbiAiICsgSW4oZikgKyAiKCIgKyBiICsgYCkgewppZiAoYXJndW1lbnRzLmxlbmd0aCAhPT0gYCArIChoIC0gMikgKyBgKSB7CnRocm93QmluZGluZ0Vycm9yKCdmdW5jdGlvbiBgICsgZiArICIgY2FsbGVkIHdpdGggJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cywgZXhwZWN0ZWQgIiArIChoIC0gMikgKyBgIGFyZ3MhJyk7Cn0KYCwgUCAmJiAoZiArPSBgdmFyIGRlc3RydWN0b3JzID0gW107CmApOwogICAgICAgICAgdmFyIEwgPSBQID8gImRlc3RydWN0b3JzIiA6ICJudWxsIjsKICAgICAgICAgIGZvciAoYiA9ICJ0aHJvd0JpbmRpbmdFcnJvciBpbnZva2VyIGZuIHJ1bkRlc3RydWN0b3JzIHJldFR5cGUgY2xhc3NQYXJhbSIuc3BsaXQoIiAiKSwgZCA9IFt2LCBkLCBzLCBDbiwgbFswXSwgbFsxXV0sIEEgJiYgKGYgKz0gInZhciB0aGlzV2lyZWQgPSBjbGFzc1BhcmFtLnRvV2lyZVR5cGUoIiArIEwgKyBgLCB0aGlzKTsKYCksIHkgPSAwOyB5IDwgaCAtIDI7ICsreSkKICAgICAgICAgICAgZiArPSAidmFyIGFyZyIgKyB5ICsgIldpcmVkID0gYXJnVHlwZSIgKyB5ICsgIi50b1dpcmVUeXBlKCIgKyBMICsgIiwgYXJnIiArIHkgKyAiKTsgLy8gIiArIGxbeSArIDJdLm5hbWUgKyBgCmAsIGIucHVzaCgiYXJnVHlwZSIgKyB5KSwgZC5wdXNoKGxbeSArIDJdKTsKICAgICAgICAgIGlmIChBICYmIChrID0gInRoaXNXaXJlZCIgKyAoMCA8IGsubGVuZ3RoID8gIiwgIiA6ICIiKSArIGspLCBmICs9IChOID8gInZhciBydiA9ICIgOiAiIikgKyAiaW52b2tlcihmbiIgKyAoMCA8IGsubGVuZ3RoID8gIiwgIiA6ICIiKSArIGsgKyBgKTsKYCwgUCkKICAgICAgICAgICAgZiArPSBgcnVuRGVzdHJ1Y3RvcnMoZGVzdHJ1Y3RvcnMpOwpgOwogICAgICAgICAgZWxzZQogICAgICAgICAgICBmb3IgKHkgPSBBID8gMSA6IDI7IHkgPCBsLmxlbmd0aDsgKyt5KQogICAgICAgICAgICAgIGggPSB5ID09PSAxID8gInRoaXNXaXJlZCIgOiAiYXJnIiArICh5IC0gMikgKyAiV2lyZWQiLCBsW3ldLmthICE9PSBudWxsICYmIChmICs9IGggKyAiX2R0b3IoIiArIGggKyAiKTsgLy8gIiArIGxbeV0ubmFtZSArIGAKYCwgYi5wdXNoKGggKyAiX2R0b3IiKSwgZC5wdXNoKGxbeV0ua2EpKTsKICAgICAgICAgIHJldHVybiBOICYmIChmICs9IGB2YXIgcmV0ID0gcmV0VHlwZS5mcm9tV2lyZVR5cGUocnYpOwpyZXR1cm4gcmV0OwpgKSwgYi5wdXNoKGYgKyBgfQpgKSwgbCA9IHJlKGIpLmFwcGx5KG51bGwsIGQpLCBtdChwLCBsLCB0IC0gMSksIFtdOwogICAgICAgIH0pOwogICAgICB9LAogICAgICBlOiBmdW5jdGlvbihuLCB0LCByLCBpLCBhKSB7CiAgICAgICAgZnVuY3Rpb24gcyhmKSB7CiAgICAgICAgICByZXR1cm4gZjsKICAgICAgICB9CiAgICAgICAgdCA9IFcodCksIGEgPT09IC0xICYmIChhID0gNDI5NDk2NzI5NSk7CiAgICAgICAgdmFyIGMgPSB4bihyKTsKICAgICAgICBpZiAoaSA9PT0gMCkgewogICAgICAgICAgdmFyIGwgPSAzMiAtIDggKiByOwogICAgICAgICAgcyA9IGZ1bmN0aW9uKGYpIHsKICAgICAgICAgICAgcmV0dXJuIGYgPDwgbCA+Pj4gbDsKICAgICAgICAgIH07CiAgICAgICAgfQogICAgICAgIHZhciBwID0gdC5pbmRleE9mKCJ1bnNpZ25lZCIpICE9IC0xOwogICAgICAgIEgobiwgeyBuYW1lOiB0LCBmcm9tV2lyZVR5cGU6IHMsIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGYsIGQpIHsKICAgICAgICAgIGlmICh0eXBlb2YgZCAhPSAibnVtYmVyIiAmJiB0eXBlb2YgZCAhPSAiYm9vbGVhbiIpCiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0ICInICsgcm4oZCkgKyAnIiB0byAnICsgdGhpcy5uYW1lKTsKICAgICAgICAgIGlmIChkIDwgaSB8fCBkID4gYSkKICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUGFzc2luZyBhIG51bWJlciAiJyArIHJuKGQpICsgJyIgZnJvbSBKUyBzaWRlIHRvIEMvQysrIHNpZGUgdG8gYW4gYXJndW1lbnQgb2YgdHlwZSAiJyArIHQgKyAnIiwgd2hpY2ggaXMgb3V0c2lkZSB0aGUgdmFsaWQgcmFuZ2UgWycgKyBpICsgIiwgIiArIGEgKyAiXSEiKTsKICAgICAgICAgIHJldHVybiBwID8gZCA+Pj4gMCA6IGQgfCAwOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogaWUodCwgYywgaSAhPT0gMCksIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBkOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgZnVuY3Rpb24gaShzKSB7CiAgICAgICAgICBzID4+PSAyOwogICAgICAgICAgdmFyIGMgPSBVOwogICAgICAgICAgcmV0dXJuIG5ldyBhKEssIGNbcyArIDFdLCBjW3NdKTsKICAgICAgICB9CiAgICAgICAgdmFyIGEgPSBbSW50OEFycmF5LCBVaW50OEFycmF5LCBJbnQxNkFycmF5LCBVaW50MTZBcnJheSwgSW50MzJBcnJheSwgVWludDMyQXJyYXksIEZsb2F0MzJBcnJheSwgRmxvYXQ2NEFycmF5XVt0XTsKICAgICAgICByID0gVyhyKSwgSChuLCB7IG5hbWU6IHIsIGZyb21XaXJlVHlwZTogaSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBpIH0sIHsgRWE6ICEwIH0pOwogICAgICB9LAogICAgICBuOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdCA9IFcodCk7CiAgICAgICAgdmFyIHIgPSB0ID09PSAic3RkOjpzdHJpbmciOwogICAgICAgIEgobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICB2YXIgYSA9IFVbaSA+PiAyXTsKICAgICAgICAgICAgaWYgKHIpCiAgICAgICAgICAgICAgZm9yICh2YXIgcyA9IGkgKyA0LCBjID0gMDsgYyA8PSBhOyArK2MpIHsKICAgICAgICAgICAgICAgIHZhciBsID0gaSArIDQgKyBjOwogICAgICAgICAgICAgICAgaWYgKGMgPT0gYSB8fCBGW2xdID09IDApIHsKICAgICAgICAgICAgICAgICAgaWYgKHMpIHsKICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IHMsIGYgPSBGLCBkID0gcCArIChsIC0gcyk7CiAgICAgICAgICAgICAgICAgICAgZm9yIChzID0gcDsgZltzXSAmJiAhKHMgPj0gZCk7ICkKICAgICAgICAgICAgICAgICAgICAgICsrczsKICAgICAgICAgICAgICAgICAgICBpZiAoMTYgPCBzIC0gcCAmJiBmLnN1YmFycmF5ICYmIEtuKQogICAgICAgICAgICAgICAgICAgICAgcCA9IEtuLmRlY29kZShmLnN1YmFycmF5KHAsIHMpKTsKICAgICAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICAgIGZvciAoZCA9ICIiOyBwIDwgczsgKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoID0gZltwKytdOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAoaCAmIDEyOCkgewogICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBBID0gZltwKytdICYgNjM7CiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChoICYgMjI0KSA9PSAxOTIpCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGggJiAzMSkgPDwgNiB8IEEpOwogICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFAgPSBmW3ArK10gJiA2MzsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGggPSAoaCAmIDI0MCkgPT0gMjI0ID8gKGggJiAxNSkgPDwgMTIgfCBBIDw8IDYgfCBQIDogKGggJiA3KSA8PCAxOCB8IEEgPDwgMTIgfCBQIDw8IDYgfCBmW3ArK10gJiA2MywgNjU1MzYgPiBoID8gZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGgpIDogKGggLT0gNjU1MzYsIGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiB8IGggPj4gMTAsIDU2MzIwIHwgaCAmIDEwMjMpKTsKICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZQogICAgICAgICAgICAgICAgICAgICAgICAgIGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShoKTsKICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgIHAgPSBkOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgfSBlbHNlCiAgICAgICAgICAgICAgICAgICAgcCA9ICIiOwogICAgICAgICAgICAgICAgICBpZiAoeSA9PT0gdm9pZCAwKQogICAgICAgICAgICAgICAgICAgIHZhciB5ID0gcDsKICAgICAgICAgICAgICAgICAgZWxzZQogICAgICAgICAgICAgICAgICAgIHkgKz0gIlwwIiwgeSArPSBwOwogICAgICAgICAgICAgICAgICBzID0gbCArIDE7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICBmb3IgKHkgPSBBcnJheShhKSwgYyA9IDA7IGMgPCBhOyArK2MpCiAgICAgICAgICAgICAgICB5W2NdID0gU3RyaW5nLmZyb21DaGFyQ29kZShGW2kgKyA0ICsgY10pOwogICAgICAgICAgICAgIHkgPSB5LmpvaW4oIiIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiBEKGkpLCB5OwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIGEpIHsKICAgICAgICAgICAgYSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyICYmIChhID0gbmV3IFVpbnQ4QXJyYXkoYSkpOwogICAgICAgICAgICB2YXIgcyA9IHR5cGVvZiBhID09ICJzdHJpbmciOwogICAgICAgICAgICBzIHx8IGEgaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IGEgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSB8fCBhIGluc3RhbmNlb2YgSW50OEFycmF5IHx8IHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gc3RkOjpzdHJpbmciKTsKICAgICAgICAgICAgdmFyIGMgPSAociAmJiBzID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IDAsIGQgPSAwOyBkIDwgYS5sZW5ndGg7ICsrZCkgewogICAgICAgICAgICAgICAgdmFyIGggPSBhLmNoYXJDb2RlQXQoZCk7CiAgICAgICAgICAgICAgICA1NTI5NiA8PSBoICYmIDU3MzQzID49IGggJiYgKGggPSA2NTUzNiArICgoaCAmIDEwMjMpIDw8IDEwKSB8IGEuY2hhckNvZGVBdCgrK2QpICYgMTAyMyksIDEyNyA+PSBoID8gKytmIDogZiA9IDIwNDcgPj0gaCA/IGYgKyAyIDogNjU1MzUgPj0gaCA/IGYgKyAzIDogZiArIDQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHJldHVybiBmOwogICAgICAgICAgICB9IDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgcmV0dXJuIGEubGVuZ3RoOwogICAgICAgICAgICB9KSgpLCBsID0gVG4oNCArIGMgKyAxKTsKICAgICAgICAgICAgaWYgKFVbbCA+PiAyXSA9IGMsIHIgJiYgcykKICAgICAgICAgICAgICBOdChhLCBsICsgNCwgYyArIDEpOwogICAgICAgICAgICBlbHNlIGlmIChzKQogICAgICAgICAgICAgIGZvciAocyA9IDA7IHMgPCBjOyArK3MpIHsKICAgICAgICAgICAgICAgIHZhciBwID0gYS5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgICAgICAgMjU1IDwgcCAmJiAoRChsKSwgdigiU3RyaW5nIGhhcyBVVEYtMTYgY29kZSB1bml0cyB0aGF0IGRvIG5vdCBmaXQgaW4gOCBiaXRzIikpLCBGW2wgKyA0ICsgc10gPSBwOwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZQogICAgICAgICAgICAgIGZvciAocyA9IDA7IHMgPCBjOyArK3MpCiAgICAgICAgICAgICAgICBGW2wgKyA0ICsgc10gPSBhW3NdOwogICAgICAgICAgICByZXR1cm4gaSAhPT0gbnVsbCAmJiBpLnB1c2goRCwgbCksIGw7CiAgICAgICAgICB9LAogICAgICAgICAgYXJnUGFja0FkdmFuY2U6IDgsCiAgICAgICAgICByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sCiAgICAgICAgICBrYTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICBEKGkpOwogICAgICAgICAgfQogICAgICAgIH0pOwogICAgICB9LAogICAgICBqOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgaWYgKHIgPSBXKHIpLCB0ID09PSAyKQogICAgICAgICAgdmFyIGkgPSBVdCwgYSA9IEh0LCBzID0genQsIGMgPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgcmV0dXJuIHBuOwogICAgICAgICAgfSwgbCA9IDE7CiAgICAgICAgZWxzZQogICAgICAgICAgdCA9PT0gNCAmJiAoaSA9IER0LCBhID0gQnQsIHMgPSBWdCwgYyA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICByZXR1cm4gVTsKICAgICAgICAgIH0sIGwgPSAyKTsKICAgICAgICBIKG4sIHsgbmFtZTogciwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihwKSB7CiAgICAgICAgICBmb3IgKHZhciBmID0gVVtwID4+IDJdLCBkID0gYygpLCBoLCBBID0gcCArIDQsIFAgPSAwOyBQIDw9IGY7ICsrUCkgewogICAgICAgICAgICB2YXIgeSA9IHAgKyA0ICsgUCAqIHQ7CiAgICAgICAgICAgIChQID09IGYgfHwgZFt5ID4+IGxdID09IDApICYmIChBID0gaShBLCB5IC0gQSksIGggPT09IHZvaWQgMCA/IGggPSBBIDogKGggKz0gIlwwIiwgaCArPSBBKSwgQSA9IHkgKyB0KTsKICAgICAgICAgIH0KICAgICAgICAgIHJldHVybiBEKHApLCBoOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHAsIGYpIHsKICAgICAgICAgIHR5cGVvZiBmICE9ICJzdHJpbmciICYmIHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gQysrIHN0cmluZyB0eXBlICIgKyByKTsKICAgICAgICAgIHZhciBkID0gcyhmKSwgaCA9IFRuKDQgKyBkICsgdCk7CiAgICAgICAgICByZXR1cm4gVVtoID4+IDJdID0gZCA+PiBsLCBhKGYsIGggKyA0LCBkICsgdCksIHAgIT09IG51bGwgJiYgcC5wdXNoKEQsIGgpLCBoOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sIGthOiBmdW5jdGlvbihwKSB7CiAgICAgICAgICBEKHApOwogICAgICAgIH0gfSk7CiAgICAgIH0sCiAgICAgIHg6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gVyh0KSwgSChuLCB7IFFhOiAhMCwgbmFtZTogdCwgYXJnUGFja0FkdmFuY2U6IDAsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSB9KTsKICAgICAgfSwKICAgICAgazogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIG4gPSBCbihuKSwgdCA9IF90KHQsICJlbXZhbDo6YXMiKTsKICAgICAgICB2YXIgaSA9IFtdLCBhID0gZW4oaSk7CiAgICAgICAgcmV0dXJuIE9bciA+PiAyXSA9IGEsIHQudG9XaXJlVHlwZShpLCBuKTsKICAgICAgfSwKICAgICAgZzogRG4sCiAgICAgIGw6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICByZXR1cm4gbiA9IEJuKG4pLCB0ID0gQm4odCksIGVuKG5bdF0pOwogICAgICB9LAogICAgICBwOiBmdW5jdGlvbihuKSB7CiAgICAgICAgdmFyIHQgPSBhZVtuXTsKICAgICAgICByZXR1cm4gZW4odCA9PT0gdm9pZCAwID8gVyhuKSA6IHQpOwogICAgICB9LAogICAgICBvOiBmdW5jdGlvbihuKSB7CiAgICAgICAgQ24oSVtuXS52YWx1ZSksIERuKG4pOwogICAgICB9LAogICAgICB5OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgcmV0dXJuIG4gPSBfdChuLCAiX2VtdmFsX3Rha2VfdmFsdWUiKSwgbiA9IG4ucmVhZFZhbHVlRnJvbVBvaW50ZXIodCksIGVuKG4pOwogICAgICB9LAogICAgICBmOiBmdW5jdGlvbigpIHsKICAgICAgICBzbigpOwogICAgICB9LAogICAgICBxOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgRi5jb3B5V2l0aGluKG4sIHQsIHQgKyByKTsKICAgICAgfSwKICAgICAgcjogZnVuY3Rpb24obikgewogICAgICAgIG4gPj4+PSAwOwogICAgICAgIHZhciB0ID0gRi5sZW5ndGg7CiAgICAgICAgaWYgKDIxNDc0ODM2NDggPCBuKQogICAgICAgICAgcmV0dXJuICExOwogICAgICAgIGZvciAodmFyIHIgPSAxOyA0ID49IHI7IHIgKj0gMikgewogICAgICAgICAgdmFyIGkgPSB0ICogKDEgKyAwLjIgLyByKTsKICAgICAgICAgIGkgPSBNYXRoLm1pbihpLCBuICsgMTAwNjYzMjk2KSwgaSA9IE1hdGgubWF4KDE2Nzc3MjE2LCBuLCBpKSwgMCA8IGkgJSA2NTUzNiAmJiAoaSArPSA2NTUzNiAtIGkgJSA2NTUzNik7CiAgICAgICAgICBuOiB7CiAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgRy5ncm93KE1hdGgubWluKDIxNDc0ODM2NDgsIGkpIC0gSy5ieXRlTGVuZ3RoICsgNjU1MzUgPj4+IDE2KSwgdHQoRy5idWZmZXIpOwogICAgICAgICAgICAgIHZhciBhID0gMTsKICAgICAgICAgICAgICBicmVhayBuOwogICAgICAgICAgICB9IGNhdGNoIHsKICAgICAgICAgICAgfQogICAgICAgICAgICBhID0gdm9pZCAwOwogICAgICAgICAgfQogICAgICAgICAgaWYgKGEpCiAgICAgICAgICAgIHJldHVybiAhMDsKICAgICAgICB9CiAgICAgICAgcmV0dXJuICExOwogICAgICB9LAogICAgICBzOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSAwOwogICAgICAgIHJldHVybiBFdCgpLmZvckVhY2goZnVuY3Rpb24oaSwgYSkgewogICAgICAgICAgdmFyIHMgPSB0ICsgcjsKICAgICAgICAgIGZvciAoYSA9IE9bbiArIDQgKiBhID4+IDJdID0gcywgcyA9IDA7IHMgPCBpLmxlbmd0aDsgKytzKQogICAgICAgICAgICBZW2ErKyA+PiAwXSA9IGkuY2hhckNvZGVBdChzKTsKICAgICAgICAgIFlbYSA+PiAwXSA9IDAsIHIgKz0gaS5sZW5ndGggKyAxOwogICAgICAgIH0pLCAwOwogICAgICB9LAogICAgICB0OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSBFdCgpOwogICAgICAgIE9bbiA+PiAyXSA9IHIubGVuZ3RoOwogICAgICAgIHZhciBpID0gMDsKICAgICAgICByZXR1cm4gci5mb3JFYWNoKGZ1bmN0aW9uKGEpIHsKICAgICAgICAgIGkgKz0gYS5sZW5ndGggKyAxOwogICAgICAgIH0pLCBPW3QgPj4gMl0gPSBpLCAwOwogICAgICB9LAogICAgICBhOiBHCiAgICB9OwogICAgKGZ1bmN0aW9uKCkgewogICAgICBmdW5jdGlvbiBuKHMpIHsKICAgICAgICBzID0gcy5leHBvcnRzLCBzID0gTXQocyksIGUuYXNtID0gcywgWi0tLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKFopLCBaID09IDAgJiYgb24gJiYgKHMgPSBvbiwgb24gPSBudWxsLCBzKCkpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIHQocykgewogICAgICAgIG4ocy5pbnN0YW5jZSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gcihzKSB7CiAgICAgICAgcmV0dXJuIFp0KCkudGhlbihmdW5jdGlvbihjKSB7CiAgICAgICAgICByZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoYywgaSk7CiAgICAgICAgfSkudGhlbihzLCBmdW5jdGlvbihjKSB7CiAgICAgICAgICBTKCJmYWlsZWQgdG8gYXN5bmNocm9ub3VzbHkgcHJlcGFyZSB3YXNtOiAiICsgYyksIHNuKGMpOwogICAgICAgIH0pOwogICAgICB9CiAgICAgIHZhciBpID0geyBhOiBvZSB9OwogICAgICBpZiAoWisrLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKFopLCBlLmluc3RhbnRpYXRlV2FzbSkKICAgICAgICB0cnkgewogICAgICAgICAgdmFyIGEgPSBlLmluc3RhbnRpYXRlV2FzbShpLCBuKTsKICAgICAgICAgIHJldHVybiBhID0gTXQoYSk7CiAgICAgICAgfSBjYXRjaCAocykgewogICAgICAgICAgcmV0dXJuIFMoIk1vZHVsZS5pbnN0YW50aWF0ZVdhc20gY2FsbGJhY2sgZmFpbGVkIHdpdGggZXJyb3I6ICIgKyBzKSwgITE7CiAgICAgICAgfQogICAgICByZXR1cm4gZnVuY3Rpb24oKSB7CiAgICAgICAgaWYgKGogfHwgdHlwZW9mIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nICE9ICJmdW5jdGlvbiIgfHwgb3QoKSB8fCBSbigiZmlsZTovLyIpIHx8IHR5cGVvZiBmZXRjaCAhPSAiZnVuY3Rpb24iKQogICAgICAgICAgcmV0dXJuIHIodCk7CiAgICAgICAgZmV0Y2goJCwgeyBjcmVkZW50aWFsczogInNhbWUtb3JpZ2luIiB9KS50aGVuKGZ1bmN0aW9uKHMpIHsKICAgICAgICAgIHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyhzLCBpKS50aGVuKHQsIGZ1bmN0aW9uKGMpIHsKICAgICAgICAgICAgcmV0dXJuIFMoIndhc20gc3RyZWFtaW5nIGNvbXBpbGUgZmFpbGVkOiAiICsgYyksIFMoImZhbGxpbmcgYmFjayB0byBBcnJheUJ1ZmZlciBpbnN0YW50aWF0aW9uIiksIHIodCk7CiAgICAgICAgICB9KTsKICAgICAgICB9KTsKICAgICAgfSgpLCB7fTsKICAgIH0pKCk7CiAgICB2YXIgU3QgPSBlLl9fX3dhc21fY2FsbF9jdG9ycyA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKFN0ID0gZS5fX193YXNtX2NhbGxfY3RvcnMgPSBlLmFzbS5CKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgVG4gPSBlLl9tYWxsb2MgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChUbiA9IGUuX21hbGxvYyA9IGUuYXNtLkMpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBEID0gZS5fZnJlZSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKEQgPSBlLl9mcmVlID0gZS5hc20uRCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGJ0ID0gZS5fX19nZXRUeXBlTmFtZSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGJ0ID0gZS5fX19nZXRUeXBlTmFtZSA9IGUuYXNtLkUpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9OwogICAgZS5fX19lbWJpbmRfcmVnaXN0ZXJfbmF0aXZlX2FuZF9idWlsdGluX3R5cGVzID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fX19lbWJpbmRfcmVnaXN0ZXJfbmF0aXZlX2FuZF9idWlsdGluX3R5cGVzID0gZS5hc20uRikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paSA9IGUuYXNtLkcpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmkgPSBlLmFzbS5IKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2kgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaSA9IGUuYXNtLkkpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaSA9IGUuYXNtLkopLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpID0gZS5hc20uSykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9maWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfZmlpID0gZS5hc20uTCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlmID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWYgPSBlLmFzbS5NKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpID0gZS5hc20uTikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWkgPSBlLmFzbS5PKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWkgPSBlLmFzbS5QKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWkgPSBlLmFzbS5RKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpID0gZS5hc20uUikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWlpaSA9IGUuYXNtLlMpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWkgPSBlLmFzbS5UKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWlpaSA9IGUuYXNtLlUpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpaWRpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWlkaSA9IGUuYXNtLlYpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpZGkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpZGkgPSBlLmFzbS5XKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWlpID0gZS5hc20uWCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWkgPSBlLmFzbS5ZKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWkgPSBlLmFzbS5aKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaSA9IGUuYXNtLl8pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdGFydF91bndpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdGFydF91bndpbmQgPSBlLmFzbS4kKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RvcF91bndpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdG9wX3Vud2luZCA9IGUuYXNtLmFhKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RhcnRfcmV3aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RhcnRfcmV3aW5kID0gZS5hc20uYmEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdG9wX3Jld2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0b3BfcmV3aW5kID0gZS5hc20uY2EpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9OwogICAgdmFyIE1uOwogICAgb24gPSBmdW5jdGlvbiBuKCkgewogICAgICBNbiB8fCBHbigpLCBNbiB8fCAob24gPSBuKTsKICAgIH07CiAgICBmdW5jdGlvbiBHbigpIHsKICAgICAgZnVuY3Rpb24gbigpIHsKICAgICAgICBpZiAoIU1uICYmIChNbiA9ICEwLCBlLmNhbGxlZFJ1biA9ICEwLCAha24pKSB7CiAgICAgICAgICBpZiAoeW4oaXQpLCB5bihHdCksIG0oZSksIGUub25SdW50aW1lSW5pdGlhbGl6ZWQgJiYgZS5vblJ1bnRpbWVJbml0aWFsaXplZCgpLCBlLnBvc3RSdW4pCiAgICAgICAgICAgIGZvciAodHlwZW9mIGUucG9zdFJ1biA9PSAiZnVuY3Rpb24iICYmIChlLnBvc3RSdW4gPSBbZS5wb3N0UnVuXSk7IGUucG9zdFJ1bi5sZW5ndGg7ICkgewogICAgICAgICAgICAgIHZhciB0ID0gZS5wb3N0UnVuLnNoaWZ0KCk7CiAgICAgICAgICAgICAgYXQudW5zaGlmdCh0KTsKICAgICAgICAgICAgfQogICAgICAgICAgeW4oYXQpOwogICAgICAgIH0KICAgICAgfQogICAgICBpZiAoISgwIDwgWikpIHsKICAgICAgICBpZiAoZS5wcmVSdW4pCiAgICAgICAgICBmb3IgKHR5cGVvZiBlLnByZVJ1biA9PSAiZnVuY3Rpb24iICYmIChlLnByZVJ1biA9IFtlLnByZVJ1bl0pOyBlLnByZVJ1bi5sZW5ndGg7ICkKICAgICAgICAgICAgWXQoKTsKICAgICAgICB5bihydCksIDAgPCBaIHx8IChlLnNldFN0YXR1cyA/IChlLnNldFN0YXR1cygiUnVubmluZy4uLiIpLCBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgICAgICAgICAgZS5zZXRTdGF0dXMoIiIpOwogICAgICAgICAgfSwgMSksIG4oKTsKICAgICAgICB9LCAxKSkgOiBuKCkpOwogICAgICB9CiAgICB9CiAgICBpZiAoZS5ydW4gPSBHbiwgZS5wcmVJbml0KQogICAgICBmb3IgKHR5cGVvZiBlLnByZUluaXQgPT0gImZ1bmN0aW9uIiAmJiAoZS5wcmVJbml0ID0gW2UucHJlSW5pdF0pOyAwIDwgZS5wcmVJbml0Lmxlbmd0aDsgKQogICAgICAgIGUucHJlSW5pdC5wb3AoKSgpOwogICAgcmV0dXJuIEduKCksIHUucmVhZHk7CiAgfTsKfSgpOwpjbGFzcyBwZSB7CiAgY29uc3RydWN0b3IoKSB7CiAgICBZbih0aGlzLCAic2FtV2FzbU1vZHVsZSIpOwogIH0KICBnZXRPdmVycmlkZGVuTW9kdWxlcyh1LCBlKSB7CiAgICByZXR1cm4gewogICAgICBsb2NhdGVGaWxlOiAobSkgPT4gbmV3IFVSTChlIHx8IG0sIHUpLmhyZWYKICAgIH07CiAgfQogIGFzeW5jIGhhbmRsZU1pc3NpbmdPckludmFsaWRTYW1Nb2R1bGUodSwgZSkgewogICAgdHJ5IHsKICAgICAgY29uc3QgbSA9IGF3YWl0IGZldGNoKHUpOwogICAgICBpZiAoIW0ub2spCiAgICAgICAgdGhyb3cgbmV3IHgoCiAgICAgICAgICBgVGhlIHBhdGggdG8gJHtlfSBpcyBpbmNvcnJlY3Qgb3IgdGhlIG1vZHVsZSBpcyBtaXNzaW5nLiBQbGVhc2UgY2hlY2sgcHJvdmlkZWQgcGF0aCB0byB3YXNtIGZpbGVzLiBDdXJyZW50IHBhdGggaXMgJHt1fWAKICAgICAgICApOwogICAgICBjb25zdCBnID0gYXdhaXQgbS5hcnJheUJ1ZmZlcigpOwogICAgICBpZiAoIVdlYkFzc2VtYmx5LnZhbGlkYXRlKGcpKQogICAgICAgIHRocm93IG5ldyB4KAogICAgICAgICAgYFRoZSBwcm92aWRlZCAke2V9IGlzIG5vdCBhIHZhbGlkIFdBU00gbW9kdWxlLiBQbGVhc2UgY2hlY2sgcHJvdmlkZWQgcGF0aCB0byB3YXNtIGZpbGVzLiBDdXJyZW50IHBhdGggaXMgJHt1fWAKICAgICAgICApOwogICAgfSBjYXRjaCAobSkgewogICAgICBpZiAobSBpbnN0YW5jZW9mIHgpCiAgICAgICAgdGhyb3cgY29uc29sZS5lcnJvcigKICAgICAgICAgICJZb3UgY2FuIGZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBob3cgdG8gaG9zdCB3YXNtIGZpbGVzIGhlcmU6IGh0dHBzOi8vZGV2ZWxvcGVycy5pbm5vdmF0cmljcy5jb20vZGlnaXRhbC1vbmJvYXJkaW5nL3RlY2huaWNhbC9yZW1vdGUvZG90LXdlYi1kb2N1bWVudC9sYXRlc3QvZG9jdW1lbnRhdGlvbi8jX2hvc3Rpbmdfc2FtX3dhc20iCiAgICAgICAgKSwgbTsKICAgIH0KICB9CiAgYXN5bmMgZ2V0V2FzbUZpbGVOYW1lKCkgewogICAgcmV0dXJuIGF3YWl0IGxlKCkgPyBXdC5zaW1kIDogV3Quc2FtOwogIH0KICBhc3luYyBpbml0U2FtTW9kdWxlKHUsIGUgPSAiL3dhc20iKSB7CiAgICBpZiAodGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICByZXR1cm47CiAgICBjb25zdCBtID0gYXdhaXQgdGhpcy5nZXRXYXNtRmlsZU5hbWUoKSwgZyA9IGAke2V9LyR7bX1gOwogICAgdHJ5IHsKICAgICAgdGhpcy5zYW1XYXNtTW9kdWxlID0gYXdhaXQgaGUodGhpcy5nZXRPdmVycmlkZGVuTW9kdWxlcyh1LCBnKSk7CiAgICB9IGNhdGNoIHsKICAgICAgdGhyb3cgYXdhaXQgdGhpcy5oYW5kbGVNaXNzaW5nT3JJbnZhbGlkU2FtTW9kdWxlKGcsIG0pLCBuZXcgeCgiQ291bGQgbm90IGluaXQgZGV0ZWN0b3IuIik7CiAgICB9CiAgfQogIGFzeW5jIGdldFNhbVZlcnNpb24oKSB7CiAgICB2YXIgZTsKICAgIGNvbnN0IHUgPSBhd2FpdCAoKGUgPSB0aGlzLnNhbVdhc21Nb2R1bGUpID09IG51bGwgPyB2b2lkIDAgOiBlLmdldEluZm9TdHJpbmcoKSk7CiAgICByZXR1cm4gdSA9PSBudWxsID8gdm9pZCAwIDogdS50cmltKCk7CiAgfQogIC8qCiAgICogSW4gVFMgNS4yLjAgd2FzIGFkZGVkIHNwZWNpYWwga2V5d29yZCAidXNpbmciIHdoaWNoIGNvdWxkIGJlIHBlcmZlY3QgZm9yIHRoaXMgY2FzZS4KICAgKiBVbmZvcnR1bmF0ZWx5LCB2aXRlIHByZWFjdCBwbHVnaW4gZG9lcyBub3Qgc3VwcG9ydCB0aGlzIHZlcnNpb24gb2YgVFMgeWV0LgogICAqIENoZWNrIHBvc3NpYmlsaXR5IG9mIHVzaW5nICJ1c2luZyIga2V5d29yZCB3aGVuIHZpdGUgcHJlYWN0IHBsdWdpbiB1cGRhdGVzCiAgICovCiAgYWxsb2NhdGVNZW1vcnkodSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyB4KCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICByZXR1cm4gdGhpcy5zYW1XYXNtTW9kdWxlLl9tYWxsb2ModSk7CiAgfQogIHJlbGVhc2VNZW1vcnkodSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyB4KCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICB0aGlzLnNhbVdhc21Nb2R1bGUuX2ZyZWUodSk7CiAgfQogIHdyaXRlRGF0YVRvTWVtb3J5KHUsIGUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgeCgiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgdGhpcy5zYW1XYXNtTW9kdWxlLkhFQVBVOC5zZXQodSwgZSk7CiAgfQp9Ci8qKgogKiBAbGljZW5zZQogKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDCiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wCiAqLwpjb25zdCBSdCA9IFN5bWJvbCgiQ29tbGluay5wcm94eSIpLCB5ZSA9IFN5bWJvbCgiQ29tbGluay5lbmRwb2ludCIpLCBtZSA9IFN5bWJvbCgiQ29tbGluay5yZWxlYXNlUHJveHkiKSwgWm4gPSBTeW1ib2woIkNvbWxpbmsuZmluYWxpemVyIiksIFNuID0gU3ltYm9sKCJDb21saW5rLnRocm93biIpLCBGdCA9IChvKSA9PiB0eXBlb2YgbyA9PSAib2JqZWN0IiAmJiBvICE9PSBudWxsIHx8IHR5cGVvZiBvID09ICJmdW5jdGlvbiIsIHZlID0gewogIGNhbkhhbmRsZTogKG8pID0+IEZ0KG8pICYmIG9bUnRdLAogIHNlcmlhbGl6ZShvKSB7CiAgICBjb25zdCB7IHBvcnQxOiB1LCBwb3J0MjogZSB9ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7CiAgICByZXR1cm4gSm4obywgdSksIFtlLCBbZV1dOwogIH0sCiAgZGVzZXJpYWxpemUobykgewogICAgcmV0dXJuIG8uc3RhcnQoKSwgX2Uobyk7CiAgfQp9LCBnZSA9IHsKICBjYW5IYW5kbGU6IChvKSA9PiBGdChvKSAmJiBTbiBpbiBvLAogIHNlcmlhbGl6ZSh7IHZhbHVlOiBvIH0pIHsKICAgIGxldCB1OwogICAgcmV0dXJuIG8gaW5zdGFuY2VvZiBFcnJvciA/IHUgPSB7CiAgICAgIGlzRXJyb3I6ICEwLAogICAgICB2YWx1ZTogewogICAgICAgIG1lc3NhZ2U6IG8ubWVzc2FnZSwKICAgICAgICBuYW1lOiBvLm5hbWUsCiAgICAgICAgc3RhY2s6IG8uc3RhY2sKICAgICAgfQogICAgfSA6IHUgPSB7IGlzRXJyb3I6ICExLCB2YWx1ZTogbyB9LCBbdSwgW11dOwogIH0sCiAgZGVzZXJpYWxpemUobykgewogICAgdGhyb3cgby5pc0Vycm9yID8gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3Ioby52YWx1ZS5tZXNzYWdlKSwgby52YWx1ZSkgOiBvLnZhbHVlOwogIH0KfSwgeHQgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcChbCiAgWyJwcm94eSIsIHZlXSwKICBbInRocm93IiwgZ2VdCl0pOwpmdW5jdGlvbiB3ZShvLCB1KSB7CiAgZm9yIChjb25zdCBlIG9mIG8pCiAgICBpZiAodSA9PT0gZSB8fCBlID09PSAiKiIgfHwgZSBpbnN0YW5jZW9mIFJlZ0V4cCAmJiBlLnRlc3QodSkpCiAgICAgIHJldHVybiAhMDsKICByZXR1cm4gITE7Cn0KZnVuY3Rpb24gSm4obywgdSA9IGdsb2JhbFRoaXMsIGUgPSBbIioiXSkgewogIHUuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGZ1bmN0aW9uIG0oZykgewogICAgaWYgKCFnIHx8ICFnLmRhdGEpCiAgICAgIHJldHVybjsKICAgIGlmICghd2UoZSwgZy5vcmlnaW4pKSB7CiAgICAgIGNvbnNvbGUud2FybihgSW52YWxpZCBvcmlnaW4gJyR7Zy5vcmlnaW59JyBmb3IgY29tbGluayBwcm94eWApOwogICAgICByZXR1cm47CiAgICB9CiAgICBjb25zdCB7IGlkOiBfLCB0eXBlOiB3LCBwYXRoOiBUIH0gPSBPYmplY3QuYXNzaWduKHsgcGF0aDogW10gfSwgZy5kYXRhKSwgTSA9IChnLmRhdGEuYXJndW1lbnRMaXN0IHx8IFtdKS5tYXAoWCk7CiAgICBsZXQgRTsKICAgIHRyeSB7CiAgICAgIGNvbnN0IEMgPSBULnNsaWNlKDAsIC0xKS5yZWR1Y2UoKFMsIGopID0+IFNbal0sIG8pLCBSID0gVC5yZWR1Y2UoKFMsIGopID0+IFNbal0sIG8pOwogICAgICBzd2l0Y2ggKHcpIHsKICAgICAgICBjYXNlICJHRVQiOgogICAgICAgICAgRSA9IFI7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJTRVQiOgogICAgICAgICAgQ1tULnNsaWNlKC0xKVswXV0gPSBYKGcuZGF0YS52YWx1ZSksIEUgPSAhMDsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIkFQUExZIjoKICAgICAgICAgIEUgPSBSLmFwcGx5KEMsIE0pOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiQ09OU1RSVUNUIjoKICAgICAgICAgIHsKICAgICAgICAgICAgY29uc3QgUyA9IG5ldyBSKC4uLk0pOwogICAgICAgICAgICBFID0gUGUoUyk7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJFTkRQT0lOVCI6CiAgICAgICAgICB7CiAgICAgICAgICAgIGNvbnN0IHsgcG9ydDE6IFMsIHBvcnQyOiBqIH0gPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTsKICAgICAgICAgICAgSm4obywgaiksIEUgPSBNZShTLCBbU10pOwogICAgICAgICAgfQogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiUkVMRUFTRSI6CiAgICAgICAgICBFID0gdm9pZCAwOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHJldHVybjsKICAgICAgfQogICAgfSBjYXRjaCAoQykgewogICAgICBFID0geyB2YWx1ZTogQywgW1NuXTogMCB9OwogICAgfQogICAgUHJvbWlzZS5yZXNvbHZlKEUpLmNhdGNoKChDKSA9PiAoeyB2YWx1ZTogQywgW1NuXTogMCB9KSkudGhlbigoQykgPT4gewogICAgICBjb25zdCBbUiwgU10gPSBXbihDKTsKICAgICAgdS5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIFIpLCB7IGlkOiBfIH0pLCBTKSwgdyA9PT0gIlJFTEVBU0UiICYmICh1LnJlbW92ZUV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBtKSwgSXQodSksIFpuIGluIG8gJiYgdHlwZW9mIG9bWm5dID09ICJmdW5jdGlvbiIgJiYgb1tabl0oKSk7CiAgICB9KS5jYXRjaCgoQykgPT4gewogICAgICBjb25zdCBbUiwgU10gPSBXbih7CiAgICAgICAgdmFsdWU6IG5ldyBUeXBlRXJyb3IoIlVuc2VyaWFsaXphYmxlIHJldHVybiB2YWx1ZSIpLAogICAgICAgIFtTbl06IDAKICAgICAgfSk7CiAgICAgIHUucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBSKSwgeyBpZDogXyB9KSwgUyk7CiAgICB9KTsKICB9KSwgdS5zdGFydCAmJiB1LnN0YXJ0KCk7Cn0KZnVuY3Rpb24gQWUobykgewogIHJldHVybiBvLmNvbnN0cnVjdG9yLm5hbWUgPT09ICJNZXNzYWdlUG9ydCI7Cn0KZnVuY3Rpb24gSXQobykgewogIEFlKG8pICYmIG8uY2xvc2UoKTsKfQpmdW5jdGlvbiBfZShvLCB1KSB7CiAgcmV0dXJuICRuKG8sIFtdLCB1KTsKfQpmdW5jdGlvbiBQbihvKSB7CiAgaWYgKG8pCiAgICB0aHJvdyBuZXcgRXJyb3IoIlByb3h5IGhhcyBiZWVuIHJlbGVhc2VkIGFuZCBpcyBub3QgdXNlYWJsZSIpOwp9CmZ1bmN0aW9uIGp0KG8pIHsKICByZXR1cm4gYW4obywgewogICAgdHlwZTogIlJFTEVBU0UiCiAgfSkudGhlbigoKSA9PiB7CiAgICBJdChvKTsKICB9KTsKfQpjb25zdCBibiA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpLCBPbiA9ICJGaW5hbGl6YXRpb25SZWdpc3RyeSIgaW4gZ2xvYmFsVGhpcyAmJiBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoKG8pID0+IHsKICBjb25zdCB1ID0gKGJuLmdldChvKSB8fCAwKSAtIDE7CiAgYm4uc2V0KG8sIHUpLCB1ID09PSAwICYmIGp0KG8pOwp9KTsKZnVuY3Rpb24gQ2UobywgdSkgewogIGNvbnN0IGUgPSAoYm4uZ2V0KHUpIHx8IDApICsgMTsKICBibi5zZXQodSwgZSksIE9uICYmIE9uLnJlZ2lzdGVyKG8sIHUsIG8pOwp9CmZ1bmN0aW9uIEVlKG8pIHsKICBPbiAmJiBPbi51bnJlZ2lzdGVyKG8pOwp9CmZ1bmN0aW9uICRuKG8sIHUgPSBbXSwgZSA9IGZ1bmN0aW9uKCkgewp9KSB7CiAgbGV0IG0gPSAhMTsKICBjb25zdCBnID0gbmV3IFByb3h5KGUsIHsKICAgIGdldChfLCB3KSB7CiAgICAgIGlmIChQbihtKSwgdyA9PT0gbWUpCiAgICAgICAgcmV0dXJuICgpID0+IHsKICAgICAgICAgIEVlKGcpLCBqdChvKSwgbSA9ICEwOwogICAgICAgIH07CiAgICAgIGlmICh3ID09PSAidGhlbiIpIHsKICAgICAgICBpZiAodS5sZW5ndGggPT09IDApCiAgICAgICAgICByZXR1cm4geyB0aGVuOiAoKSA9PiBnIH07CiAgICAgICAgY29uc3QgVCA9IGFuKG8sIHsKICAgICAgICAgIHR5cGU6ICJHRVQiLAogICAgICAgICAgcGF0aDogdS5tYXAoKE0pID0+IE0udG9TdHJpbmcoKSkKICAgICAgICB9KS50aGVuKFgpOwogICAgICAgIHJldHVybiBULnRoZW4uYmluZChUKTsKICAgICAgfQogICAgICByZXR1cm4gJG4obywgWy4uLnUsIHddKTsKICAgIH0sCiAgICBzZXQoXywgdywgVCkgewogICAgICBQbihtKTsKICAgICAgY29uc3QgW00sIEVdID0gV24oVCk7CiAgICAgIHJldHVybiBhbihvLCB7CiAgICAgICAgdHlwZTogIlNFVCIsCiAgICAgICAgcGF0aDogWy4uLnUsIHddLm1hcCgoQykgPT4gQy50b1N0cmluZygpKSwKICAgICAgICB2YWx1ZTogTQogICAgICB9LCBFKS50aGVuKFgpOwogICAgfSwKICAgIGFwcGx5KF8sIHcsIFQpIHsKICAgICAgUG4obSk7CiAgICAgIGNvbnN0IE0gPSB1W3UubGVuZ3RoIC0gMV07CiAgICAgIGlmIChNID09PSB5ZSkKICAgICAgICByZXR1cm4gYW4obywgewogICAgICAgICAgdHlwZTogIkVORFBPSU5UIgogICAgICAgIH0pLnRoZW4oWCk7CiAgICAgIGlmIChNID09PSAiYmluZCIpCiAgICAgICAgcmV0dXJuICRuKG8sIHUuc2xpY2UoMCwgLTEpKTsKICAgICAgY29uc3QgW0UsIENdID0ga3QoVCk7CiAgICAgIHJldHVybiBhbihvLCB7CiAgICAgICAgdHlwZTogIkFQUExZIiwKICAgICAgICBwYXRoOiB1Lm1hcCgoUikgPT4gUi50b1N0cmluZygpKSwKICAgICAgICBhcmd1bWVudExpc3Q6IEUKICAgICAgfSwgQykudGhlbihYKTsKICAgIH0sCiAgICBjb25zdHJ1Y3QoXywgdykgewogICAgICBQbihtKTsKICAgICAgY29uc3QgW1QsIE1dID0ga3Qodyk7CiAgICAgIHJldHVybiBhbihvLCB7CiAgICAgICAgdHlwZTogIkNPTlNUUlVDVCIsCiAgICAgICAgcGF0aDogdS5tYXAoKEUpID0+IEUudG9TdHJpbmcoKSksCiAgICAgICAgYXJndW1lbnRMaXN0OiBUCiAgICAgIH0sIE0pLnRoZW4oWCk7CiAgICB9CiAgfSk7CiAgcmV0dXJuIENlKGcsIG8pLCBnOwp9CmZ1bmN0aW9uIFRlKG8pIHsKICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgbyk7Cn0KZnVuY3Rpb24ga3QobykgewogIGNvbnN0IHUgPSBvLm1hcChXbik7CiAgcmV0dXJuIFt1Lm1hcCgoZSkgPT4gZVswXSksIFRlKHUubWFwKChlKSA9PiBlWzFdKSldOwp9CmNvbnN0IEx0ID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7CmZ1bmN0aW9uIE1lKG8sIHUpIHsKICByZXR1cm4gTHQuc2V0KG8sIHUpLCBvOwp9CmZ1bmN0aW9uIFBlKG8pIHsKICByZXR1cm4gT2JqZWN0LmFzc2lnbihvLCB7IFtSdF06ICEwIH0pOwp9CmZ1bmN0aW9uIFduKG8pIHsKICBmb3IgKGNvbnN0IFt1LCBlXSBvZiB4dCkKICAgIGlmIChlLmNhbkhhbmRsZShvKSkgewogICAgICBjb25zdCBbbSwgZ10gPSBlLnNlcmlhbGl6ZShvKTsKICAgICAgcmV0dXJuIFsKICAgICAgICB7CiAgICAgICAgICB0eXBlOiAiSEFORExFUiIsCiAgICAgICAgICBuYW1lOiB1LAogICAgICAgICAgdmFsdWU6IG0KICAgICAgICB9LAogICAgICAgIGcKICAgICAgXTsKICAgIH0KICByZXR1cm4gWwogICAgewogICAgICB0eXBlOiAiUkFXIiwKICAgICAgdmFsdWU6IG8KICAgIH0sCiAgICBMdC5nZXQobykgfHwgW10KICBdOwp9CmZ1bmN0aW9uIFgobykgewogIHN3aXRjaCAoby50eXBlKSB7CiAgICBjYXNlICJIQU5ETEVSIjoKICAgICAgcmV0dXJuIHh0LmdldChvLm5hbWUpLmRlc2VyaWFsaXplKG8udmFsdWUpOwogICAgY2FzZSAiUkFXIjoKICAgICAgcmV0dXJuIG8udmFsdWU7CiAgfQp9CmZ1bmN0aW9uIGFuKG8sIHUsIGUpIHsKICByZXR1cm4gbmV3IFByb21pc2UoKG0pID0+IHsKICAgIGNvbnN0IGcgPSBTZSgpOwogICAgby5hZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgZnVuY3Rpb24gXyh3KSB7CiAgICAgICF3LmRhdGEgfHwgIXcuZGF0YS5pZCB8fCB3LmRhdGEuaWQgIT09IGcgfHwgKG8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIF8pLCBtKHcuZGF0YSkpOwogICAgfSksIG8uc3RhcnQgJiYgby5zdGFydCgpLCBvLnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oeyBpZDogZyB9LCB1KSwgZSk7CiAgfSk7Cn0KZnVuY3Rpb24gU2UoKSB7CiAgcmV0dXJuIG5ldyBBcnJheSg0KS5maWxsKDApLm1hcCgoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikudG9TdHJpbmcoMTYpKS5qb2luKCItIik7Cn0KZnVuY3Rpb24gYmUoewogIGJvdHRvbVJpZ2h0WDogbywKICBib3R0b21SaWdodFk6IHUsCiAgdG9wTGVmdFg6IGUsCiAgdG9wTGVmdFk6IG0KfSwgZykgewogIGNvbnN0IF8gPSBNYXRoLmFicyhvIC0gZSksIHcgPSBNYXRoLmFicyh1IC0gbSksIFQgPSBNYXRoLm1heChfLCB3KSAqIDAuMzM3NSwgTSA9IGRlKGcud2lkdGgsIGcuaGVpZ2h0KTsKICByZXR1cm4gZmUoVCAvIE0pOwp9CmNsYXNzIE9lIGV4dGVuZHMgcGUgewogIHBhcnNlUmF3RGF0YSh1LCBlKSB7CiAgICBjb25zdCB7IGJyaWdodG5lc3M6IG0sIHNoYXJwbmVzczogZyB9ID0gdS5wYXJhbXMsIHsgYm90dG9tUmlnaHRYOiBfLCBib3R0b21SaWdodFk6IHcsIHRvcExlZnRYOiBULCB0b3BMZWZ0WTogTSB9ID0gdSwgRSA9IGJlKHsgYm90dG9tUmlnaHRYOiBfLCBib3R0b21SaWdodFk6IHcsIHRvcExlZnRYOiBULCB0b3BMZWZ0WTogTSB9LCBlKTsKICAgIHJldHVybiB7CiAgICAgIGNvbmZpZGVuY2U6IHUucHJvYmFiaWxpdHkgLyAxZTMsCiAgICAgIHRvcExlZnQ6IHsKICAgICAgICB4OiBULAogICAgICAgIHk6IE0KICAgICAgfSwKICAgICAgYm90dG9tUmlnaHQ6IHsKICAgICAgICB4OiBfLAogICAgICAgIHk6IHcKICAgICAgfSwKICAgICAgZmFjZUNlbnRlcjogewogICAgICAgIHg6IChUICsgXykgLyAyLAogICAgICAgIHk6IChNICsgdykgLyAyCiAgICAgIH0sCiAgICAgIGZhY2VTaXplOiBFLAogICAgICBicmlnaHRuZXNzOiBtIC8gMWUzLAogICAgICBzaGFycG5lc3M6IGcgLyAxZTMKICAgIH07CiAgfQogIGFzeW5jIGRldGVjdCh1LCBlLCBtKSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IHgoIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIGNvbnN0IGcgPSB0aGlzLmFsbG9jYXRlTWVtb3J5KHUubGVuZ3RoICogdS5CWVRFU19QRVJfRUxFTUVOVCksIF8gPSB0aGlzLmFsbG9jYXRlTWVtb3J5KHUubGVuZ3RoICogdS5CWVRFU19QRVJfRUxFTUVOVCk7CiAgICB0aGlzLndyaXRlRGF0YVRvTWVtb3J5KHUsIGcpLCB0aGlzLnNhbVdhc21Nb2R1bGUuY29udmVydFRvU2FtQ29sb3JJbWFnZSgKICAgICAgZS53aWR0aCwKICAgICAgZS5oZWlnaHQsCiAgICAgIGcsCiAgICAgIGNlLlJHQkEsCiAgICAgIF8KICAgICk7CiAgICBjb25zdCB3ID0gdGhpcy5zYW1XYXNtTW9kdWxlLmRldGVjdEZhY2VXaXRoSW1hZ2VQYXJhbWV0ZXJzKAogICAgICBlLndpZHRoLAogICAgICBlLmhlaWdodCwKICAgICAgXywKICAgICAgMCwKICAgICAgLy8gcGFyYW1XaWR0aCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICAgMAogICAgICAvLyBwYXJhbUhlaWdodCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICk7CiAgICByZXR1cm4gdGhpcy5yZWxlYXNlTWVtb3J5KGcpLCB0aGlzLnJlbGVhc2VNZW1vcnkoXyksIHRoaXMucGFyc2VSYXdEYXRhKHcsIG0pOwogIH0KfQpKbihPZSk7Cg==", va = typeof window < "u" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);" + atob(g0)], { type: "text/javascript;charset=utf-8" });
function Jx(t) {
  let i;
  try {
    if (i = va && (window.URL || window.webkitURL).createObjectURL(va), !i)
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
      "data:application/javascript;base64," + g0,
      {
        type: "module",
        name: t == null ? void 0 : t.name
      }
    );
  }
}
const fo = class fo extends Hx {
  constructor() {
    super(...arguments);
    X(this, "detector");
    X(this, "className", "FaceController");
    X(this, "fallbackInstruction", Le.FACE_NOT_PRESENT);
    X(this, "pitchAngleAccelerationThreshold", null);
    X(this, "validateDetectedObject", (e, n) => {
      const { brightnessHighThreshold: o, brightnessLowThreshold: r, faceConfidence: a, maxFaceSizeRatio: g, minFaceSizeRatio: s, outOfBoundsThreshold: x, sharpnessThreshold: C } = this.getThresholds(), u = e.confidence > a, f = e.faceSize > s, p = e.faceSize < g, v = e.sharpness > C, E = e.brightness > r, G = e.brightness < o, Z = jx(x, e, n), V = Xx(this.pitchAngleAccelerationThreshold, this.acceleration), P = {};
      return P.isPresent = u, P.isNotSmall = f, P.isNotLarge = p, P.isSharp = v, P.isNotDim = E, P.isNotBright = G, P.isNotOutOfBounds = Z, P.isNotPitched = V, P;
    });
    X(this, "getInstructionCode", (e, n) => {
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
    X(this, "getInstructionCodesForValidators", (e) => {
      const n = [];
      return Object.entries(e).forEach(([o, r]) => {
        !r && n.push(qc[o]);
      }), n;
    });
  }
  static async init() {
    const e = new Jx(), n = i0(e), o = new fo(), r = await new n();
    this._instance = o, this._instance.detector = r;
  }
  static async getInstance() {
    return !this._instance && await this.init(), this._instance;
  }
  setThresholds(e) {
    super.setThresholds(e);
    const { devicePitchAngleThreshold: n } = e;
    this.pitchAngleAccelerationThreshold = dI * Math.sin(n * (Math.PI / (865 + -9241 * -1 + -9926 * 1)));
  }
  restart() {
    super.restart(), pa(ze.INSTRUCTION_CHANGED, void (-158 * -44 + 3 * -2593 + 827), kI);
  }
  async processImage(e) {
    var E;
    const n = {};
    n.width = e.width, n.height = e.height;
    const o = n, r = tr(o), a = NI(e, r), g = LI(a), s = {};
    s.width = a.width, s.height = a.height;
    const x = s;
    let C = await this.detector.detect(g, x, o);
    C = fx(o, C);
    const u = this.validateDetectedObject(C, o), f = this.isDetectionValid(u), p = this.getInstructionCode(u, f);
    if (u.isPresent && this.collectImagesForDuplicateDetection(g), this.isInCandidateSelection) {
      if (this.bestImage && f && this.isNewImageBetter(this.bestImage.detection, C)) {
        const G = { image: e, detection: Xt(C) };
        this.bestImage = G, this.candidateSelectionImages.push(G);
      }
    } else if ((E = this.lastImage) != null && E.isValid && f) {
      const G = { image: e, detection: Xt(C) }, Z = {};
      Z.image = this.lastImage.image, Z.detection = this.lastImage.detection;
      const V = Z;
      this.isNewImageBetter(V.detection, G.detection) ? this.bestImage = G : this.bestImage = V, this.candidateSelectionImages.push(V, G), this.isInCandidateSelection = !0;
    } else
      f ? this.lastImage = { instructionCode: p, isValid: !0, image: e, detection: Xt(C) } : this.lastImage = { instructionCode: p, isValid: !1, image: e, detection: Xt(C) };
    const v = { detectedFace: Xt(C), instructionCode: p, invalidValidators: this.getInstructionCodesForValidators(u), isInCandidateSelection: this.isInCandidateSelection };
    return this.detectionRecord.push(v.detectedFace), pa(ze.INSTRUCTION_CHANGED, p), OI(ze.DETECTED_FACE_CHANGED, v.detectedFace, this.getThresholds().faceConfidence), VI(ze.FACE_DETECTION, v.detectedFace, e), v;
  }
};
X(fo, "_instance");
let Oi = fo;
const Mx = (t, i) => {
  const { handleError: e } = Ko(), [n, o] = Fe(), { acceleration: r } = Cx();
  n && n.setAcceleration(r), he(() => {
    (async () => {
      const s = await Oi.getInstance();
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
var mt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, s0 = {}, wa = {}, Ux = Qx;
function Qx(t, i) {
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
var c0 = {};
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
  i.decode = function(a, g, s) {
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
  }, i.test = function(a) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(a);
  };
})(c0);
var zx = Wo;
function Wo() {
  this._listeners = {};
}
Wo.prototype.on = function(t, i, e) {
  return (this._listeners[t] || (this._listeners[t] = [])).push({
    fn: i,
    ctx: e || this
  }), this;
};
Wo.prototype.off = function(t, i) {
  if (t === void 0)
    this._listeners = {};
  else if (i === void 0)
    this._listeners[t] = [];
  else
    for (var e = this._listeners[t], n = 0; n < e.length; )
      e[n].fn === i ? e.splice(n, 1) : ++n;
  return this;
};
Wo.prototype.emit = function(t) {
  var i = this._listeners[t];
  if (i) {
    for (var e = [], n = 1; n < arguments.length; )
      e.push(arguments[n++]);
    for (n = 0; n < i.length; )
      i[n].fn.apply(i[n++].ctx, e);
  }
  return this;
};
var $x = Ba(Ba);
function Ba(t) {
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
    t.writeFloatLE = i.bind(null, Sa), t.writeFloatBE = i.bind(null, Ga);
    function e(n, o, r) {
      var a = n(o, r), g = (a >> 31) * 2 + 1, s = a >>> 23 & 255, x = a & 8388607;
      return s === 255 ? x ? NaN : g * (1 / 0) : s === 0 ? g * 1401298464324817e-60 * x : g * Math.pow(2, s - 150) * (x + 8388608);
    }
    t.readFloatLE = e.bind(null, Za), t.readFloatBE = e.bind(null, ka);
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
    t.writeDoubleLE = i.bind(null, Sa, 0, 4), t.writeDoubleBE = i.bind(null, Ga, 4, 0);
    function e(n, o, r, a, g) {
      var s = n(a, g + o), x = n(a, g + r), C = (x >> 31) * 2 + 1, u = x >>> 20 & 2047, f = 4294967296 * (x & 1048575) + s;
      return u === 2047 ? f ? NaN : C * (1 / 0) : u === 0 ? C * 5e-324 * f : C * Math.pow(2, u - 1075) * (f + 4503599627370496);
    }
    t.readDoubleLE = e.bind(null, Za, 0, 4), t.readDoubleBE = e.bind(null, ka, 4, 0);
  }(), t;
}
function Sa(t, i, e) {
  i[e] = t & 255, i[e + 1] = t >>> 8 & 255, i[e + 2] = t >>> 16 & 255, i[e + 3] = t >>> 24;
}
function Ga(t, i, e) {
  i[e] = t >>> 24, i[e + 1] = t >>> 16 & 255, i[e + 2] = t >>> 8 & 255, i[e + 3] = t & 255;
}
function Za(t, i) {
  return (t[i] | t[i + 1] << 8 | t[i + 2] << 16 | t[i + 3] << 24) >>> 0;
}
function ka(t, i) {
  return (t[i] << 24 | t[i + 1] << 16 | t[i + 2] << 8 | t[i + 3]) >>> 0;
}
function Ka(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var qx = _x;
function _x(t) {
  try {
    if (typeof Ka != "function")
      return null;
    var i = Ka(t);
    return i && (i.length || Object.keys(i).length) ? i : null;
  } catch {
    return null;
  }
}
var I0 = {};
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
})(I0);
var el = tl;
function tl(t, i, e) {
  var n = e || 8192, o = n >>> 1, r = null, a = n;
  return function(g) {
    if (g < 1 || g > o)
      return t(g);
    a + g > n && (r = t(n), a = 0);
    var s = i.call(r, a, a += g);
    return a & 7 && (a = (a | 7) + 1), s;
  };
}
var ri, Ha;
function nl() {
  if (Ha)
    return ri;
  Ha = 1, ri = i;
  var t = Wt();
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
  }, ri;
}
var Wa;
function Wt() {
  return Wa || (Wa = 1, function(t) {
    var i = t;
    i.asPromise = Ux, i.base64 = c0, i.EventEmitter = zx, i.float = $x, i.inquire = qx, i.utf8 = I0, i.pool = el, i.LongBits = nl(), i.isNode = !!(typeof mt < "u" && mt && mt.process && mt.process.versions && mt.process.versions.node), i.global = i.isNode && mt || typeof window < "u" && window || typeof self < "u" && self || mt, i.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  }(wa)), wa;
}
var x0 = D, Ve = Wt(), Vi, Oo = Ve.LongBits, Oa = Ve.base64, Va = Ve.utf8;
function kn(t, i, e) {
  this.fn = t, this.len = i, this.next = void 0, this.val = e;
}
function nr() {
}
function ol(t) {
  this.head = t.head, this.tail = t.tail, this.len = t.len, this.next = t.states;
}
function D() {
  this.len = 0, this.head = new kn(nr, 0, 0), this.tail = this.head, this.states = null;
}
var l0 = function() {
  return Ve.Buffer ? function() {
    return (D.create = function() {
      return new Vi();
    })();
  } : function() {
    return new D();
  };
};
D.create = l0();
D.alloc = function(t) {
  return new Ve.Array(t);
};
Ve.Array !== Array && (D.alloc = Ve.pool(D.alloc, Ve.Array.prototype.subarray));
D.prototype._push = function(t, i, e) {
  return this.tail = this.tail.next = new kn(t, i, e), this.len += i, this;
};
function or(t, i, e) {
  i[e] = t & 255;
}
function il(t, i, e) {
  for (; t > 127; )
    i[e++] = t & 127 | 128, t >>>= 7;
  i[e] = t;
}
function ir(t, i) {
  this.len = t, this.next = void 0, this.val = i;
}
ir.prototype = Object.create(kn.prototype);
ir.prototype.fn = il;
D.prototype.uint32 = function(t) {
  return this.len += (this.tail = this.tail.next = new ir(
    (t = t >>> 0) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : 5,
    t
  )).len, this;
};
D.prototype.int32 = function(t) {
  return t < 0 ? this._push(rr, 10, Oo.fromNumber(t)) : this.uint32(t);
};
D.prototype.sint32 = function(t) {
  return this.uint32((t << 1 ^ t >> 31) >>> 0);
};
function rr(t, i, e) {
  for (; t.hi; )
    i[e++] = t.lo & 127 | 128, t.lo = (t.lo >>> 7 | t.hi << 25) >>> 0, t.hi >>>= 7;
  for (; t.lo > 127; )
    i[e++] = t.lo & 127 | 128, t.lo = t.lo >>> 7;
  i[e++] = t.lo;
}
D.prototype.uint64 = function(t) {
  var i = Oo.from(t);
  return this._push(rr, i.length(), i);
};
D.prototype.int64 = D.prototype.uint64;
D.prototype.sint64 = function(t) {
  var i = Oo.from(t).zzEncode();
  return this._push(rr, i.length(), i);
};
D.prototype.bool = function(t) {
  return this._push(or, 1, t ? 1 : 0);
};
function Ri(t, i, e) {
  i[e] = t & 255, i[e + 1] = t >>> 8 & 255, i[e + 2] = t >>> 16 & 255, i[e + 3] = t >>> 24;
}
D.prototype.fixed32 = function(t) {
  return this._push(Ri, 4, t >>> 0);
};
D.prototype.sfixed32 = D.prototype.fixed32;
D.prototype.fixed64 = function(t) {
  var i = Oo.from(t);
  return this._push(Ri, 4, i.lo)._push(Ri, 4, i.hi);
};
D.prototype.sfixed64 = D.prototype.fixed64;
D.prototype.float = function(t) {
  return this._push(Ve.float.writeFloatLE, 4, t);
};
D.prototype.double = function(t) {
  return this._push(Ve.float.writeDoubleLE, 8, t);
};
var rl = Ve.Array.prototype.set ? function(t, i, e) {
  i.set(t, e);
} : function(t, i, e) {
  for (var n = 0; n < t.length; ++n)
    i[e + n] = t[n];
};
D.prototype.bytes = function(t) {
  var i = t.length >>> 0;
  if (!i)
    return this._push(or, 1, 0);
  if (Ve.isString(t)) {
    var e = D.alloc(i = Oa.length(t));
    Oa.decode(t, e, 0), t = e;
  }
  return this.uint32(i)._push(rl, i, t);
};
D.prototype.string = function(t) {
  var i = Va.length(t);
  return i ? this.uint32(i)._push(Va.write, i, t) : this._push(or, 1, 0);
};
D.prototype.fork = function() {
  return this.states = new ol(this), this.head = this.tail = new kn(nr, 0, 0), this.len = 0, this;
};
D.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new kn(nr, 0, 0), this.len = 0), this;
};
D.prototype.ldelim = function() {
  var t = this.head, i = this.tail, e = this.len;
  return this.reset().uint32(e), e && (this.tail.next = t.next, this.tail = i, this.len += e), this;
};
D.prototype.finish = function() {
  for (var t = this.head.next, i = this.constructor.alloc(this.len), e = 0; t; )
    t.fn(t.val, i, e), e += t.len, t = t.next;
  return i;
};
D._configure = function(t) {
  Vi = t, D.create = l0(), Vi._configure();
};
var al = qe, u0 = x0;
(qe.prototype = Object.create(u0.prototype)).constructor = qe;
var ut = Wt();
function qe() {
  u0.call(this);
}
qe._configure = function() {
  qe.alloc = ut._Buffer_allocUnsafe, qe.writeBytesBuffer = ut.Buffer && ut.Buffer.prototype instanceof Uint8Array && ut.Buffer.prototype.set.name === "set" ? function(t, i, e) {
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
  ut.isString(t) && (t = ut._Buffer_from(t, "base64"));
  var i = t.length >>> 0;
  return this.uint32(i), i && this._push(qe.writeBytesBuffer, i, t), this;
};
function gl(t, i, e) {
  t.length < 40 ? ut.utf8.write(t, i, e) : i.utf8Write ? i.utf8Write(t, e) : i.write(t, e);
}
qe.prototype.string = function(t) {
  var i = ut.Buffer.byteLength(t);
  return this.uint32(i), i && this._push(gl, i, t), this;
};
qe._configure();
var C0 = re, _e = Wt(), Pi, d0 = _e.LongBits, sl = _e.utf8;
function Xe(t, i) {
  return RangeError("index out of range: " + t.pos + " + " + (i || 1) + " > " + t.len);
}
function re(t) {
  this.buf = t, this.pos = 0, this.len = t.length;
}
var Ra = typeof Uint8Array < "u" ? function(t) {
  if (t instanceof Uint8Array || Array.isArray(t))
    return new re(t);
  throw Error("illegal buffer");
} : function(t) {
  if (Array.isArray(t))
    return new re(t);
  throw Error("illegal buffer");
}, A0 = function() {
  return _e.Buffer ? function(t) {
    return (re.create = function(i) {
      return _e.Buffer.isBuffer(i) ? new Pi(i) : Ra(i);
    })(t);
  } : Ra;
};
re.create = A0();
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
function ai() {
  var t = new d0(0, 0), i = 0;
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
function po(t, i) {
  return (t[i - 4] | t[i - 3] << 8 | t[i - 2] << 16 | t[i - 1] << 24) >>> 0;
}
re.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw Xe(this, 4);
  return po(this.buf, this.pos += 4);
};
re.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw Xe(this, 4);
  return po(this.buf, this.pos += 4) | 0;
};
function Pa() {
  if (this.pos + 8 > this.len)
    throw Xe(this, 8);
  return new d0(po(this.buf, this.pos += 4), po(this.buf, this.pos += 4));
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
  return sl.read(t, 0, t.length);
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
  Pi = t, re.create = A0(), Pi._configure();
  var i = _e.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  _e.merge(re.prototype, {
    int64: function() {
      return ai.call(this)[i](!1);
    },
    uint64: function() {
      return ai.call(this)[i](!0);
    },
    sint64: function() {
      return ai.call(this).zzDecode()[i](!1);
    },
    fixed64: function() {
      return Pa.call(this)[i](!0);
    },
    sfixed64: function() {
      return Pa.call(this)[i](!1);
    }
  });
};
var cl = Kt, p0 = C0;
(Kt.prototype = Object.create(p0.prototype)).constructor = Kt;
var Ea = Wt();
function Kt(t) {
  p0.call(this, t);
}
Kt._configure = function() {
  Ea.Buffer && (Kt.prototype._slice = Ea.Buffer.prototype.slice);
};
Kt.prototype.string = function() {
  var t = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + t, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + t, this.len));
};
Kt._configure();
var h0 = {}, Il = Bn, ar = Wt();
(Bn.prototype = Object.create(ar.EventEmitter.prototype)).constructor = Bn;
function Bn(t, i, e) {
  if (typeof t != "function")
    throw TypeError("rpcImpl must be a function");
  ar.EventEmitter.call(this), this.rpcImpl = t, this.requestDelimited = !!i, this.responseDelimited = !!e;
}
Bn.prototype.rpcCall = function t(i, e, n, o, r) {
  if (!o)
    throw TypeError("request must be specified");
  var a = this;
  if (!r)
    return ar.asPromise(t, a, i, e, n, o);
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
Bn.prototype.end = function(t) {
  return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(t) {
  var i = t;
  i.Service = Il;
})(h0);
var xl = {};
(function(t) {
  var i = t;
  i.build = "minimal", i.Writer = x0, i.BufferWriter = al, i.Reader = C0, i.BufferReader = cl, i.util = Wt(), i.rpc = h0, i.roots = xl, i.configure = e;
  function e() {
    i.util._configure(), i.Writer._configure(i.BufferWriter), i.Reader._configure(i.BufferReader);
  }
  e();
})(s0);
var oe = s0;
const w = oe.Reader, le = oe.Writer, h = oe.util, d = oe.roots.default || (oe.roots.default = {}), nn = d.dot = (() => {
  const t = {};
  return t.Content = function() {
    function i(e) {
      if (e)
        for (let n = Object.keys(e), o = 0; o < n.length; ++o)
          e[n[o]] != null && (this[n[o]] = e[n[o]]);
    }
    return i.prototype.token = h.newBuffer([]), i.prototype.iv = h.newBuffer([]), i.prototype.schemaVersion = 0, i.prototype.bytes = h.newBuffer([]), i.create = function(e) {
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
      return typeof e != "object" || e === null ? "object expected" : e.token != null && e.hasOwnProperty("token") && !(e.token && typeof e.token.length == "number" || h.isString(e.token)) ? "token: buffer expected" : e.iv != null && e.hasOwnProperty("iv") && !(e.iv && typeof e.iv.length == "number" || h.isString(e.iv)) ? "iv: buffer expected" : e.schemaVersion != null && e.hasOwnProperty("schemaVersion") && !h.isInteger(e.schemaVersion) ? "schemaVersion: integer expected" : e.bytes != null && e.hasOwnProperty("bytes") && !(e.bytes && typeof e.bytes.length == "number" || h.isString(e.bytes)) ? "bytes: buffer expected" : null;
    }, i.fromObject = function(e) {
      if (e instanceof d.dot.Content)
        return e;
      let n = new d.dot.Content();
      return e.token != null && (typeof e.token == "string" ? h.base64.decode(e.token, n.token = h.newBuffer(h.base64.length(e.token)), 0) : e.token.length >= 0 && (n.token = e.token)), e.iv != null && (typeof e.iv == "string" ? h.base64.decode(e.iv, n.iv = h.newBuffer(h.base64.length(e.iv)), 0) : e.iv.length >= 0 && (n.iv = e.iv)), e.schemaVersion != null && (n.schemaVersion = e.schemaVersion | 0), e.bytes != null && (typeof e.bytes == "string" ? h.base64.decode(e.bytes, n.bytes = h.newBuffer(h.base64.length(e.bytes)), 0) : e.bytes.length >= 0 && (n.bytes = e.bytes)), n;
    }, i.toObject = function(e, n) {
      n || (n = {});
      let o = {};
      return n.defaults && (n.bytes === String ? o.token = "" : (o.token = [], n.bytes !== Array && (o.token = h.newBuffer(o.token))), n.bytes === String ? o.iv = "" : (o.iv = [], n.bytes !== Array && (o.iv = h.newBuffer(o.iv))), o.schemaVersion = 0, n.bytes === String ? o.bytes = "" : (o.bytes = [], n.bytes !== Array && (o.bytes = h.newBuffer(o.bytes)))), e.token != null && e.hasOwnProperty("token") && (o.token = n.bytes === String ? h.base64.encode(e.token, 0, e.token.length) : n.bytes === Array ? Array.prototype.slice.call(e.token) : e.token), e.iv != null && e.hasOwnProperty("iv") && (o.iv = n.bytes === String ? h.base64.encode(e.iv, 0, e.iv.length) : n.bytes === Array ? Array.prototype.slice.call(e.iv) : e.iv), e.schemaVersion != null && e.hasOwnProperty("schemaVersion") && (o.schemaVersion = e.schemaVersion), e.bytes != null && e.hasOwnProperty("bytes") && (o.bytes = n.bytes === String ? h.base64.encode(e.bytes, 0, e.bytes.length) : n.bytes === Array ? Array.prototype.slice.call(e.bytes) : e.bytes), o;
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
      return e.prototype.images = h.emptyArray, e.prototype.metadata = null, e.create = function(n) {
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
        get: h.oneOfGetter(n = ["sessionToken"]),
        set: h.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "metadata", {
        get: h.oneOfGetter(n = ["web", "android", "ios"]),
        set: h.oneOfSetter(n)
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
        if (o.sessionToken != null && o.hasOwnProperty("sessionToken") && (r._sessionToken = 1, !h.isString(o.sessionToken)))
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
      e.prototype.supportedAbis = h.emptyArray, e.prototype.device = null, e.prototype.digests = h.emptyArray, e.prototype.dynamicCameraFrameProperties = h.emptyObject;
      let n;
      return Object.defineProperty(e.prototype, "_device", {
        get: h.oneOfGetter(n = ["device"]),
        set: h.oneOfSetter(n)
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
              g.dynamicCameraFrameProperties === h.emptyObject && (g.dynamicCameraFrameProperties = {});
              let u = o.uint32() + o.pos;
              for (s = "", x = null; o.pos < u; ) {
                let f = o.uint32();
                switch (f >>> 3) {
                  case 1:
                    s = o.string();
                    break;
                  case 2:
                    x = d.dot.Int32List.decode(o, o.uint32());
                    break;
                  default:
                    o.skipType(f & 7);
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
            if (!h.isString(o.supportedAbis[r]))
              return "supportedAbis: string[] expected";
        }
        if (o.device != null && o.hasOwnProperty("device") && !h.isString(o.device))
          return "device: string expected";
        if (o.digests != null && o.hasOwnProperty("digests")) {
          if (!Array.isArray(o.digests))
            return "digests: array expected";
          for (let r = 0; r < o.digests.length; ++r)
            if (!(o.digests[r] && typeof o.digests[r].length == "number" || h.isString(o.digests[r])))
              return "digests: buffer[] expected";
        }
        if (o.dynamicCameraFrameProperties != null && o.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!h.isObject(o.dynamicCameraFrameProperties))
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
            typeof o.digests[a] == "string" ? h.base64.decode(o.digests[a], r.digests[a] = h.newBuffer(h.base64.length(o.digests[a])), 0) : o.digests[a].length >= 0 && (r.digests[a] = o.digests[a]);
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
            a.digests[s] = r.bytes === String ? h.base64.encode(o.digests[s], 0, o.digests[s].length) : r.bytes === Array ? Array.prototype.slice.call(o.digests[s]) : o.digests[s];
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
      return e.prototype.device = h.newBuffer([]), e.prototype.architecture = !1, e.prototype.digests = h.emptyArray, e.prototype.isoValues = h.emptyArray, e.create = function(n) {
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
        if (n.device != null && n.hasOwnProperty("device") && !(n.device && typeof n.device.length == "number" || h.isString(n.device)))
          return "device: buffer expected";
        if (n.architecture != null && n.hasOwnProperty("architecture") && typeof n.architecture != "boolean")
          return "architecture: boolean expected";
        if (n.digests != null && n.hasOwnProperty("digests")) {
          if (!Array.isArray(n.digests))
            return "digests: array expected";
          for (let o = 0; o < n.digests.length; ++o)
            if (!(n.digests[o] && typeof n.digests[o].length == "number" || h.isString(n.digests[o])))
              return "digests: buffer[] expected";
        }
        if (n.isoValues != null && n.hasOwnProperty("isoValues")) {
          if (!Array.isArray(n.isoValues))
            return "isoValues: array expected";
          for (let o = 0; o < n.isoValues.length; ++o)
            if (!h.isInteger(n.isoValues[o]))
              return "isoValues: integer[] expected";
        }
        return null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.IosMetadata)
          return n;
        let o = new d.dot.v3.IosMetadata();
        if (n.device != null && (typeof n.device == "string" ? h.base64.decode(n.device, o.device = h.newBuffer(h.base64.length(n.device)), 0) : n.device.length >= 0 && (o.device = n.device)), n.architecture != null && (o.architecture = !!n.architecture), n.digests) {
          if (!Array.isArray(n.digests))
            throw TypeError(".dot.v3.IosMetadata.digests: array expected");
          o.digests = [];
          for (let r = 0; r < n.digests.length; ++r)
            typeof n.digests[r] == "string" ? h.base64.decode(n.digests[r], o.digests[r] = h.newBuffer(h.base64.length(n.digests[r])), 0) : n.digests[r].length >= 0 && (o.digests[r] = n.digests[r]);
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
        if ((o.arrays || o.defaults) && (r.digests = [], r.isoValues = []), o.defaults && (o.bytes === String ? r.device = "" : (r.device = [], o.bytes !== Array && (r.device = h.newBuffer(r.device))), r.architecture = !1), n.device != null && n.hasOwnProperty("device") && (r.device = o.bytes === String ? h.base64.encode(n.device, 0, n.device.length) : o.bytes === Array ? Array.prototype.slice.call(n.device) : n.device), n.architecture != null && n.hasOwnProperty("architecture") && (r.architecture = n.architecture), n.digests && n.digests.length) {
          r.digests = [];
          for (let a = 0; a < n.digests.length; ++a)
            r.digests[a] = o.bytes === String ? h.base64.encode(n.digests[a], 0, n.digests[a].length) : o.bytes === Array ? Array.prototype.slice.call(n.digests[a]) : n.digests[a];
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
      return e.prototype.currentCameraProperties = null, e.prototype.availableCameraProperties = h.emptyArray, e.prototype.hashedDetectedImages = h.emptyArray, e.prototype.detectionRecord = h.emptyArray, e.create = function(n) {
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
            if (!h.isString(n.hashedDetectedImages[o]))
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
        return typeof o != "object" || o === null ? "object expected" : o.aspectRatio != null && o.hasOwnProperty("aspectRatio") && typeof o.aspectRatio != "number" ? "aspectRatio: number expected" : o.autoGainControl != null && o.hasOwnProperty("autoGainControl") && typeof o.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : o.channelCount != null && o.hasOwnProperty("channelCount") && !h.isInteger(o.channelCount) ? "channelCount: integer expected" : o.deviceId != null && o.hasOwnProperty("deviceId") && !h.isString(o.deviceId) ? "deviceId: string expected" : o.displaySurface != null && o.hasOwnProperty("displaySurface") && !h.isString(o.displaySurface) ? "displaySurface: string expected" : o.echoCancellation != null && o.hasOwnProperty("echoCancellation") && typeof o.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : o.facingMode != null && o.hasOwnProperty("facingMode") && !h.isString(o.facingMode) ? "facingMode: string expected" : o.frameRate != null && o.hasOwnProperty("frameRate") && typeof o.frameRate != "number" ? "frameRate: number expected" : o.groupId != null && o.hasOwnProperty("groupId") && !h.isString(o.groupId) ? "groupId: string expected" : o.height != null && o.hasOwnProperty("height") && !h.isInteger(o.height) ? "height: integer expected" : o.noiseSuppression != null && o.hasOwnProperty("noiseSuppression") && typeof o.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : o.sampleRate != null && o.hasOwnProperty("sampleRate") && !h.isInteger(o.sampleRate) ? "sampleRate: integer expected" : o.sampleSize != null && o.hasOwnProperty("sampleSize") && !h.isInteger(o.sampleSize) ? "sampleSize: integer expected" : o.width != null && o.hasOwnProperty("width") && !h.isInteger(o.width) ? "width: integer expected" : o.deviceName != null && o.hasOwnProperty("deviceName") && !h.isString(o.deviceName) ? "deviceName: string expected" : null;
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
        return typeof n != "object" || n === null ? "object expected" : n.width != null && n.hasOwnProperty("width") && !h.isInteger(n.width) ? "width: integer expected" : n.height != null && n.hasOwnProperty("height") && !h.isInteger(n.height) ? "height: integer expected" : null;
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
        get: h.oneOfGetter(n = ["cameraInitFrameResolution"]),
        set: h.oneOfSetter(n)
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
        get: h.oneOfGetter(n = ["documentContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent"]),
        set: h.oneOfSetter(n)
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
    return i.prototype.bytes = h.newBuffer([]), i.create = function(e) {
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
      return typeof e != "object" || e === null ? "object expected" : e.bytes != null && e.hasOwnProperty("bytes") && !(e.bytes && typeof e.bytes.length == "number" || h.isString(e.bytes)) ? "bytes: buffer expected" : null;
    }, i.fromObject = function(e) {
      if (e instanceof d.dot.Image)
        return e;
      let n = new d.dot.Image();
      return e.bytes != null && (typeof e.bytes == "string" ? h.base64.decode(e.bytes, n.bytes = h.newBuffer(h.base64.length(e.bytes)), 0) : e.bytes.length >= 0 && (n.bytes = e.bytes)), n;
    }, i.toObject = function(e, n) {
      n || (n = {});
      let o = {};
      return n.defaults && (n.bytes === String ? o.bytes = "" : (o.bytes = [], n.bytes !== Array && (o.bytes = h.newBuffer(o.bytes)))), e.bytes != null && e.hasOwnProperty("bytes") && (o.bytes = n.bytes === String ? h.base64.encode(e.bytes, 0, e.bytes.length) : n.bytes === Array ? Array.prototype.slice.call(e.bytes) : e.bytes), o;
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
    return i.prototype.items = h.emptyArray, i.create = function(e) {
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
          if (!h.isInteger(e.items[n]))
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
async function ll(t) {
  const { Image: i } = nn, e = await t.arrayBuffer(), n = new Uint8Array(e), o = {};
  o.bytes = n;
  const r = i.verify(o);
  if (r)
    throw Error(r);
  const a = {};
  return a.bytes = n, i.create(a);
}
async function ul(t) {
  const { v3: { Metadata: i } } = nn, e = { ...t };
  e.platform = nn.Platform.WEB;
  const n = e, o = i.verify(n);
  if (o)
    throw Error(o);
  return i.create(n);
}
async function Cl(t) {
  const { Content: i } = nn, { iv: e, key: n, message: o } = await kx(t), r = { token: new Uint8Array(n), iv: e, schemaVersion: hI, bytes: new Uint8Array(o) }, a = i.verify(r);
  if (a)
    throw Error(a);
  const g = i.create(r);
  return i.encode(g).finish();
}
function dl({ documentContent: t, faceContent: i, magnifeyeLivenessContent: e, smileLivenessContent: n }) {
  const { Blob: o } = nn.v3, r = {};
  r.documentContent = t, r.faceContent = i, r.magnifeyeLivenessContent = e, r.smileLivenessContent = n;
  const a = r, g = o.verify(a);
  if (g)
    throw Error(g);
  const s = o.create(a);
  return o.encode(s).finish();
}
async function Al(t, i) {
  const { FaceContent: e } = nn.v3, n = await ll(t), o = await ul(i), r = {};
  r.image = n, r.metadata = o;
  const a = r, g = e.verify(a);
  if (g)
    throw Error(g);
  const s = e.create(a), x = {};
  return x.faceContent = s, dl(x);
}
async function pl(t, i) {
  const e = await Al(t, i);
  return Cl(e);
}
const hl = ({
  onPhotoTakenInternal: t
}) => {
  const {
    analytics: i,
    appState: e,
    handleAppStateChange: n,
    handleError: o
  } = Ko(), {
    faceCameraOptions: r
  } = Vg(), {
    cameraFacing: a,
    onPhotoTaken: g,
    sessionToken: s,
    thresholds: x,
    wasmDirectoryPath: C
  } = r, u = Ht(), f = zg(void 0), {
    cameraHandler: p,
    cameraResolution: v,
    onCameraResolutionChange: E
  } = sx(u, a), {
    controller: G
  } = Mx(x, C), {
    shouldMirror: Z
  } = ax(ze.CONTROL, p);
  return TI(ze.CAMERA_PROPS_CHANGED, {
    cameraResolution: v,
    shouldMirror: Z
  }), cx(i), he(() => () => {
    wn.getInstance().restart();
  }, []), he(() => {
    p != null && p.videoTrack && (G != null && G.isDetectorInitialized) && n(We.RUNNING);
  }, [p == null ? void 0 : p.videoTrack, G == null ? void 0 : G.isDetectorInitialized, n]), he(() => {
    if (e !== We.RUNNING)
      return;
    if (!p || !G)
      throw new ne("Cannot start detection");
    let V = 0, P = !1, Q = 0;
    const T = new $i(30);
    G.clearImagesForDuplicateDetection();
    const j = async ($, z, ee) => {
      const fe = {
        width: $.width,
        height: $.height
      }, te = await YI($), me = {
        ...await p.getCameraProperties(),
        detectionRecord: ee,
        hashedDetectedImages: G.getImagesForDuplicateDetection()
      }, Ce = await pl(te, {
        sessionToken: s,
        web: me
      }), ve = {
        detection: z,
        imageResolution: fe
      };
      FI(Eg.FACE, G.getCandidateSelectionImages()), t && t({
        cameraProperties: me || {}
      }), g({
        image: te,
        data: ve
      }, Ce);
    };
    return (async () => {
      const $ = Date.now();
      for (; p.checkIfStreamIsRunning() && !P; ) {
        if (nx(V, Q)) {
          const {
            detection: ve,
            image: Pe
          } = G.getBestImage() || {}, we = G.getDetectionRecord();
          if (Pe && ve) {
            const Je = Date.now(), Ee = Yg(T);
            i.trackCaptureProcess({
              faceDetection: ve,
              imageResolution: {
                width: Pe.width,
                height: Pe.height
              },
              deviceName: await p.getDeviceName(),
              averageFps: Ee,
              captureProcessDurationInMs: Je - $,
              facingMode: p.getCameraSettings().facingMode,
              instructionSet: await G.getInstructionSet()
            }), n(We.WAITING), await j(Pe, ve, we), G.restart();
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
          te = await G.processImage(ee);
        } catch (ve) {
          ve instanceof Error && o(ne.fromCameraError(ve));
          return;
        }
        const me = Date.now() - z, ae = Zn(1e3 / me);
        T.pushFixed(ae);
        const Ce = {
          face: te.detectedFace,
          detectionTime: me,
          fps: ae,
          resolution: fe,
          instructionCode: te.instructionCode,
          invalidValidators: te.invalidValidators,
          samVersion: G.samVersion
        };
        f.value = Ce, te.isInCandidateSelection && (V === 0 && (V = performance.now()), Q++), E(fe), await Si(Math.max(Aa.max - me, Aa.min));
      }
    })(), () => {
      P = !0;
    };
  }, [e, p, G, r, n, o, g, x.faceConfidence, E, t, s, f, i]), xe(De, {
    children: [xe(Qc, {
      ref: u,
      $isImageMirror: Z,
      autoPlay: !0,
      muted: !0,
      playsInline: !0
    }), v && e === We.RUNNING && xe(yx, {
      cameraResolution: v,
      detectionDetails: f,
      isImageMirror: Z
    })]
  });
}, fl = ({
  onPhotoTakenInternal: t,
  ...i
}) => xe(BI, {
  cameraOptions: i,
  children: xe(hl, {
    onPhotoTakenInternal: t
  })
});
var f0 = ((t) => (t.AUTO_CAPTURE = "auto-capture", t))(f0 || {});
class ml {
  constructor() {
    X(this, "appKey", "");
    X(this, "deviceId", "");
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
    const g = jn(a);
    await fetch("" + r + g + "&" + i, o);
  }
  async init(i, e) {
    if (!e)
      return;
    this.appKey = e, this.deviceId = i;
    const n = { _app_version: Fg() }, o = { organization: Tg(window.location.href) }, r = jn({ begin_session: "1", metrics: JSON.stringify(n), user_details: JSON.stringify(o) });
    await this.countlyFetch(r);
  }
  async endSession() {
    const i = {};
    i.end_session = "1";
    const e = jn(i);
    await this.countlyFetch(e);
  }
  async sendAutoCaptureEvent(i, e) {
    const n = {};
    n.key = f0.AUTO_CAPTURE, n.count = 1, n.dur = e, n.segmentation = i;
    const o = [n], r = jn({ events: JSON.stringify(o) });
    await this.countlyFetch(r);
  }
}
const gi = new ml();
function bl() {
  const [t] = window.crypto.getRandomValues(new Uint32Array(1));
  return t.toString(16);
}
function yl() {
  const t = sessionStorage.getItem("dot-user-id");
  if (t)
    return t;
  const i = bl();
  return sessionStorage.setItem("dot-user-id", i), i;
}
function vl(t, i) {
  return i ? i === "user" ? "Front Camera" : "Back Camera" : t;
}
function wl(t) {
  return t > -6432 * 1 + 899 + -329 * -17 ? ">1m" : t > -1 * -7945 + 831 * -1 + -7069 * 1 ? ">45" : t > 457 * -21 + 2752 + -275 * -25 ? ">30" : "" + t;
}
const Bl = (t) => Math.round(t / 500) * 500 / (-9168 + 62 * 164), Ya = (t) => t ? t <= -6384 + 5113 * 1 + 53 * 24 ? Math.round(t * (-194 * -5 + 115 * 77 + 265 * -37)) / (-2695 + 5 * 543) : Math.round(t / 50) * (4891 + 8 * 542 + -9177) : 3214 * -1 + 2713 * -3 + 11353 * 1, Sl = (t) => Math.round(t * (118 * -10 + -4269 + 3 * 1817)) / (-52 * -171 + 5926 * 1 + -2 * 7408);
class Gl {
  constructor() {
    X(this, "countly", gi);
  }
  createSegmentation(i) {
    return { appVersion: Fg(), ...i };
  }
  init(i) {
    if (tx())
      return;
    const e = yl();
    gi.init(e, i);
  }
  endSession() {
    gi.endSession();
  }
}
class Zl extends Gl {
  trackCaptureProcess({ averageFps: i, captureProcessDurationInMs: e, deviceName: n, faceDetection: o, facingMode: r, imageResolution: a, instructionSet: g }) {
    if (!o)
      return;
    const s = Bl(e), x = this.createSegmentation({ faceSize: Ya(o.faceSize), confidence: Ya(o.confidence), camera: vl(n, r), imageResolution: a.width + "x" + a.height, averageFps: Sl(i), captureTime: wl(s), instructionSet: g });
    this.countly.sendAutoCaptureEvent(x, s);
  }
}
const m0 = new Zl();
function kl(t) {
  const [i, e] = Fe(We.LOADING), [n, o] = Fe(!1), [r, a] = Fe(), g = so((x) => {
    ha(ze.STATE_CHANGED, {
      appState: We.ERROR,
      error: x
    }), o(!1), t(x), a(x), e(We.ERROR);
  }, [t]), s = so((x) => {
    ha(ze.STATE_CHANGED, {
      appState: x
    }), e(x);
  }, []);
  return {
    appState: i,
    isCameraReady: n,
    setIsCameraReady: o,
    handleAppStateChange: s,
    handleError: g,
    error: r,
    analytics: m0
  };
}
const Kl = ({
  children: t
}) => {
  const i = Ht(null);
  return Ix(i, ze.VIDEO_ELEMENT_SIZE), xe(Uc, {
    ref: i,
    children: t
  });
}, Hl = ({
  cameraOptions: t
}) => (he(() => {
  m0.init("5f83e83ee4cee1ab6e5bbf86e215644473299675");
}, []), t ? xe(Fc, {
  target: t.styleTarget,
  children: xe(tI, {
    value: kl(t.onError),
    children: xe(Kg, {
      children: xe(Kl, {
        children: xe(fl, {
          ...t
        })
      })
    })
  })
}) : null);
U0(Hl, "x-dot-face-auto-capture", ["cameraOptions"]);
