var J0 = Object.defineProperty;
var U0 = (t, i, e) => i in t ? J0(t, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[i] = e;
var D = (t, i, e) => (U0(t, typeof i != "symbol" ? i + "" : i, e), e);
var Kn, G, Ma, Ja, vt, Fr, Ua, ui, Qa, Sn = {}, za = [], Q0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Bo = Array.isArray;
function rt(t, i) {
  for (var e in i)
    t[e] = i[e];
  return t;
}
function $a(t) {
  var i = t.parentNode;
  i && i.removeChild(t);
}
function fe(t, i, e) {
  var n, o, r, a = {};
  for (r in i)
    r == "key" ? n = i[r] : r == "ref" ? o = i[r] : a[r] = i[r];
  if (arguments.length > -23 * -97 + -2615 + 386 && (a.children = arguments.length > -9455 + -3 * -517 + -7907 * -1 ? Kn.call(arguments, -2 * -3966 + 5 * -979 + -3035) : e), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      void (-262 * 38 + 1 * -809 + -2153 * -5) === a[r] && (a[r] = t.defaultProps[r]);
  return bn(t, a, n, o, null);
}
function bn(t, i, e, n, o) {
  var r = {};
  r.type = t, r.props = i, r.key = e, r.ref = n, r.__k = null, r.__ = null, r.__b = 0, r.__e = null, r.__d = void (1 * 919 + 3568 + -7 * 641), r.__c = null, r.constructor = void (1 * 883 + 1 * 409 + 4 * -323), r.__v = o ?? ++Ma, r.__i = -(-9993 * -1 + -34 * 230 + 3 * -724), r.__u = 0;
  var a = r;
  return o == null && G.vnode != null && G.vnode(a), a;
}
function z0() {
  var t = {};
  return t.current = null, t;
}
function Fe(t) {
  return t.children;
}
function We(t, i) {
  this.props = t, this.context = i;
}
function qt(t, i) {
  if (i == null)
    return t.__ ? qt(t.__, t.__i + (-4863 + -1 * 3958 + 8822)) : null;
  for (var e; i < t.__k.length; i++)
    if ((e = t.__k[i]) != null && e.__e != null)
      return e.__e;
  return typeof t.type == "function" ? qt(t) : null;
}
function qa(t) {
  var i, e;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, i = -79 * -79 + 4 * -2401 + 1121 * 3; i < t.__k.length; i++)
      if ((e = t.__k[i]) != null && e.__e != null) {
        t.__e = t.__c.base = e.__e;
        break;
      }
    return qa(t);
  }
}
function Ci(t) {
  (!t.__d && (t.__d = !(-1 * 4146 + -546 * 5 + 6876)) && vt.push(t) && !lo.__r++ || Fr !== G.debounceRendering) && ((Fr = G.debounceRendering) || Ua)(lo);
}
function lo() {
  var t, i, e, n, o, r, a, g, s;
  for (vt.sort(ui); t = vt.shift(); )
    t.__d && (i = vt.length, n = void (4599 + 1 * 7013 + -11612), r = (o = (e = t).__v).__e, g = [], s = [], (a = e.__P) && ((n = rt({}, o)).__v = o.__v + (7385 + 367 * -1 + -7017), G.vnode && G.vnode(n), ji(a, n, o, e.__n, void (-7712 * 1 + 416 + 912 * 8) !== a.ownerSVGElement, 193 * 34 + 1599 + -8129 & o.__u ? [r] : null, g, r ?? qt(o), !!(32 & o.__u), s), n.__.__k[n.__i] = n, tg(g, n, s), n.__e != r && qa(n)), vt.length > i && vt.sort(ui));
  lo.__r = 1162 * -6 + 6 * -1472 + 15804;
}
function _a(t, i, e, n, o, r, a, g, s, x, C) {
  var u, f, p, v, E, S = n && n.__k || za, k = i.length;
  for (e.__d = s, $0(e, i, S), s = e.__d, u = 3 * -197 + -5048 + 5639 * 1; u < k; u++)
    (p = e.__k[u]) != null && typeof p != "boolean" && typeof p != "function" && (f = -(-6609 + -1502 * 5 + 14120) === p.__i ? Sn : S[p.__i] || Sn, p.__i = u, ji(t, p, f, o, r, a, g, s, x, C), v = p.__e, p.ref && f.ref != p.ref && (f.ref && Mi(f.ref, null, p), C.push(p.ref, p.__c || v, p)), E == null && v != null && (E = v), 103561 * 1 + 30120 + -68145 & p.__u || f.__k === p.__k ? s = eg(p, s, t) : typeof p.type == "function" && p.__d !== void 0 ? s = p.__d : v && (s = v.nextSibling), p.__d = void (-253 * 34 + 9557 + -955), p.__u &= -(-122957 * -1 + 47 * -6495 + 19 * 19943));
  e.__d = s, e.__e = E;
}
function $0(t, i, e) {
  var n, o, r, a, g, s = i.length, x = e.length, C = x, u = 2255 * -2 + -1 * -1123 + 3387;
  for (t.__k = [], n = 754 * -8 + 234 * 22 + 2 * 442; n < s; n++)
    (o = t.__k[n] = (o = i[n]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? bn(null, o, null, null, o) : Bo(o) ? bn(Fe, { children: o }, null, null, null) : void (8 * -1 + 8200 + -8192) === o.constructor && o.__b > 6856 + -1 * 6856 ? bn(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = t, o.__b = t.__b + 1, g = q0(o, e, a = n + u, C), o.__i = g, r = null, -(-5779 * 1 + -1916 * -1 + -184 * -21) !== g && (C--, (r = e[g]) && (r.__u |= 8161 * 22 + 2477 * 26 + 28218 * -4)), r == null || r.__v === null ? (-(-4 * -74 + -1 * -4385 + 3 * -1560) == g && u--, typeof o.type != "function" && (o.__u |= 1 * -98467 + -6219 * -12 + 89375)) : g !== a && (g === a + (-6 * -48 + 776 + -1063) ? u++ : g > a ? C > s - a ? u += g - a : u-- : u = g < a && g == a - (-14 * 109 + 1370 + 157) ? g - a : -9993 + 9993 * 1, g !== n + u && (o.__u |= 673 * 148 + 93587 + 2321 * -55))) : (r = e[n]) && r.key == null && r.__e && (r.__e == t.__d && (t.__d = qt(r)), di(r, r, !(-658 + -1 * -659)), e[n] = null, C--);
  if (C)
    for (n = 3402 + -9322 * -1 + -12724; n < x; n++)
      (r = e[n]) != null && -26 * 188 + 5777 + 1 * -889 == (-193698 + -75689 * -2 + 1 * 173392 & r.__u) && (r.__e == t.__d && (t.__d = qt(r)), di(r, r));
}
function eg(t, i, e) {
  var n, o;
  if (typeof t.type == "function") {
    for (n = t.__k, o = -10535 + -5 * -2107; n && o < n.length; o++)
      n[o] && (n[o].__ = t, i = eg(n[o], i, e));
    return i;
  }
  return t.__e != i && (e.insertBefore(t.__e, i || null), i = t.__e), i && i.nextSibling;
}
function at(t, i) {
  return i = i || [], t == null || typeof t == "boolean" || (Bo(t) ? t.some(function(e) {
    at(e, i);
  }) : i.push(t)), i;
}
function q0(t, i, e, n) {
  var o = t.key, r = t.type, a = e - 1, g = e + (-1 * 9105 + -377 * 6 + 11368), s = i[e];
  if (s === null || s && o == s.key && r === s.type)
    return e;
  if (n > (s != null && !(258 * 993 + 1037 + 3 * -42053 & s.__u) ? -9710 + 1 * 9711 : -3989 + 1 * 3989))
    for (; a >= -3 * -2235 + -2973 + -4 * 933 || g < i.length; ) {
      if (a >= 699 * -1 + 3409 + -2710) {
        if ((s = i[a]) && 2 * -763 + 1 * -2281 + -9 * -423 == (3 * 34343 + -45246 + 73289 & s.__u) && o == s.key && r === s.type)
          return a;
        a--;
      }
      if (g < i.length) {
        if ((s = i[g]) && 1 * -2367 + -626 + 2993 == (167203 + 12553 * -12 + 114505 & s.__u) && o == s.key && r === s.type)
          return g;
        g++;
      }
    }
  return -(77 * 110 + -5660 + -2809);
}
function Dr(t, i, e) {
  i[-13 * 49 + -64 * -88 + 555 * -9] === "-" ? t.setProperty(i, e ?? "") : t[i] = e == null ? "" : typeof e != "number" || Q0.test(i) ? e : e + "px";
}
function Mn(t, i, e, n, o) {
  var r;
  e:
    if (i === "style")
      if (typeof e == "string")
        t.style.cssText = e;
      else {
        if (typeof n == "string" && (t.style.cssText = n = ""), n)
          for (i in n)
            e && i in e || Dr(t.style, i, "");
        if (e)
          for (i in e)
            n && e[i] === n[i] || Dr(t.style, i, e[i]);
      }
    else if (i[772 + -677 * 10 + 2999 * 2] === "o" && i[7563 + -9662 * -1 + -17224] === "n")
      r = i !== (i = i.replace(/(PointerCapture)$|Capture$/, "$1")), i = i.toLowerCase() in t ? i.toLowerCase().slice(-3414 + 93 * -79 + 10763) : i.slice(-1 * -2999 + -1103 * -9 + -12924), t.l || (t.l = {}), t.l[i + r] = e, e ? n ? e.u = n.u : (e.u = Date.now(), t.addEventListener(i, r ? jr : Xr, r)) : t.removeEventListener(i, r ? jr : Xr, r);
    else {
      if (o)
        i = i.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (i !== "width" && i !== "height" && i !== "href" && i !== "list" && i !== "form" && i !== "tabIndex" && i !== "download" && i !== "rowSpan" && i !== "colSpan" && i !== "role" && i in t)
        try {
          t[i] = e ?? "";
          break e;
        } catch {
        }
      typeof e == "function" || (e == null || !(943 * 9 + -9364 + -2 * -439) === e && i[1 * -2555 + 8252 + 5693 * -1] !== "-" ? t.removeAttribute(i) : t.setAttribute(i, e));
    }
}
function Xr(t) {
  var i = this.l[t.type + !1];
  if (t.t) {
    if (t.t <= i.u)
      return;
  } else
    t.t = Date.now();
  return i(G.event ? G.event(t) : t);
}
function jr(t) {
  return this.l[t.type + !(-349 * 2 + -8774 + 8 * 1184)](G.event ? G.event(t) : t);
}
function ji(t, i, e, n, o, r, a, g, s, x) {
  var C, u, f, p, v, E, S, k, Z, O, Q, T, j, H, $, z = i.type;
  if (void (-4 * 2017 + 5514 + 1277 * 2) !== i.constructor)
    return null;
  2066 * -1 + -1312 * -5 + -4366 & e.__u && (s = !!(-12 * 584 + -3519 * 2 + 14078 & e.__u), r = [g = i.__e = e.__e]), (C = G.__b) && C(i);
  e:
    if (typeof z == "function")
      try {
        if (k = i.props, Z = (C = z.contextType) && n[C.__c], O = C ? Z ? Z.props.value : C.__ : n, e.__c ? S = (u = i.__c = e.__c).__ = u.__E : ("prototype" in z && z.prototype.render ? i.__c = u = new z(k, O) : (i.__c = u = new We(k, O), u.constructor = z, u.render = es), Z && Z.sub(u), u.props = k, u.state || (u.state = {}), u.context = O, u.__n = n, f = u.__d = !(771 + 1 * 3898 + -4669), u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), z.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = rt({}, u.__s)), rt(u.__s, z.getDerivedStateFromProps(k, u.__s))), p = u.props, v = u.state, u.__v = i, f)
          z.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (z.getDerivedStateFromProps == null && k !== p && u.componentWillReceiveProps != null && u.componentWillReceiveProps(k, O), !u.__e && (u.shouldComponentUpdate != null && !(-5072 + -5073 * -1) === u.shouldComponentUpdate(k, u.__s, O) || i.__v === e.__v)) {
            for (i.__v !== e.__v && (u.props = k, u.state = u.__s, u.__d = !(-114 + 23 * 5)), i.__e = e.__e, i.__k = e.__k, i.__k.forEach(function(te) {
              te && (te.__ = i);
            }), Q = -3793 * 2 + 6591 + 995; Q < u._sb.length; Q++)
              u.__h.push(u._sb[Q]);
            u._sb = [], u.__h.length && a.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(k, u.__s, O), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(p, v, E);
          });
        }
        if (u.context = O, u.props = k, u.__P = t, u.__e = !(-4549 * 2 + 9128 * -1 + 1657 * 11), T = G.__r, j = -5321 + 2855 * 1 + -2466 * -1, "prototype" in z && z.prototype.render) {
          for (u.state = u.__s, u.__d = !(-1714 + 2062 * -4 + 9963), T && T(i), C = u.render(u.props, u.state, u.context), H = 2047 * 1 + 4326 * 1 + -6373 * 1; H < u._sb.length; H++)
            u.__h.push(u._sb[H]);
          u._sb = [];
        } else
          do
            u.__d = !(4953 + 777 * -6 + 10 * -29), T && T(i), C = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++j < 4192 + -4167 * 1);
        u.state = u.__s, u.getChildContext != null && (n = rt(rt({}, n), u.getChildContext())), f || u.getSnapshotBeforeUpdate == null || (E = u.getSnapshotBeforeUpdate(p, v)), _a(t, Bo($ = C != null && C.type === Fe && C.key == null ? C.props.children : C) ? $ : [$], i, e, n, o, r, a, g, s, x), u.base = i.__e, i.__u &= -(4823 + -8013 * -1 + 325 * -39), u.__h.length && a.push(u), S && (u.__E = u.__ = null);
      } catch (te) {
        i.__v = null, s || r != null ? (i.__e = g, i.__u |= s ? -592 * -10 + -104 * -26 + -8464 : -2086 + -1907 * -4 + -5510, r[r.indexOf(g)] = null) : (i.__e = e.__e, i.__k = e.__k), G.__e(te, i, e);
      }
    else
      r == null && i.__v === e.__v ? (i.__k = e.__k, i.__e = e.__e) : i.__e = _0(e.__e, i, e, n, o, r, a, s, x);
  (C = G.diffed) && C(i);
}
function tg(t, i, e) {
  i.__d = void (-70 * 136 + 5683 * -1 + 23 * 661);
  for (var n = 2767 * 1 + -1 * -3361 + -3064 * 2; n < e.length; n++)
    Mi(e[n], e[++n], e[++n]);
  G.__c && G.__c(i, t), t.some(function(o) {
    try {
      t = o.__h, o.__h = [], t.some(function(r) {
        r.call(o);
      });
    } catch (r) {
      G.__e(r, o.__v);
    }
  });
}
function _0(t, i, e, n, o, r, a, g, s) {
  var x, C, u, f, p, v, E, S = e.props, k = i.props, Z = i.type;
  if (Z === "svg" && (o = !(-1338 + 2 * 669)), r != null) {
    for (x = -5148 + -53 * 109 + 10925; x < r.length; x++)
      if ((p = r[x]) && "setAttribute" in p == !!Z && (Z ? p.localName === Z : 2912 + 746 * 7 + -8131 === p.nodeType)) {
        t = p, r[x] = null;
        break;
      }
  }
  if (t == null) {
    if (Z === null)
      return document.createTextNode(k);
    t = o ? document.createElementNS("http://www.w3.org/2000/svg", Z) : document.createElement(Z, k.is && k), r = null, g = !(6606 + 1 * -5716 + -127 * 7);
  }
  if (Z === null)
    S === k || g && t.data === k || (t.data = k);
  else {
    if (r = r && Kn.call(t.childNodes), S = e.props || Sn, !g && r != null)
      for (S = {}, x = -7952 + 5291 * -1 + 13243; x < t.attributes.length; x++)
        S[(p = t.attributes[x]).name] = p.value;
    for (x in S)
      p = S[x], x == "children" || (x == "dangerouslySetInnerHTML" ? u = p : x === "key" || x in k || Mn(t, x, null, p, o));
    for (x in k)
      p = k[x], x == "children" ? f = p : x == "dangerouslySetInnerHTML" ? C = p : x == "value" ? v = p : x == "checked" ? E = p : x === "key" || g && typeof p != "function" || S[x] === p || Mn(t, x, p, S[x], o);
    if (C)
      g || u && (C.__html === u.__html || C.__html === t.innerHTML) || (t.innerHTML = C.__html), i.__k = [];
    else if (u && (t.innerHTML = ""), _a(t, Bo(f) ? f : [f], i, e, n, o && Z !== "foreignObject", r, a, r ? r[-8672 + 2031 * -4 + 16796] : e.__k && qt(e, -8439 * -1 + 217 * 41 + -17336), g, s), r != null)
      for (x = r.length; x--; )
        r[x] != null && $a(r[x]);
    g || (x = "value", void (19 * -299 + 9211 + -1765 * 2) !== v && (v !== t[x] || Z === "progress" && !v || Z === "option" && v !== S[x]) && Mn(t, x, v, S[x], !(2061 + 4 * -515)), x = "checked", void (-1 * -6715 + 114 * -57 + -217) !== E && E !== t[x] && Mn(t, x, E, S[x], !(296 * 8 + -7862 + 5495)));
  }
  return t;
}
function Mi(t, i, e) {
  try {
    typeof t == "function" ? t(i) : t.current = i;
  } catch (n) {
    G.__e(n, e);
  }
}
function di(t, i, e) {
  var n, o;
  if (G.unmount && G.unmount(t), (n = t.ref) && (n.current && n.current !== t.__e || Mi(n, null, i)), (n = t.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (r) {
        G.__e(r, i);
      }
    n.base = n.__P = null, t.__c = void (-5407 + 1 * 5407);
  }
  if (n = t.__k)
    for (o = 1 * 1549 + -3557 + -1004 * -2; o < n.length; o++)
      n[o] && di(n[o], i, e || typeof t.type != "function");
  e || t.__e == null || $a(t.__e), t.__ = t.__e = t.__d = void (-47 * 201 + -11 * -235 + 6862);
}
function es(t, i, e) {
  return this.constructor(t, e);
}
function Ct(t, i, e) {
  var n, o, r, a;
  G.__ && G.__(t, i), o = (n = typeof e == "function") ? null : e && e.__k || i.__k, r = [], a = [], ji(i, t = (!n && e || i).__k = fe(Fe, null, [t]), o || Sn, Sn, void (2654 * -3 + -7 * -839 + 2089 * 1) !== i.ownerSVGElement, !n && e ? [e] : o ? null : i.firstChild ? Kn.call(i.childNodes) : null, r, !n && e ? e : o ? o.__e : i.firstChild, n, a), tg(r, t, a);
}
function Ji(t, i) {
  Ct(t, i, Ji);
}
function Ui(t, i, e) {
  var n, o, r, a, g = rt({}, t.props);
  for (r in t.type && t.type.defaultProps && (a = t.type.defaultProps), i)
    r == "key" ? n = i[r] : r == "ref" ? o = i[r] : g[r] = void (-3 * 3300 + 6470 + 3430) === i[r] && void (-3720 + 372 * 10) !== a ? a[r] : i[r];
  return arguments.length > 2 && (g.children = arguments.length > 11 * -163 + 509 * -1 + -5 * -461 ? Kn.call(arguments, -1706 + 4603 * -2 + 1 * 10914) : e), bn(t.type, g, n || t.key, o || t.ref, null);
}
function Qi(t, i) {
  var e = { __c: i = "__cC" + Qa++, __: t, Consumer: function(n, o) {
    return n.children(o);
  }, Provider: function(n) {
    var o, r;
    return this.getChildContext || (o = [], (r = {})[i] = this, this.getChildContext = function() {
      return r;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && o.some(function(g) {
        g.__e = !0, Ci(g);
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
Kn = za.slice, G = { __e: function(t, i, e, n) {
  for (var o, r, a; i = i.__; )
    if ((o = i.__c) && !o.__)
      try {
        if ((r = o.constructor) && r.getDerivedStateFromError != null && (o.setState(r.getDerivedStateFromError(t)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, n || {}), a = o.__d), a)
          return o.__E = o;
      } catch (g) {
        t = g;
      }
  throw t;
} }, Ma = 0, Ja = function(t) {
  return t != null && t.constructor == null;
}, We.prototype.setState = function(t, i) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = rt({}, this.state), typeof t == "function" && (t = t(rt({}, e), this.props)), t && rt(e, t), t != null && this.__v && (i && this._sb.push(i), Ci(this));
}, We.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !(2920 + 73 * 54 + -6862), t && this.__h.push(t), Ci(this));
}, We.prototype.render = Fe, vt = [], Ua = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ui = function(t, i) {
  return t.__v.__b - i.__v.__b;
}, lo.__r = -7749 + -7 * -1107, Qa = 3 * 10 + -4275 + 4245;
function zi() {
  return (zi = Object.assign ? Object.assign.bind() : function(t) {
    for (var i = 1100 + 3 * -1553 + 3560; i < arguments.length; i++) {
      var e = arguments[i];
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }
    return t;
  }).apply(this, arguments);
}
var ts = ["context", "children"];
function ns(t) {
  this.getChildContext = function() {
    return t.context;
  };
  var i = t.children, e = function(n, o) {
    if (n == null)
      return {};
    var r, a, g = {}, s = Object.keys(n);
    for (a = 28 * -16 + -1 * 8359 + 8807; a < s.length; a++)
      o.indexOf(r = s[a]) >= 2 * 311 + 1 * -5656 + 5034 || (g[r] = n[r]);
    return g;
  }(t, ts);
  return Ui(i, e);
}
function os() {
  var t = {};
  t.detail = {}, t.bubbles = !(-12532 + -26 * -482), t.cancelable = !0;
  var i = new CustomEvent("_preact", t);
  this.dispatchEvent(i), this._vdom = fe(ns, zi({}, this._props, { context: i.detail.context }), function e(n, o) {
    if (n.nodeType === 3)
      return n.data;
    if (-5564 + 1 * -4754 + 10319 !== n.nodeType)
      return null;
    var r = [], a = {}, g = -14734 + -1 * -14734, s = n.attributes, x = n.childNodes;
    for (g = s.length; g--; )
      s[g].name !== "slot" && (a[s[g].name] = s[g].value, a[ng(s[g].name)] = s[g].value);
    for (g = x.length; g--; ) {
      var C = e(x[g], null), u = x[g].slot;
      u ? a[u] = fe(Mr, { name: u }, C) : r[g] = C;
    }
    var f = o ? fe(Mr, null, r) : r;
    return fe(o || n.nodeName.toLowerCase(), a, f);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Ji : Ct)(this._vdom, this._root);
}
function ng(t) {
  return t.replace(/-(\w)/g, function(i, e) {
    return e ? e.toUpperCase() : "";
  });
}
function is(t, i, e) {
  if (this._vdom) {
    var n = {};
    n[t] = e = e ?? void 0, n[ng(t)] = e, this._vdom = Ui(this._vdom, n), Ct(this._vdom, this._root);
  }
}
function rs() {
  Ct(this._vdom = null, this._root);
}
function Mr(t, i) {
  var e = this;
  return fe("slot", zi({}, t, { ref: function(n) {
    n ? (e.ref = n, e._listener || (e._listener = function(o) {
      o.stopPropagation(), o.detail.context = i;
    }, n.addEventListener("_preact", e._listener))) : e.ref.removeEventListener("_preact", e._listener);
  } }));
}
function as(t, i, e, n) {
  function o() {
    var r = Reflect.construct(HTMLElement, [], o);
    return r._vdomComponent = t, r._root = n && n.shadow ? r.attachShadow({ mode: n.mode || "open" }) : r, r;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = os, o.prototype.attributeChangedCallback = is, o.prototype.disconnectedCallback = rs, e = e || t.observedAttributes || Object.keys(t.propTypes || {}), o.observedAttributes = e, e.forEach(function(r) {
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
function _t(t, i, e) {
  if (e || arguments.length === 2)
    for (var n = 0, o = i.length, r; n < o; n++)
      (r || !(n in i)) && (r || (r = Array.prototype.slice.call(i, 0, n)), r[n] = i[n]);
  return t.concat(r || Array.prototype.slice.call(i));
}
function gs(t) {
  var i = Object.create(null);
  return function(e) {
    return i[e] === void 0 && (i[e] = t(e)), i[e];
  };
}
var ss = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, cs = gs(function(t) {
  return ss.test(t) || t.charCodeAt(2196 + -3 * -599 + -121 * 33) === 1 * -1074 + -7510 + 8695 && t.charCodeAt(8868 + 11 * -533 + -1502 * 2) === -75 * -117 + -2 * 2999 + -2667 && t.charCodeAt(-9804 + 1115 * -1 + -67 * -163) < -5479 + 7987 * 1 + -2417;
}), dt, ee, _o, Jr, en = 4991 + -161 * 31, og = [], _n = [], Ur = G.__b, Qr = G.__r, zr = G.diffed, $r = G.__c, qr = G.unmount;
function gn(t, i) {
  G.__h && G.__h(ee, t, en || i), en = 4 * 2273 + -858 + -8234;
  var e = {};
  e.__ = [], e.__h = [];
  var n = ee.__H || (ee.__H = e), o = {};
  return o.__V = _n, t >= n.__.length && n.__.push(o), n.__[t];
}
function Le(t) {
  return en = -1960 * 4 + -3 * 1326 + 11819 * 1, ig(rg, t);
}
function ig(t, i, e) {
  var n = gn(dt++, 2);
  if (n.t = t, !n.__c && (n.__ = [e ? e(i) : rg(void 0, i), function(g) {
    var s = n.__N ? n.__N[0] : n.__[0], x = n.t(s, g);
    s !== x && (n.__N = [x, n.__[-52 + -1 * -53]], n.__c.setState({}));
  }], n.__c = ee, !ee.u)) {
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
      var u = !(69 * 144 + -9427 * -1 + 922 * -21);
      return C.forEach(function(f) {
        if (f.__N) {
          var p = f.__[0];
          f.__ = f.__N, f.__N = void 0, p !== f.__[0] && (u = !0);
        }
      }), !(!u && n.__c.props === g) && (!r || r.call(this, g, s, x));
    };
    ee.u = !(-2529 + 1244 * -5 + 8749 * 1);
    var r = ee.shouldComponentUpdate, a = ee.componentWillUpdate;
    ee.componentWillUpdate = function(g, s, x) {
      if (this.__e) {
        var C = r;
        r = void (1 * -3862 + 832 * 10 + -1486 * 3), o(g, s, x), r = C;
      }
      a && a.call(this, g, s, x);
    }, ee.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function le(t, i) {
  var e = gn(dt++, 3);
  !G.__s && $i(e.__H, i) && (e.__ = t, e.i = i, ee.__H.__h.push(e));
}
function So(t, i) {
  var e = gn(dt++, 4);
  !G.__s && $i(e.__H, i) && (e.__ = t, e.i = i, ee.__h.push(e));
}
function At(t) {
  return en = 526 * 7 + -27 * 313 + -4774 * -1, ze(function() {
    var i = {};
    return i.current = t, i;
  }, []);
}
function Is(t, i, e) {
  en = 34 * 256 + -13 * -639 + -17005, So(function() {
    return typeof t == "function" ? (t(i()), function() {
      return t(null);
    }) : t ? (t.current = i(), function() {
      return t.current = null;
    }) : void (-897 + 1 * -8017 + 8914);
  }, e == null ? e : e.concat(t));
}
function ze(t, i) {
  var e = gn(dt++, 7);
  return $i(e.__H, i) ? (e.__V = t(), e.i = i, e.__h = t, e.__V) : e.__;
}
function uo(t, i) {
  return en = 221 * 43 + 8602 * -1 + -893, ze(function() {
    return t;
  }, i);
}
function Go(t) {
  var i = ee.context[t.__c], e = gn(dt++, -7333 + -1 * -3919 + 3423);
  return e.c = t, i ? (e.__ == null && (e.__ = !(3 * 2123 + 7736 + 13 * -1085), i.sub(ee)), i.props.value) : t.__;
}
function Ai(t, i) {
  G.useDebugValue && G.useDebugValue(i ? i(t) : t);
}
function xs() {
  var t = gn(dt++, 11);
  if (!t.__) {
    for (var i = ee.__v; i !== null && !i.__m && i.__ !== null; )
      i = i.__;
    var e = i.__m || (i.__m = [329 * -9 + 1 * -9461 + -1 * -12422, -43 * 101 + 6340 + -1997 * 1]);
    t.__ = "P" + e[1929 + -1929 * 1] + "-" + e[13610 + 439 * -31]++;
  }
  return t.__;
}
function ls() {
  for (var t; t = og.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(eo), t.__H.__h.forEach(pi), t.__H.__h = [];
      } catch (i) {
        t.__H.__h = [], G.__e(i, t.__v);
      }
}
G.__b = function(t) {
  ee = null, Ur && Ur(t);
}, G.__r = function(t) {
  Qr && Qr(t), dt = -2 * -1535 + 111 * -73 + -719 * -7;
  var i = (ee = t.__c).__H;
  i && (_o === ee ? (i.__h = [], ee.__h = [], i.__.forEach(function(e) {
    e.__N && (e.__ = e.__N), e.__V = _n, e.__N = e.i = void (-1 * 8691 + -7187 * 1 + 15878);
  })) : (i.__h.forEach(eo), i.__h.forEach(pi), i.__h = [], dt = 67 * -134 + 22 * 389 + -20 * -21)), _o = ee;
}, G.diffed = function(t) {
  zr && zr(t);
  var i = t.__c;
  i && i.__H && (i.__H.__h.length && (-811 + 1 * -493 + 1305 !== og.push(i) && Jr === G.requestAnimationFrame || ((Jr = G.requestAnimationFrame) || us)(ls)), i.__H.__.forEach(function(e) {
    e.i && (e.__H = e.i), e.__V !== _n && (e.__ = e.__V), e.i = void 0, e.__V = _n;
  })), _o = ee = null;
}, G.__c = function(t, i) {
  i.some(function(e) {
    try {
      e.__h.forEach(eo), e.__h = e.__h.filter(function(n) {
        return !n.__ || pi(n);
      });
    } catch (n) {
      i.some(function(o) {
        o.__h && (o.__h = []);
      }), i = [], G.__e(n, e.__v);
    }
  }), $r && $r(t, i);
}, G.unmount = function(t) {
  qr && qr(t);
  var i, e = t.__c;
  e && e.__H && (e.__H.__.forEach(function(n) {
    try {
      eo(n);
    } catch (o) {
      i = o;
    }
  }), e.__H = void (11144 + 4 * -2786), i && G.__e(i, e.__v));
};
var _r = typeof requestAnimationFrame == "function";
function us(t) {
  var i, e = function() {
    clearTimeout(n), _r && cancelAnimationFrame(i), setTimeout(t);
  }, n = setTimeout(e, 100);
  _r && (i = requestAnimationFrame(e));
}
function eo(t) {
  var i = ee, e = t.__c;
  typeof e == "function" && (t.__c = void 0, e()), ee = i;
}
function pi(t) {
  var i = ee;
  t.__c = t.__(), ee = i;
}
function $i(t, i) {
  return !t || t.length !== i.length || i.some(function(e, n) {
    return e !== t[n];
  });
}
function rg(t, i) {
  return typeof i == "function" ? i(t) : i;
}
function ag(t, i) {
  for (var e in i)
    t[e] = i[e];
  return t;
}
function fi(t, i) {
  for (var e in t)
    if (e !== "__source" && !(e in i))
      return !(8 * 181 + -1 * 447 + -77 * 13);
  for (var n in i)
    if (n !== "__source" && t[n] !== i[n])
      return !(-2 * -3688 + 7349 + -14725);
  return !(-2002 + 2003 * 1);
}
function hi(t) {
  this.props = t;
}
function Cs(t, i) {
  function e(o) {
    var r = this.props.ref, a = r == o.ref;
    return !a && r && (r.call ? r(null) : r.current = null), i ? !i(this.props, o) || !a : fi(this.props, o);
  }
  function n(o) {
    return this.shouldComponentUpdate = e, fe(t, o);
  }
  return n.displayName = "Memo(" + (t.displayName || t.name) + ")", n.prototype.isReactComponent = !(1602 + 73 * -101 + 199 * 29), n.__f = !(5707 * 1 + 3953 * 1 + -9660), n;
}
(hi.prototype = new We()).isPureReactComponent = !(2765 + -1145 * -1 + 170 * -23), hi.prototype.shouldComponentUpdate = function(t, i) {
  return fi(this.props, t) || fi(this.state, i);
};
var ea = G.__b;
G.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), ea && ea(t);
};
var ds = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function gg(t) {
  function i(e) {
    var n = ag({}, e);
    return delete n.ref, t(n, e.ref || null);
  }
  return i.$$typeof = ds, i.render = i, i.prototype.isReactComponent = i.__f = !(-50 * 191 + -5485 * 1 + -155 * -97), i.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", i;
}
var ta = function(t, i) {
  return t == null ? null : at(at(t).map(i));
}, As = { map: ta, forEach: ta, count: function(t) {
  return t ? at(t).length : -787 * 3 + 22 * 287 + -67 * 59;
}, only: function(t) {
  var i = at(t);
  if (3 * 661 + 2853 + -4835 !== i.length)
    throw "Children.only";
  return i[-1593 + 2 * -4881 + 5 * 2271];
}, toArray: at }, ps = G.__e;
G.__e = function(t, i, e, n) {
  if (t.then) {
    for (var o, r = i; r = r.__; )
      if ((o = r.__c) && o.__c)
        return i.__e == null && (i.__e = e.__e, i.__k = e.__k), o.__c(t, i);
  }
  ps(t, i, e, n);
};
var na = G.unmount;
function sg(t, i, e) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), t.__c.__H = null), (t = ag({}, t)).__c != null && (t.__c.__P === e && (t.__c.__P = i), t.__c = null), t.__k = t.__k && t.__k.map(function(n) {
    return sg(n, i, e);
  })), t;
}
function cg(t, i, e) {
  return t && e && (t.__v = null, t.__k = t.__k && t.__k.map(function(n) {
    return cg(n, i, e);
  }), t.__c && t.__c.__P === i && (t.__e && e.appendChild(t.__e), t.__c.__e = !(879 * -7 + 1005 * 9 + -3 * 964), t.__c.__P = e)), t;
}
function to() {
  this.__u = 8229 + -1 * -7306 + 1 * -15535, this.t = null, this.__b = null;
}
function Ig(t) {
  var i = t.__.__c;
  return i && i.__a && i.__a(t);
}
function fs(t) {
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
    return fe(e, r);
  }
  return o.displayName = "Lazy", o.__f = !(-116 * 34 + 1765 * 2 + 46 * 9), o;
}
function pn() {
  this.u = null, this.o = null;
}
G.unmount = function(t) {
  var i = t.__c;
  i && i.__R && i.__R(), i && -4 * -1877 + -3428 + 22 * -184 & t.__u && (t.type = null), na && na(t);
}, (to.prototype = new We()).__c = function(t, i) {
  var e = i.__c, n = this;
  n.t == null && (n.t = []), n.t.push(e);
  var o = Ig(n.__v), r = !(-69 * 7 + -6847 + 7331), a = function() {
    r || (r = !(38 * 50 + -1207 + -9 * 77), e.__R = null, o ? o(g) : g());
  };
  e.__R = a;
  var g = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var s = n.state.__a;
        n.__v.__k[5316 + -1 * -1731 + -7047] = cg(s, s.__c.__P, s.__c.__O);
      }
      var x;
      for (n.setState({ __a: n.__b = null }); x = n.t.pop(); )
        x.forceUpdate();
    }
  };
  n.__u++ || -2118 * -1 + 2326 * 3 + -103 * 88 & i.__u || n.setState({ __a: n.__b = n.__v.__k[5 * 727 + 8493 + 1 * -12128] }), t.then(a, a);
}, to.prototype.componentWillUnmount = function() {
  this.t = [];
}, to.prototype.render = function(t, i) {
  if (this.__b) {
    if (this.__v.__k) {
      var e = document.createElement("div"), n = this.__v.__k[4196 + 2872 * -3 + 4420].__c;
      this.__v.__k[12 * 135 + -2489 + -869 * -1] = sg(this.__b, e, n.__O = n.__P);
    }
    this.__b = null;
  }
  var o = i.__a && fe(Fe, null, t.fallback);
  return o && (o.__u &= -(1567 + -877 * -2 + -548 * 6)), [fe(Fe, null, i.__a ? null : t.children), o];
};
var oa = function(t, i, e) {
  if (++e[-2676 + 46 * -86 + 99 * 67] === e[-16 * 586 + -1459 + 1 * 10835] && t.o.delete(i), t.props.revealOrder && (t.props.revealOrder[14001 + -3 * 4667] !== "t" || !t.o.size))
    for (e = t.u; e; ) {
      for (; e.length > 5 * 91 + 2987 * 1 + -3439 * 1; )
        e.pop()();
      if (e[1] < e[-8772 + 1 * -3529 + 12301 * 1])
        break;
      t.u = e = e[-2149 + 9524 * 1 + 7373 * -1];
    }
};
function hs(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function ms(t) {
  var i = this, e = t.i;
  i.componentWillUnmount = function() {
    Ct(null, i.l), i.l = null, i.i = null;
  }, i.i && i.i !== e && i.componentWillUnmount(), i.l || (i.i = e, i.l = { nodeType: 1, parentNode: e, childNodes: [], appendChild: function(n) {
    this.childNodes.push(n), i.i.appendChild(n);
  }, insertBefore: function(n, o) {
    this.childNodes.push(n), i.i.appendChild(n);
  }, removeChild: function(n) {
    this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, -61 * -92 + -3613 * 2 + -95 * -17), i.i.removeChild(n);
  } }), Ct(fe(hs, { context: i.context }, t.__v), i.l);
}
function bs(t, i) {
  var e = {};
  e.__v = t, e.i = i;
  var n = fe(ms, e);
  return n.containerInfo = i, n;
}
(pn.prototype = new We()).__a = function(t) {
  var i = this, e = Ig(i.__v), n = i.o.get(t);
  return n[-71 * 22 + -200 + 1 * 1762]++, function(o) {
    var r = function() {
      i.props.revealOrder ? (n.push(o), oa(i, t, n)) : o();
    };
    e ? e(r) : r();
  };
}, pn.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var i = at(t.children);
  t.revealOrder && t.revealOrder[7292 + -733 * 11 + 771] === "b" && i.reverse();
  for (var e = i.length; e--; )
    this.o.set(i[e], this.u = [2 * -454 + -7226 + -1627 * -5, -2 * 3112 + 4111 + 2113, this.u]);
  return t.children;
}, pn.prototype.componentDidUpdate = pn.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(i, e) {
    oa(t, e, i);
  });
};
var xg = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || -73644 + 2823 * 29 + 51880, ys = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, vs = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, ws = /[A-Z0-9]/g, Bs = typeof document < "u", Ss = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
};
function Gs(t, i, e) {
  return i.__k == null && (i.textContent = ""), Ct(t, i), typeof e == "function" && e(), t ? t.__c : null;
}
function Zs(t, i, e) {
  return Ji(t, i), typeof e == "function" && e(), t ? t.__c : null;
}
We.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(We.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(i) {
    var e = {};
    e.configurable = !(9 * -155 + -31 * -109 + 1984 * -1), e.writable = !(-17 * -335 + -8 * -561 + 17 * -599), e.value = i, Object.defineProperty(this, t, e);
  } });
});
var ia = G.event;
function ks() {
}
function Ks() {
  return this.cancelBubble;
}
function Hs() {
  return this.defaultPrevented;
}
G.event = function(t) {
  return ia && (t = ia(t)), t.persist = ks, t.isPropagationStopped = Ks, t.isDefaultPrevented = Hs, t.nativeEvent = t;
};
var no = {};
no.enumerable = !(3 * 137 + -2 * 1009 + 24 * 67), no.configurable = !(-1150 + -1519 * 1 + 2669 * 1), no.get = function() {
  return this.class;
};
var qi, Ws = no, ra = G.vnode;
G.vnode = function(t) {
  typeof t.type == "string" && function(i) {
    var e = i.props, n = i.type, o = {};
    for (var r in e) {
      var a = e[r];
      if (!(r === "value" && "defaultValue" in e && a == null || Bs && r === "children" && n === "noscript" || r === "class" || r === "className")) {
        var g = r.toLowerCase();
        r === "defaultValue" && "value" in e && e.value == null ? r = "value" : r === "download" && a === !0 ? a = "" : g === "ondoubleclick" ? r = "ondblclick" : g !== "onchange" || n !== "input" && n !== "textarea" || Ss(e.type) ? g === "onfocus" ? r = "onfocusin" : g === "onblur" ? r = "onfocusout" : vs.test(r) ? r = g : -(-1468 + 1 * -4509 + -7 * -854) === n.indexOf("-") && ys.test(r) ? r = r.replace(ws, "-$&").toLowerCase() : a === null && (a = void (-8439 + 179 * 53 + -1048)) : g = r = "oninput", g === "oninput" && o[r = g] && (r = "oninputCapture"), o[r] = a;
      }
    }
    n == "select" && o.multiple && Array.isArray(o.value) && (o.value = at(e.children).forEach(function(s) {
      s.props.selected = -(-9639 + 1392 * -1 + 11032) != o.value.indexOf(s.props.value);
    })), n == "select" && o.defaultValue != null && (o.value = at(e.children).forEach(function(s) {
      s.props.selected = o.multiple ? -(-3 * 1703 + 716 + 4394) != o.defaultValue.indexOf(s.props.value) : o.defaultValue == s.props.value;
    })), e.class && !e.className ? (o.class = e.class, Object.defineProperty(o, "className", Ws)) : (e.className && !e.class || e.class && e.className) && (o.class = o.className = e.className), i.props = o;
  }(t), t.$$typeof = xg, ra && ra(t);
};
var aa = G.__r;
G.__r = function(t) {
  aa && aa(t), qi = t.__c;
};
var ga = G.diffed;
G.diffed = function(t) {
  ga && ga(t);
  var i = t.props, e = t.__e;
  e != null && t.type === "textarea" && "value" in i && i.value !== e.value && (e.value = i.value == null ? "" : i.value), qi = null;
};
var lg = {};
lg.readContext = function(t) {
  return qi.__n[t.__c].props.value;
};
var ug = {};
ug.current = lg;
var Cg = {};
Cg.ReactCurrentDispatcher = ug;
var Os = Cg;
function Rs(t) {
  return fe.bind(null, t);
}
function Zo(t) {
  return !!t && t.$$typeof === xg;
}
function Vs(t) {
  return Zo(t) && t.type === Fe;
}
function Es(t) {
  return Zo(t) ? Ui.apply(null, arguments) : t;
}
function Ps(t) {
  return !!t.__k && (Ct(null, t), !(-9149 * 1 + 1266 + 7883));
}
function Ns(t) {
  return t && (t.base || 76 * 94 + -3985 * 1 + 3158 * -1 === t.nodeType && t) || null;
}
var Ys = function(t, i) {
  return t(i);
}, Ls = function(t, i) {
  return t(i);
}, Ts = Fe;
function dg(t) {
  t();
}
function Fs(t) {
  return t;
}
function Ds() {
  return [!(5018 + -359 * -26 + -14351), dg];
}
var Xs = So, js = Zo;
function Ms(t, i) {
  var e = i(), n = Le({ h: { __: e, v: i } }), o = n[0].h, r = n[25 * 75 + -705 + -1169];
  return So(function() {
    o.__ = e, o.v = i, ei(o) && r({ h: o });
  }, [t, e, i]), le(function() {
    return ei(o) && r({ h: o }), t(function() {
      ei(o) && r({ h: o });
    });
  }, [t]), e;
}
function ei(t) {
  var i, e, n = t.v, o = t.__;
  try {
    var r = n();
    return !((i = o) === (e = r) && (4634 + -662 * 7 !== i || (-13420 + -1 * -13421) / i == (-2117 * -3 + 1 * 8956 + -15306) / e) || i != i && e != e);
  } catch {
    return !(-1387 + -116 * 82 + 63 * 173);
  }
}
var Y = {};
Y.useState = Le, Y.useId = xs, Y.useReducer = ig, Y.useEffect = le, Y.useLayoutEffect = So, Y.useInsertionEffect = Xs, Y.useTransition = Ds, Y.useDeferredValue = Fs, Y.useSyncExternalStore = Ms, Y.startTransition = dg, Y.useRef = At, Y.useImperativeHandle = Is, Y.useMemo = ze, Y.useCallback = uo, Y.useContext = Go, Y.useDebugValue = Ai, Y.version = "17.0.2", Y.Children = As, Y.render = Gs, Y.hydrate = Zs, Y.unmountComponentAtNode = Ps, Y.createPortal = bs, Y.createElement = fe, Y.createContext = Qi, Y.createFactory = Rs, Y.cloneElement = Es, Y.createRef = z0, Y.Fragment = Fe, Y.isValidElement = Zo, Y.isElement = js, Y.isFragment = Vs, Y.findDOMNode = Ns, Y.Component = We, Y.PureComponent = hi, Y.memo = Cs, Y.forwardRef = gg, Y.flushSync = Ls, Y.unstable_batchedUpdates = Ys, Y.StrictMode = Ts, Y.Suspense = to, Y.SuspenseList = pn, Y.lazy = fs, Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Os;
var Kt = Y, Js = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Us(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Qs(t) {
  return t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function zs(t) {
  return t && Object.prototype.hasOwnProperty.call(t, "default") && Object.keys(t).length === 1 ? t.default : t;
}
function $s(t) {
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
const qs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: Js,
  getAugmentedNamespace: $s,
  getDefaultExportFromCjs: Us,
  getDefaultExportFromNamespaceIfNotNamed: zs,
  getDefaultExportFromNamespaceIfPresent: Qs
}, Symbol.toStringTag, { value: "Module" }));
var _s = function(i, e, n, o) {
  var r = n ? n.call(o, i, e) : void 0;
  if (r !== void (133 * 68 + 1286 + -2066 * 5))
    return !!r;
  if (i === e)
    return !0;
  if (typeof i != "object" || !i || typeof e != "object" || !e)
    return !1;
  var a = Object.keys(i), g = Object.keys(e);
  if (a.length !== g.length)
    return !1;
  for (var s = Object.prototype.hasOwnProperty.bind(e), x = 1 * -9007 + 5 * 42 + 8797; x < a.length; x++) {
    var C = a[x];
    if (!s(C))
      return !1;
    var u = i[C], f = e[C];
    if (r = n ? n.call(o, u, f, C) : void 0, r === !1 || r === void (2993 * -1 + -8241 + -137 * -82) && u !== f)
      return !1;
  }
  return !0;
};
const ec = qs.getDefaultExportFromCjs(_s);
var q = "-ms-", yn = "-moz-", U = "-webkit-", Ag = "comm", ko = "rule", _i = "decl", tc = "@import", pg = "@keyframes", nc = "@layer", oc = Math.abs, er = String.fromCharCode, mi = Object.assign;
function ic(t, i) {
  return xe(t, -11 * -907 + -4268 + -5709) ^ 6385 * -1 + 6590 + 32 * -5 ? (((i << 7 * 339 + -214 + -2157 ^ xe(t, 7782 * 1 + -3317 + -4465 * 1)) << -1152 + -34 * -275 + -8196 ^ xe(t, 1)) << -109 + 59 * 134 + -7795 ^ xe(t, 6575 * 1 + 7537 + 85 * -166)) << 218 * -29 + -1 * -71 + -13 * -481 ^ xe(t, -1 * 7461 + 6651 + 3 * 271) : 5752 * -1 + 297 * -9 + -1 * -8425;
}
function fg(t) {
  return t.trim();
}
function it(t, i) {
  return (t = i.exec(t)) ? t[-5 * 841 + -14 * 321 + 8699] : t;
}
function L(t, i, e) {
  return t.replace(i, e);
}
function oo(t, i) {
  return t.indexOf(i);
}
function xe(t, i) {
  return t.charCodeAt(i) | -297 * 28 + -2735 + 11051;
}
function tn(t, i, e) {
  return t.slice(i, e);
}
function Ue(t) {
  return t.length;
}
function hg(t) {
  return t.length;
}
function fn(t, i) {
  return i.push(t), t;
}
function rc(t, i) {
  return t.map(i).join("");
}
function sa(t, i) {
  return t.filter(function(e) {
    return !it(e, i);
  });
}
var Ko = 1353 + -769 * 5 + 2493, nn = 3046 * -3 + 5966 + 3173 * 1, mg = 7597 * -1 + 2228 + 13 * 413, Re = -51 * 189 + -343 * 1 + 9982, ge = 15271 + 1 * -15271, sn = "";
function Ho(t, i, e, n, o, r, a, g) {
  var s = {};
  return s.value = t, s.root = i, s.parent = e, s.type = n, s.props = o, s.children = r, s.line = Ko, s.column = nn, s.length = a, s.return = "", s.siblings = g, s;
}
function ct(t, i) {
  return mi(Ho("", null, null, "", null, null, -1 * -6652 + -1 * 8001 + 1349, t.siblings), t, { length: -t.length }, i);
}
function Xt(t) {
  for (; t.root; )
    t = ct(t.root, { children: [t] });
  fn(t, t.siblings);
}
function ac() {
  return ge;
}
function gc() {
  return ge = Re > 1 * -1367 + 5597 + -4230 ? xe(sn, --Re) : 2271 * 1 + -6357 + 4086, nn--, ge === -132 * 19 + -3405 + 5923 && (nn = -14646 + -14647 * -1, Ko--), ge;
}
function Te() {
  return ge = Re < mg ? xe(sn, Re++) : 1 * 6439 + -1 * 2693 + 2 * -1873, nn++, ge === -7491 + 467 * 7 + 4232 && (nn = 7652 + -1 * -9518 + 59 * -291, Ko++), ge;
}
function Zt() {
  return xe(sn, Re);
}
function io() {
  return Re;
}
function Wo(t, i) {
  return tn(sn, t, i);
}
function bi(t) {
  switch (t) {
    case 5 * -179 + 11 * -639 + 7924:
    case 2228 + -317 * 7:
    case -1465 + -1 * 2729 + 2 * 2102:
    case -11 * -606 + 9980 + -16633:
    case -25 * -158 + -16 * 440 + 3122:
      return -2837 * 1 + 1 * -48 + 2890;
    case 9799 * -1 + -1570 + -11402 * -1:
    case -3 * -7 + -4366 + -4388 * -1:
    case 1 * 163 + -3 * 677 + 1 * 1912:
    case 3 * -3259 + -6906 + 1 * 16730:
    case 7660 + 1 * -8351 + 753:
    case 64:
    case -39 * 89 + 1 * 2542 + 1055:
    case -593 * -2 + -5059 + 4 * 983:
    case -1132 * 6 + -1910 * 5 + 16465:
    case 18 * -246 + -5871 + 10424:
      return -1685 + -1 * -1689;
    case 6626 * 1 + 1 * 499 + -7067:
      return 5 * -1010 + 3120 + -1 * -1933;
    case 34:
    case -91 * -79 + -3598 + -3552:
    case -689 * -13 + 7415 + 6 * -2722:
    case 2 * -1634 + -1 * 7339 + 10698 * 1:
      return -9789 + 2 * -1621 + -1 * -13033;
    case -14476 + 14517 * 1:
    case 93:
      return -197 * -19 + -353 + 1 * -3389;
  }
  return 0;
}
function sc(t) {
  return Ko = nn = -4918 + 1156 * 5 + -861, mg = Ue(sn = t), Re = -3670 * -1 + 15 * -280 + 106 * 5, [];
}
function cc(t) {
  return sn = "", t;
}
function ti(t) {
  return fg(Wo(Re - 1, yi(t === -3428 * 2 + -358 * 13 + 11601 ? t + (-7594 + -19 * -147 + 4803) : t === -2 * -4096 + -6236 + -1916 ? t + (-7105 * 1 + -1 * 1397 + 11 * 773) : t)));
}
function Ic(t) {
  for (; (ge = Zt()) && ge < 16231 + -2 * 8099; )
    Te();
  return bi(t) > -1 * 7193 + -2015 + 9210 || bi(ge) > 3 ? "" : " ";
}
function xc(t, i) {
  for (; --i && Te() && !(ge < 3412 * -1 + 5211 + 103 * -17 || ge > -5865 + 39 * 153 || ge > 6 * -816 + -2407 * -3 + -2268 && ge < -7709 + -9787 * 1 + 17561 * 1 || ge > 1 * -4481 + 2603 + -2 * -974 && ge < 3428 * -1 + 4535 + -1010); )
    ;
  return Wo(t, io() + (i < 1 * 1063 + -5 * -326 + -1 * 2687 && Zt() == -8154 + -871 * -1 + 7315 && Te() == 32));
}
function yi(t) {
  for (; Te(); )
    switch (ge) {
      case t:
        return Re;
      case 1924 + 313 * -15 + 2805:
      case 44 * -62 + -3 * 386 + -25 * -157:
        t !== 2049 * 2 + 6502 + -3522 * 3 && t !== 39 && yi(ge);
        break;
      case 2 * 3197 + 4337 + -1 * 10691:
        t === 1258 + -18 * 309 + -1 * -4345 && yi(t);
        break;
      case 17 * 363 + 1212 * -1 + -4867:
        Te();
        break;
    }
  return Re;
}
function lc(t, i) {
  for (; Te() && t + ge !== 27 * 106 + -6230 + 3415 + (5 * 1130 + 4279 + -9919); )
    if (t + ge === 2291 * 1 + -6951 + -4702 * -1 + (4838 * -1 + -8002 + 12882) && Zt() === 10742 + 465 * -23)
      break;
  return "/*" + Wo(i, Re - (3 * 107 + -1237 * 5 + 5865)) + "*" + er(t === 5247 + -6788 * -1 + -11988 ? t : Te());
}
function uc(t) {
  for (; !bi(Zt()); )
    Te();
  return Wo(t, Re);
}
function Cc(t) {
  return cc(ro("", null, null, null, [""], t = sc(t), 3 * -821 + 6483 + -4020, [1383 + -1 * 6491 + 5108], t));
}
function ro(t, i, e, n, o, r, a, g, s) {
  for (var x = 0, C = -2468 + -26 * -17 + 1 * 2026, u = a, f = 731 * 11 + -6426 + -95 * 17, p = 0, v = 490 + 490 * -1, E = 13074 + 769 * -17, S = 8513 * 1 + 13 * -143 + -6653, k = -8 * 535 + -3138 + 7419, Z = 0, O = "", Q = o, T = r, j = n, H = O; S; )
    switch (v = Z, Z = Te()) {
      case -1039 * 5 + -1889 * -5 + -4210:
        if (v != 8096 * -1 + -6117 + 14321 && xe(H, u - (-757 * 3 + 5234 + -2962)) == 2423 * 4 + 8 * 1062 + 370 * -49) {
          oo(H += L(ti(Z), "&", "&\f"), "&\f") != -(5256 + -1 * -5231 + -10486 * 1) && (k = -1);
          break;
        }
      case -1234 + 2447 * 4 + -355 * 24:
      case 39:
      case -5640 + 2561 * -3 + -353 * -38:
        H += ti(Z);
        break;
      case -9733 * 1 + -2506 * -2 + 4730:
      case 1 * 4943 + -6890 + 1957:
      case -9 * -734 + 1188 + -7781:
      case 8612 * -1 + -12 * -307 + -2 * -2480:
        H += Ic(v);
        break;
      case -1 * -8108 + -2 * -545 + -157 * 58:
        H += xc(io() - (-54 + -79 * 71 + 5664), -2023 + -35 * -58);
        continue;
      case 3 * 3121 + 9322 + -18638:
        switch (Zt()) {
          case -7467 + 2503 * 3:
          case 8939 + 8 * 577 + 1 * -13508:
            fn(dc(lc(Te(), io()), i, e, s), s);
            break;
          default:
            H += "/";
        }
        break;
      case (-1 * 3171 + 2832 + 462) * E:
        g[x++] = Ue(H) * k;
      case (986 + -13 * 187 + 1570) * E:
      case 59:
      case 4041 + -1 * 5739 + 1698 * 1:
        switch (Z) {
          case 1 * -5261 + -1164 + 6425:
          case 725 * -2 + 4637 * -1 + 6212:
            S = 15 * 232 + 5028 + -8508;
          case -2217 + 1 * -618 + 2894 + C:
            k == -(-9190 + 1 * 5801 + 3390) && (H = L(H, /\f/g, "")), p > 9920 + -47 * 169 + 1 * -1977 && Ue(H) - u && fn(p > 65 * 141 + 1680 + -10813 ? Ia(H + ";", n, e, u - (4568 + 2 * 2966 + -10499), s) : Ia(L(H, " ", "") + ";", n, e, u - (8253 + 124 * 25 + 1 * -11351), s), s);
            break;
          case -10085 + -1268 * -8:
            H += ";";
          default:
            if (fn(j = ca(H, i, e, x, C, o, g, O, Q = [], T = [], u, r), r), Z === 3781 + 76 * 1 + 1867 * -2)
              if (C === 3 * 1555 + 5885 + 2 * -5275)
                ro(H, i, j, j, Q, r, u, g, T);
              else
                switch (f === -2731 * 2 + 5993 + 108 * -4 && xe(H, 2657 * 1 + 360 + -3014) === -4810 * -2 + -7888 + 2 * -811 ? 1054 + 14 * 516 + -8178 : f) {
                  case 156 * 11 + 1 * 6095 + -11 * 701:
                  case 19109 + 19001 * -1:
                  case 109:
                  case -1 * -31 + -19 * -79 + -1417:
                    ro(t, j, j, n && fn(ca(t, j, j, 1 * 4638 + 37 * 139 + -9781, 922 + 1039 * -4 + -3234 * -1, o, g, O, o, Q = [], u, T), T), o, T, u, g, n ? Q : T);
                    break;
                  default:
                    ro(H, j, j, j, [""], T, -4657 + -1 * -9569 + -4912, g, T);
                }
        }
        x = C = p = -132 * 49 + 1 * 5773 + 139 * 5, E = k = -6256 + -1 * -2963 + 1 * 3294, O = H = "", u = a;
        break;
      case -15688 + 1 * 15746:
        u = -3964 * -1 + -6043 * 1 + 2080 + Ue(H), p = v;
      default:
        if (E < 5222 + -5 * 841 + -1016) {
          if (Z == -7177 * 1 + -9881 + -5727 * -3)
            --E;
          else if (Z == -1138 * -2 + 1 * -9719 + -44 * -172 && E++ == 1 * 5261 + 29 * -73 + -3144 && gc() == 119 * 81 + -5717 + -1 * 3797)
            continue;
        }
        switch (H += er(Z), Z * E) {
          case 1 * 627 + -846 + -1 * -257:
            k = C > -13 * 679 + 58 + 8769 ? 1 : (H += "\f", -(1 * 4542 + -97 * -39 + -8324));
            break;
          case -1 * 1999 + -14 * -350 + 2857 * -1:
            g[x++] = (Ue(H) - (-6503 + 2603 * 1 + -1 * -3901)) * k, k = 2676 + 6653 * 1 + 1166 * -8;
            break;
          case -1 * 5781 + -1 * -5548 + 297:
            Zt() === 13 * 353 + 2064 + -6608 && (H += ti(Te())), f = Zt(), C = u = Ue(O = H += uc(io())), Z++;
            break;
          case -867 + 31 * -173 + 1 * 6275:
            v === 1 * 4043 + 5 * -849 + -19 * -13 && Ue(H) == -14093 + 2819 * 5 && (E = 340 * -25 + 8895 + -395);
        }
    }
  return r;
}
function ca(t, i, e, n, o, r, a, g, s, x, C, u) {
  for (var f = o - 1, p = o === -3767 * -1 + -22 * 3 + -3701 ? r : [""], v = hg(p), E = 14 * 713 + -5355 + 661 * -7, S = -886 * 9 + 7911 * 1 + 21 * 3, k = -4776 + -2113 * 3 + 11115; E < n; ++E)
    for (var Z = -3235 + 1 * 3235, O = tn(t, f + (818 + -1 * 817), f = oc(S = a[E])), Q = t; Z < v; ++Z)
      (Q = fg(S > -8 * -517 + -348 * -26 + -13184 ? p[Z] + " " + O : L(O, /&\f/g, p[Z]))) && (s[k++] = Q);
  return Ho(t, i, e, o === 0 ? ko : g, s, x, C, u);
}
function dc(t, i, e, n) {
  return Ho(t, i, e, Ag, er(ac()), tn(t, 2, -(193 * 47 + -6440 + -2629)), -8863 * 1 + 2456 + -43 * -149, n);
}
function Ia(t, i, e, n, o) {
  return Ho(t, i, e, _i, tn(t, 0, n), tn(t, n + (7070 + 8 * 1084 + -15741), -(-5408 + 659 * 8 + -1 * -137)), n, o);
}
function bg(t, i, e) {
  switch (ic(t, i)) {
    case -3115 * 1 + -9296 + -14 * -1251:
      return U + "print-" + t + t;
    case 1943 * -5 + 4758 + 5347 * 2:
    case -4286 * -1 + 1543 * -1 + 1458:
    case -982 * -10 + -3 * -893 + -9322:
    case -914 * -5 + -7292 + -1231 * -5:
    case 774 + 7 * 1313 + 2081 * -4:
    case -6617 * 1 + -4783 + 15857:
    case -17873 + -2 * -10397:
    case 1 * -10627 + 1 * 7235 + -3 * -2988:
    case 10754 + 69 * -53 + -19 * 39:
    case -8 * 13 + 11268 + 56 * -95:
    case 3191:
    case 6645:
    case 3005:
    case -441 * -25 + 13 * 431 + 29 * -353:
    case 5879:
    case -9481 * -1 + -5035 + 1177:
    case -5 * 840 + 8174 + 2161 * 1:
    case -8691 + 16 * 161 + 1 * 10714:
    case -4908 + -365 * 18 + 16333:
    case -5228 + 902 * -4 + -421 * -31:
    case -38 * -171 + -337 * -23 + -131 * 60:
    case -2 * 4420 + -4313 * 1 + 18262:
    case 1754 + -1 * -3611:
    case 5248 + -11 * -843 + -8900:
    case -3005 * 3 + -8949 + -589 * -37:
      return U + t + t;
    case -8326 + -2 * -2917 + -1 * -7281:
      return yn + t + t;
    case -3531 + 3198 * 1 + 5682:
    case -3 * -1371 + 5680 + -5547:
    case -467 * -1 + -731 + -59 * -86:
    case -9170 + 11121 * -1 + 27259:
    case 3 * 53 + 5654 + -3057:
      return U + t + yn + t + q + t + t;
    case 16883 + -267 * 41:
      switch (xe(t, i + (-467 + 155 * -51 + 8383))) {
        case 1865 + -1 * 664 + -1087:
          return U + t + q + L(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        case -9920 + 15 * 78 + -43 * -206:
          return U + t + q + L(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        case 2 * 3617 + 3688 + 1 * -10877:
          return U + t + q + L(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    case 1 * -3191 + 1593 + 11 * 766:
    case -3040 + -42 * -174:
    case 2319 + 248 * 17 + -3632:
      return U + t + q + t + t;
    case 4460 + 326 * -30 + 11485:
      return U + t + q + "flex-" + t + t;
    case 6556 + 29 * 298 + -10011:
      return U + t + L(t, /(\w+).+(:[^]+)/, U + "box-$1$2" + q + "flex-$1$2") + t;
    case -9265 * -1 + 6407 + 10229 * -1:
      return U + t + q + "flex-item-" + L(t, /flex-|-self/g, "") + (it(t, /flex-|baseline/) ? "" : q + "grid-row-" + L(t, /flex-|-self/g, "")) + t;
    case 6331 + -24 * 69:
      return U + t + q + "flex-line-pack" + L(t, /align-content|flex-|-self/g, "") + t;
    case 1 * -5470 + -888 + 11906:
      return U + t + q + L(t, "shrink", "negative") + t;
    case 5292:
      return U + t + q + L(t, "basis", "preferred-size") + t;
    case -3110 * -3 + -2991 * 1 + -279:
      return U + "box-" + L(t, "-grow", "") + U + t + q + L(t, "grow", "positive") + t;
    case -1 * 3989 + 2 * -2954 + 14451 * 1:
      return U + L(t, /([^-])(transform)/g, "$1" + U + "$2") + t;
    case 49 * -105 + -10683 + -4403 * -5:
      return L(L(L(t, /(zoom-|grab)/, U + "$1"), /(image-set)/, U + "$1"), t, "") + t;
    case 158 * -17 + 3617 + 4564:
    case 3959:
      return L(t, /(image-set\([^]*)/, U + "$1$`$1");
    case 9193 * -1 + -74 * 106 + 489 * 45:
      return L(L(t, /(.+:)(flex-)?(.*)/, U + "box-pack:$3" + q + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + U + t + t;
    case 28 * -169 + 6002 * -1 + 14934:
      if (!it(t, /flex-|baseline/))
        return q + "grid-column-align" + tn(t, i) + t;
      break;
    case 200 + -104 * -23:
    case 3874 + 4014 * 2 + 4271 * -2:
      return q + L(t, "template-", "") + t;
    case 4384:
    case -773 * 6 + -4 * 1289 + -5 * -2682:
      return e && e.some(function(n, o) {
        return i = o, it(n.props, /grid-\w+-end/);
      }) ? ~oo(t + (e = e[i].value), "span") ? t : q + L(t, "-start", "") + t + q + "grid-row-span:" + (~oo(e, "span") ? it(e, /\d+/) : +it(e, /\d+/) - +it(t, /\d+/)) + ";" : q + L(t, "-start", "") + t;
    case 3626 + 1 * 1270:
    case -2886 + 7 * -1192 + 15358:
      return e && e.some(function(n) {
        return it(n.props, /grid-\w+-start/);
      }) ? t : q + L(L(t, "-end", "-span"), "span ", "") + t;
    case 4095:
    case -5893 + -6637 * -1 + -17 * -167:
    case -229 * 32 + -1069 * -9 + -355 * -5:
    case 2089 + 9931 * 1 + -9488:
      return L(t, /(.+)-inline(.+)/, U + "$1$2") + t;
    case 2291 * -4 + -7657 + 2267 * 11:
    case -2707 + -3398 * 2 + 16562:
    case -793 * -1 + -1 * -11009 + -6049 * 1:
    case 5535:
    case -10210 + 69 * 53 + 11998:
    case 25 * -131 + -7600 + 16576:
    case -3730 + 1 * 8663:
    case -15654 + 9 * 2259:
    case -3384 + -743 * -6 + 13 * 343:
    case 5819 + -82 * -96 + -2634 * 3:
    case 5021:
    case -1526 * -4 + -8885 + 3773 * 2:
      if (Ue(t) - (-6105 + -5053 * -1 + 1053) - i > 3370 + 1 * -4359 + 199 * 5)
        switch (xe(t, i + (5 * 1553 + 1990 + -4877 * 2))) {
          case 40 * -46 + 9784 + -7835:
            if (xe(t, i + (1 * -4542 + 4077 * 1 + 469)) !== 45)
              break;
          case -15262 + 668 * 23:
            return L(t, /(.+:)(.+)-([^]+)/, "$1" + U + "$2-$3$1" + yn + (xe(t, i + (1 * 2558 + -262 * -27 + -9629)) == -1186 + 4397 * -1 + 5691 ? "$3" : "$2-$3")) + t;
          case 3539 * 1 + 4568 + -7992:
            return ~oo(t, "stretch") ? bg(L(t, "stretch", "fill-available"), i, e) + t : t;
        }
      break;
    case 1 * 7561 + 5353 + 3881 * -2:
    case -79 * 11 + -2194 * 5 + 7 * 2537:
      return L(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, r, a, g, s, x) {
        return q + o + ":" + r + x + (a ? q + o + "-span:" + (g ? s : +s - +r) + x : "") + t;
      });
    case -1 * -1487 + -6639 + 10101:
      if (xe(t, i + (-9197 * 1 + -50 * -179 + 253)) === 3429 + 2 * -1654)
        return L(t, ":", ":" + U) + t;
      break;
    case 2748 + -705 * 18 + 16386:
      switch (xe(t, xe(t, -6495 * -1 + -7269 + 788 * 1) === 2432 * 1 + 2405 + -4792 ? -233 * -3 + -8946 * -1 + -9627 : 11)) {
        case -4495 + -2 * 1695 + -5 * -1601:
          return L(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + U + (xe(t, 753 * 5 + -2 * 1381 + 23 * -43) === 1 * -1655 + -9632 + 11332 ? "inline-" : "") + "box$3$1" + U + "$2$3$1" + q + "$2box$3") + t;
        case -5638 + -151 * -38:
          return L(t, ":", ":" + q) + t;
      }
      break;
    case -10016 + -9 * -1269 + 4314:
    case 7 * 758 + -2485 + 3 * -58:
    case 3914 + -38 * -53 + -1 * 3793:
    case 7 * 1279 + 113 * -73 + -1 * -3223:
    case 2391:
      return L(t, "scroll-", "scroll-snap-") + t;
  }
  return t;
}
function Co(t, i) {
  for (var e = "", n = -2726 + -6 * 1454 + -1145 * -10; n < t.length; n++)
    e += i(t[n], n, t, i) || "";
  return e;
}
function Ac(t, i, e, n) {
  switch (t.type) {
    case nc:
      if (t.children.length)
        break;
    case tc:
    case _i:
      return t.return = t.return || t.value;
    case Ag:
      return "";
    case pg:
      return t.return = t.value + "{" + Co(t.children, n) + "}";
    case ko:
      if (!Ue(t.value = t.props.join(",")))
        return "";
  }
  return Ue(e = Co(t.children, n)) ? t.return = t.value + "{" + e + "}" : "";
}
function pc(t) {
  var i = hg(t);
  return function(e, n, o, r) {
    for (var a = "", g = 3 * 2988 + -5 * -1793 + -17929; g < i; g++)
      a += t[g](e, n, o, r) || "";
    return a;
  };
}
function fc(t) {
  return function(i) {
    i.root || (i = i.return) && t(i);
  };
}
function hc(t, i, e, n) {
  if (t.length > -(-9404 + 67 * -106 + 16507) && !t.return)
    switch (t.type) {
      case _i:
        t.return = bg(t.value, t.length, e);
        return;
      case pg:
        return Co([ct(t, { value: L(t.value, "@", "@" + U) })], n);
      case ko:
        if (t.length)
          return rc(e = t.props, function(o) {
            switch (it(o, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Xt(ct(t, { props: [L(o, /:(read-\w+)/, ":" + yn + "$1")] }));
                var r = {};
                r.props = [o], Xt(ct(t, r)), mi(t, { props: sa(e, n) });
                break;
              case "::placeholder":
                Xt(ct(t, { props: [L(o, /:(plac\w+)/, ":" + U + "input-$1")] })), Xt(ct(t, { props: [L(o, /:(plac\w+)/, ":" + yn + "$1")] })), Xt(ct(t, { props: [L(o, /:(plac\w+)/, q + "input-$1")] }));
                var a = {};
                a.props = [o], Xt(ct(t, a)), mi(t, { props: sa(e, n) });
                break;
            }
            return "";
          });
    }
}
var N = {};
N.animationIterationCount = 1, N.aspectRatio = 1, N.borderImageOutset = 1, N.borderImageSlice = 1, N.borderImageWidth = 1, N.boxFlex = 1, N.boxFlexGroup = 1, N.boxOrdinalGroup = 1, N.columnCount = 1, N.columns = 1, N.flex = 1, N.flexGrow = 1, N.flexPositive = 1, N.flexShrink = 1, N.flexNegative = 1, N.flexOrder = 1, N.gridRow = 1, N.gridRowEnd = 1, N.gridRowSpan = 1, N.gridRowStart = 1, N.gridColumn = 1, N.gridColumnEnd = 1, N.gridColumnSpan = 1, N.gridColumnStart = 1, N.msGridRow = 1, N.msGridRowSpan = 1, N.msGridColumn = 1, N.msGridColumnSpan = 1, N.fontWeight = 1, N.lineHeight = 1, N.opacity = 1, N.order = 1, N.orphans = 1, N.tabSize = 1, N.widows = 1, N.zIndex = 1, N.zoom = 1, N.WebkitLineClamp = 1, N.fillOpacity = 1, N.floodOpacity = 1, N.stopOpacity = 1, N.strokeDasharray = 1, N.strokeDashoffset = 1, N.strokeMiterlimit = 1, N.strokeOpacity = 1, N.strokeWidth = 1;
var mc = N, M = {}, Ht = typeof process < "u" && void (3967 * -1 + 1 * -9404 + 13371) !== M && (M.REACT_APP_SC_ATTR || M.SC_ATTR) || "data-styled", tr = typeof window < "u" && "HTMLElement" in window, bc = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && M !== void 0 && void (-16 * -68 + 7036 + -8124) !== M.REACT_APP_SC_DISABLE_SPEEDY && M.REACT_APP_SC_DISABLE_SPEEDY !== "" ? M.REACT_APP_SC_DISABLE_SPEEDY !== "false" && M.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (261 * -29 + -8217 + -5262 * -3) !== M && void (-7071 + 999 * 2 + 5073) !== M.SC_DISABLE_SPEEDY && M.SC_DISABLE_SPEEDY !== "" ? M.SC_DISABLE_SPEEDY !== "false" && M.SC_DISABLE_SPEEDY : M.NODE_ENV !== "production"), xa = /invalid hook call/i, Jn = /* @__PURE__ */ new Set(), yc = function(t, i) {
  if (M.NODE_ENV !== "production") {
    var e = i ? ' with the id of "'.concat(i, '"') : "", n = "The component ".concat(t).concat(e, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var r = !0;
      console.error = function(a) {
        for (var g = [], s = 118 * 24 + 8246 + -53 * 209; s < arguments.length; s++)
          g[s - (4689 + -2789 * 1 + -1899)] = arguments[s];
        xa.test(a) ? (r = !1, Jn.delete(n)) : o.apply(void (151 * -22 + 107 * 71 + 95 * -45), _t([a], g, !1));
      }, At(), r && !Jn.has(n) && (console.warn(n), Jn.add(n));
    } catch (a) {
      xa.test(a.message) && Jn.delete(n);
    } finally {
      console.error = o;
    }
  }
}, Oo = Object.freeze([]), on = Object.freeze({});
function vc(t, i, e) {
  return void (-5549 + -1 * 2117 + -2 * -3833) === e && (e = on), t.theme !== e.theme && t.theme || i || e.theme;
}
var vi = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), wc = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Bc = /(^-|-$)/g;
function la(t) {
  return t.replace(wc, "-").replace(Bc, "");
}
var Sc = /(a)(d)/gi, ua = function(t) {
  return String.fromCharCode(t + (t > 25 ? 10 * 906 + 565 * -11 + -2806 : -6018 + 484 * 1 + -1 * -5631));
};
function wi(t) {
  var i, e = "";
  for (i = Math.abs(t); i > -4 * -5 + 26 * -99 + 2606; i = i / 52 | -2845 * -1 + -6 * -138 + -3673 * 1)
    e = ua(i % (-187 + -88 * -97 + -1 * 8297)) + e;
  return (ua(i % (-281 * -8 + 8705 + -11 * 991)) + e).replace(Sc, "$1-$2");
}
var ni, wt = function(t, i) {
  for (var e = i.length; e; )
    t = (1 * 667 + 927 * -2 + 2 * 610) * t ^ i.charCodeAt(--e);
  return t;
}, yg = function(t) {
  return wt(-3939 + -932 * -10, t);
};
function Gc(t) {
  return wi(yg(t) >>> -62 * 27 + 4641 + -2967);
}
function vg(t) {
  return M.NODE_ENV !== "production" && typeof t == "string" && t || t.displayName || t.name || "Component";
}
function oi(t) {
  return typeof t == "string" && (M.NODE_ENV === "production" || t.charAt(-1 * -6682 + -1480 + -578 * 9) === t.charAt(-4 * 259 + -1432 + 2468).toLowerCase());
}
var He = {};
He.childContextTypes = !0, He.contextType = !0, He.contextTypes = !0, He.defaultProps = !0, He.displayName = !0, He.getDefaultProps = !0, He.getDerivedStateFromError = !0, He.getDerivedStateFromProps = !0, He.mixins = !0, He.propTypes = !0, He.type = !0;
var It = {};
It.name = !0, It.length = !0, It.prototype = !0, It.caller = !0, It.callee = !0, It.arguments = !0, It.arity = !0;
var yt = {};
yt.$$typeof = !0, yt.compare = !0, yt.defaultProps = !0, yt.displayName = !0, yt.propTypes = !0, yt.type = !0;
var jt = {};
jt.$$typeof = !0, jt.render = !0, jt.defaultProps = !0, jt.displayName = !0, jt.propTypes = !0;
var wg = typeof Symbol == "function" && Symbol.for, Bg = wg ? Symbol.for("react.memo") : 1 * -11741 + 67357 * 1 + 4499, Zc = wg ? Symbol.for("react.forward_ref") : 60112, kc = He, Kc = It, Sg = yt, Hc = ((ni = {})[Zc] = jt, ni[Bg] = Sg, ni);
function Ca(t) {
  return ("type" in (i = t) && i.type.$$typeof) === Bg ? Sg : "$$typeof" in t ? Hc[t.$$typeof] : kc;
  var i;
}
var Wc = Object.defineProperty, Oc = Object.getOwnPropertyNames, da = Object.getOwnPropertySymbols, Rc = Object.getOwnPropertyDescriptor, Vc = Object.getPrototypeOf, Aa = Object.prototype;
function Gg(t, i, e) {
  if (typeof i != "string") {
    if (Aa) {
      var n = Vc(i);
      n && n !== Aa && Gg(t, n, e);
    }
    var o = Oc(i);
    da && (o = o.concat(da(i)));
    for (var r = Ca(t), a = Ca(i), g = 623 + 6416 * -1 + 1931 * 3; g < o.length; ++g) {
      var s = o[g];
      if (!(s in Kc || e && e[s] || a && s in a || r && s in r)) {
        var x = Rc(i, s);
        try {
          Wc(t, s, x);
        } catch {
        }
      }
    }
  }
  return t;
}
function rn(t) {
  return typeof t == "function";
}
function nr(t) {
  return typeof t == "object" && "styledComponentId" in t;
}
function St(t, i) {
  return t && i ? "".concat(t, " ").concat(i) : t || i || "";
}
function pa(t, i) {
  if (-164 * 21 + 1 * -4499 + 7943 === t.length)
    return "";
  for (var e = t[5811 + -8837 * 1 + -1513 * -2], n = 1 * 6374 + -32 + -17 * 373; n < t.length; n++)
    e += i ? i + t[n] : t[n];
  return e;
}
function an(t) {
  return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
}
function Bi(t, i, e) {
  if (void (743 + 1 * -3513 + 2770) === e && (e = !1), !e && !an(t) && !Array.isArray(t))
    return i;
  if (Array.isArray(i))
    for (var n = -1 * -5237 + -8417 * -1 + -13654; n < i.length; n++)
      t[n] = Bi(t[n], i[n]);
  else if (an(i))
    for (var n in i)
      t[n] = Bi(t[n], i[n]);
  return t;
}
function or(t, i) {
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
var Ec = M.NODE_ENV !== "production" ? ce : {};
function Pc() {
  for (var t = [], i = 9630 + 59 * 55 + -1 * 12875; i < arguments.length; i++)
    t[i] = arguments[i];
  for (var e = t[5357 + 191 * -43 + 8 * 357], n = [], o = 1, r = t.length; o < r; o += -2040 + -305 * 5 + -2 * -1783)
    n.push(t[o]);
  return n.forEach(function(a) {
    e = e.replace(/%[a-z]/, a);
  }), e;
}
function cn(t) {
  for (var i = [], e = 7889 + -8947 * -1 + -16835; e < arguments.length; e++)
    i[e - (-2019 * 1 + -9099 + 1 * 11119)] = arguments[e];
  return M.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(i.length > 3275 + -655 * 5 ? " Args: ".concat(i.join(", ")) : "")) : new Error(Pc.apply(void (6218 + -907 * 4 + 35 * -74), _t([Ec[t]], i, !1)).trim());
}
var Nc = function() {
  function t(i) {
    this.groupSizes = new Uint32Array(-12435 + -11 * -1177), this.length = 1823 * 1 + 7833 * 1 + 1143 * -8, this.tag = i;
  }
  return t.prototype.indexOfGroup = function(i) {
    for (var e = 3576 * 1 + 7641 + -11217 * 1, n = -1 * -1621 + -4894 * -2 + -11409; n < i; n++)
      e += this.groupSizes[n];
    return e;
  }, t.prototype.insertRules = function(i, e) {
    if (i >= this.groupSizes.length) {
      for (var n = this.groupSizes, o = n.length, r = o; i >= r; )
        if ((r <<= 3802 + -106 * -89 + 2647 * -5) < -2470 + -1 * 6969 + -1 * -9439)
          throw cn(-12125 + -639 * -19, "".concat(i));
      this.groupSizes = new Uint32Array(r), this.groupSizes.set(n), this.length = r;
      for (var a = o; a < r; a++)
        this.groupSizes[a] = -11 * -226 + 9 * -27 + -2243;
    }
    for (var g = this.indexOfGroup(i + (1149 + 221 * 37 + 25 * -373)), s = (a = 7387 + -3041 * 1 + -4346, e.length); a < s; a++)
      this.tag.insertRule(g, e[a]) && (this.groupSizes[i]++, g++);
  }, t.prototype.clearGroup = function(i) {
    if (i < this.length) {
      var e = this.groupSizes[i], n = this.indexOfGroup(i), o = n + e;
      this.groupSizes[i] = 1294 * -1 + 2 * -1799 + -1 * -4892;
      for (var r = n; r < o; r++)
        this.tag.deleteRule(n);
    }
  }, t.prototype.getGroup = function(i) {
    var e = "";
    if (i >= this.length || -369 + 6899 * 1 + -6530 === this.groupSizes[i])
      return e;
    for (var n = this.groupSizes[i], o = this.indexOfGroup(i), r = o + n, a = o; a < r; a++)
      e += "".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);
    return e;
  }, t;
}(), ao = /* @__PURE__ */ new Map(), Ao = /* @__PURE__ */ new Map(), go = -1 * 6831 + 7720 * -1 + -17 * -856, Un = function(t) {
  if (ao.has(t))
    return ao.get(t);
  for (; Ao.has(go); )
    go++;
  var i = go++;
  if (M.NODE_ENV !== "production" && ((268 * 7 + 1922 + 1 * -3798 | i) < -73 * 99 + -4624 + 11851 || i > 50 * -29289059 + 1781028201 + 757166573))
    throw cn(16, "".concat(i));
  return ao.set(t, i), Ao.set(i, t), i;
}, Yc = function(t, i) {
  go = i + (1 * 3886 + 4976 + -8861), ao.set(t, i), Ao.set(i, t);
}, Lc = "style[".concat(Ht, "][").concat("data-styled-version", '="').concat("6.1.1", '"]'), Tc = new RegExp("^".concat(Ht, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Fc = function(t, i, e) {
  for (var n, o = e.split(","), r = 2867 * -3 + 1 * 6143 + 2458, a = o.length; r < a; r++)
    (n = o[r]) && t.registerName(i, n);
}, Dc = function(t, i) {
  for (var e, n = ((e = i.textContent) !== null && void (-862 * -1 + -1 * 1831 + 969) !== e ? e : "").split(`/*!sc*/
`), o = [], r = 1 * 3062 + 1201 + -4263, a = n.length; r < a; r++) {
    var g = n[r].trim();
    if (g) {
      var s = g.match(Tc);
      if (s) {
        var x = 0 | parseInt(s[1], 10), C = s[-118 + 15 * 8];
        5702 + 1 * -5702 !== x && (Yc(C, x), Fc(t, C, s[-1 * -5151 + 1125 * 6 + -11898]), t.getTag().insertRules(x, o)), o.length = -127 * 17 + 7 * -898 + 8445;
      } else
        o.push(g);
    }
  }
};
function Xc() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Zg = function(t) {
  var i = document.head, e = t || i, n = document.createElement("style"), o = function(g) {
    var s = Array.from(g.querySelectorAll("style[".concat(Ht, "]")));
    return s[s.length - (-823 * -5 + 3814 + 7928 * -1)];
  }(e), r = void (-6836 + -1 * -6836) !== o ? o.nextSibling : null;
  n.setAttribute(Ht, "active"), n.setAttribute("data-styled-version", "6.1.1");
  var a = Xc();
  return a && n.setAttribute("nonce", a), e.insertBefore(n, r), n;
}, jc = function() {
  function t(i) {
    this.element = Zg(i), this.element.appendChild(document.createTextNode("")), this.sheet = function(e) {
      if (e.sheet)
        return e.sheet;
      for (var n = document.styleSheets, o = -4340 + 26 * 38 + 3352, r = n.length; o < r; o++) {
        var a = n[o];
        if (a.ownerNode === e)
          return a;
      }
      throw cn(337 * -14 + -297 * -9 + 2062 * 1);
    }(this.element), this.length = -676 + -1 * -676;
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
}(), Mc = function() {
  function t(i) {
    this.element = Zg(i), this.nodes = this.element.childNodes, this.length = 6022 + 6022 * -1;
  }
  return t.prototype.insertRule = function(i, e) {
    if (i <= this.length && i >= -7330 + 1 * -4787 + 12117) {
      var n = document.createTextNode(e);
      return this.element.insertBefore(n, this.nodes[i] || null), this.length++, !0;
    }
    return !1;
  }, t.prototype.deleteRule = function(i) {
    this.element.removeChild(this.nodes[i]), this.length--;
  }, t.prototype.getRule = function(i) {
    return i < this.length ? this.nodes[i].textContent : "";
  }, t;
}(), Jc = function() {
  function t(i) {
    this.rules = [], this.length = -2732 * -2 + 7633 + 1 * -13097;
  }
  return t.prototype.insertRule = function(i, e) {
    return i <= this.length && (this.rules.splice(i, 456 * -7 + 8941 + -5749, e), this.length++, !0);
  }, t.prototype.deleteRule = function(i) {
    this.rules.splice(i, 4283 * 2 + -3888 + -1559 * 3), this.length--;
  }, t.prototype.getRule = function(i) {
    return i < this.length ? this.rules[i] : "";
  }, t;
}(), fa = tr, Uc = { isServer: !tr, useCSSOMInjection: !bc }, kg = function() {
  function t(i, e, n) {
    void (1 * 3169 + -666 * 10 + 3491) === i && (i = on), void (44 + -22 * 2) === e && (e = {});
    var o = this;
    this.options = ye(ye({}, Uc), i), this.gs = e, this.names = new Map(n), this.server = !!i.isServer, !this.server && tr && fa && (fa = !1, function(r) {
      for (var a = document.querySelectorAll(Lc), g = -3583 + -14 * -133 + 1721, s = a.length; g < s; g++) {
        var x = a[g];
        x && x.getAttribute(Ht) !== "active" && (Dc(r, x), x.parentNode && x.parentNode.removeChild(x));
      }
    }(this)), or(this, function() {
      return function(r) {
        for (var a = r.getTag(), g = a.length, s = "", x = function(u) {
          var f = function(k) {
            return Ao.get(k);
          }(u);
          if (void (13415 + -13415 * 1) === f)
            return "continue";
          var p = r.names.get(f), v = a.getGroup(u);
          if (void (131 * -13 + 4 * -2137 + 10251) === p || -1 * 8511 + -2779 + 11290 === v.length)
            return "continue";
          var E = "".concat(Ht, ".g").concat(u, '[id="').concat(f, '"]'), S = "";
          void (-6828 + -3 * -2276) !== p && p.forEach(function(k) {
            k.length > 9143 + -1 * 9143 && (S += "".concat(k, ","));
          }), s += "".concat(v).concat(E, '{content:"').concat(S, '"}').concat(`/*!sc*/
`);
        }, C = 8760 + 8433 * 1 + -17193; C < g; C++)
          x(C);
        return s;
      }(o);
    });
  }
  return t.registerId = function(i) {
    return Un(i);
  }, t.prototype.reconstructWithOptions = function(i, e) {
    return void (37 * 83 + 2223 + 2647 * -2) === e && (e = !0), new t(ye(ye({}, this.options), i), this.gs, e && this.names || void (-8 * -686 + -1133 * -8 + -14552));
  }, t.prototype.allocateGSInstance = function(i) {
    return this.gs[i] = (this.gs[i] || -3884 + 2656 * 2 + -34 * 42) + (-9 * 211 + -6403 + -437 * -19);
  }, t.prototype.getTag = function() {
    return this.tag || (this.tag = (i = function(e) {
      var n = e.useCSSOMInjection, o = e.target;
      return e.isServer ? new Jc(o) : n ? new jc(o) : new Mc(o);
    }(this.options), new Nc(i)));
    var i;
  }, t.prototype.hasNameForId = function(i, e) {
    return this.names.has(i) && this.names.get(i).has(e);
  }, t.prototype.registerName = function(i, e) {
    if (Un(i), this.names.has(i))
      this.names.get(i).add(e);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(e), this.names.set(i, n);
    }
  }, t.prototype.insertRules = function(i, e, n) {
    this.registerName(i, e), this.getTag().insertRules(Un(i), n);
  }, t.prototype.clearNames = function(i) {
    this.names.has(i) && this.names.get(i).clear();
  }, t.prototype.clearRules = function(i) {
    this.getTag().clearGroup(Un(i)), this.clearNames(i);
  }, t.prototype.clearTag = function() {
    this.tag = void (-126 * 47 + 2793 + 3129);
  }, t;
}(), Qc = /&/g, zc = /^\s*\/\/.*$/gm;
function Kg(t, i) {
  return t.map(function(e) {
    return e.type === "rule" && (e.value = "".concat(i, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(i, " ")), e.props = e.props.map(function(n) {
      return "".concat(i, " ").concat(n);
    })), Array.isArray(e.children) && e.type !== "@keyframes" && (e.children = Kg(e.children, i)), e;
  });
}
function Hg(t) {
  var i, e, n, o = t === void 0 ? on : t, r = o.options, a = void (-6507 + -131 * 1 + 6638) === r ? on : r, g = o.plugins, s = void (2474 * 1 + -7001 * 1 + 4527) === g ? Oo : g, x = function(f, p, v) {
    return v === e || v.startsWith(e) && v.endsWith(e) && v.replaceAll(e, "").length > -5 * -1454 + -2315 + 5 * -991 ? ".".concat(i) : f;
  }, C = s.slice();
  C.push(function(f) {
    f.type === ko && f.value.includes("&") && (f.props[-1849 * -2 + -4247 + 549] = f.props[6 * 547 + 597 * -14 + 5076].replace(Qc, e).replace(n, x));
  }), a.prefix && C.push(hc), C.push(Ac);
  var u = function(f, p, v, E) {
    void (2 * 797 + -9045 + 1 * 7451) === p && (p = ""), void (1 * -7289 + 2 * 2589 + 2111) === v && (v = ""), void (1 * 8709 + 7723 * -1 + -986) === E && (E = "&"), i = E, e = p, n = new RegExp("\\".concat(e, "\\b"), "g");
    var S = f.replace(zc, ""), k = Cc(v || p ? "".concat(v, " ").concat(p, " { ").concat(S, " }") : S);
    a.namespace && (k = Kg(k, a.namespace));
    var Z = [];
    return Co(k, pc(C.concat(fc(function(O) {
      return Z.push(O);
    })))), Z;
  };
  return u.hash = s.length ? s.reduce(function(f, p) {
    return p.name || cn(-43 * 109 + 1 * -7034 + -5868 * -2), wt(f, p.name);
  }, -6705 + 113 * 74 + -4 * -931).toString() : "", u;
}
var $c = new kg(), Si = Hg(), ir = Kt.createContext({ shouldForwardProp: void (3825 + -2 * 809 + -2207), styleSheet: $c, stylis: Si });
ir.Consumer;
var qc = Kt.createContext(void (-704 + 2614 * -1 + 3318));
function Gi() {
  return Go(ir);
}
function _c(t) {
  var i = Le(t.stylisPlugins), e = i[1877 * 3 + -63 + -116 * 48], n = i[-9 * -564 + -11 * -429 + 1 * -9794], o = Gi().styleSheet, r = ze(function() {
    var C = o, u = {};
    return u.useCSSOMInjection = !1, t.sheet ? C = t.sheet : t.target && (C = C.reconstructWithOptions({ target: t.target }, !1)), t.disableCSSOMInjection && (C = C.reconstructWithOptions(u)), C;
  }, [t.disableCSSOMInjection, t.sheet, t.target, o]), a = ze(function() {
    var C = {};
    C.namespace = t.namespace, C.prefix = t.enableVendorPrefixes;
    var u = {};
    return u.options = C, u.plugins = e, Hg(u);
  }, [t.enableVendorPrefixes, t.namespace, e]);
  le(function() {
    ec(e, t.stylisPlugins) || n(t.stylisPlugins);
  }, [t.stylisPlugins]);
  var g = ze(function() {
    var C = {};
    return C.shouldForwardProp = t.shouldForwardProp, C.styleSheet = r, C.stylis = a, C;
  }, [t.shouldForwardProp, r, a]), s = {};
  s.value = g;
  var x = {};
  return x.value = a, Kt.createElement(ir.Provider, s, Kt.createElement(qc.Provider, x, t.children));
}
var ha = function() {
  function t(i, e) {
    var n = this;
    this.inject = function(o, r) {
      void (7829 + 7829 * -1) === r && (r = Si);
      var a = n.name + r.hash;
      o.hasNameForId(n.id, a) || o.insertRules(n.id, a, r(n.rules, a, "@keyframes"));
    }, this.name = i, this.id = "sc-keyframes-".concat(i), this.rules = e, or(this, function() {
      throw cn(13628 + 368 * -37, String(n.name));
    });
  }
  return t.prototype.getName = function(i) {
    return void (288 * -9 + -3922 * 2 + 10436) === i && (i = Si), this.name + i.hash;
  }, t;
}(), eI = function(t) {
  return t >= "A" && t <= "Z";
};
function ma(t) {
  for (var i = "", e = 0; e < t.length; e++) {
    var n = t[e];
    if (-2737 + 2 * 1369 === e && n === "-" && t[-3431 + -47 * -73] === "-")
      return t;
    eI(n) ? i += "-" + n.toLowerCase() : i += n;
  }
  return i.startsWith("ms-") ? "-" + i : i;
}
var Wg = function(t) {
  return t == null || t === !1 || t === "";
}, Og = function(t) {
  var i, e, n = [];
  for (var o in t) {
    var r = t[o];
    t.hasOwnProperty(o) && !Wg(r) && (Array.isArray(r) && r.isCss || rn(r) ? n.push("".concat(ma(o), ":"), r, ";") : an(r) ? n.push.apply(n, _t(_t(["".concat(o, " {")], Og(r), !1), ["}"], !1)) : n.push("".concat(ma(o), ": ").concat((i = o, (e = r) == null || typeof e == "boolean" || e === "" ? "" : typeof e != "number" || 1114 * 1 + 1 * -333 + -781 === e || i in mc || i.startsWith("--") ? String(e).trim() : "".concat(e, "px")), ";")));
  }
  return n;
};
function kt(t, i, e, n) {
  if (Wg(t))
    return [];
  if (nr(t))
    return [".".concat(t.styledComponentId)];
  if (rn(t)) {
    if (!rn(r = t) || r.prototype && r.prototype.isReactComponent || !i)
      return [t];
    var o = t(i);
    return M.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof ha || an(o) || o === null || console.error("".concat(vg(t), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), kt(o, i, e, n);
  }
  var r;
  return t instanceof ha ? e ? (t.inject(e, n), [t.getName(n)]) : [t] : an(t) ? Og(t) : Array.isArray(t) ? Array.prototype.concat.apply(Oo, t.map(function(a) {
    return kt(a, i, e, n);
  })) : [t.toString()];
}
function tI(t) {
  for (var i = -1969 * -3 + -33 * 139 + -1320; i < t.length; i += 9485 + 10 * -261 + -6874) {
    var e = t[i];
    if (rn(e) && !nr(e))
      return !1;
  }
  return !0;
}
var nI = yg("6.1.1"), oI = function() {
  function t(i, e, n) {
    this.rules = i, this.staticRulesId = "", this.isStatic = M.NODE_ENV === "production" && (void (9363 + -7589 * -1 + -326 * 52) === n || n.isStatic) && tI(i), this.componentId = e, this.baseHash = wt(nI, e), this.baseStyle = n, kg.registerId(e);
  }
  return t.prototype.generateAndInjectStyles = function(i, e, n) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(i, e, n) : "";
    if (this.isStatic && !n.hash)
      if (this.staticRulesId && e.hasNameForId(this.componentId, this.staticRulesId))
        o = St(o, this.staticRulesId);
      else {
        var r = pa(kt(this.rules, i, e, n)), a = wi(wt(this.baseHash, r) >>> -5995 + 55 * 109);
        if (!e.hasNameForId(this.componentId, a)) {
          var g = n(r, ".".concat(a), void 0, this.componentId);
          e.insertRules(this.componentId, a, g);
        }
        o = St(o, a), this.staticRulesId = a;
      }
    else {
      for (var s = wt(this.baseHash, n.hash), x = "", C = -7267 * 1 + -8869 + 16136; C < this.rules.length; C++) {
        var u = this.rules[C];
        if (typeof u == "string")
          x += u, M.NODE_ENV !== "production" && (s = wt(s, u));
        else if (u) {
          var f = pa(kt(u, i, e, n));
          s = wt(s, f + C), x += f;
        }
      }
      if (x) {
        var p = wi(s >>> 0);
        e.hasNameForId(this.componentId, p) || e.insertRules(this.componentId, p, n(x, ".".concat(p), void (4105 * 2 + -8912 + 702), this.componentId)), o = St(o, p);
      }
    }
    return o;
  }, t;
}(), Rg = Kt.createContext(void (9479 * 1 + 172 * 53 + -18595));
Rg.Consumer;
var ii = {}, ba = /* @__PURE__ */ new Set();
function iI(t, i, e) {
  var n = nr(t), o = t, r = !oi(t), a = i.attrs, g = a === void 0 ? Oo : a, s = i.componentId, x = void (-1 * -933 + 6157 + -7090) === s ? function(T, j) {
    var H = typeof T != "string" ? "sc" : la(T);
    ii[H] = (ii[H] || 1923 * 1 + 6143 + -74 * 109) + (2051 * -1 + -433 * 16 + 8980);
    var $ = "".concat(H, "-").concat(Gc("6.1.1" + H + ii[H]));
    return j ? "".concat(j, "-").concat($) : $;
  }(i.displayName, i.parentComponentId) : s, C = i.displayName, u = void (-498 * 1 + 212 + 26 * 11) === C ? function(T) {
    return oi(T) ? "styled.".concat(T) : "Styled(".concat(vg(T), ")");
  }(t) : C, f = i.displayName && i.componentId ? "".concat(la(i.displayName), "-").concat(i.componentId) : i.componentId || x, p = n && o.attrs ? o.attrs.concat(g).filter(Boolean) : g, v = i.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var E = o.shouldForwardProp;
    if (i.shouldForwardProp) {
      var S = i.shouldForwardProp;
      v = function(T, j) {
        return E(T, j) && S(T, j);
      };
    } else
      v = E;
  }
  var k = new oI(e, f, n ? o.componentStyle : void (9717 * -1 + 1172 + -8545 * -1));
  function Z(T, j) {
    return function(H, $, z) {
      var te = H.attrs, he = H.componentStyle, ne = H.defaultProps, Xe = H.foldedComponentIds, me = H.styledComponentId, ae = H.target, de = Kt.useContext(Rg), ve = Gi(), Ve = H.shouldForwardProp || ve.shouldForwardProp;
      M.NODE_ENV !== "production" && Ai(me);
      var we = function(pt, ft, Ge) {
        var Ze = {};
        Ze.className = void (-2431 + 19 * -277 + 7694), Ze.theme = Ge;
        for (var _e, Pe = ye(ye({}, ft), Ze), Et = 215 * 1 + -4229 * 1 + 4014; Et < pt.length; Et += -194 * -3 + 4466 + -5047) {
          var ke = rn(_e = pt[Et]) ? _e(Pe) : _e;
          for (var Ne in ke)
            Pe[Ne] = Ne === "className" ? St(Pe[Ne], ke[Ne]) : Ne === "style" ? ye(ye({}, Pe[Ne]), ke[Ne]) : ke[Ne];
        }
        return ft.className && (Pe.className = St(Pe.className, ft.className)), Pe;
      }(te, $, vc($, de, ne) || on), je = we.as || ae, Ee = {};
      for (var Ae in we)
        void (1524 * -4 + 9909 + 1271 * -3) === we[Ae] || Ae[424 * -1 + 27 * 207 + 1033 * -5] === "$" || Ae === "as" || Ae === "theme" || (Ae === "forwardedAs" ? Ee.as = we.forwardedAs : Ve && !Ve(Ae, je) || (Ee[Ae] = we[Ae], Ve || M.NODE_ENV !== "development" || cs(Ae) || ba.has(Ae) || !vi.has(je) || (ba.add(Ae), console.warn('styled-components: it looks like an unknown prop "'.concat(Ae, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Vt = function(pt, ft) {
        var Ge = Gi(), Ze = pt.generateAndInjectStyles(ft, Ge.styleSheet, Ge.stylis);
        return M.NODE_ENV !== "production" && Ai(Ze), Ze;
      }(he, we);
      M.NODE_ENV !== "production" && H.warnTooManyClasses && H.warnTooManyClasses(Vt);
      var In = St(Xe, me);
      return Vt && (In += " " + Vt), we.className && (In += " " + we.className), Ee[oi(je) && !vi.has(je) ? "class" : "className"] = In, Ee.ref = z, fe(je, Ee);
    }(O, T, j);
  }
  Z.displayName = u;
  var O = Kt.forwardRef(Z), Q = {};
  return Q.attrs = !0, Q.componentStyle = !0, Q.displayName = !0, Q.foldedComponentIds = !0, Q.shouldForwardProp = !0, Q.styledComponentId = !0, Q.target = !0, O.attrs = p, O.componentStyle = k, O.displayName = u, O.shouldForwardProp = v, O.foldedComponentIds = n ? St(o.foldedComponentIds, o.styledComponentId) : "", O.styledComponentId = f, O.target = n ? o.target : t, Object.defineProperty(O, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(T) {
    this._foldedDefaultProps = n ? function(j) {
      for (var H = [], $ = -11056 + -11057 * -1; $ < arguments.length; $++)
        H[$ - (1 * -5792 + -6 * 412 + 8265)] = arguments[$];
      for (var z = -4157 * 2 + 4362 + 3952, te = H; z < te.length; z++)
        Bi(j, te[z], !0);
      return j;
    }({}, o.defaultProps, T) : T;
  } }), M.NODE_ENV !== "production" && (yc(u, f), O.warnTooManyClasses = /* @__PURE__ */ function(T, j) {
    var H = {}, $ = !1;
    return function(z) {
      if (!$ && (H[z] = !0, Object.keys(H).length >= 28 * 166 + -119 * 4 + -2 * 1986)) {
        var te = j ? ' with the id of "'.concat(j, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(T).concat(te, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), $ = !0, H = {};
      }
    };
  }(u, f)), or(O, function() {
    return ".".concat(O.styledComponentId);
  }), r && Gg(O, t, Q), O;
}
function ya(t, i) {
  for (var e = [t[-6812 + 1703 * 4]], n = -1 * -4579 + 1 * 7421 + -12e3, o = i.length; n < o; n += 4814 + 1 * -4813)
    e.push(i[n], t[n + (-78 * -78 + 13 * -263 + -2664)]);
  return e;
}
var va = function(t) {
  var i = {};
  return i.isCss = !0, Object.assign(t, i);
};
function rI(t) {
  for (var i = [], e = 1; e < arguments.length; e++)
    i[e - 1] = arguments[e];
  if (rn(t) || an(t)) {
    var n = t;
    return va(kt(ya(Oo, _t([n], i, !0))));
  }
  var o = t;
  return -3110 + -2 * 1361 + 5832 === i.length && -4716 + -53 * -89 === o.length && typeof o[951 + -3645 * -2 + -8241 * 1] == "string" ? kt(o) : va(kt(ya(o, i)));
}
function Zi(t, i, e) {
  if (void (3 * -439 + -941 + 2258) === e && (e = on), !i)
    throw cn(-11 * 542 + -5 * 1045 + 11188, i);
  var n = function(o) {
    for (var r = [], a = -8 * -186 + -12 * -330 + -5447 * 1; a < arguments.length; a++)
      r[a - (5132 * -1 + -4862 + -5 * -1999)] = arguments[a];
    return t(i, e, rI.apply(void (1337 * -7 + 1686 + 7673 * 1), _t([o], r, !1)));
  };
  return n.attrs = function(o) {
    return Zi(t, i, ye(ye({}, e), { attrs: Array.prototype.concat(e.attrs, o).filter(Boolean) }));
  }, n.withConfig = function(o) {
    return Zi(t, i, ye(ye({}, e), o));
  }, n;
}
var Vg = function(t) {
  return Zi(iI, t);
}, Hn = Vg;
vi.forEach(function(t) {
  Hn[t] = Vg(t);
});
M.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Qn = "__sc-".concat(Ht, "__");
M.NODE_ENV !== "production" && M.NODE_ENV !== "test" && typeof window < "u" && (window[Qn] || (window[Qn] = 1 * 1439 + 8172 + -7 * 1373), -1 * -1082 + 735 + 2 * -908 === window[Qn] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Qn] += -922 + -1 * -6841 + 269 * -22);
const aI = Hn.div`
  position: relative;
`, gI = Hn.video`
  transform: ${(t) => t.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  width: 100%;
`;
class _ extends Error {
  constructor(e, n) {
    super(e);
    D(this, "cause");
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
var so = ((t) => (t.CONTINUE_DETECTION = "continue-detection", t.SWITCH_CAMERA = "switch-camera", t.TOGGLE_MIRROR = "toggle-mirror", t))(so || {}), Eg = ((t) => (t.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", t.CONTROL = "document-auto-capture:control", t.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", t.DOCUMENT_DETECTION = "document-auto-capture:document-detection", t.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", t.STATE_CHANGED = "document-auto-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", t))(Eg || {}), lt = ((t) => (t.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", t.CONTROL = "face-auto-capture:control", t.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", t.FACE_DETECTION = "face-auto-capture:face-detection", t.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", t.STATE_CHANGED = "face-auto-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", t))(lt || {}), sI = ((t) => (t.ANIMATION_END = "magnifeye-auto-capture:animation-end", t.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", t))(sI || {}), Gn = ((t) => (t.ANIMATION_END = "smile-auto-capture:animation-end", t.STATUS_CHANGED = "smile-auto-capture:status-changed", t))(Gn || {});
const Je = {};
Je.CANDIDATE_SELECTION = "candidate_selection", Je.FACE_TOO_CLOSE = "face_too_close", Je.FACE_TOO_FAR = "face_too_far", Je.FACE_CENTERING = "face_centering", Je.FACE_NOT_PRESENT = "face_not_present", Je.SHARPNESS_TOO_LOW = "sharpness_too_low", Je.BRIGHTNESS_TOO_LOW = "brightness_too_low", Je.BRIGHTNESS_TOO_HIGH = "brightness_too_high", Je.DEVICE_PITCHED = "device_pitched";
const Ye = Je, ot = {};
ot.isPresent = Ye.FACE_NOT_PRESENT, ot.isNotPitched = Ye.DEVICE_PITCHED, ot.isNotSmall = Ye.FACE_TOO_FAR, ot.isNotLarge = Ye.FACE_TOO_CLOSE, ot.isNotOutOfBounds = Ye.FACE_CENTERING, ot.isNotDim = Ye.BRIGHTNESS_TOO_LOW, ot.isNotBright = Ye.BRIGHTNESS_TOO_HIGH, ot.isSharp = Ye.SHARPNESS_TOO_LOW;
const cI = ot, hn = {};
hn.LOADING = "LOADING", hn.ERROR = "ERROR", hn.WAITING = "WAITING", hn.RUNNING = "RUNNING";
const Qe = hn;
var II = ((t) => (t.CLOSEUP = "CLOSEUP", t.DISTANT = "DISTANT", t.MIDDLE = "MIDDLE", t))(II || {});
const ki = {};
ki.NEUTRAL = "NEUTRAL", ki.SMILE = "SMILE";
const Qt = ki, Pg = { ...Qe };
Pg.DONE = "DONE";
const vn = Pg, Ro = Qi(void 0);
Ro.displayName = "AppStateContext";
function Ng() {
  const t = Go(Ro);
  if (t === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return t;
}
const xI = Ro.Provider, Vo = Ng, lI = Ng;
class Yg extends We {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var e;
    const i = new _("An unknown error has occurred");
    (e = this.context) == null || e.handleError(i);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var i;
    return ((i = this.context) == null ? void 0 : i.appState) === Qe.ERROR ? null : this.props.children;
  }
}
D(Yg, "contextType", Ro);
const uI = Hn.canvas`
  transform: ${(t) => t.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
var CI = 8239 + -1177 * 7;
function Ie(t, i, e, n, o, r) {
  var a, g, s = {};
  for (g in i)
    g == "ref" ? a = i[g] : s[g] = i[g];
  var x = {};
  x.type = t, x.props = s, x.key = e, x.ref = a, x.__k = null, x.__ = null, x.__b = 0, x.__e = null, x.__d = void 0, x.__c = null, x.constructor = void (14 * 197 + 3996 + 614 * -11), x.__v = --CI, x.__i = -(1451 * -4 + -551 + 6356), x.__u = 0, x.__source = o, x.__self = r;
  var C = x;
  if (typeof t == "function" && (a = t.defaultProps))
    for (g in a)
      void (7244 + -1275 * 6 + 406) === s[g] && (s[g] = a[g]);
  return G.vnode && G.vnode(C), C;
}
const dI = Hn.div`
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
function AI() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const pI = gg(({
  detectionDetails: t,
  isImageMirror: i
}, e) => AI() ? (console.log(t), Ie(Fe, {
  children: [Ie(uI, {
    ref: e,
    $isImageMirror: i
  }), Ie(dI, {
    children: Object.entries(t).map(([n, o]) => Ie("div", {
      children: [n, ": ", Ie("strong", {
        children: o
      })]
    }, n))
  })]
})) : null), fI = (t, i) => {
  const e = At(i);
  le(() => {
    e.current = i;
  }, [i]), le(() => {
    const n = (o) => e.current(o);
    return document.addEventListener(t, n), () => {
      document.removeEventListener(t, n);
    };
  }, [t]);
};
function po() {
  throw new Error("Cycle detected");
}
var hI = Symbol.for("preact-signals");
function rr() {
  if ($t > 1583 * 5 + -65 * -29 + -239 * 41)
    $t--;
  else {
    for (var t, i = !1; void (-61 * 76 + -670 + -2 * -2653) !== wn; ) {
      var e = wn;
      for (wn = void (-2139 * -1 + -2140 + 1), Ki++; void (4190 + 6 * 211 + -5456) !== e; ) {
        var n = e.o;
        if (e.o = void (1 * 3086 + 9231 + -12317), e.f &= -(9095 + 199 * 13 + -11679), !(-4627 + -597 * -12 + -2529 & e.f) && Fg(e))
          try {
            e.c();
          } catch (o) {
            !i && (t = o, i = !(5750 + 1 * -3602 + -716 * 3));
          }
        e = n;
      }
    }
    if (Ki = -15811 + -15811 * -1, $t--, i)
      throw t;
  }
}
var ie = void (1117 * 5 + 31 * 181 + -11196), wn = void (4086 * -1 + 7137 + 1 * -3051), $t = 6836 * 1 + 865 + 51 * -151, Ki = 2194 * -2 + 1068 + 40 * 83, fo = 4 * -2489 + 364 * -2 + 10684;
function Lg(t) {
  if (void (-247 * 23 + -2320 + 1143 * 7) !== ie) {
    var i = t.n;
    if (void (-8846 * 1 + -349 * -10 + 5356) === i || i.t !== ie)
      return i = { i: 0, S: t, p: ie.s, n: void (4688 + 4688 * -1), t: ie, e: void (-5 * -216 + -4335 + 93 * 35), x: void (22 * 428 + 1 * 6405 + 1217 * -13), r: i }, void (1231 * -1 + -9253 + 10484) !== ie.s && (ie.s.n = i), ie.s = i, t.n = i, -11123 + -2231 * -5 & ie.f && t.S(i), i;
    if (i.i === -1)
      return i.i = -17177 + -193 * -89, void (9064 + 22 * -412) !== i.n && (i.n.p = i.p, void (-417 + -1 * -417) !== i.p && (i.p.n = i.n), i.p = ie.s, i.n = void 0, ie.s.n = i, ie.s = i), i;
  }
}
function Ce(t) {
  this.v = t, this.i = 4465 + -1987 * 1 + 118 * -21, this.n = void (11722 + -1 * 11722), this.t = void (74 * -80 + -3523 * -1 + 141 * 17);
}
Ce.prototype.brand = hI, Ce.prototype.h = function() {
  return !(1 * -5879 + -2113 * 1 + 1332 * 6);
}, Ce.prototype.S = function(t) {
  this.t !== t && void (-1 * -6628 + -3545 * -1 + -10173) === t.e && (t.x = this.t, void (12 * -8 + -5244 + 5340) !== this.t && (this.t.e = t), this.t = t);
}, Ce.prototype.U = function(t) {
  if (this.t !== void 0) {
    var i = t.e, e = t.x;
    void (-1 * -4247 + -1969 + 17 * -134) !== i && (i.x = e, t.e = void (69 * -121 + -16 * 257 + 12461)), void (43 * 99 + 548 + -4805) !== e && (e.e = i, t.x = void (8808 + -1101 * 8)), t === this.t && (this.t = e);
  }
}, Ce.prototype.subscribe = function(t) {
  var i = this;
  return gr(function() {
    var e = i.value, n = 2745 + -839 * 4 + -1 * -643 & this.f;
    this.f &= -(7028 + 6 * -684 + -2891);
    try {
      t(e);
    } finally {
      this.f |= n;
    }
  });
}, Ce.prototype.valueOf = function() {
  return this.value;
}, Ce.prototype.toString = function() {
  return this.value + "";
}, Ce.prototype.toJSON = function() {
  return this.value;
}, Ce.prototype.peek = function() {
  return this.v;
}, Object.defineProperty(Ce.prototype, "value", { get: function() {
  var t = Lg(this);
  return void (-8018 + -38 * -211) !== t && (t.i = this.i), this.v;
}, set: function(t) {
  if (ie instanceof xt && function() {
    throw new Error("Computed cannot have side-effects");
  }(), t !== this.v) {
    Ki > 2047 + -2963 * -1 + 2455 * -2 && po(), this.v = t, this.i++, fo++, $t++;
    try {
      for (var i = this.t; i !== void 0; i = i.x)
        i.t.N();
    } finally {
      rr();
    }
  }
} });
function Tg(t) {
  return new Ce(t);
}
function Fg(t) {
  for (var i = t.s; void (5 * -511 + -8228 + -41 * -263) !== i; i = i.n)
    if (i.S.i !== i.i || !i.S.h() || i.S.i !== i.i)
      return !(1 + 2 * -2048 + 4095);
  return !1;
}
function Dg(t) {
  for (var i = t.s; void (-351 + -1 * -44 + 307) !== i; i = i.n) {
    var e = i.S.n;
    if (void (-3026 * 3 + 3649 * 2 + 1780) !== e && (i.r = e), i.S.n = i, i.i = -(-4434 + -887 * -5), void (3 * -158 + -1 * 3509 + 3983) === i.n) {
      t.s = i;
      break;
    }
  }
}
function Xg(t) {
  for (var i = t.s, e = void 0; void (8734 * -1 + 5 * -956 + -2 * -6757) !== i; ) {
    var n = i.p;
    -(-1 * 9578 + 1501 * 1 + 8078) === i.i ? (i.S.U(i), void (2566 + -1 * 2566) !== n && (n.n = i.n), void (2423 * -3 + -2200 + 1 * 9469) !== i.n && (i.n.p = n)) : e = i, i.S.n = i.r, i.r !== void 0 && (i.r = void (3320 + -359 * 8 + -448)), i = n;
  }
  t.s = e;
}
function xt(t) {
  Ce.call(this, void (265 * -32 + -8675 + 365 * 47)), this.x = t, this.s = void 0, this.g = fo - (423 * 3 + 5 * 1723 + -9883), this.f = -4716 * -2 + -7447 + -1 * 1981;
}
(xt.prototype = new Ce()).h = function() {
  if (this.f &= -(-23 * 257 + 7938 + -2024), 1 & this.f)
    return !1;
  if (4611 + 7 * 434 + -7617 == (-59 * -101 + -51 * -58 + -8881 & this.f))
    return !(5231 + -1 * -3619 + -8850);
  if (this.f &= -(5553 * -1 + 16 * 57 + -4646 * -1), this.g === fo)
    return !(6361 + 1 * -5209 + -1152);
  if (this.g = fo, this.f |= -10 * 460 + -8026 + 23 * 549, this.i > 166 + -1103 * -7 + -7887 && !Fg(this))
    return this.f &= -(6193 + -142 * 56 + 1761), !(-6073 * -1 + -25 * -290 + -13323);
  var t = ie;
  try {
    Dg(this), ie = this;
    var i = this.x();
    (-823 * 1 + -6548 + 83 * 89 & this.f || this.v !== i || 6603 + 1 * -727 + -13 * 452 === this.i) && (this.v = i, this.f &= -(-7618 + 5 * 1556 + -145), this.i++);
  } catch (e) {
    this.v = e, this.f |= 1 * 9679 + 6003 + 5222 * -3, this.i++;
  }
  return ie = t, Xg(this), this.f &= -(-8897 + 1 * 8899), !(-183 * 22 + 1 * 8270 + -2122 * 2);
}, xt.prototype.S = function(t) {
  if (void (-9 * -153 + -1 * -7421 + -8798) === this.t) {
    this.f |= -29 * 269 + -116 * -56 + 1341;
    for (var i = this.s; void (-1048 * 6 + -16 * -569 + -2816) !== i; i = i.n)
      i.S.S(i);
  }
  Ce.prototype.S.call(this, t);
}, xt.prototype.U = function(t) {
  if (void (9943 + 8873 * -1 + -1070) !== this.t && (Ce.prototype.U.call(this, t), void (4939 + -1 * 4861 + -13 * 6) === this.t)) {
    this.f &= -(9914 + -6 * 254 + -8357);
    for (var i = this.s; i !== void 0; i = i.n)
      i.S.U(i);
  }
}, xt.prototype.N = function() {
  if (!(-8776 * -1 + -9513 + -739 * -1 & this.f)) {
    this.f |= -7264 + -213 * -17 + 3649;
    for (var t = this.t; void (-4423 + 8 * 479 + 591) !== t; t = t.x)
      t.t.N();
  }
}, xt.prototype.peek = function() {
  if (this.h() || po(), -62 + -1 * -9433 + -9355 & this.f)
    throw this.v;
  return this.v;
}, Object.defineProperty(xt.prototype, "value", { get: function() {
  -16 * 401 + 3431 * 2 + -445 & this.f && po();
  var t = Lg(this);
  if (this.h(), void (27 * 204 + 6302 + -11810) !== t && (t.i = this.i), 16 & this.f)
    throw this.v;
  return this.v;
} });
function mI(t) {
  return new xt(t);
}
function jg(t) {
  var i = t.u;
  if (t.u = void (655 * -15 + -673 * -12 + 1749), typeof i == "function") {
    $t++;
    var e = ie;
    ie = void (3 * 3131 + -2526 + -6867);
    try {
      i();
    } catch (n) {
      throw t.f &= -(227 * 42 + -39 * -89 + -13003), t.f |= 2415 * 1 + -1378 + -147 * 7, ar(t), n;
    } finally {
      ie = e, rr();
    }
  }
}
function ar(t) {
  for (var i = t.s; i !== void 0; i = i.n)
    i.S.U(i);
  t.x = void (-16594 + -2 * -8297), t.s = void (3448 * 1 + -3967 * -1 + -7415 * 1), jg(t);
}
function bI(t) {
  if (ie !== this)
    throw new Error("Out-of-order effect");
  Xg(this), ie = t, this.f &= -(1 * 1879 + 5165 + 1006 * -7), -5883 * -1 + -1 * -3947 + -1637 * 6 & this.f && ar(this), rr();
}
function mn(t) {
  this.x = t, this.u = void (1 * 3415 + -863 * -11 + -12908), this.s = void (-1 * 8563 + -9369 + 17932), this.o = void (-6839 + 1 * 6839), this.f = 806 * -1 + -1932 + -1385 * -2;
}
mn.prototype.c = function() {
  var t = this.S();
  try {
    if (-7091 * -1 + -330 + -6753 & this.f || void (1 * -5047 + -1 * 8327 + -2229 * -6) === this.x)
      return;
    var i = this.x();
    typeof i == "function" && (this.u = i);
  } finally {
    t();
  }
}, mn.prototype.S = function() {
  -7813 + 4 * -836 + 11158 & this.f && po(), this.f |= 3183 + 372 * -2 + -2438, this.f &= -(-3917 + -1 * 6154 + -18 * -560), jg(this), Dg(this), $t++;
  var t = ie;
  return ie = this, bI.bind(this, t);
}, mn.prototype.N = function() {
  !(3204 + -4311 * 2 + -2710 * -2 & this.f) && (this.f |= 13 * -522 + -4879 + 11667, this.o = wn, wn = this);
}, mn.prototype.d = function() {
  this.f |= 8, -2697 + -67 * -119 + -5275 & this.f || ar(this);
};
function gr(t) {
  var i = new mn(t);
  try {
    i.c();
  } catch (e) {
    throw i.d(), e;
  }
  return i.d.bind(i);
}
var ri;
function zt(t, i) {
  G[t] = i.bind(null, G[t] || function() {
  });
}
function zn(t) {
  ri && ri(), ri = t && t.S();
}
function Mg(t) {
  var i = this, e = t.data, n = Gt(e);
  n.value = e;
  var o = ze(function() {
    for (var r = i.__v; r = r.__; )
      if (r.__c) {
        r.__c.__$f |= -2 * -4648 + -152 * -24 + -12940;
        break;
      }
    return i.__$u.c = function() {
      var a;
      !Ja(o.peek()) && -1 * -914 + -1 * -9015 + 2 * -4963 === ((a = i.base) == null ? void (-1877 * 2 + -5362 + -106 * -86) : a.nodeType) ? i.base.data = o.peek() : (i.__$f |= 3523 * 1 + 1 * 5263 + 7 * -1255, i.setState({}));
    }, mI(function() {
      var a = n.value.value;
      return a === 0 ? 0 : !(-1649 * -5 + 2 * -789 + -6667) === a ? "" : a || "";
    });
  }, []);
  return o.value;
}
Mg.displayName = "_st";
var Hi = {};
Hi.configurable = !0, Hi.value = void 0;
var Wi = {};
Wi.configurable = !(-4848 + -1212 * -4), Wi.value = Mg;
var Oi = {};
Oi.configurable = !(-411 * -18 + -1 * -4940 + -1 * 12338), Oi.get = function() {
  var t = {};
  return t.data = this, t;
};
var Ri = {};
Ri.configurable = !(3 * -756 + 2590 * -1 + 4858), Ri.value = 1;
var An = {};
An.constructor = Hi, An.type = Wi, An.props = Oi, An.__b = Ri, Object.defineProperties(Ce.prototype, An), zt("__b", function(t, i) {
  if (typeof i.type == "string") {
    var e, n = i.props;
    for (var o in n)
      if (o !== "children") {
        var r = n[o];
        r instanceof Ce && (e || (i.__np = e = {}), e[o] = r, n[o] = r.peek());
      }
  }
  t(i);
}), zt("__r", function(t, i) {
  zn();
  var e, n = i.__c;
  n && (n.__$f &= -(42 * 125 + 253 * 28 + -12332 * 1), void (915 * 5 + -4 * -1461 + -10419) === (e = n.__$u) && (n.__$u = e = function(o) {
    var r;
    return gr(function() {
      r = this;
    }), r.c = function() {
      n.__$f |= 842 * -9 + 1 * -6969 + 14548, n.setState({});
    }, r;
  }())), zn(e), t(i);
}), zt("__e", function(t, i, e, n) {
  zn(), t(i, e, n);
}), zt("diffed", function(t, i) {
  zn();
  var e;
  if (typeof i.type == "string" && (e = i.__e)) {
    var n = i.__np, o = i.props;
    if (n) {
      var r = e.U;
      if (r)
        for (var a in r) {
          var g = r[a];
          void (4024 + -5591 * 1 + -1 * -1567) !== g && !(a in n) && (g.d(), r[a] = void (9062 + 101 * 82 + -4336 * 4));
        }
      else
        e.U = r = {};
      for (var s in n) {
        var x = r[s], C = n[s];
        void (-4864 + 19 * 256) === x ? (x = yI(e, s, C, o), r[s] = x) : x.o(C, o);
      }
    }
  }
  t(i);
});
function yI(t, i, e, n) {
  var o = i in t && t.ownerSVGElement === void 0, r = Tg(e);
  return { o: function(a, g) {
    r.value = a, n = g;
  }, d: gr(function() {
    var a = r.value.value;
    n[i] !== a && (n[i] = a, o ? t[i] = a : a ? t.setAttribute(i, a) : t.removeAttribute(i));
  }) };
}
zt("unmount", function(t, i) {
  if (typeof i.type == "string") {
    var e = i.__e;
    if (e) {
      var n = e.U;
      if (n) {
        e.U = void (1 * 353 + -11 * 353 + -1765 * -2);
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
      g && (a.__$u = void (-15 * 557 + 6319 + 1018 * 2), g.d());
    }
  }
  t(i);
}), zt("__h", function(t, i, e, n) {
  (n < 6571 * 1 + 2192 + 219 * -40 || -9 * -857 + -296 + -7408 === n) && (i.__$f |= -1 * -5849 + -545 * -17 + -15112), t(i, e, n);
}), We.prototype.shouldComponentUpdate = function(t, i) {
  var e = this.__$u;
  if (!(e && e.s !== void 0 || -6763 + 896 * 6 + -1 * -1391 & this.__$f))
    return !(-8394 * -1 + -14 * -179 + 20 * -545);
  if (12863 + -5 * 2572 & this.__$f)
    return !(-4937 * 2 + 19 * -269 + 14985);
  for (var n in i)
    return !(29 * -29 + -2511 + -838 * -4);
  for (var o in t)
    if (o !== "__source" && t[o] !== this.props[o])
      return !(-2343 * 3 + 400 * 22 + -1771);
  for (var r in this.props)
    if (!(r in t))
      return !(-2 * 4635 + 40 * -13 + -55 * -178);
  return !(-7714 + -2 * -1307 + -5101 * -1);
};
function Gt(t) {
  return ze(function() {
    return Tg(t);
  }, []);
}
const vI = (t) => {
  const i = Gt(!1);
  return fI(t, (n) => {
    n.detail && (i.value = n.detail.animationEnd);
  }), i;
};
var Jg = ((t) => (t.DOCUMENT = "document-auto-capture:dev", t.FACE = "face-auto-capture:dev", t))(Jg || {});
const Vi = {};
Vi.SIMD = "simd", Vi.NO_SIMD = "no-simd";
const wa = Vi;
function Ba(t) {
  t.getTracks().forEach((e) => {
    e.stop();
  });
}
function wI(t, i) {
  if (!t)
    return i;
  const { detectionRecord: e, hashedDetectedImages: n } = t;
  i.hashedDetectedImages && (n == null || n.push(...i.hashedDetectedImages)), i.detectionRecord && (e == null || e.push(...i.detectionRecord));
  const o = { ...t };
  return o.hashedDetectedImages = n, o.detectionRecord = e, o;
}
const BI = 2192 + -4 * 548 + 0.4, SI = -529 * 11 + 221 * -3 + 6482 + 0.16, GI = -4075 + -137 * 51 + -5531 * -2 + 0.2, ZI = 1 * 497 + 993 * -9 + -844 * -10 + 0.05, kI = 7792 + -6 * -1339 + 1 * -15826 + 0.3, KI = -5 * -541 + 580 + -3285 + 0.25, HI = -1 * 6903 + 2807 + 4096 + 0.9, WI = -1 * -2696 + 118 * -22 + -1 * 70, OI = 9 + 0.8100000000000005, co = {};
co.minDuration = 1e3, co.maxDuration = 2500, co.minFrames = 10;
const ai = co, Ei = {};
Ei.max = 100, Ei.min = 10;
const Sa = Ei, RI = 1558 * -5 + -170 * 13 + 10720, VI = 200, EI = -8161 * 1 + 1 * 2819 + 5345, Ug = "AES-CBC", Qg = "RSA-OAEP", PI = "SHA-256", NI = "image/jpeg", YI = 5444 + 141 * 3 + 651 * -9, LI = 40, TI = "SAM v1.35.3 for idcards", zg = Qi(null), $g = () => {
  const t = Go(zg);
  if (!t)
    throw new Error("Missing provider for CameraOptionsContext");
  return t;
}, FI = (t) => {
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
      faceConfidence: (r == null ? void 0 : r.faceConfidence) ?? BI,
      minFaceSizeRatio: (r == null ? void 0 : r.minFaceSizeRatio) ?? SI,
      maxFaceSizeRatio: (r == null ? void 0 : r.maxFaceSizeRatio) ?? GI,
      sharpnessThreshold: (r == null ? void 0 : r.sharpnessThreshold) ?? kI,
      brightnessLowThreshold: (r == null ? void 0 : r.brightnessLowThreshold) ?? KI,
      brightnessHighThreshold: (r == null ? void 0 : r.brightnessHighThreshold) ?? HI,
      outOfBoundsThreshold: (r == null ? void 0 : r.outOfBoundsThreshold) ?? ZI,
      devicePitchAngleThreshold: (r == null ? void 0 : r.devicePitchAngleThreshold) ?? WI
    }
  };
}, DI = ({
  cameraOptions: t,
  children: i
}) => {
  const e = ze(() => ({
    faceCameraOptions: FI(t)
  }), [t]);
  return Ie(zg.Provider, {
    value: e,
    children: i
  });
}, XI = -461 * -7 + 1355 * 2 + -5937 + 0.75, jI = -3 * -113 + -3227 * -1 + -3564, MI = -8691 * -1 + -3771 + -60 * 72, JI = -1 * -2007 + 1969 + -1988 * 2, qg = (t, i) => {
  const e = {};
  e.detail = i, document.dispatchEvent(new CustomEvent(t, e));
}, vo = class vo {
  constructor() {
    D(this, "lastDetails", {});
    D(this, "delayedTime", -3343 * 2 + 19 * 479 + 105 * -23);
  }
  static getInstance() {
    return !this._instance && (this._instance = new vo()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 157 * 17 + -23 * -233 + -12 * 669;
  }
  isDetailChanged(i, e) {
    return JSON.stringify(e) !== JSON.stringify(this.lastDetails[i]) ? (this.lastDetails[i] = e, !0) : !1;
  }
  dispatchCustomEventOnChange(i, e) {
    this.isDetailChanged(i, e) && qg(i, e);
  }
  dispatchDelayedCustomEventOnChange(i, e, n) {
    const o = performance.now();
    o - this.delayedTime > n && (this.dispatchCustomEventOnChange(i, e), this.delayedTime = o);
  }
};
D(vo, "_instance");
let Zn = vo;
const Wn = Zn.getInstance(), Ga = (t, i, e = MI) => {
  const n = {};
  n.instructionCode = i;
  const o = n;
  Wn.dispatchDelayedCustomEventOnChange(t, o, e);
}, UI = (t, i) => {
  Wn.dispatchCustomEventOnChange(t, i);
}, QI = (t, i) => {
  const e = {};
  e.size = i;
  const n = e;
  Wn.dispatchCustomEventOnChange(t, n);
}, zI = (t, i, e) => {
  const n = i.confidence < e ? void 0 : i, o = {};
  o.detectedObject = n;
  const r = o;
  Wn.dispatchCustomEventOnChange(t, r);
}, $I = (t, i, e) => {
  const n = {};
  n.image = e, n.data = {}, n.data.detection = i, n.data.imageResolution = {}, n.data.imageResolution.width = e.width, n.data.imageResolution.height = e.height;
  const o = n;
  Wn.dispatchCustomEventOnChange(t, o);
}, Pi = (t, i) => {
  qg(t, i);
};
var Se = {};
Se.VITE_FACE_COUNTLY_APP_KEY = "5f83e83ee4cee1ab6e5bbf86e215644473299675", Se.VITE_MAGNIFEYE_COUNTLY_APP_KEY = "d5ca54dabfb1a2c72d7090c9c8980252a879da44", Se.VITE_DOCUMENT_COUNTLY_APP_KEY = "065cf6e242fc5e785cd17eebfbfbbd212a33133b", Se.VITE_COUNTLY_URL = "https://innovatrics.count.ly", Se.VITE_SMILE_COUNTLY_APP_KEY = "d64319129bb0ee02eccfab418edba9629a97d6b6", Se.VITE_RSA_PUBLIC_KEY = "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", Se.BASE_URL = "/", Se.MODE = "production", Se.DEV = !1, Se.PROD = !0, Se.SSR = !1, Se.VITE_PACKAGE_VERSION = "5.2.8";
var qI = Se;
const _I = () => {
  var t;
  return ((t = qI.VITE_APP_ENV) == null ? void 0 : t.toLowerCase()) === "dev";
}, ex = (t, i, e = NI) => new Promise((n) => {
  t.toBlob((o) => {
    if (!o)
      throw new Error("Canvas to Blob failed");
    n(o);
  }, e, i);
}), tx = async (t) => ex(t, 1624 * 2 + -4109 + -3 * -317), nx = (t, i) => {
  const e = document.createElement("canvas");
  e.width = i.width, e.height = i.height;
  const n = e.getContext("2d");
  if (!n)
    throw new Error("cropImage ctx error");
  return n.drawImage(t, i.shiftX, i.shiftY, i.width, i.height, 10 * 750 + 3669 + -11169, 3 * 3221 + 7211 + 118 * -143, e.width, e.height), e;
}, ox = (t) => {
  const i = t.getContext("2d");
  if (!i)
    throw new Error("getImageDataForSam ctx error");
  const { data: e } = i.getImageData(1134 + -1 * -4762 + 1 * -5896, 1 * -206 + 1831 * -5 + 9361, t.width, t.height);
  return e;
}, _g = (t, i, e, n) => {
  const o = t.getContext("2d");
  o && (o.beginPath(), n ? (o.fillStyle = e, o.fillRect(i.topLeft.x, i.topLeft.y, i.width, i.height)) : (o.strokeStyle = e, o.rect(i.topLeft.x, i.topLeft.y, i.width, i.height)), o.stroke());
}, gi = (t, i, e) => {
  const { height: n, shiftX: o, shiftY: r, width: a } = i, g = {};
  g.x = o, g.y = r;
  const s = {};
  s.topLeft = g, s.width = a, s.height = n, s.color = e, _g(t, s, e);
}, e0 = (t, i, e) => {
  const n = t.getContext("2d");
  n && (n.fillStyle = e, n.fillRect(i.x, i.y, 3 * 556 + 6476 * -1 + 1605 * 3, -8738 + -4568 * -1 + 4177), n.beginPath());
}, ix = (t, i) => {
  if (_I()) {
    const e = {};
    e.candidateSelectionImages = i;
    const n = e;
    Zn.getInstance().dispatchCustomEventOnChange(t, n);
  }
}, rx = (t, i) => {
  const { cameraResolution: e, shouldMirror: n } = i;
  le(() => {
    if (!e)
      return;
    const o = {};
    o.cameraResolution = e, o.isMirroring = n, UI(t, o);
  }, [e, n, t]);
}, t0 = (t) => t.length < 1792 + 1808 * -1 + 17 ? 5856 + -1 * -3937 + -9793 * 1 : t.reduce((e, n) => e + n, -2 * -2675 + 3 * -298 + 2228 * -2) / t.length, On = (t) => Number.parseFloat(t.toFixed(8135 + 5 * 1246 + -1 * 14362)), ax = (t) => {
  const i = t.getContext("2d");
  i && i.clearRect(2969 + 4 * 1310 + -8209, 316 * 23 + 17 * -6 + -7166, i.canvas.width, i.canvas.height);
};
class gx {
  static async getVideoInputDeviceList() {
    return (await navigator.mediaDevices.enumerateDevices()).filter((e) => e.kind === "videoinput");
  }
}
const Eo = (t, i) => Math.min(t, i), sx = (t, i) => {
  const e = Eo(i.width, i.height);
  return On(t * e);
}, n0 = ({ height: t, width: i }) => {
  const e = Eo(i, t), n = e / (1 * 1231 + -2168 * -2 + -5564) * (-9846 + 4701 * 2 + 64 * 7);
  if (i > t) {
    const r = {};
    return r.width = n, r.height = e, r;
  }
  const o = {};
  return o.width = e, o.height = n, o;
}, cx = ({ height: t, width: i }) => {
  const e = Eo(i, t) * XI, n = (i - e) / (107 * 23 + -8381 + 5922), o = (t - e) / (-8792 * -1 + -38 * 97 + -5104), r = {};
  return r.shiftX = n, r.shiftY = o, r.width = e, r.height = e, r;
}, Ix = (t, i) => sx(t, i) * jI, xx = "@innovatrics/dot-common-auto-capture", lx = "5.2.8", ux = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, Cx = {
  "@dot/proto-files": "1.0.3",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.2.2",
  comlink: "^4.4.1",
  preact: "^10.19.3",
  "styled-components": "^6.1.1",
  "wasm-feature-detect": "^1.6.1"
}, dx = {
  "@preact/preset-vite": "^2.7.0",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.3.3",
  vite: "^5.0.10",
  vitest: "^1.0.4"
}, Ax = {
  name: xx,
  private: !0,
  version: lx,
  scripts: ux,
  dependencies: Cx,
  devDependencies: dx
}, o0 = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), Za = () => {
  const t = /Android/i.test(navigator.userAgent), i = /Firefox/i.test(navigator.userAgent);
  return t && i;
}, px = () => {
  const t = navigator.userAgent.includes("Chrome"), i = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return t && i ? !1 : i;
}, Ni = (t) => new Promise((i) => {
  setTimeout(i, t);
}), Mt = (t) => JSON.parse(JSON.stringify(t, (i, e) => typeof e == "number" ? On(e) : e)), i0 = () => Ax.version, r0 = (t) => new URL(t).hostname.replace("www.", ""), fx = () => r0(window.location.href) === "localhost", $n = (t) => Object.entries(t).map(([i, e]) => encodeURIComponent(i) + "=" + encodeURIComponent(e)).join("&"), hx = (t, i) => {
  const e = t && performance.now() - t;
  return i >= ai.minFrames ? e > ai.minDuration : e > ai.maxDuration;
}, mx = (t, i) => JSON.stringify(t) === JSON.stringify(i) ? i : t;
function bx(t, i) {
  let e;
  return (...n) => {
    const o = () => {
      clearTimeout(e), e = void 0, t(...n);
    };
    e === void (-3148 + 1 * 3148) && (e = setTimeout(o, i));
  };
}
const yx = (t) => t === Eg.CONTROL ? !o0() : !0, vx = (t, i) => {
  const { appState: e, handleAppStateChange: n, handleError: o } = Vo(), [r, a] = Le(), g = ze(() => {
    const x = i == null ? void 0 : i.getCameraSettings().facingMode;
    return x ? r ?? x === "user" : r ?? yx(t);
  }, [i, r, t]);
  le(() => {
    const x = () => {
      e !== Qe.LOADING && n(Qe.RUNNING);
    }, C = () => {
      a(r === void 0 ? !g : !r);
    }, u = async () => {
      if (i) {
        n(Qe.LOADING);
        try {
          await i.switchCamera(), n(Qe.RUNNING);
        } catch (p) {
          if (p instanceof Error) {
            o(_.fromCameraError(p));
            return;
          }
        }
        a(void 0);
      }
    }, f = (p) => {
      var v;
      switch ((v = p.detail) == null ? void 0 : v["instruction"]) {
        case so.CONTINUE_DETECTION:
          x();
          break;
        case so.TOGGLE_MIRROR:
          C();
          break;
        case so.SWITCH_CAMERA:
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
}, Io = {};
Io.width = 1920, Io.height = 1080, Io.facingMode = "user";
const wx = Io;
class Bn extends gx {
  constructor(e) {
    super();
    D(this, "videoRef");
    D(this, "mediaStream", null);
    D(this, "videoTrack", null);
    D(this, "availableCameraProperties", []);
    this.videoRef = e;
  }
  async initWebcam(e = {}) {
    const n = await this.getBestCamera(e.facingMode);
    await this.getAvailableCamerasInfo();
    const o = this.getConstraints(e, n);
    await this.startWebcam(o), px() && await this.startWebcam(o);
  }
  async startWebcam(e = {}) {
    var n;
    return this.stopCamera(), Za() && await Ni(1 * 3551 + -8777 + 5676), this.mediaStream = await navigator.mediaDevices.getUserMedia(e), this.videoRef.srcObject = this.mediaStream, await this.videoRef.play(), this.videoTrack = (n = this.mediaStream) == null ? void 0 : n.getVideoTracks()[-19 * -243 + -125 + -4492], this.checkVideoTrackSettings(), this.videoTrack;
  }
  checkVideoTrackSettings() {
    var o;
    const e = (o = this.videoTrack) == null ? void 0 : o.getSettings();
    if (!(e != null && e.height) || !(e != null && e.width))
      throw new _("Could not init camera settings");
    if (Math.min(e == null ? void 0 : e.width, e == null ? void 0 : e.height) < RI)
      throw this.stopCamera(), new _("Could not init video because of low camera resolution: " + e.width + "x" + e.height + ".");
  }
  async getBestCamera(e) {
    const n = {};
    if (n.video = !0, this.mediaStream = await navigator.mediaDevices.getUserMedia(n), this.stopCamera(), o0() && e === "environment")
      return (await Bn.getVideoInputDeviceList()).find((a) => a.label.includes("back") && a.label.includes("0"));
  }
  async getAvailableCamerasInfo() {
    const e = await Bn.getVideoInputDeviceList();
    for (const n of e) {
      Za() && await Ni(-33 * -167 + 2 * -2683 + 305);
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
        o instanceof Error && _.logError(o);
      }
    }
  }
  getConstraints(e, n) {
    const o = { ...wx, ...e };
    o.deviceId = n ? { exact: n.deviceId } : void (-1965 * -4 + 1 * 5999 + -13859);
    const r = {};
    return r.video = o, r.audio = !1, r;
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
    const o = n.getContext("2d");
    if (!o)
      throw new _("Cant take photo - cant create context");
    return o.drawImage(this.videoRef, 8187 * -1 + 253 * 6 + 1 * 6669, 1641 * -1 + 9631 + -7990), n;
  }
  getCameraResolution() {
    var o;
    const e = (o = this.videoTrack) == null ? void 0 : o.getSettings();
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
    const e = this.videoTrack.getConstraints(), n = this.videoTrack.getSettings(), o = await Bn.getVideoInputDeviceList();
    if (o.length <= 1)
      return;
    const r = o.findIndex((s) => s.deviceId === n.deviceId), a = o[r + (-242 * 33 + -33 * -299 + -1880 * 1)] ?? o[3797 * -2 + 1 * 5706 + 2 * 944], g = this.getConstraints(e, a);
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
const Bx = (t, i) => {
  var s;
  const e = At(), { handleError: n, setIsCameraReady: o } = Vo(), [r, a] = Le(), g = uo((x) => {
    a((C) => mx(x, C));
  }, []);
  return le(() => ((async () => {
    if (!(t != null && t.current)) {
      n(new _("Something went wrong during video initialization"));
      return;
    }
    const C = new Bn(t.current);
    try {
      const u = {};
      u.facingMode = i, await C.initWebcam(u);
    } catch (u) {
      if (u instanceof Error) {
        n(_.fromCameraError(u));
        return;
      }
    }
    o(!0), g(C.getCameraResolution()), e.current = C;
  })(), function() {
    e.current && e.current.stopCamera();
  }), [i, n, o, t, g]), { cameraHandler: e.current, cameraSettings: (s = e.current) == null ? void 0 : s.getCameraSettings(), cameraResolution: r, onCameraResolutionChange: g };
}, Sx = (t) => {
  le(() => (window.addEventListener("beforeunload", t.endSession), () => {
    t.endSession(), window.removeEventListener("beforeunload", t.endSession);
  }), [t]);
}, Gx = (t, i) => {
  const [e, n] = Le();
  le(() => {
    const o = () => {
      !t.current || e === window.innerWidth || (n(window.innerWidth), QI(i, t.current.getBoundingClientRect()));
    };
    return o(), window.addEventListener("resize", o), () => {
      window.removeEventListener("resize", o);
    };
  }, [t, i, e]);
};
class sr extends Array {
  constructor(e) {
    super();
    D(this, "size");
    this.size = e;
  }
  pushFixed(...e) {
    if (e.length > this.size) {
      const n = e.slice(-this.size);
      this.push(...n);
      return;
    }
    this.length === this.size && this.splice(-1 * 8867 + 75 * -25 + -10742 * -1, e.length), this.push(...e);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-6422 + 1 * -4153 + 10575);
  }
}
const Zx = (t, i) => {
  const { height: e, shiftX: n, shiftY: o, width: r } = i;
  return !(t.x < n || t.x > n + r || t.y < o || t.y > o + e);
}, kx = (t, i) => Object.values(t).every((e) => Zx(e, i));
function Kx(t) {
  return On(Math.abs(t));
}
const Hx = () => {
  const [t, i] = Le(null), e = At(new sr(1 * -6176 + -1 * 4621 + 10802 * 1));
  function n(r) {
    const { z: a } = r.accelerationIncludingGravity || {};
    if (!a)
      return;
    e.current.pushFixed(Kx(a));
    const g = On(t0(e.current)), s = {};
    s.z = g, i(s);
  }
  le(() => (window.addEventListener("devicemotion", bx(n, LI), !0), () => {
    window.removeEventListener("devicemotion", n, !0);
  }), []);
  const o = {};
  return o.acceleration = t, o;
}, cr = (t) => {
  const { height: i, width: e } = n0(t), n = (t.width - e) / (-8310 + 1039 * 8), o = (t.height - i) / (-2403 + 58 * -39 + 359 * 13), r = {};
  return r.shiftX = n, r.shiftY = o, r.width = e, r.height = i, r;
}, a0 = (t, i) => {
  const { height: e, width: n } = n0(t), o = Eo(t.width, t.height), r = n - o * i * (1 * -3511 + 369 + 6 * 524), a = e - o * i * (207 * 37 + -3564 * -1 + 11221 * -1), g = (t.width - r) / (-8418 + -337 * 6 + 10442 * 1), s = (t.height - a) / (-9942 + -9944 * -1), x = {};
  return x.shiftX = g, x.shiftY = s, x.width = r, x.height = a, x;
}, si = (t, i) => {
  const { shiftX: e, shiftY: n } = cr(t), o = {};
  return o.x = i.x + e, o.y = i.y + n, o;
}, Wx = (t, i) => ({ ...i, topLeft: si(t, i.topLeft), bottomRight: si(t, i.bottomRight), faceCenter: si(t, i.faceCenter) }), g0 = (t, i) => {
  const { faceCenter: e, faceSize: n } = t, o = Ix(n, i), r = {};
  r.x = e.x, r.y = e.y - o;
  const a = {};
  a.x = e.x + o, a.y = e.y;
  const g = {};
  g.x = e.x, g.y = e.y + o;
  const s = {};
  s.x = e.x - o, s.y = e.y;
  const x = {};
  return x.top = r, x.right = a, x.bottom = g, x.left = s, Mt(x);
}, Ox = (t, i) => {
  const {
    bottomRight: e,
    faceCenter: n,
    topLeft: o
  } = i, r = {
    topLeft: o,
    width: e.x - o.x,
    height: e.y - o.y
  };
  _g(t, r, "rgba(255, 0, 0, 0.3)", !0), e0(t, n, "lime");
}, Rx = (t, i, e) => {
  const n = g0(i, e);
  Object.values(n).map((o) => e0(t, o, "orange"));
}, Vx = ({
  cameraResolution: t,
  detectionDetails: i,
  isImageMirror: e
}) => {
  const {
    faceCameraOptions: {
      thresholds: n
    }
  } = $g(), o = At(null);
  if (le(() => {
    if (!o.current)
      return;
    o.current.width = t.width, o.current.height = t.height, ax(o.current);
    const p = cr(t), v = a0(t, n.outOfBoundsThreshold), E = cx(t);
    i.value && (Ox(o.current, i.value.face), Rx(o.current, i.value.face, t), gi(o.current, p, "lime"), gi(o.current, v, "yellow"), gi(o.current, E, "blue"));
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
  return u && (f["SAM version"] = u), x.length > 0 && (f["Invalid validators"] = x.join(", ")), Ie(pI, {
    ref: o,
    cameraResolution: t,
    detectionDetails: f,
    isImageMirror: e
  });
}, Ex = async () => WebAssembly.validate(new Uint8Array([-3903 + -1 * 6641 + 4 * 2636, 2104 + 10 * 862 + 1 * -10627, 139 * -45 + -4636 + 11006, -5141 + -11 * 171 + -7131 * -1, 8307 + -3 * 1874 + -2684, 6 * -1052 + -6003 + 2463 * 5, 791 * 1 + 2387 + -3178, 344 * 25 + 3806 + -1 * 12406, 1 * 9925 + -2998 + -6926, -5532 + 1 * -8392 + 13929, 3373 + 26 * 370 + 464 * -28, 1 * 3329 + 2593 * 1 + 3 * -1942, 1046 + -137 * 22 + -4 * -492, -4 * 143 + -8806 + 9379, 10236 + 3371 * -3, -1 * 1577 + -2545 + -75 * -55, -3309 + -386 * -6 + 995, 5387 + 1492 * -5 + -1037 * -2, -315 + 24 * 409 + -9501, 9566 + -33 * 149 + 4639 * -1, -5 * -317 + -163 * 34 + 3967, -3248 + -67 * -50 + -101, -7 * -9 + -1443 + 1388 * 1, -9242 * 1 + -3209 * -3 + -385, 2617 + -56 * -167 + -11904, -3673 * 2 + 9596 + 18 * -125, 1 * -2837 + 6 * -997 + 9072, 314 * 14 + -60 * -28 + -6061, 2153 * 4 + 826 * -1 + -7533, -1 * -5197 + 1 * 1957 + -7056, -6053 + -986 * 1 + 705 * 10]));
async function Px() {
  const t = {};
  t.name = Ug, t.length = 256;
  const i = await window.crypto.subtle.generateKey(t, !0, ["encrypt", "decrypt"]), e = Uint8Array.from(Array(1484 + 268 * 3 + -71 * 32).fill(5264 + -18 * -554 + -15236)), n = window.crypto.getRandomValues(e), o = {};
  return o.key = i, o.iv = n, o;
}
async function Nx(t) {
  const { iv: i, key: e } = await Px(), n = {};
  n.name = Ug, n.iv = i;
  const o = await window.crypto.subtle.encrypt(n, e, t), r = await window.crypto.subtle.exportKey("raw", e), a = {};
  return a.message = o, a.key = r, a.iv = i, a;
}
function Yx(t) {
  const i = new ArrayBuffer(t.length), e = new Uint8Array(i);
  for (let n = -1 * 4099 + 4665 + -283 * 2, o = t.length; n < o; n++)
    e[n] = t.charCodeAt(n);
  return i;
}
function Lx() {
  const t = "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", i = window.atob(t), e = window.atob(i), n = Yx(e), o = {};
  return o.name = Qg, o.hash = PI, window.crypto.subtle.importKey("spki", n, o, !0, ["encrypt"]);
}
async function Tx(t) {
  const i = await Lx(), e = {};
  return e.name = Qg, window.crypto.subtle.encrypt(e, i, t);
}
async function Fx(t) {
  const { iv: i, key: e, message: n } = await Nx(t), o = await Tx(e), r = {};
  return r.key = o, r.iv = i, r.message = n, r;
}
async function Dx(t) {
  const i = await window.crypto.subtle.digest("SHA-1", t);
  return Array.from(new Uint8Array(i)).map((e) => e.toString(-569 + 9124 * -1 + -511 * -19).padStart(-639 + 542 * -6 + 3893, "0")).join("");
}
class Xx {
  constructor() {
    D(this, "samVersion", null);
    D(this, "isDetectorInitialized", !1);
    D(this, "isInCandidateSelection", !1);
    D(this, "lastImage", null);
    D(this, "bestImage", null);
    D(this, "detectionRecord", []);
    D(this, "candidateSelectionImages", []);
    D(this, "thresholds", null);
    D(this, "acceleration", null);
    D(this, "imagesForDuplicateDetection", new sr(VI));
  }
  async initDetector(i) {
    await this.detector.initSamModule(location.href, i);
    const e = await this.detector.getSamVersion();
    this.setSamVersion(e), this.isDetectorInitialized = !0;
  }
  async getInstructionSet() {
    return await Ex() ? wa.SIMD : wa.NO_SIMD;
  }
  async init({ thresholds: i, wasmDirectoryPath: e }) {
    this.setThresholds(i), await this.initDetector(e);
  }
  setSamVersion(i) {
    if (!i || !this.areVersionsCompatible(i))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new _("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = i;
  }
  areVersionsCompatible(i) {
    return i === TI;
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
    const e = i.length / YI, n = e / (-203 * 35 + 2 * -519 + 5 * 1629), o = i.length / (-67 * -47 + 1373 + 10 * -452), r = await Dx(i.slice(o - n, o + n));
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
    var g = "./this.program", s = !(-2905 + -1 * -2906), x = !(5808 + 1 * -5807);
    s = typeof window == "object", x = typeof importScripts == "function";
    var C = "", u;
    (s || x) && (x ? C = self.location.href : document.currentScript && (C = document.currentScript.src), t && (C = t), -5 * -502 + -3989 + 1479 !== C.indexOf("blob:") ? C = C.substr(-7260 + 163 * 35 + -5 * -311, C.lastIndexOf("/") + (-1 * 5242 + -2 * 571 + 1 * 6385)) : C = "", x && (u = function(c) {
      var I = new XMLHttpRequest();
      return I.open("GET", c, !(2 * -4857 + -87 * 101 + 18502)), I.responseType = "arraybuffer", I.send(null), new Uint8Array(I.response);
    }));
    var f = e.printErr || console.warn.bind(console);
    for (a in r)
      r.hasOwnProperty(a) && (e[a] = r[a]);
    r = null, e.thisProgram && (g = e.thisProgram);
    var p;
    e.wasmBinary && (p = e.wasmBinary), e.noExitRuntime && e.noExitRuntime, typeof WebAssembly != "object" && _e("no native wasm support detected");
    var v, E = !(-75 * -90 + 6359 * -1 + -65 * 6);
    function S(c) {
      c || _e("Assertion failed: undefined");
    }
    var k = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void (-12015 + -15 * -801);
    function Z(c, I, l) {
      var A = ne;
      if (1 * -7495 + 23 * -122 + 10301 < l) {
        l = I + l - (-328 * 8 + -1 * -3316 + -691);
        for (var m = 5992 + 721 * -11 + -277 * -7; m < c.length; ++m) {
          var b = c.charCodeAt(m);
          if (1119 * 94 + -10420 + 19735 * -2 <= b && 57343 >= b) {
            var B = c.charCodeAt(++m);
            b = 5 * -16193 + 111030 + 35471 + ((b & -1260 + -1145 * -4 + -2297) << -6958 + -212 * 14 + 9936) | B & 1023;
          }
          if (-2466 + 1 * 2593 >= b) {
            if (I >= l)
              break;
            A[I++] = b;
          } else {
            if (-4329 + 8 * 797 >= b) {
              if (I + (-4639 * -1 + 752 + -5390) >= l)
                break;
              A[I++] = 6763 + 8940 * 1 + -15511 | b >> 6;
            } else {
              if (-50811 * -2 + 2 * 5917 + -173 * 277 >= b) {
                if (I + (-2 * 3883 + -8416 + -578 * -28) >= l)
                  break;
                A[I++] = -9631 * 1 + 4545 + 5310 | b >> -2 * 2998 + 2323 * 4 + -3284;
              } else {
                if (I + (1944 + -13 * 629 + 2 * 3118) >= l)
                  break;
                A[I++] = 240 | b >> -6472 + -3 * 2307 + 13411, A[I++] = -2161 * -3 + -8719 + -1 * -2364 | b >> -1904 + 479 * 4 & -1364 + -2558 * -2 + 7 * -527;
              }
              A[I++] = -5 * 1033 + 23 * -39 + -1238 * -5 | b >> 2476 + 1 * 4981 + -7451 & 63;
            }
            A[I++] = -6456 + 5897 * -1 + 12481 | b & 1 * -4487 + 1 * -1879 + 6429;
          }
        }
        A[I] = -2 * 1366 + 3795 * -2 + 10322;
      }
    }
    var O = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void (1 * -4159 + 7456 + -3297 * 1);
    function Q(c, I) {
      for (var l = c >> 1, A = l + I / (-4646 + -39 * 93 + 8275); !(l >= A) && me[l]; )
        ++l;
      if (l <<= 6467 * -1 + -4455 + 10923, -192 + -1 * -1877 + -1653 < l - c && O)
        return O.decode(ne.subarray(c, l));
      for (l = 0, A = ""; ; ) {
        var m = Xe[c + 2 * l >> 1];
        if (m == 0 || l == I / (1318 + -4 * 7 + -1288))
          return A;
        ++l, A += String.fromCharCode(m);
      }
    }
    function T(c, I, l) {
      if (void (6562 + -193 * 34) === l && (l = 443 * -7254119 + 51 * 61826413 + -1 * -2207911301), -5909 + 257 * 23 > l)
        return 8358 + 619 * -3 + -6501;
      l -= -1 * 134 + 2870 + 1367 * -2;
      var A = I;
      l = l < (-849 * -11 + -9552 + 215) * c.length ? l / (-7400 + -573 * 4 + 74 * 131) : c.length;
      for (var m = 13133 + 1 * -13133; m < l; ++m)
        Xe[I >> -2490 * -2 + 144 * 64 + -14195] = c.charCodeAt(m), I += 2;
      return Xe[I >> 4686 + 4685 * -1] = 8369 + -8369 * 1, I - A;
    }
    function j(c) {
      return (-895 + -967 * 1 + 233 * 8) * c.length;
    }
    function H(c, I) {
      for (var l = 5 * 301 + 2350 + 5 * -771, A = ""; !(l >= I / (-4054 * -2 + 1 * -6971 + -11 * 103)); ) {
        var m = ae[c + 4 * l >> 2];
        if (-1931 * 2 + -1 * -463 + -1 * -3399 == m)
          break;
        ++l, 585 * -27 + -66326 + 147657 <= m ? (m -= 65536, A += String.fromCharCode(-85151 + -3 * -5081 + -277 * -452 | m >> 57 * -61 + 5954 * -1 + 3 * 3147, -265 * -218 + 1 * 9431 + 9 * -1209 | m & 3528 + 8173 * 1 + 19 * -562)) : A += String.fromCharCode(m);
      }
      return A;
    }
    function $(c, I, l) {
      if (l === void 0 && (l = 5754631566 + -3607147919), -2631 * 1 + -2715 + 25 * 214 > l)
        return -6 * -73 + -5492 * -1 + -1 * 5930;
      var A = I;
      l = A + l - 4;
      for (var m = -101 * 34 + -5550 + -4492 * -2; m < c.length; ++m) {
        var b = c.charCodeAt(m);
        if (1 * -81539 + -12689 + 149524 <= b && 1 * 61868 + -16999 * 5 + 80470 * 1 >= b) {
          var B = c.charCodeAt(++m);
          b = -105543 + -124133 * 1 + 295212 + ((b & 7073 + 11 * -550) << 2189 + -11 * -263 + -5072) | B & -61 * -39 + 5 * 835 + -5531 * 1;
        }
        if (ae[I >> 6373 + 3 * -2345 + 664] = b, I += 453 + -6803 * 1 + -6354 * -1, I + (-1184 * -8 + -10 * 31 + -241 * 38) > l)
          break;
      }
      return ae[I >> 7994 + 2551 * 2 + -13094] = -1 * -484 + -1263 + 779 * 1, I - A;
    }
    function z(c) {
      for (var I = 0, l = -2488 + -8 * -311; l < c.length; ++l) {
        var A = c.charCodeAt(l);
        -69 * 17 + 75756 + -19287 <= A && 571 * -142 + -5 * 6929 + 9615 * 18 >= A && ++l, I += 4788 + -299 * 16;
      }
      return I;
    }
    var te, he, ne, Xe, me, ae, de, ve, Ve;
    function we(c) {
      te = c, e.HEAP8 = he = new Int8Array(c), e.HEAP16 = Xe = new Int16Array(c), e.HEAP32 = ae = new Int32Array(c), e.HEAPU8 = ne = new Uint8Array(c), e.HEAPU16 = me = new Uint16Array(c), e.HEAPU32 = de = new Uint32Array(c), e.HEAPF32 = ve = new Float32Array(c), e.HEAPF64 = Ve = new Float64Array(c);
    }
    var je = e.INITIAL_MEMORY || 11305104 + -684014 * -8, Ee = {};
    Ee.initial = je / (-117 * 1002 + 77261 + 105509), Ee.maximum = 32768, e.wasmMemory ? v = e.wasmMemory : v = new WebAssembly.Memory(Ee), v && (te = v.buffer), je = te.byteLength, we(te);
    var Ae = [], Vt = [], In = [], pt = [];
    function ft() {
      var c = e.preRun.shift();
      Ae.unshift(c);
    }
    var Ge = 7 * 67 + -1 * 5839 + 5370, Ze = null;
    e.preloadedImages = {}, e.preloadedAudios = {};
    function _e(c) {
      throw e.onAbort && e.onAbort(c), f(c), E = !(-5220 + -263 * 2 + -34 * -169), c = new WebAssembly.RuntimeError("abort(" + c + "). Build with -s ASSERTIONS=1 for more info."), o(c), c;
    }
    function Pe(c) {
      var I = ke;
      return String.prototype.startsWith ? I.startsWith(c) : 25 * -7 + 2 * -61 + 1 * 297 === I.indexOf(c);
    }
    function Et() {
      return Pe("data:application/octet-stream;base64,");
    }
    var ke = "sam.wasm";
    if (!Et()) {
      var Ne = ke;
      ke = e.locateFile ? e.locateFile(Ne, C) : C + Ne;
    }
    function dr() {
      try {
        if (p)
          return new Uint8Array(p);
        if (u)
          return u(ke);
        throw "both async and sync fetching of the wasm failed";
      } catch (c) {
        _e(c);
      }
    }
    function O0() {
      var c = {};
      return c.credentials = "same-origin", p || !s && !x || typeof fetch != "function" || Pe("file://") ? Promise.resolve().then(dr) : fetch(ke, c).then(function(I) {
        if (!I.ok)
          throw "failed to load wasm binary file at '" + ke + "'";
        return I.arrayBuffer();
      }).catch(function() {
        return dr();
      });
    }
    function Vn(c) {
      for (; 5 * 526 + -1 * -6899 + -9529 < c.length; ) {
        var I = c.shift();
        if (typeof I == "function")
          I(e);
        else {
          var l = I.Ba;
          typeof l == "number" ? I.ta === void 0 ? Yo("v", l)() : Yo("vi", l)(I.ta) : l(void (-6935 * -1 + 74 * -17 + -5677) === I.ta ? null : I.ta);
        }
      }
    }
    function Yo(c, I) {
      var l = [];
      return function() {
        l.length = arguments.length;
        for (var A = 2695 + -385 * 7; A < arguments.length; A++)
          l[A] = arguments[A];
        return l && l.length ? e["dynCall_" + c].apply(null, [I].concat(l)) : e["dynCall_" + c].call(null, I);
      };
    }
    function R0(c) {
      this.da = c - 16, this.Oa = function(I) {
        ae[this.da + (5501 + 7 * -1231 + 11 * 284) >> 2281 * -3 + 13 * -449 + -12682 * -1] = I;
      }, this.La = function(I) {
        ae[this.da + (-4590 + 54 * 85) >> -3078 + -113 * -50 + -1 * 2570] = I;
      }, this.Ma = function() {
        ae[this.da + (-6034 * -1 + 1 * -4909 + 59 * -19) >> 2] = 717 + 150 * 22 + -4017;
      }, this.Ka = function() {
        he[this.da + (2 * -2898 + 135 * -2 + 3 * 2026) >> -7006 * -1 + 2 * -383 + -6240] = -241 * -41 + -5588 + 27 * -159;
      }, this.Na = function() {
        he[this.da + (2 * 3427 + -1 * -7871 + -14712) >> -5740 + 523 * 7 + 2079] = 30 * -89 + -9712 + 12382;
      }, this.Fa = function(I, l) {
        this.Oa(I), this.La(l), this.Ma(), this.Ka(), this.Na();
      };
    }
    function En() {
      return 3 * 103 + 9757 + -10066 < En.xa;
    }
    function Lo(c) {
      switch (c) {
        case 253 * 23 + -5839 + 21:
          return -687 + 229 * 3;
        case 5467 * -1 + -803 * 1 + 8 * 784:
          return -616 * -6 + 69 * 30 + -5 * 1153;
        case -737 * -11 + 7130 + 1 * -15233:
          return 1 * -607 + -8467 + 9076;
        case -3339 + -7911 * -1 + -4564:
          return 8214 + -2 * 1153 + -5905;
        default:
          throw new TypeError("Unknown type size: " + c);
      }
    }
    var Ar = void (-4136 + 278 * 1 + -3 * -1286);
    function be(c) {
      for (var I = ""; ne[c]; )
        I += Ar[ne[c++]];
      return I;
    }
    var Pt = {}, ht = {}, Pn = {};
    function To(c) {
      if (void (3 * 3182 + -8 * 991 + -1618) === c)
        return "_unknown";
      c = c.replace(/[^a-zA-Z0-9_]/g, "$");
      var I = c.charCodeAt(-1 * -1063 + -5 * -943 + -5778);
      return -3407 * 1 + -1811 + 5266 * 1 <= I && -5 * -1151 + 8 * 653 + -2 * 5461 >= I ? "_" + c : c;
    }
    function Fo(c, I) {
      return c = To(c), new Function("body", "return function " + c + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(I);
    }
    function Do(c) {
      var I = Error, l = Fo(c, function(A) {
        this.name = c, this.message = A, A = Error(A).stack, void (-6664 + -2257 * 4 + -15692 * -1) !== A && (this.stack = this.toString() + `
` + A.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return l.prototype = Object.create(I.prototype), l.prototype.constructor = l, l.prototype.toString = function() {
        return void (-8099 + 2723 * -1 + -7 * -1546) === this.message ? this.name : this.name + ": " + this.message;
      }, l;
    }
    var Nt = void (8131 + -1139 * 1 + -304 * 23);
    function F(c) {
      throw new Nt(c);
    }
    var pr = void (-6 * -134 + 89 * -53 + 43 * 91);
    function Nn(c) {
      throw new pr(c);
    }
    function Yt(c, I, l) {
      function A(y) {
        y = l(y), y.length !== c.length && Nn("Mismatched type converter count");
        for (var K = -3 * -1433 + 3251 + -10 * 755; K < c.length; ++K)
          et(c[K], y[K]);
      }
      c.forEach(function(y) {
        Pn[y] = I;
      });
      var m = Array(I.length), b = [], B = 5518 + -1 * -2207 + -7725;
      I.forEach(function(y, K) {
        ht.hasOwnProperty(y) ? m[K] = ht[y] : (b.push(y), Pt.hasOwnProperty(y) || (Pt[y] = []), Pt[y].push(function() {
          m[K] = ht[y], ++B, B === b.length && A(m);
        }));
      }), -511 * -1 + -1 * -3433 + -4 * 986 === b.length && A(m);
    }
    function et(c, I, l) {
      if (l = l || {}, !("argPackAdvance" in I))
        throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var A = I.name;
      if (c || F('type "' + A + '" must have a positive integer typeid pointer'), ht.hasOwnProperty(c)) {
        if (l.Ea)
          return;
        F("Cannot register type '" + A + "' twice");
      }
      ht[c] = I, delete Pn[c], Pt.hasOwnProperty(c) && (I = Pt[c], delete Pt[c], I.forEach(function(m) {
        m();
      }));
    }
    function V0(c) {
      var I = {};
      return I.count = c.count, I.oa = c.oa, I.pa = c.pa, I.da = c.da, I.fa = c.fa, I.ga = c.ga, I.ha = c.ha, I;
    }
    function Xo(c) {
      F(c.A.fa.ea.name + " instance already deleted");
    }
    var jo = !(-1 * -8696 + -5321 + -3374);
    function fr() {
    }
    function hr(c) {
      --c.count.value, 12828 + -4 * 3207 === c.count.value && (c.ga ? c.ha.na(c.ga) : c.fa.ea.na(c.da));
    }
    function xn(c) {
      return typeof FinalizationGroup > "u" ? (xn = function(I) {
        return I;
      }, c) : (jo = new FinalizationGroup(function(I) {
        for (var l = I.next(); !l.done; l = I.next())
          l = l.value, l.da ? hr(l) : console.warn("object already deleted: " + l.da);
      }), xn = function(I) {
        return jo.register(I, I.A, I.A), I;
      }, fr = function(I) {
        jo.unregister(I.A);
      }, xn(c));
    }
    var ln = void (7713 + 2571 * -3), un = [];
    function Mo() {
      for (; un.length; ) {
        var c = un.pop();
        c.A.oa = !(-283 * 31 + 3043 + -521 * -11), c.delete();
      }
    }
    function gt() {
    }
    var mr = {};
    function E0(c, I) {
      var l = e;
      if (void (-2027 + -1 * 9803 + 11830) === l[c].ja) {
        var A = l[c];
        l[c] = function() {
          return l[c].ja.hasOwnProperty(arguments.length) || F("Function '" + I + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + l[c].ja + ")!"), l[c].ja[arguments.length].apply(this, arguments);
        }, l[c].ja = [], l[c].ja[A.ya] = A;
      }
    }
    function br(c, I, l) {
      e.hasOwnProperty(c) ? ((void (-13756 + 19 * 724) === l || e[c].ja !== void 0 && void (-1 * 7412 + 4875 + 2537) !== e[c].ja[l]) && F("Cannot register public name '" + c + "' twice"), E0(c, c), e.hasOwnProperty(l) && F("Cannot register multiple overloads of a function with the same number of arguments (" + l + ")!"), e[c].ja[l] = I) : (e[c] = I, void (1 * 2357 + 1508 + -3865) !== l && (e[c].Ra = l));
    }
    function P0(c, I, l, A, m, b, B, y) {
      this.name = c, this.constructor = I, this.ma = l, this.na = A, this.ia = m, this.Ca = b, this.qa = B, this.Aa = y;
    }
    function Yn(c, I, l) {
      for (; I !== l; )
        I.qa || F("Expected null or instance of " + l.name + ", got an instance of " + I.name), c = I.qa(c), I = I.ia;
      return c;
    }
    function N0(c, I) {
      return I === null ? (this.ua && F("null is not a valid " + this.name), -11 * 78 + 20 * -291 + 6678) : (I.A || F('Cannot pass "' + Tt(I) + '" as a ' + this.name), I.A.da || F("Cannot pass deleted object as a pointer of type " + this.name), Yn(I.A.da, I.A.fa.ea, this.ea));
    }
    function Y0(c, I) {
      if (I === null) {
        if (this.ua && F("null is not a valid " + this.name), this.sa) {
          var l = this.Ha();
          return c !== null && c.push(this.na, l), l;
        }
        return 1141 * -3 + -4015 + 7438;
      }
      if (I.A || F('Cannot pass "' + Tt(I) + '" as a ' + this.name), I.A.da || F("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && I.A.fa.ra && F("Cannot convert argument of type " + (I.A.ha ? I.A.ha.name : I.A.fa.name) + " to parameter type " + this.name), l = Yn(I.A.da, I.A.fa.ea, this.ea), this.sa)
        switch (void (-2557 + 3322 * 3 + -7409 * 1) === I.A.ga && F("Passing raw pointer to smart pointer is illegal"), this.Pa) {
          case -3994 + -7702 * 1 + 2924 * 4:
            I.A.ha === this ? l = I.A.ga : F("Cannot convert argument of type " + (I.A.ha ? I.A.ha.name : I.A.fa.name) + " to parameter type " + this.name);
            break;
          case 9604 + -695 * 3 + -7518 * 1:
            l = I.A.ga;
            break;
          case 1566 + -3 * 508 + -40:
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
    function L0(c, I) {
      return I === null ? (this.ua && F("null is not a valid " + this.name), 17 * 122 + -1923 * -4 + -9766) : (I.A || F('Cannot pass "' + Tt(I) + '" as a ' + this.name), I.A.da || F("Cannot pass deleted object as a pointer of type " + this.name), I.A.fa.ra && F("Cannot convert argument of type " + I.A.fa.name + " to parameter type " + this.name), Yn(I.A.da, I.A.fa.ea, this.ea));
    }
    function Ln(c) {
      return this.fromWireType(de[c >> 2]);
    }
    function yr(c, I, l) {
      return I === l ? c : void (-1511 * 2 + -9361 + 12383) === l.ia ? null : (c = yr(c, I, l.ia), c === null ? null : l.Aa(c));
    }
    var Cn = {};
    function T0(c, I) {
      for (void (-1 * -9946 + 3136 + -13082) === I && F("ptr should not be undefined"); c.ia; )
        I = c.qa(I), c = c.ia;
      return Cn[I];
    }
    function Tn(c, I) {
      I.fa && I.da || Nn("makeClassHandle requires ptr and ptrType"), !!I.ha != !!I.ga && Nn("Both smartPtrType and smartPtr must be specified");
      var l = {};
      l.value = 1, I.count = l;
      var A = {};
      A.value = I;
      var m = {};
      return m.A = A, xn(Object.create(c, m));
    }
    function tt(c, I, l, A) {
      this.name = c, this.ea = I, this.ua = l, this.ra = A, this.sa = !1, this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void (-435 * -19 + 5043 + 2 * -6654), I.ia !== void 0 ? this.toWireType = Y0 : (this.toWireType = A ? N0 : L0, this.ka = null);
    }
    function vr(c, I, l) {
      e.hasOwnProperty(c) || Nn("Replacing nonexistant public symbol"), void (-1 * -8067 + -3 * -621 + 9930 * -1) !== e[c].ja && void (2067 + -689 * 3) !== l ? e[c].ja[l] = I : (e[c] = I, e[c].ya = l);
    }
    function st(c, I) {
      c = be(c);
      var l = Yo(c, I);
      return typeof l != "function" && F("unknown function pointer with signature " + c + ": " + I), l;
    }
    var wr = void (-10159 + -10159 * -1);
    function Br(c) {
      c = Yr(c);
      var I = be(c);
      return nt(c), I;
    }
    function dn(c, I) {
      function l(b) {
        m[b] || ht[b] || (Pn[b] ? Pn[b].forEach(l) : (A.push(b), m[b] = !(400 + 50 * -8)));
      }
      var A = [], m = {};
      throw I.forEach(l), new wr(c + ": " + A.map(Br).join([", "]));
    }
    function Sr(c, I) {
      for (var l = [], A = 2 * 4358 + 381 * -23 + -47 * -1; A < c; A++)
        l.push(ae[(I >> 6 * 110 + 1046 * 2 + 11 * -250) + A]);
      return l;
    }
    function Fn(c) {
      for (; c.length; ) {
        var I = c.pop();
        c.pop()(I);
      }
    }
    function Gr(c, I, l) {
      return c instanceof Object || F(l + ' with invalid "this": ' + c), c instanceof I.ea.constructor || F(l + ' incompatible with "this" of type ' + c.constructor.name), c.A.da || F("cannot call emscripten binding method " + l + " on deleted object"), Yn(c.A.da, c.A.fa.ea, I.ea);
    }
    var Zr = {};
    Zr.value = void (-1194 + -1234 * -1 + 20 * -2);
    var kr = {};
    kr.value = null;
    var Kr = {};
    Kr.value = !0;
    var Hr = {};
    Hr.value = !(3073 + 34 * 37 + -4330);
    var Jo = [], Ke = [{}, Zr, kr, Kr, Hr];
    function Uo(c) {
      -6456 + 2 * -4678 + -3 * -5272 < c && -1 * 8857 + 2252 + 6605 === --Ke[c].Ja && (Ke[c] = void (2234 + 2927 * 3 + -11015 * 1), Jo.push(c));
    }
    function Lt(c) {
      switch (c) {
        case void 0:
          return 2122 + -11 * -835 + -11306;
        case null:
          return 4170 + 1 * -9817 + 1 * 5649;
        case !(3 * 2203 + 5 * -562 + 1 * -3799):
          return 3;
        case !(127 * -62 + -5106 + -12981 * -1):
          return -1 * 5342 + -498 * 15 + 12816;
        default:
          var I = Jo.length ? Jo.pop() : Ke.length, l = {};
          return l.Ja = 1, l.value = c, Ke[I] = l, I;
      }
    }
    function Tt(c) {
      if (c === null)
        return "null";
      var I = typeof c;
      return I === "object" || I === "array" || I === "function" ? c.toString() : "" + c;
    }
    function F0(c, I) {
      switch (I) {
        case -3 * 160 + -3121 + -1201 * -3:
          return function(l) {
            return this.fromWireType(ve[l >> -475 + -9 * -53]);
          };
        case -197 * 36 + -2 * 4211 + 1 * 15517:
          return function(l) {
            return this.fromWireType(Ve[l >> 5745 + 22 * -261]);
          };
        default:
          throw new TypeError("Unknown float type: " + c);
      }
    }
    function D0(c) {
      var I = Function;
      if (!(I instanceof Function))
        throw new TypeError("new_ called with constructor type " + typeof I + " which is not a function");
      var l = Fo(I.name || "unknownFunctionName", function() {
      });
      return l.prototype = I.prototype, l = new l(), c = I.apply(l, c), c instanceof Object ? c : l;
    }
    function X0(c, I, l) {
      switch (I) {
        case 7357 + 5155 * 1 + -12512:
          return l ? function(A) {
            return he[A];
          } : function(A) {
            return ne[A];
          };
        case -8468 + -1 * 8587 + 17056 * 1:
          return l ? function(A) {
            return Xe[A >> 1];
          } : function(A) {
            return me[A >> 17 * 159 + -338 + -2364];
          };
        case -5263 + -135 * -47 + 20 * -54:
          return l ? function(A) {
            return ae[A >> -1706 + -106 * 15 + 194 * 17];
          } : function(A) {
            return de[A >> 2];
          };
        default:
          throw new TypeError("Unknown integer type: " + c);
      }
    }
    function Qo(c) {
      return c || F("Cannot use deleted val. handle = " + c), Ke[c].value;
    }
    function Wr(c, I) {
      var l = ht[c];
      return void (-701 * 3 + -7146 + 9249) === l && F(I + " has unknown type " + Br(c)), l;
    }
    var j0 = {}, Or = {};
    function Rr() {
      if (!zo) {
        var c = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: g || "./this.program" }, I;
        for (I in Or)
          c[I] = Or[I];
        var l = [];
        for (I in c)
          l.push(I + "=" + c[I]);
        zo = l;
      }
      return zo;
    }
    var zo, Vr = [];
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
              S(b === A);
            }
          } : m;
        })(l);
      return I;
    }
    for (var Pr = Array(9148 + 665 * 5 + -12217), Dn = -5932 + 1483 * 4; 6 * -1255 + 161 * 21 + -4405 * -1 > Dn; ++Dn)
      Pr[Dn] = String.fromCharCode(Dn);
    Ar = Pr, Nt = e.BindingError = Do("BindingError"), pr = e.InternalError = Do("InternalError"), gt.prototype.isAliasOf = function(c) {
      if (!(this instanceof gt && c instanceof gt))
        return !(378 * 16 + 3960 + -10007);
      var I = this.A.fa.ea, l = this.A.da, A = c.A.fa.ea;
      for (c = c.A.da; I.ia; )
        l = I.qa(l), I = I.ia;
      for (; A.ia; )
        c = A.qa(c), A = A.ia;
      return I === A && l === c;
    }, gt.prototype.clone = function() {
      if (this.A.da || Xo(this), this.A.pa)
        return this.A.count.value += 1 * -8884 + -217 * -30 + -5 * -475, this;
      var c = xn(Object.create(Object.getPrototypeOf(this), { A: { value: V0(this.A) } }));
      return c.A.count.value += -4126 * 2 + -412 + 8665, c.A.oa = !(4 * -982 + 7809 + -3880), c;
    }, gt.prototype.delete = function() {
      this.A.da || Xo(this), this.A.oa && !this.A.pa && F("Object already scheduled for deletion"), fr(this), hr(this.A), this.A.pa || (this.A.ga = void (-3159 + -2 * -2173 + -1187), this.A.da = void (1 * -9371 + 7017 + 2354));
    }, gt.prototype.isDeleted = function() {
      return !this.A.da;
    }, gt.prototype.deleteLater = function() {
      return this.A.da || Xo(this), this.A.oa && !this.A.pa && F("Object already scheduled for deletion"), un.push(this), un.length === 1 && ln && ln(Mo), this.A.oa = !(8346 * -1 + -7082 * 1 + 15428), this;
    }, tt.prototype.Da = function(c) {
      return this.wa && (c = this.wa(c)), c;
    }, tt.prototype.va = function(c) {
      this.na && this.na(c);
    }, tt.prototype.argPackAdvance = 64 + -2 * 2081 + 2 * 2053, tt.prototype.readValueFromPointer = Ln, tt.prototype.deleteObject = function(c) {
      c !== null && c.delete();
    }, tt.prototype.fromWireType = function(c) {
      function I() {
        return this.sa ? Tn(this.ea.ma, { fa: this.Ga, da: l, ha: this, ga: c }) : Tn(this.ea.ma, { fa: this, da: c });
      }
      var l = this.Da(c);
      if (!l)
        return this.va(c), null;
      var A = T0(this.ea, l);
      if (void (4 * -805 + 4034 * 2 + -4848) !== A)
        return 6151 + 1079 * -7 + 1402 === A.A.count.value ? (A.A.da = l, A.A.ga = c, A.clone()) : (A = A.clone(), this.va(c), A);
      if (A = this.ea.Ca(l), A = mr[A], !A)
        return I.call(this);
      A = this.ra ? A.za : A.pointerType;
      var m = yr(l, this.ea, A.ea);
      return m === null ? I.call(this) : this.sa ? Tn(A.ea.ma, { fa: A, da: m, ha: this, ga: c }) : Tn(A.ea.ma, { fa: A, da: m });
    }, e.getInheritedInstanceCount = function() {
      return Object.keys(Cn).length;
    }, e.getLiveInheritedInstances = function() {
      var c = [], I;
      for (I in Cn)
        Cn.hasOwnProperty(I) && c.push(Cn[I]);
      return c;
    }, e.flushPendingDeletes = Mo, e.setDelayFunction = function(c) {
      ln = c, un.length && ln && ln(Mo);
    }, wr = e.UnboundTypeError = Do("UnboundTypeError"), e.count_emval_handles = function() {
      for (var c = -3521 + -3521 * -1, I = -3498 + -73 * -41 + 510; I < Ke.length; ++I)
        void (1 * -6987 + 24 * -192 + 11595) !== Ke[I] && ++c;
      return c;
    }, e.get_first_emval = function() {
      for (var c = 5; c < Ke.length; ++c)
        if (void (-1 * -1263 + -6231 + -138 * -36) !== Ke[c])
          return Ke[c];
      return null;
    }, Vt.push({ Ba: function() {
      Nr();
    } });
    var M0 = { z: function(c) {
      return Xn(c + (8526 + -1 * -1731 + -10241)) + (-5704 + 401 * 23 + -3503);
    }, u: function(c, I, l) {
      throw new R0(c).Fa(I, l), "uncaught_exception" in En ? En.xa++ : En.xa = -8827 * 1 + 1 * 8825 + -1 * -3, c;
    }, w: function(c, I, l, A, m) {
      var b = Lo(l);
      I = be(I), et(c, { name: I, fromWireType: function(B) {
        return !!B;
      }, toWireType: function(B, y) {
        return y ? A : m;
      }, argPackAdvance: 8, readValueFromPointer: function(B) {
        if (-46 * -66 + -3429 + 394 === l)
          var y = he;
        else if (-4791 + 9094 * 1 + -4301 === l)
          y = Xe;
        else if (11088 + -652 * 17 === l)
          y = ae;
        else
          throw new TypeError("Unknown boolean type size: " + I);
        return this.fromWireType(y[B >> b]);
      }, ka: null });
    }, i: function(c, I, l, A, m, b, B, y, K, W, R, V, J) {
      R = be(R), b = st(m, b), y && (y = st(B, y)), W && (W = st(K, W)), J = st(V, J);
      var se = To(R);
      br(se, function() {
        dn("Cannot construct " + R + " due to unbound types", [A]);
      }), Yt([c, I, l], A ? [A] : [], function(P) {
        if (P = P[1 * -4034 + -2762 + 3398 * 2], A)
          var Me = P.ea, pe = Me.ma;
        else
          pe = gt.prototype;
        P = Fo(se, function() {
          if (Object.getPrototypeOf(this) !== Ft)
            throw new Nt("Use 'new' to construct " + R);
          if (void (-4298 + 374 * -16 + 10282) === Dt.la)
            throw new Nt(R + " has no accessible constructor");
          var Tr = Dt.la[arguments.length];
          if (void (-5147 + 50 * 181 + -3903 * 1) === Tr)
            throw new Nt("Tried to invoke ctor of " + R + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(Dt.la).toString() + ") parameters instead!");
          return Tr.apply(this, arguments);
        });
        var Be = {};
        Be.value = P;
        var mt = {};
        mt.constructor = Be;
        var Ft = Object.create(pe, mt);
        P.prototype = Ft;
        var Dt = new P0(R, P, Ft, J, Me, b, y, W);
        Me = new tt(R, Dt, !(4 * -15 + -1 * 5243 + -5303 * -1), !(-1 * -6251 + 255 + -1 * 6505)), pe = new tt(R + "*", Dt, !1, !(-13 * -479 + 1446 * 1 + -7672));
        var Lr = new tt(R + " const*", Dt, !(-133 + -7 * 1229 + 8737), !(-3 * 2402 + -2984 + 1 * 10190)), qo = {};
        return qo.pointerType = pe, qo.za = Lr, mr[c] = qo, vr(se, P), [Me, pe, Lr];
      });
    }, h: function(c, I, l, A, m, b) {
      S(-7455 + -9421 * -1 + 1966 * -1 < I);
      var B = Sr(I, l);
      m = st(A, m);
      var y = [b], K = [];
      Yt([], [c], function(W) {
        W = W[5534 + 1 * 7465 + -1857 * 7];
        var R = "constructor " + W.name;
        if (void (23 * 397 + 7 * -551 + 18 * -293) === W.ea.la && (W.ea.la = []), void (-1 * 463 + -8487 + -4475 * -2) !== W.ea.la[I - (-9180 + 1 * -4755 + 134 * 104)])
          throw new Nt("Cannot register multiple constructors with identical number of parameters (" + (I - (57 * -97 + -91 * -5 + 5075)) + ") for class '" + W.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return W.ea.la[I - (-4449 * 2 + 9352 + -453)] = function() {
          dn("Cannot construct " + W.name + " due to unbound types", B);
        }, Yt([], B, function(V) {
          return W.ea.la[I - (9642 + -691 * -7 + -6 * 2413)] = function() {
            arguments.length !== I - (-5662 * -1 + 27 * 51 + -7038) && F(R + " called with " + arguments.length + " arguments, expected " + (I - 1)), K.length = -1 * 4197 + 67 * -43 + 1 * 7078, y.length = I;
            for (var J = -2862 + -5527 * 1 + 1678 * 5; J < I; ++J)
              y[J] = V[J].toWireType(K, arguments[J - (-643 * 11 + 2837 + -1 * -4237)]);
            return J = m.apply(null, y), Fn(K), V[-758 * -2 + 9397 + -10913].fromWireType(J);
          }, [];
        }), [];
      });
    }, b: function(c, I, l, A, m, b, B, y, K, W) {
      I = be(I), m = st(A, m), Yt([], [c], function(R) {
        R = R[-2327 + 2327 * 1];
        var V = R.name + "." + I, J = { get: function() {
          dn("Cannot access " + V + " due to unbound types", [l, B]);
        }, enumerable: !(5503 * 1 + -1 * 5881 + -54 * -7), configurable: !(-6987 + 17 * 411) };
        return K ? J.set = function() {
          dn("Cannot access " + V + " due to unbound types", [l, B]);
        } : J.set = function() {
          F(V + " is a read-only property");
        }, Object.defineProperty(R.ea.ma, I, J), Yt([], K ? [l, B] : [l], function(se) {
          var P = se[0], Me = { get: function() {
            var Be = Gr(this, R, V + " getter");
            return P.fromWireType(m(b, Be));
          }, enumerable: !(11129 + -359 * 31) };
          if (K) {
            K = st(y, K);
            var pe = se[-1019 * -1 + 3599 + -513 * 9];
            Me.set = function(Be) {
              var mt = Gr(this, R, V + " setter"), Ft = [];
              K(W, mt, pe.toWireType(Ft, Be)), Fn(Ft);
            };
          }
          return Object.defineProperty(R.ea.ma, I, Me), [];
        }), [];
      });
    }, v: function(c, I) {
      I = be(I), et(c, { name: I, fromWireType: function(l) {
        var A = Ke[l].value;
        return Uo(l), A;
      }, toWireType: function(l, A) {
        return Lt(A);
      }, argPackAdvance: 8, readValueFromPointer: Ln, ka: null });
    }, m: function(c, I, l) {
      l = Lo(l), I = be(I), et(c, { name: I, fromWireType: function(A) {
        return A;
      }, toWireType: function(A, m) {
        if (typeof m != "number" && typeof m != "boolean")
          throw new TypeError('Cannot convert "' + Tt(m) + '" to ' + this.name);
        return m;
      }, argPackAdvance: 8, readValueFromPointer: F0(I, l), ka: null });
    }, c: function(c, I, l, A, m, b) {
      var B = Sr(I, l);
      c = be(c), m = st(A, m), br(c, function() {
        dn("Cannot call " + c + " due to unbound types", B);
      }, I - 1), Yt([], B, function(y) {
        var K = c, W = c;
        y = [y[-394 * 24 + 9111 * -1 + 18567], null].concat(y.slice(-9241 + -2 * -4621));
        var R = m, V = y.length;
        209 * -4 + 6 * -1268 + 8446 > V && F("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var J = y[-6888 + 1 * -1042 + 7931] !== null && !(36 * 81 + 3487 + -582 * 11), se = !(-3041 * -2 + 4669 + 86 * -125), P = -663 * -5 + -1243 + -2071; P < y.length; ++P)
          if (y[P] !== null && void (-1 * 571 + 793 * 11 + 8152 * -1) === y[P].ka) {
            se = !(3449 + -132 * -74 + 13217 * -1);
            break;
          }
        var Me = y[0].name !== "void", pe = "", Be = "";
        for (P = -16 * 421 + -6630 + 13366; P < V - (3599 + 1717 * -1 + -1880); ++P)
          pe += (4015 + -1 * 4015 !== P ? ", " : "") + "arg" + P, Be += (7486 * 1 + -4496 + -2990 !== P ? ", " : "") + "arg" + P + "Wired";
        W = "return function " + To(W) + "(" + pe + `) {
if (arguments.length !== ` + (V - (2 * -2699 + 9924 + -4524 * 1)) + `) {
throwBindingError('function ` + W + " called with ' + arguments.length + ' arguments, expected " + (V - (-7037 + -4 * -499 + 3 * 1681)) + ` args!');
}
`, se && (W += `var destructors = [];
`);
        var mt = se ? "destructors" : "null";
        for (pe = "throwBindingError invoker fn runDestructors retType classParam".split(" "), R = [F, R, b, Fn, y[-6683 + -6683 * -1], y[-1832 + 1 * -5231 + 7064]], J && (W += "var thisWired = classParam.toWireType(" + mt + `, this);
`), P = -1574 * -2 + 1425 + -4573; P < V - (1 * 8461 + -1 * 2418 + -6041); ++P)
          W += "var arg" + P + "Wired = argType" + P + ".toWireType(" + mt + ", arg" + P + "); // " + y[P + (-1465 * -4 + 883 + -21 * 321)].name + `
`, pe.push("argType" + P), R.push(y[P + (-1944 * -1 + 1 * 57 + -1999)]);
        if (J && (Be = "thisWired" + (47 * -27 + 5304 + -1 * 4035 < Be.length ? ", " : "") + Be), W += (Me ? "var rv = " : "") + "invoker(fn" + (-4 * -71 + -5272 + -172 * -29 < Be.length ? ", " : "") + Be + `);
`, se)
          W += `runDestructors(destructors);
`;
        else
          for (P = J ? 3870 + -3869 * 1 : -5142 + 643 * 8; P < y.length; ++P)
            V = P === 1 ? "thisWired" : "arg" + (P - 2) + "Wired", y[P].ka !== null && (W += V + "_dtor(" + V + "); // " + y[P].name + `
`, pe.push(V + "_dtor"), R.push(y[P].ka));
        return Me && (W += `var ret = retType.fromWireType(rv);
return ret;
`), pe.push(W + `}
`), y = D0(pe).apply(null, R), vr(K, y, I - (-4676 + 8221 * 1 + -3544)), [];
      });
    }, e: function(c, I, l, A, m) {
      function b(W) {
        return W;
      }
      I = be(I), -(7093 + -1 * 7103 + -1 * -11) === m && (m = 7644760763 + -1512383317 * 3 + 493 * 2408431);
      var B = Lo(l);
      if (-698 * -13 + 1387 * 1 + -33 * 317 === A) {
        var y = 32 - 8 * l;
        b = function(W) {
          return W << y >>> y;
        };
      }
      var K = -(-1 * 9692 + 8773 + -8 * -115) != I.indexOf("unsigned");
      et(c, { name: I, fromWireType: b, toWireType: function(W, R) {
        if (typeof R != "number" && typeof R != "boolean")
          throw new TypeError('Cannot convert "' + Tt(R) + '" to ' + this.name);
        if (R < A || R > m)
          throw new TypeError('Passing a number "' + Tt(R) + '" from JS side to C/C++ side to an argument of type "' + I + '", which is outside the valid range [' + A + ", " + m + "]!");
        return K ? R >>> 4 * 1776 + 2 * -2506 + 1 * -2092 : R | -35 * 41 + 7453 + -1003 * 6;
      }, argPackAdvance: 8, readValueFromPointer: X0(I, B, 3394 + -1697 * 2 !== A), ka: null });
    }, d: function(c, I, l) {
      function A(y) {
        y >>= 2;
        var K = de;
        return new m(te, K[y + 1], K[y]);
      }
      var m = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][I];
      l = be(l);
      var b = {};
      b.name = l, b.fromWireType = A, b.argPackAdvance = 8, b.readValueFromPointer = A;
      var B = {};
      B.Ea = !(-11046 + 3 * 3682), et(c, b, B);
    }, n: function(c, I) {
      I = be(I);
      var l = I === "std::string";
      et(c, { name: I, fromWireType: function(A) {
        var m = de[A >> 2];
        if (l)
          for (var b = A + (-195 * 43 + 2344 + 403 * 15), B = -101 * 3 + 2231 + -8 * 241; B <= m; ++B) {
            var y = A + 4 + B;
            if (B == m || -4 * 1229 + -1 * 2735 + 7651 == ne[y]) {
              if (b) {
                var K = b, W = ne, R = K + (y - b);
                for (b = K; W[b] && !(b >= R); )
                  ++b;
                if (-1313 + -3 * -443 < b - K && W.subarray && k)
                  K = k.decode(W.subarray(K, b));
                else {
                  for (R = ""; K < b; ) {
                    var V = W[K++];
                    if (V & 9929 + -891 * 11) {
                      var J = W[K++] & 63;
                      if (-69 * -131 + -1 * -7075 + 19 * -838 == (V & 1480 + -8 * 157))
                        R += String.fromCharCode((V & 2285 + -644 * -3 + 299 * -14) << 9 * 284 + -600 + -3 * 650 | J);
                      else {
                        var se = W[K++] & 63;
                        V = -1682 * 3 + 6198 + -928 == (V & -349 * 25 + 1754 + 7211) ? (V & 1 * 4493 + -5249 + 771 * 1) << -113 * 8 + 3063 * -2 + 7 * 1006 | J << 1 * 7753 + 7954 + -15701 | se : (V & -1 * 8851 + 8001 + 1 * 857) << -2533 * 1 + 809 + 1742 | J << -9285 + -3 * 2930 + 18087 | se << -2546 + 33 * -149 + 7469 | W[K++] & -478 * 11 + -3556 + 11 * 807, 25011 + -12357 * -5 + -21260 > V ? R += String.fromCharCode(V) : (V -= 101485 + 18093 * -7 + -1 * -90702, R += String.fromCharCode(-376 * 68 + 101717 + -1 * 20853 | V >> 3738 + -71 * 139 + -267 * -23, 56320 | V & 1224 + -3 * -1983 + 25 * -246));
                      }
                    } else
                      R += String.fromCharCode(V);
                  }
                  K = R;
                }
              } else
                K = "";
              if (void (-94 * 23 + 5897 + -3735) === P)
                var P = K;
              else
                P += String.fromCharCode(-3222 + -1844 * -3 + 22 * -105), P += K;
              b = y + 1;
            }
          }
        else {
          for (P = Array(m), B = -659 * -3 + 6703 * 1 + -8680; B < m; ++B)
            P[B] = String.fromCharCode(ne[A + 4 + B]);
          P = P.join("");
        }
        return nt(A), P;
      }, toWireType: function(A, m) {
        m instanceof ArrayBuffer && (m = new Uint8Array(m));
        var b = typeof m == "string";
        b || m instanceof Uint8Array || m instanceof Uint8ClampedArray || m instanceof Int8Array || F("Cannot pass non-string to std::string");
        var B = (l && b ? function() {
          for (var W = 2819 * -1 + 97 * -19 + 4662, R = -4832 + -3223 * -2 + -2 * 807; R < m.length; ++R) {
            var V = m.charCodeAt(R);
            6194 * 1 + -16919 + -59 * -1119 <= V && 1 * -64945 + 71550 + 50738 >= V && (V = -20 * 3727 + 97700 + 42376 + ((V & 1023) << 5 * -341 + 7550 + -5835) | m.charCodeAt(++R) & -89 * -109 + 3 * 3007 + -17699), 11 * -841 + -5 * 554 + 12148 >= V ? ++W : W = -1913 + 5199 * -1 + 9159 * 1 >= V ? W + (-3342 * 1 + -26 * -189 + -314 * 5) : 1 * 25934 + 89 * 643 + -1259 * 14 >= V ? W + (-7218 + 2 * 2100 + 3021 * 1) : W + (2057 + -84 * -115 + -11713);
          }
          return W;
        } : function() {
          return m.length;
        })(), y = Xn(5 * 1645 + 5671 + -13892 + B + (11530 + -1647 * 7));
        if (de[y >> -921 * 3 + -1 * 8417 + 11182] = B, l && b)
          Z(m, y + (3632 + 2 * -1814), B + (4 * 412 + -5807 + -104 * -40));
        else if (b)
          for (b = 0; b < B; ++b) {
            var K = m.charCodeAt(b);
            2459 * -3 + -9098 + -16730 * -1 < K && (nt(y), F("String has UTF-16 code units that do not fit in 8 bits")), ne[y + 4 + b] = K;
          }
        else
          for (b = -1822 * -4 + 1 * -5028 + -1 * 2260; b < B; ++b)
            ne[y + (31 * 31 + 7250 + -8207 * 1) + b] = m[b];
        return A !== null && A.push(nt, y), y;
      }, argPackAdvance: 8, readValueFromPointer: Ln, ka: function(A) {
        nt(A);
      } });
    }, j: function(c, I, l) {
      if (l = be(l), 7795 + -249 * -7 + -9536 === I)
        var A = Q, m = T, b = j, B = function() {
          return me;
        }, y = -1291 * 2 + 726 * -11 + 10569;
      else
        -13510 + -2 * -6757 === I && (A = H, m = $, b = z, B = function() {
          return de;
        }, y = -1062 + 2 * 2289 + -3514);
      et(c, { name: l, fromWireType: function(K) {
        for (var W = de[K >> 7 * -641 + 1 * -259 + -1 * -4748], R = B(), V, J = K + (-8271 + -4689 * 1 + -926 * -14), se = 499 * 13 + 1187 + -7674; se <= W; ++se) {
          var P = K + 4 + se * I;
          (se == W || R[P >> y] == 0) && (J = A(J, P - J), void (1 * -8009 + 6857 + 1152) === V ? V = J : (V += String.fromCharCode(-521 + 521 * 1), V += J), J = P + I);
        }
        return nt(K), V;
      }, toWireType: function(K, W) {
        typeof W != "string" && F("Cannot pass non-string to C++ string type " + l);
        var R = b(W), V = Xn(1 * 7381 + -9719 + 2342 + R + I);
        return de[V >> -2189 * -4 + -2 * -4073 + -16900] = R >> y, m(W, V + (1301 * -1 + 4628 + -3323), R + I), K !== null && K.push(nt, V), V;
      }, argPackAdvance: 8, readValueFromPointer: Ln, ka: function(K) {
        nt(K);
      } });
    }, x: function(c, I) {
      I = be(I);
      var l = {};
      l.Qa = !0, l.name = I, l.argPackAdvance = 0, l.fromWireType = function() {
      }, l.toWireType = function() {
      }, et(c, l);
    }, k: function(c, I, l) {
      c = Qo(c), I = Wr(I, "emval::as");
      var A = [], m = Lt(A);
      return ae[l >> -1 * -1796 + 1 * -2521 + -727 * -1] = m, I.toWireType(A, c);
    }, g: Uo, l: function(c, I) {
      return c = Qo(c), I = Qo(I), Lt(c[I]);
    }, p: function(c) {
      var I = j0[c];
      return Lt(void (-3735 + -5 * -747) === I ? be(c) : I);
    }, o: function(c) {
      Fn(Ke[c].value), Uo(c);
    }, y: function(c, I) {
      return c = Wr(c, "_emval_take_value"), c = c.readValueFromPointer(I), Lt(c);
    }, f: function() {
      _e();
    }, q: function(c, I, l) {
      ne.copyWithin(c, I, I + l);
    }, r: function(c) {
      c >>>= -6623 + 179 * 37;
      var I = ne.length;
      if (1037658726 + 1 * 1109824922 < c)
        return !(-489 * -4 + -8883 + 6928);
      for (var l = 4297 + 1432 * -3; -76 * -26 + 9446 + -346 * 33 >= l; l *= -93 * 31 + -1 * -9098 + -327 * 19) {
        var A = I * (1 + 0.2 / l);
        A = Math.min(A, c + (124182251 + -4594767 * -3 + -18268 * 2042)), A = Math.max(33177247 + 7315723 * -3 + 5547138, c, A), -9098 + -773 * 4 + -23 * -530 < A % (69417 + -22901 * -5 + -118386) && (A += 67373 + -1361 * -58 + 26925 * -3 - A % (295 * 126 + 34027 + 37 * -153));
        e: {
          try {
            v.grow(Math.min(-2 * 1709293868 + 185560 * 17847 + 2254382064, A) - te.byteLength + (-78411 + 99 * 1454) >>> 7526 + -1 * 7510), we(v.buffer);
            var m = -1988 + 5323 * -1 + 2 * 3656;
            break e;
          } catch {
          }
          m = void (5101 + 11 * -853 + -4282 * -1);
        }
        if (m)
          return !0;
      }
      return !(1054 + -1503 * 3 + 72 * 48);
    }, s: function(c, I) {
      var l = 0;
      return Rr().forEach(function(A, m) {
        var b = I + l;
        for (m = ae[c + 4 * m >> 617 + 3 * -205] = b, b = -1145 * 1 + -3928 * 1 + 19 * 267; b < A.length; ++b)
          he[m++ >> 3 * -1363 + -9286 + 2675 * 5] = A.charCodeAt(b);
        he[m >> 0] = -249 * -23 + -2853 + -2874, l += A.length + (9665 + 5569 * -1 + 819 * -5);
      }), -95 * -77 + 78 * -49 + 3493 * -1;
    }, t: function(c, I) {
      var l = Rr();
      ae[c >> -1 * 2427 + -2207 * -1 + 222] = l.length;
      var A = 0;
      return l.forEach(function(m) {
        A += m.length + (-6608 + -72 * 124 + 15537 * 1);
      }), ae[I >> 169 * -17 + 3946 + 17 * -63] = A, 101 * -21 + -13 * 667 + 71 * 152;
    }, a: v };
    (function() {
      function c(B) {
        B = B.exports, B = Er(B), e.asm = B, Ge--, e.monitorRunDependencies && e.monitorRunDependencies(Ge), 3 * -2422 + 3030 + 4236 == Ge && Ze && (B = Ze, Ze = null, B());
      }
      function I(B) {
        c(B.instance);
      }
      function l(B) {
        return O0().then(function(y) {
          return WebAssembly.instantiate(y, m);
        }).then(B, function(y) {
          f("failed to asynchronously prepare wasm: " + y), _e(y);
        });
      }
      var A = {};
      A.a = M0;
      var m = A;
      if (Ge++, e.monitorRunDependencies && e.monitorRunDependencies(Ge), e.instantiateWasm)
        try {
          var b = e.instantiateWasm(m, c);
          return b = Er(b);
        } catch (B) {
          return f("Module.instantiateWasm callback failed with error: " + B), !(-1 * 1879 + 1409 * 1 + -471 * -1);
        }
      return function() {
        if (p || typeof WebAssembly.instantiateStreaming != "function" || Et() || Pe("file://") || typeof fetch != "function")
          return l(I);
        var B = {};
        B.credentials = "same-origin", fetch(ke, B).then(function(y) {
          return WebAssembly.instantiateStreaming(y, m).then(I, function(K) {
            return f("wasm streaming compile failed: " + K), f("falling back to ArrayBuffer instantiation"), l(I);
          });
        });
      }(), {};
    })();
    var Nr = e.___wasm_call_ctors = function() {
      return (Nr = e.___wasm_call_ctors = e.asm.B).apply(null, arguments);
    }, Xn = e._malloc = function() {
      return (Xn = e._malloc = e.asm.C).apply(null, arguments);
    }, nt = e._free = function() {
      return (nt = e._free = e.asm.D).apply(null, arguments);
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
    var jn;
    Ze = function c() {
      jn || $o(), jn || (Ze = c);
    };
    function $o() {
      function c() {
        if (!jn && (jn = !0, e.calledRun = !0, !E)) {
          if (Vn(Vt), Vn(In), n(e), e.onRuntimeInitialized && e.onRuntimeInitialized(), e.postRun)
            for (typeof e.postRun == "function" && (e.postRun = [e.postRun]); e.postRun.length; ) {
              var I = e.postRun.shift();
              pt.unshift(I);
            }
          Vn(pt);
        }
      }
      if (!(8923 + -1 * 8923 < Ge)) {
        if (e.preRun)
          for (typeof e.preRun == "function" && (e.preRun = [e.preRun]); e.preRun.length; )
            ft();
        Vn(Ae), 47 * 43 + 6474 + -8495 < Ge || (e.setStatus ? (e.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            e.setStatus("");
          }, 5736 + 3253 * 1 + -107 * 84), c();
        }, 2246 + -449 * 5)) : c());
      }
    }
    if (e.run = $o, e.preInit)
      for (typeof e.preInit == "function" && (e.preInit = [e.preInit]); -9476 + 1 * -6837 + 16313 < e.preInit.length; )
        e.preInit.pop()();
    return $o(), i.ready;
  };
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const s0 = Symbol("Comlink.proxy"), jx = Symbol("Comlink.endpoint"), Mx = Symbol("Comlink.releaseProxy"), ci = Symbol("Comlink.finalizer"), xo = Symbol("Comlink.thrown"), c0 = (t) => typeof t == "object" && t !== null || typeof t == "function", Jx = {
  canHandle: (t) => c0(t) && t[s0],
  serialize(t) {
    const { port1: i, port2: e } = new MessageChannel();
    return x0(t, i), [e, [e]];
  },
  deserialize(t) {
    return t.start(), u0(t);
  }
}, Ux = {
  canHandle: (t) => c0(t) && xo in t,
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
}, I0 = /* @__PURE__ */ new Map([
  ["proxy", Jx],
  ["throw", Ux]
]);
function Qx(t, i) {
  for (const e of t)
    if (i === e || e === "*" || e instanceof RegExp && e.test(i))
      return !0;
  return !1;
}
function x0(t, i = globalThis, e = ["*"]) {
  i.addEventListener("message", function n(o) {
    if (!o || !o.data)
      return;
    if (!Qx(e, o.origin)) {
      console.warn(`Invalid origin '${o.origin}' for comlink proxy`);
      return;
    }
    const { id: r, type: a, path: g } = Object.assign({ path: [] }, o.data), s = (o.data.argumentList || []).map(Bt);
    let x;
    try {
      const C = g.slice(0, -1).reduce((f, p) => f[p], t), u = g.reduce((f, p) => f[p], t);
      switch (a) {
        case "GET":
          x = u;
          break;
        case "SET":
          C[g.slice(-1)[0]] = Bt(o.data.value), x = !0;
          break;
        case "APPLY":
          x = u.apply(C, s);
          break;
        case "CONSTRUCT":
          {
            const f = new u(...s);
            x = tl(f);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: f, port2: p } = new MessageChannel();
            x0(t, p), x = el(f, [f]);
          }
          break;
        case "RELEASE":
          x = void 0;
          break;
        default:
          return;
      }
    } catch (C) {
      x = { value: C, [xo]: 0 };
    }
    Promise.resolve(x).catch((C) => ({ value: C, [xo]: 0 })).then((C) => {
      const [u, f] = bo(C);
      i.postMessage(Object.assign(Object.assign({}, u), { id: r }), f), a === "RELEASE" && (i.removeEventListener("message", n), l0(i), ci in t && typeof t[ci] == "function" && t[ci]());
    }).catch((C) => {
      const [u, f] = bo({
        value: new TypeError("Unserializable return value"),
        [xo]: 0
      });
      i.postMessage(Object.assign(Object.assign({}, u), { id: r }), f);
    });
  }), i.start && i.start();
}
function zx(t) {
  return t.constructor.name === "MessagePort";
}
function l0(t) {
  zx(t) && t.close();
}
function u0(t, i) {
  return Yi(t, [], i);
}
function qn(t) {
  if (t)
    throw new Error("Proxy has been released and is not useable");
}
function C0(t) {
  return Jt(t, {
    type: "RELEASE"
  }).then(() => {
    l0(t);
  });
}
const ho = /* @__PURE__ */ new WeakMap(), mo = "FinalizationRegistry" in globalThis && new FinalizationRegistry((t) => {
  const i = (ho.get(t) || 0) - 1;
  ho.set(t, i), i === 0 && C0(t);
});
function $x(t, i) {
  const e = (ho.get(i) || 0) + 1;
  ho.set(i, e), mo && mo.register(t, i, t);
}
function qx(t) {
  mo && mo.unregister(t);
}
function Yi(t, i = [], e = function() {
}) {
  let n = !1;
  const o = new Proxy(e, {
    get(r, a) {
      if (qn(n), a === Mx)
        return () => {
          qx(o), C0(t), n = !0;
        };
      if (a === "then") {
        if (i.length === 0)
          return { then: () => o };
        const g = Jt(t, {
          type: "GET",
          path: i.map((s) => s.toString())
        }).then(Bt);
        return g.then.bind(g);
      }
      return Yi(t, [...i, a]);
    },
    set(r, a, g) {
      qn(n);
      const [s, x] = bo(g);
      return Jt(t, {
        type: "SET",
        path: [...i, a].map((C) => C.toString()),
        value: s
      }, x).then(Bt);
    },
    apply(r, a, g) {
      qn(n);
      const s = i[i.length - 1];
      if (s === jx)
        return Jt(t, {
          type: "ENDPOINT"
        }).then(Bt);
      if (s === "bind")
        return Yi(t, i.slice(0, -1));
      const [x, C] = ka(g);
      return Jt(t, {
        type: "APPLY",
        path: i.map((u) => u.toString()),
        argumentList: x
      }, C).then(Bt);
    },
    construct(r, a) {
      qn(n);
      const [g, s] = ka(a);
      return Jt(t, {
        type: "CONSTRUCT",
        path: i.map((x) => x.toString()),
        argumentList: g
      }, s).then(Bt);
    }
  });
  return $x(o, t), o;
}
function _x(t) {
  return Array.prototype.concat.apply([], t);
}
function ka(t) {
  const i = t.map(bo);
  return [i.map((e) => e[0]), _x(i.map((e) => e[1]))];
}
const d0 = /* @__PURE__ */ new WeakMap();
function el(t, i) {
  return d0.set(t, i), t;
}
function tl(t) {
  return Object.assign(t, { [s0]: !0 });
}
function bo(t) {
  for (const [i, e] of I0)
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
    d0.get(t) || []
  ];
}
function Bt(t) {
  switch (t.type) {
    case "HANDLER":
      return I0.get(t.name).deserialize(t.value);
    case "RAW":
      return t.value;
  }
}
function Jt(t, i, e) {
  return new Promise((n) => {
    const o = nl();
    t.addEventListener("message", function r(a) {
      !a.data || !a.data.id || a.data.id !== o || (t.removeEventListener("message", r), n(a.data));
    }), t.start && t.start(), t.postMessage(Object.assign({ id: o }, i), e);
  });
}
function nl() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
function ol(t, i) {
  const { z: e } = i || {};
  return !e || !t ? !0 : Math.abs(e) < t;
}
function il(t, i, e) {
  const n = a0(e, t), o = g0(i, e);
  return kx(o, n);
}
const A0 = "dmFyIHNlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5Owp2YXIgdWUgPSAobywgdSwgZSkgPT4gdSBpbiBvID8gc2UobywgdSwgeyBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwLCB2YWx1ZTogZSB9KSA6IG9bdV0gPSBlOwp2YXIgWW4gPSAobywgdSwgZSkgPT4gKHVlKG8sIHR5cGVvZiB1ICE9ICJzeW1ib2wiID8gdSArICIiIDogdSwgZSksIGUpOwpjb25zdCBXdCA9IHsKICBzaW1kOiAic2FtX3NpbWQud2FzbSIsCiAgc2FtOiAic2FtLndhc20iCn0sIGxlID0gYXN5bmMgKCkgPT4gV2ViQXNzZW1ibHkudmFsaWRhdGUobmV3IFVpbnQ4QXJyYXkoWzAsIDk3LCAxMTUsIDEwOSwgMSwgMCwgMCwgMCwgMSwgNSwgMSwgOTYsIDAsIDEsIDEyMywgMywgMiwgMSwgMCwgMTAsIDEwLCAxLCA4LCAwLCA2NSwgMCwgMjUzLCAxNSwgMjUzLCA5OCwgMTFdKSk7CmNsYXNzIHggZXh0ZW5kcyBFcnJvciB7CiAgY29uc3RydWN0b3IoZSwgbSkgewogICAgc3VwZXIoZSk7CiAgICBZbih0aGlzLCAiY2F1c2UiKTsKICAgIHRoaXMubmFtZSA9ICJBdXRvQ2FwdHVyZUVycm9yIiwgdGhpcy5jYXVzZSA9IG07CiAgfQogIC8vIENoYW5nZSB0aGlzIHRvIERlY29yYXRvciB3aGVuIHRoZXkgd2lsbCBiZSBpbiBzdGFibGUgcmVsZWFzZQogIHN0YXRpYyBsb2dFcnJvcihlKSB7CiAgfQogIHN0YXRpYyBmcm9tQ2FtZXJhRXJyb3IoZSkgewogICAgaWYgKHRoaXMubG9nRXJyb3IoZSksIGUgaW5zdGFuY2VvZiB4KQogICAgICByZXR1cm4gZTsKICAgIGxldCBtOwogICAgc3dpdGNoIChlLm5hbWUpIHsKICAgICAgY2FzZSAiT3ZlcmNvbnN0cmFpbmVkRXJyb3IiOgogICAgICAgIG0gPSAiTWluaW11bSBxdWFsaXR5IHJlcXVpcmVtZW50cyBhcmUgbm90IG1ldCBieSB5b3VyIGNhbWVyYSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdFJlYWRhYmxlRXJyb3IiOgogICAgICBjYXNlICJBYm9ydEVycm9yIjoKICAgICAgICBtID0gIlRoZSB3ZWJjYW0gaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciBhcHBsaWNhdGlvbiI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdEFsbG93ZWRFcnJvciI6CiAgICAgICAgbSA9ICJUbyB1c2UgeW91ciBjYW1lcmEsIHlvdSBtdXN0IGFsbG93IHBlcm1pc3Npb25zIjsKICAgICAgICBicmVhazsKICAgICAgY2FzZSAiTm90Rm91bmRFcnJvciI6CiAgICAgICAgbSA9ICJUaGVyZSBpcyBubyBjYW1lcmEgYXZhaWxhYmxlIHRvIHlvdSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGRlZmF1bHQ6CiAgICAgICAgbSA9ICJBbiB1bmtub3duIGNhbWVyYSBlcnJvciBoYXMgb2NjdXJyZWQiOwogICAgICAgIGJyZWFrOwogICAgfQogICAgcmV0dXJuIG5ldyB4KG0sIGUpOwogIH0KICBzdGF0aWMgZnJvbUVycm9yKGUpIHsKICAgIGlmICh0aGlzLmxvZ0Vycm9yKGUpLCBlIGluc3RhbmNlb2YgeCkKICAgICAgcmV0dXJuIGU7CiAgICBjb25zdCBtID0gIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkIjsKICAgIHJldHVybiBuZXcgeChtKTsKICB9Cn0KY29uc3QgY2UgPSB7CiAgUkdCOiAiUkdCIiwKICBSR0JBOiAiUkdCQSIKfSwgZmUgPSAobykgPT4gTnVtYmVyLnBhcnNlRmxvYXQoby50b0ZpeGVkKDMpKSwgZGUgPSAobywgdSkgPT4gTWF0aC5taW4obywgdSk7CnZhciBoZSA9IGZ1bmN0aW9uKCkgewogIHZhciBvID0gdHlwZW9mIGRvY3VtZW50IDwgInUiICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgPyBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYyA6IHZvaWQgMDsKICByZXR1cm4gZnVuY3Rpb24odSkgewogICAgdSA9IHUgfHwge307CiAgICB2YXIgZTsKICAgIGUgfHwgKGUgPSB0eXBlb2YgdSA8ICJ1IiA/IHUgOiB7fSk7CiAgICB2YXIgbSwgZzsKICAgIGUucmVhZHkgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihuLCB0KSB7CiAgICAgIG0gPSBuLCBnID0gdDsKICAgIH0pOwogICAgdmFyIF8gPSB7fSwgdzsKICAgIGZvciAodyBpbiBlKQogICAgICBlLmhhc093blByb3BlcnR5KHcpICYmIChfW3ddID0gZVt3XSk7CiAgICB2YXIgVCA9ICIuL3RoaXMucHJvZ3JhbSIsIE0gPSAhMSwgRSA9ICExOwogICAgTSA9IHR5cGVvZiB3aW5kb3cgPT0gIm9iamVjdCIsIEUgPSB0eXBlb2YgaW1wb3J0U2NyaXB0cyA9PSAiZnVuY3Rpb24iOwogICAgdmFyIEMgPSAiIiwgUjsKICAgIChNIHx8IEUpICYmIChFID8gQyA9IHNlbGYubG9jYXRpb24uaHJlZiA6IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgKEMgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYyksIG8gJiYgKEMgPSBvKSwgQy5pbmRleE9mKCJibG9iOiIpICE9PSAwID8gQyA9IEMuc3Vic3RyKDAsIEMubGFzdEluZGV4T2YoIi8iKSArIDEpIDogQyA9ICIiLCBFICYmIChSID0gZnVuY3Rpb24obikgewogICAgICB2YXIgdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOwogICAgICByZXR1cm4gdC5vcGVuKCJHRVQiLCBuLCAhMSksIHQucmVzcG9uc2VUeXBlID0gImFycmF5YnVmZmVyIiwgdC5zZW5kKG51bGwpLCBuZXcgVWludDhBcnJheSh0LnJlc3BvbnNlKTsKICAgIH0pKTsKICAgIHZhciBTID0gZS5wcmludEVyciB8fCBjb25zb2xlLndhcm4uYmluZChjb25zb2xlKTsKICAgIGZvciAodyBpbiBfKQogICAgICBfLmhhc093blByb3BlcnR5KHcpICYmIChlW3ddID0gX1t3XSk7CiAgICBfID0gbnVsbCwgZS50aGlzUHJvZ3JhbSAmJiAoVCA9IGUudGhpc1Byb2dyYW0pOwogICAgdmFyIGo7CiAgICBlLndhc21CaW5hcnkgJiYgKGogPSBlLndhc21CaW5hcnkpLCBlLm5vRXhpdFJ1bnRpbWUgJiYgZS5ub0V4aXRSdW50aW1lLCB0eXBlb2YgV2ViQXNzZW1ibHkgIT0gIm9iamVjdCIgJiYgc24oIm5vIG5hdGl2ZSB3YXNtIHN1cHBvcnQgZGV0ZWN0ZWQiKTsKICAgIHZhciBHLCBrbiA9ICExOwogICAgZnVuY3Rpb24gWG4obikgewogICAgICBuIHx8IHNuKCJBc3NlcnRpb24gZmFpbGVkOiB1bmRlZmluZWQiKTsKICAgIH0KICAgIHZhciBLbiA9IHR5cGVvZiBUZXh0RGVjb2RlciA8ICJ1IiA/IG5ldyBUZXh0RGVjb2RlcigidXRmOCIpIDogdm9pZCAwOwogICAgZnVuY3Rpb24gTnQobiwgdCwgcikgewogICAgICB2YXIgaSA9IEY7CiAgICAgIGlmICgwIDwgcikgewogICAgICAgIHIgPSB0ICsgciAtIDE7CiAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBuLmxlbmd0aDsgKythKSB7CiAgICAgICAgICB2YXIgcyA9IG4uY2hhckNvZGVBdChhKTsKICAgICAgICAgIGlmICg1NTI5NiA8PSBzICYmIDU3MzQzID49IHMpIHsKICAgICAgICAgICAgdmFyIGMgPSBuLmNoYXJDb2RlQXQoKythKTsKICAgICAgICAgICAgcyA9IDY1NTM2ICsgKChzICYgMTAyMykgPDwgMTApIHwgYyAmIDEwMjM7CiAgICAgICAgICB9CiAgICAgICAgICBpZiAoMTI3ID49IHMpIHsKICAgICAgICAgICAgaWYgKHQgPj0gcikKICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgaVt0KytdID0gczsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIGlmICgyMDQ3ID49IHMpIHsKICAgICAgICAgICAgICBpZiAodCArIDEgPj0gcikKICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgIGlbdCsrXSA9IDE5MiB8IHMgPj4gNjsKICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICBpZiAoNjU1MzUgPj0gcykgewogICAgICAgICAgICAgICAgaWYgKHQgKyAyID49IHIpCiAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgaVt0KytdID0gMjI0IHwgcyA+PiAxMjsKICAgICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgaWYgKHQgKyAzID49IHIpCiAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgaVt0KytdID0gMjQwIHwgcyA+PiAxOCwgaVt0KytdID0gMTI4IHwgcyA+PiAxMiAmIDYzOwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgICBpW3QrK10gPSAxMjggfCBzID4+IDYgJiA2MzsKICAgICAgICAgICAgfQogICAgICAgICAgICBpW3QrK10gPSAxMjggfCBzICYgNjM7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIGlbdF0gPSAwOwogICAgICB9CiAgICB9CiAgICB2YXIgUW4gPSB0eXBlb2YgVGV4dERlY29kZXIgPCAidSIgPyBuZXcgVGV4dERlY29kZXIoInV0Zi0xNmxlIikgOiB2b2lkIDA7CiAgICBmdW5jdGlvbiBVdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSBuID4+IDEsIGkgPSByICsgdCAvIDI7ICEociA+PSBpKSAmJiBwbltyXTsgKQogICAgICAgICsrcjsKICAgICAgaWYgKHIgPDw9IDEsIDMyIDwgciAtIG4gJiYgUW4pCiAgICAgICAgcmV0dXJuIFFuLmRlY29kZShGLnN1YmFycmF5KG4sIHIpKTsKICAgICAgZm9yIChyID0gMCwgaSA9ICIiOyA7ICkgewogICAgICAgIHZhciBhID0gUVtuICsgMiAqIHIgPj4gMV07CiAgICAgICAgaWYgKGEgPT0gMCB8fCByID09IHQgLyAyKQogICAgICAgICAgcmV0dXJuIGk7CiAgICAgICAgKytyLCBpICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYSk7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIEh0KG4sIHQsIHIpIHsKICAgICAgaWYgKHIgPT09IHZvaWQgMCAmJiAociA9IDIxNDc0ODM2NDcpLCAyID4gcikKICAgICAgICByZXR1cm4gMDsKICAgICAgciAtPSAyOwogICAgICB2YXIgaSA9IHQ7CiAgICAgIHIgPSByIDwgMiAqIG4ubGVuZ3RoID8gciAvIDIgOiBuLmxlbmd0aDsKICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCByOyArK2EpCiAgICAgICAgUVt0ID4+IDFdID0gbi5jaGFyQ29kZUF0KGEpLCB0ICs9IDI7CiAgICAgIHJldHVybiBRW3QgPj4gMV0gPSAwLCB0IC0gaTsKICAgIH0KICAgIGZ1bmN0aW9uIHp0KG4pIHsKICAgICAgcmV0dXJuIDIgKiBuLmxlbmd0aDsKICAgIH0KICAgIGZ1bmN0aW9uIER0KG4sIHQpIHsKICAgICAgZm9yICh2YXIgciA9IDAsIGkgPSAiIjsgIShyID49IHQgLyA0KTsgKSB7CiAgICAgICAgdmFyIGEgPSBPW24gKyA0ICogciA+PiAyXTsKICAgICAgICBpZiAoYSA9PSAwKQogICAgICAgICAgYnJlYWs7CiAgICAgICAgKytyLCA2NTUzNiA8PSBhID8gKGEgLT0gNjU1MzYsIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiB8IGEgPj4gMTAsIDU2MzIwIHwgYSAmIDEwMjMpKSA6IGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShhKTsKICAgICAgfQogICAgICByZXR1cm4gaTsKICAgIH0KICAgIGZ1bmN0aW9uIEJ0KG4sIHQsIHIpIHsKICAgICAgaWYgKHIgPT09IHZvaWQgMCAmJiAociA9IDIxNDc0ODM2NDcpLCA0ID4gcikKICAgICAgICByZXR1cm4gMDsKICAgICAgdmFyIGkgPSB0OwogICAgICByID0gaSArIHIgLSA0OwogICAgICBmb3IgKHZhciBhID0gMDsgYSA8IG4ubGVuZ3RoOyArK2EpIHsKICAgICAgICB2YXIgcyA9IG4uY2hhckNvZGVBdChhKTsKICAgICAgICBpZiAoNTUyOTYgPD0gcyAmJiA1NzM0MyA+PSBzKSB7CiAgICAgICAgICB2YXIgYyA9IG4uY2hhckNvZGVBdCgrK2EpOwogICAgICAgICAgcyA9IDY1NTM2ICsgKChzICYgMTAyMykgPDwgMTApIHwgYyAmIDEwMjM7CiAgICAgICAgfQogICAgICAgIGlmIChPW3QgPj4gMl0gPSBzLCB0ICs9IDQsIHQgKyA0ID4gcikKICAgICAgICAgIGJyZWFrOwogICAgICB9CiAgICAgIHJldHVybiBPW3QgPj4gMl0gPSAwLCB0IC0gaTsKICAgIH0KICAgIGZ1bmN0aW9uIFZ0KG4pIHsKICAgICAgZm9yICh2YXIgdCA9IDAsIHIgPSAwOyByIDwgbi5sZW5ndGg7ICsrcikgewogICAgICAgIHZhciBpID0gbi5jaGFyQ29kZUF0KHIpOwogICAgICAgIDU1Mjk2IDw9IGkgJiYgNTczNDMgPj0gaSAmJiArK3IsIHQgKz0gNDsKICAgICAgfQogICAgICByZXR1cm4gdDsKICAgIH0KICAgIHZhciBLLCBZLCBGLCBRLCBwbiwgTywgVSwgcW4sIG50OwogICAgZnVuY3Rpb24gdHQobikgewogICAgICBLID0gbiwgZS5IRUFQOCA9IFkgPSBuZXcgSW50OEFycmF5KG4pLCBlLkhFQVAxNiA9IFEgPSBuZXcgSW50MTZBcnJheShuKSwgZS5IRUFQMzIgPSBPID0gbmV3IEludDMyQXJyYXkobiksIGUuSEVBUFU4ID0gRiA9IG5ldyBVaW50OEFycmF5KG4pLCBlLkhFQVBVMTYgPSBwbiA9IG5ldyBVaW50MTZBcnJheShuKSwgZS5IRUFQVTMyID0gVSA9IG5ldyBVaW50MzJBcnJheShuKSwgZS5IRUFQRjMyID0gcW4gPSBuZXcgRmxvYXQzMkFycmF5KG4pLCBlLkhFQVBGNjQgPSBudCA9IG5ldyBGbG9hdDY0QXJyYXkobik7CiAgICB9CiAgICB2YXIgZXQgPSBlLklOSVRJQUxfTUVNT1JZIHx8IDE2Nzc3MjE2OwogICAgZS53YXNtTWVtb3J5ID8gRyA9IGUud2FzbU1lbW9yeSA6IEcgPSBuZXcgV2ViQXNzZW1ibHkuTWVtb3J5KHsgaW5pdGlhbDogZXQgLyA2NTUzNiwgbWF4aW11bTogMzI3NjggfSksIEcgJiYgKEsgPSBHLmJ1ZmZlciksIGV0ID0gSy5ieXRlTGVuZ3RoLCB0dChLKTsKICAgIHZhciBydCA9IFtdLCBpdCA9IFtdLCBHdCA9IFtdLCBhdCA9IFtdOwogICAgZnVuY3Rpb24gWXQoKSB7CiAgICAgIHZhciBuID0gZS5wcmVSdW4uc2hpZnQoKTsKICAgICAgcnQudW5zaGlmdChuKTsKICAgIH0KICAgIHZhciBaID0gMCwgb24gPSBudWxsOwogICAgZS5wcmVsb2FkZWRJbWFnZXMgPSB7fSwgZS5wcmVsb2FkZWRBdWRpb3MgPSB7fTsKICAgIGZ1bmN0aW9uIHNuKG4pIHsKICAgICAgdGhyb3cgZS5vbkFib3J0ICYmIGUub25BYm9ydChuKSwgUyhuKSwga24gPSAhMCwgbiA9IG5ldyBXZWJBc3NlbWJseS5SdW50aW1lRXJyb3IoImFib3J0KCIgKyBuICsgIikuIEJ1aWxkIHdpdGggLXMgQVNTRVJUSU9OUz0xIGZvciBtb3JlIGluZm8uIiksIGcobiksIG47CiAgICB9CiAgICBmdW5jdGlvbiBSbihuKSB7CiAgICAgIHZhciB0ID0gJDsKICAgICAgcmV0dXJuIFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCA/IHQuc3RhcnRzV2l0aChuKSA6IHQuaW5kZXhPZihuKSA9PT0gMDsKICAgIH0KICAgIGZ1bmN0aW9uIG90KCkgewogICAgICByZXR1cm4gUm4oImRhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCwiKTsKICAgIH0KICAgIHZhciAkID0gInNhbS53YXNtIjsKICAgIGlmICghb3QoKSkgewogICAgICB2YXIgc3QgPSAkOwogICAgICAkID0gZS5sb2NhdGVGaWxlID8gZS5sb2NhdGVGaWxlKHN0LCBDKSA6IEMgKyBzdDsKICAgIH0KICAgIGZ1bmN0aW9uIHV0KCkgewogICAgICB0cnkgewogICAgICAgIGlmIChqKQogICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGopOwogICAgICAgIGlmIChSKQogICAgICAgICAgcmV0dXJuIFIoJCk7CiAgICAgICAgdGhyb3cgImJvdGggYXN5bmMgYW5kIHN5bmMgZmV0Y2hpbmcgb2YgdGhlIHdhc20gZmFpbGVkIjsKICAgICAgfSBjYXRjaCAobikgewogICAgICAgIHNuKG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBadCgpIHsKICAgICAgcmV0dXJuIGogfHwgIU0gJiYgIUUgfHwgdHlwZW9mIGZldGNoICE9ICJmdW5jdGlvbiIgfHwgUm4oImZpbGU6Ly8iKSA/IFByb21pc2UucmVzb2x2ZSgpLnRoZW4odXQpIDogZmV0Y2goJCwgeyBjcmVkZW50aWFsczogInNhbWUtb3JpZ2luIiB9KS50aGVuKGZ1bmN0aW9uKG4pIHsKICAgICAgICBpZiAoIW4ub2spCiAgICAgICAgICB0aHJvdyAiZmFpbGVkIHRvIGxvYWQgd2FzbSBiaW5hcnkgZmlsZSBhdCAnIiArICQgKyAiJyI7CiAgICAgICAgcmV0dXJuIG4uYXJyYXlCdWZmZXIoKTsKICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oKSB7CiAgICAgICAgcmV0dXJuIHV0KCk7CiAgICAgIH0pOwogICAgfQogICAgZnVuY3Rpb24geW4obikgewogICAgICBmb3IgKDsgMCA8IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4uc2hpZnQoKTsKICAgICAgICBpZiAodHlwZW9mIHQgPT0gImZ1bmN0aW9uIikKICAgICAgICAgIHQoZSk7CiAgICAgICAgZWxzZSB7CiAgICAgICAgICB2YXIgciA9IHQuQmE7CiAgICAgICAgICB0eXBlb2YgciA9PSAibnVtYmVyIiA/IHQudGEgPT09IHZvaWQgMCA/IEZuKCJ2IiwgcikoKSA6IEZuKCJ2aSIsIHIpKHQudGEpIDogcih0LnRhID09PSB2b2lkIDAgPyBudWxsIDogdC50YSk7CiAgICAgICAgfQogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBGbihuLCB0KSB7CiAgICAgIHZhciByID0gW107CiAgICAgIHJldHVybiBmdW5jdGlvbigpIHsKICAgICAgICByLmxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7CiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspCiAgICAgICAgICByW2ldID0gYXJndW1lbnRzW2ldOwogICAgICAgIHJldHVybiByICYmIHIubGVuZ3RoID8gZVsiZHluQ2FsbF8iICsgbl0uYXBwbHkobnVsbCwgW3RdLmNvbmNhdChyKSkgOiBlWyJkeW5DYWxsXyIgKyBuXS5jYWxsKG51bGwsIHQpOwogICAgICB9OwogICAgfQogICAgZnVuY3Rpb24gJHQobikgewogICAgICB0aGlzLmRhID0gbiAtIDE2LCB0aGlzLk9hID0gZnVuY3Rpb24odCkgewogICAgICAgIE9bdGhpcy5kYSArIDggPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLkxhID0gZnVuY3Rpb24odCkgewogICAgICAgIE9bdGhpcy5kYSArIDAgPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLk1hID0gZnVuY3Rpb24oKSB7CiAgICAgICAgT1t0aGlzLmRhICsgNCA+PiAyXSA9IDA7CiAgICAgIH0sIHRoaXMuS2EgPSBmdW5jdGlvbigpIHsKICAgICAgICBZW3RoaXMuZGEgKyAxMiA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuTmEgPSBmdW5jdGlvbigpIHsKICAgICAgICBZW3RoaXMuZGEgKyAxMyA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuRmEgPSBmdW5jdGlvbih0LCByKSB7CiAgICAgICAgdGhpcy5PYSh0KSwgdGhpcy5MYShyKSwgdGhpcy5NYSgpLCB0aGlzLkthKCksIHRoaXMuTmEoKTsKICAgICAgfTsKICAgIH0KICAgIGZ1bmN0aW9uIG1uKCkgewogICAgICByZXR1cm4gMCA8IG1uLnhhOwogICAgfQogICAgZnVuY3Rpb24geG4obikgewogICAgICBzd2l0Y2ggKG4pIHsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICByZXR1cm4gMDsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIDQ6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlIDg6CiAgICAgICAgICByZXR1cm4gMzsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biB0eXBlIHNpemU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgdmFyIGx0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gVyhuKSB7CiAgICAgIGZvciAodmFyIHQgPSAiIjsgRltuXTsgKQogICAgICAgIHQgKz0gbHRbRltuKytdXTsKICAgICAgcmV0dXJuIHQ7CiAgICB9CiAgICB2YXIgcSA9IHt9LCBKID0ge30sIHZuID0ge307CiAgICBmdW5jdGlvbiBJbihuKSB7CiAgICAgIGlmIChuID09PSB2b2lkIDApCiAgICAgICAgcmV0dXJuICJfdW5rbm93biI7CiAgICAgIG4gPSBuLnJlcGxhY2UoL1teYS16QS1aMC05X10vZywgIiQiKTsKICAgICAgdmFyIHQgPSBuLmNoYXJDb2RlQXQoMCk7CiAgICAgIHJldHVybiA0OCA8PSB0ICYmIDU3ID49IHQgPyAiXyIgKyBuIDogbjsKICAgIH0KICAgIGZ1bmN0aW9uIGpuKG4sIHQpIHsKICAgICAgcmV0dXJuIG4gPSBJbihuKSwgbmV3IEZ1bmN0aW9uKCJib2R5IiwgInJldHVybiBmdW5jdGlvbiAiICsgbiArIGAoKSB7CiAgICAidXNlIHN0cmljdCI7ICAgIHJldHVybiBib2R5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7Cn07CmApKHQpOwogICAgfQogICAgZnVuY3Rpb24gTG4obikgewogICAgICB2YXIgdCA9IEVycm9yLCByID0gam4obiwgZnVuY3Rpb24oaSkgewogICAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMubWVzc2FnZSA9IGksIGkgPSBFcnJvcihpKS5zdGFjaywgaSAhPT0gdm9pZCAwICYmICh0aGlzLnN0YWNrID0gdGhpcy50b1N0cmluZygpICsgYApgICsgaS5yZXBsYWNlKC9eRXJyb3IoOlteXG5dKik/XG4vLCAiIikpOwogICAgICB9KTsKICAgICAgcmV0dXJuIHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSksIHIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gciwgci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlID09PSB2b2lkIDAgPyB0aGlzLm5hbWUgOiB0aGlzLm5hbWUgKyAiOiAiICsgdGhpcy5tZXNzYWdlOwogICAgICB9LCByOwogICAgfQogICAgdmFyIG5uID0gdm9pZCAwOwogICAgZnVuY3Rpb24gdihuKSB7CiAgICAgIHRocm93IG5ldyBubihuKTsKICAgIH0KICAgIHZhciBjdCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIGduKG4pIHsKICAgICAgdGhyb3cgbmV3IGN0KG4pOwogICAgfQogICAgZnVuY3Rpb24gdG4obiwgdCwgcikgewogICAgICBmdW5jdGlvbiBpKGwpIHsKICAgICAgICBsID0gcihsKSwgbC5sZW5ndGggIT09IG4ubGVuZ3RoICYmIGduKCJNaXNtYXRjaGVkIHR5cGUgY29udmVydGVyIGNvdW50Iik7CiAgICAgICAgZm9yICh2YXIgcCA9IDA7IHAgPCBuLmxlbmd0aDsgKytwKQogICAgICAgICAgSChuW3BdLCBsW3BdKTsKICAgICAgfQogICAgICBuLmZvckVhY2goZnVuY3Rpb24obCkgewogICAgICAgIHZuW2xdID0gdDsKICAgICAgfSk7CiAgICAgIHZhciBhID0gQXJyYXkodC5sZW5ndGgpLCBzID0gW10sIGMgPSAwOwogICAgICB0LmZvckVhY2goZnVuY3Rpb24obCwgcCkgewogICAgICAgIEouaGFzT3duUHJvcGVydHkobCkgPyBhW3BdID0gSltsXSA6IChzLnB1c2gobCksIHEuaGFzT3duUHJvcGVydHkobCkgfHwgKHFbbF0gPSBbXSksIHFbbF0ucHVzaChmdW5jdGlvbigpIHsKICAgICAgICAgIGFbcF0gPSBKW2xdLCArK2MsIGMgPT09IHMubGVuZ3RoICYmIGkoYSk7CiAgICAgICAgfSkpOwogICAgICB9KSwgcy5sZW5ndGggPT09IDAgJiYgaShhKTsKICAgIH0KICAgIGZ1bmN0aW9uIEgobiwgdCwgcikgewogICAgICBpZiAociA9IHIgfHwge30sICEoImFyZ1BhY2tBZHZhbmNlIiBpbiB0KSkKICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJyZWdpc3RlclR5cGUgcmVnaXN0ZXJlZEluc3RhbmNlIHJlcXVpcmVzIGFyZ1BhY2tBZHZhbmNlIik7CiAgICAgIHZhciBpID0gdC5uYW1lOwogICAgICBpZiAobiB8fCB2KCd0eXBlICInICsgaSArICciIG11c3QgaGF2ZSBhIHBvc2l0aXZlIGludGVnZXIgdHlwZWlkIHBvaW50ZXInKSwgSi5oYXNPd25Qcm9wZXJ0eShuKSkgewogICAgICAgIGlmIChyLkVhKQogICAgICAgICAgcmV0dXJuOwogICAgICAgIHYoIkNhbm5vdCByZWdpc3RlciB0eXBlICciICsgaSArICInIHR3aWNlIik7CiAgICAgIH0KICAgICAgSltuXSA9IHQsIGRlbGV0ZSB2bltuXSwgcS5oYXNPd25Qcm9wZXJ0eShuKSAmJiAodCA9IHFbbl0sIGRlbGV0ZSBxW25dLCB0LmZvckVhY2goZnVuY3Rpb24oYSkgewogICAgICAgIGEoKTsKICAgICAgfSkpOwogICAgfQogICAgZnVuY3Rpb24gSnQobikgewogICAgICByZXR1cm4geyBjb3VudDogbi5jb3VudCwgb2E6IG4ub2EsIHBhOiBuLnBhLCBkYTogbi5kYSwgZmE6IG4uZmEsIGdhOiBuLmdhLCBoYTogbi5oYSB9OwogICAgfQogICAgZnVuY3Rpb24gTm4obikgewogICAgICB2KG4uQS5mYS5lYS5uYW1lICsgIiBpbnN0YW5jZSBhbHJlYWR5IGRlbGV0ZWQiKTsKICAgIH0KICAgIHZhciBVbiA9ICExOwogICAgZnVuY3Rpb24gZnQoKSB7CiAgICB9CiAgICBmdW5jdGlvbiBkdChuKSB7CiAgICAgIC0tbi5jb3VudC52YWx1ZSwgbi5jb3VudC52YWx1ZSA9PT0gMCAmJiAobi5nYSA/IG4uaGEubmEobi5nYSkgOiBuLmZhLmVhLm5hKG4uZGEpKTsKICAgIH0KICAgIGZ1bmN0aW9uIHVuKG4pIHsKICAgICAgcmV0dXJuIHR5cGVvZiBGaW5hbGl6YXRpb25Hcm91cCA+ICJ1IiA/ICh1biA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICByZXR1cm4gdDsKICAgICAgfSwgbikgOiAoVW4gPSBuZXcgRmluYWxpemF0aW9uR3JvdXAoZnVuY3Rpb24odCkgewogICAgICAgIGZvciAodmFyIHIgPSB0Lm5leHQoKTsgIXIuZG9uZTsgciA9IHQubmV4dCgpKQogICAgICAgICAgciA9IHIudmFsdWUsIHIuZGEgPyBkdChyKSA6IGNvbnNvbGUud2Fybigib2JqZWN0IGFscmVhZHkgZGVsZXRlZDogIiArIHIuZGEpOwogICAgICB9KSwgdW4gPSBmdW5jdGlvbih0KSB7CiAgICAgICAgcmV0dXJuIFVuLnJlZ2lzdGVyKHQsIHQuQSwgdC5BKSwgdDsKICAgICAgfSwgZnQgPSBmdW5jdGlvbih0KSB7CiAgICAgICAgVW4udW5yZWdpc3Rlcih0LkEpOwogICAgICB9LCB1bihuKSk7CiAgICB9CiAgICB2YXIgbG4gPSB2b2lkIDAsIGNuID0gW107CiAgICBmdW5jdGlvbiBIbigpIHsKICAgICAgZm9yICg7IGNuLmxlbmd0aDsgKSB7CiAgICAgICAgdmFyIG4gPSBjbi5wb3AoKTsKICAgICAgICBuLkEub2EgPSAhMSwgbi5kZWxldGUoKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gQigpIHsKICAgIH0KICAgIHZhciBodCA9IHt9OwogICAgZnVuY3Rpb24gWHQobiwgdCkgewogICAgICB2YXIgciA9IGU7CiAgICAgIGlmIChyW25dLmphID09PSB2b2lkIDApIHsKICAgICAgICB2YXIgaSA9IHJbbl07CiAgICAgICAgcltuXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgcmV0dXJuIHJbbl0uamEuaGFzT3duUHJvcGVydHkoYXJndW1lbnRzLmxlbmd0aCkgfHwgdigiRnVuY3Rpb24gJyIgKyB0ICsgIicgY2FsbGVkIHdpdGggYW4gaW52YWxpZCBudW1iZXIgb2YgYXJndW1lbnRzICgiICsgYXJndW1lbnRzLmxlbmd0aCArICIpIC0gZXhwZWN0cyBvbmUgb2YgKCIgKyByW25dLmphICsgIikhIiksIHJbbl0uamFbYXJndW1lbnRzLmxlbmd0aF0uYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICB9LCByW25dLmphID0gW10sIHJbbl0uamFbaS55YV0gPSBpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBwdChuLCB0LCByKSB7CiAgICAgIGUuaGFzT3duUHJvcGVydHkobikgPyAoKHIgPT09IHZvaWQgMCB8fCBlW25dLmphICE9PSB2b2lkIDAgJiYgZVtuXS5qYVtyXSAhPT0gdm9pZCAwKSAmJiB2KCJDYW5ub3QgcmVnaXN0ZXIgcHVibGljIG5hbWUgJyIgKyBuICsgIicgdHdpY2UiKSwgWHQobiwgbiksIGUuaGFzT3duUHJvcGVydHkocikgJiYgdigiQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIG92ZXJsb2FkcyBvZiBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgbnVtYmVyIG9mIGFyZ3VtZW50cyAoIiArIHIgKyAiKSEiKSwgZVtuXS5qYVtyXSA9IHQpIDogKGVbbl0gPSB0LCByICE9PSB2b2lkIDAgJiYgKGVbbl0uUmEgPSByKSk7CiAgICB9CiAgICBmdW5jdGlvbiBLdChuLCB0LCByLCBpLCBhLCBzLCBjLCBsKSB7CiAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMuY29uc3RydWN0b3IgPSB0LCB0aGlzLm1hID0gciwgdGhpcy5uYSA9IGksIHRoaXMuaWEgPSBhLCB0aGlzLkNhID0gcywgdGhpcy5xYSA9IGMsIHRoaXMuQWEgPSBsOwogICAgfQogICAgZnVuY3Rpb24gd24obiwgdCwgcikgewogICAgICBmb3IgKDsgdCAhPT0gcjsgKQogICAgICAgIHQucWEgfHwgdigiRXhwZWN0ZWQgbnVsbCBvciBpbnN0YW5jZSBvZiAiICsgci5uYW1lICsgIiwgZ290IGFuIGluc3RhbmNlIG9mICIgKyB0Lm5hbWUpLCBuID0gdC5xYShuKSwgdCA9IHQuaWE7CiAgICAgIHJldHVybiBuOwogICAgfQogICAgZnVuY3Rpb24gUXQobiwgdCkgewogICAgICByZXR1cm4gdCA9PT0gbnVsbCA/ICh0aGlzLnVhICYmIHYoIm51bGwgaXMgbm90IGEgdmFsaWQgIiArIHRoaXMubmFtZSksIDApIDogKHQuQSB8fCB2KCdDYW5ub3QgcGFzcyAiJyArIHJuKHQpICsgJyIgYXMgYSAnICsgdGhpcy5uYW1lKSwgdC5BLmRhIHx8IHYoIkNhbm5vdCBwYXNzIGRlbGV0ZWQgb2JqZWN0IGFzIGEgcG9pbnRlciBvZiB0eXBlICIgKyB0aGlzLm5hbWUpLCB3bih0LkEuZGEsIHQuQS5mYS5lYSwgdGhpcy5lYSkpOwogICAgfQogICAgZnVuY3Rpb24gcXQobiwgdCkgewogICAgICBpZiAodCA9PT0gbnVsbCkgewogICAgICAgIGlmICh0aGlzLnVhICYmIHYoIm51bGwgaXMgbm90IGEgdmFsaWQgIiArIHRoaXMubmFtZSksIHRoaXMuc2EpIHsKICAgICAgICAgIHZhciByID0gdGhpcy5IYSgpOwogICAgICAgICAgcmV0dXJuIG4gIT09IG51bGwgJiYgbi5wdXNoKHRoaXMubmEsIHIpLCByOwogICAgICAgIH0KICAgICAgICByZXR1cm4gMDsKICAgICAgfQogICAgICBpZiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgcm4odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksICF0aGlzLnJhICYmIHQuQS5mYS5yYSAmJiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyAodC5BLmhhID8gdC5BLmhhLm5hbWUgOiB0LkEuZmEubmFtZSkgKyAiIHRvIHBhcmFtZXRlciB0eXBlICIgKyB0aGlzLm5hbWUpLCByID0gd24odC5BLmRhLCB0LkEuZmEuZWEsIHRoaXMuZWEpLCB0aGlzLnNhKQogICAgICAgIHN3aXRjaCAodC5BLmdhID09PSB2b2lkIDAgJiYgdigiUGFzc2luZyByYXcgcG9pbnRlciB0byBzbWFydCBwb2ludGVyIGlzIGlsbGVnYWwiKSwgdGhpcy5QYSkgewogICAgICAgICAgY2FzZSAwOgogICAgICAgICAgICB0LkEuaGEgPT09IHRoaXMgPyByID0gdC5BLmdhIDogdigiQ2Fubm90IGNvbnZlcnQgYXJndW1lbnQgb2YgdHlwZSAiICsgKHQuQS5oYSA/IHQuQS5oYS5uYW1lIDogdC5BLmZhLm5hbWUpICsgIiB0byBwYXJhbWV0ZXIgdHlwZSAiICsgdGhpcy5uYW1lKTsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICBjYXNlIDE6CiAgICAgICAgICAgIHIgPSB0LkEuZ2E7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgY2FzZSAyOgogICAgICAgICAgICBpZiAodC5BLmhhID09PSB0aGlzKQogICAgICAgICAgICAgIHIgPSB0LkEuZ2E7CiAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgIHZhciBpID0gdC5jbG9uZSgpOwogICAgICAgICAgICAgIHIgPSB0aGlzLklhKHIsIGVuKGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgICAgaS5kZWxldGUoKTsKICAgICAgICAgICAgICB9KSksIG4gIT09IG51bGwgJiYgbi5wdXNoKHRoaXMubmEsIHIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgZGVmYXVsdDoKICAgICAgICAgICAgdigiVW5zdXBwb3J0aW5nIHNoYXJpbmcgcG9saWN5Iik7CiAgICAgICAgfQogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIG5lKG4sIHQpIHsKICAgICAgcmV0dXJuIHQgPT09IG51bGwgPyAodGhpcy51YSAmJiB2KCJudWxsIGlzIG5vdCBhIHZhbGlkICIgKyB0aGlzLm5hbWUpLCAwKSA6ICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBybih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgdC5BLmZhLnJhICYmIHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArIHQuQS5mYS5uYW1lICsgIiB0byBwYXJhbWV0ZXIgdHlwZSAiICsgdGhpcy5uYW1lKSwgd24odC5BLmRhLCB0LkEuZmEuZWEsIHRoaXMuZWEpKTsKICAgIH0KICAgIGZ1bmN0aW9uIEFuKG4pIHsKICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKFVbbiA+PiAyXSk7CiAgICB9CiAgICBmdW5jdGlvbiB5dChuLCB0LCByKSB7CiAgICAgIHJldHVybiB0ID09PSByID8gbiA6IHIuaWEgPT09IHZvaWQgMCA/IG51bGwgOiAobiA9IHl0KG4sIHQsIHIuaWEpLCBuID09PSBudWxsID8gbnVsbCA6IHIuQWEobikpOwogICAgfQogICAgdmFyIGZuID0ge307CiAgICBmdW5jdGlvbiB0ZShuLCB0KSB7CiAgICAgIGZvciAodCA9PT0gdm9pZCAwICYmIHYoInB0ciBzaG91bGQgbm90IGJlIHVuZGVmaW5lZCIpOyBuLmlhOyApCiAgICAgICAgdCA9IG4ucWEodCksIG4gPSBuLmlhOwogICAgICByZXR1cm4gZm5bdF07CiAgICB9CiAgICBmdW5jdGlvbiBfbihuLCB0KSB7CiAgICAgIHJldHVybiB0LmZhICYmIHQuZGEgfHwgZ24oIm1ha2VDbGFzc0hhbmRsZSByZXF1aXJlcyBwdHIgYW5kIHB0clR5cGUiKSwgISF0LmhhICE9ICEhdC5nYSAmJiBnbigiQm90aCBzbWFydFB0clR5cGUgYW5kIHNtYXJ0UHRyIG11c3QgYmUgc3BlY2lmaWVkIiksIHQuY291bnQgPSB7IHZhbHVlOiAxIH0sIHVuKE9iamVjdC5jcmVhdGUobiwgeyBBOiB7IHZhbHVlOiB0IH0gfSkpOwogICAgfQogICAgZnVuY3Rpb24geihuLCB0LCByLCBpKSB7CiAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMuZWEgPSB0LCB0aGlzLnVhID0gciwgdGhpcy5yYSA9IGksIHRoaXMuc2EgPSAhMSwgdGhpcy5uYSA9IHRoaXMuSWEgPSB0aGlzLkhhID0gdGhpcy53YSA9IHRoaXMuUGEgPSB0aGlzLkdhID0gdm9pZCAwLCB0LmlhICE9PSB2b2lkIDAgPyB0aGlzLnRvV2lyZVR5cGUgPSBxdCA6ICh0aGlzLnRvV2lyZVR5cGUgPSBpID8gUXQgOiBuZSwgdGhpcy5rYSA9IG51bGwpOwogICAgfQogICAgZnVuY3Rpb24gbXQobiwgdCwgcikgewogICAgICBlLmhhc093blByb3BlcnR5KG4pIHx8IGduKCJSZXBsYWNpbmcgbm9uZXhpc3RhbnQgcHVibGljIHN5bWJvbCIpLCBlW25dLmphICE9PSB2b2lkIDAgJiYgciAhPT0gdm9pZCAwID8gZVtuXS5qYVtyXSA9IHQgOiAoZVtuXSA9IHQsIGVbbl0ueWEgPSByKTsKICAgIH0KICAgIGZ1bmN0aW9uIFYobiwgdCkgewogICAgICBuID0gVyhuKTsKICAgICAgdmFyIHIgPSBGbihuLCB0KTsKICAgICAgcmV0dXJuIHR5cGVvZiByICE9ICJmdW5jdGlvbiIgJiYgdigidW5rbm93biBmdW5jdGlvbiBwb2ludGVyIHdpdGggc2lnbmF0dXJlICIgKyBuICsgIjogIiArIHQpLCByOwogICAgfQogICAgdmFyIHZ0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gZ3QobikgewogICAgICBuID0gYnQobik7CiAgICAgIHZhciB0ID0gVyhuKTsKICAgICAgcmV0dXJuIEQobiksIHQ7CiAgICB9CiAgICBmdW5jdGlvbiBkbihuLCB0KSB7CiAgICAgIGZ1bmN0aW9uIHIocykgewogICAgICAgIGFbc10gfHwgSltzXSB8fCAodm5bc10gPyB2bltzXS5mb3JFYWNoKHIpIDogKGkucHVzaChzKSwgYVtzXSA9ICEwKSk7CiAgICAgIH0KICAgICAgdmFyIGkgPSBbXSwgYSA9IHt9OwogICAgICB0aHJvdyB0LmZvckVhY2gociksIG5ldyB2dChuICsgIjogIiArIGkubWFwKGd0KS5qb2luKFsiLCAiXSkpOwogICAgfQogICAgZnVuY3Rpb24gd3QobiwgdCkgewogICAgICBmb3IgKHZhciByID0gW10sIGkgPSAwOyBpIDwgbjsgaSsrKQogICAgICAgIHIucHVzaChPWyh0ID4+IDIpICsgaV0pOwogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIENuKG4pIHsKICAgICAgZm9yICg7IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4ucG9wKCk7CiAgICAgICAgbi5wb3AoKSh0KTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gQXQobiwgdCwgcikgewogICAgICByZXR1cm4gbiBpbnN0YW5jZW9mIE9iamVjdCB8fCB2KHIgKyAnIHdpdGggaW52YWxpZCAidGhpcyI6ICcgKyBuKSwgbiBpbnN0YW5jZW9mIHQuZWEuY29uc3RydWN0b3IgfHwgdihyICsgJyBpbmNvbXBhdGlibGUgd2l0aCAidGhpcyIgb2YgdHlwZSAnICsgbi5jb25zdHJ1Y3Rvci5uYW1lKSwgbi5BLmRhIHx8IHYoImNhbm5vdCBjYWxsIGVtc2NyaXB0ZW4gYmluZGluZyBtZXRob2QgIiArIHIgKyAiIG9uIGRlbGV0ZWQgb2JqZWN0IiksIHduKG4uQS5kYSwgbi5BLmZhLmVhLCB0LmVhKTsKICAgIH0KICAgIHZhciB6biA9IFtdLCBJID0gW3t9LCB7IHZhbHVlOiB2b2lkIDAgfSwgeyB2YWx1ZTogbnVsbCB9LCB7IHZhbHVlOiAhMCB9LCB7IHZhbHVlOiAhMSB9XTsKICAgIGZ1bmN0aW9uIERuKG4pIHsKICAgICAgNCA8IG4gJiYgLS1JW25dLkphID09PSAwICYmIChJW25dID0gdm9pZCAwLCB6bi5wdXNoKG4pKTsKICAgIH0KICAgIGZ1bmN0aW9uIGVuKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSB2b2lkIDA6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIG51bGw6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlICEwOgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgY2FzZSAhMToKICAgICAgICAgIHJldHVybiA0OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB2YXIgdCA9IHpuLmxlbmd0aCA/IHpuLnBvcCgpIDogSS5sZW5ndGg7CiAgICAgICAgICByZXR1cm4gSVt0XSA9IHsgSmE6IDEsIHZhbHVlOiBuIH0sIHQ7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHJuKG4pIHsKICAgICAgaWYgKG4gPT09IG51bGwpCiAgICAgICAgcmV0dXJuICJudWxsIjsKICAgICAgdmFyIHQgPSB0eXBlb2YgbjsKICAgICAgcmV0dXJuIHQgPT09ICJvYmplY3QiIHx8IHQgPT09ICJhcnJheSIgfHwgdCA9PT0gImZ1bmN0aW9uIiA/IG4udG9TdHJpbmcoKSA6ICIiICsgbjsKICAgIH0KICAgIGZ1bmN0aW9uIGVlKG4sIHQpIHsKICAgICAgc3dpdGNoICh0KSB7CiAgICAgICAgY2FzZSAyOgogICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHIpIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKHFuW3IgPj4gMl0pOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDM6CiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24ocikgewogICAgICAgICAgICByZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUobnRbciA+PiAzXSk7CiAgICAgICAgICB9OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGZsb2F0IHR5cGU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gcmUobikgewogICAgICB2YXIgdCA9IEZ1bmN0aW9uOwogICAgICBpZiAoISh0IGluc3RhbmNlb2YgRnVuY3Rpb24pKQogICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIm5ld18gY2FsbGVkIHdpdGggY29uc3RydWN0b3IgdHlwZSAiICsgdHlwZW9mIHQgKyAiIHdoaWNoIGlzIG5vdCBhIGZ1bmN0aW9uIik7CiAgICAgIHZhciByID0gam4odC5uYW1lIHx8ICJ1bmtub3duRnVuY3Rpb25OYW1lIiwgZnVuY3Rpb24oKSB7CiAgICAgIH0pOwogICAgICByZXR1cm4gci5wcm90b3R5cGUgPSB0LnByb3RvdHlwZSwgciA9IG5ldyByKCksIG4gPSB0LmFwcGx5KHIsIG4pLCBuIGluc3RhbmNlb2YgT2JqZWN0ID8gbiA6IHI7CiAgICB9CiAgICBmdW5jdGlvbiBpZShuLCB0LCByKSB7CiAgICAgIHN3aXRjaCAodCkgewogICAgICAgIGNhc2UgMDoKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gWVtpXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBGW2ldOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICByZXR1cm4gciA/IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIFFbaSA+PiAxXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBwbltpID4+IDFdOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gciA/IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIE9baSA+PiAyXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBVW2kgPj4gMl07CiAgICAgICAgICB9OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGludGVnZXIgdHlwZTogIiArIG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBCbihuKSB7CiAgICAgIHJldHVybiBuIHx8IHYoIkNhbm5vdCB1c2UgZGVsZXRlZCB2YWwuIGhhbmRsZSA9ICIgKyBuKSwgSVtuXS52YWx1ZTsKICAgIH0KICAgIGZ1bmN0aW9uIF90KG4sIHQpIHsKICAgICAgdmFyIHIgPSBKW25dOwogICAgICByZXR1cm4gciA9PT0gdm9pZCAwICYmIHYodCArICIgaGFzIHVua25vd24gdHlwZSAiICsgZ3QobikpLCByOwogICAgfQogICAgdmFyIGFlID0ge30sIEN0ID0ge307CiAgICBmdW5jdGlvbiBFdCgpIHsKICAgICAgaWYgKCFWbikgewogICAgICAgIHZhciBuID0geyBVU0VSOiAid2ViX3VzZXIiLCBMT0dOQU1FOiAid2ViX3VzZXIiLCBQQVRIOiAiLyIsIFBXRDogIi8iLCBIT01FOiAiL2hvbWUvd2ViX3VzZXIiLCBMQU5HOiAodHlwZW9mIG5hdmlnYXRvciA9PSAib2JqZWN0IiAmJiBuYXZpZ2F0b3IubGFuZ3VhZ2VzICYmIG5hdmlnYXRvci5sYW5ndWFnZXNbMF0gfHwgIkMiKS5yZXBsYWNlKCItIiwgIl8iKSArICIuVVRGLTgiLCBfOiBUIHx8ICIuL3RoaXMucHJvZ3JhbSIgfSwgdDsKICAgICAgICBmb3IgKHQgaW4gQ3QpCiAgICAgICAgICBuW3RdID0gQ3RbdF07CiAgICAgICAgdmFyIHIgPSBbXTsKICAgICAgICBmb3IgKHQgaW4gbikKICAgICAgICAgIHIucHVzaCh0ICsgIj0iICsgblt0XSk7CiAgICAgICAgVm4gPSByOwogICAgICB9CiAgICAgIHJldHVybiBWbjsKICAgIH0KICAgIHZhciBWbiwgVHQgPSBbXTsKICAgIGZ1bmN0aW9uIE10KG4pIHsKICAgICAgdmFyIHQgPSB7fSwgcjsKICAgICAgZm9yIChyIGluIG4pCiAgICAgICAgKGZ1bmN0aW9uKGkpIHsKICAgICAgICAgIHZhciBhID0gbltpXTsKICAgICAgICAgIHRbaV0gPSB0eXBlb2YgYSA9PSAiZnVuY3Rpb24iID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIFR0LnB1c2goaSk7CiAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgcmV0dXJuIGEuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgICAgICAgICAgfSBmaW5hbGx5IHsKICAgICAgICAgICAgICBpZiAoa24pCiAgICAgICAgICAgICAgICByZXR1cm47CiAgICAgICAgICAgICAgdmFyIHMgPSBUdC5wb3AoKTsKICAgICAgICAgICAgICBYbihzID09PSBpKTsKICAgICAgICAgICAgfQogICAgICAgICAgfSA6IGE7CiAgICAgICAgfSkocik7CiAgICAgIHJldHVybiB0OwogICAgfQogICAgZm9yICh2YXIgUHQgPSBBcnJheSgyNTYpLCBFbiA9IDA7IDI1NiA+IEVuOyArK0VuKQogICAgICBQdFtFbl0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKEVuKTsKICAgIGx0ID0gUHQsIG5uID0gZS5CaW5kaW5nRXJyb3IgPSBMbigiQmluZGluZ0Vycm9yIiksIGN0ID0gZS5JbnRlcm5hbEVycm9yID0gTG4oIkludGVybmFsRXJyb3IiKSwgQi5wcm90b3R5cGUuaXNBbGlhc09mID0gZnVuY3Rpb24obikgewogICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQiAmJiBuIGluc3RhbmNlb2YgQikpCiAgICAgICAgcmV0dXJuICExOwogICAgICB2YXIgdCA9IHRoaXMuQS5mYS5lYSwgciA9IHRoaXMuQS5kYSwgaSA9IG4uQS5mYS5lYTsKICAgICAgZm9yIChuID0gbi5BLmRhOyB0LmlhOyApCiAgICAgICAgciA9IHQucWEociksIHQgPSB0LmlhOwogICAgICBmb3IgKDsgaS5pYTsgKQogICAgICAgIG4gPSBpLnFhKG4pLCBpID0gaS5pYTsKICAgICAgcmV0dXJuIHQgPT09IGkgJiYgciA9PT0gbjsKICAgIH0sIEIucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7CiAgICAgIGlmICh0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5wYSkKICAgICAgICByZXR1cm4gdGhpcy5BLmNvdW50LnZhbHVlICs9IDEsIHRoaXM7CiAgICAgIHZhciBuID0gdW4oT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcyksIHsgQTogeyB2YWx1ZTogSnQodGhpcy5BKSB9IH0pKTsKICAgICAgcmV0dXJuIG4uQS5jb3VudC52YWx1ZSArPSAxLCBuLkEub2EgPSAhMSwgbjsKICAgIH0sIEIucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uKCkgewogICAgICB0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5vYSAmJiAhdGhpcy5BLnBhICYmIHYoIk9iamVjdCBhbHJlYWR5IHNjaGVkdWxlZCBmb3IgZGVsZXRpb24iKSwgZnQodGhpcyksIGR0KHRoaXMuQSksIHRoaXMuQS5wYSB8fCAodGhpcy5BLmdhID0gdm9pZCAwLCB0aGlzLkEuZGEgPSB2b2lkIDApOwogICAgfSwgQi5wcm90b3R5cGUuaXNEZWxldGVkID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAhdGhpcy5BLmRhOwogICAgfSwgQi5wcm90b3R5cGUuZGVsZXRlTGF0ZXIgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIHRoaXMuQS5kYSB8fCBObih0aGlzKSwgdGhpcy5BLm9hICYmICF0aGlzLkEucGEgJiYgdigiT2JqZWN0IGFscmVhZHkgc2NoZWR1bGVkIGZvciBkZWxldGlvbiIpLCBjbi5wdXNoKHRoaXMpLCBjbi5sZW5ndGggPT09IDEgJiYgbG4gJiYgbG4oSG4pLCB0aGlzLkEub2EgPSAhMCwgdGhpczsKICAgIH0sIHoucHJvdG90eXBlLkRhID0gZnVuY3Rpb24obikgewogICAgICByZXR1cm4gdGhpcy53YSAmJiAobiA9IHRoaXMud2EobikpLCBuOwogICAgfSwgei5wcm90b3R5cGUudmEgPSBmdW5jdGlvbihuKSB7CiAgICAgIHRoaXMubmEgJiYgdGhpcy5uYShuKTsKICAgIH0sIHoucHJvdG90eXBlLmFyZ1BhY2tBZHZhbmNlID0gOCwgei5wcm90b3R5cGUucmVhZFZhbHVlRnJvbVBvaW50ZXIgPSBBbiwgei5wcm90b3R5cGUuZGVsZXRlT2JqZWN0ID0gZnVuY3Rpb24obikgewogICAgICBuICE9PSBudWxsICYmIG4uZGVsZXRlKCk7CiAgICB9LCB6LnByb3RvdHlwZS5mcm9tV2lyZVR5cGUgPSBmdW5jdGlvbihuKSB7CiAgICAgIGZ1bmN0aW9uIHQoKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuc2EgPyBfbih0aGlzLmVhLm1hLCB7IGZhOiB0aGlzLkdhLCBkYTogciwgaGE6IHRoaXMsIGdhOiBuIH0pIDogX24odGhpcy5lYS5tYSwgeyBmYTogdGhpcywgZGE6IG4gfSk7CiAgICAgIH0KICAgICAgdmFyIHIgPSB0aGlzLkRhKG4pOwogICAgICBpZiAoIXIpCiAgICAgICAgcmV0dXJuIHRoaXMudmEobiksIG51bGw7CiAgICAgIHZhciBpID0gdGUodGhpcy5lYSwgcik7CiAgICAgIGlmIChpICE9PSB2b2lkIDApCiAgICAgICAgcmV0dXJuIGkuQS5jb3VudC52YWx1ZSA9PT0gMCA/IChpLkEuZGEgPSByLCBpLkEuZ2EgPSBuLCBpLmNsb25lKCkpIDogKGkgPSBpLmNsb25lKCksIHRoaXMudmEobiksIGkpOwogICAgICBpZiAoaSA9IHRoaXMuZWEuQ2EociksIGkgPSBodFtpXSwgIWkpCiAgICAgICAgcmV0dXJuIHQuY2FsbCh0aGlzKTsKICAgICAgaSA9IHRoaXMucmEgPyBpLnphIDogaS5wb2ludGVyVHlwZTsKICAgICAgdmFyIGEgPSB5dChyLCB0aGlzLmVhLCBpLmVhKTsKICAgICAgcmV0dXJuIGEgPT09IG51bGwgPyB0LmNhbGwodGhpcykgOiB0aGlzLnNhID8gX24oaS5lYS5tYSwgeyBmYTogaSwgZGE6IGEsIGhhOiB0aGlzLCBnYTogbiB9KSA6IF9uKAogICAgICAgIGkuZWEubWEsCiAgICAgICAgeyBmYTogaSwgZGE6IGEgfQogICAgICApOwogICAgfSwgZS5nZXRJbmhlcml0ZWRJbnN0YW5jZUNvdW50ID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhmbikubGVuZ3RoOwogICAgfSwgZS5nZXRMaXZlSW5oZXJpdGVkSW5zdGFuY2VzID0gZnVuY3Rpb24oKSB7CiAgICAgIHZhciBuID0gW10sIHQ7CiAgICAgIGZvciAodCBpbiBmbikKICAgICAgICBmbi5oYXNPd25Qcm9wZXJ0eSh0KSAmJiBuLnB1c2goZm5bdF0pOwogICAgICByZXR1cm4gbjsKICAgIH0sIGUuZmx1c2hQZW5kaW5nRGVsZXRlcyA9IEhuLCBlLnNldERlbGF5RnVuY3Rpb24gPSBmdW5jdGlvbihuKSB7CiAgICAgIGxuID0gbiwgY24ubGVuZ3RoICYmIGxuICYmIGxuKEhuKTsKICAgIH0sIHZ0ID0gZS5VbmJvdW5kVHlwZUVycm9yID0gTG4oIlVuYm91bmRUeXBlRXJyb3IiKSwgZS5jb3VudF9lbXZhbF9oYW5kbGVzID0gZnVuY3Rpb24oKSB7CiAgICAgIGZvciAodmFyIG4gPSAwLCB0ID0gNTsgdCA8IEkubGVuZ3RoOyArK3QpCiAgICAgICAgSVt0XSAhPT0gdm9pZCAwICYmICsrbjsKICAgICAgcmV0dXJuIG47CiAgICB9LCBlLmdldF9maXJzdF9lbXZhbCA9IGZ1bmN0aW9uKCkgewogICAgICBmb3IgKHZhciBuID0gNTsgbiA8IEkubGVuZ3RoOyArK24pCiAgICAgICAgaWYgKElbbl0gIT09IHZvaWQgMCkKICAgICAgICAgIHJldHVybiBJW25dOwogICAgICByZXR1cm4gbnVsbDsKICAgIH0sIGl0LnB1c2goeyBCYTogZnVuY3Rpb24oKSB7CiAgICAgIFN0KCk7CiAgICB9IH0pOwogICAgdmFyIG9lID0gewogICAgICB6OiBmdW5jdGlvbihuKSB7CiAgICAgICAgcmV0dXJuIFRuKG4gKyAxNikgKyAxNjsKICAgICAgfSwKICAgICAgdTogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIHRocm93IG5ldyAkdChuKS5GYSh0LCByKSwgInVuY2F1Z2h0X2V4Y2VwdGlvbiIgaW4gbW4gPyBtbi54YSsrIDogbW4ueGEgPSAxLCBuOwogICAgICB9LAogICAgICB3OiBmdW5jdGlvbihuLCB0LCByLCBpLCBhKSB7CiAgICAgICAgdmFyIHMgPSB4bihyKTsKICAgICAgICB0ID0gVyh0KSwgSChuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oYykgewogICAgICAgICAgcmV0dXJuICEhYzsKICAgICAgICB9LCB0b1dpcmVUeXBlOiBmdW5jdGlvbihjLCBsKSB7CiAgICAgICAgICByZXR1cm4gbCA/IGkgOiBhOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogZnVuY3Rpb24oYykgewogICAgICAgICAgaWYgKHIgPT09IDEpCiAgICAgICAgICAgIHZhciBsID0gWTsKICAgICAgICAgIGVsc2UgaWYgKHIgPT09IDIpCiAgICAgICAgICAgIGwgPSBROwogICAgICAgICAgZWxzZSBpZiAociA9PT0gNCkKICAgICAgICAgICAgbCA9IE87CiAgICAgICAgICBlbHNlCiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gYm9vbGVhbiB0eXBlIHNpemU6ICIgKyB0KTsKICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShsW2MgPj4gc10pOwogICAgICAgIH0sIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBpOiBmdW5jdGlvbihuLCB0LCByLCBpLCBhLCBzLCBjLCBsLCBwLCBmLCBkLCBoLCBBKSB7CiAgICAgICAgZCA9IFcoZCksIHMgPSBWKGEsIHMpLCBsICYmIChsID0gVihjLCBsKSksIGYgJiYgKGYgPSBWKHAsIGYpKSwgQSA9IFYoaCwgQSk7CiAgICAgICAgdmFyIFAgPSBJbihkKTsKICAgICAgICBwdChQLCBmdW5jdGlvbigpIHsKICAgICAgICAgIGRuKCJDYW5ub3QgY29uc3RydWN0ICIgKyBkICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIFtpXSk7CiAgICAgICAgfSksIHRuKFtuLCB0LCByXSwgaSA/IFtpXSA6IFtdLCBmdW5jdGlvbih5KSB7CiAgICAgICAgICBpZiAoeSA9IHlbMF0sIGkpCiAgICAgICAgICAgIHZhciBOID0geS5lYSwgYiA9IE4ubWE7CiAgICAgICAgICBlbHNlCiAgICAgICAgICAgIGIgPSBCLnByb3RvdHlwZTsKICAgICAgICAgIHkgPSBqbihQLCBmdW5jdGlvbigpIHsKICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSAhPT0gaykKICAgICAgICAgICAgICB0aHJvdyBuZXcgbm4oIlVzZSAnbmV3JyB0byBjb25zdHJ1Y3QgIiArIGQpOwogICAgICAgICAgICBpZiAoTC5sYSA9PT0gdm9pZCAwKQogICAgICAgICAgICAgIHRocm93IG5ldyBubihkICsgIiBoYXMgbm8gYWNjZXNzaWJsZSBjb25zdHJ1Y3RvciIpOwogICAgICAgICAgICB2YXIgT3QgPSBMLmxhW2FyZ3VtZW50cy5sZW5ndGhdOwogICAgICAgICAgICBpZiAoT3QgPT09IHZvaWQgMCkKICAgICAgICAgICAgICB0aHJvdyBuZXcgbm4oIlRyaWVkIHRvIGludm9rZSBjdG9yIG9mICIgKyBkICsgIiB3aXRoIGludmFsaWQgbnVtYmVyIG9mIHBhcmFtZXRlcnMgKCIgKyBhcmd1bWVudHMubGVuZ3RoICsgIikgLSBleHBlY3RlZCAoIiArIE9iamVjdC5rZXlzKEwubGEpLnRvU3RyaW5nKCkgKyAiKSBwYXJhbWV0ZXJzIGluc3RlYWQhIik7CiAgICAgICAgICAgIHJldHVybiBPdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgICAgICAgfSk7CiAgICAgICAgICB2YXIgayA9IE9iamVjdC5jcmVhdGUoYiwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogeSB9IH0pOwogICAgICAgICAgeS5wcm90b3R5cGUgPSBrOwogICAgICAgICAgdmFyIEwgPSBuZXcgS3QoZCwgeSwgaywgQSwgTiwgcywgbCwgZik7CiAgICAgICAgICBOID0gbmV3IHooZCwgTCwgITAsICExKSwgYiA9IG5ldyB6KGQgKyAiKiIsIEwsICExLCAhMSk7CiAgICAgICAgICB2YXIgaG4gPSBuZXcgeihkICsgIiBjb25zdCoiLCBMLCAhMSwgITApOwogICAgICAgICAgcmV0dXJuIGh0W25dID0geyBwb2ludGVyVHlwZTogYiwgemE6IGhuIH0sIG10KFAsIHkpLCBbTiwgYiwgaG5dOwogICAgICAgIH0pOwogICAgICB9LAogICAgICBoOiBmdW5jdGlvbihuLCB0LCByLCBpLCBhLCBzKSB7CiAgICAgICAgWG4oMCA8IHQpOwogICAgICAgIHZhciBjID0gd3QodCwgcik7CiAgICAgICAgYSA9IFYoaSwgYSk7CiAgICAgICAgdmFyIGwgPSBbc10sIHAgPSBbXTsKICAgICAgICB0bihbXSwgW25dLCBmdW5jdGlvbihmKSB7CiAgICAgICAgICBmID0gZlswXTsKICAgICAgICAgIHZhciBkID0gImNvbnN0cnVjdG9yICIgKyBmLm5hbWU7CiAgICAgICAgICBpZiAoZi5lYS5sYSA9PT0gdm9pZCAwICYmIChmLmVhLmxhID0gW10pLCBmLmVhLmxhW3QgLSAxXSAhPT0gdm9pZCAwKQogICAgICAgICAgICB0aHJvdyBuZXcgbm4oIkNhbm5vdCByZWdpc3RlciBtdWx0aXBsZSBjb25zdHJ1Y3RvcnMgd2l0aCBpZGVudGljYWwgbnVtYmVyIG9mIHBhcmFtZXRlcnMgKCIgKyAodCAtIDEpICsgIikgZm9yIGNsYXNzICciICsgZi5uYW1lICsgIichIE92ZXJsb2FkIHJlc29sdXRpb24gaXMgY3VycmVudGx5IG9ubHkgcGVyZm9ybWVkIHVzaW5nIHRoZSBwYXJhbWV0ZXIgY291bnQsIG5vdCBhY3R1YWwgdHlwZSBpbmZvISIpOwogICAgICAgICAgcmV0dXJuIGYuZWEubGFbdCAtIDFdID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGRuKCJDYW5ub3QgY29uc3RydWN0ICIgKyBmLm5hbWUgKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgYyk7CiAgICAgICAgICB9LCB0bihbXSwgYywgZnVuY3Rpb24oaCkgewogICAgICAgICAgICByZXR1cm4gZi5lYS5sYVt0IC0gMV0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICBhcmd1bWVudHMubGVuZ3RoICE9PSB0IC0gMSAmJiB2KGQgKyAiIGNhbGxlZCB3aXRoICIgKyBhcmd1bWVudHMubGVuZ3RoICsgIiBhcmd1bWVudHMsIGV4cGVjdGVkICIgKyAodCAtIDEpKSwgcC5sZW5ndGggPSAwLCBsLmxlbmd0aCA9IHQ7CiAgICAgICAgICAgICAgZm9yICh2YXIgQSA9IDE7IEEgPCB0OyArK0EpCiAgICAgICAgICAgICAgICBsW0FdID0gaFtBXS50b1dpcmVUeXBlKAogICAgICAgICAgICAgICAgICBwLAogICAgICAgICAgICAgICAgICBhcmd1bWVudHNbQSAtIDFdCiAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgIHJldHVybiBBID0gYS5hcHBseShudWxsLCBsKSwgQ24ocCksIGhbMF0uZnJvbVdpcmVUeXBlKEEpOwogICAgICAgICAgICB9LCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgYjogZnVuY3Rpb24obiwgdCwgciwgaSwgYSwgcywgYywgbCwgcCwgZikgewogICAgICAgIHQgPSBXKHQpLCBhID0gVihpLCBhKSwgdG4oW10sIFtuXSwgZnVuY3Rpb24oZCkgewogICAgICAgICAgZCA9IGRbMF07CiAgICAgICAgICB2YXIgaCA9IGQubmFtZSArICIuIiArIHQsIEEgPSB7IGdldDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGRuKCJDYW5ub3QgYWNjZXNzICIgKyBoICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIFtyLCBjXSk7CiAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCB9OwogICAgICAgICAgcmV0dXJuIHAgPyBBLnNldCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBkbigiQ2Fubm90IGFjY2VzcyAiICsgaCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbciwgY10pOwogICAgICAgICAgfSA6IEEuc2V0ID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHYoaCArICIgaXMgYSByZWFkLW9ubHkgcHJvcGVydHkiKTsKICAgICAgICAgIH0sIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkLmVhLm1hLCB0LCBBKSwgdG4oW10sIHAgPyBbciwgY10gOiBbcl0sIGZ1bmN0aW9uKFApIHsKICAgICAgICAgICAgdmFyIHkgPSBQWzBdLCBOID0geyBnZXQ6IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIHZhciBrID0gQXQodGhpcywgZCwgaCArICIgZ2V0dGVyIik7CiAgICAgICAgICAgICAgcmV0dXJuIHkuZnJvbVdpcmVUeXBlKGEocywgaykpOwogICAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCB9OwogICAgICAgICAgICBpZiAocCkgewogICAgICAgICAgICAgIHAgPSBWKGwsIHApOwogICAgICAgICAgICAgIHZhciBiID0gUFsxXTsKICAgICAgICAgICAgICBOLnNldCA9IGZ1bmN0aW9uKGspIHsKICAgICAgICAgICAgICAgIHZhciBMID0gQXQodGhpcywgZCwgaCArICIgc2V0dGVyIiksIGhuID0gW107CiAgICAgICAgICAgICAgICBwKGYsIEwsIGIudG9XaXJlVHlwZShobiwgaykpLCBDbihobik7CiAgICAgICAgICAgICAgfTsKICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGQuZWEubWEsIHQsIE4pLCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgdjogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHQgPSBXKHQpLCBIKG4sIHsgbmFtZTogdCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihyKSB7CiAgICAgICAgICB2YXIgaSA9IElbcl0udmFsdWU7CiAgICAgICAgICByZXR1cm4gRG4ociksIGk7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24ociwgaSkgewogICAgICAgICAgcmV0dXJuIGVuKGkpOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBtOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgciA9IHhuKHIpLCB0ID0gVyh0KSwgSChuLCB7CiAgICAgICAgICBuYW1lOiB0LAogICAgICAgICAgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBpOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIGEpIHsKICAgICAgICAgICAgaWYgKHR5cGVvZiBhICE9ICJudW1iZXIiICYmIHR5cGVvZiBhICE9ICJib29sZWFuIikKICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCAiJyArIHJuKGEpICsgJyIgdG8gJyArIHRoaXMubmFtZSk7CiAgICAgICAgICAgIHJldHVybiBhOwogICAgICAgICAgfSwKICAgICAgICAgIGFyZ1BhY2tBZHZhbmNlOiA4LAogICAgICAgICAgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IGVlKHQsIHIpLAogICAgICAgICAga2E6IG51bGwKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgYzogZnVuY3Rpb24obiwgdCwgciwgaSwgYSwgcykgewogICAgICAgIHZhciBjID0gd3QodCwgcik7CiAgICAgICAgbiA9IFcobiksIGEgPSBWKGksIGEpLCBwdChuLCBmdW5jdGlvbigpIHsKICAgICAgICAgIGRuKCJDYW5ub3QgY2FsbCAiICsgbiArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBjKTsKICAgICAgICB9LCB0IC0gMSksIHRuKFtdLCBjLCBmdW5jdGlvbihsKSB7CiAgICAgICAgICB2YXIgcCA9IG4sIGYgPSBuOwogICAgICAgICAgbCA9IFtsWzBdLCBudWxsXS5jb25jYXQobC5zbGljZSgxKSk7CiAgICAgICAgICB2YXIgZCA9IGEsIGggPSBsLmxlbmd0aDsKICAgICAgICAgIDIgPiBoICYmIHYoImFyZ1R5cGVzIGFycmF5IHNpemUgbWlzbWF0Y2ghIE11c3QgYXQgbGVhc3QgZ2V0IHJldHVybiB2YWx1ZSBhbmQgJ3RoaXMnIHR5cGVzISIpOwogICAgICAgICAgZm9yICh2YXIgQSA9IGxbMV0gIT09IG51bGwgJiYgITEsIFAgPSAhMSwgeSA9IDE7IHkgPCBsLmxlbmd0aDsgKyt5KQogICAgICAgICAgICBpZiAobFt5XSAhPT0gbnVsbCAmJiBsW3ldLmthID09PSB2b2lkIDApIHsKICAgICAgICAgICAgICBQID0gITA7CiAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgIH0KICAgICAgICAgIHZhciBOID0gbFswXS5uYW1lICE9PSAidm9pZCIsIGIgPSAiIiwgayA9ICIiOwogICAgICAgICAgZm9yICh5ID0gMDsgeSA8IGggLSAyOyArK3kpCiAgICAgICAgICAgIGIgKz0gKHkgIT09IDAgPyAiLCAiIDogIiIpICsgImFyZyIgKyB5LCBrICs9ICh5ICE9PSAwID8gIiwgIiA6ICIiKSArICJhcmciICsgeSArICJXaXJlZCI7CiAgICAgICAgICBmID0gInJldHVybiBmdW5jdGlvbiAiICsgSW4oZikgKyAiKCIgKyBiICsgYCkgewppZiAoYXJndW1lbnRzLmxlbmd0aCAhPT0gYCArIChoIC0gMikgKyBgKSB7CnRocm93QmluZGluZ0Vycm9yKCdmdW5jdGlvbiBgICsgZiArICIgY2FsbGVkIHdpdGggJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cywgZXhwZWN0ZWQgIiArIChoIC0gMikgKyBgIGFyZ3MhJyk7Cn0KYCwgUCAmJiAoZiArPSBgdmFyIGRlc3RydWN0b3JzID0gW107CmApOwogICAgICAgICAgdmFyIEwgPSBQID8gImRlc3RydWN0b3JzIiA6ICJudWxsIjsKICAgICAgICAgIGZvciAoYiA9ICJ0aHJvd0JpbmRpbmdFcnJvciBpbnZva2VyIGZuIHJ1bkRlc3RydWN0b3JzIHJldFR5cGUgY2xhc3NQYXJhbSIuc3BsaXQoIiAiKSwgZCA9IFt2LCBkLCBzLCBDbiwgbFswXSwgbFsxXV0sIEEgJiYgKGYgKz0gInZhciB0aGlzV2lyZWQgPSBjbGFzc1BhcmFtLnRvV2lyZVR5cGUoIiArIEwgKyBgLCB0aGlzKTsKYCksIHkgPSAwOyB5IDwgaCAtIDI7ICsreSkKICAgICAgICAgICAgZiArPSAidmFyIGFyZyIgKyB5ICsgIldpcmVkID0gYXJnVHlwZSIgKyB5ICsgIi50b1dpcmVUeXBlKCIgKyBMICsgIiwgYXJnIiArIHkgKyAiKTsgLy8gIiArIGxbeSArIDJdLm5hbWUgKyBgCmAsIGIucHVzaCgiYXJnVHlwZSIgKyB5KSwgZC5wdXNoKGxbeSArIDJdKTsKICAgICAgICAgIGlmIChBICYmIChrID0gInRoaXNXaXJlZCIgKyAoMCA8IGsubGVuZ3RoID8gIiwgIiA6ICIiKSArIGspLCBmICs9IChOID8gInZhciBydiA9ICIgOiAiIikgKyAiaW52b2tlcihmbiIgKyAoMCA8IGsubGVuZ3RoID8gIiwgIiA6ICIiKSArIGsgKyBgKTsKYCwgUCkKICAgICAgICAgICAgZiArPSBgcnVuRGVzdHJ1Y3RvcnMoZGVzdHJ1Y3RvcnMpOwpgOwogICAgICAgICAgZWxzZQogICAgICAgICAgICBmb3IgKHkgPSBBID8gMSA6IDI7IHkgPCBsLmxlbmd0aDsgKyt5KQogICAgICAgICAgICAgIGggPSB5ID09PSAxID8gInRoaXNXaXJlZCIgOiAiYXJnIiArICh5IC0gMikgKyAiV2lyZWQiLCBsW3ldLmthICE9PSBudWxsICYmIChmICs9IGggKyAiX2R0b3IoIiArIGggKyAiKTsgLy8gIiArIGxbeV0ubmFtZSArIGAKYCwgYi5wdXNoKGggKyAiX2R0b3IiKSwgZC5wdXNoKGxbeV0ua2EpKTsKICAgICAgICAgIHJldHVybiBOICYmIChmICs9IGB2YXIgcmV0ID0gcmV0VHlwZS5mcm9tV2lyZVR5cGUocnYpOwpyZXR1cm4gcmV0OwpgKSwgYi5wdXNoKGYgKyBgfQpgKSwgbCA9IHJlKGIpLmFwcGx5KG51bGwsIGQpLCBtdChwLCBsLCB0IC0gMSksIFtdOwogICAgICAgIH0pOwogICAgICB9LAogICAgICBlOiBmdW5jdGlvbihuLCB0LCByLCBpLCBhKSB7CiAgICAgICAgZnVuY3Rpb24gcyhmKSB7CiAgICAgICAgICByZXR1cm4gZjsKICAgICAgICB9CiAgICAgICAgdCA9IFcodCksIGEgPT09IC0xICYmIChhID0gNDI5NDk2NzI5NSk7CiAgICAgICAgdmFyIGMgPSB4bihyKTsKICAgICAgICBpZiAoaSA9PT0gMCkgewogICAgICAgICAgdmFyIGwgPSAzMiAtIDggKiByOwogICAgICAgICAgcyA9IGZ1bmN0aW9uKGYpIHsKICAgICAgICAgICAgcmV0dXJuIGYgPDwgbCA+Pj4gbDsKICAgICAgICAgIH07CiAgICAgICAgfQogICAgICAgIHZhciBwID0gdC5pbmRleE9mKCJ1bnNpZ25lZCIpICE9IC0xOwogICAgICAgIEgobiwgeyBuYW1lOiB0LCBmcm9tV2lyZVR5cGU6IHMsIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGYsIGQpIHsKICAgICAgICAgIGlmICh0eXBlb2YgZCAhPSAibnVtYmVyIiAmJiB0eXBlb2YgZCAhPSAiYm9vbGVhbiIpCiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0ICInICsgcm4oZCkgKyAnIiB0byAnICsgdGhpcy5uYW1lKTsKICAgICAgICAgIGlmIChkIDwgaSB8fCBkID4gYSkKICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUGFzc2luZyBhIG51bWJlciAiJyArIHJuKGQpICsgJyIgZnJvbSBKUyBzaWRlIHRvIEMvQysrIHNpZGUgdG8gYW4gYXJndW1lbnQgb2YgdHlwZSAiJyArIHQgKyAnIiwgd2hpY2ggaXMgb3V0c2lkZSB0aGUgdmFsaWQgcmFuZ2UgWycgKyBpICsgIiwgIiArIGEgKyAiXSEiKTsKICAgICAgICAgIHJldHVybiBwID8gZCA+Pj4gMCA6IGQgfCAwOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogaWUodCwgYywgaSAhPT0gMCksIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBkOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgZnVuY3Rpb24gaShzKSB7CiAgICAgICAgICBzID4+PSAyOwogICAgICAgICAgdmFyIGMgPSBVOwogICAgICAgICAgcmV0dXJuIG5ldyBhKEssIGNbcyArIDFdLCBjW3NdKTsKICAgICAgICB9CiAgICAgICAgdmFyIGEgPSBbSW50OEFycmF5LCBVaW50OEFycmF5LCBJbnQxNkFycmF5LCBVaW50MTZBcnJheSwgSW50MzJBcnJheSwgVWludDMyQXJyYXksIEZsb2F0MzJBcnJheSwgRmxvYXQ2NEFycmF5XVt0XTsKICAgICAgICByID0gVyhyKSwgSChuLCB7IG5hbWU6IHIsIGZyb21XaXJlVHlwZTogaSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBpIH0sIHsgRWE6ICEwIH0pOwogICAgICB9LAogICAgICBuOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdCA9IFcodCk7CiAgICAgICAgdmFyIHIgPSB0ID09PSAic3RkOjpzdHJpbmciOwogICAgICAgIEgobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICB2YXIgYSA9IFVbaSA+PiAyXTsKICAgICAgICAgICAgaWYgKHIpCiAgICAgICAgICAgICAgZm9yICh2YXIgcyA9IGkgKyA0LCBjID0gMDsgYyA8PSBhOyArK2MpIHsKICAgICAgICAgICAgICAgIHZhciBsID0gaSArIDQgKyBjOwogICAgICAgICAgICAgICAgaWYgKGMgPT0gYSB8fCBGW2xdID09IDApIHsKICAgICAgICAgICAgICAgICAgaWYgKHMpIHsKICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IHMsIGYgPSBGLCBkID0gcCArIChsIC0gcyk7CiAgICAgICAgICAgICAgICAgICAgZm9yIChzID0gcDsgZltzXSAmJiAhKHMgPj0gZCk7ICkKICAgICAgICAgICAgICAgICAgICAgICsrczsKICAgICAgICAgICAgICAgICAgICBpZiAoMTYgPCBzIC0gcCAmJiBmLnN1YmFycmF5ICYmIEtuKQogICAgICAgICAgICAgICAgICAgICAgcCA9IEtuLmRlY29kZShmLnN1YmFycmF5KHAsIHMpKTsKICAgICAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICAgIGZvciAoZCA9ICIiOyBwIDwgczsgKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoID0gZltwKytdOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAoaCAmIDEyOCkgewogICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBBID0gZltwKytdICYgNjM7CiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChoICYgMjI0KSA9PSAxOTIpCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGggJiAzMSkgPDwgNiB8IEEpOwogICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFAgPSBmW3ArK10gJiA2MzsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGggPSAoaCAmIDI0MCkgPT0gMjI0ID8gKGggJiAxNSkgPDwgMTIgfCBBIDw8IDYgfCBQIDogKGggJiA3KSA8PCAxOCB8IEEgPDwgMTIgfCBQIDw8IDYgfCBmW3ArK10gJiA2MywgNjU1MzYgPiBoID8gZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGgpIDogKGggLT0gNjU1MzYsIGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiB8IGggPj4gMTAsIDU2MzIwIHwgaCAmIDEwMjMpKTsKICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZQogICAgICAgICAgICAgICAgICAgICAgICAgIGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShoKTsKICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgIHAgPSBkOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgfSBlbHNlCiAgICAgICAgICAgICAgICAgICAgcCA9ICIiOwogICAgICAgICAgICAgICAgICBpZiAoeSA9PT0gdm9pZCAwKQogICAgICAgICAgICAgICAgICAgIHZhciB5ID0gcDsKICAgICAgICAgICAgICAgICAgZWxzZQogICAgICAgICAgICAgICAgICAgIHkgKz0gIlwwIiwgeSArPSBwOwogICAgICAgICAgICAgICAgICBzID0gbCArIDE7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICBmb3IgKHkgPSBBcnJheShhKSwgYyA9IDA7IGMgPCBhOyArK2MpCiAgICAgICAgICAgICAgICB5W2NdID0gU3RyaW5nLmZyb21DaGFyQ29kZShGW2kgKyA0ICsgY10pOwogICAgICAgICAgICAgIHkgPSB5LmpvaW4oIiIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiBEKGkpLCB5OwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIGEpIHsKICAgICAgICAgICAgYSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyICYmIChhID0gbmV3IFVpbnQ4QXJyYXkoYSkpOwogICAgICAgICAgICB2YXIgcyA9IHR5cGVvZiBhID09ICJzdHJpbmciOwogICAgICAgICAgICBzIHx8IGEgaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IGEgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSB8fCBhIGluc3RhbmNlb2YgSW50OEFycmF5IHx8IHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gc3RkOjpzdHJpbmciKTsKICAgICAgICAgICAgdmFyIGMgPSAociAmJiBzID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IDAsIGQgPSAwOyBkIDwgYS5sZW5ndGg7ICsrZCkgewogICAgICAgICAgICAgICAgdmFyIGggPSBhLmNoYXJDb2RlQXQoZCk7CiAgICAgICAgICAgICAgICA1NTI5NiA8PSBoICYmIDU3MzQzID49IGggJiYgKGggPSA2NTUzNiArICgoaCAmIDEwMjMpIDw8IDEwKSB8IGEuY2hhckNvZGVBdCgrK2QpICYgMTAyMyksIDEyNyA+PSBoID8gKytmIDogZiA9IDIwNDcgPj0gaCA/IGYgKyAyIDogNjU1MzUgPj0gaCA/IGYgKyAzIDogZiArIDQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHJldHVybiBmOwogICAgICAgICAgICB9IDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgcmV0dXJuIGEubGVuZ3RoOwogICAgICAgICAgICB9KSgpLCBsID0gVG4oNCArIGMgKyAxKTsKICAgICAgICAgICAgaWYgKFVbbCA+PiAyXSA9IGMsIHIgJiYgcykKICAgICAgICAgICAgICBOdChhLCBsICsgNCwgYyArIDEpOwogICAgICAgICAgICBlbHNlIGlmIChzKQogICAgICAgICAgICAgIGZvciAocyA9IDA7IHMgPCBjOyArK3MpIHsKICAgICAgICAgICAgICAgIHZhciBwID0gYS5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgICAgICAgMjU1IDwgcCAmJiAoRChsKSwgdigiU3RyaW5nIGhhcyBVVEYtMTYgY29kZSB1bml0cyB0aGF0IGRvIG5vdCBmaXQgaW4gOCBiaXRzIikpLCBGW2wgKyA0ICsgc10gPSBwOwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZQogICAgICAgICAgICAgIGZvciAocyA9IDA7IHMgPCBjOyArK3MpCiAgICAgICAgICAgICAgICBGW2wgKyA0ICsgc10gPSBhW3NdOwogICAgICAgICAgICByZXR1cm4gaSAhPT0gbnVsbCAmJiBpLnB1c2goRCwgbCksIGw7CiAgICAgICAgICB9LAogICAgICAgICAgYXJnUGFja0FkdmFuY2U6IDgsCiAgICAgICAgICByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sCiAgICAgICAgICBrYTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICBEKGkpOwogICAgICAgICAgfQogICAgICAgIH0pOwogICAgICB9LAogICAgICBqOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgaWYgKHIgPSBXKHIpLCB0ID09PSAyKQogICAgICAgICAgdmFyIGkgPSBVdCwgYSA9IEh0LCBzID0genQsIGMgPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgcmV0dXJuIHBuOwogICAgICAgICAgfSwgbCA9IDE7CiAgICAgICAgZWxzZQogICAgICAgICAgdCA9PT0gNCAmJiAoaSA9IER0LCBhID0gQnQsIHMgPSBWdCwgYyA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICByZXR1cm4gVTsKICAgICAgICAgIH0sIGwgPSAyKTsKICAgICAgICBIKG4sIHsgbmFtZTogciwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihwKSB7CiAgICAgICAgICBmb3IgKHZhciBmID0gVVtwID4+IDJdLCBkID0gYygpLCBoLCBBID0gcCArIDQsIFAgPSAwOyBQIDw9IGY7ICsrUCkgewogICAgICAgICAgICB2YXIgeSA9IHAgKyA0ICsgUCAqIHQ7CiAgICAgICAgICAgIChQID09IGYgfHwgZFt5ID4+IGxdID09IDApICYmIChBID0gaShBLCB5IC0gQSksIGggPT09IHZvaWQgMCA/IGggPSBBIDogKGggKz0gIlwwIiwgaCArPSBBKSwgQSA9IHkgKyB0KTsKICAgICAgICAgIH0KICAgICAgICAgIHJldHVybiBEKHApLCBoOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHAsIGYpIHsKICAgICAgICAgIHR5cGVvZiBmICE9ICJzdHJpbmciICYmIHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gQysrIHN0cmluZyB0eXBlICIgKyByKTsKICAgICAgICAgIHZhciBkID0gcyhmKSwgaCA9IFRuKDQgKyBkICsgdCk7CiAgICAgICAgICByZXR1cm4gVVtoID4+IDJdID0gZCA+PiBsLCBhKGYsIGggKyA0LCBkICsgdCksIHAgIT09IG51bGwgJiYgcC5wdXNoKEQsIGgpLCBoOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sIGthOiBmdW5jdGlvbihwKSB7CiAgICAgICAgICBEKHApOwogICAgICAgIH0gfSk7CiAgICAgIH0sCiAgICAgIHg6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gVyh0KSwgSChuLCB7IFFhOiAhMCwgbmFtZTogdCwgYXJnUGFja0FkdmFuY2U6IDAsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSB9KTsKICAgICAgfSwKICAgICAgazogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIG4gPSBCbihuKSwgdCA9IF90KHQsICJlbXZhbDo6YXMiKTsKICAgICAgICB2YXIgaSA9IFtdLCBhID0gZW4oaSk7CiAgICAgICAgcmV0dXJuIE9bciA+PiAyXSA9IGEsIHQudG9XaXJlVHlwZShpLCBuKTsKICAgICAgfSwKICAgICAgZzogRG4sCiAgICAgIGw6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICByZXR1cm4gbiA9IEJuKG4pLCB0ID0gQm4odCksIGVuKG5bdF0pOwogICAgICB9LAogICAgICBwOiBmdW5jdGlvbihuKSB7CiAgICAgICAgdmFyIHQgPSBhZVtuXTsKICAgICAgICByZXR1cm4gZW4odCA9PT0gdm9pZCAwID8gVyhuKSA6IHQpOwogICAgICB9LAogICAgICBvOiBmdW5jdGlvbihuKSB7CiAgICAgICAgQ24oSVtuXS52YWx1ZSksIERuKG4pOwogICAgICB9LAogICAgICB5OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgcmV0dXJuIG4gPSBfdChuLCAiX2VtdmFsX3Rha2VfdmFsdWUiKSwgbiA9IG4ucmVhZFZhbHVlRnJvbVBvaW50ZXIodCksIGVuKG4pOwogICAgICB9LAogICAgICBmOiBmdW5jdGlvbigpIHsKICAgICAgICBzbigpOwogICAgICB9LAogICAgICBxOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgRi5jb3B5V2l0aGluKG4sIHQsIHQgKyByKTsKICAgICAgfSwKICAgICAgcjogZnVuY3Rpb24obikgewogICAgICAgIG4gPj4+PSAwOwogICAgICAgIHZhciB0ID0gRi5sZW5ndGg7CiAgICAgICAgaWYgKDIxNDc0ODM2NDggPCBuKQogICAgICAgICAgcmV0dXJuICExOwogICAgICAgIGZvciAodmFyIHIgPSAxOyA0ID49IHI7IHIgKj0gMikgewogICAgICAgICAgdmFyIGkgPSB0ICogKDEgKyAwLjIgLyByKTsKICAgICAgICAgIGkgPSBNYXRoLm1pbihpLCBuICsgMTAwNjYzMjk2KSwgaSA9IE1hdGgubWF4KDE2Nzc3MjE2LCBuLCBpKSwgMCA8IGkgJSA2NTUzNiAmJiAoaSArPSA2NTUzNiAtIGkgJSA2NTUzNik7CiAgICAgICAgICBuOiB7CiAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgRy5ncm93KE1hdGgubWluKDIxNDc0ODM2NDgsIGkpIC0gSy5ieXRlTGVuZ3RoICsgNjU1MzUgPj4+IDE2KSwgdHQoRy5idWZmZXIpOwogICAgICAgICAgICAgIHZhciBhID0gMTsKICAgICAgICAgICAgICBicmVhayBuOwogICAgICAgICAgICB9IGNhdGNoIHsKICAgICAgICAgICAgfQogICAgICAgICAgICBhID0gdm9pZCAwOwogICAgICAgICAgfQogICAgICAgICAgaWYgKGEpCiAgICAgICAgICAgIHJldHVybiAhMDsKICAgICAgICB9CiAgICAgICAgcmV0dXJuICExOwogICAgICB9LAogICAgICBzOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSAwOwogICAgICAgIHJldHVybiBFdCgpLmZvckVhY2goZnVuY3Rpb24oaSwgYSkgewogICAgICAgICAgdmFyIHMgPSB0ICsgcjsKICAgICAgICAgIGZvciAoYSA9IE9bbiArIDQgKiBhID4+IDJdID0gcywgcyA9IDA7IHMgPCBpLmxlbmd0aDsgKytzKQogICAgICAgICAgICBZW2ErKyA+PiAwXSA9IGkuY2hhckNvZGVBdChzKTsKICAgICAgICAgIFlbYSA+PiAwXSA9IDAsIHIgKz0gaS5sZW5ndGggKyAxOwogICAgICAgIH0pLCAwOwogICAgICB9LAogICAgICB0OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSBFdCgpOwogICAgICAgIE9bbiA+PiAyXSA9IHIubGVuZ3RoOwogICAgICAgIHZhciBpID0gMDsKICAgICAgICByZXR1cm4gci5mb3JFYWNoKGZ1bmN0aW9uKGEpIHsKICAgICAgICAgIGkgKz0gYS5sZW5ndGggKyAxOwogICAgICAgIH0pLCBPW3QgPj4gMl0gPSBpLCAwOwogICAgICB9LAogICAgICBhOiBHCiAgICB9OwogICAgKGZ1bmN0aW9uKCkgewogICAgICBmdW5jdGlvbiBuKHMpIHsKICAgICAgICBzID0gcy5leHBvcnRzLCBzID0gTXQocyksIGUuYXNtID0gcywgWi0tLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKFopLCBaID09IDAgJiYgb24gJiYgKHMgPSBvbiwgb24gPSBudWxsLCBzKCkpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIHQocykgewogICAgICAgIG4ocy5pbnN0YW5jZSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gcihzKSB7CiAgICAgICAgcmV0dXJuIFp0KCkudGhlbihmdW5jdGlvbihjKSB7CiAgICAgICAgICByZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoYywgaSk7CiAgICAgICAgfSkudGhlbihzLCBmdW5jdGlvbihjKSB7CiAgICAgICAgICBTKCJmYWlsZWQgdG8gYXN5bmNocm9ub3VzbHkgcHJlcGFyZSB3YXNtOiAiICsgYyksIHNuKGMpOwogICAgICAgIH0pOwogICAgICB9CiAgICAgIHZhciBpID0geyBhOiBvZSB9OwogICAgICBpZiAoWisrLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKFopLCBlLmluc3RhbnRpYXRlV2FzbSkKICAgICAgICB0cnkgewogICAgICAgICAgdmFyIGEgPSBlLmluc3RhbnRpYXRlV2FzbShpLCBuKTsKICAgICAgICAgIHJldHVybiBhID0gTXQoYSk7CiAgICAgICAgfSBjYXRjaCAocykgewogICAgICAgICAgcmV0dXJuIFMoIk1vZHVsZS5pbnN0YW50aWF0ZVdhc20gY2FsbGJhY2sgZmFpbGVkIHdpdGggZXJyb3I6ICIgKyBzKSwgITE7CiAgICAgICAgfQogICAgICByZXR1cm4gZnVuY3Rpb24oKSB7CiAgICAgICAgaWYgKGogfHwgdHlwZW9mIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nICE9ICJmdW5jdGlvbiIgfHwgb3QoKSB8fCBSbigiZmlsZTovLyIpIHx8IHR5cGVvZiBmZXRjaCAhPSAiZnVuY3Rpb24iKQogICAgICAgICAgcmV0dXJuIHIodCk7CiAgICAgICAgZmV0Y2goJCwgeyBjcmVkZW50aWFsczogInNhbWUtb3JpZ2luIiB9KS50aGVuKGZ1bmN0aW9uKHMpIHsKICAgICAgICAgIHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyhzLCBpKS50aGVuKHQsIGZ1bmN0aW9uKGMpIHsKICAgICAgICAgICAgcmV0dXJuIFMoIndhc20gc3RyZWFtaW5nIGNvbXBpbGUgZmFpbGVkOiAiICsgYyksIFMoImZhbGxpbmcgYmFjayB0byBBcnJheUJ1ZmZlciBpbnN0YW50aWF0aW9uIiksIHIodCk7CiAgICAgICAgICB9KTsKICAgICAgICB9KTsKICAgICAgfSgpLCB7fTsKICAgIH0pKCk7CiAgICB2YXIgU3QgPSBlLl9fX3dhc21fY2FsbF9jdG9ycyA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKFN0ID0gZS5fX193YXNtX2NhbGxfY3RvcnMgPSBlLmFzbS5CKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgVG4gPSBlLl9tYWxsb2MgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChUbiA9IGUuX21hbGxvYyA9IGUuYXNtLkMpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBEID0gZS5fZnJlZSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKEQgPSBlLl9mcmVlID0gZS5hc20uRCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGJ0ID0gZS5fX19nZXRUeXBlTmFtZSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGJ0ID0gZS5fX19nZXRUeXBlTmFtZSA9IGUuYXNtLkUpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9OwogICAgZS5fX19lbWJpbmRfcmVnaXN0ZXJfbmF0aXZlX2FuZF9idWlsdGluX3R5cGVzID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fX19lbWJpbmRfcmVnaXN0ZXJfbmF0aXZlX2FuZF9idWlsdGluX3R5cGVzID0gZS5hc20uRikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paSA9IGUuYXNtLkcpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmkgPSBlLmFzbS5IKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2kgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaSA9IGUuYXNtLkkpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaSA9IGUuYXNtLkopLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpID0gZS5hc20uSykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9maWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfZmlpID0gZS5hc20uTCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlmID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWYgPSBlLmFzbS5NKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpID0gZS5hc20uTikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWkgPSBlLmFzbS5PKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWkgPSBlLmFzbS5QKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWkgPSBlLmFzbS5RKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpID0gZS5hc20uUikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWlpaSA9IGUuYXNtLlMpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWkgPSBlLmFzbS5UKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWlpaSA9IGUuYXNtLlUpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpaWRpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWlkaSA9IGUuYXNtLlYpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpZGkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpZGkgPSBlLmFzbS5XKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWlpID0gZS5hc20uWCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWkgPSBlLmFzbS5ZKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWkgPSBlLmFzbS5aKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaSA9IGUuYXNtLl8pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdGFydF91bndpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdGFydF91bndpbmQgPSBlLmFzbS4kKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RvcF91bndpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdG9wX3Vud2luZCA9IGUuYXNtLmFhKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RhcnRfcmV3aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RhcnRfcmV3aW5kID0gZS5hc20uYmEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdG9wX3Jld2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0b3BfcmV3aW5kID0gZS5hc20uY2EpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9OwogICAgdmFyIE1uOwogICAgb24gPSBmdW5jdGlvbiBuKCkgewogICAgICBNbiB8fCBHbigpLCBNbiB8fCAob24gPSBuKTsKICAgIH07CiAgICBmdW5jdGlvbiBHbigpIHsKICAgICAgZnVuY3Rpb24gbigpIHsKICAgICAgICBpZiAoIU1uICYmIChNbiA9ICEwLCBlLmNhbGxlZFJ1biA9ICEwLCAha24pKSB7CiAgICAgICAgICBpZiAoeW4oaXQpLCB5bihHdCksIG0oZSksIGUub25SdW50aW1lSW5pdGlhbGl6ZWQgJiYgZS5vblJ1bnRpbWVJbml0aWFsaXplZCgpLCBlLnBvc3RSdW4pCiAgICAgICAgICAgIGZvciAodHlwZW9mIGUucG9zdFJ1biA9PSAiZnVuY3Rpb24iICYmIChlLnBvc3RSdW4gPSBbZS5wb3N0UnVuXSk7IGUucG9zdFJ1bi5sZW5ndGg7ICkgewogICAgICAgICAgICAgIHZhciB0ID0gZS5wb3N0UnVuLnNoaWZ0KCk7CiAgICAgICAgICAgICAgYXQudW5zaGlmdCh0KTsKICAgICAgICAgICAgfQogICAgICAgICAgeW4oYXQpOwogICAgICAgIH0KICAgICAgfQogICAgICBpZiAoISgwIDwgWikpIHsKICAgICAgICBpZiAoZS5wcmVSdW4pCiAgICAgICAgICBmb3IgKHR5cGVvZiBlLnByZVJ1biA9PSAiZnVuY3Rpb24iICYmIChlLnByZVJ1biA9IFtlLnByZVJ1bl0pOyBlLnByZVJ1bi5sZW5ndGg7ICkKICAgICAgICAgICAgWXQoKTsKICAgICAgICB5bihydCksIDAgPCBaIHx8IChlLnNldFN0YXR1cyA/IChlLnNldFN0YXR1cygiUnVubmluZy4uLiIpLCBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgICAgICAgICAgZS5zZXRTdGF0dXMoIiIpOwogICAgICAgICAgfSwgMSksIG4oKTsKICAgICAgICB9LCAxKSkgOiBuKCkpOwogICAgICB9CiAgICB9CiAgICBpZiAoZS5ydW4gPSBHbiwgZS5wcmVJbml0KQogICAgICBmb3IgKHR5cGVvZiBlLnByZUluaXQgPT0gImZ1bmN0aW9uIiAmJiAoZS5wcmVJbml0ID0gW2UucHJlSW5pdF0pOyAwIDwgZS5wcmVJbml0Lmxlbmd0aDsgKQogICAgICAgIGUucHJlSW5pdC5wb3AoKSgpOwogICAgcmV0dXJuIEduKCksIHUucmVhZHk7CiAgfTsKfSgpOwpjbGFzcyBwZSB7CiAgY29uc3RydWN0b3IoKSB7CiAgICBZbih0aGlzLCAic2FtV2FzbU1vZHVsZSIpOwogIH0KICBnZXRPdmVycmlkZGVuTW9kdWxlcyh1LCBlKSB7CiAgICByZXR1cm4gewogICAgICBsb2NhdGVGaWxlOiAobSkgPT4gbmV3IFVSTChlIHx8IG0sIHUpLmhyZWYKICAgIH07CiAgfQogIGFzeW5jIGhhbmRsZU1pc3NpbmdPckludmFsaWRTYW1Nb2R1bGUodSwgZSkgewogICAgdHJ5IHsKICAgICAgY29uc3QgbSA9IGF3YWl0IGZldGNoKHUpOwogICAgICBpZiAoIW0ub2spCiAgICAgICAgdGhyb3cgbmV3IHgoCiAgICAgICAgICBgVGhlIHBhdGggdG8gJHtlfSBpcyBpbmNvcnJlY3Qgb3IgdGhlIG1vZHVsZSBpcyBtaXNzaW5nLiBQbGVhc2UgY2hlY2sgcHJvdmlkZWQgcGF0aCB0byB3YXNtIGZpbGVzLiBDdXJyZW50IHBhdGggaXMgJHt1fWAKICAgICAgICApOwogICAgICBjb25zdCBnID0gYXdhaXQgbS5hcnJheUJ1ZmZlcigpOwogICAgICBpZiAoIVdlYkFzc2VtYmx5LnZhbGlkYXRlKGcpKQogICAgICAgIHRocm93IG5ldyB4KAogICAgICAgICAgYFRoZSBwcm92aWRlZCAke2V9IGlzIG5vdCBhIHZhbGlkIFdBU00gbW9kdWxlLiBQbGVhc2UgY2hlY2sgcHJvdmlkZWQgcGF0aCB0byB3YXNtIGZpbGVzLiBDdXJyZW50IHBhdGggaXMgJHt1fWAKICAgICAgICApOwogICAgfSBjYXRjaCAobSkgewogICAgICBpZiAobSBpbnN0YW5jZW9mIHgpCiAgICAgICAgdGhyb3cgY29uc29sZS5lcnJvcigKICAgICAgICAgICJZb3UgY2FuIGZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBob3cgdG8gaG9zdCB3YXNtIGZpbGVzIGhlcmU6IGh0dHBzOi8vZGV2ZWxvcGVycy5pbm5vdmF0cmljcy5jb20vZGlnaXRhbC1vbmJvYXJkaW5nL3RlY2huaWNhbC9yZW1vdGUvZG90LXdlYi1kb2N1bWVudC9sYXRlc3QvZG9jdW1lbnRhdGlvbi8jX2hvc3Rpbmdfc2FtX3dhc20iCiAgICAgICAgKSwgbTsKICAgIH0KICB9CiAgYXN5bmMgZ2V0V2FzbUZpbGVOYW1lKCkgewogICAgcmV0dXJuIGF3YWl0IGxlKCkgPyBXdC5zaW1kIDogV3Quc2FtOwogIH0KICBhc3luYyBpbml0U2FtTW9kdWxlKHUsIGUgPSAiL3dhc20iKSB7CiAgICBpZiAodGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICByZXR1cm47CiAgICBjb25zdCBtID0gYXdhaXQgdGhpcy5nZXRXYXNtRmlsZU5hbWUoKSwgZyA9IGAke2V9LyR7bX1gOwogICAgdHJ5IHsKICAgICAgdGhpcy5zYW1XYXNtTW9kdWxlID0gYXdhaXQgaGUodGhpcy5nZXRPdmVycmlkZGVuTW9kdWxlcyh1LCBnKSk7CiAgICB9IGNhdGNoIHsKICAgICAgdGhyb3cgYXdhaXQgdGhpcy5oYW5kbGVNaXNzaW5nT3JJbnZhbGlkU2FtTW9kdWxlKGcsIG0pLCBuZXcgeCgiQ291bGQgbm90IGluaXQgZGV0ZWN0b3IuIik7CiAgICB9CiAgfQogIGFzeW5jIGdldFNhbVZlcnNpb24oKSB7CiAgICB2YXIgZTsKICAgIGNvbnN0IHUgPSBhd2FpdCAoKGUgPSB0aGlzLnNhbVdhc21Nb2R1bGUpID09IG51bGwgPyB2b2lkIDAgOiBlLmdldEluZm9TdHJpbmcoKSk7CiAgICByZXR1cm4gdSA9PSBudWxsID8gdm9pZCAwIDogdS50cmltKCk7CiAgfQogIC8qCiAgICogSW4gVFMgNS4yLjAgd2FzIGFkZGVkIHNwZWNpYWwga2V5d29yZCAidXNpbmciIHdoaWNoIGNvdWxkIGJlIHBlcmZlY3QgZm9yIHRoaXMgY2FzZS4KICAgKiBVbmZvcnR1bmF0ZWx5LCB2aXRlIHByZWFjdCBwbHVnaW4gZG9lcyBub3Qgc3VwcG9ydCB0aGlzIHZlcnNpb24gb2YgVFMgeWV0LgogICAqIENoZWNrIHBvc3NpYmlsaXR5IG9mIHVzaW5nICJ1c2luZyIga2V5d29yZCB3aGVuIHZpdGUgcHJlYWN0IHBsdWdpbiB1cGRhdGVzCiAgICovCiAgYWxsb2NhdGVNZW1vcnkodSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyB4KCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICByZXR1cm4gdGhpcy5zYW1XYXNtTW9kdWxlLl9tYWxsb2ModSk7CiAgfQogIHJlbGVhc2VNZW1vcnkodSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyB4KCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICB0aGlzLnNhbVdhc21Nb2R1bGUuX2ZyZWUodSk7CiAgfQogIHdyaXRlRGF0YVRvTWVtb3J5KHUsIGUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgeCgiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgdGhpcy5zYW1XYXNtTW9kdWxlLkhFQVBVOC5zZXQodSwgZSk7CiAgfQp9Ci8qKgogKiBAbGljZW5zZQogKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDCiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wCiAqLwpjb25zdCBSdCA9IFN5bWJvbCgiQ29tbGluay5wcm94eSIpLCB5ZSA9IFN5bWJvbCgiQ29tbGluay5lbmRwb2ludCIpLCBtZSA9IFN5bWJvbCgiQ29tbGluay5yZWxlYXNlUHJveHkiKSwgWm4gPSBTeW1ib2woIkNvbWxpbmsuZmluYWxpemVyIiksIFNuID0gU3ltYm9sKCJDb21saW5rLnRocm93biIpLCBGdCA9IChvKSA9PiB0eXBlb2YgbyA9PSAib2JqZWN0IiAmJiBvICE9PSBudWxsIHx8IHR5cGVvZiBvID09ICJmdW5jdGlvbiIsIHZlID0gewogIGNhbkhhbmRsZTogKG8pID0+IEZ0KG8pICYmIG9bUnRdLAogIHNlcmlhbGl6ZShvKSB7CiAgICBjb25zdCB7IHBvcnQxOiB1LCBwb3J0MjogZSB9ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7CiAgICByZXR1cm4gSm4obywgdSksIFtlLCBbZV1dOwogIH0sCiAgZGVzZXJpYWxpemUobykgewogICAgcmV0dXJuIG8uc3RhcnQoKSwgX2Uobyk7CiAgfQp9LCBnZSA9IHsKICBjYW5IYW5kbGU6IChvKSA9PiBGdChvKSAmJiBTbiBpbiBvLAogIHNlcmlhbGl6ZSh7IHZhbHVlOiBvIH0pIHsKICAgIGxldCB1OwogICAgcmV0dXJuIG8gaW5zdGFuY2VvZiBFcnJvciA/IHUgPSB7CiAgICAgIGlzRXJyb3I6ICEwLAogICAgICB2YWx1ZTogewogICAgICAgIG1lc3NhZ2U6IG8ubWVzc2FnZSwKICAgICAgICBuYW1lOiBvLm5hbWUsCiAgICAgICAgc3RhY2s6IG8uc3RhY2sKICAgICAgfQogICAgfSA6IHUgPSB7IGlzRXJyb3I6ICExLCB2YWx1ZTogbyB9LCBbdSwgW11dOwogIH0sCiAgZGVzZXJpYWxpemUobykgewogICAgdGhyb3cgby5pc0Vycm9yID8gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3Ioby52YWx1ZS5tZXNzYWdlKSwgby52YWx1ZSkgOiBvLnZhbHVlOwogIH0KfSwgeHQgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcChbCiAgWyJwcm94eSIsIHZlXSwKICBbInRocm93IiwgZ2VdCl0pOwpmdW5jdGlvbiB3ZShvLCB1KSB7CiAgZm9yIChjb25zdCBlIG9mIG8pCiAgICBpZiAodSA9PT0gZSB8fCBlID09PSAiKiIgfHwgZSBpbnN0YW5jZW9mIFJlZ0V4cCAmJiBlLnRlc3QodSkpCiAgICAgIHJldHVybiAhMDsKICByZXR1cm4gITE7Cn0KZnVuY3Rpb24gSm4obywgdSA9IGdsb2JhbFRoaXMsIGUgPSBbIioiXSkgewogIHUuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGZ1bmN0aW9uIG0oZykgewogICAgaWYgKCFnIHx8ICFnLmRhdGEpCiAgICAgIHJldHVybjsKICAgIGlmICghd2UoZSwgZy5vcmlnaW4pKSB7CiAgICAgIGNvbnNvbGUud2FybihgSW52YWxpZCBvcmlnaW4gJyR7Zy5vcmlnaW59JyBmb3IgY29tbGluayBwcm94eWApOwogICAgICByZXR1cm47CiAgICB9CiAgICBjb25zdCB7IGlkOiBfLCB0eXBlOiB3LCBwYXRoOiBUIH0gPSBPYmplY3QuYXNzaWduKHsgcGF0aDogW10gfSwgZy5kYXRhKSwgTSA9IChnLmRhdGEuYXJndW1lbnRMaXN0IHx8IFtdKS5tYXAoWCk7CiAgICBsZXQgRTsKICAgIHRyeSB7CiAgICAgIGNvbnN0IEMgPSBULnNsaWNlKDAsIC0xKS5yZWR1Y2UoKFMsIGopID0+IFNbal0sIG8pLCBSID0gVC5yZWR1Y2UoKFMsIGopID0+IFNbal0sIG8pOwogICAgICBzd2l0Y2ggKHcpIHsKICAgICAgICBjYXNlICJHRVQiOgogICAgICAgICAgRSA9IFI7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJTRVQiOgogICAgICAgICAgQ1tULnNsaWNlKC0xKVswXV0gPSBYKGcuZGF0YS52YWx1ZSksIEUgPSAhMDsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIkFQUExZIjoKICAgICAgICAgIEUgPSBSLmFwcGx5KEMsIE0pOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiQ09OU1RSVUNUIjoKICAgICAgICAgIHsKICAgICAgICAgICAgY29uc3QgUyA9IG5ldyBSKC4uLk0pOwogICAgICAgICAgICBFID0gUGUoUyk7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJFTkRQT0lOVCI6CiAgICAgICAgICB7CiAgICAgICAgICAgIGNvbnN0IHsgcG9ydDE6IFMsIHBvcnQyOiBqIH0gPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTsKICAgICAgICAgICAgSm4obywgaiksIEUgPSBNZShTLCBbU10pOwogICAgICAgICAgfQogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiUkVMRUFTRSI6CiAgICAgICAgICBFID0gdm9pZCAwOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHJldHVybjsKICAgICAgfQogICAgfSBjYXRjaCAoQykgewogICAgICBFID0geyB2YWx1ZTogQywgW1NuXTogMCB9OwogICAgfQogICAgUHJvbWlzZS5yZXNvbHZlKEUpLmNhdGNoKChDKSA9PiAoeyB2YWx1ZTogQywgW1NuXTogMCB9KSkudGhlbigoQykgPT4gewogICAgICBjb25zdCBbUiwgU10gPSBXbihDKTsKICAgICAgdS5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIFIpLCB7IGlkOiBfIH0pLCBTKSwgdyA9PT0gIlJFTEVBU0UiICYmICh1LnJlbW92ZUV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBtKSwgSXQodSksIFpuIGluIG8gJiYgdHlwZW9mIG9bWm5dID09ICJmdW5jdGlvbiIgJiYgb1tabl0oKSk7CiAgICB9KS5jYXRjaCgoQykgPT4gewogICAgICBjb25zdCBbUiwgU10gPSBXbih7CiAgICAgICAgdmFsdWU6IG5ldyBUeXBlRXJyb3IoIlVuc2VyaWFsaXphYmxlIHJldHVybiB2YWx1ZSIpLAogICAgICAgIFtTbl06IDAKICAgICAgfSk7CiAgICAgIHUucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBSKSwgeyBpZDogXyB9KSwgUyk7CiAgICB9KTsKICB9KSwgdS5zdGFydCAmJiB1LnN0YXJ0KCk7Cn0KZnVuY3Rpb24gQWUobykgewogIHJldHVybiBvLmNvbnN0cnVjdG9yLm5hbWUgPT09ICJNZXNzYWdlUG9ydCI7Cn0KZnVuY3Rpb24gSXQobykgewogIEFlKG8pICYmIG8uY2xvc2UoKTsKfQpmdW5jdGlvbiBfZShvLCB1KSB7CiAgcmV0dXJuICRuKG8sIFtdLCB1KTsKfQpmdW5jdGlvbiBQbihvKSB7CiAgaWYgKG8pCiAgICB0aHJvdyBuZXcgRXJyb3IoIlByb3h5IGhhcyBiZWVuIHJlbGVhc2VkIGFuZCBpcyBub3QgdXNlYWJsZSIpOwp9CmZ1bmN0aW9uIGp0KG8pIHsKICByZXR1cm4gYW4obywgewogICAgdHlwZTogIlJFTEVBU0UiCiAgfSkudGhlbigoKSA9PiB7CiAgICBJdChvKTsKICB9KTsKfQpjb25zdCBibiA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpLCBPbiA9ICJGaW5hbGl6YXRpb25SZWdpc3RyeSIgaW4gZ2xvYmFsVGhpcyAmJiBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoKG8pID0+IHsKICBjb25zdCB1ID0gKGJuLmdldChvKSB8fCAwKSAtIDE7CiAgYm4uc2V0KG8sIHUpLCB1ID09PSAwICYmIGp0KG8pOwp9KTsKZnVuY3Rpb24gQ2UobywgdSkgewogIGNvbnN0IGUgPSAoYm4uZ2V0KHUpIHx8IDApICsgMTsKICBibi5zZXQodSwgZSksIE9uICYmIE9uLnJlZ2lzdGVyKG8sIHUsIG8pOwp9CmZ1bmN0aW9uIEVlKG8pIHsKICBPbiAmJiBPbi51bnJlZ2lzdGVyKG8pOwp9CmZ1bmN0aW9uICRuKG8sIHUgPSBbXSwgZSA9IGZ1bmN0aW9uKCkgewp9KSB7CiAgbGV0IG0gPSAhMTsKICBjb25zdCBnID0gbmV3IFByb3h5KGUsIHsKICAgIGdldChfLCB3KSB7CiAgICAgIGlmIChQbihtKSwgdyA9PT0gbWUpCiAgICAgICAgcmV0dXJuICgpID0+IHsKICAgICAgICAgIEVlKGcpLCBqdChvKSwgbSA9ICEwOwogICAgICAgIH07CiAgICAgIGlmICh3ID09PSAidGhlbiIpIHsKICAgICAgICBpZiAodS5sZW5ndGggPT09IDApCiAgICAgICAgICByZXR1cm4geyB0aGVuOiAoKSA9PiBnIH07CiAgICAgICAgY29uc3QgVCA9IGFuKG8sIHsKICAgICAgICAgIHR5cGU6ICJHRVQiLAogICAgICAgICAgcGF0aDogdS5tYXAoKE0pID0+IE0udG9TdHJpbmcoKSkKICAgICAgICB9KS50aGVuKFgpOwogICAgICAgIHJldHVybiBULnRoZW4uYmluZChUKTsKICAgICAgfQogICAgICByZXR1cm4gJG4obywgWy4uLnUsIHddKTsKICAgIH0sCiAgICBzZXQoXywgdywgVCkgewogICAgICBQbihtKTsKICAgICAgY29uc3QgW00sIEVdID0gV24oVCk7CiAgICAgIHJldHVybiBhbihvLCB7CiAgICAgICAgdHlwZTogIlNFVCIsCiAgICAgICAgcGF0aDogWy4uLnUsIHddLm1hcCgoQykgPT4gQy50b1N0cmluZygpKSwKICAgICAgICB2YWx1ZTogTQogICAgICB9LCBFKS50aGVuKFgpOwogICAgfSwKICAgIGFwcGx5KF8sIHcsIFQpIHsKICAgICAgUG4obSk7CiAgICAgIGNvbnN0IE0gPSB1W3UubGVuZ3RoIC0gMV07CiAgICAgIGlmIChNID09PSB5ZSkKICAgICAgICByZXR1cm4gYW4obywgewogICAgICAgICAgdHlwZTogIkVORFBPSU5UIgogICAgICAgIH0pLnRoZW4oWCk7CiAgICAgIGlmIChNID09PSAiYmluZCIpCiAgICAgICAgcmV0dXJuICRuKG8sIHUuc2xpY2UoMCwgLTEpKTsKICAgICAgY29uc3QgW0UsIENdID0ga3QoVCk7CiAgICAgIHJldHVybiBhbihvLCB7CiAgICAgICAgdHlwZTogIkFQUExZIiwKICAgICAgICBwYXRoOiB1Lm1hcCgoUikgPT4gUi50b1N0cmluZygpKSwKICAgICAgICBhcmd1bWVudExpc3Q6IEUKICAgICAgfSwgQykudGhlbihYKTsKICAgIH0sCiAgICBjb25zdHJ1Y3QoXywgdykgewogICAgICBQbihtKTsKICAgICAgY29uc3QgW1QsIE1dID0ga3Qodyk7CiAgICAgIHJldHVybiBhbihvLCB7CiAgICAgICAgdHlwZTogIkNPTlNUUlVDVCIsCiAgICAgICAgcGF0aDogdS5tYXAoKEUpID0+IEUudG9TdHJpbmcoKSksCiAgICAgICAgYXJndW1lbnRMaXN0OiBUCiAgICAgIH0sIE0pLnRoZW4oWCk7CiAgICB9CiAgfSk7CiAgcmV0dXJuIENlKGcsIG8pLCBnOwp9CmZ1bmN0aW9uIFRlKG8pIHsKICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgbyk7Cn0KZnVuY3Rpb24ga3QobykgewogIGNvbnN0IHUgPSBvLm1hcChXbik7CiAgcmV0dXJuIFt1Lm1hcCgoZSkgPT4gZVswXSksIFRlKHUubWFwKChlKSA9PiBlWzFdKSldOwp9CmNvbnN0IEx0ID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7CmZ1bmN0aW9uIE1lKG8sIHUpIHsKICByZXR1cm4gTHQuc2V0KG8sIHUpLCBvOwp9CmZ1bmN0aW9uIFBlKG8pIHsKICByZXR1cm4gT2JqZWN0LmFzc2lnbihvLCB7IFtSdF06ICEwIH0pOwp9CmZ1bmN0aW9uIFduKG8pIHsKICBmb3IgKGNvbnN0IFt1LCBlXSBvZiB4dCkKICAgIGlmIChlLmNhbkhhbmRsZShvKSkgewogICAgICBjb25zdCBbbSwgZ10gPSBlLnNlcmlhbGl6ZShvKTsKICAgICAgcmV0dXJuIFsKICAgICAgICB7CiAgICAgICAgICB0eXBlOiAiSEFORExFUiIsCiAgICAgICAgICBuYW1lOiB1LAogICAgICAgICAgdmFsdWU6IG0KICAgICAgICB9LAogICAgICAgIGcKICAgICAgXTsKICAgIH0KICByZXR1cm4gWwogICAgewogICAgICB0eXBlOiAiUkFXIiwKICAgICAgdmFsdWU6IG8KICAgIH0sCiAgICBMdC5nZXQobykgfHwgW10KICBdOwp9CmZ1bmN0aW9uIFgobykgewogIHN3aXRjaCAoby50eXBlKSB7CiAgICBjYXNlICJIQU5ETEVSIjoKICAgICAgcmV0dXJuIHh0LmdldChvLm5hbWUpLmRlc2VyaWFsaXplKG8udmFsdWUpOwogICAgY2FzZSAiUkFXIjoKICAgICAgcmV0dXJuIG8udmFsdWU7CiAgfQp9CmZ1bmN0aW9uIGFuKG8sIHUsIGUpIHsKICByZXR1cm4gbmV3IFByb21pc2UoKG0pID0+IHsKICAgIGNvbnN0IGcgPSBTZSgpOwogICAgby5hZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgZnVuY3Rpb24gXyh3KSB7CiAgICAgICF3LmRhdGEgfHwgIXcuZGF0YS5pZCB8fCB3LmRhdGEuaWQgIT09IGcgfHwgKG8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIF8pLCBtKHcuZGF0YSkpOwogICAgfSksIG8uc3RhcnQgJiYgby5zdGFydCgpLCBvLnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oeyBpZDogZyB9LCB1KSwgZSk7CiAgfSk7Cn0KZnVuY3Rpb24gU2UoKSB7CiAgcmV0dXJuIG5ldyBBcnJheSg0KS5maWxsKDApLm1hcCgoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikudG9TdHJpbmcoMTYpKS5qb2luKCItIik7Cn0KZnVuY3Rpb24gYmUoewogIGJvdHRvbVJpZ2h0WDogbywKICBib3R0b21SaWdodFk6IHUsCiAgdG9wTGVmdFg6IGUsCiAgdG9wTGVmdFk6IG0KfSwgZykgewogIGNvbnN0IF8gPSBNYXRoLmFicyhvIC0gZSksIHcgPSBNYXRoLmFicyh1IC0gbSksIFQgPSBNYXRoLm1heChfLCB3KSAqIDAuMzM3NSwgTSA9IGRlKGcud2lkdGgsIGcuaGVpZ2h0KTsKICByZXR1cm4gZmUoVCAvIE0pOwp9CmNsYXNzIE9lIGV4dGVuZHMgcGUgewogIHBhcnNlUmF3RGF0YSh1LCBlKSB7CiAgICBjb25zdCB7IGJyaWdodG5lc3M6IG0sIHNoYXJwbmVzczogZyB9ID0gdS5wYXJhbXMsIHsgYm90dG9tUmlnaHRYOiBfLCBib3R0b21SaWdodFk6IHcsIHRvcExlZnRYOiBULCB0b3BMZWZ0WTogTSB9ID0gdSwgRSA9IGJlKHsgYm90dG9tUmlnaHRYOiBfLCBib3R0b21SaWdodFk6IHcsIHRvcExlZnRYOiBULCB0b3BMZWZ0WTogTSB9LCBlKTsKICAgIHJldHVybiB7CiAgICAgIGNvbmZpZGVuY2U6IHUucHJvYmFiaWxpdHkgLyAxZTMsCiAgICAgIHRvcExlZnQ6IHsKICAgICAgICB4OiBULAogICAgICAgIHk6IE0KICAgICAgfSwKICAgICAgYm90dG9tUmlnaHQ6IHsKICAgICAgICB4OiBfLAogICAgICAgIHk6IHcKICAgICAgfSwKICAgICAgZmFjZUNlbnRlcjogewogICAgICAgIHg6IChUICsgXykgLyAyLAogICAgICAgIHk6IChNICsgdykgLyAyCiAgICAgIH0sCiAgICAgIGZhY2VTaXplOiBFLAogICAgICBicmlnaHRuZXNzOiBtIC8gMWUzLAogICAgICBzaGFycG5lc3M6IGcgLyAxZTMKICAgIH07CiAgfQogIGFzeW5jIGRldGVjdCh1LCBlLCBtKSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IHgoIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIGNvbnN0IGcgPSB0aGlzLmFsbG9jYXRlTWVtb3J5KHUubGVuZ3RoICogdS5CWVRFU19QRVJfRUxFTUVOVCksIF8gPSB0aGlzLmFsbG9jYXRlTWVtb3J5KHUubGVuZ3RoICogdS5CWVRFU19QRVJfRUxFTUVOVCk7CiAgICB0aGlzLndyaXRlRGF0YVRvTWVtb3J5KHUsIGcpLCB0aGlzLnNhbVdhc21Nb2R1bGUuY29udmVydFRvU2FtQ29sb3JJbWFnZSgKICAgICAgZS53aWR0aCwKICAgICAgZS5oZWlnaHQsCiAgICAgIGcsCiAgICAgIGNlLlJHQkEsCiAgICAgIF8KICAgICk7CiAgICBjb25zdCB3ID0gdGhpcy5zYW1XYXNtTW9kdWxlLmRldGVjdEZhY2VXaXRoSW1hZ2VQYXJhbWV0ZXJzKAogICAgICBlLndpZHRoLAogICAgICBlLmhlaWdodCwKICAgICAgXywKICAgICAgMCwKICAgICAgLy8gcGFyYW1XaWR0aCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICAgMAogICAgICAvLyBwYXJhbUhlaWdodCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICk7CiAgICByZXR1cm4gdGhpcy5yZWxlYXNlTWVtb3J5KGcpLCB0aGlzLnJlbGVhc2VNZW1vcnkoXyksIHRoaXMucGFyc2VSYXdEYXRhKHcsIG0pOwogIH0KfQpKbihPZSk7Cg==", Ka = typeof window < "u" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);" + atob(A0)], { type: "text/javascript;charset=utf-8" });
function rl(t) {
  let i;
  try {
    if (i = Ka && (window.URL || window.webkitURL).createObjectURL(Ka), !i)
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
      "data:application/javascript;base64," + A0,
      {
        type: "module",
        name: t == null ? void 0 : t.name
      }
    );
  }
}
const wo = class wo extends Xx {
  constructor() {
    super(...arguments);
    D(this, "detector");
    D(this, "className", "FaceController");
    D(this, "fallbackInstruction", Ye.FACE_NOT_PRESENT);
    D(this, "pitchAngleAccelerationThreshold", null);
    D(this, "validateDetectedObject", (e, n) => {
      const { brightnessHighThreshold: o, brightnessLowThreshold: r, faceConfidence: a, maxFaceSizeRatio: g, minFaceSizeRatio: s, outOfBoundsThreshold: x, sharpnessThreshold: C } = this.getThresholds(), u = e.confidence > a, f = e.faceSize > s, p = e.faceSize < g, v = e.sharpness > C, E = e.brightness > r, S = e.brightness < o, k = il(x, e, n), Z = ol(this.pitchAngleAccelerationThreshold, this.acceleration), O = {};
      return O.isPresent = u, O.isNotSmall = f, O.isNotLarge = p, O.isSharp = v, O.isNotDim = E, O.isNotBright = S, O.isNotOutOfBounds = k, O.isNotPitched = Z, O;
    });
    D(this, "getInstructionCode", (e, n) => {
      var r;
      if (this.isInCandidateSelection)
        return Ye.CANDIDATE_SELECTION;
      if ((r = this.lastImage) != null && r.isValid && n)
        return Ye.CANDIDATE_SELECTION;
      if (this.lastImage && n)
        return this.lastImage.instructionCode;
      const [o] = this.getInstructionCodesForValidators(e);
      return o ?? this.fallbackInstruction;
    });
    D(this, "getInstructionCodesForValidators", (e) => {
      const n = [];
      return Object.entries(e).forEach(([o, r]) => {
        !r && n.push(cI[o]);
      }), n;
    });
  }
  static async init() {
    const e = new rl(), n = u0(e), o = new wo(), r = await new n();
    this._instance = o, this._instance.detector = r;
  }
  static async getInstance() {
    return !this._instance && await this.init(), this._instance;
  }
  setThresholds(e) {
    super.setThresholds(e);
    const { devicePitchAngleThreshold: n } = e;
    this.pitchAngleAccelerationThreshold = OI * Math.sin(n * (Math.PI / (-8819 * 1 + -2875 * -1 + 6124)));
  }
  restart() {
    super.restart(), Ga(lt.INSTRUCTION_CHANGED, void (7279 + 1 * -7279), JI);
  }
  async processImage(e) {
    var E;
    const n = {};
    n.width = e.width, n.height = e.height;
    const o = n, r = cr(o), a = nx(e, r), g = ox(a), s = {};
    s.width = a.width, s.height = a.height;
    const x = s;
    let C = await this.detector.detect(g, x, o);
    C = Wx(o, C);
    const u = this.validateDetectedObject(C, o), f = this.isDetectionValid(u), p = this.getInstructionCode(u, f);
    if (u.isPresent && this.collectImagesForDuplicateDetection(g), this.isInCandidateSelection) {
      if (this.bestImage && f && this.isNewImageBetter(this.bestImage.detection, C)) {
        const S = { image: e, detection: Mt(C) };
        this.bestImage = S, this.candidateSelectionImages.push(S);
      }
    } else if ((E = this.lastImage) != null && E.isValid && f) {
      const S = { image: e, detection: Mt(C) }, k = {};
      k.image = this.lastImage.image, k.detection = this.lastImage.detection;
      const Z = k;
      this.isNewImageBetter(Z.detection, S.detection) ? this.bestImage = S : this.bestImage = Z, this.candidateSelectionImages.push(Z, S), this.isInCandidateSelection = !0;
    } else
      f ? this.lastImage = { instructionCode: p, isValid: !0, image: e, detection: Mt(C) } : this.lastImage = { instructionCode: p, isValid: !1, image: e, detection: Mt(C) };
    const v = { detectedFace: Mt(C), instructionCode: p, invalidValidators: this.getInstructionCodesForValidators(u), isInCandidateSelection: this.isInCandidateSelection };
    return this.detectionRecord.push(v.detectedFace), Ga(lt.INSTRUCTION_CHANGED, p), zI(lt.DETECTED_FACE_CHANGED, v.detectedFace, this.getThresholds().faceConfidence), $I(lt.FACE_DETECTION, v.detectedFace, e), v;
  }
};
D(wo, "_instance");
let Li = wo;
const al = (t, i) => {
  const { handleError: e } = Vo(), [n, o] = Le(), { acceleration: r } = Hx();
  n && n.setAcceleration(r), le(() => {
    (async () => {
      const s = await Li.getInstance();
      try {
        const x = {};
        x.wasmDirectoryPath = i, x.thresholds = t, await s.init(x);
      } catch (x) {
        if (x instanceof Error) {
          e(_.fromError(x));
          return;
        }
      }
      o(s);
    })();
  }, [e, t, i]);
  const a = {};
  return a.controller = n, a;
};
var bt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, p0 = {}, Ha = {}, gl = sl;
function sl(t, i) {
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
var f0 = {};
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
})(f0);
var cl = Po;
function Po() {
  this._listeners = {};
}
Po.prototype.on = function(t, i, e) {
  return (this._listeners[t] || (this._listeners[t] = [])).push({
    fn: i,
    ctx: e || this
  }), this;
};
Po.prototype.off = function(t, i) {
  if (t === void 0)
    this._listeners = {};
  else if (i === void 0)
    this._listeners[t] = [];
  else
    for (var e = this._listeners[t], n = 0; n < e.length; )
      e[n].fn === i ? e.splice(n, 1) : ++n;
  return this;
};
Po.prototype.emit = function(t) {
  var i = this._listeners[t];
  if (i) {
    for (var e = [], n = 1; n < arguments.length; )
      e.push(arguments[n++]);
    for (n = 0; n < i.length; )
      i[n].fn.apply(i[n++].ctx, e);
  }
  return this;
};
var Il = Wa(Wa);
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
    t.writeFloatLE = i.bind(null, Oa), t.writeFloatBE = i.bind(null, Ra);
    function e(n, o, r) {
      var a = n(o, r), g = (a >> 31) * 2 + 1, s = a >>> 23 & 255, x = a & 8388607;
      return s === 255 ? x ? NaN : g * (1 / 0) : s === 0 ? g * 1401298464324817e-60 * x : g * Math.pow(2, s - 150) * (x + 8388608);
    }
    t.readFloatLE = e.bind(null, Va), t.readFloatBE = e.bind(null, Ea);
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
    t.writeDoubleLE = i.bind(null, Oa, 0, 4), t.writeDoubleBE = i.bind(null, Ra, 4, 0);
    function e(n, o, r, a, g) {
      var s = n(a, g + o), x = n(a, g + r), C = (x >> 31) * 2 + 1, u = x >>> 20 & 2047, f = 4294967296 * (x & 1048575) + s;
      return u === 2047 ? f ? NaN : C * (1 / 0) : u === 0 ? C * 5e-324 * f : C * Math.pow(2, u - 1075) * (f + 4503599627370496);
    }
    t.readDoubleLE = e.bind(null, Va, 0, 4), t.readDoubleBE = e.bind(null, Ea, 4, 0);
  }(), t;
}
function Oa(t, i, e) {
  i[e] = t & 255, i[e + 1] = t >>> 8 & 255, i[e + 2] = t >>> 16 & 255, i[e + 3] = t >>> 24;
}
function Ra(t, i, e) {
  i[e] = t >>> 24, i[e + 1] = t >>> 16 & 255, i[e + 2] = t >>> 8 & 255, i[e + 3] = t & 255;
}
function Va(t, i) {
  return (t[i] | t[i + 1] << 8 | t[i + 2] << 16 | t[i + 3] << 24) >>> 0;
}
function Ea(t, i) {
  return (t[i] << 24 | t[i + 1] << 16 | t[i + 2] << 8 | t[i + 3]) >>> 0;
}
function Pa(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var xl = ll;
function ll(t) {
  try {
    if (typeof Pa != "function")
      return null;
    var i = Pa(t);
    return i && (i.length || Object.keys(i).length) ? i : null;
  } catch {
    return null;
  }
}
var h0 = {};
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
})(h0);
var ul = Cl;
function Cl(t, i, e) {
  var n = e || 8192, o = n >>> 1, r = null, a = n;
  return function(g) {
    if (g < 1 || g > o)
      return t(g);
    a + g > n && (r = t(n), a = 0);
    var s = i.call(r, a, a += g);
    return a & 7 && (a = (a | 7) + 1), s;
  };
}
var Ii, Na;
function dl() {
  if (Na)
    return Ii;
  Na = 1, Ii = i;
  var t = Rt();
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
  }, Ii;
}
var Ya;
function Rt() {
  return Ya || (Ya = 1, function(t) {
    var i = t;
    i.asPromise = gl, i.base64 = f0, i.EventEmitter = cl, i.float = Il, i.inquire = xl, i.utf8 = h0, i.pool = ul, i.LongBits = dl(), i.isNode = !!(typeof bt < "u" && bt && bt.process && bt.process.versions && bt.process.versions.node), i.global = i.isNode && bt || typeof window < "u" && window || typeof self < "u" && self || bt, i.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  }(Ha)), Ha;
}
var m0 = X, Oe = Rt(), Ti, No = Oe.LongBits, La = Oe.base64, Ta = Oe.utf8;
function Rn(t, i, e) {
  this.fn = t, this.len = i, this.next = void 0, this.val = e;
}
function Ir() {
}
function Al(t) {
  this.head = t.head, this.tail = t.tail, this.len = t.len, this.next = t.states;
}
function X() {
  this.len = 0, this.head = new Rn(Ir, 0, 0), this.tail = this.head, this.states = null;
}
var b0 = function() {
  return Oe.Buffer ? function() {
    return (X.create = function() {
      return new Ti();
    })();
  } : function() {
    return new X();
  };
};
X.create = b0();
X.alloc = function(t) {
  return new Oe.Array(t);
};
Oe.Array !== Array && (X.alloc = Oe.pool(X.alloc, Oe.Array.prototype.subarray));
X.prototype._push = function(t, i, e) {
  return this.tail = this.tail.next = new Rn(t, i, e), this.len += i, this;
};
function xr(t, i, e) {
  i[e] = t & 255;
}
function pl(t, i, e) {
  for (; t > 127; )
    i[e++] = t & 127 | 128, t >>>= 7;
  i[e] = t;
}
function lr(t, i) {
  this.len = t, this.next = void 0, this.val = i;
}
lr.prototype = Object.create(Rn.prototype);
lr.prototype.fn = pl;
X.prototype.uint32 = function(t) {
  return this.len += (this.tail = this.tail.next = new lr(
    (t = t >>> 0) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : 5,
    t
  )).len, this;
};
X.prototype.int32 = function(t) {
  return t < 0 ? this._push(ur, 10, No.fromNumber(t)) : this.uint32(t);
};
X.prototype.sint32 = function(t) {
  return this.uint32((t << 1 ^ t >> 31) >>> 0);
};
function ur(t, i, e) {
  for (; t.hi; )
    i[e++] = t.lo & 127 | 128, t.lo = (t.lo >>> 7 | t.hi << 25) >>> 0, t.hi >>>= 7;
  for (; t.lo > 127; )
    i[e++] = t.lo & 127 | 128, t.lo = t.lo >>> 7;
  i[e++] = t.lo;
}
X.prototype.uint64 = function(t) {
  var i = No.from(t);
  return this._push(ur, i.length(), i);
};
X.prototype.int64 = X.prototype.uint64;
X.prototype.sint64 = function(t) {
  var i = No.from(t).zzEncode();
  return this._push(ur, i.length(), i);
};
X.prototype.bool = function(t) {
  return this._push(xr, 1, t ? 1 : 0);
};
function Fi(t, i, e) {
  i[e] = t & 255, i[e + 1] = t >>> 8 & 255, i[e + 2] = t >>> 16 & 255, i[e + 3] = t >>> 24;
}
X.prototype.fixed32 = function(t) {
  return this._push(Fi, 4, t >>> 0);
};
X.prototype.sfixed32 = X.prototype.fixed32;
X.prototype.fixed64 = function(t) {
  var i = No.from(t);
  return this._push(Fi, 4, i.lo)._push(Fi, 4, i.hi);
};
X.prototype.sfixed64 = X.prototype.fixed64;
X.prototype.float = function(t) {
  return this._push(Oe.float.writeFloatLE, 4, t);
};
X.prototype.double = function(t) {
  return this._push(Oe.float.writeDoubleLE, 8, t);
};
var fl = Oe.Array.prototype.set ? function(t, i, e) {
  i.set(t, e);
} : function(t, i, e) {
  for (var n = 0; n < t.length; ++n)
    i[e + n] = t[n];
};
X.prototype.bytes = function(t) {
  var i = t.length >>> 0;
  if (!i)
    return this._push(xr, 1, 0);
  if (Oe.isString(t)) {
    var e = X.alloc(i = La.length(t));
    La.decode(t, e, 0), t = e;
  }
  return this.uint32(i)._push(fl, i, t);
};
X.prototype.string = function(t) {
  var i = Ta.length(t);
  return i ? this.uint32(i)._push(Ta.write, i, t) : this._push(xr, 1, 0);
};
X.prototype.fork = function() {
  return this.states = new Al(this), this.head = this.tail = new Rn(Ir, 0, 0), this.len = 0, this;
};
X.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Rn(Ir, 0, 0), this.len = 0), this;
};
X.prototype.ldelim = function() {
  var t = this.head, i = this.tail, e = this.len;
  return this.reset().uint32(e), e && (this.tail.next = t.next, this.tail = i, this.len += e), this;
};
X.prototype.finish = function() {
  for (var t = this.head.next, i = this.constructor.alloc(this.len), e = 0; t; )
    t.fn(t.val, i, e), e += t.len, t = t.next;
  return i;
};
X._configure = function(t) {
  Ti = t, X.create = b0(), Ti._configure();
};
var hl = $e, y0 = m0;
($e.prototype = Object.create(y0.prototype)).constructor = $e;
var ut = Rt();
function $e() {
  y0.call(this);
}
$e._configure = function() {
  $e.alloc = ut._Buffer_allocUnsafe, $e.writeBytesBuffer = ut.Buffer && ut.Buffer.prototype instanceof Uint8Array && ut.Buffer.prototype.set.name === "set" ? function(t, i, e) {
    i.set(t, e);
  } : function(t, i, e) {
    if (t.copy)
      t.copy(i, e, 0, t.length);
    else
      for (var n = 0; n < t.length; )
        i[e++] = t[n++];
  };
};
$e.prototype.bytes = function(t) {
  ut.isString(t) && (t = ut._Buffer_from(t, "base64"));
  var i = t.length >>> 0;
  return this.uint32(i), i && this._push($e.writeBytesBuffer, i, t), this;
};
function ml(t, i, e) {
  t.length < 40 ? ut.utf8.write(t, i, e) : i.utf8Write ? i.utf8Write(t, e) : i.write(t, e);
}
$e.prototype.string = function(t) {
  var i = ut.Buffer.byteLength(t);
  return this.uint32(i), i && this._push(ml, i, t), this;
};
$e._configure();
var v0 = re, qe = Rt(), Di, w0 = qe.LongBits, bl = qe.utf8;
function De(t, i) {
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
}, B0 = function() {
  return qe.Buffer ? function(t) {
    return (re.create = function(i) {
      return qe.Buffer.isBuffer(i) ? new Di(i) : Fa(i);
    })(t);
  } : Fa;
};
re.create = B0();
re.prototype._slice = qe.Array.prototype.subarray || /* istanbul ignore next */
qe.Array.prototype.slice;
re.prototype.uint32 = /* @__PURE__ */ function() {
  var t = 4294967295;
  return function() {
    if (t = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (t = (t | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (t = (t | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (t = (t | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (t = (t | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return t;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, De(this, 10);
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
function xi() {
  var t = new w0(0, 0), i = 0;
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
        throw De(this);
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
        throw De(this);
      if (t.hi = (t.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return t;
    }
  throw Error("invalid varint encoding");
}
re.prototype.bool = function() {
  return this.uint32() !== 0;
};
function yo(t, i) {
  return (t[i - 4] | t[i - 3] << 8 | t[i - 2] << 16 | t[i - 1] << 24) >>> 0;
}
re.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw De(this, 4);
  return yo(this.buf, this.pos += 4);
};
re.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw De(this, 4);
  return yo(this.buf, this.pos += 4) | 0;
};
function Da() {
  if (this.pos + 8 > this.len)
    throw De(this, 8);
  return new w0(yo(this.buf, this.pos += 4), yo(this.buf, this.pos += 4));
}
re.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw De(this, 4);
  var t = qe.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, t;
};
re.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw De(this, 4);
  var t = qe.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, t;
};
re.prototype.bytes = function() {
  var t = this.uint32(), i = this.pos, e = this.pos + t;
  if (e > this.len)
    throw De(this, t);
  return this.pos += t, Array.isArray(this.buf) ? this.buf.slice(i, e) : i === e ? new this.buf.constructor(0) : this._slice.call(this.buf, i, e);
};
re.prototype.string = function() {
  var t = this.bytes();
  return bl.read(t, 0, t.length);
};
re.prototype.skip = function(t) {
  if (typeof t == "number") {
    if (this.pos + t > this.len)
      throw De(this, t);
    this.pos += t;
  } else
    do
      if (this.pos >= this.len)
        throw De(this);
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
  Di = t, re.create = B0(), Di._configure();
  var i = qe.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  qe.merge(re.prototype, {
    int64: function() {
      return xi.call(this)[i](!1);
    },
    uint64: function() {
      return xi.call(this)[i](!0);
    },
    sint64: function() {
      return xi.call(this).zzDecode()[i](!1);
    },
    fixed64: function() {
      return Da.call(this)[i](!0);
    },
    sfixed64: function() {
      return Da.call(this)[i](!1);
    }
  });
};
var yl = Wt, S0 = v0;
(Wt.prototype = Object.create(S0.prototype)).constructor = Wt;
var Xa = Rt();
function Wt(t) {
  S0.call(this, t);
}
Wt._configure = function() {
  Xa.Buffer && (Wt.prototype._slice = Xa.Buffer.prototype.slice);
};
Wt.prototype.string = function() {
  var t = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + t, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + t, this.len));
};
Wt._configure();
var G0 = {}, vl = kn, Cr = Rt();
(kn.prototype = Object.create(Cr.EventEmitter.prototype)).constructor = kn;
function kn(t, i, e) {
  if (typeof t != "function")
    throw TypeError("rpcImpl must be a function");
  Cr.EventEmitter.call(this), this.rpcImpl = t, this.requestDelimited = !!i, this.responseDelimited = !!e;
}
kn.prototype.rpcCall = function t(i, e, n, o, r) {
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
kn.prototype.end = function(t) {
  return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(t) {
  var i = t;
  i.Service = vl;
})(G0);
var wl = {};
(function(t) {
  var i = t;
  i.build = "minimal", i.Writer = m0, i.BufferWriter = hl, i.Reader = v0, i.BufferReader = yl, i.util = Rt(), i.rpc = G0, i.roots = wl, i.configure = e;
  function e() {
    i.util._configure(), i.Writer._configure(i.BufferWriter), i.Reader._configure(i.BufferReader);
  }
  e();
})(p0);
var oe = p0;
const w = oe.Reader, ue = oe.Writer, h = oe.util, d = oe.roots.default || (oe.roots.default = {}), Ot = d.dot = (() => {
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
      return n || (n = ue.create()), e.token != null && Object.hasOwnProperty.call(e, "token") && n.uint32(
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
        if (o || (o = ue.create()), n.images != null && n.images.length)
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
        return r || (r = ue.create()), o.platform != null && Object.hasOwnProperty.call(o, "platform") && r.uint32(
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
        if (r || (r = ue.create()), o.supportedAbis != null && o.supportedAbis.length)
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
        if (o || (o = ue.create()), n.device != null && Object.hasOwnProperty.call(n, "device") && o.uint32(
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
        if (o || (o = ue.create()), n.currentCameraProperties != null && Object.hasOwnProperty.call(n, "currentCameraProperties") && d.dot.v3.MediaTrackSettings.encode(n.currentCameraProperties, o.uint32(
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
        return r || (r = ue.create()), o.aspectRatio != null && Object.hasOwnProperty.call(o, "aspectRatio") && r.uint32(
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
        return o || (o = ue.create()), n.width != null && Object.hasOwnProperty.call(n, "width") && o.uint32(
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
        return r || (r = ue.create()), o.cameraInitFrameResolution != null && Object.hasOwnProperty.call(o, "cameraInitFrameResolution") && d.dot.v3.ImageBitmap.encode(o.cameraInitFrameResolution, r.uint32(
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
        return o || (o = ue.create()), n.brightness != null && Object.hasOwnProperty.call(n, "brightness") && o.uint32(
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
        return o || (o = ue.create()), n.x != null && Object.hasOwnProperty.call(n, "x") && o.uint32(
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
        return o || (o = ue.create()), n.image != null && Object.hasOwnProperty.call(n, "image") && d.dot.Image.encode(n.image, o.uint32(
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
        return o || (o = ue.create()), n.image != null && Object.hasOwnProperty.call(n, "image") && d.dot.Image.encode(n.image, o.uint32(
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
        return r || (r = ue.create()), o.documentContent != null && Object.hasOwnProperty.call(o, "documentContent") && d.dot.v3.DocumentContent.encode(o.documentContent, r.uint32(
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
        return o || (o = ue.create()), n.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(n, "neutralExpressionFaceImage") && d.dot.Image.encode(n.neutralExpressionFaceImage, o.uint32(
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
      return n || (n = ue.create()), e.bytes != null && Object.hasOwnProperty.call(e, "bytes") && n.uint32(
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
      if (n || (n = ue.create()), e.items != null && e.items.length) {
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
async function Xi(t) {
  const { Image: i } = Ot, e = await t.arrayBuffer(), n = new Uint8Array(e), o = {};
  o.bytes = n;
  const r = i.verify(o);
  if (r)
    throw Error(r);
  const a = {};
  return a.bytes = n, i.create(a);
}
async function Z0(t) {
  const { v3: { Metadata: i } } = Ot, e = { ...t };
  e.platform = Ot.Platform.WEB;
  const n = e, o = i.verify(n);
  if (o)
    throw Error(o);
  return i.create(n);
}
async function k0(t) {
  const { Content: i } = Ot, { iv: e, key: n, message: o } = await Fx(t), r = { token: new Uint8Array(n), iv: e, schemaVersion: EI, bytes: new Uint8Array(o) }, a = i.verify(r);
  if (a)
    throw Error(a);
  const g = i.create(r);
  return i.encode(g).finish();
}
function K0({ documentContent: t, faceContent: i, magnifeyeLivenessContent: e, smileLivenessContent: n }) {
  const { Blob: o } = Ot.v3, r = {};
  r.documentContent = t, r.faceContent = i, r.magnifeyeLivenessContent = e, r.smileLivenessContent = n;
  const a = r, g = o.verify(a);
  if (g)
    throw Error(g);
  const s = o.create(a);
  return o.encode(s).finish();
}
async function Bl(t, i) {
  const { FaceContent: e } = Ot.v3, n = await Xi(t), o = await Z0(i), r = {};
  r.image = n, r.metadata = o;
  const a = r, g = e.verify(a);
  if (g)
    throw Error(g);
  const s = e.create(a), x = {};
  return x.faceContent = s, K0(x);
}
async function Sl(t, i) {
  const e = await Bl(t, i);
  return k0(e);
}
const Gl = ({
  onPhotoTakenInternal: t
}) => {
  const {
    analytics: i,
    appState: e,
    handleAppStateChange: n,
    handleError: o
  } = Vo(), {
    faceCameraOptions: r
  } = $g(), {
    cameraFacing: a,
    onPhotoTaken: g,
    sessionToken: s,
    thresholds: x,
    wasmDirectoryPath: C
  } = r, u = At(), f = Gt(void 0), {
    cameraHandler: p,
    cameraResolution: v,
    onCameraResolutionChange: E
  } = Bx(u, a), {
    controller: S
  } = al(x, C), {
    shouldMirror: k
  } = vx(lt.CONTROL, p);
  return rx(lt.CAMERA_PROPS_CHANGED, {
    cameraResolution: v,
    shouldMirror: k
  }), Sx(i), le(() => () => {
    Zn.getInstance().restart();
  }, []), le(() => {
    p != null && p.videoTrack && (S != null && S.isDetectorInitialized) && n(Qe.RUNNING);
  }, [p == null ? void 0 : p.videoTrack, S == null ? void 0 : S.isDetectorInitialized, n]), le(() => {
    if (e !== Qe.RUNNING)
      return;
    if (!p || !S)
      throw new _("Cannot start detection");
    let Z = 0, O = !1, Q = 0;
    const T = new sr(30);
    S.clearImagesForDuplicateDetection();
    const j = async ($, z, te) => {
      const he = {
        width: $.width,
        height: $.height
      }, ne = await tx($), me = {
        ...await p.getCameraProperties(),
        detectionRecord: te,
        hashedDetectedImages: S.getImagesForDuplicateDetection()
      }, de = await Sl(ne, {
        sessionToken: s,
        web: me
      }), ve = {
        detection: z,
        imageResolution: he
      };
      ix(Jg.FACE, S.getCandidateSelectionImages()), t && t({
        cameraProperties: me || {}
      }), g({
        image: ne,
        data: ve
      }, de);
    };
    return (async () => {
      const $ = Date.now();
      for (; p.checkIfStreamIsRunning() && !O; ) {
        if (hx(Z, Q)) {
          const {
            detection: ve,
            image: Ve
          } = S.getBestImage() || {}, we = S.getDetectionRecord();
          if (Ve && ve) {
            const je = Date.now(), Ee = t0(T);
            i.trackCaptureProcess({
              faceDetection: ve,
              imageResolution: {
                width: Ve.width,
                height: Ve.height
              },
              deviceName: await p.getDeviceName(),
              averageFps: Ee,
              captureProcessDurationInMs: je - $,
              facingMode: p.getCameraSettings().facingMode,
              instructionSet: await S.getInstructionSet()
            }), n(Qe.WAITING), await j(Ve, ve, we), S.restart();
          } else
            o(new _("Something went wrong during capturing an image"));
          return;
        }
        const z = Date.now(), te = p.takePhoto(), he = {
          width: te.width,
          height: te.height
        };
        let ne;
        try {
          ne = await S.processImage(te);
        } catch (ve) {
          ve instanceof Error && o(_.fromCameraError(ve));
          return;
        }
        const me = Date.now() - z, ae = On(1e3 / me);
        T.pushFixed(ae);
        const de = {
          face: ne.detectedFace,
          detectionTime: me,
          fps: ae,
          resolution: he,
          instructionCode: ne.instructionCode,
          invalidValidators: ne.invalidValidators,
          samVersion: S.samVersion
        };
        f.value = de, ne.isInCandidateSelection && (Z === 0 && (Z = performance.now()), Q++), E(he), await Ni(Math.max(Sa.max - me, Sa.min));
      }
    })(), () => {
      O = !0;
    };
  }, [e, p, S, r, n, o, g, x.faceConfidence, E, t, s, f, i]), Ie(Fe, {
    children: [Ie(gI, {
      ref: u,
      $isImageMirror: k,
      autoPlay: !0,
      muted: !0,
      playsInline: !0
    }), v && e === Qe.RUNNING && Ie(Vx, {
      cameraResolution: v,
      detectionDetails: f,
      isImageMirror: k
    })]
  });
}, Zl = ({
  onPhotoTakenInternal: t,
  ...i
}) => Ie(DI, {
  cameraOptions: i,
  children: Ie(Gl, {
    onPhotoTakenInternal: t
  })
}), kl = ({
  children: t
}) => {
  const i = At(null);
  return Gx(i, lt.VIDEO_ELEMENT_SIZE), Ie(aI, {
    ref: i,
    children: t
  });
};
async function Kl(t, i, e) {
  const { SmileLivenessContent: n } = Ot.v3, o = await Xi(t), r = await Xi(i), a = await Z0(e), g = {};
  g.neutralExpressionFaceImage = o, g.smileExpressionFaceImage = r, g.metadata = a;
  const s = g, x = n.verify(s);
  if (x)
    throw Error(x);
  const C = n.create(s), u = {};
  return u.smileLivenessContent = C, K0(u);
}
async function Hl(t, i, e) {
  const n = await Kl(t, i, e);
  return k0(n);
}
const Ut = {};
Ut.brightnessHighThreshold = 1, Ut.brightnessLowThreshold = -(-9875 + -29 * -211 + 13 * 289), Ut.sharpnessThreshold = -(9191 + -1 * 9190), Ut.outOfBoundsThreshold = -(-8121 + 262 * 31), Ut.minFaceSizeRatio = 0.1;
const Wl = { [Qt.NEUTRAL]: {}, [Qt.SMILE]: Ut }, Ol = Wl;
function Rl(t, i) {
  var e = { ...Ol[t.value], ...i };
  return e;
}
const Vl = ({
  onComplete: t,
  onError: i,
  sessionToken: e,
  thresholds: n,
  wasmDirectoryPath: o
}) => {
  const {
    analytics: r,
    handleAppStateChange: a,
    handleError: g
  } = lI(), s = Gt(Qt.NEUTRAL), x = Gt(null), C = Gt(null), u = vI(Gn.ANIMATION_END), f = Gt(null);
  le(() => {
    u.value && a(vn.RUNNING);
  }, [a, u.value]);
  function p(Z) {
    s.value = Z, Pi(Gn.STATUS_CHANGED, {
      phase: Z
    });
  }
  function v(Z) {
    x.value = Z, p(Qt.SMILE);
  }
  async function E(Z) {
    C.value = Z;
    try {
      if (!x.value || !C.value)
        throw new _("Missing face data");
      const O = {
        sessionToken: e,
        web: f.value
      }, Q = await Hl(x.value.image, C.value.image, O), T = [x.value, C.value];
      t(T, Q), r.trackLivenessProcess(T), a(vn.DONE);
    } catch (O) {
      O instanceof Error && g(_.fromError(O));
      return;
    }
  }
  function S(Z) {
    f.value = wI(f.value, Z.cameraProperties);
  }
  const k = {
    [Qt.NEUTRAL]: v,
    [Qt.SMILE]: E
  };
  return Ie(kl, {
    children: Ie(Zl, {
      onError: i,
      onPhotoTaken: k[s.value],
      onPhotoTakenInternal: S,
      thresholds: Rl(s, n),
      wasmDirectoryPath: o
    })
  });
};
var H0 = ((t) => (t.AUTO_CAPTURE = "auto-capture", t))(H0 || {});
class El {
  constructor() {
    D(this, "appKey", "");
    D(this, "deviceId", "");
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
    const g = $n(a);
    await fetch("" + r + g + "&" + i, o);
  }
  async init(i, e) {
    if (!e)
      return;
    this.appKey = e, this.deviceId = i;
    const n = { _app_version: i0() }, o = { organization: r0(window.location.href) }, r = $n({ begin_session: "1", metrics: JSON.stringify(n), user_details: JSON.stringify(o) });
    await this.countlyFetch(r);
  }
  async endSession() {
    const i = {};
    i.end_session = "1";
    const e = $n(i);
    await this.countlyFetch(e);
  }
  async sendAutoCaptureEvent(i, e) {
    const n = {};
    n.key = H0.AUTO_CAPTURE, n.count = 1, n.dur = e, n.segmentation = i;
    const o = [n], r = $n({ events: JSON.stringify(o) });
    await this.countlyFetch(r);
  }
}
const li = new El();
function Pl() {
  const [t] = window.crypto.getRandomValues(new Uint32Array(1));
  return t.toString(-1 * -824 + -1 * -9085 + 9893 * -1);
}
function Nl() {
  const t = sessionStorage.getItem("dot-user-id");
  if (t)
    return t;
  const i = Pl();
  return sessionStorage.setItem("dot-user-id", i), i;
}
function Yl(t, i) {
  return i ? i === "user" ? "Front Camera" : "Back Camera" : t;
}
function Ll(t) {
  return t > -9506 + -8812 * -1 + 754 ? ">1m" : t > 1966 * -2 + 6205 + -2228 * 1 ? ">45" : t > 1938 + -1051 * 9 + -3 * -2517 ? ">30" : "" + t;
}
const Tl = (t) => Math.round(t / 500) * 500 / 1e3, ja = (t) => t ? t <= 1283 * -2 + -4403 + 6970 ? Math.round(t * (-883 + -128 * 41 + 6151)) / (3 * 1565 + 1892 + -199 * 33) : Math.round(t / (-1 * -6386 + 6170 + -12506)) * (-1 * -1238 + -8567 + 1 * 7379) : 0, Fl = (t) => Math.round(t * (-619 * -13 + 7 * -857 + 341 * -6)) / (-2221 * 2 + 4178 * -1 + 8622);
class Dl {
  constructor() {
    D(this, "countly", li);
  }
  createSegmentation(i) {
    return { appVersion: i0(), ...i };
  }
  init(i) {
    if (fx())
      return;
    const e = Nl();
    li.init(e, i);
  }
  endSession() {
    li.endSession();
  }
}
class Xl extends Dl {
  constructor() {
    super(...arguments);
    D(this, "captureProcessAnalytics", []);
  }
  trackCaptureProcess(e) {
    this.captureProcessAnalytics.push(e);
  }
}
class jl extends Xl {
  trackLivenessProcess(i) {
    var C, u, f, p, v, E;
    if (!i.length || !this.captureProcessAnalytics.length)
      return;
    const [e, n] = i, [o, r] = this.captureProcessAnalytics, a = Fl(o.averageFps + (r == null ? void 0 : r.averageFps)) / (8748 + -1481 * -6 + -17632), g = Tl(o.captureProcessDurationInMs), s = -73 * -107 + -6775 + 1 * -1033, x = this.createSegmentation({ faceSize: ja((C = n.data.detection) == null ? void 0 : C.faceSize), confidence: ja((u = e.data.detection) == null ? void 0 : u.confidence), imageResolution: ((p = (f = e.data) == null ? void 0 : f["imageResolution"]) == null ? void 0 : p.width) + "x" + ((E = (v = e.data) == null ? void 0 : v["imageResolution"]) == null ? void 0 : E.height), averageFps: a, captureTimeNeutral: Ll(g), captureTimeSmile: "" + s, camera: Yl(o == null ? void 0 : o.deviceName, o.facingMode), instructionSet: o.instructionSet });
    this.countly.sendAutoCaptureEvent(x, g + s);
  }
}
const W0 = new jl();
function Ml(t) {
  const [i, e] = Le(vn.LOADING), [n, o] = Le(!1), [r, a] = Le(), g = uo((x) => {
    Pi(Gn.STATUS_CHANGED, {
      state: vn.ERROR,
      error: x
    }), o(!1), t(x), a(x), e(vn.ERROR);
  }, [t]), s = uo((x) => {
    e(x), Pi(Gn.STATUS_CHANGED, {
      state: x
    });
  }, []);
  return {
    appState: i,
    isCameraReady: n,
    setIsCameraReady: o,
    handleAppStateChange: s,
    handleError: g,
    error: r,
    analytics: W0
  };
}
const Jl = ({
  props: t
}) => (le(() => {
  W0.init("d64319129bb0ee02eccfab418edba9629a97d6b6");
}, []), t ? Ie(_c, {
  target: t.styleTarget,
  children: Ie(xI, {
    value: Ml(t.onError),
    children: Ie(Yg, {
      children: Ie(Vl, {
        ...t
      })
    })
  })
}) : null);
as(Jl, "x-dot-smile-liveness", ["props"]);
