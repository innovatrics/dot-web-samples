var Wc = Object.defineProperty;
var _a = (i) => {
  throw TypeError(i);
};
var kc = (i, o, t) => o in i ? Wc(i, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[o] = t;
var j = (i, o, t) => kc(i, typeof o != "symbol" ? o + "" : o, t), qa = (i, o, t) => o.has(i) || _a("Cannot " + t);
var X = (i, o, t) => (qa(i, o, "read from private field"), t ? t.call(i) : o.get(i)), ce = (i, o, t) => o.has(i) ? _a("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(i) : o.set(i, t), se = (i, o, t, e) => (qa(i, o, "write to private field"), e ? e.call(i, t) : o.set(i, t), t);
var hi, N, l0, x0, Pt, es, u0, gr, _r, cr, lr, I0, qn = {}, d0 = [], Kc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, bo = Array.isArray;
function ft(i, o) {
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
  if (arguments.length > -34 * -151 + -1 * -1010 + -6142 && (a.children = arguments.length > -7454 * 1 + 71 * 8 + 6889 ? hi.call(arguments, -5353 + 171 * -13 + 7578) : t), typeof i == "function" && i.defaultProps != null)
    for (r in i.defaultProps) a[r] === void 0 && (a[r] = i.defaultProps[r]);
  return Un(i, a, e, n, null);
}
function Un(i, o, t, e, n) {
  var r = {};
  r.type = i, r.props = o, r.key = t, r.ref = e, r.__k = null, r.__ = null, r.__b = 0, r.__e = null, r.__d = void (1 * 2711 + -1 * 4327 + 1616), r.__c = null, r.constructor = void (-5787 + -43 * 215 + 15032), r.__v = n ?? ++l0, r.__i = -(3 * 2049 + -36 * -95 + -9566), r.__u = 0;
  var a = r;
  return n == null && N.vnode != null && N.vnode(a), a;
}
function Oc() {
  var i = {};
  return i.current = null, i;
}
function it(i) {
  return i.children;
}
function ze(i, o) {
  this.props = i, this.context = o;
}
function Jt(i, o) {
  if (o == null) return i.__ ? Jt(i.__, i.__i + 1) : null;
  for (var t; o < i.__k.length; o++) if ((t = i.__k[o]) != null && t.__e != null) return t.__e;
  return typeof i.type == "function" ? Jt(i) : null;
}
function h0(i) {
  var o, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, o = -198 * 2 + -198 + 297 * 2; o < i.__k.length; o++) if ((t = i.__k[o]) != null && t.__e != null) {
      i.__e = i.__c.base = t.__e;
      break;
    }
    return h0(i);
  }
}
function xr(i) {
  (!i.__d && (i.__d = !(-24 * -39 + 8602 + -1 * 9538)) && Pt.push(i) && !io.__r++ || es !== N.debounceRendering) && ((es = N.debounceRendering) || u0)(io);
}
function io() {
  var i, o, t, e, n, r, a, s;
  for (Pt.sort(gr); i = Pt.shift(); ) i.__d && (o = Pt.length, e = void (-6 * -950 + 2 * -2293 + 1 * -1114), r = (n = (t = i).__v).__e, a = [], s = [], t.__P && ((e = ft({}, n)).__v = n.__v + (-138 * 53 + -521 * 17 + 16172), N.vnode && N.vnode(e), qr(t.__P, e, n, t.__n, t.__P.namespaceURI, 13615 + 799 * -17 & n.__u ? [r] : null, a, r ?? Jt(n), !!(2217 * 1 + 9332 + -3839 * 3 & n.__u), s), e.__v = n.__v, e.__.__k[e.__i] = e, m0(a, e, s), e.__e != r && h0(e)), Pt.length > o && Pt.sort(gr));
  io.__r = 0;
}
function p0(i, o, t, e, n, r, a, s, g, x, I) {
  var u, m, f, y, Z, T = e && e.__k || d0, S = o.length;
  for (t.__d = g, Vc(t, o, T), g = t.__d, u = -8805 + 5 * 1761; u < S; u++) (f = t.__k[u]) != null && typeof f != "boolean" && typeof f != "function" && (m = -(-12039 + 86 * 140) === f.__i ? qn : T[f.__i] || qn, f.__i = u, qr(i, f, m, n, r, a, s, g, x, I), y = f.__e, f.ref && m.ref != f.ref && (m.ref && ea(m.ref, null, f), I.push(f.ref, f.__c || y, f)), Z == null && y != null && (Z = y), 3 * -21726 + 3893 + 126821 & f.__u || m.__k === f.__k ? (g && typeof f.type == "string" && !i.contains(g) && (g = Jt(m)), g = f0(f, g, i)) : typeof f.type == "function" && void (-563 * 1 + 1232 + -223 * 3) !== f.__d ? g = f.__d : y && (g = y.nextSibling), f.__d = void (3924 * -1 + -12 * 711 + 12456 * 1), f.__u &= -196609);
  t.__d = g, t.__e = Z;
}
function Vc(i, o, t) {
  var e, n, r, a, s, g = o.length, x = t.length, I = x, u = 9196 + -5086 * 1 + -4110;
  for (i.__k = [], e = 5 * -278 + -229 * 32 + 8718; e < g; e++) a = e + u, (n = i.__k[e] = (n = o[e]) == null || typeof n == "boolean" || typeof n == "function" ? null : typeof n == "string" || typeof n == "number" || typeof n == "bigint" || n.constructor == String ? Un(null, n, null, null, null) : bo(n) ? Un(it, { children: n }, null, null, null) : void (15654 + 7827 * -2) === n.constructor && n.__b > 1 * 5479 + -568 * 12 + 1337 ? Un(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v) : n) != null ? (n.__ = i, n.__b = i.__b + (11031 + 5 * -2206), s = Tc(n, t, a, I), n.__i = s, r = null, -(-1 * -2078 + -599 * 13 + 5710 * 1) !== s && (I--, (r = t[s]) && (r.__u |= -233914 * -1 + 63159 + -1 * 166001)), r == null || r.__v === null ? (-(-5479 + -246 * 4 + -1616 * -4) == s && u--, typeof n.type != "function" && (n.__u |= -50101 * 2 + -62283 + 228021)) : s !== a && (s == a - (281 * -13 + -1 * 1434 + 5088) ? u = s - a : s == a + (1 * -2648 + 1065 + 1584) ? u++ : s > a ? I > g - a ? u += s - a : u-- : s < a && u++, s !== e + u && (n.__u |= -29589 + -530 * -150 + 625 * 25))) : (r = t[a]) && r.key == null && r.__e && -219 * 1 + -5261 + 8 * 685 == (-369398 + 50047 * 10 & r.__u) && (r.__e == i.__d && (i.__d = Jt(r)), ur(r, r, !(4811 + 17 * -555 + 4625)), t[a] = null, I--);
  if (I)
    for (e = 0; e < x; e++) (r = t[e]) != null && 17146 + -17146 * 1 == (131072 & r.__u) && (r.__e == i.__d && (i.__d = Jt(r)), ur(r, r));
}
function f0(i, o, t) {
  var e, n;
  if (typeof i.type == "function") {
    for (e = i.__k, n = -3930 + -1 * -827 + -29 * -107; e && n < e.length; n++) e[n] && (e[n].__ = i, o = f0(e[n], o, t));
    return o;
  }
  i.__e != o && (t.insertBefore(i.__e, o || null), o = i.__e);
  do
    o = o && o.nextSibling;
  while (o != null && 1731 + 33 * 239 + -9610 === o.nodeType);
  return o;
}
function mt(i, o) {
  return o = o || [], i == null || typeof i == "boolean" || (bo(i) ? i.some(function(t) {
    mt(t, o);
  }) : o.push(i)), o;
}
function Tc(i, o, t, e) {
  var n = i.key, r = i.type, a = t - 1, s = t + (1 * 5269 + 2693 * -1 + 103 * -25), g = o[t];
  if (g === null || g && n == g.key && r === g.type && -1261 + -13 * -97 == (-33036 + 5861 * 28 & g.__u)) return t;
  if (e > (g != null && -2 * 4958 + 5 * 22 + 9806 == (131072 & g.__u) ? 1138 * 2 + -6737 + 97 * 46 : 6995 + 96 * 94 + -16019)) for (; a >= -9335 * -1 + 122 * 69 + -17753 || s < o.length; ) {
    if (a >= 2938 + 29 * 193 + 15 * -569) {
      if ((g = o[a]) && 947 * 10 + -359 * 20 + 1 * -2290 == (38068 + -162111 * 1 + 1295 * 197 & g.__u) && n == g.key && r === g.type) return a;
      a--;
    }
    if (s < o.length) {
      if ((g = o[s]) && 2646 + 1 * -3760 + 1 * 1114 == (131072 & g.__u) && n == g.key && r === g.type) return s;
      s++;
    }
  }
  return -(-31 * -243 + 3470 + -11002);
}
function ts(i, o, t) {
  o[1 * 6734 + -5602 + -566 * 2] === "-" ? i.setProperty(o, t ?? "") : i[o] = t == null ? "" : typeof t != "number" || Kc.test(o) ? t : t + "px";
}
function Oi(i, o, t, e, n) {
  var r;
  e: if (o === "style")
    if (typeof t == "string") i.style.cssText = t;
    else {
      if (typeof e == "string" && (i.style.cssText = e = ""), e)
        for (o in e) t && o in t || ts(i.style, o, "");
      if (t)
        for (o in t) e && t[o] === e[o] || ts(i.style, o, t[o]);
    }
  else if (o[8403 + -1 * -1636 + -10039] === "o" && o[-200 * -41 + 157 * -18 + 5373 * -1] === "n") r = o !== (o = o.replace(/(PointerCapture)$|Capture$/i, "$1")), o = o.toLowerCase() in i || o === "onFocusOut" || o === "onFocusIn" ? o.toLowerCase().slice(1934 * 4 + 2708 * 3 + -15858) : o.slice(2), i.l || (i.l = {}), i.l[o + r] = t, t ? e ? t.u = e.u : (t.u = _r, i.addEventListener(o, r ? lr : cr, r)) : i.removeEventListener(o, r ? lr : cr, r);
  else {
    if (n == "http://www.w3.org/2000/svg") o = o.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (o != "width" && o != "height" && o != "href" && o != "list" && o != "form" && o != "tabIndex" && o != "download" && o != "rowSpan" && o != "colSpan" && o != "role" && o != "popover" && o in i) try {
      i[o] = t ?? "";
      break e;
    } catch {
    }
    typeof t == "function" || (t == null || !(9812 + 394 * 1 + -10205) === t && o[2497 + -25 * -109 + -5218] !== "-" ? i.removeAttribute(o) : i.setAttribute(o, o == "popover" && 7181 + -1795 * 4 == t ? "" : t));
  }
}
function ns(i) {
  return function(o) {
    if (this.l) {
      var t = this.l[o.type + i];
      if (o.t == null) o.t = _r++;
      else if (o.t < t.u) return;
      return t(N.event ? N.event(o) : o);
    }
  };
}
function qr(i, o, t, e, n, r, a, s, g, x) {
  var I, u, m, f, y, Z, T, S, B, R, U, Y, F, W, J, ue, z = o.type;
  if (void (26 * -61 + 9910 + -2081 * 4) !== o.constructor) return null;
  13 * 98 + 3737 * -2 + 6328 & t.__u && (g = !!(1 * 715 + 647 * 4 + -3271 & t.__u), r = [s = o.__e = t.__e]), (I = N.__b) && I(o);
  e: if (typeof z == "function") try {
    if (S = o.props, B = "prototype" in z && z.prototype.render, R = (I = z.contextType) && e[I.__c], U = I ? R ? R.props.value : I.__ : e, t.__c ? T = (u = o.__c = t.__c).__ = u.__E : (B ? o.__c = u = new z(S, U) : (o.__c = u = new ze(S, U), u.constructor = z, u.render = Rc), R && R.sub(u), u.props = S, u.state || (u.state = {}), u.context = U, u.__n = e, m = u.__d = !(1087 + -5303 * -1 + -6390), u.__h = [], u._sb = []), B && u.__s == null && (u.__s = u.state), B && z.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = ft({}, u.__s)), ft(u.__s, z.getDerivedStateFromProps(S, u.__s))), f = u.props, y = u.state, u.__v = o, m) B && z.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), B && u.componentDidMount != null && u.__h.push(u.componentDidMount);
    else {
      if (B && z.getDerivedStateFromProps == null && S !== f && u.componentWillReceiveProps != null && u.componentWillReceiveProps(S, U), !u.__e && (u.shouldComponentUpdate != null && !(10954 + -1217 * 9) === u.shouldComponentUpdate(S, u.__s, U) || o.__v === t.__v)) {
        for (o.__v !== t.__v && (u.props = S, u.state = u.__s, u.__d = !(-5 * -1228 + -8789 + 2650)), o.__e = t.__e, o.__k = t.__k, o.__k.forEach(function(Ie) {
          Ie && (Ie.__ = o);
        }), Y = -1 * -371 + 3839 + -4210; Y < u._sb.length; Y++) u.__h.push(u._sb[Y]);
        u._sb = [], u.__h.length && a.push(u);
        break e;
      }
      u.componentWillUpdate != null && u.componentWillUpdate(S, u.__s, U), B && u.componentDidUpdate != null && u.__h.push(function() {
        u.componentDidUpdate(f, y, Z);
      });
    }
    if (u.context = U, u.props = S, u.__P = i, u.__e = !(2 * 4474 + 3577 + -3131 * 4), F = N.__r, W = 11633 + 11633 * -1, B) {
      for (u.state = u.__s, u.__d = !(18183 + -9091 * 2), F && F(o), I = u.render(u.props, u.state, u.context), J = -6673 * 1 + 5387 + 1286; J < u._sb.length; J++) u.__h.push(u._sb[J]);
      u._sb = [];
    } else do
      u.__d = !(49 * 73 + 81 * -58 + 2 * 561), F && F(o), I = u.render(u.props, u.state, u.context), u.state = u.__s;
    while (u.__d && ++W < 4254 * -2 + 9104 + -571 * 1);
    u.state = u.__s, u.getChildContext != null && (e = ft(ft({}, e), u.getChildContext())), B && !m && u.getSnapshotBeforeUpdate != null && (Z = u.getSnapshotBeforeUpdate(f, y)), p0(i, bo(ue = I != null && I.type === it && I.key == null ? I.props.children : I) ? ue : [ue], o, t, e, n, r, a, s, g, x), u.base = o.__e, o.__u &= -161, u.__h.length && a.push(u), T && (u.__E = u.__ = null);
  } catch (Ie) {
    o.__v = null, g || r != null ? (o.__e = s, o.__u |= g ? 4117 + 97 * 43 + -508 * 16 : -1 * 7113 + 1669 * -2 + 11 * 953, r[r.indexOf(s)] = null) : (o.__e = t.__e, o.__k = t.__k), N.__e(Ie, o, t);
  }
  else r == null && o.__v === t.__v ? (o.__k = t.__k, o.__e = t.__e) : o.__e = Ec(t.__e, o, t, e, n, r, a, g, x);
  (I = N.diffed) && I(o);
}
function m0(i, o, t) {
  o.__d = void (-573 * -3 + -7676 + 5957);
  for (var e = 10003 + 10003 * -1; e < t.length; e++) ea(t[e], t[++e], t[++e]);
  N.__c && N.__c(o, i), i.some(function(n) {
    try {
      i = n.__h, n.__h = [], i.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      N.__e(r, n.__v);
    }
  });
}
function Ec(i, o, t, e, n, r, a, s, g) {
  var x, I, u, m, f, y, Z, T = t.props, S = o.props, B = o.type;
  if (B === "svg" ? n = "http://www.w3.org/2000/svg" : B === "math" ? n = "http://www.w3.org/1998/Math/MathML" : n || (n = "http://www.w3.org/1999/xhtml"), r != null) {
    for (x = -2237 * -1 + -3524 + 99 * 13; x < r.length; x++) if ((f = r[x]) && "setAttribute" in f == !!B && (B ? f.localName === B : -3503 * 1 + -4261 + 3 * 2589 === f.nodeType)) {
      i = f, r[x] = null;
      break;
    }
  }
  if (i == null) {
    if (B === null) return document.createTextNode(S);
    i = document.createElementNS(n, B, S.is && S), r = null, s = !(8907 + 1 * 7134 + -802 * 20);
  }
  if (B === null) T === S || s && i.data === S || (i.data = S);
  else {
    if (r = r && hi.call(i.childNodes), T = t.props || qn, !s && r != null)
      for (T = {}, x = 0; x < i.attributes.length; x++) T[(f = i.attributes[x]).name] = f.value;
    for (x in T) if (f = T[x], x != "children") {
      if (x == "dangerouslySetInnerHTML") u = f;
      else if (x !== "key" && !(x in S)) {
        if (x == "value" && "defaultValue" in S || x == "checked" && "defaultChecked" in S) continue;
        Oi(i, x, null, f, n);
      }
    }
    for (x in S) f = S[x], x == "children" ? m = f : x == "dangerouslySetInnerHTML" ? I = f : x == "value" ? y = f : x == "checked" ? Z = f : x === "key" || s && typeof f != "function" || T[x] === f || Oi(i, x, f, T[x], n);
    if (I) s || u && (I.__html === u.__html || I.__html === i.innerHTML) || (i.innerHTML = I.__html), o.__k = [];
    else if (u && (i.innerHTML = ""), p0(i, bo(m) ? m : [m], o, t, e, B === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n, r, a, r ? r[1e4 + 2 * -643 + -1 * 8714] : t.__k && Jt(t, 5805 + -168 * 23 + -1941), s, g), r != null)
      for (x = r.length; x--; ) r[x] != null && C0(r[x]);
    s || (x = "value", void (6606 + 458 * -5 + -4316) !== y && (y !== i[x] || B === "progress" && !y || B === "option" && y !== T[x]) && Oi(i, x, y, T[x], n), x = "checked", void (-2487 * -1 + -2 * -4859 + -12205) !== Z && Z !== i[x] && Oi(i, x, Z, T[x], n));
  }
  return i;
}
function ea(i, o, t) {
  try {
    typeof i == "function" ? i(o) : i.current = o;
  } catch (e) {
    N.__e(e, t);
  }
}
function ur(i, o, t) {
  var e, n;
  if (N.unmount && N.unmount(i), (e = i.ref) && (e.current && e.current !== i.__e || ea(e, null, o)), (e = i.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (r) {
      N.__e(r, o);
    }
    e.base = e.__P = null;
  }
  if (e = i.__k)
    for (n = 1 * -8185 + -331 * 4 + 9509; n < e.length; n++) e[n] && ur(e[n], o, t || typeof i.type != "function");
  t || i.__e == null || C0(i.__e), i.__c = i.__ = i.__e = i.__d = void (3991 + 1 * 8893 + -12884);
}
function Rc(i, o, t) {
  return this.constructor(i, t);
}
function Ht(i, o, t) {
  var e, n, r, a;
  N.__ && N.__(i, o), n = (e = typeof t == "function") ? null : t && t.__k || o.__k, r = [], a = [], qr(o, i = (!e && t || o).__k = ke(it, null, [i]), n || qn, qn, o.namespaceURI, !e && t ? [t] : n ? null : o.firstChild ? hi.call(o.childNodes) : null, r, !e && t ? t : n ? n.__e : o.firstChild, e, a), m0(r, i, a);
}
function ta(i, o) {
  Ht(i, o, ta);
}
function na(i, o, t) {
  var e, n, r, a, s = ft({}, i.props);
  for (r in i.type && i.type.defaultProps && (a = i.type.defaultProps), o) r == "key" ? e = o[r] : r == "ref" ? n = o[r] : s[r] = void (7230 + -6438 * 1 + 792 * -1) === o[r] && void (4 * 326 + -23 * 314 + 5918 * 1) !== a ? a[r] : o[r];
  return arguments.length > -8103 * 1 + 6 * 319 + -1 * -6191 && (s.children = arguments.length > -3449 * -1 + -9897 + 6451 ? hi.call(arguments, 7 * -797 + -3005 * -3 + -3434) : t), Un(i.type, s, e || i.key, n || i.ref, null);
}
function pi(i, o) {
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
        s.__e = !0, xr(s);
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
hi = d0.slice, N = { __e: function(i, o, t, e) {
  for (var n, r, a; o = o.__; ) if ((n = o.__c) && !n.__) try {
    if ((r = n.constructor) && r.getDerivedStateFromError != null && (n.setState(r.getDerivedStateFromError(i)), a = n.__d), n.componentDidCatch != null && (n.componentDidCatch(i, e || {}), a = n.__d), a) return n.__E = n;
  } catch (s) {
    i = s;
  }
  throw i;
} }, l0 = 6501 + -7 * -1023 + 3 * -4554, x0 = function(i) {
  return i != null && i.constructor == null;
}, ze.prototype.setState = function(i, o) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ft({}, this.state), typeof i == "function" && (i = i(ft({}, t), this.props)), i && ft(t, i), i != null && this.__v && (o && this._sb.push(o), xr(this));
}, ze.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !(5508 + 802 * -6 + -29 * 24), i && this.__h.push(i), xr(this));
}, ze.prototype.render = it, Pt = [], u0 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, gr = function(i, o) {
  return i.__v.__b - o.__v.__b;
}, io.__r = 497 * 6 + -23 * -346 + -10940, _r = 0, cr = ns(!(-2324 + -5 * -465)), lr = ns(!(1 * -5545 + -1 * -573 + 2 * 2486)), I0 = -445 * 14 + 3233 * 2 + -1 * 236;
function ia() {
  return (ia = Object.assign ? Object.assign.bind() : function(i) {
    for (var o = -59 * 9 + 1 * -5483 + 6015; o < arguments.length; o++) {
      var t = arguments[o];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
    }
    return i;
  }).apply(this, arguments);
}
var Pc = ["context", "children"];
function Lc(i) {
  this.getChildContext = function() {
    return i.context;
  };
  var o = i.children, t = function(e, n) {
    if (e == null) return {};
    var r, a, s = {}, g = Object.keys(e);
    for (a = -2867 + 61 * 47; a < g.length; a++) n.indexOf(r = g[a]) >= 1 * 1543 + -52 * -94 + -109 * 59 || (s[r] = e[r]);
    return s;
  }(i, Pc);
  return na(o, t);
}
function Nc() {
  var i = {};
  i.detail = {}, i.bubbles = !(69 * 132 + 1012 + -2530 * 4), i.cancelable = !(-4 * -1583 + -86 + -2 * 3123);
  var o = new CustomEvent("_preact", i);
  this.dispatchEvent(o), this._vdom = ke(Lc, ia({}, this._props, { context: o.detail.context }), function t(e, n) {
    if (2154 + -1 * 293 + -1858 === e.nodeType) return e.data;
    if (-493 * -3 + -8330 + 6852 !== e.nodeType) return null;
    var r = [], a = {}, s = -4062 + 19 * -469 + 12973, g = e.attributes, x = e.childNodes;
    for (s = g.length; s--; ) g[s].name !== "slot" && (a[g[s].name] = g[s].value, a[A0(g[s].name)] = g[s].value);
    for (s = x.length; s--; ) {
      var I = t(x[s], null), u = x[s].slot;
      u ? a[u] = ke(is, { name: u }, I) : r[s] = I;
    }
    var m = n ? ke(is, null, r) : r;
    return ke(n || e.nodeName.toLowerCase(), a, m);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? ta : Ht)(this._vdom, this._root);
}
function A0(i) {
  return i.replace(/-(\w)/g, function(o, t) {
    return t ? t.toUpperCase() : "";
  });
}
function Dc(i, o, t) {
  if (this._vdom) {
    var e = {};
    e[i] = t = t ?? void (-6837 * 1 + -127 * 55 + -1 * -13822), e[A0(i)] = t, this._vdom = na(this._vdom, e), Ht(this._vdom, this._root);
  }
}
function Yc() {
  Ht(this._vdom = null, this._root);
}
function is(i, o) {
  var t = this;
  return ke("slot", ia({}, i, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(n) {
      n.stopPropagation(), n.detail.context = o;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function Fc(i, o, t, e) {
  function n() {
    var r = Reflect.construct(HTMLElement, [], n);
    return r._vdomComponent = i, r._root = r, r;
  }
  return (n.prototype = Object.create(HTMLElement.prototype)).constructor = n, n.prototype.connectedCallback = Nc, n.prototype.attributeChangedCallback = Dc, n.prototype.disconnectedCallback = Yc, t = t || i.observedAttributes || Object.keys(i.propTypes || {}), n.observedAttributes = t, t.forEach(function(r) {
    Object.defineProperty(n.prototype, r, { get: function() {
      return this._vdom.props[r];
    }, set: function(a) {
      this._vdom ? this.attributeChangedCallback(r, null, a) : (this._props || (this._props = {}), this._props[r] = a, this.connectedCallback());
      var s = typeof a;
      a != null && s !== "string" && s !== "boolean" && s !== "number" || this.setAttribute(r, a);
    } });
  }), customElements.define(o, n);
}
var Xc = -1714 + 2 * -1970 + 5654;
function H(i, o, t, e, n, r) {
  o || (o = {});
  var a, s, g = o;
  if ("ref" in g)
    for (s in g = {}, o) s == "ref" ? a = o[s] : g[s] = o[s];
  var x = {};
  x.type = i, x.props = g, x.key = t, x.ref = a, x.__k = null, x.__ = null, x.__b = 0, x.__e = null, x.__d = void (-4826 + -38 * -127), x.__c = null, x.constructor = void (-726 * -11 + -8120 + -1 * -134), x.__v = --Xc, x.__i = -(-5224 + -475 * -11), x.__u = 0, x.__source = n, x.__self = r;
  var I = x;
  if (typeof i == "function" && (a = i.defaultProps))
    for (s in a) void (-837 + 1 * -5153 + -2995 * -2) === g[s] && (g[s] = a[s]);
  return N.vnode && N.vnode(I), I;
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
function Mc(i) {
  var o = Object.create(null);
  return function(t) {
    return o[t] === void 0 && (o[t] = i(t)), o[t];
  };
}
var jc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Jc = Mc(function(i) {
  return jc.test(i) || i.charCodeAt(-10 * -51 + -7627 * 1 + 7117) === -3 * -1663 + -2752 + -2126 && i.charCodeAt(2182 * -2 + -6 * 499 + 7359) === -230 * 4 + 199 * 29 + -4741 && i.charCodeAt(-1 * -6379 + -6217 + -160) < 91;
}), Wt, re, Jo, os, vn = -579 + -1 * -579, b0 = [], ge = N, rs = ge.__b, as = ge.__r, ss = ge.diffed, gs = ge.__c, cs = ge.unmount, ls = ge.__;
function Wn(i, o) {
  ge.__h && ge.__h(re, i, vn || o), vn = 2 * -4464 + -7542 + 16470;
  var t = {};
  t.__ = [], t.__h = [];
  var e = re.__H || (re.__H = t);
  return i >= e.__.length && e.__.push({}), e.__[i];
}
function Ye(i) {
  return vn = -2380 * 1 + -8419 * -1 + -3019 * 2, oa(w0, i);
}
function oa(i, o, t) {
  var e = Wn(Wt++, 2);
  if (e.t = i, !e.__c && (e.__ = [t ? t(o) : w0(void (7418 + -2 * -2243 + 16 * -744), o), function(s) {
    var g = e.__N ? e.__N[0] : e.__[0], x = e.t(g, s);
    g !== x && (e.__N = [x, e.__[-289 * 7 + 3403 * 1 + -1379]], e.__c.setState({}));
  }], e.__c = re, !re.u)) {
    var n = function(s, g, x) {
      if (!e.__c.__H) return !0;
      var I = e.__c.__H.__.filter(function(m) {
        return !!m.__c;
      });
      if (I.every(function(m) {
        return !m.__N;
      })) return !r || r.call(this, s, g, x);
      var u = !(-2 * 1453 + -2332 + 1 * 5239);
      return I.forEach(function(m) {
        if (m.__N) {
          var f = m.__[0];
          m.__ = m.__N, m.__N = void 0, f !== m.__[0] && (u = !0);
        }
      }), !(!u && e.__c.props === s) && (!r || r.call(this, s, g, x));
    };
    re.u = !(78 * 72 + 23 * 397 + -14747 * 1);
    var r = re.shouldComponentUpdate, a = re.componentWillUpdate;
    re.componentWillUpdate = function(s, g, x) {
      if (this.__e) {
        var I = r;
        r = void (1 * 6491 + 30 * 108 + 263 * -37), n(s, g, x), r = I;
      }
      a && a.call(this, s, g, x);
    }, re.shouldComponentUpdate = n;
  }
  return e.__N || e.__;
}
function be(i, o) {
  var t = Wn(Wt++, 3);
  !ge.__s && ra(t.__H, o) && (t.__ = i, t.i = o, re.__H.__h.push(t));
}
function kn(i, o) {
  var t = Wn(Wt++, 4);
  !ge.__s && ra(t.__H, o) && (t.__ = i, t.i = o, re.__h.push(t));
}
function bt(i) {
  return vn = 13199 + 733 * -18, Fe(function() {
    var o = {};
    return o.current = i, o;
  }, []);
}
function y0(i, o, t) {
  vn = -1542 + 1045 * 7 + 1 * -5767, kn(function() {
    return typeof i == "function" ? (i(o()), function() {
      return i(null);
    }) : i ? (i.current = o(), function() {
      return i.current = null;
    }) : void (8237 * -1 + 137 * -58 + 16183);
  }, t == null ? t : t.concat(i));
}
function Fe(i, o) {
  var t = Wn(Wt++, 7);
  return ra(t.__H, o) && (t.__ = i(), t.__H = o, t.__h = i), t.__;
}
function wn(i, o) {
  return vn = -789 * 10 + 2056 * 1 + 5842, Fe(function() {
    return i;
  }, o);
}
function _t(i) {
  var o = re.context[i.__c], t = Wn(Wt++, 5699 * -1 + -8 * 1102 + 14524);
  return t.c = i, o ? (t.__ == null && (t.__ = !(-661 * -3 + 929 * -1 + -1054 * 1), o.sub(re)), o.props.value) : i.__;
}
function oo(i, o) {
  ge.useDebugValue && ge.useDebugValue(o ? o(i) : i);
}
function v0() {
  var i = Wn(Wt++, 11);
  if (!i.__) {
    for (var o = re.__v; o !== null && !o.__m && o.__ !== null; ) o = o.__;
    var t = o.__m || (o.__m = [-3880 + 388 * 10, 7537 + 7537 * -1]);
    i.__ = "P" + t[0] + "-" + t[-2 * -2398 + -5849 + 1054]++;
  }
  return i.__;
}
function Uc() {
  for (var i; i = b0.shift(); ) if (i.__P && i.__H) try {
    i.__H.__h.forEach(Yi), i.__H.__h.forEach(Ir), i.__H.__h = [];
  } catch (o) {
    i.__H.__h = [], ge.__e(o, i.__v);
  }
}
ge.__b = function(i) {
  re = null, rs && rs(i);
}, ge.__ = function(i, o) {
  i && o.__k && o.__k.__m && (i.__m = o.__k.__m), ls && ls(i, o);
}, ge.__r = function(i) {
  as && as(i), Wt = -4358 + -2 * 317 + 4992;
  var o = (re = i.__c).__H;
  o && (Jo === re ? (o.__h = [], re.__h = [], o.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void 0;
  })) : (o.__h.forEach(Yi), o.__h.forEach(Ir), o.__h = [], Wt = 1423 + 157 * 11 + -450 * 7)), Jo = re;
}, ge.diffed = function(i) {
  ss && ss(i);
  var o = i.__c;
  o && o.__H && (o.__H.__h.length && (26 * 381 + 2937 + -2 * 6421 !== b0.push(o) && os === ge.requestAnimationFrame || ((os = ge.requestAnimationFrame) || zc)(Uc)), o.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (-3537 + -29 * 182 + 8815 * 1);
  })), Jo = re = null;
}, ge.__c = function(i, o) {
  o.some(function(t) {
    try {
      t.__h.forEach(Yi), t.__h = t.__h.filter(function(e) {
        return !e.__ || Ir(e);
      });
    } catch (e) {
      o.some(function(n) {
        n.__h && (n.__h = []);
      }), o = [], ge.__e(e, t.__v);
    }
  }), gs && gs(i, o);
}, ge.unmount = function(i) {
  cs && cs(i);
  var o, t = i.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      Yi(e);
    } catch (n) {
      o = n;
    }
  }), t.__H = void (569 * -8 + -9263 + 13815), o && ge.__e(o, t.__v));
};
var xs = typeof requestAnimationFrame == "function";
function zc(i) {
  var o, t = function() {
    clearTimeout(e), xs && cancelAnimationFrame(o), setTimeout(i);
  }, e = setTimeout(t, 100);
  xs && (o = requestAnimationFrame(t));
}
function Yi(i) {
  var o = re, t = i.__c;
  typeof t == "function" && (i.__c = void (8696 + -6374 * 1 + 27 * -86), t()), re = o;
}
function Ir(i) {
  var o = re;
  i.__c = i.__(), re = o;
}
function ra(i, o) {
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
function dr(i, o) {
  for (var t in i) if (t !== "__source" && !(t in o)) return !(-4521 + 11 * 411);
  for (var e in o) if (e !== "__source" && i[e] !== o[e]) return !(7959 * -1 + -5692 + 13651);
  return !(2214 * -4 + 1569 + 7288);
}
function Cr(i, o) {
  this.props = i, this.context = o;
}
function Qc(i, o) {
  function t(n) {
    var r = this.props.ref, a = r == n.ref;
    return !a && r && (r.call ? r(null) : r.current = null), o ? !o(this.props, n) || !a : dr(this.props, n);
  }
  function e(n) {
    return this.shouldComponentUpdate = t, ke(i, n);
  }
  return e.displayName = "Memo(" + (i.displayName || i.name) + ")", e.prototype.isReactComponent = !(9087 + 9 * -929 + 11 * -66), e.__f = !0, e;
}
(Cr.prototype = new ze()).isPureReactComponent = !(-1350 + -4803 * 1 + 6153), Cr.prototype.shouldComponentUpdate = function(i, o) {
  return dr(this.props, i) || dr(this.state, o);
};
var us = N.__b;
N.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), us && us(i);
};
var $c = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || -6296 + -34 * 287 + -5 * -3993;
function B0(i) {
  function o(t) {
    var e = S0({}, t);
    return delete e.ref, i(e, t.ref || null);
  }
  return o.$$typeof = $c, o.render = o, o.prototype.isReactComponent = o.__f = !(516 + -149 * -47 + -7519), o.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", o;
}
var Is = function(i, o) {
  return i == null ? null : mt(mt(i).map(o));
}, _c = { map: Is, forEach: Is, count: function(i) {
  return i ? mt(i).length : 1 * -6279 + 1 * 7873 + -1594;
}, only: function(i) {
  var o = mt(i);
  if (-17064 + -1 * -17065 !== o.length) throw "Children.only";
  return o[-25 * -302 + -1605 + -5945];
}, toArray: mt }, qc = N.__e;
N.__e = function(i, o, t, e) {
  if (i.then) {
    for (var n, r = o; r = r.__; ) if ((n = r.__c) && n.__c) return o.__e == null && (o.__e = t.__e, o.__k = t.__k), n.__c(i, o);
  }
  qc(i, o, t, e);
};
var ds = N.unmount;
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
  }), i.__c && i.__c.__P === o && (i.__e && t.appendChild(i.__e), i.__c.__e = !0, i.__c.__P = t)), i;
}
function Fi() {
  this.__u = 12919 + -1 * 12919, this.t = null, this.__b = null;
}
function H0(i) {
  var o = i.__.__c;
  return o && o.__a && o.__a(i);
}
function el(i) {
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
  return n.displayName = "Lazy", n.__f = !(-83 * 63 + 2 * -3613 + 12455), n;
}
function Dn() {
  this.u = null, this.o = null;
}
N.unmount = function(i) {
  var o = i.__c;
  o && o.__R && o.__R(), o && 32 & i.__u && (i.type = null), ds && ds(i);
}, (Fi.prototype = new ze()).__c = function(i, o) {
  var t = o.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var n = H0(e.__v), r = !(-2211 * 1 + 9592 + -5 * 1476), a = function() {
    r || (r = !(-2767 * 3 + 9741 + -16 * 90), t.__R = null, n ? n(s) : s());
  };
  t.__R = a;
  var s = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var g = e.state.__a;
        e.__v.__k[5263 + 59 * -43 + 58 * -47] = Z0(g, g.__c.__P, g.__c.__O);
      }
      var x;
      for (e.setState({ __a: e.__b = null }); x = e.t.pop(); ) x.forceUpdate();
    }
  };
  e.__u++ || -7204 * -1 + 2001 + -9173 * 1 & o.__u || e.setState({ __a: e.__b = e.__v.__k[2260 + 3238 * -1 + 978] }), i.then(a, a);
}, Fi.prototype.componentWillUnmount = function() {
  this.t = [];
}, Fi.prototype.render = function(i, o) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[-1 * 9895 + 5505 * 1 + 4390].__c;
      this.__v.__k[6026 + -23 * 262] = G0(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var n = o.__a && ke(it, null, i.fallback);
  return n && (n.__u &= -(8933 * 1 + -4593 + -4307 * 1)), [ke(it, null, o.__a ? null : i.children), n];
};
var Cs = function(i, o, t) {
  if (++t[662 * -6 + 1 * -1214 + 5187] === t[1 * -5223 + 2 * 4331 + 181 * -19] && i.o.delete(o), i.props.revealOrder && (i.props.revealOrder[-2 * 2903 + -4 * 1856 + 13230] !== "t" || !i.o.size)) for (t = i.u; t; ) {
    for (; t.length > 3; ) t.pop()();
    if (t[1] < t[-7745 + -895 * 9 + 3160 * 5]) break;
    i.u = t = t[1153 * 5 + -6 * -428 + -8331];
  }
};
function tl(i) {
  return this.getChildContext = function() {
    return i.context;
  }, i.children;
}
function nl(i) {
  var o = this, t = i.i;
  o.componentWillUnmount = function() {
    Ht(null, o.l), o.l = null, o.i = null;
  }, o.i && o.i !== t && o.componentWillUnmount(), o.l || (o.i = t, o.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(1287 * -5 + 6601 + -166);
  }, appendChild: function(e) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, insertBefore: function(e, n) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> -4249 * -1 + 9437 * -1 + -5189 * -1, -2 * -1753 + 1732 * -4 + 3423), o.i.removeChild(e);
  } }), Ht(ke(tl, { context: o.context }, i.__v), o.l);
}
function il(i, o) {
  var t = {};
  t.__v = i, t.i = o;
  var e = ke(nl, t);
  return e.containerInfo = o, e;
}
(Dn.prototype = new ze()).__a = function(i) {
  var o = this, t = H0(o.__v), e = o.o.get(i);
  return e[-43 * -34 + 4844 + 3 * -2102]++, function(n) {
    var r = function() {
      o.props.revealOrder ? (e.push(n), Cs(o, i, e)) : n();
    };
    t ? t(r) : r();
  };
}, Dn.prototype.render = function(i) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var o = mt(i.children);
  i.revealOrder && i.revealOrder[3244 + 4082 * 2 + -1426 * 8] === "b" && o.reverse();
  for (var t = o.length; t--; ) this.o.set(o[t], this.u = [17 * 363 + 733 * -13 + -3359 * -1, 0, this.u]);
  return i.children;
}, Dn.prototype.componentDidUpdate = Dn.prototype.componentDidMount = function() {
  var i = this;
  this.o.forEach(function(o, t) {
    Cs(i, t, o);
  });
};
var W0 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || -1 * -36683 + 7 * 1293 + 1 * 14369, ol = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, rl = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, al = /[A-Z0-9]/g, sl = typeof document < "u", gl = function(i) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
function cl(i, o, t) {
  return o.__k == null && (o.textContent = ""), Ht(i, o), typeof t == "function" && t(), i ? i.__c : null;
}
function ll(i, o, t) {
  return ta(i, o), typeof t == "function" && t(), i ? i.__c : null;
}
ze.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty(ze.prototype, i, { configurable: !(2 * -334 + -5940 + 6608), get: function() {
    return this["UNSAFE_" + i];
  }, set: function(o) {
    var t = {};
    t.configurable = !(5 * 957 + 5200 + -9985 * 1), t.writable = !(-35 * 79 + 136 * -2 + 3037), t.value = o, Object.defineProperty(this, i, t);
  } });
});
var hs = N.event;
function xl() {
}
function ul() {
  return this.cancelBubble;
}
function Il() {
  return this.defaultPrevented;
}
N.event = function(i) {
  return hs && (i = hs(i)), i.persist = xl, i.isPropagationStopped = ul, i.isDefaultPrevented = Il, i.nativeEvent = i;
};
var Xi = {};
Xi.enumerable = !(1454 * 1 + -1484 + -1 * -31), Xi.configurable = !(3930 + 3 * -1310), Xi.get = function() {
  return this.class;
};
var aa, dl = Xi, ps = N.vnode;
N.vnode = function(i) {
  typeof i.type == "string" && function(o) {
    var t = o.props, e = o.type, n = {};
    for (var r in t) {
      var a = t[r];
      if (!(r === "value" && "defaultValue" in t && a == null || sl && r === "children" && e === "noscript" || r === "class" || r === "className")) {
        var s = r.toLowerCase();
        r === "defaultValue" && "value" in t && t.value == null ? r = "value" : r === "download" && !(-44 * -97 + 5437 + -1 * 9705) === a ? a = "" : s === "translate" && a === "no" ? a = !(57 * -20 + -17 * -86 + 3 * -107) : s === "ondoubleclick" ? r = "ondblclick" : s !== "onchange" || e !== "input" && e !== "textarea" || gl(t.type) ? s === "onfocus" ? r = "onfocusin" : s === "onblur" ? r = "onfocusout" : rl.test(r) ? r = s : -(2022 + 1 * -2021) === e.indexOf("-") && ol.test(r) ? r = r.replace(al, "-$&").toLowerCase() : a === null && (a = void (-1061 * -8 + 1 * 9629 + -18117)) : s = r = "oninput", s === "oninput" && n[r = s] && (r = "oninputCapture"), n[r] = a;
      }
    }
    e == "select" && n.multiple && Array.isArray(n.value) && (n.value = mt(t.children).forEach(function(g) {
      g.props.selected = -(1229 * -8 + 1627 * 5 + 849 * 2) != n.value.indexOf(g.props.value);
    })), e == "select" && n.defaultValue != null && (n.value = mt(t.children).forEach(function(g) {
      g.props.selected = n.multiple ? -(-11 * 887 + 7644 + -14 * -151) != n.defaultValue.indexOf(g.props.value) : n.defaultValue == g.props.value;
    })), t.class && !t.className ? (n.class = t.class, Object.defineProperty(n, "className", dl)) : (t.className && !t.class || t.class && t.className) && (n.class = n.className = t.className), o.props = n;
  }(i), i.$$typeof = W0, ps && ps(i);
};
var fs = N.__r;
N.__r = function(i) {
  fs && fs(i), aa = i.__c;
};
var ms = N.diffed;
N.diffed = function(i) {
  ms && ms(i);
  var o = i.props, t = i.__e;
  t != null && i.type === "textarea" && "value" in o && o.value !== t.value && (t.value = o.value == null ? "" : o.value), aa = null;
};
var ye = {};
ye.readContext = function(i) {
  return aa.__n[i.__c].props.value;
}, ye.useCallback = wn, ye.useContext = _t, ye.useDebugValue = oo, ye.useDeferredValue = V0, ye.useEffect = be, ye.useId = v0, ye.useImperativeHandle = y0, ye.useInsertionEffect = E0, ye.useLayoutEffect = kn, ye.useMemo = Fe, ye.useReducer = oa, ye.useRef = bt, ye.useState = Ye, ye.useSyncExternalStore = R0, ye.useTransition = T0;
var k0 = {};
k0.current = ye;
var K0 = {};
K0.ReactCurrentDispatcher = k0;
var Cl = K0;
function hl(i) {
  return ke.bind(null, i);
}
function yo(i) {
  return !!i && i.$$typeof === W0;
}
function pl(i) {
  return yo(i) && i.type === it;
}
function fl(i) {
  return !!i && !!i.displayName && (typeof i.displayName == "string" || i.displayName instanceof String) && i.displayName.startsWith("Memo(");
}
function ml(i) {
  return yo(i) ? na.apply(null, arguments) : i;
}
function Al(i) {
  return !!i.__k && (Ht(null, i), !(845 + -2 * -329 + 167 * -9));
}
function bl(i) {
  return i && (i.base || 1234 + 335 * 5 + -2908 === i.nodeType && i) || null;
}
var yl = function(i, o) {
  return i(o);
}, vl = function(i, o) {
  return i(o);
}, wl = it;
function O0(i) {
  i();
}
function V0(i) {
  return i;
}
function T0() {
  return [!1, O0];
}
var E0 = kn, Sl = yo;
function R0(i, o) {
  var t = o(), e = Ye({ h: { __: t, v: o } }), n = e[5602 + 5602 * -1].h, r = e[4 * -1399 + -2151 * 1 + 298 * 26];
  return kn(function() {
    n.__ = t, n.v = o, Uo(n) && r({ h: n });
  }, [i, t, o]), be(function() {
    return Uo(n) && r({ h: n }), i(function() {
      Uo(n) && r({ h: n });
    });
  }, [i]), t;
}
function Uo(i) {
  var o, t, e = i.v, n = i.__;
  try {
    var r = e();
    return !((o = n) === (t = r) && (-1 * 2537 + 5194 + -2657 !== o || 1 / o == (-626 * 4 + -233 * -9 + 17 * 24) / t) || o != o && t != t);
  } catch {
    return !(-8287 + -173 * -1 + -2 * -4057);
  }
}
var L = {};
L.useState = Ye, L.useId = v0, L.useReducer = oa, L.useEffect = be, L.useLayoutEffect = kn, L.useInsertionEffect = E0, L.useTransition = T0, L.useDeferredValue = V0, L.useSyncExternalStore = R0, L.startTransition = O0, L.useRef = bt, L.useImperativeHandle = y0, L.useMemo = Fe, L.useCallback = wn, L.useContext = _t, L.useDebugValue = oo, L.version = "17.0.2", L.Children = _c, L.render = cl, L.hydrate = ll, L.unmountComponentAtNode = Al, L.createPortal = il, L.createElement = ke, L.createContext = pi, L.createFactory = hl, L.cloneElement = ml, L.createRef = Oc, L.Fragment = it, L.isValidElement = yo, L.isElement = Sl, L.isFragment = pl, L.isMemo = fl, L.findDOMNode = bl, L.Component = ze, L.PureComponent = Cr, L.memo = Qc, L.forwardRef = B0, L.flushSync = vl, L.unstable_batchedUpdates = yl, L.StrictMode = wl, L.Suspense = Fi, L.SuspenseList = Dn, L.lazy = el, L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cl;
var Ut = L, Bl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Gl(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function Zl(i) {
  return i && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function Hl(i) {
  return i && Object.prototype.hasOwnProperty.call(i, "default") && Object.keys(i).length === 1 ? i.default : i;
}
function Wl(i) {
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
const kl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: Bl,
  getAugmentedNamespace: Wl,
  getDefaultExportFromCjs: Gl,
  getDefaultExportFromNamespaceIfNotNamed: Hl,
  getDefaultExportFromNamespaceIfPresent: Zl
}, Symbol.toStringTag, { value: "Module" }));
var Kl = function(o, t, e, n) {
  var r = e ? e.call(n, o, t) : void 0;
  if (r !== void (1 * -7185 + 4035 + 30 * 105)) return !!r;
  if (o === t) return !0;
  if (typeof o != "object" || !o || typeof t != "object" || !t) return !1;
  var a = Object.keys(o), s = Object.keys(t);
  if (a.length !== s.length) return !1;
  for (var g = Object.prototype.hasOwnProperty.bind(t), x = 1491 + -7 * -1280 + -1 * 10451; x < a.length; x++) {
    var I = a[x];
    if (!g(I)) return !1;
    var u = o[I], m = t[I];
    if (r = e ? e.call(n, u, m, I) : void (9708 + -31 * 107 + 11 * -581), r === !1 || r === void (-4580 + 18 * -167 + 7586) && u !== m) return !1;
  }
  return !0;
};
const Ol = kl.getDefaultExportFromCjs(Kl);
var oe = "-ms-", zn = "-moz-", ee = "-webkit-", P0 = "comm", vo = "rule", sa = "decl", Vl = "@import", L0 = "@keyframes", Tl = "@layer", N0 = Math.abs, ga = String.fromCharCode, hr = Object.assign;
function El(i, o) {
  return Ae(i, -1671 * 1 + 1 * 8599 + -6928) ^ 251 * 36 + 794 * 3 + -11373 ? (((o << 4842 + 2 * 4368 + -13576 ^ Ae(i, 5584 + -121 * -70 + 14054 * -1)) << 1 * -1198 + 227 * 39 + -7653 ^ Ae(i, 1 * -8267 + 7155 + 7 * 159)) << 1 * 111 + 8752 + 1 * -8861 ^ Ae(i, 883 * 7 + 5347 * -1 + -832)) << -8934 * 1 + 951 * -9 + 17495 ^ Ae(i, 948 + 699 * -1 + -246) : -469 * -13 + 34 * -292 + 1 * 3831;
}
function D0(i) {
  return i.trim();
}
function Ct(i, o) {
  return (i = o.exec(i)) ? i[163 * -17 + -4524 + 7295] : i;
}
function D(i, o, t) {
  return i.replace(o, t);
}
function Mi(i, o, t) {
  return i.indexOf(o, t);
}
function Ae(i, o) {
  return i.charCodeAt(o) | 0;
}
function Sn(i, o, t) {
  return i.slice(o, t);
}
function gt(i) {
  return i.length;
}
function Y0(i) {
  return i.length;
}
function Yn(i, o) {
  return o.push(i), i;
}
function Rl(i, o) {
  return i.map(o).join("");
}
function As(i, o) {
  return i.filter(function(t) {
    return !Ct(t, o);
  });
}
var wo = -8 * 615 + -3912 + 11 * 803, Bn = -1 * 3494 + -8953 + 12448 * 1, F0 = 4721 + 3 * 3322 + 1 * -14687, $e = 2953 * -1 + -4048 + 7001 * 1, Ce = 759 + 69 * -11, Kn = "";
function So(i, o, t, e, n, r, a, s) {
  var g = {};
  return g.value = i, g.root = o, g.parent = t, g.type = e, g.props = n, g.children = r, g.line = wo, g.column = Bn, g.length = a, g.return = "", g.siblings = s, g;
}
function wt(i, o) {
  return hr(So("", null, null, "", null, null, 6911 * -1 + 6927 + 8 * -2, i.siblings), i, { length: -i.length }, o);
}
function cn(i) {
  for (; i.root; ) i = wt(i.root, { children: [i] });
  Yn(i, i.siblings);
}
function Pl() {
  return Ce;
}
function Ll() {
  return Ce = $e > 366 + -5111 * 1 + -5 * -949 ? Ae(Kn, --$e) : -1 * 9671 + 3163 * -1 + 6 * 2139, Bn--, Ce === 1 * 2163 + -611 + -1542 && (Bn = 775 + -277 * -27 + -8253, wo--), Ce;
}
function nt() {
  return Ce = $e < F0 ? Ae(Kn, $e++) : -388 + 97 * 4, Bn++, Ce === 7068 + 3 * -2505 + 457 * 1 && (Bn = -267 * -15 + -3091 * 3 + -1 * -5269, wo++), Ce;
}
function Xt() {
  return Ae(Kn, $e);
}
function ji() {
  return $e;
}
function Bo(i, o) {
  return Sn(Kn, i, o);
}
function pr(i) {
  switch (i) {
    case -9417 + 27 * 32 + 8553:
    case 3 * 1917 + -4915 + -827:
    case 628 + -3 * 206:
    case -1 * -6663 + -7583 + 933:
    case 32:
      return -7788 + 1 * 8560 + -767 * 1;
    case 9283 + -13 * 277 + -21 * 269:
    case 43:
    case -3249 + 1 * 8922 + -5629:
    case -2 * 229 + 399 * 1 + -53 * -2:
    case 1349 + 4 * -1523 + 1 * 4805:
    case 1762 + -3659 * 1 + -53 * -37:
    case -2 * 411 + 389 * -3 + 2115:
    case -14200 + 2037 * 7:
    case 3073 + 590 * -5:
    case 17066 + -5647 * 3:
      return -12 * 807 + -5220 + -14908 * -1;
    case -993 * -5 + -2328 + -2579:
      return 3;
    case 18918 + 2 * -9442:
    case -9688 * -1 + 2 * -4448 + -753:
    case -1 * 9143 + 1859 + 2 * 3662:
    case 1 * -336 + 7 * -919 + 6860:
      return -26 * -214 + 725 + -6287;
    case -1 * -7948 + 6333 + -14240:
    case 93:
      return -4978 + -674 * 3 + 1 * 7001;
  }
  return 43 * 83 + -367 * 10 + -101 * -1;
}
function Nl(i) {
  return wo = Bn = -1 * 8427 + -953 + -177 * -53, F0 = gt(Kn = i), $e = 0, [];
}
function Dl(i) {
  return Kn = "", i;
}
function zo(i) {
  return D0(Bo($e - (2 * 4899 + 7147 + -16944), fr(i === -10163 + 1 * 10254 ? i + (491 * 2 + -331 * 10 + -466 * -5) : i === 40 ? i + (6970 + 2202 * -1 + -681 * 7) : i)));
}
function Yl(i) {
  for (; (Ce = Xt()) && Ce < -1451 + -14 * -106; ) nt();
  return pr(i) > -2622 + 1 * 2624 || pr(Ce) > -1690 + -2 * -1949 + 49 * -45 ? "" : " ";
}
function Fl(i, o) {
  for (; --o && nt() && !(Ce < -1363 + 529 * -3 + -2998 * -1 || Ce > -547 * 10 + -4 * 1031 + 48 * 202 || Ce > -1324 + 375 * 1 + -1 * -1006 && Ce < 7438 + 7 * -1091 + 33 * 8 || Ce > -6197 * 1 + 1475 + 4792 && Ce < -8671 + -274 * -32); ) ;
  return Bo(i, ji() + (o < 1 * 233 + -211 * 39 + 4001 * 2 && Xt() == -8174 * -1 + 1842 + -9984 && nt() == -12 * -281 + 5568 + -8908));
}
function fr(i) {
  for (; nt(); ) switch (Ce) {
    case i:
      return $e;
    case -180 * 46 + -8252 + 16566:
    case 8473 * -1 + -8783 * 1 + 17295:
      i !== 34 && i !== 39 && fr(Ce);
      break;
    case 5461 * 1 + -6094 + 1 * 673:
      i === 5740 + -139 * 41 && fr(i);
      break;
    case 8 * -587 + 23 * -172 + 8744:
      nt();
      break;
  }
  return $e;
}
function Xl(i, o) {
  for (; nt() && i + Ce !== -4682 * -1 + 8552 + -13187 + (-2 * 1019 + 8453 * 1 + -6405); ) if (i + Ce === 42 + (-1897 * -1 + 685 * 10 + -8705) && Xt() === -7035 + -2487 * -3 + -1 * 379) break;
  return "/*" + Bo(o, $e - (-1401 + 7 * 696 + 2 * -1735)) + "*" + ga(i === -7241 + 2 * 811 + 2833 * 2 ? i : nt());
}
function Ml(i) {
  for (; !pr(Xt()); ) nt();
  return Bo(i, $e);
}
function jl(i) {
  return Dl(Ji("", null, null, null, [""], i = Nl(i), -8206 + -48 * -103 + 1 * 3262, [-9092 + 1 * 9262 + -170], i));
}
function Ji(i, o, t, e, n, r, a, s, g) {
  for (var x = 0, I = -1 * -6703 + -3547 * -2 + -13797, u = a, m = 0, f = -7669 + 7669 * 1, y = 7497 + 1753 * -3 + -2238, Z = -2683 * 1 + -3883 + -33 * -199, T = -6862 + -3326 * -1 + -1179 * -3, S = 11 * -653 + 2710 + 2 * 2237, B = -6629 + 7714 * -1 + 14343, R = "", U = n, Y = r, F = e, W = R; T; ) switch (y = B, B = nt()) {
    case 4443 + -119 * 37:
      if (y != 7708 + -163 * 56 + 1528 && Ae(W, u - (43 * 61 + -3293 + 671)) == -17549 + -5869 * -3) {
        Mi(W += D(zo(B), "&", "&\f"), "&\f", N0(x ? s[x - (-23 * 26 + 2486 * 4 + -9345)] : 3825 + 17 * -225)) != -(39 + -38 * 149 + 148 * 38) && (S = -(-3885 + 79 * -4 + -191 * -22));
        break;
      }
    case -5134 + -646 * -8:
    case 39:
    case -1146 + 36 * -53 + -17 * -185:
      W += zo(B);
      break;
    case 9:
    case 956 * -7 + 8899 + 13 * -169:
    case -2463 * -1 + -67 * 109 + 4853:
    case 9971 * -1 + -1469 + 2868 * 4:
      W += Yl(y);
      break;
    case 92:
      W += Fl(ji() - (-8060 + 43 * 227 + 25 * -68), -28 * -354 + -6918 + -2987);
      continue;
    case -6772 + -3056 * -2 + 707:
      switch (Xt()) {
        case -11641 + -1669 * -7:
        case -1 * 8419 + 1259 * 5 + -167 * -13:
          Yn(Jl(Xl(nt(), ji()), o, t, g), g);
          break;
        default:
          W += "/";
      }
      break;
    case (6393 + 1 * 2201 + -8471) * Z:
      s[x++] = gt(W) * S;
    case 125 * Z:
    case 4951 * 1 + 7876 + 2128 * -6:
    case 7 * 1328 + -2647 + -6649:
      switch (B) {
        case -743 + 9 * 174 + -1 * 823:
        case -1 * -7673 + -2243 + -5305:
          T = -271 * 1 + -2010 + 2281;
        case -3 * -1473 + 3686 + -894 * 9 + I:
          S == -(7 * 217 + -2 * -607 + 4 * -683) && (W = D(W, /\f/g, "")), f > -1 * 1927 + 124 * -4 + 2423 && gt(W) - u && Yn(f > 6 * -707 + 8330 + -6 * 676 ? ys(W + ";", e, t, u - (-35 * 21 + 337 * 7 + -1623 * 1), g) : ys(D(W, " ", "") + ";", e, t, u - (3626 + -906 * 4), g), g);
          break;
        case -859 * -4 + -6462 + 3085:
          W += ";";
        default:
          if (Yn(F = bs(W, o, t, x, I, n, s, R, U = [], Y = [], u, r), r), B === -3461 + 1 * 587 + 3 * 999)
            if (I === -463 * -12 + -393 * 25 + 3 * 1423) Ji(W, o, F, F, U, r, u, s, Y);
            else switch (m === -1 * 8783 + -1759 + 10641 && Ae(W, 1 * -3011 + -11 * 689 + -3 * -3531) === 110 ? -1530 + 141 * -21 + 4591 : m) {
              case 100:
              case 108:
              case 9682 + -643 * 2 + 8287 * -1:
              case -8056 + -1 * -8171:
                Ji(i, F, F, e && Yn(bs(i, F, F, 0, 0, n, s, R, n, U = [], u, Y), Y), n, Y, u, s, e ? U : Y);
                break;
              default:
                Ji(W, F, F, F, [""], Y, 9573 * 1 + 3373 * -2 + 1 * -2827, s, Y);
            }
      }
      x = I = f = 1006 + -4 * -300 + -2206 * 1, Z = S = -15 * 547 + 4693 + 1 * 3513, R = W = "", u = a;
      break;
    case 7051 + -2415 * 1 + -4578:
      u = 4210 + -23 * 183 + gt(W), f = y;
    default:
      if (Z < -5774 * -1 + 6 * 865 + -10963) {
        if (B == 2514 * 1 + 1 * 9179 + -11570) --Z;
        else if (B == 489 * 5 + -3351 + 1031 && Z++ == 0 && Ll() == 3 * 2930 + 4867 + -13532) continue;
      }
      switch (W += ga(B), B * Z) {
        case 6849 + -266 * 13 + -3353:
          S = I > -3 * 1441 + -4384 + 1 * 8707 ? -1 * -5678 + -5995 + 318 : (W += "\f", -(8508 + -127 * -7 + 54 * -174));
          break;
        case 8279 * 1 + 1674 + -9909:
          s[x++] = (gt(W) - (107 * 3 + -4938 + 4618)) * S, S = -11 * 853 + -1 * 551 + 9935;
          break;
        case -6639 + -2661 * 3 + 7343 * 2:
          Xt() === -1 * 1171 + 3888 + -2672 && (W += zo(nt())), m = Xt(), I = u = gt(R = W += Ml(ji())), B++;
          break;
        case -566 + -9069 * 1 + -11 * -880:
          y === 45 && gt(W) == 6498 + 1 * -1109 + 1 * -5387 && (Z = -8 * -102 + -3333 + 2517);
      }
  }
  return r;
}
function bs(i, o, t, e, n, r, a, s, g, x, I, u) {
  for (var m = n - 1, f = n === -5709 + -11 * -664 + -1595 ? r : [""], y = Y0(f), Z = -5726 + -210 * -32 + -7 * 142, T = 633 + -3 * -59 + 30 * -27, S = 2 * -2309 + -3024 + 7642; Z < e; ++Z) for (var B = 0, R = Sn(i, m + 1, m = N0(T = a[Z])), U = i; B < y; ++B) (U = D0(T > 6677 + 18 * -232 + -2501 ? f[B] + " " + R : D(R, /&\f/g, f[B]))) && (g[S++] = U);
  return So(i, o, t, n === -903 * -11 + -101 * 21 + -7812 ? vo : s, g, x, I, u);
}
function Jl(i, o, t, e) {
  return So(i, o, t, P0, ga(Pl()), Sn(i, 550 * -16 + -23 * -71 + 7169 * 1, -(299 + -1 * 1237 + 940)), 7789 + -2045 * 3 + -827 * 2, e);
}
function ys(i, o, t, e, n) {
  return So(i, o, t, sa, Sn(i, 2972 * -2 + 38 * -157 + 11910, e), Sn(i, e + (8165 + -10 * -364 + -11804), -(-5468 + 9574 * 1 + -5 * 821)), e, n);
}
function X0(i, o, t) {
  switch (El(i, o)) {
    case -8216 + 79 * -103 + 21456:
      return ee + "print-" + i + i;
    case -11 * 678 + -7420 + 20615:
    case -9380 + 6353 * -1 + 19934:
    case -7687 + 1 * 53 + 569 * 19:
    case 3433:
    case 1678 * -1 + -1309 + 4628:
    case 4457:
    case -1 * 6590 + -6825 + -2042 * -8:
    case -635 * -9 + -41 * 217 + 8754:
    case -1 * -6691 + -8590 + 127 * 65:
    case 47 * -83 + 2792 + 409 * 17:
    case 3191:
    case -10652 + 495 * -1 + -4448 * -4:
    case -23 * 347 + -978 + 3 * 3988:
    case 1018 + 2 * 2662 + -1 * -49:
    case 1 * -5693 + -235 + 11807:
    case -76 * 146 + 652 * 16 + 6287 * 1:
    case 9459 + -554 * 6:
    case -2906 + 1 * 3578 + -561 * -7:
    case -1551 + -1 * 9561 + 15967:
    case 10 * 8 + 3171 + 2 * 482:
    case -1 * -4503 + 462 * -23 + 782 * 16:
    case 5109:
    case -10457 * 1 + 7674 + 8148:
    case 7214 + 4663 * -1 + 307 * 10:
    case -770 + 107 * -14 + -469 * -13:
      return ee + i + i;
    case -3354 + 8143 * 1:
      return zn + i + i;
    case -1517 * -3 + -7445 + -8243 * -1:
    case 6289 + 681 * -3:
    case 4810:
    case 1 * 8557 + 4659 * 1 + -6248:
    case -9646 + 6 * -1177 + 19464:
      return ee + i + zn + i + oe + i + i;
    case 4499 + -479 * -3:
      switch (Ae(i, o + (-3 * -241 + -3041 + -2329 * -1))) {
        case 3891 + 1 * -3777:
          return ee + i + oe + D(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case 23 * -113 + -3916 * -2 + -5125:
          return ee + i + oe + D(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case 3154 + -4103 * 2 + 5097:
          return ee + i + oe + D(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    case 12284 + -38 * -231 + -14234:
    case -1228 + 1 * -6073 + -503 * -23:
    case 2903:
      return ee + i + oe + i + i;
    case 3947 + -2218 * -1:
      return ee + i + oe + "flex-" + i + i;
    case -2323 + 7510 * 1:
      return ee + i + D(i, /(\w+).+(:[^]+)/, ee + "box-$1$2" + oe + "flex-$1$2") + i;
    case -4757 * 2 + -1776 + 1 * 16733:
      return ee + i + oe + "flex-item-" + D(i, /flex-|-self/g, "") + (Ct(i, /flex-|baseline/) ? "" : oe + "grid-row-" + D(i, /flex-|-self/g, "")) + i;
    case 1889 * 2 + -8528 + 9425 * 1:
      return ee + i + oe + "flex-line-pack" + D(i, /align-content|flex-|-self/g, "") + i;
    case 1307 * -1 + 133 + 1 * 6722:
      return ee + i + oe + D(i, "shrink", "negative") + i;
    case -3501 + 2931 * 3:
      return ee + i + oe + D(i, "basis", "preferred-size") + i;
    case -111 * -63 + 4198 + -5131:
      return ee + "box-" + D(i, "-grow", "") + ee + i + oe + D(i, "grow", "positive") + i;
    case 5155 + -1 * 601:
      return ee + D(i, /([^-])(transform)/g, "$1" + ee + "$2") + i;
    case -7973 + 2711 * -1 + 16871:
      return D(D(D(i, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"), i, "") + i;
    case 4491 + -1 * -10178 + -9174:
    case 7 * -460 + 4322 * -2 + 15823:
      return D(i, /(image-set\([^]*)/, ee + "$1$`$1");
    case -1104 + 3049 * 2 + 26 * -1:
      return D(D(i, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + oe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ee + i + i;
    case 4200:
      if (!Ct(i, /flex-|baseline/)) return oe + "grid-column-align" + Sn(i, o) + i;
      break;
    case -1 * -3329 + -4132 + 1 * 3395:
    case 3360:
      return oe + D(i, "template-", "") + i;
    case 254 * 29 + -7068 + 4086:
    case -2671 * -2 + 3742 + 2734 * -2:
      return t && t.some(function(e, n) {
        return o = n, Ct(e.props, /grid-\w+-end/);
      }) ? ~Mi(i + (t = t[o].value), "span", -1 * -1888 + 1 * -6354 + -2233 * -2) ? i : oe + D(i, "-start", "") + i + oe + "grid-row-span:" + (~Mi(t, "span", -7423 + 2113 * -1 + 9536) ? Ct(t, /\d+/) : +Ct(t, /\d+/) - +Ct(i, /\d+/)) + ";" : oe + D(i, "-start", "") + i;
    case 4896:
    case -3 * 2283 + 2664 + 17 * 489:
      return t && t.some(function(e) {
        return Ct(e.props, /grid-\w+-start/);
      }) ? i : oe + D(D(i, "-end", "-span"), "span ", "") + i;
    case -3947 * 1 + 1 * -407 + 8449:
    case -4361 + -993 * -8:
    case 4068:
    case 9346 + 48 * 157 + -14350:
      return D(i, /(.+)-inline(.+)/, ee + "$1$2") + i;
    case -9620 + 347 * 1 + 17389:
    case 4058 + 211 * 49 + -7338:
    case -5230 + 398 * 9 + 2467 * 3:
    case 5535:
    case 5445:
    case -2912 + 27 * 319:
    case 1177 + 313 * 12:
    case 3 * -181 + -4045 * 2 + 13310:
    case 5533:
    case -3639 * 3 + -8153 + 24859:
    case 9619 + 3 * 2137 + -11009:
    case -2877 * 1 + -2718 * 1 + 10360:
      if (gt(i) - 1 - o > 6) switch (Ae(i, o + (-2788 + -2845 * -1 + -56))) {
        case -71 * 88 + 8841 + -2484:
          if (Ae(i, o + (-169 * 3 + -2 * -3307 + -6103)) !== 3666 + -9059 * 1 + 1 * 5438) break;
        case 1600 * -5 + 2509 + -5593 * -1:
          return D(i, /(.+:)(.+)-([^]+)/, "$1" + ee + "$2-$3$1" + zn + (Ae(i, o + (2 * 34 + 4117 + -4182)) == -2456 + -82 * 10 + 24 * 141 ? "$3" : "$2-$3")) + i;
        case 1 * -4159 + -29 * 203 + 10161:
          return ~Mi(i, "stretch", -2 * -2938 + -2621 + -3255) ? X0(D(i, "stretch", "fill-available"), o, t) + i : i;
      }
      break;
    case 19 * -409 + -7 * -668 + 2749 * 3:
    case -9 * 1054 + -7973 + 23379:
      return D(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, n, r, a, s, g, x) {
        return oe + n + ":" + r + x + (a ? oe + n + "-span:" + (s ? g : +g - +r) + x : "") + i;
      });
    case -6235 + -5592 * -2:
      if (Ae(i, o + (865 * -4 + -1937 + -3 * -1801)) === -353 + -8 * 833 + -7138 * -1) return D(i, ":", ":" + ee) + i;
      break;
    case -8122 + -202 * 5 + -11 * -1416:
      switch (Ae(i, Ae(i, -5218 + 4 * 1861 + -2212) === 1 * -9613 + 3208 + 6450 ? -1 * 5170 + -1813 + 7001 : -1 * 6151 + 242 * -7 + 2 * 3928)) {
        case -3004 * 1 + 2 * 4547 + -5970:
          return D(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ee + (Ae(i, -2 * -3094 + 123 * 1 + 1 * -6297) === -4293 * 1 + 6487 + -2149 * 1 ? "inline-" : "") + "box$3$1" + ee + "$2$3$1" + oe + "$2box$3") + i;
        case 100:
          return D(i, ":", ":" + oe) + i;
      }
      break;
    case 6204 + 1 * -715 + 230:
    case 4079 * 1 + -3200 * -2 + 979 * -8:
    case -329 * 22 + 1945 + 7428:
    case 2964 + 467 * -3 + 2364:
    case 8134 + 7 * -845 + -86 * -2:
      return D(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function ro(i, o) {
  for (var t = "", e = 2209 + -4 * -1020 + 19 * -331; e < i.length; e++) t += o(i[e], e, i, o) || "";
  return t;
}
function Ul(i, o, t, e) {
  switch (i.type) {
    case Tl:
      if (i.children.length) break;
    case Vl:
    case sa:
      return i.return = i.return || i.value;
    case P0:
      return "";
    case L0:
      return i.return = i.value + "{" + ro(i.children, e) + "}";
    case vo:
      if (!gt(i.value = i.props.join(","))) return "";
  }
  return gt(t = ro(i.children, e)) ? i.return = i.value + "{" + t + "}" : "";
}
function zl(i) {
  var o = Y0(i);
  return function(t, e, n, r) {
    for (var a = "", s = -1 * -3202 + 2 * -2279 + -1 * -1356; s < o; s++) a += i[s](t, e, n, r) || "";
    return a;
  };
}
function Ql(i) {
  return function(o) {
    o.root || (o = o.return) && i(o);
  };
}
function $l(i, o, t, e) {
  if (i.length > -(-7 * -1061 + -1 * -5343 + -12769) && !i.return)
    switch (i.type) {
      case sa:
        i.return = X0(i.value, i.length, t);
        return;
      case L0:
        return ro([wt(i, { value: D(i.value, "@", "@" + ee) })], e);
      case vo:
        if (i.length) return Rl(t = i.props, function(n) {
          switch (Ct(n, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              cn(wt(i, { props: [D(n, /:(read-\w+)/, ":" + zn + "$1")] }));
              var r = {};
              r.props = [n], cn(wt(i, r)), hr(i, { props: As(t, e) });
              break;
            case "::placeholder":
              cn(wt(i, { props: [D(n, /:(plac\w+)/, ":" + ee + "input-$1")] })), cn(wt(i, { props: [D(n, /:(plac\w+)/, ":" + zn + "$1")] })), cn(wt(i, { props: [D(n, /:(plac\w+)/, oe + "input-$1")] }));
              var a = {};
              a.props = [n], cn(wt(i, a)), hr(i, { props: As(t, e) });
              break;
          }
          return "";
        });
    }
}
var P = {};
P.animationIterationCount = 1, P.aspectRatio = 1, P.borderImageOutset = 1, P.borderImageSlice = 1, P.borderImageWidth = 1, P.boxFlex = 1, P.boxFlexGroup = 1, P.boxOrdinalGroup = 1, P.columnCount = 1, P.columns = 1, P.flex = 1, P.flexGrow = 1, P.flexPositive = 1, P.flexShrink = 1, P.flexNegative = 1, P.flexOrder = 1, P.gridRow = 1, P.gridRowEnd = 1, P.gridRowSpan = 1, P.gridRowStart = 1, P.gridColumn = 1, P.gridColumnEnd = 1, P.gridColumnSpan = 1, P.gridColumnStart = 1, P.msGridRow = 1, P.msGridRowSpan = 1, P.msGridColumn = 1, P.msGridColumnSpan = 1, P.fontWeight = 1, P.lineHeight = 1, P.opacity = 1, P.order = 1, P.orphans = 1, P.tabSize = 1, P.widows = 1, P.zIndex = 1, P.zoom = 1, P.WebkitLineClamp = 1, P.fillOpacity = 1, P.floodOpacity = 1, P.stopOpacity = 1, P.strokeDasharray = 1, P.strokeDashoffset = 1, P.strokeMiterlimit = 1, P.strokeOpacity = 1, P.strokeWidth = 1;
var _l = P, _ = {}, zt = typeof process < "u" && void (48 + 3489 * -2 + -35 * -198) !== _ && (_.REACT_APP_SC_ATTR || _.SC_ATTR) || "data-styled", M0 = "active", j0 = "data-styled-version", Go = "6.1.11", ca = `/*!sc*/
`, la = typeof window < "u" && "HTMLElement" in window, ql = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (-2 * 3707 + -7717 + 1 * 15131) !== _ && void (-5393 * 1 + -5995 + 4 * 2847) !== _.REACT_APP_SC_DISABLE_SPEEDY && _.REACT_APP_SC_DISABLE_SPEEDY !== "" ? _.REACT_APP_SC_DISABLE_SPEEDY !== "false" && _.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (-6592 + -8 * -824) !== _ && void (-8993 + -8 * -415 + 93 * 61) !== _.SC_DISABLE_SPEEDY && _.SC_DISABLE_SPEEDY !== "" ? _.SC_DISABLE_SPEEDY !== "false" && _.SC_DISABLE_SPEEDY : _.NODE_ENV !== "production"), vs = /invalid hook call/i, Vi = /* @__PURE__ */ new Set(), ex = function(i, o) {
  if (_.NODE_ENV !== "production") {
    var t = o ? ' with the id of "'.concat(o, '"') : "", e = "The component ".concat(i).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var r = !0;
      console.error = function(a) {
        for (var s = [], g = -3941 * 2 + 2614 * 1 + 5269; g < arguments.length; g++) s[g - (1 * -2957 + 883 * 4 + -574)] = arguments[g];
        vs.test(a) ? (r = !1, Vi.delete(e)) : n.apply(void 0, yn([a], s, !1));
      }, bt(), r && !Vi.has(e) && (console.warn(e), Vi.add(e));
    } catch (a) {
      vs.test(a.message) && Vi.delete(e);
    } finally {
      console.error = n;
    }
  }
}, Zo = Object.freeze([]), Gn = Object.freeze({});
function tx(i, o, t) {
  return void (3247 * 3 + 8 * -1129 + -709) === t && (t = Gn), i.theme !== t.theme && i.theme || o || t.theme;
}
var mr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), nx = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ix = /(^-|-$)/g;
function ws(i) {
  return i.replace(nx, "-").replace(ix, "");
}
var ox = /(a)(d)/gi, Ti = 5 * -1124 + 3166 + 358 * 7, Ss = function(i) {
  return String.fromCharCode(i + (i > -3 * 2612 + 6521 + 268 * 5 ? -2236 * -2 + -9522 + 5089 * 1 : -6 * 1656 + 5678 * 1 + -871 * -5));
};
function Ar(i) {
  var o, t = "";
  for (o = Math.abs(i); o > Ti; o = o / Ti | 2972 * -2 + 39 * 59 + 3643) t = Ss(o % Ti) + t;
  return (Ss(o % Ti) + t).replace(ox, "$1-$2");
}
var Qo, J0 = 3182 + 19 * 297 + -14 * 246, Lt = function(i, o) {
  for (var t = o.length; t; ) i = (-1 * -8975 + 5505 + -14447) * i ^ o.charCodeAt(--t);
  return i;
}, U0 = function(i) {
  return Lt(J0, i);
};
function rx(i) {
  return Ar(U0(i) >>> 2929 + 29 * -101);
}
function z0(i) {
  return _.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function $o(i) {
  return typeof i == "string" && (_.NODE_ENV === "production" || i.charAt(49 * -163 + 6371 + 1616) === i.charAt(-1 * -9349 + 4575 + -13924).toLowerCase());
}
var Ue = {};
Ue.childContextTypes = !0, Ue.contextType = !0, Ue.contextTypes = !0, Ue.defaultProps = !0, Ue.displayName = !0, Ue.getDefaultProps = !0, Ue.getDerivedStateFromError = !0, Ue.getDerivedStateFromProps = !0, Ue.mixins = !0, Ue.propTypes = !0, Ue.type = !0;
var St = {};
St.name = !0, St.length = !0, St.prototype = !0, St.caller = !0, St.callee = !0, St.arguments = !0, St.arity = !0;
var Et = {};
Et.$$typeof = !0, Et.compare = !0, Et.defaultProps = !0, Et.displayName = !0, Et.propTypes = !0, Et.type = !0;
var xn = {};
xn.$$typeof = !0, xn.render = !0, xn.defaultProps = !0, xn.displayName = !0, xn.propTypes = !0;
var Q0 = typeof Symbol == "function" && Symbol.for, $0 = Q0 ? Symbol.for("react.memo") : -85801 + 563 * -176 + 245004, ax = Q0 ? Symbol.for("react.forward_ref") : 60112, sx = Ue, gx = St, _0 = Et, cx = ((Qo = {})[ax] = xn, Qo[$0] = _0, Qo);
function Bs(i) {
  return ("type" in (o = i) && o.type.$$typeof) === $0 ? _0 : "$$typeof" in i ? cx[i.$$typeof] : sx;
  var o;
}
var lx = Object.defineProperty, xx = Object.getOwnPropertyNames, Gs = Object.getOwnPropertySymbols, ux = Object.getOwnPropertyDescriptor, Ix = Object.getPrototypeOf, Zs = Object.prototype;
function q0(i, o, t) {
  if (typeof o != "string") {
    if (Zs) {
      var e = Ix(o);
      e && e !== Zs && q0(i, e, t);
    }
    var n = xx(o);
    Gs && (n = n.concat(Gs(o)));
    for (var r = Bs(i), a = Bs(o), s = -7776 + 10 * 575 + 2026; s < n.length; ++s) {
      var g = n[s];
      if (!(g in gx || t && t[g] || a && g in a || r && g in r)) {
        var x = ux(o, g);
        try {
          lx(i, g, x);
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
function xa(i) {
  return typeof i == "object" && "styledComponentId" in i;
}
function Dt(i, o) {
  return i && o ? "".concat(i, " ").concat(o) : i || o || "";
}
function Hs(i, o) {
  if (4643 * -1 + -1259 * -3 + 1 * 866 === i.length) return "";
  for (var t = i[0], e = -1 * 4072 + -7492 + 771 * 15; e < i.length; e++) t += i[e];
  return t;
}
function Hn(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function br(i, o, t) {
  if (void (458 * 1 + 171 * 13 + -2681) === t && (t = !1), !t && !Hn(i) && !Array.isArray(i)) return o;
  if (Array.isArray(o))
    for (var e = -6978 + -5449 * -1 + -1529 * -1; e < o.length; e++) i[e] = br(i[e], o[e]);
  else if (Hn(o))
    for (var e in o) i[e] = br(i[e], o[e]);
  return i;
}
function ua(i, o) {
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
var dx = _.NODE_ENV !== "production" ? me : {};
function Cx() {
  for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
  for (var t = i[1 * 1587 + -5996 + 4409], e = [], n = -8720 + -14 * -263 + -5039 * -1, r = i.length; n < r; n += 6213 + -55 * 109 + -217) e.push(i[n]);
  return e.forEach(function(a) {
    t = t.replace(/%[a-z]/, a);
  }), t;
}
function On(i) {
  for (var o = [], t = 6352 + -3 * 2117; t < arguments.length; t++) o[t - 1] = arguments[t];
  return _.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i, " for more information.").concat(o.length > -13505 + -5 * -2701 ? " Args: ".concat(o.join(", ")) : "")) : new Error(Cx.apply(void (-2701 * 2 + 628 + -1 * -4774), yn([dx[i]], o, !1)).trim());
}
var hx = function() {
  function i(o) {
    this.groupSizes = new Uint32Array(-1842 + -1449 * 5 + 9599), this.length = 3010 + -1622 * -1 + -40 * 103, this.tag = o;
  }
  return i.prototype.indexOfGroup = function(o) {
    for (var t = -216 * 38 + 4622 + 1793 * 2, e = -2359 + 58 * 107 + 3847 * -1; e < o; e++) t += this.groupSizes[e];
    return t;
  }, i.prototype.insertRules = function(o, t) {
    if (o >= this.groupSizes.length) {
      for (var e = this.groupSizes, n = e.length, r = n; o >= r; ) if ((r <<= -1 * 857 + -5849 + 6707) < 7276 + 428 * -17) throw On(69 * -13 + 8045 + -7132, "".concat(o));
      this.groupSizes = new Uint32Array(r), this.groupSizes.set(e), this.length = r;
      for (var a = n; a < r; a++) this.groupSizes[a] = -519 * -19 + 2069 + -11930;
    }
    for (var s = this.indexOfGroup(o + (1 * 9875 + -2200 * -2 + -9 * 1586)), g = (a = 6454 + 10 * -871 + 2256, t.length); a < g; a++) this.tag.insertRule(s, t[a]) && (this.groupSizes[o]++, s++);
  }, i.prototype.clearGroup = function(o) {
    if (o < this.length) {
      var t = this.groupSizes[o], e = this.indexOfGroup(o), n = e + t;
      this.groupSizes[o] = -478 * -17 + 446 * 20 + -17046;
      for (var r = e; r < n; r++) this.tag.deleteRule(e);
    }
  }, i.prototype.getGroup = function(o) {
    var t = "";
    if (o >= this.length || -9120 + -1 * 5991 + 15111 === this.groupSizes[o]) return t;
    for (var e = this.groupSizes[o], n = this.indexOfGroup(o), r = n + e, a = n; a < r; a++) t += "".concat(this.tag.getRule(a)).concat(ca);
    return t;
  }, i;
}(), px = 9862 + -67 * -94 + -16159 << -241 * -17 + -7340 + 1 * 3273, Ui = /* @__PURE__ */ new Map(), ao = /* @__PURE__ */ new Map(), zi = -4938 + -6367 * 1 + -2 * -5653, Ei = function(i) {
  if (Ui.has(i)) return Ui.get(i);
  for (; ao.has(zi); ) zi++;
  var o = zi++;
  if (_.NODE_ENV !== "production" && ((1 * -3386 + -9871 + 1 * 13257 | o) < -2522 + 2930 * 1 + -408 || o > px)) throw On(-4 * -140 + 6635 + -7179, "".concat(o));
  return Ui.set(i, o), ao.set(o, i), o;
}, fx = function(i, o) {
  zi = o + (26 * 1 + 2594 * 3 + 37 * -211), Ui.set(i, o), ao.set(o, i);
}, mx = "style[".concat(zt, "][").concat(j0, '="').concat(Go, '"]'), Ax = new RegExp("^".concat(zt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), bx = function(i, o, t) {
  for (var e, n = t.split(","), r = 549 + 3 * 452 + -1905, a = n.length; r < a; r++) (e = n[r]) && i.registerName(o, e);
}, yx = function(i, o) {
  for (var t, e = ((t = o.textContent) !== null && void (22 * -401 + -7189 + 16011 * 1) !== t ? t : "").split(ca), n = [], r = 0, a = e.length; r < a; r++) {
    var s = e[r].trim();
    if (s) {
      var g = s.match(Ax);
      if (g) {
        var x = 0 | parseInt(g[1], 10), I = g[2];
        1 * 4279 + -25 * 247 + 1896 !== x && (fx(I, x), bx(i, I, g[-2722 * -2 + -8166 + 2725]), i.getTag().insertRules(x, n)), n.length = -2921 * -1 + 1 * 4210 + -7131;
      } else n.push(s);
    }
  }
};
function vx() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var eg = function(i) {
  var o = document.head, t = i || o, e = document.createElement("style"), n = function(s) {
    var g = Array.from(s.querySelectorAll("style[".concat(zt, "]")));
    return g[g.length - 1];
  }(t), r = void (1 * -3163 + 2 * -321 + 3805) !== n ? n.nextSibling : null;
  e.setAttribute(zt, M0), e.setAttribute(j0, Go);
  var a = vx();
  return a && e.setAttribute("nonce", a), t.insertBefore(e, r), e;
}, wx = function() {
  function i(o) {
    this.element = eg(o), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, n = -5389 + 2 * -4586 + 14561 * 1, r = e.length; n < r; n++) {
        var a = e[n];
        if (a.ownerNode === t) return a;
      }
      throw On(4159 * 2 + 14 * 211 + -11255 * 1);
    }(this.element), this.length = -5 * -239 + 3774 + -4969;
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
}(), Sx = function() {
  function i(o) {
    this.element = eg(o), this.nodes = this.element.childNodes, this.length = -571 * -10 + 879 + 1 * -6589;
  }
  return i.prototype.insertRule = function(o, t) {
    if (o <= this.length && o >= -5929 + -2513 * -1 + 3416) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[o] || null), this.length++, !0;
    }
    return !1;
  }, i.prototype.deleteRule = function(o) {
    this.element.removeChild(this.nodes[o]), this.length--;
  }, i.prototype.getRule = function(o) {
    return o < this.length ? this.nodes[o].textContent : "";
  }, i;
}(), Bx = function() {
  function i(o) {
    this.rules = [], this.length = -98 * -84 + -6759 + 1473 * -1;
  }
  return i.prototype.insertRule = function(o, t) {
    return o <= this.length && (this.rules.splice(o, 2624 + 2 * -1312, t), this.length++, !0);
  }, i.prototype.deleteRule = function(o) {
    this.rules.splice(o, -429 * -17 + -159 * 24 + -1738 * 2), this.length--;
  }, i.prototype.getRule = function(o) {
    return o < this.length ? this.rules[o] : "";
  }, i;
}(), Ws = la, Gx = { isServer: !la, useCSSOMInjection: !ql }, tg = function() {
  function i(o, t, e) {
    void (9568 * -1 + 4651 + 1 * 4917) === o && (o = Gn), t === void 0 && (t = {});
    var n = this;
    this.options = Pe(Pe({}, Gx), o), this.gs = t, this.names = new Map(e), this.server = !!o.isServer, !this.server && la && Ws && (Ws = !1, function(r) {
      for (var a = document.querySelectorAll(mx), s = 0, g = a.length; s < g; s++) {
        var x = a[s];
        x && x.getAttribute(zt) !== M0 && (yx(r, x), x.parentNode && x.parentNode.removeChild(x));
      }
    }(this)), ua(this, function() {
      return function(r) {
        for (var a = r.getTag(), s = a.length, g = "", x = function(u) {
          var m = function(S) {
            return ao.get(S);
          }(u);
          if (m === void 0) return "continue";
          var f = r.names.get(m), y = a.getGroup(u);
          if (void (269 * -11 + 6185 * -1 + 9144) === f || -2834 * 2 + 549 * 1 + 1 * 5119 === y.length) return "continue";
          var Z = "".concat(zt, ".g").concat(u, '[id="').concat(m, '"]'), T = "";
          void (4634 + -5333 * 1 + 699) !== f && f.forEach(function(S) {
            S.length > -9341 + -1 * -519 + 2 * 4411 && (T += "".concat(S, ","));
          }), g += "".concat(y).concat(Z, '{content:"').concat(T, '"}').concat(ca);
        }, I = -5967 * -1 + -4967 * 1 + -1e3; I < s; I++) x(I);
        return g;
      }(n);
    });
  }
  return i.registerId = function(o) {
    return Ei(o);
  }, i.prototype.reconstructWithOptions = function(o, t) {
    return void (8760 * -1 + 8 * 681 + 46 * 72) === t && (t = !0), new i(Pe(Pe({}, this.options), o), this.gs, t && this.names || void (771 * -9 + -618 * -16 + -3 * 983));
  }, i.prototype.allocateGSInstance = function(o) {
    return this.gs[o] = (this.gs[o] || 1 * -7921 + 2 * 736 + -1 * -6449) + (1 * -1939 + 4178 * 1 + -373 * 6);
  }, i.prototype.getTag = function() {
    return this.tag || (this.tag = (o = function(t) {
      var e = t.useCSSOMInjection, n = t.target;
      return t.isServer ? new Bx(n) : e ? new wx(n) : new Sx(n);
    }(this.options), new hx(o)));
    var o;
  }, i.prototype.hasNameForId = function(o, t) {
    return this.names.has(o) && this.names.get(o).has(t);
  }, i.prototype.registerName = function(o, t) {
    if (Ei(o), this.names.has(o)) this.names.get(o).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(o, e);
    }
  }, i.prototype.insertRules = function(o, t, e) {
    this.registerName(o, t), this.getTag().insertRules(Ei(o), e);
  }, i.prototype.clearNames = function(o) {
    this.names.has(o) && this.names.get(o).clear();
  }, i.prototype.clearRules = function(o) {
    this.getTag().clearGroup(Ei(o)), this.clearNames(o);
  }, i.prototype.clearTag = function() {
    this.tag = void (-1 * -4847 + 423 * -3 + -3578);
  }, i;
}(), Zx = /&/g, Hx = /^\s*\/\/.*$/gm;
function ng(i, o) {
  return i.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(o, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(o, " ")), t.props = t.props.map(function(e) {
      return "".concat(o, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = ng(t.children, o)), t;
  });
}
function ig(i) {
  var o, t, e, n = i === void 0 ? Gn : i, r = n.options, a = void (4120 + -8807 * -1 + -12927) === r ? Gn : r, s = n.plugins, g = void (-3612 + -33 * -71 + 1269) === s ? Zo : s, x = function(m, f, y) {
    return y.startsWith(t) && y.endsWith(t) && y.replaceAll(t, "").length > -31 * 263 + 3183 + 710 * 7 ? ".".concat(o) : m;
  }, I = g.slice();
  I.push(function(m) {
    m.type === vo && m.value.includes("&") && (m.props[-2032 * 2 + 1937 + -709 * -3] = m.props[-7282 * -1 + 8285 + -5189 * 3].replace(Zx, t).replace(e, x));
  }), a.prefix && I.push($l), I.push(Ul);
  var u = function(m, f, y, Z) {
    f === void 0 && (f = ""), void (2307 + 1725 * -5 + -13 * -486) === y && (y = ""), void (4280 + -1 * 6373 + 2093) === Z && (Z = "&"), o = Z, t = f, e = new RegExp("\\".concat(t, "\\b"), "g");
    var T = m.replace(Hx, ""), S = jl(y || f ? "".concat(y, " ").concat(f, " { ").concat(T, " }") : T);
    a.namespace && (S = ng(S, a.namespace));
    var B = [];
    return ro(S, zl(I.concat(Ql(function(R) {
      return B.push(R);
    })))), B;
  };
  return u.hash = g.length ? g.reduce(function(m, f) {
    return f.name || On(-202 * -26 + -546 * 1 + -4691), Lt(m, f.name);
  }, J0).toString() : "", u;
}
var Wx = new tg(), yr = ig(), Ia = Ut.createContext({ shouldForwardProp: void (-1217 + -40 * -76 + -1823), styleSheet: Wx, stylis: yr });
Ia.Consumer;
var kx = Ut.createContext(void (-11959 + -11959 * -1));
function vr() {
  return _t(Ia);
}
function Kx(i) {
  var o = Ye(i.stylisPlugins), t = o[10 * 307 + 5392 + 8462 * -1], e = o[7475 * 1 + -33 * 109 + -3877 * 1], n = vr().styleSheet, r = Fe(function() {
    var I = n, u = {};
    return u.useCSSOMInjection = !1, i.sheet ? I = i.sheet : i.target && (I = I.reconstructWithOptions({ target: i.target }, !1)), i.disableCSSOMInjection && (I = I.reconstructWithOptions(u)), I;
  }, [i.disableCSSOMInjection, i.sheet, i.target, n]), a = Fe(function() {
    var I = {};
    I.namespace = i.namespace, I.prefix = i.enableVendorPrefixes;
    var u = {};
    return u.options = I, u.plugins = t, ig(u);
  }, [i.enableVendorPrefixes, i.namespace, t]);
  be(function() {
    Ol(t, i.stylisPlugins) || e(i.stylisPlugins);
  }, [i.stylisPlugins]);
  var s = Fe(function() {
    var I = {};
    return I.shouldForwardProp = i.shouldForwardProp, I.styleSheet = r, I.stylis = a, I;
  }, [i.shouldForwardProp, r, a]), g = {};
  g.value = s;
  var x = {};
  return x.value = a, Ut.createElement(Ia.Provider, g, Ut.createElement(kx.Provider, x, i.children));
}
var ks = function() {
  function i(o, t) {
    var e = this;
    this.inject = function(n, r) {
      r === void 0 && (r = yr);
      var a = e.name + r.hash;
      n.hasNameForId(e.id, a) || n.insertRules(e.id, a, r(e.rules, a, "@keyframes"));
    }, this.name = o, this.id = "sc-keyframes-".concat(o), this.rules = t, ua(this, function() {
      throw On(-61 * 139 + -5 * 1970 + 18341 * 1, String(e.name));
    });
  }
  return i.prototype.getName = function(o) {
    return void (148 * -19 + 5 * 1933 + 1 * -6853) === o && (o = yr), this.name + o.hash;
  }, i;
}(), Ox = function(i) {
  return i >= "A" && i <= "Z";
};
function Ks(i) {
  for (var o = "", t = 4921 + -23 * 359 + -1112 * -3; t < i.length; t++) {
    var e = i[t];
    if (5945 + -879 * -1 + -6823 * 1 === t && e === "-" && i[-2724 + 7659 * -1 + -3461 * -3] === "-") return i;
    Ox(e) ? o += "-" + e.toLowerCase() : o += e;
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
var og = function(i) {
  return i == null || i === !1 || i === "";
}, rg = function(i) {
  var o, t, e = [];
  for (var n in i) {
    var r = i[n];
    i.hasOwnProperty(n) && !og(r) && (Array.isArray(r) && r.isCss || Zn(r) ? e.push("".concat(Ks(n), ":"), r, ";") : Hn(r) ? e.push.apply(e, yn(yn(["".concat(n, " {")], rg(r), !1), ["}"], !1)) : e.push("".concat(Ks(n), ": ").concat((o = n, (t = r) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || -4082 + 6 * 1597 + -1100 * 5 === t || o in _l || o.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function Mt(i, o, t, e) {
  if (og(i)) return [];
  if (xa(i)) return [".".concat(i.styledComponentId)];
  if (Zn(i)) {
    if (!Zn(r = i) || r.prototype && r.prototype.isReactComponent || !o) return [i];
    var n = i(o);
    return _.NODE_ENV === "production" || typeof n != "object" || Array.isArray(n) || n instanceof ks || Hn(n) || n === null || console.error("".concat(z0(i), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Mt(n, o, t, e);
  }
  var r;
  return i instanceof ks ? t ? (i.inject(t, e), [i.getName(e)]) : [i] : Hn(i) ? rg(i) : Array.isArray(i) ? Array.prototype.concat.apply(Zo, i.map(function(a) {
    return Mt(a, o, t, e);
  })) : [i.toString()];
}
function Vx(i) {
  for (var o = 0; o < i.length; o += 3158 + -3728 * -2 + -10613 * 1) {
    var t = i[o];
    if (Zn(t) && !xa(t)) return !1;
  }
  return !0;
}
var Tx = U0(Go), Ex = function() {
  function i(o, t, e) {
    this.rules = o, this.staticRulesId = "", this.isStatic = _.NODE_ENV === "production" && (void (-3 * 249 + 1354 + -607) === e || e.isStatic) && Vx(o), this.componentId = t, this.baseHash = Lt(Tx, t), this.baseStyle = e, tg.registerId(t);
  }
  return i.prototype.generateAndInjectStyles = function(o, t, e) {
    var n = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) n = Dt(n, this.staticRulesId);
      else {
        var r = Hs(Mt(this.rules, o, t, e)), a = Ar(Lt(this.baseHash, r) >>> 1562 + -1 * -8501 + -10063);
        if (!t.hasNameForId(this.componentId, a)) {
          var s = e(r, ".".concat(a), void 0, this.componentId);
          t.insertRules(this.componentId, a, s);
        }
        n = Dt(n, a), this.staticRulesId = a;
      }
    else {
      for (var g = Lt(this.baseHash, e.hash), x = "", I = -1921 + -751 * -7 + -3336; I < this.rules.length; I++) {
        var u = this.rules[I];
        if (typeof u == "string") x += u, _.NODE_ENV !== "production" && (g = Lt(g, u));
        else if (u) {
          var m = Hs(Mt(u, o, t, e));
          g = Lt(g, m + I), x += m;
        }
      }
      if (x) {
        var f = Ar(g >>> 0);
        t.hasNameForId(this.componentId, f) || t.insertRules(this.componentId, f, e(x, ".".concat(f), void (9567 + 347 * 4 + 2191 * -5), this.componentId)), n = Dt(n, f);
      }
    }
    return n;
  }, i;
}(), ag = Ut.createContext(void (-5873 + 52 * -164 + 1 * 14401));
ag.Consumer;
var _o = {}, Os = /* @__PURE__ */ new Set();
function Rx(i, o, t) {
  var e = xa(i), n = i, r = !$o(i), a = o.attrs, s = a === void 0 ? Zo : a, g = o.componentId, x = void (-7354 * -1 + -8154 + -2 * -400) === g ? function(Y, F) {
    var W = typeof Y != "string" ? "sc" : ws(Y);
    _o[W] = (_o[W] || -2 * -359 + 604 * -6 + 2906) + (3256 + 2 * -237 + -2781);
    var J = "".concat(W, "-").concat(rx(Go + W + _o[W]));
    return F ? "".concat(F, "-").concat(J) : J;
  }(o.displayName, o.parentComponentId) : g, I = o.displayName, u = void (-4524 * -1 + 3 * -3327 + 5457) === I ? function(Y) {
    return $o(Y) ? "styled.".concat(Y) : "Styled(".concat(z0(Y), ")");
  }(i) : I, m = o.displayName && o.componentId ? "".concat(ws(o.displayName), "-").concat(o.componentId) : o.componentId || x, f = e && n.attrs ? n.attrs.concat(s).filter(Boolean) : s, y = o.shouldForwardProp;
  if (e && n.shouldForwardProp) {
    var Z = n.shouldForwardProp;
    if (o.shouldForwardProp) {
      var T = o.shouldForwardProp;
      y = function(Y, F) {
        return Z(Y, F) && T(Y, F);
      };
    } else y = Z;
  }
  var S = new Ex(t, m, e ? n.componentStyle : void (2681 + 21 * 423 + -11564));
  function B(Y, F) {
    return function(W, J, ue) {
      var z = W.attrs, Ie = W.componentStyle, de = W.defaultProps, we = W.foldedComponentIds, _e = W.styledComponentId, ae = W.target, Se = Ut.useContext(ag), Ke = vr(), Me = W.shouldForwardProp || Ke.shouldForwardProp;
      _.NODE_ENV !== "production" && oo(_e);
      var Oe = tx(J, Se, de) || Gn, he = function(en, Le, rt) {
        var je = {};
        je.className = void (2083 + -541 * -12 + -1225 * 7), je.theme = rt;
        for (var kt, at = Pe(Pe({}, Le), je), qe = -1108 * -1 + 2971 * 2 + -50 * 141; qe < en.length; qe += 1 * -1523 + 5060 + -1 * 3536) {
          var Kt = Zn(kt = en[qe]) ? kt(at) : kt;
          for (var et in Kt) at[et] = et === "className" ? Dt(at[et], Kt[et]) : et === "style" ? Pe(Pe({}, at[et]), Kt[et]) : Kt[et];
        }
        return Le.className && (at.className = Dt(at.className, Le.className)), at;
      }(z, J, Oe), Ge = he.as || ae, Ve = {};
      for (var pe in he) he[pe] === void 0 || pe[-6972 + -1 * 352 + 1 * 7324] === "$" || pe === "as" || pe === "theme" && he.theme === Oe || (pe === "forwardedAs" ? Ve.as = he.forwardedAs : Me && !Me(pe, Ge) || (Ve[pe] = he[pe], Me || _.NODE_ENV !== "development" || Jc(pe) || Os.has(pe) || !mr.has(Ge) || (Os.add(pe), console.warn('styled-components: it looks like an unknown prop "'.concat(pe, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Ze = function(en, Le) {
        var rt = vr(), je = en.generateAndInjectStyles(Le, rt.styleSheet, rt.stylis);
        return _.NODE_ENV !== "production" && oo(je), je;
      }(Ie, he);
      _.NODE_ENV !== "production" && W.warnTooManyClasses && W.warnTooManyClasses(Ze);
      var Te = Dt(we, _e);
      return Ze && (Te += " " + Ze), he.className && (Te += " " + he.className), Ve[$o(Ge) && !mr.has(Ge) ? "class" : "className"] = Te, Ve.ref = ue, ke(Ge, Ve);
    }(R, Y, F);
  }
  B.displayName = u;
  var R = Ut.forwardRef(B), U = {};
  return U.attrs = !0, U.componentStyle = !0, U.displayName = !0, U.foldedComponentIds = !0, U.shouldForwardProp = !0, U.styledComponentId = !0, U.target = !0, R.attrs = f, R.componentStyle = S, R.displayName = u, R.shouldForwardProp = y, R.foldedComponentIds = e ? Dt(n.foldedComponentIds, n.styledComponentId) : "", R.styledComponentId = m, R.target = e ? n.target : i, Object.defineProperty(R, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(Y) {
    this._foldedDefaultProps = e ? function(F) {
      for (var W = [], J = -1 * 2657 + 3994 + 8 * -167; J < arguments.length; J++) W[J - (1731 * -4 + -8903 + -5276 * -3)] = arguments[J];
      for (var ue = 0, z = W; ue < z.length; ue++) br(F, z[ue], !0);
      return F;
    }({}, n.defaultProps, Y) : Y;
  } }), _.NODE_ENV !== "production" && (ex(u, m), R.warnTooManyClasses = /* @__PURE__ */ function(Y, F) {
    var W = {}, J = !1;
    return function(ue) {
      if (!J && (W[ue] = !0, Object.keys(W).length >= 9925 + 1219 * -2 + 3 * -2429)) {
        var z = F ? ' with the id of "'.concat(F, '"') : "";
        console.warn("Over ".concat(-1069 + 9 * 141, " classes were generated for component ").concat(Y).concat(z, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), J = !0, W = {};
      }
    };
  }(u, m)), ua(R, function() {
    return ".".concat(R.styledComponentId);
  }), r && q0(R, i, U), R;
}
function Vs(i, o) {
  for (var t = [i[519 * 5 + 8536 + 1 * -11131]], e = 2359 + 5 * -389 + -69 * 6, n = o.length; e < n; e += -969 * 10 + 13 * 348 + 1 * 5167) t.push(o[e], i[e + 1]);
  return t;
}
var Ts = function(i) {
  var o = {};
  return o.isCss = !0, Object.assign(i, o);
};
function Px(i) {
  for (var o = [], t = -2 * 2221 + -2 * 3142 + -17 * -631; t < arguments.length; t++) o[t - (49 * 125 + 37 + -6161)] = arguments[t];
  if (Zn(i) || Hn(i)) return Ts(Mt(Vs(Zo, yn([i], o, !0))));
  var e = i;
  return 5 * 1582 + -4789 + 3121 * -1 === o.length && 9153 + 1 * 9839 + -18991 === e.length && typeof e[-5735 + -3269 * -1 + 2 * 1233] == "string" ? Mt(e) : Ts(Mt(Vs(e, o)));
}
function wr(i, o, t) {
  if (void (-25 * 330 + 1 * -8156 + 13 * 1262) === t && (t = Gn), !o) throw On(-12063 + 208 * 58, o);
  var e = function(n) {
    for (var r = [], a = -4217 + -3037 * -3 + -4893; a < arguments.length; a++) r[a - 1] = arguments[a];
    return i(o, t, Px.apply(void (21 * -388 + -8770 + 16918), yn([n], r, !1)));
  };
  return e.attrs = function(n) {
    return wr(i, o, Pe(Pe({}, t), { attrs: Array.prototype.concat(t.attrs, n).filter(Boolean) }));
  }, e.withConfig = function(n) {
    return wr(i, o, Pe(Pe({}, t), n));
  }, e;
}
var sg = function(i) {
  return wr(Rx, i);
}, fi = sg;
mr.forEach(function(i) {
  fi[i] = sg(i);
});
_.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Ri = "__sc-".concat(zt, "__");
_.NODE_ENV !== "production" && _.NODE_ENV !== "test" && typeof window < "u" && (window[Ri] || (window[Ri] = 1616 + -3559 * -1 + 5 * -1035), -2466 + 1 * -3188 + 145 * 39 === window[Ri] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Ri] += 9759 + 119 * -82);
const Lx = fi.div`
  position: relative;
`, Nx = fi.video`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(i) => i.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class ie extends Error {
  constructor(t, e) {
    super(t);
    j(this, "cause");
    this.name = "AutoCaptureError", this.cause = e;
  }
  static logError(t) {
  }
  static fromCameraError(t) {
    if (this.logError(t), t instanceof ie) return t;
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
    return new ie(e, t);
  }
  static fromError(t) {
    if (this.logError(t), t instanceof ie) return t;
    const e = "An unexpected error has occurred";
    return new ie(e);
  }
}
var Qi = ((i) => (i.CONTINUE_DETECTION = "continue-detection", i.SWITCH_CAMERA = "switch-camera", i.TOGGLE_MIRROR = "toggle-mirror", i))(Qi || {}), gg = ((i) => (i.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", i.CONTROL = "document-auto-capture:control", i.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", i.DOCUMENT_DETECTION = "document-auto-capture:document-detection", i.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", i.STATE_CHANGED = "document-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", i))(gg || {}), Gt = ((i) => (i.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", i.CONTROL = "face-auto-capture:control", i.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", i.FACE_DETECTION = "face-auto-capture:face-detection", i.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", i.STATE_CHANGED = "face-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", i))(Gt || {}), Dx = ((i) => (i.ANIMATION_END = "magnifeye-auto-capture:animation-end", i.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", i))(Dx || {}), so = ((i) => (i.STATUS_CHANGED = "smile-auto-capture:status-changed", i))(so || {});
const cg = {};
cg.EYE_NOT_PRESENT = "eye_not_present";
const Es = cg, We = {};
We.CANDIDATE_SELECTION = "candidate_selection", We.FACE_TOO_CLOSE = "face_too_close", We.FACE_TOO_FAR = "face_too_far", We.FACE_CENTERING = "face_centering", We.FACE_NOT_PRESENT = "face_not_present", We.SHARPNESS_TOO_LOW = "sharpness_too_low", We.BRIGHTNESS_TOO_LOW = "brightness_too_low", We.BRIGHTNESS_TOO_HIGH = "brightness_too_high", We.DEVICE_PITCHED = "device_pitched", We.LEFT_EYE_NOT_PRESENT = "left_" + Es.EYE_NOT_PRESENT, We.RIGHT_EYE_NOT_PRESENT = "right_" + Es.EYE_NOT_PRESENT, We.MOUTH_NOT_PRESENT = "mouth_not_present", We.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", We.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const Be = We, Re = {};
Re.isPresent = Be.FACE_NOT_PRESENT, Re.isNotPitched = Be.DEVICE_PITCHED, Re.isNotSmall = Be.FACE_TOO_FAR, Re.isNotLarge = Be.FACE_TOO_CLOSE, Re.isNotOutOfBounds = Be.FACE_CENTERING, Re.isNotDim = Be.BRIGHTNESS_TOO_LOW, Re.isNotBright = Be.BRIGHTNESS_TOO_HIGH, Re.isSharp = Be.SHARPNESS_TOO_LOW, Re.isLeftEyePresent = Be.LEFT_EYE_NOT_PRESENT, Re.isRightEyePresent = Be.RIGHT_EYE_NOT_PRESENT, Re.isMouthPresent = Be.MOUTH_NOT_PRESENT, Re.isMouthScoreNotTooHigh = Be.MOUTH_SCORE_TOO_HIGH, Re.isMouthScoreNotTooLow = Be.MOUTH_SCORE_TOO_LOW;
const Yx = Re, Sr = {};
Sr.FRONT = "user", Sr.REAR = "environment";
const lg = Sr, Fn = {};
Fn.LOADING = "LOADING", Fn.ERROR = "ERROR", Fn.WAITING = "WAITING", Fn.RUNNING = "RUNNING";
const ct = Fn;
var Fx = ((i) => (i.CLOSEUP = "CLOSEUP", i.DISTANT = "DISTANT", i.MIDDLE = "MIDDLE", i))(Fx || {});
const Br = {};
Br.NEUTRAL = "NEUTRAL", Br.SMILE = "SMILE";
const Cn = Br, xg = { ...ct };
xg.DONE = "DONE";
const jt = xg, Ho = pi(void 0);
Ho.displayName = "AppStateContext";
function Vn() {
  const i = _t(Ho);
  if (i === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return i;
}
const Xx = Ho.Provider, Mx = Vn;
class ug extends ze {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var t;
    const o = new ie("An unknown error has occurred");
    (t = this.context) == null || t.handleError(o);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var o;
    return ((o = this.context) == null ? void 0 : o.appState) === ct.ERROR ? null : this.props.children;
  }
}
j(ug, "contextType", Ho);
const jx = fi.canvas`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, Jx = fi.div`
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
function Ux() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const zx = B0(
  ({ detectionDetails: i, isImageMirror: o }, t) => Ux() ? (console.log(i), /* @__PURE__ */ H(it, { children: [
    /* @__PURE__ */ H(jx, { ref: t, $isImageMirror: o }),
    /* @__PURE__ */ H(Jx, { children: Object.entries(i).map(([e, n]) => /* @__PURE__ */ H("div", { children: [
      e,
      ": ",
      /* @__PURE__ */ H("strong", { children: n })
    ] }, e)) })
  ] })) : null
), go = pi(void 0);
go.displayName = "AnalyticsContext";
function Ig() {
  const i = _t(go);
  if (i === void 0)
    throw new Error(`${go.displayName} must be used within a AnalyticsProvider`);
  return i;
}
const co = pi(void 0);
co.displayName = "LicenseContext";
function da() {
  const i = _t(co);
  if (i === void 0)
    throw new Error(`${co.displayName} must be used within a LicenseProvider`);
  return i;
}
function Qx({ licensePath: i, licenseValidator: o, wasmDirectoryPath: t }) {
  const [e, n] = Ye(), r = e !== void (169 * -29 + 5160 + -259 * 1);
  be(() => {
    async function s() {
      await o.init(t, i), n(o.getLicenseResult());
    }
    s();
  }, [o, t, i, n]);
  const a = {};
  return a.licenseResult = e, a.isLicenseValidated = r, a;
}
var dg = ((i) => (i.DOCUMENT = "document-auto-capture:dev", i.FACE = "face-auto-capture:dev", i))(dg || {});
const Gr = {};
Gr.SIMD = "simd", Gr.NO_SIMD = "no-simd";
const Rs = Gr, Zr = {};
Zr.FREEMIUM = "Freemium", Zr.PREMIUM = "Premium";
const Hr = Zr, $i = {};
$i.VISIBLE = "VISIBLE", $i.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", $i.HIDDEN = "HIDDEN";
const lo = $i;
function $x({ licenseResult: i }) {
  return i != null && i.isValid ? Hr.PREMIUM : Hr.FREEMIUM;
}
function _x({
  children: i,
  licensePath: o,
  licenseValidator: t,
  wasmDirectoryPath: e
}) {
  const { isLicenseValidated: n, licenseResult: r } = Qx({
    licenseValidator: t,
    licensePath: o,
    wasmDirectoryPath: e
  }), a = Fe(
    () => ({
      appTier: $x({ licenseResult: r }),
      isLicenseValidated: n,
      licenseResult: r,
      licenseValidator: t
    }),
    [n, r, t]
  );
  return /* @__PURE__ */ H(co.Provider, { value: a, children: i });
}
function qx({ analytics: i, licenseResult: o }) {
  return o !== void (1028 + 74 * 83 + -3 * 2390) && !o.isAnalyticsDisabled ? i : void (-258 + 258 * 1);
}
function eu({ analytics: i, appKey: o, appTier: t, licenseResult: e, licenseValidator: n }) {
  const r = {};
  r.analytics = i, r.licenseResult = e;
  const a = qx(r);
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
function tu({
  analytics: i,
  appKey: o,
  children: t
}) {
  const { appTier: e, licenseResult: n, licenseValidator: r } = da(), a = eu({ analytics: i, appTier: e, appKey: o, licenseResult: n, licenseValidator: r }), s = Fe(
    () => ({
      analytics: a
    }),
    [a]
  );
  return /* @__PURE__ */ H(go.Provider, { value: s, children: t });
}
const nu = -1475 * 2 + -103 * -23 + -83 * -7 + 0.4, iu = -1 * 5461 + 1 * -351 + -2906 * -2 + 0.16, ou = 155 * -62 + 8863 + 747 + 0.2, ru = 4417 + 65 * 131 + 61 * -212 + 0.05, au = -2 * 4381 + -2101 + 10863, Wr = {};
Wr.min = -(7811 + 1916 * 1 + -9726), Wr.max = 1;
const Ps = Wr, Ls = 1817 * -5 + -2791 * -1 + 3147 * 2, su = -49 * 128 + 374 * 20 + -1208 + 0.3, gu = 127 * 25 + 7008 + -10183 + 0.2, cu = 0 + 0.85, lu = 74 * 101 + 8179 * -1 + 735, xu = 9 + 0.8100000000000005, _i = {};
_i.minDuration = 1e3, _i.maxDuration = 2500, _i.minFrames = 10;
const qo = _i, kr = {};
kr.max = 100, kr.min = 10;
const Ns = kr, uu = -5084 + -23 * 199 + 10381, Iu = 2518 * 1 + -5850 + -1 * -3532, du = -4 * 201 + 8927 + -8119, Cg = "AES-CBC", hg = "RSA-OAEP", Cu = "SHA-256", hu = "image/jpeg", pu = 8, fu = 105 * -2 + -5990 + 6240, mu = "SAM v1.39.3 for idcards", Au = "dot_embedded_bg.wasm";
let Q;
const pt = new Array(9608 + 1523 * -3 + 3 * -1637).fill(void 0);
pt.push(void 0, null, !0, !1);
function Kr(i) {
  return pt[i];
}
let At = -8683 + -98 * 3 + 8977, Xn = null;
function qi() {
  return (Xn === null || Xn.byteLength === -17 * 235 + 2784 + 7 * 173) && (Xn = new Uint8Array(Q.memory.buffer)), Xn;
}
const eo = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, bu = typeof eo.encodeInto == "function" ? function(i, o) {
  return eo.encodeInto(i, o);
} : function(i, o) {
  const t = eo.encode(i);
  o.set(t);
  const e = {};
  return e.read = i.length, e.written = t.length, e;
};
function xo(i, o, t) {
  if (t === void 0) {
    const s = eo.encode(i), g = o(s.length, -4703 * -2 + 6087 + 1291 * -12) >>> -5028 + -1167 * 3 + 1 * 8529;
    return qi().subarray(g, g + s.length).set(s), At = s.length, g;
  }
  let e = i.length, n = o(e, -1 * -9739 + -34 * -38 + -11030) >>> -26 * 358 + -3437 + 12745 * 1;
  const r = qi();
  let a = -2 * -4037 + 2078 + 9 * -1128;
  for (; a < e; a++) {
    const s = i.charCodeAt(a);
    if (s > -10 * -952 + -53 * -59 + -12520) break;
    r[n + a] = s;
  }
  if (a !== e) {
    a !== -4255 + 9763 * -1 + 14018 * 1 && (i = i.slice(a)), n = t(n, e, e = a + i.length * (-3961 + -82 * 34 + -422 * -16), -5476 + -11 * -298 + -2199 * -1) >>> -4 * -2203 + -9167 + 1 * 355;
    const s = qi().subarray(n + a, n + e), g = bu(i, s);
    a += g.written;
  }
  return At = a, n;
}
function pg(i) {
  return i == null;
}
let Mn = null;
function Bt() {
  return (Mn === null || Mn.byteLength === 34 * 139 + -8867 * -1 + 1 * -13593) && (Mn = new Int32Array(Q.memory.buffer)), Mn;
}
let Qn = pt.length;
function yu(i) {
  i < 3351 + -502 * -13 + -1 * 9745 || (pt[i] = Qn, Qn = i);
}
function fg(i) {
  const o = Kr(i);
  return yu(i), o;
}
const Or = {};
Or.ignoreBOM = !0, Or.fatal = !0;
const mg = typeof TextDecoder < "u" ? new TextDecoder("utf-8", Or) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && mg.decode();
function Vr(i, o) {
  return i = i >>> 4647 * -1 + 503 * -19 + -1 * -14204, mg.decode(qi().subarray(i, i + o));
}
function Tr(i) {
  Qn === pt.length && pt.push(pt.length + 1);
  const o = Qn;
  return Qn = pt[o], pt[o] = i, o;
}
let jn = null;
function Ag() {
  return (jn === null || jn.byteLength === -1458 + -61 * 119 + 8717) && (jn = new Uint32Array(Q.memory.buffer)), jn;
}
function Ds(i, o) {
  const t = o(i.length * 4, 4) >>> 0, e = Ag();
  for (let n = 1907 * -3 + 7553 + 2 * -916; n < i.length; n++)
    e[t / (7879 + -11 * 439 + -3046) + n] = Tr(i[n]);
  return At = i.length, t;
}
function Ys(i, o) {
  i = i >>> -1 * -473 + 1 * -9489 + 9016;
  const t = Ag(), e = t.subarray(i / (39 * 97 + 9689 + -259 * 52), i / (-1 * 2129 + 1 * 7745 + -1403 * 4) + o), n = [];
  for (let r = 8192 + 2 * -3371 + 1 * -1450; r < e.length; r++)
    n.push(fg(e[r]));
  return n;
}
function vu(i, o) {
  const t = xo(i, Q.__wbindgen_malloc, Q.__wbindgen_realloc), e = At, n = xo(o, Q.__wbindgen_malloc, Q.__wbindgen_realloc), r = At, a = Q.validate_license(t, e, n, r);
  return Ca.__wrap(a);
}
class Ca {
  static __wrap(o) {
    o = o >>> 0;
    const t = Object.create(Ca.prototype);
    return t.__wbg_ptr = o, t;
  }
  __destroy_into_raw() {
    const o = this.__wbg_ptr;
    return this.__wbg_ptr = -249 * -39 + -1 * -2578 + -12289 * 1, o;
  }
  free() {
    const o = this.__destroy_into_raw();
    Q.__wbg_licensevalidationresult_free(o);
  }
  constructor(o, t, e, n) {
    var r = pg(t) ? 0 : xo(t, Q.__wbindgen_malloc, Q.__wbindgen_realloc), a = At;
    const s = Ds(e, Q.__wbindgen_malloc), g = At, x = Ds(n, Q.__wbindgen_malloc), I = At, u = Q.licensevalidationresult_new(o, r, a, s, g, x, I);
    return this.__wbg_ptr = u >>> 8391 * 1 + -498 * 10 + -3411, this;
  }
  get is_valid() {
    return Q.licensevalidationresult_is_valid(this.__wbg_ptr) !== -7587 + -553 * -6 + 4269;
  }
  get features_json() {
    try {
      const e = Q.__wbindgen_add_to_stack_pointer(-16);
      Q.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var o = Bt()[e / (-7 * -445 + 1 * 6838 + 1 * -9949) + 0], t = Bt()[e / (3287 + 1063 * -1 + -4 * 555) + (-9751 * -1 + 4594 * -2 + -2 * 281)];
      let n;
      return o !== 4 * 103 + 2159 * -1 + 1747 && (n = Vr(o, t).slice(), Q.__wbindgen_free(o, t * (6454 + 1376 * 1 + -7829), 11238 + 1 * -11237)), n;
    } finally {
      Q.__wbindgen_add_to_stack_pointer(-2881 * -3 + 1324 * -5 + 9 * -223);
    }
  }
  get errors() {
    try {
      const n = Q.__wbindgen_add_to_stack_pointer(-16);
      Q.licensevalidationresult_errors(n, this.__wbg_ptr);
      var o = Bt()[n / (2 * -2446 + -1682 + 6578) + (289 * -12 + -1319 * -1 + 2149)], t = Bt()[n / (-2179 * 1 + 7641 + 1 * -5458) + 1], e = Ys(o, t).slice();
      return Q.__wbindgen_free(o, t * (-433 * -6 + 34 * -213 + -7 * -664), 4), e;
    } finally {
      Q.__wbindgen_add_to_stack_pointer(10 * -949 + 583 + 8923);
    }
  }
  get warnings() {
    try {
      const n = Q.__wbindgen_add_to_stack_pointer(-16);
      Q.licensevalidationresult_warnings(n, this.__wbg_ptr);
      var o = Bt()[n / (9925 + 137 * -65 + -1016 * 1) + (-177 * -8 + 11 * 569 + -7675)], t = Bt()[n / (488 + 1 * 4700 + -576 * 9) + (4448 + 4 * 2459 + -14283 * 1)], e = Ys(o, t).slice();
      return Q.__wbindgen_free(o, t * (-8089 * -1 + 4682 + -12767), 4), e;
    } finally {
      Q.__wbindgen_add_to_stack_pointer(-7952 * 1 + -609 + 8577 * 1);
    }
  }
}
async function wu(i, o) {
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
function Su() {
  const i = {};
  return i.wbg = {}, i.wbg.__wbindgen_string_get = function(o, t) {
    const e = Kr(t), n = typeof e == "string" ? e : void 0;
    var r = pg(n) ? 0 : xo(n, Q.__wbindgen_malloc, Q.__wbindgen_realloc), a = At;
    Bt()[o / (1439 * 2 + 1 * -563 + -2311) + (129 + 10 * 75 + -878)] = a, Bt()[o / (3701 + 3 * 3329 + 3421 * -4) + (-2 * -4129 + -5 * 1317 + -1673 * 1)] = r;
  }, i.wbg.__wbindgen_object_drop_ref = function(o) {
    fg(o);
  }, i.wbg.__wbindgen_string_new = function(o, t) {
    const e = Vr(o, t);
    return Tr(e);
  }, i.wbg.__wbg_new0_c0e40662db0749ee = function() {
    return Tr(/* @__PURE__ */ new Date());
  }, i.wbg.__wbg_getTime_af7ca51c0bcefa08 = function(o) {
    return Kr(o).getTime();
  }, i.wbg.__wbindgen_throw = function(o, t) {
    throw new Error(Vr(o, t));
  }, i;
}
function Bu(i, o) {
  return Q = i.exports, bg.__wbindgen_wasm_module = o, Mn = null, jn = null, Xn = null, Q;
}
async function bg(i) {
  if (Q !== void 0) return Q;
  typeof i > "u" && (i = new URL("dot_embedded_bg.wasm", import.meta.url));
  const o = Su();
  (typeof i == "string" || typeof Request == "function" && i instanceof Request || typeof URL == "function" && i instanceof URL) && (i = fetch(i));
  const { instance: t, module: e } = await wu(await i, o);
  return Bu(t, e);
}
class Gu {
  constructor() {
    j(this, "wasmInitialized", !1);
  }
  async init(o = "/wasm") {
    try {
      const t = o + "/" + Au;
      await bg(t), this.wasmInitialized = !0;
    } catch {
      this.wasmInitialized = !1, console.warn("dot_embedded_bg.wasm initialization failed! Please check documentation for more information.");
    }
  }
  isWasmInitialized() {
    return this.wasmInitialized;
  }
}
class er extends Error {
  constructor() {
    super(...arguments);
    j(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
var mn;
class Fs {
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
class Zu {
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
      this.license = void (-2085 + -700 * 7 + 1397 * 5), console.error(t);
    }
  }
  async loadLicense(o) {
    if (this.licenseResult = void (-8146 * -1 + -1 * 4179 + -3967 * 1), !o) {
      console.info("No DOT license provided."), this.license = void (-45 * -79 + 1 * 214 + -3769);
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
      if (!this.license) throw new er("No DOT license found.");
      if (!this.dotEmbedded.isWasmInitialized()) throw new er("Wasm not initialized.");
      this.licenseResult = new Fs(vu(this.license, this.getDomain())), this.printErrors(this.licenseResult.errors), this.printWarnings(this.licenseResult.warnings);
    } catch (o) {
      o instanceof er ? o.log() : o instanceof Error && console.error(o);
      const t = {};
      t.is_valid = !1, t.errors = [], t.warnings = [], t.features_json = void 0, t.free = function() {
      }, this.licenseResult = new Fs(t);
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
        t instanceof Error && ie.logError(t);
        return;
      }
  }
}
const fo = class fo extends Zu {
  static getInstance() {
    if (!this._instance) {
      const o = new Gu();
      this._instance = new fo(o);
    }
    return this._instance;
  }
};
j(fo, "_instance");
let Er = fo;
function Hu(i, o) {
  if (!i) return o;
  const { detectionRecord: t, hashedDetectedImages: e } = i;
  o.hashedDetectedImages && (e == null || e.push(...o.hashedDetectedImages)), o.detectionRecord && (t == null || t.push(...o.detectionRecord));
  const n = { ...i };
  return n.hashedDetectedImages = e, n.detectionRecord = t, n;
}
const yg = pi(null), vg = () => {
  const i = _t(yg);
  if (!i)
    throw new Error("Missing provider for CameraOptionsContext");
  return i;
}, Wu = (i) => {
  var g, x, I;
  const { cameraFacing: o, licensePath: t, onError: e, onPhotoTaken: n, sessionToken: r, thresholds: a, wasmDirectoryPath: s } = i;
  return {
    onPhotoTaken: n,
    onError: e,
    cameraFacing: o ?? "user",
    wasmDirectoryPath: s,
    licensePath: t,
    sessionToken: r,
    thresholds: {
      faceConfidence: (a == null ? void 0 : a.faceConfidence) ?? nu,
      minFaceSizeRatio: (a == null ? void 0 : a.minFaceSizeRatio) ?? iu,
      maxFaceSizeRatio: (a == null ? void 0 : a.maxFaceSizeRatio) ?? ou,
      sharpnessThreshold: (a == null ? void 0 : a.sharpnessThreshold) ?? su,
      brightnessLowThreshold: (a == null ? void 0 : a.brightnessLowThreshold) ?? gu,
      brightnessHighThreshold: (a == null ? void 0 : a.brightnessHighThreshold) ?? cu,
      outOfBoundsThreshold: (a == null ? void 0 : a.outOfBoundsThreshold) ?? ru,
      devicePitchAngleThreshold: (a == null ? void 0 : a.devicePitchAngleThreshold) ?? lu,
      mouth: {
        confidence: ((g = a == null ? void 0 : a.mouth) == null ? void 0 : g.confidence) ?? au,
        status: {
          min: ((x = a == null ? void 0 : a.mouth) == null ? void 0 : x.status.min) ?? Ps.min,
          max: ((I = a == null ? void 0 : a.mouth) == null ? void 0 : I.status.max) ?? Ps.max
        }
      },
      leftEye: (a == null ? void 0 : a.leftEye) ?? {
        confidence: Ls
      },
      rightEye: (a == null ? void 0 : a.rightEye) ?? {
        confidence: Ls
      }
    }
  };
}, ku = ({ cameraOptions: i, children: o }) => {
  const t = Fe(() => ({
    faceCameraOptions: Wu(i)
  }), [i]);
  return /* @__PURE__ */ H(yg.Provider, { value: t, children: o });
}, Ku = 0 + 0.75, Ou = -2 * -3310 + 177 * 31 + -5 * 2421, Vu = -2 * -3176 + 1 * 4405 + -1 * 10157, Tu = -1 * 4764 + 4581 + 183, wg = (i, o) => {
  const t = {};
  t.detail = o, document.dispatchEvent(new CustomEvent(i, t));
}, mo = class mo {
  constructor() {
    j(this, "lastDetails", {});
    j(this, "delayedTime", -17 * -415 + 421 * -11 + -2424);
  }
  static getInstance() {
    return !this._instance && (this._instance = new mo()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = -502 * 11 + -7218 + 12740;
  }
  isDetailChanged(o, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[o]) ? (this.lastDetails[o] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(o, t) {
    this.isDetailChanged(o, t) && wg(o, t);
  }
  dispatchDelayedCustomEventOnChange(o, t, e) {
    const n = performance.now();
    n - this.delayedTime > e && (this.dispatchCustomEventOnChange(o, t), this.delayedTime = n);
  }
};
j(mo, "_instance");
let ei = mo;
const mi = ei.getInstance(), Xs = (i, o, t = Vu) => {
  const e = {};
  e.instructionCode = o;
  const n = e;
  mi.dispatchDelayedCustomEventOnChange(i, n, t);
}, Eu = (i, o) => {
  mi.dispatchCustomEventOnChange(i, o);
}, Ru = (i, o) => {
  const t = {};
  t.size = o;
  const e = t;
  mi.dispatchCustomEventOnChange(i, e);
}, Pu = (i, o, t) => {
  const e = o.confidence < t ? void 0 : o, n = {};
  n.detectedObject = e;
  const r = n;
  mi.dispatchCustomEventOnChange(i, r);
}, Lu = (i, o, t) => {
  const e = {};
  e.image = t, e.data = {}, e.data.detection = o, e.data.imageResolution = {}, e.data.imageResolution.width = t.width, e.data.imageResolution.height = t.height;
  const n = e;
  mi.dispatchCustomEventOnChange(i, n);
}, Rr = (i, o) => {
  wg(i, o);
};
var De = {};
De.VITE_FACE_COUNTLY_APP_KEY = "5f83e83ee4cee1ab6e5bbf86e215644473299675", De.VITE_MAGNIFEYE_COUNTLY_APP_KEY = "d5ca54dabfb1a2c72d7090c9c8980252a879da44", De.VITE_DOCUMENT_COUNTLY_APP_KEY = "065cf6e242fc5e785cd17eebfbfbbd212a33133b", De.VITE_COUNTLY_URL = "https://innovatrics.count.ly", De.VITE_SMILE_COUNTLY_APP_KEY = "d64319129bb0ee02eccfab418edba9629a97d6b6", De.VITE_RSA_PUBLIC_KEY = "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", De.BASE_URL = "/", De.MODE = "production", De.DEV = !1, De.PROD = !0, De.SSR = !1, De.VITE_PACKAGE_VERSION = "6.1.2";
var Nu = De;
const Du = () => {
  var i;
  return ((i = Nu.VITE_APP_ENV) == null ? void 0 : i.toLowerCase()) === "dev";
}, Yu = (i, o, t = hu) => new Promise((e) => {
  i.toBlob((n) => {
    if (!n) throw new Error("Canvas to Blob failed");
    e(n);
  }, t, o);
}), Fu = async (i) => Yu(i, 2 * 3376 + -5679 + -983), Xu = (i, o) => {
  const t = document.createElement("canvas");
  t.width = o.width, t.height = o.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(i, o.shiftX, o.shiftY, o.width, o.height, 4801 * -1 + 3215 + -26 * -61, 1 * -9187 + -3870 + 13057, t.width, t.height), t;
}, Mu = (i) => {
  const o = i.getContext("2d");
  if (!o) throw new Error("getImageDataForSam ctx error");
  const { data: t } = o.getImageData(349 * -3 + 9340 + -8293, -4250 + -1986 * -3 + -2 * 854, i.width, i.height);
  return t;
}, Sg = (i, o, t, e) => {
  const n = i.getContext("2d");
  n && (n.beginPath(), e ? (n.fillStyle = t, n.fillRect(o.topLeft.x, o.topLeft.y, o.width, o.height)) : (n.strokeStyle = t, n.rect(o.topLeft.x, o.topLeft.y, o.width, o.height)), n.stroke());
}, tr = (i, o, t) => {
  const { height: e, shiftX: n, shiftY: r, width: a } = o, s = {};
  s.x = n, s.y = r;
  const g = {};
  g.topLeft = s, g.width = a, g.height = e, g.color = t, Sg(i, g, t);
}, $n = (i, o, t, e = -9948 + 12 * -224 + 2106 * 6) => {
  const n = i.getContext("2d");
  n && (n.fillStyle = t, n.fillRect(o.x + e, o.y + e, -3793 + -182 * 29 + 9078, 903 + -231 * -5 + 7 * -293), n.beginPath());
}, ju = (i, o) => {
  const t = i.getContext("2d");
  t && t.drawImage(o, 62 * -119 + 6799 * -1 + 14177 * 1, 374 * 5 + -5658 + -3788 * -1);
}, Ju = (i, o) => {
  if (Du()) {
    const t = {};
    t.candidateSelectionImages = o;
    const e = t;
    ei.getInstance().dispatchCustomEventOnChange(i, e);
  }
}, Uu = (i, o) => {
  const { cameraResolution: t, shouldMirror: e } = o;
  be(() => {
    if (!t) return;
    const n = {};
    n.cameraResolution = t, n.isMirroring = e, Eu(i, n);
  }, [t, e, i]);
}, Bg = (i) => i.length < 1 * 3299 + -3213 + -1 * 85 ? -2407 * -2 + 3323 + -103 * 79 : i.reduce((t, e) => t + e, 2537 + -1 * -65 + -2602) / i.length, Ai = (i) => Number.parseFloat(i.toFixed(-5652 + -2873 * 2 + 11401)), zu = (i) => {
  const o = i.getContext("2d");
  o && o.clearRect(0, -1398 + 4538 * 1 + -785 * 4, o.canvas.width, o.canvas.height);
}, Wo = (i, o) => Math.min(i, o), Qu = (i, o) => {
  const t = Wo(o.width, o.height);
  return Ai(i * t);
}, Gg = ({ height: i, width: o }) => {
  const t = Wo(o, i), e = t / (-1 * -7366 + -85 * -101 + 3 * -5316) * (-3 * 1281 + 9325 + -5478);
  if (o > i) {
    const r = {};
    return r.width = e, r.height = t, r;
  }
  const n = {};
  return n.width = t, n.height = e, n;
}, Zg = ({ height: i, width: o }) => {
  const t = Wo(o, i) * Ku, e = (o - t) / 2, n = (i - t) / (-8197 * 1 + -6819 + -1 * -15018), r = {};
  return r.shiftX = e, r.shiftY = n, r.width = t, r.height = t, r;
}, $u = (i) => {
  const { height: o, shiftX: t, shiftY: e, width: n } = Zg(i), r = {};
  return r.shiftX = t / i.width, r.shiftY = e / i.height, r.width = n / i.width, r.height = o / i.height, r;
}, _u = (i, o) => Qu(i, o) * Ou, qu = "@innovatrics/dot-common-auto-capture", eI = "6.1.2", tI = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, nI = {
  "@dot/proto-files": "2.0.4",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, iI = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.1"
}, oI = {
  name: qu,
  private: !0,
  version: eI,
  scripts: tI,
  dependencies: nI,
  devDependencies: iI
}, Hg = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), Ms = () => {
  const i = /Android/i.test(navigator.userAgent), o = /Firefox/i.test(navigator.userAgent);
  return i && o;
}, rI = () => {
  const i = navigator.userAgent.includes("Chrome"), o = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return i && o ? !1 : o;
}, Pr = (i) => new Promise((o) => {
  setTimeout(o, i);
}), un = (i) => JSON.parse(JSON.stringify(i, (o, t) => typeof t == "number" ? Ai(t) : t)), Wg = () => oI.version, kg = (i) => new URL(i).hostname.replace("www.", ""), aI = () => kg(window.location.href) === "localhost", Pi = (i) => Object.entries(i).map(([o, t]) => encodeURIComponent(o) + "=" + encodeURIComponent(t)).join("&"), sI = (i, o) => {
  const t = i && performance.now() - i;
  return o >= qo.minFrames ? t > qo.minDuration : t > qo.maxDuration;
}, gI = (i, o) => JSON.stringify(i) === JSON.stringify(o) ? o : i;
function cI(i, o) {
  let t;
  return (...e) => {
    const n = () => {
      clearTimeout(t), t = void 0, i(...e);
    };
    t === void (-62 * -1 + -4 * 993 + 3910) && (t = setTimeout(n, o));
  };
}
const lI = (i) => i === gg.CONTROL ? !Hg() : !0, xI = (i, o) => {
  const { appState: t, handleAppStateChange: e, handleError: n, isCameraReady: r } = Vn(), [a, s] = Ye(), g = Fe(() => {
    const I = r && o && o.isStreaming && o.getCameraSettings().facingMode;
    return I ? a ?? I === "user" : a ?? lI(i);
  }, [o, a, i, r]);
  be(() => {
    const I = () => {
      t !== ct.LOADING && e(ct.RUNNING);
    }, u = () => {
      s(a === void 0 ? !g : !a);
    }, m = async () => {
      if (o) {
        e(ct.LOADING);
        try {
          await o.switchCamera(), e(ct.RUNNING);
        } catch (y) {
          if (y instanceof Error) {
            n(ie.fromCameraError(y));
            return;
          }
        }
        s(void 0);
      }
    }, f = (y) => {
      var Z;
      switch ((Z = y.detail) == null ? void 0 : Z["instruction"]) {
        case Qi.CONTINUE_DETECTION:
          I();
          break;
        case Qi.TOGGLE_MIRROR:
          u();
          break;
        case Qi.SWITCH_CAMERA:
          m();
          break;
        default:
          return;
      }
    };
    return document.addEventListener(i, f), () => {
      document.removeEventListener(i, f);
    };
  }, [t, o, n, a, e, g, i]);
  const x = {};
  return x.shouldMirror = g, x;
};
class uI {
  constructor() {
    j(this, "canvasElement");
    j(this, "context");
    this.canvasElement = document.createElement("canvas"), this.context = this.canvasElement.getContext("2d");
  }
  cloneMutable(o) {
    this.canvasElement.width = o.width, this.canvasElement.height = o.height, ju(this.canvasElement, o);
  }
}
async function Kg() {
  return navigator.mediaDevices.enumerateDevices();
}
async function nr() {
  return (await Kg()).filter((o) => o.kind === "videoinput");
}
function ir(i) {
  i.getTracks().forEach((t) => t.stop());
}
function js(i) {
  return i.getVideoTracks()[-7967 * -1 + 3963 + -11930 * 1];
}
const to = {};
to.width = 1920, to.height = 1080, to.facingMode = lg.FRONT;
const II = to;
var tt;
class Og {
  constructor({ defaultVideoConstrains: o = II, minCameraShorterSide: t = uu } = {}) {
    j(this, "options");
    ce(this, tt, null);
    const e = {};
    e.defaultVideoConstrains = o, e.minCameraShorterSide = t, this.options = e;
  }
  get mediaStream() {
    return X(this, tt);
  }
  get videoTrack() {
    return X(this, tt) ? js(X(this, tt)) : void (-3 * -1406 + -1 * -7362 + 2895 * -4);
  }
  get isCameraActive() {
    var o;
    return !!((o = X(this, tt)) != null && o.active);
  }
  static async requestPermission() {
    const o = {};
    o.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(o);
    ir(t);
  }
  async open(o = {}) {
    Ms() && await Pr(6007 * -1 + -1498 + -185 * -43), se(this, tt, await navigator.mediaDevices.getUserMedia(o)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const o = await nr();
    if (o.length <= -118 * 79 + 1301 + 8022) return;
    const t = this.videoTrack.getConstraints(), e = this.videoTrack.getSettings(), n = o.findIndex((s) => s.deviceId === e.deviceId), r = o[n + 1] ?? o[0], a = this.getConstraints(t, r);
    await this.open(a);
  }
  close() {
    X(this, tt) && (ir(X(this, tt)), se(this, tt, null));
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
    if (!o.width) throw new ie("Video width is undefined");
    if (!o.height) throw new ie("Video height is undefined");
    const t = {};
    return t.width = o.width, t.height = o.height, t;
  }
  async getDeviceName() {
    const o = this.getSettings(), t = await Kg(), e = t.find((n) => n.deviceId === o.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(o) {
    return o === lg.FRONT ? void (-9721 * -1 + 985 + 1 * -10706) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return Hg() ? (await nr()).find((e) => e.label.includes("back") && e.label.includes("0")) : void (4534 * -2 + 3 * 1340 + 2524 * 2);
  }
  async getAvailableCamerasInfo() {
    const o = [], t = await nr();
    for (const e of t) {
      Ms() && await Pr(65 * -123 + 9788 + -1343);
      try {
        const n = {};
        n.deviceId = e.deviceId, n.width = 480;
        const r = {};
        r.video = n;
        const a = await navigator.mediaDevices.getUserMedia(r), s = js(a);
        if (!s) throw new Error("Video track not found! (device id: " + e.deviceId + ")");
        const g = s.getSettings(), x = { ...g };
        x.deviceName = s.label;
        const I = {};
        I.cameraProperties = x;
        const u = I;
        o.push(u), ir(a);
      } catch (n) {
        n instanceof Error && ie.logError(n);
      }
    }
    return o;
  }
  getConstraints(o, t) {
    const e = { ...this.options.defaultVideoConstrains, ...o };
    e.deviceId = t ? { exact: t.deviceId } : void (1053 * 9 + 149 * 41 + -15586);
    const n = {};
    return n.video = e, n.audio = !1, n;
  }
  checkVideoTrackSettings() {
    var e;
    const o = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(o != null && o.height) || !(o != null && o.width))
      throw this.close(), new ie("Could not init camera settings");
    if (typeof this.options.minCameraShorterSide != "number") return;
    if (Math.min(o == null ? void 0 : o.width, o == null ? void 0 : o.height) < this.options.minCameraShorterSide)
      throw this.close(), new ie("Could not init video because of low camera resolution: " + o.width + "x" + o.height + ".");
  }
}
tt = new WeakMap();
class dI {
  constructor(o, t) {
    j(this, "canvas");
    this.videoHandler = o, this.cameraHandler = t, this.canvas = new uI();
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async startVideoStream(o = {}) {
    await Og.requestPermission();
    const t = await this.cameraHandler.getBestCameraInfo(o.facingMode), e = this.cameraHandler.getConstraints(o, t);
    await this.cameraHandler.open(e), rI() && (this.cameraHandler.close(), await this.cameraHandler.open(e)), await this.mountVideoStream();
  }
  takePhoto() {
    var t;
    if (!this.cameraHandler.videoTrack) throw Error("Video track must be initialized to take photo");
    const o = (t = this.cameraHandler.videoTrack) == null ? void 0 : t.getSettings();
    if (!(o != null && o.width)) throw new ie("Cant take photo - video width is undefined");
    if (!(o != null && o.height)) throw new ie("Cant take photo - video height is undefined");
    if (!this.canvas.context) throw new ie("Cant take photo - cant create context");
    return this.canvas.canvasElement.width = o.width, this.canvas.canvasElement.height = o.height, this.canvas.context.drawImage(this.videoHandler.videoElement, -6018 + -2 * -3009, -1402 * 1 + 7389 + 1 * -5987), { image: this.canvas.canvasElement, timestamp: Date.now() };
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
class CI {
  constructor(o) {
    ce(this, ht);
    se(this, ht, o);
  }
  get videoElement() {
    return X(this, ht);
  }
  async play(o) {
    X(this, ht).srcObject = o, await X(this, ht).play();
  }
  stop() {
    X(this, ht).srcObject = null;
  }
  hasSrcObject() {
    return !!X(this, ht).srcObject;
  }
}
ht = new WeakMap();
function hI(i, o) {
  const t = bt(), { handleError: e, setIsCameraReady: n } = Vn(), [r, a] = Ye(), s = wn((x) => {
    a((I) => gI(x, I));
  }, []);
  be(() => ((async () => {
    if (!i.current) {
      e(new ie("Something went wrong during video initialization"));
      return;
    }
    const I = new CI(i.current), u = new Og(), m = new dI(I, u);
    try {
      const f = {};
      f.facingMode = o, await m.startVideoStream(f);
    } catch (f) {
      if (f instanceof Error) {
        e(ie.fromCameraError(f));
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
function pI(i, o) {
  be(() => {
    function t() {
      i.current && Ru(o, i.current.getBoundingClientRect());
    }
    return t(), window.addEventListener("resize", t), () => {
      window.removeEventListener("resize", t);
    };
  }, [i, o]);
}
class ha extends Array {
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
    this.length === this.size && this.splice(3994 + 206 * 32 + 134 * -79, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-3630 + -1 * 2255 + 5885);
  }
}
const fI = (i, o) => {
  const { height: t, shiftX: e, shiftY: n, width: r } = o;
  return !(i.x < e || i.x > e + r || i.y < n || i.y > n + t);
}, mI = (i, o) => Object.values(i).every((t) => fI(t, o));
function AI(i) {
  return Ai(Math.abs(i));
}
const bI = () => {
  const [i, o] = Ye(null), t = bt(new ha(9071 + -9066 * 1));
  function e(r) {
    const { z: a } = r.accelerationIncludingGravity || {};
    if (!a) return;
    t.current.pushFixed(AI(a));
    const s = Ai(Bg(t.current)), g = {};
    g.z = s, o(g);
  }
  be(() => (window.addEventListener("devicemotion", cI(e, fu), !0), () => {
    window.removeEventListener("devicemotion", e, !0);
  }), []);
  const n = {};
  return n.acceleration = i, n;
};
var yI = Symbol.for("preact-signals");
function pa() {
  if (fn > -7933 + 1 * 7934)
    fn--;
  else {
    for (var i, o = !1; void (-117 + -3 * -39) !== _n; ) {
      var t = _n;
      for (_n = void (-2 * -2693 + 1064 + -6450), Lr++; void (-1 * 3257 + 1 * -6524 + 9781) !== t; ) {
        var e = t.o;
        if (t.o = void (-2745 + 1097 * 1 + 1648), t.f &= -(83 * 105 + 446 * 19 + -661 * 26), !(-8787 + 2 * 2677 + 3441 & t.f) && Eg(t)) try {
          t.c();
        } catch (n) {
          !o && (i = n, o = !(-59 * 91 + -6308 * 1 + -1 * -11677));
        }
        t = e;
      }
    }
    if (Lr = 1 * 1161 + 4203 * -1 + -2 * -1521, fn--, o) throw i;
  }
}
var te = void (6722 + -1572 * 3 + 1 * -2006), _n = void 0, fn = 8320 + 3 * -3259 + -1 * -1457, Lr = -3 * 1815 + 97 * -37 + -9034 * -1, uo = 12698 + 14 * -907;
function Vg(i) {
  if (void (7921 * 1 + -2 * -842 + -1 * 9605) !== te) {
    var o = i.n;
    if (void (-43 * -43 + -1925 + 76) === o || o.t !== te)
      return o = { i: 0, S: i, p: te.s, n: void (3 * 517 + -7844 + 6293), t: te, e: void (6937 * -1 + 1 * 1884 + 5053), x: void (17 * -278 + -266 + -6 * -832), r: o }, void (9182 * -1 + -778 * -2 + 41 * 186) !== te.s && (te.s.n = o), te.s = o, i.n = o, -412 * 10 + -3 * -1591 + 27 * -23 & te.f && i.S(o), o;
    if (-(4 * 406 + 182 * 41 + -9085) === o.i)
      return o.i = 0, void (-3529 * -1 + 10 * 109 + 149 * -31) !== o.n && (o.n.p = o.p, void (-1 * 7549 + -3853 + -5701 * -2) !== o.p && (o.p.n = o.n), o.p = te.s, o.n = void (-8565 + 3 * -853 + 11124), te.s.n = o, te.s = o), o;
  }
}
function ve(i) {
  this.v = i, this.i = 3902 + 175 * 50 + -12652, this.n = void (5405 + -5 * 1081), this.t = void (-17488 + 1 * 17488);
}
ve.prototype.brand = yI, ve.prototype.h = function() {
  return !(4481 + -2732 * 2 + 983);
}, ve.prototype.S = function(i) {
  this.t !== i && void (829 * -4 + -7294 + 2122 * 5) === i.e && (i.x = this.t, void (106 + 621 * -10 + 6104) !== this.t && (this.t.e = i), this.t = i);
}, ve.prototype.U = function(i) {
  if (void (1548 + 1548 * -1) !== this.t) {
    var o = i.e, t = i.x;
    void (2879 + -6679 * 1 + 38 * 100) !== o && (o.x = t, i.e = void (2 * -2673 + 9691 * -1 + 1 * 15037)), void (11728 + 11728 * -1) !== t && (t.e = o, i.x = void (22 * 317 + 5178 + -12152)), i === this.t && (this.t = t);
  }
}, ve.prototype.subscribe = function(i) {
  var o = this;
  return ma(function() {
    var t = o.value, e = te;
    te = void (-9552 + 108 * 4 + 15 * 608);
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
  te = void (-3023 * -3 + 64 * 97 + -15277 * 1);
  try {
    return this.value;
  } finally {
    te = i;
  }
}, Object.defineProperty(ve.prototype, "value", { get: function() {
  var i = Vg(this);
  return void (1613 + 1613 * -1) !== i && (i.i = this.i), this.v;
}, set: function(i) {
  if (i !== this.v) {
    if (Lr > 100) throw new Error("Cycle detected");
    this.v = i, this.i++, uo++, fn++;
    try {
      for (var o = this.t; void (97 * -35 + -20 * -461 + -5825) !== o; o = o.x) o.t.N();
    } finally {
      pa();
    }
  }
} });
function Tg(i) {
  return new ve(i);
}
function Eg(i) {
  for (var o = i.s; void (1 * 6454 + -3 * 2433 + 845) !== o; o = o.n) if (o.S.i !== o.i || !o.S.h() || o.S.i !== o.i) return !(-10133 + 10133 * 1);
  return !(4242 + 4241 * -1);
}
function Rg(i) {
  for (var o = i.s; void (1 * -5903 + 388 * 11 + 1635) !== o; o = o.n) {
    var t = o.S.n;
    if (void (-7695 + -513 * -15) !== t && (o.r = t), o.S.n = o, o.i = -(-155 + -3 * -52), void (4693 + 15 * 113 + -6388) === o.n) {
      i.s = o;
      break;
    }
  }
}
function Pg(i) {
  for (var o = i.s, t = void (625 + 6229 * 1 + -298 * 23); void (-713 + -23 * -31) !== o; ) {
    var e = o.p;
    -(56 * -92 + -5484 + 967 * 11) === o.i ? (o.S.U(o), void (-2214 + -54 * -41) !== e && (e.n = o.n), void (6917 * 1 + 8071 * 1 + -14988) !== o.n && (o.n.p = e)) : t = o, o.S.n = o.r, void (8571 + 2993 * -3 + -17 * -24) !== o.r && (o.r = void (-3216 + 1122 * 8 + -5760)), o = e;
  }
  i.s = t;
}
function In(i) {
  ve.call(this, void (-3693 * 2 + -6211 + 13597 * 1)), this.x = i, this.s = void (-3241 + 13 * 69 + 2344), this.g = uo - (9940 + -29 * -43 + -11186), this.f = 5766 + 5762 * -1;
}
(In.prototype = new ve()).h = function() {
  if (this.f &= -(3 * -3007 + 4631 + -191 * -23), -3767 + 197 * 28 + 874 * -2 & this.f) return !(-1 * -937 + 437 * 19 + 9239 * -1);
  if (45 * 105 + -3825 + -868 == (-1497 + 5038 * -1 + 6571 & this.f)) return !(-614 * 10 + 1 * -1943 + 8083);
  if (this.f &= -(14 * 395 + 2297 * -4 + 3663), this.g === uo) return !(22 * -379 + -218 * -32 + 1362);
  if (this.g = uo, this.f |= -1244 * 4 + -1 * 7477 + 12454, this.i > 0 && !Eg(this)) return this.f &= -(2 * 1414 + 2263 * 3 + -9615), !(-652 * 1 + -400 + 1052);
  var i = te;
  try {
    Rg(this), te = this;
    var o = this.x();
    (505 * 18 + -6074 * -1 + -15148 & this.f || this.v !== o || -1 * -8116 + 8675 * 1 + -16791 === this.i) && (this.v = o, this.f &= -(-1171 * 2 + 6680 + 1 * -4321), this.i++);
  } catch (t) {
    this.v = t, this.f |= 89 * -38 + 9 * -319 + 6269, this.i++;
  }
  return te = i, Pg(this), this.f &= -(1 * -7181 + -11 * 293 + 10406), !(-6722 + -5317 * -1 + -1405 * -1);
}, In.prototype.S = function(i) {
  if (void (-1319 * 4 + -5783 + -11059 * -1) === this.t) {
    this.f |= 5077 * 1 + -2 * -149 + -19 * 281;
    for (var o = this.s; void (3575 + 311 * 13 + -3809 * 2) !== o; o = o.n) o.S.S(o);
  }
  ve.prototype.S.call(this, i);
}, In.prototype.U = function(i) {
  if (void (-9681 + -239 * -3 + 4 * 2241) !== this.t && (ve.prototype.U.call(this, i), void (-289 * 17 + 924 + 3989 * 1) === this.t)) {
    this.f &= -33;
    for (var o = this.s; void (5536 + -13 * -33 + -5965) !== o; o = o.n) o.S.U(o);
  }
}, In.prototype.N = function() {
  if (!(-1883 + 2 * -3107 + 8099 & this.f)) {
    this.f |= 26 * 37 + -4 * -115 + 118 * -12;
    for (var i = this.t; void (7349 + 7349 * -1) !== i; i = i.x) i.t.N();
  }
}, Object.defineProperty(In.prototype, "value", { get: function() {
  if (1 & this.f) throw new Error("Cycle detected");
  var i = Vg(this);
  if (this.h(), void (-1848 + -12 * -154) !== i && (i.i = this.i), -276 * 21 + 149 * 61 + 113 * -29 & this.f) throw this.v;
  return this.v;
} });
function vI(i) {
  return new In(i);
}
function Lg(i) {
  var o = i.u;
  if (i.u = void (-3200 + 6643 * 1 + -313 * 11), typeof o == "function") {
    fn++;
    var t = te;
    te = void (-1 * -6151 + -2 * 3661 + 1 * 1171);
    try {
      o();
    } catch (e) {
      throw i.f &= -(-449 * 15 + -7853 * -1 + -279 * 4), i.f |= -4303 * 2 + -9341 + -35 * -513, fa(i), e;
    } finally {
      te = t, pa();
    }
  }
}
function fa(i) {
  for (var o = i.s; o !== void 0; o = o.n) o.S.U(o);
  i.x = void (5878 + 1 * 8803 + 277 * -53), i.s = void (9176 + -4588 * 2), Lg(i);
}
function wI(i) {
  if (te !== this) throw new Error("Out-of-order effect");
  Pg(this), te = i, this.f &= -(-3174 + 3 * -1303 + 13 * 545), 1 * -6637 + -456 + 7101 & this.f && fa(this), pa();
}
function Jn(i) {
  this.x = i, this.u = void (-7739 * -1 + 1120 + -8859), this.s = void (-1196 + 1129 * 7 + -6707 * 1), this.o = void (-2 * -694 + -2 * -2383 + -6154), this.f = 693 + -293 * -17 + -5642;
}
Jn.prototype.c = function() {
  var i = this.S();
  try {
    if (-3 * 3191 + 5207 + -18 * -243 & this.f || this.x === void 0) return;
    var o = this.x();
    typeof o == "function" && (this.u = o);
  } finally {
    i();
  }
}, Jn.prototype.S = function() {
  if (-881 * 1 + -7091 + 7973 & this.f) throw new Error("Cycle detected");
  this.f |= -7704 + -649 * 8 + 12897, this.f &= -(2820 + 4249 * 2 + -11309), Lg(this), Rg(this), fn++;
  var i = te;
  return te = this, wI.bind(this, i);
}, Jn.prototype.N = function() {
  !(2 * 367 + -1 * -4735 + -497 * 11 & this.f) && (this.f |= -4889 + 602 * -7 + 9105, this.o = _n, _n = this);
}, Jn.prototype.d = function() {
  this.f |= -557 * 7 + 6713 + -2806, -7834 + -80 * 109 + 16555 & this.f || fa(this);
};
function ma(i) {
  var o = new Jn(i);
  try {
    o.c();
  } catch (t) {
    throw o.d(), t;
  }
  return o.d.bind(o);
}
var or;
function hn(i, o) {
  N[i] = o.bind(null, N[i] || function() {
  });
}
function Li(i) {
  or && or(), or = i && i.S();
}
function Ng(i) {
  var o = this, t = i.data, e = pn(t);
  e.value = t;
  var n = Fe(function() {
    for (var r = o.__v; r = r.__; ) if (r.__c) {
      r.__c.__$f |= 63 * -139 + -191 * -13 + 6278;
      break;
    }
    return o.__$u.c = function() {
      var a;
      !x0(n.peek()) && 1 * -8038 + -1 * -7123 + 51 * 18 === ((a = o.base) == null ? void (4778 + 2 * -2389) : a.nodeType) ? o.base.data = n.peek() : (o.__$f |= 1 * 7399 + -73 + -7325, o.setState({}));
    }, vI(function() {
      var a = e.value.value;
      return 65 * -73 + 7382 + -3 * 879 === a ? 9166 + 1 * -9166 : !(11199 + -3733 * 3) === a ? "" : a || "";
    });
  }, []);
  return n.value;
}
Ng.displayName = "_st";
var Nr = {};
Nr.configurable = !0, Nr.value = void (-8314 * 1 + 1 * 6267 + -23 * -89);
var Dr = {};
Dr.configurable = !0, Dr.value = Ng;
var Yr = {};
Yr.configurable = !(-3 * -1709 + 17 * 371 + -1 * 11434), Yr.get = function() {
  var i = {};
  return i.data = this, i;
};
var Fr = {};
Fr.configurable = !(1069 * 2 + -475 + -1 * 1663), Fr.value = 1;
var Nn = {};
Nn.constructor = Nr, Nn.type = Dr, Nn.props = Yr, Nn.__b = Fr, Object.defineProperties(ve.prototype, Nn), hn("__b", function(i, o) {
  if (typeof o.type == "string") {
    var t, e = o.props;
    for (var n in e) if (n !== "children") {
      var r = e[n];
      r instanceof ve && (t || (o.__np = t = {}), t[n] = r, e[n] = r.peek());
    }
  }
  i(o);
}), hn("__r", function(i, o) {
  Li();
  var t, e = o.__c;
  e && (e.__$f &= -(1 * -785 + 9062 + -1655 * 5), void (7772 + -134 * 58) === (t = e.__$u) && (e.__$u = t = function(n) {
    var r;
    return ma(function() {
      r = this;
    }), r.c = function() {
      e.__$f |= 3117 * -1 + 1 * 9929 + -6811 * 1, e.setState({});
    }, r;
  }())), Li(t), i(o);
}), hn("__e", function(i, o, t, e) {
  Li(), i(o, t, e);
}), hn("diffed", function(i, o) {
  Li();
  var t;
  if (typeof o.type == "string" && (t = o.__e)) {
    var e = o.__np, n = o.props;
    if (e) {
      var r = t.U;
      if (r) for (var a in r) {
        var s = r[a];
        void (6866 + -1 * 7757 + 891) !== s && !(a in e) && (s.d(), r[a] = void (41 * 7 + -7931 + 7644 * 1));
      }
      else t.U = r = {};
      for (var g in e) {
        var x = r[g], I = e[g];
        void (11692 + -2 * 5846) === x ? (x = SI(t, g, I, n), r[g] = x) : x.o(I, n);
      }
    }
  }
  i(o);
});
function SI(i, o, t, e) {
  var n = o in i && i.ownerSVGElement === void 0, r = Tg(t);
  return { o: function(a, s) {
    r.value = a, e = s;
  }, d: ma(function() {
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
        t.U = void (-1 * 6041 + -6809 + 12850);
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
      s && (a.__$u = void (1 * -6734 + -1986 * 2 + 10706), s.d());
    }
  }
  i(o);
}), hn("__h", function(i, o, t, e) {
  (e < -20 * -241 + 24 * 94 + -643 * 11 || e === 9) && (o.__$f |= -63 * 7 + 7977 + -7534), i(o, t, e);
}), ze.prototype.shouldComponentUpdate = function(i, o) {
  var t = this.__$u;
  if (!(t && void (-2 * 4157 + 9802 + 1 * -1488) !== t.s || -78 + -7177 * -1 + -7095 & this.__$f)) return !(-1225 * -2 + -4029 + 1579);
  if (2214 + -64 * 73 + 2461 & this.__$f) return !(-18 * -433 + -254 * 25 + -1444);
  for (var e in o) return !(2 * -266 + -7966 + 1214 * 7);
  for (var n in i) if (n !== "__source" && i[n] !== this.props[n]) return !(2582 * 2 + 4987 * 2 + -58 * 261);
  for (var r in this.props) if (!(r in i)) return !(39 * -147 + -1519 * -3 + -294 * -4);
  return !1;
};
function pn(i) {
  return Fe(function() {
    return Tg(i);
  }, []);
}
function BI({ analytics: i, cameraFacing: o, controller: t, createProtoMessage: e, onPhotoTaken: n, sessionToken: r }) {
  const a = bt(null), { isLicenseValidated: s } = da(), { appState: g, handleAppStateChange: x, handleError: I } = Vn(), { cameraResolution: u, cameraService: m, onCameraResolutionChange: f } = hI(a, o), y = pn(void (-1669 * 1 + 1 * -7537 + 9206));
  be(() => {
    m != null && m["isStreaming"] && (t != null && t["isDetectorInitialized"]) && s && x(ct.RUNNING);
  }, [m == null ? void 0 : m["isStreaming"], t == null ? void 0 : t["isDetectorInitialized"], x, s]), be(() => {
    if (g !== ct.RUNNING) return;
    if (!m || !t) throw new ie("Cannot start detection");
    let T = 5245 + 1049 * -5, S = !1, B = -2 * -2543 + 6023 + -3 * 3703;
    const R = new ha(1 * 4436 + 368 * -6 + -2198 * 1);
    t.clearImagesForDuplicateDetection();
    async function U({ cameraService: W, canvasImage: J, controller: ue, detection: z, detectionRecord: Ie, onPhotoTaken: de }) {
      const we = {};
      we.width = J.width, we.height = J.height;
      const _e = we, ae = await Fu(J), Se = await W.getCameraProperties(), Ke = { ...Se, detectionRecord: Ie, hashedDetectedImagesWithTimestamp: ue.getImagesForDuplicateDetection() }, Me = {};
      Me.sessionToken = r, Me.web = Ke;
      const Oe = Me, he = await e(ae, Oe), Ge = {};
      Ge.detection = z, Ge.imageResolution = _e;
      const Ve = {};
      Ve.image = ae, Ve.data = Ge;
      const pe = Ve, Ze = {};
      Ze.imageData = pe, Ze.content = he, Ze.webMetadata = Ke, Ze.controller = ue, de(Ze);
    }
    async function Y({ cameraService: W, controller: J }) {
      const ue = Date.now();
      for (; W.isStreaming && !S; ) {
        if (sI(T, B)) {
          const { detection: Oe, image: he } = J.getBestImage() || {}, Ge = J.getDetectionRecord();
          if (he && Oe) {
            const Ve = Date.now(), pe = Bg(R), Ze = {};
            Ze.width = he.width, Ze.height = he.height, i == null || i.trackCaptureProcess({ detection: Oe, imageResolution: Ze, deviceName: await W.getDeviceName(), averageFps: pe, captureProcessDurationInMs: Ve - ue, facingMode: W.getCameraSettings().facingMode, instructionSet: await J.getInstructionSet() }), x(ct.WAITING);
            const Te = {};
            Te.cameraService = W, Te.controller = J, Te.canvasImage = he, Te.detection = Oe, Te.detectionRecord = Ge, Te.onPhotoTaken = n, await U(Te), J.restart();
          } else I(new ie("Something went wrong during capturing an image"));
          return;
        }
        const z = W.takePhoto(), Ie = {};
        Ie.width = z.image.width, Ie.height = z.image.height;
        const de = Ie;
        let we;
        try {
          we = await J.processImage(z);
        } catch (Oe) {
          Oe instanceof Error && I(ie.fromCameraError(Oe));
          return;
        }
        const _e = Date.now(), ae = _e - z.timestamp, Se = Ai((539 * -4 + -839 * -7 + -143 * 19) / ae);
        R.pushFixed(Se);
        const Ke = {};
        Ke.processedImage = we, Ke.detectionTime = ae, Ke.fps = Se, Ke.resolution = de, Ke.samVersion = J.samVersion;
        const Me = Ke;
        y.value = Me, we.isInCandidateSelection && (T === 1 * 7675 + -3662 + -4013 && (T = performance.now()), B++), f(de), await Pr(Math.max(Ns.max - ae, Ns.min));
      }
    }
    const F = {};
    return F.controller = t, F.cameraService = m, Y(F), () => {
      S = !0;
    };
  }, [i, e, g, m, t, x, I, n, f, y, r]);
  const Z = {};
  return Z.videoRef = a, Z.cameraResolution = u, Z.cameraService = m, Z.detectionDetails = y, Z;
}
const Aa = (i) => {
  const { height: o, width: t } = Gg(i), e = (i.width - t) / (-2 * 2395 + 239 * -16 + 12 * 718), n = (i.height - o) / (-9022 + 3 * 977 + -6093 * -1), r = {};
  return r.shiftX = e, r.shiftY = n, r.width = t, r.height = o, r;
}, Dg = (i, o) => {
  const { height: t, width: e } = Gg(i), n = Wo(i.width, i.height), r = e - n * o * (2001 + -3497 * -1 + -8 * 687), a = t - n * o * 2, s = (i.width - r) / (457 * 7 + 9216 + -12413), g = (i.height - a) / 2, x = {};
  return x.shiftX = s, x.shiftY = g, x.width = r, x.height = a, x;
}, ln = (i, o) => {
  const { shiftX: t, shiftY: e } = Aa(i), n = {};
  return n.x = o.x + t, n.y = o.y + e, n;
}, GI = (i, o) => ({ ...o, leftEye: { ...o.leftEye, center: ln(i, o.leftEye.center) }, rightEye: { ...o.rightEye, center: ln(i, o.rightEye.center) }, mouth: { ...o.mouth, center: ln(i, o.mouth.center) }, topLeft: ln(i, o.topLeft), bottomRight: ln(i, o.bottomRight), faceCenter: ln(i, o.faceCenter) }), Yg = (i, o) => {
  const { faceCenter: t, faceSize: e } = i, n = _u(e, o), r = {};
  r.x = t.x, r.y = t.y - n;
  const a = {};
  a.x = t.x + n, a.y = t.y;
  const s = {};
  s.x = t.x, s.y = t.y + n;
  const g = {};
  g.x = t.x - n, g.y = t.y;
  const x = {};
  return x.top = r, x.right = a, x.bottom = s, x.left = g, un(x);
}, ZI = (i, o) => {
  const { bottomRight: t, faceCenter: e, topLeft: n } = o, r = {
    topLeft: n,
    width: t.x - n.x,
    height: t.y - n.y
  };
  Sg(i, r, "rgba(255, 0, 0, 0.3)", !0), $n(i, e, "lime");
}, HI = (i, o, t) => {
  const e = Yg(o, t);
  Object.values(e).map((n) => $n(i, n, "orange"));
}, WI = ({ appTier: i, cameraResolution: o, detectionDetails: t, isImageMirror: e }) => {
  const {
    faceCameraOptions: { thresholds: n }
  } = vg(), r = bt(null);
  if (be(() => {
    if (!r.current)
      return;
    r.current.width = o.width, r.current.height = o.height, zu(r.current);
    const y = Aa(o), Z = Dg(o, n.outOfBoundsThreshold), T = Zg(o);
    t.value && (ZI(r.current, t.value.processedImage.detectedFace), HI(
      r.current,
      t.value.processedImage.detectedFace,
      o
    ), tr(r.current, y, "lime"), tr(r.current, Z, "yellow"), tr(r.current, T, "blue"), $n(r.current, t.value.processedImage.detectedFace.leftEye.center, "cyan"), $n(r.current, t.value.processedImage.detectedFace.rightEye.center, "cyan"), $n(r.current, t.value.processedImage.detectedFace.mouth.center, "cyan"));
  }, [o, n, t.value]), !t.value)
    return null;
  const {
    detectionTime: a,
    fps: s,
    processedImage: { detectedFace: g, instructionCode: x, invalidValidators: I },
    resolution: u,
    samVersion: m
  } = t.value, f = {
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
  return m && (f["SAM version"] = m), I.length > 0 && (f["Invalid validators"] = I.join(", ")), /* @__PURE__ */ H(
    zx,
    {
      ref: r,
      cameraResolution: o,
      detectionDetails: f,
      isImageMirror: e
    }
  );
};
function kI(i) {
  return /* @__PURE__ */ H("rect", { fill: "#000", ...i, rx: "50%" });
}
function KI(i) {
  const [o, t] = Ye(!1), e = () => t((a) => !a), n = "" + o;
  kn(() => {
    function a() {
      if (!i.current) return;
      const I = new MutationObserver(() => {
        e();
      }), u = {};
      return u.childList = !0, u.subtree = !0, u.attributes = !0, I.observe(i.current, u), I;
    }
    function s() {
      var m;
      if (!((m = i.current) != null && m["parentElement"])) return;
      const I = new MutationObserver((f) => {
        f.find((Z) => {
          for (const T of Z.removedNodes)
            if (T === i.current) return !0;
        }) && e(), f.forEach((Z) => {
          Z.addedNodes.forEach((T) => {
            var S;
            (S = T.parentElement) == null || S.removeChild(T);
          });
        });
      }), u = {};
      return u.childList = !0, I.observe(i.current.parentElement, u), I;
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
  const e = bt(null), { key: n } = KI(e);
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
function TI({ fullOverlay: i, resolution: o }) {
  const t = $u(o), e = `${t.height * 100}%`, n = `${t.width * 100}%`, r = `${t.shiftX * 100}%`, a = `${t.shiftY * 100}%`;
  return /* @__PURE__ */ H(
    VI,
    {
      cutOut: i || /* @__PURE__ */ H(kI, { height: e, width: n, x: r, y: a }),
      height: o.height,
      width: o.width
    }
  );
}
const EI = async () => WebAssembly.validate(new Uint8Array([-7 * 359 + 3992 + -1479, 99 * -2 + -504 + 799, 5 * 1105 + 6115 + -2305 * 5, 31 * -89 + 239 * -15 + -9 * -717, 1, -1 * 3523 + 27 * 241 + -2984, 823 * -6 + -5995 + 10933, -68 + -4 * -17, -2752 * 3 + 490 * 17 + -73 * 1, -56 * 71 + -1007 * -7 + -3068, -5773 + 1 * 5774, 4165 * 1 + 5141 * -1 + 1 * 1072, -3605 + 1 * 2521 + 1084, -5132 + 1 * 8501 + -3368, 7 * -749 + 6197 + 3 * -277, 1479 + -9637 * -1 + -11113, -65 * -67 + -1 * -1561 + -5914, 7570 * 1 + -14 * 451 + -1255, 1 * 4133 + 7364 + -11497, -11 * 404 + -1231 * -1 + 3223, -836 + 6 * 141, -4557 + 106 * 43, -56 * 144 + -1 * 2887 + 10959, 14 * -41 + -2556 + 3130, 65, -475 * 20 + -11 * 37 + 9907 * 1, 1 * 7122 + -8243 * -1 + -15112, 748 + -3 * -863 + -3322 * 1, 16781 + 1 * -16528, 69 * 29 + -9957 * 1 + -4027 * -2, -6996 + -851 * 9 + -14666 * -1]));
async function RI() {
  const i = {};
  i.name = Cg, i.length = 256;
  const o = await window.crypto.subtle.generateKey(i, !0, ["encrypt", "decrypt"]), t = Uint8Array.from(Array(-7339 + 236 * -41 + 17031).fill(-3719 + -1 * -87 + 3632)), e = window.crypto.getRandomValues(t), n = {};
  return n.key = o, n.iv = e, n;
}
async function PI(i) {
  const { iv: o, key: t } = await RI(), e = {};
  e.name = Cg, e.iv = o;
  const n = await window.crypto.subtle.encrypt(e, t, i), r = await window.crypto.subtle.exportKey("raw", t), a = {};
  return a.message = n, a.key = r, a.iv = o, a;
}
function LI(i) {
  const o = new ArrayBuffer(i.length), t = new Uint8Array(o);
  for (let e = 6562 + -6562 * 1, n = i.length; e < n; e++)
    t[e] = i.charCodeAt(e);
  return o;
}
function NI() {
  const i = "TUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFwWjhoQU0yNXdBSmZmb0s3Vmk5TQpQYXpWZjdobkJaNkdUVVI1K0tUaFNhK2pmYmQ3OEU5WVd0YXdKZ3kxUVd0T2NIdjBqcUlJZjFIYU9hSmkrOHNiCk5vd0pXUFdyUUNrUUpBVEk0a2NTdnhwa2VpVzVQY1hXK2czYitzdHFiNk82VHhwWVdMZGtVN3dyenhDQkFIVzMKRkNEeTNDaWsrQ0h4ZDErNkU3bHlPMStGQWhzVEkzUWRXWVB4UEF6RGZDaGtXVDlVL0ttekpBK1BZYndkTGRHbQpVQmNXZFcrQ01XRkNTbGtaanNMa2Z5OVRZdTdVQ3V6TlpQenVpTTR0YlphZlhNQzdyN1dXaytsbU1DZGpEMS80CmtkZGRoZVdITytIcTlLNXg0M01zQ21OQUthVjk4a3BSOWlHQ2FUcGZTU2RtS3FMUVZDZnRqK1JuaWZpVVRZSzAKd0FzR0hrTXMzNEZjbS9GVXpiVnFxTmQ2QzVQZUlNd0VEZXFPd1k4K1ZBZWtBWTl0RklUazFUWS9GeXh6YUJZUAozWDBXMXZkYzRqazFOL3liMXlleXZqZUdaS29KUlV4ZGgxak9rYkI3bE14SVhOc01ObnFWbUVSOE5DSlkxajR1ClNtRTE4VWdrNi9NNUtEeFhuV1prdzMvUFE4U2M1QnBSMnZwZmE3NVYwaVJJcFg1NHVLTU10MUFkS0pXblV3TXMKb3F5bmExZ3JlOWxGTDZiMmo2cmtWZzQvYTFOTWlnQUc5S1B4MjliZHJkbVdRakpBYlIwU2txdDBlY3ZJeURuWgpLRWpkVjh2NjEzS3pMWkJKd2h0MzVWZjJTL2d2ZG9rZk9SWENkOWEzVTNaa0pnMWM4Mk4xZ2lPWVg0ZjREOFVtClk3TlhFWkVGQ2NzWlk4UGF6Tm5uTE44Q0F3RUFBUT09Cg==", o = window.atob(i), t = window.atob(o), e = LI(t), n = {};
  return n.name = hg, n.hash = Cu, window.crypto.subtle.importKey("spki", e, n, !0, ["encrypt"]);
}
async function DI(i) {
  const o = await NI(), t = {};
  return t.name = hg, window.crypto.subtle.encrypt(t, o, i);
}
async function YI(i) {
  const { iv: o, key: t, message: e } = await PI(i), n = await DI(t), r = {};
  return r.key = n, r.iv = o, r.message = e, r;
}
async function FI(i) {
  const o = await window.crypto.subtle.digest("SHA-1", i);
  return Array.from(new Uint8Array(o)).map((t) => t.toString(-59 * -101 + 2387 * -1 + -3556).padStart(2, "0")).join("");
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
    j(this, "imagesWithTimestampForDuplicateDetection", new ha(Iu));
  }
  async initDetector(o) {
    await this.detector.initSamModule(location.href, o);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  async getInstructionSet() {
    return await EI() ? Rs.SIMD : Rs.NO_SIMD;
  }
  async init({ thresholds: o, wasmDirectoryPath: t }) {
    this.setThresholds(o), await this.initDetector(t);
  }
  setSamVersion(o) {
    if (!o || !this.areVersionsCompatible(o))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new ie("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = o;
  }
  areVersionsCompatible(o) {
    return o === mu;
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
    if (!this.thresholds) throw new ie("Thresholds for " + this.className + " are not provided");
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
    const e = o.length / pu, n = e / (-15 * -93 + -9091 + 7698), r = o.length / (7 * 613 + 8065 + -71 * 174), a = await FI(o.slice(r - n, r + n)), s = {};
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
    var s = "./this.program", g = !1, x = !(-3664 + 733 * 5);
    g = typeof window == "object", x = typeof importScripts == "function";
    var I = "", u;
    (g || x) && (x ? I = self.location.href : document.currentScript && (I = document.currentScript.src), i && (I = i), 19 * -176 + -2 * -326 + 2 * 1346 !== I.indexOf("blob:") ? I = I.substr(-2507 + 159 * 41 + -4012, I.lastIndexOf("/") + (-1 * 1019 + 6525 + -15 * 367)) : I = "", x && (u = function(c) {
      var l = new XMLHttpRequest();
      return l.open("GET", c, !(-1930 * -1 + 5101 + -7030)), l.responseType = "arraybuffer", l.send(null), new Uint8Array(l.response);
    }));
    var m = t.printErr || console.warn.bind(console);
    for (a in r) r.hasOwnProperty(a) && (t[a] = r[a]);
    r = null, t.thisProgram && (s = t.thisProgram);
    var f;
    t.wasmBinary && (f = t.wasmBinary), t.noExitRuntime && t.noExitRuntime, typeof WebAssembly != "object" && je("no native wasm support detected");
    var y, Z = !(3479 * -1 + 1575 + -1905 * -1);
    function T(c) {
      c || je("Assertion failed: undefined");
    }
    var S = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void (-2743 * -1 + 2 * -271 + 31 * -71);
    function B(c, l, d) {
      var h = de;
      if (2446 * -4 + 8508 + 1276 < d) {
        d = l + d - (8 * -1121 + 3242 * 2 + 2485);
        for (var A = -7937 + 1 * 7937; A < c.length; ++A) {
          var b = c.charCodeAt(A);
          if (-209 * -321 + -547 * 91 + -32 * -1187 <= b && -45905 + 1 * 43669 + 59579 >= b) {
            var G = c.charCodeAt(++A);
            b = 65536 + ((b & 1023) << 1 * 8851 + -2965 + -113 * 52) | G & 5681 + -2 * 2329;
          }
          if (-4440 * -1 + -5581 + -2 * -634 >= b) {
            if (l >= d) break;
            h[l++] = b;
          } else {
            if (59 * -123 + 5703 + 277 * 13 >= b) {
              if (l + (5 * 245 + 9598 + -7 * 1546) >= d) break;
              h[l++] = 5063 * 1 + -2906 + -1965 | b >> 576 * 8 + 1 * 4975 + -9577;
            } else {
              if (72301 + -7239 * -7 + -57439 >= b) {
                if (l + 2 >= d) break;
                h[l++] = 1788 + -1492 * -5 + -9024 | b >> 10043 + 1 * -10031;
              } else {
                if (l + (9437 * -1 + -611 + 23 * 437) >= d) break;
                h[l++] = -499 + -493 * -2 + -247 | b >> 3089 * 3 + 4812 + -14061, h[l++] = -9173 * 1 + -9 * 557 + 14314 | b >> -1141 * 1 + -3214 + -397 * -11 & -4 * -916 + -1 * 2655 + 1 * -946;
              }
              h[l++] = -9627 + -5 * -1951 | b >> 7922 + 372 * 6 + -10148 & 3929 * -1 + -6898 + 10890;
            }
            h[l++] = -701 * 9 + -2722 + 9159 | b & 63;
          }
        }
        h[l] = 8 * 934 + 3288 + -2 * 5380;
      }
    }
    var R = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void (-68 * 47 + 6776 + -3580);
    function U(c, l) {
      for (var d = c >> 1, h = d + l / 2; !(d >= h) && _e[d]; ) ++d;
      if (d <<= 8649 * -1 + 13 * -659 + 3 * 5739, -1305 * -7 + 2115 * -4 + -643 < d - c && R) return R.decode(de.subarray(c, d));
      for (d = -753 * -1 + -9504 + -3 * -2917, h = ""; ; ) {
        var A = we[c + 2 * d >> 1];
        if (A == 0 || d == l / (329 * -21 + -48 * -205 + -29 * 101)) return h;
        ++d, h += String.fromCharCode(A);
      }
    }
    function Y(c, l, d) {
      if (void (69 * -17 + -1 * -3697 + -1 * 2524) === d && (d = -112869877 * 19 + 1211125316 + -1540442997 * -2), -15860 + 77 * 206 > d) return 65 * 73 + 2557 * -2 + 369;
      d -= -1185 + 9175 * -1 + 33 * 314;
      var h = l;
      d = d < (2250 * -1 + 1 * -9909 + 12161) * c.length ? d / (-1 * -2667 + 3097 + -5762) : c.length;
      for (var A = 1468 * 2 + 1 * -6518 + 3582; A < d; ++A) we[l >> 1] = c.charCodeAt(A), l += 601 + 599 * -1;
      return we[l >> -2429 + 9034 * 1 + -6604] = 1781 + 137 * -13, l - h;
    }
    function F(c) {
      return (-10790 + 142 * 76) * c.length;
    }
    function W(c, l) {
      for (var d = 2507 + 109 * -23, h = ""; !(d >= l / (3 * 2589 + -2 * -1008 + 11 * -889)); ) {
        var A = ae[c + 4 * d >> 2];
        if (-681 * -5 + -6923 * -1 + 2582 * -4 == A) break;
        ++d, 205 * -565 + 70042 + 8563 * 13 <= A ? (A -= -90242 * -1 + 51193 + -75899 * 1, h += String.fromCharCode(-103 * 701 + -81368 + 208867 | A >> -1361 + -457 * -3, -5 * -11677 + 84294 + -86359 * 1 | A & -22 * -277 + -1 * 4542 + -529)) : h += String.fromCharCode(A);
      }
      return h;
    }
    function J(c, l, d) {
      if (d === void 0 && (d = -1518577981 + -320963599 * -5 + 2061243633), -5260 + -376 * -14 > d) return 4 * 1465 + -8642 + -214 * -13;
      var h = l;
      d = h + d - (454 * -9 + -3485 + 7575);
      for (var A = -1418 * 1 + 41 * -134 + 256 * 27; A < c.length; ++A) {
        var b = c.charCodeAt(A);
        if (-62078 * -1 + -1 * 40931 + 34149 <= b && 13556 + 28 * 2217 + -18289 >= b) {
          var G = c.charCodeAt(++A);
          b = 112892 + 160 * 380 + -108156 + ((b & -45 + -1 * -6922 + 2927 * -2) << -4480 + 4022 * -1 + -4256 * -2) | G & -2 * -457 + 8385 + -8276;
        }
        if (ae[l >> 6276 + -451 * 4 + -10 * 447] = b, l += -1417 * 4 + 5820 + -148, l + (5978 + -19 * 471 + -425 * -7) > d) break;
      }
      return ae[l >> 1 * -8530 + 71 * 17 + 7325] = 5826 + -2 * -2055 + -9936, l - h;
    }
    function ue(c) {
      for (var l = 9 * 346 + 8 * 586 + -7802, d = 120 * 36 + 5899 + -10219; d < c.length; ++d) {
        var h = c.charCodeAt(d);
        52954 + 1171 * 2 <= h && 98422 + 1 * -41079 >= h && ++d, l += -8227 + -7213 * -1 + -1018 * -1;
      }
      return l;
    }
    var z, Ie, de, we, _e, ae, Se, Ke, Me;
    function Oe(c) {
      z = c, t.HEAP8 = Ie = new Int8Array(c), t.HEAP16 = we = new Int16Array(c), t.HEAP32 = ae = new Int32Array(c), t.HEAPU8 = de = new Uint8Array(c), t.HEAPU16 = _e = new Uint16Array(c), t.HEAPU32 = Se = new Uint32Array(c), t.HEAPF32 = Ke = new Float32Array(c), t.HEAPF64 = Me = new Float64Array(c);
    }
    var he = t.INITIAL_MEMORY || -79 * 96769 + 1 * 19010989 + 5410978, Ge = {};
    Ge.initial = he / (122060 * -1 + -7 * -1805 + 23 * 7607), Ge.maximum = 32768, t.wasmMemory ? y = t.wasmMemory : y = new WebAssembly.Memory(Ge), y && (z = y.buffer), he = z.byteLength, Oe(z);
    var Ve = [], pe = [], Ze = [], Te = [];
    function en() {
      var c = t.preRun.shift();
      Ve.unshift(c);
    }
    var Le = 1 * -9650 + -6421 + 16071, rt = null;
    t.preloadedImages = {}, t.preloadedAudios = {};
    function je(c) {
      throw t.onAbort && t.onAbort(c), m(c), Z = !(-3461 + -2 * -2602 + -1743), c = new WebAssembly.RuntimeError("abort(" + c + "). Build with -s ASSERTIONS=1 for more info."), n(c), c;
    }
    function kt(c) {
      var l = qe;
      return String.prototype.startsWith ? l.startsWith(c) : -3 * 53 + -84 + 243 === l.indexOf(c);
    }
    function at() {
      return kt("data:application/octet-stream;base64,");
    }
    var qe = "sam.wasm";
    if (!at()) {
      var Kt = qe;
      qe = t.locateFile ? t.locateFile(Kt, I) : I + Kt;
    }
    function et() {
      try {
        if (f) return new Uint8Array(f);
        if (u) return u(qe);
        throw "both async and sync fetching of the wasm failed";
      } catch (c) {
        je(c);
      }
    }
    function hc() {
      var c = {};
      return c.credentials = "same-origin", f || !g && !x || typeof fetch != "function" || kt("file://") ? Promise.resolve().then(et) : fetch(qe, c).then(function(l) {
        if (!l.ok) throw "failed to load wasm binary file at '" + qe + "'";
        return l.arrayBuffer();
      }).catch(function() {
        return et();
      });
    }
    function yi(c) {
      for (; -16 * 114 + 1 * 3813 + -1989 < c.length; ) {
        var l = c.shift();
        if (typeof l == "function") l(t);
        else {
          var d = l.Ba;
          typeof d == "number" ? l.ta === void 0 ? Oo("v", d)() : Oo("vi", d)(l.ta) : d(void (29 * 289 + 777 + -9158) === l.ta ? null : l.ta);
        }
      }
    }
    function Oo(c, l) {
      var d = [];
      return function() {
        d.length = arguments.length;
        for (var h = 7 * -1306 + -998 + 10140; h < arguments.length; h++) d[h] = arguments[h];
        return d && d.length ? t["dynCall_" + c].apply(null, [l].concat(d)) : t["dynCall_" + c].call(null, l);
      };
    }
    function pc(c) {
      this.da = c - (-1893 * -4 + 15 * -461 + -641), this.Oa = function(l) {
        ae[this.da + (4 * 1934 + -8110 + -2 * -191) >> -2383 * -1 + -16 * 421 + 4355] = l;
      }, this.La = function(l) {
        ae[this.da + (-7 * 226 + -501 * 17 + 10099) >> -5381 + 4348 * -2 + -14079 * -1] = l;
      }, this.Ma = function() {
        ae[this.da + (-2735 * 1 + -6850 + 223 * 43) >> 13 * -407 + -417 * -22 + 3881 * -1] = 7057 + 1 * -7057;
      }, this.Ka = function() {
        Ie[this.da + (1 * 7202 + -143 * -23 + -10479) >> 11836 + 22 * -538] = 0;
      }, this.Na = function() {
        Ie[this.da + (-1477 + 38 * 139 + -3792) >> 14286 + -1 * 14286] = 4540 + -326 * 19 + 1654;
      }, this.Fa = function(l, d) {
        this.Oa(l), this.La(d), this.Ma(), this.Ka(), this.Na();
      };
    }
    function vi() {
      return -1 * 7993 + -1876 + 9869 < vi.xa;
    }
    function Vo(c) {
      switch (c) {
        case 1 * -307 + -3533 * -1 + -75 * 43:
          return -4 * 2391 + -7375 + -1303 * -13;
        case -7487 * -1 + 2 * 4897 + 37 * -467:
          return -4933 + 1543 * 3 + 1 * 305;
        case 3 * 1463 + 4780 + 611 * -15:
          return 4753 + -163 * -38 + -55 * 199;
        case -107 * 13 + -289 * 1 + 4 * 422:
          return -2380 + 152 * -6 + 3295;
        default:
          throw new TypeError("Unknown type size: " + c);
      }
    }
    var Ba = void (-25 * 118 + -7 * -72 + 2446);
    function Ee(c) {
      for (var l = ""; de[c]; ) l += Ba[de[c++]];
      return l;
    }
    var tn = {}, Ot = {}, wi = {};
    function To(c) {
      if (void (-2 * -1091 + -7466 + 5284 * 1) === c) return "_unknown";
      c = c.replace(/[^a-zA-Z0-9_]/g, "$");
      var l = c.charCodeAt(-3239 + 41 * 79);
      return 48 * -197 + -7921 + 17425 <= l && -2 * -1049 + 4883 + -6924 >= l ? "_" + c : c;
    }
    function Eo(c, l) {
      return c = To(c), new Function("body", "return function " + c + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(l);
    }
    function Ro(c) {
      var l = Error, d = Eo(c, function(h) {
        this.name = c, this.message = h, h = Error(h).stack, void (679 * -1 + 1 * 7987 + 126 * -58) !== h && (this.stack = this.toString() + `
` + h.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return d.prototype = Object.create(l.prototype), d.prototype.constructor = d, d.prototype.toString = function() {
        return void (9211 * -1 + -1756 * 3 + 14479 * 1) === this.message ? this.name : this.name + ": " + this.message;
      }, d;
    }
    var nn = void 0;
    function M(c) {
      throw new nn(c);
    }
    var Ga = void (-6114 + 3 * 2038);
    function Si(c) {
      throw new Ga(c);
    }
    function on(c, l, d) {
      function h(w) {
        w = d(w), w.length !== c.length && Si("Mismatched type converter count");
        for (var k = -1 * 7482 + -707 * 3 + -97 * -99; k < c.length; ++k) ut(c[k], w[k]);
      }
      c.forEach(function(w) {
        wi[w] = l;
      });
      var A = Array(l.length), b = [], G = -79 * -43 + 1 * -5079 + -58 * -29;
      l.forEach(function(w, k) {
        Ot.hasOwnProperty(w) ? A[k] = Ot[w] : (b.push(w), tn.hasOwnProperty(w) || (tn[w] = []), tn[w].push(function() {
          A[k] = Ot[w], ++G, G === b.length && h(A);
        }));
      }), 3917 + 4862 * -1 + 945 === b.length && h(A);
    }
    function ut(c, l, d) {
      if (d = d || {}, !("argPackAdvance" in l)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var h = l.name;
      if (c || M('type "' + h + '" must have a positive integer typeid pointer'), Ot.hasOwnProperty(c)) {
        if (d.Ea) return;
        M("Cannot register type '" + h + "' twice");
      }
      Ot[c] = l, delete wi[c], tn.hasOwnProperty(c) && (l = tn[c], delete tn[c], l.forEach(function(A) {
        A();
      }));
    }
    function fc(c) {
      var l = {};
      return l.count = c.count, l.oa = c.oa, l.pa = c.pa, l.da = c.da, l.fa = c.fa, l.ga = c.ga, l.ha = c.ha, l;
    }
    function Po(c) {
      M(c.A.fa.ea.name + " instance already deleted");
    }
    var Lo = !(-1 * -6714 + 5709 + 6211 * -2);
    function Za() {
    }
    function Ha(c) {
      --c.count.value, 2 * -3823 + -2092 + 9738 === c.count.value && (c.ga ? c.ha.na(c.ga) : c.fa.ea.na(c.da));
    }
    function Tn(c) {
      return typeof FinalizationGroup > "u" ? (Tn = function(l) {
        return l;
      }, c) : (Lo = new FinalizationGroup(function(l) {
        for (var d = l.next(); !d.done; d = l.next()) d = d.value, d.da ? Ha(d) : console.warn("object already deleted: " + d.da);
      }), Tn = function(l) {
        return Lo.register(l, l.A, l.A), l;
      }, Za = function(l) {
        Lo.unregister(l.A);
      }, Tn(c));
    }
    var En = void 0, Rn = [];
    function No() {
      for (; Rn.length; ) {
        var c = Rn.pop();
        c.A.oa = !(1 * -9415 + -1961 + 11377 * 1), c.delete();
      }
    }
    function yt() {
    }
    var Wa = {};
    function mc(c, l) {
      var d = t;
      if (void (-12884 + -4 * -3221) === d[c].ja) {
        var h = d[c];
        d[c] = function() {
          return d[c].ja.hasOwnProperty(arguments.length) || M("Function '" + l + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + d[c].ja + ")!"), d[c].ja[arguments.length].apply(this, arguments);
        }, d[c].ja = [], d[c].ja[h.ya] = h;
      }
    }
    function ka(c, l, d) {
      t.hasOwnProperty(c) ? ((void (-8610 + 42 * 205) === d || t[c].ja !== void 0 && void (-241 * 36 + -5675 + 14351) !== t[c].ja[d]) && M("Cannot register public name '" + c + "' twice"), mc(c, c), t.hasOwnProperty(d) && M("Cannot register multiple overloads of a function with the same number of arguments (" + d + ")!"), t[c].ja[d] = l) : (t[c] = l, void (6647 * -1 + -419 + -7066 * -1) !== d && (t[c].Ra = d));
    }
    function Ac(c, l, d, h, A, b, G, w) {
      this.name = c, this.constructor = l, this.ma = d, this.na = h, this.ia = A, this.Ca = b, this.qa = G, this.Aa = w;
    }
    function Bi(c, l, d) {
      for (; l !== d; ) l.qa || M("Expected null or instance of " + d.name + ", got an instance of " + l.name), c = l.qa(c), l = l.ia;
      return c;
    }
    function bc(c, l) {
      return l === null ? (this.ua && M("null is not a valid " + this.name), -6219 + -1 * -6219) : (l.A || M('Cannot pass "' + an(l) + '" as a ' + this.name), l.A.da || M("Cannot pass deleted object as a pointer of type " + this.name), Bi(l.A.da, l.A.fa.ea, this.ea));
    }
    function yc(c, l) {
      if (l === null) {
        if (this.ua && M("null is not a valid " + this.name), this.sa) {
          var d = this.Ha();
          return c !== null && c.push(this.na, d), d;
        }
        return 4595 * 1 + -1 * -782 + 19 * -283;
      }
      if (l.A || M('Cannot pass "' + an(l) + '" as a ' + this.name), l.A.da || M("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && l.A.fa.ra && M("Cannot convert argument of type " + (l.A.ha ? l.A.ha.name : l.A.fa.name) + " to parameter type " + this.name), d = Bi(l.A.da, l.A.fa.ea, this.ea), this.sa) switch (void (-3 * 227 + -88 * 2 + 857 * 1) === l.A.ga && M("Passing raw pointer to smart pointer is illegal"), this.Pa) {
        case -7469 + -3740 * -1 + 3729:
          l.A.ha === this ? d = l.A.ga : M("Cannot convert argument of type " + (l.A.ha ? l.A.ha.name : l.A.fa.name) + " to parameter type " + this.name);
          break;
        case -392 * -21 + 1661 + -9892:
          d = l.A.ga;
          break;
        case 4406 + 165 * 41 + -657 * 17:
          if (l.A.ha === this) d = l.A.ga;
          else {
            var h = l.clone();
            d = this.Ia(d, rn(function() {
              h.delete();
            })), c !== null && c.push(this.na, d);
          }
          break;
        default:
          M("Unsupporting sharing policy");
      }
      return d;
    }
    function vc(c, l) {
      return l === null ? (this.ua && M("null is not a valid " + this.name), 0) : (l.A || M('Cannot pass "' + an(l) + '" as a ' + this.name), l.A.da || M("Cannot pass deleted object as a pointer of type " + this.name), l.A.fa.ra && M("Cannot convert argument of type " + l.A.fa.name + " to parameter type " + this.name), Bi(l.A.da, l.A.fa.ea, this.ea));
    }
    function Gi(c) {
      return this.fromWireType(Se[c >> 2117 + -141 * 15]);
    }
    function Ka(c, l, d) {
      return l === d ? c : void (8525 + -335 * 25 + 5 * -30) === d.ia ? null : (c = Ka(c, l, d.ia), c === null ? null : d.Aa(c));
    }
    var Pn = {};
    function wc(c, l) {
      for (void (7499 + -1253 * -1 + -8752) === l && M("ptr should not be undefined"); c.ia; ) l = c.qa(l), c = c.ia;
      return Pn[l];
    }
    function Zi(c, l) {
      l.fa && l.da || Si("makeClassHandle requires ptr and ptrType"), !!l.ha != !!l.ga && Si("Both smartPtrType and smartPtr must be specified");
      var d = {};
      d.value = 1, l.count = d;
      var h = {};
      h.value = l;
      var A = {};
      return A.A = h, Tn(Object.create(c, A));
    }
    function It(c, l, d, h) {
      this.name = c, this.ea = l, this.ua = d, this.ra = h, this.sa = !(-1 * 2587 + 9374 + 13 * -522), this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void 0, void (2 * -1636 + 9296 + 3 * -2008) !== l.ia ? this.toWireType = yc : (this.toWireType = h ? bc : vc, this.ka = null);
    }
    function Oa(c, l, d) {
      t.hasOwnProperty(c) || Si("Replacing nonexistant public symbol"), void (-8 * -362 + -61 * 39 + -517) !== t[c].ja && d !== void 0 ? t[c].ja[d] = l : (t[c] = l, t[c].ya = d);
    }
    function vt(c, l) {
      c = Ee(c);
      var d = Oo(c, l);
      return typeof d != "function" && M("unknown function pointer with signature " + c + ": " + l), d;
    }
    var Va = void (-3750 + 25 * 150);
    function Ta(c) {
      c = za(c);
      var l = Ee(c);
      return dt(c), l;
    }
    function Ln(c, l) {
      function d(b) {
        A[b] || Ot[b] || (wi[b] ? wi[b].forEach(d) : (h.push(b), A[b] = !(227 * -13 + 3209 * 2 + -3467)));
      }
      var h = [], A = {};
      throw l.forEach(d), new Va(c + ": " + h.map(Ta).join([", "]));
    }
    function Ea(c, l) {
      for (var d = [], h = 0; h < c; h++) d.push(ae[(l >> 2) + h]);
      return d;
    }
    function Hi(c) {
      for (; c.length; ) {
        var l = c.pop();
        c.pop()(l);
      }
    }
    function Ra(c, l, d) {
      return c instanceof Object || M(d + ' with invalid "this": ' + c), c instanceof l.ea.constructor || M(d + ' incompatible with "this" of type ' + c.constructor.name), c.A.da || M("cannot call emscripten binding method " + d + " on deleted object"), Bi(c.A.da, c.A.fa.ea, l.ea);
    }
    var Pa = {};
    Pa.value = void (-8914 * -1 + -7878 + -1036);
    var La = {};
    La.value = null;
    var Na = {};
    Na.value = !(-4277 + -91 * -47);
    var Da = {};
    Da.value = !(-1 * -3733 + 1 * -4180 + -14 * -32);
    var Do = [], Je = [{}, Pa, La, Na, Da];
    function Yo(c) {
      1 * 6451 + 9 * -411 + -2748 < c && 1 * -4129 + 3727 * 2 + 665 * -5 === --Je[c].Ja && (Je[c] = void (17 * -233 + 82 * -49 + 7979 * 1), Do.push(c));
    }
    function rn(c) {
      switch (c) {
        case void (-6 * 1362 + 6092 + 2080):
          return -1829 * -4 + -4557 + -2758;
        case null:
          return -6127 + -11 * 537 + -3 * -4012;
        case !(-7170 + -4348 * 2 + 7933 * 2):
          return -4860 + 1762 * -2 + 8387;
        case !(-3 * -733 + -9573 + 7375 * 1):
          return -4493 * -1 + -8426 + 3937;
        default:
          var l = Do.length ? Do.pop() : Je.length, d = {};
          return d.Ja = 1, d.value = c, Je[l] = d, l;
      }
    }
    function an(c) {
      if (c === null) return "null";
      var l = typeof c;
      return l === "object" || l === "array" || l === "function" ? c.toString() : "" + c;
    }
    function Sc(c, l) {
      switch (l) {
        case 2:
          return function(d) {
            return this.fromWireType(Ke[d >> 7460 + -3 * -402 + 456 * -19]);
          };
        case -21 * -329 + 6095 * 1 + -1 * 13001:
          return function(d) {
            return this.fromWireType(Me[d >> -1162 + -233 * -5]);
          };
        default:
          throw new TypeError("Unknown float type: " + c);
      }
    }
    function Bc(c) {
      var l = Function;
      if (!(l instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof l + " which is not a function");
      var d = Eo(l.name || "unknownFunctionName", function() {
      });
      return d.prototype = l.prototype, d = new d(), c = l.apply(d, c), c instanceof Object ? c : d;
    }
    function Gc(c, l, d) {
      switch (l) {
        case -7958 + 4 * 1307 + 2730:
          return d ? function(h) {
            return Ie[h];
          } : function(h) {
            return de[h];
          };
        case 1:
          return d ? function(h) {
            return we[h >> 4553 + 160 * 12 + 8 * -809];
          } : function(h) {
            return _e[h >> -3877 * -1 + -1135 * -8 + 2 * -6478];
          };
        case -1488 + -1213 * -1 + -277 * -1:
          return d ? function(h) {
            return ae[h >> -5 * 325 + -1 * -9629 + 8002 * -1];
          } : function(h) {
            return Se[h >> -3903 + 1303 * -7 + 13026];
          };
        default:
          throw new TypeError("Unknown integer type: " + c);
      }
    }
    function Fo(c) {
      return c || M("Cannot use deleted val. handle = " + c), Je[c].value;
    }
    function Ya(c, l) {
      var d = Ot[c];
      return d === void 0 && M(l + " has unknown type " + Ta(c)), d;
    }
    var Zc = {}, Fa = {};
    function Xa() {
      if (!Xo) {
        var c = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: s || "./this.program" }, l;
        for (l in Fa) c[l] = Fa[l];
        var d = [];
        for (l in c) d.push(l + "=" + c[l]);
        Xo = d;
      }
      return Xo;
    }
    var Xo, Ma = [];
    function ja(c) {
      var l = {}, d;
      for (d in c) (function(h) {
        var A = c[h];
        l[h] = typeof A == "function" ? function() {
          Ma.push(h);
          try {
            return A.apply(null, arguments);
          } finally {
            if (Z) return;
            var b = Ma.pop();
            T(b === h);
          }
        } : A;
      })(d);
      return l;
    }
    for (var Ja = Array(256), Wi = -9781 + 1 * 9781; 256 > Wi; ++Wi) Ja[Wi] = String.fromCharCode(Wi);
    Ba = Ja, nn = t.BindingError = Ro("BindingError"), Ga = t.InternalError = Ro("InternalError"), yt.prototype.isAliasOf = function(c) {
      if (!(this instanceof yt && c instanceof yt)) return !(43 + 401 * 1 + -443);
      var l = this.A.fa.ea, d = this.A.da, h = c.A.fa.ea;
      for (c = c.A.da; l.ia; ) d = l.qa(d), l = l.ia;
      for (; h.ia; ) c = h.qa(c), h = h.ia;
      return l === h && d === c;
    }, yt.prototype.clone = function() {
      if (this.A.da || Po(this), this.A.pa) return this.A.count.value += 41 * -172 + 9035 + -1982, this;
      var c = Tn(Object.create(Object.getPrototypeOf(this), { A: { value: fc(this.A) } }));
      return c.A.count.value += -2 * -1594 + -122 * -19 + 5505 * -1, c.A.oa = !(-7750 + 337 * 23), c;
    }, yt.prototype.delete = function() {
      this.A.da || Po(this), this.A.oa && !this.A.pa && M("Object already scheduled for deletion"), Za(this), Ha(this.A), this.A.pa || (this.A.ga = void (1051 + -10 * 263 + 1579), this.A.da = void (5 * 1097 + -8297 + 2812));
    }, yt.prototype.isDeleted = function() {
      return !this.A.da;
    }, yt.prototype.deleteLater = function() {
      return this.A.da || Po(this), this.A.oa && !this.A.pa && M("Object already scheduled for deletion"), Rn.push(this), 4179 * -2 + 35 * -193 + 15114 === Rn.length && En && En(No), this.A.oa = !(1473 * 4 + -7669 * 1 + 1777 * 1), this;
    }, It.prototype.Da = function(c) {
      return this.wa && (c = this.wa(c)), c;
    }, It.prototype.va = function(c) {
      this.na && this.na(c);
    }, It.prototype.argPackAdvance = 6431 + -18 * -452 + -14559, It.prototype.readValueFromPointer = Gi, It.prototype.deleteObject = function(c) {
      c !== null && c.delete();
    }, It.prototype.fromWireType = function(c) {
      function l() {
        return this.sa ? Zi(this.ea.ma, { fa: this.Ga, da: d, ha: this, ga: c }) : Zi(this.ea.ma, { fa: this, da: c });
      }
      var d = this.Da(c);
      if (!d) return this.va(c), null;
      var h = wc(this.ea, d);
      if (void (1 * -1811 + -238 + 2049) !== h)
        return 7 * 59 + -2163 + 1750 === h.A.count.value ? (h.A.da = d, h.A.ga = c, h.clone()) : (h = h.clone(), this.va(c), h);
      if (h = this.ea.Ca(d), h = Wa[h], !h) return l.call(this);
      h = this.ra ? h.za : h.pointerType;
      var A = Ka(d, this.ea, h.ea);
      return A === null ? l.call(this) : this.sa ? Zi(h.ea.ma, { fa: h, da: A, ha: this, ga: c }) : Zi(h.ea.ma, { fa: h, da: A });
    }, t.getInheritedInstanceCount = function() {
      return Object.keys(Pn).length;
    }, t.getLiveInheritedInstances = function() {
      var c = [], l;
      for (l in Pn) Pn.hasOwnProperty(l) && c.push(Pn[l]);
      return c;
    }, t.flushPendingDeletes = No, t.setDelayFunction = function(c) {
      En = c, Rn.length && En && En(No);
    }, Va = t.UnboundTypeError = Ro("UnboundTypeError"), t.count_emval_handles = function() {
      for (var c = 31 * 43 + -1579 + 246, l = 5367 + 766 * -7; l < Je.length; ++l) void (-2098 * -3 + -227 * -41 + -15601) !== Je[l] && ++c;
      return c;
    }, t.get_first_emval = function() {
      for (var c = -2832 + 2 * 3179 + -3521; c < Je.length; ++c) if (void (1 * 9488 + 3774 + -2 * 6631) !== Je[c]) return Je[c];
      return null;
    }, pe.push({ Ba: function() {
      Ua();
    } });
    var Hc = { z: function(c) {
      return ki(c + (-636 + 199 * -47 + 10005)) + (-24 * -163 + -3 * -1765 + -1 * 9191);
    }, u: function(c, l, d) {
      throw new pc(c).Fa(l, d), "uncaught_exception" in vi ? vi.xa++ : vi.xa = 9330 + 42 * -2 + -9245, c;
    }, w: function(c, l, d, h, A) {
      var b = Vo(d);
      l = Ee(l), ut(c, { name: l, fromWireType: function(G) {
        return !!G;
      }, toWireType: function(G, w) {
        return w ? h : A;
      }, argPackAdvance: 8, readValueFromPointer: function(G) {
        if (13257 + 2 * -6628 === d) var w = Ie;
        else if (12448 + -254 * 49 === d) w = we;
        else if (-1058 * -7 + -1 * -6986 + -3 * 4796 === d) w = ae;
        else throw new TypeError("Unknown boolean type size: " + l);
        return this.fromWireType(w[G >> b]);
      }, ka: null });
    }, h: function(c, l, d, h, A, b, G, w, k, K, O, V, q) {
      O = Ee(O), b = vt(A, b), w && (w = vt(G, w)), K && (K = vt(k, K)), q = vt(V, q);
      var fe = To(O);
      ka(fe, function() {
        Ln("Cannot construct " + O + " due to unbound types", [h]);
      }), on([c, l, d], h ? [h] : [], function(E) {
        if (E = E[1889 + 254 * -2 + -1381], h) var st = E.ea, He = st.ma;
        else He = yt.prototype;
        E = Eo(fe, function() {
          if (Object.getPrototypeOf(this) !== sn) throw new nn("Use 'new' to construct " + O);
          if (void (3234 + -6272 * 1 + 3038) === gn.la) throw new nn(O + " has no accessible constructor");
          var $a = gn.la[arguments.length];
          if (void (14705 + 865 * -17) === $a) throw new nn("Tried to invoke ctor of " + O + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(gn.la).toString() + ") parameters instead!");
          return $a.apply(this, arguments);
        });
        var Ne = {};
        Ne.value = E;
        var Vt = {};
        Vt.constructor = Ne;
        var sn = Object.create(He, Vt);
        E.prototype = sn;
        var gn = new Ac(O, E, sn, q, st, b, w, K);
        st = new It(O, gn, !0, !(4956 + -991 * 5)), He = new It(O + "*", gn, !(8732 + -8731 * 1), !(1 * -1843 + -1879 * -1 + -35));
        var Qa = new It(O + " const*", gn, !1, !(-7850 + -6 * -42 + 131 * 58)), jo = {};
        return jo.pointerType = He, jo.za = Qa, Wa[c] = jo, Oa(fe, E), [st, He, Qa];
      });
    }, g: function(c, l, d, h, A, b) {
      T(4733 + -23 * 119 + -1996 < l);
      var G = Ea(l, d);
      A = vt(h, A);
      var w = [b], k = [];
      on([], [c], function(K) {
        K = K[-6304 + 3049 * 1 + 3255];
        var O = "constructor " + K.name;
        if (void (-2480 + -2315 * 3 + 9425) === K.ea.la && (K.ea.la = []), void (3 * 389 + -7 * -404 + -3995) !== K.ea.la[l - 1]) throw new nn("Cannot register multiple constructors with identical number of parameters (" + (l - (2696 * 1 + 2 * -1909 + -1123 * -1)) + ") for class '" + K.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return K.ea.la[l - (-448 + 449 * 1)] = function() {
          Ln("Cannot construct " + K.name + " due to unbound types", G);
        }, on([], G, function(V) {
          return K.ea.la[l - (1 * -812 + 8 * -1063 + 9317)] = function() {
            arguments.length !== l - (2153 * 1 + -694 * -5 + 2811 * -2) && M(O + " called with " + arguments.length + " arguments, expected " + (l - (2547 + 19 * -134))), k.length = 605 * -1 + 5 * -1604 + 125 * 69, w.length = l;
            for (var q = 1; q < l; ++q) w[q] = V[q].toWireType(k, arguments[q - (-7615 * 1 + 115 * -27 + 151 * 71)]);
            return q = A.apply(null, w), Hi(k), V[5692 * 1 + 3 * 509 + -7219].fromWireType(q);
          }, [];
        }), [];
      });
    }, b: function(c, l, d, h, A, b, G, w, k, K) {
      l = Ee(l), A = vt(h, A), on([], [c], function(O) {
        O = O[0];
        var V = O.name + "." + l, q = { get: function() {
          Ln("Cannot access " + V + " due to unbound types", [d, G]);
        }, enumerable: !(-9485 + -7137 * 1 + -16622 * -1), configurable: !(6 * 354 + -5853 + 3729) };
        return k ? q.set = function() {
          Ln("Cannot access " + V + " due to unbound types", [d, G]);
        } : q.set = function() {
          M(V + " is a read-only property");
        }, Object.defineProperty(O.ea.ma, l, q), on([], k ? [d, G] : [d], function(fe) {
          var E = fe[0], st = { get: function() {
            var Ne = Ra(this, O, V + " getter");
            return E.fromWireType(A(b, Ne));
          }, enumerable: !(-1 * -3551 + -5 * -221 + -194 * 24) };
          if (k) {
            k = vt(w, k);
            var He = fe[7 * 1231 + 3 * -2254 + 618 * -3];
            st.set = function(Ne) {
              var Vt = Ra(this, O, V + " setter"), sn = [];
              k(K, Vt, He.toWireType(sn, Ne)), Hi(sn);
            };
          }
          return Object.defineProperty(O.ea.ma, l, st), [];
        }), [];
      });
    }, v: function(c, l) {
      l = Ee(l), ut(c, { name: l, fromWireType: function(d) {
        var h = Je[d].value;
        return Yo(d), h;
      }, toWireType: function(d, h) {
        return rn(h);
      }, argPackAdvance: 8, readValueFromPointer: Gi, ka: null });
    }, m: function(c, l, d) {
      d = Vo(d), l = Ee(l), ut(c, { name: l, fromWireType: function(h) {
        return h;
      }, toWireType: function(h, A) {
        if (typeof A != "number" && typeof A != "boolean") throw new TypeError('Cannot convert "' + an(A) + '" to ' + this.name);
        return A;
      }, argPackAdvance: 8, readValueFromPointer: Sc(l, d), ka: null });
    }, c: function(c, l, d, h, A, b) {
      var G = Ea(l, d);
      c = Ee(c), A = vt(h, A), ka(c, function() {
        Ln("Cannot call " + c + " due to unbound types", G);
      }, l - (6995 + -447 * 22 + 2840)), on([], G, function(w) {
        var k = c, K = c;
        w = [w[-196 * -51 + 4041 + -14037], null].concat(w.slice(1));
        var O = A, V = w.length;
        1 * -1151 + -8319 * 1 + -16 * -592 > V && M("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var q = w[1] !== null && !(-1360 + -1 * -1361), fe = !(-1256 * -1 + 6399 + -89 * 86), E = 3001 * -1 + -6778 + 9780; E < w.length; ++E) if (w[E] !== null && void (38 * 31 + 8215 + -9393) === w[E].ka) {
          fe = !(802 * 4 + 1684 + -4892);
          break;
        }
        var st = w[50 * -182 + 4493 + 4607].name !== "void", He = "", Ne = "";
        for (E = 0; E < V - 2; ++E) He += (5988 + -171 * -51 + 3 * -4903 !== E ? ", " : "") + "arg" + E, Ne += (1 * 6998 + 1 * -7559 + -51 * -11 !== E ? ", " : "") + "arg" + E + "Wired";
        K = "return function " + To(K) + "(" + He + `) {
if (arguments.length !== ` + (V - 2) + `) {
throwBindingError('function ` + K + " called with ' + arguments.length + ' arguments, expected " + (V - (-490 * -3 + -1 * 823 + -645)) + ` args!');
}
`, fe && (K += `var destructors = [];
`);
        var Vt = fe ? "destructors" : "null";
        for (He = "throwBindingError invoker fn runDestructors retType classParam".split(" "), O = [M, O, b, Hi, w[0], w[-699 + 1727 * -2 + 4154]], q && (K += "var thisWired = classParam.toWireType(" + Vt + `, this);
`), E = -4 * -191 + 7945 + -8709; E < V - (-5217 + 3432 * 2 + -35 * 47); ++E) K += "var arg" + E + "Wired = argType" + E + ".toWireType(" + Vt + ", arg" + E + "); // " + w[E + (-4765 + -3 * 1404 + 8979)].name + `
`, He.push("argType" + E), O.push(w[E + (2 * -623 + 1 * -8222 + -1894 * -5)]);
        if (q && (Ne = "thisWired" + (169 * -38 + 31 * -86 + 9088 * 1 < Ne.length ? ", " : "") + Ne), K += (st ? "var rv = " : "") + "invoker(fn" + (-5096 + 81 * 89 + -2113 * 1 < Ne.length ? ", " : "") + Ne + `);
`, fe) K += `runDestructors(destructors);
`;
        else
          for (E = q ? 769 + -1 * 7761 + 6993 : -202 * -40 + -2 * -4341 + -16760; E < w.length; ++E) V = -878 * 9 + -5669 + -26 * -522 === E ? "thisWired" : "arg" + (E - (-9947 + 2 * 606 + -8737 * -1)) + "Wired", w[E].ka !== null && (K += V + "_dtor(" + V + "); // " + w[E].name + `
`, He.push(V + "_dtor"), O.push(w[E].ka));
        return st && (K += `var ret = retType.fromWireType(rv);
return ret;
`), He.push(K + `}
`), w = Bc(He).apply(null, O), Oa(k, w, l - (6469 + -4 * 2323 + 2824)), [];
      });
    }, e: function(c, l, d, h, A) {
      function b(K) {
        return K;
      }
      l = Ee(l), -(1 * -5903 + -3788 * -1 + 2116) === A && (A = 2658395136 + 5918209207 * 1 + -4281637048);
      var G = Vo(d);
      if (5590 + 2 * -2795 === h) {
        var w = 32 - 8 * d;
        b = function(K) {
          return K << w >>> w;
        };
      }
      var k = l.indexOf("unsigned") != -1;
      ut(c, { name: l, fromWireType: b, toWireType: function(K, O) {
        if (typeof O != "number" && typeof O != "boolean") throw new TypeError('Cannot convert "' + an(O) + '" to ' + this.name);
        if (O < h || O > A) throw new TypeError('Passing a number "' + an(O) + '" from JS side to C/C++ side to an argument of type "' + l + '", which is outside the valid range [' + h + ", " + A + "]!");
        return k ? O >>> -13 * 521 + 8791 * 1 + 1009 * -2 : O | -29 * 208 + 87 * -55 + 10817;
      }, argPackAdvance: 8, readValueFromPointer: Gc(l, G, 5758 + -5 * -1220 + -11858 !== h), ka: null });
    }, d: function(c, l, d) {
      function h(w) {
        w >>= 7016 * -1 + -857 * 7 + -4339 * -3;
        var k = Se;
        return new A(z, k[w + 1], k[w]);
      }
      var A = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][l];
      d = Ee(d);
      var b = {};
      b.name = d, b.fromWireType = h, b.argPackAdvance = 8, b.readValueFromPointer = h;
      var G = {};
      G.Ea = !(-6070 + -1977 * -1 + 4093 * 1), ut(c, b, G);
    }, n: function(c, l) {
      l = Ee(l);
      var d = l === "std::string";
      ut(c, { name: l, fromWireType: function(h) {
        var A = Se[h >> 2];
        if (d) for (var b = h + (23 * -242 + 6940 * 1 + -1370), G = -2 * 4983 + -6283 + 16249; G <= A; ++G) {
          var w = h + 4 + G;
          if (G == A || 35 * 81 + 1327 * 2 + 5489 * -1 == de[w]) {
            if (b) {
              var k = b, K = de, O = k + (w - b);
              for (b = k; K[b] && !(b >= O); ) ++b;
              if (27 * 63 + -8370 + 35 * 191 < b - k && K.subarray && S) k = S.decode(K.subarray(k, b));
              else {
                for (O = ""; k < b; ) {
                  var V = K[k++];
                  if (V & 128) {
                    var q = K[k++] & 63;
                    if ((V & 91 * 9 + -6345 + 2875 * 2) == 192) O += String.fromCharCode((V & -102 * 76 + -3957 + 11740) << 6 | q);
                    else {
                      var fe = K[k++] & 63;
                      V = 1 * 8305 + 2520 + 10601 * -1 == (V & 65 * 101 + 45 * 207 + -170 * 92) ? (V & 15) << -9 * -578 + -7480 + 2290 | q << -49 * -178 + 21 * 458 + -18334 | fe : (V & 7) << 14619 + 14601 * -1 | q << 5743 * -1 + 3 * 2823 + -2714 | fe << 6 | K[k++] & -22 * 134 + -119 + 3130, 1 * 11404 + -111 * -637 + -16575 > V ? O += String.fromCharCode(V) : (V -= -1343 * 85 + 20508 * -2 + 220707, O += String.fromCharCode(55296 | V >> -2572 * -1 + 7463 + -10025, 172210 + 7726 * -15 | V & -1 * 3859 + 9709 + -4827));
                    }
                  } else O += String.fromCharCode(V);
                }
                k = O;
              }
            } else k = "";
            if (void (-2 * -2996 + 1 * -5417 + -1 * 575) === E) var E = k;
            else E += String.fromCharCode(-5809 * 1 + -68 * 37 + 8325), E += k;
            b = w + (3217 * -1 + 1830 + 1388 * 1);
          }
        }
        else {
          for (E = Array(A), G = -1506 + 47 * -97 + 6065 * 1; G < A; ++G) E[G] = String.fromCharCode(de[h + (-2281 + -1 * 9932 + 12217 * 1) + G]);
          E = E.join("");
        }
        return dt(h), E;
      }, toWireType: function(h, A) {
        A instanceof ArrayBuffer && (A = new Uint8Array(A));
        var b = typeof A == "string";
        b || A instanceof Uint8Array || A instanceof Uint8ClampedArray || A instanceof Int8Array || M("Cannot pass non-string to std::string");
        var G = (d && b ? function() {
          for (var K = -9630 + -997 * -5 + 4645, O = 385 * 6 + 42 * 5 + 42 * -60; O < A.length; ++O) {
            var V = A.charCodeAt(O);
            83321 + -1 * -8644 + -36669 <= V && 122628 + -1187 * 55 >= V && (V = 16712 * 7 + -9680 + -41768 + ((V & 3654 + 1 * 4435 + -2 * 3533) << 8277 * 1 + 850 + 9117 * -1) | A.charCodeAt(++O) & -1539 + -59 * -110 + 982 * -4), -28 * -112 + 849 + -3858 >= V ? ++K : K = 2047 >= V ? K + (907 * 1 + 6999 * -1 + 6094) : 65535 >= V ? K + (-2259 + 377 * 6) : K + 4;
          }
          return K;
        } : function() {
          return A.length;
        })(), w = ki(-7752 + 1138 * 1 + 6618 + G + (6663 * -1 + 888 + 5776 * 1));
        if (Se[w >> -7065 + -1933 * -3 + 4 * 317] = G, d && b) B(A, w + (5431 * 1 + -8275 + 178 * 16), G + (386 * 11 + -2 * 1367 + -1511));
        else if (b) for (b = -1062 + -3115 * 2 + 3646 * 2; b < G; ++b) {
          var k = A.charCodeAt(b);
          255 < k && (dt(w), M("String has UTF-16 code units that do not fit in 8 bits")), de[w + (-9737 + 697 * 11 + 2 * 1037) + b] = k;
        }
        else
          for (b = -1 * -3233 + -4243 + 1010; b < G; ++b) de[w + (6 * 853 + -8520 + 3406) + b] = A[b];
        return h !== null && h.push(dt, w), w;
      }, argPackAdvance: 8, readValueFromPointer: Gi, ka: function(h) {
        dt(h);
      } });
    }, j: function(c, l, d) {
      if (d = Ee(d), 3284 + -657 * -1 + -3939 === l) var h = U, A = Y, b = F, G = function() {
        return _e;
      }, w = -5830 + -833 * -7;
      else 1 * 5383 + 8594 + 13973 * -1 === l && (h = W, A = J, b = ue, G = function() {
        return Se;
      }, w = -14 * 239 + -5300 + 8648);
      ut(c, { name: d, fromWireType: function(k) {
        for (var K = Se[k >> 9834 + -1 * 8864 + -968], O = G(), V, q = k + (644 + -295 * 5 + 835), fe = -1 * -8936 + -9899 + 9 * 107; fe <= K; ++fe) {
          var E = k + 4 + fe * l;
          (fe == K || 12948 + 12 * -1079 == O[E >> w]) && (q = h(q, E - q), void (-5885 + 97 * 60 + 13 * 5) === V ? V = q : (V += String.fromCharCode(7211 + -43 * -151 + 4 * -3426), V += q), q = E + l);
        }
        return dt(k), V;
      }, toWireType: function(k, K) {
        typeof K != "string" && M("Cannot pass non-string to C++ string type " + d);
        var O = b(K), V = ki(-3128 + 1 * 3132 + O + l);
        return Se[V >> 4512 * -1 + -1 * 5329 + 9843] = O >> w, A(K, V + (25 * -109 + -2243 + 4972), O + l), k !== null && k.push(dt, V), V;
      }, argPackAdvance: 8, readValueFromPointer: Gi, ka: function(k) {
        dt(k);
      } });
    }, x: function(c, l) {
      l = Ee(l);
      var d = {};
      d.Qa = !(5175 + -225 * 23), d.name = l, d.argPackAdvance = 0, d.fromWireType = function() {
      }, d.toWireType = function() {
      }, ut(c, d);
    }, k: function(c, l, d) {
      c = Fo(c), l = Ya(l, "emval::as");
      var h = [], A = rn(h);
      return ae[d >> -3330 * 3 + 4965 * 2 + -62 * -1] = A, l.toWireType(h, c);
    }, i: Yo, l: function(c, l) {
      return c = Fo(c), l = Fo(l), rn(c[l]);
    }, p: function(c) {
      var l = Zc[c];
      return rn(void (2064 * 1 + 6984 + 104 * -87) === l ? Ee(c) : l);
    }, o: function(c) {
      Hi(Je[c].value), Yo(c);
    }, y: function(c, l) {
      return c = Ya(c, "_emval_take_value"), c = c.readValueFromPointer(l), rn(c);
    }, f: function() {
      je();
    }, q: function(c, l, d) {
      de.copyWithin(c, l, l + d);
    }, r: function(c) {
      c >>>= -1 * 2281 + 1 * -1057 + 3338 * 1;
      var l = de.length;
      if (2948415664 * -1 + -2230643468 + -72959 * -100420 < c) return !(232 * -42 + -9840 + 3917 * 5);
      for (var d = 293 * 5 + 478 * -10 + 3316; -3451 + 2 * -1077 + -79 * -71 >= d; d *= -8194 + 754 * 1 + -1 * -7442) {
        var h = l * (1 + 0.2 / d);
        h = Math.min(h, c + (116540670 + 52809 * -3509 + 169429407)), h = Math.max(1 * -28914113 + -2658973 * 1 + 11 * 4395482, c, h), 2 * 4492 + 5907 + -14891 < h % (-51758 + -117294 * -1) && (h += 65536 - h % 65536);
        e: {
          try {
            y.grow(Math.min(-328524874 * -13 + -952 * 1729043 + -477290778, h) - z.byteLength + (37 * 2732 + -7230 + -28319) >>> 16), Oe(y.buffer);
            var A = -4022 * 2 + -5452 + -13497 * -1;
            break e;
          } catch {
          }
          A = void (-37 + 1 * 187 + -2 * 75);
        }
        if (A) return !(-6523 + -1086 * 3 + 9781);
      }
      return !(-5 * 105 + 4497 + 3971 * -1);
    }, s: function(c, l) {
      var d = 0;
      return Xa().forEach(function(h, A) {
        var b = l + d;
        for (A = ae[c + (-291 * -13 + -3882 + -1 * -103) * A >> 27 * 37 + 67 * 41 + -3744] = b, b = -2 * -743 + -9533 + 8047; b < h.length; ++b) Ie[A++ >> -1 * 7243 + -3223 * -3 + -2426] = h.charCodeAt(b);
        Ie[A >> 10842 + -78 * 139] = 0, d += h.length + (-4 * -2252 + 67 * -67 + -1506 * 3);
      }), -1 * 4897 + 43 * -13 + 5456;
    }, t: function(c, l) {
      var d = Xa();
      ae[c >> -7156 + -2191 * 2 + 11540] = d.length;
      var h = 7017 + -1 * 4314 + -53 * 51;
      return d.forEach(function(A) {
        h += A.length + (-10787 + -93 * -116);
      }), ae[l >> -1483 * -3 + -10 * 707 + 61 * 43] = h, 4357 + -379 * 4 + -2841;
    }, a: y };
    (function() {
      function c(G) {
        G = G.exports, G = ja(G), t.asm = G, Le--, t.monitorRunDependencies && t.monitorRunDependencies(Le), -1 * -9530 + -771 * 4 + -6446 == Le && rt && (G = rt, rt = null, G());
      }
      function l(G) {
        c(G.instance);
      }
      function d(G) {
        return hc().then(function(w) {
          return WebAssembly.instantiate(w, A);
        }).then(G, function(w) {
          m("failed to asynchronously prepare wasm: " + w), je(w);
        });
      }
      var h = {};
      h.a = Hc;
      var A = h;
      if (Le++, t.monitorRunDependencies && t.monitorRunDependencies(Le), t.instantiateWasm) try {
        var b = t.instantiateWasm(A, c);
        return b = ja(b);
      } catch (G) {
        return m("Module.instantiateWasm callback failed with error: " + G), !(6 * 293 + -183 + 1574 * -1);
      }
      return function() {
        if (f || typeof WebAssembly.instantiateStreaming != "function" || at() || kt("file://") || typeof fetch != "function") return d(l);
        var G = {};
        G.credentials = "same-origin", fetch(qe, G).then(function(w) {
          return WebAssembly.instantiateStreaming(w, A).then(l, function(k) {
            return m("wasm streaming compile failed: " + k), m("falling back to ArrayBuffer instantiation"), d(l);
          });
        });
      }(), {};
    })();
    var Ua = t.___wasm_call_ctors = function() {
      return (Ua = t.___wasm_call_ctors = t.asm.B).apply(null, arguments);
    }, ki = t._malloc = function() {
      return (ki = t._malloc = t.asm.C).apply(null, arguments);
    }, dt = t._free = function() {
      return (dt = t._free = t.asm.D).apply(null, arguments);
    }, za = t.___getTypeName = function() {
      return (za = t.___getTypeName = t.asm.E).apply(null, arguments);
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
    var Ki;
    rt = function c() {
      Ki || Mo(), Ki || (rt = c);
    };
    function Mo() {
      function c() {
        if (!Ki && (Ki = !(-2 * -23 + 1 * -74 + 4 * 7), t.calledRun = !(-1 * 9977 + 1 * -9298 + 19275), !Z)) {
          if (yi(pe), yi(Ze), e(t), t.onRuntimeInitialized && t.onRuntimeInitialized(), t.postRun) for (typeof t.postRun == "function" && (t.postRun = [t.postRun]); t.postRun.length; ) {
            var l = t.postRun.shift();
            Te.unshift(l);
          }
          yi(Te);
        }
      }
      if (!(-143 + 95 * -78 + 7553 < Le)) {
        if (t.preRun)
          for (typeof t.preRun == "function" && (t.preRun = [t.preRun]); t.preRun.length; ) en();
        yi(Ve), 10809 + -1201 * 9 < Le || (t.setStatus ? (t.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            t.setStatus("");
          }, -3824 * -2 + -6343 + -8 * 163), c();
        }, 3123 + -7 * 446)) : c());
      }
    }
    if (t.run = Mo, t.preInit)
      for (typeof t.preInit == "function" && (t.preInit = [t.preInit]); 2073 + -9 * 563 + 2994 < t.preInit.length; ) t.preInit.pop()();
    return Mo(), o.ready;
  };
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Fg = Symbol("Comlink.proxy"), MI = Symbol("Comlink.endpoint"), jI = Symbol("Comlink.releaseProxy"), rr = Symbol("Comlink.finalizer"), no = Symbol("Comlink.thrown"), Xg = (i) => typeof i == "object" && i !== null || typeof i == "function", JI = {
  canHandle: (i) => Xg(i) && i[Fg],
  serialize(i) {
    const { port1: o, port2: t } = new MessageChannel();
    return jg(i, o), [t, [t]];
  },
  deserialize(i) {
    return i.start(), Ug(i);
  }
}, UI = {
  canHandle: (i) => Xg(i) && no in i,
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
}, Mg = /* @__PURE__ */ new Map([
  ["proxy", JI],
  ["throw", UI]
]);
function zI(i, o) {
  for (const t of i)
    if (o === t || t === "*" || t instanceof RegExp && t.test(o))
      return !0;
  return !1;
}
function jg(i, o = globalThis, t = ["*"]) {
  o.addEventListener("message", function e(n) {
    if (!n || !n.data)
      return;
    if (!zI(t, n.origin)) {
      console.warn(`Invalid origin '${n.origin}' for comlink proxy`);
      return;
    }
    const { id: r, type: a, path: s } = Object.assign({ path: [] }, n.data), g = (n.data.argumentList || []).map(Nt);
    let x;
    try {
      const I = s.slice(0, -1).reduce((m, f) => m[f], i), u = s.reduce((m, f) => m[f], i);
      switch (a) {
        case "GET":
          x = u;
          break;
        case "SET":
          I[s.slice(-1)[0]] = Nt(n.data.value), x = !0;
          break;
        case "APPLY":
          x = u.apply(I, g);
          break;
        case "CONSTRUCT":
          {
            const m = new u(...g);
            x = td(m);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: m, port2: f } = new MessageChannel();
            jg(i, f), x = ed(m, [m]);
          }
          break;
        case "RELEASE":
          x = void 0;
          break;
        default:
          return;
      }
    } catch (I) {
      x = { value: I, [no]: 0 };
    }
    Promise.resolve(x).catch((I) => ({ value: I, [no]: 0 })).then((I) => {
      const [u, m] = ho(I);
      o.postMessage(Object.assign(Object.assign({}, u), { id: r }), m), a === "RELEASE" && (o.removeEventListener("message", e), Jg(o), rr in i && typeof i[rr] == "function" && i[rr]());
    }).catch((I) => {
      const [u, m] = ho({
        value: new TypeError("Unserializable return value"),
        [no]: 0
      });
      o.postMessage(Object.assign(Object.assign({}, u), { id: r }), m);
    });
  }), o.start && o.start();
}
function QI(i) {
  return i.constructor.name === "MessagePort";
}
function Jg(i) {
  QI(i) && i.close();
}
function Ug(i, o) {
  return Xr(i, [], o);
}
function Ni(i) {
  if (i)
    throw new Error("Proxy has been released and is not useable");
}
function zg(i) {
  return dn(i, {
    type: "RELEASE"
  }).then(() => {
    Jg(i);
  });
}
const Io = /* @__PURE__ */ new WeakMap(), Co = "FinalizationRegistry" in globalThis && new FinalizationRegistry((i) => {
  const o = (Io.get(i) || 0) - 1;
  Io.set(i, o), o === 0 && zg(i);
});
function $I(i, o) {
  const t = (Io.get(o) || 0) + 1;
  Io.set(o, t), Co && Co.register(i, o, i);
}
function _I(i) {
  Co && Co.unregister(i);
}
function Xr(i, o = [], t = function() {
}) {
  let e = !1;
  const n = new Proxy(t, {
    get(r, a) {
      if (Ni(e), a === jI)
        return () => {
          _I(n), zg(i), e = !0;
        };
      if (a === "then") {
        if (o.length === 0)
          return { then: () => n };
        const s = dn(i, {
          type: "GET",
          path: o.map((g) => g.toString())
        }).then(Nt);
        return s.then.bind(s);
      }
      return Xr(i, [...o, a]);
    },
    set(r, a, s) {
      Ni(e);
      const [g, x] = ho(s);
      return dn(i, {
        type: "SET",
        path: [...o, a].map((I) => I.toString()),
        value: g
      }, x).then(Nt);
    },
    apply(r, a, s) {
      Ni(e);
      const g = o[o.length - 1];
      if (g === MI)
        return dn(i, {
          type: "ENDPOINT"
        }).then(Nt);
      if (g === "bind")
        return Xr(i, o.slice(0, -1));
      const [x, I] = Js(s);
      return dn(i, {
        type: "APPLY",
        path: o.map((u) => u.toString()),
        argumentList: x
      }, I).then(Nt);
    },
    construct(r, a) {
      Ni(e);
      const [s, g] = Js(a);
      return dn(i, {
        type: "CONSTRUCT",
        path: o.map((x) => x.toString()),
        argumentList: s
      }, g).then(Nt);
    }
  });
  return $I(n, i), n;
}
function qI(i) {
  return Array.prototype.concat.apply([], i);
}
function Js(i) {
  const o = i.map(ho);
  return [o.map((t) => t[0]), qI(o.map((t) => t[1]))];
}
const Qg = /* @__PURE__ */ new WeakMap();
function ed(i, o) {
  return Qg.set(i, o), i;
}
function td(i) {
  return Object.assign(i, { [Fg]: !0 });
}
function ho(i) {
  for (const [o, t] of Mg)
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
    Qg.get(i) || []
  ];
}
function Nt(i) {
  switch (i.type) {
    case "HANDLER":
      return Mg.get(i.name).deserialize(i.value);
    case "RAW":
      return i.value;
  }
}
function dn(i, o, t) {
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
const $g = "dmFyIGNlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5Owp2YXIgbGUgPSAoYSwgdSwgZSkgPT4gdSBpbiBhID8gY2UoYSwgdSwgeyBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwLCB2YWx1ZTogZSB9KSA6IGFbdV0gPSBlOwp2YXIgWW4gPSAoYSwgdSwgZSkgPT4gbGUoYSwgdHlwZW9mIHUgIT0gInN5bWJvbCIgPyB1ICsgIiIgOiB1LCBlKTsKY29uc3Qga3QgPSB7CiAgc2ltZDogInNhbV9zaW1kLndhc20iLAogIHNhbTogInNhbS53YXNtIgp9LCBmZSA9IGFzeW5jICgpID0+IFdlYkFzc2VtYmx5LnZhbGlkYXRlKG5ldyBVaW50OEFycmF5KFswLCA5NywgMTE1LCAxMDksIDEsIDAsIDAsIDAsIDEsIDUsIDEsIDk2LCAwLCAxLCAxMjMsIDMsIDIsIDEsIDAsIDEwLCAxMCwgMSwgOCwgMCwgNjUsIDAsIDI1MywgMTUsIDI1MywgOTgsIDExXSkpOwpjbGFzcyBJIGV4dGVuZHMgRXJyb3IgewogIGNvbnN0cnVjdG9yKGUsIG0pIHsKICAgIHN1cGVyKGUpOwogICAgWW4odGhpcywgImNhdXNlIik7CiAgICB0aGlzLm5hbWUgPSAiQXV0b0NhcHR1cmVFcnJvciIsIHRoaXMuY2F1c2UgPSBtOwogIH0KICAvLyBDaGFuZ2UgdGhpcyB0byBEZWNvcmF0b3Igd2hlbiB0aGV5IHdpbGwgYmUgaW4gc3RhYmxlIHJlbGVhc2UKICBzdGF0aWMgbG9nRXJyb3IoZSkgewogIH0KICBzdGF0aWMgZnJvbUNhbWVyYUVycm9yKGUpIHsKICAgIGlmICh0aGlzLmxvZ0Vycm9yKGUpLCBlIGluc3RhbmNlb2YgSSkKICAgICAgcmV0dXJuIGU7CiAgICBsZXQgbTsKICAgIHN3aXRjaCAoZS5uYW1lKSB7CiAgICAgIGNhc2UgIk92ZXJjb25zdHJhaW5lZEVycm9yIjoKICAgICAgICBtID0gIk1pbmltdW0gcXVhbGl0eSByZXF1aXJlbWVudHMgYXJlIG5vdCBtZXQgYnkgeW91ciBjYW1lcmEiOwogICAgICAgIGJyZWFrOwogICAgICBjYXNlICJOb3RSZWFkYWJsZUVycm9yIjoKICAgICAgY2FzZSAiQWJvcnRFcnJvciI6CiAgICAgICAgbSA9ICJUaGUgd2ViY2FtIGlzIGFscmVhZHkgaW4gdXNlIGJ5IGFub3RoZXIgYXBwbGljYXRpb24iOwogICAgICAgIGJyZWFrOwogICAgICBjYXNlICJOb3RBbGxvd2VkRXJyb3IiOgogICAgICAgIG0gPSAiVG8gdXNlIHlvdXIgY2FtZXJhLCB5b3UgbXVzdCBhbGxvdyBwZXJtaXNzaW9ucyI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdEZvdW5kRXJyb3IiOgogICAgICAgIG0gPSAiVGhlcmUgaXMgbm8gY2FtZXJhIGF2YWlsYWJsZSB0byB5b3UiOwogICAgICAgIGJyZWFrOwogICAgICBkZWZhdWx0OgogICAgICAgIG0gPSAiQW4gdW5rbm93biBjYW1lcmEgZXJyb3IgaGFzIG9jY3VycmVkIjsKICAgICAgICBicmVhazsKICAgIH0KICAgIHJldHVybiBuZXcgSShtLCBlKTsKICB9CiAgc3RhdGljIGZyb21FcnJvcihlKSB7CiAgICBpZiAodGhpcy5sb2dFcnJvcihlKSwgZSBpbnN0YW5jZW9mIEkpCiAgICAgIHJldHVybiBlOwogICAgY29uc3QgbSA9ICJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcyBvY2N1cnJlZCI7CiAgICByZXR1cm4gbmV3IEkobSk7CiAgfQp9CmNvbnN0IGRlID0gewogIFJHQjogIlJHQiIsCiAgUkdCQTogIlJHQkEiCn0sIGhlID0gKGEpID0+IE51bWJlci5wYXJzZUZsb2F0KGEudG9GaXhlZCgzKSksIHllID0gKGEsIHUpID0+IE1hdGgubWluKGEsIHUpOwp2YXIgcGUgPSBmdW5jdGlvbigpIHsKICB2YXIgYSA9IHR5cGVvZiBkb2N1bWVudCA8ICJ1IiAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0ID8gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmMgOiB2b2lkIDA7CiAgcmV0dXJuIGZ1bmN0aW9uKHUpIHsKICAgIHUgPSB1IHx8IHt9OwogICAgdmFyIGU7CiAgICBlIHx8IChlID0gdHlwZW9mIHUgPCAidSIgPyB1IDoge30pOwogICAgdmFyIG0sIGc7CiAgICBlLnJlYWR5ID0gbmV3IFByb21pc2UoZnVuY3Rpb24obiwgdCkgewogICAgICBtID0gbiwgZyA9IHQ7CiAgICB9KTsKICAgIHZhciBDID0ge30sIEE7CiAgICBmb3IgKEEgaW4gZSkgZS5oYXNPd25Qcm9wZXJ0eShBKSAmJiAoQ1tBXSA9IGVbQV0pOwogICAgdmFyIE0gPSAiLi90aGlzLnByb2dyYW0iLCBPID0gITEsIFQgPSAhMTsKICAgIE8gPSB0eXBlb2Ygd2luZG93ID09ICJvYmplY3QiLCBUID0gdHlwZW9mIGltcG9ydFNjcmlwdHMgPT0gImZ1bmN0aW9uIjsKICAgIHZhciBfID0gIiIsIFM7CiAgICAoTyB8fCBUKSAmJiAoVCA/IF8gPSBzZWxmLmxvY2F0aW9uLmhyZWYgOiBkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIChfID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmMpLCBhICYmIChfID0gYSksIF8uaW5kZXhPZigiYmxvYjoiKSAhPT0gMCA/IF8gPSBfLnN1YnN0cigwLCBfLmxhc3RJbmRleE9mKCIvIikgKyAxKSA6IF8gPSAiIiwgVCAmJiAoUyA9IGZ1bmN0aW9uKG4pIHsKICAgICAgdmFyIHQgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsKICAgICAgcmV0dXJuIHQub3BlbigiR0VUIiwgbiwgITEpLCB0LnJlc3BvbnNlVHlwZSA9ICJhcnJheWJ1ZmZlciIsIHQuc2VuZChudWxsKSwgbmV3IFVpbnQ4QXJyYXkodC5yZXNwb25zZSk7CiAgICB9KSk7CiAgICB2YXIgRSA9IGUucHJpbnRFcnIgfHwgY29uc29sZS53YXJuLmJpbmQoY29uc29sZSk7CiAgICBmb3IgKEEgaW4gQykgQy5oYXNPd25Qcm9wZXJ0eShBKSAmJiAoZVtBXSA9IENbQV0pOwogICAgQyA9IG51bGwsIGUudGhpc1Byb2dyYW0gJiYgKE0gPSBlLnRoaXNQcm9ncmFtKTsKICAgIHZhciBXOwogICAgZS53YXNtQmluYXJ5ICYmIChXID0gZS53YXNtQmluYXJ5KSwgZS5ub0V4aXRSdW50aW1lICYmIGUubm9FeGl0UnVudGltZSwgdHlwZW9mIFdlYkFzc2VtYmx5ICE9ICJvYmplY3QiICYmIHNuKCJubyBuYXRpdmUgd2FzbSBzdXBwb3J0IGRldGVjdGVkIik7CiAgICB2YXIgSCwga24gPSAhMTsKICAgIGZ1bmN0aW9uIEtuKG4pIHsKICAgICAgbiB8fCBzbigiQXNzZXJ0aW9uIGZhaWxlZDogdW5kZWZpbmVkIik7CiAgICB9CiAgICB2YXIgUW4gPSB0eXBlb2YgVGV4dERlY29kZXIgPCAidSIgPyBuZXcgVGV4dERlY29kZXIoInV0ZjgiKSA6IHZvaWQgMDsKICAgIGZ1bmN0aW9uIFV0KG4sIHQsIHIpIHsKICAgICAgdmFyIGkgPSBGOwogICAgICBpZiAoMCA8IHIpIHsKICAgICAgICByID0gdCArIHIgLSAxOwogICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgbi5sZW5ndGg7ICsrbykgewogICAgICAgICAgdmFyIHMgPSBuLmNoYXJDb2RlQXQobyk7CiAgICAgICAgICBpZiAoNTUyOTYgPD0gcyAmJiA1NzM0MyA+PSBzKSB7CiAgICAgICAgICAgIHZhciBsID0gbi5jaGFyQ29kZUF0KCsrbyk7CiAgICAgICAgICAgIHMgPSA2NTUzNiArICgocyAmIDEwMjMpIDw8IDEwKSB8IGwgJiAxMDIzOwogICAgICAgICAgfQogICAgICAgICAgaWYgKDEyNyA+PSBzKSB7CiAgICAgICAgICAgIGlmICh0ID49IHIpIGJyZWFrOwogICAgICAgICAgICBpW3QrK10gPSBzOwogICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgaWYgKDIwNDcgPj0gcykgewogICAgICAgICAgICAgIGlmICh0ICsgMSA+PSByKSBicmVhazsKICAgICAgICAgICAgICBpW3QrK10gPSAxOTIgfCBzID4+IDY7CiAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgaWYgKDY1NTM1ID49IHMpIHsKICAgICAgICAgICAgICAgIGlmICh0ICsgMiA+PSByKSBicmVhazsKICAgICAgICAgICAgICAgIGlbdCsrXSA9IDIyNCB8IHMgPj4gMTI7CiAgICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgIGlmICh0ICsgMyA+PSByKSBicmVhazsKICAgICAgICAgICAgICAgIGlbdCsrXSA9IDI0MCB8IHMgPj4gMTgsIGlbdCsrXSA9IDEyOCB8IHMgPj4gMTIgJiA2MzsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgaVt0KytdID0gMTI4IHwgcyA+PiA2ICYgNjM7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgaVt0KytdID0gMTI4IHwgcyAmIDYzOwogICAgICAgICAgfQogICAgICAgIH0KICAgICAgICBpW3RdID0gMDsKICAgICAgfQogICAgfQogICAgdmFyIHFuID0gdHlwZW9mIFRleHREZWNvZGVyIDwgInUiID8gbmV3IFRleHREZWNvZGVyKCJ1dGYtMTZsZSIpIDogdm9pZCAwOwogICAgZnVuY3Rpb24gRHQobiwgdCkgewogICAgICBmb3IgKHZhciByID0gbiA+PiAxLCBpID0gciArIHQgLyAyOyAhKHIgPj0gaSkgJiYgeW5bcl07ICkgKytyOwogICAgICBpZiAociA8PD0gMSwgMzIgPCByIC0gbiAmJiBxbikgcmV0dXJuIHFuLmRlY29kZShGLnN1YmFycmF5KG4sIHIpKTsKICAgICAgZm9yIChyID0gMCwgaSA9ICIiOyA7ICkgewogICAgICAgIHZhciBvID0gUVtuICsgMiAqIHIgPj4gMV07CiAgICAgICAgaWYgKG8gPT0gMCB8fCByID09IHQgLyAyKSByZXR1cm4gaTsKICAgICAgICArK3IsIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShvKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gQnQobiwgdCwgcikgewogICAgICBpZiAociA9PT0gdm9pZCAwICYmIChyID0gMjE0NzQ4MzY0NyksIDIgPiByKSByZXR1cm4gMDsKICAgICAgciAtPSAyOwogICAgICB2YXIgaSA9IHQ7CiAgICAgIHIgPSByIDwgMiAqIG4ubGVuZ3RoID8gciAvIDIgOiBuLmxlbmd0aDsKICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCByOyArK28pIFFbdCA+PiAxXSA9IG4uY2hhckNvZGVBdChvKSwgdCArPSAyOwogICAgICByZXR1cm4gUVt0ID4+IDFdID0gMCwgdCAtIGk7CiAgICB9CiAgICBmdW5jdGlvbiB6dChuKSB7CiAgICAgIHJldHVybiAyICogbi5sZW5ndGg7CiAgICB9CiAgICBmdW5jdGlvbiBWdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSAwLCBpID0gIiI7ICEociA+PSB0IC8gNCk7ICkgewogICAgICAgIHZhciBvID0ga1tuICsgNCAqIHIgPj4gMl07CiAgICAgICAgaWYgKG8gPT0gMCkgYnJlYWs7CiAgICAgICAgKytyLCA2NTUzNiA8PSBvID8gKG8gLT0gNjU1MzYsIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiB8IG8gPj4gMTAsIDU2MzIwIHwgbyAmIDEwMjMpKSA6IGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShvKTsKICAgICAgfQogICAgICByZXR1cm4gaTsKICAgIH0KICAgIGZ1bmN0aW9uIEd0KG4sIHQsIHIpIHsKICAgICAgaWYgKHIgPT09IHZvaWQgMCAmJiAociA9IDIxNDc0ODM2NDcpLCA0ID4gcikgcmV0dXJuIDA7CiAgICAgIHZhciBpID0gdDsKICAgICAgciA9IGkgKyByIC0gNDsKICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCBuLmxlbmd0aDsgKytvKSB7CiAgICAgICAgdmFyIHMgPSBuLmNoYXJDb2RlQXQobyk7CiAgICAgICAgaWYgKDU1Mjk2IDw9IHMgJiYgNTczNDMgPj0gcykgewogICAgICAgICAgdmFyIGwgPSBuLmNoYXJDb2RlQXQoKytvKTsKICAgICAgICAgIHMgPSA2NTUzNiArICgocyAmIDEwMjMpIDw8IDEwKSB8IGwgJiAxMDIzOwogICAgICAgIH0KICAgICAgICBpZiAoa1t0ID4+IDJdID0gcywgdCArPSA0LCB0ICsgNCA+IHIpIGJyZWFrOwogICAgICB9CiAgICAgIHJldHVybiBrW3QgPj4gMl0gPSAwLCB0IC0gaTsKICAgIH0KICAgIGZ1bmN0aW9uIFl0KG4pIHsKICAgICAgZm9yICh2YXIgdCA9IDAsIHIgPSAwOyByIDwgbi5sZW5ndGg7ICsrcikgewogICAgICAgIHZhciBpID0gbi5jaGFyQ29kZUF0KHIpOwogICAgICAgIDU1Mjk2IDw9IGkgJiYgNTczNDMgPj0gaSAmJiArK3IsIHQgKz0gNDsKICAgICAgfQogICAgICByZXR1cm4gdDsKICAgIH0KICAgIHZhciBLLCBZLCBGLCBRLCB5biwgaywgVSwgbnQsIHR0OwogICAgZnVuY3Rpb24gZXQobikgewogICAgICBLID0gbiwgZS5IRUFQOCA9IFkgPSBuZXcgSW50OEFycmF5KG4pLCBlLkhFQVAxNiA9IFEgPSBuZXcgSW50MTZBcnJheShuKSwgZS5IRUFQMzIgPSBrID0gbmV3IEludDMyQXJyYXkobiksIGUuSEVBUFU4ID0gRiA9IG5ldyBVaW50OEFycmF5KG4pLCBlLkhFQVBVMTYgPSB5biA9IG5ldyBVaW50MTZBcnJheShuKSwgZS5IRUFQVTMyID0gVSA9IG5ldyBVaW50MzJBcnJheShuKSwgZS5IRUFQRjMyID0gbnQgPSBuZXcgRmxvYXQzMkFycmF5KG4pLCBlLkhFQVBGNjQgPSB0dCA9IG5ldyBGbG9hdDY0QXJyYXkobik7CiAgICB9CiAgICB2YXIgcnQgPSBlLklOSVRJQUxfTUVNT1JZIHx8IDE2Nzc3MjE2OwogICAgZS53YXNtTWVtb3J5ID8gSCA9IGUud2FzbU1lbW9yeSA6IEggPSBuZXcgV2ViQXNzZW1ibHkuTWVtb3J5KHsgaW5pdGlhbDogcnQgLyA2NTUzNiwgbWF4aW11bTogMzI3NjggfSksIEggJiYgKEsgPSBILmJ1ZmZlciksIHJ0ID0gSy5ieXRlTGVuZ3RoLCBldChLKTsKICAgIHZhciBpdCA9IFtdLCBhdCA9IFtdLCBadCA9IFtdLCBvdCA9IFtdOwogICAgZnVuY3Rpb24gJHQoKSB7CiAgICAgIHZhciBuID0gZS5wcmVSdW4uc2hpZnQoKTsKICAgICAgaXQudW5zaGlmdChuKTsKICAgIH0KICAgIHZhciBaID0gMCwgb24gPSBudWxsOwogICAgZS5wcmVsb2FkZWRJbWFnZXMgPSB7fSwgZS5wcmVsb2FkZWRBdWRpb3MgPSB7fTsKICAgIGZ1bmN0aW9uIHNuKG4pIHsKICAgICAgdGhyb3cgZS5vbkFib3J0ICYmIGUub25BYm9ydChuKSwgRShuKSwga24gPSAhMCwgbiA9IG5ldyBXZWJBc3NlbWJseS5SdW50aW1lRXJyb3IoImFib3J0KCIgKyBuICsgIikuIEJ1aWxkIHdpdGggLXMgQVNTRVJUSU9OUz0xIGZvciBtb3JlIGluZm8uIiksIGcobiksIG47CiAgICB9CiAgICBmdW5jdGlvbiBSbihuKSB7CiAgICAgIHZhciB0ID0gJDsKICAgICAgcmV0dXJuIFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCA/IHQuc3RhcnRzV2l0aChuKSA6IHQuaW5kZXhPZihuKSA9PT0gMDsKICAgIH0KICAgIGZ1bmN0aW9uIHN0KCkgewogICAgICByZXR1cm4gUm4oImRhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCwiKTsKICAgIH0KICAgIHZhciAkID0gInNhbS53YXNtIjsKICAgIGlmICghc3QoKSkgewogICAgICB2YXIgdXQgPSAkOwogICAgICAkID0gZS5sb2NhdGVGaWxlID8gZS5sb2NhdGVGaWxlKHV0LCBfKSA6IF8gKyB1dDsKICAgIH0KICAgIGZ1bmN0aW9uIGN0KCkgewogICAgICB0cnkgewogICAgICAgIGlmIChXKSByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoVyk7CiAgICAgICAgaWYgKFMpIHJldHVybiBTKCQpOwogICAgICAgIHRocm93ICJib3RoIGFzeW5jIGFuZCBzeW5jIGZldGNoaW5nIG9mIHRoZSB3YXNtIGZhaWxlZCI7CiAgICAgIH0gY2F0Y2ggKG4pIHsKICAgICAgICBzbihuKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gWHQoKSB7CiAgICAgIHJldHVybiBXIHx8ICFPICYmICFUIHx8IHR5cGVvZiBmZXRjaCAhPSAiZnVuY3Rpb24iIHx8IFJuKCJmaWxlOi8vIikgPyBQcm9taXNlLnJlc29sdmUoKS50aGVuKGN0KSA6IGZldGNoKCQsIHsgY3JlZGVudGlhbHM6ICJzYW1lLW9yaWdpbiIgfSkudGhlbihmdW5jdGlvbihuKSB7CiAgICAgICAgaWYgKCFuLm9rKSB0aHJvdyAiZmFpbGVkIHRvIGxvYWQgd2FzbSBiaW5hcnkgZmlsZSBhdCAnIiArICQgKyAiJyI7CiAgICAgICAgcmV0dXJuIG4uYXJyYXlCdWZmZXIoKTsKICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oKSB7CiAgICAgICAgcmV0dXJuIGN0KCk7CiAgICAgIH0pOwogICAgfQogICAgZnVuY3Rpb24gcG4obikgewogICAgICBmb3IgKDsgMCA8IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4uc2hpZnQoKTsKICAgICAgICBpZiAodHlwZW9mIHQgPT0gImZ1bmN0aW9uIikgdChlKTsKICAgICAgICBlbHNlIHsKICAgICAgICAgIHZhciByID0gdC5CYTsKICAgICAgICAgIHR5cGVvZiByID09ICJudW1iZXIiID8gdC50YSA9PT0gdm9pZCAwID8geG4oInYiLCByKSgpIDogeG4oInZpIiwgcikodC50YSkgOiByKHQudGEgPT09IHZvaWQgMCA/IG51bGwgOiB0LnRhKTsKICAgICAgICB9CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHhuKG4sIHQpIHsKICAgICAgdmFyIHIgPSBbXTsKICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkgewogICAgICAgIHIubGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsKICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgcltpXSA9IGFyZ3VtZW50c1tpXTsKICAgICAgICByZXR1cm4gciAmJiByLmxlbmd0aCA/IGVbImR5bkNhbGxfIiArIG5dLmFwcGx5KG51bGwsIFt0XS5jb25jYXQocikpIDogZVsiZHluQ2FsbF8iICsgbl0uY2FsbChudWxsLCB0KTsKICAgICAgfTsKICAgIH0KICAgIGZ1bmN0aW9uIEp0KG4pIHsKICAgICAgdGhpcy5kYSA9IG4gLSAxNiwgdGhpcy5PYSA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICBrW3RoaXMuZGEgKyA4ID4+IDJdID0gdDsKICAgICAgfSwgdGhpcy5MYSA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICBrW3RoaXMuZGEgKyAwID4+IDJdID0gdDsKICAgICAgfSwgdGhpcy5NYSA9IGZ1bmN0aW9uKCkgewogICAgICAgIGtbdGhpcy5kYSArIDQgPj4gMl0gPSAwOwogICAgICB9LCB0aGlzLkthID0gZnVuY3Rpb24oKSB7CiAgICAgICAgWVt0aGlzLmRhICsgMTIgPj4gMF0gPSAwOwogICAgICB9LCB0aGlzLk5hID0gZnVuY3Rpb24oKSB7CiAgICAgICAgWVt0aGlzLmRhICsgMTMgPj4gMF0gPSAwOwogICAgICB9LCB0aGlzLkZhID0gZnVuY3Rpb24odCwgcikgewogICAgICAgIHRoaXMuT2EodCksIHRoaXMuTGEociksIHRoaXMuTWEoKSwgdGhpcy5LYSgpLCB0aGlzLk5hKCk7CiAgICAgIH07CiAgICB9CiAgICBmdW5jdGlvbiBtbigpIHsKICAgICAgcmV0dXJuIDAgPCBtbi54YTsKICAgIH0KICAgIGZ1bmN0aW9uIEZuKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSAxOgogICAgICAgICAgcmV0dXJuIDA7CiAgICAgICAgY2FzZSAyOgogICAgICAgICAgcmV0dXJuIDE7CiAgICAgICAgY2FzZSA0OgogICAgICAgICAgcmV0dXJuIDI7CiAgICAgICAgY2FzZSA4OgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gdHlwZSBzaXplOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIHZhciBsdCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIFIobikgewogICAgICBmb3IgKHZhciB0ID0gIiI7IEZbbl07ICkgdCArPSBsdFtGW24rK11dOwogICAgICByZXR1cm4gdDsKICAgIH0KICAgIHZhciBxID0ge30sIFggPSB7fSwgdm4gPSB7fTsKICAgIGZ1bmN0aW9uIEluKG4pIHsKICAgICAgaWYgKG4gPT09IHZvaWQgMCkgcmV0dXJuICJfdW5rbm93biI7CiAgICAgIG4gPSBuLnJlcGxhY2UoL1teYS16QS1aMC05X10vZywgIiQiKTsKICAgICAgdmFyIHQgPSBuLmNoYXJDb2RlQXQoMCk7CiAgICAgIHJldHVybiA0OCA8PSB0ICYmIDU3ID49IHQgPyAiXyIgKyBuIDogbjsKICAgIH0KICAgIGZ1bmN0aW9uIGpuKG4sIHQpIHsKICAgICAgcmV0dXJuIG4gPSBJbihuKSwgbmV3IEZ1bmN0aW9uKCJib2R5IiwgInJldHVybiBmdW5jdGlvbiAiICsgbiArIGAoKSB7CiAgICAidXNlIHN0cmljdCI7ICAgIHJldHVybiBib2R5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7Cn07CmApKHQpOwogICAgfQogICAgZnVuY3Rpb24gTG4obikgewogICAgICB2YXIgdCA9IEVycm9yLCByID0gam4obiwgZnVuY3Rpb24oaSkgewogICAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMubWVzc2FnZSA9IGksIGkgPSBFcnJvcihpKS5zdGFjaywgaSAhPT0gdm9pZCAwICYmICh0aGlzLnN0YWNrID0gdGhpcy50b1N0cmluZygpICsgYApgICsgaS5yZXBsYWNlKC9eRXJyb3IoOlteXG5dKik/XG4vLCAiIikpOwogICAgICB9KTsKICAgICAgcmV0dXJuIHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSksIHIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gciwgci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlID09PSB2b2lkIDAgPyB0aGlzLm5hbWUgOiB0aGlzLm5hbWUgKyAiOiAiICsgdGhpcy5tZXNzYWdlOwogICAgICB9LCByOwogICAgfQogICAgdmFyIG5uID0gdm9pZCAwOwogICAgZnVuY3Rpb24gdihuKSB7CiAgICAgIHRocm93IG5ldyBubihuKTsKICAgIH0KICAgIHZhciBmdCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIGduKG4pIHsKICAgICAgdGhyb3cgbmV3IGZ0KG4pOwogICAgfQogICAgZnVuY3Rpb24gdG4obiwgdCwgcikgewogICAgICBmdW5jdGlvbiBpKGMpIHsKICAgICAgICBjID0gcihjKSwgYy5sZW5ndGggIT09IG4ubGVuZ3RoICYmIGduKCJNaXNtYXRjaGVkIHR5cGUgY29udmVydGVyIGNvdW50Iik7CiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBuLmxlbmd0aDsgKyt5KSBEKG5beV0sIGNbeV0pOwogICAgICB9CiAgICAgIG4uZm9yRWFjaChmdW5jdGlvbihjKSB7CiAgICAgICAgdm5bY10gPSB0OwogICAgICB9KTsKICAgICAgdmFyIG8gPSBBcnJheSh0Lmxlbmd0aCksIHMgPSBbXSwgbCA9IDA7CiAgICAgIHQuZm9yRWFjaChmdW5jdGlvbihjLCB5KSB7CiAgICAgICAgWC5oYXNPd25Qcm9wZXJ0eShjKSA/IG9beV0gPSBYW2NdIDogKHMucHVzaChjKSwgcS5oYXNPd25Qcm9wZXJ0eShjKSB8fCAocVtjXSA9IFtdKSwgcVtjXS5wdXNoKGZ1bmN0aW9uKCkgewogICAgICAgICAgb1t5XSA9IFhbY10sICsrbCwgbCA9PT0gcy5sZW5ndGggJiYgaShvKTsKICAgICAgICB9KSk7CiAgICAgIH0pLCBzLmxlbmd0aCA9PT0gMCAmJiBpKG8pOwogICAgfQogICAgZnVuY3Rpb24gRChuLCB0LCByKSB7CiAgICAgIGlmIChyID0gciB8fCB7fSwgISgiYXJnUGFja0FkdmFuY2UiIGluIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCJyZWdpc3RlclR5cGUgcmVnaXN0ZXJlZEluc3RhbmNlIHJlcXVpcmVzIGFyZ1BhY2tBZHZhbmNlIik7CiAgICAgIHZhciBpID0gdC5uYW1lOwogICAgICBpZiAobiB8fCB2KCd0eXBlICInICsgaSArICciIG11c3QgaGF2ZSBhIHBvc2l0aXZlIGludGVnZXIgdHlwZWlkIHBvaW50ZXInKSwgWC5oYXNPd25Qcm9wZXJ0eShuKSkgewogICAgICAgIGlmIChyLkVhKSByZXR1cm47CiAgICAgICAgdigiQ2Fubm90IHJlZ2lzdGVyIHR5cGUgJyIgKyBpICsgIicgdHdpY2UiKTsKICAgICAgfQogICAgICBYW25dID0gdCwgZGVsZXRlIHZuW25dLCBxLmhhc093blByb3BlcnR5KG4pICYmICh0ID0gcVtuXSwgZGVsZXRlIHFbbl0sIHQuZm9yRWFjaChmdW5jdGlvbihvKSB7CiAgICAgICAgbygpOwogICAgICB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiBLdChuKSB7CiAgICAgIHJldHVybiB7IGNvdW50OiBuLmNvdW50LCBvYTogbi5vYSwgcGE6IG4ucGEsIGRhOiBuLmRhLCBmYTogbi5mYSwgZ2E6IG4uZ2EsIGhhOiBuLmhhIH07CiAgICB9CiAgICBmdW5jdGlvbiBObihuKSB7CiAgICAgIHYobi5BLmZhLmVhLm5hbWUgKyAiIGluc3RhbmNlIGFscmVhZHkgZGVsZXRlZCIpOwogICAgfQogICAgdmFyIEhuID0gITE7CiAgICBmdW5jdGlvbiBkdCgpIHsKICAgIH0KICAgIGZ1bmN0aW9uIGh0KG4pIHsKICAgICAgLS1uLmNvdW50LnZhbHVlLCBuLmNvdW50LnZhbHVlID09PSAwICYmIChuLmdhID8gbi5oYS5uYShuLmdhKSA6IG4uZmEuZWEubmEobi5kYSkpOwogICAgfQogICAgZnVuY3Rpb24gdW4obikgewogICAgICByZXR1cm4gdHlwZW9mIEZpbmFsaXphdGlvbkdyb3VwID4gInUiID8gKHVuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiB0OwogICAgICB9LCBuKSA6IChIbiA9IG5ldyBGaW5hbGl6YXRpb25Hcm91cChmdW5jdGlvbih0KSB7CiAgICAgICAgZm9yICh2YXIgciA9IHQubmV4dCgpOyAhci5kb25lOyByID0gdC5uZXh0KCkpIHIgPSByLnZhbHVlLCByLmRhID8gaHQocikgOiBjb25zb2xlLndhcm4oIm9iamVjdCBhbHJlYWR5IGRlbGV0ZWQ6ICIgKyByLmRhKTsKICAgICAgfSksIHVuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiBIbi5yZWdpc3Rlcih0LCB0LkEsIHQuQSksIHQ7CiAgICAgIH0sIGR0ID0gZnVuY3Rpb24odCkgewogICAgICAgIEhuLnVucmVnaXN0ZXIodC5BKTsKICAgICAgfSwgdW4obikpOwogICAgfQogICAgdmFyIGNuID0gdm9pZCAwLCBsbiA9IFtdOwogICAgZnVuY3Rpb24gVW4oKSB7CiAgICAgIGZvciAoOyBsbi5sZW5ndGg7ICkgewogICAgICAgIHZhciBuID0gbG4ucG9wKCk7CiAgICAgICAgbi5BLm9hID0gITEsIG4uZGVsZXRlKCk7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIFYoKSB7CiAgICB9CiAgICB2YXIgeXQgPSB7fTsKICAgIGZ1bmN0aW9uIFF0KG4sIHQpIHsKICAgICAgdmFyIHIgPSBlOwogICAgICBpZiAocltuXS5qYSA9PT0gdm9pZCAwKSB7CiAgICAgICAgdmFyIGkgPSByW25dOwogICAgICAgIHJbbl0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiByW25dLmphLmhhc093blByb3BlcnR5KGFyZ3VtZW50cy5sZW5ndGgpIHx8IHYoIkZ1bmN0aW9uICciICsgdCArICInIGNhbGxlZCB3aXRoIGFuIGludmFsaWQgbnVtYmVyIG9mIGFyZ3VtZW50cyAoIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiKSAtIGV4cGVjdHMgb25lIG9mICgiICsgcltuXS5qYSArICIpISIpLCByW25dLmphW2FyZ3VtZW50cy5sZW5ndGhdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgfSwgcltuXS5qYSA9IFtdLCByW25dLmphW2kueWFdID0gaTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gcHQobiwgdCwgcikgewogICAgICBlLmhhc093blByb3BlcnR5KG4pID8gKChyID09PSB2b2lkIDAgfHwgZVtuXS5qYSAhPT0gdm9pZCAwICYmIGVbbl0uamFbcl0gIT09IHZvaWQgMCkgJiYgdigiQ2Fubm90IHJlZ2lzdGVyIHB1YmxpYyBuYW1lICciICsgbiArICInIHR3aWNlIiksIFF0KG4sIG4pLCBlLmhhc093blByb3BlcnR5KHIpICYmIHYoIkNhbm5vdCByZWdpc3RlciBtdWx0aXBsZSBvdmVybG9hZHMgb2YgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIG51bWJlciBvZiBhcmd1bWVudHMgKCIgKyByICsgIikhIiksIGVbbl0uamFbcl0gPSB0KSA6IChlW25dID0gdCwgciAhPT0gdm9pZCAwICYmIChlW25dLlJhID0gcikpOwogICAgfQogICAgZnVuY3Rpb24gcXQobiwgdCwgciwgaSwgbywgcywgbCwgYykgewogICAgICB0aGlzLm5hbWUgPSBuLCB0aGlzLmNvbnN0cnVjdG9yID0gdCwgdGhpcy5tYSA9IHIsIHRoaXMubmEgPSBpLCB0aGlzLmlhID0gbywgdGhpcy5DYSA9IHMsIHRoaXMucWEgPSBsLCB0aGlzLkFhID0gYzsKICAgIH0KICAgIGZ1bmN0aW9uIHduKG4sIHQsIHIpIHsKICAgICAgZm9yICg7IHQgIT09IHI7ICkgdC5xYSB8fCB2KCJFeHBlY3RlZCBudWxsIG9yIGluc3RhbmNlIG9mICIgKyByLm5hbWUgKyAiLCBnb3QgYW4gaW5zdGFuY2Ugb2YgIiArIHQubmFtZSksIG4gPSB0LnFhKG4pLCB0ID0gdC5pYTsKICAgICAgcmV0dXJuIG47CiAgICB9CiAgICBmdW5jdGlvbiBuZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgcm4odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIHduKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiB0ZShuLCB0KSB7CiAgICAgIGlmICh0ID09PSBudWxsKSB7CiAgICAgICAgaWYgKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgdGhpcy5zYSkgewogICAgICAgICAgdmFyIHIgPSB0aGlzLkhhKCk7CiAgICAgICAgICByZXR1cm4gbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgciksIHI7CiAgICAgICAgfQogICAgICAgIHJldHVybiAwOwogICAgICB9CiAgICAgIGlmICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBybih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgIXRoaXMucmEgJiYgdC5BLmZhLnJhICYmIHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArICh0LkEuaGEgPyB0LkEuaGEubmFtZSA6IHQuQS5mYS5uYW1lKSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIHIgPSB3bih0LkEuZGEsIHQuQS5mYS5lYSwgdGhpcy5lYSksIHRoaXMuc2EpIHN3aXRjaCAodC5BLmdhID09PSB2b2lkIDAgJiYgdigiUGFzc2luZyByYXcgcG9pbnRlciB0byBzbWFydCBwb2ludGVyIGlzIGlsbGVnYWwiKSwgdGhpcy5QYSkgewogICAgICAgIGNhc2UgMDoKICAgICAgICAgIHQuQS5oYSA9PT0gdGhpcyA/IHIgPSB0LkEuZ2EgOiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyAodC5BLmhhID8gdC5BLmhhLm5hbWUgOiB0LkEuZmEubmFtZSkgKyAiIHRvIHBhcmFtZXRlciB0eXBlICIgKyB0aGlzLm5hbWUpOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAxOgogICAgICAgICAgciA9IHQuQS5nYTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIGlmICh0LkEuaGEgPT09IHRoaXMpIHIgPSB0LkEuZ2E7CiAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgdmFyIGkgPSB0LmNsb25lKCk7CiAgICAgICAgICAgIHIgPSB0aGlzLklhKHIsIGVuKGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIGkuZGVsZXRlKCk7CiAgICAgICAgICAgIH0pKSwgbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgcik7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdigiVW5zdXBwb3J0aW5nIHNoYXJpbmcgcG9saWN5Iik7CiAgICAgIH0KICAgICAgcmV0dXJuIHI7CiAgICB9CiAgICBmdW5jdGlvbiBlZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgcm4odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIHQuQS5mYS5yYSAmJiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyB0LkEuZmEubmFtZSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIHduKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiBBbihuKSB7CiAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShVW24gPj4gMl0pOwogICAgfQogICAgZnVuY3Rpb24gbXQobiwgdCwgcikgewogICAgICByZXR1cm4gdCA9PT0gciA/IG4gOiByLmlhID09PSB2b2lkIDAgPyBudWxsIDogKG4gPSBtdChuLCB0LCByLmlhKSwgbiA9PT0gbnVsbCA/IG51bGwgOiByLkFhKG4pKTsKICAgIH0KICAgIHZhciBmbiA9IHt9OwogICAgZnVuY3Rpb24gcmUobiwgdCkgewogICAgICBmb3IgKHQgPT09IHZvaWQgMCAmJiB2KCJwdHIgc2hvdWxkIG5vdCBiZSB1bmRlZmluZWQiKTsgbi5pYTsgKSB0ID0gbi5xYSh0KSwgbiA9IG4uaWE7CiAgICAgIHJldHVybiBmblt0XTsKICAgIH0KICAgIGZ1bmN0aW9uIF9uKG4sIHQpIHsKICAgICAgcmV0dXJuIHQuZmEgJiYgdC5kYSB8fCBnbigibWFrZUNsYXNzSGFuZGxlIHJlcXVpcmVzIHB0ciBhbmQgcHRyVHlwZSIpLCAhIXQuaGEgIT0gISF0LmdhICYmIGduKCJCb3RoIHNtYXJ0UHRyVHlwZSBhbmQgc21hcnRQdHIgbXVzdCBiZSBzcGVjaWZpZWQiKSwgdC5jb3VudCA9IHsgdmFsdWU6IDEgfSwgdW4oT2JqZWN0LmNyZWF0ZShuLCB7IEE6IHsgdmFsdWU6IHQgfSB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiBCKG4sIHQsIHIsIGkpIHsKICAgICAgdGhpcy5uYW1lID0gbiwgdGhpcy5lYSA9IHQsIHRoaXMudWEgPSByLCB0aGlzLnJhID0gaSwgdGhpcy5zYSA9ICExLCB0aGlzLm5hID0gdGhpcy5JYSA9IHRoaXMuSGEgPSB0aGlzLndhID0gdGhpcy5QYSA9IHRoaXMuR2EgPSB2b2lkIDAsIHQuaWEgIT09IHZvaWQgMCA/IHRoaXMudG9XaXJlVHlwZSA9IHRlIDogKHRoaXMudG9XaXJlVHlwZSA9IGkgPyBuZSA6IGVlLCB0aGlzLmthID0gbnVsbCk7CiAgICB9CiAgICBmdW5jdGlvbiB2dChuLCB0LCByKSB7CiAgICAgIGUuaGFzT3duUHJvcGVydHkobikgfHwgZ24oIlJlcGxhY2luZyBub25leGlzdGFudCBwdWJsaWMgc3ltYm9sIiksIGVbbl0uamEgIT09IHZvaWQgMCAmJiByICE9PSB2b2lkIDAgPyBlW25dLmphW3JdID0gdCA6IChlW25dID0gdCwgZVtuXS55YSA9IHIpOwogICAgfQogICAgZnVuY3Rpb24gRyhuLCB0KSB7CiAgICAgIG4gPSBSKG4pOwogICAgICB2YXIgciA9IHhuKG4sIHQpOwogICAgICByZXR1cm4gdHlwZW9mIHIgIT0gImZ1bmN0aW9uIiAmJiB2KCJ1bmtub3duIGZ1bmN0aW9uIHBvaW50ZXIgd2l0aCBzaWduYXR1cmUgIiArIG4gKyAiOiAiICsgdCksIHI7CiAgICB9CiAgICB2YXIgZ3QgPSB2b2lkIDA7CiAgICBmdW5jdGlvbiB3dChuKSB7CiAgICAgIG4gPSBXdChuKTsKICAgICAgdmFyIHQgPSBSKG4pOwogICAgICByZXR1cm4geihuKSwgdDsKICAgIH0KICAgIGZ1bmN0aW9uIGRuKG4sIHQpIHsKICAgICAgZnVuY3Rpb24gcihzKSB7CiAgICAgICAgb1tzXSB8fCBYW3NdIHx8ICh2bltzXSA/IHZuW3NdLmZvckVhY2gocikgOiAoaS5wdXNoKHMpLCBvW3NdID0gITApKTsKICAgICAgfQogICAgICB2YXIgaSA9IFtdLCBvID0ge307CiAgICAgIHRocm93IHQuZm9yRWFjaChyKSwgbmV3IGd0KG4gKyAiOiAiICsgaS5tYXAod3QpLmpvaW4oWyIsICJdKSk7CiAgICB9CiAgICBmdW5jdGlvbiBBdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSBbXSwgaSA9IDA7IGkgPCBuOyBpKyspIHIucHVzaChrWyh0ID4+IDIpICsgaV0pOwogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIENuKG4pIHsKICAgICAgZm9yICg7IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4ucG9wKCk7CiAgICAgICAgbi5wb3AoKSh0KTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gX3QobiwgdCwgcikgewogICAgICByZXR1cm4gbiBpbnN0YW5jZW9mIE9iamVjdCB8fCB2KHIgKyAnIHdpdGggaW52YWxpZCAidGhpcyI6ICcgKyBuKSwgbiBpbnN0YW5jZW9mIHQuZWEuY29uc3RydWN0b3IgfHwgdihyICsgJyBpbmNvbXBhdGlibGUgd2l0aCAidGhpcyIgb2YgdHlwZSAnICsgbi5jb25zdHJ1Y3Rvci5uYW1lKSwgbi5BLmRhIHx8IHYoImNhbm5vdCBjYWxsIGVtc2NyaXB0ZW4gYmluZGluZyBtZXRob2QgIiArIHIgKyAiIG9uIGRlbGV0ZWQgb2JqZWN0IiksIHduKG4uQS5kYSwgbi5BLmZhLmVhLCB0LmVhKTsKICAgIH0KICAgIHZhciBEbiA9IFtdLCBqID0gW3t9LCB7IHZhbHVlOiB2b2lkIDAgfSwgeyB2YWx1ZTogbnVsbCB9LCB7IHZhbHVlOiAhMCB9LCB7IHZhbHVlOiAhMSB9XTsKICAgIGZ1bmN0aW9uIEJuKG4pIHsKICAgICAgNCA8IG4gJiYgLS1qW25dLkphID09PSAwICYmIChqW25dID0gdm9pZCAwLCBEbi5wdXNoKG4pKTsKICAgIH0KICAgIGZ1bmN0aW9uIGVuKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSB2b2lkIDA6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIG51bGw6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlICEwOgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgY2FzZSAhMToKICAgICAgICAgIHJldHVybiA0OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB2YXIgdCA9IERuLmxlbmd0aCA/IERuLnBvcCgpIDogai5sZW5ndGg7CiAgICAgICAgICByZXR1cm4galt0XSA9IHsgSmE6IDEsIHZhbHVlOiBuIH0sIHQ7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHJuKG4pIHsKICAgICAgaWYgKG4gPT09IG51bGwpIHJldHVybiAibnVsbCI7CiAgICAgIHZhciB0ID0gdHlwZW9mIG47CiAgICAgIHJldHVybiB0ID09PSAib2JqZWN0IiB8fCB0ID09PSAiYXJyYXkiIHx8IHQgPT09ICJmdW5jdGlvbiIgPyBuLnRvU3RyaW5nKCkgOiAiIiArIG47CiAgICB9CiAgICBmdW5jdGlvbiBpZShuLCB0KSB7CiAgICAgIHN3aXRjaCAodCkgewogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiBmdW5jdGlvbihyKSB7CiAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShudFtyID4+IDJdKTsKICAgICAgICAgIH07CiAgICAgICAgY2FzZSAzOgogICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHIpIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKHR0W3IgPj4gM10pOwogICAgICAgICAgfTsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBmbG9hdCB0eXBlOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIGFlKG4pIHsKICAgICAgdmFyIHQgPSBGdW5jdGlvbjsKICAgICAgaWYgKCEodCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSkgdGhyb3cgbmV3IFR5cGVFcnJvcigibmV3XyBjYWxsZWQgd2l0aCBjb25zdHJ1Y3RvciB0eXBlICIgKyB0eXBlb2YgdCArICIgd2hpY2ggaXMgbm90IGEgZnVuY3Rpb24iKTsKICAgICAgdmFyIHIgPSBqbih0Lm5hbWUgfHwgInVua25vd25GdW5jdGlvbk5hbWUiLCBmdW5jdGlvbigpIHsKICAgICAgfSk7CiAgICAgIHJldHVybiByLnByb3RvdHlwZSA9IHQucHJvdG90eXBlLCByID0gbmV3IHIoKSwgbiA9IHQuYXBwbHkociwgbiksIG4gaW5zdGFuY2VvZiBPYmplY3QgPyBuIDogcjsKICAgIH0KICAgIGZ1bmN0aW9uIG9lKG4sIHQsIHIpIHsKICAgICAgc3dpdGNoICh0KSB7CiAgICAgICAgY2FzZSAwOgogICAgICAgICAgcmV0dXJuIHIgPyBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBZW2ldOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIEZbaV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMToKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gUVtpID4+IDFdOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIHluW2kgPj4gMV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4ga1tpID4+IDJdOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIFVbaSA+PiAyXTsKICAgICAgICAgIH07CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gaW50ZWdlciB0eXBlOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHpuKG4pIHsKICAgICAgcmV0dXJuIG4gfHwgdigiQ2Fubm90IHVzZSBkZWxldGVkIHZhbC4gaGFuZGxlID0gIiArIG4pLCBqW25dLnZhbHVlOwogICAgfQogICAgZnVuY3Rpb24gQ3QobiwgdCkgewogICAgICB2YXIgciA9IFhbbl07CiAgICAgIHJldHVybiByID09PSB2b2lkIDAgJiYgdih0ICsgIiBoYXMgdW5rbm93biB0eXBlICIgKyB3dChuKSksIHI7CiAgICB9CiAgICB2YXIgc2UgPSB7fSwgVHQgPSB7fTsKICAgIGZ1bmN0aW9uIEV0KCkgewogICAgICBpZiAoIVZuKSB7CiAgICAgICAgdmFyIG4gPSB7IFVTRVI6ICJ3ZWJfdXNlciIsIExPR05BTUU6ICJ3ZWJfdXNlciIsIFBBVEg6ICIvIiwgUFdEOiAiLyIsIEhPTUU6ICIvaG9tZS93ZWJfdXNlciIsIExBTkc6ICh0eXBlb2YgbmF2aWdhdG9yID09ICJvYmplY3QiICYmIG5hdmlnYXRvci5sYW5ndWFnZXMgJiYgbmF2aWdhdG9yLmxhbmd1YWdlc1swXSB8fCAiQyIpLnJlcGxhY2UoIi0iLCAiXyIpICsgIi5VVEYtOCIsIF86IE0gfHwgIi4vdGhpcy5wcm9ncmFtIiB9LCB0OwogICAgICAgIGZvciAodCBpbiBUdCkgblt0XSA9IFR0W3RdOwogICAgICAgIHZhciByID0gW107CiAgICAgICAgZm9yICh0IGluIG4pIHIucHVzaCh0ICsgIj0iICsgblt0XSk7CiAgICAgICAgVm4gPSByOwogICAgICB9CiAgICAgIHJldHVybiBWbjsKICAgIH0KICAgIHZhciBWbiwgUHQgPSBbXTsKICAgIGZ1bmN0aW9uIE10KG4pIHsKICAgICAgdmFyIHQgPSB7fSwgcjsKICAgICAgZm9yIChyIGluIG4pIChmdW5jdGlvbihpKSB7CiAgICAgICAgdmFyIG8gPSBuW2ldOwogICAgICAgIHRbaV0gPSB0eXBlb2YgbyA9PSAiZnVuY3Rpb24iID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICBQdC5wdXNoKGkpOwogICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgcmV0dXJuIG8uYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgICAgICAgIH0gZmluYWxseSB7CiAgICAgICAgICAgIGlmIChrbikgcmV0dXJuOwogICAgICAgICAgICB2YXIgcyA9IFB0LnBvcCgpOwogICAgICAgICAgICBLbihzID09PSBpKTsKICAgICAgICAgIH0KICAgICAgICB9IDogbzsKICAgICAgfSkocik7CiAgICAgIHJldHVybiB0OwogICAgfQogICAgZm9yICh2YXIgT3QgPSBBcnJheSgyNTYpLCBUbiA9IDA7IDI1NiA+IFRuOyArK1RuKSBPdFtUbl0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFRuKTsKICAgIGx0ID0gT3QsIG5uID0gZS5CaW5kaW5nRXJyb3IgPSBMbigiQmluZGluZ0Vycm9yIiksIGZ0ID0gZS5JbnRlcm5hbEVycm9yID0gTG4oIkludGVybmFsRXJyb3IiKSwgVi5wcm90b3R5cGUuaXNBbGlhc09mID0gZnVuY3Rpb24obikgewogICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgViAmJiBuIGluc3RhbmNlb2YgVikpIHJldHVybiAhMTsKICAgICAgdmFyIHQgPSB0aGlzLkEuZmEuZWEsIHIgPSB0aGlzLkEuZGEsIGkgPSBuLkEuZmEuZWE7CiAgICAgIGZvciAobiA9IG4uQS5kYTsgdC5pYTsgKSByID0gdC5xYShyKSwgdCA9IHQuaWE7CiAgICAgIGZvciAoOyBpLmlhOyApIG4gPSBpLnFhKG4pLCBpID0gaS5pYTsKICAgICAgcmV0dXJuIHQgPT09IGkgJiYgciA9PT0gbjsKICAgIH0sIFYucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7CiAgICAgIGlmICh0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5wYSkgcmV0dXJuIHRoaXMuQS5jb3VudC52YWx1ZSArPSAxLCB0aGlzOwogICAgICB2YXIgbiA9IHVuKE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLCB7IEE6IHsgdmFsdWU6IEt0KHRoaXMuQSkgfSB9KSk7CiAgICAgIHJldHVybiBuLkEuY291bnQudmFsdWUgKz0gMSwgbi5BLm9hID0gITEsIG47CiAgICB9LCBWLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbigpIHsKICAgICAgdGhpcy5BLmRhIHx8IE5uKHRoaXMpLCB0aGlzLkEub2EgJiYgIXRoaXMuQS5wYSAmJiB2KCJPYmplY3QgYWxyZWFkeSBzY2hlZHVsZWQgZm9yIGRlbGV0aW9uIiksIGR0KHRoaXMpLCBodCh0aGlzLkEpLCB0aGlzLkEucGEgfHwgKHRoaXMuQS5nYSA9IHZvaWQgMCwgdGhpcy5BLmRhID0gdm9pZCAwKTsKICAgIH0sIFYucHJvdG90eXBlLmlzRGVsZXRlZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gIXRoaXMuQS5kYTsKICAgIH0sIFYucHJvdG90eXBlLmRlbGV0ZUxhdGVyID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiB0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5vYSAmJiAhdGhpcy5BLnBhICYmIHYoIk9iamVjdCBhbHJlYWR5IHNjaGVkdWxlZCBmb3IgZGVsZXRpb24iKSwgbG4ucHVzaCh0aGlzKSwgbG4ubGVuZ3RoID09PSAxICYmIGNuICYmIGNuKFVuKSwgdGhpcy5BLm9hID0gITAsIHRoaXM7CiAgICB9LCBCLnByb3RvdHlwZS5EYSA9IGZ1bmN0aW9uKG4pIHsKICAgICAgcmV0dXJuIHRoaXMud2EgJiYgKG4gPSB0aGlzLndhKG4pKSwgbjsKICAgIH0sIEIucHJvdG90eXBlLnZhID0gZnVuY3Rpb24obikgewogICAgICB0aGlzLm5hICYmIHRoaXMubmEobik7CiAgICB9LCBCLnByb3RvdHlwZS5hcmdQYWNrQWR2YW5jZSA9IDgsIEIucHJvdG90eXBlLnJlYWRWYWx1ZUZyb21Qb2ludGVyID0gQW4sIEIucHJvdG90eXBlLmRlbGV0ZU9iamVjdCA9IGZ1bmN0aW9uKG4pIHsKICAgICAgbiAhPT0gbnVsbCAmJiBuLmRlbGV0ZSgpOwogICAgfSwgQi5wcm90b3R5cGUuZnJvbVdpcmVUeXBlID0gZnVuY3Rpb24obikgewogICAgICBmdW5jdGlvbiB0KCkgewogICAgICAgIHJldHVybiB0aGlzLnNhID8gX24odGhpcy5lYS5tYSwgeyBmYTogdGhpcy5HYSwgZGE6IHIsIGhhOiB0aGlzLCBnYTogbiB9KSA6IF9uKHRoaXMuZWEubWEsIHsgZmE6IHRoaXMsIGRhOiBuIH0pOwogICAgICB9CiAgICAgIHZhciByID0gdGhpcy5EYShuKTsKICAgICAgaWYgKCFyKSByZXR1cm4gdGhpcy52YShuKSwgbnVsbDsKICAgICAgdmFyIGkgPSByZSh0aGlzLmVhLCByKTsKICAgICAgaWYgKGkgIT09IHZvaWQgMCkKICAgICAgICByZXR1cm4gaS5BLmNvdW50LnZhbHVlID09PSAwID8gKGkuQS5kYSA9IHIsIGkuQS5nYSA9IG4sIGkuY2xvbmUoKSkgOiAoaSA9IGkuY2xvbmUoKSwgdGhpcy52YShuKSwgaSk7CiAgICAgIGlmIChpID0gdGhpcy5lYS5DYShyKSwgaSA9IHl0W2ldLCAhaSkgcmV0dXJuIHQuY2FsbCh0aGlzKTsKICAgICAgaSA9IHRoaXMucmEgPyBpLnphIDogaS5wb2ludGVyVHlwZTsKICAgICAgdmFyIG8gPSBtdChyLCB0aGlzLmVhLCBpLmVhKTsKICAgICAgcmV0dXJuIG8gPT09IG51bGwgPyB0LmNhbGwodGhpcykgOiB0aGlzLnNhID8gX24oaS5lYS5tYSwgeyBmYTogaSwgZGE6IG8sIGhhOiB0aGlzLCBnYTogbiB9KSA6IF9uKAogICAgICAgIGkuZWEubWEsCiAgICAgICAgeyBmYTogaSwgZGE6IG8gfQogICAgICApOwogICAgfSwgZS5nZXRJbmhlcml0ZWRJbnN0YW5jZUNvdW50ID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhmbikubGVuZ3RoOwogICAgfSwgZS5nZXRMaXZlSW5oZXJpdGVkSW5zdGFuY2VzID0gZnVuY3Rpb24oKSB7CiAgICAgIHZhciBuID0gW10sIHQ7CiAgICAgIGZvciAodCBpbiBmbikgZm4uaGFzT3duUHJvcGVydHkodCkgJiYgbi5wdXNoKGZuW3RdKTsKICAgICAgcmV0dXJuIG47CiAgICB9LCBlLmZsdXNoUGVuZGluZ0RlbGV0ZXMgPSBVbiwgZS5zZXREZWxheUZ1bmN0aW9uID0gZnVuY3Rpb24obikgewogICAgICBjbiA9IG4sIGxuLmxlbmd0aCAmJiBjbiAmJiBjbihVbik7CiAgICB9LCBndCA9IGUuVW5ib3VuZFR5cGVFcnJvciA9IExuKCJVbmJvdW5kVHlwZUVycm9yIiksIGUuY291bnRfZW12YWxfaGFuZGxlcyA9IGZ1bmN0aW9uKCkgewogICAgICBmb3IgKHZhciBuID0gMCwgdCA9IDU7IHQgPCBqLmxlbmd0aDsgKyt0KSBqW3RdICE9PSB2b2lkIDAgJiYgKytuOwogICAgICByZXR1cm4gbjsKICAgIH0sIGUuZ2V0X2ZpcnN0X2VtdmFsID0gZnVuY3Rpb24oKSB7CiAgICAgIGZvciAodmFyIG4gPSA1OyBuIDwgai5sZW5ndGg7ICsrbikgaWYgKGpbbl0gIT09IHZvaWQgMCkgcmV0dXJuIGpbbl07CiAgICAgIHJldHVybiBudWxsOwogICAgfSwgYXQucHVzaCh7IEJhOiBmdW5jdGlvbigpIHsKICAgICAgU3QoKTsKICAgIH0gfSk7CiAgICB2YXIgdWUgPSB7CiAgICAgIHo6IGZ1bmN0aW9uKG4pIHsKICAgICAgICByZXR1cm4gRW4obiArIDE2KSArIDE2OwogICAgICB9LAogICAgICB1OiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgdGhyb3cgbmV3IEp0KG4pLkZhKHQsIHIpLCAidW5jYXVnaHRfZXhjZXB0aW9uIiBpbiBtbiA/IG1uLnhhKysgOiBtbi54YSA9IDEsIG47CiAgICAgIH0sCiAgICAgIHc6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8pIHsKICAgICAgICB2YXIgcyA9IEZuKHIpOwogICAgICAgIHQgPSBSKHQpLCBEKG4sIHsgbmFtZTogdCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihsKSB7CiAgICAgICAgICByZXR1cm4gISFsOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGwsIGMpIHsKICAgICAgICAgIHJldHVybiBjID8gaSA6IG87CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBmdW5jdGlvbihsKSB7CiAgICAgICAgICBpZiAociA9PT0gMSkgdmFyIGMgPSBZOwogICAgICAgICAgZWxzZSBpZiAociA9PT0gMikgYyA9IFE7CiAgICAgICAgICBlbHNlIGlmIChyID09PSA0KSBjID0gazsKICAgICAgICAgIGVsc2UgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBib29sZWFuIHR5cGUgc2l6ZTogIiArIHQpOwogICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKGNbbCA+PiBzXSk7CiAgICAgICAgfSwga2E6IG51bGwgfSk7CiAgICAgIH0sCiAgICAgIGg6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8sIHMsIGwsIGMsIHksIGYsIGQsIGgsIHcpIHsKICAgICAgICBkID0gUihkKSwgcyA9IEcobywgcyksIGMgJiYgKGMgPSBHKGwsIGMpKSwgZiAmJiAoZiA9IEcoeSwgZikpLCB3ID0gRyhoLCB3KTsKICAgICAgICB2YXIgUCA9IEluKGQpOwogICAgICAgIHB0KFAsIGZ1bmN0aW9uKCkgewogICAgICAgICAgZG4oIkNhbm5vdCBjb25zdHJ1Y3QgIiArIGQgKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgW2ldKTsKICAgICAgICB9KSwgdG4oW24sIHQsIHJdLCBpID8gW2ldIDogW10sIGZ1bmN0aW9uKHApIHsKICAgICAgICAgIGlmIChwID0gcFswXSwgaSkKICAgICAgICAgICAgdmFyIE4gPSBwLmVhLCBiID0gTi5tYTsKICAgICAgICAgIGVsc2UgYiA9IFYucHJvdG90eXBlOwogICAgICAgICAgcCA9IGpuKFAsIGZ1bmN0aW9uKCkgewogICAgICAgICAgICBpZiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpICE9PSB4KSB0aHJvdyBuZXcgbm4oIlVzZSAnbmV3JyB0byBjb25zdHJ1Y3QgIiArIGQpOwogICAgICAgICAgICBpZiAoTC5sYSA9PT0gdm9pZCAwKSB0aHJvdyBuZXcgbm4oZCArICIgaGFzIG5vIGFjY2Vzc2libGUgY29uc3RydWN0b3IiKTsKICAgICAgICAgICAgdmFyIGJ0ID0gTC5sYVthcmd1bWVudHMubGVuZ3RoXTsKICAgICAgICAgICAgaWYgKGJ0ID09PSB2b2lkIDApIHRocm93IG5ldyBubigiVHJpZWQgdG8gaW52b2tlIGN0b3Igb2YgIiArIGQgKyAiIHdpdGggaW52YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVycyAoIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiKSAtIGV4cGVjdGVkICgiICsgT2JqZWN0LmtleXMoTC5sYSkudG9TdHJpbmcoKSArICIpIHBhcmFtZXRlcnMgaW5zdGVhZCEiKTsKICAgICAgICAgICAgcmV0dXJuIGJ0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgICB9KTsKICAgICAgICAgIHZhciB4ID0gT2JqZWN0LmNyZWF0ZShiLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBwIH0gfSk7CiAgICAgICAgICBwLnByb3RvdHlwZSA9IHg7CiAgICAgICAgICB2YXIgTCA9IG5ldyBxdChkLCBwLCB4LCB3LCBOLCBzLCBjLCBmKTsKICAgICAgICAgIE4gPSBuZXcgQihkLCBMLCAhMCwgITEpLCBiID0gbmV3IEIoZCArICIqIiwgTCwgITEsICExKTsKICAgICAgICAgIHZhciBobiA9IG5ldyBCKGQgKyAiIGNvbnN0KiIsIEwsICExLCAhMCk7CiAgICAgICAgICByZXR1cm4geXRbbl0gPSB7IHBvaW50ZXJUeXBlOiBiLCB6YTogaG4gfSwgdnQoUCwgcCksIFtOLCBiLCBobl07CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGc6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8sIHMpIHsKICAgICAgICBLbigwIDwgdCk7CiAgICAgICAgdmFyIGwgPSBBdCh0LCByKTsKICAgICAgICBvID0gRyhpLCBvKTsKICAgICAgICB2YXIgYyA9IFtzXSwgeSA9IFtdOwogICAgICAgIHRuKFtdLCBbbl0sIGZ1bmN0aW9uKGYpIHsKICAgICAgICAgIGYgPSBmWzBdOwogICAgICAgICAgdmFyIGQgPSAiY29uc3RydWN0b3IgIiArIGYubmFtZTsKICAgICAgICAgIGlmIChmLmVhLmxhID09PSB2b2lkIDAgJiYgKGYuZWEubGEgPSBbXSksIGYuZWEubGFbdCAtIDFdICE9PSB2b2lkIDApIHRocm93IG5ldyBubigiQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIGNvbnN0cnVjdG9ycyB3aXRoIGlkZW50aWNhbCBudW1iZXIgb2YgcGFyYW1ldGVycyAoIiArICh0IC0gMSkgKyAiKSBmb3IgY2xhc3MgJyIgKyBmLm5hbWUgKyAiJyEgT3ZlcmxvYWQgcmVzb2x1dGlvbiBpcyBjdXJyZW50bHkgb25seSBwZXJmb3JtZWQgdXNpbmcgdGhlIHBhcmFtZXRlciBjb3VudCwgbm90IGFjdHVhbCB0eXBlIGluZm8hIik7CiAgICAgICAgICByZXR1cm4gZi5lYS5sYVt0IC0gMV0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgZG4oIkNhbm5vdCBjb25zdHJ1Y3QgIiArIGYubmFtZSArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBsKTsKICAgICAgICAgIH0sIHRuKFtdLCBsLCBmdW5jdGlvbihoKSB7CiAgICAgICAgICAgIHJldHVybiBmLmVhLmxhW3QgLSAxXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIGFyZ3VtZW50cy5sZW5ndGggIT09IHQgLSAxICYmIHYoZCArICIgY2FsbGVkIHdpdGggIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiIGFyZ3VtZW50cywgZXhwZWN0ZWQgIiArICh0IC0gMSkpLCB5Lmxlbmd0aCA9IDAsIGMubGVuZ3RoID0gdDsKICAgICAgICAgICAgICBmb3IgKHZhciB3ID0gMTsgdyA8IHQ7ICsrdykgY1t3XSA9IGhbd10udG9XaXJlVHlwZSgKICAgICAgICAgICAgICAgIHksCiAgICAgICAgICAgICAgICBhcmd1bWVudHNbdyAtIDFdCiAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICByZXR1cm4gdyA9IG8uYXBwbHkobnVsbCwgYyksIENuKHkpLCBoWzBdLmZyb21XaXJlVHlwZSh3KTsKICAgICAgICAgICAgfSwgW107CiAgICAgICAgICB9KSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGI6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8sIHMsIGwsIGMsIHksIGYpIHsKICAgICAgICB0ID0gUih0KSwgbyA9IEcoaSwgbyksIHRuKFtdLCBbbl0sIGZ1bmN0aW9uKGQpIHsKICAgICAgICAgIGQgPSBkWzBdOwogICAgICAgICAgdmFyIGggPSBkLm5hbWUgKyAiLiIgKyB0LCB3ID0geyBnZXQ6IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBkbigiQ2Fubm90IGFjY2VzcyAiICsgaCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbciwgbF0pOwogICAgICAgICAgfSwgZW51bWVyYWJsZTogITAsIGNvbmZpZ3VyYWJsZTogITAgfTsKICAgICAgICAgIHJldHVybiB5ID8gdy5zZXQgPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgZG4oIkNhbm5vdCBhY2Nlc3MgIiArIGggKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgW3IsIGxdKTsKICAgICAgICAgIH0gOiB3LnNldCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICB2KGggKyAiIGlzIGEgcmVhZC1vbmx5IHByb3BlcnR5Iik7CiAgICAgICAgICB9LCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZC5lYS5tYSwgdCwgdyksIHRuKFtdLCB5ID8gW3IsIGxdIDogW3JdLCBmdW5jdGlvbihQKSB7CiAgICAgICAgICAgIHZhciBwID0gUFswXSwgTiA9IHsgZ2V0OiBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICB2YXIgeCA9IF90KHRoaXMsIGQsIGggKyAiIGdldHRlciIpOwogICAgICAgICAgICAgIHJldHVybiBwLmZyb21XaXJlVHlwZShvKHMsIHgpKTsKICAgICAgICAgICAgfSwgZW51bWVyYWJsZTogITAgfTsKICAgICAgICAgICAgaWYgKHkpIHsKICAgICAgICAgICAgICB5ID0gRyhjLCB5KTsKICAgICAgICAgICAgICB2YXIgYiA9IFBbMV07CiAgICAgICAgICAgICAgTi5zZXQgPSBmdW5jdGlvbih4KSB7CiAgICAgICAgICAgICAgICB2YXIgTCA9IF90KHRoaXMsIGQsIGggKyAiIHNldHRlciIpLCBobiA9IFtdOwogICAgICAgICAgICAgICAgeShmLCBMLCBiLnRvV2lyZVR5cGUoaG4sIHgpKSwgQ24oaG4pOwogICAgICAgICAgICAgIH07CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkLmVhLm1hLCB0LCBOKSwgW107CiAgICAgICAgICB9KSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIHY6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUih0KSwgRChuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24ocikgewogICAgICAgICAgdmFyIGkgPSBqW3JdLnZhbHVlOwogICAgICAgICAgcmV0dXJuIEJuKHIpLCBpOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHIsIGkpIHsKICAgICAgICAgIHJldHVybiBlbihpKTsKICAgICAgICB9LCBhcmdQYWNrQWR2YW5jZTogOCwgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IEFuLCBrYTogbnVsbCB9KTsKICAgICAgfSwKICAgICAgbTogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIHIgPSBGbihyKSwgdCA9IFIodCksIEQobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gaTsKICAgICAgICAgIH0sCiAgICAgICAgICB0b1dpcmVUeXBlOiBmdW5jdGlvbihpLCBvKSB7CiAgICAgICAgICAgIGlmICh0eXBlb2YgbyAhPSAibnVtYmVyIiAmJiB0eXBlb2YgbyAhPSAiYm9vbGVhbiIpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0ICInICsgcm4obykgKyAnIiB0byAnICsgdGhpcy5uYW1lKTsKICAgICAgICAgICAgcmV0dXJuIG87CiAgICAgICAgICB9LAogICAgICAgICAgYXJnUGFja0FkdmFuY2U6IDgsCiAgICAgICAgICByZWFkVmFsdWVGcm9tUG9pbnRlcjogaWUodCwgciksCiAgICAgICAgICBrYTogbnVsbAogICAgICAgIH0pOwogICAgICB9LAogICAgICBjOiBmdW5jdGlvbihuLCB0LCByLCBpLCBvLCBzKSB7CiAgICAgICAgdmFyIGwgPSBBdCh0LCByKTsKICAgICAgICBuID0gUihuKSwgbyA9IEcoaSwgbyksIHB0KG4sIGZ1bmN0aW9uKCkgewogICAgICAgICAgZG4oIkNhbm5vdCBjYWxsICIgKyBuICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIGwpOwogICAgICAgIH0sIHQgLSAxKSwgdG4oW10sIGwsIGZ1bmN0aW9uKGMpIHsKICAgICAgICAgIHZhciB5ID0gbiwgZiA9IG47CiAgICAgICAgICBjID0gW2NbMF0sIG51bGxdLmNvbmNhdChjLnNsaWNlKDEpKTsKICAgICAgICAgIHZhciBkID0gbywgaCA9IGMubGVuZ3RoOwogICAgICAgICAgMiA+IGggJiYgdigiYXJnVHlwZXMgYXJyYXkgc2l6ZSBtaXNtYXRjaCEgTXVzdCBhdCBsZWFzdCBnZXQgcmV0dXJuIHZhbHVlIGFuZCAndGhpcycgdHlwZXMhIik7CiAgICAgICAgICBmb3IgKHZhciB3ID0gY1sxXSAhPT0gbnVsbCAmJiAhMSwgUCA9ICExLCBwID0gMTsgcCA8IGMubGVuZ3RoOyArK3ApIGlmIChjW3BdICE9PSBudWxsICYmIGNbcF0ua2EgPT09IHZvaWQgMCkgewogICAgICAgICAgICBQID0gITA7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgfQogICAgICAgICAgdmFyIE4gPSBjWzBdLm5hbWUgIT09ICJ2b2lkIiwgYiA9ICIiLCB4ID0gIiI7CiAgICAgICAgICBmb3IgKHAgPSAwOyBwIDwgaCAtIDI7ICsrcCkgYiArPSAocCAhPT0gMCA/ICIsICIgOiAiIikgKyAiYXJnIiArIHAsIHggKz0gKHAgIT09IDAgPyAiLCAiIDogIiIpICsgImFyZyIgKyBwICsgIldpcmVkIjsKICAgICAgICAgIGYgPSAicmV0dXJuIGZ1bmN0aW9uICIgKyBJbihmKSArICIoIiArIGIgKyBgKSB7CmlmIChhcmd1bWVudHMubGVuZ3RoICE9PSBgICsgKGggLSAyKSArIGApIHsKdGhyb3dCaW5kaW5nRXJyb3IoJ2Z1bmN0aW9uIGAgKyBmICsgIiBjYWxsZWQgd2l0aCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLCBleHBlY3RlZCAiICsgKGggLSAyKSArIGAgYXJncyEnKTsKfQpgLCBQICYmIChmICs9IGB2YXIgZGVzdHJ1Y3RvcnMgPSBbXTsKYCk7CiAgICAgICAgICB2YXIgTCA9IFAgPyAiZGVzdHJ1Y3RvcnMiIDogIm51bGwiOwogICAgICAgICAgZm9yIChiID0gInRocm93QmluZGluZ0Vycm9yIGludm9rZXIgZm4gcnVuRGVzdHJ1Y3RvcnMgcmV0VHlwZSBjbGFzc1BhcmFtIi5zcGxpdCgiICIpLCBkID0gW3YsIGQsIHMsIENuLCBjWzBdLCBjWzFdXSwgdyAmJiAoZiArPSAidmFyIHRoaXNXaXJlZCA9IGNsYXNzUGFyYW0udG9XaXJlVHlwZSgiICsgTCArIGAsIHRoaXMpOwpgKSwgcCA9IDA7IHAgPCBoIC0gMjsgKytwKSBmICs9ICJ2YXIgYXJnIiArIHAgKyAiV2lyZWQgPSBhcmdUeXBlIiArIHAgKyAiLnRvV2lyZVR5cGUoIiArIEwgKyAiLCBhcmciICsgcCArICIpOyAvLyAiICsgY1twICsgMl0ubmFtZSArIGAKYCwgYi5wdXNoKCJhcmdUeXBlIiArIHApLCBkLnB1c2goY1twICsgMl0pOwogICAgICAgICAgaWYgKHcgJiYgKHggPSAidGhpc1dpcmVkIiArICgwIDwgeC5sZW5ndGggPyAiLCAiIDogIiIpICsgeCksIGYgKz0gKE4gPyAidmFyIHJ2ID0gIiA6ICIiKSArICJpbnZva2VyKGZuIiArICgwIDwgeC5sZW5ndGggPyAiLCAiIDogIiIpICsgeCArIGApOwpgLCBQKSBmICs9IGBydW5EZXN0cnVjdG9ycyhkZXN0cnVjdG9ycyk7CmA7CiAgICAgICAgICBlbHNlIGZvciAocCA9IHcgPyAxIDogMjsgcCA8IGMubGVuZ3RoOyArK3ApIGggPSBwID09PSAxID8gInRoaXNXaXJlZCIgOiAiYXJnIiArIChwIC0gMikgKyAiV2lyZWQiLCBjW3BdLmthICE9PSBudWxsICYmIChmICs9IGggKyAiX2R0b3IoIiArIGggKyAiKTsgLy8gIiArIGNbcF0ubmFtZSArIGAKYCwgYi5wdXNoKGggKyAiX2R0b3IiKSwgZC5wdXNoKGNbcF0ua2EpKTsKICAgICAgICAgIHJldHVybiBOICYmIChmICs9IGB2YXIgcmV0ID0gcmV0VHlwZS5mcm9tV2lyZVR5cGUocnYpOwpyZXR1cm4gcmV0OwpgKSwgYi5wdXNoKGYgKyBgfQpgKSwgYyA9IGFlKGIpLmFwcGx5KG51bGwsIGQpLCB2dCh5LCBjLCB0IC0gMSksIFtdOwogICAgICAgIH0pOwogICAgICB9LAogICAgICBlOiBmdW5jdGlvbihuLCB0LCByLCBpLCBvKSB7CiAgICAgICAgZnVuY3Rpb24gcyhmKSB7CiAgICAgICAgICByZXR1cm4gZjsKICAgICAgICB9CiAgICAgICAgdCA9IFIodCksIG8gPT09IC0xICYmIChvID0gNDI5NDk2NzI5NSk7CiAgICAgICAgdmFyIGwgPSBGbihyKTsKICAgICAgICBpZiAoaSA9PT0gMCkgewogICAgICAgICAgdmFyIGMgPSAzMiAtIDggKiByOwogICAgICAgICAgcyA9IGZ1bmN0aW9uKGYpIHsKICAgICAgICAgICAgcmV0dXJuIGYgPDwgYyA+Pj4gYzsKICAgICAgICAgIH07CiAgICAgICAgfQogICAgICAgIHZhciB5ID0gdC5pbmRleE9mKCJ1bnNpZ25lZCIpICE9IC0xOwogICAgICAgIEQobiwgeyBuYW1lOiB0LCBmcm9tV2lyZVR5cGU6IHMsIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGYsIGQpIHsKICAgICAgICAgIGlmICh0eXBlb2YgZCAhPSAibnVtYmVyIiAmJiB0eXBlb2YgZCAhPSAiYm9vbGVhbiIpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0ICInICsgcm4oZCkgKyAnIiB0byAnICsgdGhpcy5uYW1lKTsKICAgICAgICAgIGlmIChkIDwgaSB8fCBkID4gbykgdGhyb3cgbmV3IFR5cGVFcnJvcignUGFzc2luZyBhIG51bWJlciAiJyArIHJuKGQpICsgJyIgZnJvbSBKUyBzaWRlIHRvIEMvQysrIHNpZGUgdG8gYW4gYXJndW1lbnQgb2YgdHlwZSAiJyArIHQgKyAnIiwgd2hpY2ggaXMgb3V0c2lkZSB0aGUgdmFsaWQgcmFuZ2UgWycgKyBpICsgIiwgIiArIG8gKyAiXSEiKTsKICAgICAgICAgIHJldHVybiB5ID8gZCA+Pj4gMCA6IGQgfCAwOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogb2UodCwgbCwgaSAhPT0gMCksIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBkOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgZnVuY3Rpb24gaShzKSB7CiAgICAgICAgICBzID4+PSAyOwogICAgICAgICAgdmFyIGwgPSBVOwogICAgICAgICAgcmV0dXJuIG5ldyBvKEssIGxbcyArIDFdLCBsW3NdKTsKICAgICAgICB9CiAgICAgICAgdmFyIG8gPSBbSW50OEFycmF5LCBVaW50OEFycmF5LCBJbnQxNkFycmF5LCBVaW50MTZBcnJheSwgSW50MzJBcnJheSwgVWludDMyQXJyYXksIEZsb2F0MzJBcnJheSwgRmxvYXQ2NEFycmF5XVt0XTsKICAgICAgICByID0gUihyKSwgRChuLCB7IG5hbWU6IHIsIGZyb21XaXJlVHlwZTogaSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBpIH0sIHsgRWE6ICEwIH0pOwogICAgICB9LAogICAgICBuOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdCA9IFIodCk7CiAgICAgICAgdmFyIHIgPSB0ID09PSAic3RkOjpzdHJpbmciOwogICAgICAgIEQobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICB2YXIgbyA9IFVbaSA+PiAyXTsKICAgICAgICAgICAgaWYgKHIpIGZvciAodmFyIHMgPSBpICsgNCwgbCA9IDA7IGwgPD0gbzsgKytsKSB7CiAgICAgICAgICAgICAgdmFyIGMgPSBpICsgNCArIGw7CiAgICAgICAgICAgICAgaWYgKGwgPT0gbyB8fCBGW2NdID09IDApIHsKICAgICAgICAgICAgICAgIGlmIChzKSB7CiAgICAgICAgICAgICAgICAgIHZhciB5ID0gcywgZiA9IEYsIGQgPSB5ICsgKGMgLSBzKTsKICAgICAgICAgICAgICAgICAgZm9yIChzID0geTsgZltzXSAmJiAhKHMgPj0gZCk7ICkgKytzOwogICAgICAgICAgICAgICAgICBpZiAoMTYgPCBzIC0geSAmJiBmLnN1YmFycmF5ICYmIFFuKSB5ID0gUW4uZGVjb2RlKGYuc3ViYXJyYXkoeSwgcykpOwogICAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICBmb3IgKGQgPSAiIjsgeSA8IHM7ICkgewogICAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBmW3krK107CiAgICAgICAgICAgICAgICAgICAgICBpZiAoaCAmIDEyOCkgewogICAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IGZbeSsrXSAmIDYzOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGggJiAyMjQpID09IDE5MikgZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChoICYgMzEpIDw8IDYgfCB3KTsKICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFAgPSBmW3krK10gJiA2MzsKICAgICAgICAgICAgICAgICAgICAgICAgICBoID0gKGggJiAyNDApID09IDIyNCA/IChoICYgMTUpIDw8IDEyIHwgdyA8PCA2IHwgUCA6IChoICYgNykgPDwgMTggfCB3IDw8IDEyIHwgUCA8PCA2IHwgZlt5KytdICYgNjMsIDY1NTM2ID4gaCA/IGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShoKSA6IChoIC09IDY1NTM2LCBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTYgfCBoID4+IDEwLCA1NjMyMCB8IGggJiAxMDIzKSk7CiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoaCk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIHkgPSBkOwogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9IGVsc2UgeSA9ICIiOwogICAgICAgICAgICAgICAgaWYgKHAgPT09IHZvaWQgMCkgdmFyIHAgPSB5OwogICAgICAgICAgICAgICAgZWxzZSBwICs9ICJcMCIsIHAgKz0geTsKICAgICAgICAgICAgICAgIHMgPSBjICsgMTsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgZm9yIChwID0gQXJyYXkobyksIGwgPSAwOyBsIDwgbzsgKytsKSBwW2xdID0gU3RyaW5nLmZyb21DaGFyQ29kZShGW2kgKyA0ICsgbF0pOwogICAgICAgICAgICAgIHAgPSBwLmpvaW4oIiIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiB6KGkpLCBwOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIG8pIHsKICAgICAgICAgICAgbyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyICYmIChvID0gbmV3IFVpbnQ4QXJyYXkobykpOwogICAgICAgICAgICB2YXIgcyA9IHR5cGVvZiBvID09ICJzdHJpbmciOwogICAgICAgICAgICBzIHx8IG8gaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IG8gaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSB8fCBvIGluc3RhbmNlb2YgSW50OEFycmF5IHx8IHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gc3RkOjpzdHJpbmciKTsKICAgICAgICAgICAgdmFyIGwgPSAociAmJiBzID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IDAsIGQgPSAwOyBkIDwgby5sZW5ndGg7ICsrZCkgewogICAgICAgICAgICAgICAgdmFyIGggPSBvLmNoYXJDb2RlQXQoZCk7CiAgICAgICAgICAgICAgICA1NTI5NiA8PSBoICYmIDU3MzQzID49IGggJiYgKGggPSA2NTUzNiArICgoaCAmIDEwMjMpIDw8IDEwKSB8IG8uY2hhckNvZGVBdCgrK2QpICYgMTAyMyksIDEyNyA+PSBoID8gKytmIDogZiA9IDIwNDcgPj0gaCA/IGYgKyAyIDogNjU1MzUgPj0gaCA/IGYgKyAzIDogZiArIDQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHJldHVybiBmOwogICAgICAgICAgICB9IDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgcmV0dXJuIG8ubGVuZ3RoOwogICAgICAgICAgICB9KSgpLCBjID0gRW4oNCArIGwgKyAxKTsKICAgICAgICAgICAgaWYgKFVbYyA+PiAyXSA9IGwsIHIgJiYgcykgVXQobywgYyArIDQsIGwgKyAxKTsKICAgICAgICAgICAgZWxzZSBpZiAocykgZm9yIChzID0gMDsgcyA8IGw7ICsrcykgewogICAgICAgICAgICAgIHZhciB5ID0gby5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgICAgIDI1NSA8IHkgJiYgKHooYyksIHYoIlN0cmluZyBoYXMgVVRGLTE2IGNvZGUgdW5pdHMgdGhhdCBkbyBub3QgZml0IGluIDggYml0cyIpKSwgRltjICsgNCArIHNdID0geTsKICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIGZvciAocyA9IDA7IHMgPCBsOyArK3MpIEZbYyArIDQgKyBzXSA9IG9bc107CiAgICAgICAgICAgIHJldHVybiBpICE9PSBudWxsICYmIGkucHVzaCh6LCBjKSwgYzsKICAgICAgICAgIH0sCiAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBBbiwKICAgICAgICAgIGthOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHooaSk7CiAgICAgICAgICB9CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGo6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBpZiAociA9IFIociksIHQgPT09IDIpCiAgICAgICAgICB2YXIgaSA9IER0LCBvID0gQnQsIHMgPSB6dCwgbCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICByZXR1cm4geW47CiAgICAgICAgICB9LCBjID0gMTsKICAgICAgICBlbHNlIHQgPT09IDQgJiYgKGkgPSBWdCwgbyA9IEd0LCBzID0gWXQsIGwgPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiBVOwogICAgICAgIH0sIGMgPSAyKTsKICAgICAgICBEKG4sIHsgbmFtZTogciwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICBmb3IgKHZhciBmID0gVVt5ID4+IDJdLCBkID0gbCgpLCBoLCB3ID0geSArIDQsIFAgPSAwOyBQIDw9IGY7ICsrUCkgewogICAgICAgICAgICB2YXIgcCA9IHkgKyA0ICsgUCAqIHQ7CiAgICAgICAgICAgIChQID09IGYgfHwgZFtwID4+IGNdID09IDApICYmICh3ID0gaSh3LCBwIC0gdyksIGggPT09IHZvaWQgMCA/IGggPSB3IDogKGggKz0gIlwwIiwgaCArPSB3KSwgdyA9IHAgKyB0KTsKICAgICAgICAgIH0KICAgICAgICAgIHJldHVybiB6KHkpLCBoOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHksIGYpIHsKICAgICAgICAgIHR5cGVvZiBmICE9ICJzdHJpbmciICYmIHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gQysrIHN0cmluZyB0eXBlICIgKyByKTsKICAgICAgICAgIHZhciBkID0gcyhmKSwgaCA9IEVuKDQgKyBkICsgdCk7CiAgICAgICAgICByZXR1cm4gVVtoID4+IDJdID0gZCA+PiBjLCBvKGYsIGggKyA0LCBkICsgdCksIHkgIT09IG51bGwgJiYgeS5wdXNoKHosIGgpLCBoOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sIGthOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICB6KHkpOwogICAgICAgIH0gfSk7CiAgICAgIH0sCiAgICAgIHg6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUih0KSwgRChuLCB7IFFhOiAhMCwgbmFtZTogdCwgYXJnUGFja0FkdmFuY2U6IDAsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSB9KTsKICAgICAgfSwKICAgICAgazogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIG4gPSB6bihuKSwgdCA9IEN0KHQsICJlbXZhbDo6YXMiKTsKICAgICAgICB2YXIgaSA9IFtdLCBvID0gZW4oaSk7CiAgICAgICAgcmV0dXJuIGtbciA+PiAyXSA9IG8sIHQudG9XaXJlVHlwZShpLCBuKTsKICAgICAgfSwKICAgICAgaTogQm4sCiAgICAgIGw6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICByZXR1cm4gbiA9IHpuKG4pLCB0ID0gem4odCksIGVuKG5bdF0pOwogICAgICB9LAogICAgICBwOiBmdW5jdGlvbihuKSB7CiAgICAgICAgdmFyIHQgPSBzZVtuXTsKICAgICAgICByZXR1cm4gZW4odCA9PT0gdm9pZCAwID8gUihuKSA6IHQpOwogICAgICB9LAogICAgICBvOiBmdW5jdGlvbihuKSB7CiAgICAgICAgQ24oaltuXS52YWx1ZSksIEJuKG4pOwogICAgICB9LAogICAgICB5OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgcmV0dXJuIG4gPSBDdChuLCAiX2VtdmFsX3Rha2VfdmFsdWUiKSwgbiA9IG4ucmVhZFZhbHVlRnJvbVBvaW50ZXIodCksIGVuKG4pOwogICAgICB9LAogICAgICBmOiBmdW5jdGlvbigpIHsKICAgICAgICBzbigpOwogICAgICB9LAogICAgICBxOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgRi5jb3B5V2l0aGluKG4sIHQsIHQgKyByKTsKICAgICAgfSwKICAgICAgcjogZnVuY3Rpb24obikgewogICAgICAgIG4gPj4+PSAwOwogICAgICAgIHZhciB0ID0gRi5sZW5ndGg7CiAgICAgICAgaWYgKDIxNDc0ODM2NDggPCBuKSByZXR1cm4gITE7CiAgICAgICAgZm9yICh2YXIgciA9IDE7IDQgPj0gcjsgciAqPSAyKSB7CiAgICAgICAgICB2YXIgaSA9IHQgKiAoMSArIDAuMiAvIHIpOwogICAgICAgICAgaSA9IE1hdGgubWluKGksIG4gKyAxMDA2NjMyOTYpLCBpID0gTWF0aC5tYXgoMTY3NzcyMTYsIG4sIGkpLCAwIDwgaSAlIDY1NTM2ICYmIChpICs9IDY1NTM2IC0gaSAlIDY1NTM2KTsKICAgICAgICAgIG46IHsKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICBILmdyb3coTWF0aC5taW4oMjE0NzQ4MzY0OCwgaSkgLSBLLmJ5dGVMZW5ndGggKyA2NTUzNSA+Pj4gMTYpLCBldChILmJ1ZmZlcik7CiAgICAgICAgICAgICAgdmFyIG8gPSAxOwogICAgICAgICAgICAgIGJyZWFrIG47CiAgICAgICAgICAgIH0gY2F0Y2ggewogICAgICAgICAgICB9CiAgICAgICAgICAgIG8gPSB2b2lkIDA7CiAgICAgICAgICB9CiAgICAgICAgICBpZiAobykgcmV0dXJuICEwOwogICAgICAgIH0KICAgICAgICByZXR1cm4gITE7CiAgICAgIH0sCiAgICAgIHM6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB2YXIgciA9IDA7CiAgICAgICAgcmV0dXJuIEV0KCkuZm9yRWFjaChmdW5jdGlvbihpLCBvKSB7CiAgICAgICAgICB2YXIgcyA9IHQgKyByOwogICAgICAgICAgZm9yIChvID0ga1tuICsgNCAqIG8gPj4gMl0gPSBzLCBzID0gMDsgcyA8IGkubGVuZ3RoOyArK3MpIFlbbysrID4+IDBdID0gaS5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgWVtvID4+IDBdID0gMCwgciArPSBpLmxlbmd0aCArIDE7CiAgICAgICAgfSksIDA7CiAgICAgIH0sCiAgICAgIHQ6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB2YXIgciA9IEV0KCk7CiAgICAgICAga1tuID4+IDJdID0gci5sZW5ndGg7CiAgICAgICAgdmFyIGkgPSAwOwogICAgICAgIHJldHVybiByLmZvckVhY2goZnVuY3Rpb24obykgewogICAgICAgICAgaSArPSBvLmxlbmd0aCArIDE7CiAgICAgICAgfSksIGtbdCA+PiAyXSA9IGksIDA7CiAgICAgIH0sCiAgICAgIGE6IEgKICAgIH07CiAgICAoZnVuY3Rpb24oKSB7CiAgICAgIGZ1bmN0aW9uIG4ocykgewogICAgICAgIHMgPSBzLmV4cG9ydHMsIHMgPSBNdChzKSwgZS5hc20gPSBzLCBaLS0sIGUubW9uaXRvclJ1bkRlcGVuZGVuY2llcyAmJiBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMoWiksIFogPT0gMCAmJiBvbiAmJiAocyA9IG9uLCBvbiA9IG51bGwsIHMoKSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gdChzKSB7CiAgICAgICAgbihzLmluc3RhbmNlKTsKICAgICAgfQogICAgICBmdW5jdGlvbiByKHMpIHsKICAgICAgICByZXR1cm4gWHQoKS50aGVuKGZ1bmN0aW9uKGwpIHsKICAgICAgICAgIHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShsLCBpKTsKICAgICAgICB9KS50aGVuKHMsIGZ1bmN0aW9uKGwpIHsKICAgICAgICAgIEUoImZhaWxlZCB0byBhc3luY2hyb25vdXNseSBwcmVwYXJlIHdhc206ICIgKyBsKSwgc24obCk7CiAgICAgICAgfSk7CiAgICAgIH0KICAgICAgdmFyIGkgPSB7IGE6IHVlIH07CiAgICAgIGlmIChaKyssIGUubW9uaXRvclJ1bkRlcGVuZGVuY2llcyAmJiBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMoWiksIGUuaW5zdGFudGlhdGVXYXNtKSB0cnkgewogICAgICAgIHZhciBvID0gZS5pbnN0YW50aWF0ZVdhc20oaSwgbik7CiAgICAgICAgcmV0dXJuIG8gPSBNdChvKTsKICAgICAgfSBjYXRjaCAocykgewogICAgICAgIHJldHVybiBFKCJNb2R1bGUuaW5zdGFudGlhdGVXYXNtIGNhbGxiYWNrIGZhaWxlZCB3aXRoIGVycm9yOiAiICsgcyksICExOwogICAgICB9CiAgICAgIHJldHVybiBmdW5jdGlvbigpIHsKICAgICAgICBpZiAoVyB8fCB0eXBlb2YgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcgIT0gImZ1bmN0aW9uIiB8fCBzdCgpIHx8IFJuKCJmaWxlOi8vIikgfHwgdHlwZW9mIGZldGNoICE9ICJmdW5jdGlvbiIpIHJldHVybiByKHQpOwogICAgICAgIGZldGNoKCQsIHsgY3JlZGVudGlhbHM6ICJzYW1lLW9yaWdpbiIgfSkudGhlbihmdW5jdGlvbihzKSB7CiAgICAgICAgICByZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcocywgaSkudGhlbih0LCBmdW5jdGlvbihsKSB7CiAgICAgICAgICAgIHJldHVybiBFKCJ3YXNtIHN0cmVhbWluZyBjb21waWxlIGZhaWxlZDogIiArIGwpLCBFKCJmYWxsaW5nIGJhY2sgdG8gQXJyYXlCdWZmZXIgaW5zdGFudGlhdGlvbiIpLCByKHQpOwogICAgICAgICAgfSk7CiAgICAgICAgfSk7CiAgICAgIH0oKSwge307CiAgICB9KSgpOwogICAgdmFyIFN0ID0gZS5fX193YXNtX2NhbGxfY3RvcnMgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChTdCA9IGUuX19fd2FzbV9jYWxsX2N0b3JzID0gZS5hc20uQikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIEVuID0gZS5fbWFsbG9jID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoRW4gPSBlLl9tYWxsb2MgPSBlLmFzbS5DKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgeiA9IGUuX2ZyZWUgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuICh6ID0gZS5fZnJlZSA9IGUuYXNtLkQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBXdCA9IGUuX19fZ2V0VHlwZU5hbWUgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChXdCA9IGUuX19fZ2V0VHlwZU5hbWUgPSBlLmFzbS5FKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfTsKICAgIGUuX19fZW1iaW5kX3JlZ2lzdGVyX25hdGl2ZV9hbmRfYnVpbHRpbl90eXBlcyA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX19fZW1iaW5kX3JlZ2lzdGVyX25hdGl2ZV9hbmRfYnVpbHRpbl90eXBlcyA9IGUuYXNtLkYpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWkgPSBlLmFzbS5HKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpID0gZS5hc20uSCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9pID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2kgPSBlLmFzbS5JKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWkgPSBlLmFzbS5KKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaSA9IGUuYXNtLkspLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfZmlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2ZpaSA9IGUuYXNtLkwpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpZiA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlmID0gZS5hc20uTSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaSA9IGUuYXNtLk4pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpID0gZS5hc20uTykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWlpID0gZS5hc20uUCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpID0gZS5hc20uUSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWlpaSA9IGUuYXNtLlIpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWkgPSBlLmFzbS5TKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWlkaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlpZGkgPSBlLmFzbS5UKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWRpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWRpID0gZS5hc20uVSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlpaSA9IGUuYXNtLlYpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlpID0gZS5hc20uVykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpID0gZS5hc20uWCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpaWkgPSBlLmFzbS5ZKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpID0gZS5hc20uWikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWkgPSBlLmFzbS5fKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RhcnRfdW53aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RhcnRfdW53aW5kID0gZS5hc20uJCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0b3BfdW53aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RvcF91bndpbmQgPSBlLmFzbS5hYSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0YXJ0X3Jld2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0YXJ0X3Jld2luZCA9IGUuYXNtLmJhKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RvcF9yZXdpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdG9wX3Jld2luZCA9IGUuYXNtLmNhKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfTsKICAgIHZhciBQbjsKICAgIG9uID0gZnVuY3Rpb24gbigpIHsKICAgICAgUG4gfHwgR24oKSwgUG4gfHwgKG9uID0gbik7CiAgICB9OwogICAgZnVuY3Rpb24gR24oKSB7CiAgICAgIGZ1bmN0aW9uIG4oKSB7CiAgICAgICAgaWYgKCFQbiAmJiAoUG4gPSAhMCwgZS5jYWxsZWRSdW4gPSAhMCwgIWtuKSkgewogICAgICAgICAgaWYgKHBuKGF0KSwgcG4oWnQpLCBtKGUpLCBlLm9uUnVudGltZUluaXRpYWxpemVkICYmIGUub25SdW50aW1lSW5pdGlhbGl6ZWQoKSwgZS5wb3N0UnVuKSBmb3IgKHR5cGVvZiBlLnBvc3RSdW4gPT0gImZ1bmN0aW9uIiAmJiAoZS5wb3N0UnVuID0gW2UucG9zdFJ1bl0pOyBlLnBvc3RSdW4ubGVuZ3RoOyApIHsKICAgICAgICAgICAgdmFyIHQgPSBlLnBvc3RSdW4uc2hpZnQoKTsKICAgICAgICAgICAgb3QudW5zaGlmdCh0KTsKICAgICAgICAgIH0KICAgICAgICAgIHBuKG90KTsKICAgICAgICB9CiAgICAgIH0KICAgICAgaWYgKCEoMCA8IFopKSB7CiAgICAgICAgaWYgKGUucHJlUnVuKSBmb3IgKHR5cGVvZiBlLnByZVJ1biA9PSAiZnVuY3Rpb24iICYmIChlLnByZVJ1biA9IFtlLnByZVJ1bl0pOyBlLnByZVJ1bi5sZW5ndGg7ICkgJHQoKTsKICAgICAgICBwbihpdCksIDAgPCBaIHx8IChlLnNldFN0YXR1cyA/IChlLnNldFN0YXR1cygiUnVubmluZy4uLiIpLCBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgICAgICAgICAgZS5zZXRTdGF0dXMoIiIpOwogICAgICAgICAgfSwgMSksIG4oKTsKICAgICAgICB9LCAxKSkgOiBuKCkpOwogICAgICB9CiAgICB9CiAgICBpZiAoZS5ydW4gPSBHbiwgZS5wcmVJbml0KSBmb3IgKHR5cGVvZiBlLnByZUluaXQgPT0gImZ1bmN0aW9uIiAmJiAoZS5wcmVJbml0ID0gW2UucHJlSW5pdF0pOyAwIDwgZS5wcmVJbml0Lmxlbmd0aDsgKSBlLnByZUluaXQucG9wKCkoKTsKICAgIHJldHVybiBHbigpLCB1LnJlYWR5OwogIH07Cn0oKTsKY2xhc3MgbWUgewogIGNvbnN0cnVjdG9yKCkgewogICAgWW4odGhpcywgInNhbVdhc21Nb2R1bGUiKTsKICB9CiAgZ2V0T3ZlcnJpZGRlbk1vZHVsZXModSwgZSkgewogICAgcmV0dXJuIHsKICAgICAgbG9jYXRlRmlsZTogKG0pID0+IG5ldyBVUkwoZSB8fCBtLCB1KS5ocmVmCiAgICB9OwogIH0KICBhc3luYyBoYW5kbGVNaXNzaW5nT3JJbnZhbGlkU2FtTW9kdWxlKHUsIGUpIHsKICAgIHRyeSB7CiAgICAgIGNvbnN0IG0gPSBhd2FpdCBmZXRjaCh1KTsKICAgICAgaWYgKCFtLm9rKQogICAgICAgIHRocm93IG5ldyBJKAogICAgICAgICAgYFRoZSBwYXRoIHRvICR7ZX0gaXMgaW5jb3JyZWN0IG9yIHRoZSBtb2R1bGUgaXMgbWlzc2luZy4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7dX1gCiAgICAgICAgKTsKICAgICAgY29uc3QgZyA9IGF3YWl0IG0uYXJyYXlCdWZmZXIoKTsKICAgICAgaWYgKCFXZWJBc3NlbWJseS52YWxpZGF0ZShnKSkKICAgICAgICB0aHJvdyBuZXcgSSgKICAgICAgICAgIGBUaGUgcHJvdmlkZWQgJHtlfSBpcyBub3QgYSB2YWxpZCBXQVNNIG1vZHVsZS4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7dX1gCiAgICAgICAgKTsKICAgIH0gY2F0Y2ggKG0pIHsKICAgICAgaWYgKG0gaW5zdGFuY2VvZiBJKQogICAgICAgIHRocm93IGNvbnNvbGUuZXJyb3IoCiAgICAgICAgICAiWW91IGNhbiBmaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgaG93IHRvIGhvc3Qgd2FzbSBmaWxlcyBoZXJlOiBodHRwczovL2RldmVsb3BlcnMuaW5ub3ZhdHJpY3MuY29tL2RpZ2l0YWwtb25ib2FyZGluZy90ZWNobmljYWwvcmVtb3RlL2RvdC13ZWItZG9jdW1lbnQvbGF0ZXN0L2RvY3VtZW50YXRpb24vI19ob3N0aW5nX3NhbV93YXNtIgogICAgICAgICksIG07CiAgICB9CiAgfQogIGFzeW5jIGdldFdhc21GaWxlTmFtZSgpIHsKICAgIHJldHVybiBhd2FpdCBmZSgpID8ga3Quc2ltZCA6IGt0LnNhbTsKICB9CiAgYXN5bmMgaW5pdFNhbU1vZHVsZSh1LCBlID0gIi93YXNtIikgewogICAgaWYgKHRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgcmV0dXJuOwogICAgY29uc3QgbSA9IGF3YWl0IHRoaXMuZ2V0V2FzbUZpbGVOYW1lKCksIGcgPSBgJHtlfS8ke219YDsKICAgIHRyeSB7CiAgICAgIHRoaXMuc2FtV2FzbU1vZHVsZSA9IGF3YWl0IHBlKHRoaXMuZ2V0T3ZlcnJpZGRlbk1vZHVsZXModSwgZykpOwogICAgfSBjYXRjaCB7CiAgICAgIHRocm93IGF3YWl0IHRoaXMuaGFuZGxlTWlzc2luZ09ySW52YWxpZFNhbU1vZHVsZShnLCBtKSwgbmV3IEkoIkNvdWxkIG5vdCBpbml0IGRldGVjdG9yLiIpOwogICAgfQogIH0KICBhc3luYyBnZXRTYW1WZXJzaW9uKCkgewogICAgdmFyIGU7CiAgICBjb25zdCB1ID0gYXdhaXQgKChlID0gdGhpcy5zYW1XYXNtTW9kdWxlKSA9PSBudWxsID8gdm9pZCAwIDogZS5nZXRJbmZvU3RyaW5nKCkpOwogICAgcmV0dXJuIHUgPT0gbnVsbCA/IHZvaWQgMCA6IHUudHJpbSgpOwogIH0KICAvKgogICAqIEluIFRTIDUuMi4wIHdhcyBhZGRlZCBzcGVjaWFsIGtleXdvcmQgInVzaW5nIiB3aGljaCBjb3VsZCBiZSBwZXJmZWN0IGZvciB0aGlzIGNhc2UuCiAgICogVW5mb3J0dW5hdGVseSwgdml0ZSBwcmVhY3QgcGx1Z2luIGRvZXMgbm90IHN1cHBvcnQgdGhpcyB2ZXJzaW9uIG9mIFRTIHlldC4KICAgKiBDaGVjayBwb3NzaWJpbGl0eSBvZiB1c2luZyAidXNpbmciIGtleXdvcmQgd2hlbiB2aXRlIHByZWFjdCBwbHVnaW4gdXBkYXRlcwogICAqLwogIGFsbG9jYXRlTWVtb3J5KHUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgSSgiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgcmV0dXJuIHRoaXMuc2FtV2FzbU1vZHVsZS5fbWFsbG9jKHUpOwogIH0KICByZWxlYXNlTWVtb3J5KHUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgSSgiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgdGhpcy5zYW1XYXNtTW9kdWxlLl9mcmVlKHUpOwogIH0KICB3cml0ZURhdGFUb01lbW9yeSh1LCBlKSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IEkoIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIHRoaXMuc2FtV2FzbU1vZHVsZS5IRUFQVTguc2V0KHUsIGUpOwogIH0KfQovKioKICogQGxpY2Vuc2UKICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQwogKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMAogKi8KY29uc3QgeHQgPSBTeW1ib2woIkNvbWxpbmsucHJveHkiKSwgdmUgPSBTeW1ib2woIkNvbWxpbmsuZW5kcG9pbnQiKSwgZ2UgPSBTeW1ib2woIkNvbWxpbmsucmVsZWFzZVByb3h5IiksIFpuID0gU3ltYm9sKCJDb21saW5rLmZpbmFsaXplciIpLCBPbiA9IFN5bWJvbCgiQ29tbGluay50aHJvd24iKSwgRnQgPSAoYSkgPT4gdHlwZW9mIGEgPT0gIm9iamVjdCIgJiYgYSAhPT0gbnVsbCB8fCB0eXBlb2YgYSA9PSAiZnVuY3Rpb24iLCB3ZSA9IHsKICBjYW5IYW5kbGU6IChhKSA9PiBGdChhKSAmJiBhW3h0XSwKICBzZXJpYWxpemUoYSkgewogICAgY29uc3QgeyBwb3J0MTogdSwgcG9ydDI6IGUgfSA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpOwogICAgcmV0dXJuIEpuKGEsIHUpLCBbZSwgW2VdXTsKICB9LAogIGRlc2VyaWFsaXplKGEpIHsKICAgIHJldHVybiBhLnN0YXJ0KCksIFRlKGEpOwogIH0KfSwgQWUgPSB7CiAgY2FuSGFuZGxlOiAoYSkgPT4gRnQoYSkgJiYgT24gaW4gYSwKICBzZXJpYWxpemUoeyB2YWx1ZTogYSB9KSB7CiAgICBsZXQgdTsKICAgIHJldHVybiBhIGluc3RhbmNlb2YgRXJyb3IgPyB1ID0gewogICAgICBpc0Vycm9yOiAhMCwKICAgICAgdmFsdWU6IHsKICAgICAgICBtZXNzYWdlOiBhLm1lc3NhZ2UsCiAgICAgICAgbmFtZTogYS5uYW1lLAogICAgICAgIHN0YWNrOiBhLnN0YWNrCiAgICAgIH0KICAgIH0gOiB1ID0geyBpc0Vycm9yOiAhMSwgdmFsdWU6IGEgfSwgW3UsIFtdXTsKICB9LAogIGRlc2VyaWFsaXplKGEpIHsKICAgIHRocm93IGEuaXNFcnJvciA/IE9iamVjdC5hc3NpZ24obmV3IEVycm9yKGEudmFsdWUubWVzc2FnZSksIGEudmFsdWUpIDogYS52YWx1ZTsKICB9Cn0sIEl0ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoWwogIFsicHJveHkiLCB3ZV0sCiAgWyJ0aHJvdyIsIEFlXQpdKTsKZnVuY3Rpb24gX2UoYSwgdSkgewogIGZvciAoY29uc3QgZSBvZiBhKQogICAgaWYgKHUgPT09IGUgfHwgZSA9PT0gIioiIHx8IGUgaW5zdGFuY2VvZiBSZWdFeHAgJiYgZS50ZXN0KHUpKQogICAgICByZXR1cm4gITA7CiAgcmV0dXJuICExOwp9CmZ1bmN0aW9uIEpuKGEsIHUgPSBnbG9iYWxUaGlzLCBlID0gWyIqIl0pIHsKICB1LmFkZEV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBmdW5jdGlvbiBtKGcpIHsKICAgIGlmICghZyB8fCAhZy5kYXRhKQogICAgICByZXR1cm47CiAgICBpZiAoIV9lKGUsIGcub3JpZ2luKSkgewogICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgb3JpZ2luICcke2cub3JpZ2lufScgZm9yIGNvbWxpbmsgcHJveHlgKTsKICAgICAgcmV0dXJuOwogICAgfQogICAgY29uc3QgeyBpZDogQywgdHlwZTogQSwgcGF0aDogTSB9ID0gT2JqZWN0LmFzc2lnbih7IHBhdGg6IFtdIH0sIGcuZGF0YSksIE8gPSAoZy5kYXRhLmFyZ3VtZW50TGlzdCB8fCBbXSkubWFwKEopOwogICAgbGV0IFQ7CiAgICB0cnkgewogICAgICBjb25zdCBfID0gTS5zbGljZSgwLCAtMSkucmVkdWNlKChFLCBXKSA9PiBFW1ddLCBhKSwgUyA9IE0ucmVkdWNlKChFLCBXKSA9PiBFW1ddLCBhKTsKICAgICAgc3dpdGNoIChBKSB7CiAgICAgICAgY2FzZSAiR0VUIjoKICAgICAgICAgIFQgPSBTOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiU0VUIjoKICAgICAgICAgIF9bTS5zbGljZSgtMSlbMF1dID0gSihnLmRhdGEudmFsdWUpLCBUID0gITA7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJBUFBMWSI6CiAgICAgICAgICBUID0gUy5hcHBseShfLCBPKTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIkNPTlNUUlVDVCI6CiAgICAgICAgICB7CiAgICAgICAgICAgIGNvbnN0IEUgPSBuZXcgUyguLi5PKTsKICAgICAgICAgICAgVCA9IFNlKEUpOwogICAgICAgICAgfQogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiRU5EUE9JTlQiOgogICAgICAgICAgewogICAgICAgICAgICBjb25zdCB7IHBvcnQxOiBFLCBwb3J0MjogVyB9ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7CiAgICAgICAgICAgIEpuKGEsIFcpLCBUID0gT2UoRSwgW0VdKTsKICAgICAgICAgIH0KICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIlJFTEVBU0UiOgogICAgICAgICAgVCA9IHZvaWQgMDsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICByZXR1cm47CiAgICAgIH0KICAgIH0gY2F0Y2ggKF8pIHsKICAgICAgVCA9IHsgdmFsdWU6IF8sIFtPbl06IDAgfTsKICAgIH0KICAgIFByb21pc2UucmVzb2x2ZShUKS5jYXRjaCgoXykgPT4gKHsgdmFsdWU6IF8sIFtPbl06IDAgfSkpLnRoZW4oKF8pID0+IHsKICAgICAgY29uc3QgW1MsIEVdID0gYm4oXyk7CiAgICAgIHUucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBTKSwgeyBpZDogQyB9KSwgRSksIEEgPT09ICJSRUxFQVNFIiAmJiAodS5yZW1vdmVFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgbSksIGp0KHUpLCBabiBpbiBhICYmIHR5cGVvZiBhW1puXSA9PSAiZnVuY3Rpb24iICYmIGFbWm5dKCkpOwogICAgfSkuY2F0Y2goKF8pID0+IHsKICAgICAgY29uc3QgW1MsIEVdID0gYm4oewogICAgICAgIHZhbHVlOiBuZXcgVHlwZUVycm9yKCJVbnNlcmlhbGl6YWJsZSByZXR1cm4gdmFsdWUiKSwKICAgICAgICBbT25dOiAwCiAgICAgIH0pOwogICAgICB1LnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgUyksIHsgaWQ6IEMgfSksIEUpOwogICAgfSk7CiAgfSksIHUuc3RhcnQgJiYgdS5zdGFydCgpOwp9CmZ1bmN0aW9uIENlKGEpIHsKICByZXR1cm4gYS5jb25zdHJ1Y3Rvci5uYW1lID09PSAiTWVzc2FnZVBvcnQiOwp9CmZ1bmN0aW9uIGp0KGEpIHsKICBDZShhKSAmJiBhLmNsb3NlKCk7Cn0KZnVuY3Rpb24gVGUoYSwgdSkgewogIHJldHVybiBYbihhLCBbXSwgdSk7Cn0KZnVuY3Rpb24gTW4oYSkgewogIGlmIChhKQogICAgdGhyb3cgbmV3IEVycm9yKCJQcm94eSBoYXMgYmVlbiByZWxlYXNlZCBhbmQgaXMgbm90IHVzZWFibGUiKTsKfQpmdW5jdGlvbiBMdChhKSB7CiAgcmV0dXJuIGFuKGEsIHsKICAgIHR5cGU6ICJSRUxFQVNFIgogIH0pLnRoZW4oKCkgPT4gewogICAganQoYSk7CiAgfSk7Cn0KY29uc3QgU24gPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSwgV24gPSAiRmluYWxpemF0aW9uUmVnaXN0cnkiIGluIGdsb2JhbFRoaXMgJiYgbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KChhKSA9PiB7CiAgY29uc3QgdSA9IChTbi5nZXQoYSkgfHwgMCkgLSAxOwogIFNuLnNldChhLCB1KSwgdSA9PT0gMCAmJiBMdChhKTsKfSk7CmZ1bmN0aW9uIEVlKGEsIHUpIHsKICBjb25zdCBlID0gKFNuLmdldCh1KSB8fCAwKSArIDE7CiAgU24uc2V0KHUsIGUpLCBXbiAmJiBXbi5yZWdpc3RlcihhLCB1LCBhKTsKfQpmdW5jdGlvbiBQZShhKSB7CiAgV24gJiYgV24udW5yZWdpc3RlcihhKTsKfQpmdW5jdGlvbiBYbihhLCB1ID0gW10sIGUgPSBmdW5jdGlvbigpIHsKfSkgewogIGxldCBtID0gITE7CiAgY29uc3QgZyA9IG5ldyBQcm94eShlLCB7CiAgICBnZXQoQywgQSkgewogICAgICBpZiAoTW4obSksIEEgPT09IGdlKQogICAgICAgIHJldHVybiAoKSA9PiB7CiAgICAgICAgICBQZShnKSwgTHQoYSksIG0gPSAhMDsKICAgICAgICB9OwogICAgICBpZiAoQSA9PT0gInRoZW4iKSB7CiAgICAgICAgaWYgKHUubGVuZ3RoID09PSAwKQogICAgICAgICAgcmV0dXJuIHsgdGhlbjogKCkgPT4gZyB9OwogICAgICAgIGNvbnN0IE0gPSBhbihhLCB7CiAgICAgICAgICB0eXBlOiAiR0VUIiwKICAgICAgICAgIHBhdGg6IHUubWFwKChPKSA9PiBPLnRvU3RyaW5nKCkpCiAgICAgICAgfSkudGhlbihKKTsKICAgICAgICByZXR1cm4gTS50aGVuLmJpbmQoTSk7CiAgICAgIH0KICAgICAgcmV0dXJuIFhuKGEsIFsuLi51LCBBXSk7CiAgICB9LAogICAgc2V0KEMsIEEsIE0pIHsKICAgICAgTW4obSk7CiAgICAgIGNvbnN0IFtPLCBUXSA9IGJuKE0pOwogICAgICByZXR1cm4gYW4oYSwgewogICAgICAgIHR5cGU6ICJTRVQiLAogICAgICAgIHBhdGg6IFsuLi51LCBBXS5tYXAoKF8pID0+IF8udG9TdHJpbmcoKSksCiAgICAgICAgdmFsdWU6IE8KICAgICAgfSwgVCkudGhlbihKKTsKICAgIH0sCiAgICBhcHBseShDLCBBLCBNKSB7CiAgICAgIE1uKG0pOwogICAgICBjb25zdCBPID0gdVt1Lmxlbmd0aCAtIDFdOwogICAgICBpZiAoTyA9PT0gdmUpCiAgICAgICAgcmV0dXJuIGFuKGEsIHsKICAgICAgICAgIHR5cGU6ICJFTkRQT0lOVCIKICAgICAgICB9KS50aGVuKEopOwogICAgICBpZiAoTyA9PT0gImJpbmQiKQogICAgICAgIHJldHVybiBYbihhLCB1LnNsaWNlKDAsIC0xKSk7CiAgICAgIGNvbnN0IFtULCBfXSA9IFJ0KE0pOwogICAgICByZXR1cm4gYW4oYSwgewogICAgICAgIHR5cGU6ICJBUFBMWSIsCiAgICAgICAgcGF0aDogdS5tYXAoKFMpID0+IFMudG9TdHJpbmcoKSksCiAgICAgICAgYXJndW1lbnRMaXN0OiBUCiAgICAgIH0sIF8pLnRoZW4oSik7CiAgICB9LAogICAgY29uc3RydWN0KEMsIEEpIHsKICAgICAgTW4obSk7CiAgICAgIGNvbnN0IFtNLCBPXSA9IFJ0KEEpOwogICAgICByZXR1cm4gYW4oYSwgewogICAgICAgIHR5cGU6ICJDT05TVFJVQ1QiLAogICAgICAgIHBhdGg6IHUubWFwKChUKSA9PiBULnRvU3RyaW5nKCkpLAogICAgICAgIGFyZ3VtZW50TGlzdDogTQogICAgICB9LCBPKS50aGVuKEopOwogICAgfQogIH0pOwogIHJldHVybiBFZShnLCBhKSwgZzsKfQpmdW5jdGlvbiBNZShhKSB7CiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGEpOwp9CmZ1bmN0aW9uIFJ0KGEpIHsKICBjb25zdCB1ID0gYS5tYXAoYm4pOwogIHJldHVybiBbdS5tYXAoKGUpID0+IGVbMF0pLCBNZSh1Lm1hcCgoZSkgPT4gZVsxXSkpXTsKfQpjb25zdCBOdCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpOwpmdW5jdGlvbiBPZShhLCB1KSB7CiAgcmV0dXJuIE50LnNldChhLCB1KSwgYTsKfQpmdW5jdGlvbiBTZShhKSB7CiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYSwgeyBbeHRdOiAhMCB9KTsKfQpmdW5jdGlvbiBibihhKSB7CiAgZm9yIChjb25zdCBbdSwgZV0gb2YgSXQpCiAgICBpZiAoZS5jYW5IYW5kbGUoYSkpIHsKICAgICAgY29uc3QgW20sIGddID0gZS5zZXJpYWxpemUoYSk7CiAgICAgIHJldHVybiBbCiAgICAgICAgewogICAgICAgICAgdHlwZTogIkhBTkRMRVIiLAogICAgICAgICAgbmFtZTogdSwKICAgICAgICAgIHZhbHVlOiBtCiAgICAgICAgfSwKICAgICAgICBnCiAgICAgIF07CiAgICB9CiAgcmV0dXJuIFsKICAgIHsKICAgICAgdHlwZTogIlJBVyIsCiAgICAgIHZhbHVlOiBhCiAgICB9LAogICAgTnQuZ2V0KGEpIHx8IFtdCiAgXTsKfQpmdW5jdGlvbiBKKGEpIHsKICBzd2l0Y2ggKGEudHlwZSkgewogICAgY2FzZSAiSEFORExFUiI6CiAgICAgIHJldHVybiBJdC5nZXQoYS5uYW1lKS5kZXNlcmlhbGl6ZShhLnZhbHVlKTsKICAgIGNhc2UgIlJBVyI6CiAgICAgIHJldHVybiBhLnZhbHVlOwogIH0KfQpmdW5jdGlvbiBhbihhLCB1LCBlKSB7CiAgcmV0dXJuIG5ldyBQcm9taXNlKChtKSA9PiB7CiAgICBjb25zdCBnID0gV2UoKTsKICAgIGEuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGZ1bmN0aW9uIEMoQSkgewogICAgICAhQS5kYXRhIHx8ICFBLmRhdGEuaWQgfHwgQS5kYXRhLmlkICE9PSBnIHx8IChhLnJlbW92ZUV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBDKSwgbShBLmRhdGEpKTsKICAgIH0pLCBhLnN0YXJ0ICYmIGEuc3RhcnQoKSwgYS5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKHsgaWQ6IGcgfSwgdSksIGUpOwogIH0pOwp9CmZ1bmN0aW9uIFdlKCkgewogIHJldHVybiBuZXcgQXJyYXkoNCkuZmlsbCgwKS5tYXAoKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpLnRvU3RyaW5nKDE2KSkuam9pbigiLSIpOwp9CmZ1bmN0aW9uIEh0KGEsIHUpIHsKICByZXR1cm4gTWF0aC5zcXJ0KChhLnggLSB1LngpICoqIDIgKyAoYS55IC0gdS55KSAqKiAyKTsKfQpmdW5jdGlvbiBiZShhLCB1KSB7CiAgcmV0dXJuIHsKICAgIHg6IChhLnggKyB1LngpIC8gMiwKICAgIHk6IChhLnkgKyB1LnkpIC8gMgogIH07Cn0KZnVuY3Rpb24ga2UoYSwgdSkgewogIGlmIChhLmNvbmZpZGVuY2UgPD0gMCB8fCB1LmNvbmZpZGVuY2UgPD0gMCkKICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTsKICBjb25zdCBlID0gSHQoYS5jZW50ZXIsIHUuY2VudGVyKSwgbSA9IGJlKGEuY2VudGVyLCB1LmNlbnRlcik7CiAgcmV0dXJuIHsKICAgIHg6IG0ueCwKICAgIHk6IG0ueSArIGUgLyA0CiAgICAvLyBjYWxjdWxhdGlvbiBpcyB0YWtlbiBmcm9tIG1vYmlsZSB0ZWFtCiAgfTsKfQpmdW5jdGlvbiBSZShhLCB1LCBlKSB7CiAgaWYgKGEuY29uZmlkZW5jZSA8PSAwIHx8IHUuY29uZmlkZW5jZSA8PSAwKQogICAgcmV0dXJuIDA7CiAgY29uc3QgbSA9IEh0KGEuY2VudGVyLCB1LmNlbnRlciksIGcgPSB5ZShlLndpZHRoLCBlLmhlaWdodCk7CiAgcmV0dXJuIGhlKG0gLyBnKTsKfQpmdW5jdGlvbiAkbihhKSB7CiAgY29uc3QgeyBjZW50ZXJYOiB1LCBjZW50ZXJZOiBlLCBjb25maWRlbmNlOiBtLCBzaXplOiBnLCBzdGF0dXM6IEMgfSA9IGE7CiAgcmV0dXJuIHsKICAgIGNlbnRlcjogewogICAgICB4OiB1LAogICAgICB5OiBlCiAgICB9LAogICAgY29uZmlkZW5jZTogbSAvIDFlMywKICAgIHN0YXR1czogQyAvIDFlMywKICAgIHNpemU6IGcKICB9Owp9CmNsYXNzIHhlIGV4dGVuZHMgbWUgewogIHBhcnNlUmF3RGF0YSh1LCBlKSB7CiAgICBjb25zdCB7IGJyaWdodG5lc3M6IG0sIHNoYXJwbmVzczogZyB9ID0gdS5wYXJhbXMsIHsgYm90dG9tUmlnaHRYOiBDLCBib3R0b21SaWdodFk6IEEsIGxlZnRFeWU6IE0sIG1vdXRoOiBPLCByaWdodEV5ZTogVCwgdG9wTGVmdFg6IF8sIHRvcExlZnRZOiBTIH0gPSB1LCBFID0gJG4oTSksIFcgPSAkbihUKSwgSCA9ICRuKE8pOwogICAgcmV0dXJuIHsKICAgICAgY29uZmlkZW5jZTogdS5jb25maWRlbmNlIC8gMWUzLAogICAgICB0b3BMZWZ0OiB7CiAgICAgICAgeDogXywKICAgICAgICB5OiBTCiAgICAgIH0sCiAgICAgIGJvdHRvbVJpZ2h0OiB7CiAgICAgICAgeDogQywKICAgICAgICB5OiBBCiAgICAgIH0sCiAgICAgIGZhY2VDZW50ZXI6IGtlKEUsIFcpLAogICAgICBmYWNlU2l6ZTogUmUoRSwgVywgZSksCiAgICAgIGxlZnRFeWU6IEUsCiAgICAgIHJpZ2h0RXllOiBXLAogICAgICBtb3V0aDogSCwKICAgICAgYnJpZ2h0bmVzczogbSAvIDFlMywKICAgICAgc2hhcnBuZXNzOiBnIC8gMWUzCiAgICB9OwogIH0KICBhc3luYyBkZXRlY3QodSwgZSwgbSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBJKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICBjb25zdCBnID0gdGhpcy5hbGxvY2F0ZU1lbW9yeSh1Lmxlbmd0aCAqIHUuQllURVNfUEVSX0VMRU1FTlQpLCBDID0gdGhpcy5hbGxvY2F0ZU1lbW9yeSh1Lmxlbmd0aCAqIHUuQllURVNfUEVSX0VMRU1FTlQpOwogICAgdGhpcy53cml0ZURhdGFUb01lbW9yeSh1LCBnKSwgdGhpcy5zYW1XYXNtTW9kdWxlLmNvbnZlcnRUb1NhbUNvbG9ySW1hZ2UoCiAgICAgIGUud2lkdGgsCiAgICAgIGUuaGVpZ2h0LAogICAgICBnLAogICAgICBkZS5SR0JBLAogICAgICBDCiAgICApOwogICAgY29uc3QgQSA9IHRoaXMuc2FtV2FzbU1vZHVsZS5kZXRlY3RGYWNlUGFydHNXaXRoSW1hZ2VQYXJhbWV0ZXJzKAogICAgICBlLndpZHRoLAogICAgICBlLmhlaWdodCwKICAgICAgQywKICAgICAgMCwKICAgICAgMCwKICAgICAgLy8gcGFyYW1XaWR0aCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICAgMAogICAgICAvLyBwYXJhbUhlaWdodCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICk7CiAgICByZXR1cm4gdGhpcy5yZWxlYXNlTWVtb3J5KGcpLCB0aGlzLnJlbGVhc2VNZW1vcnkoQyksIHRoaXMucGFyc2VSYXdEYXRhKEEsIG0pOwogIH0KfQpKbih4ZSk7Cg==", id = (i) => Uint8Array.from(atob(i), (o) => o.charCodeAt(0)), Us = typeof window < "u" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);", id($g)], { type: "text/javascript;charset=utf-8" });
function od(i) {
  let o;
  try {
    if (o = Us && (window.URL || window.webkitURL).createObjectURL(Us), !o) throw "";
    const t = new Worker(o, {
      type: "module",
      name: i == null ? void 0 : i.name
    });
    return t.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(o);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + $g,
      {
        type: "module",
        name: i == null ? void 0 : i.name
      }
    );
  }
}
var An, Yt;
class rd {
  constructor(o) {
    ce(this, An);
    ce(this, Yt);
    se(this, An, o), se(this, Yt, /* @__PURE__ */ new Map());
  }
  validate() {
    X(this, An).forEach((o) => {
      X(this, Yt).set(o.name, o.evaluate());
    });
  }
  isValid() {
    return Array.from(X(this, Yt).values()).every((o) => o);
  }
  get result() {
    return X(this, Yt);
  }
  get validators() {
    return X(this, An);
  }
}
An = new WeakMap(), Yt = new WeakMap();
var ni, Ft;
class Xe {
  constructor(o, t) {
    ce(this, ni);
    ce(this, Ft);
    se(this, ni, o), se(this, Ft, t);
  }
  get threshold() {
    return X(this, Ft);
  }
  get name() {
    return X(this, ni);
  }
  isValueBelowThreshold(o) {
    return o < X(this, Ft);
  }
  isValueAboveThreshold(o) {
    return o > X(this, Ft);
  }
}
ni = new WeakMap(), Ft = new WeakMap();
var ii;
class ad extends Xe {
  constructor(t, e) {
    super("isNotDim", t);
    ce(this, ii);
    se(this, ii, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(X(this, ii));
  }
}
ii = new WeakMap();
var oi;
class sd extends Xe {
  constructor(t, e) {
    super("isNotSmall", t);
    ce(this, oi);
    se(this, oi, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(X(this, oi));
  }
}
oi = new WeakMap();
var ri;
class gd extends Xe {
  constructor(t, e) {
    super("isNotBright", t);
    ce(this, ri);
    se(this, ri, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(X(this, ri));
  }
}
ri = new WeakMap();
var ai;
class cd extends Xe {
  constructor(t, e) {
    super("isPresent", t);
    ce(this, ai);
    se(this, ai, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(X(this, ai));
  }
}
ai = new WeakMap();
var si;
class ld extends Xe {
  constructor(t, e) {
    super("isSharp", t);
    ce(this, si);
    se(this, si, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(X(this, si));
  }
}
si = new WeakMap();
var gi;
class xd extends Xe {
  constructor(t, e) {
    super("isLeftEyePresent", t);
    ce(this, gi);
    se(this, gi, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(X(this, gi));
  }
}
gi = new WeakMap();
var ci;
class ud extends Xe {
  constructor(t, e) {
    super("isMouthPresent", t);
    ce(this, ci);
    se(this, ci, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(X(this, ci));
  }
}
ci = new WeakMap();
var li;
class Id extends Xe {
  constructor(t, e) {
    super("isMouthScoreNotTooLow", t);
    ce(this, li);
    se(this, li, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(X(this, li));
  }
}
li = new WeakMap();
var xi;
class dd extends Xe {
  constructor(t, e) {
    super("isMouthScoreNotTooHigh", t);
    ce(this, xi);
    se(this, xi, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(X(this, xi));
  }
}
xi = new WeakMap();
var ui;
class Cd extends Xe {
  constructor(t, e) {
    super("isNotLarge", t);
    ce(this, ui);
    se(this, ui, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(X(this, ui));
  }
}
ui = new WeakMap();
var Ii;
class hd extends Xe {
  constructor(t, e) {
    super("isNotPitched", t || 1415 + -853 * -6 + -6433);
    ce(this, Ii);
    se(this, Ii, e);
  }
  evaluate() {
    const { z: t } = X(this, Ii) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
}
Ii = new WeakMap();
var di;
class pd extends Xe {
  constructor(t, e) {
    super("isRightEyePresent", t);
    ce(this, di);
    se(this, di, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(X(this, di));
  }
}
di = new WeakMap();
var Ci, bn;
class fd extends Xe {
  constructor(t, e, n) {
    super("isNotOutOfBounds", t);
    ce(this, Ci);
    ce(this, bn);
    se(this, Ci, e), se(this, bn, n);
  }
  evaluate() {
    const t = Dg(X(this, bn), this.threshold), e = Yg(X(this, Ci), X(this, bn));
    return mI(e, t);
  }
}
Ci = new WeakMap(), bn = new WeakMap();
class md {
  static getFaceValidationInstance(o, t, e, n) {
    return new rd([new cd(o.faceConfidence, t.confidence), new xd(o.leftEye.confidence, t.leftEye.confidence), new pd(o.rightEye.confidence, t.rightEye.confidence), new sd(o.minFaceSizeRatio, t.faceSize), new Cd(o.maxFaceSizeRatio, t.faceSize), new ld(o.sharpnessThreshold, t.sharpness), new ad(o.brightnessLowThreshold, t.brightness), new gd(o.brightnessHighThreshold, t.brightness), new fd(o.outOfBoundsThreshold, t, e), new hd(o.pitchAngleAccelerationThreshold, n), new ud(o.mouth.confidence, t.mouth.confidence), new dd(o.mouth.status.max, t.mouth.status), new Id(o.mouth.status.min, t.mouth.status)]);
  }
}
const Ao = class Ao extends XI {
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
        !r && e.push(Yx[n]);
      }), e;
    });
  }
  static async init() {
    const t = new od(), e = Ug(t), n = new Ao(), r = await new e();
    this._instance = n, this._instance.detector = r;
  }
  static async getInstance() {
    return !this._instance && await this.init(), this._instance;
  }
  setThresholds(t) {
    super.setThresholds(t);
    const { devicePitchAngleThreshold: e } = t;
    this.pitchAngleAccelerationThreshold = xu * Math.sin(e * (Math.PI / (-4 * -1030 + -361 * -1 + 187 * -23)));
  }
  restart() {
    super.restart(), Xs(Gt.INSTRUCTION_CHANGED, void (6567 + 626 * -8 + -1 * 1559), Tu);
  }
  validateDetectedObject(t, e) {
    const n = md.getFaceValidationInstance({ ...this.getThresholds(), pitchAngleAccelerationThreshold: this.pitchAngleAccelerationThreshold }, t, e, this.acceleration);
    return n.validate(), n;
  }
  async processImage({ image: t, timestamp: e }) {
    var T;
    const n = {};
    n.width = t.width, n.height = t.height;
    const r = n, a = Aa(r), s = Xu(t, a), g = Mu(s), x = {};
    x.width = s.width, x.height = s.height;
    const I = x;
    let u = await this.detector.detect(g, I, r);
    u = GI(r, u);
    const m = this.validateDetectedObject(u, r), { result: f } = m, y = this.getInstructionCode(f, m.isValid());
    if (f.get("isPresent")) {
      const S = {};
      S.image = g, S.timestamp = e, this.collectImagesForDuplicateDetection(S);
    }
    if (this.isInCandidateSelection) {
      if (this.bestImage && m.isValid() && this.isNewImageBetter(this.bestImage.detection, u)) {
        const S = { image: t, detection: un(u) };
        this.bestImage = S, this.candidateSelectionImages.push(S);
      }
    } else if ((T = this.lastImage) != null && T.isValid && m.isValid()) {
      const S = { image: t, detection: un(u) }, B = {};
      B.image = this.lastImage.image, B.detection = this.lastImage.detection;
      const R = B;
      this.isNewImageBetter(R.detection, S.detection) ? this.bestImage = S : this.bestImage = R, this.candidateSelectionImages.push(R, S), this.isInCandidateSelection = !0;
    } else m.isValid() ? this.lastImage = { instructionCode: y, isValid: !0, image: t, detection: un(u) } : this.lastImage = { instructionCode: y, isValid: !1, image: t, detection: un(u) };
    const Z = { detectedFace: un(u), instructionCode: y, invalidValidators: this.getInstructionCodesForValidators(f), isInCandidateSelection: this.isInCandidateSelection };
    return this.detectionRecord.push(Z.detectedFace), Xs(Gt.INSTRUCTION_CHANGED, y), Pu(Gt.DETECTED_FACE_CHANGED, Z.detectedFace, this.getThresholds().faceConfidence), Lu(Gt.FACE_DETECTION, Z.detectedFace, t), Z;
  }
};
j(Ao, "_instance");
let Mr = Ao;
const Ad = (i, o) => {
  const { handleError: t } = Vn(), [e, n] = Ye(), { acceleration: r } = bI();
  e && e.setAcceleration(r), be(() => {
    (async () => {
      const g = await Mr.getInstance();
      try {
        const x = {};
        x.wasmDirectoryPath = o, x.thresholds = i, await g.init(x);
      } catch (x) {
        if (x instanceof Error) {
          t(ie.fromError(x));
          return;
        }
      }
      n(g);
    })();
  }, [t, i, o]);
  const a = {};
  return a.controller = e, a;
};
var Tt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, _g = {}, zs = {}, bd = yd;
function yd(i, o) {
  for (var t = new Array(arguments.length - 1), e = 0, n = 2, r = !0; n < arguments.length; )
    t[e++] = arguments[n++];
  return new Promise(function(a, s) {
    t[e] = function(g) {
      if (r)
        if (r = !1, g)
          s(g);
        else {
          for (var x = new Array(arguments.length - 1), I = 0; I < x.length; )
            x[I++] = arguments[I];
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
var qg = {};
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
    for (var x = null, I = [], u = 0, m = 0, f; s < g; ) {
      var y = a[s++];
      switch (m) {
        case 0:
          I[u++] = t[y >> 2], f = (y & 3) << 4, m = 1;
          break;
        case 1:
          I[u++] = t[f | y >> 4], f = (y & 15) << 2, m = 2;
          break;
        case 2:
          I[u++] = t[f | y >> 6], I[u++] = t[y & 63], m = 0;
          break;
      }
      u > 8191 && ((x || (x = [])).push(String.fromCharCode.apply(String, I)), u = 0);
    }
    return m && (I[u++] = t[f], I[u++] = 61, m === 1 && (I[u++] = 61)), x ? (u && x.push(String.fromCharCode.apply(String, I.slice(0, u))), x.join("")) : String.fromCharCode.apply(String, I.slice(0, u));
  };
  var r = "invalid encoding";
  o.decode = function(a, s, g) {
    for (var x = g, I = 0, u, m = 0; m < a.length; ) {
      var f = a.charCodeAt(m++);
      if (f === 61 && I > 1)
        break;
      if ((f = e[f]) === void 0)
        throw Error(r);
      switch (I) {
        case 0:
          u = f, I = 1;
          break;
        case 1:
          s[g++] = u << 2 | (f & 48) >> 4, u = f, I = 2;
          break;
        case 2:
          s[g++] = (u & 15) << 4 | (f & 60) >> 2, u = f, I = 3;
          break;
        case 3:
          s[g++] = (u & 3) << 6 | f, I = 0;
          break;
      }
    }
    if (I === 1)
      throw Error(r);
    return g - x;
  }, o.test = function(a) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(a);
  };
})(qg);
var vd = ko;
function ko() {
  this._listeners = {};
}
ko.prototype.on = function(i, o, t) {
  return (this._listeners[i] || (this._listeners[i] = [])).push({
    fn: o,
    ctx: t || this
  }), this;
};
ko.prototype.off = function(i, o) {
  if (i === void 0)
    this._listeners = {};
  else if (o === void 0)
    this._listeners[i] = [];
  else
    for (var t = this._listeners[i], e = 0; e < t.length; )
      t[e].fn === o ? t.splice(e, 1) : ++e;
  return this;
};
ko.prototype.emit = function(i) {
  var o = this._listeners[i];
  if (o) {
    for (var t = [], e = 1; e < arguments.length; )
      t.push(arguments[e++]);
    for (e = 0; e < o.length; )
      o[e].fn.apply(o[e++].ctx, t);
  }
  return this;
};
var wd = Qs(Qs);
function Qs(i) {
  return typeof Float32Array < "u" ? function() {
    var o = new Float32Array([-0]), t = new Uint8Array(o.buffer), e = t[3] === 128;
    function n(g, x, I) {
      o[0] = g, x[I] = t[0], x[I + 1] = t[1], x[I + 2] = t[2], x[I + 3] = t[3];
    }
    function r(g, x, I) {
      o[0] = g, x[I] = t[3], x[I + 1] = t[2], x[I + 2] = t[1], x[I + 3] = t[0];
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
    i.writeFloatLE = o.bind(null, $s), i.writeFloatBE = o.bind(null, _s);
    function t(e, n, r) {
      var a = e(n, r), s = (a >> 31) * 2 + 1, g = a >>> 23 & 255, x = a & 8388607;
      return g === 255 ? x ? NaN : s * (1 / 0) : g === 0 ? s * 1401298464324817e-60 * x : s * Math.pow(2, g - 150) * (x + 8388608);
    }
    i.readFloatLE = t.bind(null, qs), i.readFloatBE = t.bind(null, e0);
  }(), typeof Float64Array < "u" ? function() {
    var o = new Float64Array([-0]), t = new Uint8Array(o.buffer), e = t[7] === 128;
    function n(g, x, I) {
      o[0] = g, x[I] = t[0], x[I + 1] = t[1], x[I + 2] = t[2], x[I + 3] = t[3], x[I + 4] = t[4], x[I + 5] = t[5], x[I + 6] = t[6], x[I + 7] = t[7];
    }
    function r(g, x, I) {
      o[0] = g, x[I] = t[7], x[I + 1] = t[6], x[I + 2] = t[5], x[I + 3] = t[4], x[I + 4] = t[3], x[I + 5] = t[2], x[I + 6] = t[1], x[I + 7] = t[0];
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
        var I;
        if (a < 22250738585072014e-324)
          I = a / 5e-324, e(I >>> 0, s, g + n), e((x << 31 | I / 4294967296) >>> 0, s, g + r);
        else {
          var u = Math.floor(Math.log(a) / Math.LN2);
          u === 1024 && (u = 1023), I = a * Math.pow(2, -u), e(I * 4503599627370496 >>> 0, s, g + n), e((x << 31 | u + 1023 << 20 | I * 1048576 & 1048575) >>> 0, s, g + r);
        }
      }
    }
    i.writeDoubleLE = o.bind(null, $s, 0, 4), i.writeDoubleBE = o.bind(null, _s, 4, 0);
    function t(e, n, r, a, s) {
      var g = e(a, s + n), x = e(a, s + r), I = (x >> 31) * 2 + 1, u = x >>> 20 & 2047, m = 4294967296 * (x & 1048575) + g;
      return u === 2047 ? m ? NaN : I * (1 / 0) : u === 0 ? I * 5e-324 * m : I * Math.pow(2, u - 1075) * (m + 4503599627370496);
    }
    i.readDoubleLE = t.bind(null, qs, 0, 4), i.readDoubleBE = t.bind(null, e0, 4, 0);
  }(), i;
}
function $s(i, o, t) {
  o[t] = i & 255, o[t + 1] = i >>> 8 & 255, o[t + 2] = i >>> 16 & 255, o[t + 3] = i >>> 24;
}
function _s(i, o, t) {
  o[t] = i >>> 24, o[t + 1] = i >>> 16 & 255, o[t + 2] = i >>> 8 & 255, o[t + 3] = i & 255;
}
function qs(i, o) {
  return (i[o] | i[o + 1] << 8 | i[o + 2] << 16 | i[o + 3] << 24) >>> 0;
}
function e0(i, o) {
  return (i[o] << 24 | i[o + 1] << 16 | i[o + 2] << 8 | i[o + 3]) >>> 0;
}
function t0(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Sd = Bd;
function Bd(i) {
  try {
    if (typeof t0 != "function")
      return null;
    var o = t0(i);
    return o && (o.length || Object.keys(o).length) ? o : null;
  } catch {
    return null;
  }
}
var ec = {};
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
})(ec);
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
var ar, n0;
function Hd() {
  if (n0)
    return ar;
  n0 = 1, ar = o;
  var i = qt();
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
  }, ar;
}
var i0;
function qt() {
  return i0 || (i0 = 1, function(i) {
    var o = i;
    o.asPromise = bd, o.base64 = qg, o.EventEmitter = vd, o.float = wd, o.inquire = Sd, o.utf8 = ec, o.pool = Gd, o.LongBits = Hd(), o.isNode = !!(typeof Tt < "u" && Tt && Tt.process && Tt.process.versions && Tt.process.versions.node), o.global = o.isNode && Tt || typeof window < "u" && window || typeof self < "u" && self || Tt, o.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  }(zs)), zs;
}
var tc = $, Qe = qt(), jr, Ko = Qe.LongBits, o0 = Qe.base64, r0 = Qe.utf8;
function bi(i, o, t) {
  this.fn = i, this.len = o, this.next = void 0, this.val = t;
}
function ba() {
}
function Wd(i) {
  this.head = i.head, this.tail = i.tail, this.len = i.len, this.next = i.states;
}
function $() {
  this.len = 0, this.head = new bi(ba, 0, 0), this.tail = this.head, this.states = null;
}
var nc = function() {
  return Qe.Buffer ? function() {
    return ($.create = function() {
      return new jr();
    })();
  } : function() {
    return new $();
  };
};
$.create = nc();
$.alloc = function(i) {
  return new Qe.Array(i);
};
Qe.Array !== Array && ($.alloc = Qe.pool($.alloc, Qe.Array.prototype.subarray));
$.prototype._push = function(i, o, t) {
  return this.tail = this.tail.next = new bi(i, o, t), this.len += o, this;
};
function ya(i, o, t) {
  o[t] = i & 255;
}
function kd(i, o, t) {
  for (; i > 127; )
    o[t++] = i & 127 | 128, i >>>= 7;
  o[t] = i;
}
function va(i, o) {
  this.len = i, this.next = void 0, this.val = o;
}
va.prototype = Object.create(bi.prototype);
va.prototype.fn = kd;
$.prototype.uint32 = function(i) {
  return this.len += (this.tail = this.tail.next = new va(
    (i = i >>> 0) < 128 ? 1 : i < 16384 ? 2 : i < 2097152 ? 3 : i < 268435456 ? 4 : 5,
    i
  )).len, this;
};
$.prototype.int32 = function(i) {
  return i < 0 ? this._push(wa, 10, Ko.fromNumber(i)) : this.uint32(i);
};
$.prototype.sint32 = function(i) {
  return this.uint32((i << 1 ^ i >> 31) >>> 0);
};
function wa(i, o, t) {
  for (; i.hi; )
    o[t++] = i.lo & 127 | 128, i.lo = (i.lo >>> 7 | i.hi << 25) >>> 0, i.hi >>>= 7;
  for (; i.lo > 127; )
    o[t++] = i.lo & 127 | 128, i.lo = i.lo >>> 7;
  o[t++] = i.lo;
}
$.prototype.uint64 = function(i) {
  var o = Ko.from(i);
  return this._push(wa, o.length(), o);
};
$.prototype.int64 = $.prototype.uint64;
$.prototype.sint64 = function(i) {
  var o = Ko.from(i).zzEncode();
  return this._push(wa, o.length(), o);
};
$.prototype.bool = function(i) {
  return this._push(ya, 1, i ? 1 : 0);
};
function Jr(i, o, t) {
  o[t] = i & 255, o[t + 1] = i >>> 8 & 255, o[t + 2] = i >>> 16 & 255, o[t + 3] = i >>> 24;
}
$.prototype.fixed32 = function(i) {
  return this._push(Jr, 4, i >>> 0);
};
$.prototype.sfixed32 = $.prototype.fixed32;
$.prototype.fixed64 = function(i) {
  var o = Ko.from(i);
  return this._push(Jr, 4, o.lo)._push(Jr, 4, o.hi);
};
$.prototype.sfixed64 = $.prototype.fixed64;
$.prototype.float = function(i) {
  return this._push(Qe.float.writeFloatLE, 4, i);
};
$.prototype.double = function(i) {
  return this._push(Qe.float.writeDoubleLE, 8, i);
};
var Kd = Qe.Array.prototype.set ? function(i, o, t) {
  o.set(i, t);
} : function(i, o, t) {
  for (var e = 0; e < i.length; ++e)
    o[t + e] = i[e];
};
$.prototype.bytes = function(i) {
  var o = i.length >>> 0;
  if (!o)
    return this._push(ya, 1, 0);
  if (Qe.isString(i)) {
    var t = $.alloc(o = o0.length(i));
    o0.decode(i, t, 0), i = t;
  }
  return this.uint32(o)._push(Kd, o, i);
};
$.prototype.string = function(i) {
  var o = r0.length(i);
  return o ? this.uint32(o)._push(r0.write, o, i) : this._push(ya, 1, 0);
};
$.prototype.fork = function() {
  return this.states = new Wd(this), this.head = this.tail = new bi(ba, 0, 0), this.len = 0, this;
};
$.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new bi(ba, 0, 0), this.len = 0), this;
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
  jr = i, $.create = nc(), jr._configure();
};
var Od = lt, ic = tc;
(lt.prototype = Object.create(ic.prototype)).constructor = lt;
var Zt = qt();
function lt() {
  ic.call(this);
}
lt._configure = function() {
  lt.alloc = Zt._Buffer_allocUnsafe, lt.writeBytesBuffer = Zt.Buffer && Zt.Buffer.prototype instanceof Uint8Array && Zt.Buffer.prototype.set.name === "set" ? function(i, o, t) {
    o.set(i, t);
  } : function(i, o, t) {
    if (i.copy)
      i.copy(o, t, 0, i.length);
    else
      for (var e = 0; e < i.length; )
        o[t++] = i[e++];
  };
};
lt.prototype.bytes = function(i) {
  Zt.isString(i) && (i = Zt._Buffer_from(i, "base64"));
  var o = i.length >>> 0;
  return this.uint32(o), o && this._push(lt.writeBytesBuffer, o, i), this;
};
function Vd(i, o, t) {
  i.length < 40 ? Zt.utf8.write(i, o, t) : o.utf8Write ? o.utf8Write(i, t) : o.write(i, t);
}
lt.prototype.string = function(i) {
  var o = Zt.Buffer.byteLength(i);
  return this.uint32(o), o && this._push(Vd, o, i), this;
};
lt._configure();
var oc = xe, xt = qt(), Ur, rc = xt.LongBits, Td = xt.utf8;
function ot(i, o) {
  return RangeError("index out of range: " + i.pos + " + " + (o || 1) + " > " + i.len);
}
function xe(i) {
  this.buf = i, this.pos = 0, this.len = i.length;
}
var a0 = typeof Uint8Array < "u" ? function(i) {
  if (i instanceof Uint8Array || Array.isArray(i))
    return new xe(i);
  throw Error("illegal buffer");
} : function(i) {
  if (Array.isArray(i))
    return new xe(i);
  throw Error("illegal buffer");
}, ac = function() {
  return xt.Buffer ? function(i) {
    return (xe.create = function(o) {
      return xt.Buffer.isBuffer(o) ? new Ur(o) : a0(o);
    })(i);
  } : a0;
};
xe.create = ac();
xe.prototype._slice = xt.Array.prototype.subarray || /* istanbul ignore next */
xt.Array.prototype.slice;
xe.prototype.uint32 = /* @__PURE__ */ function() {
  var i = 4294967295;
  return function() {
    if (i = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (i = (i | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (i = (i | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (i = (i | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (i = (i | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return i;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, ot(this, 10);
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
function sr() {
  var i = new rc(0, 0), o = 0;
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
        throw ot(this);
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
        throw ot(this);
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
    throw ot(this, 4);
  return po(this.buf, this.pos += 4);
};
xe.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw ot(this, 4);
  return po(this.buf, this.pos += 4) | 0;
};
function s0() {
  if (this.pos + 8 > this.len)
    throw ot(this, 8);
  return new rc(po(this.buf, this.pos += 4), po(this.buf, this.pos += 4));
}
xe.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw ot(this, 4);
  var i = xt.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, i;
};
xe.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw ot(this, 4);
  var i = xt.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, i;
};
xe.prototype.bytes = function() {
  var i = this.uint32(), o = this.pos, t = this.pos + i;
  if (t > this.len)
    throw ot(this, i);
  return this.pos += i, Array.isArray(this.buf) ? this.buf.slice(o, t) : o === t ? new this.buf.constructor(0) : this._slice.call(this.buf, o, t);
};
xe.prototype.string = function() {
  var i = this.bytes();
  return Td.read(i, 0, i.length);
};
xe.prototype.skip = function(i) {
  if (typeof i == "number") {
    if (this.pos + i > this.len)
      throw ot(this, i);
    this.pos += i;
  } else
    do
      if (this.pos >= this.len)
        throw ot(this);
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
  Ur = i, xe.create = ac(), Ur._configure();
  var o = xt.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  xt.merge(xe.prototype, {
    int64: function() {
      return sr.call(this)[o](!1);
    },
    uint64: function() {
      return sr.call(this)[o](!0);
    },
    sint64: function() {
      return sr.call(this).zzDecode()[o](!1);
    },
    fixed64: function() {
      return s0.call(this)[o](!0);
    },
    sfixed64: function() {
      return s0.call(this)[o](!1);
    }
  });
};
var Ed = Qt, sc = oc;
(Qt.prototype = Object.create(sc.prototype)).constructor = Qt;
var g0 = qt();
function Qt(i) {
  sc.call(this, i);
}
Qt._configure = function() {
  g0.Buffer && (Qt.prototype._slice = g0.Buffer.prototype.slice);
};
Qt.prototype.string = function() {
  var i = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + i, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + i, this.len));
};
Qt._configure();
var gc = {}, Rd = ti, Sa = qt();
(ti.prototype = Object.create(Sa.EventEmitter.prototype)).constructor = ti;
function ti(i, o, t) {
  if (typeof i != "function")
    throw TypeError("rpcImpl must be a function");
  Sa.EventEmitter.call(this), this.rpcImpl = i, this.requestDelimited = !!o, this.responseDelimited = !!t;
}
ti.prototype.rpcCall = function i(o, t, e, n, r) {
  if (!n)
    throw TypeError("request must be specified");
  var a = this;
  if (!r)
    return Sa.asPromise(i, a, o, t, e, n);
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
ti.prototype.end = function(i) {
  return this.rpcImpl && (i || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(i) {
  var o = i;
  o.Service = Rd;
})(gc);
var Pd = {};
(function(i) {
  var o = i;
  o.build = "minimal", o.Writer = tc, o.BufferWriter = Od, o.Reader = oc, o.BufferReader = Ed, o.util = qt(), o.rpc = gc, o.roots = Pd, o.configure = t;
  function t() {
    o.util._configure(), o.Writer._configure(o.BufferWriter), o.Reader._configure(o.BufferReader);
  }
  t();
})(_g);
var ne = _g;
const v = ne.Reader, le = ne.Writer, p = ne.util, C = ne.roots.default || (ne.roots.default = {}), $t = C.dot = (() => {
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
      let n = e === void 0 ? t.len : t.pos + e, r = new C.dot.Content();
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
      if (t instanceof C.dot.Content)
        return t;
      let e = new C.dot.Content();
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
            C.dot.Image.encode(e.images[r], n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && C.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof v || (e = v.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new C.dot.v4.MagnifEyeLivenessContent();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.images && a.images.length || (a.images = []), a.images.push(C.dot.Image.decode(e, e.uint32()));
              break;
            }
            case 2: {
              a.metadata = C.dot.v4.Metadata.decode(e, e.uint32());
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
            let r = C.dot.Image.verify(e.images[n]);
            if (r)
              return "images." + r;
          }
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = C.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.MagnifEyeLivenessContent)
          return e;
        let n = new C.dot.v4.MagnifEyeLivenessContent();
        if (e.images) {
          if (!Array.isArray(e.images))
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: array expected");
          n.images = [];
          for (let r = 0; r < e.images.length; ++r) {
            if (typeof e.images[r] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            n.images[r] = C.dot.Image.fromObject(e.images[r]);
          }
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.metadata: object expected");
          n.metadata = C.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.images = []), n.defaults && (r.metadata = null), e.images && e.images.length) {
          r.images = [];
          for (let a = 0; a < e.images.length; ++a)
            r.images[a] = C.dot.Image.toObject(e.images[a], n);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = C.dot.v4.Metadata.toObject(e.metadata, n)), r;
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
        ).int32(n.platform), n.web != null && Object.hasOwnProperty.call(n, "web") && C.dot.v4.WebMetadata.encode(n.web, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.android != null && Object.hasOwnProperty.call(n, "android") && C.dot.v4.AndroidMetadata.encode(n.android, r.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.ios != null && Object.hasOwnProperty.call(n, "ios") && C.dot.v4.IosMetadata.encode(n.ios, r.uint32(
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
        let a = r === void 0 ? n.len : n.pos + r, s = new C.dot.v4.Metadata();
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
              s.web = C.dot.v4.WebMetadata.decode(n, n.uint32());
              break;
            }
            case 3: {
              s.android = C.dot.v4.AndroidMetadata.decode(n, n.uint32());
              break;
            }
            case 4: {
              s.ios = C.dot.v4.IosMetadata.decode(n, n.uint32());
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
            let a = C.dot.v4.WebMetadata.verify(n.web);
            if (a)
              return "web." + a;
          }
        }
        if (n.android != null && n.hasOwnProperty("android")) {
          if (r.metadata === 1)
            return "metadata: multiple values";
          r.metadata = 1;
          {
            let a = C.dot.v4.AndroidMetadata.verify(n.android);
            if (a)
              return "android." + a;
          }
        }
        if (n.ios != null && n.hasOwnProperty("ios")) {
          if (r.metadata === 1)
            return "metadata: multiple values";
          r.metadata = 1;
          {
            let a = C.dot.v4.IosMetadata.verify(n.ios);
            if (a)
              return "ios." + a;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof C.dot.v4.Metadata)
          return n;
        let r = new C.dot.v4.Metadata();
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
          r.web = C.dot.v4.WebMetadata.fromObject(n.web);
        }
        if (n.android != null) {
          if (typeof n.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          r.android = C.dot.v4.AndroidMetadata.fromObject(n.android);
        }
        if (n.ios != null) {
          if (typeof n.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          r.ios = C.dot.v4.IosMetadata.fromObject(n.ios);
        }
        return r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let a = {};
        return r.defaults && (a.platform = r.enums === String ? "WEB" : 0, a.componentVersion = ""), n.platform != null && n.hasOwnProperty("platform") && (a.platform = r.enums === String ? C.dot.Platform[n.platform] === void 0 ? n.platform : C.dot.Platform[n.platform] : n.platform), n.web != null && n.hasOwnProperty("web") && (a.web = C.dot.v4.WebMetadata.toObject(n.web, r), r.oneofs && (a.metadata = "web")), n.android != null && n.hasOwnProperty("android") && (a.android = C.dot.v4.AndroidMetadata.toObject(n.android, r), r.oneofs && (a.metadata = "android")), n.ios != null && n.hasOwnProperty("ios") && (a.ios = C.dot.v4.IosMetadata.toObject(n.ios, r), r.oneofs && (a.metadata = "ios")), n.sessionToken != null && n.hasOwnProperty("sessionToken") && (a.sessionToken = n.sessionToken, r.oneofs && (a._sessionToken = "sessionToken")), n.componentVersion != null && n.hasOwnProperty("componentVersion") && (a.componentVersion = n.componentVersion), a;
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
            ).string(a[s]), C.dot.Int32List.encode(n.dynamicCameraFrameProperties[a[s]], r.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (n.digestsWithTimestamp != null && n.digestsWithTimestamp.length)
          for (let a = 0; a < n.digestsWithTimestamp.length; ++a)
            C.dot.DigestWithTimestamp.encode(n.digestsWithTimestamp[a], r.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return r;
      }, t.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, t.decode = function(n, r) {
        n instanceof v || (n = v.create(n));
        let a = r === void 0 ? n.len : n.pos + r, s = new C.dot.v4.AndroidMetadata(), g, x;
        for (; n.pos < a; ) {
          let I = n.uint32();
          switch (I >>> 3) {
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
              s.digestsWithTimestamp && s.digestsWithTimestamp.length || (s.digestsWithTimestamp = []), s.digestsWithTimestamp.push(C.dot.DigestWithTimestamp.decode(n, n.uint32()));
              break;
            }
            case 4: {
              s.dynamicCameraFrameProperties === p.emptyObject && (s.dynamicCameraFrameProperties = {});
              let u = n.uint32() + n.pos;
              for (g = "", x = null; n.pos < u; ) {
                let m = n.uint32();
                switch (m >>> 3) {
                  case 1:
                    g = n.string();
                    break;
                  case 2:
                    x = C.dot.Int32List.decode(n, n.uint32());
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
              n.skipType(I & 7);
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
            let a = C.dot.DigestWithTimestamp.verify(n.digestsWithTimestamp[r]);
            if (a)
              return "digestsWithTimestamp." + a;
          }
        }
        if (n.dynamicCameraFrameProperties != null && n.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!p.isObject(n.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let r = Object.keys(n.dynamicCameraFrameProperties);
          for (let a = 0; a < r.length; ++a) {
            let s = C.dot.Int32List.verify(n.dynamicCameraFrameProperties[r[a]]);
            if (s)
              return "dynamicCameraFrameProperties." + s;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof C.dot.v4.AndroidMetadata)
          return n;
        let r = new C.dot.v4.AndroidMetadata();
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
            r.digestsWithTimestamp[a] = C.dot.DigestWithTimestamp.fromObject(n.digestsWithTimestamp[a]);
          }
        }
        if (n.dynamicCameraFrameProperties) {
          if (typeof n.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          r.dynamicCameraFrameProperties = {};
          for (let a = Object.keys(n.dynamicCameraFrameProperties), s = 0; s < a.length; ++s) {
            if (typeof n.dynamicCameraFrameProperties[a[s]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            r.dynamicCameraFrameProperties[a[s]] = C.dot.Int32List.fromObject(n.dynamicCameraFrameProperties[a[s]]);
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
            a.dynamicCameraFrameProperties[s[g]] = C.dot.Int32List.toObject(n.dynamicCameraFrameProperties[s[g]], r);
        }
        if (n.digestsWithTimestamp && n.digestsWithTimestamp.length) {
          a.digestsWithTimestamp = [];
          for (let g = 0; g < n.digestsWithTimestamp.length; ++g)
            a.digestsWithTimestamp[g] = C.dot.DigestWithTimestamp.toObject(n.digestsWithTimestamp[g], r);
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
            C.dot.DigestWithTimestamp.encode(e.digestsWithTimestamp[r], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof v || (e = v.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new C.dot.v4.IosMetadata(), s, g;
        for (; e.pos < r; ) {
          let x = e.uint32();
          switch (x >>> 3) {
            case 1: {
              a.cameraModelId = e.string();
              break;
            }
            case 2: {
              a.architectureInfo === p.emptyObject && (a.architectureInfo = {});
              let I = e.uint32() + e.pos;
              for (s = "", g = !1; e.pos < I; ) {
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
              a.digestsWithTimestamp && a.digestsWithTimestamp.length || (a.digestsWithTimestamp = []), a.digestsWithTimestamp.push(C.dot.DigestWithTimestamp.decode(e, e.uint32()));
              break;
            }
            case 4: {
              if (a.isoValues && a.isoValues.length || (a.isoValues = []), (x & 7) === 2) {
                let I = e.uint32() + e.pos;
                for (; e.pos < I; )
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
            let r = C.dot.DigestWithTimestamp.verify(e.digestsWithTimestamp[n]);
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
        if (e instanceof C.dot.v4.IosMetadata)
          return e;
        let n = new C.dot.v4.IosMetadata();
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
            n.digestsWithTimestamp[r] = C.dot.DigestWithTimestamp.fromObject(e.digestsWithTimestamp[r]);
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
            r.digestsWithTimestamp[s] = C.dot.DigestWithTimestamp.toObject(e.digestsWithTimestamp[s], n);
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
        if (n || (n = le.create()), e.currentCameraProperties != null && Object.hasOwnProperty.call(e, "currentCameraProperties") && C.dot.v4.MediaTrackSettings.encode(e.currentCameraProperties, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.availableCameraProperties != null && e.availableCameraProperties.length)
          for (let r = 0; r < e.availableCameraProperties.length; ++r)
            C.dot.v4.CameraProperties.encode(e.availableCameraProperties[r], n.uint32(
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
            C.dot.v4.DetectedObject.encode(e.detectionRecord[r], n.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (e.hashedDetectedImagesWithTimestamp != null && e.hashedDetectedImagesWithTimestamp.length)
          for (let r = 0; r < e.hashedDetectedImagesWithTimestamp.length; ++r)
            C.dot.v4.HashedDetectedImageWithTimestamp.encode(e.hashedDetectedImagesWithTimestamp[r], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof v || (e = v.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new C.dot.v4.WebMetadata();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.currentCameraProperties = C.dot.v4.MediaTrackSettings.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.availableCameraProperties && a.availableCameraProperties.length || (a.availableCameraProperties = []), a.availableCameraProperties.push(C.dot.v4.CameraProperties.decode(e, e.uint32()));
              break;
            }
            case 3: {
              a.hashedDetectedImages && a.hashedDetectedImages.length || (a.hashedDetectedImages = []), a.hashedDetectedImages.push(e.string());
              break;
            }
            case 5: {
              a.hashedDetectedImagesWithTimestamp && a.hashedDetectedImagesWithTimestamp.length || (a.hashedDetectedImagesWithTimestamp = []), a.hashedDetectedImagesWithTimestamp.push(C.dot.v4.HashedDetectedImageWithTimestamp.decode(e, e.uint32()));
              break;
            }
            case 4: {
              a.detectionRecord && a.detectionRecord.length || (a.detectionRecord = []), a.detectionRecord.push(C.dot.v4.DetectedObject.decode(e, e.uint32()));
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
          let n = C.dot.v4.MediaTrackSettings.verify(e.currentCameraProperties);
          if (n)
            return "currentCameraProperties." + n;
        }
        if (e.availableCameraProperties != null && e.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(e.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let n = 0; n < e.availableCameraProperties.length; ++n) {
            let r = C.dot.v4.CameraProperties.verify(e.availableCameraProperties[n]);
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
            let r = C.dot.v4.HashedDetectedImageWithTimestamp.verify(e.hashedDetectedImagesWithTimestamp[n]);
            if (r)
              return "hashedDetectedImagesWithTimestamp." + r;
          }
        }
        if (e.detectionRecord != null && e.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(e.detectionRecord))
            return "detectionRecord: array expected";
          for (let n = 0; n < e.detectionRecord.length; ++n) {
            let r = C.dot.v4.DetectedObject.verify(e.detectionRecord[n]);
            if (r)
              return "detectionRecord." + r;
          }
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.WebMetadata)
          return e;
        let n = new C.dot.v4.WebMetadata();
        if (e.currentCameraProperties != null) {
          if (typeof e.currentCameraProperties != "object")
            throw TypeError(".dot.v4.WebMetadata.currentCameraProperties: object expected");
          n.currentCameraProperties = C.dot.v4.MediaTrackSettings.fromObject(e.currentCameraProperties);
        }
        if (e.availableCameraProperties) {
          if (!Array.isArray(e.availableCameraProperties))
            throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: array expected");
          n.availableCameraProperties = [];
          for (let r = 0; r < e.availableCameraProperties.length; ++r) {
            if (typeof e.availableCameraProperties[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            n.availableCameraProperties[r] = C.dot.v4.CameraProperties.fromObject(e.availableCameraProperties[r]);
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
            n.hashedDetectedImagesWithTimestamp[r] = C.dot.v4.HashedDetectedImageWithTimestamp.fromObject(e.hashedDetectedImagesWithTimestamp[r]);
          }
        }
        if (e.detectionRecord) {
          if (!Array.isArray(e.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          n.detectionRecord = [];
          for (let r = 0; r < e.detectionRecord.length; ++r) {
            if (typeof e.detectionRecord[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            n.detectionRecord[r] = C.dot.v4.DetectedObject.fromObject(e.detectionRecord[r]);
          }
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.availableCameraProperties = [], r.hashedDetectedImages = [], r.detectionRecord = [], r.hashedDetectedImagesWithTimestamp = []), n.defaults && (r.currentCameraProperties = null), e.currentCameraProperties != null && e.hasOwnProperty("currentCameraProperties") && (r.currentCameraProperties = C.dot.v4.MediaTrackSettings.toObject(e.currentCameraProperties, n)), e.availableCameraProperties && e.availableCameraProperties.length) {
          r.availableCameraProperties = [];
          for (let a = 0; a < e.availableCameraProperties.length; ++a)
            r.availableCameraProperties[a] = C.dot.v4.CameraProperties.toObject(e.availableCameraProperties[a], n);
        }
        if (e.hashedDetectedImages && e.hashedDetectedImages.length) {
          r.hashedDetectedImages = [];
          for (let a = 0; a < e.hashedDetectedImages.length; ++a)
            r.hashedDetectedImages[a] = e.hashedDetectedImages[a];
        }
        if (e.detectionRecord && e.detectionRecord.length) {
          r.detectionRecord = [];
          for (let a = 0; a < e.detectionRecord.length; ++a)
            r.detectionRecord[a] = C.dot.v4.DetectedObject.toObject(e.detectionRecord[a], n);
        }
        if (e.hashedDetectedImagesWithTimestamp && e.hashedDetectedImagesWithTimestamp.length) {
          r.hashedDetectedImagesWithTimestamp = [];
          for (let a = 0; a < e.hashedDetectedImagesWithTimestamp.length; ++a)
            r.hashedDetectedImagesWithTimestamp[a] = C.dot.v4.HashedDetectedImageWithTimestamp.toObject(e.hashedDetectedImagesWithTimestamp[a], n);
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
        let r = n === void 0 ? e.len : e.pos + n, a = new C.dot.v4.HashedDetectedImageWithTimestamp();
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
        if (e instanceof C.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let n = new C.dot.v4.HashedDetectedImageWithTimestamp();
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
        let a = r === void 0 ? n.len : n.pos + r, s = new C.dot.v4.MediaTrackSettings();
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
        if (n instanceof C.dot.v4.MediaTrackSettings)
          return n;
        let r = new C.dot.v4.MediaTrackSettings();
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
        let r = n === void 0 ? e.len : e.pos + n, a = new C.dot.v4.ImageBitmap();
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
        if (e instanceof C.dot.v4.ImageBitmap)
          return e;
        let n = new C.dot.v4.ImageBitmap();
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
        return r || (r = le.create()), n.cameraInitFrameResolution != null && Object.hasOwnProperty.call(n, "cameraInitFrameResolution") && C.dot.v4.ImageBitmap.encode(n.cameraInitFrameResolution, r.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.cameraProperties != null && Object.hasOwnProperty.call(n, "cameraProperties") && C.dot.v4.MediaTrackSettings.encode(n.cameraProperties, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), r;
      }, t.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, t.decode = function(n, r) {
        n instanceof v || (n = v.create(n));
        let a = r === void 0 ? n.len : n.pos + r, s = new C.dot.v4.CameraProperties();
        for (; n.pos < a; ) {
          let g = n.uint32();
          switch (g >>> 3) {
            case 1: {
              s.cameraInitFrameResolution = C.dot.v4.ImageBitmap.decode(n, n.uint32());
              break;
            }
            case 2: {
              s.cameraProperties = C.dot.v4.MediaTrackSettings.decode(n, n.uint32());
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
          let r = C.dot.v4.ImageBitmap.verify(n.cameraInitFrameResolution);
          if (r)
            return "cameraInitFrameResolution." + r;
        }
        if (n.cameraProperties != null && n.hasOwnProperty("cameraProperties")) {
          let r = C.dot.v4.MediaTrackSettings.verify(n.cameraProperties);
          if (r)
            return "cameraProperties." + r;
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof C.dot.v4.CameraProperties)
          return n;
        let r = new C.dot.v4.CameraProperties();
        if (n.cameraInitFrameResolution != null) {
          if (typeof n.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          r.cameraInitFrameResolution = C.dot.v4.ImageBitmap.fromObject(n.cameraInitFrameResolution);
        }
        if (n.cameraProperties != null) {
          if (typeof n.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          r.cameraProperties = C.dot.v4.MediaTrackSettings.fromObject(n.cameraProperties);
        }
        return r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let a = {};
        return r.defaults && (a.cameraProperties = null), n.cameraInitFrameResolution != null && n.hasOwnProperty("cameraInitFrameResolution") && (a.cameraInitFrameResolution = C.dot.v4.ImageBitmap.toObject(n.cameraInitFrameResolution, r), r.oneofs && (a._cameraInitFrameResolution = "cameraInitFrameResolution")), n.cameraProperties != null && n.hasOwnProperty("cameraProperties") && (a.cameraProperties = C.dot.v4.MediaTrackSettings.toObject(n.cameraProperties, r)), a;
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
        ).float(e.faceSize), e.faceCenter != null && Object.hasOwnProperty.call(e, "faceCenter") && C.dot.v4.Point.encode(e.faceCenter, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), e.smallestEdge != null && Object.hasOwnProperty.call(e, "smallestEdge") && n.uint32(
          /* id 7, wireType 5 =*/
          61
        ).float(e.smallestEdge), e.bottomLeft != null && Object.hasOwnProperty.call(e, "bottomLeft") && C.dot.v4.Point.encode(e.bottomLeft, n.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), e.bottomRight != null && Object.hasOwnProperty.call(e, "bottomRight") && C.dot.v4.Point.encode(e.bottomRight, n.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), e.topLeft != null && Object.hasOwnProperty.call(e, "topLeft") && C.dot.v4.Point.encode(e.topLeft, n.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), e.topRight != null && Object.hasOwnProperty.call(e, "topRight") && C.dot.v4.Point.encode(e.topRight, n.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof v || (e = v.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new C.dot.v4.DetectedObject();
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
              a.faceCenter = C.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              a.smallestEdge = e.float();
              break;
            }
            case 8: {
              a.bottomLeft = C.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              a.bottomRight = C.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              a.topLeft = C.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              a.topRight = C.dot.v4.Point.decode(e, e.uint32());
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
          let n = C.dot.v4.Point.verify(e.faceCenter);
          if (n)
            return "faceCenter." + n;
        }
        if (e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && typeof e.smallestEdge != "number")
          return "smallestEdge: number expected";
        if (e.bottomLeft != null && e.hasOwnProperty("bottomLeft")) {
          let n = C.dot.v4.Point.verify(e.bottomLeft);
          if (n)
            return "bottomLeft." + n;
        }
        if (e.bottomRight != null && e.hasOwnProperty("bottomRight")) {
          let n = C.dot.v4.Point.verify(e.bottomRight);
          if (n)
            return "bottomRight." + n;
        }
        if (e.topLeft != null && e.hasOwnProperty("topLeft")) {
          let n = C.dot.v4.Point.verify(e.topLeft);
          if (n)
            return "topLeft." + n;
        }
        if (e.topRight != null && e.hasOwnProperty("topRight")) {
          let n = C.dot.v4.Point.verify(e.topRight);
          if (n)
            return "topRight." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.DetectedObject)
          return e;
        let n = new C.dot.v4.DetectedObject();
        if (e.brightness != null && (n.brightness = Number(e.brightness)), e.sharpness != null && (n.sharpness = Number(e.sharpness)), e.hotspots != null && (n.hotspots = Number(e.hotspots)), e.confidence != null && (n.confidence = Number(e.confidence)), e.faceSize != null && (n.faceSize = Number(e.faceSize)), e.faceCenter != null) {
          if (typeof e.faceCenter != "object")
            throw TypeError(".dot.v4.DetectedObject.faceCenter: object expected");
          n.faceCenter = C.dot.v4.Point.fromObject(e.faceCenter);
        }
        if (e.smallestEdge != null && (n.smallestEdge = Number(e.smallestEdge)), e.bottomLeft != null) {
          if (typeof e.bottomLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomLeft: object expected");
          n.bottomLeft = C.dot.v4.Point.fromObject(e.bottomLeft);
        }
        if (e.bottomRight != null) {
          if (typeof e.bottomRight != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomRight: object expected");
          n.bottomRight = C.dot.v4.Point.fromObject(e.bottomRight);
        }
        if (e.topLeft != null) {
          if (typeof e.topLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.topLeft: object expected");
          n.topLeft = C.dot.v4.Point.fromObject(e.topLeft);
        }
        if (e.topRight != null) {
          if (typeof e.topRight != "object")
            throw TypeError(".dot.v4.DetectedObject.topRight: object expected");
          n.topRight = C.dot.v4.Point.fromObject(e.topRight);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.brightness = 0, r.sharpness = 0, r.hotspots = 0, r.confidence = 0, r.faceSize = 0, r.faceCenter = null, r.smallestEdge = 0, r.bottomLeft = null, r.bottomRight = null, r.topLeft = null, r.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (r.brightness = n.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (r.sharpness = n.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (r.hotspots = n.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (r.confidence = n.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (r.faceSize = n.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (r.faceCenter = C.dot.v4.Point.toObject(e.faceCenter, n)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (r.smallestEdge = n.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (r.bottomLeft = C.dot.v4.Point.toObject(e.bottomLeft, n)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (r.bottomRight = C.dot.v4.Point.toObject(e.bottomRight, n)), e.topLeft != null && e.hasOwnProperty("topLeft") && (r.topLeft = C.dot.v4.Point.toObject(e.topLeft, n)), e.topRight != null && e.hasOwnProperty("topRight") && (r.topRight = C.dot.v4.Point.toObject(e.topRight, n)), r;
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
        let r = n === void 0 ? e.len : e.pos + n, a = new C.dot.v4.Point();
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
        if (e instanceof C.dot.v4.Point)
          return e;
        let n = new C.dot.v4.Point();
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
        return n || (n = le.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && C.dot.Image.encode(e.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && C.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof v || (e = v.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new C.dot.v4.FaceContent();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.image = C.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.metadata = C.dot.v4.Metadata.decode(e, e.uint32());
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
          let n = C.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = C.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.FaceContent)
          return e;
        let n = new C.dot.v4.FaceContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.FaceContent.image: object expected");
          n.image = C.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.FaceContent.metadata: object expected");
          n.metadata = C.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.image = null, r.metadata = null), e.image != null && e.hasOwnProperty("image") && (r.image = C.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = C.dot.v4.Metadata.toObject(e.metadata, n)), r;
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
        return n || (n = le.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && C.dot.Image.encode(e.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && C.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof v || (e = v.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new C.dot.v4.DocumentContent();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.image = C.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.metadata = C.dot.v4.Metadata.decode(e, e.uint32());
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
          let n = C.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = C.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.DocumentContent)
          return e;
        let n = new C.dot.v4.DocumentContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.DocumentContent.image: object expected");
          n.image = C.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.DocumentContent.metadata: object expected");
          n.metadata = C.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.image = null, r.metadata = null), e.image != null && e.hasOwnProperty("image") && (r.image = C.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = C.dot.v4.Metadata.toObject(e.metadata, n)), r;
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
        return r || (r = le.create()), n.documentContent != null && Object.hasOwnProperty.call(n, "documentContent") && C.dot.v4.DocumentContent.encode(n.documentContent, r.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.faceContent != null && Object.hasOwnProperty.call(n, "faceContent") && C.dot.v4.FaceContent.encode(n.faceContent, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(n, "magnifeyeLivenessContent") && C.dot.v4.MagnifEyeLivenessContent.encode(n.magnifeyeLivenessContent, r.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.smileLivenessContent != null && Object.hasOwnProperty.call(n, "smileLivenessContent") && C.dot.v4.SmileLivenessContent.encode(n.smileLivenessContent, r.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), n.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(n, "eyeGazeLivenessContent") && C.dot.v4.EyeGazeLivenessContent.encode(n.eyeGazeLivenessContent, r.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), r;
      }, t.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, t.decode = function(n, r) {
        n instanceof v || (n = v.create(n));
        let a = r === void 0 ? n.len : n.pos + r, s = new C.dot.v4.Blob();
        for (; n.pos < a; ) {
          let g = n.uint32();
          switch (g >>> 3) {
            case 1: {
              s.documentContent = C.dot.v4.DocumentContent.decode(n, n.uint32());
              break;
            }
            case 5: {
              s.eyeGazeLivenessContent = C.dot.v4.EyeGazeLivenessContent.decode(n, n.uint32());
              break;
            }
            case 2: {
              s.faceContent = C.dot.v4.FaceContent.decode(n, n.uint32());
              break;
            }
            case 3: {
              s.magnifeyeLivenessContent = C.dot.v4.MagnifEyeLivenessContent.decode(n, n.uint32());
              break;
            }
            case 4: {
              s.smileLivenessContent = C.dot.v4.SmileLivenessContent.decode(n, n.uint32());
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
            let a = C.dot.v4.DocumentContent.verify(n.documentContent);
            if (a)
              return "documentContent." + a;
          }
        }
        if (n.eyeGazeLivenessContent != null && n.hasOwnProperty("eyeGazeLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let a = C.dot.v4.EyeGazeLivenessContent.verify(n.eyeGazeLivenessContent);
            if (a)
              return "eyeGazeLivenessContent." + a;
          }
        }
        if (n.faceContent != null && n.hasOwnProperty("faceContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let a = C.dot.v4.FaceContent.verify(n.faceContent);
            if (a)
              return "faceContent." + a;
          }
        }
        if (n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let a = C.dot.v4.MagnifEyeLivenessContent.verify(n.magnifeyeLivenessContent);
            if (a)
              return "magnifeyeLivenessContent." + a;
          }
        }
        if (n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let a = C.dot.v4.SmileLivenessContent.verify(n.smileLivenessContent);
            if (a)
              return "smileLivenessContent." + a;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof C.dot.v4.Blob)
          return n;
        let r = new C.dot.v4.Blob();
        if (n.documentContent != null) {
          if (typeof n.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          r.documentContent = C.dot.v4.DocumentContent.fromObject(n.documentContent);
        }
        if (n.eyeGazeLivenessContent != null) {
          if (typeof n.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          r.eyeGazeLivenessContent = C.dot.v4.EyeGazeLivenessContent.fromObject(n.eyeGazeLivenessContent);
        }
        if (n.faceContent != null) {
          if (typeof n.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          r.faceContent = C.dot.v4.FaceContent.fromObject(n.faceContent);
        }
        if (n.magnifeyeLivenessContent != null) {
          if (typeof n.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          r.magnifeyeLivenessContent = C.dot.v4.MagnifEyeLivenessContent.fromObject(n.magnifeyeLivenessContent);
        }
        if (n.smileLivenessContent != null) {
          if (typeof n.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          r.smileLivenessContent = C.dot.v4.SmileLivenessContent.fromObject(n.smileLivenessContent);
        }
        return r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let a = {};
        return n.documentContent != null && n.hasOwnProperty("documentContent") && (a.documentContent = C.dot.v4.DocumentContent.toObject(n.documentContent, r), r.oneofs && (a.blob = "documentContent")), n.faceContent != null && n.hasOwnProperty("faceContent") && (a.faceContent = C.dot.v4.FaceContent.toObject(n.faceContent, r), r.oneofs && (a.blob = "faceContent")), n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent") && (a.magnifeyeLivenessContent = C.dot.v4.MagnifEyeLivenessContent.toObject(n.magnifeyeLivenessContent, r), r.oneofs && (a.blob = "magnifeyeLivenessContent")), n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent") && (a.smileLivenessContent = C.dot.v4.SmileLivenessContent.toObject(n.smileLivenessContent, r), r.oneofs && (a.blob = "smileLivenessContent")), n.eyeGazeLivenessContent != null && n.hasOwnProperty("eyeGazeLivenessContent") && (a.eyeGazeLivenessContent = C.dot.v4.EyeGazeLivenessContent.toObject(n.eyeGazeLivenessContent, r), r.oneofs && (a.blob = "eyeGazeLivenessContent")), a;
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
            C.dot.v4.EyeGazeLivenessSegment.encode(e.segments[r], n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && C.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof v || (e = v.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new C.dot.v4.EyeGazeLivenessContent();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.segments && a.segments.length || (a.segments = []), a.segments.push(C.dot.v4.EyeGazeLivenessSegment.decode(e, e.uint32()));
              break;
            }
            case 2: {
              a.metadata = C.dot.v4.Metadata.decode(e, e.uint32());
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
            let r = C.dot.v4.EyeGazeLivenessSegment.verify(e.segments[n]);
            if (r)
              return "segments." + r;
          }
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = C.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.EyeGazeLivenessContent)
          return e;
        let n = new C.dot.v4.EyeGazeLivenessContent();
        if (e.segments) {
          if (!Array.isArray(e.segments))
            throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: array expected");
          n.segments = [];
          for (let r = 0; r < e.segments.length; ++r) {
            if (typeof e.segments[r] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            n.segments[r] = C.dot.v4.EyeGazeLivenessSegment.fromObject(e.segments[r]);
          }
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.metadata: object expected");
          n.metadata = C.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.segments = []), n.defaults && (r.metadata = null), e.segments && e.segments.length) {
          r.segments = [];
          for (let a = 0; a < e.segments.length; ++a)
            r.segments[a] = C.dot.v4.EyeGazeLivenessSegment.toObject(e.segments[a], n);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = C.dot.v4.Metadata.toObject(e.metadata, n)), r;
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
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && C.dot.Image.encode(e.image, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof v || (e = v.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new C.dot.v4.EyeGazeLivenessSegment();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.corner = e.int32();
              break;
            }
            case 2: {
              a.image = C.dot.Image.decode(e, e.uint32());
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
          let n = C.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.EyeGazeLivenessSegment)
          return e;
        let n = new C.dot.v4.EyeGazeLivenessSegment();
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
          n.image = C.dot.Image.fromObject(e.image);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.corner = n.enums === String ? "TOP_LEFT" : 0, r.image = null), e.corner != null && e.hasOwnProperty("corner") && (r.corner = n.enums === String ? C.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : C.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (r.image = C.dot.Image.toObject(e.image, n)), r;
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
        return n || (n = le.create()), e.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(e, "neutralExpressionFaceImage") && C.dot.Image.encode(e.neutralExpressionFaceImage, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.smileExpressionFaceImage != null && Object.hasOwnProperty.call(e, "smileExpressionFaceImage") && C.dot.Image.encode(e.smileExpressionFaceImage, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && C.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof v || (e = v.create(e));
        let r = n === void 0 ? e.len : e.pos + n, a = new C.dot.v4.SmileLivenessContent();
        for (; e.pos < r; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              a.neutralExpressionFaceImage = C.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.smileExpressionFaceImage = C.dot.Image.decode(e, e.uint32());
              break;
            }
            case 3: {
              a.metadata = C.dot.v4.Metadata.decode(e, e.uint32());
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
          let n = C.dot.Image.verify(e.neutralExpressionFaceImage);
          if (n)
            return "neutralExpressionFaceImage." + n;
        }
        if (e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage")) {
          let n = C.dot.Image.verify(e.smileExpressionFaceImage);
          if (n)
            return "smileExpressionFaceImage." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = C.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof C.dot.v4.SmileLivenessContent)
          return e;
        let n = new C.dot.v4.SmileLivenessContent();
        if (e.neutralExpressionFaceImage != null) {
          if (typeof e.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          n.neutralExpressionFaceImage = C.dot.Image.fromObject(e.neutralExpressionFaceImage);
        }
        if (e.smileExpressionFaceImage != null) {
          if (typeof e.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.smileExpressionFaceImage: object expected");
          n.smileExpressionFaceImage = C.dot.Image.fromObject(e.smileExpressionFaceImage);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.metadata: object expected");
          n.metadata = C.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.neutralExpressionFaceImage = null, r.smileExpressionFaceImage = null, r.metadata = null), e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage") && (r.neutralExpressionFaceImage = C.dot.Image.toObject(e.neutralExpressionFaceImage, n)), e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage") && (r.smileExpressionFaceImage = C.dot.Image.toObject(e.smileExpressionFaceImage, n)), e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = C.dot.v4.Metadata.toObject(e.metadata, n)), r;
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
      let n = e === void 0 ? t.len : t.pos + e, r = new C.dot.Image();
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
      if (t instanceof C.dot.Image)
        return t;
      let e = new C.dot.Image();
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
      let n = e === void 0 ? t.len : t.pos + e, r = new C.dot.Int32List();
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
      if (t instanceof C.dot.Int32List)
        return t;
      let e = new C.dot.Int32List();
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
      let n = e === void 0 ? t.len : t.pos + e, r = new C.dot.DigestWithTimestamp();
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
      if (t instanceof C.dot.DigestWithTimestamp)
        return t;
      let e = new C.dot.DigestWithTimestamp();
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
async function zr(i) {
  const { Image: o } = $t, t = await i.arrayBuffer(), e = new Uint8Array(t), n = {};
  n.bytes = e;
  const r = o.verify(n);
  if (r) throw Error(r);
  const a = {};
  return a.bytes = e, o.create(a);
}
async function cc(i) {
  const { v4: { Metadata: o } } = $t, t = { ...i };
  t.platform = $t.Platform.WEB;
  const e = t, n = o.verify(e);
  if (n) throw Error(n);
  return o.create(e);
}
async function lc(i) {
  const { Content: o } = $t, { iv: t, key: e, message: n } = await YI(i), r = { token: new Uint8Array(e), iv: t, schemaVersion: du, bytes: new Uint8Array(n) }, a = o.verify(r);
  if (a) throw Error(a);
  const s = o.create(r);
  return o.encode(s).finish();
}
function xc({ documentContent: i, faceContent: o, magnifeyeLivenessContent: t, smileLivenessContent: e }) {
  const { Blob: n } = $t.v4, r = {};
  r.documentContent = i, r.faceContent = o, r.magnifeyeLivenessContent = t, r.smileLivenessContent = e;
  const a = r, s = n.verify(a);
  if (s) throw Error(s);
  const g = n.create(a);
  return n.encode(g).finish();
}
async function Ld(i, o) {
  const { FaceContent: t } = $t.v4, e = await zr(i), n = await cc(o), r = {};
  r.image = e, r.metadata = n;
  const a = r, s = t.verify(a);
  if (s) throw Error(s);
  const g = t.create(a), x = {};
  return x.faceContent = g, xc(x);
}
async function Nd(i, o) {
  const t = await Ld(i, o);
  return lc(t);
}
const Dd = ({ onPhotoTakenInternal: i }) => {
  const { appTier: o, isLicenseValidated: t } = da(), { analytics: e } = Ig(), { appState: n, freemiumOverlayState: r } = Vn(), { faceCameraOptions: a } = vg(), { cameraFacing: s, onPhotoTaken: g, sessionToken: x, thresholds: I, wasmDirectoryPath: u } = a, { controller: m } = Ad(I, u), f = wn(
    ({ content: W, controller: J, imageData: ue, webMetadata: z }) => {
      Ju(dg.FACE, J.getCandidateSelectionImages()), i == null || i({ cameraProperties: z }), g(ue, W);
    },
    [i, g]
  ), { cameraResolution: y, cameraService: Z, detectionDetails: T, videoRef: S } = BI({
    analytics: e,
    cameraFacing: s,
    controller: m,
    sessionToken: x,
    createProtoMessage: Nd,
    onPhotoTaken: f
  }), { shouldMirror: B } = xI(Gt.CONTROL, Z);
  Uu(Gt.CAMERA_PROPS_CHANGED, {
    cameraResolution: y,
    shouldMirror: B
  }), be(() => () => {
    ei.getInstance().restart();
  }, []);
  const R = r !== lo.HIDDEN && o !== Hr.PREMIUM && y, U = r === lo.VISIBLE, Y = t, F = y && t && n === ct.RUNNING;
  return /* @__PURE__ */ H(it, { children: [
    R && /* @__PURE__ */ H(TI, { fullOverlay: U, resolution: y }),
    /* @__PURE__ */ H(Nx, { ref: S, $isImageMirror: B, $isVisible: Y, autoPlay: !0, muted: !0, playsInline: !0 }),
    F && /* @__PURE__ */ H(
      WI,
      {
        appTier: o,
        cameraResolution: y,
        detectionDetails: T,
        isImageMirror: B
      }
    )
  ] });
}, Yd = ({
  onPhotoTakenInternal: i,
  ...o
}) => /* @__PURE__ */ H(ku, { cameraOptions: o, children: /* @__PURE__ */ H(Dd, { onPhotoTakenInternal: i }) }), Fd = ({ children: i }) => {
  const o = bt(null);
  return pI(o, Gt.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ H(Lx, { ref: o, children: i });
};
async function Xd(i, o, t) {
  const { SmileLivenessContent: e } = $t.v4, n = await zr(i), r = await zr(o), a = await cc(t), s = {};
  s.neutralExpressionFaceImage = n, s.smileExpressionFaceImage = r, s.metadata = a;
  const g = s, x = e.verify(g);
  if (x) throw Error(x);
  const I = e.create(g), u = {};
  return u.smileLivenessContent = I, xc(u);
}
async function Md(i, o, t) {
  const e = await Xd(i, o, t);
  return lc(e);
}
const uc = {};
uc.max = 0.15;
const Qr = {};
Qr.confidence = 0.3, Qr.status = uc;
const Ic = {};
Ic.mouth = Qr;
const dc = {};
dc.min = 0.35;
const $r = {};
$r.confidence = 0.3, $r.status = dc;
const Rt = {};
Rt.brightnessHighThreshold = 1, Rt.brightnessLowThreshold = -1, Rt.sharpnessThreshold = -(-6 * -1635 + -2 * 1513 + 323 * -21), Rt.outOfBoundsThreshold = -(8497 * -1 + -3886 * -1 + 4612), Rt.minFaceSizeRatio = 0.1, Rt.mouth = $r;
const jd = { [Cn.NEUTRAL]: Ic, [Cn.SMILE]: Rt }, Jd = jd;
function Ud(i, o) {
  var t = { ...Jd[i.value], ...o };
  return t;
}
const zd = ({
  licensePath: i,
  onComplete: o,
  onError: t,
  sessionToken: e,
  thresholds: n,
  wasmDirectoryPath: r
}) => {
  const { analytics: a } = Ig(), { handleAppStateChange: s, handleError: g } = Mx(), x = pn(Cn.NEUTRAL), I = pn(null), u = pn(null), m = pn(null);
  function f(B) {
    x.value = B, Rr(so.STATUS_CHANGED, { phase: B });
  }
  function y(B) {
    I.value = B, f(Cn.SMILE), s(jt.RUNNING);
  }
  async function Z(B) {
    u.value = B;
    try {
      if (!I.value || !u.value)
        throw new ie("Missing face data");
      const R = {
        sessionToken: e,
        web: m.value
      }, U = await Md(
        I.value.image,
        u.value.image,
        R
      ), Y = [I.value, u.value];
      o(Y, U), a == null || a.trackLivenessProcess(Y), s(jt.DONE);
    } catch (R) {
      R instanceof Error && g(ie.fromError(R));
      return;
    }
  }
  function T(B) {
    m.value = Hu(m.value, B.cameraProperties);
  }
  const S = {
    [Cn.NEUTRAL]: y,
    [Cn.SMILE]: Z
  };
  return /* @__PURE__ */ H(Fd, { children: /* @__PURE__ */ H(
    Yd,
    {
      licensePath: i,
      onError: t,
      onPhotoTaken: S[x.value],
      onPhotoTakenInternal: T,
      thresholds: Ud(x, n),
      wasmDirectoryPath: r
    }
  ) });
};
function Qd({ initAppState: i }) {
  const [o, t] = Ye(i), [e, n] = Ye(), [r, a] = Ye(!1), s = {};
  return s.appState = o, s.setAppState = t, s.error = e, s.setError = n, s.isCameraReady = r, s.setIsCameraReady = a, s;
}
function $d(i) {
  return i !== jt.RUNNING && i !== jt.WAITING ? lo.VISIBLE : lo.VISIBLE_WITH_MASK;
}
function _d({ onError: i }) {
  const { appState: o, error: t, isCameraReady: e, setAppState: n, setError: r, setIsCameraReady: a } = Qd({
    initAppState: jt.LOADING
  }), s = $d(o), g = wn(
    (I) => {
      Rr(so.STATUS_CHANGED, { state: jt.ERROR, error: I }), a(!1), i(I), r(I), n(jt.ERROR);
    },
    [i, a, r, n]
  ), x = wn(
    (I) => {
      n(I), Rr(so.STATUS_CHANGED, { state: I });
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
var Cc = ((i) => (i.AUTO_CAPTURE = "auto-capture", i))(Cc || {});
class qd {
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
    const s = Pi(a);
    await fetch("" + r + s + "&" + o, n);
  }
  async init(o, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = o;
    const e = { _app_version: Wg() }, n = { organization: kg(window.location.href) }, r = Pi({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(n) });
    await this.countlyFetch(r);
  }
  async endSession() {
    const o = {};
    o.end_session = "1";
    const t = Pi(o);
    await this.countlyFetch(t);
  }
  async sendAutoCaptureEvent(o, t) {
    const e = {};
    e.key = Cc.AUTO_CAPTURE, e.count = 1, e.dur = t, e.segmentation = o;
    const n = [e], r = Pi({ events: JSON.stringify(n) });
    await this.countlyFetch(r);
  }
}
const Di = new qd();
function eC() {
  const [i] = window.crypto.getRandomValues(new Uint32Array(1));
  return i.toString(-8084 + 3 * -1595 + -15 * -859);
}
function tC() {
  const i = sessionStorage.getItem("dot-user-id");
  if (i) return i;
  const o = eC();
  return sessionStorage.setItem("dot-user-id", o), o;
}
function nC(i, o) {
  return o ? o === "user" ? "Front Camera" : "Back Camera" : i;
}
function iC(i) {
  return i > 4 * 2109 + 8683 + -17059 ? ">1m" : i > -1 * 809 + 2338 + -1484 ? ">45" : i > 4192 + 2288 * -2 + 414 * 1 ? ">30" : "" + i;
}
const oC = (i) => Math.round(i / 500) * 500 / (-3 * -1502 + -5926 * -1 + -131 * 72), c0 = (i) => i ? i <= -331 + -4 * -83 ? Math.round(i * (3242 * 1 + 9 * -1097 + 6651 * 1)) / (-1893 + -4497 * 1 + 6410) : Math.round(i / (191 * -52 + -5043 + 15025 * 1)) * 50 : -1280 + 3415 * -1 + 15 * 313, rC = (i) => Math.round(i * (-1 * -8031 + -6242 + -1 * 1787)) / (1 * 6421 + -5009 * -1 + 2857 * -4);
class aC {
  constructor() {
    j(this, "countly", Di);
  }
  createSegmentation(o) {
    return { appVersion: Wg(), ...o };
  }
  init(o) {
    if (aI()) return;
    const t = tC();
    Di.init(t, o);
  }
  endSession() {
    Di.endSession();
  }
  sendLicenseResultData(o, t) {
    const e = {};
    e.licenseTier = o, e.customer = t;
    const n = this.createSegmentation(e);
    Di.sendAutoCaptureEvent(n);
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
    var I, u, m, f, y, Z;
    if (!o.length || !this.captureProcessAnalytics.length) return;
    const [t, e] = o, [n, r] = this.captureProcessAnalytics, a = rC(n.averageFps + (r == null ? void 0 : r.averageFps)) / (-4927 + 53 * 93), s = oC(n.captureProcessDurationInMs), g = -143 * -24 + -2 * 3380 + 3331, x = this.createSegmentation({ faceSize: c0((I = e.data.detection) == null ? void 0 : I.faceSize), confidence: c0((u = t.data.detection) == null ? void 0 : u.confidence), imageResolution: ((f = (m = t.data) == null ? void 0 : m["imageResolution"]) == null ? void 0 : f.width) + "x" + ((Z = (y = t.data) == null ? void 0 : y["imageResolution"]) == null ? void 0 : Z.height), averageFps: a, captureTimeNeutral: iC(s), captureTimeSmile: "" + g, camera: nC(n == null ? void 0 : n.deviceName, n.facingMode), instructionSet: n.instructionSet });
    this.countly.sendAutoCaptureEvent(x, s + g);
  }
}
const cC = new gC(), lC = ({ props: i }) => i ? /* @__PURE__ */ H(Kx, { target: i.styleTarget, children: /* @__PURE__ */ H(
  _x,
  {
    licensePath: i.licensePath,
    licenseValidator: Er.getInstance(),
    wasmDirectoryPath: i.wasmDirectoryPath,
    children: /* @__PURE__ */ H(tu, { analytics: cC, appKey: "d64319129bb0ee02eccfab418edba9629a97d6b6", children: /* @__PURE__ */ H(
      Xx,
      {
        value: _d({
          onError: i.onError
        }),
        children: /* @__PURE__ */ H(ug, { children: /* @__PURE__ */ H(zd, { ...i }) })
      }
    ) })
  }
) }) : null;
Fc(lC, "x-dot-smile-liveness", ["props"]);
