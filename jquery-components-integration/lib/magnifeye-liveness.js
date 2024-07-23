var Dg = Object.defineProperty;
var Fg = (t, o, e) => o in t ? Dg(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e;
var D = (t, o, e) => (Fg(t, typeof o != "symbol" ? o + "" : o, e), e), da = (t, o, e) => {
  if (!o.has(t))
    throw TypeError("Cannot " + e);
};
var ho = (t, o, e) => (da(t, o, "read from private field"), e ? e.call(t) : o.get(t)), fa = (t, o, e) => {
  if (o.has(t))
    throw TypeError("Cannot add the same private member more than once");
  o instanceof WeakSet ? o.add(t) : o.set(t, e);
}, Aa = (t, o, e, n) => (da(t, o, "write to private field"), n ? n.call(t, e) : o.set(t, e), e);
var Xn, H, K0, H0, Ht, ha, O0, Oo, R0, Tn = {}, W0 = [], Xg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Xi = Array.isArray;
function lt(t, o) {
  for (var e in o)
    t[e] = o[e];
  return t;
}
function V0(t) {
  var o = t.parentNode;
  o && o.removeChild(t);
}
function ve(t, o, e) {
  var n, i, r, a = {};
  for (r in o)
    r == "key" ? n = o[r] : r == "ref" ? i = o[r] : a[r] = o[r];
  if (arguments.length > 2 && (a.children = arguments.length > 796 * -11 + -1 * -3047 + -84 * -68 ? Xn.call(arguments, 4 * -1478 + -1 * -2233 + 3681) : e), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      void (9 * 191 + 1 * -7981 + -202 * -31) === a[r] && (a[r] = t.defaultProps[r]);
  return Rn(t, a, n, i, null);
}
function Rn(t, o, e, n, i) {
  var r = {};
  r.type = t, r.props = o, r.key = e, r.ref = n, r.__k = null, r.__ = null, r.__b = 0, r.__e = null, r.__d = void (-1 * 2791 + -9241 + 12032), r.__c = null, r.constructor = void (-4922 + 214 * 23), r.__v = i ?? ++K0, r.__i = -(-9 * -41 + 286 + -109 * 6), r.__u = 0;
  var a = r;
  return i == null && H.vnode != null && H.vnode(a), a;
}
function jg() {
  var t = {};
  return t.current = null, t;
}
function Me(t) {
  return t.children;
}
function Le(t, o) {
  this.props = t, this.context = o;
}
function sn(t, o) {
  if (o == null)
    return t.__ ? sn(t.__, t.__i + (3669 * 1 + -5178 + -1510 * -1)) : null;
  for (var e; o < t.__k.length; o++)
    if ((e = t.__k[o]) != null && e.__e != null)
      return e.__e;
  return typeof t.type == "function" ? sn(t) : null;
}
function E0(t) {
  var o, e;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, o = 2 * 3798 + -7283 * -1 + 14879 * -1; o < t.__k.length; o++)
      if ((e = t.__k[o]) != null && e.__e != null) {
        t.__e = t.__c.base = e.__e;
        break;
      }
    return E0(t);
  }
}
function Ro(t) {
  (!t.__d && (t.__d = !(-1 * -5714 + -1448 * -1 + -3581 * 2)) && Ht.push(t) && !Ki.__r++ || ha !== H.debounceRendering) && ((ha = H.debounceRendering) || O0)(Ki);
}
function Ki() {
  var t, o, e, n, i, r, a, s, g;
  for (Ht.sort(Oo); t = Ht.shift(); )
    t.__d && (o = Ht.length, n = void (-4912 * -2 + 2374 + -12198), r = (i = (e = t).__v).__e, s = [], g = [], (a = e.__P) && ((n = lt({}, i)).__v = i.__v + (7455 * 1 + 26 * -367 + 2088), H.vnode && H.vnode(n), Ar(a, n, i, e.__n, void (7 * 743 + 1 * 674 + -25 * 235) !== a.ownerSVGElement, 26 * 271 + 569 * -2 + -5876 & i.__u ? [r] : null, s, r ?? sn(i), !!(32 & i.__u), g), n.__.__k[n.__i] = n, L0(s, n, g), n.__e != r && E0(n)), Ht.length > o && Ht.sort(Oo));
  Ki.__r = 1019 * 4 + -3938 + -138;
}
function P0(t, o, e, n, i, r, a, s, g, I, C) {
  var l, h, A, y, k, B = n && n.__k || W0, v = o.length;
  for (e.__d = g, Mg(e, o, B), g = e.__d, l = 0; l < v; l++)
    (A = e.__k[l]) != null && typeof A != "boolean" && typeof A != "function" && (h = -(-5224 * -1 + 6 * -63 + -285 * 17) === A.__i ? Tn : B[A.__i] || Tn, A.__i = l, Ar(t, A, h, i, r, a, s, g, I, C), y = A.__e, A.ref && h.ref != A.ref && (h.ref && hr(h.ref, null, A), C.push(A.ref, A.__c || y, A)), k == null && y != null && (k = y), 46499 * 1 + -114505 + 14838 * 9 & A.__u || h.__k === A.__k ? g = N0(A, g, t) : typeof A.type == "function" && A.__d !== void 0 ? g = A.__d : y && (g = y.nextSibling), A.__d = void (4834 + 421 * -7 + -1887), A.__u &= -(13 * -16099 + -22 * 7138 + 562932));
  e.__d = g, e.__e = k;
}
function Mg(t, o, e) {
  var n, i, r, a, s, g = o.length, I = e.length, C = I, l = 1 * -8311 + -6933 + 15244;
  for (t.__k = [], n = -2707 * -2 + -6518 + 46 * 24; n < g; n++)
    (i = t.__k[n] = (i = o[n]) == null || typeof i == "boolean" || typeof i == "function" ? null : typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? Rn(null, i, null, null, i) : Xi(i) ? Rn(Me, { children: i }, null, null, null) : void (-694 + -1 * -3642 + -2 * 1474) === i.constructor && i.__b > -2 * -1301 + 3850 + -6452 ? Rn(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) != null ? (i.__ = t, i.__b = t.__b + (214 * 23 + -5606 + -685 * -1), s = Ug(i, e, a = n + l, C), i.__i = s, r = null, -(-1 * 1067 + -1 * 3167 + -1 * -4235) !== s && (C--, (r = e[s]) && (r.__u |= -3697 * -41 + 103987 + -1 * 124492)), r == null || r.__v === null ? (-(1 * -1847 + 3098 + -1250) == s && l--, typeof i.type != "function" && (i.__u |= -20105 * 1 + -1 * -61154 + 24487)) : s !== a && (s === a + (-1225 * -5 + 3684 + -9808) ? l++ : s > a ? C > g - a ? l += s - a : l-- : l = s < a && s == a - (-46 * 107 + 5957 + -1034) ? s - a : 253 * 5 + -9621 + 8356, s !== n + l && (i.__u |= 65536))) : (r = e[n]) && r.key == null && r.__e && (r.__e == t.__d && (t.__d = sn(r)), Wo(r, r, !(4 * -1727 + 6671 + 238)), e[n] = null, C--);
  if (C)
    for (n = -5 * -44 + 8707 + -8927; n < I; n++)
      (r = e[n]) != null && 108 + 111 * -55 + -1999 * -3 == (-66614 + 22 * 3610 + -23 * -5142 & r.__u) && (r.__e == t.__d && (t.__d = sn(r)), Wo(r, r));
}
function N0(t, o, e) {
  var n, i;
  if (typeof t.type == "function") {
    for (n = t.__k, i = -1 * -8933 + 7517 + -16450; n && i < n.length; i++)
      n[i] && (n[i].__ = t, o = N0(n[i], o, e));
    return o;
  }
  return t.__e != o && (e.insertBefore(t.__e, o || null), o = t.__e), o && o.nextSibling;
}
function Ct(t, o) {
  return o = o || [], t == null || typeof t == "boolean" || (Xi(t) ? t.some(function(e) {
    Ct(e, o);
  }) : o.push(t)), o;
}
function Ug(t, o, e, n) {
  var i = t.key, r = t.type, a = e - (-5881 * 1 + 171 * -29 + -37 * -293), s = e + (-127 * -71 + 124 * 22 + -11744), g = o[e];
  if (g === null || g && i == g.key && r === g.type)
    return e;
  if (n > (g != null && 2 * 1182 + 7114 + -9478 == (40165 + -59 * -2458 + -54115 * 1 & g.__u) ? 1 * -2663 + -4255 + 11 * 629 : 5449 * -1 + 3349 * 1 + 1 * 2100))
    for (; a >= -1597 * 1 + -1287 + 2884 || s < o.length; ) {
      if (a >= -1 * 7828 + -3582 * 1 + 11410) {
        if ((g = o[a]) && !(4 * 22276 + 203111 + 9479 * -17 & g.__u) && i == g.key && r === g.type)
          return a;
        a--;
      }
      if (s < o.length) {
        if ((g = o[s]) && 1 * -9221 + -7 * -719 + 4188 == (28607 * 8 + -34173 + 63611 * -1 & g.__u) && i == g.key && r === g.type)
          return s;
        s++;
      }
    }
  return -(4243 + 46 * 162 + -1 * 11694);
}
function pa(t, o, e) {
  o[1 * -3158 + 5213 + 137 * -15] === "-" ? t.setProperty(o, e ?? "") : t[o] = e == null ? "" : typeof e != "number" || Xg.test(o) ? e : e + "px";
}
function ai(t, o, e, n, i) {
  var r;
  e:
    if (o === "style")
      if (typeof e == "string")
        t.style.cssText = e;
      else {
        if (typeof n == "string" && (t.style.cssText = n = ""), n)
          for (o in n)
            e && o in e || pa(t.style, o, "");
        if (e)
          for (o in e)
            n && e[o] === n[o] || pa(t.style, o, e[o]);
      }
    else if (o[5427 + -7 * -117 + -6246] === "o" && o[-2 * 4577 + -912 + 10067] === "n")
      r = o !== (o = o.replace(/(PointerCapture)$|Capture$/, "$1")), o = o.toLowerCase() in t ? o.toLowerCase().slice(-34 * -13 + 7932 + -8372) : o.slice(5717 + -3 * 3299 + 34 * 123), t.l || (t.l = {}), t.l[o + r] = e, e ? n ? e.u = n.u : (e.u = Date.now(), t.addEventListener(o, r ? ba : ma, r)) : t.removeEventListener(o, r ? ba : ma, r);
    else {
      if (i)
        o = o.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (o !== "width" && o !== "height" && o !== "href" && o !== "list" && o !== "form" && o !== "tabIndex" && o !== "download" && o !== "rowSpan" && o !== "colSpan" && o !== "role" && o in t)
        try {
          t[o] = e ?? "";
          break e;
        } catch {
        }
      typeof e == "function" || (e == null || !(9103 + -222 * 41) === e && o[6653 + 2 * 468 + -7585] !== "-" ? t.removeAttribute(o) : t.setAttribute(o, e));
    }
}
function ma(t) {
  var o = this.l[t.type + !1];
  if (t.t) {
    if (t.t <= o.u)
      return;
  } else
    t.t = Date.now();
  return o(H.event ? H.event(t) : t);
}
function ba(t) {
  return this.l[t.type + !0](H.event ? H.event(t) : t);
}
function Ar(t, o, e, n, i, r, a, s, g, I) {
  var C, l, h, A, y, k, B, v, R, S, M, L, X, K, ee, $ = o.type;
  if (void (-5 * -761 + 1387 * -1 + -3 * 806) !== o.constructor)
    return null;
  5389 + -286 * 12 + 59 * -31 & e.__u && (g = !!(27 * 155 + -3953 + -10 * 20 & e.__u), r = [s = o.__e = e.__e]), (C = H.__b) && C(o);
  e:
    if (typeof $ == "function")
      try {
        if (v = o.props, R = (C = $.contextType) && n[C.__c], S = C ? R ? R.props.value : C.__ : n, e.__c ? B = (l = o.__c = e.__c).__ = l.__E : ("prototype" in $ && $.prototype.render ? o.__c = l = new $(v, S) : (o.__c = l = new Le(v, S), l.constructor = $, l.render = Qg), R && R.sub(l), l.props = v, l.state || (l.state = {}), l.context = S, l.__n = n, h = l.__d = !(-1 * -8201 + 163 * 13 + -10320), l.__h = [], l._sb = []), l.__s == null && (l.__s = l.state), $.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = lt({}, l.__s)), lt(l.__s, $.getDerivedStateFromProps(v, l.__s))), A = l.props, y = l.state, l.__v = o, h)
          $.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if ($.getDerivedStateFromProps == null && v !== A && l.componentWillReceiveProps != null && l.componentWillReceiveProps(v, S), !l.__e && (l.shouldComponentUpdate != null && !(7817 * 1 + -1311 * -6 + -7841 * 2) === l.shouldComponentUpdate(v, l.__s, S) || o.__v === e.__v)) {
            for (o.__v !== e.__v && (l.props = v, l.state = l.__s, l.__d = !(2632 + 75 * 81 + -8706)), o.__e = e.__e, o.__k = e.__k, o.__k.forEach(function(oe) {
              oe && (oe.__ = o);
            }), M = 1 * 1577 + 38 * -139 + 65 * 57; M < l._sb.length; M++)
              l.__h.push(l._sb[M]);
            l._sb = [], l.__h.length && a.push(l);
            break e;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(v, l.__s, S), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(A, y, k);
          });
        }
        if (l.context = S, l.props = v, l.__P = t, l.__e = !(-7747 + -11 * -178 + 5790), L = H.__r, X = -608 + 6734 * -1 + -2 * -3671, "prototype" in $ && $.prototype.render) {
          for (l.state = l.__s, l.__d = !(-702 + 37 * 19), L && L(o), C = l.render(l.props, l.state, l.context), K = 0; K < l._sb.length; K++)
            l.__h.push(l._sb[K]);
          l._sb = [];
        } else
          do
            l.__d = !(5154 + 733 * 8 + -11017), L && L(o), C = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++X < 3 * 2116 + -1932 + -1 * 4391);
        l.state = l.__s, l.getChildContext != null && (n = lt(lt({}, n), l.getChildContext())), h || l.getSnapshotBeforeUpdate == null || (k = l.getSnapshotBeforeUpdate(A, y)), P0(t, Xi(ee = C != null && C.type === Me && C.key == null ? C.props.children : C) ? ee : [ee], o, e, n, i, r, a, s, g, I), l.base = o.__e, o.__u &= -(-3469 + -2 * 3831 + 11292), l.__h.length && a.push(l), B && (l.__E = l.__ = null);
      } catch (oe) {
        o.__v = null, g || r != null ? (o.__e = s, o.__u |= g ? -4591 + -270 * 23 + 113 * 97 : -5565 + 1203 * -7 + 326 * 43, r[r.indexOf(s)] = null) : (o.__e = e.__e, o.__k = e.__k), H.__e(oe, o, e);
      }
    else
      r == null && o.__v === e.__v ? (o.__k = e.__k, o.__e = e.__e) : o.__e = Jg(e.__e, o, e, n, i, r, a, g, I);
  (C = H.diffed) && C(o);
}
function L0(t, o, e) {
  o.__d = void (2 * -1337 + 4149 + -1475);
  for (var n = 2 * 2567 + -3617 * -1 + -8751; n < e.length; n++)
    hr(e[n], e[++n], e[++n]);
  H.__c && H.__c(o, t), t.some(function(i) {
    try {
      t = i.__h, i.__h = [], t.some(function(r) {
        r.call(i);
      });
    } catch (r) {
      H.__e(r, i.__v);
    }
  });
}
function Jg(t, o, e, n, i, r, a, s, g) {
  var I, C, l, h, A, y, k, B = e.props, v = o.props, R = o.type;
  if (R === "svg" && (i = !0), r != null) {
    for (I = 6417 + 3027 * 2 + -1 * 12471; I < r.length; I++)
      if ((A = r[I]) && "setAttribute" in A == !!R && (R ? A.localName === R : 2687 * 1 + 1819 + -4503 === A.nodeType)) {
        t = A, r[I] = null;
        break;
      }
  }
  if (t == null) {
    if (R === null)
      return document.createTextNode(v);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", R) : document.createElement(R, v.is && v), r = null, s = !(-9154 + -131 * -1 + 3 * 3008);
  }
  if (R === null)
    B === v || s && t.data === v || (t.data = v);
  else {
    if (r = r && Xn.call(t.childNodes), B = e.props || Tn, !s && r != null)
      for (B = {}, I = 0; I < t.attributes.length; I++)
        B[(A = t.attributes[I]).name] = A.value;
    for (I in B)
      A = B[I], I == "children" || (I == "dangerouslySetInnerHTML" ? l = A : I === "key" || I in v || ai(t, I, null, A, i));
    for (I in v)
      A = v[I], I == "children" ? h = A : I == "dangerouslySetInnerHTML" ? C = A : I == "value" ? y = A : I == "checked" ? k = A : I === "key" || s && typeof A != "function" || B[I] === A || ai(t, I, A, B[I], i);
    if (C)
      s || l && (C.__html === l.__html || C.__html === t.innerHTML) || (t.innerHTML = C.__html), o.__k = [];
    else if (l && (t.innerHTML = ""), P0(t, Xi(h) ? h : [h], o, e, n, i && R !== "foreignObject", r, a, r ? r[3 * 1361 + 884 + -4967] : e.__k && sn(e, -3443 + 221 * -12 + -53 * -115), s, g), r != null)
      for (I = r.length; I--; )
        r[I] != null && V0(r[I]);
    s || (I = "value", void (2 * -565 + -9776 + 10906) !== y && (y !== t[I] || R === "progress" && !y || R === "option" && y !== B[I]) && ai(t, I, y, B[I], !(-5 * 934 + -7515 + 12186)), I = "checked", void (741 + 1502 * -1 + 761) !== k && k !== t[I] && ai(t, I, k, B[I], !(-1 * -464 + -6 * 1451 + 8243)));
  }
  return t;
}
function hr(t, o, e) {
  try {
    typeof t == "function" ? t(o) : t.current = o;
  } catch (n) {
    H.__e(n, e);
  }
}
function Wo(t, o, e) {
  var n, i;
  if (H.unmount && H.unmount(t), (n = t.ref) && (n.current && n.current !== t.__e || hr(n, null, o)), (n = t.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (r) {
        H.__e(r, o);
      }
    n.base = n.__P = null, t.__c = void 0;
  }
  if (n = t.__k)
    for (i = 0; i < n.length; i++)
      n[i] && Wo(n[i], o, e || typeof t.type != "function");
  e || t.__e == null || V0(t.__e), t.__ = t.__e = t.__d = void (9110 + -16 * 597 + 442);
}
function Qg(t, o, e) {
  return this.constructor(t, e);
}
function Bt(t, o, e) {
  var n, i, r, a;
  H.__ && H.__(t, o), i = (n = typeof e == "function") ? null : e && e.__k || o.__k, r = [], a = [], Ar(o, t = (!n && e || o).__k = ve(Me, null, [t]), i || Tn, Tn, void (2 * -1792 + 1710 + 1874) !== o.ownerSVGElement, !n && e ? [e] : i ? null : o.firstChild ? Xn.call(o.childNodes) : null, r, !n && e ? e : i ? i.__e : o.firstChild, n, a), L0(r, t, a);
}
function pr(t, o) {
  Bt(t, o, pr);
}
function mr(t, o, e) {
  var n, i, r, a, s = lt({}, t.props);
  for (r in t.type && t.type.defaultProps && (a = t.type.defaultProps), o)
    r == "key" ? n = o[r] : r == "ref" ? i = o[r] : s[r] = void (-1730 + 171 * 7 + 533) === o[r] && void (5602 + -1 * -9578 + -15180) !== a ? a[r] : o[r];
  return arguments.length > -4650 + -3284 * -2 + -1916 * 1 && (s.children = arguments.length > 2 * 823 + 8303 + -9946 ? Xn.call(arguments, 289 + 1 * -1364 + 3 * 359) : e), Rn(t.type, s, n || t.key, i || t.ref, null);
}
function br(t, o) {
  var e = { __c: o = "__cC" + R0++, __: t, Consumer: function(n, i) {
    return n.children(i);
  }, Provider: function(n) {
    var i, r;
    return this.getChildContext || (i = [], (r = {})[o] = this, this.getChildContext = function() {
      return r;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && i.some(function(s) {
        s.__e = !0, Ro(s);
      });
    }, this.sub = function(a) {
      i.push(a);
      var s = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        i.splice(i.indexOf(a), 1), s && s.call(a);
      };
    }), n.children;
  } };
  return e.Provider.__ = e.Consumer.contextType = e;
}
Xn = W0.slice, H = { __e: function(t, o, e, n) {
  for (var i, r, a; o = o.__; )
    if ((i = o.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, n || {}), a = i.__d), a)
          return i.__E = i;
      } catch (s) {
        t = s;
      }
  throw t;
} }, K0 = 1 * -51 + -9880 + 9931, H0 = function(t) {
  return t != null && t.constructor == null;
}, Le.prototype.setState = function(t, o) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = lt({}, this.state), typeof t == "function" && (t = t(lt({}, e), this.props)), t && lt(e, t), t != null && this.__v && (o && this._sb.push(o), Ro(this));
}, Le.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !(-3312 + 929 * -6 + 3 * 2962), t && this.__h.push(t), Ro(this));
}, Le.prototype.render = Me, Ht = [], O0 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Oo = function(t, o) {
  return t.__v.__b - o.__v.__b;
}, Ki.__r = 1122 + -672 * -9 + -7170, R0 = 8102 + -1 * 8102;
function yr() {
  return (yr = Object.assign ? Object.assign.bind() : function(t) {
    for (var o = 17 * 219 + -6462 + 2740; o < arguments.length; o++) {
      var e = arguments[o];
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }
    return t;
  }).apply(this, arguments);
}
var zg = ["context", "children"];
function _g(t) {
  this.getChildContext = function() {
    return t.context;
  };
  var o = t.children, e = function(n, i) {
    if (n == null)
      return {};
    var r, a, s = {}, g = Object.keys(n);
    for (a = -7719 + 3 * 2221 + 1056; a < g.length; a++)
      i.indexOf(r = g[a]) >= 1 * 6599 + -1 * 583 + -8 * 752 || (s[r] = n[r]);
    return s;
  }(t, zg);
  return mr(o, e);
}
function $g() {
  var t = {};
  t.detail = {}, t.bubbles = !(-7769 * 1 + -8691 * -1 + -922), t.cancelable = !0;
  var o = new CustomEvent("_preact", t);
  this.dispatchEvent(o), this._vdom = ve(_g, yr({}, this._props, { context: o.detail.context }), function e(n, i) {
    if (-563 * -13 + 8522 * 1 + -15838 === n.nodeType)
      return n.data;
    if (6654 + -4 * -1934 + 14389 * -1 !== n.nodeType)
      return null;
    var r = [], a = {}, s = -7 * -284 + 2529 + 4517 * -1, g = n.attributes, I = n.childNodes;
    for (s = g.length; s--; )
      g[s].name !== "slot" && (a[g[s].name] = g[s].value, a[T0(g[s].name)] = g[s].value);
    for (s = I.length; s--; ) {
      var C = e(I[s], null), l = I[s].slot;
      l ? a[l] = ve(ya, { name: l }, C) : r[s] = C;
    }
    var h = i ? ve(ya, null, r) : r;
    return ve(i || n.nodeName.toLowerCase(), a, h);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? pr : Bt)(this._vdom, this._root);
}
function T0(t) {
  return t.replace(/-(\w)/g, function(o, e) {
    return e ? e.toUpperCase() : "";
  });
}
function qg(t, o, e) {
  if (this._vdom) {
    var n = {};
    n[t] = e = e ?? void (-3770 + 1 * 1187 + 2583), n[T0(t)] = e, this._vdom = mr(this._vdom, n), Bt(this._vdom, this._root);
  }
}
function ec() {
  Bt(this._vdom = null, this._root);
}
function ya(t, o) {
  var e = this;
  return ve("slot", yr({}, t, { ref: function(n) {
    n ? (e.ref = n, e._listener || (e._listener = function(i) {
      i.stopPropagation(), i.detail.context = o;
    }, n.addEventListener("_preact", e._listener))) : e.ref.removeEventListener("_preact", e._listener);
  } }));
}
function tc(t, o, e, n) {
  function i() {
    var r = Reflect.construct(HTMLElement, [], i);
    return r._vdomComponent = t, r._root = n && n.shadow ? r.attachShadow({ mode: n.mode || "open" }) : r, r;
  }
  return (i.prototype = Object.create(HTMLElement.prototype)).constructor = i, i.prototype.connectedCallback = $g, i.prototype.attributeChangedCallback = qg, i.prototype.disconnectedCallback = ec, e = e || t.observedAttributes || Object.keys(t.propTypes || {}), i.observedAttributes = e, e.forEach(function(r) {
    Object.defineProperty(i.prototype, r, { get: function() {
      return this._vdom.props[r];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(r, null, a) : (this._props || (this._props = {}), this._props[r] = a, this.connectedCallback());
      var s = typeof a;
      a != null && s !== "string" && s !== "boolean" && s !== "number" || this.setAttribute(r, a);
    } });
  }), customElements.define(o || t.tagName || t.displayName || t.name, i);
}
var Ke = function() {
  return Ke = Object.assign || function(o) {
    for (var e, n = 1, i = arguments.length; n < i; n++) {
      e = arguments[n];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (o[r] = e[r]);
    }
    return o;
  }, Ke.apply(this, arguments);
};
function gn(t, o, e) {
  if (e || arguments.length === 2)
    for (var n = 0, i = o.length, r; n < i; n++)
      (r || !(n in o)) && (r || (r = Array.prototype.slice.call(o, 0, n)), r[n] = o[n]);
  return t.concat(r || Array.prototype.slice.call(o));
}
function nc(t) {
  var o = Object.create(null);
  return function(e) {
    return o[e] === void 0 && (o[e] = t(e)), o[e];
  };
}
var ic = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, oc = nc(function(t) {
  return ic.test(t) || t.charCodeAt(0) === -1 * 3292 + 7803 + -4400 && t.charCodeAt(1) === -1 * -2402 + -3 * 2729 + -1179 * -5 && t.charCodeAt(1 * 6373 + 298 + -513 * 13) < -6293 + -38 * -168;
}), St, ie, po, wa, cn = 14954 + -1 * 14954, Y0 = [], Ci = [], va = H.__b, Ba = H.__r, Sa = H.diffed, Ga = H.__c, Za = H.unmount;
function fn(t, o) {
  H.__h && H.__h(ie, t, cn || o), cn = 0;
  var e = {};
  e.__ = [], e.__h = [];
  var n = ie.__H || (ie.__H = e), i = {};
  return i.__V = Ci, t >= n.__.length && n.__.push(i), n.__[t];
}
function He(t) {
  return cn = 5 * 1495 + -1559 * 3 + 2797 * -1, D0(F0, t);
}
function D0(t, o, e) {
  var n = fn(St++, 2);
  if (n.t = t, !n.__c && (n.__ = [e ? e(o) : F0(void 0, o), function(s) {
    var g = n.__N ? n.__N[0] : n.__[0], I = n.t(g, s);
    g !== I && (n.__N = [I, n.__[-5981 + 727 * -9 + 1 * 12525]], n.__c.setState({}));
  }], n.__c = ie, !ie.u)) {
    var i = function(s, g, I) {
      if (!n.__c.__H)
        return !0;
      var C = n.__c.__H.__.filter(function(h) {
        return h.__c;
      });
      if (C.every(function(h) {
        return !h.__N;
      }))
        return !r || r.call(this, s, g, I);
      var l = !(8682 + -107 * 27 + -1 * 5792);
      return C.forEach(function(h) {
        if (h.__N) {
          var A = h.__[0];
          h.__ = h.__N, h.__N = void 0, A !== h.__[0] && (l = !0);
        }
      }), !(!l && n.__c.props === s) && (!r || r.call(this, s, g, I));
    };
    ie.u = !(6215 + -5 * 1243);
    var r = ie.shouldComponentUpdate, a = ie.componentWillUpdate;
    ie.componentWillUpdate = function(s, g, I) {
      if (this.__e) {
        var C = r;
        r = void (-1564 + -17 * -92), i(s, g, I), r = C;
      }
      a && a.call(this, s, g, I);
    }, ie.shouldComponentUpdate = i;
  }
  return n.__N || n.__;
}
function Ce(t, o) {
  var e = fn(St++, 3);
  !H.__s && wr(e.__H, o) && (e.__ = t, e.i = o, ie.__H.__h.push(e));
}
function jn(t, o) {
  var e = fn(St++, 4);
  !H.__s && wr(e.__H, o) && (e.__ = t, e.i = o, ie.__h.push(e));
}
function ot(t) {
  return cn = -146 * 37 + -7650 + 11 * 1187, tt(function() {
    var o = {};
    return o.current = t, o;
  }, []);
}
function rc(t, o, e) {
  cn = -4869 + -841 * 2 + -83 * -79, jn(function() {
    return typeof t == "function" ? (t(o()), function() {
      return t(null);
    }) : t ? (t.current = o(), function() {
      return t.current = null;
    }) : void (7767 + -1 * -5 + -7772);
  }, e == null ? e : e.concat(t));
}
function tt(t, o) {
  var e = fn(St++, 7);
  return wr(e.__H, o) ? (e.__V = t(), e.i = o, e.__h = t, e.__V) : e.__;
}
function Hi(t, o) {
  return cn = 1 * -1273 + -1091 * 7 + -91 * -98, tt(function() {
    return t;
  }, o);
}
function ji(t) {
  var o = ie.context[t.__c], e = fn(St++, 1140 * -1 + -5549 + 34 * 197);
  return e.c = t, o ? (e.__ == null && (e.__ = !(169 * 53 + -1 * 6051 + -2906), o.sub(ie)), o.props.value) : t.__;
}
function Vo(t, o) {
  H.useDebugValue && H.useDebugValue(o ? o(t) : t);
}
function ac() {
  var t = fn(St++, 11);
  if (!t.__) {
    for (var o = ie.__v; o !== null && !o.__m && o.__ !== null; )
      o = o.__;
    var e = o.__m || (o.__m = [7081 + -8539 * -1 + -15620, 9613 + -5 * -1065 + -14938]);
    t.__ = "P" + e[4075 + -163 * 25] + "-" + e[-9277 + -2725 * 1 + -4001 * -3]++;
  }
  return t.__;
}
function sc() {
  for (var t; t = Y0.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(di), t.__H.__h.forEach(Eo), t.__H.__h = [];
      } catch (o) {
        t.__H.__h = [], H.__e(o, t.__v);
      }
}
H.__b = function(t) {
  ie = null, va && va(t);
}, H.__r = function(t) {
  Ba && Ba(t), St = 0;
  var o = (ie = t.__c).__H;
  o && (po === ie ? (o.__h = [], ie.__h = [], o.__.forEach(function(e) {
    e.__N && (e.__ = e.__N), e.__V = Ci, e.__N = e.i = void (1 * 1194 + -9998 + -124 * -71);
  })) : (o.__h.forEach(di), o.__h.forEach(Eo), o.__h = [], St = 0)), po = ie;
}, H.diffed = function(t) {
  Sa && Sa(t);
  var o = t.__c;
  o && o.__H && (o.__H.__h.length && (7427 * -1 + -69 * -127 + -1335 !== Y0.push(o) && wa === H.requestAnimationFrame || ((wa = H.requestAnimationFrame) || gc)(sc)), o.__H.__.forEach(function(e) {
    e.i && (e.__H = e.i), e.__V !== Ci && (e.__ = e.__V), e.i = void (1 * 2413 + 8682 * 1 + -11095), e.__V = Ci;
  })), po = ie = null;
}, H.__c = function(t, o) {
  o.some(function(e) {
    try {
      e.__h.forEach(di), e.__h = e.__h.filter(function(n) {
        return !n.__ || Eo(n);
      });
    } catch (n) {
      o.some(function(i) {
        i.__h && (i.__h = []);
      }), o = [], H.__e(n, e.__v);
    }
  }), Ga && Ga(t, o);
}, H.unmount = function(t) {
  Za && Za(t);
  var o, e = t.__c;
  e && e.__H && (e.__H.__.forEach(function(n) {
    try {
      di(n);
    } catch (i) {
      o = i;
    }
  }), e.__H = void (-8799 + -7 * -1257), o && H.__e(o, e.__v));
};
var ka = typeof requestAnimationFrame == "function";
function gc(t) {
  var o, e = function() {
    clearTimeout(n), ka && cancelAnimationFrame(o), setTimeout(t);
  }, n = setTimeout(e, 100);
  ka && (o = requestAnimationFrame(e));
}
function di(t) {
  var o = ie, e = t.__c;
  typeof e == "function" && (t.__c = void (1 * 8651 + 2803 + 3818 * -3), e()), ie = o;
}
function Eo(t) {
  var o = ie;
  t.__c = t.__(), ie = o;
}
function wr(t, o) {
  return !t || t.length !== o.length || o.some(function(e, n) {
    return e !== t[n];
  });
}
function F0(t, o) {
  return typeof o == "function" ? o(t) : o;
}
function X0(t, o) {
  for (var e in o)
    t[e] = o[e];
  return t;
}
function Po(t, o) {
  for (var e in t)
    if (e !== "__source" && !(e in o))
      return !0;
  for (var n in o)
    if (n !== "__source" && t[n] !== o[n])
      return !(-1715 + 3970 * 1 + -2255);
  return !(64 * 17 + 2331 + -2 * 1709);
}
function No(t) {
  this.props = t;
}
function cc(t, o) {
  function e(i) {
    var r = this.props.ref, a = r == i.ref;
    return !a && r && (r.call ? r(null) : r.current = null), o ? !o(this.props, i) || !a : Po(this.props, i);
  }
  function n(i) {
    return this.shouldComponentUpdate = e, ve(t, i);
  }
  return n.displayName = "Memo(" + (t.displayName || t.name) + ")", n.prototype.isReactComponent = !(-1503 * 4 + -13 * -668 + -2672), n.__f = !(8457 + 1 * -7435 + -7 * 146), n;
}
(No.prototype = new Le()).isPureReactComponent = !(6539 + -1 * 2734 + 761 * -5), No.prototype.shouldComponentUpdate = function(t, o) {
  return Po(this.props, t) || Po(this.state, o);
};
var Ka = H.__b;
H.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), Ka && Ka(t);
};
var xc = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 5485 + 195 * -3 + 23 * -43;
function j0(t) {
  function o(e) {
    var n = X0({}, e);
    return delete n.ref, t(n, e.ref || null);
  }
  return o.$$typeof = xc, o.render = o, o.prototype.isReactComponent = o.__f = !0, o.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", o;
}
var Ha = function(t, o) {
  return t == null ? null : Ct(Ct(t).map(o));
}, Ic = { map: Ha, forEach: Ha, count: function(t) {
  return t ? Ct(t).length : 1 * 8873 + 8930 + -17803;
}, only: function(t) {
  var o = Ct(t);
  if (57 * -110 + 8010 + -1739 * 1 !== o.length)
    throw "Children.only";
  return o[-1 * 1032 + -6690 + 7722];
}, toArray: Ct }, lc = H.__e;
H.__e = function(t, o, e, n) {
  if (t.then) {
    for (var i, r = o; r = r.__; )
      if ((i = r.__c) && i.__c)
        return o.__e == null && (o.__e = e.__e, o.__k = e.__k), i.__c(t, o);
  }
  lc(t, o, e, n);
};
var Oa = H.unmount;
function M0(t, o, e) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), t.__c.__H = null), (t = X0({}, t)).__c != null && (t.__c.__P === e && (t.__c.__P = o), t.__c = null), t.__k = t.__k && t.__k.map(function(n) {
    return M0(n, o, e);
  })), t;
}
function U0(t, o, e) {
  return t && e && (t.__v = null, t.__k = t.__k && t.__k.map(function(n) {
    return U0(n, o, e);
  }), t.__c && t.__c.__P === o && (t.__e && e.appendChild(t.__e), t.__c.__e = !(-8145 + -1250 * 5 + 14395), t.__c.__P = e)), t;
}
function fi() {
  this.__u = 0, this.t = null, this.__b = null;
}
function J0(t) {
  var o = t.__.__c;
  return o && o.__a && o.__a(t);
}
function uc(t) {
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
    return ve(e, r);
  }
  return i.displayName = "Lazy", i.__f = !0, i;
}
function Sn() {
  this.u = null, this.o = null;
}
H.unmount = function(t) {
  var o = t.__c;
  o && o.__R && o.__R(), o && -1 * -2617 + 4071 + -6656 & t.__u && (t.type = null), Oa && Oa(t);
}, (fi.prototype = new Le()).__c = function(t, o) {
  var e = o.__c, n = this;
  n.t == null && (n.t = []), n.t.push(e);
  var i = J0(n.__v), r = !(2 * 3323 + -1 * -463 + -7108), a = function() {
    r || (r = !(-10 * -597 + 3925 + -1 * 9895), e.__R = null, i ? i(s) : s());
  };
  e.__R = a;
  var s = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var g = n.state.__a;
        n.__v.__k[385 * 2 + -1 * -5281 + -6051] = U0(g, g.__c.__P, g.__c.__O);
      }
      var I;
      for (n.setState({ __a: n.__b = null }); I = n.t.pop(); )
        I.forceUpdate();
    }
  };
  n.__u++ || 21 * 443 + 64 * 38 + -83 * 141 & o.__u || n.setState({ __a: n.__b = n.__v.__k[0] }), t.then(a, a);
}, fi.prototype.componentWillUnmount = function() {
  this.t = [];
}, fi.prototype.render = function(t, o) {
  if (this.__b) {
    if (this.__v.__k) {
      var e = document.createElement("div"), n = this.__v.__k[-458 * 7 + -10 * -306 + 146].__c;
      this.__v.__k[0] = M0(this.__b, e, n.__O = n.__P);
    }
    this.__b = null;
  }
  var i = o.__a && ve(Me, null, t.fallback);
  return i && (i.__u &= -(7166 * -1 + -6576 + -551 * -25)), [ve(Me, null, o.__a ? null : t.children), i];
};
var Ra = function(t, o, e) {
  if (++e[1967 + -2 * 983] === e[0] && t.o.delete(o), t.props.revealOrder && (t.props.revealOrder[-1 * -153 + -8105 * 1 + -3976 * -2] !== "t" || !t.o.size))
    for (e = t.u; e; ) {
      for (; e.length > -3320 * -2 + -1 * 5679 + -958; )
        e.pop()();
      if (e[-3 * -3309 + 302 + 2557 * -4] < e[5973 + -15 * 548 + 2247])
        break;
      t.u = e = e[-7750 + -323 * -24];
    }
};
function Cc(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function dc(t) {
  var o = this, e = t.i;
  o.componentWillUnmount = function() {
    Bt(null, o.l), o.l = null, o.i = null;
  }, o.i && o.i !== e && o.componentWillUnmount(), o.l || (o.i = e, o.l = { nodeType: 1, parentNode: e, childNodes: [], appendChild: function(n) {
    this.childNodes.push(n), o.i.appendChild(n);
  }, insertBefore: function(n, i) {
    this.childNodes.push(n), o.i.appendChild(n);
  }, removeChild: function(n) {
    this.childNodes.splice(this.childNodes.indexOf(n) >>> 1799 * 2 + 5741 + 322 * -29, 1), o.i.removeChild(n);
  } }), Bt(ve(Cc, { context: o.context }, t.__v), o.l);
}
function fc(t, o) {
  var e = {};
  e.__v = t, e.i = o;
  var n = ve(dc, e);
  return n.containerInfo = o, n;
}
(Sn.prototype = new Le()).__a = function(t) {
  var o = this, e = J0(o.__v), n = o.o.get(t);
  return n[-239 * 2 + -191 * -31 + -5443]++, function(i) {
    var r = function() {
      o.props.revealOrder ? (n.push(i), Ra(o, t, n)) : i();
    };
    e ? e(r) : r();
  };
}, Sn.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var o = Ct(t.children);
  t.revealOrder && t.revealOrder[-349 * -7 + 1799 + -4242] === "b" && o.reverse();
  for (var e = o.length; e--; )
    this.o.set(o[e], this.u = [-3 * -1713 + 5444 * 1 + -10582, 0, this.u]);
  return t.children;
}, Sn.prototype.componentDidUpdate = Sn.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(o, e) {
    Ra(t, e, o);
  });
};
var Q0 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 2 * -52799 + 50030 + 115671, Ac = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, hc = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, pc = /[A-Z0-9]/g, mc = typeof document < "u", bc = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
};
function yc(t, o, e) {
  return o.__k == null && (o.textContent = ""), Bt(t, o), typeof e == "function" && e(), t ? t.__c : null;
}
function wc(t, o, e) {
  return pr(t, o), typeof e == "function" && e(), t ? t.__c : null;
}
Le.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(Le.prototype, t, { configurable: !(-9103 * 1 + 3642 + 5461), get: function() {
    return this["UNSAFE_" + t];
  }, set: function(o) {
    var e = {};
    e.configurable = !(16 * -23 + 604 + 236 * -1), e.writable = !(1 * 727 + -2277 + 155 * 10), e.value = o, Object.defineProperty(this, t, e);
  } });
});
var Wa = H.event;
function vc() {
}
function Bc() {
  return this.cancelBubble;
}
function Sc() {
  return this.defaultPrevented;
}
H.event = function(t) {
  return Wa && (t = Wa(t)), t.persist = vc, t.isPropagationStopped = Bc, t.isDefaultPrevented = Sc, t.nativeEvent = t;
};
var Ai = {};
Ai.enumerable = !(-5 * 973 + 8697 + -3831), Ai.configurable = !(6871 * -1 + 1 * -4442 + 11313), Ai.get = function() {
  return this.class;
};
var vr, Gc = Ai, Va = H.vnode;
H.vnode = function(t) {
  typeof t.type == "string" && function(o) {
    var e = o.props, n = o.type, i = {};
    for (var r in e) {
      var a = e[r];
      if (!(r === "value" && "defaultValue" in e && a == null || mc && r === "children" && n === "noscript" || r === "class" || r === "className")) {
        var s = r.toLowerCase();
        r === "defaultValue" && "value" in e && e.value == null ? r = "value" : r === "download" && !(-1759 + 13 * -732 + 11275) === a ? a = "" : s === "ondoubleclick" ? r = "ondblclick" : s !== "onchange" || n !== "input" && n !== "textarea" || bc(e.type) ? s === "onfocus" ? r = "onfocusin" : s === "onblur" ? r = "onfocusout" : hc.test(r) ? r = s : -(-2397 + -1 * -3140 + 7 * -106) === n.indexOf("-") && Ac.test(r) ? r = r.replace(pc, "-$&").toLowerCase() : a === null && (a = void (-1925 * 2 + 2421 + 1429)) : s = r = "oninput", s === "oninput" && i[r = s] && (r = "oninputCapture"), i[r] = a;
      }
    }
    n == "select" && i.multiple && Array.isArray(i.value) && (i.value = Ct(e.children).forEach(function(g) {
      g.props.selected = -(-8458 * 1 + -2189 + 10648) != i.value.indexOf(g.props.value);
    })), n == "select" && i.defaultValue != null && (i.value = Ct(e.children).forEach(function(g) {
      g.props.selected = i.multiple ? -(-1 * -7643 + 2324 + -9966) != i.defaultValue.indexOf(g.props.value) : i.defaultValue == g.props.value;
    })), e.class && !e.className ? (i.class = e.class, Object.defineProperty(i, "className", Gc)) : (e.className && !e.class || e.class && e.className) && (i.class = i.className = e.className), o.props = i;
  }(t), t.$$typeof = Q0, Va && Va(t);
};
var Ea = H.__r;
H.__r = function(t) {
  Ea && Ea(t), vr = t.__c;
};
var Pa = H.diffed;
H.diffed = function(t) {
  Pa && Pa(t);
  var o = t.props, e = t.__e;
  e != null && t.type === "textarea" && "value" in o && o.value !== e.value && (e.value = o.value == null ? "" : o.value), vr = null;
};
var z0 = {};
z0.readContext = function(t) {
  return vr.__n[t.__c].props.value;
};
var _0 = {};
_0.current = z0;
var $0 = {};
$0.ReactCurrentDispatcher = _0;
var Zc = $0;
function kc(t) {
  return ve.bind(null, t);
}
function Mi(t) {
  return !!t && t.$$typeof === Q0;
}
function Kc(t) {
  return Mi(t) && t.type === Me;
}
function Hc(t) {
  return Mi(t) ? mr.apply(null, arguments) : t;
}
function Oc(t) {
  return !!t.__k && (Bt(null, t), !(5575 + -1481 * -6 + -14461));
}
function Rc(t) {
  return t && (t.base || -2264 * -4 + 6628 + -15683 * 1 === t.nodeType && t) || null;
}
var Wc = function(t, o) {
  return t(o);
}, Vc = function(t, o) {
  return t(o);
}, Ec = Me;
function q0(t) {
  t();
}
function Pc(t) {
  return t;
}
function Nc() {
  return [!(158 * -58 + 9854 + -689), q0];
}
var Lc = jn, Tc = Mi;
function Yc(t, o) {
  var e = o(), n = He({ h: { __: e, v: o } }), i = n[0].h, r = n[1 * 5681 + 2 * 2647 + -10974];
  return jn(function() {
    i.__ = e, i.v = o, mo(i) && r({ h: i });
  }, [t, e, o]), Ce(function() {
    return mo(i) && r({ h: i }), t(function() {
      mo(i) && r({ h: i });
    });
  }, [t]), e;
}
function mo(t) {
  var o, e, n = t.v, i = t.__;
  try {
    var r = n();
    return !((o = i) === (e = r) && (-2413 + -127 * -19 !== o || (118 * 27 + -6469 + 821 * 4) / o == (7771 + 409 * 6 + 3 * -3408) / e) || o != o && e != e);
  } catch {
    return !(-8307 * -1 + 307 * 28 + 1 * -16903);
  }
}
var Y = {};
Y.useState = He, Y.useId = ac, Y.useReducer = D0, Y.useEffect = Ce, Y.useLayoutEffect = jn, Y.useInsertionEffect = Lc, Y.useTransition = Nc, Y.useDeferredValue = Pc, Y.useSyncExternalStore = Yc, Y.startTransition = q0, Y.useRef = ot, Y.useImperativeHandle = rc, Y.useMemo = tt, Y.useCallback = Hi, Y.useContext = ji, Y.useDebugValue = Vo, Y.version = "17.0.2", Y.Children = Ic, Y.render = yc, Y.hydrate = wc, Y.unmountComponentAtNode = Oc, Y.createPortal = fc, Y.createElement = ve, Y.createContext = br, Y.createFactory = kc, Y.cloneElement = Hc, Y.createRef = jg, Y.Fragment = Me, Y.isValidElement = Mi, Y.isElement = Tc, Y.isFragment = Kc, Y.findDOMNode = Rc, Y.Component = Le, Y.PureComponent = No, Y.memo = cc, Y.forwardRef = j0, Y.flushSync = Vc, Y.unstable_batchedUpdates = Wc, Y.StrictMode = Ec, Y.Suspense = fi, Y.SuspenseList = Sn, Y.lazy = uc, Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zc;
var Nt = Y, Dc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Fc(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Xc(t) {
  return t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function jc(t) {
  return t && Object.prototype.hasOwnProperty.call(t, "default") && Object.keys(t).length === 1 ? t.default : t;
}
function Mc(t) {
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
const Uc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: Dc,
  getAugmentedNamespace: Mc,
  getDefaultExportFromCjs: Fc,
  getDefaultExportFromNamespaceIfNotNamed: jc,
  getDefaultExportFromNamespaceIfPresent: Xc
}, Symbol.toStringTag, { value: "Module" }));
var Jc = function(o, e, n, i) {
  var r = n ? n.call(i, o, e) : void 0;
  if (r !== void (1 * 1462 + 4363 * -1 + -1 * -2901))
    return !!r;
  if (o === e)
    return !0;
  if (typeof o != "object" || !o || typeof e != "object" || !e)
    return !1;
  var a = Object.keys(o), s = Object.keys(e);
  if (a.length !== s.length)
    return !1;
  for (var g = Object.prototype.hasOwnProperty.bind(e), I = -1 * -701 + 1505 + -2206; I < a.length; I++) {
    var C = a[I];
    if (!g(C))
      return !1;
    var l = o[C], h = e[C];
    if (r = n ? n.call(i, l, h, C) : void 0, r === !1 || r === void (-1611 * -1 + 9211 + 1546 * -7) && l !== h)
      return !1;
  }
  return !0;
};
const Qc = Uc.getDefaultExportFromCjs(Jc);
var te = "-ms-", Wn = "-moz-", _ = "-webkit-", es = "comm", Ui = "rule", Br = "decl", zc = "@import", ts = "@keyframes", _c = "@layer", $c = Math.abs, Sr = String.fromCharCode, Lo = Object.assign;
function qc(t, o) {
  return fe(t, -5080 * 1 + -2109 + 7189) ^ 6023 + -23 * 37 + 1709 * -3 ? (((o << -1 * -9046 + -2 * -571 + 1 * -10186 ^ fe(t, -41 * -71 + 76 * -122 + 6361 * 1)) << -13 * -415 + 1 * 9761 + -15154 ^ fe(t, 10 * -423 + 3696 + 107 * 5)) << -16826 + -28 * -601 ^ fe(t, 163 * 31 + -9227 * -1 + 2 * -7139)) << 17 * -524 + 8818 + -2 * -46 ^ fe(t, 8347 + -7 * 1192) : 3 * -3067 + 995 * 2 + 7211;
}
function ns(t) {
  return t.trim();
}
function xt(t, o) {
  return (t = o.exec(t)) ? t[-602 + -443 * 5 + 2817] : t;
}
function F(t, o, e) {
  return t.replace(o, e);
}
function hi(t, o) {
  return t.indexOf(o);
}
function fe(t, o) {
  return t.charCodeAt(o) | 4053 + -4053 * 1;
}
function xn(t, o, e) {
  return t.slice(o, e);
}
function qe(t) {
  return t.length;
}
function is(t) {
  return t.length;
}
function Gn(t, o) {
  return o.push(t), t;
}
function ex(t, o) {
  return t.map(o).join("");
}
function Na(t, o) {
  return t.filter(function(e) {
    return !xt(e, o);
  });
}
var Ji = 1571 * 2 + -2732 + -409, In = 1, os = -3585 * 1 + 3199 + 386, Ye = -6519 + -3 * -2173, xe = -2314 + -1 * -2314, An = "";
function Qi(t, o, e, n, i, r, a, s) {
  var g = {};
  return g.value = t, g.root = o, g.parent = e, g.type = n, g.props = i, g.children = r, g.line = Ji, g.column = In, g.length = a, g.return = "", g.siblings = s, g;
}
function pt(t, o) {
  return Lo(Qi("", null, null, "", null, null, -5948 + 928 * -5 + 10588, t.siblings), t, { length: -t.length }, o);
}
function _t(t) {
  for (; t.root; )
    t = pt(t.root, { children: [t] });
  Gn(t, t.siblings);
}
function tx() {
  return xe;
}
function nx() {
  return xe = Ye > 0 ? fe(An, --Ye) : 0, In--, xe === -6 * 487 + 6697 + -3765 && (In = 4873 + -7 * 696, Ji--), xe;
}
function je() {
  return xe = Ye < os ? fe(An, Ye++) : 0, In++, xe === 14316 + 1 * -14306 && (In = -563 * 17 + -2753 * -2 + 4066, Ji++), xe;
}
function Et() {
  return fe(An, Ye);
}
function pi() {
  return Ye;
}
function zi(t, o) {
  return xn(An, t, o);
}
function To(t) {
  switch (t) {
    case -4727 + -1 * -853 + -26 * -149:
    case 1 * -4119 + -476 + -1 * -4604:
    case 7674 * 1 + -4496 + -36 * 88:
    case 6051 + -463 * 1 + -25 * 223:
    case 4 * 52 + -1621 * 5 + 7929:
      return -8 * 1061 + -331 * -2 + 7831;
    case -2011 * -2 + 3178 * -2 + 2367:
    case 659 * -2 + -9023 + 10384:
    case -5 * 1984 + 7707 + 2257:
    case -85 * -113 + -181 * -2 + 320 * -31:
    case 6793 + 127 * -53:
    case -1 * 4722 + -552 * -15 + 1 * -3494:
    case -4 * 815 + 51 * -144 + 5365 * 2:
    case -15 * -162 + 2 * -2482 + 2593:
    case 7354 * -1 + 7547 * -1 + 15024 * 1:
    case -4 * -883 + -45 * -97 + -7772 * 1:
      return -2624 * -1 + -24 * 157 + -14 * -82;
    case -8 * -62 + -6162 + -18 * -318:
      return -3079 + -23 * -134;
    case -7792 + 43 * 182:
    case 1 * 4301 + 6052 + -10314:
    case -1 * 1508 + 26 * -1 + 1574:
    case 2322 + -3 * -1758 + -5 * 1501:
      return 934 * -4 + -6184 + 902 * 11;
    case 6927 + -1 * 8030 + 286 * 4:
    case 1 * 9713 + 47 * 143 + -16341:
      return 1623 + -103 * -4 + -2034;
  }
  return 3819 + 67 * -57;
}
function ix(t) {
  return Ji = In = 6311 + 1718 * -5 + 2280, os = qe(An = t), Ye = 2462 * 2 + 1 * 8327 + -13251 * 1, [];
}
function ox(t) {
  return An = "", t;
}
function bo(t) {
  return ns(zi(Ye - 1, Yo(t === -626 + 3 * 239 ? t + (-51 * 68 + -23 * 142 + 6736) : t === 7 * -8 + -2989 * -2 + -17 * 346 ? t + (7676 + 2157 * -1 + -5518) : t)));
}
function rx(t) {
  for (; (xe = Et()) && xe < 33; )
    je();
  return To(t) > 1 * 1139 + 8005 * -1 + -2 * -3434 || To(xe) > -1 * -9343 + 1 * 7079 + -16419 ? "" : " ";
}
function ax(t, o) {
  for (; --o && je() && !(xe < 4272 + -2 * -1543 + -7310 || xe > 751 * -5 + -3346 + 7203 || xe > -2 * 2111 + 3153 + 1126 && xe < 1709 + -1 * -5953 + 71 * -107 || xe > 83 * 113 + 2024 + -1619 * 7 && xe < 4985 + 3 * 2159 + -11365); )
    ;
  return zi(t, pi() + (o < 6 && Et() == 2167 * 1 + 3771 + 5906 * -1 && je() == 5479 * -1 + -4678 + -23 * -443));
}
function Yo(t) {
  for (; je(); )
    switch (xe) {
      case t:
        return Ye;
      case 89 * -103 + -2531 + 14 * 838:
      case -1 * 1721 + 1818 + -2 * 29:
        t !== -4 * -68 + -3662 * -2 + -398 * 19 && t !== 4531 + -640 * 11 + 2548 && Yo(xe);
        break;
      case 12066 + 1 * -12026:
        t === 9288 + 17 * 562 + -18801 && Yo(t);
        break;
      case 92:
        je();
        break;
    }
  return Ye;
}
function sx(t, o) {
  for (; je() && t + xe !== 688 + 167 * 35 + -141 * 46 + (9437 + 331 * 10 + -12737); )
    if (t + xe === -7 * 73 + -3 * 2529 + 8140 + (-7824 + -42 * -188 + -2 * 15) && Et() === 1 * -8218 + -6338 + 14603)
      break;
  return "/*" + zi(o, Ye - (1623 + -1306 * 6 + 6214)) + "*" + Sr(t === -4423 * -1 + 568 + -4944 ? t : je());
}
function gx(t) {
  for (; !To(Et()); )
    je();
  return zi(t, Ye);
}
function cx(t) {
  return ox(mi("", null, null, null, [""], t = ix(t), -8246 + 3719 * -2 + 5228 * 3, [7 * 221 + 734 + -2281], t));
}
function mi(t, o, e, n, i, r, a, s, g) {
  for (var I = 0, C = 1574 + 2 * 2257 + 1 * -6088, l = a, h = -9842 + 38 * 259, A = -7308 + 1624 * 1 + -5684 * -1, y = 0, k = 3300 + -3299 * 1, B = 1 * 1253 + 8376 + -9628, v = -4630 * 1 + -1 * 5188 + 9819, R = 58 * 11 + -4300 + -1831 * -2, S = "", M = i, L = r, X = n, K = S; B; )
    switch (y = R, R = je()) {
      case 608 * 14 + -213 * -25 + 657 * -21:
        if (y != 36 * 181 + 2329 + 8737 * -1 && fe(K, l - (-1 * -4051 + -170 * -51 + -12720)) == 58) {
          hi(K += F(bo(R), "&", "&\f"), "&\f") != -(-1574 + -202 * -13 + 1051 * -1) && (v = -1);
          break;
        }
      case -8612 + 3671 * 1 + 4975:
      case 7623 + -22 * -374 + -15812:
      case -2666 * 1 + 1 * 5667 + -5 * 582:
        K += bo(R);
        break;
      case -191 * 13 + -9820 + 152 * 81:
      case 10:
      case 62 * 144 + -1680 + -7235:
      case -1538 + 785 * 2:
        K += rx(y);
        break;
      case 92:
        K += ax(pi() - (1874 * -2 + 1294 + 2455), -26 * 229 + -3470 * -1 + 2491);
        continue;
      case 2 * 2699 + 2 * -32 + 1 * -5287:
        switch (Et()) {
          case -5 * 619 + 19 * -25 + 129 * 28:
          case 8167 * -1 + 7158 + -8 * -132:
            Gn(xx(sx(je(), pi()), o, e, g), g);
            break;
          default:
            K += "/";
        }
        break;
      case (-3645 + -11 * 740 + 11908) * k:
        s[I++] = qe(K) * v;
      case (5308 + -26 * 157 + 1101 * -1) * k:
      case 2568 + -1 * 5173 + 2664:
      case -7 * 233 + -1834 + 3 * 1155:
        switch (R) {
          case -6980 * 1 + 9818 + -2838:
          case -4154 + -1 * -4279:
            B = -1738 * 1 + -727 + 145 * 17;
          case -415 * 4 + 1784 + -65 + C:
            v == -(-1048 * -4 + -1 * 2886 + -1305) && (K = F(K, /\f/g, "")), A > 8283 * -1 + -4521 + 12804 && qe(K) - l && Gn(A > 2 * 2441 + -3 * -2692 + -12926 ? Ta(K + ";", n, e, l - (-9533 + 8577 * -1 + 18111), g) : Ta(F(K, " ", "") + ";", n, e, l - (-3886 + 9 * 432), g), g);
            break;
          case -4633 * 1 + -2330 + 7022:
            K += ";";
          default:
            if (Gn(X = La(K, o, e, I, C, i, s, S, M = [], L = [], l, r), r), R === -4 * -2182 + -611 + -1 * 7994)
              if (C === -2557 + 1187 * -5 + 8492)
                mi(K, o, X, X, M, r, l, s, L);
              else
                switch (h === 99 && fe(K, 731 * 2 + -8120 + 6661) === 8614 + -1 * 9769 + 253 * 5 ? 13 * -466 + -3959 + 10117 * 1 : h) {
                  case -1 * -5622 + -1 * 6775 + 1 * 1253:
                  case -3312 + 5297 * 1 + 1 * -1877:
                  case 2879 * 1 + -3443 + 673 * 1:
                  case 765 + 1078 * -4 + -1 * -3662:
                    mi(t, X, X, n && Gn(La(t, X, X, -6981 + -41 * 5 + 7186, 5571 + 5571 * -1, i, s, S, i, M = [], l, L), L), i, L, l, s, n ? M : L);
                    break;
                  default:
                    mi(K, X, X, X, [""], L, -1354 * -3 + -6710 + 1324 * 2, s, L);
                }
        }
        I = C = A = 4295 + 1273 * 7 + -186 * 71, k = v = -16206 + 16207 * 1, S = K = "", l = a;
        break;
      case 58:
        l = -10732 + -1 * -10733 + qe(K), A = y;
      default:
        if (k < 8718 + -3593 * -2 + -15903) {
          if (R == 132 * 41 + 8124 + -13413)
            --k;
          else if (R == -3271 + 8639 * 1 + -5243 && k++ == -8391 + -119 * -7 + 2 * 3779 && nx() == 16934 + -5603 * 3)
            continue;
        }
        switch (K += Sr(R), R * k) {
          case 65 * -61 + 17 * -155 + -1 * -6638:
            v = C > -5712 + 1 * -1721 + -7433 * -1 ? 1 : (K += "\f", -(-1 * -1145 + -98 * 101 + 8754));
            break;
          case -1 * -2787 + -7389 + -4646 * -1:
            s[I++] = (qe(K) - (1 * -4717 + 24 + 4694)) * v, v = -514 * -3 + 1 * 4262 + 829 * -7;
            break;
          case 3688 + 15 * -13 + -3429:
            Et() === -7213 * 1 + 1423 * -5 + 14373 && (K += bo(je())), h = Et(), C = l = qe(S = K += gx(pi())), R++;
            break;
          case 5411 + -1258 * -5 + 2914 * -4:
            y === -10376 + 10421 * 1 && qe(K) == 2 && (k = -2719 + 1 * 2719);
        }
    }
  return r;
}
function La(t, o, e, n, i, r, a, s, g, I, C, l) {
  for (var h = i - 1, A = i === 7 * 688 + -1356 * 2 + 2 * -1052 ? r : [""], y = is(A), k = 79 * -117 + 3170 + 6073, B = 6686 * -1 + 888 + -446 * -13, v = -452 + -1724 * -3 + -4720; k < n; ++k)
    for (var R = 54 * 58 + -62 + -10 * 307, S = xn(t, h + (10 * 999 + 1094 * 2 + 12177 * -1), h = $c(B = a[k])), M = t; R < y; ++R)
      (M = ns(B > 4 * 1129 + 50 * -59 + -3 * 522 ? A[R] + " " + S : F(S, /&\f/g, A[R]))) && (g[v++] = M);
  return Qi(t, o, e, i === -2258 + 6 * -1622 + 11990 ? Ui : s, g, I, C, l);
}
function xx(t, o, e, n) {
  return Qi(t, o, e, es, Sr(tx()), xn(t, -1 * 8245 + 2259 * -1 + 10506, -(-3725 + 11 * 691 + -3874)), 5061 + -723 * 7, n);
}
function Ta(t, o, e, n, i) {
  return Qi(t, o, e, Br, xn(t, 6197 + -149 * -25 + 41 * -242, n), xn(t, n + 1, -1), n, i);
}
function rs(t, o, e) {
  switch (qc(t, o)) {
    case -4393 + 2374 * 4:
      return _ + "print-" + t + t;
    case -242 + -665 * 7 + -409 * -26:
    case -5871 + -1129 * 1 + 23 * 487:
    case 6857 * 1 + -2 * -2594 + -1 * 8868:
    case 3433:
    case 101 * -7 + 23 * 287 + 1 * -4253:
    case -742 + -298 * -31 + 7 * -577:
    case -35 * 1 + 80 * -49 + -1719 * -4:
    case 6 * 1013 + 1 * 10565 + 1 * -11071:
    case -674 * -17 + 1 * -120 + -4982:
    case -4607 * 1 + 5018 + 5433:
    case -2714 + -1 * 4840 + 2149 * 5:
    case 11222 + -3414 * -2 + -11405:
    case -35 * 91 + 2753 + -491 * -7:
    case -3 * 1039 + -6738 + -2 * -8123:
    case -2366 + -1 * -8245:
    case 5623:
    case 57 * 49 + 279 * 20 + 1 * -2238:
    case -5965 + -5282 * -2:
    case 1 * 2351 + -23 * 179 + 6621:
    case -88 * 1 + 4714 + -3 * 137:
    case 6389:
    case -432 + -1847 * -3:
    case -5357 * 1 + 5530 + 5192:
    case -4 * -584 + 1 * 8146 + -1 * 4861:
    case 3829:
      return _ + t + t;
    case 89 * 1 + -4431 + 9131:
      return Wn + t + t;
    case 2807 + -25 * 394 + 12392:
    case -1 * -6803 + -8934 * -1 + -11491:
    case -8287 + 73 * -89 + 19594:
    case -570 * 17 + 2212 + 14446:
    case 7 * -241 + -8422 + 12865:
      return _ + t + Wn + t + te + t + t;
    case 2887 + 1 * -2963 + 6012:
      switch (fe(t, o + (-7702 + -23 * 96 + 9921))) {
        case 132 * 73 + 4120 * -1 + -5402:
          return _ + t + te + F(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        case -159 * 17 + -2722 * -1 + 1 * 89:
          return _ + t + te + F(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        case 4420 + 5 * 323 + -10 * 599:
          return _ + t + te + F(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    case -16278 + -23106 * -1:
    case 5615 * 1 + -223 * -43 + -10936:
    case -2 * -3561 + -9576 + -487 * -11:
      return _ + t + te + t + t;
    case -9256 * 1 + -4887 + -1 * -20308:
      return _ + t + te + "flex-" + t + t;
    case -5157 + -2 * -5172:
      return _ + t + F(t, /(\w+).+(:[^]+)/, _ + "box-$1$2" + te + "flex-$1$2") + t;
    case -2096 + -1 * -9155 + -1616:
      return _ + t + te + "flex-item-" + F(t, /flex-|-self/g, "") + (xt(t, /flex-|baseline/) ? "" : te + "grid-row-" + F(t, /flex-|-self/g, "")) + t;
    case 7630 + 1075 * 1 + -4030:
      return _ + t + te + "flex-line-pack" + F(t, /align-content|flex-|-self/g, "") + t;
    case -6319 * -1 + -2181 + 1410:
      return _ + t + te + F(t, "shrink", "negative") + t;
    case -1716 + -10487 * 1 + 17495 * 1:
      return _ + t + te + F(t, "basis", "preferred-size") + t;
    case 1320 + 5 * 948:
      return _ + "box-" + F(t, "-grow", "") + _ + t + te + F(t, "grow", "positive") + t;
    case 6101 + 91 * -17:
      return _ + F(t, /([^-])(transform)/g, "$1" + _ + "$2") + t;
    case 12838 + -739 * 9:
      return F(F(F(t, /(zoom-|grab)/, _ + "$1"), /(image-set)/, _ + "$1"), t, "") + t;
    case 1200 + 4295 * 1:
    case 4086 + 2 * 2655 + -1 * 5437:
      return F(t, /(image-set\([^]*)/, _ + "$1$`$1");
    case 1 * -9655 + -5403 + 1 * 20026:
      return F(F(t, /(.+:)(flex-)?(.*)/, _ + "box-pack:$3" + te + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + _ + t + t;
    case -7091 + 1 * 11291:
      if (!xt(t, /flex-|baseline/))
        return te + "grid-column-align" + xn(t, o) + t;
      break;
    case 103 * -1 + -1468 * 2 + 5631:
    case -1564 + -4 * -1231:
      return te + F(t, "template-", "") + t;
    case 391 * -24 + -122 * -11 + -6 * -2071:
    case -1 * 4909 + -1327 * 6 + 16487:
      return e && e.some(function(n, i) {
        return o = i, xt(n.props, /grid-\w+-end/);
      }) ? ~hi(t + (e = e[o].value), "span") ? t : te + F(t, "-start", "") + t + te + "grid-row-span:" + (~hi(e, "span") ? xt(e, /\d+/) : +xt(e, /\d+/) - +xt(t, /\d+/)) + ";" : te + F(t, "-start", "") + t;
    case -520 * -1 + -91 * 107 + 14113 * 1:
    case -6964 + -3 * -1701 + -1 * -5989:
      return e && e.some(function(n) {
        return xt(n.props, /grid-\w+-start/);
      }) ? t : te + F(F(t, "-end", "-span"), "span ", "") + t;
    case 4095:
    case 2632 + -3068 * 3 + 10155:
    case 43 * -119 + -1084 + 10269:
    case 2532:
      return F(t, /(.+)-inline(.+)/, _ + "$1$2") + t;
    case 8083 + -1777 * -7 + -12406:
    case 7733 + 5 * 2181 + -11579:
    case 5753:
    case -2487 + 10 * 339 + -2 * -2316:
    case 10894 + -1 * 5449:
    case 131 * -24 + 6378 + -1 * -2467:
    case 1381 * -1 + 9751 + -1 * 3437:
    case 4677:
    case -16 * 615 + -1 * 10636 + 26009:
    case 8440 + 11 * -241:
    case -737 * 11 + 1041 + -1 * -12087:
    case 4 * -1108 + -6911 + 16108:
      if (qe(t) - (-6373 + 183 * -37 + -11 * -1195) - o > -6708 + -2119 * 1 + 11 * 803)
        switch (fe(t, o + (5643 + -3060 * -3 + -1 * 14822))) {
          case 10 * 407 + 44 * -196 + 4663:
            if (fe(t, o + (-3 * 777 + 2 * 3541 + -4747)) !== 45)
              break;
          case 8401 + 1036 * 2 + -10371 * 1:
            return F(t, /(.+:)(.+)-([^]+)/, "$1" + _ + "$2-$3$1" + Wn + (fe(t, o + (314 + 415 * 17 + 7366 * -1)) == 59 * 29 + -6041 + 2 * 2219 ? "$3" : "$2-$3")) + t;
          case 115:
            return ~hi(t, "stretch") ? rs(F(t, "stretch", "fill-available"), o, e) + t : t;
        }
      break;
    case -6345 + -827 * 5 + 15632:
    case 5920:
      return F(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, i, r, a, s, g, I) {
        return te + i + ":" + r + I + (a ? te + i + "-span:" + (s ? g : +g - +r) + I : "") + t;
      });
    case -2 * -1324 + -271 * 18 + 7179:
      if (fe(t, o + (9558 + 1 * -9652 + -50 * -2)) === 41 * 105 + 7547 + -11731)
        return F(t, ":", ":" + _) + t;
      break;
    case 2164 + -5 * 593 + 7245:
      switch (fe(t, fe(t, -116 * -29 + 8377 + -11727) === -152 * 26 + 8763 + -4766 ? -633 * -5 + -8536 + 317 * 17 : 5158 * -1 + -267 * 37 + 76 * 198)) {
        case 120:
          return F(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + _ + (fe(t, 4839 * -1 + 2 * 111 + -1 * -4631) === -8263 + 2 * -3789 + -13 * -1222 ? "inline-" : "") + "box$3$1" + _ + "$2$3$1" + te + "$2box$3") + t;
        case 4857 + -1 * -9907 + 4888 * -3:
          return F(t, ":", ":" + te) + t;
      }
      break;
    case 9830 + 1 * -8826 + 943 * 5:
    case -3333 + 3163 * -1 + 1 * 9143:
    case 2135:
    case 1 * -5861 + -1 * 909 + 10697:
    case -5782 + -482 * 7 + -1283 * -9:
      return F(t, "scroll-", "scroll-snap-") + t;
  }
  return t;
}
function Oi(t, o) {
  for (var e = "", n = 1982 + -2 * 991; n < t.length; n++)
    e += o(t[n], n, t, o) || "";
  return e;
}
function Ix(t, o, e, n) {
  switch (t.type) {
    case _c:
      if (t.children.length)
        break;
    case zc:
    case Br:
      return t.return = t.return || t.value;
    case es:
      return "";
    case ts:
      return t.return = t.value + "{" + Oi(t.children, n) + "}";
    case Ui:
      if (!qe(t.value = t.props.join(",")))
        return "";
  }
  return qe(e = Oi(t.children, n)) ? t.return = t.value + "{" + e + "}" : "";
}
function lx(t) {
  var o = is(t);
  return function(e, n, i, r) {
    for (var a = "", s = 2433 * 3 + -1 * 5297 + -1 * 2002; s < o; s++)
      a += t[s](e, n, i, r) || "";
    return a;
  };
}
function ux(t) {
  return function(o) {
    o.root || (o = o.return) && t(o);
  };
}
function Cx(t, o, e, n) {
  if (t.length > -(6831 + -1 * 2149 + -4681) && !t.return)
    switch (t.type) {
      case Br:
        t.return = rs(t.value, t.length, e);
        return;
      case ts:
        return Oi([pt(t, { value: F(t.value, "@", "@" + _) })], n);
      case Ui:
        if (t.length)
          return ex(e = t.props, function(i) {
            switch (xt(i, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                _t(pt(t, { props: [F(i, /:(read-\w+)/, ":" + Wn + "$1")] }));
                var r = {};
                r.props = [i], _t(pt(t, r)), Lo(t, { props: Na(e, n) });
                break;
              case "::placeholder":
                _t(pt(t, { props: [F(i, /:(plac\w+)/, ":" + _ + "input-$1")] })), _t(pt(t, { props: [F(i, /:(plac\w+)/, ":" + Wn + "$1")] })), _t(pt(t, { props: [F(i, /:(plac\w+)/, te + "input-$1")] }));
                var a = {};
                a.props = [i], _t(pt(t, a)), Lo(t, { props: Na(e, n) });
                break;
            }
            return "";
          });
    }
}
var T = {};
T.animationIterationCount = 1, T.aspectRatio = 1, T.borderImageOutset = 1, T.borderImageSlice = 1, T.borderImageWidth = 1, T.boxFlex = 1, T.boxFlexGroup = 1, T.boxOrdinalGroup = 1, T.columnCount = 1, T.columns = 1, T.flex = 1, T.flexGrow = 1, T.flexPositive = 1, T.flexShrink = 1, T.flexNegative = 1, T.flexOrder = 1, T.gridRow = 1, T.gridRowEnd = 1, T.gridRowSpan = 1, T.gridRowStart = 1, T.gridColumn = 1, T.gridColumnEnd = 1, T.gridColumnSpan = 1, T.gridColumnStart = 1, T.msGridRow = 1, T.msGridRowSpan = 1, T.msGridColumn = 1, T.msGridColumnSpan = 1, T.fontWeight = 1, T.lineHeight = 1, T.opacity = 1, T.order = 1, T.orphans = 1, T.tabSize = 1, T.widows = 1, T.zIndex = 1, T.zoom = 1, T.WebkitLineClamp = 1, T.fillOpacity = 1, T.floodOpacity = 1, T.stopOpacity = 1, T.strokeDasharray = 1, T.strokeDashoffset = 1, T.strokeMiterlimit = 1, T.strokeOpacity = 1, T.strokeWidth = 1;
var dx = T, Q = {}, Lt = typeof process < "u" && void (1 * -2711 + 187 + 2524 * 1) !== Q && (Q.REACT_APP_SC_ATTR || Q.SC_ATTR) || "data-styled", Gr = typeof window < "u" && "HTMLElement" in window, fx = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (131 * -7 + -3 * -1793 + -4462) !== Q && void (-857 * -1 + 5694 + 6551 * -1) !== Q.REACT_APP_SC_DISABLE_SPEEDY && Q.REACT_APP_SC_DISABLE_SPEEDY !== "" ? Q.REACT_APP_SC_DISABLE_SPEEDY !== "false" && Q.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (-5751 + 1 * 4585 + -22 * -53) !== Q && void (1 * -8371 + -3336 + -509 * -23) !== Q.SC_DISABLE_SPEEDY && Q.SC_DISABLE_SPEEDY !== "" ? Q.SC_DISABLE_SPEEDY !== "false" && Q.SC_DISABLE_SPEEDY : Q.NODE_ENV !== "production"), Ya = /invalid hook call/i, si = /* @__PURE__ */ new Set(), Ax = function(t, o) {
  if (Q.NODE_ENV !== "production") {
    var e = o ? ' with the id of "'.concat(o, '"') : "", n = "The component ".concat(t).concat(e, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, i = console.error;
    try {
      var r = !0;
      console.error = function(a) {
        for (var s = [], g = 3 * 2272 + 37 * -21 + 1 * -6038; g < arguments.length; g++)
          s[g - (7870 + -183 * 43)] = arguments[g];
        Ya.test(a) ? (r = !1, si.delete(n)) : i.apply(void (-4087 + 1 * 5065 + -1 * 978), gn([a], s, !1));
      }, ot(), r && !si.has(n) && (console.warn(n), si.add(n));
    } catch (a) {
      Ya.test(a.message) && si.delete(n);
    } finally {
      console.error = i;
    }
  }
}, _i = Object.freeze([]), ln = Object.freeze({});
function hx(t, o, e) {
  return e === void 0 && (e = ln), t.theme !== e.theme && t.theme || o || e.theme;
}
var Do = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), px = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, mx = /(^-|-$)/g;
function Da(t) {
  return t.replace(px, "-").replace(mx, "");
}
var bx = /(a)(d)/gi, Fa = function(t) {
  return String.fromCharCode(t + (t > 281 * 9 + 1895 + -4399 ? -11 * 121 + 5 * 151 + -41 * -15 : -615 + 1021 * -3 + -151 * -25));
};
function Fo(t) {
  var o, e = "";
  for (o = Math.abs(t); o > -8882 + -6746 * -1 + 2188; o = o / (4646 + -2990 * -2 + -10574) | 2 * 1655 + 4 * 1117 + -1 * 7778)
    e = Fa(o % (7925 + -1 * -8467 + 430 * -38)) + e;
  return (Fa(o % (613 * -4 + -6345 + 8849)) + e).replace(bx, "$1-$2");
}
var yo, Ot = function(t, o) {
  for (var e = o.length; e; )
    t = (-3407 + -4 * 1987 + -219 * -52) * t ^ o.charCodeAt(--e);
  return t;
}, as = function(t) {
  return Ot(-1 * 2704 + -32 * -45 + 6645, t);
};
function yx(t) {
  return Fo(as(t) >>> -1 * 8847 + -3033 * -1 + 5814);
}
function ss(t) {
  return Q.NODE_ENV !== "production" && typeof t == "string" && t || t.displayName || t.name || "Component";
}
function wo(t) {
  return typeof t == "string" && (Q.NODE_ENV === "production" || t.charAt(0) === t.charAt(5321 * 1 + -9233 + 6 * 652).toLowerCase());
}
var Ne = {};
Ne.childContextTypes = !0, Ne.contextType = !0, Ne.contextTypes = !0, Ne.defaultProps = !0, Ne.displayName = !0, Ne.getDefaultProps = !0, Ne.getDerivedStateFromError = !0, Ne.getDerivedStateFromProps = !0, Ne.mixins = !0, Ne.propTypes = !0, Ne.type = !0;
var mt = {};
mt.name = !0, mt.length = !0, mt.prototype = !0, mt.caller = !0, mt.callee = !0, mt.arguments = !0, mt.arity = !0;
var Kt = {};
Kt.$$typeof = !0, Kt.compare = !0, Kt.defaultProps = !0, Kt.displayName = !0, Kt.propTypes = !0, Kt.type = !0;
var en = {};
en.$$typeof = !0, en.render = !0, en.defaultProps = !0, en.displayName = !0, en.propTypes = !0;
var gs = typeof Symbol == "function" && Symbol.for, cs = gs ? Symbol.for("react.memo") : 25602 + -2 * -16960 + -593 * -1, wx = gs ? Symbol.for("react.forward_ref") : 74251 + 35551 * 2 + -85241, vx = Ne, Bx = mt, xs = Kt, Sx = ((yo = {})[wx] = en, yo[cs] = xs, yo);
function Xa(t) {
  return ("type" in (o = t) && o.type.$$typeof) === cs ? xs : "$$typeof" in t ? Sx[t.$$typeof] : vx;
  var o;
}
var Gx = Object.defineProperty, Zx = Object.getOwnPropertyNames, ja = Object.getOwnPropertySymbols, kx = Object.getOwnPropertyDescriptor, Kx = Object.getPrototypeOf, Ma = Object.prototype;
function Is(t, o, e) {
  if (typeof o != "string") {
    if (Ma) {
      var n = Kx(o);
      n && n !== Ma && Is(t, n, e);
    }
    var i = Zx(o);
    ja && (i = i.concat(ja(o)));
    for (var r = Xa(t), a = Xa(o), s = -7 * -1312 + 113 * -81 + -1 * 31; s < i.length; ++s) {
      var g = i[s];
      if (!(g in Bx || e && e[g] || a && g in a || r && g in r)) {
        var I = kx(o, g);
        try {
          Gx(t, g, I);
        } catch {
        }
      }
    }
  }
  return t;
}
function un(t) {
  return typeof t == "function";
}
function Zr(t) {
  return typeof t == "object" && "styledComponentId" in t;
}
function Wt(t, o) {
  return t && o ? "".concat(t, " ").concat(o) : t || o || "";
}
function Ua(t, o) {
  if (-2259 + 9 * 251 === t.length)
    return "";
  for (var e = t[-1079 + -2 * 1312 + -161 * -23], n = 6 * -423 + 4216 + -1677; n < t.length; n++)
    e += o ? o + t[n] : t[n];
  return e;
}
function Cn(t) {
  return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
}
function Xo(t, o, e) {
  if (void (-1 * 6583 + 7388 + 7 * -115) === e && (e = !1), !e && !Cn(t) && !Array.isArray(t))
    return o;
  if (Array.isArray(o))
    for (var n = 703 * -1 + 5367 + -4664; n < o.length; n++)
      t[n] = Xo(t[n], o[n]);
  else if (Cn(o))
    for (var n in o)
      t[n] = Xo(t[n], o[n]);
  return t;
}
function kr(t, o) {
  var e = {};
  e.value = o, Object.defineProperty(t, "toString", e);
}
var ue = {};
ue[1] = `Cannot create styled-component for component: %s.

`, ue[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, ue[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, ue[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, ue[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, ue[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, ue[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', ue[8] = `ThemeProvider: Please make your "theme" prop an object.

`, ue[9] = "Missing document `<head>`\n\n", ue[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, ue[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, ue[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", ue[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, ue[14] = `ThemeProvider: "theme" prop is required.

`, ue[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", ue[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, ue[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, ue[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var Hx = Q.NODE_ENV !== "production" ? ue : {};
function Ox() {
  for (var t = [], o = 2739 + 1749 * -4 + 4257; o < arguments.length; o++)
    t[o] = arguments[o];
  for (var e = t[-9 * -469 + 6182 + -10403], n = [], i = 67 * 19 + -7854 + 6582, r = t.length; i < r; i += 9323 + 158 * -59)
    n.push(t[i]);
  return n.forEach(function(a) {
    e = e.replace(/%[a-z]/, a);
  }), e;
}
function hn(t) {
  for (var o = [], e = -2616 + -9222 * 1 + -1 * -11839; e < arguments.length; e++)
    o[e - 1] = arguments[e];
  return Q.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(o.length > 7359 * -1 + -8317 + 15676 ? " Args: ".concat(o.join(", ")) : "")) : new Error(Ox.apply(void (-1286 * 7 + 1 * 5821 + 3181), gn([Hx[t]], o, !1)).trim());
}
var Rx = function() {
  function t(o) {
    this.groupSizes = new Uint32Array(1223 * -4 + 1538 + 3866 * 1), this.length = 44 * 52 + -1 * -5813 + -7589 * 1, this.tag = o;
  }
  return t.prototype.indexOfGroup = function(o) {
    for (var e = 6774 + -18 * 43 + -6e3, n = -2207 + -2207 * -1; n < o; n++)
      e += this.groupSizes[n];
    return e;
  }, t.prototype.insertRules = function(o, e) {
    if (o >= this.groupSizes.length) {
      for (var n = this.groupSizes, i = n.length, r = i; o >= r; )
        if ((r <<= 8909 + -283 * 17 + -4097) < 1 * -711 + -473 * -11 + 4 * -1123)
          throw hn(1545 + -1 * 1567 + 1 * 38, "".concat(o));
      this.groupSizes = new Uint32Array(r), this.groupSizes.set(n), this.length = r;
      for (var a = i; a < r; a++)
        this.groupSizes[a] = 2554 + -1 * -7129 + -421 * 23;
    }
    for (var s = this.indexOfGroup(o + (4678 + -41 * 97 + -20 * 35)), g = (a = 0, e.length); a < g; a++)
      this.tag.insertRule(s, e[a]) && (this.groupSizes[o]++, s++);
  }, t.prototype.clearGroup = function(o) {
    if (o < this.length) {
      var e = this.groupSizes[o], n = this.indexOfGroup(o), i = n + e;
      this.groupSizes[o] = -7562 + -3781 * -2;
      for (var r = n; r < i; r++)
        this.tag.deleteRule(n);
    }
  }, t.prototype.getGroup = function(o) {
    var e = "";
    if (o >= this.length || 358 * 2 + -1 * -3309 + -1 * 4025 === this.groupSizes[o])
      return e;
    for (var n = this.groupSizes[o], i = this.indexOfGroup(o), r = i + n, a = i; a < r; a++)
      e += "".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);
    return e;
  }, t;
}(), bi = /* @__PURE__ */ new Map(), Ri = /* @__PURE__ */ new Map(), yi = 507 * -3 + -3598 + -256 * -20, gi = function(t) {
  if (bi.has(t))
    return bi.get(t);
  for (; Ri.has(yi); )
    yi++;
  var o = yi++;
  if (Q.NODE_ENV !== "production" && ((-6142 + 166 * 37 | o) < 8127 + -1 * 9043 + 4 * 229 || o > -1051210271 + 339395 * 6261))
    throw hn(-3261 + 1828 * -2 + -1 * -6933, "".concat(o));
  return bi.set(t, o), Ri.set(o, t), o;
}, Wx = function(t, o) {
  yi = o + (-2041 + -1 * 6289 + 8331 * 1), bi.set(t, o), Ri.set(o, t);
}, Vx = "style[".concat(Lt, "][").concat("data-styled-version", '="').concat("6.1.1", '"]'), Ex = new RegExp("^".concat(Lt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Px = function(t, o, e) {
  for (var n, i = e.split(","), r = -7940 + -2 * 54 + 8048, a = i.length; r < a; r++)
    (n = i[r]) && t.registerName(o, n);
}, Nx = function(t, o) {
  for (var e, n = ((e = o.textContent) !== null && void (-2231 + -97 * -23) !== e ? e : "").split(`/*!sc*/
`), i = [], r = 1 * 4451 + 2 * 1963 + -8377, a = n.length; r < a; r++) {
    var s = n[r].trim();
    if (s) {
      var g = s.match(Ex);
      if (g) {
        var I = 0 | parseInt(g[1], 10), C = g[2];
        I !== 0 && (Wx(C, I), Px(t, C, g[321 * -4 + -3800 + 5087]), t.getTag().insertRules(I, i)), i.length = -63 + 4 * -2179 + 8779;
      } else
        i.push(s);
    }
  }
};
function Lx() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var ls = function(t) {
  var o = document.head, e = t || o, n = document.createElement("style"), i = function(s) {
    var g = Array.from(s.querySelectorAll("style[".concat(Lt, "]")));
    return g[g.length - (719 * 11 + 2 * -2621 + -2666)];
  }(e), r = i !== void 0 ? i.nextSibling : null;
  n.setAttribute(Lt, "active"), n.setAttribute("data-styled-version", "6.1.1");
  var a = Lx();
  return a && n.setAttribute("nonce", a), e.insertBefore(n, r), n;
}, Tx = function() {
  function t(o) {
    this.element = ls(o), this.element.appendChild(document.createTextNode("")), this.sheet = function(e) {
      if (e.sheet)
        return e.sheet;
      for (var n = document.styleSheets, i = -439 * 2 + -1982 * -1 + -1104, r = n.length; i < r; i++) {
        var a = n[i];
        if (a.ownerNode === e)
          return a;
      }
      throw hn(17);
    }(this.element), this.length = 2 * -3931 + 4471 + 3391;
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
}(), Yx = function() {
  function t(o) {
    this.element = ls(o), this.nodes = this.element.childNodes, this.length = 6499 + 117 * -60 + 1 * 521;
  }
  return t.prototype.insertRule = function(o, e) {
    if (o <= this.length && o >= 56 * -140 + 4045 + -3 * -1265) {
      var n = document.createTextNode(e);
      return this.element.insertBefore(n, this.nodes[o] || null), this.length++, !0;
    }
    return !1;
  }, t.prototype.deleteRule = function(o) {
    this.element.removeChild(this.nodes[o]), this.length--;
  }, t.prototype.getRule = function(o) {
    return o < this.length ? this.nodes[o].textContent : "";
  }, t;
}(), Dx = function() {
  function t(o) {
    this.rules = [], this.length = 3 * -569 + 8119 + -6412;
  }
  return t.prototype.insertRule = function(o, e) {
    return o <= this.length && (this.rules.splice(o, -408 * 22 + -4357 + 13333, e), this.length++, !0);
  }, t.prototype.deleteRule = function(o) {
    this.rules.splice(o, 1 * -8705 + -6989 * 1 + -15695 * -1), this.length--;
  }, t.prototype.getRule = function(o) {
    return o < this.length ? this.rules[o] : "";
  }, t;
}(), Ja = Gr, Fx = { isServer: !Gr, useCSSOMInjection: !fx }, us = function() {
  function t(o, e, n) {
    void (34 * -11 + 5069 + -4695) === o && (o = ln), void (4316 * 1 + -3 * 1406 + 98 * -1) === e && (e = {});
    var i = this;
    this.options = Ke(Ke({}, Fx), o), this.gs = e, this.names = new Map(n), this.server = !!o.isServer, !this.server && Gr && Ja && (Ja = !1, function(r) {
      for (var a = document.querySelectorAll(Vx), s = 4650 + 39 * -173 + 2097, g = a.length; s < g; s++) {
        var I = a[s];
        I && I.getAttribute(Lt) !== "active" && (Nx(r, I), I.parentNode && I.parentNode.removeChild(I));
      }
    }(this)), kr(this, function() {
      return function(r) {
        for (var a = r.getTag(), s = a.length, g = "", I = function(l) {
          var h = function(v) {
            return Ri.get(v);
          }(l);
          if (void (1345 * -1 + 7578 + 23 * -271) === h)
            return "continue";
          var A = r.names.get(h), y = a.getGroup(l);
          if (void (-6397 + 2 * -4909 + -15 * -1081) === A || 4232 + 235 * 38 + -6581 * 2 === y.length)
            return "continue";
          var k = "".concat(Lt, ".g").concat(l, '[id="').concat(h, '"]'), B = "";
          void (-1124 * 5 + 9814 + 1 * -4194) !== A && A.forEach(function(v) {
            v.length > -3 * -347 + -3831 + 310 * 9 && (B += "".concat(v, ","));
          }), g += "".concat(y).concat(k, '{content:"').concat(B, '"}').concat(`/*!sc*/
`);
        }, C = 0; C < s; C++)
          I(C);
        return g;
      }(i);
    });
  }
  return t.registerId = function(o) {
    return gi(o);
  }, t.prototype.reconstructWithOptions = function(o, e) {
    return void (4932 + 147 * -52 + -4 * -678) === e && (e = !0), new t(Ke(Ke({}, this.options), o), this.gs, e && this.names || void (-24 * -14 + 9121 + -9457));
  }, t.prototype.allocateGSInstance = function(o) {
    return this.gs[o] = (this.gs[o] || 0) + (3058 + 1 * 4758 + -7815);
  }, t.prototype.getTag = function() {
    return this.tag || (this.tag = (o = function(e) {
      var n = e.useCSSOMInjection, i = e.target;
      return e.isServer ? new Dx(i) : n ? new Tx(i) : new Yx(i);
    }(this.options), new Rx(o)));
    var o;
  }, t.prototype.hasNameForId = function(o, e) {
    return this.names.has(o) && this.names.get(o).has(e);
  }, t.prototype.registerName = function(o, e) {
    if (gi(o), this.names.has(o))
      this.names.get(o).add(e);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(e), this.names.set(o, n);
    }
  }, t.prototype.insertRules = function(o, e, n) {
    this.registerName(o, e), this.getTag().insertRules(gi(o), n);
  }, t.prototype.clearNames = function(o) {
    this.names.has(o) && this.names.get(o).clear();
  }, t.prototype.clearRules = function(o) {
    this.getTag().clearGroup(gi(o)), this.clearNames(o);
  }, t.prototype.clearTag = function() {
    this.tag = void (-9612 + -54 * -178);
  }, t;
}(), Xx = /&/g, jx = /^\s*\/\/.*$/gm;
function Cs(t, o) {
  return t.map(function(e) {
    return e.type === "rule" && (e.value = "".concat(o, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(o, " ")), e.props = e.props.map(function(n) {
      return "".concat(o, " ").concat(n);
    })), Array.isArray(e.children) && e.type !== "@keyframes" && (e.children = Cs(e.children, o)), e;
  });
}
function ds(t) {
  var o, e, n, i = t === void 0 ? ln : t, r = i.options, a = void (9161 * -1 + -1909 + -2214 * -5) === r ? ln : r, s = i.plugins, g = s === void 0 ? _i : s, I = function(h, A, y) {
    return y === e || y.startsWith(e) && y.endsWith(e) && y.replaceAll(e, "").length > -3090 + 1 * 3090 ? ".".concat(o) : h;
  }, C = g.slice();
  C.push(function(h) {
    h.type === Ui && h.value.includes("&") && (h.props[719 * 6 + -3050 + -16 * 79] = h.props[1394 + 1394 * -1].replace(Xx, e).replace(n, I));
  }), a.prefix && C.push(Cx), C.push(Ix);
  var l = function(h, A, y, k) {
    void (113 * 10 + 2254 + 1 * -3384) === A && (A = ""), void (-1338 * 7 + 8016 + 6 * 225) === y && (y = ""), void (1 * -6551 + 3 * -1075 + 9776) === k && (k = "&"), o = k, e = A, n = new RegExp("\\".concat(e, "\\b"), "g");
    var B = h.replace(jx, ""), v = cx(y || A ? "".concat(y, " ").concat(A, " { ").concat(B, " }") : B);
    a.namespace && (v = Cs(v, a.namespace));
    var R = [];
    return Oi(v, lx(C.concat(ux(function(S) {
      return R.push(S);
    })))), R;
  };
  return l.hash = g.length ? g.reduce(function(h, A) {
    return A.name || hn(46 * -139 + -8551 * 1 + 7480 * 2), Ot(h, A.name);
  }, 2588 + -308 * -10 + -1 * 287).toString() : "", l;
}
var Mx = new us(), jo = ds(), Kr = Nt.createContext({ shouldForwardProp: void (-7479 * -1 + -2766 + 3 * -1571), styleSheet: Mx, stylis: jo });
Kr.Consumer;
var Ux = Nt.createContext(void (709 * -7 + -1 * 6473 + 11436));
function Mo() {
  return ji(Kr);
}
function Jx(t) {
  var o = He(t.stylisPlugins), e = o[-7804 + 1289 * 3 + 3937], n = o[-1416 + 33 * -158 + 6631], i = Mo().styleSheet, r = tt(function() {
    var C = i, l = {};
    return l.useCSSOMInjection = !1, t.sheet ? C = t.sheet : t.target && (C = C.reconstructWithOptions({ target: t.target }, !1)), t.disableCSSOMInjection && (C = C.reconstructWithOptions(l)), C;
  }, [t.disableCSSOMInjection, t.sheet, t.target, i]), a = tt(function() {
    var C = {};
    C.namespace = t.namespace, C.prefix = t.enableVendorPrefixes;
    var l = {};
    return l.options = C, l.plugins = e, ds(l);
  }, [t.enableVendorPrefixes, t.namespace, e]);
  Ce(function() {
    Qc(e, t.stylisPlugins) || n(t.stylisPlugins);
  }, [t.stylisPlugins]);
  var s = tt(function() {
    var C = {};
    return C.shouldForwardProp = t.shouldForwardProp, C.styleSheet = r, C.stylis = a, C;
  }, [t.shouldForwardProp, r, a]), g = {};
  g.value = s;
  var I = {};
  return I.value = a, Nt.createElement(Kr.Provider, g, Nt.createElement(Ux.Provider, I, t.children));
}
var Qa = function() {
  function t(o, e) {
    var n = this;
    this.inject = function(i, r) {
      void (5498 * 1 + 7922 + -244 * 55) === r && (r = jo);
      var a = n.name + r.hash;
      i.hasNameForId(n.id, a) || i.insertRules(n.id, a, r(n.rules, a, "@keyframes"));
    }, this.name = o, this.id = "sc-keyframes-".concat(o), this.rules = e, kr(this, function() {
      throw hn(3 * 2909 + 1 * -6547 + -2168, String(n.name));
    });
  }
  return t.prototype.getName = function(o) {
    return void (-1880 * -1 + -521 * -17 + 3 * -3579) === o && (o = jo), this.name + o.hash;
  }, t;
}(), Qx = function(t) {
  return t >= "A" && t <= "Z";
};
function za(t) {
  for (var o = "", e = 0; e < t.length; e++) {
    var n = t[e];
    if (-56 * 62 + 154 * -11 + -1 * -5167 === e && n === "-" && t[-12384 + 16 * 774] === "-")
      return t;
    Qx(n) ? o += "-" + n.toLowerCase() : o += n;
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
var fs = function(t) {
  return t == null || t === !1 || t === "";
}, As = function(t) {
  var o, e, n = [];
  for (var i in t) {
    var r = t[i];
    t.hasOwnProperty(i) && !fs(r) && (Array.isArray(r) && r.isCss || un(r) ? n.push("".concat(za(i), ":"), r, ";") : Cn(r) ? n.push.apply(n, gn(gn(["".concat(i, " {")], As(r), !1), ["}"], !1)) : n.push("".concat(za(i), ": ").concat((o = i, (e = r) == null || typeof e == "boolean" || e === "" ? "" : typeof e != "number" || -987 + -1 * -987 === e || o in dx || o.startsWith("--") ? String(e).trim() : "".concat(e, "px")), ";")));
  }
  return n;
};
function Pt(t, o, e, n) {
  if (fs(t))
    return [];
  if (Zr(t))
    return [".".concat(t.styledComponentId)];
  if (un(t)) {
    if (!un(r = t) || r.prototype && r.prototype.isReactComponent || !o)
      return [t];
    var i = t(o);
    return Q.NODE_ENV === "production" || typeof i != "object" || Array.isArray(i) || i instanceof Qa || Cn(i) || i === null || console.error("".concat(ss(t), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Pt(i, o, e, n);
  }
  var r;
  return t instanceof Qa ? e ? (t.inject(e, n), [t.getName(n)]) : [t] : Cn(t) ? As(t) : Array.isArray(t) ? Array.prototype.concat.apply(_i, t.map(function(a) {
    return Pt(a, o, e, n);
  })) : [t.toString()];
}
function zx(t) {
  for (var o = 57 * 41 + -5655 + 3318; o < t.length; o += 1379 * -5 + -4789 + 11685) {
    var e = t[o];
    if (un(e) && !Zr(e))
      return !1;
  }
  return !0;
}
var _x = as("6.1.1"), $x = function() {
  function t(o, e, n) {
    this.rules = o, this.staticRulesId = "", this.isStatic = Q.NODE_ENV === "production" && (void (-7916 + -99 * 33 + 211 * 53) === n || n.isStatic) && zx(o), this.componentId = e, this.baseHash = Ot(_x, e), this.baseStyle = n, us.registerId(e);
  }
  return t.prototype.generateAndInjectStyles = function(o, e, n) {
    var i = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, e, n) : "";
    if (this.isStatic && !n.hash)
      if (this.staticRulesId && e.hasNameForId(this.componentId, this.staticRulesId))
        i = Wt(i, this.staticRulesId);
      else {
        var r = Ua(Pt(this.rules, o, e, n)), a = Fo(Ot(this.baseHash, r) >>> -1 * -6299 + 193 * 2 + -6685);
        if (!e.hasNameForId(this.componentId, a)) {
          var s = n(r, ".".concat(a), void 0, this.componentId);
          e.insertRules(this.componentId, a, s);
        }
        i = Wt(i, a), this.staticRulesId = a;
      }
    else {
      for (var g = Ot(this.baseHash, n.hash), I = "", C = -1 * -1463 + -3362 + 1899; C < this.rules.length; C++) {
        var l = this.rules[C];
        if (typeof l == "string")
          I += l, Q.NODE_ENV !== "production" && (g = Ot(g, l));
        else if (l) {
          var h = Ua(Pt(l, o, e, n));
          g = Ot(g, h + C), I += h;
        }
      }
      if (I) {
        var A = Fo(g >>> 0);
        e.hasNameForId(this.componentId, A) || e.insertRules(this.componentId, A, n(I, ".".concat(A), void (-709 * -3 + -2402 * -4 + -11735), this.componentId)), i = Wt(i, A);
      }
    }
    return i;
  }, t;
}(), hs = Nt.createContext(void (16 * -192 + -9035 * -1 + -5963));
hs.Consumer;
var vo = {}, _a = /* @__PURE__ */ new Set();
function qx(t, o, e) {
  var n = Zr(t), i = t, r = !wo(t), a = o.attrs, s = void (-5396 + 4 * 1349) === a ? _i : a, g = o.componentId, I = void (-19 * -67 + -6793 * 1 + -115 * -48) === g ? function(L, X) {
    var K = typeof L != "string" ? "sc" : Da(L);
    vo[K] = (vo[K] || -56 * 93 + -11 * 877 + 14855) + (1103 + 1073 * -6 + -667 * -8);
    var ee = "".concat(K, "-").concat(yx("6.1.1" + K + vo[K]));
    return X ? "".concat(X, "-").concat(ee) : ee;
  }(o.displayName, o.parentComponentId) : g, C = o.displayName, l = void (-357 * -7 + 3283 + -5782) === C ? function(L) {
    return wo(L) ? "styled.".concat(L) : "Styled(".concat(ss(L), ")");
  }(t) : C, h = o.displayName && o.componentId ? "".concat(Da(o.displayName), "-").concat(o.componentId) : o.componentId || I, A = n && i.attrs ? i.attrs.concat(s).filter(Boolean) : s, y = o.shouldForwardProp;
  if (n && i.shouldForwardProp) {
    var k = i.shouldForwardProp;
    if (o.shouldForwardProp) {
      var B = o.shouldForwardProp;
      y = function(L, X) {
        return k(L, X) && B(L, X);
      };
    } else
      y = k;
  }
  var v = new $x(e, h, n ? i.componentStyle : void (-4504 + 2252 * 2));
  function R(L, X) {
    return function(K, ee, $) {
      var oe = K.attrs, q = K.componentStyle, de = K.defaultProps, Je = K.foldedComponentIds, ft = K.styledComponentId, re = K.target, be = Nt.useContext(hs), Qe = Mo(), De = K.shouldForwardProp || Qe.shouldForwardProp;
      Q.NODE_ENV !== "production" && Vo(ft);
      var ce = function(Ve, rt, Se) {
        var Ge = {};
        Ge.className = void (3 * -883 + 446 * -12 + -9 * -889), Ge.theme = Se;
        for (var at, Fe = Ke(Ke({}, rt), Ge), Ft = -109 * -3 + 5992 + -6319; Ft < Ve.length; Ft += 1) {
          var Ee = un(at = Ve[Ft]) ? at(Fe) : at;
          for (var Xe in Ee)
            Fe[Xe] = Xe === "className" ? Wt(Fe[Xe], Ee[Xe]) : Xe === "style" ? Ke(Ke({}, Fe[Xe]), Ee[Xe]) : Ee[Xe];
        }
        return rt.className && (Fe.className = Wt(Fe.className, rt.className)), Fe;
      }(oe, ee, hx(ee, be, de) || ln), ze = ce.as || re, pe = {};
      for (var Ie in ce)
        ce[Ie] === void 0 || Ie[-16375 + 5 * 3275] === "$" || Ie === "as" || Ie === "theme" || (Ie === "forwardedAs" ? pe.as = ce.forwardedAs : De && !De(Ie, ze) || (pe[Ie] = ce[Ie], De || Q.NODE_ENV !== "development" || oc(Ie) || _a.has(Ie) || !Do.has(ze) || (_a.add(Ie), console.warn('styled-components: it looks like an unknown prop "'.concat(Ie, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var _e = function(Ve, rt) {
        var Se = Mo(), Ge = Ve.generateAndInjectStyles(rt, Se.styleSheet, Se.stylis);
        return Q.NODE_ENV !== "production" && Vo(Ge), Ge;
      }(q, ce);
      Q.NODE_ENV !== "production" && K.warnTooManyClasses && K.warnTooManyClasses(_e);
      var Be = Wt(Je, ft);
      return _e && (Be += " " + _e), ce.className && (Be += " " + ce.className), pe[wo(ze) && !Do.has(ze) ? "class" : "className"] = Be, pe.ref = $, ve(ze, pe);
    }(S, L, X);
  }
  R.displayName = l;
  var S = Nt.forwardRef(R), M = {};
  return M.attrs = !0, M.componentStyle = !0, M.displayName = !0, M.foldedComponentIds = !0, M.shouldForwardProp = !0, M.styledComponentId = !0, M.target = !0, S.attrs = A, S.componentStyle = v, S.displayName = l, S.shouldForwardProp = y, S.foldedComponentIds = n ? Wt(i.foldedComponentIds, i.styledComponentId) : "", S.styledComponentId = h, S.target = n ? i.target : t, Object.defineProperty(S, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(L) {
    this._foldedDefaultProps = n ? function(X) {
      for (var K = [], ee = -337 * -23 + -1565 * 2 + -165 * 28; ee < arguments.length; ee++)
        K[ee - (7739 + -53 * 146)] = arguments[ee];
      for (var $ = 2 * 166 + 4829 + -5161, oe = K; $ < oe.length; $++)
        Xo(X, oe[$], !0);
      return X;
    }({}, i.defaultProps, L) : L;
  } }), Q.NODE_ENV !== "production" && (Ax(l, h), S.warnTooManyClasses = /* @__PURE__ */ function(L, X) {
    var K = {}, ee = !1;
    return function($) {
      if (!ee && (K[$] = !0, Object.keys(K).length >= 3 * -17 + 9916 + -9665)) {
        var oe = X ? ' with the id of "'.concat(X, '"') : "";
        console.warn("Over ".concat(-4463 + 1 * 4663, " classes were generated for component ").concat(L).concat(oe, `.
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
  }(l, h)), kr(S, function() {
    return ".".concat(S.styledComponentId);
  }), r && Is(S, t, M), S;
}
function $a(t, o) {
  for (var e = [t[-6696 + 89 * 17 + 5183]], n = 2801 * -1 + 19 * 229 + -155 * 10, i = o.length; n < i; n += -1987 * 5 + -2662 + 12598 * 1)
    e.push(o[n], t[n + (-1 * -457 + 445 * 13 + 1 * -6241)]);
  return e;
}
var qa = function(t) {
  var o = {};
  return o.isCss = !0, Object.assign(t, o);
};
function ps(t) {
  for (var o = [], e = 5182 + -691 * -4 + 227 * -35; e < arguments.length; e++)
    o[e - 1] = arguments[e];
  if (un(t) || Cn(t)) {
    var n = t;
    return qa(Pt($a(_i, gn([n], o, !0))));
  }
  var i = t;
  return -344 * -2 + 3183 + -3871 === o.length && 19 * -211 + -3283 + 7293 * 1 === i.length && typeof i[-4005 + -15 * -267] == "string" ? Pt(i) : qa(Pt($a(i, o)));
}
function Uo(t, o, e) {
  if (void (-1 * 8469 + 2 * 157 + 8155) === e && (e = ln), !o)
    throw hn(-2038 * -1 + -5830 + -1 * -3793, o);
  var n = function(i) {
    for (var r = [], a = 6174 + 7 * 1029 + -13376; a < arguments.length; a++)
      r[a - (-2076 * -4 + -5800 + -2503)] = arguments[a];
    return t(o, e, ps.apply(void (1 * 6347 + -300 + -6047), gn([i], r, !1)));
  };
  return n.attrs = function(i) {
    return Uo(t, o, Ke(Ke({}, e), { attrs: Array.prototype.concat(e.attrs, i).filter(Boolean) }));
  }, n.withConfig = function(i) {
    return Uo(t, o, Ke(Ke({}, e), i));
  }, n;
}
var ms = function(t) {
  return Uo(qx, t);
}, pn = ms;
Do.forEach(function(t) {
  pn[t] = ms(t);
});
Q.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var ci = "__sc-".concat(Lt, "__");
Q.NODE_ENV !== "production" && Q.NODE_ENV !== "test" && typeof window < "u" && (window[ci] || (window[ci] = -1 * 7507 + 9464 + -1957 * 1), 8674 + -1 * -8422 + -17095 === window[ci] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[ci] += 10666 + 1185 * -9);
const eI = pn.div`
  position: relative;
`, tI = pn.video`
  transform: ${(t) => t.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(t) => t.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class ne extends Error {
  constructor(e, n) {
    super(e);
    D(this, "cause");
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
var wi = ((t) => (t.CONTINUE_DETECTION = "continue-detection", t.SWITCH_CAMERA = "switch-camera", t.TOGGLE_MIRROR = "toggle-mirror", t))(wi || {}), bs = ((t) => (t.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", t.CONTROL = "document-auto-capture:control", t.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", t.DOCUMENT_DETECTION = "document-auto-capture:document-detection", t.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", t.STATE_CHANGED = "document-auto-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", t))(bs || {}), ut = ((t) => (t.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", t.CONTROL = "face-auto-capture:control", t.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", t.FACE_DETECTION = "face-auto-capture:face-detection", t.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", t.STATE_CHANGED = "face-auto-capture:state-changed", t.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", t))(ut || {}), Yn = ((t) => (t.ANIMATION_END = "magnifeye-auto-capture:animation-end", t.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", t))(Yn || {}), nI = ((t) => (t.STATUS_CHANGED = "smile-auto-capture:status-changed", t))(nI || {});
const ys = {};
ys.EYE_NOT_PRESENT = "eye_not_present";
const e0 = ys, we = {};
we.CANDIDATE_SELECTION = "candidate_selection", we.FACE_TOO_CLOSE = "face_too_close", we.FACE_TOO_FAR = "face_too_far", we.FACE_CENTERING = "face_centering", we.FACE_NOT_PRESENT = "face_not_present", we.SHARPNESS_TOO_LOW = "sharpness_too_low", we.BRIGHTNESS_TOO_LOW = "brightness_too_low", we.BRIGHTNESS_TOO_HIGH = "brightness_too_high", we.DEVICE_PITCHED = "device_pitched", we.LEFT_EYE_NOT_PRESENT = "left_" + e0.EYE_NOT_PRESENT, we.RIGHT_EYE_NOT_PRESENT = "right_" + e0.EYE_NOT_PRESENT, we.MOUTH_NOT_PRESENT = "mouth_not_present", we.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", we.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const me = we, ke = {};
ke.isPresent = me.FACE_NOT_PRESENT, ke.isNotPitched = me.DEVICE_PITCHED, ke.isNotSmall = me.FACE_TOO_FAR, ke.isNotLarge = me.FACE_TOO_CLOSE, ke.isNotOutOfBounds = me.FACE_CENTERING, ke.isNotDim = me.BRIGHTNESS_TOO_LOW, ke.isNotBright = me.BRIGHTNESS_TOO_HIGH, ke.isSharp = me.SHARPNESS_TOO_LOW, ke.isLeftEyePresent = me.LEFT_EYE_NOT_PRESENT, ke.isRightEyePresent = me.RIGHT_EYE_NOT_PRESENT, ke.isMouthPresent = me.MOUTH_NOT_PRESENT, ke.isMouthScoreNotTooHigh = me.MOUTH_SCORE_TOO_HIGH, ke.isMouthScoreNotTooLow = me.MOUTH_SCORE_TOO_LOW;
const iI = ke, Zn = {};
Zn.LOADING = "LOADING", Zn.ERROR = "ERROR", Zn.WAITING = "WAITING", Zn.RUNNING = "RUNNING";
const et = Zn;
var We = ((t) => (t.CLOSEUP = "CLOSEUP", t.DISTANT = "DISTANT", t.MIDDLE = "MIDDLE", t))(We || {});
const ws = { ...et };
ws.DONE = "DONE";
const Vt = ws, $i = br(void 0);
$i.displayName = "AppStateContext";
function vs() {
  const t = ji($i);
  if (t === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return t;
}
const oI = $i.Provider, qi = vs, rI = vs;
class Bs extends Le {
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
    return ((o = this.context) == null ? void 0 : o.appState) === et.ERROR ? null : this.props.children;
  }
}
D(Bs, "contextType", $i);
const aI = pn.canvas`
  transform: ${(t) => t.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
var sI = -1 * 8363 + 233 * -10 + 289 * 37;
function O(t, o, e, n, i, r) {
  var a, s, g = {};
  for (s in o)
    s == "ref" ? a = o[s] : g[s] = o[s];
  var I = {};
  I.type = t, I.props = g, I.key = e, I.ref = a, I.__k = null, I.__ = null, I.__b = 0, I.__e = null, I.__d = void (-9454 + -7779 * 1 + 17233), I.__c = null, I.constructor = void (-281 * -24 + 10 * 701 + 1 * -13754), I.__v = --sI, I.__i = -(-1 * -9238 + 115 * -72 + -11 * 87), I.__u = 0, I.__source = i, I.__self = r;
  var C = I;
  if (typeof t == "function" && (a = t.defaultProps))
    for (s in a)
      void (944 * 5 + 8760 + -13480) === g[s] && (g[s] = a[s]);
  return H.vnode && H.vnode(C), C;
}
const gI = pn.div`
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
function cI() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const xI = j0(({
  detectionDetails: t,
  isImageMirror: o
}, e) => cI() ? (console.log(t), O(Me, {
  children: [O(aI, {
    ref: e,
    $isImageMirror: o
  }), O(gI, {
    children: Object.entries(t).map(([n, i]) => O("div", {
      children: [n, ": ", O("strong", {
        children: i
      })]
    }, n))
  })]
})) : null), Ss = (t, o) => {
  const e = ot(o);
  Ce(() => {
    e.current = o;
  }, [o]), Ce(() => {
    const n = (i) => e.current(i);
    return document.addEventListener(t, n), () => {
      document.removeEventListener(t, n);
    };
  }, [t]);
};
function Wi() {
  throw new Error("Cycle detected");
}
var II = Symbol.for("preact-signals");
function Hr() {
  if (rn > 4525 + -2 * 955 + 2614 * -1)
    rn--;
  else {
    for (var t, o = !1; void (-115 + -5 * -23) !== Vn; ) {
      var e = Vn;
      for (Vn = void (5 * -99 + -2 * 778 + -7 * -293), Jo++; e !== void 0; ) {
        var n = e.o;
        if (e.o = void (-3 * 523 + 739 + 830), e.f &= -3, !(-1173 + -1 * -1181 & e.f) && ks(e))
          try {
            e.c();
          } catch (i) {
            !o && (t = i, o = !(-3515 + -95 * -37));
          }
        e = n;
      }
    }
    if (Jo = -181 * 53 + -7387 + 16980, rn--, o)
      throw t;
  }
}
var se = void (763 * 2 + -65 * 95 + 4649), Vn = void 0, rn = 1366 * -1 + -1 * 1356 + 2722 * 1, Jo = 1724 + -41 * -159 + -8243, Vi = 6518 * 1 + 4 * 2150 + -15118;
function Gs(t) {
  if (void (12761 + 1 * -12761) !== se) {
    var o = t.n;
    if (void (-10 * 146 + 85 * -47 + 1091 * 5) === o || o.t !== se)
      return o = { i: 0, S: t, p: se.s, n: void (77 * 97 + 8415 + -418 * 38), t: se, e: void (-1 * -6328 + -6955 + 627), x: void (7592 * -1 + -2 * 589 + 8770), r: o }, se.s !== void 0 && (se.s.n = o), se.s = o, t.n = o, 2438 + 1223 * 3 + -225 * 27 & se.f && t.S(o), o;
    if (o.i === -1)
      return o.i = -2999 * 3 + 6972 * 1 + 2025, void (92 * 49 + -1135 + -3373) !== o.n && (o.n.p = o.p, o.p !== void 0 && (o.p.n = o.n), o.p = se.s, o.n = void (-4201 + 3 * -1448 + -8545 * -1), se.s.n = o, se.s = o), o;
  }
}
function he(t) {
  this.v = t, this.i = -3522 + 4442 * 1 + -920, this.n = void (9715 * -1 + -524 * -2 + 8667), this.t = void (7259 + -118 * -13 + -9 * 977);
}
he.prototype.brand = II, he.prototype.h = function() {
  return !(3 * -2371 + 3065 + 4048);
}, he.prototype.S = function(t) {
  this.t !== t && void (19 * -426 + -3014 + 5554 * 2) === t.e && (t.x = this.t, void (-1601 * 1 + -1 * -4177 + -2576) !== this.t && (this.t.e = t), this.t = t);
}, he.prototype.U = function(t) {
  if (this.t !== void 0) {
    var o = t.e, e = t.x;
    void (9 * -153 + 7527 + -6150) !== o && (o.x = e, t.e = void (-101 * -23 + -110 + -2213)), void (-1745 * -5 + 9681 + -18406) !== e && (e.e = o, t.x = void (4 * 1993 + 5024 + -4332 * 3)), t === this.t && (this.t = e);
  }
}, he.prototype.subscribe = function(t) {
  var o = this;
  return Rr(function() {
    var e = o.value, n = 32 & this.f;
    this.f &= -(7688 + -386 * 11 + -3409);
    try {
      t(e);
    } finally {
      this.f |= n;
    }
  });
}, he.prototype.valueOf = function() {
  return this.value;
}, he.prototype.toString = function() {
  return this.value + "";
}, he.prototype.toJSON = function() {
  return this.value;
}, he.prototype.peek = function() {
  return this.v;
}, Object.defineProperty(he.prototype, "value", { get: function() {
  var t = Gs(this);
  return void (-1909 * -5 + 4647 + -8 * 1774) !== t && (t.i = this.i), this.v;
}, set: function(t) {
  if (se instanceof yt && function() {
    throw new Error("Computed cannot have side-effects");
  }(), t !== this.v) {
    Jo > 1 * 466 + 2390 + 26 * -106 && Wi(), this.v = t, this.i++, Vi++, rn++;
    try {
      for (var o = this.t; void (5883 + 15 * -585 + 2892) !== o; o = o.x)
        o.t.N();
    } finally {
      Hr();
    }
  }
} });
function Zs(t) {
  return new he(t);
}
function ks(t) {
  for (var o = t.s; void (1729 * -1 + 6951 + 2 * -2611) !== o; o = o.n)
    if (o.S.i !== o.i || !o.S.h() || o.S.i !== o.i)
      return !0;
  return !1;
}
function Ks(t) {
  for (var o = t.s; void (31 * -50 + -1 * -407 + -1143 * -1) !== o; o = o.n) {
    var e = o.S.n;
    if (e !== void 0 && (o.r = e), o.S.n = o, o.i = -(1201 * -8 + -7 * -1327 + -320 * -1), void (41 * 111 + 2252 * 2 + -9055) === o.n) {
      t.s = o;
      break;
    }
  }
}
function Hs(t) {
  for (var o = t.s, e = void (7018 * -1 + -645 * -8 + 1858); void (7 * -236 + 8067 + -6415 * 1) !== o; ) {
    var n = o.p;
    -(-15872 + 1221 * 13) === o.i ? (o.S.U(o), void (-1702 + -10 * -454 + 86 * -33) !== n && (n.n = o.n), void (547 * -8 + 9299 + -4923) !== o.n && (o.n.p = n)) : e = o, o.S.n = o.r, void (8054 + 6391 * 1 + -14445) !== o.r && (o.r = void 0), o = n;
  }
  t.s = e;
}
function yt(t) {
  he.call(this, void (-4759 + 1 * 9421 + 4662 * -1)), this.x = t, this.s = void (-35 * 215 + -601 * -9 + 2116), this.g = Vi - (-6259 * 1 + -7196 + 3364 * 4), this.f = 4;
}
(yt.prototype = new he()).h = function() {
  if (this.f &= -(-13 * -632 + -873 + -1835 * 4), -281 * 9 + 2 * -269 + -118 * -26 & this.f)
    return !(-164 * -8 + -2 * -2579 + -6469);
  if (6988 * 1 + 631 * -12 + 56 * 11 == (-4 * -1118 + -1 * -1957 + 3 * -2131 & this.f))
    return !(7349 + 295 * 19 + -12954);
  if (this.f &= -(16 * -296 + 9601 + -4860), this.g === Vi)
    return !(3 * -2083 + 7290 + -1041);
  if (this.g = Vi, this.f |= 1, this.i > -7832 + -22 * -356 && !ks(this))
    return this.f &= -(9963 + 5 * 991 + 12 * -1243), !(-1550 + -6 * -142 + 698);
  var t = se;
  try {
    Ks(this), se = this;
    var o = this.x();
    (44 * -19 + 9382 + -8530 & this.f || this.v !== o || -87 * 101 + 3 * 925 + 2 * 3006 === this.i) && (this.v = o, this.f &= -(-8 * -982 + -2111 * -1 + 5 * -1990), this.i++);
  } catch (e) {
    this.v = e, this.f |= 3464 * 2 + -373 * 13 + -2063, this.i++;
  }
  return se = t, Hs(this), this.f &= -(1 * 2889 + -7016 * -1 + -9903), !0;
}, yt.prototype.S = function(t) {
  if (this.t === void 0) {
    this.f |= -5503 + -191 * -29;
    for (var o = this.s; void (-5443 * 1 + -14 * 122 + 7151) !== o; o = o.n)
      o.S.S(o);
  }
  he.prototype.S.call(this, t);
}, yt.prototype.U = function(t) {
  if (void (-3686 + 1 * -9187 + -7 * -1839) !== this.t && (he.prototype.U.call(this, t), void (-6054 + 4 * -1395 + 11634) === this.t)) {
    this.f &= -33;
    for (var o = this.s; void (-3 * -1367 + 4433 + -8534) !== o; o = o.n)
      o.S.U(o);
  }
}, yt.prototype.N = function() {
  if (!(-37 * 179 + -11 * 691 + 7113 * 2 & this.f)) {
    this.f |= 9510 + 3 * 331 + -10497;
    for (var t = this.t; void (-6273 + 1 * -3217 + 9490) !== t; t = t.x)
      t.t.N();
  }
}, yt.prototype.peek = function() {
  if (this.h() || Wi(), 2947 + -89 * -11 + 391 * -10 & this.f)
    throw this.v;
  return this.v;
}, Object.defineProperty(yt.prototype, "value", { get: function() {
  11376 + -1625 * 7 & this.f && Wi();
  var t = Gs(this);
  if (this.h(), void (-606 + -673 * -9 + -1 * 5451) !== t && (t.i = this.i), 16 & this.f)
    throw this.v;
  return this.v;
} });
function lI(t) {
  return new yt(t);
}
function Os(t) {
  var o = t.u;
  if (t.u = void 0, typeof o == "function") {
    rn++;
    var e = se;
    se = void (-1 * -6539 + 44 * 220 + -16219 * 1);
    try {
      o();
    } catch (n) {
      throw t.f &= -(-1098 * 2 + -726 + -86 * -34), t.f |= -37 * -262 + 5 * 242 + 8 * -1362, Or(t), n;
    } finally {
      se = e, Hr();
    }
  }
}
function Or(t) {
  for (var o = t.s; void (-4538 + -191 * 5 + 5493) !== o; o = o.n)
    o.S.U(o);
  t.x = void (11841 + 3 * -3947), t.s = void (-8831 + 17 * -125 + -11 * -996), Os(t);
}
function uI(t) {
  if (se !== this)
    throw new Error("Out-of-order effect");
  Hs(this), se = t, this.f &= -(6109 + -2734 * -2 + -5 * 2315), -383 * 25 + 3 * 834 + 73 * 97 & this.f && Or(this), Hr();
}
function kn(t) {
  this.x = t, this.u = void (113 * 6 + -9024 + -107 * -78), this.s = void (1 * 3669 + -62 * -50 + 1 * -6769), this.o = void (2244 + 12 * 563 + -9e3), this.f = -9468 + 43 * -177 + 71 * 241;
}
kn.prototype.c = function() {
  var t = this.S();
  try {
    if (393 * -19 + 7553 + -78 & this.f || void (-371 + 10 * -879 + 9161) === this.x)
      return;
    var o = this.x();
    typeof o == "function" && (this.u = o);
  } finally {
    t();
  }
}, kn.prototype.S = function() {
  -8615 + 718 * 12 & this.f && Wi(), this.f |= 9221 + -7 * 1181 + 953 * -1, this.f &= -(1 * -6190 + 1 * -7069 + 13268), Os(this), Ks(this), rn++;
  var t = se;
  return se = this, uI.bind(this, t);
}, kn.prototype.N = function() {
  !(-1 * 3499 + 47 * 109 + -811 * 2 & this.f) && (this.f |= -9015 + -2 * -1601 + 5815, this.o = Vn, Vn = this);
}, kn.prototype.d = function() {
  this.f |= -28 * 100 + -3636 + 6444, 3174 + -6391 * -1 + -9564 & this.f || Or(this);
};
function Rr(t) {
  var o = new kn(t);
  try {
    o.c();
  } catch (e) {
    throw o.d(), e;
  }
  return o.d.bind(o);
}
var Bo;
function on(t, o) {
  H[t] = o.bind(null, H[t] || function() {
  });
}
function xi(t) {
  Bo && Bo(), Bo = t && t.S();
}
function Rs(t) {
  var o = this, e = t.data, n = dn(e);
  n.value = e;
  var i = tt(function() {
    for (var r = o.__v; r = r.__; )
      if (r.__c) {
        r.__c.__$f |= 2039 + 431 * -5 + -30 * -4;
        break;
      }
    return o.__$u.c = function() {
      var a;
      !H0(i.peek()) && -20 * -203 + 1 * 4043 + -8100 === ((a = o.base) == null ? void (2983 + -19 * 157) : a.nodeType) ? o.base.data = i.peek() : (o.__$f |= 1, o.setState({}));
    }, lI(function() {
      var a = n.value.value;
      return -38 * -169 + -5241 + -1 * 1181 === a ? -481 + 1161 * -3 + 3964 : !(5879 + -4217 * -2 + -14313) === a ? "" : a || "";
    });
  }, []);
  return i.value;
}
Rs.displayName = "_st";
var Qo = {};
Qo.configurable = !(-2548 + -1 * -9073 + -261 * 25), Qo.value = void 0;
var zo = {};
zo.configurable = !(820 * 8 + -7848 + 1288), zo.value = Rs;
var _o = {};
_o.configurable = !(-4303 * -1 + -8 * 752 + 571 * 3), _o.get = function() {
  var t = {};
  return t.data = this, t;
};
var $o = {};
$o.configurable = !(-1 * 3559 + 9007 + -5448), $o.value = 1;
var Bn = {};
Bn.constructor = Qo, Bn.type = zo, Bn.props = _o, Bn.__b = $o, Object.defineProperties(he.prototype, Bn), on("__b", function(t, o) {
  if (typeof o.type == "string") {
    var e, n = o.props;
    for (var i in n)
      if (i !== "children") {
        var r = n[i];
        r instanceof he && (e || (o.__np = e = {}), e[i] = r, n[i] = r.peek());
      }
  }
  t(o);
}), on("__r", function(t, o) {
  xi();
  var e, n = o.__c;
  n && (n.__$f &= -(-7645 + -1 * 4882 + 12529), void (9300 + 166 * -18 + -6312) === (e = n.__$u) && (n.__$u = e = function(i) {
    var r;
    return Rr(function() {
      r = this;
    }), r.c = function() {
      n.__$f |= 1064 + -1 * 1063, n.setState({});
    }, r;
  }())), xi(e), t(o);
}), on("__e", function(t, o, e, n) {
  xi(), t(o, e, n);
}), on("diffed", function(t, o) {
  xi();
  var e;
  if (typeof o.type == "string" && (e = o.__e)) {
    var n = o.__np, i = o.props;
    if (n) {
      var r = e.U;
      if (r)
        for (var a in r) {
          var s = r[a];
          void (-9281 * 1 + -8456 + -1 * -17737) !== s && !(a in n) && (s.d(), r[a] = void 0);
        }
      else
        e.U = r = {};
      for (var g in n) {
        var I = r[g], C = n[g];
        void (5493 * -1 + -1332 + 975 * 7) === I ? (I = CI(e, g, C, i), r[g] = I) : I.o(C, i);
      }
    }
  }
  t(o);
});
function CI(t, o, e, n) {
  var i = o in t && t.ownerSVGElement === void 0, r = Zs(e);
  return { o: function(a, s) {
    r.value = a, n = s;
  }, d: Rr(function() {
    var a = r.value.value;
    n[o] !== a && (n[o] = a, i ? t[o] = a : a ? t.setAttribute(o, a) : t.removeAttribute(o));
  }) };
}
on("unmount", function(t, o) {
  if (typeof o.type == "string") {
    var e = o.__e;
    if (e) {
      var n = e.U;
      if (n) {
        e.U = void (-2774 + -2 * -1387);
        for (var i in n) {
          var r = n[i];
          r && r.d();
        }
      }
    }
  } else {
    var a = o.__c;
    if (a) {
      var s = a.__$u;
      s && (a.__$u = void (47 * -53 + -1103 + 3594 * 1), s.d());
    }
  }
  t(o);
}), on("__h", function(t, o, e, n) {
  (n < 2 * 343 + -7585 + 6902 || -5 * -105 + 1 * -3785 + 3269 === n) && (o.__$f |= 6062 + -1 * 5827 + -233 * 1), t(o, e, n);
}), Le.prototype.shouldComponentUpdate = function(t, o) {
  var e = this.__$u;
  if (!(e && void (-4315 + 1166 * -3 + -601 * -13) !== e.s || 4 & this.__$f))
    return !(5 * -1637 + 6695 + 1490);
  if (4991 + -10 * -769 + -12678 & this.__$f)
    return !(-54 * -10 + -271 * 5 + -815 * -1);
  for (var n in o)
    return !(-5338 + 1 * 5338);
  for (var i in t)
    if (i !== "__source" && t[i] !== this.props[i])
      return !(-15 * 256 + 22 * 83 + -1 * -2014);
  for (var r in this.props)
    if (!(r in t))
      return !(1027 * -6 + -9801 + -51 * -313);
  return !(100 * 23 + -25 * -122 + -5349);
};
function dn(t) {
  return tt(function() {
    return Zs(t);
  }, []);
}
const dI = (t) => {
  const o = dn(!1);
  return Ss(t, (n) => {
    n.detail && (o.value = n.detail.animationEnd);
  }), o;
};
var Ws = ((t) => (t.DOCUMENT = "document-auto-capture:dev", t.FACE = "face-auto-capture:dev", t))(Ws || {});
const qo = {};
qo.SIMD = "simd", qo.NO_SIMD = "no-simd";
const t0 = qo, er = {};
er.FREEMIUM = "Freemium", er.PREMIUM = "Premium";
const tr = er, vi = {};
vi.VISIBLE = "VISIBLE", vi.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", vi.HIDDEN = "HIDDEN";
const En = vi;
function n0(t) {
  t.getTracks().forEach((e) => {
    e.stop();
  });
}
function fI(t, o) {
  if (!t)
    return o;
  const { detectionRecord: e, hashedDetectedImages: n } = t;
  o.hashedDetectedImages && (n == null || n.push(...o.hashedDetectedImages)), o.detectionRecord && (e == null || e.push(...o.detectionRecord));
  const i = { ...t };
  return i.hashedDetectedImages = n, i.detectionRecord = e, i;
}
const AI = 6 * -616 + -122 * 15 + 3 * 1842 + 0.4, hI = -348 * -2 + -31 * 303 + 8697 + 0.16, pI = -8021 * 1 + 6970 + -1 * -1051 + 0.2, mI = 1 * -1363 + 190 + 1173 + 0.05, bI = 0, nr = {};
nr.min = -1, nr.max = 1;
const i0 = nr, o0 = 5890 + 3 * 1502 + -10396, yI = -15 * -425 + -7533 + 1158 + 0.3, wI = 0 + 0.2, vI = -5639 * -1 + 2977 + -2154 * 4 + 0.85, BI = -29 * 327 + 29 * 299 + 2 * 421, SI = -1 * 9068 + -16 * 140 + 11317 + 0.8100000000000005, Bi = {};
Bi.minDuration = 1e3, Bi.maxDuration = 2500, Bi.minFrames = 10;
const So = Bi, ir = {};
ir.max = 100, ir.min = 10;
const r0 = ir, GI = -5449 + 586 * -15 + -1 * -14959, ZI = 1632 + 1432 * -1, kI = 3, Vs = "AES-CBC", Es = "RSA-OAEP", KI = "SHA-256", HI = "image/jpeg", OI = 8, RI = 1 * -4364 + -1006 + 5410, WI = "SAM v1.39.3 for idcards", VI = "dot_embedded_bg.wasm", EI = (t, o, e = HI) => new Promise((n) => {
  t.toBlob((i) => {
    if (!i)
      throw new Error("Canvas to Blob failed");
    n(i);
  }, e, o);
}), Ps = async (t) => EI(t, -10258 + -1 * -10348), PI = (t, o) => {
  const e = document.createElement("canvas");
  e.width = o.width, e.height = o.height;
  const n = e.getContext("2d");
  if (!n)
    throw new Error("cropImage ctx error");
  return n.drawImage(t, o.shiftX, o.shiftY, o.width, o.height, -6914 * -1 + 137 * -55 + 23 * 27, -687 * -1 + 5045 * 1 + -1 * 5732, e.width, e.height), e;
}, NI = (t) => {
  const o = t.getContext("2d");
  if (!o)
    throw new Error("getImageDataForSam ctx error");
  const { data: e } = o.getImageData(-1 * 1301 + 4 * -2320 + 10581, -9618 + 17 * 85 + 8173, t.width, t.height);
  return e;
}, Ns = (t, o, e, n) => {
  const i = t.getContext("2d");
  i && (i.beginPath(), n ? (i.fillStyle = e, i.fillRect(o.topLeft.x, o.topLeft.y, o.width, o.height)) : (i.strokeStyle = e, i.rect(o.topLeft.x, o.topLeft.y, o.width, o.height)), i.stroke());
}, Go = (t, o, e) => {
  const { height: n, shiftX: i, shiftY: r, width: a } = o, s = {};
  s.x = i, s.y = r;
  const g = {};
  g.topLeft = s, g.width = a, g.height = n, g.color = e, Ns(t, g, e);
}, Pn = (t, o, e, n = -10 * -636 + -4567 * -2 + 61 * -254) => {
  const i = t.getContext("2d");
  i && (i.fillStyle = e, i.fillRect(o.x + n, o.y + n, 7, 3 * 1556 + 1883 + 16 * -409), i.beginPath());
}, LI = (t, o) => {
  const e = t.getContext("2d");
  e && e.drawImage(o, -8137 + 1 * -4062 + 12199, -1 * 8272 + -558 + -1766 * -5);
}, Ls = br(null), Ts = () => {
  const t = ji(Ls);
  if (!t)
    throw new Error("Missing provider for CameraOptionsContext");
  return t;
}, TI = (t) => {
  var g, I, C;
  const {
    cameraFacing: o,
    licensePath: e,
    onError: n,
    onPhotoTaken: i,
    sessionToken: r,
    thresholds: a,
    wasmDirectoryPath: s
  } = t;
  return {
    onPhotoTaken: i,
    onError: n,
    cameraFacing: o ?? "user",
    wasmDirectoryPath: s,
    licensePath: e,
    sessionToken: r,
    thresholds: {
      faceConfidence: (a == null ? void 0 : a.faceConfidence) ?? AI,
      minFaceSizeRatio: (a == null ? void 0 : a.minFaceSizeRatio) ?? hI,
      maxFaceSizeRatio: (a == null ? void 0 : a.maxFaceSizeRatio) ?? pI,
      sharpnessThreshold: (a == null ? void 0 : a.sharpnessThreshold) ?? yI,
      brightnessLowThreshold: (a == null ? void 0 : a.brightnessLowThreshold) ?? wI,
      brightnessHighThreshold: (a == null ? void 0 : a.brightnessHighThreshold) ?? vI,
      outOfBoundsThreshold: (a == null ? void 0 : a.outOfBoundsThreshold) ?? mI,
      devicePitchAngleThreshold: (a == null ? void 0 : a.devicePitchAngleThreshold) ?? BI,
      mouth: {
        confidence: ((g = a == null ? void 0 : a.mouth) == null ? void 0 : g.confidence) ?? bI,
        status: {
          min: ((I = a == null ? void 0 : a.mouth) == null ? void 0 : I.status.min) ?? i0.min,
          max: ((C = a == null ? void 0 : a.mouth) == null ? void 0 : C.status.max) ?? i0.max
        }
      },
      leftEye: (a == null ? void 0 : a.leftEye) ?? {
        confidence: o0
      },
      rightEye: (a == null ? void 0 : a.rightEye) ?? {
        confidence: o0
      }
    }
  };
}, YI = ({
  cameraOptions: t,
  children: o
}) => {
  const e = tt(() => ({
    faceCameraOptions: TI(t)
  }), [t]);
  return O(Ls.Provider, {
    value: e,
    children: o
  });
}, DI = 0 + 0.75, FI = 13 * 203 + -383 * 20 + 5023, XI = -13481 + -1 * -14081, jI = 0, Ys = (t, o) => {
  const e = {};
  e.detail = o, document.dispatchEvent(new CustomEvent(t, e));
}, Yi = class Yi {
  constructor() {
    D(this, "lastDetails", {});
    D(this, "delayedTime", -8661 * -1 + 34 * -275 + 689);
  }
  static getInstance() {
    return !this._instance && (this._instance = new Yi()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 0;
  }
  isDetailChanged(o, e) {
    return JSON.stringify(e) !== JSON.stringify(this.lastDetails[o]) ? (this.lastDetails[o] = e, !0) : !1;
  }
  dispatchCustomEventOnChange(o, e) {
    this.isDetailChanged(o, e) && Ys(o, e);
  }
  dispatchDelayedCustomEventOnChange(o, e, n) {
    const i = performance.now();
    i - this.delayedTime > n && (this.dispatchCustomEventOnChange(o, e), this.delayedTime = i);
  }
};
D(Yi, "_instance");
let Dn = Yi;
const Mn = Dn.getInstance(), a0 = (t, o, e = XI) => {
  const n = {};
  n.instructionCode = o;
  const i = n;
  Mn.dispatchDelayedCustomEventOnChange(t, i, e);
}, MI = (t, o) => {
  Mn.dispatchCustomEventOnChange(t, o);
}, UI = (t, o) => {
  const e = {};
  e.size = o;
  const n = e;
  Mn.dispatchCustomEventOnChange(t, n);
}, JI = (t, o, e) => {
  const n = o.confidence < e ? void 0 : o, i = {};
  i.detectedObject = n;
  const r = i;
  Mn.dispatchCustomEventOnChange(t, r);
}, QI = (t, o, e) => {
  const n = {};
  n.image = e, n.data = {}, n.data.detection = o, n.data.imageResolution = {}, n.data.imageResolution.width = e.width, n.data.imageResolution.height = e.height;
  const i = n;
  Mn.dispatchCustomEventOnChange(t, i);
}, or = (t, o) => {
  Ys(t, o);
};
var Re = {};
Re.VITE_FACE_COUNTLY_APP_KEY = "5f83e83ee4cee1ab6e5bbf86e215644473299675", Re.VITE_MAGNIFEYE_COUNTLY_APP_KEY = "d5ca54dabfb1a2c72d7090c9c8980252a879da44", Re.VITE_DOCUMENT_COUNTLY_APP_KEY = "065cf6e242fc5e785cd17eebfbfbbd212a33133b", Re.VITE_COUNTLY_URL = "https://innovatrics.count.ly", Re.VITE_SMILE_COUNTLY_APP_KEY = "d64319129bb0ee02eccfab418edba9629a97d6b6", Re.VITE_RSA_PUBLIC_KEY = "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", Re.BASE_URL = "/", Re.MODE = "production", Re.DEV = !1, Re.PROD = !0, Re.SSR = !1, Re.VITE_PACKAGE_VERSION = "6.1.0";
var zI = Re;
const _I = () => {
  var t;
  return ((t = zI.VITE_APP_ENV) == null ? void 0 : t.toLowerCase()) === "dev";
}, $I = (t, o) => {
  if (_I()) {
    const e = {};
    e.candidateSelectionImages = o;
    const n = e;
    Dn.getInstance().dispatchCustomEventOnChange(t, n);
  }
}, qI = (t, o) => {
  const { cameraResolution: e, shouldMirror: n } = o;
  Ce(() => {
    if (!e)
      return;
    const i = {};
    i.cameraResolution = e, i.isMirroring = n, MI(t, i);
  }, [e, n, t]);
}, Ds = (t) => t.length < -424 + -11 * -521 + -5306 ? -1 * -8743 + -9298 * 1 + -555 * -1 : t.reduce((e, n) => e + n, 1178 + -196 * -50 + -998 * 11) / t.length, Un = (t) => Number.parseFloat(t.toFixed(1328 + -5 * 265)), el = (t) => {
  const o = t.getContext("2d");
  o && o.clearRect(0, 0, o.canvas.width, o.canvas.height);
};
class tl {
  static async getVideoInputDeviceList() {
    return (await navigator.mediaDevices.enumerateDevices()).filter((e) => e.kind === "videoinput");
  }
}
const eo = (t, o) => Math.min(t, o), nl = (t, o) => {
  const e = eo(o.width, o.height);
  return Un(t * e);
}, Fs = ({ height: t, width: o }) => {
  const e = eo(o, t), n = e / (-2 * -4853 + 6229 + -2 * 7966) * (-8178 + 1 * 4194 + -2 * -1994);
  if (o > t) {
    const r = {};
    return r.width = n, r.height = e, r;
  }
  const i = {};
  return i.width = e, i.height = n, i;
}, Xs = ({ height: t, width: o }) => {
  const e = eo(o, t) * DI, n = (o - e) / (-2222 * 1 + 2 * 797 + 10 * 63), i = (t - e) / (1421 + 9676 * 1 + -11095), r = {};
  return r.shiftX = n, r.shiftY = i, r.width = e, r.height = e, r;
}, il = (t) => {
  const { height: o, shiftX: e, shiftY: n, width: i } = Xs(t), r = {};
  return r.shiftX = e / t.width, r.shiftY = n / t.height, r.width = i / t.width, r.height = o / t.height, r;
}, ol = (t, o) => nl(t, o) * FI, rl = "@innovatrics/dot-common-auto-capture", al = "6.1.0", sl = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, gl = {
  "@dot/proto-files": "1.0.3",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.2.2",
  comlink: "^4.4.1",
  preact: "^10.19.3",
  "styled-components": "^6.1.1",
  "wasm-feature-detect": "^1.6.1"
}, cl = {
  "@preact/preset-vite": "^2.7.0",
  "@testing-library/preact": "^3.2.3",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.3.3",
  vite: "^5.0.10",
  vitest: "^1.0.4"
}, xl = {
  name: rl,
  private: !0,
  version: al,
  scripts: sl,
  dependencies: gl,
  devDependencies: cl
}, js = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), s0 = () => {
  const t = /Android/i.test(navigator.userAgent), o = /Firefox/i.test(navigator.userAgent);
  return t && o;
}, Il = () => {
  const t = navigator.userAgent.includes("Chrome"), o = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return t && o ? !1 : o;
}, rr = (t) => new Promise((o) => {
  setTimeout(o, t);
}), tn = (t) => JSON.parse(JSON.stringify(t, (o, e) => typeof e == "number" ? Un(e) : e)), Ms = () => xl.version, Us = (t) => new URL(t).hostname.replace("www.", ""), ll = () => Us(window.location.href) === "localhost", Ii = (t) => Object.entries(t).map(([o, e]) => encodeURIComponent(o) + "=" + encodeURIComponent(e)).join("&"), ul = (t, o) => {
  const e = t && performance.now() - t;
  return o >= So.minFrames ? e > So.minDuration : e > So.maxDuration;
}, Cl = (t, o) => JSON.stringify(t) === JSON.stringify(o) ? o : t, g0 = (t, o) => Math.abs(t - o);
function dl(t, o) {
  let e;
  return (...n) => {
    const i = () => {
      clearTimeout(e), e = void 0, t(...n);
    };
    e === void (2 * -341 + -259 * 1 + 941) && (e = setTimeout(i, o));
  };
}
const fl = (t) => t === bs.CONTROL ? !js() : !0, Al = (t, o) => {
  const { appState: e, handleAppStateChange: n, handleError: i } = qi(), [r, a] = He(), s = tt(() => {
    const I = o == null ? void 0 : o.getCameraSettings().facingMode;
    return I ? r ?? I === "user" : r ?? fl(t);
  }, [o, r, t]);
  Ce(() => {
    const I = () => {
      e !== et.LOADING && n(et.RUNNING);
    }, C = () => {
      a(r === void 0 ? !s : !r);
    }, l = async () => {
      if (o) {
        n(et.LOADING);
        try {
          await o.switchCamera(), n(et.RUNNING);
        } catch (A) {
          if (A instanceof Error) {
            i(ne.fromCameraError(A));
            return;
          }
        }
        a(void 0);
      }
    }, h = (A) => {
      var y;
      switch ((y = A.detail) == null ? void 0 : y["instruction"]) {
        case wi.CONTINUE_DETECTION:
          I();
          break;
        case wi.TOGGLE_MIRROR:
          C();
          break;
        case wi.SWITCH_CAMERA:
          l();
          break;
        default:
          return;
      }
    };
    return document.addEventListener(t, h), () => {
      document.removeEventListener(t, h);
    };
  }, [e, o, i, r, n, s, t]);
  const g = {};
  return g.shouldMirror = s, g;
};
class Js {
  constructor() {
    D(this, "canvasElement");
    D(this, "context");
    this.canvasElement = document.createElement("canvas"), this.context = this.canvasElement.getContext("2d");
  }
  cloneMutable(o) {
    this.canvasElement.width = o.width, this.canvasElement.height = o.height, LI(this.canvasElement, o);
  }
}
const Si = {};
Si.width = 1920, Si.height = 1080, Si.facingMode = "user";
const hl = Si;
class Nn extends tl {
  constructor(e) {
    super();
    D(this, "videoRef");
    D(this, "mediaStream", null);
    D(this, "videoTrack", null);
    D(this, "availableCameraProperties", []);
    D(this, "canvas");
    this.videoRef = e, this.canvas = new Js();
  }
  async initWebcam(e = {}) {
    const n = await this.getBestCamera(e.facingMode);
    await this.getAvailableCamerasInfo();
    const i = this.getConstraints(e, n);
    await this.startWebcam(i), Il() && await this.startWebcam(i);
  }
  async startWebcam(e = {}) {
    var n;
    return this.stopCamera(), s0() && await rr(1 * -7906 + -38 * 1 + -8394 * -1), this.mediaStream = await navigator.mediaDevices.getUserMedia(e), this.videoRef.srcObject = this.mediaStream, await this.videoRef.play(), this.videoTrack = (n = this.mediaStream) == null ? void 0 : n.getVideoTracks()[-1771 * 1 + 15 * -439 + 2089 * 4], this.checkVideoTrackSettings(), this.videoTrack;
  }
  checkVideoTrackSettings() {
    var i;
    const e = (i = this.videoTrack) == null ? void 0 : i.getSettings();
    if (!(e != null && e.height) || !(e != null && e.width))
      throw new ne("Could not init camera settings");
    if (Math.min(e == null ? void 0 : e.width, e == null ? void 0 : e.height) < GI)
      throw this.stopCamera(), new ne("Could not init video because of low camera resolution: " + e.width + "x" + e.height + ".");
  }
  async getBestCamera(e) {
    const n = {};
    return n.video = !0, this.mediaStream = await navigator.mediaDevices.getUserMedia(n), this.stopCamera(), js() && e === "environment" ? (await Nn.getVideoInputDeviceList()).find((a) => a.label.includes("back") && a.label.includes("0")) : void (2 * -4887 + -5005 + 14779);
  }
  async getAvailableCamerasInfo() {
    const e = await Nn.getVideoInputDeviceList();
    for (const n of e) {
      s0() && await rr(44 * -71 + 7692 + -58 * 71);
      try {
        const i = {};
        i.deviceId = n.deviceId, i.width = 480;
        const r = {};
        r.video = i;
        const a = await navigator.mediaDevices.getUserMedia(r), [s] = a.getVideoTracks(), g = s.getSettings(), I = { ...g };
        I.deviceName = s.label;
        const C = {};
        C.cameraProperties = I;
        const l = C;
        this.availableCameraProperties.push(l), n0(a);
      } catch (i) {
        i instanceof Error && ne.logError(i);
      }
    }
  }
  getConstraints(e, n) {
    const i = { ...hl, ...e };
    i.deviceId = n ? { exact: n.deviceId } : void (-166 * 16 + 6276 + -3620);
    const r = {};
    return r.video = i, r.audio = !1, r;
  }
  takePhoto() {
    var n;
    const e = (n = this.videoTrack) == null ? void 0 : n.getSettings();
    if (!(e != null && e.width))
      throw new ne("Cant take photo - video width is undefined");
    if (!(e != null && e.height))
      throw new ne("Cant take photo - video height is undefined");
    if (!this.canvas.context)
      throw new ne("Cant take photo - cant create context");
    return this.canvas.canvasElement.width = e.width, this.canvas.canvasElement.height = e.height, this.canvas.context.drawImage(this.videoRef, -2 * -3109 + -1 * -1669 + -7887, 52 * -178 + -243 * -29 + 2209), this.canvas.canvasElement;
  }
  getCameraResolution() {
    var i;
    const e = (i = this.videoTrack) == null ? void 0 : i.getSettings();
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
    const e = this.videoTrack.getConstraints(), n = this.videoTrack.getSettings(), i = await Nn.getVideoInputDeviceList();
    if (i.length <= 1)
      return;
    const r = i.findIndex((g) => g.deviceId === n.deviceId), a = i[r + (2221 * -2 + 504 + 3 * 1313)] ?? i[0], s = this.getConstraints(e, a);
    await this.startWebcam(s);
  }
  stopCamera() {
    this.mediaStream && (n0(this.mediaStream), this.videoRef.srcObject = null);
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
const pl = (t, o) => {
  var g;
  const e = ot(), { handleError: n, setIsCameraReady: i } = qi(), [r, a] = He(), s = Hi((I) => {
    a((C) => Cl(I, C));
  }, []);
  return Ce(() => ((async () => {
    if (!(t != null && t.current)) {
      n(new ne("Something went wrong during video initialization"));
      return;
    }
    const C = new Nn(t.current);
    try {
      const l = {};
      l.facingMode = o, await C.initWebcam(l);
    } catch (l) {
      if (l instanceof Error) {
        n(ne.fromCameraError(l));
        return;
      }
    }
    i(!0), s(C.getCameraResolution()), e.current = C;
  })(), function() {
    e.current && e.current.stopCamera();
  }), [o, n, i, t, s]), { cameraHandler: e.current, cameraSettings: (g = e.current) == null ? void 0 : g.getCameraSettings(), cameraResolution: r, onCameraResolutionChange: s };
}, ml = (t, o) => {
  const [e, n] = He();
  Ce(() => {
    const i = () => {
      !t.current || e === window.innerWidth || (n(window.innerWidth), UI(o, t.current.getBoundingClientRect()));
    };
    return i(), window.addEventListener("resize", i), () => {
      window.removeEventListener("resize", i);
    };
  }, [t, o, e]);
};
class Wr extends Array {
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
    this.length === this.size && this.splice(501 + -1 * 501, e.length), this.push(...e);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(248 + -199 * 38 + 7314);
  }
}
const bl = (t, o) => {
  const { height: e, shiftX: n, shiftY: i, width: r } = o;
  return !(t.x < n || t.x > n + r || t.y < i || t.y > i + e);
}, yl = (t, o) => Object.values(t).every((e) => bl(e, o));
function wl(t) {
  return Un(Math.abs(t));
}
const vl = () => {
  const [t, o] = He(null), e = ot(new Wr(1 * -184 + 2921 + -2732));
  function n(r) {
    const { z: a } = r.accelerationIncludingGravity || {};
    if (!a)
      return;
    e.current.pushFixed(wl(a));
    const s = Un(Ds(e.current)), g = {};
    g.z = s, o(g);
  }
  Ce(() => (window.addEventListener("devicemotion", dl(n, RI), !0), () => {
    window.removeEventListener("devicemotion", n, !0);
  }), []);
  const i = {};
  return i.acceleration = t, i;
}, Vr = (t) => {
  const { height: o, width: e } = Fs(t), n = (t.width - e) / (1543 + 5 * -339 + 154), i = (t.height - o) / (-1602 + -401 * -9 + -5 * 401), r = {};
  return r.shiftX = n, r.shiftY = i, r.width = e, r.height = o, r;
}, Qs = (t, o) => {
  const { height: e, width: n } = Fs(t), i = eo(t.width, t.height), r = n - i * o * (-1528 * 5 + -1618 * -3 + 164 * 17), a = e - i * o * (6078 + -206 * 45 + 1 * 3194), s = (t.width - r) / (16 * -523 + -1219 * -8 + -1382 * 1), g = (t.height - a) / (6613 * -1 + -1311 * 7 + -5264 * -3), I = {};
  return I.shiftX = s, I.shiftY = g, I.width = r, I.height = a, I;
}, $t = (t, o) => {
  const { shiftX: e, shiftY: n } = Vr(t), i = {};
  return i.x = o.x + e, i.y = o.y + n, i;
}, Bl = (t, o) => ({ ...o, leftEye: { ...o.leftEye, center: $t(t, o.leftEye.center) }, rightEye: { ...o.rightEye, center: $t(t, o.rightEye.center) }, mouth: { ...o.mouth, center: $t(t, o.mouth.center) }, topLeft: $t(t, o.topLeft), bottomRight: $t(t, o.bottomRight), faceCenter: $t(t, o.faceCenter) }), zs = (t, o) => {
  const { faceCenter: e, faceSize: n } = t, i = ol(n, o), r = {};
  r.x = e.x, r.y = e.y - i;
  const a = {};
  a.x = e.x + i, a.y = e.y;
  const s = {};
  s.x = e.x, s.y = e.y + i;
  const g = {};
  g.x = e.x - i, g.y = e.y;
  const I = {};
  return I.top = r, I.right = a, I.bottom = s, I.left = g, tn(I);
}, Sl = (t, o) => {
  const {
    bottomRight: e,
    faceCenter: n,
    topLeft: i
  } = o, r = {
    topLeft: i,
    width: e.x - i.x,
    height: e.y - i.y
  };
  Ns(t, r, "rgba(255, 0, 0, 0.3)", !0), Pn(t, n, "lime");
}, Gl = (t, o, e) => {
  const n = zs(o, e);
  Object.values(n).map((i) => Pn(t, i, "orange"));
}, Zl = ({
  appTier: t,
  cameraResolution: o,
  detectionDetails: e,
  isImageMirror: n
}) => {
  const {
    faceCameraOptions: {
      thresholds: i
    }
  } = Ts(), r = ot(null);
  if (Ce(() => {
    if (!r.current)
      return;
    r.current.width = o.width, r.current.height = o.height, el(r.current);
    const y = Vr(o), k = Qs(o, i.outOfBoundsThreshold), B = Xs(o);
    e.value && (Sl(r.current, e.value.face), Gl(r.current, e.value.face, o), Go(r.current, y, "lime"), Go(r.current, k, "yellow"), Go(r.current, B, "blue"), Pn(r.current, e.value.face.leftEye.center, "cyan"), Pn(r.current, e.value.face.rightEye.center, "cyan"), Pn(r.current, e.value.face.mouth.center, "cyan"));
  }, [o, i, e.value]), !e.value)
    return null;
  const {
    detectionTime: a,
    face: s,
    fps: g,
    instructionCode: I,
    invalidValidators: C,
    resolution: l,
    samVersion: h
  } = e.value, A = {
    Confidence: s.confidence,
    Brightness: s.brightness,
    Sharpness: s.sharpness,
    "Face size": s.faceSize,
    "Left eye confidence": s.leftEye.confidence,
    "Left eye status": s.leftEye.status,
    "Right eye confidence": s.rightEye.confidence,
    "Right eye status": s.rightEye.status,
    "Mouth confidence": s.mouth.confidence,
    "Mouth status": s.mouth.status,
    "Detection time": a,
    FPS: g,
    Tier: t,
    Instruction: I,
    Resolution: JSON.stringify(l),
    "Component version": "6.1.0"
  };
  return h && (A["SAM version"] = h), C.length > 0 && (A["Invalid validators"] = C.join(", ")), O(xI, {
    ref: r,
    cameraResolution: o,
    detectionDetails: A,
    isImageMirror: n
  });
};
function kl(t) {
  return O("rect", {
    fill: "#000",
    ...t,
    rx: "50%"
  });
}
function Kl(t) {
  const [o, e] = He(!1), n = () => e((a) => !a), i = "" + o;
  jn(() => {
    function a() {
      if (!t.current)
        return;
      const C = new MutationObserver(() => {
        n();
      }), l = {};
      return l.childList = !0, l.subtree = !0, l.attributes = !0, C.observe(t.current, l), C;
    }
    function s() {
      var h;
      if (!((h = t.current) != null && h["parentElement"]))
        return;
      const C = new MutationObserver((A) => {
        A.find((k) => {
          for (const B of k.removedNodes)
            if (B === t.current)
              return !0;
        }) && n(), A.forEach((k) => {
          k.addedNodes.forEach((B) => {
            var v;
            (v = B.parentElement) == null || v.removeChild(B);
          });
        });
      }), l = {};
      return l.childList = !0, C.observe(t.current.parentElement, l), C;
    }
    const g = a(), I = s();
    return () => {
      I == null || I.disconnect(), g == null || g.disconnect();
    };
  });
  const r = {};
  return r.key = i, r;
}
const Hl = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function Ol({
  cutOut: t,
  height: o,
  width: e
}) {
  const n = ot(null), {
    key: i
  } = Kl(n);
  return O("div", {
    ref: n,
    style: Hl,
    children: O("svg", {
      viewBox: `0 0 ${e} ${o}`,
      children: [O("defs", {
        children: [O("mask", {
          id: "placeholder",
          children: [O("rect", {
            fill: "#fff",
            height: "100%",
            width: "100%"
          }), t]
        }), O("pattern", {
          height: window.innerWidth > 480 ? "400" : "900",
          id: "innooverlay",
          patternUnits: "userSpaceOnUse",
          viewBox: "0 40 300 200",
          width: window.innerWidth > 480 ? "350" : "700",
          x: "0",
          y: "0",
          children: [O("g", {
            transform: "translate(100, 170)",
            children: [O("path", {
              d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M4.40992 0C2.42825 0 0.833252 1.59517 0.833252 3.57704C0.833252 5.55891 2.42825 7.15408 4.40992 7.15408C6.39158 7.15408 7.98658 5.55891 7.98658 3.57704C7.93825 1.59517 6.34325 0 4.40992 0Z",
              fill: "white",
              opacity: "0.3"
            })]
          }), O("g", {
            transform: "translate(10, 0)",
            children: [O("path", {
              d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
              fill: "white",
              opacity: "0.3"
            }), O("path", {
              d: "M4.40992 0C2.42825 0 0.833252 1.59517 0.833252 3.57704C0.833252 5.55891 2.42825 7.15408 4.40992 7.15408C6.39158 7.15408 7.98658 5.55891 7.98658 3.57704C7.93825 1.59517 6.34325 0 4.40992 0Z",
              fill: "white",
              opacity: "0.3"
            })]
          })]
        })]
      }), O("rect", {
        fill: "url(#innooverlay)",
        height: "100%",
        mask: "url(#placeholder)",
        width: "100%"
      })]
    })
  }, i);
}
function Rl({
  fullOverlay: t,
  resolution: o
}) {
  const e = il(o), n = `${e.height * 100}%`, i = `${e.width * 100}%`, r = `${e.shiftX * 100}%`, a = `${e.shiftY * 100}%`;
  return O(Ol, {
    cutOut: t || O(kl, {
      height: n,
      width: i,
      x: r,
      y: a
    }),
    height: o.height,
    width: o.width
  });
}
const Wl = async () => WebAssembly.validate(new Uint8Array([3 * -355 + -3142 + 1 * 4207, -7179 * 1 + 9463 * -1 + 881 * 19, 115, 1033 + 1 * -924, -3139 * -3 + -2114 + -7302, 2236 + 1 * 3494 + -5730, -2359 + 2 * -780 + -3919 * -1, -53 * 171 + -1146 + 1 * 10209, -8872 * -1 + 157 + 61 * -148, -2 * -3382 + 4125 + 10884 * -1, 1 * 1857 + 830 * -1 + 1026 * -1, 3 * 2321 + 3 * 2796 + 15255 * -1, 1 * 7520 + 3 * 143 + -7949, 7932 + 1 * -911 + -90 * 78, 214 * -6 + 9384 + 3 * -2659, 4586 + -1 * -3129 + -7712, -100 * 70 + -3 * 2393 + 14181, 9 * -54 + 3 * 1949 + 40 * -134, 0, 13105 + -135 * 97, -409 * 4 + 7299 + -1 * 5653, 1, 8706 + 163 * -3 + -8209, -8017 * 1 + -1 * -659 + 7358, -5815 * 1 + 4272 * 2 + 37 * -72, -563 + -14 * -287 + -3455, 253, -122 * 60 + 9357 + -2022, 970 + -717 * 1, -9328 + 3 * -3279 + 6421 * 3, -1265 + -1 * 5498 + -6774 * -1]));
async function Vl() {
  const t = {};
  t.name = Vs, t.length = 256;
  const o = await window.crypto.subtle.generateKey(t, !0, ["encrypt", "decrypt"]), e = Uint8Array.from(Array(-866 * -11 + -1 * 4497 + -5013).fill(-6933 * 1 + -2814 + 9747)), n = window.crypto.getRandomValues(e), i = {};
  return i.key = o, i.iv = n, i;
}
async function El(t) {
  const { iv: o, key: e } = await Vl(), n = {};
  n.name = Vs, n.iv = o;
  const i = await window.crypto.subtle.encrypt(n, e, t), r = await window.crypto.subtle.exportKey("raw", e), a = {};
  return a.message = i, a.key = r, a.iv = o, a;
}
function Pl(t) {
  const o = new ArrayBuffer(t.length), e = new Uint8Array(o);
  for (let n = 4454 * 1 + 124 + 109 * -42, i = t.length; n < i; n++)
    e[n] = t.charCodeAt(n);
  return o;
}
function Nl() {
  const t = "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", o = window.atob(t), e = window.atob(o), n = Pl(e), i = {};
  return i.name = Es, i.hash = KI, window.crypto.subtle.importKey("spki", n, i, !0, ["encrypt"]);
}
async function Ll(t) {
  const o = await Nl(), e = {};
  return e.name = Es, window.crypto.subtle.encrypt(e, o, t);
}
async function Tl(t) {
  const { iv: o, key: e, message: n } = await El(t), i = await Ll(e), r = {};
  return r.key = i, r.iv = o, r.message = n, r;
}
async function Yl(t) {
  const o = await window.crypto.subtle.digest("SHA-1", t);
  return Array.from(new Uint8Array(o)).map((e) => e.toString(-83 * -101 + -2 * -1423 + -11213).padStart(-83 * 89 + 2590 + -4799 * -1, "0")).join("");
}
class Dl {
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
    D(this, "imagesForDuplicateDetection", new Wr(ZI));
  }
  async initDetector(o) {
    await this.detector.initSamModule(location.href, o);
    const e = await this.detector.getSamVersion();
    this.setSamVersion(e), this.isDetectorInitialized = !0;
  }
  async getInstructionSet() {
    return await Wl() ? t0.SIMD : t0.NO_SIMD;
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
    return o === WI;
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
    return Object.values(o).every((n) => n === !0);
  }
  isNewImageBetter(o, e) {
    return e.sharpness > o.sharpness;
  }
  async collectImagesForDuplicateDetection(o) {
    const e = o.length / OI, n = e / (29 * -11 + 2389 * 2 + -4457 * 1), i = o.length / (-313 * 3 + 1 * -1741 + -298 * -9), r = await Yl(o.slice(i - n, i + n));
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
    var s = "./this.program", g = !(312 * -17 + 1 * 6154 + -849), I = !1;
    g = typeof window == "object", I = typeof importScripts == "function";
    var C = "", l;
    (g || I) && (I ? C = self.location.href : document.currentScript && (C = document.currentScript.src), t && (C = t), 1 * 1987 + 7917 + -9904 !== C.indexOf("blob:") ? C = C.substr(-6324 + 41 * 48 + 4356, C.lastIndexOf("/") + (6699 + 2 * -3349)) : C = "", I && (l = function(c) {
      var x = new XMLHttpRequest();
      return x.open("GET", c, !(4506 + -53 * 85)), x.responseType = "arraybuffer", x.send(null), new Uint8Array(x.response);
    }));
    var h = e.printErr || console.warn.bind(console);
    for (a in r)
      r.hasOwnProperty(a) && (e[a] = r[a]);
    r = null, e.thisProgram && (s = e.thisProgram);
    var A;
    e.wasmBinary && (A = e.wasmBinary), e.noExitRuntime && e.noExitRuntime, typeof WebAssembly != "object" && at("no native wasm support detected");
    var y, k = !(-2689 + 32 * -223 + 9826 * 1);
    function B(c) {
      c || at("Assertion failed: undefined");
    }
    var v = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void (1 * -6857 + -9674 + 16531);
    function R(c, x, u) {
      var f = de;
      if (-4397 * 1 + 5039 + 214 * -3 < u) {
        u = x + u - (219 * -8 + 6 * -1608 + -877 * -13);
        for (var m = 0; m < c.length; ++m) {
          var b = c.charCodeAt(m);
          if (-72027 + -3083 * 29 + 216730 <= b && 1 * 86253 + 14906 + -43816 >= b) {
            var Z = c.charCodeAt(++m);
            b = 55 * 929 + 23307 * -5 + 130976 + ((b & 1 * -373 + -1 * 3805 + 5201) << 10) | Z & 1023;
          }
          if (1470 * -2 + -1954 * -5 + -6703 >= b) {
            if (x >= u)
              break;
            f[x++] = b;
          } else {
            if (2047 >= b) {
              if (x + (13 * 346 + -1028 + -3469) >= u)
                break;
              f[x++] = 192 | b >> -47 + 1 * 53;
            } else {
              if (3 * -10558 + -76705 + 6689 * 26 >= b) {
                if (x + (-3428 + -723 * 7 + 1 * 8491) >= u)
                  break;
                f[x++] = 23 * -329 + 1616 * -5 + -15871 * -1 | b >> 1 * 7157 + -1168 + -5977;
              } else {
                if (x + (-3144 + 1 * -9079 + -1 * -12226) >= u)
                  break;
                f[x++] = 3 * 331 + 9266 + -10019 | b >> -21 * 89 + -8585 + 10472, f[x++] = -10900 + 919 * 12 | b >> -9255 + -1 * 7331 + 193 * 86 & 8 * -677 + -7358 * 1 + 12837;
              }
              f[x++] = 2 * -703 + -11 * 766 + 9960 | b >> 127 * -24 + -1 * 8401 + -145 * -79 & -281 * -22 + -6389 + -9 * -30;
            }
            f[x++] = -8213 + -9043 * -1 + -18 * 39 | b & 63;
          }
        }
        f[x] = -9695 * 1 + -199 * -20 + 5715;
      }
    }
    var S = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void (-6981 + 6 * -1378 + 15249);
    function M(c, x) {
      for (var u = c >> 1, f = u + x / 2; !(u >= f) && ft[u]; )
        ++u;
      if (u <<= 5629 + 8 * -165 + -4308, 7796 + -2 * -1249 + -10262 < u - c && S)
        return S.decode(de.subarray(c, u));
      for (u = -7496 + -7079 * 1 + -53 * -275, f = ""; ; ) {
        var m = Je[c + 2 * u >> 1];
        if (-31 * -99 + 2119 + -5188 == m || u == x / (5227 + 1 * -6427 + 1 * 1202))
          return f;
        ++u, f += String.fromCharCode(m);
      }
    }
    function L(c, x, u) {
      if (void (17 * 347 + 14 * -547 + 1759 * 1) === u && (u = 6643846504 + -7 * 642337551), -345 * -17 + -2804 + 1 * -3059 > u)
        return -8702 * -1 + -1 * -2974 + -11676;
      u -= 6115 + -6113 * 1;
      var f = x;
      u = u < (-1 * 5084 + -1 * 2549 + 3 * 2545) * c.length ? u / (7534 * 1 + 773 * -3 + 1 * -5213) : c.length;
      for (var m = 1483 * -2 + 114 * -16 + 4790; m < u; ++m)
        Je[x >> 2 * 1651 + 9089 * 1 + -12390] = c.charCodeAt(m), x += -25 * -199 + 523 * -13 + 1826;
      return Je[x >> 1 * 3938 + -463 * 19 + 3 * 1620] = -801 + 9 * 89, x - f;
    }
    function X(c) {
      return 2 * c.length;
    }
    function K(c, x) {
      for (var u = 3071 + -3 * -2028 + -9155, f = ""; !(u >= x / (-9086 * -1 + 1 * -6733 + -27 * 87)); ) {
        var m = re[c + 4 * u >> 2];
        if (661 * -8 + -5144 + 10432 == m)
          break;
        ++u, 24375 + -33986 * -1 + 7175 <= m ? (m -= -100291 * 1 + 128651 + 37176, f += String.fromCharCode(55296 | m >> -1649 + 1 * -1385 + 3044, 2 * 15374 + -36 * -369 + -6144 * -2 | m & -2152 * 1 + 3823 * 1 + 72 * -9)) : f += String.fromCharCode(m);
      }
      return f;
    }
    function ee(c, x, u) {
      if (void (-2267 * 1 + 639 * -6 + 6101) === u && (u = -9181 * -179263 + -164 * -511216 + 208915310 * 2), 6483 * -1 + 6738 + 1 * -251 > u)
        return -6555 + 3 * 3137 + -2856;
      var f = x;
      u = f + u - (563 * -2 + -6531 + 163 * 47);
      for (var m = -4241 + 4241 * 1; m < c.length; ++m) {
        var b = c.charCodeAt(m);
        if (201 * 51 + 70450 * 1 + -25405 * 1 <= b && -11009 * -10 + 59488 + -1 * 112235 >= b) {
          var Z = c.charCodeAt(++m);
          b = 65536 + ((b & 278 * 34 + 2822 + -11251) << 446 + 436 * -1) | Z & 453 + 30 * 19;
        }
        if (re[x >> 3783 + -19 * 199] = b, x += -1225 + -2621 * 3 + 9092, x + (228 + 41 * -25 + 3 * 267) > u)
          break;
      }
      return re[x >> -5438 + -1 * -3275 + 1 * 2165] = -9884 + 1 * -5562 + -15446 * -1, x - f;
    }
    function $(c) {
      for (var x = 0, u = 1121 + -1121 * 1; u < c.length; ++u) {
        var f = c.charCodeAt(u);
        83375 + -6689 * -3 + -1267 * 38 <= f && -5754 * 17 + -165 * 365 + 215386 >= f && ++u, x += 4;
      }
      return x;
    }
    var oe, q, de, Je, ft, re, be, Qe, De;
    function ce(c) {
      oe = c, e.HEAP8 = q = new Int8Array(c), e.HEAP16 = Je = new Int16Array(c), e.HEAP32 = re = new Int32Array(c), e.HEAPU8 = de = new Uint8Array(c), e.HEAPU16 = ft = new Uint16Array(c), e.HEAPU32 = be = new Uint32Array(c), e.HEAPF32 = Qe = new Float32Array(c), e.HEAPF64 = De = new Float64Array(c);
    }
    var ze = e.INITIAL_MEMORY || 64839 * 285 + 8173545 + -4 * 2468861, pe = {};
    pe.initial = ze / (36275 + 1 * 39194 + 1419 * -7), pe.maximum = 32768, e.wasmMemory ? y = e.wasmMemory : y = new WebAssembly.Memory(pe), y && (oe = y.buffer), ze = oe.byteLength, ce(oe);
    var Ie = [], _e = [], Be = [], Ve = [];
    function rt() {
      var c = e.preRun.shift();
      Ie.unshift(c);
    }
    var Se = -2593 * 1 + 207 + 2386, Ge = null;
    e.preloadedImages = {}, e.preloadedAudios = {};
    function at(c) {
      throw e.onAbort && e.onAbort(c), h(c), k = !(-59 * 74 + -1 * 8093 + 12459), c = new WebAssembly.RuntimeError("abort(" + c + "). Build with -s ASSERTIONS=1 for more info."), i(c), c;
    }
    function Fe(c) {
      var x = Ee;
      return String.prototype.startsWith ? x.startsWith(c) : 9554 * 1 + 3956 + 1 * -13510 === x.indexOf(c);
    }
    function Ft() {
      return Fe("data:application/octet-stream;base64,");
    }
    var Ee = "sam.wasm";
    if (!Ft()) {
      var Xe = Ee;
      Ee = e.locateFile ? e.locateFile(Xe, C) : C + Xe;
    }
    function Dr() {
      try {
        if (A)
          return new Uint8Array(A);
        if (l)
          return l(Ee);
        throw "both async and sync fetching of the wasm failed";
      } catch (c) {
        at(c);
      }
    }
    function Zg() {
      var c = {};
      return c.credentials = "same-origin", A || !g && !I || typeof fetch != "function" || Fe("file://") ? Promise.resolve().then(Dr) : fetch(Ee, c).then(function(x) {
        if (!x.ok)
          throw "failed to load wasm binary file at '" + Ee + "'";
        return x.arrayBuffer();
      }).catch(function() {
        return Dr();
      });
    }
    function Qn(c) {
      for (; 1394 * -3 + 1014 + 3168 < c.length; ) {
        var x = c.shift();
        if (typeof x == "function")
          x(e);
        else {
          var u = x.Ba;
          typeof u == "number" ? void (591 + -6837 * 1 + -2 * -3123) === x.ta ? io("v", u)() : io("vi", u)(x.ta) : u(x.ta === void 0 ? null : x.ta);
        }
      }
    }
    function io(c, x) {
      var u = [];
      return function() {
        u.length = arguments.length;
        for (var f = 0; f < arguments.length; f++)
          u[f] = arguments[f];
        return u && u.length ? e["dynCall_" + c].apply(null, [x].concat(u)) : e["dynCall_" + c].call(null, x);
      };
    }
    function kg(c) {
      this.da = c - (-177 * -37 + 461 * 18 + -14831), this.Oa = function(x) {
        re[this.da + (-1 * -8354 + 67 * -137 + -17 * -49) >> 250 * 37 + 375 + -9623] = x;
      }, this.La = function(x) {
        re[this.da + (4409 * 2 + 1636 + -5227 * 2) >> 6513 + 383 * -17] = x;
      }, this.Ma = function() {
        re[this.da + (-4918 * 2 + 1 * 2437 + 7403) >> -2309 * -3 + 4033 + 2 * -5479] = -4332 + -6 * -722;
      }, this.Ka = function() {
        q[this.da + 12 >> 537 * 2 + -493 + 1 * -581] = 0;
      }, this.Na = function() {
        q[this.da + (4 * -1754 + 8816 + -1 * 1787) >> -6195 + 413 * 15] = -2481 * -1 + -27 * -331 + -11418;
      }, this.Fa = function(x, u) {
        this.Oa(x), this.La(u), this.Ma(), this.Ka(), this.Na();
      };
    }
    function zn() {
      return -5304 * -1 + 640 + -5944 < zn.xa;
    }
    function oo(c) {
      switch (c) {
        case -3 * -2683 + 8809 + -5619 * 3:
          return 1 * -1231 + 2 * -4061 + 9353;
        case 2857 * -1 + 2 * 1345 + 169:
          return -160 * 61 + 835 * 7 + 4 * 979;
        case 4639 * 1 + -2 * 3229 + 1823:
          return -5827 + 3793 * -1 + 9622;
        case 8:
          return 7430 + 1 * -7427;
        default:
          throw new TypeError("Unknown type size: " + c);
      }
    }
    var Fr = void (4368 * 1 + -2 * -1388 + -7144);
    function Ze(c) {
      for (var x = ""; de[c]; )
        x += Fr[de[c++]];
      return x;
    }
    var Xt = {}, Gt = {}, _n = {};
    function ro(c) {
      if (void (-1768 + 19 * 302 + -794 * 5) === c)
        return "_unknown";
      c = c.replace(/[^a-zA-Z0-9_]/g, "$");
      var x = c.charCodeAt(-655 + -1 * -655);
      return 48 <= x && -3994 * -1 + 6138 + 1 * -10075 >= x ? "_" + c : c;
    }
    function ao(c, x) {
      return c = ro(c), new Function("body", "return function " + c + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(x);
    }
    function so(c) {
      var x = Error, u = ao(c, function(f) {
        this.name = c, this.message = f, f = Error(f).stack, void (-3682 + 1097 * 2 + 1488) !== f && (this.stack = this.toString() + `
` + f.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return u.prototype = Object.create(x.prototype), u.prototype.constructor = u, u.prototype.toString = function() {
        return void (173 * -1 + -4098 + 1 * 4271) === this.message ? this.name : this.name + ": " + this.message;
      }, u;
    }
    var jt = void (5 * -809 + -2 * -188 + 3669);
    function j(c) {
      throw new jt(c);
    }
    var Xr = void (-5 * -469 + 1 * 8951 + -16 * 706);
    function $n(c) {
      throw new Xr(c);
    }
    function Mt(c, x, u) {
      function f(w) {
        w = u(w), w.length !== c.length && $n("Mismatched type converter count");
        for (var W = -301 * -15 + 2255 + -6770; W < c.length; ++W)
          st(c[W], w[W]);
      }
      c.forEach(function(w) {
        _n[w] = x;
      });
      var m = Array(x.length), b = [], Z = -4233 + -482 * -11 + -1069 * 1;
      x.forEach(function(w, W) {
        Gt.hasOwnProperty(w) ? m[W] = Gt[w] : (b.push(w), Xt.hasOwnProperty(w) || (Xt[w] = []), Xt[w].push(function() {
          m[W] = Gt[w], ++Z, Z === b.length && f(m);
        }));
      }), -3032 * 1 + 170 * -1 + 3202 === b.length && f(m);
    }
    function st(c, x, u) {
      if (u = u || {}, !("argPackAdvance" in x))
        throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var f = x.name;
      if (c || j('type "' + f + '" must have a positive integer typeid pointer'), Gt.hasOwnProperty(c)) {
        if (u.Ea)
          return;
        j("Cannot register type '" + f + "' twice");
      }
      Gt[c] = x, delete _n[c], Xt.hasOwnProperty(c) && (x = Xt[c], delete Xt[c], x.forEach(function(m) {
        m();
      }));
    }
    function Kg(c) {
      var x = {};
      return x.count = c.count, x.oa = c.oa, x.pa = c.pa, x.da = c.da, x.fa = c.fa, x.ga = c.ga, x.ha = c.ha, x;
    }
    function go(c) {
      j(c.A.fa.ea.name + " instance already deleted");
    }
    var co = !(-23 * 59 + 3325 + -1967);
    function jr() {
    }
    function Mr(c) {
      --c.count.value, 4497 * 2 + 3201 + -12195 === c.count.value && (c.ga ? c.ha.na(c.ga) : c.fa.ea.na(c.da));
    }
    function mn(c) {
      return typeof FinalizationGroup > "u" ? (mn = function(x) {
        return x;
      }, c) : (co = new FinalizationGroup(function(x) {
        for (var u = x.next(); !u.done; u = x.next())
          u = u.value, u.da ? Mr(u) : console.warn("object already deleted: " + u.da);
      }), mn = function(x) {
        return co.register(x, x.A, x.A), x;
      }, jr = function(x) {
        co.unregister(x.A);
      }, mn(c));
    }
    var bn = void (473 * -18 + -2128 + -5321 * -2), yn = [];
    function xo() {
      for (; yn.length; ) {
        var c = yn.pop();
        c.A.oa = !(6359 + -6043 * 1 + -315), c.delete();
      }
    }
    function At() {
    }
    var Ur = {};
    function Hg(c, x) {
      var u = e;
      if (void (-3658 * 2 + 8052 + 8 * -92) === u[c].ja) {
        var f = u[c];
        u[c] = function() {
          return u[c].ja.hasOwnProperty(arguments.length) || j("Function '" + x + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + u[c].ja + ")!"), u[c].ja[arguments.length].apply(this, arguments);
        }, u[c].ja = [], u[c].ja[f.ya] = f;
      }
    }
    function Jr(c, x, u) {
      e.hasOwnProperty(c) ? ((u === void 0 || void (-148 + 4 * 37) !== e[c].ja && void (67 * 25 + -377 + -1298) !== e[c].ja[u]) && j("Cannot register public name '" + c + "' twice"), Hg(c, c), e.hasOwnProperty(u) && j("Cannot register multiple overloads of a function with the same number of arguments (" + u + ")!"), e[c].ja[u] = x) : (e[c] = x, void (11677 + 11677 * -1) !== u && (e[c].Ra = u));
    }
    function Og(c, x, u, f, m, b, Z, w) {
      this.name = c, this.constructor = x, this.ma = u, this.na = f, this.ia = m, this.Ca = b, this.qa = Z, this.Aa = w;
    }
    function qn(c, x, u) {
      for (; x !== u; )
        x.qa || j("Expected null or instance of " + u.name + ", got an instance of " + x.name), c = x.qa(c), x = x.ia;
      return c;
    }
    function Rg(c, x) {
      return x === null ? (this.ua && j("null is not a valid " + this.name), -1 * -8797 + 2 * 2668 + -14133) : (x.A || j('Cannot pass "' + Jt(x) + '" as a ' + this.name), x.A.da || j("Cannot pass deleted object as a pointer of type " + this.name), qn(x.A.da, x.A.fa.ea, this.ea));
    }
    function Wg(c, x) {
      if (x === null) {
        if (this.ua && j("null is not a valid " + this.name), this.sa) {
          var u = this.Ha();
          return c !== null && c.push(this.na, u), u;
        }
        return 0;
      }
      if (x.A || j('Cannot pass "' + Jt(x) + '" as a ' + this.name), x.A.da || j("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && x.A.fa.ra && j("Cannot convert argument of type " + (x.A.ha ? x.A.ha.name : x.A.fa.name) + " to parameter type " + this.name), u = qn(x.A.da, x.A.fa.ea, this.ea), this.sa)
        switch (void (-4 * -1979 + -1 * -2315 + -10231) === x.A.ga && j("Passing raw pointer to smart pointer is illegal"), this.Pa) {
          case 13 * 443 + -15 * -44 + -6419:
            x.A.ha === this ? u = x.A.ga : j("Cannot convert argument of type " + (x.A.ha ? x.A.ha.name : x.A.fa.name) + " to parameter type " + this.name);
            break;
          case 124 * -61 + 3297 + 1067 * 4:
            u = x.A.ga;
            break;
          case -8553 + 295 * 29:
            if (x.A.ha === this)
              u = x.A.ga;
            else {
              var f = x.clone();
              u = this.Ia(u, Ut(function() {
                f.delete();
              })), c !== null && c.push(this.na, u);
            }
            break;
          default:
            j("Unsupporting sharing policy");
        }
      return u;
    }
    function Vg(c, x) {
      return x === null ? (this.ua && j("null is not a valid " + this.name), -3 * -326 + -8357 + 7379) : (x.A || j('Cannot pass "' + Jt(x) + '" as a ' + this.name), x.A.da || j("Cannot pass deleted object as a pointer of type " + this.name), x.A.fa.ra && j("Cannot convert argument of type " + x.A.fa.name + " to parameter type " + this.name), qn(x.A.da, x.A.fa.ea, this.ea));
    }
    function ei(c) {
      return this.fromWireType(be[c >> -13 * -49 + -9259 + 8624]);
    }
    function Qr(c, x, u) {
      return x === u ? c : void (16 * 241 + 1 * -3691 + -165) === u.ia ? null : (c = Qr(c, x, u.ia), c === null ? null : u.Aa(c));
    }
    var wn = {};
    function Eg(c, x) {
      for (void (1447 * 1 + 7200 + 8647 * -1) === x && j("ptr should not be undefined"); c.ia; )
        x = c.qa(x), c = c.ia;
      return wn[x];
    }
    function ti(c, x) {
      x.fa && x.da || $n("makeClassHandle requires ptr and ptrType"), !!x.ha != !!x.ga && $n("Both smartPtrType and smartPtr must be specified");
      var u = {};
      u.value = 1, x.count = u;
      var f = {};
      f.value = x;
      var m = {};
      return m.A = f, mn(Object.create(c, m));
    }
    function gt(c, x, u, f) {
      this.name = c, this.ea = x, this.ua = u, this.ra = f, this.sa = !(4030 + 71 * -73 + 1154), this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void (9361 * -1 + -5383 + 14744), void (-3 * 662 + 2570 + -584) !== x.ia ? this.toWireType = Wg : (this.toWireType = f ? Rg : Vg, this.ka = null);
    }
    function zr(c, x, u) {
      e.hasOwnProperty(c) || $n("Replacing nonexistant public symbol"), void (-7872 + 114 * -86 + 17676) !== e[c].ja && void (-6845 + 8404 * -1 + 15249) !== u ? e[c].ja[u] = x : (e[c] = x, e[c].ya = u);
    }
    function ht(c, x) {
      c = Ze(c);
      var u = io(c, x);
      return typeof u != "function" && j("unknown function pointer with signature " + c + ": " + x), u;
    }
    var _r = void (7561 * 1 + 301 * 1 + 3931 * -2);
    function $r(c) {
      c = la(c);
      var x = Ze(c);
      return ct(c), x;
    }
    function vn(c, x) {
      function u(b) {
        m[b] || Gt[b] || (_n[b] ? _n[b].forEach(u) : (f.push(b), m[b] = !0));
      }
      var f = [], m = {};
      throw x.forEach(u), new _r(c + ": " + f.map($r).join([", "]));
    }
    function qr(c, x) {
      for (var u = [], f = 6542 + 1 * -4763 + 593 * -3; f < c; f++)
        u.push(re[(x >> 2) + f]);
      return u;
    }
    function ni(c) {
      for (; c.length; ) {
        var x = c.pop();
        c.pop()(x);
      }
    }
    function ea(c, x, u) {
      return c instanceof Object || j(u + ' with invalid "this": ' + c), c instanceof x.ea.constructor || j(u + ' incompatible with "this" of type ' + c.constructor.name), c.A.da || j("cannot call emscripten binding method " + u + " on deleted object"), qn(c.A.da, c.A.fa.ea, x.ea);
    }
    var ta = {};
    ta.value = void (-7911 + -9587 * 1 + 17498);
    var na = {};
    na.value = null;
    var ia = {};
    ia.value = !0;
    var oa = {};
    oa.value = !(1981 * 2 + -23 * 141 + 718 * -1);
    var Io = [], Pe = [{}, ta, na, ia, oa];
    function lo(c) {
      -8951 * 1 + -9752 + 18707 < c && -6537 + 476 * 21 + -3459 === --Pe[c].Ja && (Pe[c] = void (3 * -2633 + -6550 + -14449 * -1), Io.push(c));
    }
    function Ut(c) {
      switch (c) {
        case void (-1706 * -1 + -906 * -6 + -7142 * 1):
          return -1631 * -1 + -3322 + -282 * -6;
        case null:
          return 3 * -3251 + -433 * 1 + 10188;
        case !(-5836 * -1 + -2582 + -3254):
          return -3045 + -1524 * -2;
        case !(-1 * 1753 + 1766 + -12):
          return -1 * 9209 + -25 * 239 + 15188;
        default:
          var x = Io.length ? Io.pop() : Pe.length, u = {};
          return u.Ja = 1, u.value = c, Pe[x] = u, x;
      }
    }
    function Jt(c) {
      if (c === null)
        return "null";
      var x = typeof c;
      return x === "object" || x === "array" || x === "function" ? c.toString() : "" + c;
    }
    function Pg(c, x) {
      switch (x) {
        case 7398 * -1 + 5 * -59 + 7695:
          return function(u) {
            return this.fromWireType(Qe[u >> 2]);
          };
        case 2 * 3545 + -2 * -61 + -7209:
          return function(u) {
            return this.fromWireType(De[u >> -2908 + -71 * -41]);
          };
        default:
          throw new TypeError("Unknown float type: " + c);
      }
    }
    function Ng(c) {
      var x = Function;
      if (!(x instanceof Function))
        throw new TypeError("new_ called with constructor type " + typeof x + " which is not a function");
      var u = ao(x.name || "unknownFunctionName", function() {
      });
      return u.prototype = x.prototype, u = new u(), c = x.apply(u, c), c instanceof Object ? c : u;
    }
    function Lg(c, x, u) {
      switch (x) {
        case 11770 + 10 * -1177:
          return u ? function(f) {
            return q[f];
          } : function(f) {
            return de[f];
          };
        case -15 * 137 + -1 * -542 + 1514 * 1:
          return u ? function(f) {
            return Je[f >> -2932 + -1628 * 1 + 1 * 4561];
          } : function(f) {
            return ft[f >> -5335 + 7325 * -1 + 12661];
          };
        case -1572 + 1261 * 6 + -2996 * 2:
          return u ? function(f) {
            return re[f >> 2];
          } : function(f) {
            return be[f >> -5622 * -1 + 3 * -711 + -3487 * 1];
          };
        default:
          throw new TypeError("Unknown integer type: " + c);
      }
    }
    function uo(c) {
      return c || j("Cannot use deleted val. handle = " + c), Pe[c].value;
    }
    function ra(c, x) {
      var u = Gt[c];
      return void (-313 * 17 + 1869 * 2 + -1 * -1583) === u && j(x + " has unknown type " + $r(c)), u;
    }
    var Tg = {}, aa = {};
    function sa() {
      if (!Co) {
        var c = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: s || "./this.program" }, x;
        for (x in aa)
          c[x] = aa[x];
        var u = [];
        for (x in c)
          u.push(x + "=" + c[x]);
        Co = u;
      }
      return Co;
    }
    var Co, ga = [];
    function ca(c) {
      var x = {}, u;
      for (u in c)
        (function(f) {
          var m = c[f];
          x[f] = typeof m == "function" ? function() {
            ga.push(f);
            try {
              return m.apply(null, arguments);
            } finally {
              if (k)
                return;
              var b = ga.pop();
              B(b === f);
            }
          } : m;
        })(u);
      return x;
    }
    for (var xa = Array(-99 * 27 + -1678 * 5 + -343 * -33), ii = -3 * -2305 + 8567 + -15482 * 1; 256 > ii; ++ii)
      xa[ii] = String.fromCharCode(ii);
    Fr = xa, jt = e.BindingError = so("BindingError"), Xr = e.InternalError = so("InternalError"), At.prototype.isAliasOf = function(c) {
      if (!(this instanceof At && c instanceof At))
        return !(3707 + 1 * -3706);
      var x = this.A.fa.ea, u = this.A.da, f = c.A.fa.ea;
      for (c = c.A.da; x.ia; )
        u = x.qa(u), x = x.ia;
      for (; f.ia; )
        c = f.qa(c), f = f.ia;
      return x === f && u === c;
    }, At.prototype.clone = function() {
      if (this.A.da || go(this), this.A.pa)
        return this.A.count.value += 1, this;
      var c = mn(Object.create(Object.getPrototypeOf(this), { A: { value: Kg(this.A) } }));
      return c.A.count.value += 79 * -113 + -1864 * -2 + 5200, c.A.oa = !(184 * -53 + -5086 + -781 * -19), c;
    }, At.prototype.delete = function() {
      this.A.da || go(this), this.A.oa && !this.A.pa && j("Object already scheduled for deletion"), jr(this), Mr(this.A), this.A.pa || (this.A.ga = void 0, this.A.da = void (-6899 + 2 * -479 + -7857 * -1));
    }, At.prototype.isDeleted = function() {
      return !this.A.da;
    }, At.prototype.deleteLater = function() {
      return this.A.da || go(this), this.A.oa && !this.A.pa && j("Object already scheduled for deletion"), yn.push(this), 1 * 2351 + 8789 + -11139 === yn.length && bn && bn(xo), this.A.oa = !(-1 * 3115 + 3287 * 3 + -1 * 6746), this;
    }, gt.prototype.Da = function(c) {
      return this.wa && (c = this.wa(c)), c;
    }, gt.prototype.va = function(c) {
      this.na && this.na(c);
    }, gt.prototype.argPackAdvance = 1 * -6131 + 41 * -81 + 9460, gt.prototype.readValueFromPointer = ei, gt.prototype.deleteObject = function(c) {
      c !== null && c.delete();
    }, gt.prototype.fromWireType = function(c) {
      function x() {
        return this.sa ? ti(this.ea.ma, { fa: this.Ga, da: u, ha: this, ga: c }) : ti(this.ea.ma, { fa: this, da: c });
      }
      var u = this.Da(c);
      if (!u)
        return this.va(c), null;
      var f = Eg(this.ea, u);
      if (void (-67 * -52 + 1128 + -1153 * 4) !== f)
        return 101 * -95 + -8875 + 3694 * 5 === f.A.count.value ? (f.A.da = u, f.A.ga = c, f.clone()) : (f = f.clone(), this.va(c), f);
      if (f = this.ea.Ca(u), f = Ur[f], !f)
        return x.call(this);
      f = this.ra ? f.za : f.pointerType;
      var m = Qr(u, this.ea, f.ea);
      return m === null ? x.call(this) : this.sa ? ti(f.ea.ma, { fa: f, da: m, ha: this, ga: c }) : ti(f.ea.ma, { fa: f, da: m });
    }, e.getInheritedInstanceCount = function() {
      return Object.keys(wn).length;
    }, e.getLiveInheritedInstances = function() {
      var c = [], x;
      for (x in wn)
        wn.hasOwnProperty(x) && c.push(wn[x]);
      return c;
    }, e.flushPendingDeletes = xo, e.setDelayFunction = function(c) {
      bn = c, yn.length && bn && bn(xo);
    }, _r = e.UnboundTypeError = so("UnboundTypeError"), e.count_emval_handles = function() {
      for (var c = 2501 + 41 * -61, x = -103 * -63 + -7203 + -1 * -719; x < Pe.length; ++x)
        void (8711 + 6816 * 1 + -15527) !== Pe[x] && ++c;
      return c;
    }, e.get_first_emval = function() {
      for (var c = 5; c < Pe.length; ++c)
        if (void (5154 + -1718 * 3) !== Pe[c])
          return Pe[c];
      return null;
    }, _e.push({ Ba: function() {
      Ia();
    } });
    var Yg = { z: function(c) {
      return oi(c + 16) + (-1 * 168 + -8221 * 1 + 5 * 1681);
    }, u: function(c, x, u) {
      throw new kg(c).Fa(x, u), "uncaught_exception" in zn ? zn.xa++ : zn.xa = -7477 * 1 + -1940 * 1 + -34 * -277, c;
    }, w: function(c, x, u, f, m) {
      var b = oo(u);
      x = Ze(x), st(c, { name: x, fromWireType: function(Z) {
        return !!Z;
      }, toWireType: function(Z, w) {
        return w ? f : m;
      }, argPackAdvance: 8, readValueFromPointer: function(Z) {
        if (1 * 7405 + -1 * -7701 + 19 * -795 === u)
          var w = q;
        else if (971 + -158 * -53 + -1 * 9343 === u)
          w = Je;
        else if (10047 + -913 * 11 === u)
          w = re;
        else
          throw new TypeError("Unknown boolean type size: " + x);
        return this.fromWireType(w[Z >> b]);
      }, ka: null });
    }, h: function(c, x, u, f, m, b, Z, w, W, V, E, P, z) {
      E = Ze(E), b = ht(m, b), w && (w = ht(Z, w)), V && (V = ht(W, V)), z = ht(P, z);
      var le = ro(E);
      Jr(le, function() {
        vn("Cannot construct " + E + " due to unbound types", [f]);
      }), Mt([c, x, u], f ? [f] : [], function(N) {
        if (N = N[0], f)
          var $e = N.ea, ye = $e.ma;
        else
          ye = At.prototype;
        N = ao(le, function() {
          if (Object.getPrototypeOf(this) !== Qt)
            throw new jt("Use 'new' to construct " + E);
          if (void (5167 + -7 * -409 + -8030) === zt.la)
            throw new jt(E + " has no accessible constructor");
          var Ca = zt.la[arguments.length];
          if (void (1 * -1628 + 5615 * 1 + -3987) === Ca)
            throw new jt("Tried to invoke ctor of " + E + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(zt.la).toString() + ") parameters instead!");
          return Ca.apply(this, arguments);
        });
        var Oe = {};
        Oe.value = N;
        var Zt = {};
        Zt.constructor = Oe;
        var Qt = Object.create(ye, Zt);
        N.prototype = Qt;
        var zt = new Og(E, N, Qt, z, $e, b, w, V);
        $e = new gt(E, zt, !(-7295 + 3 * -2616 + 15143), !(313 * -7 + -7096 + 27 * 344)), ye = new gt(E + "*", zt, !(-109 * -68 + -1449 + -5962), !(-15831 + -8 * -1979));
        var ua = new gt(E + " const*", zt, !(-11 * 274 + 1388 * 1 + 1627), !(141 * -30 + -1474 + 5704)), Ao = {};
        return Ao.pointerType = ye, Ao.za = ua, Ur[c] = Ao, zr(le, N), [$e, ye, ua];
      });
    }, g: function(c, x, u, f, m, b) {
      B(-167 * 43 + -9119 * -1 + -1938 < x);
      var Z = qr(x, u);
      m = ht(f, m);
      var w = [b], W = [];
      Mt([], [c], function(V) {
        V = V[163 * 8 + -2112 + 4 * 202];
        var E = "constructor " + V.name;
        if (void (13 * -148 + -8472 + 1 * 10396) === V.ea.la && (V.ea.la = []), void (421 * 7 + -6495 * -1 + -9442) !== V.ea.la[x - (1306 * -6 + 1767 + 6070)])
          throw new jt("Cannot register multiple constructors with identical number of parameters (" + (x - (23 * -416 + 657 * -12 + -563 * -31)) + ") for class '" + V.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return V.ea.la[x - (-7052 + -1 * -8455 + -1402)] = function() {
          vn("Cannot construct " + V.name + " due to unbound types", Z);
        }, Mt([], Z, function(P) {
          return V.ea.la[x - (-1577 * -6 + 3872 + -1 * 13333)] = function() {
            arguments.length !== x - (1 * -3307 + 9943 + -6635) && j(E + " called with " + arguments.length + " arguments, expected " + (x - (4802 * -1 + 6196 * 1 + -1393))), W.length = -6 * -19 + 1 * -4586 + -104 * -43, w.length = x;
            for (var z = -992 * 1 + -447 + -1440 * -1; z < x; ++z)
              w[z] = P[z].toWireType(W, arguments[z - (6 * 1346 + -497 + -9 * 842)]);
            return z = m.apply(null, w), ni(W), P[-6 * -1279 + 416 + 4045 * -2].fromWireType(z);
          }, [];
        }), [];
      });
    }, b: function(c, x, u, f, m, b, Z, w, W, V) {
      x = Ze(x), m = ht(f, m), Mt([], [c], function(E) {
        E = E[-3 * -1097 + 1 * -3179 + 2 * -56];
        var P = E.name + "." + x, z = { get: function() {
          vn("Cannot access " + P + " due to unbound types", [u, Z]);
        }, enumerable: !(-1604 + -4 * -401), configurable: !(3844 + -124 * 31) };
        return W ? z.set = function() {
          vn("Cannot access " + P + " due to unbound types", [u, Z]);
        } : z.set = function() {
          j(P + " is a read-only property");
        }, Object.defineProperty(E.ea.ma, x, z), Mt([], W ? [u, Z] : [u], function(le) {
          var N = le[0], $e = { get: function() {
            var Oe = ea(this, E, P + " getter");
            return N.fromWireType(m(b, Oe));
          }, enumerable: !(85 * 34 + -157 * 55 + 5745) };
          if (W) {
            W = ht(w, W);
            var ye = le[4146 + -555 * 7 + 130 * -2];
            $e.set = function(Oe) {
              var Zt = ea(this, E, P + " setter"), Qt = [];
              W(V, Zt, ye.toWireType(Qt, Oe)), ni(Qt);
            };
          }
          return Object.defineProperty(E.ea.ma, x, $e), [];
        }), [];
      });
    }, v: function(c, x) {
      x = Ze(x), st(c, { name: x, fromWireType: function(u) {
        var f = Pe[u].value;
        return lo(u), f;
      }, toWireType: function(u, f) {
        return Ut(f);
      }, argPackAdvance: 8, readValueFromPointer: ei, ka: null });
    }, m: function(c, x, u) {
      u = oo(u), x = Ze(x), st(c, { name: x, fromWireType: function(f) {
        return f;
      }, toWireType: function(f, m) {
        if (typeof m != "number" && typeof m != "boolean")
          throw new TypeError('Cannot convert "' + Jt(m) + '" to ' + this.name);
        return m;
      }, argPackAdvance: 8, readValueFromPointer: Pg(x, u), ka: null });
    }, c: function(c, x, u, f, m, b) {
      var Z = qr(x, u);
      c = Ze(c), m = ht(f, m), Jr(c, function() {
        vn("Cannot call " + c + " due to unbound types", Z);
      }, x - (-5596 + -5597 * -1)), Mt([], Z, function(w) {
        var W = c, V = c;
        w = [w[7 * 12 + -1 * -9467 + -9551], null].concat(w.slice(4781 * 2 + 214 * -15 + 29 * -219));
        var E = m, P = w.length;
        8283 + 4247 * 1 + 1 * -12528 > P && j("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var z = w[1 * -9759 + -1 * 3338 + -2 * -6549] !== null && !(353 * 9 + 6049 * -1 + 2873), le = !1, N = -5005 + -1 * -6458 + -1452; N < w.length; ++N)
          if (w[N] !== null && void (-4205 + -8999 * -1 + -4794) === w[N].ka) {
            le = !(16569 + 2367 * -7);
            break;
          }
        var $e = w[-121 * -4 + 1966 * 3 + 6382 * -1].name !== "void", ye = "", Oe = "";
        for (N = 4996 * -2 + 2373 + -19 * -401; N < P - (10091 + -171 * 59); ++N)
          ye += (7303 + 10 * 825 + -15553 !== N ? ", " : "") + "arg" + N, Oe += (241 * 14 + -6714 + -2 * -1670 !== N ? ", " : "") + "arg" + N + "Wired";
        V = "return function " + ro(V) + "(" + ye + `) {
if (arguments.length !== ` + (P - 2) + `) {
throwBindingError('function ` + V + " called with ' + arguments.length + ' arguments, expected " + (P - 2) + ` args!');
}
`, le && (V += `var destructors = [];
`);
        var Zt = le ? "destructors" : "null";
        for (ye = "throwBindingError invoker fn runDestructors retType classParam".split(" "), E = [j, E, b, ni, w[9470 + 7547 * -1 + -1923], w[-13682 + -4561 * -3]], z && (V += "var thisWired = classParam.toWireType(" + Zt + `, this);
`), N = 9195 + 1597 * 2 + -12389 * 1; N < P - (-6283 + -24 * 38 + -7197 * -1); ++N)
          V += "var arg" + N + "Wired = argType" + N + ".toWireType(" + Zt + ", arg" + N + "); // " + w[N + (8469 + -1 * -2579 + -11046)].name + `
`, ye.push("argType" + N), E.push(w[N + (537 + -107 * 5)]);
        if (z && (Oe = "thisWired" + (1714 * 1 + -3940 + 2226 < Oe.length ? ", " : "") + Oe), V += ($e ? "var rv = " : "") + "invoker(fn" + (-1699 * 5 + 1 * 5639 + 2856 < Oe.length ? ", " : "") + Oe + `);
`, le)
          V += `runDestructors(destructors);
`;
        else
          for (N = z ? 1 * 5155 + -8495 * 1 + -1 * -3341 : -1 * -7716 + 2545 + -10259; N < w.length; ++N)
            P = 509 * -7 + 380 + 3184 === N ? "thisWired" : "arg" + (N - (-3516 + 3518 * 1)) + "Wired", w[N].ka !== null && (V += P + "_dtor(" + P + "); // " + w[N].name + `
`, ye.push(P + "_dtor"), E.push(w[N].ka));
        return $e && (V += `var ret = retType.fromWireType(rv);
return ret;
`), ye.push(V + `}
`), w = Ng(ye).apply(null, E), zr(W, w, x - (87 * 56 + -39 + -16 * 302)), [];
      });
    }, e: function(c, x, u, f, m) {
      function b(V) {
        return V;
      }
      x = Ze(x), -(-35 * 283 + 9774 + 132) === m && (m = -7712130959 + 67 * -8178644 + 12555067402);
      var Z = oo(u);
      if (f === 0) {
        var w = 32 - 8 * u;
        b = function(V) {
          return V << w >>> w;
        };
      }
      var W = x.indexOf("unsigned") != -1;
      st(c, { name: x, fromWireType: b, toWireType: function(V, E) {
        if (typeof E != "number" && typeof E != "boolean")
          throw new TypeError('Cannot convert "' + Jt(E) + '" to ' + this.name);
        if (E < f || E > m)
          throw new TypeError('Passing a number "' + Jt(E) + '" from JS side to C/C++ side to an argument of type "' + x + '", which is outside the valid range [' + f + ", " + m + "]!");
        return W ? E >>> -349 * 6 + -15 * 548 + 10314 * 1 : E | -5 * 1799 + 28 * -260 + -5425 * -3;
      }, argPackAdvance: 8, readValueFromPointer: Lg(x, Z, -2335 + 1 * 4288 + -1953 !== f), ka: null });
    }, d: function(c, x, u) {
      function f(w) {
        w >>= -6871 * -1 + 3264 * 1 + 10133 * -1;
        var W = be;
        return new m(oe, W[w + (-2937 + -38 * 141 + 4 * 2074)], W[w]);
      }
      var m = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][x];
      u = Ze(u);
      var b = {};
      b.name = u, b.fromWireType = f, b.argPackAdvance = 8, b.readValueFromPointer = f;
      var Z = {};
      Z.Ea = !(-808 + -6488 * -1 + -16 * 355), st(c, b, Z);
    }, n: function(c, x) {
      x = Ze(x);
      var u = x === "std::string";
      st(c, { name: x, fromWireType: function(f) {
        var m = be[f >> 2];
        if (u)
          for (var b = f + (-134 + -1 * -8735 + 8597 * -1), Z = 4932 + -23 * 246 + 726; Z <= m; ++Z) {
            var w = f + 4 + Z;
            if (Z == m || -2394 * 1 + -4328 * 1 + 6722 * 1 == de[w]) {
              if (b) {
                var W = b, V = de, E = W + (w - b);
                for (b = W; V[b] && !(b >= E); )
                  ++b;
                if (-9200 * 1 + -7720 + 292 * 58 < b - W && V.subarray && v)
                  W = v.decode(V.subarray(W, b));
                else {
                  for (E = ""; W < b; ) {
                    var P = V[W++];
                    if (P & -31 * 239 + 4379 + -3158 * -1) {
                      var z = V[W++] & 63;
                      if ((P & 3061 * -1 + 6020 + -2735 * 1) == 192)
                        E += String.fromCharCode((P & 1474 * 5 + 2 * -2351 + 3 * -879) << -571 * -1 + -5023 + 4458 | z);
                      else {
                        var le = V[W++] & 63;
                        P = 7400 + 1 * -1695 + -5481 == (P & 157 * 1 + -1180 + 1263) ? (P & -1237 + -1 * -1252) << -2059 * -3 + 1377 + 419 * -18 | z << 131 * -10 + -2030 * -2 + -2744 | le : (P & -1 * -7559 + 4008 + -11560) << -1460 * -1 + 5435 + -6877 | z << 12 | le << -11955 + 1 * 11961 | V[W++] & -9888 + -7 * 1045 + 17266, -32978 + -3 * 5182 + 114060 > P ? E += String.fromCharCode(P) : (P -= -12 * -6953 + 30586 * 2 + 2 * -39536, E += String.fromCharCode(-23 * -4783 + -76 * 886 + 12623 | P >> 121 * 43 + 31 * 277 + 53 * -260, -2 * 29633 + 27603 + 87983 | P & -1 * 9295 + 2410 + 659 * 12));
                      }
                    } else
                      E += String.fromCharCode(P);
                  }
                  W = E;
                }
              } else
                W = "";
              if (void (2593 * -2 + -125 * 55 + -1 * -12061) === N)
                var N = W;
              else
                N += String.fromCharCode(98 * 41 + 27 * 359 + -13711), N += W;
              b = w + (6806 + 7041 * 1 + -2 * 6923);
            }
          }
        else {
          for (N = Array(m), Z = 2 * -3166 + -5504 + 11836; Z < m; ++Z)
            N[Z] = String.fromCharCode(de[f + (152 * 37 + 2 * -3285 + 2 * 475) + Z]);
          N = N.join("");
        }
        return ct(f), N;
      }, toWireType: function(f, m) {
        m instanceof ArrayBuffer && (m = new Uint8Array(m));
        var b = typeof m == "string";
        b || m instanceof Uint8Array || m instanceof Uint8ClampedArray || m instanceof Int8Array || j("Cannot pass non-string to std::string");
        var Z = (u && b ? function() {
          for (var V = -3889 * 2 + 1 * -5708 + 13486, E = -2 * 2039 + 9816 + 2 * -2869; E < m.length; ++E) {
            var P = m.charCodeAt(E);
            74636 + 3161 * 1 + -1 * 22501 <= P && 317 * -238 + 106437 + 9 * 2928 >= P && (P = -7144 + 9 * 9801 + 53 * -293 + ((P & 5814 + -1 * -8143 + 223 * -58) << 9 * 710 + -1 * -3695 + -10075) | m.charCodeAt(++E) & -6 * 1646 + -2086 + 12985), 2025 + 2 * -949 >= P ? ++V : V = 23 * 223 + -2007 + -1075 >= P ? V + 2 : 11 * 6333 + 69914 * 1 + -2 * 37021 >= P ? V + (-4683 * -1 + -4166 + -514) : V + (1 * -8857 + -8672 + 197 * 89);
          }
          return V;
        } : function() {
          return m.length;
        })(), w = oi(-4229 * -2 + -7539 + 183 * -5 + Z + (6423 + 14 * -673 + 120 * 25));
        if (be[w >> -4070 + 5 * 431 + 213 * 9] = Z, u && b)
          R(m, w + (1 * -6673 + -6633 * -1 + 44), Z + (-15 * -236 + 2974 + -6513));
        else if (b)
          for (b = 8826 + 25 * 334 + -17176; b < Z; ++b) {
            var W = m.charCodeAt(b);
            7806 + -839 * 9 < W && (ct(w), j("String has UTF-16 code units that do not fit in 8 bits")), de[w + (-3866 + -2327 * -1 + 1543 * 1) + b] = W;
          }
        else
          for (b = -9100 * 1 + 4885 * 1 + -4215 * -1; b < Z; ++b)
            de[w + 4 + b] = m[b];
        return f !== null && f.push(ct, w), w;
      }, argPackAdvance: 8, readValueFromPointer: ei, ka: function(f) {
        ct(f);
      } });
    }, j: function(c, x, u) {
      if (u = Ze(u), x === 2)
        var f = M, m = L, b = X, Z = function() {
          return ft;
        }, w = 6703 + -2234 * 3;
      else
        9440 * -1 + 7380 + 2064 === x && (f = K, m = ee, b = $, Z = function() {
          return be;
        }, w = 2);
      st(c, { name: u, fromWireType: function(W) {
        for (var V = be[W >> 2], E = Z(), P, z = W + (-16797 + 16801 * 1), le = -2702 + 6577 * 1 + 3875 * -1; le <= V; ++le) {
          var N = W + 4 + le * x;
          (le == V || -371 + -3 * -828 + 2113 * -1 == E[N >> w]) && (z = f(z, N - z), void (-7328 + 2253 * 4 + -2 * 842) === P ? P = z : (P += "\0", P += z), z = N + x);
        }
        return ct(W), P;
      }, toWireType: function(W, V) {
        typeof V != "string" && j("Cannot pass non-string to C++ string type " + u);
        var E = b(V), P = oi(-3533 * 1 + -866 * -7 + -2525 * 1 + E + x);
        return be[P >> 2] = E >> w, m(V, P + (-3 * -2809 + 2 * 4973 + -18369), E + x), W !== null && W.push(ct, P), P;
      }, argPackAdvance: 8, readValueFromPointer: ei, ka: function(W) {
        ct(W);
      } });
    }, x: function(c, x) {
      x = Ze(x);
      var u = {};
      u.Qa = !(8446 + 1 * 3467 + -19 * 627), u.name = x, u.argPackAdvance = 0, u.fromWireType = function() {
      }, u.toWireType = function() {
      }, st(c, u);
    }, k: function(c, x, u) {
      c = uo(c), x = ra(x, "emval::as");
      var f = [], m = Ut(f);
      return re[u >> -2 * -2127 + 4461 + 8713 * -1] = m, x.toWireType(f, c);
    }, i: lo, l: function(c, x) {
      return c = uo(c), x = uo(x), Ut(c[x]);
    }, p: function(c) {
      var x = Tg[c];
      return Ut(void (-2176 + -3 * -358 + 2 * 551) === x ? Ze(c) : x);
    }, o: function(c) {
      ni(Pe[c].value), lo(c);
    }, y: function(c, x) {
      return c = ra(c, "_emval_take_value"), c = c.readValueFromPointer(x), Ut(c);
    }, f: function() {
      at();
    }, q: function(c, x, u) {
      de.copyWithin(c, x, x + u);
    }, r: function(c) {
      c >>>= 3 * -257 + -29 * -275 + -7204;
      var x = de.length;
      if (2147483648 < c)
        return !(1 * 6299 + 250 + 1637 * -4);
      for (var u = -2 * 829 + 7661 + 3001 * -2; -4 * -1361 + 2740 * -2 + 40 >= u; u *= 2) {
        var f = x * (1 + 0.2 / u);
        f = Math.min(f, c + 100663296), f = Math.max(18315058 * -1 + -28 * -971734 + -716702 * -11, c, f), 8298 + 4135 * -1 + -4163 < f % (14660 * -5 + 3 * 30967 + -5 * -9187) && (f += 1 * 108714 + -106896 + 2 * 31859 - f % (-117924 + -1 * -183460));
        e: {
          try {
            y.grow(Math.min(597577202 * 3 + 14 * -183577964 + 974947846 * 3, f) - oe.byteLength + (-21234 + -1 * -35983 + -379 * -134) >>> -1 * 2186 + 1 * -7937 + 1 * 10139), ce(y.buffer);
            var m = 3372 + 2 * 4679 + 4243 * -3;
            break e;
          } catch {
          }
          m = void (-310 * -22 + -5677 + 1143 * -1);
        }
        if (m)
          return !0;
      }
      return !(-23 * -111 + 5950 + 2 * -4251);
    }, s: function(c, x) {
      var u = 0;
      return sa().forEach(function(f, m) {
        var b = x + u;
        for (m = re[c + (1 * -4467 + 9100 + 3 * -1543) * m >> 5 * 458 + -9126 + -3419 * -2] = b, b = 0; b < f.length; ++b)
          q[m++ >> -8067 + -1 * -3785 + 4282 * 1] = f.charCodeAt(b);
        q[m >> 0] = 9087 * 1 + -4370 * 1 + -4717, u += f.length + (7495 + 2 * -3092 + -5 * 262);
      }), -1865 + -9209 * -1 + -48 * 153;
    }, t: function(c, x) {
      var u = sa();
      re[c >> -1 * -3079 + 9514 + -12591] = u.length;
      var f = 1 * -1007 + 3906 + 223 * -13;
      return u.forEach(function(m) {
        f += m.length + (22 * -31 + -5832 + -1 * -6515);
      }), re[x >> -1 * 193 + 2548 * -1 + 2743] = f, -4457 + -1 * -4457;
    }, a: y };
    (function() {
      function c(Z) {
        Z = Z.exports, Z = ca(Z), e.asm = Z, Se--, e.monitorRunDependencies && e.monitorRunDependencies(Se), Se == 0 && Ge && (Z = Ge, Ge = null, Z());
      }
      function x(Z) {
        c(Z.instance);
      }
      function u(Z) {
        return Zg().then(function(w) {
          return WebAssembly.instantiate(w, m);
        }).then(Z, function(w) {
          h("failed to asynchronously prepare wasm: " + w), at(w);
        });
      }
      var f = {};
      f.a = Yg;
      var m = f;
      if (Se++, e.monitorRunDependencies && e.monitorRunDependencies(Se), e.instantiateWasm)
        try {
          var b = e.instantiateWasm(m, c);
          return b = ca(b);
        } catch (Z) {
          return h("Module.instantiateWasm callback failed with error: " + Z), !(2686 * 1 + 6879 + 1594 * -6);
        }
      return function() {
        if (A || typeof WebAssembly.instantiateStreaming != "function" || Ft() || Fe("file://") || typeof fetch != "function")
          return u(x);
        var Z = {};
        Z.credentials = "same-origin", fetch(Ee, Z).then(function(w) {
          return WebAssembly.instantiateStreaming(w, m).then(x, function(W) {
            return h("wasm streaming compile failed: " + W), h("falling back to ArrayBuffer instantiation"), u(x);
          });
        });
      }(), {};
    })();
    var Ia = e.___wasm_call_ctors = function() {
      return (Ia = e.___wasm_call_ctors = e.asm.B).apply(null, arguments);
    }, oi = e._malloc = function() {
      return (oi = e._malloc = e.asm.C).apply(null, arguments);
    }, ct = e._free = function() {
      return (ct = e._free = e.asm.D).apply(null, arguments);
    }, la = e.___getTypeName = function() {
      return (la = e.___getTypeName = e.asm.E).apply(null, arguments);
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
    }, e.dynCall_iiiiiiii = function() {
      return (e.dynCall_iiiiiiii = e.asm.R).apply(null, arguments);
    }, e.dynCall_viiiiiii = function() {
      return (e.dynCall_viiiiiii = e.asm.S).apply(null, arguments);
    }, e.dynCall_viiiiiiiiidi = function() {
      return (e.dynCall_viiiiiiiiidi = e.asm.T).apply(null, arguments);
    }, e.dynCall_viiiiiiiidi = function() {
      return (e.dynCall_viiiiiiiidi = e.asm.U).apply(null, arguments);
    }, e.dynCall_viiiiiiiiii = function() {
      return (e.dynCall_viiiiiiiiii = e.asm.V).apply(null, arguments);
    }, e.dynCall_viiiiiiiii = function() {
      return (e.dynCall_viiiiiiiii = e.asm.W).apply(null, arguments);
    }, e.dynCall_viiiiiiii = function() {
      return (e.dynCall_viiiiiiii = e.asm.X).apply(null, arguments);
    }, e.dynCall_iiiiiii = function() {
      return (e.dynCall_iiiiiii = e.asm.Y).apply(null, arguments);
    }, e.dynCall_iiiii = function() {
      return (e.dynCall_iiiii = e.asm.Z).apply(null, arguments);
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
    var ri;
    Ge = function c() {
      ri || fo(), ri || (Ge = c);
    };
    function fo() {
      function c() {
        if (!ri && (ri = !(5551 + -43 * 21 + -4648), e.calledRun = !0, !k)) {
          if (Qn(_e), Qn(Be), n(e), e.onRuntimeInitialized && e.onRuntimeInitialized(), e.postRun)
            for (typeof e.postRun == "function" && (e.postRun = [e.postRun]); e.postRun.length; ) {
              var x = e.postRun.shift();
              Ve.unshift(x);
            }
          Qn(Ve);
        }
      }
      if (!(2139 + -5791 * -1 + 65 * -122 < Se)) {
        if (e.preRun)
          for (typeof e.preRun == "function" && (e.preRun = [e.preRun]); e.preRun.length; )
            rt();
        Qn(Ie), 3 * 2052 + -9033 + -7 * -411 < Se || (e.setStatus ? (e.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            e.setStatus("");
          }, 86 * 55 + -69 * -41 + -7558), c();
        }, -4789 + 10 * 479)) : c());
      }
    }
    if (e.run = fo, e.preInit)
      for (typeof e.preInit == "function" && (e.preInit = [e.preInit]); -8376 + -4 * 689 + 11132 < e.preInit.length; )
        e.preInit.pop()();
    return fo(), o.ready;
  };
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const _s = Symbol("Comlink.proxy"), Fl = Symbol("Comlink.endpoint"), Xl = Symbol("Comlink.releaseProxy"), Zo = Symbol("Comlink.finalizer"), Gi = Symbol("Comlink.thrown"), $s = (t) => typeof t == "object" && t !== null || typeof t == "function", jl = {
  canHandle: (t) => $s(t) && t[_s],
  serialize(t) {
    const { port1: o, port2: e } = new MessageChannel();
    return eg(t, o), [e, [e]];
  },
  deserialize(t) {
    return t.start(), ng(t);
  }
}, Ml = {
  canHandle: (t) => $s(t) && Gi in t,
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
}, qs = /* @__PURE__ */ new Map([
  ["proxy", jl],
  ["throw", Ml]
]);
function Ul(t, o) {
  for (const e of t)
    if (o === e || e === "*" || e instanceof RegExp && e.test(o))
      return !0;
  return !1;
}
function eg(t, o = globalThis, e = ["*"]) {
  o.addEventListener("message", function n(i) {
    if (!i || !i.data)
      return;
    if (!Ul(e, i.origin)) {
      console.warn(`Invalid origin '${i.origin}' for comlink proxy`);
      return;
    }
    const { id: r, type: a, path: s } = Object.assign({ path: [] }, i.data), g = (i.data.argumentList || []).map(Rt);
    let I;
    try {
      const C = s.slice(0, -1).reduce((h, A) => h[A], t), l = s.reduce((h, A) => h[A], t);
      switch (a) {
        case "GET":
          I = l;
          break;
        case "SET":
          C[s.slice(-1)[0]] = Rt(i.data.value), I = !0;
          break;
        case "APPLY":
          I = l.apply(C, g);
          break;
        case "CONSTRUCT":
          {
            const h = new l(...g);
            I = ql(h);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: h, port2: A } = new MessageChannel();
            eg(t, A), I = $l(h, [h]);
          }
          break;
        case "RELEASE":
          I = void 0;
          break;
        default:
          return;
      }
    } catch (C) {
      I = { value: C, [Gi]: 0 };
    }
    Promise.resolve(I).catch((C) => ({ value: C, [Gi]: 0 })).then((C) => {
      const [l, h] = Ni(C);
      o.postMessage(Object.assign(Object.assign({}, l), { id: r }), h), a === "RELEASE" && (o.removeEventListener("message", n), tg(o), Zo in t && typeof t[Zo] == "function" && t[Zo]());
    }).catch((C) => {
      const [l, h] = Ni({
        value: new TypeError("Unserializable return value"),
        [Gi]: 0
      });
      o.postMessage(Object.assign(Object.assign({}, l), { id: r }), h);
    });
  }), o.start && o.start();
}
function Jl(t) {
  return t.constructor.name === "MessagePort";
}
function tg(t) {
  Jl(t) && t.close();
}
function ng(t, o) {
  return ar(t, [], o);
}
function li(t) {
  if (t)
    throw new Error("Proxy has been released and is not useable");
}
function ig(t) {
  return nn(t, {
    type: "RELEASE"
  }).then(() => {
    tg(t);
  });
}
const Ei = /* @__PURE__ */ new WeakMap(), Pi = "FinalizationRegistry" in globalThis && new FinalizationRegistry((t) => {
  const o = (Ei.get(t) || 0) - 1;
  Ei.set(t, o), o === 0 && ig(t);
});
function Ql(t, o) {
  const e = (Ei.get(o) || 0) + 1;
  Ei.set(o, e), Pi && Pi.register(t, o, t);
}
function zl(t) {
  Pi && Pi.unregister(t);
}
function ar(t, o = [], e = function() {
}) {
  let n = !1;
  const i = new Proxy(e, {
    get(r, a) {
      if (li(n), a === Xl)
        return () => {
          zl(i), ig(t), n = !0;
        };
      if (a === "then") {
        if (o.length === 0)
          return { then: () => i };
        const s = nn(t, {
          type: "GET",
          path: o.map((g) => g.toString())
        }).then(Rt);
        return s.then.bind(s);
      }
      return ar(t, [...o, a]);
    },
    set(r, a, s) {
      li(n);
      const [g, I] = Ni(s);
      return nn(t, {
        type: "SET",
        path: [...o, a].map((C) => C.toString()),
        value: g
      }, I).then(Rt);
    },
    apply(r, a, s) {
      li(n);
      const g = o[o.length - 1];
      if (g === Fl)
        return nn(t, {
          type: "ENDPOINT"
        }).then(Rt);
      if (g === "bind")
        return ar(t, o.slice(0, -1));
      const [I, C] = c0(s);
      return nn(t, {
        type: "APPLY",
        path: o.map((l) => l.toString()),
        argumentList: I
      }, C).then(Rt);
    },
    construct(r, a) {
      li(n);
      const [s, g] = c0(a);
      return nn(t, {
        type: "CONSTRUCT",
        path: o.map((I) => I.toString()),
        argumentList: s
      }, g).then(Rt);
    }
  });
  return Ql(i, t), i;
}
function _l(t) {
  return Array.prototype.concat.apply([], t);
}
function c0(t) {
  const o = t.map(Ni);
  return [o.map((e) => e[0]), _l(o.map((e) => e[1]))];
}
const og = /* @__PURE__ */ new WeakMap();
function $l(t, o) {
  return og.set(t, o), t;
}
function ql(t) {
  return Object.assign(t, { [_s]: !0 });
}
function Ni(t) {
  for (const [o, e] of qs)
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
    og.get(t) || []
  ];
}
function Rt(t) {
  switch (t.type) {
    case "HANDLER":
      return qs.get(t.name).deserialize(t.value);
    case "RAW":
      return t.value;
  }
}
function nn(t, o, e) {
  return new Promise((n) => {
    const i = eu();
    t.addEventListener("message", function r(a) {
      !a.data || !a.data.id || a.data.id !== i || (t.removeEventListener("message", r), n(a.data));
    }), t.start && t.start(), t.postMessage(Object.assign({ id: i }, o), e);
  });
}
function eu() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
function tu(t, o) {
  const { z: e } = o || {};
  return !e || !t ? !0 : Math.abs(e) < t;
}
function nu(t, o, e) {
  const n = Qs(e, t), i = zs(o, e);
  return yl(i, n);
}
const rg = "dmFyIGNlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5Owp2YXIgbGUgPSAoYSwgdSwgZSkgPT4gdSBpbiBhID8gY2UoYSwgdSwgeyBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwLCB2YWx1ZTogZSB9KSA6IGFbdV0gPSBlOwp2YXIgWW4gPSAoYSwgdSwgZSkgPT4gKGxlKGEsIHR5cGVvZiB1ICE9ICJzeW1ib2wiID8gdSArICIiIDogdSwgZSksIGUpOwpjb25zdCBrdCA9IHsKICBzaW1kOiAic2FtX3NpbWQud2FzbSIsCiAgc2FtOiAic2FtLndhc20iCn0sIGZlID0gYXN5bmMgKCkgPT4gV2ViQXNzZW1ibHkudmFsaWRhdGUobmV3IFVpbnQ4QXJyYXkoWzAsIDk3LCAxMTUsIDEwOSwgMSwgMCwgMCwgMCwgMSwgNSwgMSwgOTYsIDAsIDEsIDEyMywgMywgMiwgMSwgMCwgMTAsIDEwLCAxLCA4LCAwLCA2NSwgMCwgMjUzLCAxNSwgMjUzLCA5OCwgMTFdKSk7CmNsYXNzIEkgZXh0ZW5kcyBFcnJvciB7CiAgY29uc3RydWN0b3IoZSwgbSkgewogICAgc3VwZXIoZSk7CiAgICBZbih0aGlzLCAiY2F1c2UiKTsKICAgIHRoaXMubmFtZSA9ICJBdXRvQ2FwdHVyZUVycm9yIiwgdGhpcy5jYXVzZSA9IG07CiAgfQogIC8vIENoYW5nZSB0aGlzIHRvIERlY29yYXRvciB3aGVuIHRoZXkgd2lsbCBiZSBpbiBzdGFibGUgcmVsZWFzZQogIHN0YXRpYyBsb2dFcnJvcihlKSB7CiAgfQogIHN0YXRpYyBmcm9tQ2FtZXJhRXJyb3IoZSkgewogICAgaWYgKHRoaXMubG9nRXJyb3IoZSksIGUgaW5zdGFuY2VvZiBJKQogICAgICByZXR1cm4gZTsKICAgIGxldCBtOwogICAgc3dpdGNoIChlLm5hbWUpIHsKICAgICAgY2FzZSAiT3ZlcmNvbnN0cmFpbmVkRXJyb3IiOgogICAgICAgIG0gPSAiTWluaW11bSBxdWFsaXR5IHJlcXVpcmVtZW50cyBhcmUgbm90IG1ldCBieSB5b3VyIGNhbWVyYSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdFJlYWRhYmxlRXJyb3IiOgogICAgICBjYXNlICJBYm9ydEVycm9yIjoKICAgICAgICBtID0gIlRoZSB3ZWJjYW0gaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciBhcHBsaWNhdGlvbiI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdEFsbG93ZWRFcnJvciI6CiAgICAgICAgbSA9ICJUbyB1c2UgeW91ciBjYW1lcmEsIHlvdSBtdXN0IGFsbG93IHBlcm1pc3Npb25zIjsKICAgICAgICBicmVhazsKICAgICAgY2FzZSAiTm90Rm91bmRFcnJvciI6CiAgICAgICAgbSA9ICJUaGVyZSBpcyBubyBjYW1lcmEgYXZhaWxhYmxlIHRvIHlvdSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGRlZmF1bHQ6CiAgICAgICAgbSA9ICJBbiB1bmtub3duIGNhbWVyYSBlcnJvciBoYXMgb2NjdXJyZWQiOwogICAgICAgIGJyZWFrOwogICAgfQogICAgcmV0dXJuIG5ldyBJKG0sIGUpOwogIH0KICBzdGF0aWMgZnJvbUVycm9yKGUpIHsKICAgIGlmICh0aGlzLmxvZ0Vycm9yKGUpLCBlIGluc3RhbmNlb2YgSSkKICAgICAgcmV0dXJuIGU7CiAgICBjb25zdCBtID0gIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkIjsKICAgIHJldHVybiBuZXcgSShtKTsKICB9Cn0KY29uc3QgZGUgPSB7CiAgUkdCOiAiUkdCIiwKICBSR0JBOiAiUkdCQSIKfSwgaGUgPSAoYSkgPT4gTnVtYmVyLnBhcnNlRmxvYXQoYS50b0ZpeGVkKDMpKSwgeWUgPSAoYSwgdSkgPT4gTWF0aC5taW4oYSwgdSk7CnZhciBwZSA9IGZ1bmN0aW9uKCkgewogIHZhciBhID0gdHlwZW9mIGRvY3VtZW50IDwgInUiICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgPyBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYyA6IHZvaWQgMDsKICByZXR1cm4gZnVuY3Rpb24odSkgewogICAgdSA9IHUgfHwge307CiAgICB2YXIgZTsKICAgIGUgfHwgKGUgPSB0eXBlb2YgdSA8ICJ1IiA/IHUgOiB7fSk7CiAgICB2YXIgbSwgZzsKICAgIGUucmVhZHkgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihuLCB0KSB7CiAgICAgIG0gPSBuLCBnID0gdDsKICAgIH0pOwogICAgdmFyIEMgPSB7fSwgQTsKICAgIGZvciAoQSBpbiBlKQogICAgICBlLmhhc093blByb3BlcnR5KEEpICYmIChDW0FdID0gZVtBXSk7CiAgICB2YXIgTSA9ICIuL3RoaXMucHJvZ3JhbSIsIE8gPSAhMSwgVCA9ICExOwogICAgTyA9IHR5cGVvZiB3aW5kb3cgPT0gIm9iamVjdCIsIFQgPSB0eXBlb2YgaW1wb3J0U2NyaXB0cyA9PSAiZnVuY3Rpb24iOwogICAgdmFyIF8gPSAiIiwgUzsKICAgIChPIHx8IFQpICYmIChUID8gXyA9IHNlbGYubG9jYXRpb24uaHJlZiA6IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgKF8gPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYyksIGEgJiYgKF8gPSBhKSwgXy5pbmRleE9mKCJibG9iOiIpICE9PSAwID8gXyA9IF8uc3Vic3RyKDAsIF8ubGFzdEluZGV4T2YoIi8iKSArIDEpIDogXyA9ICIiLCBUICYmIChTID0gZnVuY3Rpb24obikgewogICAgICB2YXIgdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOwogICAgICByZXR1cm4gdC5vcGVuKCJHRVQiLCBuLCAhMSksIHQucmVzcG9uc2VUeXBlID0gImFycmF5YnVmZmVyIiwgdC5zZW5kKG51bGwpLCBuZXcgVWludDhBcnJheSh0LnJlc3BvbnNlKTsKICAgIH0pKTsKICAgIHZhciBFID0gZS5wcmludEVyciB8fCBjb25zb2xlLndhcm4uYmluZChjb25zb2xlKTsKICAgIGZvciAoQSBpbiBDKQogICAgICBDLmhhc093blByb3BlcnR5KEEpICYmIChlW0FdID0gQ1tBXSk7CiAgICBDID0gbnVsbCwgZS50aGlzUHJvZ3JhbSAmJiAoTSA9IGUudGhpc1Byb2dyYW0pOwogICAgdmFyIFc7CiAgICBlLndhc21CaW5hcnkgJiYgKFcgPSBlLndhc21CaW5hcnkpLCBlLm5vRXhpdFJ1bnRpbWUgJiYgZS5ub0V4aXRSdW50aW1lLCB0eXBlb2YgV2ViQXNzZW1ibHkgIT0gIm9iamVjdCIgJiYgc24oIm5vIG5hdGl2ZSB3YXNtIHN1cHBvcnQgZGV0ZWN0ZWQiKTsKICAgIHZhciBILCBrbiA9ICExOwogICAgZnVuY3Rpb24gS24obikgewogICAgICBuIHx8IHNuKCJBc3NlcnRpb24gZmFpbGVkOiB1bmRlZmluZWQiKTsKICAgIH0KICAgIHZhciBRbiA9IHR5cGVvZiBUZXh0RGVjb2RlciA8ICJ1IiA/IG5ldyBUZXh0RGVjb2RlcigidXRmOCIpIDogdm9pZCAwOwogICAgZnVuY3Rpb24gVXQobiwgdCwgcikgewogICAgICB2YXIgaSA9IEY7CiAgICAgIGlmICgwIDwgcikgewogICAgICAgIHIgPSB0ICsgciAtIDE7CiAgICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCBuLmxlbmd0aDsgKytvKSB7CiAgICAgICAgICB2YXIgcyA9IG4uY2hhckNvZGVBdChvKTsKICAgICAgICAgIGlmICg1NTI5NiA8PSBzICYmIDU3MzQzID49IHMpIHsKICAgICAgICAgICAgdmFyIGwgPSBuLmNoYXJDb2RlQXQoKytvKTsKICAgICAgICAgICAgcyA9IDY1NTM2ICsgKChzICYgMTAyMykgPDwgMTApIHwgbCAmIDEwMjM7CiAgICAgICAgICB9CiAgICAgICAgICBpZiAoMTI3ID49IHMpIHsKICAgICAgICAgICAgaWYgKHQgPj0gcikKICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgaVt0KytdID0gczsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIGlmICgyMDQ3ID49IHMpIHsKICAgICAgICAgICAgICBpZiAodCArIDEgPj0gcikKICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgIGlbdCsrXSA9IDE5MiB8IHMgPj4gNjsKICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICBpZiAoNjU1MzUgPj0gcykgewogICAgICAgICAgICAgICAgaWYgKHQgKyAyID49IHIpCiAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgaVt0KytdID0gMjI0IHwgcyA+PiAxMjsKICAgICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgaWYgKHQgKyAzID49IHIpCiAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgaVt0KytdID0gMjQwIHwgcyA+PiAxOCwgaVt0KytdID0gMTI4IHwgcyA+PiAxMiAmIDYzOwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgICBpW3QrK10gPSAxMjggfCBzID4+IDYgJiA2MzsKICAgICAgICAgICAgfQogICAgICAgICAgICBpW3QrK10gPSAxMjggfCBzICYgNjM7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIGlbdF0gPSAwOwogICAgICB9CiAgICB9CiAgICB2YXIgcW4gPSB0eXBlb2YgVGV4dERlY29kZXIgPCAidSIgPyBuZXcgVGV4dERlY29kZXIoInV0Zi0xNmxlIikgOiB2b2lkIDA7CiAgICBmdW5jdGlvbiBEdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSBuID4+IDEsIGkgPSByICsgdCAvIDI7ICEociA+PSBpKSAmJiB5bltyXTsgKQogICAgICAgICsrcjsKICAgICAgaWYgKHIgPDw9IDEsIDMyIDwgciAtIG4gJiYgcW4pCiAgICAgICAgcmV0dXJuIHFuLmRlY29kZShGLnN1YmFycmF5KG4sIHIpKTsKICAgICAgZm9yIChyID0gMCwgaSA9ICIiOyA7ICkgewogICAgICAgIHZhciBvID0gUVtuICsgMiAqIHIgPj4gMV07CiAgICAgICAgaWYgKG8gPT0gMCB8fCByID09IHQgLyAyKQogICAgICAgICAgcmV0dXJuIGk7CiAgICAgICAgKytyLCBpICs9IFN0cmluZy5mcm9tQ2hhckNvZGUobyk7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIEJ0KG4sIHQsIHIpIHsKICAgICAgaWYgKHIgPT09IHZvaWQgMCAmJiAociA9IDIxNDc0ODM2NDcpLCAyID4gcikKICAgICAgICByZXR1cm4gMDsKICAgICAgciAtPSAyOwogICAgICB2YXIgaSA9IHQ7CiAgICAgIHIgPSByIDwgMiAqIG4ubGVuZ3RoID8gciAvIDIgOiBuLmxlbmd0aDsKICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCByOyArK28pCiAgICAgICAgUVt0ID4+IDFdID0gbi5jaGFyQ29kZUF0KG8pLCB0ICs9IDI7CiAgICAgIHJldHVybiBRW3QgPj4gMV0gPSAwLCB0IC0gaTsKICAgIH0KICAgIGZ1bmN0aW9uIHp0KG4pIHsKICAgICAgcmV0dXJuIDIgKiBuLmxlbmd0aDsKICAgIH0KICAgIGZ1bmN0aW9uIFZ0KG4sIHQpIHsKICAgICAgZm9yICh2YXIgciA9IDAsIGkgPSAiIjsgIShyID49IHQgLyA0KTsgKSB7CiAgICAgICAgdmFyIG8gPSBrW24gKyA0ICogciA+PiAyXTsKICAgICAgICBpZiAobyA9PSAwKQogICAgICAgICAgYnJlYWs7CiAgICAgICAgKytyLCA2NTUzNiA8PSBvID8gKG8gLT0gNjU1MzYsIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiB8IG8gPj4gMTAsIDU2MzIwIHwgbyAmIDEwMjMpKSA6IGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShvKTsKICAgICAgfQogICAgICByZXR1cm4gaTsKICAgIH0KICAgIGZ1bmN0aW9uIEd0KG4sIHQsIHIpIHsKICAgICAgaWYgKHIgPT09IHZvaWQgMCAmJiAociA9IDIxNDc0ODM2NDcpLCA0ID4gcikKICAgICAgICByZXR1cm4gMDsKICAgICAgdmFyIGkgPSB0OwogICAgICByID0gaSArIHIgLSA0OwogICAgICBmb3IgKHZhciBvID0gMDsgbyA8IG4ubGVuZ3RoOyArK28pIHsKICAgICAgICB2YXIgcyA9IG4uY2hhckNvZGVBdChvKTsKICAgICAgICBpZiAoNTUyOTYgPD0gcyAmJiA1NzM0MyA+PSBzKSB7CiAgICAgICAgICB2YXIgbCA9IG4uY2hhckNvZGVBdCgrK28pOwogICAgICAgICAgcyA9IDY1NTM2ICsgKChzICYgMTAyMykgPDwgMTApIHwgbCAmIDEwMjM7CiAgICAgICAgfQogICAgICAgIGlmIChrW3QgPj4gMl0gPSBzLCB0ICs9IDQsIHQgKyA0ID4gcikKICAgICAgICAgIGJyZWFrOwogICAgICB9CiAgICAgIHJldHVybiBrW3QgPj4gMl0gPSAwLCB0IC0gaTsKICAgIH0KICAgIGZ1bmN0aW9uIFl0KG4pIHsKICAgICAgZm9yICh2YXIgdCA9IDAsIHIgPSAwOyByIDwgbi5sZW5ndGg7ICsrcikgewogICAgICAgIHZhciBpID0gbi5jaGFyQ29kZUF0KHIpOwogICAgICAgIDU1Mjk2IDw9IGkgJiYgNTczNDMgPj0gaSAmJiArK3IsIHQgKz0gNDsKICAgICAgfQogICAgICByZXR1cm4gdDsKICAgIH0KICAgIHZhciBLLCBZLCBGLCBRLCB5biwgaywgVSwgbnQsIHR0OwogICAgZnVuY3Rpb24gZXQobikgewogICAgICBLID0gbiwgZS5IRUFQOCA9IFkgPSBuZXcgSW50OEFycmF5KG4pLCBlLkhFQVAxNiA9IFEgPSBuZXcgSW50MTZBcnJheShuKSwgZS5IRUFQMzIgPSBrID0gbmV3IEludDMyQXJyYXkobiksIGUuSEVBUFU4ID0gRiA9IG5ldyBVaW50OEFycmF5KG4pLCBlLkhFQVBVMTYgPSB5biA9IG5ldyBVaW50MTZBcnJheShuKSwgZS5IRUFQVTMyID0gVSA9IG5ldyBVaW50MzJBcnJheShuKSwgZS5IRUFQRjMyID0gbnQgPSBuZXcgRmxvYXQzMkFycmF5KG4pLCBlLkhFQVBGNjQgPSB0dCA9IG5ldyBGbG9hdDY0QXJyYXkobik7CiAgICB9CiAgICB2YXIgcnQgPSBlLklOSVRJQUxfTUVNT1JZIHx8IDE2Nzc3MjE2OwogICAgZS53YXNtTWVtb3J5ID8gSCA9IGUud2FzbU1lbW9yeSA6IEggPSBuZXcgV2ViQXNzZW1ibHkuTWVtb3J5KHsgaW5pdGlhbDogcnQgLyA2NTUzNiwgbWF4aW11bTogMzI3NjggfSksIEggJiYgKEsgPSBILmJ1ZmZlciksIHJ0ID0gSy5ieXRlTGVuZ3RoLCBldChLKTsKICAgIHZhciBpdCA9IFtdLCBhdCA9IFtdLCBadCA9IFtdLCBvdCA9IFtdOwogICAgZnVuY3Rpb24gJHQoKSB7CiAgICAgIHZhciBuID0gZS5wcmVSdW4uc2hpZnQoKTsKICAgICAgaXQudW5zaGlmdChuKTsKICAgIH0KICAgIHZhciBaID0gMCwgb24gPSBudWxsOwogICAgZS5wcmVsb2FkZWRJbWFnZXMgPSB7fSwgZS5wcmVsb2FkZWRBdWRpb3MgPSB7fTsKICAgIGZ1bmN0aW9uIHNuKG4pIHsKICAgICAgdGhyb3cgZS5vbkFib3J0ICYmIGUub25BYm9ydChuKSwgRShuKSwga24gPSAhMCwgbiA9IG5ldyBXZWJBc3NlbWJseS5SdW50aW1lRXJyb3IoImFib3J0KCIgKyBuICsgIikuIEJ1aWxkIHdpdGggLXMgQVNTRVJUSU9OUz0xIGZvciBtb3JlIGluZm8uIiksIGcobiksIG47CiAgICB9CiAgICBmdW5jdGlvbiBSbihuKSB7CiAgICAgIHZhciB0ID0gJDsKICAgICAgcmV0dXJuIFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCA/IHQuc3RhcnRzV2l0aChuKSA6IHQuaW5kZXhPZihuKSA9PT0gMDsKICAgIH0KICAgIGZ1bmN0aW9uIHN0KCkgewogICAgICByZXR1cm4gUm4oImRhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCwiKTsKICAgIH0KICAgIHZhciAkID0gInNhbS53YXNtIjsKICAgIGlmICghc3QoKSkgewogICAgICB2YXIgdXQgPSAkOwogICAgICAkID0gZS5sb2NhdGVGaWxlID8gZS5sb2NhdGVGaWxlKHV0LCBfKSA6IF8gKyB1dDsKICAgIH0KICAgIGZ1bmN0aW9uIGN0KCkgewogICAgICB0cnkgewogICAgICAgIGlmIChXKQogICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFcpOwogICAgICAgIGlmIChTKQogICAgICAgICAgcmV0dXJuIFMoJCk7CiAgICAgICAgdGhyb3cgImJvdGggYXN5bmMgYW5kIHN5bmMgZmV0Y2hpbmcgb2YgdGhlIHdhc20gZmFpbGVkIjsKICAgICAgfSBjYXRjaCAobikgewogICAgICAgIHNuKG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBYdCgpIHsKICAgICAgcmV0dXJuIFcgfHwgIU8gJiYgIVQgfHwgdHlwZW9mIGZldGNoICE9ICJmdW5jdGlvbiIgfHwgUm4oImZpbGU6Ly8iKSA/IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oY3QpIDogZmV0Y2goJCwgeyBjcmVkZW50aWFsczogInNhbWUtb3JpZ2luIiB9KS50aGVuKGZ1bmN0aW9uKG4pIHsKICAgICAgICBpZiAoIW4ub2spCiAgICAgICAgICB0aHJvdyAiZmFpbGVkIHRvIGxvYWQgd2FzbSBiaW5hcnkgZmlsZSBhdCAnIiArICQgKyAiJyI7CiAgICAgICAgcmV0dXJuIG4uYXJyYXlCdWZmZXIoKTsKICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oKSB7CiAgICAgICAgcmV0dXJuIGN0KCk7CiAgICAgIH0pOwogICAgfQogICAgZnVuY3Rpb24gcG4obikgewogICAgICBmb3IgKDsgMCA8IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4uc2hpZnQoKTsKICAgICAgICBpZiAodHlwZW9mIHQgPT0gImZ1bmN0aW9uIikKICAgICAgICAgIHQoZSk7CiAgICAgICAgZWxzZSB7CiAgICAgICAgICB2YXIgciA9IHQuQmE7CiAgICAgICAgICB0eXBlb2YgciA9PSAibnVtYmVyIiA/IHQudGEgPT09IHZvaWQgMCA/IHhuKCJ2IiwgcikoKSA6IHhuKCJ2aSIsIHIpKHQudGEpIDogcih0LnRhID09PSB2b2lkIDAgPyBudWxsIDogdC50YSk7CiAgICAgICAgfQogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiB4bihuLCB0KSB7CiAgICAgIHZhciByID0gW107CiAgICAgIHJldHVybiBmdW5jdGlvbigpIHsKICAgICAgICByLmxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7CiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspCiAgICAgICAgICByW2ldID0gYXJndW1lbnRzW2ldOwogICAgICAgIHJldHVybiByICYmIHIubGVuZ3RoID8gZVsiZHluQ2FsbF8iICsgbl0uYXBwbHkobnVsbCwgW3RdLmNvbmNhdChyKSkgOiBlWyJkeW5DYWxsXyIgKyBuXS5jYWxsKG51bGwsIHQpOwogICAgICB9OwogICAgfQogICAgZnVuY3Rpb24gSnQobikgewogICAgICB0aGlzLmRhID0gbiAtIDE2LCB0aGlzLk9hID0gZnVuY3Rpb24odCkgewogICAgICAgIGtbdGhpcy5kYSArIDggPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLkxhID0gZnVuY3Rpb24odCkgewogICAgICAgIGtbdGhpcy5kYSArIDAgPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLk1hID0gZnVuY3Rpb24oKSB7CiAgICAgICAga1t0aGlzLmRhICsgNCA+PiAyXSA9IDA7CiAgICAgIH0sIHRoaXMuS2EgPSBmdW5jdGlvbigpIHsKICAgICAgICBZW3RoaXMuZGEgKyAxMiA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuTmEgPSBmdW5jdGlvbigpIHsKICAgICAgICBZW3RoaXMuZGEgKyAxMyA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuRmEgPSBmdW5jdGlvbih0LCByKSB7CiAgICAgICAgdGhpcy5PYSh0KSwgdGhpcy5MYShyKSwgdGhpcy5NYSgpLCB0aGlzLkthKCksIHRoaXMuTmEoKTsKICAgICAgfTsKICAgIH0KICAgIGZ1bmN0aW9uIG1uKCkgewogICAgICByZXR1cm4gMCA8IG1uLnhhOwogICAgfQogICAgZnVuY3Rpb24gRm4obikgewogICAgICBzd2l0Y2ggKG4pIHsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICByZXR1cm4gMDsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIDQ6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlIDg6CiAgICAgICAgICByZXR1cm4gMzsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biB0eXBlIHNpemU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgdmFyIGx0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gUihuKSB7CiAgICAgIGZvciAodmFyIHQgPSAiIjsgRltuXTsgKQogICAgICAgIHQgKz0gbHRbRltuKytdXTsKICAgICAgcmV0dXJuIHQ7CiAgICB9CiAgICB2YXIgcSA9IHt9LCBYID0ge30sIHZuID0ge307CiAgICBmdW5jdGlvbiBJbihuKSB7CiAgICAgIGlmIChuID09PSB2b2lkIDApCiAgICAgICAgcmV0dXJuICJfdW5rbm93biI7CiAgICAgIG4gPSBuLnJlcGxhY2UoL1teYS16QS1aMC05X10vZywgIiQiKTsKICAgICAgdmFyIHQgPSBuLmNoYXJDb2RlQXQoMCk7CiAgICAgIHJldHVybiA0OCA8PSB0ICYmIDU3ID49IHQgPyAiXyIgKyBuIDogbjsKICAgIH0KICAgIGZ1bmN0aW9uIGpuKG4sIHQpIHsKICAgICAgcmV0dXJuIG4gPSBJbihuKSwgbmV3IEZ1bmN0aW9uKCJib2R5IiwgInJldHVybiBmdW5jdGlvbiAiICsgbiArIGAoKSB7CiAgICAidXNlIHN0cmljdCI7ICAgIHJldHVybiBib2R5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7Cn07CmApKHQpOwogICAgfQogICAgZnVuY3Rpb24gTG4obikgewogICAgICB2YXIgdCA9IEVycm9yLCByID0gam4obiwgZnVuY3Rpb24oaSkgewogICAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMubWVzc2FnZSA9IGksIGkgPSBFcnJvcihpKS5zdGFjaywgaSAhPT0gdm9pZCAwICYmICh0aGlzLnN0YWNrID0gdGhpcy50b1N0cmluZygpICsgYApgICsgaS5yZXBsYWNlKC9eRXJyb3IoOlteXG5dKik/XG4vLCAiIikpOwogICAgICB9KTsKICAgICAgcmV0dXJuIHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSksIHIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gciwgci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlID09PSB2b2lkIDAgPyB0aGlzLm5hbWUgOiB0aGlzLm5hbWUgKyAiOiAiICsgdGhpcy5tZXNzYWdlOwogICAgICB9LCByOwogICAgfQogICAgdmFyIG5uID0gdm9pZCAwOwogICAgZnVuY3Rpb24gdihuKSB7CiAgICAgIHRocm93IG5ldyBubihuKTsKICAgIH0KICAgIHZhciBmdCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIGduKG4pIHsKICAgICAgdGhyb3cgbmV3IGZ0KG4pOwogICAgfQogICAgZnVuY3Rpb24gdG4obiwgdCwgcikgewogICAgICBmdW5jdGlvbiBpKGMpIHsKICAgICAgICBjID0gcihjKSwgYy5sZW5ndGggIT09IG4ubGVuZ3RoICYmIGduKCJNaXNtYXRjaGVkIHR5cGUgY29udmVydGVyIGNvdW50Iik7CiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBuLmxlbmd0aDsgKyt5KQogICAgICAgICAgRChuW3ldLCBjW3ldKTsKICAgICAgfQogICAgICBuLmZvckVhY2goZnVuY3Rpb24oYykgewogICAgICAgIHZuW2NdID0gdDsKICAgICAgfSk7CiAgICAgIHZhciBvID0gQXJyYXkodC5sZW5ndGgpLCBzID0gW10sIGwgPSAwOwogICAgICB0LmZvckVhY2goZnVuY3Rpb24oYywgeSkgewogICAgICAgIFguaGFzT3duUHJvcGVydHkoYykgPyBvW3ldID0gWFtjXSA6IChzLnB1c2goYyksIHEuaGFzT3duUHJvcGVydHkoYykgfHwgKHFbY10gPSBbXSksIHFbY10ucHVzaChmdW5jdGlvbigpIHsKICAgICAgICAgIG9beV0gPSBYW2NdLCArK2wsIGwgPT09IHMubGVuZ3RoICYmIGkobyk7CiAgICAgICAgfSkpOwogICAgICB9KSwgcy5sZW5ndGggPT09IDAgJiYgaShvKTsKICAgIH0KICAgIGZ1bmN0aW9uIEQobiwgdCwgcikgewogICAgICBpZiAociA9IHIgfHwge30sICEoImFyZ1BhY2tBZHZhbmNlIiBpbiB0KSkKICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJyZWdpc3RlclR5cGUgcmVnaXN0ZXJlZEluc3RhbmNlIHJlcXVpcmVzIGFyZ1BhY2tBZHZhbmNlIik7CiAgICAgIHZhciBpID0gdC5uYW1lOwogICAgICBpZiAobiB8fCB2KCd0eXBlICInICsgaSArICciIG11c3QgaGF2ZSBhIHBvc2l0aXZlIGludGVnZXIgdHlwZWlkIHBvaW50ZXInKSwgWC5oYXNPd25Qcm9wZXJ0eShuKSkgewogICAgICAgIGlmIChyLkVhKQogICAgICAgICAgcmV0dXJuOwogICAgICAgIHYoIkNhbm5vdCByZWdpc3RlciB0eXBlICciICsgaSArICInIHR3aWNlIik7CiAgICAgIH0KICAgICAgWFtuXSA9IHQsIGRlbGV0ZSB2bltuXSwgcS5oYXNPd25Qcm9wZXJ0eShuKSAmJiAodCA9IHFbbl0sIGRlbGV0ZSBxW25dLCB0LmZvckVhY2goZnVuY3Rpb24obykgewogICAgICAgIG8oKTsKICAgICAgfSkpOwogICAgfQogICAgZnVuY3Rpb24gS3QobikgewogICAgICByZXR1cm4geyBjb3VudDogbi5jb3VudCwgb2E6IG4ub2EsIHBhOiBuLnBhLCBkYTogbi5kYSwgZmE6IG4uZmEsIGdhOiBuLmdhLCBoYTogbi5oYSB9OwogICAgfQogICAgZnVuY3Rpb24gTm4obikgewogICAgICB2KG4uQS5mYS5lYS5uYW1lICsgIiBpbnN0YW5jZSBhbHJlYWR5IGRlbGV0ZWQiKTsKICAgIH0KICAgIHZhciBIbiA9ICExOwogICAgZnVuY3Rpb24gZHQoKSB7CiAgICB9CiAgICBmdW5jdGlvbiBodChuKSB7CiAgICAgIC0tbi5jb3VudC52YWx1ZSwgbi5jb3VudC52YWx1ZSA9PT0gMCAmJiAobi5nYSA/IG4uaGEubmEobi5nYSkgOiBuLmZhLmVhLm5hKG4uZGEpKTsKICAgIH0KICAgIGZ1bmN0aW9uIHVuKG4pIHsKICAgICAgcmV0dXJuIHR5cGVvZiBGaW5hbGl6YXRpb25Hcm91cCA+ICJ1IiA/ICh1biA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICByZXR1cm4gdDsKICAgICAgfSwgbikgOiAoSG4gPSBuZXcgRmluYWxpemF0aW9uR3JvdXAoZnVuY3Rpb24odCkgewogICAgICAgIGZvciAodmFyIHIgPSB0Lm5leHQoKTsgIXIuZG9uZTsgciA9IHQubmV4dCgpKQogICAgICAgICAgciA9IHIudmFsdWUsIHIuZGEgPyBodChyKSA6IGNvbnNvbGUud2Fybigib2JqZWN0IGFscmVhZHkgZGVsZXRlZDogIiArIHIuZGEpOwogICAgICB9KSwgdW4gPSBmdW5jdGlvbih0KSB7CiAgICAgICAgcmV0dXJuIEhuLnJlZ2lzdGVyKHQsIHQuQSwgdC5BKSwgdDsKICAgICAgfSwgZHQgPSBmdW5jdGlvbih0KSB7CiAgICAgICAgSG4udW5yZWdpc3Rlcih0LkEpOwogICAgICB9LCB1bihuKSk7CiAgICB9CiAgICB2YXIgY24gPSB2b2lkIDAsIGxuID0gW107CiAgICBmdW5jdGlvbiBVbigpIHsKICAgICAgZm9yICg7IGxuLmxlbmd0aDsgKSB7CiAgICAgICAgdmFyIG4gPSBsbi5wb3AoKTsKICAgICAgICBuLkEub2EgPSAhMSwgbi5kZWxldGUoKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gVigpIHsKICAgIH0KICAgIHZhciB5dCA9IHt9OwogICAgZnVuY3Rpb24gUXQobiwgdCkgewogICAgICB2YXIgciA9IGU7CiAgICAgIGlmIChyW25dLmphID09PSB2b2lkIDApIHsKICAgICAgICB2YXIgaSA9IHJbbl07CiAgICAgICAgcltuXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgcmV0dXJuIHJbbl0uamEuaGFzT3duUHJvcGVydHkoYXJndW1lbnRzLmxlbmd0aCkgfHwgdigiRnVuY3Rpb24gJyIgKyB0ICsgIicgY2FsbGVkIHdpdGggYW4gaW52YWxpZCBudW1iZXIgb2YgYXJndW1lbnRzICgiICsgYXJndW1lbnRzLmxlbmd0aCArICIpIC0gZXhwZWN0cyBvbmUgb2YgKCIgKyByW25dLmphICsgIikhIiksIHJbbl0uamFbYXJndW1lbnRzLmxlbmd0aF0uYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICB9LCByW25dLmphID0gW10sIHJbbl0uamFbaS55YV0gPSBpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBwdChuLCB0LCByKSB7CiAgICAgIGUuaGFzT3duUHJvcGVydHkobikgPyAoKHIgPT09IHZvaWQgMCB8fCBlW25dLmphICE9PSB2b2lkIDAgJiYgZVtuXS5qYVtyXSAhPT0gdm9pZCAwKSAmJiB2KCJDYW5ub3QgcmVnaXN0ZXIgcHVibGljIG5hbWUgJyIgKyBuICsgIicgdHdpY2UiKSwgUXQobiwgbiksIGUuaGFzT3duUHJvcGVydHkocikgJiYgdigiQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIG92ZXJsb2FkcyBvZiBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgbnVtYmVyIG9mIGFyZ3VtZW50cyAoIiArIHIgKyAiKSEiKSwgZVtuXS5qYVtyXSA9IHQpIDogKGVbbl0gPSB0LCByICE9PSB2b2lkIDAgJiYgKGVbbl0uUmEgPSByKSk7CiAgICB9CiAgICBmdW5jdGlvbiBxdChuLCB0LCByLCBpLCBvLCBzLCBsLCBjKSB7CiAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMuY29uc3RydWN0b3IgPSB0LCB0aGlzLm1hID0gciwgdGhpcy5uYSA9IGksIHRoaXMuaWEgPSBvLCB0aGlzLkNhID0gcywgdGhpcy5xYSA9IGwsIHRoaXMuQWEgPSBjOwogICAgfQogICAgZnVuY3Rpb24gd24obiwgdCwgcikgewogICAgICBmb3IgKDsgdCAhPT0gcjsgKQogICAgICAgIHQucWEgfHwgdigiRXhwZWN0ZWQgbnVsbCBvciBpbnN0YW5jZSBvZiAiICsgci5uYW1lICsgIiwgZ290IGFuIGluc3RhbmNlIG9mICIgKyB0Lm5hbWUpLCBuID0gdC5xYShuKSwgdCA9IHQuaWE7CiAgICAgIHJldHVybiBuOwogICAgfQogICAgZnVuY3Rpb24gbmUobiwgdCkgewogICAgICByZXR1cm4gdCA9PT0gbnVsbCA/ICh0aGlzLnVhICYmIHYoIm51bGwgaXMgbm90IGEgdmFsaWQgIiArIHRoaXMubmFtZSksIDApIDogKHQuQSB8fCB2KCdDYW5ub3QgcGFzcyAiJyArIHJuKHQpICsgJyIgYXMgYSAnICsgdGhpcy5uYW1lKSwgdC5BLmRhIHx8IHYoIkNhbm5vdCBwYXNzIGRlbGV0ZWQgb2JqZWN0IGFzIGEgcG9pbnRlciBvZiB0eXBlICIgKyB0aGlzLm5hbWUpLCB3bih0LkEuZGEsIHQuQS5mYS5lYSwgdGhpcy5lYSkpOwogICAgfQogICAgZnVuY3Rpb24gdGUobiwgdCkgewogICAgICBpZiAodCA9PT0gbnVsbCkgewogICAgICAgIGlmICh0aGlzLnVhICYmIHYoIm51bGwgaXMgbm90IGEgdmFsaWQgIiArIHRoaXMubmFtZSksIHRoaXMuc2EpIHsKICAgICAgICAgIHZhciByID0gdGhpcy5IYSgpOwogICAgICAgICAgcmV0dXJuIG4gIT09IG51bGwgJiYgbi5wdXNoKHRoaXMubmEsIHIpLCByOwogICAgICAgIH0KICAgICAgICByZXR1cm4gMDsKICAgICAgfQogICAgICBpZiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgcm4odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksICF0aGlzLnJhICYmIHQuQS5mYS5yYSAmJiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyAodC5BLmhhID8gdC5BLmhhLm5hbWUgOiB0LkEuZmEubmFtZSkgKyAiIHRvIHBhcmFtZXRlciB0eXBlICIgKyB0aGlzLm5hbWUpLCByID0gd24odC5BLmRhLCB0LkEuZmEuZWEsIHRoaXMuZWEpLCB0aGlzLnNhKQogICAgICAgIHN3aXRjaCAodC5BLmdhID09PSB2b2lkIDAgJiYgdigiUGFzc2luZyByYXcgcG9pbnRlciB0byBzbWFydCBwb2ludGVyIGlzIGlsbGVnYWwiKSwgdGhpcy5QYSkgewogICAgICAgICAgY2FzZSAwOgogICAgICAgICAgICB0LkEuaGEgPT09IHRoaXMgPyByID0gdC5BLmdhIDogdigiQ2Fubm90IGNvbnZlcnQgYXJndW1lbnQgb2YgdHlwZSAiICsgKHQuQS5oYSA/IHQuQS5oYS5uYW1lIDogdC5BLmZhLm5hbWUpICsgIiB0byBwYXJhbWV0ZXIgdHlwZSAiICsgdGhpcy5uYW1lKTsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICBjYXNlIDE6CiAgICAgICAgICAgIHIgPSB0LkEuZ2E7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgY2FzZSAyOgogICAgICAgICAgICBpZiAodC5BLmhhID09PSB0aGlzKQogICAgICAgICAgICAgIHIgPSB0LkEuZ2E7CiAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgIHZhciBpID0gdC5jbG9uZSgpOwogICAgICAgICAgICAgIHIgPSB0aGlzLklhKHIsIGVuKGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgICAgaS5kZWxldGUoKTsKICAgICAgICAgICAgICB9KSksIG4gIT09IG51bGwgJiYgbi5wdXNoKHRoaXMubmEsIHIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgZGVmYXVsdDoKICAgICAgICAgICAgdigiVW5zdXBwb3J0aW5nIHNoYXJpbmcgcG9saWN5Iik7CiAgICAgICAgfQogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIGVlKG4sIHQpIHsKICAgICAgcmV0dXJuIHQgPT09IG51bGwgPyAodGhpcy51YSAmJiB2KCJudWxsIGlzIG5vdCBhIHZhbGlkICIgKyB0aGlzLm5hbWUpLCAwKSA6ICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBybih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgdC5BLmZhLnJhICYmIHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArIHQuQS5mYS5uYW1lICsgIiB0byBwYXJhbWV0ZXIgdHlwZSAiICsgdGhpcy5uYW1lKSwgd24odC5BLmRhLCB0LkEuZmEuZWEsIHRoaXMuZWEpKTsKICAgIH0KICAgIGZ1bmN0aW9uIEFuKG4pIHsKICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKFVbbiA+PiAyXSk7CiAgICB9CiAgICBmdW5jdGlvbiBtdChuLCB0LCByKSB7CiAgICAgIHJldHVybiB0ID09PSByID8gbiA6IHIuaWEgPT09IHZvaWQgMCA/IG51bGwgOiAobiA9IG10KG4sIHQsIHIuaWEpLCBuID09PSBudWxsID8gbnVsbCA6IHIuQWEobikpOwogICAgfQogICAgdmFyIGZuID0ge307CiAgICBmdW5jdGlvbiByZShuLCB0KSB7CiAgICAgIGZvciAodCA9PT0gdm9pZCAwICYmIHYoInB0ciBzaG91bGQgbm90IGJlIHVuZGVmaW5lZCIpOyBuLmlhOyApCiAgICAgICAgdCA9IG4ucWEodCksIG4gPSBuLmlhOwogICAgICByZXR1cm4gZm5bdF07CiAgICB9CiAgICBmdW5jdGlvbiBfbihuLCB0KSB7CiAgICAgIHJldHVybiB0LmZhICYmIHQuZGEgfHwgZ24oIm1ha2VDbGFzc0hhbmRsZSByZXF1aXJlcyBwdHIgYW5kIHB0clR5cGUiKSwgISF0LmhhICE9ICEhdC5nYSAmJiBnbigiQm90aCBzbWFydFB0clR5cGUgYW5kIHNtYXJ0UHRyIG11c3QgYmUgc3BlY2lmaWVkIiksIHQuY291bnQgPSB7IHZhbHVlOiAxIH0sIHVuKE9iamVjdC5jcmVhdGUobiwgeyBBOiB7IHZhbHVlOiB0IH0gfSkpOwogICAgfQogICAgZnVuY3Rpb24gQihuLCB0LCByLCBpKSB7CiAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMuZWEgPSB0LCB0aGlzLnVhID0gciwgdGhpcy5yYSA9IGksIHRoaXMuc2EgPSAhMSwgdGhpcy5uYSA9IHRoaXMuSWEgPSB0aGlzLkhhID0gdGhpcy53YSA9IHRoaXMuUGEgPSB0aGlzLkdhID0gdm9pZCAwLCB0LmlhICE9PSB2b2lkIDAgPyB0aGlzLnRvV2lyZVR5cGUgPSB0ZSA6ICh0aGlzLnRvV2lyZVR5cGUgPSBpID8gbmUgOiBlZSwgdGhpcy5rYSA9IG51bGwpOwogICAgfQogICAgZnVuY3Rpb24gdnQobiwgdCwgcikgewogICAgICBlLmhhc093blByb3BlcnR5KG4pIHx8IGduKCJSZXBsYWNpbmcgbm9uZXhpc3RhbnQgcHVibGljIHN5bWJvbCIpLCBlW25dLmphICE9PSB2b2lkIDAgJiYgciAhPT0gdm9pZCAwID8gZVtuXS5qYVtyXSA9IHQgOiAoZVtuXSA9IHQsIGVbbl0ueWEgPSByKTsKICAgIH0KICAgIGZ1bmN0aW9uIEcobiwgdCkgewogICAgICBuID0gUihuKTsKICAgICAgdmFyIHIgPSB4bihuLCB0KTsKICAgICAgcmV0dXJuIHR5cGVvZiByICE9ICJmdW5jdGlvbiIgJiYgdigidW5rbm93biBmdW5jdGlvbiBwb2ludGVyIHdpdGggc2lnbmF0dXJlICIgKyBuICsgIjogIiArIHQpLCByOwogICAgfQogICAgdmFyIGd0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gd3QobikgewogICAgICBuID0gV3Qobik7CiAgICAgIHZhciB0ID0gUihuKTsKICAgICAgcmV0dXJuIHoobiksIHQ7CiAgICB9CiAgICBmdW5jdGlvbiBkbihuLCB0KSB7CiAgICAgIGZ1bmN0aW9uIHIocykgewogICAgICAgIG9bc10gfHwgWFtzXSB8fCAodm5bc10gPyB2bltzXS5mb3JFYWNoKHIpIDogKGkucHVzaChzKSwgb1tzXSA9ICEwKSk7CiAgICAgIH0KICAgICAgdmFyIGkgPSBbXSwgbyA9IHt9OwogICAgICB0aHJvdyB0LmZvckVhY2gociksIG5ldyBndChuICsgIjogIiArIGkubWFwKHd0KS5qb2luKFsiLCAiXSkpOwogICAgfQogICAgZnVuY3Rpb24gQXQobiwgdCkgewogICAgICBmb3IgKHZhciByID0gW10sIGkgPSAwOyBpIDwgbjsgaSsrKQogICAgICAgIHIucHVzaChrWyh0ID4+IDIpICsgaV0pOwogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIENuKG4pIHsKICAgICAgZm9yICg7IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4ucG9wKCk7CiAgICAgICAgbi5wb3AoKSh0KTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gX3QobiwgdCwgcikgewogICAgICByZXR1cm4gbiBpbnN0YW5jZW9mIE9iamVjdCB8fCB2KHIgKyAnIHdpdGggaW52YWxpZCAidGhpcyI6ICcgKyBuKSwgbiBpbnN0YW5jZW9mIHQuZWEuY29uc3RydWN0b3IgfHwgdihyICsgJyBpbmNvbXBhdGlibGUgd2l0aCAidGhpcyIgb2YgdHlwZSAnICsgbi5jb25zdHJ1Y3Rvci5uYW1lKSwgbi5BLmRhIHx8IHYoImNhbm5vdCBjYWxsIGVtc2NyaXB0ZW4gYmluZGluZyBtZXRob2QgIiArIHIgKyAiIG9uIGRlbGV0ZWQgb2JqZWN0IiksIHduKG4uQS5kYSwgbi5BLmZhLmVhLCB0LmVhKTsKICAgIH0KICAgIHZhciBEbiA9IFtdLCBqID0gW3t9LCB7IHZhbHVlOiB2b2lkIDAgfSwgeyB2YWx1ZTogbnVsbCB9LCB7IHZhbHVlOiAhMCB9LCB7IHZhbHVlOiAhMSB9XTsKICAgIGZ1bmN0aW9uIEJuKG4pIHsKICAgICAgNCA8IG4gJiYgLS1qW25dLkphID09PSAwICYmIChqW25dID0gdm9pZCAwLCBEbi5wdXNoKG4pKTsKICAgIH0KICAgIGZ1bmN0aW9uIGVuKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSB2b2lkIDA6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIG51bGw6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlICEwOgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgY2FzZSAhMToKICAgICAgICAgIHJldHVybiA0OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB2YXIgdCA9IERuLmxlbmd0aCA/IERuLnBvcCgpIDogai5sZW5ndGg7CiAgICAgICAgICByZXR1cm4galt0XSA9IHsgSmE6IDEsIHZhbHVlOiBuIH0sIHQ7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHJuKG4pIHsKICAgICAgaWYgKG4gPT09IG51bGwpCiAgICAgICAgcmV0dXJuICJudWxsIjsKICAgICAgdmFyIHQgPSB0eXBlb2YgbjsKICAgICAgcmV0dXJuIHQgPT09ICJvYmplY3QiIHx8IHQgPT09ICJhcnJheSIgfHwgdCA9PT0gImZ1bmN0aW9uIiA/IG4udG9TdHJpbmcoKSA6ICIiICsgbjsKICAgIH0KICAgIGZ1bmN0aW9uIGllKG4sIHQpIHsKICAgICAgc3dpdGNoICh0KSB7CiAgICAgICAgY2FzZSAyOgogICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHIpIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKG50W3IgPj4gMl0pOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDM6CiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24ocikgewogICAgICAgICAgICByZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUodHRbciA+PiAzXSk7CiAgICAgICAgICB9OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGZsb2F0IHR5cGU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gYWUobikgewogICAgICB2YXIgdCA9IEZ1bmN0aW9uOwogICAgICBpZiAoISh0IGluc3RhbmNlb2YgRnVuY3Rpb24pKQogICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIm5ld18gY2FsbGVkIHdpdGggY29uc3RydWN0b3IgdHlwZSAiICsgdHlwZW9mIHQgKyAiIHdoaWNoIGlzIG5vdCBhIGZ1bmN0aW9uIik7CiAgICAgIHZhciByID0gam4odC5uYW1lIHx8ICJ1bmtub3duRnVuY3Rpb25OYW1lIiwgZnVuY3Rpb24oKSB7CiAgICAgIH0pOwogICAgICByZXR1cm4gci5wcm90b3R5cGUgPSB0LnByb3RvdHlwZSwgciA9IG5ldyByKCksIG4gPSB0LmFwcGx5KHIsIG4pLCBuIGluc3RhbmNlb2YgT2JqZWN0ID8gbiA6IHI7CiAgICB9CiAgICBmdW5jdGlvbiBvZShuLCB0LCByKSB7CiAgICAgIHN3aXRjaCAodCkgewogICAgICAgIGNhc2UgMDoKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gWVtpXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBGW2ldOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICByZXR1cm4gciA/IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIFFbaSA+PiAxXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiB5bltpID4+IDFdOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gciA/IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIGtbaSA+PiAyXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBVW2kgPj4gMl07CiAgICAgICAgICB9OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGludGVnZXIgdHlwZTogIiArIG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiB6bihuKSB7CiAgICAgIHJldHVybiBuIHx8IHYoIkNhbm5vdCB1c2UgZGVsZXRlZCB2YWwuIGhhbmRsZSA9ICIgKyBuKSwgaltuXS52YWx1ZTsKICAgIH0KICAgIGZ1bmN0aW9uIEN0KG4sIHQpIHsKICAgICAgdmFyIHIgPSBYW25dOwogICAgICByZXR1cm4gciA9PT0gdm9pZCAwICYmIHYodCArICIgaGFzIHVua25vd24gdHlwZSAiICsgd3QobikpLCByOwogICAgfQogICAgdmFyIHNlID0ge30sIFR0ID0ge307CiAgICBmdW5jdGlvbiBFdCgpIHsKICAgICAgaWYgKCFWbikgewogICAgICAgIHZhciBuID0geyBVU0VSOiAid2ViX3VzZXIiLCBMT0dOQU1FOiAid2ViX3VzZXIiLCBQQVRIOiAiLyIsIFBXRDogIi8iLCBIT01FOiAiL2hvbWUvd2ViX3VzZXIiLCBMQU5HOiAodHlwZW9mIG5hdmlnYXRvciA9PSAib2JqZWN0IiAmJiBuYXZpZ2F0b3IubGFuZ3VhZ2VzICYmIG5hdmlnYXRvci5sYW5ndWFnZXNbMF0gfHwgIkMiKS5yZXBsYWNlKCItIiwgIl8iKSArICIuVVRGLTgiLCBfOiBNIHx8ICIuL3RoaXMucHJvZ3JhbSIgfSwgdDsKICAgICAgICBmb3IgKHQgaW4gVHQpCiAgICAgICAgICBuW3RdID0gVHRbdF07CiAgICAgICAgdmFyIHIgPSBbXTsKICAgICAgICBmb3IgKHQgaW4gbikKICAgICAgICAgIHIucHVzaCh0ICsgIj0iICsgblt0XSk7CiAgICAgICAgVm4gPSByOwogICAgICB9CiAgICAgIHJldHVybiBWbjsKICAgIH0KICAgIHZhciBWbiwgUHQgPSBbXTsKICAgIGZ1bmN0aW9uIE10KG4pIHsKICAgICAgdmFyIHQgPSB7fSwgcjsKICAgICAgZm9yIChyIGluIG4pCiAgICAgICAgKGZ1bmN0aW9uKGkpIHsKICAgICAgICAgIHZhciBvID0gbltpXTsKICAgICAgICAgIHRbaV0gPSB0eXBlb2YgbyA9PSAiZnVuY3Rpb24iID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIFB0LnB1c2goaSk7CiAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgcmV0dXJuIG8uYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgICAgICAgICAgfSBmaW5hbGx5IHsKICAgICAgICAgICAgICBpZiAoa24pCiAgICAgICAgICAgICAgICByZXR1cm47CiAgICAgICAgICAgICAgdmFyIHMgPSBQdC5wb3AoKTsKICAgICAgICAgICAgICBLbihzID09PSBpKTsKICAgICAgICAgICAgfQogICAgICAgICAgfSA6IG87CiAgICAgICAgfSkocik7CiAgICAgIHJldHVybiB0OwogICAgfQogICAgZm9yICh2YXIgT3QgPSBBcnJheSgyNTYpLCBUbiA9IDA7IDI1NiA+IFRuOyArK1RuKQogICAgICBPdFtUbl0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFRuKTsKICAgIGx0ID0gT3QsIG5uID0gZS5CaW5kaW5nRXJyb3IgPSBMbigiQmluZGluZ0Vycm9yIiksIGZ0ID0gZS5JbnRlcm5hbEVycm9yID0gTG4oIkludGVybmFsRXJyb3IiKSwgVi5wcm90b3R5cGUuaXNBbGlhc09mID0gZnVuY3Rpb24obikgewogICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgViAmJiBuIGluc3RhbmNlb2YgVikpCiAgICAgICAgcmV0dXJuICExOwogICAgICB2YXIgdCA9IHRoaXMuQS5mYS5lYSwgciA9IHRoaXMuQS5kYSwgaSA9IG4uQS5mYS5lYTsKICAgICAgZm9yIChuID0gbi5BLmRhOyB0LmlhOyApCiAgICAgICAgciA9IHQucWEociksIHQgPSB0LmlhOwogICAgICBmb3IgKDsgaS5pYTsgKQogICAgICAgIG4gPSBpLnFhKG4pLCBpID0gaS5pYTsKICAgICAgcmV0dXJuIHQgPT09IGkgJiYgciA9PT0gbjsKICAgIH0sIFYucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7CiAgICAgIGlmICh0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5wYSkKICAgICAgICByZXR1cm4gdGhpcy5BLmNvdW50LnZhbHVlICs9IDEsIHRoaXM7CiAgICAgIHZhciBuID0gdW4oT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcyksIHsgQTogeyB2YWx1ZTogS3QodGhpcy5BKSB9IH0pKTsKICAgICAgcmV0dXJuIG4uQS5jb3VudC52YWx1ZSArPSAxLCBuLkEub2EgPSAhMSwgbjsKICAgIH0sIFYucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uKCkgewogICAgICB0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5vYSAmJiAhdGhpcy5BLnBhICYmIHYoIk9iamVjdCBhbHJlYWR5IHNjaGVkdWxlZCBmb3IgZGVsZXRpb24iKSwgZHQodGhpcyksIGh0KHRoaXMuQSksIHRoaXMuQS5wYSB8fCAodGhpcy5BLmdhID0gdm9pZCAwLCB0aGlzLkEuZGEgPSB2b2lkIDApOwogICAgfSwgVi5wcm90b3R5cGUuaXNEZWxldGVkID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAhdGhpcy5BLmRhOwogICAgfSwgVi5wcm90b3R5cGUuZGVsZXRlTGF0ZXIgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIHRoaXMuQS5kYSB8fCBObih0aGlzKSwgdGhpcy5BLm9hICYmICF0aGlzLkEucGEgJiYgdigiT2JqZWN0IGFscmVhZHkgc2NoZWR1bGVkIGZvciBkZWxldGlvbiIpLCBsbi5wdXNoKHRoaXMpLCBsbi5sZW5ndGggPT09IDEgJiYgY24gJiYgY24oVW4pLCB0aGlzLkEub2EgPSAhMCwgdGhpczsKICAgIH0sIEIucHJvdG90eXBlLkRhID0gZnVuY3Rpb24obikgewogICAgICByZXR1cm4gdGhpcy53YSAmJiAobiA9IHRoaXMud2EobikpLCBuOwogICAgfSwgQi5wcm90b3R5cGUudmEgPSBmdW5jdGlvbihuKSB7CiAgICAgIHRoaXMubmEgJiYgdGhpcy5uYShuKTsKICAgIH0sIEIucHJvdG90eXBlLmFyZ1BhY2tBZHZhbmNlID0gOCwgQi5wcm90b3R5cGUucmVhZFZhbHVlRnJvbVBvaW50ZXIgPSBBbiwgQi5wcm90b3R5cGUuZGVsZXRlT2JqZWN0ID0gZnVuY3Rpb24obikgewogICAgICBuICE9PSBudWxsICYmIG4uZGVsZXRlKCk7CiAgICB9LCBCLnByb3RvdHlwZS5mcm9tV2lyZVR5cGUgPSBmdW5jdGlvbihuKSB7CiAgICAgIGZ1bmN0aW9uIHQoKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuc2EgPyBfbih0aGlzLmVhLm1hLCB7IGZhOiB0aGlzLkdhLCBkYTogciwgaGE6IHRoaXMsIGdhOiBuIH0pIDogX24odGhpcy5lYS5tYSwgeyBmYTogdGhpcywgZGE6IG4gfSk7CiAgICAgIH0KICAgICAgdmFyIHIgPSB0aGlzLkRhKG4pOwogICAgICBpZiAoIXIpCiAgICAgICAgcmV0dXJuIHRoaXMudmEobiksIG51bGw7CiAgICAgIHZhciBpID0gcmUodGhpcy5lYSwgcik7CiAgICAgIGlmIChpICE9PSB2b2lkIDApCiAgICAgICAgcmV0dXJuIGkuQS5jb3VudC52YWx1ZSA9PT0gMCA/IChpLkEuZGEgPSByLCBpLkEuZ2EgPSBuLCBpLmNsb25lKCkpIDogKGkgPSBpLmNsb25lKCksIHRoaXMudmEobiksIGkpOwogICAgICBpZiAoaSA9IHRoaXMuZWEuQ2EociksIGkgPSB5dFtpXSwgIWkpCiAgICAgICAgcmV0dXJuIHQuY2FsbCh0aGlzKTsKICAgICAgaSA9IHRoaXMucmEgPyBpLnphIDogaS5wb2ludGVyVHlwZTsKICAgICAgdmFyIG8gPSBtdChyLCB0aGlzLmVhLCBpLmVhKTsKICAgICAgcmV0dXJuIG8gPT09IG51bGwgPyB0LmNhbGwodGhpcykgOiB0aGlzLnNhID8gX24oaS5lYS5tYSwgeyBmYTogaSwgZGE6IG8sIGhhOiB0aGlzLCBnYTogbiB9KSA6IF9uKAogICAgICAgIGkuZWEubWEsCiAgICAgICAgeyBmYTogaSwgZGE6IG8gfQogICAgICApOwogICAgfSwgZS5nZXRJbmhlcml0ZWRJbnN0YW5jZUNvdW50ID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhmbikubGVuZ3RoOwogICAgfSwgZS5nZXRMaXZlSW5oZXJpdGVkSW5zdGFuY2VzID0gZnVuY3Rpb24oKSB7CiAgICAgIHZhciBuID0gW10sIHQ7CiAgICAgIGZvciAodCBpbiBmbikKICAgICAgICBmbi5oYXNPd25Qcm9wZXJ0eSh0KSAmJiBuLnB1c2goZm5bdF0pOwogICAgICByZXR1cm4gbjsKICAgIH0sIGUuZmx1c2hQZW5kaW5nRGVsZXRlcyA9IFVuLCBlLnNldERlbGF5RnVuY3Rpb24gPSBmdW5jdGlvbihuKSB7CiAgICAgIGNuID0gbiwgbG4ubGVuZ3RoICYmIGNuICYmIGNuKFVuKTsKICAgIH0sIGd0ID0gZS5VbmJvdW5kVHlwZUVycm9yID0gTG4oIlVuYm91bmRUeXBlRXJyb3IiKSwgZS5jb3VudF9lbXZhbF9oYW5kbGVzID0gZnVuY3Rpb24oKSB7CiAgICAgIGZvciAodmFyIG4gPSAwLCB0ID0gNTsgdCA8IGoubGVuZ3RoOyArK3QpCiAgICAgICAgalt0XSAhPT0gdm9pZCAwICYmICsrbjsKICAgICAgcmV0dXJuIG47CiAgICB9LCBlLmdldF9maXJzdF9lbXZhbCA9IGZ1bmN0aW9uKCkgewogICAgICBmb3IgKHZhciBuID0gNTsgbiA8IGoubGVuZ3RoOyArK24pCiAgICAgICAgaWYgKGpbbl0gIT09IHZvaWQgMCkKICAgICAgICAgIHJldHVybiBqW25dOwogICAgICByZXR1cm4gbnVsbDsKICAgIH0sIGF0LnB1c2goeyBCYTogZnVuY3Rpb24oKSB7CiAgICAgIFN0KCk7CiAgICB9IH0pOwogICAgdmFyIHVlID0gewogICAgICB6OiBmdW5jdGlvbihuKSB7CiAgICAgICAgcmV0dXJuIEVuKG4gKyAxNikgKyAxNjsKICAgICAgfSwKICAgICAgdTogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIHRocm93IG5ldyBKdChuKS5GYSh0LCByKSwgInVuY2F1Z2h0X2V4Y2VwdGlvbiIgaW4gbW4gPyBtbi54YSsrIDogbW4ueGEgPSAxLCBuOwogICAgICB9LAogICAgICB3OiBmdW5jdGlvbihuLCB0LCByLCBpLCBvKSB7CiAgICAgICAgdmFyIHMgPSBGbihyKTsKICAgICAgICB0ID0gUih0KSwgRChuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24obCkgewogICAgICAgICAgcmV0dXJuICEhbDsKICAgICAgICB9LCB0b1dpcmVUeXBlOiBmdW5jdGlvbihsLCBjKSB7CiAgICAgICAgICByZXR1cm4gYyA/IGkgOiBvOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogZnVuY3Rpb24obCkgewogICAgICAgICAgaWYgKHIgPT09IDEpCiAgICAgICAgICAgIHZhciBjID0gWTsKICAgICAgICAgIGVsc2UgaWYgKHIgPT09IDIpCiAgICAgICAgICAgIGMgPSBROwogICAgICAgICAgZWxzZSBpZiAociA9PT0gNCkKICAgICAgICAgICAgYyA9IGs7CiAgICAgICAgICBlbHNlCiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gYm9vbGVhbiB0eXBlIHNpemU6ICIgKyB0KTsKICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShjW2wgPj4gc10pOwogICAgICAgIH0sIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBoOiBmdW5jdGlvbihuLCB0LCByLCBpLCBvLCBzLCBsLCBjLCB5LCBmLCBkLCBoLCB3KSB7CiAgICAgICAgZCA9IFIoZCksIHMgPSBHKG8sIHMpLCBjICYmIChjID0gRyhsLCBjKSksIGYgJiYgKGYgPSBHKHksIGYpKSwgdyA9IEcoaCwgdyk7CiAgICAgICAgdmFyIFAgPSBJbihkKTsKICAgICAgICBwdChQLCBmdW5jdGlvbigpIHsKICAgICAgICAgIGRuKCJDYW5ub3QgY29uc3RydWN0ICIgKyBkICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIFtpXSk7CiAgICAgICAgfSksIHRuKFtuLCB0LCByXSwgaSA/IFtpXSA6IFtdLCBmdW5jdGlvbihwKSB7CiAgICAgICAgICBpZiAocCA9IHBbMF0sIGkpCiAgICAgICAgICAgIHZhciBOID0gcC5lYSwgYiA9IE4ubWE7CiAgICAgICAgICBlbHNlCiAgICAgICAgICAgIGIgPSBWLnByb3RvdHlwZTsKICAgICAgICAgIHAgPSBqbihQLCBmdW5jdGlvbigpIHsKICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSAhPT0geCkKICAgICAgICAgICAgICB0aHJvdyBuZXcgbm4oIlVzZSAnbmV3JyB0byBjb25zdHJ1Y3QgIiArIGQpOwogICAgICAgICAgICBpZiAoTC5sYSA9PT0gdm9pZCAwKQogICAgICAgICAgICAgIHRocm93IG5ldyBubihkICsgIiBoYXMgbm8gYWNjZXNzaWJsZSBjb25zdHJ1Y3RvciIpOwogICAgICAgICAgICB2YXIgYnQgPSBMLmxhW2FyZ3VtZW50cy5sZW5ndGhdOwogICAgICAgICAgICBpZiAoYnQgPT09IHZvaWQgMCkKICAgICAgICAgICAgICB0aHJvdyBuZXcgbm4oIlRyaWVkIHRvIGludm9rZSBjdG9yIG9mICIgKyBkICsgIiB3aXRoIGludmFsaWQgbnVtYmVyIG9mIHBhcmFtZXRlcnMgKCIgKyBhcmd1bWVudHMubGVuZ3RoICsgIikgLSBleHBlY3RlZCAoIiArIE9iamVjdC5rZXlzKEwubGEpLnRvU3RyaW5nKCkgKyAiKSBwYXJhbWV0ZXJzIGluc3RlYWQhIik7CiAgICAgICAgICAgIHJldHVybiBidC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgICAgICAgfSk7CiAgICAgICAgICB2YXIgeCA9IE9iamVjdC5jcmVhdGUoYiwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogcCB9IH0pOwogICAgICAgICAgcC5wcm90b3R5cGUgPSB4OwogICAgICAgICAgdmFyIEwgPSBuZXcgcXQoZCwgcCwgeCwgdywgTiwgcywgYywgZik7CiAgICAgICAgICBOID0gbmV3IEIoZCwgTCwgITAsICExKSwgYiA9IG5ldyBCKGQgKyAiKiIsIEwsICExLCAhMSk7CiAgICAgICAgICB2YXIgaG4gPSBuZXcgQihkICsgIiBjb25zdCoiLCBMLCAhMSwgITApOwogICAgICAgICAgcmV0dXJuIHl0W25dID0geyBwb2ludGVyVHlwZTogYiwgemE6IGhuIH0sIHZ0KFAsIHApLCBbTiwgYiwgaG5dOwogICAgICAgIH0pOwogICAgICB9LAogICAgICBnOiBmdW5jdGlvbihuLCB0LCByLCBpLCBvLCBzKSB7CiAgICAgICAgS24oMCA8IHQpOwogICAgICAgIHZhciBsID0gQXQodCwgcik7CiAgICAgICAgbyA9IEcoaSwgbyk7CiAgICAgICAgdmFyIGMgPSBbc10sIHkgPSBbXTsKICAgICAgICB0bihbXSwgW25dLCBmdW5jdGlvbihmKSB7CiAgICAgICAgICBmID0gZlswXTsKICAgICAgICAgIHZhciBkID0gImNvbnN0cnVjdG9yICIgKyBmLm5hbWU7CiAgICAgICAgICBpZiAoZi5lYS5sYSA9PT0gdm9pZCAwICYmIChmLmVhLmxhID0gW10pLCBmLmVhLmxhW3QgLSAxXSAhPT0gdm9pZCAwKQogICAgICAgICAgICB0aHJvdyBuZXcgbm4oIkNhbm5vdCByZWdpc3RlciBtdWx0aXBsZSBjb25zdHJ1Y3RvcnMgd2l0aCBpZGVudGljYWwgbnVtYmVyIG9mIHBhcmFtZXRlcnMgKCIgKyAodCAtIDEpICsgIikgZm9yIGNsYXNzICciICsgZi5uYW1lICsgIichIE92ZXJsb2FkIHJlc29sdXRpb24gaXMgY3VycmVudGx5IG9ubHkgcGVyZm9ybWVkIHVzaW5nIHRoZSBwYXJhbWV0ZXIgY291bnQsIG5vdCBhY3R1YWwgdHlwZSBpbmZvISIpOwogICAgICAgICAgcmV0dXJuIGYuZWEubGFbdCAtIDFdID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGRuKCJDYW5ub3QgY29uc3RydWN0ICIgKyBmLm5hbWUgKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgbCk7CiAgICAgICAgICB9LCB0bihbXSwgbCwgZnVuY3Rpb24oaCkgewogICAgICAgICAgICByZXR1cm4gZi5lYS5sYVt0IC0gMV0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICBhcmd1bWVudHMubGVuZ3RoICE9PSB0IC0gMSAmJiB2KGQgKyAiIGNhbGxlZCB3aXRoICIgKyBhcmd1bWVudHMubGVuZ3RoICsgIiBhcmd1bWVudHMsIGV4cGVjdGVkICIgKyAodCAtIDEpKSwgeS5sZW5ndGggPSAwLCBjLmxlbmd0aCA9IHQ7CiAgICAgICAgICAgICAgZm9yICh2YXIgdyA9IDE7IHcgPCB0OyArK3cpCiAgICAgICAgICAgICAgICBjW3ddID0gaFt3XS50b1dpcmVUeXBlKAogICAgICAgICAgICAgICAgICB5LAogICAgICAgICAgICAgICAgICBhcmd1bWVudHNbdyAtIDFdCiAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgIHJldHVybiB3ID0gby5hcHBseShudWxsLCBjKSwgQ24oeSksIGhbMF0uZnJvbVdpcmVUeXBlKHcpOwogICAgICAgICAgICB9LCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgYjogZnVuY3Rpb24obiwgdCwgciwgaSwgbywgcywgbCwgYywgeSwgZikgewogICAgICAgIHQgPSBSKHQpLCBvID0gRyhpLCBvKSwgdG4oW10sIFtuXSwgZnVuY3Rpb24oZCkgewogICAgICAgICAgZCA9IGRbMF07CiAgICAgICAgICB2YXIgaCA9IGQubmFtZSArICIuIiArIHQsIHcgPSB7IGdldDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGRuKCJDYW5ub3QgYWNjZXNzICIgKyBoICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIFtyLCBsXSk7CiAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCB9OwogICAgICAgICAgcmV0dXJuIHkgPyB3LnNldCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBkbigiQ2Fubm90IGFjY2VzcyAiICsgaCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbciwgbF0pOwogICAgICAgICAgfSA6IHcuc2V0ID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHYoaCArICIgaXMgYSByZWFkLW9ubHkgcHJvcGVydHkiKTsKICAgICAgICAgIH0sIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkLmVhLm1hLCB0LCB3KSwgdG4oW10sIHkgPyBbciwgbF0gOiBbcl0sIGZ1bmN0aW9uKFApIHsKICAgICAgICAgICAgdmFyIHAgPSBQWzBdLCBOID0geyBnZXQ6IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIHZhciB4ID0gX3QodGhpcywgZCwgaCArICIgZ2V0dGVyIik7CiAgICAgICAgICAgICAgcmV0dXJuIHAuZnJvbVdpcmVUeXBlKG8ocywgeCkpOwogICAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCB9OwogICAgICAgICAgICBpZiAoeSkgewogICAgICAgICAgICAgIHkgPSBHKGMsIHkpOwogICAgICAgICAgICAgIHZhciBiID0gUFsxXTsKICAgICAgICAgICAgICBOLnNldCA9IGZ1bmN0aW9uKHgpIHsKICAgICAgICAgICAgICAgIHZhciBMID0gX3QodGhpcywgZCwgaCArICIgc2V0dGVyIiksIGhuID0gW107CiAgICAgICAgICAgICAgICB5KGYsIEwsIGIudG9XaXJlVHlwZShobiwgeCkpLCBDbihobik7CiAgICAgICAgICAgICAgfTsKICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGQuZWEubWEsIHQsIE4pLCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgdjogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHQgPSBSKHQpLCBEKG4sIHsgbmFtZTogdCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihyKSB7CiAgICAgICAgICB2YXIgaSA9IGpbcl0udmFsdWU7CiAgICAgICAgICByZXR1cm4gQm4ociksIGk7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24ociwgaSkgewogICAgICAgICAgcmV0dXJuIGVuKGkpOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBtOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgciA9IEZuKHIpLCB0ID0gUih0KSwgRChuLCB7CiAgICAgICAgICBuYW1lOiB0LAogICAgICAgICAgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBpOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIG8pIHsKICAgICAgICAgICAgaWYgKHR5cGVvZiBvICE9ICJudW1iZXIiICYmIHR5cGVvZiBvICE9ICJib29sZWFuIikKICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCAiJyArIHJuKG8pICsgJyIgdG8gJyArIHRoaXMubmFtZSk7CiAgICAgICAgICAgIHJldHVybiBvOwogICAgICAgICAgfSwKICAgICAgICAgIGFyZ1BhY2tBZHZhbmNlOiA4LAogICAgICAgICAgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IGllKHQsIHIpLAogICAgICAgICAga2E6IG51bGwKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgYzogZnVuY3Rpb24obiwgdCwgciwgaSwgbywgcykgewogICAgICAgIHZhciBsID0gQXQodCwgcik7CiAgICAgICAgbiA9IFIobiksIG8gPSBHKGksIG8pLCBwdChuLCBmdW5jdGlvbigpIHsKICAgICAgICAgIGRuKCJDYW5ub3QgY2FsbCAiICsgbiArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBsKTsKICAgICAgICB9LCB0IC0gMSksIHRuKFtdLCBsLCBmdW5jdGlvbihjKSB7CiAgICAgICAgICB2YXIgeSA9IG4sIGYgPSBuOwogICAgICAgICAgYyA9IFtjWzBdLCBudWxsXS5jb25jYXQoYy5zbGljZSgxKSk7CiAgICAgICAgICB2YXIgZCA9IG8sIGggPSBjLmxlbmd0aDsKICAgICAgICAgIDIgPiBoICYmIHYoImFyZ1R5cGVzIGFycmF5IHNpemUgbWlzbWF0Y2ghIE11c3QgYXQgbGVhc3QgZ2V0IHJldHVybiB2YWx1ZSBhbmQgJ3RoaXMnIHR5cGVzISIpOwogICAgICAgICAgZm9yICh2YXIgdyA9IGNbMV0gIT09IG51bGwgJiYgITEsIFAgPSAhMSwgcCA9IDE7IHAgPCBjLmxlbmd0aDsgKytwKQogICAgICAgICAgICBpZiAoY1twXSAhPT0gbnVsbCAmJiBjW3BdLmthID09PSB2b2lkIDApIHsKICAgICAgICAgICAgICBQID0gITA7CiAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgIH0KICAgICAgICAgIHZhciBOID0gY1swXS5uYW1lICE9PSAidm9pZCIsIGIgPSAiIiwgeCA9ICIiOwogICAgICAgICAgZm9yIChwID0gMDsgcCA8IGggLSAyOyArK3ApCiAgICAgICAgICAgIGIgKz0gKHAgIT09IDAgPyAiLCAiIDogIiIpICsgImFyZyIgKyBwLCB4ICs9IChwICE9PSAwID8gIiwgIiA6ICIiKSArICJhcmciICsgcCArICJXaXJlZCI7CiAgICAgICAgICBmID0gInJldHVybiBmdW5jdGlvbiAiICsgSW4oZikgKyAiKCIgKyBiICsgYCkgewppZiAoYXJndW1lbnRzLmxlbmd0aCAhPT0gYCArIChoIC0gMikgKyBgKSB7CnRocm93QmluZGluZ0Vycm9yKCdmdW5jdGlvbiBgICsgZiArICIgY2FsbGVkIHdpdGggJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cywgZXhwZWN0ZWQgIiArIChoIC0gMikgKyBgIGFyZ3MhJyk7Cn0KYCwgUCAmJiAoZiArPSBgdmFyIGRlc3RydWN0b3JzID0gW107CmApOwogICAgICAgICAgdmFyIEwgPSBQID8gImRlc3RydWN0b3JzIiA6ICJudWxsIjsKICAgICAgICAgIGZvciAoYiA9ICJ0aHJvd0JpbmRpbmdFcnJvciBpbnZva2VyIGZuIHJ1bkRlc3RydWN0b3JzIHJldFR5cGUgY2xhc3NQYXJhbSIuc3BsaXQoIiAiKSwgZCA9IFt2LCBkLCBzLCBDbiwgY1swXSwgY1sxXV0sIHcgJiYgKGYgKz0gInZhciB0aGlzV2lyZWQgPSBjbGFzc1BhcmFtLnRvV2lyZVR5cGUoIiArIEwgKyBgLCB0aGlzKTsKYCksIHAgPSAwOyBwIDwgaCAtIDI7ICsrcCkKICAgICAgICAgICAgZiArPSAidmFyIGFyZyIgKyBwICsgIldpcmVkID0gYXJnVHlwZSIgKyBwICsgIi50b1dpcmVUeXBlKCIgKyBMICsgIiwgYXJnIiArIHAgKyAiKTsgLy8gIiArIGNbcCArIDJdLm5hbWUgKyBgCmAsIGIucHVzaCgiYXJnVHlwZSIgKyBwKSwgZC5wdXNoKGNbcCArIDJdKTsKICAgICAgICAgIGlmICh3ICYmICh4ID0gInRoaXNXaXJlZCIgKyAoMCA8IHgubGVuZ3RoID8gIiwgIiA6ICIiKSArIHgpLCBmICs9IChOID8gInZhciBydiA9ICIgOiAiIikgKyAiaW52b2tlcihmbiIgKyAoMCA8IHgubGVuZ3RoID8gIiwgIiA6ICIiKSArIHggKyBgKTsKYCwgUCkKICAgICAgICAgICAgZiArPSBgcnVuRGVzdHJ1Y3RvcnMoZGVzdHJ1Y3RvcnMpOwpgOwogICAgICAgICAgZWxzZQogICAgICAgICAgICBmb3IgKHAgPSB3ID8gMSA6IDI7IHAgPCBjLmxlbmd0aDsgKytwKQogICAgICAgICAgICAgIGggPSBwID09PSAxID8gInRoaXNXaXJlZCIgOiAiYXJnIiArIChwIC0gMikgKyAiV2lyZWQiLCBjW3BdLmthICE9PSBudWxsICYmIChmICs9IGggKyAiX2R0b3IoIiArIGggKyAiKTsgLy8gIiArIGNbcF0ubmFtZSArIGAKYCwgYi5wdXNoKGggKyAiX2R0b3IiKSwgZC5wdXNoKGNbcF0ua2EpKTsKICAgICAgICAgIHJldHVybiBOICYmIChmICs9IGB2YXIgcmV0ID0gcmV0VHlwZS5mcm9tV2lyZVR5cGUocnYpOwpyZXR1cm4gcmV0OwpgKSwgYi5wdXNoKGYgKyBgfQpgKSwgYyA9IGFlKGIpLmFwcGx5KG51bGwsIGQpLCB2dCh5LCBjLCB0IC0gMSksIFtdOwogICAgICAgIH0pOwogICAgICB9LAogICAgICBlOiBmdW5jdGlvbihuLCB0LCByLCBpLCBvKSB7CiAgICAgICAgZnVuY3Rpb24gcyhmKSB7CiAgICAgICAgICByZXR1cm4gZjsKICAgICAgICB9CiAgICAgICAgdCA9IFIodCksIG8gPT09IC0xICYmIChvID0gNDI5NDk2NzI5NSk7CiAgICAgICAgdmFyIGwgPSBGbihyKTsKICAgICAgICBpZiAoaSA9PT0gMCkgewogICAgICAgICAgdmFyIGMgPSAzMiAtIDggKiByOwogICAgICAgICAgcyA9IGZ1bmN0aW9uKGYpIHsKICAgICAgICAgICAgcmV0dXJuIGYgPDwgYyA+Pj4gYzsKICAgICAgICAgIH07CiAgICAgICAgfQogICAgICAgIHZhciB5ID0gdC5pbmRleE9mKCJ1bnNpZ25lZCIpICE9IC0xOwogICAgICAgIEQobiwgeyBuYW1lOiB0LCBmcm9tV2lyZVR5cGU6IHMsIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGYsIGQpIHsKICAgICAgICAgIGlmICh0eXBlb2YgZCAhPSAibnVtYmVyIiAmJiB0eXBlb2YgZCAhPSAiYm9vbGVhbiIpCiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0ICInICsgcm4oZCkgKyAnIiB0byAnICsgdGhpcy5uYW1lKTsKICAgICAgICAgIGlmIChkIDwgaSB8fCBkID4gbykKICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUGFzc2luZyBhIG51bWJlciAiJyArIHJuKGQpICsgJyIgZnJvbSBKUyBzaWRlIHRvIEMvQysrIHNpZGUgdG8gYW4gYXJndW1lbnQgb2YgdHlwZSAiJyArIHQgKyAnIiwgd2hpY2ggaXMgb3V0c2lkZSB0aGUgdmFsaWQgcmFuZ2UgWycgKyBpICsgIiwgIiArIG8gKyAiXSEiKTsKICAgICAgICAgIHJldHVybiB5ID8gZCA+Pj4gMCA6IGQgfCAwOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogb2UodCwgbCwgaSAhPT0gMCksIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBkOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgZnVuY3Rpb24gaShzKSB7CiAgICAgICAgICBzID4+PSAyOwogICAgICAgICAgdmFyIGwgPSBVOwogICAgICAgICAgcmV0dXJuIG5ldyBvKEssIGxbcyArIDFdLCBsW3NdKTsKICAgICAgICB9CiAgICAgICAgdmFyIG8gPSBbSW50OEFycmF5LCBVaW50OEFycmF5LCBJbnQxNkFycmF5LCBVaW50MTZBcnJheSwgSW50MzJBcnJheSwgVWludDMyQXJyYXksIEZsb2F0MzJBcnJheSwgRmxvYXQ2NEFycmF5XVt0XTsKICAgICAgICByID0gUihyKSwgRChuLCB7IG5hbWU6IHIsIGZyb21XaXJlVHlwZTogaSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBpIH0sIHsgRWE6ICEwIH0pOwogICAgICB9LAogICAgICBuOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdCA9IFIodCk7CiAgICAgICAgdmFyIHIgPSB0ID09PSAic3RkOjpzdHJpbmciOwogICAgICAgIEQobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICB2YXIgbyA9IFVbaSA+PiAyXTsKICAgICAgICAgICAgaWYgKHIpCiAgICAgICAgICAgICAgZm9yICh2YXIgcyA9IGkgKyA0LCBsID0gMDsgbCA8PSBvOyArK2wpIHsKICAgICAgICAgICAgICAgIHZhciBjID0gaSArIDQgKyBsOwogICAgICAgICAgICAgICAgaWYgKGwgPT0gbyB8fCBGW2NdID09IDApIHsKICAgICAgICAgICAgICAgICAgaWYgKHMpIHsKICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IHMsIGYgPSBGLCBkID0geSArIChjIC0gcyk7CiAgICAgICAgICAgICAgICAgICAgZm9yIChzID0geTsgZltzXSAmJiAhKHMgPj0gZCk7ICkKICAgICAgICAgICAgICAgICAgICAgICsrczsKICAgICAgICAgICAgICAgICAgICBpZiAoMTYgPCBzIC0geSAmJiBmLnN1YmFycmF5ICYmIFFuKQogICAgICAgICAgICAgICAgICAgICAgeSA9IFFuLmRlY29kZShmLnN1YmFycmF5KHksIHMpKTsKICAgICAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICAgIGZvciAoZCA9ICIiOyB5IDwgczsgKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoID0gZlt5KytdOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAoaCAmIDEyOCkgewogICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3ID0gZlt5KytdICYgNjM7CiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChoICYgMjI0KSA9PSAxOTIpCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGggJiAzMSkgPDwgNiB8IHcpOwogICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFAgPSBmW3krK10gJiA2MzsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGggPSAoaCAmIDI0MCkgPT0gMjI0ID8gKGggJiAxNSkgPDwgMTIgfCB3IDw8IDYgfCBQIDogKGggJiA3KSA8PCAxOCB8IHcgPDwgMTIgfCBQIDw8IDYgfCBmW3krK10gJiA2MywgNjU1MzYgPiBoID8gZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGgpIDogKGggLT0gNjU1MzYsIGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiB8IGggPj4gMTAsIDU2MzIwIHwgaCAmIDEwMjMpKTsKICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZQogICAgICAgICAgICAgICAgICAgICAgICAgIGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShoKTsKICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgIHkgPSBkOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgfSBlbHNlCiAgICAgICAgICAgICAgICAgICAgeSA9ICIiOwogICAgICAgICAgICAgICAgICBpZiAocCA9PT0gdm9pZCAwKQogICAgICAgICAgICAgICAgICAgIHZhciBwID0geTsKICAgICAgICAgICAgICAgICAgZWxzZQogICAgICAgICAgICAgICAgICAgIHAgKz0gIlwwIiwgcCArPSB5OwogICAgICAgICAgICAgICAgICBzID0gYyArIDE7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICBmb3IgKHAgPSBBcnJheShvKSwgbCA9IDA7IGwgPCBvOyArK2wpCiAgICAgICAgICAgICAgICBwW2xdID0gU3RyaW5nLmZyb21DaGFyQ29kZShGW2kgKyA0ICsgbF0pOwogICAgICAgICAgICAgIHAgPSBwLmpvaW4oIiIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiB6KGkpLCBwOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIG8pIHsKICAgICAgICAgICAgbyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyICYmIChvID0gbmV3IFVpbnQ4QXJyYXkobykpOwogICAgICAgICAgICB2YXIgcyA9IHR5cGVvZiBvID09ICJzdHJpbmciOwogICAgICAgICAgICBzIHx8IG8gaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IG8gaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSB8fCBvIGluc3RhbmNlb2YgSW50OEFycmF5IHx8IHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gc3RkOjpzdHJpbmciKTsKICAgICAgICAgICAgdmFyIGwgPSAociAmJiBzID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IDAsIGQgPSAwOyBkIDwgby5sZW5ndGg7ICsrZCkgewogICAgICAgICAgICAgICAgdmFyIGggPSBvLmNoYXJDb2RlQXQoZCk7CiAgICAgICAgICAgICAgICA1NTI5NiA8PSBoICYmIDU3MzQzID49IGggJiYgKGggPSA2NTUzNiArICgoaCAmIDEwMjMpIDw8IDEwKSB8IG8uY2hhckNvZGVBdCgrK2QpICYgMTAyMyksIDEyNyA+PSBoID8gKytmIDogZiA9IDIwNDcgPj0gaCA/IGYgKyAyIDogNjU1MzUgPj0gaCA/IGYgKyAzIDogZiArIDQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHJldHVybiBmOwogICAgICAgICAgICB9IDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgcmV0dXJuIG8ubGVuZ3RoOwogICAgICAgICAgICB9KSgpLCBjID0gRW4oNCArIGwgKyAxKTsKICAgICAgICAgICAgaWYgKFVbYyA+PiAyXSA9IGwsIHIgJiYgcykKICAgICAgICAgICAgICBVdChvLCBjICsgNCwgbCArIDEpOwogICAgICAgICAgICBlbHNlIGlmIChzKQogICAgICAgICAgICAgIGZvciAocyA9IDA7IHMgPCBsOyArK3MpIHsKICAgICAgICAgICAgICAgIHZhciB5ID0gby5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgICAgICAgMjU1IDwgeSAmJiAoeihjKSwgdigiU3RyaW5nIGhhcyBVVEYtMTYgY29kZSB1bml0cyB0aGF0IGRvIG5vdCBmaXQgaW4gOCBiaXRzIikpLCBGW2MgKyA0ICsgc10gPSB5OwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZQogICAgICAgICAgICAgIGZvciAocyA9IDA7IHMgPCBsOyArK3MpCiAgICAgICAgICAgICAgICBGW2MgKyA0ICsgc10gPSBvW3NdOwogICAgICAgICAgICByZXR1cm4gaSAhPT0gbnVsbCAmJiBpLnB1c2goeiwgYyksIGM7CiAgICAgICAgICB9LAogICAgICAgICAgYXJnUGFja0FkdmFuY2U6IDgsCiAgICAgICAgICByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sCiAgICAgICAgICBrYTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICB6KGkpOwogICAgICAgICAgfQogICAgICAgIH0pOwogICAgICB9LAogICAgICBqOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgaWYgKHIgPSBSKHIpLCB0ID09PSAyKQogICAgICAgICAgdmFyIGkgPSBEdCwgbyA9IEJ0LCBzID0genQsIGwgPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgcmV0dXJuIHluOwogICAgICAgICAgfSwgYyA9IDE7CiAgICAgICAgZWxzZQogICAgICAgICAgdCA9PT0gNCAmJiAoaSA9IFZ0LCBvID0gR3QsIHMgPSBZdCwgbCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICByZXR1cm4gVTsKICAgICAgICAgIH0sIGMgPSAyKTsKICAgICAgICBEKG4sIHsgbmFtZTogciwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICBmb3IgKHZhciBmID0gVVt5ID4+IDJdLCBkID0gbCgpLCBoLCB3ID0geSArIDQsIFAgPSAwOyBQIDw9IGY7ICsrUCkgewogICAgICAgICAgICB2YXIgcCA9IHkgKyA0ICsgUCAqIHQ7CiAgICAgICAgICAgIChQID09IGYgfHwgZFtwID4+IGNdID09IDApICYmICh3ID0gaSh3LCBwIC0gdyksIGggPT09IHZvaWQgMCA/IGggPSB3IDogKGggKz0gIlwwIiwgaCArPSB3KSwgdyA9IHAgKyB0KTsKICAgICAgICAgIH0KICAgICAgICAgIHJldHVybiB6KHkpLCBoOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHksIGYpIHsKICAgICAgICAgIHR5cGVvZiBmICE9ICJzdHJpbmciICYmIHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gQysrIHN0cmluZyB0eXBlICIgKyByKTsKICAgICAgICAgIHZhciBkID0gcyhmKSwgaCA9IEVuKDQgKyBkICsgdCk7CiAgICAgICAgICByZXR1cm4gVVtoID4+IDJdID0gZCA+PiBjLCBvKGYsIGggKyA0LCBkICsgdCksIHkgIT09IG51bGwgJiYgeS5wdXNoKHosIGgpLCBoOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sIGthOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICB6KHkpOwogICAgICAgIH0gfSk7CiAgICAgIH0sCiAgICAgIHg6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUih0KSwgRChuLCB7IFFhOiAhMCwgbmFtZTogdCwgYXJnUGFja0FkdmFuY2U6IDAsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSB9KTsKICAgICAgfSwKICAgICAgazogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIG4gPSB6bihuKSwgdCA9IEN0KHQsICJlbXZhbDo6YXMiKTsKICAgICAgICB2YXIgaSA9IFtdLCBvID0gZW4oaSk7CiAgICAgICAgcmV0dXJuIGtbciA+PiAyXSA9IG8sIHQudG9XaXJlVHlwZShpLCBuKTsKICAgICAgfSwKICAgICAgaTogQm4sCiAgICAgIGw6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICByZXR1cm4gbiA9IHpuKG4pLCB0ID0gem4odCksIGVuKG5bdF0pOwogICAgICB9LAogICAgICBwOiBmdW5jdGlvbihuKSB7CiAgICAgICAgdmFyIHQgPSBzZVtuXTsKICAgICAgICByZXR1cm4gZW4odCA9PT0gdm9pZCAwID8gUihuKSA6IHQpOwogICAgICB9LAogICAgICBvOiBmdW5jdGlvbihuKSB7CiAgICAgICAgQ24oaltuXS52YWx1ZSksIEJuKG4pOwogICAgICB9LAogICAgICB5OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgcmV0dXJuIG4gPSBDdChuLCAiX2VtdmFsX3Rha2VfdmFsdWUiKSwgbiA9IG4ucmVhZFZhbHVlRnJvbVBvaW50ZXIodCksIGVuKG4pOwogICAgICB9LAogICAgICBmOiBmdW5jdGlvbigpIHsKICAgICAgICBzbigpOwogICAgICB9LAogICAgICBxOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgRi5jb3B5V2l0aGluKG4sIHQsIHQgKyByKTsKICAgICAgfSwKICAgICAgcjogZnVuY3Rpb24obikgewogICAgICAgIG4gPj4+PSAwOwogICAgICAgIHZhciB0ID0gRi5sZW5ndGg7CiAgICAgICAgaWYgKDIxNDc0ODM2NDggPCBuKQogICAgICAgICAgcmV0dXJuICExOwogICAgICAgIGZvciAodmFyIHIgPSAxOyA0ID49IHI7IHIgKj0gMikgewogICAgICAgICAgdmFyIGkgPSB0ICogKDEgKyAwLjIgLyByKTsKICAgICAgICAgIGkgPSBNYXRoLm1pbihpLCBuICsgMTAwNjYzMjk2KSwgaSA9IE1hdGgubWF4KDE2Nzc3MjE2LCBuLCBpKSwgMCA8IGkgJSA2NTUzNiAmJiAoaSArPSA2NTUzNiAtIGkgJSA2NTUzNik7CiAgICAgICAgICBuOiB7CiAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgSC5ncm93KE1hdGgubWluKDIxNDc0ODM2NDgsIGkpIC0gSy5ieXRlTGVuZ3RoICsgNjU1MzUgPj4+IDE2KSwgZXQoSC5idWZmZXIpOwogICAgICAgICAgICAgIHZhciBvID0gMTsKICAgICAgICAgICAgICBicmVhayBuOwogICAgICAgICAgICB9IGNhdGNoIHsKICAgICAgICAgICAgfQogICAgICAgICAgICBvID0gdm9pZCAwOwogICAgICAgICAgfQogICAgICAgICAgaWYgKG8pCiAgICAgICAgICAgIHJldHVybiAhMDsKICAgICAgICB9CiAgICAgICAgcmV0dXJuICExOwogICAgICB9LAogICAgICBzOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSAwOwogICAgICAgIHJldHVybiBFdCgpLmZvckVhY2goZnVuY3Rpb24oaSwgbykgewogICAgICAgICAgdmFyIHMgPSB0ICsgcjsKICAgICAgICAgIGZvciAobyA9IGtbbiArIDQgKiBvID4+IDJdID0gcywgcyA9IDA7IHMgPCBpLmxlbmd0aDsgKytzKQogICAgICAgICAgICBZW28rKyA+PiAwXSA9IGkuY2hhckNvZGVBdChzKTsKICAgICAgICAgIFlbbyA+PiAwXSA9IDAsIHIgKz0gaS5sZW5ndGggKyAxOwogICAgICAgIH0pLCAwOwogICAgICB9LAogICAgICB0OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSBFdCgpOwogICAgICAgIGtbbiA+PiAyXSA9IHIubGVuZ3RoOwogICAgICAgIHZhciBpID0gMDsKICAgICAgICByZXR1cm4gci5mb3JFYWNoKGZ1bmN0aW9uKG8pIHsKICAgICAgICAgIGkgKz0gby5sZW5ndGggKyAxOwogICAgICAgIH0pLCBrW3QgPj4gMl0gPSBpLCAwOwogICAgICB9LAogICAgICBhOiBICiAgICB9OwogICAgKGZ1bmN0aW9uKCkgewogICAgICBmdW5jdGlvbiBuKHMpIHsKICAgICAgICBzID0gcy5leHBvcnRzLCBzID0gTXQocyksIGUuYXNtID0gcywgWi0tLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKFopLCBaID09IDAgJiYgb24gJiYgKHMgPSBvbiwgb24gPSBudWxsLCBzKCkpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIHQocykgewogICAgICAgIG4ocy5pbnN0YW5jZSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gcihzKSB7CiAgICAgICAgcmV0dXJuIFh0KCkudGhlbihmdW5jdGlvbihsKSB7CiAgICAgICAgICByZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUobCwgaSk7CiAgICAgICAgfSkudGhlbihzLCBmdW5jdGlvbihsKSB7CiAgICAgICAgICBFKCJmYWlsZWQgdG8gYXN5bmNocm9ub3VzbHkgcHJlcGFyZSB3YXNtOiAiICsgbCksIHNuKGwpOwogICAgICAgIH0pOwogICAgICB9CiAgICAgIHZhciBpID0geyBhOiB1ZSB9OwogICAgICBpZiAoWisrLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKFopLCBlLmluc3RhbnRpYXRlV2FzbSkKICAgICAgICB0cnkgewogICAgICAgICAgdmFyIG8gPSBlLmluc3RhbnRpYXRlV2FzbShpLCBuKTsKICAgICAgICAgIHJldHVybiBvID0gTXQobyk7CiAgICAgICAgfSBjYXRjaCAocykgewogICAgICAgICAgcmV0dXJuIEUoIk1vZHVsZS5pbnN0YW50aWF0ZVdhc20gY2FsbGJhY2sgZmFpbGVkIHdpdGggZXJyb3I6ICIgKyBzKSwgITE7CiAgICAgICAgfQogICAgICByZXR1cm4gZnVuY3Rpb24oKSB7CiAgICAgICAgaWYgKFcgfHwgdHlwZW9mIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nICE9ICJmdW5jdGlvbiIgfHwgc3QoKSB8fCBSbigiZmlsZTovLyIpIHx8IHR5cGVvZiBmZXRjaCAhPSAiZnVuY3Rpb24iKQogICAgICAgICAgcmV0dXJuIHIodCk7CiAgICAgICAgZmV0Y2goJCwgeyBjcmVkZW50aWFsczogInNhbWUtb3JpZ2luIiB9KS50aGVuKGZ1bmN0aW9uKHMpIHsKICAgICAgICAgIHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyhzLCBpKS50aGVuKHQsIGZ1bmN0aW9uKGwpIHsKICAgICAgICAgICAgcmV0dXJuIEUoIndhc20gc3RyZWFtaW5nIGNvbXBpbGUgZmFpbGVkOiAiICsgbCksIEUoImZhbGxpbmcgYmFjayB0byBBcnJheUJ1ZmZlciBpbnN0YW50aWF0aW9uIiksIHIodCk7CiAgICAgICAgICB9KTsKICAgICAgICB9KTsKICAgICAgfSgpLCB7fTsKICAgIH0pKCk7CiAgICB2YXIgU3QgPSBlLl9fX3dhc21fY2FsbF9jdG9ycyA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKFN0ID0gZS5fX193YXNtX2NhbGxfY3RvcnMgPSBlLmFzbS5CKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgRW4gPSBlLl9tYWxsb2MgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChFbiA9IGUuX21hbGxvYyA9IGUuYXNtLkMpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCB6ID0gZS5fZnJlZSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKHogPSBlLl9mcmVlID0gZS5hc20uRCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIFd0ID0gZS5fX19nZXRUeXBlTmFtZSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKFd0ID0gZS5fX19nZXRUeXBlTmFtZSA9IGUuYXNtLkUpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9OwogICAgZS5fX19lbWJpbmRfcmVnaXN0ZXJfbmF0aXZlX2FuZF9idWlsdGluX3R5cGVzID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fX19lbWJpbmRfcmVnaXN0ZXJfbmF0aXZlX2FuZF9idWlsdGluX3R5cGVzID0gZS5hc20uRikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paSA9IGUuYXNtLkcpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmkgPSBlLmFzbS5IKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2kgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaSA9IGUuYXNtLkkpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaSA9IGUuYXNtLkopLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpID0gZS5hc20uSykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9maWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfZmlpID0gZS5hc20uTCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlmID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWYgPSBlLmFzbS5NKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpID0gZS5hc20uTikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWkgPSBlLmFzbS5PKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWkgPSBlLmFzbS5QKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWkgPSBlLmFzbS5RKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpaWlpID0gZS5hc20uUikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaSA9IGUuYXNtLlMpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpaWRpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWlkaSA9IGUuYXNtLlQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpZGkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpZGkgPSBlLmFzbS5VKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWlpID0gZS5hc20uVikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWkgPSBlLmFzbS5XKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWkgPSBlLmFzbS5YKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWlpaSA9IGUuYXNtLlkpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWkgPSBlLmFzbS5aKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaSA9IGUuYXNtLl8pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdGFydF91bndpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdGFydF91bndpbmQgPSBlLmFzbS4kKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RvcF91bndpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdG9wX3Vud2luZCA9IGUuYXNtLmFhKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RhcnRfcmV3aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RhcnRfcmV3aW5kID0gZS5hc20uYmEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdG9wX3Jld2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0b3BfcmV3aW5kID0gZS5hc20uY2EpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9OwogICAgdmFyIFBuOwogICAgb24gPSBmdW5jdGlvbiBuKCkgewogICAgICBQbiB8fCBHbigpLCBQbiB8fCAob24gPSBuKTsKICAgIH07CiAgICBmdW5jdGlvbiBHbigpIHsKICAgICAgZnVuY3Rpb24gbigpIHsKICAgICAgICBpZiAoIVBuICYmIChQbiA9ICEwLCBlLmNhbGxlZFJ1biA9ICEwLCAha24pKSB7CiAgICAgICAgICBpZiAocG4oYXQpLCBwbihadCksIG0oZSksIGUub25SdW50aW1lSW5pdGlhbGl6ZWQgJiYgZS5vblJ1bnRpbWVJbml0aWFsaXplZCgpLCBlLnBvc3RSdW4pCiAgICAgICAgICAgIGZvciAodHlwZW9mIGUucG9zdFJ1biA9PSAiZnVuY3Rpb24iICYmIChlLnBvc3RSdW4gPSBbZS5wb3N0UnVuXSk7IGUucG9zdFJ1bi5sZW5ndGg7ICkgewogICAgICAgICAgICAgIHZhciB0ID0gZS5wb3N0UnVuLnNoaWZ0KCk7CiAgICAgICAgICAgICAgb3QudW5zaGlmdCh0KTsKICAgICAgICAgICAgfQogICAgICAgICAgcG4ob3QpOwogICAgICAgIH0KICAgICAgfQogICAgICBpZiAoISgwIDwgWikpIHsKICAgICAgICBpZiAoZS5wcmVSdW4pCiAgICAgICAgICBmb3IgKHR5cGVvZiBlLnByZVJ1biA9PSAiZnVuY3Rpb24iICYmIChlLnByZVJ1biA9IFtlLnByZVJ1bl0pOyBlLnByZVJ1bi5sZW5ndGg7ICkKICAgICAgICAgICAgJHQoKTsKICAgICAgICBwbihpdCksIDAgPCBaIHx8IChlLnNldFN0YXR1cyA/IChlLnNldFN0YXR1cygiUnVubmluZy4uLiIpLCBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgICAgICAgICAgZS5zZXRTdGF0dXMoIiIpOwogICAgICAgICAgfSwgMSksIG4oKTsKICAgICAgICB9LCAxKSkgOiBuKCkpOwogICAgICB9CiAgICB9CiAgICBpZiAoZS5ydW4gPSBHbiwgZS5wcmVJbml0KQogICAgICBmb3IgKHR5cGVvZiBlLnByZUluaXQgPT0gImZ1bmN0aW9uIiAmJiAoZS5wcmVJbml0ID0gW2UucHJlSW5pdF0pOyAwIDwgZS5wcmVJbml0Lmxlbmd0aDsgKQogICAgICAgIGUucHJlSW5pdC5wb3AoKSgpOwogICAgcmV0dXJuIEduKCksIHUucmVhZHk7CiAgfTsKfSgpOwpjbGFzcyBtZSB7CiAgY29uc3RydWN0b3IoKSB7CiAgICBZbih0aGlzLCAic2FtV2FzbU1vZHVsZSIpOwogIH0KICBnZXRPdmVycmlkZGVuTW9kdWxlcyh1LCBlKSB7CiAgICByZXR1cm4gewogICAgICBsb2NhdGVGaWxlOiAobSkgPT4gbmV3IFVSTChlIHx8IG0sIHUpLmhyZWYKICAgIH07CiAgfQogIGFzeW5jIGhhbmRsZU1pc3NpbmdPckludmFsaWRTYW1Nb2R1bGUodSwgZSkgewogICAgdHJ5IHsKICAgICAgY29uc3QgbSA9IGF3YWl0IGZldGNoKHUpOwogICAgICBpZiAoIW0ub2spCiAgICAgICAgdGhyb3cgbmV3IEkoCiAgICAgICAgICBgVGhlIHBhdGggdG8gJHtlfSBpcyBpbmNvcnJlY3Qgb3IgdGhlIG1vZHVsZSBpcyBtaXNzaW5nLiBQbGVhc2UgY2hlY2sgcHJvdmlkZWQgcGF0aCB0byB3YXNtIGZpbGVzLiBDdXJyZW50IHBhdGggaXMgJHt1fWAKICAgICAgICApOwogICAgICBjb25zdCBnID0gYXdhaXQgbS5hcnJheUJ1ZmZlcigpOwogICAgICBpZiAoIVdlYkFzc2VtYmx5LnZhbGlkYXRlKGcpKQogICAgICAgIHRocm93IG5ldyBJKAogICAgICAgICAgYFRoZSBwcm92aWRlZCAke2V9IGlzIG5vdCBhIHZhbGlkIFdBU00gbW9kdWxlLiBQbGVhc2UgY2hlY2sgcHJvdmlkZWQgcGF0aCB0byB3YXNtIGZpbGVzLiBDdXJyZW50IHBhdGggaXMgJHt1fWAKICAgICAgICApOwogICAgfSBjYXRjaCAobSkgewogICAgICBpZiAobSBpbnN0YW5jZW9mIEkpCiAgICAgICAgdGhyb3cgY29uc29sZS5lcnJvcigKICAgICAgICAgICJZb3UgY2FuIGZpbmQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBob3cgdG8gaG9zdCB3YXNtIGZpbGVzIGhlcmU6IGh0dHBzOi8vZGV2ZWxvcGVycy5pbm5vdmF0cmljcy5jb20vZGlnaXRhbC1vbmJvYXJkaW5nL3RlY2huaWNhbC9yZW1vdGUvZG90LXdlYi1kb2N1bWVudC9sYXRlc3QvZG9jdW1lbnRhdGlvbi8jX2hvc3Rpbmdfc2FtX3dhc20iCiAgICAgICAgKSwgbTsKICAgIH0KICB9CiAgYXN5bmMgZ2V0V2FzbUZpbGVOYW1lKCkgewogICAgcmV0dXJuIGF3YWl0IGZlKCkgPyBrdC5zaW1kIDoga3Quc2FtOwogIH0KICBhc3luYyBpbml0U2FtTW9kdWxlKHUsIGUgPSAiL3dhc20iKSB7CiAgICBpZiAodGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICByZXR1cm47CiAgICBjb25zdCBtID0gYXdhaXQgdGhpcy5nZXRXYXNtRmlsZU5hbWUoKSwgZyA9IGAke2V9LyR7bX1gOwogICAgdHJ5IHsKICAgICAgdGhpcy5zYW1XYXNtTW9kdWxlID0gYXdhaXQgcGUodGhpcy5nZXRPdmVycmlkZGVuTW9kdWxlcyh1LCBnKSk7CiAgICB9IGNhdGNoIHsKICAgICAgdGhyb3cgYXdhaXQgdGhpcy5oYW5kbGVNaXNzaW5nT3JJbnZhbGlkU2FtTW9kdWxlKGcsIG0pLCBuZXcgSSgiQ291bGQgbm90IGluaXQgZGV0ZWN0b3IuIik7CiAgICB9CiAgfQogIGFzeW5jIGdldFNhbVZlcnNpb24oKSB7CiAgICB2YXIgZTsKICAgIGNvbnN0IHUgPSBhd2FpdCAoKGUgPSB0aGlzLnNhbVdhc21Nb2R1bGUpID09IG51bGwgPyB2b2lkIDAgOiBlLmdldEluZm9TdHJpbmcoKSk7CiAgICByZXR1cm4gdSA9PSBudWxsID8gdm9pZCAwIDogdS50cmltKCk7CiAgfQogIC8qCiAgICogSW4gVFMgNS4yLjAgd2FzIGFkZGVkIHNwZWNpYWwga2V5d29yZCAidXNpbmciIHdoaWNoIGNvdWxkIGJlIHBlcmZlY3QgZm9yIHRoaXMgY2FzZS4KICAgKiBVbmZvcnR1bmF0ZWx5LCB2aXRlIHByZWFjdCBwbHVnaW4gZG9lcyBub3Qgc3VwcG9ydCB0aGlzIHZlcnNpb24gb2YgVFMgeWV0LgogICAqIENoZWNrIHBvc3NpYmlsaXR5IG9mIHVzaW5nICJ1c2luZyIga2V5d29yZCB3aGVuIHZpdGUgcHJlYWN0IHBsdWdpbiB1cGRhdGVzCiAgICovCiAgYWxsb2NhdGVNZW1vcnkodSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBJKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICByZXR1cm4gdGhpcy5zYW1XYXNtTW9kdWxlLl9tYWxsb2ModSk7CiAgfQogIHJlbGVhc2VNZW1vcnkodSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBJKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICB0aGlzLnNhbVdhc21Nb2R1bGUuX2ZyZWUodSk7CiAgfQogIHdyaXRlRGF0YVRvTWVtb3J5KHUsIGUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgSSgiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgdGhpcy5zYW1XYXNtTW9kdWxlLkhFQVBVOC5zZXQodSwgZSk7CiAgfQp9Ci8qKgogKiBAbGljZW5zZQogKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDCiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wCiAqLwpjb25zdCB4dCA9IFN5bWJvbCgiQ29tbGluay5wcm94eSIpLCB2ZSA9IFN5bWJvbCgiQ29tbGluay5lbmRwb2ludCIpLCBnZSA9IFN5bWJvbCgiQ29tbGluay5yZWxlYXNlUHJveHkiKSwgWm4gPSBTeW1ib2woIkNvbWxpbmsuZmluYWxpemVyIiksIE9uID0gU3ltYm9sKCJDb21saW5rLnRocm93biIpLCBGdCA9IChhKSA9PiB0eXBlb2YgYSA9PSAib2JqZWN0IiAmJiBhICE9PSBudWxsIHx8IHR5cGVvZiBhID09ICJmdW5jdGlvbiIsIHdlID0gewogIGNhbkhhbmRsZTogKGEpID0+IEZ0KGEpICYmIGFbeHRdLAogIHNlcmlhbGl6ZShhKSB7CiAgICBjb25zdCB7IHBvcnQxOiB1LCBwb3J0MjogZSB9ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7CiAgICByZXR1cm4gSm4oYSwgdSksIFtlLCBbZV1dOwogIH0sCiAgZGVzZXJpYWxpemUoYSkgewogICAgcmV0dXJuIGEuc3RhcnQoKSwgVGUoYSk7CiAgfQp9LCBBZSA9IHsKICBjYW5IYW5kbGU6IChhKSA9PiBGdChhKSAmJiBPbiBpbiBhLAogIHNlcmlhbGl6ZSh7IHZhbHVlOiBhIH0pIHsKICAgIGxldCB1OwogICAgcmV0dXJuIGEgaW5zdGFuY2VvZiBFcnJvciA/IHUgPSB7CiAgICAgIGlzRXJyb3I6ICEwLAogICAgICB2YWx1ZTogewogICAgICAgIG1lc3NhZ2U6IGEubWVzc2FnZSwKICAgICAgICBuYW1lOiBhLm5hbWUsCiAgICAgICAgc3RhY2s6IGEuc3RhY2sKICAgICAgfQogICAgfSA6IHUgPSB7IGlzRXJyb3I6ICExLCB2YWx1ZTogYSB9LCBbdSwgW11dOwogIH0sCiAgZGVzZXJpYWxpemUoYSkgewogICAgdGhyb3cgYS5pc0Vycm9yID8gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoYS52YWx1ZS5tZXNzYWdlKSwgYS52YWx1ZSkgOiBhLnZhbHVlOwogIH0KfSwgSXQgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcChbCiAgWyJwcm94eSIsIHdlXSwKICBbInRocm93IiwgQWVdCl0pOwpmdW5jdGlvbiBfZShhLCB1KSB7CiAgZm9yIChjb25zdCBlIG9mIGEpCiAgICBpZiAodSA9PT0gZSB8fCBlID09PSAiKiIgfHwgZSBpbnN0YW5jZW9mIFJlZ0V4cCAmJiBlLnRlc3QodSkpCiAgICAgIHJldHVybiAhMDsKICByZXR1cm4gITE7Cn0KZnVuY3Rpb24gSm4oYSwgdSA9IGdsb2JhbFRoaXMsIGUgPSBbIioiXSkgewogIHUuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGZ1bmN0aW9uIG0oZykgewogICAgaWYgKCFnIHx8ICFnLmRhdGEpCiAgICAgIHJldHVybjsKICAgIGlmICghX2UoZSwgZy5vcmlnaW4pKSB7CiAgICAgIGNvbnNvbGUud2FybihgSW52YWxpZCBvcmlnaW4gJyR7Zy5vcmlnaW59JyBmb3IgY29tbGluayBwcm94eWApOwogICAgICByZXR1cm47CiAgICB9CiAgICBjb25zdCB7IGlkOiBDLCB0eXBlOiBBLCBwYXRoOiBNIH0gPSBPYmplY3QuYXNzaWduKHsgcGF0aDogW10gfSwgZy5kYXRhKSwgTyA9IChnLmRhdGEuYXJndW1lbnRMaXN0IHx8IFtdKS5tYXAoSik7CiAgICBsZXQgVDsKICAgIHRyeSB7CiAgICAgIGNvbnN0IF8gPSBNLnNsaWNlKDAsIC0xKS5yZWR1Y2UoKEUsIFcpID0+IEVbV10sIGEpLCBTID0gTS5yZWR1Y2UoKEUsIFcpID0+IEVbV10sIGEpOwogICAgICBzd2l0Y2ggKEEpIHsKICAgICAgICBjYXNlICJHRVQiOgogICAgICAgICAgVCA9IFM7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJTRVQiOgogICAgICAgICAgX1tNLnNsaWNlKC0xKVswXV0gPSBKKGcuZGF0YS52YWx1ZSksIFQgPSAhMDsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIkFQUExZIjoKICAgICAgICAgIFQgPSBTLmFwcGx5KF8sIE8pOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiQ09OU1RSVUNUIjoKICAgICAgICAgIHsKICAgICAgICAgICAgY29uc3QgRSA9IG5ldyBTKC4uLk8pOwogICAgICAgICAgICBUID0gU2UoRSk7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJFTkRQT0lOVCI6CiAgICAgICAgICB7CiAgICAgICAgICAgIGNvbnN0IHsgcG9ydDE6IEUsIHBvcnQyOiBXIH0gPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTsKICAgICAgICAgICAgSm4oYSwgVyksIFQgPSBPZShFLCBbRV0pOwogICAgICAgICAgfQogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiUkVMRUFTRSI6CiAgICAgICAgICBUID0gdm9pZCAwOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHJldHVybjsKICAgICAgfQogICAgfSBjYXRjaCAoXykgewogICAgICBUID0geyB2YWx1ZTogXywgW09uXTogMCB9OwogICAgfQogICAgUHJvbWlzZS5yZXNvbHZlKFQpLmNhdGNoKChfKSA9PiAoeyB2YWx1ZTogXywgW09uXTogMCB9KSkudGhlbigoXykgPT4gewogICAgICBjb25zdCBbUywgRV0gPSBibihfKTsKICAgICAgdS5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIFMpLCB7IGlkOiBDIH0pLCBFKSwgQSA9PT0gIlJFTEVBU0UiICYmICh1LnJlbW92ZUV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBtKSwganQodSksIFpuIGluIGEgJiYgdHlwZW9mIGFbWm5dID09ICJmdW5jdGlvbiIgJiYgYVtabl0oKSk7CiAgICB9KS5jYXRjaCgoXykgPT4gewogICAgICBjb25zdCBbUywgRV0gPSBibih7CiAgICAgICAgdmFsdWU6IG5ldyBUeXBlRXJyb3IoIlVuc2VyaWFsaXphYmxlIHJldHVybiB2YWx1ZSIpLAogICAgICAgIFtPbl06IDAKICAgICAgfSk7CiAgICAgIHUucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBTKSwgeyBpZDogQyB9KSwgRSk7CiAgICB9KTsKICB9KSwgdS5zdGFydCAmJiB1LnN0YXJ0KCk7Cn0KZnVuY3Rpb24gQ2UoYSkgewogIHJldHVybiBhLmNvbnN0cnVjdG9yLm5hbWUgPT09ICJNZXNzYWdlUG9ydCI7Cn0KZnVuY3Rpb24ganQoYSkgewogIENlKGEpICYmIGEuY2xvc2UoKTsKfQpmdW5jdGlvbiBUZShhLCB1KSB7CiAgcmV0dXJuIFhuKGEsIFtdLCB1KTsKfQpmdW5jdGlvbiBNbihhKSB7CiAgaWYgKGEpCiAgICB0aHJvdyBuZXcgRXJyb3IoIlByb3h5IGhhcyBiZWVuIHJlbGVhc2VkIGFuZCBpcyBub3QgdXNlYWJsZSIpOwp9CmZ1bmN0aW9uIEx0KGEpIHsKICByZXR1cm4gYW4oYSwgewogICAgdHlwZTogIlJFTEVBU0UiCiAgfSkudGhlbigoKSA9PiB7CiAgICBqdChhKTsKICB9KTsKfQpjb25zdCBTbiA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpLCBXbiA9ICJGaW5hbGl6YXRpb25SZWdpc3RyeSIgaW4gZ2xvYmFsVGhpcyAmJiBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoKGEpID0+IHsKICBjb25zdCB1ID0gKFNuLmdldChhKSB8fCAwKSAtIDE7CiAgU24uc2V0KGEsIHUpLCB1ID09PSAwICYmIEx0KGEpOwp9KTsKZnVuY3Rpb24gRWUoYSwgdSkgewogIGNvbnN0IGUgPSAoU24uZ2V0KHUpIHx8IDApICsgMTsKICBTbi5zZXQodSwgZSksIFduICYmIFduLnJlZ2lzdGVyKGEsIHUsIGEpOwp9CmZ1bmN0aW9uIFBlKGEpIHsKICBXbiAmJiBXbi51bnJlZ2lzdGVyKGEpOwp9CmZ1bmN0aW9uIFhuKGEsIHUgPSBbXSwgZSA9IGZ1bmN0aW9uKCkgewp9KSB7CiAgbGV0IG0gPSAhMTsKICBjb25zdCBnID0gbmV3IFByb3h5KGUsIHsKICAgIGdldChDLCBBKSB7CiAgICAgIGlmIChNbihtKSwgQSA9PT0gZ2UpCiAgICAgICAgcmV0dXJuICgpID0+IHsKICAgICAgICAgIFBlKGcpLCBMdChhKSwgbSA9ICEwOwogICAgICAgIH07CiAgICAgIGlmIChBID09PSAidGhlbiIpIHsKICAgICAgICBpZiAodS5sZW5ndGggPT09IDApCiAgICAgICAgICByZXR1cm4geyB0aGVuOiAoKSA9PiBnIH07CiAgICAgICAgY29uc3QgTSA9IGFuKGEsIHsKICAgICAgICAgIHR5cGU6ICJHRVQiLAogICAgICAgICAgcGF0aDogdS5tYXAoKE8pID0+IE8udG9TdHJpbmcoKSkKICAgICAgICB9KS50aGVuKEopOwogICAgICAgIHJldHVybiBNLnRoZW4uYmluZChNKTsKICAgICAgfQogICAgICByZXR1cm4gWG4oYSwgWy4uLnUsIEFdKTsKICAgIH0sCiAgICBzZXQoQywgQSwgTSkgewogICAgICBNbihtKTsKICAgICAgY29uc3QgW08sIFRdID0gYm4oTSk7CiAgICAgIHJldHVybiBhbihhLCB7CiAgICAgICAgdHlwZTogIlNFVCIsCiAgICAgICAgcGF0aDogWy4uLnUsIEFdLm1hcCgoXykgPT4gXy50b1N0cmluZygpKSwKICAgICAgICB2YWx1ZTogTwogICAgICB9LCBUKS50aGVuKEopOwogICAgfSwKICAgIGFwcGx5KEMsIEEsIE0pIHsKICAgICAgTW4obSk7CiAgICAgIGNvbnN0IE8gPSB1W3UubGVuZ3RoIC0gMV07CiAgICAgIGlmIChPID09PSB2ZSkKICAgICAgICByZXR1cm4gYW4oYSwgewogICAgICAgICAgdHlwZTogIkVORFBPSU5UIgogICAgICAgIH0pLnRoZW4oSik7CiAgICAgIGlmIChPID09PSAiYmluZCIpCiAgICAgICAgcmV0dXJuIFhuKGEsIHUuc2xpY2UoMCwgLTEpKTsKICAgICAgY29uc3QgW1QsIF9dID0gUnQoTSk7CiAgICAgIHJldHVybiBhbihhLCB7CiAgICAgICAgdHlwZTogIkFQUExZIiwKICAgICAgICBwYXRoOiB1Lm1hcCgoUykgPT4gUy50b1N0cmluZygpKSwKICAgICAgICBhcmd1bWVudExpc3Q6IFQKICAgICAgfSwgXykudGhlbihKKTsKICAgIH0sCiAgICBjb25zdHJ1Y3QoQywgQSkgewogICAgICBNbihtKTsKICAgICAgY29uc3QgW00sIE9dID0gUnQoQSk7CiAgICAgIHJldHVybiBhbihhLCB7CiAgICAgICAgdHlwZTogIkNPTlNUUlVDVCIsCiAgICAgICAgcGF0aDogdS5tYXAoKFQpID0+IFQudG9TdHJpbmcoKSksCiAgICAgICAgYXJndW1lbnRMaXN0OiBNCiAgICAgIH0sIE8pLnRoZW4oSik7CiAgICB9CiAgfSk7CiAgcmV0dXJuIEVlKGcsIGEpLCBnOwp9CmZ1bmN0aW9uIE1lKGEpIHsKICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgYSk7Cn0KZnVuY3Rpb24gUnQoYSkgewogIGNvbnN0IHUgPSBhLm1hcChibik7CiAgcmV0dXJuIFt1Lm1hcCgoZSkgPT4gZVswXSksIE1lKHUubWFwKChlKSA9PiBlWzFdKSldOwp9CmNvbnN0IE50ID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7CmZ1bmN0aW9uIE9lKGEsIHUpIHsKICByZXR1cm4gTnQuc2V0KGEsIHUpLCBhOwp9CmZ1bmN0aW9uIFNlKGEpIHsKICByZXR1cm4gT2JqZWN0LmFzc2lnbihhLCB7IFt4dF06ICEwIH0pOwp9CmZ1bmN0aW9uIGJuKGEpIHsKICBmb3IgKGNvbnN0IFt1LCBlXSBvZiBJdCkKICAgIGlmIChlLmNhbkhhbmRsZShhKSkgewogICAgICBjb25zdCBbbSwgZ10gPSBlLnNlcmlhbGl6ZShhKTsKICAgICAgcmV0dXJuIFsKICAgICAgICB7CiAgICAgICAgICB0eXBlOiAiSEFORExFUiIsCiAgICAgICAgICBuYW1lOiB1LAogICAgICAgICAgdmFsdWU6IG0KICAgICAgICB9LAogICAgICAgIGcKICAgICAgXTsKICAgIH0KICByZXR1cm4gWwogICAgewogICAgICB0eXBlOiAiUkFXIiwKICAgICAgdmFsdWU6IGEKICAgIH0sCiAgICBOdC5nZXQoYSkgfHwgW10KICBdOwp9CmZ1bmN0aW9uIEooYSkgewogIHN3aXRjaCAoYS50eXBlKSB7CiAgICBjYXNlICJIQU5ETEVSIjoKICAgICAgcmV0dXJuIEl0LmdldChhLm5hbWUpLmRlc2VyaWFsaXplKGEudmFsdWUpOwogICAgY2FzZSAiUkFXIjoKICAgICAgcmV0dXJuIGEudmFsdWU7CiAgfQp9CmZ1bmN0aW9uIGFuKGEsIHUsIGUpIHsKICByZXR1cm4gbmV3IFByb21pc2UoKG0pID0+IHsKICAgIGNvbnN0IGcgPSBXZSgpOwogICAgYS5hZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgZnVuY3Rpb24gQyhBKSB7CiAgICAgICFBLmRhdGEgfHwgIUEuZGF0YS5pZCB8fCBBLmRhdGEuaWQgIT09IGcgfHwgKGEucmVtb3ZlRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIEMpLCBtKEEuZGF0YSkpOwogICAgfSksIGEuc3RhcnQgJiYgYS5zdGFydCgpLCBhLnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oeyBpZDogZyB9LCB1KSwgZSk7CiAgfSk7Cn0KZnVuY3Rpb24gV2UoKSB7CiAgcmV0dXJuIG5ldyBBcnJheSg0KS5maWxsKDApLm1hcCgoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikudG9TdHJpbmcoMTYpKS5qb2luKCItIik7Cn0KZnVuY3Rpb24gSHQoYSwgdSkgewogIHJldHVybiBNYXRoLnNxcnQoKGEueCAtIHUueCkgKiogMiArIChhLnkgLSB1LnkpICoqIDIpOwp9CmZ1bmN0aW9uIGJlKGEsIHUpIHsKICByZXR1cm4gewogICAgeDogKGEueCArIHUueCkgLyAyLAogICAgeTogKGEueSArIHUueSkgLyAyCiAgfTsKfQpmdW5jdGlvbiBrZShhLCB1KSB7CiAgaWYgKGEuY29uZmlkZW5jZSA8PSAwIHx8IHUuY29uZmlkZW5jZSA8PSAwKQogICAgcmV0dXJuIHsgeDogMCwgeTogMCB9OwogIGNvbnN0IGUgPSBIdChhLmNlbnRlciwgdS5jZW50ZXIpLCBtID0gYmUoYS5jZW50ZXIsIHUuY2VudGVyKTsKICByZXR1cm4gewogICAgeDogbS54LAogICAgeTogbS55ICsgZSAvIDQKICAgIC8vIGNhbGN1bGF0aW9uIGlzIHRha2VuIGZyb20gbW9iaWxlIHRlYW0KICB9Owp9CmZ1bmN0aW9uIFJlKGEsIHUsIGUpIHsKICBpZiAoYS5jb25maWRlbmNlIDw9IDAgfHwgdS5jb25maWRlbmNlIDw9IDApCiAgICByZXR1cm4gMDsKICBjb25zdCBtID0gSHQoYS5jZW50ZXIsIHUuY2VudGVyKSwgZyA9IHllKGUud2lkdGgsIGUuaGVpZ2h0KTsKICByZXR1cm4gaGUobSAvIGcpOwp9CmZ1bmN0aW9uICRuKGEpIHsKICBjb25zdCB7IGNlbnRlclg6IHUsIGNlbnRlclk6IGUsIGNvbmZpZGVuY2U6IG0sIHNpemU6IGcsIHN0YXR1czogQyB9ID0gYTsKICByZXR1cm4gewogICAgY2VudGVyOiB7CiAgICAgIHg6IHUsCiAgICAgIHk6IGUKICAgIH0sCiAgICBjb25maWRlbmNlOiBtIC8gMWUzLAogICAgc3RhdHVzOiBDIC8gMWUzLAogICAgc2l6ZTogZwogIH07Cn0KY2xhc3MgeGUgZXh0ZW5kcyBtZSB7CiAgcGFyc2VSYXdEYXRhKHUsIGUpIHsKICAgIGNvbnN0IHsgYnJpZ2h0bmVzczogbSwgc2hhcnBuZXNzOiBnIH0gPSB1LnBhcmFtcywgeyBib3R0b21SaWdodFg6IEMsIGJvdHRvbVJpZ2h0WTogQSwgbGVmdEV5ZTogTSwgbW91dGg6IE8sIHJpZ2h0RXllOiBULCB0b3BMZWZ0WDogXywgdG9wTGVmdFk6IFMgfSA9IHUsIEUgPSAkbihNKSwgVyA9ICRuKFQpLCBIID0gJG4oTyk7CiAgICByZXR1cm4gewogICAgICBjb25maWRlbmNlOiB1LmNvbmZpZGVuY2UgLyAxZTMsCiAgICAgIHRvcExlZnQ6IHsKICAgICAgICB4OiBfLAogICAgICAgIHk6IFMKICAgICAgfSwKICAgICAgYm90dG9tUmlnaHQ6IHsKICAgICAgICB4OiBDLAogICAgICAgIHk6IEEKICAgICAgfSwKICAgICAgZmFjZUNlbnRlcjoga2UoRSwgVyksCiAgICAgIGZhY2VTaXplOiBSZShFLCBXLCBlKSwKICAgICAgbGVmdEV5ZTogRSwKICAgICAgcmlnaHRFeWU6IFcsCiAgICAgIG1vdXRoOiBILAogICAgICBicmlnaHRuZXNzOiBtIC8gMWUzLAogICAgICBzaGFycG5lc3M6IGcgLyAxZTMKICAgIH07CiAgfQogIGFzeW5jIGRldGVjdCh1LCBlLCBtKSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IEkoIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIGNvbnN0IGcgPSB0aGlzLmFsbG9jYXRlTWVtb3J5KHUubGVuZ3RoICogdS5CWVRFU19QRVJfRUxFTUVOVCksIEMgPSB0aGlzLmFsbG9jYXRlTWVtb3J5KHUubGVuZ3RoICogdS5CWVRFU19QRVJfRUxFTUVOVCk7CiAgICB0aGlzLndyaXRlRGF0YVRvTWVtb3J5KHUsIGcpLCB0aGlzLnNhbVdhc21Nb2R1bGUuY29udmVydFRvU2FtQ29sb3JJbWFnZSgKICAgICAgZS53aWR0aCwKICAgICAgZS5oZWlnaHQsCiAgICAgIGcsCiAgICAgIGRlLlJHQkEsCiAgICAgIEMKICAgICk7CiAgICBjb25zdCBBID0gdGhpcy5zYW1XYXNtTW9kdWxlLmRldGVjdEZhY2VQYXJ0c1dpdGhJbWFnZVBhcmFtZXRlcnMoCiAgICAgIGUud2lkdGgsCiAgICAgIGUuaGVpZ2h0LAogICAgICBDLAogICAgICAwLAogICAgICAwLAogICAgICAvLyBwYXJhbVdpZHRoIHNob3VsZCBiZSAwIChkZWZhdWx0IHZhbHVlKQogICAgICAwCiAgICAgIC8vIHBhcmFtSGVpZ2h0IHNob3VsZCBiZSAwIChkZWZhdWx0IHZhbHVlKQogICAgKTsKICAgIHJldHVybiB0aGlzLnJlbGVhc2VNZW1vcnkoZyksIHRoaXMucmVsZWFzZU1lbW9yeShDKSwgdGhpcy5wYXJzZVJhd0RhdGEoQSwgbSk7CiAgfQp9CkpuKHhlKTsK", x0 = typeof window < "u" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);" + atob(rg)], { type: "text/javascript;charset=utf-8" });
function iu(t) {
  let o;
  try {
    if (o = x0 && (window.URL || window.webkitURL).createObjectURL(x0), !o)
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
      "data:application/javascript;base64," + rg,
      {
        type: "module",
        name: t == null ? void 0 : t.name
      }
    );
  }
}
const Di = class Di extends Dl {
  constructor() {
    super(...arguments);
    D(this, "detector");
    D(this, "className", "FaceController");
    D(this, "fallbackInstruction", me.FACE_NOT_PRESENT);
    D(this, "pitchAngleAccelerationThreshold", null);
    D(this, "validateDetectedObject", (e, n) => {
      const { brightnessHighThreshold: i, brightnessLowThreshold: r, faceConfidence: a, leftEye: s, maxFaceSizeRatio: g, minFaceSizeRatio: I, mouth: C, outOfBoundsThreshold: l, rightEye: h, sharpnessThreshold: A } = this.getThresholds(), y = e.confidence > a, k = e.faceSize > I, B = e.faceSize < g, v = e.sharpness > A, R = e.brightness > r, S = e.brightness < i, M = nu(l, e, n), L = tu(this.pitchAngleAccelerationThreshold, this.acceleration), X = e.leftEye.confidence > s.confidence, K = e.rightEye.confidence > h.confidence, ee = e.mouth.confidence > C.confidence, $ = e.mouth.status < C.status.max, oe = e.mouth.status > C.status.min, q = {};
      return q.isPresent = y, q.isLeftEyePresent = X, q.isRightEyePresent = K, q.isNotSmall = k, q.isNotLarge = B, q.isSharp = v, q.isNotDim = R, q.isNotBright = S, q.isNotOutOfBounds = M, q.isNotPitched = L, q.isMouthPresent = ee, q.isMouthScoreNotTooHigh = $, q.isMouthScoreNotTooLow = oe, q;
    });
    D(this, "getInstructionCode", (e, n) => {
      var r;
      if (this.isInCandidateSelection)
        return me.CANDIDATE_SELECTION;
      if ((r = this.lastImage) != null && r.isValid && n)
        return me.CANDIDATE_SELECTION;
      if (this.lastImage && n)
        return this.lastImage.instructionCode;
      const [i] = this.getInstructionCodesForValidators(e);
      return i ?? this.fallbackInstruction;
    });
    D(this, "getInstructionCodesForValidators", (e) => {
      const n = [];
      return Object.entries(e).forEach(([i, r]) => {
        !r && n.push(iI[i]);
      }), n;
    });
  }
  static async init() {
    const e = new iu(), n = ng(e), i = new Di(), r = await new n();
    this._instance = i, this._instance.detector = r;
  }
  static async getInstance() {
    return !this._instance && await this.init(), this._instance;
  }
  setThresholds(e) {
    super.setThresholds(e);
    const { devicePitchAngleThreshold: n } = e;
    this.pitchAngleAccelerationThreshold = SI * Math.sin(n * (Math.PI / (-2685 + -3 * -955)));
  }
  restart() {
    super.restart(), a0(ut.INSTRUCTION_CHANGED, void (-1 * 5261 + 8563 * 1 + 3302 * -1), jI);
  }
  async processImage(e) {
    var k;
    const n = {};
    n.width = e.width, n.height = e.height;
    const i = n, r = Vr(i), a = PI(e, r), s = NI(a), g = {};
    g.width = a.width, g.height = a.height;
    const I = g;
    let C = await this.detector.detect(s, I, i);
    C = Bl(i, C);
    const l = this.validateDetectedObject(C, i), h = this.isDetectionValid(l), A = this.getInstructionCode(l, h);
    if (l.isPresent && this.collectImagesForDuplicateDetection(s), this.isInCandidateSelection) {
      if (this.bestImage && h && this.isNewImageBetter(this.bestImage.detection, C)) {
        const B = { image: e, detection: tn(C) };
        this.bestImage = B, this.candidateSelectionImages.push(B);
      }
    } else if ((k = this.lastImage) != null && k.isValid && h) {
      const B = { image: e, detection: tn(C) }, v = {};
      v.image = this.lastImage.image, v.detection = this.lastImage.detection;
      const R = v;
      this.isNewImageBetter(R.detection, B.detection) ? this.bestImage = B : this.bestImage = R, this.candidateSelectionImages.push(R, B), this.isInCandidateSelection = !0;
    } else
      h ? this.lastImage = { instructionCode: A, isValid: !0, image: e, detection: tn(C) } : this.lastImage = { instructionCode: A, isValid: !1, image: e, detection: tn(C) };
    const y = { detectedFace: tn(C), instructionCode: A, invalidValidators: this.getInstructionCodesForValidators(l), isInCandidateSelection: this.isInCandidateSelection };
    return this.detectionRecord.push(y.detectedFace), a0(ut.INSTRUCTION_CHANGED, A), JI(ut.DETECTED_FACE_CHANGED, y.detectedFace, this.getThresholds().faceConfidence), QI(ut.FACE_DETECTION, y.detectedFace, e), y;
  }
};
D(Di, "_instance");
let sr = Di;
const ou = (t, o) => {
  const { handleError: e } = qi(), [n, i] = He(), { acceleration: r } = vl();
  n && n.setAcceleration(r), Ce(() => {
    (async () => {
      const g = await sr.getInstance();
      try {
        const I = {};
        I.wasmDirectoryPath = o, I.thresholds = t, await g.init(I);
      } catch (I) {
        if (I instanceof Error) {
          e(ne.fromError(I));
          return;
        }
      }
      i(g);
    })();
  }, [e, t, o]);
  const a = {};
  return a.controller = n, a;
};
var kt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ag = {}, I0 = {}, ru = au;
function au(t, o) {
  for (var e = new Array(arguments.length - 1), n = 0, i = 2, r = !0; i < arguments.length; )
    e[n++] = arguments[i++];
  return new Promise(function(a, s) {
    e[n] = function(g) {
      if (r)
        if (r = !1, g)
          s(g);
        else {
          for (var I = new Array(arguments.length - 1), C = 0; C < I.length; )
            I[C++] = arguments[C];
          a.apply(null, I);
        }
    };
    try {
      t.apply(o || null, e);
    } catch (g) {
      r && (r = !1, s(g));
    }
  });
}
var sg = {};
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
  for (var e = new Array(64), n = new Array(123), i = 0; i < 64; )
    n[e[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
  o.encode = function(a, s, g) {
    for (var I = null, C = [], l = 0, h = 0, A; s < g; ) {
      var y = a[s++];
      switch (h) {
        case 0:
          C[l++] = e[y >> 2], A = (y & 3) << 4, h = 1;
          break;
        case 1:
          C[l++] = e[A | y >> 4], A = (y & 15) << 2, h = 2;
          break;
        case 2:
          C[l++] = e[A | y >> 6], C[l++] = e[y & 63], h = 0;
          break;
      }
      l > 8191 && ((I || (I = [])).push(String.fromCharCode.apply(String, C)), l = 0);
    }
    return h && (C[l++] = e[A], C[l++] = 61, h === 1 && (C[l++] = 61)), I ? (l && I.push(String.fromCharCode.apply(String, C.slice(0, l))), I.join("")) : String.fromCharCode.apply(String, C.slice(0, l));
  };
  var r = "invalid encoding";
  o.decode = function(a, s, g) {
    for (var I = g, C = 0, l, h = 0; h < a.length; ) {
      var A = a.charCodeAt(h++);
      if (A === 61 && C > 1)
        break;
      if ((A = n[A]) === void 0)
        throw Error(r);
      switch (C) {
        case 0:
          l = A, C = 1;
          break;
        case 1:
          s[g++] = l << 2 | (A & 48) >> 4, l = A, C = 2;
          break;
        case 2:
          s[g++] = (l & 15) << 4 | (A & 60) >> 2, l = A, C = 3;
          break;
        case 3:
          s[g++] = (l & 3) << 6 | A, C = 0;
          break;
      }
    }
    if (C === 1)
      throw Error(r);
    return g - I;
  }, o.test = function(a) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(a);
  };
})(sg);
var su = to;
function to() {
  this._listeners = {};
}
to.prototype.on = function(t, o, e) {
  return (this._listeners[t] || (this._listeners[t] = [])).push({
    fn: o,
    ctx: e || this
  }), this;
};
to.prototype.off = function(t, o) {
  if (t === void 0)
    this._listeners = {};
  else if (o === void 0)
    this._listeners[t] = [];
  else
    for (var e = this._listeners[t], n = 0; n < e.length; )
      e[n].fn === o ? e.splice(n, 1) : ++n;
  return this;
};
to.prototype.emit = function(t) {
  var o = this._listeners[t];
  if (o) {
    for (var e = [], n = 1; n < arguments.length; )
      e.push(arguments[n++]);
    for (n = 0; n < o.length; )
      o[n].fn.apply(o[n++].ctx, e);
  }
  return this;
};
var gu = l0(l0);
function l0(t) {
  return typeof Float32Array < "u" ? function() {
    var o = new Float32Array([-0]), e = new Uint8Array(o.buffer), n = e[3] === 128;
    function i(g, I, C) {
      o[0] = g, I[C] = e[0], I[C + 1] = e[1], I[C + 2] = e[2], I[C + 3] = e[3];
    }
    function r(g, I, C) {
      o[0] = g, I[C] = e[3], I[C + 1] = e[2], I[C + 2] = e[1], I[C + 3] = e[0];
    }
    t.writeFloatLE = n ? i : r, t.writeFloatBE = n ? r : i;
    function a(g, I) {
      return e[0] = g[I], e[1] = g[I + 1], e[2] = g[I + 2], e[3] = g[I + 3], o[0];
    }
    function s(g, I) {
      return e[3] = g[I], e[2] = g[I + 1], e[1] = g[I + 2], e[0] = g[I + 3], o[0];
    }
    t.readFloatLE = n ? a : s, t.readFloatBE = n ? s : a;
  }() : function() {
    function o(n, i, r, a) {
      var s = i < 0 ? 1 : 0;
      if (s && (i = -i), i === 0)
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
        n((s << 31 | 2139095040) >>> 0, r, a);
      else if (i < 11754943508222875e-54)
        n((s << 31 | Math.round(i / 1401298464324817e-60)) >>> 0, r, a);
      else {
        var g = Math.floor(Math.log(i) / Math.LN2), I = Math.round(i * Math.pow(2, -g) * 8388608) & 8388607;
        n((s << 31 | g + 127 << 23 | I) >>> 0, r, a);
      }
    }
    t.writeFloatLE = o.bind(null, u0), t.writeFloatBE = o.bind(null, C0);
    function e(n, i, r) {
      var a = n(i, r), s = (a >> 31) * 2 + 1, g = a >>> 23 & 255, I = a & 8388607;
      return g === 255 ? I ? NaN : s * (1 / 0) : g === 0 ? s * 1401298464324817e-60 * I : s * Math.pow(2, g - 150) * (I + 8388608);
    }
    t.readFloatLE = e.bind(null, d0), t.readFloatBE = e.bind(null, f0);
  }(), typeof Float64Array < "u" ? function() {
    var o = new Float64Array([-0]), e = new Uint8Array(o.buffer), n = e[7] === 128;
    function i(g, I, C) {
      o[0] = g, I[C] = e[0], I[C + 1] = e[1], I[C + 2] = e[2], I[C + 3] = e[3], I[C + 4] = e[4], I[C + 5] = e[5], I[C + 6] = e[6], I[C + 7] = e[7];
    }
    function r(g, I, C) {
      o[0] = g, I[C] = e[7], I[C + 1] = e[6], I[C + 2] = e[5], I[C + 3] = e[4], I[C + 4] = e[3], I[C + 5] = e[2], I[C + 6] = e[1], I[C + 7] = e[0];
    }
    t.writeDoubleLE = n ? i : r, t.writeDoubleBE = n ? r : i;
    function a(g, I) {
      return e[0] = g[I], e[1] = g[I + 1], e[2] = g[I + 2], e[3] = g[I + 3], e[4] = g[I + 4], e[5] = g[I + 5], e[6] = g[I + 6], e[7] = g[I + 7], o[0];
    }
    function s(g, I) {
      return e[7] = g[I], e[6] = g[I + 1], e[5] = g[I + 2], e[4] = g[I + 3], e[3] = g[I + 4], e[2] = g[I + 5], e[1] = g[I + 6], e[0] = g[I + 7], o[0];
    }
    t.readDoubleLE = n ? a : s, t.readDoubleBE = n ? s : a;
  }() : function() {
    function o(n, i, r, a, s, g) {
      var I = a < 0 ? 1 : 0;
      if (I && (a = -a), a === 0)
        n(0, s, g + i), n(1 / a > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), s, g + r);
      else if (isNaN(a))
        n(0, s, g + i), n(2146959360, s, g + r);
      else if (a > 17976931348623157e292)
        n(0, s, g + i), n((I << 31 | 2146435072) >>> 0, s, g + r);
      else {
        var C;
        if (a < 22250738585072014e-324)
          C = a / 5e-324, n(C >>> 0, s, g + i), n((I << 31 | C / 4294967296) >>> 0, s, g + r);
        else {
          var l = Math.floor(Math.log(a) / Math.LN2);
          l === 1024 && (l = 1023), C = a * Math.pow(2, -l), n(C * 4503599627370496 >>> 0, s, g + i), n((I << 31 | l + 1023 << 20 | C * 1048576 & 1048575) >>> 0, s, g + r);
        }
      }
    }
    t.writeDoubleLE = o.bind(null, u0, 0, 4), t.writeDoubleBE = o.bind(null, C0, 4, 0);
    function e(n, i, r, a, s) {
      var g = n(a, s + i), I = n(a, s + r), C = (I >> 31) * 2 + 1, l = I >>> 20 & 2047, h = 4294967296 * (I & 1048575) + g;
      return l === 2047 ? h ? NaN : C * (1 / 0) : l === 0 ? C * 5e-324 * h : C * Math.pow(2, l - 1075) * (h + 4503599627370496);
    }
    t.readDoubleLE = e.bind(null, d0, 0, 4), t.readDoubleBE = e.bind(null, f0, 4, 0);
  }(), t;
}
function u0(t, o, e) {
  o[e] = t & 255, o[e + 1] = t >>> 8 & 255, o[e + 2] = t >>> 16 & 255, o[e + 3] = t >>> 24;
}
function C0(t, o, e) {
  o[e] = t >>> 24, o[e + 1] = t >>> 16 & 255, o[e + 2] = t >>> 8 & 255, o[e + 3] = t & 255;
}
function d0(t, o) {
  return (t[o] | t[o + 1] << 8 | t[o + 2] << 16 | t[o + 3] << 24) >>> 0;
}
function f0(t, o) {
  return (t[o] << 24 | t[o + 1] << 16 | t[o + 2] << 8 | t[o + 3]) >>> 0;
}
function A0(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var cu = xu;
function xu(t) {
  try {
    if (typeof A0 != "function")
      return null;
    var o = A0(t);
    return o && (o.length || Object.keys(o).length) ? o : null;
  } catch {
    return null;
  }
}
var gg = {};
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
    for (var a = null, s = [], g = 0, I; n < i; )
      I = e[n++], I < 128 ? s[g++] = I : I > 191 && I < 224 ? s[g++] = (I & 31) << 6 | e[n++] & 63 : I > 239 && I < 365 ? (I = ((I & 7) << 18 | (e[n++] & 63) << 12 | (e[n++] & 63) << 6 | e[n++] & 63) - 65536, s[g++] = 55296 + (I >> 10), s[g++] = 56320 + (I & 1023)) : s[g++] = (I & 15) << 12 | (e[n++] & 63) << 6 | e[n++] & 63, g > 8191 && ((a || (a = [])).push(String.fromCharCode.apply(String, s)), g = 0);
    return a ? (g && a.push(String.fromCharCode.apply(String, s.slice(0, g))), a.join("")) : String.fromCharCode.apply(String, s.slice(0, g));
  }, o.write = function(e, n, i) {
    for (var r = i, a, s, g = 0; g < e.length; ++g)
      a = e.charCodeAt(g), a < 128 ? n[i++] = a : a < 2048 ? (n[i++] = a >> 6 | 192, n[i++] = a & 63 | 128) : (a & 64512) === 55296 && ((s = e.charCodeAt(g + 1)) & 64512) === 56320 ? (a = 65536 + ((a & 1023) << 10) + (s & 1023), ++g, n[i++] = a >> 18 | 240, n[i++] = a >> 12 & 63 | 128, n[i++] = a >> 6 & 63 | 128, n[i++] = a & 63 | 128) : (n[i++] = a >> 12 | 224, n[i++] = a >> 6 & 63 | 128, n[i++] = a & 63 | 128);
    return i - r;
  };
})(gg);
var Iu = lu;
function lu(t, o, e) {
  var n = e || 8192, i = n >>> 1, r = null, a = n;
  return function(s) {
    if (s < 1 || s > i)
      return t(s);
    a + s > n && (r = t(n), a = 0);
    var g = o.call(r, a, a += s);
    return a & 7 && (a = (a | 7) + 1), g;
  };
}
var ko, h0;
function uu() {
  if (h0)
    return ko;
  h0 = 1, ko = o;
  var t = Dt();
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
    var r = this.lo, a = (this.lo >>> 28 | this.hi << 4) >>> 0, s = this.hi >>> 24;
    return s === 0 ? a === 0 ? r < 16384 ? r < 128 ? 1 : 2 : r < 2097152 ? 3 : 4 : a < 16384 ? a < 128 ? 5 : 6 : a < 2097152 ? 7 : 8 : s < 128 ? 9 : 10;
  }, ko;
}
var p0;
function Dt() {
  return p0 || (p0 = 1, function(t) {
    var o = t;
    o.asPromise = ru, o.base64 = sg, o.EventEmitter = su, o.float = gu, o.inquire = cu, o.utf8 = gg, o.pool = Iu, o.LongBits = uu(), o.isNode = !!(typeof kt < "u" && kt && kt.process && kt.process.versions && kt.process.versions.node), o.global = o.isNode && kt || typeof window < "u" && window || typeof self < "u" && self || kt, o.emptyArray = Object.freeze ? Object.freeze([]) : (
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
      for (var s = Object.keys(r), g = 0; g < s.length; ++g)
        (i[s[g]] === void 0 || !a) && (i[s[g]] = r[s[g]]);
      return i;
    }
    o.merge = e, o.lcFirst = function(i) {
      return i.charAt(0).toLowerCase() + i.substring(1);
    };
    function n(i) {
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
        for (var s = Object.keys(this), g = s.length - 1; g > -1; --g)
          if (r[s[g]] === 1 && this[s[g]] !== void 0 && this[s[g]] !== null)
            return s[g];
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
  }(I0)), I0;
}
var cg = J, Te = Dt(), gr, no = Te.LongBits, m0 = Te.base64, b0 = Te.utf8;
function Jn(t, o, e) {
  this.fn = t, this.len = o, this.next = void 0, this.val = e;
}
function Er() {
}
function Cu(t) {
  this.head = t.head, this.tail = t.tail, this.len = t.len, this.next = t.states;
}
function J() {
  this.len = 0, this.head = new Jn(Er, 0, 0), this.tail = this.head, this.states = null;
}
var xg = function() {
  return Te.Buffer ? function() {
    return (J.create = function() {
      return new gr();
    })();
  } : function() {
    return new J();
  };
};
J.create = xg();
J.alloc = function(t) {
  return new Te.Array(t);
};
Te.Array !== Array && (J.alloc = Te.pool(J.alloc, Te.Array.prototype.subarray));
J.prototype._push = function(t, o, e) {
  return this.tail = this.tail.next = new Jn(t, o, e), this.len += o, this;
};
function Pr(t, o, e) {
  o[e] = t & 255;
}
function du(t, o, e) {
  for (; t > 127; )
    o[e++] = t & 127 | 128, t >>>= 7;
  o[e] = t;
}
function Nr(t, o) {
  this.len = t, this.next = void 0, this.val = o;
}
Nr.prototype = Object.create(Jn.prototype);
Nr.prototype.fn = du;
J.prototype.uint32 = function(t) {
  return this.len += (this.tail = this.tail.next = new Nr(
    (t = t >>> 0) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : 5,
    t
  )).len, this;
};
J.prototype.int32 = function(t) {
  return t < 0 ? this._push(Lr, 10, no.fromNumber(t)) : this.uint32(t);
};
J.prototype.sint32 = function(t) {
  return this.uint32((t << 1 ^ t >> 31) >>> 0);
};
function Lr(t, o, e) {
  for (; t.hi; )
    o[e++] = t.lo & 127 | 128, t.lo = (t.lo >>> 7 | t.hi << 25) >>> 0, t.hi >>>= 7;
  for (; t.lo > 127; )
    o[e++] = t.lo & 127 | 128, t.lo = t.lo >>> 7;
  o[e++] = t.lo;
}
J.prototype.uint64 = function(t) {
  var o = no.from(t);
  return this._push(Lr, o.length(), o);
};
J.prototype.int64 = J.prototype.uint64;
J.prototype.sint64 = function(t) {
  var o = no.from(t).zzEncode();
  return this._push(Lr, o.length(), o);
};
J.prototype.bool = function(t) {
  return this._push(Pr, 1, t ? 1 : 0);
};
function cr(t, o, e) {
  o[e] = t & 255, o[e + 1] = t >>> 8 & 255, o[e + 2] = t >>> 16 & 255, o[e + 3] = t >>> 24;
}
J.prototype.fixed32 = function(t) {
  return this._push(cr, 4, t >>> 0);
};
J.prototype.sfixed32 = J.prototype.fixed32;
J.prototype.fixed64 = function(t) {
  var o = no.from(t);
  return this._push(cr, 4, o.lo)._push(cr, 4, o.hi);
};
J.prototype.sfixed64 = J.prototype.fixed64;
J.prototype.float = function(t) {
  return this._push(Te.float.writeFloatLE, 4, t);
};
J.prototype.double = function(t) {
  return this._push(Te.float.writeDoubleLE, 8, t);
};
var fu = Te.Array.prototype.set ? function(t, o, e) {
  o.set(t, e);
} : function(t, o, e) {
  for (var n = 0; n < t.length; ++n)
    o[e + n] = t[n];
};
J.prototype.bytes = function(t) {
  var o = t.length >>> 0;
  if (!o)
    return this._push(Pr, 1, 0);
  if (Te.isString(t)) {
    var e = J.alloc(o = m0.length(t));
    m0.decode(t, e, 0), t = e;
  }
  return this.uint32(o)._push(fu, o, t);
};
J.prototype.string = function(t) {
  var o = b0.length(t);
  return o ? this.uint32(o)._push(b0.write, o, t) : this._push(Pr, 1, 0);
};
J.prototype.fork = function() {
  return this.states = new Cu(this), this.head = this.tail = new Jn(Er, 0, 0), this.len = 0, this;
};
J.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Jn(Er, 0, 0), this.len = 0), this;
};
J.prototype.ldelim = function() {
  var t = this.head, o = this.tail, e = this.len;
  return this.reset().uint32(e), e && (this.tail.next = t.next, this.tail = o, this.len += e), this;
};
J.prototype.finish = function() {
  for (var t = this.head.next, o = this.constructor.alloc(this.len), e = 0; t; )
    t.fn(t.val, o, e), e += t.len, t = t.next;
  return o;
};
J._configure = function(t) {
  gr = t, J.create = xg(), gr._configure();
};
var Au = nt, Ig = cg;
(nt.prototype = Object.create(Ig.prototype)).constructor = nt;
var vt = Dt();
function nt() {
  Ig.call(this);
}
nt._configure = function() {
  nt.alloc = vt._Buffer_allocUnsafe, nt.writeBytesBuffer = vt.Buffer && vt.Buffer.prototype instanceof Uint8Array && vt.Buffer.prototype.set.name === "set" ? function(t, o, e) {
    o.set(t, e);
  } : function(t, o, e) {
    if (t.copy)
      t.copy(o, e, 0, t.length);
    else
      for (var n = 0; n < t.length; )
        o[e++] = t[n++];
  };
};
nt.prototype.bytes = function(t) {
  vt.isString(t) && (t = vt._Buffer_from(t, "base64"));
  var o = t.length >>> 0;
  return this.uint32(o), o && this._push(nt.writeBytesBuffer, o, t), this;
};
function hu(t, o, e) {
  t.length < 40 ? vt.utf8.write(t, o, e) : o.utf8Write ? o.utf8Write(t, e) : o.write(t, e);
}
nt.prototype.string = function(t) {
  var o = vt.Buffer.byteLength(t);
  return this.uint32(o), o && this._push(hu, o, t), this;
};
nt._configure();
var lg = ge, it = Dt(), xr, ug = it.LongBits, pu = it.utf8;
function Ue(t, o) {
  return RangeError("index out of range: " + t.pos + " + " + (o || 1) + " > " + t.len);
}
function ge(t) {
  this.buf = t, this.pos = 0, this.len = t.length;
}
var y0 = typeof Uint8Array < "u" ? function(t) {
  if (t instanceof Uint8Array || Array.isArray(t))
    return new ge(t);
  throw Error("illegal buffer");
} : function(t) {
  if (Array.isArray(t))
    return new ge(t);
  throw Error("illegal buffer");
}, Cg = function() {
  return it.Buffer ? function(t) {
    return (ge.create = function(o) {
      return it.Buffer.isBuffer(o) ? new xr(o) : y0(o);
    })(t);
  } : y0;
};
ge.create = Cg();
ge.prototype._slice = it.Array.prototype.subarray || /* istanbul ignore next */
it.Array.prototype.slice;
ge.prototype.uint32 = /* @__PURE__ */ function() {
  var t = 4294967295;
  return function() {
    if (t = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (t = (t | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (t = (t | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (t = (t | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (t = (t | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return t;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, Ue(this, 10);
    return t;
  };
}();
ge.prototype.int32 = function() {
  return this.uint32() | 0;
};
ge.prototype.sint32 = function() {
  var t = this.uint32();
  return t >>> 1 ^ -(t & 1) | 0;
};
function Ko() {
  var t = new ug(0, 0), o = 0;
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
        throw Ue(this);
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
        throw Ue(this);
      if (t.hi = (t.hi | (this.buf[this.pos] & 127) << o * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return t;
    }
  throw Error("invalid varint encoding");
}
ge.prototype.bool = function() {
  return this.uint32() !== 0;
};
function Li(t, o) {
  return (t[o - 4] | t[o - 3] << 8 | t[o - 2] << 16 | t[o - 1] << 24) >>> 0;
}
ge.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw Ue(this, 4);
  return Li(this.buf, this.pos += 4);
};
ge.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw Ue(this, 4);
  return Li(this.buf, this.pos += 4) | 0;
};
function w0() {
  if (this.pos + 8 > this.len)
    throw Ue(this, 8);
  return new ug(Li(this.buf, this.pos += 4), Li(this.buf, this.pos += 4));
}
ge.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw Ue(this, 4);
  var t = it.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, t;
};
ge.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw Ue(this, 4);
  var t = it.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, t;
};
ge.prototype.bytes = function() {
  var t = this.uint32(), o = this.pos, e = this.pos + t;
  if (e > this.len)
    throw Ue(this, t);
  return this.pos += t, Array.isArray(this.buf) ? this.buf.slice(o, e) : o === e ? new this.buf.constructor(0) : this._slice.call(this.buf, o, e);
};
ge.prototype.string = function() {
  var t = this.bytes();
  return pu.read(t, 0, t.length);
};
ge.prototype.skip = function(t) {
  if (typeof t == "number") {
    if (this.pos + t > this.len)
      throw Ue(this, t);
    this.pos += t;
  } else
    do
      if (this.pos >= this.len)
        throw Ue(this);
    while (this.buf[this.pos++] & 128);
  return this;
};
ge.prototype.skipType = function(t) {
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
ge._configure = function(t) {
  xr = t, ge.create = Cg(), xr._configure();
  var o = it.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  it.merge(ge.prototype, {
    int64: function() {
      return Ko.call(this)[o](!1);
    },
    uint64: function() {
      return Ko.call(this)[o](!0);
    },
    sint64: function() {
      return Ko.call(this).zzDecode()[o](!1);
    },
    fixed64: function() {
      return w0.call(this)[o](!0);
    },
    sfixed64: function() {
      return w0.call(this)[o](!1);
    }
  });
};
var mu = Tt, dg = lg;
(Tt.prototype = Object.create(dg.prototype)).constructor = Tt;
var v0 = Dt();
function Tt(t) {
  dg.call(this, t);
}
Tt._configure = function() {
  v0.Buffer && (Tt.prototype._slice = v0.Buffer.prototype.slice);
};
Tt.prototype.string = function() {
  var t = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + t, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + t, this.len));
};
Tt._configure();
var fg = {}, bu = Fn, Tr = Dt();
(Fn.prototype = Object.create(Tr.EventEmitter.prototype)).constructor = Fn;
function Fn(t, o, e) {
  if (typeof t != "function")
    throw TypeError("rpcImpl must be a function");
  Tr.EventEmitter.call(this), this.rpcImpl = t, this.requestDelimited = !!o, this.responseDelimited = !!e;
}
Fn.prototype.rpcCall = function t(o, e, n, i, r) {
  if (!i)
    throw TypeError("request must be specified");
  var a = this;
  if (!r)
    return Tr.asPromise(t, a, o, e, n, i);
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
        if (!(g instanceof n))
          try {
            g = n[a.responseDelimited ? "decodeDelimited" : "decode"](g);
          } catch (I) {
            return a.emit("error", I, o), r(I);
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
Fn.prototype.end = function(t) {
  return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(t) {
  var o = t;
  o.Service = bu;
})(fg);
var yu = {};
(function(t) {
  var o = t;
  o.build = "minimal", o.Writer = cg, o.BufferWriter = Au, o.Reader = lg, o.BufferReader = mu, o.util = Dt(), o.rpc = fg, o.roots = yu, o.configure = e;
  function e() {
    o.util._configure(), o.Writer._configure(o.BufferWriter), o.Reader._configure(o.BufferReader);
  }
  e();
})(ag);
var ae = ag;
const G = ae.Reader, Ae = ae.Writer, p = ae.util, d = ae.roots.default || (ae.roots.default = {}), Yt = d.dot = (() => {
  const t = {};
  return t.Content = function() {
    function o(e) {
      if (e)
        for (let n = Object.keys(e), i = 0; i < n.length; ++i)
          e[n[i]] != null && (this[n[i]] = e[n[i]]);
    }
    return o.prototype.token = p.newBuffer([]), o.prototype.iv = p.newBuffer([]), o.prototype.schemaVersion = 0, o.prototype.bytes = p.newBuffer([]), o.create = function(e) {
      return new o(e);
    }, o.encode = function(e, n) {
      return n || (n = Ae.create()), e.token != null && Object.hasOwnProperty.call(e, "token") && n.uint32(
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
      e instanceof G || (e = G.create(e));
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
      return e instanceof G || (e = new G(e)), this.decode(e, e.uint32());
    }, o.verify = function(e) {
      return typeof e != "object" || e === null ? "object expected" : e.token != null && e.hasOwnProperty("token") && !(e.token && typeof e.token.length == "number" || p.isString(e.token)) ? "token: buffer expected" : e.iv != null && e.hasOwnProperty("iv") && !(e.iv && typeof e.iv.length == "number" || p.isString(e.iv)) ? "iv: buffer expected" : e.schemaVersion != null && e.hasOwnProperty("schemaVersion") && !p.isInteger(e.schemaVersion) ? "schemaVersion: integer expected" : e.bytes != null && e.hasOwnProperty("bytes") && !(e.bytes && typeof e.bytes.length == "number" || p.isString(e.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(e) {
      if (e instanceof d.dot.Content)
        return e;
      let n = new d.dot.Content();
      return e.token != null && (typeof e.token == "string" ? p.base64.decode(e.token, n.token = p.newBuffer(p.base64.length(e.token)), 0) : e.token.length >= 0 && (n.token = e.token)), e.iv != null && (typeof e.iv == "string" ? p.base64.decode(e.iv, n.iv = p.newBuffer(p.base64.length(e.iv)), 0) : e.iv.length >= 0 && (n.iv = e.iv)), e.schemaVersion != null && (n.schemaVersion = e.schemaVersion | 0), e.bytes != null && (typeof e.bytes == "string" ? p.base64.decode(e.bytes, n.bytes = p.newBuffer(p.base64.length(e.bytes)), 0) : e.bytes.length >= 0 && (n.bytes = e.bytes)), n;
    }, o.toObject = function(e, n) {
      n || (n = {});
      let i = {};
      return n.defaults && (n.bytes === String ? i.token = "" : (i.token = [], n.bytes !== Array && (i.token = p.newBuffer(i.token))), n.bytes === String ? i.iv = "" : (i.iv = [], n.bytes !== Array && (i.iv = p.newBuffer(i.iv))), i.schemaVersion = 0, n.bytes === String ? i.bytes = "" : (i.bytes = [], n.bytes !== Array && (i.bytes = p.newBuffer(i.bytes)))), e.token != null && e.hasOwnProperty("token") && (i.token = n.bytes === String ? p.base64.encode(e.token, 0, e.token.length) : n.bytes === Array ? Array.prototype.slice.call(e.token) : e.token), e.iv != null && e.hasOwnProperty("iv") && (i.iv = n.bytes === String ? p.base64.encode(e.iv, 0, e.iv.length) : n.bytes === Array ? Array.prototype.slice.call(e.iv) : e.iv), e.schemaVersion != null && e.hasOwnProperty("schemaVersion") && (i.schemaVersion = e.schemaVersion), e.bytes != null && e.hasOwnProperty("bytes") && (i.bytes = n.bytes === String ? p.base64.encode(e.bytes, 0, e.bytes.length) : n.bytes === Array ? Array.prototype.slice.call(e.bytes) : e.bytes), i;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, ae.util.toJSONOptions);
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
      return e.prototype.images = p.emptyArray, e.prototype.metadata = null, e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, i) {
        if (i || (i = Ae.create()), n.images != null && n.images.length)
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
        n instanceof G || (n = G.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new d.dot.v3.MagnifEyeLivenessContent();
        for (; n.pos < r; ) {
          let s = n.uint32();
          switch (s >>> 3) {
            case 1: {
              a.images && a.images.length || (a.images = []), a.images.push(d.dot.Image.decode(n, n.uint32()));
              break;
            }
            case 2: {
              a.metadata = d.dot.v3.Metadata.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(s & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(n) {
        return n instanceof G || (n = new G(n)), this.decode(n, n.uint32());
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
        return this.constructor.toObject(this, ae.util.toJSONOptions);
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
        get: p.oneOfGetter(n = ["sessionToken"]),
        set: p.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "metadata", {
        get: p.oneOfGetter(n = ["web", "android", "ios"]),
        set: p.oneOfSetter(n)
      }), e.create = function(i) {
        return new e(i);
      }, e.encode = function(i, r) {
        return r || (r = Ae.create()), i.platform != null && Object.hasOwnProperty.call(i, "platform") && r.uint32(
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
        i instanceof G || (i = G.create(i));
        let a = r === void 0 ? i.len : i.pos + r, s = new d.dot.v3.Metadata();
        for (; i.pos < a; ) {
          let g = i.uint32();
          switch (g >>> 3) {
            case 1: {
              s.platform = i.int32();
              break;
            }
            case 5: {
              s.sessionToken = i.string();
              break;
            }
            case 2: {
              s.web = d.dot.v3.WebMetadata.decode(i, i.uint32());
              break;
            }
            case 3: {
              s.android = d.dot.v3.AndroidMetadata.decode(i, i.uint32());
              break;
            }
            case 4: {
              s.ios = d.dot.v3.IosMetadata.decode(i, i.uint32());
              break;
            }
            default:
              i.skipType(g & 7);
              break;
          }
        }
        return s;
      }, e.decodeDelimited = function(i) {
        return i instanceof G || (i = new G(i)), this.decode(i, i.uint32());
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
        if (i.sessionToken != null && i.hasOwnProperty("sessionToken") && (r._sessionToken = 1, !p.isString(i.sessionToken)))
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
        return this.constructor.toObject(this, ae.util.toJSONOptions);
      }, e.getTypeUrl = function(i) {
        return i === void 0 && (i = "type.googleapis.com"), i + "/dot.v3.Metadata";
      }, e;
    }(), o.AndroidMetadata = function() {
      function e(i) {
        if (this.supportedAbis = [], this.digests = [], this.dynamicCameraFrameProperties = {}, i)
          for (let r = Object.keys(i), a = 0; a < r.length; ++a)
            i[r[a]] != null && (this[r[a]] = i[r[a]]);
      }
      e.prototype.supportedAbis = p.emptyArray, e.prototype.device = null, e.prototype.digests = p.emptyArray, e.prototype.dynamicCameraFrameProperties = p.emptyObject;
      let n;
      return Object.defineProperty(e.prototype, "_device", {
        get: p.oneOfGetter(n = ["device"]),
        set: p.oneOfSetter(n)
      }), e.create = function(i) {
        return new e(i);
      }, e.encode = function(i, r) {
        if (r || (r = Ae.create()), i.supportedAbis != null && i.supportedAbis.length)
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
          for (let a = Object.keys(i.dynamicCameraFrameProperties), s = 0; s < a.length; ++s)
            r.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(a[s]), d.dot.Int32List.encode(i.dynamicCameraFrameProperties[a[s]], r.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        return r;
      }, e.encodeDelimited = function(i, r) {
        return this.encode(i, r).ldelim();
      }, e.decode = function(i, r) {
        i instanceof G || (i = G.create(i));
        let a = r === void 0 ? i.len : i.pos + r, s = new d.dot.v3.AndroidMetadata(), g, I;
        for (; i.pos < a; ) {
          let C = i.uint32();
          switch (C >>> 3) {
            case 1: {
              s.supportedAbis && s.supportedAbis.length || (s.supportedAbis = []), s.supportedAbis.push(i.string());
              break;
            }
            case 2: {
              s.device = i.string();
              break;
            }
            case 3: {
              s.digests && s.digests.length || (s.digests = []), s.digests.push(i.bytes());
              break;
            }
            case 4: {
              s.dynamicCameraFrameProperties === p.emptyObject && (s.dynamicCameraFrameProperties = {});
              let l = i.uint32() + i.pos;
              for (g = "", I = null; i.pos < l; ) {
                let h = i.uint32();
                switch (h >>> 3) {
                  case 1:
                    g = i.string();
                    break;
                  case 2:
                    I = d.dot.Int32List.decode(i, i.uint32());
                    break;
                  default:
                    i.skipType(h & 7);
                    break;
                }
              }
              s.dynamicCameraFrameProperties[g] = I;
              break;
            }
            default:
              i.skipType(C & 7);
              break;
          }
        }
        return s;
      }, e.decodeDelimited = function(i) {
        return i instanceof G || (i = new G(i)), this.decode(i, i.uint32());
      }, e.verify = function(i) {
        if (typeof i != "object" || i === null)
          return "object expected";
        if (i.supportedAbis != null && i.hasOwnProperty("supportedAbis")) {
          if (!Array.isArray(i.supportedAbis))
            return "supportedAbis: array expected";
          for (let r = 0; r < i.supportedAbis.length; ++r)
            if (!p.isString(i.supportedAbis[r]))
              return "supportedAbis: string[] expected";
        }
        if (i.device != null && i.hasOwnProperty("device") && !p.isString(i.device))
          return "device: string expected";
        if (i.digests != null && i.hasOwnProperty("digests")) {
          if (!Array.isArray(i.digests))
            return "digests: array expected";
          for (let r = 0; r < i.digests.length; ++r)
            if (!(i.digests[r] && typeof i.digests[r].length == "number" || p.isString(i.digests[r])))
              return "digests: buffer[] expected";
        }
        if (i.dynamicCameraFrameProperties != null && i.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!p.isObject(i.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let r = Object.keys(i.dynamicCameraFrameProperties);
          for (let a = 0; a < r.length; ++a) {
            let s = d.dot.Int32List.verify(i.dynamicCameraFrameProperties[r[a]]);
            if (s)
              return "dynamicCameraFrameProperties." + s;
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
            typeof i.digests[a] == "string" ? p.base64.decode(i.digests[a], r.digests[a] = p.newBuffer(p.base64.length(i.digests[a])), 0) : i.digests[a].length >= 0 && (r.digests[a] = i.digests[a]);
        }
        if (i.dynamicCameraFrameProperties) {
          if (typeof i.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v3.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          r.dynamicCameraFrameProperties = {};
          for (let a = Object.keys(i.dynamicCameraFrameProperties), s = 0; s < a.length; ++s) {
            if (typeof i.dynamicCameraFrameProperties[a[s]] != "object")
              throw TypeError(".dot.v3.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            r.dynamicCameraFrameProperties[a[s]] = d.dot.Int32List.fromObject(i.dynamicCameraFrameProperties[a[s]]);
          }
        }
        return r;
      }, e.toObject = function(i, r) {
        r || (r = {});
        let a = {};
        if ((r.arrays || r.defaults) && (a.supportedAbis = [], a.digests = []), (r.objects || r.defaults) && (a.dynamicCameraFrameProperties = {}), i.supportedAbis && i.supportedAbis.length) {
          a.supportedAbis = [];
          for (let g = 0; g < i.supportedAbis.length; ++g)
            a.supportedAbis[g] = i.supportedAbis[g];
        }
        if (i.device != null && i.hasOwnProperty("device") && (a.device = i.device, r.oneofs && (a._device = "device")), i.digests && i.digests.length) {
          a.digests = [];
          for (let g = 0; g < i.digests.length; ++g)
            a.digests[g] = r.bytes === String ? p.base64.encode(i.digests[g], 0, i.digests[g].length) : r.bytes === Array ? Array.prototype.slice.call(i.digests[g]) : i.digests[g];
        }
        let s;
        if (i.dynamicCameraFrameProperties && (s = Object.keys(i.dynamicCameraFrameProperties)).length) {
          a.dynamicCameraFrameProperties = {};
          for (let g = 0; g < s.length; ++g)
            a.dynamicCameraFrameProperties[s[g]] = d.dot.Int32List.toObject(i.dynamicCameraFrameProperties[s[g]], r);
        }
        return a;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ae.util.toJSONOptions);
      }, e.getTypeUrl = function(i) {
        return i === void 0 && (i = "type.googleapis.com"), i + "/dot.v3.AndroidMetadata";
      }, e;
    }(), o.IosMetadata = function() {
      function e(n) {
        if (this.digests = [], this.isoValues = [], n)
          for (let i = Object.keys(n), r = 0; r < i.length; ++r)
            n[i[r]] != null && (this[i[r]] = n[i[r]]);
      }
      return e.prototype.device = p.newBuffer([]), e.prototype.architecture = !1, e.prototype.digests = p.emptyArray, e.prototype.isoValues = p.emptyArray, e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, i) {
        if (i || (i = Ae.create()), n.device != null && Object.hasOwnProperty.call(n, "device") && i.uint32(
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
        n instanceof G || (n = G.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new d.dot.v3.IosMetadata();
        for (; n.pos < r; ) {
          let s = n.uint32();
          switch (s >>> 3) {
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
              if (a.isoValues && a.isoValues.length || (a.isoValues = []), (s & 7) === 2) {
                let g = n.uint32() + n.pos;
                for (; n.pos < g; )
                  a.isoValues.push(n.int32());
              } else
                a.isoValues.push(n.int32());
              break;
            }
            default:
              n.skipType(s & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(n) {
        return n instanceof G || (n = new G(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.device != null && n.hasOwnProperty("device") && !(n.device && typeof n.device.length == "number" || p.isString(n.device)))
          return "device: buffer expected";
        if (n.architecture != null && n.hasOwnProperty("architecture") && typeof n.architecture != "boolean")
          return "architecture: boolean expected";
        if (n.digests != null && n.hasOwnProperty("digests")) {
          if (!Array.isArray(n.digests))
            return "digests: array expected";
          for (let i = 0; i < n.digests.length; ++i)
            if (!(n.digests[i] && typeof n.digests[i].length == "number" || p.isString(n.digests[i])))
              return "digests: buffer[] expected";
        }
        if (n.isoValues != null && n.hasOwnProperty("isoValues")) {
          if (!Array.isArray(n.isoValues))
            return "isoValues: array expected";
          for (let i = 0; i < n.isoValues.length; ++i)
            if (!p.isInteger(n.isoValues[i]))
              return "isoValues: integer[] expected";
        }
        return null;
      }, e.fromObject = function(n) {
        if (n instanceof d.dot.v3.IosMetadata)
          return n;
        let i = new d.dot.v3.IosMetadata();
        if (n.device != null && (typeof n.device == "string" ? p.base64.decode(n.device, i.device = p.newBuffer(p.base64.length(n.device)), 0) : n.device.length >= 0 && (i.device = n.device)), n.architecture != null && (i.architecture = !!n.architecture), n.digests) {
          if (!Array.isArray(n.digests))
            throw TypeError(".dot.v3.IosMetadata.digests: array expected");
          i.digests = [];
          for (let r = 0; r < n.digests.length; ++r)
            typeof n.digests[r] == "string" ? p.base64.decode(n.digests[r], i.digests[r] = p.newBuffer(p.base64.length(n.digests[r])), 0) : n.digests[r].length >= 0 && (i.digests[r] = n.digests[r]);
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
        if ((i.arrays || i.defaults) && (r.digests = [], r.isoValues = []), i.defaults && (i.bytes === String ? r.device = "" : (r.device = [], i.bytes !== Array && (r.device = p.newBuffer(r.device))), r.architecture = !1), n.device != null && n.hasOwnProperty("device") && (r.device = i.bytes === String ? p.base64.encode(n.device, 0, n.device.length) : i.bytes === Array ? Array.prototype.slice.call(n.device) : n.device), n.architecture != null && n.hasOwnProperty("architecture") && (r.architecture = n.architecture), n.digests && n.digests.length) {
          r.digests = [];
          for (let a = 0; a < n.digests.length; ++a)
            r.digests[a] = i.bytes === String ? p.base64.encode(n.digests[a], 0, n.digests[a].length) : i.bytes === Array ? Array.prototype.slice.call(n.digests[a]) : n.digests[a];
        }
        if (n.isoValues && n.isoValues.length) {
          r.isoValues = [];
          for (let a = 0; a < n.isoValues.length; ++a)
            r.isoValues[a] = n.isoValues[a];
        }
        return r;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, ae.util.toJSONOptions);
      }, e.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v3.IosMetadata";
      }, e;
    }(), o.WebMetadata = function() {
      function e(n) {
        if (this.availableCameraProperties = [], this.hashedDetectedImages = [], this.detectionRecord = [], n)
          for (let i = Object.keys(n), r = 0; r < i.length; ++r)
            n[i[r]] != null && (this[i[r]] = n[i[r]]);
      }
      return e.prototype.currentCameraProperties = null, e.prototype.availableCameraProperties = p.emptyArray, e.prototype.hashedDetectedImages = p.emptyArray, e.prototype.detectionRecord = p.emptyArray, e.create = function(n) {
        return new e(n);
      }, e.encode = function(n, i) {
        if (i || (i = Ae.create()), n.currentCameraProperties != null && Object.hasOwnProperty.call(n, "currentCameraProperties") && d.dot.v3.MediaTrackSettings.encode(n.currentCameraProperties, i.uint32(
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
        n instanceof G || (n = G.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new d.dot.v3.WebMetadata();
        for (; n.pos < r; ) {
          let s = n.uint32();
          switch (s >>> 3) {
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
              n.skipType(s & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(n) {
        return n instanceof G || (n = new G(n)), this.decode(n, n.uint32());
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
            if (!p.isString(n.hashedDetectedImages[i]))
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
        return this.constructor.toObject(this, ae.util.toJSONOptions);
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
        get: p.oneOfGetter(n = ["aspectRatio"]),
        set: p.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_autoGainControl", {
        get: p.oneOfGetter(n = ["autoGainControl"]),
        set: p.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_channelCount", {
        get: p.oneOfGetter(n = ["channelCount"]),
        set: p.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_deviceId", {
        get: p.oneOfGetter(n = ["deviceId"]),
        set: p.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_displaySurface", {
        get: p.oneOfGetter(n = ["displaySurface"]),
        set: p.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_echoCancellation", {
        get: p.oneOfGetter(n = ["echoCancellation"]),
        set: p.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_facingMode", {
        get: p.oneOfGetter(n = ["facingMode"]),
        set: p.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_frameRate", {
        get: p.oneOfGetter(n = ["frameRate"]),
        set: p.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_groupId", {
        get: p.oneOfGetter(n = ["groupId"]),
        set: p.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_height", {
        get: p.oneOfGetter(n = ["height"]),
        set: p.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_noiseSuppression", {
        get: p.oneOfGetter(n = ["noiseSuppression"]),
        set: p.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_sampleRate", {
        get: p.oneOfGetter(n = ["sampleRate"]),
        set: p.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_sampleSize", {
        get: p.oneOfGetter(n = ["sampleSize"]),
        set: p.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_width", {
        get: p.oneOfGetter(n = ["width"]),
        set: p.oneOfSetter(n)
      }), Object.defineProperty(e.prototype, "_deviceName", {
        get: p.oneOfGetter(n = ["deviceName"]),
        set: p.oneOfSetter(n)
      }), e.create = function(i) {
        return new e(i);
      }, e.encode = function(i, r) {
        return r || (r = Ae.create()), i.aspectRatio != null && Object.hasOwnProperty.call(i, "aspectRatio") && r.uint32(
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
        i instanceof G || (i = G.create(i));
        let a = r === void 0 ? i.len : i.pos + r, s = new d.dot.v3.MediaTrackSettings();
        for (; i.pos < a; ) {
          let g = i.uint32();
          switch (g >>> 3) {
            case 1: {
              s.aspectRatio = i.double();
              break;
            }
            case 2: {
              s.autoGainControl = i.bool();
              break;
            }
            case 3: {
              s.channelCount = i.int32();
              break;
            }
            case 4: {
              s.deviceId = i.string();
              break;
            }
            case 5: {
              s.displaySurface = i.string();
              break;
            }
            case 6: {
              s.echoCancellation = i.bool();
              break;
            }
            case 7: {
              s.facingMode = i.string();
              break;
            }
            case 8: {
              s.frameRate = i.double();
              break;
            }
            case 9: {
              s.groupId = i.string();
              break;
            }
            case 10: {
              s.height = i.int32();
              break;
            }
            case 11: {
              s.noiseSuppression = i.bool();
              break;
            }
            case 12: {
              s.sampleRate = i.int32();
              break;
            }
            case 13: {
              s.sampleSize = i.int32();
              break;
            }
            case 14: {
              s.width = i.int32();
              break;
            }
            case 15: {
              s.deviceName = i.string();
              break;
            }
            default:
              i.skipType(g & 7);
              break;
          }
        }
        return s;
      }, e.decodeDelimited = function(i) {
        return i instanceof G || (i = new G(i)), this.decode(i, i.uint32());
      }, e.verify = function(i) {
        return typeof i != "object" || i === null ? "object expected" : i.aspectRatio != null && i.hasOwnProperty("aspectRatio") && typeof i.aspectRatio != "number" ? "aspectRatio: number expected" : i.autoGainControl != null && i.hasOwnProperty("autoGainControl") && typeof i.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : i.channelCount != null && i.hasOwnProperty("channelCount") && !p.isInteger(i.channelCount) ? "channelCount: integer expected" : i.deviceId != null && i.hasOwnProperty("deviceId") && !p.isString(i.deviceId) ? "deviceId: string expected" : i.displaySurface != null && i.hasOwnProperty("displaySurface") && !p.isString(i.displaySurface) ? "displaySurface: string expected" : i.echoCancellation != null && i.hasOwnProperty("echoCancellation") && typeof i.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : i.facingMode != null && i.hasOwnProperty("facingMode") && !p.isString(i.facingMode) ? "facingMode: string expected" : i.frameRate != null && i.hasOwnProperty("frameRate") && typeof i.frameRate != "number" ? "frameRate: number expected" : i.groupId != null && i.hasOwnProperty("groupId") && !p.isString(i.groupId) ? "groupId: string expected" : i.height != null && i.hasOwnProperty("height") && !p.isInteger(i.height) ? "height: integer expected" : i.noiseSuppression != null && i.hasOwnProperty("noiseSuppression") && typeof i.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : i.sampleRate != null && i.hasOwnProperty("sampleRate") && !p.isInteger(i.sampleRate) ? "sampleRate: integer expected" : i.sampleSize != null && i.hasOwnProperty("sampleSize") && !p.isInteger(i.sampleSize) ? "sampleSize: integer expected" : i.width != null && i.hasOwnProperty("width") && !p.isInteger(i.width) ? "width: integer expected" : i.deviceName != null && i.hasOwnProperty("deviceName") && !p.isString(i.deviceName) ? "deviceName: string expected" : null;
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
        return this.constructor.toObject(this, ae.util.toJSONOptions);
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
        return i || (i = Ae.create()), n.width != null && Object.hasOwnProperty.call(n, "width") && i.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(n.width), n.height != null && Object.hasOwnProperty.call(n, "height") && i.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(n.height), i;
      }, e.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, e.decode = function(n, i) {
        n instanceof G || (n = G.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new d.dot.v3.ImageBitmap();
        for (; n.pos < r; ) {
          let s = n.uint32();
          switch (s >>> 3) {
            case 1: {
              a.width = n.int32();
              break;
            }
            case 2: {
              a.height = n.int32();
              break;
            }
            default:
              n.skipType(s & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(n) {
        return n instanceof G || (n = new G(n)), this.decode(n, n.uint32());
      }, e.verify = function(n) {
        return typeof n != "object" || n === null ? "object expected" : n.width != null && n.hasOwnProperty("width") && !p.isInteger(n.width) ? "width: integer expected" : n.height != null && n.hasOwnProperty("height") && !p.isInteger(n.height) ? "height: integer expected" : null;
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
        return this.constructor.toObject(this, ae.util.toJSONOptions);
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
        get: p.oneOfGetter(n = ["cameraInitFrameResolution"]),
        set: p.oneOfSetter(n)
      }), e.create = function(i) {
        return new e(i);
      }, e.encode = function(i, r) {
        return r || (r = Ae.create()), i.cameraInitFrameResolution != null && Object.hasOwnProperty.call(i, "cameraInitFrameResolution") && d.dot.v3.ImageBitmap.encode(i.cameraInitFrameResolution, r.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), i.cameraProperties != null && Object.hasOwnProperty.call(i, "cameraProperties") && d.dot.v3.MediaTrackSettings.encode(i.cameraProperties, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), r;
      }, e.encodeDelimited = function(i, r) {
        return this.encode(i, r).ldelim();
      }, e.decode = function(i, r) {
        i instanceof G || (i = G.create(i));
        let a = r === void 0 ? i.len : i.pos + r, s = new d.dot.v3.CameraProperties();
        for (; i.pos < a; ) {
          let g = i.uint32();
          switch (g >>> 3) {
            case 1: {
              s.cameraInitFrameResolution = d.dot.v3.ImageBitmap.decode(i, i.uint32());
              break;
            }
            case 2: {
              s.cameraProperties = d.dot.v3.MediaTrackSettings.decode(i, i.uint32());
              break;
            }
            default:
              i.skipType(g & 7);
              break;
          }
        }
        return s;
      }, e.decodeDelimited = function(i) {
        return i instanceof G || (i = new G(i)), this.decode(i, i.uint32());
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
        return this.constructor.toObject(this, ae.util.toJSONOptions);
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
        return i || (i = Ae.create()), n.brightness != null && Object.hasOwnProperty.call(n, "brightness") && i.uint32(
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
        n instanceof G || (n = G.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new d.dot.v3.DetectedObject();
        for (; n.pos < r; ) {
          let s = n.uint32();
          switch (s >>> 3) {
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
              n.skipType(s & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(n) {
        return n instanceof G || (n = new G(n)), this.decode(n, n.uint32());
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
        return this.constructor.toObject(this, ae.util.toJSONOptions);
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
        return i || (i = Ae.create()), n.x != null && Object.hasOwnProperty.call(n, "x") && i.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(n.x), n.y != null && Object.hasOwnProperty.call(n, "y") && i.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(n.y), i;
      }, e.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, e.decode = function(n, i) {
        n instanceof G || (n = G.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new d.dot.v3.Point();
        for (; n.pos < r; ) {
          let s = n.uint32();
          switch (s >>> 3) {
            case 1: {
              a.x = n.float();
              break;
            }
            case 2: {
              a.y = n.float();
              break;
            }
            default:
              n.skipType(s & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(n) {
        return n instanceof G || (n = new G(n)), this.decode(n, n.uint32());
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
        return this.constructor.toObject(this, ae.util.toJSONOptions);
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
        return i || (i = Ae.create()), n.image != null && Object.hasOwnProperty.call(n, "image") && d.dot.Image.encode(n.image, i.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.metadata != null && Object.hasOwnProperty.call(n, "metadata") && d.dot.v3.Metadata.encode(n.metadata, i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), i;
      }, e.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, e.decode = function(n, i) {
        n instanceof G || (n = G.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new d.dot.v3.FaceContent();
        for (; n.pos < r; ) {
          let s = n.uint32();
          switch (s >>> 3) {
            case 1: {
              a.image = d.dot.Image.decode(n, n.uint32());
              break;
            }
            case 2: {
              a.metadata = d.dot.v3.Metadata.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(s & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(n) {
        return n instanceof G || (n = new G(n)), this.decode(n, n.uint32());
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
        return this.constructor.toObject(this, ae.util.toJSONOptions);
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
        return i || (i = Ae.create()), n.image != null && Object.hasOwnProperty.call(n, "image") && d.dot.Image.encode(n.image, i.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.metadata != null && Object.hasOwnProperty.call(n, "metadata") && d.dot.v3.Metadata.encode(n.metadata, i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), i;
      }, e.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, e.decode = function(n, i) {
        n instanceof G || (n = G.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new d.dot.v3.DocumentContent();
        for (; n.pos < r; ) {
          let s = n.uint32();
          switch (s >>> 3) {
            case 1: {
              a.image = d.dot.Image.decode(n, n.uint32());
              break;
            }
            case 2: {
              a.metadata = d.dot.v3.Metadata.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(s & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(n) {
        return n instanceof G || (n = new G(n)), this.decode(n, n.uint32());
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
        return this.constructor.toObject(this, ae.util.toJSONOptions);
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
        get: p.oneOfGetter(n = ["documentContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent"]),
        set: p.oneOfSetter(n)
      }), e.create = function(i) {
        return new e(i);
      }, e.encode = function(i, r) {
        return r || (r = Ae.create()), i.documentContent != null && Object.hasOwnProperty.call(i, "documentContent") && d.dot.v3.DocumentContent.encode(i.documentContent, r.uint32(
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
        i instanceof G || (i = G.create(i));
        let a = r === void 0 ? i.len : i.pos + r, s = new d.dot.v3.Blob();
        for (; i.pos < a; ) {
          let g = i.uint32();
          switch (g >>> 3) {
            case 1: {
              s.documentContent = d.dot.v3.DocumentContent.decode(i, i.uint32());
              break;
            }
            case 2: {
              s.faceContent = d.dot.v3.FaceContent.decode(i, i.uint32());
              break;
            }
            case 3: {
              s.magnifeyeLivenessContent = d.dot.v3.MagnifEyeLivenessContent.decode(i, i.uint32());
              break;
            }
            case 4: {
              s.smileLivenessContent = d.dot.v3.SmileLivenessContent.decode(i, i.uint32());
              break;
            }
            default:
              i.skipType(g & 7);
              break;
          }
        }
        return s;
      }, e.decodeDelimited = function(i) {
        return i instanceof G || (i = new G(i)), this.decode(i, i.uint32());
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
        return this.constructor.toObject(this, ae.util.toJSONOptions);
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
        return i || (i = Ae.create()), n.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(n, "neutralExpressionFaceImage") && d.dot.Image.encode(n.neutralExpressionFaceImage, i.uint32(
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
        n instanceof G || (n = G.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new d.dot.v3.SmileLivenessContent();
        for (; n.pos < r; ) {
          let s = n.uint32();
          switch (s >>> 3) {
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
              n.skipType(s & 7);
              break;
          }
        }
        return a;
      }, e.decodeDelimited = function(n) {
        return n instanceof G || (n = new G(n)), this.decode(n, n.uint32());
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
        return this.constructor.toObject(this, ae.util.toJSONOptions);
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
    return o.prototype.bytes = p.newBuffer([]), o.create = function(e) {
      return new o(e);
    }, o.encode = function(e, n) {
      return n || (n = Ae.create()), e.bytes != null && Object.hasOwnProperty.call(e, "bytes") && n.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(e.bytes), n;
    }, o.encodeDelimited = function(e, n) {
      return this.encode(e, n).ldelim();
    }, o.decode = function(e, n) {
      e instanceof G || (e = G.create(e));
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
      return e instanceof G || (e = new G(e)), this.decode(e, e.uint32());
    }, o.verify = function(e) {
      return typeof e != "object" || e === null ? "object expected" : e.bytes != null && e.hasOwnProperty("bytes") && !(e.bytes && typeof e.bytes.length == "number" || p.isString(e.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(e) {
      if (e instanceof d.dot.Image)
        return e;
      let n = new d.dot.Image();
      return e.bytes != null && (typeof e.bytes == "string" ? p.base64.decode(e.bytes, n.bytes = p.newBuffer(p.base64.length(e.bytes)), 0) : e.bytes.length >= 0 && (n.bytes = e.bytes)), n;
    }, o.toObject = function(e, n) {
      n || (n = {});
      let i = {};
      return n.defaults && (n.bytes === String ? i.bytes = "" : (i.bytes = [], n.bytes !== Array && (i.bytes = p.newBuffer(i.bytes)))), e.bytes != null && e.hasOwnProperty("bytes") && (i.bytes = n.bytes === String ? p.base64.encode(e.bytes, 0, e.bytes.length) : n.bytes === Array ? Array.prototype.slice.call(e.bytes) : e.bytes), i;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, ae.util.toJSONOptions);
    }, o.getTypeUrl = function(e) {
      return e === void 0 && (e = "type.googleapis.com"), e + "/dot.Image";
    }, o;
  }(), t.Int32List = function() {
    function o(e) {
      if (this.items = [], e)
        for (let n = Object.keys(e), i = 0; i < n.length; ++i)
          e[n[i]] != null && (this[n[i]] = e[n[i]]);
    }
    return o.prototype.items = p.emptyArray, o.create = function(e) {
      return new o(e);
    }, o.encode = function(e, n) {
      if (n || (n = Ae.create()), e.items != null && e.items.length) {
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
      e instanceof G || (e = G.create(e));
      let i = n === void 0 ? e.len : e.pos + n, r = new d.dot.Int32List();
      for (; e.pos < i; ) {
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
      return e instanceof G || (e = new G(e)), this.decode(e, e.uint32());
    }, o.verify = function(e) {
      if (typeof e != "object" || e === null)
        return "object expected";
      if (e.items != null && e.hasOwnProperty("items")) {
        if (!Array.isArray(e.items))
          return "items: array expected";
        for (let n = 0; n < e.items.length; ++n)
          if (!p.isInteger(e.items[n]))
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
      return this.constructor.toObject(this, ae.util.toJSONOptions);
    }, o.getTypeUrl = function(e) {
      return e === void 0 && (e = "type.googleapis.com"), e + "/dot.Int32List";
    }, o;
  }(), t.Platform = function() {
    const o = {}, e = Object.create(o);
    return e[o[0] = "WEB"] = 0, e[o[1] = "ANDROID"] = 1, e[o[2] = "IOS"] = 2, e;
  }(), t;
})();
async function Ag(t) {
  const { Image: o } = Yt, e = await t.arrayBuffer(), n = new Uint8Array(e), i = {};
  i.bytes = n;
  const r = o.verify(i);
  if (r)
    throw Error(r);
  const a = {};
  return a.bytes = n, o.create(a);
}
async function hg(t) {
  const { v3: { Metadata: o } } = Yt, e = { ...t };
  e.platform = Yt.Platform.WEB;
  const n = e, i = o.verify(n);
  if (i)
    throw Error(i);
  return o.create(n);
}
async function pg(t) {
  const { Content: o } = Yt, { iv: e, key: n, message: i } = await Tl(t), r = { token: new Uint8Array(n), iv: e, schemaVersion: kI, bytes: new Uint8Array(i) }, a = o.verify(r);
  if (a)
    throw Error(a);
  const s = o.create(r);
  return o.encode(s).finish();
}
function mg({ documentContent: t, faceContent: o, magnifeyeLivenessContent: e, smileLivenessContent: n }) {
  const { Blob: i } = Yt.v3, r = {};
  r.documentContent = t, r.faceContent = o, r.magnifeyeLivenessContent = e, r.smileLivenessContent = n;
  const a = r, s = i.verify(a);
  if (s)
    throw Error(s);
  const g = i.create(a);
  return i.encode(g).finish();
}
async function wu(t, o) {
  const { FaceContent: e } = Yt.v3, n = await Ag(t), i = await hg(o), r = {};
  r.image = n, r.metadata = i;
  const a = r, s = e.verify(a);
  if (s)
    throw Error(s);
  const g = e.create(a), I = {};
  return I.faceContent = g, mg(I);
}
async function vu(t, o) {
  const e = await wu(t, o);
  return pg(e);
}
const Bu = ({
  onPhotoTakenInternal: t
}) => {
  const {
    analytics: o,
    appState: e,
    appTier: n,
    freemiumOverlayState: i,
    handleAppStateChange: r,
    handleError: a,
    isLicenseValidated: s
  } = qi(), {
    faceCameraOptions: g
  } = Ts(), {
    cameraFacing: I,
    onPhotoTaken: C,
    sessionToken: l,
    thresholds: h,
    wasmDirectoryPath: A
  } = g, y = ot(), k = dn(void 0), {
    cameraHandler: B,
    cameraResolution: v,
    onCameraResolutionChange: R
  } = pl(y, I), {
    controller: S
  } = ou(h, A), {
    shouldMirror: M
  } = Al(ut.CONTROL, B);
  qI(ut.CAMERA_PROPS_CHANGED, {
    cameraResolution: v,
    shouldMirror: M
  }), Ce(() => () => {
    Dn.getInstance().restart();
  }, []), Ce(() => {
    B != null && B.videoTrack && (S != null && S.isDetectorInitialized) && s && r(et.RUNNING);
  }, [B == null ? void 0 : B.videoTrack, S == null ? void 0 : S.isDetectorInitialized, r, s]), Ce(() => {
    if (e !== et.RUNNING)
      return;
    if (!B || !S)
      throw new ne("Cannot start detection");
    let $ = 0, oe = !1, q = 0;
    const de = new Wr(30);
    S.clearImagesForDuplicateDetection();
    const Je = async (re, be, Qe) => {
      const De = {
        width: re.width,
        height: re.height
      }, ce = await Ps(re), pe = {
        ...await B.getCameraProperties(),
        detectionRecord: Qe,
        hashedDetectedImages: S.getImagesForDuplicateDetection()
      }, _e = await vu(ce, {
        sessionToken: l,
        web: pe
      }), Be = {
        detection: be,
        imageResolution: De
      };
      $I(Ws.FACE, S.getCandidateSelectionImages()), t && t({
        cameraProperties: pe || {}
      }), C({
        image: ce,
        data: Be
      }, _e);
    };
    return (async () => {
      const re = Date.now();
      for (; B.checkIfStreamIsRunning() && !oe; ) {
        if (ul($, q)) {
          const {
            detection: Be,
            image: Ve
          } = S.getBestImage() || {}, rt = S.getDetectionRecord();
          if (Ve && Be) {
            const Se = Date.now(), Ge = Ds(de);
            o == null || o.trackCaptureProcess({
              faceDetection: Be,
              imageResolution: {
                width: Ve.width,
                height: Ve.height
              },
              deviceName: await B.getDeviceName(),
              averageFps: Ge,
              captureProcessDurationInMs: Se - re,
              facingMode: B.getCameraSettings().facingMode,
              instructionSet: await S.getInstructionSet()
            }), r(et.WAITING), await Je(Ve, Be, rt), S.restart();
          } else
            a(new ne("Something went wrong during capturing an image"));
          return;
        }
        const be = Date.now(), Qe = B.takePhoto(), De = {
          width: Qe.width,
          height: Qe.height
        };
        let ce;
        try {
          ce = await S.processImage(Qe);
        } catch (Be) {
          Be instanceof Error && a(ne.fromCameraError(Be));
          return;
        }
        const pe = Date.now() - be, Ie = Un(1e3 / pe);
        de.pushFixed(Ie);
        const _e = {
          face: ce.detectedFace,
          detectionTime: pe,
          fps: Ie,
          resolution: De,
          instructionCode: ce.instructionCode,
          invalidValidators: ce.invalidValidators,
          samVersion: S.samVersion
        };
        k.value = _e, ce.isInCandidateSelection && ($ === 0 && ($ = performance.now()), q++), R(De), await rr(Math.max(r0.max - pe, r0.min));
      }
    })(), () => {
      oe = !0;
    };
  }, [e, B, S, g, r, a, C, h.faceConfidence, R, t, l, k, o]);
  const L = i !== En.HIDDEN && n !== tr.PREMIUM && v, X = i === En.VISIBLE, K = s, ee = v && s && e === et.RUNNING;
  return O(Me, {
    children: [L && O(Rl, {
      fullOverlay: X,
      resolution: v
    }), O(tI, {
      ref: y,
      $isImageMirror: M,
      $isVisible: K,
      autoPlay: !0,
      muted: !0,
      playsInline: !0
    }), ee && O(Zl, {
      appTier: n,
      cameraResolution: v,
      detectionDetails: k,
      isImageMirror: M
    })]
  });
}, Su = ({
  onPhotoTakenInternal: t,
  ...o
}) => O(YI, {
  cameraOptions: o,
  children: O(Bu, {
    onPhotoTakenInternal: t
  })
}), Gu = ({
  children: t
}) => {
  const o = ot(null);
  return ml(o, ut.VIDEO_ELEMENT_SIZE), O(eI, {
    ref: o,
    children: t
  });
}, Ir = {};
Ir.minFaceSizeRatio = 0.135, Ir.maxFaceSizeRatio = 0.21;
const bg = {};
bg.faceConfidence = 1;
const bt = {};
bt.minFaceSizeRatio = 0.3, bt.maxFaceSizeRatio = 1, bt.brightnessHighThreshold = 1, bt.brightnessLowThreshold = -(-5937 + -3022 * -3 + 136 * -23), bt.faceConfidence = 0.15, bt.sharpnessThreshold = -1, bt.outOfBoundsThreshold = -(197 * -21 + 1693 + 2445);
const Zu = { [We.DISTANT]: Ir, [We.MIDDLE]: bg, [We.CLOSEUP]: bt }, ku = Zu, B0 = 0 + 0.255;
async function Ku(t, o) {
  const { MagnifEyeLivenessContent: e } = Yt.v3, n = await Promise.all(t.map(async (C) => Ag(C))), i = await hg(o), r = {};
  r.images = n, r.metadata = i;
  const a = r, s = e.verify(a);
  if (s)
    throw Error(s);
  const g = e.create(a), I = {};
  return I.magnifeyeLivenessContent = g, mg(I);
}
async function Hu(t, o) {
  const e = t.map((i) => i.image), n = await Ku(e, o);
  return pg(n);
}
function Ou(t, o) {
  const e = g0(t.faceSize, B0);
  return g0(o.faceSize, B0) < e;
}
const Ru = (t, o) => {
  const e = ot(new Js()), n = dn(void (7515 * -1 + 6219 + 1296)), i = (a) => {
    if (!a.detail || t !== Vt.RUNNING || o !== We.CLOSEUP)
      return;
    const s = e.current;
    if (!n.value) {
      s.cloneMutable(a.detail.image);
      const g = { ...a.detail };
      g.image = s.canvasElement, n.value = g;
      return;
    }
    if (Ou(n.value.data.detection, a.detail.data.detection)) {
      s.cloneMutable(a.detail.image);
      const g = { ...a.detail };
      g.image = s.canvasElement, n.value = g;
    }
  };
  Ss(ut.FACE_DETECTION, i);
  const r = {};
  return r.middleImageBestCandidate = n, r;
}, Wu = pn.div`
  ${(t) => t.$isSecondStep && ps`
      transition: all 1.5s ease-in-out;
      transform: translate(16%, 5%) scale(2);
      transition-delay: 1.5s;
    `}
`, Vu = ({
  licensePath: t,
  onComplete: o,
  onError: e,
  sessionToken: n,
  wasmDirectoryPath: i
}) => {
  const {
    analytics: r,
    appState: a,
    handleAppStateChange: s,
    handleError: g,
    magnifEyePhase: I,
    setMagnifEyePhase: C
  } = rI(), l = dn([]), h = dn(null), {
    middleImageBestCandidate: A
  } = Ru(a, I), y = dI(Yn.ANIMATION_END);
  function k(L) {
    l.value = [...l.value, L];
  }
  function B(L) {
    C(L), or(Yn.STATUS_CHANGED, {
      phase: L
    });
  }
  function v(L) {
    k(L), B(We.MIDDLE);
  }
  y.value && B(We.CLOSEUP);
  async function R(L) {
    if (A.value) {
      const K = {
        image: await Ps(A.value.image),
        data: A.value.data
      };
      k(K);
    }
    k(L);
    try {
      const X = {
        sessionToken: n,
        web: h.value
      }, K = await Hu(l.value, X), [ee] = l.value;
      o(ee, K), r == null || r.trackLivenessProcess(l.value);
    } catch (X) {
      X instanceof Error && g(ne.fromError(X));
      return;
    }
    s(Vt.DONE);
  }
  function S(L) {
    h.value = fI(h.value, L.cameraProperties);
  }
  const M = {
    [We.DISTANT]: v,
    /**
     * we don't care about onPhotoTaken in MIDDLE phase, because faceConfidence = 1
     */
    [We.MIDDLE]: () => {
    },
    [We.CLOSEUP]: R
  };
  return O(Gu, {
    children: O(Wu, {
      $isSecondStep: I !== We.DISTANT,
      children: O(Su, {
        licensePath: t,
        onError: e,
        onPhotoTaken: M[I],
        onPhotoTakenInternal: S,
        thresholds: ku[I],
        wasmDirectoryPath: i
      })
    })
  });
};
function Eu({ licenseResult: t }) {
  return t != null && t.isValid ? tr.PREMIUM : tr.FREEMIUM;
}
function Pu({ analytics: t, licenseResult: o }) {
  return o !== void (7 * 834 + 5684 + -11522 * 1) && !o.isAnalyticsDisabled ? t : void (-25 * -213 + 7180 * 1 + -12505);
}
function Nu({ analytics: t, appKey: o, appTier: e, licenseResult: n, licenseValidator: i }) {
  const r = {};
  r.analytics = t, r.licenseResult = n;
  const a = Pu(r);
  return Ce(() => {
    a && a.init(o);
  }, [a, o]), Ce(() => {
    n && (console.info("Analytics is " + (n.isAnalyticsDisabled ? "disabled" : "enabled")), a && a.sendLicenseResultData(e, i.getCustomerName()));
  }, [a, i, n, e]), Ce(() => {
    if (a)
      return window.addEventListener("beforeunload", a.endSession), () => {
        a.endSession(), window.removeEventListener("beforeunload", a.endSession);
      };
  }, [a]), a;
}
function Lu({ licensePath: t, licenseValidator: o, wasmDirectoryPath: e }) {
  const [n, i] = He(), r = n !== void 0;
  Ce(() => {
    async function s() {
      await o.init(e, t), i(o.getLicenseResult());
    }
    s();
  }, [o, e, t, i]);
  const a = {};
  return a.licenseResult = n, a.isLicenseValidated = r, a;
}
function Tu({ analytics: t, analyticsAppKey: o, initAppState: e, licensePath: n, licenseValidator: i, wasmDirectoryPath: r }) {
  const [a, s] = He(e), [g, I] = He(), [C, l] = He(!1), h = {};
  h.licenseValidator = i, h.wasmDirectoryPath = r, h.licensePath = n;
  const { isLicenseValidated: A, licenseResult: y } = Lu(h), k = {};
  k.licenseResult = y;
  const B = Eu(k), v = {};
  v.analytics = t, v.appKey = o, v.appTier = B, v.licenseResult = y, v.licenseValidator = i;
  const R = Nu(v), S = {};
  return S.appTier = B, S.appState = a, S.setAppState = s, S.error = g, S.setError = I, S.isCameraReady = C, S.setIsCameraReady = l, S.licenseResult = y, S.isLicenseValidated = A, S.analytics = R, S;
}
let U;
const It = new Array(-6 * 745 + -22 * -74 + 27 * 110).fill(void 0);
It.push(void 0, null, !0, !1);
function lr(t) {
  return It[t];
}
let dt = -3 * -1237 + -112 * -23 + -1 * 6287, Kn = null;
function Zi() {
  return (Kn === null || Kn.byteLength === 23 * -327 + 366 + 3 * 2385) && (Kn = new Uint8Array(U.memory.buffer)), Kn;
}
const ki = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, Yu = typeof ki.encodeInto == "function" ? function(t, o) {
  return ki.encodeInto(t, o);
} : function(t, o) {
  const e = ki.encode(t);
  o.set(e);
  const n = {};
  return n.read = t.length, n.written = e.length, n;
};
function Ti(t, o, e) {
  if (e === void 0) {
    const s = ki.encode(t), g = o(s.length, -853 * -10 + -4166 + -4363) >>> 0;
    return Zi().subarray(g, g + s.length).set(s), dt = s.length, g;
  }
  let n = t.length, i = o(n, 8 * -33 + 1239 + 2 * -487) >>> -1 * 4343 + -679 * -4 + 1627 * 1;
  const r = Zi();
  let a = 7006 + 1 * -2143 + -4863;
  for (; a < n; a++) {
    const s = t.charCodeAt(a);
    if (s > 163 * 3 + -7566 + -2 * -3602)
      break;
    r[i + a] = s;
  }
  if (a !== n) {
    a !== 347 * 21 + -9 * -474 + -11553 && (t = t.slice(a)), i = e(i, n, n = a + t.length * (7551 + -12 * 629), -120 + 121 * 1) >>> -7880 + 7 * -997 + 14859;
    const s = Zi().subarray(i + a, i + n), g = Yu(t, s);
    a += g.written;
  }
  return dt = a, i;
}
function yg(t) {
  return t == null;
}
let Hn = null;
function wt() {
  return (Hn === null || Hn.byteLength === 8008 + -5 * 46 + -7778) && (Hn = new Int32Array(U.memory.buffer)), Hn;
}
let Ln = It.length;
function Du(t) {
  t < 1 * 3793 + 1 * 8061 + 11722 * -1 || (It[t] = Ln, Ln = t);
}
function wg(t) {
  const o = lr(t);
  return Du(t), o;
}
const ur = {};
ur.ignoreBOM = !0, ur.fatal = !0;
const vg = typeof TextDecoder < "u" ? new TextDecoder("utf-8", ur) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && vg.decode();
function Cr(t, o) {
  return t = t >>> 16 * -481 + -3963 * 1 + 11659 * 1, vg.decode(Zi().subarray(t, t + o));
}
function dr(t) {
  Ln === It.length && It.push(It.length + (1456 + -3302 * -1 + 1 * -4757));
  const o = Ln;
  return Ln = It[o], It[o] = t, o;
}
let On = null;
function Bg() {
  return (On === null || On.byteLength === -216 * -45 + -982 * 5 + -4810) && (On = new Uint32Array(U.memory.buffer)), On;
}
function S0(t, o) {
  const e = o(t.length * 4, 4) >>> 0, n = Bg();
  for (let i = -1 * 4673 + 5010 + -337 * 1; i < t.length; i++)
    n[e / (325 * 27 + -7418 + -3 * 451) + i] = dr(t[i]);
  return dt = t.length, e;
}
function G0(t, o) {
  t = t >>> -30 * 106 + -6501 + -3227 * -3;
  const e = Bg(), n = e.subarray(t / (107 + 4699 * 1 + -4802), t / (-2 * -1597 + 1 * -6283 + 3093 * 1) + o), i = [];
  for (let r = -1 * -2029 + -9672 + 7643; r < n.length; r++)
    i.push(wg(n[r]));
  return i;
}
function Fu(t, o) {
  const e = Ti(t, U.__wbindgen_malloc, U.__wbindgen_realloc), n = dt, i = Ti(o, U.__wbindgen_malloc, U.__wbindgen_realloc), r = dt, a = U.validate_license(e, n, i, r);
  return Yr.__wrap(a);
}
class Yr {
  static __wrap(o) {
    o = o >>> 0;
    const e = Object.create(Yr.prototype);
    return e.__wbg_ptr = o, e;
  }
  __destroy_into_raw() {
    const o = this.__wbg_ptr;
    return this.__wbg_ptr = -37 * 217 + 2302 + 5727 * 1, o;
  }
  free() {
    const o = this.__destroy_into_raw();
    U.__wbg_licensevalidationresult_free(o);
  }
  constructor(o, e, n, i) {
    var r = yg(e) ? 0 : Ti(e, U.__wbindgen_malloc, U.__wbindgen_realloc), a = dt;
    const s = S0(n, U.__wbindgen_malloc), g = dt, I = S0(i, U.__wbindgen_malloc), C = dt, l = U.licensevalidationresult_new(o, r, a, s, g, I, C);
    return this.__wbg_ptr = l >>> 1 * 2785 + 1 * 1748 + 3 * -1511, this;
  }
  get is_valid() {
    return U.licensevalidationresult_is_valid(this.__wbg_ptr) !== 1732 + -1 * -6700 + -8432;
  }
  get features_json() {
    try {
      const n = U.__wbindgen_add_to_stack_pointer(-16);
      U.licensevalidationresult_features_json(n, this.__wbg_ptr);
      var o = wt()[n / (-5105 + -1 * 6634 + 11743) + 0], e = wt()[n / (-20 * -194 + -3233 + -1 * 643) + (-539 + 694 * -2 + 1928)];
      let i;
      return o !== -2 * -4996 + 4811 + -14803 && (i = Cr(o, e).slice(), U.__wbindgen_free(o, e * (-2 * -72 + 2653 + 1398 * -2), 2442 + -154 * -49 + 3329 * -3)), i;
    } finally {
      U.__wbindgen_add_to_stack_pointer(1 * -6522 + 3987 + 1 * 2551);
    }
  }
  get errors() {
    try {
      const i = U.__wbindgen_add_to_stack_pointer(-16);
      U.licensevalidationresult_errors(i, this.__wbg_ptr);
      var o = wt()[i / (1825 + 1 * -1789 + -2 * 16) + (-3511 + 4 * 415 + -1851 * -1)], e = wt()[i / 4 + (-1 * -8719 + -109 * 7 + 185 * -43)], n = G0(o, e).slice();
      return U.__wbindgen_free(o, e * (10261 + 263 * -39), -7675 + 7679 * 1), n;
    } finally {
      U.__wbindgen_add_to_stack_pointer(-7503 + -3893 * -1 + 3626);
    }
  }
  get warnings() {
    try {
      const i = U.__wbindgen_add_to_stack_pointer(-16);
      U.licensevalidationresult_warnings(i, this.__wbg_ptr);
      var o = wt()[i / (-192 * 28 + 7361 + -1981) + (-2987 + -1 * -984 + 2003)], e = wt()[i / (-3726 + 1865 * 2) + (-5 * 1725 + 2256 + 3185 * 2)], n = G0(o, e).slice();
      return U.__wbindgen_free(o, e * 4, -4476 * 1 + -3121 + 1 * 7601), n;
    } finally {
      U.__wbindgen_add_to_stack_pointer(707 * -1 + 2715 + 3 * -664);
    }
  }
}
async function Xu(t, o) {
  if (typeof Response == "function" && t instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function")
      try {
        return await WebAssembly.instantiateStreaming(t, o);
      } catch (n) {
        if (t.headers.get("Content-Type") != "application/wasm")
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", n);
        else
          throw n;
      }
    const e = await t.arrayBuffer();
    return await WebAssembly.instantiate(e, o);
  } else {
    const e = await WebAssembly.instantiate(t, o);
    if (e instanceof WebAssembly.Instance) {
      const n = {};
      return n.instance = e, n.module = t, n;
    } else
      return e;
  }
}
function ju() {
  const t = {};
  return t.wbg = {}, t.wbg.__wbindgen_string_get = function(o, e) {
    const n = lr(e), i = typeof n == "string" ? n : void 0;
    var r = yg(i) ? 8331 + 5 * 577 + 1402 * -8 : Ti(i, U.__wbindgen_malloc, U.__wbindgen_realloc), a = dt;
    wt()[o / 4 + (-5066 + -1 * -8185 + -3118)] = a, wt()[o / 4 + (-1 * -2054 + -436 + -1618)] = r;
  }, t.wbg.__wbindgen_object_drop_ref = function(o) {
    wg(o);
  }, t.wbg.__wbindgen_string_new = function(o, e) {
    const n = Cr(o, e);
    return dr(n);
  }, t.wbg.__wbg_new0_c0e40662db0749ee = function() {
    return dr(/* @__PURE__ */ new Date());
  }, t.wbg.__wbg_getTime_af7ca51c0bcefa08 = function(o) {
    return lr(o).getTime();
  }, t.wbg.__wbindgen_throw = function(o, e) {
    throw new Error(Cr(o, e));
  }, t;
}
function Mu(t, o) {
  return U = t.exports, Sg.__wbindgen_wasm_module = o, Hn = null, On = null, Kn = null, U;
}
async function Sg(t) {
  if (U !== void 0)
    return U;
  typeof t > "u" && (t = new URL("dot_embedded_bg.wasm", import.meta.url));
  const o = ju();
  (typeof t == "string" || typeof Request == "function" && t instanceof Request || typeof URL == "function" && t instanceof URL) && (t = fetch(t));
  const { instance: e, module: n } = await Xu(await t, o);
  return Mu(e, n);
}
class Uu {
  constructor() {
    D(this, "wasmInitialized", !1);
  }
  async init(o = "/wasm") {
    try {
      const e = o + "/" + VI;
      await Sg(e), this.wasmInitialized = !0;
    } catch {
      this.wasmInitialized = !1, console.warn("dot_embedded_bg.wasm initialization failed! Please check documentation for more information.");
    }
  }
  isWasmInitialized() {
    return this.wasmInitialized;
  }
}
class Ho extends Error {
  constructor() {
    super(...arguments);
    D(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
var an;
class Z0 {
  constructor(o) {
    fa(this, an, void 0);
    this.licenseResult = o;
    try {
      Aa(this, an, o.features_json && JSON.parse(o.features_json));
    } catch (e) {
      console.info(e);
    }
  }
  get isValid() {
    return this.licenseResult.is_valid;
  }
  get errors() {
    return this.licenseResult.errors;
  }
  get warnings() {
    return this.licenseResult.warnings;
  }
  get dotWeb() {
    return ho(this, an);
  }
  get isAnalyticsDisabled() {
    var o, e;
    return !!((e = (o = ho(this, an)) == null ? void 0 : o.features) != null && e["realTimeTransactionReportingDisabled"]);
  }
}
an = new WeakMap();
class Ju {
  constructor(o) {
    D(this, "license");
    D(this, "licenseResult");
    this.dotEmbedded = o;
  }
  async init(o = "/wasm", e = "/license.lic") {
    await Promise.allSettled([this.dotEmbedded.init(o), this.loadLicense(e)]), this.validateLicense();
  }
  async fetchLicense(o) {
    try {
      const e = await fetch(o);
      if (!e.ok)
        throw new Error("DOT License not found.");
      this.license = await e.text();
    } catch (e) {
      this.license = void (-4735 * -1 + 2056 + -6791 * 1), console.error(e);
    }
  }
  async loadLicense(o) {
    if (this.licenseResult = void (-6220 * 1 + 3802 + 2418), !o) {
      console.info("No DOT license provided."), this.license = void (1 * 4694 + 281 * -3 + -3851 * 1);
      return;
    }
    await this.fetchLicense(o);
  }
  printErrors(o) {
    o.forEach((e) => console.warn(e));
  }
  printWarnings(o) {
    o.forEach((e) => console.info(e));
  }
  getDomain() {
    return window.location.hostname;
  }
  validateLicense() {
    try {
      if (!this.license)
        throw new Ho("No DOT license found.");
      if (!this.dotEmbedded.isWasmInitialized())
        throw new Ho("Wasm not initialized.");
      this.licenseResult = new Z0(Fu(this.license, this.getDomain())), this.printErrors(this.licenseResult.errors), this.printWarnings(this.licenseResult.warnings);
    } catch (o) {
      o instanceof Ho ? o.log() : o instanceof Error && console.error(o);
      const e = {};
      e.is_valid = !1, e.errors = [], e.warnings = [], e.features_json = void (535 * -15 + 582 + 3 * 2481), e.free = function() {
      }, this.licenseResult = new Z0(e);
    }
  }
  getLicenseResult() {
    return this.licenseResult;
  }
  getCustomerName() {
    var o;
    if (this.license)
      try {
        const e = JSON.parse(this.license);
        return (o = e == null ? void 0 : e.contract) == null ? void 0 : o.customer;
      } catch (e) {
        e instanceof Error && ne.logError(e);
        return;
      }
  }
}
const Fi = class Fi extends Ju {
  static getInstance() {
    if (!this._instance) {
      const o = new Uu();
      this._instance = new Fi(o);
    }
    return this._instance;
  }
};
D(Fi, "_instance");
let fr = Fi;
var Gg = ((t) => (t.AUTO_CAPTURE = "auto-capture", t))(Gg || {});
class Qu {
  constructor() {
    D(this, "appKey", "");
    D(this, "deviceId", "");
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
    const s = Ii(a);
    await fetch("" + r + s + "&" + o, i);
  }
  async init(o, e) {
    if (!e)
      return;
    this.appKey = e, this.deviceId = o;
    const n = { _app_version: Ms() }, i = { organization: Us(window.location.href) }, r = Ii({ begin_session: "1", metrics: JSON.stringify(n), user_details: JSON.stringify(i) });
    await this.countlyFetch(r);
  }
  async endSession() {
    const o = {};
    o.end_session = "1";
    const e = Ii(o);
    await this.countlyFetch(e);
  }
  async sendAutoCaptureEvent(o, e) {
    const n = {};
    n.key = Gg.AUTO_CAPTURE, n.count = 1, n.dur = e, n.segmentation = o;
    const i = [n], r = Ii({ events: JSON.stringify(i) });
    await this.countlyFetch(r);
  }
}
const ui = new Qu();
function zu() {
  const [t] = window.crypto.getRandomValues(new Uint32Array(1));
  return t.toString(-1 * 7046 + 4791 + 3 * 757);
}
function _u() {
  const t = sessionStorage.getItem("dot-user-id");
  if (t)
    return t;
  const o = zu();
  return sessionStorage.setItem("dot-user-id", o), o;
}
function $u(t, o) {
  return o ? o === "user" ? "Front Camera" : "Back Camera" : t;
}
const k0 = (t) => Math.round(t / 500) * 500 / (2107 + -2 * 1481 + 1855), qt = (t) => t ? t <= 6970 + 799 * 9 + -944 * 15 ? Math.round(t * (-7567 * -1 + -3490 + -1 * 4057)) / (1438 + -709 * 2) : Math.round(t / (-1 * 515 + 74 * 21 + 1 * -989)) * (1009 * 4 + 3204 + -7190) : 79 * 71 + -2 * 280 + -5049, qu = (t) => Math.round(t * (-58 * -161 + -2474 + -6862)) / 2;
class eC {
  constructor() {
    D(this, "countly", ui);
  }
  createSegmentation(o) {
    return { appVersion: Ms(), ...o };
  }
  init(o) {
    if (ll())
      return;
    const e = _u();
    ui.init(e, o);
  }
  endSession() {
    ui.endSession();
  }
  sendLicenseResultData(o, e) {
    const n = {};
    n.licenseTier = o, n.customer = e;
    const i = this.createSegmentation(n);
    ui.sendAutoCaptureEvent(i);
  }
}
class tC extends eC {
  constructor() {
    super(...arguments);
    D(this, "captureProcessAnalytics", []);
  }
  trackCaptureProcess(e) {
    this.captureProcessAnalytics.push(e);
  }
}
class nC extends tC {
  trackLivenessProcess(o) {
    var l, h, A, y, k, B, v, R, S, M;
    if (!o.length || !this.captureProcessAnalytics.length)
      return;
    const [e, n, i] = o, [r, a] = this.captureProcessAnalytics, s = qu(r.averageFps + (a == null ? void 0 : a.averageFps)) / (-669 + -165 * 50 + 8921), g = k0(r.captureProcessDurationInMs), I = k0(a == null ? void 0 : a["captureProcessDurationInMs"]), C = this.createSegmentation({ faceSizeDistant: qt((l = e.data.detection) == null ? void 0 : l.faceSize), faceSizeCloseup: qt((h = i == null ? void 0 : i.data.detection) == null ? void 0 : h.faceSize), faceSizeMiddle: qt((A = n.data.detection) == null ? void 0 : A.faceSize), confidenceDistant: qt((y = e.data.detection) == null ? void 0 : y.confidence), confidenceCloseup: qt((k = i == null ? void 0 : i.data.detection) == null ? void 0 : k.confidence), confidenceMiddle: qt((B = n.data.detection) == null ? void 0 : B.confidence), imageResolution: ((R = (v = e.data) == null ? void 0 : v["imageResolution"]) == null ? void 0 : R.width) + "x" + ((M = (S = e.data) == null ? void 0 : S["imageResolution"]) == null ? void 0 : M.height), averageFps: s, captureTimeCloseup: I > 1475 * -6 + 291 * -31 + 17916 ? ">45" : "" + I, captureTimeDistant: g > -5 * 813 + 10 * 830 + 5 * -841 ? ">30" : "" + g, camera: $u(r == null ? void 0 : r.deviceName, r == null ? void 0 : r.facingMode), instructionSet: r.instructionSet });
    this.countly.sendAutoCaptureEvent(C, g + I);
  }
}
const iC = new nC();
function oC(t, o) {
  return o !== We.DISTANT ? En.HIDDEN : t !== Vt.RUNNING ? En.VISIBLE : En.VISIBLE_WITH_MASK;
}
function rC({
  licensePath: t,
  onError: o,
  wasmDirectoryPath: e
}) {
  const {
    analytics: n,
    appState: i,
    appTier: r,
    error: a,
    isCameraReady: s,
    isLicenseValidated: g,
    setAppState: I,
    setError: C,
    setIsCameraReady: l
  } = Tu({
    initAppState: Vt.LOADING,
    analytics: iC,
    analyticsAppKey: "d5ca54dabfb1a2c72d7090c9c8980252a879da44",
    wasmDirectoryPath: e,
    licenseValidator: fr.getInstance(),
    licensePath: t
  }), [h, A] = He(We.DISTANT), y = oC(i, h), k = Hi((v) => {
    or(Yn.STATUS_CHANGED, {
      state: Vt.ERROR,
      error: v
    }), l(!1), o(v), C(v), I(Vt.ERROR);
  }, [o, l, C, I]), B = Hi((v) => {
    v !== Vt.WAITING && (I(v), or(Yn.STATUS_CHANGED, {
      state: v
    }));
  }, [I]);
  return {
    appTier: r,
    appState: i,
    magnifEyePhase: h,
    setMagnifEyePhase: A,
    freemiumOverlayState: y,
    isCameraReady: s,
    isLicenseValidated: g,
    setIsCameraReady: l,
    handleAppStateChange: B,
    handleError: k,
    error: a,
    analytics: n
  };
}
const aC = ({
  props: t
}) => {
  if (!t)
    return null;
  const o = rC({
    onError: t.onError,
    wasmDirectoryPath: t.wasmDirectoryPath,
    licensePath: t.licensePath
  });
  return O(Jx, {
    target: t.styleTarget,
    children: O(oI, {
      value: o,
      children: O(Bs, {
        children: O(Vu, {
          ...t
        })
      })
    })
  });
};
tc(aC, "x-dot-magnifeye-liveness", ["props"]);
