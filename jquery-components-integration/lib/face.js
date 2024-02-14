var Ys = Object.defineProperty;
var Ns = (t, o, e) => o in t ? Ys(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e;
var Q = (t, o, e) => (Ns(t, typeof o != "symbol" ? o + "" : o, e), e);
var Kn, G, Xa, ja, vt, Lr, Ma, uo, Ja, Gn = {}, Ua = [], Ls = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Bi = Array.isArray;
function rt(t, o) {
  for (var e in o)
    t[e] = o[e];
  return t;
}
function Qa(t) {
  var o = t.parentNode;
  o && o.removeChild(t);
}
function me(t, o, e) {
  var n, i, r, a = {};
  for (r in o)
    r == "key" ? n = o[r] : r == "ref" ? i = o[r] : a[r] = o[r];
  if (arguments.length > 79 * 114 + 4 * -2197 + 216 * -1 && (a.children = arguments.length > -73 * -113 + 6422 + -14668 ? Kn.call(arguments, 15 * 44 + -8385 * 1 + 7727) : e), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      void (-3593 + -69 * -10 + -1 * -2903) === a[r] && (a[r] = t.defaultProps[r]);
  return yn(t, a, n, i, null);
}
function yn(t, o, e, n, i) {
  var r = {};
  r.type = t, r.props = o, r.key = e, r.ref = n, r.__k = null, r.__ = null, r.__b = 0, r.__e = null, r.__d = void (-101 * -13 + 1 * -6335 + 5022), r.__c = null, r.constructor = void (8862 + -1 * -5140 + -1 * 14002), r.__v = i ?? ++Xa, r.__i = -1, r.__u = 0;
  var a = r;
  return i == null && G.vnode != null && G.vnode(a), a;
}
function Fs() {
  var t = {};
  return t.current = null, t;
}
function De(t) {
  return t.children;
}
function Oe(t, o) {
  this.props = t, this.context = o;
}
function zt(t, o) {
  if (o == null)
    return t.__ ? zt(t.__, t.__i + (-39 * -67 + -17 * -17 + -2901)) : null;
  for (var e; o < t.__k.length; o++)
    if ((e = t.__k[o]) != null && e.__e != null)
      return e.__e;
  return typeof t.type == "function" ? zt(t) : null;
}
function za(t) {
  var o, e;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, o = -1 * 1437 + 201 * -24 + 6261; o < t.__k.length; o++)
      if ((e = t.__k[o]) != null && e.__e != null) {
        t.__e = t.__c.base = e.__e;
        break;
      }
    return za(t);
  }
}
function Co(t) {
  (!t.__d && (t.__d = !(-8429 + 8429 * 1)) && vt.push(t) && !ui.__r++ || Lr !== G.debounceRendering) && ((Lr = G.debounceRendering) || Ma)(ui);
}
function ui() {
  var t, o, e, n, i, r, a, g, s;
  for (vt.sort(uo); t = vt.shift(); )
    t.__d && (o = vt.length, n = void (-1 * -7927 + -1213 * 3 + -4288), r = (i = (e = t).__v).__e, g = [], s = [], (a = e.__P) && ((n = rt({}, i)).__v = i.__v + (-13 * 79 + -4057 + -15 * -339), G.vnode && G.vnode(n), To(a, n, i, e.__n, void (-2419 * -4 + -2 * -2447 + 2 * -7285) !== a.ownerSVGElement, 5693 + -4 * 1210 + -821 & i.__u ? [r] : null, g, r ?? zt(i), !!(53 * 1 + -9837 + -2 * -4908 & i.__u), s), n.__.__k[n.__i] = n, _a(g, n, s), n.__e != r && za(n)), vt.length > o && vt.sort(uo));
  ui.__r = 1799 + 1 * -1799;
}
function $a(t, o, e, n, i, r, a, g, s, I, C) {
  var u, p, f, v, w, E = n && n.__k || Ua, k = o.length;
  for (e.__d = s, Ds(e, o, E), s = e.__d, u = 0; u < k; u++)
    (f = e.__k[u]) != null && typeof f != "boolean" && typeof f != "function" && (p = f.__i === -1 ? Gn : E[f.__i] || Gn, f.__i = u, To(t, f, p, i, r, a, g, s, I, C), v = f.__e, f.ref && p.ref != f.ref && (p.ref && Xo(p.ref, null, f), C.push(f.ref, f.__c || v, f)), w == null && v != null && (w = v), -1 * -119767 + 600 * -100 + 5769 & f.__u || p.__k === f.__k ? s = qa(f, s, t) : typeof f.type == "function" && void (4220 * -1 + -901 * -11 + -813 * 7) !== f.__d ? s = f.__d : v && (s = v.nextSibling), f.__d = void (9093 + 2556 * 3 + -16761), f.__u &= -(96373 + -166 * -1857 + -208026));
  e.__d = s, e.__e = w;
}
function Ds(t, o, e) {
  var n, i, r, a, g, s = o.length, I = e.length, C = I, u = 0;
  for (t.__k = [], n = 25 * 17 + 8002 + -8427; n < s; n++)
    (i = t.__k[n] = (i = o[n]) == null || typeof i == "boolean" || typeof i == "function" ? null : typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? yn(null, i, null, null, i) : Bi(i) ? yn(De, { children: i }, null, null, null) : void (9325 + 1 * -9325) === i.constructor && i.__b > 2 * -1135 + 7279 + -5009 ? yn(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) != null ? (i.__ = t, i.__b = t.__b + (-1 * -1612 + -3429 + -18 * -101), g = Ts(i, e, a = n + u, C), i.__i = g, r = null, -(-1651 * 2 + 23 * -329 + -1087 * -10) !== g && (C--, (r = e[g]) && (r.__u |= -193535 + 180847 * -1 + 505454)), r == null || r.__v === null ? (-(-2075 + 5 * 1681 + -6329) == g && u--, typeof i.type != "function" && (i.__u |= -643 * 89 + 19974 + -34263 * -3)) : g !== a && (g === a + (38 * 5 + 7709 + -11 * 718) ? u++ : g > a ? C > s - a ? u += g - a : u-- : u = g < a && g == a - (-7699 * 1 + 1440 + 3130 * 2) ? g - a : -1944 * -5 + 2784 + -12504, g !== n + u && (i.__u |= 1 * -113657 + -98960 + 278153 * 1))) : (r = e[n]) && r.key == null && r.__e && (r.__e == t.__d && (t.__d = zt(r)), Ao(r, r, !(1 * 5181 + 7171 + -12351)), e[n] = null, C--);
  if (C)
    for (n = 7750 * -1 + -7141 + 14891; n < I; n++)
      (r = e[n]) != null && -2 * -2106 + 3570 + 1 * -7782 == (131072 & r.__u) && (r.__e == t.__d && (t.__d = zt(r)), Ao(r, r));
}
function qa(t, o, e) {
  var n, i;
  if (typeof t.type == "function") {
    for (n = t.__k, i = 7553 + 2 * 2159 + -9 * 1319; n && i < n.length; i++)
      n[i] && (n[i].__ = t, o = qa(n[i], o, e));
    return o;
  }
  return t.__e != o && (e.insertBefore(t.__e, o || null), o = t.__e), o && o.nextSibling;
}
function gt(t, o) {
  return o = o || [], t == null || typeof t == "boolean" || (Bi(t) ? t.some(function(e) {
    gt(e, o);
  }) : o.push(t)), o;
}
function Ts(t, o, e, n) {
  var i = t.key, r = t.type, a = e - (471 * -5 + -56 * 8 + 1 * 2804), g = e + (8121 * 1 + 28 * -181 + -3052), s = o[e];
  if (s === null || s && i == s.key && r === s.type)
    return e;
  if (n > (s != null && -1323 + 1 * -8907 + 10230 == (67005 + 8467 * -10 + 148737 & s.__u) ? -3658 + 7 * 493 + 208 * 1 : -28 * -347 + 6436 + 2 * -8076))
    for (; a >= 9984 + 298 * -18 + -4620 || g < o.length; ) {
      if (a >= 5768 + 137 * 6 + -3295 * 2) {
        if ((s = o[a]) && -5 * 789 + -263 * -22 + -1 * 1841 == (225152 + -9337 * -2 + 56377 * -2 & s.__u) && i == s.key && r === s.type)
          return a;
        a--;
      }
      if (g < o.length) {
        if ((s = o[g]) && 8 * 670 + 4005 + -9365 == (229245 + 8 * 24097 + -290949 * 1 & s.__u) && i == s.key && r === s.type)
          return g;
        g++;
      }
    }
  return -(343 * 1 + -21 * -51 + -1413);
}
function Fr(t, o, e) {
  o[0] === "-" ? t.setProperty(o, e ?? "") : t[o] = e == null ? "" : typeof e != "number" || Ls.test(o) ? e : e + "px";
}
function jn(t, o, e, n, i) {
  var r;
  e:
    if (o === "style")
      if (typeof e == "string")
        t.style.cssText = e;
      else {
        if (typeof n == "string" && (t.style.cssText = n = ""), n)
          for (o in n)
            e && o in e || Fr(t.style, o, "");
        if (e)
          for (o in e)
            n && e[o] === n[o] || Fr(t.style, o, e[o]);
      }
    else if (o[181 * -11 + 3522 + -1 * 1531] === "o" && o[-1 * 4793 + 8227 + -3433] === "n")
      r = o !== (o = o.replace(/(PointerCapture)$|Capture$/, "$1")), o = o.toLowerCase() in t ? o.toLowerCase().slice(-3593 + -811 * -3 + 2 * 581) : o.slice(2), t.l || (t.l = {}), t.l[o + r] = e, e ? n ? e.u = n.u : (e.u = Date.now(), t.addEventListener(o, r ? Tr : Dr, r)) : t.removeEventListener(o, r ? Tr : Dr, r);
    else {
      if (i)
        o = o.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (o !== "width" && o !== "height" && o !== "href" && o !== "list" && o !== "form" && o !== "tabIndex" && o !== "download" && o !== "rowSpan" && o !== "colSpan" && o !== "role" && o in t)
        try {
          t[o] = e ?? "";
          break e;
        } catch {
        }
      typeof e == "function" || (e == null || !(6434 + 6649 * -1 + -1 * -216) === e && o[209 * 39 + 197 + -1043 * 8] !== "-" ? t.removeAttribute(o) : t.setAttribute(o, e));
    }
}
function Dr(t) {
  var o = this.l[t.type + !1];
  if (t.t) {
    if (t.t <= o.u)
      return;
  } else
    t.t = Date.now();
  return o(G.event ? G.event(t) : t);
}
function Tr(t) {
  return this.l[t.type + !(2 * -503 + -4028 * 1 + 1 * 5034)](G.event ? G.event(t) : t);
}
function To(t, o, e, n, i, r, a, g, s, I) {
  var C, u, p, f, v, w, E, k, O, R, U, D, j, Z, _, z = o.type;
  if (void (-6511 + -383 * -17) !== o.constructor)
    return null;
  128 & e.__u && (s = !!(2 * -4091 + -1573 + -9787 * -1 & e.__u), r = [g = o.__e = e.__e]), (C = G.__b) && C(o);
  e:
    if (typeof z == "function")
      try {
        if (k = o.props, O = (C = z.contextType) && n[C.__c], R = C ? O ? O.props.value : C.__ : n, e.__c ? E = (u = o.__c = e.__c).__ = u.__E : ("prototype" in z && z.prototype.render ? o.__c = u = new z(k, R) : (o.__c = u = new Oe(k, R), u.constructor = z, u.render = js), O && O.sub(u), u.props = k, u.state || (u.state = {}), u.context = R, u.__n = n, p = u.__d = !(1 * -8135 + -7 * -1082 + -33 * -17), u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), z.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = rt({}, u.__s)), rt(u.__s, z.getDerivedStateFromProps(k, u.__s))), f = u.props, v = u.state, u.__v = o, p)
          z.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (z.getDerivedStateFromProps == null && k !== f && u.componentWillReceiveProps != null && u.componentWillReceiveProps(k, R), !u.__e && (u.shouldComponentUpdate != null && !(-41 * -20 + 4287 + 1 * -5106) === u.shouldComponentUpdate(k, u.__s, R) || o.__v === e.__v)) {
            for (o.__v !== e.__v && (u.props = k, u.state = u.__s, u.__d = !(-10583 + 21 * 504)), o.__e = e.__e, o.__k = e.__k, o.__k.forEach(function(ee) {
              ee && (ee.__ = o);
            }), U = -13 * 448 + -3150 + 8974; U < u._sb.length; U++)
              u.__h.push(u._sb[U]);
            u._sb = [], u.__h.length && a.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(k, u.__s, R), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(f, v, w);
          });
        }
        if (u.context = R, u.props = k, u.__P = t, u.__e = !(344 * 26 + -35 * 274 + -1 * -647), D = G.__r, j = 0, "prototype" in z && z.prototype.render) {
          for (u.state = u.__s, u.__d = !(-12 * -128 + -109 * -19 + 3 * -1202), D && D(o), C = u.render(u.props, u.state, u.context), Z = 2401 + -1303 * 3 + -4 * -377; Z < u._sb.length; Z++)
            u.__h.push(u._sb[Z]);
          u._sb = [];
        } else
          do
            u.__d = !(-4279 + 95 * -101 + 13875), D && D(o), C = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++j < -1348 * 2 + 11 * 712 + -19 * 269);
        u.state = u.__s, u.getChildContext != null && (n = rt(rt({}, n), u.getChildContext())), p || u.getSnapshotBeforeUpdate == null || (w = u.getSnapshotBeforeUpdate(f, v)), $a(t, Bi(_ = C != null && C.type === De && C.key == null ? C.props.children : C) ? _ : [_], o, e, n, i, r, a, g, s, I), u.base = o.__e, o.__u &= -(1705 * 5 + 3787 + -12151 * 1), u.__h.length && a.push(u), E && (u.__E = u.__ = null);
      } catch (ee) {
        o.__v = null, s || r != null ? (o.__e = g, o.__u |= s ? 9 * 947 + -51 * -185 + -17798 : -3240 + -5 * -727 + -363, r[r.indexOf(g)] = null) : (o.__e = e.__e, o.__k = e.__k), G.__e(ee, o, e);
      }
    else
      r == null && o.__v === e.__v ? (o.__k = e.__k, o.__e = e.__e) : o.__e = Xs(e.__e, o, e, n, i, r, a, s, I);
  (C = G.diffed) && C(o);
}
function _a(t, o, e) {
  o.__d = void (9 * -67 + -8847 + 5 * 1890);
  for (var n = 5884 + 6826 * -1 + 314 * 3; n < e.length; n++)
    Xo(e[n], e[++n], e[++n]);
  G.__c && G.__c(o, t), t.some(function(i) {
    try {
      t = i.__h, i.__h = [], t.some(function(r) {
        r.call(i);
      });
    } catch (r) {
      G.__e(r, i.__v);
    }
  });
}
function Xs(t, o, e, n, i, r, a, g, s) {
  var I, C, u, p, f, v, w, E = e.props, k = o.props, O = o.type;
  if (O === "svg" && (i = !(-1841 * -5 + -6057 + 1574 * -2)), r != null) {
    for (I = -12 * 139 + 8876 + -136 * 53; I < r.length; I++)
      if ((f = r[I]) && "setAttribute" in f == !!O && (O ? f.localName === O : f.nodeType === 3)) {
        t = f, r[I] = null;
        break;
      }
  }
  if (t == null) {
    if (O === null)
      return document.createTextNode(k);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", O) : document.createElement(O, k.is && k), r = null, g = !1;
  }
  if (O === null)
    E === k || g && t.data === k || (t.data = k);
  else {
    if (r = r && Kn.call(t.childNodes), E = e.props || Gn, !g && r != null)
      for (E = {}, I = -7 * 845 + 3 * 1427 + 43 * 38; I < t.attributes.length; I++)
        E[(f = t.attributes[I]).name] = f.value;
    for (I in E)
      f = E[I], I == "children" || (I == "dangerouslySetInnerHTML" ? u = f : I === "key" || I in k || jn(t, I, null, f, i));
    for (I in k)
      f = k[I], I == "children" ? p = f : I == "dangerouslySetInnerHTML" ? C = f : I == "value" ? v = f : I == "checked" ? w = f : I === "key" || g && typeof f != "function" || E[I] === f || jn(t, I, f, E[I], i);
    if (C)
      g || u && (C.__html === u.__html || C.__html === t.innerHTML) || (t.innerHTML = C.__html), o.__k = [];
    else if (u && (t.innerHTML = ""), $a(t, Bi(p) ? p : [p], o, e, n, i && O !== "foreignObject", r, a, r ? r[8092 + -238 * 34] : e.__k && zt(e, 0), g, s), r != null)
      for (I = r.length; I--; )
        r[I] != null && Qa(r[I]);
    g || (I = "value", void (-175 * 46 + 2593 + 107 * 51) !== v && (v !== t[I] || O === "progress" && !v || O === "option" && v !== E[I]) && jn(t, I, v, E[I], !(3 * -2105 + -258 + 6574)), I = "checked", void (-4 * 1039 + -5967 + 1 * 10123) !== w && w !== t[I] && jn(t, I, w, E[I], !(7198 + 19 * -497 + 2246)));
  }
  return t;
}
function Xo(t, o, e) {
  try {
    typeof t == "function" ? t(o) : t.current = o;
  } catch (n) {
    G.__e(n, e);
  }
}
function Ao(t, o, e) {
  var n, i;
  if (G.unmount && G.unmount(t), (n = t.ref) && (n.current && n.current !== t.__e || Xo(n, null, o)), (n = t.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (r) {
        G.__e(r, o);
      }
    n.base = n.__P = null, t.__c = void (1721 * -3 + 8 * 289 + 2851);
  }
  if (n = t.__k)
    for (i = -2126 * 3 + -156 * -35 + 17 * 54; i < n.length; i++)
      n[i] && Ao(n[i], o, e || typeof t.type != "function");
  e || t.__e == null || Qa(t.__e), t.__ = t.__e = t.__d = void (-3847 * 2 + 1 * -4381 + 21 * 575);
}
function js(t, o, e) {
  return this.constructor(t, e);
}
function dt(t, o, e) {
  var n, i, r, a;
  G.__ && G.__(t, o), i = (n = typeof e == "function") ? null : e && e.__k || o.__k, r = [], a = [], To(o, t = (!n && e || o).__k = me(De, null, [t]), i || Gn, Gn, void (-2202 + 2202 * 1) !== o.ownerSVGElement, !n && e ? [e] : i ? null : o.firstChild ? Kn.call(o.childNodes) : null, r, !n && e ? e : i ? i.__e : o.firstChild, n, a), _a(r, t, a);
}
function jo(t, o) {
  dt(t, o, jo);
}
function Mo(t, o, e) {
  var n, i, r, a, g = rt({}, t.props);
  for (r in t.type && t.type.defaultProps && (a = t.type.defaultProps), o)
    r == "key" ? n = o[r] : r == "ref" ? i = o[r] : g[r] = void (-9352 * -1 + 3 * -1427 + 5071 * -1) === o[r] && void (1 * -4763 + 8338 + 11 * -325) !== a ? a[r] : o[r];
  return arguments.length > -4179 * -1 + 9858 + 2005 * -7 && (g.children = arguments.length > 7147 + -1 * -4066 + 38 * -295 ? Kn.call(arguments, -9364 * -1 + 3157 + -107 * 117) : e), yn(t.type, g, n || t.key, i || t.ref, null);
}
function Jo(t, o) {
  var e = { __c: o = "__cC" + Ja++, __: t, Consumer: function(n, i) {
    return n.children(i);
  }, Provider: function(n) {
    var i, r;
    return this.getChildContext || (i = [], (r = {})[o] = this, this.getChildContext = function() {
      return r;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && i.some(function(g) {
        g.__e = !0, Co(g);
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
Kn = Ua.slice, G = { __e: function(t, o, e, n) {
  for (var i, r, a; o = o.__; )
    if ((i = o.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, n || {}), a = i.__d), a)
          return i.__E = i;
      } catch (g) {
        t = g;
      }
  throw t;
} }, Xa = -1 * -17 + -4294 + 1 * 4277, ja = function(t) {
  return t != null && t.constructor == null;
}, Oe.prototype.setState = function(t, o) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = rt({}, this.state), typeof t == "function" && (t = t(rt({}, e), this.props)), t && rt(e, t), t != null && this.__v && (o && this._sb.push(o), Co(this));
}, Oe.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !(8029 * 1 + 6085 * 1 + 2 * -7057), t && this.__h.push(t), Co(this));
}, Oe.prototype.render = De, vt = [], Ma = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, uo = function(t, o) {
  return t.__v.__b - o.__v.__b;
}, ui.__r = -135 * -6 + -1 * -5966 + -6776, Ja = -2140 + -2769 * 1 + 4909;
function Uo() {
  return (Uo = Object.assign ? Object.assign.bind() : function(t) {
    for (var o = -3 * -1202 + 7069 + -10674; o < arguments.length; o++) {
      var e = arguments[o];
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }
    return t;
  }).apply(this, arguments);
}
var Ms = ["context", "children"];
function Js(t) {
  this.getChildContext = function() {
    return t.context;
  };
  var o = t.children, e = function(n, i) {
    if (n == null)
      return {};
    var r, a, g = {}, s = Object.keys(n);
    for (a = -15 * -23 + -444 * 2 + 1 * 543; a < s.length; a++)
      i.indexOf(r = s[a]) >= -3457 + 3457 * 1 || (g[r] = n[r]);
    return g;
  }(t, Ms);
  return Mo(o, e);
}
function Us() {
  var t = {};
  t.detail = {}, t.bubbles = !(1 * -1404 + 3933 + -9 * 281), t.cancelable = !0;
  var o = new CustomEvent("_preact", t);
  this.dispatchEvent(o), this._vdom = me(Js, Uo({}, this._props, { context: o.detail.context }), function e(n, i) {
    if (13097 + -6547 * 2 === n.nodeType)
      return n.data;
    if (-5694 + 17 * 335 !== n.nodeType)
      return null;
    var r = [], a = {}, g = -953 + -12 * 8 + 1049, s = n.attributes, I = n.childNodes;
    for (g = s.length; g--; )
      s[g].name !== "slot" && (a[s[g].name] = s[g].value, a[eg(s[g].name)] = s[g].value);
    for (g = I.length; g--; ) {
      var C = e(I[g], null), u = I[g].slot;
      u ? a[u] = me(Xr, { name: u }, C) : r[g] = C;
    }
    var p = i ? me(Xr, null, r) : r;
    return me(i || n.nodeName.toLowerCase(), a, p);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? jo : dt)(this._vdom, this._root);
}
function eg(t) {
  return t.replace(/-(\w)/g, function(o, e) {
    return e ? e.toUpperCase() : "";
  });
}
function Qs(t, o, e) {
  if (this._vdom) {
    var n = {};
    n[t] = e = e ?? void (3 * -631 + 3049 + -1156), n[eg(t)] = e, this._vdom = Mo(this._vdom, n), dt(this._vdom, this._root);
  }
}
function zs() {
  dt(this._vdom = null, this._root);
}
function Xr(t, o) {
  var e = this;
  return me("slot", Uo({}, t, { ref: function(n) {
    n ? (e.ref = n, e._listener || (e._listener = function(i) {
      i.stopPropagation(), i.detail.context = o;
    }, n.addEventListener("_preact", e._listener))) : e.ref.removeEventListener("_preact", e._listener);
  } }));
}
function $s(t, o, e, n) {
  function i() {
    var r = Reflect.construct(HTMLElement, [], i);
    return r._vdomComponent = t, r._root = n && n.shadow ? r.attachShadow({ mode: n.mode || "open" }) : r, r;
  }
  return (i.prototype = Object.create(HTMLElement.prototype)).constructor = i, i.prototype.connectedCallback = Us, i.prototype.attributeChangedCallback = Qs, i.prototype.disconnectedCallback = zs, e = e || t.observedAttributes || Object.keys(t.propTypes || {}), i.observedAttributes = e, e.forEach(function(r) {
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
function $t(t, o, e) {
  if (e || arguments.length === 2)
    for (var n = 0, i = o.length, r; n < i; n++)
      (r || !(n in o)) && (r || (r = Array.prototype.slice.call(o, 0, n)), r[n] = o[n]);
  return t.concat(r || Array.prototype.slice.call(o));
}
function qs(t) {
  var o = Object.create(null);
  return function(e) {
    return o[e] === void 0 && (o[e] = t(e)), o[e];
  };
}
var _s = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, e0 = qs(function(t) {
  return _s.test(t) || t.charCodeAt(769 * -3 + 739 * 3 + 45 * 2) === 9590 * 1 + -17 * 314 + 1 * -4141 && t.charCodeAt(5263 + -503 * -13 + 1 * -11801) === 34 * -21 + -175 * -4 + 124 * 1 && t.charCodeAt(-2 * -632 + 7573 + 465 * -19) < 11 * 173 + 6911 + -143 * 61;
}), At, q, _i, jr, qt = -5789 + 1717 * -2 + 9223, tg = [], ei = [], Mr = G.__b, Jr = G.__r, Ur = G.diffed, Qr = G.__c, zr = G.unmount;
function an(t, o) {
  G.__h && G.__h(q, t, qt || o), qt = -764 * -5 + -2724 + -1096;
  var e = {};
  e.__ = [], e.__h = [];
  var n = q.__H || (q.__H = e), i = {};
  return i.__V = ei, t >= n.__.length && n.__.push(i), n.__[t];
}
function Le(t) {
  return qt = 954 + 1753 * 1 + -41 * 66, ng(ig, t);
}
function ng(t, o, e) {
  var n = an(At++, 2);
  if (n.t = t, !n.__c && (n.__ = [e ? e(o) : ig(void (1 * 1221 + 1 * 9133 + -10354), o), function(g) {
    var s = n.__N ? n.__N[0] : n.__[0], I = n.t(s, g);
    s !== I && (n.__N = [I, n.__[-501 * 1 + 7080 + -6578]], n.__c.setState({}));
  }], n.__c = q, !q.u)) {
    var i = function(g, s, I) {
      if (!n.__c.__H)
        return !0;
      var C = n.__c.__H.__.filter(function(p) {
        return p.__c;
      });
      if (C.every(function(p) {
        return !p.__N;
      }))
        return !r || r.call(this, g, s, I);
      var u = !(623 * -12 + -1886 * 4 + 15021);
      return C.forEach(function(p) {
        if (p.__N) {
          var f = p.__[0];
          p.__ = p.__N, p.__N = void 0, f !== p.__[0] && (u = !0);
        }
      }), !(!u && n.__c.props === g) && (!r || r.call(this, g, s, I));
    };
    q.u = !(-446 * 11 + 7808 + -2902 * 1);
    var r = q.shouldComponentUpdate, a = q.componentWillUpdate;
    q.componentWillUpdate = function(g, s, I) {
      if (this.__e) {
        var C = r;
        r = void (-7187 * 1 + -9544 + -5577 * -3), i(g, s, I), r = C;
      }
      a && a.call(this, g, s, I);
    }, q.shouldComponentUpdate = i;
  }
  return n.__N || n.__;
}
function be(t, o) {
  var e = an(At++, 3);
  !G.__s && Qo(e.__H, o) && (e.__ = t, e.i = o, q.__H.__h.push(e));
}
function Si(t, o) {
  var e = an(At++, 4);
  !G.__s && Qo(e.__H, o) && (e.__ = t, e.i = o, q.__h.push(e));
}
function Wt(t) {
  return qt = -6990 + 1251 * 2 + 4493, Ue(function() {
    var o = {};
    return o.current = t, o;
  }, []);
}
function t0(t, o, e) {
  qt = 2 * 519 + -2969 + 149 * 13, Si(function() {
    return typeof t == "function" ? (t(o()), function() {
      return t(null);
    }) : t ? (t.current = o(), function() {
      return t.current = null;
    }) : void (5 * 31 + 2517 + -2672);
  }, e == null ? e : e.concat(t));
}
function Ue(t, o) {
  var e = an(At++, 7);
  return Qo(e.__H, o) ? (e.__V = t(), e.i = o, e.__h = t, e.__V) : e.__;
}
function Ci(t, o) {
  return qt = 8, Ue(function() {
    return t;
  }, o);
}
function Gi(t) {
  var o = q.context[t.__c], e = an(At++, 1 * -4513 + -7 * 229 + 7 * 875);
  return e.c = t, o ? (e.__ == null && (e.__ = !(258 * 19 + 5116 + -10018), o.sub(q)), o.props.value) : t.__;
}
function po(t, o) {
  G.useDebugValue && G.useDebugValue(o ? o(t) : t);
}
function n0() {
  var t = an(At++, 11);
  if (!t.__) {
    for (var o = q.__v; o !== null && !o.__m && o.__ !== null; )
      o = o.__;
    var e = o.__m || (o.__m = [-8019 + 24 * -191 + 12603, -908 * 8 + -41 * 56 + 9560 * 1]);
    t.__ = "P" + e[-7465 * -1 + -1 * -9138 + 16603 * -1] + "-" + e[2113 * -2 + 79 * -11 + -28 * -182]++;
  }
  return t.__;
}
function i0() {
  for (var t; t = tg.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(ti), t.__H.__h.forEach(fo), t.__H.__h = [];
      } catch (o) {
        t.__H.__h = [], G.__e(o, t.__v);
      }
}
G.__b = function(t) {
  q = null, Mr && Mr(t);
}, G.__r = function(t) {
  Jr && Jr(t), At = 7 * -778 + -7931 + 13377 * 1;
  var o = (q = t.__c).__H;
  o && (_i === q ? (o.__h = [], q.__h = [], o.__.forEach(function(e) {
    e.__N && (e.__ = e.__N), e.__V = ei, e.__N = e.i = void (-2179 * 3 + -1673 * 4 + 13229);
  })) : (o.__h.forEach(ti), o.__h.forEach(fo), o.__h = [], At = -1475 + -3611 * 2 + 13 * 669)), _i = q;
}, G.diffed = function(t) {
  Ur && Ur(t);
  var o = t.__c;
  o && o.__H && (o.__H.__h.length && (tg.push(o) !== 1 && jr === G.requestAnimationFrame || ((jr = G.requestAnimationFrame) || o0)(i0)), o.__H.__.forEach(function(e) {
    e.i && (e.__H = e.i), e.__V !== ei && (e.__ = e.__V), e.i = void (-4 * 1636 + -1603 + 8147), e.__V = ei;
  })), _i = q = null;
}, G.__c = function(t, o) {
  o.some(function(e) {
    try {
      e.__h.forEach(ti), e.__h = e.__h.filter(function(n) {
        return !n.__ || fo(n);
      });
    } catch (n) {
      o.some(function(i) {
        i.__h && (i.__h = []);
      }), o = [], G.__e(n, e.__v);
    }
  }), Qr && Qr(t, o);
}, G.unmount = function(t) {
  zr && zr(t);
  var o, e = t.__c;
  e && e.__H && (e.__H.__.forEach(function(n) {
    try {
      ti(n);
    } catch (i) {
      o = i;
    }
  }), e.__H = void (-11 * 99 + -1 * -7591 + -6502), o && G.__e(o, e.__v));
};
var $r = typeof requestAnimationFrame == "function";
function o0(t) {
  var o, e = function() {
    clearTimeout(n), $r && cancelAnimationFrame(o), setTimeout(t);
  }, n = setTimeout(e, 100);
  $r && (o = requestAnimationFrame(e));
}
function ti(t) {
  var o = q, e = t.__c;
  typeof e == "function" && (t.__c = void (-837 * 4 + 7822 * -1 + -2234 * -5), e()), q = o;
}
function fo(t) {
  var o = q;
  t.__c = t.__(), q = o;
}
function Qo(t, o) {
  return !t || t.length !== o.length || o.some(function(e, n) {
    return e !== t[n];
  });
}
function ig(t, o) {
  return typeof o == "function" ? o(t) : o;
}
function og(t, o) {
  for (var e in o)
    t[e] = o[e];
  return t;
}
function ho(t, o) {
  for (var e in t)
    if (e !== "__source" && !(e in o))
      return !(8721 * 1 + 8116 * -1 + 605 * -1);
  for (var n in o)
    if (n !== "__source" && t[n] !== o[n])
      return !0;
  return !(-2097 + 1 * 1493 + -1 * -605);
}
function mo(t) {
  this.props = t;
}
function r0(t, o) {
  function e(i) {
    var r = this.props.ref, a = r == i.ref;
    return !a && r && (r.call ? r(null) : r.current = null), o ? !o(this.props, i) || !a : ho(this.props, i);
  }
  function n(i) {
    return this.shouldComponentUpdate = e, me(t, i);
  }
  return n.displayName = "Memo(" + (t.displayName || t.name) + ")", n.prototype.isReactComponent = !0, n.__f = !(7978 * -1 + 119 + 7859), n;
}
(mo.prototype = new Oe()).isPureReactComponent = !(-5 * -1222 + 1273 + -7383), mo.prototype.shouldComponentUpdate = function(t, o) {
  return ho(this.props, t) || ho(this.state, o);
};
var qr = G.__b;
G.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), qr && qr(t);
};
var a0 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 9048 + -6 * -467 + -1 * 7939;
function rg(t) {
  function o(e) {
    var n = og({}, e);
    return delete n.ref, t(n, e.ref || null);
  }
  return o.$$typeof = a0, o.render = o, o.prototype.isReactComponent = o.__f = !(-2654 + -6 * 219 + 3968), o.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", o;
}
var _r = function(t, o) {
  return t == null ? null : gt(gt(t).map(o));
}, g0 = { map: _r, forEach: _r, count: function(t) {
  return t ? gt(t).length : 7227 + -1 * -640 + -7867;
}, only: function(t) {
  var o = gt(t);
  if (-3187 * 1 + -6286 + -4737 * -2 !== o.length)
    throw "Children.only";
  return o[-1222 * -1 + 2 * -6 + -1210];
}, toArray: gt }, s0 = G.__e;
G.__e = function(t, o, e, n) {
  if (t.then) {
    for (var i, r = o; r = r.__; )
      if ((i = r.__c) && i.__c)
        return o.__e == null && (o.__e = e.__e, o.__k = e.__k), i.__c(t, o);
  }
  s0(t, o, e, n);
};
var ea = G.unmount;
function ag(t, o, e) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), t.__c.__H = null), (t = og({}, t)).__c != null && (t.__c.__P === e && (t.__c.__P = o), t.__c = null), t.__k = t.__k && t.__k.map(function(n) {
    return ag(n, o, e);
  })), t;
}
function gg(t, o, e) {
  return t && e && (t.__v = null, t.__k = t.__k && t.__k.map(function(n) {
    return gg(n, o, e);
  }), t.__c && t.__c.__P === o && (t.__e && e.appendChild(t.__e), t.__c.__e = !(418 * -9 + -3 * -2389 + 681 * -5), t.__c.__P = e)), t;
}
function ni() {
  this.__u = -939 * -4 + 6757 * -1 + 3001 * 1, this.t = null, this.__b = null;
}
function sg(t) {
  var o = t.__.__c;
  return o && o.__a && o.__a(t);
}
function c0(t) {
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
    return me(e, r);
  }
  return i.displayName = "Lazy", i.__f = !0, i;
}
function fn() {
  this.u = null, this.o = null;
}
G.unmount = function(t) {
  var o = t.__c;
  o && o.__R && o.__R(), o && 4329 + 46 * -49 + -2043 & t.__u && (t.type = null), ea && ea(t);
}, (ni.prototype = new Oe()).__c = function(t, o) {
  var e = o.__c, n = this;
  n.t == null && (n.t = []), n.t.push(e);
  var i = sg(n.__v), r = !(8785 + 976 * -9), a = function() {
    r || (r = !(8978 + 13 * 23 + -1 * 9277), e.__R = null, i ? i(g) : g());
  };
  e.__R = a;
  var g = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var s = n.state.__a;
        n.__v.__k[-1 * 2382 + -26 * -352 + 3385 * -2] = gg(s, s.__c.__P, s.__c.__O);
      }
      var I;
      for (n.setState({ __a: n.__b = null }); I = n.t.pop(); )
        I.forceUpdate();
    }
  };
  n.__u++ || 2654 * 1 + 119 * -49 + -3209 * -1 & o.__u || n.setState({ __a: n.__b = n.__v.__k[-5 * 1597 + -1 * -4201 + -946 * -4] }), t.then(a, a);
}, ni.prototype.componentWillUnmount = function() {
  this.t = [];
}, ni.prototype.render = function(t, o) {
  if (this.__b) {
    if (this.__v.__k) {
      var e = document.createElement("div"), n = this.__v.__k[-1 * -2830 + -1 * 7177 + 161 * 27].__c;
      this.__v.__k[5 * -1489 + -3 * -1494 + 2963] = ag(this.__b, e, n.__O = n.__P);
    }
    this.__b = null;
  }
  var i = o.__a && me(De, null, t.fallback);
  return i && (i.__u &= -(7101 + -67 * 22 + -5594)), [me(De, null, o.__a ? null : t.children), i];
};
var ta = function(t, o, e) {
  if (++e[-9 * 323 + 527 + 2381 * 1] === e[0] && t.o.delete(o), t.props.revealOrder && (t.props.revealOrder[7 * -636 + -1091 * -7 + -3185] !== "t" || !t.o.size))
    for (e = t.u; e; ) {
      for (; e.length > -16102 + -3221 * -5; )
        e.pop()();
      if (e[725 + 45 * 58 + 1 * -3334] < e[-6350 + 31 * -19 + 771 * 9])
        break;
      t.u = e = e[1 * 9299 + 2793 + -12090];
    }
};
function x0(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function I0(t) {
  var o = this, e = t.i;
  o.componentWillUnmount = function() {
    dt(null, o.l), o.l = null, o.i = null;
  }, o.i && o.i !== e && o.componentWillUnmount(), o.l || (o.i = e, o.l = { nodeType: 1, parentNode: e, childNodes: [], appendChild: function(n) {
    this.childNodes.push(n), o.i.appendChild(n);
  }, insertBefore: function(n, i) {
    this.childNodes.push(n), o.i.appendChild(n);
  }, removeChild: function(n) {
    this.childNodes.splice(this.childNodes.indexOf(n) >>> 201 * 13 + 2056 + -778 * 6, 3986 + 2757 * -2 + -11 * -139), o.i.removeChild(n);
  } }), dt(me(x0, { context: o.context }, t.__v), o.l);
}
function l0(t, o) {
  var e = {};
  e.__v = t, e.i = o;
  var n = me(I0, e);
  return n.containerInfo = o, n;
}
(fn.prototype = new Oe()).__a = function(t) {
  var o = this, e = sg(o.__v), n = o.o.get(t);
  return n[9754 * -1 + -1886 + 11640]++, function(i) {
    var r = function() {
      o.props.revealOrder ? (n.push(i), ta(o, t, n)) : i();
    };
    e ? e(r) : r();
  };
}, fn.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var o = gt(t.children);
  t.revealOrder && t.revealOrder[-161 * 33 + 4450 + 863] === "b" && o.reverse();
  for (var e = o.length; e--; )
    this.o.set(o[e], this.u = [1980 + -10 * -389 + -5869, -15 * 634 + 9479 * -1 + 18989, this.u]);
  return t.children;
}, fn.prototype.componentDidUpdate = fn.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(o, e) {
    ta(t, e, o);
  });
};
var cg = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 4447 * -2 + 45867 * -2 + 9 * 17859, u0 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, C0 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, d0 = /[A-Z0-9]/g, A0 = typeof document < "u", p0 = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
};
function f0(t, o, e) {
  return o.__k == null && (o.textContent = ""), dt(t, o), typeof e == "function" && e(), t ? t.__c : null;
}
function h0(t, o, e) {
  return jo(t, o), typeof e == "function" && e(), t ? t.__c : null;
}
Oe.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(Oe.prototype, t, { configurable: !(6465 + 83 * -114 + 2997), get: function() {
    return this["UNSAFE_" + t];
  }, set: function(o) {
    var e = {};
    e.configurable = !(-4394 * 2 + 164 * 13 + 52 * 128), e.writable = !(-9216 + -4 * 1123 + 13708), e.value = o, Object.defineProperty(this, t, e);
  } });
});
var na = G.event;
function m0() {
}
function b0() {
  return this.cancelBubble;
}
function y0() {
  return this.defaultPrevented;
}
G.event = function(t) {
  return na && (t = na(t)), t.persist = m0, t.isPropagationStopped = b0, t.isDefaultPrevented = y0, t.nativeEvent = t;
};
var ii = {};
ii.enumerable = !(8203 + 1 * 7341 + 33 * -471), ii.configurable = !(1 * 7432 + 2953 + 10385 * -1), ii.get = function() {
  return this.class;
};
var zo, v0 = ii, ia = G.vnode;
G.vnode = function(t) {
  typeof t.type == "string" && function(o) {
    var e = o.props, n = o.type, i = {};
    for (var r in e) {
      var a = e[r];
      if (!(r === "value" && "defaultValue" in e && a == null || A0 && r === "children" && n === "noscript" || r === "class" || r === "className")) {
        var g = r.toLowerCase();
        r === "defaultValue" && "value" in e && e.value == null ? r = "value" : r === "download" && !(6815 + 1363 * -5) === a ? a = "" : g === "ondoubleclick" ? r = "ondblclick" : g !== "onchange" || n !== "input" && n !== "textarea" || p0(e.type) ? g === "onfocus" ? r = "onfocusin" : g === "onblur" ? r = "onfocusout" : C0.test(r) ? r = g : -(-394 + 1651 * 3 + -4558) === n.indexOf("-") && u0.test(r) ? r = r.replace(d0, "-$&").toLowerCase() : a === null && (a = void (1451 + 3 * 130 + 1841 * -1)) : g = r = "oninput", g === "oninput" && i[r = g] && (r = "oninputCapture"), i[r] = a;
      }
    }
    n == "select" && i.multiple && Array.isArray(i.value) && (i.value = gt(e.children).forEach(function(s) {
      s.props.selected = -(16 * 508 + -9 * 143 + 40 * -171) != i.value.indexOf(s.props.value);
    })), n == "select" && i.defaultValue != null && (i.value = gt(e.children).forEach(function(s) {
      s.props.selected = i.multiple ? -(4905 * 2 + 12 * -761 + 1 * -677) != i.defaultValue.indexOf(s.props.value) : i.defaultValue == s.props.value;
    })), e.class && !e.className ? (i.class = e.class, Object.defineProperty(i, "className", v0)) : (e.className && !e.class || e.class && e.className) && (i.class = i.className = e.className), o.props = i;
  }(t), t.$$typeof = cg, ia && ia(t);
};
var oa = G.__r;
G.__r = function(t) {
  oa && oa(t), zo = t.__c;
};
var ra = G.diffed;
G.diffed = function(t) {
  ra && ra(t);
  var o = t.props, e = t.__e;
  e != null && t.type === "textarea" && "value" in o && o.value !== e.value && (e.value = o.value == null ? "" : o.value), zo = null;
};
var xg = {};
xg.readContext = function(t) {
  return zo.__n[t.__c].props.value;
};
var Ig = {};
Ig.current = xg;
var lg = {};
lg.ReactCurrentDispatcher = Ig;
var w0 = lg;
function B0(t) {
  return me.bind(null, t);
}
function Zi(t) {
  return !!t && t.$$typeof === cg;
}
function S0(t) {
  return Zi(t) && t.type === De;
}
function G0(t) {
  return Zi(t) ? Mo.apply(null, arguments) : t;
}
function Z0(t) {
  return !!t.__k && (dt(null, t), !(-3201 * -1 + 3799 + 250 * -28));
}
function k0(t) {
  return t && (t.base || -1765 * -5 + 5960 + -1344 * 11 === t.nodeType && t) || null;
}
var K0 = function(t, o) {
  return t(o);
}, H0 = function(t, o) {
  return t(o);
}, W0 = De;
function ug(t) {
  t();
}
function O0(t) {
  return t;
}
function R0() {
  return [!1, ug];
}
var V0 = Si, P0 = Zi;
function E0(t, o) {
  var e = o(), n = Le({ h: { __: e, v: o } }), i = n[2497 + -861 * 2 + -775].h, r = n[344 * 20 + -149 * -23 + 1 * -10306];
  return Si(function() {
    i.__ = e, i.v = o, eo(i) && r({ h: i });
  }, [t, e, o]), be(function() {
    return eo(i) && r({ h: i }), t(function() {
      eo(i) && r({ h: i });
    });
  }, [t]), e;
}
function eo(t) {
  var o, e, n = t.v, i = t.__;
  try {
    var r = n();
    return !((o = i) === (e = r) && (-562 + 2 * 281 !== o || (-46 * -69 + -4664 * 1 + 213 * 7) / o == (1 * -6529 + -3 * 1949 + 12377 * 1) / e) || o != o && e != e);
  } catch {
    return !(-9613 + 1 * 3264 + 6349);
  }
}
var N = {};
N.useState = Le, N.useId = n0, N.useReducer = ng, N.useEffect = be, N.useLayoutEffect = Si, N.useInsertionEffect = V0, N.useTransition = R0, N.useDeferredValue = O0, N.useSyncExternalStore = E0, N.startTransition = ug, N.useRef = Wt, N.useImperativeHandle = t0, N.useMemo = Ue, N.useCallback = Ci, N.useContext = Gi, N.useDebugValue = po, N.version = "17.0.2", N.Children = g0, N.render = f0, N.hydrate = h0, N.unmountComponentAtNode = Z0, N.createPortal = l0, N.createElement = me, N.createContext = Jo, N.createFactory = B0, N.cloneElement = G0, N.createRef = Fs, N.Fragment = De, N.isValidElement = Zi, N.isElement = P0, N.isFragment = S0, N.findDOMNode = k0, N.Component = Oe, N.PureComponent = mo, N.memo = r0, N.forwardRef = rg, N.flushSync = H0, N.unstable_batchedUpdates = K0, N.StrictMode = W0, N.Suspense = ni, N.SuspenseList = fn, N.lazy = c0, N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = w0;
var kt = N, Y0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function N0(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function L0(t) {
  return t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function F0(t) {
  return t && Object.prototype.hasOwnProperty.call(t, "default") && Object.keys(t).length === 1 ? t.default : t;
}
function D0(t) {
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
const T0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: Y0,
  getAugmentedNamespace: D0,
  getDefaultExportFromCjs: N0,
  getDefaultExportFromNamespaceIfNotNamed: F0,
  getDefaultExportFromNamespaceIfPresent: L0
}, Symbol.toStringTag, { value: "Module" }));
var X0 = function(o, e, n, i) {
  var r = n ? n.call(i, o, e) : void 0;
  if (r !== void (307 + -1 * -3341 + -3648))
    return !!r;
  if (o === e)
    return !0;
  if (typeof o != "object" || !o || typeof e != "object" || !e)
    return !1;
  var a = Object.keys(o), g = Object.keys(e);
  if (a.length !== g.length)
    return !1;
  for (var s = Object.prototype.hasOwnProperty.bind(e), I = 2578 * 1 + 2339 * 3 + -19 * 505; I < a.length; I++) {
    var C = a[I];
    if (!s(C))
      return !1;
    var u = o[C], p = e[C];
    if (r = n ? n.call(i, u, p, C) : void (95 * 82 + 1 * 2963 + 10753 * -1), r === !1 || r === void (5 * 103 + -2645 + -6 * -355) && u !== p)
      return !1;
  }
  return !0;
};
const j0 = T0.getDefaultExportFromCjs(X0);
var $ = "-ms-", vn = "-moz-", J = "-webkit-", Cg = "comm", ki = "rule", $o = "decl", M0 = "@import", dg = "@keyframes", J0 = "@layer", U0 = Math.abs, qo = String.fromCharCode, bo = Object.assign;
function Q0(t, o) {
  return Ie(t, -7256 + -17 * -221 + 3499 * 1) ^ -2437 + -1241 * -2 ? (((o << 2 ^ Ie(t, -8836 + -5167 * -1 + 1223 * 3)) << 8 * 711 + -1065 + -4621 ^ Ie(t, -888 + -1 * -889)) << 2 ^ Ie(t, 2)) << 7590 + -4327 * -2 + -2707 * 6 ^ Ie(t, 618 * -2 + -683 * 3 + -1644 * -2) : 9790 + 1698 * 3 + -14884;
}
function Ag(t) {
  return t.trim();
}
function ot(t, o) {
  return (t = o.exec(t)) ? t[-2 * 1349 + -2039 + 4737] : t;
}
function L(t, o, e) {
  return t.replace(o, e);
}
function oi(t, o) {
  return t.indexOf(o);
}
function Ie(t, o) {
  return t.charCodeAt(o) | 1261 + -1615 * 1 + -118 * -3;
}
function _t(t, o, e) {
  return t.slice(o, e);
}
function Je(t) {
  return t.length;
}
function pg(t) {
  return t.length;
}
function hn(t, o) {
  return o.push(t), t;
}
function z0(t, o) {
  return t.map(o).join("");
}
function aa(t, o) {
  return t.filter(function(e) {
    return !ot(e, o);
  });
}
var Ki = -29 * 149 + 8137 + -3815, en = 130 * 50 + -2648 + -3851, fg = -2852 + 151 * -7 + -3909 * -1, Ve = 0, ge = -723 * -1 + -1 * -821 + -1 * 1544, gn = "";
function Hi(t, o, e, n, i, r, a, g) {
  var s = {};
  return s.value = t, s.root = o, s.parent = e, s.type = n, s.props = i, s.children = r, s.line = Ki, s.column = en, s.length = a, s.return = "", s.siblings = g, s;
}
function It(t, o) {
  return bo(Hi("", null, null, "", null, null, 12391 + 1 * -12391, t.siblings), t, { length: -t.length }, o);
}
function Tt(t) {
  for (; t.root; )
    t = It(t.root, { children: [t] });
  hn(t, t.siblings);
}
function $0() {
  return ge;
}
function q0() {
  return ge = Ve > 10021 + 1 * -10021 ? Ie(gn, --Ve) : 0, en--, ge === 4099 * 2 + 74 * 5 + -8558 && (en = 6667 + 9037 * -1 + -1 * -2371, Ki--), ge;
}
function Fe() {
  return ge = Ve < fg ? Ie(gn, Ve++) : -1 * -5534 + -5244 + 29 * -10, en++, ge === 10 && (en = 7631 * 1 + -1045 + 3 * -2195, Ki++), ge;
}
function Gt() {
  return Ie(gn, Ve);
}
function ri() {
  return Ve;
}
function Wi(t, o) {
  return _t(gn, t, o);
}
function yo(t) {
  switch (t) {
    case 68 * -67 + 5837 * -1 + 10393:
    case 5742 + 1 * -5733:
    case 2349 + -8187 * 1 + 34 * 172:
    case 4057 * 2 + -6758 + -1343:
    case 32:
      return 5;
    case 4 * 1164 + -5361 * 1 + 738:
    case -4993 * 1 + 307 * 15 + 1 * 431:
    case 1 * 4303 + -2727 + 4 * -383:
    case -1 * -3278 + 1 * -5005 + 1774:
    case 8941 * -1 + 19 * 7 + -4435 * -2:
    case 540 * -2 + -17 * 566 + 10766:
    case -23 * 3 + -1774 * 3 + -9 * -613:
    case 181 * 17 + 4442 * 1 + 2 * -3730:
    case 5988 + -970 * 1 + 445 * -11:
    case -4428 + 9 * 393 + 1016:
      return -1 * 9725 + 1 * -5155 + 14884;
    case 4 * 202 + -2 * 4096 + 7442:
      return -370 + -1 * 6991 + -7 * -1052;
    case 10 * 850 + 1 * -9413 + 947:
    case 963 * -2 + -9552 + -3839 * -3:
    case -6 * 315 + 2443 + -513:
    case -13586 + 13677 * 1:
      return 2 * 55 + 2 * 2699 + -5506;
    case 1127 + 543 * -2:
    case 9231 + -83 * -73 + 1 * -15197:
      return -29 * 119 + 2750 + 13 * 54;
  }
  return -4531 + -1 * 4021 + -2 * -4276;
}
function _0(t) {
  return Ki = en = -7573 + -152 * -26 + -3622 * -1, fg = Je(gn = t), Ve = -4183 * 1 + 2748 + 1435, [];
}
function ec(t) {
  return gn = "", t;
}
function to(t) {
  return Ag(Wi(Ve - (-19 * -56 + 484 + -1547), vo(t === 91 ? t + (4775 * 1 + 6002 + -431 * 25) : t === -7246 + 7286 * 1 ? t + (-9318 * -1 + 7910 + -17227 * 1) : t)));
}
function tc(t) {
  for (; (ge = Gt()) && ge < -947 * -10 + -3160 + -6277; )
    Fe();
  return yo(t) > 9 * -953 + -11 * 879 + 18248 || yo(ge) > -1305 * 4 + -447 * 17 + 3 * 4274 ? "" : " ";
}
function nc(t, o) {
  for (; --o && Fe() && !(ge < 48 || ge > -10113 + 5 * 2043 || ge > -17 * -502 + 2 * 1552 + -11581 && ge < -8302 * 1 + -2590 + -1 * -10957 || ge > -9710 + 3831 * -1 + 13 * 1047 && ge < -9 * -536 + -1364 + -3363); )
    ;
  return Wi(t, ri() + (o < 11182 + -11 * 1016 && Gt() == 5997 + -1 * 5965 && Fe() == 16 * 290 + 9974 + -7291 * 2));
}
function vo(t) {
  for (; Fe(); )
    switch (ge) {
      case t:
        return Ve;
      case -4231 + 314 * 31 + -3 * 1823:
      case 11 * 293 + 7 * 1427 + -13173:
        t !== 4998 + 68 * -73 && t !== -3711 + 224 * -14 + 6886 && vo(ge);
        break;
      case 40:
        t === 1356 + -1 * 1315 && vo(t);
        break;
      case -3638 * 2 + -18 * -241 + 15 * 202:
        Fe();
        break;
    }
  return Ve;
}
function ic(t, o) {
  for (; Fe() && t + ge !== 2706 + -5 * -421 + -4764 + 10; )
    if (t + ge === -13467 + -9 * -1501 + (2503 + -1 * 2461) && Gt() === 9497 * 1 + -1395 + -45 * 179)
      break;
  return "/*" + Wi(o, Ve - (-3603 + 68 * 53)) + "*" + qo(t === 127 + 2422 * 4 + -9768 ? t : Fe());
}
function oc(t) {
  for (; !yo(Gt()); )
    Fe();
  return Wi(t, Ve);
}
function rc(t) {
  return ec(ai("", null, null, null, [""], t = _0(t), 6793 + -83 * 89 + 99 * 6, [0], t));
}
function ai(t, o, e, n, i, r, a, g, s) {
  for (var I = 0, C = 0, u = a, p = -43 * 54 + -3895 + 6217, f = -16 * 538 + 3041 * 2 + 3 * 842, v = 1 * 8456 + -2 * 3388 + -1680 * 1, w = 733 + -1979 * -3 + -6669, E = -1 * 2347 + 2121 * -1 + 4469, k = -9713 + 22 * 421 + 452, O = -4223 * 1 + 1 * -1698 + 5921, R = "", U = i, D = r, j = n, Z = R; E; )
    switch (v = O, O = Fe()) {
      case 2954 + -1 * -6078 + -4 * 2248:
        if (v != 5927 + -1 * 6635 + -3 * -272 && Ie(Z, u - (301 * -1 + -5736 + 6038)) == 58) {
          oi(Z += L(to(O), "&", "&\f"), "&\f") != -1 && (k = -(14828 + 1 * -14827));
          break;
        }
      case 2623 + 863 * -3:
      case 54 * -158 + 5931 + 330 * 8:
      case 9851 * -1 + -5066 + -28 * -536:
        Z += to(O);
        break;
      case 9006 + 8997 * -1:
      case -4199 + -1 * -5555 + -1346:
      case -2 * 3678 + 2520 + -373 * -13:
      case -1 * 477 + -3 * 2503 + 8018:
        Z += tc(v);
        break;
      case 4013 + 5 * 715 + -7496:
        Z += nc(ri() - (-7973 + 1 * 6287 + -1 * -1687), 1167 * 2 + -6236 + -3 * -1303);
        continue;
      case 13951 + -79 * 176:
        switch (Gt()) {
          case -2557 + -1658 * 1 + -387 * -11:
          case -6667 + 8669 * 1 + -1955:
            hn(ac(ic(Fe(), ri()), o, e, s), s);
            break;
          default:
            Z += "/";
        }
        break;
      case (-1007 + 151 * 4 + 526) * w:
        g[I++] = Je(Z) * k;
      case (-1800 + -4 * -1113 + -2527) * w:
      case 2373 * 2 + 601 * 1 + 8 * -661:
      case -4883 * 1 + -2 * 4854 + -14591 * -1:
        switch (O) {
          case 980 + 3 * 803 + -3389:
          case 8711 * -1 + -7975 + 16811:
            E = -428 * 15 + 8835 + -2415;
          case 4692 * -2 + 9029 + 414 * 1 + C:
            k == -(-8653 + 103 * -19 + 1 * 10611) && (Z = L(Z, /\f/g, "")), f > 9857 * -1 + 1 * 6126 + 41 * 91 && Je(Z) - u && hn(f > -2 * 3881 + 6290 + 1504 ? sa(Z + ";", n, e, u - (-3898 + -1 * -3899), s) : sa(L(Z, " ", "") + ";", n, e, u - (-1422 + -1357 * -2 + -30 * 43), s), s);
            break;
          case -1 * -4871 + -58 * -35 + -6842:
            Z += ";";
          default:
            if (hn(j = ga(Z, o, e, I, C, i, g, R, U = [], D = [], u, r), r), O === -7158 + -80 * -37 + 29 * 149)
              if (C === 90 * 52 + -1 * -5274 + -9954)
                ai(Z, o, j, j, U, r, u, g, D);
              else
                switch (p === 847 + -1 * -3869 + -1539 * 3 && Ie(Z, 357 + 3 * -118) === -11625 + -2347 * -5 ? 100 : p) {
                  case 4 * -274 + 2785 + -1589 * 1:
                  case 4633 + 213 * -19 + -478:
                  case -3 * 541 + -9583 * 1 + -31 * -365:
                  case -2137 * -1 + -5671 + 89 * 41:
                    ai(t, j, j, n && hn(ga(t, j, j, -7924 * 1 + -2205 + 7 * 1447, 0, i, g, R, i, U = [], u, D), D), i, D, u, g, n ? U : D);
                    break;
                  default:
                    ai(Z, j, j, j, [""], D, 0, g, D);
                }
        }
        I = C = f = 9470 * 1 + -16 * -288 + -14078, w = k = -482 * 1 + 1 * -1621 + 263 * 8, R = Z = "", u = a;
        break;
      case -14004 + -7031 * -2:
        u = -47 * 65 + 5079 + -2023 + Je(Z), f = v;
      default:
        if (w < -1721 + -1 * 2919 + 7 * 663) {
          if (O == 19 * -61 + 32 * 195 + -4958)
            --w;
          else if (O == -28 * 332 + 239 * 27 + 2968 && w++ == 5 * 130 + 1315 * 7 + -9855 && q0() == -1513 * -1 + -5 * 743 + 2327)
            continue;
        }
        switch (Z += qo(O), O * w) {
          case 2 * -4661 + 980 + 8380 * 1:
            k = C > 665 * -8 + -378 + 5698 ? -1 * 4676 + -2728 + -1481 * -5 : (Z += "\f", -(-45 * 3 + -9210 + 4673 * 2));
            break;
          case 858 * 10 + 33 * -109 + 4939 * -1:
            g[I++] = (Je(Z) - (25 * 351 + -701 + -8073)) * k, k = 4664 + 93 * 2 + -373 * 13;
            break;
          case 5 * -1801 + 22 * 213 + 4383:
            Gt() === -9637 + -1 * -9874 + -2 * 96 && (Z += to(Fe())), p = Gt(), C = u = Je(R = Z += oc(ri())), O++;
            break;
          case -2152 + 24 * 409 + -7619:
            v === -1188 + -53 * -83 + -3166 && Je(Z) == -271 * -31 + -1137 + 1 * -7262 && (w = -2049 + -66 * -3 + -3 * -617);
        }
    }
  return r;
}
function ga(t, o, e, n, i, r, a, g, s, I, C, u) {
  for (var p = i - 1, f = i === 2 * 2651 + 6567 + -1 * 11869 ? r : [""], v = pg(f), w = -2459 * -3 + -2871 + -4506, E = -3119 * -1 + -7704 + 4585, k = 0; w < n; ++w)
    for (var O = -43 * -129 + 2190 + -7737 * 1, R = _t(t, p + (1606 * 4 + 9 * 939 + 2 * -7437), p = U0(E = a[w])), U = t; O < v; ++O)
      (U = Ag(E > -4646 + 202 * 23 ? f[O] + " " + R : L(R, /&\f/g, f[O]))) && (s[k++] = U);
  return Hi(t, o, e, i === -5938 + -1 * 2953 + 8891 ? ki : g, s, I, C, u);
}
function ac(t, o, e, n) {
  return Hi(t, o, e, Cg, qo($0()), _t(t, 9097 + 17 * -535, -(11 * -177 + -6391 + -1668 * -5)), 970 + 46 * 92 + -289 * 18, n);
}
function sa(t, o, e, n, i) {
  return Hi(t, o, e, $o, _t(t, -5117 + -6134 * 1 + 11251 * 1, n), _t(t, n + (2651 + -265 * 10), -1), n, i);
}
function hg(t, o, e) {
  switch (Q0(t, o)) {
    case 7530 * -1 + -5247 + 1490 * 12:
      return J + "print-" + t + t;
    case -2573 + 962 * -3 + -2 * -5598:
    case -64 * -73 + 21 * -458 + 9147:
    case -1 * 243 + -605 + -115 * -35:
    case 3433:
    case 21 * 286 + 6229 * 1 + 10594 * -1:
    case 1058 + -8436 * -1 + -219 * 23:
    case 2921:
    case 1320 * 5 + -107 * -39 + -7 * 743:
    case -3477 * -1 + 6198 * -1 + -9077 * -1:
    case 1 * 1303 + 2003 * -3 + -2 * -5275:
    case -461 * -1 + -1 * 5441 + 8171:
    case -1 * 9123 + 5 * -2603 + 28783:
    case -2942 * 3 + -1405 + 13236:
    case -958 * 5 + 7231 + -395 * -10:
    case -10511 * 1 + 6589 + 9801:
    case 289 * -3 + 10019 + 3529 * -1:
    case -2943 * -1 + 7 * -62 + -49 * -74:
    case -2 * 4957 + -1 * 8761 + 23274:
    case 987 * -10 + 2 * -4418 + 23561:
    case -174 * -32 + 3030 * 2 + -3 * 2471:
    case -1512 + -353 * 4 + -139 * -67:
    case 1559 + -1680 * 5 + -5975 * -2:
    case 5365:
    case 8548 + 2111 * 2 + 2383 * -3:
    case 8 * 379 + 221 * 4 + -87:
      return J + t + t;
    case 131 * 55 + -188 + 1114 * -2:
      return vn + t + t;
    case -2 * 985 + -29 * 258 + 1 * 14801:
    case 1105 + 43 * -1 + -398 * -8:
    case 970 * 2 + -2719 + 9 * 621:
    case 207 * -55 + -155 * 88 + -299 * -107:
    case -7 * 1 + 938 * -1 + 3701 * 1:
      return J + t + vn + t + $ + t + t;
    case 9937 + 53 * 13 + -670 * 7:
      switch (Ie(t, o + (-86 * 85 + -79 * 62 + 12219 * 1))) {
        case 1 * -5574 + -776 + 4 * 1616:
          return J + t + $ + L(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        case -465 * 4 + -3 * 2368 + -28 * -324:
          return J + t + $ + L(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        case 796 + -751 * 1:
          return J + t + $ + L(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    case -1 * -61 + -5075 + 11842:
    case 1 * 7498 + -36 * -21 + 1993 * -2:
    case 1369 * 1 + 28 + 1506:
      return J + t + $ + t + t;
    case 6165:
      return J + t + $ + "flex-" + t + t;
    case -71 * -37 + 7743 + -1 * 5183:
      return J + t + L(t, /(\w+).+(:[^]+)/, J + "box-$1$2" + $ + "flex-$1$2") + t;
    case 5443:
      return J + t + $ + "flex-item-" + L(t, /flex-|-self/g, "") + (ot(t, /flex-|baseline/) ? "" : $ + "grid-row-" + L(t, /flex-|-self/g, "")) + t;
    case -2846 + 2507 * 3:
      return J + t + $ + "flex-line-pack" + L(t, /align-content|flex-|-self/g, "") + t;
    case -9153 + 241 * 61:
      return J + t + $ + L(t, "shrink", "negative") + t;
    case 7463 + -1697 * -2 + -15 * 371:
      return J + t + $ + L(t, "basis", "preferred-size") + t;
    case -2248 * 5 + -9491 * -1 + 7809:
      return J + "box-" + L(t, "-grow", "") + J + t + $ + L(t, "grow", "positive") + t;
    case -1691 * 1 + 9 * -57 + 6758:
      return J + L(t, /([^-])(transform)/g, "$1" + J + "$2") + t;
    case -1270 * 4 + 9025 + 2242 * 1:
      return L(L(L(t, /(zoom-|grab)/, J + "$1"), /(image-set)/, J + "$1"), t, "") + t;
    case -1 * -4099 + -8861 * -1 + -1 * 7465:
    case -8880 + -2497 * 4 + 22827:
      return L(t, /(image-set\([^]*)/, J + "$1$`$1");
    case 6845 * 1 + -16 * 179 + 987:
      return L(L(t, /(.+:)(flex-)?(.*)/, J + "box-pack:$3" + $ + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + J + t + t;
    case -3635 * -2 + 7595 + 15 * -711:
      if (!ot(t, /flex-|baseline/))
        return $ + "grid-column-align" + _t(t, o) + t;
      break;
    case -11510 + -2 * -7051:
    case -133 * 19 + 9250 + -3363:
      return $ + L(t, "template-", "") + t;
    case 383 * 11 + 3751 + -2 * 1790:
    case -283 + -87 * 61 + 2 * 4603:
      return e && e.some(function(n, i) {
        return o = i, ot(n.props, /grid-\w+-end/);
      }) ? ~oi(t + (e = e[o].value), "span") ? t : $ + L(t, "-start", "") + t + $ + "grid-row-span:" + (~oi(e, "span") ? ot(e, /\d+/) : +ot(e, /\d+/) - +ot(t, /\d+/)) + ";" : $ + L(t, "-start", "") + t;
    case -163 * 3 + 31 * 281 + -3326 * 1:
    case -1 * 2526 + 673 + 5981:
      return e && e.some(function(n) {
        return ot(n.props, /grid-\w+-start/);
      }) ? t : $ + L(L(t, "-end", "-span"), "span ", "") + t;
    case 2466 + -2 * -1103 + -1 * 577:
    case 3583:
    case 1 * 4042 + 5595 + -5569:
    case 4001 * -2 + 6619 * -1 + -1009 * -17:
      return L(t, /(.+)-inline(.+)/, J + "$1$2") + t;
    case -23083 + 7 * 4457:
    case 7059:
    case 5753:
    case 5535:
    case 445 * 14 + 4534 * 1 + -5319:
    case 5701:
    case -2045 + -38 * -131 + 2e3:
    case 397 + -535 * -8:
    case -1997 * 3 + 9357 + -197 * -11:
    case -1 * -9575 + -2445 + -149 * 9:
    case 12199 + -194 * 37:
    case 3847 + 2 * -769 + -2456 * -1:
      if (Je(t) - (-4824 + -5087 * -1 + -262 * 1) - o > 1 * 4857 + -4716 + -45 * 3)
        switch (Ie(t, o + (-18988 + -17 * -1117))) {
          case -31 * -217 + -2047 + -1 * 4571:
            if (Ie(t, o + (1940 + -121 * 16)) !== 45)
              break;
          case 9814 + -18 * -129 + -547 * 22:
            return L(t, /(.+:)(.+)-([^]+)/, "$1" + J + "$2-$3$1" + vn + (Ie(t, o + (8128 + 19 * -440 + 235 * 1)) == 1 * -6848 + -3 * 3253 + 16715 ? "$3" : "$2-$3")) + t;
          case -4822 + -553 * 1 + 5490:
            return ~oi(t, "stretch") ? hg(L(t, "stretch", "fill-available"), o, e) + t : t;
        }
      break;
    case -3785 * 1 + -105 * 37 + 12822:
    case 4439 + -1 * -1481:
      return L(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, i, r, a, g, s, I) {
        return $ + i + ":" + r + I + (a ? $ + i + "-span:" + (g ? s : +s - +r) + I : "") + t;
      });
    case -1 * -7697 + -1452 + -1296:
      if (Ie(t, o + (19 + -6 * 978 + 5 * 1171)) === -493 * -16 + -4171 + 29 * -124)
        return L(t, ":", ":" + J) + t;
      break;
    case 997 * 11 + 12876 + -17399:
      switch (Ie(t, Ie(t, -3393 + -1 * 9562 + 12969) === -2014 * -3 + 1836 + 21 * -373 ? -1926 + 27 * 72 : 1399 * 4 + 3661 * -1 + -1924)) {
        case -1 * -5957 + -8360 + 29 * 87:
          return L(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + J + (Ie(t, -9668 + -9 * 713 + 16099 * 1) === -8296 + 439 * 19 ? "inline-" : "") + "box$3$1" + J + "$2$3$1" + $ + "$2box$3") + t;
        case 9566 + -307 * 5 + -7931:
          return L(t, ":", ":" + $) + t;
      }
      break;
    case -17 * 280 + 9 * -5 + 10524:
    case 2647:
    case 4018 + -1883 * 1:
    case -9187 + -1 * 9907 + 23021 * 1:
    case -8464 + 1 * -6648 + 17503:
      return L(t, "scroll-", "scroll-snap-") + t;
  }
  return t;
}
function di(t, o) {
  for (var e = "", n = -52 * 190 + -785 + 10665; n < t.length; n++)
    e += o(t[n], n, t, o) || "";
  return e;
}
function gc(t, o, e, n) {
  switch (t.type) {
    case J0:
      if (t.children.length)
        break;
    case M0:
    case $o:
      return t.return = t.return || t.value;
    case Cg:
      return "";
    case dg:
      return t.return = t.value + "{" + di(t.children, n) + "}";
    case ki:
      if (!Je(t.value = t.props.join(",")))
        return "";
  }
  return Je(e = di(t.children, n)) ? t.return = t.value + "{" + e + "}" : "";
}
function sc(t) {
  var o = pg(t);
  return function(e, n, i, r) {
    for (var a = "", g = -6301 * -1 + -28 * -241 + -13049; g < o; g++)
      a += t[g](e, n, i, r) || "";
    return a;
  };
}
function cc(t) {
  return function(o) {
    o.root || (o = o.return) && t(o);
  };
}
function xc(t, o, e, n) {
  if (t.length > -(-1 * 3722 + -5 * 1321 + 10328) && !t.return)
    switch (t.type) {
      case $o:
        t.return = hg(t.value, t.length, e);
        return;
      case dg:
        return di([It(t, { value: L(t.value, "@", "@" + J) })], n);
      case ki:
        if (t.length)
          return z0(e = t.props, function(i) {
            switch (ot(i, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Tt(It(t, { props: [L(i, /:(read-\w+)/, ":" + vn + "$1")] }));
                var r = {};
                r.props = [i], Tt(It(t, r)), bo(t, { props: aa(e, n) });
                break;
              case "::placeholder":
                Tt(It(t, { props: [L(i, /:(plac\w+)/, ":" + J + "input-$1")] })), Tt(It(t, { props: [L(i, /:(plac\w+)/, ":" + vn + "$1")] })), Tt(It(t, { props: [L(i, /:(plac\w+)/, $ + "input-$1")] }));
                var a = {};
                a.props = [i], Tt(It(t, a)), bo(t, { props: aa(e, n) });
                break;
            }
            return "";
          });
    }
}
var Y = {};
Y.animationIterationCount = 1, Y.aspectRatio = 1, Y.borderImageOutset = 1, Y.borderImageSlice = 1, Y.borderImageWidth = 1, Y.boxFlex = 1, Y.boxFlexGroup = 1, Y.boxOrdinalGroup = 1, Y.columnCount = 1, Y.columns = 1, Y.flex = 1, Y.flexGrow = 1, Y.flexPositive = 1, Y.flexShrink = 1, Y.flexNegative = 1, Y.flexOrder = 1, Y.gridRow = 1, Y.gridRowEnd = 1, Y.gridRowSpan = 1, Y.gridRowStart = 1, Y.gridColumn = 1, Y.gridColumnEnd = 1, Y.gridColumnSpan = 1, Y.gridColumnStart = 1, Y.msGridRow = 1, Y.msGridRowSpan = 1, Y.msGridColumn = 1, Y.msGridColumnSpan = 1, Y.fontWeight = 1, Y.lineHeight = 1, Y.opacity = 1, Y.order = 1, Y.orphans = 1, Y.tabSize = 1, Y.widows = 1, Y.zIndex = 1, Y.zoom = 1, Y.WebkitLineClamp = 1, Y.fillOpacity = 1, Y.floodOpacity = 1, Y.stopOpacity = 1, Y.strokeDasharray = 1, Y.strokeDashoffset = 1, Y.strokeMiterlimit = 1, Y.strokeOpacity = 1, Y.strokeWidth = 1;
var Ic = Y, X = {}, Kt = typeof process < "u" && void (44 * 109 + -8705 + 1 * 3909) !== X && (X.REACT_APP_SC_ATTR || X.SC_ATTR) || "data-styled", _o = typeof window < "u" && "HTMLElement" in window, lc = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (1982 + 2 * -991) !== X && void (3 * -1433 + 116 * -82 + 7 * 1973) !== X.REACT_APP_SC_DISABLE_SPEEDY && X.REACT_APP_SC_DISABLE_SPEEDY !== "" ? X.REACT_APP_SC_DISABLE_SPEEDY !== "false" && X.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && X !== void 0 && X.SC_DISABLE_SPEEDY !== void 0 && X.SC_DISABLE_SPEEDY !== "" ? X.SC_DISABLE_SPEEDY !== "false" && X.SC_DISABLE_SPEEDY : X.NODE_ENV !== "production"), ca = /invalid hook call/i, Mn = /* @__PURE__ */ new Set(), uc = function(t, o) {
  if (X.NODE_ENV !== "production") {
    var e = o ? ' with the id of "'.concat(o, '"') : "", n = "The component ".concat(t).concat(e, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, i = console.error;
    try {
      var r = !0;
      console.error = function(a) {
        for (var g = [], s = 1; s < arguments.length; s++)
          g[s - 1] = arguments[s];
        ca.test(a) ? (r = !1, Mn.delete(n)) : i.apply(void (-1 * 3722 + -3799 + 2507 * 3), $t([a], g, !1));
      }, Wt(), r && !Mn.has(n) && (console.warn(n), Mn.add(n));
    } catch (a) {
      ca.test(a.message) && Mn.delete(n);
    } finally {
      console.error = i;
    }
  }
}, Oi = Object.freeze([]), tn = Object.freeze({});
function Cc(t, o, e) {
  return void (-4051 * -1 + 3849 + 1975 * -4) === e && (e = tn), t.theme !== e.theme && t.theme || o || e.theme;
}
var wo = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), dc = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ac = /(^-|-$)/g;
function xa(t) {
  return t.replace(dc, "-").replace(Ac, "");
}
var pc = /(a)(d)/gi, Ia = function(t) {
  return String.fromCharCode(t + (t > -3486 + -24 * 344 + -287 * -41 ? 1 * 7538 + -19 * -491 + -601 * 28 : -102 * 74 + 16 * 491 + 211 * -1));
};
function Bo(t) {
  var o, e = "";
  for (o = Math.abs(t); o > 52; o = o / 52 | -839 * -5 + 2125 * 1 + 80 * -79)
    e = Ia(o % (-1748 + 1 * 3543 + -1743)) + e;
  return (Ia(o % (-11 * -233 + 7893 + 68 * -153)) + e).replace(pc, "$1-$2");
}
var no, wt = function(t, o) {
  for (var e = o.length; e; )
    t = (1090 + -2 * 4874 + 8691) * t ^ o.charCodeAt(--e);
  return t;
}, mg = function(t) {
  return wt(3468 + 1 * -3833 + 2 * 2873, t);
};
function fc(t) {
  return Bo(mg(t) >>> -9914 + 1793 * 5 + -73 * -13);
}
function bg(t) {
  return X.NODE_ENV !== "production" && typeof t == "string" && t || t.displayName || t.name || "Component";
}
function io(t) {
  return typeof t == "string" && (X.NODE_ENV === "production" || t.charAt(0) === t.charAt(-73 * -9 + 460 * -13 + -5323 * -1).toLowerCase());
}
var He = {};
He.childContextTypes = !0, He.contextType = !0, He.contextTypes = !0, He.defaultProps = !0, He.displayName = !0, He.getDefaultProps = !0, He.getDerivedStateFromError = !0, He.getDerivedStateFromProps = !0, He.mixins = !0, He.propTypes = !0, He.type = !0;
var lt = {};
lt.name = !0, lt.length = !0, lt.prototype = !0, lt.caller = !0, lt.callee = !0, lt.arguments = !0, lt.arity = !0;
var yt = {};
yt.$$typeof = !0, yt.compare = !0, yt.defaultProps = !0, yt.displayName = !0, yt.propTypes = !0, yt.type = !0;
var jt = {};
jt.$$typeof = !0, jt.render = !0, jt.defaultProps = !0, jt.displayName = !0, jt.propTypes = !0;
var yg = typeof Symbol == "function" && Symbol.for, vg = yg ? Symbol.for("react.memo") : 14582 + -2797 * -3 + 37142, hc = yg ? Symbol.for("react.forward_ref") : 37415 + -5769 * -3 + 1 * 5390, mc = He, bc = lt, wg = yt, yc = ((no = {})[hc] = jt, no[vg] = wg, no);
function la(t) {
  return ("type" in (o = t) && o.type.$$typeof) === vg ? wg : "$$typeof" in t ? yc[t.$$typeof] : mc;
  var o;
}
var vc = Object.defineProperty, wc = Object.getOwnPropertyNames, ua = Object.getOwnPropertySymbols, Bc = Object.getOwnPropertyDescriptor, Sc = Object.getPrototypeOf, Ca = Object.prototype;
function Bg(t, o, e) {
  if (typeof o != "string") {
    if (Ca) {
      var n = Sc(o);
      n && n !== Ca && Bg(t, n, e);
    }
    var i = wc(o);
    ua && (i = i.concat(ua(o)));
    for (var r = la(t), a = la(o), g = 4904 + -2 * -4481 + -13866; g < i.length; ++g) {
      var s = i[g];
      if (!(s in bc || e && e[s] || a && s in a || r && s in r)) {
        var I = Bc(o, s);
        try {
          vc(t, s, I);
        } catch {
        }
      }
    }
  }
  return t;
}
function nn(t) {
  return typeof t == "function";
}
function er(t) {
  return typeof t == "object" && "styledComponentId" in t;
}
function St(t, o) {
  return t && o ? "".concat(t, " ").concat(o) : t || o || "";
}
function da(t, o) {
  if (455 + -47 * 125 + 5420 === t.length)
    return "";
  for (var e = t[-663 * 15 + -7759 * 1 + 17704], n = 1; n < t.length; n++)
    e += o ? o + t[n] : t[n];
  return e;
}
function on(t) {
  return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
}
function So(t, o, e) {
  if (void (-3309 * -3 + 5932 + -15859) === e && (e = !1), !e && !on(t) && !Array.isArray(t))
    return o;
  if (Array.isArray(o))
    for (var n = -113 * 74 + -2 * -3034 + 2294; n < o.length; n++)
      t[n] = So(t[n], o[n]);
  else if (on(o))
    for (var n in o)
      t[n] = So(t[n], o[n]);
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
var Gc = X.NODE_ENV !== "production" ? ce : {};
function Zc() {
  for (var t = [], o = -8719 + -1186 * 7 + 1 * 17021; o < arguments.length; o++)
    t[o] = arguments[o];
  for (var e = t[1 * 8203 + 7489 + -15692], n = [], i = -4193 + 2 * 2097, r = t.length; i < r; i += 8537 * 1 + 8127 + -16663)
    n.push(t[i]);
  return n.forEach(function(a) {
    e = e.replace(/%[a-z]/, a);
  }), e;
}
function sn(t) {
  for (var o = [], e = -9422 + -2279 * -2 + 4865; e < arguments.length; e++)
    o[e - (35 * 277 + 7945 + -17639)] = arguments[e];
  return X.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(o.length > -439 * 11 + -2363 + 7192 ? " Args: ".concat(o.join(", ")) : "")) : new Error(Zc.apply(void 0, $t([Gc[t]], o, !1)).trim());
}
var kc = function() {
  function t(o) {
    this.groupSizes = new Uint32Array(-7228 * -1 + 3 * 244 + -196 * 38), this.length = 5010 + 1 * 3661 + 41 * -199, this.tag = o;
  }
  return t.prototype.indexOfGroup = function(o) {
    for (var e = 12864 + 268 * -48, n = 6537 + -6537 * 1; n < o; n++)
      e += this.groupSizes[n];
    return e;
  }, t.prototype.insertRules = function(o, e) {
    if (o >= this.groupSizes.length) {
      for (var n = this.groupSizes, i = n.length, r = i; o >= r; )
        if ((r <<= -37 * -267 + 24 * -112 + 5 * -1438) < 2 * -857 + 51 * 71 + 1 * -1907)
          throw sn(31 * 209 + 1 * 639 + -7102 * 1, "".concat(o));
      this.groupSizes = new Uint32Array(r), this.groupSizes.set(n), this.length = r;
      for (var a = i; a < r; a++)
        this.groupSizes[a] = -5905 + -1 * 8877 + 14782;
    }
    for (var g = this.indexOfGroup(o + (-3944 * 2 + -7396 + 15285)), s = (a = -1 * -3229 + 3379 * -1 + 150, e.length); a < s; a++)
      this.tag.insertRule(g, e[a]) && (this.groupSizes[o]++, g++);
  }, t.prototype.clearGroup = function(o) {
    if (o < this.length) {
      var e = this.groupSizes[o], n = this.indexOfGroup(o), i = n + e;
      this.groupSizes[o] = -621 + 1 * -1404 + 2025;
      for (var r = n; r < i; r++)
        this.tag.deleteRule(n);
    }
  }, t.prototype.getGroup = function(o) {
    var e = "";
    if (o >= this.length || -107 * 10 + -1869 + 2939 === this.groupSizes[o])
      return e;
    for (var n = this.groupSizes[o], i = this.indexOfGroup(o), r = i + n, a = i; a < r; a++)
      e += "".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);
    return e;
  }, t;
}(), gi = /* @__PURE__ */ new Map(), Ai = /* @__PURE__ */ new Map(), si = 1, Jn = function(t) {
  if (gi.has(t))
    return gi.get(t);
  for (; Ai.has(si); )
    si++;
  var o = si++;
  if (X.NODE_ENV !== "production" && ((-5330 + -10 * -287 + -6 * -410 | o) < -7 * 291 + -5562 + -2533 * -3 || o > -3 * 190429669 + -188142383 + 1833173214))
    throw sn(1 * 4659 + 1142 * 5 + -10353, "".concat(o));
  return gi.set(t, o), Ai.set(o, t), o;
}, Kc = function(t, o) {
  si = o + (2133 + -1 * 9404 + 808 * 9), gi.set(t, o), Ai.set(o, t);
}, Hc = "style[".concat(Kt, "][").concat("data-styled-version", '="').concat("6.1.1", '"]'), Wc = new RegExp("^".concat(Kt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Oc = function(t, o, e) {
  for (var n, i = e.split(","), r = -3785 + 43 * -139 + -9762 * -1, a = i.length; r < a; r++)
    (n = i[r]) && t.registerName(o, n);
}, Rc = function(t, o) {
  for (var e, n = ((e = o.textContent) !== null && void (7777 + 1 * -4217 + -445 * 8) !== e ? e : "").split(`/*!sc*/
`), i = [], r = 2611 * 1 + 9660 + 7 * -1753, a = n.length; r < a; r++) {
    var g = n[r].trim();
    if (g) {
      var s = g.match(Wc);
      if (s) {
        var I = 0 | parseInt(s[1], 10), C = s[-11675 + -11677 * -1];
        -9284 + 5813 * 1 + 3471 !== I && (Kc(C, I), Oc(t, C, s[2258 + 7 * -164 + -1107 * 1]), t.getTag().insertRules(I, i)), i.length = -7062 + 66 * 107;
      } else
        i.push(g);
    }
  }
};
function Vc() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Sg = function(t) {
  var o = document.head, e = t || o, n = document.createElement("style"), i = function(g) {
    var s = Array.from(g.querySelectorAll("style[".concat(Kt, "]")));
    return s[s.length - (9070 + 1 * 3829 + -12898)];
  }(e), r = i !== void 0 ? i.nextSibling : null;
  n.setAttribute(Kt, "active"), n.setAttribute("data-styled-version", "6.1.1");
  var a = Vc();
  return a && n.setAttribute("nonce", a), e.insertBefore(n, r), n;
}, Pc = function() {
  function t(o) {
    this.element = Sg(o), this.element.appendChild(document.createTextNode("")), this.sheet = function(e) {
      if (e.sheet)
        return e.sheet;
      for (var n = document.styleSheets, i = 0, r = n.length; i < r; i++) {
        var a = n[i];
        if (a.ownerNode === e)
          return a;
      }
      throw sn(38 * -8 + -3838 + 4159);
    }(this.element), this.length = -1 * -6621 + -1 * -9645 + 2711 * -6;
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
}(), Ec = function() {
  function t(o) {
    this.element = Sg(o), this.nodes = this.element.childNodes, this.length = 9625 + -4385 * -2 + 13 * -1415;
  }
  return t.prototype.insertRule = function(o, e) {
    if (o <= this.length && o >= 0) {
      var n = document.createTextNode(e);
      return this.element.insertBefore(n, this.nodes[o] || null), this.length++, !0;
    }
    return !1;
  }, t.prototype.deleteRule = function(o) {
    this.element.removeChild(this.nodes[o]), this.length--;
  }, t.prototype.getRule = function(o) {
    return o < this.length ? this.nodes[o].textContent : "";
  }, t;
}(), Yc = function() {
  function t(o) {
    this.rules = [], this.length = -4037 + 1 * -5011 + 9048;
  }
  return t.prototype.insertRule = function(o, e) {
    return o <= this.length && (this.rules.splice(o, 1 * 5065 + 8531 * 1 + -13596, e), this.length++, !0);
  }, t.prototype.deleteRule = function(o) {
    this.rules.splice(o, -4346 * -2 + -529 * -1 + -4 * 2305), this.length--;
  }, t.prototype.getRule = function(o) {
    return o < this.length ? this.rules[o] : "";
  }, t;
}(), Aa = _o, Nc = { isServer: !_o, useCSSOMInjection: !lc }, Gg = function() {
  function t(o, e, n) {
    void (9609 + 9609 * -1) === o && (o = tn), void (-2 * 2390 + -9341 + 1 * 14121) === e && (e = {});
    var i = this;
    this.options = ve(ve({}, Nc), o), this.gs = e, this.names = new Map(n), this.server = !!o.isServer, !this.server && _o && Aa && (Aa = !1, function(r) {
      for (var a = document.querySelectorAll(Hc), g = -7 * 289 + -2 * 1449 + 133 * 37, s = a.length; g < s; g++) {
        var I = a[g];
        I && I.getAttribute(Kt) !== "active" && (Rc(r, I), I.parentNode && I.parentNode.removeChild(I));
      }
    }(this)), tr(this, function() {
      return function(r) {
        for (var a = r.getTag(), g = a.length, s = "", I = function(u) {
          var p = function(k) {
            return Ai.get(k);
          }(u);
          if (p === void 0)
            return "continue";
          var f = r.names.get(p), v = a.getGroup(u);
          if (void (1414 + 14 * -101) === f || 6 * 743 + 2855 + -7313 * 1 === v.length)
            return "continue";
          var w = "".concat(Kt, ".g").concat(u, '[id="').concat(p, '"]'), E = "";
          void (2154 + -32 * -71 + -4426) !== f && f.forEach(function(k) {
            k.length > -2 * 4087 + 4079 * -1 + 12253 && (E += "".concat(k, ","));
          }), s += "".concat(v).concat(w, '{content:"').concat(E, '"}').concat(`/*!sc*/
`);
        }, C = -2373 * -1 + -6752 * 1 + -151 * -29; C < g; C++)
          I(C);
        return s;
      }(i);
    });
  }
  return t.registerId = function(o) {
    return Jn(o);
  }, t.prototype.reconstructWithOptions = function(o, e) {
    return void (53 * -131 + -1618 * -4 + 471) === e && (e = !0), new t(ve(ve({}, this.options), o), this.gs, e && this.names || void (-1187 * -7 + -337 * -5 + -4997 * 2));
  }, t.prototype.allocateGSInstance = function(o) {
    return this.gs[o] = (this.gs[o] || -1 * 9773 + -1285 + 11058) + (-16 * 67 + 19 * -75 + 2498);
  }, t.prototype.getTag = function() {
    return this.tag || (this.tag = (o = function(e) {
      var n = e.useCSSOMInjection, i = e.target;
      return e.isServer ? new Yc(i) : n ? new Pc(i) : new Ec(i);
    }(this.options), new kc(o)));
    var o;
  }, t.prototype.hasNameForId = function(o, e) {
    return this.names.has(o) && this.names.get(o).has(e);
  }, t.prototype.registerName = function(o, e) {
    if (Jn(o), this.names.has(o))
      this.names.get(o).add(e);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(e), this.names.set(o, n);
    }
  }, t.prototype.insertRules = function(o, e, n) {
    this.registerName(o, e), this.getTag().insertRules(Jn(o), n);
  }, t.prototype.clearNames = function(o) {
    this.names.has(o) && this.names.get(o).clear();
  }, t.prototype.clearRules = function(o) {
    this.getTag().clearGroup(Jn(o)), this.clearNames(o);
  }, t.prototype.clearTag = function() {
    this.tag = void (12855 + -12855 * 1);
  }, t;
}(), Lc = /&/g, Fc = /^\s*\/\/.*$/gm;
function Zg(t, o) {
  return t.map(function(e) {
    return e.type === "rule" && (e.value = "".concat(o, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(o, " ")), e.props = e.props.map(function(n) {
      return "".concat(o, " ").concat(n);
    })), Array.isArray(e.children) && e.type !== "@keyframes" && (e.children = Zg(e.children, o)), e;
  });
}
function kg(t) {
  var o, e, n, i = t === void 0 ? tn : t, r = i.options, a = void (-485 * 1 + -9316 * -1 + 1 * -8831) === r ? tn : r, g = i.plugins, s = void (7446 * 1 + -1 * -2887 + -1 * 10333) === g ? Oi : g, I = function(p, f, v) {
    return v === e || v.startsWith(e) && v.endsWith(e) && v.replaceAll(e, "").length > 1 * 3583 + 6102 + -1937 * 5 ? ".".concat(o) : p;
  }, C = s.slice();
  C.push(function(p) {
    p.type === ki && p.value.includes("&") && (p.props[1163 + -1 * 1163] = p.props[5468 + 863 * -7 + 573].replace(Lc, e).replace(n, I));
  }), a.prefix && C.push(xc), C.push(gc);
  var u = function(p, f, v, w) {
    void (-3131 * -2 + 26 * -28 + -5534) === f && (f = ""), v === void 0 && (v = ""), void (3 * 68 + -9944 + 20 * 487) === w && (w = "&"), o = w, e = f, n = new RegExp("\\".concat(e, "\\b"), "g");
    var E = p.replace(Fc, ""), k = rc(v || f ? "".concat(v, " ").concat(f, " { ").concat(E, " }") : E);
    a.namespace && (k = Zg(k, a.namespace));
    var O = [];
    return di(k, sc(C.concat(cc(function(R) {
      return O.push(R);
    })))), O;
  };
  return u.hash = s.length ? s.reduce(function(p, f) {
    return f.name || sn(2 * -2677 + -9750 + 15119), wt(p, f.name);
  }, 2933 * 1 + 1 * -8095 + -10543 * -1).toString() : "", u;
}
var Dc = new Gg(), Go = kg(), nr = kt.createContext({ shouldForwardProp: void (-939 * 6 + -8780 + 1 * 14414), styleSheet: Dc, stylis: Go });
nr.Consumer;
var Tc = kt.createContext(void (34 * -185 + 927 * -5 + -437 * -25));
function Zo() {
  return Gi(nr);
}
function Xc(t) {
  var o = Le(t.stylisPlugins), e = o[-9499 + 383 * 3 + 8350], n = o[-3548 + -8 * -859 + -3323], i = Zo().styleSheet, r = Ue(function() {
    var C = i, u = {};
    return u.useCSSOMInjection = !1, t.sheet ? C = t.sheet : t.target && (C = C.reconstructWithOptions({ target: t.target }, !1)), t.disableCSSOMInjection && (C = C.reconstructWithOptions(u)), C;
  }, [t.disableCSSOMInjection, t.sheet, t.target, i]), a = Ue(function() {
    var C = {};
    C.namespace = t.namespace, C.prefix = t.enableVendorPrefixes;
    var u = {};
    return u.options = C, u.plugins = e, kg(u);
  }, [t.enableVendorPrefixes, t.namespace, e]);
  be(function() {
    j0(e, t.stylisPlugins) || n(t.stylisPlugins);
  }, [t.stylisPlugins]);
  var g = Ue(function() {
    var C = {};
    return C.shouldForwardProp = t.shouldForwardProp, C.styleSheet = r, C.stylis = a, C;
  }, [t.shouldForwardProp, r, a]), s = {};
  s.value = g;
  var I = {};
  return I.value = a, kt.createElement(nr.Provider, s, kt.createElement(Tc.Provider, I, t.children));
}
var pa = function() {
  function t(o, e) {
    var n = this;
    this.inject = function(i, r) {
      void (-3221 * 1 + 18 * -97 + -4967 * -1) === r && (r = Go);
      var a = n.name + r.hash;
      i.hasNameForId(n.id, a) || i.insertRules(n.id, a, r(n.rules, a, "@keyframes"));
    }, this.name = o, this.id = "sc-keyframes-".concat(o), this.rules = e, tr(this, function() {
      throw sn(805 * 1 + -645 + -4 * 37, String(n.name));
    });
  }
  return t.prototype.getName = function(o) {
    return o === void 0 && (o = Go), this.name + o.hash;
  }, t;
}(), jc = function(t) {
  return t >= "A" && t <= "Z";
};
function fa(t) {
  for (var o = "", e = -3 * -2498 + -8495 + -1001 * -1; e < t.length; e++) {
    var n = t[e];
    if (-383 * -16 + -853 * -5 + -2 * 5196 === e && n === "-" && t[-67 * 1 + 13 * 468 + -6017] === "-")
      return t;
    jc(n) ? o += "-" + n.toLowerCase() : o += n;
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
var Kg = function(t) {
  return t == null || t === !1 || t === "";
}, Hg = function(t) {
  var o, e, n = [];
  for (var i in t) {
    var r = t[i];
    t.hasOwnProperty(i) && !Kg(r) && (Array.isArray(r) && r.isCss || nn(r) ? n.push("".concat(fa(i), ":"), r, ";") : on(r) ? n.push.apply(n, $t($t(["".concat(i, " {")], Hg(r), !1), ["}"], !1)) : n.push("".concat(fa(i), ": ").concat((o = i, (e = r) == null || typeof e == "boolean" || e === "" ? "" : typeof e != "number" || 1441 * -1 + 572 + -869 * -1 === e || o in Ic || o.startsWith("--") ? String(e).trim() : "".concat(e, "px")), ";")));
  }
  return n;
};
function Zt(t, o, e, n) {
  if (Kg(t))
    return [];
  if (er(t))
    return [".".concat(t.styledComponentId)];
  if (nn(t)) {
    if (!nn(r = t) || r.prototype && r.prototype.isReactComponent || !o)
      return [t];
    var i = t(o);
    return X.NODE_ENV === "production" || typeof i != "object" || Array.isArray(i) || i instanceof pa || on(i) || i === null || console.error("".concat(bg(t), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Zt(i, o, e, n);
  }
  var r;
  return t instanceof pa ? e ? (t.inject(e, n), [t.getName(n)]) : [t] : on(t) ? Hg(t) : Array.isArray(t) ? Array.prototype.concat.apply(Oi, t.map(function(a) {
    return Zt(a, o, e, n);
  })) : [t.toString()];
}
function Mc(t) {
  for (var o = -93 * -79 + 7484 + -14831; o < t.length; o += -50 * 142 + 5422 * 1 + 73 * 23) {
    var e = t[o];
    if (nn(e) && !er(e))
      return !1;
  }
  return !0;
}
var Jc = mg("6.1.1"), Uc = function() {
  function t(o, e, n) {
    this.rules = o, this.staticRulesId = "", this.isStatic = X.NODE_ENV === "production" && (void (-2400 * 1 + 6474 + -582 * 7) === n || n.isStatic) && Mc(o), this.componentId = e, this.baseHash = wt(Jc, e), this.baseStyle = n, Gg.registerId(e);
  }
  return t.prototype.generateAndInjectStyles = function(o, e, n) {
    var i = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, e, n) : "";
    if (this.isStatic && !n.hash)
      if (this.staticRulesId && e.hasNameForId(this.componentId, this.staticRulesId))
        i = St(i, this.staticRulesId);
      else {
        var r = da(Zt(this.rules, o, e, n)), a = Bo(wt(this.baseHash, r) >>> 9475 * 1 + 8864 + -1 * 18339);
        if (!e.hasNameForId(this.componentId, a)) {
          var g = n(r, ".".concat(a), void 0, this.componentId);
          e.insertRules(this.componentId, a, g);
        }
        i = St(i, a), this.staticRulesId = a;
      }
    else {
      for (var s = wt(this.baseHash, n.hash), I = "", C = -7636 + 1 * -6428 + 14064; C < this.rules.length; C++) {
        var u = this.rules[C];
        if (typeof u == "string")
          I += u, X.NODE_ENV !== "production" && (s = wt(s, u));
        else if (u) {
          var p = da(Zt(u, o, e, n));
          s = wt(s, p + C), I += p;
        }
      }
      if (I) {
        var f = Bo(s >>> 0);
        e.hasNameForId(this.componentId, f) || e.insertRules(this.componentId, f, n(I, ".".concat(f), void (-1 * 3726 + 7181 + -3455), this.componentId)), i = St(i, f);
      }
    }
    return i;
  }, t;
}(), Wg = kt.createContext(void (3637 * -1 + 24 * -367 + 12445));
Wg.Consumer;
var oo = {}, ha = /* @__PURE__ */ new Set();
function Qc(t, o, e) {
  var n = er(t), i = t, r = !io(t), a = o.attrs, g = void (-19 * -245 + -4757 + 102) === a ? Oi : a, s = o.componentId, I = s === void 0 ? function(D, j) {
    var Z = typeof D != "string" ? "sc" : xa(D);
    oo[Z] = (oo[Z] || -27 * 145 + 1153 + 2762) + 1;
    var _ = "".concat(Z, "-").concat(fc("6.1.1" + Z + oo[Z]));
    return j ? "".concat(j, "-").concat(_) : _;
  }(o.displayName, o.parentComponentId) : s, C = o.displayName, u = void (147 + -62 * 67 + -4007 * -1) === C ? function(D) {
    return io(D) ? "styled.".concat(D) : "Styled(".concat(bg(D), ")");
  }(t) : C, p = o.displayName && o.componentId ? "".concat(xa(o.displayName), "-").concat(o.componentId) : o.componentId || I, f = n && i.attrs ? i.attrs.concat(g).filter(Boolean) : g, v = o.shouldForwardProp;
  if (n && i.shouldForwardProp) {
    var w = i.shouldForwardProp;
    if (o.shouldForwardProp) {
      var E = o.shouldForwardProp;
      v = function(D, j) {
        return w(D, j) && E(D, j);
      };
    } else
      v = w;
  }
  var k = new Uc(e, p, n ? i.componentStyle : void (-89 * -9 + -386 * 22 + -1 * -7691));
  function O(D, j) {
    return function(Z, _, z) {
      var ee = Z.attrs, xe = Z.componentStyle, ue = Z.defaultProps, Ae = Z.foldedComponentIds, Pe = Z.styledComponentId, re = Z.target, ae = kt.useContext(Wg), $e = Zo(), st = Z.shouldForwardProp || $e.shouldForwardProp;
      X.NODE_ENV !== "production" && po(Pe);
      var we = function(pt, ft, Ge) {
        var Ze = {};
        Ze.className = void (-3 * 969 + 1373 * -1 + 40 * 107), Ze.theme = Ge;
        for (var _e, Ee = ve(ve({}, ft), Ze), Vt = -7382 + 61 * -3 + 1 * 7565; Vt < pt.length; Vt += 397 * 1 + -2904 + 2508) {
          var ke = nn(_e = pt[Vt]) ? _e(Ee) : _e;
          for (var Ye in ke)
            Ee[Ye] = Ye === "className" ? St(Ee[Ye], ke[Ye]) : Ye === "style" ? ve(ve({}, Ee[Ye]), ke[Ye]) : ke[Ye];
        }
        return ft.className && (Ee.className = St(Ee.className, ft.className)), Ee;
      }(ee, _, Cc(_, ae, ue) || tn), Xe = we.as || re, qe = {};
      for (var pe in we)
        void (-8005 * -1 + 5102 + -13107) === we[pe] || pe[-4088 + 70 * -1 + 4158] === "$" || pe === "as" || pe === "theme" || (pe === "forwardedAs" ? qe.as = we.forwardedAs : st && !st(pe, Xe) || (qe[pe] = we[pe], st || X.NODE_ENV !== "development" || e0(pe) || ha.has(pe) || !wo.has(Xe) || (ha.add(pe), console.warn('styled-components: it looks like an unknown prop "'.concat(pe, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Rt = function(pt, ft) {
        var Ge = Zo(), Ze = pt.generateAndInjectStyles(ft, Ge.styleSheet, Ge.stylis);
        return X.NODE_ENV !== "production" && po(Ze), Ze;
      }(xe, we);
      X.NODE_ENV !== "production" && Z.warnTooManyClasses && Z.warnTooManyClasses(Rt);
      var xn = St(Ae, Pe);
      return Rt && (xn += " " + Rt), we.className && (xn += " " + we.className), qe[io(Xe) && !wo.has(Xe) ? "class" : "className"] = xn, qe.ref = z, me(Xe, qe);
    }(R, D, j);
  }
  O.displayName = u;
  var R = kt.forwardRef(O), U = {};
  return U.attrs = !0, U.componentStyle = !0, U.displayName = !0, U.foldedComponentIds = !0, U.shouldForwardProp = !0, U.styledComponentId = !0, U.target = !0, R.attrs = f, R.componentStyle = k, R.displayName = u, R.shouldForwardProp = v, R.foldedComponentIds = n ? St(i.foldedComponentIds, i.styledComponentId) : "", R.styledComponentId = p, R.target = n ? i.target : t, Object.defineProperty(R, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(D) {
    this._foldedDefaultProps = n ? function(j) {
      for (var Z = [], _ = -1785 + -94 * -19; _ < arguments.length; _++)
        Z[_ - (-33 * 77 + -8521 * -1 + 3 * -1993)] = arguments[_];
      for (var z = 8426 + 47 * 58 + -34 * 328, ee = Z; z < ee.length; z++)
        So(j, ee[z], !0);
      return j;
    }({}, i.defaultProps, D) : D;
  } }), X.NODE_ENV !== "production" && (uc(u, p), R.warnTooManyClasses = /* @__PURE__ */ function(D, j) {
    var Z = {}, _ = !1;
    return function(z) {
      if (!_ && (Z[z] = !0, Object.keys(Z).length >= 200)) {
        var ee = j ? ' with the id of "'.concat(j, '"') : "";
        console.warn("Over ".concat(-498 * 17 + -5279 * 1 + 13945, " classes were generated for component ").concat(D).concat(ee, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), _ = !0, Z = {};
      }
    };
  }(u, p)), tr(R, function() {
    return ".".concat(R.styledComponentId);
  }), r && Bg(R, t, U), R;
}
function ma(t, o) {
  for (var e = [t[-5587 + -43 * -201 + -3056]], n = 10968 + -914 * 12, i = o.length; n < i; n += -10119 + 11 * 920)
    e.push(o[n], t[n + (2766 + 7 * -395)]);
  return e;
}
var ba = function(t) {
  var o = {};
  return o.isCss = !0, Object.assign(t, o);
};
function zc(t) {
  for (var o = [], e = 1; e < arguments.length; e++)
    o[e - (987 * -1 + 5 * -1501 + 8493)] = arguments[e];
  if (nn(t) || on(t)) {
    var n = t;
    return ba(Zt(ma(Oi, $t([n], o, !0))));
  }
  var i = t;
  return o.length === 0 && -8110 + 4 * 1108 + 3679 * 1 === i.length && typeof i[3 * -1277 + 3 * -1658 + 8805] == "string" ? Zt(i) : ba(Zt(ma(i, o)));
}
function ko(t, o, e) {
  if (void (-4007 * 2 + 7544 + 470) === e && (e = tn), !o)
    throw sn(-2 * 3851 + -9973 + 17676, o);
  var n = function(i) {
    for (var r = [], a = 3355 * -1 + 4939 + 1 * -1583; a < arguments.length; a++)
      r[a - (-4 * 1076 + -3988 * 1 + 1 * 8293)] = arguments[a];
    return t(o, e, zc.apply(void (1017 * 1 + 257 * -19 + -2 * -1933), $t([i], r, !1)));
  };
  return n.attrs = function(i) {
    return ko(t, o, ve(ve({}, e), { attrs: Array.prototype.concat(e.attrs, i).filter(Boolean) }));
  }, n.withConfig = function(i) {
    return ko(t, o, ve(ve({}, e), i));
  }, n;
}
var Og = function(t) {
  return ko(Qc, t);
}, Hn = Og;
wo.forEach(function(t) {
  Hn[t] = Og(t);
});
X.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Un = "__sc-".concat(Kt, "__");
X.NODE_ENV !== "production" && X.NODE_ENV !== "test" && typeof window < "u" && (window[Un] || (window[Un] = -2916 + 9 * 324), 1 * -1175 + -1 * 116 + 1292 === window[Un] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Un] += -283 * -29 + 7466 + 4 * -3918);
const $c = Hn.div`
  position: relative;
`, qc = Hn.video`
  transform: ${(t) => t.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  width: 100%;
`;
class te extends Error {
  constructor(e, n) {
    super(e);
    Q(this, "cause");
    this.name = "AutoCaptureError", this.cause = n;
  }
  static logError(e) {
  }
  static fromCameraError(e) {
    if (this.logError(e), e instanceof te)
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
    return new te(n, e);
  }
  static fromError(e) {
    if (this.logError(e), e instanceof te)
      return e;
    const n = "An unexpected error has occurred";
    return new te(n);
  }
}
var ci = ((t) => (t.CONTINUE_DETECTION = "continue-detection", t.SWITCH_CAMERA = "switch-camera", t.TOGGLE_MIRROR = "toggle-mirror", t))(ci || {}), Rg = ((t) => (t.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", t.CONTROL = "document-auto-capture:control", t.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", t.DOCUMENT_DETECTION = "document-auto-capture:document-detection", t.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", t.STATE_CHANGED = "document-auto-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", t))(Rg || {}), at = ((t) => (t.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", t.CONTROL = "face-auto-capture:control", t.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", t.FACE_DETECTION = "face-auto-capture:face-detection", t.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", t.STATE_CHANGED = "face-auto-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", t))(at || {}), _c = ((t) => (t.ANIMATION_END = "magnifeye-auto-capture:animation-end", t.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", t))(_c || {}), ex = ((t) => (t.ANIMATION_END = "smile-auto-capture:animation-end", t.STATUS_CHANGED = "smile-auto-capture:status-changed", t))(ex || {});
const Me = {};
Me.CANDIDATE_SELECTION = "candidate_selection", Me.FACE_TOO_CLOSE = "face_too_close", Me.FACE_TOO_FAR = "face_too_far", Me.FACE_CENTERING = "face_centering", Me.FACE_NOT_PRESENT = "face_not_present", Me.SHARPNESS_TOO_LOW = "sharpness_too_low", Me.BRIGHTNESS_TOO_LOW = "brightness_too_low", Me.BRIGHTNESS_TOO_HIGH = "brightness_too_high", Me.DEVICE_PITCHED = "device_pitched";
const Ne = Me, it = {};
it.isPresent = Ne.FACE_NOT_PRESENT, it.isNotPitched = Ne.DEVICE_PITCHED, it.isNotSmall = Ne.FACE_TOO_FAR, it.isNotLarge = Ne.FACE_TOO_CLOSE, it.isNotOutOfBounds = Ne.FACE_CENTERING, it.isNotDim = Ne.BRIGHTNESS_TOO_LOW, it.isNotBright = Ne.BRIGHTNESS_TOO_HIGH, it.isSharp = Ne.SHARPNESS_TOO_LOW;
const tx = it, mn = {};
mn.LOADING = "LOADING", mn.ERROR = "ERROR", mn.WAITING = "WAITING", mn.RUNNING = "RUNNING";
const We = mn;
var nx = ((t) => (t.CLOSEUP = "CLOSEUP", t.DISTANT = "DISTANT", t.MIDDLE = "MIDDLE", t))(nx || {});
const Ri = Jo(void 0);
Ri.displayName = "AppStateContext";
function ix() {
  const t = Gi(Ri);
  if (t === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return t;
}
const ox = Ri.Provider, Vi = ix;
class Vg extends Oe {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var e;
    const o = new te("An unknown error has occurred");
    (e = this.context) == null || e.handleError(o);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var o;
    return ((o = this.context) == null ? void 0 : o.appState) === We.ERROR ? null : this.props.children;
  }
}
Q(Vg, "contextType", Ri);
const rx = Hn.canvas`
  transform: ${(t) => t.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
var ax = -9294 + -3098 * -3;
function le(t, o, e, n, i, r) {
  var a, g, s = {};
  for (g in o)
    g == "ref" ? a = o[g] : s[g] = o[g];
  var I = {};
  I.type = t, I.props = s, I.key = e, I.ref = a, I.__k = null, I.__ = null, I.__b = 0, I.__e = null, I.__d = void (1301 + -1301 * 1), I.__c = null, I.constructor = void (-124 * -75 + -1 * 2647 + -6653), I.__v = --ax, I.__i = -(527 * 16 + 9686 + -9 * 2013), I.__u = 0, I.__source = i, I.__self = r;
  var C = I;
  if (typeof t == "function" && (a = t.defaultProps))
    for (g in a)
      void (1071 + 9 * -119) === s[g] && (s[g] = a[g]);
  return G.vnode && G.vnode(C), C;
}
const gx = Hn.div`
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
function sx() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const cx = rg(({
  detectionDetails: t,
  isImageMirror: o
}, e) => sx() ? (console.log(t), le(De, {
  children: [le(rx, {
    ref: e,
    $isImageMirror: o
  }), le(gx, {
    children: Object.entries(t).map(([n, i]) => le("div", {
      children: [n, ": ", le("strong", {
        children: i
      })]
    }, n))
  })]
})) : null), xx = 2307 * 3 + 41 * -214 + 1853 * 1 + 0.75, Ix = 2, lx = 3 * -2991 + 9145 * -1 + -7 * -2674, ux = -9981 + -2 * 4731 + 19443, Cx = (t, o) => {
  const e = {};
  e.detail = o, document.dispatchEvent(new CustomEvent(t, e));
}, vi = class vi {
  constructor() {
    Q(this, "lastDetails", {});
    Q(this, "delayedTime", 19 * -367 + -3397 + -17 * -610);
  }
  static getInstance() {
    return !this._instance && (this._instance = new vi()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 0;
  }
  isDetailChanged(o, e) {
    return JSON.stringify(e) !== JSON.stringify(this.lastDetails[o]) ? (this.lastDetails[o] = e, !0) : !1;
  }
  dispatchCustomEventOnChange(o, e) {
    this.isDetailChanged(o, e) && Cx(o, e);
  }
  dispatchDelayedCustomEventOnChange(o, e, n) {
    const i = performance.now();
    i - this.delayedTime > n && (this.dispatchCustomEventOnChange(o, e), this.delayedTime = i);
  }
};
Q(vi, "_instance");
let Zn = vi;
const cn = Zn.getInstance(), ya = (t, o, e = lx) => {
  const n = {};
  n.instructionCode = o;
  const i = n;
  cn.dispatchDelayedCustomEventOnChange(t, i, e);
}, va = (t, o) => {
  cn.dispatchCustomEventOnChange(t, o);
}, dx = (t, o) => {
  cn.dispatchCustomEventOnChange(t, o);
}, Ax = (t, o) => {
  const e = {};
  e.size = o;
  const n = e;
  cn.dispatchCustomEventOnChange(t, n);
}, px = (t, o, e) => {
  const n = o.confidence < e ? void 0 : o, i = {};
  i.detectedObject = n;
  const r = i;
  cn.dispatchCustomEventOnChange(t, r);
}, fx = (t, o, e) => {
  const n = {};
  n.image = e, n.data = {}, n.data.detection = o, n.data.imageResolution = {}, n.data.imageResolution.width = e.width, n.data.imageResolution.height = e.height;
  const i = n;
  cn.dispatchCustomEventOnChange(t, i);
};
var Pg = ((t) => (t.DOCUMENT = "document-auto-capture:dev", t.FACE = "face-auto-capture:dev", t))(Pg || {});
const Ko = {};
Ko.SIMD = "simd", Ko.NO_SIMD = "no-simd";
const wa = Ko;
function hx(t, o) {
  const [e, n] = Le(We.LOADING), [i, r] = Le(!1), [a, g] = Le(), s = Ci((u) => {
    const p = {};
    p.appState = We.ERROR, p.error = u, va(o, p), r(!1), t(u), g(u), n(We.ERROR);
  }, [t, o]), I = Ci((u) => {
    const p = {};
    p.appState = u, va(o, p), n(u);
  }, [o]), C = {};
  return C.appState = e, C.isCameraReady = i, C.setIsCameraReady = r, C.handleAppStateChange = I, C.handleError = s, C.error = a, C;
}
const Eg = (t) => t.length < -3 * -122 + -703 * 5 + 3150 ? 9059 * 1 + 5547 + -14606 : t.reduce((e, n) => e + n, 105 * -50 + 439 * -4 + 7006) / t.length, Wn = (t) => Number.parseFloat(t.toFixed(4 * -724 + -2944 + -1 * -5843)), mx = (t) => {
  const o = t.getContext("2d");
  o && o.clearRect(-37 * 46 + -9625 + -11327 * -1, 4 * -1857 + -1497 + 8925, o.canvas.width, o.canvas.height);
};
class bx {
  static async getVideoInputDeviceList() {
    return (await navigator.mediaDevices.enumerateDevices()).filter((e) => e.kind === "videoinput");
  }
}
const Pi = (t, o) => Math.min(t, o), yx = (t, o) => {
  const e = Pi(o.width, o.height);
  return Wn(t * e);
}, Yg = ({ height: t, width: o }) => {
  const e = Pi(o, t), n = e / 3 * 4;
  if (o > t) {
    const r = {};
    return r.width = n, r.height = e, r;
  }
  const i = {};
  return i.width = e, i.height = n, i;
}, vx = ({ height: t, width: o }) => {
  const e = Pi(o, t) * xx, n = (o - e) / (2145 + 2143 * -1), i = (t - e) / (9479 * 1 + -4524 + -4953), r = {};
  return r.shiftX = n, r.shiftY = i, r.width = e, r.height = e, r;
}, wx = (t, o) => yx(t, o) * Ix, Bx = "@innovatrics/dot-common-auto-capture", Sx = "5.2.4", Gx = "module", Zx = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, kx = {
  "@dot/proto-files": "1.0.3",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.2.2",
  comlink: "^4.4.1",
  preact: "^10.19.3",
  "styled-components": "^6.1.1",
  "wasm-feature-detect": "^1.6.1"
}, Kx = {
  "@preact/preset-vite": "^2.7.0",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.3.3",
  vite: "^5.0.10",
  vitest: "^1.0.4"
}, Hx = {
  name: Bx,
  private: !0,
  version: Sx,
  type: Gx,
  scripts: Zx,
  dependencies: kx,
  devDependencies: Kx
}, Wx = 4272 + 39 * -40 + -24 * 113 + 0.4, Ox = 9889 + -297 * -27 + -17908 + 0.16, Rx = 8443 + 8443 * -1 + 0.2, Vx = 1 * 728 + 8963 + -1 * 9691 + 0.05, Px = 15 * 457 + -7628 + -773 * -1 + 0.3, Ex = 0 + 0.25, Yx = -11065 + -2213 * -5 + 0.9, Nx = -1764 + -1794 * -1, Lx = 278 * 25 + -6085 + -856 + 0.8100000000000005, xi = {};
xi.minDuration = 1e3, xi.maxDuration = 2500, xi.minFrames = 10;
const ro = xi, Ho = {};
Ho.max = 100, Ho.min = 10;
const Ba = Ho, Fx = -762 * -2 + -5126 + 1 * 4322, Dx = 2311 * 4 + 1 * 7825 + -16869, Tx = 1 * -3856 + -5472 + -43 * -217, Ng = "AES-CBC", Lg = "RSA-OAEP", Xx = "SHA-256", jx = "image/jpeg", Mx = -40 * 184 + 4 * -756 + 12 * 866, Jx = 3065 + -7 * -1103 + -10746 * 1, Ux = "SAM v1.35.3 for idcards", Fg = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), Sa = () => {
  const t = /Android/i.test(navigator.userAgent), o = /Firefox/i.test(navigator.userAgent);
  return t && o;
}, Qx = () => {
  const t = navigator.userAgent.includes("Chrome"), o = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return t && o ? !1 : o;
}, Wo = (t) => new Promise((o) => {
  setTimeout(o, t);
}), Mt = (t) => JSON.parse(JSON.stringify(t, (o, e) => typeof e == "number" ? Wn(e) : e)), zx = () => Hx.version, Dg = (t) => new URL(t).hostname.replace("www.", ""), $x = () => Dg(window.location.href) === "localhost", Qn = (t) => Object.entries(t).map(([o, e]) => encodeURIComponent(o) + "=" + encodeURIComponent(e)).join("&"), qx = () => {
  const [t] = window.crypto.getRandomValues(new Uint32Array(1));
  return t.toString(1626 * -1 + -7354 + 2 * 4498);
}, An = (t) => Math.round(t / 500) * 500 / (-452 + -400 * -22 + -7348), he = (t) => t ? t <= 1 * -7489 + 5627 + -9 * -207 ? Math.round(t * (7454 + 8617 * -1 + -1183 * -1)) / (1 * 8244 + -103 * 17 + 6473 * -1) : Math.round(t / (-22 * 452 + 2623 + 7371)) * (1891 * -1 + -3693 + 5634) : 1509 + 1 * -1509, zn = (t) => Math.round(t * (21 * -467 + -46 * 199 + 9 * 2107)) / (-1 * -4573 + 3547 * -1 + -32 * 32), _x = (t, o) => {
  const e = t && performance.now() - t;
  return o >= ro.minFrames ? e > ro.minDuration : e > ro.maxDuration;
}, eI = (t, o) => JSON.stringify(t) === JSON.stringify(o) ? o : t;
function tI(t, o) {
  let e;
  return (...n) => {
    const i = () => {
      clearTimeout(e), e = void 0, t(...n);
    };
    e === void (-23 * 114 + -9937 + 12559) && (e = setTimeout(i, o));
  };
}
var Tg = ((t) => (t.AUTO_CAPTURE = "auto-capture", t))(Tg || {});
const ao = (t) => t > -616 + -4 * -169 ? ">1m" : t > 3161 + -271 * -11 + 6097 * -1 ? ">45" : t > -5559 + -243 * -23 ? ">30" : "" + t;
function $n(t, o) {
  return o ? o === "user" ? "Front Camera" : "Back Camera" : t;
}
const Xt = { appKey: "", deviceId: "", async countlyFetch(t) {
  if (!this.appKey || !this.deviceId)
    return;
  const o = {};
  o.Accept = "application/json";
  const e = {};
  e.method = "GET", e.headers = o;
  const n = e, i = "https://innovatrics.count.ly/i?", r = {};
  r.app_key = this.appKey, r.device_id = this.deviceId;
  const a = Qn(r);
  await fetch("" + i + a + "&" + t, n);
}, async init(t, o) {
  if (!o)
    return;
  this.appKey = o, this.deviceId = t;
  const e = { _app_version: zx() }, n = { organization: Dg(window.location.href) }, i = Qn({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(n) });
  await this.countlyFetch(i);
}, async endSession() {
  const t = {};
  t.end_session = "1";
  const o = Qn(t);
  await this.countlyFetch(o);
}, async sendAutoCaptureEvent(t, o) {
  const e = {};
  e.key = Tg.AUTO_CAPTURE, e.count = 1, e.dur = o, e.segmentation = t;
  const n = [e], i = Qn({ events: JSON.stringify(n) });
  await this.countlyFetch(i);
}, async sendDocumentData({ deviceName: t, documentDetection: o, facingMode: e, instructionSet: n, ...i }) {
  if (!o)
    return;
  const r = An(i.captureProcessDurationInMs), a = { hotspots: he(o.hotspots), brightness: he(o.brightness), confidence: he(o.confidence), sharpness: he(o.sharpness), smallestEdge: he(o.smallestEdge), camera: $n(t, e), imageResolution: i.imageResolution.width + "x" + i.imageResolution.height, averageFps: zn(i.averageFps), captureTime: ao(r), instructionSet: n };
  this.sendAutoCaptureEvent(a, r);
}, async sendFaceData({ deviceName: t, faceDetection: o, facingMode: e, instructionSet: n, ...i }) {
  if (!o)
    return;
  const r = An(i.captureProcessDurationInMs), a = { faceSize: he(o.faceSize), confidence: he(o.confidence), camera: $n(t, e), imageResolution: i.imageResolution.width + "x" + i.imageResolution.height, averageFps: zn(i.averageFps), captureTime: ao(r), instructionSet: n };
  this.sendAutoCaptureEvent(a, r);
}, async sendMagnifEyeData(t, o) {
  var u, p, f, v, w, E, k, O, R, U;
  if (!(t != null && t.length) || !(o != null && o.length))
    return;
  const [e, n, i] = t, [r, a] = o, g = zn(r.averageFps + (a == null ? void 0 : a.averageFps)) / (8347 + 5 * -1654 + -75), s = An(r.captureProcessDurationInMs), I = An(a == null ? void 0 : a["captureProcessDurationInMs"]), C = { faceSizeDistant: he((u = e.data.detection) == null ? void 0 : u.faceSize), faceSizeCloseup: he((p = i == null ? void 0 : i.data.detection) == null ? void 0 : p.faceSize), faceSizeMiddle: he((f = n.data.detection) == null ? void 0 : f.faceSize), confidenceDistant: he((v = e.data.detection) == null ? void 0 : v.confidence), confidenceCloseup: he((w = i == null ? void 0 : i.data.detection) == null ? void 0 : w.confidence), confidenceMiddle: he((E = n.data.detection) == null ? void 0 : E.confidence), imageResolution: ((O = (k = e.data) == null ? void 0 : k["imageResolution"]) == null ? void 0 : O.width) + "x" + ((U = (R = e.data) == null ? void 0 : R["imageResolution"]) == null ? void 0 : U.height), averageFps: g, captureTimeCloseup: I > -5 * 1203 + -735 * -5 + 2385 ? ">45" : "" + I, captureTimeDistant: s > -2478 + -262 * 26 + 9320 ? ">30" : "" + s, camera: $n(r == null ? void 0 : r.deviceName, r == null ? void 0 : r.facingMode), instructionSet: r.instructionSet };
  this.sendAutoCaptureEvent(C, s + I);
}, async sendSmileLivenessData(t, o) {
  var C, u, p, f, v, w;
  if (!(t != null && t.length) || !(o != null && o.length))
    return;
  const [e, n] = t, [i, r] = o, a = zn(i.averageFps + (r == null ? void 0 : r.averageFps)) / (4719 + 13 * 713 + 54 * -259), g = An(i.captureProcessDurationInMs), s = -5339 + 5342 * 1, I = { faceSize: he((C = n.data.detection) == null ? void 0 : C.faceSize), confidence: he((u = e.data.detection) == null ? void 0 : u.confidence), imageResolution: ((f = (p = e.data) == null ? void 0 : p["imageResolution"]) == null ? void 0 : f.width) + "x" + ((w = (v = e.data) == null ? void 0 : v["imageResolution"]) == null ? void 0 : w.height), averageFps: a, captureTimeNeutral: ao(g), captureTimeSmile: "" + s, camera: $n(i == null ? void 0 : i.deviceName, i.facingMode), instructionSet: i.instructionSet };
  this.sendAutoCaptureEvent(I, g + s);
} }, nI = () => {
  const t = sessionStorage.getItem("dot-user-id");
  if (t)
    return t;
  const o = qx();
  return sessionStorage.setItem("dot-user-id", o), o;
}, wn = { livenessImageProcessAnalytics: [], skipSendFaceData: !1, init(t, o) {
  if ($x())
    return;
  const e = nI();
  this.skipSendFaceData = o, Xt.init(e, t);
}, endSession() {
  this.skipSendFaceData = !1, Xt.endSession();
}, sendDocumentData(t) {
  Xt.sendDocumentData(t);
}, sendFaceData(t) {
  if (this.skipSendFaceData) {
    const o = {};
    o.averageFps = t.averageFps, o.captureProcessDurationInMs = t.captureProcessDurationInMs, o.deviceName = t.deviceName, o.facingMode = t.facingMode, o.instructionSet = t.instructionSet, this.livenessImageProcessAnalytics.push(o);
    return;
  }
  Xt.sendFaceData(t);
}, sendMagnifEyeData(t) {
  Xt.sendMagnifEyeData(t, this.livenessImageProcessAnalytics), this.livenessImageProcessAnalytics = [];
}, sendSmileLivenessData(t) {
  Xt.sendSmileLivenessData(t, this.livenessImageProcessAnalytics), this.livenessImageProcessAnalytics = [];
} };
function Ga(t) {
  t.getTracks().forEach((e) => {
    e.stop();
  });
}
const Ii = {};
Ii.width = 1920, Ii.height = 1080, Ii.facingMode = "user";
const iI = Ii;
class Bn extends bx {
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
    await this.startWebcam(i), Qx() && await this.startWebcam(i);
  }
  async startWebcam(e = {}) {
    var n;
    return this.stopCamera(), Sa() && await Wo(450), this.mediaStream = await navigator.mediaDevices.getUserMedia(e), this.videoRef.srcObject = this.mediaStream, await this.videoRef.play(), this.videoTrack = (n = this.mediaStream) == null ? void 0 : n.getVideoTracks()[0], this.checkVideoTrackSettings(), this.videoTrack;
  }
  checkVideoTrackSettings() {
    var i;
    const e = (i = this.videoTrack) == null ? void 0 : i.getSettings();
    if (!(e != null && e.height) || !(e != null && e.width))
      throw new te("Could not init camera settings");
    if (Math.min(e == null ? void 0 : e.width, e == null ? void 0 : e.height) < Fx)
      throw this.stopCamera(), new te("Could not init video because of low camera resolution: " + e.width + "x" + e.height + ".");
  }
  async getBestCamera(e) {
    const n = {};
    return n.video = !0, this.mediaStream = await navigator.mediaDevices.getUserMedia(n), this.stopCamera(), Fg() && e === "environment" ? (await Bn.getVideoInputDeviceList()).find((a) => a.label.includes("back") && a.label.includes("0")) : void (1306 * 4 + -1 * -7609 + -12833);
  }
  async getAvailableCamerasInfo() {
    const e = await Bn.getVideoInputDeviceList();
    for (const n of e) {
      Sa() && await Wo(-1393 * 4 + 167 * -8 + 566 * 13);
      try {
        const i = {};
        i.deviceId = n.deviceId, i.width = 480;
        const r = {};
        r.video = i;
        const a = await navigator.mediaDevices.getUserMedia(r), [g] = a.getVideoTracks(), s = g.getSettings(), I = { ...s };
        I.deviceName = g.label;
        const C = {};
        C.cameraProperties = I;
        const u = C;
        this.availableCameraProperties.push(u), Ga(a);
      } catch (i) {
        i instanceof Error && te.logError(i);
      }
    }
  }
  getConstraints(e, n) {
    const i = { ...iI, ...e };
    i.deviceId = n ? { exact: n.deviceId } : void (-1543 * -2 + -3142 + -56 * -1);
    const r = {};
    return r.video = i, r.audio = !1, r;
  }
  takePhoto() {
    var r;
    const e = (r = this.videoTrack) == null ? void 0 : r.getSettings();
    if (!(e != null && e.width))
      throw new te("Cant take photo - video width is undefined");
    if (!(e != null && e.height))
      throw new te("Cant take photo - video height is undefined");
    const n = document.createElement("canvas");
    n.width = e.width, n.height = e.height;
    const i = n.getContext("2d");
    if (!i)
      throw new te("Cant take photo - cant create context");
    return i.drawImage(this.videoRef, -1 * 7614 + -1 * -6557 + 1057, 0), n;
  }
  getCameraResolution() {
    var i;
    const e = (i = this.videoTrack) == null ? void 0 : i.getSettings();
    if (!(e != null && e.width))
      throw new te("Video width is undefined");
    if (!(e != null && e.height))
      throw new te("Video height is undefined");
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
    const e = this.videoTrack.getConstraints(), n = this.videoTrack.getSettings(), i = await Bn.getVideoInputDeviceList();
    if (i.length <= -413 * -10 + -768 + -1 * 3361)
      return;
    const r = i.findIndex((s) => s.deviceId === n.deviceId), a = i[r + (-9225 + -1 * 6390 + 128 * 122)] ?? i[2 * -4451 + 48 * 200 + -698], g = this.getConstraints(e, a);
    await this.startWebcam(g);
  }
  stopCamera() {
    this.mediaStream && (Ga(this.mediaStream), this.videoRef.srcObject = null);
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
var Se = {};
Se.VITE_FACE_COUNTLY_APP_KEY = "5f83e83ee4cee1ab6e5bbf86e215644473299675", Se.VITE_MAGNIFEYE_COUNTLY_APP_KEY = "d5ca54dabfb1a2c72d7090c9c8980252a879da44", Se.VITE_DOCUMENT_COUNTLY_APP_KEY = "065cf6e242fc5e785cd17eebfbfbbd212a33133b", Se.VITE_COUNTLY_URL = "https://innovatrics.count.ly", Se.VITE_SMILE_COUNTLY_APP_KEY = "d64319129bb0ee02eccfab418edba9629a97d6b6", Se.VITE_RSA_PUBLIC_KEY = "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", Se.BASE_URL = "/", Se.MODE = "production", Se.DEV = !1, Se.PROD = !0, Se.SSR = !1, Se.VITE_PACKAGE_VERSION = "5.2.4";
var oI = Se;
const rI = () => {
  var t;
  return ((t = oI.VITE_APP_ENV) == null ? void 0 : t.toLowerCase()) === "dev";
};
class ir extends Array {
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
    this.length === this.size && this.splice(-19 * 434 + 3597 + 4649, e.length), this.push(...e);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(16 * 467 + 2339 + 9811 * -1);
  }
}
const aI = (t, o, e = jx) => new Promise((n) => {
  t.toBlob((i) => {
    if (!i)
      throw new Error("Canvas to Blob failed");
    n(i);
  }, e, o);
}), gI = async (t) => aI(t, 2779 + -199 * -36 + -9853 * 1), sI = (t, o) => {
  const e = document.createElement("canvas");
  e.width = o.width, e.height = o.height;
  const n = e.getContext("2d");
  if (!n)
    throw new Error("cropImage ctx error");
  return n.drawImage(t, o.shiftX, o.shiftY, o.width, o.height, 1 * -2621 + -3630 + 6251 * 1, 1323 * 3 + -3037 + -932, e.width, e.height), e;
}, cI = (t) => {
  const o = t.getContext("2d");
  if (!o)
    throw new Error("getImageDataForSam ctx error");
  const { data: e } = o.getImageData(-10 * -305 + -1 * -9554 + -12604, -769 + 739 * -1 + 1508, t.width, t.height);
  return e;
}, Xg = (t, o, e, n) => {
  const i = t.getContext("2d");
  i && (i.beginPath(), n ? (i.fillStyle = e, i.fillRect(o.topLeft.x, o.topLeft.y, o.width, o.height)) : (i.strokeStyle = e, i.rect(o.topLeft.x, o.topLeft.y, o.width, o.height)), i.stroke());
}, go = (t, o, e) => {
  const { height: n, shiftX: i, shiftY: r, width: a } = o, g = {};
  g.x = i, g.y = r;
  const s = {};
  s.topLeft = g, s.width = a, s.height = n, s.color = e, Xg(t, s, e);
}, jg = (t, o, e) => {
  const n = t.getContext("2d");
  n && (n.fillStyle = e, n.fillRect(o.x, o.y, 16 * 577 + -3920 + -5305, -17 * 26 + -16 * -577 + -8783), n.beginPath());
}, xI = (t, o) => {
  const { height: e, shiftX: n, shiftY: i, width: r } = o;
  return !(t.x < n || t.x > n + r || t.y < i || t.y > i + e);
}, II = (t, o) => Object.values(t).every((e) => xI(e, o)), Mg = Jo(null), Jg = () => {
  const t = Gi(Mg);
  if (!t)
    throw new Error("Missing provider for CameraOptionsContext");
  return t;
}, lI = (t) => {
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
      faceConfidence: (r == null ? void 0 : r.faceConfidence) ?? Wx,
      minFaceSizeRatio: (r == null ? void 0 : r.minFaceSizeRatio) ?? Ox,
      maxFaceSizeRatio: (r == null ? void 0 : r.maxFaceSizeRatio) ?? Rx,
      sharpnessThreshold: (r == null ? void 0 : r.sharpnessThreshold) ?? Px,
      brightnessLowThreshold: (r == null ? void 0 : r.brightnessLowThreshold) ?? Ex,
      brightnessHighThreshold: (r == null ? void 0 : r.brightnessHighThreshold) ?? Yx,
      outOfBoundsThreshold: (r == null ? void 0 : r.outOfBoundsThreshold) ?? Vx,
      devicePitchAngleThreshold: (r == null ? void 0 : r.devicePitchAngleThreshold) ?? Nx
    }
  };
}, uI = ({
  cameraOptions: t,
  children: o
}) => {
  const e = Ue(() => ({
    faceCameraOptions: lI(t)
  }), [t]);
  return le(Mg.Provider, {
    value: e,
    children: o
  });
}, CI = (t, o) => {
  if (rI()) {
    const e = {};
    e.candidateSelectionImages = o;
    const n = e;
    Zn.getInstance().dispatchCustomEventOnChange(t, n);
  }
}, dI = (t, o) => {
  const { cameraResolution: e, shouldMirror: n } = o;
  be(() => {
    if (!e)
      return;
    const i = {};
    i.cameraResolution = e, i.isMirroring = n, dx(t, i);
  }, [e, n, t]);
}, AI = (t) => t === Rg.CONTROL ? !Fg() : !0, pI = (t, o) => {
  const { appState: e, handleAppStateChange: n, handleError: i } = Vi(), [r, a] = Le(), g = Ue(() => {
    const I = o == null ? void 0 : o.getCameraSettings().facingMode;
    return I ? r ?? I === "user" : r ?? AI(t);
  }, [o, r, t]);
  be(() => {
    const I = () => {
      e !== We.LOADING && n(We.RUNNING);
    }, C = () => {
      a(r === void 0 ? !g : !r);
    }, u = async () => {
      if (o) {
        n(We.LOADING);
        try {
          await o.switchCamera(), n(We.RUNNING);
        } catch (f) {
          if (f instanceof Error) {
            i(te.fromCameraError(f));
            return;
          }
        }
        a(void 0);
      }
    }, p = (f) => {
      var v;
      switch ((v = f.detail) == null ? void 0 : v["instruction"]) {
        case ci.CONTINUE_DETECTION:
          I();
          break;
        case ci.TOGGLE_MIRROR:
          C();
          break;
        case ci.SWITCH_CAMERA:
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
}, fI = (t, o) => {
  var s;
  const e = Wt(), { handleError: n, setIsCameraReady: i } = Vi(), [r, a] = Le(), g = Ci((I) => {
    a((C) => eI(I, C));
  }, []);
  return be(() => ((async () => {
    if (!(t != null && t.current)) {
      n(new te("Something went wrong during video initialization"));
      return;
    }
    const C = new Bn(t.current);
    try {
      const u = {};
      u.facingMode = o, await C.initWebcam(u);
    } catch (u) {
      if (u instanceof Error) {
        n(te.fromCameraError(u));
        return;
      }
    }
    i(!0), g(C.getCameraResolution()), e.current = C;
  })(), function() {
    e.current && e.current.stopCamera();
  }), [o, n, i, t, g]), { cameraHandler: e.current, cameraSettings: (s = e.current) == null ? void 0 : s.getCameraSettings(), cameraResolution: r, onCameraResolutionChange: g };
}, hI = () => {
  be(() => (window.addEventListener("beforeunload", wn.endSession), () => {
    wn.endSession(), window.removeEventListener("beforeunload", wn.endSession);
  }), []);
}, mI = (t, o) => {
  const [e, n] = Le();
  be(() => {
    const i = () => {
      !t.current || e === window.innerWidth || (n(window.innerWidth), Ax(o, t.current.getBoundingClientRect()));
    };
    return i(), window.addEventListener("resize", i), () => {
      window.removeEventListener("resize", i);
    };
  }, [t, o, e]);
};
function bI(t) {
  return Wn(Math.abs(t));
}
const yI = () => {
  const [t, o] = Le(null), e = Wt(new ir(1511 * -5 + 482 + 7078));
  function n(r) {
    const { z: a } = r.accelerationIncludingGravity || {};
    if (!a)
      return;
    e.current.pushFixed(bI(a));
    const g = Wn(Eg(e.current)), s = {};
    s.z = g, o(s);
  }
  be(() => (window.addEventListener("devicemotion", tI(n, Jx), !0), () => {
    window.removeEventListener("devicemotion", n, !0);
  }), []);
  const i = {};
  return i.acceleration = t, i;
};
function pi() {
  throw new Error("Cycle detected");
}
var vI = Symbol.for("preact-signals");
function or() {
  if (Qt > 353 * -28 + 638 + 9247)
    Qt--;
  else {
    for (var t, o = !1; void (51 * 96 + 6422 + -11318) !== Sn; ) {
      var e = Sn;
      for (Sn = void (-415 + 3 * 1206 + 3203 * -1), Oo++; void (-1304 * 2 + -5778 + 599 * 14) !== e; ) {
        var n = e.o;
        if (e.o = void (-17 * -291 + 3517 * -1 + 22 * -65), e.f &= -(-2 * -4328 + 2 * 332 + 1 * -9317), !(8 & e.f) && zg(e))
          try {
            e.c();
          } catch (i) {
            !o && (t = i, o = !(-2580 + -6 * -430));
          }
        e = n;
      }
    }
    if (Oo = 1066 + 1066 * -1, Qt--, o)
      throw t;
  }
}
var ie = void (-1 * -353 + 4887 + -5240), Sn = void (247 * 11 + -7961 * 1 + -228 * -23), Qt = 7075 + 1 * -7075, Oo = 599 * -3 + -3251 * -1 + 727 * -2, fi = -209 * -16 + -143 * -10 + -4774;
function Ug(t) {
  if (void (-913 * -6 + 1042 * -5 + -134 * 2) !== ie) {
    var o = t.n;
    if (void (294 * -23 + -314 + -122 * -58) === o || o.t !== ie)
      return o = { i: 0, S: t, p: ie.s, n: void (1854 + -169 * -27 + 279 * -23), t: ie, e: void (71 * -106 + 7523 * -1 + 15049), x: void (-181 * -1 + -5319 + 5138), r: o }, void (9 * -101 + -106 * 15 + 1 * 2499) !== ie.s && (ie.s.n = o), ie.s = o, t.n = o, -1 * 5809 + -6196 + 12037 * 1 & ie.f && t.S(o), o;
    if (-(4307 * -1 + 1 * 8033 + 149 * -25) === o.i)
      return o.i = 3488 + 7832 * 1 + -5 * 2264, void (-6 * 93 + -7575 + -3 * -2711) !== o.n && (o.n.p = o.p, void (-801 * 11 + -4 * 2252 + -1 * -17819) !== o.p && (o.p.n = o.n), o.p = ie.s, o.n = void (-122 * 13 + -289 * 25 + 8811), ie.s.n = o, ie.s = o), o;
  }
}
function de(t) {
  this.v = t, this.i = 8611 + -1 * 3451 + -2580 * 2, this.n = void (2 * 2624 + 104 * 37 + -9096), this.t = void (3889 * -2 + 2738 + 5040);
}
de.prototype.brand = vI, de.prototype.h = function() {
  return !(-4147 + -1 * 814 + 4961);
}, de.prototype.S = function(t) {
  this.t !== t && void (4889 + 2726 * -1 + -2163) === t.e && (t.x = this.t, void (-2045 + 1 * 2045) !== this.t && (this.t.e = t), this.t = t);
}, de.prototype.U = function(t) {
  if (void (7343 + 3883 * 2 + 15109 * -1) !== this.t) {
    var o = t.e, e = t.x;
    void (-229 * 27 + -2143 * -1 + 4040) !== o && (o.x = e, t.e = void (22 * -329 + -1346 * 7 + -35 * -476)), void (-3827 * -1 + 9878 + -13705) !== e && (e.e = o, t.x = void 0), t === this.t && (this.t = e);
  }
}, de.prototype.subscribe = function(t) {
  var o = this;
  return ar(function() {
    var e = o.value, n = 32 & this.f;
    this.f &= -(353 * -5 + 7252 + -5454);
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
  var t = Ug(this);
  return t !== void 0 && (t.i = this.i), this.v;
}, set: function(t) {
  if (ie instanceof ut && function() {
    throw new Error("Computed cannot have side-effects");
  }(), t !== this.v) {
    Oo > -1 * -389 + -6199 + -1 * -5910 && pi(), this.v = t, this.i++, fi++, Qt++;
    try {
      for (var o = this.t; void (-1 * 7424 + -1 * 731 + 1165 * 7) !== o; o = o.x)
        o.t.N();
    } finally {
      or();
    }
  }
} });
function Qg(t) {
  return new de(t);
}
function zg(t) {
  for (var o = t.s; void (-5 * 129 + -8964 + 9609) !== o; o = o.n)
    if (o.S.i !== o.i || !o.S.h() || o.S.i !== o.i)
      return !(-2 * 4423 + -1453 * -2 + 132 * 45);
  return !(-2023 * 1 + -628 + 2652);
}
function $g(t) {
  for (var o = t.s; o !== void 0; o = o.n) {
    var e = o.S.n;
    if (void (-4677 * 2 + -5750 * 1 + -472 * -32) !== e && (o.r = e), o.S.n = o, o.i = -(-30 * 114 + -1212 + 4633), void (-78 * 1 + 1 * -5462 + 1108 * 5) === o.n) {
      t.s = o;
      break;
    }
  }
}
function qg(t) {
  for (var o = t.s, e = void (2546 + 3 * -2341 + 4477); o !== void 0; ) {
    var n = o.p;
    -(-88 * -14 + -4694 + 3463) === o.i ? (o.S.U(o), void (-6154 + -1399 * -7 + -3639) !== n && (n.n = o.n), void (2774 + 1 * -6637 + -1 * -3863) !== o.n && (o.n.p = n)) : e = o, o.S.n = o.r, void (-2022 + -5 * 681 + 5427) !== o.r && (o.r = void (7845 + 29 * 103 + 1 * -10832)), o = n;
  }
  t.s = e;
}
function ut(t) {
  de.call(this, void (1 * -352 + 1415 + 1 * -1063)), this.x = t, this.s = void (-1769 * 5 + -1616 + 1 * 10461), this.g = fi - (9619 + -687 * 14), this.f = -3249 + -1 * 5315 + 8568;
}
(ut.prototype = new de()).h = function() {
  if (this.f &= -(14066 + 49 * -287), 1 * 2131 + -1098 * 5 + 7 * 480 & this.f)
    return !(-5296 * 1 + 7218 + -1921);
  if ((-432 + -3 * -156 & this.f) == 32)
    return !(40 * 98 + -5677 * -1 + -9597);
  if (this.f &= -(-253 * -20 + 826 * 3 + -7533), this.g === fi)
    return !(2 * 3489 + 7587 + -14565);
  if (this.g = fi, this.f |= 274 * -14 + 1 * -4607 + 4 * 2111, this.i > 1328 + -7 * -1081 + -8895 && !zg(this))
    return this.f &= -(3959 * 1 + -2137 + -7 * 260), !0;
  var t = ie;
  try {
    $g(this), ie = this;
    var o = this.x();
    (150 + 9913 * 1 + -10047 & this.f || this.v !== o || 305 * -23 + 1327 * -4 + 12323 === this.i) && (this.v = o, this.f &= -(-5821 + -139 * -42), this.i++);
  } catch (e) {
    this.v = e, this.f |= -6536 + -1 * 1446 + 7998, this.i++;
  }
  return ie = t, qg(this), this.f &= -(8018 + -2 * -3776 + 112 * -139), !(-7254 + 5 * -757 + 11039);
}, ut.prototype.S = function(t) {
  if (void (889 * -1 + -3828 + -1 * -4717) === this.t) {
    this.f |= 1 * 4650 + 7786 + -310 * 40;
    for (var o = this.s; void (8399 * 1 + 9091 + -5830 * 3) !== o; o = o.n)
      o.S.S(o);
  }
  de.prototype.S.call(this, t);
}, ut.prototype.U = function(t) {
  if (void (-2 * 720 + 2628 + 99 * -12) !== this.t && (de.prototype.U.call(this, t), void (-1063 * -1 + 1522 + -11 * 235) === this.t)) {
    this.f &= -(7924 + 2179 * -4 + 825);
    for (var o = this.s; void (-6146 + -6 * -594 + 2582) !== o; o = o.n)
      o.S.U(o);
  }
}, ut.prototype.N = function() {
  if (!(139 * 22 + 1 * -541 + 5 * -503 & this.f)) {
    this.f |= -2257 + 1149 * 5 + -3482;
    for (var t = this.t; void (5256 + -9 * 584) !== t; t = t.x)
      t.t.N();
  }
}, ut.prototype.peek = function() {
  if (this.h() || pi(), 30 * 179 + -702 + -4652 & this.f)
    throw this.v;
  return this.v;
}, Object.defineProperty(ut.prototype, "value", { get: function() {
  1 & this.f && pi();
  var t = Ug(this);
  if (this.h(), void (617 * 8 + 471 * -6 + -2110) !== t && (t.i = this.i), 1346 * 4 + 6634 + -34 * 353 & this.f)
    throw this.v;
  return this.v;
} });
function wI(t) {
  return new ut(t);
}
function _g(t) {
  var o = t.u;
  if (t.u = void (-4919 + 1 * 4919), typeof o == "function") {
    Qt++;
    var e = ie;
    ie = void (8881 + 1 * -8881);
    try {
      o();
    } catch (n) {
      throw t.f &= -(-1 * -877 + -8243 + 7368), t.f |= -99 * 55 + -23 * 1 + 37 * 148, rr(t), n;
    } finally {
      ie = e, or();
    }
  }
}
function rr(t) {
  for (var o = t.s; o !== void 0; o = o.n)
    o.S.U(o);
  t.x = void (146 * 13 + -5835 + 31 * 127), t.s = void (4478 + 2239 * -2), _g(t);
}
function BI(t) {
  if (ie !== this)
    throw new Error("Out-of-order effect");
  qg(this), ie = t, this.f &= -(761 * -13 + 3373 + 6522), 95 * 25 + 329 + -2696 & this.f && rr(this), or();
}
function bn(t) {
  this.x = t, this.u = void (-4188 + -6 * -698), this.s = void (-3310 + -2 * -1655), this.o = void (-103 * 6 + 33 * 86 + -2220), this.f = -6423 + -3 * -2821 + -2008;
}
bn.prototype.c = function() {
  var t = this.S();
  try {
    if (-9535 + -13 * -361 + 10 * 485 & this.f || void (3271 * 2 + -7054 + 4 * 128) === this.x)
      return;
    var o = this.x();
    typeof o == "function" && (this.u = o);
  } finally {
    t();
  }
}, bn.prototype.S = function() {
  -5006 + 5007 * 1 & this.f && pi(), this.f |= -2 * 3407 + -7976 + 14791, this.f &= -(-39 * 94 + -2995 + 6670), _g(this), $g(this), Qt++;
  var t = ie;
  return ie = this, BI.bind(this, t);
}, bn.prototype.N = function() {
  !(-1 * -2077 + 2442 + -4517 & this.f) && (this.f |= -1 * 1717 + -8 * -1247 + -8257, this.o = Sn, Sn = this);
}, bn.prototype.d = function() {
  this.f |= -8145 + -1725 * 1 + 898 * 11, -4 * 523 + 4940 + -73 * 39 & this.f || rr(this);
};
function ar(t) {
  var o = new bn(t);
  try {
    o.c();
  } catch (e) {
    throw o.d(), e;
  }
  return o.d.bind(o);
}
var so;
function Ut(t, o) {
  G[t] = o.bind(null, G[t] || function() {
  });
}
function qn(t) {
  so && so(), so = t && t.S();
}
function es(t) {
  var o = this, e = t.data, n = ts(e);
  n.value = e;
  var i = Ue(function() {
    for (var r = o.__v; r = r.__; )
      if (r.__c) {
        r.__c.__$f |= -729 + 1 * -4351 + 5084;
        break;
      }
    return o.__$u.c = function() {
      var a;
      !ja(i.peek()) && -6417 + 5 * 1284 === ((a = o.base) == null ? void (-1486 + 2 * 3049 + -4612) : a.nodeType) ? o.base.data = i.peek() : (o.__$f |= 1, o.setState({}));
    }, wI(function() {
      var a = n.value.value;
      return a === 0 ? 815 * 10 + 5070 + -13220 : !(22 * -103 + -131 * 11 + 3707) === a ? "" : a || "";
    });
  }, []);
  return i.value;
}
es.displayName = "_st";
var Ro = {};
Ro.configurable = !0, Ro.value = void (-7542 + 3 * 891 + 541 * 9);
var Vo = {};
Vo.configurable = !(-123 * 79 + 124 * 38 + -455 * -11), Vo.value = es;
var Po = {};
Po.configurable = !(-8561 + -3415 * 2 + 15391), Po.get = function() {
  var t = {};
  return t.data = this, t;
};
var Eo = {};
Eo.configurable = !0, Eo.value = 1;
var pn = {};
pn.constructor = Ro, pn.type = Vo, pn.props = Po, pn.__b = Eo, Object.defineProperties(de.prototype, pn), Ut("__b", function(t, o) {
  if (typeof o.type == "string") {
    var e, n = o.props;
    for (var i in n)
      if (i !== "children") {
        var r = n[i];
        r instanceof de && (e || (o.__np = e = {}), e[i] = r, n[i] = r.peek());
      }
  }
  t(o);
}), Ut("__r", function(t, o) {
  qn();
  var e, n = o.__c;
  n && (n.__$f &= -(-2033 + 11 * 769 + 6424 * -1), (e = n.__$u) === void 0 && (n.__$u = e = function(i) {
    var r;
    return ar(function() {
      r = this;
    }), r.c = function() {
      n.__$f |= -30 * 156 + -9558 + -1 * -14239, n.setState({});
    }, r;
  }())), qn(e), t(o);
}), Ut("__e", function(t, o, e, n) {
  qn(), t(o, e, n);
}), Ut("diffed", function(t, o) {
  qn();
  var e;
  if (typeof o.type == "string" && (e = o.__e)) {
    var n = o.__np, i = o.props;
    if (n) {
      var r = e.U;
      if (r)
        for (var a in r) {
          var g = r[a];
          void (2909 * -1 + -9886 + 12795) !== g && !(a in n) && (g.d(), r[a] = void (8304 + -4 * 1783 + -1172));
        }
      else
        e.U = r = {};
      for (var s in n) {
        var I = r[s], C = n[s];
        void (124 * 70 + -1 * 2663 + 547 * -11) === I ? (I = SI(e, s, C, i), r[s] = I) : I.o(C, i);
      }
    }
  }
  t(o);
});
function SI(t, o, e, n) {
  var i = o in t && t.ownerSVGElement === void 0, r = Qg(e);
  return { o: function(a, g) {
    r.value = a, n = g;
  }, d: ar(function() {
    var a = r.value.value;
    n[o] !== a && (n[o] = a, i ? t[o] = a : a ? t.setAttribute(o, a) : t.removeAttribute(o));
  }) };
}
Ut("unmount", function(t, o) {
  if (typeof o.type == "string") {
    var e = o.__e;
    if (e) {
      var n = e.U;
      if (n) {
        e.U = void (-8193 + -3 * -2731);
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
      g && (a.__$u = void (-4029 + 155 * -43 + 1 * 10694), g.d());
    }
  }
  t(o);
}), Ut("__h", function(t, o, e, n) {
  (n < 3 || -7 * 662 + 983 * -8 + 12507 === n) && (o.__$f |= -35 * -137 + -5387 + 594), t(o, e, n);
}), Oe.prototype.shouldComponentUpdate = function(t, o) {
  var e = this.__$u;
  if (!(e && void (71 * 64 + -3392 + 4 * -288) !== e.s || 7 * -1396 + -3799 + -2715 * -5 & this.__$f))
    return !(8871 + -3 * 107 + 38 * -225);
  if (-6137 + -3 * -451 + 4787 & this.__$f)
    return !0;
  for (var n in o)
    return !(-3997 * 2 + 1 * 8677 + -683);
  for (var i in t)
    if (i !== "__source" && t[i] !== this.props[i])
      return !(831 + 831 * -1);
  for (var r in this.props)
    if (!(r in t))
      return !(-9644 + 352 * -17 + 4 * 3907);
  return !(2 * 1873 + 903 + -14 * 332);
};
function ts(t) {
  return Ue(function() {
    return Qg(t);
  }, []);
}
const gr = (t) => {
  const { height: o, width: e } = Yg(t), n = (t.width - e) / (9181 + 6313 * -1 + -1 * 2866), i = (t.height - o) / (1 * 461 + -218 * -11 + -2857), r = {};
  return r.shiftX = n, r.shiftY = i, r.width = e, r.height = o, r;
}, ns = (t, o) => {
  const { height: e, width: n } = Yg(t), i = Pi(t.width, t.height), r = n - i * o * (8588 + -3 * 2182 + -2040), a = e - i * o * (1 * -7747 + -2397 + 10146), g = (t.width - r) / (-8689 + 10 * 372 + -1657 * -3), s = (t.height - a) / (-4785 + 1 * 5735 + -948), I = {};
  return I.shiftX = g, I.shiftY = s, I.width = r, I.height = a, I;
}, co = (t, o) => {
  const { shiftX: e, shiftY: n } = gr(t), i = {};
  return i.x = o.x + e, i.y = o.y + n, i;
}, GI = (t, o) => ({ ...o, topLeft: co(t, o.topLeft), bottomRight: co(t, o.bottomRight), faceCenter: co(t, o.faceCenter) }), is = (t, o) => {
  const { faceCenter: e, faceSize: n } = t, i = wx(n, o), r = {};
  r.x = e.x, r.y = e.y - i;
  const a = {};
  a.x = e.x + i, a.y = e.y;
  const g = {};
  g.x = e.x, g.y = e.y + i;
  const s = {};
  s.x = e.x - i, s.y = e.y;
  const I = {};
  return I.top = r, I.right = a, I.bottom = g, I.left = s, Mt(I);
}, ZI = (t, o) => {
  const {
    bottomRight: e,
    faceCenter: n,
    topLeft: i
  } = o, r = {
    topLeft: i,
    width: e.x - i.x,
    height: e.y - i.y
  };
  Xg(t, r, "rgba(255, 0, 0, 0.3)", !0), jg(t, n, "lime");
}, kI = (t, o, e) => {
  const n = is(o, e);
  Object.values(n).map((i) => jg(t, i, "orange"));
}, KI = ({
  cameraResolution: t,
  detectionDetails: o,
  isImageMirror: e
}) => {
  const {
    faceCameraOptions: {
      thresholds: n
    }
  } = Jg(), i = Wt(null);
  if (be(() => {
    if (!i.current)
      return;
    i.current.width = t.width, i.current.height = t.height, mx(i.current);
    const f = gr(t), v = ns(t, n.outOfBoundsThreshold), w = vx(t);
    o.value && (ZI(i.current, o.value.face), kI(i.current, o.value.face, t), go(i.current, f, "lime"), go(i.current, v, "yellow"), go(i.current, w, "blue"));
  }, [t, n, o]), !o.value)
    return null;
  const {
    detectionTime: r,
    face: a,
    fps: g,
    instructionCode: s,
    invalidValidators: I,
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
    "Component version": "5.2.4"
  };
  return u && (p["SAM version"] = u), I.length > 0 && (p["Invalid validators"] = I.join(", ")), le(cx, {
    ref: i,
    cameraResolution: t,
    detectionDetails: p,
    isImageMirror: e
  });
}, HI = async () => WebAssembly.validate(new Uint8Array([-8031 + 2633 * -3 + -2655 * -6, 3415 + 1 * -3318, 1 * -2953 + 15 * 503 + -11 * 407, 7 * 761 + 2237 * -1 + -11 * 271, 2 * -2692 + 7956 + 857 * -3, 0, -2622 + 2 * -1667 + 5956, 1 * -5651 + -4662 + 10313, 5 * -893 + -5 * 1459 + -19 * -619, -8469 * 1 + 7173 * -1 + 1 * 15647, -1 * 2638 + -5149 + 7788, -7324 + -1 * -5046 + 1187 * 2, 8173 * -1 + -6609 + 14782, 3 * 148 + 7485 * -1 + 7042, -6664 + -1060 * -1 + -69 * -83, 2425 * -3 + 1476 + 5802, -513 + -5 * -103, 2351 * -3 + 8198 + 143 * -8, 1183 * 7 + -1110 + -7171, -1 * -5119 + -9013 + 3904, -6 * 665 + -5254 + 14 * 661, 210 * -11 + -20 * 17 + 2651, -44 * -83 + 9596 + -13240, 1211 + -69 * 1 + -571 * 2, 119 * 15 + 2486 + -4206, 3430 * 1 + 4627 * -1 + 1197, 20 * 307 + 4556 * -1 + -1331, 3339 + 1 * -9721 + 6397, -617 * 11 + 1361 + -1893 * -3, 1758 + -10 * 166, -7155 * -1 + 4639 + -11783]));
async function WI() {
  const t = {};
  t.name = Ng, t.length = 256;
  const o = await window.crypto.subtle.generateKey(t, !0, ["encrypt", "decrypt"]), e = Uint8Array.from(Array(149 * 53 + -3039 + -807 * 6).fill(9594 + -3982 * 1 + -5612)), n = window.crypto.getRandomValues(e), i = {};
  return i.key = o, i.iv = n, i;
}
async function OI(t) {
  const { iv: o, key: e } = await WI(), n = {};
  n.name = Ng, n.iv = o;
  const i = await window.crypto.subtle.encrypt(n, e, t), r = await window.crypto.subtle.exportKey("raw", e), a = {};
  return a.message = i, a.key = r, a.iv = o, a;
}
function RI(t) {
  const o = new ArrayBuffer(t.length), e = new Uint8Array(o);
  for (let n = -1 * 4783 + 2928 + 7 * 265, i = t.length; n < i; n++)
    e[n] = t.charCodeAt(n);
  return o;
}
function VI() {
  const t = "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", o = window.atob(t), e = window.atob(o), n = RI(e), i = {};
  return i.name = Lg, i.hash = Xx, window.crypto.subtle.importKey("spki", n, i, !0, ["encrypt"]);
}
async function PI(t) {
  const o = await VI(), e = {};
  return e.name = Lg, window.crypto.subtle.encrypt(e, o, t);
}
async function EI(t) {
  const { iv: o, key: e, message: n } = await OI(t), i = await PI(e), r = {};
  return r.key = i, r.iv = o, r.message = n, r;
}
async function YI(t) {
  const o = await window.crypto.subtle.digest("SHA-1", t);
  return Array.from(new Uint8Array(o)).map((e) => e.toString(-6658 + 7042 * -1 + 2 * 6858).padStart(2 * 2157 + 53 * 74 + -8234, "0")).join("");
}
class NI {
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
    Q(this, "imagesForDuplicateDetection", new ir(Dx));
  }
  async initDetector(o) {
    await this.detector.initSamModule(location.href, o);
    const e = await this.detector.getSamVersion();
    this.setSamVersion(e), this.isDetectorInitialized = !0;
  }
  async getInstructionSet() {
    return await HI() ? wa.SIMD : wa.NO_SIMD;
  }
  async init({ thresholds: o, wasmDirectoryPath: e }) {
    this.setThresholds(o), await this.initDetector(e);
  }
  setSamVersion(o) {
    if (!o || !this.areVersionsCompatible(o))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new te("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = o;
  }
  areVersionsCompatible(o) {
    return o === Ux;
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
      throw new te("Thresholds for " + this.className + " are not provided");
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
    const e = o.length / Mx, n = e / (-8188 * 1 + -1 * -3818 + 1 * 4372), i = o.length / (66 * -61 + -727 + 4755), r = await YI(o.slice(i - n, i + n));
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
    e.ready = new Promise(function(c, x) {
      n = c, i = x;
    });
    var r = {}, a;
    for (a in e)
      e.hasOwnProperty(a) && (r[a] = e[a]);
    var g = "./this.program", s = !(3525 + -881 * 4), I = !(-101 * -3 + 379 + -1 * 681);
    s = typeof window == "object", I = typeof importScripts == "function";
    var C = "", u;
    (s || I) && (I ? C = self.location.href : document.currentScript && (C = document.currentScript.src), t && (C = t), C.indexOf("blob:") !== 0 ? C = C.substr(-1 * 4267 + 5 * 1733 + 2 * -2199, C.lastIndexOf("/") + (302 + -1 * 7069 + 6768)) : C = "", I && (u = function(c) {
      var x = new XMLHttpRequest();
      return x.open("GET", c, !(14 * -447 + -907 * -4 + 3 * 877)), x.responseType = "arraybuffer", x.send(null), new Uint8Array(x.response);
    }));
    var p = e.printErr || console.warn.bind(console);
    for (a in r)
      r.hasOwnProperty(a) && (e[a] = r[a]);
    r = null, e.thisProgram && (g = e.thisProgram);
    var f;
    e.wasmBinary && (f = e.wasmBinary), e.noExitRuntime && e.noExitRuntime, typeof WebAssembly != "object" && _e("no native wasm support detected");
    var v, w = !1;
    function E(c) {
      c || _e("Assertion failed: undefined");
    }
    var k = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void (1134 * 1 + 1835 * 2 + -4 * 1201);
    function O(c, x, l) {
      var A = ue;
      if (-4809 + 687 * 7 < l) {
        l = x + l - (8686 + -5 * -1231 + -8 * 1855);
        for (var m = -2225 * -2 + 3334 + -1112 * 7; m < c.length; ++m) {
          var b = c.charCodeAt(m);
          if (37862 * -1 + 91189 + -11 * -179 <= b && 3 * -12945 + -21287 * -5 + 13 * -789 >= b) {
            var S = c.charCodeAt(++m);
            b = -1 * -47441 + 71 * -1489 + -1 * -123814 + ((b & 9380 + 137 * -61) << 941 * 1 + -146 * -20 + -3851) | S & -369 * 17 + -7467 * -1 + 9 * -19;
          }
          if (-3201 + -1 * 3461 + 6789 >= b) {
            if (x >= l)
              break;
            A[x++] = b;
          } else {
            if (4153 * 1 + 23 * -94 + -14 * -4 >= b) {
              if (x + (77 * 99 + 3442 + -11064) >= l)
                break;
              A[x++] = 1 * 469 + -7513 * 1 + -108 * -67 | b >> -3 * 1063 + -1237 * -5 + -2990;
            } else {
              if (-19 * -6211 + 1 * -91475 + -1 * -39001 >= b) {
                if (x + (5331 + 2438 * 3 + 1 * -12643) >= l)
                  break;
                A[x++] = 2679 + 8101 * 1 + 28 * -377 | b >> 17 * 422 + -879 + -6283;
              } else {
                if (x + (-1 * -2191 + 184 * 14 + 4 * -1191) >= l)
                  break;
                A[x++] = 8667 + -8427 * 1 | b >> -6281 * -1 + -1692 + 7 * -653, A[x++] = -1 * 2122 + 9522 + -7272 | b >> 437 * -14 + -16 * -467 + -1342 & -1289 * -1 + -4198 + 2972;
              }
              A[x++] = -1 * 2831 + -385 * 17 + 9504 | b >> -4429 * -1 + -1 * 4677 + 254 & -7 * 778 + 5881 + -372;
            }
            A[x++] = 8128 + 7 * -343 + -5599 | b & -2289 + 3313 * 1 + -31 * 31;
          }
        }
        A[x] = -6660 + -4 * -1285 + 1520;
      }
    }
    var R = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void (-1129 * 8 + -3297 * 3 + -127 * -149);
    function U(c, x) {
      for (var l = c >> 1, A = l + x / (2125 + -1412 * -1 + -707 * 5); !(l >= A) && Pe[l]; )
        ++l;
      if (l <<= 921 * -5 + -1691 + -1 * -6297, 2546 + 3 * -838 < l - c && R)
        return R.decode(ue.subarray(c, l));
      for (l = 0, A = ""; ; ) {
        var m = Ae[c + 2 * l >> 1];
        if (-7 * 184 + -5827 + 7115 == m || l == x / (8213 * -1 + -7 * -346 + 5793))
          return A;
        ++l, A += String.fromCharCode(m);
      }
    }
    function D(c, x, l) {
      if (void (-22 * -81 + 1 * 7814 + -9596) === l && (l = -4244724898 + 6392208545 * 1), 7171 * 1 + -4819 + -2350 > l)
        return 7386 + 143 * -61 + 1 * 1337;
      l -= 9067 + -245 * 37;
      var A = x;
      l = l < (-1 * 3069 + -9577 + 12648) * c.length ? l / (-7751 * 1 + -9133 + -16886 * -1) : c.length;
      for (var m = 6484 + 1 * -3551 + -2933; m < l; ++m)
        Ae[x >> -9934 * -1 + -9516 + -417] = c.charCodeAt(m), x += -2 * 2823 + -2915 + 8563;
      return Ae[x >> 9560 + -79 * 121] = -3249 + 137 * 49 + 4 * -866, x - A;
    }
    function j(c) {
      return (11 * 499 + -2579 * 3 + 2250) * c.length;
    }
    function Z(c, x) {
      for (var l = 1277 + -2 * 4804 + 1 * 8331, A = ""; !(l >= x / (-2 * 2941 + -1 * 9139 + 15025)); ) {
        var m = re[c + 4 * l >> 2];
        if (-1 * 9391 + -2232 + 1 * 11623 == m)
          break;
        ++l, 28286 + -250 * -149 <= m ? (m -= -61781 * -1 + -21746 * 2 + 1 * 47247, A += String.fromCharCode(-75589 + -130885 * -1 | m >> 1637 + -24 * 49 + 41 * -11, 56320 | m & -1 * -3080 + 8257 + -10314)) : A += String.fromCharCode(m);
      }
      return A;
    }
    function _(c, x, l) {
      if (l === void 0 && (l = 2147483647), -39 * -13 + 2548 + -1 * 3051 > l)
        return 0;
      var A = x;
      l = A + l - (-1566 * 5 + -687 * -3 + 5773 * 1);
      for (var m = -1 * -5 + 16 * 429 + -6869; m < c.length; ++m) {
        var b = c.charCodeAt(m);
        if (-78420 + -1985 * -7 + 1 * 119821 <= b && 113779 + 1 * 14341 + 10111 * -7 >= b) {
          var S = c.charCodeAt(++m);
          b = 111431 * 1 + 3 * -29607 + -2 * -21463 + ((b & -460 + -2317 * 2 + -2039 * -3) << 10) | S & -7227 + 1299 * -5 + 14745;
        }
        if (re[x >> -10821 + -137 * -79] = b, x += 71 * 25 + 5 * 136 + -2451, x + (2 * -1865 + 1616 + 1059 * 2) > l)
          break;
      }
      return re[x >> 5315 + 77 * -69] = -39 * -74 + -1 * -7858 + -10744, x - A;
    }
    function z(c) {
      for (var x = -4843 + -1 * 2179 + 7022, l = 613 + 1 * -613; l < c.length; ++l) {
        var A = c.charCodeAt(l);
        -33523 + 29 * -2203 + 31 * 4926 <= A && 294 * -289 + -2 * 56598 + 255505 * 1 >= A && ++l, x += 19 * -57 + -5799 + 6886;
      }
      return x;
    }
    var ee, xe, ue, Ae, Pe, re, ae, $e, st;
    function we(c) {
      ee = c, e.HEAP8 = xe = new Int8Array(c), e.HEAP16 = Ae = new Int16Array(c), e.HEAP32 = re = new Int32Array(c), e.HEAPU8 = ue = new Uint8Array(c), e.HEAPU16 = Pe = new Uint16Array(c), e.HEAPU32 = ae = new Uint32Array(c), e.HEAPF32 = $e = new Float32Array(c), e.HEAPF64 = st = new Float64Array(c);
    }
    var Xe = e.INITIAL_MEMORY || -27896978 * -1 + 276 * 103681 + 1562 * -25439, qe = {};
    qe.initial = Xe / (2 * 40577 + 81426 + -2 * 48522), qe.maximum = 32768, e.wasmMemory ? v = e.wasmMemory : v = new WebAssembly.Memory(qe), v && (ee = v.buffer), Xe = ee.byteLength, we(ee);
    var pe = [], Rt = [], xn = [], pt = [];
    function ft() {
      var c = e.preRun.shift();
      pe.unshift(c);
    }
    var Ge = 836 + -44 * 19, Ze = null;
    e.preloadedImages = {}, e.preloadedAudios = {};
    function _e(c) {
      throw e.onAbort && e.onAbort(c), p(c), w = !(8313 + 1 * -7865 + -448), c = new WebAssembly.RuntimeError("abort(" + c + "). Build with -s ASSERTIONS=1 for more info."), i(c), c;
    }
    function Ee(c) {
      var x = ke;
      return String.prototype.startsWith ? x.startsWith(c) : 421 * -19 + -25 * -41 + -11 * -634 === x.indexOf(c);
    }
    function Vt() {
      return Ee("data:application/octet-stream;base64,");
    }
    var ke = "sam.wasm";
    if (!Vt()) {
      var Ye = ke;
      ke = e.locateFile ? e.locateFile(Ye, C) : C + Ye;
    }
    function ur() {
      try {
        if (f)
          return new Uint8Array(f);
        if (u)
          return u(ke);
        throw "both async and sync fetching of the wasm failed";
      } catch (c) {
        _e(c);
      }
    }
    function ws() {
      var c = {};
      return c.credentials = "same-origin", f || !s && !I || typeof fetch != "function" || Ee("file://") ? Promise.resolve().then(ur) : fetch(ke, c).then(function(x) {
        if (!x.ok)
          throw "failed to load wasm binary file at '" + ke + "'";
        return x.arrayBuffer();
      }).catch(function() {
        return ur();
      });
    }
    function Rn(c) {
      for (; -1 * 2954 + 3073 + -119 < c.length; ) {
        var x = c.shift();
        if (typeof x == "function")
          x(e);
        else {
          var l = x.Ba;
          typeof l == "number" ? void (2542 + 9349 * 1 + 1081 * -11) === x.ta ? Ni("v", l)() : Ni("vi", l)(x.ta) : l(void (5600 + -1 * 5600) === x.ta ? null : x.ta);
        }
      }
    }
    function Ni(c, x) {
      var l = [];
      return function() {
        l.length = arguments.length;
        for (var A = -106 * -41 + -11 * -898 + 1778 * -8; A < arguments.length; A++)
          l[A] = arguments[A];
        return l && l.length ? e["dynCall_" + c].apply(null, [x].concat(l)) : e["dynCall_" + c].call(null, x);
      };
    }
    function Bs(c) {
      this.da = c - (-3 * -2315 + 5490 + 1129 * -11), this.Oa = function(x) {
        re[this.da + (-716 + -3833 * 1 + 4557) >> -5152 + 5655 * -1 + -1201 * -9] = x;
      }, this.La = function(x) {
        re[this.da + (852 + -5 * 1369 + -1 * -5993) >> 2] = x;
      }, this.Ma = function() {
        re[this.da + (-10211 + -5 * -2043) >> 2553 * 3 + -1410 + -6247] = -6291 + -73 * 67 + 2 * 5591;
      }, this.Ka = function() {
        xe[this.da + (64 * -146 + 1 * 9001 + 355) >> -17456 + -1 * -17456] = -19 * 169 + -1121 * 7 + 11058;
      }, this.Na = function() {
        xe[this.da + (5853 * 1 + 3 * -607 + -4019) >> -2 * -17 + -9877 + 9843] = 2 * -1488 + -2893 * 1 + 5869;
      }, this.Fa = function(x, l) {
        this.Oa(x), this.La(l), this.Ma(), this.Ka(), this.Na();
      };
    }
    function Vn() {
      return -1 * -4219 + -5247 + 257 * 4 < Vn.xa;
    }
    function Li(c) {
      switch (c) {
        case -8334 + -1 * -8335:
          return -4439 + -1379 * -6 + -1 * 3835;
        case -1 * -6661 + -138 * -9 + 1 * -7901:
          return -2166 + 197 * 11;
        case 5210 + -919 * 6 + 308:
          return -3589 + 218 * -29 + 9913 * 1;
        case 93 * 25 + -1 * 2231 + 1 * -86:
          return 3;
        default:
          throw new TypeError("Unknown type size: " + c);
      }
    }
    var Cr = void (1 * -3869 + -1 * -4079 + -210);
    function ye(c) {
      for (var x = ""; ue[c]; )
        x += Cr[ue[c++]];
      return x;
    }
    var Pt = {}, ht = {}, Pn = {};
    function Fi(c) {
      if (void (-1803 * -5 + 1164 + -10179) === c)
        return "_unknown";
      c = c.replace(/[^a-zA-Z0-9_]/g, "$");
      var x = c.charCodeAt(4206 * -1 + 9068 + -4862);
      return -1049 + -749 * 1 + 1846 <= x && 57 >= x ? "_" + c : c;
    }
    function Di(c, x) {
      return c = Fi(c), new Function("body", "return function " + c + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(x);
    }
    function Ti(c) {
      var x = Error, l = Di(c, function(A) {
        this.name = c, this.message = A, A = Error(A).stack, void (-1057 + 8 * 310 + -1423) !== A && (this.stack = this.toString() + `
` + A.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return l.prototype = Object.create(x.prototype), l.prototype.constructor = l, l.prototype.toString = function() {
        return void (2841 * -1 + -2 * -4444 + -6047) === this.message ? this.name : this.name + ": " + this.message;
      }, l;
    }
    var Et = void (-5981 + -223 * 43 + 15570);
    function F(c) {
      throw new Et(c);
    }
    var dr = void 0;
    function En(c) {
      throw new dr(c);
    }
    function Yt(c, x, l) {
      function A(y) {
        y = l(y), y.length !== c.length && En("Mismatched type converter count");
        for (var K = -4250 + -71 * -61 + -81; K < c.length; ++K)
          et(c[K], y[K]);
      }
      c.forEach(function(y) {
        Pn[y] = x;
      });
      var m = Array(x.length), b = [], S = 7101 + 3931 * 1 + 1 * -11032;
      x.forEach(function(y, K) {
        ht.hasOwnProperty(y) ? m[K] = ht[y] : (b.push(y), Pt.hasOwnProperty(y) || (Pt[y] = []), Pt[y].push(function() {
          m[K] = ht[y], ++S, S === b.length && A(m);
        }));
      }), -27 * 208 + -6478 + 12094 === b.length && A(m);
    }
    function et(c, x, l) {
      if (l = l || {}, !("argPackAdvance" in x))
        throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var A = x.name;
      if (c || F('type "' + A + '" must have a positive integer typeid pointer'), ht.hasOwnProperty(c)) {
        if (l.Ea)
          return;
        F("Cannot register type '" + A + "' twice");
      }
      ht[c] = x, delete Pn[c], Pt.hasOwnProperty(c) && (x = Pt[c], delete Pt[c], x.forEach(function(m) {
        m();
      }));
    }
    function Ss(c) {
      var x = {};
      return x.count = c.count, x.oa = c.oa, x.pa = c.pa, x.da = c.da, x.fa = c.fa, x.ga = c.ga, x.ha = c.ha, x;
    }
    function Xi(c) {
      F(c.A.fa.ea.name + " instance already deleted");
    }
    var ji = !(1 * 3153 + -763 + -2389);
    function Ar() {
    }
    function pr(c) {
      --c.count.value, 19 * 11 + -95 * -75 + 2 * -3667 === c.count.value && (c.ga ? c.ha.na(c.ga) : c.fa.ea.na(c.da));
    }
    function In(c) {
      return typeof FinalizationGroup > "u" ? (In = function(x) {
        return x;
      }, c) : (ji = new FinalizationGroup(function(x) {
        for (var l = x.next(); !l.done; l = x.next())
          l = l.value, l.da ? pr(l) : console.warn("object already deleted: " + l.da);
      }), In = function(x) {
        return ji.register(x, x.A, x.A), x;
      }, Ar = function(x) {
        ji.unregister(x.A);
      }, In(c));
    }
    var ln = void (-8 * 991 + -1 * 1699 + 9627), un = [];
    function Mi() {
      for (; un.length; ) {
        var c = un.pop();
        c.A.oa = !(8670 + 94 * -38 + -1699 * 3), c.delete();
      }
    }
    function ct() {
    }
    var fr = {};
    function Gs(c, x) {
      var l = e;
      if (void (6271 + 3 * 1847 + -11812) === l[c].ja) {
        var A = l[c];
        l[c] = function() {
          return l[c].ja.hasOwnProperty(arguments.length) || F("Function '" + x + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + l[c].ja + ")!"), l[c].ja[arguments.length].apply(this, arguments);
        }, l[c].ja = [], l[c].ja[A.ya] = A;
      }
    }
    function hr(c, x, l) {
      e.hasOwnProperty(c) ? ((void (-5311 + -12 * -638 + -2345) === l || void (-2600 + 2 * 4507 + -6414) !== e[c].ja && void (497 * -1 + -1018 * -2 + -1539) !== e[c].ja[l]) && F("Cannot register public name '" + c + "' twice"), Gs(c, c), e.hasOwnProperty(l) && F("Cannot register multiple overloads of a function with the same number of arguments (" + l + ")!"), e[c].ja[l] = x) : (e[c] = x, void (-1456 + -7 * 397 + -847 * -5) !== l && (e[c].Ra = l));
    }
    function Zs(c, x, l, A, m, b, S, y) {
      this.name = c, this.constructor = x, this.ma = l, this.na = A, this.ia = m, this.Ca = b, this.qa = S, this.Aa = y;
    }
    function Yn(c, x, l) {
      for (; x !== l; )
        x.qa || F("Expected null or instance of " + l.name + ", got an instance of " + x.name), c = x.qa(c), x = x.ia;
      return c;
    }
    function ks(c, x) {
      return x === null ? (this.ua && F("null is not a valid " + this.name), 6110 + 1254 * 4 + -11126) : (x.A || F('Cannot pass "' + Lt(x) + '" as a ' + this.name), x.A.da || F("Cannot pass deleted object as a pointer of type " + this.name), Yn(x.A.da, x.A.fa.ea, this.ea));
    }
    function Ks(c, x) {
      if (x === null) {
        if (this.ua && F("null is not a valid " + this.name), this.sa) {
          var l = this.Ha();
          return c !== null && c.push(this.na, l), l;
        }
        return -9356 + 2339 * 4;
      }
      if (x.A || F('Cannot pass "' + Lt(x) + '" as a ' + this.name), x.A.da || F("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && x.A.fa.ra && F("Cannot convert argument of type " + (x.A.ha ? x.A.ha.name : x.A.fa.name) + " to parameter type " + this.name), l = Yn(x.A.da, x.A.fa.ea, this.ea), this.sa)
        switch (void (-2657 * -3 + 2 * -4531 + 1 * 1091) === x.A.ga && F("Passing raw pointer to smart pointer is illegal"), this.Pa) {
          case -3754 + 317 * 10 + 584:
            x.A.ha === this ? l = x.A.ga : F("Cannot convert argument of type " + (x.A.ha ? x.A.ha.name : x.A.fa.name) + " to parameter type " + this.name);
            break;
          case 6286 + -5 * 1604 + -1735 * -1:
            l = x.A.ga;
            break;
          case -2931 * -3 + 1105 + -4948 * 2:
            if (x.A.ha === this)
              l = x.A.ga;
            else {
              var A = x.clone();
              l = this.Ia(l, Nt(function() {
                A.delete();
              })), c !== null && c.push(this.na, l);
            }
            break;
          default:
            F("Unsupporting sharing policy");
        }
      return l;
    }
    function Hs(c, x) {
      return x === null ? (this.ua && F("null is not a valid " + this.name), 2624 + -307 * -29 + 1 * -11527) : (x.A || F('Cannot pass "' + Lt(x) + '" as a ' + this.name), x.A.da || F("Cannot pass deleted object as a pointer of type " + this.name), x.A.fa.ra && F("Cannot convert argument of type " + x.A.fa.name + " to parameter type " + this.name), Yn(x.A.da, x.A.fa.ea, this.ea));
    }
    function Nn(c) {
      return this.fromWireType(ae[c >> -6277 * -1 + 8453 + -14728]);
    }
    function mr(c, x, l) {
      return x === l ? c : void (9410 + -2 * 1318 + -6774) === l.ia ? null : (c = mr(c, x, l.ia), c === null ? null : l.Aa(c));
    }
    var Cn = {};
    function Ws(c, x) {
      for (void (9651 + 5449 * -1 + -4202) === x && F("ptr should not be undefined"); c.ia; )
        x = c.qa(x), c = c.ia;
      return Cn[x];
    }
    function Ln(c, x) {
      x.fa && x.da || En("makeClassHandle requires ptr and ptrType"), !!x.ha != !!x.ga && En("Both smartPtrType and smartPtr must be specified");
      var l = {};
      l.value = 1, x.count = l;
      var A = {};
      A.value = x;
      var m = {};
      return m.A = A, In(Object.create(c, m));
    }
    function tt(c, x, l, A) {
      this.name = c, this.ea = x, this.ua = l, this.ra = A, this.sa = !(-2468 * -4 + -43 * -218 + -3849 * 5), this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void (-10525 + -421 * -25), void (-7169 + 2306 * -4 + 97 * 169) !== x.ia ? this.toWireType = Ks : (this.toWireType = A ? ks : Hs, this.ka = null);
    }
    function br(c, x, l) {
      e.hasOwnProperty(c) || En("Replacing nonexistant public symbol"), void (139 * 3 + 4273 + -4690) !== e[c].ja && void (-12896 + -31 * -416) !== l ? e[c].ja[l] = x : (e[c] = x, e[c].ya = l);
    }
    function xt(c, x) {
      c = ye(c);
      var l = Ni(c, x);
      return typeof l != "function" && F("unknown function pointer with signature " + c + ": " + x), l;
    }
    var yr = void (1e4 + -2 * 3562 + -719 * 4);
    function vr(c) {
      c = Er(c);
      var x = ye(c);
      return nt(c), x;
    }
    function dn(c, x) {
      function l(b) {
        m[b] || ht[b] || (Pn[b] ? Pn[b].forEach(l) : (A.push(b), m[b] = !(26 + -1 * 2927 + 2901)));
      }
      var A = [], m = {};
      throw x.forEach(l), new yr(c + ": " + A.map(vr).join([", "]));
    }
    function wr(c, x) {
      for (var l = [], A = 3995 * -1 + -9932 + 733 * 19; A < c; A++)
        l.push(re[(x >> -947 * -1 + -31 * 82 + -1597 * -1) + A]);
      return l;
    }
    function Fn(c) {
      for (; c.length; ) {
        var x = c.pop();
        c.pop()(x);
      }
    }
    function Br(c, x, l) {
      return c instanceof Object || F(l + ' with invalid "this": ' + c), c instanceof x.ea.constructor || F(l + ' incompatible with "this" of type ' + c.constructor.name), c.A.da || F("cannot call emscripten binding method " + l + " on deleted object"), Yn(c.A.da, c.A.fa.ea, x.ea);
    }
    var Sr = {};
    Sr.value = void (5 * -111 + -937 + 1492);
    var Gr = {};
    Gr.value = null;
    var Zr = {};
    Zr.value = !(-5631 + 3566 * -2 + 12763);
    var kr = {};
    kr.value = !(426 * 5 + -4 * -2287 + -11277);
    var Ji = [], Ke = [{}, Sr, Gr, Zr, kr];
    function Ui(c) {
      4 < c && 2447 + -2447 * 1 === --Ke[c].Ja && (Ke[c] = void (7792 + -8 * -727 + 9 * -1512), Ji.push(c));
    }
    function Nt(c) {
      switch (c) {
        case void (8915 + 1 * 7741 + -12 * 1388):
          return 1;
        case null:
          return 124 * -1 + 5112 + -4986;
        case !(6920 + -10 * 692):
          return 3;
        case !(-19 * 458 + 8720 + -17):
          return -1 * 7373 + 3371 * 2 + -5 * -127;
        default:
          var x = Ji.length ? Ji.pop() : Ke.length, l = {};
          return l.Ja = 1, l.value = c, Ke[x] = l, x;
      }
    }
    function Lt(c) {
      if (c === null)
        return "null";
      var x = typeof c;
      return x === "object" || x === "array" || x === "function" ? c.toString() : "" + c;
    }
    function Os(c, x) {
      switch (x) {
        case -7126 + -1 * -5249 + 1 * 1879:
          return function(l) {
            return this.fromWireType($e[l >> -1693 + 823 * 5 + 5 * -484]);
          };
        case 4559 * -2 + 8209 + 16 * 57:
          return function(l) {
            return this.fromWireType(st[l >> -9100 + -1 * -8251 + 852]);
          };
        default:
          throw new TypeError("Unknown float type: " + c);
      }
    }
    function Rs(c) {
      var x = Function;
      if (!(x instanceof Function))
        throw new TypeError("new_ called with constructor type " + typeof x + " which is not a function");
      var l = Di(x.name || "unknownFunctionName", function() {
      });
      return l.prototype = x.prototype, l = new l(), c = x.apply(l, c), c instanceof Object ? c : l;
    }
    function Vs(c, x, l) {
      switch (x) {
        case -7 * 1416 + -144 * 45 + -24 * -683:
          return l ? function(A) {
            return xe[A];
          } : function(A) {
            return ue[A];
          };
        case 1:
          return l ? function(A) {
            return Ae[A >> 4032 + 2081 * -1 + -1950];
          } : function(A) {
            return Pe[A >> 5876 + -1565 * -6 + -5 * 3053];
          };
        case 3524 + -1 * 69 + -3453 * 1:
          return l ? function(A) {
            return re[A >> 1711 * 5 + -93 * 13 + -7344];
          } : function(A) {
            return ae[A >> 1363 * 3 + -486 * -13 + -10405 * 1];
          };
        default:
          throw new TypeError("Unknown integer type: " + c);
      }
    }
    function Qi(c) {
      return c || F("Cannot use deleted val. handle = " + c), Ke[c].value;
    }
    function Kr(c, x) {
      var l = ht[c];
      return void (2867 * 3 + -911 * 4 + 4957 * -1) === l && F(x + " has unknown type " + vr(c)), l;
    }
    var Ps = {}, Hr = {};
    function Wr() {
      if (!zi) {
        var c = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: g || "./this.program" }, x;
        for (x in Hr)
          c[x] = Hr[x];
        var l = [];
        for (x in c)
          l.push(x + "=" + c[x]);
        zi = l;
      }
      return zi;
    }
    var zi, Or = [];
    function Rr(c) {
      var x = {}, l;
      for (l in c)
        (function(A) {
          var m = c[A];
          x[A] = typeof m == "function" ? function() {
            Or.push(A);
            try {
              return m.apply(null, arguments);
            } finally {
              if (w)
                return;
              var b = Or.pop();
              E(b === A);
            }
          } : m;
        })(l);
      return x;
    }
    for (var Vr = Array(-4854 + 5413 * -1 + 10523), Dn = 0; 3409 + -1 * 3153 > Dn; ++Dn)
      Vr[Dn] = String.fromCharCode(Dn);
    Cr = Vr, Et = e.BindingError = Ti("BindingError"), dr = e.InternalError = Ti("InternalError"), ct.prototype.isAliasOf = function(c) {
      if (!(this instanceof ct && c instanceof ct))
        return !(8100 + -15 * -623 + -17444);
      var x = this.A.fa.ea, l = this.A.da, A = c.A.fa.ea;
      for (c = c.A.da; x.ia; )
        l = x.qa(l), x = x.ia;
      for (; A.ia; )
        c = A.qa(c), A = A.ia;
      return x === A && l === c;
    }, ct.prototype.clone = function() {
      if (this.A.da || Xi(this), this.A.pa)
        return this.A.count.value += -13 * 291 + -3968 + -3876 * -2, this;
      var c = In(Object.create(Object.getPrototypeOf(this), { A: { value: Ss(this.A) } }));
      return c.A.count.value += 5416 + -604 * 7 + 1187 * -1, c.A.oa = !(-907 * -11 + 61 * 127 + -17723), c;
    }, ct.prototype.delete = function() {
      this.A.da || Xi(this), this.A.oa && !this.A.pa && F("Object already scheduled for deletion"), Ar(this), pr(this.A), this.A.pa || (this.A.ga = void (26 * -23 + -6083 + 6681), this.A.da = void (1 * -499 + -6295 + 6794));
    }, ct.prototype.isDeleted = function() {
      return !this.A.da;
    }, ct.prototype.deleteLater = function() {
      return this.A.da || Xi(this), this.A.oa && !this.A.pa && F("Object already scheduled for deletion"), un.push(this), -3608 + -3 * 2508 + -9 * -1237 === un.length && ln && ln(Mi), this.A.oa = !(-875 + 1 * 1734 + -859), this;
    }, tt.prototype.Da = function(c) {
      return this.wa && (c = this.wa(c)), c;
    }, tt.prototype.va = function(c) {
      this.na && this.na(c);
    }, tt.prototype.argPackAdvance = 7641 + -1 * 7633, tt.prototype.readValueFromPointer = Nn, tt.prototype.deleteObject = function(c) {
      c !== null && c.delete();
    }, tt.prototype.fromWireType = function(c) {
      function x() {
        return this.sa ? Ln(this.ea.ma, { fa: this.Ga, da: l, ha: this, ga: c }) : Ln(this.ea.ma, { fa: this, da: c });
      }
      var l = this.Da(c);
      if (!l)
        return this.va(c), null;
      var A = Ws(this.ea, l);
      if (void (2339 + 1 * -7173 + 4834) !== A)
        return -177 * -29 + -4612 + -521 * 1 === A.A.count.value ? (A.A.da = l, A.A.ga = c, A.clone()) : (A = A.clone(), this.va(c), A);
      if (A = this.ea.Ca(l), A = fr[A], !A)
        return x.call(this);
      A = this.ra ? A.za : A.pointerType;
      var m = mr(l, this.ea, A.ea);
      return m === null ? x.call(this) : this.sa ? Ln(A.ea.ma, { fa: A, da: m, ha: this, ga: c }) : Ln(A.ea.ma, { fa: A, da: m });
    }, e.getInheritedInstanceCount = function() {
      return Object.keys(Cn).length;
    }, e.getLiveInheritedInstances = function() {
      var c = [], x;
      for (x in Cn)
        Cn.hasOwnProperty(x) && c.push(Cn[x]);
      return c;
    }, e.flushPendingDeletes = Mi, e.setDelayFunction = function(c) {
      ln = c, un.length && ln && ln(Mi);
    }, yr = e.UnboundTypeError = Ti("UnboundTypeError"), e.count_emval_handles = function() {
      for (var c = 41 * -221 + 1897 + -12 * -597, x = -3 * -2777 + 5754 + 80 * -176; x < Ke.length; ++x)
        void (-5766 + -124 * -17 + -1 * -3658) !== Ke[x] && ++c;
      return c;
    }, e.get_first_emval = function() {
      for (var c = -3801 + -1598 * -1 + 4 * 552; c < Ke.length; ++c)
        if (void (1 * -6613 + 3314 * -3 + -215 * -77) !== Ke[c])
          return Ke[c];
      return null;
    }, Rt.push({ Ba: function() {
      Pr();
    } });
    var Es = { z: function(c) {
      return Tn(c + (11 * -807 + -2291 + -1 * -11184)) + (-3326 * -3 + 1 * -4219 + -5743);
    }, u: function(c, x, l) {
      throw new Bs(c).Fa(x, l), "uncaught_exception" in Vn ? Vn.xa++ : Vn.xa = -3682 * 1 + 448 * -6 + 6371, c;
    }, w: function(c, x, l, A, m) {
      var b = Li(l);
      x = ye(x), et(c, { name: x, fromWireType: function(S) {
        return !!S;
      }, toWireType: function(S, y) {
        return y ? A : m;
      }, argPackAdvance: 8, readValueFromPointer: function(S) {
        if (-2 * -2631 + -898 * 8 + 1923 * 1 === l)
          var y = xe;
        else if (4981 + 1 * 3541 + -8520 === l)
          y = Ae;
        else if (l === 4)
          y = re;
        else
          throw new TypeError("Unknown boolean type size: " + x);
        return this.fromWireType(y[S >> b]);
      }, ka: null });
    }, i: function(c, x, l, A, m, b, S, y, K, H, W, V, M) {
      W = ye(W), b = xt(m, b), y && (y = xt(S, y)), H && (H = xt(K, H)), M = xt(V, M);
      var se = Fi(W);
      hr(se, function() {
        dn("Cannot construct " + W + " due to unbound types", [A]);
      }), Yt([c, x, l], A ? [A] : [], function(P) {
        if (P = P[0], A)
          var je = P.ea, fe = je.ma;
        else
          fe = ct.prototype;
        P = Di(se, function() {
          if (Object.getPrototypeOf(this) !== Ft)
            throw new Et("Use 'new' to construct " + W);
          if (void (38 + 1 * -38) === Dt.la)
            throw new Et(W + " has no accessible constructor");
          var Nr = Dt.la[arguments.length];
          if (void (1970 * -4 + -259 + 8139 * 1) === Nr)
            throw new Et("Tried to invoke ctor of " + W + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(Dt.la).toString() + ") parameters instead!");
          return Nr.apply(this, arguments);
        });
        var Be = {};
        Be.value = P;
        var mt = {};
        mt.constructor = Be;
        var Ft = Object.create(fe, mt);
        P.prototype = Ft;
        var Dt = new Zs(W, P, Ft, M, je, b, y, H);
        je = new tt(W, Dt, !(-1 * -4651 + -2639 + -2012), !(-10815 + -2704 * -4)), fe = new tt(W + "*", Dt, !(6326 + -2 * -2677 + -17 * 687), !1);
        var Yr = new tt(W + " const*", Dt, !(13818 + 1 * -13817), !(-15181 + -323 * -47)), qi = {};
        return qi.pointerType = fe, qi.za = Yr, fr[c] = qi, br(se, P), [je, fe, Yr];
      });
    }, h: function(c, x, l, A, m, b) {
      E(-6 * 1130 + 1092 + -4 * -1422 < x);
      var S = wr(x, l);
      m = xt(A, m);
      var y = [b], K = [];
      Yt([], [c], function(H) {
        H = H[0];
        var W = "constructor " + H.name;
        if (void (4964 + 1 * -4691 + -39 * 7) === H.ea.la && (H.ea.la = []), void (-5857 + 1 * 3384 + -2473 * -1) !== H.ea.la[x - (-1 * 9397 + -2213 + 11611)])
          throw new Et("Cannot register multiple constructors with identical number of parameters (" + (x - (2993 * 2 + -414 + -619 * 9)) + ") for class '" + H.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return H.ea.la[x - (16890 + -16889 * 1)] = function() {
          dn("Cannot construct " + H.name + " due to unbound types", S);
        }, Yt([], S, function(V) {
          return H.ea.la[x - (3 * 2013 + -2 * 1799 + 122 * -20)] = function() {
            arguments.length !== x - (-1532 + 1316 * -1 + -7 * -407) && F(W + " called with " + arguments.length + " arguments, expected " + (x - (3353 + -1201 * -1 + -4553))), K.length = 5 * -1143 + -1 * -6949 + -617 * 2, y.length = x;
            for (var M = -9190 + -71 * -83 + -34 * -97; M < x; ++M)
              y[M] = V[M].toWireType(K, arguments[M - (-13956 + -13957 * -1)]);
            return M = m.apply(null, y), Fn(K), V[41 * 79 + 3320 + -1 * 6559].fromWireType(M);
          }, [];
        }), [];
      });
    }, b: function(c, x, l, A, m, b, S, y, K, H) {
      x = ye(x), m = xt(A, m), Yt([], [c], function(W) {
        W = W[881 * 1 + 2330 * 4 + -10201];
        var V = W.name + "." + x, M = { get: function() {
          dn("Cannot access " + V + " due to unbound types", [l, S]);
        }, enumerable: !(1312 * 1 + -9506 + 8194), configurable: !(-9817 * 1 + -7253 + 17070) };
        return K ? M.set = function() {
          dn("Cannot access " + V + " due to unbound types", [l, S]);
        } : M.set = function() {
          F(V + " is a read-only property");
        }, Object.defineProperty(W.ea.ma, x, M), Yt([], K ? [l, S] : [l], function(se) {
          var P = se[0], je = { get: function() {
            var Be = Br(this, W, V + " getter");
            return P.fromWireType(m(b, Be));
          }, enumerable: !(463 * -3 + -9724 + 11113) };
          if (K) {
            K = xt(y, K);
            var fe = se[-1721 + 1722 * 1];
            je.set = function(Be) {
              var mt = Br(this, W, V + " setter"), Ft = [];
              K(H, mt, fe.toWireType(Ft, Be)), Fn(Ft);
            };
          }
          return Object.defineProperty(W.ea.ma, x, je), [];
        }), [];
      });
    }, v: function(c, x) {
      x = ye(x), et(c, { name: x, fromWireType: function(l) {
        var A = Ke[l].value;
        return Ui(l), A;
      }, toWireType: function(l, A) {
        return Nt(A);
      }, argPackAdvance: 8, readValueFromPointer: Nn, ka: null });
    }, m: function(c, x, l) {
      l = Li(l), x = ye(x), et(c, { name: x, fromWireType: function(A) {
        return A;
      }, toWireType: function(A, m) {
        if (typeof m != "number" && typeof m != "boolean")
          throw new TypeError('Cannot convert "' + Lt(m) + '" to ' + this.name);
        return m;
      }, argPackAdvance: 8, readValueFromPointer: Os(x, l), ka: null });
    }, c: function(c, x, l, A, m, b) {
      var S = wr(x, l);
      c = ye(c), m = xt(A, m), hr(c, function() {
        dn("Cannot call " + c + " due to unbound types", S);
      }, x - 1), Yt([], S, function(y) {
        var K = c, H = c;
        y = [y[5292 + -18 * 294], null].concat(y.slice(2 * 3469 + 9916 + -887 * 19));
        var W = m, V = y.length;
        -4 * -1163 + 443 + 463 * -11 > V && F("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var M = y[1422 + -532 * -2 + -2485] !== null && !1, se = !(-3888 + -8193 * 1 + 7 * 1726), P = -1 * -7027 + 2332 + -1 * 9358; P < y.length; ++P)
          if (y[P] !== null && void (11773 + 193 * -61) === y[P].ka) {
            se = !(-3758 + 15 * -382 + 9488);
            break;
          }
        var je = y[187 * -41 + 5 * -1087 + 13102].name !== "void", fe = "", Be = "";
        for (P = -1 * 3221 + -21 * -116 + -785 * -1; P < V - (-4623 + 1 * -3203 + 7828); ++P)
          fe += (P !== 0 ? ", " : "") + "arg" + P, Be += (3908 + 4 * -977 !== P ? ", " : "") + "arg" + P + "Wired";
        H = "return function " + Fi(H) + "(" + fe + `) {
if (arguments.length !== ` + (V - (-1 * -9670 + -1 * -526 + -10194)) + `) {
throwBindingError('function ` + H + " called with ' + arguments.length + ' arguments, expected " + (V - (134 + 9596 * -1 + -56 * -169)) + ` args!');
}
`, se && (H += `var destructors = [];
`);
        var mt = se ? "destructors" : "null";
        for (fe = "throwBindingError invoker fn runDestructors retType classParam".split(" "), W = [F, W, b, Fn, y[-8400 + -1 * -7815 + 585], y[-8535 + 1 * 3678 + 4858]], M && (H += "var thisWired = classParam.toWireType(" + mt + `, this);
`), P = -7226 + 160 * -57 + 16346; P < V - (-7 * -631 + 1 * 919 + -381 * 14); ++P)
          H += "var arg" + P + "Wired = argType" + P + ".toWireType(" + mt + ", arg" + P + "); // " + y[P + (-5 * 1129 + -3 * -2099 + 10 * -65)].name + `
`, fe.push("argType" + P), W.push(y[P + 2]);
        if (M && (Be = "thisWired" + (120 * -63 + 15 * 223 + 1405 * 3 < Be.length ? ", " : "") + Be), H += (je ? "var rv = " : "") + "invoker(fn" + (1 * 4877 + -7178 + 2301 < Be.length ? ", " : "") + Be + `);
`, se)
          H += `runDestructors(destructors);
`;
        else
          for (P = M ? -3718 + 3907 * -2 + 11533 : -1037 + 1 * 9517 + 18 * -471; P < y.length; ++P)
            V = -7 * 276 + -12 * 251 + 1 * 4945 === P ? "thisWired" : "arg" + (P - 2) + "Wired", y[P].ka !== null && (H += V + "_dtor(" + V + "); // " + y[P].name + `
`, fe.push(V + "_dtor"), W.push(y[P].ka));
        return je && (H += `var ret = retType.fromWireType(rv);
return ret;
`), fe.push(H + `}
`), y = Rs(fe).apply(null, W), br(K, y, x - (3472 + 2399 * 3 + 14 * -762)), [];
      });
    }, e: function(c, x, l, A, m) {
      function b(H) {
        return H;
      }
      x = ye(x), -(-786 + -166 * -20 + -2533) === m && (m = 49141 * -82031 + 66633526 * -10 + 8992387926);
      var S = Li(l);
      if (931 + -19 * 49 === A) {
        var y = 32 - 8 * l;
        b = function(H) {
          return H << y >>> y;
        };
      }
      var K = -(8197 + -6860 * 1 + 1336 * -1) != x.indexOf("unsigned");
      et(c, { name: x, fromWireType: b, toWireType: function(H, W) {
        if (typeof W != "number" && typeof W != "boolean")
          throw new TypeError('Cannot convert "' + Lt(W) + '" to ' + this.name);
        if (W < A || W > m)
          throw new TypeError('Passing a number "' + Lt(W) + '" from JS side to C/C++ side to an argument of type "' + x + '", which is outside the valid range [' + A + ", " + m + "]!");
        return K ? W >>> -2343 * -3 + -4867 + -2 * 1081 : W | 1741 * 3 + -6345 + 2 * 561;
      }, argPackAdvance: 8, readValueFromPointer: Vs(x, S, -893 + -2225 * 1 + 1559 * 2 !== A), ka: null });
    }, d: function(c, x, l) {
      function A(y) {
        y >>= 199 * 50 + 6 * -1420 + 42 * -34;
        var K = ae;
        return new m(ee, K[y + (-997 * -10 + 1 * 474 + -3 * 3481)], K[y]);
      }
      var m = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][x];
      l = ye(l);
      var b = {};
      b.name = l, b.fromWireType = A, b.argPackAdvance = 8, b.readValueFromPointer = A;
      var S = {};
      S.Ea = !(-719 + 719 * 1), et(c, b, S);
    }, n: function(c, x) {
      x = ye(x);
      var l = x === "std::string";
      et(c, { name: x, fromWireType: function(A) {
        var m = ae[A >> 2];
        if (l)
          for (var b = A + (6867 + 1 * 423 + -1 * 7286), S = -471 * -3 + 6787 + -8200; S <= m; ++S) {
            var y = A + 4 + S;
            if (S == m || 25 * -23 + 485 + 90 == ue[y]) {
              if (b) {
                var K = b, H = ue, W = K + (y - b);
                for (b = K; H[b] && !(b >= W); )
                  ++b;
                if (-1129 * -3 + -4525 + 1154 < b - K && H.subarray && k)
                  K = k.decode(H.subarray(K, b));
                else {
                  for (W = ""; K < b; ) {
                    var V = H[K++];
                    if (V & -25 * 265 + 9383 + -263 * 10) {
                      var M = H[K++] & 63;
                      if (691 * -7 + -151 * 51 + 670 * 19 == (V & -1 * 8209 + 7364 + -1069 * -1))
                        W += String.fromCharCode((V & -3641 + -1 * -2067 + 1605) << -5 * -931 + -2585 + -2064 | M);
                      else {
                        var se = H[K++] & 63;
                        V = 9 * -170 + -1 * -5118 + -1682 * 2 == (V & 9 * 645 + -1 * -5464 + -11029 * 1) ? (V & 1 * -8977 + -4344 * -1 + -332 * -14) << -202 + -214 * -1 | M << 257 * 11 + 91 * 9 + -3640 | se : (V & 8882 + -1 * 1429 + -34 * 219) << 213 * 19 + 2 * -4161 + 1 * 4293 | M << 8195 + 49 * -167 | se << 3255 + -9 * 361 | H[K++] & -6 * 832 + 62 * -62 + 1 * 8899, 65536 > V ? W += String.fromCharCode(V) : (V -= -114319 * -1 + 1047 * 103 + -78312 * 2, W += String.fromCharCode(55296 | V >> -9293 + -77 * -100 + 1603, -92201 + 3547 * -29 + 536 * 469 | V & -1026 + 1 * 2049));
                      }
                    } else
                      W += String.fromCharCode(V);
                  }
                  K = W;
                }
              } else
                K = "";
              if (void (-4453 + 7 * 1163 + -3688) === P)
                var P = K;
              else
                P += "\0", P += K;
              b = y + (6 * -200 + 136 + 1065);
            }
          }
        else {
          for (P = Array(m), S = 9721 * -1 + 6711 + -43 * -70; S < m; ++S)
            P[S] = String.fromCharCode(ue[A + (-69 * -118 + -1862 + -3 * 2092) + S]);
          P = P.join("");
        }
        return nt(A), P;
      }, toWireType: function(A, m) {
        m instanceof ArrayBuffer && (m = new Uint8Array(m));
        var b = typeof m == "string";
        b || m instanceof Uint8Array || m instanceof Uint8ClampedArray || m instanceof Int8Array || F("Cannot pass non-string to std::string");
        var S = (l && b ? function() {
          for (var H = 2 * -2403 + 5 * -902 + 9316, W = 5491 + -323 * 17; W < m.length; ++W) {
            var V = m.charCodeAt(W);
            -1761 + -78 * -237 + 559 * 69 <= V && 1 * 31646 + 49 * 1711 + 2 * -29071 >= V && (V = -82356 + -31 * -3657 + 34525 * 1 + ((V & -9922 * 1 + 1 * -8041 + 18986) << 249 * 29 + -8082 + 67 * 13) | m.charCodeAt(++W) & 16 * 221 + -354 + 127 * -17), 4354 + 4227 * -1 >= V ? ++H : H = 7749 + -7451 * -1 + -13153 >= V ? H + (-5651 + 2 * -4598 + -479 * -31) : 27546 + 991 * 75 + -36336 >= V ? H + (2820 + -939 * 3) : H + (2211 + -1 * 8154 + 5947);
          }
          return H;
        } : function() {
          return m.length;
        })(), y = Tn(5960 + 4 * -1489 + S + (2395 + 46 * 93 + -6672));
        if (ae[y >> -26 * 38 + 73 * 58 + 2 * -1622] = S, l && b)
          O(m, y + (-8242 * 1 + 22 * 419 + -972), S + (3 * 2339 + 7706 + 7361 * -2));
        else if (b)
          for (b = -5 * -1871 + -4060 + -15 * 353; b < S; ++b) {
            var K = m.charCodeAt(b);
            1 * -419 + 11 * 192 + -1438 < K && (nt(y), F("String has UTF-16 code units that do not fit in 8 bits")), ue[y + (9572 * 1 + 7924 + 2 * -8746) + b] = K;
          }
        else
          for (b = 15 * 473 + -5 * 1526 + 535; b < S; ++b)
            ue[y + (-2771 + -41 * 62 + 1 * 5317) + b] = m[b];
        return A !== null && A.push(nt, y), y;
      }, argPackAdvance: 8, readValueFromPointer: Nn, ka: function(A) {
        nt(A);
      } });
    }, j: function(c, x, l) {
      if (l = ye(l), 4 * 1611 + -939 * 1 + -5503 * 1 === x)
        var A = U, m = D, b = j, S = function() {
          return Pe;
        }, y = 4058 * -1 + 976 + 3083;
      else
        x === 4 && (A = Z, m = _, b = z, S = function() {
          return ae;
        }, y = 1 * -4503 + -1 * -2578 + 1927);
      et(c, { name: l, fromWireType: function(K) {
        for (var H = ae[K >> -1 * 3756 + -125 * 2 + -501 * -8], W = S(), V, M = K + (3141 + 7151 * -1 + -1 * -4014), se = 7633 * 1 + -1 * 6389 + -1244; se <= H; ++se) {
          var P = K + 4 + se * x;
          (se == H || W[P >> y] == 0) && (M = A(M, P - M), void (-9194 + 9 * -251 + -1 * -11453) === V ? V = M : (V += String.fromCharCode(1156 + 578 * -2), V += M), M = P + x);
        }
        return nt(K), V;
      }, toWireType: function(K, H) {
        typeof H != "string" && F("Cannot pass non-string to C++ string type " + l);
        var W = b(H), V = Tn(1104 * -3 + -7365 * -1 + -4049 + W + x);
        return ae[V >> 1 * -8090 + 5123 + 2969] = W >> y, m(H, V + (-4 * -1392 + -12 * 29 + -5216), W + x), K !== null && K.push(nt, V), V;
      }, argPackAdvance: 8, readValueFromPointer: Nn, ka: function(K) {
        nt(K);
      } });
    }, x: function(c, x) {
      x = ye(x);
      var l = {};
      l.Qa = !(-574 * 2 + -5669 + 6817), l.name = x, l.argPackAdvance = 0, l.fromWireType = function() {
      }, l.toWireType = function() {
      }, et(c, l);
    }, k: function(c, x, l) {
      c = Qi(c), x = Kr(x, "emval::as");
      var A = [], m = Nt(A);
      return re[l >> 13 * -615 + 7 * -841 + 13884] = m, x.toWireType(A, c);
    }, g: Ui, l: function(c, x) {
      return c = Qi(c), x = Qi(x), Nt(c[x]);
    }, p: function(c) {
      var x = Ps[c];
      return Nt(void (-57 * -89 + -6835 * -1 + -11908) === x ? ye(c) : x);
    }, o: function(c) {
      Fn(Ke[c].value), Ui(c);
    }, y: function(c, x) {
      return c = Kr(c, "_emval_take_value"), c = c.readValueFromPointer(x), Nt(c);
    }, f: function() {
      _e();
    }, q: function(c, x, l) {
      ue.copyWithin(c, x, x + l);
    }, r: function(c) {
      c >>>= -5654 * -1 + 2 * -4877 + 4100;
      var x = ue.length;
      if (-1488717764 + 14 * 178096429 + 1142851406 < c)
        return !(9444 + -1571 * -2 + 12585 * -1);
      for (var l = -23 * 283 + 1574 + 1234 * 4; 4 >= l; l *= -2613 + 2615 * 1) {
        var A = x * (1 + 0.2 / l);
        A = Math.min(A, c + (-92354545 * 1 + -170427344 + 363445185)), A = Math.max(13956918 + -13 * -216946, c, A), 9845 * 1 + -2 * 2604 + -1 * 4637 < A % (31585 + -54833 * 2 + 143617) && (A += 146281 + 1 * -80745 - A % (-78308 + -1 * -143844));
        e: {
          try {
            v.grow(Math.min(2147483648, A) - ee.byteLength + (17014 + -2 * 27758 + 104037) >>> -61 * 81 + 8333 * 1 + 211 * -16), we(v.buffer);
            var m = -2087 + 631 * -11 + 9029;
            break e;
          } catch {
          }
          m = void (2 * -479 + 2982 + -2024);
        }
        if (m)
          return !(-1221 * 6 + 2281 * -2 + 1486 * 8);
      }
      return !(23 * 413 + -5411 + -4087);
    }, s: function(c, x) {
      var l = 0;
      return Wr().forEach(function(A, m) {
        var b = x + l;
        for (m = re[c + (-2161 + -8283 * -1 + 38 * -161) * m >> -6082 + -941 * 10 + 15494] = b, b = 4 * -2242 + 7018 + -50 * -39; b < A.length; ++b)
          xe[m++ >> 3 * 3069 + 8884 + -18091] = A.charCodeAt(b);
        xe[m >> 2528 + -4 * 632] = -5516 + -1 * -9076 + 8 * -445, l += A.length + (9719 + 2306 * -4 + -494);
      }), 3427 + 2129 * 4 + -1 * 11943;
    }, t: function(c, x) {
      var l = Wr();
      re[c >> 37 * -14 + -2931 + -7 * -493] = l.length;
      var A = -7077 + 1 * 3373 + 1852 * 2;
      return l.forEach(function(m) {
        A += m.length + (5141 * -1 + 2217 + 2925);
      }), re[x >> 2718 * 1 + 8388 + -1 * 11104] = A, -3018 + -362 * 17 + 9172;
    }, a: v };
    (function() {
      function c(S) {
        S = S.exports, S = Rr(S), e.asm = S, Ge--, e.monitorRunDependencies && e.monitorRunDependencies(Ge), Ge == 0 && Ze && (S = Ze, Ze = null, S());
      }
      function x(S) {
        c(S.instance);
      }
      function l(S) {
        return ws().then(function(y) {
          return WebAssembly.instantiate(y, m);
        }).then(S, function(y) {
          p("failed to asynchronously prepare wasm: " + y), _e(y);
        });
      }
      var A = {};
      A.a = Es;
      var m = A;
      if (Ge++, e.monitorRunDependencies && e.monitorRunDependencies(Ge), e.instantiateWasm)
        try {
          var b = e.instantiateWasm(m, c);
          return b = Rr(b);
        } catch (S) {
          return p("Module.instantiateWasm callback failed with error: " + S), !1;
        }
      return function() {
        if (f || typeof WebAssembly.instantiateStreaming != "function" || Vt() || Ee("file://") || typeof fetch != "function")
          return l(x);
        var S = {};
        S.credentials = "same-origin", fetch(ke, S).then(function(y) {
          return WebAssembly.instantiateStreaming(y, m).then(x, function(K) {
            return p("wasm streaming compile failed: " + K), p("falling back to ArrayBuffer instantiation"), l(x);
          });
        });
      }(), {};
    })();
    var Pr = e.___wasm_call_ctors = function() {
      return (Pr = e.___wasm_call_ctors = e.asm.B).apply(null, arguments);
    }, Tn = e._malloc = function() {
      return (Tn = e._malloc = e.asm.C).apply(null, arguments);
    }, nt = e._free = function() {
      return (nt = e._free = e.asm.D).apply(null, arguments);
    }, Er = e.___getTypeName = function() {
      return (Er = e.___getTypeName = e.asm.E).apply(null, arguments);
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
    var Xn;
    Ze = function c() {
      Xn || $i(), Xn || (Ze = c);
    };
    function $i() {
      function c() {
        if (!Xn && (Xn = !(-1 * 1791 + -16 * 209 + -79 * -65), e.calledRun = !0, !w)) {
          if (Rn(Rt), Rn(xn), n(e), e.onRuntimeInitialized && e.onRuntimeInitialized(), e.postRun)
            for (typeof e.postRun == "function" && (e.postRun = [e.postRun]); e.postRun.length; ) {
              var x = e.postRun.shift();
              pt.unshift(x);
            }
          Rn(pt);
        }
      }
      if (!(6629 + 7 * -947 < Ge)) {
        if (e.preRun)
          for (typeof e.preRun == "function" && (e.preRun = [e.preRun]); e.preRun.length; )
            ft();
        Rn(pe), -1 * 5826 + 1 * -8389 + 1 * 14215 < Ge || (e.setStatus ? (e.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            e.setStatus("");
          }, -8175 + 5813 * -1 + 4663 * 3), c();
        }, -9198 * 1 + 5024 + 4175)) : c());
      }
    }
    if (e.run = $i, e.preInit)
      for (typeof e.preInit == "function" && (e.preInit = [e.preInit]); 5 * 1241 + -4346 * 1 + -1859 < e.preInit.length; )
        e.preInit.pop()();
    return $i(), o.ready;
  };
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const os = Symbol("Comlink.proxy"), LI = Symbol("Comlink.endpoint"), FI = Symbol("Comlink.releaseProxy"), xo = Symbol("Comlink.finalizer"), li = Symbol("Comlink.thrown"), rs = (t) => typeof t == "object" && t !== null || typeof t == "function", DI = {
  canHandle: (t) => rs(t) && t[os],
  serialize(t) {
    const { port1: o, port2: e } = new MessageChannel();
    return gs(t, o), [e, [e]];
  },
  deserialize(t) {
    return t.start(), cs(t);
  }
}, TI = {
  canHandle: (t) => rs(t) && li in t,
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
}, as = /* @__PURE__ */ new Map([
  ["proxy", DI],
  ["throw", TI]
]);
function XI(t, o) {
  for (const e of t)
    if (o === e || e === "*" || e instanceof RegExp && e.test(o))
      return !0;
  return !1;
}
function gs(t, o = globalThis, e = ["*"]) {
  o.addEventListener("message", function n(i) {
    if (!i || !i.data)
      return;
    if (!XI(e, i.origin)) {
      console.warn(`Invalid origin '${i.origin}' for comlink proxy`);
      return;
    }
    const { id: r, type: a, path: g } = Object.assign({ path: [] }, i.data), s = (i.data.argumentList || []).map(Bt);
    let I;
    try {
      const C = g.slice(0, -1).reduce((p, f) => p[f], t), u = g.reduce((p, f) => p[f], t);
      switch (a) {
        case "GET":
          I = u;
          break;
        case "SET":
          C[g.slice(-1)[0]] = Bt(i.data.value), I = !0;
          break;
        case "APPLY":
          I = u.apply(C, s);
          break;
        case "CONSTRUCT":
          {
            const p = new u(...s);
            I = zI(p);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: p, port2: f } = new MessageChannel();
            gs(t, f), I = QI(p, [p]);
          }
          break;
        case "RELEASE":
          I = void 0;
          break;
        default:
          return;
      }
    } catch (C) {
      I = { value: C, [li]: 0 };
    }
    Promise.resolve(I).catch((C) => ({ value: C, [li]: 0 })).then((C) => {
      const [u, p] = bi(C);
      o.postMessage(Object.assign(Object.assign({}, u), { id: r }), p), a === "RELEASE" && (o.removeEventListener("message", n), ss(o), xo in t && typeof t[xo] == "function" && t[xo]());
    }).catch((C) => {
      const [u, p] = bi({
        value: new TypeError("Unserializable return value"),
        [li]: 0
      });
      o.postMessage(Object.assign(Object.assign({}, u), { id: r }), p);
    });
  }), o.start && o.start();
}
function jI(t) {
  return t.constructor.name === "MessagePort";
}
function ss(t) {
  jI(t) && t.close();
}
function cs(t, o) {
  return Yo(t, [], o);
}
function _n(t) {
  if (t)
    throw new Error("Proxy has been released and is not useable");
}
function xs(t) {
  return Jt(t, {
    type: "RELEASE"
  }).then(() => {
    ss(t);
  });
}
const hi = /* @__PURE__ */ new WeakMap(), mi = "FinalizationRegistry" in globalThis && new FinalizationRegistry((t) => {
  const o = (hi.get(t) || 0) - 1;
  hi.set(t, o), o === 0 && xs(t);
});
function MI(t, o) {
  const e = (hi.get(o) || 0) + 1;
  hi.set(o, e), mi && mi.register(t, o, t);
}
function JI(t) {
  mi && mi.unregister(t);
}
function Yo(t, o = [], e = function() {
}) {
  let n = !1;
  const i = new Proxy(e, {
    get(r, a) {
      if (_n(n), a === FI)
        return () => {
          JI(i), xs(t), n = !0;
        };
      if (a === "then") {
        if (o.length === 0)
          return { then: () => i };
        const g = Jt(t, {
          type: "GET",
          path: o.map((s) => s.toString())
        }).then(Bt);
        return g.then.bind(g);
      }
      return Yo(t, [...o, a]);
    },
    set(r, a, g) {
      _n(n);
      const [s, I] = bi(g);
      return Jt(t, {
        type: "SET",
        path: [...o, a].map((C) => C.toString()),
        value: s
      }, I).then(Bt);
    },
    apply(r, a, g) {
      _n(n);
      const s = o[o.length - 1];
      if (s === LI)
        return Jt(t, {
          type: "ENDPOINT"
        }).then(Bt);
      if (s === "bind")
        return Yo(t, o.slice(0, -1));
      const [I, C] = Za(g);
      return Jt(t, {
        type: "APPLY",
        path: o.map((u) => u.toString()),
        argumentList: I
      }, C).then(Bt);
    },
    construct(r, a) {
      _n(n);
      const [g, s] = Za(a);
      return Jt(t, {
        type: "CONSTRUCT",
        path: o.map((I) => I.toString()),
        argumentList: g
      }, s).then(Bt);
    }
  });
  return MI(i, t), i;
}
function UI(t) {
  return Array.prototype.concat.apply([], t);
}
function Za(t) {
  const o = t.map(bi);
  return [o.map((e) => e[0]), UI(o.map((e) => e[1]))];
}
const Is = /* @__PURE__ */ new WeakMap();
function QI(t, o) {
  return Is.set(t, o), t;
}
function zI(t) {
  return Object.assign(t, { [os]: !0 });
}
function bi(t) {
  for (const [o, e] of as)
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
    Is.get(t) || []
  ];
}
function Bt(t) {
  switch (t.type) {
    case "HANDLER":
      return as.get(t.name).deserialize(t.value);
    case "RAW":
      return t.value;
  }
}
function Jt(t, o, e) {
  return new Promise((n) => {
    const i = $I();
    t.addEventListener("message", function r(a) {
      !a.data || !a.data.id || a.data.id !== i || (t.removeEventListener("message", r), n(a.data));
    }), t.start && t.start(), t.postMessage(Object.assign({ id: i }, o), e);
  });
}
function $I() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
function qI(t, o) {
  const { z: e } = o || {};
  return !e || !t ? !0 : Math.abs(e) < t;
}
function _I(t, o, e) {
  const n = ns(e, t), i = is(o, e);
  return II(i, n);
}
const ls = "dmFyIHNlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5Owp2YXIgdWUgPSAobywgdSwgZSkgPT4gdSBpbiBvID8gc2UobywgdSwgeyBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwLCB2YWx1ZTogZSB9KSA6IG9bdV0gPSBlOwp2YXIgWW4gPSAobywgdSwgZSkgPT4gKHVlKG8sIHR5cGVvZiB1ICE9ICJzeW1ib2wiID8gdSArICIiIDogdSwgZSksIGUpOwpjb25zdCBXdCA9IHsKICBzaW1kOiAic2FtX3NpbWQud2FzbSIsCiAgc2FtOiAic2FtLndhc20iCn0sIGxlID0gYXN5bmMgKCkgPT4gV2ViQXNzZW1ibHkudmFsaWRhdGUobmV3IFVpbnQ4QXJyYXkoWzAsIDk3LCAxMTUsIDEwOSwgMSwgMCwgMCwgMCwgMSwgNSwgMSwgOTYsIDAsIDEsIDEyMywgMywgMiwgMSwgMCwgMTAsIDEwLCAxLCA4LCAwLCA2NSwgMCwgMjUzLCAxNSwgMjUzLCA5OCwgMTFdKSk7CmNsYXNzIHggZXh0ZW5kcyBFcnJvciB7CiAgY29uc3RydWN0b3IoZSwgbSkgewogICAgc3VwZXIoZSk7CiAgICBZbih0aGlzLCAiY2F1c2UiKTsKICAgIHRoaXMubmFtZSA9ICJBdXRvQ2FwdHVyZUVycm9yIiwgdGhpcy5jYXVzZSA9IG07CiAgfQogIC8vIENoYW5nZSB0aGlzIHRvIERlY29yYXRvciB3aGVuIHRoZXkgd2lsbCBiZSBpbiBzdGFibGUgcmVsZWFzZQogIHN0YXRpYyBsb2dFcnJvcihlKSB7CiAgfQogIHN0YXRpYyBmcm9tQ2FtZXJhRXJyb3IoZSkgewogICAgaWYgKHRoaXMubG9nRXJyb3IoZSksIGUgaW5zdGFuY2VvZiB4KQogICAgICByZXR1cm4gZTsKICAgIGxldCBtOwogICAgc3dpdGNoIChlLm5hbWUpIHsKICAgICAgY2FzZSAiT3ZlcmNvbnN0cmFpbmVkRXJyb3IiOgogICAgICAgIG0gPSAiTWluaW11bSBxdWFsaXR5IHJlcXVpcmVtZW50cyBhcmUgbm90IG1ldCBieSB5b3VyIGNhbWVyYSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdFJlYWRhYmxlRXJyb3IiOgogICAgICBjYXNlICJBYm9ydEVycm9yIjoKICAgICAgICBtID0gIlRoZSB3ZWJjYW0gaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciBhcHBsaWNhdGlvbiI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdEFsbG93ZWRFcnJvciI6CiAgICAgICAgbSA9ICJUbyB1c2UgeW91ciBjYW1lcmEsIHlvdSBtdXN0IGFsbG93IHBlcm1pc3Npb25zIjsKICAgICAgICBicmVhazsKICAgICAgY2FzZSAiTm90Rm91bmRFcnJvciI6CiAgICAgICAgbSA9ICJUaGVyZSBpcyBubyBjYW1lcmEgYXZhaWxhYmxlIHRvIHlvdSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGRlZmF1bHQ6CiAgICAgICAgbSA9ICJBbiB1bmtub3duIGNhbWVyYSBlcnJvciBoYXMgb2NjdXJyZWQiOwogICAgICAgIGJyZWFrOwogICAgfQogICAgcmV0dXJuIG5ldyB4KG0sIGUpOwogIH0KICBzdGF0aWMgZnJvbUVycm9yKGUpIHsKICAgIGlmICh0aGlzLmxvZ0Vycm9yKGUpLCBlIGluc3RhbmNlb2YgeCkKICAgICAgcmV0dXJuIGU7CiAgICBjb25zdCBtID0gIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkIjsKICAgIHJldHVybiBuZXcgeChtKTsKICB9Cn0KY29uc3QgY2UgPSB7CiAgUkdCOiAiUkdCIiwKICBSR0JBOiAiUkdCQSIKfSwgZmUgPSAobykgPT4gTnVtYmVyLnBhcnNlRmxvYXQoby50b0ZpeGVkKDMpKSwgZGUgPSAobywgdSkgPT4gTWF0aC5taW4obywgdSk7CnZhciBoZSA9IGZ1bmN0aW9uKCkgewogIHZhciBvID0gdHlwZW9mIGRvY3VtZW50IDwgInUiICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgPyBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYyA6IHZvaWQgMDsKICByZXR1cm4gZnVuY3Rpb24odSkgewogICAgdSA9IHUgfHwge307CiAgICB2YXIgZTsKICAgIGUgfHwgKGUgPSB0eXBlb2YgdSA8ICJ1IiA/IHUgOiB7fSk7CiAgICB2YXIgbSwgZzsKICAgIGUucmVhZHkgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihuLCB0KSB7CiAgICAgIG0gPSBuLCBnID0gdDsKICAgIH0pOwogICAgdmFyIF8gPSB7fSwgdzsKICAgIGZvciAodyBpbiBlKQogICAgICBlLmhhc093blByb3BlcnR5KHcpICYmIChfW3ddID0gZVt3XSk7CiAgICB2YXIgVCA9ICIuL3RoaXMucHJvZ3JhbSIsIE0gPSAhMSwgRSA9ICExOwogICAgTSA9IHR5cGVvZiB3aW5kb3cgPT0gIm9iamVjdCIsIEUgPSB0eXBlb2YgaW1wb3J0U2NyaXB0cyA9PSAiZnVuY3Rpb24iOwogICAgdmFyIEMgPSAiIiwgUjsKICAgIChNIHx8IEUpICYmIChFID8gQyA9IHNlbGYubG9jYXRpb24uaHJlZiA6IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgKEMgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYyksIG8gJiYgKEMgPSBvKSwgQy5pbmRleE9mKCJibG9iOiIpICE9PSAwID8gQyA9IEMuc3Vic3RyKDAsIEMubGFzdEluZGV4T2YoIi8iKSArIDEpIDogQyA9ICIiLCBFICYmIChSID0gZnVuY3Rpb24obikgewogICAgICB2YXIgdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOwogICAgICByZXR1cm4gdC5vcGVuKCJHRVQiLCBuLCAhMSksIHQucmVzcG9uc2VUeXBlID0gImFycmF5YnVmZmVyIiwgdC5zZW5kKG51bGwpLCBuZXcgVWludDhBcnJheSh0LnJlc3BvbnNlKTsKICAgIH0pKTsKICAgIHZhciBTID0gZS5wcmludEVyciB8fCBjb25zb2xlLndhcm4uYmluZChjb25zb2xlKTsKICAgIGZvciAodyBpbiBfKQogICAgICBfLmhhc093blByb3BlcnR5KHcpICYmIChlW3ddID0gX1t3XSk7CiAgICBfID0gbnVsbCwgZS50aGlzUHJvZ3JhbSAmJiAoVCA9IGUudGhpc1Byb2dyYW0pOwogICAgdmFyIGo7CiAgICBlLndhc21CaW5hcnkgJiYgKGogPSBlLndhc21CaW5hcnkpLCBlLm5vRXhpdFJ1bnRpbWUgJiYgZS5ub0V4aXRSdW50aW1lLCB0eXBlb2YgV2ViQXNzZW1ibHkgIT0gIm9iamVjdCIgJiYgc24oIm5vIG5hdGl2ZSB3YXNtIHN1cHBvcnQgZGV0ZWN0ZWQiKTsKICAgIHZhciBHLCBrbiA9ICExOwogICAgZnVuY3Rpb24gWG4obikgewogICAgICBuIHx8IHNuKCJBc3NlcnRpb24gZmFpbGVkOiB1bmRlZmluZWQiKTsKICAgIH0KICAgIHZhciBLbiA9IHR5cGVvZiBUZXh0RGVjb2RlciA8ICJ1IiA/IG5ldyBUZXh0RGVjb2RlcigidXRmOCIpIDogdm9pZCAwOwogICAgZnVuY3Rpb24gTnQobiwgdCwgcikgewogICAgICB2YXIgaSA9IEY7CiAgICAgIGlmICgwIDwgcikgewogICAgICAgIHIgPSB0ICsgciAtIDE7CiAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBuLmxlbmd0aDsgKythKSB7CiAgICAgICAgICB2YXIgcyA9IG4uY2hhckNvZGVBdChhKTsKICAgICAgICAgIGlmICg1NTI5NiA8PSBzICYmIDU3MzQzID49IHMpIHsKICAgICAgICAgICAgdmFyIGMgPSBuLmNoYXJDb2RlQXQoKythKTsKICAgICAgICAgICAgcyA9IDY1NTM2ICsgKChzICYgMTAyMykgPDwgMTApIHwgYyAmIDEwMjM7CiAgICAgICAgICB9CiAgICAgICAgICBpZiAoMTI3ID49IHMpIHsKICAgICAgICAgICAgaWYgKHQgPj0gcikKICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgaVt0KytdID0gczsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIGlmICgyMDQ3ID49IHMpIHsKICAgICAgICAgICAgICBpZiAodCArIDEgPj0gcikKICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgIGlbdCsrXSA9IDE5MiB8IHMgPj4gNjsKICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICBpZiAoNjU1MzUgPj0gcykgewogICAgICAgICAgICAgICAgaWYgKHQgKyAyID49IHIpCiAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgaVt0KytdID0gMjI0IHwgcyA+PiAxMjsKICAgICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgaWYgKHQgKyAzID49IHIpCiAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgaVt0KytdID0gMjQwIHwgcyA+PiAxOCwgaVt0KytdID0gMTI4IHwgcyA+PiAxMiAmIDYzOwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgICBpW3QrK10gPSAxMjggfCBzID4+IDYgJiA2MzsKICAgICAgICAgICAgfQogICAgICAgICAgICBpW3QrK10gPSAxMjggfCBzICYgNjM7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIGlbdF0gPSAwOwogICAgICB9CiAgICB9CiAgICB2YXIgUW4gPSB0eXBlb2YgVGV4dERlY29kZXIgPCAidSIgPyBuZXcgVGV4dERlY29kZXIoInV0Zi0xNmxlIikgOiB2b2lkIDA7CiAgICBmdW5jdGlvbiBVdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSBuID4+IDEsIGkgPSByICsgdCAvIDI7ICEociA+PSBpKSAmJiBwbltyXTsgKQogICAgICAgICsrcjsKICAgICAgaWYgKHIgPDw9IDEsIDMyIDwgciAtIG4gJiYgUW4pCiAgICAgICAgcmV0dXJuIFFuLmRlY29kZShGLnN1YmFycmF5KG4sIHIpKTsKICAgICAgZm9yIChyID0gMCwgaSA9ICIiOyA7ICkgewogICAgICAgIHZhciBhID0gUVtuICsgMiAqIHIgPj4gMV07CiAgICAgICAgaWYgKGEgPT0gMCB8fCByID09IHQgLyAyKQogICAgICAgICAgcmV0dXJuIGk7CiAgICAgICAgKytyLCBpICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYSk7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIEh0KG4sIHQsIHIpIHsKICAgICAgaWYgKHIgPT09IHZvaWQgMCAmJiAociA9IDIxNDc0ODM2NDcpLCAyID4gcikKICAgICAgICByZXR1cm4gMDsKICAgICAgciAtPSAyOwogICAgICB2YXIgaSA9IHQ7CiAgICAgIHIgPSByIDwgMiAqIG4ubGVuZ3RoID8gciAvIDIgOiBuLmxlbmd0aDsKICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCByOyArK2EpCiAgICAgICAgUVt0ID4+IDFdID0gbi5jaGFyQ29kZUF0KGEpLCB0ICs9IDI7CiAgICAgIHJldHVybiBRW3QgPj4gMV0gPSAwLCB0IC0gaTsKICAgIH0KICAgIGZ1bmN0aW9uIHp0KG4pIHsKICAgICAgcmV0dXJuIDIgKiBuLmxlbmd0aDsKICAgIH0KICAgIGZ1bmN0aW9uIER0KG4sIHQpIHsKICAgICAgZm9yICh2YXIgciA9IDAsIGkgPSAiIjsgIShyID49IHQgLyA0KTsgKSB7CiAgICAgICAgdmFyIGEgPSBPW24gKyA0ICogciA+PiAyXTsKICAgICAgICBpZiAoYSA9PSAwKQogICAgICAgICAgYnJlYWs7CiAgICAgICAgKytyLCA2NTUzNiA8PSBhID8gKGEgLT0gNjU1MzYsIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiB8IGEgPj4gMTAsIDU2MzIwIHwgYSAmIDEwMjMpKSA6IGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShhKTsKICAgICAgfQogICAgICByZXR1cm4gaTsKICAgIH0KICAgIGZ1bmN0aW9uIEJ0KG4sIHQsIHIpIHsKICAgICAgaWYgKHIgPT09IHZvaWQgMCAmJiAociA9IDIxNDc0ODM2NDcpLCA0ID4gcikKICAgICAgICByZXR1cm4gMDsKICAgICAgdmFyIGkgPSB0OwogICAgICByID0gaSArIHIgLSA0OwogICAgICBmb3IgKHZhciBhID0gMDsgYSA8IG4ubGVuZ3RoOyArK2EpIHsKICAgICAgICB2YXIgcyA9IG4uY2hhckNvZGVBdChhKTsKICAgICAgICBpZiAoNTUyOTYgPD0gcyAmJiA1NzM0MyA+PSBzKSB7CiAgICAgICAgICB2YXIgYyA9IG4uY2hhckNvZGVBdCgrK2EpOwogICAgICAgICAgcyA9IDY1NTM2ICsgKChzICYgMTAyMykgPDwgMTApIHwgYyAmIDEwMjM7CiAgICAgICAgfQogICAgICAgIGlmIChPW3QgPj4gMl0gPSBzLCB0ICs9IDQsIHQgKyA0ID4gcikKICAgICAgICAgIGJyZWFrOwogICAgICB9CiAgICAgIHJldHVybiBPW3QgPj4gMl0gPSAwLCB0IC0gaTsKICAgIH0KICAgIGZ1bmN0aW9uIFZ0KG4pIHsKICAgICAgZm9yICh2YXIgdCA9IDAsIHIgPSAwOyByIDwgbi5sZW5ndGg7ICsrcikgewogICAgICAgIHZhciBpID0gbi5jaGFyQ29kZUF0KHIpOwogICAgICAgIDU1Mjk2IDw9IGkgJiYgNTczNDMgPj0gaSAmJiArK3IsIHQgKz0gNDsKICAgICAgfQogICAgICByZXR1cm4gdDsKICAgIH0KICAgIHZhciBLLCBZLCBGLCBRLCBwbiwgTywgVSwgcW4sIG50OwogICAgZnVuY3Rpb24gdHQobikgewogICAgICBLID0gbiwgZS5IRUFQOCA9IFkgPSBuZXcgSW50OEFycmF5KG4pLCBlLkhFQVAxNiA9IFEgPSBuZXcgSW50MTZBcnJheShuKSwgZS5IRUFQMzIgPSBPID0gbmV3IEludDMyQXJyYXkobiksIGUuSEVBUFU4ID0gRiA9IG5ldyBVaW50OEFycmF5KG4pLCBlLkhFQVBVMTYgPSBwbiA9IG5ldyBVaW50MTZBcnJheShuKSwgZS5IRUFQVTMyID0gVSA9IG5ldyBVaW50MzJBcnJheShuKSwgZS5IRUFQRjMyID0gcW4gPSBuZXcgRmxvYXQzMkFycmF5KG4pLCBlLkhFQVBGNjQgPSBudCA9IG5ldyBGbG9hdDY0QXJyYXkobik7CiAgICB9CiAgICB2YXIgZXQgPSBlLklOSVRJQUxfTUVNT1JZIHx8IDE2Nzc3MjE2OwogICAgZS53YXNtTWVtb3J5ID8gRyA9IGUud2FzbU1lbW9yeSA6IEcgPSBuZXcgV2ViQXNzZW1ibHkuTWVtb3J5KHsgaW5pdGlhbDogZXQgLyA2NTUzNiwgbWF4aW11bTogMzI3NjggfSksIEcgJiYgKEsgPSBHLmJ1ZmZlciksIGV0ID0gSy5ieXRlTGVuZ3RoLCB0dChLKTsKICAgIHZhciBydCA9IFtdLCBpdCA9IFtdLCBHdCA9IFtdLCBhdCA9IFtdOwogICAgZnVuY3Rpb24gWXQoKSB7CiAgICAgIHZhciBuID0gZS5wcmVSdW4uc2hpZnQoKTsKICAgICAgcnQudW5zaGlmdChuKTsKICAgIH0KICAgIHZhciBaID0gMCwgb24gPSBudWxsOwogICAgZS5wcmVsb2FkZWRJbWFnZXMgPSB7fSwgZS5wcmVsb2FkZWRBdWRpb3MgPSB7fTsKICAgIGZ1bmN0aW9uIHNuKG4pIHsKICAgICAgdGhyb3cgZS5vbkFib3J0ICYmIGUub25BYm9ydChuKSwgUyhuKSwga24gPSAhMCwgbiA9IG5ldyBXZWJBc3NlbWJseS5SdW50aW1lRXJyb3IoImFib3J0KCIgKyBuICsgIikuIEJ1aWxkIHdpdGggLXMgQVNTRVJUSU9OUz0xIGZvciBtb3JlIGluZm8uIiksIGcobiksIG47CiAgICB9CiAgICBmdW5jdGlvbiBSbihuKSB7CiAgICAgIHZhciB0ID0gJDsKICAgICAgcmV0dXJuIFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCA/IHQuc3RhcnRzV2l0aChuKSA6IHQuaW5kZXhPZihuKSA9PT0gMDsKICAgIH0KICAgIGZ1bmN0aW9uIG90KCkgewogICAgICByZXR1cm4gUm4oImRhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCwiKTsKICAgIH0KICAgIHZhciAkID0gInNhbS53YXNtIjsKICAgIGlmICghb3QoKSkgewogICAgICB2YXIgc3QgPSAkOwogICAgICAkID0gZS5sb2NhdGVGaWxlID8gZS5sb2NhdGVGaWxlKHN0LCBDKSA6IEMgKyBzdDsKICAgIH0KICAgIGZ1bmN0aW9uIHV0KCkgewogICAgICB0cnkgewogICAgICAgIGlmIChqKQogICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGopOwogICAgICAgIGlmIChSKQogICAgICAgICAgcmV0dXJuIFIoJCk7CiAgICAgICAgdGhyb3cgImJvdGggYXN5bmMgYW5kIHN5bmMgZmV0Y2hpbmcgb2YgdGhlIHdhc20gZmFpbGVkIjsKICAgICAgfSBjYXRjaCAobikgewogICAgICAgIHNuKG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBadCgpIHsKICAgICAgcmV0dXJuIGogfHwgIU0gJiYgIUUgfHwgdHlwZW9mIGZldGNoICE9ICJmdW5jdGlvbiIgfHwgUm4oImZpbGU6Ly8iKSA/IFByb21pc2UucmVzb2x2ZSgpLnRoZW4odXQpIDogZmV0Y2goJCwgeyBjcmVkZW50aWFsczogInNhbWUtb3JpZ2luIiB9KS50aGVuKGZ1bmN0aW9uKG4pIHsKICAgICAgICBpZiAoIW4ub2spCiAgICAgICAgICB0aHJvdyAiZmFpbGVkIHRvIGxvYWQgd2FzbSBiaW5hcnkgZmlsZSBhdCAnIiArICQgKyAiJyI7CiAgICAgICAgcmV0dXJuIG4uYXJyYXlCdWZmZXIoKTsKICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oKSB7CiAgICAgICAgcmV0dXJuIHV0KCk7CiAgICAgIH0pOwogICAgfQogICAgZnVuY3Rpb24geW4obikgewogICAgICBmb3IgKDsgMCA8IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4uc2hpZnQoKTsKICAgICAgICBpZiAodHlwZW9mIHQgPT0gImZ1bmN0aW9uIikKICAgICAgICAgIHQoZSk7CiAgICAgICAgZWxzZSB7CiAgICAgICAgICB2YXIgciA9IHQuQmE7CiAgICAgICAgICB0eXBlb2YgciA9PSAibnVtYmVyIiA/IHQudGEgPT09IHZvaWQgMCA/IEZuKCJ2IiwgcikoKSA6IEZuKCJ2aSIsIHIpKHQudGEpIDogcih0LnRhID09PSB2b2lkIDAgPyBudWxsIDogdC50YSk7CiAgICAgICAgfQogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBGbihuLCB0KSB7CiAgICAgIHZhciByID0gW107CiAgICAgIHJldHVybiBmdW5jdGlvbigpIHsKICAgICAgICByLmxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7CiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspCiAgICAgICAgICByW2ldID0gYXJndW1lbnRzW2ldOwogICAgICAgIHJldHVybiByICYmIHIubGVuZ3RoID8gZVsiZHluQ2FsbF8iICsgbl0uYXBwbHkobnVsbCwgW3RdLmNvbmNhdChyKSkgOiBlWyJkeW5DYWxsXyIgKyBuXS5jYWxsKG51bGwsIHQpOwogICAgICB9OwogICAgfQogICAgZnVuY3Rpb24gJHQobikgewogICAgICB0aGlzLmRhID0gbiAtIDE2LCB0aGlzLk9hID0gZnVuY3Rpb24odCkgewogICAgICAgIE9bdGhpcy5kYSArIDggPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLkxhID0gZnVuY3Rpb24odCkgewogICAgICAgIE9bdGhpcy5kYSArIDAgPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLk1hID0gZnVuY3Rpb24oKSB7CiAgICAgICAgT1t0aGlzLmRhICsgNCA+PiAyXSA9IDA7CiAgICAgIH0sIHRoaXMuS2EgPSBmdW5jdGlvbigpIHsKICAgICAgICBZW3RoaXMuZGEgKyAxMiA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuTmEgPSBmdW5jdGlvbigpIHsKICAgICAgICBZW3RoaXMuZGEgKyAxMyA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuRmEgPSBmdW5jdGlvbih0LCByKSB7CiAgICAgICAgdGhpcy5PYSh0KSwgdGhpcy5MYShyKSwgdGhpcy5NYSgpLCB0aGlzLkthKCksIHRoaXMuTmEoKTsKICAgICAgfTsKICAgIH0KICAgIGZ1bmN0aW9uIG1uKCkgewogICAgICByZXR1cm4gMCA8IG1uLnhhOwogICAgfQogICAgZnVuY3Rpb24geG4obikgewogICAgICBzd2l0Y2ggKG4pIHsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICByZXR1cm4gMDsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIDQ6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlIDg6CiAgICAgICAgICByZXR1cm4gMzsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biB0eXBlIHNpemU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgdmFyIGx0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gVyhuKSB7CiAgICAgIGZvciAodmFyIHQgPSAiIjsgRltuXTsgKQogICAgICAgIHQgKz0gbHRbRltuKytdXTsKICAgICAgcmV0dXJuIHQ7CiAgICB9CiAgICB2YXIgcSA9IHt9LCBKID0ge30sIHZuID0ge307CiAgICBmdW5jdGlvbiBJbihuKSB7CiAgICAgIGlmIChuID09PSB2b2lkIDApCiAgICAgICAgcmV0dXJuICJfdW5rbm93biI7CiAgICAgIG4gPSBuLnJlcGxhY2UoL1teYS16QS1aMC05X10vZywgIiQiKTsKICAgICAgdmFyIHQgPSBuLmNoYXJDb2RlQXQoMCk7CiAgICAgIHJldHVybiA0OCA8PSB0ICYmIDU3ID49IHQgPyAiXyIgKyBuIDogbjsKICAgIH0KICAgIGZ1bmN0aW9uIGpuKG4sIHQpIHsKICAgICAgcmV0dXJuIG4gPSBJbihuKSwgbmV3IEZ1bmN0aW9uKCJib2R5IiwgInJldHVybiBmdW5jdGlvbiAiICsgbiArIGAoKSB7CiAgICAidXNlIHN0cmljdCI7ICAgIHJldHVybiBib2R5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7Cn07CmApKHQpOwogICAgfQogICAgZnVuY3Rpb24gTG4obikgewogICAgICB2YXIgdCA9IEVycm9yLCByID0gam4obiwgZnVuY3Rpb24oaSkgewogICAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMubWVzc2FnZSA9IGksIGkgPSBFcnJvcihpKS5zdGFjaywgaSAhPT0gdm9pZCAwICYmICh0aGlzLnN0YWNrID0gdGhpcy50b1N0cmluZygpICsgYApgICsgaS5yZXBsYWNlKC9eRXJyb3IoOlteXG5dKik/XG4vLCAiIikpOwogICAgICB9KTsKICAgICAgcmV0dXJuIHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSksIHIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gciwgci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlID09PSB2b2lkIDAgPyB0aGlzLm5hbWUgOiB0aGlzLm5hbWUgKyAiOiAiICsgdGhpcy5tZXNzYWdlOwogICAgICB9LCByOwogICAgfQogICAgdmFyIG5uID0gdm9pZCAwOwogICAgZnVuY3Rpb24gdihuKSB7CiAgICAgIHRocm93IG5ldyBubihuKTsKICAgIH0KICAgIHZhciBjdCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIGduKG4pIHsKICAgICAgdGhyb3cgbmV3IGN0KG4pOwogICAgfQogICAgZnVuY3Rpb24gdG4obiwgdCwgcikgewogICAgICBmdW5jdGlvbiBpKGwpIHsKICAgICAgICBsID0gcihsKSwgbC5sZW5ndGggIT09IG4ubGVuZ3RoICYmIGduKCJNaXNtYXRjaGVkIHR5cGUgY29udmVydGVyIGNvdW50Iik7CiAgICAgICAgZm9yICh2YXIgcCA9IDA7IHAgPCBuLmxlbmd0aDsgKytwKQogICAgICAgICAgSChuW3BdLCBsW3BdKTsKICAgICAgfQogICAgICBuLmZvckVhY2goZnVuY3Rpb24obCkgewogICAgICAgIHZuW2xdID0gdDsKICAgICAgfSk7CiAgICAgIHZhciBhID0gQXJyYXkodC5sZW5ndGgpLCBzID0gW10sIGMgPSAwOwogICAgICB0LmZvckVhY2goZnVuY3Rpb24obCwgcCkgewogICAgICAgIEouaGFzT3duUHJvcGVydHkobCkgPyBhW3BdID0gSltsXSA6IChzLnB1c2gobCksIHEuaGFzT3duUHJvcGVydHkobCkgfHwgKHFbbF0gPSBbXSksIHFbbF0ucHVzaChmdW5jdGlvbigpIHsKICAgICAgICAgIGFbcF0gPSBKW2xdLCArK2MsIGMgPT09IHMubGVuZ3RoICYmIGkoYSk7CiAgICAgICAgfSkpOwogICAgICB9KSwgcy5sZW5ndGggPT09IDAgJiYgaShhKTsKICAgIH0KICAgIGZ1bmN0aW9uIEgobiwgdCwgcikgewogICAgICBpZiAociA9IHIgfHwge30sICEoImFyZ1BhY2tBZHZhbmNlIiBpbiB0KSkKICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJyZWdpc3RlclR5cGUgcmVnaXN0ZXJlZEluc3RhbmNlIHJlcXVpcmVzIGFyZ1BhY2tBZHZhbmNlIik7CiAgICAgIHZhciBpID0gdC5uYW1lOwogICAgICBpZiAobiB8fCB2KCd0eXBlICInICsgaSArICciIG11c3QgaGF2ZSBhIHBvc2l0aXZlIGludGVnZXIgdHlwZWlkIHBvaW50ZXInKSwgSi5oYXNPd25Qcm9wZXJ0eShuKSkgewogICAgICAgIGlmIChyLkVhKQogICAgICAgICAgcmV0dXJuOwogICAgICAgIHYoIkNhbm5vdCByZWdpc3RlciB0eXBlICciICsgaSArICInIHR3aWNlIik7CiAgICAgIH0KICAgICAgSltuXSA9IHQsIGRlbGV0ZSB2bltuXSwgcS5oYXNPd25Qcm9wZXJ0eShuKSAmJiAodCA9IHFbbl0sIGRlbGV0ZSBxW25dLCB0LmZvckVhY2goZnVuY3Rpb24oYSkgewogICAgICAgIGEoKTsKICAgICAgfSkpOwogICAgfQogICAgZnVuY3Rpb24gSnQobikgewogICAgICByZXR1cm4geyBjb3VudDogbi5jb3VudCwgb2E6IG4ub2EsIHBhOiBuLnBhLCBkYTogbi5kYSwgZmE6IG4uZmEsIGdhOiBuLmdhLCBoYTogbi5oYSB9OwogICAgfQogICAgZnVuY3Rpb24gTm4obikgewogICAgICB2KG4uQS5mYS5lYS5uYW1lICsgIiBpbnN0YW5jZSBhbHJlYWR5IGRlbGV0ZWQiKTsKICAgIH0KICAgIHZhciBVbiA9ICExOwogICAgZnVuY3Rpb24gZnQoKSB7CiAgICB9CiAgICBmdW5jdGlvbiBkdChuKSB7CiAgICAgIC0tbi5jb3VudC52YWx1ZSwgbi5jb3VudC52YWx1ZSA9PT0gMCAmJiAobi5nYSA/IG4uaGEubmEobi5nYSkgOiBuLmZhLmVhLm5hKG4uZGEpKTsKICAgIH0KICAgIGZ1bmN0aW9uIHVuKG4pIHsKICAgICAgcmV0dXJuIHR5cGVvZiBGaW5hbGl6YXRpb25Hcm91cCA+ICJ1IiA/ICh1biA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICByZXR1cm4gdDsKICAgICAgfSwgbikgOiAoVW4gPSBuZXcgRmluYWxpemF0aW9uR3JvdXAoZnVuY3Rpb24odCkgewogICAgICAgIGZvciAodmFyIHIgPSB0Lm5leHQoKTsgIXIuZG9uZTsgciA9IHQubmV4dCgpKQogICAgICAgICAgciA9IHIudmFsdWUsIHIuZGEgPyBkdChyKSA6IGNvbnNvbGUud2Fybigib2JqZWN0IGFscmVhZHkgZGVsZXRlZDogIiArIHIuZGEpOwogICAgICB9KSwgdW4gPSBmdW5jdGlvbih0KSB7CiAgICAgICAgcmV0dXJuIFVuLnJlZ2lzdGVyKHQsIHQuQSwgdC5BKSwgdDsKICAgICAgfSwgZnQgPSBmdW5jdGlvbih0KSB7CiAgICAgICAgVW4udW5yZWdpc3Rlcih0LkEpOwogICAgICB9LCB1bihuKSk7CiAgICB9CiAgICB2YXIgbG4gPSB2b2lkIDAsIGNuID0gW107CiAgICBmdW5jdGlvbiBIbigpIHsKICAgICAgZm9yICg7IGNuLmxlbmd0aDsgKSB7CiAgICAgICAgdmFyIG4gPSBjbi5wb3AoKTsKICAgICAgICBuLkEub2EgPSAhMSwgbi5kZWxldGUoKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gQigpIHsKICAgIH0KICAgIHZhciBodCA9IHt9OwogICAgZnVuY3Rpb24gWHQobiwgdCkgewogICAgICB2YXIgciA9IGU7CiAgICAgIGlmIChyW25dLmphID09PSB2b2lkIDApIHsKICAgICAgICB2YXIgaSA9IHJbbl07CiAgICAgICAgcltuXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgcmV0dXJuIHJbbl0uamEuaGFzT3duUHJvcGVydHkoYXJndW1lbnRzLmxlbmd0aCkgfHwgdigiRnVuY3Rpb24gJyIgKyB0ICsgIicgY2FsbGVkIHdpdGggYW4gaW52YWxpZCBudW1iZXIgb2YgYXJndW1lbnRzICgiICsgYXJndW1lbnRzLmxlbmd0aCArICIpIC0gZXhwZWN0cyBvbmUgb2YgKCIgKyByW25dLmphICsgIikhIiksIHJbbl0uamFbYXJndW1lbnRzLmxlbmd0aF0uYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICB9LCByW25dLmphID0gW10sIHJbbl0uamFbaS55YV0gPSBpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBwdChuLCB0LCByKSB7CiAgICAgIGUuaGFzT3duUHJvcGVydHkobikgPyAoKHIgPT09IHZvaWQgMCB8fCBlW25dLmphICE9PSB2b2lkIDAgJiYgZVtuXS5qYVtyXSAhPT0gdm9pZCAwKSAmJiB2KCJDYW5ub3QgcmVnaXN0ZXIgcHVibGljIG5hbWUgJyIgKyBuICsgIicgdHdpY2UiKSwgWHQobiwgbiksIGUuaGFzT3duUHJvcGVydHkocikgJiYgdigiQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIG92ZXJsb2FkcyBvZiBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgbnVtYmVyIG9mIGFyZ3VtZW50cyAoIiArIHIgKyAiKSEiKSwgZVtuXS5qYVtyXSA9IHQpIDogKGVbbl0gPSB0LCByICE9PSB2b2lkIDAgJiYgKGVbbl0uUmEgPSByKSk7CiAgICB9CiAgICBmdW5jdGlvbiBLdChuLCB0LCByLCBpLCBhLCBzLCBjLCBsKSB7CiAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMuY29uc3RydWN0b3IgPSB0LCB0aGlzLm1hID0gciwgdGhpcy5uYSA9IGksIHRoaXMuaWEgPSBhLCB0aGlzLkNhID0gcywgdGhpcy5xYSA9IGMsIHRoaXMuQWEgPSBsOwogICAgfQogICAgZnVuY3Rpb24gd24obiwgdCwgcikgewogICAgICBmb3IgKDsgdCAhPT0gcjsgKQogICAgICAgIHQucWEgfHwgdigiRXhwZWN0ZWQgbnVsbCBvciBpbnN0YW5jZSBvZiAiICsgci5uYW1lICsgIiwgZ290IGFuIGluc3RhbmNlIG9mICIgKyB0Lm5hbWUpLCBuID0gdC5xYShuKSwgdCA9IHQuaWE7CiAgICAgIHJldHVybiBuOwogICAgfQogICAgZnVuY3Rpb24gUXQobiwgdCkgewogICAgICByZXR1cm4gdCA9PT0gbnVsbCA/ICh0aGlzLnVhICYmIHYoIm51bGwgaXMgbm90IGEgdmFsaWQgIiArIHRoaXMubmFtZSksIDApIDogKHQuQSB8fCB2KCdDYW5ub3QgcGFzcyAiJyArIHJuKHQpICsgJyIgYXMgYSAnICsgdGhpcy5uYW1lKSwgdC5BLmRhIHx8IHYoIkNhbm5vdCBwYXNzIGRlbGV0ZWQgb2JqZWN0IGFzIGEgcG9pbnRlciBvZiB0eXBlICIgKyB0aGlzLm5hbWUpLCB3bih0LkEuZGEsIHQuQS5mYS5lYSwgdGhpcy5lYSkpOwogICAgfQogICAgZnVuY3Rpb24gcXQobiwgdCkgewogICAgICBpZiAodCA9PT0gbnVsbCkgewogICAgICAgIGlmICh0aGlzLnVhICYmIHYoIm51bGwgaXMgbm90IGEgdmFsaWQgIiArIHRoaXMubmFtZSksIHRoaXMuc2EpIHsKICAgICAgICAgIHZhciByID0gdGhpcy5IYSgpOwogICAgICAgICAgcmV0dXJuIG4gIT09IG51bGwgJiYgbi5wdXNoKHRoaXMubmEsIHIpLCByOwogICAgICAgIH0KICAgICAgICByZXR1cm4gMDsKICAgICAgfQogICAgICBpZiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgcm4odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksICF0aGlzLnJhICYmIHQuQS5mYS5yYSAmJiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyAodC5BLmhhID8gdC5BLmhhLm5hbWUgOiB0LkEuZmEubmFtZSkgKyAiIHRvIHBhcmFtZXRlciB0eXBlICIgKyB0aGlzLm5hbWUpLCByID0gd24odC5BLmRhLCB0LkEuZmEuZWEsIHRoaXMuZWEpLCB0aGlzLnNhKQogICAgICAgIHN3aXRjaCAodC5BLmdhID09PSB2b2lkIDAgJiYgdigiUGFzc2luZyByYXcgcG9pbnRlciB0byBzbWFydCBwb2ludGVyIGlzIGlsbGVnYWwiKSwgdGhpcy5QYSkgewogICAgICAgICAgY2FzZSAwOgogICAgICAgICAgICB0LkEuaGEgPT09IHRoaXMgPyByID0gdC5BLmdhIDogdigiQ2Fubm90IGNvbnZlcnQgYXJndW1lbnQgb2YgdHlwZSAiICsgKHQuQS5oYSA/IHQuQS5oYS5uYW1lIDogdC5BLmZhLm5hbWUpICsgIiB0byBwYXJhbWV0ZXIgdHlwZSAiICsgdGhpcy5uYW1lKTsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICBjYXNlIDE6CiAgICAgICAgICAgIHIgPSB0LkEuZ2E7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgY2FzZSAyOgogICAgICAgICAgICBpZiAodC5BLmhhID09PSB0aGlzKQogICAgICAgICAgICAgIHIgPSB0LkEuZ2E7CiAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgIHZhciBpID0gdC5jbG9uZSgpOwogICAgICAgICAgICAgIHIgPSB0aGlzLklhKHIsIGVuKGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgICAgaS5kZWxldGUoKTsKICAgICAgICAgICAgICB9KSksIG4gIT09IG51bGwgJiYgbi5wdXNoKHRoaXMubmEsIHIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgZGVmYXVsdDoKICAgICAgICAgICAgdigiVW5zdXBwb3J0aW5nIHNoYXJpbmcgcG9saWN5Iik7CiAgICAgICAgfQogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIG5lKG4sIHQpIHsKICAgICAgcmV0dXJuIHQgPT09IG51bGwgPyAodGhpcy51YSAmJiB2KCJudWxsIGlzIG5vdCBhIHZhbGlkICIgKyB0aGlzLm5hbWUpLCAwKSA6ICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBybih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgdC5BLmZhLnJhICYmIHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArIHQuQS5mYS5uYW1lICsgIiB0byBwYXJhbWV0ZXIgdHlwZSAiICsgdGhpcy5uYW1lKSwgd24odC5BLmRhLCB0LkEuZmEuZWEsIHRoaXMuZWEpKTsKICAgIH0KICAgIGZ1bmN0aW9uIEFuKG4pIHsKICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKFVbbiA+PiAyXSk7CiAgICB9CiAgICBmdW5jdGlvbiB5dChuLCB0LCByKSB7CiAgICAgIHJldHVybiB0ID09PSByID8gbiA6IHIuaWEgPT09IHZvaWQgMCA/IG51bGwgOiAobiA9IHl0KG4sIHQsIHIuaWEpLCBuID09PSBudWxsID8gbnVsbCA6IHIuQWEobikpOwogICAgfQogICAgdmFyIGZuID0ge307CiAgICBmdW5jdGlvbiB0ZShuLCB0KSB7CiAgICAgIGZvciAodCA9PT0gdm9pZCAwICYmIHYoInB0ciBzaG91bGQgbm90IGJlIHVuZGVmaW5lZCIpOyBuLmlhOyApCiAgICAgICAgdCA9IG4ucWEodCksIG4gPSBuLmlhOwogICAgICByZXR1cm4gZm5bdF07CiAgICB9CiAgICBmdW5jdGlvbiBfbihuLCB0KSB7CiAgICAgIHJldHVybiB0LmZhICYmIHQuZGEgfHwgZ24oIm1ha2VDbGFzc0hhbmRsZSByZXF1aXJlcyBwdHIgYW5kIHB0clR5cGUiKSwgISF0LmhhICE9ICEhdC5nYSAmJiBnbigiQm90aCBzbWFydFB0clR5cGUgYW5kIHNtYXJ0UHRyIG11c3QgYmUgc3BlY2lmaWVkIiksIHQuY291bnQgPSB7IHZhbHVlOiAxIH0sIHVuKE9iamVjdC5jcmVhdGUobiwgeyBBOiB7IHZhbHVlOiB0IH0gfSkpOwogICAgfQogICAgZnVuY3Rpb24geihuLCB0LCByLCBpKSB7CiAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMuZWEgPSB0LCB0aGlzLnVhID0gciwgdGhpcy5yYSA9IGksIHRoaXMuc2EgPSAhMSwgdGhpcy5uYSA9IHRoaXMuSWEgPSB0aGlzLkhhID0gdGhpcy53YSA9IHRoaXMuUGEgPSB0aGlzLkdhID0gdm9pZCAwLCB0LmlhICE9PSB2b2lkIDAgPyB0aGlzLnRvV2lyZVR5cGUgPSBxdCA6ICh0aGlzLnRvV2lyZVR5cGUgPSBpID8gUXQgOiBuZSwgdGhpcy5rYSA9IG51bGwpOwogICAgfQogICAgZnVuY3Rpb24gbXQobiwgdCwgcikgewogICAgICBlLmhhc093blByb3BlcnR5KG4pIHx8IGduKCJSZXBsYWNpbmcgbm9uZXhpc3RhbnQgcHVibGljIHN5bWJvbCIpLCBlW25dLmphICE9PSB2b2lkIDAgJiYgciAhPT0gdm9pZCAwID8gZVtuXS5qYVtyXSA9IHQgOiAoZVtuXSA9IHQsIGVbbl0ueWEgPSByKTsKICAgIH0KICAgIGZ1bmN0aW9uIFYobiwgdCkgewogICAgICBuID0gVyhuKTsKICAgICAgdmFyIHIgPSBGbihuLCB0KTsKICAgICAgcmV0dXJuIHR5cGVvZiByICE9ICJmdW5jdGlvbiIgJiYgdigidW5rbm93biBmdW5jdGlvbiBwb2ludGVyIHdpdGggc2lnbmF0dXJlICIgKyBuICsgIjogIiArIHQpLCByOwogICAgfQogICAgdmFyIHZ0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gZ3QobikgewogICAgICBuID0gYnQobik7CiAgICAgIHZhciB0ID0gVyhuKTsKICAgICAgcmV0dXJuIEQobiksIHQ7CiAgICB9CiAgICBmdW5jdGlvbiBkbihuLCB0KSB7CiAgICAgIGZ1bmN0aW9uIHIocykgewogICAgICAgIGFbc10gfHwgSltzXSB8fCAodm5bc10gPyB2bltzXS5mb3JFYWNoKHIpIDogKGkucHVzaChzKSwgYVtzXSA9ICEwKSk7CiAgICAgIH0KICAgICAgdmFyIGkgPSBbXSwgYSA9IHt9OwogICAgICB0aHJvdyB0LmZvckVhY2gociksIG5ldyB2dChuICsgIjogIiArIGkubWFwKGd0KS5qb2luKFsiLCAiXSkpOwogICAgfQogICAgZnVuY3Rpb24gd3QobiwgdCkgewogICAgICBmb3IgKHZhciByID0gW10sIGkgPSAwOyBpIDwgbjsgaSsrKQogICAgICAgIHIucHVzaChPWyh0ID4+IDIpICsgaV0pOwogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIENuKG4pIHsKICAgICAgZm9yICg7IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4ucG9wKCk7CiAgICAgICAgbi5wb3AoKSh0KTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gQXQobiwgdCwgcikgewogICAgICByZXR1cm4gbiBpbnN0YW5jZW9mIE9iamVjdCB8fCB2KHIgKyAnIHdpdGggaW52YWxpZCAidGhpcyI6ICcgKyBuKSwgbiBpbnN0YW5jZW9mIHQuZWEuY29uc3RydWN0b3IgfHwgdihyICsgJyBpbmNvbXBhdGlibGUgd2l0aCAidGhpcyIgb2YgdHlwZSAnICsgbi5jb25zdHJ1Y3Rvci5uYW1lKSwgbi5BLmRhIHx8IHYoImNhbm5vdCBjYWxsIGVtc2NyaXB0ZW4gYmluZGluZyBtZXRob2QgIiArIHIgKyAiIG9uIGRlbGV0ZWQgb2JqZWN0IiksIHduKG4uQS5kYSwgbi5BLmZhLmVhLCB0LmVhKTsKICAgIH0KICAgIHZhciB6biA9IFtdLCBJID0gW3t9LCB7IHZhbHVlOiB2b2lkIDAgfSwgeyB2YWx1ZTogbnVsbCB9LCB7IHZhbHVlOiAhMCB9LCB7IHZhbHVlOiAhMSB9XTsKICAgIGZ1bmN0aW9uIERuKG4pIHsKICAgICAgNCA8IG4gJiYgLS1JW25dLkphID09PSAwICYmIChJW25dID0gdm9pZCAwLCB6bi5wdXNoKG4pKTsKICAgIH0KICAgIGZ1bmN0aW9uIGVuKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSB2b2lkIDA6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIG51bGw6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlICEwOgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgY2FzZSAhMToKICAgICAgICAgIHJldHVybiA0OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB2YXIgdCA9IHpuLmxlbmd0aCA/IHpuLnBvcCgpIDogSS5sZW5ndGg7CiAgICAgICAgICByZXR1cm4gSVt0XSA9IHsgSmE6IDEsIHZhbHVlOiBuIH0sIHQ7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHJuKG4pIHsKICAgICAgaWYgKG4gPT09IG51bGwpCiAgICAgICAgcmV0dXJuICJudWxsIjsKICAgICAgdmFyIHQgPSB0eXBlb2YgbjsKICAgICAgcmV0dXJuIHQgPT09ICJvYmplY3QiIHx8IHQgPT09ICJhcnJheSIgfHwgdCA9PT0gImZ1bmN0aW9uIiA/IG4udG9TdHJpbmcoKSA6ICIiICsgbjsKICAgIH0KICAgIGZ1bmN0aW9uIGVlKG4sIHQpIHsKICAgICAgc3dpdGNoICh0KSB7CiAgICAgICAgY2FzZSAyOgogICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHIpIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKHFuW3IgPj4gMl0pOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDM6CiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24ocikgewogICAgICAgICAgICByZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUobnRbciA+PiAzXSk7CiAgICAgICAgICB9OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGZsb2F0IHR5cGU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gcmUobikgewogICAgICB2YXIgdCA9IEZ1bmN0aW9uOwogICAgICBpZiAoISh0IGluc3RhbmNlb2YgRnVuY3Rpb24pKQogICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIm5ld18gY2FsbGVkIHdpdGggY29uc3RydWN0b3IgdHlwZSAiICsgdHlwZW9mIHQgKyAiIHdoaWNoIGlzIG5vdCBhIGZ1bmN0aW9uIik7CiAgICAgIHZhciByID0gam4odC5uYW1lIHx8ICJ1bmtub3duRnVuY3Rpb25OYW1lIiwgZnVuY3Rpb24oKSB7CiAgICAgIH0pOwogICAgICByZXR1cm4gci5wcm90b3R5cGUgPSB0LnByb3RvdHlwZSwgciA9IG5ldyByKCksIG4gPSB0LmFwcGx5KHIsIG4pLCBuIGluc3RhbmNlb2YgT2JqZWN0ID8gbiA6IHI7CiAgICB9CiAgICBmdW5jdGlvbiBpZShuLCB0LCByKSB7CiAgICAgIHN3aXRjaCAodCkgewogICAgICAgIGNhc2UgMDoKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gWVtpXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBGW2ldOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICByZXR1cm4gciA/IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIFFbaSA+PiAxXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBwbltpID4+IDFdOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gciA/IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIE9baSA+PiAyXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBVW2kgPj4gMl07CiAgICAgICAgICB9OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGludGVnZXIgdHlwZTogIiArIG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBCbihuKSB7CiAgICAgIHJldHVybiBuIHx8IHYoIkNhbm5vdCB1c2UgZGVsZXRlZCB2YWwuIGhhbmRsZSA9ICIgKyBuKSwgSVtuXS52YWx1ZTsKICAgIH0KICAgIGZ1bmN0aW9uIF90KG4sIHQpIHsKICAgICAgdmFyIHIgPSBKW25dOwogICAgICByZXR1cm4gciA9PT0gdm9pZCAwICYmIHYodCArICIgaGFzIHVua25vd24gdHlwZSAiICsgZ3QobikpLCByOwogICAgfQogICAgdmFyIGFlID0ge30sIEN0ID0ge307CiAgICBmdW5jdGlvbiBFdCgpIHsKICAgICAgaWYgKCFWbikgewogICAgICAgIHZhciBuID0geyBVU0VSOiAid2ViX3VzZXIiLCBMT0dOQU1FOiAid2ViX3VzZXIiLCBQQVRIOiAiLyIsIFBXRDogIi8iLCBIT01FOiAiL2hvbWUvd2ViX3VzZXIiLCBMQU5HOiAodHlwZW9mIG5hdmlnYXRvciA9PSAib2JqZWN0IiAmJiBuYXZpZ2F0b3IubGFuZ3VhZ2VzICYmIG5hdmlnYXRvci5sYW5ndWFnZXNbMF0gfHwgIkMiKS5yZXBsYWNlKCItIiwgIl8iKSArICIuVVRGLTgiLCBfOiBUIHx8ICIuL3RoaXMucHJvZ3JhbSIgfSwgdDsKICAgICAgICBmb3IgKHQgaW4gQ3QpCiAgICAgICAgICBuW3RdID0gQ3RbdF07CiAgICAgICAgdmFyIHIgPSBbXTsKICAgICAgICBmb3IgKHQgaW4gbikKICAgICAgICAgIHIucHVzaCh0ICsgIj0iICsgblt0XSk7CiAgICAgICAgVm4gPSByOwogICAgICB9CiAgICAgIHJldHVybiBWbjsKICAgIH0KICAgIHZhciBWbiwgVHQgPSBbXTsKICAgIGZ1bmN0aW9uIE10KG4pIHsKICAgICAgdmFyIHQgPSB7fSwgcjsKICAgICAgZm9yIChyIGluIG4pCiAgICAgICAgKGZ1bmN0aW9uKGkpIHsKICAgICAgICAgIHZhciBhID0gbltpXTsKICAgICAgICAgIHRbaV0gPSB0eXBlb2YgYSA9PSAiZnVuY3Rpb24iID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIFR0LnB1c2goaSk7CiAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgcmV0dXJuIGEuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgICAgICAgICAgfSBmaW5hbGx5IHsKICAgICAgICAgICAgICBpZiAoa24pCiAgICAgICAgICAgICAgICByZXR1cm47CiAgICAgICAgICAgICAgdmFyIHMgPSBUdC5wb3AoKTsKICAgICAgICAgICAgICBYbihzID09PSBpKTsKICAgICAgICAgICAgfQogICAgICAgICAgfSA6IGE7CiAgICAgICAgfSkocik7CiAgICAgIHJldHVybiB0OwogICAgfQogICAgZm9yICh2YXIgUHQgPSBBcnJheSgyNTYpLCBFbiA9IDA7IDI1NiA+IEVuOyArK0VuKQogICAgICBQdFtFbl0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKEVuKTsKICAgIGx0ID0gUHQsIG5uID0gZS5CaW5kaW5nRXJyb3IgPSBMbigiQmluZGluZ0Vycm9yIiksIGN0ID0gZS5JbnRlcm5hbEVycm9yID0gTG4oIkludGVybmFsRXJyb3IiKSwgQi5wcm90b3R5cGUuaXNBbGlhc09mID0gZnVuY3Rpb24obikgewogICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQiAmJiBuIGluc3RhbmNlb2YgQikpCiAgICAgICAgcmV0dXJuICExOwogICAgICB2YXIgdCA9IHRoaXMuQS5mYS5lYSwgciA9IHRoaXMuQS5kYSwgaSA9IG4uQS5mYS5lYTsKICAgICAgZm9yIChuID0gbi5BLmRhOyB0LmlhOyApCiAgICAgICAgciA9IHQucWEociksIHQgPSB0LmlhOwogICAgICBmb3IgKDsgaS5pYTsgKQogICAgICAgIG4gPSBpLnFhKG4pLCBpID0gaS5pYTsKICAgICAgcmV0dXJuIHQgPT09IGkgJiYgciA9PT0gbjsKICAgIH0sIEIucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7CiAgICAgIGlmICh0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5wYSkKICAgICAgICByZXR1cm4gdGhpcy5BLmNvdW50LnZhbHVlICs9IDEsIHRoaXM7CiAgICAgIHZhciBuID0gdW4oT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcyksIHsgQTogeyB2YWx1ZTogSnQodGhpcy5BKSB9IH0pKTsKICAgICAgcmV0dXJuIG4uQS5jb3VudC52YWx1ZSArPSAxLCBuLkEub2EgPSAhMSwgbjsKICAgIH0sIEIucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uKCkgewogICAgICB0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5vYSAmJiAhdGhpcy5BLnBhICYmIHYoIk9iamVjdCBhbHJlYWR5IHNjaGVkdWxlZCBmb3IgZGVsZXRpb24iKSwgZnQodGhpcyksIGR0KHRoaXMuQSksIHRoaXMuQS5wYSB8fCAodGhpcy5BLmdhID0gdm9pZCAwLCB0aGlzLkEuZGEgPSB2b2lkIDApOwogICAgfSwgQi5wcm90b3R5cGUuaXNEZWxldGVkID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAhdGhpcy5BLmRhOwogICAgfSwgQi5wcm90b3R5cGUuZGVsZXRlTGF0ZXIgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIHRoaXMuQS5kYSB8fCBObih0aGlzKSwgdGhpcy5BLm9hICYmICF0aGlzLkEucGEgJiYgdigiT2JqZWN0IGFscmVhZHkgc2NoZWR1bGVkIGZvciBkZWxldGlvbiIpLCBjbi5wdXNoKHRoaXMpLCBjbi5sZW5ndGggPT09IDEgJiYgbG4gJiYgbG4oSG4pLCB0aGlzLkEub2EgPSAhMCwgdGhpczsKICAgIH0sIHoucHJvdG90eXBlLkRhID0gZnVuY3Rpb24obikgewogICAgICByZXR1cm4gdGhpcy53YSAmJiAobiA9IHRoaXMud2EobikpLCBuOwogICAgfSwgei5wcm90b3R5cGUudmEgPSBmdW5jdGlvbihuKSB7CiAgICAgIHRoaXMubmEgJiYgdGhpcy5uYShuKTsKICAgIH0sIHoucHJvdG90eXBlLmFyZ1BhY2tBZHZhbmNlID0gOCwgei5wcm90b3R5cGUucmVhZFZhbHVlRnJvbVBvaW50ZXIgPSBBbiwgei5wcm90b3R5cGUuZGVsZXRlT2JqZWN0ID0gZnVuY3Rpb24obikgewogICAgICBuICE9PSBudWxsICYmIG4uZGVsZXRlKCk7CiAgICB9LCB6LnByb3RvdHlwZS5mcm9tV2lyZVR5cGUgPSBmdW5jdGlvbihuKSB7CiAgICAgIGZ1bmN0aW9uIHQoKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuc2EgPyBfbih0aGlzLmVhLm1hLCB7IGZhOiB0aGlzLkdhLCBkYTogciwgaGE6IHRoaXMsIGdhOiBuIH0pIDogX24odGhpcy5lYS5tYSwgeyBmYTogdGhpcywgZGE6IG4gfSk7CiAgICAgIH0KICAgICAgdmFyIHIgPSB0aGlzLkRhKG4pOwogICAgICBpZiAoIXIpCiAgICAgICAgcmV0dXJuIHRoaXMudmEobiksIG51bGw7CiAgICAgIHZhciBpID0gdGUodGhpcy5lYSwgcik7CiAgICAgIGlmIChpICE9PSB2b2lkIDApCiAgICAgICAgcmV0dXJuIGkuQS5jb3VudC52YWx1ZSA9PT0gMCA/IChpLkEuZGEgPSByLCBpLkEuZ2EgPSBuLCBpLmNsb25lKCkpIDogKGkgPSBpLmNsb25lKCksIHRoaXMudmEobiksIGkpOwogICAgICBpZiAoaSA9IHRoaXMuZWEuQ2EociksIGkgPSBodFtpXSwgIWkpCiAgICAgICAgcmV0dXJuIHQuY2FsbCh0aGlzKTsKICAgICAgaSA9IHRoaXMucmEgPyBpLnphIDogaS5wb2ludGVyVHlwZTsKICAgICAgdmFyIGEgPSB5dChyLCB0aGlzLmVhLCBpLmVhKTsKICAgICAgcmV0dXJuIGEgPT09IG51bGwgPyB0LmNhbGwodGhpcykgOiB0aGlzLnNhID8gX24oaS5lYS5tYSwgeyBmYTogaSwgZGE6IGEsIGhhOiB0aGlzLCBnYTogbiB9KSA6IF9uKAogICAgICAgIGkuZWEubWEsCiAgICAgICAgeyBmYTogaSwgZGE6IGEgfQogICAgICApOwogICAgfSwgZS5nZXRJbmhlcml0ZWRJbnN0YW5jZUNvdW50ID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhmbikubGVuZ3RoOwogICAgfSwgZS5nZXRMaXZlSW5oZXJpdGVkSW5zdGFuY2VzID0gZnVuY3Rpb24oKSB7CiAgICAgIHZhciBuID0gW10sIHQ7CiAgICAgIGZvciAodCBpbiBmbikKICAgICAgICBmbi5oYXNPd25Qcm9wZXJ0eSh0KSAmJiBuLnB1c2goZm5bdF0pOwogICAgICByZXR1cm4gbjsKICAgIH0sIGUuZmx1c2hQZW5kaW5nRGVsZXRlcyA9IEhuLCBlLnNldERlbGF5RnVuY3Rpb24gPSBmdW5jdGlvbihuKSB7CiAgICAgIGxuID0gbiwgY24ubGVuZ3RoICYmIGxuICYmIGxuKEhuKTsKICAgIH0sIHZ0ID0gZS5VbmJvdW5kVHlwZUVycm9yID0gTG4oIlVuYm91bmRUeXBlRXJyb3IiKSwgZS5jb3VudF9lbXZhbF9oYW5kbGVzID0gZnVuY3Rpb24oKSB7CiAgICAgIGZvciAodmFyIG4gPSAwLCB0ID0gNTsgdCA8IEkubGVuZ3RoOyArK3QpCiAgICAgICAgSVt0XSAhPT0gdm9pZCAwICYmICsrbjsKICAgICAgcmV0dXJuIG47CiAgICB9LCBlLmdldF9maXJzdF9lbXZhbCA9IGZ1bmN0aW9uKCkgewogICAgICBmb3IgKHZhciBuID0gNTsgbiA8IEkubGVuZ3RoOyArK24pCiAgICAgICAgaWYgKElbbl0gIT09IHZvaWQgMCkKICAgICAgICAgIHJldHVybiBJW25dOwogICAgICByZXR1cm4gbnVsbDsKICAgIH0sIGl0LnB1c2goeyBCYTogZnVuY3Rpb24oKSB7CiAgICAgIFN0KCk7CiAgICB9IH0pOwogICAgdmFyIG9lID0gewogICAgICB6OiBmdW5jdGlvbihuKSB7CiAgICAgICAgcmV0dXJuIFRuKG4gKyAxNikgKyAxNjsKICAgICAgfSwKICAgICAgdTogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIHRocm93IG5ldyAkdChuKS5GYSh0LCByKSwgInVuY2F1Z2h0X2V4Y2VwdGlvbiIgaW4gbW4gPyBtbi54YSsrIDogbW4ueGEgPSAxLCBuOwogICAgICB9LAogICAgICB3OiBmdW5jdGlvbihuLCB0LCByLCBpLCBhKSB7CiAgICAgICAgdmFyIHMgPSB4bihyKTsKICAgICAgICB0ID0gVyh0KSwgSChuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oYykgewogICAgICAgICAgcmV0dXJuICEhYzsKICAgICAgICB9LCB0b1dpcmVUeXBlOiBmdW5jdGlvbihjLCBsKSB7CiAgICAgICAgICByZXR1cm4gbCA/IGkgOiBhOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogZnVuY3Rpb24oYykgewogICAgICAgICAgaWYgKHIgPT09IDEpCiAgICAgICAgICAgIHZhciBsID0gWTsKICAgICAgICAgIGVsc2UgaWYgKHIgPT09IDIpCiAgICAgICAgICAgIGwgPSBROwogICAgICAgICAgZWxzZSBpZiAociA9PT0gNCkKICAgICAgICAgICAgbCA9IE87CiAgICAgICAgICBlbHNlCiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gYm9vbGVhbiB0eXBlIHNpemU6ICIgKyB0KTsKICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShsW2MgPj4gc10pOwogICAgICAgIH0sIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBpOiBmdW5jdGlvbihuLCB0LCByLCBpLCBhLCBzLCBjLCBsLCBwLCBmLCBkLCBoLCBBKSB7CiAgICAgICAgZCA9IFcoZCksIHMgPSBWKGEsIHMpLCBsICYmIChsID0gVihjLCBsKSksIGYgJiYgKGYgPSBWKHAsIGYpKSwgQSA9IFYoaCwgQSk7CiAgICAgICAgdmFyIFAgPSBJbihkKTsKICAgICAgICBwdChQLCBmdW5jdGlvbigpIHsKICAgICAgICAgIGRuKCJDYW5ub3QgY29uc3RydWN0ICIgKyBkICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIFtpXSk7CiAgICAgICAgfSksIHRuKFtuLCB0LCByXSwgaSA/IFtpXSA6IFtdLCBmdW5jdGlvbih5KSB7CiAgICAgICAgICBpZiAoeSA9IHlbMF0sIGkpCiAgICAgICAgICAgIHZhciBOID0geS5lYSwgYiA9IE4ubWE7CiAgICAgICAgICBlbHNlCiAgICAgICAgICAgIGIgPSBCLnByb3RvdHlwZTsKICAgICAgICAgIHkgPSBqbihQLCBmdW5jdGlvbigpIHsKICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSAhPT0gaykKICAgICAgICAgICAgICB0aHJvdyBuZXcgbm4oIlVzZSAnbmV3JyB0byBjb25zdHJ1Y3QgIiArIGQpOwogICAgICAgICAgICBpZiAoTC5sYSA9PT0gdm9pZCAwKQogICAgICAgICAgICAgIHRocm93IG5ldyBubihkICsgIiBoYXMgbm8gYWNjZXNzaWJsZSBjb25zdHJ1Y3RvciIpOwogICAgICAgICAgICB2YXIgT3QgPSBMLmxhW2FyZ3VtZW50cy5sZW5ndGhdOwogICAgICAgICAgICBpZiAoT3QgPT09IHZvaWQgMCkKICAgICAgICAgICAgICB0aHJvdyBuZXcgbm4oIlRyaWVkIHRvIGludm9rZSBjdG9yIG9mICIgKyBkICsgIiB3aXRoIGludmFsaWQgbnVtYmVyIG9mIHBhcmFtZXRlcnMgKCIgKyBhcmd1bWVudHMubGVuZ3RoICsgIikgLSBleHBlY3RlZCAoIiArIE9iamVjdC5rZXlzKEwubGEpLnRvU3RyaW5nKCkgKyAiKSBwYXJhbWV0ZXJzIGluc3RlYWQhIik7CiAgICAgICAgICAgIHJldHVybiBPdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgICAgICAgfSk7CiAgICAgICAgICB2YXIgayA9IE9iamVjdC5jcmVhdGUoYiwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogeSB9IH0pOwogICAgICAgICAgeS5wcm90b3R5cGUgPSBrOwogICAgICAgICAgdmFyIEwgPSBuZXcgS3QoZCwgeSwgaywgQSwgTiwgcywgbCwgZik7CiAgICAgICAgICBOID0gbmV3IHooZCwgTCwgITAsICExKSwgYiA9IG5ldyB6KGQgKyAiKiIsIEwsICExLCAhMSk7CiAgICAgICAgICB2YXIgaG4gPSBuZXcgeihkICsgIiBjb25zdCoiLCBMLCAhMSwgITApOwogICAgICAgICAgcmV0dXJuIGh0W25dID0geyBwb2ludGVyVHlwZTogYiwgemE6IGhuIH0sIG10KFAsIHkpLCBbTiwgYiwgaG5dOwogICAgICAgIH0pOwogICAgICB9LAogICAgICBoOiBmdW5jdGlvbihuLCB0LCByLCBpLCBhLCBzKSB7CiAgICAgICAgWG4oMCA8IHQpOwogICAgICAgIHZhciBjID0gd3QodCwgcik7CiAgICAgICAgYSA9IFYoaSwgYSk7CiAgICAgICAgdmFyIGwgPSBbc10sIHAgPSBbXTsKICAgICAgICB0bihbXSwgW25dLCBmdW5jdGlvbihmKSB7CiAgICAgICAgICBmID0gZlswXTsKICAgICAgICAgIHZhciBkID0gImNvbnN0cnVjdG9yICIgKyBmLm5hbWU7CiAgICAgICAgICBpZiAoZi5lYS5sYSA9PT0gdm9pZCAwICYmIChmLmVhLmxhID0gW10pLCBmLmVhLmxhW3QgLSAxXSAhPT0gdm9pZCAwKQogICAgICAgICAgICB0aHJvdyBuZXcgbm4oIkNhbm5vdCByZWdpc3RlciBtdWx0aXBsZSBjb25zdHJ1Y3RvcnMgd2l0aCBpZGVudGljYWwgbnVtYmVyIG9mIHBhcmFtZXRlcnMgKCIgKyAodCAtIDEpICsgIikgZm9yIGNsYXNzICciICsgZi5uYW1lICsgIichIE92ZXJsb2FkIHJlc29sdXRpb24gaXMgY3VycmVudGx5IG9ubHkgcGVyZm9ybWVkIHVzaW5nIHRoZSBwYXJhbWV0ZXIgY291bnQsIG5vdCBhY3R1YWwgdHlwZSBpbmZvISIpOwogICAgICAgICAgcmV0dXJuIGYuZWEubGFbdCAtIDFdID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGRuKCJDYW5ub3QgY29uc3RydWN0ICIgKyBmLm5hbWUgKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgYyk7CiAgICAgICAgICB9LCB0bihbXSwgYywgZnVuY3Rpb24oaCkgewogICAgICAgICAgICByZXR1cm4gZi5lYS5sYVt0IC0gMV0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICBhcmd1bWVudHMubGVuZ3RoICE9PSB0IC0gMSAmJiB2KGQgKyAiIGNhbGxlZCB3aXRoICIgKyBhcmd1bWVudHMubGVuZ3RoICsgIiBhcmd1bWVudHMsIGV4cGVjdGVkICIgKyAodCAtIDEpKSwgcC5sZW5ndGggPSAwLCBsLmxlbmd0aCA9IHQ7CiAgICAgICAgICAgICAgZm9yICh2YXIgQSA9IDE7IEEgPCB0OyArK0EpCiAgICAgICAgICAgICAgICBsW0FdID0gaFtBXS50b1dpcmVUeXBlKAogICAgICAgICAgICAgICAgICBwLAogICAgICAgICAgICAgICAgICBhcmd1bWVudHNbQSAtIDFdCiAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgIHJldHVybiBBID0gYS5hcHBseShudWxsLCBsKSwgQ24ocCksIGhbMF0uZnJvbVdpcmVUeXBlKEEpOwogICAgICAgICAgICB9LCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgYjogZnVuY3Rpb24obiwgdCwgciwgaSwgYSwgcywgYywgbCwgcCwgZikgewogICAgICAgIHQgPSBXKHQpLCBhID0gVihpLCBhKSwgdG4oW10sIFtuXSwgZnVuY3Rpb24oZCkgewogICAgICAgICAgZCA9IGRbMF07CiAgICAgICAgICB2YXIgaCA9IGQubmFtZSArICIuIiArIHQsIEEgPSB7IGdldDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGRuKCJDYW5ub3QgYWNjZXNzICIgKyBoICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIFtyLCBjXSk7CiAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCB9OwogICAgICAgICAgcmV0dXJuIHAgPyBBLnNldCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBkbigiQ2Fubm90IGFjY2VzcyAiICsgaCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbciwgY10pOwogICAgICAgICAgfSA6IEEuc2V0ID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHYoaCArICIgaXMgYSByZWFkLW9ubHkgcHJvcGVydHkiKTsKICAgICAgICAgIH0sIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkLmVhLm1hLCB0LCBBKSwgdG4oW10sIHAgPyBbciwgY10gOiBbcl0sIGZ1bmN0aW9uKFApIHsKICAgICAgICAgICAgdmFyIHkgPSBQWzBdLCBOID0geyBnZXQ6IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIHZhciBrID0gQXQodGhpcywgZCwgaCArICIgZ2V0dGVyIik7CiAgICAgICAgICAgICAgcmV0dXJuIHkuZnJvbVdpcmVUeXBlKGEocywgaykpOwogICAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCB9OwogICAgICAgICAgICBpZiAocCkgewogICAgICAgICAgICAgIHAgPSBWKGwsIHApOwogICAgICAgICAgICAgIHZhciBiID0gUFsxXTsKICAgICAgICAgICAgICBOLnNldCA9IGZ1bmN0aW9uKGspIHsKICAgICAgICAgICAgICAgIHZhciBMID0gQXQodGhpcywgZCwgaCArICIgc2V0dGVyIiksIGhuID0gW107CiAgICAgICAgICAgICAgICBwKGYsIEwsIGIudG9XaXJlVHlwZShobiwgaykpLCBDbihobik7CiAgICAgICAgICAgICAgfTsKICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGQuZWEubWEsIHQsIE4pLCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgdjogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHQgPSBXKHQpLCBIKG4sIHsgbmFtZTogdCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihyKSB7CiAgICAgICAgICB2YXIgaSA9IElbcl0udmFsdWU7CiAgICAgICAgICByZXR1cm4gRG4ociksIGk7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24ociwgaSkgewogICAgICAgICAgcmV0dXJuIGVuKGkpOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBtOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgciA9IHhuKHIpLCB0ID0gVyh0KSwgSChuLCB7CiAgICAgICAgICBuYW1lOiB0LAogICAgICAgICAgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBpOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIGEpIHsKICAgICAgICAgICAgaWYgKHR5cGVvZiBhICE9ICJudW1iZXIiICYmIHR5cGVvZiBhICE9ICJib29sZWFuIikKICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCAiJyArIHJuKGEpICsgJyIgdG8gJyArIHRoaXMubmFtZSk7CiAgICAgICAgICAgIHJldHVybiBhOwogICAgICAgICAgfSwKICAgICAgICAgIGFyZ1BhY2tBZHZhbmNlOiA4LAogICAgICAgICAgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IGVlKHQsIHIpLAogICAgICAgICAga2E6IG51bGwKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgYzogZnVuY3Rpb24obiwgdCwgciwgaSwgYSwgcykgewogICAgICAgIHZhciBjID0gd3QodCwgcik7CiAgICAgICAgbiA9IFcobiksIGEgPSBWKGksIGEpLCBwdChuLCBmdW5jdGlvbigpIHsKICAgICAgICAgIGRuKCJDYW5ub3QgY2FsbCAiICsgbiArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBjKTsKICAgICAgICB9LCB0IC0gMSksIHRuKFtdLCBjLCBmdW5jdGlvbihsKSB7CiAgICAgICAgICB2YXIgcCA9IG4sIGYgPSBuOwogICAgICAgICAgbCA9IFtsWzBdLCBudWxsXS5jb25jYXQobC5zbGljZSgxKSk7CiAgICAgICAgICB2YXIgZCA9IGEsIGggPSBsLmxlbmd0aDsKICAgICAgICAgIDIgPiBoICYmIHYoImFyZ1R5cGVzIGFycmF5IHNpemUgbWlzbWF0Y2ghIE11c3QgYXQgbGVhc3QgZ2V0IHJldHVybiB2YWx1ZSBhbmQgJ3RoaXMnIHR5cGVzISIpOwogICAgICAgICAgZm9yICh2YXIgQSA9IGxbMV0gIT09IG51bGwgJiYgITEsIFAgPSAhMSwgeSA9IDE7IHkgPCBsLmxlbmd0aDsgKyt5KQogICAgICAgICAgICBpZiAobFt5XSAhPT0gbnVsbCAmJiBsW3ldLmthID09PSB2b2lkIDApIHsKICAgICAgICAgICAgICBQID0gITA7CiAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgIH0KICAgICAgICAgIHZhciBOID0gbFswXS5uYW1lICE9PSAidm9pZCIsIGIgPSAiIiwgayA9ICIiOwogICAgICAgICAgZm9yICh5ID0gMDsgeSA8IGggLSAyOyArK3kpCiAgICAgICAgICAgIGIgKz0gKHkgIT09IDAgPyAiLCAiIDogIiIpICsgImFyZyIgKyB5LCBrICs9ICh5ICE9PSAwID8gIiwgIiA6ICIiKSArICJhcmciICsgeSArICJXaXJlZCI7CiAgICAgICAgICBmID0gInJldHVybiBmdW5jdGlvbiAiICsgSW4oZikgKyAiKCIgKyBiICsgYCkgewppZiAoYXJndW1lbnRzLmxlbmd0aCAhPT0gYCArIChoIC0gMikgKyBgKSB7CnRocm93QmluZGluZ0Vycm9yKCdmdW5jdGlvbiBgICsgZiArICIgY2FsbGVkIHdpdGggJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cywgZXhwZWN0ZWQgIiArIChoIC0gMikgKyBgIGFyZ3MhJyk7Cn0KYCwgUCAmJiAoZiArPSBgdmFyIGRlc3RydWN0b3JzID0gW107CmApOwogICAgICAgICAgdmFyIEwgPSBQID8gImRlc3RydWN0b3JzIiA6ICJudWxsIjsKICAgICAgICAgIGZvciAoYiA9ICJ0aHJvd0JpbmRpbmdFcnJvciBpbnZva2VyIGZuIHJ1bkRlc3RydWN0b3JzIHJldFR5cGUgY2xhc3NQYXJhbSIuc3BsaXQoIiAiKSwgZCA9IFt2LCBkLCBzLCBDbiwgbFswXSwgbFsxXV0sIEEgJiYgKGYgKz0gInZhciB0aGlzV2lyZWQgPSBjbGFzc1BhcmFtLnRvV2lyZVR5cGUoIiArIEwgKyBgLCB0aGlzKTsKYCksIHkgPSAwOyB5IDwgaCAtIDI7ICsreSkKICAgICAgICAgICAgZiArPSAidmFyIGFyZyIgKyB5ICsgIldpcmVkID0gYXJnVHlwZSIgKyB5ICsgIi50b1dpcmVUeXBlKCIgKyBMICsgIiwgYXJnIiArIHkgKyAiKTsgLy8gIiArIGxbeSArIDJdLm5hbWUgKyBgCmAsIGIucHVzaCgiYXJnVHlwZSIgKyB5KSwgZC5wdXNoKGxbeSArIDJdKTsKICAgICAgICAgIGlmIChBICYmIChrID0gInRoaXNXaXJlZCIgKyAoMCA8IGsubGVuZ3RoID8gIiwgIiA6ICIiKSArIGspLCBmICs9IChOID8gInZhciBydiA9ICIgOiAiIikgKyAiaW52b2tlcihmbiIgKyAoMCA8IGsubGVuZ3RoID8gIiwgIiA6ICIiKSArIGsgKyBgKTsKYCwgUCkKICAgICAgICAgICAgZiArPSBgcnVuRGVzdHJ1Y3RvcnMoZGVzdHJ1Y3RvcnMpOwpgOwogICAgICAgICAgZWxzZQogICAgICAgICAgICBmb3IgKHkgPSBBID8gMSA6IDI7IHkgPCBsLmxlbmd0aDsgKyt5KQogICAgICAgICAgICAgIGggPSB5ID09PSAxID8gInRoaXNXaXJlZCIgOiAiYXJnIiArICh5IC0gMikgKyAiV2lyZWQiLCBsW3ldLmthICE9PSBudWxsICYmIChmICs9IGggKyAiX2R0b3IoIiArIGggKyAiKTsgLy8gIiArIGxbeV0ubmFtZSArIGAKYCwgYi5wdXNoKGggKyAiX2R0b3IiKSwgZC5wdXNoKGxbeV0ua2EpKTsKICAgICAgICAgIHJldHVybiBOICYmIChmICs9IGB2YXIgcmV0ID0gcmV0VHlwZS5mcm9tV2lyZVR5cGUocnYpOwpyZXR1cm4gcmV0OwpgKSwgYi5wdXNoKGYgKyBgfQpgKSwgbCA9IHJlKGIpLmFwcGx5KG51bGwsIGQpLCBtdChwLCBsLCB0IC0gMSksIFtdOwogICAgICAgIH0pOwogICAgICB9LAogICAgICBlOiBmdW5jdGlvbihuLCB0LCByLCBpLCBhKSB7CiAgICAgICAgZnVuY3Rpb24gcyhmKSB7CiAgICAgICAgICByZXR1cm4gZjsKICAgICAgICB9CiAgICAgICAgdCA9IFcodCksIGEgPT09IC0xICYmIChhID0gNDI5NDk2NzI5NSk7CiAgICAgICAgdmFyIGMgPSB4bihyKTsKICAgICAgICBpZiAoaSA9PT0gMCkgewogICAgICAgICAgdmFyIGwgPSAzMiAtIDggKiByOwogICAgICAgICAgcyA9IGZ1bmN0aW9uKGYpIHsKICAgICAgICAgICAgcmV0dXJuIGYgPDwgbCA+Pj4gbDsKICAgICAgICAgIH07CiAgICAgICAgfQogICAgICAgIHZhciBwID0gdC5pbmRleE9mKCJ1bnNpZ25lZCIpICE9IC0xOwogICAgICAgIEgobiwgeyBuYW1lOiB0LCBmcm9tV2lyZVR5cGU6IHMsIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGYsIGQpIHsKICAgICAgICAgIGlmICh0eXBlb2YgZCAhPSAibnVtYmVyIiAmJiB0eXBlb2YgZCAhPSAiYm9vbGVhbiIpCiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0ICInICsgcm4oZCkgKyAnIiB0byAnICsgdGhpcy5uYW1lKTsKICAgICAgICAgIGlmIChkIDwgaSB8fCBkID4gYSkKICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUGFzc2luZyBhIG51bWJlciAiJyArIHJuKGQpICsgJyIgZnJvbSBKUyBzaWRlIHRvIEMvQysrIHNpZGUgdG8gYW4gYXJndW1lbnQgb2YgdHlwZSAiJyArIHQgKyAnIiwgd2hpY2ggaXMgb3V0c2lkZSB0aGUgdmFsaWQgcmFuZ2UgWycgKyBpICsgIiwgIiArIGEgKyAiXSEiKTsKICAgICAgICAgIHJldHVybiBwID8gZCA+Pj4gMCA6IGQgfCAwOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogaWUodCwgYywgaSAhPT0gMCksIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBkOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgZnVuY3Rpb24gaShzKSB7CiAgICAgICAgICBzID4+PSAyOwogICAgICAgICAgdmFyIGMgPSBVOwogICAgICAgICAgcmV0dXJuIG5ldyBhKEssIGNbcyArIDFdLCBjW3NdKTsKICAgICAgICB9CiAgICAgICAgdmFyIGEgPSBbSW50OEFycmF5LCBVaW50OEFycmF5LCBJbnQxNkFycmF5LCBVaW50MTZBcnJheSwgSW50MzJBcnJheSwgVWludDMyQXJyYXksIEZsb2F0MzJBcnJheSwgRmxvYXQ2NEFycmF5XVt0XTsKICAgICAgICByID0gVyhyKSwgSChuLCB7IG5hbWU6IHIsIGZyb21XaXJlVHlwZTogaSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBpIH0sIHsgRWE6ICEwIH0pOwogICAgICB9LAogICAgICBuOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdCA9IFcodCk7CiAgICAgICAgdmFyIHIgPSB0ID09PSAic3RkOjpzdHJpbmciOwogICAgICAgIEgobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICB2YXIgYSA9IFVbaSA+PiAyXTsKICAgICAgICAgICAgaWYgKHIpCiAgICAgICAgICAgICAgZm9yICh2YXIgcyA9IGkgKyA0LCBjID0gMDsgYyA8PSBhOyArK2MpIHsKICAgICAgICAgICAgICAgIHZhciBsID0gaSArIDQgKyBjOwogICAgICAgICAgICAgICAgaWYgKGMgPT0gYSB8fCBGW2xdID09IDApIHsKICAgICAgICAgICAgICAgICAgaWYgKHMpIHsKICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IHMsIGYgPSBGLCBkID0gcCArIChsIC0gcyk7CiAgICAgICAgICAgICAgICAgICAgZm9yIChzID0gcDsgZltzXSAmJiAhKHMgPj0gZCk7ICkKICAgICAgICAgICAgICAgICAgICAgICsrczsKICAgICAgICAgICAgICAgICAgICBpZiAoMTYgPCBzIC0gcCAmJiBmLnN1YmFycmF5ICYmIEtuKQogICAgICAgICAgICAgICAgICAgICAgcCA9IEtuLmRlY29kZShmLnN1YmFycmF5KHAsIHMpKTsKICAgICAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICAgIGZvciAoZCA9ICIiOyBwIDwgczsgKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoID0gZltwKytdOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAoaCAmIDEyOCkgewogICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBBID0gZltwKytdICYgNjM7CiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChoICYgMjI0KSA9PSAxOTIpCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGggJiAzMSkgPDwgNiB8IEEpOwogICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFAgPSBmW3ArK10gJiA2MzsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGggPSAoaCAmIDI0MCkgPT0gMjI0ID8gKGggJiAxNSkgPDwgMTIgfCBBIDw8IDYgfCBQIDogKGggJiA3KSA8PCAxOCB8IEEgPDwgMTIgfCBQIDw8IDYgfCBmW3ArK10gJiA2MywgNjU1MzYgPiBoID8gZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGgpIDogKGggLT0gNjU1MzYsIGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiB8IGggPj4gMTAsIDU2MzIwIHwgaCAmIDEwMjMpKTsKICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZQogICAgICAgICAgICAgICAgICAgICAgICAgIGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShoKTsKICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgIHAgPSBkOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgfSBlbHNlCiAgICAgICAgICAgICAgICAgICAgcCA9ICIiOwogICAgICAgICAgICAgICAgICBpZiAoeSA9PT0gdm9pZCAwKQogICAgICAgICAgICAgICAgICAgIHZhciB5ID0gcDsKICAgICAgICAgICAgICAgICAgZWxzZQogICAgICAgICAgICAgICAgICAgIHkgKz0gIlwwIiwgeSArPSBwOwogICAgICAgICAgICAgICAgICBzID0gbCArIDE7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICBmb3IgKHkgPSBBcnJheShhKSwgYyA9IDA7IGMgPCBhOyArK2MpCiAgICAgICAgICAgICAgICB5W2NdID0gU3RyaW5nLmZyb21DaGFyQ29kZShGW2kgKyA0ICsgY10pOwogICAgICAgICAgICAgIHkgPSB5LmpvaW4oIiIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiBEKGkpLCB5OwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIGEpIHsKICAgICAgICAgICAgYSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyICYmIChhID0gbmV3IFVpbnQ4QXJyYXkoYSkpOwogICAgICAgICAgICB2YXIgcyA9IHR5cGVvZiBhID09ICJzdHJpbmciOwogICAgICAgICAgICBzIHx8IGEgaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IGEgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSB8fCBhIGluc3RhbmNlb2YgSW50OEFycmF5IHx8IHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gc3RkOjpzdHJpbmciKTsKICAgICAgICAgICAgdmFyIGMgPSAociAmJiBzID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IDAsIGQgPSAwOyBkIDwgYS5sZW5ndGg7ICsrZCkgewogICAgICAgICAgICAgICAgdmFyIGggPSBhLmNoYXJDb2RlQXQoZCk7CiAgICAgICAgICAgICAgICA1NTI5NiA8PSBoICYmIDU3MzQzID49IGggJiYgKGggPSA2NTUzNiArICgoaCAmIDEwMjMpIDw8IDEwKSB8IGEuY2hhckNvZGVBdCgrK2QpICYgMTAyMyksIDEyNyA+PSBoID8gKytmIDogZiA9IDIwNDcgPj0gaCA/IGYgKyAyIDogNjU1MzUgPj0gaCA/IGYgKyAzIDogZiArIDQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHJldHVybiBmOwogICAgICAgICAgICB9IDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgcmV0dXJuIGEubGVuZ3RoOwogICAgICAgICAgICB9KSgpLCBsID0gVG4oNCArIGMgKyAxKTsKICAgICAgICAgICAgaWYgKFVbbCA+PiAyXSA9IGMsIHIgJiYgcykKICAgICAgICAgICAgICBOdChhLCBsICsgNCwgYyArIDEpOwogICAgICAgICAgICBlbHNlIGlmIChzKQogICAgICAgICAgICAgIGZvciAocyA9IDA7IHMgPCBjOyArK3MpIHsKICAgICAgICAgICAgICAgIHZhciBwID0gYS5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgICAgICAgMjU1IDwgcCAmJiAoRChsKSwgdigiU3RyaW5nIGhhcyBVVEYtMTYgY29kZSB1bml0cyB0aGF0IGRvIG5vdCBmaXQgaW4gOCBiaXRzIikpLCBGW2wgKyA0ICsgc10gPSBwOwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZQogICAgICAgICAgICAgIGZvciAocyA9IDA7IHMgPCBjOyArK3MpCiAgICAgICAgICAgICAgICBGW2wgKyA0ICsgc10gPSBhW3NdOwogICAgICAgICAgICByZXR1cm4gaSAhPT0gbnVsbCAmJiBpLnB1c2goRCwgbCksIGw7CiAgICAgICAgICB9LAogICAgICAgICAgYXJnUGFja0FkdmFuY2U6IDgsCiAgICAgICAgICByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sCiAgICAgICAgICBrYTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICBEKGkpOwogICAgICAgICAgfQogICAgICAgIH0pOwogICAgICB9LAogICAgICBqOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgaWYgKHIgPSBXKHIpLCB0ID09PSAyKQogICAgICAgICAgdmFyIGkgPSBVdCwgYSA9IEh0LCBzID0genQsIGMgPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgcmV0dXJuIHBuOwogICAgICAgICAgfSwgbCA9IDE7CiAgICAgICAgZWxzZQogICAgICAgICAgdCA9PT0gNCAmJiAoaSA9IER0LCBhID0gQnQsIHMgPSBWdCwgYyA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICByZXR1cm4gVTsKICAgICAgICAgIH0sIGwgPSAyKTsKICAgICAgICBIKG4sIHsgbmFtZTogciwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihwKSB7CiAgICAgICAgICBmb3IgKHZhciBmID0gVVtwID4+IDJdLCBkID0gYygpLCBoLCBBID0gcCArIDQsIFAgPSAwOyBQIDw9IGY7ICsrUCkgewogICAgICAgICAgICB2YXIgeSA9IHAgKyA0ICsgUCAqIHQ7CiAgICAgICAgICAgIChQID09IGYgfHwgZFt5ID4+IGxdID09IDApICYmIChBID0gaShBLCB5IC0gQSksIGggPT09IHZvaWQgMCA/IGggPSBBIDogKGggKz0gIlwwIiwgaCArPSBBKSwgQSA9IHkgKyB0KTsKICAgICAgICAgIH0KICAgICAgICAgIHJldHVybiBEKHApLCBoOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHAsIGYpIHsKICAgICAgICAgIHR5cGVvZiBmICE9ICJzdHJpbmciICYmIHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gQysrIHN0cmluZyB0eXBlICIgKyByKTsKICAgICAgICAgIHZhciBkID0gcyhmKSwgaCA9IFRuKDQgKyBkICsgdCk7CiAgICAgICAgICByZXR1cm4gVVtoID4+IDJdID0gZCA+PiBsLCBhKGYsIGggKyA0LCBkICsgdCksIHAgIT09IG51bGwgJiYgcC5wdXNoKEQsIGgpLCBoOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sIGthOiBmdW5jdGlvbihwKSB7CiAgICAgICAgICBEKHApOwogICAgICAgIH0gfSk7CiAgICAgIH0sCiAgICAgIHg6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gVyh0KSwgSChuLCB7IFFhOiAhMCwgbmFtZTogdCwgYXJnUGFja0FkdmFuY2U6IDAsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSB9KTsKICAgICAgfSwKICAgICAgazogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIG4gPSBCbihuKSwgdCA9IF90KHQsICJlbXZhbDo6YXMiKTsKICAgICAgICB2YXIgaSA9IFtdLCBhID0gZW4oaSk7CiAgICAgICAgcmV0dXJuIE9bciA+PiAyXSA9IGEsIHQudG9XaXJlVHlwZShpLCBuKTsKICAgICAgfSwKICAgICAgZzogRG4sCiAgICAgIGw6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICByZXR1cm4gbiA9IEJuKG4pLCB0ID0gQm4odCksIGVuKG5bdF0pOwogICAgICB9LAogICAgICBwOiBmdW5jdGlvbihuKSB7CiAgICAgICAgdmFyIHQgPSBhZVtuXTsKICAgICAgICByZXR1cm4gZW4odCA9PT0gdm9pZCAwID8gVyhuKSA6IHQpOwogICAgICB9LAogICAgICBvOiBmdW5jdGlvbihuKSB7CiAgICAgICAgQ24oSVtuXS52YWx1ZSksIERuKG4pOwogICAgICB9LAogICAgICB5OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgcmV0dXJuIG4gPSBfdChuLCAiX2VtdmFsX3Rha2VfdmFsdWUiKSwgbiA9IG4ucmVhZFZhbHVlRnJvbVBvaW50ZXIodCksIGVuKG4pOwogICAgICB9LAogICAgICBmOiBmdW5jdGlvbigpIHsKICAgICAgICBzbigpOwogICAgICB9LAogICAgICBxOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgRi5jb3B5V2l0aGluKG4sIHQsIHQgKyByKTsKICAgICAgfSwKICAgICAgcjogZnVuY3Rpb24obikgewogICAgICAgIG4gPj4+PSAwOwogICAgICAgIHZhciB0ID0gRi5sZW5ndGg7CiAgICAgICAgaWYgKDIxNDc0ODM2NDggPCBuKQogICAgICAgICAgcmV0dXJuICExOwogICAgICAgIGZvciAodmFyIHIgPSAxOyA0ID49IHI7IHIgKj0gMikgewogICAgICAgICAgdmFyIGkgPSB0ICogKDEgKyAwLjIgLyByKTsKICAgICAgICAgIGkgPSBNYXRoLm1pbihpLCBuICsgMTAwNjYzMjk2KSwgaSA9IE1hdGgubWF4KDE2Nzc3MjE2LCBuLCBpKSwgMCA8IGkgJSA2NTUzNiAmJiAoaSArPSA2NTUzNiAtIGkgJSA2NTUzNik7CiAgICAgICAgICBuOiB7CiAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgRy5ncm93KE1hdGgubWluKDIxNDc0ODM2NDgsIGkpIC0gSy5ieXRlTGVuZ3RoICsgNjU1MzUgPj4+IDE2KSwgdHQoRy5idWZmZXIpOwogICAgICAgICAgICAgIHZhciBhID0gMTsKICAgICAgICAgICAgICBicmVhayBuOwogICAgICAgICAgICB9IGNhdGNoIHsKICAgICAgICAgICAgfQogICAgICAgICAgICBhID0gdm9pZCAwOwogICAgICAgICAgfQogICAgICAgICAgaWYgKGEpCiAgICAgICAgICAgIHJldHVybiAhMDsKICAgICAgICB9CiAgICAgICAgcmV0dXJuICExOwogICAgICB9LAogICAgICBzOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSAwOwogICAgICAgIHJldHVybiBFdCgpLmZvckVhY2goZnVuY3Rpb24oaSwgYSkgewogICAgICAgICAgdmFyIHMgPSB0ICsgcjsKICAgICAgICAgIGZvciAoYSA9IE9bbiArIDQgKiBhID4+IDJdID0gcywgcyA9IDA7IHMgPCBpLmxlbmd0aDsgKytzKQogICAgICAgICAgICBZW2ErKyA+PiAwXSA9IGkuY2hhckNvZGVBdChzKTsKICAgICAgICAgIFlbYSA+PiAwXSA9IDAsIHIgKz0gaS5sZW5ndGggKyAxOwogICAgICAgIH0pLCAwOwogICAgICB9LAogICAgICB0OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSBFdCgpOwogICAgICAgIE9bbiA+PiAyXSA9IHIubGVuZ3RoOwogICAgICAgIHZhciBpID0gMDsKICAgICAgICByZXR1cm4gci5mb3JFYWNoKGZ1bmN0aW9uKGEpIHsKICAgICAgICAgIGkgKz0gYS5sZW5ndGggKyAxOwogICAgICAgIH0pLCBPW3QgPj4gMl0gPSBpLCAwOwogICAgICB9LAogICAgICBhOiBHCiAgICB9OwogICAgKGZ1bmN0aW9uKCkgewogICAgICBmdW5jdGlvbiBuKHMpIHsKICAgICAgICBzID0gcy5leHBvcnRzLCBzID0gTXQocyksIGUuYXNtID0gcywgWi0tLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKFopLCBaID09IDAgJiYgb24gJiYgKHMgPSBvbiwgb24gPSBudWxsLCBzKCkpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIHQocykgewogICAgICAgIG4ocy5pbnN0YW5jZSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gcihzKSB7CiAgICAgICAgcmV0dXJuIFp0KCkudGhlbihmdW5jdGlvbihjKSB7CiAgICAgICAgICByZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoYywgaSk7CiAgICAgICAgfSkudGhlbihzLCBmdW5jdGlvbihjKSB7CiAgICAgICAgICBTKCJmYWlsZWQgdG8gYXN5bmNocm9ub3VzbHkgcHJlcGFyZSB3YXNtOiAiICsgYyksIHNuKGMpOwogICAgICAgIH0pOwogICAgICB9CiAgICAgIHZhciBpID0geyBhOiBvZSB9OwogICAgICBpZiAoWisrLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKFopLCBlLmluc3RhbnRpYXRlV2FzbSkKICAgICAgICB0cnkgewogICAgICAgICAgdmFyIGEgPSBlLmluc3RhbnRpYXRlV2FzbShpLCBuKTsKICAgICAgICAgIHJldHVybiBhID0gTXQoYSk7CiAgICAgICAgfSBjYXRjaCAocykgewogICAgICAgICAgcmV0dXJuIFMoIk1vZHVsZS5pbnN0YW50aWF0ZVdhc20gY2FsbGJhY2sgZmFpbGVkIHdpdGggZXJyb3I6ICIgKyBzKSwgITE7CiAgICAgICAgfQogICAgICByZXR1cm4gZnVuY3Rpb24oKSB7CiAgICAgICAgaWYgKGogfHwgdHlwZW9mIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nICE9ICJmdW5jdGlvbiIgfHwgb3QoKSB8fCBSbigiZmlsZTovLyIpIHx8IHR5cGVvZiBmZXRjaCAhPSAiZnVuY3Rpb24iKQogICAgICAgICAgcmV0dXJuIHIodCk7CiAgICAgICAgZmV0Y2goJCwgeyBjcmVkZW50aWFsczogInNhbWUtb3JpZ2luIiB9KS50aGVuKGZ1bmN0aW9uKHMpIHsKICAgICAgICAgIHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyhzLCBpKS50aGVuKHQsIGZ1bmN0aW9uKGMpIHsKICAgICAgICAgICAgcmV0dXJuIFMoIndhc20gc3RyZWFtaW5nIGNvbXBpbGUgZmFpbGVkOiAiICsgYyksIFMoImZhbGxpbmcgYmFjayB0byBBcnJheUJ1ZmZlciBpbnN0YW50aWF0aW9uIiksIHIodCk7CiAgICAgICAgICB9KTsKICAgICAgICB9KTsKICAgICAgfSgpLCB7fTsKICAgIH0pKCk7CiAgICB2YXIgU3QgPSBlLl9fX3dhc21fY2FsbF9jdG9ycyA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKFN0ID0gZS5fX193YXNtX2NhbGxfY3RvcnMgPSBlLmFzbS5CKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgVG4gPSBlLl9tYWxsb2MgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChUbiA9IGUuX21hbGxvYyA9IGUuYXNtLkMpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBEID0gZS5fZnJlZSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKEQgPSBlLl9mcmVlID0gZS5hc20uRCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGJ0ID0gZS5fX19nZXRUeXBlTmFtZSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGJ0ID0gZS5fX19nZXRUeXBlTmFtZSA9IGUuYXNtLkUpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9OwogICAgZS5fX19lbWJpbmRfcmVnaXN0ZXJfbmF0aXZlX2FuZF9idWlsdGluX3R5cGVzID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fX19lbWJpbmRfcmVnaXN0ZXJfbmF0aXZlX2FuZF9idWlsdGluX3R5cGVzID0gZS5hc20uRikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paSA9IGUuYXNtLkcpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmkgPSBlLmFzbS5IKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2kgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaSA9IGUuYXNtLkkpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaSA9IGUuYXNtLkopLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpID0gZS5hc20uSykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9maWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfZmlpID0gZS5hc20uTCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlmID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWYgPSBlLmFzbS5NKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpID0gZS5hc20uTikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWkgPSBlLmFzbS5PKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWkgPSBlLmFzbS5QKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWkgPSBlLmFzbS5RKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpID0gZS5hc20uUikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWlpaSA9IGUuYXNtLlMpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWkgPSBlLmFzbS5UKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWlpaSA9IGUuYXNtLlUpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpaWRpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWlkaSA9IGUuYXNtLlYpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpZGkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpZGkgPSBlLmFzbS5XKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWlpID0gZS5hc20uWCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWkgPSBlLmFzbS5ZKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWkgPSBlLmFzbS5aKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaSA9IGUuYXNtLl8pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdGFydF91bndpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdGFydF91bndpbmQgPSBlLmFzbS4kKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RvcF91bndpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdG9wX3Vud2luZCA9IGUuYXNtLmFhKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RhcnRfcmV3aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RhcnRfcmV3aW5kID0gZS5hc20uYmEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdG9wX3Jld2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0b3BfcmV3aW5kID0gZS5hc20uY2EpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9OwogICAgdmFyIE1uOwogICAgb24gPSBmdW5jdGlvbiBuKCkgewogICAgICBNbiB8fCBHbigpLCBNbiB8fCAob24gPSBuKTsKICAgIH07CiAgICBmdW5jdGlvbiBHbigpIHsKICAgICAgZnVuY3Rpb24gbigpIHsKICAgICAgICBpZiAoIU1uICYmIChNbiA9ICEwLCBlLmNhbGxlZFJ1biA9ICEwLCAha24pKSB7CiAgICAgICAgICBpZiAoeW4oaXQpLCB5bihHdCksIG0oZSksIGUub25SdW50aW1lSW5pdGlhbGl6ZWQgJiYgZS5vblJ1bnRpbWVJbml0aWFsaXplZCgpLCBlLnBvc3RSdW4pCiAgICAgICAgICAgIGZvciAodHlwZW9mIGUucG9zdFJ1biA9PSAiZnVuY3Rpb24iICYmIChlLnBvc3RSdW4gPSBbZS5wb3N0UnVuXSk7IGUucG9zdFJ1bi5sZW5ndGg7ICkgewogICAgICAgICAgICAgIHZhciB0ID0gZS5wb3N0UnVuLnNoaWZ0KCk7CiAgICAgICAgICAgICAgYXQudW5zaGlmdCh0KTsKICAgICAgICAgICAgfQogICAgICAgICAgeW4oYXQpOwogICAgICAgIH0KICAgICAgfQogICAgICBpZiAoISgwIDwgWikpIHsKICAgICAgICBpZiAoZS5wcmVSdW4pCiAgICAgICAgICBmb3IgKHR5cGVvZiBlLnByZVJ1biA9PSAiZnVuY3Rpb24iICYmIChlLnByZVJ1biA9IFtlLnByZVJ1bl0pOyBlLnByZVJ1bi5sZW5ndGg7ICkKICAgICAgICAgICAgWXQoKTsKICAgICAgICB5bihydCksIDAgPCBaIHx8IChlLnNldFN0YXR1cyA/IChlLnNldFN0YXR1cygiUnVubmluZy4uLiIpLCBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgICAgICAgICAgZS5zZXRTdGF0dXMoIiIpOwogICAgICAgICAgfSwgMSksIG4oKTsKICAgICAgICB9LCAxKSkgOiBuKCkpOwogICAgICB9CiAgICB9CiAgICBpZiAoZS5ydW4gPSBHbiwgZS5wcmVJbml0KQogICAgICBmb3IgKHR5cGVvZiBlLnByZUluaXQgPT0gImZ1bmN0aW9uIiAmJiAoZS5wcmVJbml0ID0gW2UucHJlSW5pdF0pOyAwIDwgZS5wcmVJbml0Lmxlbmd0aDsgKQogICAgICAgIGUucHJlSW5pdC5wb3AoKSgpOwogICAgcmV0dXJuIEduKCksIHUucmVhZHk7CiAgfTsKfSgpOwpjbGFzcyBwZSB7CiAgY29uc3RydWN0b3IoKSB7CiAgICBZbih0aGlzLCAic2FtV2FzbU1vZHVsZSIpOwogIH0KICBnZXRPdmVycmlkZGVuTW9kdWxlcyh1LCBlKSB7CiAgICByZXR1cm4gewogICAgICBsb2NhdGVGaWxlOiAobSkgPT4gbmV3IFVSTChlIHx8IG0sIHUpLmhyZWYKICAgIH07CiAgfQogIGFzeW5jIGhhbmRsZU1pc3NpbmdPckludmFsaWRTYW1Nb2R1bGUodSwgZSkgewogICAgdHJ5IHsKICAgICAgY29uc3QgbSA9IGF3YWl0IGZldGNoKHUpOwogICAgICBpZiAoIW0ub2spCiAgICAgICAgdGhyb3cgbmV3IHgoCiAgICAgICAgICBgVGhlIHBhdGggdG8gJHtlfSBpcyBpbmNvcnJlY3Qgb3IgdGhlIG1vZHVsZSBpcyBtaXNzaW5nLiBQbGVhc2UgY2hlY2sgcHJvdmlkZWQgcGF0aCB0byB3YXNtIGZpbGVzLiBDdXJyZW50IHBhdGggaXMgJHt1fWAKICAgICAgICApOwogICAgICBjb25zdCBnID0gYXdhaXQgbS5hcnJheUJ1ZmZlcigpOwogICAgICBpZiAoIVdlYkFzc2VtYmx5LnZhbGlkYXRlKGcpKQogICAgICAgIHRocm93IG5ldyB4KAogICAgICAgICAgYFRoZSBwcm92aWRlZCAke2V9IGlzIG5vdCBhIHZhbGlkIFdBU00gbW9kdWxlLiBQbGVhc2UgY2hlY2sgcHJvdmlkZWQgcGF0aCB0byB3YXNtIGZpbGVzLiBDdXJyZW50IHBhdGggaXMgJHt1fWAKICAgICAgICApOwogICAgfSBjYXRjaCAobSkgewogICAgICBpZiAobSBpbnN0YW5jZW9mIHgpCiAgICAgICAgdGhyb3cgY29uc29sZS5lcnJvcigKICAgICAgICAgICJZb3UgY2FuIGZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBob3cgdG8gaG9zdCB3YXNtIGZpbGVzIGhlcmU6IGh0dHBzOi8vZGV2ZWxvcGVycy5pbm5vdmF0cmljcy5jb20vZGlnaXRhbC1vbmJvYXJkaW5nL3RlY2huaWNhbC9yZW1vdGUvZG90LXdlYi1kb2N1bWVudC9sYXRlc3QvZG9jdW1lbnRhdGlvbi8jX2hvc3Rpbmdfc2FtX3dhc20iCiAgICAgICAgKSwgbTsKICAgIH0KICB9CiAgYXN5bmMgZ2V0V2FzbUZpbGVOYW1lKCkgewogICAgcmV0dXJuIGF3YWl0IGxlKCkgPyBXdC5zaW1kIDogV3Quc2FtOwogIH0KICBhc3luYyBpbml0U2FtTW9kdWxlKHUsIGUgPSAiL3dhc20iKSB7CiAgICBpZiAodGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICByZXR1cm47CiAgICBjb25zdCBtID0gYXdhaXQgdGhpcy5nZXRXYXNtRmlsZU5hbWUoKSwgZyA9IGAke2V9LyR7bX1gOwogICAgdHJ5IHsKICAgICAgdGhpcy5zYW1XYXNtTW9kdWxlID0gYXdhaXQgaGUodGhpcy5nZXRPdmVycmlkZGVuTW9kdWxlcyh1LCBnKSk7CiAgICB9IGNhdGNoIHsKICAgICAgdGhyb3cgYXdhaXQgdGhpcy5oYW5kbGVNaXNzaW5nT3JJbnZhbGlkU2FtTW9kdWxlKGcsIG0pLCBuZXcgeCgiQ291bGQgbm90IGluaXQgZGV0ZWN0b3IuIik7CiAgICB9CiAgfQogIGFzeW5jIGdldFNhbVZlcnNpb24oKSB7CiAgICB2YXIgZTsKICAgIGNvbnN0IHUgPSBhd2FpdCAoKGUgPSB0aGlzLnNhbVdhc21Nb2R1bGUpID09IG51bGwgPyB2b2lkIDAgOiBlLmdldEluZm9TdHJpbmcoKSk7CiAgICByZXR1cm4gdSA9PSBudWxsID8gdm9pZCAwIDogdS50cmltKCk7CiAgfQogIC8qCiAgICogSW4gVFMgNS4yLjAgd2FzIGFkZGVkIHNwZWNpYWwga2V5d29yZCAidXNpbmciIHdoaWNoIGNvdWxkIGJlIHBlcmZlY3QgZm9yIHRoaXMgY2FzZS4KICAgKiBVbmZvcnR1bmF0ZWx5LCB2aXRlIHByZWFjdCBwbHVnaW4gZG9lcyBub3Qgc3VwcG9ydCB0aGlzIHZlcnNpb24gb2YgVFMgeWV0LgogICAqIENoZWNrIHBvc3NpYmlsaXR5IG9mIHVzaW5nICJ1c2luZyIga2V5d29yZCB3aGVuIHZpdGUgcHJlYWN0IHBsdWdpbiB1cGRhdGVzCiAgICovCiAgYWxsb2NhdGVNZW1vcnkodSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyB4KCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICByZXR1cm4gdGhpcy5zYW1XYXNtTW9kdWxlLl9tYWxsb2ModSk7CiAgfQogIHJlbGVhc2VNZW1vcnkodSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyB4KCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICB0aGlzLnNhbVdhc21Nb2R1bGUuX2ZyZWUodSk7CiAgfQogIHdyaXRlRGF0YVRvTWVtb3J5KHUsIGUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgeCgiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgdGhpcy5zYW1XYXNtTW9kdWxlLkhFQVBVOC5zZXQodSwgZSk7CiAgfQp9Ci8qKgogKiBAbGljZW5zZQogKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDCiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wCiAqLwpjb25zdCBSdCA9IFN5bWJvbCgiQ29tbGluay5wcm94eSIpLCB5ZSA9IFN5bWJvbCgiQ29tbGluay5lbmRwb2ludCIpLCBtZSA9IFN5bWJvbCgiQ29tbGluay5yZWxlYXNlUHJveHkiKSwgWm4gPSBTeW1ib2woIkNvbWxpbmsuZmluYWxpemVyIiksIFNuID0gU3ltYm9sKCJDb21saW5rLnRocm93biIpLCBGdCA9IChvKSA9PiB0eXBlb2YgbyA9PSAib2JqZWN0IiAmJiBvICE9PSBudWxsIHx8IHR5cGVvZiBvID09ICJmdW5jdGlvbiIsIHZlID0gewogIGNhbkhhbmRsZTogKG8pID0+IEZ0KG8pICYmIG9bUnRdLAogIHNlcmlhbGl6ZShvKSB7CiAgICBjb25zdCB7IHBvcnQxOiB1LCBwb3J0MjogZSB9ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7CiAgICByZXR1cm4gSm4obywgdSksIFtlLCBbZV1dOwogIH0sCiAgZGVzZXJpYWxpemUobykgewogICAgcmV0dXJuIG8uc3RhcnQoKSwgX2Uobyk7CiAgfQp9LCBnZSA9IHsKICBjYW5IYW5kbGU6IChvKSA9PiBGdChvKSAmJiBTbiBpbiBvLAogIHNlcmlhbGl6ZSh7IHZhbHVlOiBvIH0pIHsKICAgIGxldCB1OwogICAgcmV0dXJuIG8gaW5zdGFuY2VvZiBFcnJvciA/IHUgPSB7CiAgICAgIGlzRXJyb3I6ICEwLAogICAgICB2YWx1ZTogewogICAgICAgIG1lc3NhZ2U6IG8ubWVzc2FnZSwKICAgICAgICBuYW1lOiBvLm5hbWUsCiAgICAgICAgc3RhY2s6IG8uc3RhY2sKICAgICAgfQogICAgfSA6IHUgPSB7IGlzRXJyb3I6ICExLCB2YWx1ZTogbyB9LCBbdSwgW11dOwogIH0sCiAgZGVzZXJpYWxpemUobykgewogICAgdGhyb3cgby5pc0Vycm9yID8gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3Ioby52YWx1ZS5tZXNzYWdlKSwgby52YWx1ZSkgOiBvLnZhbHVlOwogIH0KfSwgeHQgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcChbCiAgWyJwcm94eSIsIHZlXSwKICBbInRocm93IiwgZ2VdCl0pOwpmdW5jdGlvbiB3ZShvLCB1KSB7CiAgZm9yIChjb25zdCBlIG9mIG8pCiAgICBpZiAodSA9PT0gZSB8fCBlID09PSAiKiIgfHwgZSBpbnN0YW5jZW9mIFJlZ0V4cCAmJiBlLnRlc3QodSkpCiAgICAgIHJldHVybiAhMDsKICByZXR1cm4gITE7Cn0KZnVuY3Rpb24gSm4obywgdSA9IGdsb2JhbFRoaXMsIGUgPSBbIioiXSkgewogIHUuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGZ1bmN0aW9uIG0oZykgewogICAgaWYgKCFnIHx8ICFnLmRhdGEpCiAgICAgIHJldHVybjsKICAgIGlmICghd2UoZSwgZy5vcmlnaW4pKSB7CiAgICAgIGNvbnNvbGUud2FybihgSW52YWxpZCBvcmlnaW4gJyR7Zy5vcmlnaW59JyBmb3IgY29tbGluayBwcm94eWApOwogICAgICByZXR1cm47CiAgICB9CiAgICBjb25zdCB7IGlkOiBfLCB0eXBlOiB3LCBwYXRoOiBUIH0gPSBPYmplY3QuYXNzaWduKHsgcGF0aDogW10gfSwgZy5kYXRhKSwgTSA9IChnLmRhdGEuYXJndW1lbnRMaXN0IHx8IFtdKS5tYXAoWCk7CiAgICBsZXQgRTsKICAgIHRyeSB7CiAgICAgIGNvbnN0IEMgPSBULnNsaWNlKDAsIC0xKS5yZWR1Y2UoKFMsIGopID0+IFNbal0sIG8pLCBSID0gVC5yZWR1Y2UoKFMsIGopID0+IFNbal0sIG8pOwogICAgICBzd2l0Y2ggKHcpIHsKICAgICAgICBjYXNlICJHRVQiOgogICAgICAgICAgRSA9IFI7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJTRVQiOgogICAgICAgICAgQ1tULnNsaWNlKC0xKVswXV0gPSBYKGcuZGF0YS52YWx1ZSksIEUgPSAhMDsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIkFQUExZIjoKICAgICAgICAgIEUgPSBSLmFwcGx5KEMsIE0pOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiQ09OU1RSVUNUIjoKICAgICAgICAgIHsKICAgICAgICAgICAgY29uc3QgUyA9IG5ldyBSKC4uLk0pOwogICAgICAgICAgICBFID0gUGUoUyk7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJFTkRQT0lOVCI6CiAgICAgICAgICB7CiAgICAgICAgICAgIGNvbnN0IHsgcG9ydDE6IFMsIHBvcnQyOiBqIH0gPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTsKICAgICAgICAgICAgSm4obywgaiksIEUgPSBNZShTLCBbU10pOwogICAgICAgICAgfQogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiUkVMRUFTRSI6CiAgICAgICAgICBFID0gdm9pZCAwOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHJldHVybjsKICAgICAgfQogICAgfSBjYXRjaCAoQykgewogICAgICBFID0geyB2YWx1ZTogQywgW1NuXTogMCB9OwogICAgfQogICAgUHJvbWlzZS5yZXNvbHZlKEUpLmNhdGNoKChDKSA9PiAoeyB2YWx1ZTogQywgW1NuXTogMCB9KSkudGhlbigoQykgPT4gewogICAgICBjb25zdCBbUiwgU10gPSBXbihDKTsKICAgICAgdS5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIFIpLCB7IGlkOiBfIH0pLCBTKSwgdyA9PT0gIlJFTEVBU0UiICYmICh1LnJlbW92ZUV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBtKSwgSXQodSksIFpuIGluIG8gJiYgdHlwZW9mIG9bWm5dID09ICJmdW5jdGlvbiIgJiYgb1tabl0oKSk7CiAgICB9KS5jYXRjaCgoQykgPT4gewogICAgICBjb25zdCBbUiwgU10gPSBXbih7CiAgICAgICAgdmFsdWU6IG5ldyBUeXBlRXJyb3IoIlVuc2VyaWFsaXphYmxlIHJldHVybiB2YWx1ZSIpLAogICAgICAgIFtTbl06IDAKICAgICAgfSk7CiAgICAgIHUucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBSKSwgeyBpZDogXyB9KSwgUyk7CiAgICB9KTsKICB9KSwgdS5zdGFydCAmJiB1LnN0YXJ0KCk7Cn0KZnVuY3Rpb24gQWUobykgewogIHJldHVybiBvLmNvbnN0cnVjdG9yLm5hbWUgPT09ICJNZXNzYWdlUG9ydCI7Cn0KZnVuY3Rpb24gSXQobykgewogIEFlKG8pICYmIG8uY2xvc2UoKTsKfQpmdW5jdGlvbiBfZShvLCB1KSB7CiAgcmV0dXJuICRuKG8sIFtdLCB1KTsKfQpmdW5jdGlvbiBQbihvKSB7CiAgaWYgKG8pCiAgICB0aHJvdyBuZXcgRXJyb3IoIlByb3h5IGhhcyBiZWVuIHJlbGVhc2VkIGFuZCBpcyBub3QgdXNlYWJsZSIpOwp9CmZ1bmN0aW9uIGp0KG8pIHsKICByZXR1cm4gYW4obywgewogICAgdHlwZTogIlJFTEVBU0UiCiAgfSkudGhlbigoKSA9PiB7CiAgICBJdChvKTsKICB9KTsKfQpjb25zdCBibiA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpLCBPbiA9ICJGaW5hbGl6YXRpb25SZWdpc3RyeSIgaW4gZ2xvYmFsVGhpcyAmJiBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoKG8pID0+IHsKICBjb25zdCB1ID0gKGJuLmdldChvKSB8fCAwKSAtIDE7CiAgYm4uc2V0KG8sIHUpLCB1ID09PSAwICYmIGp0KG8pOwp9KTsKZnVuY3Rpb24gQ2UobywgdSkgewogIGNvbnN0IGUgPSAoYm4uZ2V0KHUpIHx8IDApICsgMTsKICBibi5zZXQodSwgZSksIE9uICYmIE9uLnJlZ2lzdGVyKG8sIHUsIG8pOwp9CmZ1bmN0aW9uIEVlKG8pIHsKICBPbiAmJiBPbi51bnJlZ2lzdGVyKG8pOwp9CmZ1bmN0aW9uICRuKG8sIHUgPSBbXSwgZSA9IGZ1bmN0aW9uKCkgewp9KSB7CiAgbGV0IG0gPSAhMTsKICBjb25zdCBnID0gbmV3IFByb3h5KGUsIHsKICAgIGdldChfLCB3KSB7CiAgICAgIGlmIChQbihtKSwgdyA9PT0gbWUpCiAgICAgICAgcmV0dXJuICgpID0+IHsKICAgICAgICAgIEVlKGcpLCBqdChvKSwgbSA9ICEwOwogICAgICAgIH07CiAgICAgIGlmICh3ID09PSAidGhlbiIpIHsKICAgICAgICBpZiAodS5sZW5ndGggPT09IDApCiAgICAgICAgICByZXR1cm4geyB0aGVuOiAoKSA9PiBnIH07CiAgICAgICAgY29uc3QgVCA9IGFuKG8sIHsKICAgICAgICAgIHR5cGU6ICJHRVQiLAogICAgICAgICAgcGF0aDogdS5tYXAoKE0pID0+IE0udG9TdHJpbmcoKSkKICAgICAgICB9KS50aGVuKFgpOwogICAgICAgIHJldHVybiBULnRoZW4uYmluZChUKTsKICAgICAgfQogICAgICByZXR1cm4gJG4obywgWy4uLnUsIHddKTsKICAgIH0sCiAgICBzZXQoXywgdywgVCkgewogICAgICBQbihtKTsKICAgICAgY29uc3QgW00sIEVdID0gV24oVCk7CiAgICAgIHJldHVybiBhbihvLCB7CiAgICAgICAgdHlwZTogIlNFVCIsCiAgICAgICAgcGF0aDogWy4uLnUsIHddLm1hcCgoQykgPT4gQy50b1N0cmluZygpKSwKICAgICAgICB2YWx1ZTogTQogICAgICB9LCBFKS50aGVuKFgpOwogICAgfSwKICAgIGFwcGx5KF8sIHcsIFQpIHsKICAgICAgUG4obSk7CiAgICAgIGNvbnN0IE0gPSB1W3UubGVuZ3RoIC0gMV07CiAgICAgIGlmIChNID09PSB5ZSkKICAgICAgICByZXR1cm4gYW4obywgewogICAgICAgICAgdHlwZTogIkVORFBPSU5UIgogICAgICAgIH0pLnRoZW4oWCk7CiAgICAgIGlmIChNID09PSAiYmluZCIpCiAgICAgICAgcmV0dXJuICRuKG8sIHUuc2xpY2UoMCwgLTEpKTsKICAgICAgY29uc3QgW0UsIENdID0ga3QoVCk7CiAgICAgIHJldHVybiBhbihvLCB7CiAgICAgICAgdHlwZTogIkFQUExZIiwKICAgICAgICBwYXRoOiB1Lm1hcCgoUikgPT4gUi50b1N0cmluZygpKSwKICAgICAgICBhcmd1bWVudExpc3Q6IEUKICAgICAgfSwgQykudGhlbihYKTsKICAgIH0sCiAgICBjb25zdHJ1Y3QoXywgdykgewogICAgICBQbihtKTsKICAgICAgY29uc3QgW1QsIE1dID0ga3Qodyk7CiAgICAgIHJldHVybiBhbihvLCB7CiAgICAgICAgdHlwZTogIkNPTlNUUlVDVCIsCiAgICAgICAgcGF0aDogdS5tYXAoKEUpID0+IEUudG9TdHJpbmcoKSksCiAgICAgICAgYXJndW1lbnRMaXN0OiBUCiAgICAgIH0sIE0pLnRoZW4oWCk7CiAgICB9CiAgfSk7CiAgcmV0dXJuIENlKGcsIG8pLCBnOwp9CmZ1bmN0aW9uIFRlKG8pIHsKICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgbyk7Cn0KZnVuY3Rpb24ga3QobykgewogIGNvbnN0IHUgPSBvLm1hcChXbik7CiAgcmV0dXJuIFt1Lm1hcCgoZSkgPT4gZVswXSksIFRlKHUubWFwKChlKSA9PiBlWzFdKSldOwp9CmNvbnN0IEx0ID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7CmZ1bmN0aW9uIE1lKG8sIHUpIHsKICByZXR1cm4gTHQuc2V0KG8sIHUpLCBvOwp9CmZ1bmN0aW9uIFBlKG8pIHsKICByZXR1cm4gT2JqZWN0LmFzc2lnbihvLCB7IFtSdF06ICEwIH0pOwp9CmZ1bmN0aW9uIFduKG8pIHsKICBmb3IgKGNvbnN0IFt1LCBlXSBvZiB4dCkKICAgIGlmIChlLmNhbkhhbmRsZShvKSkgewogICAgICBjb25zdCBbbSwgZ10gPSBlLnNlcmlhbGl6ZShvKTsKICAgICAgcmV0dXJuIFsKICAgICAgICB7CiAgICAgICAgICB0eXBlOiAiSEFORExFUiIsCiAgICAgICAgICBuYW1lOiB1LAogICAgICAgICAgdmFsdWU6IG0KICAgICAgICB9LAogICAgICAgIGcKICAgICAgXTsKICAgIH0KICByZXR1cm4gWwogICAgewogICAgICB0eXBlOiAiUkFXIiwKICAgICAgdmFsdWU6IG8KICAgIH0sCiAgICBMdC5nZXQobykgfHwgW10KICBdOwp9CmZ1bmN0aW9uIFgobykgewogIHN3aXRjaCAoby50eXBlKSB7CiAgICBjYXNlICJIQU5ETEVSIjoKICAgICAgcmV0dXJuIHh0LmdldChvLm5hbWUpLmRlc2VyaWFsaXplKG8udmFsdWUpOwogICAgY2FzZSAiUkFXIjoKICAgICAgcmV0dXJuIG8udmFsdWU7CiAgfQp9CmZ1bmN0aW9uIGFuKG8sIHUsIGUpIHsKICByZXR1cm4gbmV3IFByb21pc2UoKG0pID0+IHsKICAgIGNvbnN0IGcgPSBTZSgpOwogICAgby5hZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgZnVuY3Rpb24gXyh3KSB7CiAgICAgICF3LmRhdGEgfHwgIXcuZGF0YS5pZCB8fCB3LmRhdGEuaWQgIT09IGcgfHwgKG8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIF8pLCBtKHcuZGF0YSkpOwogICAgfSksIG8uc3RhcnQgJiYgby5zdGFydCgpLCBvLnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oeyBpZDogZyB9LCB1KSwgZSk7CiAgfSk7Cn0KZnVuY3Rpb24gU2UoKSB7CiAgcmV0dXJuIG5ldyBBcnJheSg0KS5maWxsKDApLm1hcCgoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikudG9TdHJpbmcoMTYpKS5qb2luKCItIik7Cn0KZnVuY3Rpb24gYmUoewogIGJvdHRvbVJpZ2h0WDogbywKICBib3R0b21SaWdodFk6IHUsCiAgdG9wTGVmdFg6IGUsCiAgdG9wTGVmdFk6IG0KfSwgZykgewogIGNvbnN0IF8gPSBNYXRoLmFicyhvIC0gZSksIHcgPSBNYXRoLmFicyh1IC0gbSksIFQgPSBNYXRoLm1heChfLCB3KSAqIDAuMzM3NSwgTSA9IGRlKGcud2lkdGgsIGcuaGVpZ2h0KTsKICByZXR1cm4gZmUoVCAvIE0pOwp9CmNsYXNzIE9lIGV4dGVuZHMgcGUgewogIHBhcnNlUmF3RGF0YSh1LCBlKSB7CiAgICBjb25zdCB7IGJyaWdodG5lc3M6IG0sIHNoYXJwbmVzczogZyB9ID0gdS5wYXJhbXMsIHsgYm90dG9tUmlnaHRYOiBfLCBib3R0b21SaWdodFk6IHcsIHRvcExlZnRYOiBULCB0b3BMZWZ0WTogTSB9ID0gdSwgRSA9IGJlKHsgYm90dG9tUmlnaHRYOiBfLCBib3R0b21SaWdodFk6IHcsIHRvcExlZnRYOiBULCB0b3BMZWZ0WTogTSB9LCBlKTsKICAgIHJldHVybiB7CiAgICAgIGNvbmZpZGVuY2U6IHUucHJvYmFiaWxpdHkgLyAxZTMsCiAgICAgIHRvcExlZnQ6IHsKICAgICAgICB4OiBULAogICAgICAgIHk6IE0KICAgICAgfSwKICAgICAgYm90dG9tUmlnaHQ6IHsKICAgICAgICB4OiBfLAogICAgICAgIHk6IHcKICAgICAgfSwKICAgICAgZmFjZUNlbnRlcjogewogICAgICAgIHg6IChUICsgXykgLyAyLAogICAgICAgIHk6IChNICsgdykgLyAyCiAgICAgIH0sCiAgICAgIGZhY2VTaXplOiBFLAogICAgICBicmlnaHRuZXNzOiBtIC8gMWUzLAogICAgICBzaGFycG5lc3M6IGcgLyAxZTMKICAgIH07CiAgfQogIGFzeW5jIGRldGVjdCh1LCBlLCBtKSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IHgoIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIGNvbnN0IGcgPSB0aGlzLmFsbG9jYXRlTWVtb3J5KHUubGVuZ3RoICogdS5CWVRFU19QRVJfRUxFTUVOVCksIF8gPSB0aGlzLmFsbG9jYXRlTWVtb3J5KHUubGVuZ3RoICogdS5CWVRFU19QRVJfRUxFTUVOVCk7CiAgICB0aGlzLndyaXRlRGF0YVRvTWVtb3J5KHUsIGcpLCB0aGlzLnNhbVdhc21Nb2R1bGUuY29udmVydFRvU2FtQ29sb3JJbWFnZSgKICAgICAgZS53aWR0aCwKICAgICAgZS5oZWlnaHQsCiAgICAgIGcsCiAgICAgIGNlLlJHQkEsCiAgICAgIF8KICAgICk7CiAgICBjb25zdCB3ID0gdGhpcy5zYW1XYXNtTW9kdWxlLmRldGVjdEZhY2VXaXRoSW1hZ2VQYXJhbWV0ZXJzKAogICAgICBlLndpZHRoLAogICAgICBlLmhlaWdodCwKICAgICAgXywKICAgICAgMCwKICAgICAgLy8gcGFyYW1XaWR0aCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICAgMAogICAgICAvLyBwYXJhbUhlaWdodCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICk7CiAgICByZXR1cm4gdGhpcy5yZWxlYXNlTWVtb3J5KGcpLCB0aGlzLnJlbGVhc2VNZW1vcnkoXyksIHRoaXMucGFyc2VSYXdEYXRhKHcsIG0pOwogIH0KfQpKbihPZSk7Cg==", ka = typeof window < "u" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);" + atob(ls)], { type: "text/javascript;charset=utf-8" });
function el(t) {
  let o;
  try {
    if (o = ka && (window.URL || window.webkitURL).createObjectURL(ka), !o)
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
      "data:application/javascript;base64," + ls,
      {
        type: "module",
        name: t == null ? void 0 : t.name
      }
    );
  }
}
const wi = class wi extends NI {
  constructor() {
    super(...arguments);
    Q(this, "detector");
    Q(this, "className", "FaceController");
    Q(this, "fallbackInstruction", Ne.FACE_NOT_PRESENT);
    Q(this, "pitchAngleAccelerationThreshold", null);
    Q(this, "validateDetectedObject", (e, n) => {
      const { brightnessHighThreshold: i, brightnessLowThreshold: r, faceConfidence: a, maxFaceSizeRatio: g, minFaceSizeRatio: s, outOfBoundsThreshold: I, sharpnessThreshold: C } = this.getThresholds(), u = e.confidence > a, p = e.faceSize > s, f = e.faceSize < g, v = e.sharpness > C, w = e.brightness > r, E = e.brightness < i, k = _I(I, e, n), O = qI(this.pitchAngleAccelerationThreshold, this.acceleration), R = {};
      return R.isPresent = u, R.isNotSmall = p, R.isNotLarge = f, R.isSharp = v, R.isNotDim = w, R.isNotBright = E, R.isNotOutOfBounds = k, R.isNotPitched = O, R;
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
        !r && n.push(tx[i]);
      }), n;
    });
  }
  static async init() {
    const e = new el(), n = cs(e), i = new wi(), r = await new n();
    this._instance = i, this._instance.detector = r;
  }
  static async getInstance() {
    return !this._instance && await this.init(), this._instance;
  }
  setThresholds(e) {
    super.setThresholds(e);
    const { devicePitchAngleThreshold: n } = e;
    this.pitchAngleAccelerationThreshold = Lx * Math.sin(n * (Math.PI / (-71 * -117 + -1 * 3602 + 25 * -181)));
  }
  restart() {
    super.restart(), ya(at.INSTRUCTION_CHANGED, void (-1 * 5482 + -3089 * 2 + -212 * -55), ux);
  }
  async processImage(e) {
    var w;
    const n = {};
    n.width = e.width, n.height = e.height;
    const i = n, r = gr(i), a = sI(e, r), g = cI(a), s = {};
    s.width = a.width, s.height = a.height;
    const I = s;
    let C = await this.detector.detect(g, I, i);
    C = GI(i, C);
    const u = this.validateDetectedObject(C, i), p = this.isDetectionValid(u), f = this.getInstructionCode(u, p);
    if (u.isPresent && this.collectImagesForDuplicateDetection(g), this.isInCandidateSelection) {
      if (this.bestImage && p && this.isNewImageBetter(this.bestImage.detection, C)) {
        const E = { image: e, detection: Mt(C) };
        this.bestImage = E, this.candidateSelectionImages.push(E);
      }
    } else if ((w = this.lastImage) != null && w.isValid && p) {
      const E = { image: e, detection: Mt(C) }, k = {};
      k.image = this.lastImage.image, k.detection = this.lastImage.detection;
      const O = k;
      this.isNewImageBetter(O.detection, E.detection) ? this.bestImage = E : this.bestImage = O, this.candidateSelectionImages.push(O, E), this.isInCandidateSelection = !0;
    } else
      p ? this.lastImage = { instructionCode: f, isValid: !0, image: e, detection: Mt(C) } : this.lastImage = { instructionCode: f, isValid: !1, image: e, detection: Mt(C) };
    const v = { detectedFace: Mt(C), instructionCode: f, invalidValidators: this.getInstructionCodesForValidators(u), isInCandidateSelection: this.isInCandidateSelection };
    return this.detectionRecord.push(v.detectedFace), ya(at.INSTRUCTION_CHANGED, f), px(at.DETECTED_FACE_CHANGED, v.detectedFace, this.getThresholds().faceConfidence), fx(at.FACE_DETECTION, v.detectedFace, e), v;
  }
};
Q(wi, "_instance");
let No = wi;
const tl = (t, o) => {
  const { handleError: e } = Vi(), [n, i] = Le(), { acceleration: r } = yI();
  n && n.setAcceleration(r), be(() => {
    (async () => {
      const s = await No.getInstance();
      try {
        const I = {};
        I.wasmDirectoryPath = o, I.thresholds = t, await s.init(I);
      } catch (I) {
        if (I instanceof Error) {
          e(te.fromError(I));
          return;
        }
      }
      i(s);
    })();
  }, [e, t, o]);
  const a = {};
  return a.controller = n, a;
};
var bt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, us = {}, Ka = {}, nl = il;
function il(t, o) {
  for (var e = new Array(arguments.length - 1), n = 0, i = 2, r = !0; i < arguments.length; )
    e[n++] = arguments[i++];
  return new Promise(function(a, g) {
    e[n] = function(s) {
      if (r)
        if (r = !1, s)
          g(s);
        else {
          for (var I = new Array(arguments.length - 1), C = 0; C < I.length; )
            I[C++] = arguments[C];
          a.apply(null, I);
        }
    };
    try {
      t.apply(o || null, e);
    } catch (s) {
      r && (r = !1, g(s));
    }
  });
}
var Cs = {};
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
    for (var I = null, C = [], u = 0, p = 0, f; g < s; ) {
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
      u > 8191 && ((I || (I = [])).push(String.fromCharCode.apply(String, C)), u = 0);
    }
    return p && (C[u++] = e[f], C[u++] = 61, p === 1 && (C[u++] = 61)), I ? (u && I.push(String.fromCharCode.apply(String, C.slice(0, u))), I.join("")) : String.fromCharCode.apply(String, C.slice(0, u));
  };
  var r = "invalid encoding";
  o.decode = function(a, g, s) {
    for (var I = s, C = 0, u, p = 0; p < a.length; ) {
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
    return s - I;
  }, o.test = function(a) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(a);
  };
})(Cs);
var ol = Ei;
function Ei() {
  this._listeners = {};
}
Ei.prototype.on = function(t, o, e) {
  return (this._listeners[t] || (this._listeners[t] = [])).push({
    fn: o,
    ctx: e || this
  }), this;
};
Ei.prototype.off = function(t, o) {
  if (t === void 0)
    this._listeners = {};
  else if (o === void 0)
    this._listeners[t] = [];
  else
    for (var e = this._listeners[t], n = 0; n < e.length; )
      e[n].fn === o ? e.splice(n, 1) : ++n;
  return this;
};
Ei.prototype.emit = function(t) {
  var o = this._listeners[t];
  if (o) {
    for (var e = [], n = 1; n < arguments.length; )
      e.push(arguments[n++]);
    for (n = 0; n < o.length; )
      o[n].fn.apply(o[n++].ctx, e);
  }
  return this;
};
var rl = Ha(Ha);
function Ha(t) {
  return typeof Float32Array < "u" ? function() {
    var o = new Float32Array([-0]), e = new Uint8Array(o.buffer), n = e[3] === 128;
    function i(s, I, C) {
      o[0] = s, I[C] = e[0], I[C + 1] = e[1], I[C + 2] = e[2], I[C + 3] = e[3];
    }
    function r(s, I, C) {
      o[0] = s, I[C] = e[3], I[C + 1] = e[2], I[C + 2] = e[1], I[C + 3] = e[0];
    }
    t.writeFloatLE = n ? i : r, t.writeFloatBE = n ? r : i;
    function a(s, I) {
      return e[0] = s[I], e[1] = s[I + 1], e[2] = s[I + 2], e[3] = s[I + 3], o[0];
    }
    function g(s, I) {
      return e[3] = s[I], e[2] = s[I + 1], e[1] = s[I + 2], e[0] = s[I + 3], o[0];
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
        var s = Math.floor(Math.log(i) / Math.LN2), I = Math.round(i * Math.pow(2, -s) * 8388608) & 8388607;
        n((g << 31 | s + 127 << 23 | I) >>> 0, r, a);
      }
    }
    t.writeFloatLE = o.bind(null, Wa), t.writeFloatBE = o.bind(null, Oa);
    function e(n, i, r) {
      var a = n(i, r), g = (a >> 31) * 2 + 1, s = a >>> 23 & 255, I = a & 8388607;
      return s === 255 ? I ? NaN : g * (1 / 0) : s === 0 ? g * 1401298464324817e-60 * I : g * Math.pow(2, s - 150) * (I + 8388608);
    }
    t.readFloatLE = e.bind(null, Ra), t.readFloatBE = e.bind(null, Va);
  }(), typeof Float64Array < "u" ? function() {
    var o = new Float64Array([-0]), e = new Uint8Array(o.buffer), n = e[7] === 128;
    function i(s, I, C) {
      o[0] = s, I[C] = e[0], I[C + 1] = e[1], I[C + 2] = e[2], I[C + 3] = e[3], I[C + 4] = e[4], I[C + 5] = e[5], I[C + 6] = e[6], I[C + 7] = e[7];
    }
    function r(s, I, C) {
      o[0] = s, I[C] = e[7], I[C + 1] = e[6], I[C + 2] = e[5], I[C + 3] = e[4], I[C + 4] = e[3], I[C + 5] = e[2], I[C + 6] = e[1], I[C + 7] = e[0];
    }
    t.writeDoubleLE = n ? i : r, t.writeDoubleBE = n ? r : i;
    function a(s, I) {
      return e[0] = s[I], e[1] = s[I + 1], e[2] = s[I + 2], e[3] = s[I + 3], e[4] = s[I + 4], e[5] = s[I + 5], e[6] = s[I + 6], e[7] = s[I + 7], o[0];
    }
    function g(s, I) {
      return e[7] = s[I], e[6] = s[I + 1], e[5] = s[I + 2], e[4] = s[I + 3], e[3] = s[I + 4], e[2] = s[I + 5], e[1] = s[I + 6], e[0] = s[I + 7], o[0];
    }
    t.readDoubleLE = n ? a : g, t.readDoubleBE = n ? g : a;
  }() : function() {
    function o(n, i, r, a, g, s) {
      var I = a < 0 ? 1 : 0;
      if (I && (a = -a), a === 0)
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
        n(0, g, s + i), n((I << 31 | 2146435072) >>> 0, g, s + r);
      else {
        var C;
        if (a < 22250738585072014e-324)
          C = a / 5e-324, n(C >>> 0, g, s + i), n((I << 31 | C / 4294967296) >>> 0, g, s + r);
        else {
          var u = Math.floor(Math.log(a) / Math.LN2);
          u === 1024 && (u = 1023), C = a * Math.pow(2, -u), n(C * 4503599627370496 >>> 0, g, s + i), n((I << 31 | u + 1023 << 20 | C * 1048576 & 1048575) >>> 0, g, s + r);
        }
      }
    }
    t.writeDoubleLE = o.bind(null, Wa, 0, 4), t.writeDoubleBE = o.bind(null, Oa, 4, 0);
    function e(n, i, r, a, g) {
      var s = n(a, g + i), I = n(a, g + r), C = (I >> 31) * 2 + 1, u = I >>> 20 & 2047, p = 4294967296 * (I & 1048575) + s;
      return u === 2047 ? p ? NaN : C * (1 / 0) : u === 0 ? C * 5e-324 * p : C * Math.pow(2, u - 1075) * (p + 4503599627370496);
    }
    t.readDoubleLE = e.bind(null, Ra, 0, 4), t.readDoubleBE = e.bind(null, Va, 4, 0);
  }(), t;
}
function Wa(t, o, e) {
  o[e] = t & 255, o[e + 1] = t >>> 8 & 255, o[e + 2] = t >>> 16 & 255, o[e + 3] = t >>> 24;
}
function Oa(t, o, e) {
  o[e] = t >>> 24, o[e + 1] = t >>> 16 & 255, o[e + 2] = t >>> 8 & 255, o[e + 3] = t & 255;
}
function Ra(t, o) {
  return (t[o] | t[o + 1] << 8 | t[o + 2] << 16 | t[o + 3] << 24) >>> 0;
}
function Va(t, o) {
  return (t[o] << 24 | t[o + 1] << 16 | t[o + 2] << 8 | t[o + 3]) >>> 0;
}
function Pa(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var al = gl;
function gl(t) {
  try {
    if (typeof Pa != "function")
      return null;
    var o = Pa(t);
    return o && (o.length || Object.keys(o).length) ? o : null;
  } catch {
    return null;
  }
}
var ds = {};
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
    for (var a = null, g = [], s = 0, I; n < i; )
      I = e[n++], I < 128 ? g[s++] = I : I > 191 && I < 224 ? g[s++] = (I & 31) << 6 | e[n++] & 63 : I > 239 && I < 365 ? (I = ((I & 7) << 18 | (e[n++] & 63) << 12 | (e[n++] & 63) << 6 | e[n++] & 63) - 65536, g[s++] = 55296 + (I >> 10), g[s++] = 56320 + (I & 1023)) : g[s++] = (I & 15) << 12 | (e[n++] & 63) << 6 | e[n++] & 63, s > 8191 && ((a || (a = [])).push(String.fromCharCode.apply(String, g)), s = 0);
    return a ? (s && a.push(String.fromCharCode.apply(String, g.slice(0, s))), a.join("")) : String.fromCharCode.apply(String, g.slice(0, s));
  }, o.write = function(e, n, i) {
    for (var r = i, a, g, s = 0; s < e.length; ++s)
      a = e.charCodeAt(s), a < 128 ? n[i++] = a : a < 2048 ? (n[i++] = a >> 6 | 192, n[i++] = a & 63 | 128) : (a & 64512) === 55296 && ((g = e.charCodeAt(s + 1)) & 64512) === 56320 ? (a = 65536 + ((a & 1023) << 10) + (g & 1023), ++s, n[i++] = a >> 18 | 240, n[i++] = a >> 12 & 63 | 128, n[i++] = a >> 6 & 63 | 128, n[i++] = a & 63 | 128) : (n[i++] = a >> 12 | 224, n[i++] = a >> 6 & 63 | 128, n[i++] = a & 63 | 128);
    return i - r;
  };
})(ds);
var sl = cl;
function cl(t, o, e) {
  var n = e || 8192, i = n >>> 1, r = null, a = n;
  return function(g) {
    if (g < 1 || g > i)
      return t(g);
    a + g > n && (r = t(n), a = 0);
    var s = o.call(r, a, a += g);
    return a & 7 && (a = (a | 7) + 1), s;
  };
}
var Io, Ea;
function xl() {
  if (Ea)
    return Io;
  Ea = 1, Io = o;
  var t = Ot();
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
  }, Io;
}
var Ya;
function Ot() {
  return Ya || (Ya = 1, function(t) {
    var o = t;
    o.asPromise = nl, o.base64 = Cs, o.EventEmitter = ol, o.float = rl, o.inquire = al, o.utf8 = ds, o.pool = sl, o.LongBits = xl(), o.isNode = !!(typeof bt < "u" && bt && bt.process && bt.process.versions && bt.process.versions.node), o.global = o.isNode && bt || typeof window < "u" && window || typeof self < "u" && self || bt, o.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  }(Ka)), Ka;
}
var As = T, Re = Ot(), Lo, Yi = Re.LongBits, Na = Re.base64, La = Re.utf8;
function On(t, o, e) {
  this.fn = t, this.len = o, this.next = void 0, this.val = e;
}
function sr() {
}
function Il(t) {
  this.head = t.head, this.tail = t.tail, this.len = t.len, this.next = t.states;
}
function T() {
  this.len = 0, this.head = new On(sr, 0, 0), this.tail = this.head, this.states = null;
}
var ps = function() {
  return Re.Buffer ? function() {
    return (T.create = function() {
      return new Lo();
    })();
  } : function() {
    return new T();
  };
};
T.create = ps();
T.alloc = function(t) {
  return new Re.Array(t);
};
Re.Array !== Array && (T.alloc = Re.pool(T.alloc, Re.Array.prototype.subarray));
T.prototype._push = function(t, o, e) {
  return this.tail = this.tail.next = new On(t, o, e), this.len += o, this;
};
function cr(t, o, e) {
  o[e] = t & 255;
}
function ll(t, o, e) {
  for (; t > 127; )
    o[e++] = t & 127 | 128, t >>>= 7;
  o[e] = t;
}
function xr(t, o) {
  this.len = t, this.next = void 0, this.val = o;
}
xr.prototype = Object.create(On.prototype);
xr.prototype.fn = ll;
T.prototype.uint32 = function(t) {
  return this.len += (this.tail = this.tail.next = new xr(
    (t = t >>> 0) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : 5,
    t
  )).len, this;
};
T.prototype.int32 = function(t) {
  return t < 0 ? this._push(Ir, 10, Yi.fromNumber(t)) : this.uint32(t);
};
T.prototype.sint32 = function(t) {
  return this.uint32((t << 1 ^ t >> 31) >>> 0);
};
function Ir(t, o, e) {
  for (; t.hi; )
    o[e++] = t.lo & 127 | 128, t.lo = (t.lo >>> 7 | t.hi << 25) >>> 0, t.hi >>>= 7;
  for (; t.lo > 127; )
    o[e++] = t.lo & 127 | 128, t.lo = t.lo >>> 7;
  o[e++] = t.lo;
}
T.prototype.uint64 = function(t) {
  var o = Yi.from(t);
  return this._push(Ir, o.length(), o);
};
T.prototype.int64 = T.prototype.uint64;
T.prototype.sint64 = function(t) {
  var o = Yi.from(t).zzEncode();
  return this._push(Ir, o.length(), o);
};
T.prototype.bool = function(t) {
  return this._push(cr, 1, t ? 1 : 0);
};
function Fo(t, o, e) {
  o[e] = t & 255, o[e + 1] = t >>> 8 & 255, o[e + 2] = t >>> 16 & 255, o[e + 3] = t >>> 24;
}
T.prototype.fixed32 = function(t) {
  return this._push(Fo, 4, t >>> 0);
};
T.prototype.sfixed32 = T.prototype.fixed32;
T.prototype.fixed64 = function(t) {
  var o = Yi.from(t);
  return this._push(Fo, 4, o.lo)._push(Fo, 4, o.hi);
};
T.prototype.sfixed64 = T.prototype.fixed64;
T.prototype.float = function(t) {
  return this._push(Re.float.writeFloatLE, 4, t);
};
T.prototype.double = function(t) {
  return this._push(Re.float.writeDoubleLE, 8, t);
};
var ul = Re.Array.prototype.set ? function(t, o, e) {
  o.set(t, e);
} : function(t, o, e) {
  for (var n = 0; n < t.length; ++n)
    o[e + n] = t[n];
};
T.prototype.bytes = function(t) {
  var o = t.length >>> 0;
  if (!o)
    return this._push(cr, 1, 0);
  if (Re.isString(t)) {
    var e = T.alloc(o = Na.length(t));
    Na.decode(t, e, 0), t = e;
  }
  return this.uint32(o)._push(ul, o, t);
};
T.prototype.string = function(t) {
  var o = La.length(t);
  return o ? this.uint32(o)._push(La.write, o, t) : this._push(cr, 1, 0);
};
T.prototype.fork = function() {
  return this.states = new Il(this), this.head = this.tail = new On(sr, 0, 0), this.len = 0, this;
};
T.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new On(sr, 0, 0), this.len = 0), this;
};
T.prototype.ldelim = function() {
  var t = this.head, o = this.tail, e = this.len;
  return this.reset().uint32(e), e && (this.tail.next = t.next, this.tail = o, this.len += e), this;
};
T.prototype.finish = function() {
  for (var t = this.head.next, o = this.constructor.alloc(this.len), e = 0; t; )
    t.fn(t.val, o, e), e += t.len, t = t.next;
  return o;
};
T._configure = function(t) {
  Lo = t, T.create = ps(), Lo._configure();
};
var Cl = Qe, fs = As;
(Qe.prototype = Object.create(fs.prototype)).constructor = Qe;
var Ct = Ot();
function Qe() {
  fs.call(this);
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
function dl(t, o, e) {
  t.length < 40 ? Ct.utf8.write(t, o, e) : o.utf8Write ? o.utf8Write(t, e) : o.write(t, e);
}
Qe.prototype.string = function(t) {
  var o = Ct.Buffer.byteLength(t);
  return this.uint32(o), o && this._push(dl, o, t), this;
};
Qe._configure();
var hs = oe, ze = Ot(), Do, ms = ze.LongBits, Al = ze.utf8;
function Te(t, o) {
  return RangeError("index out of range: " + t.pos + " + " + (o || 1) + " > " + t.len);
}
function oe(t) {
  this.buf = t, this.pos = 0, this.len = t.length;
}
var Fa = typeof Uint8Array < "u" ? function(t) {
  if (t instanceof Uint8Array || Array.isArray(t))
    return new oe(t);
  throw Error("illegal buffer");
} : function(t) {
  if (Array.isArray(t))
    return new oe(t);
  throw Error("illegal buffer");
}, bs = function() {
  return ze.Buffer ? function(t) {
    return (oe.create = function(o) {
      return ze.Buffer.isBuffer(o) ? new Do(o) : Fa(o);
    })(t);
  } : Fa;
};
oe.create = bs();
oe.prototype._slice = ze.Array.prototype.subarray || /* istanbul ignore next */
ze.Array.prototype.slice;
oe.prototype.uint32 = /* @__PURE__ */ function() {
  var t = 4294967295;
  return function() {
    if (t = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (t = (t | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (t = (t | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (t = (t | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (t = (t | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return t;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, Te(this, 10);
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
function lo() {
  var t = new ms(0, 0), o = 0;
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
oe.prototype.bool = function() {
  return this.uint32() !== 0;
};
function yi(t, o) {
  return (t[o - 4] | t[o - 3] << 8 | t[o - 2] << 16 | t[o - 1] << 24) >>> 0;
}
oe.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw Te(this, 4);
  return yi(this.buf, this.pos += 4);
};
oe.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw Te(this, 4);
  return yi(this.buf, this.pos += 4) | 0;
};
function Da() {
  if (this.pos + 8 > this.len)
    throw Te(this, 8);
  return new ms(yi(this.buf, this.pos += 4), yi(this.buf, this.pos += 4));
}
oe.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw Te(this, 4);
  var t = ze.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, t;
};
oe.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw Te(this, 4);
  var t = ze.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, t;
};
oe.prototype.bytes = function() {
  var t = this.uint32(), o = this.pos, e = this.pos + t;
  if (e > this.len)
    throw Te(this, t);
  return this.pos += t, Array.isArray(this.buf) ? this.buf.slice(o, e) : o === e ? new this.buf.constructor(0) : this._slice.call(this.buf, o, e);
};
oe.prototype.string = function() {
  var t = this.bytes();
  return Al.read(t, 0, t.length);
};
oe.prototype.skip = function(t) {
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
  Do = t, oe.create = bs(), Do._configure();
  var o = ze.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  ze.merge(oe.prototype, {
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
var pl = Ht, ys = hs;
(Ht.prototype = Object.create(ys.prototype)).constructor = Ht;
var Ta = Ot();
function Ht(t) {
  ys.call(this, t);
}
Ht._configure = function() {
  Ta.Buffer && (Ht.prototype._slice = Ta.Buffer.prototype.slice);
};
Ht.prototype.string = function() {
  var t = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + t, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + t, this.len));
};
Ht._configure();
var vs = {}, fl = kn, lr = Ot();
(kn.prototype = Object.create(lr.EventEmitter.prototype)).constructor = kn;
function kn(t, o, e) {
  if (typeof t != "function")
    throw TypeError("rpcImpl must be a function");
  lr.EventEmitter.call(this), this.rpcImpl = t, this.requestDelimited = !!o, this.responseDelimited = !!e;
}
kn.prototype.rpcCall = function t(o, e, n, i, r) {
  if (!i)
    throw TypeError("request must be specified");
  var a = this;
  if (!r)
    return lr.asPromise(t, a, o, e, n, i);
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
          } catch (I) {
            return a.emit("error", I, o), r(I);
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
kn.prototype.end = function(t) {
  return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(t) {
  var o = t;
  o.Service = fl;
})(vs);
var hl = {};
(function(t) {
  var o = t;
  o.build = "minimal", o.Writer = As, o.BufferWriter = Cl, o.Reader = hs, o.BufferReader = pl, o.util = Ot(), o.rpc = vs, o.roots = hl, o.configure = e;
  function e() {
    o.util._configure(), o.Writer._configure(o.BufferWriter), o.Reader._configure(o.BufferReader);
  }
  e();
})(us);
var ne = us;
const B = ne.Reader, Ce = ne.Writer, h = ne.util, d = ne.roots.default || (ne.roots.default = {}), rn = d.dot = (() => {
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
        let a = r === void 0 ? i.len : i.pos + r, g = new d.dot.v3.AndroidMetadata(), s, I;
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
              for (s = "", I = null; i.pos < u; ) {
                let p = i.uint32();
                switch (p >>> 3) {
                  case 1:
                    s = i.string();
                    break;
                  case 2:
                    I = d.dot.Int32List.decode(i, i.uint32());
                    break;
                  default:
                    i.skipType(p & 7);
                    break;
                }
              }
              g.dynamicCameraFrameProperties[s] = I;
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
async function ml(t) {
  const { Image: o } = rn, e = await t.arrayBuffer(), n = new Uint8Array(e), i = {};
  i.bytes = n;
  const r = o.verify(i);
  if (r)
    throw Error(r);
  const a = {};
  return a.bytes = n, o.create(a);
}
async function bl(t) {
  const { v3: { Metadata: o } } = rn, e = { ...t };
  e.platform = rn.Platform.WEB;
  const n = e, i = o.verify(n);
  if (i)
    throw Error(i);
  return o.create(n);
}
async function yl(t) {
  const { Content: o } = rn, { iv: e, key: n, message: i } = await EI(t), r = { token: new Uint8Array(n), iv: e, schemaVersion: Tx, bytes: new Uint8Array(i) }, a = o.verify(r);
  if (a)
    throw Error(a);
  const g = o.create(r);
  return o.encode(g).finish();
}
function vl({ documentContent: t, faceContent: o, magnifeyeLivenessContent: e, smileLivenessContent: n }) {
  const { Blob: i } = rn.v3, r = {};
  r.documentContent = t, r.faceContent = o, r.magnifeyeLivenessContent = e, r.smileLivenessContent = n;
  const a = r, g = i.verify(a);
  if (g)
    throw Error(g);
  const s = i.create(a);
  return i.encode(s).finish();
}
async function wl(t, o) {
  const { FaceContent: e } = rn.v3, n = await ml(t), i = await bl(o), r = {};
  r.image = n, r.metadata = i;
  const a = r, g = e.verify(a);
  if (g)
    throw Error(g);
  const s = e.create(a), I = {};
  return I.faceContent = s, vl(I);
}
async function Bl(t, o) {
  const e = await wl(t, o);
  return yl(e);
}
const Sl = ({
  onPhotoTakenInternal: t
}) => {
  const {
    appState: o,
    handleAppStateChange: e,
    handleError: n
  } = Vi(), {
    faceCameraOptions: i
  } = Jg(), {
    cameraFacing: r,
    onPhotoTaken: a,
    sessionToken: g,
    thresholds: s,
    wasmDirectoryPath: I
  } = i, C = Wt(), u = ts(void 0), {
    cameraHandler: p,
    cameraResolution: f,
    onCameraResolutionChange: v
  } = fI(C, r), {
    controller: w
  } = tl(s, I), {
    shouldMirror: E
  } = pI(at.CONTROL, p);
  return dI(at.CAMERA_PROPS_CHANGED, {
    cameraResolution: f,
    shouldMirror: E
  }), hI(), be(() => () => {
    Zn.getInstance().restart();
  }, []), be(() => {
    p != null && p.videoTrack && (w != null && w.isDetectorInitialized) && e(We.RUNNING);
  }, [p == null ? void 0 : p.videoTrack, w == null ? void 0 : w.isDetectorInitialized, e]), be(() => {
    if (o !== We.RUNNING)
      return;
    if (!p || !w)
      throw new te("Cannot start detection");
    let k = 0, O = !1, R = 0;
    const U = new ir(30);
    w.clearImagesForDuplicateDetection();
    const D = async (Z, _, z) => {
      const ee = {
        width: Z.width,
        height: Z.height
      }, xe = await gI(Z), Ae = {
        ...await p.getCameraProperties(),
        detectionRecord: z,
        hashedDetectedImages: w.getImagesForDuplicateDetection()
      }, re = await Bl(xe, {
        sessionToken: g,
        web: Ae
      }), ae = {
        detection: _,
        imageResolution: ee
      };
      CI(Pg.FACE, w.getCandidateSelectionImages()), t && t({
        cameraProperties: Ae || {}
      }), a({
        image: xe,
        data: ae
      }, re);
    };
    return (async () => {
      const Z = Date.now();
      for (; p.checkIfStreamIsRunning() && !O; ) {
        if (_x(k, R)) {
          const {
            detection: ae,
            image: $e
          } = w.getBestImage() || {}, st = w.getDetectionRecord();
          if ($e && ae) {
            const we = Date.now(), Xe = Eg(U);
            wn.sendFaceData({
              faceDetection: ae,
              imageResolution: {
                width: $e.width,
                height: $e.height
              },
              deviceName: await p.getDeviceName(),
              averageFps: Xe,
              captureProcessDurationInMs: we - Z,
              facingMode: p.getCameraSettings().facingMode,
              instructionSet: await w.getInstructionSet()
            }), e(We.WAITING), await D($e, ae, st), w.restart();
          } else
            n(new te("Something went wrong during capturing an image"));
          return;
        }
        const _ = Date.now(), z = p.takePhoto(), ee = {
          width: z.width,
          height: z.height
        };
        let xe;
        try {
          xe = await w.processImage(z);
        } catch (ae) {
          ae instanceof Error && n(te.fromCameraError(ae));
          return;
        }
        const Ae = Date.now() - _, Pe = Wn(1e3 / Ae);
        U.pushFixed(Pe);
        const re = {
          face: xe.detectedFace,
          detectionTime: Ae,
          fps: Pe,
          resolution: ee,
          instructionCode: xe.instructionCode,
          invalidValidators: xe.invalidValidators,
          samVersion: w.samVersion
        };
        u.value = re, xe.isInCandidateSelection && (k === 0 && (k = performance.now()), R++), v(ee), await Wo(Math.max(Ba.max - Ae, Ba.min));
      }
    })(), () => {
      O = !0;
    };
  }, [o, p, w, i, e, n, a, s.faceConfidence, v, t, g, u]), le(De, {
    children: [le(qc, {
      ref: C,
      $isImageMirror: E,
      autoPlay: !0,
      muted: !0,
      playsInline: !0
    }), f && o === We.RUNNING && le(KI, {
      cameraResolution: f,
      detectionDetails: u,
      isImageMirror: E
    })]
  });
}, Gl = ({
  onPhotoTakenInternal: t,
  ...o
}) => le(uI, {
  cameraOptions: o,
  children: le(Sl, {
    onPhotoTakenInternal: t
  })
}), Zl = ({
  children: t
}) => {
  const o = Wt(null);
  return mI(o, at.VIDEO_ELEMENT_SIZE), le($c, {
    ref: o,
    children: t
  });
}, kl = ({
  cameraOptions: t
}) => (be(() => {
  wn.init("5f83e83ee4cee1ab6e5bbf86e215644473299675");
}, []), t ? le(Xc, {
  target: t.styleTarget,
  children: le(ox, {
    value: hx(t.onError, at.STATE_CHANGED),
    children: le(Vg, {
      children: le(Zl, {
        children: le(Gl, {
          ...t
        })
      })
    })
  })
}) : null);
$s(kl, "x-dot-face-auto-capture", ["cameraOptions"]);
