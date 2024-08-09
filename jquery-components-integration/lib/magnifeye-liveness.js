var Oc = Object.defineProperty;
var Qa = (i) => {
  throw TypeError(i);
};
var Vc = (i, o, t) => o in i ? Oc(i, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[o] = t;
var j = (i, o, t) => Vc(i, typeof o != "symbol" ? o + "" : o, t), $a = (i, o, t) => o.has(i) || Qa("Cannot " + t);
var X = (i, o, t) => ($a(i, o, "read from private field"), t ? t.call(i) : o.get(i)), ce = (i, o, t) => o.has(i) ? Qa("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(i) : o.set(i, t), se = (i, o, t, e) => ($a(i, o, "write to private field"), e ? e.call(i, t) : o.set(i, t), t);
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
  if (arguments.length > 9159 + 9157 * -1 && (a.children = arguments.length > 3 ? Ai.call(arguments, -5303 * -1 + -6563 + -2 * -631) : t), typeof i == "function" && i.defaultProps != null)
    for (r in i.defaultProps) void (-7740 + 211 * 8 + 6052) === a[r] && (a[r] = i.defaultProps[r]);
  return Qn(i, a, e, n, null);
}
function Qn(i, o, t, e, n) {
  var r = {};
  r.type = i, r.props = o, r.key = t, r.ref = e, r.__k = null, r.__ = null, r.__b = 0, r.__e = null, r.__d = void (-101 * -67 + 1 * 4841 + 5804 * -2), r.__c = null, r.constructor = void (-65 * -142 + -350 + 444 * -20), r.__v = n ?? ++l0, r.__i = -1, r.__u = 0;
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
  if (o == null) return i.__ ? Ut(i.__, i.__i + (-6272 + -5 * -767 + 2438)) : null;
  for (var t; o < i.__k.length; o++) if ((t = i.__k[o]) != null && t.__e != null) return t.__e;
  return typeof i.type == "function" ? Ut(i) : null;
}
function h0(i) {
  var o, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, o = 0; o < i.__k.length; o++) if ((t = i.__k[o]) != null && t.__e != null) {
      i.__e = i.__c.base = t.__e;
      break;
    }
    return h0(i);
  }
}
function ur(i) {
  (!i.__d && (i.__d = !(-1224 * -8 + -918 + -8874)) && Nt.push(i) && !ao.__r++ || _a !== F.debounceRendering) && ((_a = F.debounceRendering) || u0)(ao);
}
function ao() {
  var i, o, t, e, n, r, a, s;
  for (Nt.sort(cr); i = Nt.shift(); ) i.__d && (o = Nt.length, e = void (-6060 + -1 * 5729 + 11789 * 1), r = (n = (t = i).__v).__e, a = [], s = [], t.__P && ((e = At({}, n)).__v = n.__v + (9949 * 1 + 2681 + -12629), F.vnode && F.vnode(e), $r(t.__P, e, n, t.__n, t.__P.namespaceURI, -159 * -56 + 1 * 1004 + -9876 & n.__u ? [r] : null, a, r ?? Ut(n), !!(9266 + 29 * 23 + -9901 & n.__u), s), e.__v = n.__v, e.__.__k[e.__i] = e, m0(a, e, s), e.__e != r && h0(e)), Nt.length > o && Nt.sort(cr));
  ao.__r = -4526 + -1 * -4526;
}
function p0(i, o, t, e, n, r, a, s, g, x, C) {
  var u, f, m, y, G, K = e && e.__k || d0, S = o.length;
  for (t.__d = g, Rc(t, o, K), g = t.__d, u = 1 * -6539 + 7131 + -2 * 296; u < S; u++) (m = t.__k[u]) != null && typeof m != "boolean" && typeof m != "function" && (f = -(5089 + 6 * -848) === m.__i ? ni : K[m.__i] || ni, m.__i = u, $r(i, m, f, n, r, a, s, g, x, C), y = m.__e, m.ref && f.ref != m.ref && (f.ref && _r(f.ref, null, m), C.push(m.ref, m.__c || y, m)), G == null && y != null && (G = y), -12 * -6131 + 1852 * 65 + -128416 & m.__u || f.__k === m.__k ? (g && typeof m.type == "string" && !i.contains(g) && (g = Ut(f)), g = f0(m, g, i)) : typeof m.type == "function" && void (7375 + -15 * 206 + 4285 * -1) !== m.__d ? g = m.__d : y && (g = y.nextSibling), m.__d = void (-11852 + -11852 * -1), m.__u &= -(380153 * -1 + 3477 * -7 + 601101));
  t.__d = g, t.__e = G;
}
function Rc(i, o, t) {
  var e, n, r, a, s, g = o.length, x = t.length, C = x, u = 0;
  for (i.__k = [], e = 4838 + 740 * -1 + -4098; e < g; e++) a = e + u, (n = i.__k[e] = (n = o[e]) == null || typeof n == "boolean" || typeof n == "function" ? null : typeof n == "string" || typeof n == "number" || typeof n == "bigint" || n.constructor == String ? Qn(null, n, null, null, null) : yo(n) ? Qn(ot, { children: n }, null, null, null) : void (-2432 + -2027 * 4 + 10540) === n.constructor && n.__b > -15 * -541 + -5122 + -2993 ? Qn(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v) : n) != null ? (n.__ = i, n.__b = i.__b + (3349 * 1 + 6771 * 1 + -3373 * 3), s = Pc(n, t, a, C), n.__i = s, r = null, -(-4334 + 9 * -138 + 5577) !== s && (C--, (r = t[s]) && (r.__u |= 1877 * -134 + 255301 + 127289)), r == null || r.__v === null ? (-(3512 + -101 * 21 + 2 * -695) == s && u--, typeof n.type != "function" && (n.__u |= -1 * -72943 + -11942 + -1 * -4535)) : s !== a && (s == a - (-5435 + 3371 * -1 + 8807) ? u = s - a : s == a + (3356 * -1 + 8517 + -5160) ? u++ : s > a ? C > g - a ? u += s - a : u-- : s < a && u++, s !== e + u && (n.__u |= 6042 + 91781 * -1 + 75 * 2017))) : (r = t[a]) && r.key == null && r.__e && -16 * 495 + -4763 * 2 + 1 * 17446 == (-1 * -21739 + -130132 + 1019 * 235 & r.__u) && (r.__e == i.__d && (i.__d = Ut(r)), Ir(r, r, !(2720 + -2118 * -3 + 211 * -43)), t[a] = null, C--);
  if (C)
    for (e = -3320 + 10 * 668 + -3360; e < x; e++) (r = t[e]) != null && -4 * -531 + 8361 + 5 * -2097 == (1 * -235255 + -1 * -104795 + 130766 * 2 & r.__u) && (r.__e == i.__d && (i.__d = Ut(r)), Ir(r, r));
}
function f0(i, o, t) {
  var e, n;
  if (typeof i.type == "function") {
    for (e = i.__k, n = 0; e && n < e.length; n++) e[n] && (e[n].__ = i, o = f0(e[n], o, t));
    return o;
  }
  i.__e != o && (t.insertBefore(i.__e, o || null), o = i.__e);
  do
    o = o && o.nextSibling;
  while (o != null && -1 * -2686 + -1 * 4363 + -337 * -5 === o.nodeType);
  return o;
}
function yt(i, o) {
  return o = o || [], i == null || typeof i == "boolean" || (yo(i) ? i.some(function(t) {
    yt(t, o);
  }) : o.push(i)), o;
}
function Pc(i, o, t, e) {
  var n = i.key, r = i.type, a = t - (-3552 + 274 * -9 + 6019), s = t + (-4527 + -4 * -1132), g = o[t];
  if (g === null || g && n == g.key && r === g.type && -4347 + -427 * 15 + 10752 == (-82562 * -2 + -50051 * -4 + 44 * -5324 & g.__u)) return t;
  if (e > (g != null && !(113667 * 2 + -907 * 2 + -94448 & g.__u) ? -1 * 3749 + -5564 + 9314 : -7364 + 263 * 28)) for (; a >= -6871 * 1 + -3261 + 10132 || s < o.length; ) {
    if (a >= -3191 * 1 + -6637 + 9828) {
      if ((g = o[a]) && -1303 * -3 + 528 * 12 + -10245 == (50 * -1048 + 95386 + 277 * 318 & g.__u) && n == g.key && r === g.type) return a;
      a--;
    }
    if (s < o.length) {
      if ((g = o[s]) && 7739 + -1756 * 5 + 1041 == (209223 + -1 * 185252 + 107101 & g.__u) && n == g.key && r === g.type) return s;
      s++;
    }
  }
  return -(-28 * 11 + -2859 * -3 + -1 * 8268);
}
function qa(i, o, t) {
  o[-3955 + 907 * 1 + -1 * -3048] === "-" ? i.setProperty(o, t ?? "") : i[o] = t == null ? "" : typeof t != "number" || Ec.test(o) ? t : t + "px";
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
  else if (o[-18027 + 3 * 6009] === "o" && o[-4597 * -1 + -6218 + 1622] === "n") r = o !== (o = o.replace(/(PointerCapture)$|Capture$/i, "$1")), o = o.toLowerCase() in i || o === "onFocusOut" || o === "onFocusIn" ? o.toLowerCase().slice(5 * -734 + -6680 + -1 * -10352) : o.slice(-2903 * -3 + 2121 + 1 * -10828), i.l || (i.l = {}), i.l[o + r] = t, t ? e ? t.u = e.u : (t.u = Qr, i.addEventListener(o, r ? xr : lr, r)) : i.removeEventListener(o, r ? xr : lr, r);
  else {
    if (n == "http://www.w3.org/2000/svg") o = o.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (o != "width" && o != "height" && o != "href" && o != "list" && o != "form" && o != "tabIndex" && o != "download" && o != "rowSpan" && o != "colSpan" && o != "role" && o != "popover" && o in i) try {
      i[o] = t ?? "";
      break e;
    } catch {
    }
    typeof t == "function" || (t == null || !(-4051 * 1 + -1753 + 5805) === t && o[4] !== "-" ? i.removeAttribute(o) : i.setAttribute(o, o == "popover" && -6577 * 1 + -283 * 8 + 2 * 4421 == t ? "" : t));
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
  var C, u, f, m, y, G, K, S, W, R, J, P, D, B, U, ue, z = o.type;
  if (void (4820 + -63 * -47 + 31 * -251) !== o.constructor) return null;
  3 * -815 + 1489 * -5 + 2 * 5009 & t.__u && (g = !!(-4863 * 1 + -3 * 1897 + -10586 * -1 & t.__u), r = [s = o.__e = t.__e]), (C = F.__b) && C(o);
  e: if (typeof z == "function") try {
    if (S = o.props, W = "prototype" in z && z.prototype.render, R = (C = z.contextType) && e[C.__c], J = C ? R ? R.props.value : C.__ : e, t.__c ? K = (u = o.__c = t.__c).__ = u.__E : (W ? o.__c = u = new z(S, J) : (o.__c = u = new Qe(S, J), u.constructor = z, u.render = Lc), R && R.sub(u), u.props = S, u.state || (u.state = {}), u.context = J, u.__n = e, f = u.__d = !(-9524 + -16 * -202 + 6292), u.__h = [], u._sb = []), W && u.__s == null && (u.__s = u.state), W && z.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = At({}, u.__s)), At(u.__s, z.getDerivedStateFromProps(S, u.__s))), m = u.props, y = u.state, u.__v = o, f) W && z.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), W && u.componentDidMount != null && u.__h.push(u.componentDidMount);
    else {
      if (W && z.getDerivedStateFromProps == null && S !== m && u.componentWillReceiveProps != null && u.componentWillReceiveProps(S, J), !u.__e && (u.shouldComponentUpdate != null && !(-633 * 1 + 7165 + -6531) === u.shouldComponentUpdate(S, u.__s, J) || o.__v === t.__v)) {
        for (o.__v !== t.__v && (u.props = S, u.state = u.__s, u.__d = !1), o.__e = t.__e, o.__k = t.__k, o.__k.forEach(function(Ie) {
          Ie && (Ie.__ = o);
        }), P = -6428 + 1 * 2111 + 4317; P < u._sb.length; P++) u.__h.push(u._sb[P]);
        u._sb = [], u.__h.length && a.push(u);
        break e;
      }
      u.componentWillUpdate != null && u.componentWillUpdate(S, u.__s, J), W && u.componentDidUpdate != null && u.__h.push(function() {
        u.componentDidUpdate(m, y, G);
      });
    }
    if (u.context = J, u.props = S, u.__P = i, u.__e = !(14 * -212 + 1 * -4657 + -1271 * -6), D = F.__r, B = 0, W) {
      for (u.state = u.__s, u.__d = !(9273 + 182 * -3 + -8726), D && D(o), C = u.render(u.props, u.state, u.context), U = -9689 + 10 * -449 + 14179; U < u._sb.length; U++) u.__h.push(u._sb[U]);
      u._sb = [];
    } else do
      u.__d = !(-96 * -28 + -1082 * -9 + 12425 * -1), D && D(o), C = u.render(u.props, u.state, u.context), u.state = u.__s;
    while (u.__d && ++B < -2 * -957 + 9314 + 659 * -17);
    u.state = u.__s, u.getChildContext != null && (e = At(At({}, e), u.getChildContext())), W && !f && u.getSnapshotBeforeUpdate != null && (G = u.getSnapshotBeforeUpdate(m, y)), p0(i, yo(ue = C != null && C.type === ot && C.key == null ? C.props.children : C) ? ue : [ue], o, t, e, n, r, a, s, g, x), u.base = o.__e, o.__u &= -(4605 * 2 + 2827 + -11876), u.__h.length && a.push(u), K && (u.__E = u.__ = null);
  } catch (Ie) {
    o.__v = null, g || r != null ? (o.__e = s, o.__u |= g ? 3033 * -3 + -7555 + 16814 : 32, r[r.indexOf(s)] = null) : (o.__e = t.__e, o.__k = t.__k), F.__e(Ie, o, t);
  }
  else r == null && o.__v === t.__v ? (o.__k = t.__k, o.__e = t.__e) : o.__e = Nc(t.__e, o, t, e, n, r, a, g, x);
  (C = F.diffed) && C(o);
}
function m0(i, o, t) {
  o.__d = void 0;
  for (var e = 213 * -26 + -3 * 1726 + 10716; e < t.length; e++) _r(t[e], t[++e], t[++e]);
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
  var x, C, u, f, m, y, G, K = t.props, S = o.props, W = o.type;
  if (W === "svg" ? n = "http://www.w3.org/2000/svg" : W === "math" ? n = "http://www.w3.org/1998/Math/MathML" : n || (n = "http://www.w3.org/1999/xhtml"), r != null) {
    for (x = -3479 * -1 + 3724 + 49 * -147; x < r.length; x++) if ((m = r[x]) && "setAttribute" in m == !!W && (W ? m.localName === W : 2875 + 214 * 8 + 1528 * -3 === m.nodeType)) {
      i = m, r[x] = null;
      break;
    }
  }
  if (i == null) {
    if (W === null) return document.createTextNode(S);
    i = document.createElementNS(n, W, S.is && S), r = null, s = !(-12806 + -3 * -4269);
  }
  if (W === null) K === S || s && i.data === S || (i.data = S);
  else {
    if (r = r && Ai.call(i.childNodes), K = t.props || ni, !s && r != null)
      for (K = {}, x = -41 * 43 + 5 * -789 + 1 * 5708; x < i.attributes.length; x++) K[(m = i.attributes[x]).name] = m.value;
    for (x in K) if (m = K[x], x != "children") {
      if (x == "dangerouslySetInnerHTML") u = m;
      else if (x !== "key" && !(x in S)) {
        if (x == "value" && "defaultValue" in S || x == "checked" && "defaultChecked" in S) continue;
        Ti(i, x, null, m, n);
      }
    }
    for (x in S) m = S[x], x == "children" ? f = m : x == "dangerouslySetInnerHTML" ? C = m : x == "value" ? y = m : x == "checked" ? G = m : x === "key" || s && typeof m != "function" || K[x] === m || Ti(i, x, m, K[x], n);
    if (C) s || u && (C.__html === u.__html || C.__html === i.innerHTML) || (i.innerHTML = C.__html), o.__k = [];
    else if (u && (i.innerHTML = ""), p0(i, yo(f) ? f : [f], o, t, e, W === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n, r, a, r ? r[2 * -3118 + -3728 + 9964] : t.__k && Ut(t, 260 * 11 + -8603 * 1 + -5743 * -1), s, g), r != null)
      for (x = r.length; x--; ) r[x] != null && C0(r[x]);
    s || (x = "value", void (6772 + -28 * 231 + 4 * -76) !== y && (y !== i[x] || W === "progress" && !y || W === "option" && y !== K[x]) && Ti(i, x, y, K[x], n), x = "checked", void (-839 * 1 + -1576 * 2 + 1 * 3991) !== G && G !== i[x] && Ti(i, x, G, K[x], n));
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
    for (n = -38 * 94 + -8928 * 1 + -5 * -2500; n < e.length; n++) e[n] && Ir(e[n], o, t || typeof i.type != "function");
  t || i.__e == null || C0(i.__e), i.__c = i.__ = i.__e = i.__d = void (7506 + 1 * -7506);
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
  for (r in i.type && i.type.defaultProps && (a = i.type.defaultProps), o) r == "key" ? e = o[r] : r == "ref" ? n = o[r] : s[r] = void (-5530 + -3491 * -1 + 2039) === o[r] && void (-2190 * -1 + 6 * -1111 + 4476) !== a ? a[r] : o[r];
  return arguments.length > 2 && (s.children = arguments.length > -3 * -1459 + -5715 * 1 + 447 * 3 ? Ai.call(arguments, 4019 * -1 + 8859 + -2 * 2419) : t), Qn(i.type, s, e || i.key, n || i.ref, null);
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
} }, l0 = -647 * 11 + 1 * 3437 + 3680, x0 = function(i) {
  return i != null && i.constructor == null;
}, Qe.prototype.setState = function(i, o) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = At({}, this.state), typeof i == "function" && (i = i(At({}, t), this.props)), i && At(t, i), i != null && this.__v && (o && this._sb.push(o), ur(this));
}, Qe.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !(-2497 * 1 + -196 * -6 + 1321), i && this.__h.push(i), ur(this));
}, Qe.prototype.render = ot, Nt = [], u0 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, cr = function(i, o) {
  return i.__v.__b - o.__v.__b;
}, ao.__r = 639 * -1 + -52 * -88 + -3937, Qr = -1 * -6879 + 38 * -161 + -761, lr = es(!(5115 + -1 * -289 + -5403 * 1)), xr = es(!(1 * -1636 + 9828 + 1 * -8192)), I0 = -4 * -1637 + 3 * -97 + 1 * -6257;
function ta() {
  return (ta = Object.assign ? Object.assign.bind() : function(i) {
    for (var o = -63 * 4 + 1 * 2242 + -51 * 39; o < arguments.length; o++) {
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
    for (a = 0; a < g.length; a++) n.indexOf(r = g[a]) >= -1 * -19 + 9767 + -9786 || (s[r] = e[r]);
    return s;
  }(i, Dc);
  return ea(o, t);
}
function Yc() {
  var i = {};
  i.detail = {}, i.bubbles = !(6878 + 934 * 10 + -16218), i.cancelable = !(21 * -67 + 173 * -19 + 4694);
  var o = new CustomEvent("_preact", i);
  this.dispatchEvent(o), this._vdom = ke(Fc, ta({}, this._props, { context: o.detail.context }), function t(e, n) {
    if (-10 * -849 + -74 * -41 + -11521 === e.nodeType) return e.data;
    if (e.nodeType !== 1) return null;
    var r = [], a = {}, s = 1 * -9109 + 6845 * 1 + -2264 * -1, g = e.attributes, x = e.childNodes;
    for (s = g.length; s--; ) g[s].name !== "slot" && (a[g[s].name] = g[s].value, a[A0(g[s].name)] = g[s].value);
    for (s = x.length; s--; ) {
      var C = t(x[s], null), u = x[s].slot;
      u ? a[u] = ke(ts, { name: u }, C) : r[s] = C;
    }
    var f = n ? ke(ts, null, r) : r;
    return ke(n || e.nodeName.toLowerCase(), a, f);
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
    e[i] = t = t ?? void (110 * -5 + 7842 + 4 * -1823), e[A0(i)] = t, this._vdom = ea(this._vdom, e), kt(this._vdom, this._root);
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
var Jc = 0;
function H(i, o, t, e, n, r) {
  o || (o = {});
  var a, s, g = o;
  if ("ref" in g)
    for (s in g = {}, o) s == "ref" ? a = o[s] : g[s] = o[s];
  var x = {};
  x.type = i, x.props = g, x.key = t, x.ref = a, x.__k = null, x.__ = null, x.__b = 0, x.__e = null, x.__d = void (-33 * 31 + -7694 + 8717), x.__c = null, x.constructor = void (-3222 + 9 * 358), x.__v = --Jc, x.__i = -(7 * -1198 + -131 * 57 + -2 * -7927), x.__u = 0, x.__source = n, x.__self = r;
  var C = x;
  if (typeof i == "function" && (a = i.defaultProps))
    for (s in a) void (353 * 5 + 1 * -8643 + 6878) === g[s] && (g[s] = a[s]);
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
  return zc.test(i) || i.charCodeAt(0) === -7 * -1069 + 9651 + -587 * 29 && i.charCodeAt(5 * 1396 + -3 * -2431 + -2 * 7136) === -3 * -2481 + -1 * -6092 + 15 * -895 && i.charCodeAt(2) < 21 * -197 + 979 * 1 + 57 * 57;
}), Kt, oe, Uo, ns, vn = 1 * 181 + -5129 * 1 + 4948, b0 = [], ge = F, is = ge.__b, os = ge.__r, rs = ge.diffed, as = ge.__c, ss = ge.unmount, gs = ge.__;
function kn(i, o) {
  ge.__h && ge.__h(oe, i, vn || o), vn = 2930 * -3 + 1668 * 3 + -2 * -1893;
  var t = {};
  t.__ = [], t.__h = [];
  var e = oe.__H || (oe.__H = t);
  return i >= e.__.length && e.__.push({}), e.__[i];
}
function Ne(i) {
  return vn = -1 * -2029 + 2 * 4085 + -10198 * 1, na(w0, i);
}
function na(i, o, t) {
  var e = kn(Kt++, 2);
  if (e.t = i, !e.__c && (e.__ = [t ? t(o) : w0(void 0, o), function(s) {
    var g = e.__N ? e.__N[0] : e.__[0], x = e.t(g, s);
    g !== x && (e.__N = [x, e.__[1 * -355 + 5 * -277 + 1741]], e.__c.setState({}));
  }], e.__c = oe, !oe.u)) {
    var n = function(s, g, x) {
      if (!e.__c.__H) return !0;
      var C = e.__c.__H.__.filter(function(f) {
        return !!f.__c;
      });
      if (C.every(function(f) {
        return !f.__N;
      })) return !r || r.call(this, s, g, x);
      var u = !(-1 * -654 + 2274 + -1 * 2927);
      return C.forEach(function(f) {
        if (f.__N) {
          var m = f.__[0];
          f.__ = f.__N, f.__N = void 0, m !== f.__[0] && (u = !0);
        }
      }), !(!u && e.__c.props === s) && (!r || r.call(this, s, g, x));
    };
    oe.u = !0;
    var r = oe.shouldComponentUpdate, a = oe.componentWillUpdate;
    oe.componentWillUpdate = function(s, g, x) {
      if (this.__e) {
        var C = r;
        r = void (7060 + -1765 * 4), n(s, g, x), r = C;
      }
      a && a.call(this, s, g, x);
    }, oe.shouldComponentUpdate = n;
  }
  return e.__N || e.__;
}
function he(i, o) {
  var t = kn(Kt++, 3);
  !ge.__s && ia(t.__H, o) && (t.__ = i, t.i = o, oe.__H.__h.push(t));
}
function Kn(i, o) {
  var t = kn(Kt++, 4);
  !ge.__s && ia(t.__H, o) && (t.__ = i, t.i = o, oe.__h.push(t));
}
function at(i) {
  return vn = 2374 + -103 * 23, Xe(function() {
    var o = {};
    return o.current = i, o;
  }, []);
}
function y0(i, o, t) {
  vn = 289 * -21 + 4849 * -2 + -15773 * -1, Kn(function() {
    return typeof i == "function" ? (i(o()), function() {
      return i(null);
    }) : i ? (i.current = o(), function() {
      return i.current = null;
    }) : void (15714 + 1746 * -9);
  }, t == null ? t : t.concat(i));
}
function Xe(i, o) {
  var t = kn(Kt++, 7);
  return ia(t.__H, o) && (t.__ = i(), t.__H = o, t.__h = i), t.__;
}
function wn(i, o) {
  return vn = -683 * -14 + 5 * 1277 + -15939, Xe(function() {
    return i;
  }, o);
}
function qt(i) {
  var o = oe.context[i.__c], t = kn(Kt++, -4749 * 1 + -3194 + -284 * -28);
  return t.c = i, o ? (t.__ == null && (t.__ = !(8 * 731 + 5057 + -10905), o.sub(oe)), o.props.value) : i.__;
}
function so(i, o) {
  ge.useDebugValue && ge.useDebugValue(o ? o(i) : i);
}
function v0() {
  var i = kn(Kt++, 11);
  if (!i.__) {
    for (var o = oe.__v; o !== null && !o.__m && o.__ !== null; ) o = o.__;
    var t = o.__m || (o.__m = [542 * -5 + 6611 * -1 + 9321, -865 + -53 * 31 + -11 * -228]);
    i.__ = "P" + t[488 * 15 + 6495 + -13815] + "-" + t[19 * -191 + -926 + 4556]++;
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
  os && os(i), Kt = -1 * 4926 + 4709 + 217;
  var o = (oe = i.__c).__H;
  o && (Uo === oe ? (o.__h = [], oe.__h = [], o.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (-307 + -6307 * -1 + -6e3);
  })) : (o.__h.forEach(Mi), o.__h.forEach(dr), o.__h = [], Kt = 6814 * 1 + -6062 + -752)), Uo = oe;
}, ge.diffed = function(i) {
  rs && rs(i);
  var o = i.__c;
  o && o.__H && (o.__H.__h.length && (2 * -4133 + -3489 + 11756 !== b0.push(o) && ns === ge.requestAnimationFrame || ((ns = ge.requestAnimationFrame) || _c)($c)), o.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (-17780 + -10 * -1778);
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
  }), t.__H = void (4214 + -472 * 5 + -1854), o && ge.__e(o, t.__v));
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
  typeof t == "function" && (i.__c = void (-37 * 17 + 9356 + -8727 * 1), t()), oe = o;
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
  for (var t in i) if (t !== "__source" && !(t in o)) return !(9427 + 275 * -35 + -1 * -198);
  for (var e in o) if (e !== "__source" && i[e] !== o[e]) return !(3416 * 2 + 3989 * 1 + -10821 * 1);
  return !(-2 * 3845 + 5644 + -2047 * -1);
}
function hr(i, o) {
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
  return e.displayName = "Memo(" + (i.displayName || i.name) + ")", e.prototype.isReactComponent = !(-2 * 4253 + -1 * -4449 + 4057 * 1), e.__f = !(-2189 + 5 * 1767 + -6646), e;
}
(hr.prototype = new Qe()).isPureReactComponent = !(2 * -3568 + -1 * -5237 + -633 * -3), hr.prototype.shouldComponentUpdate = function(i, o) {
  return Cr(this.props, i) || Cr(this.state, o);
};
var ls = F.__b;
F.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), ls && ls(i);
};
var el = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || -2693 * -1 + -4245 + 5463;
function B0(i) {
  function o(t) {
    var e = S0({}, t);
    return delete e.ref, i(e, t.ref || null);
  }
  return o.$$typeof = el, o.render = o, o.prototype.isReactComponent = o.__f = !(1042 * -1 + 791 + -1 * -251), o.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", o;
}
var xs = function(i, o) {
  return i == null ? null : yt(yt(i).map(o));
}, tl = { map: xs, forEach: xs, count: function(i) {
  return i ? yt(i).length : 3391 * 1 + -3131 + 130 * -2;
}, only: function(i) {
  var o = yt(i);
  if (1036 + 3833 * -1 + 2798 !== o.length) throw "Children.only";
  return o[7253 * 1 + 1 * 4817 + -12070];
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
  }), i.__c && i.__c.__P === o && (i.__e && t.appendChild(i.__e), i.__c.__e = !(-113 * -51 + -2197 + -1 * 3566), i.__c.__P = t)), i;
}
function ji() {
  this.__u = -1 * -4237 + 363 + 50 * -92, this.t = null, this.__b = null;
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
  return n.displayName = "Lazy", n.__f = !(164 * -29 + -103 * 68 + 12 * 980), n;
}
function Yn() {
  this.u = null, this.o = null;
}
F.unmount = function(i) {
  var o = i.__c;
  o && o.__R && o.__R(), o && 32 & i.__u && (i.type = null), us && us(i);
}, (ji.prototype = new Qe()).__c = function(i, o) {
  var t = o.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var n = H0(e.__v), r = !(-499 * -19 + 6447 + 15927 * -1), a = function() {
    r || (r = !0, t.__R = null, n ? n(s) : s());
  };
  t.__R = a;
  var s = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var g = e.state.__a;
        e.__v.__k[908 + 859 * -3 + 1 * 1669] = Z0(g, g.__c.__P, g.__c.__O);
      }
      var x;
      for (e.setState({ __a: e.__b = null }); x = e.t.pop(); ) x.forceUpdate();
    }
  };
  e.__u++ || -2 * 1405 + 105 * 16 + -1 * -1162 & o.__u || e.setState({ __a: e.__b = e.__v.__k[-681 * 1 + -8128 + 8809] }), i.then(a, a);
}, ji.prototype.componentWillUnmount = function() {
  this.t = [];
}, ji.prototype.render = function(i, o) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[1183 + -2832 * 1 + 1649].__c;
      this.__v.__k[0] = G0(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var n = o.__a && ke(ot, null, i.fallback);
  return n && (n.__u &= -(181 * -3 + -2 * -4492 + -8408)), [ke(ot, null, o.__a ? null : i.children), n];
};
var Is = function(i, o, t) {
  if (++t[-3 * -1809 + 1415 + -6841] === t[-4400 * 1 + -3005 + 7405] && i.o.delete(o), i.props.revealOrder && (i.props.revealOrder[-3093 + -1 * -3093] !== "t" || !i.o.size)) for (t = i.u; t; ) {
    for (; t.length > -8293 * 1 + -257 + 8553; ) t.pop()();
    if (t[-12 * -109 + 1 * -4649 + -6 * -557] < t[72 * -7 + 744 + -240]) break;
    i.u = t = t[2];
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
    return !(8886 * -1 + 557 + 8329);
  }, appendChild: function(e) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, insertBefore: function(e, n) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, -4365 + -4366 * -1), o.i.removeChild(e);
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
  return e[-5339 + 281 * 19]++, function(n) {
    var r = function() {
      o.props.revealOrder ? (e.push(n), Is(o, i, e)) : n();
    };
    t ? t(r) : r();
  };
}, Yn.prototype.render = function(i) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var o = yt(i.children);
  i.revealOrder && i.revealOrder[5057 * -1 + 8052 + -2995] === "b" && o.reverse();
  for (var t = o.length; t--; ) this.o.set(o[t], this.u = [-1 * 231 + 1 * 9877 + -9645, -9873 + -1723 * 1 + 11596 * 1, this.u]);
  return i.children;
}, Yn.prototype.componentDidUpdate = Yn.prototype.componentDidMount = function() {
  var i = this;
  this.o.forEach(function(o, t) {
    Is(i, t, o);
  });
};
var W0 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || -3 * 16451 + 85632 + 23824, sl = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, gl = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, cl = /[A-Z0-9]/g, ll = typeof document < "u", xl = function(i) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
function ul(i, o, t) {
  return o.__k == null && (o.textContent = ""), kt(i, o), typeof t == "function" && t(), i ? i.__c : null;
}
function Il(i, o, t) {
  return qr(i, o), typeof t == "function" && t(), i ? i.__c : null;
}
Qe.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty(Qe.prototype, i, { configurable: !(-7977 + 1 * -2207 + 10184), get: function() {
    return this["UNSAFE_" + i];
  }, set: function(o) {
    var t = {};
    t.configurable = !(-2525 + -19 * 86 + 4159 * 1), t.writable = !0, t.value = o, Object.defineProperty(this, i, t);
  } });
});
var ds = F.event;
function dl() {
}
function Cl() {
  return this.cancelBubble;
}
function hl() {
  return this.defaultPrevented;
}
F.event = function(i) {
  return ds && (i = ds(i)), i.persist = dl, i.isPropagationStopped = Cl, i.isDefaultPrevented = hl, i.nativeEvent = i;
};
var Ji = {};
Ji.enumerable = !(-1722 + 2902 * -2 + 1 * 7527), Ji.configurable = !(-7509 + -7509 * -1), Ji.get = function() {
  return this.class;
};
var oa, pl = Ji, Cs = F.vnode;
F.vnode = function(i) {
  typeof i.type == "string" && function(o) {
    var t = o.props, e = o.type, n = {};
    for (var r in t) {
      var a = t[r];
      if (!(r === "value" && "defaultValue" in t && a == null || ll && r === "children" && e === "noscript" || r === "class" || r === "className")) {
        var s = r.toLowerCase();
        r === "defaultValue" && "value" in t && t.value == null ? r = "value" : r === "download" && !(-9360 + 12 * 346 + 5208) === a ? a = "" : s === "translate" && a === "no" ? a = !(-13 * 36 + 2489 + -10 * 202) : s === "ondoubleclick" ? r = "ondblclick" : s !== "onchange" || e !== "input" && e !== "textarea" || xl(t.type) ? s === "onfocus" ? r = "onfocusin" : s === "onblur" ? r = "onfocusout" : gl.test(r) ? r = s : -(-4738 + 2 * -577 + 5893) === e.indexOf("-") && sl.test(r) ? r = r.replace(cl, "-$&").toLowerCase() : a === null && (a = void (7019 * -1 + -109 * 43 + -6 * -1951)) : s = r = "oninput", s === "oninput" && n[r = s] && (r = "oninputCapture"), n[r] = a;
      }
    }
    e == "select" && n.multiple && Array.isArray(n.value) && (n.value = yt(t.children).forEach(function(g) {
      g.props.selected = -(-1713 + -1929 * 1 + 3643) != n.value.indexOf(g.props.value);
    })), e == "select" && n.defaultValue != null && (n.value = yt(t.children).forEach(function(g) {
      g.props.selected = n.multiple ? n.defaultValue.indexOf(g.props.value) != -1 : n.defaultValue == g.props.value;
    })), t.class && !t.className ? (n.class = t.class, Object.defineProperty(n, "className", pl)) : (t.className && !t.class || t.class && t.className) && (n.class = n.className = t.className), o.props = n;
  }(i), i.$$typeof = W0, Cs && Cs(i);
};
var hs = F.__r;
F.__r = function(i) {
  hs && hs(i), oa = i.__c;
};
var ps = F.diffed;
F.diffed = function(i) {
  ps && ps(i);
  var o = i.props, t = i.__e;
  t != null && i.type === "textarea" && "value" in o && o.value !== t.value && (t.value = o.value == null ? "" : o.value), oa = null;
};
var ye = {};
ye.readContext = function(i) {
  return oa.__n[i.__c].props.value;
}, ye.useCallback = wn, ye.useContext = qt, ye.useDebugValue = so, ye.useDeferredValue = V0, ye.useEffect = he, ye.useId = v0, ye.useImperativeHandle = y0, ye.useInsertionEffect = T0, ye.useLayoutEffect = Kn, ye.useMemo = Xe, ye.useReducer = na, ye.useRef = at, ye.useState = Ne, ye.useSyncExternalStore = R0, ye.useTransition = E0;
var k0 = {};
k0.current = ye;
var K0 = {};
K0.ReactCurrentDispatcher = k0;
var fl = K0;
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
  return !!i.__k && (kt(null, i), !0);
}
function wl(i) {
  return i && (i.base || 1 * 2859 + 15 * -82 + 2 * -814 === i.nodeType && i) || null;
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
  return [!(66 + 13 * -5), O0];
}
var T0 = Kn, Zl = vo;
function R0(i, o) {
  var t = o(), e = Ne({ h: { __: t, v: o } }), n = e[18385 + -1 * 18385].h, r = e[1];
  return Kn(function() {
    n.__ = t, n.v = o, zo(n) && r({ h: n });
  }, [i, t, o]), he(function() {
    return zo(n) && r({ h: n }), i(function() {
      zo(n) && r({ h: n });
    });
  }, [i]), t;
}
function zo(i) {
  var o, t, e = i.v, n = i.__;
  try {
    var r = e();
    return !((o = n) === (t = r) && (4252 * 1 + -9460 + 5208 !== o || (-2942 + 3 * 981) / o == (663 + -8 * -674 + -6054) / t) || o != o && t != t);
  } catch {
    return !(1 * -9205 + -1049 * -2 + -7107 * -1);
  }
}
var L = {};
L.useState = Ne, L.useId = v0, L.useReducer = na, L.useEffect = he, L.useLayoutEffect = Kn, L.useInsertionEffect = T0, L.useTransition = E0, L.useDeferredValue = V0, L.useSyncExternalStore = R0, L.startTransition = O0, L.useRef = at, L.useImperativeHandle = y0, L.useMemo = Xe, L.useCallback = wn, L.useContext = qt, L.useDebugValue = so, L.version = "17.0.2", L.Children = tl, L.render = ul, L.hydrate = Il, L.unmountComponentAtNode = vl, L.createPortal = al, L.createElement = ke, L.createContext = bi, L.createFactory = ml, L.cloneElement = yl, L.createRef = Tc, L.Fragment = ot, L.isValidElement = vo, L.isElement = Zl, L.isFragment = Al, L.isMemo = bl, L.findDOMNode = wl, L.Component = Qe, L.PureComponent = hr, L.memo = qc, L.forwardRef = B0, L.flushSync = Bl, L.unstable_batchedUpdates = Sl, L.StrictMode = Gl, L.Suspense = ji, L.SuspenseList = Yn, L.lazy = il, L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fl;
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
  if (r !== void 0) return !!r;
  if (o === t) return !0;
  if (typeof o != "object" || !o || typeof t != "object" || !t) return !1;
  var a = Object.keys(o), s = Object.keys(t);
  if (a.length !== s.length) return !1;
  for (var g = Object.prototype.hasOwnProperty.bind(t), x = 1 * -5972 + -5682 + 2 * 5827; x < a.length; x++) {
    var C = a[x];
    if (!g(C)) return !1;
    var u = o[C], f = t[C];
    if (r = e ? e.call(n, u, f, C) : void (2555 + -421 * -3 + -166 * 23), r === !1 || r === void (3 * -2447 + 3 * -1201 + -8 * -1368) && u !== f) return !1;
  }
  return !0;
};
const Tl = Vl.getDefaultExportFromCjs(El);
var ie = "-ms-", $n = "-moz-", ee = "-webkit-", P0 = "comm", wo = "rule", ra = "decl", Rl = "@import", N0 = "@keyframes", Pl = "@layer", L0 = Math.abs, aa = String.fromCharCode, pr = Object.assign;
function Nl(i, o) {
  return be(i, 0) ^ 4185 + 76 * -89 + 2624 ? (((o << -2689 + 2 * 1339 + 13 ^ be(i, -4139 * -2 + 9102 + -110 * 158)) << 6209 + 3 * -2069 ^ be(i, -1 * -2579 + -6883 + -5 * -861)) << 450 + -458 * -16 + -7776 ^ be(i, 1 * 1268 + -1529 + -263 * -1)) << 2 ^ be(i, 65 * 55 + -2 * 3238 + 44 * 66) : -1 * 3494 + -1493 + 1 * 4987;
}
function D0(i) {
  return i.trim();
}
function pt(i, o) {
  return (i = o.exec(i)) ? i[-278 * -12 + 4052 + -7388] : i;
}
function Y(i, o, t) {
  return i.replace(o, t);
}
function Ui(i, o, t) {
  return i.indexOf(o, t);
}
function be(i, o) {
  return i.charCodeAt(o) | 257 * -23 + 73 * 63 + 1312;
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
function fs(i, o) {
  return i.filter(function(t) {
    return !pt(t, o);
  });
}
var So = -1 * 629 + -395 * -3 + -555, Bn = 2922 + 3 * 367 + -4022, Y0 = -2191 * -3 + 273 + -6846, _e = 82 * -103 + 19 * -157 + 11 * 1039, Ce = 8 * -211 + 1 * -8543 + 10231, On = "";
function Bo(i, o, t, e, n, r, a, s) {
  var g = {};
  return g.value = i, g.root = o, g.parent = t, g.type = e, g.props = n, g.children = r, g.line = So, g.column = Bn, g.length = a, g.return = "", g.siblings = s, g;
}
function Bt(i, o) {
  return pr(Bo("", null, null, "", null, null, -3602 + -7977 * 1 + -1 * -11579, i.siblings), i, { length: -i.length }, o);
}
function ln(i) {
  for (; i.root; ) i = Bt(i.root, { children: [i] });
  Xn(i, i.siblings);
}
function Dl() {
  return Ce;
}
function Fl() {
  return Ce = _e > 9 * -983 + 2747 * 1 + 1220 * 5 ? be(On, --_e) : 0, Bn--, Ce === 8 * 580 + 17 * -485 + -5 * -723 && (Bn = -1996 * 3 + 3913 + 2076, So--), Ce;
}
function it() {
  return Ce = _e < Y0 ? be(On, _e++) : 0, Bn++, Ce === -2 * -2619 + 6753 + -11981 && (Bn = -1144 * 1 + -42 * 53 + -1 * -3371, So++), Ce;
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
function fr(i) {
  switch (i) {
    case 3943 + 46 * 61 + -6749:
    case -15 * -29 + -1459 + 1 * 1033:
    case -9109 + -669 * 12 + 17147:
    case -1594 * -1 + -117 * 33 + 2280:
    case -43 * -89 + 448 + -4243:
      return -8096 + -6778 * 1 + -14879 * -1;
    case 1 * -123 + 3616 + -3460:
    case 877 * -2 + -596 + 2393 * 1:
    case -4364 + 1951 * -3 + -10261 * -1:
    case -15 * 300 + -2300 * -2 + -53:
    case -9240 + -2 * -4651:
    case 2183 * 1 + -250 * -14 + -5619:
    case -23 * 151 + -2345 + -5944 * -1:
    case -8600 + -8659 * -1:
    case 2066 + -393 * 11 + -10 * -238:
    case 1 * 9910 + -3046 + -6739:
      return 1 * -9070 + -3 * -1879 + 7 * 491;
    case 1 * 330 + -4602 + -1 * -4330:
      return -5 * -953 + 8394 + 23 * -572;
    case 2633 + -14 * -694 + -1 * 12315:
    case 1 * 3341 + 8695 + -3 * 3999:
    case 2703 * -1 + -8879 + 11622:
    case 208 * -19 + -5817 + 10 * 986:
      return 2601 + -113 * 23;
    case -7 * 184 + -3470 * 1 + 4799:
    case 93:
      return 1;
  }
  return -1342 + -1 * -2157 + -815;
}
function Yl(i) {
  return So = Bn = -8353 + -837 * -1 + 7517, Y0 = lt(On = i), _e = 4455 + -1 * 5221 + 766, [];
}
function Xl(i) {
  return On = "", i;
}
function Qo(i) {
  return D0(Go(_e - (-7103 + -1 * -3049 + 4055), mr(i === 404 * 2 + 5 * 1023 + -3 * 1944 ? i + (4146 + -2 * 1257 + -1630) : i === -5367 + -44 * 71 + 8531 ? i + (1 * 7327 + 223 * -2 + -6880) : i)));
}
function Ml(i) {
  for (; (Ce = jt()) && Ce < 31 * 64 + 3744 + 335 * -17; ) it();
  return fr(i) > 1 * 4207 + 9396 + -13601 || fr(Ce) > -7618 + -142 * -2 + 7337 ? "" : " ";
}
function jl(i, o) {
  for (; --o && it() && !(Ce < -4524 + 1359 * 3 + -5 * -99 || Ce > 479 + 35 * 274 + -9967 || Ce > -177 * -43 + -1 * 3393 + -1387 * 3 && Ce < 188 * -26 + -139 * -26 + -1 * -1339 || Ce > 239 * -3 + 7454 + -6667 && Ce < 97); ) ;
  return Go(i, zi() + (o < -263 * 29 + -117 * -2 + 7399 && jt() == 32 && it() == -2579 * 1 + 1 * -5188 + 7799 * 1));
}
function mr(i) {
  for (; it(); ) switch (Ce) {
    case i:
      return _e;
    case -7782 + -2 * -3327 + 1162:
    case 1825 + -3964 * 2 + 37 * 166:
      i !== -1186 * -8 + 934 + -10388 && i !== 39 && mr(Ce);
      break;
    case 40:
      i === 14555 + 118 * -123 && mr(i);
      break;
    case -668 * 12 + -2399 + 10507:
      it();
      break;
  }
  return _e;
}
function Jl(i, o) {
  for (; it() && i + Ce !== -1 * -7661 + 467 * -2 + 8 * -835 + (1 * 2103 + 122 * 10 + -3313); ) if (i + Ce === 42 + (4423 + -13 * 337) && jt() === 47) break;
  return "/*" + Go(o, _e - (-5652 + -1 * -5653)) + "*" + aa(i === -1 * -1303 + -8801 + 7545 ? i : it());
}
function Ul(i) {
  for (; !fr(jt()); ) it();
  return Go(i, _e);
}
function zl(i) {
  return Xl(Qi("", null, null, null, [""], i = Yl(i), -7066 * 1 + -2965 + 10031, [32 * 204 + 9168 + -1308 * 12], i));
}
function Qi(i, o, t, e, n, r, a, s, g) {
  for (var x = 0, C = 3612 + 4282 * -1 + 10 * 67, u = a, f = 566 * 1 + 1 * 9764 + -10330, m = -13 * 359 + -5258 + 1 * 9925, y = 4133 * -2 + -9 * -658 + 2344, G = 991 * -3 + -1 * 6317 + -3097 * -3, K = -1 * -2119 + -13 * 557 + 5123, S = -4 * -2453 + -6399 + -4 * 853, W = -21 * 194 + -2 * 445 + 2 * 2482, R = "", J = n, P = r, D = e, B = R; K; ) switch (y = W, W = it()) {
    case 11 * -36 + -1464 + 950 * 2:
      if (y != 322 * 29 + -309 * 4 + -7994 * 1 && be(B, u - (-5693 * 1 + 4300 + 1394)) == -1 * 3985 + -2626 + 6669) {
        Ui(B += Y(Qo(W), "&", "&\f"), "&\f", L0(x ? s[x - (-1 * 9147 + 11 * 805 + -293 * -1)] : 6107 * 1 + -465 + -5642)) != -(1 * -2027 + 9127 + -7099) && (S = -(-8 * 126 + -163 * -18 + -385 * 5));
        break;
      }
    case 406 + 73 * -50 + 149 * 22:
    case 1 * -1354 + 1 * 2699 + -1306:
    case -1095 + -679 * 10 + 7976:
      B += Qo(W);
      break;
    case -4303 * 1 + 5 * 111 + 1 * 3757:
    case 7814 + -24 * -257 + -13972:
    case 13:
    case 501 + -1852 * -3 + -6025 * 1:
      B += Ml(y);
      break;
    case -646 * 2 + -131 * -31 + -2677:
      B += jl(zi() - 1, 1807 * -1 + -4449 + 6263);
      continue;
    case -6 * 241 + 1284 * 2 + 215 * -5:
      switch (jt()) {
        case 38 * -158 + 787 * 8 + -250:
        case 2938 + -1076 * 5 + -19 * -131:
          Xn(Ql(Jl(it(), zi()), o, t, g), g);
          break;
        default:
          B += "/";
      }
      break;
    case (334 * -16 + 1751 + 3716) * G:
      s[x++] = lt(B) * S;
    case (83 * -52 + 734 + -337 * -11) * G:
    case -65 * -31 + -4579 + 61 * 43:
    case -67 * 1 + 49 + -2 * -9:
      switch (W) {
        case 0:
        case -4 * -2186 + -6818 + -1801 * 1:
          K = 0;
        case 35 * 277 + 4500 + -14136 + C:
          S == -(-367 * 10 + 2 * -2289 + 8249 * 1) && (B = Y(B, /\f/g, "")), m > 3 * 1730 + -22 * -178 + -9106 && lt(B) - u && Xn(m > 8534 + -1758 * -5 + 22 * -786 ? As(B + ";", e, t, u - (-380 * -9 + -1037 * -1 + 4456 * -1), g) : As(Y(B, " ", "") + ";", e, t, u - (1 * -3391 + 7924 + -4531), g), g);
          break;
        case 59:
          B += ";";
        default:
          if (Xn(D = ms(B, o, t, x, C, n, s, R, J = [], P = [], u, r), r), W === -3126 + 9 * 361)
            if (C === 20 * 185 + -8675 + 25 * 199) Qi(B, o, D, D, J, r, u, s, P);
            else switch (f === -2804 + 1 * 1667 + -206 * -6 && be(B, -4 * -989 + 4881 + -8834) === 403 * -14 + -1 * -766 + -1 * -4986 ? -2463 * -4 + -6004 + -3748 : f) {
              case -3 * 2683 + 3741 + 4408:
              case -349 + -5 * 319 + 2052:
              case -9066 + -5359 * -1 + 3816:
              case 1 * 901 + 21 * 266 + -6 * 1062:
                Qi(i, D, D, e && Xn(ms(i, D, D, -7239 + -127 * -57, 9469 * -1 + 1328 * 1 + 8141, n, s, R, n, J = [], u, P), P), n, P, u, s, e ? J : P);
                break;
              default:
                Qi(B, D, D, D, [""], P, 5445 + -1 * -4739 + -10184, s, P);
            }
      }
      x = C = m = 0, G = S = 1, R = B = "", u = a;
      break;
    case 4 * -206 + 2 * 1658 + -2434 * 1:
      u = -716 * 8 + -6603 + 12332 + lt(B), m = y;
    default:
      if (G < 6554 + 94 * 94 + -15389) {
        if (W == -8440 + 1647 * 1 + -3458 * -2) --G;
        else if (W == 181 * 43 + 4113 + -11771 && G++ == 2173 * 2 + 5596 * -1 + -625 * -2 && Fl() == -145 * 23 + 5958 + 1 * -2498) continue;
      }
      switch (B += aa(W), W * G) {
        case -5548 * 1 + 4021 + -313 * -5:
          S = C > 1 * 5751 + -5897 * 1 + 146 * 1 ? -22 * -202 + 777 + -45 * 116 : (B += "\f", -(-726 * -4 + -102 * -72 + -1 * 10247));
          break;
        case -20 + -1903 * 4 + 7676:
          s[x++] = (lt(B) - (349 * 11 + 1 * -6571 + 2733)) * S, S = 1;
          break;
        case -50 * 4 + 4416 + -4152:
          jt() === 2 * -545 + 1 * 9727 + 16 * -537 && (B += Qo(it())), f = jt(), C = u = lt(R = B += Ul(zi())), W++;
          break;
        case 7688 + -122 * 66 + -409 * -1:
          y === -1931 * 2 + -9615 * -1 + 2 * -2854 && lt(B) == 214 + -1430 * 6 + -8368 * -1 && (G = 33 * -274 + 3874 + 136 * 38);
      }
  }
  return r;
}
function ms(i, o, t, e, n, r, a, s, g, x, C, u) {
  for (var f = n - 1, m = n === 103 * 94 + 9895 + -19577 ? r : [""], y = F0(m), G = -5260 + 5251 * -1 + -1 * -10511, K = -2 * -2647 + -675 * 1 + -4619 * 1, S = 1 * 9871 + 2 * 466 + -10803; G < e; ++G) for (var W = -4433 + 143 * 31, R = Sn(i, f + (-13618 + -13619 * -1), f = L0(K = a[G])), J = i; W < y; ++W) (J = D0(K > -7309 + -1 * -4778 + -2531 * -1 ? m[W] + " " + R : Y(R, /&\f/g, m[W]))) && (g[S++] = J);
  return Bo(i, o, t, n === -15 * -543 + -2 * -1048 + -10241 ? wo : s, g, x, C, u);
}
function Ql(i, o, t, e) {
  return Bo(i, o, t, P0, aa(Dl()), Sn(i, 36 * -76 + -14 * -313 + -1644, -(1251 * 2 + 9271 + -11771)), -2707 * -1 + -5248 + 2541, e);
}
function As(i, o, t, e, n) {
  return Bo(i, o, t, ra, Sn(i, 412 * 17 + -3448 * 1 + -3556, e), Sn(i, e + 1, -(-5557 * -1 + -7 * 1134 + -3 * -794)), e, n);
}
function X0(i, o, t) {
  switch (Nl(i, o)) {
    case 952 + -593 * -7:
      return ee + "print-" + i + i;
    case 21 * -448 + -3 * -537 + 13534:
    case -5941 * -1 + -9305 + 7565:
    case -1 * 4467 + 2 * -842 + 9328:
    case 1113 + -3 * -2089 + -3947 * 1:
    case -5029 + -1 * -4511 + -17 * -127:
    case 3593 * -1 + 2141 * 4 + -257 * 2:
    case 7620 + 983 * 7 + -11580:
    case -1 * -4931 + 1982 + -1341:
    case 370 * -7 + -11779 + 20725:
    case 5844:
    case 159 + -34 * 235 + 33 * 334:
    case 10821 + 348 * -12:
    case -3197 + -41 * -157 + -235:
    case 419 * 12 + -22 * 151 + 4685:
    case 1 * -3017 + 4375 + 4521:
    case -1 * 10663 + 494 * 1 + -14 * -1128:
    case -2 * -1653 + -5669 * 1 + -1 * -8498:
    case -2857 * 1 + 751 * 13 + 769 * -3:
    case -9001 * 1 + -7028 + 2 * 10442:
    case -9658 + -7 * 543 + -2 * -8837:
    case 1403 * 1 + -54 + 5040:
    case 2138 + 1 * 2971:
    case 1 * 10381 + -7984 + 106 * 28:
    case 5621:
    case -8544 + 2699 * -1 + 15072:
      return ee + i + i;
    case 4789:
      return $n + i + i;
    case 9 * 95 + -5089 + 9583 * 1:
    case -5687 * -1 + 7 * 1109 + -2301 * 4:
    case 58 * -79 + 9902 + -510:
    case 6968:
    case 7724 + -2010 * 2 + 2 * -474:
      return ee + i + $n + i + ie + i + i;
    case 8263 + -8807 * 1 + 40 * 162:
      switch (be(i, o + (1 * 6719 + -4219 * -2 + 2 * -7573))) {
        case 48 * -9 + -10 * 156 + 9 * 234:
          return ee + i + ie + Y(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case 2987 * 3 + 8001 + 53 * -318:
          return ee + i + ie + Y(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case 4067 + 1 * -5473 + 1451 * 1:
          return ee + i + ie + Y(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    case 6828:
    case -18 * -233 + -7839 + 7913:
    case 2903:
      return ee + i + ie + i + i;
    case -19887 + 501 * 52:
      return ee + i + ie + "flex-" + i + i;
    case 6 * -973 + 3205 + 7820:
      return ee + i + Y(i, /(\w+).+(:[^]+)/, ee + "box-$1$2" + ie + "flex-$1$2") + i;
    case -9030 + 1 * -8657 + 23130:
      return ee + i + ie + "flex-item-" + Y(i, /flex-|-self/g, "") + (pt(i, /flex-|baseline/) ? "" : ie + "grid-row-" + Y(i, /flex-|-self/g, "")) + i;
    case 3003 + -1 * -4962 + -35 * 94:
      return ee + i + ie + "flex-line-pack" + Y(i, /align-content|flex-|-self/g, "") + i;
    case 1 * 3334 + -2906 + 5120:
      return ee + i + ie + Y(i, "shrink", "negative") + i;
    case -3 * -399 + -375 + 4470:
      return ee + i + ie + Y(i, "basis", "preferred-size") + i;
    case 1210 * 3 + -7 * 19 + 2563:
      return ee + "box-" + Y(i, "-grow", "") + ee + i + ie + Y(i, "grow", "positive") + i;
    case -1 * 775 + -1645 * -6 + 1 * -4541:
      return ee + Y(i, /([^-])(transform)/g, "$1" + ee + "$2") + i;
    case 10077 + -4893 * -1 + 1 * -8783:
      return Y(Y(Y(i, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"), i, "") + i;
    case -3665 * -1 + -1 * 5579 + -1 * -7409:
    case 9781 + -1115 * 1 + -4707:
      return Y(i, /(image-set\([^]*)/, ee + "$1$`$1");
    case -6431 + 7 * -1257 + 20198:
      return Y(Y(i, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + ie + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ee + i + i;
    case 4200:
      if (!pt(i, /flex-|baseline/)) return ie + "grid-column-align" + Sn(i, o) + i;
      break;
    case 2592:
    case 1 * -7438 + -1 * 8693 + -1 * -19491:
      return ie + Y(i, "template-", "") + i;
    case -4 * -1230 + 4230 + -2383 * 2:
    case -7079 + 5129 * 1 + 5566:
      return t && t.some(function(e, n) {
        return o = n, pt(e.props, /grid-\w+-end/);
      }) ? ~Ui(i + (t = t[o].value), "span", 51 * 3 + -4274 + 4121) ? i : ie + Y(i, "-start", "") + i + ie + "grid-row-span:" + (~Ui(t, "span", 9670 * 1 + 4180 + -13850) ? pt(t, /\d+/) : +pt(t, /\d+/) - +pt(i, /\d+/)) + ";" : ie + Y(i, "-start", "") + i;
    case 4896:
    case -6802 * -1 + -9844 + 7170:
      return t && t.some(function(e) {
        return pt(e.props, /grid-\w+-start/);
      }) ? i : ie + Y(Y(i, "-end", "-span"), "span ", "") + i;
    case 4095:
    case 6205 * 1 + 1 * 3862 + 4 * -1621:
    case 7394 + 2879 * -1 + -447 * 1:
    case -269 * 25 + -313 * 1 + 9570:
      return Y(i, /(.+)-inline(.+)/, ee + "$1$2") + i;
    case 8335 + -4337 * -1 + -68 * 67:
    case 1095 * -8 + 88 + 15731:
    case -10098 + -1791 * 3 + -2 * -10612:
    case -2489 + 34 * 236:
    case -4 * 2485 + -6910 + -1715 * -13:
    case 1 * 5163 + 2408 + -1870:
    case 359 * -20 + 2634 + 9479:
    case 13 * -293 + 983 + -61 * -123:
    case -7943 + -10082 * 1 + 23558:
    case 6889 + -2 * 612 + 62 * 2:
    case 5021:
    case 4765:
      if (lt(i) - (160 * -1 + 5 * -729 + 3806) - o > 6) switch (be(i, o + (-2749 + -1 * -4887 + -2137))) {
        case -7741 + -1 * -5186 + 2664:
          if (be(i, o + (41 * 193 + 3 * 177 + 10 * -844)) !== -1 * 2203 + 5586 + -3338 * 1) break;
        case 1 * 8244 + 6809 + -14951:
          return Y(i, /(.+:)(.+)-([^]+)/, "$1" + ee + "$2-$3$1" + $n + (be(i, o + (-692 + 7 * -398 + 3481)) == 8 * 884 + -197 * 1 + -6767 ? "$3" : "$2-$3")) + i;
        case 2 * 3247 + -1203 + -5176:
          return ~Ui(i, "stretch", 7 * -1327 + 2628 + 6661 * 1) ? X0(Y(i, "stretch", "fill-available"), o, t) + i : i;
      }
      break;
    case 10111 * -1 + 7231 * -1 + 22494:
    case 5920:
      return Y(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, n, r, a, s, g, x) {
        return ie + n + ":" + r + x + (a ? ie + n + "-span:" + (s ? g : +g - +r) + x : "") + i;
      });
    case -7044 + 926 * -3 + 1 * 14771:
      if (be(i, o + 6) === 9160 + -9 * 159 + -7608) return Y(i, ":", ":" + ee) + i;
      break;
    case -10364 + 251 * -34 + 25342:
      switch (be(i, be(i, 14) === 1474 + -8498 * 1 + 7069 ? 263 * 14 + -2 * -4925 + -13514 : 2111 * 1 + 9278 * -1 + 7178)) {
        case 7 * 1082 + -374 * -2 + -8202:
          return Y(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ee + (be(i, 14) === 4566 + -137 * 33 ? "inline-" : "") + "box$3$1" + ee + "$2$3$1" + ie + "$2box$3") + i;
        case -68 * -26 + -2 * 2411 + 38 * 83:
          return Y(i, ":", ":" + ie) + i;
      }
      break;
    case 4142 + -10043 * 1 + -2324 * -5:
    case 1371 * -2 + -1 * -6547 + 2 * -579:
    case 2 * -1263 + -4887 * -1 + -226:
    case 4846 * 1 + -2929 + -6 * -335:
    case -1 * -4211 + 1 * -3057 + -1 * -1237:
      return Y(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function go(i, o) {
  for (var t = "", e = -164 * -53 + -1407 + 235 * -31; e < i.length; e++) t += o(i[e], e, i, o) || "";
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
    for (var a = "", s = 5237 + -1 * 5237; s < o; s++) a += i[s](t, e, n, r) || "";
    return a;
  };
}
function ql(i) {
  return function(o) {
    o.root || (o = o.return) && i(o);
  };
}
function ex(i, o, t, e) {
  if (i.length > -(-7 * 853 + -1 * 1031 + 7003) && !i.return)
    switch (i.type) {
      case ra:
        i.return = X0(i.value, i.length, t);
        return;
      case N0:
        return go([Bt(i, { value: Y(i.value, "@", "@" + ee) })], e);
      case wo:
        if (i.length) return Ll(t = i.props, function(n) {
          switch (pt(n, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              ln(Bt(i, { props: [Y(n, /:(read-\w+)/, ":" + $n + "$1")] }));
              var r = {};
              r.props = [n], ln(Bt(i, r)), pr(i, { props: fs(t, e) });
              break;
            case "::placeholder":
              ln(Bt(i, { props: [Y(n, /:(plac\w+)/, ":" + ee + "input-$1")] })), ln(Bt(i, { props: [Y(n, /:(plac\w+)/, ":" + $n + "$1")] })), ln(Bt(i, { props: [Y(n, /:(plac\w+)/, ie + "input-$1")] }));
              var a = {};
              a.props = [n], ln(Bt(i, a)), pr(i, { props: fs(t, e) });
              break;
          }
          return "";
        });
    }
}
var N = {};
N.animationIterationCount = 1, N.aspectRatio = 1, N.borderImageOutset = 1, N.borderImageSlice = 1, N.borderImageWidth = 1, N.boxFlex = 1, N.boxFlexGroup = 1, N.boxOrdinalGroup = 1, N.columnCount = 1, N.columns = 1, N.flex = 1, N.flexGrow = 1, N.flexPositive = 1, N.flexShrink = 1, N.flexNegative = 1, N.flexOrder = 1, N.gridRow = 1, N.gridRowEnd = 1, N.gridRowSpan = 1, N.gridRowStart = 1, N.gridColumn = 1, N.gridColumnEnd = 1, N.gridColumnSpan = 1, N.gridColumnStart = 1, N.msGridRow = 1, N.msGridRowSpan = 1, N.msGridColumn = 1, N.msGridColumnSpan = 1, N.fontWeight = 1, N.lineHeight = 1, N.opacity = 1, N.order = 1, N.orphans = 1, N.tabSize = 1, N.widows = 1, N.zIndex = 1, N.zoom = 1, N.WebkitLineClamp = 1, N.fillOpacity = 1, N.floodOpacity = 1, N.stopOpacity = 1, N.strokeDasharray = 1, N.strokeDashoffset = 1, N.strokeMiterlimit = 1, N.strokeOpacity = 1, N.strokeWidth = 1;
var tx = N, _ = {}, Qt = typeof process < "u" && void (2 * 4933 + -1 * 9006 + -860) !== _ && (_.REACT_APP_SC_ATTR || _.SC_ATTR) || "data-styled", M0 = "active", j0 = "data-styled-version", Zo = "6.1.11", sa = `/*!sc*/
`, ga = typeof window < "u" && "HTMLElement" in window, nx = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (-4912 + 73 * 11 + 4109) !== _ && void (8118 + 1 * 2011 + -10129) !== _.REACT_APP_SC_DISABLE_SPEEDY && _.REACT_APP_SC_DISABLE_SPEEDY !== "" ? _.REACT_APP_SC_DISABLE_SPEEDY !== "false" && _.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (5492 + 3295 * -3 + -4393 * -1) !== _ && void (1 * -9563 + -8677 + 4560 * 4) !== _.SC_DISABLE_SPEEDY && _.SC_DISABLE_SPEEDY !== "" ? _.SC_DISABLE_SPEEDY !== "false" && _.SC_DISABLE_SPEEDY : _.NODE_ENV !== "production"), bs = /invalid hook call/i, Ri = /* @__PURE__ */ new Set(), ix = function(i, o) {
  if (_.NODE_ENV !== "production") {
    var t = o ? ' with the id of "'.concat(o, '"') : "", e = "The component ".concat(i).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var r = !0;
      console.error = function(a) {
        for (var s = [], g = 797 + -1 * 6071 + 5275 * 1; g < arguments.length; g++) s[g - (-31 * -10 + -2562 + 2253)] = arguments[g];
        bs.test(a) ? (r = !1, Ri.delete(e)) : n.apply(void 0, yn([a], s, !1));
      }, at(), r && !Ri.has(e) && (console.warn(e), Ri.add(e));
    } catch (a) {
      bs.test(a.message) && Ri.delete(e);
    } finally {
      console.error = n;
    }
  }
}, Ho = Object.freeze([]), Gn = Object.freeze({});
function ox(i, o, t) {
  return void (3645 + 409 * 12 + -2851 * 3) === t && (t = Gn), i.theme !== t.theme && i.theme || o || t.theme;
}
var Ar = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), rx = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ax = /(^-|-$)/g;
function ys(i) {
  return i.replace(rx, "-").replace(ax, "");
}
var sx = /(a)(d)/gi, Pi = 52, vs = function(i) {
  return String.fromCharCode(i + (i > -7779 * 1 + -3644 + 27 * 424 ? -123 + 224 * -32 + 1466 * 5 : 97));
};
function br(i) {
  var o, t = "";
  for (o = Math.abs(i); o > Pi; o = o / Pi | 1492 + -41 * 138 + 4166) t = vs(o % Pi) + t;
  return (vs(o % Pi) + t).replace(sx, "$1-$2");
}
var $o, J0 = -1 * 9111 + -5 * 1528 + 22132, Lt = function(i, o) {
  for (var t = o.length; t; ) i = (8978 + 9 * 213 + -10862) * i ^ o.charCodeAt(--t);
  return i;
}, U0 = function(i) {
  return Lt(J0, i);
};
function gx(i) {
  return br(U0(i) >>> 103 * -61 + -1401 + 452 * 17);
}
function z0(i) {
  return _.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function _o(i) {
  return typeof i == "string" && (_.NODE_ENV === "production" || i.charAt(7214 + 3e3 * -1 + -2107 * 2) === i.charAt(3447 + 246 * -8 + 3 * -493).toLowerCase());
}
var ze = {};
ze.childContextTypes = !0, ze.contextType = !0, ze.contextTypes = !0, ze.defaultProps = !0, ze.displayName = !0, ze.getDefaultProps = !0, ze.getDerivedStateFromError = !0, ze.getDerivedStateFromProps = !0, ze.mixins = !0, ze.propTypes = !0, ze.type = !0;
var Gt = {};
Gt.name = !0, Gt.length = !0, Gt.prototype = !0, Gt.caller = !0, Gt.callee = !0, Gt.arguments = !0, Gt.arity = !0;
var Pt = {};
Pt.$$typeof = !0, Pt.compare = !0, Pt.defaultProps = !0, Pt.displayName = !0, Pt.propTypes = !0, Pt.type = !0;
var In = {};
In.$$typeof = !0, In.render = !0, In.defaultProps = !0, In.displayName = !0, In.propTypes = !0;
var Q0 = typeof Symbol == "function" && Symbol.for, $0 = Q0 ? Symbol.for("react.memo") : -1 * -112991 + -65434 * 1 + -46 * -273, cx = Q0 ? Symbol.for("react.forward_ref") : -29379 + -74 * 617 + 301 * 449, lx = ze, xx = Gt, _0 = Pt, ux = (($o = {})[cx] = In, $o[$0] = _0, $o);
function ws(i) {
  return ("type" in (o = i) && o.type.$$typeof) === $0 ? _0 : "$$typeof" in i ? ux[i.$$typeof] : lx;
  var o;
}
var Ix = Object.defineProperty, dx = Object.getOwnPropertyNames, Ss = Object.getOwnPropertySymbols, Cx = Object.getOwnPropertyDescriptor, hx = Object.getPrototypeOf, Bs = Object.prototype;
function q0(i, o, t) {
  if (typeof o != "string") {
    if (Bs) {
      var e = hx(o);
      e && e !== Bs && q0(i, e, t);
    }
    var n = dx(o);
    Ss && (n = n.concat(Ss(o)));
    for (var r = ws(i), a = ws(o), s = -81 * 41 + 65 * 2 + -3191 * -1; s < n.length; ++s) {
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
  if (-1 * -9391 + -6603 + -2788 === i.length) return "";
  for (var t = i[0], e = 1; e < i.length; e++) t += i[e];
  return t;
}
function Hn(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function yr(i, o, t) {
  if (void (26 * -146 + 1650 + 2146) === t && (t = !1), !t && !Hn(i) && !Array.isArray(i)) return o;
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
var px = _.NODE_ENV !== "production" ? Ae : {};
function fx() {
  for (var i = [], o = -4967 * -1 + -5143 * -1 + -10110; o < arguments.length; o++) i[o] = arguments[o];
  for (var t = i[-76 * -81 + 6891 + 1 * -13047], e = [], n = -3656 + -9224 * 1 + -12881 * -1, r = i.length; n < r; n += 1 * 9298 + 5528 + -14825) e.push(i[n]);
  return e.forEach(function(a) {
    t = t.replace(/%[a-z]/, a);
  }), t;
}
function Vn(i) {
  for (var o = [], t = 7 * -1061 + -1017 + -3 * -2815; t < arguments.length; t++) o[t - (8088 + -81 * -71 + -13838)] = arguments[t];
  return _.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i, " for more information.").concat(o.length > 2985 + 2452 * -4 + 6823 ? " Args: ".concat(o.join(", ")) : "")) : new Error(fx.apply(void (-3739 * -1 + 3569 + -7308), yn([px[i]], o, !1)).trim());
}
var mx = function() {
  function i(o) {
    this.groupSizes = new Uint32Array(-2847 + 9551 * 1 + -6192), this.length = 85 * 27 + -2399 + 154 * 4, this.tag = o;
  }
  return i.prototype.indexOfGroup = function(o) {
    for (var t = 9498 + -1 * 5309 + 1 * -4189, e = 3 * 1773 + -3106 + -2213; e < o; e++) t += this.groupSizes[e];
    return t;
  }, i.prototype.insertRules = function(o, t) {
    if (o >= this.groupSizes.length) {
      for (var e = this.groupSizes, n = e.length, r = n; o >= r; ) if ((r <<= -6273 + 161 * -52 + 14646 * 1) < 1533 * -1 + -3 * -581 + -210) throw Vn(16, "".concat(o));
      this.groupSizes = new Uint32Array(r), this.groupSizes.set(e), this.length = r;
      for (var a = n; a < r; a++) this.groupSizes[a] = -2224 + -278 * -8;
    }
    for (var s = this.indexOfGroup(o + (949 + -1 * -6443 + -7391)), g = (a = -107 * -3 + -1 * -3197 + -1759 * 2, t.length); a < g; a++) this.tag.insertRule(s, t[a]) && (this.groupSizes[o]++, s++);
  }, i.prototype.clearGroup = function(o) {
    if (o < this.length) {
      var t = this.groupSizes[o], e = this.indexOfGroup(o), n = e + t;
      this.groupSizes[o] = 0;
      for (var r = e; r < n; r++) this.tag.deleteRule(e);
    }
  }, i.prototype.getGroup = function(o) {
    var t = "";
    if (o >= this.length || -39 * 55 + 427 * 1 + 1718 === this.groupSizes[o]) return t;
    for (var e = this.groupSizes[o], n = this.indexOfGroup(o), r = n + e, a = n; a < r; a++) t += "".concat(this.tag.getRule(a)).concat(sa);
    return t;
  }, i;
}(), Ax = -1 * 8146 + -4452 + -1 * -12599 << 30, $i = /* @__PURE__ */ new Map(), co = /* @__PURE__ */ new Map(), _i = 4202 * -2 + -1930 + 195 * 53, Ni = function(i) {
  if ($i.has(i)) return $i.get(i);
  for (; co.has(_i); ) _i++;
  var o = _i++;
  if (_.NODE_ENV !== "production" && ((-5863 + 3 * -2473 + 13282 | o) < -2982 * -1 + -3134 + -38 * -4 || o > Ax)) throw Vn(-1 * -6129 + -4046 + -2067, "".concat(o));
  return $i.set(i, o), co.set(o, i), o;
}, bx = function(i, o) {
  _i = o + (1096 + -1 * -1669 + -1 * 2764), $i.set(i, o), co.set(o, i);
}, yx = "style[".concat(Qt, "][").concat(j0, '="').concat(Zo, '"]'), vx = new RegExp("^".concat(Qt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), wx = function(i, o, t) {
  for (var e, n = t.split(","), r = 889 * 4 + 32 * -306 + 1 * 6236, a = n.length; r < a; r++) (e = n[r]) && i.registerName(o, e);
}, Sx = function(i, o) {
  for (var t, e = ((t = o.textContent) !== null && void (-1 * 7286 + 6914 * -1 + -5 * -2840) !== t ? t : "").split(sa), n = [], r = 4 * 1553 + -145 * 67 + 3503, a = e.length; r < a; r++) {
    var s = e[r].trim();
    if (s) {
      var g = s.match(vx);
      if (g) {
        var x = 0 | parseInt(g[1], 10), C = g[2];
        2166 * -1 + 1521 + -43 * -15 !== x && (bx(C, x), wx(i, C, g[-6850 + 2 * -829 + 8511]), i.getTag().insertRules(x, n)), n.length = 1346 * 1 + 1 * 2978 + -23 * 188;
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
    return g[g.length - (-7030 + -79 * -89)];
  }(t), r = void (6518 + -6518 * 1) !== n ? n.nextSibling : null;
  e.setAttribute(Qt, M0), e.setAttribute(j0, Zo);
  var a = Bx();
  return a && e.setAttribute("nonce", a), t.insertBefore(e, r), e;
}, Gx = function() {
  function i(o) {
    this.element = eg(o), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, n = -2 * 1487 + 9678 * 1 + 16 * -419, r = e.length; n < r; n++) {
        var a = e[n];
        if (a.ownerNode === t) return a;
      }
      throw Vn(17);
    }(this.element), this.length = 26 * 85 + 1 * 4663 + -6873;
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
    this.element = eg(o), this.nodes = this.element.childNodes, this.length = 0;
  }
  return i.prototype.insertRule = function(o, t) {
    if (o <= this.length && o >= 3739 * 2 + -7520 + 42) {
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
    this.rules = [], this.length = 806 * -3 + -5687 + 5 * 1621;
  }
  return i.prototype.insertRule = function(o, t) {
    return o <= this.length && (this.rules.splice(o, -9128 + -7 * -1304, t), this.length++, !0);
  }, i.prototype.deleteRule = function(o) {
    this.rules.splice(o, -6553 + 120 * -76 + 15674), this.length--;
  }, i.prototype.getRule = function(o) {
    return o < this.length ? this.rules[o] : "";
  }, i;
}(), Zs = ga, Wx = { isServer: !ga, useCSSOMInjection: !nx }, tg = function() {
  function i(o, t, e) {
    void (2035 + 1 * 587 + -2622) === o && (o = Gn), void (1151 * 7 + -1 * -9433 + 165 * -106) === t && (t = {});
    var n = this;
    this.options = Pe(Pe({}, Wx), o), this.gs = t, this.names = new Map(e), this.server = !!o.isServer, !this.server && ga && Zs && (Zs = !1, function(r) {
      for (var a = document.querySelectorAll(yx), s = 1087 * 1 + -7061 + 2 * 2987, g = a.length; s < g; s++) {
        var x = a[s];
        x && x.getAttribute(Qt) !== M0 && (Sx(r, x), x.parentNode && x.parentNode.removeChild(x));
      }
    }(this)), la(this, function() {
      return function(r) {
        for (var a = r.getTag(), s = a.length, g = "", x = function(u) {
          var f = function(S) {
            return co.get(S);
          }(u);
          if (void (79 * 41 + -3910 + 61 * 11) === f) return "continue";
          var m = r.names.get(f), y = a.getGroup(u);
          if (void (-161 * -45 + -17 * -554 + -16663) === m || y.length === 0) return "continue";
          var G = "".concat(Qt, ".g").concat(u, '[id="').concat(f, '"]'), K = "";
          void (-1 * -2290 + -7 * -513 + -1 * 5881) !== m && m.forEach(function(S) {
            S.length > -2252 * -2 + -42 * -193 + 65 * -194 && (K += "".concat(S, ","));
          }), g += "".concat(y).concat(G, '{content:"').concat(K, '"}').concat(sa);
        }, C = 12743 + 12743 * -1; C < s; C++) x(C);
        return g;
      }(n);
    });
  }
  return i.registerId = function(o) {
    return Ni(o);
  }, i.prototype.reconstructWithOptions = function(o, t) {
    return void (-2241 + 2 * 2969 + -3697) === t && (t = !0), new i(Pe(Pe({}, this.options), o), this.gs, t && this.names || void (29 * 333 + -5983 + -3674));
  }, i.prototype.allocateGSInstance = function(o) {
    return this.gs[o] = (this.gs[o] || -1 * -8329 + -9252 + 923) + (538 + 53 * -25 + -197 * -4);
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
    this.tag = void (4056 * 1 + 9 * -334 + -150 * 7);
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
  var o, t, e, n = i === void 0 ? Gn : i, r = n.options, a = void (16 * 76 + -1 * 7147 + 5931 * 1) === r ? Gn : r, s = n.plugins, g = void (2671 * 2 + 1 * 5894 + -2809 * 4) === s ? Ho : s, x = function(f, m, y) {
    return y.startsWith(t) && y.endsWith(t) && y.replaceAll(t, "").length > 873 * 8 + -3236 + -3748 ? ".".concat(o) : f;
  }, C = g.slice();
  C.push(function(f) {
    f.type === wo && f.value.includes("&") && (f.props[3229 * -1 + -2735 * 3 + -1 * -11434] = f.props[-5051 + 1 * 4721 + 330].replace(kx, t).replace(e, x));
  }), a.prefix && C.push(ex), C.push($l);
  var u = function(f, m, y, G) {
    void (7036 * 1 + -79 * -60 + -11776) === m && (m = ""), void (-919 * 5 + -1459 * 3 + 2243 * 4) === y && (y = ""), G === void 0 && (G = "&"), o = G, t = m, e = new RegExp("\\".concat(t, "\\b"), "g");
    var K = f.replace(Kx, ""), S = zl(y || m ? "".concat(y, " ").concat(m, " { ").concat(K, " }") : K);
    a.namespace && (S = ng(S, a.namespace));
    var W = [];
    return go(S, _l(C.concat(ql(function(R) {
      return W.push(R);
    })))), W;
  };
  return u.hash = g.length ? g.reduce(function(f, m) {
    return m.name || Vn(445 + -1 * 4667 + -19 * -223), Lt(f, m.name);
  }, J0).toString() : "", u;
}
var Ox = new tg(), vr = ig(), xa = zt.createContext({ shouldForwardProp: void (-5404 + 1 * 8297 + -263 * 11), styleSheet: Ox, stylis: vr });
xa.Consumer;
var Vx = zt.createContext(void 0);
function wr() {
  return qt(xa);
}
function Ex(i) {
  var o = Ne(i.stylisPlugins), t = o[2267 * 4 + -659 + -8409], e = o[11102 + 11101 * -1], n = wr().styleSheet, r = Xe(function() {
    var C = n, u = {};
    return u.useCSSOMInjection = !1, i.sheet ? C = i.sheet : i.target && (C = C.reconstructWithOptions({ target: i.target }, !1)), i.disableCSSOMInjection && (C = C.reconstructWithOptions(u)), C;
  }, [i.disableCSSOMInjection, i.sheet, i.target, n]), a = Xe(function() {
    var C = {};
    C.namespace = i.namespace, C.prefix = i.enableVendorPrefixes;
    var u = {};
    return u.options = C, u.plugins = t, ig(u);
  }, [i.enableVendorPrefixes, i.namespace, t]);
  he(function() {
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
      void (-1 * 2701 + -5 * 194 + 3671 * 1) === r && (r = vr);
      var a = e.name + r.hash;
      n.hasNameForId(e.id, a) || n.insertRules(e.id, a, r(e.rules, a, "@keyframes"));
    }, this.name = o, this.id = "sc-keyframes-".concat(o), this.rules = t, la(this, function() {
      throw Vn(34 * -109 + 4178 + -460, String(e.name));
    });
  }
  return i.prototype.getName = function(o) {
    return o === void 0 && (o = vr), this.name + o.hash;
  }, i;
}(), Tx = function(i) {
  return i >= "A" && i <= "Z";
};
function Ws(i) {
  for (var o = "", t = 5595 + -8 * 1141 + 3533; t < i.length; t++) {
    var e = i[t];
    if (-23 * 117 + -710 + -6 * -567 === t && e === "-" && i[3545 + 709 * -5] === "-") return i;
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
    i.hasOwnProperty(n) && !og(r) && (Array.isArray(r) && r.isCss || Zn(r) ? e.push("".concat(Ws(n), ":"), r, ";") : Hn(r) ? e.push.apply(e, yn(yn(["".concat(n, " {")], rg(r), !1), ["}"], !1)) : e.push("".concat(Ws(n), ": ").concat((o = n, (t = r) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || 185 * -18 + 1046 * 6 + 2946 * -1 === t || o in tx || o.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
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
  for (var o = 0; o < i.length; o += -321 * 27 + 1 * -541 + 1 * 9209) {
    var t = i[o];
    if (Zn(t) && !ca(t)) return !1;
  }
  return !0;
}
var Px = U0(Zo), Nx = function() {
  function i(o, t, e) {
    this.rules = o, this.staticRulesId = "", this.isStatic = _.NODE_ENV === "production" && (void (2136 + -1 * -4328 + -6464) === e || e.isStatic) && Rx(o), this.componentId = t, this.baseHash = Lt(Px, t), this.baseStyle = e, tg.registerId(t);
  }
  return i.prototype.generateAndInjectStyles = function(o, t, e) {
    var n = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) n = Ft(n, this.staticRulesId);
      else {
        var r = Gs(Jt(this.rules, o, t, e)), a = br(Lt(this.baseHash, r) >>> 0);
        if (!t.hasNameForId(this.componentId, a)) {
          var s = e(r, ".".concat(a), void 0, this.componentId);
          t.insertRules(this.componentId, a, s);
        }
        n = Ft(n, a), this.staticRulesId = a;
      }
    else {
      for (var g = Lt(this.baseHash, e.hash), x = "", C = 0; C < this.rules.length; C++) {
        var u = this.rules[C];
        if (typeof u == "string") x += u, _.NODE_ENV !== "production" && (g = Lt(g, u));
        else if (u) {
          var f = Gs(Jt(u, o, t, e));
          g = Lt(g, f + C), x += f;
        }
      }
      if (x) {
        var m = br(g >>> 0);
        t.hasNameForId(this.componentId, m) || t.insertRules(this.componentId, m, e(x, ".".concat(m), void (3226 * -3 + 2230 + 7 * 1064), this.componentId)), n = Ft(n, m);
      }
    }
    return n;
  }, i;
}(), ag = zt.createContext(void (4343 + -101 * 43));
ag.Consumer;
var qo = {}, ks = /* @__PURE__ */ new Set();
function Lx(i, o, t) {
  var e = ca(i), n = i, r = !_o(i), a = o.attrs, s = void (-2514 + 8801 * -1 + 11315) === a ? Ho : a, g = o.componentId, x = void (8633 * -1 + 7060 + 143 * 11) === g ? function(P, D) {
    var B = typeof P != "string" ? "sc" : ys(P);
    qo[B] = (qo[B] || 1839 + -1 * 1839) + (1534 + 701 * -3 + 570);
    var U = "".concat(B, "-").concat(gx(Zo + B + qo[B]));
    return D ? "".concat(D, "-").concat(U) : U;
  }(o.displayName, o.parentComponentId) : g, C = o.displayName, u = void (6756 + -1 * 7893 + 1137 * 1) === C ? function(P) {
    return _o(P) ? "styled.".concat(P) : "Styled(".concat(z0(P), ")");
  }(i) : C, f = o.displayName && o.componentId ? "".concat(ys(o.displayName), "-").concat(o.componentId) : o.componentId || x, m = e && n.attrs ? n.attrs.concat(s).filter(Boolean) : s, y = o.shouldForwardProp;
  if (e && n.shouldForwardProp) {
    var G = n.shouldForwardProp;
    if (o.shouldForwardProp) {
      var K = o.shouldForwardProp;
      y = function(P, D) {
        return G(P, D) && K(P, D);
      };
    } else y = G;
  }
  var S = new Nx(t, f, e ? n.componentStyle : void (-2 * 998 + 7861 + -5865));
  function W(P, D) {
    return function(B, U, ue) {
      var z = B.attrs, Ie = B.componentStyle, de = B.defaultProps, we = B.foldedComponentIds, qe = B.styledComponentId, ae = B.target, Se = zt.useContext(ag), Ke = wr(), je = B.shouldForwardProp || Ke.shouldForwardProp;
      _.NODE_ENV !== "production" && so(qe);
      var Oe = ox(U, Se, de) || Gn, pe = function(tn, Le, st) {
        var Je = {};
        Je.className = void (-2769 + 2323 * 3 + -4200), Je.theme = st;
        for (var Ot, gt = Pe(Pe({}, Le), Je), et = -7310 + 67 * -111 + 1 * 14747; et < tn.length; et += -1462 + 1703 * 3 + -3646 * 1) {
          var Vt = Zn(Ot = tn[et]) ? Ot(gt) : Ot;
          for (var tt in Vt) gt[tt] = tt === "className" ? Ft(gt[tt], Vt[tt]) : tt === "style" ? Pe(Pe({}, gt[tt]), Vt[tt]) : Vt[tt];
        }
        return Le.className && (gt.className = Ft(gt.className, Le.className)), gt;
      }(z, U, Oe), Ge = pe.as || ae, Ve = {};
      for (var fe in pe) void (-9992 + 71 * 31 + 7791) === pe[fe] || fe[0] === "$" || fe === "as" || fe === "theme" && pe.theme === Oe || (fe === "forwardedAs" ? Ve.as = pe.forwardedAs : je && !je(fe, Ge) || (Ve[fe] = pe[fe], je || _.NODE_ENV !== "development" || Qc(fe) || ks.has(fe) || !Ar.has(Ge) || (ks.add(fe), console.warn('styled-components: it looks like an unknown prop "'.concat(fe, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Ze = function(tn, Le) {
        var st = wr(), Je = tn.generateAndInjectStyles(Le, st.styleSheet, st.stylis);
        return _.NODE_ENV !== "production" && so(Je), Je;
      }(Ie, pe);
      _.NODE_ENV !== "production" && B.warnTooManyClasses && B.warnTooManyClasses(Ze);
      var Ee = Ft(we, qe);
      return Ze && (Ee += " " + Ze), pe.className && (Ee += " " + pe.className), Ve[_o(Ge) && !Ar.has(Ge) ? "class" : "className"] = Ee, Ve.ref = ue, ke(Ge, Ve);
    }(R, P, D);
  }
  W.displayName = u;
  var R = zt.forwardRef(W), J = {};
  return J.attrs = !0, J.componentStyle = !0, J.displayName = !0, J.foldedComponentIds = !0, J.shouldForwardProp = !0, J.styledComponentId = !0, J.target = !0, R.attrs = m, R.componentStyle = S, R.displayName = u, R.shouldForwardProp = y, R.foldedComponentIds = e ? Ft(n.foldedComponentIds, n.styledComponentId) : "", R.styledComponentId = f, R.target = e ? n.target : i, Object.defineProperty(R, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(P) {
    this._foldedDefaultProps = e ? function(D) {
      for (var B = [], U = 2390 + -5127 * -1 + -7516; U < arguments.length; U++) B[U - 1] = arguments[U];
      for (var ue = -6977 * 1 + 1886 * -1 + 8863 * 1, z = B; ue < z.length; ue++) yr(D, z[ue], !0);
      return D;
    }({}, n.defaultProps, P) : P;
  } }), _.NODE_ENV !== "production" && (ix(u, f), R.warnTooManyClasses = /* @__PURE__ */ function(P, D) {
    var B = {}, U = !1;
    return function(ue) {
      if (!U && (B[ue] = !0, Object.keys(B).length >= -4 * 1114 + 1282 + 3374)) {
        var z = D ? ' with the id of "'.concat(D, '"') : "";
        console.warn("Over ".concat(1 * 8391 + 8102 + -1 * 16293, " classes were generated for component ").concat(P).concat(z, `.
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
  }(u, f)), la(R, function() {
    return ".".concat(R.styledComponentId);
  }), r && q0(R, i, J), R;
}
function Ks(i, o) {
  for (var t = [i[-6679 + 1605 * -1 + 8284]], e = 9212 + 3782 * 1 + -12994, n = o.length; e < n; e += -2317 * 3 + 14 * -77 + 8030) t.push(o[e], i[e + 1]);
  return t;
}
var Os = function(i) {
  var o = {};
  return o.isCss = !0, Object.assign(i, o);
};
function sg(i) {
  for (var o = [], t = -5 * 1794 + 7140 + 1831; t < arguments.length; t++) o[t - (6 * -996 + 2 * -561 + 7099)] = arguments[t];
  if (Zn(i) || Hn(i)) return Os(Jt(Ks(Ho, yn([i], o, !0))));
  var e = i;
  return 18 * -148 + -1420 + 4084 * 1 === o.length && e.length === 1 && typeof e[-43 * 85 + -5574 + 9229] == "string" ? Jt(e) : Os(Jt(Ks(e, o)));
}
function Sr(i, o, t) {
  if (void (-11 * 852 + 6712 + 2660) === t && (t = Gn), !o) throw Vn(2856 * 3 + 67 * -41 + -5820, o);
  var e = function(n) {
    for (var r = [], a = -1 * -6197 + 1301 + 2499 * -3; a < arguments.length; a++) r[a - (5145 + 5144 * -1)] = arguments[a];
    return i(o, t, sg.apply(void (3851 + 1 * -3851), yn([n], r, !1)));
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
_.NODE_ENV !== "production" && _.NODE_ENV !== "test" && typeof window < "u" && (window[Li] || (window[Li] = 4362 + 409 * -11 + -1 * -137), window[Li] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Li] += -4 * 825 + 21 * -185 + 7186);
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
j(Ig, "contextType", Wo);
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
  const [e, n] = Ne(), r = e !== void (64 * 32 + 835 * -5 + 2127);
  he(() => {
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
  return o !== void (8295 + -1659 * 5) && !o.isAnalyticsDisabled ? i : void (-679 * -13 + 1 * 2287 + -11114);
}
function tu({ analytics: i, appKey: o, appTier: t, licenseResult: e, licenseValidator: n }) {
  const r = {};
  r.analytics = i, r.licenseResult = e;
  const a = eu(r);
  return he(() => {
    a && a.init(o);
  }, [a, o]), he(() => {
    e && (console.info("Analytics is " + (e.isAnalyticsDisabled ? "disabled" : "enabled")), a && a.sendLicenseResultData(t, n.getCustomerName()));
  }, [a, n, e, t]), he(() => {
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
const iu = -197 + -1 * 3609 + 3806 + 0.4, ou = 2 * -4710 + 7084 + 2336 + 0.16, ru = -317 * 15 + -553 * 13 + -4 * -2986 + 0.2, au = -6 * -821 + -1 * 5270 + 1 * 344 + 0.05, su = 8704 * -1 + -5 * 1793 + -17669 * -1, Wr = {};
Wr.min = -(9313 + -2669 * -1 + -11981), Wr.max = 1;
const Ts = Wr, Rs = 9096 + -2 * 4548, gu = -651 * -11 + -5 * 37 + -6976 + 0.3, cu = 4985 + -47 * -158 + -4137 * 3 + 0.2, lu = -8647 + 2 * 4478 + -309 + 0.85, xu = -2222 * -2 + 2229 + -6643, uu = -2130 * -2 + 5349 + -9600 + 0.8100000000000005, to = {};
to.minDuration = 1e3, to.maxDuration = 2500, to.minFrames = 10;
const er = to, kr = {};
kr.max = 100, kr.min = 10;
const Ps = kr, Iu = -257 * -1 + 1 * -586 + -1049 * -1, du = -2602 + -1 * -2473 + -329 * -1, Cu = -4313 + -9766 * 1 + -14083 * -1, hg = "AES-CBC", pg = "RSA-OAEP", hu = "SHA-256", pu = "image/jpeg", fu = 6287 + -17 * 96 + 4647 * -1, mu = 9 * -734 + 3 * -3089 + 15913, Au = "SAM v1.39.3 for idcards", bu = "dot_embedded_bg.wasm";
let Q;
const mt = new Array(-207 * -46 + -5619 * 1 + -3775).fill(void 0);
mt.push(void 0, null, !0, !1);
function Kr(i) {
  return mt[i];
}
let vt = 2383 * 1 + 4925 + -7308, jn = null;
function no() {
  return (jn === null || jn.byteLength === -128 * -17 + -7 * -962 + -8910) && (jn = new Uint8Array(Q.memory.buffer)), jn;
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
    const s = io.encode(i), g = o(s.length, -3316 * -3 + 4392 + 1 * -14339) >>> 2299 + -7011 * 1 + 4712;
    return no().subarray(g, g + s.length).set(s), vt = s.length, g;
  }
  let e = i.length, n = o(e, -2 * 743 + 893 * -2 + 1091 * 3) >>> -2648 + -2162 * 4 + 11296;
  const r = no();
  let a = -1196 + -1167 * 6 + -1 * -8198;
  for (; a < e; a++) {
    const s = i.charCodeAt(a);
    if (s > 16025 + -1 * 15898) break;
    r[n + a] = s;
  }
  if (a !== e) {
    a !== 0 && (i = i.slice(a)), n = t(n, e, e = a + i.length * 3, 3412 + -1 * 8097 + -6 * -781) >>> -6505 + 324 * 3 + -11 * -503;
    const s = no().subarray(n + a, n + e), g = yu(i, s);
    a += g.written;
  }
  return vt = a, n;
}
function fg(i) {
  return i == null;
}
let Jn = null;
function Ht() {
  return (Jn === null || Jn.byteLength === -650 * -11 + -1 * 6774 + -376) && (Jn = new Int32Array(Q.memory.buffer)), Jn;
}
let qn = mt.length;
function vu(i) {
  i < 1754 * -1 + 3 * -759 + -1 * -4163 || (mt[i] = qn, qn = i);
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
  return i = i >>> -1 * 7459 + -8109 + 1112 * 14, Ag.decode(no().subarray(i, i + o));
}
function Er(i) {
  qn === mt.length && mt.push(mt.length + (7464 + -1 * 7873 + 205 * 2));
  const o = qn;
  return qn = mt[o], mt[o] = i, o;
}
let Un = null;
function bg() {
  return (Un === null || Un.byteLength === 19 * 509 + 4093 + -62 * 222) && (Un = new Uint32Array(Q.memory.buffer)), Un;
}
function Ns(i, o) {
  const t = o(i.length * 4, 4) >>> 0, e = bg();
  for (let n = 9385 + -1877 * 5; n < i.length; n++)
    e[t / 4 + n] = Er(i[n]);
  return vt = i.length, t;
}
function Ls(i, o) {
  i = i >>> 2117 * 1 + -3683 + 1566;
  const t = bg(), e = t.subarray(i / (8537 * 1 + -13 * -321 + -12706 * 1), i / (4313 * -2 + 1 * 7051 + 1579 * 1) + o), n = [];
  for (let r = 7801 * 1 + -1477 * 4 + -1893; r < e.length; r++)
    n.push(mg(e[r]));
  return n;
}
function wu(i, o) {
  const t = uo(i, Q.__wbindgen_malloc, Q.__wbindgen_realloc), e = vt, n = uo(o, Q.__wbindgen_malloc, Q.__wbindgen_realloc), r = vt, a = Q.validate_license(t, e, n, r);
  return Ia.__wrap(a);
}
class Ia {
  static __wrap(o) {
    o = o >>> -90 * 97 + 3768 + -1654 * -3;
    const t = Object.create(Ia.prototype);
    return t.__wbg_ptr = o, t;
  }
  __destroy_into_raw() {
    const o = this.__wbg_ptr;
    return this.__wbg_ptr = 0, o;
  }
  free() {
    const o = this.__destroy_into_raw();
    Q.__wbg_licensevalidationresult_free(o);
  }
  constructor(o, t, e, n) {
    var r = fg(t) ? 0 : uo(t, Q.__wbindgen_malloc, Q.__wbindgen_realloc), a = vt;
    const s = Ns(e, Q.__wbindgen_malloc), g = vt, x = Ns(n, Q.__wbindgen_malloc), C = vt, u = Q.licensevalidationresult_new(o, r, a, s, g, x, C);
    return this.__wbg_ptr = u >>> 154 * -53 + 277 * 34 + 157 * -8, this;
  }
  get is_valid() {
    return Q.licensevalidationresult_is_valid(this.__wbg_ptr) !== -3 * 1262 + -9724 + 13510;
  }
  get features_json() {
    try {
      const e = Q.__wbindgen_add_to_stack_pointer(-16);
      Q.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var o = Ht()[e / (-292 + -148 * -2) + (3 * -316 + -1 * 4006 + 4954)], t = Ht()[e / (-2 * -1191 + -21 * 222 + -2 * -1142) + 1];
      let n;
      return o !== -709 * 3 + 1106 * 4 + -2297 && (n = Vr(o, t).slice(), Q.__wbindgen_free(o, t * (-3619 * 1 + -1225 * -3 + -55), 1)), n;
    } finally {
      Q.__wbindgen_add_to_stack_pointer(7734 * 1 + -3855 * 2 + -8);
    }
  }
  get errors() {
    try {
      const n = Q.__wbindgen_add_to_stack_pointer(-16);
      Q.licensevalidationresult_errors(n, this.__wbg_ptr);
      var o = Ht()[n / (-14185 + -2027 * -7) + (-5301 + 8 * 656 + 1 * 53)], t = Ht()[n / 4 + 1], e = Ls(o, t).slice();
      return Q.__wbindgen_free(o, t * (-7689 + 2334 * -3 + -1 * -14695), 23 * -82 + -6334 + -8224 * -1), e;
    } finally {
      Q.__wbindgen_add_to_stack_pointer(7 * 738 + -5746 + 596);
    }
  }
  get warnings() {
    try {
      const n = Q.__wbindgen_add_to_stack_pointer(-16);
      Q.licensevalidationresult_warnings(n, this.__wbg_ptr);
      var o = Ht()[n / (-1 * -9820 + 9711 + -19527) + (9789 + 5749 * 1 + -15538)], t = Ht()[n / (75 + -5 * -1307 + -6606) + 1], e = Ls(o, t).slice();
      return Q.__wbindgen_free(o, t * (-5 * 1606 + -4562 + 12596), 1213 * 1 + -8095 * -1 + -9304), e;
    } finally {
      Q.__wbindgen_add_to_stack_pointer(-145 * 29 + 9793 + -5572);
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
    var r = fg(n) ? 2230 * -2 + 6864 + -2404 : uo(n, Q.__wbindgen_malloc, Q.__wbindgen_realloc), a = vt;
    Ht()[o / (4 * 389 + 2422 + 2 * -1987) + (4225 + -3511 * -1 + 65 * -119)] = a, Ht()[o / (-2354 * 1 + -4848 + -1201 * -6) + (-5467 + -71 * -77)] = r;
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
    j(this, "wasmInitialized", !1);
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
    j(this, "name", "SkipLicenseValidationError");
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
    return X(this, mn);
  }
  get isAnalyticsDisabled() {
    var o, t;
    return !!((t = (o = X(this, mn)) == null ? void 0 : o.features) != null && t["realTimeTransactionReportingDisabled"]);
  }
}
mn = new WeakMap();
class Hu {
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
      this.license = void (16600 + -2075 * 8), console.error(t);
    }
  }
  async loadLicense(o) {
    if (this.licenseResult = void (-9142 * 1 + 8996 + 146), !o) {
      console.info("No DOT license provided."), this.license = void 0;
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
      t.is_valid = !1, t.errors = [], t.warnings = [], t.features_json = void (-7528 + 1882 * 4), t.free = function() {
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
j(mo, "_instance");
let Tr = mo;
const vg = (i, o) => {
  const t = at(o);
  he(() => {
    t.current = o;
  }, [o]), he(() => {
    const e = (n) => t.current(n);
    return document.addEventListener(i, e), () => {
      document.removeEventListener(i, e);
    };
  }, [i]);
};
var Wu = Symbol.for("preact-signals");
function da() {
  if (fn > 4936 * 2 + -1073 + -4399 * 2)
    fn--;
  else {
    for (var i, o = !1; void (-9061 * -1 + -6733 * -1 + -15794) !== ei; ) {
      var t = ei;
      for (ei = void (-1 * -2256 + -1563 * 1 + -693), Rr++; void (-910 * 7 + 1 * 1837 + -4533 * -1) !== t; ) {
        var e = t.o;
        if (t.o = void (331 * -23 + 13 * -289 + 1 * 11370), t.f &= -(-13 * -25 + 11 * 781 + 2971 * -3), !(2222 + -2 * -1013 + -1 * 4240 & t.f) && Bg(t)) try {
          t.c();
        } catch (n) {
          !o && (i = n, o = !0);
        }
        t = e;
      }
    }
    if (Rr = 1011 * -4 + -7 * 145 + 5059, fn--, o) throw i;
  }
}
var te = void (-265 * -18 + -5436 + 333 * 2), ei = void (-17 * -199 + 3405 + -4 * 1697), fn = 0, Rr = 4313 + -2 * -4051 + -12415, Io = 0;
function wg(i) {
  if (void (-3428 * -1 + 6583 * -1 + -1 * -3155) !== te) {
    var o = i.n;
    if (o === void 0 || o.t !== te)
      return o = { i: 0, S: i, p: te.s, n: void 0, t: te, e: void (-5 * -1294 + -2070 + -88 * 50), x: void (-699 * 2 + 805 * -8 + 7838), r: o }, void (-5658 + 1 * -7419 + -9 * -1453) !== te.s && (te.s.n = o), te.s = o, i.n = o, 1527 * 6 + 43 * 223 + -18719 & te.f && i.S(o), o;
    if (-(-28 * -352 + -2593 * -3 + 17634 * -1) === o.i)
      return o.i = -9744 + -1 * -8287 + -1457 * -1, o.n !== void 0 && (o.n.p = o.p, void (4854 + 2427 * -2) !== o.p && (o.p.n = o.n), o.p = te.s, o.n = void 0, te.s.n = o, te.s = o), o;
  }
}
function ve(i) {
  this.v = i, this.i = 88 * -34 + -9469 * 1 + 12461, this.n = void (1 * 7254 + 10 * 541 + 6332 * -2), this.t = void (5652 + -17 * -337 + -11381);
}
ve.prototype.brand = Wu, ve.prototype.h = function() {
  return !(25 * 381 + 7918 + -17443);
}, ve.prototype.S = function(i) {
  this.t !== i && i.e === void 0 && (i.x = this.t, void (7028 + 41 * -53 + 971 * -5) !== this.t && (this.t.e = i), this.t = i);
}, ve.prototype.U = function(i) {
  if (void (-11 * 471 + -15 * 9 + 6 * 886) !== this.t) {
    var o = i.e, t = i.x;
    void (-2819 + -2819 * -1) !== o && (o.x = t, i.e = void (7551 * -1 + -8544 + 16095)), void (-6106 + 71 * 86) !== t && (t.e = o, i.x = void (-3164 + -324 * -7 + 224 * 4)), i === this.t && (this.t = t);
  }
}, ve.prototype.subscribe = function(i) {
  var o = this;
  return ha(function() {
    var t = o.value, e = te;
    te = void (-23 * -267 + 3956 + 1 * -10097);
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
  te = void (-1019 * -5 + 4695 * -1 + -400);
  try {
    return this.value;
  } finally {
    te = i;
  }
}, Object.defineProperty(ve.prototype, "value", { get: function() {
  var i = wg(this);
  return void (-9473 + -3 * -617 + 3811 * 2) !== i && (i.i = this.i), this.v;
}, set: function(i) {
  if (i !== this.v) {
    if (Rr > 100) throw new Error("Cycle detected");
    this.v = i, this.i++, Io++, fn++;
    try {
      for (var o = this.t; void (2 * 2671 + 3173 + -1 * 8515) !== o; o = o.x) o.t.N();
    } finally {
      da();
    }
  }
} });
function Sg(i) {
  return new ve(i);
}
function Bg(i) {
  for (var o = i.s; void (-2588 + 364 * 16 + 3236 * -1) !== o; o = o.n) if (o.S.i !== o.i || !o.S.h() || o.S.i !== o.i) return !(179 + -4 * 1741 + 6785);
  return !1;
}
function Gg(i) {
  for (var o = i.s; void (6876 + -6 * 1146) !== o; o = o.n) {
    var t = o.S.n;
    if (void (6 * -1364 + 9178 + -994 * 1) !== t && (o.r = t), o.S.n = o, o.i = -1, void (-4 * 2239 + -1232 + 18 * 566) === o.n) {
      i.s = o;
      break;
    }
  }
}
function Zg(i) {
  for (var o = i.s, t = void (-1 * -1487 + -1137 * -3 + 31 * -158); void (5153 + 119 * 5 + -5748) !== o; ) {
    var e = o.p;
    o.i === -1 ? (o.S.U(o), void (-4 * 1644 + 1 * -895 + 7471) !== e && (e.n = o.n), void (7647 + 3 * -2549) !== o.n && (o.n.p = e)) : t = o, o.S.n = o.r, o.r !== void 0 && (o.r = void (-1713 + -1 * 3227 + 5 * 988)), o = e;
  }
  i.s = t;
}
function dn(i) {
  ve.call(this, void (-8419 + -607 * -1 + 1116 * 7)), this.x = i, this.s = void (369 + -369 * 1), this.g = Io - (-1 * -2113 + 9206 * -1 + 7094), this.f = -6143 * 1 + 3881 + 2266;
}
(dn.prototype = new ve()).h = function() {
  if (this.f &= -(25 * -89 + 2474 * -1 + -2351 * -2), 6676 * 1 + 5095 + -10 * 1177 & this.f) return !(6032 + -5090 * 1 + -1 * 941);
  if (-874 + -453 * -2 == (-9 * 9 + 1486 + 1369 * -1 & this.f)) return !(-4581 + -115 * 70 + 12631 * 1);
  if (this.f &= -(9731 * 1 + -1265 * -5 + -16051), this.g === Io) return !(-8989 * -1 + 1683 + -10672);
  if (this.g = Io, this.f |= -5806 + -1 * -5807, this.i > 0 && !Bg(this)) return this.f &= -(-1764 + 2 * 883), !(-3 * -1663 + 2880 + -7869);
  var i = te;
  try {
    Gg(this), te = this;
    var o = this.x();
    (16 & this.f || this.v !== o || 3021 + 2209 * 1 + -5230 === this.i) && (this.v = o, this.f &= -(19 * -127 + -9697 + 12127), this.i++);
  } catch (t) {
    this.v = t, this.f |= 16, this.i++;
  }
  return te = i, Zg(this), this.f &= -(-2965 + 9649 * -1 + 12616), !(-677 * 13 + 1921 + 6880);
}, dn.prototype.S = function(i) {
  if (void (-4088 + -2348 * 1 + 6436) === this.t) {
    this.f |= 36;
    for (var o = this.s; void (-8 * 963 + -1 * 870 + 1 * 8574) !== o; o = o.n) o.S.S(o);
  }
  ve.prototype.S.call(this, i);
}, dn.prototype.U = function(i) {
  if (void (66 * -99 + 1 * 8757 + 39 * -57) !== this.t && (ve.prototype.U.call(this, i), void (-9620 + 127 * 10 + 8350) === this.t)) {
    this.f &= -(5 * 1607 + 216 * -45 + 1718);
    for (var o = this.s; void (432 * 1 + 13 * -169 + 1765) !== o; o = o.n) o.S.U(o);
  }
}, dn.prototype.N = function() {
  if (!(-9229 + 1 * 6551 + 2 * 1340 & this.f)) {
    this.f |= -51 * -184 + -25 * -233 + -15203;
    for (var i = this.t; void (4219 * 1 + -7410 + -3191 * -1) !== i; i = i.x) i.t.N();
  }
}, Object.defineProperty(dn.prototype, "value", { get: function() {
  if (-4877 + 211 * 4 + 1 * 4034 & this.f) throw new Error("Cycle detected");
  var i = wg(this);
  if (this.h(), void (7004 + 13 * 629 + -17 * 893) !== i && (i.i = this.i), -1 * -4243 + 4312 + 8539 * -1 & this.f) throw this.v;
  return this.v;
} });
function ku(i) {
  return new dn(i);
}
function Hg(i) {
  var o = i.u;
  if (i.u = void (1 * 1218 + -2 * 1162 + 1106), typeof o == "function") {
    fn++;
    var t = te;
    te = void (-7956 + -36 * -221);
    try {
      o();
    } catch (e) {
      throw i.f &= -2, i.f |= 1 * -7066 + 4133 + -17 * -173, Ca(i), e;
    } finally {
      te = t, da();
    }
  }
}
function Ca(i) {
  for (var o = i.s; void (4921 + -4 * 551 + 209 * -13) !== o; o = o.n) o.S.U(o);
  i.x = void (1 * -1151 + 43 * 7 + -10 * -85), i.s = void (1037 * 4 + 1548 + -4 * 1424), Hg(i);
}
function Ku(i) {
  if (te !== this) throw new Error("Out-of-order effect");
  Zg(this), te = i, this.f &= -(-1429 * -2 + -9308 + 6452), 8 & this.f && Ca(this), da();
}
function zn(i) {
  this.x = i, this.u = void 0, this.s = void (4846 * 1 + 9532 + -14378), this.o = void (-9627 + 3209 * 3), this.f = -13 * 364 + -213 + 4977;
}
zn.prototype.c = function() {
  var i = this.S();
  try {
    if (-4099 * 1 + -87 * 1 + 4194 & this.f || void (-13439 + -151 * -89) === this.x) return;
    var o = this.x();
    typeof o == "function" && (this.u = o);
  } finally {
    i();
  }
}, zn.prototype.S = function() {
  if (8 * 544 + -3 * 167 + -3850 & this.f) throw new Error("Cycle detected");
  this.f |= 1035 * 1 + 1 * 9293 + -10327, this.f &= -(347 * -23 + -8446 + 16436), Hg(this), Gg(this), fn++;
  var i = te;
  return te = this, Ku.bind(this, i);
}, zn.prototype.N = function() {
  !(2 & this.f) && (this.f |= 1575 + 1 * -1573, this.o = ei, ei = this);
}, zn.prototype.d = function() {
  this.f |= 1 * -3017 + -8003 + 11028, -68 * -113 + 587 * 11 + -3535 * 4 & this.f || Ca(this);
};
function ha(i) {
  var o = new zn(i);
  try {
    o.c();
  } catch (t) {
    throw o.d(), t;
  }
  return o.d.bind(o);
}
var nr;
function pn(i, o) {
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
      r.__c.__$f |= 16792 + 4 * -4197;
      break;
    }
    return o.__$u.c = function() {
      var a;
      !x0(n.peek()) && -6703 * -1 + 9258 + 15958 * -1 === ((a = o.base) == null ? void (-3 * -936 + -7765 + 1 * 4957) : a.nodeType) ? o.base.data = n.peek() : (o.__$f |= -5 * 141 + -197 * 30 + 6616, o.setState({}));
    }, ku(function() {
      var a = e.value.value;
      return 8011 + 2 * -2758 + 1 * -2495 === a ? 6389 * -1 + 4 * -1232 + 11317 : !(-20 * -395 + -7643 + -257) === a ? "" : a || "";
    });
  }, []);
  return n.value;
}
Wg.displayName = "_st";
var Pr = {};
Pr.configurable = !0, Pr.value = void (-3 * -2939 + 2377 + -11194);
var Nr = {};
Nr.configurable = !0, Nr.value = Wg;
var Lr = {};
Lr.configurable = !(-4600 + 691 * 7 + -237), Lr.get = function() {
  var i = {};
  return i.data = this, i;
};
var Dr = {};
Dr.configurable = !(659 * -11 + -1 * 5702 + 12951), Dr.value = 1;
var Fn = {};
Fn.constructor = Pr, Fn.type = Nr, Fn.props = Lr, Fn.__b = Dr, Object.defineProperties(ve.prototype, Fn), pn("__b", function(i, o) {
  if (typeof o.type == "string") {
    var t, e = o.props;
    for (var n in e) if (n !== "children") {
      var r = e[n];
      r instanceof ve && (t || (o.__np = t = {}), t[n] = r, e[n] = r.peek());
    }
  }
  i(o);
}), pn("__r", function(i, o) {
  Di();
  var t, e = o.__c;
  e && (e.__$f &= -(2485 + -13 * 191), void (-786 + -591 * -3 + 987 * -1) === (t = e.__$u) && (e.__$u = t = function(n) {
    var r;
    return ha(function() {
      r = this;
    }), r.c = function() {
      e.__$f |= -7052 + 2741 * -2 + 23 * 545, e.setState({});
    }, r;
  }())), Di(t), i(o);
}), pn("__e", function(i, o, t, e) {
  Di(), i(o, t, e);
}), pn("diffed", function(i, o) {
  Di();
  var t;
  if (typeof o.type == "string" && (t = o.__e)) {
    var e = o.__np, n = o.props;
    if (e) {
      var r = t.U;
      if (r) for (var a in r) {
        var s = r[a];
        void (-570 + 10 * 57) !== s && !(a in e) && (s.d(), r[a] = void (4395 + -2 * -593 + -5581));
      }
      else t.U = r = {};
      for (var g in e) {
        var x = r[g], C = e[g];
        void (1 * 8810 + -5728 + 46 * -67) === x ? (x = Ou(t, g, C, n), r[g] = x) : x.o(C, n);
      }
    }
  }
  i(o);
});
function Ou(i, o, t, e) {
  var n = o in i && i.ownerSVGElement === void 0, r = Sg(t);
  return { o: function(a, s) {
    r.value = a, e = s;
  }, d: ha(function() {
    var a = r.value.value;
    e[o] !== a && (e[o] = a, n ? i[o] = a : a ? i.setAttribute(o, a) : i.removeAttribute(o));
  }) };
}
pn("unmount", function(i, o) {
  if (typeof o.type == "string") {
    var t = o.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void (1919 * -1 + -52 * 94 + 6807);
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
      s && (a.__$u = void 0, s.d());
    }
  }
  i(o);
}), pn("__h", function(i, o, t, e) {
  (e < -8 * -229 + -3209 + 1380 || -24 * 346 + -34 * 202 + -893 * -17 === e) && (o.__$f |= -4393 + 27 * -107 + 7284), i(o, t, e);
}), Qe.prototype.shouldComponentUpdate = function(i, o) {
  var t = this.__$u;
  if (!(t && void (8468 + -1 * -3271 + -11739) !== t.s || -1 * -1440 + -32 * -254 + -9564 & this.__$f)) return !(271 + -4501 * -2 + -33 * 281);
  if (8455 + 36 * 21 + -1 * 9208 & this.__$f) return !0;
  for (var e in o) return !(-2253 + -71 * 71 + -1 * -7294);
  for (var n in i) if (n !== "__source" && i[n] !== this.props[n]) return !(-764 + -382 * -2);
  for (var r in this.props) if (!(r in i)) return !(-106 * 16 + 5228 + 883 * -4);
  return !(-392 + -563 * -17 + -9178);
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
const Tu = (i, o, t = pu) => new Promise((e) => {
  i.toBlob((n) => {
    if (!n) throw new Error("Canvas to Blob failed");
    e(n);
  }, t, o);
}), kg = async (i) => Tu(i, 2467 * 3 + 3068 + 10379 * -1), Ru = (i, o) => {
  const t = document.createElement("canvas");
  t.width = o.width, t.height = o.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(i, o.shiftX, o.shiftY, o.width, o.height, 2545 + -7902 * -1 + -1 * 10447, 7715 + -1543 * 5, t.width, t.height), t;
}, Pu = (i) => {
  const o = i.getContext("2d");
  if (!o) throw new Error("getImageDataForSam ctx error");
  const { data: t } = o.getImageData(8617 * 1 + -257 * 24 + -2449, 0, i.width, i.height);
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
  n && (n.fillStyle = t, n.fillRect(o.x + e, o.y + e, -577 * 4 + 7105 + 5 * -958, -3 * -2126 + 8 * -93 + -17 * 331), n.beginPath());
}, Nu = (i, o) => {
  const t = i.getContext("2d");
  t && t.drawImage(o, -1639 * 3 + 239 * 7 + 3244, 4391 * 1 + -952 + -181 * 19);
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
}, Fu = -2548 + -4 * -637 + 0.75, Yu = -2147 * 2 + -3 * -191 + 3723, Xu = 5838 * -1 + -43 * 185 + 14393, Mu = -3783 * 1 + 2 * -2326 + -241 * -35, Eg = (i, o) => {
  const t = {};
  t.detail = o, document.dispatchEvent(new CustomEvent(i, t));
}, Ao = class Ao {
  constructor() {
    j(this, "lastDetails", {});
    j(this, "delayedTime", -4158 + -1867 * -1 + -1 * -2291);
  }
  static getInstance() {
    return !this._instance && (this._instance = new Ao()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 930 + 3 * -310;
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
j(Ao, "_instance");
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
Fe.VITE_FACE_COUNTLY_APP_KEY = "5f83e83ee4cee1ab6e5bbf86e215644473299675", Fe.VITE_MAGNIFEYE_COUNTLY_APP_KEY = "d5ca54dabfb1a2c72d7090c9c8980252a879da44", Fe.VITE_DOCUMENT_COUNTLY_APP_KEY = "065cf6e242fc5e785cd17eebfbfbbd212a33133b", Fe.VITE_COUNTLY_URL = "https://innovatrics.count.ly", Fe.VITE_SMILE_COUNTLY_APP_KEY = "d64319129bb0ee02eccfab418edba9629a97d6b6", Fe.VITE_RSA_PUBLIC_KEY = "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", Fe.BASE_URL = "/", Fe.MODE = "production", Fe.DEV = !1, Fe.PROD = !0, Fe.SSR = !1, Fe.VITE_PACKAGE_VERSION = "6.1.2";
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
  he(() => {
    if (!t) return;
    const n = {};
    n.cameraResolution = t, n.isMirroring = e, ju(i, n);
  }, [t, e, i]);
}, Tg = (i) => i.length < -6925 + -1 * -881 + 6045 ? 182 * 41 + 8 * -926 + -27 * 2 : i.reduce((t, e) => t + e, 9 * -473 + 1 * -8703 + -15 * -864) / i.length, vi = (i) => Number.parseFloat(i.toFixed(3)), eI = (i) => {
  const o = i.getContext("2d");
  o && o.clearRect(8274 + -6 * 1379, 0, o.canvas.width, o.canvas.height);
}, ko = (i, o) => Math.min(i, o), tI = (i, o) => {
  const t = ko(o.width, o.height);
  return vi(i * t);
}, Rg = ({ height: i, width: o }) => {
  const t = ko(o, i), e = t / (31 * 304 + -535 * -7 + -13166 * 1) * (6232 + -1 * 6228);
  if (o > i) {
    const r = {};
    return r.width = e, r.height = t, r;
  }
  const n = {};
  return n.width = t, n.height = e, n;
}, Pg = ({ height: i, width: o }) => {
  const t = ko(o, i) * Fu, e = (o - t) / (9075 + 26 * -277 + -1871), n = (i - t) / (-7223 + -2729 * 2 + -1153 * -11), r = {};
  return r.shiftX = e, r.shiftY = n, r.width = t, r.height = t, r;
}, nI = (i) => {
  const { height: o, shiftX: t, shiftY: e, width: n } = Pg(i), r = {};
  return r.shiftX = t / i.width, r.shiftY = e / i.height, r.width = n / i.width, r.height = o / i.height, r;
}, iI = (i, o) => tI(i, o) * Yu, oI = "@innovatrics/dot-common-auto-capture", rI = "6.1.2", aI = {
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
const CI = (i) => i === cg.CONTROL ? !Ng() : !0, hI = (i, o) => {
  const { appState: t, handleAppStateChange: e, handleError: n, isCameraReady: r } = Tn(), [a, s] = Ne(), g = Xe(() => {
    const C = r && o && o.isStreaming && o.getCameraSettings().facingMode;
    return C ? a ?? C === "user" : a ?? CI(i);
  }, [o, a, i, r]);
  he(() => {
    const C = () => {
      t !== xt.LOADING && e(xt.RUNNING);
    }, u = () => {
      s(a === void 0 ? !g : !a);
    }, f = async () => {
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
          f();
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
    j(this, "canvasElement");
    j(this, "context");
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
  return i.getVideoTracks()[-413 * 1 + 4100 + 3 * -1229];
}
const oo = {};
oo.width = 1920, oo.height = 1080, oo.facingMode = xg.FRONT;
const pI = oo;
var nt;
class Xg {
  constructor({ defaultVideoConstrains: o = pI, minCameraShorterSide: t = Iu } = {}) {
    j(this, "options");
    ce(this, nt, null);
    const e = {};
    e.defaultVideoConstrains = o, e.minCameraShorterSide = t, this.options = e;
  }
  get mediaStream() {
    return X(this, nt);
  }
  get videoTrack() {
    return X(this, nt) ? Ms(X(this, nt)) : void (10 * -841 + -4176 + 12586);
  }
  get isCameraActive() {
    var o;
    return !!((o = X(this, nt)) != null && o.active);
  }
  static async requestPermission() {
    const o = {};
    o.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(o);
    rr(t);
  }
  async open(o = {}) {
    Ys() && await Yr(2212 + 3 * -2174 + -4 * -1190), se(this, nt, await navigator.mediaDevices.getUserMedia(o)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const o = await or();
    if (o.length <= -8059 + -8513 * 1 + -16573 * -1) return;
    const t = this.videoTrack.getConstraints(), e = this.videoTrack.getSettings(), n = o.findIndex((s) => s.deviceId === e.deviceId), r = o[n + (2868 + -1 * -9719 + -62 * 203)] ?? o[3364 + -1 * -5138 + 13 * -654], a = this.getConstraints(t, r);
    await this.open(a);
  }
  close() {
    X(this, nt) && (rr(X(this, nt)), se(this, nt, null));
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
    const o = this.getSettings(), t = await Yg(), e = t.find((n) => n.deviceId === o.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(o) {
    return o === xg.FRONT ? void (-42 * 39 + -9701 + 11339 * 1) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return Ng() ? (await or()).find((e) => e.label.includes("back") && e.label.includes("0")) : void (-23 * -307 + -3594 + -3467);
  }
  async getAvailableCamerasInfo() {
    const o = [], t = await or();
    for (const e of t) {
      Ys() && await Yr(-1 * -1357 + 1 * -2149 + 414 * 3);
      try {
        const n = {};
        n.deviceId = e.deviceId, n.width = 480;
        const r = {};
        r.video = n;
        const a = await navigator.mediaDevices.getUserMedia(r), s = Ms(a);
        if (!s) throw new Error("Video track not found! (device id: " + e.deviceId + ")");
        const g = s.getSettings(), x = { ...g };
        x.deviceName = s.label;
        const C = {};
        C.cameraProperties = x;
        const u = C;
        o.push(u), rr(a);
      } catch (n) {
        n instanceof Error && re.logError(n);
      }
    }
    return o;
  }
  getConstraints(o, t) {
    const e = { ...this.options.defaultVideoConstrains, ...o };
    e.deviceId = t ? { exact: t.deviceId } : void (-2691 * -1 + 1 * 987 + -3678);
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
class fI {
  constructor(o, t) {
    j(this, "canvas");
    this.videoHandler = o, this.cameraHandler = t, this.canvas = new Fg();
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async startVideoStream(o = {}) {
    await Xg.requestPermission();
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
    return this.canvas.canvasElement.width = o.width, this.canvas.canvasElement.height = o.height, this.canvas.context.drawImage(this.videoHandler.videoElement, -722 * 1 + 3 * 975 + -2203, 0), { image: this.canvas.canvasElement, timestamp: Date.now() };
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
var ft;
class mI {
  constructor(o) {
    ce(this, ft);
    se(this, ft, o);
  }
  get videoElement() {
    return X(this, ft);
  }
  async play(o) {
    X(this, ft).srcObject = o, await X(this, ft).play();
  }
  stop() {
    X(this, ft).srcObject = null;
  }
  hasSrcObject() {
    return !!X(this, ft).srcObject;
  }
}
ft = new WeakMap();
function AI(i, o) {
  const t = at(), { handleError: e, setIsCameraReady: n } = Tn(), [r, a] = Ne(), s = wn((x) => {
    a((C) => II(x, C));
  }, []);
  he(() => ((async () => {
    if (!i.current) {
      e(new re("Something went wrong during video initialization"));
      return;
    }
    const C = new mI(i.current), u = new Xg(), f = new fI(C, u);
    try {
      const m = {};
      m.facingMode = o, await f.startVideoStream(m);
    } catch (m) {
      if (m instanceof Error) {
        e(re.fromCameraError(m));
        return;
      }
    }
    n(!0), s(f.getCameraResolution()), t.current = f;
  })(), function() {
    t.current && t.current.stopStreaming(), n(!1);
  }), [o, e, n, i, s]);
  const g = {};
  return g.cameraService = t.current, g.cameraResolution = r, g.onCameraResolutionChange = s, g;
}
function bI(i, o) {
  he(() => {
    function t() {
      i.current && Ju(o, i.current.getBoundingClientRect());
    }
    return t(), window.addEventListener("resize", t), () => {
      window.removeEventListener("resize", t);
    };
  }, [i, o]);
}
class pa extends Array {
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
    this.length === this.size && this.splice(-1504 + -1504 * -1, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(0);
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
  const [i, o] = Ne(null), t = at(new pa(-1652 * -3 + -8207 * 1 + -3256 * -1));
  function e(r) {
    const { z: a } = r.accelerationIncludingGravity || {};
    if (!a) return;
    t.current.pushFixed(wI(a));
    const s = vi(Tg(t.current)), g = {};
    g.z = s, o(g);
  }
  he(() => (window.addEventListener("devicemotion", dI(e, mu), !0), () => {
    window.removeEventListener("devicemotion", e, !0);
  }), []);
  const n = {};
  return n.acceleration = i, n;
};
function BI({ analytics: i, cameraFacing: o, controller: t, createProtoMessage: e, onPhotoTaken: n, sessionToken: r }) {
  const a = at(null), { isLicenseValidated: s } = ua(), { appState: g, handleAppStateChange: x, handleError: C } = Tn(), { cameraResolution: u, cameraService: f, onCameraResolutionChange: m } = AI(a, o), y = Wn(void (2797 * -3 + -9161 + 17552));
  he(() => {
    f != null && f["isStreaming"] && (t != null && t["isDetectorInitialized"]) && s && x(xt.RUNNING);
  }, [f == null ? void 0 : f["isStreaming"], t == null ? void 0 : t["isDetectorInitialized"], x, s]), he(() => {
    if (g !== xt.RUNNING) return;
    if (!f || !t) throw new re("Cannot start detection");
    let K = -872 + -1 * -872, S = !1, W = 4318 + 44 * 16 + -5022;
    const R = new pa(6217 + -9149 * -1 + -15336);
    t.clearImagesForDuplicateDetection();
    async function J({ cameraService: B, canvasImage: U, controller: ue, detection: z, detectionRecord: Ie, onPhotoTaken: de }) {
      const we = {};
      we.width = U.width, we.height = U.height;
      const qe = we, ae = await kg(U), Se = await B.getCameraProperties(), Ke = { ...Se, detectionRecord: Ie, hashedDetectedImagesWithTimestamp: ue.getImagesForDuplicateDetection() }, je = {};
      je.sessionToken = r, je.web = Ke;
      const Oe = je, pe = await e(ae, Oe), Ge = {};
      Ge.detection = z, Ge.imageResolution = qe;
      const Ve = {};
      Ve.image = ae, Ve.data = Ge;
      const fe = Ve, Ze = {};
      Ze.imageData = fe, Ze.content = pe, Ze.webMetadata = Ke, Ze.controller = ue, de(Ze);
    }
    async function P({ cameraService: B, controller: U }) {
      const ue = Date.now();
      for (; B.isStreaming && !S; ) {
        if (uI(K, W)) {
          const { detection: Oe, image: pe } = U.getBestImage() || {}, Ge = U.getDetectionRecord();
          if (pe && Oe) {
            const Ve = Date.now(), fe = Tg(R), Ze = {};
            Ze.width = pe.width, Ze.height = pe.height, i == null || i.trackCaptureProcess({ detection: Oe, imageResolution: Ze, deviceName: await B.getDeviceName(), averageFps: fe, captureProcessDurationInMs: Ve - ue, facingMode: B.getCameraSettings().facingMode, instructionSet: await U.getInstructionSet() }), x(xt.WAITING);
            const Ee = {};
            Ee.cameraService = B, Ee.controller = U, Ee.canvasImage = pe, Ee.detection = Oe, Ee.detectionRecord = Ge, Ee.onPhotoTaken = n, await J(Ee), U.restart();
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
        const qe = Date.now(), ae = qe - z.timestamp, Se = vi((-12 * -607 + 14 * -202 + -36 * 96) / ae);
        R.pushFixed(Se);
        const Ke = {};
        Ke.processedImage = we, Ke.detectionTime = ae, Ke.fps = Se, Ke.resolution = de, Ke.samVersion = U.samVersion;
        const je = Ke;
        y.value = je, we.isInCandidateSelection && (K === -5 * 1166 + -7805 + 303 * 45 && (K = performance.now()), W++), m(de), await Yr(Math.max(Ps.max - ae, Ps.min));
      }
    }
    const D = {};
    return D.controller = t, D.cameraService = f, P(D), () => {
      S = !0;
    };
  }, [i, e, g, f, t, x, C, n, m, y, r]);
  const G = {};
  return G.videoRef = a, G.cameraResolution = u, G.cameraService = f, G.detectionDetails = y, G;
}
const fa = (i) => {
  const { height: o, width: t } = Rg(i), e = (i.width - t) / (-9770 + -1 * -4519 + 5253), n = (i.height - o) / 2, r = {};
  return r.shiftX = e, r.shiftY = n, r.width = t, r.height = o, r;
}, Mg = (i, o) => {
  const { height: t, width: e } = Rg(i), n = ko(i.width, i.height), r = e - n * o * 2, a = t - n * o * (-1 * -6610 + -7692 + 1084), s = (i.width - r) / (5588 + -4 * -1893 + -13158), g = (i.height - a) / (1 * -4397 + 8724 * 1 + 1 * -4325), x = {};
  return x.shiftX = s, x.shiftY = g, x.width = r, x.height = a, x;
}, xn = (i, o) => {
  const { shiftX: t, shiftY: e } = fa(i), n = {};
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
  if (he(() => {
    if (!r.current)
      return;
    r.current.width = o.width, r.current.height = o.height, eI(r.current);
    const y = fa(o), G = Mg(o, n.outOfBoundsThreshold), K = Pg(o);
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
    samVersion: f
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
    "Component version": "6.1.2"
  };
  return f && (m["SAM version"] = f), C.length > 0 && (m["Invalid validators"] = C.join(", ")), /* @__PURE__ */ H(
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
      var f;
      if (!((f = i.current) != null && f["parentElement"])) return;
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
const TI = async () => WebAssembly.validate(new Uint8Array([-3 * -1669 + -3250 + -1757, 97, -4696 + 73 * -58 + 9045 * 1, -5834 + -3 * -1981, -6151 + -7291 * -1 + -1139, 10896 + -5448 * 2, -3 * -3169 + -2 * -4857 + 19221 * -1, 8140 + -8140 * 1, -2 * 1116 + 7 * 724 + -2835, -8093 + 1 * -9084 + 71 * 242, 2571 + 1 * -9563 + -333 * -21, 1951 + 4 * 2137 + -101 * 103, 2577 + 8914 * 1 + 11491 * -1, 1, 123, 6793 + -2 * -2386 + -41 * 282, 1 * -5567 + -1772 * -1 + 3797, 10 * 822 + -1964 * -4 + -16075, -7775 + -6 * 614 + -1637 * -7, -2890 + -145 * -20, 70 * 136 + 4407 + -13917, -11584 + -7 * -1655, 8, 0, 65, -1 * -2153 + -8542 + 6389, 1 * -4679 + -6880 + -4 * -2953, 10675 + -1066 * 10, -6247 + -65 * -100, -155 * 60 + 1 * 9749 + -351, -2351 * 3 + -9949 + 17013]));
async function RI() {
  const i = {};
  i.name = hg, i.length = 256;
  const o = await window.crypto.subtle.generateKey(i, !0, ["encrypt", "decrypt"]), t = Uint8Array.from(Array(7030 + 218 * -39 + -3 * -496).fill(5509 + 7 * 1195 + 2 * -6937)), e = window.crypto.getRandomValues(t), n = {};
  return n.key = o, n.iv = e, n;
}
async function PI(i) {
  const { iv: o, key: t } = await RI(), e = {};
  e.name = hg, e.iv = o;
  const n = await window.crypto.subtle.encrypt(e, t, i), r = await window.crypto.subtle.exportKey("raw", t), a = {};
  return a.message = n, a.key = r, a.iv = o, a;
}
function NI(i) {
  const o = new ArrayBuffer(i.length), t = new Uint8Array(o);
  for (let e = 0, n = i.length; e < n; e++)
    t[e] = i.charCodeAt(e);
  return o;
}
function LI() {
  const i = "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", o = window.atob(i), t = window.atob(o), e = NI(t), n = {};
  return n.name = pg, n.hash = hu, window.crypto.subtle.importKey("spki", e, n, !0, ["encrypt"]);
}
async function DI(i) {
  const o = await LI(), t = {};
  return t.name = pg, window.crypto.subtle.encrypt(t, o, i);
}
async function FI(i) {
  const { iv: o, key: t, message: e } = await PI(i), n = await DI(t), r = {};
  return r.key = n, r.iv = o, r.message = e, r;
}
async function YI(i) {
  const o = await window.crypto.subtle.digest("SHA-1", i);
  return Array.from(new Uint8Array(o)).map((t) => t.toString(16).padStart(-335 * -14 + -6176 + 1488, "0")).join("");
}
class XI {
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
    j(this, "imagesWithTimestampForDuplicateDetection", new pa(du));
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
    const e = o.length / fu, n = e / (-3 * -3106 + 2232 * 2 + -13780), r = o.length / 2, a = await YI(o.slice(r - n, r + n)), s = {};
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
    var s = "./this.program", g = !(-439 + -1 * 83 + 1 * 523), x = !(-25 * -231 + 1 * -8476 + 2702);
    g = typeof window == "object", x = typeof importScripts == "function";
    var C = "", u;
    (g || x) && (x ? C = self.location.href : document.currentScript && (C = document.currentScript.src), i && (C = i), 23 * 122 + 5701 + -8507 !== C.indexOf("blob:") ? C = C.substr(1 * 7573 + 1 * 1733 + -9306, C.lastIndexOf("/") + (-1257 * 2 + 1366 * 6 + 437 * -13)) : C = "", x && (u = function(c) {
      var l = new XMLHttpRequest();
      return l.open("GET", c, !(-3935 + 288 * 7 + 1920)), l.responseType = "arraybuffer", l.send(null), new Uint8Array(l.response);
    }));
    var f = t.printErr || console.warn.bind(console);
    for (a in r) r.hasOwnProperty(a) && (t[a] = r[a]);
    r = null, t.thisProgram && (s = t.thisProgram);
    var m;
    t.wasmBinary && (m = t.wasmBinary), t.noExitRuntime && t.noExitRuntime, typeof WebAssembly != "object" && Je("no native wasm support detected");
    var y, G = !(9329 + -2 * 3206 + -2916);
    function K(c) {
      c || Je("Assertion failed: undefined");
    }
    var S = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
    function W(c, l, I) {
      var h = de;
      if (2473 + -2362 * -4 + -11921 < I) {
        I = l + I - (-1 * 3862 + -9070 + -12933 * -1);
        for (var A = 1 * -9932 + -4123 + 14055; A < c.length; ++A) {
          var b = c.charCodeAt(A);
          if (-1 * -87037 + -24637 + -7104 <= b && -51357 + 108700 * 1 >= b) {
            var Z = c.charCodeAt(++A);
            b = 82063 + -1 * -52524 + 23017 * -3 + ((b & 17 * -328 + 17 * -23 + 1165 * 6) << 241 * -37 + 1 * -5079 + -7003 * -2) | Z & 7739 + 1 * -9455 + 2739;
          }
          if (6667 + -691 * -7 + -11377 * 1 >= b) {
            if (l >= I) break;
            h[l++] = b;
          } else {
            if (3 * 2441 + -1973 * 3 + -1 * -643 >= b) {
              if (l + (-2 * -363 + 2815 * -2 + -545 * -9) >= I) break;
              h[l++] = -73 * 107 + 6110 + 1893 | b >> -10 * 393 + 9496 * 1 + 695 * -8;
            } else {
              if (-589 * 1 + -8171 + 1905 * 39 >= b) {
                if (l + 2 >= I) break;
                h[l++] = -3135 * 3 + 8111 + 1518 | b >> -8261 + 8273 * 1;
              } else {
                if (l + (-1159 * -4 + 5125 + -9758) >= I) break;
                h[l++] = 240 | b >> 8569 + -5 * -1297 + -28 * 537, h[l++] = -3 * 2374 + -2789 + -1 * -10039 | b >> -8881 + 1064 * 2 + 6765 & 63;
              }
              h[l++] = 7006 * -1 + -2062 + 9196 | b >> 2886 + -12 * 11 + -2748 & -13 * -206 + 3902 * 1 + -6517;
            }
            h[l++] = 3551 + 135 * -57 + 4272 | b & 63;
          }
        }
        h[l] = -5743 * 1 + 12 * -124 + 7231;
      }
    }
    var R = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void (-5357 + -1 * -1663 + 3694);
    function J(c, l) {
      for (var I = c >> 1, h = I + l / 2; !(I >= h) && qe[I]; ) ++I;
      if (I <<= 8053 + 1 * -2090 + -542 * 11, -4803 * 2 + -4614 + 2 * 7126 < I - c && R) return R.decode(de.subarray(c, I));
      for (I = 47 * 198 + 2703 + -12009, h = ""; ; ) {
        var A = we[c + 2 * I >> 1];
        if (2976 + -5 * -1911 + 1 * -12531 == A || I == l / (-373 + -29 * 85 + 2840)) return h;
        ++I, h += String.fromCharCode(A);
      }
    }
    function P(c, l, I) {
      if (void (-3 * 1731 + -1958 + 7151) === I && (I = -3781408974 + 5928892621), -3155 * -1 + 19 * 123 + -5490 > I) return 0;
      I -= 2587 + -21 * -447 + -11972;
      var h = l;
      I = I < (2 * 2307 + 8111 + 3 * -4241) * c.length ? I / (61 * -19 + -1 * -7099 + -2 * 2969) : c.length;
      for (var A = -6439 * 1 + 6520 + 27 * -3; A < I; ++A) we[l >> 2691 + -1597 * -6 + -2 * 6136] = c.charCodeAt(A), l += -4358 + -545 * -8;
      return we[l >> -1 * -5714 + -2134 * 1 + -3 * 1193] = 1 * -4279 + -889 * 2 + -1 * -6057, l - h;
    }
    function D(c) {
      return 2 * c.length;
    }
    function B(c, l) {
      for (var I = 2706 + -2 * 4483 + -1252 * -5, h = ""; !(I >= l / 4); ) {
        var A = ae[c + 4 * I >> 2];
        if (-7734 + -1 * 5924 + 13658 * 1 == A) break;
        ++I, -93654 + -4388 * 1 + -137 * -1194 <= A ? (A -= -276 * -379 + 6816 * 7 + -20 * 4339, h += String.fromCharCode(10 * 532 + -109868 + 159844 | A >> -1 * -6720 + 5293 + -12003, 86331 + -1090 * 82 + -1 * -59369 | A & 677 * 6 + 1 * 1418 + 1 * -4457)) : h += String.fromCharCode(A);
      }
      return h;
    }
    function U(c, l, I) {
      if (I === void 0 && (I = 2564806259 + 3 * 716339287 + -2566340473), -7879 * 1 + 9558 + -1675 * 1 > I) return 0;
      var h = l;
      I = h + I - 4;
      for (var A = 17252 + 76 * -227; A < c.length; ++A) {
        var b = c.charCodeAt(A);
        if (751 * -99 + -9174 + 138819 <= b && 111952 + -18203 * 3 >= b) {
          var Z = c.charCodeAt(++A);
          b = -19 * -4969 + -1283 * -5 + -35290 + ((b & 17300 + -16277 * 1) << -801 + 1 * 811) | Z & 1023;
        }
        if (ae[l >> 2708 * 1 + -6565 + 3859 * 1] = b, l += -162 * 13 + 2710 + -600, l + (203 * 49 + 3635 + 93 * -146) > I) break;
      }
      return ae[l >> -2972 * 1 + 5782 + -39 * 72] = -2612 + 19 * 268 + -2480, l - h;
    }
    function ue(c) {
      for (var l = -1097 + -1 * -1097, I = -1 * 3589 + 3067 + 522; I < c.length; ++I) {
        var h = c.charCodeAt(I);
        18836 + 2743 * -28 + 28316 * 4 <= h && 1 * -107099 + -3495 * -5 + 146967 >= h && ++I, l += -9462 + -2 * -4733;
      }
      return l;
    }
    var z, Ie, de, we, qe, ae, Se, Ke, je;
    function Oe(c) {
      z = c, t.HEAP8 = Ie = new Int8Array(c), t.HEAP16 = we = new Int16Array(c), t.HEAP32 = ae = new Int32Array(c), t.HEAPU8 = de = new Uint8Array(c), t.HEAPU16 = qe = new Uint16Array(c), t.HEAPU32 = Se = new Uint32Array(c), t.HEAPF32 = Ke = new Float32Array(c), t.HEAPF64 = je = new Float64Array(c);
    }
    var pe = t.INITIAL_MEMORY || -1462 * -554 + -33496663 * 1 + 49463931, Ge = {};
    Ge.initial = pe / (50142 * -1 + 23487 + 92191), Ge.maximum = 32768, t.wasmMemory ? y = t.wasmMemory : y = new WebAssembly.Memory(Ge), y && (z = y.buffer), pe = z.byteLength, Oe(z);
    var Ve = [], fe = [], Ze = [], Ee = [];
    function tn() {
      var c = t.preRun.shift();
      Ve.unshift(c);
    }
    var Le = 109 * 83 + 7710 + -13 * 1289, st = null;
    t.preloadedImages = {}, t.preloadedAudios = {};
    function Je(c) {
      throw t.onAbort && t.onAbort(c), f(c), G = !(-7426 + -625 * -14 + -4 * 331), c = new WebAssembly.RuntimeError("abort(" + c + "). Build with -s ASSERTIONS=1 for more info."), n(c), c;
    }
    function Ot(c) {
      var l = et;
      return String.prototype.startsWith ? l.startsWith(c) : 1655 * -1 + -350 * -5 + -95 === l.indexOf(c);
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
      for (; -7507 + 1 * 7507 < c.length; ) {
        var l = c.shift();
        if (typeof l == "function") l(t);
        else {
          var I = l.Ba;
          typeof I == "number" ? void (4849 + -1 * 8311 + -1 * -3462) === l.ta ? Vo("v", I)() : Vo("vi", I)(l.ta) : I(void (-7762 * -1 + 1058 + -8820) === l.ta ? null : l.ta);
        }
      }
    }
    function Vo(c, l) {
      var I = [];
      return function() {
        I.length = arguments.length;
        for (var h = 5 * -1289 + -1350 + -1 * -7795; h < arguments.length; h++) I[h] = arguments[h];
        return I && I.length ? t["dynCall_" + c].apply(null, [l].concat(I)) : t["dynCall_" + c].call(null, l);
      };
    }
    function Ac(c) {
      this.da = c - (-7 * -128 + -3758 * -1 + -4638), this.Oa = function(l) {
        ae[this.da + (-4615 + -563 * 11 + 208 * 52) >> 1 * -602 + 7172 + 6568 * -1] = l;
      }, this.La = function(l) {
        ae[this.da + 0 >> -6203 + 1241 * 5] = l;
      }, this.Ma = function() {
        ae[this.da + (-2975 + 1426 * -6 + 11535) >> -1 * -8960 + -697 * 5 + 13 * -421] = 1 * 7165 + 1 * 8501 + 1 * -15666;
      }, this.Ka = function() {
        Ie[this.da + (-1634 + -63 * -11 + -1 * -953) >> 63 * 148 + 7 * -357 + -13 * 525] = -1 * 4723 + -2 * -673 + 1 * 3377;
      }, this.Na = function() {
        Ie[this.da + (-7181 * -1 + -795 + -6373) >> -5892 + -1 * -9059 + -3167] = 0;
      }, this.Fa = function(l, I) {
        this.Oa(l), this.La(I), this.Ma(), this.Ka(), this.Na();
      };
    }
    function Bi() {
      return -1780 + 1 * 2445 + -665 < Bi.xa;
    }
    function Eo(c) {
      switch (c) {
        case -1683 * 5 + 8593 + -177:
          return -5675 + -2 * -2413 + 849;
        case 1 * 6067 + -3733 * -1 + 6 * -1633:
          return -4215 * -1 + 1288 * 1 + -5502;
        case -159 * -45 + 5010 + 12161 * -1:
          return 2;
        case 8:
          return 15 * -523 + -893 * 4 + -5 * -2284;
        default:
          throw new TypeError("Unknown type size: " + c);
      }
    }
    var wa = void (-6012 + -10 * -21 + 5802 * 1);
    function Te(c) {
      for (var l = ""; de[c]; ) l += wa[de[c++]];
      return l;
    }
    var nn = {}, Et = {}, Gi = {};
    function To(c) {
      if (void (1819 + -21 * -159 + -5158) === c) return "_unknown";
      c = c.replace(/[^a-zA-Z0-9_]/g, "$");
      var l = c.charCodeAt(-7250 + -1 * -2602 + 7 * 664);
      return -1 * 6319 + -158 * -52 + -43 * 43 <= l && 2298 + -11 * 765 + 6174 >= l ? "_" + c : c;
    }
    function Ro(c, l) {
      return c = To(c), new Function("body", "return function " + c + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(l);
    }
    function Po(c) {
      var l = Error, I = Ro(c, function(h) {
        this.name = c, this.message = h, h = Error(h).stack, h !== void 0 && (this.stack = this.toString() + `
` + h.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return I.prototype = Object.create(l.prototype), I.prototype.constructor = I, I.prototype.toString = function() {
        return void (-1130 * -1 + 37 * -36 + 1 * 202) === this.message ? this.name : this.name + ": " + this.message;
      }, I;
    }
    var on = void (394 * 11 + 101 * 77 + -12111);
    function M(c) {
      throw new on(c);
    }
    var Sa = void (-12882 + 57 * 226);
    function Zi(c) {
      throw new Sa(c);
    }
    function rn(c, l, I) {
      function h(w) {
        w = I(w), w.length !== c.length && Zi("Mismatched type converter count");
        for (var k = -8284 + 19 * 436; k < c.length; ++k) dt(c[k], w[k]);
      }
      c.forEach(function(w) {
        Gi[w] = l;
      });
      var A = Array(l.length), b = [], Z = 2229 + 1 * 3281 + -2 * 2755;
      l.forEach(function(w, k) {
        Et.hasOwnProperty(w) ? A[k] = Et[w] : (b.push(w), nn.hasOwnProperty(w) || (nn[w] = []), nn[w].push(function() {
          A[k] = Et[w], ++Z, Z === b.length && h(A);
        }));
      }), b.length === 0 && h(A);
    }
    function dt(c, l, I) {
      if (I = I || {}, !("argPackAdvance" in l)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var h = l.name;
      if (c || M('type "' + h + '" must have a positive integer typeid pointer'), Et.hasOwnProperty(c)) {
        if (I.Ea) return;
        M("Cannot register type '" + h + "' twice");
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
      M(c.A.fa.ea.name + " instance already deleted");
    }
    var Lo = !(-1 * -5717 + -2778 + -2938);
    function Ba() {
    }
    function Ga(c) {
      --c.count.value, 418 + -38 * 11 === c.count.value && (c.ga ? c.ha.na(c.ga) : c.fa.ea.na(c.da));
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
    var Pn = void 0, Nn = [];
    function Do() {
      for (; Nn.length; ) {
        var c = Nn.pop();
        c.A.oa = !(31 * -295 + -2600 + 11746), c.delete();
      }
    }
    function wt() {
    }
    var Za = {};
    function yc(c, l) {
      var I = t;
      if (void (4386 + -1 * 8231 + -5 * -769) === I[c].ja) {
        var h = I[c];
        I[c] = function() {
          return I[c].ja.hasOwnProperty(arguments.length) || M("Function '" + l + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + I[c].ja + ")!"), I[c].ja[arguments.length].apply(this, arguments);
        }, I[c].ja = [], I[c].ja[h.ya] = h;
      }
    }
    function Ha(c, l, I) {
      t.hasOwnProperty(c) ? ((void (5267 * 1 + 9074 + 14341 * -1) === I || void (-15809 + -1 * -15809) !== t[c].ja && void (139 * -19 + -20 * 469 + 12021) !== t[c].ja[I]) && M("Cannot register public name '" + c + "' twice"), yc(c, c), t.hasOwnProperty(I) && M("Cannot register multiple overloads of a function with the same number of arguments (" + I + ")!"), t[c].ja[I] = l) : (t[c] = l, void (3465 * 2 + 2870 + -9800) !== I && (t[c].Ra = I));
    }
    function vc(c, l, I, h, A, b, Z, w) {
      this.name = c, this.constructor = l, this.ma = I, this.na = h, this.ia = A, this.Ca = b, this.qa = Z, this.Aa = w;
    }
    function Hi(c, l, I) {
      for (; l !== I; ) l.qa || M("Expected null or instance of " + I.name + ", got an instance of " + l.name), c = l.qa(c), l = l.ia;
      return c;
    }
    function wc(c, l) {
      return l === null ? (this.ua && M("null is not a valid " + this.name), 0) : (l.A || M('Cannot pass "' + sn(l) + '" as a ' + this.name), l.A.da || M("Cannot pass deleted object as a pointer of type " + this.name), Hi(l.A.da, l.A.fa.ea, this.ea));
    }
    function Sc(c, l) {
      if (l === null) {
        if (this.ua && M("null is not a valid " + this.name), this.sa) {
          var I = this.Ha();
          return c !== null && c.push(this.na, I), I;
        }
        return 4 * 746 + -1837 * 1 + -31 * 37;
      }
      if (l.A || M('Cannot pass "' + sn(l) + '" as a ' + this.name), l.A.da || M("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && l.A.fa.ra && M("Cannot convert argument of type " + (l.A.ha ? l.A.ha.name : l.A.fa.name) + " to parameter type " + this.name), I = Hi(l.A.da, l.A.fa.ea, this.ea), this.sa) switch (l.A.ga === void 0 && M("Passing raw pointer to smart pointer is illegal"), this.Pa) {
        case -4656 + -695 * -10 + 1147 * -2:
          l.A.ha === this ? I = l.A.ga : M("Cannot convert argument of type " + (l.A.ha ? l.A.ha.name : l.A.fa.name) + " to parameter type " + this.name);
          break;
        case 6385 + 1 * -8101 + 1717:
          I = l.A.ga;
          break;
        case -1402 * -4 + 1686 * 1 + -7292:
          if (l.A.ha === this) I = l.A.ga;
          else {
            var h = l.clone();
            I = this.Ia(I, an(function() {
              h.delete();
            })), c !== null && c.push(this.na, I);
          }
          break;
        default:
          M("Unsupporting sharing policy");
      }
      return I;
    }
    function Bc(c, l) {
      return l === null ? (this.ua && M("null is not a valid " + this.name), -1371 + -13 * -186 + -1047) : (l.A || M('Cannot pass "' + sn(l) + '" as a ' + this.name), l.A.da || M("Cannot pass deleted object as a pointer of type " + this.name), l.A.fa.ra && M("Cannot convert argument of type " + l.A.fa.name + " to parameter type " + this.name), Hi(l.A.da, l.A.fa.ea, this.ea));
    }
    function Wi(c) {
      return this.fromWireType(Se[c >> 3007 + 5 * -601]);
    }
    function Wa(c, l, I) {
      return l === I ? c : void (9637 + 1 * -9637) === I.ia ? null : (c = Wa(c, l, I.ia), c === null ? null : I.Aa(c));
    }
    var Ln = {};
    function Gc(c, l) {
      for (void (8171 * -1 + -3377 + -4 * -2887) === l && M("ptr should not be undefined"); c.ia; ) l = c.qa(l), c = c.ia;
      return Ln[l];
    }
    function ki(c, l) {
      l.fa && l.da || Zi("makeClassHandle requires ptr and ptrType"), !!l.ha != !!l.ga && Zi("Both smartPtrType and smartPtr must be specified");
      var I = {};
      I.value = 1, l.count = I;
      var h = {};
      h.value = l;
      var A = {};
      return A.A = h, Rn(Object.create(c, A));
    }
    function Ct(c, l, I, h) {
      this.name = c, this.ea = l, this.ua = I, this.ra = h, this.sa = !1, this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void (3596 + 109 * 50 + -9046), void (-1784 + 1784 * 1) !== l.ia ? this.toWireType = Sc : (this.toWireType = h ? wc : Bc, this.ka = null);
    }
    function ka(c, l, I) {
      t.hasOwnProperty(c) || Zi("Replacing nonexistant public symbol"), void (1390 * 5 + 1 * 659 + -7609) !== t[c].ja && void (-6596 + 267 * 33 + -2215) !== I ? t[c].ja[I] = l : (t[c] = l, t[c].ya = I);
    }
    function St(c, l) {
      c = Te(c);
      var I = Vo(c, l);
      return typeof I != "function" && M("unknown function pointer with signature " + c + ": " + l), I;
    }
    var Ka = void (-4178 + 1 * 7642 + 4 * -866);
    function Oa(c) {
      c = Ja(c);
      var l = Te(c);
      return ht(c), l;
    }
    function Dn(c, l) {
      function I(b) {
        A[b] || Et[b] || (Gi[b] ? Gi[b].forEach(I) : (h.push(b), A[b] = !(8781 * 1 + 626 + -9407)));
      }
      var h = [], A = {};
      throw l.forEach(I), new Ka(c + ": " + h.map(Oa).join([", "]));
    }
    function Va(c, l) {
      for (var I = [], h = 508 + 5 * 981 + -5413; h < c; h++) I.push(ae[(l >> -9955 + 3163 * -1 + 2 * 6560) + h]);
      return I;
    }
    function Ki(c) {
      for (; c.length; ) {
        var l = c.pop();
        c.pop()(l);
      }
    }
    function Ea(c, l, I) {
      return c instanceof Object || M(I + ' with invalid "this": ' + c), c instanceof l.ea.constructor || M(I + ' incompatible with "this" of type ' + c.constructor.name), c.A.da || M("cannot call emscripten binding method " + I + " on deleted object"), Hi(c.A.da, c.A.fa.ea, l.ea);
    }
    var Ta = {};
    Ta.value = void (-58 * 29 + -13 * -623 + -6417);
    var Ra = {};
    Ra.value = null;
    var Pa = {};
    Pa.value = !(2675 + -43 * -169 + -1657 * 6);
    var Na = {};
    Na.value = !1;
    var Fo = [], Ue = [{}, Ta, Ra, Pa, Na];
    function Yo(c) {
      4 < c && 110 * 85 + 385 + -11 * 885 === --Ue[c].Ja && (Ue[c] = void (1 * -5729 + -1 * 7243 + 92 * 141), Fo.push(c));
    }
    function an(c) {
      switch (c) {
        case void (2602 * -2 + -741 * 8 + 44 * 253):
          return 22 * -347 + 6454 + 1181 * 1;
        case null:
          return 8 * 1013 + 8926 + 2 * -8514;
        case !(1 * -7597 + -5399 + -6498 * -2):
          return -1039 * 6 + -9596 + 15833;
        case !(7421 + 28 * -265):
          return 4;
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
        case 1861 + -6553 * 1 + 4694:
          return function(I) {
            return this.fromWireType(Ke[I >> 101 * 92 + -59 * 89 + -577 * 7]);
          };
        case 8329 * -1 + 5226 + -1553 * -2:
          return function(I) {
            return this.fromWireType(je[I >> -1932 + 1109 * -4 + 6371]);
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
        case -193 * 37 + 835 + -6 * -1051:
          return I ? function(h) {
            return Ie[h];
          } : function(h) {
            return de[h];
          };
        case -2210 + -109 * -32 + -1277 * 1:
          return I ? function(h) {
            return we[h >> -9148 * 1 + 5818 + 3331];
          } : function(h) {
            return qe[h >> 5425 + 16 * -339];
          };
        case 2:
          return I ? function(h) {
            return ae[h >> 938 + -156 * 6];
          } : function(h) {
            return Se[h >> 2];
          };
        default:
          throw new TypeError("Unknown integer type: " + c);
      }
    }
    function Xo(c) {
      return c || M("Cannot use deleted val. handle = " + c), Ue[c].value;
    }
    function La(c, l) {
      var I = Et[c];
      return I === void 0 && M(l + " has unknown type " + Oa(c)), I;
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
      for (I in c) (function(h) {
        var A = c[h];
        l[h] = typeof A == "function" ? function() {
          Ya.push(h);
          try {
            return A.apply(null, arguments);
          } finally {
            if (G) return;
            var b = Ya.pop();
            K(b === h);
          }
        } : A;
      })(I);
      return l;
    }
    for (var Ma = Array(-5 * 1155 + -516 * -1 + 5515), Oi = 1786 + -8 * -98 + -2570; 5033 + -547 * 1 + -141 * 30 > Oi; ++Oi) Ma[Oi] = String.fromCharCode(Oi);
    wa = Ma, on = t.BindingError = Po("BindingError"), Sa = t.InternalError = Po("InternalError"), wt.prototype.isAliasOf = function(c) {
      if (!(this instanceof wt && c instanceof wt)) return !(-1114 * 1 + -6237 + 8 * 919);
      var l = this.A.fa.ea, I = this.A.da, h = c.A.fa.ea;
      for (c = c.A.da; l.ia; ) I = l.qa(I), l = l.ia;
      for (; h.ia; ) c = h.qa(c), h = h.ia;
      return l === h && I === c;
    }, wt.prototype.clone = function() {
      if (this.A.da || No(this), this.A.pa) return this.A.count.value += -2 * 3335 + -587 * -4 + 4323, this;
      var c = Rn(Object.create(Object.getPrototypeOf(this), { A: { value: bc(this.A) } }));
      return c.A.count.value += -133 * -3 + 61 * 148 + 9426 * -1, c.A.oa = !(-4273 * 1 + -9283 + 13557), c;
    }, wt.prototype.delete = function() {
      this.A.da || No(this), this.A.oa && !this.A.pa && M("Object already scheduled for deletion"), Ba(this), Ga(this.A), this.A.pa || (this.A.ga = void (1 * 8999 + -6429 + -2570), this.A.da = void (1 * 1756 + -30 * 159 + 3014 * 1));
    }, wt.prototype.isDeleted = function() {
      return !this.A.da;
    }, wt.prototype.deleteLater = function() {
      return this.A.da || No(this), this.A.oa && !this.A.pa && M("Object already scheduled for deletion"), Nn.push(this), 3806 + 9561 * -1 + 5756 === Nn.length && Pn && Pn(Do), this.A.oa = !(-6043 + -1 * -3083 + 2960), this;
    }, Ct.prototype.Da = function(c) {
      return this.wa && (c = this.wa(c)), c;
    }, Ct.prototype.va = function(c) {
      this.na && this.na(c);
    }, Ct.prototype.argPackAdvance = -664 * -1 + 2976 + 2 * -1816, Ct.prototype.readValueFromPointer = Wi, Ct.prototype.deleteObject = function(c) {
      c !== null && c.delete();
    }, Ct.prototype.fromWireType = function(c) {
      function l() {
        return this.sa ? ki(this.ea.ma, { fa: this.Ga, da: I, ha: this, ga: c }) : ki(this.ea.ma, { fa: this, da: c });
      }
      var I = this.Da(c);
      if (!I) return this.va(c), null;
      var h = Gc(this.ea, I);
      if (void (-11 * -33 + -5 * -1079 + -1 * 5758) !== h)
        return -2 * -2477 + -4996 + 42 === h.A.count.value ? (h.A.da = I, h.A.ga = c, h.clone()) : (h = h.clone(), this.va(c), h);
      if (h = this.ea.Ca(I), h = Za[h], !h) return l.call(this);
      h = this.ra ? h.za : h.pointerType;
      var A = Wa(I, this.ea, h.ea);
      return A === null ? l.call(this) : this.sa ? ki(h.ea.ma, { fa: h, da: A, ha: this, ga: c }) : ki(h.ea.ma, { fa: h, da: A });
    }, t.getInheritedInstanceCount = function() {
      return Object.keys(Ln).length;
    }, t.getLiveInheritedInstances = function() {
      var c = [], l;
      for (l in Ln) Ln.hasOwnProperty(l) && c.push(Ln[l]);
      return c;
    }, t.flushPendingDeletes = Do, t.setDelayFunction = function(c) {
      Pn = c, Nn.length && Pn && Pn(Do);
    }, Ka = t.UnboundTypeError = Po("UnboundTypeError"), t.count_emval_handles = function() {
      for (var c = -12723 + 12723 * 1, l = -6161 + 264 * 10 + -86 * -41; l < Ue.length; ++l) void (-19 * -304 + -1 * 4549 + -409 * 3) !== Ue[l] && ++c;
      return c;
    }, t.get_first_emval = function() {
      for (var c = 463 * 18 + 1 * -9626 + 1297; c < Ue.length; ++c) if (void (1810 + -5 * 362) !== Ue[c]) return Ue[c];
      return null;
    }, fe.push({ Ba: function() {
      ja();
    } });
    var Kc = { z: function(c) {
      return Vi(c + (-2 * 3667 + -4307 + -1 * -11657)) + (7889 + 1007 * -1 + -6866);
    }, u: function(c, l, I) {
      throw new Ac(c).Fa(l, I), "uncaught_exception" in Bi ? Bi.xa++ : Bi.xa = 1887 * -4 + 1217 + 6332, c;
    }, w: function(c, l, I, h, A) {
      var b = Eo(I);
      l = Te(l), dt(c, { name: l, fromWireType: function(Z) {
        return !!Z;
      }, toWireType: function(Z, w) {
        return w ? h : A;
      }, argPackAdvance: 8, readValueFromPointer: function(Z) {
        if (-4 * -71 + -2241 + -979 * -2 === I) var w = Ie;
        else if (-3714 + 15 * -337 + 8771 === I) w = we;
        else if (-2790 + 1 * -6947 + -3 * -3247 === I) w = ae;
        else throw new TypeError("Unknown boolean type size: " + l);
        return this.fromWireType(w[Z >> b]);
      }, ka: null });
    }, h: function(c, l, I, h, A, b, Z, w, k, O, V, E, q) {
      V = Te(V), b = St(A, b), w && (w = St(Z, w)), O && (O = St(k, O)), q = St(E, q);
      var me = To(V);
      Ha(me, function() {
        Dn("Cannot construct " + V + " due to unbound types", [h]);
      }), rn([c, l, I], h ? [h] : [], function(T) {
        if (T = T[-7669 * -1 + 3131 + -18 * 600], h) var ct = T.ea, He = ct.ma;
        else He = wt.prototype;
        T = Ro(me, function() {
          if (Object.getPrototypeOf(this) !== gn) throw new on("Use 'new' to construct " + V);
          if (void (2 * 1433 + -1835 * 1 + -1031) === cn.la) throw new on(V + " has no accessible constructor");
          var za = cn.la[arguments.length];
          if (void (-7609 + -1087 * -7) === za) throw new on("Tried to invoke ctor of " + V + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(cn.la).toString() + ") parameters instead!");
          return za.apply(this, arguments);
        });
        var De = {};
        De.value = T;
        var Tt = {};
        Tt.constructor = De;
        var gn = Object.create(He, Tt);
        T.prototype = gn;
        var cn = new vc(V, T, gn, q, ct, b, w, O);
        ct = new Ct(V, cn, !(4227 + 1 * -1832 + -2395), !(11 * 117 + -3368 + 2082)), He = new Ct(V + "*", cn, !1, !(353 * -16 + 1 * -3518 + 9167));
        var Ua = new Ct(V + " const*", cn, !(-9386 + 17 * -263 + 82 * 169), !(6459 + 815 * 2 + 8089 * -1)), Jo = {};
        return Jo.pointerType = He, Jo.za = Ua, Za[c] = Jo, ka(me, T), [ct, He, Ua];
      });
    }, g: function(c, l, I, h, A, b) {
      K(6754 * 1 + -6255 + 499 * -1 < l);
      var Z = Va(l, I);
      A = St(h, A);
      var w = [b], k = [];
      rn([], [c], function(O) {
        O = O[-7 * -544 + -1 * 1093 + -543 * 5];
        var V = "constructor " + O.name;
        if (void (-3717 + 3717 * 1) === O.ea.la && (O.ea.la = []), void (-7 * 1142 + -109 * -74 + -72) !== O.ea.la[l - 1]) throw new on("Cannot register multiple constructors with identical number of parameters (" + (l - (1879 * -5 + 3434 * -2 + 16264)) + ") for class '" + O.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return O.ea.la[l - (25 * -249 + 5 * 698 + 8 * 342)] = function() {
          Dn("Cannot construct " + O.name + " due to unbound types", Z);
        }, rn([], Z, function(E) {
          return O.ea.la[l - (6039 * 1 + 441 + -6479)] = function() {
            arguments.length !== l - (13 * 355 + -527 * -3 + -177 * 35) && M(V + " called with " + arguments.length + " arguments, expected " + (l - (-6268 + -6269 * -1))), k.length = -2091 * 3 + -5323 * 1 + -5798 * -2, w.length = l;
            for (var q = -3 * -1885 + 2 * -265 + -5124; q < l; ++q) w[q] = E[q].toWireType(k, arguments[q - (1 * -2083 + 567 + 1517)]);
            return q = A.apply(null, w), Ki(k), E[7150 + -142 * -29 + -11268].fromWireType(q);
          }, [];
        }), [];
      });
    }, b: function(c, l, I, h, A, b, Z, w, k, O) {
      l = Te(l), A = St(h, A), rn([], [c], function(V) {
        V = V[-1 * -8161 + 82 * -2 + -7997];
        var E = V.name + "." + l, q = { get: function() {
          Dn("Cannot access " + E + " due to unbound types", [I, Z]);
        }, enumerable: !(-26 * 71 + 9 + 1837), configurable: !0 };
        return k ? q.set = function() {
          Dn("Cannot access " + E + " due to unbound types", [I, Z]);
        } : q.set = function() {
          M(E + " is a read-only property");
        }, Object.defineProperty(V.ea.ma, l, q), rn([], k ? [I, Z] : [I], function(me) {
          var T = me[0], ct = { get: function() {
            var De = Ea(this, V, E + " getter");
            return T.fromWireType(A(b, De));
          }, enumerable: !(-4331 * -2 + -3 * 1571 + 3949 * -1) };
          if (k) {
            k = St(w, k);
            var He = me[-6 * 1105 + -1091 * -5 + 1176];
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
        var h = Ue[I].value;
        return Yo(I), h;
      }, toWireType: function(I, h) {
        return an(h);
      }, argPackAdvance: 8, readValueFromPointer: Wi, ka: null });
    }, m: function(c, l, I) {
      I = Eo(I), l = Te(l), dt(c, { name: l, fromWireType: function(h) {
        return h;
      }, toWireType: function(h, A) {
        if (typeof A != "number" && typeof A != "boolean") throw new TypeError('Cannot convert "' + sn(A) + '" to ' + this.name);
        return A;
      }, argPackAdvance: 8, readValueFromPointer: Zc(l, I), ka: null });
    }, c: function(c, l, I, h, A, b) {
      var Z = Va(l, I);
      c = Te(c), A = St(h, A), Ha(c, function() {
        Dn("Cannot call " + c + " due to unbound types", Z);
      }, l - (-361 * 19 + -7699 + -211 * -69)), rn([], Z, function(w) {
        var k = c, O = c;
        w = [w[4555 * -1 + 1 * -6551 + 11106], null].concat(w.slice(-2353 + 2 * 4273 + 774 * -8));
        var V = A, E = w.length;
        359 * -8 + 1 * -4236 + 237 * 30 > E && M("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var q = w[5 * 94 + -4874 * -1 + 3 * -1781] !== null && !(2176 + 451 * -2 + -1273), me = !(-19 * -251 + 6817 + -7 * 1655), T = -9874 + -97 * 19 + -27 * -434; T < w.length; ++T) if (w[T] !== null && void (9562 + -8 * -1168 + -18906) === w[T].ka) {
          me = !(-3468 * 1 + -9619 + 569 * 23);
          break;
        }
        var ct = w[-10332 + -21 * -492].name !== "void", He = "", De = "";
        for (T = -6536 + -1 * -965 + -619 * -9; T < E - (2740 + -71 * -105 + -10193); ++T) He += (-9520 + 2 * -927 + 11374 !== T ? ", " : "") + "arg" + T, De += (-57 * 151 + 3 * 2525 + 1032 !== T ? ", " : "") + "arg" + T + "Wired";
        O = "return function " + To(O) + "(" + He + `) {
if (arguments.length !== ` + (E - (8118 + 1 * -8116)) + `) {
throwBindingError('function ` + O + " called with ' + arguments.length + ' arguments, expected " + (E - (1268 + -2 * 2969 + -1 * -4672)) + ` args!');
}
`, me && (O += `var destructors = [];
`);
        var Tt = me ? "destructors" : "null";
        for (He = "throwBindingError invoker fn runDestructors retType classParam".split(" "), V = [M, V, b, Ki, w[10453 + -1 * 10453], w[1]], q && (O += "var thisWired = classParam.toWireType(" + Tt + `, this);
`), T = -8713 * 1 + 3293 * -1 + 12006; T < E - (-21 * -155 + -9127 * -1 + 12380 * -1); ++T) O += "var arg" + T + "Wired = argType" + T + ".toWireType(" + Tt + ", arg" + T + "); // " + w[T + (-3 * 1012 + 1597 + 1441)].name + `
`, He.push("argType" + T), V.push(w[T + 2]);
        if (q && (De = "thisWired" + (-6057 + 3 * 2019 < De.length ? ", " : "") + De), O += (ct ? "var rv = " : "") + "invoker(fn" + (0 < De.length ? ", " : "") + De + `);
`, me) O += `runDestructors(destructors);
`;
        else
          for (T = q ? 3 * -3294 + 3504 + -6379 * -1 : -6082 + -3042 * -2; T < w.length; ++T) E = 9463 + 3 * 2595 + 1 * -17247 === T ? "thisWired" : "arg" + (T - (-5342 + -14 * 94 + -1110 * -6)) + "Wired", w[T].ka !== null && (O += E + "_dtor(" + E + "); // " + w[T].name + `
`, He.push(E + "_dtor"), V.push(w[T].ka));
        return ct && (O += `var ret = retType.fromWireType(rv);
return ret;
`), He.push(O + `}
`), w = Hc(He).apply(null, V), ka(k, w, l - (-262 * 19 + -2514 + 7493)), [];
      });
    }, e: function(c, l, I, h, A) {
      function b(O) {
        return O;
      }
      l = Te(l), -(-426 + 1451 * 1 + -1024) === A && (A = -213530831 * 4 + -887156268 + 8995897 * 671);
      var Z = Eo(I);
      if (7539 + -1 * 581 + -49 * 142 === h) {
        var w = 32 - 8 * I;
        b = function(O) {
          return O << w >>> w;
        };
      }
      var k = -(-8033 * -1 + 6436 * 1 + -14468) != l.indexOf("unsigned");
      dt(c, { name: l, fromWireType: b, toWireType: function(O, V) {
        if (typeof V != "number" && typeof V != "boolean") throw new TypeError('Cannot convert "' + sn(V) + '" to ' + this.name);
        if (V < h || V > A) throw new TypeError('Passing a number "' + sn(V) + '" from JS side to C/C++ side to an argument of type "' + l + '", which is outside the valid range [' + h + ", " + A + "]!");
        return k ? V >>> -1613 * 4 + -9887 + 1 * 16339 : V | 9908 + -1274 * -2 + -12456;
      }, argPackAdvance: 8, readValueFromPointer: Wc(l, Z, -4560 + -1 * -470 + 5 * 818 !== h), ka: null });
    }, d: function(c, l, I) {
      function h(w) {
        w >>= -935 + 3821 * -1 + 4758;
        var k = Se;
        return new A(z, k[w + (1334 + 1 * 2984 + -4317)], k[w]);
      }
      var A = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][l];
      I = Te(I);
      var b = {};
      b.name = I, b.fromWireType = h, b.argPackAdvance = 8, b.readValueFromPointer = h;
      var Z = {};
      Z.Ea = !(-6100 + -5 * -1220), dt(c, b, Z);
    }, n: function(c, l) {
      l = Te(l);
      var I = l === "std::string";
      dt(c, { name: l, fromWireType: function(h) {
        var A = Se[h >> 2];
        if (I) for (var b = h + (1297 + -607 * 5 + 1742), Z = 81 * 102 + -169 * -13 + -10459; Z <= A; ++Z) {
          var w = h + 4 + Z;
          if (Z == A || -1 * 9671 + 1959 * 3 + -271 * -14 == de[w]) {
            if (b) {
              var k = b, O = de, V = k + (w - b);
              for (b = k; O[b] && !(b >= V); ) ++b;
              if (1792 + -16 * 111 < b - k && O.subarray && S) k = S.decode(O.subarray(k, b));
              else {
                for (V = ""; k < b; ) {
                  var E = O[k++];
                  if (E & 74 * 49 + -2 * -4 + -3506) {
                    var q = O[k++] & 63;
                    if (-11967 + -1351 * -9 == (E & 37 * -19 + 473 + -2 * -227)) V += String.fromCharCode((E & 11699 + -2917 * 4) << -15 * -465 + -9756 + -2787 * -1 | q);
                    else {
                      var me = O[k++] & 63;
                      E = 2815 * -2 + 1 * -9563 + 15417 == (E & 46 * 6 + -232 + -4 * -49) ? (E & 8 * -134 + -23 * -63 + -2 * 181) << -3437 + -499 * 2 + -4447 * -1 | q << 94 + 6149 * 1 + -1 * 6237 | me : (E & -166 * 11 + -723 * -5 + -1782) << 18 | q << -470 * 11 + 4571 + -47 * -13 | me << -2734 + -8291 * 1 + 3677 * 3 | O[k++] & 63, 65536 > E ? V += String.fromCharCode(E) : (E -= -1 * -105673 + -47410 + 7273, V += String.fromCharCode(72354 + 16979 * -2 + 16900 | E >> 4841 + 9 * -268 + -2419, 4259 * -23 + 448 * -6 + 156965 | E & -163 * -21 + 787 + 1 * -3187));
                    }
                  } else V += String.fromCharCode(E);
                }
                k = V;
              }
            } else k = "";
            if (void (8800 + 2111 * 1 + -3637 * 3) === T) var T = k;
            else T += String.fromCharCode(947 * -3 + 558 + 2283), T += k;
            b = w + (7230 + 6915 * 1 + 52 * -272);
          }
        }
        else {
          for (T = Array(A), Z = -1 * -9412 + 6491 * -1 + 23 * -127; Z < A; ++Z) T[Z] = String.fromCharCode(de[h + (5496 + 10 * -993 + 4438) + Z]);
          T = T.join("");
        }
        return ht(h), T;
      }, toWireType: function(h, A) {
        A instanceof ArrayBuffer && (A = new Uint8Array(A));
        var b = typeof A == "string";
        b || A instanceof Uint8Array || A instanceof Uint8ClampedArray || A instanceof Int8Array || M("Cannot pass non-string to std::string");
        var Z = (I && b ? function() {
          for (var O = 6445 * 1 + -6673 + 228, V = -4748 + -4 * -1187; V < A.length; ++V) {
            var E = A.charCodeAt(V);
            -89612 + 21529 * 5 + 37263 <= E && 80189 + -1 * -27541 + -50387 * 1 >= E && (E = 124810 + -22 * -1229 + -86312 + ((E & -128 * -22 + -1 * -2207 + -4e3) << -6677 * 1 + -2083 + 8770) | A.charCodeAt(++V) & 7342 * 1 + 30 * -211 + 11), 227 * -26 + -3714 + 9743 >= E ? ++O : O = 6379 + -5 * -1699 + -12827 >= E ? O + (1972 + 103 * 9 + -2897 * 1) : 65535 >= E ? O + (-276 * -2 + -6105 + -926 * -6) : O + (1 * -7113 + 36 * 54 + 5173);
          }
          return O;
        } : function() {
          return A.length;
        })(), w = Vi(2 * -2545 + 4492 + 602 + Z + (-3 * 163 + -1541 + 2031));
        if (Se[w >> -4164 + -1 * -7589 + -3423] = Z, I && b) W(A, w + (2886 + -9329 * -1 + 1 * -12211), Z + (3 * -571 + -2501 + 4215));
        else if (b) for (b = -314 * -16 + -622 + -1 * 4402; b < Z; ++b) {
          var k = A.charCodeAt(b);
          7 * 705 + -6001 + -1 * -1321 < k && (ht(w), M("String has UTF-16 code units that do not fit in 8 bits")), de[w + (8762 + 3 * -2725 + 1 * -583) + b] = k;
        }
        else
          for (b = -9349 + 1 * 43 + 517 * 18; b < Z; ++b) de[w + (-14 * 186 + 6834 * 1 + -4226) + b] = A[b];
        return h !== null && h.push(ht, w), w;
      }, argPackAdvance: 8, readValueFromPointer: Wi, ka: function(h) {
        ht(h);
      } });
    }, j: function(c, l, I) {
      if (I = Te(I), 5818 * 1 + 2 * -1868 + -52 * 40 === l) var h = J, A = P, b = D, Z = function() {
        return qe;
      }, w = 1;
      else l === 4 && (h = B, A = U, b = ue, Z = function() {
        return Se;
      }, w = 5043 * -1 + 4779 + 133 * 2);
      dt(c, { name: I, fromWireType: function(k) {
        for (var O = Se[k >> -12104 + -6053 * -2], V = Z(), E, q = k + (7828 + -229 * 9 + -5763), me = 1267 * 7 + 9157 * 1 + -18026 * 1; me <= O; ++me) {
          var T = k + 4 + me * l;
          (me == O || 1589 * 6 + -1 * -9574 + 17 * -1124 == V[T >> w]) && (q = h(q, T - q), void (17 * -491 + 8448 + -101 * 1) === E ? E = q : (E += String.fromCharCode(2 * 1191 + -29 * -211 + -8501), E += q), q = T + l);
        }
        return ht(k), E;
      }, toWireType: function(k, O) {
        typeof O != "string" && M("Cannot pass non-string to C++ string type " + I);
        var V = b(O), E = Vi(6847 + -1138 * -1 + -7981 + V + l);
        return Se[E >> 25 * -327 + -4628 + 12805] = V >> w, A(O, E + (-1312 + 2650 * 3 + 31 * -214), V + l), k !== null && k.push(ht, E), E;
      }, argPackAdvance: 8, readValueFromPointer: Wi, ka: function(k) {
        ht(k);
      } });
    }, x: function(c, l) {
      l = Te(l);
      var I = {};
      I.Qa = !(6251 * 1 + -487 * 9 + -1868), I.name = l, I.argPackAdvance = 0, I.fromWireType = function() {
      }, I.toWireType = function() {
      }, dt(c, I);
    }, k: function(c, l, I) {
      c = Xo(c), l = La(l, "emval::as");
      var h = [], A = an(h);
      return ae[I >> 2] = A, l.toWireType(h, c);
    }, i: Yo, l: function(c, l) {
      return c = Xo(c), l = Xo(l), an(c[l]);
    }, p: function(c) {
      var l = kc[c];
      return an(void (-2437 * -1 + -3 * 2942 + -6389 * -1) === l ? Te(c) : l);
    }, o: function(c) {
      Ki(Ue[c].value), Yo(c);
    }, y: function(c, l) {
      return c = La(c, "_emval_take_value"), c = c.readValueFromPointer(l), an(c);
    }, f: function() {
      Je();
    }, q: function(c, l, I) {
      de.copyWithin(c, l, l + I);
    }, r: function(c) {
      c >>>= -3 * 863 + -683 * -2 + 1223;
      var l = de.length;
      if (3689822 * 479 + 2298455976 + -1918397066 < c) return !(-1 * 7879 + -6146 + 14026);
      for (var I = 642 * -13 + -3172 * 3 + 1 * 17863; 2 * -379 + -6805 + 1 * 7567 >= I; I *= -431 * 1 + -6318 + 6751) {
        var h = l * (1 + 0.2 / I);
        h = Math.min(h, c + (12857201 + 57 * 1778169 + 1 * -13549538)), h = Math.max(-687956 * 45 + 27324988 * -1 + -3187 * -23552, c, h), -1 * -3812 + -5833 + 2021 < h % (-108315 + 268 * -427 + 288287) && (h += 57 * 1229 + 3 * -5276 + 11311 - h % (-237663 + -83 * -3653));
        e: {
          try {
            y.grow(Math.min(6302398 * 350 + 1221270598 * -2 + 29657 * 80392, h) - z.byteLength + (85606 + 20071 * -1) >>> -83 * -61 + 31 * -319 + -538 * -9), Oe(y.buffer);
            var A = -1 * -7993 + 6081 + -1 * 14073;
            break e;
          } catch {
          }
          A = void (-2586 + -431 * -6);
        }
        if (A) return !(-5987 + 5987 * 1);
      }
      return !(-11 * -659 + -1 * -9854 + -17102);
    }, s: function(c, l) {
      var I = 0;
      return Fa().forEach(function(h, A) {
        var b = l + I;
        for (A = ae[c + (-1 * 2681 + 1999 * -5 + -2 * -6340) * A >> 2339 + 1847 * 2 + -6031] = b, b = 149 * 1 + -78 * 16 + -157 * -7; b < h.length; ++b) Ie[A++ >> 6664 + 1331 * -7 + 2653] = h.charCodeAt(b);
        Ie[A >> 10066 + -10066 * 1] = 0, I += h.length + 1;
      }), 8929 + 375 * -2 + -8179 * 1;
    }, t: function(c, l) {
      var I = Fa();
      ae[c >> 30 * 76 + -905 * 4 + 1342] = I.length;
      var h = 0;
      return I.forEach(function(A) {
        h += A.length + (-1128 + 25 * 110 + -1621 * 1);
      }), ae[l >> 68 * 134 + -35 * -19 + -9775] = h, -5154 + -6 * -859;
    }, a: y };
    (function() {
      function c(Z) {
        Z = Z.exports, Z = Xa(Z), t.asm = Z, Le--, t.monitorRunDependencies && t.monitorRunDependencies(Le), Le == 0 && st && (Z = st, st = null, Z());
      }
      function l(Z) {
        c(Z.instance);
      }
      function I(Z) {
        return mc().then(function(w) {
          return WebAssembly.instantiate(w, A);
        }).then(Z, function(w) {
          f("failed to asynchronously prepare wasm: " + w), Je(w);
        });
      }
      var h = {};
      h.a = Kc;
      var A = h;
      if (Le++, t.monitorRunDependencies && t.monitorRunDependencies(Le), t.instantiateWasm) try {
        var b = t.instantiateWasm(A, c);
        return b = Xa(b);
      } catch (Z) {
        return f("Module.instantiateWasm callback failed with error: " + Z), !(446 * 17 + -1 * -9631 + -17212);
      }
      return function() {
        if (m || typeof WebAssembly.instantiateStreaming != "function" || gt() || Ot("file://") || typeof fetch != "function") return I(l);
        var Z = {};
        Z.credentials = "same-origin", fetch(et, Z).then(function(w) {
          return WebAssembly.instantiateStreaming(w, A).then(l, function(k) {
            return f("wasm streaming compile failed: " + k), f("falling back to ArrayBuffer instantiation"), I(l);
          });
        });
      }(), {};
    })();
    var ja = t.___wasm_call_ctors = function() {
      return (ja = t.___wasm_call_ctors = t.asm.B).apply(null, arguments);
    }, Vi = t._malloc = function() {
      return (Vi = t._malloc = t.asm.C).apply(null, arguments);
    }, ht = t._free = function() {
      return (ht = t._free = t.asm.D).apply(null, arguments);
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
        if (!Ei && (Ei = !(1 * 5091 + 1534 + -6625 * 1), t.calledRun = !0, !G)) {
          if (Si(fe), Si(Ze), e(t), t.onRuntimeInitialized && t.onRuntimeInitialized(), t.postRun) for (typeof t.postRun == "function" && (t.postRun = [t.postRun]); t.postRun.length; ) {
            var l = t.postRun.shift();
            Ee.unshift(l);
          }
          Si(Ee);
        }
      }
      if (!(4467 + -2 * 1486 + -1495 < Le)) {
        if (t.preRun)
          for (typeof t.preRun == "function" && (t.preRun = [t.preRun]); t.preRun.length; ) tn();
        Si(Ve), 0 < Le || (t.setStatus ? (t.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            t.setStatus("");
          }, -180 * -19 + -347 * -5 + -1718 * 3), c();
        }, 264 * -7 + 6006 + -4157 * 1)) : c());
      }
    }
    if (t.run = jo, t.preInit)
      for (typeof t.preInit == "function" && (t.preInit = [t.preInit]); 207 * -33 + 715 + 6116 < t.preInit.length; ) t.preInit.pop()();
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
      const C = s.slice(0, -1).reduce((f, m) => f[m], i), u = s.reduce((f, m) => f[m], i);
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
            const f = new u(...g);
            x = td(f);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: f, port2: m } = new MessageChannel();
            Qg(i, m), x = ed(f, [f]);
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
      const [u, f] = po(C);
      o.postMessage(Object.assign(Object.assign({}, u), { id: r }), f), a === "RELEASE" && (o.removeEventListener("message", e), $g(o), ar in i && typeof i[ar] == "function" && i[ar]());
    }).catch((C) => {
      const [u, f] = po({
        value: new TypeError("Unserializable return value"),
        [ro]: 0
      });
      o.postMessage(Object.assign(Object.assign({}, u), { id: r }), f);
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
  return hn(i, {
    type: "RELEASE"
  }).then(() => {
    $g(i);
  });
}
const Co = /* @__PURE__ */ new WeakMap(), ho = "FinalizationRegistry" in globalThis && new FinalizationRegistry((i) => {
  const o = (Co.get(i) || 0) - 1;
  Co.set(i, o), o === 0 && qg(i);
});
function $I(i, o) {
  const t = (Co.get(o) || 0) + 1;
  Co.set(o, t), ho && ho.register(i, o, i);
}
function _I(i) {
  ho && ho.unregister(i);
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
        const s = hn(i, {
          type: "GET",
          path: o.map((g) => g.toString())
        }).then(Dt);
        return s.then.bind(s);
      }
      return Xr(i, [...o, a]);
    },
    set(r, a, s) {
      Yi(e);
      const [g, x] = po(s);
      return hn(i, {
        type: "SET",
        path: [...o, a].map((C) => C.toString()),
        value: g
      }, x).then(Dt);
    },
    apply(r, a, s) {
      Yi(e);
      const g = o[o.length - 1];
      if (g === MI)
        return hn(i, {
          type: "ENDPOINT"
        }).then(Dt);
      if (g === "bind")
        return Xr(i, o.slice(0, -1));
      const [x, C] = js(s);
      return hn(i, {
        type: "APPLY",
        path: o.map((u) => u.toString()),
        argumentList: x
      }, C).then(Dt);
    },
    construct(r, a) {
      Yi(e);
      const [s, g] = js(a);
      return hn(i, {
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
  const o = i.map(po);
  return [o.map((t) => t[0]), qI(o.map((t) => t[1]))];
}
const ec = /* @__PURE__ */ new WeakMap();
function ed(i, o) {
  return ec.set(i, o), i;
}
function td(i) {
  return Object.assign(i, { [Jg]: !0 });
}
function po(i) {
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
function hn(i, o, t) {
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
    X(this, An).forEach((o) => {
      X(this, Xt).set(o.name, o.evaluate());
    });
  }
  isValid() {
    return Array.from(X(this, Xt).values()).every((o) => o);
  }
  get result() {
    return X(this, Xt);
  }
  get validators() {
    return X(this, An);
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
    return X(this, Mt);
  }
  get name() {
    return X(this, ai);
  }
  isValueBelowThreshold(o) {
    return o < X(this, Mt);
  }
  isValueAboveThreshold(o) {
    return o > X(this, Mt);
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
    return this.isValueAboveThreshold(X(this, si));
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
    return this.isValueAboveThreshold(X(this, gi));
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
    return this.isValueBelowThreshold(X(this, ci));
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
    return this.isValueAboveThreshold(X(this, li));
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
    return this.isValueAboveThreshold(X(this, xi));
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
    return this.isValueAboveThreshold(X(this, ui));
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
    return this.isValueAboveThreshold(X(this, Ii));
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
    return this.isValueAboveThreshold(X(this, di));
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
    return this.isValueBelowThreshold(X(this, Ci));
  }
}
Ci = new WeakMap();
var hi;
class Cd extends Me {
  constructor(t, e) {
    super("isNotLarge", t);
    ce(this, hi);
    se(this, hi, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(X(this, hi));
  }
}
hi = new WeakMap();
var pi;
class hd extends Me {
  constructor(t, e) {
    super("isNotPitched", t || 57 * -172 + -1 * -6779 + 3125);
    ce(this, pi);
    se(this, pi, e);
  }
  evaluate() {
    const { z: t } = X(this, pi) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
}
pi = new WeakMap();
var fi;
class pd extends Me {
  constructor(t, e) {
    super("isRightEyePresent", t);
    ce(this, fi);
    se(this, fi, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(X(this, fi));
  }
}
fi = new WeakMap();
var mi, bn;
class fd extends Me {
  constructor(t, e, n) {
    super("isNotOutOfBounds", t);
    ce(this, mi);
    ce(this, bn);
    se(this, mi, e), se(this, bn, n);
  }
  evaluate() {
    const t = Mg(X(this, bn), this.threshold), e = jg(X(this, mi), X(this, bn));
    return vI(e, t);
  }
}
mi = new WeakMap(), bn = new WeakMap();
class md {
  static getFaceValidationInstance(o, t, e, n) {
    return new rd([new cd(o.faceConfidence, t.confidence), new xd(o.leftEye.confidence, t.leftEye.confidence), new pd(o.rightEye.confidence, t.rightEye.confidence), new sd(o.minFaceSizeRatio, t.faceSize), new Cd(o.maxFaceSizeRatio, t.faceSize), new ld(o.sharpnessThreshold, t.sharpness), new ad(o.brightnessLowThreshold, t.brightness), new gd(o.brightnessHighThreshold, t.brightness), new fd(o.outOfBoundsThreshold, t, e), new hd(o.pitchAngleAccelerationThreshold, n), new ud(o.mouth.confidence, t.mouth.confidence), new dd(o.mouth.status.max, t.mouth.status), new Id(o.mouth.status.min, t.mouth.status)]);
  }
}
const bo = class bo extends XI {
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
    this.pitchAngleAccelerationThreshold = uu * Math.sin(e * (Math.PI / (-2 * 711 + -7258 + 8860)));
  }
  restart() {
    super.restart(), Fs(bt.INSTRUCTION_CHANGED, void (-1 * -3115 + -1912 + -1203), Mu);
  }
  validateDetectedObject(t, e) {
    const n = md.getFaceValidationInstance({ ...this.getThresholds(), pitchAngleAccelerationThreshold: this.pitchAngleAccelerationThreshold }, t, e, this.acceleration);
    return n.validate(), n;
  }
  async processImage({ image: t, timestamp: e }) {
    var K;
    const n = {};
    n.width = t.width, n.height = t.height;
    const r = n, a = fa(r), s = Ru(t, a), g = Pu(s), x = {};
    x.width = s.width, x.height = s.height;
    const C = x;
    let u = await this.detector.detect(g, C, r);
    u = GI(r, u);
    const f = this.validateDetectedObject(u, r), { result: m } = f, y = this.getInstructionCode(m, f.isValid());
    if (m.get("isPresent")) {
      const S = {};
      S.image = g, S.timestamp = e, this.collectImagesForDuplicateDetection(S);
    }
    if (this.isInCandidateSelection) {
      if (this.bestImage && f.isValid() && this.isNewImageBetter(this.bestImage.detection, u)) {
        const S = { image: t, detection: Cn(u) };
        this.bestImage = S, this.candidateSelectionImages.push(S);
      }
    } else if ((K = this.lastImage) != null && K.isValid && f.isValid()) {
      const S = { image: t, detection: Cn(u) }, W = {};
      W.image = this.lastImage.image, W.detection = this.lastImage.detection;
      const R = W;
      this.isNewImageBetter(R.detection, S.detection) ? this.bestImage = S : this.bestImage = R, this.candidateSelectionImages.push(R, S), this.isInCandidateSelection = !0;
    } else f.isValid() ? this.lastImage = { instructionCode: y, isValid: !0, image: t, detection: Cn(u) } : this.lastImage = { instructionCode: y, isValid: !1, image: t, detection: Cn(u) };
    const G = { detectedFace: Cn(u), instructionCode: y, invalidValidators: this.getInstructionCodesForValidators(m), isInCandidateSelection: this.isInCandidateSelection };
    return this.detectionRecord.push(G.detectedFace), Fs(bt.INSTRUCTION_CHANGED, y), Uu(bt.DETECTED_FACE_CHANGED, G.detectedFace, this.getThresholds().faceConfidence), zu(bt.FACE_DETECTION, G.detectedFace, t), G;
  }
};
j(bo, "_instance");
let Mr = bo;
const Ad = (i, o) => {
  const { handleError: t } = Tn(), [e, n] = Ne(), { acceleration: r } = SI();
  e && e.setAcceleration(r), he(() => {
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
    for (var x = null, C = [], u = 0, f = 0, m; s < g; ) {
      var y = a[s++];
      switch (f) {
        case 0:
          C[u++] = t[y >> 2], m = (y & 3) << 4, f = 1;
          break;
        case 1:
          C[u++] = t[m | y >> 4], m = (y & 15) << 2, f = 2;
          break;
        case 2:
          C[u++] = t[m | y >> 6], C[u++] = t[y & 63], f = 0;
          break;
      }
      u > 8191 && ((x || (x = [])).push(String.fromCharCode.apply(String, C)), u = 0);
    }
    return f && (C[u++] = t[m], C[u++] = 61, f === 1 && (C[u++] = 61)), x ? (u && x.push(String.fromCharCode.apply(String, C.slice(0, u))), x.join("")) : String.fromCharCode.apply(String, C.slice(0, u));
  };
  var r = "invalid encoding";
  o.decode = function(a, s, g) {
    for (var x = g, C = 0, u, f = 0; f < a.length; ) {
      var m = a.charCodeAt(f++);
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
      var g = e(a, s + n), x = e(a, s + r), C = (x >> 31) * 2 + 1, u = x >>> 20 & 2047, f = 4294967296 * (x & 1048575) + g;
      return u === 2047 ? f ? NaN : C * (1 / 0) : u === 0 ? C * 5e-324 * f : C * Math.pow(2, u - 1075) * (f + 4503599627370496);
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
function fo(i, o) {
  return (i[o - 4] | i[o - 3] << 8 | i[o - 2] << 16 | i[o - 1] << 24) >>> 0;
}
xe.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw rt(this, 4);
  return fo(this.buf, this.pos += 4);
};
xe.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw rt(this, 4);
  return fo(this.buf, this.pos += 4) | 0;
};
function a0() {
  if (this.pos + 8 > this.len)
    throw rt(this, 8);
  return new cc(fo(this.buf, this.pos += 4), fo(this.buf, this.pos += 4));
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
const v = ne.Reader, le = ne.Writer, p = ne.util, d = ne.roots.default || (ne.roots.default = {}), _t = d.dot = (() => {
  const i = {};
  return i.Content = function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), n = 0; n < e.length; ++n)
          t[e[n]] != null && (this[e[n]] = t[e[n]]);
    }
    return o.prototype.token = p.newBuffer([]), o.prototype.iv = p.newBuffer([]), o.prototype.schemaVersion = 0, o.prototype.bytes = p.newBuffer([]), o.create = function(t) {
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
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || p.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || p.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !p.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || p.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof d.dot.Content)
        return t;
      let e = new d.dot.Content();
      return t.token != null && (typeof t.token == "string" ? p.base64.decode(t.token, e.token = p.newBuffer(p.base64.length(t.token)), 0) : t.token.length >= 0 && (e.token = t.token)), t.iv != null && (typeof t.iv == "string" ? p.base64.decode(t.iv, e.iv = p.newBuffer(p.base64.length(t.iv)), 0) : t.iv.length >= 0 && (e.iv = t.iv)), t.schemaVersion != null && (e.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? p.base64.decode(t.bytes, e.bytes = p.newBuffer(p.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      return e.defaults && (e.bytes === String ? n.token = "" : (n.token = [], e.bytes !== Array && (n.token = p.newBuffer(n.token))), e.bytes === String ? n.iv = "" : (n.iv = [], e.bytes !== Array && (n.iv = p.newBuffer(n.iv))), n.schemaVersion = 0, e.bytes === String ? n.bytes = "" : (n.bytes = [], e.bytes !== Array && (n.bytes = p.newBuffer(n.bytes)))), t.token != null && t.hasOwnProperty("token") && (n.token = e.bytes === String ? p.base64.encode(t.token, 0, t.token.length) : e.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (n.iv = e.bytes === String ? p.base64.encode(t.iv, 0, t.iv.length) : e.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (n.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (n.bytes = e.bytes === String ? p.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), n;
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
      return t.prototype.images = p.emptyArray, t.prototype.metadata = null, t.create = function(e) {
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
        get: p.oneOfGetter(e = ["sessionToken"]),
        set: p.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "metadata", {
        get: p.oneOfGetter(e = ["web", "android", "ios"]),
        set: p.oneOfSetter(e)
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
        if (n.sessionToken != null && n.hasOwnProperty("sessionToken") && (r._sessionToken = 1, !p.isString(n.sessionToken)))
          return "sessionToken: string expected";
        if (n.componentVersion != null && n.hasOwnProperty("componentVersion") && !p.isString(n.componentVersion))
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
      t.prototype.supportedAbis = p.emptyArray, t.prototype.device = null, t.prototype.digests = p.emptyArray, t.prototype.digestsWithTimestamp = p.emptyArray, t.prototype.dynamicCameraFrameProperties = p.emptyObject;
      let e;
      return Object.defineProperty(t.prototype, "_device", {
        get: p.oneOfGetter(e = ["device"]),
        set: p.oneOfSetter(e)
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
              s.dynamicCameraFrameProperties === p.emptyObject && (s.dynamicCameraFrameProperties = {});
              let u = n.uint32() + n.pos;
              for (g = "", x = null; n.pos < u; ) {
                let f = n.uint32();
                switch (f >>> 3) {
                  case 1:
                    g = n.string();
                    break;
                  case 2:
                    x = d.dot.Int32List.decode(n, n.uint32());
                    break;
                  default:
                    n.skipType(f & 7);
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
            if (!p.isString(n.supportedAbis[r]))
              return "supportedAbis: string[] expected";
        }
        if (n.device != null && n.hasOwnProperty("device") && !p.isString(n.device))
          return "device: string expected";
        if (n.digests != null && n.hasOwnProperty("digests")) {
          if (!Array.isArray(n.digests))
            return "digests: array expected";
          for (let r = 0; r < n.digests.length; ++r)
            if (!(n.digests[r] && typeof n.digests[r].length == "number" || p.isString(n.digests[r])))
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
          if (!p.isObject(n.dynamicCameraFrameProperties))
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
            typeof n.digests[a] == "string" ? p.base64.decode(n.digests[a], r.digests[a] = p.newBuffer(p.base64.length(n.digests[a])), 0) : n.digests[a].length >= 0 && (r.digests[a] = n.digests[a]);
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
            a.digests[g] = r.bytes === String ? p.base64.encode(n.digests[g], 0, n.digests[g].length) : r.bytes === Array ? Array.prototype.slice.call(n.digests[g]) : n.digests[g];
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
      return t.prototype.cameraModelId = "", t.prototype.architectureInfo = p.emptyObject, t.prototype.digests = p.emptyArray, t.prototype.digestsWithTimestamp = p.emptyArray, t.prototype.isoValues = p.emptyArray, t.create = function(e) {
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
              a.architectureInfo === p.emptyObject && (a.architectureInfo = {});
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
        if (e.cameraModelId != null && e.hasOwnProperty("cameraModelId") && !p.isString(e.cameraModelId))
          return "cameraModelId: string expected";
        if (e.architectureInfo != null && e.hasOwnProperty("architectureInfo")) {
          if (!p.isObject(e.architectureInfo))
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
            if (!(e.digests[n] && typeof e.digests[n].length == "number" || p.isString(e.digests[n])))
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
            if (!p.isInteger(e.isoValues[n]))
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
            typeof e.digests[r] == "string" ? p.base64.decode(e.digests[r], n.digests[r] = p.newBuffer(p.base64.length(e.digests[r])), 0) : e.digests[r].length >= 0 && (n.digests[r] = e.digests[r]);
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
            r.digests[s] = n.bytes === String ? p.base64.encode(e.digests[s], 0, e.digests[s].length) : n.bytes === Array ? Array.prototype.slice.call(e.digests[s]) : e.digests[s];
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
      return t.prototype.currentCameraProperties = null, t.prototype.availableCameraProperties = p.emptyArray, t.prototype.hashedDetectedImages = p.emptyArray, t.prototype.hashedDetectedImagesWithTimestamp = p.emptyArray, t.prototype.detectionRecord = p.emptyArray, t.create = function(e) {
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
            if (!p.isString(e.hashedDetectedImages[n]))
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
      return t.prototype.imageHash = "", t.prototype.timestampMillis = p.Long ? p.Long.fromBits(0, 0, !0) : 0, t.create = function(e) {
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
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !p.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !p.isInteger(e.timestampMillis) && !(e.timestampMillis && p.isInteger(e.timestampMillis.low) && p.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof d.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let n = new d.dot.v4.HashedDetectedImageWithTimestamp();
        return e.imageHash != null && (n.imageHash = String(e.imageHash)), e.timestampMillis != null && (p.Long ? (n.timestampMillis = p.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? n.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? n.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (n.timestampMillis = new p.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        if (n.defaults)
          if (r.imageHash = "", p.Long) {
            let a = new p.Long(0, 0, !0);
            r.timestampMillis = n.longs === String ? a.toString() : n.longs === Number ? a.toNumber() : a;
          } else
            r.timestampMillis = n.longs === String ? "0" : 0;
        return e.imageHash != null && e.hasOwnProperty("imageHash") && (r.imageHash = e.imageHash), e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? r.timestampMillis = n.longs === String ? String(e.timestampMillis) : e.timestampMillis : r.timestampMillis = n.longs === String ? p.Long.prototype.toString.call(e.timestampMillis) : n.longs === Number ? new p.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), r;
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
        get: p.oneOfGetter(e = ["aspectRatio"]),
        set: p.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_autoGainControl", {
        get: p.oneOfGetter(e = ["autoGainControl"]),
        set: p.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_channelCount", {
        get: p.oneOfGetter(e = ["channelCount"]),
        set: p.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceId", {
        get: p.oneOfGetter(e = ["deviceId"]),
        set: p.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_displaySurface", {
        get: p.oneOfGetter(e = ["displaySurface"]),
        set: p.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_echoCancellation", {
        get: p.oneOfGetter(e = ["echoCancellation"]),
        set: p.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_facingMode", {
        get: p.oneOfGetter(e = ["facingMode"]),
        set: p.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_frameRate", {
        get: p.oneOfGetter(e = ["frameRate"]),
        set: p.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_groupId", {
        get: p.oneOfGetter(e = ["groupId"]),
        set: p.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_height", {
        get: p.oneOfGetter(e = ["height"]),
        set: p.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_noiseSuppression", {
        get: p.oneOfGetter(e = ["noiseSuppression"]),
        set: p.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleRate", {
        get: p.oneOfGetter(e = ["sampleRate"]),
        set: p.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleSize", {
        get: p.oneOfGetter(e = ["sampleSize"]),
        set: p.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_width", {
        get: p.oneOfGetter(e = ["width"]),
        set: p.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceName", {
        get: p.oneOfGetter(e = ["deviceName"]),
        set: p.oneOfSetter(e)
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
        return typeof n != "object" || n === null ? "object expected" : n.aspectRatio != null && n.hasOwnProperty("aspectRatio") && typeof n.aspectRatio != "number" ? "aspectRatio: number expected" : n.autoGainControl != null && n.hasOwnProperty("autoGainControl") && typeof n.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : n.channelCount != null && n.hasOwnProperty("channelCount") && !p.isInteger(n.channelCount) ? "channelCount: integer expected" : n.deviceId != null && n.hasOwnProperty("deviceId") && !p.isString(n.deviceId) ? "deviceId: string expected" : n.displaySurface != null && n.hasOwnProperty("displaySurface") && !p.isString(n.displaySurface) ? "displaySurface: string expected" : n.echoCancellation != null && n.hasOwnProperty("echoCancellation") && typeof n.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : n.facingMode != null && n.hasOwnProperty("facingMode") && !p.isString(n.facingMode) ? "facingMode: string expected" : n.frameRate != null && n.hasOwnProperty("frameRate") && typeof n.frameRate != "number" ? "frameRate: number expected" : n.groupId != null && n.hasOwnProperty("groupId") && !p.isString(n.groupId) ? "groupId: string expected" : n.height != null && n.hasOwnProperty("height") && !p.isInteger(n.height) ? "height: integer expected" : n.noiseSuppression != null && n.hasOwnProperty("noiseSuppression") && typeof n.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : n.sampleRate != null && n.hasOwnProperty("sampleRate") && !p.isInteger(n.sampleRate) ? "sampleRate: integer expected" : n.sampleSize != null && n.hasOwnProperty("sampleSize") && !p.isInteger(n.sampleSize) ? "sampleSize: integer expected" : n.width != null && n.hasOwnProperty("width") && !p.isInteger(n.width) ? "width: integer expected" : n.deviceName != null && n.hasOwnProperty("deviceName") && !p.isString(n.deviceName) ? "deviceName: string expected" : null;
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
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !p.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !p.isInteger(e.height) ? "height: integer expected" : null;
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
        get: p.oneOfGetter(e = ["cameraInitFrameResolution"]),
        set: p.oneOfSetter(e)
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
        get: p.oneOfGetter(e = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent"]),
        set: p.oneOfSetter(e)
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
      return t.prototype.segments = p.emptyArray, t.prototype.metadata = null, t.create = function(e) {
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
    return o.prototype.bytes = p.newBuffer([]), o.create = function(t) {
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
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || p.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof d.dot.Image)
        return t;
      let e = new d.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? p.base64.decode(t.bytes, e.bytes = p.newBuffer(p.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      return e.defaults && (e.bytes === String ? n.bytes = "" : (n.bytes = [], e.bytes !== Array && (n.bytes = p.newBuffer(n.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (n.bytes = e.bytes === String ? p.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), n;
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
    return o.prototype.items = p.emptyArray, o.create = function(t) {
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
          if (!p.isInteger(t.items[e]))
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
    return o.prototype.digest = p.newBuffer([]), o.prototype.timestampMillis = p.Long ? p.Long.fromBits(0, 0, !0) : 0, o.create = function(t) {
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
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || p.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !p.isInteger(t.timestampMillis) && !(t.timestampMillis && p.isInteger(t.timestampMillis.low) && p.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof d.dot.DigestWithTimestamp)
        return t;
      let e = new d.dot.DigestWithTimestamp();
      return t.digest != null && (typeof t.digest == "string" ? p.base64.decode(t.digest, e.digest = p.newBuffer(p.base64.length(t.digest)), 0) : t.digest.length >= 0 && (e.digest = t.digest)), t.timestampMillis != null && (p.Long ? (e.timestampMillis = p.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new p.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      if (e.defaults)
        if (e.bytes === String ? n.digest = "" : (n.digest = [], e.bytes !== Array && (n.digest = p.newBuffer(n.digest))), p.Long) {
          let r = new p.Long(0, 0, !0);
          n.timestampMillis = e.longs === String ? r.toString() : e.longs === Number ? r.toNumber() : r;
        } else
          n.timestampMillis = e.longs === String ? "0" : 0;
      return t.digest != null && t.hasOwnProperty("digest") && (n.digest = e.bytes === String ? p.base64.encode(t.digest, 0, t.digest.length) : e.bytes === Array ? Array.prototype.slice.call(t.digest) : t.digest), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? n.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : n.timestampMillis = e.longs === String ? p.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new p.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), n;
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
function hc({ documentContent: i, faceContent: o, magnifeyeLivenessContent: t, smileLivenessContent: e }) {
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
  return x.faceContent = g, hc(x);
}
async function Ld(i, o) {
  const t = await Nd(i, o);
  return Cc(t);
}
const Dd = ({ onPhotoTakenInternal: i }) => {
  const { appTier: o, isLicenseValidated: t } = ua(), { analytics: e } = dg(), { appState: n, freemiumOverlayState: r } = Tn(), { faceCameraOptions: a } = Vg(), { cameraFacing: s, onPhotoTaken: g, sessionToken: x, thresholds: C, wasmDirectoryPath: u } = a, { controller: f } = Ad(C, u), m = wn(
    ({ content: B, controller: U, imageData: ue, webMetadata: z }) => {
      _u(Cg.FACE, U.getCandidateSelectionImages()), i == null || i({ cameraProperties: z }), g(ue, B);
    },
    [i, g]
  ), { cameraResolution: y, cameraService: G, detectionDetails: K, videoRef: S } = BI({
    analytics: e,
    cameraFacing: s,
    controller: f,
    sessionToken: x,
    createProtoMessage: Ld,
    onPhotoTaken: m
  }), { shouldMirror: W } = hI(bt.CONTROL, G);
  qu(bt.CAMERA_PROPS_CHANGED, {
    cameraResolution: y,
    shouldMirror: W
  }), he(() => () => {
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
const pc = {};
pc.faceConfidence = 1;
const Zt = {};
Zt.minFaceSizeRatio = 0.3, Zt.maxFaceSizeRatio = 1, Zt.brightnessHighThreshold = 1, Zt.brightnessLowThreshold = -(4252 + -1 * -3953 + 293 * -28), Zt.faceConfidence = 0.15, Zt.sharpnessThreshold = -(-14 * 59 + 14 * 197 + -1931), Zt.outOfBoundsThreshold = -(-8830 * 1 + 7630 + 1201);
const Xd = { [Ye.DISTANT]: zr, [Ye.MIDDLE]: pc, [Ye.CLOSEUP]: Zt }, Md = Xd, g0 = 39 * 23 + -59 * 37 + 643 * 2 + 0.255;
async function jd(i, o) {
  const { MagnifEyeLivenessContent: t } = _t.v4, e = await Promise.all(i.map(async (C) => Ic(C))), n = await dc(o), r = {};
  r.images = e, r.metadata = n;
  const a = r, s = t.verify(a);
  if (s) throw Error(s);
  const g = t.create(a), x = {};
  return x.magnifeyeLivenessContent = g, hc(x);
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
  const t = at(new Fg()), e = Wn(void (3373 * 1 + 808 + -113 * 37)), n = (a) => {
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
  const { analytics: r } = dg(), { appState: a, handleAppStateChange: s, handleError: g, magnifEyePhase: x, setMagnifEyePhase: C } = jx(), u = Wn([]), f = Wn(null), { middleImageBestCandidate: m } = zd(a, x), y = Vu(ii.ANIMATION_END);
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
        web: f.value
      }, B = await Jd(u.value, D), [U] = u.value;
      o(U, B), r == null || r.trackLivenessProcess(u.value);
    } catch (D) {
      D instanceof Error && g(re.fromError(D));
      return;
    }
    s(Yt.DONE);
  }
  function R(P) {
    f.value = Eu(f.value, P.cameraProperties);
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
    (f) => {
      Fr(ii.STATUS_CHANGED, { state: Yt.ERROR, error: f }), a(!1), i(f), r(f), n(Yt.ERROR);
    },
    [i, a, r, n]
  ), u = wn(
    (f) => {
      f !== Yt.WAITING && (n(f), Fr(ii.STATUS_CHANGED, { state: f }));
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
var fc = ((i) => (i.AUTO_CAPTURE = "auto-capture", i))(fc || {});
class tC {
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
    e.key = fc.AUTO_CAPTURE, e.count = 1, e.dur = t, e.segmentation = o;
    const n = [e], r = Fi({ events: JSON.stringify(n) });
    await this.countlyFetch(r);
  }
}
const Xi = new tC();
function nC() {
  const [i] = window.crypto.getRandomValues(new Uint32Array(1));
  return i.toString(-6323 + -5756 * -1 + 583);
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
const c0 = (i) => Math.round(i / 500) * 500 / (5939 * 1 + 705 + -5644), un = (i) => i ? i <= 3242 + -1 * 9151 + 985 * 6 ? Math.round(i * (-583 + 1 * -3093 + -231 * -16)) / (-4 * 1882 + -379 * 15 + 13233) : Math.round(i / (2642 * -1 + -6644 + 8 * 1167)) * (1 * -5744 + 1163 * -1 + 6957) : -1 * 2855 + 16 * -597 + 19 * 653, rC = (i) => Math.round(i * (-15558 + -389 * -40)) / (-2 * 4003 + 2257 * -3 + 14779);
class aC {
  constructor() {
    j(this, "countly", Xi);
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
    j(this, "captureProcessAnalytics", []);
  }
  trackCaptureProcess(t) {
    this.captureProcessAnalytics.push(t);
  }
}
class gC extends sC {
  trackLivenessProcess(o) {
    var u, f, m, y, G, K, S, W, R, J;
    if (!o.length || !this.captureProcessAnalytics.length) return;
    const [t, e, n] = o, [r, a] = this.captureProcessAnalytics, s = rC(r.averageFps + (a == null ? void 0 : a.averageFps)) / (1 * -5402 + -2001 + 7405), g = c0(r.captureProcessDurationInMs), x = c0(a == null ? void 0 : a["captureProcessDurationInMs"]), C = this.createSegmentation({ faceSizeDistant: un((u = t.data.detection) == null ? void 0 : u.faceSize), faceSizeCloseup: un((f = n == null ? void 0 : n.data.detection) == null ? void 0 : f.faceSize), faceSizeMiddle: un((m = e.data.detection) == null ? void 0 : m.faceSize), confidenceDistant: un((y = t.data.detection) == null ? void 0 : y.confidence), confidenceCloseup: un((G = n == null ? void 0 : n.data.detection) == null ? void 0 : G.confidence), confidenceMiddle: un((K = e.data.detection) == null ? void 0 : K.confidence), imageResolution: ((W = (S = t.data) == null ? void 0 : S["imageResolution"]) == null ? void 0 : W.width) + "x" + ((J = (R = t.data) == null ? void 0 : R["imageResolution"]) == null ? void 0 : J.height), averageFps: s, captureTimeCloseup: x > 2707 * -1 + 849 * -7 + -37 * -235 ? ">45" : "" + x, captureTimeDistant: g > 7627 * -1 + 1549 + 6108 ? ">30" : "" + g, camera: oC(r == null ? void 0 : r.deviceName, r == null ? void 0 : r.facingMode), instructionSet: r.instructionSet });
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
