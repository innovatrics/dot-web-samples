var Oc = Object.defineProperty;
var Qa = (i) => {
  throw TypeError(i);
};
var Vc = (i, o, t) => o in i ? Oc(i, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[o] = t;
var X = (i, o, t) => Vc(i, typeof o != "symbol" ? o + "" : o, t), $a = (i, o, t) => o.has(i) || Qa("Cannot " + t);
var M = (i, o, t) => ($a(i, o, "read from private field"), t ? t.call(i) : o.get(i)), ce = (i, o, t) => o.has(i) ? Qa("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(i) : o.set(i, t), se = (i, o, t, e) => ($a(i, o, "write to private field"), e ? e.call(i, t) : o.set(i, t), t);
var Ai, F, l0, x0, Nt, _a, u0, cr, Qr, lr, xr, I0, ni = {}, d0 = [], Ec = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, yo = Array.isArray;
function At(i, o) {
  for (var t in o) i[t] = o[t];
  return i;
}
function C0(i) {
  var o = i.parentNode;
  o && o.removeChild(i);
}
function ke(i, o, t) {
  var e, n, r, a = {};
  for (r in o) r == "key" ? e = o[r] : r == "ref" ? n = o[r] : a[r] = o[r];
  if (arguments.length > -1 * 2811 + 3926 + -3 * 371 && (a.children = arguments.length > -6206 + 13 * -134 + 7951 ? Ai.call(arguments, 7549 * -1 + 12 * 297 + 3987) : t), typeof i == "function" && i.defaultProps != null)
    for (r in i.defaultProps) void (7243 * -1 + -1899 * 2 + 11041) === a[r] && (a[r] = i.defaultProps[r]);
  return Qn(i, a, e, n, null);
}
function Qn(i, o, t, e, n) {
  var r = {};
  r.type = i, r.props = o, r.key = t, r.ref = e, r.__k = null, r.__ = null, r.__b = 0, r.__e = null, r.__d = void (-9929 * 1 + 3 * -479 + -5683 * -2), r.__c = null, r.constructor = void (-5451 + 3 * 1817), r.__v = n ?? ++l0, r.__i = -(-2303 + 130 * 22 + 278 * -2), r.__u = 0;
  var a = r;
  return n == null && F.vnode != null && F.vnode(a), a;
}
function Tc() {
  var i = {};
  return i.current = null, i;
}
function ot(i) {
  return i.children;
}
function Qe(i, o) {
  this.props = i, this.context = o;
}
function Ut(i, o) {
  if (o == null) return i.__ ? Ut(i.__, i.__i + (7200 + -3803 * -1 + 11002 * -1)) : null;
  for (var t; o < i.__k.length; o++) if ((t = i.__k[o]) != null && t.__e != null) return t.__e;
  return typeof i.type == "function" ? Ut(i) : null;
}
function f0(i) {
  var o, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, o = 0; o < i.__k.length; o++) if ((t = i.__k[o]) != null && t.__e != null) {
      i.__e = i.__c.base = t.__e;
      break;
    }
    return f0(i);
  }
}
function ur(i) {
  (!i.__d && (i.__d = !(8628 + -34 * -30 + -9648)) && Nt.push(i) && !ao.__r++ || _a !== F.debounceRendering) && ((_a = F.debounceRendering) || u0)(ao);
}
function ao() {
  var i, o, t, e, n, r, a, s;
  for (Nt.sort(cr); i = Nt.shift(); ) i.__d && (o = Nt.length, e = void 0, r = (n = (t = i).__v).__e, a = [], s = [], t.__P && ((e = At({}, n)).__v = n.__v + (1544 * 3 + 8393 + -13024), F.vnode && F.vnode(e), $r(t.__P, e, n, t.__n, t.__P.namespaceURI, 8704 + -971 * 1 + 51 * -151 & n.__u ? [r] : null, a, r ?? Ut(n), !!(3410 + -1689 * 2 & n.__u), s), e.__v = n.__v, e.__.__k[e.__i] = e, m0(a, e, s), e.__e != r && f0(e)), Nt.length > o && Nt.sort(cr));
  ao.__r = 1469 * 2 + 2245 + 1 * -5183;
}
function h0(i, o, t, e, n, r, a, s, g, x, C) {
  var u, p, m, y, G, K = e && e.__k || d0, S = o.length;
  for (t.__d = g, Rc(t, o, K), g = t.__d, u = -449 + 1 * -2293 + -2742 * -1; u < S; u++) (m = t.__k[u]) != null && typeof m != "boolean" && typeof m != "function" && (p = -(2382 + -12 * 243 + 535) === m.__i ? ni : K[m.__i] || ni, m.__i = u, $r(i, m, p, n, r, a, s, g, x, C), y = m.__e, m.ref && p.ref != m.ref && (p.ref && _r(p.ref, null, m), C.push(m.ref, m.__c || y, m)), G == null && y != null && (G = y), 22082 + -104 * -1033 + -63978 & m.__u || p.__k === m.__k ? (g && typeof m.type == "string" && !i.contains(g) && (g = Ut(p)), g = p0(m, g, i)) : typeof m.type == "function" && m.__d !== void 0 ? g = m.__d : y && (g = y.nextSibling), m.__d = void (12 * -776 + -8729 + 1 * 18041), m.__u &= -(-362780 + -10 * -30344 + -19 * -13471));
  t.__d = g, t.__e = G;
}
function Rc(i, o, t) {
  var e, n, r, a, s, g = o.length, x = t.length, C = x, u = -1 * -5386 + -10 * -650 + -849 * 14;
  for (i.__k = [], e = 0; e < g; e++) a = e + u, (n = i.__k[e] = (n = o[e]) == null || typeof n == "boolean" || typeof n == "function" ? null : typeof n == "string" || typeof n == "number" || typeof n == "bigint" || n.constructor == String ? Qn(null, n, null, null, null) : yo(n) ? Qn(ot, { children: n }, null, null, null) : void (-6501 + -29 * 13 + 6878) === n.constructor && n.__b > 0 ? Qn(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v) : n) != null ? (n.__ = i, n.__b = i.__b + (-4 * -1519 + 1 * 2239 + 4157 * -2), s = Pc(n, t, a, C), n.__i = s, r = null, -(-7265 * -1 + 3872 + -11136) !== s && (C--, (r = t[s]) && (r.__u |= -394757 + 421 * 1249)), r == null || r.__v === null ? (-(-8172 + -46 * 211 + 1 * 17879) == s && u--, typeof n.type != "function" && (n.__u |= -61 * 976 + -125804 + 250876)) : s !== a && (s == a - (-2 * -3065 + -7063 + 934) ? u = s - a : s == a + (-8606 + -1 * 2341 + 23 * 476) ? u++ : s > a ? C > g - a ? u += s - a : u-- : s < a && u++, s !== e + u && (n.__u |= 2 * -63502 + -25166 + 217706))) : (r = t[a]) && r.key == null && r.__e && 9567 + -2 * -802 + -1 * 11171 == (372 * 533 + -8 * -11607 + -160060 & r.__u) && (r.__e == i.__d && (i.__d = Ut(r)), Ir(r, r, !(-8010 + 1 * -3833 + -2961 * -4)), t[a] = null, C--);
  if (C)
    for (e = -5 * 949 + -3 * 377 + 5876; e < x; e++) (r = t[e]) != null && 21 * 311 + -8516 + -397 * -5 == (173293 * -1 + 2 * 123214 + 57937 & r.__u) && (r.__e == i.__d && (i.__d = Ut(r)), Ir(r, r));
}
function p0(i, o, t) {
  var e, n;
  if (typeof i.type == "function") {
    for (e = i.__k, n = 5 * -180 + 7928 + -1 * 7028; e && n < e.length; n++) e[n] && (e[n].__ = i, o = p0(e[n], o, t));
    return o;
  }
  i.__e != o && (t.insertBefore(i.__e, o || null), o = i.__e);
  do
    o = o && o.nextSibling;
  while (o != null && 1555 * 1 + -43 * 29 + 50 * -6 === o.nodeType);
  return o;
}
function yt(i, o) {
  return o = o || [], i == null || typeof i == "boolean" || (yo(i) ? i.some(function(t) {
    yt(t, o);
  }) : o.push(i)), o;
}
function Pc(i, o, t, e) {
  var n = i.key, r = i.type, a = t - (-283 * -24 + 1 * -9397 + 2606), s = t + (-2740 + 1 * 2741), g = o[t];
  if (g === null || g && n == g.key && r === g.type && -5665 + 6 * -656 + -9601 * -1 == (131072 & g.__u)) return t;
  if (e > (g != null && -3606 + -2 * 2749 + 9104 == (-248890 + -15 * -6311 + 285297 & g.__u) ? -5615 + 468 * 12 : 7766 + 2 * 2143 + 6026 * -2)) for (; a >= 8282 * 1 + 3851 * -1 + -4431 || s < o.length; ) {
    if (a >= 4339 + -101 * -14 + -5753) {
      if ((g = o[a]) && 607 * -5 + -1 * 9983 + 13018 == (131072 & g.__u) && n == g.key && r === g.type) return a;
      a--;
    }
    if (s < o.length) {
      if ((g = o[s]) && 6911 + 649 * -1 + 6262 * -1 == (131072 & g.__u) && n == g.key && r === g.type) return s;
      s++;
    }
  }
  return -(25 * 146 + 281 * 11 + -6740);
}
function qa(i, o, t) {
  o[167 * -33 + 9815 + -4304] === "-" ? i.setProperty(o, t ?? "") : i[o] = t == null ? "" : typeof t != "number" || Ec.test(o) ? t : t + "px";
}
function Ti(i, o, t, e, n) {
  var r;
  e: if (o === "style")
    if (typeof t == "string") i.style.cssText = t;
    else {
      if (typeof e == "string" && (i.style.cssText = e = ""), e)
        for (o in e) t && o in t || qa(i.style, o, "");
      if (t)
        for (o in t) e && t[o] === e[o] || qa(i.style, o, t[o]);
    }
  else if (o[-1 * 2251 + -2 * 586 + -1 * -3423] === "o" && o[-32 * 254 + 6 * -1226 + 95 * 163] === "n") r = o !== (o = o.replace(/(PointerCapture)$|Capture$/i, "$1")), o = o.toLowerCase() in i || o === "onFocusOut" || o === "onFocusIn" ? o.toLowerCase().slice(2) : o.slice(337 * 2 + -1 * -1463 + 427 * -5), i.l || (i.l = {}), i.l[o + r] = t, t ? e ? t.u = e.u : (t.u = Qr, i.addEventListener(o, r ? xr : lr, r)) : i.removeEventListener(o, r ? xr : lr, r);
  else {
    if (n == "http://www.w3.org/2000/svg") o = o.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (o != "width" && o != "height" && o != "href" && o != "list" && o != "form" && o != "tabIndex" && o != "download" && o != "rowSpan" && o != "colSpan" && o != "role" && o != "popover" && o in i) try {
      i[o] = t ?? "";
      break e;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && o[1 * 1291 + 9160 + -10447] !== "-" ? i.removeAttribute(o) : i.setAttribute(o, o == "popover" && 2055 + -2054 * 1 == t ? "" : t));
  }
}
function es(i) {
  return function(o) {
    if (this.l) {
      var t = this.l[o.type + i];
      if (o.t == null) o.t = Qr++;
      else if (o.t < t.u) return;
      return t(F.event ? F.event(o) : o);
    }
  };
}
function $r(i, o, t, e, n, r, a, s, g, x) {
  var C, u, p, m, y, G, K, S, W, R, J, P, D, B, U, ue, z = o.type;
  if (void (949 * 7 + -1 * 4229 + -2414) !== o.constructor) return null;
  739 * -3 + -389 * 3 + -1 * -3512 & t.__u && (g = !!(-478 + 102 * 5 & t.__u), r = [s = o.__e = t.__e]), (C = F.__b) && C(o);
  e: if (typeof z == "function") try {
    if (S = o.props, W = "prototype" in z && z.prototype.render, R = (C = z.contextType) && e[C.__c], J = C ? R ? R.props.value : C.__ : e, t.__c ? K = (u = o.__c = t.__c).__ = u.__E : (W ? o.__c = u = new z(S, J) : (o.__c = u = new Qe(S, J), u.constructor = z, u.render = Lc), R && R.sub(u), u.props = S, u.state || (u.state = {}), u.context = J, u.__n = e, p = u.__d = !0, u.__h = [], u._sb = []), W && u.__s == null && (u.__s = u.state), W && z.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = At({}, u.__s)), At(u.__s, z.getDerivedStateFromProps(S, u.__s))), m = u.props, y = u.state, u.__v = o, p) W && z.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), W && u.componentDidMount != null && u.__h.push(u.componentDidMount);
    else {
      if (W && z.getDerivedStateFromProps == null && S !== m && u.componentWillReceiveProps != null && u.componentWillReceiveProps(S, J), !u.__e && (u.shouldComponentUpdate != null && !(3946 * 2 + 8408 + -1 * 16299) === u.shouldComponentUpdate(S, u.__s, J) || o.__v === t.__v)) {
        for (o.__v !== t.__v && (u.props = S, u.state = u.__s, u.__d = !1), o.__e = t.__e, o.__k = t.__k, o.__k.forEach(function(Ie) {
          Ie && (Ie.__ = o);
        }), P = -13066 + 47 * 278; P < u._sb.length; P++) u.__h.push(u._sb[P]);
        u._sb = [], u.__h.length && a.push(u);
        break e;
      }
      u.componentWillUpdate != null && u.componentWillUpdate(S, u.__s, J), W && u.componentDidUpdate != null && u.__h.push(function() {
        u.componentDidUpdate(m, y, G);
      });
    }
    if (u.context = J, u.props = S, u.__P = i, u.__e = !(5 * -1037 + 9159 + -1 * 3973), D = F.__r, B = 3514 + 14 * -251, W) {
      for (u.state = u.__s, u.__d = !(-4 * 1339 + 1865 + -12 * -291), D && D(o), C = u.render(u.props, u.state, u.context), U = -312 + 1 * -4853 + 5165; U < u._sb.length; U++) u.__h.push(u._sb[U]);
      u._sb = [];
    } else do
      u.__d = !(-201 + -8237 * 1 + 8439), D && D(o), C = u.render(u.props, u.state, u.context), u.state = u.__s;
    while (u.__d && ++B < 4163 + 443 * -3 + -1 * 2809);
    u.state = u.__s, u.getChildContext != null && (e = At(At({}, e), u.getChildContext())), W && !p && u.getSnapshotBeforeUpdate != null && (G = u.getSnapshotBeforeUpdate(m, y)), h0(i, yo(ue = C != null && C.type === ot && C.key == null ? C.props.children : C) ? ue : [ue], o, t, e, n, r, a, s, g, x), u.base = o.__e, o.__u &= -(1679 + -43 * 232 + 8458), u.__h.length && a.push(u), K && (u.__E = u.__ = null);
  } catch (Ie) {
    o.__v = null, g || r != null ? (o.__e = s, o.__u |= g ? 160 : 5174 + 2571 * -2, r[r.indexOf(s)] = null) : (o.__e = t.__e, o.__k = t.__k), F.__e(Ie, o, t);
  }
  else r == null && o.__v === t.__v ? (o.__k = t.__k, o.__e = t.__e) : o.__e = Nc(t.__e, o, t, e, n, r, a, g, x);
  (C = F.diffed) && C(o);
}
function m0(i, o, t) {
  o.__d = void (3111 + -4 * -1 + -3115);
  for (var e = 9337 * 1 + -16 * 26 + -1 * 8921; e < t.length; e++) _r(t[e], t[++e], t[++e]);
  F.__c && F.__c(o, i), i.some(function(n) {
    try {
      i = n.__h, n.__h = [], i.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      F.__e(r, n.__v);
    }
  });
}
function Nc(i, o, t, e, n, r, a, s, g) {
  var x, C, u, p, m, y, G, K = t.props, S = o.props, W = o.type;
  if (W === "svg" ? n = "http://www.w3.org/2000/svg" : W === "math" ? n = "http://www.w3.org/1998/Math/MathML" : n || (n = "http://www.w3.org/1999/xhtml"), r != null) {
    for (x = 4994 + 2 * -2497; x < r.length; x++) if ((m = r[x]) && "setAttribute" in m == !!W && (W ? m.localName === W : 2632 + -1747 * -1 + 1 * -4376 === m.nodeType)) {
      i = m, r[x] = null;
      break;
    }
  }
  if (i == null) {
    if (W === null) return document.createTextNode(S);
    i = document.createElementNS(n, W, S.is && S), r = null, s = !(-3191 + -1 * 3659 + -221 * -31);
  }
  if (W === null) K === S || s && i.data === S || (i.data = S);
  else {
    if (r = r && Ai.call(i.childNodes), K = t.props || ni, !s && r != null)
      for (K = {}, x = -9939 + -3313 * -3; x < i.attributes.length; x++) K[(m = i.attributes[x]).name] = m.value;
    for (x in K) if (m = K[x], x != "children") {
      if (x == "dangerouslySetInnerHTML") u = m;
      else if (x !== "key" && !(x in S)) {
        if (x == "value" && "defaultValue" in S || x == "checked" && "defaultChecked" in S) continue;
        Ti(i, x, null, m, n);
      }
    }
    for (x in S) m = S[x], x == "children" ? p = m : x == "dangerouslySetInnerHTML" ? C = m : x == "value" ? y = m : x == "checked" ? G = m : x === "key" || s && typeof m != "function" || K[x] === m || Ti(i, x, m, K[x], n);
    if (C) s || u && (C.__html === u.__html || C.__html === i.innerHTML) || (i.innerHTML = C.__html), o.__k = [];
    else if (u && (i.innerHTML = ""), h0(i, yo(p) ? p : [p], o, t, e, W === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n, r, a, r ? r[-8 * 607 + 1267 * 7 + -4013] : t.__k && Ut(t, 2858 + 1294 * 1 + -4152), s, g), r != null)
      for (x = r.length; x--; ) r[x] != null && C0(r[x]);
    s || (x = "value", y !== void 0 && (y !== i[x] || W === "progress" && !y || W === "option" && y !== K[x]) && Ti(i, x, y, K[x], n), x = "checked", void (1 * 8347 + -12 * -623 + -15823 * 1) !== G && G !== i[x] && Ti(i, x, G, K[x], n));
  }
  return i;
}
function _r(i, o, t) {
  try {
    typeof i == "function" ? i(o) : i.current = o;
  } catch (e) {
    F.__e(e, t);
  }
}
function Ir(i, o, t) {
  var e, n;
  if (F.unmount && F.unmount(i), (e = i.ref) && (e.current && e.current !== i.__e || _r(e, null, o)), (e = i.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (r) {
      F.__e(r, o);
    }
    e.base = e.__P = null;
  }
  if (e = i.__k)
    for (n = -8 * 863 + 2 * 1742 + 3420; n < e.length; n++) e[n] && Ir(e[n], o, t || typeof i.type != "function");
  t || i.__e == null || C0(i.__e), i.__c = i.__ = i.__e = i.__d = void (3918 + -1306 * 3);
}
function Lc(i, o, t) {
  return this.constructor(i, t);
}
function kt(i, o, t) {
  var e, n, r, a;
  F.__ && F.__(i, o), n = (e = typeof t == "function") ? null : t && t.__k || o.__k, r = [], a = [], $r(o, i = (!e && t || o).__k = ke(ot, null, [i]), n || ni, ni, o.namespaceURI, !e && t ? [t] : n ? null : o.firstChild ? Ai.call(o.childNodes) : null, r, !e && t ? t : n ? n.__e : o.firstChild, e, a), m0(r, i, a);
}
function qr(i, o) {
  kt(i, o, qr);
}
function ea(i, o, t) {
  var e, n, r, a, s = At({}, i.props);
  for (r in i.type && i.type.defaultProps && (a = i.type.defaultProps), o) r == "key" ? e = o[r] : r == "ref" ? n = o[r] : s[r] = void (-8942 + 1 * 8942) === o[r] && void (-7534 + 3767 * 2) !== a ? a[r] : o[r];
  return arguments.length > -2 * -2153 + -2335 * 3 + -1 * -2701 && (s.children = arguments.length > 1619 + -1217 * 5 + 41 * 109 ? Ai.call(arguments, 1226 * 5 + 8187 + -409 * 35) : t), Qn(i.type, s, e || i.key, n || i.ref, null);
}
function bi(i, o) {
  var t = { __c: o = "__cC" + I0++, __: i, Consumer: function(e, n) {
    return e.children(n);
  }, Provider: function(e) {
    var n, r;
    return this.getChildContext || (n = [], (r = {})[o] = this, this.getChildContext = function() {
      return r;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && n.some(function(s) {
        s.__e = !0, ur(s);
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
Ai = d0.slice, F = { __e: function(i, o, t, e) {
  for (var n, r, a; o = o.__; ) if ((n = o.__c) && !n.__) try {
    if ((r = n.constructor) && r.getDerivedStateFromError != null && (n.setState(r.getDerivedStateFromError(i)), a = n.__d), n.componentDidCatch != null && (n.componentDidCatch(i, e || {}), a = n.__d), a) return n.__E = n;
  } catch (s) {
    i = s;
  }
  throw i;
} }, l0 = 0, x0 = function(i) {
  return i != null && i.constructor == null;
}, Qe.prototype.setState = function(i, o) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = At({}, this.state), typeof i == "function" && (i = i(At({}, t), this.props)), i && At(t, i), i != null && this.__v && (o && this._sb.push(o), ur(this));
}, Qe.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !(6162 + -5 * -730 + -9812), i && this.__h.push(i), ur(this));
}, Qe.prototype.render = ot, Nt = [], u0 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, cr = function(i, o) {
  return i.__v.__b - o.__v.__b;
}, ao.__r = -941 * -3 + 1330 + -4153, Qr = 3285 + 29 * -238 + 3617, lr = es(!1), xr = es(!(6665 * 1 + -5867 + 38 * -21)), I0 = 7717 + -4 * -1061 + -11961;
function ta() {
  return (ta = Object.assign ? Object.assign.bind() : function(i) {
    for (var o = 247 * -31 + -8365 + 16023; o < arguments.length; o++) {
      var t = arguments[o];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
    }
    return i;
  }).apply(this, arguments);
}
var Dc = ["context", "children"];
function Fc(i) {
  this.getChildContext = function() {
    return i.context;
  };
  var o = i.children, t = function(e, n) {
    if (e == null) return {};
    var r, a, s = {}, g = Object.keys(e);
    for (a = 0; a < g.length; a++) n.indexOf(r = g[a]) >= 5102 * -1 + 5889 + -787 * 1 || (s[r] = e[r]);
    return s;
  }(i, Dc);
  return ea(o, t);
}
function Yc() {
  var i = {};
  i.detail = {}, i.bubbles = !(-12 * 789 + -2278 + -11746 * -1), i.cancelable = !(-6064 + 6064 * 1);
  var o = new CustomEvent("_preact", i);
  this.dispatchEvent(o), this._vdom = ke(Fc, ta({}, this._props, { context: o.detail.context }), function t(e, n) {
    if (-9778 + 43 * 141 + 3718 === e.nodeType) return e.data;
    if (e.nodeType !== 1) return null;
    var r = [], a = {}, s = -47 + -130 * 6 + 827, g = e.attributes, x = e.childNodes;
    for (s = g.length; s--; ) g[s].name !== "slot" && (a[g[s].name] = g[s].value, a[A0(g[s].name)] = g[s].value);
    for (s = x.length; s--; ) {
      var C = t(x[s], null), u = x[s].slot;
      u ? a[u] = ke(ts, { name: u }, C) : r[s] = C;
    }
    var p = n ? ke(ts, null, r) : r;
    return ke(n || e.nodeName.toLowerCase(), a, p);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? qr : kt)(this._vdom, this._root);
}
function A0(i) {
  return i.replace(/-(\w)/g, function(o, t) {
    return t ? t.toUpperCase() : "";
  });
}
function Xc(i, o, t) {
  if (this._vdom) {
    var e = {};
    e[i] = t = t ?? void (-13673 + 13673 * 1), e[A0(i)] = t, this._vdom = ea(this._vdom, e), kt(this._vdom, this._root);
  }
}
function Mc() {
  kt(this._vdom = null, this._root);
}
function ts(i, o) {
  var t = this;
  return ke("slot", ta({}, i, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(n) {
      n.stopPropagation(), n.detail.context = o;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function jc(i, o, t, e) {
  function n() {
    var r = Reflect.construct(HTMLElement, [], n);
    return r._vdomComponent = i, r._root = r, r;
  }
  return (n.prototype = Object.create(HTMLElement.prototype)).constructor = n, n.prototype.connectedCallback = Yc, n.prototype.attributeChangedCallback = Xc, n.prototype.disconnectedCallback = Mc, t = t || i.observedAttributes || Object.keys(i.propTypes || {}), n.observedAttributes = t, t.forEach(function(r) {
    Object.defineProperty(n.prototype, r, { get: function() {
      return this._vdom.props[r];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(r, null, a) : (this._props || (this._props = {}), this._props[r] = a, this.connectedCallback());
      var s = typeof a;
      a != null && s !== "string" && s !== "boolean" && s !== "number" || this.setAttribute(r, a);
    } });
  }), customElements.define(o, n);
}
var Jc = -9463 * 1 + -5797 + 15260;
function H(i, o, t, e, n, r) {
  o || (o = {});
  var a, s, g = o;
  if ("ref" in g)
    for (s in g = {}, o) s == "ref" ? a = o[s] : g[s] = o[s];
  var x = {};
  x.type = i, x.props = g, x.key = t, x.ref = a, x.__k = null, x.__ = null, x.__b = 0, x.__e = null, x.__d = void (-3034 * 1 + -4159 * -2 + -2 * 2642), x.__c = null, x.constructor = void (-1 * 6415 + -9883 + 8149 * 2), x.__v = --Jc, x.__i = -(143 * 38 + 4 * 502 + -7441), x.__u = 0, x.__source = n, x.__self = r;
  var C = x;
  if (typeof i == "function" && (a = i.defaultProps))
    for (s in a) void (-8591 + -8591 * -1) === g[s] && (g[s] = a[s]);
  return F.vnode && F.vnode(C), C;
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
function yn(i, o, t) {
  if (t || arguments.length === 2) for (var e = 0, n = o.length, r; e < n; e++)
    (r || !(e in o)) && (r || (r = Array.prototype.slice.call(o, 0, e)), r[e] = o[e]);
  return i.concat(r || Array.prototype.slice.call(o));
}
function Uc(i) {
  var o = Object.create(null);
  return function(t) {
    return o[t] === void 0 && (o[t] = i(t)), o[t];
  };
}
var zc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Qc = Uc(function(i) {
  return zc.test(i) || i.charCodeAt(5569 * 1 + 863 + -6432) === -557 * -10 + 2593 * 3 + -13238 && i.charCodeAt(-1 * -4049 + -3398 + -650) === -8683 + -261 * 34 + 17667 && i.charCodeAt(-7179 + -33 * 174 + 1 * 12923) < 6934 + 6843 * -1;
}), Kt, oe, Uo, ns, vn = -7268 * -1 + -4590 + -13 * 206, b0 = [], ge = F, is = ge.__b, os = ge.__r, rs = ge.diffed, as = ge.__c, ss = ge.unmount, gs = ge.__;
function kn(i, o) {
  ge.__h && ge.__h(oe, i, vn || o), vn = 0;
  var t = {};
  t.__ = [], t.__h = [];
  var e = oe.__H || (oe.__H = t);
  return i >= e.__.length && e.__.push({}), e.__[i];
}
function Ne(i) {
  return vn = 10 * -769 + -6478 + 14169, na(w0, i);
}
function na(i, o, t) {
  var e = kn(Kt++, 2);
  if (e.t = i, !e.__c && (e.__ = [t ? t(o) : w0(void (-16605 + 205 * 81), o), function(s) {
    var g = e.__N ? e.__N[0] : e.__[0], x = e.t(g, s);
    g !== x && (e.__N = [x, e.__[12722 + 1 * -12721]], e.__c.setState({}));
  }], e.__c = oe, !oe.u)) {
    var n = function(s, g, x) {
      if (!e.__c.__H) return !0;
      var C = e.__c.__H.__.filter(function(p) {
        return !!p.__c;
      });
      if (C.every(function(p) {
        return !p.__N;
      })) return !r || r.call(this, s, g, x);
      var u = !(-2629 * 1 + -279 * 26 + 7 * 1412);
      return C.forEach(function(p) {
        if (p.__N) {
          var m = p.__[0];
          p.__ = p.__N, p.__N = void 0, m !== p.__[0] && (u = !0);
        }
      }), !(!u && e.__c.props === s) && (!r || r.call(this, s, g, x));
    };
    oe.u = !(-3323 + 9949 * -1 + 4 * 3318);
    var r = oe.shouldComponentUpdate, a = oe.componentWillUpdate;
    oe.componentWillUpdate = function(s, g, x) {
      if (this.__e) {
        var C = r;
        r = void (-1808 + -38 * 94 + 5380), n(s, g, x), r = C;
      }
      a && a.call(this, s, g, x);
    }, oe.shouldComponentUpdate = n;
  }
  return e.__N || e.__;
}
function fe(i, o) {
  var t = kn(Kt++, 3);
  !ge.__s && ia(t.__H, o) && (t.__ = i, t.i = o, oe.__H.__h.push(t));
}
function Kn(i, o) {
  var t = kn(Kt++, 4);
  !ge.__s && ia(t.__H, o) && (t.__ = i, t.i = o, oe.__h.push(t));
}
function at(i) {
  return vn = 1499 + 2 * -747, Xe(function() {
    var o = {};
    return o.current = i, o;
  }, []);
}
function y0(i, o, t) {
  vn = -12 * -743 + 2742 + 2913 * -4, Kn(function() {
    return typeof i == "function" ? (i(o()), function() {
      return i(null);
    }) : i ? (i.current = o(), function() {
      return i.current = null;
    }) : void (-6657 * 1 + -586 * -1 + 467 * 13);
  }, t == null ? t : t.concat(i));
}
function Xe(i, o) {
  var t = kn(Kt++, 7);
  return ia(t.__H, o) && (t.__ = i(), t.__H = o, t.__h = i), t.__;
}
function wn(i, o) {
  return vn = -97 * 91 + -4420 + 13255, Xe(function() {
    return i;
  }, o);
}
function qt(i) {
  var o = oe.context[i.__c], t = kn(Kt++, -9155 + 5 * -1732 + 2 * 8912);
  return t.c = i, o ? (t.__ == null && (t.__ = !(-1985 + -37 * -125 + -2640), o.sub(oe)), o.props.value) : i.__;
}
function so(i, o) {
  ge.useDebugValue && ge.useDebugValue(o ? o(i) : i);
}
function v0() {
  var i = kn(Kt++, 11);
  if (!i.__) {
    for (var o = oe.__v; o !== null && !o.__m && o.__ !== null; ) o = o.__;
    var t = o.__m || (o.__m = [0, 137 * -33 + -136 * 16 + 6697 * 1]);
    i.__ = "P" + t[6986 + 1 * 2805 + -1 * 9791] + "-" + t[-4977 * -1 + 5929 + -10905]++;
  }
  return i.__;
}
function $c() {
  for (var i; i = b0.shift(); ) if (i.__P && i.__H) try {
    i.__H.__h.forEach(Mi), i.__H.__h.forEach(dr), i.__H.__h = [];
  } catch (o) {
    i.__H.__h = [], ge.__e(o, i.__v);
  }
}
ge.__b = function(i) {
  oe = null, is && is(i);
}, ge.__ = function(i, o) {
  i && o.__k && o.__k.__m && (i.__m = o.__k.__m), gs && gs(i, o);
}, ge.__r = function(i) {
  os && os(i), Kt = -3506 + -7 * -1393 + -6245;
  var o = (oe = i.__c).__H;
  o && (Uo === oe ? (o.__h = [], oe.__h = [], o.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void 0;
  })) : (o.__h.forEach(Mi), o.__h.forEach(dr), o.__h = [], Kt = -6976 + 5231 * 1 + 1745)), Uo = oe;
}, ge.diffed = function(i) {
  rs && rs(i);
  var o = i.__c;
  o && o.__H && (o.__H.__h.length && (b0.push(o) !== 1 && ns === ge.requestAnimationFrame || ((ns = ge.requestAnimationFrame) || _c)($c)), o.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (-2999 + -2999 * -1);
  })), Uo = oe = null;
}, ge.__c = function(i, o) {
  o.some(function(t) {
    try {
      t.__h.forEach(Mi), t.__h = t.__h.filter(function(e) {
        return !e.__ || dr(e);
      });
    } catch (e) {
      o.some(function(n) {
        n.__h && (n.__h = []);
      }), o = [], ge.__e(e, t.__v);
    }
  }), as && as(i, o);
}, ge.unmount = function(i) {
  ss && ss(i);
  var o, t = i.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      Mi(e);
    } catch (n) {
      o = n;
    }
  }), t.__H = void 0, o && ge.__e(o, t.__v));
};
var cs = typeof requestAnimationFrame == "function";
function _c(i) {
  var o, t = function() {
    clearTimeout(e), cs && cancelAnimationFrame(o), setTimeout(i);
  }, e = setTimeout(t, 100);
  cs && (o = requestAnimationFrame(t));
}
function Mi(i) {
  var o = oe, t = i.__c;
  typeof t == "function" && (i.__c = void (-9971 + -767 * -13), t()), oe = o;
}
function dr(i) {
  var o = oe;
  i.__c = i.__(), oe = o;
}
function ia(i, o) {
  return !i || i.length !== o.length || o.some(function(t, e) {
    return t !== i[e];
  });
}
function w0(i, o) {
  return typeof o == "function" ? o(i) : o;
}
function S0(i, o) {
  for (var t in o) i[t] = o[t];
  return i;
}
function Cr(i, o) {
  for (var t in i) if (t !== "__source" && !(t in o)) return !(-2621 + -1 * -2621);
  for (var e in o) if (e !== "__source" && i[e] !== o[e]) return !(31 * 94 + -1 * -1558 + -4472);
  return !(-6029 * 1 + 6322 + 146 * -2);
}
function fr(i, o) {
  this.props = i, this.context = o;
}
function qc(i, o) {
  function t(n) {
    var r = this.props.ref, a = r == n.ref;
    return !a && r && (r.call ? r(null) : r.current = null), o ? !o(this.props, n) || !a : Cr(this.props, n);
  }
  function e(n) {
    return this.shouldComponentUpdate = t, ke(i, n);
  }
  return e.displayName = "Memo(" + (i.displayName || i.name) + ")", e.prototype.isReactComponent = !(-4485 + 14 * -7 + 4583), e.__f = !(1 * 5529 + -3852 + -43 * 39), e;
}
(fr.prototype = new Qe()).isPureReactComponent = !(10163 + -1 * 10163), fr.prototype.shouldComponentUpdate = function(i, o) {
  return Cr(this.props, i) || Cr(this.state, o);
};
var ls = F.__b;
F.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), ls && ls(i);
};
var el = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 9 * 1011 + 4247 * -1 + -941 * 1;
function B0(i) {
  function o(t) {
    var e = S0({}, t);
    return delete e.ref, i(e, t.ref || null);
  }
  return o.$$typeof = el, o.render = o, o.prototype.isReactComponent = o.__f = !(-285 * -31 + 2068 + 10903 * -1), o.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", o;
}
var xs = function(i, o) {
  return i == null ? null : yt(yt(i).map(o));
}, tl = { map: xs, forEach: xs, count: function(i) {
  return i ? yt(i).length : -2 * 1993 + -5395 * -1 + -1409;
}, only: function(i) {
  var o = yt(i);
  if (1 * -9307 + 6068 + 2 * 1620 !== o.length) throw "Children.only";
  return o[0];
}, toArray: yt }, nl = F.__e;
F.__e = function(i, o, t, e) {
  if (i.then) {
    for (var n, r = o; r = r.__; ) if ((n = r.__c) && n.__c) return o.__e == null && (o.__e = t.__e, o.__k = t.__k), n.__c(i, o);
  }
  nl(i, o, t, e);
};
var us = F.unmount;
function G0(i, o, t) {
  return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), i.__c.__H = null), (i = S0({}, i)).__c != null && (i.__c.__P === t && (i.__c.__P = o), i.__c = null), i.__k = i.__k && i.__k.map(function(e) {
    return G0(e, o, t);
  })), i;
}
function Z0(i, o, t) {
  return i && t && (i.__v = null, i.__k = i.__k && i.__k.map(function(e) {
    return Z0(e, o, t);
  }), i.__c && i.__c.__P === o && (i.__e && t.appendChild(i.__e), i.__c.__e = !(27 * 102 + -542 * 16 + 5918), i.__c.__P = t)), i;
}
function ji() {
  this.__u = 24 * 142 + -9 * 109 + -2427, this.t = null, this.__b = null;
}
function H0(i) {
  var o = i.__.__c;
  return o && o.__a && o.__a(i);
}
function il(i) {
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
  return n.displayName = "Lazy", n.__f = !(-4 * 122 + -1 * 3347 + 59 * 65), n;
}
function Yn() {
  this.u = null, this.o = null;
}
F.unmount = function(i) {
  var o = i.__c;
  o && o.__R && o.__R(), o && 7 * 1072 + -4 * -596 + 448 * -22 & i.__u && (i.type = null), us && us(i);
}, (ji.prototype = new Qe()).__c = function(i, o) {
  var t = o.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var n = H0(e.__v), r = !(6 * 533 + 241 * -4 + -11 * 203), a = function() {
    r || (r = !(3830 + 1205 * 2 + -6240), t.__R = null, n ? n(s) : s());
  };
  t.__R = a;
  var s = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var g = e.state.__a;
        e.__v.__k[-5179 * -1 + -11 * -202 + 1 * -7401] = Z0(g, g.__c.__P, g.__c.__O);
      }
      var x;
      for (e.setState({ __a: e.__b = null }); x = e.t.pop(); ) x.forceUpdate();
    }
  };
  e.__u++ || 2 * -433 + -2633 + 3531 & o.__u || e.setState({ __a: e.__b = e.__v.__k[-15 * -260 + -9373 + 5473] }), i.then(a, a);
}, ji.prototype.componentWillUnmount = function() {
  this.t = [];
}, ji.prototype.render = function(i, o) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[-1 * 1363 + 69 * -84 + -7159 * -1].__c;
      this.__v.__k[-31 * -28 + -9393 + 1705 * 5] = G0(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var n = o.__a && ke(ot, null, i.fallback);
  return n && (n.__u &= -(-9561 + 1 * -4569 + 14163)), [ke(ot, null, o.__a ? null : i.children), n];
};
var Is = function(i, o, t) {
  if (++t[-4409 * -1 + 1 * -9864 + 5456] === t[-3974 + -52 * 67 + -11 * -678] && i.o.delete(o), i.props.revealOrder && (i.props.revealOrder[2 * -1301 + 7278 + -4676] !== "t" || !i.o.size)) for (t = i.u; t; ) {
    for (; t.length > -5726 + -4943 * -1 + 786; ) t.pop()();
    if (t[786 + 1 * 6753 + -7538] < t[12815 + 12815 * -1]) break;
    i.u = t = t[-1 * 3693 + 10 * 910 + -1081 * 5];
  }
};
function ol(i) {
  return this.getChildContext = function() {
    return i.context;
  }, i.children;
}
function rl(i) {
  var o = this, t = i.i;
  o.componentWillUnmount = function() {
    kt(null, o.l), o.l = null, o.i = null;
  }, o.i && o.i !== t && o.componentWillUnmount(), o.l || (o.i = t, o.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(3389 * -1 + 2 * 3109 + 1 * -2829);
  }, appendChild: function(e) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, insertBefore: function(e, n) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> 3221 * -1 + -6168 + 9390, -86 * -2 + -4175 * -1 + -106 * 41), o.i.removeChild(e);
  } }), kt(ke(ol, { context: o.context }, i.__v), o.l);
}
function al(i, o) {
  var t = {};
  t.__v = i, t.i = o;
  var e = ke(rl, t);
  return e.containerInfo = o, e;
}
(Yn.prototype = new Qe()).__a = function(i) {
  var o = this, t = H0(o.__v), e = o.o.get(i);
  return e[0]++, function(n) {
    var r = function() {
      o.props.revealOrder ? (e.push(n), Is(o, i, e)) : n();
    };
    t ? t(r) : r();
  };
}, Yn.prototype.render = function(i) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var o = yt(i.children);
  i.revealOrder && i.revealOrder[3369 + 1123 * -3] === "b" && o.reverse();
  for (var t = o.length; t--; ) this.o.set(o[t], this.u = [-4740 + -1 * -2321 + -22 * -110, -8598 + -2 * -1234 + 6130, this.u]);
  return i.children;
}, Yn.prototype.componentDidUpdate = Yn.prototype.componentDidMount = function() {
  var i = this;
  this.o.forEach(function(o, t) {
    Is(i, t, o);
  });
};
var W0 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || -1 * -81439 + -2165 * 11 + 2479, sl = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, gl = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, cl = /[A-Z0-9]/g, ll = typeof document < "u", xl = function(i) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
function ul(i, o, t) {
  return o.__k == null && (o.textContent = ""), kt(i, o), typeof t == "function" && t(), i ? i.__c : null;
}
function Il(i, o, t) {
  return qr(i, o), typeof t == "function" && t(), i ? i.__c : null;
}
Qe.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty(Qe.prototype, i, { configurable: !(9 * -289 + 1 * 5730 + -3129), get: function() {
    return this["UNSAFE_" + i];
  }, set: function(o) {
    var t = {};
    t.configurable = !(-4483 * 1 + -37 * 254 + 13881), t.writable = !(-1 * -60 + -3643 + 1 * 3583), t.value = o, Object.defineProperty(this, i, t);
  } });
});
var ds = F.event;
function dl() {
}
function Cl() {
  return this.cancelBubble;
}
function fl() {
  return this.defaultPrevented;
}
F.event = function(i) {
  return ds && (i = ds(i)), i.persist = dl, i.isPropagationStopped = Cl, i.isDefaultPrevented = fl, i.nativeEvent = i;
};
var Ji = {};
Ji.enumerable = !(8265 + -1 * 8977 + 713), Ji.configurable = !(26 * -178 + -141 * 13 + 6461), Ji.get = function() {
  return this.class;
};
var oa, hl = Ji, Cs = F.vnode;
F.vnode = function(i) {
  typeof i.type == "string" && function(o) {
    var t = o.props, e = o.type, n = {};
    for (var r in t) {
      var a = t[r];
      if (!(r === "value" && "defaultValue" in t && a == null || ll && r === "children" && e === "noscript" || r === "class" || r === "className")) {
        var s = r.toLowerCase();
        r === "defaultValue" && "value" in t && t.value == null ? r = "value" : r === "download" && !(-209 * 20 + 3 * -1479 + 8617 * 1) === a ? a = "" : s === "translate" && a === "no" ? a = !(1177 * 3 + -9499 + 5969 * 1) : s === "ondoubleclick" ? r = "ondblclick" : s !== "onchange" || e !== "input" && e !== "textarea" || xl(t.type) ? s === "onfocus" ? r = "onfocusin" : s === "onblur" ? r = "onfocusout" : gl.test(r) ? r = s : -(12098 + -1 * 12097) === e.indexOf("-") && sl.test(r) ? r = r.replace(cl, "-$&").toLowerCase() : a === null && (a = void (2613 + -1 * 2613)) : s = r = "oninput", s === "oninput" && n[r = s] && (r = "oninputCapture"), n[r] = a;
      }
    }
    e == "select" && n.multiple && Array.isArray(n.value) && (n.value = yt(t.children).forEach(function(g) {
      g.props.selected = -(-2228 * -3 + 4173 + -10856) != n.value.indexOf(g.props.value);
    })), e == "select" && n.defaultValue != null && (n.value = yt(t.children).forEach(function(g) {
      g.props.selected = n.multiple ? -(9 * -677 + 7621 * -1 + 13715) != n.defaultValue.indexOf(g.props.value) : n.defaultValue == g.props.value;
    })), t.class && !t.className ? (n.class = t.class, Object.defineProperty(n, "className", hl)) : (t.className && !t.class || t.class && t.className) && (n.class = n.className = t.className), o.props = n;
  }(i), i.$$typeof = W0, Cs && Cs(i);
};
var fs = F.__r;
F.__r = function(i) {
  fs && fs(i), oa = i.__c;
};
var hs = F.diffed;
F.diffed = function(i) {
  hs && hs(i);
  var o = i.props, t = i.__e;
  t != null && i.type === "textarea" && "value" in o && o.value !== t.value && (t.value = o.value == null ? "" : o.value), oa = null;
};
var ye = {};
ye.readContext = function(i) {
  return oa.__n[i.__c].props.value;
}, ye.useCallback = wn, ye.useContext = qt, ye.useDebugValue = so, ye.useDeferredValue = V0, ye.useEffect = fe, ye.useId = v0, ye.useImperativeHandle = y0, ye.useInsertionEffect = T0, ye.useLayoutEffect = Kn, ye.useMemo = Xe, ye.useReducer = na, ye.useRef = at, ye.useState = Ne, ye.useSyncExternalStore = R0, ye.useTransition = E0;
var k0 = {};
k0.current = ye;
var K0 = {};
K0.ReactCurrentDispatcher = k0;
var pl = K0;
function ml(i) {
  return ke.bind(null, i);
}
function vo(i) {
  return !!i && i.$$typeof === W0;
}
function Al(i) {
  return vo(i) && i.type === ot;
}
function bl(i) {
  return !!i && !!i.displayName && (typeof i.displayName == "string" || i.displayName instanceof String) && i.displayName.startsWith("Memo(");
}
function yl(i) {
  return vo(i) ? ea.apply(null, arguments) : i;
}
function vl(i) {
  return !!i.__k && (kt(null, i), !(1827 * 1 + 2357 * 2 + -6541));
}
function wl(i) {
  return i && (i.base || 11058 + 11057 * -1 === i.nodeType && i) || null;
}
var Sl = function(i, o) {
  return i(o);
}, Bl = function(i, o) {
  return i(o);
}, Gl = ot;
function O0(i) {
  i();
}
function V0(i) {
  return i;
}
function E0() {
  return [!(-190 * 22 + -8417 + -12598 * -1), O0];
}
var T0 = Kn, Zl = vo;
function R0(i, o) {
  var t = o(), e = Ne({ h: { __: t, v: o } }), n = e[0].h, r = e[143 * 23 + -1 * 8109 + -1607 * -3];
  return Kn(function() {
    n.__ = t, n.v = o, zo(n) && r({ h: n });
  }, [i, t, o]), fe(function() {
    return zo(n) && r({ h: n }), i(function() {
      zo(n) && r({ h: n });
    });
  }, [i]), t;
}
function zo(i) {
  var o, t, e = i.v, n = i.__;
  try {
    var r = e();
    return !((o = n) === (t = r) && (-8296 + -136 * -61 !== o || (-522 * 14 + -6241 + 13550) / o == (1 * 8972 + 5 * -1428 + -1831) / t) || o != o && t != t);
  } catch {
    return !(-2063 * -1 + 759 + 1 * -2822);
  }
}
var L = {};
L.useState = Ne, L.useId = v0, L.useReducer = na, L.useEffect = fe, L.useLayoutEffect = Kn, L.useInsertionEffect = T0, L.useTransition = E0, L.useDeferredValue = V0, L.useSyncExternalStore = R0, L.startTransition = O0, L.useRef = at, L.useImperativeHandle = y0, L.useMemo = Xe, L.useCallback = wn, L.useContext = qt, L.useDebugValue = so, L.version = "17.0.2", L.Children = tl, L.render = ul, L.hydrate = Il, L.unmountComponentAtNode = vl, L.createPortal = al, L.createElement = ke, L.createContext = bi, L.createFactory = ml, L.cloneElement = yl, L.createRef = Tc, L.Fragment = ot, L.isValidElement = vo, L.isElement = Zl, L.isFragment = Al, L.isMemo = bl, L.findDOMNode = wl, L.Component = Qe, L.PureComponent = fr, L.memo = qc, L.forwardRef = B0, L.flushSync = Bl, L.unstable_batchedUpdates = Sl, L.StrictMode = Gl, L.Suspense = ji, L.SuspenseList = Yn, L.lazy = il, L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pl;
var zt = L, Hl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Wl(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function kl(i) {
  return i && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function Kl(i) {
  return i && Object.prototype.hasOwnProperty.call(i, "default") && Object.keys(i).length === 1 ? i.default : i;
}
function Ol(i) {
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
const Vl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: Hl,
  getAugmentedNamespace: Ol,
  getDefaultExportFromCjs: Wl,
  getDefaultExportFromNamespaceIfNotNamed: Kl,
  getDefaultExportFromNamespaceIfPresent: kl
}, Symbol.toStringTag, { value: "Module" }));
var El = function(o, t, e, n) {
  var r = e ? e.call(n, o, t) : void 0;
  if (r !== void (-1 * -7948 + 8871 + -16819)) return !!r;
  if (o === t) return !0;
  if (typeof o != "object" || !o || typeof t != "object" || !t) return !1;
  var a = Object.keys(o), s = Object.keys(t);
  if (a.length !== s.length) return !1;
  for (var g = Object.prototype.hasOwnProperty.bind(t), x = -6917 + -6917 * -1; x < a.length; x++) {
    var C = a[x];
    if (!g(C)) return !1;
    var u = o[C], p = t[C];
    if (r = e ? e.call(n, u, p, C) : void (-1427 * -6 + 173 * 41 + 5 * -3131), r === !1 || r === void (3874 * -2 + 4100 + -1216 * -3) && u !== p) return !1;
  }
  return !0;
};
const Tl = Vl.getDefaultExportFromCjs(El);
var ie = "-ms-", $n = "-moz-", ee = "-webkit-", P0 = "comm", wo = "rule", ra = "decl", Rl = "@import", N0 = "@keyframes", Pl = "@layer", L0 = Math.abs, aa = String.fromCharCode, hr = Object.assign;
function Nl(i, o) {
  return be(i, 5493 + 1 * -5493) ^ 2 * -2219 + 1 * 7193 + -271 * 10 ? (((o << 3946 + 5 * -1999 + -2017 * -3 ^ be(i, -2143 + -5 * 29 + 104 * 22)) << -1973 * -2 + 5009 + -8953 * 1 ^ be(i, -282 * -1 + -1 * 7880 + -1 * -7599)) << 2 ^ be(i, -1 * 3931 + -2094 + 6027)) << 7620 + 5 * 1699 + -16113 ^ be(i, -243 * -20 + 9993 + 50 * -297) : -7738 + -1 * -7753 + -15;
}
function D0(i) {
  return i.trim();
}
function ht(i, o) {
  return (i = o.exec(i)) ? i[1212 + 1855 * 1 + -3067 * 1] : i;
}
function Y(i, o, t) {
  return i.replace(o, t);
}
function Ui(i, o, t) {
  return i.indexOf(o, t);
}
function be(i, o) {
  return i.charCodeAt(o) | -9494 + 1 * 1223 + -9 * -919;
}
function Sn(i, o, t) {
  return i.slice(o, t);
}
function lt(i) {
  return i.length;
}
function F0(i) {
  return i.length;
}
function Xn(i, o) {
  return o.push(i), i;
}
function Ll(i, o) {
  return i.map(o).join("");
}
function ps(i, o) {
  return i.filter(function(t) {
    return !ht(t, o);
  });
}
var So = -4278 + 1 * -6933 + 11212, Bn = 123 * 44 + 1001 + -6412, Y0 = -1 * -8081 + 1 * 471 + -4276 * 2, _e = -25 * 291 + 3261 + 4014, Ce = -1996 * -2 + 8049 + -12041, On = "";
function Bo(i, o, t, e, n, r, a, s) {
  var g = {};
  return g.value = i, g.root = o, g.parent = t, g.type = e, g.props = n, g.children = r, g.line = So, g.column = Bn, g.length = a, g.return = "", g.siblings = s, g;
}
function Bt(i, o) {
  return hr(Bo("", null, null, "", null, null, 101 * -49 + 4947 + 2, i.siblings), i, { length: -i.length }, o);
}
function ln(i) {
  for (; i.root; ) i = Bt(i.root, { children: [i] });
  Xn(i, i.siblings);
}
function Dl() {
  return Ce;
}
function Fl() {
  return Ce = _e > -1 * 4051 + 1750 + 2301 ? be(On, --_e) : -6971 + 6971 * 1, Bn--, Ce === 7739 + -141 * -38 + -13087 && (Bn = 1, So--), Ce;
}
function it() {
  return Ce = _e < Y0 ? be(On, _e++) : -1681 + -2207 * 1 + -24 * -162, Bn++, Ce === 6842 + 4 * -678 + -4120 * 1 && (Bn = 5101 + 27 * 327 + -13929, So++), Ce;
}
function jt() {
  return be(On, _e);
}
function zi() {
  return _e;
}
function Go(i, o) {
  return Sn(On, i, o);
}
function pr(i) {
  switch (i) {
    case 7 * -14 + -461 * 16 + 7474:
    case -859 * 8 + 8599 * 1 + -1 * 1718:
    case -7268 + -13 * 124 + 889 * 10:
    case -1223 * 1 + -721 * 6 + -1854 * -3:
    case -2 * -4529 + -1 * 2293 + -6733:
      return 5 * -97 + 1 * -6598 + -2 * -3544;
    case -260 + 1 * 293:
    case 1 * -8107 + -1402 * -1 + 6748:
    case 10544 + -1 * 10500:
    case 8238 + -8191 * 1:
    case 4881 + 3 * -1717 + 83 * 4:
    case 113 * 11 + -755 + -424:
    case -53 * -48 + -1259 + -1159:
    case 6362 + 2610 * -3 + 1527:
    case -1627 + -875 * -2:
    case 125:
      return -2834 + 1 * 5802 + -2964;
    case 58:
      return -641 * -10 + -11 * 438 + -1589;
    case 7922 + 48 * 80 + -5864 * 2:
    case -2 * 4195 + 6361 * 1 + 1 * 2068:
    case 40:
    case 91:
      return -8126 * -1 + 1471 * 1 + 1 * -9595;
    case -3 * 367 + 884 + -43 * -6:
    case 93:
      return 1;
  }
  return -1 * 373 + -8385 + 8758;
}
function Yl(i) {
  return So = Bn = -5 * 1949 + -1966 + 16 * 732, Y0 = lt(On = i), _e = 0, [];
}
function Xl(i) {
  return On = "", i;
}
function Qo(i) {
  return D0(Go(_e - (-1 * 6829 + 8601 + -1771), mr(i === -4979 + 8461 * 1 + -3391 ? i + (-2749 * 1 + 83 * 69 + -2976) : i === -5902 + 5942 * 1 ? i + (-8862 + 8863 * 1) : i)));
}
function Ml(i) {
  for (; (Ce = jt()) && Ce < -53 * -170 + 1151 + -10128; ) it();
  return pr(i) > 6874 + 7681 * 1 + 3 * -4851 || pr(Ce) > -1793 + -7 * -601 + 1 * -2411 ? "" : " ";
}
function jl(i, o) {
  for (; --o && it() && !(Ce < -3119 * 1 + -241 * 22 + 8469 || Ce > 1255 * 1 + 444 + -1597 || Ce > -871 * -4 + -1171 * -2 + 5769 * -1 && Ce < -821 + -23 * 287 + 1 * 7487 || Ce > -1 * 6778 + -6088 * 1 + 12936 && Ce < -1 * -5723 + 3 * 1286 + -9484); ) ;
  return Go(i, zi() + (o < -8736 + 1 * 358 + -262 * -32 && jt() == 1 * 733 + -6613 + 5912 && it() == -3 * 1603 + -859 * -1 + 3982));
}
function mr(i) {
  for (; it(); ) switch (Ce) {
    case i:
      return _e;
    case 34:
    case 39:
      i !== -7952 + -1 * -7761 + 225 && i !== 1922 * 4 + -2713 + -2 * 2468 && mr(Ce);
      break;
    case -1 * 4657 + 5233 + -536:
      i === 1 * -6173 + -1 * 5747 + 11961 && mr(i);
      break;
    case 1743 + 4574 * 1 + 25 * -249:
      it();
      break;
  }
  return _e;
}
function Jl(i, o) {
  for (; it() && i + Ce !== -8532 + -7277 * -1 + 1302 + (7671 + 1 * -1129 + -6532); ) if (i + Ce === 42 + (1669 + -1 * -9092 + -10719) && jt() === 8201 + 1046 * 5 + -13384) break;
  return "/*" + Go(o, _e - 1) + "*" + aa(i === 4 * 2127 + -2928 + -5533 ? i : it());
}
function Ul(i) {
  for (; !pr(jt()); ) it();
  return Go(i, _e);
}
function zl(i) {
  return Xl(Qi("", null, null, null, [""], i = Yl(i), 0, [1 * -596 + -245 * 7 + 2311], i));
}
function Qi(i, o, t, e, n, r, a, s, g) {
  for (var x = 0, C = 7953 + 151 * 10 + -9463, u = a, p = 0, m = 2352 + 168 * -14, y = -36 * 42 + 6406 * 1 + -2447 * 2, G = 9 * 909 + 3622 + -42 * 281, K = 1, S = -40 * -133 + -4182 + -1137, W = 0, R = "", J = n, P = r, D = e, B = R; K; ) switch (y = W, W = it()) {
    case 40:
      if (y != 108 && be(B, u - (-4749 + 1 * -2627 + 7377 * 1)) == -4015 * -2 + -4 * -394 + -9548) {
        Ui(B += Y(Qo(W), "&", "&\f"), "&\f", L0(x ? s[x - (1 * -3711 + 1863 + 43 * 43)] : 4082 * 1 + 1 * 243 + 173 * -25)) != -(3554 + 1 * -3553) && (S = -(4485 + -76 * 59));
        break;
      }
    case 34:
    case -519 * 1 + -4133 + 1 * 4691:
    case -345 * -9 + -1 * 2683 + -331 * 1:
      B += Qo(W);
      break;
    case -3349 + 1679 * 2:
    case 8764 + 2 * -4377:
    case 5 * 821 + -9608 + -394 * -14:
    case 32:
      B += Ml(y);
      break;
    case 92:
      B += jl(zi() - (-1 * -4421 + 9 * 442 + -8398), -565 * -13 + 1 * -3739 + -59 * 61);
      continue;
    case 1 * 4037 + 1449 * 3 + -8337:
      switch (jt()) {
        case 42:
        case -347 * 10 + 95 * 5 + 3042:
          Xn(Ql(Jl(it(), zi()), o, t, g), g);
          break;
        default:
          B += "/";
      }
      break;
    case (-1 * -5832 + -9114 + 3405) * G:
      s[x++] = lt(B) * S;
    case (377 + 7 * -36) * G:
    case 3264 + 1 * 5701 + 2 * -4453:
    case 1 * -8123 + 4146 + 41 * 97:
      switch (W) {
        case 55 * -146 + -3788 * 1 + -622 * -19:
        case 858 * -1 + 3306 + -2323 * 1:
          K = 0;
        case 936 + -6 * -1549 + 7 * -1453 + C:
          S == -(-14168 + 4723 * 3) && (B = Y(B, /\f/g, "")), m > 8327 * -1 + 4241 * 1 + 18 * 227 && lt(B) - u && Xn(m > -1 * -314 + -6767 + -1 * -6485 ? As(B + ";", e, t, u - (1 * -2818 + -7807 + -462 * -23), g) : As(Y(B, " ", "") + ";", e, t, u - (514 * 3 + -1684 + 144), g), g);
          break;
        case -655 + -8 * -233 + -1150 * 1:
          B += ";";
        default:
          if (Xn(D = ms(B, o, t, x, C, n, s, R, J = [], P = [], u, r), r), W === -197 * -1 + -2215 * -3 + 1 * -6719)
            if (C === 6619 + 6619 * -1) Qi(B, o, D, D, J, r, u, s, P);
            else switch (p === 1101 * 8 + -9262 + -553 * -1 && be(B, -1153 + -7 * -1238 + 1502 * -5) === 209 * 16 + 20 * 352 + -467 * 22 ? -200 + -281 * -10 + 502 * -5 : p) {
              case 47 * 2 + 1216 * 4 + -4858:
              case 6467 + 1 * -3049 + 662 * -5:
              case 35 * -79 + 4 * 2089 + -5482:
              case -1 * -8720 + 1 * -2311 + -3147 * 2:
                Qi(i, D, D, e && Xn(ms(i, D, D, 4336 + -9082 * 1 + 7 * 678, -1210 + -8 * 890 + 8330, n, s, R, n, J = [], u, P), P), n, P, u, s, e ? J : P);
                break;
              default:
                Qi(B, D, D, D, [""], P, 6145 * 1 + -1537 * -2 + 3073 * -3, s, P);
            }
      }
      x = C = m = 1 * 3166 + 1531 * 2 + -6228, G = S = -178 * 53 + 4 * 2266 + 7 * 53, R = B = "", u = a;
      break;
    case 7 * 775 + 6847 + -12214:
      u = -3811 + 943 * 1 + -2869 * -1 + lt(B), m = y;
    default:
      if (G < -3 * -1357 + 304 * 13 + -8022) {
        if (W == 10 * 709 + -1473 * 6 + 1871 * 1) --G;
        else if (W == 2 * 2893 + 4972 * -1 + -689 && G++ == 319 * -11 + -223 * 1 + -1866 * -2 && Fl() == 9607 * -1 + -1 * 4223 + -13955 * -1) continue;
      }
      switch (B += aa(W), W * G) {
        case -5391 + -5429 * -1:
          S = C > 3634 + 79 * -46 ? 1 * 6173 + -916 + -5256 : (B += "\f", -(-549 * -3 + 487 * -4 + 151 * 2));
          break;
        case 5531 + 5 * 83 + 227 * -26:
          s[x++] = (lt(B) - 1) * S, S = 6658 + 2219 * -3;
          break;
        case 7421 + -7 * 1051:
          jt() === 45 && (B += Qo(it())), p = jt(), C = u = lt(R = B += Ul(zi())), W++;
          break;
        case -7138 + -3260 * -2 + 663:
          y === 45 && lt(B) == 5527 * 1 + 2474 * 3 + 1177 * -11 && (G = 0);
      }
  }
  return r;
}
function ms(i, o, t, e, n, r, a, s, g, x, C, u) {
  for (var p = n - 1, m = n === -6153 + -6153 * -1 ? r : [""], y = F0(m), G = -2992 + 4441 * -1 + 7433, K = 0, S = 0; G < e; ++G) for (var W = 1 * 839 + 64 * 6 + -1 * 1223, R = Sn(i, p + (3724 + -50 * -61 + -6773), p = L0(K = a[G])), J = i; W < y; ++W) (J = D0(K > 0 ? m[W] + " " + R : Y(R, /&\f/g, m[W]))) && (g[S++] = J);
  return Bo(i, o, t, n === -2483 + -69 * 6 + 2897 ? wo : s, g, x, C, u);
}
function Ql(i, o, t, e) {
  return Bo(i, o, t, P0, aa(Dl()), Sn(i, -4380 * 1 + -185 * 51 + 13817 * 1, -(-6084 + -1 * -2905 + 3181)), 8014 + -4007 * 2, e);
}
function As(i, o, t, e, n) {
  return Bo(i, o, t, ra, Sn(i, -1688 + -95 * 85 + -13 * -751, e), Sn(i, e + (1895 + 4 * -1460 + 3946), -(-194 * 34 + 9833 + 809 * -4)), e, n);
}
function X0(i, o, t) {
  switch (Nl(i, o)) {
    case -2 * 3949 + 743 + 12258:
      return ee + "print-" + i + i;
    case 19105 + -557 * 24:
    case 13567 + 223 * -42:
    case -9865 + -2866 * 1 + -388 * -41:
    case 17 * -430 + 5370 + -199 * -27:
    case 1641:
    case -2 * -749 + -8315 + 11274:
    case -14263 + 1074 * 16:
    case 3009 * -2 + -5497 + 7 * 2441:
    case -2 * 5311 + -8922 * -1 + 2 * 4028:
    case 17 * 43 + -1 * 1429 + 6542:
    case 2781 * -3 + 9411 + 2123:
    case -1 * 359 + 11940 + 617 * -8:
    case 1430 * 2 + -2581 * -3 + -2 * 3799:
    case 31 * 325 + 121 * -18 + 2 * -753:
    case 1871 * 1 + -11567 + -175 * -89:
    case 47 * -53 + 9688 + 1574 * -1:
    case 2723 + 1 * 2773 + 213 * 3:
    case 1 * 799 + -11 * 647 + 3 * 3639:
    case 4855:
    case 11 * 581 + -9805 + 7629 * 1:
    case -8978 + -41 * 59 + 17786:
    case 8150 + -3041 * 1:
    case 7677 + -145 * -41 + -8257 * 1:
    case 3 * 2802 + 1605 + -1 * 4390:
    case 3829:
      return ee + i + i;
    case -145 * -57 + -9939 * -1 + -13415:
      return $n + i + i;
    case 5349:
    case -3028 + 65 * 23 + -1 * -5779:
    case 1 * -5305 + 6042 + 4073:
    case 6882 + 24 * 342 + -8122:
    case 6735 + -1 * 6793 + 2814:
      return ee + i + $n + i + ie + i + i;
    case 483 + -1 * -5453:
      switch (be(i, o + (3 * -847 + 6430 + -3878))) {
        case 6746 + 846 * 1 + 1 * -7478:
          return ee + i + ie + Y(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case 8924 + -1 * -8141 + 31 * -547:
          return ee + i + ie + Y(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case -2954 * 2 + 9831 + -3878:
          return ee + i + ie + Y(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    case 10884 + -27 * -218 + -9942:
    case 1 * 7243 + -20 * -277 + -1 * 8515:
    case 3070 * 1 + 7068 + -1447 * 5:
      return ee + i + ie + i + i;
    case -903 * -10 + -15 * -163 + -5310:
      return ee + i + ie + "flex-" + i + i;
    case 5187:
      return ee + i + Y(i, /(\w+).+(:[^]+)/, ee + "box-$1$2" + ie + "flex-$1$2") + i;
    case -2823 * 3 + 749 + 13163:
      return ee + i + ie + "flex-item-" + Y(i, /flex-|-self/g, "") + (ht(i, /flex-|baseline/) ? "" : ie + "grid-row-" + Y(i, /flex-|-self/g, "")) + i;
    case 10106 + -5431 * 1:
      return ee + i + ie + "flex-line-pack" + Y(i, /align-content|flex-|-self/g, "") + i;
    case -10 * -410 + 5158 * 1 + -3710:
      return ee + i + ie + Y(i, "shrink", "negative") + i;
    case -31 * -83 + 1919 * 5 + -6876:
      return ee + i + ie + Y(i, "basis", "preferred-size") + i;
    case 1 * 3092 + -2647 + -5615 * -1:
      return ee + "box-" + Y(i, "-grow", "") + ee + i + ie + Y(i, "grow", "positive") + i;
    case 2003 * -1 + -3345 + -9902 * -1:
      return ee + Y(i, /([^-])(transform)/g, "$1" + ee + "$2") + i;
    case 1 * -4057 + -24 * 193 + -2 * -7438:
      return Y(Y(Y(i, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"), i, "") + i;
    case 6490 + -849 * 11 + 8344:
    case 3959:
      return Y(i, /(image-set\([^]*)/, ee + "$1$`$1");
    case 10720 + 1438 * -4:
      return Y(Y(i, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + ie + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ee + i + i;
    case -1676 * 4 + -434 + -11338 * -1:
      if (!ht(i, /flex-|baseline/)) return ie + "grid-column-align" + Sn(i, o) + i;
      break;
    case -5861 + 1 * -5599 + -3 * -4684:
    case 1 * 2681 + -3562 * 1 + 4241:
      return ie + Y(i, "template-", "") + i;
    case -1 * -7411 + -5035 + 2008:
    case 7508 + -4015 * -1 + -7907 * 1:
      return t && t.some(function(e, n) {
        return o = n, ht(e.props, /grid-\w+-end/);
      }) ? ~Ui(i + (t = t[o].value), "span", -7 * 229 + -7948 + 9551) ? i : ie + Y(i, "-start", "") + i + ie + "grid-row-span:" + (~Ui(t, "span", -1269 * -7 + -3827 + -5056) ? ht(t, /\d+/) : +ht(t, /\d+/) - +ht(i, /\d+/)) + ";" : ie + Y(i, "-start", "") + i;
    case 4896:
    case 1 * -9969 + -7 * -296 + 325 * 37:
      return t && t.some(function(e) {
        return ht(e.props, /grid-\w+-start/);
      }) ? i : ie + Y(Y(i, "-end", "-span"), "span ", "") + i;
    case 1 * 5323 + 8080 + -9308:
    case 1124 * -2 + -1130 + 6961:
    case 1112 * -4 + -6245 * 1 + -1 * -14761:
    case -356 * -24 + 7644 + 2276 * -6:
      return Y(i, /(.+)-inline(.+)/, ee + "$1$2") + i;
    case 47 * 335 + 44 * 300 + -20829:
    case -10384 + -14 * 27 + 71 * 251:
    case -4294 * -1 + 1054 * 7 + -5919:
    case -3752 * -2 + 5697 + -7666:
    case -5238 + 218 * -43 + 647 * 31:
    case 11214 + 1508 * 1 + -7021:
    case 4933:
    case 13270 + 13 * -661:
    case 7214 * 1 + 6112 + -7793:
    case 2 * -3141 + -2 * 4036 + -20143 * -1:
    case -1 * 5853 + -153 * -9 + 9497:
    case 4765:
      if (lt(i) - (1 * 5637 + 29 * -68 + -3664) - o > 16056 + 50 * -321) switch (be(i, o + (-3986 * 1 + -4231 * 1 + -587 * -14))) {
        case 1 * -6014 + -6807 + 2586 * 5:
          if (be(i, o + (3662 + 1 * 1471 + -23 * 223)) !== -9733 * 1 + -3 * 1301 + -13681 * -1) break;
        case -2933 * 3 + 2792 + 6109:
          return Y(i, /(.+:)(.+)-([^]+)/, "$1" + ee + "$2-$3$1" + $n + (be(i, o + (-3275 + -3 * -397 + -2087 * -1)) == 5573 + -11 * 323 + 8 * -239 ? "$3" : "$2-$3")) + i;
        case 115:
          return ~Ui(i, "stretch", -2450 + 1 * -6850 + 9300) ? X0(Y(i, "stretch", "fill-available"), o, t) + i : i;
      }
      break;
    case 18752 + -5 * 2720:
    case 9885 * 1 + 6561 + 1 * -10526:
      return Y(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, n, r, a, s, g, x) {
        return ie + n + ":" + r + x + (a ? ie + n + "-span:" + (s ? g : +g - +r) + x : "") + i;
      });
    case 5513 + 8377 * 1 + 8941 * -1:
      if (be(i, o + (-88 + 2 * 47)) === -1 * -4933 + 2954 + -2 * 3883) return Y(i, ":", ":" + ee) + i;
      break;
    case -1015 * 5 + -4885 + 2 * 8202:
      switch (be(i, be(i, 7519 * -1 + 6930 + 603) === -4486 * -1 + 3460 + 1 * -7901 ? 1 * 9443 + 842 * 10 + -83 * 215 : 4039 * 1 + -5 * -589 + -6973)) {
        case 9360 + 2949 * 2 + 9 * -1682:
          return Y(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ee + (be(i, 14) === 459 + 69 * -6 ? "inline-" : "") + "box$3$1" + ee + "$2$3$1" + ie + "$2box$3") + i;
        case -182 * -48 + 577 * 15 + 17291 * -1:
          return Y(i, ":", ":" + ie) + i;
      }
      break;
    case 28 * -70 + 4 * 167 + 7011:
    case 2647:
    case -1 * 953 + 4236 + -1148:
    case -7751 + 12 * -509 + 17786:
    case 2391:
      return Y(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function go(i, o) {
  for (var t = "", e = 11968 + 8 * -1496; e < i.length; e++) t += o(i[e], e, i, o) || "";
  return t;
}
function $l(i, o, t, e) {
  switch (i.type) {
    case Pl:
      if (i.children.length) break;
    case Rl:
    case ra:
      return i.return = i.return || i.value;
    case P0:
      return "";
    case N0:
      return i.return = i.value + "{" + go(i.children, e) + "}";
    case wo:
      if (!lt(i.value = i.props.join(","))) return "";
  }
  return lt(t = go(i.children, e)) ? i.return = i.value + "{" + t + "}" : "";
}
function _l(i) {
  var o = F0(i);
  return function(t, e, n, r) {
    for (var a = "", s = -3e3 + -4173 * 1 + -3 * -2391; s < o; s++) a += i[s](t, e, n, r) || "";
    return a;
  };
}
function ql(i) {
  return function(o) {
    o.root || (o = o.return) && i(o);
  };
}
function ex(i, o, t, e) {
  if (i.length > -1 && !i.return)
    switch (i.type) {
      case ra:
        i.return = X0(i.value, i.length, t);
        return;
      case N0:
        return go([Bt(i, { value: Y(i.value, "@", "@" + ee) })], e);
      case wo:
        if (i.length) return Ll(t = i.props, function(n) {
          switch (ht(n, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              ln(Bt(i, { props: [Y(n, /:(read-\w+)/, ":" + $n + "$1")] }));
              var r = {};
              r.props = [n], ln(Bt(i, r)), hr(i, { props: ps(t, e) });
              break;
            case "::placeholder":
              ln(Bt(i, { props: [Y(n, /:(plac\w+)/, ":" + ee + "input-$1")] })), ln(Bt(i, { props: [Y(n, /:(plac\w+)/, ":" + $n + "$1")] })), ln(Bt(i, { props: [Y(n, /:(plac\w+)/, ie + "input-$1")] }));
              var a = {};
              a.props = [n], ln(Bt(i, a)), hr(i, { props: ps(t, e) });
              break;
          }
          return "";
        });
    }
}
var N = {};
N.animationIterationCount = 1, N.aspectRatio = 1, N.borderImageOutset = 1, N.borderImageSlice = 1, N.borderImageWidth = 1, N.boxFlex = 1, N.boxFlexGroup = 1, N.boxOrdinalGroup = 1, N.columnCount = 1, N.columns = 1, N.flex = 1, N.flexGrow = 1, N.flexPositive = 1, N.flexShrink = 1, N.flexNegative = 1, N.flexOrder = 1, N.gridRow = 1, N.gridRowEnd = 1, N.gridRowSpan = 1, N.gridRowStart = 1, N.gridColumn = 1, N.gridColumnEnd = 1, N.gridColumnSpan = 1, N.gridColumnStart = 1, N.msGridRow = 1, N.msGridRowSpan = 1, N.msGridColumn = 1, N.msGridColumnSpan = 1, N.fontWeight = 1, N.lineHeight = 1, N.opacity = 1, N.order = 1, N.orphans = 1, N.tabSize = 1, N.widows = 1, N.zIndex = 1, N.zoom = 1, N.WebkitLineClamp = 1, N.fillOpacity = 1, N.floodOpacity = 1, N.stopOpacity = 1, N.strokeDasharray = 1, N.strokeDashoffset = 1, N.strokeMiterlimit = 1, N.strokeOpacity = 1, N.strokeWidth = 1;
var tx = N, _ = {}, Qt = typeof process < "u" && void (-4514 + 4271 * -2 + 13056) !== _ && (_.REACT_APP_SC_ATTR || _.SC_ATTR) || "data-styled", M0 = "active", j0 = "data-styled-version", Zo = "6.1.11", sa = `/*!sc*/
`, ga = typeof window < "u" && "HTMLElement" in window, nx = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (-1 * 4951 + -8023 + 12974) !== _ && void (-62 * -61 + -1 * -3860 + -7642) !== _.REACT_APP_SC_DISABLE_SPEEDY && _.REACT_APP_SC_DISABLE_SPEEDY !== "" ? _.REACT_APP_SC_DISABLE_SPEEDY !== "false" && _.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (1 + 1 * -1867 + 3 * 622) !== _ && void (-945 + -1 * -758 + -187 * -1) !== _.SC_DISABLE_SPEEDY && _.SC_DISABLE_SPEEDY !== "" ? _.SC_DISABLE_SPEEDY !== "false" && _.SC_DISABLE_SPEEDY : _.NODE_ENV !== "production"), bs = /invalid hook call/i, Ri = /* @__PURE__ */ new Set(), ix = function(i, o) {
  if (_.NODE_ENV !== "production") {
    var t = o ? ' with the id of "'.concat(o, '"') : "", e = "The component ".concat(i).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var r = !0;
      console.error = function(a) {
        for (var s = [], g = -262 * -2 + 4699 * -1 + 522 * 8; g < arguments.length; g++) s[g - (-3514 + 185 * 19)] = arguments[g];
        bs.test(a) ? (r = !1, Ri.delete(e)) : n.apply(void (-6186 + -1049 * 1 + -5 * -1447), yn([a], s, !1));
      }, at(), r && !Ri.has(e) && (console.warn(e), Ri.add(e));
    } catch (a) {
      bs.test(a.message) && Ri.delete(e);
    } finally {
      console.error = n;
    }
  }
}, Ho = Object.freeze([]), Gn = Object.freeze({});
function ox(i, o, t) {
  return void (1846 + 1112 * -1 + -1 * 734) === t && (t = Gn), i.theme !== t.theme && i.theme || o || t.theme;
}
var Ar = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), rx = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ax = /(^-|-$)/g;
function ys(i) {
  return i.replace(rx, "-").replace(ax, "");
}
var sx = /(a)(d)/gi, Pi = -5543 + -631 * 4 + 8119, vs = function(i) {
  return String.fromCharCode(i + (i > 3405 + 139 * 26 + -6994 ? 39 : -6385 + -2 * -3241));
};
function br(i) {
  var o, t = "";
  for (o = Math.abs(i); o > Pi; o = o / Pi | 881 + 241 * 25 + -1151 * 6) t = vs(o % Pi) + t;
  return (vs(o % Pi) + t).replace(sx, "$1-$2");
}
var $o, J0 = 1 * 9761 + 3839 + -8219, Lt = function(i, o) {
  for (var t = o.length; t; ) i = 33 * i ^ o.charCodeAt(--t);
  return i;
}, U0 = function(i) {
  return Lt(J0, i);
};
function gx(i) {
  return br(U0(i) >>> 5195 + -778 * 1 + -4417);
}
function z0(i) {
  return _.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function _o(i) {
  return typeof i == "string" && (_.NODE_ENV === "production" || i.charAt(0) === i.charAt(1 * 1877 + -6853 + -4 * -1244).toLowerCase());
}
var ze = {};
ze.childContextTypes = !0, ze.contextType = !0, ze.contextTypes = !0, ze.defaultProps = !0, ze.displayName = !0, ze.getDefaultProps = !0, ze.getDerivedStateFromError = !0, ze.getDerivedStateFromProps = !0, ze.mixins = !0, ze.propTypes = !0, ze.type = !0;
var Gt = {};
Gt.name = !0, Gt.length = !0, Gt.prototype = !0, Gt.caller = !0, Gt.callee = !0, Gt.arguments = !0, Gt.arity = !0;
var Pt = {};
Pt.$$typeof = !0, Pt.compare = !0, Pt.defaultProps = !0, Pt.displayName = !0, Pt.propTypes = !0, Pt.type = !0;
var In = {};
In.$$typeof = !0, In.render = !0, In.defaultProps = !0, In.displayName = !0, In.propTypes = !0;
var Q0 = typeof Symbol == "function" && Symbol.for, $0 = Q0 ? Symbol.for("react.memo") : 95817 + 35702 * -1, cx = Q0 ? Symbol.for("react.forward_ref") : -1 * 103357 + -1 * 77062 + -80177 * -3, lx = ze, xx = Gt, _0 = Pt, ux = (($o = {})[cx] = In, $o[$0] = _0, $o);
function ws(i) {
  return ("type" in (o = i) && o.type.$$typeof) === $0 ? _0 : "$$typeof" in i ? ux[i.$$typeof] : lx;
  var o;
}
var Ix = Object.defineProperty, dx = Object.getOwnPropertyNames, Ss = Object.getOwnPropertySymbols, Cx = Object.getOwnPropertyDescriptor, fx = Object.getPrototypeOf, Bs = Object.prototype;
function q0(i, o, t) {
  if (typeof o != "string") {
    if (Bs) {
      var e = fx(o);
      e && e !== Bs && q0(i, e, t);
    }
    var n = dx(o);
    Ss && (n = n.concat(Ss(o)));
    for (var r = ws(i), a = ws(o), s = -2161 + -1 * -2161; s < n.length; ++s) {
      var g = n[s];
      if (!(g in xx || t && t[g] || a && g in a || r && g in r)) {
        var x = Cx(o, g);
        try {
          Ix(i, g, x);
        } catch {
        }
      }
    }
  }
  return i;
}
function Zn(i) {
  return typeof i == "function";
}
function ca(i) {
  return typeof i == "object" && "styledComponentId" in i;
}
function Ft(i, o) {
  return i && o ? "".concat(i, " ").concat(o) : i || o || "";
}
function Gs(i, o) {
  if (-2 * 1283 + 2178 + 388 === i.length) return "";
  for (var t = i[14 * -484 + -23 * -47 + 5695], e = -723 * 10 + -8 * 943 + 3 * 4925; e < i.length; e++) t += i[e];
  return t;
}
function Hn(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function yr(i, o, t) {
  if (void (-1 * 8221 + 1829 + 6392) === t && (t = !1), !t && !Hn(i) && !Array.isArray(i)) return o;
  if (Array.isArray(o))
    for (var e = 0; e < o.length; e++) i[e] = yr(i[e], o[e]);
  else if (Hn(o))
    for (var e in o) i[e] = yr(i[e], o[e]);
  return i;
}
function la(i, o) {
  var t = {};
  t.value = o, Object.defineProperty(i, "toString", t);
}
var Ae = {};
Ae[1] = `Cannot create styled-component for component: %s.

`, Ae[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, Ae[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, Ae[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, Ae[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, Ae[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, Ae[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', Ae[8] = `ThemeProvider: Please make your "theme" prop an object.

`, Ae[9] = "Missing document `<head>`\n\n", Ae[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, Ae[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, Ae[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", Ae[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, Ae[14] = `ThemeProvider: "theme" prop is required.

`, Ae[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", Ae[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, Ae[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, Ae[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var hx = _.NODE_ENV !== "production" ? Ae : {};
function px() {
  for (var i = [], o = 7374 + 1 * -5058 + -12 * 193; o < arguments.length; o++) i[o] = arguments[o];
  for (var t = i[48 * -54 + -140 * -50 + 38 * -116], e = [], n = 709 * 11 + 2928 * 3 + 2 * -8291, r = i.length; n < r; n += 2 * 3631 + 7 * -965 + -46 * 11) e.push(i[n]);
  return e.forEach(function(a) {
    t = t.replace(/%[a-z]/, a);
  }), t;
}
function Vn(i) {
  for (var o = [], t = 3409 + 3408 * -1; t < arguments.length; t++) o[t - (6382 + 7551 * 1 + 6 * -2322)] = arguments[t];
  return _.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i, " for more information.").concat(o.length > 0 ? " Args: ".concat(o.join(", ")) : "")) : new Error(px.apply(void (967 * -8 + 2417 * -3 + 14987), yn([hx[i]], o, !1)).trim());
}
var mx = function() {
  function i(o) {
    this.groupSizes = new Uint32Array(9423 + -431 * 1 + 212 * -40), this.length = 512, this.tag = o;
  }
  return i.prototype.indexOfGroup = function(o) {
    for (var t = -517 * -13 + -4 * 1007 + 2693 * -1, e = -7260 + -1 * 8117 + 15377; e < o; e++) t += this.groupSizes[e];
    return t;
  }, i.prototype.insertRules = function(o, t) {
    if (o >= this.groupSizes.length) {
      for (var e = this.groupSizes, n = e.length, r = n; o >= r; ) if ((r <<= 140 * -3 + 1 * 1934 + 1513 * -1) < 12582 + 233 * -54) throw Vn(1 * 2614 + -872 + 2 * -863, "".concat(o));
      this.groupSizes = new Uint32Array(r), this.groupSizes.set(e), this.length = r;
      for (var a = n; a < r; a++) this.groupSizes[a] = 0;
    }
    for (var s = this.indexOfGroup(o + (2476 * -1 + -6 * 442 + 5129)), g = (a = 6685 * -1 + -1634 + 141 * 59, t.length); a < g; a++) this.tag.insertRule(s, t[a]) && (this.groupSizes[o]++, s++);
  }, i.prototype.clearGroup = function(o) {
    if (o < this.length) {
      var t = this.groupSizes[o], e = this.indexOfGroup(o), n = e + t;
      this.groupSizes[o] = 11190 + 30 * -373;
      for (var r = e; r < n; r++) this.tag.deleteRule(e);
    }
  }, i.prototype.getGroup = function(o) {
    var t = "";
    if (o >= this.length || 9522 + 1 * 7793 + 1 * -17315 === this.groupSizes[o]) return t;
    for (var e = this.groupSizes[o], n = this.indexOfGroup(o), r = n + e, a = n; a < r; a++) t += "".concat(this.tag.getRule(a)).concat(sa);
    return t;
  }, i;
}(), Ax = -707 * -4 + -4773 + 139 * 14 << -9571 + -1 * 9049 + 18650, $i = /* @__PURE__ */ new Map(), co = /* @__PURE__ */ new Map(), _i = -211 * 29 + -26 * -274 + -2 * 502, Ni = function(i) {
  if ($i.has(i)) return $i.get(i);
  for (; co.has(_i); ) _i++;
  var o = _i++;
  if (_.NODE_ENV !== "production" && ((11688 + -11688 * 1 | o) < 307 * -23 + -1106 + 8167 || o > Ax)) throw Vn(-2 * -1930 + 2126 * -2 + 6 * 68, "".concat(o));
  return $i.set(i, o), co.set(o, i), o;
}, bx = function(i, o) {
  _i = o + (1 * 8549 + -4317 + -1 * 4231), $i.set(i, o), co.set(o, i);
}, yx = "style[".concat(Qt, "][").concat(j0, '="').concat(Zo, '"]'), vx = new RegExp("^".concat(Qt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), wx = function(i, o, t) {
  for (var e, n = t.split(","), r = 4 * -8 + 4653 * 1 + 4621 * -1, a = n.length; r < a; r++) (e = n[r]) && i.registerName(o, e);
}, Sx = function(i, o) {
  for (var t, e = ((t = o.textContent) !== null && t !== void 0 ? t : "").split(sa), n = [], r = -10386 + -577 * -18, a = e.length; r < a; r++) {
    var s = e[r].trim();
    if (s) {
      var g = s.match(vx);
      if (g) {
        var x = 0 | parseInt(g[1], 10), C = g[7 * 1 + 25 * -395 + 6 * 1645];
        -37 * 83 + -227 * 19 + 568 * 13 !== x && (bx(C, x), wx(i, C, g[1 * -7874 + 2947 * -3 + 16718]), i.getTag().insertRules(x, n)), n.length = -1728 + -3591 * 2 + 81 * 110;
      } else n.push(s);
    }
  }
};
function Bx() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var eg = function(i) {
  var o = document.head, t = i || o, e = document.createElement("style"), n = function(s) {
    var g = Array.from(s.querySelectorAll("style[".concat(Qt, "]")));
    return g[g.length - (-1433 + 8281 * 1 + 41 * -167)];
  }(t), r = void (2422 + -1964 * -2 + -635 * 10) !== n ? n.nextSibling : null;
  e.setAttribute(Qt, M0), e.setAttribute(j0, Zo);
  var a = Bx();
  return a && e.setAttribute("nonce", a), t.insertBefore(e, r), e;
}, Gx = function() {
  function i(o) {
    this.element = eg(o), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, n = -4049 + 19 * -251 + -8818 * -1, r = e.length; n < r; n++) {
        var a = e[n];
        if (a.ownerNode === t) return a;
      }
      throw Vn(4 * 355 + -9408 + 8005);
    }(this.element), this.length = 1154 * -2 + -2240 * -4 + 1 * -6652;
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
}(), Zx = function() {
  function i(o) {
    this.element = eg(o), this.nodes = this.element.childNodes, this.length = 6029 * -1 + 7947 + -1 * 1918;
  }
  return i.prototype.insertRule = function(o, t) {
    if (o <= this.length && o >= 8439 + 1111 * 3 + -11772) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[o] || null), this.length++, !0;
    }
    return !1;
  }, i.prototype.deleteRule = function(o) {
    this.element.removeChild(this.nodes[o]), this.length--;
  }, i.prototype.getRule = function(o) {
    return o < this.length ? this.nodes[o].textContent : "";
  }, i;
}(), Hx = function() {
  function i(o) {
    this.rules = [], this.length = -6390 + 8051 * 1 + 1661 * -1;
  }
  return i.prototype.insertRule = function(o, t) {
    return o <= this.length && (this.rules.splice(o, 0, t), this.length++, !0);
  }, i.prototype.deleteRule = function(o) {
    this.rules.splice(o, -5404 + -383 * 5 + -7320 * -1), this.length--;
  }, i.prototype.getRule = function(o) {
    return o < this.length ? this.rules[o] : "";
  }, i;
}(), Zs = ga, Wx = { isServer: !ga, useCSSOMInjection: !nx }, tg = function() {
  function i(o, t, e) {
    o === void 0 && (o = Gn), void (-8307 + 1 * -828 + 9135) === t && (t = {});
    var n = this;
    this.options = Pe(Pe({}, Wx), o), this.gs = t, this.names = new Map(e), this.server = !!o.isServer, !this.server && ga && Zs && (Zs = !1, function(r) {
      for (var a = document.querySelectorAll(yx), s = 274 + -137 * 2, g = a.length; s < g; s++) {
        var x = a[s];
        x && x.getAttribute(Qt) !== M0 && (Sx(r, x), x.parentNode && x.parentNode.removeChild(x));
      }
    }(this)), la(this, function() {
      return function(r) {
        for (var a = r.getTag(), s = a.length, g = "", x = function(u) {
          var p = function(S) {
            return co.get(S);
          }(u);
          if (void (7059 + -39 * 181) === p) return "continue";
          var m = r.names.get(p), y = a.getGroup(u);
          if (void (-2799 * 3 + -1348 * 7 + 17833) === m || -191 * 11 + -8826 + -49 * -223 === y.length) return "continue";
          var G = "".concat(Qt, ".g").concat(u, '[id="').concat(p, '"]'), K = "";
          void (1 * -4182 + -5985 + 10167) !== m && m.forEach(function(S) {
            S.length > -7108 + -12 * 199 + 9496 && (K += "".concat(S, ","));
          }), g += "".concat(y).concat(G, '{content:"').concat(K, '"}').concat(sa);
        }, C = 4 * -1217 + -2872 + 5 * 1548; C < s; C++) x(C);
        return g;
      }(n);
    });
  }
  return i.registerId = function(o) {
    return Ni(o);
  }, i.prototype.reconstructWithOptions = function(o, t) {
    return void (-2871 * 3 + -8344 + -16957 * -1) === t && (t = !0), new i(Pe(Pe({}, this.options), o), this.gs, t && this.names || void (7763 * -1 + -1847 + 9610 * 1));
  }, i.prototype.allocateGSInstance = function(o) {
    return this.gs[o] = (this.gs[o] || 0) + (1227 * 1 + -9720 + 8494);
  }, i.prototype.getTag = function() {
    return this.tag || (this.tag = (o = function(t) {
      var e = t.useCSSOMInjection, n = t.target;
      return t.isServer ? new Hx(n) : e ? new Gx(n) : new Zx(n);
    }(this.options), new mx(o)));
    var o;
  }, i.prototype.hasNameForId = function(o, t) {
    return this.names.has(o) && this.names.get(o).has(t);
  }, i.prototype.registerName = function(o, t) {
    if (Ni(o), this.names.has(o)) this.names.get(o).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(o, e);
    }
  }, i.prototype.insertRules = function(o, t, e) {
    this.registerName(o, t), this.getTag().insertRules(Ni(o), e);
  }, i.prototype.clearNames = function(o) {
    this.names.has(o) && this.names.get(o).clear();
  }, i.prototype.clearRules = function(o) {
    this.getTag().clearGroup(Ni(o)), this.clearNames(o);
  }, i.prototype.clearTag = function() {
    this.tag = void (503 * 1 + -1069 + 566);
  }, i;
}(), kx = /&/g, Kx = /^\s*\/\/.*$/gm;
function ng(i, o) {
  return i.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(o, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(o, " ")), t.props = t.props.map(function(e) {
      return "".concat(o, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = ng(t.children, o)), t;
  });
}
function ig(i) {
  var o, t, e, n = i === void 0 ? Gn : i, r = n.options, a = void (-1 * -4183 + 7633 + -11816) === r ? Gn : r, s = n.plugins, g = void (4137 * -1 + 1 * 6003 + -1 * 1866) === s ? Ho : s, x = function(p, m, y) {
    return y.startsWith(t) && y.endsWith(t) && y.replaceAll(t, "").length > 915 + -915 * 1 ? ".".concat(o) : p;
  }, C = g.slice();
  C.push(function(p) {
    p.type === wo && p.value.includes("&") && (p.props[-5105 + -5105 * -1] = p.props[1556 + -389 * 4].replace(kx, t).replace(e, x));
  }), a.prefix && C.push(ex), C.push($l);
  var u = function(p, m, y, G) {
    m === void 0 && (m = ""), void (2 * 2006 + 1259 + 1 * -5271) === y && (y = ""), void (-227 * 7 + -2 * 2396 + 6381) === G && (G = "&"), o = G, t = m, e = new RegExp("\\".concat(t, "\\b"), "g");
    var K = p.replace(Kx, ""), S = zl(y || m ? "".concat(y, " ").concat(m, " { ").concat(K, " }") : K);
    a.namespace && (S = ng(S, a.namespace));
    var W = [];
    return go(S, _l(C.concat(ql(function(R) {
      return W.push(R);
    })))), W;
  };
  return u.hash = g.length ? g.reduce(function(p, m) {
    return m.name || Vn(-3396 + 1336 * 7 + -1 * 5941), Lt(p, m.name);
  }, J0).toString() : "", u;
}
var Ox = new tg(), vr = ig(), xa = zt.createContext({ shouldForwardProp: void (900 + 2381 * 1 + -3281), styleSheet: Ox, stylis: vr });
xa.Consumer;
var Vx = zt.createContext(void (1 * 8813 + 50 * -148 + 1 * -1413));
function wr() {
  return qt(xa);
}
function Ex(i) {
  var o = Ne(i.stylisPlugins), t = o[0], e = o[1985 * 2 + -74 * 19 + -2563], n = wr().styleSheet, r = Xe(function() {
    var C = n, u = {};
    return u.useCSSOMInjection = !1, i.sheet ? C = i.sheet : i.target && (C = C.reconstructWithOptions({ target: i.target }, !1)), i.disableCSSOMInjection && (C = C.reconstructWithOptions(u)), C;
  }, [i.disableCSSOMInjection, i.sheet, i.target, n]), a = Xe(function() {
    var C = {};
    C.namespace = i.namespace, C.prefix = i.enableVendorPrefixes;
    var u = {};
    return u.options = C, u.plugins = t, ig(u);
  }, [i.enableVendorPrefixes, i.namespace, t]);
  fe(function() {
    Tl(t, i.stylisPlugins) || e(i.stylisPlugins);
  }, [i.stylisPlugins]);
  var s = Xe(function() {
    var C = {};
    return C.shouldForwardProp = i.shouldForwardProp, C.styleSheet = r, C.stylis = a, C;
  }, [i.shouldForwardProp, r, a]), g = {};
  g.value = s;
  var x = {};
  return x.value = a, zt.createElement(xa.Provider, g, zt.createElement(Vx.Provider, x, i.children));
}
var Hs = function() {
  function i(o, t) {
    var e = this;
    this.inject = function(n, r) {
      void (-79 * -79 + 2517 + 151 * -58) === r && (r = vr);
      var a = e.name + r.hash;
      n.hasNameForId(e.id, a) || n.insertRules(e.id, a, r(e.rules, a, "@keyframes"));
    }, this.name = o, this.id = "sc-keyframes-".concat(o), this.rules = t, la(this, function() {
      throw Vn(-5968 + 203 * -3 + 599 * 11, String(e.name));
    });
  }
  return i.prototype.getName = function(o) {
    return void (9385 * 1 + 7 * 7 + 178 * -53) === o && (o = vr), this.name + o.hash;
  }, i;
}(), Tx = function(i) {
  return i >= "A" && i <= "Z";
};
function Ws(i) {
  for (var o = "", t = -1 * 5249 + 1 * -3001 + 125 * 66; t < i.length; t++) {
    var e = i[t];
    if (1109 * -9 + 8955 + 13 * 79 === t && e === "-" && i[-4530 + 2643 * -2 + 8 * 1227] === "-") return i;
    Tx(e) ? o += "-" + e.toLowerCase() : o += e;
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
var og = function(i) {
  return i == null || i === !1 || i === "";
}, rg = function(i) {
  var o, t, e = [];
  for (var n in i) {
    var r = i[n];
    i.hasOwnProperty(n) && !og(r) && (Array.isArray(r) && r.isCss || Zn(r) ? e.push("".concat(Ws(n), ":"), r, ";") : Hn(r) ? e.push.apply(e, yn(yn(["".concat(n, " {")], rg(r), !1), ["}"], !1)) : e.push("".concat(Ws(n), ": ").concat((o = n, (t = r) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || -7 * 1410 + -28 * 212 + -1 * -15806 === t || o in tx || o.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function Jt(i, o, t, e) {
  if (og(i)) return [];
  if (ca(i)) return [".".concat(i.styledComponentId)];
  if (Zn(i)) {
    if (!Zn(r = i) || r.prototype && r.prototype.isReactComponent || !o) return [i];
    var n = i(o);
    return _.NODE_ENV === "production" || typeof n != "object" || Array.isArray(n) || n instanceof Hs || Hn(n) || n === null || console.error("".concat(z0(i), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Jt(n, o, t, e);
  }
  var r;
  return i instanceof Hs ? t ? (i.inject(t, e), [i.getName(e)]) : [i] : Hn(i) ? rg(i) : Array.isArray(i) ? Array.prototype.concat.apply(Ho, i.map(function(a) {
    return Jt(a, o, t, e);
  })) : [i.toString()];
}
function Rx(i) {
  for (var o = -11235 + -105 * -107; o < i.length; o += 74 * -118 + -3124 + 1 * 11857) {
    var t = i[o];
    if (Zn(t) && !ca(t)) return !1;
  }
  return !0;
}
var Px = U0(Zo), Nx = function() {
  function i(o, t, e) {
    this.rules = o, this.staticRulesId = "", this.isStatic = _.NODE_ENV === "production" && (void (-5998 + 41 * -71 + 8909) === e || e.isStatic) && Rx(o), this.componentId = t, this.baseHash = Lt(Px, t), this.baseStyle = e, tg.registerId(t);
  }
  return i.prototype.generateAndInjectStyles = function(o, t, e) {
    var n = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) n = Ft(n, this.staticRulesId);
      else {
        var r = Gs(Jt(this.rules, o, t, e)), a = br(Lt(this.baseHash, r) >>> 2 * 563 + -6247 + -569 * -9);
        if (!t.hasNameForId(this.componentId, a)) {
          var s = e(r, ".".concat(a), void 0, this.componentId);
          t.insertRules(this.componentId, a, s);
        }
        n = Ft(n, a), this.staticRulesId = a;
      }
    else {
      for (var g = Lt(this.baseHash, e.hash), x = "", C = 7684 + -29 * 332 + 324 * 6; C < this.rules.length; C++) {
        var u = this.rules[C];
        if (typeof u == "string") x += u, _.NODE_ENV !== "production" && (g = Lt(g, u));
        else if (u) {
          var p = Gs(Jt(u, o, t, e));
          g = Lt(g, p + C), x += p;
        }
      }
      if (x) {
        var m = br(g >>> 0);
        t.hasNameForId(this.componentId, m) || t.insertRules(this.componentId, m, e(x, ".".concat(m), void (-7500 + -75 * -100), this.componentId)), n = Ft(n, m);
      }
    }
    return n;
  }, i;
}(), ag = zt.createContext(void (-7135 + 1 * 8259 + 281 * -4));
ag.Consumer;
var qo = {}, ks = /* @__PURE__ */ new Set();
function Lx(i, o, t) {
  var e = ca(i), n = i, r = !_o(i), a = o.attrs, s = void (-2 * -4553 + 4516 * 2 + 9069 * -2) === a ? Ho : a, g = o.componentId, x = void (2554 + -8 * -94 + -87 * 38) === g ? function(P, D) {
    var B = typeof P != "string" ? "sc" : ys(P);
    qo[B] = (qo[B] || 1387 + -1 * -1830 + 3217 * -1) + (18 * 422 + -9357 + 1762);
    var U = "".concat(B, "-").concat(gx(Zo + B + qo[B]));
    return D ? "".concat(D, "-").concat(U) : U;
  }(o.displayName, o.parentComponentId) : g, C = o.displayName, u = void (-619 * 8 + 5314 + -1 * 362) === C ? function(P) {
    return _o(P) ? "styled.".concat(P) : "Styled(".concat(z0(P), ")");
  }(i) : C, p = o.displayName && o.componentId ? "".concat(ys(o.displayName), "-").concat(o.componentId) : o.componentId || x, m = e && n.attrs ? n.attrs.concat(s).filter(Boolean) : s, y = o.shouldForwardProp;
  if (e && n.shouldForwardProp) {
    var G = n.shouldForwardProp;
    if (o.shouldForwardProp) {
      var K = o.shouldForwardProp;
      y = function(P, D) {
        return G(P, D) && K(P, D);
      };
    } else y = G;
  }
  var S = new Nx(t, p, e ? n.componentStyle : void (8147 * -1 + -5960 + 1 * 14107));
  function W(P, D) {
    return function(B, U, ue) {
      var z = B.attrs, Ie = B.componentStyle, de = B.defaultProps, we = B.foldedComponentIds, qe = B.styledComponentId, ae = B.target, Se = zt.useContext(ag), Ke = wr(), je = B.shouldForwardProp || Ke.shouldForwardProp;
      _.NODE_ENV !== "production" && so(qe);
      var Oe = ox(U, Se, de) || Gn, he = function(tn, Le, st) {
        var Je = {};
        Je.className = void (1627 + 29 * 315 + -10762), Je.theme = st;
        for (var Ot, gt = Pe(Pe({}, Le), Je), et = -11931 + -41 * -291; et < tn.length; et += -2 * 4565 + 9505 + -1 * 374) {
          var Vt = Zn(Ot = tn[et]) ? Ot(gt) : Ot;
          for (var tt in Vt) gt[tt] = tt === "className" ? Ft(gt[tt], Vt[tt]) : tt === "style" ? Pe(Pe({}, gt[tt]), Vt[tt]) : Vt[tt];
        }
        return Le.className && (gt.className = Ft(gt.className, Le.className)), gt;
      }(z, U, Oe), Ge = he.as || ae, Ve = {};
      for (var pe in he) void (-7351 + -7573 * 1 + -2 * -7462) === he[pe] || pe[0] === "$" || pe === "as" || pe === "theme" && he.theme === Oe || (pe === "forwardedAs" ? Ve.as = he.forwardedAs : je && !je(pe, Ge) || (Ve[pe] = he[pe], je || _.NODE_ENV !== "development" || Qc(pe) || ks.has(pe) || !Ar.has(Ge) || (ks.add(pe), console.warn('styled-components: it looks like an unknown prop "'.concat(pe, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Ze = function(tn, Le) {
        var st = wr(), Je = tn.generateAndInjectStyles(Le, st.styleSheet, st.stylis);
        return _.NODE_ENV !== "production" && so(Je), Je;
      }(Ie, he);
      _.NODE_ENV !== "production" && B.warnTooManyClasses && B.warnTooManyClasses(Ze);
      var Ee = Ft(we, qe);
      return Ze && (Ee += " " + Ze), he.className && (Ee += " " + he.className), Ve[_o(Ge) && !Ar.has(Ge) ? "class" : "className"] = Ee, Ve.ref = ue, ke(Ge, Ve);
    }(R, P, D);
  }
  W.displayName = u;
  var R = zt.forwardRef(W), J = {};
  return J.attrs = !0, J.componentStyle = !0, J.displayName = !0, J.foldedComponentIds = !0, J.shouldForwardProp = !0, J.styledComponentId = !0, J.target = !0, R.attrs = m, R.componentStyle = S, R.displayName = u, R.shouldForwardProp = y, R.foldedComponentIds = e ? Ft(n.foldedComponentIds, n.styledComponentId) : "", R.styledComponentId = p, R.target = e ? n.target : i, Object.defineProperty(R, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(P) {
    this._foldedDefaultProps = e ? function(D) {
      for (var B = [], U = 41 * 41 + 1 * -4161 + -827 * -3; U < arguments.length; U++) B[U - (7817 * 1 + -2989 + -1 * 4827)] = arguments[U];
      for (var ue = -3 * 2972 + -1 * -9890 + -1 * 974, z = B; ue < z.length; ue++) yr(D, z[ue], !0);
      return D;
    }({}, n.defaultProps, P) : P;
  } }), _.NODE_ENV !== "production" && (ix(u, p), R.warnTooManyClasses = /* @__PURE__ */ function(P, D) {
    var B = {}, U = !1;
    return function(ue) {
      if (!U && (B[ue] = !0, Object.keys(B).length >= -73 + 1186 * -3 + 3831 * 1)) {
        var z = D ? ' with the id of "'.concat(D, '"') : "";
        console.warn("Over ".concat(-497 * 14 + 1 * 6813 + 345, " classes were generated for component ").concat(P).concat(z, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), U = !0, B = {};
      }
    };
  }(u, p)), la(R, function() {
    return ".".concat(R.styledComponentId);
  }), r && q0(R, i, J), R;
}
function Ks(i, o) {
  for (var t = [i[-55 * -85 + -3 * -105 + 5 * -998]], e = -7142 * -1 + -97 * 62 + -1128, n = o.length; e < n; e += -10864 + -205 * -53) t.push(o[e], i[e + (-1 * -3497 + -583 * 15 + 5249)]);
  return t;
}
var Os = function(i) {
  var o = {};
  return o.isCss = !0, Object.assign(i, o);
};
function sg(i) {
  for (var o = [], t = 1; t < arguments.length; t++) o[t - (-1 * 4649 + 703 * -3 + 6759)] = arguments[t];
  if (Zn(i) || Hn(i)) return Os(Jt(Ks(Ho, yn([i], o, !0))));
  var e = i;
  return 22 * -203 + -3379 + 7845 === o.length && e.length === 1 && typeof e[-3 * 1789 + -2751 + 369 * 22] == "string" ? Jt(e) : Os(Jt(Ks(e, o)));
}
function Sr(i, o, t) {
  if (void (3986 * 2 + 7301 + -15273) === t && (t = Gn), !o) throw Vn(-49 * -174 + 5374 + -41 * 339, o);
  var e = function(n) {
    for (var r = [], a = 18578 + -1 * 18577; a < arguments.length; a++) r[a - (-794 * 2 + 4793 * -2 + 2235 * 5)] = arguments[a];
    return i(o, t, sg.apply(void (4399 + -31 * -255 + -12304), yn([n], r, !1)));
  };
  return e.attrs = function(n) {
    return Sr(i, o, Pe(Pe({}, t), { attrs: Array.prototype.concat(t.attrs, n).filter(Boolean) }));
  }, e.withConfig = function(n) {
    return Sr(i, o, Pe(Pe({}, t), n));
  }, e;
}
var gg = function(i) {
  return Sr(Lx, i);
}, En = gg;
Ar.forEach(function(i) {
  En[i] = gg(i);
});
_.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Li = "__sc-".concat(Qt, "__");
_.NODE_ENV !== "production" && _.NODE_ENV !== "test" && typeof window < "u" && (window[Li] || (window[Li] = 116 + 542 * 10 + 4 * -1384), 3 * 534 + 5752 + -129 * 57 === window[Li] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Li] += -6205 + 10 * 346 + 1373 * 2);
const Dx = En.div`
  position: relative;
`, Fx = En.video`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(i) => i.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class re extends Error {
  constructor(t, e) {
    super(t);
    X(this, "cause");
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
var qi = ((i) => (i.CONTINUE_DETECTION = "continue-detection", i.SWITCH_CAMERA = "switch-camera", i.TOGGLE_MIRROR = "toggle-mirror", i))(qi || {}), cg = ((i) => (i.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", i.CONTROL = "document-auto-capture:control", i.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", i.DOCUMENT_DETECTION = "document-auto-capture:document-detection", i.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", i.STATE_CHANGED = "document-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", i))(cg || {}), bt = ((i) => (i.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", i.CONTROL = "face-auto-capture:control", i.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", i.FACE_DETECTION = "face-auto-capture:face-detection", i.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", i.STATE_CHANGED = "face-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", i))(bt || {}), ii = ((i) => (i.ANIMATION_END = "magnifeye-auto-capture:animation-end", i.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", i))(ii || {}), Yx = ((i) => (i.STATUS_CHANGED = "smile-auto-capture:status-changed", i))(Yx || {});
const lg = {};
lg.EYE_NOT_PRESENT = "eye_not_present";
const Vs = lg, We = {};
We.CANDIDATE_SELECTION = "candidate_selection", We.FACE_TOO_CLOSE = "face_too_close", We.FACE_TOO_FAR = "face_too_far", We.FACE_CENTERING = "face_centering", We.FACE_NOT_PRESENT = "face_not_present", We.SHARPNESS_TOO_LOW = "sharpness_too_low", We.BRIGHTNESS_TOO_LOW = "brightness_too_low", We.BRIGHTNESS_TOO_HIGH = "brightness_too_high", We.DEVICE_PITCHED = "device_pitched", We.LEFT_EYE_NOT_PRESENT = "left_" + Vs.EYE_NOT_PRESENT, We.RIGHT_EYE_NOT_PRESENT = "right_" + Vs.EYE_NOT_PRESENT, We.MOUTH_NOT_PRESENT = "mouth_not_present", We.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", We.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const Be = We, Re = {};
Re.isPresent = Be.FACE_NOT_PRESENT, Re.isNotPitched = Be.DEVICE_PITCHED, Re.isNotSmall = Be.FACE_TOO_FAR, Re.isNotLarge = Be.FACE_TOO_CLOSE, Re.isNotOutOfBounds = Be.FACE_CENTERING, Re.isNotDim = Be.BRIGHTNESS_TOO_LOW, Re.isNotBright = Be.BRIGHTNESS_TOO_HIGH, Re.isSharp = Be.SHARPNESS_TOO_LOW, Re.isLeftEyePresent = Be.LEFT_EYE_NOT_PRESENT, Re.isRightEyePresent = Be.RIGHT_EYE_NOT_PRESENT, Re.isMouthPresent = Be.MOUTH_NOT_PRESENT, Re.isMouthScoreNotTooHigh = Be.MOUTH_SCORE_TOO_HIGH, Re.isMouthScoreNotTooLow = Be.MOUTH_SCORE_TOO_LOW;
const Xx = Re, Br = {};
Br.FRONT = "user", Br.REAR = "environment";
const xg = Br, Mn = {};
Mn.LOADING = "LOADING", Mn.ERROR = "ERROR", Mn.WAITING = "WAITING", Mn.RUNNING = "RUNNING";
const xt = Mn;
var Ye = ((i) => (i.CLOSEUP = "CLOSEUP", i.DISTANT = "DISTANT", i.MIDDLE = "MIDDLE", i))(Ye || {});
const ug = { ...xt };
ug.DONE = "DONE";
const Yt = ug, Wo = bi(void 0);
Wo.displayName = "AppStateContext";
function Tn() {
  const i = qt(Wo);
  if (i === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return i;
}
const Mx = Wo.Provider, jx = Tn;
class Ig extends Qe {
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
    return ((o = this.context) == null ? void 0 : o.appState) === xt.ERROR ? null : this.props.children;
  }
}
X(Ig, "contextType", Wo);
const Jx = En.canvas`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, Ux = En.div`
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
function zx() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const Qx = B0(
  ({ detectionDetails: i, isImageMirror: o }, t) => zx() ? (console.log(i), /* @__PURE__ */ H(ot, { children: [
    /* @__PURE__ */ H(Jx, { ref: t, $isImageMirror: o }),
    /* @__PURE__ */ H(Ux, { children: Object.entries(i).map(([e, n]) => /* @__PURE__ */ H("div", { children: [
      e,
      ": ",
      /* @__PURE__ */ H("strong", { children: n })
    ] }, e)) })
  ] })) : null
), lo = bi(void 0);
lo.displayName = "AnalyticsContext";
function dg() {
  const i = qt(lo);
  if (i === void 0)
    throw new Error(`${lo.displayName} must be used within a AnalyticsProvider`);
  return i;
}
const xo = bi(void 0);
xo.displayName = "LicenseContext";
function ua() {
  const i = qt(xo);
  if (i === void 0)
    throw new Error(`${xo.displayName} must be used within a LicenseProvider`);
  return i;
}
function $x({ licensePath: i, licenseValidator: o, wasmDirectoryPath: t }) {
  const [e, n] = Ne(), r = e !== void (-1654 * -5 + 4154 * 1 + 2 * -6212);
  fe(() => {
    async function s() {
      await o.init(t, i), n(o.getLicenseResult());
    }
    s();
  }, [o, t, i, n]);
  const a = {};
  return a.licenseResult = e, a.isLicenseValidated = r, a;
}
var Cg = ((i) => (i.DOCUMENT = "document-auto-capture:dev", i.FACE = "face-auto-capture:dev", i))(Cg || {});
const Gr = {};
Gr.SIMD = "simd", Gr.NO_SIMD = "no-simd";
const Es = Gr, Zr = {};
Zr.FREEMIUM = "Freemium", Zr.PREMIUM = "Premium";
const Hr = Zr, eo = {};
eo.VISIBLE = "VISIBLE", eo.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", eo.HIDDEN = "HIDDEN";
const _n = eo;
function _x({ licenseResult: i }) {
  return i != null && i.isValid ? Hr.PREMIUM : Hr.FREEMIUM;
}
function qx({
  children: i,
  licensePath: o,
  licenseValidator: t,
  wasmDirectoryPath: e
}) {
  const { isLicenseValidated: n, licenseResult: r } = $x({
    licenseValidator: t,
    licensePath: o,
    wasmDirectoryPath: e
  }), a = Xe(
    () => ({
      appTier: _x({ licenseResult: r }),
      isLicenseValidated: n,
      licenseResult: r,
      licenseValidator: t
    }),
    [n, r, t]
  );
  return /* @__PURE__ */ H(xo.Provider, { value: a, children: i });
}
function eu({ analytics: i, licenseResult: o }) {
  return o !== void (-18 * 2 + -7571 * -1 + -5 * 1507) && !o.isAnalyticsDisabled ? i : void 0;
}
function tu({ analytics: i, appKey: o, appTier: t, licenseResult: e, licenseValidator: n }) {
  const r = {};
  r.analytics = i, r.licenseResult = e;
  const a = eu(r);
  return fe(() => {
    a && a.init(o);
  }, [a, o]), fe(() => {
    e && (console.info("Analytics is " + (e.isAnalyticsDisabled ? "disabled" : "enabled")), a && a.sendLicenseResultData(t, n.getCustomerName()));
  }, [a, n, e, t]), fe(() => {
    if (a)
      return window.addEventListener("beforeunload", a.endSession), () => {
        a.endSession(), window.removeEventListener("beforeunload", a.endSession);
      };
  }, [a]), a;
}
function nu({
  analytics: i,
  appKey: o,
  children: t
}) {
  const { appTier: e, licenseResult: n, licenseValidator: r } = ua(), a = tu({ analytics: i, appTier: e, appKey: o, licenseResult: n, licenseValidator: r }), s = Xe(
    () => ({
      analytics: a
    }),
    [a]
  );
  return /* @__PURE__ */ H(lo.Provider, { value: s, children: t });
}
const iu = 3297 + -1 * -8293 + 1 * -11590 + 0.4, ou = -6770 + 1457 * -2 + 4 * 2421 + 0.16, ru = 1942 * 3 + -431 * 16 + 5 * 214 + 0.2, au = 540 + -1 * 4289 + 3749 + 0.05, su = 25 * -263 + -4741 + -3772 * -3, Wr = {};
Wr.min = -(-262 * -30 + -5758 * 1 + -2101), Wr.max = 1;
const Ts = Wr, Rs = -704 * 8 + -3685 + -9317 * -1, gu = -1 * -6029 + -6799 + 770 + 0.3, cu = 1 * 9037 + 6816 + -15853 + 0.2, lu = 0 + 0.85, xu = 30, uu = 9 + 0.8100000000000005, to = {};
to.minDuration = 1e3, to.maxDuration = 2500, to.minFrames = 10;
const er = to, kr = {};
kr.max = 100, kr.min = 10;
const Ps = kr, Iu = 9419 + 4018 * -2 + -663, du = 1120 + -1 * -6737 + -7657, Cu = 4, fg = "AES-CBC", hg = "RSA-OAEP", fu = "SHA-256", hu = "image/jpeg", pu = 1 * 9431 + 16 * 576 + -18639, mu = 1 * 2e3 + 9744 + 532 * -22, Au = "SAM v1.39.3 for idcards", bu = "dot_embedded_bg.wasm";
let Q;
const mt = new Array(128).fill(void 0);
mt.push(void 0, null, !0, !1);
function Kr(i) {
  return mt[i];
}
let vt = -4488 + -63 * -117 + -1 * 2883, jn = null;
function no() {
  return (jn === null || jn.byteLength === 0) && (jn = new Uint8Array(Q.memory.buffer)), jn;
}
const io = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, yu = typeof io.encodeInto == "function" ? function(i, o) {
  return io.encodeInto(i, o);
} : function(i, o) {
  const t = io.encode(i);
  o.set(t);
  const e = {};
  return e.read = i.length, e.written = t.length, e;
};
function uo(i, o, t) {
  if (t === void 0) {
    const s = io.encode(i), g = o(s.length, 7 * -778 + -3154 + 8601) >>> 5955 + 122 * 25 + -1 * 9005;
    return no().subarray(g, g + s.length).set(s), vt = s.length, g;
  }
  let e = i.length, n = o(e, 824 + 823 * -1) >>> 8163 + 1 * 8473 + 2 * -8318;
  const r = no();
  let a = -9 * -1109 + 1 * 5897 + -34 * 467;
  for (; a < e; a++) {
    const s = i.charCodeAt(a);
    if (s > 2 * 1329 + 6922 + -9453) break;
    r[n + a] = s;
  }
  if (a !== e) {
    a !== -316 + -1 * 6601 + 6917 * 1 && (i = i.slice(a)), n = t(n, e, e = a + i.length * (-8863 * 1 + -9719 * -1 + 853 * -1), 21 * -396 + 24 * -183 + 179 * 71) >>> 783 * 6 + 8341 + -13039;
    const s = no().subarray(n + a, n + e), g = yu(i, s);
    a += g.written;
  }
  return vt = a, n;
}
function pg(i) {
  return i == null;
}
let Jn = null;
function Ht() {
  return (Jn === null || Jn.byteLength === -224 * 33 + -56 * 50 + 112 * 91) && (Jn = new Int32Array(Q.memory.buffer)), Jn;
}
let qn = mt.length;
function vu(i) {
  i < -843 + 3573 * -1 + -1137 * -4 || (mt[i] = qn, qn = i);
}
function mg(i) {
  const o = Kr(i);
  return vu(i), o;
}
const Or = {};
Or.ignoreBOM = !0, Or.fatal = !0;
const Ag = typeof TextDecoder < "u" ? new TextDecoder("utf-8", Or) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && Ag.decode();
function Vr(i, o) {
  return i = i >>> 0, Ag.decode(no().subarray(i, i + o));
}
function Er(i) {
  qn === mt.length && mt.push(mt.length + (54 * 89 + -67 * -85 + -10500));
  const o = qn;
  return qn = mt[o], mt[o] = i, o;
}
let Un = null;
function bg() {
  return (Un === null || Un.byteLength === 13 * 309 + -1044 + -2973) && (Un = new Uint32Array(Q.memory.buffer)), Un;
}
function Ns(i, o) {
  const t = o(i.length * 4, 4) >>> 0, e = bg();
  for (let n = -31 * 179 + -6 * -1142 + -1303; n < i.length; n++)
    e[t / (-6363 * 1 + 7213 * -1 + 13580) + n] = Er(i[n]);
  return vt = i.length, t;
}
function Ls(i, o) {
  i = i >>> 2 * -4859 + 4510 + 5208;
  const t = bg(), e = t.subarray(i / (1 * -1019 + -693 * -11 + 66 * -100), i / (1 * 7811 + 1 * -319 + -7488) + o), n = [];
  for (let r = -3716 + 1999 * 5 + 21 * -299; r < e.length; r++)
    n.push(mg(e[r]));
  return n;
}
function wu(i, o) {
  const t = uo(i, Q.__wbindgen_malloc, Q.__wbindgen_realloc), e = vt, n = uo(o, Q.__wbindgen_malloc, Q.__wbindgen_realloc), r = vt, a = Q.validate_license(t, e, n, r);
  return Ia.__wrap(a);
}
class Ia {
  static __wrap(o) {
    o = o >>> -845 + -14 * 437 + 6963;
    const t = Object.create(Ia.prototype);
    return t.__wbg_ptr = o, t;
  }
  __destroy_into_raw() {
    const o = this.__wbg_ptr;
    return this.__wbg_ptr = -1 * -5189 + -7 * 606 + -947, o;
  }
  free() {
    const o = this.__destroy_into_raw();
    Q.__wbg_licensevalidationresult_free(o);
  }
  constructor(o, t, e, n) {
    var r = pg(t) ? 0 : uo(t, Q.__wbindgen_malloc, Q.__wbindgen_realloc), a = vt;
    const s = Ns(e, Q.__wbindgen_malloc), g = vt, x = Ns(n, Q.__wbindgen_malloc), C = vt, u = Q.licensevalidationresult_new(o, r, a, s, g, x, C);
    return this.__wbg_ptr = u >>> 1780 * 2 + -104 * 93 + -8 * -764, this;
  }
  get is_valid() {
    return Q.licensevalidationresult_is_valid(this.__wbg_ptr) !== 131 * -33 + 3 * -1741 + 9546;
  }
  get features_json() {
    try {
      const e = Q.__wbindgen_add_to_stack_pointer(-16);
      Q.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var o = Ht()[e / (109 * 47 + 9056 + -21 * 675) + (-2 * -1721 + 58 * -1 + -3384)], t = Ht()[e / (46 * -146 + 8746 * -1 + 15466) + (-5 * 995 + -3553 + 8529)];
      let n;
      return o !== 9580 + -173 * 14 + 2386 * -3 && (n = Vr(o, t).slice(), Q.__wbindgen_free(o, t * (-6719 * 1 + -54 * -74 + 2724), 4013 + 148 * -2 + -3716)), n;
    } finally {
      Q.__wbindgen_add_to_stack_pointer(-7897 + 1 * 5303 + 2610);
    }
  }
  get errors() {
    try {
      const n = Q.__wbindgen_add_to_stack_pointer(-16);
      Q.licensevalidationresult_errors(n, this.__wbg_ptr);
      var o = Ht()[n / (50 * -4 + 1 * -3695 + 3899) + (6649 + 109 * -61)], t = Ht()[n / (-9189 + -219 * 13 + -14 * -860) + (-259 * 38 + 6530 + 3313)], e = Ls(o, t).slice();
      return Q.__wbindgen_free(o, t * (2638 * 3 + -7856 + -6 * 9), 8 * 148 + 1001 + 727 * -3), e;
    } finally {
      Q.__wbindgen_add_to_stack_pointer(-3 * 1879 + -4035 + 9688);
    }
  }
  get warnings() {
    try {
      const n = Q.__wbindgen_add_to_stack_pointer(-16);
      Q.licensevalidationresult_warnings(n, this.__wbg_ptr);
      var o = Ht()[n / 4 + (2203 + 9981 * -1 + -3889 * -2)], t = Ht()[n / 4 + (1741 * 1 + -688 * 4 + 1012)], e = Ls(o, t).slice();
      return Q.__wbindgen_free(o, t * (-7 * 1289 + -8657 * 1 + 1 * 17684), -1867 * 1 + 7078 + -5207), e;
    } finally {
      Q.__wbindgen_add_to_stack_pointer(-1703 + 5496 * -1 + -555 * -13);
    }
  }
}
async function Su(i, o) {
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
function Bu() {
  const i = {};
  return i.wbg = {}, i.wbg.__wbindgen_string_get = function(o, t) {
    const e = Kr(t), n = typeof e == "string" ? e : void 0;
    var r = pg(n) ? 0 : uo(n, Q.__wbindgen_malloc, Q.__wbindgen_realloc), a = vt;
    Ht()[o / (-32 * 297 + -1 * 4703 + -14211 * -1) + (7669 + 1951 * -1 + -5717)] = a, Ht()[o / (-9698 + -483 * 3 + 11151) + (-17 * 249 + -9556 + -13789 * -1)] = r;
  }, i.wbg.__wbindgen_object_drop_ref = function(o) {
    mg(o);
  }, i.wbg.__wbindgen_string_new = function(o, t) {
    const e = Vr(o, t);
    return Er(e);
  }, i.wbg.__wbg_new0_c0e40662db0749ee = function() {
    return Er(/* @__PURE__ */ new Date());
  }, i.wbg.__wbg_getTime_af7ca51c0bcefa08 = function(o) {
    return Kr(o).getTime();
  }, i.wbg.__wbindgen_throw = function(o, t) {
    throw new Error(Vr(o, t));
  }, i;
}
function Gu(i, o) {
  return Q = i.exports, yg.__wbindgen_wasm_module = o, Jn = null, Un = null, jn = null, Q;
}
async function yg(i) {
  if (Q !== void 0) return Q;
  typeof i > "u" && (i = new URL("dot_embedded_bg.wasm", import.meta.url));
  const o = Bu();
  (typeof i == "string" || typeof Request == "function" && i instanceof Request || typeof URL == "function" && i instanceof URL) && (i = fetch(i));
  const { instance: t, module: e } = await Su(await i, o);
  return Gu(t, e);
}
class Zu {
  constructor() {
    X(this, "wasmInitialized", !1);
  }
  async init(o = "/wasm") {
    try {
      const t = o + "/" + bu;
      await yg(t), this.wasmInitialized = !0;
    } catch {
      this.wasmInitialized = !1, console.warn("dot_embedded_bg.wasm initialization failed! Please check documentation for more information.");
    }
  }
  isWasmInitialized() {
    return this.wasmInitialized;
  }
}
class tr extends Error {
  constructor() {
    super(...arguments);
    X(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
var mn;
class Ds {
  constructor(o) {
    ce(this, mn);
    this.licenseResult = o;
    try {
      se(this, mn, o.features_json && JSON.parse(o.features_json));
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
    return M(this, mn);
  }
  get isAnalyticsDisabled() {
    var o, t;
    return !!((t = (o = M(this, mn)) == null ? void 0 : o.features) != null && t["realTimeTransactionReportingDisabled"]);
  }
}
mn = new WeakMap();
class Hu {
  constructor(o) {
    X(this, "license");
    X(this, "licenseResult");
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
      this.license = void (1966 + 280 * -19 + 258 * 13), console.error(t);
    }
  }
  async loadLicense(o) {
    if (this.licenseResult = void (1051 * 9 + -5822 + 3637 * -1), !o) {
      console.info("No DOT license provided."), this.license = void (104 * 7 + -4614 * 1 + 3886);
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
      if (!this.license) throw new tr("No DOT license found.");
      if (!this.dotEmbedded.isWasmInitialized()) throw new tr("Wasm not initialized.");
      this.licenseResult = new Ds(wu(this.license, this.getDomain())), this.printErrors(this.licenseResult.errors), this.printWarnings(this.licenseResult.warnings);
    } catch (o) {
      o instanceof tr ? o.log() : o instanceof Error && console.error(o);
      const t = {};
      t.is_valid = !1, t.errors = [], t.warnings = [], t.features_json = void (-1 * -7851 + 1 * -773 + -7078), t.free = function() {
      }, this.licenseResult = new Ds(t);
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
const mo = class mo extends Hu {
  static getInstance() {
    if (!this._instance) {
      const o = new Zu();
      this._instance = new mo(o);
    }
    return this._instance;
  }
};
X(mo, "_instance");
let Tr = mo;
const vg = (i, o) => {
  const t = at(o);
  fe(() => {
    t.current = o;
  }, [o]), fe(() => {
    const e = (n) => t.current(n);
    return document.addEventListener(i, e), () => {
      document.removeEventListener(i, e);
    };
  }, [i]);
};
var Wu = Symbol.for("preact-signals");
function da() {
  if (pn > 5373 + -897 * 4 + -1784)
    pn--;
  else {
    for (var i, o = !1; void (-1967 + 1967 * 1) !== ei; ) {
      var t = ei;
      for (ei = void (1136 + -10 * 594 + 4804), Rr++; void (-7253 * 1 + 497 * -11 + -60 * -212) !== t; ) {
        var e = t.o;
        if (t.o = void (629 + 563 * 4 + -2881), t.f &= -(2 * 1287 + -1276 + -1295), !(2 * 3932 + -626 + -7230 & t.f) && Bg(t)) try {
          t.c();
        } catch (n) {
          !o && (i = n, o = !(26 * -190 + -6105 + 47 * 235));
        }
        t = e;
      }
    }
    if (Rr = 2161 * -2 + 7961 + -3639, pn--, o) throw i;
  }
}
var te = void (706 + 706 * -1), ei = void (-7 * -995 + 2 * -843 + -5279 * 1), pn = -4224 + 88 * 48, Rr = 0, Io = -1870 + -55 * -34;
function wg(i) {
  if (void (1855 + 226 * -13 + 57 * 19) !== te) {
    var o = i.n;
    if (void (257 + -31 * -143 + -35 * 134) === o || o.t !== te)
      return o = { i: 0, S: i, p: te.s, n: void (6869 + 1 * -6869), t: te, e: void (499 + -1 * 499), x: void (520 * 4 + 1 * 6917 + -8997 * 1), r: o }, void (-2 * 3629 + -2883 + 10141 * 1) !== te.s && (te.s.n = o), te.s = o, i.n = o, -1498 + 6869 * 1 + -5339 & te.f && i.S(o), o;
    if (-(146 * -53 + 6155 + 1584) === o.i)
      return o.i = -1 * 8315 + 4537 + 3778, void (-1614 * -2 + 137 * 7 + -53 * 79) !== o.n && (o.n.p = o.p, o.p !== void 0 && (o.p.n = o.n), o.p = te.s, o.n = void 0, te.s.n = o, te.s = o), o;
  }
}
function ve(i) {
  this.v = i, this.i = 6146 + 2 * -3073, this.n = void (8533 + 8612 * 1 + -45 * 381), this.t = void (-45 * -52 + -5962 + -3622 * -1);
}
ve.prototype.brand = Wu, ve.prototype.h = function() {
  return !(-3 * -3141 + -9705 + 282);
}, ve.prototype.S = function(i) {
  this.t !== i && i.e === void 0 && (i.x = this.t, void (-14637 + 17 * 861) !== this.t && (this.t.e = i), this.t = i);
}, ve.prototype.U = function(i) {
  if (void (-4804 + -1 * 899 + 5703) !== this.t) {
    var o = i.e, t = i.x;
    void (11 * -827 + -9280 + 18377) !== o && (o.x = t, i.e = void (-2 * -1812 + -7886 + 4262)), void (-8358 + 5501 * 1 + 2857 * 1) !== t && (t.e = o, i.x = void (6483 + 6483 * -1)), i === this.t && (this.t = t);
  }
}, ve.prototype.subscribe = function(i) {
  var o = this;
  return fa(function() {
    var t = o.value, e = te;
    te = void (4918 * -1 + 7858 + -49 * 60);
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
  te = void 0;
  try {
    return this.value;
  } finally {
    te = i;
  }
}, Object.defineProperty(ve.prototype, "value", { get: function() {
  var i = wg(this);
  return void (2470 + 7048 * 1 + -1 * 9518) !== i && (i.i = this.i), this.v;
}, set: function(i) {
  if (i !== this.v) {
    if (Rr > 1 * 7951 + -23 * 7 + 2 * -3845) throw new Error("Cycle detected");
    this.v = i, this.i++, Io++, pn++;
    try {
      for (var o = this.t; o !== void 0; o = o.x) o.t.N();
    } finally {
      da();
    }
  }
} });
function Sg(i) {
  return new ve(i);
}
function Bg(i) {
  for (var o = i.s; void (-6550 + -146 * 12 + 8302) !== o; o = o.n) if (o.S.i !== o.i || !o.S.h() || o.S.i !== o.i) return !(1554 + -2 * 902 + -1 * -250);
  return !(101 * -25 + 4092 + -783 * 2);
}
function Gg(i) {
  for (var o = i.s; void (128 * 2 + 6976 + -64 * 113) !== o; o = o.n) {
    var t = o.S.n;
    if (t !== void 0 && (o.r = t), o.S.n = o, o.i = -(-6131 * 1 + -1832 * -2 + 4 * 617), void (-48 * -99 + 5478 + -10230) === o.n) {
      i.s = o;
      break;
    }
  }
}
function Zg(i) {
  for (var o = i.s, t = void (-25 * 395 + 556 * -2 + 10987); void (6302 + -1 * -7862 + -14164) !== o; ) {
    var e = o.p;
    -(2 * 327 + 128 * -40 + 4467) === o.i ? (o.S.U(o), void (-2 * 1233 + -106 * 33 + 5964) !== e && (e.n = o.n), void (-6210 + -230 * -27) !== o.n && (o.n.p = e)) : t = o, o.S.n = o.r, o.r !== void 0 && (o.r = void 0), o = e;
  }
  i.s = t;
}
function dn(i) {
  ve.call(this, void (-971 + -27 * -18 + -5 * -97)), this.x = i, this.s = void (9196 + 14 * -371 + -4002), this.g = Io - (-6399 + 3092 * -1 + 9492), this.f = 1768 + -1097 * -4 + -6152;
}
(dn.prototype = new ve()).h = function() {
  if (this.f &= -(1 * -7613 + 5539 + 2077), -9233 + 7224 * 1 + 2010 & this.f) return !(-2011 * 4 + -1 * 8522 + 16567);
  if (-1637 * -2 + -4027 + 785 == (36 & this.f)) return !(-622 * 1 + 2979 + 1 * -2357);
  if (this.f &= -(-1 * -5869 + -328 + -5536), this.g === Io) return !(10363 + -1 * 10363);
  if (this.g = Io, this.f |= -325 * -16 + 4676 + -9875, this.i > 17794 + -217 * 82 && !Bg(this)) return this.f &= -(-18811 + -3 * -6271), !(-7994 + -7 * -1142);
  var i = te;
  try {
    Gg(this), te = this;
    var o = this.x();
    (-1 * -3639 + 768 + -4391 & this.f || this.v !== o || -14760 + 2 * 7380 === this.i) && (this.v = o, this.f &= -(-756 * -11 + -1 * -3045 + 1418 * -8), this.i++);
  } catch (t) {
    this.v = t, this.f |= 9755 * 1 + 6013 + -15752, this.i++;
  }
  return te = i, Zg(this), this.f &= -2, !(38 * 206 + 888 + -8716);
}, dn.prototype.S = function(i) {
  if (void (9103 + 353 * 1 + -9456) === this.t) {
    this.f |= -12166 + -2 * -6101;
    for (var o = this.s; void (-1455 * 1 + 9863 + 1 * -8408) !== o; o = o.n) o.S.S(o);
  }
  ve.prototype.S.call(this, i);
}, dn.prototype.U = function(i) {
  if (void (179 * 21 + 1786 * 4 + -10903) !== this.t && (ve.prototype.U.call(this, i), void (8192 + 1 * -3736 + -4456) === this.t)) {
    this.f &= -(1 * -2833 + 1846 * 3 + -2672);
    for (var o = this.s; void (-9829 + 14 * 433 + -1 * -3767) !== o; o = o.n) o.S.U(o);
  }
}, dn.prototype.N = function() {
  if (!(-1 * -2897 + 5916 + -8811 & this.f)) {
    this.f |= -3715 + -1 * 1553 + 293 * 18;
    for (var i = this.t; void (-5514 + 18 * 139 + 3012) !== i; i = i.x) i.t.N();
  }
}, Object.defineProperty(dn.prototype, "value", { get: function() {
  if (1 & this.f) throw new Error("Cycle detected");
  var i = wg(this);
  if (this.h(), void (-1564 + 92 * 17) !== i && (i.i = this.i), -5 * 311 + 5517 + -3946 & this.f) throw this.v;
  return this.v;
} });
function ku(i) {
  return new dn(i);
}
function Hg(i) {
  var o = i.u;
  if (i.u = void (17075 + 3415 * -5), typeof o == "function") {
    pn++;
    var t = te;
    te = void (1985 + 397 * -5);
    try {
      o();
    } catch (e) {
      throw i.f &= -(-3055 + 3 * 1019), i.f |= -1260 + 6 * 57 + 463 * 2, Ca(i), e;
    } finally {
      te = t, da();
    }
  }
}
function Ca(i) {
  for (var o = i.s; void (3 * -1201 + -8008 + 11611) !== o; o = o.n) o.S.U(o);
  i.x = void (146 * -48 + 6282 + -121 * -6), i.s = void (7537 * -1 + 302 * 28 + -919), Hg(i);
}
function Ku(i) {
  if (te !== this) throw new Error("Out-of-order effect");
  Zg(this), te = i, this.f &= -2, 1649 + 961 * 10 + -1 * 11251 & this.f && Ca(this), da();
}
function zn(i) {
  this.x = i, this.u = void 0, this.s = void (362 * 8 + -1036 + 620 * -3), this.o = void (2637 * -3 + 1912 + 5999), this.f = -10091 + 191 * 53;
}
zn.prototype.c = function() {
  var i = this.S();
  try {
    if (11371 + 1 * -11363 & this.f || this.x === void 0) return;
    var o = this.x();
    typeof o == "function" && (this.u = o);
  } finally {
    i();
  }
}, zn.prototype.S = function() {
  if (1 * 4789 + 9981 + -4923 * 3 & this.f) throw new Error("Cycle detected");
  this.f |= 7805 + 2 * -395 + -7014, this.f &= -(89 * 49 + -1165 + -1 * 3187), Hg(this), Gg(this), pn++;
  var i = te;
  return te = this, Ku.bind(this, i);
}, zn.prototype.N = function() {
  !(-79 * 61 + -7 * -1385 + 1 * -4874 & this.f) && (this.f |= 1 * -8137 + -9815 + -2 * -8977, this.o = ei, ei = this);
}, zn.prototype.d = function() {
  this.f |= 1491 * 1 + -6843 + 5360, 8 * 486 + 8897 + -12784 & this.f || Ca(this);
};
function fa(i) {
  var o = new zn(i);
  try {
    o.c();
  } catch (t) {
    throw o.d(), t;
  }
  return o.d.bind(o);
}
var nr;
function hn(i, o) {
  F[i] = o.bind(null, F[i] || function() {
  });
}
function Di(i) {
  nr && nr(), nr = i && i.S();
}
function Wg(i) {
  var o = this, t = i.data, e = Wn(t);
  e.value = t;
  var n = Xe(function() {
    for (var r = o.__v; r = r.__; ) if (r.__c) {
      r.__c.__$f |= 506 * -16 + 5619 + 2481;
      break;
    }
    return o.__$u.c = function() {
      var a;
      !x0(n.peek()) && -2 * -686 + -1280 + -89 === ((a = o.base) == null ? void (-2791 * -1 + -11 * -381 + -6982) : a.nodeType) ? o.base.data = n.peek() : (o.__$f |= 1 * 8882 + -463 * -12 + -14437 * 1, o.setState({}));
    }, ku(function() {
      var a = e.value.value;
      return 1 * -1606 + -189 + 1795 === a ? -9530 + 1187 * 1 + -8343 * -1 : !(73 * -41 + -1 * -9206 + -57 * 109) === a ? "" : a || "";
    });
  }, []);
  return n.value;
}
Wg.displayName = "_st";
var Pr = {};
Pr.configurable = !0, Pr.value = void (7518 + -719 * 1 + 1 * -6799);
var Nr = {};
Nr.configurable = !(-5277 + -92 * 23 + 7393), Nr.value = Wg;
var Lr = {};
Lr.configurable = !(7044 + -3 * 513 + 1 * -5505), Lr.get = function() {
  var i = {};
  return i.data = this, i;
};
var Dr = {};
Dr.configurable = !(83 * 57 + -1 * 7010 + 1 * 2279), Dr.value = 1;
var Fn = {};
Fn.constructor = Pr, Fn.type = Nr, Fn.props = Lr, Fn.__b = Dr, Object.defineProperties(ve.prototype, Fn), hn("__b", function(i, o) {
  if (typeof o.type == "string") {
    var t, e = o.props;
    for (var n in e) if (n !== "children") {
      var r = e[n];
      r instanceof ve && (t || (o.__np = t = {}), t[n] = r, e[n] = r.peek());
    }
  }
  i(o);
}), hn("__r", function(i, o) {
  Di();
  var t, e = o.__c;
  e && (e.__$f &= -(206 * 1 + -73 * -59 + 347 * -13), void (-3994 * 2 + 3120 + 1 * 4868) === (t = e.__$u) && (e.__$u = t = function(n) {
    var r;
    return fa(function() {
      r = this;
    }), r.c = function() {
      e.__$f |= 6709 + 7 * -1195 + 1657, e.setState({});
    }, r;
  }())), Di(t), i(o);
}), hn("__e", function(i, o, t, e) {
  Di(), i(o, t, e);
}), hn("diffed", function(i, o) {
  Di();
  var t;
  if (typeof o.type == "string" && (t = o.__e)) {
    var e = o.__np, n = o.props;
    if (e) {
      var r = t.U;
      if (r) for (var a in r) {
        var s = r[a];
        void (6187 * -1 + -3857 * 1 + 93 * 108) !== s && !(a in e) && (s.d(), r[a] = void (-1 * 9515 + 9378 + -1 * -137));
      }
      else t.U = r = {};
      for (var g in e) {
        var x = r[g], C = e[g];
        void (-4362 * 2 + -7458 * -1 + 1266) === x ? (x = Ou(t, g, C, n), r[g] = x) : x.o(C, n);
      }
    }
  }
  i(o);
});
function Ou(i, o, t, e) {
  var n = o in i && i.ownerSVGElement === void 0, r = Sg(t);
  return { o: function(a, s) {
    r.value = a, e = s;
  }, d: fa(function() {
    var a = r.value.value;
    e[o] !== a && (e[o] = a, n ? i[o] = a : a ? i.setAttribute(o, a) : i.removeAttribute(o));
  }) };
}
hn("unmount", function(i, o) {
  if (typeof o.type == "string") {
    var t = o.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void (41 * 213 + -1 * 8054 + -679);
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
      s && (a.__$u = void (-2347 * 2 + -1 * 521 + -1043 * -5), s.d());
    }
  }
  i(o);
}), hn("__h", function(i, o, t, e) {
  (e < 8642 + 1 * -1961 + -477 * 14 || 3433 + -4 * 856 === e) && (o.__$f |= 2544 + -35 * -133 + -7197), i(o, t, e);
}), Qe.prototype.shouldComponentUpdate = function(i, o) {
  var t = this.__$u;
  if (!(t && void (1265 + -10 * -43 + -1695) !== t.s || -7479 + 1069 * 7 & this.__$f)) return !(58 * 92 + 8847 * 1 + -1091 * 13);
  if (-3789 + 6 * 632 & this.__$f) return !(716 + 1 * -716);
  for (var e in o) return !(-315 * -27 + -1 * -8903 + -17408);
  for (var n in i) if (n !== "__source" && i[n] !== this.props[n]) return !0;
  for (var r in this.props) if (!(r in i)) return !(-1 * -1527 + 2848 + -4375);
  return !1;
};
function Wn(i) {
  return Xe(function() {
    return Sg(i);
  }, []);
}
const Vu = (i) => {
  const o = Wn(!1);
  return vg(i, (e) => {
    e.detail && (o.value = e.detail.animationEnd);
  }), o;
};
function Eu(i, o) {
  if (!i) return o;
  const { detectionRecord: t, hashedDetectedImages: e } = i;
  o.hashedDetectedImages && (e == null || e.push(...o.hashedDetectedImages)), o.detectionRecord && (t == null || t.push(...o.detectionRecord));
  const n = { ...i };
  return n.hashedDetectedImages = e, n.detectionRecord = t, n;
}
const Tu = (i, o, t = hu) => new Promise((e) => {
  i.toBlob((n) => {
    if (!n) throw new Error("Canvas to Blob failed");
    e(n);
  }, t, o);
}), kg = async (i) => Tu(i, -4116 + 3 * 1402), Ru = (i, o) => {
  const t = document.createElement("canvas");
  t.width = o.width, t.height = o.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(i, o.shiftX, o.shiftY, o.width, o.height, -10743 + 3581 * 3, 438 * 21 + 1 * -65 + -9133, t.width, t.height), t;
}, Pu = (i) => {
  const o = i.getContext("2d");
  if (!o) throw new Error("getImageDataForSam ctx error");
  const { data: t } = o.getImageData(-7094 + 2 * 1971 + 3152 * 1, 0, i.width, i.height);
  return t;
}, Kg = (i, o, t, e) => {
  const n = i.getContext("2d");
  n && (n.beginPath(), e ? (n.fillStyle = t, n.fillRect(o.topLeft.x, o.topLeft.y, o.width, o.height)) : (n.strokeStyle = t, n.rect(o.topLeft.x, o.topLeft.y, o.width, o.height)), n.stroke());
}, ir = (i, o, t) => {
  const { height: e, shiftX: n, shiftY: r, width: a } = o, s = {};
  s.x = n, s.y = r;
  const g = {};
  g.topLeft = s, g.width = a, g.height = e, g.color = t, Kg(i, g, t);
}, ti = (i, o, t, e = 0) => {
  const n = i.getContext("2d");
  n && (n.fillStyle = t, n.fillRect(o.x + e, o.y + e, -40 * 230 + 1 * -8409 + 17616, 7), n.beginPath());
}, Nu = (i, o) => {
  const t = i.getContext("2d");
  t && t.drawImage(o, 8574 + 1 * -6527 + -2047, 669 + 1 * -4229 + 8 * 445);
}, Og = bi(null), Vg = () => {
  const i = qt(Og);
  if (!i)
    throw new Error("Missing provider for CameraOptionsContext");
  return i;
}, Lu = (i) => {
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
      faceConfidence: (a == null ? void 0 : a.faceConfidence) ?? iu,
      minFaceSizeRatio: (a == null ? void 0 : a.minFaceSizeRatio) ?? ou,
      maxFaceSizeRatio: (a == null ? void 0 : a.maxFaceSizeRatio) ?? ru,
      sharpnessThreshold: (a == null ? void 0 : a.sharpnessThreshold) ?? gu,
      brightnessLowThreshold: (a == null ? void 0 : a.brightnessLowThreshold) ?? cu,
      brightnessHighThreshold: (a == null ? void 0 : a.brightnessHighThreshold) ?? lu,
      outOfBoundsThreshold: (a == null ? void 0 : a.outOfBoundsThreshold) ?? au,
      devicePitchAngleThreshold: (a == null ? void 0 : a.devicePitchAngleThreshold) ?? xu,
      mouth: {
        confidence: ((g = a == null ? void 0 : a.mouth) == null ? void 0 : g.confidence) ?? su,
        status: {
          min: ((x = a == null ? void 0 : a.mouth) == null ? void 0 : x.status.min) ?? Ts.min,
          max: ((C = a == null ? void 0 : a.mouth) == null ? void 0 : C.status.max) ?? Ts.max
        }
      },
      leftEye: (a == null ? void 0 : a.leftEye) ?? {
        confidence: Rs
      },
      rightEye: (a == null ? void 0 : a.rightEye) ?? {
        confidence: Rs
      }
    }
  };
}, Du = ({ cameraOptions: i, children: o }) => {
  const t = Xe(() => ({
    faceCameraOptions: Lu(i)
  }), [i]);
  return /* @__PURE__ */ H(Og.Provider, { value: t, children: o });
}, Fu = 5827 + 5827 * -1 + 0.75, Yu = 2, Xu = 693 + -9813 * 1 + 9720, Mu = -665 * -6 + 3 * -18 + -3936, Eg = (i, o) => {
  const t = {};
  t.detail = o, document.dispatchEvent(new CustomEvent(i, t));
}, Ao = class Ao {
  constructor() {
    X(this, "lastDetails", {});
    X(this, "delayedTime", 40 * -211 + -7516 + 15956);
  }
  static getInstance() {
    return !this._instance && (this._instance = new Ao()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 4173 + -1 * 4173;
  }
  isDetailChanged(o, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[o]) ? (this.lastDetails[o] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(o, t) {
    this.isDetailChanged(o, t) && Eg(o, t);
  }
  dispatchDelayedCustomEventOnChange(o, t, e) {
    const n = performance.now();
    n - this.delayedTime > e && (this.dispatchCustomEventOnChange(o, t), this.delayedTime = n);
  }
};
X(Ao, "_instance");
let oi = Ao;
const yi = oi.getInstance(), Fs = (i, o, t = Xu) => {
  const e = {};
  e.instructionCode = o;
  const n = e;
  yi.dispatchDelayedCustomEventOnChange(i, n, t);
}, ju = (i, o) => {
  yi.dispatchCustomEventOnChange(i, o);
}, Ju = (i, o) => {
  const t = {};
  t.size = o;
  const e = t;
  yi.dispatchCustomEventOnChange(i, e);
}, Uu = (i, o, t) => {
  const e = o.confidence < t ? void 0 : o, n = {};
  n.detectedObject = e;
  const r = n;
  yi.dispatchCustomEventOnChange(i, r);
}, zu = (i, o, t) => {
  const e = {};
  e.image = t, e.data = {}, e.data.detection = o, e.data.imageResolution = {}, e.data.imageResolution.width = t.width, e.data.imageResolution.height = t.height;
  const n = e;
  yi.dispatchCustomEventOnChange(i, n);
}, Fr = (i, o) => {
  Eg(i, o);
};
var Fe = {};
Fe.VITE_FACE_COUNTLY_APP_KEY = "5f83e83ee4cee1ab6e5bbf86e215644473299675", Fe.VITE_MAGNIFEYE_COUNTLY_APP_KEY = "d5ca54dabfb1a2c72d7090c9c8980252a879da44", Fe.VITE_DOCUMENT_COUNTLY_APP_KEY = "065cf6e242fc5e785cd17eebfbfbbd212a33133b", Fe.VITE_COUNTLY_URL = "https://innovatrics.count.ly", Fe.VITE_SMILE_COUNTLY_APP_KEY = "d64319129bb0ee02eccfab418edba9629a97d6b6", Fe.VITE_RSA_PUBLIC_KEY = "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", Fe.BASE_URL = "/", Fe.MODE = "production", Fe.DEV = !1, Fe.PROD = !0, Fe.SSR = !1, Fe.VITE_PACKAGE_VERSION = "6.1.4";
var Qu = Fe;
const $u = () => {
  var i;
  return ((i = Qu.VITE_APP_ENV) == null ? void 0 : i.toLowerCase()) === "dev";
}, _u = (i, o) => {
  if ($u()) {
    const t = {};
    t.candidateSelectionImages = o;
    const e = t;
    oi.getInstance().dispatchCustomEventOnChange(i, e);
  }
}, qu = (i, o) => {
  const { cameraResolution: t, shouldMirror: e } = o;
  fe(() => {
    if (!t) return;
    const n = {};
    n.cameraResolution = t, n.isMirroring = e, ju(i, n);
  }, [t, e, i]);
}, Tg = (i) => i.length < -4549 * -2 + -6114 + 1 * -2983 ? -1 * -827 + 5016 + -5843 : i.reduce((t, e) => t + e, 4889 + 70 * -58 + -829) / i.length, vi = (i) => Number.parseFloat(i.toFixed(-1203 * 3 + -5674 + -4643 * -2)), eI = (i) => {
  const o = i.getContext("2d");
  o && o.clearRect(-6436 + 5 * -1983 + 1 * 16351, 3515 + 1706 * 5 + -12045, o.canvas.width, o.canvas.height);
}, ko = (i, o) => Math.min(i, o), tI = (i, o) => {
  const t = ko(o.width, o.height);
  return vi(i * t);
}, Rg = ({ height: i, width: o }) => {
  const t = ko(o, i), e = t / (3 * -1206 + -280 + 3901) * (-1241 * 8 + 1259 * 5 + 1 * 3637);
  if (o > i) {
    const r = {};
    return r.width = e, r.height = t, r;
  }
  const n = {};
  return n.width = t, n.height = e, n;
}, Pg = ({ height: i, width: o }) => {
  const t = ko(o, i) * Fu, e = (o - t) / (5 * 479 + -2156 + -237), n = (i - t) / (5066 + 17 * 249 + -3 * 3099), r = {};
  return r.shiftX = e, r.shiftY = n, r.width = t, r.height = t, r;
}, nI = (i) => {
  const { height: o, shiftX: t, shiftY: e, width: n } = Pg(i), r = {};
  return r.shiftX = t / i.width, r.shiftY = e / i.height, r.width = n / i.width, r.height = o / i.height, r;
}, iI = (i, o) => tI(i, o) * Yu, oI = "@innovatrics/dot-common-auto-capture", rI = "6.1.4", aI = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, sI = {
  "@dot/proto-files": "2.0.4",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, gI = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.1"
}, cI = {
  name: oI,
  private: !0,
  version: rI,
  scripts: aI,
  dependencies: sI,
  devDependencies: gI
}, Ng = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), Ys = () => {
  const i = /Android/i.test(navigator.userAgent), o = /Firefox/i.test(navigator.userAgent);
  return i && o;
}, lI = () => {
  const i = navigator.userAgent.includes("Chrome"), o = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return i && o ? !1 : o;
}, Yr = (i) => new Promise((o) => {
  setTimeout(o, i);
}), Cn = (i) => JSON.parse(JSON.stringify(i, (o, t) => typeof t == "number" ? vi(t) : t)), Lg = () => cI.version, Dg = (i) => new URL(i).hostname.replace("www.", ""), xI = () => Dg(window.location.href) === "localhost", Fi = (i) => Object.entries(i).map(([o, t]) => encodeURIComponent(o) + "=" + encodeURIComponent(t)).join("&"), uI = (i, o) => {
  const t = i && performance.now() - i;
  return o >= er.minFrames ? t > er.minDuration : t > er.maxDuration;
}, II = (i, o) => JSON.stringify(i) === JSON.stringify(o) ? o : i, Xs = (i, o) => Math.abs(i - o);
function dI(i, o) {
  let t;
  return (...e) => {
    t === void 0 && (t = setTimeout(() => {
      clearTimeout(t), t = void 0, i(...e);
    }, o));
  };
}
const CI = (i) => i === cg.CONTROL ? !Ng() : !0, fI = (i, o) => {
  const { appState: t, handleAppStateChange: e, handleError: n, isCameraReady: r } = Tn(), [a, s] = Ne(), g = Xe(() => {
    const C = r && o && o.isStreaming && o.getCameraSettings().facingMode;
    return C ? a ?? C === "user" : a ?? CI(i);
  }, [o, a, i, r]);
  fe(() => {
    const C = () => {
      t !== xt.LOADING && e(xt.RUNNING);
    }, u = () => {
      s(a === void 0 ? !g : !a);
    }, p = async () => {
      if (o) {
        e(xt.LOADING);
        try {
          await o.switchCamera(), e(xt.RUNNING);
        } catch (y) {
          if (y instanceof Error) {
            n(re.fromCameraError(y));
            return;
          }
        }
        s(void 0);
      }
    }, m = (y) => {
      var G;
      switch ((G = y.detail) == null ? void 0 : G["instruction"]) {
        case qi.CONTINUE_DETECTION:
          C();
          break;
        case qi.TOGGLE_MIRROR:
          u();
          break;
        case qi.SWITCH_CAMERA:
          p();
          break;
        default:
          return;
      }
    };
    return document.addEventListener(i, m), () => {
      document.removeEventListener(i, m);
    };
  }, [t, o, n, a, e, g, i]);
  const x = {};
  return x.shouldMirror = g, x;
};
class Fg {
  constructor() {
    X(this, "canvasElement");
    X(this, "context");
    this.canvasElement = document.createElement("canvas"), this.context = this.canvasElement.getContext("2d");
  }
  cloneMutable(o) {
    this.canvasElement.width = o.width, this.canvasElement.height = o.height, Nu(this.canvasElement, o);
  }
}
async function Yg() {
  return navigator.mediaDevices.enumerateDevices();
}
async function or() {
  return (await Yg()).filter((o) => o.kind === "videoinput");
}
function rr(i) {
  i.getTracks().forEach((t) => t.stop());
}
function Ms(i) {
  return i.getVideoTracks()[11912 + -11912 * 1];
}
const oo = {};
oo.width = 1920, oo.height = 1080, oo.facingMode = xg.FRONT;
const hI = oo;
var nt;
class Xg {
  constructor({ defaultVideoConstrains: o = hI, minCameraShorterSide: t = Iu } = {}) {
    X(this, "options");
    X(this, "availableCameraProperties", []);
    ce(this, nt, null);
    const e = {};
    e.defaultVideoConstrains = o, e.minCameraShorterSide = t, this.options = e;
  }
  get mediaStream() {
    return M(this, nt);
  }
  get videoTrack() {
    if (M(this, nt)) return Ms(M(this, nt));
  }
  get isCameraActive() {
    var o;
    return !!((o = M(this, nt)) != null && o.active);
  }
  static async requestPermission() {
    const o = {};
    o.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(o);
    rr(t);
  }
  async open(o = {}) {
    Ys() && await Yr(1 * -7806 + -1 * 8609 + 16865), se(this, nt, await navigator.mediaDevices.getUserMedia(o)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const o = await or();
    if (o.length <= 237 * 5 + 1 * -503 + -1 * 681) return;
    const t = this.videoTrack.getConstraints(), e = this.videoTrack.getSettings(), n = o.findIndex((s) => s.deviceId === e.deviceId), r = o[n + (4669 * -1 + -8 * -448 + 1086)] ?? o[440 + -47 * 19 + -453 * -1], a = this.getConstraints(t, r);
    await this.open(a);
  }
  close() {
    M(this, nt) && (rr(M(this, nt)), se(this, nt, null));
  }
  async getProperties() {
    const o = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = o;
    const n = {};
    return n.currentCameraProperties = e, n.availableCameraProperties = this.availableCameraProperties, n;
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
    const o = this.getSettings(), t = await Yg(), e = t.find((n) => n.deviceId === o.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(o) {
    return o === xg.FRONT ? void (1 * 8009 + 1 * -989 + 130 * -54) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return Ng() ? (await or()).find((e) => e.label.includes("back") && e.label.includes("0")) : void (-85 * -103 + 1210 + -9965);
  }
  async collectAvailableCamerasInfo() {
    const o = await or();
    for (const t of o) {
      Ys() && await Yr(450);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const n = {};
        n.video = e;
        const r = await navigator.mediaDevices.getUserMedia(n), a = Ms(r);
        if (!a) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const s = a.getSettings(), g = { ...s };
        g.deviceName = a.label;
        const x = {};
        x.cameraProperties = g;
        const C = x;
        this.availableCameraProperties.push(C), rr(r);
      } catch (e) {
        e instanceof Error && re.logError(e);
      }
    }
  }
  getConstraints(o, t) {
    const e = { ...this.options.defaultVideoConstrains, ...o };
    e.deviceId = t ? { exact: t.deviceId } : void 0;
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
class pI {
  constructor(o, t) {
    X(this, "canvas");
    this.videoHandler = o, this.cameraHandler = t, this.canvas = new Fg();
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async startVideoStream(o = {}) {
    await Xg.requestPermission(), await this.cameraHandler.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(o.facingMode), e = this.cameraHandler.getConstraints(o, t);
    await this.cameraHandler.open(e), lI() && (this.cameraHandler.close(), await this.cameraHandler.open(e)), await this.mountVideoStream();
  }
  takePhoto() {
    var t;
    if (!this.cameraHandler.videoTrack) throw Error("Video track must be initialized to take photo");
    const o = (t = this.cameraHandler.videoTrack) == null ? void 0 : t.getSettings();
    if (!(o != null && o.width)) throw new re("Cant take photo - video width is undefined");
    if (!(o != null && o.height)) throw new re("Cant take photo - video height is undefined");
    if (!this.canvas.context) throw new re("Cant take photo - cant create context");
    return this.canvas.canvasElement.width = o.width, this.canvas.canvasElement.height = o.height, this.canvas.context.drawImage(this.videoHandler.videoElement, 4274 * -2 + 3006 * -2 + -7280 * -2, -15797 + 15797 * 1), { image: this.canvas.canvasElement, timestamp: Date.now() };
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
var pt;
class mI {
  constructor(o) {
    ce(this, pt);
    se(this, pt, o);
  }
  get videoElement() {
    return M(this, pt);
  }
  async play(o) {
    M(this, pt).srcObject = o, await M(this, pt).play();
  }
  stop() {
    M(this, pt).srcObject = null;
  }
  hasSrcObject() {
    return !!M(this, pt).srcObject;
  }
}
pt = new WeakMap();
function AI(i, o) {
  const t = at(), { handleError: e, setIsCameraReady: n } = Tn(), [r, a] = Ne(), s = wn((x) => {
    a((C) => II(x, C));
  }, []);
  fe(() => ((async () => {
    if (!i.current) {
      e(new re("Something went wrong during video initialization"));
      return;
    }
    const C = new mI(i.current), u = new Xg(), p = new pI(C, u);
    try {
      const m = {};
      m.facingMode = o, await p.startVideoStream(m);
    } catch (m) {
      if (m instanceof Error) {
        e(re.fromCameraError(m));
        return;
      }
    }
    n(!0), s(p.getCameraResolution()), t.current = p;
  })(), function() {
    t.current && t.current.stopStreaming(), n(!1);
  }), [o, e, n, i, s]);
  const g = {};
  return g.cameraService = t.current, g.cameraResolution = r, g.onCameraResolutionChange = s, g;
}
function bI(i, o) {
  fe(() => {
    function t() {
      i.current && Ju(o, i.current.getBoundingClientRect());
    }
    return t(), window.addEventListener("resize", t), () => {
      window.removeEventListener("resize", t);
    };
  }, [i, o]);
}
class ha extends Array {
  constructor(t) {
    super();
    X(this, "size");
    this.size = t;
  }
  pushFixed(...t) {
    if (t.length > this.size) {
      const e = t.slice(-this.size);
      this.push(...e);
      return;
    }
    this.length === this.size && this.splice(-4990 * 1 + 2 * -524 + 6038, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(781 * -11 + 7726 + -5 * -173);
  }
}
const yI = (i, o) => {
  const { height: t, shiftX: e, shiftY: n, width: r } = o;
  return !(i.x < e || i.x > e + r || i.y < n || i.y > n + t);
}, vI = (i, o) => Object.values(i).every((t) => yI(t, o));
function wI(i) {
  return vi(Math.abs(i));
}
const SI = () => {
  const [i, o] = Ne(null), t = at(new ha(-1 * 4111 + -5483 + 9599));
  function e(r) {
    const { z: a } = r.accelerationIncludingGravity || {};
    if (!a) return;
    t.current.pushFixed(wI(a));
    const s = vi(Tg(t.current)), g = {};
    g.z = s, o(g);
  }
  fe(() => (window.addEventListener("devicemotion", dI(e, mu), !0), () => {
    window.removeEventListener("devicemotion", e, !0);
  }), []);
  const n = {};
  return n.acceleration = i, n;
};
function BI({ analytics: i, cameraFacing: o, controller: t, createProtoMessage: e, onPhotoTaken: n, sessionToken: r }) {
  const a = at(null), { isLicenseValidated: s } = ua(), { appState: g, handleAppStateChange: x, handleError: C } = Tn(), { cameraResolution: u, cameraService: p, onCameraResolutionChange: m } = AI(a, o), y = Wn(void 0);
  fe(() => {
    p != null && p["isStreaming"] && (t != null && t["isDetectorInitialized"]) && s && x(xt.RUNNING);
  }, [p == null ? void 0 : p["isStreaming"], t == null ? void 0 : t["isDetectorInitialized"], x, s]), fe(() => {
    if (g !== xt.RUNNING) return;
    if (!p || !t) throw new re("Cannot start detection");
    let K = -9546 + -37 * -258, S = !1, W = 980 * -5 + 8916 + 1004 * -4;
    const R = new ha(741 + 237 * -3);
    t.clearImagesForDuplicateDetection();
    async function J({ cameraService: B, canvasImage: U, controller: ue, detection: z, detectionRecord: Ie, onPhotoTaken: de }) {
      const we = {};
      we.width = U.width, we.height = U.height;
      const qe = we, ae = await kg(U), Se = await B.getCameraProperties(), Ke = { ...Se, detectionRecord: Ie, hashedDetectedImagesWithTimestamp: ue.getImagesForDuplicateDetection() }, je = {};
      je.sessionToken = r, je.web = Ke;
      const Oe = je, he = await e(ae, Oe), Ge = {};
      Ge.detection = z, Ge.imageResolution = qe;
      const Ve = {};
      Ve.image = ae, Ve.data = Ge;
      const pe = Ve, Ze = {};
      Ze.imageData = pe, Ze.content = he, Ze.webMetadata = Ke, Ze.controller = ue, de(Ze);
    }
    async function P({ cameraService: B, controller: U }) {
      const ue = Date.now();
      for (; B.isStreaming && !S; ) {
        if (uI(K, W)) {
          const { detection: Oe, image: he } = U.getBestImage() || {}, Ge = U.getDetectionRecord();
          if (he && Oe) {
            const Ve = Date.now(), pe = Tg(R), Ze = {};
            Ze.width = he.width, Ze.height = he.height, i == null || i.trackCaptureProcess({ detection: Oe, imageResolution: Ze, deviceName: await B.getDeviceName(), averageFps: pe, captureProcessDurationInMs: Ve - ue, facingMode: B.getCameraSettings().facingMode, instructionSet: await U.getInstructionSet() }), x(xt.WAITING);
            const Ee = {};
            Ee.cameraService = B, Ee.controller = U, Ee.canvasImage = he, Ee.detection = Oe, Ee.detectionRecord = Ge, Ee.onPhotoTaken = n, await J(Ee), U.restart();
          } else C(new re("Something went wrong during capturing an image"));
          return;
        }
        const z = B.takePhoto(), Ie = {};
        Ie.width = z.image.width, Ie.height = z.image.height;
        const de = Ie;
        let we;
        try {
          we = await U.processImage(z);
        } catch (Oe) {
          Oe instanceof Error && C(re.fromCameraError(Oe));
          return;
        }
        const qe = Date.now(), ae = qe - z.timestamp, Se = vi((6 * 1149 + 3774 + 2 * -4834) / ae);
        R.pushFixed(Se);
        const Ke = {};
        Ke.processedImage = we, Ke.detectionTime = ae, Ke.fps = Se, Ke.resolution = de, Ke.samVersion = U.samVersion;
        const je = Ke;
        y.value = je, we.isInCandidateSelection && (K === 0 && (K = performance.now()), W++), m(de), await Yr(Math.max(Ps.max - ae, Ps.min));
      }
    }
    const D = {};
    return D.controller = t, D.cameraService = p, P(D), () => {
      S = !0;
    };
  }, [i, e, g, p, t, x, C, n, m, y, r]);
  const G = {};
  return G.videoRef = a, G.cameraResolution = u, G.cameraService = p, G.detectionDetails = y, G;
}
const pa = (i) => {
  const { height: o, width: t } = Rg(i), e = (i.width - t) / (10693 + -10691 * 1), n = (i.height - o) / 2, r = {};
  return r.shiftX = e, r.shiftY = n, r.width = t, r.height = o, r;
}, Mg = (i, o) => {
  const { height: t, width: e } = Rg(i), n = ko(i.width, i.height), r = e - n * o * (676 * -5 + 2829 + -7 * -79), a = t - n * o * (1673 * -2 + -8620 + 11968), s = (i.width - r) / (4231 * 1 + -23 * -231 + -9542 * 1), g = (i.height - a) / (31 * -251 + -2719 + 10502), x = {};
  return x.shiftX = s, x.shiftY = g, x.width = r, x.height = a, x;
}, xn = (i, o) => {
  const { shiftX: t, shiftY: e } = pa(i), n = {};
  return n.x = o.x + t, n.y = o.y + e, n;
}, GI = (i, o) => ({ ...o, leftEye: { ...o.leftEye, center: xn(i, o.leftEye.center) }, rightEye: { ...o.rightEye, center: xn(i, o.rightEye.center) }, mouth: { ...o.mouth, center: xn(i, o.mouth.center) }, topLeft: xn(i, o.topLeft), bottomRight: xn(i, o.bottomRight), faceCenter: xn(i, o.faceCenter) }), jg = (i, o) => {
  const { faceCenter: t, faceSize: e } = i, n = iI(e, o), r = {};
  r.x = t.x, r.y = t.y - n;
  const a = {};
  a.x = t.x + n, a.y = t.y;
  const s = {};
  s.x = t.x, s.y = t.y + n;
  const g = {};
  g.x = t.x - n, g.y = t.y;
  const x = {};
  return x.top = r, x.right = a, x.bottom = s, x.left = g, Cn(x);
}, ZI = (i, o) => {
  const { bottomRight: t, faceCenter: e, topLeft: n } = o, r = {
    topLeft: n,
    width: t.x - n.x,
    height: t.y - n.y
  };
  Kg(i, r, "rgba(255, 0, 0, 0.3)", !0), ti(i, e, "lime");
}, HI = (i, o, t) => {
  const e = jg(o, t);
  Object.values(e).map((n) => ti(i, n, "orange"));
}, WI = ({ appTier: i, cameraResolution: o, detectionDetails: t, isImageMirror: e }) => {
  const {
    faceCameraOptions: { thresholds: n }
  } = Vg(), r = at(null);
  if (fe(() => {
    if (!r.current)
      return;
    r.current.width = o.width, r.current.height = o.height, eI(r.current);
    const y = pa(o), G = Mg(o, n.outOfBoundsThreshold), K = Pg(o);
    t.value && (ZI(r.current, t.value.processedImage.detectedFace), HI(
      r.current,
      t.value.processedImage.detectedFace,
      o
    ), ir(r.current, y, "lime"), ir(r.current, G, "yellow"), ir(r.current, K, "blue"), ti(r.current, t.value.processedImage.detectedFace.leftEye.center, "cyan"), ti(r.current, t.value.processedImage.detectedFace.rightEye.center, "cyan"), ti(r.current, t.value.processedImage.detectedFace.mouth.center, "cyan"));
  }, [o, n, t.value]), !t.value)
    return null;
  const {
    detectionTime: a,
    fps: s,
    processedImage: { detectedFace: g, instructionCode: x, invalidValidators: C },
    resolution: u,
    samVersion: p
  } = t.value, m = {
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
    Resolution: JSON.stringify(u),
    "Component version": "6.1.4"
  };
  return p && (m["SAM version"] = p), C.length > 0 && (m["Invalid validators"] = C.join(", ")), /* @__PURE__ */ H(
    Qx,
    {
      ref: r,
      cameraResolution: o,
      detectionDetails: m,
      isImageMirror: e
    }
  );
};
function kI(i) {
  return /* @__PURE__ */ H("rect", { fill: "#000", ...i, rx: "50%" });
}
function KI(i) {
  const [o, t] = Ne(!1), e = () => t((a) => !a), n = "" + o;
  Kn(() => {
    function a() {
      if (!i.current) return;
      const C = new MutationObserver(() => {
        e();
      }), u = {};
      return u.childList = !0, u.subtree = !0, u.attributes = !0, C.observe(i.current, u), C;
    }
    function s() {
      var p;
      if (!((p = i.current) != null && p["parentElement"])) return;
      const C = new MutationObserver((m) => {
        m.find((G) => {
          for (const K of G.removedNodes)
            if (K === i.current) return !0;
        }) && e(), m.forEach((G) => {
          G.addedNodes.forEach((K) => {
            var S;
            (S = K.parentElement) == null || S.removeChild(K);
          });
        });
      }), u = {};
      return u.childList = !0, C.observe(i.current.parentElement, u), C;
    }
    const g = a(), x = s();
    return () => {
      x == null || x.disconnect(), g == null || g.disconnect();
    };
  });
  const r = {};
  return r.key = n, r;
}
const OI = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function VI({ cutOut: i, height: o, width: t }) {
  const e = at(null), { key: n } = KI(e);
  return /* @__PURE__ */ H("div", { ref: e, style: OI, children: /* @__PURE__ */ H("svg", { viewBox: `0 0 ${t} ${o}`, children: [
    /* @__PURE__ */ H("defs", { children: [
      /* @__PURE__ */ H("mask", { id: "placeholder", children: [
        /* @__PURE__ */ H("rect", { fill: "#fff", height: "100%", width: "100%" }),
        i
      ] }),
      /* @__PURE__ */ H(
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
            /* @__PURE__ */ H("g", { transform: "translate(100, 170)", children: [
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M4.40992 0C2.42825 0 0.833252 1.59517 0.833252 3.57704C0.833252 5.55891 2.42825 7.15408 4.40992 7.15408C6.39158 7.15408 7.98658 5.55891 7.98658 3.57704C7.93825 1.59517 6.34325 0 4.40992 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              )
            ] }),
            /* @__PURE__ */ H("g", { transform: "translate(10, 0)", children: [
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ H(
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
    /* @__PURE__ */ H("rect", { fill: "url(#innooverlay)", height: "100%", mask: "url(#placeholder)", width: "100%" })
  ] }) }, n);
}
function EI({ fullOverlay: i, resolution: o }) {
  const t = nI(o), e = `${t.height * 100}%`, n = `${t.width * 100}%`, r = `${t.shiftX * 100}%`, a = `${t.shiftY * 100}%`;
  return /* @__PURE__ */ H(
    VI,
    {
      cutOut: i || /* @__PURE__ */ H(kI, { height: e, width: n, x: r, y: a }),
      height: o.height,
      width: o.width
    }
  );
}
const TI = async () => WebAssembly.validate(new Uint8Array([99 * 16 + -6056 + 4472, 97, 1823 * 5 + 620 * -1 + -8380, 6330 * -1 + 1 * -1175 + -2 * -3807, 1, 8275 + -1 * 8275, -1383 + 535 * -1 + -1 * -1918, -3712 + 32 * 116, 3728 + 239 * 30 + -10897 * 1, -3517 * -1 + -1 * 6339 + 2827, -453 * 3 + 1618 * 3 + 1 * -3494, 9701 + 17 * -565, -1854 * -2 + -1 * 2990 + 718 * -1, -3100 + 4211 * 1 + -1110, 2837 * -2 + 1 * -7921 + 13718, -1 * 647 + 1 * -6075 + 1345 * 5, -402 + -83 * -89 + -6983, 3298 * 1 + -5908 + -373 * -7, -7355 * 1 + -1 * 6614 + 13969, -114 * 60 + -8171 * 1 + 15021, 631 * -14 + 6990 + -1854 * -1, 1004 + -2 * -4461 + 5 * -1985, -1 * 4106 + 13 * -743 + 3 * 4591, -6043 * 1 + -4881 + 10924 * 1, -2758 * 2 + 64 * 91 + -243, -6147 + 255 * -11 + 8952, 123 * -17 + 3584 + 40 * -31, 8751 + 7 * -1427 + 1 * 1253, 253, 1699 * -4 + 6663 + 7 * 33, 3887 + -2 * -1156 + -182 * 34]));
async function RI() {
  const i = {};
  i.name = fg, i.length = 256;
  const o = await window.crypto.subtle.generateKey(i, !0, ["encrypt", "decrypt"]), t = Uint8Array.from(Array(-3 * 1863 + -1817 * 5 + 10 * 1469).fill(-7946 * -1 + -1765 + -6181 * 1)), e = window.crypto.getRandomValues(t), n = {};
  return n.key = o, n.iv = e, n;
}
async function PI(i) {
  const { iv: o, key: t } = await RI(), e = {};
  e.name = fg, e.iv = o;
  const n = await window.crypto.subtle.encrypt(e, t, i), r = await window.crypto.subtle.exportKey("raw", t), a = {};
  return a.message = n, a.key = r, a.iv = o, a;
}
function NI(i) {
  const o = new ArrayBuffer(i.length), t = new Uint8Array(o);
  for (let e = -8 * -889 + -19 * 58 + 10 * -601, n = i.length; e < n; e++)
    t[e] = i.charCodeAt(e);
  return o;
}
function LI() {
  const i = "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", o = window.atob(i), t = window.atob(o), e = NI(t), n = {};
  return n.name = hg, n.hash = fu, window.crypto.subtle.importKey("spki", e, n, !0, ["encrypt"]);
}
async function DI(i) {
  const o = await LI(), t = {};
  return t.name = hg, window.crypto.subtle.encrypt(t, o, i);
}
async function FI(i) {
  const { iv: o, key: t, message: e } = await PI(i), n = await DI(t), r = {};
  return r.key = n, r.iv = o, r.message = e, r;
}
async function YI(i) {
  const o = await window.crypto.subtle.digest("SHA-1", i);
  return Array.from(new Uint8Array(o)).map((t) => t.toString(-1 * 4207 + -7507 * -1 + -4 * 821).padStart(29 * 229 + -9474 * 1 + -35 * -81, "0")).join("");
}
class XI {
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
    X(this, "imagesWithTimestampForDuplicateDetection", new ha(du));
  }
  async initDetector(o) {
    await this.detector.initSamModule(location.href, o);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  async getInstructionSet() {
    return await TI() ? Es.SIMD : Es.NO_SIMD;
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
    return o === Au;
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
    const e = o.length / pu, n = e / (523 * -19 + -1 * 7735 + 2 * 8837), r = o.length / (-13049 + -31 * -421), a = await YI(o.slice(r - n, r + n)), s = {};
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
    var s = "./this.program", g = !(8405 + 2 * -4202), x = !(-1195 + 1289 * -4 + 16 * 397);
    g = typeof window == "object", x = typeof importScripts == "function";
    var C = "", u;
    (g || x) && (x ? C = self.location.href : document.currentScript && (C = document.currentScript.src), i && (C = i), C.indexOf("blob:") !== 0 ? C = C.substr(1 * -4349 + -1 * -9603 + 37 * -142, C.lastIndexOf("/") + (-1 * 1522 + 4489 * -1 + 1503 * 4)) : C = "", x && (u = function(c) {
      var l = new XMLHttpRequest();
      return l.open("GET", c, !(8530 + 3 * 89 + -8796)), l.responseType = "arraybuffer", l.send(null), new Uint8Array(l.response);
    }));
    var p = t.printErr || console.warn.bind(console);
    for (a in r) r.hasOwnProperty(a) && (t[a] = r[a]);
    r = null, t.thisProgram && (s = t.thisProgram);
    var m;
    t.wasmBinary && (m = t.wasmBinary), t.noExitRuntime && t.noExitRuntime, typeof WebAssembly != "object" && Je("no native wasm support detected");
    var y, G = !1;
    function K(c) {
      c || Je("Assertion failed: undefined");
    }
    var S = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
    function W(c, l, I) {
      var f = de;
      if (4601 * 2 + 95 * -46 + -4832 < I) {
        I = l + I - (-16797 + 37 * 454);
        for (var A = 11 * 278 + -621 * 9 + 2531; A < c.length; ++A) {
          var b = c.charCodeAt(A);
          if (59242 * 1 + 107594 + -130 * 858 <= b && 57343 >= b) {
            var Z = c.charCodeAt(++A);
            b = -120802 + -2 * -93169 + ((b & 1510 * 2 + -9812 + 521 * 15) << 3807 + 593 * 11 + -1032 * 10) | Z & -6769 + -87 * 3 + 8053;
          }
          if (-2063 * 3 + -1 * -1082 + 5234 * 1 >= b) {
            if (l >= I) break;
            f[l++] = b;
          } else {
            if (1 * 6598 + 2181 + 11 * -612 >= b) {
              if (l + (-2288 + 167 * 43 + -4 * 1223) >= I) break;
              f[l++] = 4014 + -6 * 637 | b >> 4 * 839 + 227 * -2 + -2896;
            } else {
              if (1673 * -51 + 1 * 23603 + 127255 >= b) {
                if (l + (-6068 + -6070 * -1) >= I) break;
                f[l++] = 1 * -4780 + -8941 * -1 + -3937 | b >> -10107 + 3 * 3373;
              } else {
                if (l + (-1913 + -3023 * 3 + 10985) >= I) break;
                f[l++] = -27 * 191 + 3 * 1663 + 408 | b >> 79 * 116 + 7866 + -2 * 8506, f[l++] = -2279 + 83 * 29 | b >> -4314 + -1 * 9346 + 13672 & -14126 + 14189 * 1;
              }
              f[l++] = -1 * -2509 + 5807 + -4094 * 2 | b >> -1332 * 3 + -5072 + 9074 & -9542 + -373 * -17 + 3264;
            }
            f[l++] = 1907 * 5 + -2170 + 7237 * -1 | b & -2989 + 2269 * 4 + -502 * 12;
          }
        }
        f[l] = 7217 + -263 * 33 + -17 * -86;
      }
    }
    var R = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void (-2500 + 7149 * 1 + 4649 * -1);
    function J(c, l) {
      for (var I = c >> 1, f = I + l / (2211 * 2 + 6381 + 10801 * -1); !(I >= f) && qe[I]; ) ++I;
      if (I <<= -7649 + 9456 * -1 + 1 * 17106, 32 < I - c && R) return R.decode(de.subarray(c, I));
      for (I = 0, f = ""; ; ) {
        var A = we[c + 2 * I >> 1];
        if (1464 + -24 * 61 == A || I == l / (6574 + -3286 * 2)) return f;
        ++I, f += String.fromCharCode(A);
      }
    }
    function P(c, l, I) {
      if (void (5494 + 134 * -41) === I && (I = -3748325479 * 1 + 326849377 * -11 + -1 * -9491152273), -41 * -21 + -9342 + 8483 > I) return 593 * -3 + 1368 + 1 * 411;
      I -= 3757 * -2 + 1 * 4316 + 3200;
      var f = l;
      I = I < (1359 * -7 + -5 * 838 + 13705) * c.length ? I / (3137 * -1 + -2026 + 1033 * 5) : c.length;
      for (var A = 0; A < I; ++A) we[l >> 283 * 10 + 7095 + -9924] = c.charCodeAt(A), l += -90 * -97 + -3602 + -5126;
      return we[l >> 9268 + -587 * 8 + -653 * 7] = 2588 + -615 * 11 + 4177, l - f;
    }
    function D(c) {
      return (1605 * 5 + -8903 + 880) * c.length;
    }
    function B(c, l) {
      for (var I = 5751 + 29 * 116 + -9115, f = ""; !(I >= l / (-5174 * 1 + -569 + 5747)); ) {
        var A = ae[c + 4 * I >> 2];
        if (6 * -518 + 4 * -1243 + -16 * -505 == A) break;
        ++I, -6 * -11087 + -116828 + 115842 <= A ? (A -= -15 * 163 + -5613 + 73594, f += String.fromCharCode(13920 + 2586 * 16 | A >> -24 * 181 + 2 * -1861 + -2 * -4038, -86194 + -71257 * -2 | A & 4840 + -347 * 11)) : f += String.fromCharCode(A);
      }
      return f;
    }
    function U(c, l, I) {
      if (void (-3 * -535 + -2513 * -1 + 4118 * -1) === I && (I = 159811 * -10217 + -401 * -9313207 + -19 * -2404033), 7815 + -1 * -2217 + 2507 * -4 > I) return -8819 + 2 * -1522 + -11863 * -1;
      var f = l;
      I = f + I - (-8330 + -461 * -11 + 3263);
      for (var A = -926 * 1 + 1736 + -810; A < c.length; ++A) {
        var b = c.charCodeAt(A);
        if (-11882 + 107 * 924 + -31690 <= b && 34334 * 1 + -15318 + 38327 * 1 >= b) {
          var Z = c.charCodeAt(++A);
          b = 57 * -638 + 1 * 49171 + 52731 + ((b & -2963 * 3 + 152 + -488 * -20) << 10) | Z & -11350 + 1 * 12373;
        }
        if (ae[l >> 1 * 7597 + 1416 * -4 + 1931 * -1] = b, l += 4, l + (5 * 113 + -9640 + 9079) > I) break;
      }
      return ae[l >> 3536 + -6 * 1188 + -3594 * -1] = 1894 * -4 + -3389 + 3655 * 3, l - f;
    }
    function ue(c) {
      for (var l = 518 * -9 + 5 * -1318 + 11252, I = -1042 * 9 + 5 * -1546 + -52 * -329; I < c.length; ++I) {
        var f = c.charCodeAt(I);
        16717 * 3 + 102003 + -96858 <= f && -5552 + 1238 * -3 + 66609 * 1 >= f && ++I, l += 4;
      }
      return l;
    }
    var z, Ie, de, we, qe, ae, Se, Ke, je;
    function Oe(c) {
      z = c, t.HEAP8 = Ie = new Int8Array(c), t.HEAP16 = we = new Int16Array(c), t.HEAP32 = ae = new Int32Array(c), t.HEAPU8 = de = new Uint8Array(c), t.HEAPU16 = qe = new Uint16Array(c), t.HEAPU32 = Se = new Uint32Array(c), t.HEAPF32 = Ke = new Float32Array(c), t.HEAPF64 = je = new Float64Array(c);
    }
    var he = t.INITIAL_MEMORY || 255659 * 31 + -961 * -4249 + 103663 * 46, Ge = {};
    Ge.initial = he / (-1 * -90323 + 29772 + -54559), Ge.maximum = 32768, t.wasmMemory ? y = t.wasmMemory : y = new WebAssembly.Memory(Ge), y && (z = y.buffer), he = z.byteLength, Oe(z);
    var Ve = [], pe = [], Ze = [], Ee = [];
    function tn() {
      var c = t.preRun.shift();
      Ve.unshift(c);
    }
    var Le = 1021 * -4 + 4216 + -132, st = null;
    t.preloadedImages = {}, t.preloadedAudios = {};
    function Je(c) {
      throw t.onAbort && t.onAbort(c), p(c), G = !(5581 + 5581 * -1), c = new WebAssembly.RuntimeError("abort(" + c + "). Build with -s ASSERTIONS=1 for more info."), n(c), c;
    }
    function Ot(c) {
      var l = et;
      return String.prototype.startsWith ? l.startsWith(c) : l.indexOf(c) === 0;
    }
    function gt() {
      return Ot("data:application/octet-stream;base64,");
    }
    var et = "sam.wasm";
    if (!gt()) {
      var Vt = et;
      et = t.locateFile ? t.locateFile(Vt, C) : C + Vt;
    }
    function tt() {
      try {
        if (m) return new Uint8Array(m);
        if (u) return u(et);
        throw "both async and sync fetching of the wasm failed";
      } catch (c) {
        Je(c);
      }
    }
    function mc() {
      var c = {};
      return c.credentials = "same-origin", m || !g && !x || typeof fetch != "function" || Ot("file://") ? Promise.resolve().then(tt) : fetch(et, c).then(function(l) {
        if (!l.ok) throw "failed to load wasm binary file at '" + et + "'";
        return l.arrayBuffer();
      }).catch(function() {
        return tt();
      });
    }
    function Si(c) {
      for (; 31 * -137 + -3364 * -2 + 3 * -827 < c.length; ) {
        var l = c.shift();
        if (typeof l == "function") l(t);
        else {
          var I = l.Ba;
          typeof I == "number" ? void (-5 * -968 + 33 * -103 + -1441) === l.ta ? Vo("v", I)() : Vo("vi", I)(l.ta) : I(void (38 * -30 + -1241 + 2381) === l.ta ? null : l.ta);
        }
      }
    }
    function Vo(c, l) {
      var I = [];
      return function() {
        I.length = arguments.length;
        for (var f = 0; f < arguments.length; f++) I[f] = arguments[f];
        return I && I.length ? t["dynCall_" + c].apply(null, [l].concat(I)) : t["dynCall_" + c].call(null, l);
      };
    }
    function Ac(c) {
      this.da = c - (1 * 5975 + -1 * -4129 + 97 * -104), this.Oa = function(l) {
        ae[this.da + (13393 + -13385 * 1) >> 1 * -4299 + -790 + 5091] = l;
      }, this.La = function(l) {
        ae[this.da + (-13322 + -6661 * -2) >> 8082 + -9 * -258 + -7 * 1486] = l;
      }, this.Ma = function() {
        ae[this.da + (-1 * 2060 + -4161 + 75 * 83) >> -1 * 1083 + 5348 + -4263] = 1 * 23 + -4921 + 62 * 79;
      }, this.Ka = function() {
        Ie[this.da + (1794 + -1 * 8021 + 367 * 17) >> -97 * -31 + -3 * 3209 + 1324 * 5] = 8737 * 1 + 1601 * -4 + -2333;
      }, this.Na = function() {
        Ie[this.da + (2 * 1544 + -2817 + -258) >> 132 * -24 + -756 * 1 + -36 * -109] = -55 * -178 + 3 * 1689 + -14857;
      }, this.Fa = function(l, I) {
        this.Oa(l), this.La(I), this.Ma(), this.Ka(), this.Na();
      };
    }
    function Bi() {
      return 0 < Bi.xa;
    }
    function Eo(c) {
      switch (c) {
        case 3 * -415 + 2962 * -3 + 10132:
          return 44 * 41 + 15 * 633 + 11299 * -1;
        case 5504 + -956 * -1 + 3229 * -2:
          return 13570 + 13569 * -1;
        case -2533 + 1 * 109 + 2 * 1214:
          return 2;
        case 73 * -84 + -4107 + 10247:
          return -59 * -161 + -2138 * -3 + -74 * 215;
        default:
          throw new TypeError("Unknown type size: " + c);
      }
    }
    var wa = void (-3385 + 1795 * 1 + -53 * -30);
    function Te(c) {
      for (var l = ""; de[c]; ) l += wa[de[c++]];
      return l;
    }
    var nn = {}, Et = {}, Gi = {};
    function To(c) {
      if (void (297 + 297 * -1) === c) return "_unknown";
      c = c.replace(/[^a-zA-Z0-9_]/g, "$");
      var l = c.charCodeAt(13090 + -238 * 55);
      return 48 <= l && -2405 + 2656 * -1 + -5118 * -1 >= l ? "_" + c : c;
    }
    function Ro(c, l) {
      return c = To(c), new Function("body", "return function " + c + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(l);
    }
    function Po(c) {
      var l = Error, I = Ro(c, function(f) {
        this.name = c, this.message = f, f = Error(f).stack, f !== void 0 && (this.stack = this.toString() + `
` + f.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return I.prototype = Object.create(l.prototype), I.prototype.constructor = I, I.prototype.toString = function() {
        return void (-1231 + -1 * -1340 + -109) === this.message ? this.name : this.name + ": " + this.message;
      }, I;
    }
    var on = void (7855 + 1 * 8994 + 2407 * -7);
    function j(c) {
      throw new on(c);
    }
    var Sa = void (3608 + -1703 * -3 + 23 * -379);
    function Zi(c) {
      throw new Sa(c);
    }
    function rn(c, l, I) {
      function f(w) {
        w = I(w), w.length !== c.length && Zi("Mismatched type converter count");
        for (var k = -1061 * 6 + 2950 * 2 + 466; k < c.length; ++k) dt(c[k], w[k]);
      }
      c.forEach(function(w) {
        Gi[w] = l;
      });
      var A = Array(l.length), b = [], Z = 6283 + -6283 * 1;
      l.forEach(function(w, k) {
        Et.hasOwnProperty(w) ? A[k] = Et[w] : (b.push(w), nn.hasOwnProperty(w) || (nn[w] = []), nn[w].push(function() {
          A[k] = Et[w], ++Z, Z === b.length && f(A);
        }));
      }), 3 * 95 + -6126 + 5841 === b.length && f(A);
    }
    function dt(c, l, I) {
      if (I = I || {}, !("argPackAdvance" in l)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var f = l.name;
      if (c || j('type "' + f + '" must have a positive integer typeid pointer'), Et.hasOwnProperty(c)) {
        if (I.Ea) return;
        j("Cannot register type '" + f + "' twice");
      }
      Et[c] = l, delete Gi[c], nn.hasOwnProperty(c) && (l = nn[c], delete nn[c], l.forEach(function(A) {
        A();
      }));
    }
    function bc(c) {
      var l = {};
      return l.count = c.count, l.oa = c.oa, l.pa = c.pa, l.da = c.da, l.fa = c.fa, l.ga = c.ga, l.ha = c.ha, l;
    }
    function No(c) {
      j(c.A.fa.ea.name + " instance already deleted");
    }
    var Lo = !(-1 * 2090 + 1 * -8002 + 10093);
    function Ba() {
    }
    function Ga(c) {
      --c.count.value, 4649 + 4649 * -1 === c.count.value && (c.ga ? c.ha.na(c.ga) : c.fa.ea.na(c.da));
    }
    function Rn(c) {
      return typeof FinalizationGroup > "u" ? (Rn = function(l) {
        return l;
      }, c) : (Lo = new FinalizationGroup(function(l) {
        for (var I = l.next(); !I.done; I = l.next()) I = I.value, I.da ? Ga(I) : console.warn("object already deleted: " + I.da);
      }), Rn = function(l) {
        return Lo.register(l, l.A, l.A), l;
      }, Ba = function(l) {
        Lo.unregister(l.A);
      }, Rn(c));
    }
    var Pn = void (1683 * -1 + -543 * 11 + -264 * -29), Nn = [];
    function Do() {
      for (; Nn.length; ) {
        var c = Nn.pop();
        c.A.oa = !(-2883 + -112 * 61 + 9716 * 1), c.delete();
      }
    }
    function wt() {
    }
    var Za = {};
    function yc(c, l) {
      var I = t;
      if (I[c].ja === void 0) {
        var f = I[c];
        I[c] = function() {
          return I[c].ja.hasOwnProperty(arguments.length) || j("Function '" + l + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + I[c].ja + ")!"), I[c].ja[arguments.length].apply(this, arguments);
        }, I[c].ja = [], I[c].ja[f.ya] = f;
      }
    }
    function Ha(c, l, I) {
      t.hasOwnProperty(c) ? ((void (-259 * -18 + 291 * 1 + -1 * 4953) === I || void (1 * 6807 + 1 * 3529 + -10336) !== t[c].ja && void (8 * 166 + -1 * -3691 + -717 * 7) !== t[c].ja[I]) && j("Cannot register public name '" + c + "' twice"), yc(c, c), t.hasOwnProperty(I) && j("Cannot register multiple overloads of a function with the same number of arguments (" + I + ")!"), t[c].ja[I] = l) : (t[c] = l, void (19 * 389 + -6418 + -973) !== I && (t[c].Ra = I));
    }
    function vc(c, l, I, f, A, b, Z, w) {
      this.name = c, this.constructor = l, this.ma = I, this.na = f, this.ia = A, this.Ca = b, this.qa = Z, this.Aa = w;
    }
    function Hi(c, l, I) {
      for (; l !== I; ) l.qa || j("Expected null or instance of " + I.name + ", got an instance of " + l.name), c = l.qa(c), l = l.ia;
      return c;
    }
    function wc(c, l) {
      return l === null ? (this.ua && j("null is not a valid " + this.name), 8 * -733 + -3 * -2669 + 1 * -2143) : (l.A || j('Cannot pass "' + sn(l) + '" as a ' + this.name), l.A.da || j("Cannot pass deleted object as a pointer of type " + this.name), Hi(l.A.da, l.A.fa.ea, this.ea));
    }
    function Sc(c, l) {
      if (l === null) {
        if (this.ua && j("null is not a valid " + this.name), this.sa) {
          var I = this.Ha();
          return c !== null && c.push(this.na, I), I;
        }
        return 0;
      }
      if (l.A || j('Cannot pass "' + sn(l) + '" as a ' + this.name), l.A.da || j("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && l.A.fa.ra && j("Cannot convert argument of type " + (l.A.ha ? l.A.ha.name : l.A.fa.name) + " to parameter type " + this.name), I = Hi(l.A.da, l.A.fa.ea, this.ea), this.sa) switch (void (-197 * 42 + 5721 + -23 * -111) === l.A.ga && j("Passing raw pointer to smart pointer is illegal"), this.Pa) {
        case -4132 + 4132 * 1:
          l.A.ha === this ? I = l.A.ga : j("Cannot convert argument of type " + (l.A.ha ? l.A.ha.name : l.A.fa.name) + " to parameter type " + this.name);
          break;
        case 19 * 178 + -3238 * 1 + -143:
          I = l.A.ga;
          break;
        case 2:
          if (l.A.ha === this) I = l.A.ga;
          else {
            var f = l.clone();
            I = this.Ia(I, an(function() {
              f.delete();
            })), c !== null && c.push(this.na, I);
          }
          break;
        default:
          j("Unsupporting sharing policy");
      }
      return I;
    }
    function Bc(c, l) {
      return l === null ? (this.ua && j("null is not a valid " + this.name), -9189 * -1 + -9282 + 93) : (l.A || j('Cannot pass "' + sn(l) + '" as a ' + this.name), l.A.da || j("Cannot pass deleted object as a pointer of type " + this.name), l.A.fa.ra && j("Cannot convert argument of type " + l.A.fa.name + " to parameter type " + this.name), Hi(l.A.da, l.A.fa.ea, this.ea));
    }
    function Wi(c) {
      return this.fromWireType(Se[c >> -8078 + 14 * 237 + 4762]);
    }
    function Wa(c, l, I) {
      return l === I ? c : void (5272 * 1 + -8723 + -203 * -17) === I.ia ? null : (c = Wa(c, l, I.ia), c === null ? null : I.Aa(c));
    }
    var Ln = {};
    function Gc(c, l) {
      for (void (-6537 + 6537 * 1) === l && j("ptr should not be undefined"); c.ia; ) l = c.qa(l), c = c.ia;
      return Ln[l];
    }
    function ki(c, l) {
      l.fa && l.da || Zi("makeClassHandle requires ptr and ptrType"), !!l.ha != !!l.ga && Zi("Both smartPtrType and smartPtr must be specified");
      var I = {};
      I.value = 1, l.count = I;
      var f = {};
      f.value = l;
      var A = {};
      return A.A = f, Rn(Object.create(c, A));
    }
    function Ct(c, l, I, f) {
      this.name = c, this.ea = l, this.ua = I, this.ra = f, this.sa = !(5791 + -6 * -1348 + -54 * 257), this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void (671 * 6 + -912 + -3114), void (-5741 * 1 + 2574 + 3167) !== l.ia ? this.toWireType = Sc : (this.toWireType = f ? wc : Bc, this.ka = null);
    }
    function ka(c, l, I) {
      t.hasOwnProperty(c) || Zi("Replacing nonexistant public symbol"), void (-2991 * -1 + 127 * -61 + -1189 * -4) !== t[c].ja && void (-5784 * 1 + 419 * -1 + 6203) !== I ? t[c].ja[I] = l : (t[c] = l, t[c].ya = I);
    }
    function St(c, l) {
      c = Te(c);
      var I = Vo(c, l);
      return typeof I != "function" && j("unknown function pointer with signature " + c + ": " + l), I;
    }
    var Ka = void 0;
    function Oa(c) {
      c = Ja(c);
      var l = Te(c);
      return ft(c), l;
    }
    function Dn(c, l) {
      function I(b) {
        A[b] || Et[b] || (Gi[b] ? Gi[b].forEach(I) : (f.push(b), A[b] = !(-602 * 1 + -9 * -189 + -1099)));
      }
      var f = [], A = {};
      throw l.forEach(I), new Ka(c + ": " + f.map(Oa).join([", "]));
    }
    function Va(c, l) {
      for (var I = [], f = -3399 + 1 * -529 + 3928; f < c; f++) I.push(ae[(l >> -9666 + 174 * 32 + 4100) + f]);
      return I;
    }
    function Ki(c) {
      for (; c.length; ) {
        var l = c.pop();
        c.pop()(l);
      }
    }
    function Ea(c, l, I) {
      return c instanceof Object || j(I + ' with invalid "this": ' + c), c instanceof l.ea.constructor || j(I + ' incompatible with "this" of type ' + c.constructor.name), c.A.da || j("cannot call emscripten binding method " + I + " on deleted object"), Hi(c.A.da, c.A.fa.ea, l.ea);
    }
    var Ta = {};
    Ta.value = void (7356 + 2 * -3678);
    var Ra = {};
    Ra.value = null;
    var Pa = {};
    Pa.value = !(-772 * -6 + -3628 + -1004);
    var Na = {};
    Na.value = !(-4206 + 11 * -592 + -1 * -10719);
    var Fo = [], Ue = [{}, Ta, Ra, Pa, Na];
    function Yo(c) {
      2096 + -1 * 2092 < c && -578 + -578 * -1 === --Ue[c].Ja && (Ue[c] = void (-38 * -55 + 8668 + 6 * -1793), Fo.push(c));
    }
    function an(c) {
      switch (c) {
        case void (26 * 85 + 2 * 3449 + -3 * 3036):
          return -7753 * -1 + 9882 + -8817 * 2;
        case null:
          return 2;
        case !(5655 + 39 * -145):
          return 9027 + -1 * -9573 + 3 * -6199;
        case !(1403 * 7 + -4792 * 1 + -5028):
          return -33 * -199 + 1 * -5937 + -626 * 1;
        default:
          var l = Fo.length ? Fo.pop() : Ue.length, I = {};
          return I.Ja = 1, I.value = c, Ue[l] = I, l;
      }
    }
    function sn(c) {
      if (c === null) return "null";
      var l = typeof c;
      return l === "object" || l === "array" || l === "function" ? c.toString() : "" + c;
    }
    function Zc(c, l) {
      switch (l) {
        case -2423 * 2 + -5791 + 10639:
          return function(I) {
            return this.fromWireType(Ke[I >> -1 * 1 + 7438 * -1 + -7 * -1063]);
          };
        case 3392 * 1 + -7953 + 4564:
          return function(I) {
            return this.fromWireType(je[I >> -6604 + -37 * -123 + -1028 * -2]);
          };
        default:
          throw new TypeError("Unknown float type: " + c);
      }
    }
    function Hc(c) {
      var l = Function;
      if (!(l instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof l + " which is not a function");
      var I = Ro(l.name || "unknownFunctionName", function() {
      });
      return I.prototype = l.prototype, I = new I(), c = l.apply(I, c), c instanceof Object ? c : I;
    }
    function Wc(c, l, I) {
      switch (l) {
        case 0:
          return I ? function(f) {
            return Ie[f];
          } : function(f) {
            return de[f];
          };
        case -5098 + 13 * -287 + 1766 * 5:
          return I ? function(f) {
            return we[f >> -5 * 1181 + -2482 * -1 + 3424];
          } : function(f) {
            return qe[f >> 47 * 124 + 9131 + -7479 * 2];
          };
        case 4391 + 2017 * -2 + 1 * -355:
          return I ? function(f) {
            return ae[f >> -5408 + 20 * -326 + 11930];
          } : function(f) {
            return Se[f >> -1 * 4649 + 8484 + -3833];
          };
        default:
          throw new TypeError("Unknown integer type: " + c);
      }
    }
    function Xo(c) {
      return c || j("Cannot use deleted val. handle = " + c), Ue[c].value;
    }
    function La(c, l) {
      var I = Et[c];
      return void (-317 * 4 + 4716 + -3448) === I && j(l + " has unknown type " + Oa(c)), I;
    }
    var kc = {}, Da = {};
    function Fa() {
      if (!Mo) {
        var c = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: s || "./this.program" }, l;
        for (l in Da) c[l] = Da[l];
        var I = [];
        for (l in c) I.push(l + "=" + c[l]);
        Mo = I;
      }
      return Mo;
    }
    var Mo, Ya = [];
    function Xa(c) {
      var l = {}, I;
      for (I in c) (function(f) {
        var A = c[f];
        l[f] = typeof A == "function" ? function() {
          Ya.push(f);
          try {
            return A.apply(null, arguments);
          } finally {
            if (G) return;
            var b = Ya.pop();
            K(b === f);
          }
        } : A;
      })(I);
      return l;
    }
    for (var Ma = Array(-5972 * -1 + -2426 + -3290), Oi = -6721 + 1 * 9073 + -336 * 7; 3894 * -1 + -6957 + 11107 > Oi; ++Oi) Ma[Oi] = String.fromCharCode(Oi);
    wa = Ma, on = t.BindingError = Po("BindingError"), Sa = t.InternalError = Po("InternalError"), wt.prototype.isAliasOf = function(c) {
      if (!(this instanceof wt && c instanceof wt)) return !(-289 * -1 + 7033 * 1 + 7321 * -1);
      var l = this.A.fa.ea, I = this.A.da, f = c.A.fa.ea;
      for (c = c.A.da; l.ia; ) I = l.qa(I), l = l.ia;
      for (; f.ia; ) c = f.qa(c), f = f.ia;
      return l === f && I === c;
    }, wt.prototype.clone = function() {
      if (this.A.da || No(this), this.A.pa) return this.A.count.value += -16 * -50 + -1 * -6297 + 1774 * -4, this;
      var c = Rn(Object.create(Object.getPrototypeOf(this), { A: { value: bc(this.A) } }));
      return c.A.count.value += 19 * -43 + 9639 + -8821 * 1, c.A.oa = !(-6716 * 1 + -28 * 217 + 12793), c;
    }, wt.prototype.delete = function() {
      this.A.da || No(this), this.A.oa && !this.A.pa && j("Object already scheduled for deletion"), Ba(this), Ga(this.A), this.A.pa || (this.A.ga = void (1 * -903 + 2814 + 13 * -147), this.A.da = void (1 * -8111 + 1094 + 7017));
    }, wt.prototype.isDeleted = function() {
      return !this.A.da;
    }, wt.prototype.deleteLater = function() {
      return this.A.da || No(this), this.A.oa && !this.A.pa && j("Object already scheduled for deletion"), Nn.push(this), 2201 + -200 * 11 === Nn.length && Pn && Pn(Do), this.A.oa = !(3467 + 1 * -3467), this;
    }, Ct.prototype.Da = function(c) {
      return this.wa && (c = this.wa(c)), c;
    }, Ct.prototype.va = function(c) {
      this.na && this.na(c);
    }, Ct.prototype.argPackAdvance = 25 * -384 + 3613 * -1 + -39 * -339, Ct.prototype.readValueFromPointer = Wi, Ct.prototype.deleteObject = function(c) {
      c !== null && c.delete();
    }, Ct.prototype.fromWireType = function(c) {
      function l() {
        return this.sa ? ki(this.ea.ma, { fa: this.Ga, da: I, ha: this, ga: c }) : ki(this.ea.ma, { fa: this, da: c });
      }
      var I = this.Da(c);
      if (!I) return this.va(c), null;
      var f = Gc(this.ea, I);
      if (f !== void 0)
        return 3 * 3143 + 1487 + -10916 === f.A.count.value ? (f.A.da = I, f.A.ga = c, f.clone()) : (f = f.clone(), this.va(c), f);
      if (f = this.ea.Ca(I), f = Za[f], !f) return l.call(this);
      f = this.ra ? f.za : f.pointerType;
      var A = Wa(I, this.ea, f.ea);
      return A === null ? l.call(this) : this.sa ? ki(f.ea.ma, { fa: f, da: A, ha: this, ga: c }) : ki(f.ea.ma, { fa: f, da: A });
    }, t.getInheritedInstanceCount = function() {
      return Object.keys(Ln).length;
    }, t.getLiveInheritedInstances = function() {
      var c = [], l;
      for (l in Ln) Ln.hasOwnProperty(l) && c.push(Ln[l]);
      return c;
    }, t.flushPendingDeletes = Do, t.setDelayFunction = function(c) {
      Pn = c, Nn.length && Pn && Pn(Do);
    }, Ka = t.UnboundTypeError = Po("UnboundTypeError"), t.count_emval_handles = function() {
      for (var c = 0, l = 526 + -1616 * -3 + -5369; l < Ue.length; ++l) void (-357 + 11 * -421 + 4988) !== Ue[l] && ++c;
      return c;
    }, t.get_first_emval = function() {
      for (var c = 52 * 179 + 6723 + -16026; c < Ue.length; ++c) if (void (-139 * 63 + 1 * 2217 + 6540) !== Ue[c]) return Ue[c];
      return null;
    }, pe.push({ Ba: function() {
      ja();
    } });
    var Kc = { z: function(c) {
      return Vi(c + (6449 + -3 * -478 + -7867)) + (-666 + -31 * -22);
    }, u: function(c, l, I) {
      throw new Ac(c).Fa(l, I), "uncaught_exception" in Bi ? Bi.xa++ : Bi.xa = -4213 + -113 * -31 + 711, c;
    }, w: function(c, l, I, f, A) {
      var b = Eo(I);
      l = Te(l), dt(c, { name: l, fromWireType: function(Z) {
        return !!Z;
      }, toWireType: function(Z, w) {
        return w ? f : A;
      }, argPackAdvance: 8, readValueFromPointer: function(Z) {
        if (-9054 + 1 * 9055 === I) var w = Ie;
        else if (-1 * -598 + -3658 + 2 * 1531 === I) w = we;
        else if (-1 * 8041 + 86 * -63 + 13463 === I) w = ae;
        else throw new TypeError("Unknown boolean type size: " + l);
        return this.fromWireType(w[Z >> b]);
      }, ka: null });
    }, h: function(c, l, I, f, A, b, Z, w, k, O, V, E, q) {
      V = Te(V), b = St(A, b), w && (w = St(Z, w)), O && (O = St(k, O)), q = St(E, q);
      var me = To(V);
      Ha(me, function() {
        Dn("Cannot construct " + V + " due to unbound types", [f]);
      }), rn([c, l, I], f ? [f] : [], function(T) {
        if (T = T[11 * 669 + -1565 + -5794], f) var ct = T.ea, He = ct.ma;
        else He = wt.prototype;
        T = Ro(me, function() {
          if (Object.getPrototypeOf(this) !== gn) throw new on("Use 'new' to construct " + V);
          if (void (653 + -1 * 653) === cn.la) throw new on(V + " has no accessible constructor");
          var za = cn.la[arguments.length];
          if (void (43 * -46 + 314 + 1664) === za) throw new on("Tried to invoke ctor of " + V + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(cn.la).toString() + ") parameters instead!");
          return za.apply(this, arguments);
        });
        var De = {};
        De.value = T;
        var Tt = {};
        Tt.constructor = De;
        var gn = Object.create(He, Tt);
        T.prototype = gn;
        var cn = new vc(V, T, gn, q, ct, b, w, O);
        ct = new Ct(V, cn, !(-1 * 5067 + 2 * -2151 + -27 * -347), !(-246 + 1 * -2479 + 2726)), He = new Ct(V + "*", cn, !(-8417 + -393 * -7 + 5667 * 1), !(-10058 + 10059 * 1));
        var Ua = new Ct(V + " const*", cn, !(-551 * -5 + -59 * -107 + -9067), !0), Jo = {};
        return Jo.pointerType = He, Jo.za = Ua, Za[c] = Jo, ka(me, T), [ct, He, Ua];
      });
    }, g: function(c, l, I, f, A, b) {
      K(7583 + 81 * -108 + -5 * -233 < l);
      var Z = Va(l, I);
      A = St(f, A);
      var w = [b], k = [];
      rn([], [c], function(O) {
        O = O[1 * -5451 + -6574 * -1 + -1123];
        var V = "constructor " + O.name;
        if (O.ea.la === void 0 && (O.ea.la = []), void (-9381 + -209 * 26 + 1 * 14815) !== O.ea.la[l - (-1 * 1802 + 5731 * -1 + -3767 * -2)]) throw new on("Cannot register multiple constructors with identical number of parameters (" + (l - (-3633 + 2 * -4831 + -24 * -554)) + ") for class '" + O.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return O.ea.la[l - (9001 + -3877 * -1 + -79 * 163)] = function() {
          Dn("Cannot construct " + O.name + " due to unbound types", Z);
        }, rn([], Z, function(E) {
          return O.ea.la[l - (11 * -418 + -1 * -178 + -1 * -4421)] = function() {
            arguments.length !== l - 1 && j(V + " called with " + arguments.length + " arguments, expected " + (l - (6812 + -2 * -579 + -7969))), k.length = -1 * -2471 + -230 + -2241, w.length = l;
            for (var q = -8682 * 1 + -3192 + -19 * -625; q < l; ++q) w[q] = E[q].toWireType(k, arguments[q - (-343 * 2 + 5716 + 5029 * -1)]);
            return q = A.apply(null, w), Ki(k), E[11967 + -3989 * 3].fromWireType(q);
          }, [];
        }), [];
      });
    }, b: function(c, l, I, f, A, b, Z, w, k, O) {
      l = Te(l), A = St(f, A), rn([], [c], function(V) {
        V = V[-3 * 2329 + 185 * 27 + 1992];
        var E = V.name + "." + l, q = { get: function() {
          Dn("Cannot access " + E + " due to unbound types", [I, Z]);
        }, enumerable: !(-23 * -47 + 2693 + -3774), configurable: !(5455 + 719 * -2 + 1339 * -3) };
        return k ? q.set = function() {
          Dn("Cannot access " + E + " due to unbound types", [I, Z]);
        } : q.set = function() {
          j(E + " is a read-only property");
        }, Object.defineProperty(V.ea.ma, l, q), rn([], k ? [I, Z] : [I], function(me) {
          var T = me[0], ct = { get: function() {
            var De = Ea(this, V, E + " getter");
            return T.fromWireType(A(b, De));
          }, enumerable: !(-1777 + 1954 * -5 + -11547 * -1) };
          if (k) {
            k = St(w, k);
            var He = me[1727 * -2 + 3711 + -256];
            ct.set = function(De) {
              var Tt = Ea(this, V, E + " setter"), gn = [];
              k(O, Tt, He.toWireType(gn, De)), Ki(gn);
            };
          }
          return Object.defineProperty(V.ea.ma, l, ct), [];
        }), [];
      });
    }, v: function(c, l) {
      l = Te(l), dt(c, { name: l, fromWireType: function(I) {
        var f = Ue[I].value;
        return Yo(I), f;
      }, toWireType: function(I, f) {
        return an(f);
      }, argPackAdvance: 8, readValueFromPointer: Wi, ka: null });
    }, m: function(c, l, I) {
      I = Eo(I), l = Te(l), dt(c, { name: l, fromWireType: function(f) {
        return f;
      }, toWireType: function(f, A) {
        if (typeof A != "number" && typeof A != "boolean") throw new TypeError('Cannot convert "' + sn(A) + '" to ' + this.name);
        return A;
      }, argPackAdvance: 8, readValueFromPointer: Zc(l, I), ka: null });
    }, c: function(c, l, I, f, A, b) {
      var Z = Va(l, I);
      c = Te(c), A = St(f, A), Ha(c, function() {
        Dn("Cannot call " + c + " due to unbound types", Z);
      }, l - (3879 + -277 * 14)), rn([], Z, function(w) {
        var k = c, O = c;
        w = [w[0], null].concat(w.slice(-811 + 58 * 14));
        var V = A, E = w.length;
        2393 * 3 + -1661 + 2 * -2758 > E && j("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var q = w[-2442 + -151 * -1 + 2292] !== null && !(-346 + -79 * 73 + 6114), me = !(2914 + 26 * -10 + -2653), T = -9232 + 1319 * 7; T < w.length; ++T) if (w[T] !== null && void (786 + 2078 * 1 + -2864) === w[T].ka) {
          me = !(-133 + -397 * -7 + -14 * 189);
          break;
        }
        var ct = w[847 * -3 + 198 + -1 * -2343].name !== "void", He = "", De = "";
        for (T = -5639 * -1 + 1765 + -7404; T < E - (-198 * 48 + 8014 + 1492); ++T) He += (26 * 269 + -1631 * 1 + -5363 !== T ? ", " : "") + "arg" + T, De += (1 * 789 + -6371 + -2791 * -2 !== T ? ", " : "") + "arg" + T + "Wired";
        O = "return function " + To(O) + "(" + He + `) {
if (arguments.length !== ` + (E - (-49 * -14 + -14 * 262 + -2984 * -1)) + `) {
throwBindingError('function ` + O + " called with ' + arguments.length + ' arguments, expected " + (E - (-8423 * -1 + 449 * 19 + -8476 * 2)) + ` args!');
}
`, me && (O += `var destructors = [];
`);
        var Tt = me ? "destructors" : "null";
        for (He = "throwBindingError invoker fn runDestructors retType classParam".split(" "), V = [j, V, b, Ki, w[-7638 * -1 + -6755 + -883], w[-1196 + 791 * -5 + 5152]], q && (O += "var thisWired = classParam.toWireType(" + Tt + `, this);
`), T = -1494 + -83 * -18; T < E - (8510 + -4254 * 2); ++T) O += "var arg" + T + "Wired = argType" + T + ".toWireType(" + Tt + ", arg" + T + "); // " + w[T + 2].name + `
`, He.push("argType" + T), V.push(w[T + (-5480 * 1 + -16 * 386 + -402 * -29)]);
        if (q && (De = "thisWired" + (-11 * -619 + -8 * 1003 + -135 * -9 < De.length ? ", " : "") + De), O += (ct ? "var rv = " : "") + "invoker(fn" + (-2804 * 1 + -9047 + 11851 < De.length ? ", " : "") + De + `);
`, me) O += `runDestructors(destructors);
`;
        else
          for (T = q ? -1 * -8821 + -4409 * -2 + 17638 * -1 : -15 * -423 + 574 * -14 + 1693; T < w.length; ++T) E = -101 * 69 + 175 + 6795 === T ? "thisWired" : "arg" + (T - (-6160 + -1 * 3467 + 1 * 9629)) + "Wired", w[T].ka !== null && (O += E + "_dtor(" + E + "); // " + w[T].name + `
`, He.push(E + "_dtor"), V.push(w[T].ka));
        return ct && (O += `var ret = retType.fromWireType(rv);
return ret;
`), He.push(O + `}
`), w = Hc(He).apply(null, V), ka(k, w, l - 1), [];
      });
    }, e: function(c, l, I, f, A) {
      function b(O) {
        return O;
      }
      l = Te(l), -(-11204 + -45 * -249) === A && (A = -1318017 * 5279 + -18245443 * -305 + 1307 * 4351889);
      var Z = Eo(I);
      if (13717 + 43 * -319 === f) {
        var w = 32 - 8 * I;
        b = function(O) {
          return O << w >>> w;
        };
      }
      var k = -(104 * -31 + -5098 + -8323 * -1) != l.indexOf("unsigned");
      dt(c, { name: l, fromWireType: b, toWireType: function(O, V) {
        if (typeof V != "number" && typeof V != "boolean") throw new TypeError('Cannot convert "' + sn(V) + '" to ' + this.name);
        if (V < f || V > A) throw new TypeError('Passing a number "' + sn(V) + '" from JS side to C/C++ side to an argument of type "' + l + '", which is outside the valid range [' + f + ", " + A + "]!");
        return k ? V >>> -21 * 127 + -485 * 19 + 914 * 13 : V | -9127 * 1 + -461 * 19 + 17886;
      }, argPackAdvance: 8, readValueFromPointer: Wc(l, Z, -877 * -4 + -8303 + -5 * -959 !== f), ka: null });
    }, d: function(c, l, I) {
      function f(w) {
        w >>= -6558 + 831 * 1 + 5729;
        var k = Se;
        return new A(z, k[w + (-1295 * -2 + -11 * 746 + -137 * -41)], k[w]);
      }
      var A = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][l];
      I = Te(I);
      var b = {};
      b.name = I, b.fromWireType = f, b.argPackAdvance = 8, b.readValueFromPointer = f;
      var Z = {};
      Z.Ea = !0, dt(c, b, Z);
    }, n: function(c, l) {
      l = Te(l);
      var I = l === "std::string";
      dt(c, { name: l, fromWireType: function(f) {
        var A = Se[f >> 2];
        if (I) for (var b = f + (-1 * 7037 + 1 * -1739 + 1 * 8780), Z = 3 * -371 + -6086 + 313 * 23; Z <= A; ++Z) {
          var w = f + 4 + Z;
          if (Z == A || de[w] == 0) {
            if (b) {
              var k = b, O = de, V = k + (w - b);
              for (b = k; O[b] && !(b >= V); ) ++b;
              if (-19 * -271 + 19 * 37 + -1 * 5836 < b - k && O.subarray && S) k = S.decode(O.subarray(k, b));
              else {
                for (V = ""; k < b; ) {
                  var E = O[k++];
                  if (E & 128) {
                    var q = O[k++] & 63;
                    if (-4322 * -2 + 10 * -391 + 1514 * -3 == (E & 2633 * -1 + -8745 + 11602)) V += String.fromCharCode((E & 31) << -597 * 1 + 138 * 44 + -3 * 1823 | q);
                    else {
                      var me = O[k++] & 63;
                      E = 373 * -3 + -300 * -6 + 457 * -1 == (E & -1786 + 193 * -28 + 2 * 3715) ? (E & -997 + -1 * -1012) << 12 | q << -556 + 281 * 2 | me : (E & -7178 + 4 * -1097 + 1 * 11573) << 1892 + -1874 * 1 | q << 2 * 998 + -2980 + 996 | me << -277 * -14 + -6474 + 2602 | O[k++] & 8 * 926 + -1443 + 1 * -5902, -165566 + -694 * -333 > E ? V += String.fromCharCode(E) : (E -= 181037 + 115501 * -1, V += String.fromCharCode(449 * 33 + 17915 + -1 * -22564 | E >> 10, -18045 + -6733 * 10 + 28339 * 5 | E & 1 * -6827 + -1991 + -757 * -13));
                    }
                  } else V += String.fromCharCode(E);
                }
                k = V;
              }
            } else k = "";
            if (void (-3446 + -9681 * -1 + 1 * -6235) === T) var T = k;
            else T += String.fromCharCode(474 * -19 + -3966 * 1 + 12972), T += k;
            b = w + (-2731 * -1 + 11 * -23 + -2477);
          }
        }
        else {
          for (T = Array(A), Z = 3845 + -32 * 107 + 1 * -421; Z < A; ++Z) T[Z] = String.fromCharCode(de[f + (-2854 * 2 + 521 * 1 + 5191) + Z]);
          T = T.join("");
        }
        return ft(f), T;
      }, toWireType: function(f, A) {
        A instanceof ArrayBuffer && (A = new Uint8Array(A));
        var b = typeof A == "string";
        b || A instanceof Uint8Array || A instanceof Uint8ClampedArray || A instanceof Int8Array || j("Cannot pass non-string to std::string");
        var Z = (I && b ? function() {
          for (var O = 6575 * -1 + -6248 + 12823, V = 7696 * 1 + -174 + -7522; V < A.length; ++V) {
            var E = A.charCodeAt(V);
            -32351 * 1 + -51158 + -1955 * -71 <= E && -47473 + 2 * 52408 >= E && (E = -121092 + 4 * 32201 + 57824 + ((E & -10264 + -1 * -11287) << 1 * -2723 + 529 * 3 + -191 * -6) | A.charCodeAt(++V) & 1 * 2703 + 405 * 21 + -97 * 105), 127 >= E ? ++O : O = 4862 + 8 * 809 + 37 * -251 >= E ? O + (829 * -5 + -1 * 2093 + 6240) : -104664 + -1 * -170199 >= E ? O + (12 + 1 * -9) : O + (-17 * 109 + -65 * 1 + -62 * -31);
          }
          return O;
        } : function() {
          return A.length;
        })(), w = Vi(774 + 4 * -275 + 330 + Z + (169 * 54 + -1 * -8479 + 17604 * -1));
        if (Se[w >> -5139 + 70 * -31 + 7311] = Z, I && b) W(A, w + (3422 + 1 * -3418), Z + (-7311 + -67 * 41 + 10059));
        else if (b) for (b = 8047 * 1 + -9712 + -555 * -3; b < Z; ++b) {
          var k = A.charCodeAt(b);
          13 * 127 + 385 * 5 + -81 * 41 < k && (ft(w), j("String has UTF-16 code units that do not fit in 8 bits")), de[w + 4 + b] = k;
        }
        else
          for (b = 7129 + 3758 * -1 + -1 * 3371; b < Z; ++b) de[w + (-151 * -49 + -9533 * 1 + 2138) + b] = A[b];
        return f !== null && f.push(ft, w), w;
      }, argPackAdvance: 8, readValueFromPointer: Wi, ka: function(f) {
        ft(f);
      } });
    }, j: function(c, l, I) {
      if (I = Te(I), 569 + 9 * 321 + 192 * -18 === l) var f = J, A = P, b = D, Z = function() {
        return qe;
      }, w = 14312 + -1 * 14311;
      else -1 * -105 + -4962 + 4861 === l && (f = B, A = U, b = ue, Z = function() {
        return Se;
      }, w = 1 * 8487 + 1 * -5013 + -3472);
      dt(c, { name: I, fromWireType: function(k) {
        for (var O = Se[k >> 365 + 11 * -33], V = Z(), E, q = k + (1 * -4542 + -1240 + -263 * -22), me = -16520 + -5 * -3304; me <= O; ++me) {
          var T = k + 4 + me * l;
          (me == O || -134 * 1 + -3782 + 3916 == V[T >> w]) && (q = f(q, T - q), void (-329 * -7 + -9007 * 1 + 6704) === E ? E = q : (E += String.fromCharCode(1 * -3154 + -151 * 4 + -1 * -3758), E += q), q = T + l);
        }
        return ft(k), E;
      }, toWireType: function(k, O) {
        typeof O != "string" && j("Cannot pass non-string to C++ string type " + I);
        var V = b(O), E = Vi(1 * 9119 + -1389 + 2 * -3863 + V + l);
        return Se[E >> 8444 + 29 * -26 + -7688] = V >> w, A(O, E + (9136 + 5 * 1684 + 2194 * -8), V + l), k !== null && k.push(ft, E), E;
      }, argPackAdvance: 8, readValueFromPointer: Wi, ka: function(k) {
        ft(k);
      } });
    }, x: function(c, l) {
      l = Te(l);
      var I = {};
      I.Qa = !(-1 * 9784 + 2 * -1790 + 13364), I.name = l, I.argPackAdvance = 0, I.fromWireType = function() {
      }, I.toWireType = function() {
      }, dt(c, I);
    }, k: function(c, l, I) {
      c = Xo(c), l = La(l, "emval::as");
      var f = [], A = an(f);
      return ae[I >> 2312 + -35 * 251 + 6475] = A, l.toWireType(f, c);
    }, i: Yo, l: function(c, l) {
      return c = Xo(c), l = Xo(l), an(c[l]);
    }, p: function(c) {
      var l = kc[c];
      return an(void (6546 + -4 * -511 + -8590) === l ? Te(c) : l);
    }, o: function(c) {
      Ki(Ue[c].value), Yo(c);
    }, y: function(c, l) {
      return c = La(c, "_emval_take_value"), c = c.readValueFromPointer(l), an(c);
    }, f: function() {
      Je();
    }, q: function(c, l, I) {
      de.copyWithin(c, l, l + I);
    }, r: function(c) {
      c >>>= 597 * -13 + -8 * 1168 + 55 * 311;
      var l = de.length;
      if (-4 * -1037921153 + -2593943810 + -3829499 * -154 < c) return !(1 * 5917 + 66 * 43 + 4377 * -2);
      for (var I = -8 * 23 + -7109 * 1 + -7294 * -1; 4 >= I; I *= -7236 + 1 * 7238) {
        var f = l * (1 + 0.2 / I);
        f = Math.min(f, c + (-21 * -3896999 + -139150144 + 157976461)), f = Math.max(1 * 4982261 + 22060926 + -10265971, c, f), 1 * -717 + 7854 + -117 * 61 < f % (-34158 + 14242 * 7) && (f += -64679 + -13878 * 2 + 1 * 157971 - f % (115641 + 57241 * -2 + 64377));
        e: {
          try {
            y.grow(Math.min(2147483648, f) - z.byteLength + (68436 + -1 * 2901) >>> 3668 + -3652 * 1), Oe(y.buffer);
            var A = -4 * 570 + -4394 + 6675;
            break e;
          } catch {
          }
          A = void (2 * 1229 + -2024 + -434);
        }
        if (A) return !(-221 * -7 + -5031 + 3484 * 1);
      }
      return !(-6946 + 114 * -3 + -197 * -37);
    }, s: function(c, l) {
      var I = 0;
      return Fa().forEach(function(f, A) {
        var b = l + I;
        for (A = ae[c + (1 * -2273 + -1 * -1164 + -3 * -371) * A >> -1237 * 1 + 3301 + -2 * 1031] = b, b = -6344 + 6 * 1522 + 697 * -4; b < f.length; ++b) Ie[A++ >> -1 * 4703 + -1 * -1334 + 3 * 1123] = f.charCodeAt(b);
        Ie[A >> 9 * -101 + -505 * -3 + -606] = 3833 + -1 * -8317 + -6 * 2025, I += f.length + (1 * -9308 + 1551 + -431 * -18);
      }), -3596 + 58 * 62;
    }, t: function(c, l) {
      var I = Fa();
      ae[c >> 131 * -17 + 37 * -219 + 10332] = I.length;
      var f = 1 * -9857 + -3 * -2003 + 3848;
      return I.forEach(function(A) {
        f += A.length + (-7674 + 5779 * 1 + 1896);
      }), ae[l >> 4 * -902 + -1874 + 3 * 1828] = f, 5 * -1531 + -1917 + -9572 * -1;
    }, a: y };
    (function() {
      function c(Z) {
        Z = Z.exports, Z = Xa(Z), t.asm = Z, Le--, t.monitorRunDependencies && t.monitorRunDependencies(Le), -4596 + 383 * 12 == Le && st && (Z = st, st = null, Z());
      }
      function l(Z) {
        c(Z.instance);
      }
      function I(Z) {
        return mc().then(function(w) {
          return WebAssembly.instantiate(w, A);
        }).then(Z, function(w) {
          p("failed to asynchronously prepare wasm: " + w), Je(w);
        });
      }
      var f = {};
      f.a = Kc;
      var A = f;
      if (Le++, t.monitorRunDependencies && t.monitorRunDependencies(Le), t.instantiateWasm) try {
        var b = t.instantiateWasm(A, c);
        return b = Xa(b);
      } catch (Z) {
        return p("Module.instantiateWasm callback failed with error: " + Z), !1;
      }
      return function() {
        if (m || typeof WebAssembly.instantiateStreaming != "function" || gt() || Ot("file://") || typeof fetch != "function") return I(l);
        var Z = {};
        Z.credentials = "same-origin", fetch(et, Z).then(function(w) {
          return WebAssembly.instantiateStreaming(w, A).then(l, function(k) {
            return p("wasm streaming compile failed: " + k), p("falling back to ArrayBuffer instantiation"), I(l);
          });
        });
      }(), {};
    })();
    var ja = t.___wasm_call_ctors = function() {
      return (ja = t.___wasm_call_ctors = t.asm.B).apply(null, arguments);
    }, Vi = t._malloc = function() {
      return (Vi = t._malloc = t.asm.C).apply(null, arguments);
    }, ft = t._free = function() {
      return (ft = t._free = t.asm.D).apply(null, arguments);
    }, Ja = t.___getTypeName = function() {
      return (Ja = t.___getTypeName = t.asm.E).apply(null, arguments);
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
    var Ei;
    st = function c() {
      Ei || jo(), Ei || (st = c);
    };
    function jo() {
      function c() {
        if (!Ei && (Ei = !(36 * 130 + -8184 + 3504), t.calledRun = !(-5333 + 485 * -13 + -46 * -253), !G)) {
          if (Si(pe), Si(Ze), e(t), t.onRuntimeInitialized && t.onRuntimeInitialized(), t.postRun) for (typeof t.postRun == "function" && (t.postRun = [t.postRun]); t.postRun.length; ) {
            var l = t.postRun.shift();
            Ee.unshift(l);
          }
          Si(Ee);
        }
      }
      if (!(-4930 * 2 + -1 * -677 + 3061 * 3 < Le)) {
        if (t.preRun)
          for (typeof t.preRun == "function" && (t.preRun = [t.preRun]); t.preRun.length; ) tn();
        Si(Ve), -11 * -340 + 1 * -7493 + 3753 < Le || (t.setStatus ? (t.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            t.setStatus("");
          }, 1 * 4749 + -17 * 335 + 1 * 947), c();
        }, -4915 + -745 * -4 + 1936)) : c());
      }
    }
    if (t.run = jo, t.preInit)
      for (typeof t.preInit == "function" && (t.preInit = [t.preInit]); -11250 + 25 * 450 < t.preInit.length; ) t.preInit.pop()();
    return jo(), o.ready;
  };
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Jg = Symbol("Comlink.proxy"), MI = Symbol("Comlink.endpoint"), jI = Symbol("Comlink.releaseProxy"), ar = Symbol("Comlink.finalizer"), ro = Symbol("Comlink.thrown"), Ug = (i) => typeof i == "object" && i !== null || typeof i == "function", JI = {
  canHandle: (i) => Ug(i) && i[Jg],
  serialize(i) {
    const { port1: o, port2: t } = new MessageChannel();
    return Qg(i, o), [t, [t]];
  },
  deserialize(i) {
    return i.start(), _g(i);
  }
}, UI = {
  canHandle: (i) => Ug(i) && ro in i,
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
}, zg = /* @__PURE__ */ new Map([
  ["proxy", JI],
  ["throw", UI]
]);
function zI(i, o) {
  for (const t of i)
    if (o === t || t === "*" || t instanceof RegExp && t.test(o))
      return !0;
  return !1;
}
function Qg(i, o = globalThis, t = ["*"]) {
  o.addEventListener("message", function e(n) {
    if (!n || !n.data)
      return;
    if (!zI(t, n.origin)) {
      console.warn(`Invalid origin '${n.origin}' for comlink proxy`);
      return;
    }
    const { id: r, type: a, path: s } = Object.assign({ path: [] }, n.data), g = (n.data.argumentList || []).map(Dt);
    let x;
    try {
      const C = s.slice(0, -1).reduce((p, m) => p[m], i), u = s.reduce((p, m) => p[m], i);
      switch (a) {
        case "GET":
          x = u;
          break;
        case "SET":
          C[s.slice(-1)[0]] = Dt(n.data.value), x = !0;
          break;
        case "APPLY":
          x = u.apply(C, g);
          break;
        case "CONSTRUCT":
          {
            const p = new u(...g);
            x = td(p);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: p, port2: m } = new MessageChannel();
            Qg(i, m), x = ed(p, [p]);
          }
          break;
        case "RELEASE":
          x = void 0;
          break;
        default:
          return;
      }
    } catch (C) {
      x = { value: C, [ro]: 0 };
    }
    Promise.resolve(x).catch((C) => ({ value: C, [ro]: 0 })).then((C) => {
      const [u, p] = ho(C);
      o.postMessage(Object.assign(Object.assign({}, u), { id: r }), p), a === "RELEASE" && (o.removeEventListener("message", e), $g(o), ar in i && typeof i[ar] == "function" && i[ar]());
    }).catch((C) => {
      const [u, p] = ho({
        value: new TypeError("Unserializable return value"),
        [ro]: 0
      });
      o.postMessage(Object.assign(Object.assign({}, u), { id: r }), p);
    });
  }), o.start && o.start();
}
function QI(i) {
  return i.constructor.name === "MessagePort";
}
function $g(i) {
  QI(i) && i.close();
}
function _g(i, o) {
  return Xr(i, [], o);
}
function Yi(i) {
  if (i)
    throw new Error("Proxy has been released and is not useable");
}
function qg(i) {
  return fn(i, {
    type: "RELEASE"
  }).then(() => {
    $g(i);
  });
}
const Co = /* @__PURE__ */ new WeakMap(), fo = "FinalizationRegistry" in globalThis && new FinalizationRegistry((i) => {
  const o = (Co.get(i) || 0) - 1;
  Co.set(i, o), o === 0 && qg(i);
});
function $I(i, o) {
  const t = (Co.get(o) || 0) + 1;
  Co.set(o, t), fo && fo.register(i, o, i);
}
function _I(i) {
  fo && fo.unregister(i);
}
function Xr(i, o = [], t = function() {
}) {
  let e = !1;
  const n = new Proxy(t, {
    get(r, a) {
      if (Yi(e), a === jI)
        return () => {
          _I(n), qg(i), e = !0;
        };
      if (a === "then") {
        if (o.length === 0)
          return { then: () => n };
        const s = fn(i, {
          type: "GET",
          path: o.map((g) => g.toString())
        }).then(Dt);
        return s.then.bind(s);
      }
      return Xr(i, [...o, a]);
    },
    set(r, a, s) {
      Yi(e);
      const [g, x] = ho(s);
      return fn(i, {
        type: "SET",
        path: [...o, a].map((C) => C.toString()),
        value: g
      }, x).then(Dt);
    },
    apply(r, a, s) {
      Yi(e);
      const g = o[o.length - 1];
      if (g === MI)
        return fn(i, {
          type: "ENDPOINT"
        }).then(Dt);
      if (g === "bind")
        return Xr(i, o.slice(0, -1));
      const [x, C] = js(s);
      return fn(i, {
        type: "APPLY",
        path: o.map((u) => u.toString()),
        argumentList: x
      }, C).then(Dt);
    },
    construct(r, a) {
      Yi(e);
      const [s, g] = js(a);
      return fn(i, {
        type: "CONSTRUCT",
        path: o.map((x) => x.toString()),
        argumentList: s
      }, g).then(Dt);
    }
  });
  return $I(n, i), n;
}
function qI(i) {
  return Array.prototype.concat.apply([], i);
}
function js(i) {
  const o = i.map(ho);
  return [o.map((t) => t[0]), qI(o.map((t) => t[1]))];
}
const ec = /* @__PURE__ */ new WeakMap();
function ed(i, o) {
  return ec.set(i, o), i;
}
function td(i) {
  return Object.assign(i, { [Jg]: !0 });
}
function ho(i) {
  for (const [o, t] of zg)
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
    ec.get(i) || []
  ];
}
function Dt(i) {
  switch (i.type) {
    case "HANDLER":
      return zg.get(i.name).deserialize(i.value);
    case "RAW":
      return i.value;
  }
}
function fn(i, o, t) {
  return new Promise((e) => {
    const n = nd();
    i.addEventListener("message", function r(a) {
      !a.data || !a.data.id || a.data.id !== n || (i.removeEventListener("message", r), e(a.data));
    }), i.start && i.start(), i.postMessage(Object.assign({ id: n }, o), t);
  });
}
function nd() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const tc = "dmFyIGNlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5Owp2YXIgbGUgPSAoYSwgdSwgZSkgPT4gdSBpbiBhID8gY2UoYSwgdSwgeyBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwLCB2YWx1ZTogZSB9KSA6IGFbdV0gPSBlOwp2YXIgWW4gPSAoYSwgdSwgZSkgPT4gbGUoYSwgdHlwZW9mIHUgIT0gInN5bWJvbCIgPyB1ICsgIiIgOiB1LCBlKTsKY29uc3Qga3QgPSB7CiAgc2ltZDogInNhbV9zaW1kLndhc20iLAogIHNhbTogInNhbS53YXNtIgp9LCBmZSA9IGFzeW5jICgpID0+IFdlYkFzc2VtYmx5LnZhbGlkYXRlKG5ldyBVaW50OEFycmF5KFswLCA5NywgMTE1LCAxMDksIDEsIDAsIDAsIDAsIDEsIDUsIDEsIDk2LCAwLCAxLCAxMjMsIDMsIDIsIDEsIDAsIDEwLCAxMCwgMSwgOCwgMCwgNjUsIDAsIDI1MywgMTUsIDI1MywgOTgsIDExXSkpOwpjbGFzcyBJIGV4dGVuZHMgRXJyb3IgewogIGNvbnN0cnVjdG9yKGUsIG0pIHsKICAgIHN1cGVyKGUpOwogICAgWW4odGhpcywgImNhdXNlIik7CiAgICB0aGlzLm5hbWUgPSAiQXV0b0NhcHR1cmVFcnJvciIsIHRoaXMuY2F1c2UgPSBtOwogIH0KICAvLyBDaGFuZ2UgdGhpcyB0byBEZWNvcmF0b3Igd2hlbiB0aGV5IHdpbGwgYmUgaW4gc3RhYmxlIHJlbGVhc2UKICBzdGF0aWMgbG9nRXJyb3IoZSkgewogIH0KICBzdGF0aWMgZnJvbUNhbWVyYUVycm9yKGUpIHsKICAgIGlmICh0aGlzLmxvZ0Vycm9yKGUpLCBlIGluc3RhbmNlb2YgSSkKICAgICAgcmV0dXJuIGU7CiAgICBsZXQgbTsKICAgIHN3aXRjaCAoZS5uYW1lKSB7CiAgICAgIGNhc2UgIk92ZXJjb25zdHJhaW5lZEVycm9yIjoKICAgICAgICBtID0gIk1pbmltdW0gcXVhbGl0eSByZXF1aXJlbWVudHMgYXJlIG5vdCBtZXQgYnkgeW91ciBjYW1lcmEiOwogICAgICAgIGJyZWFrOwogICAgICBjYXNlICJOb3RSZWFkYWJsZUVycm9yIjoKICAgICAgY2FzZSAiQWJvcnRFcnJvciI6CiAgICAgICAgbSA9ICJUaGUgd2ViY2FtIGlzIGFscmVhZHkgaW4gdXNlIGJ5IGFub3RoZXIgYXBwbGljYXRpb24iOwogICAgICAgIGJyZWFrOwogICAgICBjYXNlICJOb3RBbGxvd2VkRXJyb3IiOgogICAgICAgIG0gPSAiVG8gdXNlIHlvdXIgY2FtZXJhLCB5b3UgbXVzdCBhbGxvdyBwZXJtaXNzaW9ucyI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdEZvdW5kRXJyb3IiOgogICAgICAgIG0gPSAiVGhlcmUgaXMgbm8gY2FtZXJhIGF2YWlsYWJsZSB0byB5b3UiOwogICAgICAgIGJyZWFrOwogICAgICBkZWZhdWx0OgogICAgICAgIG0gPSAiQW4gdW5rbm93biBjYW1lcmEgZXJyb3IgaGFzIG9jY3VycmVkIjsKICAgICAgICBicmVhazsKICAgIH0KICAgIHJldHVybiBuZXcgSShtLCBlKTsKICB9CiAgc3RhdGljIGZyb21FcnJvcihlKSB7CiAgICBpZiAodGhpcy5sb2dFcnJvcihlKSwgZSBpbnN0YW5jZW9mIEkpCiAgICAgIHJldHVybiBlOwogICAgY29uc3QgbSA9ICJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcyBvY2N1cnJlZCI7CiAgICByZXR1cm4gbmV3IEkobSk7CiAgfQp9CmNvbnN0IGRlID0gewogIFJHQjogIlJHQiIsCiAgUkdCQTogIlJHQkEiCn0sIGhlID0gKGEpID0+IE51bWJlci5wYXJzZUZsb2F0KGEudG9GaXhlZCgzKSksIHllID0gKGEsIHUpID0+IE1hdGgubWluKGEsIHUpOwp2YXIgcGUgPSBmdW5jdGlvbigpIHsKICB2YXIgYSA9IHR5cGVvZiBkb2N1bWVudCA8ICJ1IiAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0ID8gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmMgOiB2b2lkIDA7CiAgcmV0dXJuIGZ1bmN0aW9uKHUpIHsKICAgIHUgPSB1IHx8IHt9OwogICAgdmFyIGU7CiAgICBlIHx8IChlID0gdHlwZW9mIHUgPCAidSIgPyB1IDoge30pOwogICAgdmFyIG0sIGc7CiAgICBlLnJlYWR5ID0gbmV3IFByb21pc2UoZnVuY3Rpb24obiwgdCkgewogICAgICBtID0gbiwgZyA9IHQ7CiAgICB9KTsKICAgIHZhciBDID0ge30sIEE7CiAgICBmb3IgKEEgaW4gZSkgZS5oYXNPd25Qcm9wZXJ0eShBKSAmJiAoQ1tBXSA9IGVbQV0pOwogICAgdmFyIE0gPSAiLi90aGlzLnByb2dyYW0iLCBPID0gITEsIFQgPSAhMTsKICAgIE8gPSB0eXBlb2Ygd2luZG93ID09ICJvYmplY3QiLCBUID0gdHlwZW9mIGltcG9ydFNjcmlwdHMgPT0gImZ1bmN0aW9uIjsKICAgIHZhciBfID0gIiIsIFM7CiAgICAoTyB8fCBUKSAmJiAoVCA/IF8gPSBzZWxmLmxvY2F0aW9uLmhyZWYgOiBkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIChfID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmMpLCBhICYmIChfID0gYSksIF8uaW5kZXhPZigiYmxvYjoiKSAhPT0gMCA/IF8gPSBfLnN1YnN0cigwLCBfLmxhc3RJbmRleE9mKCIvIikgKyAxKSA6IF8gPSAiIiwgVCAmJiAoUyA9IGZ1bmN0aW9uKG4pIHsKICAgICAgdmFyIHQgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsKICAgICAgcmV0dXJuIHQub3BlbigiR0VUIiwgbiwgITEpLCB0LnJlc3BvbnNlVHlwZSA9ICJhcnJheWJ1ZmZlciIsIHQuc2VuZChudWxsKSwgbmV3IFVpbnQ4QXJyYXkodC5yZXNwb25zZSk7CiAgICB9KSk7CiAgICB2YXIgRSA9IGUucHJpbnRFcnIgfHwgY29uc29sZS53YXJuLmJpbmQoY29uc29sZSk7CiAgICBmb3IgKEEgaW4gQykgQy5oYXNPd25Qcm9wZXJ0eShBKSAmJiAoZVtBXSA9IENbQV0pOwogICAgQyA9IG51bGwsIGUudGhpc1Byb2dyYW0gJiYgKE0gPSBlLnRoaXNQcm9ncmFtKTsKICAgIHZhciBXOwogICAgZS53YXNtQmluYXJ5ICYmIChXID0gZS53YXNtQmluYXJ5KSwgZS5ub0V4aXRSdW50aW1lICYmIGUubm9FeGl0UnVudGltZSwgdHlwZW9mIFdlYkFzc2VtYmx5ICE9ICJvYmplY3QiICYmIHNuKCJubyBuYXRpdmUgd2FzbSBzdXBwb3J0IGRldGVjdGVkIik7CiAgICB2YXIgSCwga24gPSAhMTsKICAgIGZ1bmN0aW9uIEtuKG4pIHsKICAgICAgbiB8fCBzbigiQXNzZXJ0aW9uIGZhaWxlZDogdW5kZWZpbmVkIik7CiAgICB9CiAgICB2YXIgUW4gPSB0eXBlb2YgVGV4dERlY29kZXIgPCAidSIgPyBuZXcgVGV4dERlY29kZXIoInV0ZjgiKSA6IHZvaWQgMDsKICAgIGZ1bmN0aW9uIFV0KG4sIHQsIHIpIHsKICAgICAgdmFyIGkgPSBGOwogICAgICBpZiAoMCA8IHIpIHsKICAgICAgICByID0gdCArIHIgLSAxOwogICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgbi5sZW5ndGg7ICsrbykgewogICAgICAgICAgdmFyIHMgPSBuLmNoYXJDb2RlQXQobyk7CiAgICAgICAgICBpZiAoNTUyOTYgPD0gcyAmJiA1NzM0MyA+PSBzKSB7CiAgICAgICAgICAgIHZhciBsID0gbi5jaGFyQ29kZUF0KCsrbyk7CiAgICAgICAgICAgIHMgPSA2NTUzNiArICgocyAmIDEwMjMpIDw8IDEwKSB8IGwgJiAxMDIzOwogICAgICAgICAgfQogICAgICAgICAgaWYgKDEyNyA+PSBzKSB7CiAgICAgICAgICAgIGlmICh0ID49IHIpIGJyZWFrOwogICAgICAgICAgICBpW3QrK10gPSBzOwogICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgaWYgKDIwNDcgPj0gcykgewogICAgICAgICAgICAgIGlmICh0ICsgMSA+PSByKSBicmVhazsKICAgICAgICAgICAgICBpW3QrK10gPSAxOTIgfCBzID4+IDY7CiAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgaWYgKDY1NTM1ID49IHMpIHsKICAgICAgICAgICAgICAgIGlmICh0ICsgMiA+PSByKSBicmVhazsKICAgICAgICAgICAgICAgIGlbdCsrXSA9IDIyNCB8IHMgPj4gMTI7CiAgICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgIGlmICh0ICsgMyA+PSByKSBicmVhazsKICAgICAgICAgICAgICAgIGlbdCsrXSA9IDI0MCB8IHMgPj4gMTgsIGlbdCsrXSA9IDEyOCB8IHMgPj4gMTIgJiA2MzsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgaVt0KytdID0gMTI4IHwgcyA+PiA2ICYgNjM7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgaVt0KytdID0gMTI4IHwgcyAmIDYzOwogICAgICAgICAgfQogICAgICAgIH0KICAgICAgICBpW3RdID0gMDsKICAgICAgfQogICAgfQogICAgdmFyIHFuID0gdHlwZW9mIFRleHREZWNvZGVyIDwgInUiID8gbmV3IFRleHREZWNvZGVyKCJ1dGYtMTZsZSIpIDogdm9pZCAwOwogICAgZnVuY3Rpb24gRHQobiwgdCkgewogICAgICBmb3IgKHZhciByID0gbiA+PiAxLCBpID0gciArIHQgLyAyOyAhKHIgPj0gaSkgJiYgeW5bcl07ICkgKytyOwogICAgICBpZiAociA8PD0gMSwgMzIgPCByIC0gbiAmJiBxbikgcmV0dXJuIHFuLmRlY29kZShGLnN1YmFycmF5KG4sIHIpKTsKICAgICAgZm9yIChyID0gMCwgaSA9ICIiOyA7ICkgewogICAgICAgIHZhciBvID0gUVtuICsgMiAqIHIgPj4gMV07CiAgICAgICAgaWYgKG8gPT0gMCB8fCByID09IHQgLyAyKSByZXR1cm4gaTsKICAgICAgICArK3IsIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShvKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gQnQobiwgdCwgcikgewogICAgICBpZiAociA9PT0gdm9pZCAwICYmIChyID0gMjE0NzQ4MzY0NyksIDIgPiByKSByZXR1cm4gMDsKICAgICAgciAtPSAyOwogICAgICB2YXIgaSA9IHQ7CiAgICAgIHIgPSByIDwgMiAqIG4ubGVuZ3RoID8gciAvIDIgOiBuLmxlbmd0aDsKICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCByOyArK28pIFFbdCA+PiAxXSA9IG4uY2hhckNvZGVBdChvKSwgdCArPSAyOwogICAgICByZXR1cm4gUVt0ID4+IDFdID0gMCwgdCAtIGk7CiAgICB9CiAgICBmdW5jdGlvbiB6dChuKSB7CiAgICAgIHJldHVybiAyICogbi5sZW5ndGg7CiAgICB9CiAgICBmdW5jdGlvbiBWdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSAwLCBpID0gIiI7ICEociA+PSB0IC8gNCk7ICkgewogICAgICAgIHZhciBvID0ga1tuICsgNCAqIHIgPj4gMl07CiAgICAgICAgaWYgKG8gPT0gMCkgYnJlYWs7CiAgICAgICAgKytyLCA2NTUzNiA8PSBvID8gKG8gLT0gNjU1MzYsIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiB8IG8gPj4gMTAsIDU2MzIwIHwgbyAmIDEwMjMpKSA6IGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShvKTsKICAgICAgfQogICAgICByZXR1cm4gaTsKICAgIH0KICAgIGZ1bmN0aW9uIEd0KG4sIHQsIHIpIHsKICAgICAgaWYgKHIgPT09IHZvaWQgMCAmJiAociA9IDIxNDc0ODM2NDcpLCA0ID4gcikgcmV0dXJuIDA7CiAgICAgIHZhciBpID0gdDsKICAgICAgciA9IGkgKyByIC0gNDsKICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCBuLmxlbmd0aDsgKytvKSB7CiAgICAgICAgdmFyIHMgPSBuLmNoYXJDb2RlQXQobyk7CiAgICAgICAgaWYgKDU1Mjk2IDw9IHMgJiYgNTczNDMgPj0gcykgewogICAgICAgICAgdmFyIGwgPSBuLmNoYXJDb2RlQXQoKytvKTsKICAgICAgICAgIHMgPSA2NTUzNiArICgocyAmIDEwMjMpIDw8IDEwKSB8IGwgJiAxMDIzOwogICAgICAgIH0KICAgICAgICBpZiAoa1t0ID4+IDJdID0gcywgdCArPSA0LCB0ICsgNCA+IHIpIGJyZWFrOwogICAgICB9CiAgICAgIHJldHVybiBrW3QgPj4gMl0gPSAwLCB0IC0gaTsKICAgIH0KICAgIGZ1bmN0aW9uIFl0KG4pIHsKICAgICAgZm9yICh2YXIgdCA9IDAsIHIgPSAwOyByIDwgbi5sZW5ndGg7ICsrcikgewogICAgICAgIHZhciBpID0gbi5jaGFyQ29kZUF0KHIpOwogICAgICAgIDU1Mjk2IDw9IGkgJiYgNTczNDMgPj0gaSAmJiArK3IsIHQgKz0gNDsKICAgICAgfQogICAgICByZXR1cm4gdDsKICAgIH0KICAgIHZhciBLLCBZLCBGLCBRLCB5biwgaywgVSwgbnQsIHR0OwogICAgZnVuY3Rpb24gZXQobikgewogICAgICBLID0gbiwgZS5IRUFQOCA9IFkgPSBuZXcgSW50OEFycmF5KG4pLCBlLkhFQVAxNiA9IFEgPSBuZXcgSW50MTZBcnJheShuKSwgZS5IRUFQMzIgPSBrID0gbmV3IEludDMyQXJyYXkobiksIGUuSEVBUFU4ID0gRiA9IG5ldyBVaW50OEFycmF5KG4pLCBlLkhFQVBVMTYgPSB5biA9IG5ldyBVaW50MTZBcnJheShuKSwgZS5IRUFQVTMyID0gVSA9IG5ldyBVaW50MzJBcnJheShuKSwgZS5IRUFQRjMyID0gbnQgPSBuZXcgRmxvYXQzMkFycmF5KG4pLCBlLkhFQVBGNjQgPSB0dCA9IG5ldyBGbG9hdDY0QXJyYXkobik7CiAgICB9CiAgICB2YXIgcnQgPSBlLklOSVRJQUxfTUVNT1JZIHx8IDE2Nzc3MjE2OwogICAgZS53YXNtTWVtb3J5ID8gSCA9IGUud2FzbU1lbW9yeSA6IEggPSBuZXcgV2ViQXNzZW1ibHkuTWVtb3J5KHsgaW5pdGlhbDogcnQgLyA2NTUzNiwgbWF4aW11bTogMzI3NjggfSksIEggJiYgKEsgPSBILmJ1ZmZlciksIHJ0ID0gSy5ieXRlTGVuZ3RoLCBldChLKTsKICAgIHZhciBpdCA9IFtdLCBhdCA9IFtdLCBadCA9IFtdLCBvdCA9IFtdOwogICAgZnVuY3Rpb24gJHQoKSB7CiAgICAgIHZhciBuID0gZS5wcmVSdW4uc2hpZnQoKTsKICAgICAgaXQudW5zaGlmdChuKTsKICAgIH0KICAgIHZhciBaID0gMCwgb24gPSBudWxsOwogICAgZS5wcmVsb2FkZWRJbWFnZXMgPSB7fSwgZS5wcmVsb2FkZWRBdWRpb3MgPSB7fTsKICAgIGZ1bmN0aW9uIHNuKG4pIHsKICAgICAgdGhyb3cgZS5vbkFib3J0ICYmIGUub25BYm9ydChuKSwgRShuKSwga24gPSAhMCwgbiA9IG5ldyBXZWJBc3NlbWJseS5SdW50aW1lRXJyb3IoImFib3J0KCIgKyBuICsgIikuIEJ1aWxkIHdpdGggLXMgQVNTRVJUSU9OUz0xIGZvciBtb3JlIGluZm8uIiksIGcobiksIG47CiAgICB9CiAgICBmdW5jdGlvbiBSbihuKSB7CiAgICAgIHZhciB0ID0gJDsKICAgICAgcmV0dXJuIFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCA/IHQuc3RhcnRzV2l0aChuKSA6IHQuaW5kZXhPZihuKSA9PT0gMDsKICAgIH0KICAgIGZ1bmN0aW9uIHN0KCkgewogICAgICByZXR1cm4gUm4oImRhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCwiKTsKICAgIH0KICAgIHZhciAkID0gInNhbS53YXNtIjsKICAgIGlmICghc3QoKSkgewogICAgICB2YXIgdXQgPSAkOwogICAgICAkID0gZS5sb2NhdGVGaWxlID8gZS5sb2NhdGVGaWxlKHV0LCBfKSA6IF8gKyB1dDsKICAgIH0KICAgIGZ1bmN0aW9uIGN0KCkgewogICAgICB0cnkgewogICAgICAgIGlmIChXKSByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoVyk7CiAgICAgICAgaWYgKFMpIHJldHVybiBTKCQpOwogICAgICAgIHRocm93ICJib3RoIGFzeW5jIGFuZCBzeW5jIGZldGNoaW5nIG9mIHRoZSB3YXNtIGZhaWxlZCI7CiAgICAgIH0gY2F0Y2ggKG4pIHsKICAgICAgICBzbihuKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gWHQoKSB7CiAgICAgIHJldHVybiBXIHx8ICFPICYmICFUIHx8IHR5cGVvZiBmZXRjaCAhPSAiZnVuY3Rpb24iIHx8IFJuKCJmaWxlOi8vIikgPyBQcm9taXNlLnJlc29sdmUoKS50aGVuKGN0KSA6IGZldGNoKCQsIHsgY3JlZGVudGlhbHM6ICJzYW1lLW9yaWdpbiIgfSkudGhlbihmdW5jdGlvbihuKSB7CiAgICAgICAgaWYgKCFuLm9rKSB0aHJvdyAiZmFpbGVkIHRvIGxvYWQgd2FzbSBiaW5hcnkgZmlsZSBhdCAnIiArICQgKyAiJyI7CiAgICAgICAgcmV0dXJuIG4uYXJyYXlCdWZmZXIoKTsKICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oKSB7CiAgICAgICAgcmV0dXJuIGN0KCk7CiAgICAgIH0pOwogICAgfQogICAgZnVuY3Rpb24gcG4obikgewogICAgICBmb3IgKDsgMCA8IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4uc2hpZnQoKTsKICAgICAgICBpZiAodHlwZW9mIHQgPT0gImZ1bmN0aW9uIikgdChlKTsKICAgICAgICBlbHNlIHsKICAgICAgICAgIHZhciByID0gdC5CYTsKICAgICAgICAgIHR5cGVvZiByID09ICJudW1iZXIiID8gdC50YSA9PT0gdm9pZCAwID8geG4oInYiLCByKSgpIDogeG4oInZpIiwgcikodC50YSkgOiByKHQudGEgPT09IHZvaWQgMCA/IG51bGwgOiB0LnRhKTsKICAgICAgICB9CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHhuKG4sIHQpIHsKICAgICAgdmFyIHIgPSBbXTsKICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkgewogICAgICAgIHIubGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsKICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgcltpXSA9IGFyZ3VtZW50c1tpXTsKICAgICAgICByZXR1cm4gciAmJiByLmxlbmd0aCA/IGVbImR5bkNhbGxfIiArIG5dLmFwcGx5KG51bGwsIFt0XS5jb25jYXQocikpIDogZVsiZHluQ2FsbF8iICsgbl0uY2FsbChudWxsLCB0KTsKICAgICAgfTsKICAgIH0KICAgIGZ1bmN0aW9uIEp0KG4pIHsKICAgICAgdGhpcy5kYSA9IG4gLSAxNiwgdGhpcy5PYSA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICBrW3RoaXMuZGEgKyA4ID4+IDJdID0gdDsKICAgICAgfSwgdGhpcy5MYSA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICBrW3RoaXMuZGEgKyAwID4+IDJdID0gdDsKICAgICAgfSwgdGhpcy5NYSA9IGZ1bmN0aW9uKCkgewogICAgICAgIGtbdGhpcy5kYSArIDQgPj4gMl0gPSAwOwogICAgICB9LCB0aGlzLkthID0gZnVuY3Rpb24oKSB7CiAgICAgICAgWVt0aGlzLmRhICsgMTIgPj4gMF0gPSAwOwogICAgICB9LCB0aGlzLk5hID0gZnVuY3Rpb24oKSB7CiAgICAgICAgWVt0aGlzLmRhICsgMTMgPj4gMF0gPSAwOwogICAgICB9LCB0aGlzLkZhID0gZnVuY3Rpb24odCwgcikgewogICAgICAgIHRoaXMuT2EodCksIHRoaXMuTGEociksIHRoaXMuTWEoKSwgdGhpcy5LYSgpLCB0aGlzLk5hKCk7CiAgICAgIH07CiAgICB9CiAgICBmdW5jdGlvbiBtbigpIHsKICAgICAgcmV0dXJuIDAgPCBtbi54YTsKICAgIH0KICAgIGZ1bmN0aW9uIEZuKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSAxOgogICAgICAgICAgcmV0dXJuIDA7CiAgICAgICAgY2FzZSAyOgogICAgICAgICAgcmV0dXJuIDE7CiAgICAgICAgY2FzZSA0OgogICAgICAgICAgcmV0dXJuIDI7CiAgICAgICAgY2FzZSA4OgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gdHlwZSBzaXplOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIHZhciBsdCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIFIobikgewogICAgICBmb3IgKHZhciB0ID0gIiI7IEZbbl07ICkgdCArPSBsdFtGW24rK11dOwogICAgICByZXR1cm4gdDsKICAgIH0KICAgIHZhciBxID0ge30sIFggPSB7fSwgdm4gPSB7fTsKICAgIGZ1bmN0aW9uIEluKG4pIHsKICAgICAgaWYgKG4gPT09IHZvaWQgMCkgcmV0dXJuICJfdW5rbm93biI7CiAgICAgIG4gPSBuLnJlcGxhY2UoL1teYS16QS1aMC05X10vZywgIiQiKTsKICAgICAgdmFyIHQgPSBuLmNoYXJDb2RlQXQoMCk7CiAgICAgIHJldHVybiA0OCA8PSB0ICYmIDU3ID49IHQgPyAiXyIgKyBuIDogbjsKICAgIH0KICAgIGZ1bmN0aW9uIGpuKG4sIHQpIHsKICAgICAgcmV0dXJuIG4gPSBJbihuKSwgbmV3IEZ1bmN0aW9uKCJib2R5IiwgInJldHVybiBmdW5jdGlvbiAiICsgbiArIGAoKSB7CiAgICAidXNlIHN0cmljdCI7ICAgIHJldHVybiBib2R5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7Cn07CmApKHQpOwogICAgfQogICAgZnVuY3Rpb24gTG4obikgewogICAgICB2YXIgdCA9IEVycm9yLCByID0gam4obiwgZnVuY3Rpb24oaSkgewogICAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMubWVzc2FnZSA9IGksIGkgPSBFcnJvcihpKS5zdGFjaywgaSAhPT0gdm9pZCAwICYmICh0aGlzLnN0YWNrID0gdGhpcy50b1N0cmluZygpICsgYApgICsgaS5yZXBsYWNlKC9eRXJyb3IoOlteXG5dKik/XG4vLCAiIikpOwogICAgICB9KTsKICAgICAgcmV0dXJuIHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSksIHIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gciwgci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlID09PSB2b2lkIDAgPyB0aGlzLm5hbWUgOiB0aGlzLm5hbWUgKyAiOiAiICsgdGhpcy5tZXNzYWdlOwogICAgICB9LCByOwogICAgfQogICAgdmFyIG5uID0gdm9pZCAwOwogICAgZnVuY3Rpb24gdihuKSB7CiAgICAgIHRocm93IG5ldyBubihuKTsKICAgIH0KICAgIHZhciBmdCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIGduKG4pIHsKICAgICAgdGhyb3cgbmV3IGZ0KG4pOwogICAgfQogICAgZnVuY3Rpb24gdG4obiwgdCwgcikgewogICAgICBmdW5jdGlvbiBpKGMpIHsKICAgICAgICBjID0gcihjKSwgYy5sZW5ndGggIT09IG4ubGVuZ3RoICYmIGduKCJNaXNtYXRjaGVkIHR5cGUgY29udmVydGVyIGNvdW50Iik7CiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBuLmxlbmd0aDsgKyt5KSBEKG5beV0sIGNbeV0pOwogICAgICB9CiAgICAgIG4uZm9yRWFjaChmdW5jdGlvbihjKSB7CiAgICAgICAgdm5bY10gPSB0OwogICAgICB9KTsKICAgICAgdmFyIG8gPSBBcnJheSh0Lmxlbmd0aCksIHMgPSBbXSwgbCA9IDA7CiAgICAgIHQuZm9yRWFjaChmdW5jdGlvbihjLCB5KSB7CiAgICAgICAgWC5oYXNPd25Qcm9wZXJ0eShjKSA/IG9beV0gPSBYW2NdIDogKHMucHVzaChjKSwgcS5oYXNPd25Qcm9wZXJ0eShjKSB8fCAocVtjXSA9IFtdKSwgcVtjXS5wdXNoKGZ1bmN0aW9uKCkgewogICAgICAgICAgb1t5XSA9IFhbY10sICsrbCwgbCA9PT0gcy5sZW5ndGggJiYgaShvKTsKICAgICAgICB9KSk7CiAgICAgIH0pLCBzLmxlbmd0aCA9PT0gMCAmJiBpKG8pOwogICAgfQogICAgZnVuY3Rpb24gRChuLCB0LCByKSB7CiAgICAgIGlmIChyID0gciB8fCB7fSwgISgiYXJnUGFja0FkdmFuY2UiIGluIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCJyZWdpc3RlclR5cGUgcmVnaXN0ZXJlZEluc3RhbmNlIHJlcXVpcmVzIGFyZ1BhY2tBZHZhbmNlIik7CiAgICAgIHZhciBpID0gdC5uYW1lOwogICAgICBpZiAobiB8fCB2KCd0eXBlICInICsgaSArICciIG11c3QgaGF2ZSBhIHBvc2l0aXZlIGludGVnZXIgdHlwZWlkIHBvaW50ZXInKSwgWC5oYXNPd25Qcm9wZXJ0eShuKSkgewogICAgICAgIGlmIChyLkVhKSByZXR1cm47CiAgICAgICAgdigiQ2Fubm90IHJlZ2lzdGVyIHR5cGUgJyIgKyBpICsgIicgdHdpY2UiKTsKICAgICAgfQogICAgICBYW25dID0gdCwgZGVsZXRlIHZuW25dLCBxLmhhc093blByb3BlcnR5KG4pICYmICh0ID0gcVtuXSwgZGVsZXRlIHFbbl0sIHQuZm9yRWFjaChmdW5jdGlvbihvKSB7CiAgICAgICAgbygpOwogICAgICB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiBLdChuKSB7CiAgICAgIHJldHVybiB7IGNvdW50OiBuLmNvdW50LCBvYTogbi5vYSwgcGE6IG4ucGEsIGRhOiBuLmRhLCBmYTogbi5mYSwgZ2E6IG4uZ2EsIGhhOiBuLmhhIH07CiAgICB9CiAgICBmdW5jdGlvbiBObihuKSB7CiAgICAgIHYobi5BLmZhLmVhLm5hbWUgKyAiIGluc3RhbmNlIGFscmVhZHkgZGVsZXRlZCIpOwogICAgfQogICAgdmFyIEhuID0gITE7CiAgICBmdW5jdGlvbiBkdCgpIHsKICAgIH0KICAgIGZ1bmN0aW9uIGh0KG4pIHsKICAgICAgLS1uLmNvdW50LnZhbHVlLCBuLmNvdW50LnZhbHVlID09PSAwICYmIChuLmdhID8gbi5oYS5uYShuLmdhKSA6IG4uZmEuZWEubmEobi5kYSkpOwogICAgfQogICAgZnVuY3Rpb24gdW4obikgewogICAgICByZXR1cm4gdHlwZW9mIEZpbmFsaXphdGlvbkdyb3VwID4gInUiID8gKHVuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiB0OwogICAgICB9LCBuKSA6IChIbiA9IG5ldyBGaW5hbGl6YXRpb25Hcm91cChmdW5jdGlvbih0KSB7CiAgICAgICAgZm9yICh2YXIgciA9IHQubmV4dCgpOyAhci5kb25lOyByID0gdC5uZXh0KCkpIHIgPSByLnZhbHVlLCByLmRhID8gaHQocikgOiBjb25zb2xlLndhcm4oIm9iamVjdCBhbHJlYWR5IGRlbGV0ZWQ6ICIgKyByLmRhKTsKICAgICAgfSksIHVuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiBIbi5yZWdpc3Rlcih0LCB0LkEsIHQuQSksIHQ7CiAgICAgIH0sIGR0ID0gZnVuY3Rpb24odCkgewogICAgICAgIEhuLnVucmVnaXN0ZXIodC5BKTsKICAgICAgfSwgdW4obikpOwogICAgfQogICAgdmFyIGNuID0gdm9pZCAwLCBsbiA9IFtdOwogICAgZnVuY3Rpb24gVW4oKSB7CiAgICAgIGZvciAoOyBsbi5sZW5ndGg7ICkgewogICAgICAgIHZhciBuID0gbG4ucG9wKCk7CiAgICAgICAgbi5BLm9hID0gITEsIG4uZGVsZXRlKCk7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIFYoKSB7CiAgICB9CiAgICB2YXIgeXQgPSB7fTsKICAgIGZ1bmN0aW9uIFF0KG4sIHQpIHsKICAgICAgdmFyIHIgPSBlOwogICAgICBpZiAocltuXS5qYSA9PT0gdm9pZCAwKSB7CiAgICAgICAgdmFyIGkgPSByW25dOwogICAgICAgIHJbbl0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiByW25dLmphLmhhc093blByb3BlcnR5KGFyZ3VtZW50cy5sZW5ndGgpIHx8IHYoIkZ1bmN0aW9uICciICsgdCArICInIGNhbGxlZCB3aXRoIGFuIGludmFsaWQgbnVtYmVyIG9mIGFyZ3VtZW50cyAoIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiKSAtIGV4cGVjdHMgb25lIG9mICgiICsgcltuXS5qYSArICIpISIpLCByW25dLmphW2FyZ3VtZW50cy5sZW5ndGhdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgfSwgcltuXS5qYSA9IFtdLCByW25dLmphW2kueWFdID0gaTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gcHQobiwgdCwgcikgewogICAgICBlLmhhc093blByb3BlcnR5KG4pID8gKChyID09PSB2b2lkIDAgfHwgZVtuXS5qYSAhPT0gdm9pZCAwICYmIGVbbl0uamFbcl0gIT09IHZvaWQgMCkgJiYgdigiQ2Fubm90IHJlZ2lzdGVyIHB1YmxpYyBuYW1lICciICsgbiArICInIHR3aWNlIiksIFF0KG4sIG4pLCBlLmhhc093blByb3BlcnR5KHIpICYmIHYoIkNhbm5vdCByZWdpc3RlciBtdWx0aXBsZSBvdmVybG9hZHMgb2YgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIG51bWJlciBvZiBhcmd1bWVudHMgKCIgKyByICsgIikhIiksIGVbbl0uamFbcl0gPSB0KSA6IChlW25dID0gdCwgciAhPT0gdm9pZCAwICYmIChlW25dLlJhID0gcikpOwogICAgfQogICAgZnVuY3Rpb24gcXQobiwgdCwgciwgaSwgbywgcywgbCwgYykgewogICAgICB0aGlzLm5hbWUgPSBuLCB0aGlzLmNvbnN0cnVjdG9yID0gdCwgdGhpcy5tYSA9IHIsIHRoaXMubmEgPSBpLCB0aGlzLmlhID0gbywgdGhpcy5DYSA9IHMsIHRoaXMucWEgPSBsLCB0aGlzLkFhID0gYzsKICAgIH0KICAgIGZ1bmN0aW9uIHduKG4sIHQsIHIpIHsKICAgICAgZm9yICg7IHQgIT09IHI7ICkgdC5xYSB8fCB2KCJFeHBlY3RlZCBudWxsIG9yIGluc3RhbmNlIG9mICIgKyByLm5hbWUgKyAiLCBnb3QgYW4gaW5zdGFuY2Ugb2YgIiArIHQubmFtZSksIG4gPSB0LnFhKG4pLCB0ID0gdC5pYTsKICAgICAgcmV0dXJuIG47CiAgICB9CiAgICBmdW5jdGlvbiBuZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgcm4odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIHduKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiB0ZShuLCB0KSB7CiAgICAgIGlmICh0ID09PSBudWxsKSB7CiAgICAgICAgaWYgKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgdGhpcy5zYSkgewogICAgICAgICAgdmFyIHIgPSB0aGlzLkhhKCk7CiAgICAgICAgICByZXR1cm4gbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgciksIHI7CiAgICAgICAgfQogICAgICAgIHJldHVybiAwOwogICAgICB9CiAgICAgIGlmICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBybih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgIXRoaXMucmEgJiYgdC5BLmZhLnJhICYmIHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArICh0LkEuaGEgPyB0LkEuaGEubmFtZSA6IHQuQS5mYS5uYW1lKSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIHIgPSB3bih0LkEuZGEsIHQuQS5mYS5lYSwgdGhpcy5lYSksIHRoaXMuc2EpIHN3aXRjaCAodC5BLmdhID09PSB2b2lkIDAgJiYgdigiUGFzc2luZyByYXcgcG9pbnRlciB0byBzbWFydCBwb2ludGVyIGlzIGlsbGVnYWwiKSwgdGhpcy5QYSkgewogICAgICAgIGNhc2UgMDoKICAgICAgICAgIHQuQS5oYSA9PT0gdGhpcyA/IHIgPSB0LkEuZ2EgOiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyAodC5BLmhhID8gdC5BLmhhLm5hbWUgOiB0LkEuZmEubmFtZSkgKyAiIHRvIHBhcmFtZXRlciB0eXBlICIgKyB0aGlzLm5hbWUpOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAxOgogICAgICAgICAgciA9IHQuQS5nYTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIGlmICh0LkEuaGEgPT09IHRoaXMpIHIgPSB0LkEuZ2E7CiAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgdmFyIGkgPSB0LmNsb25lKCk7CiAgICAgICAgICAgIHIgPSB0aGlzLklhKHIsIGVuKGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIGkuZGVsZXRlKCk7CiAgICAgICAgICAgIH0pKSwgbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgcik7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdigiVW5zdXBwb3J0aW5nIHNoYXJpbmcgcG9saWN5Iik7CiAgICAgIH0KICAgICAgcmV0dXJuIHI7CiAgICB9CiAgICBmdW5jdGlvbiBlZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgcm4odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIHQuQS5mYS5yYSAmJiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyB0LkEuZmEubmFtZSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIHduKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiBBbihuKSB7CiAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShVW24gPj4gMl0pOwogICAgfQogICAgZnVuY3Rpb24gbXQobiwgdCwgcikgewogICAgICByZXR1cm4gdCA9PT0gciA/IG4gOiByLmlhID09PSB2b2lkIDAgPyBudWxsIDogKG4gPSBtdChuLCB0LCByLmlhKSwgbiA9PT0gbnVsbCA/IG51bGwgOiByLkFhKG4pKTsKICAgIH0KICAgIHZhciBmbiA9IHt9OwogICAgZnVuY3Rpb24gcmUobiwgdCkgewogICAgICBmb3IgKHQgPT09IHZvaWQgMCAmJiB2KCJwdHIgc2hvdWxkIG5vdCBiZSB1bmRlZmluZWQiKTsgbi5pYTsgKSB0ID0gbi5xYSh0KSwgbiA9IG4uaWE7CiAgICAgIHJldHVybiBmblt0XTsKICAgIH0KICAgIGZ1bmN0aW9uIF9uKG4sIHQpIHsKICAgICAgcmV0dXJuIHQuZmEgJiYgdC5kYSB8fCBnbigibWFrZUNsYXNzSGFuZGxlIHJlcXVpcmVzIHB0ciBhbmQgcHRyVHlwZSIpLCAhIXQuaGEgIT0gISF0LmdhICYmIGduKCJCb3RoIHNtYXJ0UHRyVHlwZSBhbmQgc21hcnRQdHIgbXVzdCBiZSBzcGVjaWZpZWQiKSwgdC5jb3VudCA9IHsgdmFsdWU6IDEgfSwgdW4oT2JqZWN0LmNyZWF0ZShuLCB7IEE6IHsgdmFsdWU6IHQgfSB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiBCKG4sIHQsIHIsIGkpIHsKICAgICAgdGhpcy5uYW1lID0gbiwgdGhpcy5lYSA9IHQsIHRoaXMudWEgPSByLCB0aGlzLnJhID0gaSwgdGhpcy5zYSA9ICExLCB0aGlzLm5hID0gdGhpcy5JYSA9IHRoaXMuSGEgPSB0aGlzLndhID0gdGhpcy5QYSA9IHRoaXMuR2EgPSB2b2lkIDAsIHQuaWEgIT09IHZvaWQgMCA/IHRoaXMudG9XaXJlVHlwZSA9IHRlIDogKHRoaXMudG9XaXJlVHlwZSA9IGkgPyBuZSA6IGVlLCB0aGlzLmthID0gbnVsbCk7CiAgICB9CiAgICBmdW5jdGlvbiB2dChuLCB0LCByKSB7CiAgICAgIGUuaGFzT3duUHJvcGVydHkobikgfHwgZ24oIlJlcGxhY2luZyBub25leGlzdGFudCBwdWJsaWMgc3ltYm9sIiksIGVbbl0uamEgIT09IHZvaWQgMCAmJiByICE9PSB2b2lkIDAgPyBlW25dLmphW3JdID0gdCA6IChlW25dID0gdCwgZVtuXS55YSA9IHIpOwogICAgfQogICAgZnVuY3Rpb24gRyhuLCB0KSB7CiAgICAgIG4gPSBSKG4pOwogICAgICB2YXIgciA9IHhuKG4sIHQpOwogICAgICByZXR1cm4gdHlwZW9mIHIgIT0gImZ1bmN0aW9uIiAmJiB2KCJ1bmtub3duIGZ1bmN0aW9uIHBvaW50ZXIgd2l0aCBzaWduYXR1cmUgIiArIG4gKyAiOiAiICsgdCksIHI7CiAgICB9CiAgICB2YXIgZ3QgPSB2b2lkIDA7CiAgICBmdW5jdGlvbiB3dChuKSB7CiAgICAgIG4gPSBXdChuKTsKICAgICAgdmFyIHQgPSBSKG4pOwogICAgICByZXR1cm4geihuKSwgdDsKICAgIH0KICAgIGZ1bmN0aW9uIGRuKG4sIHQpIHsKICAgICAgZnVuY3Rpb24gcihzKSB7CiAgICAgICAgb1tzXSB8fCBYW3NdIHx8ICh2bltzXSA/IHZuW3NdLmZvckVhY2gocikgOiAoaS5wdXNoKHMpLCBvW3NdID0gITApKTsKICAgICAgfQogICAgICB2YXIgaSA9IFtdLCBvID0ge307CiAgICAgIHRocm93IHQuZm9yRWFjaChyKSwgbmV3IGd0KG4gKyAiOiAiICsgaS5tYXAod3QpLmpvaW4oWyIsICJdKSk7CiAgICB9CiAgICBmdW5jdGlvbiBBdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSBbXSwgaSA9IDA7IGkgPCBuOyBpKyspIHIucHVzaChrWyh0ID4+IDIpICsgaV0pOwogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIENuKG4pIHsKICAgICAgZm9yICg7IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4ucG9wKCk7CiAgICAgICAgbi5wb3AoKSh0KTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gX3QobiwgdCwgcikgewogICAgICByZXR1cm4gbiBpbnN0YW5jZW9mIE9iamVjdCB8fCB2KHIgKyAnIHdpdGggaW52YWxpZCAidGhpcyI6ICcgKyBuKSwgbiBpbnN0YW5jZW9mIHQuZWEuY29uc3RydWN0b3IgfHwgdihyICsgJyBpbmNvbXBhdGlibGUgd2l0aCAidGhpcyIgb2YgdHlwZSAnICsgbi5jb25zdHJ1Y3Rvci5uYW1lKSwgbi5BLmRhIHx8IHYoImNhbm5vdCBjYWxsIGVtc2NyaXB0ZW4gYmluZGluZyBtZXRob2QgIiArIHIgKyAiIG9uIGRlbGV0ZWQgb2JqZWN0IiksIHduKG4uQS5kYSwgbi5BLmZhLmVhLCB0LmVhKTsKICAgIH0KICAgIHZhciBEbiA9IFtdLCBqID0gW3t9LCB7IHZhbHVlOiB2b2lkIDAgfSwgeyB2YWx1ZTogbnVsbCB9LCB7IHZhbHVlOiAhMCB9LCB7IHZhbHVlOiAhMSB9XTsKICAgIGZ1bmN0aW9uIEJuKG4pIHsKICAgICAgNCA8IG4gJiYgLS1qW25dLkphID09PSAwICYmIChqW25dID0gdm9pZCAwLCBEbi5wdXNoKG4pKTsKICAgIH0KICAgIGZ1bmN0aW9uIGVuKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSB2b2lkIDA6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIG51bGw6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlICEwOgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgY2FzZSAhMToKICAgICAgICAgIHJldHVybiA0OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB2YXIgdCA9IERuLmxlbmd0aCA/IERuLnBvcCgpIDogai5sZW5ndGg7CiAgICAgICAgICByZXR1cm4galt0XSA9IHsgSmE6IDEsIHZhbHVlOiBuIH0sIHQ7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHJuKG4pIHsKICAgICAgaWYgKG4gPT09IG51bGwpIHJldHVybiAibnVsbCI7CiAgICAgIHZhciB0ID0gdHlwZW9mIG47CiAgICAgIHJldHVybiB0ID09PSAib2JqZWN0IiB8fCB0ID09PSAiYXJyYXkiIHx8IHQgPT09ICJmdW5jdGlvbiIgPyBuLnRvU3RyaW5nKCkgOiAiIiArIG47CiAgICB9CiAgICBmdW5jdGlvbiBpZShuLCB0KSB7CiAgICAgIHN3aXRjaCAodCkgewogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiBmdW5jdGlvbihyKSB7CiAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShudFtyID4+IDJdKTsKICAgICAgICAgIH07CiAgICAgICAgY2FzZSAzOgogICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHIpIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKHR0W3IgPj4gM10pOwogICAgICAgICAgfTsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBmbG9hdCB0eXBlOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIGFlKG4pIHsKICAgICAgdmFyIHQgPSBGdW5jdGlvbjsKICAgICAgaWYgKCEodCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSkgdGhyb3cgbmV3IFR5cGVFcnJvcigibmV3XyBjYWxsZWQgd2l0aCBjb25zdHJ1Y3RvciB0eXBlICIgKyB0eXBlb2YgdCArICIgd2hpY2ggaXMgbm90IGEgZnVuY3Rpb24iKTsKICAgICAgdmFyIHIgPSBqbih0Lm5hbWUgfHwgInVua25vd25GdW5jdGlvbk5hbWUiLCBmdW5jdGlvbigpIHsKICAgICAgfSk7CiAgICAgIHJldHVybiByLnByb3RvdHlwZSA9IHQucHJvdG90eXBlLCByID0gbmV3IHIoKSwgbiA9IHQuYXBwbHkociwgbiksIG4gaW5zdGFuY2VvZiBPYmplY3QgPyBuIDogcjsKICAgIH0KICAgIGZ1bmN0aW9uIG9lKG4sIHQsIHIpIHsKICAgICAgc3dpdGNoICh0KSB7CiAgICAgICAgY2FzZSAwOgogICAgICAgICAgcmV0dXJuIHIgPyBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBZW2ldOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIEZbaV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMToKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gUVtpID4+IDFdOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIHluW2kgPj4gMV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4ga1tpID4+IDJdOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIFVbaSA+PiAyXTsKICAgICAgICAgIH07CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gaW50ZWdlciB0eXBlOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHpuKG4pIHsKICAgICAgcmV0dXJuIG4gfHwgdigiQ2Fubm90IHVzZSBkZWxldGVkIHZhbC4gaGFuZGxlID0gIiArIG4pLCBqW25dLnZhbHVlOwogICAgfQogICAgZnVuY3Rpb24gQ3QobiwgdCkgewogICAgICB2YXIgciA9IFhbbl07CiAgICAgIHJldHVybiByID09PSB2b2lkIDAgJiYgdih0ICsgIiBoYXMgdW5rbm93biB0eXBlICIgKyB3dChuKSksIHI7CiAgICB9CiAgICB2YXIgc2UgPSB7fSwgVHQgPSB7fTsKICAgIGZ1bmN0aW9uIEV0KCkgewogICAgICBpZiAoIVZuKSB7CiAgICAgICAgdmFyIG4gPSB7IFVTRVI6ICJ3ZWJfdXNlciIsIExPR05BTUU6ICJ3ZWJfdXNlciIsIFBBVEg6ICIvIiwgUFdEOiAiLyIsIEhPTUU6ICIvaG9tZS93ZWJfdXNlciIsIExBTkc6ICh0eXBlb2YgbmF2aWdhdG9yID09ICJvYmplY3QiICYmIG5hdmlnYXRvci5sYW5ndWFnZXMgJiYgbmF2aWdhdG9yLmxhbmd1YWdlc1swXSB8fCAiQyIpLnJlcGxhY2UoIi0iLCAiXyIpICsgIi5VVEYtOCIsIF86IE0gfHwgIi4vdGhpcy5wcm9ncmFtIiB9LCB0OwogICAgICAgIGZvciAodCBpbiBUdCkgblt0XSA9IFR0W3RdOwogICAgICAgIHZhciByID0gW107CiAgICAgICAgZm9yICh0IGluIG4pIHIucHVzaCh0ICsgIj0iICsgblt0XSk7CiAgICAgICAgVm4gPSByOwogICAgICB9CiAgICAgIHJldHVybiBWbjsKICAgIH0KICAgIHZhciBWbiwgUHQgPSBbXTsKICAgIGZ1bmN0aW9uIE10KG4pIHsKICAgICAgdmFyIHQgPSB7fSwgcjsKICAgICAgZm9yIChyIGluIG4pIChmdW5jdGlvbihpKSB7CiAgICAgICAgdmFyIG8gPSBuW2ldOwogICAgICAgIHRbaV0gPSB0eXBlb2YgbyA9PSAiZnVuY3Rpb24iID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICBQdC5wdXNoKGkpOwogICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgcmV0dXJuIG8uYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgICAgICAgIH0gZmluYWxseSB7CiAgICAgICAgICAgIGlmIChrbikgcmV0dXJuOwogICAgICAgICAgICB2YXIgcyA9IFB0LnBvcCgpOwogICAgICAgICAgICBLbihzID09PSBpKTsKICAgICAgICAgIH0KICAgICAgICB9IDogbzsKICAgICAgfSkocik7CiAgICAgIHJldHVybiB0OwogICAgfQogICAgZm9yICh2YXIgT3QgPSBBcnJheSgyNTYpLCBUbiA9IDA7IDI1NiA+IFRuOyArK1RuKSBPdFtUbl0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFRuKTsKICAgIGx0ID0gT3QsIG5uID0gZS5CaW5kaW5nRXJyb3IgPSBMbigiQmluZGluZ0Vycm9yIiksIGZ0ID0gZS5JbnRlcm5hbEVycm9yID0gTG4oIkludGVybmFsRXJyb3IiKSwgVi5wcm90b3R5cGUuaXNBbGlhc09mID0gZnVuY3Rpb24obikgewogICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgViAmJiBuIGluc3RhbmNlb2YgVikpIHJldHVybiAhMTsKICAgICAgdmFyIHQgPSB0aGlzLkEuZmEuZWEsIHIgPSB0aGlzLkEuZGEsIGkgPSBuLkEuZmEuZWE7CiAgICAgIGZvciAobiA9IG4uQS5kYTsgdC5pYTsgKSByID0gdC5xYShyKSwgdCA9IHQuaWE7CiAgICAgIGZvciAoOyBpLmlhOyApIG4gPSBpLnFhKG4pLCBpID0gaS5pYTsKICAgICAgcmV0dXJuIHQgPT09IGkgJiYgciA9PT0gbjsKICAgIH0sIFYucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7CiAgICAgIGlmICh0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5wYSkgcmV0dXJuIHRoaXMuQS5jb3VudC52YWx1ZSArPSAxLCB0aGlzOwogICAgICB2YXIgbiA9IHVuKE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLCB7IEE6IHsgdmFsdWU6IEt0KHRoaXMuQSkgfSB9KSk7CiAgICAgIHJldHVybiBuLkEuY291bnQudmFsdWUgKz0gMSwgbi5BLm9hID0gITEsIG47CiAgICB9LCBWLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbigpIHsKICAgICAgdGhpcy5BLmRhIHx8IE5uKHRoaXMpLCB0aGlzLkEub2EgJiYgIXRoaXMuQS5wYSAmJiB2KCJPYmplY3QgYWxyZWFkeSBzY2hlZHVsZWQgZm9yIGRlbGV0aW9uIiksIGR0KHRoaXMpLCBodCh0aGlzLkEpLCB0aGlzLkEucGEgfHwgKHRoaXMuQS5nYSA9IHZvaWQgMCwgdGhpcy5BLmRhID0gdm9pZCAwKTsKICAgIH0sIFYucHJvdG90eXBlLmlzRGVsZXRlZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gIXRoaXMuQS5kYTsKICAgIH0sIFYucHJvdG90eXBlLmRlbGV0ZUxhdGVyID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiB0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5vYSAmJiAhdGhpcy5BLnBhICYmIHYoIk9iamVjdCBhbHJlYWR5IHNjaGVkdWxlZCBmb3IgZGVsZXRpb24iKSwgbG4ucHVzaCh0aGlzKSwgbG4ubGVuZ3RoID09PSAxICYmIGNuICYmIGNuKFVuKSwgdGhpcy5BLm9hID0gITAsIHRoaXM7CiAgICB9LCBCLnByb3RvdHlwZS5EYSA9IGZ1bmN0aW9uKG4pIHsKICAgICAgcmV0dXJuIHRoaXMud2EgJiYgKG4gPSB0aGlzLndhKG4pKSwgbjsKICAgIH0sIEIucHJvdG90eXBlLnZhID0gZnVuY3Rpb24obikgewogICAgICB0aGlzLm5hICYmIHRoaXMubmEobik7CiAgICB9LCBCLnByb3RvdHlwZS5hcmdQYWNrQWR2YW5jZSA9IDgsIEIucHJvdG90eXBlLnJlYWRWYWx1ZUZyb21Qb2ludGVyID0gQW4sIEIucHJvdG90eXBlLmRlbGV0ZU9iamVjdCA9IGZ1bmN0aW9uKG4pIHsKICAgICAgbiAhPT0gbnVsbCAmJiBuLmRlbGV0ZSgpOwogICAgfSwgQi5wcm90b3R5cGUuZnJvbVdpcmVUeXBlID0gZnVuY3Rpb24obikgewogICAgICBmdW5jdGlvbiB0KCkgewogICAgICAgIHJldHVybiB0aGlzLnNhID8gX24odGhpcy5lYS5tYSwgeyBmYTogdGhpcy5HYSwgZGE6IHIsIGhhOiB0aGlzLCBnYTogbiB9KSA6IF9uKHRoaXMuZWEubWEsIHsgZmE6IHRoaXMsIGRhOiBuIH0pOwogICAgICB9CiAgICAgIHZhciByID0gdGhpcy5EYShuKTsKICAgICAgaWYgKCFyKSByZXR1cm4gdGhpcy52YShuKSwgbnVsbDsKICAgICAgdmFyIGkgPSByZSh0aGlzLmVhLCByKTsKICAgICAgaWYgKGkgIT09IHZvaWQgMCkKICAgICAgICByZXR1cm4gaS5BLmNvdW50LnZhbHVlID09PSAwID8gKGkuQS5kYSA9IHIsIGkuQS5nYSA9IG4sIGkuY2xvbmUoKSkgOiAoaSA9IGkuY2xvbmUoKSwgdGhpcy52YShuKSwgaSk7CiAgICAgIGlmIChpID0gdGhpcy5lYS5DYShyKSwgaSA9IHl0W2ldLCAhaSkgcmV0dXJuIHQuY2FsbCh0aGlzKTsKICAgICAgaSA9IHRoaXMucmEgPyBpLnphIDogaS5wb2ludGVyVHlwZTsKICAgICAgdmFyIG8gPSBtdChyLCB0aGlzLmVhLCBpLmVhKTsKICAgICAgcmV0dXJuIG8gPT09IG51bGwgPyB0LmNhbGwodGhpcykgOiB0aGlzLnNhID8gX24oaS5lYS5tYSwgeyBmYTogaSwgZGE6IG8sIGhhOiB0aGlzLCBnYTogbiB9KSA6IF9uKAogICAgICAgIGkuZWEubWEsCiAgICAgICAgeyBmYTogaSwgZGE6IG8gfQogICAgICApOwogICAgfSwgZS5nZXRJbmhlcml0ZWRJbnN0YW5jZUNvdW50ID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhmbikubGVuZ3RoOwogICAgfSwgZS5nZXRMaXZlSW5oZXJpdGVkSW5zdGFuY2VzID0gZnVuY3Rpb24oKSB7CiAgICAgIHZhciBuID0gW10sIHQ7CiAgICAgIGZvciAodCBpbiBmbikgZm4uaGFzT3duUHJvcGVydHkodCkgJiYgbi5wdXNoKGZuW3RdKTsKICAgICAgcmV0dXJuIG47CiAgICB9LCBlLmZsdXNoUGVuZGluZ0RlbGV0ZXMgPSBVbiwgZS5zZXREZWxheUZ1bmN0aW9uID0gZnVuY3Rpb24obikgewogICAgICBjbiA9IG4sIGxuLmxlbmd0aCAmJiBjbiAmJiBjbihVbik7CiAgICB9LCBndCA9IGUuVW5ib3VuZFR5cGVFcnJvciA9IExuKCJVbmJvdW5kVHlwZUVycm9yIiksIGUuY291bnRfZW12YWxfaGFuZGxlcyA9IGZ1bmN0aW9uKCkgewogICAgICBmb3IgKHZhciBuID0gMCwgdCA9IDU7IHQgPCBqLmxlbmd0aDsgKyt0KSBqW3RdICE9PSB2b2lkIDAgJiYgKytuOwogICAgICByZXR1cm4gbjsKICAgIH0sIGUuZ2V0X2ZpcnN0X2VtdmFsID0gZnVuY3Rpb24oKSB7CiAgICAgIGZvciAodmFyIG4gPSA1OyBuIDwgai5sZW5ndGg7ICsrbikgaWYgKGpbbl0gIT09IHZvaWQgMCkgcmV0dXJuIGpbbl07CiAgICAgIHJldHVybiBudWxsOwogICAgfSwgYXQucHVzaCh7IEJhOiBmdW5jdGlvbigpIHsKICAgICAgU3QoKTsKICAgIH0gfSk7CiAgICB2YXIgdWUgPSB7CiAgICAgIHo6IGZ1bmN0aW9uKG4pIHsKICAgICAgICByZXR1cm4gRW4obiArIDE2KSArIDE2OwogICAgICB9LAogICAgICB1OiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgdGhyb3cgbmV3IEp0KG4pLkZhKHQsIHIpLCAidW5jYXVnaHRfZXhjZXB0aW9uIiBpbiBtbiA/IG1uLnhhKysgOiBtbi54YSA9IDEsIG47CiAgICAgIH0sCiAgICAgIHc6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8pIHsKICAgICAgICB2YXIgcyA9IEZuKHIpOwogICAgICAgIHQgPSBSKHQpLCBEKG4sIHsgbmFtZTogdCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihsKSB7CiAgICAgICAgICByZXR1cm4gISFsOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGwsIGMpIHsKICAgICAgICAgIHJldHVybiBjID8gaSA6IG87CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBmdW5jdGlvbihsKSB7CiAgICAgICAgICBpZiAociA9PT0gMSkgdmFyIGMgPSBZOwogICAgICAgICAgZWxzZSBpZiAociA9PT0gMikgYyA9IFE7CiAgICAgICAgICBlbHNlIGlmIChyID09PSA0KSBjID0gazsKICAgICAgICAgIGVsc2UgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBib29sZWFuIHR5cGUgc2l6ZTogIiArIHQpOwogICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKGNbbCA+PiBzXSk7CiAgICAgICAgfSwga2E6IG51bGwgfSk7CiAgICAgIH0sCiAgICAgIGg6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8sIHMsIGwsIGMsIHksIGYsIGQsIGgsIHcpIHsKICAgICAgICBkID0gUihkKSwgcyA9IEcobywgcyksIGMgJiYgKGMgPSBHKGwsIGMpKSwgZiAmJiAoZiA9IEcoeSwgZikpLCB3ID0gRyhoLCB3KTsKICAgICAgICB2YXIgUCA9IEluKGQpOwogICAgICAgIHB0KFAsIGZ1bmN0aW9uKCkgewogICAgICAgICAgZG4oIkNhbm5vdCBjb25zdHJ1Y3QgIiArIGQgKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgW2ldKTsKICAgICAgICB9KSwgdG4oW24sIHQsIHJdLCBpID8gW2ldIDogW10sIGZ1bmN0aW9uKHApIHsKICAgICAgICAgIGlmIChwID0gcFswXSwgaSkKICAgICAgICAgICAgdmFyIE4gPSBwLmVhLCBiID0gTi5tYTsKICAgICAgICAgIGVsc2UgYiA9IFYucHJvdG90eXBlOwogICAgICAgICAgcCA9IGpuKFAsIGZ1bmN0aW9uKCkgewogICAgICAgICAgICBpZiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpICE9PSB4KSB0aHJvdyBuZXcgbm4oIlVzZSAnbmV3JyB0byBjb25zdHJ1Y3QgIiArIGQpOwogICAgICAgICAgICBpZiAoTC5sYSA9PT0gdm9pZCAwKSB0aHJvdyBuZXcgbm4oZCArICIgaGFzIG5vIGFjY2Vzc2libGUgY29uc3RydWN0b3IiKTsKICAgICAgICAgICAgdmFyIGJ0ID0gTC5sYVthcmd1bWVudHMubGVuZ3RoXTsKICAgICAgICAgICAgaWYgKGJ0ID09PSB2b2lkIDApIHRocm93IG5ldyBubigiVHJpZWQgdG8gaW52b2tlIGN0b3Igb2YgIiArIGQgKyAiIHdpdGggaW52YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVycyAoIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiKSAtIGV4cGVjdGVkICgiICsgT2JqZWN0LmtleXMoTC5sYSkudG9TdHJpbmcoKSArICIpIHBhcmFtZXRlcnMgaW5zdGVhZCEiKTsKICAgICAgICAgICAgcmV0dXJuIGJ0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgICB9KTsKICAgICAgICAgIHZhciB4ID0gT2JqZWN0LmNyZWF0ZShiLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBwIH0gfSk7CiAgICAgICAgICBwLnByb3RvdHlwZSA9IHg7CiAgICAgICAgICB2YXIgTCA9IG5ldyBxdChkLCBwLCB4LCB3LCBOLCBzLCBjLCBmKTsKICAgICAgICAgIE4gPSBuZXcgQihkLCBMLCAhMCwgITEpLCBiID0gbmV3IEIoZCArICIqIiwgTCwgITEsICExKTsKICAgICAgICAgIHZhciBobiA9IG5ldyBCKGQgKyAiIGNvbnN0KiIsIEwsICExLCAhMCk7CiAgICAgICAgICByZXR1cm4geXRbbl0gPSB7IHBvaW50ZXJUeXBlOiBiLCB6YTogaG4gfSwgdnQoUCwgcCksIFtOLCBiLCBobl07CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGc6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8sIHMpIHsKICAgICAgICBLbigwIDwgdCk7CiAgICAgICAgdmFyIGwgPSBBdCh0LCByKTsKICAgICAgICBvID0gRyhpLCBvKTsKICAgICAgICB2YXIgYyA9IFtzXSwgeSA9IFtdOwogICAgICAgIHRuKFtdLCBbbl0sIGZ1bmN0aW9uKGYpIHsKICAgICAgICAgIGYgPSBmWzBdOwogICAgICAgICAgdmFyIGQgPSAiY29uc3RydWN0b3IgIiArIGYubmFtZTsKICAgICAgICAgIGlmIChmLmVhLmxhID09PSB2b2lkIDAgJiYgKGYuZWEubGEgPSBbXSksIGYuZWEubGFbdCAtIDFdICE9PSB2b2lkIDApIHRocm93IG5ldyBubigiQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIGNvbnN0cnVjdG9ycyB3aXRoIGlkZW50aWNhbCBudW1iZXIgb2YgcGFyYW1ldGVycyAoIiArICh0IC0gMSkgKyAiKSBmb3IgY2xhc3MgJyIgKyBmLm5hbWUgKyAiJyEgT3ZlcmxvYWQgcmVzb2x1dGlvbiBpcyBjdXJyZW50bHkgb25seSBwZXJmb3JtZWQgdXNpbmcgdGhlIHBhcmFtZXRlciBjb3VudCwgbm90IGFjdHVhbCB0eXBlIGluZm8hIik7CiAgICAgICAgICByZXR1cm4gZi5lYS5sYVt0IC0gMV0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgZG4oIkNhbm5vdCBjb25zdHJ1Y3QgIiArIGYubmFtZSArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBsKTsKICAgICAgICAgIH0sIHRuKFtdLCBsLCBmdW5jdGlvbihoKSB7CiAgICAgICAgICAgIHJldHVybiBmLmVhLmxhW3QgLSAxXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIGFyZ3VtZW50cy5sZW5ndGggIT09IHQgLSAxICYmIHYoZCArICIgY2FsbGVkIHdpdGggIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiIGFyZ3VtZW50cywgZXhwZWN0ZWQgIiArICh0IC0gMSkpLCB5Lmxlbmd0aCA9IDAsIGMubGVuZ3RoID0gdDsKICAgICAgICAgICAgICBmb3IgKHZhciB3ID0gMTsgdyA8IHQ7ICsrdykgY1t3XSA9IGhbd10udG9XaXJlVHlwZSgKICAgICAgICAgICAgICAgIHksCiAgICAgICAgICAgICAgICBhcmd1bWVudHNbdyAtIDFdCiAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICByZXR1cm4gdyA9IG8uYXBwbHkobnVsbCwgYyksIENuKHkpLCBoWzBdLmZyb21XaXJlVHlwZSh3KTsKICAgICAgICAgICAgfSwgW107CiAgICAgICAgICB9KSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGI6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8sIHMsIGwsIGMsIHksIGYpIHsKICAgICAgICB0ID0gUih0KSwgbyA9IEcoaSwgbyksIHRuKFtdLCBbbl0sIGZ1bmN0aW9uKGQpIHsKICAgICAgICAgIGQgPSBkWzBdOwogICAgICAgICAgdmFyIGggPSBkLm5hbWUgKyAiLiIgKyB0LCB3ID0geyBnZXQ6IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBkbigiQ2Fubm90IGFjY2VzcyAiICsgaCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbciwgbF0pOwogICAgICAgICAgfSwgZW51bWVyYWJsZTogITAsIGNvbmZpZ3VyYWJsZTogITAgfTsKICAgICAgICAgIHJldHVybiB5ID8gdy5zZXQgPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgZG4oIkNhbm5vdCBhY2Nlc3MgIiArIGggKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgW3IsIGxdKTsKICAgICAgICAgIH0gOiB3LnNldCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICB2KGggKyAiIGlzIGEgcmVhZC1vbmx5IHByb3BlcnR5Iik7CiAgICAgICAgICB9LCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZC5lYS5tYSwgdCwgdyksIHRuKFtdLCB5ID8gW3IsIGxdIDogW3JdLCBmdW5jdGlvbihQKSB7CiAgICAgICAgICAgIHZhciBwID0gUFswXSwgTiA9IHsgZ2V0OiBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICB2YXIgeCA9IF90KHRoaXMsIGQsIGggKyAiIGdldHRlciIpOwogICAgICAgICAgICAgIHJldHVybiBwLmZyb21XaXJlVHlwZShvKHMsIHgpKTsKICAgICAgICAgICAgfSwgZW51bWVyYWJsZTogITAgfTsKICAgICAgICAgICAgaWYgKHkpIHsKICAgICAgICAgICAgICB5ID0gRyhjLCB5KTsKICAgICAgICAgICAgICB2YXIgYiA9IFBbMV07CiAgICAgICAgICAgICAgTi5zZXQgPSBmdW5jdGlvbih4KSB7CiAgICAgICAgICAgICAgICB2YXIgTCA9IF90KHRoaXMsIGQsIGggKyAiIHNldHRlciIpLCBobiA9IFtdOwogICAgICAgICAgICAgICAgeShmLCBMLCBiLnRvV2lyZVR5cGUoaG4sIHgpKSwgQ24oaG4pOwogICAgICAgICAgICAgIH07CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkLmVhLm1hLCB0LCBOKSwgW107CiAgICAgICAgICB9KSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIHY6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUih0KSwgRChuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24ocikgewogICAgICAgICAgdmFyIGkgPSBqW3JdLnZhbHVlOwogICAgICAgICAgcmV0dXJuIEJuKHIpLCBpOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHIsIGkpIHsKICAgICAgICAgIHJldHVybiBlbihpKTsKICAgICAgICB9LCBhcmdQYWNrQWR2YW5jZTogOCwgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IEFuLCBrYTogbnVsbCB9KTsKICAgICAgfSwKICAgICAgbTogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIHIgPSBGbihyKSwgdCA9IFIodCksIEQobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gaTsKICAgICAgICAgIH0sCiAgICAgICAgICB0b1dpcmVUeXBlOiBmdW5jdGlvbihpLCBvKSB7CiAgICAgICAgICAgIGlmICh0eXBlb2YgbyAhPSAibnVtYmVyIiAmJiB0eXBlb2YgbyAhPSAiYm9vbGVhbiIpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0ICInICsgcm4obykgKyAnIiB0byAnICsgdGhpcy5uYW1lKTsKICAgICAgICAgICAgcmV0dXJuIG87CiAgICAgICAgICB9LAogICAgICAgICAgYXJnUGFja0FkdmFuY2U6IDgsCiAgICAgICAgICByZWFkVmFsdWVGcm9tUG9pbnRlcjogaWUodCwgciksCiAgICAgICAgICBrYTogbnVsbAogICAgICAgIH0pOwogICAgICB9LAogICAgICBjOiBmdW5jdGlvbihuLCB0LCByLCBpLCBvLCBzKSB7CiAgICAgICAgdmFyIGwgPSBBdCh0LCByKTsKICAgICAgICBuID0gUihuKSwgbyA9IEcoaSwgbyksIHB0KG4sIGZ1bmN0aW9uKCkgewogICAgICAgICAgZG4oIkNhbm5vdCBjYWxsICIgKyBuICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIGwpOwogICAgICAgIH0sIHQgLSAxKSwgdG4oW10sIGwsIGZ1bmN0aW9uKGMpIHsKICAgICAgICAgIHZhciB5ID0gbiwgZiA9IG47CiAgICAgICAgICBjID0gW2NbMF0sIG51bGxdLmNvbmNhdChjLnNsaWNlKDEpKTsKICAgICAgICAgIHZhciBkID0gbywgaCA9IGMubGVuZ3RoOwogICAgICAgICAgMiA+IGggJiYgdigiYXJnVHlwZXMgYXJyYXkgc2l6ZSBtaXNtYXRjaCEgTXVzdCBhdCBsZWFzdCBnZXQgcmV0dXJuIHZhbHVlIGFuZCAndGhpcycgdHlwZXMhIik7CiAgICAgICAgICBmb3IgKHZhciB3ID0gY1sxXSAhPT0gbnVsbCAmJiAhMSwgUCA9ICExLCBwID0gMTsgcCA8IGMubGVuZ3RoOyArK3ApIGlmIChjW3BdICE9PSBudWxsICYmIGNbcF0ua2EgPT09IHZvaWQgMCkgewogICAgICAgICAgICBQID0gITA7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgfQogICAgICAgICAgdmFyIE4gPSBjWzBdLm5hbWUgIT09ICJ2b2lkIiwgYiA9ICIiLCB4ID0gIiI7CiAgICAgICAgICBmb3IgKHAgPSAwOyBwIDwgaCAtIDI7ICsrcCkgYiArPSAocCAhPT0gMCA/ICIsICIgOiAiIikgKyAiYXJnIiArIHAsIHggKz0gKHAgIT09IDAgPyAiLCAiIDogIiIpICsgImFyZyIgKyBwICsgIldpcmVkIjsKICAgICAgICAgIGYgPSAicmV0dXJuIGZ1bmN0aW9uICIgKyBJbihmKSArICIoIiArIGIgKyBgKSB7CmlmIChhcmd1bWVudHMubGVuZ3RoICE9PSBgICsgKGggLSAyKSArIGApIHsKdGhyb3dCaW5kaW5nRXJyb3IoJ2Z1bmN0aW9uIGAgKyBmICsgIiBjYWxsZWQgd2l0aCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLCBleHBlY3RlZCAiICsgKGggLSAyKSArIGAgYXJncyEnKTsKfQpgLCBQICYmIChmICs9IGB2YXIgZGVzdHJ1Y3RvcnMgPSBbXTsKYCk7CiAgICAgICAgICB2YXIgTCA9IFAgPyAiZGVzdHJ1Y3RvcnMiIDogIm51bGwiOwogICAgICAgICAgZm9yIChiID0gInRocm93QmluZGluZ0Vycm9yIGludm9rZXIgZm4gcnVuRGVzdHJ1Y3RvcnMgcmV0VHlwZSBjbGFzc1BhcmFtIi5zcGxpdCgiICIpLCBkID0gW3YsIGQsIHMsIENuLCBjWzBdLCBjWzFdXSwgdyAmJiAoZiArPSAidmFyIHRoaXNXaXJlZCA9IGNsYXNzUGFyYW0udG9XaXJlVHlwZSgiICsgTCArIGAsIHRoaXMpOwpgKSwgcCA9IDA7IHAgPCBoIC0gMjsgKytwKSBmICs9ICJ2YXIgYXJnIiArIHAgKyAiV2lyZWQgPSBhcmdUeXBlIiArIHAgKyAiLnRvV2lyZVR5cGUoIiArIEwgKyAiLCBhcmciICsgcCArICIpOyAvLyAiICsgY1twICsgMl0ubmFtZSArIGAKYCwgYi5wdXNoKCJhcmdUeXBlIiArIHApLCBkLnB1c2goY1twICsgMl0pOwogICAgICAgICAgaWYgKHcgJiYgKHggPSAidGhpc1dpcmVkIiArICgwIDwgeC5sZW5ndGggPyAiLCAiIDogIiIpICsgeCksIGYgKz0gKE4gPyAidmFyIHJ2ID0gIiA6ICIiKSArICJpbnZva2VyKGZuIiArICgwIDwgeC5sZW5ndGggPyAiLCAiIDogIiIpICsgeCArIGApOwpgLCBQKSBmICs9IGBydW5EZXN0cnVjdG9ycyhkZXN0cnVjdG9ycyk7CmA7CiAgICAgICAgICBlbHNlIGZvciAocCA9IHcgPyAxIDogMjsgcCA8IGMubGVuZ3RoOyArK3ApIGggPSBwID09PSAxID8gInRoaXNXaXJlZCIgOiAiYXJnIiArIChwIC0gMikgKyAiV2lyZWQiLCBjW3BdLmthICE9PSBudWxsICYmIChmICs9IGggKyAiX2R0b3IoIiArIGggKyAiKTsgLy8gIiArIGNbcF0ubmFtZSArIGAKYCwgYi5wdXNoKGggKyAiX2R0b3IiKSwgZC5wdXNoKGNbcF0ua2EpKTsKICAgICAgICAgIHJldHVybiBOICYmIChmICs9IGB2YXIgcmV0ID0gcmV0VHlwZS5mcm9tV2lyZVR5cGUocnYpOwpyZXR1cm4gcmV0OwpgKSwgYi5wdXNoKGYgKyBgfQpgKSwgYyA9IGFlKGIpLmFwcGx5KG51bGwsIGQpLCB2dCh5LCBjLCB0IC0gMSksIFtdOwogICAgICAgIH0pOwogICAgICB9LAogICAgICBlOiBmdW5jdGlvbihuLCB0LCByLCBpLCBvKSB7CiAgICAgICAgZnVuY3Rpb24gcyhmKSB7CiAgICAgICAgICByZXR1cm4gZjsKICAgICAgICB9CiAgICAgICAgdCA9IFIodCksIG8gPT09IC0xICYmIChvID0gNDI5NDk2NzI5NSk7CiAgICAgICAgdmFyIGwgPSBGbihyKTsKICAgICAgICBpZiAoaSA9PT0gMCkgewogICAgICAgICAgdmFyIGMgPSAzMiAtIDggKiByOwogICAgICAgICAgcyA9IGZ1bmN0aW9uKGYpIHsKICAgICAgICAgICAgcmV0dXJuIGYgPDwgYyA+Pj4gYzsKICAgICAgICAgIH07CiAgICAgICAgfQogICAgICAgIHZhciB5ID0gdC5pbmRleE9mKCJ1bnNpZ25lZCIpICE9IC0xOwogICAgICAgIEQobiwgeyBuYW1lOiB0LCBmcm9tV2lyZVR5cGU6IHMsIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGYsIGQpIHsKICAgICAgICAgIGlmICh0eXBlb2YgZCAhPSAibnVtYmVyIiAmJiB0eXBlb2YgZCAhPSAiYm9vbGVhbiIpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0ICInICsgcm4oZCkgKyAnIiB0byAnICsgdGhpcy5uYW1lKTsKICAgICAgICAgIGlmIChkIDwgaSB8fCBkID4gbykgdGhyb3cgbmV3IFR5cGVFcnJvcignUGFzc2luZyBhIG51bWJlciAiJyArIHJuKGQpICsgJyIgZnJvbSBKUyBzaWRlIHRvIEMvQysrIHNpZGUgdG8gYW4gYXJndW1lbnQgb2YgdHlwZSAiJyArIHQgKyAnIiwgd2hpY2ggaXMgb3V0c2lkZSB0aGUgdmFsaWQgcmFuZ2UgWycgKyBpICsgIiwgIiArIG8gKyAiXSEiKTsKICAgICAgICAgIHJldHVybiB5ID8gZCA+Pj4gMCA6IGQgfCAwOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogb2UodCwgbCwgaSAhPT0gMCksIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBkOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgZnVuY3Rpb24gaShzKSB7CiAgICAgICAgICBzID4+PSAyOwogICAgICAgICAgdmFyIGwgPSBVOwogICAgICAgICAgcmV0dXJuIG5ldyBvKEssIGxbcyArIDFdLCBsW3NdKTsKICAgICAgICB9CiAgICAgICAgdmFyIG8gPSBbSW50OEFycmF5LCBVaW50OEFycmF5LCBJbnQxNkFycmF5LCBVaW50MTZBcnJheSwgSW50MzJBcnJheSwgVWludDMyQXJyYXksIEZsb2F0MzJBcnJheSwgRmxvYXQ2NEFycmF5XVt0XTsKICAgICAgICByID0gUihyKSwgRChuLCB7IG5hbWU6IHIsIGZyb21XaXJlVHlwZTogaSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBpIH0sIHsgRWE6ICEwIH0pOwogICAgICB9LAogICAgICBuOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdCA9IFIodCk7CiAgICAgICAgdmFyIHIgPSB0ID09PSAic3RkOjpzdHJpbmciOwogICAgICAgIEQobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICB2YXIgbyA9IFVbaSA+PiAyXTsKICAgICAgICAgICAgaWYgKHIpIGZvciAodmFyIHMgPSBpICsgNCwgbCA9IDA7IGwgPD0gbzsgKytsKSB7CiAgICAgICAgICAgICAgdmFyIGMgPSBpICsgNCArIGw7CiAgICAgICAgICAgICAgaWYgKGwgPT0gbyB8fCBGW2NdID09IDApIHsKICAgICAgICAgICAgICAgIGlmIChzKSB7CiAgICAgICAgICAgICAgICAgIHZhciB5ID0gcywgZiA9IEYsIGQgPSB5ICsgKGMgLSBzKTsKICAgICAgICAgICAgICAgICAgZm9yIChzID0geTsgZltzXSAmJiAhKHMgPj0gZCk7ICkgKytzOwogICAgICAgICAgICAgICAgICBpZiAoMTYgPCBzIC0geSAmJiBmLnN1YmFycmF5ICYmIFFuKSB5ID0gUW4uZGVjb2RlKGYuc3ViYXJyYXkoeSwgcykpOwogICAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICBmb3IgKGQgPSAiIjsgeSA8IHM7ICkgewogICAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBmW3krK107CiAgICAgICAgICAgICAgICAgICAgICBpZiAoaCAmIDEyOCkgewogICAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IGZbeSsrXSAmIDYzOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGggJiAyMjQpID09IDE5MikgZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChoICYgMzEpIDw8IDYgfCB3KTsKICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFAgPSBmW3krK10gJiA2MzsKICAgICAgICAgICAgICAgICAgICAgICAgICBoID0gKGggJiAyNDApID09IDIyNCA/IChoICYgMTUpIDw8IDEyIHwgdyA8PCA2IHwgUCA6IChoICYgNykgPDwgMTggfCB3IDw8IDEyIHwgUCA8PCA2IHwgZlt5KytdICYgNjMsIDY1NTM2ID4gaCA/IGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShoKSA6IChoIC09IDY1NTM2LCBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTYgfCBoID4+IDEwLCA1NjMyMCB8IGggJiAxMDIzKSk7CiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoaCk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIHkgPSBkOwogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9IGVsc2UgeSA9ICIiOwogICAgICAgICAgICAgICAgaWYgKHAgPT09IHZvaWQgMCkgdmFyIHAgPSB5OwogICAgICAgICAgICAgICAgZWxzZSBwICs9ICJcMCIsIHAgKz0geTsKICAgICAgICAgICAgICAgIHMgPSBjICsgMTsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgZm9yIChwID0gQXJyYXkobyksIGwgPSAwOyBsIDwgbzsgKytsKSBwW2xdID0gU3RyaW5nLmZyb21DaGFyQ29kZShGW2kgKyA0ICsgbF0pOwogICAgICAgICAgICAgIHAgPSBwLmpvaW4oIiIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiB6KGkpLCBwOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIG8pIHsKICAgICAgICAgICAgbyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyICYmIChvID0gbmV3IFVpbnQ4QXJyYXkobykpOwogICAgICAgICAgICB2YXIgcyA9IHR5cGVvZiBvID09ICJzdHJpbmciOwogICAgICAgICAgICBzIHx8IG8gaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IG8gaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSB8fCBvIGluc3RhbmNlb2YgSW50OEFycmF5IHx8IHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gc3RkOjpzdHJpbmciKTsKICAgICAgICAgICAgdmFyIGwgPSAociAmJiBzID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IDAsIGQgPSAwOyBkIDwgby5sZW5ndGg7ICsrZCkgewogICAgICAgICAgICAgICAgdmFyIGggPSBvLmNoYXJDb2RlQXQoZCk7CiAgICAgICAgICAgICAgICA1NTI5NiA8PSBoICYmIDU3MzQzID49IGggJiYgKGggPSA2NTUzNiArICgoaCAmIDEwMjMpIDw8IDEwKSB8IG8uY2hhckNvZGVBdCgrK2QpICYgMTAyMyksIDEyNyA+PSBoID8gKytmIDogZiA9IDIwNDcgPj0gaCA/IGYgKyAyIDogNjU1MzUgPj0gaCA/IGYgKyAzIDogZiArIDQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHJldHVybiBmOwogICAgICAgICAgICB9IDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgcmV0dXJuIG8ubGVuZ3RoOwogICAgICAgICAgICB9KSgpLCBjID0gRW4oNCArIGwgKyAxKTsKICAgICAgICAgICAgaWYgKFVbYyA+PiAyXSA9IGwsIHIgJiYgcykgVXQobywgYyArIDQsIGwgKyAxKTsKICAgICAgICAgICAgZWxzZSBpZiAocykgZm9yIChzID0gMDsgcyA8IGw7ICsrcykgewogICAgICAgICAgICAgIHZhciB5ID0gby5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgICAgIDI1NSA8IHkgJiYgKHooYyksIHYoIlN0cmluZyBoYXMgVVRGLTE2IGNvZGUgdW5pdHMgdGhhdCBkbyBub3QgZml0IGluIDggYml0cyIpKSwgRltjICsgNCArIHNdID0geTsKICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIGZvciAocyA9IDA7IHMgPCBsOyArK3MpIEZbYyArIDQgKyBzXSA9IG9bc107CiAgICAgICAgICAgIHJldHVybiBpICE9PSBudWxsICYmIGkucHVzaCh6LCBjKSwgYzsKICAgICAgICAgIH0sCiAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBBbiwKICAgICAgICAgIGthOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHooaSk7CiAgICAgICAgICB9CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGo6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBpZiAociA9IFIociksIHQgPT09IDIpCiAgICAgICAgICB2YXIgaSA9IER0LCBvID0gQnQsIHMgPSB6dCwgbCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICByZXR1cm4geW47CiAgICAgICAgICB9LCBjID0gMTsKICAgICAgICBlbHNlIHQgPT09IDQgJiYgKGkgPSBWdCwgbyA9IEd0LCBzID0gWXQsIGwgPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiBVOwogICAgICAgIH0sIGMgPSAyKTsKICAgICAgICBEKG4sIHsgbmFtZTogciwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICBmb3IgKHZhciBmID0gVVt5ID4+IDJdLCBkID0gbCgpLCBoLCB3ID0geSArIDQsIFAgPSAwOyBQIDw9IGY7ICsrUCkgewogICAgICAgICAgICB2YXIgcCA9IHkgKyA0ICsgUCAqIHQ7CiAgICAgICAgICAgIChQID09IGYgfHwgZFtwID4+IGNdID09IDApICYmICh3ID0gaSh3LCBwIC0gdyksIGggPT09IHZvaWQgMCA/IGggPSB3IDogKGggKz0gIlwwIiwgaCArPSB3KSwgdyA9IHAgKyB0KTsKICAgICAgICAgIH0KICAgICAgICAgIHJldHVybiB6KHkpLCBoOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHksIGYpIHsKICAgICAgICAgIHR5cGVvZiBmICE9ICJzdHJpbmciICYmIHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gQysrIHN0cmluZyB0eXBlICIgKyByKTsKICAgICAgICAgIHZhciBkID0gcyhmKSwgaCA9IEVuKDQgKyBkICsgdCk7CiAgICAgICAgICByZXR1cm4gVVtoID4+IDJdID0gZCA+PiBjLCBvKGYsIGggKyA0LCBkICsgdCksIHkgIT09IG51bGwgJiYgeS5wdXNoKHosIGgpLCBoOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sIGthOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICB6KHkpOwogICAgICAgIH0gfSk7CiAgICAgIH0sCiAgICAgIHg6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUih0KSwgRChuLCB7IFFhOiAhMCwgbmFtZTogdCwgYXJnUGFja0FkdmFuY2U6IDAsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSB9KTsKICAgICAgfSwKICAgICAgazogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIG4gPSB6bihuKSwgdCA9IEN0KHQsICJlbXZhbDo6YXMiKTsKICAgICAgICB2YXIgaSA9IFtdLCBvID0gZW4oaSk7CiAgICAgICAgcmV0dXJuIGtbciA+PiAyXSA9IG8sIHQudG9XaXJlVHlwZShpLCBuKTsKICAgICAgfSwKICAgICAgaTogQm4sCiAgICAgIGw6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICByZXR1cm4gbiA9IHpuKG4pLCB0ID0gem4odCksIGVuKG5bdF0pOwogICAgICB9LAogICAgICBwOiBmdW5jdGlvbihuKSB7CiAgICAgICAgdmFyIHQgPSBzZVtuXTsKICAgICAgICByZXR1cm4gZW4odCA9PT0gdm9pZCAwID8gUihuKSA6IHQpOwogICAgICB9LAogICAgICBvOiBmdW5jdGlvbihuKSB7CiAgICAgICAgQ24oaltuXS52YWx1ZSksIEJuKG4pOwogICAgICB9LAogICAgICB5OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgcmV0dXJuIG4gPSBDdChuLCAiX2VtdmFsX3Rha2VfdmFsdWUiKSwgbiA9IG4ucmVhZFZhbHVlRnJvbVBvaW50ZXIodCksIGVuKG4pOwogICAgICB9LAogICAgICBmOiBmdW5jdGlvbigpIHsKICAgICAgICBzbigpOwogICAgICB9LAogICAgICBxOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgRi5jb3B5V2l0aGluKG4sIHQsIHQgKyByKTsKICAgICAgfSwKICAgICAgcjogZnVuY3Rpb24obikgewogICAgICAgIG4gPj4+PSAwOwogICAgICAgIHZhciB0ID0gRi5sZW5ndGg7CiAgICAgICAgaWYgKDIxNDc0ODM2NDggPCBuKSByZXR1cm4gITE7CiAgICAgICAgZm9yICh2YXIgciA9IDE7IDQgPj0gcjsgciAqPSAyKSB7CiAgICAgICAgICB2YXIgaSA9IHQgKiAoMSArIDAuMiAvIHIpOwogICAgICAgICAgaSA9IE1hdGgubWluKGksIG4gKyAxMDA2NjMyOTYpLCBpID0gTWF0aC5tYXgoMTY3NzcyMTYsIG4sIGkpLCAwIDwgaSAlIDY1NTM2ICYmIChpICs9IDY1NTM2IC0gaSAlIDY1NTM2KTsKICAgICAgICAgIG46IHsKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICBILmdyb3coTWF0aC5taW4oMjE0NzQ4MzY0OCwgaSkgLSBLLmJ5dGVMZW5ndGggKyA2NTUzNSA+Pj4gMTYpLCBldChILmJ1ZmZlcik7CiAgICAgICAgICAgICAgdmFyIG8gPSAxOwogICAgICAgICAgICAgIGJyZWFrIG47CiAgICAgICAgICAgIH0gY2F0Y2ggewogICAgICAgICAgICB9CiAgICAgICAgICAgIG8gPSB2b2lkIDA7CiAgICAgICAgICB9CiAgICAgICAgICBpZiAobykgcmV0dXJuICEwOwogICAgICAgIH0KICAgICAgICByZXR1cm4gITE7CiAgICAgIH0sCiAgICAgIHM6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB2YXIgciA9IDA7CiAgICAgICAgcmV0dXJuIEV0KCkuZm9yRWFjaChmdW5jdGlvbihpLCBvKSB7CiAgICAgICAgICB2YXIgcyA9IHQgKyByOwogICAgICAgICAgZm9yIChvID0ga1tuICsgNCAqIG8gPj4gMl0gPSBzLCBzID0gMDsgcyA8IGkubGVuZ3RoOyArK3MpIFlbbysrID4+IDBdID0gaS5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgWVtvID4+IDBdID0gMCwgciArPSBpLmxlbmd0aCArIDE7CiAgICAgICAgfSksIDA7CiAgICAgIH0sCiAgICAgIHQ6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB2YXIgciA9IEV0KCk7CiAgICAgICAga1tuID4+IDJdID0gci5sZW5ndGg7CiAgICAgICAgdmFyIGkgPSAwOwogICAgICAgIHJldHVybiByLmZvckVhY2goZnVuY3Rpb24obykgewogICAgICAgICAgaSArPSBvLmxlbmd0aCArIDE7CiAgICAgICAgfSksIGtbdCA+PiAyXSA9IGksIDA7CiAgICAgIH0sCiAgICAgIGE6IEgKICAgIH07CiAgICAoZnVuY3Rpb24oKSB7CiAgICAgIGZ1bmN0aW9uIG4ocykgewogICAgICAgIHMgPSBzLmV4cG9ydHMsIHMgPSBNdChzKSwgZS5hc20gPSBzLCBaLS0sIGUubW9uaXRvclJ1bkRlcGVuZGVuY2llcyAmJiBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMoWiksIFogPT0gMCAmJiBvbiAmJiAocyA9IG9uLCBvbiA9IG51bGwsIHMoKSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gdChzKSB7CiAgICAgICAgbihzLmluc3RhbmNlKTsKICAgICAgfQogICAgICBmdW5jdGlvbiByKHMpIHsKICAgICAgICByZXR1cm4gWHQoKS50aGVuKGZ1bmN0aW9uKGwpIHsKICAgICAgICAgIHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShsLCBpKTsKICAgICAgICB9KS50aGVuKHMsIGZ1bmN0aW9uKGwpIHsKICAgICAgICAgIEUoImZhaWxlZCB0byBhc3luY2hyb25vdXNseSBwcmVwYXJlIHdhc206ICIgKyBsKSwgc24obCk7CiAgICAgICAgfSk7CiAgICAgIH0KICAgICAgdmFyIGkgPSB7IGE6IHVlIH07CiAgICAgIGlmIChaKyssIGUubW9uaXRvclJ1bkRlcGVuZGVuY2llcyAmJiBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMoWiksIGUuaW5zdGFudGlhdGVXYXNtKSB0cnkgewogICAgICAgIHZhciBvID0gZS5pbnN0YW50aWF0ZVdhc20oaSwgbik7CiAgICAgICAgcmV0dXJuIG8gPSBNdChvKTsKICAgICAgfSBjYXRjaCAocykgewogICAgICAgIHJldHVybiBFKCJNb2R1bGUuaW5zdGFudGlhdGVXYXNtIGNhbGxiYWNrIGZhaWxlZCB3aXRoIGVycm9yOiAiICsgcyksICExOwogICAgICB9CiAgICAgIHJldHVybiBmdW5jdGlvbigpIHsKICAgICAgICBpZiAoVyB8fCB0eXBlb2YgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcgIT0gImZ1bmN0aW9uIiB8fCBzdCgpIHx8IFJuKCJmaWxlOi8vIikgfHwgdHlwZW9mIGZldGNoICE9ICJmdW5jdGlvbiIpIHJldHVybiByKHQpOwogICAgICAgIGZldGNoKCQsIHsgY3JlZGVudGlhbHM6ICJzYW1lLW9yaWdpbiIgfSkudGhlbihmdW5jdGlvbihzKSB7CiAgICAgICAgICByZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcocywgaSkudGhlbih0LCBmdW5jdGlvbihsKSB7CiAgICAgICAgICAgIHJldHVybiBFKCJ3YXNtIHN0cmVhbWluZyBjb21waWxlIGZhaWxlZDogIiArIGwpLCBFKCJmYWxsaW5nIGJhY2sgdG8gQXJyYXlCdWZmZXIgaW5zdGFudGlhdGlvbiIpLCByKHQpOwogICAgICAgICAgfSk7CiAgICAgICAgfSk7CiAgICAgIH0oKSwge307CiAgICB9KSgpOwogICAgdmFyIFN0ID0gZS5fX193YXNtX2NhbGxfY3RvcnMgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChTdCA9IGUuX19fd2FzbV9jYWxsX2N0b3JzID0gZS5hc20uQikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIEVuID0gZS5fbWFsbG9jID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoRW4gPSBlLl9tYWxsb2MgPSBlLmFzbS5DKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgeiA9IGUuX2ZyZWUgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuICh6ID0gZS5fZnJlZSA9IGUuYXNtLkQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBXdCA9IGUuX19fZ2V0VHlwZU5hbWUgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChXdCA9IGUuX19fZ2V0VHlwZU5hbWUgPSBlLmFzbS5FKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfTsKICAgIGUuX19fZW1iaW5kX3JlZ2lzdGVyX25hdGl2ZV9hbmRfYnVpbHRpbl90eXBlcyA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX19fZW1iaW5kX3JlZ2lzdGVyX25hdGl2ZV9hbmRfYnVpbHRpbl90eXBlcyA9IGUuYXNtLkYpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWkgPSBlLmFzbS5HKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpID0gZS5hc20uSCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9pID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2kgPSBlLmFzbS5JKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWkgPSBlLmFzbS5KKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaSA9IGUuYXNtLkspLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfZmlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2ZpaSA9IGUuYXNtLkwpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpZiA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlmID0gZS5hc20uTSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaSA9IGUuYXNtLk4pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpID0gZS5hc20uTykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWlpID0gZS5hc20uUCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpID0gZS5hc20uUSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWlpaSA9IGUuYXNtLlIpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWkgPSBlLmFzbS5TKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWlkaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlpZGkgPSBlLmFzbS5UKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWRpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWRpID0gZS5hc20uVSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlpaSA9IGUuYXNtLlYpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlpID0gZS5hc20uVykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpID0gZS5hc20uWCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpaWkgPSBlLmFzbS5ZKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpID0gZS5hc20uWikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWkgPSBlLmFzbS5fKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RhcnRfdW53aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RhcnRfdW53aW5kID0gZS5hc20uJCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0b3BfdW53aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RvcF91bndpbmQgPSBlLmFzbS5hYSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0YXJ0X3Jld2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0YXJ0X3Jld2luZCA9IGUuYXNtLmJhKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RvcF9yZXdpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdG9wX3Jld2luZCA9IGUuYXNtLmNhKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfTsKICAgIHZhciBQbjsKICAgIG9uID0gZnVuY3Rpb24gbigpIHsKICAgICAgUG4gfHwgR24oKSwgUG4gfHwgKG9uID0gbik7CiAgICB9OwogICAgZnVuY3Rpb24gR24oKSB7CiAgICAgIGZ1bmN0aW9uIG4oKSB7CiAgICAgICAgaWYgKCFQbiAmJiAoUG4gPSAhMCwgZS5jYWxsZWRSdW4gPSAhMCwgIWtuKSkgewogICAgICAgICAgaWYgKHBuKGF0KSwgcG4oWnQpLCBtKGUpLCBlLm9uUnVudGltZUluaXRpYWxpemVkICYmIGUub25SdW50aW1lSW5pdGlhbGl6ZWQoKSwgZS5wb3N0UnVuKSBmb3IgKHR5cGVvZiBlLnBvc3RSdW4gPT0gImZ1bmN0aW9uIiAmJiAoZS5wb3N0UnVuID0gW2UucG9zdFJ1bl0pOyBlLnBvc3RSdW4ubGVuZ3RoOyApIHsKICAgICAgICAgICAgdmFyIHQgPSBlLnBvc3RSdW4uc2hpZnQoKTsKICAgICAgICAgICAgb3QudW5zaGlmdCh0KTsKICAgICAgICAgIH0KICAgICAgICAgIHBuKG90KTsKICAgICAgICB9CiAgICAgIH0KICAgICAgaWYgKCEoMCA8IFopKSB7CiAgICAgICAgaWYgKGUucHJlUnVuKSBmb3IgKHR5cGVvZiBlLnByZVJ1biA9PSAiZnVuY3Rpb24iICYmIChlLnByZVJ1biA9IFtlLnByZVJ1bl0pOyBlLnByZVJ1bi5sZW5ndGg7ICkgJHQoKTsKICAgICAgICBwbihpdCksIDAgPCBaIHx8IChlLnNldFN0YXR1cyA/IChlLnNldFN0YXR1cygiUnVubmluZy4uLiIpLCBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgICAgICAgICAgZS5zZXRTdGF0dXMoIiIpOwogICAgICAgICAgfSwgMSksIG4oKTsKICAgICAgICB9LCAxKSkgOiBuKCkpOwogICAgICB9CiAgICB9CiAgICBpZiAoZS5ydW4gPSBHbiwgZS5wcmVJbml0KSBmb3IgKHR5cGVvZiBlLnByZUluaXQgPT0gImZ1bmN0aW9uIiAmJiAoZS5wcmVJbml0ID0gW2UucHJlSW5pdF0pOyAwIDwgZS5wcmVJbml0Lmxlbmd0aDsgKSBlLnByZUluaXQucG9wKCkoKTsKICAgIHJldHVybiBHbigpLCB1LnJlYWR5OwogIH07Cn0oKTsKY2xhc3MgbWUgewogIGNvbnN0cnVjdG9yKCkgewogICAgWW4odGhpcywgInNhbVdhc21Nb2R1bGUiKTsKICB9CiAgZ2V0T3ZlcnJpZGRlbk1vZHVsZXModSwgZSkgewogICAgcmV0dXJuIHsKICAgICAgbG9jYXRlRmlsZTogKG0pID0+IG5ldyBVUkwoZSB8fCBtLCB1KS5ocmVmCiAgICB9OwogIH0KICBhc3luYyBoYW5kbGVNaXNzaW5nT3JJbnZhbGlkU2FtTW9kdWxlKHUsIGUpIHsKICAgIHRyeSB7CiAgICAgIGNvbnN0IG0gPSBhd2FpdCBmZXRjaCh1KTsKICAgICAgaWYgKCFtLm9rKQogICAgICAgIHRocm93IG5ldyBJKAogICAgICAgICAgYFRoZSBwYXRoIHRvICR7ZX0gaXMgaW5jb3JyZWN0IG9yIHRoZSBtb2R1bGUgaXMgbWlzc2luZy4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7dX1gCiAgICAgICAgKTsKICAgICAgY29uc3QgZyA9IGF3YWl0IG0uYXJyYXlCdWZmZXIoKTsKICAgICAgaWYgKCFXZWJBc3NlbWJseS52YWxpZGF0ZShnKSkKICAgICAgICB0aHJvdyBuZXcgSSgKICAgICAgICAgIGBUaGUgcHJvdmlkZWQgJHtlfSBpcyBub3QgYSB2YWxpZCBXQVNNIG1vZHVsZS4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7dX1gCiAgICAgICAgKTsKICAgIH0gY2F0Y2ggKG0pIHsKICAgICAgaWYgKG0gaW5zdGFuY2VvZiBJKQogICAgICAgIHRocm93IGNvbnNvbGUuZXJyb3IoCiAgICAgICAgICAiWW91IGNhbiBmaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgaG93IHRvIGhvc3Qgd2FzbSBmaWxlcyBoZXJlOiBodHRwczovL2RldmVsb3BlcnMuaW5ub3ZhdHJpY3MuY29tL2RpZ2l0YWwtb25ib2FyZGluZy90ZWNobmljYWwvcmVtb3RlL2RvdC13ZWItZG9jdW1lbnQvbGF0ZXN0L2RvY3VtZW50YXRpb24vI19ob3N0aW5nX3NhbV93YXNtIgogICAgICAgICksIG07CiAgICB9CiAgfQogIGFzeW5jIGdldFdhc21GaWxlTmFtZSgpIHsKICAgIHJldHVybiBhd2FpdCBmZSgpID8ga3Quc2ltZCA6IGt0LnNhbTsKICB9CiAgYXN5bmMgaW5pdFNhbU1vZHVsZSh1LCBlID0gIi93YXNtIikgewogICAgaWYgKHRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgcmV0dXJuOwogICAgY29uc3QgbSA9IGF3YWl0IHRoaXMuZ2V0V2FzbUZpbGVOYW1lKCksIGcgPSBgJHtlfS8ke219YDsKICAgIHRyeSB7CiAgICAgIHRoaXMuc2FtV2FzbU1vZHVsZSA9IGF3YWl0IHBlKHRoaXMuZ2V0T3ZlcnJpZGRlbk1vZHVsZXModSwgZykpOwogICAgfSBjYXRjaCB7CiAgICAgIHRocm93IGF3YWl0IHRoaXMuaGFuZGxlTWlzc2luZ09ySW52YWxpZFNhbU1vZHVsZShnLCBtKSwgbmV3IEkoIkNvdWxkIG5vdCBpbml0IGRldGVjdG9yLiIpOwogICAgfQogIH0KICBhc3luYyBnZXRTYW1WZXJzaW9uKCkgewogICAgdmFyIGU7CiAgICBjb25zdCB1ID0gYXdhaXQgKChlID0gdGhpcy5zYW1XYXNtTW9kdWxlKSA9PSBudWxsID8gdm9pZCAwIDogZS5nZXRJbmZvU3RyaW5nKCkpOwogICAgcmV0dXJuIHUgPT0gbnVsbCA/IHZvaWQgMCA6IHUudHJpbSgpOwogIH0KICAvKgogICAqIEluIFRTIDUuMi4wIHdhcyBhZGRlZCBzcGVjaWFsIGtleXdvcmQgInVzaW5nIiB3aGljaCBjb3VsZCBiZSBwZXJmZWN0IGZvciB0aGlzIGNhc2UuCiAgICogVW5mb3J0dW5hdGVseSwgdml0ZSBwcmVhY3QgcGx1Z2luIGRvZXMgbm90IHN1cHBvcnQgdGhpcyB2ZXJzaW9uIG9mIFRTIHlldC4KICAgKiBDaGVjayBwb3NzaWJpbGl0eSBvZiB1c2luZyAidXNpbmciIGtleXdvcmQgd2hlbiB2aXRlIHByZWFjdCBwbHVnaW4gdXBkYXRlcwogICAqLwogIGFsbG9jYXRlTWVtb3J5KHUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgSSgiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgcmV0dXJuIHRoaXMuc2FtV2FzbU1vZHVsZS5fbWFsbG9jKHUpOwogIH0KICByZWxlYXNlTWVtb3J5KHUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgSSgiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgdGhpcy5zYW1XYXNtTW9kdWxlLl9mcmVlKHUpOwogIH0KICB3cml0ZURhdGFUb01lbW9yeSh1LCBlKSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IEkoIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIHRoaXMuc2FtV2FzbU1vZHVsZS5IRUFQVTguc2V0KHUsIGUpOwogIH0KfQovKioKICogQGxpY2Vuc2UKICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQwogKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMAogKi8KY29uc3QgeHQgPSBTeW1ib2woIkNvbWxpbmsucHJveHkiKSwgdmUgPSBTeW1ib2woIkNvbWxpbmsuZW5kcG9pbnQiKSwgZ2UgPSBTeW1ib2woIkNvbWxpbmsucmVsZWFzZVByb3h5IiksIFpuID0gU3ltYm9sKCJDb21saW5rLmZpbmFsaXplciIpLCBPbiA9IFN5bWJvbCgiQ29tbGluay50aHJvd24iKSwgRnQgPSAoYSkgPT4gdHlwZW9mIGEgPT0gIm9iamVjdCIgJiYgYSAhPT0gbnVsbCB8fCB0eXBlb2YgYSA9PSAiZnVuY3Rpb24iLCB3ZSA9IHsKICBjYW5IYW5kbGU6IChhKSA9PiBGdChhKSAmJiBhW3h0XSwKICBzZXJpYWxpemUoYSkgewogICAgY29uc3QgeyBwb3J0MTogdSwgcG9ydDI6IGUgfSA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpOwogICAgcmV0dXJuIEpuKGEsIHUpLCBbZSwgW2VdXTsKICB9LAogIGRlc2VyaWFsaXplKGEpIHsKICAgIHJldHVybiBhLnN0YXJ0KCksIFRlKGEpOwogIH0KfSwgQWUgPSB7CiAgY2FuSGFuZGxlOiAoYSkgPT4gRnQoYSkgJiYgT24gaW4gYSwKICBzZXJpYWxpemUoeyB2YWx1ZTogYSB9KSB7CiAgICBsZXQgdTsKICAgIHJldHVybiBhIGluc3RhbmNlb2YgRXJyb3IgPyB1ID0gewogICAgICBpc0Vycm9yOiAhMCwKICAgICAgdmFsdWU6IHsKICAgICAgICBtZXNzYWdlOiBhLm1lc3NhZ2UsCiAgICAgICAgbmFtZTogYS5uYW1lLAogICAgICAgIHN0YWNrOiBhLnN0YWNrCiAgICAgIH0KICAgIH0gOiB1ID0geyBpc0Vycm9yOiAhMSwgdmFsdWU6IGEgfSwgW3UsIFtdXTsKICB9LAogIGRlc2VyaWFsaXplKGEpIHsKICAgIHRocm93IGEuaXNFcnJvciA/IE9iamVjdC5hc3NpZ24obmV3IEVycm9yKGEudmFsdWUubWVzc2FnZSksIGEudmFsdWUpIDogYS52YWx1ZTsKICB9Cn0sIEl0ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoWwogIFsicHJveHkiLCB3ZV0sCiAgWyJ0aHJvdyIsIEFlXQpdKTsKZnVuY3Rpb24gX2UoYSwgdSkgewogIGZvciAoY29uc3QgZSBvZiBhKQogICAgaWYgKHUgPT09IGUgfHwgZSA9PT0gIioiIHx8IGUgaW5zdGFuY2VvZiBSZWdFeHAgJiYgZS50ZXN0KHUpKQogICAgICByZXR1cm4gITA7CiAgcmV0dXJuICExOwp9CmZ1bmN0aW9uIEpuKGEsIHUgPSBnbG9iYWxUaGlzLCBlID0gWyIqIl0pIHsKICB1LmFkZEV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBmdW5jdGlvbiBtKGcpIHsKICAgIGlmICghZyB8fCAhZy5kYXRhKQogICAgICByZXR1cm47CiAgICBpZiAoIV9lKGUsIGcub3JpZ2luKSkgewogICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgb3JpZ2luICcke2cub3JpZ2lufScgZm9yIGNvbWxpbmsgcHJveHlgKTsKICAgICAgcmV0dXJuOwogICAgfQogICAgY29uc3QgeyBpZDogQywgdHlwZTogQSwgcGF0aDogTSB9ID0gT2JqZWN0LmFzc2lnbih7IHBhdGg6IFtdIH0sIGcuZGF0YSksIE8gPSAoZy5kYXRhLmFyZ3VtZW50TGlzdCB8fCBbXSkubWFwKEopOwogICAgbGV0IFQ7CiAgICB0cnkgewogICAgICBjb25zdCBfID0gTS5zbGljZSgwLCAtMSkucmVkdWNlKChFLCBXKSA9PiBFW1ddLCBhKSwgUyA9IE0ucmVkdWNlKChFLCBXKSA9PiBFW1ddLCBhKTsKICAgICAgc3dpdGNoIChBKSB7CiAgICAgICAgY2FzZSAiR0VUIjoKICAgICAgICAgIFQgPSBTOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiU0VUIjoKICAgICAgICAgIF9bTS5zbGljZSgtMSlbMF1dID0gSihnLmRhdGEudmFsdWUpLCBUID0gITA7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJBUFBMWSI6CiAgICAgICAgICBUID0gUy5hcHBseShfLCBPKTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIkNPTlNUUlVDVCI6CiAgICAgICAgICB7CiAgICAgICAgICAgIGNvbnN0IEUgPSBuZXcgUyguLi5PKTsKICAgICAgICAgICAgVCA9IFNlKEUpOwogICAgICAgICAgfQogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiRU5EUE9JTlQiOgogICAgICAgICAgewogICAgICAgICAgICBjb25zdCB7IHBvcnQxOiBFLCBwb3J0MjogVyB9ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7CiAgICAgICAgICAgIEpuKGEsIFcpLCBUID0gT2UoRSwgW0VdKTsKICAgICAgICAgIH0KICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIlJFTEVBU0UiOgogICAgICAgICAgVCA9IHZvaWQgMDsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICByZXR1cm47CiAgICAgIH0KICAgIH0gY2F0Y2ggKF8pIHsKICAgICAgVCA9IHsgdmFsdWU6IF8sIFtPbl06IDAgfTsKICAgIH0KICAgIFByb21pc2UucmVzb2x2ZShUKS5jYXRjaCgoXykgPT4gKHsgdmFsdWU6IF8sIFtPbl06IDAgfSkpLnRoZW4oKF8pID0+IHsKICAgICAgY29uc3QgW1MsIEVdID0gYm4oXyk7CiAgICAgIHUucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBTKSwgeyBpZDogQyB9KSwgRSksIEEgPT09ICJSRUxFQVNFIiAmJiAodS5yZW1vdmVFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgbSksIGp0KHUpLCBabiBpbiBhICYmIHR5cGVvZiBhW1puXSA9PSAiZnVuY3Rpb24iICYmIGFbWm5dKCkpOwogICAgfSkuY2F0Y2goKF8pID0+IHsKICAgICAgY29uc3QgW1MsIEVdID0gYm4oewogICAgICAgIHZhbHVlOiBuZXcgVHlwZUVycm9yKCJVbnNlcmlhbGl6YWJsZSByZXR1cm4gdmFsdWUiKSwKICAgICAgICBbT25dOiAwCiAgICAgIH0pOwogICAgICB1LnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgUyksIHsgaWQ6IEMgfSksIEUpOwogICAgfSk7CiAgfSksIHUuc3RhcnQgJiYgdS5zdGFydCgpOwp9CmZ1bmN0aW9uIENlKGEpIHsKICByZXR1cm4gYS5jb25zdHJ1Y3Rvci5uYW1lID09PSAiTWVzc2FnZVBvcnQiOwp9CmZ1bmN0aW9uIGp0KGEpIHsKICBDZShhKSAmJiBhLmNsb3NlKCk7Cn0KZnVuY3Rpb24gVGUoYSwgdSkgewogIHJldHVybiBYbihhLCBbXSwgdSk7Cn0KZnVuY3Rpb24gTW4oYSkgewogIGlmIChhKQogICAgdGhyb3cgbmV3IEVycm9yKCJQcm94eSBoYXMgYmVlbiByZWxlYXNlZCBhbmQgaXMgbm90IHVzZWFibGUiKTsKfQpmdW5jdGlvbiBMdChhKSB7CiAgcmV0dXJuIGFuKGEsIHsKICAgIHR5cGU6ICJSRUxFQVNFIgogIH0pLnRoZW4oKCkgPT4gewogICAganQoYSk7CiAgfSk7Cn0KY29uc3QgU24gPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSwgV24gPSAiRmluYWxpemF0aW9uUmVnaXN0cnkiIGluIGdsb2JhbFRoaXMgJiYgbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KChhKSA9PiB7CiAgY29uc3QgdSA9IChTbi5nZXQoYSkgfHwgMCkgLSAxOwogIFNuLnNldChhLCB1KSwgdSA9PT0gMCAmJiBMdChhKTsKfSk7CmZ1bmN0aW9uIEVlKGEsIHUpIHsKICBjb25zdCBlID0gKFNuLmdldCh1KSB8fCAwKSArIDE7CiAgU24uc2V0KHUsIGUpLCBXbiAmJiBXbi5yZWdpc3RlcihhLCB1LCBhKTsKfQpmdW5jdGlvbiBQZShhKSB7CiAgV24gJiYgV24udW5yZWdpc3RlcihhKTsKfQpmdW5jdGlvbiBYbihhLCB1ID0gW10sIGUgPSBmdW5jdGlvbigpIHsKfSkgewogIGxldCBtID0gITE7CiAgY29uc3QgZyA9IG5ldyBQcm94eShlLCB7CiAgICBnZXQoQywgQSkgewogICAgICBpZiAoTW4obSksIEEgPT09IGdlKQogICAgICAgIHJldHVybiAoKSA9PiB7CiAgICAgICAgICBQZShnKSwgTHQoYSksIG0gPSAhMDsKICAgICAgICB9OwogICAgICBpZiAoQSA9PT0gInRoZW4iKSB7CiAgICAgICAgaWYgKHUubGVuZ3RoID09PSAwKQogICAgICAgICAgcmV0dXJuIHsgdGhlbjogKCkgPT4gZyB9OwogICAgICAgIGNvbnN0IE0gPSBhbihhLCB7CiAgICAgICAgICB0eXBlOiAiR0VUIiwKICAgICAgICAgIHBhdGg6IHUubWFwKChPKSA9PiBPLnRvU3RyaW5nKCkpCiAgICAgICAgfSkudGhlbihKKTsKICAgICAgICByZXR1cm4gTS50aGVuLmJpbmQoTSk7CiAgICAgIH0KICAgICAgcmV0dXJuIFhuKGEsIFsuLi51LCBBXSk7CiAgICB9LAogICAgc2V0KEMsIEEsIE0pIHsKICAgICAgTW4obSk7CiAgICAgIGNvbnN0IFtPLCBUXSA9IGJuKE0pOwogICAgICByZXR1cm4gYW4oYSwgewogICAgICAgIHR5cGU6ICJTRVQiLAogICAgICAgIHBhdGg6IFsuLi51LCBBXS5tYXAoKF8pID0+IF8udG9TdHJpbmcoKSksCiAgICAgICAgdmFsdWU6IE8KICAgICAgfSwgVCkudGhlbihKKTsKICAgIH0sCiAgICBhcHBseShDLCBBLCBNKSB7CiAgICAgIE1uKG0pOwogICAgICBjb25zdCBPID0gdVt1Lmxlbmd0aCAtIDFdOwogICAgICBpZiAoTyA9PT0gdmUpCiAgICAgICAgcmV0dXJuIGFuKGEsIHsKICAgICAgICAgIHR5cGU6ICJFTkRQT0lOVCIKICAgICAgICB9KS50aGVuKEopOwogICAgICBpZiAoTyA9PT0gImJpbmQiKQogICAgICAgIHJldHVybiBYbihhLCB1LnNsaWNlKDAsIC0xKSk7CiAgICAgIGNvbnN0IFtULCBfXSA9IFJ0KE0pOwogICAgICByZXR1cm4gYW4oYSwgewogICAgICAgIHR5cGU6ICJBUFBMWSIsCiAgICAgICAgcGF0aDogdS5tYXAoKFMpID0+IFMudG9TdHJpbmcoKSksCiAgICAgICAgYXJndW1lbnRMaXN0OiBUCiAgICAgIH0sIF8pLnRoZW4oSik7CiAgICB9LAogICAgY29uc3RydWN0KEMsIEEpIHsKICAgICAgTW4obSk7CiAgICAgIGNvbnN0IFtNLCBPXSA9IFJ0KEEpOwogICAgICByZXR1cm4gYW4oYSwgewogICAgICAgIHR5cGU6ICJDT05TVFJVQ1QiLAogICAgICAgIHBhdGg6IHUubWFwKChUKSA9PiBULnRvU3RyaW5nKCkpLAogICAgICAgIGFyZ3VtZW50TGlzdDogTQogICAgICB9LCBPKS50aGVuKEopOwogICAgfQogIH0pOwogIHJldHVybiBFZShnLCBhKSwgZzsKfQpmdW5jdGlvbiBNZShhKSB7CiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGEpOwp9CmZ1bmN0aW9uIFJ0KGEpIHsKICBjb25zdCB1ID0gYS5tYXAoYm4pOwogIHJldHVybiBbdS5tYXAoKGUpID0+IGVbMF0pLCBNZSh1Lm1hcCgoZSkgPT4gZVsxXSkpXTsKfQpjb25zdCBOdCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpOwpmdW5jdGlvbiBPZShhLCB1KSB7CiAgcmV0dXJuIE50LnNldChhLCB1KSwgYTsKfQpmdW5jdGlvbiBTZShhKSB7CiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYSwgeyBbeHRdOiAhMCB9KTsKfQpmdW5jdGlvbiBibihhKSB7CiAgZm9yIChjb25zdCBbdSwgZV0gb2YgSXQpCiAgICBpZiAoZS5jYW5IYW5kbGUoYSkpIHsKICAgICAgY29uc3QgW20sIGddID0gZS5zZXJpYWxpemUoYSk7CiAgICAgIHJldHVybiBbCiAgICAgICAgewogICAgICAgICAgdHlwZTogIkhBTkRMRVIiLAogICAgICAgICAgbmFtZTogdSwKICAgICAgICAgIHZhbHVlOiBtCiAgICAgICAgfSwKICAgICAgICBnCiAgICAgIF07CiAgICB9CiAgcmV0dXJuIFsKICAgIHsKICAgICAgdHlwZTogIlJBVyIsCiAgICAgIHZhbHVlOiBhCiAgICB9LAogICAgTnQuZ2V0KGEpIHx8IFtdCiAgXTsKfQpmdW5jdGlvbiBKKGEpIHsKICBzd2l0Y2ggKGEudHlwZSkgewogICAgY2FzZSAiSEFORExFUiI6CiAgICAgIHJldHVybiBJdC5nZXQoYS5uYW1lKS5kZXNlcmlhbGl6ZShhLnZhbHVlKTsKICAgIGNhc2UgIlJBVyI6CiAgICAgIHJldHVybiBhLnZhbHVlOwogIH0KfQpmdW5jdGlvbiBhbihhLCB1LCBlKSB7CiAgcmV0dXJuIG5ldyBQcm9taXNlKChtKSA9PiB7CiAgICBjb25zdCBnID0gV2UoKTsKICAgIGEuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGZ1bmN0aW9uIEMoQSkgewogICAgICAhQS5kYXRhIHx8ICFBLmRhdGEuaWQgfHwgQS5kYXRhLmlkICE9PSBnIHx8IChhLnJlbW92ZUV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBDKSwgbShBLmRhdGEpKTsKICAgIH0pLCBhLnN0YXJ0ICYmIGEuc3RhcnQoKSwgYS5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKHsgaWQ6IGcgfSwgdSksIGUpOwogIH0pOwp9CmZ1bmN0aW9uIFdlKCkgewogIHJldHVybiBuZXcgQXJyYXkoNCkuZmlsbCgwKS5tYXAoKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpLnRvU3RyaW5nKDE2KSkuam9pbigiLSIpOwp9CmZ1bmN0aW9uIEh0KGEsIHUpIHsKICByZXR1cm4gTWF0aC5zcXJ0KChhLnggLSB1LngpICoqIDIgKyAoYS55IC0gdS55KSAqKiAyKTsKfQpmdW5jdGlvbiBiZShhLCB1KSB7CiAgcmV0dXJuIHsKICAgIHg6IChhLnggKyB1LngpIC8gMiwKICAgIHk6IChhLnkgKyB1LnkpIC8gMgogIH07Cn0KZnVuY3Rpb24ga2UoYSwgdSkgewogIGlmIChhLmNvbmZpZGVuY2UgPD0gMCB8fCB1LmNvbmZpZGVuY2UgPD0gMCkKICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTsKICBjb25zdCBlID0gSHQoYS5jZW50ZXIsIHUuY2VudGVyKSwgbSA9IGJlKGEuY2VudGVyLCB1LmNlbnRlcik7CiAgcmV0dXJuIHsKICAgIHg6IG0ueCwKICAgIHk6IG0ueSArIGUgLyA0CiAgICAvLyBjYWxjdWxhdGlvbiBpcyB0YWtlbiBmcm9tIG1vYmlsZSB0ZWFtCiAgfTsKfQpmdW5jdGlvbiBSZShhLCB1LCBlKSB7CiAgaWYgKGEuY29uZmlkZW5jZSA8PSAwIHx8IHUuY29uZmlkZW5jZSA8PSAwKQogICAgcmV0dXJuIDA7CiAgY29uc3QgbSA9IEh0KGEuY2VudGVyLCB1LmNlbnRlciksIGcgPSB5ZShlLndpZHRoLCBlLmhlaWdodCk7CiAgcmV0dXJuIGhlKG0gLyBnKTsKfQpmdW5jdGlvbiAkbihhKSB7CiAgY29uc3QgeyBjZW50ZXJYOiB1LCBjZW50ZXJZOiBlLCBjb25maWRlbmNlOiBtLCBzaXplOiBnLCBzdGF0dXM6IEMgfSA9IGE7CiAgcmV0dXJuIHsKICAgIGNlbnRlcjogewogICAgICB4OiB1LAogICAgICB5OiBlCiAgICB9LAogICAgY29uZmlkZW5jZTogbSAvIDFlMywKICAgIHN0YXR1czogQyAvIDFlMywKICAgIHNpemU6IGcKICB9Owp9CmNsYXNzIHhlIGV4dGVuZHMgbWUgewogIHBhcnNlUmF3RGF0YSh1LCBlKSB7CiAgICBjb25zdCB7IGJyaWdodG5lc3M6IG0sIHNoYXJwbmVzczogZyB9ID0gdS5wYXJhbXMsIHsgYm90dG9tUmlnaHRYOiBDLCBib3R0b21SaWdodFk6IEEsIGxlZnRFeWU6IE0sIG1vdXRoOiBPLCByaWdodEV5ZTogVCwgdG9wTGVmdFg6IF8sIHRvcExlZnRZOiBTIH0gPSB1LCBFID0gJG4oTSksIFcgPSAkbihUKSwgSCA9ICRuKE8pOwogICAgcmV0dXJuIHsKICAgICAgY29uZmlkZW5jZTogdS5jb25maWRlbmNlIC8gMWUzLAogICAgICB0b3BMZWZ0OiB7CiAgICAgICAgeDogXywKICAgICAgICB5OiBTCiAgICAgIH0sCiAgICAgIGJvdHRvbVJpZ2h0OiB7CiAgICAgICAgeDogQywKICAgICAgICB5OiBBCiAgICAgIH0sCiAgICAgIGZhY2VDZW50ZXI6IGtlKEUsIFcpLAogICAgICBmYWNlU2l6ZTogUmUoRSwgVywgZSksCiAgICAgIGxlZnRFeWU6IEUsCiAgICAgIHJpZ2h0RXllOiBXLAogICAgICBtb3V0aDogSCwKICAgICAgYnJpZ2h0bmVzczogbSAvIDFlMywKICAgICAgc2hhcnBuZXNzOiBnIC8gMWUzCiAgICB9OwogIH0KICBhc3luYyBkZXRlY3QodSwgZSwgbSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBJKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICBjb25zdCBnID0gdGhpcy5hbGxvY2F0ZU1lbW9yeSh1Lmxlbmd0aCAqIHUuQllURVNfUEVSX0VMRU1FTlQpLCBDID0gdGhpcy5hbGxvY2F0ZU1lbW9yeSh1Lmxlbmd0aCAqIHUuQllURVNfUEVSX0VMRU1FTlQpOwogICAgdGhpcy53cml0ZURhdGFUb01lbW9yeSh1LCBnKSwgdGhpcy5zYW1XYXNtTW9kdWxlLmNvbnZlcnRUb1NhbUNvbG9ySW1hZ2UoCiAgICAgIGUud2lkdGgsCiAgICAgIGUuaGVpZ2h0LAogICAgICBnLAogICAgICBkZS5SR0JBLAogICAgICBDCiAgICApOwogICAgY29uc3QgQSA9IHRoaXMuc2FtV2FzbU1vZHVsZS5kZXRlY3RGYWNlUGFydHNXaXRoSW1hZ2VQYXJhbWV0ZXJzKAogICAgICBlLndpZHRoLAogICAgICBlLmhlaWdodCwKICAgICAgQywKICAgICAgMCwKICAgICAgMCwKICAgICAgLy8gcGFyYW1XaWR0aCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICAgMAogICAgICAvLyBwYXJhbUhlaWdodCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICk7CiAgICByZXR1cm4gdGhpcy5yZWxlYXNlTWVtb3J5KGcpLCB0aGlzLnJlbGVhc2VNZW1vcnkoQyksIHRoaXMucGFyc2VSYXdEYXRhKEEsIG0pOwogIH0KfQpKbih4ZSk7Cg==", id = (i) => Uint8Array.from(atob(i), (o) => o.charCodeAt(0)), Js = typeof window < "u" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);", id(tc)], { type: "text/javascript;charset=utf-8" });
function od(i) {
  let o;
  try {
    if (o = Js && (window.URL || window.webkitURL).createObjectURL(Js), !o) throw "";
    const t = new Worker(o, {
      type: "module",
      name: i == null ? void 0 : i.name
    });
    return t.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(o);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + tc,
      {
        type: "module",
        name: i == null ? void 0 : i.name
      }
    );
  }
}
var An, Xt;
class rd {
  constructor(o) {
    ce(this, An);
    ce(this, Xt);
    se(this, An, o), se(this, Xt, /* @__PURE__ */ new Map());
  }
  validate() {
    M(this, An).forEach((o) => {
      M(this, Xt).set(o.name, o.evaluate());
    });
  }
  isValid() {
    return Array.from(M(this, Xt).values()).every((o) => o);
  }
  get result() {
    return M(this, Xt);
  }
  get validators() {
    return M(this, An);
  }
}
An = new WeakMap(), Xt = new WeakMap();
var ai, Mt;
class Me {
  constructor(o, t) {
    ce(this, ai);
    ce(this, Mt);
    se(this, ai, o), se(this, Mt, t);
  }
  get threshold() {
    return M(this, Mt);
  }
  get name() {
    return M(this, ai);
  }
  isValueBelowThreshold(o) {
    return o < M(this, Mt);
  }
  isValueAboveThreshold(o) {
    return o > M(this, Mt);
  }
}
ai = new WeakMap(), Mt = new WeakMap();
var si;
class ad extends Me {
  constructor(t, e) {
    super("isNotDim", t);
    ce(this, si);
    se(this, si, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(M(this, si));
  }
}
si = new WeakMap();
var gi;
class sd extends Me {
  constructor(t, e) {
    super("isNotSmall", t);
    ce(this, gi);
    se(this, gi, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(M(this, gi));
  }
}
gi = new WeakMap();
var ci;
class gd extends Me {
  constructor(t, e) {
    super("isNotBright", t);
    ce(this, ci);
    se(this, ci, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(M(this, ci));
  }
}
ci = new WeakMap();
var li;
class cd extends Me {
  constructor(t, e) {
    super("isPresent", t);
    ce(this, li);
    se(this, li, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(M(this, li));
  }
}
li = new WeakMap();
var xi;
class ld extends Me {
  constructor(t, e) {
    super("isSharp", t);
    ce(this, xi);
    se(this, xi, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(M(this, xi));
  }
}
xi = new WeakMap();
var ui;
class xd extends Me {
  constructor(t, e) {
    super("isLeftEyePresent", t);
    ce(this, ui);
    se(this, ui, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(M(this, ui));
  }
}
ui = new WeakMap();
var Ii;
class ud extends Me {
  constructor(t, e) {
    super("isMouthPresent", t);
    ce(this, Ii);
    se(this, Ii, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(M(this, Ii));
  }
}
Ii = new WeakMap();
var di;
class Id extends Me {
  constructor(t, e) {
    super("isMouthScoreNotTooLow", t);
    ce(this, di);
    se(this, di, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(M(this, di));
  }
}
di = new WeakMap();
var Ci;
class dd extends Me {
  constructor(t, e) {
    super("isMouthScoreNotTooHigh", t);
    ce(this, Ci);
    se(this, Ci, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(M(this, Ci));
  }
}
Ci = new WeakMap();
var fi;
class Cd extends Me {
  constructor(t, e) {
    super("isNotLarge", t);
    ce(this, fi);
    se(this, fi, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(M(this, fi));
  }
}
fi = new WeakMap();
var hi;
class fd extends Me {
  constructor(t, e) {
    super("isNotPitched", t || -4363 + 17 * -211 + 8050);
    ce(this, hi);
    se(this, hi, e);
  }
  evaluate() {
    const { z: t } = M(this, hi) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
}
hi = new WeakMap();
var pi;
class hd extends Me {
  constructor(t, e) {
    super("isRightEyePresent", t);
    ce(this, pi);
    se(this, pi, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(M(this, pi));
  }
}
pi = new WeakMap();
var mi, bn;
class pd extends Me {
  constructor(t, e, n) {
    super("isNotOutOfBounds", t);
    ce(this, mi);
    ce(this, bn);
    se(this, mi, e), se(this, bn, n);
  }
  evaluate() {
    const t = Mg(M(this, bn), this.threshold), e = jg(M(this, mi), M(this, bn));
    return vI(e, t);
  }
}
mi = new WeakMap(), bn = new WeakMap();
class md {
  static getFaceValidationInstance(o, t, e, n) {
    return new rd([new cd(o.faceConfidence, t.confidence), new xd(o.leftEye.confidence, t.leftEye.confidence), new hd(o.rightEye.confidence, t.rightEye.confidence), new sd(o.minFaceSizeRatio, t.faceSize), new Cd(o.maxFaceSizeRatio, t.faceSize), new ld(o.sharpnessThreshold, t.sharpness), new ad(o.brightnessLowThreshold, t.brightness), new gd(o.brightnessHighThreshold, t.brightness), new pd(o.outOfBoundsThreshold, t, e), new fd(o.pitchAngleAccelerationThreshold, n), new ud(o.mouth.confidence, t.mouth.confidence), new dd(o.mouth.status.max, t.mouth.status), new Id(o.mouth.status.min, t.mouth.status)]);
  }
}
const bo = class bo extends XI {
  constructor() {
    super(...arguments);
    X(this, "detector");
    X(this, "className", "FaceController");
    X(this, "fallbackInstruction", Be.FACE_NOT_PRESENT);
    X(this, "pitchAngleAccelerationThreshold", null);
    X(this, "getInstructionCode", (t, e) => {
      var r;
      if (this.isInCandidateSelection) return Be.CANDIDATE_SELECTION;
      if ((r = this.lastImage) != null && r.isValid && e) return Be.CANDIDATE_SELECTION;
      if (this.lastImage && e) return this.lastImage.instructionCode;
      const [n] = this.getInstructionCodesForValidators(t);
      return n ?? this.fallbackInstruction;
    });
    X(this, "getInstructionCodesForValidators", (t) => {
      const e = [];
      return Array.from(t).forEach(([n, r]) => {
        !r && e.push(Xx[n]);
      }), e;
    });
  }
  static async init() {
    const t = new od(), e = _g(t), n = new bo(), r = await new e();
    this._instance = n, this._instance.detector = r;
  }
  static async getInstance() {
    return !this._instance && await this.init(), this._instance;
  }
  setThresholds(t) {
    super.setThresholds(t);
    const { devicePitchAngleThreshold: e } = t;
    this.pitchAngleAccelerationThreshold = uu * Math.sin(e * (Math.PI / (86 * -97 + -641 + 187 * 49)));
  }
  restart() {
    super.restart(), Fs(bt.INSTRUCTION_CHANGED, void 0, Mu);
  }
  validateDetectedObject(t, e) {
    const n = md.getFaceValidationInstance({ ...this.getThresholds(), pitchAngleAccelerationThreshold: this.pitchAngleAccelerationThreshold }, t, e, this.acceleration);
    return n.validate(), n;
  }
  async processImage({ image: t, timestamp: e }) {
    var K;
    const n = {};
    n.width = t.width, n.height = t.height;
    const r = n, a = pa(r), s = Ru(t, a), g = Pu(s), x = {};
    x.width = s.width, x.height = s.height;
    const C = x;
    let u = await this.detector.detect(g, C, r);
    u = GI(r, u);
    const p = this.validateDetectedObject(u, r), { result: m } = p, y = this.getInstructionCode(m, p.isValid());
    if (m.get("isPresent")) {
      const S = {};
      S.image = g, S.timestamp = e, this.collectImagesForDuplicateDetection(S);
    }
    if (this.isInCandidateSelection) {
      if (this.bestImage && p.isValid() && this.isNewImageBetter(this.bestImage.detection, u)) {
        const S = { image: t, detection: Cn(u) };
        this.bestImage = S, this.candidateSelectionImages.push(S);
      }
    } else if ((K = this.lastImage) != null && K.isValid && p.isValid()) {
      const S = { image: t, detection: Cn(u) }, W = {};
      W.image = this.lastImage.image, W.detection = this.lastImage.detection;
      const R = W;
      this.isNewImageBetter(R.detection, S.detection) ? this.bestImage = S : this.bestImage = R, this.candidateSelectionImages.push(R, S), this.isInCandidateSelection = !0;
    } else p.isValid() ? this.lastImage = { instructionCode: y, isValid: !0, image: t, detection: Cn(u) } : this.lastImage = { instructionCode: y, isValid: !1, image: t, detection: Cn(u) };
    const G = { detectedFace: Cn(u), instructionCode: y, invalidValidators: this.getInstructionCodesForValidators(m), isInCandidateSelection: this.isInCandidateSelection };
    return this.detectionRecord.push(G.detectedFace), Fs(bt.INSTRUCTION_CHANGED, y), Uu(bt.DETECTED_FACE_CHANGED, G.detectedFace, this.getThresholds().faceConfidence), zu(bt.FACE_DETECTION, G.detectedFace, t), G;
  }
};
X(bo, "_instance");
let Mr = bo;
const Ad = (i, o) => {
  const { handleError: t } = Tn(), [e, n] = Ne(), { acceleration: r } = SI();
  e && e.setAcceleration(r), fe(() => {
    (async () => {
      const g = await Mr.getInstance();
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
var Rt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, nc = {}, Us = {}, bd = yd;
function yd(i, o) {
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
var ic = {};
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
    for (var x = null, C = [], u = 0, p = 0, m; s < g; ) {
      var y = a[s++];
      switch (p) {
        case 0:
          C[u++] = t[y >> 2], m = (y & 3) << 4, p = 1;
          break;
        case 1:
          C[u++] = t[m | y >> 4], m = (y & 15) << 2, p = 2;
          break;
        case 2:
          C[u++] = t[m | y >> 6], C[u++] = t[y & 63], p = 0;
          break;
      }
      u > 8191 && ((x || (x = [])).push(String.fromCharCode.apply(String, C)), u = 0);
    }
    return p && (C[u++] = t[m], C[u++] = 61, p === 1 && (C[u++] = 61)), x ? (u && x.push(String.fromCharCode.apply(String, C.slice(0, u))), x.join("")) : String.fromCharCode.apply(String, C.slice(0, u));
  };
  var r = "invalid encoding";
  o.decode = function(a, s, g) {
    for (var x = g, C = 0, u, p = 0; p < a.length; ) {
      var m = a.charCodeAt(p++);
      if (m === 61 && C > 1)
        break;
      if ((m = e[m]) === void 0)
        throw Error(r);
      switch (C) {
        case 0:
          u = m, C = 1;
          break;
        case 1:
          s[g++] = u << 2 | (m & 48) >> 4, u = m, C = 2;
          break;
        case 2:
          s[g++] = (u & 15) << 4 | (m & 60) >> 2, u = m, C = 3;
          break;
        case 3:
          s[g++] = (u & 3) << 6 | m, C = 0;
          break;
      }
    }
    if (C === 1)
      throw Error(r);
    return g - x;
  }, o.test = function(a) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(a);
  };
})(ic);
var vd = Ko;
function Ko() {
  this._listeners = {};
}
Ko.prototype.on = function(i, o, t) {
  return (this._listeners[i] || (this._listeners[i] = [])).push({
    fn: o,
    ctx: t || this
  }), this;
};
Ko.prototype.off = function(i, o) {
  if (i === void 0)
    this._listeners = {};
  else if (o === void 0)
    this._listeners[i] = [];
  else
    for (var t = this._listeners[i], e = 0; e < t.length; )
      t[e].fn === o ? t.splice(e, 1) : ++e;
  return this;
};
Ko.prototype.emit = function(i) {
  var o = this._listeners[i];
  if (o) {
    for (var t = [], e = 1; e < arguments.length; )
      t.push(arguments[e++]);
    for (e = 0; e < o.length; )
      o[e].fn.apply(o[e++].ctx, t);
  }
  return this;
};
var wd = zs(zs);
function zs(i) {
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
    i.writeFloatLE = o.bind(null, Qs), i.writeFloatBE = o.bind(null, $s);
    function t(e, n, r) {
      var a = e(n, r), s = (a >> 31) * 2 + 1, g = a >>> 23 & 255, x = a & 8388607;
      return g === 255 ? x ? NaN : s * (1 / 0) : g === 0 ? s * 1401298464324817e-60 * x : s * Math.pow(2, g - 150) * (x + 8388608);
    }
    i.readFloatLE = t.bind(null, _s), i.readFloatBE = t.bind(null, qs);
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
          var u = Math.floor(Math.log(a) / Math.LN2);
          u === 1024 && (u = 1023), C = a * Math.pow(2, -u), e(C * 4503599627370496 >>> 0, s, g + n), e((x << 31 | u + 1023 << 20 | C * 1048576 & 1048575) >>> 0, s, g + r);
        }
      }
    }
    i.writeDoubleLE = o.bind(null, Qs, 0, 4), i.writeDoubleBE = o.bind(null, $s, 4, 0);
    function t(e, n, r, a, s) {
      var g = e(a, s + n), x = e(a, s + r), C = (x >> 31) * 2 + 1, u = x >>> 20 & 2047, p = 4294967296 * (x & 1048575) + g;
      return u === 2047 ? p ? NaN : C * (1 / 0) : u === 0 ? C * 5e-324 * p : C * Math.pow(2, u - 1075) * (p + 4503599627370496);
    }
    i.readDoubleLE = t.bind(null, _s, 0, 4), i.readDoubleBE = t.bind(null, qs, 4, 0);
  }(), i;
}
function Qs(i, o, t) {
  o[t] = i & 255, o[t + 1] = i >>> 8 & 255, o[t + 2] = i >>> 16 & 255, o[t + 3] = i >>> 24;
}
function $s(i, o, t) {
  o[t] = i >>> 24, o[t + 1] = i >>> 16 & 255, o[t + 2] = i >>> 8 & 255, o[t + 3] = i & 255;
}
function _s(i, o) {
  return (i[o] | i[o + 1] << 8 | i[o + 2] << 16 | i[o + 3] << 24) >>> 0;
}
function qs(i, o) {
  return (i[o] << 24 | i[o + 1] << 16 | i[o + 2] << 8 | i[o + 3]) >>> 0;
}
function e0(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Sd = Bd;
function Bd(i) {
  try {
    if (typeof e0 != "function")
      return null;
    var o = e0(i);
    return o && (o.length || Object.keys(o).length) ? o : null;
  } catch {
    return null;
  }
}
var oc = {};
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
})(oc);
var Gd = Zd;
function Zd(i, o, t) {
  var e = t || 8192, n = e >>> 1, r = null, a = e;
  return function(s) {
    if (s < 1 || s > n)
      return i(s);
    a + s > e && (r = i(e), a = 0);
    var g = o.call(r, a, a += s);
    return a & 7 && (a = (a | 7) + 1), g;
  };
}
var sr, t0;
function Hd() {
  if (t0)
    return sr;
  t0 = 1, sr = o;
  var i = en();
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
  }, sr;
}
var n0;
function en() {
  return n0 || (n0 = 1, function(i) {
    var o = i;
    o.asPromise = bd, o.base64 = ic, o.EventEmitter = vd, o.float = wd, o.inquire = Sd, o.utf8 = oc, o.pool = Gd, o.LongBits = Hd(), o.isNode = !!(typeof Rt < "u" && Rt && Rt.process && Rt.process.versions && Rt.process.versions.node), o.global = o.isNode && Rt || typeof window < "u" && window || typeof self < "u" && self || Rt, o.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  }(Us)), Us;
}
var rc = $, $e = en(), jr, Oo = $e.LongBits, i0 = $e.base64, o0 = $e.utf8;
function wi(i, o, t) {
  this.fn = i, this.len = o, this.next = void 0, this.val = t;
}
function ma() {
}
function Wd(i) {
  this.head = i.head, this.tail = i.tail, this.len = i.len, this.next = i.states;
}
function $() {
  this.len = 0, this.head = new wi(ma, 0, 0), this.tail = this.head, this.states = null;
}
var ac = function() {
  return $e.Buffer ? function() {
    return ($.create = function() {
      return new jr();
    })();
  } : function() {
    return new $();
  };
};
$.create = ac();
$.alloc = function(i) {
  return new $e.Array(i);
};
$e.Array !== Array && ($.alloc = $e.pool($.alloc, $e.Array.prototype.subarray));
$.prototype._push = function(i, o, t) {
  return this.tail = this.tail.next = new wi(i, o, t), this.len += o, this;
};
function Aa(i, o, t) {
  o[t] = i & 255;
}
function kd(i, o, t) {
  for (; i > 127; )
    o[t++] = i & 127 | 128, i >>>= 7;
  o[t] = i;
}
function ba(i, o) {
  this.len = i, this.next = void 0, this.val = o;
}
ba.prototype = Object.create(wi.prototype);
ba.prototype.fn = kd;
$.prototype.uint32 = function(i) {
  return this.len += (this.tail = this.tail.next = new ba(
    (i = i >>> 0) < 128 ? 1 : i < 16384 ? 2 : i < 2097152 ? 3 : i < 268435456 ? 4 : 5,
    i
  )).len, this;
};
$.prototype.int32 = function(i) {
  return i < 0 ? this._push(ya, 10, Oo.fromNumber(i)) : this.uint32(i);
};
$.prototype.sint32 = function(i) {
  return this.uint32((i << 1 ^ i >> 31) >>> 0);
};
function ya(i, o, t) {
  for (; i.hi; )
    o[t++] = i.lo & 127 | 128, i.lo = (i.lo >>> 7 | i.hi << 25) >>> 0, i.hi >>>= 7;
  for (; i.lo > 127; )
    o[t++] = i.lo & 127 | 128, i.lo = i.lo >>> 7;
  o[t++] = i.lo;
}
$.prototype.uint64 = function(i) {
  var o = Oo.from(i);
  return this._push(ya, o.length(), o);
};
$.prototype.int64 = $.prototype.uint64;
$.prototype.sint64 = function(i) {
  var o = Oo.from(i).zzEncode();
  return this._push(ya, o.length(), o);
};
$.prototype.bool = function(i) {
  return this._push(Aa, 1, i ? 1 : 0);
};
function Jr(i, o, t) {
  o[t] = i & 255, o[t + 1] = i >>> 8 & 255, o[t + 2] = i >>> 16 & 255, o[t + 3] = i >>> 24;
}
$.prototype.fixed32 = function(i) {
  return this._push(Jr, 4, i >>> 0);
};
$.prototype.sfixed32 = $.prototype.fixed32;
$.prototype.fixed64 = function(i) {
  var o = Oo.from(i);
  return this._push(Jr, 4, o.lo)._push(Jr, 4, o.hi);
};
$.prototype.sfixed64 = $.prototype.fixed64;
$.prototype.float = function(i) {
  return this._push($e.float.writeFloatLE, 4, i);
};
$.prototype.double = function(i) {
  return this._push($e.float.writeDoubleLE, 8, i);
};
var Kd = $e.Array.prototype.set ? function(i, o, t) {
  o.set(i, t);
} : function(i, o, t) {
  for (var e = 0; e < i.length; ++e)
    o[t + e] = i[e];
};
$.prototype.bytes = function(i) {
  var o = i.length >>> 0;
  if (!o)
    return this._push(Aa, 1, 0);
  if ($e.isString(i)) {
    var t = $.alloc(o = i0.length(i));
    i0.decode(i, t, 0), i = t;
  }
  return this.uint32(o)._push(Kd, o, i);
};
$.prototype.string = function(i) {
  var o = o0.length(i);
  return o ? this.uint32(o)._push(o0.write, o, i) : this._push(Aa, 1, 0);
};
$.prototype.fork = function() {
  return this.states = new Wd(this), this.head = this.tail = new wi(ma, 0, 0), this.len = 0, this;
};
$.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new wi(ma, 0, 0), this.len = 0), this;
};
$.prototype.ldelim = function() {
  var i = this.head, o = this.tail, t = this.len;
  return this.reset().uint32(t), t && (this.tail.next = i.next, this.tail = o, this.len += t), this;
};
$.prototype.finish = function() {
  for (var i = this.head.next, o = this.constructor.alloc(this.len), t = 0; i; )
    i.fn(i.val, o, t), t += i.len, i = i.next;
  return o;
};
$._configure = function(i) {
  jr = i, $.create = ac(), jr._configure();
};
var Od = ut, sc = rc;
(ut.prototype = Object.create(sc.prototype)).constructor = ut;
var Wt = en();
function ut() {
  sc.call(this);
}
ut._configure = function() {
  ut.alloc = Wt._Buffer_allocUnsafe, ut.writeBytesBuffer = Wt.Buffer && Wt.Buffer.prototype instanceof Uint8Array && Wt.Buffer.prototype.set.name === "set" ? function(i, o, t) {
    o.set(i, t);
  } : function(i, o, t) {
    if (i.copy)
      i.copy(o, t, 0, i.length);
    else
      for (var e = 0; e < i.length; )
        o[t++] = i[e++];
  };
};
ut.prototype.bytes = function(i) {
  Wt.isString(i) && (i = Wt._Buffer_from(i, "base64"));
  var o = i.length >>> 0;
  return this.uint32(o), o && this._push(ut.writeBytesBuffer, o, i), this;
};
function Vd(i, o, t) {
  i.length < 40 ? Wt.utf8.write(i, o, t) : o.utf8Write ? o.utf8Write(i, t) : o.write(i, t);
}
ut.prototype.string = function(i) {
  var o = Wt.Buffer.byteLength(i);
  return this.uint32(o), o && this._push(Vd, o, i), this;
};
ut._configure();
var gc = xe, It = en(), Ur, cc = It.LongBits, Ed = It.utf8;
function rt(i, o) {
  return RangeError("index out of range: " + i.pos + " + " + (o || 1) + " > " + i.len);
}
function xe(i) {
  this.buf = i, this.pos = 0, this.len = i.length;
}
var r0 = typeof Uint8Array < "u" ? function(i) {
  if (i instanceof Uint8Array || Array.isArray(i))
    return new xe(i);
  throw Error("illegal buffer");
} : function(i) {
  if (Array.isArray(i))
    return new xe(i);
  throw Error("illegal buffer");
}, lc = function() {
  return It.Buffer ? function(i) {
    return (xe.create = function(o) {
      return It.Buffer.isBuffer(o) ? new Ur(o) : r0(o);
    })(i);
  } : r0;
};
xe.create = lc();
xe.prototype._slice = It.Array.prototype.subarray || /* istanbul ignore next */
It.Array.prototype.slice;
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
function gr() {
  var i = new cc(0, 0), o = 0;
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
function po(i, o) {
  return (i[o - 4] | i[o - 3] << 8 | i[o - 2] << 16 | i[o - 1] << 24) >>> 0;
}
xe.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw rt(this, 4);
  return po(this.buf, this.pos += 4);
};
xe.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw rt(this, 4);
  return po(this.buf, this.pos += 4) | 0;
};
function a0() {
  if (this.pos + 8 > this.len)
    throw rt(this, 8);
  return new cc(po(this.buf, this.pos += 4), po(this.buf, this.pos += 4));
}
xe.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw rt(this, 4);
  var i = It.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, i;
};
xe.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw rt(this, 4);
  var i = It.float.readDoubleLE(this.buf, this.pos);
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
  return Ed.read(i, 0, i.length);
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
  Ur = i, xe.create = lc(), Ur._configure();
  var o = It.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  It.merge(xe.prototype, {
    int64: function() {
      return gr.call(this)[o](!1);
    },
    uint64: function() {
      return gr.call(this)[o](!0);
    },
    sint64: function() {
      return gr.call(this).zzDecode()[o](!1);
    },
    fixed64: function() {
      return a0.call(this)[o](!0);
    },
    sfixed64: function() {
      return a0.call(this)[o](!1);
    }
  });
};
var Td = $t, xc = gc;
($t.prototype = Object.create(xc.prototype)).constructor = $t;
var s0 = en();
function $t(i) {
  xc.call(this, i);
}
$t._configure = function() {
  s0.Buffer && ($t.prototype._slice = s0.Buffer.prototype.slice);
};
$t.prototype.string = function() {
  var i = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + i, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + i, this.len));
};
$t._configure();
var uc = {}, Rd = ri, va = en();
(ri.prototype = Object.create(va.EventEmitter.prototype)).constructor = ri;
function ri(i, o, t) {
  if (typeof i != "function")
    throw TypeError("rpcImpl must be a function");
  va.EventEmitter.call(this), this.rpcImpl = i, this.requestDelimited = !!o, this.responseDelimited = !!t;
}
ri.prototype.rpcCall = function i(o, t, e, n, r) {
  if (!n)
    throw TypeError("request must be specified");
  var a = this;
  if (!r)
    return va.asPromise(i, a, o, t, e, n);
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
ri.prototype.end = function(i) {
  return this.rpcImpl && (i || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(i) {
  var o = i;
  o.Service = Rd;
})(uc);
var Pd = {};
(function(i) {
  var o = i;
  o.build = "minimal", o.Writer = rc, o.BufferWriter = Od, o.Reader = gc, o.BufferReader = Td, o.util = en(), o.rpc = uc, o.roots = Pd, o.configure = t;
  function t() {
    o.util._configure(), o.Writer._configure(o.BufferWriter), o.Reader._configure(o.BufferReader);
  }
  t();
})(nc);
var ne = nc;
const v = ne.Reader, le = ne.Writer, h = ne.util, d = ne.roots.default || (ne.roots.default = {}), _t = d.dot = (() => {
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
      t instanceof v || (t = v.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new d.dot.Content();
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
      return t instanceof v || (t = new v(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || h.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || h.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !h.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || h.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof d.dot.Content)
        return t;
      let e = new d.dot.Content();
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
            d.dot.Image.encode(e.images[r], n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && d.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof v || (e = v.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new d.dot.v4.MagnifEyeLivenessContent();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.images && a.images.length || (a.images = []), a.images.push(d.dot.Image.decode(e, e.uint32()));
              break;
            }
            case 2: {
              a.metadata = d.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof v || (e = new v(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.images != null && e.hasOwnProperty("images")) {
          if (!Array.isArray(e.images))
            return "images: array expected";
          for (let n = 0; n < e.images.length; ++n) {
            let r = d.dot.Image.verify(e.images[n]);
            if (r)
              return "images." + r;
          }
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = d.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof d.dot.v4.MagnifEyeLivenessContent)
          return e;
        let n = new d.dot.v4.MagnifEyeLivenessContent();
        if (e.images) {
          if (!Array.isArray(e.images))
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: array expected");
          n.images = [];
          for (let r = 0; r < e.images.length; ++r) {
            if (typeof e.images[r] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            n.images[r] = d.dot.Image.fromObject(e.images[r]);
          }
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.metadata: object expected");
          n.metadata = d.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.images = []), n.defaults && (r.metadata = null), e.images && e.images.length) {
          r.images = [];
          for (let a = 0; a < e.images.length; ++a)
            r.images[a] = d.dot.Image.toObject(e.images[a], n);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = d.dot.v4.Metadata.toObject(e.metadata, n)), r;
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
        ).int32(n.platform), n.web != null && Object.hasOwnProperty.call(n, "web") && d.dot.v4.WebMetadata.encode(n.web, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.android != null && Object.hasOwnProperty.call(n, "android") && d.dot.v4.AndroidMetadata.encode(n.android, r.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.ios != null && Object.hasOwnProperty.call(n, "ios") && d.dot.v4.IosMetadata.encode(n.ios, r.uint32(
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
        n instanceof v || (n = v.create(n));
        let a = r === void 0 ? n.len : n.pos + r, s = new d.dot.v4.Metadata();
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
              s.web = d.dot.v4.WebMetadata.decode(n, n.uint32());
              break;
            }
            case 3: {
              s.android = d.dot.v4.AndroidMetadata.decode(n, n.uint32());
              break;
            }
            case 4: {
              s.ios = d.dot.v4.IosMetadata.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(g & 7);
              break;
          }
        }
        return s;
      }, t.decodeDelimited = function(n) {
        return n instanceof v || (n = new v(n)), this.decode(n, n.uint32());
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
            let a = d.dot.v4.WebMetadata.verify(n.web);
            if (a)
              return "web." + a;
          }
        }
        if (n.android != null && n.hasOwnProperty("android")) {
          if (r.metadata === 1)
            return "metadata: multiple values";
          r.metadata = 1;
          {
            let a = d.dot.v4.AndroidMetadata.verify(n.android);
            if (a)
              return "android." + a;
          }
        }
        if (n.ios != null && n.hasOwnProperty("ios")) {
          if (r.metadata === 1)
            return "metadata: multiple values";
          r.metadata = 1;
          {
            let a = d.dot.v4.IosMetadata.verify(n.ios);
            if (a)
              return "ios." + a;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof d.dot.v4.Metadata)
          return n;
        let r = new d.dot.v4.Metadata();
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
          r.web = d.dot.v4.WebMetadata.fromObject(n.web);
        }
        if (n.android != null) {
          if (typeof n.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          r.android = d.dot.v4.AndroidMetadata.fromObject(n.android);
        }
        if (n.ios != null) {
          if (typeof n.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          r.ios = d.dot.v4.IosMetadata.fromObject(n.ios);
        }
        return r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let a = {};
        return r.defaults && (a.platform = r.enums === String ? "WEB" : 0, a.componentVersion = ""), n.platform != null && n.hasOwnProperty("platform") && (a.platform = r.enums === String ? d.dot.Platform[n.platform] === void 0 ? n.platform : d.dot.Platform[n.platform] : n.platform), n.web != null && n.hasOwnProperty("web") && (a.web = d.dot.v4.WebMetadata.toObject(n.web, r), r.oneofs && (a.metadata = "web")), n.android != null && n.hasOwnProperty("android") && (a.android = d.dot.v4.AndroidMetadata.toObject(n.android, r), r.oneofs && (a.metadata = "android")), n.ios != null && n.hasOwnProperty("ios") && (a.ios = d.dot.v4.IosMetadata.toObject(n.ios, r), r.oneofs && (a.metadata = "ios")), n.sessionToken != null && n.hasOwnProperty("sessionToken") && (a.sessionToken = n.sessionToken, r.oneofs && (a._sessionToken = "sessionToken")), n.componentVersion != null && n.hasOwnProperty("componentVersion") && (a.componentVersion = n.componentVersion), a;
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
            ).string(a[s]), d.dot.Int32List.encode(n.dynamicCameraFrameProperties[a[s]], r.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (n.digestsWithTimestamp != null && n.digestsWithTimestamp.length)
          for (let a = 0; a < n.digestsWithTimestamp.length; ++a)
            d.dot.DigestWithTimestamp.encode(n.digestsWithTimestamp[a], r.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return r;
      }, t.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, t.decode = function(n, r) {
        n instanceof v || (n = v.create(n));
        let a = r === void 0 ? n.len : n.pos + r, s = new d.dot.v4.AndroidMetadata(), g, x;
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
              s.digestsWithTimestamp && s.digestsWithTimestamp.length || (s.digestsWithTimestamp = []), s.digestsWithTimestamp.push(d.dot.DigestWithTimestamp.decode(n, n.uint32()));
              break;
            }
            case 4: {
              s.dynamicCameraFrameProperties === h.emptyObject && (s.dynamicCameraFrameProperties = {});
              let u = n.uint32() + n.pos;
              for (g = "", x = null; n.pos < u; ) {
                let p = n.uint32();
                switch (p >>> 3) {
                  case 1:
                    g = n.string();
                    break;
                  case 2:
                    x = d.dot.Int32List.decode(n, n.uint32());
                    break;
                  default:
                    n.skipType(p & 7);
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
        return n instanceof v || (n = new v(n)), this.decode(n, n.uint32());
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
            let a = d.dot.DigestWithTimestamp.verify(n.digestsWithTimestamp[r]);
            if (a)
              return "digestsWithTimestamp." + a;
          }
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
      }, t.fromObject = function(n) {
        if (n instanceof d.dot.v4.AndroidMetadata)
          return n;
        let r = new d.dot.v4.AndroidMetadata();
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
            r.digestsWithTimestamp[a] = d.dot.DigestWithTimestamp.fromObject(n.digestsWithTimestamp[a]);
          }
        }
        if (n.dynamicCameraFrameProperties) {
          if (typeof n.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          r.dynamicCameraFrameProperties = {};
          for (let a = Object.keys(n.dynamicCameraFrameProperties), s = 0; s < a.length; ++s) {
            if (typeof n.dynamicCameraFrameProperties[a[s]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            r.dynamicCameraFrameProperties[a[s]] = d.dot.Int32List.fromObject(n.dynamicCameraFrameProperties[a[s]]);
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
            a.dynamicCameraFrameProperties[s[g]] = d.dot.Int32List.toObject(n.dynamicCameraFrameProperties[s[g]], r);
        }
        if (n.digestsWithTimestamp && n.digestsWithTimestamp.length) {
          a.digestsWithTimestamp = [];
          for (let g = 0; g < n.digestsWithTimestamp.length; ++g)
            a.digestsWithTimestamp[g] = d.dot.DigestWithTimestamp.toObject(n.digestsWithTimestamp[g], r);
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
            d.dot.DigestWithTimestamp.encode(e.digestsWithTimestamp[r], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof v || (e = v.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new d.dot.v4.IosMetadata(), s, g;
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
                let u = e.uint32();
                switch (u >>> 3) {
                  case 1:
                    s = e.string();
                    break;
                  case 2:
                    g = e.bool();
                    break;
                  default:
                    e.skipType(u & 7);
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
              a.digestsWithTimestamp && a.digestsWithTimestamp.length || (a.digestsWithTimestamp = []), a.digestsWithTimestamp.push(d.dot.DigestWithTimestamp.decode(e, e.uint32()));
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
        return e instanceof v || (e = new v(e)), this.decode(e, e.uint32());
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
            let r = d.dot.DigestWithTimestamp.verify(e.digestsWithTimestamp[n]);
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
        if (e instanceof d.dot.v4.IosMetadata)
          return e;
        let n = new d.dot.v4.IosMetadata();
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
            n.digestsWithTimestamp[r] = d.dot.DigestWithTimestamp.fromObject(e.digestsWithTimestamp[r]);
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
            r.digestsWithTimestamp[s] = d.dot.DigestWithTimestamp.toObject(e.digestsWithTimestamp[s], n);
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
        if (n || (n = le.create()), e.currentCameraProperties != null && Object.hasOwnProperty.call(e, "currentCameraProperties") && d.dot.v4.MediaTrackSettings.encode(e.currentCameraProperties, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.availableCameraProperties != null && e.availableCameraProperties.length)
          for (let r = 0; r < e.availableCameraProperties.length; ++r)
            d.dot.v4.CameraProperties.encode(e.availableCameraProperties[r], n.uint32(
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
            d.dot.v4.DetectedObject.encode(e.detectionRecord[r], n.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (e.hashedDetectedImagesWithTimestamp != null && e.hashedDetectedImagesWithTimestamp.length)
          for (let r = 0; r < e.hashedDetectedImagesWithTimestamp.length; ++r)
            d.dot.v4.HashedDetectedImageWithTimestamp.encode(e.hashedDetectedImagesWithTimestamp[r], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof v || (e = v.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new d.dot.v4.WebMetadata();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.currentCameraProperties = d.dot.v4.MediaTrackSettings.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.availableCameraProperties && a.availableCameraProperties.length || (a.availableCameraProperties = []), a.availableCameraProperties.push(d.dot.v4.CameraProperties.decode(e, e.uint32()));
              break;
            }
            case 3: {
              a.hashedDetectedImages && a.hashedDetectedImages.length || (a.hashedDetectedImages = []), a.hashedDetectedImages.push(e.string());
              break;
            }
            case 5: {
              a.hashedDetectedImagesWithTimestamp && a.hashedDetectedImagesWithTimestamp.length || (a.hashedDetectedImagesWithTimestamp = []), a.hashedDetectedImagesWithTimestamp.push(d.dot.v4.HashedDetectedImageWithTimestamp.decode(e, e.uint32()));
              break;
            }
            case 4: {
              a.detectionRecord && a.detectionRecord.length || (a.detectionRecord = []), a.detectionRecord.push(d.dot.v4.DetectedObject.decode(e, e.uint32()));
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof v || (e = new v(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.currentCameraProperties != null && e.hasOwnProperty("currentCameraProperties")) {
          let n = d.dot.v4.MediaTrackSettings.verify(e.currentCameraProperties);
          if (n)
            return "currentCameraProperties." + n;
        }
        if (e.availableCameraProperties != null && e.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(e.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let n = 0; n < e.availableCameraProperties.length; ++n) {
            let r = d.dot.v4.CameraProperties.verify(e.availableCameraProperties[n]);
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
            let r = d.dot.v4.HashedDetectedImageWithTimestamp.verify(e.hashedDetectedImagesWithTimestamp[n]);
            if (r)
              return "hashedDetectedImagesWithTimestamp." + r;
          }
        }
        if (e.detectionRecord != null && e.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(e.detectionRecord))
            return "detectionRecord: array expected";
          for (let n = 0; n < e.detectionRecord.length; ++n) {
            let r = d.dot.v4.DetectedObject.verify(e.detectionRecord[n]);
            if (r)
              return "detectionRecord." + r;
          }
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof d.dot.v4.WebMetadata)
          return e;
        let n = new d.dot.v4.WebMetadata();
        if (e.currentCameraProperties != null) {
          if (typeof e.currentCameraProperties != "object")
            throw TypeError(".dot.v4.WebMetadata.currentCameraProperties: object expected");
          n.currentCameraProperties = d.dot.v4.MediaTrackSettings.fromObject(e.currentCameraProperties);
        }
        if (e.availableCameraProperties) {
          if (!Array.isArray(e.availableCameraProperties))
            throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: array expected");
          n.availableCameraProperties = [];
          for (let r = 0; r < e.availableCameraProperties.length; ++r) {
            if (typeof e.availableCameraProperties[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            n.availableCameraProperties[r] = d.dot.v4.CameraProperties.fromObject(e.availableCameraProperties[r]);
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
            n.hashedDetectedImagesWithTimestamp[r] = d.dot.v4.HashedDetectedImageWithTimestamp.fromObject(e.hashedDetectedImagesWithTimestamp[r]);
          }
        }
        if (e.detectionRecord) {
          if (!Array.isArray(e.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          n.detectionRecord = [];
          for (let r = 0; r < e.detectionRecord.length; ++r) {
            if (typeof e.detectionRecord[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            n.detectionRecord[r] = d.dot.v4.DetectedObject.fromObject(e.detectionRecord[r]);
          }
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.availableCameraProperties = [], r.hashedDetectedImages = [], r.detectionRecord = [], r.hashedDetectedImagesWithTimestamp = []), n.defaults && (r.currentCameraProperties = null), e.currentCameraProperties != null && e.hasOwnProperty("currentCameraProperties") && (r.currentCameraProperties = d.dot.v4.MediaTrackSettings.toObject(e.currentCameraProperties, n)), e.availableCameraProperties && e.availableCameraProperties.length) {
          r.availableCameraProperties = [];
          for (let a = 0; a < e.availableCameraProperties.length; ++a)
            r.availableCameraProperties[a] = d.dot.v4.CameraProperties.toObject(e.availableCameraProperties[a], n);
        }
        if (e.hashedDetectedImages && e.hashedDetectedImages.length) {
          r.hashedDetectedImages = [];
          for (let a = 0; a < e.hashedDetectedImages.length; ++a)
            r.hashedDetectedImages[a] = e.hashedDetectedImages[a];
        }
        if (e.detectionRecord && e.detectionRecord.length) {
          r.detectionRecord = [];
          for (let a = 0; a < e.detectionRecord.length; ++a)
            r.detectionRecord[a] = d.dot.v4.DetectedObject.toObject(e.detectionRecord[a], n);
        }
        if (e.hashedDetectedImagesWithTimestamp && e.hashedDetectedImagesWithTimestamp.length) {
          r.hashedDetectedImagesWithTimestamp = [];
          for (let a = 0; a < e.hashedDetectedImagesWithTimestamp.length; ++a)
            r.hashedDetectedImagesWithTimestamp[a] = d.dot.v4.HashedDetectedImageWithTimestamp.toObject(e.hashedDetectedImagesWithTimestamp[a], n);
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
        e instanceof v || (e = v.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new d.dot.v4.HashedDetectedImageWithTimestamp();
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
        return e instanceof v || (e = new v(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !h.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !h.isInteger(e.timestampMillis) && !(e.timestampMillis && h.isInteger(e.timestampMillis.low) && h.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof d.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let n = new d.dot.v4.HashedDetectedImageWithTimestamp();
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
        n instanceof v || (n = v.create(n));
        let a = r === void 0 ? n.len : n.pos + r, s = new d.dot.v4.MediaTrackSettings();
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
        return n instanceof v || (n = new v(n)), this.decode(n, n.uint32());
      }, t.verify = function(n) {
        return typeof n != "object" || n === null ? "object expected" : n.aspectRatio != null && n.hasOwnProperty("aspectRatio") && typeof n.aspectRatio != "number" ? "aspectRatio: number expected" : n.autoGainControl != null && n.hasOwnProperty("autoGainControl") && typeof n.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : n.channelCount != null && n.hasOwnProperty("channelCount") && !h.isInteger(n.channelCount) ? "channelCount: integer expected" : n.deviceId != null && n.hasOwnProperty("deviceId") && !h.isString(n.deviceId) ? "deviceId: string expected" : n.displaySurface != null && n.hasOwnProperty("displaySurface") && !h.isString(n.displaySurface) ? "displaySurface: string expected" : n.echoCancellation != null && n.hasOwnProperty("echoCancellation") && typeof n.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : n.facingMode != null && n.hasOwnProperty("facingMode") && !h.isString(n.facingMode) ? "facingMode: string expected" : n.frameRate != null && n.hasOwnProperty("frameRate") && typeof n.frameRate != "number" ? "frameRate: number expected" : n.groupId != null && n.hasOwnProperty("groupId") && !h.isString(n.groupId) ? "groupId: string expected" : n.height != null && n.hasOwnProperty("height") && !h.isInteger(n.height) ? "height: integer expected" : n.noiseSuppression != null && n.hasOwnProperty("noiseSuppression") && typeof n.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : n.sampleRate != null && n.hasOwnProperty("sampleRate") && !h.isInteger(n.sampleRate) ? "sampleRate: integer expected" : n.sampleSize != null && n.hasOwnProperty("sampleSize") && !h.isInteger(n.sampleSize) ? "sampleSize: integer expected" : n.width != null && n.hasOwnProperty("width") && !h.isInteger(n.width) ? "width: integer expected" : n.deviceName != null && n.hasOwnProperty("deviceName") && !h.isString(n.deviceName) ? "deviceName: string expected" : null;
      }, t.fromObject = function(n) {
        if (n instanceof d.dot.v4.MediaTrackSettings)
          return n;
        let r = new d.dot.v4.MediaTrackSettings();
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
        e instanceof v || (e = v.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new d.dot.v4.ImageBitmap();
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
        return e instanceof v || (e = new v(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !h.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !h.isInteger(e.height) ? "height: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof d.dot.v4.ImageBitmap)
          return e;
        let n = new d.dot.v4.ImageBitmap();
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
        return r || (r = le.create()), n.cameraInitFrameResolution != null && Object.hasOwnProperty.call(n, "cameraInitFrameResolution") && d.dot.v4.ImageBitmap.encode(n.cameraInitFrameResolution, r.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.cameraProperties != null && Object.hasOwnProperty.call(n, "cameraProperties") && d.dot.v4.MediaTrackSettings.encode(n.cameraProperties, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), r;
      }, t.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, t.decode = function(n, r) {
        n instanceof v || (n = v.create(n));
        let a = r === void 0 ? n.len : n.pos + r, s = new d.dot.v4.CameraProperties();
        for (; n.pos < a; ) {
          let g = n.uint32();
          switch (g >>> 3) {
            case 1: {
              s.cameraInitFrameResolution = d.dot.v4.ImageBitmap.decode(n, n.uint32());
              break;
            }
            case 2: {
              s.cameraProperties = d.dot.v4.MediaTrackSettings.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(g & 7);
              break;
          }
        }
        return s;
      }, t.decodeDelimited = function(n) {
        return n instanceof v || (n = new v(n)), this.decode(n, n.uint32());
      }, t.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.cameraInitFrameResolution != null && n.hasOwnProperty("cameraInitFrameResolution")) {
          let r = d.dot.v4.ImageBitmap.verify(n.cameraInitFrameResolution);
          if (r)
            return "cameraInitFrameResolution." + r;
        }
        if (n.cameraProperties != null && n.hasOwnProperty("cameraProperties")) {
          let r = d.dot.v4.MediaTrackSettings.verify(n.cameraProperties);
          if (r)
            return "cameraProperties." + r;
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof d.dot.v4.CameraProperties)
          return n;
        let r = new d.dot.v4.CameraProperties();
        if (n.cameraInitFrameResolution != null) {
          if (typeof n.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          r.cameraInitFrameResolution = d.dot.v4.ImageBitmap.fromObject(n.cameraInitFrameResolution);
        }
        if (n.cameraProperties != null) {
          if (typeof n.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          r.cameraProperties = d.dot.v4.MediaTrackSettings.fromObject(n.cameraProperties);
        }
        return r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let a = {};
        return r.defaults && (a.cameraProperties = null), n.cameraInitFrameResolution != null && n.hasOwnProperty("cameraInitFrameResolution") && (a.cameraInitFrameResolution = d.dot.v4.ImageBitmap.toObject(n.cameraInitFrameResolution, r), r.oneofs && (a._cameraInitFrameResolution = "cameraInitFrameResolution")), n.cameraProperties != null && n.hasOwnProperty("cameraProperties") && (a.cameraProperties = d.dot.v4.MediaTrackSettings.toObject(n.cameraProperties, r)), a;
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
        ).float(e.faceSize), e.faceCenter != null && Object.hasOwnProperty.call(e, "faceCenter") && d.dot.v4.Point.encode(e.faceCenter, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), e.smallestEdge != null && Object.hasOwnProperty.call(e, "smallestEdge") && n.uint32(
          /* id 7, wireType 5 =*/
          61
        ).float(e.smallestEdge), e.bottomLeft != null && Object.hasOwnProperty.call(e, "bottomLeft") && d.dot.v4.Point.encode(e.bottomLeft, n.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), e.bottomRight != null && Object.hasOwnProperty.call(e, "bottomRight") && d.dot.v4.Point.encode(e.bottomRight, n.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), e.topLeft != null && Object.hasOwnProperty.call(e, "topLeft") && d.dot.v4.Point.encode(e.topLeft, n.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), e.topRight != null && Object.hasOwnProperty.call(e, "topRight") && d.dot.v4.Point.encode(e.topRight, n.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof v || (e = v.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new d.dot.v4.DetectedObject();
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
              a.faceCenter = d.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              a.smallestEdge = e.float();
              break;
            }
            case 8: {
              a.bottomLeft = d.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              a.bottomRight = d.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              a.topLeft = d.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              a.topRight = d.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof v || (e = new v(e)), this.decode(e, e.uint32());
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
          let n = d.dot.v4.Point.verify(e.faceCenter);
          if (n)
            return "faceCenter." + n;
        }
        if (e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && typeof e.smallestEdge != "number")
          return "smallestEdge: number expected";
        if (e.bottomLeft != null && e.hasOwnProperty("bottomLeft")) {
          let n = d.dot.v4.Point.verify(e.bottomLeft);
          if (n)
            return "bottomLeft." + n;
        }
        if (e.bottomRight != null && e.hasOwnProperty("bottomRight")) {
          let n = d.dot.v4.Point.verify(e.bottomRight);
          if (n)
            return "bottomRight." + n;
        }
        if (e.topLeft != null && e.hasOwnProperty("topLeft")) {
          let n = d.dot.v4.Point.verify(e.topLeft);
          if (n)
            return "topLeft." + n;
        }
        if (e.topRight != null && e.hasOwnProperty("topRight")) {
          let n = d.dot.v4.Point.verify(e.topRight);
          if (n)
            return "topRight." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof d.dot.v4.DetectedObject)
          return e;
        let n = new d.dot.v4.DetectedObject();
        if (e.brightness != null && (n.brightness = Number(e.brightness)), e.sharpness != null && (n.sharpness = Number(e.sharpness)), e.hotspots != null && (n.hotspots = Number(e.hotspots)), e.confidence != null && (n.confidence = Number(e.confidence)), e.faceSize != null && (n.faceSize = Number(e.faceSize)), e.faceCenter != null) {
          if (typeof e.faceCenter != "object")
            throw TypeError(".dot.v4.DetectedObject.faceCenter: object expected");
          n.faceCenter = d.dot.v4.Point.fromObject(e.faceCenter);
        }
        if (e.smallestEdge != null && (n.smallestEdge = Number(e.smallestEdge)), e.bottomLeft != null) {
          if (typeof e.bottomLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomLeft: object expected");
          n.bottomLeft = d.dot.v4.Point.fromObject(e.bottomLeft);
        }
        if (e.bottomRight != null) {
          if (typeof e.bottomRight != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomRight: object expected");
          n.bottomRight = d.dot.v4.Point.fromObject(e.bottomRight);
        }
        if (e.topLeft != null) {
          if (typeof e.topLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.topLeft: object expected");
          n.topLeft = d.dot.v4.Point.fromObject(e.topLeft);
        }
        if (e.topRight != null) {
          if (typeof e.topRight != "object")
            throw TypeError(".dot.v4.DetectedObject.topRight: object expected");
          n.topRight = d.dot.v4.Point.fromObject(e.topRight);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.brightness = 0, r.sharpness = 0, r.hotspots = 0, r.confidence = 0, r.faceSize = 0, r.faceCenter = null, r.smallestEdge = 0, r.bottomLeft = null, r.bottomRight = null, r.topLeft = null, r.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (r.brightness = n.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (r.sharpness = n.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (r.hotspots = n.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (r.confidence = n.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (r.faceSize = n.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (r.faceCenter = d.dot.v4.Point.toObject(e.faceCenter, n)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (r.smallestEdge = n.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (r.bottomLeft = d.dot.v4.Point.toObject(e.bottomLeft, n)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (r.bottomRight = d.dot.v4.Point.toObject(e.bottomRight, n)), e.topLeft != null && e.hasOwnProperty("topLeft") && (r.topLeft = d.dot.v4.Point.toObject(e.topLeft, n)), e.topRight != null && e.hasOwnProperty("topRight") && (r.topRight = d.dot.v4.Point.toObject(e.topRight, n)), r;
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
        e instanceof v || (e = v.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new d.dot.v4.Point();
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
        return e instanceof v || (e = new v(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.x != null && e.hasOwnProperty("x") && typeof e.x != "number" ? "x: number expected" : e.y != null && e.hasOwnProperty("y") && typeof e.y != "number" ? "y: number expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof d.dot.v4.Point)
          return e;
        let n = new d.dot.v4.Point();
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
        return n || (n = le.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && d.dot.Image.encode(e.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && d.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof v || (e = v.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new d.dot.v4.FaceContent();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.image = d.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.metadata = d.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof v || (e = new v(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let n = d.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = d.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof d.dot.v4.FaceContent)
          return e;
        let n = new d.dot.v4.FaceContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.FaceContent.image: object expected");
          n.image = d.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.FaceContent.metadata: object expected");
          n.metadata = d.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.image = null, r.metadata = null), e.image != null && e.hasOwnProperty("image") && (r.image = d.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = d.dot.v4.Metadata.toObject(e.metadata, n)), r;
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
        return n || (n = le.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && d.dot.Image.encode(e.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && d.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof v || (e = v.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new d.dot.v4.DocumentContent();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.image = d.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.metadata = d.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof v || (e = new v(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let n = d.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = d.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof d.dot.v4.DocumentContent)
          return e;
        let n = new d.dot.v4.DocumentContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.DocumentContent.image: object expected");
          n.image = d.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.DocumentContent.metadata: object expected");
          n.metadata = d.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.image = null, r.metadata = null), e.image != null && e.hasOwnProperty("image") && (r.image = d.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = d.dot.v4.Metadata.toObject(e.metadata, n)), r;
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
        return r || (r = le.create()), n.documentContent != null && Object.hasOwnProperty.call(n, "documentContent") && d.dot.v4.DocumentContent.encode(n.documentContent, r.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.faceContent != null && Object.hasOwnProperty.call(n, "faceContent") && d.dot.v4.FaceContent.encode(n.faceContent, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(n, "magnifeyeLivenessContent") && d.dot.v4.MagnifEyeLivenessContent.encode(n.magnifeyeLivenessContent, r.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.smileLivenessContent != null && Object.hasOwnProperty.call(n, "smileLivenessContent") && d.dot.v4.SmileLivenessContent.encode(n.smileLivenessContent, r.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), n.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(n, "eyeGazeLivenessContent") && d.dot.v4.EyeGazeLivenessContent.encode(n.eyeGazeLivenessContent, r.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), r;
      }, t.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, t.decode = function(n, r) {
        n instanceof v || (n = v.create(n));
        let a = r === void 0 ? n.len : n.pos + r, s = new d.dot.v4.Blob();
        for (; n.pos < a; ) {
          let g = n.uint32();
          switch (g >>> 3) {
            case 1: {
              s.documentContent = d.dot.v4.DocumentContent.decode(n, n.uint32());
              break;
            }
            case 5: {
              s.eyeGazeLivenessContent = d.dot.v4.EyeGazeLivenessContent.decode(n, n.uint32());
              break;
            }
            case 2: {
              s.faceContent = d.dot.v4.FaceContent.decode(n, n.uint32());
              break;
            }
            case 3: {
              s.magnifeyeLivenessContent = d.dot.v4.MagnifEyeLivenessContent.decode(n, n.uint32());
              break;
            }
            case 4: {
              s.smileLivenessContent = d.dot.v4.SmileLivenessContent.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(g & 7);
              break;
          }
        }
        return s;
      }, t.decodeDelimited = function(n) {
        return n instanceof v || (n = new v(n)), this.decode(n, n.uint32());
      }, t.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        let r = {};
        if (n.documentContent != null && n.hasOwnProperty("documentContent")) {
          r.blob = 1;
          {
            let a = d.dot.v4.DocumentContent.verify(n.documentContent);
            if (a)
              return "documentContent." + a;
          }
        }
        if (n.eyeGazeLivenessContent != null && n.hasOwnProperty("eyeGazeLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let a = d.dot.v4.EyeGazeLivenessContent.verify(n.eyeGazeLivenessContent);
            if (a)
              return "eyeGazeLivenessContent." + a;
          }
        }
        if (n.faceContent != null && n.hasOwnProperty("faceContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let a = d.dot.v4.FaceContent.verify(n.faceContent);
            if (a)
              return "faceContent." + a;
          }
        }
        if (n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let a = d.dot.v4.MagnifEyeLivenessContent.verify(n.magnifeyeLivenessContent);
            if (a)
              return "magnifeyeLivenessContent." + a;
          }
        }
        if (n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let a = d.dot.v4.SmileLivenessContent.verify(n.smileLivenessContent);
            if (a)
              return "smileLivenessContent." + a;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof d.dot.v4.Blob)
          return n;
        let r = new d.dot.v4.Blob();
        if (n.documentContent != null) {
          if (typeof n.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          r.documentContent = d.dot.v4.DocumentContent.fromObject(n.documentContent);
        }
        if (n.eyeGazeLivenessContent != null) {
          if (typeof n.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          r.eyeGazeLivenessContent = d.dot.v4.EyeGazeLivenessContent.fromObject(n.eyeGazeLivenessContent);
        }
        if (n.faceContent != null) {
          if (typeof n.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          r.faceContent = d.dot.v4.FaceContent.fromObject(n.faceContent);
        }
        if (n.magnifeyeLivenessContent != null) {
          if (typeof n.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          r.magnifeyeLivenessContent = d.dot.v4.MagnifEyeLivenessContent.fromObject(n.magnifeyeLivenessContent);
        }
        if (n.smileLivenessContent != null) {
          if (typeof n.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          r.smileLivenessContent = d.dot.v4.SmileLivenessContent.fromObject(n.smileLivenessContent);
        }
        return r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let a = {};
        return n.documentContent != null && n.hasOwnProperty("documentContent") && (a.documentContent = d.dot.v4.DocumentContent.toObject(n.documentContent, r), r.oneofs && (a.blob = "documentContent")), n.faceContent != null && n.hasOwnProperty("faceContent") && (a.faceContent = d.dot.v4.FaceContent.toObject(n.faceContent, r), r.oneofs && (a.blob = "faceContent")), n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent") && (a.magnifeyeLivenessContent = d.dot.v4.MagnifEyeLivenessContent.toObject(n.magnifeyeLivenessContent, r), r.oneofs && (a.blob = "magnifeyeLivenessContent")), n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent") && (a.smileLivenessContent = d.dot.v4.SmileLivenessContent.toObject(n.smileLivenessContent, r), r.oneofs && (a.blob = "smileLivenessContent")), n.eyeGazeLivenessContent != null && n.hasOwnProperty("eyeGazeLivenessContent") && (a.eyeGazeLivenessContent = d.dot.v4.EyeGazeLivenessContent.toObject(n.eyeGazeLivenessContent, r), r.oneofs && (a.blob = "eyeGazeLivenessContent")), a;
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
            d.dot.v4.EyeGazeLivenessSegment.encode(e.segments[r], n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && d.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof v || (e = v.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new d.dot.v4.EyeGazeLivenessContent();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.segments && a.segments.length || (a.segments = []), a.segments.push(d.dot.v4.EyeGazeLivenessSegment.decode(e, e.uint32()));
              break;
            }
            case 2: {
              a.metadata = d.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof v || (e = new v(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.segments != null && e.hasOwnProperty("segments")) {
          if (!Array.isArray(e.segments))
            return "segments: array expected";
          for (let n = 0; n < e.segments.length; ++n) {
            let r = d.dot.v4.EyeGazeLivenessSegment.verify(e.segments[n]);
            if (r)
              return "segments." + r;
          }
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = d.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof d.dot.v4.EyeGazeLivenessContent)
          return e;
        let n = new d.dot.v4.EyeGazeLivenessContent();
        if (e.segments) {
          if (!Array.isArray(e.segments))
            throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: array expected");
          n.segments = [];
          for (let r = 0; r < e.segments.length; ++r) {
            if (typeof e.segments[r] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            n.segments[r] = d.dot.v4.EyeGazeLivenessSegment.fromObject(e.segments[r]);
          }
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.metadata: object expected");
          n.metadata = d.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.segments = []), n.defaults && (r.metadata = null), e.segments && e.segments.length) {
          r.segments = [];
          for (let a = 0; a < e.segments.length; ++a)
            r.segments[a] = d.dot.v4.EyeGazeLivenessSegment.toObject(e.segments[a], n);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = d.dot.v4.Metadata.toObject(e.metadata, n)), r;
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
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && d.dot.Image.encode(e.image, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof v || (e = v.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new d.dot.v4.EyeGazeLivenessSegment();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.corner = e.int32();
              break;
            }
            case 2: {
              a.image = d.dot.Image.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof v || (e = new v(e)), this.decode(e, e.uint32());
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
          let n = d.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof d.dot.v4.EyeGazeLivenessSegment)
          return e;
        let n = new d.dot.v4.EyeGazeLivenessSegment();
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
          n.image = d.dot.Image.fromObject(e.image);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.corner = n.enums === String ? "TOP_LEFT" : 0, r.image = null), e.corner != null && e.hasOwnProperty("corner") && (r.corner = n.enums === String ? d.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : d.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (r.image = d.dot.Image.toObject(e.image, n)), r;
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
        return n || (n = le.create()), e.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(e, "neutralExpressionFaceImage") && d.dot.Image.encode(e.neutralExpressionFaceImage, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.smileExpressionFaceImage != null && Object.hasOwnProperty.call(e, "smileExpressionFaceImage") && d.dot.Image.encode(e.smileExpressionFaceImage, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && d.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof v || (e = v.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new d.dot.v4.SmileLivenessContent();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.neutralExpressionFaceImage = d.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.smileExpressionFaceImage = d.dot.Image.decode(e, e.uint32());
              break;
            }
            case 3: {
              a.metadata = d.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof v || (e = new v(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage")) {
          let n = d.dot.Image.verify(e.neutralExpressionFaceImage);
          if (n)
            return "neutralExpressionFaceImage." + n;
        }
        if (e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage")) {
          let n = d.dot.Image.verify(e.smileExpressionFaceImage);
          if (n)
            return "smileExpressionFaceImage." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = d.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof d.dot.v4.SmileLivenessContent)
          return e;
        let n = new d.dot.v4.SmileLivenessContent();
        if (e.neutralExpressionFaceImage != null) {
          if (typeof e.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          n.neutralExpressionFaceImage = d.dot.Image.fromObject(e.neutralExpressionFaceImage);
        }
        if (e.smileExpressionFaceImage != null) {
          if (typeof e.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.smileExpressionFaceImage: object expected");
          n.smileExpressionFaceImage = d.dot.Image.fromObject(e.smileExpressionFaceImage);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.metadata: object expected");
          n.metadata = d.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.neutralExpressionFaceImage = null, r.smileExpressionFaceImage = null, r.metadata = null), e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage") && (r.neutralExpressionFaceImage = d.dot.Image.toObject(e.neutralExpressionFaceImage, n)), e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage") && (r.smileExpressionFaceImage = d.dot.Image.toObject(e.smileExpressionFaceImage, n)), e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = d.dot.v4.Metadata.toObject(e.metadata, n)), r;
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
      t instanceof v || (t = v.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new d.dot.Image();
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
      return t instanceof v || (t = new v(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || h.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof d.dot.Image)
        return t;
      let e = new d.dot.Image();
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
      t instanceof v || (t = v.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new d.dot.Int32List();
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
      return t instanceof v || (t = new v(t)), this.decode(t, t.uint32());
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
      if (t instanceof d.dot.Int32List)
        return t;
      let e = new d.dot.Int32List();
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
      t instanceof v || (t = v.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new d.dot.DigestWithTimestamp();
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
      return t instanceof v || (t = new v(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || h.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !h.isInteger(t.timestampMillis) && !(t.timestampMillis && h.isInteger(t.timestampMillis.low) && h.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof d.dot.DigestWithTimestamp)
        return t;
      let e = new d.dot.DigestWithTimestamp();
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
async function Ic(i) {
  const { Image: o } = _t, t = await i.arrayBuffer(), e = new Uint8Array(t), n = {};
  n.bytes = e;
  const r = o.verify(n);
  if (r) throw Error(r);
  const a = {};
  return a.bytes = e, o.create(a);
}
async function dc(i) {
  const { v4: { Metadata: o } } = _t, t = { ...i };
  t.platform = _t.Platform.WEB;
  const e = t, n = o.verify(e);
  if (n) throw Error(n);
  return o.create(e);
}
async function Cc(i) {
  const { Content: o } = _t, { iv: t, key: e, message: n } = await FI(i), r = { token: new Uint8Array(e), iv: t, schemaVersion: Cu, bytes: new Uint8Array(n) }, a = o.verify(r);
  if (a) throw Error(a);
  const s = o.create(r);
  return o.encode(s).finish();
}
function fc({ documentContent: i, faceContent: o, magnifeyeLivenessContent: t, smileLivenessContent: e }) {
  const { Blob: n } = _t.v4, r = {};
  r.documentContent = i, r.faceContent = o, r.magnifeyeLivenessContent = t, r.smileLivenessContent = e;
  const a = r, s = n.verify(a);
  if (s) throw Error(s);
  const g = n.create(a);
  return n.encode(g).finish();
}
async function Nd(i, o) {
  const { FaceContent: t } = _t.v4, e = await Ic(i), n = await dc(o), r = {};
  r.image = e, r.metadata = n;
  const a = r, s = t.verify(a);
  if (s) throw Error(s);
  const g = t.create(a), x = {};
  return x.faceContent = g, fc(x);
}
async function Ld(i, o) {
  const t = await Nd(i, o);
  return Cc(t);
}
const Dd = ({ onPhotoTakenInternal: i }) => {
  const { appTier: o, isLicenseValidated: t } = ua(), { analytics: e } = dg(), { appState: n, freemiumOverlayState: r } = Tn(), { faceCameraOptions: a } = Vg(), { cameraFacing: s, onPhotoTaken: g, sessionToken: x, thresholds: C, wasmDirectoryPath: u } = a, { controller: p } = Ad(C, u), m = wn(
    ({ content: B, controller: U, imageData: ue, webMetadata: z }) => {
      _u(Cg.FACE, U.getCandidateSelectionImages()), i == null || i({ cameraProperties: z }), g(ue, B);
    },
    [i, g]
  ), { cameraResolution: y, cameraService: G, detectionDetails: K, videoRef: S } = BI({
    analytics: e,
    cameraFacing: s,
    controller: p,
    sessionToken: x,
    createProtoMessage: Ld,
    onPhotoTaken: m
  }), { shouldMirror: W } = fI(bt.CONTROL, G);
  qu(bt.CAMERA_PROPS_CHANGED, {
    cameraResolution: y,
    shouldMirror: W
  }), fe(() => () => {
    oi.getInstance().restart();
  }, []);
  const R = r !== _n.HIDDEN && o !== Hr.PREMIUM && y, J = r === _n.VISIBLE, P = t, D = y && t && n === xt.RUNNING;
  return /* @__PURE__ */ H(ot, { children: [
    R && /* @__PURE__ */ H(EI, { fullOverlay: J, resolution: y }),
    /* @__PURE__ */ H(Fx, { ref: S, $isImageMirror: W, $isVisible: P, autoPlay: !0, muted: !0, playsInline: !0 }),
    D && /* @__PURE__ */ H(
      WI,
      {
        appTier: o,
        cameraResolution: y,
        detectionDetails: K,
        isImageMirror: W
      }
    )
  ] });
}, Fd = ({
  onPhotoTakenInternal: i,
  ...o
}) => /* @__PURE__ */ H(Du, { cameraOptions: o, children: /* @__PURE__ */ H(Dd, { onPhotoTakenInternal: i }) }), Yd = ({ children: i }) => {
  const o = at(null);
  return bI(o, bt.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ H(Dx, { ref: o, children: i });
}, zr = {};
zr.minFaceSizeRatio = 0.135, zr.maxFaceSizeRatio = 0.21;
const hc = {};
hc.faceConfidence = 1;
const Zt = {};
Zt.minFaceSizeRatio = 0.3, Zt.maxFaceSizeRatio = 1, Zt.brightnessHighThreshold = 1, Zt.brightnessLowThreshold = -(-1 * -6847 + -8278 + 1432), Zt.faceConfidence = 0.15, Zt.sharpnessThreshold = -(4 * -178 + 8122 + -7409 * 1), Zt.outOfBoundsThreshold = -(2512 + 4 * 1128 + -7023);
const Xd = { [Ye.DISTANT]: zr, [Ye.MIDDLE]: hc, [Ye.CLOSEUP]: Zt }, Md = Xd, g0 = -769 * -7 + 612 * 4 + -7831 + 0.255;
async function jd(i, o) {
  const { MagnifEyeLivenessContent: t } = _t.v4, e = await Promise.all(i.map(async (C) => Ic(C))), n = await dc(o), r = {};
  r.images = e, r.metadata = n;
  const a = r, s = t.verify(a);
  if (s) throw Error(s);
  const g = t.create(a), x = {};
  return x.magnifeyeLivenessContent = g, fc(x);
}
async function Jd(i, o) {
  const t = i.map((n) => n.image), e = await jd(t, o);
  return Cc(e);
}
function Ud(i, o) {
  const t = Xs(i.faceSize, g0);
  return Xs(o.faceSize, g0) < t;
}
const zd = (i, o) => {
  const t = at(new Fg()), e = Wn(void (5436 + 11 * -220 + 116 * -26)), n = (a) => {
    if (!a.detail || i !== Yt.RUNNING || o !== Ye.CLOSEUP) return;
    const s = t.current;
    if (!e.value) {
      s.cloneMutable(a.detail.image);
      const g = { ...a.detail };
      g.image = s.canvasElement, e.value = g;
      return;
    }
    if (Ud(e.value.data.detection, a.detail.data.detection)) {
      s.cloneMutable(a.detail.image);
      const g = { ...a.detail };
      g.image = s.canvasElement, e.value = g;
    }
  };
  vg(bt.FACE_DETECTION, n);
  const r = {};
  return r.middleImageBestCandidate = e, r;
}, Qd = En.div`
  ${(i) => i.$isSecondStep && sg`
      transition: all 1.5s ease-in-out;
      transform: translate(16%, 5%) scale(2);
      transition-delay: 1.5s;
    `}
`, $d = ({
  licensePath: i,
  onComplete: o,
  onError: t,
  sessionToken: e,
  wasmDirectoryPath: n
}) => {
  const { analytics: r } = dg(), { appState: a, handleAppStateChange: s, handleError: g, magnifEyePhase: x, setMagnifEyePhase: C } = jx(), u = Wn([]), p = Wn(null), { middleImageBestCandidate: m } = zd(a, x), y = Vu(ii.ANIMATION_END);
  function G(P) {
    u.value = [...u.value, P];
  }
  function K(P) {
    C(P), Fr(ii.STATUS_CHANGED, { phase: P });
  }
  function S(P) {
    G(P), K(Ye.MIDDLE);
  }
  y.value && K(Ye.CLOSEUP);
  async function W(P) {
    if (m.value) {
      const B = { image: await kg(m.value.image), data: m.value.data };
      G(B);
    }
    G(P);
    try {
      const D = {
        sessionToken: e,
        web: p.value
      }, B = await Jd(u.value, D), [U] = u.value;
      o(U, B), r == null || r.trackLivenessProcess(u.value);
    } catch (D) {
      D instanceof Error && g(re.fromError(D));
      return;
    }
    s(Yt.DONE);
  }
  function R(P) {
    p.value = Eu(p.value, P.cameraProperties);
  }
  const J = {
    [Ye.DISTANT]: S,
    /**
     * we don't care about onPhotoTaken in MIDDLE phase, because faceConfidence = 1
     */
    [Ye.MIDDLE]: () => {
    },
    [Ye.CLOSEUP]: W
  };
  return /* @__PURE__ */ H(Yd, { children: /* @__PURE__ */ H(Qd, { $isSecondStep: x !== Ye.DISTANT, children: /* @__PURE__ */ H(
    Fd,
    {
      licensePath: i,
      onError: t,
      onPhotoTaken: J[x],
      onPhotoTakenInternal: R,
      thresholds: Md[x],
      wasmDirectoryPath: n
    }
  ) }) });
};
function _d({ initAppState: i }) {
  const [o, t] = Ne(i), [e, n] = Ne(), [r, a] = Ne(!1), s = {};
  return s.appState = o, s.setAppState = t, s.error = e, s.setError = n, s.isCameraReady = r, s.setIsCameraReady = a, s;
}
function qd(i, o) {
  return o !== Ye.DISTANT ? _n.HIDDEN : i !== Yt.RUNNING ? _n.VISIBLE : _n.VISIBLE_WITH_MASK;
}
function eC({
  onError: i
}) {
  const { appState: o, error: t, isCameraReady: e, setAppState: n, setError: r, setIsCameraReady: a } = _d({
    initAppState: Yt.LOADING
  }), [s, g] = Ne(Ye.DISTANT), x = qd(o, s), C = wn(
    (p) => {
      Fr(ii.STATUS_CHANGED, { state: Yt.ERROR, error: p }), a(!1), i(p), r(p), n(Yt.ERROR);
    },
    [i, a, r, n]
  ), u = wn(
    (p) => {
      p !== Yt.WAITING && (n(p), Fr(ii.STATUS_CHANGED, { state: p }));
    },
    [n]
  );
  return {
    appState: o,
    magnifEyePhase: s,
    setMagnifEyePhase: g,
    freemiumOverlayState: x,
    isCameraReady: e,
    setIsCameraReady: a,
    handleAppStateChange: u,
    handleError: C,
    error: t
  };
}
var pc = ((i) => (i.AUTO_CAPTURE = "auto-capture", i))(pc || {});
class tC {
  constructor() {
    X(this, "appKey", "");
    X(this, "deviceId", "");
  }
  async countlyFetch(o) {
    if (!this.appKey || !this.deviceId) return;
    const t = {};
    t.Accept = "application/json";
    const e = {};
    e.method = "GET", e.headers = t;
    const n = e, r = "https://innovatrics.count.ly/i?", a = {};
    a.app_key = this.appKey, a.device_id = this.deviceId;
    const s = Fi(a);
    await fetch("" + r + s + "&" + o, n);
  }
  async init(o, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = o;
    const e = { _app_version: Lg() }, n = { organization: Dg(window.location.href) }, r = Fi({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(n) });
    await this.countlyFetch(r);
  }
  async endSession() {
    const o = {};
    o.end_session = "1";
    const t = Fi(o);
    await this.countlyFetch(t);
  }
  async sendAutoCaptureEvent(o, t) {
    const e = {};
    e.key = pc.AUTO_CAPTURE, e.count = 1, e.dur = t, e.segmentation = o;
    const n = [e], r = Fi({ events: JSON.stringify(n) });
    await this.countlyFetch(r);
  }
}
const Xi = new tC();
function nC() {
  const [i] = window.crypto.getRandomValues(new Uint32Array(1));
  return i.toString(3905 + 1 * -8711 + -4822 * -1);
}
function iC() {
  const i = sessionStorage.getItem("dot-user-id");
  if (i) return i;
  const o = nC();
  return sessionStorage.setItem("dot-user-id", o), o;
}
function oC(i, o) {
  return o ? o === "user" ? "Front Camera" : "Back Camera" : i;
}
const c0 = (i) => Math.round(i / 500) * 500 / (8061 * 1 + -3 * -821 + 2 * -4762), un = (i) => i ? i <= -167 * 29 + 131 * 11 + -83 * -41 ? Math.round(i * (1336 * 1 + -2792 * -1 + -1027 * 4)) / (2 * 402 + 8280 + 2 * -4532) : Math.round(i / 50) * (3 * -1 + -3618 + -1 * -3671) : 8 * -877 + 1723 + 79 * 67, rC = (i) => Math.round(i * (15 * 382 + 7412 + -13140)) / (233 * -21 + 8514 + -3619);
class aC {
  constructor() {
    X(this, "countly", Xi);
  }
  createSegmentation(o) {
    return { appVersion: Lg(), ...o };
  }
  init(o) {
    if (xI()) return;
    const t = iC();
    Xi.init(t, o);
  }
  endSession() {
    Xi.endSession();
  }
  sendLicenseResultData(o, t) {
    const e = {};
    e.licenseTier = o, e.customer = t;
    const n = this.createSegmentation(e);
    Xi.sendAutoCaptureEvent(n);
  }
}
class sC extends aC {
  constructor() {
    super(...arguments);
    X(this, "captureProcessAnalytics", []);
  }
  trackCaptureProcess(t) {
    this.captureProcessAnalytics.push(t);
  }
}
class gC extends sC {
  trackLivenessProcess(o) {
    var u, p, m, y, G, K, S, W, R, J;
    if (!o.length || !this.captureProcessAnalytics.length) return;
    const [t, e, n] = o, [r, a] = this.captureProcessAnalytics, s = rC(r.averageFps + (a == null ? void 0 : a.averageFps)) / (8835 + 1 * -3346 + -5487), g = c0(r.captureProcessDurationInMs), x = c0(a == null ? void 0 : a["captureProcessDurationInMs"]), C = this.createSegmentation({ faceSizeDistant: un((u = t.data.detection) == null ? void 0 : u.faceSize), faceSizeCloseup: un((p = n == null ? void 0 : n.data.detection) == null ? void 0 : p.faceSize), faceSizeMiddle: un((m = e.data.detection) == null ? void 0 : m.faceSize), confidenceDistant: un((y = t.data.detection) == null ? void 0 : y.confidence), confidenceCloseup: un((G = n == null ? void 0 : n.data.detection) == null ? void 0 : G.confidence), confidenceMiddle: un((K = e.data.detection) == null ? void 0 : K.confidence), imageResolution: ((W = (S = t.data) == null ? void 0 : S["imageResolution"]) == null ? void 0 : W.width) + "x" + ((J = (R = t.data) == null ? void 0 : R["imageResolution"]) == null ? void 0 : J.height), averageFps: s, captureTimeCloseup: x > 4758 + 269 * 4 + 1 * -5789 ? ">45" : "" + x, captureTimeDistant: g > 6390 + 4456 * 1 + -10816 ? ">30" : "" + g, camera: oC(r == null ? void 0 : r.deviceName, r == null ? void 0 : r.facingMode), instructionSet: r.instructionSet });
    this.countly.sendAutoCaptureEvent(C, g + x);
  }
}
const cC = new gC(), lC = ({ props: i }) => i ? /* @__PURE__ */ H(Ex, { target: i.styleTarget, children: /* @__PURE__ */ H(
  qx,
  {
    licensePath: i.licensePath,
    licenseValidator: Tr.getInstance(),
    wasmDirectoryPath: i.wasmDirectoryPath,
    children: /* @__PURE__ */ H(nu, { analytics: cC, appKey: "d5ca54dabfb1a2c72d7090c9c8980252a879da44", children: /* @__PURE__ */ H(
      Mx,
      {
        value: eC({
          onError: i.onError
        }),
        children: /* @__PURE__ */ H(Ig, { children: /* @__PURE__ */ H($d, { ...i }) })
      }
    ) })
  }
) }) : null;
jc(lC, "x-dot-magnifeye-liveness", ["props"]);
