var Ws = Object.defineProperty;
var Os = (t, o, e) => o in t ? Ws(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e;
var X = (t, o, e) => (Os(t, typeof o != "symbol" ? o + "" : o, e), e);
var Sn, S, Na, Ta, yt, Er, Fa, so, Da, vn = {}, Xa = [], Rs = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, bi = Array.isArray;
function ot(t, o) {
  for (var e in o)
    t[e] = o[e];
  return t;
}
function ja(t) {
  var o = t.parentNode;
  o && o.removeChild(t);
}
function fe(t, o, e) {
  var n, i, r, a = {};
  for (r in o)
    r == "key" ? n = o[r] : r == "ref" ? i = o[r] : a[r] = o[r];
  if (arguments.length > 12592 + -2 * 6295 && (a.children = arguments.length > 4810 + -253 * 19 ? Sn.call(arguments, -1462 * -1 + -5781 + 4321) : e), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      void (-6 * 869 + 4639 + 575) === a[r] && (a[r] = t.defaultProps[r]);
  return hn(t, a, n, i, null);
}
function hn(t, o, e, n, i) {
  var r = {};
  r.type = t, r.props = o, r.key = e, r.ref = n, r.__k = null, r.__ = null, r.__b = 0, r.__e = null, r.__d = void (5743 * -1 + 5 * 1513 + 1822 * -1), r.__c = null, r.constructor = void (-7532 + -8114 * 1 + 15646), r.__v = i ?? ++Na, r.__i = -(-4864 + 35 * 139), r.__u = 0;
  var a = r;
  return i == null && S.vnode != null && S.vnode(a), a;
}
function Vs() {
  var t = {};
  return t.current = null, t;
}
function Le(t) {
  return t.children;
}
function We(t, o) {
  this.props = t, this.context = o;
}
function Ut(t, o) {
  if (o == null)
    return t.__ ? Ut(t.__, t.__i + 1) : null;
  for (var e; o < t.__k.length; o++)
    if ((e = t.__k[o]) != null && e.__e != null)
      return e.__e;
  return typeof t.type == "function" ? Ut(t) : null;
}
function Ua(t) {
  var o, e;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, o = 4416 + 69 * -64; o < t.__k.length; o++)
      if ((e = t.__k[o]) != null && e.__e != null) {
        t.__e = t.__c.base = e.__e;
        break;
      }
    return Ua(t);
  }
}
function co(t) {
  (!t.__d && (t.__d = !(-61 * 61 + -7664 * 1 + 45 * 253)) && yt.push(t) && !ci.__r++ || Er !== S.debounceRendering) && ((Er = S.debounceRendering) || Fa)(ci);
}
function ci() {
  var t, o, e, n, i, r, a, g, s;
  for (yt.sort(so); t = yt.shift(); )
    t.__d && (o = yt.length, n = void (4785 + -9791 * -1 + 14576 * -1), r = (i = (e = t).__v).__e, g = [], s = [], (a = e.__P) && ((n = ot({}, i)).__v = i.__v + (-3638 * 2 + -491 * -7 + -2 * -1920), S.vnode && S.vnode(n), Yo(a, n, i, e.__n, a.ownerSVGElement !== void 0, 8647 + 4 * -421 + 29 * -239 & i.__u ? [r] : null, g, r ?? Ut(i), !!(5097 + 1 * -5739 + 674 & i.__u), s), n.__.__k[n.__i] = n, Qa(g, n, s), n.__e != r && Ua(n)), yt.length > o && yt.sort(so));
  ci.__r = 5884 + -1199 * -2 + 41 * -202;
}
function Ma(t, o, e, n, i, r, a, g, s, x, C) {
  var u, p, f, v, G, E = n && n.__k || Xa, H = o.length;
  for (e.__d = s, Es(e, o, E), s = e.__d, u = -3947 * -1 + 2295 + -6242; u < H; u++)
    (f = e.__k[u]) != null && typeof f != "boolean" && typeof f != "function" && (p = -(11 * 733 + 30 * 62 + 11 * -902) === f.__i ? vn : E[f.__i] || vn, f.__i = u, Yo(t, f, p, i, r, a, g, s, x, C), v = f.__e, f.ref && p.ref != f.ref && (p.ref && Lo(p.ref, null, f), C.push(f.ref, f.__c || v, f)), G == null && v != null && (G = v), 38 + 1 * -66052 + 131550 & f.__u || p.__k === f.__k ? s = Ja(f, s, t) : typeof f.type == "function" && void (2049 + -1 * -4201 + -6250) !== f.__d ? s = f.__d : v && (s = v.nextSibling), f.__d = void (-137 * -34 + 645 + -5303), f.__u &= -(53 * -5563 + 67181 + 424267 * 1));
  e.__d = s, e.__e = G;
}
function Es(t, o, e) {
  var n, i, r, a, g, s = o.length, x = e.length, C = x, u = 3911 + 3911 * -1;
  for (t.__k = [], n = 1 * -9291 + 1824 + 7467; n < s; n++)
    (i = t.__k[n] = (i = o[n]) == null || typeof i == "boolean" || typeof i == "function" ? null : typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? hn(null, i, null, null, i) : bi(i) ? hn(Le, { children: i }, null, null, null) : void (6109 + -825 * -11 + -15184) === i.constructor && i.__b > -2507 + -109 * -23 ? hn(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) != null ? (i.__ = t, i.__b = t.__b + (199 * 26 + 9797 + -14970), g = Ps(i, e, a = n + u, C), i.__i = g, r = null, -(8 * 1233 + 47 * -19 + -8970) !== g && (C--, (r = e[g]) && (r.__u |= 17733 + -1003 * -113)), r == null || r.__v === null ? (-(-3462 + -1 * -3463) == g && u--, typeof i.type != "function" && (i.__u |= -20509 * -1 + 556 * -186 + -148443 * -1)) : g !== a && (g === a + (84 * -17 + 1873 * 2 + -2317) ? u++ : g > a ? C > s - a ? u += g - a : u-- : u = g < a && g == a - (-277 * -8 + -1224 * -1 + -3439) ? g - a : -4 * -2242 + -3 * -1594 + 11 * -1250, g !== n + u && (i.__u |= 78 * -1579 + -13826 + 202524))) : (r = e[n]) && r.key == null && r.__e && (r.__e == t.__d && (t.__d = Ut(r)), Io(r, r, !(1 * 8473 + -13 * 6 + -6 * 1399)), e[n] = null, C--);
  if (C)
    for (n = -5802 + 3 * 1934; n < x; n++)
      (r = e[n]) != null && -248 * 2 + 4463 * -1 + 4959 == (-233752 + 13 * 16121 + 155251 & r.__u) && (r.__e == t.__d && (t.__d = Ut(r)), Io(r, r));
}
function Ja(t, o, e) {
  var n, i;
  if (typeof t.type == "function") {
    for (n = t.__k, i = 61 * -53 + 1953 + -2 * -640; n && i < n.length; i++)
      n[i] && (n[i].__ = t, o = Ja(n[i], o, e));
    return o;
  }
  return t.__e != o && (e.insertBefore(t.__e, o || null), o = t.__e), o && o.nextSibling;
}
function rt(t, o) {
  return o = o || [], t == null || typeof t == "boolean" || (bi(t) ? t.some(function(e) {
    rt(e, o);
  }) : o.push(t)), o;
}
function Ps(t, o, e, n) {
  var i = t.key, r = t.type, a = e - (-9289 * -1 + -1 * 8102 + -1186), g = e + (9505 + 23 * -365 + 1109 * -1), s = o[e];
  if (s === null || s && i == s.key && r === s.type)
    return e;
  if (n > (s != null && 8536 + -163 * 55 + 429 * 1 == (-13 * 5858 + 68508 + 138718 & s.__u) ? -3569 * -1 + -6353 + 2785 * 1 : 5201 + -2 * -3370 + -11941 * 1))
    for (; a >= -6553 + 1571 * 4 + 269 || g < o.length; ) {
      if (a >= 7 * -292 + -3 * 951 + -59 * -83) {
        if ((s = o[a]) && 725 * -11 + 8702 + 1 * -727 == (-44968 + 841 * -29 + 200429 & s.__u) && i == s.key && r === s.type)
          return a;
        a--;
      }
      if (g < o.length) {
        if ((s = o[g]) && 4994 + -6035 * -1 + -11029 == (-4 * -6018 + -4 * 6347 + 132388 & s.__u) && i == s.key && r === s.type)
          return g;
        g++;
      }
    }
  return -(-7 * 542 + -1653 * -5 + -4470);
}
function Pr(t, o, e) {
  o[-2813 + 1 * 2813] === "-" ? t.setProperty(o, e ?? "") : t[o] = e == null ? "" : typeof e != "number" || Rs.test(o) ? e : e + "px";
}
function Tn(t, o, e, n, i) {
  var r;
  e:
    if (o === "style")
      if (typeof e == "string")
        t.style.cssText = e;
      else {
        if (typeof n == "string" && (t.style.cssText = n = ""), n)
          for (o in n)
            e && o in e || Pr(t.style, o, "");
        if (e)
          for (o in e)
            n && e[o] === n[o] || Pr(t.style, o, e[o]);
      }
    else if (o[0] === "o" && o[31 * 257 + 2890 + -10856] === "n")
      r = o !== (o = o.replace(/(PointerCapture)$|Capture$/, "$1")), o = o.toLowerCase() in t ? o.toLowerCase().slice(3113 + 33 * -106 + -387 * -1) : o.slice(-5447 + -22 * 347 + 13083), t.l || (t.l = {}), t.l[o + r] = e, e ? n ? e.u = n.u : (e.u = Date.now(), t.addEventListener(o, r ? Lr : Yr, r)) : t.removeEventListener(o, r ? Lr : Yr, r);
    else {
      if (i)
        o = o.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (o !== "width" && o !== "height" && o !== "href" && o !== "list" && o !== "form" && o !== "tabIndex" && o !== "download" && o !== "rowSpan" && o !== "colSpan" && o !== "role" && o in t)
        try {
          t[o] = e ?? "";
          break e;
        } catch {
        }
      typeof e == "function" || (e == null || !(2612 + 583 * 6 + 6109 * -1) === e && o[3505 + 31 * 77 + 736 * -8] !== "-" ? t.removeAttribute(o) : t.setAttribute(o, e));
    }
}
function Yr(t) {
  var o = this.l[t.type + !1];
  if (t.t) {
    if (t.t <= o.u)
      return;
  } else
    t.t = Date.now();
  return o(S.event ? S.event(t) : t);
}
function Lr(t) {
  return this.l[t.type + !(-67 * 50 + 9087 + -5737)](S.event ? S.event(t) : t);
}
function Yo(t, o, e, n, i, r, a, g, s, x) {
  var C, u, p, f, v, G, E, H, k, L, z, F, U, Z, _, Q = o.type;
  if (void (-8698 * 1 + 2 * 1498 + 5702) !== o.constructor)
    return null;
  2 * 2426 + 7843 + -1 * 12567 & e.__u && (s = !!(1 * -2524 + -8395 + 10951 & e.__u), r = [g = o.__e = e.__e]), (C = S.__b) && C(o);
  e:
    if (typeof Q == "function")
      try {
        if (H = o.props, k = (C = Q.contextType) && n[C.__c], L = C ? k ? k.props.value : C.__ : n, e.__c ? E = (u = o.__c = e.__c).__ = u.__E : ("prototype" in Q && Q.prototype.render ? o.__c = u = new Q(H, L) : (o.__c = u = new We(H, L), u.constructor = Q, u.render = Ls), k && k.sub(u), u.props = H, u.state || (u.state = {}), u.context = L, u.__n = n, p = u.__d = !(3114 + -46 * -4 + -3298), u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), Q.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = ot({}, u.__s)), ot(u.__s, Q.getDerivedStateFromProps(H, u.__s))), f = u.props, v = u.state, u.__v = o, p)
          Q.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (Q.getDerivedStateFromProps == null && H !== f && u.componentWillReceiveProps != null && u.componentWillReceiveProps(H, L), !u.__e && (u.shouldComponentUpdate != null && u.shouldComponentUpdate(H, u.__s, L) === !1 || o.__v === e.__v)) {
            for (o.__v !== e.__v && (u.props = H, u.state = u.__s, u.__d = !(3 * 278 + 1084 * 6 + -7337)), o.__e = e.__e, o.__k = e.__k, o.__k.forEach(function(ee) {
              ee && (ee.__ = o);
            }), z = -6882 + 4861 * 1 + 47 * 43; z < u._sb.length; z++)
              u.__h.push(u._sb[z]);
            u._sb = [], u.__h.length && a.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(H, u.__s, L), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(f, v, G);
          });
        }
        if (u.context = L, u.props = H, u.__P = t, u.__e = !(5968 + -7031 * -1 + -12998), F = S.__r, U = -7718 + -3801 * 2 + -20 * -766, "prototype" in Q && Q.prototype.render) {
          for (u.state = u.__s, u.__d = !1, F && F(o), C = u.render(u.props, u.state, u.context), Z = -1725 * -1 + 225 + -13 * 150; Z < u._sb.length; Z++)
            u.__h.push(u._sb[Z]);
          u._sb = [];
        } else
          do
            u.__d = !(-4296 + -1 * -4297), F && F(o), C = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++U < -4715 + 474 * 10);
        u.state = u.__s, u.getChildContext != null && (n = ot(ot({}, n), u.getChildContext())), p || u.getSnapshotBeforeUpdate == null || (G = u.getSnapshotBeforeUpdate(f, v)), Ma(t, bi(_ = C != null && C.type === Le && C.key == null ? C.props.children : C) ? _ : [_], o, e, n, i, r, a, g, s, x), u.base = o.__e, o.__u &= -(570 * -3 + 9994 + -1 * 8123), u.__h.length && a.push(u), E && (u.__E = u.__ = null);
      } catch (ee) {
        o.__v = null, s || r != null ? (o.__e = g, o.__u |= s ? -78 * 26 + -34 * -62 + 80 : 20 * -474 + 4205 + 5307, r[r.indexOf(g)] = null) : (o.__e = e.__e, o.__k = e.__k), S.__e(ee, o, e);
      }
    else
      r == null && o.__v === e.__v ? (o.__k = e.__k, o.__e = e.__e) : o.__e = Ys(e.__e, o, e, n, i, r, a, s, x);
  (C = S.diffed) && C(o);
}
function Qa(t, o, e) {
  o.__d = void (457 * 13 + 1 * -467 + 46 * -119);
  for (var n = 115 * 20 + -6523 * -1 + -8823; n < e.length; n++)
    Lo(e[n], e[++n], e[++n]);
  S.__c && S.__c(o, t), t.some(function(i) {
    try {
      t = i.__h, i.__h = [], t.some(function(r) {
        r.call(i);
      });
    } catch (r) {
      S.__e(r, i.__v);
    }
  });
}
function Ys(t, o, e, n, i, r, a, g, s) {
  var x, C, u, p, f, v, G, E = e.props, H = o.props, k = o.type;
  if (k === "svg" && (i = !(5 * -1706 + 541 * -14 + 16104)), r != null) {
    for (x = -7 * 1427 + -6917 * 1 + 16906; x < r.length; x++)
      if ((f = r[x]) && "setAttribute" in f == !!k && (k ? f.localName === k : -1 * 2120 + -2307 + 4430 === f.nodeType)) {
        t = f, r[x] = null;
        break;
      }
  }
  if (t == null) {
    if (k === null)
      return document.createTextNode(H);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", k) : document.createElement(k, H.is && H), r = null, g = !1;
  }
  if (k === null)
    E === H || g && t.data === H || (t.data = H);
  else {
    if (r = r && Sn.call(t.childNodes), E = e.props || vn, !g && r != null)
      for (E = {}, x = -13 * -262 + 3288 + -6694 * 1; x < t.attributes.length; x++)
        E[(f = t.attributes[x]).name] = f.value;
    for (x in E)
      f = E[x], x == "children" || (x == "dangerouslySetInnerHTML" ? u = f : x === "key" || x in H || Tn(t, x, null, f, i));
    for (x in H)
      f = H[x], x == "children" ? p = f : x == "dangerouslySetInnerHTML" ? C = f : x == "value" ? v = f : x == "checked" ? G = f : x === "key" || g && typeof f != "function" || E[x] === f || Tn(t, x, f, E[x], i);
    if (C)
      g || u && (C.__html === u.__html || C.__html === t.innerHTML) || (t.innerHTML = C.__html), o.__k = [];
    else if (u && (t.innerHTML = ""), Ma(t, bi(p) ? p : [p], o, e, n, i && k !== "foreignObject", r, a, r ? r[9847 + -9406 * 1 + 3 * -147] : e.__k && Ut(e, 7987 + 29 * 117 + 1138 * -10), g, s), r != null)
      for (x = r.length; x--; )
        r[x] != null && ja(r[x]);
    g || (x = "value", void (-4 * 242 + 1863 + -895) !== v && (v !== t[x] || k === "progress" && !v || k === "option" && v !== E[x]) && Tn(t, x, v, E[x], !(13917 + -4 * 3479)), x = "checked", void (-1 * -3908 + 6580 + -10488) !== G && G !== t[x] && Tn(t, x, G, E[x], !(2181 + 4402 * -1 + 2222)));
  }
  return t;
}
function Lo(t, o, e) {
  try {
    typeof t == "function" ? t(o) : t.current = o;
  } catch (n) {
    S.__e(n, e);
  }
}
function Io(t, o, e) {
  var n, i;
  if (S.unmount && S.unmount(t), (n = t.ref) && (n.current && n.current !== t.__e || Lo(n, null, o)), (n = t.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (r) {
        S.__e(r, o);
      }
    n.base = n.__P = null, t.__c = void (8625 + -8625 * 1);
  }
  if (n = t.__k)
    for (i = 36 * 10 + -81 * -81 + 2307 * -3; i < n.length; i++)
      n[i] && Io(n[i], o, e || typeof t.type != "function");
  e || t.__e == null || ja(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Ls(t, o, e) {
  return this.constructor(t, e);
}
function Ct(t, o, e) {
  var n, i, r, a;
  S.__ && S.__(t, o), i = (n = typeof e == "function") ? null : e && e.__k || o.__k, r = [], a = [], Yo(o, t = (!n && e || o).__k = fe(Le, null, [t]), i || vn, vn, void (3715 + 15 * -151 + -1450) !== o.ownerSVGElement, !n && e ? [e] : i ? null : o.firstChild ? Sn.call(o.childNodes) : null, r, !n && e ? e : i ? i.__e : o.firstChild, n, a), Qa(r, t, a);
}
function No(t, o) {
  Ct(t, o, No);
}
function To(t, o, e) {
  var n, i, r, a, g = ot({}, t.props);
  for (r in t.type && t.type.defaultProps && (a = t.type.defaultProps), o)
    r == "key" ? n = o[r] : r == "ref" ? i = o[r] : g[r] = void (-424 * -22 + 3948 * 2 + -17224) === o[r] && void (14 * -706 + 172 * 1 + 1214 * 8) !== a ? a[r] : o[r];
  return arguments.length > -2 * -8 + -5986 + 5972 && (g.children = arguments.length > 3 ? Sn.call(arguments, 73 + 368 * 2 + -807) : e), hn(t.type, g, n || t.key, i || t.ref, null);
}
function Fo(t, o) {
  var e = { __c: o = "__cC" + Da++, __: t, Consumer: function(n, i) {
    return n.children(i);
  }, Provider: function(n) {
    var i, r;
    return this.getChildContext || (i = [], (r = {})[o] = this, this.getChildContext = function() {
      return r;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && i.some(function(g) {
        g.__e = !0, co(g);
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
Sn = Xa.slice, S = { __e: function(t, o, e, n) {
  for (var i, r, a; o = o.__; )
    if ((i = o.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, n || {}), a = i.__d), a)
          return i.__E = i;
      } catch (g) {
        t = g;
      }
  throw t;
} }, Na = 1 * -8813 + 3295 * -3 + 18698, Ta = function(t) {
  return t != null && t.constructor == null;
}, We.prototype.setState = function(t, o) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ot({}, this.state), typeof t == "function" && (t = t(ot({}, e), this.props)), t && ot(e, t), t != null && this.__v && (o && this._sb.push(o), co(this));
}, We.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !(-6461 + -71 * -91), t && this.__h.push(t), co(this));
}, We.prototype.render = Le, yt = [], Fa = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, so = function(t, o) {
  return t.__v.__b - o.__v.__b;
}, ci.__r = 5873 + 7 * -1059 + 14 * 110, Da = -2616 * 2 + -6506 + 11738;
function Do() {
  return (Do = Object.assign ? Object.assign.bind() : function(t) {
    for (var o = 260 * 38 + -5 * 644 + -6659 * 1; o < arguments.length; o++) {
      var e = arguments[o];
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }
    return t;
  }).apply(this, arguments);
}
var Ns = ["context", "children"];
function Ts(t) {
  this.getChildContext = function() {
    return t.context;
  };
  var o = t.children, e = function(n, i) {
    if (n == null)
      return {};
    var r, a, g = {}, s = Object.keys(n);
    for (a = -3032 + -1 * -9707 + 6675 * -1; a < s.length; a++)
      i.indexOf(r = s[a]) >= 4847 + 9 * 153 + 778 * -8 || (g[r] = n[r]);
    return g;
  }(t, Ns);
  return To(o, e);
}
function Fs() {
  var t = {};
  t.detail = {}, t.bubbles = !(-9951 + 5105 * 1 + 4846), t.cancelable = !(3295 * 1 + -5252 + -103 * -19);
  var o = new CustomEvent("_preact", t);
  this.dispatchEvent(o), this._vdom = fe(Ts, Do({}, this._props, { context: o.detail.context }), function e(n, i) {
    if (n.nodeType === 3)
      return n.data;
    if (-1478 * 5 + 3494 + 3897 !== n.nodeType)
      return null;
    var r = [], a = {}, g = 666 * -8 + 786 * -2 + 6900, s = n.attributes, x = n.childNodes;
    for (g = s.length; g--; )
      s[g].name !== "slot" && (a[s[g].name] = s[g].value, a[za(s[g].name)] = s[g].value);
    for (g = x.length; g--; ) {
      var C = e(x[g], null), u = x[g].slot;
      u ? a[u] = fe(Nr, { name: u }, C) : r[g] = C;
    }
    var p = i ? fe(Nr, null, r) : r;
    return fe(i || n.nodeName.toLowerCase(), a, p);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? No : Ct)(this._vdom, this._root);
}
function za(t) {
  return t.replace(/-(\w)/g, function(o, e) {
    return e ? e.toUpperCase() : "";
  });
}
function Ds(t, o, e) {
  if (this._vdom) {
    var n = {};
    n[t] = e = e ?? void (9769 + 8269 * -1 + -1500), n[za(t)] = e, this._vdom = To(this._vdom, n), Ct(this._vdom, this._root);
  }
}
function Xs() {
  Ct(this._vdom = null, this._root);
}
function Nr(t, o) {
  var e = this;
  return fe("slot", Do({}, t, { ref: function(n) {
    n ? (e.ref = n, e._listener || (e._listener = function(i) {
      i.stopPropagation(), i.detail.context = o;
    }, n.addEventListener("_preact", e._listener))) : e.ref.removeEventListener("_preact", e._listener);
  } }));
}
function js(t, o, e, n) {
  function i() {
    var r = Reflect.construct(HTMLElement, [], i);
    return r._vdomComponent = t, r._root = n && n.shadow ? r.attachShadow({ mode: n.mode || "open" }) : r, r;
  }
  return (i.prototype = Object.create(HTMLElement.prototype)).constructor = i, i.prototype.connectedCallback = Fs, i.prototype.attributeChangedCallback = Ds, i.prototype.disconnectedCallback = Xs, e = e || t.observedAttributes || Object.keys(t.propTypes || {}), i.observedAttributes = e, e.forEach(function(r) {
    Object.defineProperty(i.prototype, r, { get: function() {
      return this._vdom.props[r];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(r, null, a) : (this._props || (this._props = {}), this._props[r] = a, this.connectedCallback());
      var g = typeof a;
      a != null && g !== "string" && g !== "boolean" && g !== "number" || this.setAttribute(r, a);
    } });
  }), customElements.define(o || t.tagName || t.displayName || t.name, i);
}
var be = function() {
  return be = Object.assign || function(o) {
    for (var e, n = 1, i = arguments.length; n < i; n++) {
      e = arguments[n];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (o[r] = e[r]);
    }
    return o;
  }, be.apply(this, arguments);
};
function Mt(t, o, e) {
  if (e || arguments.length === 2)
    for (var n = 0, i = o.length, r; n < i; n++)
      (r || !(n in o)) && (r || (r = Array.prototype.slice.call(o, 0, n)), r[n] = o[n]);
  return t.concat(r || Array.prototype.slice.call(o));
}
function Us(t) {
  var o = Object.create(null);
  return function(e) {
    return o[e] === void 0 && (o[e] = t(e)), o[e];
  };
}
var Ms = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Js = Us(function(t) {
  return Ms.test(t) || t.charCodeAt(7996 + 9307 * 1 + 1331 * -13) === -5407 * -1 + -8903 + 3607 && t.charCodeAt(2501 * -1 + 1600 + 11 * 82) === 42 * -233 + 6249 + 3647 && t.charCodeAt(8490 + 4244 * -2) < 719 + -2 * 314;
}), dt, q, Ji, Tr, Jt = 4 * 1655 + -1077 + -5543, $a = [], zn = [], Fr = S.__b, Dr = S.__r, Xr = S.diffed, jr = S.__c, Ur = S.unmount;
function tn(t, o) {
  S.__h && S.__h(q, t, Jt || o), Jt = 0;
  var e = {};
  e.__ = [], e.__h = [];
  var n = q.__H || (q.__H = e), i = {};
  return i.__V = zn, t >= n.__.length && n.__.push(i), n.__[t];
}
function je(t) {
  return Jt = 2354 + 13 * -181, qa(_a, t);
}
function qa(t, o, e) {
  var n = tn(dt++, 2);
  if (n.t = t, !n.__c && (n.__ = [e ? e(o) : _a(void (937 * 5 + 1 * 668 + 1 * -5353), o), function(g) {
    var s = n.__N ? n.__N[0] : n.__[0], x = n.t(s, g);
    s !== x && (n.__N = [x, n.__[-35 * 53 + 2 * 2019 + -2182]], n.__c.setState({}));
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
      var u = !(-14602 + -14603 * -1);
      return C.forEach(function(p) {
        if (p.__N) {
          var f = p.__[0];
          p.__ = p.__N, p.__N = void 0, f !== p.__[0] && (u = !0);
        }
      }), !(!u && n.__c.props === g) && (!r || r.call(this, g, s, x));
    };
    q.u = !(353 * -15 + -4834 + 1447 * 7);
    var r = q.shouldComponentUpdate, a = q.componentWillUpdate;
    q.componentWillUpdate = function(g, s, x) {
      if (this.__e) {
        var C = r;
        r = void (-8 * 778 + 2921 + 3303), i(g, s, x), r = C;
      }
      a && a.call(this, g, s, x);
    }, q.shouldComponentUpdate = i;
  }
  return n.__N || n.__;
}
function ye(t, o) {
  var e = tn(dt++, 3);
  !S.__s && Xo(e.__H, o) && (e.__ = t, e.i = o, q.__H.__h.push(e));
}
function yi(t, o) {
  var e = tn(dt++, 4);
  !S.__s && Xo(e.__H, o) && (e.__ = t, e.i = o, q.__h.push(e));
}
function nn(t) {
  return Jt = 4227 * 1 + -6 * -197 + -5404, Ue(function() {
    var o = {};
    return o.current = t, o;
  }, []);
}
function Qs(t, o, e) {
  Jt = 2929 * -1 + 4924 + -1989, yi(function() {
    return typeof t == "function" ? (t(o()), function() {
      return t(null);
    }) : t ? (t.current = o(), function() {
      return t.current = null;
    }) : void (8283 + 1 * 3463 + 5873 * -2);
  }, e == null ? e : e.concat(t));
}
function Ue(t, o) {
  var e = tn(dt++, 7);
  return Xo(e.__H, o) ? (e.__V = t(), e.i = o, e.__h = t, e.__V) : e.__;
}
function Ii(t, o) {
  return Jt = 2146 * 4 + -9701 + 1125, Ue(function() {
    return t;
  }, o);
}
function vi(t) {
  var o = q.context[t.__c], e = tn(dt++, 1 * 4663 + -5779 * -1 + -10433);
  return e.c = t, o ? (e.__ == null && (e.__ = !(-1619 + -9217 * 1 + 28 * 387), o.sub(q)), o.props.value) : t.__;
}
function xo(t, o) {
  S.useDebugValue && S.useDebugValue(o ? o(t) : t);
}
function zs() {
  var t = tn(dt++, 11);
  if (!t.__) {
    for (var o = q.__v; o !== null && !o.__m && o.__ !== null; )
      o = o.__;
    var e = o.__m || (o.__m = [5111 + 1 * 7142 + -12253 * 1, 3912 * 1 + 6351 + -10263]);
    t.__ = "P" + e[1193 * 2 + -2208 + -178] + "-" + e[8123 * -1 + 1 * 3448 + 4676]++;
  }
  return t.__;
}
function $s() {
  for (var t; t = $a.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach($n), t.__H.__h.forEach(lo), t.__H.__h = [];
      } catch (o) {
        t.__H.__h = [], S.__e(o, t.__v);
      }
}
S.__b = function(t) {
  q = null, Fr && Fr(t);
}, S.__r = function(t) {
  Dr && Dr(t), dt = -1 * -4421 + -1 * -7505 + 134 * -89;
  var o = (q = t.__c).__H;
  o && (Ji === q ? (o.__h = [], q.__h = [], o.__.forEach(function(e) {
    e.__N && (e.__ = e.__N), e.__V = zn, e.__N = e.i = void 0;
  })) : (o.__h.forEach($n), o.__h.forEach(lo), o.__h = [], dt = 3647 * -2 + -5090 * -1 + -19 * -116)), Ji = q;
}, S.diffed = function(t) {
  Xr && Xr(t);
  var o = t.__c;
  o && o.__H && (o.__H.__h.length && (83 * -1 + 7262 + -97 * 74 !== $a.push(o) && Tr === S.requestAnimationFrame || ((Tr = S.requestAnimationFrame) || qs)($s)), o.__H.__.forEach(function(e) {
    e.i && (e.__H = e.i), e.__V !== zn && (e.__ = e.__V), e.i = void (-46 + -19 * -375 + -7079), e.__V = zn;
  })), Ji = q = null;
}, S.__c = function(t, o) {
  o.some(function(e) {
    try {
      e.__h.forEach($n), e.__h = e.__h.filter(function(n) {
        return !n.__ || lo(n);
      });
    } catch (n) {
      o.some(function(i) {
        i.__h && (i.__h = []);
      }), o = [], S.__e(n, e.__v);
    }
  }), jr && jr(t, o);
}, S.unmount = function(t) {
  Ur && Ur(t);
  var o, e = t.__c;
  e && e.__H && (e.__H.__.forEach(function(n) {
    try {
      $n(n);
    } catch (i) {
      o = i;
    }
  }), e.__H = void (-1 * -3591 + -389 * -23 + 2 * -6269), o && S.__e(o, e.__v));
};
var Mr = typeof requestAnimationFrame == "function";
function qs(t) {
  var o, e = function() {
    clearTimeout(n), Mr && cancelAnimationFrame(o), setTimeout(t);
  }, n = setTimeout(e, 100);
  Mr && (o = requestAnimationFrame(e));
}
function $n(t) {
  var o = q, e = t.__c;
  typeof e == "function" && (t.__c = void (-890 * -3 + -3153 + -21 * -23), e()), q = o;
}
function lo(t) {
  var o = q;
  t.__c = t.__(), q = o;
}
function Xo(t, o) {
  return !t || t.length !== o.length || o.some(function(e, n) {
    return e !== t[n];
  });
}
function _a(t, o) {
  return typeof o == "function" ? o(t) : o;
}
function eg(t, o) {
  for (var e in o)
    t[e] = o[e];
  return t;
}
function uo(t, o) {
  for (var e in t)
    if (e !== "__source" && !(e in o))
      return !(-2473 * -1 + 1506 + -3979);
  for (var n in o)
    if (n !== "__source" && t[n] !== o[n])
      return !(9620 + -28 * 202 + 1982 * -2);
  return !(-1024 * 1 + -1 * 7727 + 8752);
}
function Co(t) {
  this.props = t;
}
function _s(t, o) {
  function e(i) {
    var r = this.props.ref, a = r == i.ref;
    return !a && r && (r.call ? r(null) : r.current = null), o ? !o(this.props, i) || !a : uo(this.props, i);
  }
  function n(i) {
    return this.shouldComponentUpdate = e, fe(t, i);
  }
  return n.displayName = "Memo(" + (t.displayName || t.name) + ")", n.prototype.isReactComponent = !0, n.__f = !(-2 * -3563 + -326 * -1 + -2484 * 3), n;
}
(Co.prototype = new We()).isPureReactComponent = !(9695 + 601 * -1 + 9094 * -1), Co.prototype.shouldComponentUpdate = function(t, o) {
  return uo(this.props, t) || uo(this.state, o);
};
var Jr = S.__b;
S.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), Jr && Jr(t);
};
var e0 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 540 + -437 * 18 + -11237 * -1;
function tg(t) {
  function o(e) {
    var n = eg({}, e);
    return delete n.ref, t(n, e.ref || null);
  }
  return o.$$typeof = e0, o.render = o, o.prototype.isReactComponent = o.__f = !(-4 * 2500 + -1 * -6619 + 1 * 3381), o.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", o;
}
var Qr = function(t, o) {
  return t == null ? null : rt(rt(t).map(o));
}, t0 = { map: Qr, forEach: Qr, count: function(t) {
  return t ? rt(t).length : -685 + 1 * 685;
}, only: function(t) {
  var o = rt(t);
  if (-3659 * 1 + -1290 + 4950 !== o.length)
    throw "Children.only";
  return o[-3999 + -2473 * -2 + -1 * 947];
}, toArray: rt }, n0 = S.__e;
S.__e = function(t, o, e, n) {
  if (t.then) {
    for (var i, r = o; r = r.__; )
      if ((i = r.__c) && i.__c)
        return o.__e == null && (o.__e = e.__e, o.__k = e.__k), i.__c(t, o);
  }
  n0(t, o, e, n);
};
var zr = S.unmount;
function ng(t, o, e) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), t.__c.__H = null), (t = eg({}, t)).__c != null && (t.__c.__P === e && (t.__c.__P = o), t.__c = null), t.__k = t.__k && t.__k.map(function(n) {
    return ng(n, o, e);
  })), t;
}
function ig(t, o, e) {
  return t && e && (t.__v = null, t.__k = t.__k && t.__k.map(function(n) {
    return ig(n, o, e);
  }), t.__c && t.__c.__P === o && (t.__e && e.appendChild(t.__e), t.__c.__e = !(-9549 + 321 * 19 + 23 * 150), t.__c.__P = e)), t;
}
function qn() {
  this.__u = -6036 + 1 * -6962 + 97 * 134, this.t = null, this.__b = null;
}
function og(t) {
  var o = t.__.__c;
  return o && o.__a && o.__a(t);
}
function i0(t) {
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
    return fe(e, r);
  }
  return i.displayName = "Lazy", i.__f = !0, i;
}
function dn() {
  this.u = null, this.o = null;
}
S.unmount = function(t) {
  var o = t.__c;
  o && o.__R && o.__R(), o && 43 * -6 + 8419 * -1 + 8709 & t.__u && (t.type = null), zr && zr(t);
}, (qn.prototype = new We()).__c = function(t, o) {
  var e = o.__c, n = this;
  n.t == null && (n.t = []), n.t.push(e);
  var i = og(n.__v), r = !(-1 * -6271 + 9 * 1111 + -957 * 17), a = function() {
    r || (r = !(-6619 + -1 * -6619), e.__R = null, i ? i(g) : g());
  };
  e.__R = a;
  var g = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var s = n.state.__a;
        n.__v.__k[-27 * 97 + -9806 * 1 + -175 * -71] = ig(s, s.__c.__P, s.__c.__O);
      }
      var x;
      for (n.setState({ __a: n.__b = null }); x = n.t.pop(); )
        x.forceUpdate();
    }
  };
  n.__u++ || 5 * 1442 + -1485 + -5693 & o.__u || n.setState({ __a: n.__b = n.__v.__k[173 * 19 + 8533 + -11820] }), t.then(a, a);
}, qn.prototype.componentWillUnmount = function() {
  this.t = [];
}, qn.prototype.render = function(t, o) {
  if (this.__b) {
    if (this.__v.__k) {
      var e = document.createElement("div"), n = this.__v.__k[-179 * -9 + 2662 + -1 * 4273].__c;
      this.__v.__k[13 * -5 + 8471 + -467 * 18] = ng(this.__b, e, n.__O = n.__P);
    }
    this.__b = null;
  }
  var i = o.__a && fe(Le, null, t.fallback);
  return i && (i.__u &= -33), [fe(Le, null, o.__a ? null : t.children), i];
};
var $r = function(t, o, e) {
  if (++e[933 * -5 + 1 * 1884 + -2782 * -1] === e[3006 * -1 + -6367 + 7 * 1339] && t.o.delete(o), t.props.revealOrder && (t.props.revealOrder[-6020 + -2 * -4298 + -7 * 368] !== "t" || !t.o.size))
    for (e = t.u; e; ) {
      for (; e.length > -1348 + -361 * -4 + -93; )
        e.pop()();
      if (e[9653 + -2 * 2927 + -422 * 9] < e[-6919 * 1 + 227 * 5 + 5784])
        break;
      t.u = e = e[2];
    }
};
function o0(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function r0(t) {
  var o = this, e = t.i;
  o.componentWillUnmount = function() {
    Ct(null, o.l), o.l = null, o.i = null;
  }, o.i && o.i !== e && o.componentWillUnmount(), o.l || (o.i = e, o.l = { nodeType: 1, parentNode: e, childNodes: [], appendChild: function(n) {
    this.childNodes.push(n), o.i.appendChild(n);
  }, insertBefore: function(n, i) {
    this.childNodes.push(n), o.i.appendChild(n);
  }, removeChild: function(n) {
    this.childNodes.splice(this.childNodes.indexOf(n) >>> -5276 * -1 + -3702 + -13 * 121, 4657 + -925 * -7 + 11131 * -1), o.i.removeChild(n);
  } }), Ct(fe(o0, { context: o.context }, t.__v), o.l);
}
function a0(t, o) {
  var e = {};
  e.__v = t, e.i = o;
  var n = fe(r0, e);
  return n.containerInfo = o, n;
}
(dn.prototype = new We()).__a = function(t) {
  var o = this, e = og(o.__v), n = o.o.get(t);
  return n[-2935 * 1 + -263 + 1066 * 3]++, function(i) {
    var r = function() {
      o.props.revealOrder ? (n.push(i), $r(o, t, n)) : i();
    };
    e ? e(r) : r();
  };
}, dn.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var o = rt(t.children);
  t.revealOrder && t.revealOrder[8522 + -1 * -3151 + -11673] === "b" && o.reverse();
  for (var e = o.length; e--; )
    this.o.set(o[e], this.u = [-1 * 4006 + -5971 + 3 * 3326, -13030 + 10 * 1303, this.u]);
  return t.children;
}, dn.prototype.componentDidUpdate = dn.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(o, e) {
    $r(t, e, o);
  });
};
var rg = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || -7 * -14694 + -86158 + 43403, g0 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, s0 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, c0 = /[A-Z0-9]/g, I0 = typeof document < "u", x0 = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
};
function l0(t, o, e) {
  return o.__k == null && (o.textContent = ""), Ct(t, o), typeof e == "function" && e(), t ? t.__c : null;
}
function u0(t, o, e) {
  return No(t, o), typeof e == "function" && e(), t ? t.__c : null;
}
We.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(We.prototype, t, { configurable: !(-2258 * -4 + 7149 * 1 + -1471 * 11), get: function() {
    return this["UNSAFE_" + t];
  }, set: function(o) {
    var e = {};
    e.configurable = !0, e.writable = !(-179 * -19 + 3433 * -1 + 16 * 2), e.value = o, Object.defineProperty(this, t, e);
  } });
});
var qr = S.event;
function C0() {
}
function d0() {
  return this.cancelBubble;
}
function A0() {
  return this.defaultPrevented;
}
S.event = function(t) {
  return qr && (t = qr(t)), t.persist = C0, t.isPropagationStopped = d0, t.isDefaultPrevented = A0, t.nativeEvent = t;
};
var _n = {};
_n.enumerable = !(632 + -3 * 61 + 112 * -4), _n.configurable = !(4301 * -1 + 3478 + 823 * 1), _n.get = function() {
  return this.class;
};
var jo, p0 = _n, _r = S.vnode;
S.vnode = function(t) {
  typeof t.type == "string" && function(o) {
    var e = o.props, n = o.type, i = {};
    for (var r in e) {
      var a = e[r];
      if (!(r === "value" && "defaultValue" in e && a == null || I0 && r === "children" && n === "noscript" || r === "class" || r === "className")) {
        var g = r.toLowerCase();
        r === "defaultValue" && "value" in e && e.value == null ? r = "value" : r === "download" && !(-6193 + 115 * -34 + 10103) === a ? a = "" : g === "ondoubleclick" ? r = "ondblclick" : g !== "onchange" || n !== "input" && n !== "textarea" || x0(e.type) ? g === "onfocus" ? r = "onfocusin" : g === "onblur" ? r = "onfocusout" : s0.test(r) ? r = g : -(5261 * 1 + 1448 * -1 + -4 * 953) === n.indexOf("-") && g0.test(r) ? r = r.replace(c0, "-$&").toLowerCase() : a === null && (a = void (-8439 + 662 * -3 + 10425)) : g = r = "oninput", g === "oninput" && i[r = g] && (r = "oninputCapture"), i[r] = a;
      }
    }
    n == "select" && i.multiple && Array.isArray(i.value) && (i.value = rt(e.children).forEach(function(s) {
      s.props.selected = -(-988 * 3 + 2033 * 3 + -1567 * 2) != i.value.indexOf(s.props.value);
    })), n == "select" && i.defaultValue != null && (i.value = rt(e.children).forEach(function(s) {
      s.props.selected = i.multiple ? -(1 * 2406 + 2067 + 26 * -172) != i.defaultValue.indexOf(s.props.value) : i.defaultValue == s.props.value;
    })), e.class && !e.className ? (i.class = e.class, Object.defineProperty(i, "className", p0)) : (e.className && !e.class || e.class && e.className) && (i.class = i.className = e.className), o.props = i;
  }(t), t.$$typeof = rg, _r && _r(t);
};
var ea = S.__r;
S.__r = function(t) {
  ea && ea(t), jo = t.__c;
};
var ta = S.diffed;
S.diffed = function(t) {
  ta && ta(t);
  var o = t.props, e = t.__e;
  e != null && t.type === "textarea" && "value" in o && o.value !== e.value && (e.value = o.value == null ? "" : o.value), jo = null;
};
var ag = {};
ag.readContext = function(t) {
  return jo.__n[t.__c].props.value;
};
var gg = {};
gg.current = ag;
var sg = {};
sg.ReactCurrentDispatcher = gg;
var f0 = sg;
function h0(t) {
  return fe.bind(null, t);
}
function Bi(t) {
  return !!t && t.$$typeof === rg;
}
function m0(t) {
  return Bi(t) && t.type === Le;
}
function b0(t) {
  return Bi(t) ? To.apply(null, arguments) : t;
}
function y0(t) {
  return !!t.__k && (Ct(null, t), !(-6497 + -89 * -73));
}
function v0(t) {
  return t && (t.base || 3062 * 2 + 268 + 83 * -77 === t.nodeType && t) || null;
}
var B0 = function(t, o) {
  return t(o);
}, w0 = function(t, o) {
  return t(o);
}, S0 = Le;
function cg(t) {
  t();
}
function G0(t) {
  return t;
}
function Z0() {
  return [!(4586 + -917 * 5), cg];
}
var k0 = yi, H0 = Bi;
function K0(t, o) {
  var e = o(), n = je({ h: { __: e, v: o } }), i = n[-6835 + 5 * 1367].h, r = n[1 * -481 + -1055 * 1 + 1 * 1537];
  return yi(function() {
    i.__ = e, i.v = o, Qi(i) && r({ h: i });
  }, [t, e, o]), ye(function() {
    return Qi(i) && r({ h: i }), t(function() {
      Qi(i) && r({ h: i });
    });
  }, [t]), e;
}
function Qi(t) {
  var o, e, n = t.v, i = t.__;
  try {
    var r = n();
    return !((o = i) === (e = r) && (-441 + -55 * 61 + 73 * 52 !== o || (1 * 8759 + 974 + -9732) / o == (-2 * 3503 + -1 * 4782 + -1 * -11789) / e) || o != o && e != e);
  } catch {
    return !(3 * -1851 + -108 + 5661);
  }
}
var Y = {};
Y.useState = je, Y.useId = zs, Y.useReducer = qa, Y.useEffect = ye, Y.useLayoutEffect = yi, Y.useInsertionEffect = k0, Y.useTransition = Z0, Y.useDeferredValue = G0, Y.useSyncExternalStore = K0, Y.startTransition = cg, Y.useRef = nn, Y.useImperativeHandle = Qs, Y.useMemo = Ue, Y.useCallback = Ii, Y.useContext = vi, Y.useDebugValue = xo, Y.version = "17.0.2", Y.Children = t0, Y.render = l0, Y.hydrate = u0, Y.unmountComponentAtNode = y0, Y.createPortal = a0, Y.createElement = fe, Y.createContext = Fo, Y.createFactory = h0, Y.cloneElement = b0, Y.createRef = Vs, Y.Fragment = Le, Y.isValidElement = Bi, Y.isElement = H0, Y.isFragment = m0, Y.findDOMNode = v0, Y.Component = We, Y.PureComponent = Co, Y.memo = _s, Y.forwardRef = tg, Y.flushSync = w0, Y.unstable_batchedUpdates = B0, Y.StrictMode = S0, Y.Suspense = qn, Y.SuspenseList = dn, Y.lazy = i0, Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = f0;
var Zt = Y, W0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function O0(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function R0(t) {
  return t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function V0(t) {
  return t && Object.prototype.hasOwnProperty.call(t, "default") && Object.keys(t).length === 1 ? t.default : t;
}
function E0(t) {
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
const P0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: W0,
  getAugmentedNamespace: E0,
  getDefaultExportFromCjs: O0,
  getDefaultExportFromNamespaceIfNotNamed: V0,
  getDefaultExportFromNamespaceIfPresent: R0
}, Symbol.toStringTag, { value: "Module" }));
var Y0 = function(o, e, n, i) {
  var r = n ? n.call(i, o, e) : void 0;
  if (r !== void (-2934 + -253 * 35 + 11789))
    return !!r;
  if (o === e)
    return !0;
  if (typeof o != "object" || !o || typeof e != "object" || !e)
    return !1;
  var a = Object.keys(o), g = Object.keys(e);
  if (a.length !== g.length)
    return !1;
  for (var s = Object.prototype.hasOwnProperty.bind(e), x = 3 * 283 + -2 * -173 + 239 * -5; x < a.length; x++) {
    var C = a[x];
    if (!s(C))
      return !1;
    var u = o[C], p = e[C];
    if (r = n ? n.call(i, u, p, C) : void (6532 + 107 * -17 + -4713), r === !1 || r === void (-9178 * -1 + 1 * -4907 + -4271) && u !== p)
      return !1;
  }
  return !0;
};
const L0 = P0.getDefaultExportFromCjs(Y0);
var $ = "-ms-", mn = "-moz-", J = "-webkit-", Ig = "comm", wi = "rule", Uo = "decl", N0 = "@import", xg = "@keyframes", T0 = "@layer", F0 = Math.abs, Mo = String.fromCharCode, Ao = Object.assign;
function D0(t, o) {
  return le(t, 7030 + 1047 * -8 + 1346) ^ 3 * -827 + -4103 + 1 * 6629 ? (((o << 7311 * -1 + 346 * 26 + -1683 ^ le(t, -4526 * 1 + 379 * 13 + 401 * -1)) << -1 * 1223 + -11 * 594 + 7759 ^ le(t, -3 * 271 + 1732 + -918)) << 2 * 1978 + -1402 * -4 + -9562 ^ le(t, 2)) << -3 * 387 + 1 * -3027 + -10 * -419 ^ le(t, 1 * -5237 + 1697 * -5 + 13725) : -1 * 701 + -2155 + 7 * 408;
}
function lg(t) {
  return t.trim();
}
function it(t, o) {
  return (t = o.exec(t)) ? t[969 + -8111 * -1 + -1816 * 5] : t;
}
function N(t, o, e) {
  return t.replace(o, e);
}
function ei(t, o) {
  return t.indexOf(o);
}
function le(t, o) {
  return t.charCodeAt(o) | 2161 + -73 * 42 + 905;
}
function Qt(t, o, e) {
  return t.slice(o, e);
}
function Xe(t) {
  return t.length;
}
function ug(t) {
  return t.length;
}
function An(t, o) {
  return o.push(t), t;
}
function X0(t, o) {
  return t.map(o).join("");
}
function na(t, o) {
  return t.filter(function(e) {
    return !it(e, o);
  });
}
var Si = 9534 + -2031 * 3 + -3440, zt = 4820 + -79 * 61, Cg = -4907 * -1 + -497 * 7 + -1428, Re = -103 * 22 + -7977 * -1 + -1 * 5711, ge = 5323 + -193 * 4 + -4551, on = "";
function Gi(t, o, e, n, i, r, a, g) {
  var s = {};
  return s.value = t, s.root = o, s.parent = e, s.type = n, s.props = i, s.children = r, s.line = Si, s.column = zt, s.length = a, s.return = "", s.siblings = g, s;
}
function ct(t, o) {
  return Ao(Gi("", null, null, "", null, null, -8482 + -56 * 174 + 18226, t.siblings), t, { length: -t.length }, o);
}
function Tt(t) {
  for (; t.root; )
    t = ct(t.root, { children: [t] });
  An(t, t.siblings);
}
function j0() {
  return ge;
}
function U0() {
  return ge = Re > 0 ? le(on, --Re) : -8159 + -1 * -8159, zt--, ge === 1198 * 4 + -7426 + 2644 && (zt = 1, Si--), ge;
}
function Ye() {
  return ge = Re < Cg ? le(on, Re++) : 3728 + 2732 * -1 + -996, zt++, ge === 3893 * -2 + 1 * -9071 + 101 * 167 && (zt = 29 * -131 + 41 * 38 + 2242, Si++), ge;
}
function St() {
  return le(on, Re);
}
function ti() {
  return Re;
}
function Zi(t, o) {
  return Qt(on, t, o);
}
function po(t) {
  switch (t) {
    case -7424 + -449 * -1 + 6975:
    case 9021 + -1031 * -4 + 16 * -821:
    case -1273 + 1 * -4413 + 5696:
    case -2 * 1843 + -9663 + 13362:
    case -389 * 15 + -3456 + 9323:
      return 7397 + -24 * 308;
    case -21 * 91 + -1951 + 3895:
    case -10 * -818 + 7390 + -15527 * 1:
    case -13145 + 13189 * 1:
    case 47:
    case 8 * 274 + 1 * -213 + -27 * 71:
    case 3001 * 3 + -9237 + 2 * 149:
    case 4406 + -1070 * 4:
    case -9839 + -1900 * 3 + -1418 * -11:
    case 1 * 7127 + -15 * 233 + -3509:
    case 113 * 17 + -2388 * 1 + 1 * 592:
      return 2186 + 31 * -58 + -384;
    case 7137 * -1 + 23 * 254 + 1353:
      return 4702 + 127 * -37;
    case 302 * -24 + -1 * 1054 + -4 * -2084:
    case -33 * 263 + 3931 + 4787:
    case -83 + -1658 * -1 + 1 * -1535:
    case 71 * -48 + -3441 + 6940:
      return 2869 * -3 + 33 * 274 + -433 * 1;
    case 2238 + 2129 * -2 + 2061:
    case -1721 * 3 + -3122 + -59 * -142:
      return 9918 + -97 * 41 + -5940;
  }
  return 4265 * 1 + -3101 + -6 * 194;
}
function M0(t) {
  return Si = zt = -3323 + -4 * -831, Cg = Xe(on = t), Re = 11201 + -1 * 11201, [];
}
function J0(t) {
  return on = "", t;
}
function zi(t) {
  return lg(Zi(Re - (3 * 2389 + 1 * -89 + -1 * 7077), fo(t === 91 ? t + (9235 * 1 + 922 * 6 + -14765) : t === -1 * -6803 + -2708 * -2 + 641 * -19 ? t + (5 * 1736 + 503 * 3 + -10188 * 1) : t)));
}
function Q0(t) {
  for (; (ge = St()) && ge < 33; )
    Ye();
  return po(t) > -3418 * -2 + -2 * 309 + -6216 || po(ge) > 727 * -3 + 2636 + 226 * -2 ? "" : " ";
}
function z0(t, o) {
  for (; --o && Ye() && !(ge < -4 * 1483 + 1 * 2513 + 3467 || ge > -1 * 6829 + 1 * -4945 + 1 * 11876 || ge > 6592 + 1 * -6535 && ge < 229 * 25 + -6985 * 1 + -25 * -53 || ge > -1806 * -1 + 43 * 34 + 3 * -1066 && ge < 1 * 2521 + 539 * -13 + 4583); )
    ;
  return Zi(t, ti() + (o < -1 * -7053 + -2765 + 2141 * -2 && St() == -5920 + -96 * -62 && Ye() == 4 * 663 + 1 * -1667 + -953));
}
function fo(t) {
  for (; Ye(); )
    switch (ge) {
      case t:
        return Re;
      case -8707 * -1 + -3 * 1315 + -4728:
      case 11805 + 1 * -11766:
        t !== 4245 + 13 * -615 + -86 * -44 && t !== 39 && fo(ge);
        break;
      case -1 * 470 + 5843 + -5333:
        t === 8068 + -1237 * -1 + 3088 * -3 && fo(t);
        break;
      case 378 * 3 + -27 * -293 + -1 * 8953:
        Ye();
        break;
    }
  return Re;
}
function $0(t, o) {
  for (; Ye() && t + ge !== 29 * 207 + 1 * 5111 + -11067 + (-1 * -9103 + -4253 + 2 * -2420); )
    if (t + ge === -1624 + 1120 * 4 + -2814 + (-4309 * 1 + 3 * -3259 + 14128) && St() === 434 + 1 * -5331 + -48 * -103)
      break;
  return "/*" + Zi(o, Re - 1) + "*" + Mo(t === 7986 + 11 * -461 + 12 * -239 ? t : Ye());
}
function q0(t) {
  for (; !po(St()); )
    Ye();
  return Zi(t, Re);
}
function _0(t) {
  return J0(ni("", null, null, null, [""], t = M0(t), 3721 * 1 + 7815 + -7 * 1648, [-2659 * 1 + -5144 + 2601 * 3], t));
}
function ni(t, o, e, n, i, r, a, g, s) {
  for (var x = 0, C = -6047 * 1 + -3982 + 10029, u = a, p = 0, f = -1267 * -6 + 9969 + -17571 * 1, v = -6087 + 401 * 3 + 4884, G = 5984 + -1 * 8997 + 3014, E = 15617 + 488 * -32, H = 10397 + 2599 * -4, k = 7178 + -2857 * -1 + 3345 * -3, L = "", z = i, F = r, U = n, Z = L; E; )
    switch (v = k, k = Ye()) {
      case 3794 + -1 * -4955 + -2903 * 3:
        if (v != -1 * 7229 + 9296 + -1959 && le(Z, u - (1621 * 5 + -3478 + -4626)) == 58) {
          ei(Z += N(zi(k), "&", "&\f"), "&\f") != -(-1 * -9566 + -3 * 3277 + -14 * -19) && (H = -1);
          break;
        }
      case 1 * -8311 + 5121 + 806 * 4:
      case -17126 + 1 * 17165:
      case 91:
        Z += zi(k);
        break;
      case 1570 + -1561 * 1:
      case -17299 + -1 * -17309:
      case 13:
      case 32:
        Z += Q0(v);
        break;
      case 9861 + -25 * -37 + 10694 * -1:
        Z += z0(ti() - (-7 * -1393 + 7295 + -35 * 487), 17178 + 7 * -2453);
        continue;
      case -5751 + 31 * -77 + 8185:
        switch (St()) {
          case 5665 + 7540 * -1 + 3 * 639:
          case -1511 + 2423 * -1 + 3981:
            An(ec($0(Ye(), ti()), o, e, s), s);
            break;
          default:
            Z += "/";
        }
        break;
      case (-1 * 9827 + -4346 + 14296 * 1) * G:
        g[x++] = Xe(Z) * H;
      case (3 * -921 + -9 * -733 + -3709) * G:
      case 59:
      case 89 * -21 + -1 * -9121 + 259 * -28:
        switch (k) {
          case -401 + 127 * -34 + -3 * -1573:
          case 1857 + -433 * 4:
            E = 504 * 3 + 171 * -58 + 8406;
          case 1676 + 62 * 9 + -2175 + C:
            H == -(11001 + 440 * -25) && (Z = N(Z, /\f/g, "")), f > 4953 + 1 * -5970 + 1017 && Xe(Z) - u && An(f > 35 * -209 + 7248 + -99 * -1 ? oa(Z + ";", n, e, u - (183 * -31 + -149 * 3 + -1 * -6121), s) : oa(N(Z, " ", "") + ";", n, e, u - (22 * 383 + -2679 + 5745 * -1), s), s);
            break;
          case -8034 + 2 * -2302 + -12697 * -1:
            Z += ";";
          default:
            if (An(U = ia(Z, o, e, x, C, i, g, L, z = [], F = [], u, r), r), k === 2167 + -2044 * 1)
              if (C === -11 * 707 + 9036 + -1259)
                ni(Z, o, U, U, z, r, u, g, F);
              else
                switch (p === 3833 * 2 + 8197 + 1 * -15764 && le(Z, -5213 + -1 * -5225 + -9) === 110 ? 6585 + -1655 * -1 + -10 * 814 : p) {
                  case -1744 + 1 * 1844:
                  case -264 * -15 + -66 * -29 + 186 * -31:
                  case -2641 + -419 * 15 + 9035:
                  case 3089 * 1 + -3968 + 14 * 71:
                    ni(t, U, U, n && An(ia(t, U, U, 2281 + -2281 * 1, 0, i, g, L, i, z = [], u, F), F), i, F, u, g, n ? z : F);
                    break;
                  default:
                    ni(Z, U, U, U, [""], F, 0, g, F);
                }
        }
        x = C = f = 70 * 125 + 3809 * -1 + -27 * 183, G = H = 1, L = Z = "", u = a;
        break;
      case 4947 + 83 * 10 + -133 * 43:
        u = -271 * -2 + -7586 + 7045 + Xe(Z), f = v;
      default:
        if (G < 4919 * 2 + 4063 + 4 * -3475) {
          if (k == 4706 + -1 * -8059 + 6 * -2107)
            --G;
          else if (k == -2484 + -2609 * -1 && G++ == -1 * 941 + 3 * -2898 + 9635 && U0() == 1 * -41 + 1386 + -1220)
            continue;
        }
        switch (Z += Mo(k), k * G) {
          case -3353 + 1 * 6918 + -1 * 3527:
            H = C > -1 * -8665 + -1 * -458 + -9123 ? -347 * 17 + 559 * 13 + -1367 : (Z += "\f", -1);
            break;
          case 7020 + 1 * -1633 + -1 * 5343:
            g[x++] = (Xe(Z) - 1) * H, H = 1;
            break;
          case 2689 * -1 + 17 * -539 + 11916:
            St() === 45 && (Z += zi(Ye())), p = St(), C = u = Xe(L = Z += q0(ti())), k++;
            break;
          case 9377 + -223 * 11 + -6879:
            v === -390 + 1486 * -5 + 7865 && Xe(Z) == 2 && (G = 2 * 3739 + 4 * 267 + 8546 * -1);
        }
    }
  return r;
}
function ia(t, o, e, n, i, r, a, g, s, x, C, u) {
  for (var p = i - 1, f = i === -3814 + -958 * 4 + 7646 ? r : [""], v = ug(f), G = 9022 * -1 + -1 * -5646 + 3376, E = 0, H = 0; G < n; ++G)
    for (var k = 0, L = Qt(t, p + (-2347 * 3 + 7729 + -687), p = F0(E = a[G])), z = t; k < v; ++k)
      (z = lg(E > -11 * 123 + -8461 + 9814 ? f[k] + " " + L : N(L, /&\f/g, f[k]))) && (s[H++] = z);
  return Gi(t, o, e, i === 9847 * -1 + 8572 + 1275 ? wi : g, s, x, C, u);
}
function ec(t, o, e, n) {
  return Gi(t, o, e, Ig, Mo(j0()), Qt(t, 3110 + 9463 * 1 + 967 * -13, -2), 7798 + 914 * -2 + -5970, n);
}
function oa(t, o, e, n, i) {
  return Gi(t, o, e, Uo, Qt(t, 0, n), Qt(t, n + (8576 + -11 * 853 + 808), -(-3403 + 463 * 15 + 3541 * -1)), n, i);
}
function dg(t, o, e) {
  switch (D0(t, o)) {
    case -8039 * 1 + -3088 + -16230 * -1:
      return J + "print-" + t + t;
    case 21 * 497 + -1580 + -3120:
    case -2086 + -516 * -16 + -1969:
    case -3207 + -3081 * 3 + 1 * 15627:
    case 3433:
    case -1 * 2614 + 7916 + -3661:
    case 2417 * -3 + -2347 * 1 + -2811 * -5:
    case -1 * 8483 + 83 * 51 + 1 * 7171:
    case 1711 + 3 * 1287:
    case 184 * 46 + -1689 + -419:
    case 5739 * -1 + -843 + 2071 * 6:
    case 3561 + -55 * -17 + -1305:
    case 6645:
    case -365 * 19 + -3461 + 13401:
    case 4444 * 2 + -1831 * -2 + -6159 * 1:
    case -2 * 5833 + -308 * 7 + 19701:
    case 5623:
    case 2068 + 1 * 4067:
    case -3403 * -1 + 1 * 2647 + 1 * -1451:
    case 4855:
    case -1 * -9777 + -1 * -1113 + -6675:
    case 318 + -8746 * 1 + 14817:
    case 2426 * 4 + 1553 * -3 + -4 * -16:
    case -41 * 151 + 3 * -499 + 1 * 13053:
    case -163 * -24 + 7116 + 5407 * -1:
    case -4 * 723 + 5724 + 997:
      return J + t + t;
    case -7147 + 2968 * 2 + -120 * -50:
      return mn + t + t;
    case 1491 + -1 * 6891 + 10749:
    case 3688 + 3 * 186:
    case -6449 + -81 * -139:
    case -7571 + 353 * 10 + 11009:
    case -1 * -7873 + -6694 + 1 * 1577:
      return J + t + mn + t + $ + t + t;
    case -121 * -39 + -6162 + 7379:
      switch (le(t, o + (8373 + 2 * -3062 + -373 * 6))) {
        case -1 * -229 + -9689 * 1 + -4787 * -2:
          return J + t + $ + N(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        case -8379 + -2936 * 3 + -5 * -3459:
          return J + t + $ + N(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        case 19 * -347 + -3928 * -2 + 2 * -609:
          return J + t + $ + N(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    case 6828:
    case -9937 + 71 * 70 + 9235:
    case 8149 * 1 + -5 * 1090 + 204:
      return J + t + $ + t + t;
    case -5587 * 1 + -23 * 31 + 1385 * 9:
      return J + t + $ + "flex-" + t + t;
    case -1 * -7160 + -5721 * 1 + 3748:
      return J + t + N(t, /(\w+).+(:[^]+)/, J + "box-$1$2" + $ + "flex-$1$2") + t;
    case -9491 + -421 * 13 + 1 * 20407:
      return J + t + $ + "flex-item-" + N(t, /flex-|-self/g, "") + (it(t, /flex-|baseline/) ? "" : $ + "grid-row-" + N(t, /flex-|-self/g, "")) + t;
    case 7 * -1117 + 9056 + 3438:
      return J + t + $ + "flex-line-pack" + N(t, /align-content|flex-|-self/g, "") + t;
    case -6197 + -23 * -16 + 11377:
      return J + t + $ + N(t, "shrink", "negative") + t;
    case -9890 + 728 * 9 + 8630:
      return J + t + $ + N(t, "basis", "preferred-size") + t;
    case 6712 + 22 * -135 + -2 * -1159:
      return J + "box-" + N(t, "-grow", "") + J + t + $ + N(t, "grow", "positive") + t;
    case -3 * -413 + -9446 + -7 * -1823:
      return J + N(t, /([^-])(transform)/g, "$1" + J + "$2") + t;
    case -9581 + -12 * 130 + 17328:
      return N(N(N(t, /(zoom-|grab)/, J + "$1"), /(image-set)/, J + "$1"), t, "") + t;
    case -970 * -8 + -1 * 8567 + 1 * 6302:
    case -2 * -2253 + -3459 + 2912:
      return N(t, /(image-set\([^]*)/, J + "$1$`$1");
    case -2 * 2893 + 439 * 4 + 8998:
      return N(N(t, /(.+:)(flex-)?(.*)/, J + "box-pack:$3" + $ + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + J + t + t;
    case 446 * -3 + 2583 + 2955:
      if (!it(t, /flex-|baseline/))
        return $ + "grid-column-align" + Qt(t, o) + t;
      break;
    case -4283 * 2 + 9256 + 1902:
    case -3279 + 1 * 6639:
      return $ + N(t, "template-", "") + t;
    case -606 * 1 + -9292 + -37 * -386:
    case 4370 + 1543 * 2 + 10 * -384:
      return e && e.some(function(n, i) {
        return o = i, it(n.props, /grid-\w+-end/);
      }) ? ~ei(t + (e = e[o].value), "span") ? t : $ + N(t, "-start", "") + t + $ + "grid-row-span:" + (~ei(e, "span") ? it(e, /\d+/) : +it(e, /\d+/) - +it(t, /\d+/)) + ";" : $ + N(t, "-start", "") + t;
    case 9317 + 4421 * -1:
    case -543 * 4 + 7560 + 10 * -126:
      return e && e.some(function(n) {
        return it(n.props, /grid-\w+-start/);
      }) ? t : $ + N(N(t, "-end", "-span"), "span ", "") + t;
    case 1565 + -1 * -2530:
    case -9775 + -1637 * -2 + -10084 * -1:
    case 4068:
    case 2532:
      return N(t, /(.+)-inline(.+)/, J + "$1$2") + t;
    case -3695 + 4 * -2302 + 21019:
    case 1371 + 3 * 63 + -5499 * -1:
    case 1331 + -1 * 3667 + 8089 * 1:
    case -13248 + -3 * -6261:
    case -4 * -954 + -3800 * -1 + -167 * 13:
    case -149 * -12 + 2 * -1465 + 6843:
    case -4111 + 7 * 451 + -841 * -7:
    case 4677:
    case -4565 + -1091 * 4 + 7231 * 2:
    case 7782 + 1 * -1993:
    case -3 * 1759 + 8080 + 2218:
    case 9489 * 1 + -160 * -23 + 4202 * -2:
      if (Xe(t) - (-32 + -1979 * 5 + -4964 * -2) - o > -4567 + 7 * 627 + 184)
        switch (le(t, o + (-1 * 2776 + 5693 + -2916 * 1))) {
          case -342 * 3 + 17 * -454 + -13 * -681:
            if (le(t, o + (6532 + 342 * -16 + -1056 * 1)) !== -48 * -67 + -241 * 2 + 1 * -2689)
              break;
          case 7769 + 41 * 105 + -11972:
            return N(t, /(.+:)(.+)-([^]+)/, "$1" + J + "$2-$3$1" + mn + (le(t, o + (-8523 + 215 * 41 + -289)) == -3668 + -10 * 732 + 11096 ? "$3" : "$2-$3")) + t;
          case 183 * -1 + 5670 + -5372:
            return ~ei(t, "stretch") ? dg(N(t, "stretch", "fill-available"), o, e) + t : t;
        }
      break;
    case -1659 + 7 * 973:
    case 4503 + 109 * 13:
      return N(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, i, r, a, g, s, x) {
        return $ + i + ":" + r + x + (a ? $ + i + "-span:" + (g ? s : +s - +r) + x : "") + t;
      });
    case 2979 + 607 * 11 + -4707:
      if (le(t, o + (-166 * 8 + 8232 + -6898)) === -9779 + -396 * -25)
        return N(t, ":", ":" + J) + t;
      break;
    case -547 * -14 + 3801 + -5015:
      switch (le(t, le(t, 8701 + 2 * -77 + 53 * -161) === 2 * 1129 + -6934 + 4721 ? 8887 + -463 * 7 + 1407 * -4 : 1 * 3710 + -1015 * -4 + -7759)) {
        case 181 * -8 + -1920 + 3488:
          return N(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + J + (le(t, -6587 * -1 + -28 + -5 * 1309) === 2022 * -3 + -9488 + 1 * 15599 ? "inline-" : "") + "box$3$1" + J + "$2$3$1" + $ + "$2box$3") + t;
        case -87 * -12 + 3523 * -1 + 2579:
          return N(t, ":", ":" + $) + t;
      }
      break;
    case -1469 + 8830 * 1 + -1642:
    case 1 * 4581 + 1318 + 12 * -271:
    case 6261 + 6 * 1291 + -11872:
    case 3519 + 3 * 2579 + -7329:
    case -489 + 960 * 3:
      return N(t, "scroll-", "scroll-snap-") + t;
  }
  return t;
}
function xi(t, o) {
  for (var e = "", n = 95 * -67 + -1528 * -2 + -1 * -3309; n < t.length; n++)
    e += o(t[n], n, t, o) || "";
  return e;
}
function tc(t, o, e, n) {
  switch (t.type) {
    case T0:
      if (t.children.length)
        break;
    case N0:
    case Uo:
      return t.return = t.return || t.value;
    case Ig:
      return "";
    case xg:
      return t.return = t.value + "{" + xi(t.children, n) + "}";
    case wi:
      if (!Xe(t.value = t.props.join(",")))
        return "";
  }
  return Xe(e = xi(t.children, n)) ? t.return = t.value + "{" + e + "}" : "";
}
function nc(t) {
  var o = ug(t);
  return function(e, n, i, r) {
    for (var a = "", g = -18 * -71 + -1 * -7253 + -449 * 19; g < o; g++)
      a += t[g](e, n, i, r) || "";
    return a;
  };
}
function ic(t) {
  return function(o) {
    o.root || (o = o.return) && t(o);
  };
}
function oc(t, o, e, n) {
  if (t.length > -(12 * -668 + 14 * 419 + -3 * -717) && !t.return)
    switch (t.type) {
      case Uo:
        t.return = dg(t.value, t.length, e);
        return;
      case xg:
        return xi([ct(t, { value: N(t.value, "@", "@" + J) })], n);
      case wi:
        if (t.length)
          return X0(e = t.props, function(i) {
            switch (it(i, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Tt(ct(t, { props: [N(i, /:(read-\w+)/, ":" + mn + "$1")] }));
                var r = {};
                r.props = [i], Tt(ct(t, r)), Ao(t, { props: na(e, n) });
                break;
              case "::placeholder":
                Tt(ct(t, { props: [N(i, /:(plac\w+)/, ":" + J + "input-$1")] })), Tt(ct(t, { props: [N(i, /:(plac\w+)/, ":" + mn + "$1")] })), Tt(ct(t, { props: [N(i, /:(plac\w+)/, $ + "input-$1")] }));
                var a = {};
                a.props = [i], Tt(ct(t, a)), Ao(t, { props: na(e, n) });
                break;
            }
            return "";
          });
    }
}
var P = {};
P.animationIterationCount = 1, P.aspectRatio = 1, P.borderImageOutset = 1, P.borderImageSlice = 1, P.borderImageWidth = 1, P.boxFlex = 1, P.boxFlexGroup = 1, P.boxOrdinalGroup = 1, P.columnCount = 1, P.columns = 1, P.flex = 1, P.flexGrow = 1, P.flexPositive = 1, P.flexShrink = 1, P.flexNegative = 1, P.flexOrder = 1, P.gridRow = 1, P.gridRowEnd = 1, P.gridRowSpan = 1, P.gridRowStart = 1, P.gridColumn = 1, P.gridColumnEnd = 1, P.gridColumnSpan = 1, P.gridColumnStart = 1, P.msGridRow = 1, P.msGridRowSpan = 1, P.msGridColumn = 1, P.msGridColumnSpan = 1, P.fontWeight = 1, P.lineHeight = 1, P.opacity = 1, P.order = 1, P.orphans = 1, P.tabSize = 1, P.widows = 1, P.zIndex = 1, P.zoom = 1, P.WebkitLineClamp = 1, P.fillOpacity = 1, P.floodOpacity = 1, P.stopOpacity = 1, P.strokeDasharray = 1, P.strokeDashoffset = 1, P.strokeMiterlimit = 1, P.strokeOpacity = 1, P.strokeWidth = 1;
var rc = P, j = {}, kt = typeof process < "u" && void (-6689 + -1 * -3456 + -53 * -61) !== j && (j.REACT_APP_SC_ATTR || j.SC_ATTR) || "data-styled", Jo = typeof window < "u" && "HTMLElement" in window, ac = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (-967 + 1 * 967) !== j && void (-773 * -2 + 9872 + -11418) !== j.REACT_APP_SC_DISABLE_SPEEDY && j.REACT_APP_SC_DISABLE_SPEEDY !== "" ? j.REACT_APP_SC_DISABLE_SPEEDY !== "false" && j.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (-960 + -4 * 497 + 2948) !== j && void (-6600 + 1406 * 2 + -1894 * -2) !== j.SC_DISABLE_SPEEDY && j.SC_DISABLE_SPEEDY !== "" ? j.SC_DISABLE_SPEEDY !== "false" && j.SC_DISABLE_SPEEDY : j.NODE_ENV !== "production"), ra = /invalid hook call/i, Fn = /* @__PURE__ */ new Set(), gc = function(t, o) {
  if (j.NODE_ENV !== "production") {
    var e = o ? ' with the id of "'.concat(o, '"') : "", n = "The component ".concat(t).concat(e, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, i = console.error;
    try {
      var r = !0;
      console.error = function(a) {
        for (var g = [], s = 1; s < arguments.length; s++)
          g[s - (-9046 + 135 * -46 + -209 * -73)] = arguments[s];
        ra.test(a) ? (r = !1, Fn.delete(n)) : i.apply(void (-191 * 8 + 8481 + -17 * 409), Mt([a], g, !1));
      }, nn(), r && !Fn.has(n) && (console.warn(n), Fn.add(n));
    } catch (a) {
      ra.test(a.message) && Fn.delete(n);
    } finally {
      console.error = i;
    }
  }
}, ki = Object.freeze([]), $t = Object.freeze({});
function sc(t, o, e) {
  return void (4376 * -1 + 3529 * 1 + 77 * 11) === e && (e = $t), t.theme !== e.theme && t.theme || o || e.theme;
}
var ho = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), cc = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ic = /(^-|-$)/g;
function aa(t) {
  return t.replace(cc, "-").replace(Ic, "");
}
var xc = /(a)(d)/gi, ga = function(t) {
  return String.fromCharCode(t + (t > -10 * 419 + 4197 * 2 + -4179 ? -4220 + 1 * 4067 + 192 : 9879 * 1 + -7235 + -2547));
};
function mo(t) {
  var o, e = "";
  for (o = Math.abs(t); o > 52; o = o / 52 | -8421 + -1 * -2012 + 13 * 493)
    e = ga(o % (5999 + -5947 * 1)) + e;
  return (ga(o % (7832 + -16 * 402 + 4 * -337)) + e).replace(xc, "$1-$2");
}
var $i, vt = function(t, o) {
  for (var e = o.length; e; )
    t = (-17311 + 1084 * 16) * t ^ o.charCodeAt(--e);
  return t;
}, Ag = function(t) {
  return vt(2975 + -15 * 42 + 3036, t);
};
function lc(t) {
  return mo(Ag(t) >>> 19 * 139 + -1 * -1658 + -4299);
}
function pg(t) {
  return j.NODE_ENV !== "production" && typeof t == "string" && t || t.displayName || t.name || "Component";
}
function qi(t) {
  return typeof t == "string" && (j.NODE_ENV === "production" || t.charAt(2308 + 1 * -6597 + 4289) === t.charAt(-4603 + -2 * 3294 + 11191).toLowerCase());
}
var He = {};
He.childContextTypes = !0, He.contextType = !0, He.contextTypes = !0, He.defaultProps = !0, He.displayName = !0, He.getDefaultProps = !0, He.getDerivedStateFromError = !0, He.getDerivedStateFromProps = !0, He.mixins = !0, He.propTypes = !0, He.type = !0;
var It = {};
It.name = !0, It.length = !0, It.prototype = !0, It.caller = !0, It.callee = !0, It.arguments = !0, It.arity = !0;
var bt = {};
bt.$$typeof = !0, bt.compare = !0, bt.defaultProps = !0, bt.displayName = !0, bt.propTypes = !0, bt.type = !0;
var Ft = {};
Ft.$$typeof = !0, Ft.render = !0, Ft.defaultProps = !0, Ft.displayName = !0, Ft.propTypes = !0;
var fg = typeof Symbol == "function" && Symbol.for, hg = fg ? Symbol.for("react.memo") : -25272 + 31 * -2807 + 36 * 4789, uc = fg ? Symbol.for("react.forward_ref") : 159616 + 144 * -691, Cc = He, dc = It, mg = bt, Ac = (($i = {})[uc] = Ft, $i[hg] = mg, $i);
function sa(t) {
  return ("type" in (o = t) && o.type.$$typeof) === hg ? mg : "$$typeof" in t ? Ac[t.$$typeof] : Cc;
  var o;
}
var pc = Object.defineProperty, fc = Object.getOwnPropertyNames, ca = Object.getOwnPropertySymbols, hc = Object.getOwnPropertyDescriptor, mc = Object.getPrototypeOf, Ia = Object.prototype;
function bg(t, o, e) {
  if (typeof o != "string") {
    if (Ia) {
      var n = mc(o);
      n && n !== Ia && bg(t, n, e);
    }
    var i = fc(o);
    ca && (i = i.concat(ca(o)));
    for (var r = sa(t), a = sa(o), g = 230 + 1 * -749 + -1 * -519; g < i.length; ++g) {
      var s = i[g];
      if (!(s in dc || e && e[s] || a && s in a || r && s in r)) {
        var x = hc(o, s);
        try {
          pc(t, s, x);
        } catch {
        }
      }
    }
  }
  return t;
}
function qt(t) {
  return typeof t == "function";
}
function Qo(t) {
  return typeof t == "object" && "styledComponentId" in t;
}
function wt(t, o) {
  return t && o ? "".concat(t, " ").concat(o) : t || o || "";
}
function xa(t, o) {
  if (3010 + 1 * 6220 + -10 * 923 === t.length)
    return "";
  for (var e = t[-1 * 871 + 1 * 6847 + -5976], n = 1; n < t.length; n++)
    e += o ? o + t[n] : t[n];
  return e;
}
function _t(t) {
  return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
}
function bo(t, o, e) {
  if (void (-5327 + -586 * -9 + 53) === e && (e = !1), !e && !_t(t) && !Array.isArray(t))
    return o;
  if (Array.isArray(o))
    for (var n = -6979 + 29 * -61 + 8748; n < o.length; n++)
      t[n] = bo(t[n], o[n]);
  else if (_t(o))
    for (var n in o)
      t[n] = bo(t[n], o[n]);
  return t;
}
function zo(t, o) {
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
var bc = j.NODE_ENV !== "production" ? ce : {};
function yc() {
  for (var t = [], o = 7868 + 1 * 4678 + -738 * 17; o < arguments.length; o++)
    t[o] = arguments[o];
  for (var e = t[89 * -57 + 29 * 70 + 3043], n = [], i = 1241 * -1 + -9846 + 11088, r = t.length; i < r; i += 1)
    n.push(t[i]);
  return n.forEach(function(a) {
    e = e.replace(/%[a-z]/, a);
  }), e;
}
function rn(t) {
  for (var o = [], e = 1 * 8399 + 3175 + 71 * -163; e < arguments.length; e++)
    o[e - 1] = arguments[e];
  return j.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(o.length > 4859 + 1 * 201 + 460 * -11 ? " Args: ".concat(o.join(", ")) : "")) : new Error(yc.apply(void (-5 * 1871 + 4 * -1136 + 3 * 4633), Mt([bc[t]], o, !1)).trim());
}
var vc = function() {
  function t(o) {
    this.groupSizes = new Uint32Array(-2 * 559 + 3049 + -1419), this.length = -789 * -5 + -8 * 647 + 83 * 21, this.tag = o;
  }
  return t.prototype.indexOfGroup = function(o) {
    for (var e = 3545 * 2 + -155 * -21 + 1 * -10345, n = 4105 + -821 * 5; n < o; n++)
      e += this.groupSizes[n];
    return e;
  }, t.prototype.insertRules = function(o, e) {
    if (o >= this.groupSizes.length) {
      for (var n = this.groupSizes, i = n.length, r = i; o >= r; )
        if ((r <<= 1) < -1622 * 4 + -5524 * 1 + 182 * 66)
          throw rn(-1772 + 2854 * -3 + 10350, "".concat(o));
      this.groupSizes = new Uint32Array(r), this.groupSizes.set(n), this.length = r;
      for (var a = i; a < r; a++)
        this.groupSizes[a] = 49 * -7 + -228 + 1 * 571;
    }
    for (var g = this.indexOfGroup(o + (-7639 * -1 + 314 * -4 + -2 * 3191)), s = (a = 1 * 8361 + 10 * 31 + -8671, e.length); a < s; a++)
      this.tag.insertRule(g, e[a]) && (this.groupSizes[o]++, g++);
  }, t.prototype.clearGroup = function(o) {
    if (o < this.length) {
      var e = this.groupSizes[o], n = this.indexOfGroup(o), i = n + e;
      this.groupSizes[o] = 0;
      for (var r = n; r < i; r++)
        this.tag.deleteRule(n);
    }
  }, t.prototype.getGroup = function(o) {
    var e = "";
    if (o >= this.length || -8680 + -1 * -8680 === this.groupSizes[o])
      return e;
    for (var n = this.groupSizes[o], i = this.indexOfGroup(o), r = i + n, a = i; a < r; a++)
      e += "".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);
    return e;
  }, t;
}(), ii = /* @__PURE__ */ new Map(), li = /* @__PURE__ */ new Map(), oi = -1807 * 3 + 2345 + -1 * -3077, Dn = function(t) {
  if (ii.has(t))
    return ii.get(t);
  for (; li.has(oi); )
    oi++;
  var o = oi++;
  if (j.NODE_ENV !== "production" && ((0 | o) < 3 * 164 + 728 + 10 * -122 || o > 1807361435 + -1275299199 * 1 + 76 * 7127363))
    throw rn(-1 * 7703 + 5019 + -150 * -18, "".concat(o));
  return ii.set(t, o), li.set(o, t), o;
}, Bc = function(t, o) {
  oi = o + (9814 + 1877 * -1 + -7936), ii.set(t, o), li.set(o, t);
}, wc = "style[".concat(kt, "][").concat("data-styled-version", '="').concat("6.1.1", '"]'), Sc = new RegExp("^".concat(kt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Gc = function(t, o, e) {
  for (var n, i = e.split(","), r = -3 * -944 + 4243 + -7075, a = i.length; r < a; r++)
    (n = i[r]) && t.registerName(o, n);
}, Zc = function(t, o) {
  for (var e, n = ((e = o.textContent) !== null && void (3 * -2536 + 5219 + 1 * 2389) !== e ? e : "").split(`/*!sc*/
`), i = [], r = 1 * 1945 + -2619 + -674 * -1, a = n.length; r < a; r++) {
    var g = n[r].trim();
    if (g) {
      var s = g.match(Sc);
      if (s) {
        var x = 0 | parseInt(s[1], 10), C = s[1831 * 3 + -7175 + 2 * 842];
        2621 * 1 + -3 * 2471 + -1 * -4792 !== x && (Bc(C, x), Gc(t, C, s[1986 * 5 + 1495 + -11422]), t.getTag().insertRules(x, i)), i.length = 11 * -60 + 3985 * 1 + 133 * -25;
      } else
        i.push(g);
    }
  }
};
function kc() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var yg = function(t) {
  var o = document.head, e = t || o, n = document.createElement("style"), i = function(g) {
    var s = Array.from(g.querySelectorAll("style[".concat(kt, "]")));
    return s[s.length - 1];
  }(e), r = void (-475 * 12 + 3139 + 2561) !== i ? i.nextSibling : null;
  n.setAttribute(kt, "active"), n.setAttribute("data-styled-version", "6.1.1");
  var a = kc();
  return a && n.setAttribute("nonce", a), e.insertBefore(n, r), n;
}, Hc = function() {
  function t(o) {
    this.element = yg(o), this.element.appendChild(document.createTextNode("")), this.sheet = function(e) {
      if (e.sheet)
        return e.sheet;
      for (var n = document.styleSheets, i = -323 * 17 + 1 * 4429 + 1062, r = n.length; i < r; i++) {
        var a = n[i];
        if (a.ownerNode === e)
          return a;
      }
      throw rn(17);
    }(this.element), this.length = -1 * -9938 + 8109 + -18047;
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
}(), Kc = function() {
  function t(o) {
    this.element = yg(o), this.nodes = this.element.childNodes, this.length = 8950 + -4349 * 1 + -4601;
  }
  return t.prototype.insertRule = function(o, e) {
    if (o <= this.length && o >= 2015 + -37 * 196 + 5237) {
      var n = document.createTextNode(e);
      return this.element.insertBefore(n, this.nodes[o] || null), this.length++, !0;
    }
    return !1;
  }, t.prototype.deleteRule = function(o) {
    this.element.removeChild(this.nodes[o]), this.length--;
  }, t.prototype.getRule = function(o) {
    return o < this.length ? this.nodes[o].textContent : "";
  }, t;
}(), Wc = function() {
  function t(o) {
    this.rules = [], this.length = 43 * 17 + 9648 + -10379;
  }
  return t.prototype.insertRule = function(o, e) {
    return o <= this.length && (this.rules.splice(o, 9269 + 1 * 3843 + -13112, e), this.length++, !0);
  }, t.prototype.deleteRule = function(o) {
    this.rules.splice(o, -19 * -121 + 3283 + -5581 * 1), this.length--;
  }, t.prototype.getRule = function(o) {
    return o < this.length ? this.rules[o] : "";
  }, t;
}(), la = Jo, Oc = { isServer: !Jo, useCSSOMInjection: !ac }, vg = function() {
  function t(o, e, n) {
    void (7416 + 50 * -39 + -5466) === o && (o = $t), void (-30 * 67 + 8773 * -1 + -41 * -263) === e && (e = {});
    var i = this;
    this.options = be(be({}, Oc), o), this.gs = e, this.names = new Map(n), this.server = !!o.isServer, !this.server && Jo && la && (la = !1, function(r) {
      for (var a = document.querySelectorAll(wc), g = 6463 + 6463 * -1, s = a.length; g < s; g++) {
        var x = a[g];
        x && x.getAttribute(kt) !== "active" && (Zc(r, x), x.parentNode && x.parentNode.removeChild(x));
      }
    }(this)), zo(this, function() {
      return function(r) {
        for (var a = r.getTag(), g = a.length, s = "", x = function(u) {
          var p = function(H) {
            return li.get(H);
          }(u);
          if (void (287 + -1 * -9575 + -1 * 9862) === p)
            return "continue";
          var f = r.names.get(p), v = a.getGroup(u);
          if (void (-6337 * -1 + 3 * 557 + 308 * -26) === f || -2 * -1879 + 3051 + -6809 === v.length)
            return "continue";
          var G = "".concat(kt, ".g").concat(u, '[id="').concat(p, '"]'), E = "";
          void (4794 + -5 * 980 + -106 * -1) !== f && f.forEach(function(H) {
            H.length > -33 * 32 + 2883 + -1827 && (E += "".concat(H, ","));
          }), s += "".concat(v).concat(G, '{content:"').concat(E, '"}').concat(`/*!sc*/
`);
        }, C = 2389 + -1 * 2389; C < g; C++)
          x(C);
        return s;
      }(i);
    });
  }
  return t.registerId = function(o) {
    return Dn(o);
  }, t.prototype.reconstructWithOptions = function(o, e) {
    return void (-6769 + -3 * -1061 + 3586) === e && (e = !0), new t(be(be({}, this.options), o), this.gs, e && this.names || void (-5 * 655 + -2 * 3824 + 993 * 11));
  }, t.prototype.allocateGSInstance = function(o) {
    return this.gs[o] = (this.gs[o] || -82 * 114 + -5431 + 1 * 14779) + (-20 * 402 + -2358 * -3 + 1 * 967);
  }, t.prototype.getTag = function() {
    return this.tag || (this.tag = (o = function(e) {
      var n = e.useCSSOMInjection, i = e.target;
      return e.isServer ? new Wc(i) : n ? new Hc(i) : new Kc(i);
    }(this.options), new vc(o)));
    var o;
  }, t.prototype.hasNameForId = function(o, e) {
    return this.names.has(o) && this.names.get(o).has(e);
  }, t.prototype.registerName = function(o, e) {
    if (Dn(o), this.names.has(o))
      this.names.get(o).add(e);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(e), this.names.set(o, n);
    }
  }, t.prototype.insertRules = function(o, e, n) {
    this.registerName(o, e), this.getTag().insertRules(Dn(o), n);
  }, t.prototype.clearNames = function(o) {
    this.names.has(o) && this.names.get(o).clear();
  }, t.prototype.clearRules = function(o) {
    this.getTag().clearGroup(Dn(o)), this.clearNames(o);
  }, t.prototype.clearTag = function() {
    this.tag = void (1 * -4059 + -1 * -6203 + -4 * 536);
  }, t;
}(), Rc = /&/g, Vc = /^\s*\/\/.*$/gm;
function Bg(t, o) {
  return t.map(function(e) {
    return e.type === "rule" && (e.value = "".concat(o, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(o, " ")), e.props = e.props.map(function(n) {
      return "".concat(o, " ").concat(n);
    })), Array.isArray(e.children) && e.type !== "@keyframes" && (e.children = Bg(e.children, o)), e;
  });
}
function wg(t) {
  var o, e, n, i = t === void 0 ? $t : t, r = i.options, a = void (3527 * 1 + 77 * -103 + 6 * 734) === r ? $t : r, g = i.plugins, s = void (-5 * 515 + -11 * -319 + -934) === g ? ki : g, x = function(p, f, v) {
    return v === e || v.startsWith(e) && v.endsWith(e) && v.replaceAll(e, "").length > 0 ? ".".concat(o) : p;
  }, C = s.slice();
  C.push(function(p) {
    p.type === wi && p.value.includes("&") && (p.props[104 * 74 + 4391 + -12087] = p.props[-1 * 3125 + 3 * 461 + 1 * 1742].replace(Rc, e).replace(n, x));
  }), a.prefix && C.push(oc), C.push(tc);
  var u = function(p, f, v, G) {
    void (-11 * 439 + 1 * -4013 + -4421 * -2) === f && (f = ""), void (-3619 * 1 + 4 * 946 + -165) === v && (v = ""), void (-3229 + -66 * 109 + 1 * 10423) === G && (G = "&"), o = G, e = f, n = new RegExp("\\".concat(e, "\\b"), "g");
    var E = p.replace(Vc, ""), H = _0(v || f ? "".concat(v, " ").concat(f, " { ").concat(E, " }") : E);
    a.namespace && (H = Bg(H, a.namespace));
    var k = [];
    return xi(H, nc(C.concat(ic(function(L) {
      return k.push(L);
    })))), k;
  };
  return u.hash = s.length ? s.reduce(function(p, f) {
    return f.name || rn(15), vt(p, f.name);
  }, 1441 * -5 + -3706 + 16292).toString() : "", u;
}
var Ec = new vg(), yo = wg(), $o = Zt.createContext({ shouldForwardProp: void (4996 + -4996 * 1), styleSheet: Ec, stylis: yo });
$o.Consumer;
var Pc = Zt.createContext(void (9739 + 1 * -6763 + -2976));
function vo() {
  return vi($o);
}
function Yc(t) {
  var o = je(t.stylisPlugins), e = o[-1243 + 7399 * 1 + 57 * -108], n = o[1], i = vo().styleSheet, r = Ue(function() {
    var C = i, u = {};
    return u.useCSSOMInjection = !1, t.sheet ? C = t.sheet : t.target && (C = C.reconstructWithOptions({ target: t.target }, !1)), t.disableCSSOMInjection && (C = C.reconstructWithOptions(u)), C;
  }, [t.disableCSSOMInjection, t.sheet, t.target, i]), a = Ue(function() {
    var C = {};
    C.namespace = t.namespace, C.prefix = t.enableVendorPrefixes;
    var u = {};
    return u.options = C, u.plugins = e, wg(u);
  }, [t.enableVendorPrefixes, t.namespace, e]);
  ye(function() {
    L0(e, t.stylisPlugins) || n(t.stylisPlugins);
  }, [t.stylisPlugins]);
  var g = Ue(function() {
    var C = {};
    return C.shouldForwardProp = t.shouldForwardProp, C.styleSheet = r, C.stylis = a, C;
  }, [t.shouldForwardProp, r, a]), s = {};
  s.value = g;
  var x = {};
  return x.value = a, Zt.createElement($o.Provider, s, Zt.createElement(Pc.Provider, x, t.children));
}
var ua = function() {
  function t(o, e) {
    var n = this;
    this.inject = function(i, r) {
      void (-7364 + -4 * -1841) === r && (r = yo);
      var a = n.name + r.hash;
      i.hasNameForId(n.id, a) || i.insertRules(n.id, a, r(n.rules, a, "@keyframes"));
    }, this.name = o, this.id = "sc-keyframes-".concat(o), this.rules = e, zo(this, function() {
      throw rn(-90 * 97 + -1994 + 10736, String(n.name));
    });
  }
  return t.prototype.getName = function(o) {
    return void (71 * -6 + -1291 * -1 + -1 * 865) === o && (o = yo), this.name + o.hash;
  }, t;
}(), Lc = function(t) {
  return t >= "A" && t <= "Z";
};
function Ca(t) {
  for (var o = "", e = -9515 + 86 * -58 + -14503 * -1; e < t.length; e++) {
    var n = t[e];
    if (263 * -1 + 1 * -1851 + 47 * 45 === e && n === "-" && t[6560 + 1 * 5770 + -12330] === "-")
      return t;
    Lc(n) ? o += "-" + n.toLowerCase() : o += n;
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
var Sg = function(t) {
  return t == null || t === !1 || t === "";
}, Gg = function(t) {
  var o, e, n = [];
  for (var i in t) {
    var r = t[i];
    t.hasOwnProperty(i) && !Sg(r) && (Array.isArray(r) && r.isCss || qt(r) ? n.push("".concat(Ca(i), ":"), r, ";") : _t(r) ? n.push.apply(n, Mt(Mt(["".concat(i, " {")], Gg(r), !1), ["}"], !1)) : n.push("".concat(Ca(i), ": ").concat((o = i, (e = r) == null || typeof e == "boolean" || e === "" ? "" : typeof e != "number" || 7237 * -1 + 246 * -21 + -79 * -157 === e || o in rc || o.startsWith("--") ? String(e).trim() : "".concat(e, "px")), ";")));
  }
  return n;
};
function Gt(t, o, e, n) {
  if (Sg(t))
    return [];
  if (Qo(t))
    return [".".concat(t.styledComponentId)];
  if (qt(t)) {
    if (!qt(r = t) || r.prototype && r.prototype.isReactComponent || !o)
      return [t];
    var i = t(o);
    return j.NODE_ENV === "production" || typeof i != "object" || Array.isArray(i) || i instanceof ua || _t(i) || i === null || console.error("".concat(pg(t), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Gt(i, o, e, n);
  }
  var r;
  return t instanceof ua ? e ? (t.inject(e, n), [t.getName(n)]) : [t] : _t(t) ? Gg(t) : Array.isArray(t) ? Array.prototype.concat.apply(ki, t.map(function(a) {
    return Gt(a, o, e, n);
  })) : [t.toString()];
}
function Nc(t) {
  for (var o = 718 * -2 + -3857 + 5293; o < t.length; o += 1) {
    var e = t[o];
    if (qt(e) && !Qo(e))
      return !1;
  }
  return !0;
}
var Tc = Ag("6.1.1"), Fc = function() {
  function t(o, e, n) {
    this.rules = o, this.staticRulesId = "", this.isStatic = j.NODE_ENV === "production" && (void (17 * -283 + -1149 * -1 + 1 * 3662) === n || n.isStatic) && Nc(o), this.componentId = e, this.baseHash = vt(Tc, e), this.baseStyle = n, vg.registerId(e);
  }
  return t.prototype.generateAndInjectStyles = function(o, e, n) {
    var i = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, e, n) : "";
    if (this.isStatic && !n.hash)
      if (this.staticRulesId && e.hasNameForId(this.componentId, this.staticRulesId))
        i = wt(i, this.staticRulesId);
      else {
        var r = xa(Gt(this.rules, o, e, n)), a = mo(vt(this.baseHash, r) >>> 0);
        if (!e.hasNameForId(this.componentId, a)) {
          var g = n(r, ".".concat(a), void 0, this.componentId);
          e.insertRules(this.componentId, a, g);
        }
        i = wt(i, a), this.staticRulesId = a;
      }
    else {
      for (var s = vt(this.baseHash, n.hash), x = "", C = 1049 * -3 + 1825 + -1322 * -1; C < this.rules.length; C++) {
        var u = this.rules[C];
        if (typeof u == "string")
          x += u, j.NODE_ENV !== "production" && (s = vt(s, u));
        else if (u) {
          var p = xa(Gt(u, o, e, n));
          s = vt(s, p + C), x += p;
        }
      }
      if (x) {
        var f = mo(s >>> 0);
        e.hasNameForId(this.componentId, f) || e.insertRules(this.componentId, f, n(x, ".".concat(f), void (9 * 509 + 7433 * 1 + -12014), this.componentId)), i = wt(i, f);
      }
    }
    return i;
  }, t;
}(), Zg = Zt.createContext(void (479 * 11 + -7622 + -13 * -181));
Zg.Consumer;
var _i = {}, da = /* @__PURE__ */ new Set();
function Dc(t, o, e) {
  var n = Qo(t), i = t, r = !qi(t), a = o.attrs, g = void (-2210 + -314 * 17 + 7548) === a ? ki : a, s = o.componentId, x = void (-2106 + 2 * -4159 + 10424) === s ? function(F, U) {
    var Z = typeof F != "string" ? "sc" : aa(F);
    _i[Z] = (_i[Z] || -46 * -15 + 8979 + 11 * -879) + (14 * 458 + -8616 + -5 * -441);
    var _ = "".concat(Z, "-").concat(lc("6.1.1" + Z + _i[Z]));
    return U ? "".concat(U, "-").concat(_) : _;
  }(o.displayName, o.parentComponentId) : s, C = o.displayName, u = void (-1 * 5744 + 1346 * 1 + 1 * 4398) === C ? function(F) {
    return qi(F) ? "styled.".concat(F) : "Styled(".concat(pg(F), ")");
  }(t) : C, p = o.displayName && o.componentId ? "".concat(aa(o.displayName), "-").concat(o.componentId) : o.componentId || x, f = n && i.attrs ? i.attrs.concat(g).filter(Boolean) : g, v = o.shouldForwardProp;
  if (n && i.shouldForwardProp) {
    var G = i.shouldForwardProp;
    if (o.shouldForwardProp) {
      var E = o.shouldForwardProp;
      v = function(F, U) {
        return G(F, U) && E(F, U);
      };
    } else
      v = G;
  }
  var H = new Fc(e, p, n ? i.componentStyle : void (-6054 + 6054 * 1));
  function k(F, U) {
    return function(Z, _, Q) {
      var ee = Z.attrs, xe = Z.componentStyle, ue = Z.defaultProps, he = Z.foldedComponentIds, Ve = Z.styledComponentId, re = Z.target, ae = Zt.useContext(Zg), ze = vo(), at = Z.shouldForwardProp || ze.shouldForwardProp;
      j.NODE_ENV !== "production" && xo(Ve);
      var ve = function(At, pt, Se) {
        var Ge = {};
        Ge.className = void 0, Ge.theme = Se;
        for (var qe, Ee = be(be({}, pt), Ge), Ot = -7183 * -1 + 5804 * 1 + 1443 * -9; Ot < At.length; Ot += -1 * -7662 + 12 * -185 + -1 * 5441) {
          var Ze = qt(qe = At[Ot]) ? qe(Ee) : qe;
          for (var Pe in Ze)
            Ee[Pe] = Pe === "className" ? wt(Ee[Pe], Ze[Pe]) : Pe === "style" ? be(be({}, Ee[Pe]), Ze[Pe]) : Ze[Pe];
        }
        return pt.className && (Ee.className = wt(Ee.className, pt.className)), Ee;
      }(ee, _, sc(_, ae, ue) || $t), Te = ve.as || re, $e = {};
      for (var Ae in ve)
        void (2286 * 1 + 9344 * 1 + 10 * -1163) === ve[Ae] || Ae[5566 + -3679 * -1 + 1849 * -5] === "$" || Ae === "as" || Ae === "theme" || (Ae === "forwardedAs" ? $e.as = ve.forwardedAs : at && !at(Ae, Te) || ($e[Ae] = ve[Ae], at || j.NODE_ENV !== "development" || Js(Ae) || da.has(Ae) || !ho.has(Te) || (da.add(Ae), console.warn('styled-components: it looks like an unknown prop "'.concat(Ae, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Wt = function(At, pt) {
        var Se = vo(), Ge = At.generateAndInjectStyles(pt, Se.styleSheet, Se.stylis);
        return j.NODE_ENV !== "production" && xo(Ge), Ge;
      }(xe, ve);
      j.NODE_ENV !== "production" && Z.warnTooManyClasses && Z.warnTooManyClasses(Wt);
      var an = wt(he, Ve);
      return Wt && (an += " " + Wt), ve.className && (an += " " + ve.className), $e[qi(Te) && !ho.has(Te) ? "class" : "className"] = an, $e.ref = Q, fe(Te, $e);
    }(L, F, U);
  }
  k.displayName = u;
  var L = Zt.forwardRef(k), z = {};
  return z.attrs = !0, z.componentStyle = !0, z.displayName = !0, z.foldedComponentIds = !0, z.shouldForwardProp = !0, z.styledComponentId = !0, z.target = !0, L.attrs = f, L.componentStyle = H, L.displayName = u, L.shouldForwardProp = v, L.foldedComponentIds = n ? wt(i.foldedComponentIds, i.styledComponentId) : "", L.styledComponentId = p, L.target = n ? i.target : t, Object.defineProperty(L, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(F) {
    this._foldedDefaultProps = n ? function(U) {
      for (var Z = [], _ = 9 * 114 + 1 * -8243 + -401 * -18; _ < arguments.length; _++)
        Z[_ - (-6370 + 289 * -2 + 6949)] = arguments[_];
      for (var Q = 2287 * 4 + -17 * -209 + 1 * -12701, ee = Z; Q < ee.length; Q++)
        bo(U, ee[Q], !0);
      return U;
    }({}, i.defaultProps, F) : F;
  } }), j.NODE_ENV !== "production" && (gc(u, p), L.warnTooManyClasses = /* @__PURE__ */ function(F, U) {
    var Z = {}, _ = !1;
    return function(Q) {
      if (!_ && (Z[Q] = !0, Object.keys(Z).length >= -4152 + -1 * 8786 + 2 * 6569)) {
        var ee = U ? ' with the id of "'.concat(U, '"') : "";
        console.warn("Over ".concat(315 * 10 + 3 * -1499 + 1547, " classes were generated for component ").concat(F).concat(ee, `.
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
  }(u, p)), zo(L, function() {
    return ".".concat(L.styledComponentId);
  }), r && bg(L, t, z), L;
}
function Aa(t, o) {
  for (var e = [t[-7097 + -1667 * 4 + 2753 * 5]], n = 47 * 118 + 12 * -519 + 682 * 1, i = o.length; n < i; n += 143 * -59 + -311 * -19 + 2529)
    e.push(o[n], t[n + (8066 * -1 + -9873 + 345 * 52)]);
  return e;
}
var pa = function(t) {
  var o = {};
  return o.isCss = !0, Object.assign(t, o);
};
function Xc(t) {
  for (var o = [], e = 909 * -11 + -7816 + -262 * -68; e < arguments.length; e++)
    o[e - (122 * -61 + -1 * -7894 + -41 * 11)] = arguments[e];
  if (qt(t) || _t(t)) {
    var n = t;
    return pa(Gt(Aa(ki, Mt([n], o, !0))));
  }
  var i = t;
  return 541 * 11 + 8233 + -394 * 36 === o.length && 73 * 46 + 6701 * -1 + -418 * -8 === i.length && typeof i[-14 * -128 + 419 + 1 * -2211] == "string" ? Gt(i) : pa(Gt(Aa(i, o)));
}
function Bo(t, o, e) {
  if (void (-11 * 113 + -5480 + 81 * 83) === e && (e = $t), !o)
    throw rn(11 * -643 + -7 * 1118 + 7450 * 2, o);
  var n = function(i) {
    for (var r = [], a = -3313 + 709 * -1 + 447 * 9; a < arguments.length; a++)
      r[a - (7679 + -29 * 221 + 423 * -3)] = arguments[a];
    return t(o, e, Xc.apply(void (-745 * -3 + -7680 + 363 * 15), Mt([i], r, !1)));
  };
  return n.attrs = function(i) {
    return Bo(t, o, be(be({}, e), { attrs: Array.prototype.concat(e.attrs, i).filter(Boolean) }));
  }, n.withConfig = function(i) {
    return Bo(t, o, be(be({}, e), i));
  }, n;
}
var kg = function(t) {
  return Bo(Dc, t);
}, Gn = kg;
ho.forEach(function(t) {
  Gn[t] = kg(t);
});
j.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Xn = "__sc-".concat(kt, "__");
j.NODE_ENV !== "production" && j.NODE_ENV !== "test" && typeof window < "u" && (window[Xn] || (window[Xn] = 5 * 1397 + 3474 + -10459), -142 * 26 + 6401 * -1 + 10094 === window[Xn] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Xn] += 717 * -9 + 5482 + 972);
const jc = Gn.div`
  position: relative;
`, Uc = Gn.video`
  transform: ${(t) => t.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  width: 100%;
`;
class te extends Error {
  constructor(e, n) {
    super(e);
    X(this, "cause");
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
var ri = ((t) => (t.CONTINUE_DETECTION = "continue-detection", t.SWITCH_CAMERA = "switch-camera", t.TOGGLE_MIRROR = "toggle-mirror", t))(ri || {}), Me = ((t) => (t.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", t.CONTROL = "document-auto-capture:control", t.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", t.DOCUMENT_DETECTION = "document-auto-capture:document-detection", t.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", t.STATE_CHANGED = "document-auto-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", t))(Me || {}), Mc = ((t) => (t.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", t.CONTROL = "face-auto-capture:control", t.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", t.FACE_DETECTION = "face-auto-capture:face-detection", t.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", t.STATE_CHANGED = "face-auto-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", t))(Mc || {}), Jc = ((t) => (t.ANIMATION_END = "magnifeye-auto-capture:animation-end", t.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", t))(Jc || {}), Qc = ((t) => (t.ANIMATION_END = "smile-auto-capture:animation-end", t.STATUS_CHANGED = "smile-auto-capture:status-changed", t))(Qc || {});
const nt = {};
nt.CANDIDATE_SELECTION = "candidate_selection", nt.DOCUMENT_CENTERING = "document_centering", nt.DOCUMENT_NOT_PRESENT = "document_not_present", nt.DOCUMENT_TOO_FAR = "document_too_far", nt.SHARPNESS_TOO_LOW = "sharpness_too_low", nt.BRIGHTNESS_TOO_LOW = "brightness_too_low", nt.BRIGHTNESS_TOO_HIGH = "brightness_too_high", nt.HOTSPOTS_PRESENT = "hotspots_present";
const De = nt, xt = {};
xt.isPresent = De.DOCUMENT_NOT_PRESENT, xt.isNotSmall = De.DOCUMENT_TOO_FAR, xt.isNotOutOfBounds = De.DOCUMENT_CENTERING, xt.isSharp = De.SHARPNESS_TOO_LOW, xt.isNotDim = De.BRIGHTNESS_TOO_LOW, xt.isNotBright = De.BRIGHTNESS_TOO_HIGH, xt.noHotspots = De.HOTSPOTS_PRESENT;
const zc = xt, pn = {};
pn.LOADING = "LOADING", pn.ERROR = "ERROR", pn.WAITING = "WAITING", pn.RUNNING = "RUNNING";
const Ke = pn;
var $c = ((t) => (t.CLOSEUP = "CLOSEUP", t.DISTANT = "DISTANT", t.MIDDLE = "MIDDLE", t))($c || {});
const Hi = Fo(void 0);
Hi.displayName = "AppStateContext";
function qc() {
  const t = vi(Hi);
  if (t === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return t;
}
const _c = Hi.Provider, Ki = qc;
class Hg extends We {
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
    return ((o = this.context) == null ? void 0 : o.appState) === Ke.ERROR ? null : this.props.children;
  }
}
X(Hg, "contextType", Hi);
const eI = Gn.canvas`
  transform: ${(t) => t.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
var tI = -254 + -127 * -2;
function Ie(t, o, e, n, i, r) {
  var a, g, s = {};
  for (g in o)
    g == "ref" ? a = o[g] : s[g] = o[g];
  var x = {};
  x.type = t, x.props = s, x.key = e, x.ref = a, x.__k = null, x.__ = null, x.__b = 0, x.__e = null, x.__d = void (-1832 + -329 * 21 + 8741), x.__c = null, x.constructor = void 0, x.__v = --tI, x.__i = -(-1569 + -5 * 974 + 35 * 184), x.__u = 0, x.__source = i, x.__self = r;
  var C = x;
  if (typeof t == "function" && (a = t.defaultProps))
    for (g in a)
      void (832 + -641 * 4 + 1732 * 1) === s[g] && (s[g] = a[g]);
  return S.vnode && S.vnode(C), C;
}
const nI = Gn.div`
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
function iI() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const oI = tg(({
  detectionDetails: t,
  isImageMirror: o
}, e) => iI() ? (console.log(t), Ie(Le, {
  children: [Ie(eI, {
    ref: e,
    $isImageMirror: o
  }), Ie(nI, {
    children: Object.entries(t).map(([n, i]) => Ie("div", {
      children: [n, ": ", Ie("strong", {
        children: i
      })]
    }, n))
  })]
})) : null), rI = -734 * 6 + 53 * 139 + -2963 + 0.8, aI = -19 * -327 + -7144 + 931 + 0.43, gI = -10 * 361 + 2 * 103 + 3404 + 0.03, sI = -4339 * -1 + -7592 + 3253 + 0.5, cI = -12891 + -4297 * -3 + 0.25, II = -125 * 17 + 3372 + -1247 + 0.9, xI = -2231 + -1 * -8967 + -6736 + 0.1, ai = {};
ai.minDuration = 1e3, ai.maxDuration = 2500, ai.minFrames = 10;
const eo = ai, wo = {};
wo.max = 100, wo.min = 10;
const fa = wo, lI = -26 * 173 + 6 * 1018 + -890, uI = -5 * -1459 + -8364 + 1269, CI = 9203 + -73 * 8 + -8616, Kg = "AES-CBC", Wg = "RSA-OAEP", dI = "SHA-256", AI = "image/jpeg", pI = 8, fI = "SAM v1.35.3 for idcards";
class hI {
  static async getVideoInputDeviceList() {
    return (await navigator.mediaDevices.enumerateDevices()).filter((e) => e.kind === "videoinput");
  }
}
function ha(t) {
  t.getTracks().forEach((e) => {
    e.stop();
  });
}
const jn = (t, o) => Math.hypot(o.x - t.x, o.y - t.y), mI = (t) => t.length < 1292 + 1405 * -3 + 4 * 731 ? 1262 * 2 + -5099 + 1 * 2575 : t.reduce((e, n) => e + n, 5010 * -1 + -257 * -16 + 898 * 1) / t.length, Og = (t) => Number.parseFloat(t.toFixed(1680 + 265 * -27 + 5478)), bI = (t) => {
  const o = t.getContext("2d");
  o && o.clearRect(0, 5135 * 1 + -90 + 5045 * -1, o.canvas.width, o.canvas.height);
}, yI = -4591 + -3109 * 1 + 7701 + 0.5, vI = 502 * -17 + -5633 + 14167 + 0.85, to = 4 * -517 + 220 + -89 * -32, BI = 9286 + 899 * 4 + -12282, wI = -2 * -3086 + -4043 + -2129, SI = (t, o) => t < to && o >= to ? to : t, GI = (t, o) => t < o ? t : o, qo = ({ height: t, width: o }) => {
  let e;
  return o > t ? e = SI(t, o) : e = o, { width: e, height: GI(t, e) };
}, ZI = (t) => {
  const o = qo(t).width, e = o * vI, n = (t.width - e) / (1 * -8252 + -1 * 4221 + 5 * 2495), i = e / yI, r = (t.height - i) / (670 * -3 + -6436 + -4 * -2112), a = {};
  return a.shiftX = n, a.shiftY = r, a.width = e, a.height = i, a;
}, kI = (t) => {
  const { bottomLeft: o, bottomRight: e, topLeft: n, topRight: i } = t, r = jn(n, i), a = jn(i, e), g = jn(o, e), s = jn(n, o);
  return Math.min(r, a, g, s);
}, HI = "@innovatrics/dot-common-auto-capture", KI = "5.2.8", WI = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, OI = {
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
}, VI = {
  name: HI,
  private: !0,
  version: KI,
  scripts: WI,
  dependencies: OI,
  devDependencies: RI
}, _o = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), ma = () => {
  const t = /Android/i.test(navigator.userAgent), o = /Firefox/i.test(navigator.userAgent);
  return t && o;
}, EI = () => {
  const t = navigator.userAgent.includes("Chrome"), o = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return t && o ? !1 : o;
}, So = (t) => new Promise((o) => {
  setTimeout(o, t);
}), ln = (t) => JSON.parse(JSON.stringify(t, (o, e) => typeof e == "number" ? Og(e) : e)), Rg = () => VI.version, Vg = (t) => new URL(t).hostname.replace("www.", ""), PI = () => Vg(window.location.href) === "localhost", Un = (t) => Object.entries(t).map(([o, e]) => encodeURIComponent(o) + "=" + encodeURIComponent(e)).join("&"), YI = (t, o) => {
  const e = t && performance.now() - t;
  return o >= eo.minFrames ? e > eo.minDuration : e > eo.maxDuration;
}, LI = (t, o) => JSON.stringify(t) === JSON.stringify(o) ? o : t, gi = {};
gi.width = 1920, gi.height = 1080, gi.facingMode = "user";
const NI = gi;
class bn extends hI {
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
    const i = this.getConstraints(e, n);
    await this.startWebcam(i), EI() && await this.startWebcam(i);
  }
  async startWebcam(e = {}) {
    var n;
    return this.stopCamera(), ma() && await So(450), this.mediaStream = await navigator.mediaDevices.getUserMedia(e), this.videoRef.srcObject = this.mediaStream, await this.videoRef.play(), this.videoTrack = (n = this.mediaStream) == null ? void 0 : n.getVideoTracks()[7013 + 1 * 2 + -7015], this.checkVideoTrackSettings(), this.videoTrack;
  }
  checkVideoTrackSettings() {
    var i;
    const e = (i = this.videoTrack) == null ? void 0 : i.getSettings();
    if (!(e != null && e.height) || !(e != null && e.width))
      throw new te("Could not init camera settings");
    if (Math.min(e == null ? void 0 : e.width, e == null ? void 0 : e.height) < lI)
      throw this.stopCamera(), new te("Could not init video because of low camera resolution: " + e.width + "x" + e.height + ".");
  }
  async getBestCamera(e) {
    const n = {};
    if (n.video = !0, this.mediaStream = await navigator.mediaDevices.getUserMedia(n), this.stopCamera(), _o() && e === "environment")
      return (await bn.getVideoInputDeviceList()).find((a) => a.label.includes("back") && a.label.includes("0"));
  }
  async getAvailableCamerasInfo() {
    const e = await bn.getVideoInputDeviceList();
    for (const n of e) {
      ma() && await So(816 + -47 * 184 + 8282);
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
        this.availableCameraProperties.push(u), ha(a);
      } catch (i) {
        i instanceof Error && te.logError(i);
      }
    }
  }
  getConstraints(e, n) {
    const i = { ...NI, ...e };
    i.deviceId = n ? { exact: n.deviceId } : void (38 * 98 + 9534 + -13258);
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
    return i.drawImage(this.videoRef, 0, -1 * -7037 + 1 * 5006 + 1 * -12043), n;
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
    const e = this.videoTrack.getConstraints(), n = this.videoTrack.getSettings(), i = await bn.getVideoInputDeviceList();
    if (i.length <= 1)
      return;
    const r = i.findIndex((s) => s.deviceId === n.deviceId), a = i[r + 1] ?? i[0], g = this.getConstraints(e, a);
    await this.startWebcam(g);
  }
  stopCamera() {
    this.mediaStream && (ha(this.mediaStream), this.videoRef.srcObject = null);
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
var we = {};
we.VITE_FACE_COUNTLY_APP_KEY = "5f83e83ee4cee1ab6e5bbf86e215644473299675", we.VITE_MAGNIFEYE_COUNTLY_APP_KEY = "d5ca54dabfb1a2c72d7090c9c8980252a879da44", we.VITE_DOCUMENT_COUNTLY_APP_KEY = "065cf6e242fc5e785cd17eebfbfbbd212a33133b", we.VITE_COUNTLY_URL = "https://innovatrics.count.ly", we.VITE_SMILE_COUNTLY_APP_KEY = "d64319129bb0ee02eccfab418edba9629a97d6b6", we.VITE_RSA_PUBLIC_KEY = "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", we.BASE_URL = "/", we.MODE = "production", we.DEV = !1, we.PROD = !0, we.SSR = !1, we.VITE_PACKAGE_VERSION = "5.2.8";
var TI = we;
const FI = () => {
  var t;
  return ((t = TI.VITE_APP_ENV) == null ? void 0 : t.toLowerCase()) === "dev";
};
class Eg extends Array {
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
    this.length === this.size && this.splice(-7893 + 360 * -3 + 8973, e.length), this.push(...e);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-9 * -951 + 1 * 3110 + 1667 * -7);
  }
}
const DI = (t, o, e = AI) => new Promise((n) => {
  t.toBlob((i) => {
    if (!i)
      throw new Error("Canvas to Blob failed");
    n(i);
  }, e, o);
}), XI = async (t) => DI(t, -173 + -6 * 607 + 1 * 3905), jI = (t, o) => {
  const e = document.createElement("canvas");
  e.width = o.width, e.height = o.height;
  const n = e.getContext("2d");
  if (!n)
    throw new Error("cropImage ctx error");
  return n.drawImage(t, o.shiftX, o.shiftY, o.width, o.height, -4 * -570 + -4942 + 2662, -416 + 416 * 1, e.width, e.height), e;
}, UI = (t) => {
  const o = t.getContext("2d");
  if (!o)
    throw new Error("getImageDataForSam ctx error");
  const { data: e } = o.getImageData(3695 * 1 + 6520 + -10215, 12571 + 13 * -967, t.width, t.height);
  return e;
}, MI = (t, o, e, n) => {
  const i = t.getContext("2d");
  i && (i.beginPath(), n ? (i.fillStyle = e, i.fillRect(o.topLeft.x, o.topLeft.y, o.width, o.height)) : (i.strokeStyle = e, i.rect(o.topLeft.x, o.topLeft.y, o.width, o.height)), i.stroke());
}, no = (t, o, e) => {
  const { height: n, shiftX: i, shiftY: r, width: a } = o, g = {};
  g.x = i, g.y = r;
  const s = {};
  s.topLeft = g, s.width = a, s.height = n, s.color = e, MI(t, s, e);
}, JI = (t, o, e, n) => {
  const i = t.getContext("2d");
  if (!i)
    return;
  const { bottomLeft: r, bottomRight: a, topLeft: g, topRight: s } = o;
  n ? i.fillStyle = e : i.strokeStyle = e, i.beginPath(), i.moveTo(g.x, g.y), i.lineTo(s.x, s.y), i.lineTo(a.x, a.y), i.lineTo(r.x, r.y), i.closePath(), n ? i.fill() : i.stroke();
}, QI = (t, o) => {
  const { height: e, shiftX: n, shiftY: i, width: r } = o;
  return !(t.x < n || t.x > n + r || t.y < i || t.y > i + e);
}, zI = (t, o) => Object.values(t).every((e) => QI(e, o)), Pg = Fo(null), Yg = () => {
  const t = vi(Pg);
  if (!t)
    throw new Error("Missing provider for CameraOptionsContext");
  return t;
}, $I = (t) => {
  const {
    cameraFacing: o,
    onError: e,
    onPhotoTaken: n,
    sessionToken: i,
    thresholds: r,
    wasmDirectoryPath: a
  } = t, g = _o() ? "environment" : "user";
  return {
    onPhotoTaken: n,
    onError: e,
    cameraFacing: o ?? g,
    wasmDirectoryPath: a,
    sessionToken: i,
    thresholds: {
      confidenceThreshold: (r == null ? void 0 : r.confidenceThreshold) ?? rI,
      sharpnessThreshold: (r == null ? void 0 : r.sharpnessThreshold) ?? sI,
      brightnessLowThreshold: (r == null ? void 0 : r.brightnessLowThreshold) ?? cI,
      brightnessHighThreshold: (r == null ? void 0 : r.brightnessHighThreshold) ?? II,
      hotspotsScoreThreshold: (r == null ? void 0 : r.hotspotsScoreThreshold) ?? xI,
      sizeSmallThreshold: (r == null ? void 0 : r.sizeSmallThreshold) ?? aI,
      outOfBoundsThreshold: (r == null ? void 0 : r.outOfBoundsThreshold) ?? gI
    }
  };
}, Lg = ({
  cameraOptions: t,
  children: o
}) => {
  const e = Ue(() => ({
    documentCameraOptions: $I(t)
  }), [t]);
  return Ie(Pg.Provider, {
    value: e,
    children: o
  });
}, qI = (t, o) => {
  const e = {};
  e.detail = o, document.dispatchEvent(new CustomEvent(t, e));
}, hi = class hi {
  constructor() {
    X(this, "lastDetails", {});
    X(this, "delayedTime", -1692 * 5 + -963 + 1 * 9423);
  }
  static getInstance() {
    return !this._instance && (this._instance = new hi()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = -209 + 1 * 8208 + 421 * -19;
  }
  isDetailChanged(o, e) {
    return JSON.stringify(e) !== JSON.stringify(this.lastDetails[o]) ? (this.lastDetails[o] = e, !0) : !1;
  }
  dispatchCustomEventOnChange(o, e) {
    this.isDetailChanged(o, e) && qI(o, e);
  }
  dispatchDelayedCustomEventOnChange(o, e, n) {
    const i = performance.now();
    i - this.delayedTime > n && (this.dispatchCustomEventOnChange(o, e), this.delayedTime = i);
  }
};
X(hi, "_instance");
let Bn = hi;
const Zn = Bn.getInstance(), ba = (t, o, e = BI) => {
  const n = {};
  n.instructionCode = o;
  const i = n;
  Zn.dispatchDelayedCustomEventOnChange(t, i, e);
}, ya = (t, o) => {
  Zn.dispatchCustomEventOnChange(t, o);
}, _I = (t, o) => {
  Zn.dispatchCustomEventOnChange(t, o);
}, ex = (t, o) => {
  const e = {};
  e.size = o;
  const n = e;
  Zn.dispatchCustomEventOnChange(t, n);
}, tx = (t, o, e) => {
  const n = o.confidence < e ? void 0 : o, i = {};
  i.detectedObject = n;
  const r = i;
  Zn.dispatchCustomEventOnChange(t, r);
}, nx = (t, o) => {
  if (FI()) {
    const e = {};
    e.candidateSelectionImages = o;
    const n = e;
    Bn.getInstance().dispatchCustomEventOnChange(t, n);
  }
}, ix = (t, o) => {
  const { cameraResolution: e, shouldMirror: n } = o;
  ye(() => {
    if (!e)
      return;
    const i = {};
    i.cameraResolution = e, i.isMirroring = n, _I(t, i);
  }, [e, n, t]);
};
var Ng = ((t) => (t.DOCUMENT = "document-auto-capture:dev", t.FACE = "face-auto-capture:dev", t))(Ng || {});
const Go = {};
Go.SIMD = "simd", Go.NO_SIMD = "no-simd";
const va = Go, ox = (t) => t === Me.CONTROL ? !_o() : !0, rx = (t, o) => {
  const { appState: e, handleAppStateChange: n, handleError: i } = Ki(), [r, a] = je(), g = Ue(() => {
    const x = o == null ? void 0 : o.getCameraSettings().facingMode;
    return x ? r ?? x === "user" : r ?? ox(t);
  }, [o, r, t]);
  ye(() => {
    const x = () => {
      e !== Ke.LOADING && n(Ke.RUNNING);
    }, C = () => {
      a(r === void 0 ? !g : !r);
    }, u = async () => {
      if (o) {
        n(Ke.LOADING);
        try {
          await o.switchCamera(), n(Ke.RUNNING);
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
        case ri.CONTINUE_DETECTION:
          x();
          break;
        case ri.TOGGLE_MIRROR:
          C();
          break;
        case ri.SWITCH_CAMERA:
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
}, ax = (t, o) => {
  var s;
  const e = nn(), { handleError: n, setIsCameraReady: i } = Ki(), [r, a] = je(), g = Ii((x) => {
    a((C) => LI(x, C));
  }, []);
  return ye(() => ((async () => {
    if (!(t != null && t.current)) {
      n(new te("Something went wrong during video initialization"));
      return;
    }
    const C = new bn(t.current);
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
}, gx = (t) => {
  ye(() => (window.addEventListener("beforeunload", t.endSession), () => {
    t.endSession(), window.removeEventListener("beforeunload", t.endSession);
  }), [t]);
}, sx = (t, o) => {
  const [e, n] = je();
  ye(() => {
    const i = () => {
      !t.current || e === window.innerWidth || (n(window.innerWidth), ex(o, t.current.getBoundingClientRect()));
    };
    return i(), window.addEventListener("resize", i), () => {
      window.removeEventListener("resize", i);
    };
  }, [t, o, e]);
};
function ui() {
  throw new Error("Cycle detected");
}
var cx = Symbol.for("preact-signals");
function er() {
  if (jt > 2658 + -2657 * 1)
    jt--;
  else {
    for (var t, o = !1; void (1306 * -4 + 3873 * -1 + -11 * -827) !== yn; ) {
      var e = yn;
      for (yn = void (1686 + 8221 * 1 + -9907 * 1), Zo++; void (-1207 * -7 + 1 * -9583 + 2 * 567) !== e; ) {
        var n = e.o;
        if (e.o = void (8601 + -183 * 47), e.f &= -3, !(-6333 + -103 * 3 + 6650 & e.f) && Dg(e))
          try {
            e.c();
          } catch (i) {
            !o && (t = i, o = !0);
          }
        e = n;
      }
    }
    if (Zo = -3010 + -1 * -4934 + 4 * -481, jt--, o)
      throw t;
  }
}
var ie = void 0, yn = void 0, jt = 506 * 7 + -4078 + -8 * -67, Zo = -1 * 2518 + -233 * 16 + 6246, Ci = -9 * -738 + 1 * 5354 + -11996;
function Tg(t) {
  if (void (10913 + -7 * 1559) !== ie) {
    var o = t.n;
    if (void (2 * 2011 + -68 * 111 + 86 * 41) === o || o.t !== ie)
      return o = { i: 0, S: t, p: ie.s, n: void (1141 * -1 + -7040 + 8181), t: ie, e: void 0, x: void 0, r: o }, ie.s !== void 0 && (ie.s.n = o), ie.s = o, t.n = o, -3 * 1858 + 38 * 58 + 54 * 63 & ie.f && t.S(o), o;
    if (-(-7 * -1374 + 11 * 551 + -9 * 1742) === o.i)
      return o.i = 6199 + 6199 * -1, o.n !== void 0 && (o.n.p = o.p, void (6687 + 194 * 49 + -16193 * 1) !== o.p && (o.p.n = o.n), o.p = ie.s, o.n = void (-46 * -83 + 7887 + -11705), ie.s.n = o, ie.s = o), o;
  }
}
function de(t) {
  this.v = t, this.i = -1 * -5207 + 86 * 73 + 2297 * -5, this.n = void (8699 + 8699 * -1), this.t = void 0;
}
de.prototype.brand = cx, de.prototype.h = function() {
  return !(-39 * -163 + 2568 + 51 * -175);
}, de.prototype.S = function(t) {
  this.t !== t && void (-14885 + 1 * 14885) === t.e && (t.x = this.t, void (-1339 + -4274 * -2 + -7209) !== this.t && (this.t.e = t), this.t = t);
}, de.prototype.U = function(t) {
  if (void (-6032 + -974 * 2 + 7980) !== this.t) {
    var o = t.e, e = t.x;
    void (77 * -46 + -127 * 7 + 4431) !== o && (o.x = e, t.e = void (-3656 + 31 * -148 + 8244)), void (6687 + -1 * -5179 + -11866) !== e && (e.e = o, t.x = void (-1273 + 1 * 1273)), t === this.t && (this.t = e);
  }
}, de.prototype.subscribe = function(t) {
  var o = this;
  return nr(function() {
    var e = o.value, n = 315 * 21 + 7471 + -14054 & this.f;
    this.f &= -(2 * -353 + -8800 + 9539);
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
  var t = Tg(this);
  return void (1 * -9713 + -6 * 941 + 15359) !== t && (t.i = this.i), this.v;
}, set: function(t) {
  if (ie instanceof lt && function() {
    throw new Error("Computed cannot have side-effects");
  }(), t !== this.v) {
    Zo > -2 * -3664 + 1674 + 4451 * -2 && ui(), this.v = t, this.i++, Ci++, jt++;
    try {
      for (var o = this.t; void (5083 * -1 + 6486 + 23 * -61) !== o; o = o.x)
        o.t.N();
    } finally {
      er();
    }
  }
} });
function Fg(t) {
  return new de(t);
}
function Dg(t) {
  for (var o = t.s; void (2208 + 26 * -171 + 2238) !== o; o = o.n)
    if (o.S.i !== o.i || !o.S.h() || o.S.i !== o.i)
      return !(-1 * 2694 + -1 * -6009 + -3315);
  return !1;
}
function Xg(t) {
  for (var o = t.s; void (4932 + -6 * 937 + -345 * -2) !== o; o = o.n) {
    var e = o.S.n;
    if (void (-4443 + -11 * -15 + -1426 * -3) !== e && (o.r = e), o.S.n = o, o.i = -(-1 * -6178 + -9400 + 3223), o.n === void 0) {
      t.s = o;
      break;
    }
  }
}
function jg(t) {
  for (var o = t.s, e = void (6170 + -617 * 10); void (-6817 + -6817 * -1) !== o; ) {
    var n = o.p;
    -(-965 * 1 + -2 * -2991 + -5016) === o.i ? (o.S.U(o), n !== void 0 && (n.n = o.n), o.n !== void 0 && (o.n.p = n)) : e = o, o.S.n = o.r, void (-36 * -67 + -1122 + 30 * -43) !== o.r && (o.r = void (-3 * 1635 + -798 + 5703)), o = n;
  }
  t.s = e;
}
function lt(t) {
  de.call(this, void (-7001 + -1 * 2012 + -9013 * -1)), this.x = t, this.s = void (-7 * -619 + -379 * -13 + -2 * 4630), this.g = Ci - 1, this.f = -1 * -563 + -3 * 1132 + 1 * 2837;
}
(lt.prototype = new de()).h = function() {
  if (this.f &= -(329 * -17 + 2603 + 2993), -2794 + 1 * -6571 + 9366 & this.f)
    return !1;
  if (7817 + 517 * 17 + -16574 == (36 & this.f))
    return !(-2880 + 361 * -7 + 5407);
  if (this.f &= -(-1 * 3769 + -8248 + 2 * 6011), this.g === Ci)
    return !(1 * 7079 + -21 * -116 + 173 * -55);
  if (this.g = Ci, this.f |= 5576 + -2 * 1192 + -3191, this.i > -27 * -289 + -6403 + -1400 && !Dg(this))
    return this.f &= -(-3329 * -3 + -2 * -3595 + -17175), !(-7 * 194 + 335 * -4 + -71 * -38);
  var t = ie;
  try {
    Xg(this), ie = this;
    var o = this.x();
    (1721 + 2138 * -1 + 433 * 1 & this.f || this.v !== o || -13258 + 1894 * 7 === this.i) && (this.v = o, this.f &= -(7419 + 2305 * -3 + 1 * -487), this.i++);
  } catch (e) {
    this.v = e, this.f |= 770 * -3 + -1112 + 191 * 18, this.i++;
  }
  return ie = t, jg(this), this.f &= -2, !(1643 * -1 + 4711 + -3068);
}, lt.prototype.S = function(t) {
  if (this.t === void 0) {
    this.f |= 36;
    for (var o = this.s; void (3751 + -89 * -77 + 241 * -44) !== o; o = o.n)
      o.S.S(o);
  }
  de.prototype.S.call(this, t);
}, lt.prototype.U = function(t) {
  if (void (-6865 + -1 * -7387 + -522) !== this.t && (de.prototype.U.call(this, t), void (-7909 + -2 * -3772 + 365) === this.t)) {
    this.f &= -(-121 * -22 + 4681 * -1 + 2052);
    for (var o = this.s; void (-143 * 19 + -5838 + 8555 * 1) !== o; o = o.n)
      o.S.U(o);
  }
}, lt.prototype.N = function() {
  if (!(-25 * -274 + -8466 + 1618 & this.f)) {
    this.f |= 6;
    for (var t = this.t; void (521 * 8 + -15 * 249 + -433) !== t; t = t.x)
      t.t.N();
  }
}, lt.prototype.peek = function() {
  if (this.h() || ui(), -666 * -5 + -1889 * -3 + 8981 * -1 & this.f)
    throw this.v;
  return this.v;
}, Object.defineProperty(lt.prototype, "value", { get: function() {
  -3169 * -2 + -1 * -7432 + -49 * 281 & this.f && ui();
  var t = Tg(this);
  if (this.h(), void (1 * 4523 + 7917 + 1 * -12440) !== t && (t.i = this.i), 1 * 8794 + -14 * -196 + -11522 & this.f)
    throw this.v;
  return this.v;
} });
function Ix(t) {
  return new lt(t);
}
function Ug(t) {
  var o = t.u;
  if (t.u = void (4 * -614 + 395 * 7 + 309 * -1), typeof o == "function") {
    jt++;
    var e = ie;
    ie = void (3 * -1851 + -3378 + 8931);
    try {
      o();
    } catch (n) {
      throw t.f &= -(5569 * 1 + 1642 + -7209), t.f |= -6243 + -1 * 7733 + 13984, tr(t), n;
    } finally {
      ie = e, er();
    }
  }
}
function tr(t) {
  for (var o = t.s; void (3 * 1044 + -3604 * -2 + -4 * 2585) !== o; o = o.n)
    o.S.U(o);
  t.x = void (-2 * 809 + 14 * 268 + -11 * 194), t.s = void (-9072 + -3 * -1342 + 5046), Ug(t);
}
function xx(t) {
  if (ie !== this)
    throw new Error("Out-of-order effect");
  jg(this), ie = t, this.f &= -(-2902 + -11 * 443 + 7777), -5396 + -7 * -772 & this.f && tr(this), er();
}
function fn(t) {
  this.x = t, this.u = void (9987 * -1 + 2704 + 7283), this.s = void (2646 + 2609 * 3 + 1 * -10473), this.o = void (-1 * 443 + 4885 + 2 * -2221), this.f = 15 * -491 + -9528 + 16925;
}
fn.prototype.c = function() {
  var t = this.S();
  try {
    if (63 * -83 + -24 * 31 + -5981 * -1 & this.f || void (2719 * -2 + 1 * -1237 + 6675) === this.x)
      return;
    var o = this.x();
    typeof o == "function" && (this.u = o);
  } finally {
    t();
  }
}, fn.prototype.S = function() {
  1 & this.f && ui(), this.f |= 715 + -348 * 16 + 4854, this.f &= -(-3623 * -1 + 3 * 2942 + -12440), Ug(this), Xg(this), jt++;
  var t = ie;
  return ie = this, xx.bind(this, t);
}, fn.prototype.N = function() {
  !(-134 * 45 + 4036 * -2 + 14104 & this.f) && (this.f |= 9377 + 2 * -1419 + -2179 * 3, this.o = yn, yn = this);
}, fn.prototype.d = function() {
  this.f |= 1405 * 1 + 419 * -2 + -559, 9829 * 1 + -416 + -9412 & this.f || tr(this);
};
function nr(t) {
  var o = new fn(t);
  try {
    o.c();
  } catch (e) {
    throw o.d(), e;
  }
  return o.d.bind(o);
}
var io;
function Xt(t, o) {
  S[t] = o.bind(null, S[t] || function() {
  });
}
function Mn(t) {
  io && io(), io = t && t.S();
}
function Mg(t) {
  var o = this, e = t.data, n = Jg(e);
  n.value = e;
  var i = Ue(function() {
    for (var r = o.__v; r = r.__; )
      if (r.__c) {
        r.__c.__$f |= -1230 + 2 * 3982 + -6730;
        break;
      }
    return o.__$u.c = function() {
      var a;
      !Ta(i.peek()) && 9710 + 9707 * -1 === ((a = o.base) == null ? void (2 * 109 + 6286 + -6504) : a.nodeType) ? o.base.data = i.peek() : (o.__$f |= 2164 + 1 * -2163, o.setState({}));
    }, Ix(function() {
      var a = n.value.value;
      return 2 * 53 + 6330 + 1609 * -4 === a ? -2 * -2581 + -2 * 929 + -413 * 8 : !(8219 + 5 * 268 + -79 * 121) === a ? "" : a || "";
    });
  }, []);
  return i.value;
}
Mg.displayName = "_st";
var ko = {};
ko.configurable = !(-26 * -127 + 1 * -1688 + -1614), ko.value = void (6 * 1168 + -4569 + -2439);
var Ho = {};
Ho.configurable = !(-7747 + -1727 * -5 + -888), Ho.value = Mg;
var Ko = {};
Ko.configurable = !(6104 + 2 * 2177 + -10458), Ko.get = function() {
  var t = {};
  return t.data = this, t;
};
var Wo = {};
Wo.configurable = !0, Wo.value = 1;
var un = {};
un.constructor = ko, un.type = Ho, un.props = Ko, un.__b = Wo, Object.defineProperties(de.prototype, un), Xt("__b", function(t, o) {
  if (typeof o.type == "string") {
    var e, n = o.props;
    for (var i in n)
      if (i !== "children") {
        var r = n[i];
        r instanceof de && (e || (o.__np = e = {}), e[i] = r, n[i] = r.peek());
      }
  }
  t(o);
}), Xt("__r", function(t, o) {
  Mn();
  var e, n = o.__c;
  n && (n.__$f &= -(-4024 + -3098 * 1 + 26 * 274), void (7793 * 1 + 5516 + 13309 * -1) === (e = n.__$u) && (n.__$u = e = function(i) {
    var r;
    return nr(function() {
      r = this;
    }), r.c = function() {
      n.__$f |= 1 * 355 + -7604 + 7250 * 1, n.setState({});
    }, r;
  }())), Mn(e), t(o);
}), Xt("__e", function(t, o, e, n) {
  Mn(), t(o, e, n);
}), Xt("diffed", function(t, o) {
  Mn();
  var e;
  if (typeof o.type == "string" && (e = o.__e)) {
    var n = o.__np, i = o.props;
    if (n) {
      var r = e.U;
      if (r)
        for (var a in r) {
          var g = r[a];
          void (-43 * -161 + -3957 + -2966) !== g && !(a in n) && (g.d(), r[a] = void (214 * -29 + -6169 + 12375));
        }
      else
        e.U = r = {};
      for (var s in n) {
        var x = r[s], C = n[s];
        void (8848 + 3317 * 1 + 15 * -811) === x ? (x = lx(e, s, C, i), r[s] = x) : x.o(C, i);
      }
    }
  }
  t(o);
});
function lx(t, o, e, n) {
  var i = o in t && t.ownerSVGElement === void 0, r = Fg(e);
  return { o: function(a, g) {
    r.value = a, n = g;
  }, d: nr(function() {
    var a = r.value.value;
    n[o] !== a && (n[o] = a, i ? t[o] = a : a ? t.setAttribute(o, a) : t.removeAttribute(o));
  }) };
}
Xt("unmount", function(t, o) {
  if (typeof o.type == "string") {
    var e = o.__e;
    if (e) {
      var n = e.U;
      if (n) {
        e.U = void (1 * 8998 + -9457 + 459);
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
      g && (a.__$u = void (-401 * 13 + -2 * -4257 + -3301 * 1), g.d());
    }
  }
  t(o);
}), Xt("__h", function(t, o, e, n) {
  (n < -5652 + 1885 * 3 || -605 * 10 + 344 * 6 + -47 * -85 === n) && (o.__$f |= 2), t(o, e, n);
}), We.prototype.shouldComponentUpdate = function(t, o) {
  var e = this.__$u;
  if (!(e && void (1093 * -3 + -4987 * -1 + -2 * 854) !== e.s || -935 + -3149 * -1 + -2210 & this.__$f))
    return !(-3170 + -1 * 9053 + 12223 * 1);
  if (3 * -1033 + 4314 + 6 * -202 & this.__$f)
    return !(3809 + 3809 * -1);
  for (var n in o)
    return !(-8238 + 3440 * -1 + 11678);
  for (var i in t)
    if (i !== "__source" && t[i] !== this.props[i])
      return !(1412 + 706 * -2);
  for (var r in this.props)
    if (!(r in t))
      return !(-3211 + -3 * 1531 + 2 * 3902);
  return !(8219 * 1 + -5547 + -2671);
};
function Jg(t) {
  return Ue(function() {
    return Fg(t);
  }, []);
}
const ir = (t) => {
  const { height: o, width: e } = qo(t), n = (t.width - e) / 2, i = (t.height - o) / (-3579 + -3581 * -1), r = {};
  return r.shiftX = n, r.shiftY = i, r.width = e, r.height = o, r;
}, Qg = (t, o) => {
  const e = qo(t), n = e.width - e.width * 2 * o, i = e.height - e.height * (5 * 571 + -1 * 2322 + 177 * -3) * o, r = (t.width - n) / (-6737 * 1 + 5275 + -3 * -488), a = (t.height - i) / (2270 * 2 + -453 * 4 + 47 * -58), g = {};
  return g.width = n, g.height = i, g.shiftX = r, g.shiftY = a, g;
}, Jn = (t, o) => {
  const { shiftX: e, shiftY: n } = ir(t), i = {};
  return i.x = o.x + e, i.y = o.y + n, i;
}, ux = (t, o) => ({ ...o, topLeft: Jn(t, o.topLeft), topRight: Jn(t, o.topRight), bottomRight: Jn(t, o.bottomRight), bottomLeft: Jn(t, o.bottomLeft) }), Cx = ({
  cameraResolution: t,
  detectionDetails: o,
  isImageMirror: e
}) => {
  const {
    documentCameraOptions: {
      thresholds: n
    }
  } = Yg(), i = nn(null);
  if (ye(() => {
    if (!(i != null && i.current))
      return;
    i.current.width = t.width, i.current.height = t.height, bI(i.current);
    const f = ir(t), v = Qg(t, n.outOfBoundsThreshold), G = ZI(t);
    o.value && (JI(i.current, o.value.document, "red"), no(i.current, f, "lime"), no(i.current, v, "yellow"), no(i.current, G, "blue"));
  }, [t, o, n.outOfBoundsThreshold]), !o.value)
    return null;
  const {
    detectionTime: r,
    document: a,
    fps: g,
    instructionCode: s,
    invalidValidators: x,
    resolution: C,
    samVersion: u
  } = o.value, p = {
    Confidence: a.confidence,
    "Smallest edge": a.smallestEdge,
    Brightness: a.brightness,
    Hotspots: a.hotspots,
    Sharpness: a.sharpness,
    "Detection time": r,
    FPS: g,
    Instruction: s,
    Resolution: JSON.stringify(C),
    "Component version": "5.2.8"
  };
  return u && (p["SAM version"] = u), x.length > 0 && (p["Invalid validators"] = x.join(", ")), Ie(oI, {
    ref: i,
    cameraResolution: t,
    detectionDetails: p,
    isImageMirror: e
  });
}, dx = async () => WebAssembly.validate(new Uint8Array([-19 * -484 + -9739 * 1 + -181 * -3, -704 * 13 + 1 * -751 + 40 * 250, 1 * 5987 + 8910 + -19 * 778, 1 * 9443 + 8186 + -17520, -1 * 7877 + -327 * -13 + 3627, 2 * -3490 + 12 * -373 + 11456, 1 * -7511 + 41 * 206 + -935, 1043 * 9 + 3391 + -12778, -7352 + 19 * 387, -53 * -7 + -4 * 921 + 3318 * 1, 1, -7540 + -46 * -173 + -322, 0, -1 * 3165 + 7728 + -1 * 4562, 1 * -2317 + -5 * 161 + 3245, -7 * -153 + -3 * -1623 + -3 * 1979, -358 * -25 + -9251 + 303, 5430 + -1 * -6848 + -12277 * 1, 2531 + 4927 * 2 + 12385 * -1, -939 + -5 * 1727 + 9584, 211 * -17 + 29 * 132 + 77 * -3, 5665 + -48 * 118, 8, 0, -5019 + -6 * -878 + -184, 1 * 5686 + -2155 * 1 + -321 * 11, 8606 + 3292 * 1 + -11645, 475 * 5 + 5701 + -8061, 6466 * -1 + -14 * 340 + 11479, 7077 + 2 * 311 + -1 * 7601, -8019 + -3 * 2762 + -1 * -16316]));
async function Ax() {
  const t = {};
  t.name = Kg, t.length = 256;
  const o = await window.crypto.subtle.generateKey(t, !0, ["encrypt", "decrypt"]), e = Uint8Array.from(Array(16).fill(6673 + 23 * 55 + -7938)), n = window.crypto.getRandomValues(e), i = {};
  return i.key = o, i.iv = n, i;
}
async function px(t) {
  const { iv: o, key: e } = await Ax(), n = {};
  n.name = Kg, n.iv = o;
  const i = await window.crypto.subtle.encrypt(n, e, t), r = await window.crypto.subtle.exportKey("raw", e), a = {};
  return a.message = i, a.key = r, a.iv = o, a;
}
function fx(t) {
  const o = new ArrayBuffer(t.length), e = new Uint8Array(o);
  for (let n = -1 * -9902 + -5 * 769 + -6057, i = t.length; n < i; n++)
    e[n] = t.charCodeAt(n);
  return o;
}
function hx() {
  const t = "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", o = window.atob(t), e = window.atob(o), n = fx(e), i = {};
  return i.name = Wg, i.hash = dI, window.crypto.subtle.importKey("spki", n, i, !0, ["encrypt"]);
}
async function mx(t) {
  const o = await hx(), e = {};
  return e.name = Wg, window.crypto.subtle.encrypt(e, o, t);
}
async function bx(t) {
  const { iv: o, key: e, message: n } = await px(t), i = await mx(e), r = {};
  return r.key = i, r.iv = o, r.message = n, r;
}
async function yx(t) {
  const o = await window.crypto.subtle.digest("SHA-1", t);
  return Array.from(new Uint8Array(o)).map((e) => e.toString(-119 * 48 + -1 * -3903 + -1 * -1825).padStart(2743 + -87 * 82 + -1 * -4393, "0")).join("");
}
class vx {
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
    X(this, "imagesForDuplicateDetection", new Eg(uI));
  }
  async initDetector(o) {
    await this.detector.initSamModule(location.href, o);
    const e = await this.detector.getSamVersion();
    this.setSamVersion(e), this.isDetectorInitialized = !0;
  }
  async getInstructionSet() {
    return await dx() ? va.SIMD : va.NO_SIMD;
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
    return o === fI;
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
    const e = o.length / pI, n = e / (-9093 + 350 * 12 + 55 * 89), i = o.length / (8797 + 1 * 6485 + -15280), r = await yx(o.slice(i - n, i + n));
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
    var g = "./this.program", s = !(-7 * -1217 + -4373 * 1 + -5 * 829), x = !(-87 * 114 + -178 * -33 + 4045);
    s = typeof window == "object", x = typeof importScripts == "function";
    var C = "", u;
    (s || x) && (x ? C = self.location.href : document.currentScript && (C = document.currentScript.src), t && (C = t), 4091 + 1 * -7708 + 3617 !== C.indexOf("blob:") ? C = C.substr(1 * -7655 + -4032 + 1 * 11687, C.lastIndexOf("/") + 1) : C = "", x && (u = function(c) {
      var I = new XMLHttpRequest();
      return I.open("GET", c, !(1 * 6712 + -5319 + -1392)), I.responseType = "arraybuffer", I.send(null), new Uint8Array(I.response);
    }));
    var p = e.printErr || console.warn.bind(console);
    for (a in r)
      r.hasOwnProperty(a) && (e[a] = r[a]);
    r = null, e.thisProgram && (g = e.thisProgram);
    var f;
    e.wasmBinary && (f = e.wasmBinary), e.noExitRuntime && e.noExitRuntime, typeof WebAssembly != "object" && qe("no native wasm support detected");
    var v, G = !(-5591 + 61 * -85 + -10777 * -1);
    function E(c) {
      c || qe("Assertion failed: undefined");
    }
    var H = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void (-4325 + 4325 * 1);
    function k(c, I, l) {
      var A = ue;
      if (6100 + 7089 * -1 + -989 * -1 < l) {
        l = I + l - (2 * -2834 + 4427 + -23 * -54);
        for (var m = 0; m < c.length; ++m) {
          var b = c.charCodeAt(m);
          if (-29 * 1975 + -1 * -9199 + 103372 <= b && 12545 + 1723 * 26 >= b) {
            var w = c.charCodeAt(++m);
            b = -76610 + 3 * 47382 + ((b & -7943 + -337 * -10 + 5596) << 10) | w & -7253 * -1 + 1 * -9745 + 3515;
          }
          if (127 >= b) {
            if (I >= l)
              break;
            A[I++] = b;
          } else {
            if (-1 * 8275 + -7881 * -1 + 1 * 2441 >= b) {
              if (I + (-271 * -12 + -487 * 2 + -2277) >= l)
                break;
              A[I++] = -3378 + -105 * -34 | b >> 1994 * -5 + -545 * -1 + -9431 * -1;
            } else {
              if (-46306 + -35 * -577 + 91646 * 1 >= b) {
                if (I + (-6493 * -1 + 10 * 263 + -9121) >= l)
                  break;
                A[I++] = 6117 + -3749 * -1 + 4821 * -2 | b >> -1 * 9391 + -2624 + 12027;
              } else {
                if (I + (257 * 19 + -141 * 43 + 1183 * 1) >= l)
                  break;
                A[I++] = -2 * -2771 + -7804 + -417 * -6 | b >> 5299 * 1 + -5367 + 86, A[I++] = 2 * -1953 + -4462 * 1 + 8496 | b >> -108 + -9465 * 1 + 5 * 1917 & -1 * -1613 + -223 * 21 + 241 * 13;
              }
              A[I++] = 3932 * 1 + -799 * -5 + -7799 | b >> -6666 + -3 * 2930 + 15462 & 29 * 239 + 159 * 37 + 311 * -41;
            }
            A[I++] = -6320 + -7 * -1163 + -1693 * 1 | b & -452 + 1 * 2599 + 1 * -2084;
          }
        }
        A[I] = -2361 * -2 + 1 * -812 + 3910 * -1;
      }
    }
    var L = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void (-178 * -1 + -5703 + 5525);
    function z(c, I) {
      for (var l = c >> 1, A = l + I / (-100 * -28 + -2 * -1931 + -6660); !(l >= A) && Ve[l]; )
        ++l;
      if (l <<= 4523 * -1 + -9393 + -4639 * -3, -8452 + -1 * -1779 + 447 * 15 < l - c && L)
        return L.decode(ue.subarray(c, l));
      for (l = -27 * -169 + 8440 + -13003, A = ""; ; ) {
        var m = he[c + 2 * l >> 1];
        if (-212 + -186 * 8 + 1700 == m || l == I / (-9156 + -9217 * 1 + -147 * -125))
          return A;
        ++l, A += String.fromCharCode(m);
      }
    }
    function F(c, I, l) {
      if (void (9030 + 77 * 17 + -49 * 211) === l && (l = -2979576031 * 1 + 20603868 * 9 + -4941624866 * -1), 2 > l)
        return 529 * -4 + -9 * 843 + 9703;
      l -= -6 * 391 + 20 * -40 + 1574 * 2;
      var A = I;
      l = l < (1185 * 1 + 1 * -5075 + 139 * 28) * c.length ? l / (10486 + -10484 * 1) : c.length;
      for (var m = 0; m < l; ++m)
        he[I >> -1 * 1283 + 7884 + -6600] = c.charCodeAt(m), I += 1 * 2837 + 8769 + -2 * 5802;
      return he[I >> 9820 + 1 * -1091 + -8728] = 9357 * 1 + 7118 + 659 * -25, I - A;
    }
    function U(c) {
      return (3751 * -1 + 4597 + -844) * c.length;
    }
    function Z(c, I) {
      for (var l = -2 * -1087 + -1 * 3669 + 1495, A = ""; !(l >= I / (639 * -10 + 5804 + 5 * 118)); ) {
        var m = re[c + 4 * l >> 2];
        if (-9165 * -1 + 8885 + -18050 * 1 == m)
          break;
        ++l, 127956 + -2515 * -9 + 17011 * -5 <= m ? (m -= 5426 * 4 + -118583 + 32483 * 5, A += String.fromCharCode(123182 + -26 * 2611 | m >> 6957 + -1 * 6947, 1319 * -53 + 60754 + 65473 | m & -1 * 1217 + 3 * 699 + 1 * 143)) : A += String.fromCharCode(m);
      }
      return A;
    }
    function _(c, I, l) {
      if (void (76 * 30 + 7903 * -1 + 5623) === l && (l = 3950038787 + 162430 * 8221 + 10 * -313789217), 4 > l)
        return 3634 * -2 + 7861 + -593;
      var A = I;
      l = A + l - (-900 * -9 + -1244 * -3 + -11828);
      for (var m = -4692 + -1423 * -4 + -1e3; m < c.length; ++m) {
        var b = c.charCodeAt(m);
        if (254 * 19 + -108226 + 158696 <= b && 1 * -50935 + 1 * -62529 + 170807 >= b) {
          var w = c.charCodeAt(++m);
          b = 65536 + ((b & 2519 + 2 * -748) << 1033 * -7 + -1210 + -9 * -939) | w & 3697 * -1 + -4993 * 1 + -9713 * -1;
        }
        if (re[I >> 7 * 1009 + -5 * -857 + -11346] = b, I += -3185 + -4643 * 2 + 12475, I + 4 > l)
          break;
      }
      return re[I >> -71 * 1 + 3 * -831 + 2566] = 7962 + -1 * -9266 + 73 * -236, I - A;
    }
    function Q(c) {
      for (var I = 411 * 1 + 950 + -1361 * 1, l = 9 * -374 + -2624 + 5990; l < c.length; ++l) {
        var A = c.charCodeAt(l);
        -62887 + 694 * 113 + -1 * -39761 <= A && 112478 + 55135 * -1 >= A && ++l, I += -7966 * 1 + -8864 + -38 * -443;
      }
      return I;
    }
    var ee, xe, ue, he, Ve, re, ae, ze, at;
    function ve(c) {
      ee = c, e.HEAP8 = xe = new Int8Array(c), e.HEAP16 = he = new Int16Array(c), e.HEAP32 = re = new Int32Array(c), e.HEAPU8 = ue = new Uint8Array(c), e.HEAPU16 = Ve = new Uint16Array(c), e.HEAPU32 = ae = new Uint32Array(c), e.HEAPF32 = ze = new Float32Array(c), e.HEAPF64 = at = new Float64Array(c);
    }
    var Te = e.INITIAL_MEMORY || 27088078 + 2 * -5155431, $e = {};
    $e.initial = Te / (73102 + -64204 * 1 + 1 * 56638), $e.maximum = 32768, e.wasmMemory ? v = e.wasmMemory : v = new WebAssembly.Memory($e), v && (ee = v.buffer), Te = ee.byteLength, ve(ee);
    var Ae = [], Wt = [], an = [], At = [];
    function pt() {
      var c = e.preRun.shift();
      Ae.unshift(c);
    }
    var Se = -22 * 317 + 51 * 54 + 4220, Ge = null;
    e.preloadedImages = {}, e.preloadedAudios = {};
    function qe(c) {
      throw e.onAbort && e.onAbort(c), p(c), G = !(-46 * -185 + -2956 + 1 * -5554), c = new WebAssembly.RuntimeError("abort(" + c + "). Build with -s ASSERTIONS=1 for more info."), i(c), c;
    }
    function Ee(c) {
      var I = Ze;
      return String.prototype.startsWith ? I.startsWith(c) : -1579 + -29 * 233 + -2084 * -4 === I.indexOf(c);
    }
    function Ot() {
      return Ee("data:application/octet-stream;base64,");
    }
    var Ze = "sam.wasm";
    if (!Ot()) {
      var Pe = Ze;
      Ze = e.locateFile ? e.locateFile(Pe, C) : C + Pe;
    }
    function cr() {
      try {
        if (f)
          return new Uint8Array(f);
        if (u)
          return u(Ze);
        throw "both async and sync fetching of the wasm failed";
      } catch (c) {
        qe(c);
      }
    }
    function fs() {
      var c = {};
      return c.credentials = "same-origin", f || !s && !x || typeof fetch != "function" || Ee("file://") ? Promise.resolve().then(cr) : fetch(Ze, c).then(function(I) {
        if (!I.ok)
          throw "failed to load wasm binary file at '" + Ze + "'";
        return I.arrayBuffer();
      }).catch(function() {
        return cr();
      });
    }
    function Hn(c) {
      for (; 0 < c.length; ) {
        var I = c.shift();
        if (typeof I == "function")
          I(e);
        else {
          var l = I.Ba;
          typeof l == "number" ? void (-5914 + 9 * 813 + -1403) === I.ta ? Ri("v", l)() : Ri("vi", l)(I.ta) : l(void (7255 + -116 * 28 + -4007) === I.ta ? null : I.ta);
        }
      }
    }
    function Ri(c, I) {
      var l = [];
      return function() {
        l.length = arguments.length;
        for (var A = 0; A < arguments.length; A++)
          l[A] = arguments[A];
        return l && l.length ? e["dynCall_" + c].apply(null, [I].concat(l)) : e["dynCall_" + c].call(null, I);
      };
    }
    function hs(c) {
      this.da = c - (86 * -85 + -1 * 7673 + 283 * 53), this.Oa = function(I) {
        re[this.da + (2 * -896 + 1512 + 288) >> 2] = I;
      }, this.La = function(I) {
        re[this.da + (7171 * 1 + -4596 * 1 + -2575) >> -9327 * 1 + 7100 + 2229] = I;
      }, this.Ma = function() {
        re[this.da + (-9958 + -3 * 1601 + -2953 * -5) >> 1 * -2248 + -103 * 18 + 4104] = -3661 + 1096 * 4 + -241 * 3;
      }, this.Ka = function() {
        xe[this.da + (1623 * 3 + -6138 + 1281) >> -2301 + 4 * -1347 + 7689] = -1 * -7646 + -6769 + -877;
      }, this.Na = function() {
        xe[this.da + 13 >> 3765 * 2 + 7662 + -15192] = -2851 + 2 * 1558 + -53 * 5;
      }, this.Fa = function(I, l) {
        this.Oa(I), this.La(l), this.Ma(), this.Ka(), this.Na();
      };
    }
    function Kn() {
      return 0 < Kn.xa;
    }
    function Vi(c) {
      switch (c) {
        case -399 + 2665 * 2 + -4930:
          return -8509 + 1 * 8509;
        case -103 * 12 + 4203 * 1 + 1 * -2965:
          return 1;
        case -3686 + 787 * -2 + 5264:
          return 146 * -38 + 6661 + 101 * -11;
        case -3547 * -1 + -8763 + 5224 * 1:
          return -1 * 3080 + -1 * 1906 + 4989;
        default:
          throw new TypeError("Unknown type size: " + c);
      }
    }
    var Ir = void (8604 + -4302 * 2);
    function me(c) {
      for (var I = ""; ue[c]; )
        I += Ir[ue[c++]];
      return I;
    }
    var Rt = {}, ft = {}, Wn = {};
    function Ei(c) {
      if (void (3187 * -1 + 6066 + -2879) === c)
        return "_unknown";
      c = c.replace(/[^a-zA-Z0-9_]/g, "$");
      var I = c.charCodeAt(-5651 + 9442 * -1 + 15093);
      return -3449 + -2 * 3688 + 83 * 131 <= I && -73 + 6 * 771 + -4496 >= I ? "_" + c : c;
    }
    function Pi(c, I) {
      return c = Ei(c), new Function("body", "return function " + c + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(I);
    }
    function Yi(c) {
      var I = Error, l = Pi(c, function(A) {
        this.name = c, this.message = A, A = Error(A).stack, void (-9250 + -74 * -125) !== A && (this.stack = this.toString() + `
` + A.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return l.prototype = Object.create(I.prototype), l.prototype.constructor = l, l.prototype.toString = function() {
        return void (-3572 + -9941 * 1 + -13513 * -1) === this.message ? this.name : this.name + ": " + this.message;
      }, l;
    }
    var Vt = void (-152 * -13 + -4696 + 2720);
    function T(c) {
      throw new Vt(c);
    }
    var xr = void (-8003 + 151 * 53);
    function On(c) {
      throw new xr(c);
    }
    function Et(c, I, l) {
      function A(y) {
        y = l(y), y.length !== c.length && On("Mismatched type converter count");
        for (var K = 1 * -5953 + 1830 + 4123; K < c.length; ++K)
          _e(c[K], y[K]);
      }
      c.forEach(function(y) {
        Wn[y] = I;
      });
      var m = Array(I.length), b = [], w = -8781 + -1 * -8781;
      I.forEach(function(y, K) {
        ft.hasOwnProperty(y) ? m[K] = ft[y] : (b.push(y), Rt.hasOwnProperty(y) || (Rt[y] = []), Rt[y].push(function() {
          m[K] = ft[y], ++w, w === b.length && A(m);
        }));
      }), b.length === 0 && A(m);
    }
    function _e(c, I, l) {
      if (l = l || {}, !("argPackAdvance" in I))
        throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var A = I.name;
      if (c || T('type "' + A + '" must have a positive integer typeid pointer'), ft.hasOwnProperty(c)) {
        if (l.Ea)
          return;
        T("Cannot register type '" + A + "' twice");
      }
      ft[c] = I, delete Wn[c], Rt.hasOwnProperty(c) && (I = Rt[c], delete Rt[c], I.forEach(function(m) {
        m();
      }));
    }
    function ms(c) {
      var I = {};
      return I.count = c.count, I.oa = c.oa, I.pa = c.pa, I.da = c.da, I.fa = c.fa, I.ga = c.ga, I.ha = c.ha, I;
    }
    function Li(c) {
      T(c.A.fa.ea.name + " instance already deleted");
    }
    var Ni = !(3 * 213 + -4767 + 4129);
    function lr() {
    }
    function ur(c) {
      --c.count.value, -12689 + -1 * -12689 === c.count.value && (c.ga ? c.ha.na(c.ga) : c.fa.ea.na(c.da));
    }
    function gn(c) {
      return typeof FinalizationGroup > "u" ? (gn = function(I) {
        return I;
      }, c) : (Ni = new FinalizationGroup(function(I) {
        for (var l = I.next(); !l.done; l = I.next())
          l = l.value, l.da ? ur(l) : console.warn("object already deleted: " + l.da);
      }), gn = function(I) {
        return Ni.register(I, I.A, I.A), I;
      }, lr = function(I) {
        Ni.unregister(I.A);
      }, gn(c));
    }
    var sn = void (-8417 + -701 * 3 + 10520), cn = [];
    function Ti() {
      for (; cn.length; ) {
        var c = cn.pop();
        c.A.oa = !1, c.delete();
      }
    }
    function gt() {
    }
    var Cr = {};
    function bs(c, I) {
      var l = e;
      if (void (-18 * 307 + 8781 * 1 + -3255) === l[c].ja) {
        var A = l[c];
        l[c] = function() {
          return l[c].ja.hasOwnProperty(arguments.length) || T("Function '" + I + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + l[c].ja + ")!"), l[c].ja[arguments.length].apply(this, arguments);
        }, l[c].ja = [], l[c].ja[A.ya] = A;
      }
    }
    function dr(c, I, l) {
      e.hasOwnProperty(c) ? ((void (-385 + -11 * -35) === l || void (-228 * -5 + -8090 * -1 + -9230) !== e[c].ja && void (-9 * -1083 + 1167 + -10914) !== e[c].ja[l]) && T("Cannot register public name '" + c + "' twice"), bs(c, c), e.hasOwnProperty(l) && T("Cannot register multiple overloads of a function with the same number of arguments (" + l + ")!"), e[c].ja[l] = I) : (e[c] = I, void (553 + 173 * 5 + -1418) !== l && (e[c].Ra = l));
    }
    function ys(c, I, l, A, m, b, w, y) {
      this.name = c, this.constructor = I, this.ma = l, this.na = A, this.ia = m, this.Ca = b, this.qa = w, this.Aa = y;
    }
    function Rn(c, I, l) {
      for (; I !== l; )
        I.qa || T("Expected null or instance of " + l.name + ", got an instance of " + I.name), c = I.qa(c), I = I.ia;
      return c;
    }
    function vs(c, I) {
      return I === null ? (this.ua && T("null is not a valid " + this.name), 7510 + 1 * -3243 + 17 * -251) : (I.A || T('Cannot pass "' + Yt(I) + '" as a ' + this.name), I.A.da || T("Cannot pass deleted object as a pointer of type " + this.name), Rn(I.A.da, I.A.fa.ea, this.ea));
    }
    function Bs(c, I) {
      if (I === null) {
        if (this.ua && T("null is not a valid " + this.name), this.sa) {
          var l = this.Ha();
          return c !== null && c.push(this.na, l), l;
        }
        return 1 * 1283 + -5681 + -6 * -733;
      }
      if (I.A || T('Cannot pass "' + Yt(I) + '" as a ' + this.name), I.A.da || T("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && I.A.fa.ra && T("Cannot convert argument of type " + (I.A.ha ? I.A.ha.name : I.A.fa.name) + " to parameter type " + this.name), l = Rn(I.A.da, I.A.fa.ea, this.ea), this.sa)
        switch (I.A.ga === void 0 && T("Passing raw pointer to smart pointer is illegal"), this.Pa) {
          case 3298 * 3 + -178 + -1388 * 7:
            I.A.ha === this ? l = I.A.ga : T("Cannot convert argument of type " + (I.A.ha ? I.A.ha.name : I.A.fa.name) + " to parameter type " + this.name);
            break;
          case 1:
            l = I.A.ga;
            break;
          case 2:
            if (I.A.ha === this)
              l = I.A.ga;
            else {
              var A = I.clone();
              l = this.Ia(l, Pt(function() {
                A.delete();
              })), c !== null && c.push(this.na, l);
            }
            break;
          default:
            T("Unsupporting sharing policy");
        }
      return l;
    }
    function ws(c, I) {
      return I === null ? (this.ua && T("null is not a valid " + this.name), -7907 + -2 * -3443 + 1 * 1021) : (I.A || T('Cannot pass "' + Yt(I) + '" as a ' + this.name), I.A.da || T("Cannot pass deleted object as a pointer of type " + this.name), I.A.fa.ra && T("Cannot convert argument of type " + I.A.fa.name + " to parameter type " + this.name), Rn(I.A.da, I.A.fa.ea, this.ea));
    }
    function Vn(c) {
      return this.fromWireType(ae[c >> -916 + 1369 * -2 + 457 * 8]);
    }
    function Ar(c, I, l) {
      return I === l ? c : void (-1 * 2111 + -21 * -367 + 1399 * -4) === l.ia ? null : (c = Ar(c, I, l.ia), c === null ? null : l.Aa(c));
    }
    var In = {};
    function Ss(c, I) {
      for (void (47 * -11 + -223 + 74 * 10) === I && T("ptr should not be undefined"); c.ia; )
        I = c.qa(I), c = c.ia;
      return In[I];
    }
    function En(c, I) {
      I.fa && I.da || On("makeClassHandle requires ptr and ptrType"), !!I.ha != !!I.ga && On("Both smartPtrType and smartPtr must be specified");
      var l = {};
      l.value = 1, I.count = l;
      var A = {};
      A.value = I;
      var m = {};
      return m.A = A, gn(Object.create(c, m));
    }
    function et(c, I, l, A) {
      this.name = c, this.ea = I, this.ua = l, this.ra = A, this.sa = !1, this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void (-8012 * 1 + 1351 * 2 + 5310), void (6 * -1481 + 1 * 1211 + 7675) !== I.ia ? this.toWireType = Bs : (this.toWireType = A ? vs : ws, this.ka = null);
    }
    function pr(c, I, l) {
      e.hasOwnProperty(c) || On("Replacing nonexistant public symbol"), void (-1 * -271 + 477 * -16 + 7361) !== e[c].ja && void (-1 * -5705 + 5724 + -1039 * 11) !== l ? e[c].ja[l] = I : (e[c] = I, e[c].ya = l);
    }
    function st(c, I) {
      c = me(c);
      var l = Ri(c, I);
      return typeof l != "function" && T("unknown function pointer with signature " + c + ": " + I), l;
    }
    var fr = void (531 * 15 + 143 * 3 + -8394);
    function hr(c) {
      c = Or(c);
      var I = me(c);
      return tt(c), I;
    }
    function xn(c, I) {
      function l(b) {
        m[b] || ft[b] || (Wn[b] ? Wn[b].forEach(l) : (A.push(b), m[b] = !(271 * -7 + 3128 + -1231)));
      }
      var A = [], m = {};
      throw I.forEach(l), new fr(c + ": " + A.map(hr).join([", "]));
    }
    function mr(c, I) {
      for (var l = [], A = -2027 + -1 * -2027; A < c; A++)
        l.push(re[(I >> 1 * 2011 + 3708 + -5717 * 1) + A]);
      return l;
    }
    function Pn(c) {
      for (; c.length; ) {
        var I = c.pop();
        c.pop()(I);
      }
    }
    function br(c, I, l) {
      return c instanceof Object || T(l + ' with invalid "this": ' + c), c instanceof I.ea.constructor || T(l + ' incompatible with "this" of type ' + c.constructor.name), c.A.da || T("cannot call emscripten binding method " + l + " on deleted object"), Rn(c.A.da, c.A.fa.ea, I.ea);
    }
    var yr = {};
    yr.value = void (918 * 4 + 1 * 4789 + -8461);
    var vr = {};
    vr.value = null;
    var Br = {};
    Br.value = !(145 * -20 + 1877 * -3 + 8531);
    var wr = {};
    wr.value = !(347 * 7 + -8294 + 5866);
    var Fi = [], ke = [{}, yr, vr, Br, wr];
    function Di(c) {
      -374 * 20 + 2366 + 2 * 2559 < c && -227 * -23 + -6695 * 1 + -2 * -737 === --ke[c].Ja && (ke[c] = void (-2098 + -1019 * 4 + 6174), Fi.push(c));
    }
    function Pt(c) {
      switch (c) {
        case void (-1858 * 2 + -1 * 573 + -4289 * -1):
          return 2835 + -10 * 424 + 1406;
        case null:
          return 8224 + 1 * -8222;
        case !0:
          return 3;
        case !(-370 + 4027 * -1 + 2199 * 2):
          return 2066 + -1 * 2062;
        default:
          var I = Fi.length ? Fi.pop() : ke.length, l = {};
          return l.Ja = 1, l.value = c, ke[I] = l, I;
      }
    }
    function Yt(c) {
      if (c === null)
        return "null";
      var I = typeof c;
      return I === "object" || I === "array" || I === "function" ? c.toString() : "" + c;
    }
    function Gs(c, I) {
      switch (I) {
        case 9 * -1065 + -599 * -9 + 4196:
          return function(l) {
            return this.fromWireType(ze[l >> 8401 * 1 + 3741 + -12140]);
          };
        case 8161 * -1 + 12 * -610 + 15484:
          return function(l) {
            return this.fromWireType(at[l >> 744 + 57 * 19 + -1824]);
          };
        default:
          throw new TypeError("Unknown float type: " + c);
      }
    }
    function Zs(c) {
      var I = Function;
      if (!(I instanceof Function))
        throw new TypeError("new_ called with constructor type " + typeof I + " which is not a function");
      var l = Pi(I.name || "unknownFunctionName", function() {
      });
      return l.prototype = I.prototype, l = new l(), c = I.apply(l, c), c instanceof Object ? c : l;
    }
    function ks(c, I, l) {
      switch (I) {
        case 1231 + 1 * -1231:
          return l ? function(A) {
            return xe[A];
          } : function(A) {
            return ue[A];
          };
        case -1187 * -8 + -494 + -9001:
          return l ? function(A) {
            return he[A >> 7850 + 1 * -9617 + 1768];
          } : function(A) {
            return Ve[A >> 15 * 267 + 2921 * -2 + 1838];
          };
        case -5962 + -5612 * -1 + 352:
          return l ? function(A) {
            return re[A >> 1898 * -1 + 5 * 1168 + -3940];
          } : function(A) {
            return ae[A >> -2550 + -2 * -1276];
          };
        default:
          throw new TypeError("Unknown integer type: " + c);
      }
    }
    function Xi(c) {
      return c || T("Cannot use deleted val. handle = " + c), ke[c].value;
    }
    function Sr(c, I) {
      var l = ft[c];
      return void (-1567 * 1 + -194 * -3 + 985) === l && T(I + " has unknown type " + hr(c)), l;
    }
    var Hs = {}, Gr = {};
    function Zr() {
      if (!ji) {
        var c = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: g || "./this.program" }, I;
        for (I in Gr)
          c[I] = Gr[I];
        var l = [];
        for (I in c)
          l.push(I + "=" + c[I]);
        ji = l;
      }
      return ji;
    }
    var ji, kr = [];
    function Hr(c) {
      var I = {}, l;
      for (l in c)
        (function(A) {
          var m = c[A];
          I[A] = typeof m == "function" ? function() {
            kr.push(A);
            try {
              return m.apply(null, arguments);
            } finally {
              if (G)
                return;
              var b = kr.pop();
              E(b === A);
            }
          } : m;
        })(l);
      return I;
    }
    for (var Kr = Array(1532 * 1 + -3886 + 2610), Yn = -3602 + 813 * -7 + 9293 * 1; -4642 + 3 * 1797 + -17 * 29 > Yn; ++Yn)
      Kr[Yn] = String.fromCharCode(Yn);
    Ir = Kr, Vt = e.BindingError = Yi("BindingError"), xr = e.InternalError = Yi("InternalError"), gt.prototype.isAliasOf = function(c) {
      if (!(this instanceof gt && c instanceof gt))
        return !(8 * 511 + -5674 + 1587);
      var I = this.A.fa.ea, l = this.A.da, A = c.A.fa.ea;
      for (c = c.A.da; I.ia; )
        l = I.qa(l), I = I.ia;
      for (; A.ia; )
        c = A.qa(c), A = A.ia;
      return I === A && l === c;
    }, gt.prototype.clone = function() {
      if (this.A.da || Li(this), this.A.pa)
        return this.A.count.value += -405 * 12 + -3 * 1059 + -8038 * -1, this;
      var c = gn(Object.create(Object.getPrototypeOf(this), { A: { value: ms(this.A) } }));
      return c.A.count.value += 175 * 6 + -1999 * 4 + 6947, c.A.oa = !(-2231 * 4 + -646 + 9571), c;
    }, gt.prototype.delete = function() {
      this.A.da || Li(this), this.A.oa && !this.A.pa && T("Object already scheduled for deletion"), lr(this), ur(this.A), this.A.pa || (this.A.ga = void (445 * -21 + 387 * -25 + -12 * -1585), this.A.da = void (-1 * -5026 + 6 * -397 + -2644 * 1));
    }, gt.prototype.isDeleted = function() {
      return !this.A.da;
    }, gt.prototype.deleteLater = function() {
      return this.A.da || Li(this), this.A.oa && !this.A.pa && T("Object already scheduled for deletion"), cn.push(this), -343 + 344 * 1 === cn.length && sn && sn(Ti), this.A.oa = !(1 * -6932 + 2 * -247 + -79 * -94), this;
    }, et.prototype.Da = function(c) {
      return this.wa && (c = this.wa(c)), c;
    }, et.prototype.va = function(c) {
      this.na && this.na(c);
    }, et.prototype.argPackAdvance = 57 * 173 + 6642 + -16495, et.prototype.readValueFromPointer = Vn, et.prototype.deleteObject = function(c) {
      c !== null && c.delete();
    }, et.prototype.fromWireType = function(c) {
      function I() {
        return this.sa ? En(this.ea.ma, { fa: this.Ga, da: l, ha: this, ga: c }) : En(this.ea.ma, { fa: this, da: c });
      }
      var l = this.Da(c);
      if (!l)
        return this.va(c), null;
      var A = Ss(this.ea, l);
      if (void (-3315 + -221 * -15) !== A)
        return -6161 * -1 + -1398 + -4763 === A.A.count.value ? (A.A.da = l, A.A.ga = c, A.clone()) : (A = A.clone(), this.va(c), A);
      if (A = this.ea.Ca(l), A = Cr[A], !A)
        return I.call(this);
      A = this.ra ? A.za : A.pointerType;
      var m = Ar(l, this.ea, A.ea);
      return m === null ? I.call(this) : this.sa ? En(A.ea.ma, { fa: A, da: m, ha: this, ga: c }) : En(A.ea.ma, { fa: A, da: m });
    }, e.getInheritedInstanceCount = function() {
      return Object.keys(In).length;
    }, e.getLiveInheritedInstances = function() {
      var c = [], I;
      for (I in In)
        In.hasOwnProperty(I) && c.push(In[I]);
      return c;
    }, e.flushPendingDeletes = Ti, e.setDelayFunction = function(c) {
      sn = c, cn.length && sn && sn(Ti);
    }, fr = e.UnboundTypeError = Yi("UnboundTypeError"), e.count_emval_handles = function() {
      for (var c = 5663 * 1 + -278 * 16 + 9 * -135, I = 7131 + -509 * 14; I < ke.length; ++I)
        void (1 * 9463 + -7550 + 1 * -1913) !== ke[I] && ++c;
      return c;
    }, e.get_first_emval = function() {
      for (var c = -1 * -3431 + -11 * -53 + -211 * 19; c < ke.length; ++c)
        if (void (4281 + -5 * 1289 + 2164 * 1) !== ke[c])
          return ke[c];
      return null;
    }, Wt.push({ Ba: function() {
      Wr();
    } });
    var Ks = { z: function(c) {
      return Ln(c + (-6238 + -211 * 17 + 9841)) + 16;
    }, u: function(c, I, l) {
      throw new hs(c).Fa(I, l), "uncaught_exception" in Kn ? Kn.xa++ : Kn.xa = 5307 + 2177 * 2 + -9660, c;
    }, w: function(c, I, l, A, m) {
      var b = Vi(l);
      I = me(I), _e(c, { name: I, fromWireType: function(w) {
        return !!w;
      }, toWireType: function(w, y) {
        return y ? A : m;
      }, argPackAdvance: 8, readValueFromPointer: function(w) {
        if (281 * -5 + -952 + 2358 === l)
          var y = xe;
        else if (-7097 + -134 * -11 + 5625 === l)
          y = he;
        else if (-944 + -1696 * 2 + -124 * -35 === l)
          y = re;
        else
          throw new TypeError("Unknown boolean type size: " + I);
        return this.fromWireType(y[w >> b]);
      }, ka: null });
    }, i: function(c, I, l, A, m, b, w, y, K, W, O, R, M) {
      O = me(O), b = st(m, b), y && (y = st(w, y)), W && (W = st(K, W)), M = st(R, M);
      var se = Ei(O);
      dr(se, function() {
        xn("Cannot construct " + O + " due to unbound types", [A]);
      }), Et([c, I, l], A ? [A] : [], function(V) {
        if (V = V[-1 * 5779 + -1113 + 6892], A)
          var Fe = V.ea, pe = Fe.ma;
        else
          pe = gt.prototype;
        V = Pi(se, function() {
          if (Object.getPrototypeOf(this) !== Lt)
            throw new Vt("Use 'new' to construct " + O);
          if (Nt.la === void 0)
            throw new Vt(O + " has no accessible constructor");
          var Vr = Nt.la[arguments.length];
          if (void (4411 * 1 + -5535 + 2 * 562) === Vr)
            throw new Vt("Tried to invoke ctor of " + O + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(Nt.la).toString() + ") parameters instead!");
          return Vr.apply(this, arguments);
        });
        var Be = {};
        Be.value = V;
        var ht = {};
        ht.constructor = Be;
        var Lt = Object.create(pe, ht);
        V.prototype = Lt;
        var Nt = new ys(O, V, Lt, M, Fe, b, y, W);
        Fe = new et(O, Nt, !(-2175 + 16 * 29 + 1711), !(1 * -4591 + -3359 + -1 * -7951)), pe = new et(O + "*", Nt, !(-448 * 20 + 10 * -6 + 9021 * 1), !(-8144 + -2 * -3261 + 1623));
        var Rr = new et(O + " const*", Nt, !(22 * -19 + 5 * -651 + -22 * -167), !(1 * -6427 + 1111 + -1329 * -4)), Mi = {};
        return Mi.pointerType = pe, Mi.za = Rr, Cr[c] = Mi, pr(se, V), [Fe, pe, Rr];
      });
    }, h: function(c, I, l, A, m, b) {
      E(0 < I);
      var w = mr(I, l);
      m = st(A, m);
      var y = [b], K = [];
      Et([], [c], function(W) {
        W = W[-9686 + 2 * -1553 + 52 * 246];
        var O = "constructor " + W.name;
        if (void (-185 * -15 + 68 * -4 + -1 * 2503) === W.ea.la && (W.ea.la = []), void (607 * 15 + -6083 + -1 * 3022) !== W.ea.la[I - (5 * 1433 + -145 + -7019)])
          throw new Vt("Cannot register multiple constructors with identical number of parameters (" + (I - (-88 * 18 + 10 * 271 + -1125)) + ") for class '" + W.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return W.ea.la[I - (-6165 + 1 * 4938 + 1 * 1228)] = function() {
          xn("Cannot construct " + W.name + " due to unbound types", w);
        }, Et([], w, function(R) {
          return W.ea.la[I - (1430 * -4 + 5842 + -121)] = function() {
            arguments.length !== I - (-11791 + -4 * -2948) && T(O + " called with " + arguments.length + " arguments, expected " + (I - 1)), K.length = 16265 + 5 * -3253, y.length = I;
            for (var M = -5536 + -614 * 16 + -15361 * -1; M < I; ++M)
              y[M] = R[M].toWireType(K, arguments[M - (-1 * 8570 + 9491 + -920)]);
            return M = m.apply(null, y), Pn(K), R[10381 + -10381 * 1].fromWireType(M);
          }, [];
        }), [];
      });
    }, b: function(c, I, l, A, m, b, w, y, K, W) {
      I = me(I), m = st(A, m), Et([], [c], function(O) {
        O = O[-7 * 203 + -3913 * -2 + -6405];
        var R = O.name + "." + I, M = { get: function() {
          xn("Cannot access " + R + " due to unbound types", [l, w]);
        }, enumerable: !(3 * 1555 + 263 * -12 + -1509), configurable: !(-4932 + 4 * 1233) };
        return K ? M.set = function() {
          xn("Cannot access " + R + " due to unbound types", [l, w]);
        } : M.set = function() {
          T(R + " is a read-only property");
        }, Object.defineProperty(O.ea.ma, I, M), Et([], K ? [l, w] : [l], function(se) {
          var V = se[0], Fe = { get: function() {
            var Be = br(this, O, R + " getter");
            return V.fromWireType(m(b, Be));
          }, enumerable: !(3522 + 18 * 180 + -6762) };
          if (K) {
            K = st(y, K);
            var pe = se[-1284 + 1013 * -1 + 2298];
            Fe.set = function(Be) {
              var ht = br(this, O, R + " setter"), Lt = [];
              K(W, ht, pe.toWireType(Lt, Be)), Pn(Lt);
            };
          }
          return Object.defineProperty(O.ea.ma, I, Fe), [];
        }), [];
      });
    }, v: function(c, I) {
      I = me(I), _e(c, { name: I, fromWireType: function(l) {
        var A = ke[l].value;
        return Di(l), A;
      }, toWireType: function(l, A) {
        return Pt(A);
      }, argPackAdvance: 8, readValueFromPointer: Vn, ka: null });
    }, m: function(c, I, l) {
      l = Vi(l), I = me(I), _e(c, { name: I, fromWireType: function(A) {
        return A;
      }, toWireType: function(A, m) {
        if (typeof m != "number" && typeof m != "boolean")
          throw new TypeError('Cannot convert "' + Yt(m) + '" to ' + this.name);
        return m;
      }, argPackAdvance: 8, readValueFromPointer: Gs(I, l), ka: null });
    }, c: function(c, I, l, A, m, b) {
      var w = mr(I, l);
      c = me(c), m = st(A, m), dr(c, function() {
        xn("Cannot call " + c + " due to unbound types", w);
      }, I - 1), Et([], w, function(y) {
        var K = c, W = c;
        y = [y[25 * -194 + 4778 * -1 + 29 * 332], null].concat(y.slice(2723 + -2 * 1361));
        var O = m, R = y.length;
        102 * 50 + -3957 + -1141 > R && T("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var M = y[11 * -189 + -4183 * -1 + 2103 * -1] !== null && !(-141 * 50 + -6086 + 29 * 453), se = !1, V = -2 * -2293 + -227 * 4 + -3677; V < y.length; ++V)
          if (y[V] !== null && void (2765 + 35 * -79) === y[V].ka) {
            se = !(233 * -3 + -6480 + -7179 * -1);
            break;
          }
        var Fe = y[0].name !== "void", pe = "", Be = "";
        for (V = 0; V < R - (530 * 17 + -8007 + -1001); ++V)
          pe += (V !== 0 ? ", " : "") + "arg" + V, Be += (-9 * 941 + 3993 + 4476 !== V ? ", " : "") + "arg" + V + "Wired";
        W = "return function " + Ei(W) + "(" + pe + `) {
if (arguments.length !== ` + (R - (-6 * 792 + 3424 + 1330)) + `) {
throwBindingError('function ` + W + " called with ' + arguments.length + ' arguments, expected " + (R - (7778 + -4889 * -1 + -12665)) + ` args!');
}
`, se && (W += `var destructors = [];
`);
        var ht = se ? "destructors" : "null";
        for (pe = "throwBindingError invoker fn runDestructors retType classParam".split(" "), O = [T, O, b, Pn, y[799 + -197 * -22 + -5133], y[2906 + -47 * -211 + 1 * -12822]], M && (W += "var thisWired = classParam.toWireType(" + ht + `, this);
`), V = 0; V < R - 2; ++V)
          W += "var arg" + V + "Wired = argType" + V + ".toWireType(" + ht + ", arg" + V + "); // " + y[V + (-8932 + 1 * 4572 + 4362)].name + `
`, pe.push("argType" + V), O.push(y[V + (-4821 * 2 + 404 * -9 + -13280 * -1)]);
        if (M && (Be = "thisWired" + (-2234 * 3 + 1324 + 5378 * 1 < Be.length ? ", " : "") + Be), W += (Fe ? "var rv = " : "") + "invoker(fn" + (-21 * 143 + 1209 + 23 * 78 < Be.length ? ", " : "") + Be + `);
`, se)
          W += `runDestructors(destructors);
`;
        else
          for (V = M ? -1 * -6246 + -98 * -70 + -13105 : 392 + 5 * -1241 + 5815 * 1; V < y.length; ++V)
            R = V === 1 ? "thisWired" : "arg" + (V - 2) + "Wired", y[V].ka !== null && (W += R + "_dtor(" + R + "); // " + y[V].name + `
`, pe.push(R + "_dtor"), O.push(y[V].ka));
        return Fe && (W += `var ret = retType.fromWireType(rv);
return ret;
`), pe.push(W + `}
`), y = Zs(pe).apply(null, O), pr(K, y, I - (1831 + -99 * -81 + 49 * -201)), [];
      });
    }, e: function(c, I, l, A, m) {
      function b(W) {
        return W;
      }
      I = me(I), -(-3 * 1667 + -4502 + 9504) === m && (m = -3 * 2611990393 + -1 * 2402553136 + 14533491610);
      var w = Vi(l);
      if (A === 0) {
        var y = 32 - 8 * l;
        b = function(W) {
          return W << y >>> y;
        };
      }
      var K = -(-5095 + 771 * -5 + 8951) != I.indexOf("unsigned");
      _e(c, { name: I, fromWireType: b, toWireType: function(W, O) {
        if (typeof O != "number" && typeof O != "boolean")
          throw new TypeError('Cannot convert "' + Yt(O) + '" to ' + this.name);
        if (O < A || O > m)
          throw new TypeError('Passing a number "' + Yt(O) + '" from JS side to C/C++ side to an argument of type "' + I + '", which is outside the valid range [' + A + ", " + m + "]!");
        return K ? O >>> -2 * -1329 + -3119 * 1 + 461 * 1 : O | -4 * -697 + 5 * 386 + -4718;
      }, argPackAdvance: 8, readValueFromPointer: ks(I, w, -3166 + 953 * 4 + -646 !== A), ka: null });
    }, d: function(c, I, l) {
      function A(y) {
        y >>= 9717 * -1 + -8634 + 18353 * 1;
        var K = ae;
        return new m(ee, K[y + (5645 + -239 * -35 + -14009)], K[y]);
      }
      var m = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][I];
      l = me(l);
      var b = {};
      b.name = l, b.fromWireType = A, b.argPackAdvance = 8, b.readValueFromPointer = A;
      var w = {};
      w.Ea = !(-6598 + -1 * -1009 + 5589), _e(c, b, w);
    }, n: function(c, I) {
      I = me(I);
      var l = I === "std::string";
      _e(c, { name: I, fromWireType: function(A) {
        var m = ae[A >> 2];
        if (l)
          for (var b = A + (-5 * 1249 + 5508 + -39 * -19), w = 2 * 812 + -3072 + 1448; w <= m; ++w) {
            var y = A + 4 + w;
            if (w == m || -4162 * -1 + 4 * -12 + -4114 == ue[y]) {
              if (b) {
                var K = b, W = ue, O = K + (y - b);
                for (b = K; W[b] && !(b >= O); )
                  ++b;
                if (2554 + -2 * 4245 + 5952 < b - K && W.subarray && H)
                  K = H.decode(W.subarray(K, b));
                else {
                  for (O = ""; K < b; ) {
                    var R = W[K++];
                    if (R & -7663 + -27 * -202 + 2337) {
                      var M = W[K++] & 63;
                      if (-2487 + -1246 * -2 + 17 * 11 == (R & -472 * -10 + 6173 + -10669))
                        O += String.fromCharCode((R & 730 * -11 + 25 * 388 + -1639) << -438 + -109 * 87 + 9927 * 1 | M);
                      else {
                        var se = W[K++] & 63;
                        R = -3 * 3121 + 7453 + 2134 == (R & -9843 + -3 * -3361) ? (R & 15) << 4 * -1369 + -2326 * -3 + -1490 | M << -2494 + -1 * 5403 + 7 * 1129 | se : (R & -935 + -1 * 3868 + 4810) << -2 * 1168 + -3533 * 2 + 9420 * 1 | M << -17875 + 1 * 17887 | se << 6 * 187 + -2111 + -995 * -1 | W[K++] & -4231 * -2 + 7583 + 7991 * -2, 126633 + -61097 * 1 > R ? O += String.fromCharCode(R) : (R -= 65536, O += String.fromCharCode(4083 + -3 * -17071 | R >> 4639 + -35 * 271 + 4856, -29405 * 1 + 4871 * 3 + -24 * -2963 | R & 1626 * 3 + -1 * 6791 + 2936));
                      }
                    } else
                      O += String.fromCharCode(R);
                  }
                  K = O;
                }
              } else
                K = "";
              if (void (88 * 78 + 347 * -1 + -6517) === V)
                var V = K;
              else
                V += String.fromCharCode(8094 + -901 * 2 + 484 * -13), V += K;
              b = y + (385 * 4 + 4126 + 5 * -1133);
            }
          }
        else {
          for (V = Array(m), w = 4882 + -1 * -1511 + 6393 * -1; w < m; ++w)
            V[w] = String.fromCharCode(ue[A + (-1 * -1451 + 1 * 4877 + -6324) + w]);
          V = V.join("");
        }
        return tt(A), V;
      }, toWireType: function(A, m) {
        m instanceof ArrayBuffer && (m = new Uint8Array(m));
        var b = typeof m == "string";
        b || m instanceof Uint8Array || m instanceof Uint8ClampedArray || m instanceof Int8Array || T("Cannot pass non-string to std::string");
        var w = (l && b ? function() {
          for (var W = 887 * -3 + -793 * -1 + 1868 * 1, O = -739 * -11 + -202 * 17 + -4695; O < m.length; ++O) {
            var R = m.charCodeAt(O);
            -1460 * -22 + -30192 + 1 * 53368 <= R && -20192 + -9 * -8615 >= R && (R = 65536 + ((R & 2957 + -47 * 174 + 1 * 6244) << 7697 + 3963 * 2 + 13 * -1201) | m.charCodeAt(++O) & 245 * -17 + 9905 + -4717), 45 * 30 + 89 * 95 + -9678 >= R ? ++W : W = -27 * -276 + 7496 + -12901 >= R ? W + (-7535 + 163 * 20 + -329 * -13) : -74447 * 1 + -1 * 16433 + 156415 >= R ? W + (21 * 421 + 2218 + -11056) : W + (1 * 3929 + -11 * -573 + -2 * 5114);
          }
          return W;
        } : function() {
          return m.length;
        })(), y = Ln(4279 + 8107 * -1 + 3832 + w + (-5162 + -37 * 141 + -1730 * -6));
        if (ae[y >> -197 * 36 + 12 * 729 + -827 * 2] = w, l && b)
          k(m, y + (1 * 4316 + 268 * 3 + -1279 * 4), w + 1);
        else if (b)
          for (b = -2 * -2326 + 4208 + -886 * 10; b < w; ++b) {
            var K = m.charCodeAt(b);
            18 * -160 + -7592 + -10727 * -1 < K && (tt(y), T("String has UTF-16 code units that do not fit in 8 bits")), ue[y + 4 + b] = K;
          }
        else
          for (b = 371 * 2 + -1020 + -278 * -1; b < w; ++b)
            ue[y + (-1 * -299 + -4680 + -5 * -877) + b] = m[b];
        return A !== null && A.push(tt, y), y;
      }, argPackAdvance: 8, readValueFromPointer: Vn, ka: function(A) {
        tt(A);
      } });
    }, j: function(c, I, l) {
      if (l = me(l), -2 * 2908 + -4375 + 10193 === I)
        var A = z, m = F, b = U, w = function() {
          return Ve;
        }, y = 1;
      else
        694 * -13 + -1999 * 1 + -45 * -245 === I && (A = Z, m = _, b = Q, w = function() {
          return ae;
        }, y = 8467 + 52 * 87 + -12989 * 1);
      _e(c, { name: l, fromWireType: function(K) {
        for (var W = ae[K >> -1673 * -3 + 2 * -2236 + 109 * -5], O = w(), R, M = K + (-2403 + -1 * -7507 + -5100), se = 0; se <= W; ++se) {
          var V = K + 4 + se * I;
          (se == W || -19 * -123 + 6734 + -9071 == O[V >> y]) && (M = A(M, V - M), void (-5882 + -2941 * -2) === R ? R = M : (R += String.fromCharCode(-1 * 5387 + 4738 + 649), R += M), M = V + I);
        }
        return tt(K), R;
      }, toWireType: function(K, W) {
        typeof W != "string" && T("Cannot pass non-string to C++ string type " + l);
        var O = b(W), R = Ln(4 + O + I);
        return ae[R >> 5470 + 1 * -5468] = O >> y, m(W, R + (3309 * -3 + -1 * -925 + 474 * 19), O + I), K !== null && K.push(tt, R), R;
      }, argPackAdvance: 8, readValueFromPointer: Vn, ka: function(K) {
        tt(K);
      } });
    }, x: function(c, I) {
      I = me(I);
      var l = {};
      l.Qa = !(-1 * -2791 + -122 + 2669 * -1), l.name = I, l.argPackAdvance = 0, l.fromWireType = function() {
      }, l.toWireType = function() {
      }, _e(c, l);
    }, k: function(c, I, l) {
      c = Xi(c), I = Sr(I, "emval::as");
      var A = [], m = Pt(A);
      return re[l >> -104 * -74 + 1498 + -9192] = m, I.toWireType(A, c);
    }, g: Di, l: function(c, I) {
      return c = Xi(c), I = Xi(I), Pt(c[I]);
    }, p: function(c) {
      var I = Hs[c];
      return Pt(void (1 * 8083 + 758 * 11 + -16421) === I ? me(c) : I);
    }, o: function(c) {
      Pn(ke[c].value), Di(c);
    }, y: function(c, I) {
      return c = Sr(c, "_emval_take_value"), c = c.readValueFromPointer(I), Pt(c);
    }, f: function() {
      qe();
    }, q: function(c, I, l) {
      ue.copyWithin(c, I, I + l);
    }, r: function(c) {
      c >>>= 211 * 9 + -5476 + -7 * -511;
      var I = ue.length;
      if (89584258 * -35 + 26710270 * -141 + -2262270187 * -4 < c)
        return !(-9120 + -4 * -218 + -113 * -73);
      for (var l = 9440 + 29 * 94 + -12165; 4 >= l; l *= 10459 + 1 * -10457) {
        var A = I * (1 + 0.2 / l);
        A = Math.min(A, c + (138552133 + -2 * -65419323 + 30661 * -5503)), A = Math.max(-8188 * -2043 + -12915593 + 12964725, c, A), 4557 + -21 * 217 < A % (93038 + -79847 * -1 + 11 * -9759) && (A += 1198 * 49 + -82155 + -29663 * -3 - A % (4663 * 4 + 35 * -769 + -6709 * -11));
        e: {
          try {
            v.grow(Math.min(-1695307973 * -2 + 2411742030 + -3654874328, A) - ee.byteLength + (1006 * -103 + 107874 + 61279) >>> -534 + -822 * 4 + 19 * 202), ve(v.buffer);
            var m = -1693 * -5 + -1 * 9449 + 985;
            break e;
          } catch {
          }
          m = void 0;
        }
        if (m)
          return !(3 * 3101 + 3 * -2909 + -576);
      }
      return !(-5998 + 57 * 31 + 4232);
    }, s: function(c, I) {
      var l = 0;
      return Zr().forEach(function(A, m) {
        var b = I + l;
        for (m = re[c + (5 * -1987 + -8369 * 1 + 18308) * m >> 8962 + -2 * 2735 + -3490] = b, b = 0; b < A.length; ++b)
          xe[m++ >> 267 * 14 + -15 * -33 + -1 * 4233] = A.charCodeAt(b);
        xe[m >> 6233 * -1 + -24 * 17 + 6641] = 5493 + 8558 * -1 + 3065, l += A.length + (7351 * -1 + -4943 * -2 + -2534);
      }), -13812 + -2 * -6906;
    }, t: function(c, I) {
      var l = Zr();
      re[c >> 2] = l.length;
      var A = -1126 + 2 * 563;
      return l.forEach(function(m) {
        A += m.length + (4078 * -1 + -1 * 367 + 4446);
      }), re[I >> -8 * 351 + 6 * 554 + -514] = A, 293 * -29 + 367 * -15 + 14002;
    }, a: v };
    (function() {
      function c(w) {
        w = w.exports, w = Hr(w), e.asm = w, Se--, e.monitorRunDependencies && e.monitorRunDependencies(Se), 4099 + -57 * -59 + -7462 == Se && Ge && (w = Ge, Ge = null, w());
      }
      function I(w) {
        c(w.instance);
      }
      function l(w) {
        return fs().then(function(y) {
          return WebAssembly.instantiate(y, m);
        }).then(w, function(y) {
          p("failed to asynchronously prepare wasm: " + y), qe(y);
        });
      }
      var A = {};
      A.a = Ks;
      var m = A;
      if (Se++, e.monitorRunDependencies && e.monitorRunDependencies(Se), e.instantiateWasm)
        try {
          var b = e.instantiateWasm(m, c);
          return b = Hr(b);
        } catch (w) {
          return p("Module.instantiateWasm callback failed with error: " + w), !1;
        }
      return function() {
        if (f || typeof WebAssembly.instantiateStreaming != "function" || Ot() || Ee("file://") || typeof fetch != "function")
          return l(I);
        var w = {};
        w.credentials = "same-origin", fetch(Ze, w).then(function(y) {
          return WebAssembly.instantiateStreaming(y, m).then(I, function(K) {
            return p("wasm streaming compile failed: " + K), p("falling back to ArrayBuffer instantiation"), l(I);
          });
        });
      }(), {};
    })();
    var Wr = e.___wasm_call_ctors = function() {
      return (Wr = e.___wasm_call_ctors = e.asm.B).apply(null, arguments);
    }, Ln = e._malloc = function() {
      return (Ln = e._malloc = e.asm.C).apply(null, arguments);
    }, tt = e._free = function() {
      return (tt = e._free = e.asm.D).apply(null, arguments);
    }, Or = e.___getTypeName = function() {
      return (Or = e.___getTypeName = e.asm.E).apply(null, arguments);
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
    var Nn;
    Ge = function c() {
      Nn || Ui(), Nn || (Ge = c);
    };
    function Ui() {
      function c() {
        if (!Nn && (Nn = !(1590 * 1 + -1 * 8693 + 7103), e.calledRun = !(662 * -7 + 2758 + -134 * -14), !G)) {
          if (Hn(Wt), Hn(an), n(e), e.onRuntimeInitialized && e.onRuntimeInitialized(), e.postRun)
            for (typeof e.postRun == "function" && (e.postRun = [e.postRun]); e.postRun.length; ) {
              var I = e.postRun.shift();
              At.unshift(I);
            }
          Hn(At);
        }
      }
      if (!(107 * 87 + -2 * 1783 + -5743 * 1 < Se)) {
        if (e.preRun)
          for (typeof e.preRun == "function" && (e.preRun = [e.preRun]); e.preRun.length; )
            pt();
        Hn(Ae), 1468 * -1 + 7990 + -6 * 1087 < Se || (e.setStatus ? (e.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            e.setStatus("");
          }, 4259 + -1 * -1878 + 472 * -13), c();
        }, -1 * 7153 + 393 * 3 + 5 * 1195)) : c());
      }
    }
    if (e.run = Ui, e.preInit)
      for (typeof e.preInit == "function" && (e.preInit = [e.preInit]); -967 + -1 * -967 < e.preInit.length; )
        e.preInit.pop()();
    return Ui(), o.ready;
  };
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const zg = Symbol("Comlink.proxy"), Bx = Symbol("Comlink.endpoint"), wx = Symbol("Comlink.releaseProxy"), oo = Symbol("Comlink.finalizer"), si = Symbol("Comlink.thrown"), $g = (t) => typeof t == "object" && t !== null || typeof t == "function", Sx = {
  canHandle: (t) => $g(t) && t[zg],
  serialize(t) {
    const { port1: o, port2: e } = new MessageChannel();
    return _g(t, o), [e, [e]];
  },
  deserialize(t) {
    return t.start(), ts(t);
  }
}, Gx = {
  canHandle: (t) => $g(t) && si in t,
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
}, qg = /* @__PURE__ */ new Map([
  ["proxy", Sx],
  ["throw", Gx]
]);
function Zx(t, o) {
  for (const e of t)
    if (o === e || e === "*" || e instanceof RegExp && e.test(o))
      return !0;
  return !1;
}
function _g(t, o = globalThis, e = ["*"]) {
  o.addEventListener("message", function n(i) {
    if (!i || !i.data)
      return;
    if (!Zx(e, i.origin)) {
      console.warn(`Invalid origin '${i.origin}' for comlink proxy`);
      return;
    }
    const { id: r, type: a, path: g } = Object.assign({ path: [] }, i.data), s = (i.data.argumentList || []).map(Bt);
    let x;
    try {
      const C = g.slice(0, -1).reduce((p, f) => p[f], t), u = g.reduce((p, f) => p[f], t);
      switch (a) {
        case "GET":
          x = u;
          break;
        case "SET":
          C[g.slice(-1)[0]] = Bt(i.data.value), x = !0;
          break;
        case "APPLY":
          x = u.apply(C, s);
          break;
        case "CONSTRUCT":
          {
            const p = new u(...s);
            x = Rx(p);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: p, port2: f } = new MessageChannel();
            _g(t, f), x = Ox(p, [p]);
          }
          break;
        case "RELEASE":
          x = void 0;
          break;
        default:
          return;
      }
    } catch (C) {
      x = { value: C, [si]: 0 };
    }
    Promise.resolve(x).catch((C) => ({ value: C, [si]: 0 })).then((C) => {
      const [u, p] = pi(C);
      o.postMessage(Object.assign(Object.assign({}, u), { id: r }), p), a === "RELEASE" && (o.removeEventListener("message", n), es(o), oo in t && typeof t[oo] == "function" && t[oo]());
    }).catch((C) => {
      const [u, p] = pi({
        value: new TypeError("Unserializable return value"),
        [si]: 0
      });
      o.postMessage(Object.assign(Object.assign({}, u), { id: r }), p);
    });
  }), o.start && o.start();
}
function kx(t) {
  return t.constructor.name === "MessagePort";
}
function es(t) {
  kx(t) && t.close();
}
function ts(t, o) {
  return Oo(t, [], o);
}
function Qn(t) {
  if (t)
    throw new Error("Proxy has been released and is not useable");
}
function ns(t) {
  return Dt(t, {
    type: "RELEASE"
  }).then(() => {
    es(t);
  });
}
const di = /* @__PURE__ */ new WeakMap(), Ai = "FinalizationRegistry" in globalThis && new FinalizationRegistry((t) => {
  const o = (di.get(t) || 0) - 1;
  di.set(t, o), o === 0 && ns(t);
});
function Hx(t, o) {
  const e = (di.get(o) || 0) + 1;
  di.set(o, e), Ai && Ai.register(t, o, t);
}
function Kx(t) {
  Ai && Ai.unregister(t);
}
function Oo(t, o = [], e = function() {
}) {
  let n = !1;
  const i = new Proxy(e, {
    get(r, a) {
      if (Qn(n), a === wx)
        return () => {
          Kx(i), ns(t), n = !0;
        };
      if (a === "then") {
        if (o.length === 0)
          return { then: () => i };
        const g = Dt(t, {
          type: "GET",
          path: o.map((s) => s.toString())
        }).then(Bt);
        return g.then.bind(g);
      }
      return Oo(t, [...o, a]);
    },
    set(r, a, g) {
      Qn(n);
      const [s, x] = pi(g);
      return Dt(t, {
        type: "SET",
        path: [...o, a].map((C) => C.toString()),
        value: s
      }, x).then(Bt);
    },
    apply(r, a, g) {
      Qn(n);
      const s = o[o.length - 1];
      if (s === Bx)
        return Dt(t, {
          type: "ENDPOINT"
        }).then(Bt);
      if (s === "bind")
        return Oo(t, o.slice(0, -1));
      const [x, C] = Ba(g);
      return Dt(t, {
        type: "APPLY",
        path: o.map((u) => u.toString()),
        argumentList: x
      }, C).then(Bt);
    },
    construct(r, a) {
      Qn(n);
      const [g, s] = Ba(a);
      return Dt(t, {
        type: "CONSTRUCT",
        path: o.map((x) => x.toString()),
        argumentList: g
      }, s).then(Bt);
    }
  });
  return Hx(i, t), i;
}
function Wx(t) {
  return Array.prototype.concat.apply([], t);
}
function Ba(t) {
  const o = t.map(pi);
  return [o.map((e) => e[0]), Wx(o.map((e) => e[1]))];
}
const is = /* @__PURE__ */ new WeakMap();
function Ox(t, o) {
  return is.set(t, o), t;
}
function Rx(t) {
  return Object.assign(t, { [zg]: !0 });
}
function pi(t) {
  for (const [o, e] of qg)
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
    is.get(t) || []
  ];
}
function Bt(t) {
  switch (t.type) {
    case "HANDLER":
      return qg.get(t.name).deserialize(t.value);
    case "RAW":
      return t.value;
  }
}
function Dt(t, o, e) {
  return new Promise((n) => {
    const i = Vx();
    t.addEventListener("message", function r(a) {
      !a.data || !a.data.id || a.data.id !== i || (t.removeEventListener("message", r), n(a.data));
    }), t.start && t.start(), t.postMessage(Object.assign({ id: i }, o), e);
  });
}
function Vx() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const Ex = (t, o, e) => {
  const n = Qg(e, t), { bottomLeft: i, bottomRight: r, topLeft: a, topRight: g } = o, s = {};
  return s.topLeft = a, s.topRight = g, s.bottomLeft = i, s.bottomRight = r, zI(s, n);
}, os = "dmFyIHVlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5Owp2YXIgbGUgPSAocywgdSwgZSkgPT4gdSBpbiBzID8gdWUocywgdSwgeyBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwLCB2YWx1ZTogZSB9KSA6IHNbdV0gPSBlOwp2YXIgWW4gPSAocywgdSwgZSkgPT4gKGxlKHMsIHR5cGVvZiB1ICE9ICJzeW1ib2wiID8gdSArICIiIDogdSwgZSksIGUpOwpjb25zdCBrdCA9IHsKICBzaW1kOiAic2FtX3NpbWQud2FzbSIsCiAgc2FtOiAic2FtLndhc20iCn0sIGNlID0gYXN5bmMgKCkgPT4gV2ViQXNzZW1ibHkudmFsaWRhdGUobmV3IFVpbnQ4QXJyYXkoWzAsIDk3LCAxMTUsIDEwOSwgMSwgMCwgMCwgMCwgMSwgNSwgMSwgOTYsIDAsIDEsIDEyMywgMywgMiwgMSwgMCwgMTAsIDEwLCAxLCA4LCAwLCA2NSwgMCwgMjUzLCAxNSwgMjUzLCA5OCwgMTFdKSk7CmNsYXNzIEYgZXh0ZW5kcyBFcnJvciB7CiAgY29uc3RydWN0b3IoZSwgbSkgewogICAgc3VwZXIoZSk7CiAgICBZbih0aGlzLCAiY2F1c2UiKTsKICAgIHRoaXMubmFtZSA9ICJBdXRvQ2FwdHVyZUVycm9yIiwgdGhpcy5jYXVzZSA9IG07CiAgfQogIC8vIENoYW5nZSB0aGlzIHRvIERlY29yYXRvciB3aGVuIHRoZXkgd2lsbCBiZSBpbiBzdGFibGUgcmVsZWFzZQogIHN0YXRpYyBsb2dFcnJvcihlKSB7CiAgfQogIHN0YXRpYyBmcm9tQ2FtZXJhRXJyb3IoZSkgewogICAgaWYgKHRoaXMubG9nRXJyb3IoZSksIGUgaW5zdGFuY2VvZiBGKQogICAgICByZXR1cm4gZTsKICAgIGxldCBtOwogICAgc3dpdGNoIChlLm5hbWUpIHsKICAgICAgY2FzZSAiT3ZlcmNvbnN0cmFpbmVkRXJyb3IiOgogICAgICAgIG0gPSAiTWluaW11bSBxdWFsaXR5IHJlcXVpcmVtZW50cyBhcmUgbm90IG1ldCBieSB5b3VyIGNhbWVyYSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdFJlYWRhYmxlRXJyb3IiOgogICAgICBjYXNlICJBYm9ydEVycm9yIjoKICAgICAgICBtID0gIlRoZSB3ZWJjYW0gaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciBhcHBsaWNhdGlvbiI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdEFsbG93ZWRFcnJvciI6CiAgICAgICAgbSA9ICJUbyB1c2UgeW91ciBjYW1lcmEsIHlvdSBtdXN0IGFsbG93IHBlcm1pc3Npb25zIjsKICAgICAgICBicmVhazsKICAgICAgY2FzZSAiTm90Rm91bmRFcnJvciI6CiAgICAgICAgbSA9ICJUaGVyZSBpcyBubyBjYW1lcmEgYXZhaWxhYmxlIHRvIHlvdSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGRlZmF1bHQ6CiAgICAgICAgbSA9ICJBbiB1bmtub3duIGNhbWVyYSBlcnJvciBoYXMgb2NjdXJyZWQiOwogICAgICAgIGJyZWFrOwogICAgfQogICAgcmV0dXJuIG5ldyBGKG0sIGUpOwogIH0KICBzdGF0aWMgZnJvbUVycm9yKGUpIHsKICAgIGlmICh0aGlzLmxvZ0Vycm9yKGUpLCBlIGluc3RhbmNlb2YgRikKICAgICAgcmV0dXJuIGU7CiAgICBjb25zdCBtID0gIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkIjsKICAgIHJldHVybiBuZXcgRihtKTsKICB9Cn0KY29uc3QgZmUgPSB7CiAgUkdCOiAiUkdCIiwKICBSR0JBOiAiUkdCQSIKfSwgTW4gPSAocywgdSkgPT4gTWF0aC5oeXBvdCh1LnggLSBzLngsIHUueSAtIHMueSksIGRlID0gKHMpID0+IHsKICBjb25zdCB7IGJvdHRvbUxlZnQ6IHUsIGJvdHRvbVJpZ2h0OiBlLCB0b3BMZWZ0OiBtLCB0b3BSaWdodDogZyB9ID0gcywgQyA9IE1uKG0sIGcpLCBBID0gTW4oZywgZSksIE0gPSBNbih1LCBlKSwgVyA9IE1uKG0sIHUpOwogIHJldHVybiBNYXRoLm1pbihDLCBBLCBNLCBXKTsKfTsKdmFyIGhlID0gZnVuY3Rpb24oKSB7CiAgdmFyIHMgPSB0eXBlb2YgZG9jdW1lbnQgPCAidSIgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdCA/IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjIDogdm9pZCAwOwogIHJldHVybiBmdW5jdGlvbih1KSB7CiAgICB1ID0gdSB8fCB7fTsKICAgIHZhciBlOwogICAgZSB8fCAoZSA9IHR5cGVvZiB1IDwgInUiID8gdSA6IHt9KTsKICAgIHZhciBtLCBnOwogICAgZS5yZWFkeSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgbSA9IG4sIGcgPSB0OwogICAgfSk7CiAgICB2YXIgQyA9IHt9LCBBOwogICAgZm9yIChBIGluIGUpCiAgICAgIGUuaGFzT3duUHJvcGVydHkoQSkgJiYgKENbQV0gPSBlW0FdKTsKICAgIHZhciBNID0gIi4vdGhpcy5wcm9ncmFtIiwgVyA9ICExLCBFID0gITE7CiAgICBXID0gdHlwZW9mIHdpbmRvdyA9PSAib2JqZWN0IiwgRSA9IHR5cGVvZiBpbXBvcnRTY3JpcHRzID09ICJmdW5jdGlvbiI7CiAgICB2YXIgXyA9ICIiLCBSOwogICAgKFcgfHwgRSkgJiYgKEUgPyBfID0gc2VsZi5sb2NhdGlvbi5ocmVmIDogZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiAoXyA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjKSwgcyAmJiAoXyA9IHMpLCBfLmluZGV4T2YoImJsb2I6IikgIT09IDAgPyBfID0gXy5zdWJzdHIoMCwgXy5sYXN0SW5kZXhPZigiLyIpICsgMSkgOiBfID0gIiIsIEUgJiYgKFIgPSBmdW5jdGlvbihuKSB7CiAgICAgIHZhciB0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7CiAgICAgIHJldHVybiB0Lm9wZW4oIkdFVCIsIG4sICExKSwgdC5yZXNwb25zZVR5cGUgPSAiYXJyYXlidWZmZXIiLCB0LnNlbmQobnVsbCksIG5ldyBVaW50OEFycmF5KHQucmVzcG9uc2UpOwogICAgfSkpOwogICAgdmFyIFAgPSBlLnByaW50RXJyIHx8IGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpOwogICAgZm9yIChBIGluIEMpCiAgICAgIEMuaGFzT3duUHJvcGVydHkoQSkgJiYgKGVbQV0gPSBDW0FdKTsKICAgIEMgPSBudWxsLCBlLnRoaXNQcm9ncmFtICYmIChNID0gZS50aGlzUHJvZ3JhbSk7CiAgICB2YXIgTDsKICAgIGUud2FzbUJpbmFyeSAmJiAoTCA9IGUud2FzbUJpbmFyeSksIGUubm9FeGl0UnVudGltZSAmJiBlLm5vRXhpdFJ1bnRpbWUsIHR5cGVvZiBXZWJBc3NlbWJseSAhPSAib2JqZWN0IiAmJiBzbigibm8gbmF0aXZlIHdhc20gc3VwcG9ydCBkZXRlY3RlZCIpOwogICAgdmFyIEcsIFJuID0gITE7CiAgICBmdW5jdGlvbiBRbihuKSB7CiAgICAgIG4gfHwgc24oIkFzc2VydGlvbiBmYWlsZWQ6IHVuZGVmaW5lZCIpOwogICAgfQogICAgdmFyIFhuID0gdHlwZW9mIFRleHREZWNvZGVyIDwgInUiID8gbmV3IFRleHREZWNvZGVyKCJ1dGY4IikgOiB2b2lkIDA7CiAgICBmdW5jdGlvbiBIdChuLCB0LCByKSB7CiAgICAgIHZhciBpID0geDsKICAgICAgaWYgKDAgPCByKSB7CiAgICAgICAgciA9IHQgKyByIC0gMTsKICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IG4ubGVuZ3RoOyArK2EpIHsKICAgICAgICAgIHZhciBvID0gbi5jaGFyQ29kZUF0KGEpOwogICAgICAgICAgaWYgKDU1Mjk2IDw9IG8gJiYgNTczNDMgPj0gbykgewogICAgICAgICAgICB2YXIgYyA9IG4uY2hhckNvZGVBdCgrK2EpOwogICAgICAgICAgICBvID0gNjU1MzYgKyAoKG8gJiAxMDIzKSA8PCAxMCkgfCBjICYgMTAyMzsKICAgICAgICAgIH0KICAgICAgICAgIGlmICgxMjcgPj0gbykgewogICAgICAgICAgICBpZiAodCA+PSByKQogICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICBpW3QrK10gPSBvOwogICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgaWYgKDIwNDcgPj0gbykgewogICAgICAgICAgICAgIGlmICh0ICsgMSA+PSByKQogICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgaVt0KytdID0gMTkyIHwgbyA+PiA2OwogICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgIGlmICg2NTUzNSA+PSBvKSB7CiAgICAgICAgICAgICAgICBpZiAodCArIDIgPj0gcikKICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgICBpW3QrK10gPSAyMjQgfCBvID4+IDEyOwogICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICBpZiAodCArIDMgPj0gcikKICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgICBpW3QrK10gPSAyNDAgfCBvID4+IDE4LCBpW3QrK10gPSAxMjggfCBvID4+IDEyICYgNjM7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIGlbdCsrXSA9IDEyOCB8IG8gPj4gNiAmIDYzOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGlbdCsrXSA9IDEyOCB8IG8gJiA2MzsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgaVt0XSA9IDA7CiAgICAgIH0KICAgIH0KICAgIHZhciBxbiA9IHR5cGVvZiBUZXh0RGVjb2RlciA8ICJ1IiA/IG5ldyBUZXh0RGVjb2RlcigidXRmLTE2bGUiKSA6IHZvaWQgMDsKICAgIGZ1bmN0aW9uIFV0KG4sIHQpIHsKICAgICAgZm9yICh2YXIgciA9IG4gPj4gMSwgaSA9IHIgKyB0IC8gMjsgIShyID49IGkpICYmIHBuW3JdOyApCiAgICAgICAgKytyOwogICAgICBpZiAociA8PD0gMSwgMzIgPCByIC0gbiAmJiBxbikKICAgICAgICByZXR1cm4gcW4uZGVjb2RlKHguc3ViYXJyYXkobiwgcikpOwogICAgICBmb3IgKHIgPSAwLCBpID0gIiI7IDsgKSB7CiAgICAgICAgdmFyIGEgPSBYW24gKyAyICogciA+PiAxXTsKICAgICAgICBpZiAoYSA9PSAwIHx8IHIgPT0gdCAvIDIpCiAgICAgICAgICByZXR1cm4gaTsKICAgICAgICArK3IsIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShhKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24genQobiwgdCwgcikgewogICAgICBpZiAociA9PT0gdm9pZCAwICYmIChyID0gMjE0NzQ4MzY0NyksIDIgPiByKQogICAgICAgIHJldHVybiAwOwogICAgICByIC09IDI7CiAgICAgIHZhciBpID0gdDsKICAgICAgciA9IHIgPCAyICogbi5sZW5ndGggPyByIC8gMiA6IG4ubGVuZ3RoOwogICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHI7ICsrYSkKICAgICAgICBYW3QgPj4gMV0gPSBuLmNoYXJDb2RlQXQoYSksIHQgKz0gMjsKICAgICAgcmV0dXJuIFhbdCA+PiAxXSA9IDAsIHQgLSBpOwogICAgfQogICAgZnVuY3Rpb24gQnQobikgewogICAgICByZXR1cm4gMiAqIG4ubGVuZ3RoOwogICAgfQogICAgZnVuY3Rpb24gRHQobiwgdCkgewogICAgICBmb3IgKHZhciByID0gMCwgaSA9ICIiOyAhKHIgPj0gdCAvIDQpOyApIHsKICAgICAgICB2YXIgYSA9IGJbbiArIDQgKiByID4+IDJdOwogICAgICAgIGlmIChhID09IDApCiAgICAgICAgICBicmVhazsKICAgICAgICArK3IsIDY1NTM2IDw9IGEgPyAoYSAtPSA2NTUzNiwgaSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDU1Mjk2IHwgYSA+PiAxMCwgNTYzMjAgfCBhICYgMTAyMykpIDogaSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGEpOwogICAgICB9CiAgICAgIHJldHVybiBpOwogICAgfQogICAgZnVuY3Rpb24gVnQobiwgdCwgcikgewogICAgICBpZiAociA9PT0gdm9pZCAwICYmIChyID0gMjE0NzQ4MzY0NyksIDQgPiByKQogICAgICAgIHJldHVybiAwOwogICAgICB2YXIgaSA9IHQ7CiAgICAgIHIgPSBpICsgciAtIDQ7CiAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgbi5sZW5ndGg7ICsrYSkgewogICAgICAgIHZhciBvID0gbi5jaGFyQ29kZUF0KGEpOwogICAgICAgIGlmICg1NTI5NiA8PSBvICYmIDU3MzQzID49IG8pIHsKICAgICAgICAgIHZhciBjID0gbi5jaGFyQ29kZUF0KCsrYSk7CiAgICAgICAgICBvID0gNjU1MzYgKyAoKG8gJiAxMDIzKSA8PCAxMCkgfCBjICYgMTAyMzsKICAgICAgICB9CiAgICAgICAgaWYgKGJbdCA+PiAyXSA9IG8sIHQgKz0gNCwgdCArIDQgPiByKQogICAgICAgICAgYnJlYWs7CiAgICAgIH0KICAgICAgcmV0dXJuIGJbdCA+PiAyXSA9IDAsIHQgLSBpOwogICAgfQogICAgZnVuY3Rpb24gR3QobikgewogICAgICBmb3IgKHZhciB0ID0gMCwgciA9IDA7IHIgPCBuLmxlbmd0aDsgKytyKSB7CiAgICAgICAgdmFyIGkgPSBuLmNoYXJDb2RlQXQocik7CiAgICAgICAgNTUyOTYgPD0gaSAmJiA1NzM0MyA+PSBpICYmICsrciwgdCArPSA0OwogICAgICB9CiAgICAgIHJldHVybiB0OwogICAgfQogICAgdmFyIFEsICQsIHgsIFgsIHBuLCBiLCBILCBudCwgdHQ7CiAgICBmdW5jdGlvbiBldChuKSB7CiAgICAgIFEgPSBuLCBlLkhFQVA4ID0gJCA9IG5ldyBJbnQ4QXJyYXkobiksIGUuSEVBUDE2ID0gWCA9IG5ldyBJbnQxNkFycmF5KG4pLCBlLkhFQVAzMiA9IGIgPSBuZXcgSW50MzJBcnJheShuKSwgZS5IRUFQVTggPSB4ID0gbmV3IFVpbnQ4QXJyYXkobiksIGUuSEVBUFUxNiA9IHBuID0gbmV3IFVpbnQxNkFycmF5KG4pLCBlLkhFQVBVMzIgPSBIID0gbmV3IFVpbnQzMkFycmF5KG4pLCBlLkhFQVBGMzIgPSBudCA9IG5ldyBGbG9hdDMyQXJyYXkobiksIGUuSEVBUEY2NCA9IHR0ID0gbmV3IEZsb2F0NjRBcnJheShuKTsKICAgIH0KICAgIHZhciBydCA9IGUuSU5JVElBTF9NRU1PUlkgfHwgMTY3NzcyMTY7CiAgICBlLndhc21NZW1vcnkgPyBHID0gZS53YXNtTWVtb3J5IDogRyA9IG5ldyBXZWJBc3NlbWJseS5NZW1vcnkoeyBpbml0aWFsOiBydCAvIDY1NTM2LCBtYXhpbXVtOiAzMjc2OCB9KSwgRyAmJiAoUSA9IEcuYnVmZmVyKSwgcnQgPSBRLmJ5dGVMZW5ndGgsIGV0KFEpOwogICAgdmFyIGl0ID0gW10sIGF0ID0gW10sICR0ID0gW10sIG90ID0gW107CiAgICBmdW5jdGlvbiBZdCgpIHsKICAgICAgdmFyIG4gPSBlLnByZVJ1bi5zaGlmdCgpOwogICAgICBpdC51bnNoaWZ0KG4pOwogICAgfQogICAgdmFyIFkgPSAwLCBvbiA9IG51bGw7CiAgICBlLnByZWxvYWRlZEltYWdlcyA9IHt9LCBlLnByZWxvYWRlZEF1ZGlvcyA9IHt9OwogICAgZnVuY3Rpb24gc24obikgewogICAgICB0aHJvdyBlLm9uQWJvcnQgJiYgZS5vbkFib3J0KG4pLCBQKG4pLCBSbiA9ICEwLCBuID0gbmV3IFdlYkFzc2VtYmx5LlJ1bnRpbWVFcnJvcigiYWJvcnQoIiArIG4gKyAiKS4gQnVpbGQgd2l0aCAtcyBBU1NFUlRJT05TPTEgZm9yIG1vcmUgaW5mby4iKSwgZyhuKSwgbjsKICAgIH0KICAgIGZ1bmN0aW9uIHhuKG4pIHsKICAgICAgdmFyIHQgPSBaOwogICAgICByZXR1cm4gU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoID8gdC5zdGFydHNXaXRoKG4pIDogdC5pbmRleE9mKG4pID09PSAwOwogICAgfQogICAgZnVuY3Rpb24gc3QoKSB7CiAgICAgIHJldHVybiB4bigiZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LCIpOwogICAgfQogICAgdmFyIFogPSAic2FtLndhc20iOwogICAgaWYgKCFzdCgpKSB7CiAgICAgIHZhciB1dCA9IFo7CiAgICAgIFogPSBlLmxvY2F0ZUZpbGUgPyBlLmxvY2F0ZUZpbGUodXQsIF8pIDogXyArIHV0OwogICAgfQogICAgZnVuY3Rpb24gbHQoKSB7CiAgICAgIHRyeSB7CiAgICAgICAgaWYgKEwpCiAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoTCk7CiAgICAgICAgaWYgKFIpCiAgICAgICAgICByZXR1cm4gUihaKTsKICAgICAgICB0aHJvdyAiYm90aCBhc3luYyBhbmQgc3luYyBmZXRjaGluZyBvZiB0aGUgd2FzbSBmYWlsZWQiOwogICAgICB9IGNhdGNoIChuKSB7CiAgICAgICAgc24obik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIFp0KCkgewogICAgICByZXR1cm4gTCB8fCAhVyAmJiAhRSB8fCB0eXBlb2YgZmV0Y2ggIT0gImZ1bmN0aW9uIiB8fCB4bigiZmlsZTovLyIpID8gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihsdCkgOiBmZXRjaChaLCB7IGNyZWRlbnRpYWxzOiAic2FtZS1vcmlnaW4iIH0pLnRoZW4oZnVuY3Rpb24obikgewogICAgICAgIGlmICghbi5vaykKICAgICAgICAgIHRocm93ICJmYWlsZWQgdG8gbG9hZCB3YXNtIGJpbmFyeSBmaWxlIGF0ICciICsgWiArICInIjsKICAgICAgICByZXR1cm4gbi5hcnJheUJ1ZmZlcigpOwogICAgICB9KS5jYXRjaChmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gbHQoKTsKICAgICAgfSk7CiAgICB9CiAgICBmdW5jdGlvbiB5bihuKSB7CiAgICAgIGZvciAoOyAwIDwgbi5sZW5ndGg7ICkgewogICAgICAgIHZhciB0ID0gbi5zaGlmdCgpOwogICAgICAgIGlmICh0eXBlb2YgdCA9PSAiZnVuY3Rpb24iKQogICAgICAgICAgdChlKTsKICAgICAgICBlbHNlIHsKICAgICAgICAgIHZhciByID0gdC5CYTsKICAgICAgICAgIHR5cGVvZiByID09ICJudW1iZXIiID8gdC50YSA9PT0gdm9pZCAwID8gRm4oInYiLCByKSgpIDogRm4oInZpIiwgcikodC50YSkgOiByKHQudGEgPT09IHZvaWQgMCA/IG51bGwgOiB0LnRhKTsKICAgICAgICB9CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIEZuKG4sIHQpIHsKICAgICAgdmFyIHIgPSBbXTsKICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkgewogICAgICAgIHIubGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsKICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykKICAgICAgICAgIHJbaV0gPSBhcmd1bWVudHNbaV07CiAgICAgICAgcmV0dXJuIHIgJiYgci5sZW5ndGggPyBlWyJkeW5DYWxsXyIgKyBuXS5hcHBseShudWxsLCBbdF0uY29uY2F0KHIpKSA6IGVbImR5bkNhbGxfIiArIG5dLmNhbGwobnVsbCwgdCk7CiAgICAgIH07CiAgICB9CiAgICBmdW5jdGlvbiBKdChuKSB7CiAgICAgIHRoaXMuZGEgPSBuIC0gMTYsIHRoaXMuT2EgPSBmdW5jdGlvbih0KSB7CiAgICAgICAgYlt0aGlzLmRhICsgOCA+PiAyXSA9IHQ7CiAgICAgIH0sIHRoaXMuTGEgPSBmdW5jdGlvbih0KSB7CiAgICAgICAgYlt0aGlzLmRhICsgMCA+PiAyXSA9IHQ7CiAgICAgIH0sIHRoaXMuTWEgPSBmdW5jdGlvbigpIHsKICAgICAgICBiW3RoaXMuZGEgKyA0ID4+IDJdID0gMDsKICAgICAgfSwgdGhpcy5LYSA9IGZ1bmN0aW9uKCkgewogICAgICAgICRbdGhpcy5kYSArIDEyID4+IDBdID0gMDsKICAgICAgfSwgdGhpcy5OYSA9IGZ1bmN0aW9uKCkgewogICAgICAgICRbdGhpcy5kYSArIDEzID4+IDBdID0gMDsKICAgICAgfSwgdGhpcy5GYSA9IGZ1bmN0aW9uKHQsIHIpIHsKICAgICAgICB0aGlzLk9hKHQpLCB0aGlzLkxhKHIpLCB0aGlzLk1hKCksIHRoaXMuS2EoKSwgdGhpcy5OYSgpOwogICAgICB9OwogICAgfQogICAgZnVuY3Rpb24gbW4oKSB7CiAgICAgIHJldHVybiAwIDwgbW4ueGE7CiAgICB9CiAgICBmdW5jdGlvbiBJbihuKSB7CiAgICAgIHN3aXRjaCAobikgewogICAgICAgIGNhc2UgMToKICAgICAgICAgIHJldHVybiAwOwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiAxOwogICAgICAgIGNhc2UgNDoKICAgICAgICAgIHJldHVybiAyOwogICAgICAgIGNhc2UgODoKICAgICAgICAgIHJldHVybiAzOwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIHR5cGUgc2l6ZTogIiArIG4pOwogICAgICB9CiAgICB9CiAgICB2YXIgY3QgPSB2b2lkIDA7CiAgICBmdW5jdGlvbiBTKG4pIHsKICAgICAgZm9yICh2YXIgdCA9ICIiOyB4W25dOyApCiAgICAgICAgdCArPSBjdFt4W24rK11dOwogICAgICByZXR1cm4gdDsKICAgIH0KICAgIHZhciBxID0ge30sIEogPSB7fSwgdm4gPSB7fTsKICAgIGZ1bmN0aW9uIExuKG4pIHsKICAgICAgaWYgKG4gPT09IHZvaWQgMCkKICAgICAgICByZXR1cm4gIl91bmtub3duIjsKICAgICAgbiA9IG4ucmVwbGFjZSgvW15hLXpBLVowLTlfXS9nLCAiJCIpOwogICAgICB2YXIgdCA9IG4uY2hhckNvZGVBdCgwKTsKICAgICAgcmV0dXJuIDQ4IDw9IHQgJiYgNTcgPj0gdCA/ICJfIiArIG4gOiBuOwogICAgfQogICAgZnVuY3Rpb24gam4obiwgdCkgewogICAgICByZXR1cm4gbiA9IExuKG4pLCBuZXcgRnVuY3Rpb24oImJvZHkiLCAicmV0dXJuIGZ1bmN0aW9uICIgKyBuICsgYCgpIHsKICAgICJ1c2Ugc3RyaWN0IjsgICAgcmV0dXJuIGJvZHkuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKfTsKYCkodCk7CiAgICB9CiAgICBmdW5jdGlvbiBObihuKSB7CiAgICAgIHZhciB0ID0gRXJyb3IsIHIgPSBqbihuLCBmdW5jdGlvbihpKSB7CiAgICAgICAgdGhpcy5uYW1lID0gbiwgdGhpcy5tZXNzYWdlID0gaSwgaSA9IEVycm9yKGkpLnN0YWNrLCBpICE9PSB2b2lkIDAgJiYgKHRoaXMuc3RhY2sgPSB0aGlzLnRvU3RyaW5nKCkgKyBgCmAgKyBpLnJlcGxhY2UoL15FcnJvcig6W15cbl0qKT9cbi8sICIiKSk7CiAgICAgIH0pOwogICAgICByZXR1cm4gci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHQucHJvdG90eXBlKSwgci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSByLCByLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkgewogICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2UgPT09IHZvaWQgMCA/IHRoaXMubmFtZSA6IHRoaXMubmFtZSArICI6ICIgKyB0aGlzLm1lc3NhZ2U7CiAgICAgIH0sIHI7CiAgICB9CiAgICB2YXIgbm4gPSB2b2lkIDA7CiAgICBmdW5jdGlvbiB2KG4pIHsKICAgICAgdGhyb3cgbmV3IG5uKG4pOwogICAgfQogICAgdmFyIGZ0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gZ24obikgewogICAgICB0aHJvdyBuZXcgZnQobik7CiAgICB9CiAgICBmdW5jdGlvbiB0bihuLCB0LCByKSB7CiAgICAgIGZ1bmN0aW9uIGkobCkgewogICAgICAgIGwgPSByKGwpLCBsLmxlbmd0aCAhPT0gbi5sZW5ndGggJiYgZ24oIk1pc21hdGNoZWQgdHlwZSBjb252ZXJ0ZXIgY291bnQiKTsKICAgICAgICBmb3IgKHZhciBwID0gMDsgcCA8IG4ubGVuZ3RoOyArK3ApCiAgICAgICAgICBVKG5bcF0sIGxbcF0pOwogICAgICB9CiAgICAgIG4uZm9yRWFjaChmdW5jdGlvbihsKSB7CiAgICAgICAgdm5bbF0gPSB0OwogICAgICB9KTsKICAgICAgdmFyIGEgPSBBcnJheSh0Lmxlbmd0aCksIG8gPSBbXSwgYyA9IDA7CiAgICAgIHQuZm9yRWFjaChmdW5jdGlvbihsLCBwKSB7CiAgICAgICAgSi5oYXNPd25Qcm9wZXJ0eShsKSA/IGFbcF0gPSBKW2xdIDogKG8ucHVzaChsKSwgcS5oYXNPd25Qcm9wZXJ0eShsKSB8fCAocVtsXSA9IFtdKSwgcVtsXS5wdXNoKGZ1bmN0aW9uKCkgewogICAgICAgICAgYVtwXSA9IEpbbF0sICsrYywgYyA9PT0gby5sZW5ndGggJiYgaShhKTsKICAgICAgICB9KSk7CiAgICAgIH0pLCBvLmxlbmd0aCA9PT0gMCAmJiBpKGEpOwogICAgfQogICAgZnVuY3Rpb24gVShuLCB0LCByKSB7CiAgICAgIGlmIChyID0gciB8fCB7fSwgISgiYXJnUGFja0FkdmFuY2UiIGluIHQpKQogICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoInJlZ2lzdGVyVHlwZSByZWdpc3RlcmVkSW5zdGFuY2UgcmVxdWlyZXMgYXJnUGFja0FkdmFuY2UiKTsKICAgICAgdmFyIGkgPSB0Lm5hbWU7CiAgICAgIGlmIChuIHx8IHYoJ3R5cGUgIicgKyBpICsgJyIgbXVzdCBoYXZlIGEgcG9zaXRpdmUgaW50ZWdlciB0eXBlaWQgcG9pbnRlcicpLCBKLmhhc093blByb3BlcnR5KG4pKSB7CiAgICAgICAgaWYgKHIuRWEpCiAgICAgICAgICByZXR1cm47CiAgICAgICAgdigiQ2Fubm90IHJlZ2lzdGVyIHR5cGUgJyIgKyBpICsgIicgdHdpY2UiKTsKICAgICAgfQogICAgICBKW25dID0gdCwgZGVsZXRlIHZuW25dLCBxLmhhc093blByb3BlcnR5KG4pICYmICh0ID0gcVtuXSwgZGVsZXRlIHFbbl0sIHQuZm9yRWFjaChmdW5jdGlvbihhKSB7CiAgICAgICAgYSgpOwogICAgICB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiBLdChuKSB7CiAgICAgIHJldHVybiB7IGNvdW50OiBuLmNvdW50LCBvYTogbi5vYSwgcGE6IG4ucGEsIGRhOiBuLmRhLCBmYTogbi5mYSwgZ2E6IG4uZ2EsIGhhOiBuLmhhIH07CiAgICB9CiAgICBmdW5jdGlvbiBIbihuKSB7CiAgICAgIHYobi5BLmZhLmVhLm5hbWUgKyAiIGluc3RhbmNlIGFscmVhZHkgZGVsZXRlZCIpOwogICAgfQogICAgdmFyIFVuID0gITE7CiAgICBmdW5jdGlvbiBkdCgpIHsKICAgIH0KICAgIGZ1bmN0aW9uIGh0KG4pIHsKICAgICAgLS1uLmNvdW50LnZhbHVlLCBuLmNvdW50LnZhbHVlID09PSAwICYmIChuLmdhID8gbi5oYS5uYShuLmdhKSA6IG4uZmEuZWEubmEobi5kYSkpOwogICAgfQogICAgZnVuY3Rpb24gdW4obikgewogICAgICByZXR1cm4gdHlwZW9mIEZpbmFsaXphdGlvbkdyb3VwID4gInUiID8gKHVuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiB0OwogICAgICB9LCBuKSA6IChVbiA9IG5ldyBGaW5hbGl6YXRpb25Hcm91cChmdW5jdGlvbih0KSB7CiAgICAgICAgZm9yICh2YXIgciA9IHQubmV4dCgpOyAhci5kb25lOyByID0gdC5uZXh0KCkpCiAgICAgICAgICByID0gci52YWx1ZSwgci5kYSA/IGh0KHIpIDogY29uc29sZS53YXJuKCJvYmplY3QgYWxyZWFkeSBkZWxldGVkOiAiICsgci5kYSk7CiAgICAgIH0pLCB1biA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICByZXR1cm4gVW4ucmVnaXN0ZXIodCwgdC5BLCB0LkEpLCB0OwogICAgICB9LCBkdCA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICBVbi51bnJlZ2lzdGVyKHQuQSk7CiAgICAgIH0sIHVuKG4pKTsKICAgIH0KICAgIHZhciBsbiA9IHZvaWQgMCwgY24gPSBbXTsKICAgIGZ1bmN0aW9uIHpuKCkgewogICAgICBmb3IgKDsgY24ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgbiA9IGNuLnBvcCgpOwogICAgICAgIG4uQS5vYSA9ICExLCBuLmRlbGV0ZSgpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBEKCkgewogICAgfQogICAgdmFyIHB0ID0ge307CiAgICBmdW5jdGlvbiBRdChuLCB0KSB7CiAgICAgIHZhciByID0gZTsKICAgICAgaWYgKHJbbl0uamEgPT09IHZvaWQgMCkgewogICAgICAgIHZhciBpID0gcltuXTsKICAgICAgICByW25dID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICByZXR1cm4gcltuXS5qYS5oYXNPd25Qcm9wZXJ0eShhcmd1bWVudHMubGVuZ3RoKSB8fCB2KCJGdW5jdGlvbiAnIiArIHQgKyAiJyBjYWxsZWQgd2l0aCBhbiBpbnZhbGlkIG51bWJlciBvZiBhcmd1bWVudHMgKCIgKyBhcmd1bWVudHMubGVuZ3RoICsgIikgLSBleHBlY3RzIG9uZSBvZiAoIiArIHJbbl0uamEgKyAiKSEiKSwgcltuXS5qYVthcmd1bWVudHMubGVuZ3RoXS5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgICAgIH0sIHJbbl0uamEgPSBbXSwgcltuXS5qYVtpLnlhXSA9IGk7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHl0KG4sIHQsIHIpIHsKICAgICAgZS5oYXNPd25Qcm9wZXJ0eShuKSA/ICgociA9PT0gdm9pZCAwIHx8IGVbbl0uamEgIT09IHZvaWQgMCAmJiBlW25dLmphW3JdICE9PSB2b2lkIDApICYmIHYoIkNhbm5vdCByZWdpc3RlciBwdWJsaWMgbmFtZSAnIiArIG4gKyAiJyB0d2ljZSIpLCBRdChuLCBuKSwgZS5oYXNPd25Qcm9wZXJ0eShyKSAmJiB2KCJDYW5ub3QgcmVnaXN0ZXIgbXVsdGlwbGUgb3ZlcmxvYWRzIG9mIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBudW1iZXIgb2YgYXJndW1lbnRzICgiICsgciArICIpISIpLCBlW25dLmphW3JdID0gdCkgOiAoZVtuXSA9IHQsIHIgIT09IHZvaWQgMCAmJiAoZVtuXS5SYSA9IHIpKTsKICAgIH0KICAgIGZ1bmN0aW9uIFh0KG4sIHQsIHIsIGksIGEsIG8sIGMsIGwpIHsKICAgICAgdGhpcy5uYW1lID0gbiwgdGhpcy5jb25zdHJ1Y3RvciA9IHQsIHRoaXMubWEgPSByLCB0aGlzLm5hID0gaSwgdGhpcy5pYSA9IGEsIHRoaXMuQ2EgPSBvLCB0aGlzLnFhID0gYywgdGhpcy5BYSA9IGw7CiAgICB9CiAgICBmdW5jdGlvbiB3bihuLCB0LCByKSB7CiAgICAgIGZvciAoOyB0ICE9PSByOyApCiAgICAgICAgdC5xYSB8fCB2KCJFeHBlY3RlZCBudWxsIG9yIGluc3RhbmNlIG9mICIgKyByLm5hbWUgKyAiLCBnb3QgYW4gaW5zdGFuY2Ugb2YgIiArIHQubmFtZSksIG4gPSB0LnFhKG4pLCB0ID0gdC5pYTsKICAgICAgcmV0dXJuIG47CiAgICB9CiAgICBmdW5jdGlvbiBxdChuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgcm4odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIHduKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiBuZShuLCB0KSB7CiAgICAgIGlmICh0ID09PSBudWxsKSB7CiAgICAgICAgaWYgKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgdGhpcy5zYSkgewogICAgICAgICAgdmFyIHIgPSB0aGlzLkhhKCk7CiAgICAgICAgICByZXR1cm4gbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgciksIHI7CiAgICAgICAgfQogICAgICAgIHJldHVybiAwOwogICAgICB9CiAgICAgIGlmICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBybih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgIXRoaXMucmEgJiYgdC5BLmZhLnJhICYmIHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArICh0LkEuaGEgPyB0LkEuaGEubmFtZSA6IHQuQS5mYS5uYW1lKSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIHIgPSB3bih0LkEuZGEsIHQuQS5mYS5lYSwgdGhpcy5lYSksIHRoaXMuc2EpCiAgICAgICAgc3dpdGNoICh0LkEuZ2EgPT09IHZvaWQgMCAmJiB2KCJQYXNzaW5nIHJhdyBwb2ludGVyIHRvIHNtYXJ0IHBvaW50ZXIgaXMgaWxsZWdhbCIpLCB0aGlzLlBhKSB7CiAgICAgICAgICBjYXNlIDA6CiAgICAgICAgICAgIHQuQS5oYSA9PT0gdGhpcyA/IHIgPSB0LkEuZ2EgOiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyAodC5BLmhhID8gdC5BLmhhLm5hbWUgOiB0LkEuZmEubmFtZSkgKyAiIHRvIHBhcmFtZXRlciB0eXBlICIgKyB0aGlzLm5hbWUpOwogICAgICAgICAgICBicmVhazsKICAgICAgICAgIGNhc2UgMToKICAgICAgICAgICAgciA9IHQuQS5nYTsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICBjYXNlIDI6CiAgICAgICAgICAgIGlmICh0LkEuaGEgPT09IHRoaXMpCiAgICAgICAgICAgICAgciA9IHQuQS5nYTsKICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgdmFyIGkgPSB0LmNsb25lKCk7CiAgICAgICAgICAgICAgciA9IHRoaXMuSWEociwgZW4oZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgICBpLmRlbGV0ZSgpOwogICAgICAgICAgICAgIH0pKSwgbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgcik7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICBkZWZhdWx0OgogICAgICAgICAgICB2KCJVbnN1cHBvcnRpbmcgc2hhcmluZyBwb2xpY3kiKTsKICAgICAgICB9CiAgICAgIHJldHVybiByOwogICAgfQogICAgZnVuY3Rpb24gdGUobiwgdCkgewogICAgICByZXR1cm4gdCA9PT0gbnVsbCA/ICh0aGlzLnVhICYmIHYoIm51bGwgaXMgbm90IGEgdmFsaWQgIiArIHRoaXMubmFtZSksIDApIDogKHQuQSB8fCB2KCdDYW5ub3QgcGFzcyAiJyArIHJuKHQpICsgJyIgYXMgYSAnICsgdGhpcy5uYW1lKSwgdC5BLmRhIHx8IHYoIkNhbm5vdCBwYXNzIGRlbGV0ZWQgb2JqZWN0IGFzIGEgcG9pbnRlciBvZiB0eXBlICIgKyB0aGlzLm5hbWUpLCB0LkEuZmEucmEgJiYgdigiQ2Fubm90IGNvbnZlcnQgYXJndW1lbnQgb2YgdHlwZSAiICsgdC5BLmZhLm5hbWUgKyAiIHRvIHBhcmFtZXRlciB0eXBlICIgKyB0aGlzLm5hbWUpLCB3bih0LkEuZGEsIHQuQS5mYS5lYSwgdGhpcy5lYSkpOwogICAgfQogICAgZnVuY3Rpb24gQW4obikgewogICAgICByZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUoSFtuID4+IDJdKTsKICAgIH0KICAgIGZ1bmN0aW9uIG10KG4sIHQsIHIpIHsKICAgICAgcmV0dXJuIHQgPT09IHIgPyBuIDogci5pYSA9PT0gdm9pZCAwID8gbnVsbCA6IChuID0gbXQobiwgdCwgci5pYSksIG4gPT09IG51bGwgPyBudWxsIDogci5BYShuKSk7CiAgICB9CiAgICB2YXIgZm4gPSB7fTsKICAgIGZ1bmN0aW9uIGVlKG4sIHQpIHsKICAgICAgZm9yICh0ID09PSB2b2lkIDAgJiYgdigicHRyIHNob3VsZCBub3QgYmUgdW5kZWZpbmVkIik7IG4uaWE7ICkKICAgICAgICB0ID0gbi5xYSh0KSwgbiA9IG4uaWE7CiAgICAgIHJldHVybiBmblt0XTsKICAgIH0KICAgIGZ1bmN0aW9uIF9uKG4sIHQpIHsKICAgICAgcmV0dXJuIHQuZmEgJiYgdC5kYSB8fCBnbigibWFrZUNsYXNzSGFuZGxlIHJlcXVpcmVzIHB0ciBhbmQgcHRyVHlwZSIpLCAhIXQuaGEgIT0gISF0LmdhICYmIGduKCJCb3RoIHNtYXJ0UHRyVHlwZSBhbmQgc21hcnRQdHIgbXVzdCBiZSBzcGVjaWZpZWQiKSwgdC5jb3VudCA9IHsgdmFsdWU6IDEgfSwgdW4oT2JqZWN0LmNyZWF0ZShuLCB7IEE6IHsgdmFsdWU6IHQgfSB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiB6KG4sIHQsIHIsIGkpIHsKICAgICAgdGhpcy5uYW1lID0gbiwgdGhpcy5lYSA9IHQsIHRoaXMudWEgPSByLCB0aGlzLnJhID0gaSwgdGhpcy5zYSA9ICExLCB0aGlzLm5hID0gdGhpcy5JYSA9IHRoaXMuSGEgPSB0aGlzLndhID0gdGhpcy5QYSA9IHRoaXMuR2EgPSB2b2lkIDAsIHQuaWEgIT09IHZvaWQgMCA/IHRoaXMudG9XaXJlVHlwZSA9IG5lIDogKHRoaXMudG9XaXJlVHlwZSA9IGkgPyBxdCA6IHRlLCB0aGlzLmthID0gbnVsbCk7CiAgICB9CiAgICBmdW5jdGlvbiB2dChuLCB0LCByKSB7CiAgICAgIGUuaGFzT3duUHJvcGVydHkobikgfHwgZ24oIlJlcGxhY2luZyBub25leGlzdGFudCBwdWJsaWMgc3ltYm9sIiksIGVbbl0uamEgIT09IHZvaWQgMCAmJiByICE9PSB2b2lkIDAgPyBlW25dLmphW3JdID0gdCA6IChlW25dID0gdCwgZVtuXS55YSA9IHIpOwogICAgfQogICAgZnVuY3Rpb24gVihuLCB0KSB7CiAgICAgIG4gPSBTKG4pOwogICAgICB2YXIgciA9IEZuKG4sIHQpOwogICAgICByZXR1cm4gdHlwZW9mIHIgIT0gImZ1bmN0aW9uIiAmJiB2KCJ1bmtub3duIGZ1bmN0aW9uIHBvaW50ZXIgd2l0aCBzaWduYXR1cmUgIiArIG4gKyAiOiAiICsgdCksIHI7CiAgICB9CiAgICB2YXIgZ3QgPSB2b2lkIDA7CiAgICBmdW5jdGlvbiB3dChuKSB7CiAgICAgIG4gPSBidChuKTsKICAgICAgdmFyIHQgPSBTKG4pOwogICAgICByZXR1cm4gQihuKSwgdDsKICAgIH0KICAgIGZ1bmN0aW9uIGRuKG4sIHQpIHsKICAgICAgZnVuY3Rpb24gcihvKSB7CiAgICAgICAgYVtvXSB8fCBKW29dIHx8ICh2bltvXSA/IHZuW29dLmZvckVhY2gocikgOiAoaS5wdXNoKG8pLCBhW29dID0gITApKTsKICAgICAgfQogICAgICB2YXIgaSA9IFtdLCBhID0ge307CiAgICAgIHRocm93IHQuZm9yRWFjaChyKSwgbmV3IGd0KG4gKyAiOiAiICsgaS5tYXAod3QpLmpvaW4oWyIsICJdKSk7CiAgICB9CiAgICBmdW5jdGlvbiBBdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSBbXSwgaSA9IDA7IGkgPCBuOyBpKyspCiAgICAgICAgci5wdXNoKGJbKHQgPj4gMikgKyBpXSk7CiAgICAgIHJldHVybiByOwogICAgfQogICAgZnVuY3Rpb24gQ24obikgewogICAgICBmb3IgKDsgbi5sZW5ndGg7ICkgewogICAgICAgIHZhciB0ID0gbi5wb3AoKTsKICAgICAgICBuLnBvcCgpKHQpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBfdChuLCB0LCByKSB7CiAgICAgIHJldHVybiBuIGluc3RhbmNlb2YgT2JqZWN0IHx8IHYociArICcgd2l0aCBpbnZhbGlkICJ0aGlzIjogJyArIG4pLCBuIGluc3RhbmNlb2YgdC5lYS5jb25zdHJ1Y3RvciB8fCB2KHIgKyAnIGluY29tcGF0aWJsZSB3aXRoICJ0aGlzIiBvZiB0eXBlICcgKyBuLmNvbnN0cnVjdG9yLm5hbWUpLCBuLkEuZGEgfHwgdigiY2Fubm90IGNhbGwgZW1zY3JpcHRlbiBiaW5kaW5nIG1ldGhvZCAiICsgciArICIgb24gZGVsZXRlZCBvYmplY3QiKSwgd24obi5BLmRhLCBuLkEuZmEuZWEsIHQuZWEpOwogICAgfQogICAgdmFyIEJuID0gW10sIEkgPSBbe30sIHsgdmFsdWU6IHZvaWQgMCB9LCB7IHZhbHVlOiBudWxsIH0sIHsgdmFsdWU6ICEwIH0sIHsgdmFsdWU6ICExIH1dOwogICAgZnVuY3Rpb24gRG4obikgewogICAgICA0IDwgbiAmJiAtLUlbbl0uSmEgPT09IDAgJiYgKElbbl0gPSB2b2lkIDAsIEJuLnB1c2gobikpOwogICAgfQogICAgZnVuY3Rpb24gZW4obikgewogICAgICBzd2l0Y2ggKG4pIHsKICAgICAgICBjYXNlIHZvaWQgMDoKICAgICAgICAgIHJldHVybiAxOwogICAgICAgIGNhc2UgbnVsbDoKICAgICAgICAgIHJldHVybiAyOwogICAgICAgIGNhc2UgITA6CiAgICAgICAgICByZXR1cm4gMzsKICAgICAgICBjYXNlICExOgogICAgICAgICAgcmV0dXJuIDQ7CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHZhciB0ID0gQm4ubGVuZ3RoID8gQm4ucG9wKCkgOiBJLmxlbmd0aDsKICAgICAgICAgIHJldHVybiBJW3RdID0geyBKYTogMSwgdmFsdWU6IG4gfSwgdDsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gcm4obikgewogICAgICBpZiAobiA9PT0gbnVsbCkKICAgICAgICByZXR1cm4gIm51bGwiOwogICAgICB2YXIgdCA9IHR5cGVvZiBuOwogICAgICByZXR1cm4gdCA9PT0gIm9iamVjdCIgfHwgdCA9PT0gImFycmF5IiB8fCB0ID09PSAiZnVuY3Rpb24iID8gbi50b1N0cmluZygpIDogIiIgKyBuOwogICAgfQogICAgZnVuY3Rpb24gcmUobiwgdCkgewogICAgICBzd2l0Y2ggKHQpIHsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24ocikgewogICAgICAgICAgICByZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUobnRbciA+PiAyXSk7CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMzoKICAgICAgICAgIHJldHVybiBmdW5jdGlvbihyKSB7CiAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZSh0dFtyID4+IDNdKTsKICAgICAgICAgIH07CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gZmxvYXQgdHlwZTogIiArIG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBpZShuKSB7CiAgICAgIHZhciB0ID0gRnVuY3Rpb247CiAgICAgIGlmICghKHQgaW5zdGFuY2VvZiBGdW5jdGlvbikpCiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigibmV3XyBjYWxsZWQgd2l0aCBjb25zdHJ1Y3RvciB0eXBlICIgKyB0eXBlb2YgdCArICIgd2hpY2ggaXMgbm90IGEgZnVuY3Rpb24iKTsKICAgICAgdmFyIHIgPSBqbih0Lm5hbWUgfHwgInVua25vd25GdW5jdGlvbk5hbWUiLCBmdW5jdGlvbigpIHsKICAgICAgfSk7CiAgICAgIHJldHVybiByLnByb3RvdHlwZSA9IHQucHJvdG90eXBlLCByID0gbmV3IHIoKSwgbiA9IHQuYXBwbHkociwgbiksIG4gaW5zdGFuY2VvZiBPYmplY3QgPyBuIDogcjsKICAgIH0KICAgIGZ1bmN0aW9uIGFlKG4sIHQsIHIpIHsKICAgICAgc3dpdGNoICh0KSB7CiAgICAgICAgY2FzZSAwOgogICAgICAgICAgcmV0dXJuIHIgPyBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiAkW2ldOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIHhbaV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMToKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gWFtpID4+IDFdOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIHBuW2kgPj4gMV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gYltpID4+IDJdOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIEhbaSA+PiAyXTsKICAgICAgICAgIH07CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gaW50ZWdlciB0eXBlOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIFZuKG4pIHsKICAgICAgcmV0dXJuIG4gfHwgdigiQ2Fubm90IHVzZSBkZWxldGVkIHZhbC4gaGFuZGxlID0gIiArIG4pLCBJW25dLnZhbHVlOwogICAgfQogICAgZnVuY3Rpb24gQ3QobiwgdCkgewogICAgICB2YXIgciA9IEpbbl07CiAgICAgIHJldHVybiByID09PSB2b2lkIDAgJiYgdih0ICsgIiBoYXMgdW5rbm93biB0eXBlICIgKyB3dChuKSksIHI7CiAgICB9CiAgICB2YXIgb2UgPSB7fSwgRXQgPSB7fTsKICAgIGZ1bmN0aW9uIFR0KCkgewogICAgICBpZiAoIUduKSB7CiAgICAgICAgdmFyIG4gPSB7IFVTRVI6ICJ3ZWJfdXNlciIsIExPR05BTUU6ICJ3ZWJfdXNlciIsIFBBVEg6ICIvIiwgUFdEOiAiLyIsIEhPTUU6ICIvaG9tZS93ZWJfdXNlciIsIExBTkc6ICh0eXBlb2YgbmF2aWdhdG9yID09ICJvYmplY3QiICYmIG5hdmlnYXRvci5sYW5ndWFnZXMgJiYgbmF2aWdhdG9yLmxhbmd1YWdlc1swXSB8fCAiQyIpLnJlcGxhY2UoIi0iLCAiXyIpICsgIi5VVEYtOCIsIF86IE0gfHwgIi4vdGhpcy5wcm9ncmFtIiB9LCB0OwogICAgICAgIGZvciAodCBpbiBFdCkKICAgICAgICAgIG5bdF0gPSBFdFt0XTsKICAgICAgICB2YXIgciA9IFtdOwogICAgICAgIGZvciAodCBpbiBuKQogICAgICAgICAgci5wdXNoKHQgKyAiPSIgKyBuW3RdKTsKICAgICAgICBHbiA9IHI7CiAgICAgIH0KICAgICAgcmV0dXJuIEduOwogICAgfQogICAgdmFyIEduLCBQdCA9IFtdOwogICAgZnVuY3Rpb24gTXQobikgewogICAgICB2YXIgdCA9IHt9LCByOwogICAgICBmb3IgKHIgaW4gbikKICAgICAgICAoZnVuY3Rpb24oaSkgewogICAgICAgICAgdmFyIGEgPSBuW2ldOwogICAgICAgICAgdFtpXSA9IHR5cGVvZiBhID09ICJmdW5jdGlvbiIgPyBmdW5jdGlvbigpIHsKICAgICAgICAgICAgUHQucHVzaChpKTsKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICByZXR1cm4gYS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgICAgICAgICB9IGZpbmFsbHkgewogICAgICAgICAgICAgIGlmIChSbikKICAgICAgICAgICAgICAgIHJldHVybjsKICAgICAgICAgICAgICB2YXIgbyA9IFB0LnBvcCgpOwogICAgICAgICAgICAgIFFuKG8gPT09IGkpOwogICAgICAgICAgICB9CiAgICAgICAgICB9IDogYTsKICAgICAgICB9KShyKTsKICAgICAgcmV0dXJuIHQ7CiAgICB9CiAgICBmb3IgKHZhciBXdCA9IEFycmF5KDI1NiksIEVuID0gMDsgMjU2ID4gRW47ICsrRW4pCiAgICAgIFd0W0VuXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoRW4pOwogICAgY3QgPSBXdCwgbm4gPSBlLkJpbmRpbmdFcnJvciA9IE5uKCJCaW5kaW5nRXJyb3IiKSwgZnQgPSBlLkludGVybmFsRXJyb3IgPSBObigiSW50ZXJuYWxFcnJvciIpLCBELnByb3RvdHlwZS5pc0FsaWFzT2YgPSBmdW5jdGlvbihuKSB7CiAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBEICYmIG4gaW5zdGFuY2VvZiBEKSkKICAgICAgICByZXR1cm4gITE7CiAgICAgIHZhciB0ID0gdGhpcy5BLmZhLmVhLCByID0gdGhpcy5BLmRhLCBpID0gbi5BLmZhLmVhOwogICAgICBmb3IgKG4gPSBuLkEuZGE7IHQuaWE7ICkKICAgICAgICByID0gdC5xYShyKSwgdCA9IHQuaWE7CiAgICAgIGZvciAoOyBpLmlhOyApCiAgICAgICAgbiA9IGkucWEobiksIGkgPSBpLmlhOwogICAgICByZXR1cm4gdCA9PT0gaSAmJiByID09PSBuOwogICAgfSwgRC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHsKICAgICAgaWYgKHRoaXMuQS5kYSB8fCBIbih0aGlzKSwgdGhpcy5BLnBhKQogICAgICAgIHJldHVybiB0aGlzLkEuY291bnQudmFsdWUgKz0gMSwgdGhpczsKICAgICAgdmFyIG4gPSB1bihPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSwgeyBBOiB7IHZhbHVlOiBLdCh0aGlzLkEpIH0gfSkpOwogICAgICByZXR1cm4gbi5BLmNvdW50LnZhbHVlICs9IDEsIG4uQS5vYSA9ICExLCBuOwogICAgfSwgRC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24oKSB7CiAgICAgIHRoaXMuQS5kYSB8fCBIbih0aGlzKSwgdGhpcy5BLm9hICYmICF0aGlzLkEucGEgJiYgdigiT2JqZWN0IGFscmVhZHkgc2NoZWR1bGVkIGZvciBkZWxldGlvbiIpLCBkdCh0aGlzKSwgaHQodGhpcy5BKSwgdGhpcy5BLnBhIHx8ICh0aGlzLkEuZ2EgPSB2b2lkIDAsIHRoaXMuQS5kYSA9IHZvaWQgMCk7CiAgICB9LCBELnByb3RvdHlwZS5pc0RlbGV0ZWQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuICF0aGlzLkEuZGE7CiAgICB9LCBELnByb3RvdHlwZS5kZWxldGVMYXRlciA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gdGhpcy5BLmRhIHx8IEhuKHRoaXMpLCB0aGlzLkEub2EgJiYgIXRoaXMuQS5wYSAmJiB2KCJPYmplY3QgYWxyZWFkeSBzY2hlZHVsZWQgZm9yIGRlbGV0aW9uIiksIGNuLnB1c2godGhpcyksIGNuLmxlbmd0aCA9PT0gMSAmJiBsbiAmJiBsbih6biksIHRoaXMuQS5vYSA9ICEwLCB0aGlzOwogICAgfSwgei5wcm90b3R5cGUuRGEgPSBmdW5jdGlvbihuKSB7CiAgICAgIHJldHVybiB0aGlzLndhICYmIChuID0gdGhpcy53YShuKSksIG47CiAgICB9LCB6LnByb3RvdHlwZS52YSA9IGZ1bmN0aW9uKG4pIHsKICAgICAgdGhpcy5uYSAmJiB0aGlzLm5hKG4pOwogICAgfSwgei5wcm90b3R5cGUuYXJnUGFja0FkdmFuY2UgPSA4LCB6LnByb3RvdHlwZS5yZWFkVmFsdWVGcm9tUG9pbnRlciA9IEFuLCB6LnByb3RvdHlwZS5kZWxldGVPYmplY3QgPSBmdW5jdGlvbihuKSB7CiAgICAgIG4gIT09IG51bGwgJiYgbi5kZWxldGUoKTsKICAgIH0sIHoucHJvdG90eXBlLmZyb21XaXJlVHlwZSA9IGZ1bmN0aW9uKG4pIHsKICAgICAgZnVuY3Rpb24gdCgpIHsKICAgICAgICByZXR1cm4gdGhpcy5zYSA/IF9uKHRoaXMuZWEubWEsIHsgZmE6IHRoaXMuR2EsIGRhOiByLCBoYTogdGhpcywgZ2E6IG4gfSkgOiBfbih0aGlzLmVhLm1hLCB7IGZhOiB0aGlzLCBkYTogbiB9KTsKICAgICAgfQogICAgICB2YXIgciA9IHRoaXMuRGEobik7CiAgICAgIGlmICghcikKICAgICAgICByZXR1cm4gdGhpcy52YShuKSwgbnVsbDsKICAgICAgdmFyIGkgPSBlZSh0aGlzLmVhLCByKTsKICAgICAgaWYgKGkgIT09IHZvaWQgMCkKICAgICAgICByZXR1cm4gaS5BLmNvdW50LnZhbHVlID09PSAwID8gKGkuQS5kYSA9IHIsIGkuQS5nYSA9IG4sIGkuY2xvbmUoKSkgOiAoaSA9IGkuY2xvbmUoKSwgdGhpcy52YShuKSwgaSk7CiAgICAgIGlmIChpID0gdGhpcy5lYS5DYShyKSwgaSA9IHB0W2ldLCAhaSkKICAgICAgICByZXR1cm4gdC5jYWxsKHRoaXMpOwogICAgICBpID0gdGhpcy5yYSA/IGkuemEgOiBpLnBvaW50ZXJUeXBlOwogICAgICB2YXIgYSA9IG10KHIsIHRoaXMuZWEsIGkuZWEpOwogICAgICByZXR1cm4gYSA9PT0gbnVsbCA/IHQuY2FsbCh0aGlzKSA6IHRoaXMuc2EgPyBfbihpLmVhLm1hLCB7IGZhOiBpLCBkYTogYSwgaGE6IHRoaXMsIGdhOiBuIH0pIDogX24oCiAgICAgICAgaS5lYS5tYSwKICAgICAgICB7IGZhOiBpLCBkYTogYSB9CiAgICAgICk7CiAgICB9LCBlLmdldEluaGVyaXRlZEluc3RhbmNlQ291bnQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGZuKS5sZW5ndGg7CiAgICB9LCBlLmdldExpdmVJbmhlcml0ZWRJbnN0YW5jZXMgPSBmdW5jdGlvbigpIHsKICAgICAgdmFyIG4gPSBbXSwgdDsKICAgICAgZm9yICh0IGluIGZuKQogICAgICAgIGZuLmhhc093blByb3BlcnR5KHQpICYmIG4ucHVzaChmblt0XSk7CiAgICAgIHJldHVybiBuOwogICAgfSwgZS5mbHVzaFBlbmRpbmdEZWxldGVzID0gem4sIGUuc2V0RGVsYXlGdW5jdGlvbiA9IGZ1bmN0aW9uKG4pIHsKICAgICAgbG4gPSBuLCBjbi5sZW5ndGggJiYgbG4gJiYgbG4oem4pOwogICAgfSwgZ3QgPSBlLlVuYm91bmRUeXBlRXJyb3IgPSBObigiVW5ib3VuZFR5cGVFcnJvciIpLCBlLmNvdW50X2VtdmFsX2hhbmRsZXMgPSBmdW5jdGlvbigpIHsKICAgICAgZm9yICh2YXIgbiA9IDAsIHQgPSA1OyB0IDwgSS5sZW5ndGg7ICsrdCkKICAgICAgICBJW3RdICE9PSB2b2lkIDAgJiYgKytuOwogICAgICByZXR1cm4gbjsKICAgIH0sIGUuZ2V0X2ZpcnN0X2VtdmFsID0gZnVuY3Rpb24oKSB7CiAgICAgIGZvciAodmFyIG4gPSA1OyBuIDwgSS5sZW5ndGg7ICsrbikKICAgICAgICBpZiAoSVtuXSAhPT0gdm9pZCAwKQogICAgICAgICAgcmV0dXJuIElbbl07CiAgICAgIHJldHVybiBudWxsOwogICAgfSwgYXQucHVzaCh7IEJhOiBmdW5jdGlvbigpIHsKICAgICAgT3QoKTsKICAgIH0gfSk7CiAgICB2YXIgc2UgPSB7CiAgICAgIHo6IGZ1bmN0aW9uKG4pIHsKICAgICAgICByZXR1cm4gVG4obiArIDE2KSArIDE2OwogICAgICB9LAogICAgICB1OiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgdGhyb3cgbmV3IEp0KG4pLkZhKHQsIHIpLCAidW5jYXVnaHRfZXhjZXB0aW9uIiBpbiBtbiA/IG1uLnhhKysgOiBtbi54YSA9IDEsIG47CiAgICAgIH0sCiAgICAgIHc6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIGEpIHsKICAgICAgICB2YXIgbyA9IEluKHIpOwogICAgICAgIHQgPSBTKHQpLCBVKG4sIHsgbmFtZTogdCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihjKSB7CiAgICAgICAgICByZXR1cm4gISFjOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGMsIGwpIHsKICAgICAgICAgIHJldHVybiBsID8gaSA6IGE7CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBmdW5jdGlvbihjKSB7CiAgICAgICAgICBpZiAociA9PT0gMSkKICAgICAgICAgICAgdmFyIGwgPSAkOwogICAgICAgICAgZWxzZSBpZiAociA9PT0gMikKICAgICAgICAgICAgbCA9IFg7CiAgICAgICAgICBlbHNlIGlmIChyID09PSA0KQogICAgICAgICAgICBsID0gYjsKICAgICAgICAgIGVsc2UKICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBib29sZWFuIHR5cGUgc2l6ZTogIiArIHQpOwogICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKGxbYyA+PiBvXSk7CiAgICAgICAgfSwga2E6IG51bGwgfSk7CiAgICAgIH0sCiAgICAgIGk6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIGEsIG8sIGMsIGwsIHAsIGYsIGQsIGgsIHcpIHsKICAgICAgICBkID0gUyhkKSwgbyA9IFYoYSwgbyksIGwgJiYgKGwgPSBWKGMsIGwpKSwgZiAmJiAoZiA9IFYocCwgZikpLCB3ID0gVihoLCB3KTsKICAgICAgICB2YXIgVCA9IExuKGQpOwogICAgICAgIHl0KFQsIGZ1bmN0aW9uKCkgewogICAgICAgICAgZG4oIkNhbm5vdCBjb25zdHJ1Y3QgIiArIGQgKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgW2ldKTsKICAgICAgICB9KSwgdG4oW24sIHQsIHJdLCBpID8gW2ldIDogW10sIGZ1bmN0aW9uKHkpIHsKICAgICAgICAgIGlmICh5ID0geVswXSwgaSkKICAgICAgICAgICAgdmFyIE4gPSB5LmVhLCBPID0gTi5tYTsKICAgICAgICAgIGVsc2UKICAgICAgICAgICAgTyA9IEQucHJvdG90eXBlOwogICAgICAgICAgeSA9IGpuKFQsIGZ1bmN0aW9uKCkgewogICAgICAgICAgICBpZiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpICE9PSBrKQogICAgICAgICAgICAgIHRocm93IG5ldyBubigiVXNlICduZXcnIHRvIGNvbnN0cnVjdCAiICsgZCk7CiAgICAgICAgICAgIGlmIChqLmxhID09PSB2b2lkIDApCiAgICAgICAgICAgICAgdGhyb3cgbmV3IG5uKGQgKyAiIGhhcyBubyBhY2Nlc3NpYmxlIGNvbnN0cnVjdG9yIik7CiAgICAgICAgICAgIHZhciBTdCA9IGoubGFbYXJndW1lbnRzLmxlbmd0aF07CiAgICAgICAgICAgIGlmIChTdCA9PT0gdm9pZCAwKQogICAgICAgICAgICAgIHRocm93IG5ldyBubigiVHJpZWQgdG8gaW52b2tlIGN0b3Igb2YgIiArIGQgKyAiIHdpdGggaW52YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVycyAoIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiKSAtIGV4cGVjdGVkICgiICsgT2JqZWN0LmtleXMoai5sYSkudG9TdHJpbmcoKSArICIpIHBhcmFtZXRlcnMgaW5zdGVhZCEiKTsKICAgICAgICAgICAgcmV0dXJuIFN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgICB9KTsKICAgICAgICAgIHZhciBrID0gT2JqZWN0LmNyZWF0ZShPLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiB5IH0gfSk7CiAgICAgICAgICB5LnByb3RvdHlwZSA9IGs7CiAgICAgICAgICB2YXIgaiA9IG5ldyBYdChkLCB5LCBrLCB3LCBOLCBvLCBsLCBmKTsKICAgICAgICAgIE4gPSBuZXcgeihkLCBqLCAhMCwgITEpLCBPID0gbmV3IHooZCArICIqIiwgaiwgITEsICExKTsKICAgICAgICAgIHZhciBobiA9IG5ldyB6KGQgKyAiIGNvbnN0KiIsIGosICExLCAhMCk7CiAgICAgICAgICByZXR1cm4gcHRbbl0gPSB7IHBvaW50ZXJUeXBlOiBPLCB6YTogaG4gfSwgdnQoVCwgeSksIFtOLCBPLCBobl07CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGg6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIGEsIG8pIHsKICAgICAgICBRbigwIDwgdCk7CiAgICAgICAgdmFyIGMgPSBBdCh0LCByKTsKICAgICAgICBhID0gVihpLCBhKTsKICAgICAgICB2YXIgbCA9IFtvXSwgcCA9IFtdOwogICAgICAgIHRuKFtdLCBbbl0sIGZ1bmN0aW9uKGYpIHsKICAgICAgICAgIGYgPSBmWzBdOwogICAgICAgICAgdmFyIGQgPSAiY29uc3RydWN0b3IgIiArIGYubmFtZTsKICAgICAgICAgIGlmIChmLmVhLmxhID09PSB2b2lkIDAgJiYgKGYuZWEubGEgPSBbXSksIGYuZWEubGFbdCAtIDFdICE9PSB2b2lkIDApCiAgICAgICAgICAgIHRocm93IG5ldyBubigiQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIGNvbnN0cnVjdG9ycyB3aXRoIGlkZW50aWNhbCBudW1iZXIgb2YgcGFyYW1ldGVycyAoIiArICh0IC0gMSkgKyAiKSBmb3IgY2xhc3MgJyIgKyBmLm5hbWUgKyAiJyEgT3ZlcmxvYWQgcmVzb2x1dGlvbiBpcyBjdXJyZW50bHkgb25seSBwZXJmb3JtZWQgdXNpbmcgdGhlIHBhcmFtZXRlciBjb3VudCwgbm90IGFjdHVhbCB0eXBlIGluZm8hIik7CiAgICAgICAgICByZXR1cm4gZi5lYS5sYVt0IC0gMV0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgZG4oIkNhbm5vdCBjb25zdHJ1Y3QgIiArIGYubmFtZSArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBjKTsKICAgICAgICAgIH0sIHRuKFtdLCBjLCBmdW5jdGlvbihoKSB7CiAgICAgICAgICAgIHJldHVybiBmLmVhLmxhW3QgLSAxXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIGFyZ3VtZW50cy5sZW5ndGggIT09IHQgLSAxICYmIHYoZCArICIgY2FsbGVkIHdpdGggIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiIGFyZ3VtZW50cywgZXhwZWN0ZWQgIiArICh0IC0gMSkpLCBwLmxlbmd0aCA9IDAsIGwubGVuZ3RoID0gdDsKICAgICAgICAgICAgICBmb3IgKHZhciB3ID0gMTsgdyA8IHQ7ICsrdykKICAgICAgICAgICAgICAgIGxbd10gPSBoW3ddLnRvV2lyZVR5cGUoCiAgICAgICAgICAgICAgICAgIHAsCiAgICAgICAgICAgICAgICAgIGFyZ3VtZW50c1t3IC0gMV0KICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgcmV0dXJuIHcgPSBhLmFwcGx5KG51bGwsIGwpLCBDbihwKSwgaFswXS5mcm9tV2lyZVR5cGUodyk7CiAgICAgICAgICAgIH0sIFtdOwogICAgICAgICAgfSksIFtdOwogICAgICAgIH0pOwogICAgICB9LAogICAgICBiOiBmdW5jdGlvbihuLCB0LCByLCBpLCBhLCBvLCBjLCBsLCBwLCBmKSB7CiAgICAgICAgdCA9IFModCksIGEgPSBWKGksIGEpLCB0bihbXSwgW25dLCBmdW5jdGlvbihkKSB7CiAgICAgICAgICBkID0gZFswXTsKICAgICAgICAgIHZhciBoID0gZC5uYW1lICsgIi4iICsgdCwgdyA9IHsgZ2V0OiBmdW5jdGlvbigpIHsKICAgICAgICAgICAgZG4oIkNhbm5vdCBhY2Nlc3MgIiArIGggKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgW3IsIGNdKTsKICAgICAgICAgIH0sIGVudW1lcmFibGU6ICEwLCBjb25maWd1cmFibGU6ICEwIH07CiAgICAgICAgICByZXR1cm4gcCA/IHcuc2V0ID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGRuKCJDYW5ub3QgYWNjZXNzICIgKyBoICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIFtyLCBjXSk7CiAgICAgICAgICB9IDogdy5zZXQgPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgdihoICsgIiBpcyBhIHJlYWQtb25seSBwcm9wZXJ0eSIpOwogICAgICAgICAgfSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGQuZWEubWEsIHQsIHcpLCB0bihbXSwgcCA/IFtyLCBjXSA6IFtyXSwgZnVuY3Rpb24oVCkgewogICAgICAgICAgICB2YXIgeSA9IFRbMF0sIE4gPSB7IGdldDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgdmFyIGsgPSBfdCh0aGlzLCBkLCBoICsgIiBnZXR0ZXIiKTsKICAgICAgICAgICAgICByZXR1cm4geS5mcm9tV2lyZVR5cGUoYShvLCBrKSk7CiAgICAgICAgICAgIH0sIGVudW1lcmFibGU6ICEwIH07CiAgICAgICAgICAgIGlmIChwKSB7CiAgICAgICAgICAgICAgcCA9IFYobCwgcCk7CiAgICAgICAgICAgICAgdmFyIE8gPSBUWzFdOwogICAgICAgICAgICAgIE4uc2V0ID0gZnVuY3Rpb24oaykgewogICAgICAgICAgICAgICAgdmFyIGogPSBfdCh0aGlzLCBkLCBoICsgIiBzZXR0ZXIiKSwgaG4gPSBbXTsKICAgICAgICAgICAgICAgIHAoZiwgaiwgTy50b1dpcmVUeXBlKGhuLCBrKSksIENuKGhuKTsKICAgICAgICAgICAgICB9OwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZC5lYS5tYSwgdCwgTiksIFtdOwogICAgICAgICAgfSksIFtdOwogICAgICAgIH0pOwogICAgICB9LAogICAgICB2OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdCA9IFModCksIFUobiwgeyBuYW1lOiB0LCBmcm9tV2lyZVR5cGU6IGZ1bmN0aW9uKHIpIHsKICAgICAgICAgIHZhciBpID0gSVtyXS52YWx1ZTsKICAgICAgICAgIHJldHVybiBEbihyKSwgaTsKICAgICAgICB9LCB0b1dpcmVUeXBlOiBmdW5jdGlvbihyLCBpKSB7CiAgICAgICAgICByZXR1cm4gZW4oaSk7CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBBbiwga2E6IG51bGwgfSk7CiAgICAgIH0sCiAgICAgIG06IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICByID0gSW4ociksIHQgPSBTKHQpLCBVKG4sIHsKICAgICAgICAgIG5hbWU6IHQsCiAgICAgICAgICBmcm9tV2lyZVR5cGU6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIGk7CiAgICAgICAgICB9LAogICAgICAgICAgdG9XaXJlVHlwZTogZnVuY3Rpb24oaSwgYSkgewogICAgICAgICAgICBpZiAodHlwZW9mIGEgIT0gIm51bWJlciIgJiYgdHlwZW9mIGEgIT0gImJvb2xlYW4iKQogICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0ICInICsgcm4oYSkgKyAnIiB0byAnICsgdGhpcy5uYW1lKTsKICAgICAgICAgICAgcmV0dXJuIGE7CiAgICAgICAgICB9LAogICAgICAgICAgYXJnUGFja0FkdmFuY2U6IDgsCiAgICAgICAgICByZWFkVmFsdWVGcm9tUG9pbnRlcjogcmUodCwgciksCiAgICAgICAgICBrYTogbnVsbAogICAgICAgIH0pOwogICAgICB9LAogICAgICBjOiBmdW5jdGlvbihuLCB0LCByLCBpLCBhLCBvKSB7CiAgICAgICAgdmFyIGMgPSBBdCh0LCByKTsKICAgICAgICBuID0gUyhuKSwgYSA9IFYoaSwgYSksIHl0KG4sIGZ1bmN0aW9uKCkgewogICAgICAgICAgZG4oIkNhbm5vdCBjYWxsICIgKyBuICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIGMpOwogICAgICAgIH0sIHQgLSAxKSwgdG4oW10sIGMsIGZ1bmN0aW9uKGwpIHsKICAgICAgICAgIHZhciBwID0gbiwgZiA9IG47CiAgICAgICAgICBsID0gW2xbMF0sIG51bGxdLmNvbmNhdChsLnNsaWNlKDEpKTsKICAgICAgICAgIHZhciBkID0gYSwgaCA9IGwubGVuZ3RoOwogICAgICAgICAgMiA+IGggJiYgdigiYXJnVHlwZXMgYXJyYXkgc2l6ZSBtaXNtYXRjaCEgTXVzdCBhdCBsZWFzdCBnZXQgcmV0dXJuIHZhbHVlIGFuZCAndGhpcycgdHlwZXMhIik7CiAgICAgICAgICBmb3IgKHZhciB3ID0gbFsxXSAhPT0gbnVsbCAmJiAhMSwgVCA9ICExLCB5ID0gMTsgeSA8IGwubGVuZ3RoOyArK3kpCiAgICAgICAgICAgIGlmIChsW3ldICE9PSBudWxsICYmIGxbeV0ua2EgPT09IHZvaWQgMCkgewogICAgICAgICAgICAgIFQgPSAhMDsKICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgfQogICAgICAgICAgdmFyIE4gPSBsWzBdLm5hbWUgIT09ICJ2b2lkIiwgTyA9ICIiLCBrID0gIiI7CiAgICAgICAgICBmb3IgKHkgPSAwOyB5IDwgaCAtIDI7ICsreSkKICAgICAgICAgICAgTyArPSAoeSAhPT0gMCA/ICIsICIgOiAiIikgKyAiYXJnIiArIHksIGsgKz0gKHkgIT09IDAgPyAiLCAiIDogIiIpICsgImFyZyIgKyB5ICsgIldpcmVkIjsKICAgICAgICAgIGYgPSAicmV0dXJuIGZ1bmN0aW9uICIgKyBMbihmKSArICIoIiArIE8gKyBgKSB7CmlmIChhcmd1bWVudHMubGVuZ3RoICE9PSBgICsgKGggLSAyKSArIGApIHsKdGhyb3dCaW5kaW5nRXJyb3IoJ2Z1bmN0aW9uIGAgKyBmICsgIiBjYWxsZWQgd2l0aCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLCBleHBlY3RlZCAiICsgKGggLSAyKSArIGAgYXJncyEnKTsKfQpgLCBUICYmIChmICs9IGB2YXIgZGVzdHJ1Y3RvcnMgPSBbXTsKYCk7CiAgICAgICAgICB2YXIgaiA9IFQgPyAiZGVzdHJ1Y3RvcnMiIDogIm51bGwiOwogICAgICAgICAgZm9yIChPID0gInRocm93QmluZGluZ0Vycm9yIGludm9rZXIgZm4gcnVuRGVzdHJ1Y3RvcnMgcmV0VHlwZSBjbGFzc1BhcmFtIi5zcGxpdCgiICIpLCBkID0gW3YsIGQsIG8sIENuLCBsWzBdLCBsWzFdXSwgdyAmJiAoZiArPSAidmFyIHRoaXNXaXJlZCA9IGNsYXNzUGFyYW0udG9XaXJlVHlwZSgiICsgaiArIGAsIHRoaXMpOwpgKSwgeSA9IDA7IHkgPCBoIC0gMjsgKyt5KQogICAgICAgICAgICBmICs9ICJ2YXIgYXJnIiArIHkgKyAiV2lyZWQgPSBhcmdUeXBlIiArIHkgKyAiLnRvV2lyZVR5cGUoIiArIGogKyAiLCBhcmciICsgeSArICIpOyAvLyAiICsgbFt5ICsgMl0ubmFtZSArIGAKYCwgTy5wdXNoKCJhcmdUeXBlIiArIHkpLCBkLnB1c2gobFt5ICsgMl0pOwogICAgICAgICAgaWYgKHcgJiYgKGsgPSAidGhpc1dpcmVkIiArICgwIDwgay5sZW5ndGggPyAiLCAiIDogIiIpICsgayksIGYgKz0gKE4gPyAidmFyIHJ2ID0gIiA6ICIiKSArICJpbnZva2VyKGZuIiArICgwIDwgay5sZW5ndGggPyAiLCAiIDogIiIpICsgayArIGApOwpgLCBUKQogICAgICAgICAgICBmICs9IGBydW5EZXN0cnVjdG9ycyhkZXN0cnVjdG9ycyk7CmA7CiAgICAgICAgICBlbHNlCiAgICAgICAgICAgIGZvciAoeSA9IHcgPyAxIDogMjsgeSA8IGwubGVuZ3RoOyArK3kpCiAgICAgICAgICAgICAgaCA9IHkgPT09IDEgPyAidGhpc1dpcmVkIiA6ICJhcmciICsgKHkgLSAyKSArICJXaXJlZCIsIGxbeV0ua2EgIT09IG51bGwgJiYgKGYgKz0gaCArICJfZHRvcigiICsgaCArICIpOyAvLyAiICsgbFt5XS5uYW1lICsgYApgLCBPLnB1c2goaCArICJfZHRvciIpLCBkLnB1c2gobFt5XS5rYSkpOwogICAgICAgICAgcmV0dXJuIE4gJiYgKGYgKz0gYHZhciByZXQgPSByZXRUeXBlLmZyb21XaXJlVHlwZShydik7CnJldHVybiByZXQ7CmApLCBPLnB1c2goZiArIGB9CmApLCBsID0gaWUoTykuYXBwbHkobnVsbCwgZCksIHZ0KHAsIGwsIHQgLSAxKSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGU6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIGEpIHsKICAgICAgICBmdW5jdGlvbiBvKGYpIHsKICAgICAgICAgIHJldHVybiBmOwogICAgICAgIH0KICAgICAgICB0ID0gUyh0KSwgYSA9PT0gLTEgJiYgKGEgPSA0Mjk0OTY3Mjk1KTsKICAgICAgICB2YXIgYyA9IEluKHIpOwogICAgICAgIGlmIChpID09PSAwKSB7CiAgICAgICAgICB2YXIgbCA9IDMyIC0gOCAqIHI7CiAgICAgICAgICBvID0gZnVuY3Rpb24oZikgewogICAgICAgICAgICByZXR1cm4gZiA8PCBsID4+PiBsOwogICAgICAgICAgfTsKICAgICAgICB9CiAgICAgICAgdmFyIHAgPSB0LmluZGV4T2YoInVuc2lnbmVkIikgIT0gLTE7CiAgICAgICAgVShuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogbywgdG9XaXJlVHlwZTogZnVuY3Rpb24oZiwgZCkgewogICAgICAgICAgaWYgKHR5cGVvZiBkICE9ICJudW1iZXIiICYmIHR5cGVvZiBkICE9ICJib29sZWFuIikKICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgIicgKyBybihkKSArICciIHRvICcgKyB0aGlzLm5hbWUpOwogICAgICAgICAgaWYgKGQgPCBpIHx8IGQgPiBhKQogICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQYXNzaW5nIGEgbnVtYmVyICInICsgcm4oZCkgKyAnIiBmcm9tIEpTIHNpZGUgdG8gQy9DKysgc2lkZSB0byBhbiBhcmd1bWVudCBvZiB0eXBlICInICsgdCArICciLCB3aGljaCBpcyBvdXRzaWRlIHRoZSB2YWxpZCByYW5nZSBbJyArIGkgKyAiLCAiICsgYSArICJdISIpOwogICAgICAgICAgcmV0dXJuIHAgPyBkID4+PiAwIDogZCB8IDA7CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBhZSh0LCBjLCBpICE9PSAwKSwga2E6IG51bGwgfSk7CiAgICAgIH0sCiAgICAgIGQ6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBmdW5jdGlvbiBpKG8pIHsKICAgICAgICAgIG8gPj49IDI7CiAgICAgICAgICB2YXIgYyA9IEg7CiAgICAgICAgICByZXR1cm4gbmV3IGEoUSwgY1tvICsgMV0sIGNbb10pOwogICAgICAgIH0KICAgICAgICB2YXIgYSA9IFtJbnQ4QXJyYXksIFVpbnQ4QXJyYXksIEludDE2QXJyYXksIFVpbnQxNkFycmF5LCBJbnQzMkFycmF5LCBVaW50MzJBcnJheSwgRmxvYXQzMkFycmF5LCBGbG9hdDY0QXJyYXldW3RdOwogICAgICAgIHIgPSBTKHIpLCBVKG4sIHsgbmFtZTogciwgZnJvbVdpcmVUeXBlOiBpLCBhcmdQYWNrQWR2YW5jZTogOCwgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IGkgfSwgeyBFYTogITAgfSk7CiAgICAgIH0sCiAgICAgIG46IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUyh0KTsKICAgICAgICB2YXIgciA9IHQgPT09ICJzdGQ6OnN0cmluZyI7CiAgICAgICAgVShuLCB7CiAgICAgICAgICBuYW1lOiB0LAogICAgICAgICAgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHZhciBhID0gSFtpID4+IDJdOwogICAgICAgICAgICBpZiAocikKICAgICAgICAgICAgICBmb3IgKHZhciBvID0gaSArIDQsIGMgPSAwOyBjIDw9IGE7ICsrYykgewogICAgICAgICAgICAgICAgdmFyIGwgPSBpICsgNCArIGM7CiAgICAgICAgICAgICAgICBpZiAoYyA9PSBhIHx8IHhbbF0gPT0gMCkgewogICAgICAgICAgICAgICAgICBpZiAobykgewogICAgICAgICAgICAgICAgICAgIHZhciBwID0gbywgZiA9IHgsIGQgPSBwICsgKGwgLSBvKTsKICAgICAgICAgICAgICAgICAgICBmb3IgKG8gPSBwOyBmW29dICYmICEobyA+PSBkKTsgKQogICAgICAgICAgICAgICAgICAgICAgKytvOwogICAgICAgICAgICAgICAgICAgIGlmICgxNiA8IG8gLSBwICYmIGYuc3ViYXJyYXkgJiYgWG4pCiAgICAgICAgICAgICAgICAgICAgICBwID0gWG4uZGVjb2RlKGYuc3ViYXJyYXkocCwgbykpOwogICAgICAgICAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgICAgICAgICAgZm9yIChkID0gIiI7IHAgPCBvOyApIHsKICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBmW3ArK107CiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoICYgMTI4KSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHcgPSBmW3ArK10gJiA2MzsKICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGggJiAyMjQpID09IDE5MikKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoaCAmIDMxKSA8PCA2IHwgdyk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgVCA9IGZbcCsrXSAmIDYzOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgaCA9IChoICYgMjQwKSA9PSAyMjQgPyAoaCAmIDE1KSA8PCAxMiB8IHcgPDwgNiB8IFQgOiAoaCAmIDcpIDw8IDE4IHwgdyA8PCAxMiB8IFQgPDwgNiB8IGZbcCsrXSAmIDYzLCA2NTUzNiA+IGggPyBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoaCkgOiAoaCAtPSA2NTUzNiwgZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDU1Mjk2IHwgaCA+PiAxMCwgNTYzMjAgfCBoICYgMTAyMykpOwogICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlCiAgICAgICAgICAgICAgICAgICAgICAgICAgZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGgpOwogICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgcCA9IGQ7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICB9IGVsc2UKICAgICAgICAgICAgICAgICAgICBwID0gIiI7CiAgICAgICAgICAgICAgICAgIGlmICh5ID09PSB2b2lkIDApCiAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBwOwogICAgICAgICAgICAgICAgICBlbHNlCiAgICAgICAgICAgICAgICAgICAgeSArPSAiXDAiLCB5ICs9IHA7CiAgICAgICAgICAgICAgICAgIG8gPSBsICsgMTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICB9CiAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgIGZvciAoeSA9IEFycmF5KGEpLCBjID0gMDsgYyA8IGE7ICsrYykKICAgICAgICAgICAgICAgIHlbY10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHhbaSArIDQgKyBjXSk7CiAgICAgICAgICAgICAgeSA9IHkuam9pbigiIik7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIEIoaSksIHk7CiAgICAgICAgICB9LAogICAgICAgICAgdG9XaXJlVHlwZTogZnVuY3Rpb24oaSwgYSkgewogICAgICAgICAgICBhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgJiYgKGEgPSBuZXcgVWludDhBcnJheShhKSk7CiAgICAgICAgICAgIHZhciBvID0gdHlwZW9mIGEgPT0gInN0cmluZyI7CiAgICAgICAgICAgIG8gfHwgYSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgfHwgYSBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5IHx8IGEgaW5zdGFuY2VvZiBJbnQ4QXJyYXkgfHwgdigiQ2Fubm90IHBhc3Mgbm9uLXN0cmluZyB0byBzdGQ6OnN0cmluZyIpOwogICAgICAgICAgICB2YXIgYyA9IChyICYmIG8gPyBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICBmb3IgKHZhciBmID0gMCwgZCA9IDA7IGQgPCBhLmxlbmd0aDsgKytkKSB7CiAgICAgICAgICAgICAgICB2YXIgaCA9IGEuY2hhckNvZGVBdChkKTsKICAgICAgICAgICAgICAgIDU1Mjk2IDw9IGggJiYgNTczNDMgPj0gaCAmJiAoaCA9IDY1NTM2ICsgKChoICYgMTAyMykgPDwgMTApIHwgYS5jaGFyQ29kZUF0KCsrZCkgJiAxMDIzKSwgMTI3ID49IGggPyArK2YgOiBmID0gMjA0NyA+PSBoID8gZiArIDIgOiA2NTUzNSA+PSBoID8gZiArIDMgOiBmICsgNDsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgcmV0dXJuIGY7CiAgICAgICAgICAgIH0gOiBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICByZXR1cm4gYS5sZW5ndGg7CiAgICAgICAgICAgIH0pKCksIGwgPSBUbig0ICsgYyArIDEpOwogICAgICAgICAgICBpZiAoSFtsID4+IDJdID0gYywgciAmJiBvKQogICAgICAgICAgICAgIEh0KGEsIGwgKyA0LCBjICsgMSk7CiAgICAgICAgICAgIGVsc2UgaWYgKG8pCiAgICAgICAgICAgICAgZm9yIChvID0gMDsgbyA8IGM7ICsrbykgewogICAgICAgICAgICAgICAgdmFyIHAgPSBhLmNoYXJDb2RlQXQobyk7CiAgICAgICAgICAgICAgICAyNTUgPCBwICYmIChCKGwpLCB2KCJTdHJpbmcgaGFzIFVURi0xNiBjb2RlIHVuaXRzIHRoYXQgZG8gbm90IGZpdCBpbiA4IGJpdHMiKSksIHhbbCArIDQgKyBvXSA9IHA7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlCiAgICAgICAgICAgICAgZm9yIChvID0gMDsgbyA8IGM7ICsrbykKICAgICAgICAgICAgICAgIHhbbCArIDQgKyBvXSA9IGFbb107CiAgICAgICAgICAgIHJldHVybiBpICE9PSBudWxsICYmIGkucHVzaChCLCBsKSwgbDsKICAgICAgICAgIH0sCiAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBBbiwKICAgICAgICAgIGthOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIEIoaSk7CiAgICAgICAgICB9CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGo6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBpZiAociA9IFMociksIHQgPT09IDIpCiAgICAgICAgICB2YXIgaSA9IFV0LCBhID0genQsIG8gPSBCdCwgYyA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICByZXR1cm4gcG47CiAgICAgICAgICB9LCBsID0gMTsKICAgICAgICBlbHNlCiAgICAgICAgICB0ID09PSA0ICYmIChpID0gRHQsIGEgPSBWdCwgbyA9IEd0LCBjID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHJldHVybiBIOwogICAgICAgICAgfSwgbCA9IDIpOwogICAgICAgIFUobiwgeyBuYW1lOiByLCBmcm9tV2lyZVR5cGU6IGZ1bmN0aW9uKHApIHsKICAgICAgICAgIGZvciAodmFyIGYgPSBIW3AgPj4gMl0sIGQgPSBjKCksIGgsIHcgPSBwICsgNCwgVCA9IDA7IFQgPD0gZjsgKytUKSB7CiAgICAgICAgICAgIHZhciB5ID0gcCArIDQgKyBUICogdDsKICAgICAgICAgICAgKFQgPT0gZiB8fCBkW3kgPj4gbF0gPT0gMCkgJiYgKHcgPSBpKHcsIHkgLSB3KSwgaCA9PT0gdm9pZCAwID8gaCA9IHcgOiAoaCArPSAiXDAiLCBoICs9IHcpLCB3ID0geSArIHQpOwogICAgICAgICAgfQogICAgICAgICAgcmV0dXJuIEIocCksIGg7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24ocCwgZikgewogICAgICAgICAgdHlwZW9mIGYgIT0gInN0cmluZyIgJiYgdigiQ2Fubm90IHBhc3Mgbm9uLXN0cmluZyB0byBDKysgc3RyaW5nIHR5cGUgIiArIHIpOwogICAgICAgICAgdmFyIGQgPSBvKGYpLCBoID0gVG4oNCArIGQgKyB0KTsKICAgICAgICAgIHJldHVybiBIW2ggPj4gMl0gPSBkID4+IGwsIGEoZiwgaCArIDQsIGQgKyB0KSwgcCAhPT0gbnVsbCAmJiBwLnB1c2goQiwgaCksIGg7CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBBbiwga2E6IGZ1bmN0aW9uKHApIHsKICAgICAgICAgIEIocCk7CiAgICAgICAgfSB9KTsKICAgICAgfSwKICAgICAgeDogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHQgPSBTKHQpLCBVKG4sIHsgUWE6ICEwLCBuYW1lOiB0LCBhcmdQYWNrQWR2YW5jZTogMCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbigpIHsKICAgICAgICB9LCB0b1dpcmVUeXBlOiBmdW5jdGlvbigpIHsKICAgICAgICB9IH0pOwogICAgICB9LAogICAgICBrOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgbiA9IFZuKG4pLCB0ID0gQ3QodCwgImVtdmFsOjphcyIpOwogICAgICAgIHZhciBpID0gW10sIGEgPSBlbihpKTsKICAgICAgICByZXR1cm4gYltyID4+IDJdID0gYSwgdC50b1dpcmVUeXBlKGksIG4pOwogICAgICB9LAogICAgICBnOiBEbiwKICAgICAgbDogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHJldHVybiBuID0gVm4obiksIHQgPSBWbih0KSwgZW4oblt0XSk7CiAgICAgIH0sCiAgICAgIHA6IGZ1bmN0aW9uKG4pIHsKICAgICAgICB2YXIgdCA9IG9lW25dOwogICAgICAgIHJldHVybiBlbih0ID09PSB2b2lkIDAgPyBTKG4pIDogdCk7CiAgICAgIH0sCiAgICAgIG86IGZ1bmN0aW9uKG4pIHsKICAgICAgICBDbihJW25dLnZhbHVlKSwgRG4obik7CiAgICAgIH0sCiAgICAgIHk6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICByZXR1cm4gbiA9IEN0KG4sICJfZW12YWxfdGFrZV92YWx1ZSIpLCBuID0gbi5yZWFkVmFsdWVGcm9tUG9pbnRlcih0KSwgZW4obik7CiAgICAgIH0sCiAgICAgIGY6IGZ1bmN0aW9uKCkgewogICAgICAgIHNuKCk7CiAgICAgIH0sCiAgICAgIHE6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICB4LmNvcHlXaXRoaW4obiwgdCwgdCArIHIpOwogICAgICB9LAogICAgICByOiBmdW5jdGlvbihuKSB7CiAgICAgICAgbiA+Pj49IDA7CiAgICAgICAgdmFyIHQgPSB4Lmxlbmd0aDsKICAgICAgICBpZiAoMjE0NzQ4MzY0OCA8IG4pCiAgICAgICAgICByZXR1cm4gITE7CiAgICAgICAgZm9yICh2YXIgciA9IDE7IDQgPj0gcjsgciAqPSAyKSB7CiAgICAgICAgICB2YXIgaSA9IHQgKiAoMSArIDAuMiAvIHIpOwogICAgICAgICAgaSA9IE1hdGgubWluKGksIG4gKyAxMDA2NjMyOTYpLCBpID0gTWF0aC5tYXgoMTY3NzcyMTYsIG4sIGkpLCAwIDwgaSAlIDY1NTM2ICYmIChpICs9IDY1NTM2IC0gaSAlIDY1NTM2KTsKICAgICAgICAgIG46IHsKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICBHLmdyb3coTWF0aC5taW4oMjE0NzQ4MzY0OCwgaSkgLSBRLmJ5dGVMZW5ndGggKyA2NTUzNSA+Pj4gMTYpLCBldChHLmJ1ZmZlcik7CiAgICAgICAgICAgICAgdmFyIGEgPSAxOwogICAgICAgICAgICAgIGJyZWFrIG47CiAgICAgICAgICAgIH0gY2F0Y2ggewogICAgICAgICAgICB9CiAgICAgICAgICAgIGEgPSB2b2lkIDA7CiAgICAgICAgICB9CiAgICAgICAgICBpZiAoYSkKICAgICAgICAgICAgcmV0dXJuICEwOwogICAgICAgIH0KICAgICAgICByZXR1cm4gITE7CiAgICAgIH0sCiAgICAgIHM6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB2YXIgciA9IDA7CiAgICAgICAgcmV0dXJuIFR0KCkuZm9yRWFjaChmdW5jdGlvbihpLCBhKSB7CiAgICAgICAgICB2YXIgbyA9IHQgKyByOwogICAgICAgICAgZm9yIChhID0gYltuICsgNCAqIGEgPj4gMl0gPSBvLCBvID0gMDsgbyA8IGkubGVuZ3RoOyArK28pCiAgICAgICAgICAgICRbYSsrID4+IDBdID0gaS5jaGFyQ29kZUF0KG8pOwogICAgICAgICAgJFthID4+IDBdID0gMCwgciArPSBpLmxlbmd0aCArIDE7CiAgICAgICAgfSksIDA7CiAgICAgIH0sCiAgICAgIHQ6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB2YXIgciA9IFR0KCk7CiAgICAgICAgYltuID4+IDJdID0gci5sZW5ndGg7CiAgICAgICAgdmFyIGkgPSAwOwogICAgICAgIHJldHVybiByLmZvckVhY2goZnVuY3Rpb24oYSkgewogICAgICAgICAgaSArPSBhLmxlbmd0aCArIDE7CiAgICAgICAgfSksIGJbdCA+PiAyXSA9IGksIDA7CiAgICAgIH0sCiAgICAgIGE6IEcKICAgIH07CiAgICAoZnVuY3Rpb24oKSB7CiAgICAgIGZ1bmN0aW9uIG4obykgewogICAgICAgIG8gPSBvLmV4cG9ydHMsIG8gPSBNdChvKSwgZS5hc20gPSBvLCBZLS0sIGUubW9uaXRvclJ1bkRlcGVuZGVuY2llcyAmJiBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMoWSksIFkgPT0gMCAmJiBvbiAmJiAobyA9IG9uLCBvbiA9IG51bGwsIG8oKSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gdChvKSB7CiAgICAgICAgbihvLmluc3RhbmNlKTsKICAgICAgfQogICAgICBmdW5jdGlvbiByKG8pIHsKICAgICAgICByZXR1cm4gWnQoKS50aGVuKGZ1bmN0aW9uKGMpIHsKICAgICAgICAgIHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShjLCBpKTsKICAgICAgICB9KS50aGVuKG8sIGZ1bmN0aW9uKGMpIHsKICAgICAgICAgIFAoImZhaWxlZCB0byBhc3luY2hyb25vdXNseSBwcmVwYXJlIHdhc206ICIgKyBjKSwgc24oYyk7CiAgICAgICAgfSk7CiAgICAgIH0KICAgICAgdmFyIGkgPSB7IGE6IHNlIH07CiAgICAgIGlmIChZKyssIGUubW9uaXRvclJ1bkRlcGVuZGVuY2llcyAmJiBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMoWSksIGUuaW5zdGFudGlhdGVXYXNtKQogICAgICAgIHRyeSB7CiAgICAgICAgICB2YXIgYSA9IGUuaW5zdGFudGlhdGVXYXNtKGksIG4pOwogICAgICAgICAgcmV0dXJuIGEgPSBNdChhKTsKICAgICAgICB9IGNhdGNoIChvKSB7CiAgICAgICAgICByZXR1cm4gUCgiTW9kdWxlLmluc3RhbnRpYXRlV2FzbSBjYWxsYmFjayBmYWlsZWQgd2l0aCBlcnJvcjogIiArIG8pLCAhMTsKICAgICAgICB9CiAgICAgIHJldHVybiBmdW5jdGlvbigpIHsKICAgICAgICBpZiAoTCB8fCB0eXBlb2YgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcgIT0gImZ1bmN0aW9uIiB8fCBzdCgpIHx8IHhuKCJmaWxlOi8vIikgfHwgdHlwZW9mIGZldGNoICE9ICJmdW5jdGlvbiIpCiAgICAgICAgICByZXR1cm4gcih0KTsKICAgICAgICBmZXRjaChaLCB7IGNyZWRlbnRpYWxzOiAic2FtZS1vcmlnaW4iIH0pLnRoZW4oZnVuY3Rpb24obykgewogICAgICAgICAgcmV0dXJuIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKG8sIGkpLnRoZW4odCwgZnVuY3Rpb24oYykgewogICAgICAgICAgICByZXR1cm4gUCgid2FzbSBzdHJlYW1pbmcgY29tcGlsZSBmYWlsZWQ6ICIgKyBjKSwgUCgiZmFsbGluZyBiYWNrIHRvIEFycmF5QnVmZmVyIGluc3RhbnRpYXRpb24iKSwgcih0KTsKICAgICAgICAgIH0pOwogICAgICAgIH0pOwogICAgICB9KCksIHt9OwogICAgfSkoKTsKICAgIHZhciBPdCA9IGUuX19fd2FzbV9jYWxsX2N0b3JzID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoT3QgPSBlLl9fX3dhc21fY2FsbF9jdG9ycyA9IGUuYXNtLkIpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBUbiA9IGUuX21hbGxvYyA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKFRuID0gZS5fbWFsbG9jID0gZS5hc20uQykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIEIgPSBlLl9mcmVlID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoQiA9IGUuX2ZyZWUgPSBlLmFzbS5EKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgYnQgPSBlLl9fX2dldFR5cGVOYW1lID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoYnQgPSBlLl9fX2dldFR5cGVOYW1lID0gZS5hc20uRSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH07CiAgICBlLl9fX2VtYmluZF9yZWdpc3Rlcl9uYXRpdmVfYW5kX2J1aWx0aW5fdHlwZXMgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9fX2VtYmluZF9yZWdpc3Rlcl9uYXRpdmVfYW5kX2J1aWx0aW5fdHlwZXMgPSBlLmFzbS5GKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpID0gZS5hc20uRykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aSA9IGUuYXNtLkgpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9pID0gZS5hc20uSSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpID0gZS5hc20uSikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWkgPSBlLmFzbS5LKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2ZpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9maWkgPSBlLmFzbS5MKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWYgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpZiA9IGUuYXNtLk0pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWkgPSBlLmFzbS5OKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaSA9IGUuYXNtLk8pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpaSA9IGUuYXNtLlApLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaSA9IGUuYXNtLlEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWkgPSBlLmFzbS5SKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpaWlpID0gZS5hc20uUykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaSA9IGUuYXNtLlQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWlpID0gZS5hc20uVSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlpZGkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaWRpID0gZS5hc20uVikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlkaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlkaSA9IGUuYXNtLlcpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaWkgPSBlLmFzbS5YKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaSA9IGUuYXNtLlkpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaSA9IGUuYXNtLlopLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpID0gZS5hc20uXykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0YXJ0X3Vud2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0YXJ0X3Vud2luZCA9IGUuYXNtLiQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdG9wX3Vud2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0b3BfdW53aW5kID0gZS5hc20uYWEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdGFydF9yZXdpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdGFydF9yZXdpbmQgPSBlLmFzbS5iYSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0b3BfcmV3aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RvcF9yZXdpbmQgPSBlLmFzbS5jYSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH07CiAgICB2YXIgUG47CiAgICBvbiA9IGZ1bmN0aW9uIG4oKSB7CiAgICAgIFBuIHx8ICRuKCksIFBuIHx8IChvbiA9IG4pOwogICAgfTsKICAgIGZ1bmN0aW9uICRuKCkgewogICAgICBmdW5jdGlvbiBuKCkgewogICAgICAgIGlmICghUG4gJiYgKFBuID0gITAsIGUuY2FsbGVkUnVuID0gITAsICFSbikpIHsKICAgICAgICAgIGlmICh5bihhdCksIHluKCR0KSwgbShlKSwgZS5vblJ1bnRpbWVJbml0aWFsaXplZCAmJiBlLm9uUnVudGltZUluaXRpYWxpemVkKCksIGUucG9zdFJ1bikKICAgICAgICAgICAgZm9yICh0eXBlb2YgZS5wb3N0UnVuID09ICJmdW5jdGlvbiIgJiYgKGUucG9zdFJ1biA9IFtlLnBvc3RSdW5dKTsgZS5wb3N0UnVuLmxlbmd0aDsgKSB7CiAgICAgICAgICAgICAgdmFyIHQgPSBlLnBvc3RSdW4uc2hpZnQoKTsKICAgICAgICAgICAgICBvdC51bnNoaWZ0KHQpOwogICAgICAgICAgICB9CiAgICAgICAgICB5bihvdCk7CiAgICAgICAgfQogICAgICB9CiAgICAgIGlmICghKDAgPCBZKSkgewogICAgICAgIGlmIChlLnByZVJ1bikKICAgICAgICAgIGZvciAodHlwZW9mIGUucHJlUnVuID09ICJmdW5jdGlvbiIgJiYgKGUucHJlUnVuID0gW2UucHJlUnVuXSk7IGUucHJlUnVuLmxlbmd0aDsgKQogICAgICAgICAgICBZdCgpOwogICAgICAgIHluKGl0KSwgMCA8IFkgfHwgKGUuc2V0U3RhdHVzID8gKGUuc2V0U3RhdHVzKCJSdW5uaW5nLi4uIiksIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7CiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgICAgICAgICBlLnNldFN0YXR1cygiIik7CiAgICAgICAgICB9LCAxKSwgbigpOwogICAgICAgIH0sIDEpKSA6IG4oKSk7CiAgICAgIH0KICAgIH0KICAgIGlmIChlLnJ1biA9ICRuLCBlLnByZUluaXQpCiAgICAgIGZvciAodHlwZW9mIGUucHJlSW5pdCA9PSAiZnVuY3Rpb24iICYmIChlLnByZUluaXQgPSBbZS5wcmVJbml0XSk7IDAgPCBlLnByZUluaXQubGVuZ3RoOyApCiAgICAgICAgZS5wcmVJbml0LnBvcCgpKCk7CiAgICByZXR1cm4gJG4oKSwgdS5yZWFkeTsKICB9Owp9KCk7CmNsYXNzIHBlIHsKICBjb25zdHJ1Y3RvcigpIHsKICAgIFluKHRoaXMsICJzYW1XYXNtTW9kdWxlIik7CiAgfQogIGdldE92ZXJyaWRkZW5Nb2R1bGVzKHUsIGUpIHsKICAgIHJldHVybiB7CiAgICAgIGxvY2F0ZUZpbGU6IChtKSA9PiBuZXcgVVJMKGUgfHwgbSwgdSkuaHJlZgogICAgfTsKICB9CiAgYXN5bmMgaGFuZGxlTWlzc2luZ09ySW52YWxpZFNhbU1vZHVsZSh1LCBlKSB7CiAgICB0cnkgewogICAgICBjb25zdCBtID0gYXdhaXQgZmV0Y2godSk7CiAgICAgIGlmICghbS5vaykKICAgICAgICB0aHJvdyBuZXcgRigKICAgICAgICAgIGBUaGUgcGF0aCB0byAke2V9IGlzIGluY29ycmVjdCBvciB0aGUgbW9kdWxlIGlzIG1pc3NpbmcuIFBsZWFzZSBjaGVjayBwcm92aWRlZCBwYXRoIHRvIHdhc20gZmlsZXMuIEN1cnJlbnQgcGF0aCBpcyAke3V9YAogICAgICAgICk7CiAgICAgIGNvbnN0IGcgPSBhd2FpdCBtLmFycmF5QnVmZmVyKCk7CiAgICAgIGlmICghV2ViQXNzZW1ibHkudmFsaWRhdGUoZykpCiAgICAgICAgdGhyb3cgbmV3IEYoCiAgICAgICAgICBgVGhlIHByb3ZpZGVkICR7ZX0gaXMgbm90IGEgdmFsaWQgV0FTTSBtb2R1bGUuIFBsZWFzZSBjaGVjayBwcm92aWRlZCBwYXRoIHRvIHdhc20gZmlsZXMuIEN1cnJlbnQgcGF0aCBpcyAke3V9YAogICAgICAgICk7CiAgICB9IGNhdGNoIChtKSB7CiAgICAgIGlmIChtIGluc3RhbmNlb2YgRikKICAgICAgICB0aHJvdyBjb25zb2xlLmVycm9yKAogICAgICAgICAgIllvdSBjYW4gZmluZCBtb3JlIGluZm9ybWF0aW9uIGFib3V0IGhvdyB0byBob3N0IHdhc20gZmlsZXMgaGVyZTogaHR0cHM6Ly9kZXZlbG9wZXJzLmlubm92YXRyaWNzLmNvbS9kaWdpdGFsLW9uYm9hcmRpbmcvdGVjaG5pY2FsL3JlbW90ZS9kb3Qtd2ViLWRvY3VtZW50L2xhdGVzdC9kb2N1bWVudGF0aW9uLyNfaG9zdGluZ19zYW1fd2FzbSIKICAgICAgICApLCBtOwogICAgfQogIH0KICBhc3luYyBnZXRXYXNtRmlsZU5hbWUoKSB7CiAgICByZXR1cm4gYXdhaXQgY2UoKSA/IGt0LnNpbWQgOiBrdC5zYW07CiAgfQogIGFzeW5jIGluaXRTYW1Nb2R1bGUodSwgZSA9ICIvd2FzbSIpIHsKICAgIGlmICh0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHJldHVybjsKICAgIGNvbnN0IG0gPSBhd2FpdCB0aGlzLmdldFdhc21GaWxlTmFtZSgpLCBnID0gYCR7ZX0vJHttfWA7CiAgICB0cnkgewogICAgICB0aGlzLnNhbVdhc21Nb2R1bGUgPSBhd2FpdCBoZSh0aGlzLmdldE92ZXJyaWRkZW5Nb2R1bGVzKHUsIGcpKTsKICAgIH0gY2F0Y2ggewogICAgICB0aHJvdyBhd2FpdCB0aGlzLmhhbmRsZU1pc3NpbmdPckludmFsaWRTYW1Nb2R1bGUoZywgbSksIG5ldyBGKCJDb3VsZCBub3QgaW5pdCBkZXRlY3Rvci4iKTsKICAgIH0KICB9CiAgYXN5bmMgZ2V0U2FtVmVyc2lvbigpIHsKICAgIHZhciBlOwogICAgY29uc3QgdSA9IGF3YWl0ICgoZSA9IHRoaXMuc2FtV2FzbU1vZHVsZSkgPT0gbnVsbCA/IHZvaWQgMCA6IGUuZ2V0SW5mb1N0cmluZygpKTsKICAgIHJldHVybiB1ID09IG51bGwgPyB2b2lkIDAgOiB1LnRyaW0oKTsKICB9CiAgLyoKICAgKiBJbiBUUyA1LjIuMCB3YXMgYWRkZWQgc3BlY2lhbCBrZXl3b3JkICJ1c2luZyIgd2hpY2ggY291bGQgYmUgcGVyZmVjdCBmb3IgdGhpcyBjYXNlLgogICAqIFVuZm9ydHVuYXRlbHksIHZpdGUgcHJlYWN0IHBsdWdpbiBkb2VzIG5vdCBzdXBwb3J0IHRoaXMgdmVyc2lvbiBvZiBUUyB5ZXQuCiAgICogQ2hlY2sgcG9zc2liaWxpdHkgb2YgdXNpbmcgInVzaW5nIiBrZXl3b3JkIHdoZW4gdml0ZSBwcmVhY3QgcGx1Z2luIHVwZGF0ZXMKICAgKi8KICBhbGxvY2F0ZU1lbW9yeSh1KSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IEYoIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIHJldHVybiB0aGlzLnNhbVdhc21Nb2R1bGUuX21hbGxvYyh1KTsKICB9CiAgcmVsZWFzZU1lbW9yeSh1KSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IEYoIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIHRoaXMuc2FtV2FzbU1vZHVsZS5fZnJlZSh1KTsKICB9CiAgd3JpdGVEYXRhVG9NZW1vcnkodSwgZSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBGKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICB0aGlzLnNhbVdhc21Nb2R1bGUuSEVBUFU4LnNldCh1LCBlKTsKICB9Cn0KLyoqCiAqIEBsaWNlbnNlCiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTEMKICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAKICovCmNvbnN0IHh0ID0gU3ltYm9sKCJDb21saW5rLnByb3h5IiksIHllID0gU3ltYm9sKCJDb21saW5rLmVuZHBvaW50IiksIG1lID0gU3ltYm9sKCJDb21saW5rLnJlbGVhc2VQcm94eSIpLCBabiA9IFN5bWJvbCgiQ29tbGluay5maW5hbGl6ZXIiKSwgT24gPSBTeW1ib2woIkNvbWxpbmsudGhyb3duIiksIEZ0ID0gKHMpID0+IHR5cGVvZiBzID09ICJvYmplY3QiICYmIHMgIT09IG51bGwgfHwgdHlwZW9mIHMgPT0gImZ1bmN0aW9uIiwgdmUgPSB7CiAgY2FuSGFuZGxlOiAocykgPT4gRnQocykgJiYgc1t4dF0sCiAgc2VyaWFsaXplKHMpIHsKICAgIGNvbnN0IHsgcG9ydDE6IHUsIHBvcnQyOiBlIH0gPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTsKICAgIHJldHVybiBLbihzLCB1KSwgW2UsIFtlXV07CiAgfSwKICBkZXNlcmlhbGl6ZShzKSB7CiAgICByZXR1cm4gcy5zdGFydCgpLCBfZShzKTsKICB9Cn0sIGdlID0gewogIGNhbkhhbmRsZTogKHMpID0+IEZ0KHMpICYmIE9uIGluIHMsCiAgc2VyaWFsaXplKHsgdmFsdWU6IHMgfSkgewogICAgbGV0IHU7CiAgICByZXR1cm4gcyBpbnN0YW5jZW9mIEVycm9yID8gdSA9IHsKICAgICAgaXNFcnJvcjogITAsCiAgICAgIHZhbHVlOiB7CiAgICAgICAgbWVzc2FnZTogcy5tZXNzYWdlLAogICAgICAgIG5hbWU6IHMubmFtZSwKICAgICAgICBzdGFjazogcy5zdGFjawogICAgICB9CiAgICB9IDogdSA9IHsgaXNFcnJvcjogITEsIHZhbHVlOiBzIH0sIFt1LCBbXV07CiAgfSwKICBkZXNlcmlhbGl6ZShzKSB7CiAgICB0aHJvdyBzLmlzRXJyb3IgPyBPYmplY3QuYXNzaWduKG5ldyBFcnJvcihzLnZhbHVlLm1lc3NhZ2UpLCBzLnZhbHVlKSA6IHMudmFsdWU7CiAgfQp9LCBJdCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKFsKICBbInByb3h5IiwgdmVdLAogIFsidGhyb3ciLCBnZV0KXSk7CmZ1bmN0aW9uIHdlKHMsIHUpIHsKICBmb3IgKGNvbnN0IGUgb2YgcykKICAgIGlmICh1ID09PSBlIHx8IGUgPT09ICIqIiB8fCBlIGluc3RhbmNlb2YgUmVnRXhwICYmIGUudGVzdCh1KSkKICAgICAgcmV0dXJuICEwOwogIHJldHVybiAhMTsKfQpmdW5jdGlvbiBLbihzLCB1ID0gZ2xvYmFsVGhpcywgZSA9IFsiKiJdKSB7CiAgdS5hZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgZnVuY3Rpb24gbShnKSB7CiAgICBpZiAoIWcgfHwgIWcuZGF0YSkKICAgICAgcmV0dXJuOwogICAgaWYgKCF3ZShlLCBnLm9yaWdpbikpIHsKICAgICAgY29uc29sZS53YXJuKGBJbnZhbGlkIG9yaWdpbiAnJHtnLm9yaWdpbn0nIGZvciBjb21saW5rIHByb3h5YCk7CiAgICAgIHJldHVybjsKICAgIH0KICAgIGNvbnN0IHsgaWQ6IEMsIHR5cGU6IEEsIHBhdGg6IE0gfSA9IE9iamVjdC5hc3NpZ24oeyBwYXRoOiBbXSB9LCBnLmRhdGEpLCBXID0gKGcuZGF0YS5hcmd1bWVudExpc3QgfHwgW10pLm1hcChLKTsKICAgIGxldCBFOwogICAgdHJ5IHsKICAgICAgY29uc3QgXyA9IE0uc2xpY2UoMCwgLTEpLnJlZHVjZSgoUCwgTCkgPT4gUFtMXSwgcyksIFIgPSBNLnJlZHVjZSgoUCwgTCkgPT4gUFtMXSwgcyk7CiAgICAgIHN3aXRjaCAoQSkgewogICAgICAgIGNhc2UgIkdFVCI6CiAgICAgICAgICBFID0gUjsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIlNFVCI6CiAgICAgICAgICBfW00uc2xpY2UoLTEpWzBdXSA9IEsoZy5kYXRhLnZhbHVlKSwgRSA9ICEwOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiQVBQTFkiOgogICAgICAgICAgRSA9IFIuYXBwbHkoXywgVyk7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJDT05TVFJVQ1QiOgogICAgICAgICAgewogICAgICAgICAgICBjb25zdCBQID0gbmV3IFIoLi4uVyk7CiAgICAgICAgICAgIEUgPSBNZShQKTsKICAgICAgICAgIH0KICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIkVORFBPSU5UIjoKICAgICAgICAgIHsKICAgICAgICAgICAgY29uc3QgeyBwb3J0MTogUCwgcG9ydDI6IEwgfSA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpOwogICAgICAgICAgICBLbihzLCBMKSwgRSA9IFBlKFAsIFtQXSk7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJSRUxFQVNFIjoKICAgICAgICAgIEUgPSB2b2lkIDA7CiAgICAgICAgICBicmVhazsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgcmV0dXJuOwogICAgICB9CiAgICB9IGNhdGNoIChfKSB7CiAgICAgIEUgPSB7IHZhbHVlOiBfLCBbT25dOiAwIH07CiAgICB9CiAgICBQcm9taXNlLnJlc29sdmUoRSkuY2F0Y2goKF8pID0+ICh7IHZhbHVlOiBfLCBbT25dOiAwIH0pKS50aGVuKChfKSA9PiB7CiAgICAgIGNvbnN0IFtSLCBQXSA9IGtuKF8pOwogICAgICB1LnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgUiksIHsgaWQ6IEMgfSksIFApLCBBID09PSAiUkVMRUFTRSIgJiYgKHUucmVtb3ZlRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIG0pLCBMdCh1KSwgWm4gaW4gcyAmJiB0eXBlb2Ygc1tabl0gPT0gImZ1bmN0aW9uIiAmJiBzW1puXSgpKTsKICAgIH0pLmNhdGNoKChfKSA9PiB7CiAgICAgIGNvbnN0IFtSLCBQXSA9IGtuKHsKICAgICAgICB2YWx1ZTogbmV3IFR5cGVFcnJvcigiVW5zZXJpYWxpemFibGUgcmV0dXJuIHZhbHVlIiksCiAgICAgICAgW09uXTogMAogICAgICB9KTsKICAgICAgdS5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIFIpLCB7IGlkOiBDIH0pLCBQKTsKICAgIH0pOwogIH0pLCB1LnN0YXJ0ICYmIHUuc3RhcnQoKTsKfQpmdW5jdGlvbiBBZShzKSB7CiAgcmV0dXJuIHMuY29uc3RydWN0b3IubmFtZSA9PT0gIk1lc3NhZ2VQb3J0IjsKfQpmdW5jdGlvbiBMdChzKSB7CiAgQWUocykgJiYgcy5jbG9zZSgpOwp9CmZ1bmN0aW9uIF9lKHMsIHUpIHsKICByZXR1cm4gSm4ocywgW10sIHUpOwp9CmZ1bmN0aW9uIFduKHMpIHsKICBpZiAocykKICAgIHRocm93IG5ldyBFcnJvcigiUHJveHkgaGFzIGJlZW4gcmVsZWFzZWQgYW5kIGlzIG5vdCB1c2VhYmxlIik7Cn0KZnVuY3Rpb24ganQocykgewogIHJldHVybiBhbihzLCB7CiAgICB0eXBlOiAiUkVMRUFTRSIKICB9KS50aGVuKCgpID0+IHsKICAgIEx0KHMpOwogIH0pOwp9CmNvbnN0IGJuID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCksIFNuID0gIkZpbmFsaXphdGlvblJlZ2lzdHJ5IiBpbiBnbG9iYWxUaGlzICYmIG5ldyBGaW5hbGl6YXRpb25SZWdpc3RyeSgocykgPT4gewogIGNvbnN0IHUgPSAoYm4uZ2V0KHMpIHx8IDApIC0gMTsKICBibi5zZXQocywgdSksIHUgPT09IDAgJiYganQocyk7Cn0pOwpmdW5jdGlvbiBDZShzLCB1KSB7CiAgY29uc3QgZSA9IChibi5nZXQodSkgfHwgMCkgKyAxOwogIGJuLnNldCh1LCBlKSwgU24gJiYgU24ucmVnaXN0ZXIocywgdSwgcyk7Cn0KZnVuY3Rpb24gRWUocykgewogIFNuICYmIFNuLnVucmVnaXN0ZXIocyk7Cn0KZnVuY3Rpb24gSm4ocywgdSA9IFtdLCBlID0gZnVuY3Rpb24oKSB7Cn0pIHsKICBsZXQgbSA9ICExOwogIGNvbnN0IGcgPSBuZXcgUHJveHkoZSwgewogICAgZ2V0KEMsIEEpIHsKICAgICAgaWYgKFduKG0pLCBBID09PSBtZSkKICAgICAgICByZXR1cm4gKCkgPT4gewogICAgICAgICAgRWUoZyksIGp0KHMpLCBtID0gITA7CiAgICAgICAgfTsKICAgICAgaWYgKEEgPT09ICJ0aGVuIikgewogICAgICAgIGlmICh1Lmxlbmd0aCA9PT0gMCkKICAgICAgICAgIHJldHVybiB7IHRoZW46ICgpID0+IGcgfTsKICAgICAgICBjb25zdCBNID0gYW4ocywgewogICAgICAgICAgdHlwZTogIkdFVCIsCiAgICAgICAgICBwYXRoOiB1Lm1hcCgoVykgPT4gVy50b1N0cmluZygpKQogICAgICAgIH0pLnRoZW4oSyk7CiAgICAgICAgcmV0dXJuIE0udGhlbi5iaW5kKE0pOwogICAgICB9CiAgICAgIHJldHVybiBKbihzLCBbLi4udSwgQV0pOwogICAgfSwKICAgIHNldChDLCBBLCBNKSB7CiAgICAgIFduKG0pOwogICAgICBjb25zdCBbVywgRV0gPSBrbihNKTsKICAgICAgcmV0dXJuIGFuKHMsIHsKICAgICAgICB0eXBlOiAiU0VUIiwKICAgICAgICBwYXRoOiBbLi4udSwgQV0ubWFwKChfKSA9PiBfLnRvU3RyaW5nKCkpLAogICAgICAgIHZhbHVlOiBXCiAgICAgIH0sIEUpLnRoZW4oSyk7CiAgICB9LAogICAgYXBwbHkoQywgQSwgTSkgewogICAgICBXbihtKTsKICAgICAgY29uc3QgVyA9IHVbdS5sZW5ndGggLSAxXTsKICAgICAgaWYgKFcgPT09IHllKQogICAgICAgIHJldHVybiBhbihzLCB7CiAgICAgICAgICB0eXBlOiAiRU5EUE9JTlQiCiAgICAgICAgfSkudGhlbihLKTsKICAgICAgaWYgKFcgPT09ICJiaW5kIikKICAgICAgICByZXR1cm4gSm4ocywgdS5zbGljZSgwLCAtMSkpOwogICAgICBjb25zdCBbRSwgX10gPSBSdChNKTsKICAgICAgcmV0dXJuIGFuKHMsIHsKICAgICAgICB0eXBlOiAiQVBQTFkiLAogICAgICAgIHBhdGg6IHUubWFwKChSKSA9PiBSLnRvU3RyaW5nKCkpLAogICAgICAgIGFyZ3VtZW50TGlzdDogRQogICAgICB9LCBfKS50aGVuKEspOwogICAgfSwKICAgIGNvbnN0cnVjdChDLCBBKSB7CiAgICAgIFduKG0pOwogICAgICBjb25zdCBbTSwgV10gPSBSdChBKTsKICAgICAgcmV0dXJuIGFuKHMsIHsKICAgICAgICB0eXBlOiAiQ09OU1RSVUNUIiwKICAgICAgICBwYXRoOiB1Lm1hcCgoRSkgPT4gRS50b1N0cmluZygpKSwKICAgICAgICBhcmd1bWVudExpc3Q6IE0KICAgICAgfSwgVykudGhlbihLKTsKICAgIH0KICB9KTsKICByZXR1cm4gQ2UoZywgcyksIGc7Cn0KZnVuY3Rpb24gVGUocykgewogIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBzKTsKfQpmdW5jdGlvbiBSdChzKSB7CiAgY29uc3QgdSA9IHMubWFwKGtuKTsKICByZXR1cm4gW3UubWFwKChlKSA9PiBlWzBdKSwgVGUodS5tYXAoKGUpID0+IGVbMV0pKV07Cn0KY29uc3QgTnQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTsKZnVuY3Rpb24gUGUocywgdSkgewogIHJldHVybiBOdC5zZXQocywgdSksIHM7Cn0KZnVuY3Rpb24gTWUocykgewogIHJldHVybiBPYmplY3QuYXNzaWduKHMsIHsgW3h0XTogITAgfSk7Cn0KZnVuY3Rpb24ga24ocykgewogIGZvciAoY29uc3QgW3UsIGVdIG9mIEl0KQogICAgaWYgKGUuY2FuSGFuZGxlKHMpKSB7CiAgICAgIGNvbnN0IFttLCBnXSA9IGUuc2VyaWFsaXplKHMpOwogICAgICByZXR1cm4gWwogICAgICAgIHsKICAgICAgICAgIHR5cGU6ICJIQU5ETEVSIiwKICAgICAgICAgIG5hbWU6IHUsCiAgICAgICAgICB2YWx1ZTogbQogICAgICAgIH0sCiAgICAgICAgZwogICAgICBdOwogICAgfQogIHJldHVybiBbCiAgICB7CiAgICAgIHR5cGU6ICJSQVciLAogICAgICB2YWx1ZTogcwogICAgfSwKICAgIE50LmdldChzKSB8fCBbXQogIF07Cn0KZnVuY3Rpb24gSyhzKSB7CiAgc3dpdGNoIChzLnR5cGUpIHsKICAgIGNhc2UgIkhBTkRMRVIiOgogICAgICByZXR1cm4gSXQuZ2V0KHMubmFtZSkuZGVzZXJpYWxpemUocy52YWx1ZSk7CiAgICBjYXNlICJSQVciOgogICAgICByZXR1cm4gcy52YWx1ZTsKICB9Cn0KZnVuY3Rpb24gYW4ocywgdSwgZSkgewogIHJldHVybiBuZXcgUHJvbWlzZSgobSkgPT4gewogICAgY29uc3QgZyA9IFdlKCk7CiAgICBzLmFkZEV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBmdW5jdGlvbiBDKEEpIHsKICAgICAgIUEuZGF0YSB8fCAhQS5kYXRhLmlkIHx8IEEuZGF0YS5pZCAhPT0gZyB8fCAocy5yZW1vdmVFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgQyksIG0oQS5kYXRhKSk7CiAgICB9KSwgcy5zdGFydCAmJiBzLnN0YXJ0KCksIHMucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbih7IGlkOiBnIH0sIHUpLCBlKTsKICB9KTsKfQpmdW5jdGlvbiBXZSgpIHsKICByZXR1cm4gbmV3IEFycmF5KDQpLmZpbGwoMCkubWFwKCgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKS50b1N0cmluZygxNikpLmpvaW4oIi0iKTsKfQpjbGFzcyBPZSBleHRlbmRzIHBlIHsKICBwYXJzZVJhd0RhdGEodSkgewogICAgY29uc3QgeyBicmlnaHRuZXNzOiBlLCBob3RzcG90czogbSwgc2hhcnBuZXNzOiBnIH0gPSB1LnBhcmFtcywgQyA9IHsKICAgICAgY29uZmlkZW5jZTogdS5zY29yZSAvIDFlMywKICAgICAgdG9wTGVmdDogewogICAgICAgIHg6IHUueDAsCiAgICAgICAgeTogdS55MAogICAgICB9LAogICAgICB0b3BSaWdodDogewogICAgICAgIHg6IHUueDEsCiAgICAgICAgeTogdS55MQogICAgICB9LAogICAgICBib3R0b21SaWdodDogewogICAgICAgIHg6IHUueDIsCiAgICAgICAgeTogdS55MgogICAgICB9LAogICAgICBib3R0b21MZWZ0OiB7CiAgICAgICAgeDogdS54MywKICAgICAgICB5OiB1LnkzCiAgICAgIH0sCiAgICAgIGJyaWdodG5lc3M6IGUgLyAxZTMsCiAgICAgIGhvdHNwb3RzOiBtIC8gMWUzLAogICAgICBzaGFycG5lc3M6IGcgLyAxZTMKICAgIH07CiAgICByZXR1cm4gewogICAgICAuLi5DLAogICAgICBzbWFsbGVzdEVkZ2U6IGRlKEMpCiAgICB9OwogIH0KICBhc3luYyBkZXRlY3QodSwgZSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBGKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICBjb25zdCBtID0gdGhpcy5hbGxvY2F0ZU1lbW9yeSh1Lmxlbmd0aCAqIHUuQllURVNfUEVSX0VMRU1FTlQpLCBnID0gdGhpcy5hbGxvY2F0ZU1lbW9yeSh1Lmxlbmd0aCAqIHUuQllURVNfUEVSX0VMRU1FTlQpOwogICAgdGhpcy53cml0ZURhdGFUb01lbW9yeSh1LCBtKSwgdGhpcy5zYW1XYXNtTW9kdWxlLmNvbnZlcnRUb1NhbUNvbG9ySW1hZ2UoCiAgICAgIGUud2lkdGgsCiAgICAgIGUuaGVpZ2h0LAogICAgICBtLAogICAgICBmZS5SR0JBLAogICAgICBnCiAgICApOwogICAgY29uc3QgQyA9IHRoaXMuc2FtV2FzbU1vZHVsZS5kZXRlY3REb2N1bWVudFdpdGhJbWFnZVBhcmFtZXRlcnMoCiAgICAgIGUud2lkdGgsCiAgICAgIGUuaGVpZ2h0LAogICAgICBnLAogICAgICAwLAogICAgICAvLyBwYXJhbVdpZHRoIHNob3VsZCBiZSAwIChkZWZhdWx0IHZhbHVlKQogICAgICAwLAogICAgICAvLyBwYXJhbUhlaWdodCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICAgMAogICAgICAvLyBkb2N1bWVudERldGVjdGlvbk9wdGlvbnMgLSBzcGVlZCBvcHRpb24gLSBzZXQgYXMgInN0YW5kYXJkIGZ1bGwgbWV0aG9kIgogICAgKTsKICAgIHJldHVybiB0aGlzLnJlbGVhc2VNZW1vcnkobSksIHRoaXMucmVsZWFzZU1lbW9yeShnKSwgdGhpcy5wYXJzZVJhd0RhdGEoQyk7CiAgfQp9CktuKE9lKTsK", wa = typeof window < "u" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);" + atob(os)], { type: "text/javascript;charset=utf-8" });
function Px(t) {
  let o;
  try {
    if (o = wa && (window.URL || window.webkitURL).createObjectURL(wa), !o)
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
      "data:application/javascript;base64," + os,
      {
        type: "module",
        name: t == null ? void 0 : t.name
      }
    );
  }
}
const mi = class mi extends vx {
  constructor() {
    super(...arguments);
    X(this, "detector");
    X(this, "className", "DocumentController");
    X(this, "fallbackInstruction", De.DOCUMENT_NOT_PRESENT);
    X(this, "getInstructionCode", (e, n) => {
      var r;
      if (this.isInCandidateSelection)
        return De.CANDIDATE_SELECTION;
      if ((r = this.lastImage) != null && r.isValid && n)
        return De.CANDIDATE_SELECTION;
      if (this.lastImage && n)
        return this.lastImage.instructionCode;
      const [i] = this.getInstructionCodesForValidators(e);
      return i ?? this.fallbackInstruction;
    });
    X(this, "getInstructionCodesForValidators", (e) => {
      const n = [];
      return Object.entries(e).forEach(([i, r]) => {
        !r && n.push(zc[i]);
      }), n;
    });
    X(this, "transformSmallestEdgeRelativeToDetectionFrameWidth", (e, n) => {
      const i = kI(e), r = i / n.width, a = { ...e };
      return a.smallestEdge = r, a;
    });
  }
  static async init() {
    const e = new Px(), n = ts(e), i = new mi(), r = await new n();
    this._instance = i, this._instance.detector = r;
  }
  static async getInstance() {
    return !this._instance && await this.init(), this._instance;
  }
  restart() {
    super.restart(), ba(Me.INSTRUCTION_CHANGED, this.fallbackInstruction, wI);
  }
  validateDetectedObject(e, n) {
    const { brightnessHighThreshold: i, brightnessLowThreshold: r, confidenceThreshold: a, hotspotsScoreThreshold: g, outOfBoundsThreshold: s, sharpnessThreshold: x, sizeSmallThreshold: C } = this.getThresholds(), u = e.confidence > a, p = e.sharpness > x, f = e.brightness > r, v = e.brightness < i, G = e.hotspots < g, E = Ex(s, e, n), H = e.smallestEdge > C, k = {};
    return k.isPresent = u, k.isSharp = p, k.isNotDim = f, k.isNotBright = v, k.noHotspots = G, k.isNotOutOfBounds = E, k.isNotSmall = H, k;
  }
  async processImage(e) {
    var G;
    const n = {};
    n.width = e.width, n.height = e.height;
    const i = n, r = ir(i), a = jI(e, r), g = UI(a), s = {};
    s.width = a.width, s.height = a.height;
    const x = s;
    let C = await this.detector.detect(g, x);
    C = ux(i, C), C = this.transformSmallestEdgeRelativeToDetectionFrameWidth(C, x);
    const u = this.validateDetectedObject(C, i), p = this.isDetectionValid(u), f = this.getInstructionCode(u, p);
    if (u.isPresent && this.collectImagesForDuplicateDetection(g), this.isInCandidateSelection) {
      if (this.bestImage && p && this.isNewImageBetter(this.bestImage.detection, C)) {
        const E = { image: e, detection: ln(C) };
        this.bestImage = E, this.candidateSelectionImages.push(E);
      }
    } else if ((G = this.lastImage) != null && G.isValid && p) {
      const E = { image: e, detection: ln(C) }, H = {};
      H.image = this.lastImage.image, H.detection = this.lastImage.detection;
      const k = H;
      this.isNewImageBetter(k.detection, E.detection) ? this.bestImage = E : this.bestImage = k, this.candidateSelectionImages.push(k, E), this.isInCandidateSelection = !0;
    } else
      p ? this.lastImage = { instructionCode: f, isValid: !0, image: e, detection: ln(C) } : this.lastImage = { instructionCode: f, isValid: !1, image: e, detection: ln(C) };
    const v = { detectedDocument: ln(C), instructionCode: f, isInCandidateSelection: this.isInCandidateSelection, invalidValidators: this.getInstructionCodesForValidators(u) };
    return this.detectionRecord.push(v.detectedDocument), ba(Me.INSTRUCTION_CHANGED, f), tx(Me.DETECTED_DOCUMENT_CHANGED, v.detectedDocument, this.getThresholds().confidenceThreshold), v;
  }
};
X(mi, "_instance");
let Ro = mi;
const Yx = (t, o) => {
  const { handleError: e } = Ki(), [n, i] = je();
  ye(() => {
    (async () => {
      const g = await Ro.getInstance();
      try {
        const s = {};
        s.wasmDirectoryPath = o, s.thresholds = t, await g.init(s);
      } catch (s) {
        if (s instanceof Error) {
          e(te.fromError(s));
          return;
        }
      }
      i(g);
    })();
  }, [e, t, o]);
  const r = {};
  return r.controller = n, r;
};
var mt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, rs = {}, Sa = {}, Lx = Nx;
function Nx(t, o) {
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
var as = {};
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
})(as);
var Tx = Wi;
function Wi() {
  this._listeners = {};
}
Wi.prototype.on = function(t, o, e) {
  return (this._listeners[t] || (this._listeners[t] = [])).push({
    fn: o,
    ctx: e || this
  }), this;
};
Wi.prototype.off = function(t, o) {
  if (t === void 0)
    this._listeners = {};
  else if (o === void 0)
    this._listeners[t] = [];
  else
    for (var e = this._listeners[t], n = 0; n < e.length; )
      e[n].fn === o ? e.splice(n, 1) : ++n;
  return this;
};
Wi.prototype.emit = function(t) {
  var o = this._listeners[t];
  if (o) {
    for (var e = [], n = 1; n < arguments.length; )
      e.push(arguments[n++]);
    for (n = 0; n < o.length; )
      o[n].fn.apply(o[n++].ctx, e);
  }
  return this;
};
var Fx = Ga(Ga);
function Ga(t) {
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
    t.writeFloatLE = o.bind(null, Za), t.writeFloatBE = o.bind(null, ka);
    function e(n, i, r) {
      var a = n(i, r), g = (a >> 31) * 2 + 1, s = a >>> 23 & 255, x = a & 8388607;
      return s === 255 ? x ? NaN : g * (1 / 0) : s === 0 ? g * 1401298464324817e-60 * x : g * Math.pow(2, s - 150) * (x + 8388608);
    }
    t.readFloatLE = e.bind(null, Ha), t.readFloatBE = e.bind(null, Ka);
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
    t.writeDoubleLE = o.bind(null, Za, 0, 4), t.writeDoubleBE = o.bind(null, ka, 4, 0);
    function e(n, i, r, a, g) {
      var s = n(a, g + i), x = n(a, g + r), C = (x >> 31) * 2 + 1, u = x >>> 20 & 2047, p = 4294967296 * (x & 1048575) + s;
      return u === 2047 ? p ? NaN : C * (1 / 0) : u === 0 ? C * 5e-324 * p : C * Math.pow(2, u - 1075) * (p + 4503599627370496);
    }
    t.readDoubleLE = e.bind(null, Ha, 0, 4), t.readDoubleBE = e.bind(null, Ka, 4, 0);
  }(), t;
}
function Za(t, o, e) {
  o[e] = t & 255, o[e + 1] = t >>> 8 & 255, o[e + 2] = t >>> 16 & 255, o[e + 3] = t >>> 24;
}
function ka(t, o, e) {
  o[e] = t >>> 24, o[e + 1] = t >>> 16 & 255, o[e + 2] = t >>> 8 & 255, o[e + 3] = t & 255;
}
function Ha(t, o) {
  return (t[o] | t[o + 1] << 8 | t[o + 2] << 16 | t[o + 3] << 24) >>> 0;
}
function Ka(t, o) {
  return (t[o] << 24 | t[o + 1] << 16 | t[o + 2] << 8 | t[o + 3]) >>> 0;
}
function Wa(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Dx = Xx;
function Xx(t) {
  try {
    if (typeof Wa != "function")
      return null;
    var o = Wa(t);
    return o && (o.length || Object.keys(o).length) ? o : null;
  } catch {
    return null;
  }
}
var gs = {};
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
})(gs);
var jx = Ux;
function Ux(t, o, e) {
  var n = e || 8192, i = n >>> 1, r = null, a = n;
  return function(g) {
    if (g < 1 || g > i)
      return t(g);
    a + g > n && (r = t(n), a = 0);
    var s = o.call(r, a, a += g);
    return a & 7 && (a = (a | 7) + 1), s;
  };
}
var ro, Oa;
function Mx() {
  if (Oa)
    return ro;
  Oa = 1, ro = o;
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
  }, ro;
}
var Ra;
function Kt() {
  return Ra || (Ra = 1, function(t) {
    var o = t;
    o.asPromise = Lx, o.base64 = as, o.EventEmitter = Tx, o.float = Fx, o.inquire = Dx, o.utf8 = gs, o.pool = jx, o.LongBits = Mx(), o.isNode = !!(typeof mt < "u" && mt && mt.process && mt.process.versions && mt.process.versions.node), o.global = o.isNode && mt || typeof window < "u" && window || typeof self < "u" && self || mt, o.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  }(Sa)), Sa;
}
var ss = D, Oe = Kt(), Vo, Oi = Oe.LongBits, Va = Oe.base64, Ea = Oe.utf8;
function kn(t, o, e) {
  this.fn = t, this.len = o, this.next = void 0, this.val = e;
}
function or() {
}
function Jx(t) {
  this.head = t.head, this.tail = t.tail, this.len = t.len, this.next = t.states;
}
function D() {
  this.len = 0, this.head = new kn(or, 0, 0), this.tail = this.head, this.states = null;
}
var cs = function() {
  return Oe.Buffer ? function() {
    return (D.create = function() {
      return new Vo();
    })();
  } : function() {
    return new D();
  };
};
D.create = cs();
D.alloc = function(t) {
  return new Oe.Array(t);
};
Oe.Array !== Array && (D.alloc = Oe.pool(D.alloc, Oe.Array.prototype.subarray));
D.prototype._push = function(t, o, e) {
  return this.tail = this.tail.next = new kn(t, o, e), this.len += o, this;
};
function rr(t, o, e) {
  o[e] = t & 255;
}
function Qx(t, o, e) {
  for (; t > 127; )
    o[e++] = t & 127 | 128, t >>>= 7;
  o[e] = t;
}
function ar(t, o) {
  this.len = t, this.next = void 0, this.val = o;
}
ar.prototype = Object.create(kn.prototype);
ar.prototype.fn = Qx;
D.prototype.uint32 = function(t) {
  return this.len += (this.tail = this.tail.next = new ar(
    (t = t >>> 0) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : 5,
    t
  )).len, this;
};
D.prototype.int32 = function(t) {
  return t < 0 ? this._push(gr, 10, Oi.fromNumber(t)) : this.uint32(t);
};
D.prototype.sint32 = function(t) {
  return this.uint32((t << 1 ^ t >> 31) >>> 0);
};
function gr(t, o, e) {
  for (; t.hi; )
    o[e++] = t.lo & 127 | 128, t.lo = (t.lo >>> 7 | t.hi << 25) >>> 0, t.hi >>>= 7;
  for (; t.lo > 127; )
    o[e++] = t.lo & 127 | 128, t.lo = t.lo >>> 7;
  o[e++] = t.lo;
}
D.prototype.uint64 = function(t) {
  var o = Oi.from(t);
  return this._push(gr, o.length(), o);
};
D.prototype.int64 = D.prototype.uint64;
D.prototype.sint64 = function(t) {
  var o = Oi.from(t).zzEncode();
  return this._push(gr, o.length(), o);
};
D.prototype.bool = function(t) {
  return this._push(rr, 1, t ? 1 : 0);
};
function Eo(t, o, e) {
  o[e] = t & 255, o[e + 1] = t >>> 8 & 255, o[e + 2] = t >>> 16 & 255, o[e + 3] = t >>> 24;
}
D.prototype.fixed32 = function(t) {
  return this._push(Eo, 4, t >>> 0);
};
D.prototype.sfixed32 = D.prototype.fixed32;
D.prototype.fixed64 = function(t) {
  var o = Oi.from(t);
  return this._push(Eo, 4, o.lo)._push(Eo, 4, o.hi);
};
D.prototype.sfixed64 = D.prototype.fixed64;
D.prototype.float = function(t) {
  return this._push(Oe.float.writeFloatLE, 4, t);
};
D.prototype.double = function(t) {
  return this._push(Oe.float.writeDoubleLE, 8, t);
};
var zx = Oe.Array.prototype.set ? function(t, o, e) {
  o.set(t, e);
} : function(t, o, e) {
  for (var n = 0; n < t.length; ++n)
    o[e + n] = t[n];
};
D.prototype.bytes = function(t) {
  var o = t.length >>> 0;
  if (!o)
    return this._push(rr, 1, 0);
  if (Oe.isString(t)) {
    var e = D.alloc(o = Va.length(t));
    Va.decode(t, e, 0), t = e;
  }
  return this.uint32(o)._push(zx, o, t);
};
D.prototype.string = function(t) {
  var o = Ea.length(t);
  return o ? this.uint32(o)._push(Ea.write, o, t) : this._push(rr, 1, 0);
};
D.prototype.fork = function() {
  return this.states = new Jx(this), this.head = this.tail = new kn(or, 0, 0), this.len = 0, this;
};
D.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new kn(or, 0, 0), this.len = 0), this;
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
  Vo = t, D.create = cs(), Vo._configure();
};
var $x = Je, Is = ss;
(Je.prototype = Object.create(Is.prototype)).constructor = Je;
var ut = Kt();
function Je() {
  Is.call(this);
}
Je._configure = function() {
  Je.alloc = ut._Buffer_allocUnsafe, Je.writeBytesBuffer = ut.Buffer && ut.Buffer.prototype instanceof Uint8Array && ut.Buffer.prototype.set.name === "set" ? function(t, o, e) {
    o.set(t, e);
  } : function(t, o, e) {
    if (t.copy)
      t.copy(o, e, 0, t.length);
    else
      for (var n = 0; n < t.length; )
        o[e++] = t[n++];
  };
};
Je.prototype.bytes = function(t) {
  ut.isString(t) && (t = ut._Buffer_from(t, "base64"));
  var o = t.length >>> 0;
  return this.uint32(o), o && this._push(Je.writeBytesBuffer, o, t), this;
};
function qx(t, o, e) {
  t.length < 40 ? ut.utf8.write(t, o, e) : o.utf8Write ? o.utf8Write(t, e) : o.write(t, e);
}
Je.prototype.string = function(t) {
  var o = ut.Buffer.byteLength(t);
  return this.uint32(o), o && this._push(qx, o, t), this;
};
Je._configure();
var xs = oe, Qe = Kt(), Po, ls = Qe.LongBits, _x = Qe.utf8;
function Ne(t, o) {
  return RangeError("index out of range: " + t.pos + " + " + (o || 1) + " > " + t.len);
}
function oe(t) {
  this.buf = t, this.pos = 0, this.len = t.length;
}
var Pa = typeof Uint8Array < "u" ? function(t) {
  if (t instanceof Uint8Array || Array.isArray(t))
    return new oe(t);
  throw Error("illegal buffer");
} : function(t) {
  if (Array.isArray(t))
    return new oe(t);
  throw Error("illegal buffer");
}, us = function() {
  return Qe.Buffer ? function(t) {
    return (oe.create = function(o) {
      return Qe.Buffer.isBuffer(o) ? new Po(o) : Pa(o);
    })(t);
  } : Pa;
};
oe.create = us();
oe.prototype._slice = Qe.Array.prototype.subarray || /* istanbul ignore next */
Qe.Array.prototype.slice;
oe.prototype.uint32 = /* @__PURE__ */ function() {
  var t = 4294967295;
  return function() {
    if (t = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (t = (t | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (t = (t | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (t = (t | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (t = (t | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return t;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, Ne(this, 10);
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
function ao() {
  var t = new ls(0, 0), o = 0;
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
        throw Ne(this);
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
        throw Ne(this);
      if (t.hi = (t.hi | (this.buf[this.pos] & 127) << o * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return t;
    }
  throw Error("invalid varint encoding");
}
oe.prototype.bool = function() {
  return this.uint32() !== 0;
};
function fi(t, o) {
  return (t[o - 4] | t[o - 3] << 8 | t[o - 2] << 16 | t[o - 1] << 24) >>> 0;
}
oe.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw Ne(this, 4);
  return fi(this.buf, this.pos += 4);
};
oe.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw Ne(this, 4);
  return fi(this.buf, this.pos += 4) | 0;
};
function Ya() {
  if (this.pos + 8 > this.len)
    throw Ne(this, 8);
  return new ls(fi(this.buf, this.pos += 4), fi(this.buf, this.pos += 4));
}
oe.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw Ne(this, 4);
  var t = Qe.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, t;
};
oe.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw Ne(this, 4);
  var t = Qe.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, t;
};
oe.prototype.bytes = function() {
  var t = this.uint32(), o = this.pos, e = this.pos + t;
  if (e > this.len)
    throw Ne(this, t);
  return this.pos += t, Array.isArray(this.buf) ? this.buf.slice(o, e) : o === e ? new this.buf.constructor(0) : this._slice.call(this.buf, o, e);
};
oe.prototype.string = function() {
  var t = this.bytes();
  return _x.read(t, 0, t.length);
};
oe.prototype.skip = function(t) {
  if (typeof t == "number") {
    if (this.pos + t > this.len)
      throw Ne(this, t);
    this.pos += t;
  } else
    do
      if (this.pos >= this.len)
        throw Ne(this);
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
  Po = t, oe.create = us(), Po._configure();
  var o = Qe.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  Qe.merge(oe.prototype, {
    int64: function() {
      return ao.call(this)[o](!1);
    },
    uint64: function() {
      return ao.call(this)[o](!0);
    },
    sint64: function() {
      return ao.call(this).zzDecode()[o](!1);
    },
    fixed64: function() {
      return Ya.call(this)[o](!0);
    },
    sfixed64: function() {
      return Ya.call(this)[o](!1);
    }
  });
};
var el = Ht, Cs = xs;
(Ht.prototype = Object.create(Cs.prototype)).constructor = Ht;
var La = Kt();
function Ht(t) {
  Cs.call(this, t);
}
Ht._configure = function() {
  La.Buffer && (Ht.prototype._slice = La.Buffer.prototype.slice);
};
Ht.prototype.string = function() {
  var t = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + t, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + t, this.len));
};
Ht._configure();
var ds = {}, tl = wn, sr = Kt();
(wn.prototype = Object.create(sr.EventEmitter.prototype)).constructor = wn;
function wn(t, o, e) {
  if (typeof t != "function")
    throw TypeError("rpcImpl must be a function");
  sr.EventEmitter.call(this), this.rpcImpl = t, this.requestDelimited = !!o, this.responseDelimited = !!e;
}
wn.prototype.rpcCall = function t(o, e, n, i, r) {
  if (!i)
    throw TypeError("request must be specified");
  var a = this;
  if (!r)
    return sr.asPromise(t, a, o, e, n, i);
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
wn.prototype.end = function(t) {
  return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(t) {
  var o = t;
  o.Service = tl;
})(ds);
var nl = {};
(function(t) {
  var o = t;
  o.build = "minimal", o.Writer = ss, o.BufferWriter = $x, o.Reader = xs, o.BufferReader = el, o.util = Kt(), o.rpc = ds, o.roots = nl, o.configure = e;
  function e() {
    o.util._configure(), o.Writer._configure(o.BufferWriter), o.Reader._configure(o.BufferReader);
  }
  e();
})(rs);
var ne = rs;
const B = ne.Reader, Ce = ne.Writer, h = ne.util, d = ne.roots.default || (ne.roots.default = {}), en = d.dot = (() => {
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
async function il(t) {
  const { Image: o } = en, e = await t.arrayBuffer(), n = new Uint8Array(e), i = {};
  i.bytes = n;
  const r = o.verify(i);
  if (r)
    throw Error(r);
  const a = {};
  return a.bytes = n, o.create(a);
}
async function ol(t) {
  const { v3: { Metadata: o } } = en, e = { ...t };
  e.platform = en.Platform.WEB;
  const n = e, i = o.verify(n);
  if (i)
    throw Error(i);
  return o.create(n);
}
async function rl(t) {
  const { Content: o } = en, { iv: e, key: n, message: i } = await bx(t), r = { token: new Uint8Array(n), iv: e, schemaVersion: CI, bytes: new Uint8Array(i) }, a = o.verify(r);
  if (a)
    throw Error(a);
  const g = o.create(r);
  return o.encode(g).finish();
}
function al({ documentContent: t, faceContent: o, magnifeyeLivenessContent: e, smileLivenessContent: n }) {
  const { Blob: i } = en.v3, r = {};
  r.documentContent = t, r.faceContent = o, r.magnifeyeLivenessContent = e, r.smileLivenessContent = n;
  const a = r, g = i.verify(a);
  if (g)
    throw Error(g);
  const s = i.create(a);
  return i.encode(s).finish();
}
async function gl(t, o) {
  const { DocumentContent: e } = en.v3, n = await il(t), i = await ol(o), r = {};
  r.image = n, r.metadata = i;
  const a = r, g = e.verify(a);
  if (g)
    throw Error(g);
  const s = e.create(a), x = {};
  return x.documentContent = s, al(x);
}
async function sl(t, o) {
  const e = await gl(t, o);
  return rl(e);
}
const cl = () => {
  const {
    analytics: t,
    appState: o,
    handleAppStateChange: e,
    handleError: n
  } = Ki(), {
    documentCameraOptions: i
  } = Yg(), {
    cameraFacing: r,
    onPhotoTaken: a,
    sessionToken: g,
    thresholds: s,
    wasmDirectoryPath: x
  } = i, C = nn(), u = Jg(void 0), {
    cameraHandler: p,
    cameraResolution: f,
    onCameraResolutionChange: v
  } = ax(C, r), {
    controller: G
  } = Yx(s, x), {
    shouldMirror: E
  } = rx(Me.CONTROL, p);
  return ix(Me.CAMERA_PROPS_CHANGED, {
    cameraResolution: f,
    shouldMirror: E
  }), gx(t), ye(() => () => {
    Bn.getInstance().restart();
  }, []), ye(() => {
    p != null && p.videoTrack && (G != null && G.isDetectorInitialized) && e(Ke.RUNNING);
  }, [p == null ? void 0 : p.videoTrack, G == null ? void 0 : G.isDetectorInitialized, e]), ye(() => {
    if (o !== Ke.RUNNING)
      return;
    if (!p || !G)
      throw new te("Cannot start detection");
    let H = 0, k = !1, L = 0;
    const z = new Eg(30);
    G.clearImagesForDuplicateDetection();
    const F = async (Z, _, Q) => {
      const ee = {
        width: Z.width,
        height: Z.height
      }, xe = await XI(Z), he = {
        ...await p.getCameraProperties(),
        detectionRecord: Q,
        hashedDetectedImages: G.getImagesForDuplicateDetection()
      }, re = await sl(xe, {
        sessionToken: g,
        web: he
      }), ae = {
        detection: _,
        imageResolution: ee
      };
      nx(Ng.DOCUMENT, G.getCandidateSelectionImages()), a({
        image: xe,
        data: ae
      }, re);
    };
    return (async () => {
      const Z = Date.now();
      for (; p.checkIfStreamIsRunning() && !k; ) {
        if (YI(H, L)) {
          const {
            detection: ae,
            image: ze
          } = G.getBestImage() || {}, at = G.getDetectionRecord();
          if (ze && ae) {
            const ve = Date.now(), Te = mI(z);
            t.trackCaptureProcess({
              documentDetection: ae,
              imageResolution: {
                width: ze.width,
                height: ze.height
              },
              deviceName: await p.getDeviceName(),
              averageFps: Te,
              captureProcessDurationInMs: ve - Z,
              facingMode: p.getCameraSettings().facingMode,
              instructionSet: await G.getInstructionSet()
            }), await F(ze, ae, at), e(Ke.WAITING), G.restart();
          } else
            n(new te("Something went wrong during capturing an image"));
          return;
        }
        const _ = Date.now(), Q = p.takePhoto(), ee = {
          width: Q.width,
          height: Q.height
        };
        let xe;
        try {
          xe = await G.processImage(Q);
        } catch (ae) {
          ae instanceof Error && n(te.fromCameraError(ae));
          return;
        }
        const he = Date.now() - _, Ve = Og(1e3 / he);
        z.pushFixed(Ve);
        const re = {
          document: xe.detectedDocument,
          detectionTime: he,
          fps: Ve,
          resolution: ee,
          instructionCode: xe.instructionCode,
          samVersion: G.samVersion,
          invalidValidators: xe.invalidValidators
        };
        u.value = re, xe.isInCandidateSelection && (H === 0 && (H = performance.now()), L++), v(ee), await So(Math.max(fa.max - he, fa.min));
      }
    })(), () => {
      k = !0;
    };
  }, [o, p, G, i, e, n, a, s.confidenceThreshold, v, g, u, t]), Ie(Le, {
    children: [Ie(Uc, {
      ref: C,
      $isImageMirror: E,
      autoPlay: !0,
      muted: !0,
      playsInline: !0
    }), f && o === Ke.RUNNING && Ie(Cx, {
      cameraResolution: f,
      detectionDetails: u,
      isImageMirror: E
    })]
  });
}, Il = ({
  ...t
}) => Ie(Lg, {
  cameraOptions: t,
  children: Ie(cl, {})
});
var As = ((t) => (t.AUTO_CAPTURE = "auto-capture", t))(As || {});
class xl {
  constructor() {
    X(this, "appKey", "");
    X(this, "deviceId", "");
  }
  async countlyFetch(o) {
    if (!this.appKey || !this.deviceId)
      return;
    const e = {};
    e.Accept = "application/json";
    const n = {};
    n.method = "GET", n.headers = e;
    const i = n, r = "https://innovatrics.count.ly/i?", a = {};
    a.app_key = this.appKey, a.device_id = this.deviceId;
    const g = Un(a);
    await fetch("" + r + g + "&" + o, i);
  }
  async init(o, e) {
    if (!e)
      return;
    this.appKey = e, this.deviceId = o;
    const n = { _app_version: Rg() }, i = { organization: Vg(window.location.href) }, r = Un({ begin_session: "1", metrics: JSON.stringify(n), user_details: JSON.stringify(i) });
    await this.countlyFetch(r);
  }
  async endSession() {
    const o = {};
    o.end_session = "1";
    const e = Un(o);
    await this.countlyFetch(e);
  }
  async sendAutoCaptureEvent(o, e) {
    const n = {};
    n.key = As.AUTO_CAPTURE, n.count = 1, n.dur = e, n.segmentation = o;
    const i = [n], r = Un({ events: JSON.stringify(i) });
    await this.countlyFetch(r);
  }
}
const go = new xl();
function ll() {
  const [t] = window.crypto.getRandomValues(new Uint32Array(1));
  return t.toString(-2254 + -37 * -262 + -7424);
}
function ul() {
  const t = sessionStorage.getItem("dot-user-id");
  if (t)
    return t;
  const o = ll();
  return sessionStorage.setItem("dot-user-id", o), o;
}
function Cl(t, o) {
  return o ? o === "user" ? "Front Camera" : "Back Camera" : t;
}
function dl(t) {
  return t > 2141 * 2 + 1 * 1907 + -681 * 9 ? ">1m" : t > -254 * -36 + -2023 * 3 + -3030 ? ">45" : t > -4532 + 1415 * -4 + 10222 ? ">30" : "" + t;
}
const Al = (t) => Math.round(t / 500) * 500 / (-4763 + 19 * -77 + 3613 * 2), Cn = (t) => t ? t <= -3 * 2623 + 4889 * -1 + 12759 ? Math.round(t * (-10773 + 43 * 251)) / (-1925 + 8863 * 1 + -1153 * 6) : Math.round(t / (10 * 998 + 355 * -25 + -1055)) * (-8538 * 1 + -8852 + 17440) : -2837 * -3 + -8630 + 119 * 1, pl = (t) => Math.round(t * 2) / (-10668 + -485 * -22);
class fl {
  constructor() {
    X(this, "countly", go);
  }
  createSegmentation(o) {
    return { appVersion: Rg(), ...o };
  }
  init(o) {
    if (PI())
      return;
    const e = ul();
    go.init(e, o);
  }
  endSession() {
    go.endSession();
  }
}
class hl extends fl {
  trackCaptureProcess({ averageFps: o, captureProcessDurationInMs: e, deviceName: n, documentDetection: i, facingMode: r, imageResolution: a, instructionSet: g }) {
    if (!i)
      return;
    const s = Al(e), x = this.createSegmentation({ hotspots: Cn(i.hotspots), brightness: Cn(i.brightness), confidence: Cn(i.confidence), sharpness: Cn(i.sharpness), smallestEdge: Cn(i.smallestEdge), camera: Cl(n, r), imageResolution: a.width + "x" + a.height, averageFps: pl(o), captureTime: dl(s), instructionSet: g });
    this.countly.sendAutoCaptureEvent(x, s);
  }
}
const ps = new hl();
function ml(t) {
  const [o, e] = je(Ke.LOADING), [n, i] = je(!1), [r, a] = je(), g = Ii((x) => {
    ya(Me.STATE_CHANGED, {
      appState: Ke.ERROR,
      error: x
    }), i(!1), t(x), a(x), e(Ke.ERROR);
  }, [t]), s = Ii((x) => {
    ya(Me.STATE_CHANGED, {
      appState: x
    }), e(x);
  }, []);
  return {
    appState: o,
    isCameraReady: n,
    setIsCameraReady: i,
    handleAppStateChange: s,
    handleError: g,
    error: r,
    analytics: ps
  };
}
const bl = ({
  children: t
}) => {
  const o = nn(null);
  return sx(o, Me.VIDEO_ELEMENT_SIZE), Ie(jc, {
    ref: o,
    children: t
  });
}, yl = ({
  cameraOptions: t
}) => (ye(() => {
  ps.init("065cf6e242fc5e785cd17eebfbfbbd212a33133b");
}, []), t ? Ie(Yc, {
  target: t.styleTarget,
  children: Ie(Lg, {
    cameraOptions: t,
    children: Ie(_c, {
      value: ml(t.onError),
      children: Ie(Hg, {
        children: Ie(bl, {
          children: Ie(Il, {
            ...t
          })
        })
      })
    })
  })
}) : null);
js(yl, "x-dot-document-auto-capture", ["cameraOptions"]);
