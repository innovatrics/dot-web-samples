var Ic = Object.defineProperty;
var Ya = (i) => {
  throw TypeError(i);
};
var dc = (i, o, t) => o in i ? Ic(i, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[o] = t;
var j = (i, o, t) => dc(i, typeof o != "symbol" ? o + "" : o, t), Fa = (i, o, t) => o.has(i) || Ya("Cannot " + t);
var F = (i, o, t) => (Fa(i, o, "read from private field"), t ? t.call(i) : o.get(i)), ce = (i, o, t) => o.has(i) ? Ya("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(i) : o.set(i, t), se = (i, o, t, e) => (Fa(i, o, "write to private field"), e ? e.call(i, t) : o.set(i, t), t);
var ui, L, t0, n0, Rt, Xa, i0, ir, Yr, or, rr, o0, zn = {}, r0 = [], Cc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, fo = Array.isArray;
function mt(i, o) {
  for (var t in o) i[t] = o[t];
  return i;
}
function a0(i) {
  var o = i.parentNode;
  o && o.removeChild(i);
}
function ke(i, o, t) {
  var e, n, r, a = {};
  for (r in o) r == "key" ? e = o[r] : r == "ref" ? n = o[r] : a[r] = o[r];
  if (arguments.length > 4977 + -25 * 199 && (a.children = arguments.length > 8413 + 397 * -5 + -257 * 25 ? ui.call(arguments, -6434 + 9907 * -1 + 16343) : t), typeof i == "function" && i.defaultProps != null)
    for (r in i.defaultProps) void (1 * -3836 + -263 * 14 + 7518) === a[r] && (a[r] = i.defaultProps[r]);
  return Xn(i, a, e, n, null);
}
function Xn(i, o, t, e, n) {
  var r = {};
  r.type = i, r.props = o, r.key = t, r.ref = e, r.__k = null, r.__ = null, r.__b = 0, r.__e = null, r.__d = void (-14502 + 1 * 14502), r.__c = null, r.constructor = void 0, r.__v = n ?? ++t0, r.__i = -(3 * -2843 + 11 * 727 + 533), r.__u = 0;
  var a = r;
  return n == null && L.vnode != null && L.vnode(a), a;
}
function fc() {
  var i = {};
  return i.current = null, i;
}
function ot(i) {
  return i.children;
}
function Qe(i, o) {
  this.props = i, this.context = o;
}
function Mt(i, o) {
  if (o == null) return i.__ ? Mt(i.__, i.__i + (1 * 4746 + -1231 + -1757 * 2)) : null;
  for (var t; o < i.__k.length; o++) if ((t = i.__k[o]) != null && t.__e != null) return t.__e;
  return typeof i.type == "function" ? Mt(i) : null;
}
function s0(i) {
  var o, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, o = 3150 * 1 + 5590 + -8740; o < i.__k.length; o++) if ((t = i.__k[o]) != null && t.__e != null) {
      i.__e = i.__c.base = t.__e;
      break;
    }
    return s0(i);
  }
}
function ar(i) {
  (!i.__d && (i.__d = !0) && Rt.push(i) && !qi.__r++ || Xa !== L.debounceRendering) && ((Xa = L.debounceRendering) || i0)(qi);
}
function qi() {
  var i, o, t, e, n, r, a, s;
  for (Rt.sort(ir); i = Rt.shift(); ) i.__d && (o = Rt.length, e = void (-1238 * 7 + 2211 + 6455), r = (n = (t = i).__v).__e, a = [], s = [], t.__P && ((e = mt({}, n)).__v = n.__v + (4723 * -1 + -632 + 5356), L.vnode && L.vnode(e), Fr(t.__P, e, n, t.__n, t.__P.namespaceURI, 2369 * -2 + 6904 * -1 + 13 * 898 & n.__u ? [r] : null, a, r ?? Mt(n), !!(5533 + 5501 * -1 & n.__u), s), e.__v = n.__v, e.__.__k[e.__i] = e, l0(a, e, s), e.__e != r && s0(e)), Rt.length > o && Rt.sort(ir));
  qi.__r = -149 * 9 + 568 + 1 * 773;
}
function g0(i, o, t, e, n, r, a, s, g, x, C) {
  var d, m, p, w, H, E = e && e.__k || r0, S = o.length;
  for (t.__d = g, hc(t, o, E), g = t.__d, d = -3780 + -3780 * -1; d < S; d++) (p = t.__k[d]) != null && typeof p != "boolean" && typeof p != "function" && (m = p.__i === -1 ? zn : E[p.__i] || zn, p.__i = d, Fr(i, p, m, n, r, a, s, g, x, C), w = p.__e, p.ref && m.ref != p.ref && (m.ref && Xr(m.ref, null, p), C.push(p.ref, p.__c || w, p)), H == null && w != null && (H = w), -2 * -3919 + 1 * 92348 + -34650 & p.__u || m.__k === p.__k ? (g && typeof p.type == "string" && !i.contains(g) && (g = Mt(m)), g = c0(p, g, i)) : typeof p.type == "function" && void (8906 + 73 * -122) !== p.__d ? g = p.__d : w && (g = w.nextSibling), p.__d = void (918 + -1851 * -5 + -10173 * 1), p.__u &= -(194935 + -6699 * 41 + 92111 * 3));
  t.__d = g, t.__e = H;
}
function hc(i, o, t) {
  var e, n, r, a, s, g = o.length, x = t.length, C = x, d = -2067 + 5 * -939 + 6762;
  for (i.__k = [], e = -2 * 545 + -11 * 179 + 133 * 23; e < g; e++) a = e + d, (n = i.__k[e] = (n = o[e]) == null || typeof n == "boolean" || typeof n == "function" ? null : typeof n == "string" || typeof n == "number" || typeof n == "bigint" || n.constructor == String ? Xn(null, n, null, null, null) : fo(n) ? Xn(ot, { children: n }, null, null, null) : void (237 + 7 * -1405 + 9598) === n.constructor && n.__b > -9493 + -3426 * -1 + 6067 ? Xn(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v) : n) != null ? (n.__ = i, n.__b = i.__b + (-11 * -321 + 1 * 8644 + -3 * 4058), s = pc(n, t, a, C), n.__i = s, r = null, -(4 * 2393 + -6914 * 1 + 2657 * -1) !== s && (C--, (r = t[s]) && (r.__u |= 265144 + 16759 * -8)), r == null || r.__v === null ? (-(2632 + -1 * -8121 + 336 * -32) == s && d--, typeof n.type != "function" && (n.__u |= 65536)) : s !== a && (s == a - 1 ? d = s - a : s == a + (399 * 24 + 7 * -317 + -6 * 1226) ? d++ : s > a ? C > g - a ? d += s - a : d-- : s < a && d++, s !== e + d && (n.__u |= 99319 + -1 * 33783))) : (r = t[a]) && r.key == null && r.__e && 5238 * -1 + 4232 * -2 + -6851 * -2 == (-50831 * -1 + 144932 + -64691 & r.__u) && (r.__e == i.__d && (i.__d = Mt(r)), sr(r, r, !(1 * 9977 + 8274 + -18250)), t[a] = null, C--);
  if (C)
    for (e = -871 * 1 + -2 * -3219 + -5567; e < x; e++) (r = t[e]) != null && 50 * 46 + -373 * -13 + -3 * 2383 == (131072 & r.__u) && (r.__e == i.__d && (i.__d = Mt(r)), sr(r, r));
}
function c0(i, o, t) {
  var e, n;
  if (typeof i.type == "function") {
    for (e = i.__k, n = -821 * 8 + -9958 + 16526; e && n < e.length; n++) e[n] && (e[n].__ = i, o = c0(e[n], o, t));
    return o;
  }
  i.__e != o && (t.insertBefore(i.__e, o || null), o = i.__e);
  do
    o = o && o.nextSibling;
  while (o != null && 131 * 43 + 5 * -1790 + 3325 === o.nodeType);
  return o;
}
function At(i, o) {
  return o = o || [], i == null || typeof i == "boolean" || (fo(i) ? i.some(function(t) {
    At(t, o);
  }) : o.push(i)), o;
}
function pc(i, o, t, e) {
  var n = i.key, r = i.type, a = t - (1 * -9573 + 439 + 9135), s = t + (2163 * 3 + -643 * -11 + -13561), g = o[t];
  if (g === null || g && n == g.key && r === g.type && 8322 + -8771 * -1 + -1 * 17093 == (-40189 * 1 + 32278 + 10691 * 13 & g.__u)) return t;
  if (e > (g != null && 1694 + -2570 * 1 + 2 * 438 == (1 * -242261 + -432 * -457 + 175909 & g.__u) ? 5593 + 207 * 27 + -11181 : 6944 + 434 * -16)) for (; a >= -9467 + -2 * -4066 + 1335 * 1 || s < o.length; ) {
    if (a >= 4313 + -1 * 4313) {
      if ((g = o[a]) && -1 * -8068 + -188 * 3 + -8 * 938 == (-52249 * -3 + -1927 * 72 + 1 * 113069 & g.__u) && n == g.key && r === g.type) return a;
      a--;
    }
    if (s < o.length) {
      if ((g = o[s]) && 10005 + 87 * -115 == (4 * 30487 + -1 * -191146 + -2638 * 69 & g.__u) && n == g.key && r === g.type) return s;
      s++;
    }
  }
  return -(-238 * 5 + 2527 * -1 + 3718);
}
function Ma(i, o, t) {
  o[2 * -1626 + 8305 + -5053] === "-" ? i.setProperty(o, t ?? "") : i[o] = t == null ? "" : typeof t != "number" || Cc.test(o) ? t : t + "px";
}
function Hi(i, o, t, e, n) {
  var r;
  e: if (o === "style")
    if (typeof t == "string") i.style.cssText = t;
    else {
      if (typeof e == "string" && (i.style.cssText = e = ""), e)
        for (o in e) t && o in t || Ma(i.style, o, "");
      if (t)
        for (o in t) e && t[o] === e[o] || Ma(i.style, o, t[o]);
    }
  else if (o[1 * 6761 + 6982 + -13743] === "o" && o[-3404 + -1 * -2129 + -319 * -4] === "n") r = o !== (o = o.replace(/(PointerCapture)$|Capture$/i, "$1")), o = o.toLowerCase() in i || o === "onFocusOut" || o === "onFocusIn" ? o.toLowerCase().slice(-143 * -61 + 3233 + -139 * 86) : o.slice(-1912 * 1 + 4321 * 1 + -2407), i.l || (i.l = {}), i.l[o + r] = t, t ? e ? t.u = e.u : (t.u = Yr, i.addEventListener(o, r ? rr : or, r)) : i.removeEventListener(o, r ? rr : or, r);
  else {
    if (n == "http://www.w3.org/2000/svg") o = o.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (o != "width" && o != "height" && o != "href" && o != "list" && o != "form" && o != "tabIndex" && o != "download" && o != "rowSpan" && o != "colSpan" && o != "role" && o != "popover" && o in i) try {
      i[o] = t ?? "";
      break e;
    } catch {
    }
    typeof t == "function" || (t == null || !(5827 + -483 * 10 + 2 * -498) === t && o[-2 * 3109 + -8830 + 3763 * 4] !== "-" ? i.removeAttribute(o) : i.setAttribute(o, o == "popover" && t == 1 ? "" : t));
  }
}
function ja(i) {
  return function(o) {
    if (this.l) {
      var t = this.l[o.type + i];
      if (o.t == null) o.t = Yr++;
      else if (o.t < t.u) return;
      return t(L.event ? L.event(o) : o);
    }
  };
}
function Fr(i, o, t, e, n, r, a, s, g, x) {
  var C, d, m, p, w, H, E, S, W, N, $, M, Y, G, J, ue, U = o.type;
  if (void (1733 * 1 + 9688 + 1269 * -9) !== o.constructor) return null;
  -7 * -1009 + 699 * -2 + -5537 & t.__u && (g = !!(32 & t.__u), r = [s = o.__e = t.__e]), (C = L.__b) && C(o);
  e: if (typeof U == "function") try {
    if (S = o.props, W = "prototype" in U && U.prototype.render, N = (C = U.contextType) && e[C.__c], $ = C ? N ? N.props.value : C.__ : e, t.__c ? E = (d = o.__c = t.__c).__ = d.__E : (W ? o.__c = d = new U(S, $) : (o.__c = d = new Qe(S, $), d.constructor = U, d.render = Ac), N && N.sub(d), d.props = S, d.state || (d.state = {}), d.context = $, d.__n = e, m = d.__d = !0, d.__h = [], d._sb = []), W && d.__s == null && (d.__s = d.state), W && U.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = mt({}, d.__s)), mt(d.__s, U.getDerivedStateFromProps(S, d.__s))), p = d.props, w = d.state, d.__v = o, m) W && U.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), W && d.componentDidMount != null && d.__h.push(d.componentDidMount);
    else {
      if (W && U.getDerivedStateFromProps == null && S !== p && d.componentWillReceiveProps != null && d.componentWillReceiveProps(S, $), !d.__e && (d.shouldComponentUpdate != null && !(397 * 7 + -7451 + 4673) === d.shouldComponentUpdate(S, d.__s, $) || o.__v === t.__v)) {
        for (o.__v !== t.__v && (d.props = S, d.state = d.__s, d.__d = !(1525 * -4 + 5680 + 421)), o.__e = t.__e, o.__k = t.__k, o.__k.forEach(function(Ie) {
          Ie && (Ie.__ = o);
        }), M = 8217 + -47 * 31 + 169 * -40; M < d._sb.length; M++) d.__h.push(d._sb[M]);
        d._sb = [], d.__h.length && a.push(d);
        break e;
      }
      d.componentWillUpdate != null && d.componentWillUpdate(S, d.__s, $), W && d.componentDidUpdate != null && d.__h.push(function() {
        d.componentDidUpdate(p, w, H);
      });
    }
    if (d.context = $, d.props = S, d.__P = i, d.__e = !(-9513 + 6502 * 1 + 3012), Y = L.__r, G = 397 * -4 + 8947 + 3 * -2453, W) {
      for (d.state = d.__s, d.__d = !(6299 * 1 + 8346 + -4 * 3661), Y && Y(o), C = d.render(d.props, d.state, d.context), J = 2 * -2 + -7479 + -1069 * -7; J < d._sb.length; J++) d.__h.push(d._sb[J]);
      d._sb = [];
    } else do
      d.__d = !1, Y && Y(o), C = d.render(d.props, d.state, d.context), d.state = d.__s;
    while (d.__d && ++G < -9427 + -1 * -3193 + 6259);
    d.state = d.__s, d.getChildContext != null && (e = mt(mt({}, e), d.getChildContext())), W && !m && d.getSnapshotBeforeUpdate != null && (H = d.getSnapshotBeforeUpdate(p, w)), g0(i, fo(ue = C != null && C.type === ot && C.key == null ? C.props.children : C) ? ue : [ue], o, t, e, n, r, a, s, g, x), d.base = o.__e, o.__u &= -(677 + -743 * -1 + -1259 * 1), d.__h.length && a.push(d), E && (d.__E = d.__ = null);
  } catch (Ie) {
    o.__v = null, g || r != null ? (o.__e = s, o.__u |= g ? -805 * -8 + 562 * 1 + 311 * -22 : -4330 * -1 + 5061 + -49 * 191, r[r.indexOf(s)] = null) : (o.__e = t.__e, o.__k = t.__k), L.__e(Ie, o, t);
  }
  else r == null && o.__v === t.__v ? (o.__k = t.__k, o.__e = t.__e) : o.__e = mc(t.__e, o, t, e, n, r, a, g, x);
  (C = L.diffed) && C(o);
}
function l0(i, o, t) {
  o.__d = void (-5554 + 1 * 1221 + 4333);
  for (var e = -8376 + 5 * -1795 + 17351; e < t.length; e++) Xr(t[e], t[++e], t[++e]);
  L.__c && L.__c(o, i), i.some(function(n) {
    try {
      i = n.__h, n.__h = [], i.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      L.__e(r, n.__v);
    }
  });
}
function mc(i, o, t, e, n, r, a, s, g) {
  var x, C, d, m, p, w, H, E = t.props, S = o.props, W = o.type;
  if (W === "svg" ? n = "http://www.w3.org/2000/svg" : W === "math" ? n = "http://www.w3.org/1998/Math/MathML" : n || (n = "http://www.w3.org/1999/xhtml"), r != null) {
    for (x = -9930 + 1347 * -5 + 5 * 3333; x < r.length; x++) if ((p = r[x]) && "setAttribute" in p == !!W && (W ? p.localName === W : p.nodeType === 3)) {
      i = p, r[x] = null;
      break;
    }
  }
  if (i == null) {
    if (W === null) return document.createTextNode(S);
    i = document.createElementNS(n, W, S.is && S), r = null, s = !(-3 * 2656 + -4 * -1731 + 1 * 1045);
  }
  if (W === null) E === S || s && i.data === S || (i.data = S);
  else {
    if (r = r && ui.call(i.childNodes), E = t.props || zn, !s && r != null)
      for (E = {}, x = -1107 * -4 + 6307 + 10735 * -1; x < i.attributes.length; x++) E[(p = i.attributes[x]).name] = p.value;
    for (x in E) if (p = E[x], x != "children") {
      if (x == "dangerouslySetInnerHTML") d = p;
      else if (x !== "key" && !(x in S)) {
        if (x == "value" && "defaultValue" in S || x == "checked" && "defaultChecked" in S) continue;
        Hi(i, x, null, p, n);
      }
    }
    for (x in S) p = S[x], x == "children" ? m = p : x == "dangerouslySetInnerHTML" ? C = p : x == "value" ? w = p : x == "checked" ? H = p : x === "key" || s && typeof p != "function" || E[x] === p || Hi(i, x, p, E[x], n);
    if (C) s || d && (C.__html === d.__html || C.__html === i.innerHTML) || (i.innerHTML = C.__html), o.__k = [];
    else if (d && (i.innerHTML = ""), g0(i, fo(m) ? m : [m], o, t, e, W === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n, r, a, r ? r[11 * 329 + 7068 + -10687] : t.__k && Mt(t, 4356 + 2 * 949 + 106 * -59), s, g), r != null)
      for (x = r.length; x--; ) r[x] != null && a0(r[x]);
    s || (x = "value", w !== void 0 && (w !== i[x] || W === "progress" && !w || W === "option" && w !== E[x]) && Hi(i, x, w, E[x], n), x = "checked", void (-7935 + -6659 * 1 + 14594) !== H && H !== i[x] && Hi(i, x, H, E[x], n));
  }
  return i;
}
function Xr(i, o, t) {
  try {
    typeof i == "function" ? i(o) : i.current = o;
  } catch (e) {
    L.__e(e, t);
  }
}
function sr(i, o, t) {
  var e, n;
  if (L.unmount && L.unmount(i), (e = i.ref) && (e.current && e.current !== i.__e || Xr(e, null, o)), (e = i.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (r) {
      L.__e(r, o);
    }
    e.base = e.__P = null;
  }
  if (e = i.__k)
    for (n = 7586 * 1 + 3635 + 1 * -11221; n < e.length; n++) e[n] && sr(e[n], o, t || typeof i.type != "function");
  t || i.__e == null || a0(i.__e), i.__c = i.__ = i.__e = i.__d = void (-7275 + 5422 * -1 + 12697);
}
function Ac(i, o, t) {
  return this.constructor(i, t);
}
function Ht(i, o, t) {
  var e, n, r, a;
  L.__ && L.__(i, o), n = (e = typeof t == "function") ? null : t && t.__k || o.__k, r = [], a = [], Fr(o, i = (!e && t || o).__k = ke(ot, null, [i]), n || zn, zn, o.namespaceURI, !e && t ? [t] : n ? null : o.firstChild ? ui.call(o.childNodes) : null, r, !e && t ? t : n ? n.__e : o.firstChild, e, a), l0(r, i, a);
}
function Mr(i, o) {
  Ht(i, o, Mr);
}
function jr(i, o, t) {
  var e, n, r, a, s = mt({}, i.props);
  for (r in i.type && i.type.defaultProps && (a = i.type.defaultProps), o) r == "key" ? e = o[r] : r == "ref" ? n = o[r] : s[r] = void (786 + 2 * -3848 + -5 * -1382) === o[r] && void (1219 + -51 * -177 + -10246) !== a ? a[r] : o[r];
  return arguments.length > -2081 + -1 * -2083 && (s.children = arguments.length > 1208 + 1 * -1205 ? ui.call(arguments, -3 * 1766 + -6211 + 1 * 11511) : t), Xn(i.type, s, e || i.key, n || i.ref, null);
}
function Ii(i, o) {
  var t = { __c: o = "__cC" + o0++, __: i, Consumer: function(e, n) {
    return e.children(n);
  }, Provider: function(e) {
    var n, r;
    return this.getChildContext || (n = [], (r = {})[o] = this, this.getChildContext = function() {
      return r;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && n.some(function(s) {
        s.__e = !0, ar(s);
      });
    }, this.sub = function(a) {
      n.push(a);
      var s = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        n && n.splice(n.indexOf(a), 1), s && s.call(a);
      };
    }), e.children;
  } };
  return t.Provider.__ = t.Consumer.contextType = t;
}
ui = r0.slice, L = { __e: function(i, o, t, e) {
  for (var n, r, a; o = o.__; ) if ((n = o.__c) && !n.__) try {
    if ((r = n.constructor) && r.getDerivedStateFromError != null && (n.setState(r.getDerivedStateFromError(i)), a = n.__d), n.componentDidCatch != null && (n.componentDidCatch(i, e || {}), a = n.__d), a) return n.__E = n;
  } catch (s) {
    i = s;
  }
  throw i;
} }, t0 = 3173 + -20 * -475 + -12673, n0 = function(i) {
  return i != null && i.constructor == null;
}, Qe.prototype.setState = function(i, o) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = mt({}, this.state), typeof i == "function" && (i = i(mt({}, t), this.props)), i && mt(t, i), i != null && this.__v && (o && this._sb.push(o), ar(this));
}, Qe.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !(-1843 * 1 + -6290 + 3 * 2711), i && this.__h.push(i), ar(this));
}, Qe.prototype.render = ot, Rt = [], i0 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ir = function(i, o) {
  return i.__v.__b - o.__v.__b;
}, qi.__r = 1 * 932 + -327 * -14 + -551 * 10, Yr = 379 * -14 + 2397 + 2909, or = ja(!(-7676 + 1 * 7677)), rr = ja(!(-8332 + -718 * 4 + 11204)), o0 = 2 * 1790 + -6298 + 9 * 302;
function Jr() {
  return (Jr = Object.assign ? Object.assign.bind() : function(i) {
    for (var o = -3559 + 89 * 40; o < arguments.length; o++) {
      var t = arguments[o];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
    }
    return i;
  }).apply(this, arguments);
}
var bc = ["context", "children"];
function yc(i) {
  this.getChildContext = function() {
    return i.context;
  };
  var o = i.children, t = function(e, n) {
    if (e == null) return {};
    var r, a, s = {}, g = Object.keys(e);
    for (a = 8506 + -5008 * -1 + -13514; a < g.length; a++) n.indexOf(r = g[a]) >= -8847 + 1 * 8847 || (s[r] = e[r]);
    return s;
  }(i, bc);
  return jr(o, t);
}
function vc() {
  var i = {};
  i.detail = {}, i.bubbles = !0, i.cancelable = !(1823 * 3 + -103 * 41 + -1246);
  var o = new CustomEvent("_preact", i);
  this.dispatchEvent(o), this._vdom = ke(yc, Jr({}, this._props, { context: o.detail.context }), function t(e, n) {
    if (-40 * -195 + -6247 + -1550 === e.nodeType) return e.data;
    if (e.nodeType !== 1) return null;
    var r = [], a = {}, s = 2162 * 3 + 6665 + -13151, g = e.attributes, x = e.childNodes;
    for (s = g.length; s--; ) g[s].name !== "slot" && (a[g[s].name] = g[s].value, a[x0(g[s].name)] = g[s].value);
    for (s = x.length; s--; ) {
      var C = t(x[s], null), d = x[s].slot;
      d ? a[d] = ke(Ja, { name: d }, C) : r[s] = C;
    }
    var m = n ? ke(Ja, null, r) : r;
    return ke(n || e.nodeName.toLowerCase(), a, m);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Mr : Ht)(this._vdom, this._root);
}
function x0(i) {
  return i.replace(/-(\w)/g, function(o, t) {
    return t ? t.toUpperCase() : "";
  });
}
function wc(i, o, t) {
  if (this._vdom) {
    var e = {};
    e[i] = t = t ?? void (-10 * 319 + -5278 + 8468), e[x0(i)] = t, this._vdom = jr(this._vdom, e), Ht(this._vdom, this._root);
  }
}
function Sc() {
  Ht(this._vdom = null, this._root);
}
function Ja(i, o) {
  var t = this;
  return ke("slot", Jr({}, i, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(n) {
      n.stopPropagation(), n.detail.context = o;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function Bc(i, o, t, e) {
  function n() {
    var r = Reflect.construct(HTMLElement, [], n);
    return r._vdomComponent = i, r._root = r, r;
  }
  return (n.prototype = Object.create(HTMLElement.prototype)).constructor = n, n.prototype.connectedCallback = vc, n.prototype.attributeChangedCallback = wc, n.prototype.disconnectedCallback = Sc, t = t || i.observedAttributes || Object.keys(i.propTypes || {}), n.observedAttributes = t, t.forEach(function(r) {
    Object.defineProperty(n.prototype, r, { get: function() {
      return this._vdom.props[r];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(r, null, a) : (this._props || (this._props = {}), this._props[r] = a, this.connectedCallback());
      var s = typeof a;
      a != null && s !== "string" && s !== "boolean" && s !== "number" || this.setAttribute(r, a);
    } });
  }), customElements.define(o, n);
}
var Gc = 7091 + -1 * -2806 + -9897;
function Z(i, o, t, e, n, r) {
  o || (o = {});
  var a, s, g = o;
  if ("ref" in g)
    for (s in g = {}, o) s == "ref" ? a = o[s] : g[s] = o[s];
  var x = {};
  x.type = i, x.props = g, x.key = t, x.ref = a, x.__k = null, x.__ = null, x.__b = 0, x.__e = null, x.__d = void (-86 * 4 + 117 * 4 + -124), x.__c = null, x.constructor = void (-3 * 252 + -1 * 2077 + -1 * -2833), x.__v = --Gc, x.__i = -(13196 + -91 * 145), x.__u = 0, x.__source = n, x.__self = r;
  var C = x;
  if (typeof i == "function" && (a = i.defaultProps))
    for (s in a) void (-10998 + 39 * 282) === g[s] && (g[s] = a[s]);
  return L.vnode && L.vnode(C), C;
}
var Pe = function() {
  return Pe = Object.assign || function(o) {
    for (var t, e = 1, n = arguments.length; e < n; e++) {
      t = arguments[e];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (o[r] = t[r]);
    }
    return o;
  }, Pe.apply(this, arguments);
};
function hn(i, o, t) {
  if (t || arguments.length === 2) for (var e = 0, n = o.length, r; e < n; e++)
    (r || !(e in o)) && (r || (r = Array.prototype.slice.call(o, 0, e)), r[e] = o[e]);
  return i.concat(r || Array.prototype.slice.call(o));
}
function Zc(i) {
  var o = Object.create(null);
  return function(t) {
    return o[t] === void 0 && (o[t] = i(t)), o[t];
  };
}
var Hc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Wc = Zc(function(i) {
  return Hc.test(i) || i.charCodeAt(-1 * -3754 + 1 * -9496 + 2871 * 2) === 161 * 23 + 1 * 2841 + -1 * 6433 && i.charCodeAt(1 * -6619 + -5555 + -12175 * -1) === -3650 * -2 + -146 * -37 + -12592 && i.charCodeAt(-1 * -262 + 7998 + -1 * 8258) < 6923 + -112 * 61;
}), Wt, oe, Yo, Ua, pn = -1877 * -1 + -3871 + 1994, u0 = [], ge = L, za = ge.__b, Qa = ge.__r, $a = ge.diffed, _a = ge.__c, qa = ge.unmount, es = ge.__;
function Bn(i, o) {
  ge.__h && ge.__h(oe, i, pn || o), pn = -850 * -2 + 9433 * -1 + 7733;
  var t = {};
  t.__ = [], t.__h = [];
  var e = oe.__H || (oe.__H = t);
  return i >= e.__.length && e.__.push({}), e.__[i];
}
function Fe(i) {
  return pn = 514 * -1 + -9 * 479 + 4826, Ur(C0, i);
}
function Ur(i, o, t) {
  var e = Bn(Wt++, 2);
  if (e.t = i, !e.__c && (e.__ = [t ? t(o) : C0(void (-7659 + 1 * 3221 + 4438), o), function(s) {
    var g = e.__N ? e.__N[0] : e.__[0], x = e.t(g, s);
    g !== x && (e.__N = [x, e.__[2479 + 8 * 233 + 2171 * -2]], e.__c.setState({}));
  }], e.__c = oe, !oe.u)) {
    var n = function(s, g, x) {
      if (!e.__c.__H) return !0;
      var C = e.__c.__H.__.filter(function(m) {
        return !!m.__c;
      });
      if (C.every(function(m) {
        return !m.__N;
      })) return !r || r.call(this, s, g, x);
      var d = !(-155 * 46 + -145 + 34 * 214);
      return C.forEach(function(m) {
        if (m.__N) {
          var p = m.__[0];
          m.__ = m.__N, m.__N = void 0, p !== m.__[0] && (d = !0);
        }
      }), !(!d && e.__c.props === s) && (!r || r.call(this, s, g, x));
    };
    oe.u = !0;
    var r = oe.shouldComponentUpdate, a = oe.componentWillUpdate;
    oe.componentWillUpdate = function(s, g, x) {
      if (this.__e) {
        var C = r;
        r = void (4109 + -1 * -8133 + 1 * -12242), n(s, g, x), r = C;
      }
      a && a.call(this, s, g, x);
    }, oe.shouldComponentUpdate = n;
  }
  return e.__N || e.__;
}
function be(i, o) {
  var t = Bn(Wt++, 3);
  !ge.__s && zr(t.__H, o) && (t.__ = i, t.i = o, oe.__H.__h.push(t));
}
function Gn(i, o) {
  var t = Bn(Wt++, 4);
  !ge.__s && zr(t.__H, o) && (t.__ = i, t.i = o, oe.__h.push(t));
}
function yt(i) {
  return pn = -4923 + 9923 * 1 + 1 * -4995, Xe(function() {
    var o = {};
    return o.current = i, o;
  }, []);
}
function I0(i, o, t) {
  pn = 7357 + 45 * -74 + -4021, Gn(function() {
    return typeof i == "function" ? (i(o()), function() {
      return i(null);
    }) : i ? (i.current = o(), function() {
      return i.current = null;
    }) : void (598 + -197 * 49 + 9055);
  }, t == null ? t : t.concat(i));
}
function Xe(i, o) {
  var t = Bn(Wt++, 7);
  return zr(t.__H, o) && (t.__ = i(), t.__H = o, t.__h = i), t.__;
}
function mn(i, o) {
  return pn = 3337 + 1 * -9901 + -62 * -106, Xe(function() {
    return i;
  }, o);
}
function zt(i) {
  var o = oe.context[i.__c], t = Bn(Wt++, -1545 * -5 + 4631 + -12347);
  return t.c = i, o ? (t.__ == null && (t.__ = !(202 * 5 + 3951 + -4961), o.sub(oe)), o.props.value) : i.__;
}
function eo(i, o) {
  ge.useDebugValue && ge.useDebugValue(o ? o(i) : i);
}
function d0() {
  var i = Bn(Wt++, 11);
  if (!i.__) {
    for (var o = oe.__v; o !== null && !o.__m && o.__ !== null; ) o = o.__;
    var t = o.__m || (o.__m = [-103 * 57 + 6 * -1227 + 401 * 33, 1726 + 76 * -53 + 1 * 2302]);
    i.__ = "P" + t[31 * -217 + -1 * 9413 + -6 * -2690] + "-" + t[-7 * -794 + 8486 * 1 + -14043]++;
  }
  return i.__;
}
function kc() {
  for (var i; i = u0.shift(); ) if (i.__P && i.__H) try {
    i.__H.__h.forEach(Pi), i.__H.__h.forEach(gr), i.__H.__h = [];
  } catch (o) {
    i.__H.__h = [], ge.__e(o, i.__v);
  }
}
ge.__b = function(i) {
  oe = null, za && za(i);
}, ge.__ = function(i, o) {
  i && o.__k && o.__k.__m && (i.__m = o.__k.__m), es && es(i, o);
}, ge.__r = function(i) {
  Qa && Qa(i), Wt = -1801 * 4 + -4435 + -103 * -113;
  var o = (oe = i.__c).__H;
  o && (Yo === oe ? (o.__h = [], oe.__h = [], o.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (1 * 1211 + 44 * 67 + -4159);
  })) : (o.__h.forEach(Pi), o.__h.forEach(gr), o.__h = [], Wt = 0)), Yo = oe;
}, ge.diffed = function(i) {
  $a && $a(i);
  var o = i.__c;
  o && o.__H && (o.__H.__h.length && (2208 + 41 * -16 + -1551 !== u0.push(o) && Ua === ge.requestAnimationFrame || ((Ua = ge.requestAnimationFrame) || Kc)(kc)), o.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (-517 * 17 + 3853 * 1 + 4936);
  })), Yo = oe = null;
}, ge.__c = function(i, o) {
  o.some(function(t) {
    try {
      t.__h.forEach(Pi), t.__h = t.__h.filter(function(e) {
        return !e.__ || gr(e);
      });
    } catch (e) {
      o.some(function(n) {
        n.__h && (n.__h = []);
      }), o = [], ge.__e(e, t.__v);
    }
  }), _a && _a(i, o);
}, ge.unmount = function(i) {
  qa && qa(i);
  var o, t = i.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      Pi(e);
    } catch (n) {
      o = n;
    }
  }), t.__H = void (-31 * 271 + -94 * -92 + 1 * -247), o && ge.__e(o, t.__v));
};
var ts = typeof requestAnimationFrame == "function";
function Kc(i) {
  var o, t = function() {
    clearTimeout(e), ts && cancelAnimationFrame(o), setTimeout(i);
  }, e = setTimeout(t, 100);
  ts && (o = requestAnimationFrame(t));
}
function Pi(i) {
  var o = oe, t = i.__c;
  typeof t == "function" && (i.__c = void (3289 + -1 * 3289), t()), oe = o;
}
function gr(i) {
  var o = oe;
  i.__c = i.__(), oe = o;
}
function zr(i, o) {
  return !i || i.length !== o.length || o.some(function(t, e) {
    return t !== i[e];
  });
}
function C0(i, o) {
  return typeof o == "function" ? o(i) : o;
}
function f0(i, o) {
  for (var t in o) i[t] = o[t];
  return i;
}
function cr(i, o) {
  for (var t in i) if (t !== "__source" && !(t in o)) return !(906 + 1 * 5003 + -5909);
  for (var e in o) if (e !== "__source" && i[e] !== o[e]) return !(-1 * -43 + -8186 + -17 * -479);
  return !(-35 * -156 + -526 * -7 + 1 * -9141);
}
function lr(i, o) {
  this.props = i, this.context = o;
}
function Oc(i, o) {
  function t(n) {
    var r = this.props.ref, a = r == n.ref;
    return !a && r && (r.call ? r(null) : r.current = null), o ? !o(this.props, n) || !a : cr(this.props, n);
  }
  function e(n) {
    return this.shouldComponentUpdate = t, ke(i, n);
  }
  return e.displayName = "Memo(" + (i.displayName || i.name) + ")", e.prototype.isReactComponent = !(15 * 103 + 81 * -39 + 1614), e.__f = !(1 * -5701 + 13 * -181 + 8054), e;
}
(lr.prototype = new Qe()).isPureReactComponent = !(5414 + 22 * -236 + 111 * -2), lr.prototype.shouldComponentUpdate = function(i, o) {
  return cr(this.props, i) || cr(this.state, o);
};
var ns = L.__b;
L.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), ns && ns(i);
};
var Vc = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function h0(i) {
  function o(t) {
    var e = f0({}, t);
    return delete e.ref, i(e, t.ref || null);
  }
  return o.$$typeof = Vc, o.render = o, o.prototype.isReactComponent = o.__f = !0, o.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", o;
}
var is = function(i, o) {
  return i == null ? null : At(At(i).map(o));
}, Tc = { map: is, forEach: is, count: function(i) {
  return i ? At(i).length : -1 * -6514 + -4471 + -2043;
}, only: function(i) {
  var o = At(i);
  if (283 + 282 * -1 !== o.length) throw "Children.only";
  return o[-1 * 269 + -8356 * -1 + 1 * -8087];
}, toArray: At }, Ec = L.__e;
L.__e = function(i, o, t, e) {
  if (i.then) {
    for (var n, r = o; r = r.__; ) if ((n = r.__c) && n.__c) return o.__e == null && (o.__e = t.__e, o.__k = t.__k), n.__c(i, o);
  }
  Ec(i, o, t, e);
};
var os = L.unmount;
function p0(i, o, t) {
  return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), i.__c.__H = null), (i = f0({}, i)).__c != null && (i.__c.__P === t && (i.__c.__P = o), i.__c = null), i.__k = i.__k && i.__k.map(function(e) {
    return p0(e, o, t);
  })), i;
}
function m0(i, o, t) {
  return i && t && (i.__v = null, i.__k = i.__k && i.__k.map(function(e) {
    return m0(e, o, t);
  }), i.__c && i.__c.__P === o && (i.__e && t.appendChild(i.__e), i.__c.__e = !(-4679 * 2 + 5651 * -1 + 15009 * 1), i.__c.__P = t)), i;
}
function Ni() {
  this.__u = -9227 * 1 + -105 * -10 + 8177, this.t = null, this.__b = null;
}
function A0(i) {
  var o = i.__.__c;
  return o && o.__a && o.__a(i);
}
function Rc(i) {
  var o, t, e;
  function n(r) {
    if (o || (o = i()).then(function(a) {
      t = a.default || a;
    }, function(a) {
      e = a;
    }), e) throw e;
    if (!t) throw o;
    return ke(t, r);
  }
  return n.displayName = "Lazy", n.__f = !(-4967 + 1437 * 1 + 3530), n;
}
function Rn() {
  this.u = null, this.o = null;
}
L.unmount = function(i) {
  var o = i.__c;
  o && o.__R && o.__R(), o && -1754 + 2 * 893 & i.__u && (i.type = null), os && os(i);
}, (Ni.prototype = new Qe()).__c = function(i, o) {
  var t = o.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var n = A0(e.__v), r = !(5128 * 1 + -7634 + 2507 * 1), a = function() {
    r || (r = !(891 + 10 * -386 + 2969), t.__R = null, n ? n(s) : s());
  };
  t.__R = a;
  var s = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var g = e.state.__a;
        e.__v.__k[0] = m0(g, g.__c.__P, g.__c.__O);
      }
      var x;
      for (e.setState({ __a: e.__b = null }); x = e.t.pop(); ) x.forceUpdate();
    }
  };
  e.__u++ || -7455 + -1 * -7109 + 378 & o.__u || e.setState({ __a: e.__b = e.__v.__k[8062 * 1 + 7035 + -15097] }), i.then(a, a);
}, Ni.prototype.componentWillUnmount = function() {
  this.t = [];
}, Ni.prototype.render = function(i, o) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[7245 + 9 * -805].__c;
      this.__v.__k[-190 * 10 + 1201 + -1 * -699] = p0(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var n = o.__a && ke(ot, null, i.fallback);
  return n && (n.__u &= -(-217 * 3 + 9950 + 113 * -82)), [ke(ot, null, o.__a ? null : i.children), n];
};
var rs = function(i, o, t) {
  if (++t[659 * -7 + 1 * -9370 + 38 * 368] === t[-9823 + -1 * -7027 + 2 * 1398] && i.o.delete(o), i.props.revealOrder && (i.props.revealOrder[-695 * -2 + -601 * 5 + 1615] !== "t" || !i.o.size)) for (t = i.u; t; ) {
    for (; t.length > 3; ) t.pop()();
    if (t[1] < t[-79 * -37 + -1082 + -1841]) break;
    i.u = t = t[-4450 + 318 * 14];
  }
};
function Pc(i) {
  return this.getChildContext = function() {
    return i.context;
  }, i.children;
}
function Nc(i) {
  var o = this, t = i.i;
  o.componentWillUnmount = function() {
    Ht(null, o.l), o.l = null, o.i = null;
  }, o.i && o.i !== t && o.componentWillUnmount(), o.l || (o.i = t, o.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(9998 + -4999 * 2);
  }, appendChild: function(e) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, insertBefore: function(e, n) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> -4355 + 3643 * -1 + 7999, 23 * -291 + 83 * 1 + 6611), o.i.removeChild(e);
  } }), Ht(ke(Pc, { context: o.context }, i.__v), o.l);
}
function Lc(i, o) {
  var t = {};
  t.__v = i, t.i = o;
  var e = ke(Nc, t);
  return e.containerInfo = o, e;
}
(Rn.prototype = new Qe()).__a = function(i) {
  var o = this, t = A0(o.__v), e = o.o.get(i);
  return e[-5144 * -1 + -1 * 2186 + -2958]++, function(n) {
    var r = function() {
      o.props.revealOrder ? (e.push(n), rs(o, i, e)) : n();
    };
    t ? t(r) : r();
  };
}, Rn.prototype.render = function(i) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var o = At(i.children);
  i.revealOrder && i.revealOrder[5 * -1117 + 7 * -1234 + 14223] === "b" && o.reverse();
  for (var t = o.length; t--; ) this.o.set(o[t], this.u = [-1 * 7238 + 1442 + 5797, 7754 + 103 * 1 + -7857, this.u]);
  return i.children;
}, Rn.prototype.componentDidUpdate = Rn.prototype.componentDidMount = function() {
  var i = this;
  this.o.forEach(function(o, t) {
    rs(i, t, o);
  });
};
var b0 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || -1 * 72433 + 104731 + 67 * 415, Dc = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Yc = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Fc = /[A-Z0-9]/g, Xc = typeof document < "u", Mc = function(i) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
function jc(i, o, t) {
  return o.__k == null && (o.textContent = ""), Ht(i, o), typeof t == "function" && t(), i ? i.__c : null;
}
function Jc(i, o, t) {
  return Mr(i, o), typeof t == "function" && t(), i ? i.__c : null;
}
Qe.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty(Qe.prototype, i, { configurable: !0, get: function() {
    return this["UNSAFE_" + i];
  }, set: function(o) {
    var t = {};
    t.configurable = !0, t.writable = !(5164 + 1 * -3259 + -1905), t.value = o, Object.defineProperty(this, i, t);
  } });
});
var as = L.event;
function Uc() {
}
function zc() {
  return this.cancelBubble;
}
function Qc() {
  return this.defaultPrevented;
}
L.event = function(i) {
  return as && (i = as(i)), i.persist = Uc, i.isPropagationStopped = zc, i.isDefaultPrevented = Qc, i.nativeEvent = i;
};
var Li = {};
Li.enumerable = !1, Li.configurable = !(7331 + 41 * 223 + -8237 * 2), Li.get = function() {
  return this.class;
};
var Qr, $c = Li, ss = L.vnode;
L.vnode = function(i) {
  typeof i.type == "string" && function(o) {
    var t = o.props, e = o.type, n = {};
    for (var r in t) {
      var a = t[r];
      if (!(r === "value" && "defaultValue" in t && a == null || Xc && r === "children" && e === "noscript" || r === "class" || r === "className")) {
        var s = r.toLowerCase();
        r === "defaultValue" && "value" in t && t.value == null ? r = "value" : r === "download" && !(-9273 + 232 * -11 + 2365 * 5) === a ? a = "" : s === "translate" && a === "no" ? a = !(37 * 207 + 1 * -6823 + 167 * -5) : s === "ondoubleclick" ? r = "ondblclick" : s !== "onchange" || e !== "input" && e !== "textarea" || Mc(t.type) ? s === "onfocus" ? r = "onfocusin" : s === "onblur" ? r = "onfocusout" : Yc.test(r) ? r = s : -(-146 * -20 + -2046 + -873) === e.indexOf("-") && Dc.test(r) ? r = r.replace(Fc, "-$&").toLowerCase() : a === null && (a = void (6526 + -7027 * -1 + -1 * 13553)) : s = r = "oninput", s === "oninput" && n[r = s] && (r = "oninputCapture"), n[r] = a;
      }
    }
    e == "select" && n.multiple && Array.isArray(n.value) && (n.value = At(t.children).forEach(function(g) {
      g.props.selected = -(-1259 + 4457 * 1 + -3197 * 1) != n.value.indexOf(g.props.value);
    })), e == "select" && n.defaultValue != null && (n.value = At(t.children).forEach(function(g) {
      g.props.selected = n.multiple ? -(-6534 + 9 * -111 + 3767 * 2) != n.defaultValue.indexOf(g.props.value) : n.defaultValue == g.props.value;
    })), t.class && !t.className ? (n.class = t.class, Object.defineProperty(n, "className", $c)) : (t.className && !t.class || t.class && t.className) && (n.class = n.className = t.className), o.props = n;
  }(i), i.$$typeof = b0, ss && ss(i);
};
var gs = L.__r;
L.__r = function(i) {
  gs && gs(i), Qr = i.__c;
};
var cs = L.diffed;
L.diffed = function(i) {
  cs && cs(i);
  var o = i.props, t = i.__e;
  t != null && i.type === "textarea" && "value" in o && o.value !== t.value && (t.value = o.value == null ? "" : o.value), Qr = null;
};
var ye = {};
ye.readContext = function(i) {
  return Qr.__n[i.__c].props.value;
}, ye.useCallback = mn, ye.useContext = zt, ye.useDebugValue = eo, ye.useDeferredValue = S0, ye.useEffect = be, ye.useId = d0, ye.useImperativeHandle = I0, ye.useInsertionEffect = G0, ye.useLayoutEffect = Gn, ye.useMemo = Xe, ye.useReducer = Ur, ye.useRef = yt, ye.useState = Fe, ye.useSyncExternalStore = Z0, ye.useTransition = B0;
var y0 = {};
y0.current = ye;
var v0 = {};
v0.ReactCurrentDispatcher = y0;
var _c = v0;
function qc(i) {
  return ke.bind(null, i);
}
function ho(i) {
  return !!i && i.$$typeof === b0;
}
function el(i) {
  return ho(i) && i.type === ot;
}
function tl(i) {
  return !!i && !!i.displayName && (typeof i.displayName == "string" || i.displayName instanceof String) && i.displayName.startsWith("Memo(");
}
function nl(i) {
  return ho(i) ? jr.apply(null, arguments) : i;
}
function il(i) {
  return !!i.__k && (Ht(null, i), !(1171 * 1 + -1493 * 1 + 7 * 46));
}
function ol(i) {
  return i && (i.base || 6688 + -1 * 2188 + -4499 === i.nodeType && i) || null;
}
var rl = function(i, o) {
  return i(o);
}, al = function(i, o) {
  return i(o);
}, sl = ot;
function w0(i) {
  i();
}
function S0(i) {
  return i;
}
function B0() {
  return [!(4483 * -1 + 1 * 8314 + 1 * -3830), w0];
}
var G0 = Gn, gl = ho;
function Z0(i, o) {
  var t = o(), e = Fe({ h: { __: t, v: o } }), n = e[13 * 227 + 9302 + -1 * 12253].h, r = e[565 * -1 + -1068 + 1634];
  return Gn(function() {
    n.__ = t, n.v = o, Fo(n) && r({ h: n });
  }, [i, t, o]), be(function() {
    return Fo(n) && r({ h: n }), i(function() {
      Fo(n) && r({ h: n });
    });
  }, [i]), t;
}
function Fo(i) {
  var o, t, e = i.v, n = i.__;
  try {
    var r = e();
    return !((o = n) === (t = r) && (-1845 + -1 * -8410 + -6565 !== o || (1 * 8743 + -9761 + 1019 * 1) / o == 1 / t) || o != o && t != t);
  } catch {
    return !(-1 * 5540 + 846 + 1 * 4694);
  }
}
var P = {};
P.useState = Fe, P.useId = d0, P.useReducer = Ur, P.useEffect = be, P.useLayoutEffect = Gn, P.useInsertionEffect = G0, P.useTransition = B0, P.useDeferredValue = S0, P.useSyncExternalStore = Z0, P.startTransition = w0, P.useRef = yt, P.useImperativeHandle = I0, P.useMemo = Xe, P.useCallback = mn, P.useContext = zt, P.useDebugValue = eo, P.version = "17.0.2", P.Children = Tc, P.render = jc, P.hydrate = Jc, P.unmountComponentAtNode = il, P.createPortal = Lc, P.createElement = ke, P.createContext = Ii, P.createFactory = qc, P.cloneElement = nl, P.createRef = fc, P.Fragment = ot, P.isValidElement = ho, P.isElement = gl, P.isFragment = el, P.isMemo = tl, P.findDOMNode = ol, P.Component = Qe, P.PureComponent = lr, P.memo = Oc, P.forwardRef = h0, P.flushSync = al, P.unstable_batchedUpdates = rl, P.StrictMode = sl, P.Suspense = Ni, P.SuspenseList = Rn, P.lazy = Rc, P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _c;
var jt = P, cl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ll(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function xl(i) {
  return i && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function ul(i) {
  return i && Object.prototype.hasOwnProperty.call(i, "default") && Object.keys(i).length === 1 ? i.default : i;
}
function Il(i) {
  if (i.__esModule) return i;
  var o = i.default;
  if (typeof o == "function") {
    var t = function e() {
      return this instanceof e ? Reflect.construct(o, arguments, this.constructor) : o.apply(this, arguments);
    };
    t.prototype = o.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(i).forEach(function(e) {
    var n = Object.getOwnPropertyDescriptor(i, e);
    Object.defineProperty(t, e, n.get ? n : {
      enumerable: !0,
      get: function() {
        return i[e];
      }
    });
  }), t;
}
const dl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: cl,
  getAugmentedNamespace: Il,
  getDefaultExportFromCjs: ll,
  getDefaultExportFromNamespaceIfNotNamed: ul,
  getDefaultExportFromNamespaceIfPresent: xl
}, Symbol.toStringTag, { value: "Module" }));
var Cl = function(o, t, e, n) {
  var r = e ? e.call(n, o, t) : void 0;
  if (r !== void (-9797 + -1 * -7823 + -282 * -7)) return !!r;
  if (o === t) return !0;
  if (typeof o != "object" || !o || typeof t != "object" || !t) return !1;
  var a = Object.keys(o), s = Object.keys(t);
  if (a.length !== s.length) return !1;
  for (var g = Object.prototype.hasOwnProperty.bind(t), x = -19012 + 9506 * 2; x < a.length; x++) {
    var C = a[x];
    if (!g(C)) return !1;
    var d = o[C], m = t[C];
    if (r = e ? e.call(n, d, m, C) : void 0, r === !1 || r === void (3347 + 1 * -6163 + 2816) && d !== m) return !1;
  }
  return !0;
};
const fl = dl.getDefaultExportFromCjs(Cl);
var ie = "-ms-", Mn = "-moz-", ee = "-webkit-", H0 = "comm", po = "rule", $r = "decl", hl = "@import", W0 = "@keyframes", pl = "@layer", k0 = Math.abs, _r = String.fromCharCode, xr = Object.assign;
function ml(i, o) {
  return Ae(i, 0) ^ 3865 + -7327 * 1 + 7 * 501 ? (((o << -1 * -57 + 7607 + -7662 ^ Ae(i, 363 + -85 * 25 + 1762)) << -46 * -1 + -739 * 8 + -5868 * -1 ^ Ae(i, -2009 + 9764 * 1 + 1 * -7754)) << -1865 * -1 + -701 * 2 + -461 ^ Ae(i, 9237 + -1 * 9235)) << 7797 + 5956 * -1 + -1839 ^ Ae(i, 3) : 1783 * -1 + 781 + 1002;
}
function K0(i) {
  return i.trim();
}
function ft(i, o) {
  return (i = o.exec(i)) ? i[0] : i;
}
function D(i, o, t) {
  return i.replace(o, t);
}
function Di(i, o, t) {
  return i.indexOf(o, t);
}
function Ae(i, o) {
  return i.charCodeAt(o) | 2 * -4363 + 3 * -1861 + 1 * 14309;
}
function An(i, o, t) {
  return i.slice(o, t);
}
function ct(i) {
  return i.length;
}
function O0(i) {
  return i.length;
}
function Pn(i, o) {
  return o.push(i), i;
}
function Al(i, o) {
  return i.map(o).join("");
}
function ls(i, o) {
  return i.filter(function(t) {
    return !ft(t, o);
  });
}
var mo = 4486 + -662 * -12 + 1 * -12429, bn = -2322 + -1 * -6055 + -3732, V0 = -6223 + -22 * 320 + -4421 * -3, _e = 1847 + 556 * 8 + -6295 * 1, Ce = 340 * 4 + -474 + -886, Zn = "";
function Ao(i, o, t, e, n, r, a, s) {
  var g = {};
  return g.value = i, g.root = o, g.parent = t, g.type = e, g.props = n, g.children = r, g.line = mo, g.column = bn, g.length = a, g.return = "", g.siblings = s, g;
}
function St(i, o) {
  return xr(Ao("", null, null, "", null, null, 144 + 1 * 734 + -439 * 2, i.siblings), i, { length: -i.length }, o);
}
function an(i) {
  for (; i.root; ) i = St(i.root, { children: [i] });
  Pn(i, i.siblings);
}
function bl() {
  return Ce;
}
function yl() {
  return Ce = _e > 7082 + -261 * 12 + -1975 * 2 ? Ae(Zn, --_e) : 1 * 3873 + 807 * -6 + -19 * -51, bn--, Ce === 3 * 335 + 6 * 1497 + 11 * -907 && (bn = -7091 + -7092 * -1, mo--), Ce;
}
function it() {
  return Ce = _e < V0 ? Ae(Zn, _e++) : -2499 + -4 * 1629 + 9015, bn++, Ce === 333 * -21 + -7019 + 14022 && (bn = 1, mo++), Ce;
}
function Ft() {
  return Ae(Zn, _e);
}
function Yi() {
  return _e;
}
function bo(i, o) {
  return An(Zn, i, o);
}
function ur(i) {
  switch (i) {
    case 1741 * 1 + 756 + -2497:
    case 9107 + -9098 * 1:
    case -27 * 283 + -6 * -646 + -1 * -3775:
    case 5704 + 3351 * -2 + 3 * 337:
    case -1 * 8039 + 1005 * -4 + 12091:
      return 4630 + -2 * 610 + 227 * -15;
    case 13081 + 13048 * -1:
    case 2370 + 1 * -7189 + 286 * 17:
    case -7322 + 16 * 197 + 4214:
    case -8 * 395 + -1673 + 4880:
    case 4714 * -1 + 1 * -7393 + 12169:
    case 1 * 8537 + -2620 + -5853:
    case -1 * 9599 + -43 * 57 + 12176:
    case 4637 * 1 + -98 * 38 + -854:
    case 5044 + 5 * 1711 + -13476:
    case -3930 * -1 + 9919 + -1 * 13724:
      return 1334 + 1 * 4894 + -6224;
    case -319 * -31 + -4869 + -4962:
      return 31 * -97 + -1513 + 4523;
    case 34:
    case -9077 + -84 * -19 + 1880 * 4:
    case 3 * -569 + -6437 + 124 * 66:
    case 91:
      return -5781 + 131 * 73 + -3780;
    case -1427 + 1 * 1468:
    case 3 * 1462 + -5 * -927 + -124 * 72:
      return -2361 * -1 + 3 * -2757 + -1 * -5911;
  }
  return 1601 * -2 + -1519 + 4721;
}
function vl(i) {
  return mo = bn = 9754 + 341 * 19 + 1 * -16232, V0 = ct(Zn = i), _e = 12631 + 1 * -12631, [];
}
function wl(i) {
  return Zn = "", i;
}
function Xo(i) {
  return K0(bo(_e - (365 * 16 + -7069 + 15 * 82), Ir(i === 91 ? i + (4391 + 2 * -266 + -203 * 19) : i === -233 + -641 * 1 + 914 ? i + (-3529 * 1 + 1130 * 8 + -58 * 95) : i)));
}
function Sl(i) {
  for (; (Ce = Ft()) && Ce < -1049 + 254 * 1 + 828; ) it();
  return ur(i) > 2 || ur(Ce) > 3 ? "" : " ";
}
function Bl(i, o) {
  for (; --o && it() && !(Ce < 9487 + 12 * 774 + -18727 || Ce > -4699 * 1 + -14 * -409 + -25 * 37 || Ce > 57 && Ce < 3586 + 1 * -3521 || Ce > 637 * -7 + -14 * 197 + 7287 && Ce < -1175 + -3 * 2939 + 10089); ) ;
  return bo(i, Yi() + (o < 2 * 1721 + -2 * -1799 + -7034 && Ft() == 7 * 67 + 8 * -1041 + -7891 * -1 && it() == -85 + -3 * -39));
}
function Ir(i) {
  for (; it(); ) switch (Ce) {
    case i:
      return _e;
    case 197 * -8 + 1 * -537 + 2147:
    case 39:
      i !== 9322 + 601 * -7 + 1 * -5081 && i !== -326 * 7 + -8998 + 11319 && Ir(Ce);
      break;
    case -1 * -7939 + 8265 + 449 * -36:
      i === -3086 * -3 + 7476 + -16693 * 1 && Ir(i);
      break;
    case 838 * -11 + -581 * -1 + 8729:
      it();
      break;
  }
  return _e;
}
function Gl(i, o) {
  for (; it() && i + Ce !== -6527 + 3 * 399 + -1 * -5377 + (9 * -634 + 1 * 9524 + -3808); ) if (i + Ce === 5591 * 1 + -5927 * -1 + -604 * 19 + (-2859 + 2 * -4447 + 5 * 2359) && Ft() === -6804 + -1 * -1529 + 5322) break;
  return "/*" + bo(o, _e - (-258 * 30 + -17 * -485 + -504)) + "*" + _r(i === 64 * -82 + -807 + -1017 * -6 ? i : it());
}
function Zl(i) {
  for (; !ur(Ft()); ) it();
  return bo(i, _e);
}
function Hl(i) {
  return wl(Fi("", null, null, null, [""], i = vl(i), 0, [-3684 + -6 * -614], i));
}
function Fi(i, o, t, e, n, r, a, s, g) {
  for (var x = 0, C = 7691 * -1 + -8163 + -1 * -15854, d = a, m = -1 * -6207 + -6271 + 16 * 4, p = 0, w = 3936 * -2 + -5016 + 12888, H = -11 * 451 + -45 * -195 + 123 * -31, E = 5137 * 1 + -503 * -6 + -8154, S = 491 + -105 * 67 + 6545, W = 8 * -1231 + 440 * -7 + -16 * -808, N = "", $ = n, M = r, Y = e, G = N; E; ) switch (w = W, W = it()) {
    case -1 * -6548 + -6198 + -5 * 62:
      if (w != -9 * -444 + -7353 + 3465 && Ae(G, d - (2382 + -1 * -2681 + 2 * -2531)) == -1 * 8867 + 3845 + 5080) {
        Di(G += D(Xo(W), "&", "&\f"), "&\f", k0(x ? s[x - (1 * 2351 + -5972 + 3622)] : 9452 + -1 * 9452)) != -(-8336 + 1 * 1204 + 7133) && (S = -(421 * -8 + 4 * -1703 + 10181 * 1));
        break;
      }
    case 3 * -793 + -4 * -1145 + -2167:
    case 10 * -999 + 2657 * 3 + -1029 * -2:
    case 91:
      G += Xo(W);
      break;
    case -1 * -2573 + -6786 + -1 * -4222:
    case -29 * -101 + -2685 + -78 * 3:
    case 6559 * 1 + 5750 + -2 * 6148:
    case 1 * -5267 + 74 * -102 + -443 * -29:
      G += Sl(w);
      break;
    case 2 * 4533 + -1 * 1081 + -2631 * 3:
      G += Bl(Yi() - 1, 917 * 4 + -3 * 2779 + 334 * 14);
      continue;
    case -7378 + 1 * 1289 + -26 * -236:
      switch (Ft()) {
        case -23 * 203 + 13 * -533 + -6 * -1940:
        case -1318 * 1 + 109 * -41 + 5834:
          Pn(Wl(Gl(it(), Yi()), o, t, g), g);
          break;
        default:
          G += "/";
      }
      break;
    case (-6370 + 1 * 6493) * H:
      s[x++] = ct(G) * S;
    case (-8454 + -8579 * -1) * H:
    case -2 * 1397 + -4678 + -7531 * -1:
    case -8308 * 1 + 8001 + -307 * -1:
      switch (W) {
        case -1 * -209 + 3486 + -3695:
        case 477 * -9 + 8549 * -1 + 12967:
          E = 2564 * -2 + 2 * 2638 + 2 * -74;
        case -5241 + 4 * 614 + 2844 + C:
          S == -(-155 * 61 + -9740 + 9598 * 2) && (G = D(G, /\f/g, "")), p > 8206 + 2 * 2153 + -12512 && ct(G) - d && Pn(p > 2955 * 1 + 280 * -20 + -2677 * -1 ? us(G + ";", e, t, d - 1, g) : us(D(G, " ", "") + ";", e, t, d - (76 * -61 + -8209 * 1 + 12847), g), g);
          break;
        case 109 * 68 + 1888 + -9241:
          G += ";";
        default:
          if (Pn(Y = xs(G, o, t, x, C, n, s, N, $ = [], M = [], d, r), r), W === 41 * 95 + -46 * -124 + -4738 * 2)
            if (C === 6029 + -1 * 4398 + -1631 * 1) Fi(G, o, Y, Y, $, r, d, s, M);
            else switch (m === 99 && Ae(G, 1781 + -15 * 77 + 89 * -7) === 416 * -11 + 1 * -8271 + 617 * 21 ? 10 * -925 + -8047 + -3 * -5799 : m) {
              case 5 * -857 + -7 * 692 + 9229:
              case -7150 + 19 * 382:
              case 8423 + -32 * -171 + 122 * -113:
              case 115:
                Fi(i, Y, Y, e && Pn(xs(i, Y, Y, 517 * -15 + -72 * 128 + 16971, -15824 + -7912 * -2, n, s, N, n, $ = [], d, M), M), n, M, d, s, e ? $ : M);
                break;
              default:
                Fi(G, Y, Y, Y, [""], M, 1943 + 67 * -29, s, M);
            }
      }
      x = C = p = -1709 + 41 * 64 + -915, H = S = 2549 + -487 * -3 + -19 * 211, N = G = "", d = a;
      break;
    case -5593 + -1 * -8069 + -93 * 26:
      d = 82 * 116 + -6153 + -3358 + ct(G), p = w;
    default:
      if (H < 5 * -521 + 101 * 47 + -1 * 2141) {
        if (W == 7948 + 1 * 1733 + 54 * -177) --H;
        else if (W == 1 * 3377 + 131 * -66 + 5394 && H++ == 8176 + -3 * -1579 + -12913 && yl() == 2357 + 1116 * -2) continue;
      }
      switch (G += _r(W), W * H) {
        case -468 * 1 + -6 * -1643 + -9352:
          S = C > -6909 + 2303 * 3 ? 18122 + -1 * 18121 : (G += "\f", -(-9895 + -2474 * -4));
          break;
        case 1931 * -2 + 194 * -4 + 2 * 2341:
          s[x++] = (ct(G) - (-3 * -3083 + 8103 + -17351)) * S, S = 9962 + -69 * -16 + -11065;
          break;
        case 1360 + -712 * -4 + 148 * -28:
          Ft() === 4327 + 529 * -9 + 1 * 479 && (G += Xo(it())), m = Ft(), C = d = ct(N = G += Zl(Yi())), W++;
          break;
        case -3 * 1081 + 1430 + 1858:
          w === 11717 + -4 * 2918 && ct(G) == 2 && (H = 7701 + -139 * -15 + 3 * -3262);
      }
  }
  return r;
}
function xs(i, o, t, e, n, r, a, s, g, x, C, d) {
  for (var m = n - 1, p = n === 4096 + 3823 * 1 + -7919 ? r : [""], w = O0(p), H = 5242 + 51 * -172 + 3530, E = 9742 + 7 * -1006 + -2700, S = -8094 + -673 * 4 + -1 * -10786; H < e; ++H) for (var W = 2178 + -4 * -210 + 1006 * -3, N = An(i, m + (5837 + -611 * -3 + -7669 * 1), m = k0(E = a[H])), $ = i; W < w; ++W) ($ = K0(E > -9579 + 1 * -7939 + 17518 ? p[W] + " " + N : D(N, /&\f/g, p[W]))) && (g[S++] = $);
  return Ao(i, o, t, n === -2926 * -1 + 9340 + 12266 * -1 ? po : s, g, x, C, d);
}
function Wl(i, o, t, e) {
  return Ao(i, o, t, H0, _r(bl()), An(i, 911 * -6 + -2 * 81 + 5630, -(-1636 + -6 * 1565 + 3676 * 3)), -7725 + 75 * 103, e);
}
function us(i, o, t, e, n) {
  return Ao(i, o, t, $r, An(i, 2 * 2770 + -34 * 170 + 6 * 40, e), An(i, e + (-3676 * -1 + 7409 + -11084), -(5 * -1433 + -1931 * 1 + 9097)), e, n);
}
function T0(i, o, t) {
  switch (ml(i, o)) {
    case -1 * -6203 + -3967 + 2867:
      return ee + "print-" + i + i;
    case -73 * -46 + 1205 + 1174:
    case 4201:
    case 2896 + -1 * -281:
    case 2 * 530 + 3641 + -1268:
    case 2 * -3177 + -7663 + -1 * -15658:
    case -1791 * -1 + 8755 + -6089:
    case 1607 * -1 + -9770 + 14298:
    case 5572:
    case -10067 + -11 * -1493:
    case -8763 + -1 * -14607:
    case 4860 + -1 * 1669:
    case 6645:
    case -9450 + 235 * 53:
    case -19722 + -26113 * -1:
    case -11036 + -10543 * 1 + 27458:
    case 15541 + 38 * -261:
    case 6135:
    case 1437 + 3 * 3063 + -6027:
    case 4855:
    case 113 * 10 + -1 * -706 + -13 * -183:
    case -4268 * 2 + -1004 + -937 * -17:
    case 2 * -683 + 1 * 6722 + -1 * 247:
    case -2783 + -543 * 14 + 2625 * 6:
    case -2 * -5240 + -7891 + 3032:
    case -171 * -8 + -3257 + 5718:
      return ee + i + i;
    case 89 * 106 + 3 * -3106 + -1 * -4673:
      return Mn + i + i;
    case 2 * 3263 + 9321 + 362 * -29:
    case 6 * -1181 + -6701 * 1 + 18033:
    case 173 * 1 + 2363 + 2274:
    case 549 * 3 + 12363 + -3521 * 2:
    case 7161 + 101 * 81 + 62 * -203:
      return ee + i + Mn + i + ie + i + i;
    case 1179 * 7 + -7842 + 5525:
      switch (Ae(i, o + (-10199 + -1 * -10210))) {
        case -163 * 38 + 4766 + 1542:
          return ee + i + ie + D(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case -6 * -127 + -5119 + 4465:
          return ee + i + ie + D(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case 45:
          return ee + i + ie + D(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    case 6828:
    case 4794 + -2243 * 4 + -2 * -4223:
    case -3673 + 57 * -47 + 9255:
      return ee + i + ie + i + i;
    case 6165:
      return ee + i + ie + "flex-" + i + i;
    case 9628 + 223 * -18 + -61 * 7:
      return ee + i + D(i, /(\w+).+(:[^]+)/, ee + "box-$1$2" + ie + "flex-$1$2") + i;
    case 4350 + 198 * 36 + -1207 * 5:
      return ee + i + ie + "flex-item-" + D(i, /flex-|-self/g, "") + (ft(i, /flex-|baseline/) ? "" : ie + "grid-row-" + D(i, /flex-|-self/g, "")) + i;
    case -7 * 293 + 1 * -5361 + 12087:
      return ee + i + ie + "flex-line-pack" + D(i, /align-content|flex-|-self/g, "") + i;
    case 2 * -4793 + 4305 + 221 * 49:
      return ee + i + ie + D(i, "shrink", "negative") + i;
    case -1 * 2606 + -3 * 1709 + 13025:
      return ee + i + ie + D(i, "basis", "preferred-size") + i;
    case -1 * -5167 + -1 * 11927 + -1282 * -10:
      return ee + "box-" + D(i, "-grow", "") + ee + i + ie + D(i, "grow", "positive") + i;
    case 47 * 67 + 106 * -58 + 581 * 13:
      return ee + D(i, /([^-])(transform)/g, "$1" + ee + "$2") + i;
    case 3346 + -647 * 8 + 8017:
      return D(D(D(i, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"), i, "") + i;
    case 5495:
    case 3959:
      return D(i, /(image-set\([^]*)/, ee + "$1$`$1");
    case -4147 + 409 * 6 + 6661:
      return D(D(i, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + ie + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ee + i + i;
    case 4200:
      if (!ft(i, /flex-|baseline/)) return ie + "grid-column-align" + An(i, o) + i;
      break;
    case 6023 + -1774 * 2 + -3 * -39:
    case -1 * 4146 + 1255 + 6251:
      return ie + D(i, "template-", "") + i;
    case -20 * -398 + -4 * 2493 + 6396:
    case 1 * 4099 + -9806 + 9323 * 1:
      return t && t.some(function(e, n) {
        return o = n, ft(e.props, /grid-\w+-end/);
      }) ? ~Di(i + (t = t[o].value), "span", -2980 + 1 * -2609 + -23 * -243) ? i : ie + D(i, "-start", "") + i + ie + "grid-row-span:" + (~Di(t, "span", -8349 + -1 * -6519 + 1830) ? ft(t, /\d+/) : +ft(t, /\d+/) - +ft(i, /\d+/)) + ";" : ie + D(i, "-start", "") + i;
    case -1 * -9733 + 2912 + -7749:
    case 4128:
      return t && t.some(function(e) {
        return ft(e.props, /grid-\w+-start/);
      }) ? i : ie + D(D(i, "-end", "-span"), "span ", "") + i;
    case 7 * 769 + 6505 + -7793:
    case -691 * 2 + 9583 + 2309 * -2:
    case 4068:
    case 25 * -307 + 7377 + 2830:
      return D(i, /(.+)-inline(.+)/, ee + "$1$2") + i;
    case 14585 + 114 * 133 + 97 * -223:
    case 5997 + -961 * -1 + -101 * -1:
    case 1 * 6416 + 109 * -104 + 1 * 10673:
    case -7615 + -2 * -6575:
    case -2658 + 3 * 2701:
    case -15744 + -5 * -4289:
    case -929 * 1 + 2831 + 3031:
    case -7 * -1273 + 1815 * -1 + -1 * 2419:
    case 5533:
    case -1 * -10992 + -5977 + -1 * -774:
    case 10 * -487 + 7 * 733 + 476 * 10:
    case 4765:
      if (ct(i) - 1 - o > 991 * 2 + 4782 + -6758) switch (Ae(i, o + (-3 * -2643 + -90 * -102 + -1 * 17108))) {
        case 9187 + 267 * -34:
          if (Ae(i, o + 4) !== -7677 + 1 * 1965 + 303 * 19) break;
        case -77 * 10 + -5901 + 6773:
          return D(i, /(.+:)(.+)-([^]+)/, "$1" + ee + "$2-$3$1" + Mn + (Ae(i, o + (-1 * -8227 + -1312 + 576 * -12)) == 1 * 2879 + -1 * 446 + -155 * 15 ? "$3" : "$2-$3")) + i;
        case 115:
          return ~Di(i, "stretch", -1272 + -636 * -2) ? T0(D(i, "stretch", "fill-available"), o, t) + i : i;
      }
      break;
    case -758 + -3 * 2767 + 14211:
    case 37 * 205 + -5882 * -1 + -7547:
      return D(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, n, r, a, s, g, x) {
        return ie + n + ":" + r + x + (a ? ie + n + "-span:" + (s ? g : +g - +r) + x : "") + i;
      });
    case -6631 * -1 + -110 + -1572:
      if (Ae(i, o + (-7318 + -18 * -271 + 2 * 1223)) === -78 * 103 + 6432 + -1 * -1723) return D(i, ":", ":" + ee) + i;
      break;
    case 9 * -1376 + 3781 * -1 + -1 * -22609:
      switch (Ae(i, Ae(i, 1 * -5903 + -5108 + 525 * 21) === 1187 + 2 * -1489 + 1836 ? -3118 * 3 + -5562 + 14934 : -8996 + 6011 * -1 + 2 * 7509)) {
        case -8258 + -2 * -4189:
          return D(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ee + (Ae(i, 9218 + 4049 * 2 + 41 * -422) === 365 * -25 + -9285 + 18455 ? "inline-" : "") + "box$3$1" + ee + "$2$3$1" + ie + "$2box$3") + i;
        case -924 + -6506 * 1 + 7530:
          return D(i, ":", ":" + ie) + i;
      }
      break;
    case -1540 * 3 + -10806 + -1 * -21145:
    case -3838 + 1297 * 5:
    case -2987 + 2 * -3334 + 11790:
    case -3452 + -164 * 20 + 10659:
    case -6352 + 1 * -2239 + 2 * 5491:
      return D(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function to(i, o) {
  for (var t = "", e = 5 * 653 + 116 * 44 + -8369; e < i.length; e++) t += o(i[e], e, i, o) || "";
  return t;
}
function kl(i, o, t, e) {
  switch (i.type) {
    case pl:
      if (i.children.length) break;
    case hl:
    case $r:
      return i.return = i.return || i.value;
    case H0:
      return "";
    case W0:
      return i.return = i.value + "{" + to(i.children, e) + "}";
    case po:
      if (!ct(i.value = i.props.join(","))) return "";
  }
  return ct(t = to(i.children, e)) ? i.return = i.value + "{" + t + "}" : "";
}
function Kl(i) {
  var o = O0(i);
  return function(t, e, n, r) {
    for (var a = "", s = -34 * -178 + 5334 + -11386; s < o; s++) a += i[s](t, e, n, r) || "";
    return a;
  };
}
function Ol(i) {
  return function(o) {
    o.root || (o = o.return) && i(o);
  };
}
function Vl(i, o, t, e) {
  if (i.length > -(2753 * 1 + -125 * 26 + 498 * 1) && !i.return)
    switch (i.type) {
      case $r:
        i.return = T0(i.value, i.length, t);
        return;
      case W0:
        return to([St(i, { value: D(i.value, "@", "@" + ee) })], e);
      case po:
        if (i.length) return Al(t = i.props, function(n) {
          switch (ft(n, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              an(St(i, { props: [D(n, /:(read-\w+)/, ":" + Mn + "$1")] }));
              var r = {};
              r.props = [n], an(St(i, r)), xr(i, { props: ls(t, e) });
              break;
            case "::placeholder":
              an(St(i, { props: [D(n, /:(plac\w+)/, ":" + ee + "input-$1")] })), an(St(i, { props: [D(n, /:(plac\w+)/, ":" + Mn + "$1")] })), an(St(i, { props: [D(n, /:(plac\w+)/, ie + "input-$1")] }));
              var a = {};
              a.props = [n], an(St(i, a)), xr(i, { props: ls(t, e) });
              break;
          }
          return "";
        });
    }
}
var R = {};
R.animationIterationCount = 1, R.aspectRatio = 1, R.borderImageOutset = 1, R.borderImageSlice = 1, R.borderImageWidth = 1, R.boxFlex = 1, R.boxFlexGroup = 1, R.boxOrdinalGroup = 1, R.columnCount = 1, R.columns = 1, R.flex = 1, R.flexGrow = 1, R.flexPositive = 1, R.flexShrink = 1, R.flexNegative = 1, R.flexOrder = 1, R.gridRow = 1, R.gridRowEnd = 1, R.gridRowSpan = 1, R.gridRowStart = 1, R.gridColumn = 1, R.gridColumnEnd = 1, R.gridColumnSpan = 1, R.gridColumnStart = 1, R.msGridRow = 1, R.msGridRowSpan = 1, R.msGridColumn = 1, R.msGridColumnSpan = 1, R.fontWeight = 1, R.lineHeight = 1, R.opacity = 1, R.order = 1, R.orphans = 1, R.tabSize = 1, R.widows = 1, R.zIndex = 1, R.zoom = 1, R.WebkitLineClamp = 1, R.fillOpacity = 1, R.floodOpacity = 1, R.stopOpacity = 1, R.strokeDasharray = 1, R.strokeDashoffset = 1, R.strokeMiterlimit = 1, R.strokeOpacity = 1, R.strokeWidth = 1;
var Tl = R, _ = {}, Jt = typeof process < "u" && void (-378 * 8 + -4037 * -1 + -1013 * 1) !== _ && (_.REACT_APP_SC_ATTR || _.SC_ATTR) || "data-styled", E0 = "active", R0 = "data-styled-version", yo = "6.1.11", qr = `/*!sc*/
`, ea = typeof window < "u" && "HTMLElement" in window, El = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (-8873 + -3 * 1198 + -13 * -959) !== _ && void (33 * -2 + 4 * 1244 + -4910) !== _.REACT_APP_SC_DISABLE_SPEEDY && _.REACT_APP_SC_DISABLE_SPEEDY !== "" ? _.REACT_APP_SC_DISABLE_SPEEDY !== "false" && _.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (-1 * -4356 + 4836 + -9192) !== _ && void (-2 * -2459 + 1 * 9371 + -33 * 433) !== _.SC_DISABLE_SPEEDY && _.SC_DISABLE_SPEEDY !== "" ? _.SC_DISABLE_SPEEDY !== "false" && _.SC_DISABLE_SPEEDY : _.NODE_ENV !== "production"), Is = /invalid hook call/i, Wi = /* @__PURE__ */ new Set(), Rl = function(i, o) {
  if (_.NODE_ENV !== "production") {
    var t = o ? ' with the id of "'.concat(o, '"') : "", e = "The component ".concat(i).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var r = !0;
      console.error = function(a) {
        for (var s = [], g = -985 * -8 + 8778 + -16657; g < arguments.length; g++) s[g - (-1 * -1041 + 8455 + -9495)] = arguments[g];
        Is.test(a) ? (r = !1, Wi.delete(e)) : n.apply(void (-1 * -349 + 2001 + -2350), hn([a], s, !1));
      }, yt(), r && !Wi.has(e) && (console.warn(e), Wi.add(e));
    } catch (a) {
      Is.test(a.message) && Wi.delete(e);
    } finally {
      console.error = n;
    }
  }
}, vo = Object.freeze([]), yn = Object.freeze({});
function Pl(i, o, t) {
  return void (-11666 + 38 * 307) === t && (t = yn), i.theme !== t.theme && i.theme || o || t.theme;
}
var dr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Nl = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ll = /(^-|-$)/g;
function ds(i) {
  return i.replace(Nl, "-").replace(Ll, "");
}
var Dl = /(a)(d)/gi, ki = 1 * 299 + -1413 + 1166, Cs = function(i) {
  return String.fromCharCode(i + (i > 4009 * 1 + -3715 + -269 * 1 ? 968 * 3 + -3191 + 326 : -109 * -23 + -7857 + 5447));
};
function Cr(i) {
  var o, t = "";
  for (o = Math.abs(i); o > ki; o = o / ki | 2 * -4218 + -1 * -51 + 8385) t = Cs(o % ki) + t;
  return (Cs(o % ki) + t).replace(Dl, "$1-$2");
}
var Mo, P0 = -2 * 3911 + -10305 + 23508, Pt = function(i, o) {
  for (var t = o.length; t; ) i = 33 * i ^ o.charCodeAt(--t);
  return i;
}, N0 = function(i) {
  return Pt(P0, i);
};
function Yl(i) {
  return Cr(N0(i) >>> -4446 + 1 * 4446);
}
function L0(i) {
  return _.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function jo(i) {
  return typeof i == "string" && (_.NODE_ENV === "production" || i.charAt(89 + 8 * 311 + -1 * 2577) === i.charAt(3546 + -6419 * 1 + -17 * -169).toLowerCase());
}
var ze = {};
ze.childContextTypes = !0, ze.contextType = !0, ze.contextTypes = !0, ze.defaultProps = !0, ze.displayName = !0, ze.getDefaultProps = !0, ze.getDerivedStateFromError = !0, ze.getDerivedStateFromProps = !0, ze.mixins = !0, ze.propTypes = !0, ze.type = !0;
var Bt = {};
Bt.name = !0, Bt.length = !0, Bt.prototype = !0, Bt.caller = !0, Bt.callee = !0, Bt.arguments = !0, Bt.arity = !0;
var Et = {};
Et.$$typeof = !0, Et.compare = !0, Et.defaultProps = !0, Et.displayName = !0, Et.propTypes = !0, Et.type = !0;
var gn = {};
gn.$$typeof = !0, gn.render = !0, gn.defaultProps = !0, gn.displayName = !0, gn.propTypes = !0;
var D0 = typeof Symbol == "function" && Symbol.for, Y0 = D0 ? Symbol.for("react.memo") : 163 * 177 + 41861 + 10597 * -1, Fl = D0 ? Symbol.for("react.forward_ref") : 23129 * -1 + 4831 + -39205 * -2, Xl = ze, Ml = Bt, F0 = Et, jl = ((Mo = {})[Fl] = gn, Mo[Y0] = F0, Mo);
function fs(i) {
  return ("type" in (o = i) && o.type.$$typeof) === Y0 ? F0 : "$$typeof" in i ? jl[i.$$typeof] : Xl;
  var o;
}
var Jl = Object.defineProperty, Ul = Object.getOwnPropertyNames, hs = Object.getOwnPropertySymbols, zl = Object.getOwnPropertyDescriptor, Ql = Object.getPrototypeOf, ps = Object.prototype;
function X0(i, o, t) {
  if (typeof o != "string") {
    if (ps) {
      var e = Ql(o);
      e && e !== ps && X0(i, e, t);
    }
    var n = Ul(o);
    hs && (n = n.concat(hs(o)));
    for (var r = fs(i), a = fs(o), s = 1 * 3638 + -8121 + -1 * -4483; s < n.length; ++s) {
      var g = n[s];
      if (!(g in Ml || t && t[g] || a && g in a || r && g in r)) {
        var x = zl(o, g);
        try {
          Jl(i, g, x);
        } catch {
        }
      }
    }
  }
  return i;
}
function vn(i) {
  return typeof i == "function";
}
function ta(i) {
  return typeof i == "object" && "styledComponentId" in i;
}
function Lt(i, o) {
  return i && o ? "".concat(i, " ").concat(o) : i || o || "";
}
function ms(i, o) {
  if (-188 * -5 + 6232 + 652 * -11 === i.length) return "";
  for (var t = i[-18598 + 1094 * 17], e = 17 * -171 + 7396 + -1122 * 4; e < i.length; e++) t += i[e];
  return t;
}
function wn(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function fr(i, o, t) {
  if (void (-1999 + -881 * -6 + -3287) === t && (t = !1), !t && !wn(i) && !Array.isArray(i)) return o;
  if (Array.isArray(o))
    for (var e = 0; e < o.length; e++) i[e] = fr(i[e], o[e]);
  else if (wn(o))
    for (var e in o) i[e] = fr(i[e], o[e]);
  return i;
}
function na(i, o) {
  var t = {};
  t.value = o, Object.defineProperty(i, "toString", t);
}
var me = {};
me[1] = `Cannot create styled-component for component: %s.

`, me[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, me[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, me[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, me[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, me[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, me[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', me[8] = `ThemeProvider: Please make your "theme" prop an object.

`, me[9] = "Missing document `<head>`\n\n", me[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, me[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, me[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", me[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, me[14] = `ThemeProvider: "theme" prop is required.

`, me[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", me[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, me[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, me[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var $l = _.NODE_ENV !== "production" ? me : {};
function _l() {
  for (var i = [], o = -7914 + -3957 * -2; o < arguments.length; o++) i[o] = arguments[o];
  for (var t = i[1671 + -943 * -8 + -9215], e = [], n = 1, r = i.length; n < r; n += -2276 + 1851 * 3 + -3276) e.push(i[n]);
  return e.forEach(function(a) {
    t = t.replace(/%[a-z]/, a);
  }), t;
}
function Hn(i) {
  for (var o = [], t = -25 * 115 + -279 + 1 * 3155; t < arguments.length; t++) o[t - (61 * -78 + -7267 * 1 + 12026)] = arguments[t];
  return _.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i, " for more information.").concat(o.length > 3 * -448 + -7995 + -11 * -849 ? " Args: ".concat(o.join(", ")) : "")) : new Error(_l.apply(void (163 * -61 + -136 * 61 + -299 * -61), hn([$l[i]], o, !1)).trim());
}
var ql = function() {
  function i(o) {
    this.groupSizes = new Uint32Array(-4892 * -1 + -82 * 1 + -4298 * 1), this.length = 9080 + 7221 * -1 + -1347, this.tag = o;
  }
  return i.prototype.indexOfGroup = function(o) {
    for (var t = -1642 + -2 * -821, e = 9966 + -1389 * -2 + 216 * -59; e < o; e++) t += this.groupSizes[e];
    return t;
  }, i.prototype.insertRules = function(o, t) {
    if (o >= this.groupSizes.length) {
      for (var e = this.groupSizes, n = e.length, r = n; o >= r; ) if ((r <<= 4241 * -1 + 1 * 7958 + -3716) < 1 * 1997 + -4450 + 2453 * 1) throw Hn(-1 * -9098 + 6311 + -15393, "".concat(o));
      this.groupSizes = new Uint32Array(r), this.groupSizes.set(e), this.length = r;
      for (var a = n; a < r; a++) this.groupSizes[a] = -481 + -31 * -249 + -7238;
    }
    for (var s = this.indexOfGroup(o + (-1997 + -666 * -3)), g = (a = 3270 + -3270 * 1, t.length); a < g; a++) this.tag.insertRule(s, t[a]) && (this.groupSizes[o]++, s++);
  }, i.prototype.clearGroup = function(o) {
    if (o < this.length) {
      var t = this.groupSizes[o], e = this.indexOfGroup(o), n = e + t;
      this.groupSizes[o] = 9461 * -1 + 8641 + -5 * -164;
      for (var r = e; r < n; r++) this.tag.deleteRule(e);
    }
  }, i.prototype.getGroup = function(o) {
    var t = "";
    if (o >= this.length || 8338 + -1 * 4569 + -3769 === this.groupSizes[o]) return t;
    for (var e = this.groupSizes[o], n = this.indexOfGroup(o), r = n + e, a = n; a < r; a++) t += "".concat(this.tag.getRule(a)).concat(qr);
    return t;
  }, i;
}(), ex = 1968 + 1063 * -2 + 159 << -19 * 43 + -9738 + 10585, Xi = /* @__PURE__ */ new Map(), no = /* @__PURE__ */ new Map(), Mi = 1, Ki = function(i) {
  if (Xi.has(i)) return Xi.get(i);
  for (; no.has(Mi); ) Mi++;
  var o = Mi++;
  if (_.NODE_ENV !== "production" && ((3099 + 1033 * -3 | o) < -1 * 1623 + 4282 + -2659 || o > ex)) throw Hn(-105 * 23 + -4217 + 24 * 277, "".concat(o));
  return Xi.set(i, o), no.set(o, i), o;
}, tx = function(i, o) {
  Mi = o + (-5328 + 71 * -49 + 367 * 24), Xi.set(i, o), no.set(o, i);
}, nx = "style[".concat(Jt, "][").concat(R0, '="').concat(yo, '"]'), ix = new RegExp("^".concat(Jt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ox = function(i, o, t) {
  for (var e, n = t.split(","), r = -5697 + -7496 * -1 + -1799, a = n.length; r < a; r++) (e = n[r]) && i.registerName(o, e);
}, rx = function(i, o) {
  for (var t, e = ((t = o.textContent) !== null && void (357 * -9 + 1 * 9463 + -6250) !== t ? t : "").split(qr), n = [], r = -3428 * 2 + 254 + 2 * 3301, a = e.length; r < a; r++) {
    var s = e[r].trim();
    if (s) {
      var g = s.match(ix);
      if (g) {
        var x = 0 | parseInt(g[1], 10), C = g[-13547 + -797 * -17];
        1 * -4844 + 6025 + -1181 !== x && (tx(C, x), ox(i, C, g[3]), i.getTag().insertRules(x, n)), n.length = 0;
      } else n.push(s);
    }
  }
};
function ax() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var M0 = function(i) {
  var o = document.head, t = i || o, e = document.createElement("style"), n = function(s) {
    var g = Array.from(s.querySelectorAll("style[".concat(Jt, "]")));
    return g[g.length - 1];
  }(t), r = void (5723 + -2 * 1928 + -1867) !== n ? n.nextSibling : null;
  e.setAttribute(Jt, E0), e.setAttribute(R0, yo);
  var a = ax();
  return a && e.setAttribute("nonce", a), t.insertBefore(e, r), e;
}, sx = function() {
  function i(o) {
    this.element = M0(o), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, n = -1253 * -1 + -1 * 2141 + 888, r = e.length; n < r; n++) {
        var a = e[n];
        if (a.ownerNode === t) return a;
      }
      throw Hn(281 + 66 * -4);
    }(this.element), this.length = 1373 + -1 * -73 + -1446 * 1;
  }
  return i.prototype.insertRule = function(o, t) {
    try {
      return this.sheet.insertRule(t, o), this.length++, !0;
    } catch {
      return !1;
    }
  }, i.prototype.deleteRule = function(o) {
    this.sheet.deleteRule(o), this.length--;
  }, i.prototype.getRule = function(o) {
    var t = this.sheet.cssRules[o];
    return t && t.cssText ? t.cssText : "";
  }, i;
}(), gx = function() {
  function i(o) {
    this.element = M0(o), this.nodes = this.element.childNodes, this.length = 0;
  }
  return i.prototype.insertRule = function(o, t) {
    if (o <= this.length && o >= -1093 * -9 + -3 * 91 + -9564) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[o] || null), this.length++, !0;
    }
    return !1;
  }, i.prototype.deleteRule = function(o) {
    this.element.removeChild(this.nodes[o]), this.length--;
  }, i.prototype.getRule = function(o) {
    return o < this.length ? this.nodes[o].textContent : "";
  }, i;
}(), cx = function() {
  function i(o) {
    this.rules = [], this.length = -2112 + -2 * -1056;
  }
  return i.prototype.insertRule = function(o, t) {
    return o <= this.length && (this.rules.splice(o, 0, t), this.length++, !0);
  }, i.prototype.deleteRule = function(o) {
    this.rules.splice(o, 8505 + -2 * -3887 + 8139 * -2), this.length--;
  }, i.prototype.getRule = function(o) {
    return o < this.length ? this.rules[o] : "";
  }, i;
}(), As = ea, lx = { isServer: !ea, useCSSOMInjection: !El }, j0 = function() {
  function i(o, t, e) {
    void (-1 * 985 + -677 * -14 + -8493) === o && (o = yn), void (1 * 1333 + 3280 + -4613) === t && (t = {});
    var n = this;
    this.options = Pe(Pe({}, lx), o), this.gs = t, this.names = new Map(e), this.server = !!o.isServer, !this.server && ea && As && (As = !1, function(r) {
      for (var a = document.querySelectorAll(nx), s = -496 + 71 * -90 + 6886, g = a.length; s < g; s++) {
        var x = a[s];
        x && x.getAttribute(Jt) !== E0 && (rx(r, x), x.parentNode && x.parentNode.removeChild(x));
      }
    }(this)), na(this, function() {
      return function(r) {
        for (var a = r.getTag(), s = a.length, g = "", x = function(d) {
          var m = function(S) {
            return no.get(S);
          }(d);
          if (void (3199 + 1 * -3199) === m) return "continue";
          var p = r.names.get(m), w = a.getGroup(d);
          if (void (7013 + 4630 * 1 + -11643) === p || w.length === 0) return "continue";
          var H = "".concat(Jt, ".g").concat(d, '[id="').concat(m, '"]'), E = "";
          void (1 * 4003 + 5458 + 9461 * -1) !== p && p.forEach(function(S) {
            S.length > 0 && (E += "".concat(S, ","));
          }), g += "".concat(w).concat(H, '{content:"').concat(E, '"}').concat(qr);
        }, C = -193 * 41 + -11 * 40 + -8353 * -1; C < s; C++) x(C);
        return g;
      }(n);
    });
  }
  return i.registerId = function(o) {
    return Ki(o);
  }, i.prototype.reconstructWithOptions = function(o, t) {
    return void (12 * 218 + -5169 * -1 + -3 * 2595) === t && (t = !0), new i(Pe(Pe({}, this.options), o), this.gs, t && this.names || void 0);
  }, i.prototype.allocateGSInstance = function(o) {
    return this.gs[o] = (this.gs[o] || -2649 + -1 * -2649) + (4955 + 1 * -3152 + -1802);
  }, i.prototype.getTag = function() {
    return this.tag || (this.tag = (o = function(t) {
      var e = t.useCSSOMInjection, n = t.target;
      return t.isServer ? new cx(n) : e ? new sx(n) : new gx(n);
    }(this.options), new ql(o)));
    var o;
  }, i.prototype.hasNameForId = function(o, t) {
    return this.names.has(o) && this.names.get(o).has(t);
  }, i.prototype.registerName = function(o, t) {
    if (Ki(o), this.names.has(o)) this.names.get(o).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(o, e);
    }
  }, i.prototype.insertRules = function(o, t, e) {
    this.registerName(o, t), this.getTag().insertRules(Ki(o), e);
  }, i.prototype.clearNames = function(o) {
    this.names.has(o) && this.names.get(o).clear();
  }, i.prototype.clearRules = function(o) {
    this.getTag().clearGroup(Ki(o)), this.clearNames(o);
  }, i.prototype.clearTag = function() {
    this.tag = void (707 + -62 * -31 + -2629);
  }, i;
}(), xx = /&/g, ux = /^\s*\/\/.*$/gm;
function J0(i, o) {
  return i.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(o, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(o, " ")), t.props = t.props.map(function(e) {
      return "".concat(o, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = J0(t.children, o)), t;
  });
}
function U0(i) {
  var o, t, e, n = i === void 0 ? yn : i, r = n.options, a = void (-1982 + -3 * -278 + 1 * 1148) === r ? yn : r, s = n.plugins, g = void (-1 * -2203 + 278 * 23 + -8597 * 1) === s ? vo : s, x = function(m, p, w) {
    return w.startsWith(t) && w.endsWith(t) && w.replaceAll(t, "").length > 0 ? ".".concat(o) : m;
  }, C = g.slice();
  C.push(function(m) {
    m.type === po && m.value.includes("&") && (m.props[-3 * 2586 + 4228 * 1 + 3530 * 1] = m.props[3488 + -32 * 202 + 2976].replace(xx, t).replace(e, x));
  }), a.prefix && C.push(Vl), C.push(kl);
  var d = function(m, p, w, H) {
    void (-5501 * 1 + -1 * 5689 + -1 * -11190) === p && (p = ""), w === void 0 && (w = ""), void (-9210 + 201 * -1 + 1 * 9411) === H && (H = "&"), o = H, t = p, e = new RegExp("\\".concat(t, "\\b"), "g");
    var E = m.replace(ux, ""), S = Hl(w || p ? "".concat(w, " ").concat(p, " { ").concat(E, " }") : E);
    a.namespace && (S = J0(S, a.namespace));
    var W = [];
    return to(S, Kl(C.concat(Ol(function(N) {
      return W.push(N);
    })))), W;
  };
  return d.hash = g.length ? g.reduce(function(m, p) {
    return p.name || Hn(15), Pt(m, p.name);
  }, P0).toString() : "", d;
}
var Ix = new j0(), hr = U0(), ia = jt.createContext({ shouldForwardProp: void (4902 + 605 * 7 + -9137), styleSheet: Ix, stylis: hr });
ia.Consumer;
var dx = jt.createContext(void 0);
function pr() {
  return zt(ia);
}
function Cx(i) {
  var o = Fe(i.stylisPlugins), t = o[1123 * -1 + -8 * 414 + -5 * -887], e = o[1], n = pr().styleSheet, r = Xe(function() {
    var C = n, d = {};
    return d.useCSSOMInjection = !1, i.sheet ? C = i.sheet : i.target && (C = C.reconstructWithOptions({ target: i.target }, !1)), i.disableCSSOMInjection && (C = C.reconstructWithOptions(d)), C;
  }, [i.disableCSSOMInjection, i.sheet, i.target, n]), a = Xe(function() {
    var C = {};
    C.namespace = i.namespace, C.prefix = i.enableVendorPrefixes;
    var d = {};
    return d.options = C, d.plugins = t, U0(d);
  }, [i.enableVendorPrefixes, i.namespace, t]);
  be(function() {
    fl(t, i.stylisPlugins) || e(i.stylisPlugins);
  }, [i.stylisPlugins]);
  var s = Xe(function() {
    var C = {};
    return C.shouldForwardProp = i.shouldForwardProp, C.styleSheet = r, C.stylis = a, C;
  }, [i.shouldForwardProp, r, a]), g = {};
  g.value = s;
  var x = {};
  return x.value = a, jt.createElement(ia.Provider, g, jt.createElement(dx.Provider, x, i.children));
}
var bs = function() {
  function i(o, t) {
    var e = this;
    this.inject = function(n, r) {
      void (308 * -7 + -4501 + 2219 * 3) === r && (r = hr);
      var a = e.name + r.hash;
      n.hasNameForId(e.id, a) || n.insertRules(e.id, a, r(e.rules, a, "@keyframes"));
    }, this.name = o, this.id = "sc-keyframes-".concat(o), this.rules = t, na(this, function() {
      throw Hn(-2166 * 3 + 1 * 4948 + -781 * -2, String(e.name));
    });
  }
  return i.prototype.getName = function(o) {
    return void (12341 + 43 * -287) === o && (o = hr), this.name + o.hash;
  }, i;
}(), fx = function(i) {
  return i >= "A" && i <= "Z";
};
function ys(i) {
  for (var o = "", t = -2598 + 2 * 1299; t < i.length; t++) {
    var e = i[t];
    if (655 * 1 + -7039 * -1 + -7693 === t && e === "-" && i[1 * -6197 + 1 * 5363 + 834] === "-") return i;
    fx(e) ? o += "-" + e.toLowerCase() : o += e;
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
var z0 = function(i) {
  return i == null || i === !1 || i === "";
}, Q0 = function(i) {
  var o, t, e = [];
  for (var n in i) {
    var r = i[n];
    i.hasOwnProperty(n) && !z0(r) && (Array.isArray(r) && r.isCss || vn(r) ? e.push("".concat(ys(n), ":"), r, ";") : wn(r) ? e.push.apply(e, hn(hn(["".concat(n, " {")], Q0(r), !1), ["}"], !1)) : e.push("".concat(ys(n), ": ").concat((o = n, (t = r) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || -4 * -1200 + -285 * -19 + 3405 * -3 === t || o in Tl || o.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function Xt(i, o, t, e) {
  if (z0(i)) return [];
  if (ta(i)) return [".".concat(i.styledComponentId)];
  if (vn(i)) {
    if (!vn(r = i) || r.prototype && r.prototype.isReactComponent || !o) return [i];
    var n = i(o);
    return _.NODE_ENV === "production" || typeof n != "object" || Array.isArray(n) || n instanceof bs || wn(n) || n === null || console.error("".concat(L0(i), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Xt(n, o, t, e);
  }
  var r;
  return i instanceof bs ? t ? (i.inject(t, e), [i.getName(e)]) : [i] : wn(i) ? Q0(i) : Array.isArray(i) ? Array.prototype.concat.apply(vo, i.map(function(a) {
    return Xt(a, o, t, e);
  })) : [i.toString()];
}
function hx(i) {
  for (var o = 1 * -3566 + -1 * 8457 + 12023; o < i.length; o += -6864 + -5234 * 1 + 1 * 12099) {
    var t = i[o];
    if (vn(t) && !ta(t)) return !1;
  }
  return !0;
}
var px = N0(yo), mx = function() {
  function i(o, t, e) {
    this.rules = o, this.staticRulesId = "", this.isStatic = _.NODE_ENV === "production" && (void (18885 + 3 * -6295) === e || e.isStatic) && hx(o), this.componentId = t, this.baseHash = Pt(px, t), this.baseStyle = e, j0.registerId(t);
  }
  return i.prototype.generateAndInjectStyles = function(o, t, e) {
    var n = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) n = Lt(n, this.staticRulesId);
      else {
        var r = ms(Xt(this.rules, o, t, e)), a = Cr(Pt(this.baseHash, r) >>> 9004 + 9 * 2 + -9022);
        if (!t.hasNameForId(this.componentId, a)) {
          var s = e(r, ".".concat(a), void 0, this.componentId);
          t.insertRules(this.componentId, a, s);
        }
        n = Lt(n, a), this.staticRulesId = a;
      }
    else {
      for (var g = Pt(this.baseHash, e.hash), x = "", C = 0; C < this.rules.length; C++) {
        var d = this.rules[C];
        if (typeof d == "string") x += d, _.NODE_ENV !== "production" && (g = Pt(g, d));
        else if (d) {
          var m = ms(Xt(d, o, t, e));
          g = Pt(g, m + C), x += m;
        }
      }
      if (x) {
        var p = Cr(g >>> 0);
        t.hasNameForId(this.componentId, p) || t.insertRules(this.componentId, p, e(x, ".".concat(p), void 0, this.componentId)), n = Lt(n, p);
      }
    }
    return n;
  }, i;
}(), $0 = jt.createContext(void (5498 * -1 + -62 * 79 + 1 * 10396));
$0.Consumer;
var Jo = {}, vs = /* @__PURE__ */ new Set();
function Ax(i, o, t) {
  var e = ta(i), n = i, r = !jo(i), a = o.attrs, s = void (-8069 + 1 * 5361 + 2708) === a ? vo : a, g = o.componentId, x = g === void 0 ? function(M, Y) {
    var G = typeof M != "string" ? "sc" : ds(M);
    Jo[G] = (Jo[G] || 0) + (4 * 2289 + 5064 + -14219);
    var J = "".concat(G, "-").concat(Yl(yo + G + Jo[G]));
    return Y ? "".concat(Y, "-").concat(J) : J;
  }(o.displayName, o.parentComponentId) : g, C = o.displayName, d = void (1481 * 5 + 152 * -5 + -6645) === C ? function(M) {
    return jo(M) ? "styled.".concat(M) : "Styled(".concat(L0(M), ")");
  }(i) : C, m = o.displayName && o.componentId ? "".concat(ds(o.displayName), "-").concat(o.componentId) : o.componentId || x, p = e && n.attrs ? n.attrs.concat(s).filter(Boolean) : s, w = o.shouldForwardProp;
  if (e && n.shouldForwardProp) {
    var H = n.shouldForwardProp;
    if (o.shouldForwardProp) {
      var E = o.shouldForwardProp;
      w = function(M, Y) {
        return H(M, Y) && E(M, Y);
      };
    } else w = H;
  }
  var S = new mx(t, m, e ? n.componentStyle : void (-7219 + -7219 * -1));
  function W(M, Y) {
    return function(G, J, ue) {
      var U = G.attrs, Ie = G.componentStyle, de = G.defaultProps, we = G.foldedComponentIds, qe = G.styledComponentId, ae = G.target, Se = jt.useContext($0), Ke = pr(), je = G.shouldForwardProp || Ke.shouldForwardProp;
      _.NODE_ENV !== "production" && eo(qe);
      var Oe = Pl(J, Se, de) || yn, fe = function($t, Ne, at) {
        var Je = {};
        Je.className = void 0, Je.theme = at;
        for (var kt, st = Pe(Pe({}, Ne), Je), et = 8340 + -2 * -4572 + -17484; et < $t.length; et += -2e3 + -87 * -23) {
          var Kt = vn(kt = $t[et]) ? kt(st) : kt;
          for (var tt in Kt) st[tt] = tt === "className" ? Lt(st[tt], Kt[tt]) : tt === "style" ? Pe(Pe({}, st[tt]), Kt[tt]) : Kt[tt];
        }
        return Ne.className && (st.className = Lt(st.className, Ne.className)), st;
      }(U, J, Oe), Ge = fe.as || ae, Ve = {};
      for (var he in fe) void (-12776 + -12776 * -1) === fe[he] || he[-1847 + -2823 * -2 + 1 * -3799] === "$" || he === "as" || he === "theme" && fe.theme === Oe || (he === "forwardedAs" ? Ve.as = fe.forwardedAs : je && !je(he, Ge) || (Ve[he] = fe[he], je || _.NODE_ENV !== "development" || Wc(he) || vs.has(he) || !dr.has(Ge) || (vs.add(he), console.warn('styled-components: it looks like an unknown prop "'.concat(he, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Ze = function($t, Ne) {
        var at = pr(), Je = $t.generateAndInjectStyles(Ne, at.styleSheet, at.stylis);
        return _.NODE_ENV !== "production" && eo(Je), Je;
      }(Ie, fe);
      _.NODE_ENV !== "production" && G.warnTooManyClasses && G.warnTooManyClasses(Ze);
      var Te = Lt(we, qe);
      return Ze && (Te += " " + Ze), fe.className && (Te += " " + fe.className), Ve[jo(Ge) && !dr.has(Ge) ? "class" : "className"] = Te, Ve.ref = ue, ke(Ge, Ve);
    }(N, M, Y);
  }
  W.displayName = d;
  var N = jt.forwardRef(W), $ = {};
  return $.attrs = !0, $.componentStyle = !0, $.displayName = !0, $.foldedComponentIds = !0, $.shouldForwardProp = !0, $.styledComponentId = !0, $.target = !0, N.attrs = p, N.componentStyle = S, N.displayName = d, N.shouldForwardProp = w, N.foldedComponentIds = e ? Lt(n.foldedComponentIds, n.styledComponentId) : "", N.styledComponentId = m, N.target = e ? n.target : i, Object.defineProperty(N, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(M) {
    this._foldedDefaultProps = e ? function(Y) {
      for (var G = [], J = 1; J < arguments.length; J++) G[J - (-155 * 20 + -2963 + -758 * -8)] = arguments[J];
      for (var ue = 0, U = G; ue < U.length; ue++) fr(Y, U[ue], !0);
      return Y;
    }({}, n.defaultProps, M) : M;
  } }), _.NODE_ENV !== "production" && (Rl(d, m), N.warnTooManyClasses = /* @__PURE__ */ function(M, Y) {
    var G = {}, J = !1;
    return function(ue) {
      if (!J && (G[ue] = !0, Object.keys(G).length >= 200)) {
        var U = Y ? ' with the id of "'.concat(Y, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(M).concat(U, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), J = !0, G = {};
      }
    };
  }(d, m)), na(N, function() {
    return ".".concat(N.styledComponentId);
  }), r && X0(N, i, $), N;
}
function ws(i, o) {
  for (var t = [i[5 * 37 + -8193 + -4 * -2002]], e = -34 * -79 + 6140 + -8826, n = o.length; e < n; e += 11457 + 64 * -179) t.push(o[e], i[e + (-11283 + -5642 * -2)]);
  return t;
}
var Ss = function(i) {
  var o = {};
  return o.isCss = !0, Object.assign(i, o);
};
function bx(i) {
  for (var o = [], t = -2 * -1197 + -7583 * 1 + 6 * 865; t < arguments.length; t++) o[t - (2 * 3237 + -5582 * -1 + -12055)] = arguments[t];
  if (vn(i) || wn(i)) return Ss(Xt(ws(vo, hn([i], o, !0))));
  var e = i;
  return 2439 + 1 * -9933 + 2498 * 3 === o.length && 5179 * -1 + -4 * -878 + 1668 === e.length && typeof e[1 * -1307 + 7653 + -167 * 38] == "string" ? Xt(e) : Ss(Xt(ws(e, o)));
}
function mr(i, o, t) {
  if (void (-1 * -9845 + -10 * -771 + -17555) === t && (t = yn), !o) throw Hn(11 * 266 + -1546 * 1 + -1379, o);
  var e = function(n) {
    for (var r = [], a = -681 * 7 + 5895 + -1127; a < arguments.length; a++) r[a - (-9120 + -469 * -1 + -84 * -103)] = arguments[a];
    return i(o, t, bx.apply(void (-777 + 1 * 777), hn([n], r, !1)));
  };
  return e.attrs = function(n) {
    return mr(i, o, Pe(Pe({}, t), { attrs: Array.prototype.concat(t.attrs, n).filter(Boolean) }));
  }, e.withConfig = function(n) {
    return mr(i, o, Pe(Pe({}, t), n));
  }, e;
}
var _0 = function(i) {
  return mr(Ax, i);
}, di = _0;
dr.forEach(function(i) {
  di[i] = _0(i);
});
_.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Oi = "__sc-".concat(Jt, "__");
_.NODE_ENV !== "production" && _.NODE_ENV !== "test" && typeof window < "u" && (window[Oi] || (window[Oi] = 10441 + 1 * -10441), -40 * 10 + -1569 + 1970 === window[Oi] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Oi] += 7277 + -6 * 463 + -346 * 13);
const yx = di.div`
  position: relative;
`, vx = di.video`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(i) => i.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class re extends Error {
  constructor(t, e) {
    super(t);
    j(this, "cause");
    this.name = "AutoCaptureError", this.cause = e;
  }
  static logError(t) {
  }
  static fromCameraError(t) {
    if (this.logError(t), t instanceof re) return t;
    let e;
    switch (t.name) {
      case "OverconstrainedError":
        e = "Minimum quality requirements are not met by your camera";
        break;
      case "NotReadableError":
      case "AbortError":
        e = "The webcam is already in use by another application";
        break;
      case "NotAllowedError":
        e = "To use your camera, you must allow permissions";
        break;
      case "NotFoundError":
        e = "There is no camera available to you";
        break;
      default:
        e = "An unknown camera error has occurred";
        break;
    }
    return new re(e, t);
  }
  static fromError(t) {
    if (this.logError(t), t instanceof re) return t;
    const e = "An unexpected error has occurred";
    return new re(e);
  }
}
var ji = ((i) => (i.CONTINUE_DETECTION = "continue-detection", i.SWITCH_CAMERA = "switch-camera", i.TOGGLE_MIRROR = "toggle-mirror", i))(ji || {}), q0 = ((i) => (i.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", i.CONTROL = "document-auto-capture:control", i.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", i.DOCUMENT_DETECTION = "document-auto-capture:document-detection", i.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", i.STATE_CHANGED = "document-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", i))(q0 || {}), lt = ((i) => (i.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", i.CONTROL = "face-auto-capture:control", i.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", i.FACE_DETECTION = "face-auto-capture:face-detection", i.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", i.STATE_CHANGED = "face-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", i))(lt || {}), wx = ((i) => (i.ANIMATION_END = "magnifeye-auto-capture:animation-end", i.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", i))(wx || {}), Sx = ((i) => (i.STATUS_CHANGED = "smile-auto-capture:status-changed", i))(Sx || {});
const eg = {};
eg.EYE_NOT_PRESENT = "eye_not_present";
const Bs = eg, We = {};
We.CANDIDATE_SELECTION = "candidate_selection", We.FACE_TOO_CLOSE = "face_too_close", We.FACE_TOO_FAR = "face_too_far", We.FACE_CENTERING = "face_centering", We.FACE_NOT_PRESENT = "face_not_present", We.SHARPNESS_TOO_LOW = "sharpness_too_low", We.BRIGHTNESS_TOO_LOW = "brightness_too_low", We.BRIGHTNESS_TOO_HIGH = "brightness_too_high", We.DEVICE_PITCHED = "device_pitched", We.LEFT_EYE_NOT_PRESENT = "left_" + Bs.EYE_NOT_PRESENT, We.RIGHT_EYE_NOT_PRESENT = "right_" + Bs.EYE_NOT_PRESENT, We.MOUTH_NOT_PRESENT = "mouth_not_present", We.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", We.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const Be = We, Re = {};
Re.isPresent = Be.FACE_NOT_PRESENT, Re.isNotPitched = Be.DEVICE_PITCHED, Re.isNotSmall = Be.FACE_TOO_FAR, Re.isNotLarge = Be.FACE_TOO_CLOSE, Re.isNotOutOfBounds = Be.FACE_CENTERING, Re.isNotDim = Be.BRIGHTNESS_TOO_LOW, Re.isNotBright = Be.BRIGHTNESS_TOO_HIGH, Re.isSharp = Be.SHARPNESS_TOO_LOW, Re.isLeftEyePresent = Be.LEFT_EYE_NOT_PRESENT, Re.isRightEyePresent = Be.RIGHT_EYE_NOT_PRESENT, Re.isMouthPresent = Be.MOUTH_NOT_PRESENT, Re.isMouthScoreNotTooHigh = Be.MOUTH_SCORE_TOO_HIGH, Re.isMouthScoreNotTooLow = Be.MOUTH_SCORE_TOO_LOW;
const Bx = Re, Ar = {};
Ar.FRONT = "user", Ar.REAR = "environment";
const tg = Ar, Nn = {};
Nn.LOADING = "LOADING", Nn.ERROR = "ERROR", Nn.WAITING = "WAITING", Nn.RUNNING = "RUNNING";
const Ye = Nn;
var Gx = ((i) => (i.CLOSEUP = "CLOSEUP", i.DISTANT = "DISTANT", i.MIDDLE = "MIDDLE", i))(Gx || {});
const wo = Ii(void 0);
wo.displayName = "AppStateContext";
function Ci() {
  const i = zt(wo);
  if (i === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return i;
}
const Zx = wo.Provider;
class ng extends Qe {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var t;
    const o = new re("An unknown error has occurred");
    (t = this.context) == null || t.handleError(o);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var o;
    return ((o = this.context) == null ? void 0 : o.appState) === Ye.ERROR ? null : this.props.children;
  }
}
j(ng, "contextType", wo);
const Hx = di.canvas`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, Wx = di.div`
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
function kx() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const Kx = h0(
  ({ detectionDetails: i, isImageMirror: o }, t) => kx() ? (console.log(i), /* @__PURE__ */ Z(ot, { children: [
    /* @__PURE__ */ Z(Hx, { ref: t, $isImageMirror: o }),
    /* @__PURE__ */ Z(Wx, { children: Object.entries(i).map(([e, n]) => /* @__PURE__ */ Z("div", { children: [
      e,
      ": ",
      /* @__PURE__ */ Z("strong", { children: n })
    ] }, e)) })
  ] })) : null
), io = Ii(void 0);
io.displayName = "AnalyticsContext";
function Ox() {
  const i = zt(io);
  if (i === void 0)
    throw new Error(`${io.displayName} must be used within a AnalyticsProvider`);
  return i;
}
const oo = Ii(void 0);
oo.displayName = "LicenseContext";
function oa() {
  const i = zt(oo);
  if (i === void 0)
    throw new Error(`${oo.displayName} must be used within a LicenseProvider`);
  return i;
}
function Vx({ licensePath: i, licenseValidator: o, wasmDirectoryPath: t }) {
  const [e, n] = Fe(), r = e !== void (2 * 2872 + -2273 + -89 * 39);
  be(() => {
    async function s() {
      await o.init(t, i), n(o.getLicenseResult());
    }
    s();
  }, [o, t, i, n]);
  const a = {};
  return a.licenseResult = e, a.isLicenseValidated = r, a;
}
var ig = ((i) => (i.DOCUMENT = "document-auto-capture:dev", i.FACE = "face-auto-capture:dev", i))(ig || {});
const br = {};
br.SIMD = "simd", br.NO_SIMD = "no-simd";
const Gs = br, yr = {};
yr.FREEMIUM = "Freemium", yr.PREMIUM = "Premium";
const vr = yr, Ji = {};
Ji.VISIBLE = "VISIBLE", Ji.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", Ji.HIDDEN = "HIDDEN";
const ro = Ji;
function Tx({ licenseResult: i }) {
  return i != null && i.isValid ? vr.PREMIUM : vr.FREEMIUM;
}
function Ex({
  children: i,
  licensePath: o,
  licenseValidator: t,
  wasmDirectoryPath: e
}) {
  const { isLicenseValidated: n, licenseResult: r } = Vx({
    licenseValidator: t,
    licensePath: o,
    wasmDirectoryPath: e
  }), a = Xe(
    () => ({
      appTier: Tx({ licenseResult: r }),
      isLicenseValidated: n,
      licenseResult: r,
      licenseValidator: t
    }),
    [n, r, t]
  );
  return /* @__PURE__ */ Z(oo.Provider, { value: a, children: i });
}
function Rx({ analytics: i, licenseResult: o }) {
  return o !== void (7970 + -1 * -8067 + 79 * -203) && !o.isAnalyticsDisabled ? i : void (-3430 + -5 * -686);
}
function Px({ analytics: i, appKey: o, appTier: t, licenseResult: e, licenseValidator: n }) {
  const r = {};
  r.analytics = i, r.licenseResult = e;
  const a = Rx(r);
  return be(() => {
    a && a.init(o);
  }, [a, o]), be(() => {
    e && (console.info("Analytics is " + (e.isAnalyticsDisabled ? "disabled" : "enabled")), a && a.sendLicenseResultData(t, n.getCustomerName()));
  }, [a, n, e, t]), be(() => {
    if (a)
      return window.addEventListener("beforeunload", a.endSession), () => {
        a.endSession(), window.removeEventListener("beforeunload", a.endSession);
      };
  }, [a]), a;
}
function Nx({
  analytics: i,
  appKey: o,
  children: t
}) {
  const { appTier: e, licenseResult: n, licenseValidator: r } = oa(), a = Px({ analytics: i, appTier: e, appKey: o, licenseResult: n, licenseValidator: r }), s = Xe(
    () => ({
      analytics: a
    }),
    [a]
  );
  return /* @__PURE__ */ Z(io.Provider, { value: s, children: t });
}
const Lx = 1 * -2741 + -2 * -4679 + -6617 + 0.4, Dx = 49 * 1 + -329 * -8 + -2681 + 0.16, Yx = -6927 + 2313 * -1 + 15 * 616 + 0.2, Fx = 0 + 0.05, Xx = -15177 + -3 * -5059, wr = {};
wr.min = -(3112 + -183 * 17), wr.max = 1;
const Zs = wr, Hs = 5938 + 131 * -2 + -5676, Mx = 0 + 0.3, jx = -95 * 89 + 1139 * -1 + 9594 + 0.2, Jx = 2 * -2333 + 6003 + -7 * 191 + 0.85, Ux = -8602 + -1 * -2509 + -2041 * -3, zx = 9 + 0.8100000000000005, Ui = {};
Ui.minDuration = 1e3, Ui.maxDuration = 2500, Ui.minFrames = 10;
const Uo = Ui, Sr = {};
Sr.max = 100, Sr.min = 10;
const Ws = Sr, Qx = 3302 + -1 * 2582, $x = -711 * 2 + 5 * -354 + 212 * 16, _x = 7527 + 2 * 1834 + 31 * -361, og = "AES-CBC", rg = "RSA-OAEP", qx = "SHA-256", eu = "image/jpeg", tu = -1355 + -3 * 1380 + 5503, nu = 2986 * 1 + 5880 + -8826, iu = "SAM v1.39.3 for idcards", ou = "dot_embedded_bg.wasm", ag = Ii(null), sg = () => {
  const i = zt(ag);
  if (!i)
    throw new Error("Missing provider for CameraOptionsContext");
  return i;
}, ru = (i) => {
  var g, x, C;
  const { cameraFacing: o, licensePath: t, onError: e, onPhotoTaken: n, sessionToken: r, thresholds: a, wasmDirectoryPath: s } = i;
  return {
    onPhotoTaken: n,
    onError: e,
    cameraFacing: o ?? "user",
    wasmDirectoryPath: s,
    licensePath: t,
    sessionToken: r,
    thresholds: {
      faceConfidence: (a == null ? void 0 : a.faceConfidence) ?? Lx,
      minFaceSizeRatio: (a == null ? void 0 : a.minFaceSizeRatio) ?? Dx,
      maxFaceSizeRatio: (a == null ? void 0 : a.maxFaceSizeRatio) ?? Yx,
      sharpnessThreshold: (a == null ? void 0 : a.sharpnessThreshold) ?? Mx,
      brightnessLowThreshold: (a == null ? void 0 : a.brightnessLowThreshold) ?? jx,
      brightnessHighThreshold: (a == null ? void 0 : a.brightnessHighThreshold) ?? Jx,
      outOfBoundsThreshold: (a == null ? void 0 : a.outOfBoundsThreshold) ?? Fx,
      devicePitchAngleThreshold: (a == null ? void 0 : a.devicePitchAngleThreshold) ?? Ux,
      mouth: {
        confidence: ((g = a == null ? void 0 : a.mouth) == null ? void 0 : g.confidence) ?? Xx,
        status: {
          min: ((x = a == null ? void 0 : a.mouth) == null ? void 0 : x.status.min) ?? Zs.min,
          max: ((C = a == null ? void 0 : a.mouth) == null ? void 0 : C.status.max) ?? Zs.max
        }
      },
      leftEye: (a == null ? void 0 : a.leftEye) ?? {
        confidence: Hs
      },
      rightEye: (a == null ? void 0 : a.rightEye) ?? {
        confidence: Hs
      }
    }
  };
}, au = ({ cameraOptions: i, children: o }) => {
  const t = Xe(() => ({
    faceCameraOptions: ru(i)
  }), [i]);
  return /* @__PURE__ */ Z(ag.Provider, { value: t, children: o });
}, su = 63 * 152 + 4826 + -14402 + 0.75, gu = 6549 + -1493 * -5 + 62 * -226, cu = 394 + -3 * 1146 + 2 * 1822, lu = -13505 + -13505 * -1, xu = (i, o) => {
  const t = {};
  t.detail = o, document.dispatchEvent(new CustomEvent(i, t));
}, uo = class uo {
  constructor() {
    j(this, "lastDetails", {});
    j(this, "delayedTime", 1556 * 5 + 1 * -5801 + 1 * -1979);
  }
  static getInstance() {
    return !this._instance && (this._instance = new uo()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 7141 * 1 + -8455 + 1314;
  }
  isDetailChanged(o, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[o]) ? (this.lastDetails[o] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(o, t) {
    this.isDetailChanged(o, t) && xu(o, t);
  }
  dispatchDelayedCustomEventOnChange(o, t, e) {
    const n = performance.now();
    n - this.delayedTime > e && (this.dispatchCustomEventOnChange(o, t), this.delayedTime = n);
  }
};
j(uo, "_instance");
let Qn = uo;
const Wn = Qn.getInstance(), ks = (i, o, t = cu) => {
  const e = {};
  e.instructionCode = o;
  const n = e;
  Wn.dispatchDelayedCustomEventOnChange(i, n, t);
}, Ks = (i, o) => {
  Wn.dispatchCustomEventOnChange(i, o);
}, uu = (i, o) => {
  Wn.dispatchCustomEventOnChange(i, o);
}, Iu = (i, o) => {
  const t = {};
  t.size = o;
  const e = t;
  Wn.dispatchCustomEventOnChange(i, e);
}, du = (i, o, t) => {
  const e = o.confidence < t ? void 0 : o, n = {};
  n.detectedObject = e;
  const r = n;
  Wn.dispatchCustomEventOnChange(i, r);
}, Cu = (i, o, t) => {
  const e = {};
  e.image = t, e.data = {}, e.data.detection = o, e.data.imageResolution = {}, e.data.imageResolution.width = t.width, e.data.imageResolution.height = t.height;
  const n = e;
  Wn.dispatchCustomEventOnChange(i, n);
};
var De = {};
De.VITE_FACE_COUNTLY_APP_KEY = "5f83e83ee4cee1ab6e5bbf86e215644473299675", De.VITE_MAGNIFEYE_COUNTLY_APP_KEY = "d5ca54dabfb1a2c72d7090c9c8980252a879da44", De.VITE_DOCUMENT_COUNTLY_APP_KEY = "065cf6e242fc5e785cd17eebfbfbbd212a33133b", De.VITE_COUNTLY_URL = "https://innovatrics.count.ly", De.VITE_SMILE_COUNTLY_APP_KEY = "d64319129bb0ee02eccfab418edba9629a97d6b6", De.VITE_RSA_PUBLIC_KEY = "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", De.BASE_URL = "/", De.MODE = "production", De.DEV = !1, De.PROD = !0, De.SSR = !1, De.VITE_PACKAGE_VERSION = "6.1.2";
var fu = De;
const hu = () => {
  var i;
  return ((i = fu.VITE_APP_ENV) == null ? void 0 : i.toLowerCase()) === "dev";
}, pu = (i, o, t = eu) => new Promise((e) => {
  i.toBlob((n) => {
    if (!n) throw new Error("Canvas to Blob failed");
    e(n);
  }, t, o);
}), mu = async (i) => pu(i, -5252 + -2581 * 2 + 10504), Au = (i, o) => {
  const t = document.createElement("canvas");
  t.width = o.width, t.height = o.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(i, o.shiftX, o.shiftY, o.width, o.height, -686 + -11 * -506 + -4880, -2472 + 1 * 6783 + -4311, t.width, t.height), t;
}, bu = (i) => {
  const o = i.getContext("2d");
  if (!o) throw new Error("getImageDataForSam ctx error");
  const { data: t } = o.getImageData(0, 0, i.width, i.height);
  return t;
}, gg = (i, o, t, e) => {
  const n = i.getContext("2d");
  n && (n.beginPath(), e ? (n.fillStyle = t, n.fillRect(o.topLeft.x, o.topLeft.y, o.width, o.height)) : (n.strokeStyle = t, n.rect(o.topLeft.x, o.topLeft.y, o.width, o.height)), n.stroke());
}, zo = (i, o, t) => {
  const { height: e, shiftX: n, shiftY: r, width: a } = o, s = {};
  s.x = n, s.y = r;
  const g = {};
  g.topLeft = s, g.width = a, g.height = e, g.color = t, gg(i, g, t);
}, jn = (i, o, t, e = -6736 * 1 + 2 * -4171 + -1 * -15078) => {
  const n = i.getContext("2d");
  n && (n.fillStyle = t, n.fillRect(o.x + e, o.y + e, 119 * 3 + -7 * -1346 + -28 * 349, 853 * -1 + -2354 + -1607 * -2), n.beginPath());
}, yu = (i, o) => {
  const t = i.getContext("2d");
  t && t.drawImage(o, 5597 + -4282 * -2 + -14161, 5015 * -1 + -1 * -5311 + 74 * -4);
}, vu = (i, o) => {
  if (hu()) {
    const t = {};
    t.candidateSelectionImages = o;
    const e = t;
    Qn.getInstance().dispatchCustomEventOnChange(i, e);
  }
}, wu = (i, o) => {
  const { cameraResolution: t, shouldMirror: e } = o;
  be(() => {
    if (!t) return;
    const n = {};
    n.cameraResolution = t, n.isMirroring = e, uu(i, n);
  }, [t, e, i]);
}, cg = (i) => i.length < -4476 + 121 * 37 ? -10 * -388 + 1 * -3054 + -118 * 7 : i.reduce((t, e) => t + e, -227 * -33 + -5164 + -2327) / i.length, fi = (i) => Number.parseFloat(i.toFixed(3)), Su = (i) => {
  const o = i.getContext("2d");
  o && o.clearRect(-33 * -171 + 26 * -384 + 4341, 1132 + -1802 * -1 + -2934, o.canvas.width, o.canvas.height);
}, So = (i, o) => Math.min(i, o), Bu = (i, o) => {
  const t = So(o.width, o.height);
  return fi(i * t);
}, lg = ({ height: i, width: o }) => {
  const t = So(o, i), e = t / (-3 * -1704 + 8494 + -13603) * (-4907 + -639 * 4 + -1 * -7467);
  if (o > i) {
    const r = {};
    return r.width = e, r.height = t, r;
  }
  const n = {};
  return n.width = t, n.height = e, n;
}, xg = ({ height: i, width: o }) => {
  const t = So(o, i) * su, e = (o - t) / 2, n = (i - t) / (2 * -3361 + -479 + -1029 * -7), r = {};
  return r.shiftX = e, r.shiftY = n, r.width = t, r.height = t, r;
}, Gu = (i) => {
  const { height: o, shiftX: t, shiftY: e, width: n } = xg(i), r = {};
  return r.shiftX = t / i.width, r.shiftY = e / i.height, r.width = n / i.width, r.height = o / i.height, r;
}, Zu = (i, o) => Bu(i, o) * gu, Hu = "@innovatrics/dot-common-auto-capture", Wu = "6.1.2", ku = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, Ku = {
  "@dot/proto-files": "2.0.4",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, Ou = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.1"
}, Vu = {
  name: Hu,
  private: !0,
  version: Wu,
  scripts: ku,
  dependencies: Ku,
  devDependencies: Ou
}, ug = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), Os = () => {
  const i = /Android/i.test(navigator.userAgent), o = /Firefox/i.test(navigator.userAgent);
  return i && o;
}, Tu = () => {
  const i = navigator.userAgent.includes("Chrome"), o = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return i && o ? !1 : o;
}, Br = (i) => new Promise((o) => {
  setTimeout(o, i);
}), cn = (i) => JSON.parse(JSON.stringify(i, (o, t) => typeof t == "number" ? fi(t) : t)), Ig = () => Vu.version, dg = (i) => new URL(i).hostname.replace("www.", ""), Eu = () => dg(window.location.href) === "localhost", Vi = (i) => Object.entries(i).map(([o, t]) => encodeURIComponent(o) + "=" + encodeURIComponent(t)).join("&"), Ru = (i, o) => {
  const t = i && performance.now() - i;
  return o >= Uo.minFrames ? t > Uo.minDuration : t > Uo.maxDuration;
}, Pu = (i, o) => JSON.stringify(i) === JSON.stringify(o) ? o : i;
function Nu(i, o) {
  let t;
  return (...e) => {
    const n = () => {
      clearTimeout(t), t = void 0, i(...e);
    };
    t === void (-5 * -323 + 1 * -5197 + -3 * -1194) && (t = setTimeout(n, o));
  };
}
const Lu = (i) => i === q0.CONTROL ? !ug() : !0, Du = (i, o) => {
  const { appState: t, handleAppStateChange: e, handleError: n, isCameraReady: r } = Ci(), [a, s] = Fe(), g = Xe(() => {
    const C = r && o && o.isStreaming && o.getCameraSettings().facingMode;
    return C ? a ?? C === "user" : a ?? Lu(i);
  }, [o, a, i, r]);
  be(() => {
    const C = () => {
      t !== Ye.LOADING && e(Ye.RUNNING);
    }, d = () => {
      s(a === void 0 ? !g : !a);
    }, m = async () => {
      if (o) {
        e(Ye.LOADING);
        try {
          await o.switchCamera(), e(Ye.RUNNING);
        } catch (w) {
          if (w instanceof Error) {
            n(re.fromCameraError(w));
            return;
          }
        }
        s(void 0);
      }
    }, p = (w) => {
      var H;
      switch ((H = w.detail) == null ? void 0 : H["instruction"]) {
        case ji.CONTINUE_DETECTION:
          C();
          break;
        case ji.TOGGLE_MIRROR:
          d();
          break;
        case ji.SWITCH_CAMERA:
          m();
          break;
        default:
          return;
      }
    };
    return document.addEventListener(i, p), () => {
      document.removeEventListener(i, p);
    };
  }, [t, o, n, a, e, g, i]);
  const x = {};
  return x.shouldMirror = g, x;
};
class Yu {
  constructor() {
    j(this, "canvasElement");
    j(this, "context");
    this.canvasElement = document.createElement("canvas"), this.context = this.canvasElement.getContext("2d");
  }
  cloneMutable(o) {
    this.canvasElement.width = o.width, this.canvasElement.height = o.height, yu(this.canvasElement, o);
  }
}
async function Cg() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Qo() {
  return (await Cg()).filter((o) => o.kind === "videoinput");
}
function $o(i) {
  i.getTracks().forEach((t) => t.stop());
}
function Vs(i) {
  return i.getVideoTracks()[-2872 + -1 * 2467 + 5339];
}
const zi = {};
zi.width = 1920, zi.height = 1080, zi.facingMode = tg.FRONT;
const Fu = zi;
var nt;
class fg {
  constructor({ defaultVideoConstrains: o = Fu, minCameraShorterSide: t = Qx } = {}) {
    j(this, "options");
    ce(this, nt, null);
    const e = {};
    e.defaultVideoConstrains = o, e.minCameraShorterSide = t, this.options = e;
  }
  get mediaStream() {
    return F(this, nt);
  }
  get videoTrack() {
    return F(this, nt) ? Vs(F(this, nt)) : void (-5 * 762 + 8 * 67 + 2 * 1637);
  }
  get isCameraActive() {
    var o;
    return !!((o = F(this, nt)) != null && o.active);
  }
  static async requestPermission() {
    const o = {};
    o.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(o);
    $o(t);
  }
  async open(o = {}) {
    Os() && await Br(22 * -70 + 6362 * 1 + -2186 * 2), se(this, nt, await navigator.mediaDevices.getUserMedia(o)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const o = await Qo();
    if (o.length <= -1755 + 2 * 878) return;
    const t = this.videoTrack.getConstraints(), e = this.videoTrack.getSettings(), n = o.findIndex((s) => s.deviceId === e.deviceId), r = o[n + (-4786 * -2 + -172 * -22 + -13355)] ?? o[-37 * 66 + 8839 + -6397 * 1], a = this.getConstraints(t, r);
    await this.open(a);
  }
  close() {
    F(this, nt) && ($o(F(this, nt)), se(this, nt, null));
  }
  async getProperties() {
    const o = await this.getDeviceName(), t = this.getSettings(), e = await this.getAvailableCamerasInfo(), n = { ...t };
    n.deviceName = o;
    const r = {};
    return r.currentCameraProperties = n, r.availableCameraProperties = e, r;
  }
  getSettings() {
    if (!this.videoTrack) throw Error("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  getResolution() {
    const o = this.getSettings();
    if (!o.width) throw new re("Video width is undefined");
    if (!o.height) throw new re("Video height is undefined");
    const t = {};
    return t.width = o.width, t.height = o.height, t;
  }
  async getDeviceName() {
    const o = this.getSettings(), t = await Cg(), e = t.find((n) => n.deviceId === o.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(o) {
    return o === tg.FRONT ? void (13252 + 2 * -6626) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return ug() ? (await Qo()).find((e) => e.label.includes("back") && e.label.includes("0")) : void (13 * 394 + 5951 + -3 * 3691);
  }
  async getAvailableCamerasInfo() {
    const o = [], t = await Qo();
    for (const e of t) {
      Os() && await Br(-7 * 213 + -8133 + 3358 * 3);
      try {
        const n = {};
        n.deviceId = e.deviceId, n.width = 480;
        const r = {};
        r.video = n;
        const a = await navigator.mediaDevices.getUserMedia(r), s = Vs(a);
        if (!s) throw new Error("Video track not found! (device id: " + e.deviceId + ")");
        const g = s.getSettings(), x = { ...g };
        x.deviceName = s.label;
        const C = {};
        C.cameraProperties = x;
        const d = C;
        o.push(d), $o(a);
      } catch (n) {
        n instanceof Error && re.logError(n);
      }
    }
    return o;
  }
  getConstraints(o, t) {
    const e = { ...this.options.defaultVideoConstrains, ...o };
    e.deviceId = t ? { exact: t.deviceId } : void (-527 * 5 + -5221 + 7856);
    const n = {};
    return n.video = e, n.audio = !1, n;
  }
  checkVideoTrackSettings() {
    var e;
    const o = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(o != null && o.height) || !(o != null && o.width))
      throw this.close(), new re("Could not init camera settings");
    if (typeof this.options.minCameraShorterSide != "number") return;
    if (Math.min(o == null ? void 0 : o.width, o == null ? void 0 : o.height) < this.options.minCameraShorterSide)
      throw this.close(), new re("Could not init video because of low camera resolution: " + o.width + "x" + o.height + ".");
  }
}
nt = new WeakMap();
class Xu {
  constructor(o, t) {
    j(this, "canvas");
    this.videoHandler = o, this.cameraHandler = t, this.canvas = new Yu();
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async startVideoStream(o = {}) {
    await fg.requestPermission();
    const t = await this.cameraHandler.getBestCameraInfo(o.facingMode), e = this.cameraHandler.getConstraints(o, t);
    await this.cameraHandler.open(e), Tu() && (this.cameraHandler.close(), await this.cameraHandler.open(e)), await this.mountVideoStream();
  }
  takePhoto() {
    var t;
    if (!this.cameraHandler.videoTrack) throw Error("Video track must be initialized to take photo");
    const o = (t = this.cameraHandler.videoTrack) == null ? void 0 : t.getSettings();
    if (!(o != null && o.width)) throw new re("Cant take photo - video width is undefined");
    if (!(o != null && o.height)) throw new re("Cant take photo - video height is undefined");
    if (!this.canvas.context) throw new re("Cant take photo - cant create context");
    return this.canvas.canvasElement.width = o.width, this.canvas.canvasElement.height = o.height, this.canvas.context.drawImage(this.videoHandler.videoElement, 3188 * 1 + 7967 + -115 * 97, 0), { image: this.canvas.canvasElement, timestamp: Date.now() };
  }
  stopStreaming() {
    this.cameraHandler.close(), this.videoHandler.stop();
  }
  async switchCamera() {
    await this.cameraHandler.toggle(), await this.mountVideoStream();
  }
  async getCameraProperties() {
    return this.cameraHandler.getProperties();
  }
  getCameraSettings() {
    return this.cameraHandler.getSettings();
  }
  getCameraResolution() {
    return this.cameraHandler.getResolution();
  }
  async getDeviceName() {
    return this.cameraHandler.getDeviceName();
  }
  async mountVideoStream() {
    if (!this.cameraHandler.mediaStream) throw Error("Media Stream must be initialized to stream");
    await this.videoHandler.play(this.cameraHandler.mediaStream);
  }
}
var ht;
class Mu {
  constructor(o) {
    ce(this, ht);
    se(this, ht, o);
  }
  get videoElement() {
    return F(this, ht);
  }
  async play(o) {
    F(this, ht).srcObject = o, await F(this, ht).play();
  }
  stop() {
    F(this, ht).srcObject = null;
  }
  hasSrcObject() {
    return !!F(this, ht).srcObject;
  }
}
ht = new WeakMap();
function ju(i, o) {
  const t = yt(), { handleError: e, setIsCameraReady: n } = Ci(), [r, a] = Fe(), s = mn((x) => {
    a((C) => Pu(x, C));
  }, []);
  be(() => ((async () => {
    if (!i.current) {
      e(new re("Something went wrong during video initialization"));
      return;
    }
    const C = new Mu(i.current), d = new fg(), m = new Xu(C, d);
    try {
      const p = {};
      p.facingMode = o, await m.startVideoStream(p);
    } catch (p) {
      if (p instanceof Error) {
        e(re.fromCameraError(p));
        return;
      }
    }
    n(!0), s(m.getCameraResolution()), t.current = m;
  })(), function() {
    t.current && t.current.stopStreaming(), n(!1);
  }), [o, e, n, i, s]);
  const g = {};
  return g.cameraService = t.current, g.cameraResolution = r, g.onCameraResolutionChange = s, g;
}
function Ju(i, o) {
  be(() => {
    function t() {
      i.current && Iu(o, i.current.getBoundingClientRect());
    }
    return t(), window.addEventListener("resize", t), () => {
      window.removeEventListener("resize", t);
    };
  }, [i, o]);
}
class ra extends Array {
  constructor(t) {
    super();
    j(this, "size");
    this.size = t;
  }
  pushFixed(...t) {
    if (t.length > this.size) {
      const e = t.slice(-this.size);
      this.push(...e);
      return;
    }
    this.length === this.size && this.splice(-76 * -83 + 1 * -7819 + -1 * -1511, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(12418 + 12418 * -1);
  }
}
const Uu = (i, o) => {
  const { height: t, shiftX: e, shiftY: n, width: r } = o;
  return !(i.x < e || i.x > e + r || i.y < n || i.y > n + t);
}, zu = (i, o) => Object.values(i).every((t) => Uu(t, o));
function Qu(i) {
  return fi(Math.abs(i));
}
const $u = () => {
  const [i, o] = Fe(null), t = yt(new ra(-2969 * 2 + -7 * -1387 + -14 * 269));
  function e(r) {
    const { z: a } = r.accelerationIncludingGravity || {};
    if (!a) return;
    t.current.pushFixed(Qu(a));
    const s = fi(cg(t.current)), g = {};
    g.z = s, o(g);
  }
  be(() => (window.addEventListener("devicemotion", Nu(e, nu), !0), () => {
    window.removeEventListener("devicemotion", e, !0);
  }), []);
  const n = {};
  return n.acceleration = i, n;
};
var _u = Symbol.for("preact-signals");
function aa() {
  if (In > 5010 + -413 * -13 + -10378)
    In--;
  else {
    for (var i, o = !1; void (-12 * 144 + 8 * -1096 + 4 * 2624) !== Jn; ) {
      var t = Jn;
      for (Jn = void (9686 + -8168 * -1 + -17854), Gr++; void (-2639 + 13 * 203) !== t; ) {
        var e = t.o;
        if (t.o = void 0, t.f &= -(-1601 + 1 * 9323 + -7719), !(-6236 * -1 + 3944 + -10172 & t.f) && mg(t)) try {
          t.c();
        } catch (n) {
          !o && (i = n, o = !0);
        }
        t = e;
      }
    }
    if (Gr = 6 * -1579 + -4 * -303 + 153 * 54, In--, o) throw i;
  }
}
var te = void (-34 * 275 + 3257 + 1 * 6093), Jn = void (2967 * -2 + -7581 + 265 * 51), In = 5 * 1347 + -7083 + 6 * 58, Gr = -8751 + -4 * -370 + 7271, ao = 4 * 904 + -179 * -5 + -1 * 4511;
function hg(i) {
  if (void (-1241 + -1241 * -1) !== te) {
    var o = i.n;
    if (void (11604 + 11604 * -1) === o || o.t !== te)
      return o = { i: 0, S: i, p: te.s, n: void (-233 * -13 + 4832 + 1 * -7861), t: te, e: void (-86 * 14 + -4042 * 1 + 5246), x: void (-6932 * 1 + -3177 + 10109), r: o }, void (8689 * 1 + 1819 + -142 * 74) !== te.s && (te.s.n = o), te.s = o, i.n = o, -7207 + 4897 * -1 + -4 * -3034 & te.f && i.S(o), o;
    if (-(9366 + -1 * 5683 + -526 * 7) === o.i)
      return o.i = -4491 + -1772 * 2 + -1 * -8035, void (-494 + -1 * -613 + -119) !== o.n && (o.n.p = o.p, void (-2530 + 13 * -34 + 1 * 2972) !== o.p && (o.p.n = o.n), o.p = te.s, o.n = void (-1 * -228 + 723 + -951), te.s.n = o, te.s = o), o;
  }
}
function ve(i) {
  this.v = i, this.i = 1 * -6439 + 9161 * -1 + -52 * -300, this.n = void (-434 + -3983 * -1 + -3549), this.t = void (1238 * 5 + -673 * 1 + -5517 * 1);
}
ve.prototype.brand = _u, ve.prototype.h = function() {
  return !(521 * 3 + -9173 + 7610);
}, ve.prototype.S = function(i) {
  this.t !== i && void (-1861 * -1 + 4225 + -6086) === i.e && (i.x = this.t, void (6597 + 857 * 3 + -16 * 573) !== this.t && (this.t.e = i), this.t = i);
}, ve.prototype.U = function(i) {
  if (void (34 * 104 + 6492 + -10028) !== this.t) {
    var o = i.e, t = i.x;
    void (287 * -1 + 2535 + 8 * -281) !== o && (o.x = t, i.e = void (5997 + -6 * -1619 + -5237 * 3)), void (1103 * 4 + -9169 * -1 + 9 * -1509) !== t && (t.e = o, i.x = void 0), i === this.t && (this.t = t);
  }
}, ve.prototype.subscribe = function(i) {
  var o = this;
  return ga(function() {
    var t = o.value, e = te;
    te = void (-6786 + -411 * 1 + 7197 * 1);
    try {
      i(t);
    } finally {
      te = e;
    }
  });
}, ve.prototype.valueOf = function() {
  return this.value;
}, ve.prototype.toString = function() {
  return this.value + "";
}, ve.prototype.toJSON = function() {
  return this.value;
}, ve.prototype.peek = function() {
  var i = te;
  te = void (-1374 + 1 * -9241 + 10615);
  try {
    return this.value;
  } finally {
    te = i;
  }
}, Object.defineProperty(ve.prototype, "value", { get: function() {
  var i = hg(this);
  return void (-1177 + -1 * -1177) !== i && (i.i = this.i), this.v;
}, set: function(i) {
  if (i !== this.v) {
    if (Gr > 1 * -7559 + 1 * -6291 + 13950) throw new Error("Cycle detected");
    this.v = i, this.i++, ao++, In++;
    try {
      for (var o = this.t; void (-2637 * 3 + 5582 + 2329) !== o; o = o.x) o.t.N();
    } finally {
      aa();
    }
  }
} });
function pg(i) {
  return new ve(i);
}
function mg(i) {
  for (var o = i.s; o !== void 0; o = o.n) if (o.S.i !== o.i || !o.S.h() || o.S.i !== o.i) return !(-5653 * -1 + -4388 * 2 + 3123 * 1);
  return !(-1321 * -5 + -35 * -157 + -4033 * 3);
}
function Ag(i) {
  for (var o = i.s; void (-27 * 362 + -3095 * -2 + -56 * -64) !== o; o = o.n) {
    var t = o.S.n;
    if (t !== void 0 && (o.r = t), o.S.n = o, o.i = -(-1 * 3930 + -5482 * -1 + -1551), void (-9990 + -695 * 1 + 1 * 10685) === o.n) {
      i.s = o;
      break;
    }
  }
}
function bg(i) {
  for (var o = i.s, t = void (-8214 + -6679 * -1 + 1535); void (-78 * -13 + -3238 + 8 * 278) !== o; ) {
    var e = o.p;
    -(5933 + -13 * -315 + -1 * 10027) === o.i ? (o.S.U(o), void (-7 * 760 + 1552 + 3768) !== e && (e.n = o.n), o.n !== void 0 && (o.n.p = e)) : t = o, o.S.n = o.r, void (1 * -1529 + 3889 * -1 + -7 * -774) !== o.r && (o.r = void (-3 * 1383 + 7228 + 3079 * -1)), o = e;
  }
  i.s = t;
}
function ln(i) {
  ve.call(this, void (7751 + -5 * -94 + -8221)), this.x = i, this.s = void (5496 + 2 * -2748), this.g = ao - (-1 * -6024 + -7266 + 1243), this.f = 2 * 2497 + 3181 * 3 + -14533;
}
(ln.prototype = new ve()).h = function() {
  if (this.f &= -(-442 * -1 + -304 + -135), 1 & this.f) return !(-1 * 9001 + -2863 + 2373 * 5);
  if (6431 * 1 + -5802 * -1 + 147 * -83 == (-9067 + -10 * 561 + -14713 * -1 & this.f)) return !(-915 * -2 + -1195 * 1 + -127 * 5);
  if (this.f &= -(-7 * 22 + -1389 * 6 + 8493), this.g === ao) return !(1153 * -7 + -7635 + -1 * -15706);
  if (this.g = ao, this.f |= -526 + -1 * -527, this.i > 0 && !mg(this)) return this.f &= -(-4377 * -2 + 3996 + -12748), !0;
  var i = te;
  try {
    Ag(this), te = this;
    var o = this.x();
    (-2759 + -925 * -3 & this.f || this.v !== o || -4733 + -2281 * 2 + 9295 === this.i) && (this.v = o, this.f &= -(-52 * -3 + 176 + 35 * -9), this.i++);
  } catch (t) {
    this.v = t, this.f |= -379 * 7 + 139 * -59 + 10870, this.i++;
  }
  return te = i, bg(this), this.f &= -2, !(-5378 + -2 * -2689);
}, ln.prototype.S = function(i) {
  if (void (-5921 + 4778 * 2 + -3635) === this.t) {
    this.f |= -7597 + -131 * 62 + 15755;
    for (var o = this.s; void (1 * -4527 + -3678 + 8205) !== o; o = o.n) o.S.S(o);
  }
  ve.prototype.S.call(this, i);
}, ln.prototype.U = function(i) {
  if (void (1 * -9183 + -2576 * -1 + -1 * -6607) !== this.t && (ve.prototype.U.call(this, i), this.t === void 0)) {
    this.f &= -(-9715 + -4 * -2437);
    for (var o = this.s; void (15 * -628 + -9841 + 19261) !== o; o = o.n) o.S.U(o);
  }
}, ln.prototype.N = function() {
  if (!(4159 * -1 + 5277 + -1116 & this.f)) {
    this.f |= 269 * 19 + 3389 + -8494;
    for (var i = this.t; void (-4915 + -983 * -5) !== i; i = i.x) i.t.N();
  }
}, Object.defineProperty(ln.prototype, "value", { get: function() {
  if (26 * -212 + -359 * 1 + 5872 & this.f) throw new Error("Cycle detected");
  var i = hg(this);
  if (this.h(), void (1778 * -4 + -3851 + 10963) !== i && (i.i = this.i), 1035 * 5 + 6820 + -11979 & this.f) throw this.v;
  return this.v;
} });
function qu(i) {
  return new ln(i);
}
function yg(i) {
  var o = i.u;
  if (i.u = void (2 * -2335 + -5931 + 10601), typeof o == "function") {
    In++;
    var t = te;
    te = void (-472 * -20 + 5647 + -15087);
    try {
      o();
    } catch (e) {
      throw i.f &= -(-1 * -6626 + 4118 * 1 + -10742), i.f |= 5493 + -99 * 43 + 4 * -307, sa(i), e;
    } finally {
      te = t, aa();
    }
  }
}
function sa(i) {
  for (var o = i.s; void (3829 + 19 * -218 + 313) !== o; o = o.n) o.S.U(o);
  i.x = void (-5 * 1605 + -29 * -43 + 6778), i.s = void (-971 * 2 + 392 * -2 + 2726), yg(i);
}
function eI(i) {
  if (te !== this) throw new Error("Out-of-order effect");
  bg(this), te = i, this.f &= -2, -4 * 1948 + -5 * 1604 + 15820 & this.f && sa(this), aa();
}
function Ln(i) {
  this.x = i, this.u = void (4 * 541 + -3455 * -1 + 5619 * -1), this.s = void (-6 * 1310 + 4 * -212 + 8708), this.o = void (-11 * -124 + -982 + -382), this.f = 149 * -37 + -7387 + 12932;
}
Ln.prototype.c = function() {
  var i = this.S();
  try {
    if (-17 * -502 + -262 * 23 + 500 * -5 & this.f || void (2639 + -212 * 19 + 1 * 1389) === this.x) return;
    var o = this.x();
    typeof o == "function" && (this.u = o);
  } finally {
    i();
  }
}, Ln.prototype.S = function() {
  if (-1 * 3751 + 4978 + -1226 & this.f) throw new Error("Cycle detected");
  this.f |= 229 * 25 + -5535 + -189, this.f &= -(11 * 161 + -4148 + 2386), yg(this), Ag(this), In++;
  var i = te;
  return te = this, eI.bind(this, i);
}, Ln.prototype.N = function() {
  !(17897 + 15 * -1193 & this.f) && (this.f |= -1 * 2301 + 6241 + -3938, this.o = Jn, Jn = this);
}, Ln.prototype.d = function() {
  this.f |= -3 * 229 + 79 * 23 + 2 * -561, 15 * -461 + -3456 * 1 + 10372 & this.f || sa(this);
};
function ga(i) {
  var o = new Ln(i);
  try {
    o.c();
  } catch (t) {
    throw o.d(), t;
  }
  return o.d.bind(o);
}
var _o;
function un(i, o) {
  L[i] = o.bind(null, L[i] || function() {
  });
}
function Ti(i) {
  _o && _o(), _o = i && i.S();
}
function vg(i) {
  var o = this, t = i.data, e = wg(t);
  e.value = t;
  var n = Xe(function() {
    for (var r = o.__v; r = r.__; ) if (r.__c) {
      r.__c.__$f |= 4;
      break;
    }
    return o.__$u.c = function() {
      var a;
      !n0(n.peek()) && -334 * -13 + 398 * -1 + 3941 * -1 === ((a = o.base) == null ? void (-9559 + -956 * -7 + 2867) : a.nodeType) ? o.base.data = n.peek() : (o.__$f |= -5373 + -1720 * 5 + -2329 * -6, o.setState({}));
    }, qu(function() {
      var a = e.value.value;
      return -11630 + 11630 * 1 === a ? -1 * -2947 + -613 * -5 + -6012 : !(396 * 8 + -6e3 + 944 * 3) === a ? "" : a || "";
    });
  }, []);
  return n.value;
}
vg.displayName = "_st";
var Zr = {};
Zr.configurable = !(6664 + -5754 * 1 + -455 * 2), Zr.value = void (-795 * -1 + 2488 * 4 + 1 * -10747);
var Hr = {};
Hr.configurable = !0, Hr.value = vg;
var Wr = {};
Wr.configurable = !(-2523 + -1451 * -2 + -379), Wr.get = function() {
  var i = {};
  return i.data = this, i;
};
var kr = {};
kr.configurable = !(-3409 + 20 * 327 + 1 * -3131), kr.value = 1;
var En = {};
En.constructor = Zr, En.type = Hr, En.props = Wr, En.__b = kr, Object.defineProperties(ve.prototype, En), un("__b", function(i, o) {
  if (typeof o.type == "string") {
    var t, e = o.props;
    for (var n in e) if (n !== "children") {
      var r = e[n];
      r instanceof ve && (t || (o.__np = t = {}), t[n] = r, e[n] = r.peek());
    }
  }
  i(o);
}), un("__r", function(i, o) {
  Ti();
  var t, e = o.__c;
  e && (e.__$f &= -(-5178 + 140 * 37), (t = e.__$u) === void 0 && (e.__$u = t = function(n) {
    var r;
    return ga(function() {
      r = this;
    }), r.c = function() {
      e.__$f |= 8 * 291 + -1 * 3478 + 1151, e.setState({});
    }, r;
  }())), Ti(t), i(o);
}), un("__e", function(i, o, t, e) {
  Ti(), i(o, t, e);
}), un("diffed", function(i, o) {
  Ti();
  var t;
  if (typeof o.type == "string" && (t = o.__e)) {
    var e = o.__np, n = o.props;
    if (e) {
      var r = t.U;
      if (r) for (var a in r) {
        var s = r[a];
        void (752 * -8 + 1290 + 4726 * 1) !== s && !(a in e) && (s.d(), r[a] = void (-2 * 3475 + -2261 + -61 * -151));
      }
      else t.U = r = {};
      for (var g in e) {
        var x = r[g], C = e[g];
        void (-346 + -631 * -14 + -8488) === x ? (x = tI(t, g, C, n), r[g] = x) : x.o(C, n);
      }
    }
  }
  i(o);
});
function tI(i, o, t, e) {
  var n = o in i && i.ownerSVGElement === void 0, r = pg(t);
  return { o: function(a, s) {
    r.value = a, e = s;
  }, d: ga(function() {
    var a = r.value.value;
    e[o] !== a && (e[o] = a, n ? i[o] = a : a ? i.setAttribute(o, a) : i.removeAttribute(o));
  }) };
}
un("unmount", function(i, o) {
  if (typeof o.type == "string") {
    var t = o.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void (5398 + -2 * 2699);
        for (var n in e) {
          var r = e[n];
          r && r.d();
        }
      }
    }
  } else {
    var a = o.__c;
    if (a) {
      var s = a.__$u;
      s && (a.__$u = void (-13 * -401 + 4482 + -9695), s.d());
    }
  }
  i(o);
}), un("__h", function(i, o, t, e) {
  (e < -961 + 4175 * 1 + -3211 || -4032 * -1 + 2965 * 1 + 4 * -1747 === e) && (o.__$f |= -3879 + 722 * 1 + -27 * -117), i(o, t, e);
}), Qe.prototype.shouldComponentUpdate = function(i, o) {
  var t = this.__$u;
  if (!(t && t.s !== void 0 || 1 * 9962 + -2482 + -7476 & this.__$f)) return !0;
  if (-41 * 182 + -1 * -7726 + -261 & this.__$f) return !(-7213 + 2 * -2777 + -12767 * -1);
  for (var e in o) return !(-96 * -45 + 5485 + -9805);
  for (var n in i) if (n !== "__source" && i[n] !== this.props[n]) return !(-2399 + -1 * -2399);
  for (var r in this.props) if (!(r in i)) return !(4062 + 79 * -125 + 5813);
  return !(15123 + 2 * -7561);
};
function wg(i) {
  return Xe(function() {
    return pg(i);
  }, []);
}
function nI({ analytics: i, cameraFacing: o, controller: t, createProtoMessage: e, onPhotoTaken: n, sessionToken: r }) {
  const a = yt(null), { isLicenseValidated: s } = oa(), { appState: g, handleAppStateChange: x, handleError: C } = Ci(), { cameraResolution: d, cameraService: m, onCameraResolutionChange: p } = ju(a, o), w = wg(void (-9444 + 56 * -119 + 4 * 4027));
  be(() => {
    m != null && m["isStreaming"] && (t != null && t["isDetectorInitialized"]) && s && x(Ye.RUNNING);
  }, [m == null ? void 0 : m["isStreaming"], t == null ? void 0 : t["isDetectorInitialized"], x, s]), be(() => {
    if (g !== Ye.RUNNING) return;
    if (!m || !t) throw new re("Cannot start detection");
    let E = -1 * 8955 + 69 * 47 + 5712, S = !1, W = -3577 + 1 * -5245 + -11 * -802;
    const N = new ra(30);
    t.clearImagesForDuplicateDetection();
    async function $({ cameraService: G, canvasImage: J, controller: ue, detection: U, detectionRecord: Ie, onPhotoTaken: de }) {
      const we = {};
      we.width = J.width, we.height = J.height;
      const qe = we, ae = await mu(J), Se = await G.getCameraProperties(), Ke = { ...Se, detectionRecord: Ie, hashedDetectedImagesWithTimestamp: ue.getImagesForDuplicateDetection() }, je = {};
      je.sessionToken = r, je.web = Ke;
      const Oe = je, fe = await e(ae, Oe), Ge = {};
      Ge.detection = U, Ge.imageResolution = qe;
      const Ve = {};
      Ve.image = ae, Ve.data = Ge;
      const he = Ve, Ze = {};
      Ze.imageData = he, Ze.content = fe, Ze.webMetadata = Ke, Ze.controller = ue, de(Ze);
    }
    async function M({ cameraService: G, controller: J }) {
      const ue = Date.now();
      for (; G.isStreaming && !S; ) {
        if (Ru(E, W)) {
          const { detection: Oe, image: fe } = J.getBestImage() || {}, Ge = J.getDetectionRecord();
          if (fe && Oe) {
            const Ve = Date.now(), he = cg(N), Ze = {};
            Ze.width = fe.width, Ze.height = fe.height, i == null || i.trackCaptureProcess({ detection: Oe, imageResolution: Ze, deviceName: await G.getDeviceName(), averageFps: he, captureProcessDurationInMs: Ve - ue, facingMode: G.getCameraSettings().facingMode, instructionSet: await J.getInstructionSet() }), x(Ye.WAITING);
            const Te = {};
            Te.cameraService = G, Te.controller = J, Te.canvasImage = fe, Te.detection = Oe, Te.detectionRecord = Ge, Te.onPhotoTaken = n, await $(Te), J.restart();
          } else C(new re("Something went wrong during capturing an image"));
          return;
        }
        const U = G.takePhoto(), Ie = {};
        Ie.width = U.image.width, Ie.height = U.image.height;
        const de = Ie;
        let we;
        try {
          we = await J.processImage(U);
        } catch (Oe) {
          Oe instanceof Error && C(re.fromCameraError(Oe));
          return;
        }
        const qe = Date.now(), ae = qe - U.timestamp, Se = fi((-1 * -6621 + -1917 + 8 * -463) / ae);
        N.pushFixed(Se);
        const Ke = {};
        Ke.processedImage = we, Ke.detectionTime = ae, Ke.fps = Se, Ke.resolution = de, Ke.samVersion = J.samVersion;
        const je = Ke;
        w.value = je, we.isInCandidateSelection && (E === -3364 * -1 + 1235 + 4599 * -1 && (E = performance.now()), W++), p(de), await Br(Math.max(Ws.max - ae, Ws.min));
      }
    }
    const Y = {};
    return Y.controller = t, Y.cameraService = m, M(Y), () => {
      S = !0;
    };
  }, [i, e, g, m, t, x, C, n, p, w, r]);
  const H = {};
  return H.videoRef = a, H.cameraResolution = d, H.cameraService = m, H.detectionDetails = w, H;
}
const ca = (i) => {
  const { height: o, width: t } = lg(i), e = (i.width - t) / (14243 + 141 * -101), n = (i.height - o) / 2, r = {};
  return r.shiftX = e, r.shiftY = n, r.width = t, r.height = o, r;
}, Sg = (i, o) => {
  const { height: t, width: e } = lg(i), n = So(i.width, i.height), r = e - n * o * (-9506 + -4 * -2377), a = t - n * o * (-7896 + 1 * 7898), s = (i.width - r) / (2474 * 3 + 2849 * -1 + -4571), g = (i.height - a) / (2 * -773 + 5324 + -944 * 4), x = {};
  return x.shiftX = s, x.shiftY = g, x.width = r, x.height = a, x;
}, sn = (i, o) => {
  const { shiftX: t, shiftY: e } = ca(i), n = {};
  return n.x = o.x + t, n.y = o.y + e, n;
}, iI = (i, o) => ({ ...o, leftEye: { ...o.leftEye, center: sn(i, o.leftEye.center) }, rightEye: { ...o.rightEye, center: sn(i, o.rightEye.center) }, mouth: { ...o.mouth, center: sn(i, o.mouth.center) }, topLeft: sn(i, o.topLeft), bottomRight: sn(i, o.bottomRight), faceCenter: sn(i, o.faceCenter) }), Bg = (i, o) => {
  const { faceCenter: t, faceSize: e } = i, n = Zu(e, o), r = {};
  r.x = t.x, r.y = t.y - n;
  const a = {};
  a.x = t.x + n, a.y = t.y;
  const s = {};
  s.x = t.x, s.y = t.y + n;
  const g = {};
  g.x = t.x - n, g.y = t.y;
  const x = {};
  return x.top = r, x.right = a, x.bottom = s, x.left = g, cn(x);
}, oI = (i, o) => {
  const { bottomRight: t, faceCenter: e, topLeft: n } = o, r = {
    topLeft: n,
    width: t.x - n.x,
    height: t.y - n.y
  };
  gg(i, r, "rgba(255, 0, 0, 0.3)", !0), jn(i, e, "lime");
}, rI = (i, o, t) => {
  const e = Bg(o, t);
  Object.values(e).map((n) => jn(i, n, "orange"));
}, aI = ({ appTier: i, cameraResolution: o, detectionDetails: t, isImageMirror: e }) => {
  const {
    faceCameraOptions: { thresholds: n }
  } = sg(), r = yt(null);
  if (be(() => {
    if (!r.current)
      return;
    r.current.width = o.width, r.current.height = o.height, Su(r.current);
    const w = ca(o), H = Sg(o, n.outOfBoundsThreshold), E = xg(o);
    t.value && (oI(r.current, t.value.processedImage.detectedFace), rI(
      r.current,
      t.value.processedImage.detectedFace,
      o
    ), zo(r.current, w, "lime"), zo(r.current, H, "yellow"), zo(r.current, E, "blue"), jn(r.current, t.value.processedImage.detectedFace.leftEye.center, "cyan"), jn(r.current, t.value.processedImage.detectedFace.rightEye.center, "cyan"), jn(r.current, t.value.processedImage.detectedFace.mouth.center, "cyan"));
  }, [o, n, t.value]), !t.value)
    return null;
  const {
    detectionTime: a,
    fps: s,
    processedImage: { detectedFace: g, instructionCode: x, invalidValidators: C },
    resolution: d,
    samVersion: m
  } = t.value, p = {
    Confidence: g.confidence,
    Brightness: g.brightness,
    Sharpness: g.sharpness,
    "Face size": g.faceSize,
    "Left eye confidence": g.leftEye.confidence,
    "Left eye status": g.leftEye.status,
    "Right eye confidence": g.rightEye.confidence,
    "Right eye status": g.rightEye.status,
    "Mouth confidence": g.mouth.confidence,
    "Mouth status": g.mouth.status,
    "Detection time": a,
    FPS: s,
    Tier: i,
    Instruction: x,
    Resolution: JSON.stringify(d),
    "Component version": "6.1.2"
  };
  return m && (p["SAM version"] = m), C.length > 0 && (p["Invalid validators"] = C.join(", ")), /* @__PURE__ */ Z(
    Kx,
    {
      ref: r,
      cameraResolution: o,
      detectionDetails: p,
      isImageMirror: e
    }
  );
};
function sI(i) {
  return /* @__PURE__ */ Z("rect", { fill: "#000", ...i, rx: "50%" });
}
function gI(i) {
  const [o, t] = Fe(!1), e = () => t((a) => !a), n = "" + o;
  Gn(() => {
    function a() {
      if (!i.current) return;
      const C = new MutationObserver(() => {
        e();
      }), d = {};
      return d.childList = !0, d.subtree = !0, d.attributes = !0, C.observe(i.current, d), C;
    }
    function s() {
      var m;
      if (!((m = i.current) != null && m["parentElement"])) return;
      const C = new MutationObserver((p) => {
        p.find((H) => {
          for (const E of H.removedNodes)
            if (E === i.current) return !0;
        }) && e(), p.forEach((H) => {
          H.addedNodes.forEach((E) => {
            var S;
            (S = E.parentElement) == null || S.removeChild(E);
          });
        });
      }), d = {};
      return d.childList = !0, C.observe(i.current.parentElement, d), C;
    }
    const g = a(), x = s();
    return () => {
      x == null || x.disconnect(), g == null || g.disconnect();
    };
  });
  const r = {};
  return r.key = n, r;
}
const cI = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function lI({ cutOut: i, height: o, width: t }) {
  const e = yt(null), { key: n } = gI(e);
  return /* @__PURE__ */ Z("div", { ref: e, style: cI, children: /* @__PURE__ */ Z("svg", { viewBox: `0 0 ${t} ${o}`, children: [
    /* @__PURE__ */ Z("defs", { children: [
      /* @__PURE__ */ Z("mask", { id: "placeholder", children: [
        /* @__PURE__ */ Z("rect", { fill: "#fff", height: "100%", width: "100%" }),
        i
      ] }),
      /* @__PURE__ */ Z(
        "pattern",
        {
          height: window.innerWidth > 480 ? "400" : "900",
          id: "innooverlay",
          patternUnits: "userSpaceOnUse",
          viewBox: "0 40 300 200",
          width: window.innerWidth > 480 ? "350" : "700",
          x: "0",
          y: "0",
          children: [
            /* @__PURE__ */ Z("g", { transform: "translate(100, 170)", children: [
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M4.40992 0C2.42825 0 0.833252 1.59517 0.833252 3.57704C0.833252 5.55891 2.42825 7.15408 4.40992 7.15408C6.39158 7.15408 7.98658 5.55891 7.98658 3.57704C7.93825 1.59517 6.34325 0 4.40992 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              )
            ] }),
            /* @__PURE__ */ Z("g", { transform: "translate(10, 0)", children: [
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ Z(
                "path",
                {
                  d: "M4.40992 0C2.42825 0 0.833252 1.59517 0.833252 3.57704C0.833252 5.55891 2.42825 7.15408 4.40992 7.15408C6.39158 7.15408 7.98658 5.55891 7.98658 3.57704C7.93825 1.59517 6.34325 0 4.40992 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              )
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ Z("rect", { fill: "url(#innooverlay)", height: "100%", mask: "url(#placeholder)", width: "100%" })
  ] }) }, n);
}
function xI({ fullOverlay: i, resolution: o }) {
  const t = Gu(o), e = `${t.height * 100}%`, n = `${t.width * 100}%`, r = `${t.shiftX * 100}%`, a = `${t.shiftY * 100}%`;
  return /* @__PURE__ */ Z(
    lI,
    {
      cutOut: i || /* @__PURE__ */ Z(sI, { height: e, width: n, x: r, y: a }),
      height: o.height,
      width: o.width
    }
  );
}
const uI = async () => WebAssembly.validate(new Uint8Array([-6270 * 1 + -2 * -1637 + 2996, 2429 * -2 + 2875 + -32 * -65, -5334 + -4 * -2377 + 451 * -9, -17 * -442 + -9809 + 1 * 2404, 18932 + -11 * 1721, 582 * 2 + 4664 * 2 + -122 * 86, -537 + 537 * 1, 4 * -1402 + 1 * -8564 + 7086 * 2, 104 * -39 + -4524 * 2 + -5 * -2621, -3 * -2158 + -131 + -6338, 2 * 2417 + -4636 + -197, -500 + 6655 * -1 + 7251, -9732 + -1 * -4367 + 5365, -221 + 1229 * -4 + -1 * -5138, -352 * 12 + -9663 + 14010, 14 * 18 + -8641 + 8392, 1685 + -1683 * 1, 11028 + -11027 * 1, 0, 10, 13 * 163 + 5237 + 7346 * -1, 1, -8484 + 8492 * 1, 0, 6453 + 3194 * -2, -8188 + 867 * -6 + 13390, 3616 * 1 + -1899 + -1464, 15, -1 * -1349 + 8999 * 1 + -5 * 2019, -691 + 263 * 3, 11]));
async function II() {
  const i = {};
  i.name = og, i.length = 256;
  const o = await window.crypto.subtle.generateKey(i, !0, ["encrypt", "decrypt"]), t = Uint8Array.from(Array(-9542 + -603 * -1 + 8955).fill(-5864 + -2 * -2932)), e = window.crypto.getRandomValues(t), n = {};
  return n.key = o, n.iv = e, n;
}
async function dI(i) {
  const { iv: o, key: t } = await II(), e = {};
  e.name = og, e.iv = o;
  const n = await window.crypto.subtle.encrypt(e, t, i), r = await window.crypto.subtle.exportKey("raw", t), a = {};
  return a.message = n, a.key = r, a.iv = o, a;
}
function CI(i) {
  const o = new ArrayBuffer(i.length), t = new Uint8Array(o);
  for (let e = -307 * -31 + -1 * -5993 + -22 * 705, n = i.length; e < n; e++)
    t[e] = i.charCodeAt(e);
  return o;
}
function fI() {
  const i = "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", o = window.atob(i), t = window.atob(o), e = CI(t), n = {};
  return n.name = rg, n.hash = qx, window.crypto.subtle.importKey("spki", e, n, !0, ["encrypt"]);
}
async function hI(i) {
  const o = await fI(), t = {};
  return t.name = rg, window.crypto.subtle.encrypt(t, o, i);
}
async function pI(i) {
  const { iv: o, key: t, message: e } = await dI(i), n = await hI(t), r = {};
  return r.key = n, r.iv = o, r.message = e, r;
}
async function mI(i) {
  const o = await window.crypto.subtle.digest("SHA-1", i);
  return Array.from(new Uint8Array(o)).map((t) => t.toString(3919 * 1 + -9986 + -1 * -6083).padStart(2, "0")).join("");
}
class AI {
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
    j(this, "imagesWithTimestampForDuplicateDetection", new ra($x));
  }
  async initDetector(o) {
    await this.detector.initSamModule(location.href, o);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  async getInstructionSet() {
    return await uI() ? Gs.SIMD : Gs.NO_SIMD;
  }
  async init({ thresholds: o, wasmDirectoryPath: t }) {
    this.setThresholds(o), await this.initDetector(t);
  }
  setSamVersion(o) {
    if (!o || !this.areVersionsCompatible(o))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new re("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = o;
  }
  areVersionsCompatible(o) {
    return o === iu;
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
    if (!this.thresholds) throw new re("Thresholds for " + this.className + " are not provided");
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
  isNewImageBetter(o, t) {
    return t.sharpness > o.sharpness;
  }
  async collectImagesForDuplicateDetection({ image: o, timestamp: t }) {
    const e = o.length / tu, n = e / (16861 + -23 * 733), r = o.length / (-8746 + -486 * -18), a = await mI(o.slice(r - n, r + n)), s = {};
    s.imageHash = a, s.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(s);
  }
  clearImagesForDuplicateDetection() {
    this.imagesWithTimestampForDuplicateDetection.clear();
  }
  getImagesForDuplicateDetection() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
}
(function() {
  var i = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0;
  return function(o) {
    o = o || {};
    var t;
    t || (t = typeof o < "u" ? o : {});
    var e, n;
    t.ready = new Promise(function(c, l) {
      e = c, n = l;
    });
    var r = {}, a;
    for (a in t) t.hasOwnProperty(a) && (r[a] = t[a]);
    var s = "./this.program", g = !(-5831 + 4217 * -1 + 10049), x = !(1 * 4757 + 3253 + -8009);
    g = typeof window == "object", x = typeof importScripts == "function";
    var C = "", d;
    (g || x) && (x ? C = self.location.href : document.currentScript && (C = document.currentScript.src), i && (C = i), -7282 * 1 + -76 * -67 + 2190 !== C.indexOf("blob:") ? C = C.substr(-7509 + 313 * -11 + 10952, C.lastIndexOf("/") + (-3347 + 2 * -4538 + 2 * 6212)) : C = "", x && (d = function(c) {
      var l = new XMLHttpRequest();
      return l.open("GET", c, !1), l.responseType = "arraybuffer", l.send(null), new Uint8Array(l.response);
    }));
    var m = t.printErr || console.warn.bind(console);
    for (a in r) r.hasOwnProperty(a) && (t[a] = r[a]);
    r = null, t.thisProgram && (s = t.thisProgram);
    var p;
    t.wasmBinary && (p = t.wasmBinary), t.noExitRuntime && t.noExitRuntime, typeof WebAssembly != "object" && Je("no native wasm support detected");
    var w, H = !(-7164 + 1 * 9397 + -2232);
    function E(c) {
      c || Je("Assertion failed: undefined");
    }
    var S = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
    function W(c, l, u) {
      var f = de;
      if (0 < u) {
        u = l + u - (-1457 + 1 * 6070 + -4 * 1153);
        for (var A = -1 * 4744 + -17 * -515 + 191 * -21; A < c.length; ++A) {
          var b = c.charCodeAt(A);
          if (55296 <= b && 101323 + -14660 * 3 >= b) {
            var B = c.charCodeAt(++A);
            b = -24388 + -3 * 10754 + 199 * 614 + ((b & -2251 + 1 * -9726 + 26 * 500) << -1763 * -3 + 2102 + 7381 * -1) | B & -579 * -7 + -9969 + 9 * 771;
          }
          if (-6268 + 6549 * -1 + 2 * 6472 >= b) {
            if (l >= u) break;
            f[l++] = b;
          } else {
            if (2085 + 1 * -1649 + 1611 * 1 >= b) {
              if (l + 1 >= u) break;
              f[l++] = 6007 * 1 + -203 * -22 + -10281 | b >> -6780 + -3 * -201 + 6183;
            } else {
              if (65535 >= b) {
                if (l + (8442 + -1616 * -3 + 8 * -1661) >= u) break;
                f[l++] = 2 * 1312 + 1013 + 3413 * -1 | b >> 23 * -289 + 9839 + -3180;
              } else {
                if (l + (5275 + 1 * -5272) >= u) break;
                f[l++] = -5143 + -2 * -4971 + -4559 | b >> -7593 + -9521 * -1 + -1910, f[l++] = -8487 + 1 * 1348 + -43 * -169 | b >> -9679 + 235 * 2 + -1 * -9221 & 4065 + -4087 * 1 + -5 * -17;
              }
              f[l++] = 2455 + -1 * -880 + 3207 * -1 | b >> 6 & -1 * 6990 + -9185 + 16238;
            }
            f[l++] = -38 * -115 + -4 * -118 + -4714 | b & 120 * 19 + -4510 + -2293 * -1;
          }
        }
        f[l] = -1 * 2797 + 1 * 3478 + -681;
      }
    }
    var N = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void (1 * 4444 + -3 * 3003 + 55 * 83);
    function $(c, l) {
      for (var u = c >> 1, f = u + l / (-9009 + -1457 * 3 + -6691 * -2); !(u >= f) && qe[u]; ) ++u;
      if (u <<= -1 * -4973 + -7687 + -1 * -2715, 1 * 5783 + 15 * -607 + -1118 * -3 < u - c && N) return N.decode(de.subarray(c, u));
      for (u = 2741 * 2 + 7 * 483 + 1 * -8863, f = ""; ; ) {
        var A = we[c + 2 * u >> 1];
        if (2 * 2594 + 1846 + -7034 == A || u == l / (5052 + -1310 * 1 + -3740)) return f;
        ++u, f += String.fromCharCode(A);
      }
    }
    function M(c, l, u) {
      if (void (-2712 + 1356 * 2) === u && (u = -218107888 + -108427 * 28771 + 5485144752), 2 > u) return 9657 + 3219 * -3;
      u -= 1327 + -2683 * 1 + -1 * -1358;
      var f = l;
      u = u < (-566 * -2 + 8495 * 1 + -9625) * c.length ? u / (-12 * 53 + -9111 + 9749 * 1) : c.length;
      for (var A = 8 * 366 + 431 * -16 + 992 * 4; A < u; ++A) we[l >> 1] = c.charCodeAt(A), l += 1702 + -52 * 152 + -3 * -2068;
      return we[l >> 2 * 3141 + -1455 + -4826] = 0, l - f;
    }
    function Y(c) {
      return (9887 + -1 * 5021 + -8 * 608) * c.length;
    }
    function G(c, l) {
      for (var u = -559 * -3 + 427 * 6 + -4239 * 1, f = ""; !(u >= l / (-5787 + 5791 * 1)); ) {
        var A = ae[c + 4 * u >> 2];
        if (1 * 8685 + -4 * -1115 + -13145 == A) break;
        ++u, -47700 + -10071 * -13 + -17687 <= A ? (A -= 1 * 20462 + 30983 + -427 * -33, f += String.fromCharCode(98844 + 41938 * -1 + -1610 | A >> -293 * -30 + -1692 + -7088, 56320 | A & -9662 + 1187 * 7 + 2376)) : f += String.fromCharCode(A);
      }
      return f;
    }
    function J(c, l, u) {
      if (void (-1 * -7300 + 6977 * 1 + -14277) === u && (u = 2147483647), -1782 + -2 * -893 > u) return -5958 + -3 * 2143 + -1 * -12387;
      var f = l;
      u = f + u - (-7154 + -1 * -7158);
      for (var A = -11 * 601 + 7317 + 2 * -353; A < c.length; ++A) {
        var b = c.charCodeAt(A);
        if (-25251 * -3 + 83364 + -103821 <= b && 40626 * 2 + 46107 + -70016 >= b) {
          var B = c.charCodeAt(++A);
          b = -127585 + 7 * 1115 + 185316 + ((b & -13043 + 541 * 26) << -1 * 7576 + -1741 + 9327) | B & 5391 + 27 * -18 + -1294 * 3;
        }
        if (ae[l >> -2507 * 1 + -4808 + 7317] = b, l += -436 + 440 * 1, l + (4259 + -432 * 1 + -3823) > u) break;
      }
      return ae[l >> 67 * -147 + 7981 * 1 + 170 * 11] = 8423 + -5728 * -1 + 3 * -4717, l - f;
    }
    function ue(c) {
      for (var l = 0, u = -3 * -2402 + 7454 + -733 * 20; u < c.length; ++u) {
        var f = c.charCodeAt(u);
        -83802 + -2805 * -3 + 1 * 130683 <= f && 75905 + -1 * 91711 + 73149 >= f && ++u, l += 4;
      }
      return l;
    }
    var U, Ie, de, we, qe, ae, Se, Ke, je;
    function Oe(c) {
      U = c, t.HEAP8 = Ie = new Int8Array(c), t.HEAP16 = we = new Int16Array(c), t.HEAP32 = ae = new Int32Array(c), t.HEAPU8 = de = new Uint8Array(c), t.HEAPU16 = qe = new Uint16Array(c), t.HEAPU32 = Se = new Uint32Array(c), t.HEAPF32 = Ke = new Float32Array(c), t.HEAPF64 = je = new Float64Array(c);
    }
    var fe = t.INITIAL_MEMORY || -91 * 54518 + -13171 * -127 + 20065637, Ge = {};
    Ge.initial = fe / (-107148 + 147 * -807 + -781 * -373), Ge.maximum = 32768, t.wasmMemory ? w = t.wasmMemory : w = new WebAssembly.Memory(Ge), w && (U = w.buffer), fe = U.byteLength, Oe(U);
    var Ve = [], he = [], Ze = [], Te = [];
    function $t() {
      var c = t.preRun.shift();
      Ve.unshift(c);
    }
    var Ne = -879 * 3 + 2282 + 355 * 1, at = null;
    t.preloadedImages = {}, t.preloadedAudios = {};
    function Je(c) {
      throw t.onAbort && t.onAbort(c), m(c), H = !(-1 * -7013 + -3547 + -3466), c = new WebAssembly.RuntimeError("abort(" + c + "). Build with -s ASSERTIONS=1 for more info."), n(c), c;
    }
    function kt(c) {
      var l = et;
      return String.prototype.startsWith ? l.startsWith(c) : -9530 + -493 * -19 + -163 * -1 === l.indexOf(c);
    }
    function st() {
      return kt("data:application/octet-stream;base64,");
    }
    var et = "sam.wasm";
    if (!st()) {
      var Kt = et;
      et = t.locateFile ? t.locateFile(Kt, C) : C + Kt;
    }
    function tt() {
      try {
        if (p) return new Uint8Array(p);
        if (d) return d(et);
        throw "both async and sync fetching of the wasm failed";
      } catch (c) {
        Je(c);
      }
    }
    function qg() {
      var c = {};
      return c.credentials = "same-origin", p || !g && !x || typeof fetch != "function" || kt("file://") ? Promise.resolve().then(tt) : fetch(et, c).then(function(l) {
        if (!l.ok) throw "failed to load wasm binary file at '" + et + "'";
        return l.arrayBuffer();
      }).catch(function() {
        return tt();
      });
    }
    function pi(c) {
      for (; -7 * -902 + -2 * -787 + -7888 < c.length; ) {
        var l = c.shift();
        if (typeof l == "function") l(t);
        else {
          var u = l.Ba;
          typeof u == "number" ? void (4256 * -1 + 8931 + -11 * 425) === l.ta ? Zo("v", u)() : Zo("vi", u)(l.ta) : u(void (3754 * 1 + -1 * 2121 + -71 * 23) === l.ta ? null : l.ta);
        }
      }
    }
    function Zo(c, l) {
      var u = [];
      return function() {
        u.length = arguments.length;
        for (var f = 3948 + 9961 * -1 + 6013; f < arguments.length; f++) u[f] = arguments[f];
        return u && u.length ? t["dynCall_" + c].apply(null, [l].concat(u)) : t["dynCall_" + c].call(null, l);
      };
    }
    function ec(c) {
      this.da = c - (-46 * -22 + 262 * 2 + -1520 * 1), this.Oa = function(l) {
        ae[this.da + (4679 + -163 * 51 + 3642 * 1) >> -10 * 838 + -103 * -89 + -785] = l;
      }, this.La = function(l) {
        ae[this.da + (5901 * -1 + -7066 + -1 * -12967) >> -321 * -3 + -54 * -33 + -2743] = l;
      }, this.Ma = function() {
        ae[this.da + 4 >> 2] = 18 * -507 + -2901 + 12027;
      }, this.Ka = function() {
        Ie[this.da + (595 + -2 * -3519 + -7621) >> 4511 * 2 + 49 * 29 + 10443 * -1] = 3 * 977 + 859 * 9 + -10662;
      }, this.Na = function() {
        Ie[this.da + 13 >> -7806 + 1 * -1913 + -9719 * -1] = 1816 * -2 + -3066 + 6698;
      }, this.Fa = function(l, u) {
        this.Oa(l), this.La(u), this.Ma(), this.Ka(), this.Na();
      };
    }
    function mi() {
      return 1 * -2063 + -9793 + -48 * -247 < mi.xa;
    }
    function Ho(c) {
      switch (c) {
        case -125 * 65 + -657 + 1 * 8783:
          return -6766 * -1 + 7593 * 1 + -14359;
        case -2 * -322 + 4778 * -1 + -22 * -188:
          return -2959 * -1 + 5113 + -8071;
        case -1 * 6069 + 1 * 2267 + 1903 * 2:
          return -10478 + 2620 * 4;
        case 3842 + 213 * -18:
          return 7168 + 307 * -3 + 892 * -7;
        default:
          throw new TypeError("Unknown type size: " + c);
      }
    }
    var fa = void 0;
    function Ee(c) {
      for (var l = ""; de[c]; ) l += fa[de[c++]];
      return l;
    }
    var _t = {}, Ot = {}, Ai = {};
    function Wo(c) {
      if (void (8929 * -1 + 3183 + -442 * -13) === c) return "_unknown";
      c = c.replace(/[^a-zA-Z0-9_]/g, "$");
      var l = c.charCodeAt(-7550 + 1 * -963 + -1 * -8513);
      return -2743 * -1 + -3529 * 1 + 834 <= l && 3254 + -139 * 23 >= l ? "_" + c : c;
    }
    function ko(c, l) {
      return c = Wo(c), new Function("body", "return function " + c + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(l);
    }
    function Ko(c) {
      var l = Error, u = ko(c, function(f) {
        this.name = c, this.message = f, f = Error(f).stack, void (11562 + -11562 * 1) !== f && (this.stack = this.toString() + `
` + f.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return u.prototype = Object.create(l.prototype), u.prototype.constructor = u, u.prototype.toString = function() {
        return void (-2 * 445 + 43 * 106 + 2 * -1834) === this.message ? this.name : this.name + ": " + this.message;
      }, u;
    }
    var qt = void (-4652 + -2963 * 1 + 7615);
    function X(c) {
      throw new qt(c);
    }
    var ha = void (7 * -103 + 2 * -1901 + 4523);
    function bi(c) {
      throw new ha(c);
    }
    function en(c, l, u) {
      function f(v) {
        v = u(v), v.length !== c.length && bi("Mismatched type converter count");
        for (var k = 1906 + -1 * 67 + 1 * -1839; k < c.length; ++k) It(c[k], v[k]);
      }
      c.forEach(function(v) {
        Ai[v] = l;
      });
      var A = Array(l.length), b = [], B = -3019 + 3019 * 1;
      l.forEach(function(v, k) {
        Ot.hasOwnProperty(v) ? A[k] = Ot[v] : (b.push(v), _t.hasOwnProperty(v) || (_t[v] = []), _t[v].push(function() {
          A[k] = Ot[v], ++B, B === b.length && f(A);
        }));
      }), -7414 * 1 + 4810 + 3 * 868 === b.length && f(A);
    }
    function It(c, l, u) {
      if (u = u || {}, !("argPackAdvance" in l)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var f = l.name;
      if (c || X('type "' + f + '" must have a positive integer typeid pointer'), Ot.hasOwnProperty(c)) {
        if (u.Ea) return;
        X("Cannot register type '" + f + "' twice");
      }
      Ot[c] = l, delete Ai[c], _t.hasOwnProperty(c) && (l = _t[c], delete _t[c], l.forEach(function(A) {
        A();
      }));
    }
    function tc(c) {
      var l = {};
      return l.count = c.count, l.oa = c.oa, l.pa = c.pa, l.da = c.da, l.fa = c.fa, l.ga = c.ga, l.ha = c.ha, l;
    }
    function Oo(c) {
      X(c.A.fa.ea.name + " instance already deleted");
    }
    var Vo = !(3 * 4 + -1 * 9892 + 9881 * 1);
    function pa() {
    }
    function ma(c) {
      --c.count.value, -1 * -642 + 1117 * 1 + -1759 === c.count.value && (c.ga ? c.ha.na(c.ga) : c.fa.ea.na(c.da));
    }
    function kn(c) {
      return typeof FinalizationGroup > "u" ? (kn = function(l) {
        return l;
      }, c) : (Vo = new FinalizationGroup(function(l) {
        for (var u = l.next(); !u.done; u = l.next()) u = u.value, u.da ? ma(u) : console.warn("object already deleted: " + u.da);
      }), kn = function(l) {
        return Vo.register(l, l.A, l.A), l;
      }, pa = function(l) {
        Vo.unregister(l.A);
      }, kn(c));
    }
    var Kn = void (175 * 14 + 871 + -3321), On = [];
    function To() {
      for (; On.length; ) {
        var c = On.pop();
        c.A.oa = !(-2777 * 1 + -6825 + 33 * 291), c.delete();
      }
    }
    function vt() {
    }
    var Aa = {};
    function nc(c, l) {
      var u = t;
      if (void (6806 + 36 * 151 + 6121 * -2) === u[c].ja) {
        var f = u[c];
        u[c] = function() {
          return u[c].ja.hasOwnProperty(arguments.length) || X("Function '" + l + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + u[c].ja + ")!"), u[c].ja[arguments.length].apply(this, arguments);
        }, u[c].ja = [], u[c].ja[f.ya] = f;
      }
    }
    function ba(c, l, u) {
      t.hasOwnProperty(c) ? ((void (5 * 1559 + 1127 + -6 * 1487) === u || t[c].ja !== void 0 && void (9815 + 1154 * 8 + -19047) !== t[c].ja[u]) && X("Cannot register public name '" + c + "' twice"), nc(c, c), t.hasOwnProperty(u) && X("Cannot register multiple overloads of a function with the same number of arguments (" + u + ")!"), t[c].ja[u] = l) : (t[c] = l, u !== void 0 && (t[c].Ra = u));
    }
    function ic(c, l, u, f, A, b, B, v) {
      this.name = c, this.constructor = l, this.ma = u, this.na = f, this.ia = A, this.Ca = b, this.qa = B, this.Aa = v;
    }
    function yi(c, l, u) {
      for (; l !== u; ) l.qa || X("Expected null or instance of " + u.name + ", got an instance of " + l.name), c = l.qa(c), l = l.ia;
      return c;
    }
    function oc(c, l) {
      return l === null ? (this.ua && X("null is not a valid " + this.name), 0) : (l.A || X('Cannot pass "' + nn(l) + '" as a ' + this.name), l.A.da || X("Cannot pass deleted object as a pointer of type " + this.name), yi(l.A.da, l.A.fa.ea, this.ea));
    }
    function rc(c, l) {
      if (l === null) {
        if (this.ua && X("null is not a valid " + this.name), this.sa) {
          var u = this.Ha();
          return c !== null && c.push(this.na, u), u;
        }
        return 3433 * -1 + 8936 + -5503;
      }
      if (l.A || X('Cannot pass "' + nn(l) + '" as a ' + this.name), l.A.da || X("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && l.A.fa.ra && X("Cannot convert argument of type " + (l.A.ha ? l.A.ha.name : l.A.fa.name) + " to parameter type " + this.name), u = yi(l.A.da, l.A.fa.ea, this.ea), this.sa) switch (void (-9 * 907 + -3712 + -125 * -95) === l.A.ga && X("Passing raw pointer to smart pointer is illegal"), this.Pa) {
        case 134 * -13 + 1 * 7311 + -5569 * 1:
          l.A.ha === this ? u = l.A.ga : X("Cannot convert argument of type " + (l.A.ha ? l.A.ha.name : l.A.fa.name) + " to parameter type " + this.name);
          break;
        case -4 * -317 + 178 + -5 * 289:
          u = l.A.ga;
          break;
        case 9491 + -3149 * -1 + -12638:
          if (l.A.ha === this) u = l.A.ga;
          else {
            var f = l.clone();
            u = this.Ia(u, tn(function() {
              f.delete();
            })), c !== null && c.push(this.na, u);
          }
          break;
        default:
          X("Unsupporting sharing policy");
      }
      return u;
    }
    function ac(c, l) {
      return l === null ? (this.ua && X("null is not a valid " + this.name), 0) : (l.A || X('Cannot pass "' + nn(l) + '" as a ' + this.name), l.A.da || X("Cannot pass deleted object as a pointer of type " + this.name), l.A.fa.ra && X("Cannot convert argument of type " + l.A.fa.name + " to parameter type " + this.name), yi(l.A.da, l.A.fa.ea, this.ea));
    }
    function vi(c) {
      return this.fromWireType(Se[c >> 2]);
    }
    function ya(c, l, u) {
      return l === u ? c : u.ia === void 0 ? null : (c = ya(c, l, u.ia), c === null ? null : u.Aa(c));
    }
    var Vn = {};
    function sc(c, l) {
      for (void (1 * -4085 + 39 * 247 + -5548) === l && X("ptr should not be undefined"); c.ia; ) l = c.qa(l), c = c.ia;
      return Vn[l];
    }
    function wi(c, l) {
      l.fa && l.da || bi("makeClassHandle requires ptr and ptrType"), !!l.ha != !!l.ga && bi("Both smartPtrType and smartPtr must be specified");
      var u = {};
      u.value = 1, l.count = u;
      var f = {};
      f.value = l;
      var A = {};
      return A.A = f, kn(Object.create(c, A));
    }
    function dt(c, l, u, f) {
      this.name = c, this.ea = l, this.ua = u, this.ra = f, this.sa = !(2 * -8 + -1243 * -8 + -9927), this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void (-470 * -10 + 22 * 367 + -12774), l.ia !== void 0 ? this.toWireType = rc : (this.toWireType = f ? oc : ac, this.ka = null);
    }
    function va(c, l, u) {
      t.hasOwnProperty(c) || bi("Replacing nonexistant public symbol"), void (-479 * -11 + 1361 + 221 * -30) !== t[c].ja && void (-3169 + 29 * 222 + -1 * 3269) !== u ? t[c].ja[u] = l : (t[c] = l, t[c].ya = u);
    }
    function wt(c, l) {
      c = Ee(c);
      var u = Zo(c, l);
      return typeof u != "function" && X("unknown function pointer with signature " + c + ": " + l), u;
    }
    var wa = void (-27 * 1 + -951 * 5 + 4782);
    function Sa(c) {
      c = Na(c);
      var l = Ee(c);
      return Ct(c), l;
    }
    function Tn(c, l) {
      function u(b) {
        A[b] || Ot[b] || (Ai[b] ? Ai[b].forEach(u) : (f.push(b), A[b] = !(694 * -12 + -7279 + -1 * -15607)));
      }
      var f = [], A = {};
      throw l.forEach(u), new wa(c + ": " + f.map(Sa).join([", "]));
    }
    function Ba(c, l) {
      for (var u = [], f = -6660 + -1201 * 1 + 1123 * 7; f < c; f++) u.push(ae[(l >> 32 * 277 + 1830 + -10692) + f]);
      return u;
    }
    function Si(c) {
      for (; c.length; ) {
        var l = c.pop();
        c.pop()(l);
      }
    }
    function Ga(c, l, u) {
      return c instanceof Object || X(u + ' with invalid "this": ' + c), c instanceof l.ea.constructor || X(u + ' incompatible with "this" of type ' + c.constructor.name), c.A.da || X("cannot call emscripten binding method " + u + " on deleted object"), yi(c.A.da, c.A.fa.ea, l.ea);
    }
    var Za = {};
    Za.value = void (204 + -3 * 68);
    var Ha = {};
    Ha.value = null;
    var Wa = {};
    Wa.value = !0;
    var ka = {};
    ka.value = !(-5999 + 50 * 120);
    var Eo = [], Ue = [{}, Za, Ha, Wa, ka];
    function Ro(c) {
      -10 * -208 + -1067 + -1009 * 1 < c && 17 * 435 + -2 * -3628 + -637 * 23 === --Ue[c].Ja && (Ue[c] = void (-69 * 61 + -3694 + 7903), Eo.push(c));
    }
    function tn(c) {
      switch (c) {
        case void (-97 * 47 + -1 * -3957 + -14 * -43):
          return -1 * -5367 + -3423 + -1943;
        case null:
          return 31 * 102 + -74 * -106 + -786 * 14;
        case !(1 * 9521 + 746 * -8 + -209 * 17):
          return 11 * -1 + 4946 * -1 + 992 * 5;
        case !(-19143 + 19144 * 1):
          return 4 * -1984 + -7495 * -1 + 89 * 5;
        default:
          var l = Eo.length ? Eo.pop() : Ue.length, u = {};
          return u.Ja = 1, u.value = c, Ue[l] = u, l;
      }
    }
    function nn(c) {
      if (c === null) return "null";
      var l = typeof c;
      return l === "object" || l === "array" || l === "function" ? c.toString() : "" + c;
    }
    function gc(c, l) {
      switch (l) {
        case -4846 + 882 * -3 + 6 * 1249:
          return function(u) {
            return this.fromWireType(Ke[u >> 1916 * 1 + -1 * 4351 + 2437]);
          };
        case 3:
          return function(u) {
            return this.fromWireType(je[u >> -9159 + -3 * -3054]);
          };
        default:
          throw new TypeError("Unknown float type: " + c);
      }
    }
    function cc(c) {
      var l = Function;
      if (!(l instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof l + " which is not a function");
      var u = ko(l.name || "unknownFunctionName", function() {
      });
      return u.prototype = l.prototype, u = new u(), c = l.apply(u, c), c instanceof Object ? c : u;
    }
    function lc(c, l, u) {
      switch (l) {
        case -401 * -1 + -6991 + 5 * 1318:
          return u ? function(f) {
            return Ie[f];
          } : function(f) {
            return de[f];
          };
        case 52 * -35 + -5816 + 1091 * 7:
          return u ? function(f) {
            return we[f >> 1 * 682 + -6 * -573 + -4119];
          } : function(f) {
            return qe[f >> 15888 + -15887 * 1];
          };
        case -9979 * -1 + -1508 + -1 * 8469:
          return u ? function(f) {
            return ae[f >> -3073 + 75 * 41];
          } : function(f) {
            return Se[f >> -4467 + -1 * -686 + 3783 * 1];
          };
        default:
          throw new TypeError("Unknown integer type: " + c);
      }
    }
    function Po(c) {
      return c || X("Cannot use deleted val. handle = " + c), Ue[c].value;
    }
    function Ka(c, l) {
      var u = Ot[c];
      return void (7369 + -7369 * 1) === u && X(l + " has unknown type " + Sa(c)), u;
    }
    var xc = {}, Oa = {};
    function Va() {
      if (!No) {
        var c = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: s || "./this.program" }, l;
        for (l in Oa) c[l] = Oa[l];
        var u = [];
        for (l in c) u.push(l + "=" + c[l]);
        No = u;
      }
      return No;
    }
    var No, Ta = [];
    function Ea(c) {
      var l = {}, u;
      for (u in c) (function(f) {
        var A = c[f];
        l[f] = typeof A == "function" ? function() {
          Ta.push(f);
          try {
            return A.apply(null, arguments);
          } finally {
            if (H) return;
            var b = Ta.pop();
            E(b === f);
          }
        } : A;
      })(u);
      return l;
    }
    for (var Ra = Array(-824 * -4 + 6214 * 1 + -9254), Bi = 0; 3089 * 1 + -2620 + -3 * 71 > Bi; ++Bi) Ra[Bi] = String.fromCharCode(Bi);
    fa = Ra, qt = t.BindingError = Ko("BindingError"), ha = t.InternalError = Ko("InternalError"), vt.prototype.isAliasOf = function(c) {
      if (!(this instanceof vt && c instanceof vt)) return !(4748 + -4747 * 1);
      var l = this.A.fa.ea, u = this.A.da, f = c.A.fa.ea;
      for (c = c.A.da; l.ia; ) u = l.qa(u), l = l.ia;
      for (; f.ia; ) c = f.qa(c), f = f.ia;
      return l === f && u === c;
    }, vt.prototype.clone = function() {
      if (this.A.da || Oo(this), this.A.pa) return this.A.count.value += -2945 + -509 * -8 + -1126, this;
      var c = kn(Object.create(Object.getPrototypeOf(this), { A: { value: tc(this.A) } }));
      return c.A.count.value += 1, c.A.oa = !(-7 * 447 + -7169 + -1 * -10299), c;
    }, vt.prototype.delete = function() {
      this.A.da || Oo(this), this.A.oa && !this.A.pa && X("Object already scheduled for deletion"), pa(this), ma(this.A), this.A.pa || (this.A.ga = void 0, this.A.da = void (-2 * 1473 + -7716 + -5331 * -2));
    }, vt.prototype.isDeleted = function() {
      return !this.A.da;
    }, vt.prototype.deleteLater = function() {
      return this.A.da || Oo(this), this.A.oa && !this.A.pa && X("Object already scheduled for deletion"), On.push(this), -1 * -1281 + -6450 + 470 * 11 === On.length && Kn && Kn(To), this.A.oa = !0, this;
    }, dt.prototype.Da = function(c) {
      return this.wa && (c = this.wa(c)), c;
    }, dt.prototype.va = function(c) {
      this.na && this.na(c);
    }, dt.prototype.argPackAdvance = -195 * -27 + -1 * -127 + -5384, dt.prototype.readValueFromPointer = vi, dt.prototype.deleteObject = function(c) {
      c !== null && c.delete();
    }, dt.prototype.fromWireType = function(c) {
      function l() {
        return this.sa ? wi(this.ea.ma, { fa: this.Ga, da: u, ha: this, ga: c }) : wi(this.ea.ma, { fa: this, da: c });
      }
      var u = this.Da(c);
      if (!u) return this.va(c), null;
      var f = sc(this.ea, u);
      if (void (31 * -274 + 818 + -101 * -76) !== f)
        return -898 * -3 + -2044 + -650 * 1 === f.A.count.value ? (f.A.da = u, f.A.ga = c, f.clone()) : (f = f.clone(), this.va(c), f);
      if (f = this.ea.Ca(u), f = Aa[f], !f) return l.call(this);
      f = this.ra ? f.za : f.pointerType;
      var A = ya(u, this.ea, f.ea);
      return A === null ? l.call(this) : this.sa ? wi(f.ea.ma, { fa: f, da: A, ha: this, ga: c }) : wi(f.ea.ma, { fa: f, da: A });
    }, t.getInheritedInstanceCount = function() {
      return Object.keys(Vn).length;
    }, t.getLiveInheritedInstances = function() {
      var c = [], l;
      for (l in Vn) Vn.hasOwnProperty(l) && c.push(Vn[l]);
      return c;
    }, t.flushPendingDeletes = To, t.setDelayFunction = function(c) {
      Kn = c, On.length && Kn && Kn(To);
    }, wa = t.UnboundTypeError = Ko("UnboundTypeError"), t.count_emval_handles = function() {
      for (var c = 2202 * 1 + -8226 + 6024, l = -2139 + 122 * -61 + 9586; l < Ue.length; ++l) void (35 * 82 + -4381 * -1 + -1 * 7251) !== Ue[l] && ++c;
      return c;
    }, t.get_first_emval = function() {
      for (var c = -26 * 305 + 9 * 859 + 204; c < Ue.length; ++c) if (void (6900 + 1 * 206 + -7106) !== Ue[c]) return Ue[c];
      return null;
    }, he.push({ Ba: function() {
      Pa();
    } });
    var uc = { z: function(c) {
      return Gi(c + (14 * 563 + 4696 + -12562)) + (4527 + -5 * 875 + -136);
    }, u: function(c, l, u) {
      throw new ec(c).Fa(l, u), "uncaught_exception" in mi ? mi.xa++ : mi.xa = -1626 + 671 * -11 + 9008, c;
    }, w: function(c, l, u, f, A) {
      var b = Ho(u);
      l = Ee(l), It(c, { name: l, fromWireType: function(B) {
        return !!B;
      }, toWireType: function(B, v) {
        return v ? f : A;
      }, argPackAdvance: 8, readValueFromPointer: function(B) {
        if (-1149 * -1 + -1 * 6671 + -263 * -21 === u) var v = Ie;
        else if (-12 * 599 + -761 * -12 + -1942 * 1 === u) v = we;
        else if (53 * -19 + 1125 + 1 * -114 === u) v = ae;
        else throw new TypeError("Unknown boolean type size: " + l);
        return this.fromWireType(v[B >> b]);
      }, ka: null });
    }, h: function(c, l, u, f, A, b, B, v, k, K, O, V, q) {
      O = Ee(O), b = wt(A, b), v && (v = wt(B, v)), K && (K = wt(k, K)), q = wt(V, q);
      var pe = Wo(O);
      ba(pe, function() {
        Tn("Cannot construct " + O + " due to unbound types", [f]);
      }), en([c, l, u], f ? [f] : [], function(T) {
        if (T = T[-7805 + -1 * -9497 + -423 * 4], f) var gt = T.ea, He = gt.ma;
        else He = vt.prototype;
        T = ko(pe, function() {
          if (Object.getPrototypeOf(this) !== on) throw new qt("Use 'new' to construct " + O);
          if (void (145 * -47 + 9952 + -3137) === rn.la) throw new qt(O + " has no accessible constructor");
          var Da = rn.la[arguments.length];
          if (void (582 * 8 + 8192 + -584 * 22) === Da) throw new qt("Tried to invoke ctor of " + O + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(rn.la).toString() + ") parameters instead!");
          return Da.apply(this, arguments);
        });
        var Le = {};
        Le.value = T;
        var Vt = {};
        Vt.constructor = Le;
        var on = Object.create(He, Vt);
        T.prototype = on;
        var rn = new ic(O, T, on, q, gt, b, v, K);
        gt = new dt(O, rn, !0, !(550 * 2 + 1 * -1877 + -389 * -2)), He = new dt(O + "*", rn, !(-7760 + -597 * -13), !(-5 * -1629 + -9254 + 6 * 185));
        var La = new dt(O + " const*", rn, !(-6582 + 1149 * -1 + 7732), !(6 * 761 + -406 * 2 + -3754)), Do = {};
        return Do.pointerType = He, Do.za = La, Aa[c] = Do, va(pe, T), [gt, He, La];
      });
    }, g: function(c, l, u, f, A, b) {
      E(9246 + -57 * 27 + -7 * 1101 < l);
      var B = Ba(l, u);
      A = wt(f, A);
      var v = [b], k = [];
      en([], [c], function(K) {
        K = K[7556 * -1 + -45 * 181 + 15701];
        var O = "constructor " + K.name;
        if (void (5 * -1253 + -267 * -22 + 391) === K.ea.la && (K.ea.la = []), void (1525 * -5 + 23 * -194 + 12087) !== K.ea.la[l - 1]) throw new qt("Cannot register multiple constructors with identical number of parameters (" + (l - (1049 * 9 + 5 * -1438 + -2250)) + ") for class '" + K.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return K.ea.la[l - (1537 * -3 + -3051 + 7663)] = function() {
          Tn("Cannot construct " + K.name + " due to unbound types", B);
        }, en([], B, function(V) {
          return K.ea.la[l - 1] = function() {
            arguments.length !== l - (-9 * 705 + 2 * 4022 + 566 * -3) && X(O + " called with " + arguments.length + " arguments, expected " + (l - (-26 * 179 + -290 * -34 + -5205))), k.length = 2384 + 17 * -93 + -1 * 803, v.length = l;
            for (var q = 1; q < l; ++q) v[q] = V[q].toWireType(k, arguments[q - (-2 * -3516 + -6104 + -927)]);
            return q = A.apply(null, v), Si(k), V[0].fromWireType(q);
          }, [];
        }), [];
      });
    }, b: function(c, l, u, f, A, b, B, v, k, K) {
      l = Ee(l), A = wt(f, A), en([], [c], function(O) {
        O = O[-4270 + 12 * 251 + -17 * -74];
        var V = O.name + "." + l, q = { get: function() {
          Tn("Cannot access " + V + " due to unbound types", [u, B]);
        }, enumerable: !(-3375 + 153 * 39 + -2592), configurable: !0 };
        return k ? q.set = function() {
          Tn("Cannot access " + V + " due to unbound types", [u, B]);
        } : q.set = function() {
          X(V + " is a read-only property");
        }, Object.defineProperty(O.ea.ma, l, q), en([], k ? [u, B] : [u], function(pe) {
          var T = pe[0], gt = { get: function() {
            var Le = Ga(this, O, V + " getter");
            return T.fromWireType(A(b, Le));
          }, enumerable: !(6121 + 6121 * -1) };
          if (k) {
            k = wt(v, k);
            var He = pe[-3909 * 2 + -10 * 409 + -1 * -11909];
            gt.set = function(Le) {
              var Vt = Ga(this, O, V + " setter"), on = [];
              k(K, Vt, He.toWireType(on, Le)), Si(on);
            };
          }
          return Object.defineProperty(O.ea.ma, l, gt), [];
        }), [];
      });
    }, v: function(c, l) {
      l = Ee(l), It(c, { name: l, fromWireType: function(u) {
        var f = Ue[u].value;
        return Ro(u), f;
      }, toWireType: function(u, f) {
        return tn(f);
      }, argPackAdvance: 8, readValueFromPointer: vi, ka: null });
    }, m: function(c, l, u) {
      u = Ho(u), l = Ee(l), It(c, { name: l, fromWireType: function(f) {
        return f;
      }, toWireType: function(f, A) {
        if (typeof A != "number" && typeof A != "boolean") throw new TypeError('Cannot convert "' + nn(A) + '" to ' + this.name);
        return A;
      }, argPackAdvance: 8, readValueFromPointer: gc(l, u), ka: null });
    }, c: function(c, l, u, f, A, b) {
      var B = Ba(l, u);
      c = Ee(c), A = wt(f, A), ba(c, function() {
        Tn("Cannot call " + c + " due to unbound types", B);
      }, l - (-5949 + 3 * -2865 + 5 * 2909)), en([], B, function(v) {
        var k = c, K = c;
        v = [v[-160 * -11 + 1022 + 1 * -2782], null].concat(v.slice(-1 * -2777 + 5896 + -8672));
        var O = A, V = v.length;
        8653 * 1 + -7039 * 1 + -1612 > V && X("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var q = v[1 * 5342 + -1121 + -1055 * 4] !== null && !(-7555 + -2 * -3778), pe = !1, T = 2329 + 1 * 9533 + -11861; T < v.length; ++T) if (v[T] !== null && void (-4304 * 1 + 1 * 2389 + -1 * -1915) === v[T].ka) {
          pe = !(-1 * -1298 + 151 * -38 + 444 * 10);
          break;
        }
        var gt = v[-1 * -9733 + -34 * -185 + 3 * -5341].name !== "void", He = "", Le = "";
        for (T = -6755 * 1 + -953 + -82 * -94; T < V - (1937 + 10 * 346 + 1079 * -5); ++T) He += (-221 * -1 + 8801 * 1 + -9022 !== T ? ", " : "") + "arg" + T, Le += (2291 + 29 * -79 !== T ? ", " : "") + "arg" + T + "Wired";
        K = "return function " + Wo(K) + "(" + He + `) {
if (arguments.length !== ` + (V - (6 * 1386 + 4964 + -2 * 6639)) + `) {
throwBindingError('function ` + K + " called with ' + arguments.length + ' arguments, expected " + (V - (4856 + 490 * -9 + -444)) + ` args!');
}
`, pe && (K += `var destructors = [];
`);
        var Vt = pe ? "destructors" : "null";
        for (He = "throwBindingError invoker fn runDestructors retType classParam".split(" "), O = [X, O, b, Si, v[-1380 + 69 * 20], v[-12242 + -77 * -159]], q && (K += "var thisWired = classParam.toWireType(" + Vt + `, this);
`), T = 2656 + -3 * 1039 + 1 * 461; T < V - 2; ++T) K += "var arg" + T + "Wired = argType" + T + ".toWireType(" + Vt + ", arg" + T + "); // " + v[T + (384 * 8 + -7379 * 1 + 1 * 4309)].name + `
`, He.push("argType" + T), O.push(v[T + (-9014 + 361 * 20 + -4 * -449)]);
        if (q && (Le = "thisWired" + (0 < Le.length ? ", " : "") + Le), K += (gt ? "var rv = " : "") + "invoker(fn" + (-3158 * -1 + -9951 + 6793 * 1 < Le.length ? ", " : "") + Le + `);
`, pe) K += `runDestructors(destructors);
`;
        else
          for (T = q ? -1 * -321 + -5523 + 121 * 43 : 1019 * -1 + -4265 + 6 * 881; T < v.length; ++T) V = 1 * 3403 + 14 + 4 * -854 === T ? "thisWired" : "arg" + (T - (15290 + 28 * -546)) + "Wired", v[T].ka !== null && (K += V + "_dtor(" + V + "); // " + v[T].name + `
`, He.push(V + "_dtor"), O.push(v[T].ka));
        return gt && (K += `var ret = retType.fromWireType(rv);
return ret;
`), He.push(K + `}
`), v = cc(He).apply(null, O), va(k, v, l - (-1579 * -1 + 9765 + -11343)), [];
      });
    }, e: function(c, l, u, f, A) {
      function b(K) {
        return K;
      }
      l = Ee(l), -(5525 + 5524 * -1) === A && (A = 7612637923 + 2458979100 + -722081216 * 8);
      var B = Ho(u);
      if (-366 * -17 + 7848 + -21 * 670 === f) {
        var v = 32 - 8 * u;
        b = function(K) {
          return K << v >>> v;
        };
      }
      var k = l.indexOf("unsigned") != -1;
      It(c, { name: l, fromWireType: b, toWireType: function(K, O) {
        if (typeof O != "number" && typeof O != "boolean") throw new TypeError('Cannot convert "' + nn(O) + '" to ' + this.name);
        if (O < f || O > A) throw new TypeError('Passing a number "' + nn(O) + '" from JS side to C/C++ side to an argument of type "' + l + '", which is outside the valid range [' + f + ", " + A + "]!");
        return k ? O >>> -4 * 1703 + 7957 * -1 + -14769 * -1 : O | -1 * 1427 + -6535 + 7962;
      }, argPackAdvance: 8, readValueFromPointer: lc(l, B, -1 * -263 + -2987 * -2 + -6237 !== f), ka: null });
    }, d: function(c, l, u) {
      function f(v) {
        v >>= -1604 * 2 + 2748 + -33 * -14;
        var k = Se;
        return new A(U, k[v + (8084 + -1 * 8083)], k[v]);
      }
      var A = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][l];
      u = Ee(u);
      var b = {};
      b.name = u, b.fromWireType = f, b.argPackAdvance = 8, b.readValueFromPointer = f;
      var B = {};
      B.Ea = !(-824 * -1 + 7412 + -1 * 8236), It(c, b, B);
    }, n: function(c, l) {
      l = Ee(l);
      var u = l === "std::string";
      It(c, { name: l, fromWireType: function(f) {
        var A = Se[f >> 2];
        if (u) for (var b = f + 4, B = -8909 * 1 + 6494 + 3 * 805; B <= A; ++B) {
          var v = f + 4 + B;
          if (B == A || -242 * -12 + -6415 + 3511 == de[v]) {
            if (b) {
              var k = b, K = de, O = k + (v - b);
              for (b = k; K[b] && !(b >= O); ) ++b;
              if (-350 + 5308 * 1 + -4942 < b - k && K.subarray && S) k = S.decode(K.subarray(k, b));
              else {
                for (O = ""; k < b; ) {
                  var V = K[k++];
                  if (V & 128) {
                    var q = K[k++] & 63;
                    if (-223 * -1 + -9247 + -384 * -24 == (V & -1 * -2279 + -1852 + -203)) O += String.fromCharCode((V & 770 + -9 * -81 + -1468) << 3 * 212 + 6525 + -7155 | q);
                    else {
                      var pe = K[k++] & 63;
                      V = 13 * 14 + -7 * 453 + -459 * -7 == (V & 240) ? (V & -2692 * 1 + -151 * 42 + 9049 * 1) << 1 * -226 + 4654 + 8 * -552 | q << 3139 * -1 + 9418 + 369 * -17 | pe : (V & 7) << 18 | q << 12 | pe << 241 * -12 + -291 * -29 + -5541 | K[k++] & -5233 * 1 + -9776 + 15072, -17306 + 5478 * 17 + -10284 > V ? O += String.fromCharCode(V) : (V -= 116600 + 63 * -1774 + -5518 * -11, O += String.fromCharCode(-48275 + -116 * -926 + -5 * 769 | V >> 7513 + -1 * 1699 + 1451 * -4, 106644 + 367 * -263 + 46197 | V & 3308 + -1083 * -8 + -10949));
                    }
                  } else O += String.fromCharCode(V);
                }
                k = O;
              }
            } else k = "";
            if (T === void 0) var T = k;
            else T += "\0", T += k;
            b = v + (-3 * -3317 + 1701 * 3 + -15053);
          }
        }
        else {
          for (T = Array(A), B = -1458 + -3731 * 2 + 8920; B < A; ++B) T[B] = String.fromCharCode(de[f + (-5048 + -191 * -37 + 65 * -31) + B]);
          T = T.join("");
        }
        return Ct(f), T;
      }, toWireType: function(f, A) {
        A instanceof ArrayBuffer && (A = new Uint8Array(A));
        var b = typeof A == "string";
        b || A instanceof Uint8Array || A instanceof Uint8ClampedArray || A instanceof Int8Array || X("Cannot pass non-string to std::string");
        var B = (u && b ? function() {
          for (var K = -787 * -10 + -2 * 2935 + -50 * 40, O = -13 * 711 + -4855 + 19 * 742; O < A.length; ++O) {
            var V = A.charCodeAt(O);
            -1819 * 2 + 1 * 42677 + 16257 <= V && -1 * -68901 + -323 * -248 + 45831 * -2 >= V && (V = 120445 + -2 * -8719 + -72347 + ((V & 24 * 179 + 1 * 4299 + -7572) << 157 * -24 + 1 * -5463 + 9241) | A.charCodeAt(++O) & 1 * -1474 + -2 * 179 + 2855), 13 * 331 + -19 * -249 + -8907 >= V ? ++K : K = 8223 + -1544 * 4 >= V ? K + (47 * -78 + 2684 + 8 * 123) : 1204 * -2 + -43 * -1841 + 51 * -220 >= V ? K + (757 * 11 + 322 + -1441 * 6) : K + (5 * 1882 + -5023 * 1 + -4383);
          }
          return K;
        } : function() {
          return A.length;
        })(), v = Gi(517 * -17 + 3255 + 5538 + B + (2825 + -4 * 706));
        if (Se[v >> 440 * 19 + 7062 + -3855 * 4] = B, u && b) W(A, v + (1 * 8953 + -8392 + -557 * 1), B + (874 * 3 + -630 + -1991));
        else if (b) for (b = -1310 * -4 + 53 * 27 + -6671; b < B; ++b) {
          var k = A.charCodeAt(b);
          2713 + 56 * -49 + 286 < k && (Ct(v), X("String has UTF-16 code units that do not fit in 8 bits")), de[v + (958 + 834 * -2 + 714) + b] = k;
        }
        else
          for (b = 8498 * -1 + -2698 + 11196; b < B; ++b) de[v + (4751 + -4 * 257 + -3719) + b] = A[b];
        return f !== null && f.push(Ct, v), v;
      }, argPackAdvance: 8, readValueFromPointer: vi, ka: function(f) {
        Ct(f);
      } });
    }, j: function(c, l, u) {
      if (u = Ee(u), -97 * 82 + 1 * 2978 + 4978 === l) var f = $, A = M, b = Y, B = function() {
        return qe;
      }, v = 6268 + -890 * 2 + -4487;
      else -1 * -9156 + 1 * 511 + -9663 * 1 === l && (f = G, A = J, b = ue, B = function() {
        return Se;
      }, v = 12250 + -1531 * 8);
      It(c, { name: u, fromWireType: function(k) {
        for (var K = Se[k >> 312 * -23 + -7682 + 14860], O = B(), V, q = k + (-9129 * -1 + 9424 + -18549), pe = -761 * 12 + -7027 * 1 + 16159; pe <= K; ++pe) {
          var T = k + 4 + pe * l;
          (pe == K || 4523 * -1 + -7094 + 11617 == O[T >> v]) && (q = f(q, T - q), void (36 * 92 + -7575 + 7 * 609) === V ? V = q : (V += String.fromCharCode(6758 + -518 * -19 + -16600), V += q), q = T + l);
        }
        return Ct(k), V;
      }, toWireType: function(k, K) {
        typeof K != "string" && X("Cannot pass non-string to C++ string type " + u);
        var O = b(K), V = Gi(1876 + -353 * 23 + 6247 + O + l);
        return Se[V >> 7727 + -2 * 4123 + 1 * 521] = O >> v, A(K, V + (-9439 + 1 * -9065 + 18508), O + l), k !== null && k.push(Ct, V), V;
      }, argPackAdvance: 8, readValueFromPointer: vi, ka: function(k) {
        Ct(k);
      } });
    }, x: function(c, l) {
      l = Ee(l);
      var u = {};
      u.Qa = !(1947 * 2 + -1 * 3466 + -428), u.name = l, u.argPackAdvance = 0, u.fromWireType = function() {
      }, u.toWireType = function() {
      }, It(c, u);
    }, k: function(c, l, u) {
      c = Po(c), l = Ka(l, "emval::as");
      var f = [], A = tn(f);
      return ae[u >> -1598 + 2 * -1241 + 4082] = A, l.toWireType(f, c);
    }, i: Ro, l: function(c, l) {
      return c = Po(c), l = Po(l), tn(c[l]);
    }, p: function(c) {
      var l = xc[c];
      return tn(void (8681 + 65 * -12 + -7901 * 1) === l ? Ee(c) : l);
    }, o: function(c) {
      Si(Ue[c].value), Ro(c);
    }, y: function(c, l) {
      return c = Ka(c, "_emval_take_value"), c = c.readValueFromPointer(l), tn(c);
    }, f: function() {
      Je();
    }, q: function(c, l, u) {
      de.copyWithin(c, l, l + u);
    }, r: function(c) {
      c >>>= 17 * 283 + 7948 * 1 + -3 * 4253;
      var l = de.length;
      if (-709453040 + -2040133262 * 1 + 4897069950 < c) return !(-182 * -23 + 2354 + -503 * 13);
      for (var u = 6749 + -2809 * -3 + -1 * 15175; 1969 * 1 + 11 * 806 + -10831 >= u; u *= -4425 + 19 * 233) {
        var f = l * (1 + 0.2 / u);
        f = Math.min(f, c + (32 * 4697423 + 16881698 + -66535938)), f = Math.max(4 * 7911122 + 2903106 + -17770378, c, f), -71 * -83 + -4633 + 6 * -210 < f % 65536 && (f += -39759 * 1 + 4229 * -28 + 223707 - f % 65536);
        e: {
          try {
            w.grow(Math.min(7081412728 + -1 * 4933929080, f) - U.byteLength + (-65361 + 1283 * 2 + 128330) >>> 7443 + -8 * -956 + 67 * -225), Oe(w.buffer);
            var A = 17 * 65 + 8385 + -1 * 9489;
            break e;
          } catch {
          }
          A = void 0;
        }
        if (A) return !(-183 * -25 + -1397 + -3178);
      }
      return !(1 * 1675 + 1 * -417 + -1257);
    }, s: function(c, l) {
      var u = 0;
      return Va().forEach(function(f, A) {
        var b = l + u;
        for (A = ae[c + (-12 * 677 + 1 * -4273 + -1 * -12401) * A >> -727 * -13 + -1147 + 1 * -8302] = b, b = -49 * -187 + 6182 + -15345; b < f.length; ++b) Ie[A++ >> 4824 + -8737 * -1 + -71 * 191] = f.charCodeAt(b);
        Ie[A >> 17 * -380 + 6696 + -236] = 0, u += f.length + (-6897 + 2 * 3449);
      }), 0;
    }, t: function(c, l) {
      var u = Va();
      ae[c >> 571 + 569 * -1] = u.length;
      var f = 0;
      return u.forEach(function(A) {
        f += A.length + (-12617 + 6309 * 2);
      }), ae[l >> -1586 * -5 + -2 * 669 + 1 * -6590] = f, -236 * -16 + 1183 + -4959;
    }, a: w };
    (function() {
      function c(B) {
        B = B.exports, B = Ea(B), t.asm = B, Ne--, t.monitorRunDependencies && t.monitorRunDependencies(Ne), -8847 + 7 * 659 + -2117 * -2 == Ne && at && (B = at, at = null, B());
      }
      function l(B) {
        c(B.instance);
      }
      function u(B) {
        return qg().then(function(v) {
          return WebAssembly.instantiate(v, A);
        }).then(B, function(v) {
          m("failed to asynchronously prepare wasm: " + v), Je(v);
        });
      }
      var f = {};
      f.a = uc;
      var A = f;
      if (Ne++, t.monitorRunDependencies && t.monitorRunDependencies(Ne), t.instantiateWasm) try {
        var b = t.instantiateWasm(A, c);
        return b = Ea(b);
      } catch (B) {
        return m("Module.instantiateWasm callback failed with error: " + B), !(-1 * -8290 + -5935 + -2354);
      }
      return function() {
        if (p || typeof WebAssembly.instantiateStreaming != "function" || st() || kt("file://") || typeof fetch != "function") return u(l);
        var B = {};
        B.credentials = "same-origin", fetch(et, B).then(function(v) {
          return WebAssembly.instantiateStreaming(v, A).then(l, function(k) {
            return m("wasm streaming compile failed: " + k), m("falling back to ArrayBuffer instantiation"), u(l);
          });
        });
      }(), {};
    })();
    var Pa = t.___wasm_call_ctors = function() {
      return (Pa = t.___wasm_call_ctors = t.asm.B).apply(null, arguments);
    }, Gi = t._malloc = function() {
      return (Gi = t._malloc = t.asm.C).apply(null, arguments);
    }, Ct = t._free = function() {
      return (Ct = t._free = t.asm.D).apply(null, arguments);
    }, Na = t.___getTypeName = function() {
      return (Na = t.___getTypeName = t.asm.E).apply(null, arguments);
    };
    t.___embind_register_native_and_builtin_types = function() {
      return (t.___embind_register_native_and_builtin_types = t.asm.F).apply(null, arguments);
    }, t.dynCall_ii = function() {
      return (t.dynCall_ii = t.asm.G).apply(null, arguments);
    }, t.dynCall_vi = function() {
      return (t.dynCall_vi = t.asm.H).apply(null, arguments);
    }, t.dynCall_i = function() {
      return (t.dynCall_i = t.asm.I).apply(null, arguments);
    }, t.dynCall_iii = function() {
      return (t.dynCall_iii = t.asm.J).apply(null, arguments);
    }, t.dynCall_viii = function() {
      return (t.dynCall_viii = t.asm.K).apply(null, arguments);
    }, t.dynCall_fii = function() {
      return (t.dynCall_fii = t.asm.L).apply(null, arguments);
    }, t.dynCall_viif = function() {
      return (t.dynCall_viif = t.asm.M).apply(null, arguments);
    }, t.dynCall_viiii = function() {
      return (t.dynCall_viiii = t.asm.N).apply(null, arguments);
    }, t.dynCall_viiiiii = function() {
      return (t.dynCall_viiiiii = t.asm.O).apply(null, arguments);
    }, t.dynCall_iiiiii = function() {
      return (t.dynCall_iiiiii = t.asm.P).apply(null, arguments);
    }, t.dynCall_viiiii = function() {
      return (t.dynCall_viiiii = t.asm.Q).apply(null, arguments);
    }, t.dynCall_iiiiiiii = function() {
      return (t.dynCall_iiiiiiii = t.asm.R).apply(null, arguments);
    }, t.dynCall_viiiiiii = function() {
      return (t.dynCall_viiiiiii = t.asm.S).apply(null, arguments);
    }, t.dynCall_viiiiiiiiidi = function() {
      return (t.dynCall_viiiiiiiiidi = t.asm.T).apply(null, arguments);
    }, t.dynCall_viiiiiiiidi = function() {
      return (t.dynCall_viiiiiiiidi = t.asm.U).apply(null, arguments);
    }, t.dynCall_viiiiiiiiii = function() {
      return (t.dynCall_viiiiiiiiii = t.asm.V).apply(null, arguments);
    }, t.dynCall_viiiiiiiii = function() {
      return (t.dynCall_viiiiiiiii = t.asm.W).apply(null, arguments);
    }, t.dynCall_viiiiiiii = function() {
      return (t.dynCall_viiiiiiii = t.asm.X).apply(null, arguments);
    }, t.dynCall_iiiiiii = function() {
      return (t.dynCall_iiiiiii = t.asm.Y).apply(null, arguments);
    }, t.dynCall_iiiii = function() {
      return (t.dynCall_iiiii = t.asm.Z).apply(null, arguments);
    }, t.dynCall_iiii = function() {
      return (t.dynCall_iiii = t.asm._).apply(null, arguments);
    }, t._asyncify_start_unwind = function() {
      return (t._asyncify_start_unwind = t.asm.$).apply(null, arguments);
    }, t._asyncify_stop_unwind = function() {
      return (t._asyncify_stop_unwind = t.asm.aa).apply(null, arguments);
    }, t._asyncify_start_rewind = function() {
      return (t._asyncify_start_rewind = t.asm.ba).apply(null, arguments);
    }, t._asyncify_stop_rewind = function() {
      return (t._asyncify_stop_rewind = t.asm.ca).apply(null, arguments);
    };
    var Zi;
    at = function c() {
      Zi || Lo(), Zi || (at = c);
    };
    function Lo() {
      function c() {
        if (!Zi && (Zi = !(4 * 1165 + -9298 + 2319 * 2), t.calledRun = !(3862 * -1 + -6719 + 10581), !H)) {
          if (pi(he), pi(Ze), e(t), t.onRuntimeInitialized && t.onRuntimeInitialized(), t.postRun) for (typeof t.postRun == "function" && (t.postRun = [t.postRun]); t.postRun.length; ) {
            var l = t.postRun.shift();
            Te.unshift(l);
          }
          pi(Te);
        }
      }
      if (!(9 * -421 + -712 + 1 * 4501 < Ne)) {
        if (t.preRun)
          for (typeof t.preRun == "function" && (t.preRun = [t.preRun]); t.preRun.length; ) $t();
        pi(Ve), 33 * 95 + -4726 + 1591 * 1 < Ne || (t.setStatus ? (t.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            t.setStatus("");
          }, 6632 + 1381 * 7 + 562 * -29), c();
        }, -3251 + 3 * -641 + 5175)) : c());
      }
    }
    if (t.run = Lo, t.preInit)
      for (typeof t.preInit == "function" && (t.preInit = [t.preInit]); -151 * -54 + 8296 + -16450 < t.preInit.length; ) t.preInit.pop()();
    return Lo(), o.ready;
  };
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Gg = Symbol("Comlink.proxy"), bI = Symbol("Comlink.endpoint"), yI = Symbol("Comlink.releaseProxy"), qo = Symbol("Comlink.finalizer"), Qi = Symbol("Comlink.thrown"), Zg = (i) => typeof i == "object" && i !== null || typeof i == "function", vI = {
  canHandle: (i) => Zg(i) && i[Gg],
  serialize(i) {
    const { port1: o, port2: t } = new MessageChannel();
    return Wg(i, o), [t, [t]];
  },
  deserialize(i) {
    return i.start(), Kg(i);
  }
}, wI = {
  canHandle: (i) => Zg(i) && Qi in i,
  serialize({ value: i }) {
    let o;
    return i instanceof Error ? o = {
      isError: !0,
      value: {
        message: i.message,
        name: i.name,
        stack: i.stack
      }
    } : o = { isError: !1, value: i }, [o, []];
  },
  deserialize(i) {
    throw i.isError ? Object.assign(new Error(i.value.message), i.value) : i.value;
  }
}, Hg = /* @__PURE__ */ new Map([
  ["proxy", vI],
  ["throw", wI]
]);
function SI(i, o) {
  for (const t of i)
    if (o === t || t === "*" || t instanceof RegExp && t.test(o))
      return !0;
  return !1;
}
function Wg(i, o = globalThis, t = ["*"]) {
  o.addEventListener("message", function e(n) {
    if (!n || !n.data)
      return;
    if (!SI(t, n.origin)) {
      console.warn(`Invalid origin '${n.origin}' for comlink proxy`);
      return;
    }
    const { id: r, type: a, path: s } = Object.assign({ path: [] }, n.data), g = (n.data.argumentList || []).map(Nt);
    let x;
    try {
      const C = s.slice(0, -1).reduce((m, p) => m[p], i), d = s.reduce((m, p) => m[p], i);
      switch (a) {
        case "GET":
          x = d;
          break;
        case "SET":
          C[s.slice(-1)[0]] = Nt(n.data.value), x = !0;
          break;
        case "APPLY":
          x = d.apply(C, g);
          break;
        case "CONSTRUCT":
          {
            const m = new d(...g);
            x = kI(m);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: m, port2: p } = new MessageChannel();
            Wg(i, p), x = WI(m, [m]);
          }
          break;
        case "RELEASE":
          x = void 0;
          break;
        default:
          return;
      }
    } catch (C) {
      x = { value: C, [Qi]: 0 };
    }
    Promise.resolve(x).catch((C) => ({ value: C, [Qi]: 0 })).then((C) => {
      const [d, m] = co(C);
      o.postMessage(Object.assign(Object.assign({}, d), { id: r }), m), a === "RELEASE" && (o.removeEventListener("message", e), kg(o), qo in i && typeof i[qo] == "function" && i[qo]());
    }).catch((C) => {
      const [d, m] = co({
        value: new TypeError("Unserializable return value"),
        [Qi]: 0
      });
      o.postMessage(Object.assign(Object.assign({}, d), { id: r }), m);
    });
  }), o.start && o.start();
}
function BI(i) {
  return i.constructor.name === "MessagePort";
}
function kg(i) {
  BI(i) && i.close();
}
function Kg(i, o) {
  return Kr(i, [], o);
}
function Ei(i) {
  if (i)
    throw new Error("Proxy has been released and is not useable");
}
function Og(i) {
  return xn(i, {
    type: "RELEASE"
  }).then(() => {
    kg(i);
  });
}
const so = /* @__PURE__ */ new WeakMap(), go = "FinalizationRegistry" in globalThis && new FinalizationRegistry((i) => {
  const o = (so.get(i) || 0) - 1;
  so.set(i, o), o === 0 && Og(i);
});
function GI(i, o) {
  const t = (so.get(o) || 0) + 1;
  so.set(o, t), go && go.register(i, o, i);
}
function ZI(i) {
  go && go.unregister(i);
}
function Kr(i, o = [], t = function() {
}) {
  let e = !1;
  const n = new Proxy(t, {
    get(r, a) {
      if (Ei(e), a === yI)
        return () => {
          ZI(n), Og(i), e = !0;
        };
      if (a === "then") {
        if (o.length === 0)
          return { then: () => n };
        const s = xn(i, {
          type: "GET",
          path: o.map((g) => g.toString())
        }).then(Nt);
        return s.then.bind(s);
      }
      return Kr(i, [...o, a]);
    },
    set(r, a, s) {
      Ei(e);
      const [g, x] = co(s);
      return xn(i, {
        type: "SET",
        path: [...o, a].map((C) => C.toString()),
        value: g
      }, x).then(Nt);
    },
    apply(r, a, s) {
      Ei(e);
      const g = o[o.length - 1];
      if (g === bI)
        return xn(i, {
          type: "ENDPOINT"
        }).then(Nt);
      if (g === "bind")
        return Kr(i, o.slice(0, -1));
      const [x, C] = Ts(s);
      return xn(i, {
        type: "APPLY",
        path: o.map((d) => d.toString()),
        argumentList: x
      }, C).then(Nt);
    },
    construct(r, a) {
      Ei(e);
      const [s, g] = Ts(a);
      return xn(i, {
        type: "CONSTRUCT",
        path: o.map((x) => x.toString()),
        argumentList: s
      }, g).then(Nt);
    }
  });
  return GI(n, i), n;
}
function HI(i) {
  return Array.prototype.concat.apply([], i);
}
function Ts(i) {
  const o = i.map(co);
  return [o.map((t) => t[0]), HI(o.map((t) => t[1]))];
}
const Vg = /* @__PURE__ */ new WeakMap();
function WI(i, o) {
  return Vg.set(i, o), i;
}
function kI(i) {
  return Object.assign(i, { [Gg]: !0 });
}
function co(i) {
  for (const [o, t] of Hg)
    if (t.canHandle(i)) {
      const [e, n] = t.serialize(i);
      return [
        {
          type: "HANDLER",
          name: o,
          value: e
        },
        n
      ];
    }
  return [
    {
      type: "RAW",
      value: i
    },
    Vg.get(i) || []
  ];
}
function Nt(i) {
  switch (i.type) {
    case "HANDLER":
      return Hg.get(i.name).deserialize(i.value);
    case "RAW":
      return i.value;
  }
}
function xn(i, o, t) {
  return new Promise((e) => {
    const n = KI();
    i.addEventListener("message", function r(a) {
      !a.data || !a.data.id || a.data.id !== n || (i.removeEventListener("message", r), e(a.data));
    }), i.start && i.start(), i.postMessage(Object.assign({ id: n }, o), t);
  });
}
function KI() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const Tg = "dmFyIGNlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5Owp2YXIgbGUgPSAoYSwgdSwgZSkgPT4gdSBpbiBhID8gY2UoYSwgdSwgeyBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwLCB2YWx1ZTogZSB9KSA6IGFbdV0gPSBlOwp2YXIgWW4gPSAoYSwgdSwgZSkgPT4gbGUoYSwgdHlwZW9mIHUgIT0gInN5bWJvbCIgPyB1ICsgIiIgOiB1LCBlKTsKY29uc3Qga3QgPSB7CiAgc2ltZDogInNhbV9zaW1kLndhc20iLAogIHNhbTogInNhbS53YXNtIgp9LCBmZSA9IGFzeW5jICgpID0+IFdlYkFzc2VtYmx5LnZhbGlkYXRlKG5ldyBVaW50OEFycmF5KFswLCA5NywgMTE1LCAxMDksIDEsIDAsIDAsIDAsIDEsIDUsIDEsIDk2LCAwLCAxLCAxMjMsIDMsIDIsIDEsIDAsIDEwLCAxMCwgMSwgOCwgMCwgNjUsIDAsIDI1MywgMTUsIDI1MywgOTgsIDExXSkpOwpjbGFzcyBJIGV4dGVuZHMgRXJyb3IgewogIGNvbnN0cnVjdG9yKGUsIG0pIHsKICAgIHN1cGVyKGUpOwogICAgWW4odGhpcywgImNhdXNlIik7CiAgICB0aGlzLm5hbWUgPSAiQXV0b0NhcHR1cmVFcnJvciIsIHRoaXMuY2F1c2UgPSBtOwogIH0KICAvLyBDaGFuZ2UgdGhpcyB0byBEZWNvcmF0b3Igd2hlbiB0aGV5IHdpbGwgYmUgaW4gc3RhYmxlIHJlbGVhc2UKICBzdGF0aWMgbG9nRXJyb3IoZSkgewogIH0KICBzdGF0aWMgZnJvbUNhbWVyYUVycm9yKGUpIHsKICAgIGlmICh0aGlzLmxvZ0Vycm9yKGUpLCBlIGluc3RhbmNlb2YgSSkKICAgICAgcmV0dXJuIGU7CiAgICBsZXQgbTsKICAgIHN3aXRjaCAoZS5uYW1lKSB7CiAgICAgIGNhc2UgIk92ZXJjb25zdHJhaW5lZEVycm9yIjoKICAgICAgICBtID0gIk1pbmltdW0gcXVhbGl0eSByZXF1aXJlbWVudHMgYXJlIG5vdCBtZXQgYnkgeW91ciBjYW1lcmEiOwogICAgICAgIGJyZWFrOwogICAgICBjYXNlICJOb3RSZWFkYWJsZUVycm9yIjoKICAgICAgY2FzZSAiQWJvcnRFcnJvciI6CiAgICAgICAgbSA9ICJUaGUgd2ViY2FtIGlzIGFscmVhZHkgaW4gdXNlIGJ5IGFub3RoZXIgYXBwbGljYXRpb24iOwogICAgICAgIGJyZWFrOwogICAgICBjYXNlICJOb3RBbGxvd2VkRXJyb3IiOgogICAgICAgIG0gPSAiVG8gdXNlIHlvdXIgY2FtZXJhLCB5b3UgbXVzdCBhbGxvdyBwZXJtaXNzaW9ucyI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdEZvdW5kRXJyb3IiOgogICAgICAgIG0gPSAiVGhlcmUgaXMgbm8gY2FtZXJhIGF2YWlsYWJsZSB0byB5b3UiOwogICAgICAgIGJyZWFrOwogICAgICBkZWZhdWx0OgogICAgICAgIG0gPSAiQW4gdW5rbm93biBjYW1lcmEgZXJyb3IgaGFzIG9jY3VycmVkIjsKICAgICAgICBicmVhazsKICAgIH0KICAgIHJldHVybiBuZXcgSShtLCBlKTsKICB9CiAgc3RhdGljIGZyb21FcnJvcihlKSB7CiAgICBpZiAodGhpcy5sb2dFcnJvcihlKSwgZSBpbnN0YW5jZW9mIEkpCiAgICAgIHJldHVybiBlOwogICAgY29uc3QgbSA9ICJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcyBvY2N1cnJlZCI7CiAgICByZXR1cm4gbmV3IEkobSk7CiAgfQp9CmNvbnN0IGRlID0gewogIFJHQjogIlJHQiIsCiAgUkdCQTogIlJHQkEiCn0sIGhlID0gKGEpID0+IE51bWJlci5wYXJzZUZsb2F0KGEudG9GaXhlZCgzKSksIHllID0gKGEsIHUpID0+IE1hdGgubWluKGEsIHUpOwp2YXIgcGUgPSBmdW5jdGlvbigpIHsKICB2YXIgYSA9IHR5cGVvZiBkb2N1bWVudCA8ICJ1IiAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0ID8gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmMgOiB2b2lkIDA7CiAgcmV0dXJuIGZ1bmN0aW9uKHUpIHsKICAgIHUgPSB1IHx8IHt9OwogICAgdmFyIGU7CiAgICBlIHx8IChlID0gdHlwZW9mIHUgPCAidSIgPyB1IDoge30pOwogICAgdmFyIG0sIGc7CiAgICBlLnJlYWR5ID0gbmV3IFByb21pc2UoZnVuY3Rpb24obiwgdCkgewogICAgICBtID0gbiwgZyA9IHQ7CiAgICB9KTsKICAgIHZhciBDID0ge30sIEE7CiAgICBmb3IgKEEgaW4gZSkgZS5oYXNPd25Qcm9wZXJ0eShBKSAmJiAoQ1tBXSA9IGVbQV0pOwogICAgdmFyIE0gPSAiLi90aGlzLnByb2dyYW0iLCBPID0gITEsIFQgPSAhMTsKICAgIE8gPSB0eXBlb2Ygd2luZG93ID09ICJvYmplY3QiLCBUID0gdHlwZW9mIGltcG9ydFNjcmlwdHMgPT0gImZ1bmN0aW9uIjsKICAgIHZhciBfID0gIiIsIFM7CiAgICAoTyB8fCBUKSAmJiAoVCA/IF8gPSBzZWxmLmxvY2F0aW9uLmhyZWYgOiBkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIChfID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmMpLCBhICYmIChfID0gYSksIF8uaW5kZXhPZigiYmxvYjoiKSAhPT0gMCA/IF8gPSBfLnN1YnN0cigwLCBfLmxhc3RJbmRleE9mKCIvIikgKyAxKSA6IF8gPSAiIiwgVCAmJiAoUyA9IGZ1bmN0aW9uKG4pIHsKICAgICAgdmFyIHQgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsKICAgICAgcmV0dXJuIHQub3BlbigiR0VUIiwgbiwgITEpLCB0LnJlc3BvbnNlVHlwZSA9ICJhcnJheWJ1ZmZlciIsIHQuc2VuZChudWxsKSwgbmV3IFVpbnQ4QXJyYXkodC5yZXNwb25zZSk7CiAgICB9KSk7CiAgICB2YXIgRSA9IGUucHJpbnRFcnIgfHwgY29uc29sZS53YXJuLmJpbmQoY29uc29sZSk7CiAgICBmb3IgKEEgaW4gQykgQy5oYXNPd25Qcm9wZXJ0eShBKSAmJiAoZVtBXSA9IENbQV0pOwogICAgQyA9IG51bGwsIGUudGhpc1Byb2dyYW0gJiYgKE0gPSBlLnRoaXNQcm9ncmFtKTsKICAgIHZhciBXOwogICAgZS53YXNtQmluYXJ5ICYmIChXID0gZS53YXNtQmluYXJ5KSwgZS5ub0V4aXRSdW50aW1lICYmIGUubm9FeGl0UnVudGltZSwgdHlwZW9mIFdlYkFzc2VtYmx5ICE9ICJvYmplY3QiICYmIHNuKCJubyBuYXRpdmUgd2FzbSBzdXBwb3J0IGRldGVjdGVkIik7CiAgICB2YXIgSCwga24gPSAhMTsKICAgIGZ1bmN0aW9uIEtuKG4pIHsKICAgICAgbiB8fCBzbigiQXNzZXJ0aW9uIGZhaWxlZDogdW5kZWZpbmVkIik7CiAgICB9CiAgICB2YXIgUW4gPSB0eXBlb2YgVGV4dERlY29kZXIgPCAidSIgPyBuZXcgVGV4dERlY29kZXIoInV0ZjgiKSA6IHZvaWQgMDsKICAgIGZ1bmN0aW9uIFV0KG4sIHQsIHIpIHsKICAgICAgdmFyIGkgPSBGOwogICAgICBpZiAoMCA8IHIpIHsKICAgICAgICByID0gdCArIHIgLSAxOwogICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgbi5sZW5ndGg7ICsrbykgewogICAgICAgICAgdmFyIHMgPSBuLmNoYXJDb2RlQXQobyk7CiAgICAgICAgICBpZiAoNTUyOTYgPD0gcyAmJiA1NzM0MyA+PSBzKSB7CiAgICAgICAgICAgIHZhciBsID0gbi5jaGFyQ29kZUF0KCsrbyk7CiAgICAgICAgICAgIHMgPSA2NTUzNiArICgocyAmIDEwMjMpIDw8IDEwKSB8IGwgJiAxMDIzOwogICAgICAgICAgfQogICAgICAgICAgaWYgKDEyNyA+PSBzKSB7CiAgICAgICAgICAgIGlmICh0ID49IHIpIGJyZWFrOwogICAgICAgICAgICBpW3QrK10gPSBzOwogICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgaWYgKDIwNDcgPj0gcykgewogICAgICAgICAgICAgIGlmICh0ICsgMSA+PSByKSBicmVhazsKICAgICAgICAgICAgICBpW3QrK10gPSAxOTIgfCBzID4+IDY7CiAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgaWYgKDY1NTM1ID49IHMpIHsKICAgICAgICAgICAgICAgIGlmICh0ICsgMiA+PSByKSBicmVhazsKICAgICAgICAgICAgICAgIGlbdCsrXSA9IDIyNCB8IHMgPj4gMTI7CiAgICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgIGlmICh0ICsgMyA+PSByKSBicmVhazsKICAgICAgICAgICAgICAgIGlbdCsrXSA9IDI0MCB8IHMgPj4gMTgsIGlbdCsrXSA9IDEyOCB8IHMgPj4gMTIgJiA2MzsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgaVt0KytdID0gMTI4IHwgcyA+PiA2ICYgNjM7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgaVt0KytdID0gMTI4IHwgcyAmIDYzOwogICAgICAgICAgfQogICAgICAgIH0KICAgICAgICBpW3RdID0gMDsKICAgICAgfQogICAgfQogICAgdmFyIHFuID0gdHlwZW9mIFRleHREZWNvZGVyIDwgInUiID8gbmV3IFRleHREZWNvZGVyKCJ1dGYtMTZsZSIpIDogdm9pZCAwOwogICAgZnVuY3Rpb24gRHQobiwgdCkgewogICAgICBmb3IgKHZhciByID0gbiA+PiAxLCBpID0gciArIHQgLyAyOyAhKHIgPj0gaSkgJiYgeW5bcl07ICkgKytyOwogICAgICBpZiAociA8PD0gMSwgMzIgPCByIC0gbiAmJiBxbikgcmV0dXJuIHFuLmRlY29kZShGLnN1YmFycmF5KG4sIHIpKTsKICAgICAgZm9yIChyID0gMCwgaSA9ICIiOyA7ICkgewogICAgICAgIHZhciBvID0gUVtuICsgMiAqIHIgPj4gMV07CiAgICAgICAgaWYgKG8gPT0gMCB8fCByID09IHQgLyAyKSByZXR1cm4gaTsKICAgICAgICArK3IsIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShvKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gQnQobiwgdCwgcikgewogICAgICBpZiAociA9PT0gdm9pZCAwICYmIChyID0gMjE0NzQ4MzY0NyksIDIgPiByKSByZXR1cm4gMDsKICAgICAgciAtPSAyOwogICAgICB2YXIgaSA9IHQ7CiAgICAgIHIgPSByIDwgMiAqIG4ubGVuZ3RoID8gciAvIDIgOiBuLmxlbmd0aDsKICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCByOyArK28pIFFbdCA+PiAxXSA9IG4uY2hhckNvZGVBdChvKSwgdCArPSAyOwogICAgICByZXR1cm4gUVt0ID4+IDFdID0gMCwgdCAtIGk7CiAgICB9CiAgICBmdW5jdGlvbiB6dChuKSB7CiAgICAgIHJldHVybiAyICogbi5sZW5ndGg7CiAgICB9CiAgICBmdW5jdGlvbiBWdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSAwLCBpID0gIiI7ICEociA+PSB0IC8gNCk7ICkgewogICAgICAgIHZhciBvID0ga1tuICsgNCAqIHIgPj4gMl07CiAgICAgICAgaWYgKG8gPT0gMCkgYnJlYWs7CiAgICAgICAgKytyLCA2NTUzNiA8PSBvID8gKG8gLT0gNjU1MzYsIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiB8IG8gPj4gMTAsIDU2MzIwIHwgbyAmIDEwMjMpKSA6IGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShvKTsKICAgICAgfQogICAgICByZXR1cm4gaTsKICAgIH0KICAgIGZ1bmN0aW9uIEd0KG4sIHQsIHIpIHsKICAgICAgaWYgKHIgPT09IHZvaWQgMCAmJiAociA9IDIxNDc0ODM2NDcpLCA0ID4gcikgcmV0dXJuIDA7CiAgICAgIHZhciBpID0gdDsKICAgICAgciA9IGkgKyByIC0gNDsKICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCBuLmxlbmd0aDsgKytvKSB7CiAgICAgICAgdmFyIHMgPSBuLmNoYXJDb2RlQXQobyk7CiAgICAgICAgaWYgKDU1Mjk2IDw9IHMgJiYgNTczNDMgPj0gcykgewogICAgICAgICAgdmFyIGwgPSBuLmNoYXJDb2RlQXQoKytvKTsKICAgICAgICAgIHMgPSA2NTUzNiArICgocyAmIDEwMjMpIDw8IDEwKSB8IGwgJiAxMDIzOwogICAgICAgIH0KICAgICAgICBpZiAoa1t0ID4+IDJdID0gcywgdCArPSA0LCB0ICsgNCA+IHIpIGJyZWFrOwogICAgICB9CiAgICAgIHJldHVybiBrW3QgPj4gMl0gPSAwLCB0IC0gaTsKICAgIH0KICAgIGZ1bmN0aW9uIFl0KG4pIHsKICAgICAgZm9yICh2YXIgdCA9IDAsIHIgPSAwOyByIDwgbi5sZW5ndGg7ICsrcikgewogICAgICAgIHZhciBpID0gbi5jaGFyQ29kZUF0KHIpOwogICAgICAgIDU1Mjk2IDw9IGkgJiYgNTczNDMgPj0gaSAmJiArK3IsIHQgKz0gNDsKICAgICAgfQogICAgICByZXR1cm4gdDsKICAgIH0KICAgIHZhciBLLCBZLCBGLCBRLCB5biwgaywgVSwgbnQsIHR0OwogICAgZnVuY3Rpb24gZXQobikgewogICAgICBLID0gbiwgZS5IRUFQOCA9IFkgPSBuZXcgSW50OEFycmF5KG4pLCBlLkhFQVAxNiA9IFEgPSBuZXcgSW50MTZBcnJheShuKSwgZS5IRUFQMzIgPSBrID0gbmV3IEludDMyQXJyYXkobiksIGUuSEVBUFU4ID0gRiA9IG5ldyBVaW50OEFycmF5KG4pLCBlLkhFQVBVMTYgPSB5biA9IG5ldyBVaW50MTZBcnJheShuKSwgZS5IRUFQVTMyID0gVSA9IG5ldyBVaW50MzJBcnJheShuKSwgZS5IRUFQRjMyID0gbnQgPSBuZXcgRmxvYXQzMkFycmF5KG4pLCBlLkhFQVBGNjQgPSB0dCA9IG5ldyBGbG9hdDY0QXJyYXkobik7CiAgICB9CiAgICB2YXIgcnQgPSBlLklOSVRJQUxfTUVNT1JZIHx8IDE2Nzc3MjE2OwogICAgZS53YXNtTWVtb3J5ID8gSCA9IGUud2FzbU1lbW9yeSA6IEggPSBuZXcgV2ViQXNzZW1ibHkuTWVtb3J5KHsgaW5pdGlhbDogcnQgLyA2NTUzNiwgbWF4aW11bTogMzI3NjggfSksIEggJiYgKEsgPSBILmJ1ZmZlciksIHJ0ID0gSy5ieXRlTGVuZ3RoLCBldChLKTsKICAgIHZhciBpdCA9IFtdLCBhdCA9IFtdLCBadCA9IFtdLCBvdCA9IFtdOwogICAgZnVuY3Rpb24gJHQoKSB7CiAgICAgIHZhciBuID0gZS5wcmVSdW4uc2hpZnQoKTsKICAgICAgaXQudW5zaGlmdChuKTsKICAgIH0KICAgIHZhciBaID0gMCwgb24gPSBudWxsOwogICAgZS5wcmVsb2FkZWRJbWFnZXMgPSB7fSwgZS5wcmVsb2FkZWRBdWRpb3MgPSB7fTsKICAgIGZ1bmN0aW9uIHNuKG4pIHsKICAgICAgdGhyb3cgZS5vbkFib3J0ICYmIGUub25BYm9ydChuKSwgRShuKSwga24gPSAhMCwgbiA9IG5ldyBXZWJBc3NlbWJseS5SdW50aW1lRXJyb3IoImFib3J0KCIgKyBuICsgIikuIEJ1aWxkIHdpdGggLXMgQVNTRVJUSU9OUz0xIGZvciBtb3JlIGluZm8uIiksIGcobiksIG47CiAgICB9CiAgICBmdW5jdGlvbiBSbihuKSB7CiAgICAgIHZhciB0ID0gJDsKICAgICAgcmV0dXJuIFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCA/IHQuc3RhcnRzV2l0aChuKSA6IHQuaW5kZXhPZihuKSA9PT0gMDsKICAgIH0KICAgIGZ1bmN0aW9uIHN0KCkgewogICAgICByZXR1cm4gUm4oImRhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCwiKTsKICAgIH0KICAgIHZhciAkID0gInNhbS53YXNtIjsKICAgIGlmICghc3QoKSkgewogICAgICB2YXIgdXQgPSAkOwogICAgICAkID0gZS5sb2NhdGVGaWxlID8gZS5sb2NhdGVGaWxlKHV0LCBfKSA6IF8gKyB1dDsKICAgIH0KICAgIGZ1bmN0aW9uIGN0KCkgewogICAgICB0cnkgewogICAgICAgIGlmIChXKSByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoVyk7CiAgICAgICAgaWYgKFMpIHJldHVybiBTKCQpOwogICAgICAgIHRocm93ICJib3RoIGFzeW5jIGFuZCBzeW5jIGZldGNoaW5nIG9mIHRoZSB3YXNtIGZhaWxlZCI7CiAgICAgIH0gY2F0Y2ggKG4pIHsKICAgICAgICBzbihuKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gWHQoKSB7CiAgICAgIHJldHVybiBXIHx8ICFPICYmICFUIHx8IHR5cGVvZiBmZXRjaCAhPSAiZnVuY3Rpb24iIHx8IFJuKCJmaWxlOi8vIikgPyBQcm9taXNlLnJlc29sdmUoKS50aGVuKGN0KSA6IGZldGNoKCQsIHsgY3JlZGVudGlhbHM6ICJzYW1lLW9yaWdpbiIgfSkudGhlbihmdW5jdGlvbihuKSB7CiAgICAgICAgaWYgKCFuLm9rKSB0aHJvdyAiZmFpbGVkIHRvIGxvYWQgd2FzbSBiaW5hcnkgZmlsZSBhdCAnIiArICQgKyAiJyI7CiAgICAgICAgcmV0dXJuIG4uYXJyYXlCdWZmZXIoKTsKICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oKSB7CiAgICAgICAgcmV0dXJuIGN0KCk7CiAgICAgIH0pOwogICAgfQogICAgZnVuY3Rpb24gcG4obikgewogICAgICBmb3IgKDsgMCA8IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4uc2hpZnQoKTsKICAgICAgICBpZiAodHlwZW9mIHQgPT0gImZ1bmN0aW9uIikgdChlKTsKICAgICAgICBlbHNlIHsKICAgICAgICAgIHZhciByID0gdC5CYTsKICAgICAgICAgIHR5cGVvZiByID09ICJudW1iZXIiID8gdC50YSA9PT0gdm9pZCAwID8geG4oInYiLCByKSgpIDogeG4oInZpIiwgcikodC50YSkgOiByKHQudGEgPT09IHZvaWQgMCA/IG51bGwgOiB0LnRhKTsKICAgICAgICB9CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHhuKG4sIHQpIHsKICAgICAgdmFyIHIgPSBbXTsKICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkgewogICAgICAgIHIubGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsKICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgcltpXSA9IGFyZ3VtZW50c1tpXTsKICAgICAgICByZXR1cm4gciAmJiByLmxlbmd0aCA/IGVbImR5bkNhbGxfIiArIG5dLmFwcGx5KG51bGwsIFt0XS5jb25jYXQocikpIDogZVsiZHluQ2FsbF8iICsgbl0uY2FsbChudWxsLCB0KTsKICAgICAgfTsKICAgIH0KICAgIGZ1bmN0aW9uIEp0KG4pIHsKICAgICAgdGhpcy5kYSA9IG4gLSAxNiwgdGhpcy5PYSA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICBrW3RoaXMuZGEgKyA4ID4+IDJdID0gdDsKICAgICAgfSwgdGhpcy5MYSA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICBrW3RoaXMuZGEgKyAwID4+IDJdID0gdDsKICAgICAgfSwgdGhpcy5NYSA9IGZ1bmN0aW9uKCkgewogICAgICAgIGtbdGhpcy5kYSArIDQgPj4gMl0gPSAwOwogICAgICB9LCB0aGlzLkthID0gZnVuY3Rpb24oKSB7CiAgICAgICAgWVt0aGlzLmRhICsgMTIgPj4gMF0gPSAwOwogICAgICB9LCB0aGlzLk5hID0gZnVuY3Rpb24oKSB7CiAgICAgICAgWVt0aGlzLmRhICsgMTMgPj4gMF0gPSAwOwogICAgICB9LCB0aGlzLkZhID0gZnVuY3Rpb24odCwgcikgewogICAgICAgIHRoaXMuT2EodCksIHRoaXMuTGEociksIHRoaXMuTWEoKSwgdGhpcy5LYSgpLCB0aGlzLk5hKCk7CiAgICAgIH07CiAgICB9CiAgICBmdW5jdGlvbiBtbigpIHsKICAgICAgcmV0dXJuIDAgPCBtbi54YTsKICAgIH0KICAgIGZ1bmN0aW9uIEZuKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSAxOgogICAgICAgICAgcmV0dXJuIDA7CiAgICAgICAgY2FzZSAyOgogICAgICAgICAgcmV0dXJuIDE7CiAgICAgICAgY2FzZSA0OgogICAgICAgICAgcmV0dXJuIDI7CiAgICAgICAgY2FzZSA4OgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gdHlwZSBzaXplOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIHZhciBsdCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIFIobikgewogICAgICBmb3IgKHZhciB0ID0gIiI7IEZbbl07ICkgdCArPSBsdFtGW24rK11dOwogICAgICByZXR1cm4gdDsKICAgIH0KICAgIHZhciBxID0ge30sIFggPSB7fSwgdm4gPSB7fTsKICAgIGZ1bmN0aW9uIEluKG4pIHsKICAgICAgaWYgKG4gPT09IHZvaWQgMCkgcmV0dXJuICJfdW5rbm93biI7CiAgICAgIG4gPSBuLnJlcGxhY2UoL1teYS16QS1aMC05X10vZywgIiQiKTsKICAgICAgdmFyIHQgPSBuLmNoYXJDb2RlQXQoMCk7CiAgICAgIHJldHVybiA0OCA8PSB0ICYmIDU3ID49IHQgPyAiXyIgKyBuIDogbjsKICAgIH0KICAgIGZ1bmN0aW9uIGpuKG4sIHQpIHsKICAgICAgcmV0dXJuIG4gPSBJbihuKSwgbmV3IEZ1bmN0aW9uKCJib2R5IiwgInJldHVybiBmdW5jdGlvbiAiICsgbiArIGAoKSB7CiAgICAidXNlIHN0cmljdCI7ICAgIHJldHVybiBib2R5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7Cn07CmApKHQpOwogICAgfQogICAgZnVuY3Rpb24gTG4obikgewogICAgICB2YXIgdCA9IEVycm9yLCByID0gam4obiwgZnVuY3Rpb24oaSkgewogICAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMubWVzc2FnZSA9IGksIGkgPSBFcnJvcihpKS5zdGFjaywgaSAhPT0gdm9pZCAwICYmICh0aGlzLnN0YWNrID0gdGhpcy50b1N0cmluZygpICsgYApgICsgaS5yZXBsYWNlKC9eRXJyb3IoOlteXG5dKik/XG4vLCAiIikpOwogICAgICB9KTsKICAgICAgcmV0dXJuIHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSksIHIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gciwgci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlID09PSB2b2lkIDAgPyB0aGlzLm5hbWUgOiB0aGlzLm5hbWUgKyAiOiAiICsgdGhpcy5tZXNzYWdlOwogICAgICB9LCByOwogICAgfQogICAgdmFyIG5uID0gdm9pZCAwOwogICAgZnVuY3Rpb24gdihuKSB7CiAgICAgIHRocm93IG5ldyBubihuKTsKICAgIH0KICAgIHZhciBmdCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIGduKG4pIHsKICAgICAgdGhyb3cgbmV3IGZ0KG4pOwogICAgfQogICAgZnVuY3Rpb24gdG4obiwgdCwgcikgewogICAgICBmdW5jdGlvbiBpKGMpIHsKICAgICAgICBjID0gcihjKSwgYy5sZW5ndGggIT09IG4ubGVuZ3RoICYmIGduKCJNaXNtYXRjaGVkIHR5cGUgY29udmVydGVyIGNvdW50Iik7CiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBuLmxlbmd0aDsgKyt5KSBEKG5beV0sIGNbeV0pOwogICAgICB9CiAgICAgIG4uZm9yRWFjaChmdW5jdGlvbihjKSB7CiAgICAgICAgdm5bY10gPSB0OwogICAgICB9KTsKICAgICAgdmFyIG8gPSBBcnJheSh0Lmxlbmd0aCksIHMgPSBbXSwgbCA9IDA7CiAgICAgIHQuZm9yRWFjaChmdW5jdGlvbihjLCB5KSB7CiAgICAgICAgWC5oYXNPd25Qcm9wZXJ0eShjKSA/IG9beV0gPSBYW2NdIDogKHMucHVzaChjKSwgcS5oYXNPd25Qcm9wZXJ0eShjKSB8fCAocVtjXSA9IFtdKSwgcVtjXS5wdXNoKGZ1bmN0aW9uKCkgewogICAgICAgICAgb1t5XSA9IFhbY10sICsrbCwgbCA9PT0gcy5sZW5ndGggJiYgaShvKTsKICAgICAgICB9KSk7CiAgICAgIH0pLCBzLmxlbmd0aCA9PT0gMCAmJiBpKG8pOwogICAgfQogICAgZnVuY3Rpb24gRChuLCB0LCByKSB7CiAgICAgIGlmIChyID0gciB8fCB7fSwgISgiYXJnUGFja0FkdmFuY2UiIGluIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCJyZWdpc3RlclR5cGUgcmVnaXN0ZXJlZEluc3RhbmNlIHJlcXVpcmVzIGFyZ1BhY2tBZHZhbmNlIik7CiAgICAgIHZhciBpID0gdC5uYW1lOwogICAgICBpZiAobiB8fCB2KCd0eXBlICInICsgaSArICciIG11c3QgaGF2ZSBhIHBvc2l0aXZlIGludGVnZXIgdHlwZWlkIHBvaW50ZXInKSwgWC5oYXNPd25Qcm9wZXJ0eShuKSkgewogICAgICAgIGlmIChyLkVhKSByZXR1cm47CiAgICAgICAgdigiQ2Fubm90IHJlZ2lzdGVyIHR5cGUgJyIgKyBpICsgIicgdHdpY2UiKTsKICAgICAgfQogICAgICBYW25dID0gdCwgZGVsZXRlIHZuW25dLCBxLmhhc093blByb3BlcnR5KG4pICYmICh0ID0gcVtuXSwgZGVsZXRlIHFbbl0sIHQuZm9yRWFjaChmdW5jdGlvbihvKSB7CiAgICAgICAgbygpOwogICAgICB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiBLdChuKSB7CiAgICAgIHJldHVybiB7IGNvdW50OiBuLmNvdW50LCBvYTogbi5vYSwgcGE6IG4ucGEsIGRhOiBuLmRhLCBmYTogbi5mYSwgZ2E6IG4uZ2EsIGhhOiBuLmhhIH07CiAgICB9CiAgICBmdW5jdGlvbiBObihuKSB7CiAgICAgIHYobi5BLmZhLmVhLm5hbWUgKyAiIGluc3RhbmNlIGFscmVhZHkgZGVsZXRlZCIpOwogICAgfQogICAgdmFyIEhuID0gITE7CiAgICBmdW5jdGlvbiBkdCgpIHsKICAgIH0KICAgIGZ1bmN0aW9uIGh0KG4pIHsKICAgICAgLS1uLmNvdW50LnZhbHVlLCBuLmNvdW50LnZhbHVlID09PSAwICYmIChuLmdhID8gbi5oYS5uYShuLmdhKSA6IG4uZmEuZWEubmEobi5kYSkpOwogICAgfQogICAgZnVuY3Rpb24gdW4obikgewogICAgICByZXR1cm4gdHlwZW9mIEZpbmFsaXphdGlvbkdyb3VwID4gInUiID8gKHVuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiB0OwogICAgICB9LCBuKSA6IChIbiA9IG5ldyBGaW5hbGl6YXRpb25Hcm91cChmdW5jdGlvbih0KSB7CiAgICAgICAgZm9yICh2YXIgciA9IHQubmV4dCgpOyAhci5kb25lOyByID0gdC5uZXh0KCkpIHIgPSByLnZhbHVlLCByLmRhID8gaHQocikgOiBjb25zb2xlLndhcm4oIm9iamVjdCBhbHJlYWR5IGRlbGV0ZWQ6ICIgKyByLmRhKTsKICAgICAgfSksIHVuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiBIbi5yZWdpc3Rlcih0LCB0LkEsIHQuQSksIHQ7CiAgICAgIH0sIGR0ID0gZnVuY3Rpb24odCkgewogICAgICAgIEhuLnVucmVnaXN0ZXIodC5BKTsKICAgICAgfSwgdW4obikpOwogICAgfQogICAgdmFyIGNuID0gdm9pZCAwLCBsbiA9IFtdOwogICAgZnVuY3Rpb24gVW4oKSB7CiAgICAgIGZvciAoOyBsbi5sZW5ndGg7ICkgewogICAgICAgIHZhciBuID0gbG4ucG9wKCk7CiAgICAgICAgbi5BLm9hID0gITEsIG4uZGVsZXRlKCk7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIFYoKSB7CiAgICB9CiAgICB2YXIgeXQgPSB7fTsKICAgIGZ1bmN0aW9uIFF0KG4sIHQpIHsKICAgICAgdmFyIHIgPSBlOwogICAgICBpZiAocltuXS5qYSA9PT0gdm9pZCAwKSB7CiAgICAgICAgdmFyIGkgPSByW25dOwogICAgICAgIHJbbl0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiByW25dLmphLmhhc093blByb3BlcnR5KGFyZ3VtZW50cy5sZW5ndGgpIHx8IHYoIkZ1bmN0aW9uICciICsgdCArICInIGNhbGxlZCB3aXRoIGFuIGludmFsaWQgbnVtYmVyIG9mIGFyZ3VtZW50cyAoIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiKSAtIGV4cGVjdHMgb25lIG9mICgiICsgcltuXS5qYSArICIpISIpLCByW25dLmphW2FyZ3VtZW50cy5sZW5ndGhdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgfSwgcltuXS5qYSA9IFtdLCByW25dLmphW2kueWFdID0gaTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gcHQobiwgdCwgcikgewogICAgICBlLmhhc093blByb3BlcnR5KG4pID8gKChyID09PSB2b2lkIDAgfHwgZVtuXS5qYSAhPT0gdm9pZCAwICYmIGVbbl0uamFbcl0gIT09IHZvaWQgMCkgJiYgdigiQ2Fubm90IHJlZ2lzdGVyIHB1YmxpYyBuYW1lICciICsgbiArICInIHR3aWNlIiksIFF0KG4sIG4pLCBlLmhhc093blByb3BlcnR5KHIpICYmIHYoIkNhbm5vdCByZWdpc3RlciBtdWx0aXBsZSBvdmVybG9hZHMgb2YgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIG51bWJlciBvZiBhcmd1bWVudHMgKCIgKyByICsgIikhIiksIGVbbl0uamFbcl0gPSB0KSA6IChlW25dID0gdCwgciAhPT0gdm9pZCAwICYmIChlW25dLlJhID0gcikpOwogICAgfQogICAgZnVuY3Rpb24gcXQobiwgdCwgciwgaSwgbywgcywgbCwgYykgewogICAgICB0aGlzLm5hbWUgPSBuLCB0aGlzLmNvbnN0cnVjdG9yID0gdCwgdGhpcy5tYSA9IHIsIHRoaXMubmEgPSBpLCB0aGlzLmlhID0gbywgdGhpcy5DYSA9IHMsIHRoaXMucWEgPSBsLCB0aGlzLkFhID0gYzsKICAgIH0KICAgIGZ1bmN0aW9uIHduKG4sIHQsIHIpIHsKICAgICAgZm9yICg7IHQgIT09IHI7ICkgdC5xYSB8fCB2KCJFeHBlY3RlZCBudWxsIG9yIGluc3RhbmNlIG9mICIgKyByLm5hbWUgKyAiLCBnb3QgYW4gaW5zdGFuY2Ugb2YgIiArIHQubmFtZSksIG4gPSB0LnFhKG4pLCB0ID0gdC5pYTsKICAgICAgcmV0dXJuIG47CiAgICB9CiAgICBmdW5jdGlvbiBuZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgcm4odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIHduKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiB0ZShuLCB0KSB7CiAgICAgIGlmICh0ID09PSBudWxsKSB7CiAgICAgICAgaWYgKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgdGhpcy5zYSkgewogICAgICAgICAgdmFyIHIgPSB0aGlzLkhhKCk7CiAgICAgICAgICByZXR1cm4gbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgciksIHI7CiAgICAgICAgfQogICAgICAgIHJldHVybiAwOwogICAgICB9CiAgICAgIGlmICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBybih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgIXRoaXMucmEgJiYgdC5BLmZhLnJhICYmIHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArICh0LkEuaGEgPyB0LkEuaGEubmFtZSA6IHQuQS5mYS5uYW1lKSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIHIgPSB3bih0LkEuZGEsIHQuQS5mYS5lYSwgdGhpcy5lYSksIHRoaXMuc2EpIHN3aXRjaCAodC5BLmdhID09PSB2b2lkIDAgJiYgdigiUGFzc2luZyByYXcgcG9pbnRlciB0byBzbWFydCBwb2ludGVyIGlzIGlsbGVnYWwiKSwgdGhpcy5QYSkgewogICAgICAgIGNhc2UgMDoKICAgICAgICAgIHQuQS5oYSA9PT0gdGhpcyA/IHIgPSB0LkEuZ2EgOiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyAodC5BLmhhID8gdC5BLmhhLm5hbWUgOiB0LkEuZmEubmFtZSkgKyAiIHRvIHBhcmFtZXRlciB0eXBlICIgKyB0aGlzLm5hbWUpOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAxOgogICAgICAgICAgciA9IHQuQS5nYTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIGlmICh0LkEuaGEgPT09IHRoaXMpIHIgPSB0LkEuZ2E7CiAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgdmFyIGkgPSB0LmNsb25lKCk7CiAgICAgICAgICAgIHIgPSB0aGlzLklhKHIsIGVuKGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIGkuZGVsZXRlKCk7CiAgICAgICAgICAgIH0pKSwgbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgcik7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdigiVW5zdXBwb3J0aW5nIHNoYXJpbmcgcG9saWN5Iik7CiAgICAgIH0KICAgICAgcmV0dXJuIHI7CiAgICB9CiAgICBmdW5jdGlvbiBlZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgcm4odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIHQuQS5mYS5yYSAmJiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyB0LkEuZmEubmFtZSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIHduKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiBBbihuKSB7CiAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShVW24gPj4gMl0pOwogICAgfQogICAgZnVuY3Rpb24gbXQobiwgdCwgcikgewogICAgICByZXR1cm4gdCA9PT0gciA/IG4gOiByLmlhID09PSB2b2lkIDAgPyBudWxsIDogKG4gPSBtdChuLCB0LCByLmlhKSwgbiA9PT0gbnVsbCA/IG51bGwgOiByLkFhKG4pKTsKICAgIH0KICAgIHZhciBmbiA9IHt9OwogICAgZnVuY3Rpb24gcmUobiwgdCkgewogICAgICBmb3IgKHQgPT09IHZvaWQgMCAmJiB2KCJwdHIgc2hvdWxkIG5vdCBiZSB1bmRlZmluZWQiKTsgbi5pYTsgKSB0ID0gbi5xYSh0KSwgbiA9IG4uaWE7CiAgICAgIHJldHVybiBmblt0XTsKICAgIH0KICAgIGZ1bmN0aW9uIF9uKG4sIHQpIHsKICAgICAgcmV0dXJuIHQuZmEgJiYgdC5kYSB8fCBnbigibWFrZUNsYXNzSGFuZGxlIHJlcXVpcmVzIHB0ciBhbmQgcHRyVHlwZSIpLCAhIXQuaGEgIT0gISF0LmdhICYmIGduKCJCb3RoIHNtYXJ0UHRyVHlwZSBhbmQgc21hcnRQdHIgbXVzdCBiZSBzcGVjaWZpZWQiKSwgdC5jb3VudCA9IHsgdmFsdWU6IDEgfSwgdW4oT2JqZWN0LmNyZWF0ZShuLCB7IEE6IHsgdmFsdWU6IHQgfSB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiBCKG4sIHQsIHIsIGkpIHsKICAgICAgdGhpcy5uYW1lID0gbiwgdGhpcy5lYSA9IHQsIHRoaXMudWEgPSByLCB0aGlzLnJhID0gaSwgdGhpcy5zYSA9ICExLCB0aGlzLm5hID0gdGhpcy5JYSA9IHRoaXMuSGEgPSB0aGlzLndhID0gdGhpcy5QYSA9IHRoaXMuR2EgPSB2b2lkIDAsIHQuaWEgIT09IHZvaWQgMCA/IHRoaXMudG9XaXJlVHlwZSA9IHRlIDogKHRoaXMudG9XaXJlVHlwZSA9IGkgPyBuZSA6IGVlLCB0aGlzLmthID0gbnVsbCk7CiAgICB9CiAgICBmdW5jdGlvbiB2dChuLCB0LCByKSB7CiAgICAgIGUuaGFzT3duUHJvcGVydHkobikgfHwgZ24oIlJlcGxhY2luZyBub25leGlzdGFudCBwdWJsaWMgc3ltYm9sIiksIGVbbl0uamEgIT09IHZvaWQgMCAmJiByICE9PSB2b2lkIDAgPyBlW25dLmphW3JdID0gdCA6IChlW25dID0gdCwgZVtuXS55YSA9IHIpOwogICAgfQogICAgZnVuY3Rpb24gRyhuLCB0KSB7CiAgICAgIG4gPSBSKG4pOwogICAgICB2YXIgciA9IHhuKG4sIHQpOwogICAgICByZXR1cm4gdHlwZW9mIHIgIT0gImZ1bmN0aW9uIiAmJiB2KCJ1bmtub3duIGZ1bmN0aW9uIHBvaW50ZXIgd2l0aCBzaWduYXR1cmUgIiArIG4gKyAiOiAiICsgdCksIHI7CiAgICB9CiAgICB2YXIgZ3QgPSB2b2lkIDA7CiAgICBmdW5jdGlvbiB3dChuKSB7CiAgICAgIG4gPSBXdChuKTsKICAgICAgdmFyIHQgPSBSKG4pOwogICAgICByZXR1cm4geihuKSwgdDsKICAgIH0KICAgIGZ1bmN0aW9uIGRuKG4sIHQpIHsKICAgICAgZnVuY3Rpb24gcihzKSB7CiAgICAgICAgb1tzXSB8fCBYW3NdIHx8ICh2bltzXSA/IHZuW3NdLmZvckVhY2gocikgOiAoaS5wdXNoKHMpLCBvW3NdID0gITApKTsKICAgICAgfQogICAgICB2YXIgaSA9IFtdLCBvID0ge307CiAgICAgIHRocm93IHQuZm9yRWFjaChyKSwgbmV3IGd0KG4gKyAiOiAiICsgaS5tYXAod3QpLmpvaW4oWyIsICJdKSk7CiAgICB9CiAgICBmdW5jdGlvbiBBdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSBbXSwgaSA9IDA7IGkgPCBuOyBpKyspIHIucHVzaChrWyh0ID4+IDIpICsgaV0pOwogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIENuKG4pIHsKICAgICAgZm9yICg7IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4ucG9wKCk7CiAgICAgICAgbi5wb3AoKSh0KTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gX3QobiwgdCwgcikgewogICAgICByZXR1cm4gbiBpbnN0YW5jZW9mIE9iamVjdCB8fCB2KHIgKyAnIHdpdGggaW52YWxpZCAidGhpcyI6ICcgKyBuKSwgbiBpbnN0YW5jZW9mIHQuZWEuY29uc3RydWN0b3IgfHwgdihyICsgJyBpbmNvbXBhdGlibGUgd2l0aCAidGhpcyIgb2YgdHlwZSAnICsgbi5jb25zdHJ1Y3Rvci5uYW1lKSwgbi5BLmRhIHx8IHYoImNhbm5vdCBjYWxsIGVtc2NyaXB0ZW4gYmluZGluZyBtZXRob2QgIiArIHIgKyAiIG9uIGRlbGV0ZWQgb2JqZWN0IiksIHduKG4uQS5kYSwgbi5BLmZhLmVhLCB0LmVhKTsKICAgIH0KICAgIHZhciBEbiA9IFtdLCBqID0gW3t9LCB7IHZhbHVlOiB2b2lkIDAgfSwgeyB2YWx1ZTogbnVsbCB9LCB7IHZhbHVlOiAhMCB9LCB7IHZhbHVlOiAhMSB9XTsKICAgIGZ1bmN0aW9uIEJuKG4pIHsKICAgICAgNCA8IG4gJiYgLS1qW25dLkphID09PSAwICYmIChqW25dID0gdm9pZCAwLCBEbi5wdXNoKG4pKTsKICAgIH0KICAgIGZ1bmN0aW9uIGVuKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSB2b2lkIDA6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIG51bGw6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlICEwOgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgY2FzZSAhMToKICAgICAgICAgIHJldHVybiA0OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB2YXIgdCA9IERuLmxlbmd0aCA/IERuLnBvcCgpIDogai5sZW5ndGg7CiAgICAgICAgICByZXR1cm4galt0XSA9IHsgSmE6IDEsIHZhbHVlOiBuIH0sIHQ7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHJuKG4pIHsKICAgICAgaWYgKG4gPT09IG51bGwpIHJldHVybiAibnVsbCI7CiAgICAgIHZhciB0ID0gdHlwZW9mIG47CiAgICAgIHJldHVybiB0ID09PSAib2JqZWN0IiB8fCB0ID09PSAiYXJyYXkiIHx8IHQgPT09ICJmdW5jdGlvbiIgPyBuLnRvU3RyaW5nKCkgOiAiIiArIG47CiAgICB9CiAgICBmdW5jdGlvbiBpZShuLCB0KSB7CiAgICAgIHN3aXRjaCAodCkgewogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiBmdW5jdGlvbihyKSB7CiAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShudFtyID4+IDJdKTsKICAgICAgICAgIH07CiAgICAgICAgY2FzZSAzOgogICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHIpIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKHR0W3IgPj4gM10pOwogICAgICAgICAgfTsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBmbG9hdCB0eXBlOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIGFlKG4pIHsKICAgICAgdmFyIHQgPSBGdW5jdGlvbjsKICAgICAgaWYgKCEodCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSkgdGhyb3cgbmV3IFR5cGVFcnJvcigibmV3XyBjYWxsZWQgd2l0aCBjb25zdHJ1Y3RvciB0eXBlICIgKyB0eXBlb2YgdCArICIgd2hpY2ggaXMgbm90IGEgZnVuY3Rpb24iKTsKICAgICAgdmFyIHIgPSBqbih0Lm5hbWUgfHwgInVua25vd25GdW5jdGlvbk5hbWUiLCBmdW5jdGlvbigpIHsKICAgICAgfSk7CiAgICAgIHJldHVybiByLnByb3RvdHlwZSA9IHQucHJvdG90eXBlLCByID0gbmV3IHIoKSwgbiA9IHQuYXBwbHkociwgbiksIG4gaW5zdGFuY2VvZiBPYmplY3QgPyBuIDogcjsKICAgIH0KICAgIGZ1bmN0aW9uIG9lKG4sIHQsIHIpIHsKICAgICAgc3dpdGNoICh0KSB7CiAgICAgICAgY2FzZSAwOgogICAgICAgICAgcmV0dXJuIHIgPyBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBZW2ldOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIEZbaV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMToKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gUVtpID4+IDFdOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIHluW2kgPj4gMV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4ga1tpID4+IDJdOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIFVbaSA+PiAyXTsKICAgICAgICAgIH07CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gaW50ZWdlciB0eXBlOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHpuKG4pIHsKICAgICAgcmV0dXJuIG4gfHwgdigiQ2Fubm90IHVzZSBkZWxldGVkIHZhbC4gaGFuZGxlID0gIiArIG4pLCBqW25dLnZhbHVlOwogICAgfQogICAgZnVuY3Rpb24gQ3QobiwgdCkgewogICAgICB2YXIgciA9IFhbbl07CiAgICAgIHJldHVybiByID09PSB2b2lkIDAgJiYgdih0ICsgIiBoYXMgdW5rbm93biB0eXBlICIgKyB3dChuKSksIHI7CiAgICB9CiAgICB2YXIgc2UgPSB7fSwgVHQgPSB7fTsKICAgIGZ1bmN0aW9uIEV0KCkgewogICAgICBpZiAoIVZuKSB7CiAgICAgICAgdmFyIG4gPSB7IFVTRVI6ICJ3ZWJfdXNlciIsIExPR05BTUU6ICJ3ZWJfdXNlciIsIFBBVEg6ICIvIiwgUFdEOiAiLyIsIEhPTUU6ICIvaG9tZS93ZWJfdXNlciIsIExBTkc6ICh0eXBlb2YgbmF2aWdhdG9yID09ICJvYmplY3QiICYmIG5hdmlnYXRvci5sYW5ndWFnZXMgJiYgbmF2aWdhdG9yLmxhbmd1YWdlc1swXSB8fCAiQyIpLnJlcGxhY2UoIi0iLCAiXyIpICsgIi5VVEYtOCIsIF86IE0gfHwgIi4vdGhpcy5wcm9ncmFtIiB9LCB0OwogICAgICAgIGZvciAodCBpbiBUdCkgblt0XSA9IFR0W3RdOwogICAgICAgIHZhciByID0gW107CiAgICAgICAgZm9yICh0IGluIG4pIHIucHVzaCh0ICsgIj0iICsgblt0XSk7CiAgICAgICAgVm4gPSByOwogICAgICB9CiAgICAgIHJldHVybiBWbjsKICAgIH0KICAgIHZhciBWbiwgUHQgPSBbXTsKICAgIGZ1bmN0aW9uIE10KG4pIHsKICAgICAgdmFyIHQgPSB7fSwgcjsKICAgICAgZm9yIChyIGluIG4pIChmdW5jdGlvbihpKSB7CiAgICAgICAgdmFyIG8gPSBuW2ldOwogICAgICAgIHRbaV0gPSB0eXBlb2YgbyA9PSAiZnVuY3Rpb24iID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICBQdC5wdXNoKGkpOwogICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgcmV0dXJuIG8uYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgICAgICAgIH0gZmluYWxseSB7CiAgICAgICAgICAgIGlmIChrbikgcmV0dXJuOwogICAgICAgICAgICB2YXIgcyA9IFB0LnBvcCgpOwogICAgICAgICAgICBLbihzID09PSBpKTsKICAgICAgICAgIH0KICAgICAgICB9IDogbzsKICAgICAgfSkocik7CiAgICAgIHJldHVybiB0OwogICAgfQogICAgZm9yICh2YXIgT3QgPSBBcnJheSgyNTYpLCBUbiA9IDA7IDI1NiA+IFRuOyArK1RuKSBPdFtUbl0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFRuKTsKICAgIGx0ID0gT3QsIG5uID0gZS5CaW5kaW5nRXJyb3IgPSBMbigiQmluZGluZ0Vycm9yIiksIGZ0ID0gZS5JbnRlcm5hbEVycm9yID0gTG4oIkludGVybmFsRXJyb3IiKSwgVi5wcm90b3R5cGUuaXNBbGlhc09mID0gZnVuY3Rpb24obikgewogICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgViAmJiBuIGluc3RhbmNlb2YgVikpIHJldHVybiAhMTsKICAgICAgdmFyIHQgPSB0aGlzLkEuZmEuZWEsIHIgPSB0aGlzLkEuZGEsIGkgPSBuLkEuZmEuZWE7CiAgICAgIGZvciAobiA9IG4uQS5kYTsgdC5pYTsgKSByID0gdC5xYShyKSwgdCA9IHQuaWE7CiAgICAgIGZvciAoOyBpLmlhOyApIG4gPSBpLnFhKG4pLCBpID0gaS5pYTsKICAgICAgcmV0dXJuIHQgPT09IGkgJiYgciA9PT0gbjsKICAgIH0sIFYucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7CiAgICAgIGlmICh0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5wYSkgcmV0dXJuIHRoaXMuQS5jb3VudC52YWx1ZSArPSAxLCB0aGlzOwogICAgICB2YXIgbiA9IHVuKE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLCB7IEE6IHsgdmFsdWU6IEt0KHRoaXMuQSkgfSB9KSk7CiAgICAgIHJldHVybiBuLkEuY291bnQudmFsdWUgKz0gMSwgbi5BLm9hID0gITEsIG47CiAgICB9LCBWLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbigpIHsKICAgICAgdGhpcy5BLmRhIHx8IE5uKHRoaXMpLCB0aGlzLkEub2EgJiYgIXRoaXMuQS5wYSAmJiB2KCJPYmplY3QgYWxyZWFkeSBzY2hlZHVsZWQgZm9yIGRlbGV0aW9uIiksIGR0KHRoaXMpLCBodCh0aGlzLkEpLCB0aGlzLkEucGEgfHwgKHRoaXMuQS5nYSA9IHZvaWQgMCwgdGhpcy5BLmRhID0gdm9pZCAwKTsKICAgIH0sIFYucHJvdG90eXBlLmlzRGVsZXRlZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gIXRoaXMuQS5kYTsKICAgIH0sIFYucHJvdG90eXBlLmRlbGV0ZUxhdGVyID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiB0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5vYSAmJiAhdGhpcy5BLnBhICYmIHYoIk9iamVjdCBhbHJlYWR5IHNjaGVkdWxlZCBmb3IgZGVsZXRpb24iKSwgbG4ucHVzaCh0aGlzKSwgbG4ubGVuZ3RoID09PSAxICYmIGNuICYmIGNuKFVuKSwgdGhpcy5BLm9hID0gITAsIHRoaXM7CiAgICB9LCBCLnByb3RvdHlwZS5EYSA9IGZ1bmN0aW9uKG4pIHsKICAgICAgcmV0dXJuIHRoaXMud2EgJiYgKG4gPSB0aGlzLndhKG4pKSwgbjsKICAgIH0sIEIucHJvdG90eXBlLnZhID0gZnVuY3Rpb24obikgewogICAgICB0aGlzLm5hICYmIHRoaXMubmEobik7CiAgICB9LCBCLnByb3RvdHlwZS5hcmdQYWNrQWR2YW5jZSA9IDgsIEIucHJvdG90eXBlLnJlYWRWYWx1ZUZyb21Qb2ludGVyID0gQW4sIEIucHJvdG90eXBlLmRlbGV0ZU9iamVjdCA9IGZ1bmN0aW9uKG4pIHsKICAgICAgbiAhPT0gbnVsbCAmJiBuLmRlbGV0ZSgpOwogICAgfSwgQi5wcm90b3R5cGUuZnJvbVdpcmVUeXBlID0gZnVuY3Rpb24obikgewogICAgICBmdW5jdGlvbiB0KCkgewogICAgICAgIHJldHVybiB0aGlzLnNhID8gX24odGhpcy5lYS5tYSwgeyBmYTogdGhpcy5HYSwgZGE6IHIsIGhhOiB0aGlzLCBnYTogbiB9KSA6IF9uKHRoaXMuZWEubWEsIHsgZmE6IHRoaXMsIGRhOiBuIH0pOwogICAgICB9CiAgICAgIHZhciByID0gdGhpcy5EYShuKTsKICAgICAgaWYgKCFyKSByZXR1cm4gdGhpcy52YShuKSwgbnVsbDsKICAgICAgdmFyIGkgPSByZSh0aGlzLmVhLCByKTsKICAgICAgaWYgKGkgIT09IHZvaWQgMCkKICAgICAgICByZXR1cm4gaS5BLmNvdW50LnZhbHVlID09PSAwID8gKGkuQS5kYSA9IHIsIGkuQS5nYSA9IG4sIGkuY2xvbmUoKSkgOiAoaSA9IGkuY2xvbmUoKSwgdGhpcy52YShuKSwgaSk7CiAgICAgIGlmIChpID0gdGhpcy5lYS5DYShyKSwgaSA9IHl0W2ldLCAhaSkgcmV0dXJuIHQuY2FsbCh0aGlzKTsKICAgICAgaSA9IHRoaXMucmEgPyBpLnphIDogaS5wb2ludGVyVHlwZTsKICAgICAgdmFyIG8gPSBtdChyLCB0aGlzLmVhLCBpLmVhKTsKICAgICAgcmV0dXJuIG8gPT09IG51bGwgPyB0LmNhbGwodGhpcykgOiB0aGlzLnNhID8gX24oaS5lYS5tYSwgeyBmYTogaSwgZGE6IG8sIGhhOiB0aGlzLCBnYTogbiB9KSA6IF9uKAogICAgICAgIGkuZWEubWEsCiAgICAgICAgeyBmYTogaSwgZGE6IG8gfQogICAgICApOwogICAgfSwgZS5nZXRJbmhlcml0ZWRJbnN0YW5jZUNvdW50ID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhmbikubGVuZ3RoOwogICAgfSwgZS5nZXRMaXZlSW5oZXJpdGVkSW5zdGFuY2VzID0gZnVuY3Rpb24oKSB7CiAgICAgIHZhciBuID0gW10sIHQ7CiAgICAgIGZvciAodCBpbiBmbikgZm4uaGFzT3duUHJvcGVydHkodCkgJiYgbi5wdXNoKGZuW3RdKTsKICAgICAgcmV0dXJuIG47CiAgICB9LCBlLmZsdXNoUGVuZGluZ0RlbGV0ZXMgPSBVbiwgZS5zZXREZWxheUZ1bmN0aW9uID0gZnVuY3Rpb24obikgewogICAgICBjbiA9IG4sIGxuLmxlbmd0aCAmJiBjbiAmJiBjbihVbik7CiAgICB9LCBndCA9IGUuVW5ib3VuZFR5cGVFcnJvciA9IExuKCJVbmJvdW5kVHlwZUVycm9yIiksIGUuY291bnRfZW12YWxfaGFuZGxlcyA9IGZ1bmN0aW9uKCkgewogICAgICBmb3IgKHZhciBuID0gMCwgdCA9IDU7IHQgPCBqLmxlbmd0aDsgKyt0KSBqW3RdICE9PSB2b2lkIDAgJiYgKytuOwogICAgICByZXR1cm4gbjsKICAgIH0sIGUuZ2V0X2ZpcnN0X2VtdmFsID0gZnVuY3Rpb24oKSB7CiAgICAgIGZvciAodmFyIG4gPSA1OyBuIDwgai5sZW5ndGg7ICsrbikgaWYgKGpbbl0gIT09IHZvaWQgMCkgcmV0dXJuIGpbbl07CiAgICAgIHJldHVybiBudWxsOwogICAgfSwgYXQucHVzaCh7IEJhOiBmdW5jdGlvbigpIHsKICAgICAgU3QoKTsKICAgIH0gfSk7CiAgICB2YXIgdWUgPSB7CiAgICAgIHo6IGZ1bmN0aW9uKG4pIHsKICAgICAgICByZXR1cm4gRW4obiArIDE2KSArIDE2OwogICAgICB9LAogICAgICB1OiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgdGhyb3cgbmV3IEp0KG4pLkZhKHQsIHIpLCAidW5jYXVnaHRfZXhjZXB0aW9uIiBpbiBtbiA/IG1uLnhhKysgOiBtbi54YSA9IDEsIG47CiAgICAgIH0sCiAgICAgIHc6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8pIHsKICAgICAgICB2YXIgcyA9IEZuKHIpOwogICAgICAgIHQgPSBSKHQpLCBEKG4sIHsgbmFtZTogdCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihsKSB7CiAgICAgICAgICByZXR1cm4gISFsOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGwsIGMpIHsKICAgICAgICAgIHJldHVybiBjID8gaSA6IG87CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBmdW5jdGlvbihsKSB7CiAgICAgICAgICBpZiAociA9PT0gMSkgdmFyIGMgPSBZOwogICAgICAgICAgZWxzZSBpZiAociA9PT0gMikgYyA9IFE7CiAgICAgICAgICBlbHNlIGlmIChyID09PSA0KSBjID0gazsKICAgICAgICAgIGVsc2UgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBib29sZWFuIHR5cGUgc2l6ZTogIiArIHQpOwogICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKGNbbCA+PiBzXSk7CiAgICAgICAgfSwga2E6IG51bGwgfSk7CiAgICAgIH0sCiAgICAgIGg6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8sIHMsIGwsIGMsIHksIGYsIGQsIGgsIHcpIHsKICAgICAgICBkID0gUihkKSwgcyA9IEcobywgcyksIGMgJiYgKGMgPSBHKGwsIGMpKSwgZiAmJiAoZiA9IEcoeSwgZikpLCB3ID0gRyhoLCB3KTsKICAgICAgICB2YXIgUCA9IEluKGQpOwogICAgICAgIHB0KFAsIGZ1bmN0aW9uKCkgewogICAgICAgICAgZG4oIkNhbm5vdCBjb25zdHJ1Y3QgIiArIGQgKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgW2ldKTsKICAgICAgICB9KSwgdG4oW24sIHQsIHJdLCBpID8gW2ldIDogW10sIGZ1bmN0aW9uKHApIHsKICAgICAgICAgIGlmIChwID0gcFswXSwgaSkKICAgICAgICAgICAgdmFyIE4gPSBwLmVhLCBiID0gTi5tYTsKICAgICAgICAgIGVsc2UgYiA9IFYucHJvdG90eXBlOwogICAgICAgICAgcCA9IGpuKFAsIGZ1bmN0aW9uKCkgewogICAgICAgICAgICBpZiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpICE9PSB4KSB0aHJvdyBuZXcgbm4oIlVzZSAnbmV3JyB0byBjb25zdHJ1Y3QgIiArIGQpOwogICAgICAgICAgICBpZiAoTC5sYSA9PT0gdm9pZCAwKSB0aHJvdyBuZXcgbm4oZCArICIgaGFzIG5vIGFjY2Vzc2libGUgY29uc3RydWN0b3IiKTsKICAgICAgICAgICAgdmFyIGJ0ID0gTC5sYVthcmd1bWVudHMubGVuZ3RoXTsKICAgICAgICAgICAgaWYgKGJ0ID09PSB2b2lkIDApIHRocm93IG5ldyBubigiVHJpZWQgdG8gaW52b2tlIGN0b3Igb2YgIiArIGQgKyAiIHdpdGggaW52YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVycyAoIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiKSAtIGV4cGVjdGVkICgiICsgT2JqZWN0LmtleXMoTC5sYSkudG9TdHJpbmcoKSArICIpIHBhcmFtZXRlcnMgaW5zdGVhZCEiKTsKICAgICAgICAgICAgcmV0dXJuIGJ0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgICB9KTsKICAgICAgICAgIHZhciB4ID0gT2JqZWN0LmNyZWF0ZShiLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBwIH0gfSk7CiAgICAgICAgICBwLnByb3RvdHlwZSA9IHg7CiAgICAgICAgICB2YXIgTCA9IG5ldyBxdChkLCBwLCB4LCB3LCBOLCBzLCBjLCBmKTsKICAgICAgICAgIE4gPSBuZXcgQihkLCBMLCAhMCwgITEpLCBiID0gbmV3IEIoZCArICIqIiwgTCwgITEsICExKTsKICAgICAgICAgIHZhciBobiA9IG5ldyBCKGQgKyAiIGNvbnN0KiIsIEwsICExLCAhMCk7CiAgICAgICAgICByZXR1cm4geXRbbl0gPSB7IHBvaW50ZXJUeXBlOiBiLCB6YTogaG4gfSwgdnQoUCwgcCksIFtOLCBiLCBobl07CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGc6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8sIHMpIHsKICAgICAgICBLbigwIDwgdCk7CiAgICAgICAgdmFyIGwgPSBBdCh0LCByKTsKICAgICAgICBvID0gRyhpLCBvKTsKICAgICAgICB2YXIgYyA9IFtzXSwgeSA9IFtdOwogICAgICAgIHRuKFtdLCBbbl0sIGZ1bmN0aW9uKGYpIHsKICAgICAgICAgIGYgPSBmWzBdOwogICAgICAgICAgdmFyIGQgPSAiY29uc3RydWN0b3IgIiArIGYubmFtZTsKICAgICAgICAgIGlmIChmLmVhLmxhID09PSB2b2lkIDAgJiYgKGYuZWEubGEgPSBbXSksIGYuZWEubGFbdCAtIDFdICE9PSB2b2lkIDApIHRocm93IG5ldyBubigiQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIGNvbnN0cnVjdG9ycyB3aXRoIGlkZW50aWNhbCBudW1iZXIgb2YgcGFyYW1ldGVycyAoIiArICh0IC0gMSkgKyAiKSBmb3IgY2xhc3MgJyIgKyBmLm5hbWUgKyAiJyEgT3ZlcmxvYWQgcmVzb2x1dGlvbiBpcyBjdXJyZW50bHkgb25seSBwZXJmb3JtZWQgdXNpbmcgdGhlIHBhcmFtZXRlciBjb3VudCwgbm90IGFjdHVhbCB0eXBlIGluZm8hIik7CiAgICAgICAgICByZXR1cm4gZi5lYS5sYVt0IC0gMV0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgZG4oIkNhbm5vdCBjb25zdHJ1Y3QgIiArIGYubmFtZSArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBsKTsKICAgICAgICAgIH0sIHRuKFtdLCBsLCBmdW5jdGlvbihoKSB7CiAgICAgICAgICAgIHJldHVybiBmLmVhLmxhW3QgLSAxXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIGFyZ3VtZW50cy5sZW5ndGggIT09IHQgLSAxICYmIHYoZCArICIgY2FsbGVkIHdpdGggIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiIGFyZ3VtZW50cywgZXhwZWN0ZWQgIiArICh0IC0gMSkpLCB5Lmxlbmd0aCA9IDAsIGMubGVuZ3RoID0gdDsKICAgICAgICAgICAgICBmb3IgKHZhciB3ID0gMTsgdyA8IHQ7ICsrdykgY1t3XSA9IGhbd10udG9XaXJlVHlwZSgKICAgICAgICAgICAgICAgIHksCiAgICAgICAgICAgICAgICBhcmd1bWVudHNbdyAtIDFdCiAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICByZXR1cm4gdyA9IG8uYXBwbHkobnVsbCwgYyksIENuKHkpLCBoWzBdLmZyb21XaXJlVHlwZSh3KTsKICAgICAgICAgICAgfSwgW107CiAgICAgICAgICB9KSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGI6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8sIHMsIGwsIGMsIHksIGYpIHsKICAgICAgICB0ID0gUih0KSwgbyA9IEcoaSwgbyksIHRuKFtdLCBbbl0sIGZ1bmN0aW9uKGQpIHsKICAgICAgICAgIGQgPSBkWzBdOwogICAgICAgICAgdmFyIGggPSBkLm5hbWUgKyAiLiIgKyB0LCB3ID0geyBnZXQ6IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBkbigiQ2Fubm90IGFjY2VzcyAiICsgaCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbciwgbF0pOwogICAgICAgICAgfSwgZW51bWVyYWJsZTogITAsIGNvbmZpZ3VyYWJsZTogITAgfTsKICAgICAgICAgIHJldHVybiB5ID8gdy5zZXQgPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgZG4oIkNhbm5vdCBhY2Nlc3MgIiArIGggKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgW3IsIGxdKTsKICAgICAgICAgIH0gOiB3LnNldCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICB2KGggKyAiIGlzIGEgcmVhZC1vbmx5IHByb3BlcnR5Iik7CiAgICAgICAgICB9LCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZC5lYS5tYSwgdCwgdyksIHRuKFtdLCB5ID8gW3IsIGxdIDogW3JdLCBmdW5jdGlvbihQKSB7CiAgICAgICAgICAgIHZhciBwID0gUFswXSwgTiA9IHsgZ2V0OiBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICB2YXIgeCA9IF90KHRoaXMsIGQsIGggKyAiIGdldHRlciIpOwogICAgICAgICAgICAgIHJldHVybiBwLmZyb21XaXJlVHlwZShvKHMsIHgpKTsKICAgICAgICAgICAgfSwgZW51bWVyYWJsZTogITAgfTsKICAgICAgICAgICAgaWYgKHkpIHsKICAgICAgICAgICAgICB5ID0gRyhjLCB5KTsKICAgICAgICAgICAgICB2YXIgYiA9IFBbMV07CiAgICAgICAgICAgICAgTi5zZXQgPSBmdW5jdGlvbih4KSB7CiAgICAgICAgICAgICAgICB2YXIgTCA9IF90KHRoaXMsIGQsIGggKyAiIHNldHRlciIpLCBobiA9IFtdOwogICAgICAgICAgICAgICAgeShmLCBMLCBiLnRvV2lyZVR5cGUoaG4sIHgpKSwgQ24oaG4pOwogICAgICAgICAgICAgIH07CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkLmVhLm1hLCB0LCBOKSwgW107CiAgICAgICAgICB9KSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIHY6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUih0KSwgRChuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24ocikgewogICAgICAgICAgdmFyIGkgPSBqW3JdLnZhbHVlOwogICAgICAgICAgcmV0dXJuIEJuKHIpLCBpOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHIsIGkpIHsKICAgICAgICAgIHJldHVybiBlbihpKTsKICAgICAgICB9LCBhcmdQYWNrQWR2YW5jZTogOCwgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IEFuLCBrYTogbnVsbCB9KTsKICAgICAgfSwKICAgICAgbTogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIHIgPSBGbihyKSwgdCA9IFIodCksIEQobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gaTsKICAgICAgICAgIH0sCiAgICAgICAgICB0b1dpcmVUeXBlOiBmdW5jdGlvbihpLCBvKSB7CiAgICAgICAgICAgIGlmICh0eXBlb2YgbyAhPSAibnVtYmVyIiAmJiB0eXBlb2YgbyAhPSAiYm9vbGVhbiIpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0ICInICsgcm4obykgKyAnIiB0byAnICsgdGhpcy5uYW1lKTsKICAgICAgICAgICAgcmV0dXJuIG87CiAgICAgICAgICB9LAogICAgICAgICAgYXJnUGFja0FkdmFuY2U6IDgsCiAgICAgICAgICByZWFkVmFsdWVGcm9tUG9pbnRlcjogaWUodCwgciksCiAgICAgICAgICBrYTogbnVsbAogICAgICAgIH0pOwogICAgICB9LAogICAgICBjOiBmdW5jdGlvbihuLCB0LCByLCBpLCBvLCBzKSB7CiAgICAgICAgdmFyIGwgPSBBdCh0LCByKTsKICAgICAgICBuID0gUihuKSwgbyA9IEcoaSwgbyksIHB0KG4sIGZ1bmN0aW9uKCkgewogICAgICAgICAgZG4oIkNhbm5vdCBjYWxsICIgKyBuICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIGwpOwogICAgICAgIH0sIHQgLSAxKSwgdG4oW10sIGwsIGZ1bmN0aW9uKGMpIHsKICAgICAgICAgIHZhciB5ID0gbiwgZiA9IG47CiAgICAgICAgICBjID0gW2NbMF0sIG51bGxdLmNvbmNhdChjLnNsaWNlKDEpKTsKICAgICAgICAgIHZhciBkID0gbywgaCA9IGMubGVuZ3RoOwogICAgICAgICAgMiA+IGggJiYgdigiYXJnVHlwZXMgYXJyYXkgc2l6ZSBtaXNtYXRjaCEgTXVzdCBhdCBsZWFzdCBnZXQgcmV0dXJuIHZhbHVlIGFuZCAndGhpcycgdHlwZXMhIik7CiAgICAgICAgICBmb3IgKHZhciB3ID0gY1sxXSAhPT0gbnVsbCAmJiAhMSwgUCA9ICExLCBwID0gMTsgcCA8IGMubGVuZ3RoOyArK3ApIGlmIChjW3BdICE9PSBudWxsICYmIGNbcF0ua2EgPT09IHZvaWQgMCkgewogICAgICAgICAgICBQID0gITA7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgfQogICAgICAgICAgdmFyIE4gPSBjWzBdLm5hbWUgIT09ICJ2b2lkIiwgYiA9ICIiLCB4ID0gIiI7CiAgICAgICAgICBmb3IgKHAgPSAwOyBwIDwgaCAtIDI7ICsrcCkgYiArPSAocCAhPT0gMCA/ICIsICIgOiAiIikgKyAiYXJnIiArIHAsIHggKz0gKHAgIT09IDAgPyAiLCAiIDogIiIpICsgImFyZyIgKyBwICsgIldpcmVkIjsKICAgICAgICAgIGYgPSAicmV0dXJuIGZ1bmN0aW9uICIgKyBJbihmKSArICIoIiArIGIgKyBgKSB7CmlmIChhcmd1bWVudHMubGVuZ3RoICE9PSBgICsgKGggLSAyKSArIGApIHsKdGhyb3dCaW5kaW5nRXJyb3IoJ2Z1bmN0aW9uIGAgKyBmICsgIiBjYWxsZWQgd2l0aCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLCBleHBlY3RlZCAiICsgKGggLSAyKSArIGAgYXJncyEnKTsKfQpgLCBQICYmIChmICs9IGB2YXIgZGVzdHJ1Y3RvcnMgPSBbXTsKYCk7CiAgICAgICAgICB2YXIgTCA9IFAgPyAiZGVzdHJ1Y3RvcnMiIDogIm51bGwiOwogICAgICAgICAgZm9yIChiID0gInRocm93QmluZGluZ0Vycm9yIGludm9rZXIgZm4gcnVuRGVzdHJ1Y3RvcnMgcmV0VHlwZSBjbGFzc1BhcmFtIi5zcGxpdCgiICIpLCBkID0gW3YsIGQsIHMsIENuLCBjWzBdLCBjWzFdXSwgdyAmJiAoZiArPSAidmFyIHRoaXNXaXJlZCA9IGNsYXNzUGFyYW0udG9XaXJlVHlwZSgiICsgTCArIGAsIHRoaXMpOwpgKSwgcCA9IDA7IHAgPCBoIC0gMjsgKytwKSBmICs9ICJ2YXIgYXJnIiArIHAgKyAiV2lyZWQgPSBhcmdUeXBlIiArIHAgKyAiLnRvV2lyZVR5cGUoIiArIEwgKyAiLCBhcmciICsgcCArICIpOyAvLyAiICsgY1twICsgMl0ubmFtZSArIGAKYCwgYi5wdXNoKCJhcmdUeXBlIiArIHApLCBkLnB1c2goY1twICsgMl0pOwogICAgICAgICAgaWYgKHcgJiYgKHggPSAidGhpc1dpcmVkIiArICgwIDwgeC5sZW5ndGggPyAiLCAiIDogIiIpICsgeCksIGYgKz0gKE4gPyAidmFyIHJ2ID0gIiA6ICIiKSArICJpbnZva2VyKGZuIiArICgwIDwgeC5sZW5ndGggPyAiLCAiIDogIiIpICsgeCArIGApOwpgLCBQKSBmICs9IGBydW5EZXN0cnVjdG9ycyhkZXN0cnVjdG9ycyk7CmA7CiAgICAgICAgICBlbHNlIGZvciAocCA9IHcgPyAxIDogMjsgcCA8IGMubGVuZ3RoOyArK3ApIGggPSBwID09PSAxID8gInRoaXNXaXJlZCIgOiAiYXJnIiArIChwIC0gMikgKyAiV2lyZWQiLCBjW3BdLmthICE9PSBudWxsICYmIChmICs9IGggKyAiX2R0b3IoIiArIGggKyAiKTsgLy8gIiArIGNbcF0ubmFtZSArIGAKYCwgYi5wdXNoKGggKyAiX2R0b3IiKSwgZC5wdXNoKGNbcF0ua2EpKTsKICAgICAgICAgIHJldHVybiBOICYmIChmICs9IGB2YXIgcmV0ID0gcmV0VHlwZS5mcm9tV2lyZVR5cGUocnYpOwpyZXR1cm4gcmV0OwpgKSwgYi5wdXNoKGYgKyBgfQpgKSwgYyA9IGFlKGIpLmFwcGx5KG51bGwsIGQpLCB2dCh5LCBjLCB0IC0gMSksIFtdOwogICAgICAgIH0pOwogICAgICB9LAogICAgICBlOiBmdW5jdGlvbihuLCB0LCByLCBpLCBvKSB7CiAgICAgICAgZnVuY3Rpb24gcyhmKSB7CiAgICAgICAgICByZXR1cm4gZjsKICAgICAgICB9CiAgICAgICAgdCA9IFIodCksIG8gPT09IC0xICYmIChvID0gNDI5NDk2NzI5NSk7CiAgICAgICAgdmFyIGwgPSBGbihyKTsKICAgICAgICBpZiAoaSA9PT0gMCkgewogICAgICAgICAgdmFyIGMgPSAzMiAtIDggKiByOwogICAgICAgICAgcyA9IGZ1bmN0aW9uKGYpIHsKICAgICAgICAgICAgcmV0dXJuIGYgPDwgYyA+Pj4gYzsKICAgICAgICAgIH07CiAgICAgICAgfQogICAgICAgIHZhciB5ID0gdC5pbmRleE9mKCJ1bnNpZ25lZCIpICE9IC0xOwogICAgICAgIEQobiwgeyBuYW1lOiB0LCBmcm9tV2lyZVR5cGU6IHMsIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGYsIGQpIHsKICAgICAgICAgIGlmICh0eXBlb2YgZCAhPSAibnVtYmVyIiAmJiB0eXBlb2YgZCAhPSAiYm9vbGVhbiIpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0ICInICsgcm4oZCkgKyAnIiB0byAnICsgdGhpcy5uYW1lKTsKICAgICAgICAgIGlmIChkIDwgaSB8fCBkID4gbykgdGhyb3cgbmV3IFR5cGVFcnJvcignUGFzc2luZyBhIG51bWJlciAiJyArIHJuKGQpICsgJyIgZnJvbSBKUyBzaWRlIHRvIEMvQysrIHNpZGUgdG8gYW4gYXJndW1lbnQgb2YgdHlwZSAiJyArIHQgKyAnIiwgd2hpY2ggaXMgb3V0c2lkZSB0aGUgdmFsaWQgcmFuZ2UgWycgKyBpICsgIiwgIiArIG8gKyAiXSEiKTsKICAgICAgICAgIHJldHVybiB5ID8gZCA+Pj4gMCA6IGQgfCAwOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogb2UodCwgbCwgaSAhPT0gMCksIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBkOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgZnVuY3Rpb24gaShzKSB7CiAgICAgICAgICBzID4+PSAyOwogICAgICAgICAgdmFyIGwgPSBVOwogICAgICAgICAgcmV0dXJuIG5ldyBvKEssIGxbcyArIDFdLCBsW3NdKTsKICAgICAgICB9CiAgICAgICAgdmFyIG8gPSBbSW50OEFycmF5LCBVaW50OEFycmF5LCBJbnQxNkFycmF5LCBVaW50MTZBcnJheSwgSW50MzJBcnJheSwgVWludDMyQXJyYXksIEZsb2F0MzJBcnJheSwgRmxvYXQ2NEFycmF5XVt0XTsKICAgICAgICByID0gUihyKSwgRChuLCB7IG5hbWU6IHIsIGZyb21XaXJlVHlwZTogaSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBpIH0sIHsgRWE6ICEwIH0pOwogICAgICB9LAogICAgICBuOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdCA9IFIodCk7CiAgICAgICAgdmFyIHIgPSB0ID09PSAic3RkOjpzdHJpbmciOwogICAgICAgIEQobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICB2YXIgbyA9IFVbaSA+PiAyXTsKICAgICAgICAgICAgaWYgKHIpIGZvciAodmFyIHMgPSBpICsgNCwgbCA9IDA7IGwgPD0gbzsgKytsKSB7CiAgICAgICAgICAgICAgdmFyIGMgPSBpICsgNCArIGw7CiAgICAgICAgICAgICAgaWYgKGwgPT0gbyB8fCBGW2NdID09IDApIHsKICAgICAgICAgICAgICAgIGlmIChzKSB7CiAgICAgICAgICAgICAgICAgIHZhciB5ID0gcywgZiA9IEYsIGQgPSB5ICsgKGMgLSBzKTsKICAgICAgICAgICAgICAgICAgZm9yIChzID0geTsgZltzXSAmJiAhKHMgPj0gZCk7ICkgKytzOwogICAgICAgICAgICAgICAgICBpZiAoMTYgPCBzIC0geSAmJiBmLnN1YmFycmF5ICYmIFFuKSB5ID0gUW4uZGVjb2RlKGYuc3ViYXJyYXkoeSwgcykpOwogICAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICBmb3IgKGQgPSAiIjsgeSA8IHM7ICkgewogICAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBmW3krK107CiAgICAgICAgICAgICAgICAgICAgICBpZiAoaCAmIDEyOCkgewogICAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IGZbeSsrXSAmIDYzOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGggJiAyMjQpID09IDE5MikgZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChoICYgMzEpIDw8IDYgfCB3KTsKICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFAgPSBmW3krK10gJiA2MzsKICAgICAgICAgICAgICAgICAgICAgICAgICBoID0gKGggJiAyNDApID09IDIyNCA/IChoICYgMTUpIDw8IDEyIHwgdyA8PCA2IHwgUCA6IChoICYgNykgPDwgMTggfCB3IDw8IDEyIHwgUCA8PCA2IHwgZlt5KytdICYgNjMsIDY1NTM2ID4gaCA/IGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShoKSA6IChoIC09IDY1NTM2LCBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTYgfCBoID4+IDEwLCA1NjMyMCB8IGggJiAxMDIzKSk7CiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoaCk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIHkgPSBkOwogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9IGVsc2UgeSA9ICIiOwogICAgICAgICAgICAgICAgaWYgKHAgPT09IHZvaWQgMCkgdmFyIHAgPSB5OwogICAgICAgICAgICAgICAgZWxzZSBwICs9ICJcMCIsIHAgKz0geTsKICAgICAgICAgICAgICAgIHMgPSBjICsgMTsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgZm9yIChwID0gQXJyYXkobyksIGwgPSAwOyBsIDwgbzsgKytsKSBwW2xdID0gU3RyaW5nLmZyb21DaGFyQ29kZShGW2kgKyA0ICsgbF0pOwogICAgICAgICAgICAgIHAgPSBwLmpvaW4oIiIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiB6KGkpLCBwOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIG8pIHsKICAgICAgICAgICAgbyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyICYmIChvID0gbmV3IFVpbnQ4QXJyYXkobykpOwogICAgICAgICAgICB2YXIgcyA9IHR5cGVvZiBvID09ICJzdHJpbmciOwogICAgICAgICAgICBzIHx8IG8gaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IG8gaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSB8fCBvIGluc3RhbmNlb2YgSW50OEFycmF5IHx8IHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gc3RkOjpzdHJpbmciKTsKICAgICAgICAgICAgdmFyIGwgPSAociAmJiBzID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IDAsIGQgPSAwOyBkIDwgby5sZW5ndGg7ICsrZCkgewogICAgICAgICAgICAgICAgdmFyIGggPSBvLmNoYXJDb2RlQXQoZCk7CiAgICAgICAgICAgICAgICA1NTI5NiA8PSBoICYmIDU3MzQzID49IGggJiYgKGggPSA2NTUzNiArICgoaCAmIDEwMjMpIDw8IDEwKSB8IG8uY2hhckNvZGVBdCgrK2QpICYgMTAyMyksIDEyNyA+PSBoID8gKytmIDogZiA9IDIwNDcgPj0gaCA/IGYgKyAyIDogNjU1MzUgPj0gaCA/IGYgKyAzIDogZiArIDQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHJldHVybiBmOwogICAgICAgICAgICB9IDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgcmV0dXJuIG8ubGVuZ3RoOwogICAgICAgICAgICB9KSgpLCBjID0gRW4oNCArIGwgKyAxKTsKICAgICAgICAgICAgaWYgKFVbYyA+PiAyXSA9IGwsIHIgJiYgcykgVXQobywgYyArIDQsIGwgKyAxKTsKICAgICAgICAgICAgZWxzZSBpZiAocykgZm9yIChzID0gMDsgcyA8IGw7ICsrcykgewogICAgICAgICAgICAgIHZhciB5ID0gby5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgICAgIDI1NSA8IHkgJiYgKHooYyksIHYoIlN0cmluZyBoYXMgVVRGLTE2IGNvZGUgdW5pdHMgdGhhdCBkbyBub3QgZml0IGluIDggYml0cyIpKSwgRltjICsgNCArIHNdID0geTsKICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIGZvciAocyA9IDA7IHMgPCBsOyArK3MpIEZbYyArIDQgKyBzXSA9IG9bc107CiAgICAgICAgICAgIHJldHVybiBpICE9PSBudWxsICYmIGkucHVzaCh6LCBjKSwgYzsKICAgICAgICAgIH0sCiAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBBbiwKICAgICAgICAgIGthOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHooaSk7CiAgICAgICAgICB9CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGo6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBpZiAociA9IFIociksIHQgPT09IDIpCiAgICAgICAgICB2YXIgaSA9IER0LCBvID0gQnQsIHMgPSB6dCwgbCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICByZXR1cm4geW47CiAgICAgICAgICB9LCBjID0gMTsKICAgICAgICBlbHNlIHQgPT09IDQgJiYgKGkgPSBWdCwgbyA9IEd0LCBzID0gWXQsIGwgPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiBVOwogICAgICAgIH0sIGMgPSAyKTsKICAgICAgICBEKG4sIHsgbmFtZTogciwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICBmb3IgKHZhciBmID0gVVt5ID4+IDJdLCBkID0gbCgpLCBoLCB3ID0geSArIDQsIFAgPSAwOyBQIDw9IGY7ICsrUCkgewogICAgICAgICAgICB2YXIgcCA9IHkgKyA0ICsgUCAqIHQ7CiAgICAgICAgICAgIChQID09IGYgfHwgZFtwID4+IGNdID09IDApICYmICh3ID0gaSh3LCBwIC0gdyksIGggPT09IHZvaWQgMCA/IGggPSB3IDogKGggKz0gIlwwIiwgaCArPSB3KSwgdyA9IHAgKyB0KTsKICAgICAgICAgIH0KICAgICAgICAgIHJldHVybiB6KHkpLCBoOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHksIGYpIHsKICAgICAgICAgIHR5cGVvZiBmICE9ICJzdHJpbmciICYmIHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gQysrIHN0cmluZyB0eXBlICIgKyByKTsKICAgICAgICAgIHZhciBkID0gcyhmKSwgaCA9IEVuKDQgKyBkICsgdCk7CiAgICAgICAgICByZXR1cm4gVVtoID4+IDJdID0gZCA+PiBjLCBvKGYsIGggKyA0LCBkICsgdCksIHkgIT09IG51bGwgJiYgeS5wdXNoKHosIGgpLCBoOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sIGthOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICB6KHkpOwogICAgICAgIH0gfSk7CiAgICAgIH0sCiAgICAgIHg6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUih0KSwgRChuLCB7IFFhOiAhMCwgbmFtZTogdCwgYXJnUGFja0FkdmFuY2U6IDAsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSB9KTsKICAgICAgfSwKICAgICAgazogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIG4gPSB6bihuKSwgdCA9IEN0KHQsICJlbXZhbDo6YXMiKTsKICAgICAgICB2YXIgaSA9IFtdLCBvID0gZW4oaSk7CiAgICAgICAgcmV0dXJuIGtbciA+PiAyXSA9IG8sIHQudG9XaXJlVHlwZShpLCBuKTsKICAgICAgfSwKICAgICAgaTogQm4sCiAgICAgIGw6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICByZXR1cm4gbiA9IHpuKG4pLCB0ID0gem4odCksIGVuKG5bdF0pOwogICAgICB9LAogICAgICBwOiBmdW5jdGlvbihuKSB7CiAgICAgICAgdmFyIHQgPSBzZVtuXTsKICAgICAgICByZXR1cm4gZW4odCA9PT0gdm9pZCAwID8gUihuKSA6IHQpOwogICAgICB9LAogICAgICBvOiBmdW5jdGlvbihuKSB7CiAgICAgICAgQ24oaltuXS52YWx1ZSksIEJuKG4pOwogICAgICB9LAogICAgICB5OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgcmV0dXJuIG4gPSBDdChuLCAiX2VtdmFsX3Rha2VfdmFsdWUiKSwgbiA9IG4ucmVhZFZhbHVlRnJvbVBvaW50ZXIodCksIGVuKG4pOwogICAgICB9LAogICAgICBmOiBmdW5jdGlvbigpIHsKICAgICAgICBzbigpOwogICAgICB9LAogICAgICBxOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgRi5jb3B5V2l0aGluKG4sIHQsIHQgKyByKTsKICAgICAgfSwKICAgICAgcjogZnVuY3Rpb24obikgewogICAgICAgIG4gPj4+PSAwOwogICAgICAgIHZhciB0ID0gRi5sZW5ndGg7CiAgICAgICAgaWYgKDIxNDc0ODM2NDggPCBuKSByZXR1cm4gITE7CiAgICAgICAgZm9yICh2YXIgciA9IDE7IDQgPj0gcjsgciAqPSAyKSB7CiAgICAgICAgICB2YXIgaSA9IHQgKiAoMSArIDAuMiAvIHIpOwogICAgICAgICAgaSA9IE1hdGgubWluKGksIG4gKyAxMDA2NjMyOTYpLCBpID0gTWF0aC5tYXgoMTY3NzcyMTYsIG4sIGkpLCAwIDwgaSAlIDY1NTM2ICYmIChpICs9IDY1NTM2IC0gaSAlIDY1NTM2KTsKICAgICAgICAgIG46IHsKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICBILmdyb3coTWF0aC5taW4oMjE0NzQ4MzY0OCwgaSkgLSBLLmJ5dGVMZW5ndGggKyA2NTUzNSA+Pj4gMTYpLCBldChILmJ1ZmZlcik7CiAgICAgICAgICAgICAgdmFyIG8gPSAxOwogICAgICAgICAgICAgIGJyZWFrIG47CiAgICAgICAgICAgIH0gY2F0Y2ggewogICAgICAgICAgICB9CiAgICAgICAgICAgIG8gPSB2b2lkIDA7CiAgICAgICAgICB9CiAgICAgICAgICBpZiAobykgcmV0dXJuICEwOwogICAgICAgIH0KICAgICAgICByZXR1cm4gITE7CiAgICAgIH0sCiAgICAgIHM6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB2YXIgciA9IDA7CiAgICAgICAgcmV0dXJuIEV0KCkuZm9yRWFjaChmdW5jdGlvbihpLCBvKSB7CiAgICAgICAgICB2YXIgcyA9IHQgKyByOwogICAgICAgICAgZm9yIChvID0ga1tuICsgNCAqIG8gPj4gMl0gPSBzLCBzID0gMDsgcyA8IGkubGVuZ3RoOyArK3MpIFlbbysrID4+IDBdID0gaS5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgWVtvID4+IDBdID0gMCwgciArPSBpLmxlbmd0aCArIDE7CiAgICAgICAgfSksIDA7CiAgICAgIH0sCiAgICAgIHQ6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB2YXIgciA9IEV0KCk7CiAgICAgICAga1tuID4+IDJdID0gci5sZW5ndGg7CiAgICAgICAgdmFyIGkgPSAwOwogICAgICAgIHJldHVybiByLmZvckVhY2goZnVuY3Rpb24obykgewogICAgICAgICAgaSArPSBvLmxlbmd0aCArIDE7CiAgICAgICAgfSksIGtbdCA+PiAyXSA9IGksIDA7CiAgICAgIH0sCiAgICAgIGE6IEgKICAgIH07CiAgICAoZnVuY3Rpb24oKSB7CiAgICAgIGZ1bmN0aW9uIG4ocykgewogICAgICAgIHMgPSBzLmV4cG9ydHMsIHMgPSBNdChzKSwgZS5hc20gPSBzLCBaLS0sIGUubW9uaXRvclJ1bkRlcGVuZGVuY2llcyAmJiBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMoWiksIFogPT0gMCAmJiBvbiAmJiAocyA9IG9uLCBvbiA9IG51bGwsIHMoKSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gdChzKSB7CiAgICAgICAgbihzLmluc3RhbmNlKTsKICAgICAgfQogICAgICBmdW5jdGlvbiByKHMpIHsKICAgICAgICByZXR1cm4gWHQoKS50aGVuKGZ1bmN0aW9uKGwpIHsKICAgICAgICAgIHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShsLCBpKTsKICAgICAgICB9KS50aGVuKHMsIGZ1bmN0aW9uKGwpIHsKICAgICAgICAgIEUoImZhaWxlZCB0byBhc3luY2hyb25vdXNseSBwcmVwYXJlIHdhc206ICIgKyBsKSwgc24obCk7CiAgICAgICAgfSk7CiAgICAgIH0KICAgICAgdmFyIGkgPSB7IGE6IHVlIH07CiAgICAgIGlmIChaKyssIGUubW9uaXRvclJ1bkRlcGVuZGVuY2llcyAmJiBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMoWiksIGUuaW5zdGFudGlhdGVXYXNtKSB0cnkgewogICAgICAgIHZhciBvID0gZS5pbnN0YW50aWF0ZVdhc20oaSwgbik7CiAgICAgICAgcmV0dXJuIG8gPSBNdChvKTsKICAgICAgfSBjYXRjaCAocykgewogICAgICAgIHJldHVybiBFKCJNb2R1bGUuaW5zdGFudGlhdGVXYXNtIGNhbGxiYWNrIGZhaWxlZCB3aXRoIGVycm9yOiAiICsgcyksICExOwogICAgICB9CiAgICAgIHJldHVybiBmdW5jdGlvbigpIHsKICAgICAgICBpZiAoVyB8fCB0eXBlb2YgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcgIT0gImZ1bmN0aW9uIiB8fCBzdCgpIHx8IFJuKCJmaWxlOi8vIikgfHwgdHlwZW9mIGZldGNoICE9ICJmdW5jdGlvbiIpIHJldHVybiByKHQpOwogICAgICAgIGZldGNoKCQsIHsgY3JlZGVudGlhbHM6ICJzYW1lLW9yaWdpbiIgfSkudGhlbihmdW5jdGlvbihzKSB7CiAgICAgICAgICByZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcocywgaSkudGhlbih0LCBmdW5jdGlvbihsKSB7CiAgICAgICAgICAgIHJldHVybiBFKCJ3YXNtIHN0cmVhbWluZyBjb21waWxlIGZhaWxlZDogIiArIGwpLCBFKCJmYWxsaW5nIGJhY2sgdG8gQXJyYXlCdWZmZXIgaW5zdGFudGlhdGlvbiIpLCByKHQpOwogICAgICAgICAgfSk7CiAgICAgICAgfSk7CiAgICAgIH0oKSwge307CiAgICB9KSgpOwogICAgdmFyIFN0ID0gZS5fX193YXNtX2NhbGxfY3RvcnMgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChTdCA9IGUuX19fd2FzbV9jYWxsX2N0b3JzID0gZS5hc20uQikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIEVuID0gZS5fbWFsbG9jID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoRW4gPSBlLl9tYWxsb2MgPSBlLmFzbS5DKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgeiA9IGUuX2ZyZWUgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuICh6ID0gZS5fZnJlZSA9IGUuYXNtLkQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBXdCA9IGUuX19fZ2V0VHlwZU5hbWUgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChXdCA9IGUuX19fZ2V0VHlwZU5hbWUgPSBlLmFzbS5FKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfTsKICAgIGUuX19fZW1iaW5kX3JlZ2lzdGVyX25hdGl2ZV9hbmRfYnVpbHRpbl90eXBlcyA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX19fZW1iaW5kX3JlZ2lzdGVyX25hdGl2ZV9hbmRfYnVpbHRpbl90eXBlcyA9IGUuYXNtLkYpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWkgPSBlLmFzbS5HKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpID0gZS5hc20uSCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9pID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2kgPSBlLmFzbS5JKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWkgPSBlLmFzbS5KKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaSA9IGUuYXNtLkspLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfZmlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2ZpaSA9IGUuYXNtLkwpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpZiA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlmID0gZS5hc20uTSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaSA9IGUuYXNtLk4pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpID0gZS5hc20uTykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWlpID0gZS5hc20uUCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpID0gZS5hc20uUSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWlpaSA9IGUuYXNtLlIpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWkgPSBlLmFzbS5TKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWlkaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlpZGkgPSBlLmFzbS5UKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWRpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWRpID0gZS5hc20uVSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlpaSA9IGUuYXNtLlYpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlpID0gZS5hc20uVykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpID0gZS5hc20uWCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpaWkgPSBlLmFzbS5ZKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpID0gZS5hc20uWikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWkgPSBlLmFzbS5fKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RhcnRfdW53aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RhcnRfdW53aW5kID0gZS5hc20uJCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0b3BfdW53aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RvcF91bndpbmQgPSBlLmFzbS5hYSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0YXJ0X3Jld2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0YXJ0X3Jld2luZCA9IGUuYXNtLmJhKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RvcF9yZXdpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdG9wX3Jld2luZCA9IGUuYXNtLmNhKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfTsKICAgIHZhciBQbjsKICAgIG9uID0gZnVuY3Rpb24gbigpIHsKICAgICAgUG4gfHwgR24oKSwgUG4gfHwgKG9uID0gbik7CiAgICB9OwogICAgZnVuY3Rpb24gR24oKSB7CiAgICAgIGZ1bmN0aW9uIG4oKSB7CiAgICAgICAgaWYgKCFQbiAmJiAoUG4gPSAhMCwgZS5jYWxsZWRSdW4gPSAhMCwgIWtuKSkgewogICAgICAgICAgaWYgKHBuKGF0KSwgcG4oWnQpLCBtKGUpLCBlLm9uUnVudGltZUluaXRpYWxpemVkICYmIGUub25SdW50aW1lSW5pdGlhbGl6ZWQoKSwgZS5wb3N0UnVuKSBmb3IgKHR5cGVvZiBlLnBvc3RSdW4gPT0gImZ1bmN0aW9uIiAmJiAoZS5wb3N0UnVuID0gW2UucG9zdFJ1bl0pOyBlLnBvc3RSdW4ubGVuZ3RoOyApIHsKICAgICAgICAgICAgdmFyIHQgPSBlLnBvc3RSdW4uc2hpZnQoKTsKICAgICAgICAgICAgb3QudW5zaGlmdCh0KTsKICAgICAgICAgIH0KICAgICAgICAgIHBuKG90KTsKICAgICAgICB9CiAgICAgIH0KICAgICAgaWYgKCEoMCA8IFopKSB7CiAgICAgICAgaWYgKGUucHJlUnVuKSBmb3IgKHR5cGVvZiBlLnByZVJ1biA9PSAiZnVuY3Rpb24iICYmIChlLnByZVJ1biA9IFtlLnByZVJ1bl0pOyBlLnByZVJ1bi5sZW5ndGg7ICkgJHQoKTsKICAgICAgICBwbihpdCksIDAgPCBaIHx8IChlLnNldFN0YXR1cyA/IChlLnNldFN0YXR1cygiUnVubmluZy4uLiIpLCBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgICAgICAgICAgZS5zZXRTdGF0dXMoIiIpOwogICAgICAgICAgfSwgMSksIG4oKTsKICAgICAgICB9LCAxKSkgOiBuKCkpOwogICAgICB9CiAgICB9CiAgICBpZiAoZS5ydW4gPSBHbiwgZS5wcmVJbml0KSBmb3IgKHR5cGVvZiBlLnByZUluaXQgPT0gImZ1bmN0aW9uIiAmJiAoZS5wcmVJbml0ID0gW2UucHJlSW5pdF0pOyAwIDwgZS5wcmVJbml0Lmxlbmd0aDsgKSBlLnByZUluaXQucG9wKCkoKTsKICAgIHJldHVybiBHbigpLCB1LnJlYWR5OwogIH07Cn0oKTsKY2xhc3MgbWUgewogIGNvbnN0cnVjdG9yKCkgewogICAgWW4odGhpcywgInNhbVdhc21Nb2R1bGUiKTsKICB9CiAgZ2V0T3ZlcnJpZGRlbk1vZHVsZXModSwgZSkgewogICAgcmV0dXJuIHsKICAgICAgbG9jYXRlRmlsZTogKG0pID0+IG5ldyBVUkwoZSB8fCBtLCB1KS5ocmVmCiAgICB9OwogIH0KICBhc3luYyBoYW5kbGVNaXNzaW5nT3JJbnZhbGlkU2FtTW9kdWxlKHUsIGUpIHsKICAgIHRyeSB7CiAgICAgIGNvbnN0IG0gPSBhd2FpdCBmZXRjaCh1KTsKICAgICAgaWYgKCFtLm9rKQogICAgICAgIHRocm93IG5ldyBJKAogICAgICAgICAgYFRoZSBwYXRoIHRvICR7ZX0gaXMgaW5jb3JyZWN0IG9yIHRoZSBtb2R1bGUgaXMgbWlzc2luZy4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7dX1gCiAgICAgICAgKTsKICAgICAgY29uc3QgZyA9IGF3YWl0IG0uYXJyYXlCdWZmZXIoKTsKICAgICAgaWYgKCFXZWJBc3NlbWJseS52YWxpZGF0ZShnKSkKICAgICAgICB0aHJvdyBuZXcgSSgKICAgICAgICAgIGBUaGUgcHJvdmlkZWQgJHtlfSBpcyBub3QgYSB2YWxpZCBXQVNNIG1vZHVsZS4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7dX1gCiAgICAgICAgKTsKICAgIH0gY2F0Y2ggKG0pIHsKICAgICAgaWYgKG0gaW5zdGFuY2VvZiBJKQogICAgICAgIHRocm93IGNvbnNvbGUuZXJyb3IoCiAgICAgICAgICAiWW91IGNhbiBmaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgaG93IHRvIGhvc3Qgd2FzbSBmaWxlcyBoZXJlOiBodHRwczovL2RldmVsb3BlcnMuaW5ub3ZhdHJpY3MuY29tL2RpZ2l0YWwtb25ib2FyZGluZy90ZWNobmljYWwvcmVtb3RlL2RvdC13ZWItZG9jdW1lbnQvbGF0ZXN0L2RvY3VtZW50YXRpb24vI19ob3N0aW5nX3NhbV93YXNtIgogICAgICAgICksIG07CiAgICB9CiAgfQogIGFzeW5jIGdldFdhc21GaWxlTmFtZSgpIHsKICAgIHJldHVybiBhd2FpdCBmZSgpID8ga3Quc2ltZCA6IGt0LnNhbTsKICB9CiAgYXN5bmMgaW5pdFNhbU1vZHVsZSh1LCBlID0gIi93YXNtIikgewogICAgaWYgKHRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgcmV0dXJuOwogICAgY29uc3QgbSA9IGF3YWl0IHRoaXMuZ2V0V2FzbUZpbGVOYW1lKCksIGcgPSBgJHtlfS8ke219YDsKICAgIHRyeSB7CiAgICAgIHRoaXMuc2FtV2FzbU1vZHVsZSA9IGF3YWl0IHBlKHRoaXMuZ2V0T3ZlcnJpZGRlbk1vZHVsZXModSwgZykpOwogICAgfSBjYXRjaCB7CiAgICAgIHRocm93IGF3YWl0IHRoaXMuaGFuZGxlTWlzc2luZ09ySW52YWxpZFNhbU1vZHVsZShnLCBtKSwgbmV3IEkoIkNvdWxkIG5vdCBpbml0IGRldGVjdG9yLiIpOwogICAgfQogIH0KICBhc3luYyBnZXRTYW1WZXJzaW9uKCkgewogICAgdmFyIGU7CiAgICBjb25zdCB1ID0gYXdhaXQgKChlID0gdGhpcy5zYW1XYXNtTW9kdWxlKSA9PSBudWxsID8gdm9pZCAwIDogZS5nZXRJbmZvU3RyaW5nKCkpOwogICAgcmV0dXJuIHUgPT0gbnVsbCA/IHZvaWQgMCA6IHUudHJpbSgpOwogIH0KICAvKgogICAqIEluIFRTIDUuMi4wIHdhcyBhZGRlZCBzcGVjaWFsIGtleXdvcmQgInVzaW5nIiB3aGljaCBjb3VsZCBiZSBwZXJmZWN0IGZvciB0aGlzIGNhc2UuCiAgICogVW5mb3J0dW5hdGVseSwgdml0ZSBwcmVhY3QgcGx1Z2luIGRvZXMgbm90IHN1cHBvcnQgdGhpcyB2ZXJzaW9uIG9mIFRTIHlldC4KICAgKiBDaGVjayBwb3NzaWJpbGl0eSBvZiB1c2luZyAidXNpbmciIGtleXdvcmQgd2hlbiB2aXRlIHByZWFjdCBwbHVnaW4gdXBkYXRlcwogICAqLwogIGFsbG9jYXRlTWVtb3J5KHUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgSSgiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgcmV0dXJuIHRoaXMuc2FtV2FzbU1vZHVsZS5fbWFsbG9jKHUpOwogIH0KICByZWxlYXNlTWVtb3J5KHUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgSSgiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgdGhpcy5zYW1XYXNtTW9kdWxlLl9mcmVlKHUpOwogIH0KICB3cml0ZURhdGFUb01lbW9yeSh1LCBlKSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IEkoIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIHRoaXMuc2FtV2FzbU1vZHVsZS5IRUFQVTguc2V0KHUsIGUpOwogIH0KfQovKioKICogQGxpY2Vuc2UKICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQwogKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMAogKi8KY29uc3QgeHQgPSBTeW1ib2woIkNvbWxpbmsucHJveHkiKSwgdmUgPSBTeW1ib2woIkNvbWxpbmsuZW5kcG9pbnQiKSwgZ2UgPSBTeW1ib2woIkNvbWxpbmsucmVsZWFzZVByb3h5IiksIFpuID0gU3ltYm9sKCJDb21saW5rLmZpbmFsaXplciIpLCBPbiA9IFN5bWJvbCgiQ29tbGluay50aHJvd24iKSwgRnQgPSAoYSkgPT4gdHlwZW9mIGEgPT0gIm9iamVjdCIgJiYgYSAhPT0gbnVsbCB8fCB0eXBlb2YgYSA9PSAiZnVuY3Rpb24iLCB3ZSA9IHsKICBjYW5IYW5kbGU6IChhKSA9PiBGdChhKSAmJiBhW3h0XSwKICBzZXJpYWxpemUoYSkgewogICAgY29uc3QgeyBwb3J0MTogdSwgcG9ydDI6IGUgfSA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpOwogICAgcmV0dXJuIEpuKGEsIHUpLCBbZSwgW2VdXTsKICB9LAogIGRlc2VyaWFsaXplKGEpIHsKICAgIHJldHVybiBhLnN0YXJ0KCksIFRlKGEpOwogIH0KfSwgQWUgPSB7CiAgY2FuSGFuZGxlOiAoYSkgPT4gRnQoYSkgJiYgT24gaW4gYSwKICBzZXJpYWxpemUoeyB2YWx1ZTogYSB9KSB7CiAgICBsZXQgdTsKICAgIHJldHVybiBhIGluc3RhbmNlb2YgRXJyb3IgPyB1ID0gewogICAgICBpc0Vycm9yOiAhMCwKICAgICAgdmFsdWU6IHsKICAgICAgICBtZXNzYWdlOiBhLm1lc3NhZ2UsCiAgICAgICAgbmFtZTogYS5uYW1lLAogICAgICAgIHN0YWNrOiBhLnN0YWNrCiAgICAgIH0KICAgIH0gOiB1ID0geyBpc0Vycm9yOiAhMSwgdmFsdWU6IGEgfSwgW3UsIFtdXTsKICB9LAogIGRlc2VyaWFsaXplKGEpIHsKICAgIHRocm93IGEuaXNFcnJvciA/IE9iamVjdC5hc3NpZ24obmV3IEVycm9yKGEudmFsdWUubWVzc2FnZSksIGEudmFsdWUpIDogYS52YWx1ZTsKICB9Cn0sIEl0ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoWwogIFsicHJveHkiLCB3ZV0sCiAgWyJ0aHJvdyIsIEFlXQpdKTsKZnVuY3Rpb24gX2UoYSwgdSkgewogIGZvciAoY29uc3QgZSBvZiBhKQogICAgaWYgKHUgPT09IGUgfHwgZSA9PT0gIioiIHx8IGUgaW5zdGFuY2VvZiBSZWdFeHAgJiYgZS50ZXN0KHUpKQogICAgICByZXR1cm4gITA7CiAgcmV0dXJuICExOwp9CmZ1bmN0aW9uIEpuKGEsIHUgPSBnbG9iYWxUaGlzLCBlID0gWyIqIl0pIHsKICB1LmFkZEV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBmdW5jdGlvbiBtKGcpIHsKICAgIGlmICghZyB8fCAhZy5kYXRhKQogICAgICByZXR1cm47CiAgICBpZiAoIV9lKGUsIGcub3JpZ2luKSkgewogICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgb3JpZ2luICcke2cub3JpZ2lufScgZm9yIGNvbWxpbmsgcHJveHlgKTsKICAgICAgcmV0dXJuOwogICAgfQogICAgY29uc3QgeyBpZDogQywgdHlwZTogQSwgcGF0aDogTSB9ID0gT2JqZWN0LmFzc2lnbih7IHBhdGg6IFtdIH0sIGcuZGF0YSksIE8gPSAoZy5kYXRhLmFyZ3VtZW50TGlzdCB8fCBbXSkubWFwKEopOwogICAgbGV0IFQ7CiAgICB0cnkgewogICAgICBjb25zdCBfID0gTS5zbGljZSgwLCAtMSkucmVkdWNlKChFLCBXKSA9PiBFW1ddLCBhKSwgUyA9IE0ucmVkdWNlKChFLCBXKSA9PiBFW1ddLCBhKTsKICAgICAgc3dpdGNoIChBKSB7CiAgICAgICAgY2FzZSAiR0VUIjoKICAgICAgICAgIFQgPSBTOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiU0VUIjoKICAgICAgICAgIF9bTS5zbGljZSgtMSlbMF1dID0gSihnLmRhdGEudmFsdWUpLCBUID0gITA7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJBUFBMWSI6CiAgICAgICAgICBUID0gUy5hcHBseShfLCBPKTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIkNPTlNUUlVDVCI6CiAgICAgICAgICB7CiAgICAgICAgICAgIGNvbnN0IEUgPSBuZXcgUyguLi5PKTsKICAgICAgICAgICAgVCA9IFNlKEUpOwogICAgICAgICAgfQogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiRU5EUE9JTlQiOgogICAgICAgICAgewogICAgICAgICAgICBjb25zdCB7IHBvcnQxOiBFLCBwb3J0MjogVyB9ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7CiAgICAgICAgICAgIEpuKGEsIFcpLCBUID0gT2UoRSwgW0VdKTsKICAgICAgICAgIH0KICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIlJFTEVBU0UiOgogICAgICAgICAgVCA9IHZvaWQgMDsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICByZXR1cm47CiAgICAgIH0KICAgIH0gY2F0Y2ggKF8pIHsKICAgICAgVCA9IHsgdmFsdWU6IF8sIFtPbl06IDAgfTsKICAgIH0KICAgIFByb21pc2UucmVzb2x2ZShUKS5jYXRjaCgoXykgPT4gKHsgdmFsdWU6IF8sIFtPbl06IDAgfSkpLnRoZW4oKF8pID0+IHsKICAgICAgY29uc3QgW1MsIEVdID0gYm4oXyk7CiAgICAgIHUucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBTKSwgeyBpZDogQyB9KSwgRSksIEEgPT09ICJSRUxFQVNFIiAmJiAodS5yZW1vdmVFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgbSksIGp0KHUpLCBabiBpbiBhICYmIHR5cGVvZiBhW1puXSA9PSAiZnVuY3Rpb24iICYmIGFbWm5dKCkpOwogICAgfSkuY2F0Y2goKF8pID0+IHsKICAgICAgY29uc3QgW1MsIEVdID0gYm4oewogICAgICAgIHZhbHVlOiBuZXcgVHlwZUVycm9yKCJVbnNlcmlhbGl6YWJsZSByZXR1cm4gdmFsdWUiKSwKICAgICAgICBbT25dOiAwCiAgICAgIH0pOwogICAgICB1LnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgUyksIHsgaWQ6IEMgfSksIEUpOwogICAgfSk7CiAgfSksIHUuc3RhcnQgJiYgdS5zdGFydCgpOwp9CmZ1bmN0aW9uIENlKGEpIHsKICByZXR1cm4gYS5jb25zdHJ1Y3Rvci5uYW1lID09PSAiTWVzc2FnZVBvcnQiOwp9CmZ1bmN0aW9uIGp0KGEpIHsKICBDZShhKSAmJiBhLmNsb3NlKCk7Cn0KZnVuY3Rpb24gVGUoYSwgdSkgewogIHJldHVybiBYbihhLCBbXSwgdSk7Cn0KZnVuY3Rpb24gTW4oYSkgewogIGlmIChhKQogICAgdGhyb3cgbmV3IEVycm9yKCJQcm94eSBoYXMgYmVlbiByZWxlYXNlZCBhbmQgaXMgbm90IHVzZWFibGUiKTsKfQpmdW5jdGlvbiBMdChhKSB7CiAgcmV0dXJuIGFuKGEsIHsKICAgIHR5cGU6ICJSRUxFQVNFIgogIH0pLnRoZW4oKCkgPT4gewogICAganQoYSk7CiAgfSk7Cn0KY29uc3QgU24gPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSwgV24gPSAiRmluYWxpemF0aW9uUmVnaXN0cnkiIGluIGdsb2JhbFRoaXMgJiYgbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KChhKSA9PiB7CiAgY29uc3QgdSA9IChTbi5nZXQoYSkgfHwgMCkgLSAxOwogIFNuLnNldChhLCB1KSwgdSA9PT0gMCAmJiBMdChhKTsKfSk7CmZ1bmN0aW9uIEVlKGEsIHUpIHsKICBjb25zdCBlID0gKFNuLmdldCh1KSB8fCAwKSArIDE7CiAgU24uc2V0KHUsIGUpLCBXbiAmJiBXbi5yZWdpc3RlcihhLCB1LCBhKTsKfQpmdW5jdGlvbiBQZShhKSB7CiAgV24gJiYgV24udW5yZWdpc3RlcihhKTsKfQpmdW5jdGlvbiBYbihhLCB1ID0gW10sIGUgPSBmdW5jdGlvbigpIHsKfSkgewogIGxldCBtID0gITE7CiAgY29uc3QgZyA9IG5ldyBQcm94eShlLCB7CiAgICBnZXQoQywgQSkgewogICAgICBpZiAoTW4obSksIEEgPT09IGdlKQogICAgICAgIHJldHVybiAoKSA9PiB7CiAgICAgICAgICBQZShnKSwgTHQoYSksIG0gPSAhMDsKICAgICAgICB9OwogICAgICBpZiAoQSA9PT0gInRoZW4iKSB7CiAgICAgICAgaWYgKHUubGVuZ3RoID09PSAwKQogICAgICAgICAgcmV0dXJuIHsgdGhlbjogKCkgPT4gZyB9OwogICAgICAgIGNvbnN0IE0gPSBhbihhLCB7CiAgICAgICAgICB0eXBlOiAiR0VUIiwKICAgICAgICAgIHBhdGg6IHUubWFwKChPKSA9PiBPLnRvU3RyaW5nKCkpCiAgICAgICAgfSkudGhlbihKKTsKICAgICAgICByZXR1cm4gTS50aGVuLmJpbmQoTSk7CiAgICAgIH0KICAgICAgcmV0dXJuIFhuKGEsIFsuLi51LCBBXSk7CiAgICB9LAogICAgc2V0KEMsIEEsIE0pIHsKICAgICAgTW4obSk7CiAgICAgIGNvbnN0IFtPLCBUXSA9IGJuKE0pOwogICAgICByZXR1cm4gYW4oYSwgewogICAgICAgIHR5cGU6ICJTRVQiLAogICAgICAgIHBhdGg6IFsuLi51LCBBXS5tYXAoKF8pID0+IF8udG9TdHJpbmcoKSksCiAgICAgICAgdmFsdWU6IE8KICAgICAgfSwgVCkudGhlbihKKTsKICAgIH0sCiAgICBhcHBseShDLCBBLCBNKSB7CiAgICAgIE1uKG0pOwogICAgICBjb25zdCBPID0gdVt1Lmxlbmd0aCAtIDFdOwogICAgICBpZiAoTyA9PT0gdmUpCiAgICAgICAgcmV0dXJuIGFuKGEsIHsKICAgICAgICAgIHR5cGU6ICJFTkRQT0lOVCIKICAgICAgICB9KS50aGVuKEopOwogICAgICBpZiAoTyA9PT0gImJpbmQiKQogICAgICAgIHJldHVybiBYbihhLCB1LnNsaWNlKDAsIC0xKSk7CiAgICAgIGNvbnN0IFtULCBfXSA9IFJ0KE0pOwogICAgICByZXR1cm4gYW4oYSwgewogICAgICAgIHR5cGU6ICJBUFBMWSIsCiAgICAgICAgcGF0aDogdS5tYXAoKFMpID0+IFMudG9TdHJpbmcoKSksCiAgICAgICAgYXJndW1lbnRMaXN0OiBUCiAgICAgIH0sIF8pLnRoZW4oSik7CiAgICB9LAogICAgY29uc3RydWN0KEMsIEEpIHsKICAgICAgTW4obSk7CiAgICAgIGNvbnN0IFtNLCBPXSA9IFJ0KEEpOwogICAgICByZXR1cm4gYW4oYSwgewogICAgICAgIHR5cGU6ICJDT05TVFJVQ1QiLAogICAgICAgIHBhdGg6IHUubWFwKChUKSA9PiBULnRvU3RyaW5nKCkpLAogICAgICAgIGFyZ3VtZW50TGlzdDogTQogICAgICB9LCBPKS50aGVuKEopOwogICAgfQogIH0pOwogIHJldHVybiBFZShnLCBhKSwgZzsKfQpmdW5jdGlvbiBNZShhKSB7CiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGEpOwp9CmZ1bmN0aW9uIFJ0KGEpIHsKICBjb25zdCB1ID0gYS5tYXAoYm4pOwogIHJldHVybiBbdS5tYXAoKGUpID0+IGVbMF0pLCBNZSh1Lm1hcCgoZSkgPT4gZVsxXSkpXTsKfQpjb25zdCBOdCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpOwpmdW5jdGlvbiBPZShhLCB1KSB7CiAgcmV0dXJuIE50LnNldChhLCB1KSwgYTsKfQpmdW5jdGlvbiBTZShhKSB7CiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYSwgeyBbeHRdOiAhMCB9KTsKfQpmdW5jdGlvbiBibihhKSB7CiAgZm9yIChjb25zdCBbdSwgZV0gb2YgSXQpCiAgICBpZiAoZS5jYW5IYW5kbGUoYSkpIHsKICAgICAgY29uc3QgW20sIGddID0gZS5zZXJpYWxpemUoYSk7CiAgICAgIHJldHVybiBbCiAgICAgICAgewogICAgICAgICAgdHlwZTogIkhBTkRMRVIiLAogICAgICAgICAgbmFtZTogdSwKICAgICAgICAgIHZhbHVlOiBtCiAgICAgICAgfSwKICAgICAgICBnCiAgICAgIF07CiAgICB9CiAgcmV0dXJuIFsKICAgIHsKICAgICAgdHlwZTogIlJBVyIsCiAgICAgIHZhbHVlOiBhCiAgICB9LAogICAgTnQuZ2V0KGEpIHx8IFtdCiAgXTsKfQpmdW5jdGlvbiBKKGEpIHsKICBzd2l0Y2ggKGEudHlwZSkgewogICAgY2FzZSAiSEFORExFUiI6CiAgICAgIHJldHVybiBJdC5nZXQoYS5uYW1lKS5kZXNlcmlhbGl6ZShhLnZhbHVlKTsKICAgIGNhc2UgIlJBVyI6CiAgICAgIHJldHVybiBhLnZhbHVlOwogIH0KfQpmdW5jdGlvbiBhbihhLCB1LCBlKSB7CiAgcmV0dXJuIG5ldyBQcm9taXNlKChtKSA9PiB7CiAgICBjb25zdCBnID0gV2UoKTsKICAgIGEuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGZ1bmN0aW9uIEMoQSkgewogICAgICAhQS5kYXRhIHx8ICFBLmRhdGEuaWQgfHwgQS5kYXRhLmlkICE9PSBnIHx8IChhLnJlbW92ZUV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBDKSwgbShBLmRhdGEpKTsKICAgIH0pLCBhLnN0YXJ0ICYmIGEuc3RhcnQoKSwgYS5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKHsgaWQ6IGcgfSwgdSksIGUpOwogIH0pOwp9CmZ1bmN0aW9uIFdlKCkgewogIHJldHVybiBuZXcgQXJyYXkoNCkuZmlsbCgwKS5tYXAoKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpLnRvU3RyaW5nKDE2KSkuam9pbigiLSIpOwp9CmZ1bmN0aW9uIEh0KGEsIHUpIHsKICByZXR1cm4gTWF0aC5zcXJ0KChhLnggLSB1LngpICoqIDIgKyAoYS55IC0gdS55KSAqKiAyKTsKfQpmdW5jdGlvbiBiZShhLCB1KSB7CiAgcmV0dXJuIHsKICAgIHg6IChhLnggKyB1LngpIC8gMiwKICAgIHk6IChhLnkgKyB1LnkpIC8gMgogIH07Cn0KZnVuY3Rpb24ga2UoYSwgdSkgewogIGlmIChhLmNvbmZpZGVuY2UgPD0gMCB8fCB1LmNvbmZpZGVuY2UgPD0gMCkKICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTsKICBjb25zdCBlID0gSHQoYS5jZW50ZXIsIHUuY2VudGVyKSwgbSA9IGJlKGEuY2VudGVyLCB1LmNlbnRlcik7CiAgcmV0dXJuIHsKICAgIHg6IG0ueCwKICAgIHk6IG0ueSArIGUgLyA0CiAgICAvLyBjYWxjdWxhdGlvbiBpcyB0YWtlbiBmcm9tIG1vYmlsZSB0ZWFtCiAgfTsKfQpmdW5jdGlvbiBSZShhLCB1LCBlKSB7CiAgaWYgKGEuY29uZmlkZW5jZSA8PSAwIHx8IHUuY29uZmlkZW5jZSA8PSAwKQogICAgcmV0dXJuIDA7CiAgY29uc3QgbSA9IEh0KGEuY2VudGVyLCB1LmNlbnRlciksIGcgPSB5ZShlLndpZHRoLCBlLmhlaWdodCk7CiAgcmV0dXJuIGhlKG0gLyBnKTsKfQpmdW5jdGlvbiAkbihhKSB7CiAgY29uc3QgeyBjZW50ZXJYOiB1LCBjZW50ZXJZOiBlLCBjb25maWRlbmNlOiBtLCBzaXplOiBnLCBzdGF0dXM6IEMgfSA9IGE7CiAgcmV0dXJuIHsKICAgIGNlbnRlcjogewogICAgICB4OiB1LAogICAgICB5OiBlCiAgICB9LAogICAgY29uZmlkZW5jZTogbSAvIDFlMywKICAgIHN0YXR1czogQyAvIDFlMywKICAgIHNpemU6IGcKICB9Owp9CmNsYXNzIHhlIGV4dGVuZHMgbWUgewogIHBhcnNlUmF3RGF0YSh1LCBlKSB7CiAgICBjb25zdCB7IGJyaWdodG5lc3M6IG0sIHNoYXJwbmVzczogZyB9ID0gdS5wYXJhbXMsIHsgYm90dG9tUmlnaHRYOiBDLCBib3R0b21SaWdodFk6IEEsIGxlZnRFeWU6IE0sIG1vdXRoOiBPLCByaWdodEV5ZTogVCwgdG9wTGVmdFg6IF8sIHRvcExlZnRZOiBTIH0gPSB1LCBFID0gJG4oTSksIFcgPSAkbihUKSwgSCA9ICRuKE8pOwogICAgcmV0dXJuIHsKICAgICAgY29uZmlkZW5jZTogdS5jb25maWRlbmNlIC8gMWUzLAogICAgICB0b3BMZWZ0OiB7CiAgICAgICAgeDogXywKICAgICAgICB5OiBTCiAgICAgIH0sCiAgICAgIGJvdHRvbVJpZ2h0OiB7CiAgICAgICAgeDogQywKICAgICAgICB5OiBBCiAgICAgIH0sCiAgICAgIGZhY2VDZW50ZXI6IGtlKEUsIFcpLAogICAgICBmYWNlU2l6ZTogUmUoRSwgVywgZSksCiAgICAgIGxlZnRFeWU6IEUsCiAgICAgIHJpZ2h0RXllOiBXLAogICAgICBtb3V0aDogSCwKICAgICAgYnJpZ2h0bmVzczogbSAvIDFlMywKICAgICAgc2hhcnBuZXNzOiBnIC8gMWUzCiAgICB9OwogIH0KICBhc3luYyBkZXRlY3QodSwgZSwgbSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBJKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICBjb25zdCBnID0gdGhpcy5hbGxvY2F0ZU1lbW9yeSh1Lmxlbmd0aCAqIHUuQllURVNfUEVSX0VMRU1FTlQpLCBDID0gdGhpcy5hbGxvY2F0ZU1lbW9yeSh1Lmxlbmd0aCAqIHUuQllURVNfUEVSX0VMRU1FTlQpOwogICAgdGhpcy53cml0ZURhdGFUb01lbW9yeSh1LCBnKSwgdGhpcy5zYW1XYXNtTW9kdWxlLmNvbnZlcnRUb1NhbUNvbG9ySW1hZ2UoCiAgICAgIGUud2lkdGgsCiAgICAgIGUuaGVpZ2h0LAogICAgICBnLAogICAgICBkZS5SR0JBLAogICAgICBDCiAgICApOwogICAgY29uc3QgQSA9IHRoaXMuc2FtV2FzbU1vZHVsZS5kZXRlY3RGYWNlUGFydHNXaXRoSW1hZ2VQYXJhbWV0ZXJzKAogICAgICBlLndpZHRoLAogICAgICBlLmhlaWdodCwKICAgICAgQywKICAgICAgMCwKICAgICAgMCwKICAgICAgLy8gcGFyYW1XaWR0aCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICAgMAogICAgICAvLyBwYXJhbUhlaWdodCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICk7CiAgICByZXR1cm4gdGhpcy5yZWxlYXNlTWVtb3J5KGcpLCB0aGlzLnJlbGVhc2VNZW1vcnkoQyksIHRoaXMucGFyc2VSYXdEYXRhKEEsIG0pOwogIH0KfQpKbih4ZSk7Cg==", OI = (i) => Uint8Array.from(atob(i), (o) => o.charCodeAt(0)), Es = typeof window < "u" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);", OI(Tg)], { type: "text/javascript;charset=utf-8" });
function VI(i) {
  let o;
  try {
    if (o = Es && (window.URL || window.webkitURL).createObjectURL(Es), !o) throw "";
    const t = new Worker(o, {
      type: "module",
      name: i == null ? void 0 : i.name
    });
    return t.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(o);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + Tg,
      {
        type: "module",
        name: i == null ? void 0 : i.name
      }
    );
  }
}
var dn, Dt;
class TI {
  constructor(o) {
    ce(this, dn);
    ce(this, Dt);
    se(this, dn, o), se(this, Dt, /* @__PURE__ */ new Map());
  }
  validate() {
    F(this, dn).forEach((o) => {
      F(this, Dt).set(o.name, o.evaluate());
    });
  }
  isValid() {
    return Array.from(F(this, Dt).values()).every((o) => o);
  }
  get result() {
    return F(this, Dt);
  }
  get validators() {
    return F(this, dn);
  }
}
dn = new WeakMap(), Dt = new WeakMap();
var _n, Yt;
class Me {
  constructor(o, t) {
    ce(this, _n);
    ce(this, Yt);
    se(this, _n, o), se(this, Yt, t);
  }
  get threshold() {
    return F(this, Yt);
  }
  get name() {
    return F(this, _n);
  }
  isValueBelowThreshold(o) {
    return o < F(this, Yt);
  }
  isValueAboveThreshold(o) {
    return o > F(this, Yt);
  }
}
_n = new WeakMap(), Yt = new WeakMap();
var qn;
class EI extends Me {
  constructor(t, e) {
    super("isNotDim", t);
    ce(this, qn);
    se(this, qn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(F(this, qn));
  }
}
qn = new WeakMap();
var ei;
class RI extends Me {
  constructor(t, e) {
    super("isNotSmall", t);
    ce(this, ei);
    se(this, ei, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(F(this, ei));
  }
}
ei = new WeakMap();
var ti;
class PI extends Me {
  constructor(t, e) {
    super("isNotBright", t);
    ce(this, ti);
    se(this, ti, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(F(this, ti));
  }
}
ti = new WeakMap();
var ni;
class NI extends Me {
  constructor(t, e) {
    super("isPresent", t);
    ce(this, ni);
    se(this, ni, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(F(this, ni));
  }
}
ni = new WeakMap();
var ii;
class LI extends Me {
  constructor(t, e) {
    super("isSharp", t);
    ce(this, ii);
    se(this, ii, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(F(this, ii));
  }
}
ii = new WeakMap();
var oi;
class DI extends Me {
  constructor(t, e) {
    super("isLeftEyePresent", t);
    ce(this, oi);
    se(this, oi, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(F(this, oi));
  }
}
oi = new WeakMap();
var ri;
class YI extends Me {
  constructor(t, e) {
    super("isMouthPresent", t);
    ce(this, ri);
    se(this, ri, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(F(this, ri));
  }
}
ri = new WeakMap();
var ai;
class FI extends Me {
  constructor(t, e) {
    super("isMouthScoreNotTooLow", t);
    ce(this, ai);
    se(this, ai, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(F(this, ai));
  }
}
ai = new WeakMap();
var si;
class XI extends Me {
  constructor(t, e) {
    super("isMouthScoreNotTooHigh", t);
    ce(this, si);
    se(this, si, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(F(this, si));
  }
}
si = new WeakMap();
var gi;
class MI extends Me {
  constructor(t, e) {
    super("isNotLarge", t);
    ce(this, gi);
    se(this, gi, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(F(this, gi));
  }
}
gi = new WeakMap();
var ci;
class jI extends Me {
  constructor(t, e) {
    super("isNotPitched", t || -8023 + 73 * -123 + -17 * -1006);
    ce(this, ci);
    se(this, ci, e);
  }
  evaluate() {
    const { z: t } = F(this, ci) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
}
ci = new WeakMap();
var li;
class JI extends Me {
  constructor(t, e) {
    super("isRightEyePresent", t);
    ce(this, li);
    se(this, li, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(F(this, li));
  }
}
li = new WeakMap();
var xi, Cn;
class UI extends Me {
  constructor(t, e, n) {
    super("isNotOutOfBounds", t);
    ce(this, xi);
    ce(this, Cn);
    se(this, xi, e), se(this, Cn, n);
  }
  evaluate() {
    const t = Sg(F(this, Cn), this.threshold), e = Bg(F(this, xi), F(this, Cn));
    return zu(e, t);
  }
}
xi = new WeakMap(), Cn = new WeakMap();
class zI {
  static getFaceValidationInstance(o, t, e, n) {
    return new TI([new NI(o.faceConfidence, t.confidence), new DI(o.leftEye.confidence, t.leftEye.confidence), new JI(o.rightEye.confidence, t.rightEye.confidence), new RI(o.minFaceSizeRatio, t.faceSize), new MI(o.maxFaceSizeRatio, t.faceSize), new LI(o.sharpnessThreshold, t.sharpness), new EI(o.brightnessLowThreshold, t.brightness), new PI(o.brightnessHighThreshold, t.brightness), new UI(o.outOfBoundsThreshold, t, e), new jI(o.pitchAngleAccelerationThreshold, n), new YI(o.mouth.confidence, t.mouth.confidence), new XI(o.mouth.status.max, t.mouth.status), new FI(o.mouth.status.min, t.mouth.status)]);
  }
}
const Io = class Io extends AI {
  constructor() {
    super(...arguments);
    j(this, "detector");
    j(this, "className", "FaceController");
    j(this, "fallbackInstruction", Be.FACE_NOT_PRESENT);
    j(this, "pitchAngleAccelerationThreshold", null);
    j(this, "getInstructionCode", (t, e) => {
      var r;
      if (this.isInCandidateSelection) return Be.CANDIDATE_SELECTION;
      if ((r = this.lastImage) != null && r.isValid && e) return Be.CANDIDATE_SELECTION;
      if (this.lastImage && e) return this.lastImage.instructionCode;
      const [n] = this.getInstructionCodesForValidators(t);
      return n ?? this.fallbackInstruction;
    });
    j(this, "getInstructionCodesForValidators", (t) => {
      const e = [];
      return Array.from(t).forEach(([n, r]) => {
        !r && e.push(Bx[n]);
      }), e;
    });
  }
  static async init() {
    const t = new VI(), e = Kg(t), n = new Io(), r = await new e();
    this._instance = n, this._instance.detector = r;
  }
  static async getInstance() {
    return !this._instance && await this.init(), this._instance;
  }
  setThresholds(t) {
    super.setThresholds(t);
    const { devicePitchAngleThreshold: e } = t;
    this.pitchAngleAccelerationThreshold = zx * Math.sin(e * (Math.PI / (104 * -44 + 3783 + 973)));
  }
  restart() {
    super.restart(), ks(lt.INSTRUCTION_CHANGED, void (1 * -1523 + 9376 + 1 * -7853), lu);
  }
  validateDetectedObject(t, e) {
    const n = zI.getFaceValidationInstance({ ...this.getThresholds(), pitchAngleAccelerationThreshold: this.pitchAngleAccelerationThreshold }, t, e, this.acceleration);
    return n.validate(), n;
  }
  async processImage({ image: t, timestamp: e }) {
    var E;
    const n = {};
    n.width = t.width, n.height = t.height;
    const r = n, a = ca(r), s = Au(t, a), g = bu(s), x = {};
    x.width = s.width, x.height = s.height;
    const C = x;
    let d = await this.detector.detect(g, C, r);
    d = iI(r, d);
    const m = this.validateDetectedObject(d, r), { result: p } = m, w = this.getInstructionCode(p, m.isValid());
    if (p.get("isPresent")) {
      const S = {};
      S.image = g, S.timestamp = e, this.collectImagesForDuplicateDetection(S);
    }
    if (this.isInCandidateSelection) {
      if (this.bestImage && m.isValid() && this.isNewImageBetter(this.bestImage.detection, d)) {
        const S = { image: t, detection: cn(d) };
        this.bestImage = S, this.candidateSelectionImages.push(S);
      }
    } else if ((E = this.lastImage) != null && E.isValid && m.isValid()) {
      const S = { image: t, detection: cn(d) }, W = {};
      W.image = this.lastImage.image, W.detection = this.lastImage.detection;
      const N = W;
      this.isNewImageBetter(N.detection, S.detection) ? this.bestImage = S : this.bestImage = N, this.candidateSelectionImages.push(N, S), this.isInCandidateSelection = !0;
    } else m.isValid() ? this.lastImage = { instructionCode: w, isValid: !0, image: t, detection: cn(d) } : this.lastImage = { instructionCode: w, isValid: !1, image: t, detection: cn(d) };
    const H = { detectedFace: cn(d), instructionCode: w, invalidValidators: this.getInstructionCodesForValidators(p), isInCandidateSelection: this.isInCandidateSelection };
    return this.detectionRecord.push(H.detectedFace), ks(lt.INSTRUCTION_CHANGED, w), du(lt.DETECTED_FACE_CHANGED, H.detectedFace, this.getThresholds().faceConfidence), Cu(lt.FACE_DETECTION, H.detectedFace, t), H;
  }
};
j(Io, "_instance");
let Or = Io;
const QI = (i, o) => {
  const { handleError: t } = Ci(), [e, n] = Fe(), { acceleration: r } = $u();
  e && e.setAcceleration(r), be(() => {
    (async () => {
      const g = await Or.getInstance();
      try {
        const x = {};
        x.wasmDirectoryPath = o, x.thresholds = i, await g.init(x);
      } catch (x) {
        if (x instanceof Error) {
          t(re.fromError(x));
          return;
        }
      }
      n(g);
    })();
  }, [t, i, o]);
  const a = {};
  return a.controller = e, a;
};
var Tt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Eg = {}, Rs = {}, $I = _I;
function _I(i, o) {
  for (var t = new Array(arguments.length - 1), e = 0, n = 2, r = !0; n < arguments.length; )
    t[e++] = arguments[n++];
  return new Promise(function(a, s) {
    t[e] = function(g) {
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
      i.apply(o || null, t);
    } catch (g) {
      r && (r = !1, s(g));
    }
  });
}
var Rg = {};
(function(i) {
  var o = i;
  o.length = function(a) {
    var s = a.length;
    if (!s)
      return 0;
    for (var g = 0; --s % 4 > 1 && a.charAt(s) === "="; )
      ++g;
    return Math.ceil(a.length * 3) / 4 - g;
  };
  for (var t = new Array(64), e = new Array(123), n = 0; n < 64; )
    e[t[n] = n < 26 ? n + 65 : n < 52 ? n + 71 : n < 62 ? n - 4 : n - 59 | 43] = n++;
  o.encode = function(a, s, g) {
    for (var x = null, C = [], d = 0, m = 0, p; s < g; ) {
      var w = a[s++];
      switch (m) {
        case 0:
          C[d++] = t[w >> 2], p = (w & 3) << 4, m = 1;
          break;
        case 1:
          C[d++] = t[p | w >> 4], p = (w & 15) << 2, m = 2;
          break;
        case 2:
          C[d++] = t[p | w >> 6], C[d++] = t[w & 63], m = 0;
          break;
      }
      d > 8191 && ((x || (x = [])).push(String.fromCharCode.apply(String, C)), d = 0);
    }
    return m && (C[d++] = t[p], C[d++] = 61, m === 1 && (C[d++] = 61)), x ? (d && x.push(String.fromCharCode.apply(String, C.slice(0, d))), x.join("")) : String.fromCharCode.apply(String, C.slice(0, d));
  };
  var r = "invalid encoding";
  o.decode = function(a, s, g) {
    for (var x = g, C = 0, d, m = 0; m < a.length; ) {
      var p = a.charCodeAt(m++);
      if (p === 61 && C > 1)
        break;
      if ((p = e[p]) === void 0)
        throw Error(r);
      switch (C) {
        case 0:
          d = p, C = 1;
          break;
        case 1:
          s[g++] = d << 2 | (p & 48) >> 4, d = p, C = 2;
          break;
        case 2:
          s[g++] = (d & 15) << 4 | (p & 60) >> 2, d = p, C = 3;
          break;
        case 3:
          s[g++] = (d & 3) << 6 | p, C = 0;
          break;
      }
    }
    if (C === 1)
      throw Error(r);
    return g - x;
  }, o.test = function(a) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(a);
  };
})(Rg);
var qI = Bo;
function Bo() {
  this._listeners = {};
}
Bo.prototype.on = function(i, o, t) {
  return (this._listeners[i] || (this._listeners[i] = [])).push({
    fn: o,
    ctx: t || this
  }), this;
};
Bo.prototype.off = function(i, o) {
  if (i === void 0)
    this._listeners = {};
  else if (o === void 0)
    this._listeners[i] = [];
  else
    for (var t = this._listeners[i], e = 0; e < t.length; )
      t[e].fn === o ? t.splice(e, 1) : ++e;
  return this;
};
Bo.prototype.emit = function(i) {
  var o = this._listeners[i];
  if (o) {
    for (var t = [], e = 1; e < arguments.length; )
      t.push(arguments[e++]);
    for (e = 0; e < o.length; )
      o[e].fn.apply(o[e++].ctx, t);
  }
  return this;
};
var ed = Ps(Ps);
function Ps(i) {
  return typeof Float32Array < "u" ? function() {
    var o = new Float32Array([-0]), t = new Uint8Array(o.buffer), e = t[3] === 128;
    function n(g, x, C) {
      o[0] = g, x[C] = t[0], x[C + 1] = t[1], x[C + 2] = t[2], x[C + 3] = t[3];
    }
    function r(g, x, C) {
      o[0] = g, x[C] = t[3], x[C + 1] = t[2], x[C + 2] = t[1], x[C + 3] = t[0];
    }
    i.writeFloatLE = e ? n : r, i.writeFloatBE = e ? r : n;
    function a(g, x) {
      return t[0] = g[x], t[1] = g[x + 1], t[2] = g[x + 2], t[3] = g[x + 3], o[0];
    }
    function s(g, x) {
      return t[3] = g[x], t[2] = g[x + 1], t[1] = g[x + 2], t[0] = g[x + 3], o[0];
    }
    i.readFloatLE = e ? a : s, i.readFloatBE = e ? s : a;
  }() : function() {
    function o(e, n, r, a) {
      var s = n < 0 ? 1 : 0;
      if (s && (n = -n), n === 0)
        e(1 / n > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), r, a);
      else if (isNaN(n))
        e(2143289344, r, a);
      else if (n > 34028234663852886e22)
        e((s << 31 | 2139095040) >>> 0, r, a);
      else if (n < 11754943508222875e-54)
        e((s << 31 | Math.round(n / 1401298464324817e-60)) >>> 0, r, a);
      else {
        var g = Math.floor(Math.log(n) / Math.LN2), x = Math.round(n * Math.pow(2, -g) * 8388608) & 8388607;
        e((s << 31 | g + 127 << 23 | x) >>> 0, r, a);
      }
    }
    i.writeFloatLE = o.bind(null, Ns), i.writeFloatBE = o.bind(null, Ls);
    function t(e, n, r) {
      var a = e(n, r), s = (a >> 31) * 2 + 1, g = a >>> 23 & 255, x = a & 8388607;
      return g === 255 ? x ? NaN : s * (1 / 0) : g === 0 ? s * 1401298464324817e-60 * x : s * Math.pow(2, g - 150) * (x + 8388608);
    }
    i.readFloatLE = t.bind(null, Ds), i.readFloatBE = t.bind(null, Ys);
  }(), typeof Float64Array < "u" ? function() {
    var o = new Float64Array([-0]), t = new Uint8Array(o.buffer), e = t[7] === 128;
    function n(g, x, C) {
      o[0] = g, x[C] = t[0], x[C + 1] = t[1], x[C + 2] = t[2], x[C + 3] = t[3], x[C + 4] = t[4], x[C + 5] = t[5], x[C + 6] = t[6], x[C + 7] = t[7];
    }
    function r(g, x, C) {
      o[0] = g, x[C] = t[7], x[C + 1] = t[6], x[C + 2] = t[5], x[C + 3] = t[4], x[C + 4] = t[3], x[C + 5] = t[2], x[C + 6] = t[1], x[C + 7] = t[0];
    }
    i.writeDoubleLE = e ? n : r, i.writeDoubleBE = e ? r : n;
    function a(g, x) {
      return t[0] = g[x], t[1] = g[x + 1], t[2] = g[x + 2], t[3] = g[x + 3], t[4] = g[x + 4], t[5] = g[x + 5], t[6] = g[x + 6], t[7] = g[x + 7], o[0];
    }
    function s(g, x) {
      return t[7] = g[x], t[6] = g[x + 1], t[5] = g[x + 2], t[4] = g[x + 3], t[3] = g[x + 4], t[2] = g[x + 5], t[1] = g[x + 6], t[0] = g[x + 7], o[0];
    }
    i.readDoubleLE = e ? a : s, i.readDoubleBE = e ? s : a;
  }() : function() {
    function o(e, n, r, a, s, g) {
      var x = a < 0 ? 1 : 0;
      if (x && (a = -a), a === 0)
        e(0, s, g + n), e(1 / a > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), s, g + r);
      else if (isNaN(a))
        e(0, s, g + n), e(2146959360, s, g + r);
      else if (a > 17976931348623157e292)
        e(0, s, g + n), e((x << 31 | 2146435072) >>> 0, s, g + r);
      else {
        var C;
        if (a < 22250738585072014e-324)
          C = a / 5e-324, e(C >>> 0, s, g + n), e((x << 31 | C / 4294967296) >>> 0, s, g + r);
        else {
          var d = Math.floor(Math.log(a) / Math.LN2);
          d === 1024 && (d = 1023), C = a * Math.pow(2, -d), e(C * 4503599627370496 >>> 0, s, g + n), e((x << 31 | d + 1023 << 20 | C * 1048576 & 1048575) >>> 0, s, g + r);
        }
      }
    }
    i.writeDoubleLE = o.bind(null, Ns, 0, 4), i.writeDoubleBE = o.bind(null, Ls, 4, 0);
    function t(e, n, r, a, s) {
      var g = e(a, s + n), x = e(a, s + r), C = (x >> 31) * 2 + 1, d = x >>> 20 & 2047, m = 4294967296 * (x & 1048575) + g;
      return d === 2047 ? m ? NaN : C * (1 / 0) : d === 0 ? C * 5e-324 * m : C * Math.pow(2, d - 1075) * (m + 4503599627370496);
    }
    i.readDoubleLE = t.bind(null, Ds, 0, 4), i.readDoubleBE = t.bind(null, Ys, 4, 0);
  }(), i;
}
function Ns(i, o, t) {
  o[t] = i & 255, o[t + 1] = i >>> 8 & 255, o[t + 2] = i >>> 16 & 255, o[t + 3] = i >>> 24;
}
function Ls(i, o, t) {
  o[t] = i >>> 24, o[t + 1] = i >>> 16 & 255, o[t + 2] = i >>> 8 & 255, o[t + 3] = i & 255;
}
function Ds(i, o) {
  return (i[o] | i[o + 1] << 8 | i[o + 2] << 16 | i[o + 3] << 24) >>> 0;
}
function Ys(i, o) {
  return (i[o] << 24 | i[o + 1] << 16 | i[o + 2] << 8 | i[o + 3]) >>> 0;
}
function Fs(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var td = nd;
function nd(i) {
  try {
    if (typeof Fs != "function")
      return null;
    var o = Fs(i);
    return o && (o.length || Object.keys(o).length) ? o : null;
  } catch {
    return null;
  }
}
var Pg = {};
(function(i) {
  var o = i;
  o.length = function(t) {
    for (var e = 0, n = 0, r = 0; r < t.length; ++r)
      n = t.charCodeAt(r), n < 128 ? e += 1 : n < 2048 ? e += 2 : (n & 64512) === 55296 && (t.charCodeAt(r + 1) & 64512) === 56320 ? (++r, e += 4) : e += 3;
    return e;
  }, o.read = function(t, e, n) {
    var r = n - e;
    if (r < 1)
      return "";
    for (var a = null, s = [], g = 0, x; e < n; )
      x = t[e++], x < 128 ? s[g++] = x : x > 191 && x < 224 ? s[g++] = (x & 31) << 6 | t[e++] & 63 : x > 239 && x < 365 ? (x = ((x & 7) << 18 | (t[e++] & 63) << 12 | (t[e++] & 63) << 6 | t[e++] & 63) - 65536, s[g++] = 55296 + (x >> 10), s[g++] = 56320 + (x & 1023)) : s[g++] = (x & 15) << 12 | (t[e++] & 63) << 6 | t[e++] & 63, g > 8191 && ((a || (a = [])).push(String.fromCharCode.apply(String, s)), g = 0);
    return a ? (g && a.push(String.fromCharCode.apply(String, s.slice(0, g))), a.join("")) : String.fromCharCode.apply(String, s.slice(0, g));
  }, o.write = function(t, e, n) {
    for (var r = n, a, s, g = 0; g < t.length; ++g)
      a = t.charCodeAt(g), a < 128 ? e[n++] = a : a < 2048 ? (e[n++] = a >> 6 | 192, e[n++] = a & 63 | 128) : (a & 64512) === 55296 && ((s = t.charCodeAt(g + 1)) & 64512) === 56320 ? (a = 65536 + ((a & 1023) << 10) + (s & 1023), ++g, e[n++] = a >> 18 | 240, e[n++] = a >> 12 & 63 | 128, e[n++] = a >> 6 & 63 | 128, e[n++] = a & 63 | 128) : (e[n++] = a >> 12 | 224, e[n++] = a >> 6 & 63 | 128, e[n++] = a & 63 | 128);
    return n - r;
  };
})(Pg);
var id = od;
function od(i, o, t) {
  var e = t || 8192, n = e >>> 1, r = null, a = e;
  return function(s) {
    if (s < 1 || s > n)
      return i(s);
    a + s > e && (r = i(e), a = 0);
    var g = o.call(r, a, a += s);
    return a & 7 && (a = (a | 7) + 1), g;
  };
}
var er, Xs;
function rd() {
  if (Xs)
    return er;
  Xs = 1, er = o;
  var i = Qt();
  function o(r, a) {
    this.lo = r >>> 0, this.hi = a >>> 0;
  }
  var t = o.zero = new o(0, 0);
  t.toNumber = function() {
    return 0;
  }, t.zzEncode = t.zzDecode = function() {
    return this;
  }, t.length = function() {
    return 1;
  };
  var e = o.zeroHash = "\0\0\0\0\0\0\0\0";
  o.fromNumber = function(r) {
    if (r === 0)
      return t;
    var a = r < 0;
    a && (r = -r);
    var s = r >>> 0, g = (r - s) / 4294967296 >>> 0;
    return a && (g = ~g >>> 0, s = ~s >>> 0, ++s > 4294967295 && (s = 0, ++g > 4294967295 && (g = 0))), new o(s, g);
  }, o.from = function(r) {
    if (typeof r == "number")
      return o.fromNumber(r);
    if (i.isString(r))
      if (i.Long)
        r = i.Long.fromString(r);
      else
        return o.fromNumber(parseInt(r, 10));
    return r.low || r.high ? new o(r.low >>> 0, r.high >>> 0) : t;
  }, o.prototype.toNumber = function(r) {
    if (!r && this.hi >>> 31) {
      var a = ~this.lo + 1 >>> 0, s = ~this.hi >>> 0;
      return a || (s = s + 1 >>> 0), -(a + s * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  }, o.prototype.toLong = function(r) {
    return i.Long ? new i.Long(this.lo | 0, this.hi | 0, !!r) : { low: this.lo | 0, high: this.hi | 0, unsigned: !!r };
  };
  var n = String.prototype.charCodeAt;
  return o.fromHash = function(r) {
    return r === e ? t : new o(
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
  }, er;
}
var Ms;
function Qt() {
  return Ms || (Ms = 1, function(i) {
    var o = i;
    o.asPromise = $I, o.base64 = Rg, o.EventEmitter = qI, o.float = ed, o.inquire = td, o.utf8 = Pg, o.pool = id, o.LongBits = rd(), o.isNode = !!(typeof Tt < "u" && Tt && Tt.process && Tt.process.versions && Tt.process.versions.node), o.global = o.isNode && Tt || typeof window < "u" && window || typeof self < "u" && self || Tt, o.emptyArray = Object.freeze ? Object.freeze([]) : (
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
    function t(n, r, a) {
      for (var s = Object.keys(r), g = 0; g < s.length; ++g)
        (n[s[g]] === void 0 || !a) && (n[s[g]] = r[s[g]]);
      return n;
    }
    o.merge = t, o.lcFirst = function(n) {
      return n.charAt(0).toLowerCase() + n.substring(1);
    };
    function e(n) {
      function r(a, s) {
        if (!(this instanceof r))
          return new r(a, s);
        Object.defineProperty(this, "message", { get: function() {
          return a;
        } }), Error.captureStackTrace ? Error.captureStackTrace(this, r) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), s && t(this, s);
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
    o.newError = e, o.ProtocolError = e("ProtocolError"), o.oneOfGetter = function(n) {
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
  }(Rs)), Rs;
}
var Ng = Q, $e = Qt(), Vr, Go = $e.LongBits, js = $e.base64, Js = $e.utf8;
function hi(i, o, t) {
  this.fn = i, this.len = o, this.next = void 0, this.val = t;
}
function la() {
}
function ad(i) {
  this.head = i.head, this.tail = i.tail, this.len = i.len, this.next = i.states;
}
function Q() {
  this.len = 0, this.head = new hi(la, 0, 0), this.tail = this.head, this.states = null;
}
var Lg = function() {
  return $e.Buffer ? function() {
    return (Q.create = function() {
      return new Vr();
    })();
  } : function() {
    return new Q();
  };
};
Q.create = Lg();
Q.alloc = function(i) {
  return new $e.Array(i);
};
$e.Array !== Array && (Q.alloc = $e.pool(Q.alloc, $e.Array.prototype.subarray));
Q.prototype._push = function(i, o, t) {
  return this.tail = this.tail.next = new hi(i, o, t), this.len += o, this;
};
function xa(i, o, t) {
  o[t] = i & 255;
}
function sd(i, o, t) {
  for (; i > 127; )
    o[t++] = i & 127 | 128, i >>>= 7;
  o[t] = i;
}
function ua(i, o) {
  this.len = i, this.next = void 0, this.val = o;
}
ua.prototype = Object.create(hi.prototype);
ua.prototype.fn = sd;
Q.prototype.uint32 = function(i) {
  return this.len += (this.tail = this.tail.next = new ua(
    (i = i >>> 0) < 128 ? 1 : i < 16384 ? 2 : i < 2097152 ? 3 : i < 268435456 ? 4 : 5,
    i
  )).len, this;
};
Q.prototype.int32 = function(i) {
  return i < 0 ? this._push(Ia, 10, Go.fromNumber(i)) : this.uint32(i);
};
Q.prototype.sint32 = function(i) {
  return this.uint32((i << 1 ^ i >> 31) >>> 0);
};
function Ia(i, o, t) {
  for (; i.hi; )
    o[t++] = i.lo & 127 | 128, i.lo = (i.lo >>> 7 | i.hi << 25) >>> 0, i.hi >>>= 7;
  for (; i.lo > 127; )
    o[t++] = i.lo & 127 | 128, i.lo = i.lo >>> 7;
  o[t++] = i.lo;
}
Q.prototype.uint64 = function(i) {
  var o = Go.from(i);
  return this._push(Ia, o.length(), o);
};
Q.prototype.int64 = Q.prototype.uint64;
Q.prototype.sint64 = function(i) {
  var o = Go.from(i).zzEncode();
  return this._push(Ia, o.length(), o);
};
Q.prototype.bool = function(i) {
  return this._push(xa, 1, i ? 1 : 0);
};
function Tr(i, o, t) {
  o[t] = i & 255, o[t + 1] = i >>> 8 & 255, o[t + 2] = i >>> 16 & 255, o[t + 3] = i >>> 24;
}
Q.prototype.fixed32 = function(i) {
  return this._push(Tr, 4, i >>> 0);
};
Q.prototype.sfixed32 = Q.prototype.fixed32;
Q.prototype.fixed64 = function(i) {
  var o = Go.from(i);
  return this._push(Tr, 4, o.lo)._push(Tr, 4, o.hi);
};
Q.prototype.sfixed64 = Q.prototype.fixed64;
Q.prototype.float = function(i) {
  return this._push($e.float.writeFloatLE, 4, i);
};
Q.prototype.double = function(i) {
  return this._push($e.float.writeDoubleLE, 8, i);
};
var gd = $e.Array.prototype.set ? function(i, o, t) {
  o.set(i, t);
} : function(i, o, t) {
  for (var e = 0; e < i.length; ++e)
    o[t + e] = i[e];
};
Q.prototype.bytes = function(i) {
  var o = i.length >>> 0;
  if (!o)
    return this._push(xa, 1, 0);
  if ($e.isString(i)) {
    var t = Q.alloc(o = js.length(i));
    js.decode(i, t, 0), i = t;
  }
  return this.uint32(o)._push(gd, o, i);
};
Q.prototype.string = function(i) {
  var o = Js.length(i);
  return o ? this.uint32(o)._push(Js.write, o, i) : this._push(xa, 1, 0);
};
Q.prototype.fork = function() {
  return this.states = new ad(this), this.head = this.tail = new hi(la, 0, 0), this.len = 0, this;
};
Q.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new hi(la, 0, 0), this.len = 0), this;
};
Q.prototype.ldelim = function() {
  var i = this.head, o = this.tail, t = this.len;
  return this.reset().uint32(t), t && (this.tail.next = i.next, this.tail = o, this.len += t), this;
};
Q.prototype.finish = function() {
  for (var i = this.head.next, o = this.constructor.alloc(this.len), t = 0; i; )
    i.fn(i.val, o, t), t += i.len, i = i.next;
  return o;
};
Q._configure = function(i) {
  Vr = i, Q.create = Lg(), Vr._configure();
};
var cd = xt, Dg = Ng;
(xt.prototype = Object.create(Dg.prototype)).constructor = xt;
var Zt = Qt();
function xt() {
  Dg.call(this);
}
xt._configure = function() {
  xt.alloc = Zt._Buffer_allocUnsafe, xt.writeBytesBuffer = Zt.Buffer && Zt.Buffer.prototype instanceof Uint8Array && Zt.Buffer.prototype.set.name === "set" ? function(i, o, t) {
    o.set(i, t);
  } : function(i, o, t) {
    if (i.copy)
      i.copy(o, t, 0, i.length);
    else
      for (var e = 0; e < i.length; )
        o[t++] = i[e++];
  };
};
xt.prototype.bytes = function(i) {
  Zt.isString(i) && (i = Zt._Buffer_from(i, "base64"));
  var o = i.length >>> 0;
  return this.uint32(o), o && this._push(xt.writeBytesBuffer, o, i), this;
};
function ld(i, o, t) {
  i.length < 40 ? Zt.utf8.write(i, o, t) : o.utf8Write ? o.utf8Write(i, t) : o.write(i, t);
}
xt.prototype.string = function(i) {
  var o = Zt.Buffer.byteLength(i);
  return this.uint32(o), o && this._push(ld, o, i), this;
};
xt._configure();
var Yg = xe, ut = Qt(), Er, Fg = ut.LongBits, xd = ut.utf8;
function rt(i, o) {
  return RangeError("index out of range: " + i.pos + " + " + (o || 1) + " > " + i.len);
}
function xe(i) {
  this.buf = i, this.pos = 0, this.len = i.length;
}
var Us = typeof Uint8Array < "u" ? function(i) {
  if (i instanceof Uint8Array || Array.isArray(i))
    return new xe(i);
  throw Error("illegal buffer");
} : function(i) {
  if (Array.isArray(i))
    return new xe(i);
  throw Error("illegal buffer");
}, Xg = function() {
  return ut.Buffer ? function(i) {
    return (xe.create = function(o) {
      return ut.Buffer.isBuffer(o) ? new Er(o) : Us(o);
    })(i);
  } : Us;
};
xe.create = Xg();
xe.prototype._slice = ut.Array.prototype.subarray || /* istanbul ignore next */
ut.Array.prototype.slice;
xe.prototype.uint32 = /* @__PURE__ */ function() {
  var i = 4294967295;
  return function() {
    if (i = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (i = (i | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (i = (i | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (i = (i | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (i = (i | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return i;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, rt(this, 10);
    return i;
  };
}();
xe.prototype.int32 = function() {
  return this.uint32() | 0;
};
xe.prototype.sint32 = function() {
  var i = this.uint32();
  return i >>> 1 ^ -(i & 1) | 0;
};
function tr() {
  var i = new Fg(0, 0), o = 0;
  if (this.len - this.pos > 4) {
    for (; o < 4; ++o)
      if (i.lo = (i.lo | (this.buf[this.pos] & 127) << o * 7) >>> 0, this.buf[this.pos++] < 128)
        return i;
    if (i.lo = (i.lo | (this.buf[this.pos] & 127) << 28) >>> 0, i.hi = (i.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
      return i;
    o = 0;
  } else {
    for (; o < 3; ++o) {
      if (this.pos >= this.len)
        throw rt(this);
      if (i.lo = (i.lo | (this.buf[this.pos] & 127) << o * 7) >>> 0, this.buf[this.pos++] < 128)
        return i;
    }
    return i.lo = (i.lo | (this.buf[this.pos++] & 127) << o * 7) >>> 0, i;
  }
  if (this.len - this.pos > 4) {
    for (; o < 5; ++o)
      if (i.hi = (i.hi | (this.buf[this.pos] & 127) << o * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return i;
  } else
    for (; o < 5; ++o) {
      if (this.pos >= this.len)
        throw rt(this);
      if (i.hi = (i.hi | (this.buf[this.pos] & 127) << o * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return i;
    }
  throw Error("invalid varint encoding");
}
xe.prototype.bool = function() {
  return this.uint32() !== 0;
};
function lo(i, o) {
  return (i[o - 4] | i[o - 3] << 8 | i[o - 2] << 16 | i[o - 1] << 24) >>> 0;
}
xe.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw rt(this, 4);
  return lo(this.buf, this.pos += 4);
};
xe.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw rt(this, 4);
  return lo(this.buf, this.pos += 4) | 0;
};
function zs() {
  if (this.pos + 8 > this.len)
    throw rt(this, 8);
  return new Fg(lo(this.buf, this.pos += 4), lo(this.buf, this.pos += 4));
}
xe.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw rt(this, 4);
  var i = ut.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, i;
};
xe.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw rt(this, 4);
  var i = ut.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, i;
};
xe.prototype.bytes = function() {
  var i = this.uint32(), o = this.pos, t = this.pos + i;
  if (t > this.len)
    throw rt(this, i);
  return this.pos += i, Array.isArray(this.buf) ? this.buf.slice(o, t) : o === t ? new this.buf.constructor(0) : this._slice.call(this.buf, o, t);
};
xe.prototype.string = function() {
  var i = this.bytes();
  return xd.read(i, 0, i.length);
};
xe.prototype.skip = function(i) {
  if (typeof i == "number") {
    if (this.pos + i > this.len)
      throw rt(this, i);
    this.pos += i;
  } else
    do
      if (this.pos >= this.len)
        throw rt(this);
    while (this.buf[this.pos++] & 128);
  return this;
};
xe.prototype.skipType = function(i) {
  switch (i) {
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
      for (; (i = this.uint32() & 7) !== 4; )
        this.skipType(i);
      break;
    case 5:
      this.skip(4);
      break;
    default:
      throw Error("invalid wire type " + i + " at offset " + this.pos);
  }
  return this;
};
xe._configure = function(i) {
  Er = i, xe.create = Xg(), Er._configure();
  var o = ut.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  ut.merge(xe.prototype, {
    int64: function() {
      return tr.call(this)[o](!1);
    },
    uint64: function() {
      return tr.call(this)[o](!0);
    },
    sint64: function() {
      return tr.call(this).zzDecode()[o](!1);
    },
    fixed64: function() {
      return zs.call(this)[o](!0);
    },
    sfixed64: function() {
      return zs.call(this)[o](!1);
    }
  });
};
var ud = Ut, Mg = Yg;
(Ut.prototype = Object.create(Mg.prototype)).constructor = Ut;
var Qs = Qt();
function Ut(i) {
  Mg.call(this, i);
}
Ut._configure = function() {
  Qs.Buffer && (Ut.prototype._slice = Qs.Buffer.prototype.slice);
};
Ut.prototype.string = function() {
  var i = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + i, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + i, this.len));
};
Ut._configure();
var jg = {}, Id = $n, da = Qt();
($n.prototype = Object.create(da.EventEmitter.prototype)).constructor = $n;
function $n(i, o, t) {
  if (typeof i != "function")
    throw TypeError("rpcImpl must be a function");
  da.EventEmitter.call(this), this.rpcImpl = i, this.requestDelimited = !!o, this.responseDelimited = !!t;
}
$n.prototype.rpcCall = function i(o, t, e, n, r) {
  if (!n)
    throw TypeError("request must be specified");
  var a = this;
  if (!r)
    return da.asPromise(i, a, o, t, e, n);
  if (!a.rpcImpl) {
    setTimeout(function() {
      r(Error("already ended"));
    }, 0);
    return;
  }
  try {
    return a.rpcImpl(
      o,
      t[a.requestDelimited ? "encodeDelimited" : "encode"](n).finish(),
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
        if (!(g instanceof e))
          try {
            g = e[a.responseDelimited ? "decodeDelimited" : "decode"](g);
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
$n.prototype.end = function(i) {
  return this.rpcImpl && (i || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(i) {
  var o = i;
  o.Service = Id;
})(jg);
var dd = {};
(function(i) {
  var o = i;
  o.build = "minimal", o.Writer = Ng, o.BufferWriter = cd, o.Reader = Yg, o.BufferReader = ud, o.util = Qt(), o.rpc = jg, o.roots = dd, o.configure = t;
  function t() {
    o.util._configure(), o.Writer._configure(o.BufferWriter), o.Reader._configure(o.BufferReader);
  }
  t();
})(Eg);
var ne = Eg;
const y = ne.Reader, le = ne.Writer, h = ne.util, I = ne.roots.default || (ne.roots.default = {}), Sn = I.dot = (() => {
  const i = {};
  return i.Content = function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), n = 0; n < e.length; ++n)
          t[e[n]] != null && (this[e[n]] = t[e[n]]);
    }
    return o.prototype.token = h.newBuffer([]), o.prototype.iv = h.newBuffer([]), o.prototype.schemaVersion = 0, o.prototype.bytes = h.newBuffer([]), o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = le.create()), t.token != null && Object.hasOwnProperty.call(t, "token") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.token), t.iv != null && Object.hasOwnProperty.call(t, "iv") && e.uint32(
        /* id 2, wireType 2 =*/
        18
      ).bytes(t.iv), t.schemaVersion != null && Object.hasOwnProperty.call(t, "schemaVersion") && e.uint32(
        /* id 3, wireType 0 =*/
        24
      ).int32(t.schemaVersion), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 4, wireType 2 =*/
        34
      ).bytes(t.bytes), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e) {
      t instanceof y || (t = y.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new I.dot.Content();
      for (; t.pos < n; ) {
        let a = t.uint32();
        switch (a >>> 3) {
          case 1: {
            r.token = t.bytes();
            break;
          }
          case 2: {
            r.iv = t.bytes();
            break;
          }
          case 3: {
            r.schemaVersion = t.int32();
            break;
          }
          case 4: {
            r.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(a & 7);
            break;
        }
      }
      return r;
    }, o.decodeDelimited = function(t) {
      return t instanceof y || (t = new y(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || h.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || h.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !h.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || h.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof I.dot.Content)
        return t;
      let e = new I.dot.Content();
      return t.token != null && (typeof t.token == "string" ? h.base64.decode(t.token, e.token = h.newBuffer(h.base64.length(t.token)), 0) : t.token.length >= 0 && (e.token = t.token)), t.iv != null && (typeof t.iv == "string" ? h.base64.decode(t.iv, e.iv = h.newBuffer(h.base64.length(t.iv)), 0) : t.iv.length >= 0 && (e.iv = t.iv)), t.schemaVersion != null && (e.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? h.base64.decode(t.bytes, e.bytes = h.newBuffer(h.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      return e.defaults && (e.bytes === String ? n.token = "" : (n.token = [], e.bytes !== Array && (n.token = h.newBuffer(n.token))), e.bytes === String ? n.iv = "" : (n.iv = [], e.bytes !== Array && (n.iv = h.newBuffer(n.iv))), n.schemaVersion = 0, e.bytes === String ? n.bytes = "" : (n.bytes = [], e.bytes !== Array && (n.bytes = h.newBuffer(n.bytes)))), t.token != null && t.hasOwnProperty("token") && (n.token = e.bytes === String ? h.base64.encode(t.token, 0, t.token.length) : e.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (n.iv = e.bytes === String ? h.base64.encode(t.iv, 0, t.iv.length) : e.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (n.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (n.bytes = e.bytes === String ? h.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), n;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, ne.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Content";
    }, o;
  }(), i.v4 = function() {
    const o = {};
    return o.MagnifEyeLivenessContent = function() {
      function t(e) {
        if (this.images = [], e)
          for (let n = Object.keys(e), r = 0; r < n.length; ++r)
            e[n[r]] != null && (this[n[r]] = e[n[r]]);
      }
      return t.prototype.images = h.emptyArray, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = le.create()), e.images != null && e.images.length)
          for (let r = 0; r < e.images.length; ++r)
            I.dot.Image.encode(e.images[r], n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && I.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof y || (e = y.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new I.dot.v4.MagnifEyeLivenessContent();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.images && a.images.length || (a.images = []), a.images.push(I.dot.Image.decode(e, e.uint32()));
              break;
            }
            case 2: {
              a.metadata = I.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.images != null && e.hasOwnProperty("images")) {
          if (!Array.isArray(e.images))
            return "images: array expected";
          for (let n = 0; n < e.images.length; ++n) {
            let r = I.dot.Image.verify(e.images[n]);
            if (r)
              return "images." + r;
          }
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = I.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof I.dot.v4.MagnifEyeLivenessContent)
          return e;
        let n = new I.dot.v4.MagnifEyeLivenessContent();
        if (e.images) {
          if (!Array.isArray(e.images))
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: array expected");
          n.images = [];
          for (let r = 0; r < e.images.length; ++r) {
            if (typeof e.images[r] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            n.images[r] = I.dot.Image.fromObject(e.images[r]);
          }
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.metadata: object expected");
          n.metadata = I.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.images = []), n.defaults && (r.metadata = null), e.images && e.images.length) {
          r.images = [];
          for (let a = 0; a < e.images.length; ++a)
            r.images[a] = I.dot.Image.toObject(e.images[a], n);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = I.dot.v4.Metadata.toObject(e.metadata, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MagnifEyeLivenessContent";
      }, t;
    }(), o.Metadata = function() {
      function t(n) {
        if (n)
          for (let r = Object.keys(n), a = 0; a < r.length; ++a)
            n[r[a]] != null && (this[r[a]] = n[r[a]]);
      }
      t.prototype.platform = 0, t.prototype.sessionToken = null, t.prototype.componentVersion = "", t.prototype.web = null, t.prototype.android = null, t.prototype.ios = null;
      let e;
      return Object.defineProperty(t.prototype, "_sessionToken", {
        get: h.oneOfGetter(e = ["sessionToken"]),
        set: h.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "metadata", {
        get: h.oneOfGetter(e = ["web", "android", "ios"]),
        set: h.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, r) {
        return r || (r = le.create()), n.platform != null && Object.hasOwnProperty.call(n, "platform") && r.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(n.platform), n.web != null && Object.hasOwnProperty.call(n, "web") && I.dot.v4.WebMetadata.encode(n.web, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.android != null && Object.hasOwnProperty.call(n, "android") && I.dot.v4.AndroidMetadata.encode(n.android, r.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.ios != null && Object.hasOwnProperty.call(n, "ios") && I.dot.v4.IosMetadata.encode(n.ios, r.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), n.sessionToken != null && Object.hasOwnProperty.call(n, "sessionToken") && r.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(n.sessionToken), n.componentVersion != null && Object.hasOwnProperty.call(n, "componentVersion") && r.uint32(
          /* id 6, wireType 2 =*/
          50
        ).string(n.componentVersion), r;
      }, t.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, t.decode = function(n, r) {
        n instanceof y || (n = y.create(n));
        let a = r === void 0 ? n.len : n.pos + r, s = new I.dot.v4.Metadata();
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
            case 6: {
              s.componentVersion = n.string();
              break;
            }
            case 2: {
              s.web = I.dot.v4.WebMetadata.decode(n, n.uint32());
              break;
            }
            case 3: {
              s.android = I.dot.v4.AndroidMetadata.decode(n, n.uint32());
              break;
            }
            case 4: {
              s.ios = I.dot.v4.IosMetadata.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(g & 7);
              break;
          }
        }
        return s;
      }, t.decodeDelimited = function(n) {
        return n instanceof y || (n = new y(n)), this.decode(n, n.uint32());
      }, t.verify = function(n) {
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
        if (n.componentVersion != null && n.hasOwnProperty("componentVersion") && !h.isString(n.componentVersion))
          return "componentVersion: string expected";
        if (n.web != null && n.hasOwnProperty("web")) {
          r.metadata = 1;
          {
            let a = I.dot.v4.WebMetadata.verify(n.web);
            if (a)
              return "web." + a;
          }
        }
        if (n.android != null && n.hasOwnProperty("android")) {
          if (r.metadata === 1)
            return "metadata: multiple values";
          r.metadata = 1;
          {
            let a = I.dot.v4.AndroidMetadata.verify(n.android);
            if (a)
              return "android." + a;
          }
        }
        if (n.ios != null && n.hasOwnProperty("ios")) {
          if (r.metadata === 1)
            return "metadata: multiple values";
          r.metadata = 1;
          {
            let a = I.dot.v4.IosMetadata.verify(n.ios);
            if (a)
              return "ios." + a;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof I.dot.v4.Metadata)
          return n;
        let r = new I.dot.v4.Metadata();
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
        if (n.sessionToken != null && (r.sessionToken = String(n.sessionToken)), n.componentVersion != null && (r.componentVersion = String(n.componentVersion)), n.web != null) {
          if (typeof n.web != "object")
            throw TypeError(".dot.v4.Metadata.web: object expected");
          r.web = I.dot.v4.WebMetadata.fromObject(n.web);
        }
        if (n.android != null) {
          if (typeof n.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          r.android = I.dot.v4.AndroidMetadata.fromObject(n.android);
        }
        if (n.ios != null) {
          if (typeof n.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          r.ios = I.dot.v4.IosMetadata.fromObject(n.ios);
        }
        return r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let a = {};
        return r.defaults && (a.platform = r.enums === String ? "WEB" : 0, a.componentVersion = ""), n.platform != null && n.hasOwnProperty("platform") && (a.platform = r.enums === String ? I.dot.Platform[n.platform] === void 0 ? n.platform : I.dot.Platform[n.platform] : n.platform), n.web != null && n.hasOwnProperty("web") && (a.web = I.dot.v4.WebMetadata.toObject(n.web, r), r.oneofs && (a.metadata = "web")), n.android != null && n.hasOwnProperty("android") && (a.android = I.dot.v4.AndroidMetadata.toObject(n.android, r), r.oneofs && (a.metadata = "android")), n.ios != null && n.hasOwnProperty("ios") && (a.ios = I.dot.v4.IosMetadata.toObject(n.ios, r), r.oneofs && (a.metadata = "ios")), n.sessionToken != null && n.hasOwnProperty("sessionToken") && (a.sessionToken = n.sessionToken, r.oneofs && (a._sessionToken = "sessionToken")), n.componentVersion != null && n.hasOwnProperty("componentVersion") && (a.componentVersion = n.componentVersion), a;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.Metadata";
      }, t;
    }(), o.AndroidMetadata = function() {
      function t(n) {
        if (this.supportedAbis = [], this.digests = [], this.digestsWithTimestamp = [], this.dynamicCameraFrameProperties = {}, n)
          for (let r = Object.keys(n), a = 0; a < r.length; ++a)
            n[r[a]] != null && (this[r[a]] = n[r[a]]);
      }
      t.prototype.supportedAbis = h.emptyArray, t.prototype.device = null, t.prototype.digests = h.emptyArray, t.prototype.digestsWithTimestamp = h.emptyArray, t.prototype.dynamicCameraFrameProperties = h.emptyObject;
      let e;
      return Object.defineProperty(t.prototype, "_device", {
        get: h.oneOfGetter(e = ["device"]),
        set: h.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, r) {
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
            ).string(a[s]), I.dot.Int32List.encode(n.dynamicCameraFrameProperties[a[s]], r.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (n.digestsWithTimestamp != null && n.digestsWithTimestamp.length)
          for (let a = 0; a < n.digestsWithTimestamp.length; ++a)
            I.dot.DigestWithTimestamp.encode(n.digestsWithTimestamp[a], r.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return r;
      }, t.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, t.decode = function(n, r) {
        n instanceof y || (n = y.create(n));
        let a = r === void 0 ? n.len : n.pos + r, s = new I.dot.v4.AndroidMetadata(), g, x;
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
            case 5: {
              s.digestsWithTimestamp && s.digestsWithTimestamp.length || (s.digestsWithTimestamp = []), s.digestsWithTimestamp.push(I.dot.DigestWithTimestamp.decode(n, n.uint32()));
              break;
            }
            case 4: {
              s.dynamicCameraFrameProperties === h.emptyObject && (s.dynamicCameraFrameProperties = {});
              let d = n.uint32() + n.pos;
              for (g = "", x = null; n.pos < d; ) {
                let m = n.uint32();
                switch (m >>> 3) {
                  case 1:
                    g = n.string();
                    break;
                  case 2:
                    x = I.dot.Int32List.decode(n, n.uint32());
                    break;
                  default:
                    n.skipType(m & 7);
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
      }, t.decodeDelimited = function(n) {
        return n instanceof y || (n = new y(n)), this.decode(n, n.uint32());
      }, t.verify = function(n) {
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
        if (n.digestsWithTimestamp != null && n.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(n.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let r = 0; r < n.digestsWithTimestamp.length; ++r) {
            let a = I.dot.DigestWithTimestamp.verify(n.digestsWithTimestamp[r]);
            if (a)
              return "digestsWithTimestamp." + a;
          }
        }
        if (n.dynamicCameraFrameProperties != null && n.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!h.isObject(n.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let r = Object.keys(n.dynamicCameraFrameProperties);
          for (let a = 0; a < r.length; ++a) {
            let s = I.dot.Int32List.verify(n.dynamicCameraFrameProperties[r[a]]);
            if (s)
              return "dynamicCameraFrameProperties." + s;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof I.dot.v4.AndroidMetadata)
          return n;
        let r = new I.dot.v4.AndroidMetadata();
        if (n.supportedAbis) {
          if (!Array.isArray(n.supportedAbis))
            throw TypeError(".dot.v4.AndroidMetadata.supportedAbis: array expected");
          r.supportedAbis = [];
          for (let a = 0; a < n.supportedAbis.length; ++a)
            r.supportedAbis[a] = String(n.supportedAbis[a]);
        }
        if (n.device != null && (r.device = String(n.device)), n.digests) {
          if (!Array.isArray(n.digests))
            throw TypeError(".dot.v4.AndroidMetadata.digests: array expected");
          r.digests = [];
          for (let a = 0; a < n.digests.length; ++a)
            typeof n.digests[a] == "string" ? h.base64.decode(n.digests[a], r.digests[a] = h.newBuffer(h.base64.length(n.digests[a])), 0) : n.digests[a].length >= 0 && (r.digests[a] = n.digests[a]);
        }
        if (n.digestsWithTimestamp) {
          if (!Array.isArray(n.digestsWithTimestamp))
            throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: array expected");
          r.digestsWithTimestamp = [];
          for (let a = 0; a < n.digestsWithTimestamp.length; ++a) {
            if (typeof n.digestsWithTimestamp[a] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: object expected");
            r.digestsWithTimestamp[a] = I.dot.DigestWithTimestamp.fromObject(n.digestsWithTimestamp[a]);
          }
        }
        if (n.dynamicCameraFrameProperties) {
          if (typeof n.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          r.dynamicCameraFrameProperties = {};
          for (let a = Object.keys(n.dynamicCameraFrameProperties), s = 0; s < a.length; ++s) {
            if (typeof n.dynamicCameraFrameProperties[a[s]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            r.dynamicCameraFrameProperties[a[s]] = I.dot.Int32List.fromObject(n.dynamicCameraFrameProperties[a[s]]);
          }
        }
        return r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let a = {};
        if ((r.arrays || r.defaults) && (a.supportedAbis = [], a.digests = [], a.digestsWithTimestamp = []), (r.objects || r.defaults) && (a.dynamicCameraFrameProperties = {}), n.supportedAbis && n.supportedAbis.length) {
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
            a.dynamicCameraFrameProperties[s[g]] = I.dot.Int32List.toObject(n.dynamicCameraFrameProperties[s[g]], r);
        }
        if (n.digestsWithTimestamp && n.digestsWithTimestamp.length) {
          a.digestsWithTimestamp = [];
          for (let g = 0; g < n.digestsWithTimestamp.length; ++g)
            a.digestsWithTimestamp[g] = I.dot.DigestWithTimestamp.toObject(n.digestsWithTimestamp[g], r);
        }
        return a;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.AndroidMetadata";
      }, t;
    }(), o.IosMetadata = function() {
      function t(e) {
        if (this.architectureInfo = {}, this.digests = [], this.digestsWithTimestamp = [], this.isoValues = [], e)
          for (let n = Object.keys(e), r = 0; r < n.length; ++r)
            e[n[r]] != null && (this[n[r]] = e[n[r]]);
      }
      return t.prototype.cameraModelId = "", t.prototype.architectureInfo = h.emptyObject, t.prototype.digests = h.emptyArray, t.prototype.digestsWithTimestamp = h.emptyArray, t.prototype.isoValues = h.emptyArray, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = le.create()), e.cameraModelId != null && Object.hasOwnProperty.call(e, "cameraModelId") && n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(e.cameraModelId), e.architectureInfo != null && Object.hasOwnProperty.call(e, "architectureInfo"))
          for (let r = Object.keys(e.architectureInfo), a = 0; a < r.length; ++a)
            n.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(r[a]).uint32(
              /* id 2, wireType 0 =*/
              16
            ).bool(e.architectureInfo[r[a]]).ldelim();
        if (e.digests != null && e.digests.length)
          for (let r = 0; r < e.digests.length; ++r)
            n.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(e.digests[r]);
        if (e.isoValues != null && e.isoValues.length) {
          n.uint32(
            /* id 4, wireType 2 =*/
            34
          ).fork();
          for (let r = 0; r < e.isoValues.length; ++r)
            n.int32(e.isoValues[r]);
          n.ldelim();
        }
        if (e.digestsWithTimestamp != null && e.digestsWithTimestamp.length)
          for (let r = 0; r < e.digestsWithTimestamp.length; ++r)
            I.dot.DigestWithTimestamp.encode(e.digestsWithTimestamp[r], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof y || (e = y.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new I.dot.v4.IosMetadata(), s, g;
        for (; e.pos < r; ) {
          let x = e.uint32();
          switch (x >>> 3) {
            case 1: {
              a.cameraModelId = e.string();
              break;
            }
            case 2: {
              a.architectureInfo === h.emptyObject && (a.architectureInfo = {});
              let C = e.uint32() + e.pos;
              for (s = "", g = !1; e.pos < C; ) {
                let d = e.uint32();
                switch (d >>> 3) {
                  case 1:
                    s = e.string();
                    break;
                  case 2:
                    g = e.bool();
                    break;
                  default:
                    e.skipType(d & 7);
                    break;
                }
              }
              a.architectureInfo[s] = g;
              break;
            }
            case 3: {
              a.digests && a.digests.length || (a.digests = []), a.digests.push(e.bytes());
              break;
            }
            case 5: {
              a.digestsWithTimestamp && a.digestsWithTimestamp.length || (a.digestsWithTimestamp = []), a.digestsWithTimestamp.push(I.dot.DigestWithTimestamp.decode(e, e.uint32()));
              break;
            }
            case 4: {
              if (a.isoValues && a.isoValues.length || (a.isoValues = []), (x & 7) === 2) {
                let C = e.uint32() + e.pos;
                for (; e.pos < C; )
                  a.isoValues.push(e.int32());
              } else
                a.isoValues.push(e.int32());
              break;
            }
            default:
              e.skipType(x & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.cameraModelId != null && e.hasOwnProperty("cameraModelId") && !h.isString(e.cameraModelId))
          return "cameraModelId: string expected";
        if (e.architectureInfo != null && e.hasOwnProperty("architectureInfo")) {
          if (!h.isObject(e.architectureInfo))
            return "architectureInfo: object expected";
          let n = Object.keys(e.architectureInfo);
          for (let r = 0; r < n.length; ++r)
            if (typeof e.architectureInfo[n[r]] != "boolean")
              return "architectureInfo: boolean{k:string} expected";
        }
        if (e.digests != null && e.hasOwnProperty("digests")) {
          if (!Array.isArray(e.digests))
            return "digests: array expected";
          for (let n = 0; n < e.digests.length; ++n)
            if (!(e.digests[n] && typeof e.digests[n].length == "number" || h.isString(e.digests[n])))
              return "digests: buffer[] expected";
        }
        if (e.digestsWithTimestamp != null && e.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(e.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let n = 0; n < e.digestsWithTimestamp.length; ++n) {
            let r = I.dot.DigestWithTimestamp.verify(e.digestsWithTimestamp[n]);
            if (r)
              return "digestsWithTimestamp." + r;
          }
        }
        if (e.isoValues != null && e.hasOwnProperty("isoValues")) {
          if (!Array.isArray(e.isoValues))
            return "isoValues: array expected";
          for (let n = 0; n < e.isoValues.length; ++n)
            if (!h.isInteger(e.isoValues[n]))
              return "isoValues: integer[] expected";
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof I.dot.v4.IosMetadata)
          return e;
        let n = new I.dot.v4.IosMetadata();
        if (e.cameraModelId != null && (n.cameraModelId = String(e.cameraModelId)), e.architectureInfo) {
          if (typeof e.architectureInfo != "object")
            throw TypeError(".dot.v4.IosMetadata.architectureInfo: object expected");
          n.architectureInfo = {};
          for (let r = Object.keys(e.architectureInfo), a = 0; a < r.length; ++a)
            n.architectureInfo[r[a]] = !!e.architectureInfo[r[a]];
        }
        if (e.digests) {
          if (!Array.isArray(e.digests))
            throw TypeError(".dot.v4.IosMetadata.digests: array expected");
          n.digests = [];
          for (let r = 0; r < e.digests.length; ++r)
            typeof e.digests[r] == "string" ? h.base64.decode(e.digests[r], n.digests[r] = h.newBuffer(h.base64.length(e.digests[r])), 0) : e.digests[r].length >= 0 && (n.digests[r] = e.digests[r]);
        }
        if (e.digestsWithTimestamp) {
          if (!Array.isArray(e.digestsWithTimestamp))
            throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: array expected");
          n.digestsWithTimestamp = [];
          for (let r = 0; r < e.digestsWithTimestamp.length; ++r) {
            if (typeof e.digestsWithTimestamp[r] != "object")
              throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: object expected");
            n.digestsWithTimestamp[r] = I.dot.DigestWithTimestamp.fromObject(e.digestsWithTimestamp[r]);
          }
        }
        if (e.isoValues) {
          if (!Array.isArray(e.isoValues))
            throw TypeError(".dot.v4.IosMetadata.isoValues: array expected");
          n.isoValues = [];
          for (let r = 0; r < e.isoValues.length; ++r)
            n.isoValues[r] = e.isoValues[r] | 0;
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        (n.arrays || n.defaults) && (r.digests = [], r.isoValues = [], r.digestsWithTimestamp = []), (n.objects || n.defaults) && (r.architectureInfo = {}), n.defaults && (r.cameraModelId = ""), e.cameraModelId != null && e.hasOwnProperty("cameraModelId") && (r.cameraModelId = e.cameraModelId);
        let a;
        if (e.architectureInfo && (a = Object.keys(e.architectureInfo)).length) {
          r.architectureInfo = {};
          for (let s = 0; s < a.length; ++s)
            r.architectureInfo[a[s]] = e.architectureInfo[a[s]];
        }
        if (e.digests && e.digests.length) {
          r.digests = [];
          for (let s = 0; s < e.digests.length; ++s)
            r.digests[s] = n.bytes === String ? h.base64.encode(e.digests[s], 0, e.digests[s].length) : n.bytes === Array ? Array.prototype.slice.call(e.digests[s]) : e.digests[s];
        }
        if (e.isoValues && e.isoValues.length) {
          r.isoValues = [];
          for (let s = 0; s < e.isoValues.length; ++s)
            r.isoValues[s] = e.isoValues[s];
        }
        if (e.digestsWithTimestamp && e.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let s = 0; s < e.digestsWithTimestamp.length; ++s)
            r.digestsWithTimestamp[s] = I.dot.DigestWithTimestamp.toObject(e.digestsWithTimestamp[s], n);
        }
        return r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosMetadata";
      }, t;
    }(), o.WebMetadata = function() {
      function t(e) {
        if (this.availableCameraProperties = [], this.hashedDetectedImages = [], this.hashedDetectedImagesWithTimestamp = [], this.detectionRecord = [], e)
          for (let n = Object.keys(e), r = 0; r < n.length; ++r)
            e[n[r]] != null && (this[n[r]] = e[n[r]]);
      }
      return t.prototype.currentCameraProperties = null, t.prototype.availableCameraProperties = h.emptyArray, t.prototype.hashedDetectedImages = h.emptyArray, t.prototype.hashedDetectedImagesWithTimestamp = h.emptyArray, t.prototype.detectionRecord = h.emptyArray, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = le.create()), e.currentCameraProperties != null && Object.hasOwnProperty.call(e, "currentCameraProperties") && I.dot.v4.MediaTrackSettings.encode(e.currentCameraProperties, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.availableCameraProperties != null && e.availableCameraProperties.length)
          for (let r = 0; r < e.availableCameraProperties.length; ++r)
            I.dot.v4.CameraProperties.encode(e.availableCameraProperties[r], n.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim();
        if (e.hashedDetectedImages != null && e.hashedDetectedImages.length)
          for (let r = 0; r < e.hashedDetectedImages.length; ++r)
            n.uint32(
              /* id 3, wireType 2 =*/
              26
            ).string(e.hashedDetectedImages[r]);
        if (e.detectionRecord != null && e.detectionRecord.length)
          for (let r = 0; r < e.detectionRecord.length; ++r)
            I.dot.v4.DetectedObject.encode(e.detectionRecord[r], n.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (e.hashedDetectedImagesWithTimestamp != null && e.hashedDetectedImagesWithTimestamp.length)
          for (let r = 0; r < e.hashedDetectedImagesWithTimestamp.length; ++r)
            I.dot.v4.HashedDetectedImageWithTimestamp.encode(e.hashedDetectedImagesWithTimestamp[r], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof y || (e = y.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new I.dot.v4.WebMetadata();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.currentCameraProperties = I.dot.v4.MediaTrackSettings.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.availableCameraProperties && a.availableCameraProperties.length || (a.availableCameraProperties = []), a.availableCameraProperties.push(I.dot.v4.CameraProperties.decode(e, e.uint32()));
              break;
            }
            case 3: {
              a.hashedDetectedImages && a.hashedDetectedImages.length || (a.hashedDetectedImages = []), a.hashedDetectedImages.push(e.string());
              break;
            }
            case 5: {
              a.hashedDetectedImagesWithTimestamp && a.hashedDetectedImagesWithTimestamp.length || (a.hashedDetectedImagesWithTimestamp = []), a.hashedDetectedImagesWithTimestamp.push(I.dot.v4.HashedDetectedImageWithTimestamp.decode(e, e.uint32()));
              break;
            }
            case 4: {
              a.detectionRecord && a.detectionRecord.length || (a.detectionRecord = []), a.detectionRecord.push(I.dot.v4.DetectedObject.decode(e, e.uint32()));
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.currentCameraProperties != null && e.hasOwnProperty("currentCameraProperties")) {
          let n = I.dot.v4.MediaTrackSettings.verify(e.currentCameraProperties);
          if (n)
            return "currentCameraProperties." + n;
        }
        if (e.availableCameraProperties != null && e.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(e.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let n = 0; n < e.availableCameraProperties.length; ++n) {
            let r = I.dot.v4.CameraProperties.verify(e.availableCameraProperties[n]);
            if (r)
              return "availableCameraProperties." + r;
          }
        }
        if (e.hashedDetectedImages != null && e.hasOwnProperty("hashedDetectedImages")) {
          if (!Array.isArray(e.hashedDetectedImages))
            return "hashedDetectedImages: array expected";
          for (let n = 0; n < e.hashedDetectedImages.length; ++n)
            if (!h.isString(e.hashedDetectedImages[n]))
              return "hashedDetectedImages: string[] expected";
        }
        if (e.hashedDetectedImagesWithTimestamp != null && e.hasOwnProperty("hashedDetectedImagesWithTimestamp")) {
          if (!Array.isArray(e.hashedDetectedImagesWithTimestamp))
            return "hashedDetectedImagesWithTimestamp: array expected";
          for (let n = 0; n < e.hashedDetectedImagesWithTimestamp.length; ++n) {
            let r = I.dot.v4.HashedDetectedImageWithTimestamp.verify(e.hashedDetectedImagesWithTimestamp[n]);
            if (r)
              return "hashedDetectedImagesWithTimestamp." + r;
          }
        }
        if (e.detectionRecord != null && e.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(e.detectionRecord))
            return "detectionRecord: array expected";
          for (let n = 0; n < e.detectionRecord.length; ++n) {
            let r = I.dot.v4.DetectedObject.verify(e.detectionRecord[n]);
            if (r)
              return "detectionRecord." + r;
          }
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof I.dot.v4.WebMetadata)
          return e;
        let n = new I.dot.v4.WebMetadata();
        if (e.currentCameraProperties != null) {
          if (typeof e.currentCameraProperties != "object")
            throw TypeError(".dot.v4.WebMetadata.currentCameraProperties: object expected");
          n.currentCameraProperties = I.dot.v4.MediaTrackSettings.fromObject(e.currentCameraProperties);
        }
        if (e.availableCameraProperties) {
          if (!Array.isArray(e.availableCameraProperties))
            throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: array expected");
          n.availableCameraProperties = [];
          for (let r = 0; r < e.availableCameraProperties.length; ++r) {
            if (typeof e.availableCameraProperties[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            n.availableCameraProperties[r] = I.dot.v4.CameraProperties.fromObject(e.availableCameraProperties[r]);
          }
        }
        if (e.hashedDetectedImages) {
          if (!Array.isArray(e.hashedDetectedImages))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImages: array expected");
          n.hashedDetectedImages = [];
          for (let r = 0; r < e.hashedDetectedImages.length; ++r)
            n.hashedDetectedImages[r] = String(e.hashedDetectedImages[r]);
        }
        if (e.hashedDetectedImagesWithTimestamp) {
          if (!Array.isArray(e.hashedDetectedImagesWithTimestamp))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: array expected");
          n.hashedDetectedImagesWithTimestamp = [];
          for (let r = 0; r < e.hashedDetectedImagesWithTimestamp.length; ++r) {
            if (typeof e.hashedDetectedImagesWithTimestamp[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: object expected");
            n.hashedDetectedImagesWithTimestamp[r] = I.dot.v4.HashedDetectedImageWithTimestamp.fromObject(e.hashedDetectedImagesWithTimestamp[r]);
          }
        }
        if (e.detectionRecord) {
          if (!Array.isArray(e.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          n.detectionRecord = [];
          for (let r = 0; r < e.detectionRecord.length; ++r) {
            if (typeof e.detectionRecord[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            n.detectionRecord[r] = I.dot.v4.DetectedObject.fromObject(e.detectionRecord[r]);
          }
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.availableCameraProperties = [], r.hashedDetectedImages = [], r.detectionRecord = [], r.hashedDetectedImagesWithTimestamp = []), n.defaults && (r.currentCameraProperties = null), e.currentCameraProperties != null && e.hasOwnProperty("currentCameraProperties") && (r.currentCameraProperties = I.dot.v4.MediaTrackSettings.toObject(e.currentCameraProperties, n)), e.availableCameraProperties && e.availableCameraProperties.length) {
          r.availableCameraProperties = [];
          for (let a = 0; a < e.availableCameraProperties.length; ++a)
            r.availableCameraProperties[a] = I.dot.v4.CameraProperties.toObject(e.availableCameraProperties[a], n);
        }
        if (e.hashedDetectedImages && e.hashedDetectedImages.length) {
          r.hashedDetectedImages = [];
          for (let a = 0; a < e.hashedDetectedImages.length; ++a)
            r.hashedDetectedImages[a] = e.hashedDetectedImages[a];
        }
        if (e.detectionRecord && e.detectionRecord.length) {
          r.detectionRecord = [];
          for (let a = 0; a < e.detectionRecord.length; ++a)
            r.detectionRecord[a] = I.dot.v4.DetectedObject.toObject(e.detectionRecord[a], n);
        }
        if (e.hashedDetectedImagesWithTimestamp && e.hashedDetectedImagesWithTimestamp.length) {
          r.hashedDetectedImagesWithTimestamp = [];
          for (let a = 0; a < e.hashedDetectedImagesWithTimestamp.length; ++a)
            r.hashedDetectedImagesWithTimestamp[a] = I.dot.v4.HashedDetectedImageWithTimestamp.toObject(e.hashedDetectedImagesWithTimestamp[a], n);
        }
        return r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.WebMetadata";
      }, t;
    }(), o.HashedDetectedImageWithTimestamp = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), r = 0; r < n.length; ++r)
            e[n[r]] != null && (this[n[r]] = e[n[r]]);
      }
      return t.prototype.imageHash = "", t.prototype.timestampMillis = h.Long ? h.Long.fromBits(0, 0, !0) : 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = le.create()), e.imageHash != null && Object.hasOwnProperty.call(e, "imageHash") && n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(e.imageHash), e.timestampMillis != null && Object.hasOwnProperty.call(e, "timestampMillis") && n.uint32(
          /* id 2, wireType 0 =*/
          16
        ).uint64(e.timestampMillis), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof y || (e = y.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new I.dot.v4.HashedDetectedImageWithTimestamp();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.imageHash = e.string();
              break;
            }
            case 2: {
              a.timestampMillis = e.uint64();
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !h.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !h.isInteger(e.timestampMillis) && !(e.timestampMillis && h.isInteger(e.timestampMillis.low) && h.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof I.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let n = new I.dot.v4.HashedDetectedImageWithTimestamp();
        return e.imageHash != null && (n.imageHash = String(e.imageHash)), e.timestampMillis != null && (h.Long ? (n.timestampMillis = h.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? n.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? n.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (n.timestampMillis = new h.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        if (n.defaults)
          if (r.imageHash = "", h.Long) {
            let a = new h.Long(0, 0, !0);
            r.timestampMillis = n.longs === String ? a.toString() : n.longs === Number ? a.toNumber() : a;
          } else
            r.timestampMillis = n.longs === String ? "0" : 0;
        return e.imageHash != null && e.hasOwnProperty("imageHash") && (r.imageHash = e.imageHash), e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? r.timestampMillis = n.longs === String ? String(e.timestampMillis) : e.timestampMillis : r.timestampMillis = n.longs === String ? h.Long.prototype.toString.call(e.timestampMillis) : n.longs === Number ? new h.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.HashedDetectedImageWithTimestamp";
      }, t;
    }(), o.MediaTrackSettings = function() {
      function t(n) {
        if (n)
          for (let r = Object.keys(n), a = 0; a < r.length; ++a)
            n[r[a]] != null && (this[r[a]] = n[r[a]]);
      }
      t.prototype.aspectRatio = null, t.prototype.autoGainControl = null, t.prototype.channelCount = null, t.prototype.deviceId = null, t.prototype.displaySurface = null, t.prototype.echoCancellation = null, t.prototype.facingMode = null, t.prototype.frameRate = null, t.prototype.groupId = null, t.prototype.height = null, t.prototype.noiseSuppression = null, t.prototype.sampleRate = null, t.prototype.sampleSize = null, t.prototype.width = null, t.prototype.deviceName = null;
      let e;
      return Object.defineProperty(t.prototype, "_aspectRatio", {
        get: h.oneOfGetter(e = ["aspectRatio"]),
        set: h.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_autoGainControl", {
        get: h.oneOfGetter(e = ["autoGainControl"]),
        set: h.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_channelCount", {
        get: h.oneOfGetter(e = ["channelCount"]),
        set: h.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceId", {
        get: h.oneOfGetter(e = ["deviceId"]),
        set: h.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_displaySurface", {
        get: h.oneOfGetter(e = ["displaySurface"]),
        set: h.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_echoCancellation", {
        get: h.oneOfGetter(e = ["echoCancellation"]),
        set: h.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_facingMode", {
        get: h.oneOfGetter(e = ["facingMode"]),
        set: h.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_frameRate", {
        get: h.oneOfGetter(e = ["frameRate"]),
        set: h.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_groupId", {
        get: h.oneOfGetter(e = ["groupId"]),
        set: h.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_height", {
        get: h.oneOfGetter(e = ["height"]),
        set: h.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_noiseSuppression", {
        get: h.oneOfGetter(e = ["noiseSuppression"]),
        set: h.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleRate", {
        get: h.oneOfGetter(e = ["sampleRate"]),
        set: h.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleSize", {
        get: h.oneOfGetter(e = ["sampleSize"]),
        set: h.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_width", {
        get: h.oneOfGetter(e = ["width"]),
        set: h.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceName", {
        get: h.oneOfGetter(e = ["deviceName"]),
        set: h.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, r) {
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
      }, t.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, t.decode = function(n, r) {
        n instanceof y || (n = y.create(n));
        let a = r === void 0 ? n.len : n.pos + r, s = new I.dot.v4.MediaTrackSettings();
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
      }, t.decodeDelimited = function(n) {
        return n instanceof y || (n = new y(n)), this.decode(n, n.uint32());
      }, t.verify = function(n) {
        return typeof n != "object" || n === null ? "object expected" : n.aspectRatio != null && n.hasOwnProperty("aspectRatio") && typeof n.aspectRatio != "number" ? "aspectRatio: number expected" : n.autoGainControl != null && n.hasOwnProperty("autoGainControl") && typeof n.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : n.channelCount != null && n.hasOwnProperty("channelCount") && !h.isInteger(n.channelCount) ? "channelCount: integer expected" : n.deviceId != null && n.hasOwnProperty("deviceId") && !h.isString(n.deviceId) ? "deviceId: string expected" : n.displaySurface != null && n.hasOwnProperty("displaySurface") && !h.isString(n.displaySurface) ? "displaySurface: string expected" : n.echoCancellation != null && n.hasOwnProperty("echoCancellation") && typeof n.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : n.facingMode != null && n.hasOwnProperty("facingMode") && !h.isString(n.facingMode) ? "facingMode: string expected" : n.frameRate != null && n.hasOwnProperty("frameRate") && typeof n.frameRate != "number" ? "frameRate: number expected" : n.groupId != null && n.hasOwnProperty("groupId") && !h.isString(n.groupId) ? "groupId: string expected" : n.height != null && n.hasOwnProperty("height") && !h.isInteger(n.height) ? "height: integer expected" : n.noiseSuppression != null && n.hasOwnProperty("noiseSuppression") && typeof n.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : n.sampleRate != null && n.hasOwnProperty("sampleRate") && !h.isInteger(n.sampleRate) ? "sampleRate: integer expected" : n.sampleSize != null && n.hasOwnProperty("sampleSize") && !h.isInteger(n.sampleSize) ? "sampleSize: integer expected" : n.width != null && n.hasOwnProperty("width") && !h.isInteger(n.width) ? "width: integer expected" : n.deviceName != null && n.hasOwnProperty("deviceName") && !h.isString(n.deviceName) ? "deviceName: string expected" : null;
      }, t.fromObject = function(n) {
        if (n instanceof I.dot.v4.MediaTrackSettings)
          return n;
        let r = new I.dot.v4.MediaTrackSettings();
        return n.aspectRatio != null && (r.aspectRatio = Number(n.aspectRatio)), n.autoGainControl != null && (r.autoGainControl = !!n.autoGainControl), n.channelCount != null && (r.channelCount = n.channelCount | 0), n.deviceId != null && (r.deviceId = String(n.deviceId)), n.displaySurface != null && (r.displaySurface = String(n.displaySurface)), n.echoCancellation != null && (r.echoCancellation = !!n.echoCancellation), n.facingMode != null && (r.facingMode = String(n.facingMode)), n.frameRate != null && (r.frameRate = Number(n.frameRate)), n.groupId != null && (r.groupId = String(n.groupId)), n.height != null && (r.height = n.height | 0), n.noiseSuppression != null && (r.noiseSuppression = !!n.noiseSuppression), n.sampleRate != null && (r.sampleRate = n.sampleRate | 0), n.sampleSize != null && (r.sampleSize = n.sampleSize | 0), n.width != null && (r.width = n.width | 0), n.deviceName != null && (r.deviceName = String(n.deviceName)), r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let a = {};
        return n.aspectRatio != null && n.hasOwnProperty("aspectRatio") && (a.aspectRatio = r.json && !isFinite(n.aspectRatio) ? String(n.aspectRatio) : n.aspectRatio, r.oneofs && (a._aspectRatio = "aspectRatio")), n.autoGainControl != null && n.hasOwnProperty("autoGainControl") && (a.autoGainControl = n.autoGainControl, r.oneofs && (a._autoGainControl = "autoGainControl")), n.channelCount != null && n.hasOwnProperty("channelCount") && (a.channelCount = n.channelCount, r.oneofs && (a._channelCount = "channelCount")), n.deviceId != null && n.hasOwnProperty("deviceId") && (a.deviceId = n.deviceId, r.oneofs && (a._deviceId = "deviceId")), n.displaySurface != null && n.hasOwnProperty("displaySurface") && (a.displaySurface = n.displaySurface, r.oneofs && (a._displaySurface = "displaySurface")), n.echoCancellation != null && n.hasOwnProperty("echoCancellation") && (a.echoCancellation = n.echoCancellation, r.oneofs && (a._echoCancellation = "echoCancellation")), n.facingMode != null && n.hasOwnProperty("facingMode") && (a.facingMode = n.facingMode, r.oneofs && (a._facingMode = "facingMode")), n.frameRate != null && n.hasOwnProperty("frameRate") && (a.frameRate = r.json && !isFinite(n.frameRate) ? String(n.frameRate) : n.frameRate, r.oneofs && (a._frameRate = "frameRate")), n.groupId != null && n.hasOwnProperty("groupId") && (a.groupId = n.groupId, r.oneofs && (a._groupId = "groupId")), n.height != null && n.hasOwnProperty("height") && (a.height = n.height, r.oneofs && (a._height = "height")), n.noiseSuppression != null && n.hasOwnProperty("noiseSuppression") && (a.noiseSuppression = n.noiseSuppression, r.oneofs && (a._noiseSuppression = "noiseSuppression")), n.sampleRate != null && n.hasOwnProperty("sampleRate") && (a.sampleRate = n.sampleRate, r.oneofs && (a._sampleRate = "sampleRate")), n.sampleSize != null && n.hasOwnProperty("sampleSize") && (a.sampleSize = n.sampleSize, r.oneofs && (a._sampleSize = "sampleSize")), n.width != null && n.hasOwnProperty("width") && (a.width = n.width, r.oneofs && (a._width = "width")), n.deviceName != null && n.hasOwnProperty("deviceName") && (a.deviceName = n.deviceName, r.oneofs && (a._deviceName = "deviceName")), a;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.MediaTrackSettings";
      }, t;
    }(), o.ImageBitmap = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), r = 0; r < n.length; ++r)
            e[n[r]] != null && (this[n[r]] = e[n[r]]);
      }
      return t.prototype.width = 0, t.prototype.height = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = le.create()), e.width != null && Object.hasOwnProperty.call(e, "width") && n.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.width), e.height != null && Object.hasOwnProperty.call(e, "height") && n.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.height), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof y || (e = y.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new I.dot.v4.ImageBitmap();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.width = e.int32();
              break;
            }
            case 2: {
              a.height = e.int32();
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !h.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !h.isInteger(e.height) ? "height: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof I.dot.v4.ImageBitmap)
          return e;
        let n = new I.dot.v4.ImageBitmap();
        return e.width != null && (n.width = e.width | 0), e.height != null && (n.height = e.height | 0), n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.width = 0, r.height = 0), e.width != null && e.hasOwnProperty("width") && (r.width = e.width), e.height != null && e.hasOwnProperty("height") && (r.height = e.height), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.ImageBitmap";
      }, t;
    }(), o.CameraProperties = function() {
      function t(n) {
        if (n)
          for (let r = Object.keys(n), a = 0; a < r.length; ++a)
            n[r[a]] != null && (this[r[a]] = n[r[a]]);
      }
      t.prototype.cameraInitFrameResolution = null, t.prototype.cameraProperties = null;
      let e;
      return Object.defineProperty(t.prototype, "_cameraInitFrameResolution", {
        get: h.oneOfGetter(e = ["cameraInitFrameResolution"]),
        set: h.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, r) {
        return r || (r = le.create()), n.cameraInitFrameResolution != null && Object.hasOwnProperty.call(n, "cameraInitFrameResolution") && I.dot.v4.ImageBitmap.encode(n.cameraInitFrameResolution, r.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.cameraProperties != null && Object.hasOwnProperty.call(n, "cameraProperties") && I.dot.v4.MediaTrackSettings.encode(n.cameraProperties, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), r;
      }, t.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, t.decode = function(n, r) {
        n instanceof y || (n = y.create(n));
        let a = r === void 0 ? n.len : n.pos + r, s = new I.dot.v4.CameraProperties();
        for (; n.pos < a; ) {
          let g = n.uint32();
          switch (g >>> 3) {
            case 1: {
              s.cameraInitFrameResolution = I.dot.v4.ImageBitmap.decode(n, n.uint32());
              break;
            }
            case 2: {
              s.cameraProperties = I.dot.v4.MediaTrackSettings.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(g & 7);
              break;
          }
        }
        return s;
      }, t.decodeDelimited = function(n) {
        return n instanceof y || (n = new y(n)), this.decode(n, n.uint32());
      }, t.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.cameraInitFrameResolution != null && n.hasOwnProperty("cameraInitFrameResolution")) {
          let r = I.dot.v4.ImageBitmap.verify(n.cameraInitFrameResolution);
          if (r)
            return "cameraInitFrameResolution." + r;
        }
        if (n.cameraProperties != null && n.hasOwnProperty("cameraProperties")) {
          let r = I.dot.v4.MediaTrackSettings.verify(n.cameraProperties);
          if (r)
            return "cameraProperties." + r;
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof I.dot.v4.CameraProperties)
          return n;
        let r = new I.dot.v4.CameraProperties();
        if (n.cameraInitFrameResolution != null) {
          if (typeof n.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          r.cameraInitFrameResolution = I.dot.v4.ImageBitmap.fromObject(n.cameraInitFrameResolution);
        }
        if (n.cameraProperties != null) {
          if (typeof n.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          r.cameraProperties = I.dot.v4.MediaTrackSettings.fromObject(n.cameraProperties);
        }
        return r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let a = {};
        return r.defaults && (a.cameraProperties = null), n.cameraInitFrameResolution != null && n.hasOwnProperty("cameraInitFrameResolution") && (a.cameraInitFrameResolution = I.dot.v4.ImageBitmap.toObject(n.cameraInitFrameResolution, r), r.oneofs && (a._cameraInitFrameResolution = "cameraInitFrameResolution")), n.cameraProperties != null && n.hasOwnProperty("cameraProperties") && (a.cameraProperties = I.dot.v4.MediaTrackSettings.toObject(n.cameraProperties, r)), a;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.CameraProperties";
      }, t;
    }(), o.DetectedObject = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), r = 0; r < n.length; ++r)
            e[n[r]] != null && (this[n[r]] = e[n[r]]);
      }
      return t.prototype.brightness = 0, t.prototype.sharpness = 0, t.prototype.hotspots = 0, t.prototype.confidence = 0, t.prototype.faceSize = 0, t.prototype.faceCenter = null, t.prototype.smallestEdge = 0, t.prototype.bottomLeft = null, t.prototype.bottomRight = null, t.prototype.topLeft = null, t.prototype.topRight = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = le.create()), e.brightness != null && Object.hasOwnProperty.call(e, "brightness") && n.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(e.brightness), e.sharpness != null && Object.hasOwnProperty.call(e, "sharpness") && n.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(e.sharpness), e.hotspots != null && Object.hasOwnProperty.call(e, "hotspots") && n.uint32(
          /* id 3, wireType 5 =*/
          29
        ).float(e.hotspots), e.confidence != null && Object.hasOwnProperty.call(e, "confidence") && n.uint32(
          /* id 4, wireType 5 =*/
          37
        ).float(e.confidence), e.faceSize != null && Object.hasOwnProperty.call(e, "faceSize") && n.uint32(
          /* id 5, wireType 5 =*/
          45
        ).float(e.faceSize), e.faceCenter != null && Object.hasOwnProperty.call(e, "faceCenter") && I.dot.v4.Point.encode(e.faceCenter, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), e.smallestEdge != null && Object.hasOwnProperty.call(e, "smallestEdge") && n.uint32(
          /* id 7, wireType 5 =*/
          61
        ).float(e.smallestEdge), e.bottomLeft != null && Object.hasOwnProperty.call(e, "bottomLeft") && I.dot.v4.Point.encode(e.bottomLeft, n.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), e.bottomRight != null && Object.hasOwnProperty.call(e, "bottomRight") && I.dot.v4.Point.encode(e.bottomRight, n.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), e.topLeft != null && Object.hasOwnProperty.call(e, "topLeft") && I.dot.v4.Point.encode(e.topLeft, n.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), e.topRight != null && Object.hasOwnProperty.call(e, "topRight") && I.dot.v4.Point.encode(e.topRight, n.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof y || (e = y.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new I.dot.v4.DetectedObject();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.brightness = e.float();
              break;
            }
            case 2: {
              a.sharpness = e.float();
              break;
            }
            case 3: {
              a.hotspots = e.float();
              break;
            }
            case 4: {
              a.confidence = e.float();
              break;
            }
            case 5: {
              a.faceSize = e.float();
              break;
            }
            case 6: {
              a.faceCenter = I.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              a.smallestEdge = e.float();
              break;
            }
            case 8: {
              a.bottomLeft = I.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              a.bottomRight = I.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              a.topLeft = I.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              a.topRight = I.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.brightness != null && e.hasOwnProperty("brightness") && typeof e.brightness != "number")
          return "brightness: number expected";
        if (e.sharpness != null && e.hasOwnProperty("sharpness") && typeof e.sharpness != "number")
          return "sharpness: number expected";
        if (e.hotspots != null && e.hasOwnProperty("hotspots") && typeof e.hotspots != "number")
          return "hotspots: number expected";
        if (e.confidence != null && e.hasOwnProperty("confidence") && typeof e.confidence != "number")
          return "confidence: number expected";
        if (e.faceSize != null && e.hasOwnProperty("faceSize") && typeof e.faceSize != "number")
          return "faceSize: number expected";
        if (e.faceCenter != null && e.hasOwnProperty("faceCenter")) {
          let n = I.dot.v4.Point.verify(e.faceCenter);
          if (n)
            return "faceCenter." + n;
        }
        if (e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && typeof e.smallestEdge != "number")
          return "smallestEdge: number expected";
        if (e.bottomLeft != null && e.hasOwnProperty("bottomLeft")) {
          let n = I.dot.v4.Point.verify(e.bottomLeft);
          if (n)
            return "bottomLeft." + n;
        }
        if (e.bottomRight != null && e.hasOwnProperty("bottomRight")) {
          let n = I.dot.v4.Point.verify(e.bottomRight);
          if (n)
            return "bottomRight." + n;
        }
        if (e.topLeft != null && e.hasOwnProperty("topLeft")) {
          let n = I.dot.v4.Point.verify(e.topLeft);
          if (n)
            return "topLeft." + n;
        }
        if (e.topRight != null && e.hasOwnProperty("topRight")) {
          let n = I.dot.v4.Point.verify(e.topRight);
          if (n)
            return "topRight." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof I.dot.v4.DetectedObject)
          return e;
        let n = new I.dot.v4.DetectedObject();
        if (e.brightness != null && (n.brightness = Number(e.brightness)), e.sharpness != null && (n.sharpness = Number(e.sharpness)), e.hotspots != null && (n.hotspots = Number(e.hotspots)), e.confidence != null && (n.confidence = Number(e.confidence)), e.faceSize != null && (n.faceSize = Number(e.faceSize)), e.faceCenter != null) {
          if (typeof e.faceCenter != "object")
            throw TypeError(".dot.v4.DetectedObject.faceCenter: object expected");
          n.faceCenter = I.dot.v4.Point.fromObject(e.faceCenter);
        }
        if (e.smallestEdge != null && (n.smallestEdge = Number(e.smallestEdge)), e.bottomLeft != null) {
          if (typeof e.bottomLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomLeft: object expected");
          n.bottomLeft = I.dot.v4.Point.fromObject(e.bottomLeft);
        }
        if (e.bottomRight != null) {
          if (typeof e.bottomRight != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomRight: object expected");
          n.bottomRight = I.dot.v4.Point.fromObject(e.bottomRight);
        }
        if (e.topLeft != null) {
          if (typeof e.topLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.topLeft: object expected");
          n.topLeft = I.dot.v4.Point.fromObject(e.topLeft);
        }
        if (e.topRight != null) {
          if (typeof e.topRight != "object")
            throw TypeError(".dot.v4.DetectedObject.topRight: object expected");
          n.topRight = I.dot.v4.Point.fromObject(e.topRight);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.brightness = 0, r.sharpness = 0, r.hotspots = 0, r.confidence = 0, r.faceSize = 0, r.faceCenter = null, r.smallestEdge = 0, r.bottomLeft = null, r.bottomRight = null, r.topLeft = null, r.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (r.brightness = n.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (r.sharpness = n.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (r.hotspots = n.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (r.confidence = n.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (r.faceSize = n.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (r.faceCenter = I.dot.v4.Point.toObject(e.faceCenter, n)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (r.smallestEdge = n.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (r.bottomLeft = I.dot.v4.Point.toObject(e.bottomLeft, n)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (r.bottomRight = I.dot.v4.Point.toObject(e.bottomRight, n)), e.topLeft != null && e.hasOwnProperty("topLeft") && (r.topLeft = I.dot.v4.Point.toObject(e.topLeft, n)), e.topRight != null && e.hasOwnProperty("topRight") && (r.topRight = I.dot.v4.Point.toObject(e.topRight, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DetectedObject";
      }, t;
    }(), o.Point = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), r = 0; r < n.length; ++r)
            e[n[r]] != null && (this[n[r]] = e[n[r]]);
      }
      return t.prototype.x = 0, t.prototype.y = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = le.create()), e.x != null && Object.hasOwnProperty.call(e, "x") && n.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(e.x), e.y != null && Object.hasOwnProperty.call(e, "y") && n.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(e.y), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof y || (e = y.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new I.dot.v4.Point();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.x = e.float();
              break;
            }
            case 2: {
              a.y = e.float();
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.x != null && e.hasOwnProperty("x") && typeof e.x != "number" ? "x: number expected" : e.y != null && e.hasOwnProperty("y") && typeof e.y != "number" ? "y: number expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof I.dot.v4.Point)
          return e;
        let n = new I.dot.v4.Point();
        return e.x != null && (n.x = Number(e.x)), e.y != null && (n.y = Number(e.y)), n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.x = 0, r.y = 0), e.x != null && e.hasOwnProperty("x") && (r.x = n.json && !isFinite(e.x) ? String(e.x) : e.x), e.y != null && e.hasOwnProperty("y") && (r.y = n.json && !isFinite(e.y) ? String(e.y) : e.y), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Point";
      }, t;
    }(), o.FaceContent = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), r = 0; r < n.length; ++r)
            e[n[r]] != null && (this[n[r]] = e[n[r]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = le.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && I.dot.Image.encode(e.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && I.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof y || (e = y.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new I.dot.v4.FaceContent();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.image = I.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.metadata = I.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let n = I.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = I.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof I.dot.v4.FaceContent)
          return e;
        let n = new I.dot.v4.FaceContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.FaceContent.image: object expected");
          n.image = I.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.FaceContent.metadata: object expected");
          n.metadata = I.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.image = null, r.metadata = null), e.image != null && e.hasOwnProperty("image") && (r.image = I.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = I.dot.v4.Metadata.toObject(e.metadata, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.FaceContent";
      }, t;
    }(), o.DocumentContent = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), r = 0; r < n.length; ++r)
            e[n[r]] != null && (this[n[r]] = e[n[r]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = le.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && I.dot.Image.encode(e.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && I.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof y || (e = y.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new I.dot.v4.DocumentContent();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.image = I.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.metadata = I.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let n = I.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = I.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof I.dot.v4.DocumentContent)
          return e;
        let n = new I.dot.v4.DocumentContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.DocumentContent.image: object expected");
          n.image = I.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.DocumentContent.metadata: object expected");
          n.metadata = I.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.image = null, r.metadata = null), e.image != null && e.hasOwnProperty("image") && (r.image = I.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = I.dot.v4.Metadata.toObject(e.metadata, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DocumentContent";
      }, t;
    }(), o.Blob = function() {
      function t(n) {
        if (n)
          for (let r = Object.keys(n), a = 0; a < r.length; ++a)
            n[r[a]] != null && (this[r[a]] = n[r[a]]);
      }
      t.prototype.documentContent = null, t.prototype.eyeGazeLivenessContent = null, t.prototype.faceContent = null, t.prototype.magnifeyeLivenessContent = null, t.prototype.smileLivenessContent = null;
      let e;
      return Object.defineProperty(t.prototype, "blob", {
        get: h.oneOfGetter(e = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent"]),
        set: h.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, r) {
        return r || (r = le.create()), n.documentContent != null && Object.hasOwnProperty.call(n, "documentContent") && I.dot.v4.DocumentContent.encode(n.documentContent, r.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.faceContent != null && Object.hasOwnProperty.call(n, "faceContent") && I.dot.v4.FaceContent.encode(n.faceContent, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(n, "magnifeyeLivenessContent") && I.dot.v4.MagnifEyeLivenessContent.encode(n.magnifeyeLivenessContent, r.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.smileLivenessContent != null && Object.hasOwnProperty.call(n, "smileLivenessContent") && I.dot.v4.SmileLivenessContent.encode(n.smileLivenessContent, r.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), n.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(n, "eyeGazeLivenessContent") && I.dot.v4.EyeGazeLivenessContent.encode(n.eyeGazeLivenessContent, r.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), r;
      }, t.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, t.decode = function(n, r) {
        n instanceof y || (n = y.create(n));
        let a = r === void 0 ? n.len : n.pos + r, s = new I.dot.v4.Blob();
        for (; n.pos < a; ) {
          let g = n.uint32();
          switch (g >>> 3) {
            case 1: {
              s.documentContent = I.dot.v4.DocumentContent.decode(n, n.uint32());
              break;
            }
            case 5: {
              s.eyeGazeLivenessContent = I.dot.v4.EyeGazeLivenessContent.decode(n, n.uint32());
              break;
            }
            case 2: {
              s.faceContent = I.dot.v4.FaceContent.decode(n, n.uint32());
              break;
            }
            case 3: {
              s.magnifeyeLivenessContent = I.dot.v4.MagnifEyeLivenessContent.decode(n, n.uint32());
              break;
            }
            case 4: {
              s.smileLivenessContent = I.dot.v4.SmileLivenessContent.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(g & 7);
              break;
          }
        }
        return s;
      }, t.decodeDelimited = function(n) {
        return n instanceof y || (n = new y(n)), this.decode(n, n.uint32());
      }, t.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        let r = {};
        if (n.documentContent != null && n.hasOwnProperty("documentContent")) {
          r.blob = 1;
          {
            let a = I.dot.v4.DocumentContent.verify(n.documentContent);
            if (a)
              return "documentContent." + a;
          }
        }
        if (n.eyeGazeLivenessContent != null && n.hasOwnProperty("eyeGazeLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let a = I.dot.v4.EyeGazeLivenessContent.verify(n.eyeGazeLivenessContent);
            if (a)
              return "eyeGazeLivenessContent." + a;
          }
        }
        if (n.faceContent != null && n.hasOwnProperty("faceContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let a = I.dot.v4.FaceContent.verify(n.faceContent);
            if (a)
              return "faceContent." + a;
          }
        }
        if (n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let a = I.dot.v4.MagnifEyeLivenessContent.verify(n.magnifeyeLivenessContent);
            if (a)
              return "magnifeyeLivenessContent." + a;
          }
        }
        if (n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let a = I.dot.v4.SmileLivenessContent.verify(n.smileLivenessContent);
            if (a)
              return "smileLivenessContent." + a;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof I.dot.v4.Blob)
          return n;
        let r = new I.dot.v4.Blob();
        if (n.documentContent != null) {
          if (typeof n.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          r.documentContent = I.dot.v4.DocumentContent.fromObject(n.documentContent);
        }
        if (n.eyeGazeLivenessContent != null) {
          if (typeof n.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          r.eyeGazeLivenessContent = I.dot.v4.EyeGazeLivenessContent.fromObject(n.eyeGazeLivenessContent);
        }
        if (n.faceContent != null) {
          if (typeof n.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          r.faceContent = I.dot.v4.FaceContent.fromObject(n.faceContent);
        }
        if (n.magnifeyeLivenessContent != null) {
          if (typeof n.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          r.magnifeyeLivenessContent = I.dot.v4.MagnifEyeLivenessContent.fromObject(n.magnifeyeLivenessContent);
        }
        if (n.smileLivenessContent != null) {
          if (typeof n.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          r.smileLivenessContent = I.dot.v4.SmileLivenessContent.fromObject(n.smileLivenessContent);
        }
        return r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let a = {};
        return n.documentContent != null && n.hasOwnProperty("documentContent") && (a.documentContent = I.dot.v4.DocumentContent.toObject(n.documentContent, r), r.oneofs && (a.blob = "documentContent")), n.faceContent != null && n.hasOwnProperty("faceContent") && (a.faceContent = I.dot.v4.FaceContent.toObject(n.faceContent, r), r.oneofs && (a.blob = "faceContent")), n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent") && (a.magnifeyeLivenessContent = I.dot.v4.MagnifEyeLivenessContent.toObject(n.magnifeyeLivenessContent, r), r.oneofs && (a.blob = "magnifeyeLivenessContent")), n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent") && (a.smileLivenessContent = I.dot.v4.SmileLivenessContent.toObject(n.smileLivenessContent, r), r.oneofs && (a.blob = "smileLivenessContent")), n.eyeGazeLivenessContent != null && n.hasOwnProperty("eyeGazeLivenessContent") && (a.eyeGazeLivenessContent = I.dot.v4.EyeGazeLivenessContent.toObject(n.eyeGazeLivenessContent, r), r.oneofs && (a.blob = "eyeGazeLivenessContent")), a;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.Blob";
      }, t;
    }(), o.EyeGazeLivenessContent = function() {
      function t(e) {
        if (this.segments = [], e)
          for (let n = Object.keys(e), r = 0; r < n.length; ++r)
            e[n[r]] != null && (this[n[r]] = e[n[r]]);
      }
      return t.prototype.segments = h.emptyArray, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = le.create()), e.segments != null && e.segments.length)
          for (let r = 0; r < e.segments.length; ++r)
            I.dot.v4.EyeGazeLivenessSegment.encode(e.segments[r], n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && I.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof y || (e = y.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new I.dot.v4.EyeGazeLivenessContent();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.segments && a.segments.length || (a.segments = []), a.segments.push(I.dot.v4.EyeGazeLivenessSegment.decode(e, e.uint32()));
              break;
            }
            case 2: {
              a.metadata = I.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.segments != null && e.hasOwnProperty("segments")) {
          if (!Array.isArray(e.segments))
            return "segments: array expected";
          for (let n = 0; n < e.segments.length; ++n) {
            let r = I.dot.v4.EyeGazeLivenessSegment.verify(e.segments[n]);
            if (r)
              return "segments." + r;
          }
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = I.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof I.dot.v4.EyeGazeLivenessContent)
          return e;
        let n = new I.dot.v4.EyeGazeLivenessContent();
        if (e.segments) {
          if (!Array.isArray(e.segments))
            throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: array expected");
          n.segments = [];
          for (let r = 0; r < e.segments.length; ++r) {
            if (typeof e.segments[r] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            n.segments[r] = I.dot.v4.EyeGazeLivenessSegment.fromObject(e.segments[r]);
          }
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.metadata: object expected");
          n.metadata = I.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.segments = []), n.defaults && (r.metadata = null), e.segments && e.segments.length) {
          r.segments = [];
          for (let a = 0; a < e.segments.length; ++a)
            r.segments[a] = I.dot.v4.EyeGazeLivenessSegment.toObject(e.segments[a], n);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = I.dot.v4.Metadata.toObject(e.metadata, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.EyeGazeLivenessContent";
      }, t;
    }(), o.EyeGazeLivenessSegment = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), r = 0; r < n.length; ++r)
            e[n[r]] != null && (this[n[r]] = e[n[r]]);
      }
      return t.prototype.corner = 0, t.prototype.image = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = le.create()), e.corner != null && Object.hasOwnProperty.call(e, "corner") && n.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && I.dot.Image.encode(e.image, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof y || (e = y.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new I.dot.v4.EyeGazeLivenessSegment();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.corner = e.int32();
              break;
            }
            case 2: {
              a.image = I.dot.Image.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.corner != null && e.hasOwnProperty("corner"))
          switch (e.corner) {
            default:
              return "corner: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
              break;
          }
        if (e.image != null && e.hasOwnProperty("image")) {
          let n = I.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof I.dot.v4.EyeGazeLivenessSegment)
          return e;
        let n = new I.dot.v4.EyeGazeLivenessSegment();
        switch (e.corner) {
          default:
            if (typeof e.corner == "number") {
              n.corner = e.corner;
              break;
            }
            break;
          case "TOP_LEFT":
          case 0:
            n.corner = 0;
            break;
          case "TOP_RIGHT":
          case 1:
            n.corner = 1;
            break;
          case "BOTTOM_RIGHT":
          case 2:
            n.corner = 2;
            break;
          case "BOTTOM_LEFT":
          case 3:
            n.corner = 3;
            break;
        }
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessSegment.image: object expected");
          n.image = I.dot.Image.fromObject(e.image);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.corner = n.enums === String ? "TOP_LEFT" : 0, r.image = null), e.corner != null && e.hasOwnProperty("corner") && (r.corner = n.enums === String ? I.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : I.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (r.image = I.dot.Image.toObject(e.image, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.EyeGazeLivenessSegment";
      }, t;
    }(), o.EyeGazeLivenessCorner = function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "TOP_LEFT"] = 0, e[t[1] = "TOP_RIGHT"] = 1, e[t[2] = "BOTTOM_RIGHT"] = 2, e[t[3] = "BOTTOM_LEFT"] = 3, e;
    }(), o.SmileLivenessContent = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), r = 0; r < n.length; ++r)
            e[n[r]] != null && (this[n[r]] = e[n[r]]);
      }
      return t.prototype.neutralExpressionFaceImage = null, t.prototype.smileExpressionFaceImage = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = le.create()), e.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(e, "neutralExpressionFaceImage") && I.dot.Image.encode(e.neutralExpressionFaceImage, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.smileExpressionFaceImage != null && Object.hasOwnProperty.call(e, "smileExpressionFaceImage") && I.dot.Image.encode(e.smileExpressionFaceImage, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && I.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof y || (e = y.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new I.dot.v4.SmileLivenessContent();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.neutralExpressionFaceImage = I.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.smileExpressionFaceImage = I.dot.Image.decode(e, e.uint32());
              break;
            }
            case 3: {
              a.metadata = I.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage")) {
          let n = I.dot.Image.verify(e.neutralExpressionFaceImage);
          if (n)
            return "neutralExpressionFaceImage." + n;
        }
        if (e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage")) {
          let n = I.dot.Image.verify(e.smileExpressionFaceImage);
          if (n)
            return "smileExpressionFaceImage." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = I.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof I.dot.v4.SmileLivenessContent)
          return e;
        let n = new I.dot.v4.SmileLivenessContent();
        if (e.neutralExpressionFaceImage != null) {
          if (typeof e.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          n.neutralExpressionFaceImage = I.dot.Image.fromObject(e.neutralExpressionFaceImage);
        }
        if (e.smileExpressionFaceImage != null) {
          if (typeof e.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.smileExpressionFaceImage: object expected");
          n.smileExpressionFaceImage = I.dot.Image.fromObject(e.smileExpressionFaceImage);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.metadata: object expected");
          n.metadata = I.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.neutralExpressionFaceImage = null, r.smileExpressionFaceImage = null, r.metadata = null), e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage") && (r.neutralExpressionFaceImage = I.dot.Image.toObject(e.neutralExpressionFaceImage, n)), e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage") && (r.smileExpressionFaceImage = I.dot.Image.toObject(e.smileExpressionFaceImage, n)), e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = I.dot.v4.Metadata.toObject(e.metadata, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.SmileLivenessContent";
      }, t;
    }(), o;
  }(), i.Image = function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), n = 0; n < e.length; ++n)
          t[e[n]] != null && (this[e[n]] = t[e[n]]);
    }
    return o.prototype.bytes = h.newBuffer([]), o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = le.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e) {
      t instanceof y || (t = y.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new I.dot.Image();
      for (; t.pos < n; ) {
        let a = t.uint32();
        switch (a >>> 3) {
          case 1: {
            r.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(a & 7);
            break;
        }
      }
      return r;
    }, o.decodeDelimited = function(t) {
      return t instanceof y || (t = new y(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || h.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof I.dot.Image)
        return t;
      let e = new I.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? h.base64.decode(t.bytes, e.bytes = h.newBuffer(h.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      return e.defaults && (e.bytes === String ? n.bytes = "" : (n.bytes = [], e.bytes !== Array && (n.bytes = h.newBuffer(n.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (n.bytes = e.bytes === String ? h.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), n;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, ne.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Image";
    }, o;
  }(), i.Int32List = function() {
    function o(t) {
      if (this.items = [], t)
        for (let e = Object.keys(t), n = 0; n < e.length; ++n)
          t[e[n]] != null && (this[e[n]] = t[e[n]]);
    }
    return o.prototype.items = h.emptyArray, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      if (e || (e = le.create()), t.items != null && t.items.length) {
        e.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork();
        for (let n = 0; n < t.items.length; ++n)
          e.int32(t.items[n]);
        e.ldelim();
      }
      return e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e) {
      t instanceof y || (t = y.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new I.dot.Int32List();
      for (; t.pos < n; ) {
        let a = t.uint32();
        switch (a >>> 3) {
          case 1: {
            if (r.items && r.items.length || (r.items = []), (a & 7) === 2) {
              let s = t.uint32() + t.pos;
              for (; t.pos < s; )
                r.items.push(t.int32());
            } else
              r.items.push(t.int32());
            break;
          }
          default:
            t.skipType(a & 7);
            break;
        }
      }
      return r;
    }, o.decodeDelimited = function(t) {
      return t instanceof y || (t = new y(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      if (typeof t != "object" || t === null)
        return "object expected";
      if (t.items != null && t.hasOwnProperty("items")) {
        if (!Array.isArray(t.items))
          return "items: array expected";
        for (let e = 0; e < t.items.length; ++e)
          if (!h.isInteger(t.items[e]))
            return "items: integer[] expected";
      }
      return null;
    }, o.fromObject = function(t) {
      if (t instanceof I.dot.Int32List)
        return t;
      let e = new I.dot.Int32List();
      if (t.items) {
        if (!Array.isArray(t.items))
          throw TypeError(".dot.Int32List.items: array expected");
        e.items = [];
        for (let n = 0; n < t.items.length; ++n)
          e.items[n] = t.items[n] | 0;
      }
      return e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      if ((e.arrays || e.defaults) && (n.items = []), t.items && t.items.length) {
        n.items = [];
        for (let r = 0; r < t.items.length; ++r)
          n.items[r] = t.items[r];
      }
      return n;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, ne.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Int32List";
    }, o;
  }(), i.Platform = function() {
    const o = {}, t = Object.create(o);
    return t[o[0] = "WEB"] = 0, t[o[1] = "ANDROID"] = 1, t[o[2] = "IOS"] = 2, t;
  }(), i.DigestWithTimestamp = function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), n = 0; n < e.length; ++n)
          t[e[n]] != null && (this[e[n]] = t[e[n]]);
    }
    return o.prototype.digest = h.newBuffer([]), o.prototype.timestampMillis = h.Long ? h.Long.fromBits(0, 0, !0) : 0, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = le.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.digest), t.timestampMillis != null && Object.hasOwnProperty.call(t, "timestampMillis") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).uint64(t.timestampMillis), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e) {
      t instanceof y || (t = y.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new I.dot.DigestWithTimestamp();
      for (; t.pos < n; ) {
        let a = t.uint32();
        switch (a >>> 3) {
          case 1: {
            r.digest = t.bytes();
            break;
          }
          case 2: {
            r.timestampMillis = t.uint64();
            break;
          }
          default:
            t.skipType(a & 7);
            break;
        }
      }
      return r;
    }, o.decodeDelimited = function(t) {
      return t instanceof y || (t = new y(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || h.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !h.isInteger(t.timestampMillis) && !(t.timestampMillis && h.isInteger(t.timestampMillis.low) && h.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof I.dot.DigestWithTimestamp)
        return t;
      let e = new I.dot.DigestWithTimestamp();
      return t.digest != null && (typeof t.digest == "string" ? h.base64.decode(t.digest, e.digest = h.newBuffer(h.base64.length(t.digest)), 0) : t.digest.length >= 0 && (e.digest = t.digest)), t.timestampMillis != null && (h.Long ? (e.timestampMillis = h.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new h.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      if (e.defaults)
        if (e.bytes === String ? n.digest = "" : (n.digest = [], e.bytes !== Array && (n.digest = h.newBuffer(n.digest))), h.Long) {
          let r = new h.Long(0, 0, !0);
          n.timestampMillis = e.longs === String ? r.toString() : e.longs === Number ? r.toNumber() : r;
        } else
          n.timestampMillis = e.longs === String ? "0" : 0;
      return t.digest != null && t.hasOwnProperty("digest") && (n.digest = e.bytes === String ? h.base64.encode(t.digest, 0, t.digest.length) : e.bytes === Array ? Array.prototype.slice.call(t.digest) : t.digest), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? n.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : n.timestampMillis = e.longs === String ? h.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new h.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), n;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, ne.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, o;
  }(), i;
})();
async function Cd(i) {
  const { Image: o } = Sn, t = await i.arrayBuffer(), e = new Uint8Array(t), n = {};
  n.bytes = e;
  const r = o.verify(n);
  if (r) throw Error(r);
  const a = {};
  return a.bytes = e, o.create(a);
}
async function fd(i) {
  const { v4: { Metadata: o } } = Sn, t = { ...i };
  t.platform = Sn.Platform.WEB;
  const e = t, n = o.verify(e);
  if (n) throw Error(n);
  return o.create(e);
}
async function hd(i) {
  const { Content: o } = Sn, { iv: t, key: e, message: n } = await pI(i), r = { token: new Uint8Array(e), iv: t, schemaVersion: _x, bytes: new Uint8Array(n) }, a = o.verify(r);
  if (a) throw Error(a);
  const s = o.create(r);
  return o.encode(s).finish();
}
function pd({ documentContent: i, faceContent: o, magnifeyeLivenessContent: t, smileLivenessContent: e }) {
  const { Blob: n } = Sn.v4, r = {};
  r.documentContent = i, r.faceContent = o, r.magnifeyeLivenessContent = t, r.smileLivenessContent = e;
  const a = r, s = n.verify(a);
  if (s) throw Error(s);
  const g = n.create(a);
  return n.encode(g).finish();
}
async function md(i, o) {
  const { FaceContent: t } = Sn.v4, e = await Cd(i), n = await fd(o), r = {};
  r.image = e, r.metadata = n;
  const a = r, s = t.verify(a);
  if (s) throw Error(s);
  const g = t.create(a), x = {};
  return x.faceContent = g, pd(x);
}
async function Ad(i, o) {
  const t = await md(i, o);
  return hd(t);
}
const bd = ({ onPhotoTakenInternal: i }) => {
  const { appTier: o, isLicenseValidated: t } = oa(), { analytics: e } = Ox(), { appState: n, freemiumOverlayState: r } = Ci(), { faceCameraOptions: a } = sg(), { cameraFacing: s, onPhotoTaken: g, sessionToken: x, thresholds: C, wasmDirectoryPath: d } = a, { controller: m } = QI(C, d), p = mn(
    ({ content: G, controller: J, imageData: ue, webMetadata: U }) => {
      vu(ig.FACE, J.getCandidateSelectionImages()), i == null || i({ cameraProperties: U }), g(ue, G);
    },
    [i, g]
  ), { cameraResolution: w, cameraService: H, detectionDetails: E, videoRef: S } = nI({
    analytics: e,
    cameraFacing: s,
    controller: m,
    sessionToken: x,
    createProtoMessage: Ad,
    onPhotoTaken: p
  }), { shouldMirror: W } = Du(lt.CONTROL, H);
  wu(lt.CAMERA_PROPS_CHANGED, {
    cameraResolution: w,
    shouldMirror: W
  }), be(() => () => {
    Qn.getInstance().restart();
  }, []);
  const N = r !== ro.HIDDEN && o !== vr.PREMIUM && w, $ = r === ro.VISIBLE, M = t, Y = w && t && n === Ye.RUNNING;
  return /* @__PURE__ */ Z(ot, { children: [
    N && /* @__PURE__ */ Z(xI, { fullOverlay: $, resolution: w }),
    /* @__PURE__ */ Z(vx, { ref: S, $isImageMirror: W, $isVisible: M, autoPlay: !0, muted: !0, playsInline: !0 }),
    Y && /* @__PURE__ */ Z(
      aI,
      {
        appTier: o,
        cameraResolution: w,
        detectionDetails: E,
        isImageMirror: W
      }
    )
  ] });
}, yd = ({
  onPhotoTakenInternal: i,
  ...o
}) => /* @__PURE__ */ Z(au, { cameraOptions: o, children: /* @__PURE__ */ Z(bd, { onPhotoTakenInternal: i }) });
function vd({ initAppState: i }) {
  const [o, t] = Fe(i), [e, n] = Fe(), [r, a] = Fe(!1), s = {};
  return s.appState = o, s.setAppState = t, s.error = e, s.setError = n, s.isCameraReady = r, s.setIsCameraReady = a, s;
}
function wd() {
  const [i] = window.crypto.getRandomValues(new Uint32Array(1));
  return i.toString(-3847 * 2 + 2213 + -239 * -23);
}
function Sd() {
  const i = sessionStorage.getItem("dot-user-id");
  if (i) return i;
  const o = wd();
  return sessionStorage.setItem("dot-user-id", o), o;
}
function Bd(i, o) {
  return o ? o === "user" ? "Front Camera" : "Back Camera" : i;
}
function Gd(i) {
  return i > -1066 * 2 + -9298 + -383 * -30 ? ">1m" : i > 3 * 1289 + 8881 + 12703 * -1 ? ">45" : i > 1131 + -1 * -4453 + -5554 ? ">30" : "" + i;
}
const Zd = (i) => Math.round(i / 500) * 500 / (-1 * -8115 + 1039 * 6 + -13349), $s = (i) => i ? i <= 4566 + -2 * 976 + -2613 ? Math.round(i * (-11 * -899 + -7266 + -1 * 2603)) / (-1841 + -994 * -4 + -2115 * 1) : Math.round(i / (-11 * -581 + -205 * -1 + -6546)) * (-1353 * 4 + -13 * -43 + 1 * 4903) : 0, Hd = (i) => Math.round(i * (-7948 + -41 * 133 + -1031 * -13)) / (-1 * 7953 + -192 * 48 + 7 * 2453);
function Wd(i) {
  return i !== Ye.RUNNING ? ro.VISIBLE : ro.VISIBLE_WITH_MASK;
}
function kd({ onError: i }) {
  const { appState: o, error: t, isCameraReady: e, setAppState: n, setError: r, setIsCameraReady: a } = vd({
    initAppState: Ye.LOADING
  }), s = Wd(o), g = mn(
    (C) => {
      Ks(lt.STATE_CHANGED, { appState: Ye.ERROR, error: C }), a(!1), i(C), r(C), n(Ye.ERROR);
    },
    [i, a, r, n]
  ), x = mn(
    (C) => {
      Ks(lt.STATE_CHANGED, { appState: C }), n(C);
    },
    [n]
  );
  return {
    appState: o,
    freemiumOverlayState: s,
    isCameraReady: e,
    setIsCameraReady: a,
    handleAppStateChange: x,
    handleError: g,
    error: t
  };
}
var Jg = ((i) => (i.AUTO_CAPTURE = "auto-capture", i))(Jg || {});
class Kd {
  constructor() {
    j(this, "appKey", "");
    j(this, "deviceId", "");
  }
  async countlyFetch(o) {
    if (!this.appKey || !this.deviceId) return;
    const t = {};
    t.Accept = "application/json";
    const e = {};
    e.method = "GET", e.headers = t;
    const n = e, r = "https://innovatrics.count.ly/i?", a = {};
    a.app_key = this.appKey, a.device_id = this.deviceId;
    const s = Vi(a);
    await fetch("" + r + s + "&" + o, n);
  }
  async init(o, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = o;
    const e = { _app_version: Ig() }, n = { organization: dg(window.location.href) }, r = Vi({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(n) });
    await this.countlyFetch(r);
  }
  async endSession() {
    const o = {};
    o.end_session = "1";
    const t = Vi(o);
    await this.countlyFetch(t);
  }
  async sendAutoCaptureEvent(o, t) {
    const e = {};
    e.key = Jg.AUTO_CAPTURE, e.count = 1, e.dur = t, e.segmentation = o;
    const n = [e], r = Vi({ events: JSON.stringify(n) });
    await this.countlyFetch(r);
  }
}
const Ri = new Kd();
class Od {
  constructor() {
    j(this, "countly", Ri);
  }
  createSegmentation(o) {
    return { appVersion: Ig(), ...o };
  }
  init(o) {
    if (Eu()) return;
    const t = Sd();
    Ri.init(t, o);
  }
  endSession() {
    Ri.endSession();
  }
  sendLicenseResultData(o, t) {
    const e = {};
    e.licenseTier = o, e.customer = t;
    const n = this.createSegmentation(e);
    Ri.sendAutoCaptureEvent(n);
  }
}
class Vd extends Od {
  trackCaptureProcess({ averageFps: o, captureProcessDurationInMs: t, detection: e, deviceName: n, facingMode: r, imageResolution: a, instructionSet: s }) {
    if (!e) return;
    const g = Zd(t), x = this.createSegmentation({ faceSize: $s(e.faceSize), confidence: $s(e.confidence), camera: Bd(n, r), imageResolution: a.width + "x" + a.height, averageFps: Hd(o), captureTime: Gd(g), instructionSet: s });
    this.countly.sendAutoCaptureEvent(x, g);
  }
}
const Td = new Vd();
let z;
const pt = new Array(706 * -4 + 2232 + 240 * 3).fill(void 0);
pt.push(void 0, null, !0, !1);
function Rr(i) {
  return pt[i];
}
let bt = -818 * -1 + 1 * -5097 + 389 * 11, Dn = null;
function $i() {
  return (Dn === null || Dn.byteLength === -750 + -750 * -1) && (Dn = new Uint8Array(z.memory.buffer)), Dn;
}
const _i = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, Ed = typeof _i.encodeInto == "function" ? function(i, o) {
  return _i.encodeInto(i, o);
} : function(i, o) {
  const t = _i.encode(i);
  o.set(t);
  const e = {};
  return e.read = i.length, e.written = t.length, e;
};
function xo(i, o, t) {
  if (t === void 0) {
    const s = _i.encode(i), g = o(s.length, -127 * 19 + 251 * -20 + 177 * 42) >>> -5593 + -7 * -799;
    return $i().subarray(g, g + s.length).set(s), bt = s.length, g;
  }
  let e = i.length, n = o(e, 6529 + 3 * -102 + -6222) >>> -857 * 7 + 47 * 13 + 5388;
  const r = $i();
  let a = -322 * 26 + -67 * -111 + 935;
  for (; a < e; a++) {
    const s = i.charCodeAt(a);
    if (s > -367 * -12 + 217 * 21 + -8834 * 1) break;
    r[n + a] = s;
  }
  if (a !== e) {
    a !== 0 && (i = i.slice(a)), n = t(n, e, e = a + i.length * 3, -892 * 7 + -1 * 6041 + 1 * 12286) >>> -5103 + 1518 * 3 + 183 * 3;
    const s = $i().subarray(n + a, n + e), g = Ed(i, s);
    a += g.written;
  }
  return bt = a, n;
}
function Ug(i) {
  return i == null;
}
let Yn = null;
function Gt() {
  return (Yn === null || Yn.byteLength === -327 + -109 * -3) && (Yn = new Int32Array(z.memory.buffer)), Yn;
}
let Un = pt.length;
function Rd(i) {
  i < 3 * -2687 + -9905 + 2 * 9049 || (pt[i] = Un, Un = i);
}
function zg(i) {
  const o = Rr(i);
  return Rd(i), o;
}
const Pr = {};
Pr.ignoreBOM = !0, Pr.fatal = !0;
const Qg = typeof TextDecoder < "u" ? new TextDecoder("utf-8", Pr) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && Qg.decode();
function Nr(i, o) {
  return i = i >>> -4646 + -101 * -46, Qg.decode($i().subarray(i, i + o));
}
function Lr(i) {
  Un === pt.length && pt.push(pt.length + (2 * 2417 + 8417 * 1 + -13250));
  const o = Un;
  return Un = pt[o], pt[o] = i, o;
}
let Fn = null;
function $g() {
  return (Fn === null || Fn.byteLength === -6765 + 2255 * 3) && (Fn = new Uint32Array(z.memory.buffer)), Fn;
}
function _s(i, o) {
  const t = o(i.length * 4, 4) >>> 0, e = $g();
  for (let n = 5209 + -5209 * 1; n < i.length; n++)
    e[t / (426 + 5 * 1527 + -8057) + n] = Lr(i[n]);
  return bt = i.length, t;
}
function qs(i, o) {
  i = i >>> -6856 + 1 * -8731 + 143 * 109;
  const t = $g(), e = t.subarray(i / (-2 * 4900 + 659 * 2 + -2 * -4243), i / (14 * -175 + 1981 + 473) + o), n = [];
  for (let r = 0; r < e.length; r++)
    n.push(zg(e[r]));
  return n;
}
function Pd(i, o) {
  const t = xo(i, z.__wbindgen_malloc, z.__wbindgen_realloc), e = bt, n = xo(o, z.__wbindgen_malloc, z.__wbindgen_realloc), r = bt, a = z.validate_license(t, e, n, r);
  return Ca.__wrap(a);
}
class Ca {
  static __wrap(o) {
    o = o >>> 21 * 367 + -1733 + -5974;
    const t = Object.create(Ca.prototype);
    return t.__wbg_ptr = o, t;
  }
  __destroy_into_raw() {
    const o = this.__wbg_ptr;
    return this.__wbg_ptr = -393 * -1 + 4 * -2281 + 8731, o;
  }
  free() {
    const o = this.__destroy_into_raw();
    z.__wbg_licensevalidationresult_free(o);
  }
  constructor(o, t, e, n) {
    var r = Ug(t) ? 0 : xo(t, z.__wbindgen_malloc, z.__wbindgen_realloc), a = bt;
    const s = _s(e, z.__wbindgen_malloc), g = bt, x = _s(n, z.__wbindgen_malloc), C = bt, d = z.licensevalidationresult_new(o, r, a, s, g, x, C);
    return this.__wbg_ptr = d >>> -1158 * 5 + 9521 + 7 * -533, this;
  }
  get is_valid() {
    return z.licensevalidationresult_is_valid(this.__wbg_ptr) !== -2656 * 1 + -530 * 1 + 1593 * 2;
  }
  get features_json() {
    try {
      const e = z.__wbindgen_add_to_stack_pointer(-16);
      z.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var o = Gt()[e / (7261 + 2419 * -3) + (479 + -3659 * 1 + 3180)], t = Gt()[e / (47 + -1 * 9437 + 14 * 671) + (-1 * -3123 + 37 * -109 + 911)];
      let n;
      return o !== 2 * -2819 + -1 * -9304 + 78 * -47 && (n = Nr(o, t).slice(), z.__wbindgen_free(o, t * (2 * 1809 + 131 * 53 + 120 * -88), 1)), n;
    } finally {
      z.__wbindgen_add_to_stack_pointer(-701 * -1 + 482 + -389 * 3);
    }
  }
  get errors() {
    try {
      const n = z.__wbindgen_add_to_stack_pointer(-16);
      z.licensevalidationresult_errors(n, this.__wbg_ptr);
      var o = Gt()[n / (283 * 21 + 125 + 379 * -16) + (5171 + -1412 * 2 + -2347)], t = Gt()[n / (7599 + -1 * 4890 + -2705 * 1) + (-8 * -1193 + 100 * -48 + -4743)], e = qs(o, t).slice();
      return z.__wbindgen_free(o, t * (12634 + 4210 * -3), 33 * 212 + -5 * 82 + 2194 * -3), e;
    } finally {
      z.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get warnings() {
    try {
      const n = z.__wbindgen_add_to_stack_pointer(-16);
      z.licensevalidationresult_warnings(n, this.__wbg_ptr);
      var o = Gt()[n / (107 * 23 + -3529 + -268 * -4) + (194 * 26 + 2517 + -7561 * 1)], t = Gt()[n / (-4383 + 107 * 41) + 1], e = qs(o, t).slice();
      return z.__wbindgen_free(o, t * (3 * -1423 + -1 * -2221 + 2052), 4), e;
    } finally {
      z.__wbindgen_add_to_stack_pointer(-9584 + 1 * 7204 + 1 * 2396);
    }
  }
}
async function Nd(i, o) {
  if (typeof Response == "function" && i instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(i, o);
    } catch (e) {
      if (i.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
      else throw e;
    }
    const t = await i.arrayBuffer();
    return await WebAssembly.instantiate(t, o);
  } else {
    const t = await WebAssembly.instantiate(i, o);
    if (t instanceof WebAssembly.Instance) {
      const e = {};
      return e.instance = t, e.module = i, e;
    } else return t;
  }
}
function Ld() {
  const i = {};
  return i.wbg = {}, i.wbg.__wbindgen_string_get = function(o, t) {
    const e = Rr(t), n = typeof e == "string" ? e : void 0;
    var r = Ug(n) ? 604 * 3 + -3342 + 170 * 9 : xo(n, z.__wbindgen_malloc, z.__wbindgen_realloc), a = bt;
    Gt()[o / (-107 * 25 + 1604 + 1075) + (17 * -26 + -5671 * -1 + -5228)] = a, Gt()[o / (-1 * -6661 + 1 * -6829 + 172) + (33 * -106 + 7991 + -4493)] = r;
  }, i.wbg.__wbindgen_object_drop_ref = function(o) {
    zg(o);
  }, i.wbg.__wbindgen_string_new = function(o, t) {
    const e = Nr(o, t);
    return Lr(e);
  }, i.wbg.__wbg_new0_c0e40662db0749ee = function() {
    return Lr(/* @__PURE__ */ new Date());
  }, i.wbg.__wbg_getTime_af7ca51c0bcefa08 = function(o) {
    return Rr(o).getTime();
  }, i.wbg.__wbindgen_throw = function(o, t) {
    throw new Error(Nr(o, t));
  }, i;
}
function Dd(i, o) {
  return z = i.exports, _g.__wbindgen_wasm_module = o, Yn = null, Fn = null, Dn = null, z;
}
async function _g(i) {
  if (z !== void 0) return z;
  typeof i > "u" && (i = new URL("dot_embedded_bg.wasm", import.meta.url));
  const o = Ld();
  (typeof i == "string" || typeof Request == "function" && i instanceof Request || typeof URL == "function" && i instanceof URL) && (i = fetch(i));
  const { instance: t, module: e } = await Nd(await i, o);
  return Dd(t, e);
}
class Yd {
  constructor() {
    j(this, "wasmInitialized", !1);
  }
  async init(o = "/wasm") {
    try {
      const t = o + "/" + ou;
      await _g(t), this.wasmInitialized = !0;
    } catch {
      this.wasmInitialized = !1, console.warn("dot_embedded_bg.wasm initialization failed! Please check documentation for more information.");
    }
  }
  isWasmInitialized() {
    return this.wasmInitialized;
  }
}
class nr extends Error {
  constructor() {
    super(...arguments);
    j(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
var fn;
class e0 {
  constructor(o) {
    ce(this, fn);
    this.licenseResult = o;
    try {
      se(this, fn, o.features_json && JSON.parse(o.features_json));
    } catch (t) {
      console.info(t);
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
    return F(this, fn);
  }
  get isAnalyticsDisabled() {
    var o, t;
    return !!((t = (o = F(this, fn)) == null ? void 0 : o.features) != null && t["realTimeTransactionReportingDisabled"]);
  }
}
fn = new WeakMap();
class Fd {
  constructor(o) {
    j(this, "license");
    j(this, "licenseResult");
    this.dotEmbedded = o;
  }
  async init(o = "/wasm", t = "/license.lic") {
    await Promise.allSettled([this.dotEmbedded.init(o), this.loadLicense(t)]), this.validateLicense();
  }
  async fetchLicense(o) {
    try {
      const t = await fetch(o);
      if (!t.ok) throw new Error("DOT License not found.");
      this.license = await t.text();
    } catch (t) {
      this.license = void (27 * 238 + 9656 + -16082), console.error(t);
    }
  }
  async loadLicense(o) {
    if (this.licenseResult = void (51 * 61 + -276 * -11 + -683 * 9), !o) {
      console.info("No DOT license provided."), this.license = void (-881 * -1 + -2 * 1509 + -1 * -2137);
      return;
    }
    await this.fetchLicense(o);
  }
  printErrors(o) {
    o.forEach((t) => console.warn(t));
  }
  printWarnings(o) {
    o.forEach((t) => console.info(t));
  }
  getDomain() {
    return window.location.hostname;
  }
  validateLicense() {
    try {
      if (!this.license) throw new nr("No DOT license found.");
      if (!this.dotEmbedded.isWasmInitialized()) throw new nr("Wasm not initialized.");
      this.licenseResult = new e0(Pd(this.license, this.getDomain())), this.printErrors(this.licenseResult.errors), this.printWarnings(this.licenseResult.warnings);
    } catch (o) {
      o instanceof nr ? o.log() : o instanceof Error && console.error(o);
      const t = {};
      t.is_valid = !1, t.errors = [], t.warnings = [], t.features_json = void 0, t.free = function() {
      }, this.licenseResult = new e0(t);
    }
  }
  getLicenseResult() {
    return this.licenseResult;
  }
  getCustomerName() {
    var o;
    if (this.license)
      try {
        const t = JSON.parse(this.license);
        return (o = t == null ? void 0 : t.contract) == null ? void 0 : o.customer;
      } catch (t) {
        t instanceof Error && re.logError(t);
        return;
      }
  }
}
const Co = class Co extends Fd {
  static getInstance() {
    if (!this._instance) {
      const o = new Yd();
      this._instance = new Co(o);
    }
    return this._instance;
  }
};
j(Co, "_instance");
let Dr = Co;
const Xd = ({ children: i }) => {
  const o = yt(null);
  return Ju(o, lt.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ Z(yx, { ref: o, children: i });
}, Md = ({ cameraOptions: i }) => i ? /* @__PURE__ */ Z(Cx, { target: i.styleTarget, children: /* @__PURE__ */ Z(
  Ex,
  {
    licensePath: i.licensePath,
    licenseValidator: Dr.getInstance(),
    wasmDirectoryPath: i.wasmDirectoryPath,
    children: /* @__PURE__ */ Z(Nx, { analytics: Td, appKey: "5f83e83ee4cee1ab6e5bbf86e215644473299675", children: /* @__PURE__ */ Z(
      Zx,
      {
        value: kd({
          onError: i.onError
        }),
        children: /* @__PURE__ */ Z(ng, { children: /* @__PURE__ */ Z(Xd, { children: /* @__PURE__ */ Z(yd, { ...i }) }) })
      }
    ) })
  }
) }) : null;
Bc(Md, "x-dot-face-auto-capture", ["cameraOptions"]);
