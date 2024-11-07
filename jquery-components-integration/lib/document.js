var gg = Object.defineProperty;
var Er = (x) => {
  throw TypeError(x);
};
var dg = (x, o, t) => o in x ? gg(x, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : x[o] = t;
var E = (x, o, t) => dg(x, typeof o != "symbol" ? o + "" : o, t), Lr = (x, o, t) => o.has(x) || Er("Cannot " + t);
var N = (x, o, t) => (Lr(x, o, "read from private field"), t ? t.call(x) : o.get(x)), ge = (x, o, t) => o.has(x) ? Er("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(x) : o.set(x, t), ae = (x, o, t, e) => (Lr(x, o, "write to private field"), e ? e.call(x, t) : o.set(x, t), t);
var kn, Y, ts, ns, $t, Dr, xs, jo, Ei, Jo, _o, os, fn = {}, is = [], ug = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, eo = Array.isArray;
function Bt(x, o) {
  for (var t in o) x[t] = o[t];
  return x;
}
function rs(x) {
  var o = x.parentNode;
  o && o.removeChild(x);
}
function Ee(x, o, t) {
  var e, n, i, r = {};
  for (i in o) i == "key" ? e = o[i] : i == "ref" ? n = o[i] : r[i] = o[i];
  if (arguments.length > 2374 * 3 + 7 * -104 + -6392 && (r.children = arguments.length > -402 + 22 * -167 + -1 * -4079 ? kn.call(arguments, -3555 + 3557 * 1) : t), typeof x == "function" && x.defaultProps != null)
    for (i in x.defaultProps) void (44 * 173 + -8144 + -1 * -532) === r[i] && (r[i] = x.defaultProps[i]);
  return dn(x, r, e, n, null);
}
function dn(x, o, t, e, n) {
  var i = {};
  i.type = x, i.props = o, i.key = t, i.ref = e, i.__k = null, i.__ = null, i.__b = 0, i.__e = null, i.__d = void (3377 + 5 * -1349 + 2 * 1684), i.__c = null, i.constructor = void (-1 * -694 + -1381 + 687), i.__v = n ?? ++ts, i.__i = -1, i.__u = 0;
  var r = i;
  return n == null && Y.vnode != null && Y.vnode(r), r;
}
function lg() {
  var x = {};
  return x.current = null, x;
}
function nt(x) {
  return x.children;
}
function $e(x, o) {
  this.props = x, this.context = o;
}
function c0(x, o) {
  if (o == null) return x.__ ? c0(x.__, x.__i + (-244 * 31 + -7057 + 2 * 7311)) : null;
  for (var t; o < x.__k.length; o++) if ((t = x.__k[o]) != null && t.__e != null) return t.__e;
  return typeof x.type == "function" ? c0(x) : null;
}
function as(x) {
  var o, t;
  if ((x = x.__) != null && x.__c != null) {
    for (x.__e = x.__c.base = null, o = 5769 + -10 * -906 + -3 * 4943; o < x.__k.length; o++) if ((t = x.__k[o]) != null && t.__e != null) {
      x.__e = x.__c.base = t.__e;
      break;
    }
    return as(x);
  }
}
function Uo(x) {
  (!x.__d && (x.__d = !(-2491 + 908 * 3 + -1 * 233)) && $t.push(x) && !Ax.__r++ || Dr !== Y.debounceRendering) && ((Dr = Y.debounceRendering) || xs)(Ax);
}
function Ax() {
  var x, o, t, e, n, i, r, a;
  for ($t.sort(jo); x = $t.shift(); ) x.__d && (o = $t.length, e = void (-9383 + 5 * -1385 + -6 * -2718), i = (n = (t = x).__v).__e, r = [], a = [], t.__P && ((e = Bt({}, n)).__v = n.__v + 1, Y.vnode && Y.vnode(e), Li(t.__P, e, n, t.__n, t.__P.namespaceURI, 136 * -18 + 152 * -51 + 2558 * 4 & n.__u ? [i] : null, r, i ?? c0(n), !!(-3199 * 1 + 7158 + -7 * 561 & n.__u), a), e.__v = n.__v, e.__.__k[e.__i] = e, gs(r, e, a), e.__e != i && as(e)), $t.length > o && $t.sort(jo));
  Ax.__r = 2 * 3001 + -3434 * -1 + -9436;
}
function ss(x, o, t, e, n, i, r, a, s, c, d) {
  var g, C, u, p, b, A = e && e.__k || is, l = o.length;
  for (t.__d = s, Ig(t, o, A), s = t.__d, g = 1 * -9557 + -503 * 9 + 7042 * 2; g < l; g++) (u = t.__k[g]) != null && typeof u != "boolean" && typeof u != "function" && (C = -(-48 * -180 + 17 * 314 + -13977) === u.__i ? fn : A[u.__i] || fn, u.__i = g, Li(x, u, C, n, i, r, a, s, c, d), p = u.__e, u.ref && C.ref != u.ref && (C.ref && Di(C.ref, null, u), d.push(u.ref, u.__c || p, u)), b == null && p != null && (b = p), -365 * -157 + 5 * 11431 + -48924 & u.__u || C.__k === u.__k ? (s && typeof u.type == "string" && !x.contains(s) && (s = c0(C)), s = cs(u, s, x)) : typeof u.type == "function" && void (-451 + 11 * 41) !== u.__d ? s = u.__d : p && (s = p.nextSibling), u.__d = void (-7286 * 1 + 1460 + 5826), u.__u &= -(-34823 + 231432 * 1));
  t.__d = s, t.__e = b;
}
function Ig(x, o, t) {
  var e, n, i, r, a, s = o.length, c = t.length, d = c, g = -1019 * 2 + 2451 + -413;
  for (x.__k = [], e = 528 + 4589 * 1 + -5117; e < s; e++) r = e + g, (n = x.__k[e] = (n = o[e]) == null || typeof n == "boolean" || typeof n == "function" ? null : typeof n == "string" || typeof n == "number" || typeof n == "bigint" || n.constructor == String ? dn(null, n, null, null, null) : eo(n) ? dn(nt, { children: n }, null, null, null) : n.constructor === void 0 && n.__b > -1877 * -1 + -6010 + 1 * 4133 ? dn(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v) : n) != null ? (n.__ = x, n.__b = x.__b + (-6331 * 1 + 4947 + 1385), a = fg(n, t, r, d), n.__i = a, i = null, -(1 * 5153 + -783 * -4 + -4142 * 2) !== a && (d--, (i = t[a]) && (i.__u |= 686 * 164 + 29 * -6551 + 208547)), i == null || i.__v === null ? (-(-4574 + -305 * -15) == a && g--, typeof n.type != "function" && (n.__u |= 65536)) : a !== r && (a == r - (-4661 * 1 + -3034 + -2 * -3848) ? g = a - r : a == r + 1 ? g++ : a > r ? d > s - r ? g += a - r : g-- : a < r && g++, a !== e + g && (n.__u |= 101082 + 17773 * -2))) : (i = t[r]) && i.key == null && i.__e && -5815 + 4574 * 1 + 1 * 1241 == (73459 * 1 + 159220 + -101607 & i.__u) && (i.__e == x.__d && (x.__d = c0(i)), Qo(i, i, !(-3270 * -3 + 2001 + -5905 * 2)), t[r] = null, d--);
  if (d)
    for (e = 7915 * 1 + -682 + -3 * 2411; e < c; e++) (i = t[e]) != null && -8932 + 3 * 3 + 8923 == (3 * 59883 + -19285 * -11 + -260712 & i.__u) && (i.__e == x.__d && (x.__d = c0(i)), Qo(i, i));
}
function cs(x, o, t) {
  var e, n;
  if (typeof x.type == "function") {
    for (e = x.__k, n = 0; e && n < e.length; n++) e[n] && (e[n].__ = x, o = cs(e[n], o, t));
    return o;
  }
  x.__e != o && (t.insertBefore(x.__e, o || null), o = x.__e);
  do
    o = o && o.nextSibling;
  while (o != null && 7263 + -5 * 1451 === o.nodeType);
  return o;
}
function Gt(x, o) {
  return o = o || [], x == null || typeof x == "boolean" || (eo(x) ? x.some(function(t) {
    Gt(t, o);
  }) : o.push(x)), o;
}
function fg(x, o, t, e) {
  var n = x.key, i = x.type, r = t - (-1722 * -1 + -2 * 967 + -213 * -1), a = t + (7697 + -1 * 632 + -7064), s = o[t];
  if (s === null || s && n == s.key && i === s.type && 3 * 1711 + -5870 + 737 == (-117593 + 4510 * -5 + 2583 * 105 & s.__u)) return t;
  if (e > (s != null && 7857 + 97 * -81 == (67035 + 64037 * 1 & s.__u) ? 1 * -6928 + 5 * 1549 + -816 : 287 * 14 + -345 * 27 + 5297)) for (; r >= -3946 * 1 + 2 * -2439 + 4412 * 2 || a < o.length; ) {
    if (r >= 1 * -3890 + 6004 + -2114) {
      if ((s = o[r]) && 5638 + 92 * -18 + -3982 == (119 * 1225 + -1 * 91513 + 76810 & s.__u) && n == s.key && i === s.type) return r;
      r--;
    }
    if (a < o.length) {
      if ((s = o[a]) && 5 * -1889 + 89 * -102 + 18523 == (-155180 + 221294 * -1 + -3 * -169182 & s.__u) && n == s.key && i === s.type) return a;
      a++;
    }
  }
  return -(661 * -11 + 2707 * -1 + -9979 * -1);
}
function Nr(x, o, t) {
  o[13 * -482 + 5969 + 11 * 27] === "-" ? x.setProperty(o, t ?? "") : x[o] = t == null ? "" : typeof t != "number" || ug.test(o) ? t : t + "px";
}
function _n(x, o, t, e, n) {
  var i;
  e: if (o === "style")
    if (typeof t == "string") x.style.cssText = t;
    else {
      if (typeof e == "string" && (x.style.cssText = e = ""), e)
        for (o in e) t && o in t || Nr(x.style, o, "");
      if (t)
        for (o in t) e && t[o] === e[o] || Nr(x.style, o, t[o]);
    }
  else if (o[-10 * 859 + -1 * -2943 + -1 * -5647] === "o" && o[-6549 + -3207 * 2 + 1 * 12964] === "n") i = o !== (o = o.replace(/(PointerCapture)$|Capture$/i, "$1")), o = o.toLowerCase() in x || o === "onFocusOut" || o === "onFocusIn" ? o.toLowerCase().slice(-50 * 73 + -2157 * -3 + 2819 * -1) : o.slice(-3475 + -58 * 30 + -111 * -47), x.l || (x.l = {}), x.l[o + i] = t, t ? e ? t.u = e.u : (t.u = Ei, x.addEventListener(o, i ? _o : Jo, i)) : x.removeEventListener(o, i ? _o : Jo, i);
  else {
    if (n == "http://www.w3.org/2000/svg") o = o.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (o != "width" && o != "height" && o != "href" && o != "list" && o != "form" && o != "tabIndex" && o != "download" && o != "rowSpan" && o != "colSpan" && o != "role" && o != "popover" && o in x) try {
      x[o] = t ?? "";
      break e;
    } catch {
    }
    typeof t == "function" || (t == null || !(-383 + -367 * -1 + -1 * -17) === t && o[3748 + 2591 * -2 + 1438] !== "-" ? x.removeAttribute(o) : x.setAttribute(o, o == "popover" && 2863 + 603 * -2 + -36 * 46 == t ? "" : t));
  }
}
function Yr(x) {
  return function(o) {
    if (this.l) {
      var t = this.l[o.type + x];
      if (o.t == null) o.t = Ei++;
      else if (o.t < t.u) return;
      return t(Y.event ? Y.event(o) : o);
    }
  };
}
function Li(x, o, t, e, n, i, r, a, s, c) {
  var d, g, C, u, p, b, A, l, v, Z, X, j, _, R, oe, U, ee = o.type;
  if (void (-91 * -109 + 4083 * -1 + -5836) !== o.constructor) return null;
  -2 * 3295 + -2323 * -3 + -251 & t.__u && (s = !!(-1 * 6733 + -2994 + 9759 & t.__u), i = [a = o.__e = t.__e]), (d = Y.__b) && d(o);
  e: if (typeof ee == "function") try {
    if (l = o.props, v = "prototype" in ee && ee.prototype.render, Z = (d = ee.contextType) && e[d.__c], X = d ? Z ? Z.props.value : d.__ : e, t.__c ? A = (g = o.__c = t.__c).__ = g.__E : (v ? o.__c = g = new ee(l, X) : (o.__c = g = new $e(l, X), g.constructor = ee, g.render = pg), Z && Z.sub(g), g.props = l, g.state || (g.state = {}), g.context = X, g.__n = e, C = g.__d = !(3740 + 5 * 1318 + -10330 * 1), g.__h = [], g._sb = []), v && g.__s == null && (g.__s = g.state), v && ee.getDerivedStateFromProps != null && (g.__s == g.state && (g.__s = Bt({}, g.__s)), Bt(g.__s, ee.getDerivedStateFromProps(l, g.__s))), u = g.props, p = g.state, g.__v = o, C) v && ee.getDerivedStateFromProps == null && g.componentWillMount != null && g.componentWillMount(), v && g.componentDidMount != null && g.__h.push(g.componentDidMount);
    else {
      if (v && ee.getDerivedStateFromProps == null && l !== u && g.componentWillReceiveProps != null && g.componentWillReceiveProps(l, X), !g.__e && (g.shouldComponentUpdate != null && !(-7351 * -1 + -3397 * -1 + 11 * -977) === g.shouldComponentUpdate(l, g.__s, X) || o.__v === t.__v)) {
        for (o.__v !== t.__v && (g.props = l, g.state = g.__s, g.__d = !(-9363 * -1 + -6243 + -3119)), o.__e = t.__e, o.__k = t.__k, o.__k.forEach(function(Le) {
          Le && (Le.__ = o);
        }), j = -41 * -179 + -6970 + -369; j < g._sb.length; j++) g.__h.push(g._sb[j]);
        g._sb = [], g.__h.length && r.push(g);
        break e;
      }
      g.componentWillUpdate != null && g.componentWillUpdate(l, g.__s, X), v && g.componentDidUpdate != null && g.__h.push(function() {
        g.componentDidUpdate(u, p, b);
      });
    }
    if (g.context = X, g.props = l, g.__P = x, g.__e = !(941 * 5 + -5658 + 954), _ = Y.__r, R = 42 * -127 + 8479 + -85 * 37, v) {
      for (g.state = g.__s, g.__d = !1, _ && _(o), d = g.render(g.props, g.state, g.context), oe = 1336 * -2 + 215 * -1 + 2887; oe < g._sb.length; oe++) g.__h.push(g._sb[oe]);
      g._sb = [];
    } else do
      g.__d = !(-1 * -9041 + -2970 + -607 * 10), _ && _(o), d = g.render(g.props, g.state, g.context), g.state = g.__s;
    while (g.__d && ++R < 2313 * -3 + -98 * 1 + 2354 * 3);
    g.state = g.__s, g.getChildContext != null && (e = Bt(Bt({}, e), g.getChildContext())), v && !C && g.getSnapshotBeforeUpdate != null && (b = g.getSnapshotBeforeUpdate(u, p)), ss(x, eo(U = d != null && d.type === nt && d.key == null ? d.props.children : d) ? U : [U], o, t, e, n, i, r, a, s, c), g.base = o.__e, o.__u &= -(8434 * -1 + 7339 + -4 * -314), g.__h.length && r.push(g), A && (g.__E = g.__ = null);
  } catch (Le) {
    o.__v = null, s || i != null ? (o.__e = a, o.__u |= s ? -9352 + 5 * -382 + 11422 : 32, i[i.indexOf(a)] = null) : (o.__e = t.__e, o.__k = t.__k), Y.__e(Le, o, t);
  }
  else i == null && o.__v === t.__v ? (o.__k = t.__k, o.__e = t.__e) : o.__e = Cg(t.__e, o, t, e, n, i, r, s, c);
  (d = Y.diffed) && d(o);
}
function gs(x, o, t) {
  o.__d = void 0;
  for (var e = 35 * 147 + -505 * -19 + 20 * -737; e < t.length; e++) Di(t[e], t[++e], t[++e]);
  Y.__c && Y.__c(o, x), x.some(function(n) {
    try {
      x = n.__h, n.__h = [], x.some(function(i) {
        i.call(n);
      });
    } catch (i) {
      Y.__e(i, n.__v);
    }
  });
}
function Cg(x, o, t, e, n, i, r, a, s) {
  var c, d, g, C, u, p, b, A = t.props, l = o.props, v = o.type;
  if (v === "svg" ? n = "http://www.w3.org/2000/svg" : v === "math" ? n = "http://www.w3.org/1998/Math/MathML" : n || (n = "http://www.w3.org/1999/xhtml"), i != null) {
    for (c = 1 * 9005 + -8 * -629 + -14037; c < i.length; c++) if ((u = i[c]) && "setAttribute" in u == !!v && (v ? u.localName === v : -1 * -4125 + 26 * 224 + -9946 === u.nodeType)) {
      x = u, i[c] = null;
      break;
    }
  }
  if (x == null) {
    if (v === null) return document.createTextNode(l);
    x = document.createElementNS(n, v, l.is && l), i = null, a = !(6448 + -21 * 307);
  }
  if (v === null) A === l || a && x.data === l || (x.data = l);
  else {
    if (i = i && kn.call(x.childNodes), A = t.props || fn, !a && i != null)
      for (A = {}, c = -3091 * 3 + -2232 + -39 * -295; c < x.attributes.length; c++) A[(u = x.attributes[c]).name] = u.value;
    for (c in A) if (u = A[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") g = u;
      else if (c !== "key" && !(c in l)) {
        if (c == "value" && "defaultValue" in l || c == "checked" && "defaultChecked" in l) continue;
        _n(x, c, null, u, n);
      }
    }
    for (c in l) u = l[c], c == "children" ? C = u : c == "dangerouslySetInnerHTML" ? d = u : c == "value" ? p = u : c == "checked" ? b = u : c === "key" || a && typeof u != "function" || A[c] === u || _n(x, c, u, A[c], n);
    if (d) a || g && (d.__html === g.__html || d.__html === x.innerHTML) || (x.innerHTML = d.__html), o.__k = [];
    else if (g && (x.innerHTML = ""), ss(x, eo(C) ? C : [C], o, t, e, v === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n, i, r, i ? i[-1765 * 4 + 8963 * 1 + 1903 * -1] : t.__k && c0(t, 5126 + 157 * 1 + -5283), a, s), i != null)
      for (c = i.length; c--; ) i[c] != null && rs(i[c]);
    a || (c = "value", void (14 * -239 + -193 * 7 + -427 * -11) !== p && (p !== x[c] || v === "progress" && !p || v === "option" && p !== A[c]) && _n(x, c, p, A[c], n), c = "checked", void (9229 + -442 * 13 + 9 * -387) !== b && b !== x[c] && _n(x, c, b, A[c], n));
  }
  return x;
}
function Di(x, o, t) {
  try {
    typeof x == "function" ? x(o) : x.current = o;
  } catch (e) {
    Y.__e(e, t);
  }
}
function Qo(x, o, t) {
  var e, n;
  if (Y.unmount && Y.unmount(x), (e = x.ref) && (e.current && e.current !== x.__e || Di(e, null, o)), (e = x.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (i) {
      Y.__e(i, o);
    }
    e.base = e.__P = null;
  }
  if (e = x.__k)
    for (n = 307 * -13 + 4446 + 7 * -65; n < e.length; n++) e[n] && Qo(e[n], o, t || typeof x.type != "function");
  t || x.__e == null || rs(x.__e), x.__c = x.__ = x.__e = x.__d = void (8364 + -93 * 71 + -587 * 3);
}
function pg(x, o, t) {
  return this.constructor(x, t);
}
function Mt(x, o, t) {
  var e, n, i, r;
  Y.__ && Y.__(x, o), n = (e = typeof t == "function") ? null : t && t.__k || o.__k, i = [], r = [], Li(o, x = (!e && t || o).__k = Ee(nt, null, [x]), n || fn, fn, o.namespaceURI, !e && t ? [t] : n ? null : o.firstChild ? kn.call(o.childNodes) : null, i, !e && t ? t : n ? n.__e : o.firstChild, e, r), gs(i, x, r);
}
function Ni(x, o) {
  Mt(x, o, Ni);
}
function Yi(x, o, t) {
  var e, n, i, r, a = Bt({}, x.props);
  for (i in x.type && x.type.defaultProps && (r = x.type.defaultProps), o) i == "key" ? e = o[i] : i == "ref" ? n = o[i] : a[i] = o[i] === void 0 && void (-3065 + -212 * 32 + 9849) !== r ? r[i] : o[i];
  return arguments.length > -4625 * -2 + -9692 * -1 + -18940 && (a.children = arguments.length > -1725 + -9437 * 1 + 2233 * 5 ? kn.call(arguments, 11 * 151 + 167 * 46 + -9341) : t), dn(x.type, a, e || x.key, n || x.ref, null);
}
function On(x, o) {
  var t = { __c: o = "__cC" + os++, __: x, Consumer: function(e, n) {
    return e.children(n);
  }, Provider: function(e) {
    var n, i;
    return this.getChildContext || (n = [], (i = {})[o] = this, this.getChildContext = function() {
      return i;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(r) {
      this.props.value !== r.value && n.some(function(a) {
        a.__e = !0, Uo(a);
      });
    }, this.sub = function(r) {
      n.push(r);
      var a = r.componentWillUnmount;
      r.componentWillUnmount = function() {
        n && n.splice(n.indexOf(r), 1), a && a.call(r);
      };
    }), e.children;
  } };
  return t.Provider.__ = t.Consumer.contextType = t;
}
kn = is.slice, Y = { __e: function(x, o, t, e) {
  for (var n, i, r; o = o.__; ) if ((n = o.__c) && !n.__) try {
    if ((i = n.constructor) && i.getDerivedStateFromError != null && (n.setState(i.getDerivedStateFromError(x)), r = n.__d), n.componentDidCatch != null && (n.componentDidCatch(x, e || {}), r = n.__d), r) return n.__E = n;
  } catch (a) {
    x = a;
  }
  throw x;
} }, ts = 842 * 1 + -9068 + 1371 * 6, ns = function(x) {
  return x != null && x.constructor == null;
}, $e.prototype.setState = function(x, o) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Bt({}, this.state), typeof x == "function" && (x = x(Bt({}, t), this.props)), x && Bt(t, x), x != null && this.__v && (o && this._sb.push(o), Uo(this));
}, $e.prototype.forceUpdate = function(x) {
  this.__v && (this.__e = !(-11 * -451 + -9377 + 4416), x && this.__h.push(x), Uo(this));
}, $e.prototype.render = nt, $t = [], xs = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, jo = function(x, o) {
  return x.__v.__b - o.__v.__b;
}, Ax.__r = -165 * 52 + -872 + 1 * 9452, Ei = 7550 + 1 * -9580 + 2030, Jo = Yr(!(-143 * -47 + -5016 + 1704 * -1)), _o = Yr(!(1 * 8422 + 146 + 8 * -1071)), os = 326 + 8195 * 1 + 8521 * -1;
function Fi() {
  return (Fi = Object.assign ? Object.assign.bind() : function(x) {
    for (var o = -2443 + -13 * -188; o < arguments.length; o++) {
      var t = arguments[o];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (x[e] = t[e]);
    }
    return x;
  }).apply(this, arguments);
}
var hg = ["context", "children"];
function mg(x) {
  this.getChildContext = function() {
    return x.context;
  };
  var o = x.children, t = function(e, n) {
    if (e == null) return {};
    var i, r, a = {}, s = Object.keys(e);
    for (r = -1 * 7369 + -2 * 1042 + -1 * -9453; r < s.length; r++) n.indexOf(i = s[r]) >= -7288 * 1 + 1 * -8822 + 16110 || (a[i] = e[i]);
    return a;
  }(x, hg);
  return Yi(o, t);
}
function bg() {
  var x = {};
  x.detail = {}, x.bubbles = !(1006 + 2 * -503), x.cancelable = !(5145 + 105 * 6 + -15 * 385);
  var o = new CustomEvent("_preact", x);
  this.dispatchEvent(o), this._vdom = Ee(mg, Fi({}, this._props, { context: o.detail.context }), function t(e, n) {
    if (1889 * 4 + 1 * -2701 + -4852 === e.nodeType) return e.data;
    if (e.nodeType !== 1) return null;
    var i = [], r = {}, a = 1213 * 5 + -22 * -242 + 1 * -11389, s = e.attributes, c = e.childNodes;
    for (a = s.length; a--; ) s[a].name !== "slot" && (r[s[a].name] = s[a].value, r[ds(s[a].name)] = s[a].value);
    for (a = c.length; a--; ) {
      var d = t(c[a], null), g = c[a].slot;
      g ? r[g] = Ee(Fr, { name: g }, d) : i[a] = d;
    }
    var C = n ? Ee(Fr, null, i) : i;
    return Ee(n || e.nodeName.toLowerCase(), r, C);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Ni : Mt)(this._vdom, this._root);
}
function ds(x) {
  return x.replace(/-(\w)/g, function(o, t) {
    return t ? t.toUpperCase() : "";
  });
}
function Ag(x, o, t) {
  if (this._vdom) {
    var e = {};
    e[x] = t = t ?? void (1617 + -5 * 171 + 254 * -3), e[ds(x)] = t, this._vdom = Yi(this._vdom, e), Mt(this._vdom, this._root);
  }
}
function yg() {
  Mt(this._vdom = null, this._root);
}
function Fr(x, o) {
  var t = this;
  return Ee("slot", Fi({}, x, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(n) {
      n.stopPropagation(), n.detail.context = o;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function Wg(x, o, t, e) {
  function n() {
    var i = Reflect.construct(HTMLElement, [], n);
    return i._vdomComponent = x, i._root = i, i;
  }
  return (n.prototype = Object.create(HTMLElement.prototype)).constructor = n, n.prototype.connectedCallback = bg, n.prototype.attributeChangedCallback = Ag, n.prototype.disconnectedCallback = yg, t = t || x.observedAttributes || Object.keys(x.propTypes || {}), n.observedAttributes = t, t.forEach(function(i) {
    Object.defineProperty(n.prototype, i, { get: function() {
      return this._vdom.props[i];
    }, set: function(r) {
      this._vdom ? this.attributeChangedCallback(i, null, r) : (this._props || (this._props = {}), this._props[i] = r, this.connectedCallback());
      var a = typeof r;
      r != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(i, r);
    } });
  }), customElements.define(o, n);
}
var vg = 199 * 19 + 1 * 9297 + 6539 * -2;
function O(x, o, t, e, n, i) {
  o || (o = {});
  var r, a, s = o;
  if ("ref" in s)
    for (a in s = {}, o) a == "ref" ? r = o[a] : s[a] = o[a];
  var c = {};
  c.type = x, c.props = s, c.key = t, c.ref = r, c.__k = null, c.__ = null, c.__b = 0, c.__e = null, c.__d = void (1451 * -1 + 5516 + -4065), c.__c = null, c.constructor = void (-5681 + 3275 * -1 + 4 * 2239), c.__v = --vg, c.__i = -1, c.__u = 0, c.__source = n, c.__self = i;
  var d = c;
  if (typeof x == "function" && (r = x.defaultProps))
    for (a in r) void (-1 * 8156 + -2 * -4241 + 163 * -2) === s[a] && (s[a] = r[a]);
  return Y.vnode && Y.vnode(d), d;
}
var Ne = function() {
  return Ne = Object.assign || function(o) {
    for (var t, e = 1, n = arguments.length; e < n; e++) {
      t = arguments[e];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (o[i] = t[i]);
    }
    return o;
  }, Ne.apply(this, arguments);
};
function P0(x, o, t) {
  if (t || arguments.length === 2) for (var e = 0, n = o.length, i; e < n; e++)
    (i || !(e in o)) && (i || (i = Array.prototype.slice.call(o, 0, e)), i[e] = o[e]);
  return x.concat(i || Array.prototype.slice.call(o));
}
function wg(x) {
  var o = Object.create(null);
  return function(t) {
    return o[t] === void 0 && (o[t] = x(t)), o[t];
  };
}
var Sg = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Bg = wg(function(x) {
  return Sg.test(x) || x.charCodeAt(-895 * 10 + -8758 + 8854 * 2) === 9832 + -1 * 9721 && x.charCodeAt(-3832 + -761 * -11 + -2 * 2269) === -1 * -4727 + -6135 + -3 * -506 && x.charCodeAt(-11774 + -1 * -11776) < -8087 * -1 + 9892 + 208 * -86;
}), Xt, re, So, Mr, V0 = 25 * -44 + 7188 + -4 * 1522, us = [], se = Y, Xr = se.__b, jr = se.__r, Jr = se.diffed, _r = se.__c, Ur = se.unmount, Qr = se.__;
function F0(x, o) {
  se.__h && se.__h(re, x, V0 || o), V0 = 59 * 151 + 1803 + -10712;
  var t = {};
  t.__ = [], t.__h = [];
  var e = re.__H || (re.__H = t);
  return x >= e.__.length && e.__.push({}), e.__[x];
}
function et(x) {
  return V0 = -5463 * -1 + 4543 * -1 + -1 * 919, Mi(fs, x);
}
function Mi(x, o, t) {
  var e = F0(Xt++, 2);
  if (e.t = x, !e.__c && (e.__ = [t ? t(o) : fs(void (-5716 + -7 * -1243 + -2985), o), function(a) {
    var s = e.__N ? e.__N[0] : e.__[0], c = e.t(s, a);
    s !== c && (e.__N = [c, e.__[5725 + 2 * -2141 + 7 * -206]], e.__c.setState({}));
  }], e.__c = re, !re.u)) {
    var n = function(a, s, c) {
      if (!e.__c.__H) return !0;
      var d = e.__c.__H.__.filter(function(C) {
        return !!C.__c;
      });
      if (d.every(function(C) {
        return !C.__N;
      })) return !i || i.call(this, a, s, c);
      var g = !(9723 + 5441 * -1 + 3 * -1427);
      return d.forEach(function(C) {
        if (C.__N) {
          var u = C.__[0];
          C.__ = C.__N, C.__N = void 0, u !== C.__[0] && (g = !0);
        }
      }), !(!g && e.__c.props === a) && (!i || i.call(this, a, s, c));
    };
    re.u = !0;
    var i = re.shouldComponentUpdate, r = re.componentWillUpdate;
    re.componentWillUpdate = function(a, s, c) {
      if (this.__e) {
        var d = i;
        i = void (-7776 + 823 * 4 + -59 * -76), n(a, s, c), i = d;
      }
      r && r.call(this, a, s, c);
    }, re.shouldComponentUpdate = n;
  }
  return e.__N || e.__;
}
function he(x, o) {
  var t = F0(Xt++, 3);
  !se.__s && Xi(t.__H, o) && (t.__ = x, t.i = o, re.__H.__h.push(t));
}
function M0(x, o) {
  var t = F0(Xt++, 4);
  !se.__s && Xi(t.__H, o) && (t.__ = x, t.i = o, re.__h.push(t));
}
function Ot(x) {
  return V0 = -421 * 19 + -1 * 8267 + 307 * 53, je(function() {
    var o = {};
    return o.current = x, o;
  }, []);
}
function ls(x, o, t) {
  V0 = 2945 * 1 + 6429 + 8 * -1171, M0(function() {
    return typeof x == "function" ? (x(o()), function() {
      return x(null);
    }) : x ? (x.current = o(), function() {
      return x.current = null;
    }) : void (-4742 + 2371 * 2);
  }, t == null ? t : t.concat(x));
}
function je(x, o) {
  var t = F0(Xt++, 7);
  return Xi(t.__H, o) && (t.__ = x(), t.__H = o, t.__h = x), t.__;
}
function Zt(x, o) {
  return V0 = 12071 + 12063 * -1, je(function() {
    return x;
  }, o);
}
function l0(x) {
  var o = re.context[x.__c], t = F0(Xt++, -6006 + 1 * -9179 + 1 * 15194);
  return t.c = x, o ? (t.__ == null && (t.__ = !(3964 + -94 * 53 + 1018), o.sub(re)), o.props.value) : x.__;
}
function yx(x, o) {
  se.useDebugValue && se.useDebugValue(o ? o(x) : x);
}
function Is() {
  var x = F0(Xt++, 11);
  if (!x.__) {
    for (var o = re.__v; o !== null && !o.__m && o.__ !== null; ) o = o.__;
    var t = o.__m || (o.__m = [-3200 + 565 * 10 + -350 * 7, 0]);
    x.__ = "P" + t[-1 * 9431 + 4149 + 19 * 278] + "-" + t[1636 * 1 + 5832 * -1 + 4197]++;
  }
  return x.__;
}
function Gg() {
  for (var x; x = us.shift(); ) if (x.__P && x.__H) try {
    x.__H.__h.forEach(rx), x.__H.__h.forEach(zo), x.__H.__h = [];
  } catch (o) {
    x.__H.__h = [], se.__e(o, x.__v);
  }
}
se.__b = function(x) {
  re = null, Xr && Xr(x);
}, se.__ = function(x, o) {
  x && o.__k && o.__k.__m && (x.__m = o.__k.__m), Qr && Qr(x, o);
}, se.__r = function(x) {
  jr && jr(x), Xt = 5269 + 1 * 2348 + -7617;
  var o = (re = x.__c).__H;
  o && (So === re ? (o.__h = [], re.__h = [], o.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (-61 * -131 + -409 * 19 + -220);
  })) : (o.__h.forEach(rx), o.__h.forEach(zo), o.__h = [], Xt = 0)), So = re;
}, se.diffed = function(x) {
  Jr && Jr(x);
  var o = x.__c;
  o && o.__H && (o.__H.__h.length && (-157 * 7 + 6813 + -5713 !== us.push(o) && Mr === se.requestAnimationFrame || ((Mr = se.requestAnimationFrame) || kg)(Gg)), o.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (6279 + -63 * 39 + -3822);
  })), So = re = null;
}, se.__c = function(x, o) {
  o.some(function(t) {
    try {
      t.__h.forEach(rx), t.__h = t.__h.filter(function(e) {
        return !e.__ || zo(e);
      });
    } catch (e) {
      o.some(function(n) {
        n.__h && (n.__h = []);
      }), o = [], se.__e(e, t.__v);
    }
  }), _r && _r(x, o);
}, se.unmount = function(x) {
  Ur && Ur(x);
  var o, t = x.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      rx(e);
    } catch (n) {
      o = n;
    }
  }), t.__H = void (2175 * 1 + 1 * -1171 + 251 * -4), o && se.__e(o, t.__v));
};
var zr = typeof requestAnimationFrame == "function";
function kg(x) {
  var o, t = function() {
    clearTimeout(e), zr && cancelAnimationFrame(o), setTimeout(x);
  }, e = setTimeout(t, 100);
  zr && (o = requestAnimationFrame(t));
}
function rx(x) {
  var o = re, t = x.__c;
  typeof t == "function" && (x.__c = void (4404 + 430 * 7 + 3707 * -2), t()), re = o;
}
function zo(x) {
  var o = re;
  x.__c = x.__(), re = o;
}
function Xi(x, o) {
  return !x || x.length !== o.length || o.some(function(t, e) {
    return t !== x[e];
  });
}
function fs(x, o) {
  return typeof o == "function" ? o(x) : o;
}
function Cs(x, o) {
  for (var t in o) x[t] = o[t];
  return x;
}
function qo(x, o) {
  for (var t in x) if (t !== "__source" && !(t in o)) return !(-15440 + 2 * 7720);
  for (var e in o) if (e !== "__source" && x[e] !== o[e]) return !(-25 * 236 + -9 * -537 + 1067);
  return !(9345 + -215 * -29 + -1 * 15579);
}
function $o(x, o) {
  this.props = x, this.context = o;
}
function Og(x, o) {
  function t(n) {
    var i = this.props.ref, r = i == n.ref;
    return !r && i && (i.call ? i(null) : i.current = null), o ? !o(this.props, n) || !r : qo(this.props, n);
  }
  function e(n) {
    return this.shouldComponentUpdate = t, Ee(x, n);
  }
  return e.displayName = "Memo(" + (x.displayName || x.name) + ")", e.prototype.isReactComponent = !(505 + -505 * 1), e.__f = !(-2 * -1069 + -2306 * 1 + 168), e;
}
($o.prototype = new $e()).isPureReactComponent = !(11267 + -19 * 593), $o.prototype.shouldComponentUpdate = function(x, o) {
  return qo(this.props, x) || qo(this.state, o);
};
var qr = Y.__b;
Y.__b = function(x) {
  x.type && x.type.__f && x.ref && (x.props.ref = x.ref, x.ref = null), qr && qr(x);
};
var Zg = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || -146 * -63 + 1 * -5534 + 247;
function ps(x) {
  function o(t) {
    var e = Cs({}, t);
    return delete e.ref, x(e, t.ref || null);
  }
  return o.$$typeof = Zg, o.render = o, o.prototype.isReactComponent = o.__f = !0, o.displayName = "ForwardRef(" + (x.displayName || x.name) + ")", o;
}
var $r = function(x, o) {
  return x == null ? null : Gt(Gt(x).map(o));
}, Hg = { map: $r, forEach: $r, count: function(x) {
  return x ? Gt(x).length : -85 * 4 + -62 * 127 + 74 * 111;
}, only: function(x) {
  var o = Gt(x);
  if (-1 * -2514 + -1219 + 1 * -1294 !== o.length) throw "Children.only";
  return o[-1250 + 2582 * 3 + -6496];
}, toArray: Gt }, Rg = Y.__e;
Y.__e = function(x, o, t, e) {
  if (x.then) {
    for (var n, i = o; i = i.__; ) if ((n = i.__c) && n.__c) return o.__e == null && (o.__e = t.__e, o.__k = t.__k), n.__c(x, o);
  }
  Rg(x, o, t, e);
};
var ea = Y.unmount;
function hs(x, o, t) {
  return x && (x.__c && x.__c.__H && (x.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), x.__c.__H = null), (x = Cs({}, x)).__c != null && (x.__c.__P === t && (x.__c.__P = o), x.__c = null), x.__k = x.__k && x.__k.map(function(e) {
    return hs(e, o, t);
  })), x;
}
function ms(x, o, t) {
  return x && t && (x.__v = null, x.__k = x.__k && x.__k.map(function(e) {
    return ms(e, o, t);
  }), x.__c && x.__c.__P === o && (x.__e && t.appendChild(x.__e), x.__c.__e = !(-19 * -123 + -8332 + 5995), x.__c.__P = t)), x;
}
function ax() {
  this.__u = 2192 + -3165 * 1 + 973, this.t = null, this.__b = null;
}
function bs(x) {
  var o = x.__.__c;
  return o && o.__a && o.__a(x);
}
function Kg(x) {
  var o, t, e;
  function n(i) {
    if (o || (o = x()).then(function(r) {
      t = r.default || r;
    }, function(r) {
      e = r;
    }), e) throw e;
    if (!t) throw o;
    return Ee(t, i);
  }
  return n.displayName = "Lazy", n.__f = !(-5 * 977 + 1 * 7325 + -305 * 8), n;
}
function xn() {
  this.u = null, this.o = null;
}
Y.unmount = function(x) {
  var o = x.__c;
  o && o.__R && o.__R(), o && -47 * 149 + -1 * 83 + -2 * -3559 & x.__u && (x.type = null), ea && ea(x);
}, (ax.prototype = new $e()).__c = function(x, o) {
  var t = o.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var n = bs(e.__v), i = !(-1824 * 3 + -11 * -613 + -1270), r = function() {
    i || (i = !(9343 + 1 * -9343), t.__R = null, n ? n(a) : a());
  };
  t.__R = r;
  var a = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var s = e.state.__a;
        e.__v.__k[1885 + -1885 * 1] = ms(s, s.__c.__P, s.__c.__O);
      }
      var c;
      for (e.setState({ __a: e.__b = null }); c = e.t.pop(); ) c.forceUpdate();
    }
  };
  e.__u++ || -8814 + -1788 * 5 + -2 * -8893 & o.__u || e.setState({ __a: e.__b = e.__v.__k[-29 * -250 + -8914 + -32 * -52] }), x.then(r, r);
}, ax.prototype.componentWillUnmount = function() {
  this.t = [];
}, ax.prototype.render = function(x, o) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[-9730 * 1 + 1 * -2777 + 11 * 1137].__c;
      this.__v.__k[0] = hs(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var n = o.__a && Ee(nt, null, x.fallback);
  return n && (n.__u &= -(-3 * 1637 + -1 * -1665 + 3279)), [Ee(nt, null, o.__a ? null : x.children), n];
};
var ta = function(x, o, t) {
  if (++t[17 * 173 + -62 * -45 + -5730] === t[0] && x.o.delete(o), x.props.revealOrder && (x.props.revealOrder[0] !== "t" || !x.o.size)) for (t = x.u; t; ) {
    for (; t.length > -674 + 1 * 25 + 652; ) t.pop()();
    if (t[321 * -10 + -13 * -701 + -5902] < t[-836 + -1 * 9049 + 9885]) break;
    x.u = t = t[-38 * 106 + 3 * -1305 + 7945];
  }
};
function Pg(x) {
  return this.getChildContext = function() {
    return x.context;
  }, x.children;
}
function Vg(x) {
  var o = this, t = x.i;
  o.componentWillUnmount = function() {
    Mt(null, o.l), o.l = null, o.i = null;
  }, o.i && o.i !== t && o.componentWillUnmount(), o.l || (o.i = t, o.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(8452 * -1 + -4255 + 1 * 12707);
  }, appendChild: function(e) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, insertBefore: function(e, n) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> 4 * -1132 + -8794 + 13323, 8885 + -1721 * -2 + -12326), o.i.removeChild(e);
  } }), Mt(Ee(Pg, { context: o.context }, x.__v), o.l);
}
function Tg(x, o) {
  var t = {};
  t.__v = x, t.i = o;
  var e = Ee(Vg, t);
  return e.containerInfo = o, e;
}
(xn.prototype = new $e()).__a = function(x) {
  var o = this, t = bs(o.__v), e = o.o.get(x);
  return e[6197 * 1 + 8 * -1051 + 67 * 33]++, function(n) {
    var i = function() {
      o.props.revealOrder ? (e.push(n), ta(o, x, e)) : n();
    };
    t ? t(i) : i();
  };
}, xn.prototype.render = function(x) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var o = Gt(x.children);
  x.revealOrder && x.revealOrder[-8 * -417 + -1213 + -2123] === "b" && o.reverse();
  for (var t = o.length; t--; ) this.o.set(o[t], this.u = [1382 + -4786 * 1 + 3405, -337 * -26 + -5031 + -3731, this.u]);
  return x.children;
}, xn.prototype.componentDidUpdate = xn.prototype.componentDidMount = function() {
  var x = this;
  this.o.forEach(function(o, t) {
    ta(x, t, o);
  });
};
var As = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || -3163 * -21 + 18280 + -24600, Eg = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Lg = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Dg = /[A-Z0-9]/g, Ng = typeof document < "u", Yg = function(x) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(x);
};
function Fg(x, o, t) {
  return o.__k == null && (o.textContent = ""), Mt(x, o), typeof t == "function" && t(), x ? x.__c : null;
}
function Mg(x, o, t) {
  return Ni(x, o), typeof t == "function" && t(), x ? x.__c : null;
}
$e.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(x) {
  Object.defineProperty($e.prototype, x, { configurable: !(363 + 1399 * -2 + 5 * 487), get: function() {
    return this["UNSAFE_" + x];
  }, set: function(o) {
    var t = {};
    t.configurable = !0, t.writable = !(-5783 + -1 * 5837 + 11620), t.value = o, Object.defineProperty(this, x, t);
  } });
});
var na = Y.event;
function Xg() {
}
function jg() {
  return this.cancelBubble;
}
function Jg() {
  return this.defaultPrevented;
}
Y.event = function(x) {
  return na && (x = na(x)), x.persist = Xg, x.isPropagationStopped = jg, x.isDefaultPrevented = Jg, x.nativeEvent = x;
};
var sx = {};
sx.enumerable = !(1583 + -14 * -493 + 1414 * -6), sx.configurable = !(8621 * 1 + -2 * 3161 + -2299), sx.get = function() {
  return this.class;
};
var ji, _g = sx, xa = Y.vnode;
Y.vnode = function(x) {
  typeof x.type == "string" && function(o) {
    var t = o.props, e = o.type, n = {};
    for (var i in t) {
      var r = t[i];
      if (!(i === "value" && "defaultValue" in t && r == null || Ng && i === "children" && e === "noscript" || i === "class" || i === "className")) {
        var a = i.toLowerCase();
        i === "defaultValue" && "value" in t && t.value == null ? i = "value" : i === "download" && !(34 * 223 + 9073 * 1 + 16655 * -1) === r ? r = "" : a === "translate" && r === "no" ? r = !(2441 + -1 * 3418 + -2 * -489) : a === "ondoubleclick" ? i = "ondblclick" : a !== "onchange" || e !== "input" && e !== "textarea" || Yg(t.type) ? a === "onfocus" ? i = "onfocusin" : a === "onblur" ? i = "onfocusout" : Lg.test(i) ? i = a : -(1 * 3599 + -3673 * 1 + 75) === e.indexOf("-") && Eg.test(i) ? i = i.replace(Dg, "-$&").toLowerCase() : r === null && (r = void (13 * -751 + -9061 + 18824)) : a = i = "oninput", a === "oninput" && n[i = a] && (i = "oninputCapture"), n[i] = r;
      }
    }
    e == "select" && n.multiple && Array.isArray(n.value) && (n.value = Gt(t.children).forEach(function(s) {
      s.props.selected = -(17 * -158 + -22 * 389 + 173 * 65) != n.value.indexOf(s.props.value);
    })), e == "select" && n.defaultValue != null && (n.value = Gt(t.children).forEach(function(s) {
      s.props.selected = n.multiple ? -(1 * -1643 + 5535 + -1297 * 3) != n.defaultValue.indexOf(s.props.value) : n.defaultValue == s.props.value;
    })), t.class && !t.className ? (n.class = t.class, Object.defineProperty(n, "className", _g)) : (t.className && !t.class || t.class && t.className) && (n.class = n.className = t.className), o.props = n;
  }(x), x.$$typeof = As, xa && xa(x);
};
var oa = Y.__r;
Y.__r = function(x) {
  oa && oa(x), ji = x.__c;
};
var ia = Y.diffed;
Y.diffed = function(x) {
  ia && ia(x);
  var o = x.props, t = x.__e;
  t != null && x.type === "textarea" && "value" in o && o.value !== t.value && (t.value = o.value == null ? "" : o.value), ji = null;
};
var ve = {};
ve.readContext = function(x) {
  return ji.__n[x.__c].props.value;
}, ve.useCallback = Zt, ve.useContext = l0, ve.useDebugValue = yx, ve.useDeferredValue = ws, ve.useEffect = he, ve.useId = Is, ve.useImperativeHandle = ls, ve.useInsertionEffect = Bs, ve.useLayoutEffect = M0, ve.useMemo = je, ve.useReducer = Mi, ve.useRef = Ot, ve.useState = et, ve.useSyncExternalStore = Gs, ve.useTransition = Ss;
var ys = {};
ys.current = ve;
var Ws = {};
Ws.ReactCurrentDispatcher = ys;
var Ug = Ws;
function Qg(x) {
  return Ee.bind(null, x);
}
function to(x) {
  return !!x && x.$$typeof === As;
}
function zg(x) {
  return to(x) && x.type === nt;
}
function qg(x) {
  return !!x && !!x.displayName && (typeof x.displayName == "string" || x.displayName instanceof String) && x.displayName.startsWith("Memo(");
}
function $g(x) {
  return to(x) ? Yi.apply(null, arguments) : x;
}
function ed(x) {
  return !!x.__k && (Mt(null, x), !0);
}
function td(x) {
  return x && (x.base || -374 + 75 * 5 === x.nodeType && x) || null;
}
var nd = function(x, o) {
  return x(o);
}, xd = function(x, o) {
  return x(o);
}, od = nt;
function vs(x) {
  x();
}
function ws(x) {
  return x;
}
function Ss() {
  return [!(-1622 + 4 * 514 + -1 * 433), vs];
}
var Bs = M0, id = to;
function Gs(x, o) {
  var t = o(), e = et({ h: { __: t, v: o } }), n = e[2065 + 1 * 996 + -3061].h, i = e[-8608 + -1 * -8609];
  return M0(function() {
    n.__ = t, n.v = o, Bo(n) && i({ h: n });
  }, [x, t, o]), he(function() {
    return Bo(n) && i({ h: n }), x(function() {
      Bo(n) && i({ h: n });
    });
  }, [x]), t;
}
function Bo(x) {
  var o, t, e = x.v, n = x.__;
  try {
    var i = e();
    return !((o = n) === (t = i) && (-7 * 813 + 1 * -9679 + 15370 !== o || (1330 * 7 + -5313 + 111 * -36) / o == (3656 + 50 * -127 + 2695) / t) || o != o && t != t);
  } catch {
    return !(-206 * 17 + 87 * 53 + -1 * 1109);
  }
}
var D = {};
D.useState = et, D.useId = Is, D.useReducer = Mi, D.useEffect = he, D.useLayoutEffect = M0, D.useInsertionEffect = Bs, D.useTransition = Ss, D.useDeferredValue = ws, D.useSyncExternalStore = Gs, D.startTransition = vs, D.useRef = Ot, D.useImperativeHandle = ls, D.useMemo = je, D.useCallback = Zt, D.useContext = l0, D.useDebugValue = yx, D.version = "17.0.2", D.Children = Hg, D.render = Fg, D.hydrate = Mg, D.unmountComponentAtNode = ed, D.createPortal = Tg, D.createElement = Ee, D.createContext = On, D.createFactory = Qg, D.cloneElement = $g, D.createRef = lg, D.Fragment = nt, D.isValidElement = to, D.isElement = id, D.isFragment = zg, D.isMemo = qg, D.findDOMNode = td, D.Component = $e, D.PureComponent = $o, D.memo = Og, D.forwardRef = ps, D.flushSync = xd, D.unstable_batchedUpdates = nd, D.StrictMode = od, D.Suspense = ax, D.SuspenseList = xn, D.lazy = Kg, D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ug;
var g0 = D, rd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ad(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function sd(x) {
  return x && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function cd(x) {
  return x && Object.prototype.hasOwnProperty.call(x, "default") && Object.keys(x).length === 1 ? x.default : x;
}
function gd(x) {
  if (x.__esModule) return x;
  var o = x.default;
  if (typeof o == "function") {
    var t = function e() {
      return this instanceof e ? Reflect.construct(o, arguments, this.constructor) : o.apply(this, arguments);
    };
    t.prototype = o.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(x).forEach(function(e) {
    var n = Object.getOwnPropertyDescriptor(x, e);
    Object.defineProperty(t, e, n.get ? n : {
      enumerable: !0,
      get: function() {
        return x[e];
      }
    });
  }), t;
}
const dd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: rd,
  getAugmentedNamespace: gd,
  getDefaultExportFromCjs: ad,
  getDefaultExportFromNamespaceIfNotNamed: cd,
  getDefaultExportFromNamespaceIfPresent: sd
}, Symbol.toStringTag, { value: "Module" }));
var ud = function(o, t, e, n) {
  var i = e ? e.call(n, o, t) : void 0;
  if (i !== void (2062 * -1 + -699 * 1 + 2761)) return !!i;
  if (o === t) return !0;
  if (typeof o != "object" || !o || typeof t != "object" || !t) return !1;
  var r = Object.keys(o), a = Object.keys(t);
  if (r.length !== a.length) return !1;
  for (var s = Object.prototype.hasOwnProperty.bind(t), c = -142 * -1 + 1281 + -1423; c < r.length; c++) {
    var d = r[c];
    if (!s(d)) return !1;
    var g = o[d], C = t[d];
    if (i = e ? e.call(n, g, C, d) : void 0, i === !1 || i === void (-8564 + 94 * -70 + 15144) && g !== C) return !1;
  }
  return !0;
};
const ld = dd.getDefaultExportFromCjs(ud);
var ie = "-ms-", un = "-moz-", $ = "-webkit-", ks = "comm", no = "rule", Ji = "decl", Id = "@import", Os = "@keyframes", fd = "@layer", Zs = Math.abs, _i = String.fromCharCode, ei = Object.assign;
function Cd(x, o) {
  return me(x, -37 * -13 + -7286 * 1 + 6805) ^ 6522 + -2411 * 1 + -4066 ? (((o << 2 ^ me(x, 8236 + 4118 * -2)) << -141 * 67 + -8556 + -13 * -1385 ^ me(x, -2 * -1081 + -3039 + 878)) << 2 ^ me(x, -2 * 3989 + -3164 + 56 * 199)) << -2 * 2167 + -8293 * -1 + 1319 * -3 ^ me(x, 3) : -4028 + -2014 * -2;
}
function Hs(x) {
  return x.trim();
}
function Wt(x, o) {
  return (x = o.exec(x)) ? x[-6308 + 1 * 1349 + 87 * 57] : x;
}
function F(x, o, t) {
  return x.replace(o, t);
}
function cx(x, o, t) {
  return x.indexOf(o, t);
}
function me(x, o) {
  return x.charCodeAt(o) | 0;
}
function T0(x, o, t) {
  return x.slice(o, t);
}
function It(x) {
  return x.length;
}
function Rs(x) {
  return x.length;
}
function on(x, o) {
  return o.push(x), x;
}
function pd(x, o) {
  return x.map(o).join("");
}
function ra(x, o) {
  return x.filter(function(t) {
    return !Wt(t, o);
  });
}
var xo = -815 * 8 + 7 * 1377 + -3118, E0 = 2 * 3035 + -29 * 152 + -1661, Ks = 12 * -822 + -7267 + 463 * 37, xt = 9182 + -2590 * -2 + -334 * 43, fe = 4220 * -1 + -3271 + 1 * 7491, X0 = "";
function oo(x, o, t, e, n, i, r, a) {
  var s = {};
  return s.value = x, s.root = o, s.parent = t, s.type = e, s.props = n, s.children = i, s.line = xo, s.column = E0, s.length = r, s.return = "", s.siblings = a, s;
}
function Lt(x, o) {
  return ei(oo("", null, null, "", null, null, -3534 + -31 * -89 + 775, x.siblings), x, { length: -x.length }, o);
}
function S0(x) {
  for (; x.root; ) x = Lt(x.root, { children: [x] });
  on(x, x.siblings);
}
function hd() {
  return fe;
}
function md() {
  return fe = xt > 6690 + 5 * -1338 ? me(X0, --xt) : -5598 + -133 * -25 + 2273, E0--, fe === -1 * 9865 + -7880 * 1 + 17755 && (E0 = 1, xo--), fe;
}
function st() {
  return fe = xt < Ks ? me(X0, xt++) : 3 * 1006 + 43 * 177 + -3543 * 3, E0++, fe === -1 * -978 + -6215 + 5247 && (E0 = -3037 * -2 + -1793 + 4280 * -1, xo++), fe;
}
function a0() {
  return me(X0, xt);
}
function gx() {
  return xt;
}
function io(x, o) {
  return T0(X0, x, o);
}
function ti(x) {
  switch (x) {
    case 9466 + 4651 * -2 + -164:
    case 9:
    case 8870 + -5 * 1772:
    case 439 * -4 + -4355 * -1 + -3 * 862:
    case 55 * -157 + 8 * 821 + 2099:
      return 1676 * 2 + -1 * -4762 + -153 * 53;
    case -9 * 499 + -914 + 5438:
    case 3198 + -631 * 5:
    case -2202 * -2 + -2 * 4273 + -26 * -161:
    case 9611 + 1 * 4079 + -13643:
    case -73 * -16 + 3005 + -4111:
    case 1804 + -2 * -2514 + -6768:
    case -1 * 8810 + -1166 * 7 + 17098:
    case 5966 + -8 * 184 + -4435:
    case -7360 + 5 * 1198 + 1493 * 1:
    case 6423 + 20 * -194 + -2418:
      return -4445 + -30 * -183 + -1041;
    case -217 * 3 + -562 + 1271:
      return -4931 * 1 + -1 * 9897 + 14831 * 1;
    case -4 * 2414 + 7251 + 1 * 2439:
    case -2033 + 259 * 8:
    case -1 * 6705 + -8411 + 15156:
    case -759 * 3 + -4707 + 7075:
      return -5232 + -479 * 1 + 1 * 5713;
    case 6282 + 226 * 44 + -415 * 39:
    case 7767 + -1 * 9005 + -1331 * -1:
      return 1768 + 9173 * -1 + -14 * -529;
  }
  return 4217 * 2 + -8400 + -34;
}
function bd(x) {
  return xo = E0 = 4 * 1914 + -4320 + -3335, Ks = It(X0 = x), xt = 0, [];
}
function Ad(x) {
  return X0 = "", x;
}
function Go(x) {
  return Hs(io(xt - (-1761 + -2 * -3254 + 1582 * -3), ni(x === 573 * -2 + -607 + 1844 ? x + (1529 * -6 + 1 * -4325 + 13501) : x === 40 ? x + (-721 * 3 + -4043 * 2 + 10250 * 1) : x)));
}
function yd(x) {
  for (; (fe = a0()) && fe < -7 * 1307 + 9124 + 58; ) st();
  return ti(x) > 82 * 69 + 6801 + -1 * 12457 || ti(fe) > 2424 + -1 * 2421 ? "" : " ";
}
function Wd(x, o) {
  for (; --o && st() && !(fe < 6185 + 323 * -19 || fe > 1073 * -7 + -4718 + 12331 || fe > 9111 + -5003 * -1 + 14057 * -1 && fe < -10925 + 785 * 14 || fe > -1 * -8484 + 2 * -4955 + 1496 && fe < -1 * 6903 + -9709 + 16709); ) ;
  return io(x, gx() + (o < -2 * -143 + -316 * -13 + 4388 * -1 && a0() == -6075 + 1 * 6107 && st() == 3177 * -1 + -1628 + 4837));
}
function ni(x) {
  for (; st(); ) switch (fe) {
    case x:
      return xt;
    case -875 * 1 + 16 * 459 + -715 * 9:
    case 18369 + -2 * 9165:
      x !== 3219 + 1428 * 6 + -11753 && x !== 47 * 37 + -6512 + 4812 && ni(fe);
      break;
    case -7862 + 7519 * -1 + 15421 * 1:
      x === 168 * -23 + 8221 * 1 + 4316 * -1 && ni(x);
      break;
    case 9710 + -2566 * -3 + -444 * 39:
      st();
      break;
  }
  return xt;
}
function vd(x, o) {
  for (; st() && x + fe !== 47 + (-1747 + 8439 * 1 + 6682 * -1); ) if (x + fe === 290 + 1 * -248 + 42 && a0() === -7955 + -5 * 1809 + 17047) break;
  return "/*" + io(o, xt - 1) + "*" + _i(x === -3263 * 3 + -954 + 10790 ? x : st());
}
function wd(x) {
  for (; !ti(a0()); ) st();
  return io(x, xt);
}
function Sd(x) {
  return Ad(dx("", null, null, null, [""], x = bd(x), 8313 + 912 * -1 + -1 * 7401, [6 * -1373 + -2 * 2201 + -5 * -2528], x));
}
function dx(x, o, t, e, n, i, r, a, s) {
  for (var c = 0, d = -1812 * 5 + -626 * 4 + 11564, g = r, C = 8 * 761 + -1119 * -3 + -5 * 1889, u = -677 * 10 + -5373 * 1 + 12143, p = 7 * -1402 + -8369 + 18183, b = 1, A = -7303 + 1 * -1766 + -10 * -907, l = 7051 + -3955 * -2 + 935 * -16, v = 0, Z = "", X = n, j = i, _ = e, R = Z; A; ) switch (p = v, v = st()) {
    case -672 + 2 * 356:
      if (p != 9541 + 1522 * -5 + -1823 && me(R, g - 1) == 2069 * -2 + -1 * -5779 + -1583) {
        cx(R += F(Go(v), "&", "&\f"), "&\f", Zs(c ? a[c - (4 * -807 + 719 * 12 + 1 * -5399)] : 0)) != -(-21 * 428 + -4 * 2482 + 18917 * 1) && (l = -(631 * 2 + 3380 + 21 * -221));
        break;
      }
    case 1 * 1708 + 1973 * -3 + -849 * -5:
    case 3716 + 1 * -745 + 1466 * -2:
    case -7369 + 2458 * -2 + 12376:
      R += Go(v);
      break;
    case 5 * 1985 + -102 + -9814:
    case 10:
    case 2 * -904 + -5 * -375 + 2 * -27:
    case 47 * -161 + 80 * 125 + -2401:
      R += yd(p);
      break;
    case 24 * -404 + 8517 * 1 + 1271:
      R += Wd(gx() - (1 * -4217 + -1 * 871 + 727 * 7), 7);
      continue;
    case -1 * 410 + 37 * 243 + -8534 * 1:
      switch (a0()) {
        case -7083 + 125 * 57:
        case -7287 + -364 * -16 + 1510:
          on(Bd(vd(st(), gx()), o, t, s), s);
          break;
        default:
          R += "/";
      }
      break;
    case (13 * -139 + -8021 + 9951) * b:
      a[c++] = It(R) * l;
    case 125 * b:
    case -7999 * 1 + 1555 * -5 + 15833:
    case 6433 * -1 + 5 * 1709 + 192 * -11:
      switch (v) {
        case -7241 + 517 * -18 + 16547:
        case -3688 * 1 + -2476 * -2 + -1139 * 1:
          A = -5803 + 71 * 43 + 2750;
        case 7119 + 1 * -4366 + -2694 + d:
          l == -(-1917 + 4 * 157 + -30 * -43) && (R = F(R, /\f/g, "")), u > -388 + 97 * 4 && It(R) - g && on(u > 32 ? sa(R + ";", e, t, g - (558 + -557 * 1), s) : sa(F(R, " ", "") + ";", e, t, g - (7419 + -7 * 85 + -6822), s), s);
          break;
        case 4591 * -1 + -1658 * -5 + -3640:
          R += ";";
        default:
          if (on(_ = aa(R, o, t, c, d, n, a, Z, X = [], j = [], g, i), i), v === 7727 + 113 * -84 + 16 * 118)
            if (d === 6669 + 79 * 89 + -13700) dx(R, o, _, _, X, i, g, a, j);
            else switch (C === -6240 + 37 * -192 + 13443 && me(R, 1 * -9391 + -1182 + 10576 * 1) === 5381 * -1 + -6834 + 25 * 493 ? -877 * 10 + 2 * -3489 + 15848 : C) {
              case 7106 + 15 * -61 + -6091:
              case -7676 + 4 * -1253 + 12796:
              case -9322 + -1 * 8706 + 7 * 2591:
              case -2 * -1991 + -7201 + 1 * 3334:
                dx(x, _, _, e && on(aa(x, _, _, -9634 + 1 * 9634, 5713 + -197 * 29, n, a, Z, n, X = [], g, j), j), n, j, g, a, e ? X : j);
                break;
              default:
                dx(R, _, _, _, [""], j, 9331 + -7 * -1283 + -872 * 21, a, j);
            }
      }
      c = d = u = 0, b = l = -11 * 797 + 59 * -73 + -523 * -25, Z = R = "", g = r;
      break;
    case 3686 + -142 * -1 + -3770:
      g = 8546 + 1 * -9319 + 3 * 258 + It(R), u = p;
    default:
      if (b < -280 * 2 + 7070 + -6509) {
        if (v == -2 * -1556 + -1 * 2498 + 1 * -491) --b;
        else if (v == -1 * 8669 + -1 * 7291 + 16085 && b++ == 3721 * 1 + 4667 + -8388 && md() == -1651 * -1 + -9999 + 229 * 37) continue;
      }
      switch (R += _i(v), v * b) {
        case -5672 + 2855 * 2:
          l = d > 568 * 16 + -3510 + -5578 ? 3469 + 6 * -829 + 753 * 2 : (R += "\f", -(65 * -51 + -9497 + 4271 * 3));
          break;
        case 94 * 101 + 2982 + 28 * -444:
          a[c++] = (It(R) - (3784 + 1261 * -3)) * l, l = -1 * 1214 + 90 * 11 + 225;
          break;
        case 110 + 9245 * 1 + 489 * -19:
          a0() === 490 * -3 + 1 * 1949 + -434 && (R += Go(st())), C = a0(), d = g = It(Z = R += wd(gx())), v++;
          break;
        case -13834 + 1 * 13879:
          p === 45 && It(R) == -462 * -20 + 3 * -25 + -9163 && (b = -1427 * -1 + 8272 + 1 * -9699);
      }
  }
  return i;
}
function aa(x, o, t, e, n, i, r, a, s, c, d, g) {
  for (var C = n - 1, u = n === 2819 + 2819 * -1 ? i : [""], p = Rs(u), b = -1901 * -1 + 4411 * 1 + -6312, A = -4 * -13 + -2163 * -3 + 31 * -211, l = -4638 + 35 * 277 + 1 * -5057; b < e; ++b) for (var v = 1 * 3074 + 4074 + -7148 * 1, Z = T0(x, C + (-121 * 77 + 7695 + -3 * -541), C = Zs(A = r[b])), X = x; v < p; ++v) (X = Hs(A > 4580 + -1 * -4402 + -8982 * 1 ? u[v] + " " + Z : F(Z, /&\f/g, u[v]))) && (s[l++] = X);
  return oo(x, o, t, n === 1 * -5377 + -809 * -7 + -286 * 1 ? no : a, s, c, d, g);
}
function Bd(x, o, t, e) {
  return oo(x, o, t, ks, _i(hd()), T0(x, -3463 * -1 + 2508 + -47 * 127, -(-1 * 6190 + 3047 * 1 + 1 * 3145)), 3067 * 1 + -8302 + 5235, e);
}
function sa(x, o, t, e, n) {
  return oo(x, o, t, Ji, T0(x, 4600 + 50 * -92, e), T0(x, e + (-5 * 1337 + -173 * -42 + -580), -(8094 + 133 * -62 + 153)), e, n);
}
function Ps(x, o, t) {
  switch (Cd(x, o)) {
    case 27 * 121 + 969 + 867:
      return $ + "print-" + x + x;
    case 8634 * -1 + 1 * 9241 + 5130:
    case 1021 * 5 + 29 * -217 + 5389 * 1:
    case -5164 + 6 * -1480 + 17221:
    case 3433:
    case 1641:
    case -939 + 27 * 231 + -841:
    case 154 * 8 + -8 * -584 + -157 * 19:
    case 6 * 1621 + -7451 + 3297:
    case -616 * -2 + -10483 + 15607:
    case 13 * -249 + 76 * 137 + 121 * -11:
    case 3191:
    case 9 * 461 + 35 * 40 + 274 * 4:
    case 14729 + 6 * -1954:
    case 6391:
    case 5879:
    case 1287 * 1 + 103 * 25 + 1761 * 1:
    case 6135:
    case -1 * -1009 + -351 + 3941:
    case -9095 * -1 + 1667 + -11 * 537:
    case -9214 * 1 + -292 + 13721:
    case -11638 * -1 + -67 + -1 * 5182:
    case -6509 * -1 + -7320 + 80 * 74:
    case 16994 + 401 * -29:
    case -17801 + 14 * 1673:
    case -18236 + 15 * 1471:
      return $ + x + x;
    case -16 * -463 + 607 * 8 + -7475:
      return un + x + x;
    case 3854 + -1495 * -1:
    case 3518 + 182 * 4:
    case -1 * -515 + -54 + 4349:
    case 4064 * -1 + 1 * -13841 + 24873 * 1:
    case -3 * 2965 + 5 * 1993 + 1 * 1686:
      return $ + x + un + x + ie + x + x;
    case 57 * -37 + 76 * -106 + 16101:
      switch (me(x, o + (-4339 + -145 * -30))) {
        case -16 * 394 + 2061 + 4357:
          return $ + x + ie + F(x, /[svh]\w+-[tblr]{2}/, "tb") + x;
        case -10 * -614 + -4 * 1831 + 1292:
          return $ + x + ie + F(x, /[svh]\w+-[tblr]{2}/, "tb-rl") + x;
        case -8900 + 29 * 277 + -4 * -228:
          return $ + x + ie + F(x, /[svh]\w+-[tblr]{2}/, "lr") + x;
      }
    case -2685 * -1 + -12953 + 2137 * 8:
    case -192 + -147 * 48 + 1 * 11516:
    case -98 * 95 + -1 * -1559 + -10654 * -1:
      return $ + x + ie + x + x;
    case -3223 + 1 * 5467 + 3921:
      return $ + x + ie + "flex-" + x + x;
    case 5187:
      return $ + x + F(x, /(\w+).+(:[^]+)/, $ + "box-$1$2" + ie + "flex-$1$2") + x;
    case -1367 + 11 * 891 + -2991 * 1:
      return $ + x + ie + "flex-item-" + F(x, /flex-|-self/g, "") + (Wt(x, /flex-|baseline/) ? "" : ie + "grid-row-" + F(x, /flex-|-self/g, "")) + x;
    case 2521 * -1 + -7382 + 7289 * 2:
      return $ + x + ie + "flex-line-pack" + F(x, /align-content|flex-|-self/g, "") + x;
    case 3 * 1 + 4148 + -1 * -1397:
      return $ + x + ie + F(x, "shrink", "negative") + x;
    case 5 * 37 + -9742 + 14849:
      return $ + x + ie + F(x, "basis", "preferred-size") + x;
    case 7586 + -48 * 122 + 4330:
      return $ + "box-" + F(x, "-grow", "") + $ + x + ie + F(x, "grow", "positive") + x;
    case -3927 + 2827 * 3:
      return $ + F(x, /([^-])(transform)/g, "$1" + $ + "$2") + x;
    case 1 * -6334 + 3 * 1951 + 6668:
      return F(F(F(x, /(zoom-|grab)/, $ + "$1"), /(image-set)/, $ + "$1"), x, "") + x;
    case -5415 + 6703 * -1 + 1 * 17613:
    case -973 * 1 + -5802 * -1 + -870:
      return F(x, /(image-set\([^]*)/, $ + "$1$`$1");
    case -273 * -3 + 8713 * -1 + 218 * 59:
      return F(F(x, /(.+:)(flex-)?(.*)/, $ + "box-pack:$3" + ie + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + $ + x + x;
    case -873 + 1 * 5073:
      if (!Wt(x, /flex-|baseline/)) return ie + "grid-column-align" + T0(x, o) + x;
      break;
    case 2592:
    case 7045 * -1 + 3926 + 6479:
      return ie + F(x, "template-", "") + x;
    case -8 * 746 + -9958 + 20310:
    case 3616:
      return t && t.some(function(e, n) {
        return o = n, Wt(e.props, /grid-\w+-end/);
      }) ? ~cx(x + (t = t[o].value), "span", 4532 + 103 * -44) ? x : ie + F(x, "-start", "") + x + ie + "grid-row-span:" + (~cx(t, "span", -5074 + -991 * 3 + -8047 * -1) ? Wt(t, /\d+/) : +Wt(t, /\d+/) - +Wt(x, /\d+/)) + ";" : ie + F(x, "-start", "") + x;
    case -9460 + -1 * 7427 + 53 * 411:
    case 4128:
      return t && t.some(function(e) {
        return Wt(e.props, /grid-\w+-start/);
      }) ? x : ie + F(F(x, "-end", "-span"), "span ", "") + x;
    case 59 * 106 + -6869 + 1 * 4710:
    case 1 * -3137 + -9 * 813 + 14037:
    case 2716 + -676 * -2:
    case 9056 + -4 * 2477 + 3384:
      return F(x, /(.+)-inline(.+)/, $ + "$1$2") + x;
    case 326 * -17 + -1 * -173 + 13485:
    case -2281 * -3 + 140 * 20 + -2584:
    case -1 * -10992 + 7716 * -1 + 2477 * 1:
    case 5535:
    case -199 * 36 + 2325 + 2571 * 4:
    case 66 * 65 + 1 * -4603 + 31 * 194:
    case -3297 + 5 * 1646:
    case 7013 + 749 * 12 + 596 * -19:
    case -70 * 37 + -7701 + -688 * -23:
    case -14041 + -6 * -3305:
    case 10 * -246 + -1 * -2024 + -321 * -17:
    case 2 * -3876 + 4111 + 8406:
      if (It(x) - (-9623 * -1 + -457 + -9165) - o > -7 * -106 + 29 * -311 + -1 * -8283) switch (me(x, o + (-7 * -582 + 9184 + -13257))) {
        case -2472 + 8108 * 1 + -1 * 5527:
          if (me(x, o + (10026 + 2 * -5011)) !== 8891 * 1 + -7836 + -1010) break;
        case 1 * -7552 + 1795 * -3 + -221 * -59:
          return F(x, /(.+:)(.+)-([^]+)/, "$1" + $ + "$2-$3$1" + un + (me(x, o + (2 * -3361 + 719 * 10 + -465)) == -16 * -188 + 2 * 4089 + -58 * 191 ? "$3" : "$2-$3")) + x;
        case 115:
          return ~cx(x, "stretch", -10 * 818 + -8005 + 16185) ? Ps(F(x, "stretch", "fill-available"), o, t) + x : x;
      }
      break;
    case -8 + 2 * 3930 + -10 * 270:
    case 5920:
      return F(x, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, n, i, r, a, s, c) {
        return ie + n + ":" + i + c + (r ? ie + n + "-span:" + (a ? s : +s - +i) + c : "") + x;
      });
    case 1177 + 1019 * -2 + -415 * -14:
      if (me(x, o + (28 * 230 + -3642 + -2792)) === 2657 + 2 * 3787 + -10110) return F(x, ":", ":" + $) + x;
      break;
    case 5663 * 1 + -4228 + -1 * -5009:
      switch (me(x, me(x, 2050 + -2 * 2280 + -2 * -1262) === -17 * -2 + 9262 + -9251 * 1 ? 18 : 11)) {
        case -6389 + 283 * 23:
          return F(x, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + $ + (me(x, 2 * -4713 + 2 * -1727 + 12894) === -27 * 351 + -1441 * -4 + 3758 ? "inline-" : "") + "box$3$1" + $ + "$2$3$1" + ie + "$2box$3") + x;
        case 5 * 41 + -1622 + 1517:
          return F(x, ":", ":" + ie) + x;
      }
      break;
    case 9740 + 5 * 703 + -7536:
    case -381 * -19 + 501 * -3 + 1 * -3089:
    case -1 * 3931 + -7511 + 1 * 13577:
    case -1 * 5169 + -4 * 2221 + 8990 * 2:
    case -695 * -12 + 1619 + 1 * -7568:
      return F(x, "scroll-", "scroll-snap-") + x;
  }
  return x;
}
function Wx(x, o) {
  for (var t = "", e = -9009 + -757 * -3 + -6738 * -1; e < x.length; e++) t += o(x[e], e, x, o) || "";
  return t;
}
function Gd(x, o, t, e) {
  switch (x.type) {
    case fd:
      if (x.children.length) break;
    case Id:
    case Ji:
      return x.return = x.return || x.value;
    case ks:
      return "";
    case Os:
      return x.return = x.value + "{" + Wx(x.children, e) + "}";
    case no:
      if (!It(x.value = x.props.join(","))) return "";
  }
  return It(t = Wx(x.children, e)) ? x.return = x.value + "{" + t + "}" : "";
}
function kd(x) {
  var o = Rs(x);
  return function(t, e, n, i) {
    for (var r = "", a = 1601 + 1 * 1427 + -3028; a < o; a++) r += x[a](t, e, n, i) || "";
    return r;
  };
}
function Od(x) {
  return function(o) {
    o.root || (o = o.return) && x(o);
  };
}
function Zd(x, o, t, e) {
  if (x.length > -(4737 * -1 + -8052 + 12790) && !x.return)
    switch (x.type) {
      case Ji:
        x.return = Ps(x.value, x.length, t);
        return;
      case Os:
        return Wx([Lt(x, { value: F(x.value, "@", "@" + $) })], e);
      case no:
        if (x.length) return pd(t = x.props, function(n) {
          switch (Wt(n, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              S0(Lt(x, { props: [F(n, /:(read-\w+)/, ":" + un + "$1")] }));
              var i = {};
              i.props = [n], S0(Lt(x, i)), ei(x, { props: ra(t, e) });
              break;
            case "::placeholder":
              S0(Lt(x, { props: [F(n, /:(plac\w+)/, ":" + $ + "input-$1")] })), S0(Lt(x, { props: [F(n, /:(plac\w+)/, ":" + un + "$1")] })), S0(Lt(x, { props: [F(n, /:(plac\w+)/, ie + "input-$1")] }));
              var r = {};
              r.props = [n], S0(Lt(x, r)), ei(x, { props: ra(t, e) });
              break;
          }
          return "";
        });
    }
}
var L = {};
L.animationIterationCount = 1, L.aspectRatio = 1, L.borderImageOutset = 1, L.borderImageSlice = 1, L.borderImageWidth = 1, L.boxFlex = 1, L.boxFlexGroup = 1, L.boxOrdinalGroup = 1, L.columnCount = 1, L.columns = 1, L.flex = 1, L.flexGrow = 1, L.flexPositive = 1, L.flexShrink = 1, L.flexNegative = 1, L.flexOrder = 1, L.gridRow = 1, L.gridRowEnd = 1, L.gridRowSpan = 1, L.gridRowStart = 1, L.gridColumn = 1, L.gridColumnEnd = 1, L.gridColumnSpan = 1, L.gridColumnStart = 1, L.msGridRow = 1, L.msGridRowSpan = 1, L.msGridColumn = 1, L.msGridColumnSpan = 1, L.fontWeight = 1, L.lineHeight = 1, L.opacity = 1, L.order = 1, L.orphans = 1, L.tabSize = 1, L.widows = 1, L.zIndex = 1, L.zoom = 1, L.WebkitLineClamp = 1, L.fillOpacity = 1, L.floodOpacity = 1, L.stopOpacity = 1, L.strokeDasharray = 1, L.strokeDashoffset = 1, L.strokeMiterlimit = 1, L.strokeOpacity = 1, L.strokeWidth = 1;
var Hd = L, z = {}, d0 = typeof process < "u" && void (2 * 2372 + -17 * 544 + 4504) !== z && (z.REACT_APP_SC_ATTR || z.SC_ATTR) || "data-styled", Vs = "active", Ts = "data-styled-version", ro = "6.1.11", Ui = `/*!sc*/
`, Qi = typeof window < "u" && "HTMLElement" in window, Rd = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (1 * -7798 + -1140 + 8938) !== z && void (-2919 + -2 * -3164 + -3409) !== z.REACT_APP_SC_DISABLE_SPEEDY && z.REACT_APP_SC_DISABLE_SPEEDY !== "" ? z.REACT_APP_SC_DISABLE_SPEEDY !== "false" && z.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (295 * -21 + 107 * -55 + 12080) !== z && void (-3 * -911 + 9842 + -12575) !== z.SC_DISABLE_SPEEDY && z.SC_DISABLE_SPEEDY !== "" ? z.SC_DISABLE_SPEEDY !== "false" && z.SC_DISABLE_SPEEDY : z.NODE_ENV !== "production"), ca = /invalid hook call/i, Un = /* @__PURE__ */ new Set(), Kd = function(x, o) {
  if (z.NODE_ENV !== "production") {
    var t = o ? ' with the id of "'.concat(o, '"') : "", e = "The component ".concat(x).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var i = !0;
      console.error = function(r) {
        for (var a = [], s = -371 * -26 + 11 * 524 + 811 * -19; s < arguments.length; s++) a[s - (8 * -433 + -2165 + -2 * -2815)] = arguments[s];
        ca.test(r) ? (i = !1, Un.delete(e)) : n.apply(void (242 * 1 + 5 * 1507 + 707 * -11), P0([r], a, !1));
      }, Ot(), i && !Un.has(e) && (console.warn(e), Un.add(e));
    } catch (r) {
      ca.test(r.message) && Un.delete(e);
    } finally {
      console.error = n;
    }
  }
}, ao = Object.freeze([]), L0 = Object.freeze({});
function Pd(x, o, t) {
  return void (-297 * -25 + -2631 + -17 * 282) === t && (t = L0), x.theme !== t.theme && x.theme || o || t.theme;
}
var xi = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Vd = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Td = /(^-|-$)/g;
function ga(x) {
  return x.replace(Vd, "-").replace(Td, "");
}
var Ed = /(a)(d)/gi, Qn = 6 * 1136 + 2088 + -2213 * 4, da = function(x) {
  return String.fromCharCode(x + (x > -1824 + 1 * 5739 + -3890 ? 490 * -9 + -1685 + -1 * -6134 : -11 * 173 + -5435 * -1 + -3435));
};
function oi(x) {
  var o, t = "";
  for (o = Math.abs(x); o > Qn; o = o / Qn | 4 * -864 + 7908 + -4452) t = da(o % Qn) + t;
  return (da(o % Qn) + t).replace(Ed, "$1-$2");
}
var ko, Es = -10128 + 145 * -68 + 25369, e0 = function(x, o) {
  for (var t = o.length; t; ) x = (-2 * -4711 + 2764 + -3 * 4051) * x ^ o.charCodeAt(--t);
  return x;
}, Ls = function(x) {
  return e0(Es, x);
};
function Ld(x) {
  return oi(Ls(x) >>> 1 * -7297 + 292 + 7005);
}
function Ds(x) {
  return z.NODE_ENV !== "production" && typeof x == "string" && x || x.displayName || x.name || "Component";
}
function Oo(x) {
  return typeof x == "string" && (z.NODE_ENV === "production" || x.charAt(-9594 + -1 * -5157 + 4437) === x.charAt(-1 * 6115 + 5292 + 823).toLowerCase());
}
var Qe = {};
Qe.childContextTypes = !0, Qe.contextType = !0, Qe.contextTypes = !0, Qe.defaultProps = !0, Qe.displayName = !0, Qe.getDefaultProps = !0, Qe.getDerivedStateFromError = !0, Qe.getDerivedStateFromProps = !0, Qe.mixins = !0, Qe.propTypes = !0, Qe.type = !0;
var Dt = {};
Dt.name = !0, Dt.length = !0, Dt.prototype = !0, Dt.caller = !0, Dt.callee = !0, Dt.arguments = !0, Dt.arity = !0;
var qt = {};
qt.$$typeof = !0, qt.compare = !0, qt.defaultProps = !0, qt.displayName = !0, qt.propTypes = !0, qt.type = !0;
var B0 = {};
B0.$$typeof = !0, B0.render = !0, B0.defaultProps = !0, B0.displayName = !0, B0.propTypes = !0;
var Ns = typeof Symbol == "function" && Symbol.for, Ys = Ns ? Symbol.for("react.memo") : 98268 + 23059 * -1 + -15094, Dd = Ns ? Symbol.for("react.forward_ref") : -23620 + 1443 * 79 + -30265, Nd = Qe, Yd = Dt, Fs = qt, Fd = ((ko = {})[Dd] = B0, ko[Ys] = Fs, ko);
function ua(x) {
  return ("type" in (o = x) && o.type.$$typeof) === Ys ? Fs : "$$typeof" in x ? Fd[x.$$typeof] : Nd;
  var o;
}
var Md = Object.defineProperty, Xd = Object.getOwnPropertyNames, la = Object.getOwnPropertySymbols, jd = Object.getOwnPropertyDescriptor, Jd = Object.getPrototypeOf, Ia = Object.prototype;
function Ms(x, o, t) {
  if (typeof o != "string") {
    if (Ia) {
      var e = Jd(o);
      e && e !== Ia && Ms(x, e, t);
    }
    var n = Xd(o);
    la && (n = n.concat(la(o)));
    for (var i = ua(x), r = ua(o), a = 7514 + 62 * 89 + -13032; a < n.length; ++a) {
      var s = n[a];
      if (!(s in Yd || t && t[s] || r && s in r || i && s in i)) {
        var c = jd(o, s);
        try {
          Md(x, s, c);
        } catch {
        }
      }
    }
  }
  return x;
}
function D0(x) {
  return typeof x == "function";
}
function zi(x) {
  return typeof x == "object" && "styledComponentId" in x;
}
function n0(x, o) {
  return x && o ? "".concat(x, " ").concat(o) : x || o || "";
}
function fa(x, o) {
  if (x.length === 0) return "";
  for (var t = x[9846 + 7 * -57 + -67 * 141], e = 81 * -16 + -1 * -4567 + -3270 * 1; e < x.length; e++) t += x[e];
  return t;
}
function N0(x) {
  return x !== null && typeof x == "object" && x.constructor.name === Object.name && !("props" in x && x.$$typeof);
}
function ii(x, o, t) {
  if (void (4815 + 1 * 3334 + -8149 * 1) === t && (t = !1), !t && !N0(x) && !Array.isArray(x)) return o;
  if (Array.isArray(o))
    for (var e = 1 * 551 + -15 * 518 + 7219; e < o.length; e++) x[e] = ii(x[e], o[e]);
  else if (N0(o))
    for (var e in o) x[e] = ii(x[e], o[e]);
  return x;
}
function qi(x, o) {
  var t = {};
  t.value = o, Object.defineProperty(x, "toString", t);
}
var pe = {};
pe[1] = `Cannot create styled-component for component: %s.

`, pe[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, pe[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, pe[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, pe[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, pe[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, pe[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', pe[8] = `ThemeProvider: Please make your "theme" prop an object.

`, pe[9] = "Missing document `<head>`\n\n", pe[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, pe[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, pe[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", pe[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, pe[14] = `ThemeProvider: "theme" prop is required.

`, pe[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", pe[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, pe[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, pe[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var _d = z.NODE_ENV !== "production" ? pe : {};
function Ud() {
  for (var x = [], o = 499 * -19 + -3 * -1427 + 208 * 25; o < arguments.length; o++) x[o] = arguments[o];
  for (var t = x[0], e = [], n = 1 * 8638 + 4932 + -13569, i = x.length; n < i; n += 3 * -878 + -6817 + 9452) e.push(x[n]);
  return e.forEach(function(r) {
    t = t.replace(/%[a-z]/, r);
  }), t;
}
function j0(x) {
  for (var o = [], t = 5274 + -1843 * 1 + -3430; t < arguments.length; t++) o[t - (-1 * 8273 + 1 * 8447 + -173)] = arguments[t];
  return z.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(x, " for more information.").concat(o.length > 6993 + 9 * -855 + 702 ? " Args: ".concat(o.join(", ")) : "")) : new Error(Ud.apply(void (9984 + 41 * -134 + -4490), P0([_d[x]], o, !1)).trim());
}
var Qd = function() {
  function x(o) {
    this.groupSizes = new Uint32Array(-4501 * 1 + 1 * -7469 + 12482), this.length = -79 * 115 + -190 * 1 + 9787, this.tag = o;
  }
  return x.prototype.indexOfGroup = function(o) {
    for (var t = 7 * 640 + 67 * 77 + -9639, e = 38 * -89 + 25 * 263 + 31 * -103; e < o; e++) t += this.groupSizes[e];
    return t;
  }, x.prototype.insertRules = function(o, t) {
    if (o >= this.groupSizes.length) {
      for (var e = this.groupSizes, n = e.length, i = n; o >= i; ) if ((i <<= -1 * -7658 + 2 * -1849 + 107 * -37) < 3901 * 2 + -2188 * 3 + 2 * -619) throw j0(3625 + 795 * 1 + 2202 * -2, "".concat(o));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(e), this.length = i;
      for (var r = n; r < i; r++) this.groupSizes[r] = 3391 + -1 * 3391;
    }
    for (var a = this.indexOfGroup(o + (-4191 * 1 + 5249 + -1057 * 1)), s = (r = 2 * 2909 + -1 * 6061 + 243, t.length); r < s; r++) this.tag.insertRule(a, t[r]) && (this.groupSizes[o]++, a++);
  }, x.prototype.clearGroup = function(o) {
    if (o < this.length) {
      var t = this.groupSizes[o], e = this.indexOfGroup(o), n = e + t;
      this.groupSizes[o] = -1132 * 2 + 6747 + 1 * -4483;
      for (var i = e; i < n; i++) this.tag.deleteRule(e);
    }
  }, x.prototype.getGroup = function(o) {
    var t = "";
    if (o >= this.length || -76 * -53 + -3108 + -920 === this.groupSizes[o]) return t;
    for (var e = this.groupSizes[o], n = this.indexOfGroup(o), i = n + e, r = n; r < i; r++) t += "".concat(this.tag.getRule(r)).concat(Ui);
    return t;
  }, x;
}(), zd = -22 * -170 + -1 * -861 + -4600 << 30, ux = /* @__PURE__ */ new Map(), vx = /* @__PURE__ */ new Map(), lx = -1315 + 1 * 755 + 561, zn = function(x) {
  if (ux.has(x)) return ux.get(x);
  for (; vx.has(lx); ) lx++;
  var o = lx++;
  if (z.NODE_ENV !== "production" && ((-14 * 463 + 6373 * -1 + 1 * 12855 | o) < -7947 + 9 * 883 || o > zd)) throw j0(2 * 1453 + -2619 + -271, "".concat(o));
  return ux.set(x, o), vx.set(o, x), o;
}, qd = function(x, o) {
  lx = o + (6714 + 4 * 1358 + -12145), ux.set(x, o), vx.set(o, x);
}, $d = "style[".concat(d0, "][").concat(Ts, '="').concat(ro, '"]'), eu = new RegExp("^".concat(d0, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), tu = function(x, o, t) {
  for (var e, n = t.split(","), i = 37 * -107 + 4708 * 1 + -749, r = n.length; i < r; i++) (e = n[i]) && x.registerName(o, e);
}, nu = function(x, o) {
  for (var t, e = ((t = o.textContent) !== null && t !== void 0 ? t : "").split(Ui), n = [], i = -1697 * 5 + 28 * 339 + -1007, r = e.length; i < r; i++) {
    var a = e[i].trim();
    if (a) {
      var s = a.match(eu);
      if (s) {
        var c = 0 | parseInt(s[1], 10), d = s[-1 * -7509 + 3 * 341 + -8530];
        1717 * 5 + 9101 + 17686 * -1 !== c && (qd(d, c), tu(x, d, s[7 * 998 + 3 * 1641 + -5953 * 2]), x.getTag().insertRules(c, n)), n.length = -1 * 646 + -5972 * -1 + 2663 * -2;
      } else n.push(a);
    }
  }
};
function xu() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Xs = function(x) {
  var o = document.head, t = x || o, e = document.createElement("style"), n = function(a) {
    var s = Array.from(a.querySelectorAll("style[".concat(d0, "]")));
    return s[s.length - (9618 + 3 * -143 + -9188 * 1)];
  }(t), i = void (6769 + 21 * -107 + 266 * -17) !== n ? n.nextSibling : null;
  e.setAttribute(d0, Vs), e.setAttribute(Ts, ro);
  var r = xu();
  return r && e.setAttribute("nonce", r), t.insertBefore(e, i), e;
}, ou = function() {
  function x(o) {
    this.element = Xs(o), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, n = -1 * 2243 + 76 + 2167, i = e.length; n < i; n++) {
        var r = e[n];
        if (r.ownerNode === t) return r;
      }
      throw j0(-1203 * -8 + 5132 + 51 * -289);
    }(this.element), this.length = -199 + 1 * 199;
  }
  return x.prototype.insertRule = function(o, t) {
    try {
      return this.sheet.insertRule(t, o), this.length++, !0;
    } catch {
      return !1;
    }
  }, x.prototype.deleteRule = function(o) {
    this.sheet.deleteRule(o), this.length--;
  }, x.prototype.getRule = function(o) {
    var t = this.sheet.cssRules[o];
    return t && t.cssText ? t.cssText : "";
  }, x;
}(), iu = function() {
  function x(o) {
    this.element = Xs(o), this.nodes = this.element.childNodes, this.length = 0;
  }
  return x.prototype.insertRule = function(o, t) {
    if (o <= this.length && o >= -1036 * 7 + -1 * -7703 + 451 * -1) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[o] || null), this.length++, !0;
    }
    return !1;
  }, x.prototype.deleteRule = function(o) {
    this.element.removeChild(this.nodes[o]), this.length--;
  }, x.prototype.getRule = function(o) {
    return o < this.length ? this.nodes[o].textContent : "";
  }, x;
}(), ru = function() {
  function x(o) {
    this.rules = [], this.length = 0;
  }
  return x.prototype.insertRule = function(o, t) {
    return o <= this.length && (this.rules.splice(o, -7536 + 1516 * -2 + -4 * -2642, t), this.length++, !0);
  }, x.prototype.deleteRule = function(o) {
    this.rules.splice(o, -3744 + 7957 * 1 + -108 * 39), this.length--;
  }, x.prototype.getRule = function(o) {
    return o < this.length ? this.rules[o] : "";
  }, x;
}(), Ca = Qi, au = { isServer: !Qi, useCSSOMInjection: !Rd }, js = function() {
  function x(o, t, e) {
    void (-1039 * -5 + 1 * -3814 + -1381) === o && (o = L0), void (-3612 + -2986 * 1 + 6598) === t && (t = {});
    var n = this;
    this.options = Ne(Ne({}, au), o), this.gs = t, this.names = new Map(e), this.server = !!o.isServer, !this.server && Qi && Ca && (Ca = !1, function(i) {
      for (var r = document.querySelectorAll($d), a = -9661 + -9661 * -1, s = r.length; a < s; a++) {
        var c = r[a];
        c && c.getAttribute(d0) !== Vs && (nu(i, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this)), qi(this, function() {
      return function(i) {
        for (var r = i.getTag(), a = r.length, s = "", c = function(g) {
          var C = function(l) {
            return vx.get(l);
          }(g);
          if (void (7401 + -1635 * -1 + -9036) === C) return "continue";
          var u = i.names.get(C), p = r.getGroup(g);
          if (void (-1170 + -9272 * -1 + -8102) === u || -1861 * -3 + 517 * -1 + -5066 === p.length) return "continue";
          var b = "".concat(d0, ".g").concat(g, '[id="').concat(C, '"]'), A = "";
          void (-1013 * 1 + -140 + 1153) !== u && u.forEach(function(l) {
            l.length > 3 * -1021 + -1195 + 4258 && (A += "".concat(l, ","));
          }), s += "".concat(p).concat(b, '{content:"').concat(A, '"}').concat(Ui);
        }, d = 3367 + -49 * -51 + -5866; d < a; d++) c(d);
        return s;
      }(n);
    });
  }
  return x.registerId = function(o) {
    return zn(o);
  }, x.prototype.reconstructWithOptions = function(o, t) {
    return void (1 * -2751 + -3307 * -1 + 139 * -4) === t && (t = !0), new x(Ne(Ne({}, this.options), o), this.gs, t && this.names || void (1747 * 1 + -6840 + 5093));
  }, x.prototype.allocateGSInstance = function(o) {
    return this.gs[o] = (this.gs[o] || -2269 * -1 + -1103 + -1166) + (-4039 * 2 + -274 * -5 + 6709);
  }, x.prototype.getTag = function() {
    return this.tag || (this.tag = (o = function(t) {
      var e = t.useCSSOMInjection, n = t.target;
      return t.isServer ? new ru(n) : e ? new ou(n) : new iu(n);
    }(this.options), new Qd(o)));
    var o;
  }, x.prototype.hasNameForId = function(o, t) {
    return this.names.has(o) && this.names.get(o).has(t);
  }, x.prototype.registerName = function(o, t) {
    if (zn(o), this.names.has(o)) this.names.get(o).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(o, e);
    }
  }, x.prototype.insertRules = function(o, t, e) {
    this.registerName(o, t), this.getTag().insertRules(zn(o), e);
  }, x.prototype.clearNames = function(o) {
    this.names.has(o) && this.names.get(o).clear();
  }, x.prototype.clearRules = function(o) {
    this.getTag().clearGroup(zn(o)), this.clearNames(o);
  }, x.prototype.clearTag = function() {
    this.tag = void 0;
  }, x;
}(), su = /&/g, cu = /^\s*\/\/.*$/gm;
function Js(x, o) {
  return x.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(o, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(o, " ")), t.props = t.props.map(function(e) {
      return "".concat(o, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Js(t.children, o)), t;
  });
}
function _s(x) {
  var o, t, e, n = x === void 0 ? L0 : x, i = n.options, r = void (-12823 + 1 * 12823) === i ? L0 : i, a = n.plugins, s = void (-13 * -409 + 8554 * -1 + 3 * 1079) === a ? ao : a, c = function(C, u, p) {
    return p.startsWith(t) && p.endsWith(t) && p.replaceAll(t, "").length > -2837 * -2 + -73 * 61 + -1221 ? ".".concat(o) : C;
  }, d = s.slice();
  d.push(function(C) {
    C.type === no && C.value.includes("&") && (C.props[0] = C.props[0].replace(su, t).replace(e, c));
  }), r.prefix && d.push(Zd), d.push(Gd);
  var g = function(C, u, p, b) {
    u === void 0 && (u = ""), void (959 * 1 + -7 * -821 + -6706) === p && (p = ""), void (76 + 1 * 8805 + -8881 * 1) === b && (b = "&"), o = b, t = u, e = new RegExp("\\".concat(t, "\\b"), "g");
    var A = C.replace(cu, ""), l = Sd(p || u ? "".concat(p, " ").concat(u, " { ").concat(A, " }") : A);
    r.namespace && (l = Js(l, r.namespace));
    var v = [];
    return Wx(l, kd(d.concat(Od(function(Z) {
      return v.push(Z);
    })))), v;
  };
  return g.hash = s.length ? s.reduce(function(C, u) {
    return u.name || j0(223 * 19 + -3611 + 1 * -611), e0(C, u.name);
  }, Es).toString() : "", g;
}
var gu = new js(), ri = _s(), $i = g0.createContext({ shouldForwardProp: void (1961 + -53 * 37), styleSheet: gu, stylis: ri });
$i.Consumer;
var du = g0.createContext(void (11967 + -1 * 11967));
function ai() {
  return l0($i);
}
function uu(x) {
  var o = et(x.stylisPlugins), t = o[8 * 458 + -9287 + 5623], e = o[-1 * 1357 + 36 * -46 + -274 * -11], n = ai().styleSheet, i = je(function() {
    var d = n, g = {};
    return g.useCSSOMInjection = !1, x.sheet ? d = x.sheet : x.target && (d = d.reconstructWithOptions({ target: x.target }, !1)), x.disableCSSOMInjection && (d = d.reconstructWithOptions(g)), d;
  }, [x.disableCSSOMInjection, x.sheet, x.target, n]), r = je(function() {
    var d = {};
    d.namespace = x.namespace, d.prefix = x.enableVendorPrefixes;
    var g = {};
    return g.options = d, g.plugins = t, _s(g);
  }, [x.enableVendorPrefixes, x.namespace, t]);
  he(function() {
    ld(t, x.stylisPlugins) || e(x.stylisPlugins);
  }, [x.stylisPlugins]);
  var a = je(function() {
    var d = {};
    return d.shouldForwardProp = x.shouldForwardProp, d.styleSheet = i, d.stylis = r, d;
  }, [x.shouldForwardProp, i, r]), s = {};
  s.value = a;
  var c = {};
  return c.value = r, g0.createElement($i.Provider, s, g0.createElement(du.Provider, c, x.children));
}
var pa = function() {
  function x(o, t) {
    var e = this;
    this.inject = function(n, i) {
      void (7150 + 275 * -26) === i && (i = ri);
      var r = e.name + i.hash;
      n.hasNameForId(e.id, r) || n.insertRules(e.id, r, i(e.rules, r, "@keyframes"));
    }, this.name = o, this.id = "sc-keyframes-".concat(o), this.rules = t, qi(this, function() {
      throw j0(3 * 1354 + 1622 * -1 + -2428, String(e.name));
    });
  }
  return x.prototype.getName = function(o) {
    return void (-1 * -8071 + 92 + -8163) === o && (o = ri), this.name + o.hash;
  }, x;
}(), lu = function(x) {
  return x >= "A" && x <= "Z";
};
function ha(x) {
  for (var o = "", t = 0; t < x.length; t++) {
    var e = x[t];
    if (-5872 + -47 * 179 + 14286 === t && e === "-" && x[-428 * 7 + 3 * -956 + 5864] === "-") return x;
    lu(e) ? o += "-" + e.toLowerCase() : o += e;
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
var Us = function(x) {
  return x == null || x === !1 || x === "";
}, Qs = function(x) {
  var o, t, e = [];
  for (var n in x) {
    var i = x[n];
    x.hasOwnProperty(n) && !Us(i) && (Array.isArray(i) && i.isCss || D0(i) ? e.push("".concat(ha(n), ":"), i, ";") : N0(i) ? e.push.apply(e, P0(P0(["".concat(n, " {")], Qs(i), !1), ["}"], !1)) : e.push("".concat(ha(n), ": ").concat((o = n, (t = i) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || 2144 + 27 * 302 + -10298 === t || o in Hd || o.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function s0(x, o, t, e) {
  if (Us(x)) return [];
  if (zi(x)) return [".".concat(x.styledComponentId)];
  if (D0(x)) {
    if (!D0(i = x) || i.prototype && i.prototype.isReactComponent || !o) return [x];
    var n = x(o);
    return z.NODE_ENV === "production" || typeof n != "object" || Array.isArray(n) || n instanceof pa || N0(n) || n === null || console.error("".concat(Ds(x), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), s0(n, o, t, e);
  }
  var i;
  return x instanceof pa ? t ? (x.inject(t, e), [x.getName(e)]) : [x] : N0(x) ? Qs(x) : Array.isArray(x) ? Array.prototype.concat.apply(ao, x.map(function(r) {
    return s0(r, o, t, e);
  })) : [x.toString()];
}
function Iu(x) {
  for (var o = 7326 + -66 * 111; o < x.length; o += 1) {
    var t = x[o];
    if (D0(t) && !zi(t)) return !1;
  }
  return !0;
}
var fu = Ls(ro), Cu = function() {
  function x(o, t, e) {
    this.rules = o, this.staticRulesId = "", this.isStatic = z.NODE_ENV === "production" && (void (-1 * -4595 + 4747 * -1 + 76 * 2) === e || e.isStatic) && Iu(o), this.componentId = t, this.baseHash = e0(fu, t), this.baseStyle = e, js.registerId(t);
  }
  return x.prototype.generateAndInjectStyles = function(o, t, e) {
    var n = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) n = n0(n, this.staticRulesId);
      else {
        var i = fa(s0(this.rules, o, t, e)), r = oi(e0(this.baseHash, i) >>> 6135 * -1 + -269 + 6404);
        if (!t.hasNameForId(this.componentId, r)) {
          var a = e(i, ".".concat(r), void 0, this.componentId);
          t.insertRules(this.componentId, r, a);
        }
        n = n0(n, r), this.staticRulesId = r;
      }
    else {
      for (var s = e0(this.baseHash, e.hash), c = "", d = 1 * -5903 + -67 * 125 + -14278 * -1; d < this.rules.length; d++) {
        var g = this.rules[d];
        if (typeof g == "string") c += g, z.NODE_ENV !== "production" && (s = e0(s, g));
        else if (g) {
          var C = fa(s0(g, o, t, e));
          s = e0(s, C + d), c += C;
        }
      }
      if (c) {
        var u = oi(s >>> 0);
        t.hasNameForId(this.componentId, u) || t.insertRules(this.componentId, u, e(c, ".".concat(u), void (-9234 + -243 * -38), this.componentId)), n = n0(n, u);
      }
    }
    return n;
  }, x;
}(), zs = g0.createContext(void (2843 * 1 + 6118 + -8961));
zs.Consumer;
var Zo = {}, ma = /* @__PURE__ */ new Set();
function pu(x, o, t) {
  var e = zi(x), n = x, i = !Oo(x), r = o.attrs, a = void (3203 * -2 + -99 * -56 + 862) === r ? ao : r, s = o.componentId, c = void (4315 + -79 * -115 + -2680 * 5) === s ? function(j, _) {
    var R = typeof j != "string" ? "sc" : ga(j);
    Zo[R] = (Zo[R] || 0) + (-79 * 74 + 6 * -281 + 7533);
    var oe = "".concat(R, "-").concat(Ld(ro + R + Zo[R]));
    return _ ? "".concat(_, "-").concat(oe) : oe;
  }(o.displayName, o.parentComponentId) : s, d = o.displayName, g = void (-7393 + 1 * 7393) === d ? function(j) {
    return Oo(j) ? "styled.".concat(j) : "Styled(".concat(Ds(j), ")");
  }(x) : d, C = o.displayName && o.componentId ? "".concat(ga(o.displayName), "-").concat(o.componentId) : o.componentId || c, u = e && n.attrs ? n.attrs.concat(a).filter(Boolean) : a, p = o.shouldForwardProp;
  if (e && n.shouldForwardProp) {
    var b = n.shouldForwardProp;
    if (o.shouldForwardProp) {
      var A = o.shouldForwardProp;
      p = function(j, _) {
        return b(j, _) && A(j, _);
      };
    } else p = b;
  }
  var l = new Cu(t, C, e ? n.componentStyle : void (-860 * 2 + 403 * -18 + -7 * -1282));
  function v(j, _) {
    return function(R, oe, U) {
      var ee = R.attrs, Le = R.componentStyle, Oe = R.defaultProps, Ht = R.foldedComponentIds, jt = R.styledComponentId, Be = R.target, ot = g0.useContext(zs), Vn = ai(), C0 = R.shouldForwardProp || Vn.shouldForwardProp;
      z.NODE_ENV !== "production" && yx(jt);
      var J0 = Pd(oe, ot, Oe) || L0, Je = function(h0, Ye, gt) {
        var _e = {};
        _e.className = void (-13 * 382 + 1986 + 2980), _e.theme = gt;
        for (var Jt, dt = Ne(Ne({}, Ye), _e), it = 0; it < h0.length; it += 1301 + -1341 * 2 + 2 * 691) {
          var _t = D0(Jt = h0[it]) ? Jt(dt) : Jt;
          for (var rt in _t) dt[rt] = rt === "className" ? n0(dt[rt], _t[rt]) : rt === "style" ? Ne(Ne({}, dt[rt]), _t[rt]) : _t[rt];
        }
        return Ye.className && (dt.className = n0(dt.className, Ye.className)), dt;
      }(ee, oe, J0), ht = Je.as || Be, Rt = {};
      for (var Ze in Je) void (-5950 + 3 * 795 + -31 * -115) === Je[Ze] || Ze[2650 + 10 * -265] === "$" || Ze === "as" || Ze === "theme" && Je.theme === J0 || (Ze === "forwardedAs" ? Rt.as = Je.forwardedAs : C0 && !C0(Ze, ht) || (Rt[Ze] = Je[Ze], C0 || z.NODE_ENV !== "development" || Bg(Ze) || ma.has(Ze) || !xi.has(ht) || (ma.add(Ze), console.warn('styled-components: it looks like an unknown prop "'.concat(Ze, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var _0 = function(h0, Ye) {
        var gt = ai(), _e = h0.generateAndInjectStyles(Ye, gt.styleSheet, gt.stylis);
        return z.NODE_ENV !== "production" && yx(_e), _e;
      }(Le, Je);
      z.NODE_ENV !== "production" && R.warnTooManyClasses && R.warnTooManyClasses(_0);
      var p0 = n0(Ht, jt);
      return _0 && (p0 += " " + _0), Je.className && (p0 += " " + Je.className), Rt[Oo(ht) && !xi.has(ht) ? "class" : "className"] = p0, Rt.ref = U, Ee(ht, Rt);
    }(Z, j, _);
  }
  v.displayName = g;
  var Z = g0.forwardRef(v), X = {};
  return X.attrs = !0, X.componentStyle = !0, X.displayName = !0, X.foldedComponentIds = !0, X.shouldForwardProp = !0, X.styledComponentId = !0, X.target = !0, Z.attrs = u, Z.componentStyle = l, Z.displayName = g, Z.shouldForwardProp = p, Z.foldedComponentIds = e ? n0(n.foldedComponentIds, n.styledComponentId) : "", Z.styledComponentId = C, Z.target = e ? n.target : x, Object.defineProperty(Z, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(j) {
    this._foldedDefaultProps = e ? function(_) {
      for (var R = [], oe = 1; oe < arguments.length; oe++) R[oe - (-55 * -113 + -2 * 4494 + 2774)] = arguments[oe];
      for (var U = 890 * -4 + -9816 + -4 * -3344, ee = R; U < ee.length; U++) ii(_, ee[U], !0);
      return _;
    }({}, n.defaultProps, j) : j;
  } }), z.NODE_ENV !== "production" && (Kd(g, C), Z.warnTooManyClasses = /* @__PURE__ */ function(j, _) {
    var R = {}, oe = !1;
    return function(U) {
      if (!oe && (R[U] = !0, Object.keys(R).length >= -593 * -3 + 2 * -597 + -385)) {
        var ee = _ ? ' with the id of "'.concat(_, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(j).concat(ee, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), oe = !0, R = {};
      }
    };
  }(g, C)), qi(Z, function() {
    return ".".concat(Z.styledComponentId);
  }), i && Ms(Z, x, X), Z;
}
function ba(x, o) {
  for (var t = [x[8 * -223 + -1 * 8878 + 1 * 10662]], e = -1 * 7966 + 1376 * 1 + 6590, n = o.length; e < n; e += 1) t.push(o[e], x[e + (-7196 + 3061 * 3 + 993 * -2)]);
  return t;
}
var Aa = function(x) {
  var o = {};
  return o.isCss = !0, Object.assign(x, o);
};
function hu(x) {
  for (var o = [], t = 2987 + -1493 * 2; t < arguments.length; t++) o[t - 1] = arguments[t];
  if (D0(x) || N0(x)) return Aa(s0(ba(ao, P0([x], o, !0))));
  var e = x;
  return 15 * -20 + 1276 * 1 + -976 === o.length && -8010 + 3622 * 1 + 4389 === e.length && typeof e[-1 * -7589 + 2665 * -2 + 9 * -251] == "string" ? s0(e) : Aa(s0(ba(e, o)));
}
function si(x, o, t) {
  if (void (1 * 9749 + 7221 + -16970) === t && (t = L0), !o) throw j0(-1694 + 565 * 3, o);
  var e = function(n) {
    for (var i = [], r = 1; r < arguments.length; r++) i[r - (2365 + 1917 * 3 + -8115)] = arguments[r];
    return x(o, t, hu.apply(void (-201 * 43 + -3181 * -2 + 2281), P0([n], i, !1)));
  };
  return e.attrs = function(n) {
    return si(x, o, Ne(Ne({}, t), { attrs: Array.prototype.concat(t.attrs, n).filter(Boolean) }));
  }, e.withConfig = function(n) {
    return si(x, o, Ne(Ne({}, t), n));
  }, e;
}
var qs = function(x) {
  return si(pu, x);
}, Zn = qs;
xi.forEach(function(x) {
  Zn[x] = qs(x);
});
z.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var qn = "__sc-".concat(d0, "__");
z.NODE_ENV !== "production" && z.NODE_ENV !== "test" && typeof window < "u" && (window[qn] || (window[qn] = 1 * -1844 + -3 * -263 + 5 * 211), 5975 + -1 * -2657 + -8631 === window[qn] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[qn] += 1);
const mu = Zn.div`
  position: relative;
`, bu = Zn.video`
  transform: ${(x) => x.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(x) => x.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class xe extends Error {
  constructor(t, e) {
    super(t);
    E(this, "cause");
    this.name = "AutoCaptureError", this.cause = e;
  }
  static logError(t) {
  }
  static fromCameraError(t) {
    if (this.logError(t), t instanceof xe) return t;
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
    return new xe(e, t);
  }
  static fromError(t) {
    if (this.logError(t), t instanceof xe) return t;
    const e = "An unexpected error has occurred";
    return new xe(e);
  }
}
const Ix = {};
Ix.CONTINUE_DETECTION = "continue-detection", Ix.SWITCH_CAMERA = "switch-camera", Ix.TOGGLE_MIRROR = "toggle-mirror";
const Ho = Ix, ci = {};
ci.FIRST_FRAME = "first-frame", ci.FIRST_VALID_FRAME = "first-valid-frame";
const Ro = ci, $s = {};
$s.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const ya = $s;
var kt = ((x) => (x.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", x.CONTROL = "document-auto-capture:control", x.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", x.DOCUMENT_DETECTION = "document-auto-capture:document-detection", x.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", x.STATE_CHANGED = "document-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", x))(kt || {}), Au = ((x) => (x.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", x.CONTROL = "face-auto-capture:control", x.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", x.FACE_DETECTION = "face-auto-capture:face-detection", x.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", x.STATE_CHANGED = "face-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", x))(Au || {}), yu = ((x) => (x.ANIMATION_END = "magnifeye-auto-capture:animation-end", x.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", x))(yu || {}), Wu = ((x) => (x.STATUS_CHANGED = "smile-auto-capture:status-changed", x))(Wu || {}), vu = ((x) => (x.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", x.CONTROL = "palm-capture:control", x.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", x.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", x.STATE_CHANGED = "palm-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", x))(vu || {}), wu = ((x) => (x.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", x))(wu || {});
const yt = {};
yt.CANDIDATE_SELECTION = "candidate_selection", yt.DOCUMENT_CENTERING = "document_centering", yt.DOCUMENT_NOT_PRESENT = "document_not_present", yt.DOCUMENT_TOO_FAR = "document_too_far", yt.SHARPNESS_TOO_LOW = "sharpness_too_low", yt.BRIGHTNESS_TOO_LOW = "brightness_too_low", yt.BRIGHTNESS_TOO_HIGH = "brightness_too_high", yt.HOTSPOTS_PRESENT = "hotspots_present";
const vt = yt, Nt = {};
Nt.isPresent = vt.DOCUMENT_NOT_PRESENT, Nt.isNotSmall = vt.DOCUMENT_TOO_FAR, Nt.isNotOutOfBounds = vt.DOCUMENT_CENTERING, Nt.isSharp = vt.SHARPNESS_TOO_LOW, Nt.isNotDim = vt.BRIGHTNESS_TOO_LOW, Nt.isNotBright = vt.BRIGHTNESS_TOO_HIGH, Nt.noHotspots = vt.HOTSPOTS_PRESENT;
const Su = Nt, gi = {};
gi.FRONT = "user", gi.REAR = "environment";
const wx = gi, di = {};
di.AUTO_CAPTURE = "AUTO_CAPTURE", di.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const ec = di, rn = {};
rn.LOADING = "LOADING", rn.ERROR = "ERROR", rn.WAITING = "WAITING", rn.RUNNING = "RUNNING";
const Xe = rn;
var Bu = ((x) => (x.CLOSEUP = "CLOSEUP", x.DISTANT = "DISTANT", x.MIDDLE = "MIDDLE", x))(Bu || {});
const so = On(void 0);
so.displayName = "AppStateContext";
function Hn() {
  const x = l0(so);
  if (x === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return x;
}
const Gu = so.Provider;
class tc extends $e {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var t;
    const o = new xe("An unknown error has occurred");
    (t = this.context) == null || t.handleError(o);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var o;
    return ((o = this.context) == null ? void 0 : o.appState) === Xe.ERROR ? null : this.props.children;
  }
}
E(tc, "contextType", so);
const ku = Zn.canvas`
  transform: ${(x) => x.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, Ou = Zn.div`
  background-color: #00000060;
  color: #fff;
  font-size: 13px;
  width: 300px;
  padding: 10px;
  z-index: 2;
  word-break: break-word;
  position: absolute;
  top: 0;
`;
function Zu() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const Hu = ps(
  ({ detectionDetails: x, isImageMirror: o }, t) => Zu() ? (console.log(x), /* @__PURE__ */ O(nt, { children: [
    /* @__PURE__ */ O(ku, { ref: t, $isImageMirror: o }),
    /* @__PURE__ */ O(Ou, { children: Object.entries(x).map(([e, n]) => /* @__PURE__ */ O("div", { children: [
      e,
      ": ",
      /* @__PURE__ */ O("strong", { children: n })
    ] }, e)) })
  ] })) : null
), Sx = On(void 0);
Sx.displayName = "AnalyticsContext";
function Ru() {
  const x = l0(Sx);
  if (x === void 0)
    throw new Error(`${Sx.displayName} must be used within a AnalyticsProvider`);
  return x;
}
(function(x, o) {
  function t(r, a, s, c, d) {
    return Ke(a - 975, c);
  }
  function e(r, a, s, c, d) {
    return Ke(a - -667, s);
  }
  const n = x();
  function i(r, a, s, c, d) {
    return Ke(s - -126, d);
  }
  for (; ; )
    try {
      if (parseInt(t(1397, 1403, 1392, "Di3b", 1402)) / 1 + -parseInt(t(1396, 1400, 1414, "kYKa", 1390)) / 2 * (parseInt(i(280, 292, 293, 298, "lp[%")) / 3) + parseInt(t(1360, 1378, 1387, "qnCd", 1375)) / 4 * (parseInt(t(1387, 1392, 1384, "W@[G", 1374)) / 5) + parseInt(e(-250, -266, "d%9Y", -284, -267)) / 6 + -parseInt(i(293, 324, 309, 323, "7aP%")) / 7 + -parseInt(i(276, 297, 289, 277, "5jQ^")) / 8 * (parseInt(e(-233, -237, "sC#y", -223, -241)) / 9) + -parseInt(e(-256, -245, "C(l]", -251, -244)) / 10 * (-parseInt(e(-258, -249, "#fm4", -265, -267)) / 11) === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Gx, -1 * -749017 + 177633 + 124877 * -1);
function Ke(x, o) {
  const t = Gx();
  return Ke = function(e, n) {
    e = e - (-2671 + 37 * 83);
    let i = t[e];
    if (Ke.yKHfIG === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = C.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          p += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let u = [], p = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (let v = 0; v < g.length; v++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      Ke.jrBfFI = d, x = arguments, Ke.yKHfIG = !0;
    }
    const a = t[0], s = e + a, c = x[s];
    return c ? i = c : (Ke.APdsel === void 0 && (Ke.APdsel = !0), i = Ke.jrBfFI(i, n), x[s] = i), i;
  }, Ke(x, o);
}
const Bx = On(void 0);
function ui(x, o, t, e, n) {
  return Ke(t - 208, e);
}
Bx[Ii(-145, -136, -161, -162, "55n*") + Ii(-138, -137, -130, -143, "zcg4") + "e"] = Ku(352, 359, "%)Gb") + ui(619, 646, 635, "XkA!") + li(177, "zcg4", 161);
function Ku(x, o, t, e, n) {
  return Ke(o - -65, t);
}
function Gx() {
  const x = ["Amk1WQNdIsK", "fSo9kWPKbmkwkxmfrq", "W7ZdS8o0dqDwaSknzCkggXxcOW", "jd/cNNlcT2pdRw5rFmkG", "WR/cPqpcO3DooHldUCoA", "WP7dI0pcPLW", "xtlcGhtdKCoHkmo0rCkjxq", "WQe4AMWU", "bdpcJWPTBCkNW5C", "WPWPfCk/", "WORdOvFcGJu", "W4NcLWpdPGtdJSoXWP0RWO10e0y", "WOK1i8kQW7m", "wI3cNfBcQmoAW6FdPthdOSoHW4i", "h2tdKwxcNG", "WRtcKCkUWP3cJqXfbW", "ESohb8kpbSoiA8kICNO", "zGmZwCkw", "W6RcVXSqyg4jWR18j8kP", "omoGW7hcJhKZFH0vWQhcGtFcHW", "xtNdGaBcOSopoSoy", "fmoKj8kIpW", "WONdPSoKBSku", "hxBcTmoSWP8MtSoS", "qJlcLGFdOG", "WQOqkSkqqa", "tfVdVepcN2T2FSkfWRFcVSoL", "cNFdMb/dSa", "WQSRnCkXWPK", "vwddHHhcPmoZW4ZcIMNcMaa", "isVdOW", "W6VcOa3dHwr9W6dcR8kSW5ddKW", "WQVdHIapbmkOW6ldPfOr", "nePldSooyLVcUCkKW5ldMJ7cOG", "WR3cOa3cOHCCvtldImorCZ3cKW", "xSkfExZcReiaWOvHW6K", "zMJcIK7cRmk3W7pcQCk4WOFdOmkJmG"];
  return Gx = function() {
    return x;
  }, Gx();
}
function li(x, o, t, e, n) {
  return Ke(t - -247, o);
}
function Ii(x, o, t, e, n) {
  return Ke(x - -549, n);
}
function Rn() {
  const x = l0(Bx);
  if (x === void (-7708 + 2 * 4273 + 2 * -419)) throw new Error(Bx[t(988, 981, "b&1W") + e(-578, -588, -591, -575, "GYbk") + "e"] + (t(982, 976, "*vKj") + o("Di3b", 1071, 1067, 1075) + t(975, 970, "lp[%") + i(41, 25, "3OtT", 25) + o("B#4$", 1088, 1065, 1073) + o("#fm4", 1096, 1083, 1088) + n(-358, "sC#y", -366, -371) + t(991, 999, "Hf&%")));
  function o(r, a, s, c, d) {
    return li(r - 261, r, c - 899);
  }
  function t(r, a, s, c, d) {
    return ui(r - 133, a - 245, r - 354, s);
  }
  function e(r, a, s, c, d) {
    return ui(r - 108, a - 4, r - -1202, d);
  }
  function n(r, a, s, c, d) {
    return Ii(s - -226, a - 208, s - 236, c - 228, a);
  }
  function i(r, a, s, c, d) {
    return li(r - 198, s, c - -134);
  }
  return x;
}
(function(x, o) {
  function t(a, s, c, d, g) {
    return Se(s - 513, c);
  }
  function e(a, s, c, d, g) {
    return Se(c - 983, s);
  }
  const n = x();
  function i(a, s, c, d, g) {
    return Se(a - 947, s);
  }
  function r(a, s, c, d, g) {
    return Se(d - -1e3, s);
  }
  for (; ; )
    try {
      if (parseInt(r(-759, "G7%i", -751, -754, -752)) / 1 + parseInt(r(-726, "pa^f", -740, -733, -741)) / 2 + parseInt(r(-744, "14Qw", -748, -749, -741)) / 3 + parseInt(r(-727, "1I(H", -730, -741, -741)) / 4 * (-parseInt(r(-741, "]Khm", -747, -745, -738)) / 5) + parseInt(e(1239, "Q0@]", 1230, 1226, 1238)) / 6 * (parseInt(r(-723, "#YLM", -721, -734, -734)) / 7) + parseInt(r(-761, "HM^2", -749, -748, -760)) / 8 + -parseInt(t(775, 774, "3V[o", 761, 767)) / 9 * (parseInt(i(1210, "U*LL", 1209, 1210, 1220)) / 10) === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(kx, 13 * -69230 + 650171 + 1088933);
function kx() {
  const x = ["xWLNs8kZW4NdQCkbWPZcK3v6uG", "lcL2A8kx", "WRieALFcImoFWOFcQCklaSk3W5C", "wGldNSoLiCoTnwSwwN7dQq8", "WPavn8khWOGoW6HwmIHactu", "W6dcPCo1f0VcShBcHmkUWRFdLSo8W70", "W7ddTmobW7G", "wLFcQCkDF8k+uG", "W7fYWRdcOmkngNldVG", "W71ZW5NdMSoZzLddVCoHwmkxya", "l8kqyCkaoq", "BSkrxmozACo9WO/dHCkkp3xdLq", "A8kSW6HoW6NdLHmHoxRdIfy", "W7RdL8kVscmyiIi", "offmW7S0ah3cP8kEmres", "WQ3dVmk2WOzU", "nSoYWQpdQ1zGlrvj", "b8oFW4noW5S", "mXRdMWf4W6tdLSk2W7G7m2ZdUG", "CmktvSkQp1nN", "r8oSB8ofmueHoSoPWPVdNMe", "dKFcHCkNyG", "xatdMSk5s8ktw3Oj", "mHNdNqb4W6/cG8kyW7ini1W", "aCkUn8ktBG", "z35KWOtdKmk0W4maW5upWOfrgq", "h8oezYShWRCIW73dJCoKWO/dQW"];
  return kx = function() {
    return x;
  }, kx();
}
function Se(x, o) {
  const t = kx();
  return Se = function(e, n) {
    e = e - (6044 * -1 + 19 * 519 + 298 * -12);
    let i = t[e];
    if (Se.JzXuxY === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = C.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          p += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let u = [], p = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (let v = 0; v < g.length; v++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      Se.GlRzra = d, x = arguments, Se.JzXuxY = !0;
    }
    const a = t[1 * -5363 + 3874 + 1489], s = e + a, c = x[s];
    return c ? i = c : (Se.IdFLVM === void 0 && (Se.IdFLVM = !0), i = Se.GlRzra(i, n), x[s] = i), i;
  }, Se(x, o);
}
function Pu({ licensePath: x, bramble: o, wasmDirectoryPath: t }) {
  function e(c, d, g, C, u) {
    return Se(C - 241, g);
  }
  const [n, i] = et(), r = n !== void (-2291 * -2 + 684 * -3 + -2 * 1265);
  function a(c, d, g, C, u) {
    return Se(u - 536, c);
  }
  he(() => {
    async function c() {
      await o[g(994, 992, 983, "x$(9")](t, x);
      function d(u, p, b, A, l) {
        return Se(b - -678, A);
      }
      function g(u, p, b, A, l) {
        return Se(p - 739, A);
      }
      function C(u, p, b, A, l) {
        return Se(A - 360, u);
      }
      i(o[g(993, 1001, 987, "2w6O") + C("OfAT", 633, 616, 624) + d(-423, -417, -430, "*N%K") + "t"]());
    }
    c();
  }, [o, t, x, i]);
  const s = {};
  return s[a(")2xb", 779, 777, 774, 777) + a("#YLM", 781, 785, 782, 793)] = n, s[e(495, 489, "pa^f", 485) + "sh"] = r, s;
}
var nc = ((x) => (x.DOCUMENT = "document-auto-capture:dev", x.FACE = "face-auto-capture:dev", x.PALM = "palm-capture:dev", x))(nc || {});
const fi = {};
fi.SIMD = "simd", fi.NO_SIMD = "no-simd";
const Wa = fi, Ci = {};
Ci.Lower = "Lower", Ci.Higher = "Higher";
const pi = Ci, fx = {};
fx.VISIBLE = "VISIBLE", fx.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", fx.HIDDEN = "HIDDEN";
const Ox = fx;
function Pe(x, o) {
  var t = Zx();
  return Pe = function(e, n) {
    e = e - (2215 + -1 * 2383 + 1 * 469);
    var i = t[e];
    if (Pe.mZlWiQ === void 0) {
      var r = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", p = "", b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = C.indexOf(l);
        for (var Z = 0, X = u.length; Z < X; Z++)
          p += "%" + ("00" + u.charCodeAt(Z).toString(16)).slice(-2);
        return decodeURIComponent(p);
      }, a = function(g, C) {
        var u = [], p = 0, b, A = "";
        g = r(g);
        var l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (var v = 0; v < g.length; v++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      Pe.csFvDM = a, x = arguments, Pe.mZlWiQ = !0;
    }
    var s = t[67 * -108 + 4779 + -63 * -39], c = e + s, d = x[c];
    return d ? i = d : (Pe.ByieOn === void 0 && (Pe.ByieOn = !0), i = Pe.csFvDM(i, n), x[c] = i), i;
  }, Pe(x, o);
}
function Zx() {
  var x = ["W65TWR9Joq7dKSoNW6pdLZddUa", "scxdLMfTy8oiqI5UWOhcT8oK", "W4FdGCoWifddSg4nmG", "W57cQmoKreNdTSkSWOpcUa", "WOdcOH4gW67dGt8armo9WO4tja", "Bv55WR7cMMdcJCk5WQuora9r", "W6uIW6JdPJNcH2vQxq", "ldOWW5FdQG", "WO3cKwDEWQpcUqm+iq", "WPTKjq0VWQhdKJJcIGmL", "WQBcPtBdRXBcUfe2cSkYWOTwW4K", "WPr9pSkGzCkNaCovWPGEWO4", "rKjoymkas8o6mWJcV8kxFMtdGW", "eSodF8oMWQDweaZcUa", "WPxdSSo7e2XTfXTU", "W7VdKSkhnZKDxL7dJuxdL0Ozgq", "WRGrsdaLWOLcW6JcPmoWW4/cVSom", "W7KCW6NdNYfEWRzglq", "oXWpn8oe", "W4JdM8oeWQtcIYddRSobjJBcK8ov", "W5L6CsRdOq", "tsxdMrmtpmkUxaC", "ALDWWRNcNMFcGCk7WR07CWfA"];
  return Zx = function() {
    return x;
  }, Zx();
}
(function(x, o) {
  function t(c, d, g, C, u) {
    return Pe(C - -793, u);
  }
  function e(c, d, g, C, u) {
    return Pe(u - -712, C);
  }
  function n(c, d, g, C, u) {
    return Pe(d - -579, g);
  }
  var i = x();
  function r(c, d, g, C, u) {
    return Pe(g - 47, u);
  }
  function a(c, d, g, C, u) {
    return Pe(c - -369, g);
  }
  for (; ; )
    try {
      var s = parseInt(r(346, 357, 349, 339, "#Pmm")) / 1 + parseInt(n(-275, -267, "EUsJ", -276, -271)) / 2 * (-parseInt(t(-482, -484, -481, -478, "OP$g")) / 3) + -parseInt(n(-256, -259, "2%&!", -256, -257)) / 4 * (parseInt(a(-66, -68, "B%AY", -63, -63)) / 5) + -parseInt(a(-60, -71, "2)GV", -50, -54)) / 6 * (parseInt(e(-393, -402, -395, "qwVO", -401)) / 7) + -parseInt(t(-478, -475, -484, -474, "*SXM")) / 8 + parseInt(a(-55, -44, "Imrk", -59, -52)) / 9 + parseInt(n(-289, -278, "hUqB", -270, -272)) / 10;
      if (s === o) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Zx, 48228 * 18 + -885342 + 1 * 905269);
function Vu({ crosshatch: x }) {
  function o(e, n, i, r, a) {
    return Pe(i - -28, a);
  }
  function t(e, n, i, r, a) {
    return Pe(n - -981, e);
  }
  return x != null && x[o(284, 277, 288, 278, "oMBv") + "id"] ? pi[t("0zdq", -675) + "r"] : pi[t("T1#!", -677)];
}
(function(x, o) {
  function t(s, c, d, g, C) {
    return be(C - -897, c);
  }
  function e(s, c, d, g, C) {
    return be(C - 400, d);
  }
  function n(s, c, d, g, C) {
    return be(c - -345, d);
  }
  const i = x();
  function r(s, c, d, g, C) {
    return be(C - 893, g);
  }
  function a(s, c, d, g, C) {
    return be(C - -66, g);
  }
  for (; ; )
    try {
      if (-parseInt(n(24, 25, "!A9l", 27, 10)) / 1 + -parseInt(t(-537, "K4]v", -550, -543, -548)) / 2 + parseInt(t(-557, "SO08", -552, -559, -552)) / 3 * (-parseInt(t(-536, "UCb[", -547, -550, -536)) / 4) + -parseInt(a(320, 291, 290, "24#i", 305)) / 5 + parseInt(r(1232, 1226, 1244, "y!s^", 1241)) / 6 * (-parseInt(e(767, 745, "LAhb", 740, 750)) / 7) + parseInt(n(-2, 7, "1N^w", 3, 20)) / 8 * (parseInt(a(303, 285, 275, "7l3x", 291)) / 9) + parseInt(a(275, 291, 262, "w*sV", 275)) / 10 === o) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Hx, -1226 * 401 + -321326 + 1121076);
function be(x, o) {
  const t = Hx();
  return be = function(e, n) {
    e = e - (2 * 2901 + 1696 + -1 * 7159);
    let i = t[e];
    if (be.avmBIB === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = C.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          p += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let u = [], p = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (let v = 0; v < g.length; v++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      be.UJwvZc = d, x = arguments, be.avmBIB = !0;
    }
    const a = t[2164 + -1 * 3711 + 1547], s = e + a, c = x[s];
    return c ? i = c : (be.qUXAtN === void 0 && (be.qUXAtN = !0), i = be.UJwvZc(i, n), x[s] = i), i;
  }, be(x, o);
}
function Tu({ children: x, licensePath: o, bramble: t, wasmDirectoryPath: e }) {
  function n(b, A, l, v, Z) {
    return be(v - 668, b);
  }
  const i = {};
  i[u(912, 932, 920, "SFMZ", 920) + "le"] = t;
  function r(b, A, l, v, Z) {
    return be(A - 722, v);
  }
  i[u(925, 927, 933, "1N^w", 935) + u(963, 953, 944, "SO08", 948) + "h"] = o, i[C(1354, 1376, 1380, 1363, "1N^w") + d(153, 168, 154, "jPZl") + r(1079, 1068, 1082, "5m%C") + "th"] = e;
  const { sunfish: a, crosshatch: s } = Pu(i), c = {};
  c[n("KQVJ", 1023, 1027, 1037) + C(1334, 1361, 1345, 1350, "zLBb")] = s;
  function d(b, A, l, v, Z) {
    return be(A - -194, v);
  }
  const g = je(() => ({ redfin: Vu(c), sunfish: a, crosshatch: s, bramble: t }), [a, s, t]);
  function C(b, A, l, v, Z) {
    return be(v - 996, Z);
  }
  function u(b, A, l, v, Z) {
    return be(Z - 580, v);
  }
  const p = {};
  return p[n("AR[]", 1031, 1038, 1026)] = g, p[C(1339, 1360, 1357, 1347, "KQVJ") + d(161, 166, 162, "3soL")] = x, O(Bx[d(148, 150, 138, "8$I7") + r(1048, 1065, 1056, "B#NU")], p);
}
function Hx() {
  const x = ["rSoMW6hdOmkmW4RcRmoH", "W7JcQGu", "WRTjWRDklCoOESk+", "bCk4W47cOw4", "WQ94WQJcTCkCWOnruHhcTSk4BYCT", "uCkfW4NcI2BdIh9htZ7dM0a", "ASo3y2LLC3rDqColWQ4", "AmolBCoDo8kjuCoKaxqrza", "W6JcJWNdI20", "W60XpmoMW4m", "WQmSW5xcKry", "WQ19WQJcSSkwWOyGnI7cRCkcBq", "W4/cUmoOW4ZdLSknW7jaEqTMEG", "pahcHmoHoMpdL8kCW6PoW6yR", "rCkeW4FdL0O", "D0JdHCk/g8krja/dMCoedrblfa", "WQPMx8k3WO94WPBcLCouW5pdJa", "oWxdUa", "wehdMmkGzq", "WQ1LwmkXWOqTWPdcVSouW6/dLv4", "owdcLSoPW4G", "WOjnW4NcHConEX9O", "WOvmWRdcNSoyqXjwpG", "W5SAW6ZcMcJdQxfuWR5YW7S", "W6tcUCokW5ddVLHjc8kVWQ3dGa", "WQm2W5pcJGe", "WQJdNd3dLNT4xmk8", "WRZdVL48W4ldThxdVgHgWPxdGq", "dSosz8k8WQq", "W7pcHXNdG0C", "WQT7WQRdSSoHW6apga0", "W7/dJxRcUfTipSoHWP9TW7DM", "fCoNWRjtEG"];
  return Hx = function() {
    return x;
  }, Hx();
}
(function(x, o) {
  function t(s, c, d, g, C) {
    return ze(C - -217, c);
  }
  function e(s, c, d, g, C) {
    return ze(s - -566, d);
  }
  function n(s, c, d, g, C) {
    return ze(d - 171, s);
  }
  var i = x();
  function r(s, c, d, g, C) {
    return ze(s - 589, C);
  }
  for (; ; )
    try {
      var a = parseInt(r(882, 896, 891, 894, "71R0")) / 1 * (parseInt(n("(MEP", 469, 465, 472, 466)) / 2) + -parseInt(n("x0fC", 467, 470, 471, 466)) / 3 * (parseInt(n("f6CI", 462, 473, 469, 475)) / 4) + -parseInt(e(-279, -269, "bEtp", -279, -272)) / 5 * (-parseInt(n("Pb$m", 443, 449, 456, 443)) / 6) + -parseInt(e(-269, -268, "^[&q", -268, -272)) / 7 * (-parseInt(e(-266, -273, "ygZB", -279, -254)) / 8) + -parseInt(n("Pb$m", 467, 454, 442, 460)) / 9 * (-parseInt(e(-277, -287, "bEtp", -280, -266)) / 10) + -parseInt(t(85, "JGPI", 82, 86, 84)) / 11 * (parseInt(e(-282, -274, "JGPI", -278, -279)) / 12) + -parseInt(e(-261, -268, "^[&q", -251, -257)) / 13 * (parseInt(e(-286, -300, "ygZB", -284, -280)) / 14);
      if (a === o) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Rx, -1596272 + 6258 * 366);
function Rx() {
  var x = ["W4VdJXFcN8o8x381WR/dJuip", "W7G0W7WaWRzZhL4", "laf1WOyuj8o7WOS", "wZVcHdVcMSkKW4NcSq", "kG4QW6riAmoYWO/dUL3dPSoQ", "W5ldM8kfrfNdNvxcUCojWQlcKCkaW5hcPG", "fXBdN0FdKtHfWQjkssxcJ1K", "t0VdTqZdNKjozmoyxcZcOge", "oHqVW53dVKpcS8o/hmk0WRiH", "lWuOW6PdAmkiW5RdU3JdNColWPhdOa", "W6XyWPDSpLNcMsBcNuH/zcq", "fIFcLMzHfuxcMr9me3a", "iLhdQmolkbddNuK", "WQOgWPNcUHq/vSk+", "jvpcISkbFhxcO0pcLeRdMHpdOG", "WQ4gWRhcVamNsCkm", "F1a9lCkNWRJcKa", "FYeMf8k3WRRcJmkG", "W58UtmkmWO/dVMddGeiohIe", "fmkYkSo/ESkPW6q", "W5WEaWldP8o4qCkhWO1yE1i", "WQ4oWRBcVYS+umkW", "W7FdJJeDzurXb8oj", "wd7dN1VdHSoMW73cT8o5WRLUWQC", "W7/cICoCW5ldMSkpa3xdSSkEgmk3", "fuNdMu3dLqBdHxK", "fXxdKqNcK0aLWRPd", "W6rFW6SxtbRdVsK"];
  return Rx = function() {
    return x;
  }, Rx();
}
function ze(x, o) {
  var t = Rx();
  return ze = function(e, n) {
    e = e - (-7 * -547 + 2489 + -6040);
    var i = t[e];
    if (ze.zbRIPc === void 0) {
      var r = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", p = "", b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = C.indexOf(l);
        for (var Z = 0, X = u.length; Z < X; Z++)
          p += "%" + ("00" + u.charCodeAt(Z).toString(16)).slice(-2);
        return decodeURIComponent(p);
      }, a = function(g, C) {
        var u = [], p = 0, b, A = "";
        g = r(g);
        var l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (var v = 0; v < g.length; v++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      ze.fETVdd = a, x = arguments, ze.zbRIPc = !0;
    }
    var s = t[1 * 3313 + 8635 + -5974 * 2], c = e + s, d = x[c];
    return d ? i = d : (ze.npcEsy === void 0 && (ze.npcEsy = !0), i = ze.fETVdd(i, n), x[c] = i), i;
  }, ze(x, o);
}
function Eu({ analytics: x, crosshatch: o }) {
  return o !== void (-797 * -1 + -1 * -2427 + -8 * 403) && !o.isAnalyticsDisabled ? x : void (6 * 451 + 1 * 5929 + 11 * -785);
}
function Lu({ analytics: x, appKey: o, redfin: t, crosshatch: e, bramble: n }) {
  const i = {};
  i.analytics = x, i.crosshatch = e;
  const r = Eu(i);
  return he(() => {
    r && r.init(o);
  }, [r, o]), he(() => {
    e && (console.info("Analytics is " + (e.isAnalyticsDisabled ? "disabled" : "enabled")), r && r.walleye(t, n.getCustomerName()));
  }, [r, n, e, t]), he(() => {
    if (r)
      return window.addEventListener("beforeunload", r.endSession), () => {
        r.endSession(), window.removeEventListener("beforeunload", r.endSession);
      };
  }, [r]), r;
}
function Du({
  analytics: x,
  appKey: o,
  children: t
}) {
  const { redfin: e, crosshatch: n, bramble: i } = Rn(), r = Lu({ analytics: x, redfin: e, appKey: o, crosshatch: n, bramble: i }), a = je(
    () => ({
      analytics: r
    }),
    [r]
  );
  return /* @__PURE__ */ O(Sx.Provider, { value: a, children: t });
}
const Nu = 2617 * 1 + -2032 + -585 + 0.8, Yu = -23 * 421 + -8397 + -1130 * -16 + 0.43, Fu = 0 + 0.03, Mu = -5767 * 1 + -173 * -39 + -980 + 0.5, Xu = 1 * -1660 + -3098 + 26 * 183 + 0.25, ju = 0 + 0.9, Ju = -5175 + -73 * -119 + -3512 + 0.1, Cx = {};
Cx.minDuration = 1e3, Cx.maxDuration = 2500, Cx.minFrames = 10;
const Ko = Cx, hi = {};
hi.max = 100, hi.min = 10;
const va = hi, _u = 720, Uu = 200, Qu = 2028 + 1 * 9215 + 11239 * -1, xc = "AES-CBC", oc = "RSA-OAEP", zu = "SHA-256", qu = "image/jpeg", $u = -3747 * -1 + 3 * 2069 + -9946, el = "SAM v1.40.4 for idcards", tl = "dot_embedded_bg.wasm", $n = (x, o) => Math.hypot(o.x - x.x, o.y - x.y), nl = (x) => x.length < -73 * -131 + 1622 * -3 + -4696 ? 6861 + 9 * -867 + -314 * -3 : x.reduce((t, e) => t + e, 17 * -347 + 9422 + -3523) / x.length, er = (x) => Number.parseFloat(x.toFixed(-1 * -3389 + 14 * 457 + -9784)), xl = (x) => {
  const { bottomLeft: o, bottomRight: t, topLeft: e, topRight: n } = x, i = $n(e, n), r = $n(n, t), a = $n(o, t), s = $n(e, o);
  return Math.min(i, r, a, s);
}, ol = (x) => {
  const o = x.getContext("2d");
  o && o.clearRect(-5179 + -1 * -5179, -628 * 9 + -1 * 5163 + 10815, o.canvas.width, o.canvas.height);
}, il = 4724 + -4723 * 1 + 0.5, rl = 125 * -13 + -5281 + 6906 + 0.85, Po = 9046 + 101 * -59 + -2087, al = -95 * -35 + -86 * -57 + -7627, sl = 0, cl = "dot-auto-capture-video";
function gl(x, o) {
  return x < Po && o >= Po ? Po : x;
}
function dl(x, o) {
  return x < o ? x : o;
}
function ic({ height: x, width: o }) {
  let t;
  return o > x ? t = gl(x, o) : t = o, { width: t, height: dl(x, t) };
}
const ul = (x, o) => Math.min(x, o), rc = (x) => {
  const o = ic(x).width, t = o * rl, e = (x.width - t) / (-71 * 29 + -8895 + 10956), n = t / il, i = (x.height - n) / (4059 + -133 * 57 + -881 * -4), r = {};
  return r.shiftX = e, r.shiftY = i, r.width = t, r.height = n, r;
}, ll = (x) => {
  const { height: o, shiftX: t, shiftY: e, width: n } = rc(x), i = {};
  return i.shiftX = t / x.width, i.shiftY = e / x.height, i.width = n / x.width, i.height = o / x.height, i;
}, Il = "@innovatrics/dot-common-auto-capture", fl = "6.2.0", Cl = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, pl = {
  "@dot/proto-files": "2.1.1",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, hl = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.5"
}, ml = {
  name: Il,
  private: !0,
  version: fl,
  scripts: Cl,
  dependencies: pl,
  devDependencies: hl
}, tr = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), wa = () => {
  const x = /Android/i.test(navigator.userAgent), o = /Firefox/i.test(navigator.userAgent);
  return x && o;
}, bl = () => {
  const x = navigator.userAgent.includes("Chrome"), o = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return x && o ? !1 : o;
}, mi = (x) => new Promise((o) => {
  setTimeout(o, x);
}), Al = (x) => JSON.parse(JSON.stringify(x, (o, t) => typeof t == "number" ? er(t) : t)), ac = () => ml.version, sc = (x) => new URL(x).hostname.replace("www.", ""), yl = () => sc(window.location.href) === "localhost", ex = (x) => Object.entries(x).map(([o, t]) => encodeURIComponent(o) + "=" + encodeURIComponent(t)).join("&"), Wl = (x, o) => JSON.stringify(x) === JSON.stringify(o) ? o : x, vl = () => "prod".toLowerCase() === "dev";
class cc extends Array {
  constructor(t) {
    super();
    E(this, "size");
    this.size = t;
  }
  pushFixed(...t) {
    if (t.length > this.size) {
      const e = t.slice(-this.size);
      this.push(...e);
      return;
    }
    this.length === this.size && this.splice(-2170 + 2 * 1132 + -94, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(0);
  }
}
const wl = (x, o, t = qu) => new Promise((e) => {
  x.toBlob((n) => {
    if (!n) throw new Error("Canvas to Blob failed");
    e(n);
  }, t, o);
}), Sl = async (x) => wl(x, 9685 + 1 * -3236 + -6359), Bl = (x, o) => {
  const t = document.createElement("canvas");
  t.width = o.width, t.height = o.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(x, o.shiftX, o.shiftY, o.width, o.height, -1 * -1434 + -7649 + 6215, 0, t.width, t.height), t;
}, Gl = (x) => {
  const o = x.getContext("2d");
  if (!o) throw new Error("getImageDataForSam ctx error");
  const { data: t } = o.getImageData(0, -2495 * -1 + -4430 + 387 * 5, x.width, x.height);
  return t;
}, kl = (x, o, t, e) => {
  const n = x.getContext("2d");
  n && (n.beginPath(), n.strokeStyle = t, n.rect(o.topLeft.x, o.topLeft.y, o.width, o.height), n.stroke());
}, Vo = (x, o, t) => {
  const { height: e, shiftX: n, shiftY: i, width: r } = o, a = {};
  a.x = n, a.y = i;
  const s = {};
  s.topLeft = a, s.width = r, s.height = e, s.color = t, kl(x, s, t);
};
function Ol({ canvas: x, color: o, fill: t, offset: e = 1611 + -107 * 17 + 208, polygon: n }) {
  const i = x.getContext("2d");
  if (!i) return;
  const { bottomLeft: r, bottomRight: a, topLeft: s, topRight: c } = n;
  t ? i.fillStyle = o : i.strokeStyle = o, i.beginPath(), i.moveTo(s.x + e, s.y + e), i.lineTo(c.x + e, c.y + e), i.lineTo(a.x + e, a.y + e), i.lineTo(r.x + e, r.y + e), i.closePath(), t ? i.fill() : i.stroke();
}
const Zl = (x, o) => {
  const { height: t, shiftX: e, shiftY: n, width: i } = o;
  return !(x.x < e || x.x > e + i || x.y < n || x.y > n + t);
}, Hl = (x, o) => Object.values(x).every((t) => Zl(t, o));
function Kx(x) {
  const { height: o, width: t } = ic(x), e = (x.width - t) / (4960 + -7114 * -1 + -12072), n = (x.height - o) / (5844 + 27 * -306 + 2420), i = {};
  return i.shiftX = e, i.shiftY = n, i.width = t, i.height = o, i;
}
function gc(x, o, t) {
  const { height: e, width: n } = t, i = ul(x.width, x.height), r = n - i * o * (-6640 + -4072 * 1 + 10714), a = e - i * o * (6725 + 7862 * 1 + -14585), s = (x.width - r) / (-9714 + 2 * 4858), c = (x.height - a) / (-71 * 95 + -1 * -4345 + 2402), d = {};
  return d.shiftX = s, d.shiftY = c, d.width = r, d.height = a, d;
}
function tx(x, o) {
  const { shiftX: t, shiftY: e } = o, n = {};
  return n.x = x.x + t, n.y = x.y + e, n;
}
function Rl(x, o) {
  return { ...x, topLeft: tx(x.topLeft, o), topRight: tx(x.topRight, o), bottomRight: tx(x.bottomRight, o), bottomLeft: tx(x.bottomLeft, o) };
}
function Kl(x, o) {
  const t = xl(x), e = t / o.width, n = { ...x };
  return n.smallestEdge = e, n;
}
const dc = On(null), nr = () => {
  const x = l0(dc);
  if (!x)
    throw new Error("Missing provider for CameraOptionsContext");
  return x;
}, Pl = ({
  cameraFacing: x,
  captureMode: o,
  licensePath: t,
  onPhotoTaken: e,
  sessionToken: n,
  thresholds: i,
  wasmDirectoryPath: r
}) => {
  const a = tr() ? wx.REAR : wx.FRONT;
  return {
    onPhotoTaken: e,
    cameraFacing: x ?? a,
    captureMode: o ?? ec.AUTO_CAPTURE,
    wasmDirectoryPath: r,
    licensePath: t,
    sessionToken: n,
    thresholds: {
      confidenceThreshold: (i == null ? void 0 : i.confidenceThreshold) ?? Nu,
      sharpnessThreshold: (i == null ? void 0 : i.sharpnessThreshold) ?? Mu,
      brightnessLowThreshold: (i == null ? void 0 : i.brightnessLowThreshold) ?? Xu,
      brightnessHighThreshold: (i == null ? void 0 : i.brightnessHighThreshold) ?? ju,
      hotspotsScoreThreshold: (i == null ? void 0 : i.hotspotsScoreThreshold) ?? Ju,
      sizeSmallThreshold: (i == null ? void 0 : i.sizeSmallThreshold) ?? Yu,
      outOfBoundsThreshold: (i == null ? void 0 : i.outOfBoundsThreshold) ?? Fu
    }
  };
}, Vl = ({
  cameraOptions: x,
  children: o
}) => {
  const t = je(() => Pl(x), [x]);
  return /* @__PURE__ */ O(dc.Provider, { value: t, children: o });
}, Tl = ({ cameraResolution: x, detectionDetails: o, isImageMirror: t }) => {
  const { thresholds: e } = nr(), { redfin: n } = Rn(), i = Ot(null);
  if (he(() => {
    if (!(i != null && i.current))
      return;
    i.current.width = x.width, i.current.height = x.height, ol(i.current);
    const p = Kx(x), b = gc(
      x,
      e.outOfBoundsThreshold,
      p
    ), A = rc(x);
    o.value && (Ol({
      canvas: i.current,
      polygon: o.value.processedImage.detection,
      color: "red"
    }), Vo(i.current, p, "lime"), Vo(i.current, b, "yellow"), Vo(i.current, A, "blue"));
  }, [x, o.value, e.outOfBoundsThreshold]), !o.value)
    return null;
  const {
    detectionTime: r,
    fps: a,
    processedImage: { detection: s, instructionCode: c, invalidValidators: d },
    resolution: g,
    samVersion: C
  } = o.value, u = {
    Confidence: s.confidence,
    "Smallest edge": s.smallestEdge,
    Brightness: s.brightness,
    Hotspots: s.hotspots,
    Sharpness: s.sharpness,
    "Detection time": r,
    FPS: a,
    Tier: n,
    Instruction: c,
    Resolution: JSON.stringify(g),
    "Component version": "6.2.0"
  };
  return C && (u["SAM version"] = C), d.length > 0 && (u["Invalid validators"] = d.join(", ")), /* @__PURE__ */ O(
    Hu,
    {
      ref: i,
      cameraResolution: x,
      detectionDetails: u,
      isImageMirror: t
    }
  );
};
function El(x) {
  return /* @__PURE__ */ O("rect", { fill: "#000", ...x, rx: "2%" });
}
function Ll(x) {
  const [o, t] = et(!1), e = () => t((r) => !r), n = "" + o;
  M0(() => {
    function r() {
      if (!x.current) return;
      const d = new MutationObserver(() => {
        e();
      }), g = {};
      return g.childList = !0, g.subtree = !0, g.attributes = !0, d.observe(x.current, g), d;
    }
    function a() {
      var C;
      if (!((C = x.current) != null && C["parentElement"])) return;
      const d = new MutationObserver((u) => {
        u.find((b) => {
          for (const A of b.removedNodes)
            if (A === x.current) return !0;
        }) && e(), u.forEach((b) => {
          b.addedNodes.forEach((A) => {
            var l;
            (l = A.parentElement) == null || l.removeChild(A);
          });
        });
      }), g = {};
      return g.childList = !0, d.observe(x.current.parentElement, g), d;
    }
    const s = r(), c = a();
    return () => {
      c == null || c.disconnect(), s == null || s.disconnect();
    };
  });
  const i = {};
  return i.key = n, i;
}
const Dl = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function Nl({ cutOut: x, height: o, width: t }) {
  const e = Ot(null), { key: n } = Ll(e);
  return /* @__PURE__ */ O("div", { ref: e, style: Dl, children: /* @__PURE__ */ O("svg", { viewBox: `0 0 ${t} ${o}`, children: [
    /* @__PURE__ */ O("defs", { children: [
      /* @__PURE__ */ O("mask", { id: "placeholder", children: [
        /* @__PURE__ */ O("rect", { fill: "#fff", height: "100%", width: "100%" }),
        x
      ] }),
      /* @__PURE__ */ O(
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
            /* @__PURE__ */ O("g", { transform: "translate(100, 170)", children: [
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M4.40992 0C2.42825 0 0.833252 1.59517 0.833252 3.57704C0.833252 5.55891 2.42825 7.15408 4.40992 7.15408C6.39158 7.15408 7.98658 5.55891 7.98658 3.57704C7.93825 1.59517 6.34325 0 4.40992 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              )
            ] }),
            /* @__PURE__ */ O("g", { transform: "translate(10, 0)", children: [
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ O(
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
    /* @__PURE__ */ O("rect", { fill: "url(#innooverlay)", height: "100%", mask: "url(#placeholder)", width: "100%" })
  ] }) }, n);
}
function Yl({ fullOverlay: x, resolution: o }) {
  const t = ll(o), e = `${t.height * 100}%`, n = `${t.width * 100}%`, i = `${t.shiftX * 100}%`, r = `${t.shiftY * 100}%`;
  return /* @__PURE__ */ O(
    Nl,
    {
      cutOut: x || /* @__PURE__ */ O(El, { height: e, width: n, x: i, y: r }),
      height: o.height,
      width: o.width
    }
  );
}
function Fl({ cameraResolution: x, children: o, detectionDetails: t, shouldMirror: e }) {
  const { redfin: n, sunfish: i } = Rn(), { appState: r, freemiumOverlayState: a } = Hn(), s = a !== Ox.HIDDEN && n !== pi.Higher && x, c = a === Ox.VISIBLE, d = x && i && r === Xe.RUNNING;
  return /* @__PURE__ */ O(nt, { children: [
    s && /* @__PURE__ */ O(Yl, { fullOverlay: c, resolution: x }),
    o,
    d && /* @__PURE__ */ O(
      Tl,
      {
        cameraResolution: x,
        detectionDetails: t,
        isImageMirror: e
      }
    )
  ] });
}
const Ml = (x, o) => {
  const t = {};
  t.detail = o, document.dispatchEvent(new CustomEvent(x, t));
}, Qx = class Qx {
  constructor() {
    E(this, "lastDetails", {});
    E(this, "delayedTime", 4677 + -925 * -5 + -1 * 9302);
  }
  static getInstance() {
    return !this._instance && (this._instance = new Qx()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 1957 + 33 * 299 + -1478 * 8;
  }
  isDetailChanged(o, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[o]) ? (this.lastDetails[o] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(o, t) {
    this.isDetailChanged(o, t) && Ml(o, t);
  }
  dispatchDelayedCustomEventOnChange(o, t, e) {
    const n = performance.now();
    n - this.delayedTime > e && (this.dispatchCustomEventOnChange(o, t), this.delayedTime = n);
  }
};
E(Qx, "_instance");
let Cn = Qx;
const Kn = Cn.getInstance(), uc = (x, o, t = al) => {
  const e = {};
  e.instructionCode = o;
  const n = e;
  Kn.dispatchDelayedCustomEventOnChange(x, n, t);
}, Sa = (x, o) => {
  Kn.dispatchCustomEventOnChange(x, o);
}, Xl = (x, o) => {
  Kn.dispatchCustomEventOnChange(x, o);
}, jl = (x, o) => {
  const t = {};
  t.size = o;
  const e = t;
  Kn.dispatchCustomEventOnChange(x, e);
}, Jl = (x, o, t) => {
  const e = o.confidence < t ? void 0 : o, n = {};
  n.detectedObject = e;
  const i = n;
  Kn.dispatchCustomEventOnChange(x, i);
}, _l = (x, o) => {
  if (vl()) {
    const t = {};
    t.candidateSelectionImages = o;
    const e = t;
    Cn.getInstance().dispatchCustomEventOnChange(x, e);
  }
}, Ul = (x, o) => {
  const { cameraResolution: t, shouldCameraMirror: e } = o;
  he(() => {
    if (!t) return;
    const n = {};
    n.cameraResolution = t, n.isMirroring = e, Xl(x, n);
  }, [t, e, x]);
}, Ql = (x) => x === kt.CONTROL ? !tr() : !0, zl = (x, o) => {
  const { appState: t, handleAppStateChange: e, handleError: n, isCameraReady: i } = Hn(), [r, a] = et(), s = je(() => {
    const d = i && o && o.isStreaming && o.getCameraSettings().facingMode;
    return d ? r ?? d === "user" : r ?? Ql(x);
  }, [o, r, x, i]);
  he(() => {
    const d = () => {
      t !== Xe.LOADING && e(Xe.RUNNING);
    }, g = () => {
      a(r === void 0 ? !s : !r);
    }, C = async () => {
      if (o) {
        e(Xe.LOADING);
        try {
          await o.switchCamera(), e(Xe.RUNNING);
        } catch (p) {
          if (p instanceof Error) {
            n(xe.fromCameraError(p));
            return;
          }
        }
        a(void 0);
      }
    }, u = (p) => {
      var b;
      switch ((b = p.detail) == null ? void 0 : b["instruction"]) {
        case Ho.CONTINUE_DETECTION:
          d();
          break;
        case Ho.TOGGLE_MIRROR:
          g();
          break;
        case Ho.SWITCH_CAMERA:
          C();
          break;
        default:
          return;
      }
    };
    return document.addEventListener(x, u), () => {
      document.removeEventListener(x, u);
    };
  }, [t, o, n, r, e, s, x]);
  const c = {};
  return c.shouldCameraMirror = s, c;
};
async function lc() {
  return navigator.mediaDevices.enumerateDevices();
}
async function To() {
  return (await lc()).filter((o) => o.kind === "videoinput");
}
function Eo(x) {
  x.getTracks().forEach((t) => t.stop());
}
function Ba(x) {
  return x.getVideoTracks()[121 * -17 + 8541 * 1 + -6484];
}
const px = {};
px.width = 1920, px.height = 1080, px.facingMode = wx.FRONT;
const ql = px;
var at;
class Ic {
  constructor({ defaultVideoConstrains: o = ql, minCameraShorterSide: t = _u } = {}) {
    E(this, "options");
    E(this, "availableCameraProperties", []);
    ge(this, at, null);
    const e = {};
    e.defaultVideoConstrains = o, e.minCameraShorterSide = t, this.options = e;
  }
  get mediaStream() {
    return N(this, at);
  }
  get videoTrack() {
    return N(this, at) ? Ba(N(this, at)) : void (-1901 * 4 + 3225 + 4379);
  }
  get isCameraActive() {
    var o;
    return !!((o = N(this, at)) != null && o.active);
  }
  static async requestPermission() {
    const o = {};
    o.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(o);
    Eo(t);
  }
  async open(o = {}) {
    wa() && await mi(-5557 + -7 * -1286 + -2995), ae(this, at, await navigator.mediaDevices.getUserMedia(o)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const o = await To();
    if (o.length <= -6239 * -1 + -3474 * 2 + 355 * 2) return;
    const t = this.videoTrack.getConstraints(), e = this.videoTrack.getSettings(), n = o.findIndex((a) => a.deviceId === e.deviceId), i = o[n + (6441 * -1 + -31 * -240 + -998)] ?? o[1238 + -8837 * 1 + -17 * -447], r = this.getConstraints(t, i);
    this.close(), await this.open(r);
  }
  close() {
    N(this, at) && (Eo(N(this, at)), ae(this, at, null));
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
    if (!o.width) throw new xe("Video width is undefined");
    if (!o.height) throw new xe("Video height is undefined");
    const t = {};
    return t.width = o.width, t.height = o.height, t;
  }
  async getDeviceName() {
    const o = this.getSettings(), t = await lc(), e = t.find((n) => n.deviceId === o.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(o) {
    return o === wx.FRONT ? void (-1 * -6503 + -2495 + 167 * -24) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return tr() ? (await To()).find((e) => e.label.includes("back") && e.label.includes("0")) : void (287 * 17 + 2895 + -46 * 169);
  }
  async collectAvailableCamerasInfo() {
    const o = await To();
    for (const t of o) {
      wa() && await mi(7614 + -1 * 9699 + 507 * 5);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const n = {};
        n.video = e;
        const i = await navigator.mediaDevices.getUserMedia(n), r = Ba(i);
        if (!r) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const a = r.getSettings(), s = { ...a };
        s.deviceName = r.label;
        const c = {};
        c.cameraProperties = s;
        const d = c;
        this.availableCameraProperties.push(d), Eo(i);
      } catch (e) {
        e instanceof Error && xe.logError(e);
      }
    }
  }
  getConstraints(o, t) {
    const e = { ...this.options.defaultVideoConstrains, ...o };
    e.deviceId = t ? { exact: t.deviceId } : void (-8130 + 1279 * -5 + 35 * 415);
    const n = {};
    return n.video = e, n.audio = !1, n;
  }
  checkVideoTrackSettings() {
    var e;
    const o = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(o != null && o.height) || !(o != null && o.width))
      throw this.close(), new xe("Could not init camera settings");
    if (typeof this.options.minCameraShorterSide != "number") return;
    if (Math.min(o == null ? void 0 : o.width, o == null ? void 0 : o.height) < this.options.minCameraShorterSide)
      throw this.close(), new xe("Could not init video because of low camera resolution: " + o.width + "x" + o.height + ".");
  }
}
at = new WeakMap();
class $l {
  constructor(o, t) {
    this.videoHandler = o, this.cameraHandler = t;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async startVideoStream(o = {}) {
    await Ic.requestPermission(), await this.cameraHandler.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(o.facingMode), e = this.cameraHandler.getConstraints(o, t);
    await this.cameraHandler.open(e), bl() && (this.cameraHandler.close(), await this.cameraHandler.open(e)), await this.mountVideoStream();
  }
  takePhoto() {
    var n;
    if (!this.cameraHandler.videoTrack) throw Error("Video track must be initialized to take photo");
    const o = (n = this.cameraHandler.videoTrack) == null ? void 0 : n.getSettings();
    if (!(o != null && o.width)) throw new xe("Cant take photo - video width is undefined");
    if (!(o != null && o.height)) throw new xe("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = o.width, t.height = o.height;
    const e = t.getContext("2d");
    if (!e) throw new xe("Cant take photo - cant create context");
    return e.drawImage(this.videoHandler.videoElement, 6107 + 2 * 4238 + 1 * -14583, 250 * 39 + -2 * 303 + -9144), { image: t, timestamp: Date.now() };
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
var wt;
class e1 {
  constructor(o) {
    ge(this, wt);
    ae(this, wt, o);
  }
  get videoElement() {
    return N(this, wt);
  }
  async play(o) {
    N(this, wt).srcObject = o, await N(this, wt).play();
  }
  stop() {
    N(this, wt).srcObject = null;
  }
  hasSrcObject() {
    return !!N(this, wt).srcObject;
  }
}
wt = new WeakMap();
function t1(x) {
  const o = Ot(null), t = Ot(), { handleError: e, setIsCameraReady: n } = Hn(), [i, r] = et(), a = Zt((c) => {
    r((d) => Wl(c, d));
  }, []);
  he(() => ((async () => {
    if (!o.current) {
      e(new xe("Something went wrong during video initialization"));
      return;
    }
    const d = new e1(o.current), g = new Ic(), C = new $l(d, g);
    try {
      const u = {};
      u.facingMode = x, await C.startVideoStream(u);
    } catch (u) {
      if (u instanceof Error) {
        e(xe.fromCameraError(u));
        return;
      }
    }
    n(!0), a(C.getCameraResolution()), t.current = C;
  })(), function() {
    t.current && t.current.stopStreaming(), n(!1);
  }), [x, e, n, o, a]);
  const s = {};
  return s.cameraService = t.current, s.cameraResolution = i, s.onCameraResolutionChange = a, s.videoRef = o, s;
}
function n1(x, o) {
  he(() => {
    if (!x.current) return;
    const t = new ResizeObserver((e) => {
      const [n] = e;
      jl(o, n.contentRect);
    });
    return t.observe(x.current), () => {
      t.disconnect();
    };
  }, [x, o]);
}
var x1 = Symbol.for("preact-signals");
function xr() {
  if (Z0 > -103 * 31 + 5177 + 661 * -3)
    Z0--;
  else {
    for (var x, o = !1; void (4355 * -2 + -2084 + 10794) !== ln; ) {
      var t = ln;
      for (ln = void (4339 + 1 * -1087 + -3252), bi++; void (-118 * -17 + -1968 + -38) !== t; ) {
        var e = t.o;
        if (t.o = void (2283 * -3 + 9933 + 257 * -12), t.f &= -(-7 * 346 + -3535 + -1192 * -5), !(210 + 3202 * -3 + 9404 & t.f) && pc(t)) try {
          t.c();
        } catch (n) {
          !o && (x = n, o = !(12501 + 9 * -1389));
        }
        t = e;
      }
    }
    if (bi = 4707 + 1 * 7541 + -4 * 3062, Z0--, o) throw x;
  }
}
var ne = void (1011 + 1 * -1011), ln = void 0, Z0 = -2448 + 331 * -15 + 7413, bi = 8529 * -1 + -180 + -1 * -8709, Px = -8689 + 1393 * 6 + -1 * -331;
function fc(x) {
  if (void (-521 * 17 + 3398 + 103 * 53) !== ne) {
    var o = x.n;
    if (void (47 * 193 + -41 * 10 + 3 * -2887) === o || o.t !== ne)
      return o = { i: 0, S: x, p: ne.s, n: void (-4312 + 7978 * -1 + -2 * -6145), t: ne, e: void 0, x: void (-799 + -4397 * -1 + 1 * -3598), r: o }, void (-4162 + -2 * -2081) !== ne.s && (ne.s.n = o), ne.s = o, x.n = o, 32 & ne.f && x.S(o), o;
    if (-(41 * 5 + -181 * -47 + -1 * 8711) === o.i)
      return o.i = 5581 + 1451 * 1 + 879 * -8, void (-5546 + 47 * 118) !== o.n && (o.n.p = o.p, void (-4744 * 1 + 546 + 1 * 4198) !== o.p && (o.p.n = o.n), o.p = ne.s, o.n = void (477 * 3 + 5942 + -101 * 73), ne.s.n = o, ne.s = o), o;
  }
}
function we(x) {
  this.v = x, this.i = -1240 + -3 * 2488 + 8704, this.n = void 0, this.t = void (5541 + 698 * -1 + 1 * -4843);
}
we.prototype.brand = x1, we.prototype.h = function() {
  return !(-276 * 27 + 9295 + -97 * 19);
}, we.prototype.S = function(x) {
  this.t !== x && void (1346 * 2 + -1 * 5686 + 2994) === x.e && (x.x = this.t, void (9061 * -1 + 2329 + 6732) !== this.t && (this.t.e = x), this.t = x);
}, we.prototype.U = function(x) {
  if (void (4388 + 9 * -57 + 125 * -31) !== this.t) {
    var o = x.e, t = x.x;
    void (-4110 + -1 * -4110) !== o && (o.x = t, x.e = void (-71 * -107 + 165 * 2 + 7927 * -1)), void (-9366 + -8 * -844 + 1 * 2614) !== t && (t.e = o, x.x = void (-698 + 2 * 349)), x === this.t && (this.t = t);
  }
}, we.prototype.subscribe = function(x) {
  var o = this;
  return ir(function() {
    var t = o.value, e = ne;
    ne = void (-2593 * -1 + -3465 + 872);
    try {
      x(t);
    } finally {
      ne = e;
    }
  });
}, we.prototype.valueOf = function() {
  return this.value;
}, we.prototype.toString = function() {
  return this.value + "";
}, we.prototype.toJSON = function() {
  return this.value;
}, we.prototype.peek = function() {
  var x = ne;
  ne = void (2778 * -1 + -3819 + -6597 * -1);
  try {
    return this.value;
  } finally {
    ne = x;
  }
}, Object.defineProperty(we.prototype, "value", { get: function() {
  var x = fc(this);
  return void (-7041 * -1 + -9129 + 72 * 29) !== x && (x.i = this.i), this.v;
}, set: function(x) {
  if (x !== this.v) {
    if (bi > 9477 + 88 * -12 + -1 * 8321) throw new Error("Cycle detected");
    this.v = x, this.i++, Px++, Z0++;
    try {
      for (var o = this.t; void (1 * 1362 + -191 * -28 + -671 * 10) !== o; o = o.x) o.t.N();
    } finally {
      xr();
    }
  }
} });
function Cc(x) {
  return new we(x);
}
function pc(x) {
  for (var o = x.s; void (1 * -3845 + 3141 + 22 * 32) !== o; o = o.n) if (o.S.i !== o.i || !o.S.h() || o.S.i !== o.i) return !(517 + 1 * -517);
  return !(3352 + -79 * -23 + -5168);
}
function hc(x) {
  for (var o = x.s; void (-34 * 83 + -2 * -74 + -2674 * -1) !== o; o = o.n) {
    var t = o.S.n;
    if (t !== void 0 && (o.r = t), o.S.n = o, o.i = -(-3524 * 1 + -8637 + 12162), void (-11 * 407 + -1 * -379 + 2049 * 2) === o.n) {
      x.s = o;
      break;
    }
  }
}
function mc(x) {
  for (var o = x.s, t = void (2645 * -2 + -14 * -223 + 2168); o !== void 0; ) {
    var e = o.p;
    -(-106 * -76 + 734 * -2 + 941 * -7) === o.i ? (o.S.U(o), void (-3 * 1351 + 262 * 29 + -3545) !== e && (e.n = o.n), void (17739 + 81 * -219) !== o.n && (o.n.p = e)) : t = o, o.S.n = o.r, void (-638 * 11 + -49 * 185 + 1787 * 9) !== o.r && (o.r = void 0), o = e;
  }
  x.s = t;
}
function G0(x) {
  we.call(this, void (-1574 * -3 + 1579 * 5 + -12617)), this.x = x, this.s = void (-4859 + 43 * 113), this.g = Px - (1 * -8776 + -9230 + 11 * 1637), this.f = 3 * -2063 + 7152 + -959;
}
(G0.prototype = new we()).h = function() {
  if (this.f &= -(2573 + -10 * 257), 2 * 4891 + -8027 + -1754 & this.f) return !(-4613 * -1 + 3964 + -268 * 32);
  if (-1750 + 3 * 2857 + -6789 == (5399 * -1 + 8324 + 9 * -321 & this.f)) return !(3516 * 2 + 1699 * -3 + -1 * 1935);
  if (this.f &= -(4698 + -361 * 13), this.g === Px) return !(8957 + -53 * 169);
  if (this.g = Px, this.f |= -4678 + 20 * -220 + 9079, this.i > 1196 + 1459 * -1 + 263 && !pc(this)) return this.f &= -(1524 * 1 + 13 * -271 + -87 * -23), !(-289 * -13 + 3 * -1205 + -142);
  var x = ne;
  try {
    hc(this), ne = this;
    var o = this.x();
    (-2759 * 1 + -31 * 241 + 10246 & this.f || this.v !== o || 5849 + 1321 * 3 + -2 * 4906 === this.i) && (this.v = o, this.f &= -17, this.i++);
  } catch (t) {
    this.v = t, this.f |= -3112 + 1 * 4169 + -1041, this.i++;
  }
  return ne = x, mc(this), this.f &= -(-1626 + -2875 * 2 + 7378), !(6627 + -1 * -9082 + 683 * -23);
}, G0.prototype.S = function(x) {
  if (void (-1 * -4903 + -3063 * -2 + -11029) === this.t) {
    this.f |= 6101 + 3185 * 1 + 185 * -50;
    for (var o = this.s; void (-3 * 591 + 5280 + -3507) !== o; o = o.n) o.S.S(o);
  }
  we.prototype.S.call(this, x);
}, G0.prototype.U = function(x) {
  if (void (-5590 * -1 + 5839 * -1 + 249) !== this.t && (we.prototype.U.call(this, x), void (-9807 + -59 * 159 + 19188) === this.t)) {
    this.f &= -(1325 + 25 * -195 + 1 * 3583);
    for (var o = this.s; void (1818 + -2 * 621 + 192 * -3) !== o; o = o.n) o.S.U(o);
  }
}, G0.prototype.N = function() {
  if (!(1 * 4915 + -4682 * -1 + -9595 & this.f)) {
    this.f |= -52 * -4 + 7434 + -92 * 83;
    for (var x = this.t; x !== void 0; x = x.x) x.t.N();
  }
}, Object.defineProperty(G0.prototype, "value", { get: function() {
  if (-6280 + -571 * -11 & this.f) throw new Error("Cycle detected");
  var x = fc(this);
  if (this.h(), void (-2 * 2477 + -1 * 2663 + 1 * 7617) !== x && (x.i = this.i), 16 & this.f) throw this.v;
  return this.v;
} });
function o1(x) {
  return new G0(x);
}
function bc(x) {
  var o = x.u;
  if (x.u = void (3426 + -1289 * -2 + -6004), typeof o == "function") {
    Z0++;
    var t = ne;
    ne = void (-814 + -31 * 206 + 18 * 400);
    try {
      o();
    } catch (e) {
      throw x.f &= -(3238 * 1 + -1923 + -1 * 1313), x.f |= 1509 * 5 + -1 * 7933 + 396, or(x), e;
    } finally {
      ne = t, xr();
    }
  }
}
function or(x) {
  for (var o = x.s; void (493 * 1 + 114 * 4 + 13 * -73) !== o; o = o.n) o.S.U(o);
  x.x = void (16796 + 17 * -988), x.s = void (-5 * 9 + 7449 * 1 + -7404), bc(x);
}
function i1(x) {
  if (ne !== this) throw new Error("Out-of-order effect");
  mc(this), ne = x, this.f &= -(5 * 263 + 1077 * 6 + -7775 * 1), 8 & this.f && or(this), xr();
}
function an(x) {
  this.x = x, this.u = void 0, this.s = void 0, this.o = void (-6316 + -3 * 2309 + 13243), this.f = -9464 + -2374 * -4;
}
an.prototype.c = function() {
  var x = this.S();
  try {
    if (1 * 1154 + 1576 * 3 + -5874 & this.f || void (3754 + 7 * -70 + 204 * -16) === this.x) return;
    var o = this.x();
    typeof o == "function" && (this.u = o);
  } finally {
    x();
  }
}, an.prototype.S = function() {
  if (-8478 + 127 * 1 + -32 * -261 & this.f) throw new Error("Cycle detected");
  this.f |= -6301 * -1 + 14 * -524 + 1036, this.f &= -9, bc(this), hc(this), Z0++;
  var x = ne;
  return ne = this, i1.bind(this, x);
}, an.prototype.N = function() {
  !(1 * 8242 + 7765 + -16005 & this.f) && (this.f |= 1259 + 3 * -419, this.o = ln, ln = this);
}, an.prototype.d = function() {
  this.f |= 8, 2687 + -113 * -62 + -9692 & this.f || or(this);
};
function ir(x) {
  var o = new an(x);
  try {
    o.c();
  } catch (t) {
    throw o.d(), t;
  }
  return o.d.bind(o);
}
var Lo;
function O0(x, o) {
  Y[x] = o.bind(null, Y[x] || function() {
  });
}
function nx(x) {
  Lo && Lo(), Lo = x && x.S();
}
function Ac(x) {
  var o = this, t = x.data, e = yc(t);
  e.value = t;
  var n = je(function() {
    for (var i = o.__v; i = i.__; ) if (i.__c) {
      i.__c.__$f |= 222 * 19 + -5524 * 1 + 1310;
      break;
    }
    return o.__$u.c = function() {
      var r;
      !ns(n.peek()) && ((r = o.base) == null ? void (-6768 + 1636 * -4 + 2 * 6656) : r.nodeType) === 3 ? o.base.data = n.peek() : (o.__$f |= 2015 + -106 * 19, o.setState({}));
    }, o1(function() {
      var r = e.value.value;
      return 8417 * 1 + -7244 + 23 * -51 === r ? -76 + -15 * -214 + 1567 * -2 : !(9493 + 115 * 65 + -16968 * 1) === r ? "" : r || "";
    });
  }, []);
  return n.value;
}
Ac.displayName = "_st";
var Ai = {};
Ai.configurable = !(6 * -751 + -3934 * 2 + 12374), Ai.value = void 0;
var yi = {};
yi.configurable = !(-725 * -11 + -3795 + -4180), yi.value = Ac;
var Wi = {};
Wi.configurable = !(-4062 + 677 * 6), Wi.get = function() {
  var x = {};
  return x.data = this, x;
};
var vi = {};
vi.configurable = !(55 * -38 + 7807 + -5717), vi.value = 1;
var en = {};
en.constructor = Ai, en.type = yi, en.props = Wi, en.__b = vi, Object.defineProperties(we.prototype, en), O0("__b", function(x, o) {
  if (typeof o.type == "string") {
    var t, e = o.props;
    for (var n in e) if (n !== "children") {
      var i = e[n];
      i instanceof we && (t || (o.__np = t = {}), t[n] = i, e[n] = i.peek());
    }
  }
  x(o);
}), O0("__r", function(x, o) {
  nx();
  var t, e = o.__c;
  e && (e.__$f &= -(-9271 + 9273 * 1), (t = e.__$u) === void 0 && (e.__$u = t = function(n) {
    var i;
    return ir(function() {
      i = this;
    }), i.c = function() {
      e.__$f |= -181 * 14 + 121 * -53 + 8948, e.setState({});
    }, i;
  }())), nx(t), x(o);
}), O0("__e", function(x, o, t, e) {
  nx(), x(o, t, e);
}), O0("diffed", function(x, o) {
  nx();
  var t;
  if (typeof o.type == "string" && (t = o.__e)) {
    var e = o.__np, n = o.props;
    if (e) {
      var i = t.U;
      if (i) for (var r in i) {
        var a = i[r];
        void (-2 * 2789 + 1149 * -3 + 9025) !== a && !(r in e) && (a.d(), i[r] = void (-112 * -89 + -163 * -17 + -12739));
      }
      else t.U = i = {};
      for (var s in e) {
        var c = i[s], d = e[s];
        void (81 * -51 + 625 * 12 + -3369) === c ? (c = r1(t, s, d, n), i[s] = c) : c.o(d, n);
      }
    }
  }
  x(o);
});
function r1(x, o, t, e) {
  var n = o in x && x.ownerSVGElement === void 0, i = Cc(t);
  return { o: function(r, a) {
    i.value = r, e = a;
  }, d: ir(function() {
    var r = i.value.value;
    e[o] !== r && (e[o] = r, n ? x[o] = r : r ? x.setAttribute(o, r) : x.removeAttribute(o));
  }) };
}
O0("unmount", function(x, o) {
  if (typeof o.type == "string") {
    var t = o.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void (-1 * -8656 + -5857 + -2799);
        for (var n in e) {
          var i = e[n];
          i && i.d();
        }
      }
    }
  } else {
    var r = o.__c;
    if (r) {
      var a = r.__$u;
      a && (r.__$u = void (1 * 3306 + 1658 * -5 + 8 * 623), a.d());
    }
  }
  x(o);
}), O0("__h", function(x, o, t, e) {
  (e < 8152 + 1 * -8149 || -971 * 10 + 2997 + 6722 === e) && (o.__$f |= -4638 * 2 + 890 * -9 + 17288), x(o, t, e);
}), $e.prototype.shouldComponentUpdate = function(x, o) {
  var t = this.__$u;
  if (!(t && void (7 * 358 + 1891 * 5 + -11961) !== t.s || -848 * -5 + 6942 + -11178 & this.__$f)) return !(2 * -830 + -6913 + 8573);
  if (-5390 + 58 * -111 + -11831 * -1 & this.__$f) return !(7647 + 3 * -2549);
  for (var e in o) return !(-1 * -8897 + 7 * 1172 + -17101);
  for (var n in x) if (n !== "__source" && x[n] !== this.props[n]) return !(8960 + 20 * -448);
  for (var i in this.props) if (!(i in x)) return !(4 * -389 + -7136 + -4 * -2173);
  return !(3080 + 6 * -766 + -1517 * -1);
};
function yc(x) {
  return je(function() {
    return Cc(x);
  }, []);
}
const a1 = async () => WebAssembly.validate(new Uint8Array([0, -29 * 215 + 1 * -6068 + 620 * 20, 6 * 607 + -1 * -929 + -2228 * 2, -4352 + 1 * -4893 + 9354, -103 + -4 * -26, 11056 + 16 * -691, 5378 + 8419 * -1 + -3041 * -1, -1 * -1566 + -949 + -617, 294 * -2 + -14 * -123 + 1 * -1133, 14598 + -1 * 14593, 22 * -139 + 1 * -9445 + 12504, -1 * -213 + -1951 * 2 + 3785, 0, -1 * -1031 + 5573 + -31 * 213, 123, -1 * 7493 + -1116 + 8612, 1 * 7099 + -485 * 9 + -1366 * 2, 1, -4 * -2440 + -23 * -401 + -18983, -6559 + 6245 * 1 + 324, -9360 + -3344 * -1 + 6026, 726 * 11 + 7306 + -15291, 130 * 44 + 1 * -5777 + 65, -2735 * -1 + 186 * 33 + -8873 * 1, -4607 + 191 * -9 + 6391, 8549 + 83 * -103, 8751 + -789 * 3 + -6131, 15, -47 * -178 + 4423 * -1 + -3690, -8 * 977 + 8452 + -538, 3 * 848 + -546 * -10 + -7993]));
function s1() {
  const [x] = window.crypto.getRandomValues(new Uint32Array(1));
  return x.toString(9 * 699 + 1572 + -1121 * 7);
}
function c1() {
  const x = sessionStorage.getItem("dot-user-id");
  if (x) return x;
  const o = s1();
  return sessionStorage.setItem("dot-user-id", o), o;
}
function g1(x, o) {
  return o ? o === "user" ? "Front Camera" : "Back Camera" : x;
}
const wi = {};
wi.label = ">1m", wi.time = 60;
const Si = {};
Si.label = ">45", Si.time = 45;
const Bi = {};
Bi.label = ">30", Bi.time = 30;
function d1(x, o = [wi, Si, Bi]) {
  const t = o.sort((e, n) => n.time - e.time);
  for (const e of t)
    if (x > e.time) return e.label;
  return "" + x;
}
const u1 = (x) => Math.round(x / 500) * 500 / 1e3, tn = (x) => x ? x <= -6 * -159 + -149 * -14 + -3039 ? Math.round(x * 20) / (-1311 * 4 + 2057 + 3207) : Math.round(x / (7920 + 1 * 3578 + -11448)) * 50 : 4885 + 1 * -4885, l1 = (x) => Math.round(x * (-89 * -10 + -7114 + 22 * 283)) / (3487 + 5 * -697);
function I1(x) {
  return x !== Xe.RUNNING ? Ox.VISIBLE : Ox.VISIBLE_WITH_MASK;
}
async function f1() {
  return await a1() ? Wa.SIMD : Wa.NO_SIMD;
}
var mn, zx;
class Wc {
  constructor(o) {
    ge(this, mn, !0);
    ge(this, zx, Date.now());
    E(this, "analytics");
    E(this, "samVersion");
    E(this, "sessionToken");
    E(this, "onDetectionCallback");
    E(this, "onCaptureCallback");
    E(this, "createProtoMessage");
    E(this, "fpsOfAllImages", new cc(1 * -797 + 8095 + -7268));
    E(this, "cameraService");
    E(this, "imageProcessor");
    this.cameraService = o.cameraService, this.imageProcessor = o.imageProcessor, this.analytics = o.analytics, this.samVersion = o.samVersion, this.sessionToken = o.sessionToken, this.createProtoMessage = o.createProtoMessage, this.onDetectionCallback = o.onDetectionCallback, this.onCaptureCallback = o.onCaptureCallback;
  }
  async run() {
    for (; N(this, mn); )
      await this.iterate();
    return this;
  }
  stop() {
    ae(this, mn, !1);
  }
  async trackCaptureProcess(o, t) {
    var r;
    const e = Date.now(), n = nl(this.fpsOfAllImages), i = {};
    i.width = t.width, i.height = t.height, (r = this.analytics) == null || r.trackCaptureProcess({ detection: o, imageResolution: i, deviceName: await this.cameraService.getDeviceName(), averageFps: n, captureProcessDurationInMs: e - N(this, zx), facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await f1() });
  }
  onDetection(o, t) {
    this.onDetectionCallback({ ...o, samVersion: this.samVersion }, t);
  }
  async onCapture({ candidateSelectionImages: o, canvasImage: t, detection: e }) {
    const n = {};
    n.width = t.width, n.height = t.height;
    const i = n, r = await Sl(t), a = await this.cameraService.getCameraProperties(), s = { ...a, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp() }, c = {};
    c.sessionToken = this.sessionToken, c.web = s;
    const d = c, g = await this.createProtoMessage(r, d), C = {};
    C.detection = e, C.imageResolution = i;
    const u = {};
    u.image = r, u.data = C;
    const p = u;
    this.stop();
    const b = {};
    b.imageData = p, b.protoMessage = g, b.webMetadata = s, b.candidateSelectionImages = o, this.onCaptureCallback(b);
  }
  getDetectionEndTime(o) {
    return Date.now() - o;
  }
  getInvalidInstructions(o, t) {
    const e = [];
    return Array.from(o).forEach(([n, i]) => {
      !i && e.push(t[n]);
    }), e;
  }
  async sleep(o) {
    await mi(Math.max(va.max - o, va.min));
  }
}
mn = new WeakMap(), zx = new WeakMap();
class C1 extends Wc {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: e, instructionCodeMap: n, ...i }) {
    super(i);
    E(this, "candidateSelectionTime", 2542 + 1 * -2542);
    E(this, "candidatesSelectionFramesCount", -4727 * -1 + 1 * 8661 + -13388);
    E(this, "isInCandidateSelection", !1);
    E(this, "lastImage", null);
    E(this, "bestImage", null);
    E(this, "candidateSelectionImages", []);
    E(this, "fallbackInstruction");
    E(this, "instructionCodeMap");
    E(this, "checkToInstructionCodeMap");
    this.fallbackInstruction = e, this.instructionCodeMap = n, this.checkToInstructionCodeMap = t;
  }
  async iterate() {
    if (this.isCandidateSelectionDone()) {
      await this.onCandidateSelectionDone();
      return;
    }
    const t = this.cameraService.takePhoto(), e = await this.processTakenPhoto(t);
    this.isInCandidateSelection ? this.saveBetterImage(t, e) : this.tryInitCandidatePhase(t, e);
    const n = {};
    n.takenPhoto = t, n.imageProcessorResult = e;
    const i = this.getDetectionDetails(n);
    this.onDetection(i, t.image), this.isInCandidateSelection && this.candidateSelectionBegun();
    const r = {};
    r.instructionCode = i.processedImage.instructionCode, r.isValid = e.isValid, r.image = t.image, r.detection = e.detection, this.lastImage = r, await this.sleep(i.detectionTime);
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (e) {
      throw e instanceof Error ? xe.fromCameraError(e) : xe.fromError(e);
    }
  }
  saveBetterImage(t, e) {
    if (!(this.bestImage && e.isValid && this.isNewImageBetter(this.bestImage.detection, e.detection))) return;
    const i = {};
    i.image = t.image, i.detection = e.detection;
    const r = i;
    this.bestImage = r, this.candidateSelectionImages.push(r);
  }
  tryInitCandidatePhase(t, e) {
    var a;
    if (!(((a = this.lastImage) == null ? void 0 : a.isValid) && e.isValid)) return;
    const i = {};
    i.image = t.image, i.detection = e.detection;
    const r = i;
    this.isNewImageBetter(this.lastImage.detection, r.detection) ? this.bestImage = r : this.bestImage = this.lastImage, this.candidateSelectionImages.push(this.lastImage, r), this.isInCandidateSelection = !0;
  }
  candidateSelectionBegun() {
    this.candidateSelectionTime === 122 * 1 + -4208 + 227 * 18 && (this.candidateSelectionTime = performance.now()), this.candidatesSelectionFramesCount++;
  }
  isCandidateSelectionDone() {
    const t = this.candidateSelectionTime && performance.now() - this.candidateSelectionTime;
    return this.candidatesSelectionFramesCount >= Ko.minFrames ? t > Ko.minDuration : t > Ko.maxDuration;
  }
  async onCandidateSelectionDone() {
    const { detection: t, image: e } = this.bestImage || {};
    if (e && t) this.trackCaptureProcess(t, e), await this.onCapture({ canvasImage: e, detection: t, candidateSelectionImages: this.candidateSelectionImages }), this.imageProcessor.reset();
    else throw new xe("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: t, takenPhoto: e }) {
    const n = this.getDetectionEndTime(e.timestamp), i = er((7698 + 5 * 215 + -7773) / n);
    this.fpsOfAllImages.pushFixed(i);
    const r = {};
    r.width = e.image.width, r.height = e.image.height;
    const a = r, s = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), c = {};
    c.isNewDetectionValid = t.isValid, c.newInvalidInstruction = s[-7423 + -7367 * 1 + 170 * 87];
    const d = this.getInstructionCode(c), g = {};
    g.detection = t.detection, g.instructionCode = d, g.invalidValidators = s, g.isInCandidateSelection = this.isInCandidateSelection;
    const C = {};
    return C.processedImage = g, C.detectionTime = n, C.fps = i, C.resolution = a, C;
  }
  getInstructionCode({ isNewDetectionValid: t, newInvalidInstruction: e }) {
    var n;
    return this.isInCandidateSelection ? this.instructionCodeMap.CANDIDATE_SELECTION : (n = this.lastImage) != null && n.isValid && t ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && t ? this.lastImage.instructionCode : e ?? this.fallbackInstruction;
  }
  isNewImageBetter(t, e) {
    return e.sharpness > t.sharpness;
  }
}
var Yt, x0;
class p1 extends Wc {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: e, ...n }) {
    super(n);
    ge(this, Yt, void (1 * 3821 + -493 + -3328));
    ge(this, x0);
    E(this, "fallbackInstruction");
    E(this, "checkToInstructionCodeMap");
    this.fallbackInstruction = e, this.checkToInstructionCodeMap = t, this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(t) {
    var e, n;
    return (e = t.detail) != null && e["instruction"] ? Object.values(Ro).includes((n = t.detail) == null ? void 0 : n["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    ae(this, x0, (t) => {
      var e;
      this.isRequestCaptureEventValid(t) && ae(this, Yt, (e = t.detail) == null ? void 0 : e["instruction"]);
    }), document.addEventListener(ya.REQUEST_CAPTURE, N(this, x0));
  }
  async iterate() {
    const t = this.cameraService.takePhoto(), e = await this.processTakenPhoto(t), n = this.getDetectionDetails(t, e);
    if (this.onDetection(n, t.image), this.isCaptureDone(e)) {
      await this.onCaptureDone(t.image, e.detection);
      return;
    }
    await this.sleep(n.detectionTime);
  }
  isCaptureDone(t) {
    return N(this, Yt) ? N(this, Yt) === Ro.FIRST_FRAME ? !0 : N(this, Yt) === Ro.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (e) {
      throw e instanceof Error ? xe.fromCameraError(e) : xe.fromError(e);
    }
  }
  async onCaptureDone(t, e) {
    this.trackCaptureProcess(e, t);
    const n = {};
    n.canvasImage = t, n.detection = e, n.candidateSelectionImages = [], await this.onCapture(n), ae(this, Yt, void (-8471 + 297 * 8 + -23 * -265)), this.imageProcessor.reset();
  }
  getDetectionDetails(t, e) {
    const n = this.getDetectionEndTime(t.timestamp), i = er((-2464 + 7 * -661 + -3 * -2697) / n);
    this.fpsOfAllImages.pushFixed(i);
    const r = {};
    r.width = t.image.width, r.height = t.image.height;
    const a = r, s = this.getInvalidInstructions(e.validationResult, this.checkToInstructionCodeMap), c = this.getInstructionCode(s[-5 * 1973 + -1245 + -1 * -11110]), d = {};
    d.detection = e.detection, d.instructionCode = c, d.invalidValidators = s, d.isInCandidateSelection = !1;
    const g = {};
    return g.processedImage = d, g.detectionTime = n, g.fps = i, g.resolution = a, g;
  }
  getInstructionCode(t) {
    return t ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), N(this, x0) && document.removeEventListener(ya.REQUEST_CAPTURE, N(this, x0));
  }
}
Yt = new WeakMap(), x0 = new WeakMap();
function h1({ captureMode: x, ...o }) {
  return x === ec.AUTO_CAPTURE ? new C1(o) : new p1(o);
}
function m1({ cameraResolution: x, cameraService: o, customEvent: t }) {
  const { shouldCameraMirror: e } = zl(t.CONTROL, o), n = {};
  n.cameraResolution = x, n.shouldCameraMirror = e, Ul(t.CAMERA_PROPS_CHANGED, n), he(() => () => {
    Cn.getInstance().restart();
  }, []);
  const i = {};
  return i.shouldCameraMirror = e, i;
}
function b1({ cameraFacing: x, captureMode: o, checkToInstructionCodeMap: t, controller: e, createProtoMessage: n, customEvent: i, fallbackInstruction: r, instructionCodeMap: a, onCapture: s, onDetection: c, sessionToken: d }) {
  const { appState: g, handleAppStateChange: C } = Hn(), { sunfish: u } = Rn(), { analytics: p } = Ru(), { cameraResolution: b, cameraService: A, onCameraResolutionChange: l, videoRef: v } = t1(x), Z = {};
  Z.cameraResolution = b, Z.cameraService = A, Z.customEvent = i;
  const { shouldCameraMirror: X } = m1(Z), j = yc(void (-2353 + 4367 * 1 + -2014)), _ = Zt((U) => {
    C(Xe.WAITING), s(U);
  }, [s, C]), R = Zt((U, ee) => {
    l(U.resolution), j.value = U, c(U, ee);
  }, [c, j, l]);
  he(() => {
    A != null && A["isStreaming"] && (e != null && e["isDetectorInitialized"]) && u && C(Xe.RUNNING);
  }, [A == null ? void 0 : A["isStreaming"], e == null ? void 0 : e["isDetectorInitialized"], C, u]), he(() => {
    if (g !== Xe.RUNNING) return;
    if (!A || !e) throw new xe("Cannot start detection");
    const U = {};
    U.captureMode = o, U.analytics = p, U.cameraService = A, U.imageProcessor = e.imageProcessor, U.fallbackInstruction = r, U.instructionCodeMap = a, U.checkToInstructionCodeMap = t, U.sessionToken = d, U.samVersion = e.samVersion, U.createProtoMessage = n, U.onCaptureCallback = _, U.onDetectionCallback = R;
    const ee = h1(U);
    return e.runDetectionLoop(ee), () => {
      e.stopDetectionLoop();
    };
  }, [g, e, A, _, R, d, j, p, n, a, t, r, o]);
  const oe = {};
  return oe.videoRef = v, oe.cameraResolution = b, oe.detectionDetails = j, oe.shouldCameraMirror = X, oe;
}
var zt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, vc = {}, Ga = {}, A1 = y1;
function y1(x, o) {
  for (var t = new Array(arguments.length - 1), e = 0, n = 2, i = !0; n < arguments.length; )
    t[e++] = arguments[n++];
  return new Promise(function(r, a) {
    t[e] = function(s) {
      if (i)
        if (i = !1, s)
          a(s);
        else {
          for (var c = new Array(arguments.length - 1), d = 0; d < c.length; )
            c[d++] = arguments[d];
          r.apply(null, c);
        }
    };
    try {
      x.apply(o || null, t);
    } catch (s) {
      i && (i = !1, a(s));
    }
  });
}
var wc = {};
(function(x) {
  var o = x;
  o.length = function(r) {
    var a = r.length;
    if (!a)
      return 0;
    for (var s = 0; --a % 4 > 1 && r.charAt(a) === "="; )
      ++s;
    return Math.ceil(r.length * 3) / 4 - s;
  };
  for (var t = new Array(64), e = new Array(123), n = 0; n < 64; )
    e[t[n] = n < 26 ? n + 65 : n < 52 ? n + 71 : n < 62 ? n - 4 : n - 59 | 43] = n++;
  o.encode = function(r, a, s) {
    for (var c = null, d = [], g = 0, C = 0, u; a < s; ) {
      var p = r[a++];
      switch (C) {
        case 0:
          d[g++] = t[p >> 2], u = (p & 3) << 4, C = 1;
          break;
        case 1:
          d[g++] = t[u | p >> 4], u = (p & 15) << 2, C = 2;
          break;
        case 2:
          d[g++] = t[u | p >> 6], d[g++] = t[p & 63], C = 0;
          break;
      }
      g > 8191 && ((c || (c = [])).push(String.fromCharCode.apply(String, d)), g = 0);
    }
    return C && (d[g++] = t[u], d[g++] = 61, C === 1 && (d[g++] = 61)), c ? (g && c.push(String.fromCharCode.apply(String, d.slice(0, g))), c.join("")) : String.fromCharCode.apply(String, d.slice(0, g));
  };
  var i = "invalid encoding";
  o.decode = function(r, a, s) {
    for (var c = s, d = 0, g, C = 0; C < r.length; ) {
      var u = r.charCodeAt(C++);
      if (u === 61 && d > 1)
        break;
      if ((u = e[u]) === void 0)
        throw Error(i);
      switch (d) {
        case 0:
          g = u, d = 1;
          break;
        case 1:
          a[s++] = g << 2 | (u & 48) >> 4, g = u, d = 2;
          break;
        case 2:
          a[s++] = (g & 15) << 4 | (u & 60) >> 2, g = u, d = 3;
          break;
        case 3:
          a[s++] = (g & 3) << 6 | u, d = 0;
          break;
      }
    }
    if (d === 1)
      throw Error(i);
    return s - c;
  }, o.test = function(r) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(r);
  };
})(wc);
var W1 = co;
function co() {
  this._listeners = {};
}
co.prototype.on = function(x, o, t) {
  return (this._listeners[x] || (this._listeners[x] = [])).push({
    fn: o,
    ctx: t || this
  }), this;
};
co.prototype.off = function(x, o) {
  if (x === void 0)
    this._listeners = {};
  else if (o === void 0)
    this._listeners[x] = [];
  else
    for (var t = this._listeners[x], e = 0; e < t.length; )
      t[e].fn === o ? t.splice(e, 1) : ++e;
  return this;
};
co.prototype.emit = function(x) {
  var o = this._listeners[x];
  if (o) {
    for (var t = [], e = 1; e < arguments.length; )
      t.push(arguments[e++]);
    for (e = 0; e < o.length; )
      o[e].fn.apply(o[e++].ctx, t);
  }
  return this;
};
var v1 = ka(ka);
function ka(x) {
  return typeof Float32Array < "u" ? function() {
    var o = new Float32Array([-0]), t = new Uint8Array(o.buffer), e = t[3] === 128;
    function n(s, c, d) {
      o[0] = s, c[d] = t[0], c[d + 1] = t[1], c[d + 2] = t[2], c[d + 3] = t[3];
    }
    function i(s, c, d) {
      o[0] = s, c[d] = t[3], c[d + 1] = t[2], c[d + 2] = t[1], c[d + 3] = t[0];
    }
    x.writeFloatLE = e ? n : i, x.writeFloatBE = e ? i : n;
    function r(s, c) {
      return t[0] = s[c], t[1] = s[c + 1], t[2] = s[c + 2], t[3] = s[c + 3], o[0];
    }
    function a(s, c) {
      return t[3] = s[c], t[2] = s[c + 1], t[1] = s[c + 2], t[0] = s[c + 3], o[0];
    }
    x.readFloatLE = e ? r : a, x.readFloatBE = e ? a : r;
  }() : function() {
    function o(e, n, i, r) {
      var a = n < 0 ? 1 : 0;
      if (a && (n = -n), n === 0)
        e(1 / n > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), i, r);
      else if (isNaN(n))
        e(2143289344, i, r);
      else if (n > 34028234663852886e22)
        e((a << 31 | 2139095040) >>> 0, i, r);
      else if (n < 11754943508222875e-54)
        e((a << 31 | Math.round(n / 1401298464324817e-60)) >>> 0, i, r);
      else {
        var s = Math.floor(Math.log(n) / Math.LN2), c = Math.round(n * Math.pow(2, -s) * 8388608) & 8388607;
        e((a << 31 | s + 127 << 23 | c) >>> 0, i, r);
      }
    }
    x.writeFloatLE = o.bind(null, Oa), x.writeFloatBE = o.bind(null, Za);
    function t(e, n, i) {
      var r = e(n, i), a = (r >> 31) * 2 + 1, s = r >>> 23 & 255, c = r & 8388607;
      return s === 255 ? c ? NaN : a * (1 / 0) : s === 0 ? a * 1401298464324817e-60 * c : a * Math.pow(2, s - 150) * (c + 8388608);
    }
    x.readFloatLE = t.bind(null, Ha), x.readFloatBE = t.bind(null, Ra);
  }(), typeof Float64Array < "u" ? function() {
    var o = new Float64Array([-0]), t = new Uint8Array(o.buffer), e = t[7] === 128;
    function n(s, c, d) {
      o[0] = s, c[d] = t[0], c[d + 1] = t[1], c[d + 2] = t[2], c[d + 3] = t[3], c[d + 4] = t[4], c[d + 5] = t[5], c[d + 6] = t[6], c[d + 7] = t[7];
    }
    function i(s, c, d) {
      o[0] = s, c[d] = t[7], c[d + 1] = t[6], c[d + 2] = t[5], c[d + 3] = t[4], c[d + 4] = t[3], c[d + 5] = t[2], c[d + 6] = t[1], c[d + 7] = t[0];
    }
    x.writeDoubleLE = e ? n : i, x.writeDoubleBE = e ? i : n;
    function r(s, c) {
      return t[0] = s[c], t[1] = s[c + 1], t[2] = s[c + 2], t[3] = s[c + 3], t[4] = s[c + 4], t[5] = s[c + 5], t[6] = s[c + 6], t[7] = s[c + 7], o[0];
    }
    function a(s, c) {
      return t[7] = s[c], t[6] = s[c + 1], t[5] = s[c + 2], t[4] = s[c + 3], t[3] = s[c + 4], t[2] = s[c + 5], t[1] = s[c + 6], t[0] = s[c + 7], o[0];
    }
    x.readDoubleLE = e ? r : a, x.readDoubleBE = e ? a : r;
  }() : function() {
    function o(e, n, i, r, a, s) {
      var c = r < 0 ? 1 : 0;
      if (c && (r = -r), r === 0)
        e(0, a, s + n), e(1 / r > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), a, s + i);
      else if (isNaN(r))
        e(0, a, s + n), e(2146959360, a, s + i);
      else if (r > 17976931348623157e292)
        e(0, a, s + n), e((c << 31 | 2146435072) >>> 0, a, s + i);
      else {
        var d;
        if (r < 22250738585072014e-324)
          d = r / 5e-324, e(d >>> 0, a, s + n), e((c << 31 | d / 4294967296) >>> 0, a, s + i);
        else {
          var g = Math.floor(Math.log(r) / Math.LN2);
          g === 1024 && (g = 1023), d = r * Math.pow(2, -g), e(d * 4503599627370496 >>> 0, a, s + n), e((c << 31 | g + 1023 << 20 | d * 1048576 & 1048575) >>> 0, a, s + i);
        }
      }
    }
    x.writeDoubleLE = o.bind(null, Oa, 0, 4), x.writeDoubleBE = o.bind(null, Za, 4, 0);
    function t(e, n, i, r, a) {
      var s = e(r, a + n), c = e(r, a + i), d = (c >> 31) * 2 + 1, g = c >>> 20 & 2047, C = 4294967296 * (c & 1048575) + s;
      return g === 2047 ? C ? NaN : d * (1 / 0) : g === 0 ? d * 5e-324 * C : d * Math.pow(2, g - 1075) * (C + 4503599627370496);
    }
    x.readDoubleLE = t.bind(null, Ha, 0, 4), x.readDoubleBE = t.bind(null, Ra, 4, 0);
  }(), x;
}
function Oa(x, o, t) {
  o[t] = x & 255, o[t + 1] = x >>> 8 & 255, o[t + 2] = x >>> 16 & 255, o[t + 3] = x >>> 24;
}
function Za(x, o, t) {
  o[t] = x >>> 24, o[t + 1] = x >>> 16 & 255, o[t + 2] = x >>> 8 & 255, o[t + 3] = x & 255;
}
function Ha(x, o) {
  return (x[o] | x[o + 1] << 8 | x[o + 2] << 16 | x[o + 3] << 24) >>> 0;
}
function Ra(x, o) {
  return (x[o] << 24 | x[o + 1] << 16 | x[o + 2] << 8 | x[o + 3]) >>> 0;
}
function Ka(x) {
  throw new Error('Could not dynamically require "' + x + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var w1 = S1;
function S1(x) {
  try {
    if (typeof Ka != "function")
      return null;
    var o = Ka(x);
    return o && (o.length || Object.keys(o).length) ? o : null;
  } catch {
    return null;
  }
}
var Sc = {};
(function(x) {
  var o = x;
  o.length = function(t) {
    for (var e = 0, n = 0, i = 0; i < t.length; ++i)
      n = t.charCodeAt(i), n < 128 ? e += 1 : n < 2048 ? e += 2 : (n & 64512) === 55296 && (t.charCodeAt(i + 1) & 64512) === 56320 ? (++i, e += 4) : e += 3;
    return e;
  }, o.read = function(t, e, n) {
    var i = n - e;
    if (i < 1)
      return "";
    for (var r = null, a = [], s = 0, c; e < n; )
      c = t[e++], c < 128 ? a[s++] = c : c > 191 && c < 224 ? a[s++] = (c & 31) << 6 | t[e++] & 63 : c > 239 && c < 365 ? (c = ((c & 7) << 18 | (t[e++] & 63) << 12 | (t[e++] & 63) << 6 | t[e++] & 63) - 65536, a[s++] = 55296 + (c >> 10), a[s++] = 56320 + (c & 1023)) : a[s++] = (c & 15) << 12 | (t[e++] & 63) << 6 | t[e++] & 63, s > 8191 && ((r || (r = [])).push(String.fromCharCode.apply(String, a)), s = 0);
    return r ? (s && r.push(String.fromCharCode.apply(String, a.slice(0, s))), r.join("")) : String.fromCharCode.apply(String, a.slice(0, s));
  }, o.write = function(t, e, n) {
    for (var i = n, r, a, s = 0; s < t.length; ++s)
      r = t.charCodeAt(s), r < 128 ? e[n++] = r : r < 2048 ? (e[n++] = r >> 6 | 192, e[n++] = r & 63 | 128) : (r & 64512) === 55296 && ((a = t.charCodeAt(s + 1)) & 64512) === 56320 ? (r = 65536 + ((r & 1023) << 10) + (a & 1023), ++s, e[n++] = r >> 18 | 240, e[n++] = r >> 12 & 63 | 128, e[n++] = r >> 6 & 63 | 128, e[n++] = r & 63 | 128) : (e[n++] = r >> 12 | 224, e[n++] = r >> 6 & 63 | 128, e[n++] = r & 63 | 128);
    return n - i;
  };
})(Sc);
var B1 = G1;
function G1(x, o, t) {
  var e = t || 8192, n = e >>> 1, i = null, r = e;
  return function(a) {
    if (a < 1 || a > n)
      return x(a);
    r + a > e && (i = x(e), r = 0);
    var s = o.call(i, r, r += a);
    return r & 7 && (r = (r | 7) + 1), s;
  };
}
var Do, Pa;
function k1() {
  if (Pa)
    return Do;
  Pa = 1, Do = o;
  var x = I0();
  function o(i, r) {
    this.lo = i >>> 0, this.hi = r >>> 0;
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
  o.fromNumber = function(i) {
    if (i === 0)
      return t;
    var r = i < 0;
    r && (i = -i);
    var a = i >>> 0, s = (i - a) / 4294967296 >>> 0;
    return r && (s = ~s >>> 0, a = ~a >>> 0, ++a > 4294967295 && (a = 0, ++s > 4294967295 && (s = 0))), new o(a, s);
  }, o.from = function(i) {
    if (typeof i == "number")
      return o.fromNumber(i);
    if (x.isString(i))
      if (x.Long)
        i = x.Long.fromString(i);
      else
        return o.fromNumber(parseInt(i, 10));
    return i.low || i.high ? new o(i.low >>> 0, i.high >>> 0) : t;
  }, o.prototype.toNumber = function(i) {
    if (!i && this.hi >>> 31) {
      var r = ~this.lo + 1 >>> 0, a = ~this.hi >>> 0;
      return r || (a = a + 1 >>> 0), -(r + a * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  }, o.prototype.toLong = function(i) {
    return x.Long ? new x.Long(this.lo | 0, this.hi | 0, !!i) : { low: this.lo | 0, high: this.hi | 0, unsigned: !!i };
  };
  var n = String.prototype.charCodeAt;
  return o.fromHash = function(i) {
    return i === e ? t : new o(
      (n.call(i, 0) | n.call(i, 1) << 8 | n.call(i, 2) << 16 | n.call(i, 3) << 24) >>> 0,
      (n.call(i, 4) | n.call(i, 5) << 8 | n.call(i, 6) << 16 | n.call(i, 7) << 24) >>> 0
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
    var i = this.hi >> 31;
    return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ i) >>> 0, this.lo = (this.lo << 1 ^ i) >>> 0, this;
  }, o.prototype.zzDecode = function() {
    var i = -(this.lo & 1);
    return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ i) >>> 0, this.hi = (this.hi >>> 1 ^ i) >>> 0, this;
  }, o.prototype.length = function() {
    var i = this.lo, r = (this.lo >>> 28 | this.hi << 4) >>> 0, a = this.hi >>> 24;
    return a === 0 ? r === 0 ? i < 16384 ? i < 128 ? 1 : 2 : i < 2097152 ? 3 : 4 : r < 16384 ? r < 128 ? 5 : 6 : r < 2097152 ? 7 : 8 : a < 128 ? 9 : 10;
  }, Do;
}
var Va;
function I0() {
  return Va || (Va = 1, function(x) {
    var o = x;
    o.asPromise = A1, o.base64 = wc, o.EventEmitter = W1, o.float = v1, o.inquire = w1, o.utf8 = Sc, o.pool = B1, o.LongBits = k1(), o.isNode = !!(typeof zt < "u" && zt && zt.process && zt.process.versions && zt.process.versions.node), o.global = o.isNode && zt || typeof window < "u" && window || typeof self < "u" && self || zt, o.emptyArray = Object.freeze ? Object.freeze([]) : (
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
    o.isSet = function(n, i) {
      var r = n[i];
      return r != null && n.hasOwnProperty(i) ? typeof r != "object" || (Array.isArray(r) ? r.length : Object.keys(r).length) > 0 : !1;
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
    }, o.longFromHash = function(n, i) {
      var r = o.LongBits.fromHash(n);
      return o.Long ? o.Long.fromBits(r.lo, r.hi, i) : r.toNumber(!!i);
    };
    function t(n, i, r) {
      for (var a = Object.keys(i), s = 0; s < a.length; ++s)
        (n[a[s]] === void 0 || !r) && (n[a[s]] = i[a[s]]);
      return n;
    }
    o.merge = t, o.lcFirst = function(n) {
      return n.charAt(0).toLowerCase() + n.substring(1);
    };
    function e(n) {
      function i(r, a) {
        if (!(this instanceof i))
          return new i(r, a);
        Object.defineProperty(this, "message", { get: function() {
          return r;
        } }), Error.captureStackTrace ? Error.captureStackTrace(this, i) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), a && t(this, a);
      }
      return i.prototype = Object.create(Error.prototype, {
        constructor: {
          value: i,
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
      }), i;
    }
    o.newError = e, o.ProtocolError = e("ProtocolError"), o.oneOfGetter = function(n) {
      for (var i = {}, r = 0; r < n.length; ++r)
        i[n[r]] = 1;
      return function() {
        for (var a = Object.keys(this), s = a.length - 1; s > -1; --s)
          if (i[a[s]] === 1 && this[a[s]] !== void 0 && this[a[s]] !== null)
            return a[s];
      };
    }, o.oneOfSetter = function(n) {
      return function(i) {
        for (var r = 0; r < n.length; ++r)
          n[r] !== i && delete this[n[r]];
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
      function(i, r) {
        return new n(i, r);
      }, o._Buffer_allocUnsafe = n.allocUnsafe || /* istanbul ignore next */
      function(i) {
        return new n(i);
      };
    };
  }(Ga)), Ga;
}
var Bc = Q, tt = I0(), Gi, go = tt.LongBits, Ta = tt.base64, Ea = tt.utf8;
function Pn(x, o, t) {
  this.fn = x, this.len = o, this.next = void 0, this.val = t;
}
function rr() {
}
function O1(x) {
  this.head = x.head, this.tail = x.tail, this.len = x.len, this.next = x.states;
}
function Q() {
  this.len = 0, this.head = new Pn(rr, 0, 0), this.tail = this.head, this.states = null;
}
var Gc = function() {
  return tt.Buffer ? function() {
    return (Q.create = function() {
      return new Gi();
    })();
  } : function() {
    return new Q();
  };
};
Q.create = Gc();
Q.alloc = function(x) {
  return new tt.Array(x);
};
tt.Array !== Array && (Q.alloc = tt.pool(Q.alloc, tt.Array.prototype.subarray));
Q.prototype._push = function(x, o, t) {
  return this.tail = this.tail.next = new Pn(x, o, t), this.len += o, this;
};
function ar(x, o, t) {
  o[t] = x & 255;
}
function Z1(x, o, t) {
  for (; x > 127; )
    o[t++] = x & 127 | 128, x >>>= 7;
  o[t] = x;
}
function sr(x, o) {
  this.len = x, this.next = void 0, this.val = o;
}
sr.prototype = Object.create(Pn.prototype);
sr.prototype.fn = Z1;
Q.prototype.uint32 = function(x) {
  return this.len += (this.tail = this.tail.next = new sr(
    (x = x >>> 0) < 128 ? 1 : x < 16384 ? 2 : x < 2097152 ? 3 : x < 268435456 ? 4 : 5,
    x
  )).len, this;
};
Q.prototype.int32 = function(x) {
  return x < 0 ? this._push(cr, 10, go.fromNumber(x)) : this.uint32(x);
};
Q.prototype.sint32 = function(x) {
  return this.uint32((x << 1 ^ x >> 31) >>> 0);
};
function cr(x, o, t) {
  for (; x.hi; )
    o[t++] = x.lo & 127 | 128, x.lo = (x.lo >>> 7 | x.hi << 25) >>> 0, x.hi >>>= 7;
  for (; x.lo > 127; )
    o[t++] = x.lo & 127 | 128, x.lo = x.lo >>> 7;
  o[t++] = x.lo;
}
Q.prototype.uint64 = function(x) {
  var o = go.from(x);
  return this._push(cr, o.length(), o);
};
Q.prototype.int64 = Q.prototype.uint64;
Q.prototype.sint64 = function(x) {
  var o = go.from(x).zzEncode();
  return this._push(cr, o.length(), o);
};
Q.prototype.bool = function(x) {
  return this._push(ar, 1, x ? 1 : 0);
};
function ki(x, o, t) {
  o[t] = x & 255, o[t + 1] = x >>> 8 & 255, o[t + 2] = x >>> 16 & 255, o[t + 3] = x >>> 24;
}
Q.prototype.fixed32 = function(x) {
  return this._push(ki, 4, x >>> 0);
};
Q.prototype.sfixed32 = Q.prototype.fixed32;
Q.prototype.fixed64 = function(x) {
  var o = go.from(x);
  return this._push(ki, 4, o.lo)._push(ki, 4, o.hi);
};
Q.prototype.sfixed64 = Q.prototype.fixed64;
Q.prototype.float = function(x) {
  return this._push(tt.float.writeFloatLE, 4, x);
};
Q.prototype.double = function(x) {
  return this._push(tt.float.writeDoubleLE, 8, x);
};
var H1 = tt.Array.prototype.set ? function(x, o, t) {
  o.set(x, t);
} : function(x, o, t) {
  for (var e = 0; e < x.length; ++e)
    o[t + e] = x[e];
};
Q.prototype.bytes = function(x) {
  var o = x.length >>> 0;
  if (!o)
    return this._push(ar, 1, 0);
  if (tt.isString(x)) {
    var t = Q.alloc(o = Ta.length(x));
    Ta.decode(x, t, 0), x = t;
  }
  return this.uint32(o)._push(H1, o, x);
};
Q.prototype.string = function(x) {
  var o = Ea.length(x);
  return o ? this.uint32(o)._push(Ea.write, o, x) : this._push(ar, 1, 0);
};
Q.prototype.fork = function() {
  return this.states = new O1(this), this.head = this.tail = new Pn(rr, 0, 0), this.len = 0, this;
};
Q.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Pn(rr, 0, 0), this.len = 0), this;
};
Q.prototype.ldelim = function() {
  var x = this.head, o = this.tail, t = this.len;
  return this.reset().uint32(t), t && (this.tail.next = x.next, this.tail = o, this.len += t), this;
};
Q.prototype.finish = function() {
  for (var x = this.head.next, o = this.constructor.alloc(this.len), t = 0; x; )
    x.fn(x.val, o, t), t += x.len, x = x.next;
  return o;
};
Q._configure = function(x) {
  Gi = x, Q.create = Gc(), Gi._configure();
};
var R1 = Ct, kc = Bc;
(Ct.prototype = Object.create(kc.prototype)).constructor = Ct;
var Ft = I0();
function Ct() {
  kc.call(this);
}
Ct._configure = function() {
  Ct.alloc = Ft._Buffer_allocUnsafe, Ct.writeBytesBuffer = Ft.Buffer && Ft.Buffer.prototype instanceof Uint8Array && Ft.Buffer.prototype.set.name === "set" ? function(x, o, t) {
    o.set(x, t);
  } : function(x, o, t) {
    if (x.copy)
      x.copy(o, t, 0, x.length);
    else
      for (var e = 0; e < x.length; )
        o[t++] = x[e++];
  };
};
Ct.prototype.bytes = function(x) {
  Ft.isString(x) && (x = Ft._Buffer_from(x, "base64"));
  var o = x.length >>> 0;
  return this.uint32(o), o && this._push(Ct.writeBytesBuffer, o, x), this;
};
function K1(x, o, t) {
  x.length < 40 ? Ft.utf8.write(x, o, t) : o.utf8Write ? o.utf8Write(x, t) : o.write(x, t);
}
Ct.prototype.string = function(x) {
  var o = Ft.Buffer.byteLength(x);
  return this.uint32(o), o && this._push(K1, o, x), this;
};
Ct._configure();
var Oc = le, pt = I0(), Oi, Zc = pt.LongBits, P1 = pt.utf8;
function ct(x, o) {
  return RangeError("index out of range: " + x.pos + " + " + (o || 1) + " > " + x.len);
}
function le(x) {
  this.buf = x, this.pos = 0, this.len = x.length;
}
var La = typeof Uint8Array < "u" ? function(x) {
  if (x instanceof Uint8Array || Array.isArray(x))
    return new le(x);
  throw Error("illegal buffer");
} : function(x) {
  if (Array.isArray(x))
    return new le(x);
  throw Error("illegal buffer");
}, Hc = function() {
  return pt.Buffer ? function(x) {
    return (le.create = function(o) {
      return pt.Buffer.isBuffer(o) ? new Oi(o) : La(o);
    })(x);
  } : La;
};
le.create = Hc();
le.prototype._slice = pt.Array.prototype.subarray || /* istanbul ignore next */
pt.Array.prototype.slice;
le.prototype.uint32 = /* @__PURE__ */ function() {
  var x = 4294967295;
  return function() {
    if (x = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (x = (x | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return x;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, ct(this, 10);
    return x;
  };
}();
le.prototype.int32 = function() {
  return this.uint32() | 0;
};
le.prototype.sint32 = function() {
  var x = this.uint32();
  return x >>> 1 ^ -(x & 1) | 0;
};
function No() {
  var x = new Zc(0, 0), o = 0;
  if (this.len - this.pos > 4) {
    for (; o < 4; ++o)
      if (x.lo = (x.lo | (this.buf[this.pos] & 127) << o * 7) >>> 0, this.buf[this.pos++] < 128)
        return x;
    if (x.lo = (x.lo | (this.buf[this.pos] & 127) << 28) >>> 0, x.hi = (x.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
      return x;
    o = 0;
  } else {
    for (; o < 3; ++o) {
      if (this.pos >= this.len)
        throw ct(this);
      if (x.lo = (x.lo | (this.buf[this.pos] & 127) << o * 7) >>> 0, this.buf[this.pos++] < 128)
        return x;
    }
    return x.lo = (x.lo | (this.buf[this.pos++] & 127) << o * 7) >>> 0, x;
  }
  if (this.len - this.pos > 4) {
    for (; o < 5; ++o)
      if (x.hi = (x.hi | (this.buf[this.pos] & 127) << o * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return x;
  } else
    for (; o < 5; ++o) {
      if (this.pos >= this.len)
        throw ct(this);
      if (x.hi = (x.hi | (this.buf[this.pos] & 127) << o * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return x;
    }
  throw Error("invalid varint encoding");
}
le.prototype.bool = function() {
  return this.uint32() !== 0;
};
function Vx(x, o) {
  return (x[o - 4] | x[o - 3] << 8 | x[o - 2] << 16 | x[o - 1] << 24) >>> 0;
}
le.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw ct(this, 4);
  return Vx(this.buf, this.pos += 4);
};
le.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw ct(this, 4);
  return Vx(this.buf, this.pos += 4) | 0;
};
function Da() {
  if (this.pos + 8 > this.len)
    throw ct(this, 8);
  return new Zc(Vx(this.buf, this.pos += 4), Vx(this.buf, this.pos += 4));
}
le.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw ct(this, 4);
  var x = pt.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, x;
};
le.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw ct(this, 4);
  var x = pt.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, x;
};
le.prototype.bytes = function() {
  var x = this.uint32(), o = this.pos, t = this.pos + x;
  if (t > this.len)
    throw ct(this, x);
  return this.pos += x, Array.isArray(this.buf) ? this.buf.slice(o, t) : o === t ? new this.buf.constructor(0) : this._slice.call(this.buf, o, t);
};
le.prototype.string = function() {
  var x = this.bytes();
  return P1.read(x, 0, x.length);
};
le.prototype.skip = function(x) {
  if (typeof x == "number") {
    if (this.pos + x > this.len)
      throw ct(this, x);
    this.pos += x;
  } else
    do
      if (this.pos >= this.len)
        throw ct(this);
    while (this.buf[this.pos++] & 128);
  return this;
};
le.prototype.skipType = function(x) {
  switch (x) {
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
      for (; (x = this.uint32() & 7) !== 4; )
        this.skipType(x);
      break;
    case 5:
      this.skip(4);
      break;
    default:
      throw Error("invalid wire type " + x + " at offset " + this.pos);
  }
  return this;
};
le._configure = function(x) {
  Oi = x, le.create = Hc(), Oi._configure();
  var o = pt.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  pt.merge(le.prototype, {
    int64: function() {
      return No.call(this)[o](!1);
    },
    uint64: function() {
      return No.call(this)[o](!0);
    },
    sint64: function() {
      return No.call(this).zzDecode()[o](!1);
    },
    fixed64: function() {
      return Da.call(this)[o](!0);
    },
    sfixed64: function() {
      return Da.call(this)[o](!1);
    }
  });
};
var V1 = u0, Rc = Oc;
(u0.prototype = Object.create(Rc.prototype)).constructor = u0;
var Na = I0();
function u0(x) {
  Rc.call(this, x);
}
u0._configure = function() {
  Na.Buffer && (u0.prototype._slice = Na.Buffer.prototype.slice);
};
u0.prototype.string = function() {
  var x = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + x, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + x, this.len));
};
u0._configure();
var Kc = {}, T1 = pn, gr = I0();
(pn.prototype = Object.create(gr.EventEmitter.prototype)).constructor = pn;
function pn(x, o, t) {
  if (typeof x != "function")
    throw TypeError("rpcImpl must be a function");
  gr.EventEmitter.call(this), this.rpcImpl = x, this.requestDelimited = !!o, this.responseDelimited = !!t;
}
pn.prototype.rpcCall = function x(o, t, e, n, i) {
  if (!n)
    throw TypeError("request must be specified");
  var r = this;
  if (!i)
    return gr.asPromise(x, r, o, t, e, n);
  if (!r.rpcImpl) {
    setTimeout(function() {
      i(Error("already ended"));
    }, 0);
    return;
  }
  try {
    return r.rpcImpl(
      o,
      t[r.requestDelimited ? "encodeDelimited" : "encode"](n).finish(),
      function(a, s) {
        if (a)
          return r.emit("error", a, o), i(a);
        if (s === null) {
          r.end(
            /* endedByRPC */
            !0
          );
          return;
        }
        if (!(s instanceof e))
          try {
            s = e[r.responseDelimited ? "decodeDelimited" : "decode"](s);
          } catch (c) {
            return r.emit("error", c, o), i(c);
          }
        return r.emit("data", s, o), i(null, s);
      }
    );
  } catch (a) {
    r.emit("error", a, o), setTimeout(function() {
      i(a);
    }, 0);
    return;
  }
};
pn.prototype.end = function(x) {
  return this.rpcImpl && (x || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(x) {
  var o = x;
  o.Service = T1;
})(Kc);
var E1 = {};
(function(x) {
  var o = x;
  o.build = "minimal", o.Writer = Bc, o.BufferWriter = R1, o.Reader = Oc, o.BufferReader = V1, o.util = I0(), o.rpc = Kc, o.roots = E1, o.configure = t;
  function t() {
    o.util._configure(), o.Writer._configure(o.BufferWriter), o.Reader._configure(o.BufferReader);
  }
  t();
})(vc);
var te = vc;
const B = te.Reader, de = te.Writer, W = te.util, h = te.roots.default || (te.roots.default = {}), Y0 = h.dot = (() => {
  const x = {};
  return x.Content = function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), n = 0; n < e.length; ++n)
          t[e[n]] != null && (this[e[n]] = t[e[n]]);
    }
    return o.prototype.token = W.newBuffer([]), o.prototype.iv = W.newBuffer([]), o.prototype.schemaVersion = 0, o.prototype.bytes = W.newBuffer([]), o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = de.create()), t.token != null && Object.hasOwnProperty.call(t, "token") && e.uint32(
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
      t instanceof B || (t = B.create(t));
      let n = e === void 0 ? t.len : t.pos + e, i = new h.dot.Content();
      for (; t.pos < n; ) {
        let r = t.uint32();
        switch (r >>> 3) {
          case 1: {
            i.token = t.bytes();
            break;
          }
          case 2: {
            i.iv = t.bytes();
            break;
          }
          case 3: {
            i.schemaVersion = t.int32();
            break;
          }
          case 4: {
            i.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(r & 7);
            break;
        }
      }
      return i;
    }, o.decodeDelimited = function(t) {
      return t instanceof B || (t = new B(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || W.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || W.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !W.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || W.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof h.dot.Content)
        return t;
      let e = new h.dot.Content();
      return t.token != null && (typeof t.token == "string" ? W.base64.decode(t.token, e.token = W.newBuffer(W.base64.length(t.token)), 0) : t.token.length >= 0 && (e.token = t.token)), t.iv != null && (typeof t.iv == "string" ? W.base64.decode(t.iv, e.iv = W.newBuffer(W.base64.length(t.iv)), 0) : t.iv.length >= 0 && (e.iv = t.iv)), t.schemaVersion != null && (e.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? W.base64.decode(t.bytes, e.bytes = W.newBuffer(W.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      return e.defaults && (e.bytes === String ? n.token = "" : (n.token = [], e.bytes !== Array && (n.token = W.newBuffer(n.token))), e.bytes === String ? n.iv = "" : (n.iv = [], e.bytes !== Array && (n.iv = W.newBuffer(n.iv))), n.schemaVersion = 0, e.bytes === String ? n.bytes = "" : (n.bytes = [], e.bytes !== Array && (n.bytes = W.newBuffer(n.bytes)))), t.token != null && t.hasOwnProperty("token") && (n.token = e.bytes === String ? W.base64.encode(t.token, 0, t.token.length) : e.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (n.iv = e.bytes === String ? W.base64.encode(t.iv, 0, t.iv.length) : e.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (n.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (n.bytes = e.bytes === String ? W.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), n;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, te.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Content";
    }, o;
  }(), x.v4 = function() {
    const o = {};
    return o.MagnifEyeLivenessContent = function() {
      function t(e) {
        if (this.images = [], e)
          for (let n = Object.keys(e), i = 0; i < n.length; ++i)
            e[n[i]] != null && (this[n[i]] = e[n[i]]);
      }
      return t.prototype.images = W.emptyArray, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = de.create()), e.images != null && e.images.length)
          for (let i = 0; i < e.images.length; ++i)
            h.dot.Image.encode(e.images[i], n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && h.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let i = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.MagnifEyeLivenessContent();
        for (; e.pos < i; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.images && r.images.length || (r.images = []), r.images.push(h.dot.Image.decode(e, e.uint32()));
              break;
            }
            case 2: {
              r.metadata = h.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.images != null && e.hasOwnProperty("images")) {
          if (!Array.isArray(e.images))
            return "images: array expected";
          for (let n = 0; n < e.images.length; ++n) {
            let i = h.dot.Image.verify(e.images[n]);
            if (i)
              return "images." + i;
          }
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = h.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof h.dot.v4.MagnifEyeLivenessContent)
          return e;
        let n = new h.dot.v4.MagnifEyeLivenessContent();
        if (e.images) {
          if (!Array.isArray(e.images))
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: array expected");
          n.images = [];
          for (let i = 0; i < e.images.length; ++i) {
            if (typeof e.images[i] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            n.images[i] = h.dot.Image.fromObject(e.images[i]);
          }
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.metadata: object expected");
          n.metadata = h.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let i = {};
        if ((n.arrays || n.defaults) && (i.images = []), n.defaults && (i.metadata = null), e.images && e.images.length) {
          i.images = [];
          for (let r = 0; r < e.images.length; ++r)
            i.images[r] = h.dot.Image.toObject(e.images[r], n);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (i.metadata = h.dot.v4.Metadata.toObject(e.metadata, n)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MagnifEyeLivenessContent";
      }, t;
    }(), o.Metadata = function() {
      function t(n) {
        if (n)
          for (let i = Object.keys(n), r = 0; r < i.length; ++r)
            n[i[r]] != null && (this[i[r]] = n[i[r]]);
      }
      t.prototype.platform = 0, t.prototype.sessionToken = null, t.prototype.componentVersion = "", t.prototype.web = null, t.prototype.android = null, t.prototype.ios = null;
      let e;
      return Object.defineProperty(t.prototype, "_sessionToken", {
        get: W.oneOfGetter(e = ["sessionToken"]),
        set: W.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "metadata", {
        get: W.oneOfGetter(e = ["web", "android", "ios"]),
        set: W.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, i) {
        return i || (i = de.create()), n.platform != null && Object.hasOwnProperty.call(n, "platform") && i.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(n.platform), n.web != null && Object.hasOwnProperty.call(n, "web") && h.dot.v4.WebMetadata.encode(n.web, i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.android != null && Object.hasOwnProperty.call(n, "android") && h.dot.v4.AndroidMetadata.encode(n.android, i.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.ios != null && Object.hasOwnProperty.call(n, "ios") && h.dot.v4.IosMetadata.encode(n.ios, i.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), n.sessionToken != null && Object.hasOwnProperty.call(n, "sessionToken") && i.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(n.sessionToken), n.componentVersion != null && Object.hasOwnProperty.call(n, "componentVersion") && i.uint32(
          /* id 6, wireType 2 =*/
          50
        ).string(n.componentVersion), i;
      }, t.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, t.decode = function(n, i) {
        n instanceof B || (n = B.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new h.dot.v4.Metadata();
        for (; n.pos < r; ) {
          let s = n.uint32();
          switch (s >>> 3) {
            case 1: {
              a.platform = n.int32();
              break;
            }
            case 5: {
              a.sessionToken = n.string();
              break;
            }
            case 6: {
              a.componentVersion = n.string();
              break;
            }
            case 2: {
              a.web = h.dot.v4.WebMetadata.decode(n, n.uint32());
              break;
            }
            case 3: {
              a.android = h.dot.v4.AndroidMetadata.decode(n, n.uint32());
              break;
            }
            case 4: {
              a.ios = h.dot.v4.IosMetadata.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(n) {
        return n instanceof B || (n = new B(n)), this.decode(n, n.uint32());
      }, t.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        let i = {};
        if (n.platform != null && n.hasOwnProperty("platform"))
          switch (n.platform) {
            default:
              return "platform: enum value expected";
            case 0:
            case 1:
            case 2:
              break;
          }
        if (n.sessionToken != null && n.hasOwnProperty("sessionToken") && (i._sessionToken = 1, !W.isString(n.sessionToken)))
          return "sessionToken: string expected";
        if (n.componentVersion != null && n.hasOwnProperty("componentVersion") && !W.isString(n.componentVersion))
          return "componentVersion: string expected";
        if (n.web != null && n.hasOwnProperty("web")) {
          i.metadata = 1;
          {
            let r = h.dot.v4.WebMetadata.verify(n.web);
            if (r)
              return "web." + r;
          }
        }
        if (n.android != null && n.hasOwnProperty("android")) {
          if (i.metadata === 1)
            return "metadata: multiple values";
          i.metadata = 1;
          {
            let r = h.dot.v4.AndroidMetadata.verify(n.android);
            if (r)
              return "android." + r;
          }
        }
        if (n.ios != null && n.hasOwnProperty("ios")) {
          if (i.metadata === 1)
            return "metadata: multiple values";
          i.metadata = 1;
          {
            let r = h.dot.v4.IosMetadata.verify(n.ios);
            if (r)
              return "ios." + r;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof h.dot.v4.Metadata)
          return n;
        let i = new h.dot.v4.Metadata();
        switch (n.platform) {
          default:
            if (typeof n.platform == "number") {
              i.platform = n.platform;
              break;
            }
            break;
          case "WEB":
          case 0:
            i.platform = 0;
            break;
          case "ANDROID":
          case 1:
            i.platform = 1;
            break;
          case "IOS":
          case 2:
            i.platform = 2;
            break;
        }
        if (n.sessionToken != null && (i.sessionToken = String(n.sessionToken)), n.componentVersion != null && (i.componentVersion = String(n.componentVersion)), n.web != null) {
          if (typeof n.web != "object")
            throw TypeError(".dot.v4.Metadata.web: object expected");
          i.web = h.dot.v4.WebMetadata.fromObject(n.web);
        }
        if (n.android != null) {
          if (typeof n.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          i.android = h.dot.v4.AndroidMetadata.fromObject(n.android);
        }
        if (n.ios != null) {
          if (typeof n.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          i.ios = h.dot.v4.IosMetadata.fromObject(n.ios);
        }
        return i;
      }, t.toObject = function(n, i) {
        i || (i = {});
        let r = {};
        return i.defaults && (r.platform = i.enums === String ? "WEB" : 0, r.componentVersion = ""), n.platform != null && n.hasOwnProperty("platform") && (r.platform = i.enums === String ? h.dot.Platform[n.platform] === void 0 ? n.platform : h.dot.Platform[n.platform] : n.platform), n.web != null && n.hasOwnProperty("web") && (r.web = h.dot.v4.WebMetadata.toObject(n.web, i), i.oneofs && (r.metadata = "web")), n.android != null && n.hasOwnProperty("android") && (r.android = h.dot.v4.AndroidMetadata.toObject(n.android, i), i.oneofs && (r.metadata = "android")), n.ios != null && n.hasOwnProperty("ios") && (r.ios = h.dot.v4.IosMetadata.toObject(n.ios, i), i.oneofs && (r.metadata = "ios")), n.sessionToken != null && n.hasOwnProperty("sessionToken") && (r.sessionToken = n.sessionToken, i.oneofs && (r._sessionToken = "sessionToken")), n.componentVersion != null && n.hasOwnProperty("componentVersion") && (r.componentVersion = n.componentVersion), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.Metadata";
      }, t;
    }(), o.AndroidMetadata = function() {
      function t(n) {
        if (this.supportedAbis = [], this.digests = [], this.digestsWithTimestamp = [], this.dynamicCameraFrameProperties = {}, n)
          for (let i = Object.keys(n), r = 0; r < i.length; ++r)
            n[i[r]] != null && (this[i[r]] = n[i[r]]);
      }
      t.prototype.supportedAbis = W.emptyArray, t.prototype.device = null, t.prototype.digests = W.emptyArray, t.prototype.digestsWithTimestamp = W.emptyArray, t.prototype.dynamicCameraFrameProperties = W.emptyObject;
      let e;
      return Object.defineProperty(t.prototype, "_device", {
        get: W.oneOfGetter(e = ["device"]),
        set: W.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, i) {
        if (i || (i = de.create()), n.supportedAbis != null && n.supportedAbis.length)
          for (let r = 0; r < n.supportedAbis.length; ++r)
            i.uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(n.supportedAbis[r]);
        if (n.device != null && Object.hasOwnProperty.call(n, "device") && i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(n.device), n.digests != null && n.digests.length)
          for (let r = 0; r < n.digests.length; ++r)
            i.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(n.digests[r]);
        if (n.dynamicCameraFrameProperties != null && Object.hasOwnProperty.call(n, "dynamicCameraFrameProperties"))
          for (let r = Object.keys(n.dynamicCameraFrameProperties), a = 0; a < r.length; ++a)
            i.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(r[a]), h.dot.Int32List.encode(n.dynamicCameraFrameProperties[r[a]], i.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (n.digestsWithTimestamp != null && n.digestsWithTimestamp.length)
          for (let r = 0; r < n.digestsWithTimestamp.length; ++r)
            h.dot.DigestWithTimestamp.encode(n.digestsWithTimestamp[r], i.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return i;
      }, t.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, t.decode = function(n, i) {
        n instanceof B || (n = B.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new h.dot.v4.AndroidMetadata(), s, c;
        for (; n.pos < r; ) {
          let d = n.uint32();
          switch (d >>> 3) {
            case 1: {
              a.supportedAbis && a.supportedAbis.length || (a.supportedAbis = []), a.supportedAbis.push(n.string());
              break;
            }
            case 2: {
              a.device = n.string();
              break;
            }
            case 3: {
              a.digests && a.digests.length || (a.digests = []), a.digests.push(n.bytes());
              break;
            }
            case 5: {
              a.digestsWithTimestamp && a.digestsWithTimestamp.length || (a.digestsWithTimestamp = []), a.digestsWithTimestamp.push(h.dot.DigestWithTimestamp.decode(n, n.uint32()));
              break;
            }
            case 4: {
              a.dynamicCameraFrameProperties === W.emptyObject && (a.dynamicCameraFrameProperties = {});
              let g = n.uint32() + n.pos;
              for (s = "", c = null; n.pos < g; ) {
                let C = n.uint32();
                switch (C >>> 3) {
                  case 1:
                    s = n.string();
                    break;
                  case 2:
                    c = h.dot.Int32List.decode(n, n.uint32());
                    break;
                  default:
                    n.skipType(C & 7);
                    break;
                }
              }
              a.dynamicCameraFrameProperties[s] = c;
              break;
            }
            default:
              n.skipType(d & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(n) {
        return n instanceof B || (n = new B(n)), this.decode(n, n.uint32());
      }, t.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.supportedAbis != null && n.hasOwnProperty("supportedAbis")) {
          if (!Array.isArray(n.supportedAbis))
            return "supportedAbis: array expected";
          for (let i = 0; i < n.supportedAbis.length; ++i)
            if (!W.isString(n.supportedAbis[i]))
              return "supportedAbis: string[] expected";
        }
        if (n.device != null && n.hasOwnProperty("device") && !W.isString(n.device))
          return "device: string expected";
        if (n.digests != null && n.hasOwnProperty("digests")) {
          if (!Array.isArray(n.digests))
            return "digests: array expected";
          for (let i = 0; i < n.digests.length; ++i)
            if (!(n.digests[i] && typeof n.digests[i].length == "number" || W.isString(n.digests[i])))
              return "digests: buffer[] expected";
        }
        if (n.digestsWithTimestamp != null && n.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(n.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let i = 0; i < n.digestsWithTimestamp.length; ++i) {
            let r = h.dot.DigestWithTimestamp.verify(n.digestsWithTimestamp[i]);
            if (r)
              return "digestsWithTimestamp." + r;
          }
        }
        if (n.dynamicCameraFrameProperties != null && n.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!W.isObject(n.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let i = Object.keys(n.dynamicCameraFrameProperties);
          for (let r = 0; r < i.length; ++r) {
            let a = h.dot.Int32List.verify(n.dynamicCameraFrameProperties[i[r]]);
            if (a)
              return "dynamicCameraFrameProperties." + a;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof h.dot.v4.AndroidMetadata)
          return n;
        let i = new h.dot.v4.AndroidMetadata();
        if (n.supportedAbis) {
          if (!Array.isArray(n.supportedAbis))
            throw TypeError(".dot.v4.AndroidMetadata.supportedAbis: array expected");
          i.supportedAbis = [];
          for (let r = 0; r < n.supportedAbis.length; ++r)
            i.supportedAbis[r] = String(n.supportedAbis[r]);
        }
        if (n.device != null && (i.device = String(n.device)), n.digests) {
          if (!Array.isArray(n.digests))
            throw TypeError(".dot.v4.AndroidMetadata.digests: array expected");
          i.digests = [];
          for (let r = 0; r < n.digests.length; ++r)
            typeof n.digests[r] == "string" ? W.base64.decode(n.digests[r], i.digests[r] = W.newBuffer(W.base64.length(n.digests[r])), 0) : n.digests[r].length >= 0 && (i.digests[r] = n.digests[r]);
        }
        if (n.digestsWithTimestamp) {
          if (!Array.isArray(n.digestsWithTimestamp))
            throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: array expected");
          i.digestsWithTimestamp = [];
          for (let r = 0; r < n.digestsWithTimestamp.length; ++r) {
            if (typeof n.digestsWithTimestamp[r] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: object expected");
            i.digestsWithTimestamp[r] = h.dot.DigestWithTimestamp.fromObject(n.digestsWithTimestamp[r]);
          }
        }
        if (n.dynamicCameraFrameProperties) {
          if (typeof n.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          i.dynamicCameraFrameProperties = {};
          for (let r = Object.keys(n.dynamicCameraFrameProperties), a = 0; a < r.length; ++a) {
            if (typeof n.dynamicCameraFrameProperties[r[a]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            i.dynamicCameraFrameProperties[r[a]] = h.dot.Int32List.fromObject(n.dynamicCameraFrameProperties[r[a]]);
          }
        }
        return i;
      }, t.toObject = function(n, i) {
        i || (i = {});
        let r = {};
        if ((i.arrays || i.defaults) && (r.supportedAbis = [], r.digests = [], r.digestsWithTimestamp = []), (i.objects || i.defaults) && (r.dynamicCameraFrameProperties = {}), n.supportedAbis && n.supportedAbis.length) {
          r.supportedAbis = [];
          for (let s = 0; s < n.supportedAbis.length; ++s)
            r.supportedAbis[s] = n.supportedAbis[s];
        }
        if (n.device != null && n.hasOwnProperty("device") && (r.device = n.device, i.oneofs && (r._device = "device")), n.digests && n.digests.length) {
          r.digests = [];
          for (let s = 0; s < n.digests.length; ++s)
            r.digests[s] = i.bytes === String ? W.base64.encode(n.digests[s], 0, n.digests[s].length) : i.bytes === Array ? Array.prototype.slice.call(n.digests[s]) : n.digests[s];
        }
        let a;
        if (n.dynamicCameraFrameProperties && (a = Object.keys(n.dynamicCameraFrameProperties)).length) {
          r.dynamicCameraFrameProperties = {};
          for (let s = 0; s < a.length; ++s)
            r.dynamicCameraFrameProperties[a[s]] = h.dot.Int32List.toObject(n.dynamicCameraFrameProperties[a[s]], i);
        }
        if (n.digestsWithTimestamp && n.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let s = 0; s < n.digestsWithTimestamp.length; ++s)
            r.digestsWithTimestamp[s] = h.dot.DigestWithTimestamp.toObject(n.digestsWithTimestamp[s], i);
        }
        return r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.AndroidMetadata";
      }, t;
    }(), o.IosMetadata = function() {
      function t(e) {
        if (this.architectureInfo = {}, this.digests = [], this.digestsWithTimestamp = [], this.isoValues = [], e)
          for (let n = Object.keys(e), i = 0; i < n.length; ++i)
            e[n[i]] != null && (this[n[i]] = e[n[i]]);
      }
      return t.prototype.cameraModelId = "", t.prototype.architectureInfo = W.emptyObject, t.prototype.digests = W.emptyArray, t.prototype.digestsWithTimestamp = W.emptyArray, t.prototype.isoValues = W.emptyArray, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = de.create()), e.cameraModelId != null && Object.hasOwnProperty.call(e, "cameraModelId") && n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(e.cameraModelId), e.architectureInfo != null && Object.hasOwnProperty.call(e, "architectureInfo"))
          for (let i = Object.keys(e.architectureInfo), r = 0; r < i.length; ++r)
            n.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(i[r]).uint32(
              /* id 2, wireType 0 =*/
              16
            ).bool(e.architectureInfo[i[r]]).ldelim();
        if (e.digests != null && e.digests.length)
          for (let i = 0; i < e.digests.length; ++i)
            n.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(e.digests[i]);
        if (e.isoValues != null && e.isoValues.length) {
          n.uint32(
            /* id 4, wireType 2 =*/
            34
          ).fork();
          for (let i = 0; i < e.isoValues.length; ++i)
            n.int32(e.isoValues[i]);
          n.ldelim();
        }
        if (e.digestsWithTimestamp != null && e.digestsWithTimestamp.length)
          for (let i = 0; i < e.digestsWithTimestamp.length; ++i)
            h.dot.DigestWithTimestamp.encode(e.digestsWithTimestamp[i], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let i = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.IosMetadata(), a, s;
        for (; e.pos < i; ) {
          let c = e.uint32();
          switch (c >>> 3) {
            case 1: {
              r.cameraModelId = e.string();
              break;
            }
            case 2: {
              r.architectureInfo === W.emptyObject && (r.architectureInfo = {});
              let d = e.uint32() + e.pos;
              for (a = "", s = !1; e.pos < d; ) {
                let g = e.uint32();
                switch (g >>> 3) {
                  case 1:
                    a = e.string();
                    break;
                  case 2:
                    s = e.bool();
                    break;
                  default:
                    e.skipType(g & 7);
                    break;
                }
              }
              r.architectureInfo[a] = s;
              break;
            }
            case 3: {
              r.digests && r.digests.length || (r.digests = []), r.digests.push(e.bytes());
              break;
            }
            case 5: {
              r.digestsWithTimestamp && r.digestsWithTimestamp.length || (r.digestsWithTimestamp = []), r.digestsWithTimestamp.push(h.dot.DigestWithTimestamp.decode(e, e.uint32()));
              break;
            }
            case 4: {
              if (r.isoValues && r.isoValues.length || (r.isoValues = []), (c & 7) === 2) {
                let d = e.uint32() + e.pos;
                for (; e.pos < d; )
                  r.isoValues.push(e.int32());
              } else
                r.isoValues.push(e.int32());
              break;
            }
            default:
              e.skipType(c & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.cameraModelId != null && e.hasOwnProperty("cameraModelId") && !W.isString(e.cameraModelId))
          return "cameraModelId: string expected";
        if (e.architectureInfo != null && e.hasOwnProperty("architectureInfo")) {
          if (!W.isObject(e.architectureInfo))
            return "architectureInfo: object expected";
          let n = Object.keys(e.architectureInfo);
          for (let i = 0; i < n.length; ++i)
            if (typeof e.architectureInfo[n[i]] != "boolean")
              return "architectureInfo: boolean{k:string} expected";
        }
        if (e.digests != null && e.hasOwnProperty("digests")) {
          if (!Array.isArray(e.digests))
            return "digests: array expected";
          for (let n = 0; n < e.digests.length; ++n)
            if (!(e.digests[n] && typeof e.digests[n].length == "number" || W.isString(e.digests[n])))
              return "digests: buffer[] expected";
        }
        if (e.digestsWithTimestamp != null && e.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(e.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let n = 0; n < e.digestsWithTimestamp.length; ++n) {
            let i = h.dot.DigestWithTimestamp.verify(e.digestsWithTimestamp[n]);
            if (i)
              return "digestsWithTimestamp." + i;
          }
        }
        if (e.isoValues != null && e.hasOwnProperty("isoValues")) {
          if (!Array.isArray(e.isoValues))
            return "isoValues: array expected";
          for (let n = 0; n < e.isoValues.length; ++n)
            if (!W.isInteger(e.isoValues[n]))
              return "isoValues: integer[] expected";
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof h.dot.v4.IosMetadata)
          return e;
        let n = new h.dot.v4.IosMetadata();
        if (e.cameraModelId != null && (n.cameraModelId = String(e.cameraModelId)), e.architectureInfo) {
          if (typeof e.architectureInfo != "object")
            throw TypeError(".dot.v4.IosMetadata.architectureInfo: object expected");
          n.architectureInfo = {};
          for (let i = Object.keys(e.architectureInfo), r = 0; r < i.length; ++r)
            n.architectureInfo[i[r]] = !!e.architectureInfo[i[r]];
        }
        if (e.digests) {
          if (!Array.isArray(e.digests))
            throw TypeError(".dot.v4.IosMetadata.digests: array expected");
          n.digests = [];
          for (let i = 0; i < e.digests.length; ++i)
            typeof e.digests[i] == "string" ? W.base64.decode(e.digests[i], n.digests[i] = W.newBuffer(W.base64.length(e.digests[i])), 0) : e.digests[i].length >= 0 && (n.digests[i] = e.digests[i]);
        }
        if (e.digestsWithTimestamp) {
          if (!Array.isArray(e.digestsWithTimestamp))
            throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: array expected");
          n.digestsWithTimestamp = [];
          for (let i = 0; i < e.digestsWithTimestamp.length; ++i) {
            if (typeof e.digestsWithTimestamp[i] != "object")
              throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: object expected");
            n.digestsWithTimestamp[i] = h.dot.DigestWithTimestamp.fromObject(e.digestsWithTimestamp[i]);
          }
        }
        if (e.isoValues) {
          if (!Array.isArray(e.isoValues))
            throw TypeError(".dot.v4.IosMetadata.isoValues: array expected");
          n.isoValues = [];
          for (let i = 0; i < e.isoValues.length; ++i)
            n.isoValues[i] = e.isoValues[i] | 0;
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let i = {};
        (n.arrays || n.defaults) && (i.digests = [], i.isoValues = [], i.digestsWithTimestamp = []), (n.objects || n.defaults) && (i.architectureInfo = {}), n.defaults && (i.cameraModelId = ""), e.cameraModelId != null && e.hasOwnProperty("cameraModelId") && (i.cameraModelId = e.cameraModelId);
        let r;
        if (e.architectureInfo && (r = Object.keys(e.architectureInfo)).length) {
          i.architectureInfo = {};
          for (let a = 0; a < r.length; ++a)
            i.architectureInfo[r[a]] = e.architectureInfo[r[a]];
        }
        if (e.digests && e.digests.length) {
          i.digests = [];
          for (let a = 0; a < e.digests.length; ++a)
            i.digests[a] = n.bytes === String ? W.base64.encode(e.digests[a], 0, e.digests[a].length) : n.bytes === Array ? Array.prototype.slice.call(e.digests[a]) : e.digests[a];
        }
        if (e.isoValues && e.isoValues.length) {
          i.isoValues = [];
          for (let a = 0; a < e.isoValues.length; ++a)
            i.isoValues[a] = e.isoValues[a];
        }
        if (e.digestsWithTimestamp && e.digestsWithTimestamp.length) {
          i.digestsWithTimestamp = [];
          for (let a = 0; a < e.digestsWithTimestamp.length; ++a)
            i.digestsWithTimestamp[a] = h.dot.DigestWithTimestamp.toObject(e.digestsWithTimestamp[a], n);
        }
        return i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosMetadata";
      }, t;
    }(), o.WebMetadata = function() {
      function t(e) {
        if (this.availableCameraProperties = [], this.hashedDetectedImages = [], this.hashedDetectedImagesWithTimestamp = [], this.detectionRecord = [], e)
          for (let n = Object.keys(e), i = 0; i < n.length; ++i)
            e[n[i]] != null && (this[n[i]] = e[n[i]]);
      }
      return t.prototype.currentCameraProperties = null, t.prototype.availableCameraProperties = W.emptyArray, t.prototype.hashedDetectedImages = W.emptyArray, t.prototype.hashedDetectedImagesWithTimestamp = W.emptyArray, t.prototype.detectionRecord = W.emptyArray, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = de.create()), e.currentCameraProperties != null && Object.hasOwnProperty.call(e, "currentCameraProperties") && h.dot.v4.MediaTrackSettings.encode(e.currentCameraProperties, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.availableCameraProperties != null && e.availableCameraProperties.length)
          for (let i = 0; i < e.availableCameraProperties.length; ++i)
            h.dot.v4.CameraProperties.encode(e.availableCameraProperties[i], n.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim();
        if (e.hashedDetectedImages != null && e.hashedDetectedImages.length)
          for (let i = 0; i < e.hashedDetectedImages.length; ++i)
            n.uint32(
              /* id 3, wireType 2 =*/
              26
            ).string(e.hashedDetectedImages[i]);
        if (e.detectionRecord != null && e.detectionRecord.length)
          for (let i = 0; i < e.detectionRecord.length; ++i)
            h.dot.v4.DetectedObject.encode(e.detectionRecord[i], n.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (e.hashedDetectedImagesWithTimestamp != null && e.hashedDetectedImagesWithTimestamp.length)
          for (let i = 0; i < e.hashedDetectedImagesWithTimestamp.length; ++i)
            h.dot.v4.HashedDetectedImageWithTimestamp.encode(e.hashedDetectedImagesWithTimestamp[i], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let i = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.WebMetadata();
        for (; e.pos < i; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.currentCameraProperties = h.dot.v4.MediaTrackSettings.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.availableCameraProperties && r.availableCameraProperties.length || (r.availableCameraProperties = []), r.availableCameraProperties.push(h.dot.v4.CameraProperties.decode(e, e.uint32()));
              break;
            }
            case 3: {
              r.hashedDetectedImages && r.hashedDetectedImages.length || (r.hashedDetectedImages = []), r.hashedDetectedImages.push(e.string());
              break;
            }
            case 5: {
              r.hashedDetectedImagesWithTimestamp && r.hashedDetectedImagesWithTimestamp.length || (r.hashedDetectedImagesWithTimestamp = []), r.hashedDetectedImagesWithTimestamp.push(h.dot.v4.HashedDetectedImageWithTimestamp.decode(e, e.uint32()));
              break;
            }
            case 4: {
              r.detectionRecord && r.detectionRecord.length || (r.detectionRecord = []), r.detectionRecord.push(h.dot.v4.DetectedObject.decode(e, e.uint32()));
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.currentCameraProperties != null && e.hasOwnProperty("currentCameraProperties")) {
          let n = h.dot.v4.MediaTrackSettings.verify(e.currentCameraProperties);
          if (n)
            return "currentCameraProperties." + n;
        }
        if (e.availableCameraProperties != null && e.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(e.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let n = 0; n < e.availableCameraProperties.length; ++n) {
            let i = h.dot.v4.CameraProperties.verify(e.availableCameraProperties[n]);
            if (i)
              return "availableCameraProperties." + i;
          }
        }
        if (e.hashedDetectedImages != null && e.hasOwnProperty("hashedDetectedImages")) {
          if (!Array.isArray(e.hashedDetectedImages))
            return "hashedDetectedImages: array expected";
          for (let n = 0; n < e.hashedDetectedImages.length; ++n)
            if (!W.isString(e.hashedDetectedImages[n]))
              return "hashedDetectedImages: string[] expected";
        }
        if (e.hashedDetectedImagesWithTimestamp != null && e.hasOwnProperty("hashedDetectedImagesWithTimestamp")) {
          if (!Array.isArray(e.hashedDetectedImagesWithTimestamp))
            return "hashedDetectedImagesWithTimestamp: array expected";
          for (let n = 0; n < e.hashedDetectedImagesWithTimestamp.length; ++n) {
            let i = h.dot.v4.HashedDetectedImageWithTimestamp.verify(e.hashedDetectedImagesWithTimestamp[n]);
            if (i)
              return "hashedDetectedImagesWithTimestamp." + i;
          }
        }
        if (e.detectionRecord != null && e.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(e.detectionRecord))
            return "detectionRecord: array expected";
          for (let n = 0; n < e.detectionRecord.length; ++n) {
            let i = h.dot.v4.DetectedObject.verify(e.detectionRecord[n]);
            if (i)
              return "detectionRecord." + i;
          }
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof h.dot.v4.WebMetadata)
          return e;
        let n = new h.dot.v4.WebMetadata();
        if (e.currentCameraProperties != null) {
          if (typeof e.currentCameraProperties != "object")
            throw TypeError(".dot.v4.WebMetadata.currentCameraProperties: object expected");
          n.currentCameraProperties = h.dot.v4.MediaTrackSettings.fromObject(e.currentCameraProperties);
        }
        if (e.availableCameraProperties) {
          if (!Array.isArray(e.availableCameraProperties))
            throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: array expected");
          n.availableCameraProperties = [];
          for (let i = 0; i < e.availableCameraProperties.length; ++i) {
            if (typeof e.availableCameraProperties[i] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            n.availableCameraProperties[i] = h.dot.v4.CameraProperties.fromObject(e.availableCameraProperties[i]);
          }
        }
        if (e.hashedDetectedImages) {
          if (!Array.isArray(e.hashedDetectedImages))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImages: array expected");
          n.hashedDetectedImages = [];
          for (let i = 0; i < e.hashedDetectedImages.length; ++i)
            n.hashedDetectedImages[i] = String(e.hashedDetectedImages[i]);
        }
        if (e.hashedDetectedImagesWithTimestamp) {
          if (!Array.isArray(e.hashedDetectedImagesWithTimestamp))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: array expected");
          n.hashedDetectedImagesWithTimestamp = [];
          for (let i = 0; i < e.hashedDetectedImagesWithTimestamp.length; ++i) {
            if (typeof e.hashedDetectedImagesWithTimestamp[i] != "object")
              throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: object expected");
            n.hashedDetectedImagesWithTimestamp[i] = h.dot.v4.HashedDetectedImageWithTimestamp.fromObject(e.hashedDetectedImagesWithTimestamp[i]);
          }
        }
        if (e.detectionRecord) {
          if (!Array.isArray(e.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          n.detectionRecord = [];
          for (let i = 0; i < e.detectionRecord.length; ++i) {
            if (typeof e.detectionRecord[i] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            n.detectionRecord[i] = h.dot.v4.DetectedObject.fromObject(e.detectionRecord[i]);
          }
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let i = {};
        if ((n.arrays || n.defaults) && (i.availableCameraProperties = [], i.hashedDetectedImages = [], i.detectionRecord = [], i.hashedDetectedImagesWithTimestamp = []), n.defaults && (i.currentCameraProperties = null), e.currentCameraProperties != null && e.hasOwnProperty("currentCameraProperties") && (i.currentCameraProperties = h.dot.v4.MediaTrackSettings.toObject(e.currentCameraProperties, n)), e.availableCameraProperties && e.availableCameraProperties.length) {
          i.availableCameraProperties = [];
          for (let r = 0; r < e.availableCameraProperties.length; ++r)
            i.availableCameraProperties[r] = h.dot.v4.CameraProperties.toObject(e.availableCameraProperties[r], n);
        }
        if (e.hashedDetectedImages && e.hashedDetectedImages.length) {
          i.hashedDetectedImages = [];
          for (let r = 0; r < e.hashedDetectedImages.length; ++r)
            i.hashedDetectedImages[r] = e.hashedDetectedImages[r];
        }
        if (e.detectionRecord && e.detectionRecord.length) {
          i.detectionRecord = [];
          for (let r = 0; r < e.detectionRecord.length; ++r)
            i.detectionRecord[r] = h.dot.v4.DetectedObject.toObject(e.detectionRecord[r], n);
        }
        if (e.hashedDetectedImagesWithTimestamp && e.hashedDetectedImagesWithTimestamp.length) {
          i.hashedDetectedImagesWithTimestamp = [];
          for (let r = 0; r < e.hashedDetectedImagesWithTimestamp.length; ++r)
            i.hashedDetectedImagesWithTimestamp[r] = h.dot.v4.HashedDetectedImageWithTimestamp.toObject(e.hashedDetectedImagesWithTimestamp[r], n);
        }
        return i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.WebMetadata";
      }, t;
    }(), o.HashedDetectedImageWithTimestamp = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), i = 0; i < n.length; ++i)
            e[n[i]] != null && (this[n[i]] = e[n[i]]);
      }
      return t.prototype.imageHash = "", t.prototype.timestampMillis = W.Long ? W.Long.fromBits(0, 0, !0) : 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = de.create()), e.imageHash != null && Object.hasOwnProperty.call(e, "imageHash") && n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(e.imageHash), e.timestampMillis != null && Object.hasOwnProperty.call(e, "timestampMillis") && n.uint32(
          /* id 2, wireType 0 =*/
          16
        ).uint64(e.timestampMillis), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let i = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.HashedDetectedImageWithTimestamp();
        for (; e.pos < i; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.imageHash = e.string();
              break;
            }
            case 2: {
              r.timestampMillis = e.uint64();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !W.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !W.isInteger(e.timestampMillis) && !(e.timestampMillis && W.isInteger(e.timestampMillis.low) && W.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof h.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let n = new h.dot.v4.HashedDetectedImageWithTimestamp();
        return e.imageHash != null && (n.imageHash = String(e.imageHash)), e.timestampMillis != null && (W.Long ? (n.timestampMillis = W.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? n.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? n.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (n.timestampMillis = new W.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let i = {};
        if (n.defaults)
          if (i.imageHash = "", W.Long) {
            let r = new W.Long(0, 0, !0);
            i.timestampMillis = n.longs === String ? r.toString() : n.longs === Number ? r.toNumber() : r;
          } else
            i.timestampMillis = n.longs === String ? "0" : 0;
        return e.imageHash != null && e.hasOwnProperty("imageHash") && (i.imageHash = e.imageHash), e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? i.timestampMillis = n.longs === String ? String(e.timestampMillis) : e.timestampMillis : i.timestampMillis = n.longs === String ? W.Long.prototype.toString.call(e.timestampMillis) : n.longs === Number ? new W.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.HashedDetectedImageWithTimestamp";
      }, t;
    }(), o.MediaTrackSettings = function() {
      function t(n) {
        if (n)
          for (let i = Object.keys(n), r = 0; r < i.length; ++r)
            n[i[r]] != null && (this[i[r]] = n[i[r]]);
      }
      t.prototype.aspectRatio = null, t.prototype.autoGainControl = null, t.prototype.channelCount = null, t.prototype.deviceId = null, t.prototype.displaySurface = null, t.prototype.echoCancellation = null, t.prototype.facingMode = null, t.prototype.frameRate = null, t.prototype.groupId = null, t.prototype.height = null, t.prototype.noiseSuppression = null, t.prototype.sampleRate = null, t.prototype.sampleSize = null, t.prototype.width = null, t.prototype.deviceName = null;
      let e;
      return Object.defineProperty(t.prototype, "_aspectRatio", {
        get: W.oneOfGetter(e = ["aspectRatio"]),
        set: W.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_autoGainControl", {
        get: W.oneOfGetter(e = ["autoGainControl"]),
        set: W.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_channelCount", {
        get: W.oneOfGetter(e = ["channelCount"]),
        set: W.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceId", {
        get: W.oneOfGetter(e = ["deviceId"]),
        set: W.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_displaySurface", {
        get: W.oneOfGetter(e = ["displaySurface"]),
        set: W.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_echoCancellation", {
        get: W.oneOfGetter(e = ["echoCancellation"]),
        set: W.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_facingMode", {
        get: W.oneOfGetter(e = ["facingMode"]),
        set: W.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_frameRate", {
        get: W.oneOfGetter(e = ["frameRate"]),
        set: W.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_groupId", {
        get: W.oneOfGetter(e = ["groupId"]),
        set: W.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_height", {
        get: W.oneOfGetter(e = ["height"]),
        set: W.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_noiseSuppression", {
        get: W.oneOfGetter(e = ["noiseSuppression"]),
        set: W.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleRate", {
        get: W.oneOfGetter(e = ["sampleRate"]),
        set: W.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleSize", {
        get: W.oneOfGetter(e = ["sampleSize"]),
        set: W.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_width", {
        get: W.oneOfGetter(e = ["width"]),
        set: W.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceName", {
        get: W.oneOfGetter(e = ["deviceName"]),
        set: W.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, i) {
        return i || (i = de.create()), n.aspectRatio != null && Object.hasOwnProperty.call(n, "aspectRatio") && i.uint32(
          /* id 1, wireType 1 =*/
          9
        ).double(n.aspectRatio), n.autoGainControl != null && Object.hasOwnProperty.call(n, "autoGainControl") && i.uint32(
          /* id 2, wireType 0 =*/
          16
        ).bool(n.autoGainControl), n.channelCount != null && Object.hasOwnProperty.call(n, "channelCount") && i.uint32(
          /* id 3, wireType 0 =*/
          24
        ).int32(n.channelCount), n.deviceId != null && Object.hasOwnProperty.call(n, "deviceId") && i.uint32(
          /* id 4, wireType 2 =*/
          34
        ).string(n.deviceId), n.displaySurface != null && Object.hasOwnProperty.call(n, "displaySurface") && i.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(n.displaySurface), n.echoCancellation != null && Object.hasOwnProperty.call(n, "echoCancellation") && i.uint32(
          /* id 6, wireType 0 =*/
          48
        ).bool(n.echoCancellation), n.facingMode != null && Object.hasOwnProperty.call(n, "facingMode") && i.uint32(
          /* id 7, wireType 2 =*/
          58
        ).string(n.facingMode), n.frameRate != null && Object.hasOwnProperty.call(n, "frameRate") && i.uint32(
          /* id 8, wireType 1 =*/
          65
        ).double(n.frameRate), n.groupId != null && Object.hasOwnProperty.call(n, "groupId") && i.uint32(
          /* id 9, wireType 2 =*/
          74
        ).string(n.groupId), n.height != null && Object.hasOwnProperty.call(n, "height") && i.uint32(
          /* id 10, wireType 0 =*/
          80
        ).int32(n.height), n.noiseSuppression != null && Object.hasOwnProperty.call(n, "noiseSuppression") && i.uint32(
          /* id 11, wireType 0 =*/
          88
        ).bool(n.noiseSuppression), n.sampleRate != null && Object.hasOwnProperty.call(n, "sampleRate") && i.uint32(
          /* id 12, wireType 0 =*/
          96
        ).int32(n.sampleRate), n.sampleSize != null && Object.hasOwnProperty.call(n, "sampleSize") && i.uint32(
          /* id 13, wireType 0 =*/
          104
        ).int32(n.sampleSize), n.width != null && Object.hasOwnProperty.call(n, "width") && i.uint32(
          /* id 14, wireType 0 =*/
          112
        ).int32(n.width), n.deviceName != null && Object.hasOwnProperty.call(n, "deviceName") && i.uint32(
          /* id 15, wireType 2 =*/
          122
        ).string(n.deviceName), i;
      }, t.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, t.decode = function(n, i) {
        n instanceof B || (n = B.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new h.dot.v4.MediaTrackSettings();
        for (; n.pos < r; ) {
          let s = n.uint32();
          switch (s >>> 3) {
            case 1: {
              a.aspectRatio = n.double();
              break;
            }
            case 2: {
              a.autoGainControl = n.bool();
              break;
            }
            case 3: {
              a.channelCount = n.int32();
              break;
            }
            case 4: {
              a.deviceId = n.string();
              break;
            }
            case 5: {
              a.displaySurface = n.string();
              break;
            }
            case 6: {
              a.echoCancellation = n.bool();
              break;
            }
            case 7: {
              a.facingMode = n.string();
              break;
            }
            case 8: {
              a.frameRate = n.double();
              break;
            }
            case 9: {
              a.groupId = n.string();
              break;
            }
            case 10: {
              a.height = n.int32();
              break;
            }
            case 11: {
              a.noiseSuppression = n.bool();
              break;
            }
            case 12: {
              a.sampleRate = n.int32();
              break;
            }
            case 13: {
              a.sampleSize = n.int32();
              break;
            }
            case 14: {
              a.width = n.int32();
              break;
            }
            case 15: {
              a.deviceName = n.string();
              break;
            }
            default:
              n.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(n) {
        return n instanceof B || (n = new B(n)), this.decode(n, n.uint32());
      }, t.verify = function(n) {
        return typeof n != "object" || n === null ? "object expected" : n.aspectRatio != null && n.hasOwnProperty("aspectRatio") && typeof n.aspectRatio != "number" ? "aspectRatio: number expected" : n.autoGainControl != null && n.hasOwnProperty("autoGainControl") && typeof n.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : n.channelCount != null && n.hasOwnProperty("channelCount") && !W.isInteger(n.channelCount) ? "channelCount: integer expected" : n.deviceId != null && n.hasOwnProperty("deviceId") && !W.isString(n.deviceId) ? "deviceId: string expected" : n.displaySurface != null && n.hasOwnProperty("displaySurface") && !W.isString(n.displaySurface) ? "displaySurface: string expected" : n.echoCancellation != null && n.hasOwnProperty("echoCancellation") && typeof n.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : n.facingMode != null && n.hasOwnProperty("facingMode") && !W.isString(n.facingMode) ? "facingMode: string expected" : n.frameRate != null && n.hasOwnProperty("frameRate") && typeof n.frameRate != "number" ? "frameRate: number expected" : n.groupId != null && n.hasOwnProperty("groupId") && !W.isString(n.groupId) ? "groupId: string expected" : n.height != null && n.hasOwnProperty("height") && !W.isInteger(n.height) ? "height: integer expected" : n.noiseSuppression != null && n.hasOwnProperty("noiseSuppression") && typeof n.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : n.sampleRate != null && n.hasOwnProperty("sampleRate") && !W.isInteger(n.sampleRate) ? "sampleRate: integer expected" : n.sampleSize != null && n.hasOwnProperty("sampleSize") && !W.isInteger(n.sampleSize) ? "sampleSize: integer expected" : n.width != null && n.hasOwnProperty("width") && !W.isInteger(n.width) ? "width: integer expected" : n.deviceName != null && n.hasOwnProperty("deviceName") && !W.isString(n.deviceName) ? "deviceName: string expected" : null;
      }, t.fromObject = function(n) {
        if (n instanceof h.dot.v4.MediaTrackSettings)
          return n;
        let i = new h.dot.v4.MediaTrackSettings();
        return n.aspectRatio != null && (i.aspectRatio = Number(n.aspectRatio)), n.autoGainControl != null && (i.autoGainControl = !!n.autoGainControl), n.channelCount != null && (i.channelCount = n.channelCount | 0), n.deviceId != null && (i.deviceId = String(n.deviceId)), n.displaySurface != null && (i.displaySurface = String(n.displaySurface)), n.echoCancellation != null && (i.echoCancellation = !!n.echoCancellation), n.facingMode != null && (i.facingMode = String(n.facingMode)), n.frameRate != null && (i.frameRate = Number(n.frameRate)), n.groupId != null && (i.groupId = String(n.groupId)), n.height != null && (i.height = n.height | 0), n.noiseSuppression != null && (i.noiseSuppression = !!n.noiseSuppression), n.sampleRate != null && (i.sampleRate = n.sampleRate | 0), n.sampleSize != null && (i.sampleSize = n.sampleSize | 0), n.width != null && (i.width = n.width | 0), n.deviceName != null && (i.deviceName = String(n.deviceName)), i;
      }, t.toObject = function(n, i) {
        i || (i = {});
        let r = {};
        return n.aspectRatio != null && n.hasOwnProperty("aspectRatio") && (r.aspectRatio = i.json && !isFinite(n.aspectRatio) ? String(n.aspectRatio) : n.aspectRatio, i.oneofs && (r._aspectRatio = "aspectRatio")), n.autoGainControl != null && n.hasOwnProperty("autoGainControl") && (r.autoGainControl = n.autoGainControl, i.oneofs && (r._autoGainControl = "autoGainControl")), n.channelCount != null && n.hasOwnProperty("channelCount") && (r.channelCount = n.channelCount, i.oneofs && (r._channelCount = "channelCount")), n.deviceId != null && n.hasOwnProperty("deviceId") && (r.deviceId = n.deviceId, i.oneofs && (r._deviceId = "deviceId")), n.displaySurface != null && n.hasOwnProperty("displaySurface") && (r.displaySurface = n.displaySurface, i.oneofs && (r._displaySurface = "displaySurface")), n.echoCancellation != null && n.hasOwnProperty("echoCancellation") && (r.echoCancellation = n.echoCancellation, i.oneofs && (r._echoCancellation = "echoCancellation")), n.facingMode != null && n.hasOwnProperty("facingMode") && (r.facingMode = n.facingMode, i.oneofs && (r._facingMode = "facingMode")), n.frameRate != null && n.hasOwnProperty("frameRate") && (r.frameRate = i.json && !isFinite(n.frameRate) ? String(n.frameRate) : n.frameRate, i.oneofs && (r._frameRate = "frameRate")), n.groupId != null && n.hasOwnProperty("groupId") && (r.groupId = n.groupId, i.oneofs && (r._groupId = "groupId")), n.height != null && n.hasOwnProperty("height") && (r.height = n.height, i.oneofs && (r._height = "height")), n.noiseSuppression != null && n.hasOwnProperty("noiseSuppression") && (r.noiseSuppression = n.noiseSuppression, i.oneofs && (r._noiseSuppression = "noiseSuppression")), n.sampleRate != null && n.hasOwnProperty("sampleRate") && (r.sampleRate = n.sampleRate, i.oneofs && (r._sampleRate = "sampleRate")), n.sampleSize != null && n.hasOwnProperty("sampleSize") && (r.sampleSize = n.sampleSize, i.oneofs && (r._sampleSize = "sampleSize")), n.width != null && n.hasOwnProperty("width") && (r.width = n.width, i.oneofs && (r._width = "width")), n.deviceName != null && n.hasOwnProperty("deviceName") && (r.deviceName = n.deviceName, i.oneofs && (r._deviceName = "deviceName")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.MediaTrackSettings";
      }, t;
    }(), o.ImageBitmap = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), i = 0; i < n.length; ++i)
            e[n[i]] != null && (this[n[i]] = e[n[i]]);
      }
      return t.prototype.width = 0, t.prototype.height = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = de.create()), e.width != null && Object.hasOwnProperty.call(e, "width") && n.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.width), e.height != null && Object.hasOwnProperty.call(e, "height") && n.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.height), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let i = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.ImageBitmap();
        for (; e.pos < i; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.width = e.int32();
              break;
            }
            case 2: {
              r.height = e.int32();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !W.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !W.isInteger(e.height) ? "height: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof h.dot.v4.ImageBitmap)
          return e;
        let n = new h.dot.v4.ImageBitmap();
        return e.width != null && (n.width = e.width | 0), e.height != null && (n.height = e.height | 0), n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let i = {};
        return n.defaults && (i.width = 0, i.height = 0), e.width != null && e.hasOwnProperty("width") && (i.width = e.width), e.height != null && e.hasOwnProperty("height") && (i.height = e.height), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.ImageBitmap";
      }, t;
    }(), o.CameraProperties = function() {
      function t(n) {
        if (n)
          for (let i = Object.keys(n), r = 0; r < i.length; ++r)
            n[i[r]] != null && (this[i[r]] = n[i[r]]);
      }
      t.prototype.cameraInitFrameResolution = null, t.prototype.cameraProperties = null;
      let e;
      return Object.defineProperty(t.prototype, "_cameraInitFrameResolution", {
        get: W.oneOfGetter(e = ["cameraInitFrameResolution"]),
        set: W.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, i) {
        return i || (i = de.create()), n.cameraInitFrameResolution != null && Object.hasOwnProperty.call(n, "cameraInitFrameResolution") && h.dot.v4.ImageBitmap.encode(n.cameraInitFrameResolution, i.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.cameraProperties != null && Object.hasOwnProperty.call(n, "cameraProperties") && h.dot.v4.MediaTrackSettings.encode(n.cameraProperties, i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), i;
      }, t.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, t.decode = function(n, i) {
        n instanceof B || (n = B.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new h.dot.v4.CameraProperties();
        for (; n.pos < r; ) {
          let s = n.uint32();
          switch (s >>> 3) {
            case 1: {
              a.cameraInitFrameResolution = h.dot.v4.ImageBitmap.decode(n, n.uint32());
              break;
            }
            case 2: {
              a.cameraProperties = h.dot.v4.MediaTrackSettings.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(n) {
        return n instanceof B || (n = new B(n)), this.decode(n, n.uint32());
      }, t.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        if (n.cameraInitFrameResolution != null && n.hasOwnProperty("cameraInitFrameResolution")) {
          let i = h.dot.v4.ImageBitmap.verify(n.cameraInitFrameResolution);
          if (i)
            return "cameraInitFrameResolution." + i;
        }
        if (n.cameraProperties != null && n.hasOwnProperty("cameraProperties")) {
          let i = h.dot.v4.MediaTrackSettings.verify(n.cameraProperties);
          if (i)
            return "cameraProperties." + i;
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof h.dot.v4.CameraProperties)
          return n;
        let i = new h.dot.v4.CameraProperties();
        if (n.cameraInitFrameResolution != null) {
          if (typeof n.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          i.cameraInitFrameResolution = h.dot.v4.ImageBitmap.fromObject(n.cameraInitFrameResolution);
        }
        if (n.cameraProperties != null) {
          if (typeof n.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          i.cameraProperties = h.dot.v4.MediaTrackSettings.fromObject(n.cameraProperties);
        }
        return i;
      }, t.toObject = function(n, i) {
        i || (i = {});
        let r = {};
        return i.defaults && (r.cameraProperties = null), n.cameraInitFrameResolution != null && n.hasOwnProperty("cameraInitFrameResolution") && (r.cameraInitFrameResolution = h.dot.v4.ImageBitmap.toObject(n.cameraInitFrameResolution, i), i.oneofs && (r._cameraInitFrameResolution = "cameraInitFrameResolution")), n.cameraProperties != null && n.hasOwnProperty("cameraProperties") && (r.cameraProperties = h.dot.v4.MediaTrackSettings.toObject(n.cameraProperties, i)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.CameraProperties";
      }, t;
    }(), o.DetectedObject = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), i = 0; i < n.length; ++i)
            e[n[i]] != null && (this[n[i]] = e[n[i]]);
      }
      return t.prototype.brightness = 0, t.prototype.sharpness = 0, t.prototype.hotspots = 0, t.prototype.confidence = 0, t.prototype.faceSize = 0, t.prototype.faceCenter = null, t.prototype.smallestEdge = 0, t.prototype.bottomLeft = null, t.prototype.bottomRight = null, t.prototype.topLeft = null, t.prototype.topRight = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = de.create()), e.brightness != null && Object.hasOwnProperty.call(e, "brightness") && n.uint32(
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
        ).float(e.faceSize), e.faceCenter != null && Object.hasOwnProperty.call(e, "faceCenter") && h.dot.v4.Point.encode(e.faceCenter, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), e.smallestEdge != null && Object.hasOwnProperty.call(e, "smallestEdge") && n.uint32(
          /* id 7, wireType 5 =*/
          61
        ).float(e.smallestEdge), e.bottomLeft != null && Object.hasOwnProperty.call(e, "bottomLeft") && h.dot.v4.Point.encode(e.bottomLeft, n.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), e.bottomRight != null && Object.hasOwnProperty.call(e, "bottomRight") && h.dot.v4.Point.encode(e.bottomRight, n.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), e.topLeft != null && Object.hasOwnProperty.call(e, "topLeft") && h.dot.v4.Point.encode(e.topLeft, n.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), e.topRight != null && Object.hasOwnProperty.call(e, "topRight") && h.dot.v4.Point.encode(e.topRight, n.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let i = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.DetectedObject();
        for (; e.pos < i; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.brightness = e.float();
              break;
            }
            case 2: {
              r.sharpness = e.float();
              break;
            }
            case 3: {
              r.hotspots = e.float();
              break;
            }
            case 4: {
              r.confidence = e.float();
              break;
            }
            case 5: {
              r.faceSize = e.float();
              break;
            }
            case 6: {
              r.faceCenter = h.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              r.smallestEdge = e.float();
              break;
            }
            case 8: {
              r.bottomLeft = h.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              r.bottomRight = h.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              r.topLeft = h.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              r.topRight = h.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
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
          let n = h.dot.v4.Point.verify(e.faceCenter);
          if (n)
            return "faceCenter." + n;
        }
        if (e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && typeof e.smallestEdge != "number")
          return "smallestEdge: number expected";
        if (e.bottomLeft != null && e.hasOwnProperty("bottomLeft")) {
          let n = h.dot.v4.Point.verify(e.bottomLeft);
          if (n)
            return "bottomLeft." + n;
        }
        if (e.bottomRight != null && e.hasOwnProperty("bottomRight")) {
          let n = h.dot.v4.Point.verify(e.bottomRight);
          if (n)
            return "bottomRight." + n;
        }
        if (e.topLeft != null && e.hasOwnProperty("topLeft")) {
          let n = h.dot.v4.Point.verify(e.topLeft);
          if (n)
            return "topLeft." + n;
        }
        if (e.topRight != null && e.hasOwnProperty("topRight")) {
          let n = h.dot.v4.Point.verify(e.topRight);
          if (n)
            return "topRight." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof h.dot.v4.DetectedObject)
          return e;
        let n = new h.dot.v4.DetectedObject();
        if (e.brightness != null && (n.brightness = Number(e.brightness)), e.sharpness != null && (n.sharpness = Number(e.sharpness)), e.hotspots != null && (n.hotspots = Number(e.hotspots)), e.confidence != null && (n.confidence = Number(e.confidence)), e.faceSize != null && (n.faceSize = Number(e.faceSize)), e.faceCenter != null) {
          if (typeof e.faceCenter != "object")
            throw TypeError(".dot.v4.DetectedObject.faceCenter: object expected");
          n.faceCenter = h.dot.v4.Point.fromObject(e.faceCenter);
        }
        if (e.smallestEdge != null && (n.smallestEdge = Number(e.smallestEdge)), e.bottomLeft != null) {
          if (typeof e.bottomLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomLeft: object expected");
          n.bottomLeft = h.dot.v4.Point.fromObject(e.bottomLeft);
        }
        if (e.bottomRight != null) {
          if (typeof e.bottomRight != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomRight: object expected");
          n.bottomRight = h.dot.v4.Point.fromObject(e.bottomRight);
        }
        if (e.topLeft != null) {
          if (typeof e.topLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.topLeft: object expected");
          n.topLeft = h.dot.v4.Point.fromObject(e.topLeft);
        }
        if (e.topRight != null) {
          if (typeof e.topRight != "object")
            throw TypeError(".dot.v4.DetectedObject.topRight: object expected");
          n.topRight = h.dot.v4.Point.fromObject(e.topRight);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let i = {};
        return n.defaults && (i.brightness = 0, i.sharpness = 0, i.hotspots = 0, i.confidence = 0, i.faceSize = 0, i.faceCenter = null, i.smallestEdge = 0, i.bottomLeft = null, i.bottomRight = null, i.topLeft = null, i.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (i.brightness = n.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (i.sharpness = n.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (i.hotspots = n.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (i.confidence = n.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (i.faceSize = n.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (i.faceCenter = h.dot.v4.Point.toObject(e.faceCenter, n)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (i.smallestEdge = n.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (i.bottomLeft = h.dot.v4.Point.toObject(e.bottomLeft, n)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (i.bottomRight = h.dot.v4.Point.toObject(e.bottomRight, n)), e.topLeft != null && e.hasOwnProperty("topLeft") && (i.topLeft = h.dot.v4.Point.toObject(e.topLeft, n)), e.topRight != null && e.hasOwnProperty("topRight") && (i.topRight = h.dot.v4.Point.toObject(e.topRight, n)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DetectedObject";
      }, t;
    }(), o.Point = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), i = 0; i < n.length; ++i)
            e[n[i]] != null && (this[n[i]] = e[n[i]]);
      }
      return t.prototype.x = 0, t.prototype.y = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = de.create()), e.x != null && Object.hasOwnProperty.call(e, "x") && n.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(e.x), e.y != null && Object.hasOwnProperty.call(e, "y") && n.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(e.y), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let i = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.Point();
        for (; e.pos < i; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.x = e.float();
              break;
            }
            case 2: {
              r.y = e.float();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.x != null && e.hasOwnProperty("x") && typeof e.x != "number" ? "x: number expected" : e.y != null && e.hasOwnProperty("y") && typeof e.y != "number" ? "y: number expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof h.dot.v4.Point)
          return e;
        let n = new h.dot.v4.Point();
        return e.x != null && (n.x = Number(e.x)), e.y != null && (n.y = Number(e.y)), n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let i = {};
        return n.defaults && (i.x = 0, i.y = 0), e.x != null && e.hasOwnProperty("x") && (i.x = n.json && !isFinite(e.x) ? String(e.x) : e.x), e.y != null && e.hasOwnProperty("y") && (i.y = n.json && !isFinite(e.y) ? String(e.y) : e.y), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Point";
      }, t;
    }(), o.FaceContent = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), i = 0; i < n.length; ++i)
            e[n[i]] != null && (this[n[i]] = e[n[i]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = de.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && h.dot.Image.encode(e.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && h.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let i = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.FaceContent();
        for (; e.pos < i; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.image = h.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.metadata = h.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let n = h.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = h.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof h.dot.v4.FaceContent)
          return e;
        let n = new h.dot.v4.FaceContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.FaceContent.image: object expected");
          n.image = h.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.FaceContent.metadata: object expected");
          n.metadata = h.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let i = {};
        return n.defaults && (i.image = null, i.metadata = null), e.image != null && e.hasOwnProperty("image") && (i.image = h.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (i.metadata = h.dot.v4.Metadata.toObject(e.metadata, n)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.FaceContent";
      }, t;
    }(), o.DocumentContent = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), i = 0; i < n.length; ++i)
            e[n[i]] != null && (this[n[i]] = e[n[i]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = de.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && h.dot.Image.encode(e.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && h.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let i = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.DocumentContent();
        for (; e.pos < i; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.image = h.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.metadata = h.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let n = h.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = h.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof h.dot.v4.DocumentContent)
          return e;
        let n = new h.dot.v4.DocumentContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.DocumentContent.image: object expected");
          n.image = h.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.DocumentContent.metadata: object expected");
          n.metadata = h.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let i = {};
        return n.defaults && (i.image = null, i.metadata = null), e.image != null && e.hasOwnProperty("image") && (i.image = h.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (i.metadata = h.dot.v4.Metadata.toObject(e.metadata, n)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DocumentContent";
      }, t;
    }(), o.Blob = function() {
      function t(n) {
        if (n)
          for (let i = Object.keys(n), r = 0; r < i.length; ++r)
            n[i[r]] != null && (this[i[r]] = n[i[r]]);
      }
      t.prototype.documentContent = null, t.prototype.eyeGazeLivenessContent = null, t.prototype.faceContent = null, t.prototype.magnifeyeLivenessContent = null, t.prototype.smileLivenessContent = null, t.prototype.palmContent = null;
      let e;
      return Object.defineProperty(t.prototype, "blob", {
        get: W.oneOfGetter(e = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent", "palmContent"]),
        set: W.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, i) {
        return i || (i = de.create()), n.documentContent != null && Object.hasOwnProperty.call(n, "documentContent") && h.dot.v4.DocumentContent.encode(n.documentContent, i.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.faceContent != null && Object.hasOwnProperty.call(n, "faceContent") && h.dot.v4.FaceContent.encode(n.faceContent, i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(n, "magnifeyeLivenessContent") && h.dot.v4.MagnifEyeLivenessContent.encode(n.magnifeyeLivenessContent, i.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.smileLivenessContent != null && Object.hasOwnProperty.call(n, "smileLivenessContent") && h.dot.v4.SmileLivenessContent.encode(n.smileLivenessContent, i.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), n.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(n, "eyeGazeLivenessContent") && h.dot.v4.EyeGazeLivenessContent.encode(n.eyeGazeLivenessContent, i.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), n.palmContent != null && Object.hasOwnProperty.call(n, "palmContent") && h.dot.v4.PalmContent.encode(n.palmContent, i.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), i;
      }, t.encodeDelimited = function(n, i) {
        return this.encode(n, i).ldelim();
      }, t.decode = function(n, i) {
        n instanceof B || (n = B.create(n));
        let r = i === void 0 ? n.len : n.pos + i, a = new h.dot.v4.Blob();
        for (; n.pos < r; ) {
          let s = n.uint32();
          switch (s >>> 3) {
            case 1: {
              a.documentContent = h.dot.v4.DocumentContent.decode(n, n.uint32());
              break;
            }
            case 5: {
              a.eyeGazeLivenessContent = h.dot.v4.EyeGazeLivenessContent.decode(n, n.uint32());
              break;
            }
            case 2: {
              a.faceContent = h.dot.v4.FaceContent.decode(n, n.uint32());
              break;
            }
            case 3: {
              a.magnifeyeLivenessContent = h.dot.v4.MagnifEyeLivenessContent.decode(n, n.uint32());
              break;
            }
            case 4: {
              a.smileLivenessContent = h.dot.v4.SmileLivenessContent.decode(n, n.uint32());
              break;
            }
            case 6: {
              a.palmContent = h.dot.v4.PalmContent.decode(n, n.uint32());
              break;
            }
            default:
              n.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(n) {
        return n instanceof B || (n = new B(n)), this.decode(n, n.uint32());
      }, t.verify = function(n) {
        if (typeof n != "object" || n === null)
          return "object expected";
        let i = {};
        if (n.documentContent != null && n.hasOwnProperty("documentContent")) {
          i.blob = 1;
          {
            let r = h.dot.v4.DocumentContent.verify(n.documentContent);
            if (r)
              return "documentContent." + r;
          }
        }
        if (n.eyeGazeLivenessContent != null && n.hasOwnProperty("eyeGazeLivenessContent")) {
          if (i.blob === 1)
            return "blob: multiple values";
          i.blob = 1;
          {
            let r = h.dot.v4.EyeGazeLivenessContent.verify(n.eyeGazeLivenessContent);
            if (r)
              return "eyeGazeLivenessContent." + r;
          }
        }
        if (n.faceContent != null && n.hasOwnProperty("faceContent")) {
          if (i.blob === 1)
            return "blob: multiple values";
          i.blob = 1;
          {
            let r = h.dot.v4.FaceContent.verify(n.faceContent);
            if (r)
              return "faceContent." + r;
          }
        }
        if (n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent")) {
          if (i.blob === 1)
            return "blob: multiple values";
          i.blob = 1;
          {
            let r = h.dot.v4.MagnifEyeLivenessContent.verify(n.magnifeyeLivenessContent);
            if (r)
              return "magnifeyeLivenessContent." + r;
          }
        }
        if (n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent")) {
          if (i.blob === 1)
            return "blob: multiple values";
          i.blob = 1;
          {
            let r = h.dot.v4.SmileLivenessContent.verify(n.smileLivenessContent);
            if (r)
              return "smileLivenessContent." + r;
          }
        }
        if (n.palmContent != null && n.hasOwnProperty("palmContent")) {
          if (i.blob === 1)
            return "blob: multiple values";
          i.blob = 1;
          {
            let r = h.dot.v4.PalmContent.verify(n.palmContent);
            if (r)
              return "palmContent." + r;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof h.dot.v4.Blob)
          return n;
        let i = new h.dot.v4.Blob();
        if (n.documentContent != null) {
          if (typeof n.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          i.documentContent = h.dot.v4.DocumentContent.fromObject(n.documentContent);
        }
        if (n.eyeGazeLivenessContent != null) {
          if (typeof n.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          i.eyeGazeLivenessContent = h.dot.v4.EyeGazeLivenessContent.fromObject(n.eyeGazeLivenessContent);
        }
        if (n.faceContent != null) {
          if (typeof n.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          i.faceContent = h.dot.v4.FaceContent.fromObject(n.faceContent);
        }
        if (n.magnifeyeLivenessContent != null) {
          if (typeof n.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          i.magnifeyeLivenessContent = h.dot.v4.MagnifEyeLivenessContent.fromObject(n.magnifeyeLivenessContent);
        }
        if (n.smileLivenessContent != null) {
          if (typeof n.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          i.smileLivenessContent = h.dot.v4.SmileLivenessContent.fromObject(n.smileLivenessContent);
        }
        if (n.palmContent != null) {
          if (typeof n.palmContent != "object")
            throw TypeError(".dot.v4.Blob.palmContent: object expected");
          i.palmContent = h.dot.v4.PalmContent.fromObject(n.palmContent);
        }
        return i;
      }, t.toObject = function(n, i) {
        i || (i = {});
        let r = {};
        return n.documentContent != null && n.hasOwnProperty("documentContent") && (r.documentContent = h.dot.v4.DocumentContent.toObject(n.documentContent, i), i.oneofs && (r.blob = "documentContent")), n.faceContent != null && n.hasOwnProperty("faceContent") && (r.faceContent = h.dot.v4.FaceContent.toObject(n.faceContent, i), i.oneofs && (r.blob = "faceContent")), n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent") && (r.magnifeyeLivenessContent = h.dot.v4.MagnifEyeLivenessContent.toObject(n.magnifeyeLivenessContent, i), i.oneofs && (r.blob = "magnifeyeLivenessContent")), n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent") && (r.smileLivenessContent = h.dot.v4.SmileLivenessContent.toObject(n.smileLivenessContent, i), i.oneofs && (r.blob = "smileLivenessContent")), n.eyeGazeLivenessContent != null && n.hasOwnProperty("eyeGazeLivenessContent") && (r.eyeGazeLivenessContent = h.dot.v4.EyeGazeLivenessContent.toObject(n.eyeGazeLivenessContent, i), i.oneofs && (r.blob = "eyeGazeLivenessContent")), n.palmContent != null && n.hasOwnProperty("palmContent") && (r.palmContent = h.dot.v4.PalmContent.toObject(n.palmContent, i), i.oneofs && (r.blob = "palmContent")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.Blob";
      }, t;
    }(), o.EyeGazeLivenessContent = function() {
      function t(e) {
        if (this.segments = [], e)
          for (let n = Object.keys(e), i = 0; i < n.length; ++i)
            e[n[i]] != null && (this[n[i]] = e[n[i]]);
      }
      return t.prototype.segments = W.emptyArray, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = de.create()), e.segments != null && e.segments.length)
          for (let i = 0; i < e.segments.length; ++i)
            h.dot.v4.EyeGazeLivenessSegment.encode(e.segments[i], n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && h.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let i = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.EyeGazeLivenessContent();
        for (; e.pos < i; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.segments && r.segments.length || (r.segments = []), r.segments.push(h.dot.v4.EyeGazeLivenessSegment.decode(e, e.uint32()));
              break;
            }
            case 2: {
              r.metadata = h.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.segments != null && e.hasOwnProperty("segments")) {
          if (!Array.isArray(e.segments))
            return "segments: array expected";
          for (let n = 0; n < e.segments.length; ++n) {
            let i = h.dot.v4.EyeGazeLivenessSegment.verify(e.segments[n]);
            if (i)
              return "segments." + i;
          }
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = h.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof h.dot.v4.EyeGazeLivenessContent)
          return e;
        let n = new h.dot.v4.EyeGazeLivenessContent();
        if (e.segments) {
          if (!Array.isArray(e.segments))
            throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: array expected");
          n.segments = [];
          for (let i = 0; i < e.segments.length; ++i) {
            if (typeof e.segments[i] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            n.segments[i] = h.dot.v4.EyeGazeLivenessSegment.fromObject(e.segments[i]);
          }
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.metadata: object expected");
          n.metadata = h.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let i = {};
        if ((n.arrays || n.defaults) && (i.segments = []), n.defaults && (i.metadata = null), e.segments && e.segments.length) {
          i.segments = [];
          for (let r = 0; r < e.segments.length; ++r)
            i.segments[r] = h.dot.v4.EyeGazeLivenessSegment.toObject(e.segments[r], n);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (i.metadata = h.dot.v4.Metadata.toObject(e.metadata, n)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.EyeGazeLivenessContent";
      }, t;
    }(), o.EyeGazeLivenessSegment = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), i = 0; i < n.length; ++i)
            e[n[i]] != null && (this[n[i]] = e[n[i]]);
      }
      return t.prototype.corner = 0, t.prototype.image = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = de.create()), e.corner != null && Object.hasOwnProperty.call(e, "corner") && n.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && h.dot.Image.encode(e.image, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let i = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.EyeGazeLivenessSegment();
        for (; e.pos < i; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.corner = e.int32();
              break;
            }
            case 2: {
              r.image = h.dot.Image.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
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
          let n = h.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof h.dot.v4.EyeGazeLivenessSegment)
          return e;
        let n = new h.dot.v4.EyeGazeLivenessSegment();
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
          n.image = h.dot.Image.fromObject(e.image);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let i = {};
        return n.defaults && (i.corner = n.enums === String ? "TOP_LEFT" : 0, i.image = null), e.corner != null && e.hasOwnProperty("corner") && (i.corner = n.enums === String ? h.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : h.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (i.image = h.dot.Image.toObject(e.image, n)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.EyeGazeLivenessSegment";
      }, t;
    }(), o.EyeGazeLivenessCorner = function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "TOP_LEFT"] = 0, e[t[1] = "TOP_RIGHT"] = 1, e[t[2] = "BOTTOM_RIGHT"] = 2, e[t[3] = "BOTTOM_LEFT"] = 3, e;
    }(), o.SmileLivenessContent = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), i = 0; i < n.length; ++i)
            e[n[i]] != null && (this[n[i]] = e[n[i]]);
      }
      return t.prototype.neutralExpressionFaceImage = null, t.prototype.smileExpressionFaceImage = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = de.create()), e.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(e, "neutralExpressionFaceImage") && h.dot.Image.encode(e.neutralExpressionFaceImage, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.smileExpressionFaceImage != null && Object.hasOwnProperty.call(e, "smileExpressionFaceImage") && h.dot.Image.encode(e.smileExpressionFaceImage, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && h.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let i = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.SmileLivenessContent();
        for (; e.pos < i; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.neutralExpressionFaceImage = h.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.smileExpressionFaceImage = h.dot.Image.decode(e, e.uint32());
              break;
            }
            case 3: {
              r.metadata = h.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage")) {
          let n = h.dot.Image.verify(e.neutralExpressionFaceImage);
          if (n)
            return "neutralExpressionFaceImage." + n;
        }
        if (e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage")) {
          let n = h.dot.Image.verify(e.smileExpressionFaceImage);
          if (n)
            return "smileExpressionFaceImage." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = h.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof h.dot.v4.SmileLivenessContent)
          return e;
        let n = new h.dot.v4.SmileLivenessContent();
        if (e.neutralExpressionFaceImage != null) {
          if (typeof e.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          n.neutralExpressionFaceImage = h.dot.Image.fromObject(e.neutralExpressionFaceImage);
        }
        if (e.smileExpressionFaceImage != null) {
          if (typeof e.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.smileExpressionFaceImage: object expected");
          n.smileExpressionFaceImage = h.dot.Image.fromObject(e.smileExpressionFaceImage);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.metadata: object expected");
          n.metadata = h.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let i = {};
        return n.defaults && (i.neutralExpressionFaceImage = null, i.smileExpressionFaceImage = null, i.metadata = null), e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage") && (i.neutralExpressionFaceImage = h.dot.Image.toObject(e.neutralExpressionFaceImage, n)), e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage") && (i.smileExpressionFaceImage = h.dot.Image.toObject(e.smileExpressionFaceImage, n)), e.metadata != null && e.hasOwnProperty("metadata") && (i.metadata = h.dot.v4.Metadata.toObject(e.metadata, n)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.SmileLivenessContent";
      }, t;
    }(), o.PalmContent = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), i = 0; i < n.length; ++i)
            e[n[i]] != null && (this[n[i]] = e[n[i]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = de.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && h.dot.Image.encode(e.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && h.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let i = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.PalmContent();
        for (; e.pos < i; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.image = h.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.metadata = h.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let n = h.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = h.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof h.dot.v4.PalmContent)
          return e;
        let n = new h.dot.v4.PalmContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.PalmContent.image: object expected");
          n.image = h.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.PalmContent.metadata: object expected");
          n.metadata = h.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let i = {};
        return n.defaults && (i.image = null, i.metadata = null), e.image != null && e.hasOwnProperty("image") && (i.image = h.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (i.metadata = h.dot.v4.Metadata.toObject(e.metadata, n)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, te.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.PalmContent";
      }, t;
    }(), o;
  }(), x.Image = function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), n = 0; n < e.length; ++n)
          t[e[n]] != null && (this[e[n]] = t[e[n]]);
    }
    return o.prototype.bytes = W.newBuffer([]), o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = de.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e) {
      t instanceof B || (t = B.create(t));
      let n = e === void 0 ? t.len : t.pos + e, i = new h.dot.Image();
      for (; t.pos < n; ) {
        let r = t.uint32();
        switch (r >>> 3) {
          case 1: {
            i.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(r & 7);
            break;
        }
      }
      return i;
    }, o.decodeDelimited = function(t) {
      return t instanceof B || (t = new B(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || W.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof h.dot.Image)
        return t;
      let e = new h.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? W.base64.decode(t.bytes, e.bytes = W.newBuffer(W.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      return e.defaults && (e.bytes === String ? n.bytes = "" : (n.bytes = [], e.bytes !== Array && (n.bytes = W.newBuffer(n.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (n.bytes = e.bytes === String ? W.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), n;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, te.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Image";
    }, o;
  }(), x.Int32List = function() {
    function o(t) {
      if (this.items = [], t)
        for (let e = Object.keys(t), n = 0; n < e.length; ++n)
          t[e[n]] != null && (this[e[n]] = t[e[n]]);
    }
    return o.prototype.items = W.emptyArray, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      if (e || (e = de.create()), t.items != null && t.items.length) {
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
      t instanceof B || (t = B.create(t));
      let n = e === void 0 ? t.len : t.pos + e, i = new h.dot.Int32List();
      for (; t.pos < n; ) {
        let r = t.uint32();
        switch (r >>> 3) {
          case 1: {
            if (i.items && i.items.length || (i.items = []), (r & 7) === 2) {
              let a = t.uint32() + t.pos;
              for (; t.pos < a; )
                i.items.push(t.int32());
            } else
              i.items.push(t.int32());
            break;
          }
          default:
            t.skipType(r & 7);
            break;
        }
      }
      return i;
    }, o.decodeDelimited = function(t) {
      return t instanceof B || (t = new B(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      if (typeof t != "object" || t === null)
        return "object expected";
      if (t.items != null && t.hasOwnProperty("items")) {
        if (!Array.isArray(t.items))
          return "items: array expected";
        for (let e = 0; e < t.items.length; ++e)
          if (!W.isInteger(t.items[e]))
            return "items: integer[] expected";
      }
      return null;
    }, o.fromObject = function(t) {
      if (t instanceof h.dot.Int32List)
        return t;
      let e = new h.dot.Int32List();
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
        for (let i = 0; i < t.items.length; ++i)
          n.items[i] = t.items[i];
      }
      return n;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, te.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Int32List";
    }, o;
  }(), x.Platform = function() {
    const o = {}, t = Object.create(o);
    return t[o[0] = "WEB"] = 0, t[o[1] = "ANDROID"] = 1, t[o[2] = "IOS"] = 2, t;
  }(), x.DigestWithTimestamp = function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), n = 0; n < e.length; ++n)
          t[e[n]] != null && (this[e[n]] = t[e[n]]);
    }
    return o.prototype.digest = W.newBuffer([]), o.prototype.timestampMillis = W.Long ? W.Long.fromBits(0, 0, !0) : 0, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = de.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.digest), t.timestampMillis != null && Object.hasOwnProperty.call(t, "timestampMillis") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).uint64(t.timestampMillis), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e) {
      t instanceof B || (t = B.create(t));
      let n = e === void 0 ? t.len : t.pos + e, i = new h.dot.DigestWithTimestamp();
      for (; t.pos < n; ) {
        let r = t.uint32();
        switch (r >>> 3) {
          case 1: {
            i.digest = t.bytes();
            break;
          }
          case 2: {
            i.timestampMillis = t.uint64();
            break;
          }
          default:
            t.skipType(r & 7);
            break;
        }
      }
      return i;
    }, o.decodeDelimited = function(t) {
      return t instanceof B || (t = new B(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || W.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !W.isInteger(t.timestampMillis) && !(t.timestampMillis && W.isInteger(t.timestampMillis.low) && W.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof h.dot.DigestWithTimestamp)
        return t;
      let e = new h.dot.DigestWithTimestamp();
      return t.digest != null && (typeof t.digest == "string" ? W.base64.decode(t.digest, e.digest = W.newBuffer(W.base64.length(t.digest)), 0) : t.digest.length >= 0 && (e.digest = t.digest)), t.timestampMillis != null && (W.Long ? (e.timestampMillis = W.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new W.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      if (e.defaults)
        if (e.bytes === String ? n.digest = "" : (n.digest = [], e.bytes !== Array && (n.digest = W.newBuffer(n.digest))), W.Long) {
          let i = new W.Long(0, 0, !0);
          n.timestampMillis = e.longs === String ? i.toString() : e.longs === Number ? i.toNumber() : i;
        } else
          n.timestampMillis = e.longs === String ? "0" : 0;
      return t.digest != null && t.hasOwnProperty("digest") && (n.digest = e.bytes === String ? W.base64.encode(t.digest, 0, t.digest.length) : e.bytes === Array ? Array.prototype.slice.call(t.digest) : t.digest), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? n.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : n.timestampMillis = e.longs === String ? W.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new W.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), n;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, te.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, o;
  }(), x;
})();
(function(x, o) {
  function t(s, c, d, g, C) {
    return ue(d - -965, c);
  }
  function e(s, c, d, g, C) {
    return ue(c - -50, d);
  }
  const n = x();
  function i(s, c, d, g, C) {
    return ue(s - -786, c);
  }
  function r(s, c, d, g, C) {
    return ue(C - -676, g);
  }
  function a(s, c, d, g, C) {
    return ue(d - -430, C);
  }
  for (; ; )
    try {
      if (parseInt(t(-806, "E)1!", -793, -769, -805)) / 1 * (parseInt(i(-602, "*0Bi", -591, -621, -613)) / 2) + -parseInt(a(-273, -253, -278, -277, "5^7A")) / 3 * (parseInt(t(-843, "eVxS", -818, -843, -799)) / 4) + -parseInt(i(-633, "oJtX", -627, -649, -636)) / 5 * (-parseInt(t(-794, "^]Zz", -810, -807, -825)) / 6) + -parseInt(r(-518, -520, -559, "YW6e", -538)) / 7 + -parseInt(e(124, 114, "5$T(", 130, 103)) / 8 + parseInt(e(97, 120, "5$T(", 112, 128)) / 9 * (parseInt(r(-486, -500, -491, "aT97", -494)) / 10) + parseInt(r(-549, -550, -544, "*0Bi", -536)) / 11 * (parseInt(r(-491, -511, -490, "xwFq", -491)) / 12) === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Tx, -23 * -54049 + 1035549 + 17 * -89626);
function Tx() {
  const x = ["js5KfaxcOmk5CW", "W6moW7zypSk9W6C", "smkNv8oNWPy", "W5ldTGvCya", "EMtcUbhcPSoqdwVdVq", "kctdUbNcMW", "WRRcLmksW7CEW4ZcQwpcQ8oOCmoOqq", "WOBdSCoxExRcJKjMW7a", "rKZdS8ogkW", "aJrdW5ldJ8o8WOZdNCoax8ob", "WRhdO8kjWQm9", "F2ZdHqZcO8ofaMC", "bxi+WRFcKmo2WOS", "wX8hqHy", "h8oHf8kJW5tcGuldR8kiW6v7WPz5", "x2yBWOi", "hmozWQj9WP0", "WQtdMG1L", "qCoNeuNcTq3dJfDvbSobWPtcKa", "WPtdPXbTW4y", "W7hcM1C9WQZdI3vyWP/cMSko", "WPBdRb16W40", "ySoBuwO", "tSk7tCoLWPS", "tCoKheRcSaNdI0LNgSo8WPhcOW", "WPyYWPS", "cLWzwsbqWQ1l", "zgPHcYS", "faZcVSkcBNywbdqfvb8W", "W6rnW7fFkmktW5Tn", "iNvEe8o0", "ySknW4JcHhHtW446osrrW6RdTq", "WOldOSoiifNdGX3cKf8Uwa", "WOxdJSkmnCoz", "q2yb", "WORdHSkwpCo8", "eeG9WO3dICkiW5qF", "W7OKWPpcLv4", "W4BcUuqUWOTLsmkVr0q9", "W5xdMmkpW4ldVLVcVCk1", "WQpdNaDdW7e", "yrtdLbHDW7etp8kKf1NcICoT", "DCoNWPq6l8kQgSoIvJDOWQmk", "WResW5jK", "W4lcUeyOWOKQl8kFx0qwFSo8", "BmkHbCo9WO4", "nmkobd3dTKJdS8k/W5hcTSocWP8p", "WROYzq", "WR86W6zyyW", "W4xcGSkczW"];
  return Tx = function() {
    return x;
  }, Tx();
}
function ue(x, o) {
  const t = Tx();
  return ue = function(e, n) {
    e = e - 137;
    let i = t[e];
    if (ue.xQCxwn === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = C.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          p += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let u = [], p = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (let v = 0; v < g.length; v++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      ue.aAleFc = d, x = arguments, ue.xQCxwn = !0;
    }
    const a = t[7810 * 1 + 2707 * -2 + -2396], s = e + a, c = x[s];
    return c ? i = c : (ue.bxjMXT === void 0 && (ue.bxjMXT = !0), i = ue.aAleFc(i, n), x[s] = i), i;
  }, ue(x, o);
}
async function L1() {
  const x = {};
  x[s(999, "xhW(", 1020, 997, 1002)] = xc, x[i(951, "Udtx", 955) + "h"] = 256;
  const o = await window[i(934, "YFAy", 921) + "o"][i(935, "6&8O", 913) + "e"][n(-276, -294, -270, "*0Bi", -278) + s(1010, "gwPp", 1001, 1040, 1020) + "y"](x, !0, [i(939, "*0Bi", 937) + "pt", r(-797, -807, -772, "#Y@(", -786) + "pt"]), t = Uint8Array[s(981, "gwPp", 976, 989, 997)](Array(-35 + 3 * 17)[i(903, "eVxS", 911)](-3188 * 3 + -26 * -206 + -4208 * -1)), e = window[i(936, "JwBg", 926) + "o"][n(-301, -260, -269, "QrHr", -283) + i(976, ")Dec", 953) + n(-261, -259, -251, ")Dec", -266)](t);
  function n(c, d, g, C, u) {
    return ue(u - -445, C);
  }
  function i(c, d, g, C, u) {
    return ue(g - 772, d);
  }
  function r(c, d, g, C, u) {
    return ue(u - -962, C);
  }
  const a = {};
  a[s(1016, "NLYb", 989, 984, 1005)] = o, a.iv = e;
  function s(c, d, g, C, u) {
    return ue(u - 834, d);
  }
  return a;
}
async function D1(x) {
  function o(C, u, p, b, A) {
    return ue(A - -127, u);
  }
  function t(C, u, p, b, A) {
    return ue(A - 122, b);
  }
  const { iv: e, key: n } = await L1(), i = {};
  i[o(9, "^]Zz", 51, 34, 34)] = xc;
  function r(C, u, p, b, A) {
    return ue(A - -910, u);
  }
  i.iv = e;
  const a = await window[t(258, 278, 280, "uo9b", 270) + "o"][o(46, "F83%", 45, 27, 29) + "e"][g("uo9b", -475, -500, -477, -489) + "pt"](i, n, x);
  function s(C, u, p, b, A) {
    return ue(A - 626, C);
  }
  const c = await window[s("E)1!", 774, 760, 781, 785) + "o"][s("pFpp", 796, 789, 777, 799) + "e"][g("B2hW", -482, -528, -483, -507) + s("oJtX", 778, 750, 788, 771)](r(-749, "^]Zz", -709, -716, -730), n), d = {};
  d[s("kR0X", 747, 774, 780, 770) + "ge"] = a;
  function g(C, u, p, b, A) {
    return ue(A - -658, C);
  }
  return d[o(5, "0]tH", 10, 9, 16)] = c, d.iv = e, d;
}
function Ex() {
  const x = ["owJdJmoYW5zbfxxdICkRW5FcLbu", "wxZcJrWQ", "W4JdPW5UWQJdLCocW5i", "vSoyW6rYwCkeomohWP3cR8koaXq", "ludcOmk9FYxdTau", "WPNcUConW5u/fSk3W73cRvXaja", "WQtdJZToWPG", "W67dVmoVWOe+y8oRjW", "WRzAWPRdU8okW43cJSo/W77dR2XM", "oG/cPCkwWQirDMpdJa", "Ewj8utrCrKS", "ohVdHYnYWOFcImkoWQy", "W54fxCorCW", "W6/dVSkiW6fXf8k1hIRcMSoFW4BdMa", "q8kRgCoFwq", "d0hdKYxdU8kawqDVWPlcKq", "WRilW5yBsSosDqmEW7WO", "WOhcLeFdGSkjWP0vW5BcT8oJW5BdVa", "W7JdLJO0WOvmimkpWQy", "dmkstYBdSvfFdmodW6XJwCk+", "W4VdGrVcGmoA", "p8koW4PeWPS3W78/BW", "WPJcULzCbG", "WR3dT0lcUmoJj8outSoob8kfW7iO", "WP/cOXfc", "FMaBm3aRh07cGCowW7mPW5O", "WRepWPz9gCobEZ0", "WQHmtSoYWRZcMIm", "WQGWlCkNhSkcpCofrSoIya", "b8oucCk3WO3cINNcLG", "jbNcS8kiCGNdUa", "WPNdGCoBWOTE", "W7/cL2ilW6VcPmo6g8kCWPlcUmk9"];
  return Ex = function() {
    return x;
  }, Ex();
}
(function(x, o) {
  function t(a, s, c, d, g) {
    return Ve(a - 721, s);
  }
  function e(a, s, c, d, g) {
    return Ve(d - 965, s);
  }
  function n(a, s, c, d, g) {
    return Ve(a - -351, g);
  }
  const i = x();
  function r(a, s, c, d, g) {
    return Ve(s - 987, a);
  }
  for (; ; )
    try {
      if (-parseInt(r("aa!9", 1373, 1358, 1363, 1389)) / 1 * (-parseInt(r("YOgq", 1394, 1401, 1399, 1406)) / 2) + -parseInt(e(1359, "YRl&", 1360, 1359, 1350)) / 3 * (parseInt(e(1337, "E)c[", 1337, 1353, 1368)) / 4) + -parseInt(n(49, 47, 52, 52, "2wWh")) / 5 * (-parseInt(n(36, 35, 37, 27, "D*qR")) / 6) + parseInt(r("aa!9", 1379, 1370, 1387, 1370)) / 7 * (-parseInt(e(1389, "^tb4", 1387, 1374, 1363)) / 8) + parseInt(n(61, 54, 66, 55, "OGDd")) / 9 + parseInt(e(1369, "fUJ^", 1391, 1379, 1392)) / 10 * (parseInt(n(60, 76, 77, 73, "7d#9")) / 11) + -parseInt(e(1376, "wW#d", 1357, 1363, 1363)) / 12 * (parseInt(t(1137, "^tb4", 1150, 1129, 1148)) / 13) === o) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Ex, 532402 + 5 * -60823 + -86914 * -1);
function Ve(x, o) {
  const t = Ex();
  return Ve = function(e, n) {
    e = e - (7213 + -3414 * 2);
    let i = t[e];
    if (Ve.QaSmgk === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = C.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          p += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let u = [], p = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (let v = 0; v < g.length; v++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      Ve.IRsyMI = d, x = arguments, Ve.QaSmgk = !0;
    }
    const a = t[-37 * -2 + 173 * -51 + 8749], s = e + a, c = x[s];
    return c ? i = c : (Ve.fPUldu === void 0 && (Ve.fPUldu = !0), i = Ve.IRsyMI(i, n), x[s] = i), i;
  }, Ve(x, o);
}
function N1(x) {
  function o(r, a, s, c, d) {
    return Ve(r - -255, a);
  }
  function t(r, a, s, c, d) {
    return Ve(s - 374, d);
  }
  const e = new ArrayBuffer(x[t(773, 794, 784, 798, "Vq11") + "h"]), n = new Uint8Array(e);
  function i(r, a, s, c, d) {
    return Ve(d - 281, c);
  }
  for (let r = -104 * -13 + -19 * -447 + 1969 * -5, a = x[o(136, "vdp2") + "h"]; r < a; r++)
    n[r] = x[o(130, "7d#9") + i(701, 697, 709, "7Sko", 694)](r);
  return e;
}
function Ie(x, o) {
  const t = Lx();
  return Ie = function(e, n) {
    e = e - (-439 * 18 + -1287 + -241 * -39);
    let i = t[e];
    if (Ie.Mpsyul === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = C.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          p += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let u = [], p = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (let v = 0; v < g.length; v++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      Ie.rzzivE = d, x = arguments, Ie.Mpsyul = !0;
    }
    const a = t[-8306 + -1241 * -3 + 1 * 4583], s = e + a, c = x[s];
    return c ? i = c : (Ie.qVhRFk === void 0 && (Ie.qVhRFk = !0), i = Ie.rzzivE(i, n), x[s] = i), i;
  }, Ie(x, o);
}
(function(x, o) {
  function t(s, c, d, g, C) {
    return Ie(s - -532, c);
  }
  function e(s, c, d, g, C) {
    return Ie(g - -717, d);
  }
  function n(s, c, d, g, C) {
    return Ie(d - 810, C);
  }
  function i(s, c, d, g, C) {
    return Ie(C - 731, d);
  }
  const r = x();
  function a(s, c, d, g, C) {
    return Ie(c - -902, s);
  }
  for (; ; )
    try {
      if (parseInt(a("BgPX", -552, -655, -528, -462)) / 1 + -parseInt(a("Lcjg", -594, -499, -550, -531)) / 2 * (-parseInt(i(1107, 1201, "6%6U", 1109, 1096)) / 3) + -parseInt(i(1176, 1162, "D3hR", 1107, 1163)) / 4 * (parseInt(n(1263, 1263, 1164, 1075, "E7Xw")) / 5) + parseInt(e(-381, -461, "2LcM", -468, -374)) / 6 + parseInt(n(1294, 1252, 1236, 1326, "cgT5")) / 7 * (parseInt(t(-114, "RGy$", -124, -25, -77)) / 8) + parseInt(i(1165, 1107, "RGy$", 1142, 1150)) / 9 * (parseInt(a("xB(%", -668, -641, -731, -681)) / 10) + -parseInt(i(1129, 1196, "0YRL", 1209, 1124)) / 11 === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Lx, 1453478 + 4178 * -325 + 738265);
function Y1() {
  const x = c(209, 259, ")&Ru", 153) + t(724, 800, 687, 699, "RGy$") + t(663, 683, 726, 832, "IJ3O") + i(1010, "6b4c") + c(134, 118, "E7Xw", 156) + i(976, "xlVD") + c(241, 214, "X8aX", 244) + i(1019, "#2x1") + c(182, 98, "p%nT", 212) + n(572, 538, 570, "p%nT") + n(585, 391, 473, "EyH&") + i(1023, "xB(%") + t(637, 842, 736, 834, "p%nT") + i(1148, "X8aX") + t(745, 658, 663, 674, "0YRL") + i(1116, "EL[&") + i(1035, "cgT5") + n(420, 473, 510, "p7d*") + t(639, 690, 613, 507, "#2x1") + c(304, 192, "hFDz", 223) + n(515, 617, 561, "FVjZ") + n(640, 556, 587, "9D3b") + c(181, 321, "0YRL", 240) + r(224, "4hDt", 172, 280, 218) + n(338, 528, 419, "HRax") + n(489, 633, 571, "gjua") + t(698, 685, 625, 675, "#2x1") + t(674, 514, 621, 697, "uxyc") + c(122, 232, "UQ(9", 239) + t(495, 524, 571, 497, "cgT5") + n(498, 377, 462, "sEZB") + c(233, 166, "xlVD", 255) + t(611, 535, 618, 704, "#7NP") + i(1136, "#Bnu") + n(328, 532, 442, "$YJ(") + c(178, 29, "sEZB", 116) + c(250, 204, "xB(%", 286) + i(991, "xB(%") + n(525, 588, 511, "gjua") + n(585, 437, 529, "fLww") + c(201, 127, "#2x1", 205) + r(174, "#Bnu", 213, 236, 274) + i(1022, "0YRL") + c(158, 254, "cgT5", 207) + i(1097, "FVjZ") + r(160, "uxyc", 257, 277, 160) + i(1038, "sEZB") + r(38, "2LcM", -16, -36, 80) + t(574, 511, 608, 575, "m[k3") + t(699, 833, 766, 799, "EyH&") + c(158, 223, "oIyU", 149) + i(1056, ")DT!") + n(705, 645, 610, "!dxH") + n(562, 535, 502, "RGy$") + c(236, 141, "gjua", 147) + c(135, 215, "6%6U", 132) + n(619, 463, 580, "X8aX") + n(548, 551, 451, "]XY2") + t(767, 575, 667, 736, "gjua") + n(453, 460, 487, "DLqW") + t(509, 610, 558, 646, "uxyc") + t(526, 620, 548, 477, ")DT!") + c(279, 418, "I^Wn", 337) + r(124, "p7d*", 224, 244, 181) + r(62, "oIyU", 41, 40, 84) + r(343, "fLww", 314, 236, 242) + t(458, 481, 539, 486, "dw@&") + i(1073, "sEZB") + t(587, 760, 686, 633, "p7d*") + t(729, 643, 684, 703, "hFDz") + i(935, "uxyc") + r(63, "EyH&", 144, 203, 108) + r(85, "D3hR", 186, 153, 195) + n(577, 479, 582, "RGy$") + t(613, 652, 705, 797, "X8aX") + r(195, "gjua", 202, 353, 265) + t(723, 535, 640, 689, "EL[&") + n(631, 670, 562, ")&Ru") + n(586, 655, 596, "DLqW") + c(159, 146, "I^Wn", 249) + n(695, 485, 588, "cgT5") + c(114, 246, "uxyc", 185) + t(642, 651, 645, 574, "xmca") + c(372, 302, "cgT5", 295) + i(1143, "Lcjg") + i(1086, "D3hR") + n(369, 350, 421, "xB(%") + i(1017, "UQ(9") + c(305, 382, "p7d*", 320) + c(165, 143, "xlVD", 218) + n(517, 508, 620, "oIyU") + t(667, 789, 696, 801, "xB(%") + i(1082, "&*e7") + t(506, 610, 602, 614, "fLww") + i(1026, "fLww") + i(1126, "2LcM") + i(995, "gjua") + i(934, "6%6U") + n(454, 419, 526, "&*e7") + t(708, 605, 692, 629, "dw@&") + t(547, 674, 606, 553, "xmca") + i(980, "p%nT") + c(221, 338, "6%6U", 250) + n(504, 721, 606, "cgT5") + r(14, "m[k3", -48, 159, 46) + n(666, 578, 601, "FSs^") + r(92, "xB(%", 179, 45, 145) + r(169, "KR8]", 314, 305, 255) + t(757, 536, 646, 753, "1gDW") + c(189, 170, "oIyU", 180) + c(62, 69, "8(HF", 145) + r(334, "xlVD", 118, 220, 229) + t(583, 745, 628, 660, "1gDW") + t(795, 693, 695, 668, "FSs^") + n(723, 584, 622, "6%6U") + i(1117, "D3hR") + c(149, 258, "D3hR", 194) + n(543, 517, 505, "p%nT") + r(192, "KR8]", 6, 66, 120) + r(197, "1gDW", 66, 93, 104) + i(1007, "4hDt") + i(1063, "xB(%") + t(816, 703, 719, 794, "sEZB") + c(397, 272, "1gDW", 299) + c(148, 253, "FSs^", 160) + r(147, ")DT!", 163, 328, 254) + c(131, 78, "$YJ(", 163) + n(288, 410, 398, "9D3b") + r(-7, "9D3b", 6, -34, 83) + c(274, 257, "BgPX", 256) + c(245, 194, "&*e7", 278) + t(537, 592, 582, 614, "FSs^") + n(483, 528, 565, "cgT5") + t(692, 616, 653, 755, "RGy$") + r(98, "FVjZ", 268, 141, 198) + t(784, 814, 707, 771, "#Bnu") + i(1034, "m[k3") + t(575, 494, 612, 638, "8(HF") + t(542, 434, 544, 460, "gjua") + c(242, 462, "fLww", 347) + t(792, 711, 741, 729, "4hDt") + i(968, "KR8]") + c(147, 69, "xmca", 138) + t(526, 666, 601, 614, "UQ(9") + t(675, 673, 723, 613, "sEZB") + i(1072, "#2x1") + c(232, 269, "E7Xw", 204) + n(441, 318, 422, "8(HF") + n(508, 458, 444, "cgT5") + n(580, 653, 621, "p%nT") + n(633, 580, 563, "1gDW") + i(943, "#Bnu") + c(71, 225, "#Bnu", 170) + i(1142, "UQ(9") + c(274, 272, "0YRL", 260) + i(940, "FVjZ") + n(435, 422, 428, "KR8]") + c(131, 275, "$YJ(", 241) + r(70, "9D3b", 222, 103, 175) + n(333, 479, 443, "DLqW") + n(570, 472, 513, "hFDz") + n(475, 520, 407, "gjua") + i(945, "D3hR") + i(1128, "uxyc") + n(431, 533, 440, "HRax") + c(228, 361, "uxyc", 297) + r(-49, "oIyU", 110, 157, 56) + t(493, 465, 583, 535, "BgPX") + t(717, 710, 730, 758, "gjua") + t(700, 716, 655, 570, "p%nT") + t(607, 456, 567, 664, "HRax") + i(1028, "Lcjg") + t(567, 482, 543, 637, "6b4c") + r(156, ")DT!", 90, 257, 203) + r(23, "hFDz", 45, 52, 90) + c(35, 29, "gjua", 135) + t(750, 653, 659, 710, "#2x1") + i(924, "DLqW") + i(1045, "9D3b") + r(65, "p7d*", 208, 269, 172) + t(657, 544, 565, 539, "EyH&") + r(128, "0YRL", 262, 359, 244) + c(47, 195, "FSs^", 130) + r(152, "I^Wn", 72, 164, 51) + i(1155, ")DT!") + i(1081, "hFDz") + n(462, 441, 554, "X8aX") + r(231, "RGy$", 160, 201, 210) + i(1067, "ZsIP") + i(998, "#7NP") + i(937, "m[k3") + n(370, 528, 484, "gjua") + c(340, 191, "xlVD", 245) + r(187, "4hDt", 204, 81, 131) + r(4, "FSs^", 12, 162, 98) + t(833, 839, 763, 861, "sEZB") + n(506, 449, 399, "xB(%") + r(238, "EyH&", 259, 362, 259) + r(231, "gjua", 182, 185, 119) + i(1112, "gjua"), o = window[n(502, 459, 426, "]XY2")](x);
  function t(d, g, C, u, p) {
    return Ie(C - 328, p);
  }
  const e = window[t(691, 611, 690, 642, "oIyU")](o);
  function n(d, g, C, u, p) {
    return Ie(C - 181, u);
  }
  function i(d, g, C, u, p) {
    return Ie(d - 712, g);
  }
  function r(d, g, C, u, p) {
    return Ie(p - -168, g);
  }
  const a = N1(e), s = {};
  s[r(251, "KR8]", 220, 205, 208)] = oc;
  function c(d, g, C, u, p) {
    return Ie(u - -97, C);
  }
  return s[t(581, 700, 617, 609, "Lcjg")] = zu, window[c(358, 371, "FVjZ", 331) + "o"][i(1133, "FSs^") + "e"][t(655, 528, 599, 639, "8(HF") + i(948, "m[k3")](n(548, 662, 553, "sEZB"), a, s, !0, [t(562, 699, 593, 682, "UQ(9") + "pt"]);
}
function Lx() {
  const x = ["qCkmW5VcQSoY", "W7FcS0H8WQC", "WQeobCk7WPy", "uSkVW7BcRmkn", "zs9cfYy", "ctBdIg0B", "W5ZcSmosWOXY", "W77cTCo0WR8D", "FZ04W5ZdOG", "WOBcGXJdTmoi", "yCo+W5JcOLG", "W73cUG4/eq", "wmoHW6xcPmkh", "W7q+BJyi", "WRpdS8omW73dIW", "kmo0kSo3jtyxW6RcN3fkd0a", "W7HeWRddKCkZ", "WO5FkCofWO8", "W5C9WPlcLSkd", "W63cGLW9gG", "W5GDi8k3WOG", "WPrho8oEWPe", "w8oaWPRcIcK", "pCooW63cONS", "FLDBsSoo", "xr0JWQBdPq", "hhHeWO15", "WR8mW68EWQu", "WONdVCk7WRy+", "gNOFWRic", "WOTziColWPC", "AZfApqK", "x8oCW4XyW6y", "dqOmWRnr", "WO5IhmkMW7O", "WRBcQmoHWOu", "BmoBWRb/W7m", "C8o+AqNdKW", "tCoDW7VcItC", "WQ7dJ8ogWOW8", "BLBcM2PWW4CEvmkVd3VcN8oFhG", "eCoryCkmaW", "BYFcSbb3a0a", "F1zzdWK", "fSkXW7LVW6y", "ESokuCkboG", "W7rOWPZcU8oV", "wa8onCoG", "FWHOiaW", "EbW1WO8N", "WOtcPw/cPmo8", "W7pcJIOFbW", "qJ85W63dSq", "sZCWeqm", "W63dU8kJW5/dKeLrWRi8WPTUW4jv", "W43dVmo/W5ldJW", "W7VcGCosW6P8", "zGeeWRxdHW", "W6ack25z", "rsKFWRBdQG", "W6zDkSosWQa", "xCoaW5pcLfK", "WRlcKmkHWRFcRa", "qebhcSoH", "W4yaWRRcL8oJ", "xCoIWO8PWQbYW7VdUmkvD8k7W6DO", "EIz/nY8", "mqJdQX17", "cxOfWP9K", "WORcGZBdSSos", "W6NdLCoSW73dPG", "mY7dOb8C", "W4vpW5OdWQe", "W67dSmooW4NcRG", "WQ3dK8kCWQKV", "W7RcLSkIASkF", "oWOpWQik", "sfvWgJO", "wcL7tY0", "l8oJWPvDW5u", "w8oVW6rY", "W4NcKSoyWRzo", "W43cGGL9pa", "W5NcHCoQWP1A", "W53cMCopWO4B", "pW8iWRaj", "W7ZcVmkzECkt", "WPJdKMmbW6u", "C8oFW4ZcSfW", "dCk/WPDWW7S", "CmkDWPddRsu", "BXuoW4j0", "W6ddR3v4bW", "r8kWsCkura", "WR0iECkVWRy", "W6/cH8k0r8kF", "WQ3dPc4QW4xdO8oqm8oqW6pcOd7dMW", "stWRWQtdTa", "BSoUW7dcSuq", "W7dcHYPcWRi", "iGSWkCobWO3cMSkS", "cZBcVxLA", "rdrclcm", "W53cImoPWRDc", "W7/cOCkHE8kL", "vsRdNI15", "xsm0aL8", "WQCKW6iVWQi", "mSo8W7RcLa", "DSobs23dOW", "q8ousepcJW", "lSkhDCkBywLc", "qbdcJCoDrW", "A8ktW6dcH8oW", "ob5HW4ldIG", "jtr6mbK", "BfnSWR5J", "xSk7WQBdSJK", "WO4nW6CI", "WOpcOx8/WPC", "y8oAqhtdKG", "wHK8WPOl", "WQzwjSkq", "WOddMfnMW7K", "hrZcNrb8", "W7CjcLaw", "pZtcI8oMvW", "WPC6lIT9", "W5OsWQNcUmos", "xru1WORdPq", "WR7cQ2ZdS8ov", "kdBcM8ojzq", "imopgCkMoW", "CCoIW6KvWRVdIx3dNLzOW4qQxa", "Ebr5jXK", "W5FdLCo9W43cRG", "dH1SWRa3", "WR8LW4etWPm", "WOtcJYtcS8o1", "WPVdPCk7W6KSdeJdLCohWRCxWRW7ha", "W5tdL8obWQOU", "WPKhW4e9WPW", "W7SbWRdcRmoe", "DCoUW4/cM0m", "qmkwWOeuWP4", "WOddVMDNW4e", "CGS+W5PC", "iJldJH1c", "kImPWQu4", "d1WtW7tdQai7WRa", "W6K0F0S7", "zSoWuK3dGW", "eCkAW6LSWRm", "WOxcGI3cR8oC", "W5xdK8orW7pdJq", "W5yeA8ktWRDSWRBdTfDx", "WR0Dp8keWOK", "WOhdQmoWWQbDimoPBq", "W6RdQCo5WOf/", "hSott8kKga", "sSkPyCkUW7q", "sdGzW6JdNq", "WQRdGCkIWOSQ", "W7hcSmkxESkt", "uhlcMKKFW705bCoRDh5vWP8", "vhdcNuvMWQbpjCoLwq", "a8k9W4lcT8kz", "qmkGW5lcL8kT", "cSkNWOpdRty", "WQjvgmomWOq", "W40aluKn", "WOBcVsFcHSon", "W63dMHRcS8oZWO3dLqq", "gCoxWPNdQYq", "eI3cLSodDq", "q8ooWQjWW6m", "W43cKGyEwa", "WRZcNmkJWQNcVa", "fCkFnaRcS8kXc2BdN07cGG", "FGCpWRu7", "W5BcJxnTBq", "W4SPW6f+WRW", "WPVcPuSAW7S", "kLmXzf9sAalcN2ne", "gSo1W5pdNb8", "p8oeW5VcRNe", "W5tdOmooW73dIG", "DSo0vmoZta", "WPi9l1a/", "B8kFWQtdGq8", "W7K7h8kKW5y", "cvXmWRtcU2vaWOH9dq7cRfG", "FSodvsJcIq", "uYm3W6lcUq", "WOSzWRW7WPe", "iG92WQfL", "c8kfW6XUW4e", "gxKAWOSV", "nSkjWO1dW6i", "xbzLW4FdOq", "W7VdThzVtq", "B8kjW57dTsS", "W5aaBCkFW41lWOddKLHTWRW", "wSkAs8kxja", "WQVdJCkVWQeN", "p8oHW4/cVLW", "eeTZWRDC", "jJWoWR0B", "cSkgW6FcPSkp", "qGVcT8o+sG", "kCkAw8khza", "WRddGSkNWR8t", "WPeLf1aj", "EqyZWQiB", "DCoCxg3dHW", "p2fLW4BcGmo6rw/dQrqm", "uhXSFCoT", "mNrvWQi", "zCkJW47cIYS", "aq7dUMSh", "lbVdJXWk", "mgmsWP7dHa", "WRr/n8oWWOO", "WRyacmoqWQS", "W67cObtcO8oS", "odOiW5Cj", "W5fCWO/dVG", "o8omW4tcNva", "WQOedCoaWQe", "BSkXymkMW7e", "l8oxb8oWWOtcOJ1igSkuW6pcHJK", "W7a5Ddva", "fmoHW6fSW5y", "bComW7NcOfO", "r0qZAmoV"];
  return Lx = function() {
    return x;
  }, Lx();
}
async function F1(x) {
  function o(i, r, a, s, c) {
    return Ie(r - 79, i);
  }
  const t = await Y1(), e = {};
  function n(i, r, a, s, c) {
    return Ie(c - -108, i);
  }
  return e[o("#7NP", 413)] = oc, window[o("#2x1", 467) + "o"][n("8(HF", 198, 210, 144, 167) + "e"][n("UQ(9", 260, 205, 210, 157) + "pt"](e, t, x);
}
function Me(x, o) {
  const t = Dx();
  return Me = function(e, n) {
    e = e - (5 * 103 + -8555 + 8163);
    let i = t[e];
    if (Me.rrmZEJ === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = C.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          p += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let u = [], p = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (let v = 0; v < g.length; v++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      Me.qpOhwK = d, x = arguments, Me.rrmZEJ = !0;
    }
    const a = t[9412 * -1 + 11 * 219 + -47 * -149], s = e + a, c = x[s];
    return c ? i = c : (Me.xMmbUY === void 0 && (Me.xMmbUY = !0), i = Me.qpOhwK(i, n), x[s] = i), i;
  }, Me(x, o);
}
(function(x, o) {
  function t(a, s, c, d, g) {
    return Me(d - -510, s);
  }
  function e(a, s, c, d, g) {
    return Me(g - 758, c);
  }
  function n(a, s, c, d, g) {
    return Me(s - 668, d);
  }
  const i = x();
  function r(a, s, c, d, g) {
    return Me(s - -888, a);
  }
  for (; ; )
    try {
      if (-parseInt(n(812, 810, 804, "K9py", 806)) / 1 + -parseInt(r("qgcD", -750, -759, -750, -744)) / 2 * (parseInt(e(891, 886, "5*V6", 900, 891)) / 3) + -parseInt(n(796, 791, 797, "ooWI", 795)) / 4 + parseInt(t(-379, "^*A#", -377, -385, -390)) / 5 * (parseInt(t(-362, "*&N1", -362, -371, -367)) / 6) + -parseInt(n(807, 808, 812, "*b(@", 812)) / 7 + parseInt(r("q$#b", -764, -771, -773, -764)) / 8 + parseInt(e(900, 898, "vUFI", 904, 894)) / 9 === o) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Dx, 179173);
function Dx() {
  const x = ["hNHS", "F03cNSoxW7zOACkkW54LW4xdSKu", "rYuIWPdcUCoSqSkjW6hdGConWP8", "sGRcH8kyaLldNCkYW657W696", "DmozsmoMWPObaaXrwmotW7xcHa", "zcVdSmoUd1dcM8o1W4BdGfu9", "ih9Mc3BdVCkOCXxdVCkMWPTB", "u1TrWQ/cMeiIWRVcKSoDWQRdHq", "t1SizCk2W7dcTq", "rc0NWP/cTmoPlSkjW7hdJCoMWR0e", "W7a6dNbeWOq/WPL9FsBdP8kR", "W7rgtby6W41J", "WPRdM0xdVIBcLCoVbmo3W6HDDa", "WOLsWR0QW60PW7zSW5nql8k2", "WOddV8kXmCkdgCkpWQ1NamkZW7pcOa", "msmPaSk7aCkn", "tvydWQlcO8kCW7a", "CCkgsJLMWQVdRSkfW6etW5xcRmkm", "dmo1WPBdQMizW7pdG0bYamk2wG", "da0AW6xdGq"];
  return Dx = function() {
    return x;
  }, Dx();
}
async function M1(x) {
  const { iv: o, key: t, message: e } = await D1(x), n = await F1(t);
  function i(a, s, c, d, g) {
    return Me(a - 162, g);
  }
  const r = {};
  return r[i(292, 291, 288, 285, "*&N1")] = n, r.iv = o, r[i(291, 293, 282, 281, "gw(f") + "ge"] = e, r;
}
function Te(x, o) {
  const t = Nx();
  return Te = function(e, n) {
    e = e - 332;
    let i = t[e];
    if (Te.JrvWif === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = C.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          p += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let u = [], p = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (let v = 0; v < g.length; v++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      Te.hvvxBj = d, x = arguments, Te.JrvWif = !0;
    }
    const a = t[6944 + 701 * -1 + -6243], s = e + a, c = x[s];
    return c ? i = c : (Te.wFqmgZ === void 0 && (Te.wFqmgZ = !0), i = Te.hvvxBj(i, n), x[s] = i), i;
  }, Te(x, o);
}
function Nx() {
  const x = ["W4r3W7SBb8k9W5/cHcJdUftcGW", "WQqYW55BBWBcNSoTwSkc", "hbNdLCkNFW", "qmo8W5FdQHZcQqy", "BSkszwrcW4i+B1a2W6VdR3u", "BcK9yCk5hCkzWPVdHmofdCk3", "W7KEkau", "gCo0W68", "WOqeWO8", "nmocW7ldKfVdV1yf", "W7Sfia3cUW", "WQ4AWO9albNcHCkOW7ldJG", "W7xdOSoVWONcJ8kpWRXgdSoPWOZdQG0", "W7b0zCoQWQ3dP2z+W5GZ", "W70MW6ddSmowWOVdHfyEW4NdMmkxna", "W7xdOCoSWOFcICkiWRL5oCoXWRZdIri", "W7CLW6FdVmosW7RcUf4NW5ldUW", "W67dHmoLnCoXmH95l2pdLMCj", "cmkhW6WRWPldJcG", "W7dcMb5TWQm", "WR1zW5BdJSkc", "a3maW6VdG8kIWPxdKXtcS8kUeCkJ", "WRKRimoTl8ovW4DkudO", "EGZdU8k5WRFdRIRdKSofWQ7dJ8kp", "W57cGSoLaCkbsLyqW4W3Eq", "WQJcGSkWECkV", "W6NdHSoQomoYmv9ZmhRdK08", "WQn3WQe", "ie/dOmoS", "WPVdHvmMW63dRdnN", "dSo+WPCXW44", "aSofWPb4WOhdVrqgBSkt"];
  return Nx = function() {
    return x;
  }, Nx();
}
(function(x, o) {
  const t = x();
  function e(a, s, c, d, g) {
    return Te(d - -299, c);
  }
  function n(a, s, c, d, g) {
    return Te(c - 458, d);
  }
  function i(a, s, c, d, g) {
    return Te(c - -383, d);
  }
  function r(a, s, c, d, g) {
    return Te(a - 331, d);
  }
  for (; ; )
    try {
      if (parseInt(i(-44, -42, -42, "nBVc", -55)) / 1 + -parseInt(e(65, 46, "XU0K", 51, 63)) / 2 * (-parseInt(n(825, 803, 817, "idTi", 801)) / 3) + -parseInt(n(800, 793, 798, "Rdp]", 801)) / 4 * (parseInt(r(682, 697, 680, "BXRj", 691)) / 5) + parseInt(r(693, 689, 704, "9!0*", 693)) / 6 + parseInt(r(664, 679, 651, "9!0*", 650)) / 7 + -parseInt(n(804, 805, 794, ")E)X", 810)) / 8 * (-parseInt(n(783, 794, 797, "!nMB", 813)) / 9) + -parseInt(r(692, 697, 684, "MUnp", 708)) / 10 * (parseInt(r(673, 681, 674, "u#Nm", 673)) / 11) === o) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Nx, -1 * 135587 + -299987 + 740098);
async function X1(x) {
  function o(i, r, a, s, c) {
    return Te(s - -207, c);
  }
  function t(i, r, a, s, c) {
    return Te(i - 648, c);
  }
  const e = await window[n(366, 350, "kqmJ") + "o"][n(350, 345, "YR(5") + "e"][n(350, 362, ")dq0") + "t"](t(1e3, 1003, 1012, 997, "jZe]"), x);
  function n(i, r, a, s, c) {
    return Te(r - 2, a);
  }
  return Array[t(1004, 1017, 1012, 991, ")dq0")](new Uint8Array(e))[t(993, 985, 991, 988, "$^gG")]((i) => i[t(985, 997, 984, 989, "k74M") + n(376, 360, "%gke")](-51 * 14 + -5264 + 3 * 1998)[t(986, 975, 1e3, 987, "JnT!") + o(155, 138, 155, 150, "DyVi")](7501 + -4 * -2078 + -1 * 15811, "0"))[t(994, 986, 1002, 995, "odY[")]("");
}
(function(x, o) {
  function t(s, c, d, g, C) {
    return qe(d - 923, C);
  }
  function e(s, c, d, g, C) {
    return qe(g - 512, c);
  }
  var n = x();
  function i(s, c, d, g, C) {
    return qe(g - -811, s);
  }
  function r(s, c, d, g, C) {
    return qe(s - 720, c);
  }
  for (; ; )
    try {
      var a = parseInt(r(1003, "iChZ", 1007, 998, 1003)) / 1 * (parseInt(r(997, "TTQN", 998, 1003, 990)) / 2) + parseInt(t(1196, 1190, 1198, 1197, "Vnc]")) / 3 * (-parseInt(i("%woA", -530, -530, -525, -518)) / 4) + parseInt(e(792, "2!ue", 802, 800, 803)) / 5 + parseInt(r(1002, "G$#T", 1009, 1001, 1007)) / 6 + parseInt(r(998, "1Ws]", 999, 990, 1002)) / 7 + parseInt(r(1001, "HoL^", 1005, 997, 1007)) / 8 + -parseInt(t(1208, 1203, 1208, 1202, "Vnc]")) / 9;
      if (a === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Yx, -1168148 * -1 + -924181 + 391990);
function qe(x, o) {
  var t = Yx();
  return qe = function(e, n) {
    e = e - (-9485 + -2642 * 1 + 12402);
    var i = t[e];
    if (qe.RbRKTq === void 0) {
      var r = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", p = "", b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = C.indexOf(l);
        for (var Z = 0, X = u.length; Z < X; Z++)
          p += "%" + ("00" + u.charCodeAt(Z).toString(16)).slice(-2);
        return decodeURIComponent(p);
      }, a = function(g, C) {
        var u = [], p = 0, b, A = "";
        g = r(g);
        var l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (var v = 0; v < g.length; v++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      qe.uMqCEL = a, x = arguments, qe.RbRKTq = !0;
    }
    var s = t[-1 * -5809 + -1152 * 8 + -3407 * -1], c = e + s, d = x[c];
    return d ? i = d : (qe.kHxLSX === void 0 && (qe.kHxLSX = !0), i = qe.uMqCEL(i, n), x[c] = i), i;
  }, qe(x, o);
}
function Yx() {
  var x = ["t8kVWRmmBSkqsmox", "oXlcOmkZfqldVHv5", "aCoycxacWRr2rSoQ", "vmorwSk1EmoJESom", "WPFcQCo3k1lcKZpcVSouWROCdsu", "mmoaWP53WQqYjdZcPwr/WOL+", "WO7cNthcTG/dTfmWW7ldSJ13", "W7BdSSk4oJ7cH8owWOK7W5pcTMe", "lr7dRXFdMSkzWOS8Amo9W7hdPJO", "a8oeW4r+W4zBWPtcPsa/pW", "WQJdSSkNW5nRo8ouzYXxuLdcGW", "oH3cQmoEsu3cNJHQcf3dK8kE", "rI3cTmkQWRhcVIzJeCoAgq", "WOJcLJtcTGpcTLq6W4ZdUa4", "W7j7W4ldM8kNaCkFigf3jv7cHa", "W7j0W4NdN8kJaSkxbe9oivRcKq", "bCoeW4n6W4LTWP/cPdOhnW"];
  return Yx = function() {
    return x;
  }, Yx();
}
async function j1(x) {
  const { Image: o } = Y0, t = await x.arrayBuffer(), e = new Uint8Array(t), n = {};
  n.bytes = e;
  const i = o.verify(n);
  if (i) throw Error(i);
  const r = {};
  return r.bytes = e, o.create(r);
}
async function J1(x) {
  const { v4: { Metadata: o } } = Y0, t = { ...x };
  t.platform = Y0.Platform.WEB;
  const e = t, n = o.verify(e);
  if (n) throw Error(n);
  return o.create(e);
}
async function _1(x) {
  const { Content: o } = Y0, { iv: t, key: e, message: n } = await M1(x), i = { token: new Uint8Array(e), iv: t, schemaVersion: Qu, bytes: new Uint8Array(n) }, r = o.verify(i);
  if (r) throw Error(r);
  const a = o.create(i);
  return o.encode(a).finish();
}
function U1(x) {
  const { Blob: o } = Y0.v4, t = o.verify(x);
  if (t) throw Error(t);
  const e = o.create(x);
  return o.encode(e).finish();
}
async function Q1(x, o) {
  const { DocumentContent: t } = Y0.v4, e = await j1(x), n = await J1(o), i = {};
  i.image = e, i.metadata = n;
  const r = i, a = t.verify(r);
  if (a) throw Error(a);
  const s = t.create(r), c = {};
  return c.documentContent = s, U1(c);
}
async function z1(x, o) {
  const t = await Q1(x, o);
  return _1(t);
}
(function() {
  var x = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0;
  return function(o) {
    o = o || {};
    var t;
    t || (t = typeof o < "u" ? o : {});
    var e, n;
    t.ready = new Promise(function(I, f) {
      e = I, n = f;
    });
    var i = {}, r;
    for (r in t) t.hasOwnProperty(r) && (i[r] = t[r]);
    var a = "./this.program", s = !(7293 + 7292 * -1), c = !(5810 + 157 * -37);
    s = typeof window == "object", c = typeof importScripts == "function";
    var d = "", g;
    (s || c) && (c ? d = self.location.href : document.currentScript && (d = document.currentScript.src), x && (d = x), -9471 * 1 + -2942 * 3 + 18297 !== d.indexOf("blob:") ? d = d.substr(-1 * -898 + -4900 * 1 + 69 * 58, d.lastIndexOf("/") + 1) : d = "", c && (g = function(I) {
      var f = new XMLHttpRequest();
      return f.open("GET", I, !(-58 * 26 + 5036 + -3527)), f.responseType = "arraybuffer", f.send(null), new Uint8Array(f.response);
    }));
    var C = t.printErr || console.warn.bind(console);
    for (r in i) i.hasOwnProperty(r) && (t[r] = i[r]);
    i = null, t.thisProgram && (a = t.thisProgram);
    var u;
    t.wasmBinary && (u = t.wasmBinary), t.noExitRuntime && t.noExitRuntime, typeof WebAssembly != "object" && _e("no native wasm support detected");
    var p, b = !(9 * 509 + 7993 * 1 + -381 * 33);
    function A(I) {
      I || _e("Assertion failed: undefined");
    }
    var l = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void (-2 * 4557 + 297 * 33 + -687);
    function v(I, f, m) {
      var y = Oe;
      if (-3036 + 1334 * -3 + 7038 < m) {
        m = f + m - (-2904 + -2905 * -1);
        for (var w = -1 * 3709 + 74 * -118 + 12441; w < I.length; ++w) {
          var S = I.charCodeAt(w);
          if (-2 * -31915 + -84679 + 97 * 785 <= S && 13842 + 1 * 10187 + -1 * -33314 >= S) {
            var k = I.charCodeAt(++w);
            S = 1 * 110429 + 59 * -1587 + 48740 + ((S & -35 * -5 + 7487 * -1 + 8335) << 1535 * 3 + -951 * -1 + -2 * 2773) | k & 1052 * -3 + -281 * -31 + -4532;
          }
          if (-8350 + 11 * -820 + 17497 * 1 >= S) {
            if (f >= m) break;
            y[f++] = S;
          } else {
            if (-2137 * 2 + 8 * -8 + -6385 * -1 >= S) {
              if (f + (-7498 + 7549 * -1 + 209 * 72) >= m) break;
              y[f++] = -9599 + 4337 * -1 + 14128 | S >> -1159 * 2 + 7891 * 1 + -5567;
            } else {
              if (4 * -31151 + -4 * -13479 + 136223 * 1 >= S) {
                if (f + (-1 * -4099 + -8064 + 3967 * 1) >= m) break;
                y[f++] = 224 | S >> 12;
              } else {
                if (f + (-417 + -163 * 18 + 1677 * 2) >= m) break;
                y[f++] = 1240 + -997 * -4 + -4988 | S >> -11 * 797 + 7110 + 5 * 335, y[f++] = 1059 * 2 + 7485 + 9475 * -1 | S >> 12 & -8140 + 5807 * 1 + 2396;
              }
              y[f++] = 1 * -765 + -4232 + 5125 | S >> 7 * -506 + 5049 + 79 * -19 & 2948 + -2 * -1048 + -4981;
            }
            y[f++] = -1 * 8629 + 2213 * 2 + 4331 | S & 45 * 46 + -1 * 3227 + 10 * 122;
          }
        }
        y[f] = -3356 + 4 * 156 + -2732 * -1;
      }
    }
    var Z = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void (-8788 + -4420 * -2 + -26 * 2);
    function X(I, f) {
      for (var m = I >> 1, y = m + f / (2191 * 2 + -3025 + -271 * 5); !(m >= y) && jt[m]; ) ++m;
      if (m <<= -6439 + 389 * -11 + -10719 * -1, -629 + -1478 * -6 + -8207 * 1 < m - I && Z) return Z.decode(Oe.subarray(I, m));
      for (m = -389 * 2 + -39 * -29 + 353 * -1, y = ""; ; ) {
        var w = Ht[I + 2 * m >> 1];
        if (-8301 + -1 * -8301 == w || m == f / (1839 + 1 * 3637 + -782 * 7)) return y;
        ++m, y += String.fromCharCode(w);
      }
    }
    function j(I, f, m) {
      if (void (7 * -41 + -2459 * 1 + 2746) === m && (m = -4488316961 + 6635800608), 7673 + -7694 * -1 + -15365 * 1 > m) return -12397 + -11 * -1127;
      m -= 15 * -41 + 7023 + -3203 * 2;
      var y = f;
      m = m < (-5854 * -1 + -8128 + -4 * -569) * I.length ? m / 2 : I.length;
      for (var w = 8940 + -1 * 6934 + -2006; w < m; ++w) Ht[f >> 1] = I.charCodeAt(w), f += -3063 + -14 * 131 + -1 * -4899;
      return Ht[f >> 4924 + -547 * 9] = -3 * 1903 + 3 * -298 + 6603, f - y;
    }
    function _(I) {
      return (-12190 + -508 * -24) * I.length;
    }
    function R(I, f) {
      for (var m = -1586 + -119 * -58 + -5316 * 1, y = ""; !(m >= f / (-9325 + -19 * -491)); ) {
        var w = Be[I + 4 * m >> 2];
        if (12357 + -4119 * 3 == w) break;
        ++m, -187 * -513 + -33 * -2518 + -113489 <= w ? (w -= 2 * -5651 + 111736 + -34898, y += String.fromCharCode(-47400 + -389 * -264 | w >> -2633 * -1 + -7688 + 5065, 10 * 7507 + -32723 * -1 + 51473 * -1 | w & -7056 + 1195 * 3 + -107 * -42)) : y += String.fromCharCode(w);
      }
      return y;
    }
    function oe(I, f, m) {
      if (void (3638 + -107 * 34) === m && (m = 325951532 + 1 * 1821532115), 4 > m) return 2068 + -44 * 47;
      var y = f;
      m = y + m - (1 * -1663 + 7484 + -831 * 7);
      for (var w = -6366 * 1 + -3339 + 3 * 3235; w < I.length; ++w) {
        var S = I.charCodeAt(w);
        if (-59178 + 36 * 1145 + 73254 <= S && 1 * 21092 + 7080 + 29171 >= S) {
          var k = I.charCodeAt(++w);
          S = 6265 * -5 + 218 * 398 + 10097 + ((S & 8915 + -1973 * 4) << 672 + -3697 * 1 + 3035) | k & -4626 + 1883 * 3;
        }
        if (Be[f >> -7177 + 3 * 2393] = S, f += -4492 * 1 + -116 * 6 + -1 * -5192, f + (8324 + 139 * 2 + -8598) > m) break;
      }
      return Be[f >> -204 * -31 + 1 * -9318 + 14 * 214] = 764 * -5 + -1637 + 5457, f - y;
    }
    function U(I) {
      for (var f = -6018 + -71 * -98 + 940 * -1, m = 13 * 599 + 1656 + -9443; m < I.length; ++m) {
        var y = I.charCodeAt(m);
        -62500 + -2 * -7193 + 103410 <= y && -49285 * -1 + 48119 + 679 * -59 >= y && ++m, f += -2674 * -2 + -73 * -105 + -13009;
      }
      return f;
    }
    var ee, Le, Oe, Ht, jt, Be, ot, Vn, C0;
    function J0(I) {
      ee = I, t.HEAP8 = Le = new Int8Array(I), t.HEAP16 = Ht = new Int16Array(I), t.HEAP32 = Be = new Int32Array(I), t.HEAPU8 = Oe = new Uint8Array(I), t.HEAPU16 = jt = new Uint16Array(I), t.HEAPU32 = ot = new Uint32Array(I), t.HEAPF32 = Vn = new Float32Array(I), t.HEAPF64 = C0 = new Float64Array(I);
    }
    var Je = t.INITIAL_MEMORY || -47943190 + 32360203 * 2, ht = {};
    ht.initial = Je / (-15 * 641 + -54983 + 130134), ht.maximum = 32768, t.wasmMemory ? p = t.wasmMemory : p = new WebAssembly.Memory(ht), p && (ee = p.buffer), Je = ee.byteLength, J0(ee);
    var Rt = [], Ze = [], _0 = [], p0 = [];
    function h0() {
      var I = t.preRun.shift();
      Rt.unshift(I);
    }
    var Ye = 7234 + -2 * 3617, gt = null;
    t.preloadedImages = {}, t.preloadedAudios = {};
    function _e(I) {
      throw t.onAbort && t.onAbort(I), C(I), b = !(-18503 + 1 * 18503), I = new WebAssembly.RuntimeError("abort(" + I + "). Build with -s ASSERTIONS=1 for more info."), n(I), I;
    }
    function Jt(I) {
      var f = it;
      return String.prototype.startsWith ? f.startsWith(I) : -12765 + -111 * -115 === f.indexOf(I);
    }
    function dt() {
      return Jt("data:application/octet-stream;base64,");
    }
    var it = "sam.wasm";
    if (!dt()) {
      var _t = it;
      it = t.locateFile ? t.locateFile(_t, d) : d + _t;
    }
    function rt() {
      try {
        if (u) return new Uint8Array(u);
        if (g) return g(it);
        throw "both async and sync fetching of the wasm failed";
      } catch (I) {
        _e(I);
      }
    }
    function Qc() {
      var I = {};
      return I.credentials = "same-origin", u || !s && !c || typeof fetch != "function" || Jt("file://") ? Promise.resolve().then(rt) : fetch(it, I).then(function(f) {
        if (!f.ok) throw "failed to load wasm binary file at '" + it + "'";
        return f.arrayBuffer();
      }).catch(function() {
        return rt();
      });
    }
    function Tn(I) {
      for (; -9714 + -47 * -37 + -145 * -55 < I.length; ) {
        var f = I.shift();
        if (typeof f == "function") f(t);
        else {
          var m = f.Ba;
          typeof m == "number" ? void (-1 * -634 + 5196 + -5830) === f.ta ? uo("v", m)() : uo("vi", m)(f.ta) : m(void (2 * 3850 + -381 * 17 + -1223 * 1) === f.ta ? null : f.ta);
        }
      }
    }
    function uo(I, f) {
      var m = [];
      return function() {
        m.length = arguments.length;
        for (var y = 2342 + -3 * -1015 + -5387; y < arguments.length; y++) m[y] = arguments[y];
        return m && m.length ? t["dynCall_" + I].apply(null, [f].concat(m)) : t["dynCall_" + I].call(null, f);
      };
    }
    function zc(I) {
      this.da = I - (-73 * -115 + -1 * 4013 + -4366), this.Oa = function(f) {
        Be[this.da + (5 * 1999 + -1 * 8893 + -1094) >> -13 * 662 + 2 * 3016 + -322 * -8] = f;
      }, this.La = function(f) {
        Be[this.da + (4 * -2437 + 1325 * 3 + -5773 * -1) >> -6625 + 51 * -181 + 1762 * 9] = f;
      }, this.Ma = function() {
        Be[this.da + (-9 * 389 + 2524 + 9 * 109) >> 3685 * -1 + -5983 + -9670 * -1] = -7534 + -2 * -3767;
      }, this.Ka = function() {
        Le[this.da + 12 >> -8449 * -1 + 9324 + -17773] = 1883 + -7 * 269;
      }, this.Na = function() {
        Le[this.da + (-8992 + -6 * -1245 + 1535) >> 0] = 9999 + -3333 * 3;
      }, this.Fa = function(f, m) {
        this.Oa(f), this.La(m), this.Ma(), this.Ka(), this.Na();
      };
    }
    function En() {
      return -1 * -1597 + -5289 * -1 + -6886 < En.xa;
    }
    function lo(I) {
      switch (I) {
        case -15 * 1 + -8818 * -1 + -27 * 326:
          return 440 * -6 + -6935 + 9575;
        case 3307 + -6079 * -1 + -9384:
          return -14184 + 2837 * 5;
        case 665 + -1 * 661:
          return 1 * -9602 + 230 * 32 + -44 * -51;
        case 46 * -17 + 5639 + -4849:
          return -7836 + 1 * 7839;
        default:
          throw new TypeError("Unknown type size: " + I);
      }
    }
    var ur = void (4534 * -1 + 1 * -4954 + 9488 * 1);
    function De(I) {
      for (var f = ""; Oe[I]; ) f += ur[Oe[I++]];
      return f;
    }
    var m0 = {}, Ut = {}, Ln = {};
    function Io(I) {
      if (void (8531 + 8531 * -1) === I) return "_unknown";
      I = I.replace(/[^a-zA-Z0-9_]/g, "$");
      var f = I.charCodeAt(281 * 19 + -5 * 1540 + -1 * -2361);
      return 1 * 3279 + -1 * 7142 + 3911 * 1 <= f && 57 >= f ? "_" + I : I;
    }
    function fo(I, f) {
      return I = Io(I), new Function("body", "return function " + I + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(f);
    }
    function Co(I) {
      var f = Error, m = fo(I, function(y) {
        this.name = I, this.message = y, y = Error(y).stack, void (-3347 * 1 + 5885 + -2538) !== y && (this.stack = this.toString() + `
` + y.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return m.prototype = Object.create(f.prototype), m.prototype.constructor = m, m.prototype.toString = function() {
        return this.message === void 0 ? this.name : this.name + ": " + this.message;
      }, m;
    }
    var b0 = void (-9 * 349 + 7925 + -8 * 598);
    function J(I) {
      throw new b0(I);
    }
    var lr = void (-5080 + -1 * -5080);
    function Dn(I) {
      throw new lr(I);
    }
    function A0(I, f, m) {
      function y(G) {
        G = m(G), G.length !== I.length && Dn("Mismatched type converter count");
        for (var H = -17 * -280 + 9073 + -13833; H < I.length; ++H) mt(I[H], G[H]);
      }
      I.forEach(function(G) {
        Ln[G] = f;
      });
      var w = Array(f.length), S = [], k = -1289 + -1 * 953 + 2242;
      f.forEach(function(G, H) {
        Ut.hasOwnProperty(G) ? w[H] = Ut[G] : (S.push(G), m0.hasOwnProperty(G) || (m0[G] = []), m0[G].push(function() {
          w[H] = Ut[G], ++k, k === S.length && y(w);
        }));
      }), 4129 + -4129 * 1 === S.length && y(w);
    }
    function mt(I, f, m) {
      if (m = m || {}, !("argPackAdvance" in f)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var y = f.name;
      if (I || J('type "' + y + '" must have a positive integer typeid pointer'), Ut.hasOwnProperty(I)) {
        if (m.Ea) return;
        J("Cannot register type '" + y + "' twice");
      }
      Ut[I] = f, delete Ln[I], m0.hasOwnProperty(I) && (f = m0[I], delete m0[I], f.forEach(function(w) {
        w();
      }));
    }
    function qc(I) {
      var f = {};
      return f.count = I.count, f.oa = I.oa, f.pa = I.pa, f.da = I.da, f.fa = I.fa, f.ga = I.ga, f.ha = I.ha, f;
    }
    function po(I) {
      J(I.A.fa.ea.name + " instance already deleted");
    }
    var ho = !(361 + -2681 * -3 + 3 * -2801);
    function Ir() {
    }
    function fr(I) {
      --I.count.value, -1 * 5776 + -1 * 5783 + -3853 * -3 === I.count.value && (I.ga ? I.ha.na(I.ga) : I.fa.ea.na(I.da));
    }
    function U0(I) {
      return typeof FinalizationGroup > "u" ? (U0 = function(f) {
        return f;
      }, I) : (ho = new FinalizationGroup(function(f) {
        for (var m = f.next(); !m.done; m = f.next()) m = m.value, m.da ? fr(m) : console.warn("object already deleted: " + m.da);
      }), U0 = function(f) {
        return ho.register(f, f.A, f.A), f;
      }, Ir = function(f) {
        ho.unregister(f.A);
      }, U0(I));
    }
    var Q0 = void 0, z0 = [];
    function mo() {
      for (; z0.length; ) {
        var I = z0.pop();
        I.A.oa = !(-109 * -13 + 8064 + -9480), I.delete();
      }
    }
    function Kt() {
    }
    var Cr = {};
    function $c(I, f) {
      var m = t;
      if (void (43 * 46 + -8609 + 6631 * 1) === m[I].ja) {
        var y = m[I];
        m[I] = function() {
          return m[I].ja.hasOwnProperty(arguments.length) || J("Function '" + f + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + m[I].ja + ")!"), m[I].ja[arguments.length].apply(this, arguments);
        }, m[I].ja = [], m[I].ja[y.ya] = y;
      }
    }
    function pr(I, f, m) {
      t.hasOwnProperty(I) ? ((void (500 + -58 * -19 + -1602) === m || void (-9438 + 7193 * 1 + -5 * -449) !== t[I].ja && void (508 + -2 * 254) !== t[I].ja[m]) && J("Cannot register public name '" + I + "' twice"), $c(I, I), t.hasOwnProperty(m) && J("Cannot register multiple overloads of a function with the same number of arguments (" + m + ")!"), t[I].ja[m] = f) : (t[I] = f, void (-15052 + 284 * 53) !== m && (t[I].Ra = m));
    }
    function eg(I, f, m, y, w, S, k, G) {
      this.name = I, this.constructor = f, this.ma = m, this.na = y, this.ia = w, this.Ca = S, this.qa = k, this.Aa = G;
    }
    function Nn(I, f, m) {
      for (; f !== m; ) f.qa || J("Expected null or instance of " + m.name + ", got an instance of " + f.name), I = f.qa(I), f = f.ia;
      return I;
    }
    function tg(I, f) {
      return f === null ? (this.ua && J("null is not a valid " + this.name), -101 * -47 + 6702 + 11449 * -1) : (f.A || J('Cannot pass "' + W0(f) + '" as a ' + this.name), f.A.da || J("Cannot pass deleted object as a pointer of type " + this.name), Nn(f.A.da, f.A.fa.ea, this.ea));
    }
    function ng(I, f) {
      if (f === null) {
        if (this.ua && J("null is not a valid " + this.name), this.sa) {
          var m = this.Ha();
          return I !== null && I.push(this.na, m), m;
        }
        return -410 * -17 + 8655 + -15625;
      }
      if (f.A || J('Cannot pass "' + W0(f) + '" as a ' + this.name), f.A.da || J("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && f.A.fa.ra && J("Cannot convert argument of type " + (f.A.ha ? f.A.ha.name : f.A.fa.name) + " to parameter type " + this.name), m = Nn(f.A.da, f.A.fa.ea, this.ea), this.sa) switch (void (1 * -7232 + 3089 + -1 * -4143) === f.A.ga && J("Passing raw pointer to smart pointer is illegal"), this.Pa) {
        case 1 * 5507 + -3352 + -2155:
          f.A.ha === this ? m = f.A.ga : J("Cannot convert argument of type " + (f.A.ha ? f.A.ha.name : f.A.fa.name) + " to parameter type " + this.name);
          break;
        case 9 * -539 + -8282 + 13134:
          m = f.A.ga;
          break;
        case 23 * 251 + -466 * -5 + -1 * 8101:
          if (f.A.ha === this) m = f.A.ga;
          else {
            var y = f.clone();
            m = this.Ia(m, y0(function() {
              y.delete();
            })), I !== null && I.push(this.na, m);
          }
          break;
        default:
          J("Unsupporting sharing policy");
      }
      return m;
    }
    function xg(I, f) {
      return f === null ? (this.ua && J("null is not a valid " + this.name), -44 * 1 + 9694 + 386 * -25) : (f.A || J('Cannot pass "' + W0(f) + '" as a ' + this.name), f.A.da || J("Cannot pass deleted object as a pointer of type " + this.name), f.A.fa.ra && J("Cannot convert argument of type " + f.A.fa.name + " to parameter type " + this.name), Nn(f.A.da, f.A.fa.ea, this.ea));
    }
    function Yn(I) {
      return this.fromWireType(ot[I >> 821 * 5 + 2003 + 1 * -6106]);
    }
    function hr(I, f, m) {
      return f === m ? I : void (24 * -107 + 3599 * 1 + -1031) === m.ia ? null : (I = hr(I, f, m.ia), I === null ? null : m.Aa(I));
    }
    var q0 = {};
    function og(I, f) {
      for (void (4013 * 1 + 103 * -44 + 1 * 519) === f && J("ptr should not be undefined"); I.ia; ) f = I.qa(f), I = I.ia;
      return q0[f];
    }
    function Fn(I, f) {
      f.fa && f.da || Dn("makeClassHandle requires ptr and ptrType"), !!f.ha != !!f.ga && Dn("Both smartPtrType and smartPtr must be specified");
      var m = {};
      m.value = 1, f.count = m;
      var y = {};
      y.value = f;
      var w = {};
      return w.A = y, U0(Object.create(I, w));
    }
    function bt(I, f, m, y) {
      this.name = I, this.ea = f, this.ua = m, this.ra = y, this.sa = !(14 * 334 + -14 * -7 + 111 * -43), this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void 0, void (3 * -1532 + -314 * 18 + 10248) !== f.ia ? this.toWireType = ng : (this.toWireType = y ? tg : xg, this.ka = null);
    }
    function mr(I, f, m) {
      t.hasOwnProperty(I) || Dn("Replacing nonexistant public symbol"), void (-4827 * -1 + 3120 + -7947) !== t[I].ja && void (8861 * -1 + 1 * 7253 + -8 * -201) !== m ? t[I].ja[m] = f : (t[I] = f, t[I].ya = m);
    }
    function Pt(I, f) {
      I = De(I);
      var m = uo(I, f);
      return typeof m != "function" && J("unknown function pointer with signature " + I + ": " + f), m;
    }
    var br = void (2 * 4243 + -29 * -7 + 8689 * -1);
    function Ar(I) {
      I = Pr(I);
      var f = De(I);
      return At(I), f;
    }
    function $0(I, f) {
      function m(S) {
        w[S] || Ut[S] || (Ln[S] ? Ln[S].forEach(m) : (y.push(S), w[S] = !(1860 + 100 * -50 + 20 * 157)));
      }
      var y = [], w = {};
      throw f.forEach(m), new br(I + ": " + y.map(Ar).join([", "]));
    }
    function yr(I, f) {
      for (var m = [], y = 1 * -6793 + 6382 + 411; y < I; y++) m.push(Be[(f >> -802 * -7 + 1660 * -2 + 6 * -382) + y]);
      return m;
    }
    function Mn(I) {
      for (; I.length; ) {
        var f = I.pop();
        I.pop()(f);
      }
    }
    function Wr(I, f, m) {
      return I instanceof Object || J(m + ' with invalid "this": ' + I), I instanceof f.ea.constructor || J(m + ' incompatible with "this" of type ' + I.constructor.name), I.A.da || J("cannot call emscripten binding method " + m + " on deleted object"), Nn(I.A.da, I.A.fa.ea, f.ea);
    }
    var vr = {};
    vr.value = void 0;
    var wr = {};
    wr.value = null;
    var Sr = {};
    Sr.value = !(9 * 341 + -9062 + 1 * 5993);
    var Br = {};
    Br.value = !(-9485 + -2349 * 2 + 3 * 4728);
    var bo = [], Ue = [{}, vr, wr, Sr, Br];
    function Ao(I) {
      -1 * 3451 + 6589 * -1 + 36 * 279 < I && -12213 + 69 * 177 === --Ue[I].Ja && (Ue[I] = void (-1 * 9337 + -8878 + 18215), bo.push(I));
    }
    function y0(I) {
      switch (I) {
        case void 0:
          return -844 * -1 + 1 * 6806 + 1 * -7649;
        case null:
          return -853 + -1 * 7887 + 8742;
        case !(827 * -1 + 16 * -470 + 491 * 17):
          return 3;
        case !(1 * -5407 + 2394 + 3014):
          return 1487 + 1 * 5349 + -122 * 56;
        default:
          var f = bo.length ? bo.pop() : Ue.length, m = {};
          return m.Ja = 1, m.value = I, Ue[f] = m, f;
      }
    }
    function W0(I) {
      if (I === null) return "null";
      var f = typeof I;
      return f === "object" || f === "array" || f === "function" ? I.toString() : "" + I;
    }
    function ig(I, f) {
      switch (f) {
        case -14 * -59 + 2050 + 1 * -2874:
          return function(m) {
            return this.fromWireType(Vn[m >> -7463 * 1 + -9875 + 17340]);
          };
        case 3630 + 4694 * -2 + 1 * 5761:
          return function(m) {
            return this.fromWireType(C0[m >> -77 * 84 + -6 * -394 + -1369 * -3]);
          };
        default:
          throw new TypeError("Unknown float type: " + I);
      }
    }
    function rg(I) {
      var f = Function;
      if (!(f instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof f + " which is not a function");
      var m = fo(f.name || "unknownFunctionName", function() {
      });
      return m.prototype = f.prototype, m = new m(), I = f.apply(m, I), I instanceof Object ? I : m;
    }
    function ag(I, f, m) {
      switch (f) {
        case -13 * 263 + -7706 * -1 + 4287 * -1:
          return m ? function(y) {
            return Le[y];
          } : function(y) {
            return Oe[y];
          };
        case 2 * 4141 + 2471 * -4 + -1 * -1603:
          return m ? function(y) {
            return Ht[y >> 371 + -39 * 223 + -8327 * -1];
          } : function(y) {
            return jt[y >> -6801 + -1 * -9167 + -2365];
          };
        case -3686 + -1 * -3050 + -319 * -2:
          return m ? function(y) {
            return Be[y >> -7 * 79 + -3247 + 1901 * 2];
          } : function(y) {
            return ot[y >> 3855 + 145 * -59 + 4702];
          };
        default:
          throw new TypeError("Unknown integer type: " + I);
      }
    }
    function yo(I) {
      return I || J("Cannot use deleted val. handle = " + I), Ue[I].value;
    }
    function Gr(I, f) {
      var m = Ut[I];
      return void (-17738 + 2534 * 7) === m && J(f + " has unknown type " + Ar(I)), m;
    }
    var sg = {}, kr = {};
    function Or() {
      if (!Wo) {
        var I = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: a || "./this.program" }, f;
        for (f in kr) I[f] = kr[f];
        var m = [];
        for (f in I) m.push(f + "=" + I[f]);
        Wo = m;
      }
      return Wo;
    }
    var Wo, Zr = [];
    function Hr(I) {
      var f = {}, m;
      for (m in I) (function(y) {
        var w = I[y];
        f[y] = typeof w == "function" ? function() {
          Zr.push(y);
          try {
            return w.apply(null, arguments);
          } finally {
            if (b) return;
            var S = Zr.pop();
            A(S === y);
          }
        } : w;
      })(m);
      return f;
    }
    for (var Rr = Array(1 * 5309 + 28 * -125 + -1553), Xn = 17452 + -4363 * 4; 256 > Xn; ++Xn) Rr[Xn] = String.fromCharCode(Xn);
    ur = Rr, b0 = t.BindingError = Co("BindingError"), lr = t.InternalError = Co("InternalError"), Kt.prototype.isAliasOf = function(I) {
      if (!(this instanceof Kt && I instanceof Kt)) return !(-761 * 2 + 78 * 5 + -1 * -1133);
      var f = this.A.fa.ea, m = this.A.da, y = I.A.fa.ea;
      for (I = I.A.da; f.ia; ) m = f.qa(m), f = f.ia;
      for (; y.ia; ) I = y.qa(I), y = y.ia;
      return f === y && m === I;
    }, Kt.prototype.clone = function() {
      if (this.A.da || po(this), this.A.pa) return this.A.count.value += -1 * 9602 + -1167 * -6 + 867 * 3, this;
      var I = U0(Object.create(Object.getPrototypeOf(this), { A: { value: qc(this.A) } }));
      return I.A.count.value += -4533 + 2267 * 2, I.A.oa = !(-7429 + 401 * 9 + 3821), I;
    }, Kt.prototype.delete = function() {
      this.A.da || po(this), this.A.oa && !this.A.pa && J("Object already scheduled for deletion"), Ir(this), fr(this.A), this.A.pa || (this.A.ga = void (-7771 + 2677 * -1 + 1 * 10448), this.A.da = void (-2593 * 1 + -302 + 2895));
    }, Kt.prototype.isDeleted = function() {
      return !this.A.da;
    }, Kt.prototype.deleteLater = function() {
      return this.A.da || po(this), this.A.oa && !this.A.pa && J("Object already scheduled for deletion"), z0.push(this), -3 * 533 + 310 * 26 + 6460 * -1 === z0.length && Q0 && Q0(mo), this.A.oa = !(-3081 + 613 * 4 + 17 * 37), this;
    }, bt.prototype.Da = function(I) {
      return this.wa && (I = this.wa(I)), I;
    }, bt.prototype.va = function(I) {
      this.na && this.na(I);
    }, bt.prototype.argPackAdvance = -4814 * 1 + -6433 + -5 * -2251, bt.prototype.readValueFromPointer = Yn, bt.prototype.deleteObject = function(I) {
      I !== null && I.delete();
    }, bt.prototype.fromWireType = function(I) {
      function f() {
        return this.sa ? Fn(this.ea.ma, { fa: this.Ga, da: m, ha: this, ga: I }) : Fn(this.ea.ma, { fa: this, da: I });
      }
      var m = this.Da(I);
      if (!m) return this.va(I), null;
      var y = og(this.ea, m);
      if (void (1493 * -1 + 17 * 337 + -4236) !== y)
        return -8 * -128 + 8467 * -1 + 7443 === y.A.count.value ? (y.A.da = m, y.A.ga = I, y.clone()) : (y = y.clone(), this.va(I), y);
      if (y = this.ea.Ca(m), y = Cr[y], !y) return f.call(this);
      y = this.ra ? y.za : y.pointerType;
      var w = hr(m, this.ea, y.ea);
      return w === null ? f.call(this) : this.sa ? Fn(y.ea.ma, { fa: y, da: w, ha: this, ga: I }) : Fn(y.ea.ma, { fa: y, da: w });
    }, t.getInheritedInstanceCount = function() {
      return Object.keys(q0).length;
    }, t.getLiveInheritedInstances = function() {
      var I = [], f;
      for (f in q0) q0.hasOwnProperty(f) && I.push(q0[f]);
      return I;
    }, t.flushPendingDeletes = mo, t.setDelayFunction = function(I) {
      Q0 = I, z0.length && Q0 && Q0(mo);
    }, br = t.UnboundTypeError = Co("UnboundTypeError"), t.count_emval_handles = function() {
      for (var I = 1 * -421 + 3243 + 83 * -34, f = 6512 + -185 * -10 + 61 * -137; f < Ue.length; ++f) void (1 * -6301 + -1266 + 7567) !== Ue[f] && ++I;
      return I;
    }, t.get_first_emval = function() {
      for (var I = 5; I < Ue.length; ++I) if (void (8823 + 6042 * 1 + -14865) !== Ue[I]) return Ue[I];
      return null;
    }, Ze.push({ Ba: function() {
      Kr();
    } });
    var cg = { z: function(I) {
      return jn(I + (-6440 + -1528 * 5 + 14096)) + (-229 * -3 + 1155 + -1826);
    }, u: function(I, f, m) {
      throw new zc(I).Fa(f, m), "uncaught_exception" in En ? En.xa++ : En.xa = 6624 + 393 * 3 + -7802, I;
    }, w: function(I, f, m, y, w) {
      var S = lo(m);
      f = De(f), mt(I, { name: f, fromWireType: function(k) {
        return !!k;
      }, toWireType: function(k, G) {
        return G ? y : w;
      }, argPackAdvance: 8, readValueFromPointer: function(k) {
        if (-4 * -2032 + -69 * -14 + 7 * -1299 === m) var G = Le;
        else if (3269 + 3 * -1089 === m) G = Ht;
        else if (1 * 9249 + -1956 + 37 * -197 === m) G = Be;
        else throw new TypeError("Unknown boolean type size: " + f);
        return this.fromWireType(G[k >> S]);
      }, ka: null });
    }, h: function(I, f, m, y, w, S, k, G, H, K, P, V, q) {
      P = De(P), S = Pt(w, S), G && (G = Pt(k, G)), K && (K = Pt(H, K)), q = Pt(V, q);
      var Ce = Io(P);
      pr(Ce, function() {
        $0("Cannot construct " + P + " due to unbound types", [y]);
      }), A0([I, f, m], y ? [y] : [], function(T) {
        if (T = T[26 * -74 + -7278 + 9202], y) var ut = T.ea, He = ut.ma;
        else He = Kt.prototype;
        T = fo(Ce, function() {
          if (Object.getPrototypeOf(this) !== v0) throw new b0("Use 'new' to construct " + P);
          if (void (15 * -610 + 2420 + 5 * 1346) === w0.la) throw new b0(P + " has no accessible constructor");
          var Tr = w0.la[arguments.length];
          if (void (28 * 251 + 4174 + 5601 * -2) === Tr) throw new b0("Tried to invoke ctor of " + P + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(w0.la).toString() + ") parameters instead!");
          return Tr.apply(this, arguments);
        });
        var Fe = {};
        Fe.value = T;
        var Qt = {};
        Qt.constructor = Fe;
        var v0 = Object.create(He, Qt);
        T.prototype = v0;
        var w0 = new eg(P, T, v0, q, ut, S, G, K);
        ut = new bt(P, w0, !(271 * 23 + 2383 * 2 + -10999), !1), He = new bt(P + "*", w0, !(-1 * 9319 + 119 + 9201), !1);
        var Vr = new bt(P + " const*", w0, !(-198 + 607 * 1 + -408), !(125 * -31 + 8 * 83 + 3211)), wo = {};
        return wo.pointerType = He, wo.za = Vr, Cr[I] = wo, mr(Ce, T), [ut, He, Vr];
      });
    }, g: function(I, f, m, y, w, S) {
      A(-7101 + -6180 * 1 + 13281 < f);
      var k = yr(f, m);
      w = Pt(y, w);
      var G = [S], H = [];
      A0([], [I], function(K) {
        K = K[11 * -137 + -1447 + 2954];
        var P = "constructor " + K.name;
        if (void (1689 * -2 + 27 * 1 + 3 * 1117) === K.ea.la && (K.ea.la = []), void (6589 + -19 * 70 + -5259) !== K.ea.la[f - (-7339 + -10 * 84 + 8180)]) throw new b0("Cannot register multiple constructors with identical number of parameters (" + (f - (2892 + 1 * -2017 + -23 * 38)) + ") for class '" + K.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return K.ea.la[f - (-6035 + 3018 * 2)] = function() {
          $0("Cannot construct " + K.name + " due to unbound types", k);
        }, A0([], k, function(V) {
          return K.ea.la[f - (19 * -409 + 5021 + 2751)] = function() {
            arguments.length !== f - (8 * 1198 + 3685 + -2 * 6634) && J(P + " called with " + arguments.length + " arguments, expected " + (f - (-14561 + 18 * 809))), H.length = -2033 + -4646 * -2 + -7259, G.length = f;
            for (var q = 4807 + -3 * 1602; q < f; ++q) G[q] = V[q].toWireType(H, arguments[q - (-9897 + 9 * 599 + 4507)]);
            return q = w.apply(null, G), Mn(H), V[-3339 + -159 * -21].fromWireType(q);
          }, [];
        }), [];
      });
    }, b: function(I, f, m, y, w, S, k, G, H, K) {
      f = De(f), w = Pt(y, w), A0([], [I], function(P) {
        P = P[-3956 + -1291 * 5 + -10411 * -1];
        var V = P.name + "." + f, q = { get: function() {
          $0("Cannot access " + V + " due to unbound types", [m, k]);
        }, enumerable: !0, configurable: !(-8589 * -1 + 891 + -9480) };
        return H ? q.set = function() {
          $0("Cannot access " + V + " due to unbound types", [m, k]);
        } : q.set = function() {
          J(V + " is a read-only property");
        }, Object.defineProperty(P.ea.ma, f, q), A0([], H ? [m, k] : [m], function(Ce) {
          var T = Ce[0], ut = { get: function() {
            var Fe = Wr(this, P, V + " getter");
            return T.fromWireType(w(S, Fe));
          }, enumerable: !(-43 * -227 + -146 * 58 + -3 * 431) };
          if (H) {
            H = Pt(G, H);
            var He = Ce[-12945 + -12946 * -1];
            ut.set = function(Fe) {
              var Qt = Wr(this, P, V + " setter"), v0 = [];
              H(K, Qt, He.toWireType(v0, Fe)), Mn(v0);
            };
          }
          return Object.defineProperty(P.ea.ma, f, ut), [];
        }), [];
      });
    }, v: function(I, f) {
      f = De(f), mt(I, { name: f, fromWireType: function(m) {
        var y = Ue[m].value;
        return Ao(m), y;
      }, toWireType: function(m, y) {
        return y0(y);
      }, argPackAdvance: 8, readValueFromPointer: Yn, ka: null });
    }, m: function(I, f, m) {
      m = lo(m), f = De(f), mt(I, { name: f, fromWireType: function(y) {
        return y;
      }, toWireType: function(y, w) {
        if (typeof w != "number" && typeof w != "boolean") throw new TypeError('Cannot convert "' + W0(w) + '" to ' + this.name);
        return w;
      }, argPackAdvance: 8, readValueFromPointer: ig(f, m), ka: null });
    }, c: function(I, f, m, y, w, S) {
      var k = yr(f, m);
      I = De(I), w = Pt(y, w), pr(I, function() {
        $0("Cannot call " + I + " due to unbound types", k);
      }, f - (-8766 + -3079 * 1 + 11846)), A0([], k, function(G) {
        var H = I, K = I;
        G = [G[-329 * -20 + -1496 + -1 * 5084], null].concat(G.slice(1));
        var P = w, V = G.length;
        2 > V && J("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var q = G[-7 * -565 + 3646 + -7600] !== null && !(1216 + -1 * -8564 + 77 * -127), Ce = !(2 * -3485 + 2133 + 4838), T = -4828 * -2 + 8933 + -18588; T < G.length; ++T) if (G[T] !== null && void (201 + -3 * 3251 + 12 * 796) === G[T].ka) {
          Ce = !(-5006 + -1 * -5006);
          break;
        }
        var ut = G[-1 * -4349 + 5683 + -10032].name !== "void", He = "", Fe = "";
        for (T = 7436 * -1 + -3942 + -2 * -5689; T < V - (-6626 + -2287 * 4 + 15776); ++T) He += (-16 * 139 + 5227 * 1 + 7 * -429 !== T ? ", " : "") + "arg" + T, Fe += (-8870 + 1 * 3251 + 5619 !== T ? ", " : "") + "arg" + T + "Wired";
        K = "return function " + Io(K) + "(" + He + `) {
if (arguments.length !== ` + (V - (1 * 5111 + 8161 * -1 + 4 * 763)) + `) {
throwBindingError('function ` + K + " called with ' + arguments.length + ' arguments, expected " + (V - 2) + ` args!');
}
`, Ce && (K += `var destructors = [];
`);
        var Qt = Ce ? "destructors" : "null";
        for (He = "throwBindingError invoker fn runDestructors retType classParam".split(" "), P = [J, P, S, Mn, G[-571 * -7 + -215 + -3782], G[1384 + -1 * -2731 + -4114]], q && (K += "var thisWired = classParam.toWireType(" + Qt + `, this);
`), T = 1 * 1583 + 214 * -19 + -13 * -191; T < V - (-3 * 1955 + -7809 + -4 * -3419); ++T) K += "var arg" + T + "Wired = argType" + T + ".toWireType(" + Qt + ", arg" + T + "); // " + G[T + (651 * -1 + 1 * 7193 + 3270 * -2)].name + `
`, He.push("argType" + T), P.push(G[T + 2]);
        if (q && (Fe = "thisWired" + (1 * -7297 + -2568 + 9865 < Fe.length ? ", " : "") + Fe), K += (ut ? "var rv = " : "") + "invoker(fn" + (1 * 7160 + -2 * -3525 + -14210 < Fe.length ? ", " : "") + Fe + `);
`, Ce) K += `runDestructors(destructors);
`;
        else
          for (T = q ? -3 * 1181 + 1178 + 2366 : 2584 + -14 * 283 + 1380; T < G.length; ++T) V = 157 * -35 + -352 * -4 + 4088 === T ? "thisWired" : "arg" + (T - (5805 + -492 * -20 + -15643)) + "Wired", G[T].ka !== null && (K += V + "_dtor(" + V + "); // " + G[T].name + `
`, He.push(V + "_dtor"), P.push(G[T].ka));
        return ut && (K += `var ret = retType.fromWireType(rv);
return ret;
`), He.push(K + `}
`), G = rg(He).apply(null, P), mr(H, G, f - (-4023 + -2 * -2012)), [];
      });
    }, e: function(I, f, m, y, w) {
      function S(K) {
        return K;
      }
      f = De(f), w === -1 && (w = -243850464 + 79 * -86467529 + -2 * -5684876275);
      var k = lo(m);
      if (-2858 * -1 + 2333 + -1 * 5191 === y) {
        var G = 32 - 8 * m;
        S = function(K) {
          return K << G >>> G;
        };
      }
      var H = -(8673 + 2 * -3677 + -1318 * 1) != f.indexOf("unsigned");
      mt(I, { name: f, fromWireType: S, toWireType: function(K, P) {
        if (typeof P != "number" && typeof P != "boolean") throw new TypeError('Cannot convert "' + W0(P) + '" to ' + this.name);
        if (P < y || P > w) throw new TypeError('Passing a number "' + W0(P) + '" from JS side to C/C++ side to an argument of type "' + f + '", which is outside the valid range [' + y + ", " + w + "]!");
        return H ? P >>> 2080 + 1951 * -5 + 7675 : P | -4086 + 454 * 9;
      }, argPackAdvance: 8, readValueFromPointer: ag(f, k, y !== 0), ka: null });
    }, d: function(I, f, m) {
      function y(G) {
        G >>= -6655 + -3 * -2219;
        var H = ot;
        return new w(ee, H[G + (-4368 + -13 * 761 + 14262)], H[G]);
      }
      var w = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][f];
      m = De(m);
      var S = {};
      S.name = m, S.fromWireType = y, S.argPackAdvance = 8, S.readValueFromPointer = y;
      var k = {};
      k.Ea = !(8606 + 25 * 114 + -11456), mt(I, S, k);
    }, n: function(I, f) {
      f = De(f);
      var m = f === "std::string";
      mt(I, { name: f, fromWireType: function(y) {
        var w = ot[y >> 2];
        if (m) for (var S = y + (115 + -1 * -1265 + -1376), k = 0; k <= w; ++k) {
          var G = y + 4 + k;
          if (k == w || 25 * 134 + 1939 + 1763 * -3 == Oe[G]) {
            if (S) {
              var H = S, K = Oe, P = H + (G - S);
              for (S = H; K[S] && !(S >= P); ) ++S;
              if (672 + -16 * 41 < S - H && K.subarray && l) H = l.decode(K.subarray(H, S));
              else {
                for (P = ""; H < S; ) {
                  var V = K[H++];
                  if (V & 3452 + -11 * 160 + -1564) {
                    var q = K[H++] & 63;
                    if (2 * 631 + -7003 + -5933 * -1 == (V & -11740 + 997 * 12)) P += String.fromCharCode((V & 1753 * -3 + -1163 + 27 * 239) << 9267 + 1 * -9691 + 430 | q);
                    else {
                      var Ce = K[H++] & 63;
                      V = 17 * 466 + 179 * 13 + -25 * 401 == (V & -35 * 71 + 1087 + -9 * -182) ? (V & 976 + 2335 * 3 + -7966) << 6257 + -1 * -9463 + 11 * -1428 | q << 6 | Ce : (V & 6854 + -19 * 117 + 289 * -16) << 18 | q << 12 | Ce << -150 + 6 * 26 | K[H++] & 197 * 33 + 8794 + -16 * 952, 65536 > V ? P += String.fromCharCode(V) : (V -= -802 + -1 * 46819 + -113157 * -1, P += String.fromCharCode(16231 + 707 * 57 + -1234 | V >> -9090 + 593 * -15 + 305 * 59, -2 * -50213 + -8626 + -35480 | V & 1023));
                    }
                  } else P += String.fromCharCode(V);
                }
                H = P;
              }
            } else H = "";
            if (void (4266 + -998 * -4 + 8258 * -1) === T) var T = H;
            else T += String.fromCharCode(-1403 * 1 + -7656 + 9059), T += H;
            S = G + (-1 * 6181 + -1 * -5930 + 14 * 18);
          }
        }
        else {
          for (T = Array(w), k = 0; k < w; ++k) T[k] = String.fromCharCode(Oe[y + (735 + 231 * -40 + -8509 * -1) + k]);
          T = T.join("");
        }
        return At(y), T;
      }, toWireType: function(y, w) {
        w instanceof ArrayBuffer && (w = new Uint8Array(w));
        var S = typeof w == "string";
        S || w instanceof Uint8Array || w instanceof Uint8ClampedArray || w instanceof Int8Array || J("Cannot pass non-string to std::string");
        var k = (m && S ? function() {
          for (var K = 17584 + -7 * 2512, P = -101 * 31 + 4931 * -2 + -4331 * -3; P < w.length; ++P) {
            var V = w.charCodeAt(P);
            -127158 + -3 * -60818 <= V && 93127 + 5 * 17597 + -123769 >= V && (V = -23342 + 39 * 2131 + 1 * 5769 + ((V & -5703 * -1 + -3 * -2315 + -11625) << 4 * -240 + 3955 + -1 * 2985) | w.charCodeAt(++P) & -3859 * 1 + 6808 + -642 * 3), -9801 + -61 * -107 + 3401 >= V ? ++K : K = 9 * 595 + -5 * 1606 + -6 * -787 >= V ? K + (1 * -49 + 6524 + 6473 * -1) : -4256 * 2 + -22348 + 96395 >= V ? K + (-11917 + -2980 * -4) : K + (919 * -6 + -6890 + 12408);
          }
          return K;
        } : function() {
          return w.length;
        })(), G = jn(-2 * 1340 + -371 * 11 + -615 * -11 + k + (-5 * 508 + 1065 * -1 + 3606));
        if (ot[G >> -4449 + 1 * 4451] = k, m && S) v(w, G + (-2 * -966 + -1306 + 1 * -622), k + (6029 * 1 + -1783 * 1 + 283 * -15));
        else if (S) for (S = -6460 + 311 * 29 + -2559; S < k; ++S) {
          var H = w.charCodeAt(S);
          2850 + 4478 * -2 + 1 * 6361 < H && (At(G), J("String has UTF-16 code units that do not fit in 8 bits")), Oe[G + (4 * -644 + -6159 + 9 * 971) + S] = H;
        }
        else
          for (S = -1712 * -3 + -2475 + 1 * -2661; S < k; ++S) Oe[G + 4 + S] = w[S];
        return y !== null && y.push(At, G), G;
      }, argPackAdvance: 8, readValueFromPointer: Yn, ka: function(y) {
        At(y);
      } });
    }, j: function(I, f, m) {
      if (m = De(m), f === 2) var y = X, w = j, S = _, k = function() {
        return jt;
      }, G = 3070 + -1 * 3069;
      else f === 4 && (y = R, w = oe, S = U, k = function() {
        return ot;
      }, G = 1038 + 4 * -259);
      mt(I, { name: m, fromWireType: function(H) {
        for (var K = ot[H >> 5 * -46 + -1 * 3455 + 3687], P = k(), V, q = H + (31 * 317 + -1548 + -8275), Ce = -7073 + -7479 * 1 + -856 * -17; Ce <= K; ++Ce) {
          var T = H + 4 + Ce * f;
          (Ce == K || P[T >> G] == 0) && (q = y(q, T - q), void (6226 + 183 * 1 + 377 * -17) === V ? V = q : (V += String.fromCharCode(-152 * -31 + -3 * -199 + -5309), V += q), q = T + f);
        }
        return At(H), V;
      }, toWireType: function(H, K) {
        typeof K != "string" && J("Cannot pass non-string to C++ string type " + m);
        var P = S(K), V = jn(313 * -28 + -1 * 8223 + 16991 + P + f);
        return ot[V >> -5613 + -7 * -767 + 246] = P >> G, w(K, V + (-1 * 5251 + -9838 + 15093), P + f), H !== null && H.push(At, V), V;
      }, argPackAdvance: 8, readValueFromPointer: Yn, ka: function(H) {
        At(H);
      } });
    }, x: function(I, f) {
      f = De(f);
      var m = {};
      m.Qa = !(3821 + 3 * 2750 + 1 * -12071), m.name = f, m.argPackAdvance = 0, m.fromWireType = function() {
      }, m.toWireType = function() {
      }, mt(I, m);
    }, k: function(I, f, m) {
      I = yo(I), f = Gr(f, "emval::as");
      var y = [], w = y0(y);
      return Be[m >> -1032 * -9 + -62 * 31 + -3682 * 2] = w, f.toWireType(y, I);
    }, i: Ao, l: function(I, f) {
      return I = yo(I), f = yo(f), y0(I[f]);
    }, p: function(I) {
      var f = sg[I];
      return y0(void (434 * -8 + 9409 + -5937) === f ? De(I) : f);
    }, o: function(I) {
      Mn(Ue[I].value), Ao(I);
    }, y: function(I, f) {
      return I = Gr(I, "_emval_take_value"), I = I.readValueFromPointer(f), y0(I);
    }, f: function() {
      _e();
    }, q: function(I, f, m) {
      Oe.copyWithin(I, f, f + m);
    }, r: function(I) {
      I >>>= 14 + -2797 * -3 + -205 * 41;
      var f = Oe.length;
      if (-226113852 + -118679875 * -20 < I) return !(-5558 + 5449 * -1 + 11008);
      for (var m = -69 * 17 + 4154 + -2980; -749 * -3 + -2876 + -211 * -3 >= m; m *= 2) {
        var y = f * (1 + 0.2 / m);
        y = Math.min(y, I + (-13440598 + 2 * 57051947)), y = Math.max(4603 * -5054 + 25118345 + 14922433 * 1, I, y), -1 * 6947 + 4318 + 2629 < y % (-81 * 598 + -1 * -118277 + -4303) && (y += -131593 + 197129 * 1 - y % (797 * -8 + -223 * 218 + 120526));
        e: {
          try {
            p.grow(Math.min(2147483648, y) - ee.byteLength + (120400 + 159 * -22 + -1657 * 31) >>> 9836 + -1 * 9820), J0(p.buffer);
            var w = 818 * 7 + 2 * 2261 + -10247;
            break e;
          } catch {
          }
          w = void (2 * 449 + -8994 + -368 * -22);
        }
        if (w) return !0;
      }
      return !(4217 * -1 + -2463 + 6681);
    }, s: function(I, f) {
      var m = 0;
      return Or().forEach(function(y, w) {
        var S = f + m;
        for (w = Be[I + (-1 * -2443 + 2364 + -4803) * w >> -7200 + -1 * 5098 + 4100 * 3] = S, S = -969 + -2 * -2213 + -1 * 3457; S < y.length; ++S) Le[w++ >> 53 * -83 + -541 * 14 + 39 * 307] = y.charCodeAt(S);
        Le[w >> 1747 * -1 + -47 * 103 + 3 * 2196] = 0, m += y.length + 1;
      }), -4497 + 1613 * 4 + -1955;
    }, t: function(I, f) {
      var m = Or();
      Be[I >> -1 * 4814 + 29 * -42 + -1 * -6034] = m.length;
      var y = 0;
      return m.forEach(function(w) {
        y += w.length + (1 * -5759 + 4903 + 857 * 1);
      }), Be[f >> -4919 + 7 * 703] = y, 0;
    }, a: p };
    (function() {
      function I(k) {
        k = k.exports, k = Hr(k), t.asm = k, Ye--, t.monitorRunDependencies && t.monitorRunDependencies(Ye), 2 * -4111 + -4630 + 126 * 102 == Ye && gt && (k = gt, gt = null, k());
      }
      function f(k) {
        I(k.instance);
      }
      function m(k) {
        return Qc().then(function(G) {
          return WebAssembly.instantiate(G, w);
        }).then(k, function(G) {
          C("failed to asynchronously prepare wasm: " + G), _e(G);
        });
      }
      var y = {};
      y.a = cg;
      var w = y;
      if (Ye++, t.monitorRunDependencies && t.monitorRunDependencies(Ye), t.instantiateWasm) try {
        var S = t.instantiateWasm(w, I);
        return S = Hr(S);
      } catch (k) {
        return C("Module.instantiateWasm callback failed with error: " + k), !(-1022 + 1023 * 1);
      }
      return function() {
        if (u || typeof WebAssembly.instantiateStreaming != "function" || dt() || Jt("file://") || typeof fetch != "function") return m(f);
        var k = {};
        k.credentials = "same-origin", fetch(it, k).then(function(G) {
          return WebAssembly.instantiateStreaming(G, w).then(f, function(H) {
            return C("wasm streaming compile failed: " + H), C("falling back to ArrayBuffer instantiation"), m(f);
          });
        });
      }(), {};
    })();
    var Kr = t.___wasm_call_ctors = function() {
      return (Kr = t.___wasm_call_ctors = t.asm.B).apply(null, arguments);
    }, jn = t._malloc = function() {
      return (jn = t._malloc = t.asm.C).apply(null, arguments);
    }, At = t._free = function() {
      return (At = t._free = t.asm.D).apply(null, arguments);
    }, Pr = t.___getTypeName = function() {
      return (Pr = t.___getTypeName = t.asm.E).apply(null, arguments);
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
    var Jn;
    gt = function I() {
      Jn || vo(), Jn || (gt = I);
    };
    function vo() {
      function I() {
        if (!Jn && (Jn = !(6833 + -6252 * 1 + -581), t.calledRun = !(-3447 + -543 * -9 + 480 * -3), !b)) {
          if (Tn(Ze), Tn(_0), e(t), t.onRuntimeInitialized && t.onRuntimeInitialized(), t.postRun) for (typeof t.postRun == "function" && (t.postRun = [t.postRun]); t.postRun.length; ) {
            var f = t.postRun.shift();
            p0.unshift(f);
          }
          Tn(p0);
        }
      }
      if (!(126 + -339 * 3 + 3 * 297 < Ye)) {
        if (t.preRun)
          for (typeof t.preRun == "function" && (t.preRun = [t.preRun]); t.preRun.length; ) h0();
        Tn(Rt), -61 * -143 + -1419 * -6 + -17237 < Ye || (t.setStatus ? (t.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            t.setStatus("");
          }, -61 * 59 + -5737 + 9337), I();
        }, 7 * -863 + -30 * 204 + 12162 * 1)) : I());
      }
    }
    if (t.run = vo, t.preInit)
      for (typeof t.preInit == "function" && (t.preInit = [t.preInit]); 3802 * 1 + -4594 + 66 * 12 < t.preInit.length; ) t.preInit.pop()();
    return vo(), o.ready;
  };
})();
class q1 {
  constructor(o, t) {
    E(this, "isDetectorInitialized", !1);
    E(this, "samVersion", null);
    E(this, "detection");
    this.imageProcessor = o, this.wasmDirectoryPath = t;
  }
  async init() {
    await this.initDetector(this.wasmDirectoryPath);
  }
  async initDetector(o) {
    await this.detector.initSamModule(location.href, o);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  setSamVersion(o) {
    if (!o || !this.areVersionsCompatible(o))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new xe("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = o;
  }
  runDetectionLoop(o) {
    this.detection && this.detection.stop(), this.detection = o, this.detection.run();
  }
  stopDetectionLoop() {
    var o;
    (o = this.detection) == null || o.stop();
  }
  areVersionsCompatible(o) {
    return o === el;
  }
  setThresholds(o) {
    this.imageProcessor.validationService.thresholds = o;
  }
}
class $1 {
  constructor() {
    E(this, "detectionRecord", []);
    E(this, "imagesWithTimestampForDuplicateDetection", new cc(Uu));
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: o, timestamp: t }) {
    const e = o.length / $u, n = e / (-8187 + -138 * 66 + -2471 * -7), i = o.length / (9136 + -4 * 2227 + -226), r = await X1(o.slice(i - n, i + n)), a = {};
    a.imageHash = r, a.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(a);
  }
  optimizeImageBeforeDetection(o) {
    return { data: Gl(o), resolution: { width: o.width, height: o.height } };
  }
  async processDetectedObject({ detectedObject: o, image: t, imageData: e, timestamp: n }) {
    const i = Al(o), r = this.validationService.validateDetectedObject(i, t);
    if (r.result.get("isPresent")) {
      const a = {};
      a.image = e, a.timestamp = n, this.collectImagesForDuplicateDetection(a);
    }
    return this.detectionRecord.push(o), { detection: i, validationResult: r.result, isValid: r.isValid() };
  }
  reset() {
    this.detectionRecord = [], this.imagesWithTimestampForDuplicateDetection.clear();
  }
}
class eI {
  constructor() {
    E(this, "thresholds", null);
  }
  getThresholds() {
    if (!this.thresholds) throw new xe("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Pc = Symbol("Comlink.proxy"), tI = Symbol("Comlink.endpoint"), nI = Symbol("Comlink.releaseProxy"), Yo = Symbol("Comlink.finalizer"), hx = Symbol("Comlink.thrown"), Vc = (x) => typeof x == "object" && x !== null || typeof x == "function", xI = {
  canHandle: (x) => Vc(x) && x[Pc],
  serialize(x) {
    const { port1: o, port2: t } = new MessageChannel();
    return Ec(x, o), [t, [t]];
  },
  deserialize(x) {
    return x.start(), Dc(x);
  }
}, oI = {
  canHandle: (x) => Vc(x) && hx in x,
  serialize({ value: x }) {
    let o;
    return x instanceof Error ? o = {
      isError: !0,
      value: {
        message: x.message,
        name: x.name,
        stack: x.stack
      }
    } : o = { isError: !1, value: x }, [o, []];
  },
  deserialize(x) {
    throw x.isError ? Object.assign(new Error(x.value.message), x.value) : x.value;
  }
}, Tc = /* @__PURE__ */ new Map([
  ["proxy", xI],
  ["throw", oI]
]);
function iI(x, o) {
  for (const t of x)
    if (o === t || t === "*" || t instanceof RegExp && t.test(o))
      return !0;
  return !1;
}
function Ec(x, o = globalThis, t = ["*"]) {
  o.addEventListener("message", function e(n) {
    if (!n || !n.data)
      return;
    if (!iI(t, n.origin)) {
      console.warn(`Invalid origin '${n.origin}' for comlink proxy`);
      return;
    }
    const { id: i, type: r, path: a } = Object.assign({ path: [] }, n.data), s = (n.data.argumentList || []).map(t0);
    let c;
    try {
      const d = a.slice(0, -1).reduce((C, u) => C[u], x), g = a.reduce((C, u) => C[u], x);
      switch (r) {
        case "GET":
          c = g;
          break;
        case "SET":
          d[a.slice(-1)[0]] = t0(n.data.value), c = !0;
          break;
        case "APPLY":
          c = g.apply(d, s);
          break;
        case "CONSTRUCT":
          {
            const C = new g(...s);
            c = dI(C);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: C, port2: u } = new MessageChannel();
            Ec(x, u), c = gI(C, [C]);
          }
          break;
        case "RELEASE":
          c = void 0;
          break;
        default:
          return;
      }
    } catch (d) {
      c = { value: d, [hx]: 0 };
    }
    Promise.resolve(c).catch((d) => ({ value: d, [hx]: 0 })).then((d) => {
      const [g, C] = Xx(d);
      o.postMessage(Object.assign(Object.assign({}, g), { id: i }), C), r === "RELEASE" && (o.removeEventListener("message", e), Lc(o), Yo in x && typeof x[Yo] == "function" && x[Yo]());
    }).catch((d) => {
      const [g, C] = Xx({
        value: new TypeError("Unserializable return value"),
        [hx]: 0
      });
      o.postMessage(Object.assign(Object.assign({}, g), { id: i }), C);
    });
  }), o.start && o.start();
}
function rI(x) {
  return x.constructor.name === "MessagePort";
}
function Lc(x) {
  rI(x) && x.close();
}
function Dc(x, o) {
  return Zi(x, [], o);
}
function xx(x) {
  if (x)
    throw new Error("Proxy has been released and is not useable");
}
function Nc(x) {
  return k0(x, {
    type: "RELEASE"
  }).then(() => {
    Lc(x);
  });
}
const Fx = /* @__PURE__ */ new WeakMap(), Mx = "FinalizationRegistry" in globalThis && new FinalizationRegistry((x) => {
  const o = (Fx.get(x) || 0) - 1;
  Fx.set(x, o), o === 0 && Nc(x);
});
function aI(x, o) {
  const t = (Fx.get(o) || 0) + 1;
  Fx.set(o, t), Mx && Mx.register(x, o, x);
}
function sI(x) {
  Mx && Mx.unregister(x);
}
function Zi(x, o = [], t = function() {
}) {
  let e = !1;
  const n = new Proxy(t, {
    get(i, r) {
      if (xx(e), r === nI)
        return () => {
          sI(n), Nc(x), e = !0;
        };
      if (r === "then") {
        if (o.length === 0)
          return { then: () => n };
        const a = k0(x, {
          type: "GET",
          path: o.map((s) => s.toString())
        }).then(t0);
        return a.then.bind(a);
      }
      return Zi(x, [...o, r]);
    },
    set(i, r, a) {
      xx(e);
      const [s, c] = Xx(a);
      return k0(x, {
        type: "SET",
        path: [...o, r].map((d) => d.toString()),
        value: s
      }, c).then(t0);
    },
    apply(i, r, a) {
      xx(e);
      const s = o[o.length - 1];
      if (s === tI)
        return k0(x, {
          type: "ENDPOINT"
        }).then(t0);
      if (s === "bind")
        return Zi(x, o.slice(0, -1));
      const [c, d] = Ya(a);
      return k0(x, {
        type: "APPLY",
        path: o.map((g) => g.toString()),
        argumentList: c
      }, d).then(t0);
    },
    construct(i, r) {
      xx(e);
      const [a, s] = Ya(r);
      return k0(x, {
        type: "CONSTRUCT",
        path: o.map((c) => c.toString()),
        argumentList: a
      }, s).then(t0);
    }
  });
  return aI(n, x), n;
}
function cI(x) {
  return Array.prototype.concat.apply([], x);
}
function Ya(x) {
  const o = x.map(Xx);
  return [o.map((t) => t[0]), cI(o.map((t) => t[1]))];
}
const Yc = /* @__PURE__ */ new WeakMap();
function gI(x, o) {
  return Yc.set(x, o), x;
}
function dI(x) {
  return Object.assign(x, { [Pc]: !0 });
}
function Xx(x) {
  for (const [o, t] of Tc)
    if (t.canHandle(x)) {
      const [e, n] = t.serialize(x);
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
      value: x
    },
    Yc.get(x) || []
  ];
}
function t0(x) {
  switch (x.type) {
    case "HANDLER":
      return Tc.get(x.name).deserialize(x.value);
    case "RAW":
      return x.value;
  }
}
function k0(x, o, t) {
  return new Promise((e) => {
    const n = uI();
    x.addEventListener("message", function i(r) {
      !r.data || !r.data.id || r.data.id !== n || (x.removeEventListener("message", i), e(r.data));
    }), x.start && x.start(), x.postMessage(Object.assign({ id: n }, o), t);
  });
}
function uI() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const Fc = "dmFyIHllID0gT2JqZWN0LmRlZmluZVByb3BlcnR5Owp2YXIganQgPSAoYSkgPT4gewogIHRocm93IFR5cGVFcnJvcihhKTsKfTsKdmFyIHZlID0gKGEsIG8sIGUpID0+IG8gaW4gYSA/IHllKGEsIG8sIHsgZW51bWVyYWJsZTogITAsIGNvbmZpZ3VyYWJsZTogITAsIHdyaXRhYmxlOiAhMCwgdmFsdWU6IGUgfSkgOiBhW29dID0gZTsKdmFyIHFuID0gKGEsIG8sIGUpID0+IHZlKGEsIHR5cGVvZiBvICE9ICJzeW1ib2wiID8gbyArICIiIDogbywgZSksIE50ID0gKGEsIG8sIGUpID0+IG8uaGFzKGEpIHx8IGp0KCJDYW5ub3QgIiArIGUpOwp2YXIgSCA9IChhLCBvLCBlKSA9PiAoTnQoYSwgbywgInJlYWQgZnJvbSBwcml2YXRlIGZpZWxkIiksIGUgPyBlLmNhbGwoYSkgOiBvLmdldChhKSksIFduID0gKGEsIG8sIGUpID0+IG8uaGFzKGEpID8ganQoIkNhbm5vdCBhZGQgdGhlIHNhbWUgcHJpdmF0ZSBtZW1iZXIgbW9yZSB0aGFuIG9uY2UiKSA6IG8gaW5zdGFuY2VvZiBXZWFrU2V0ID8gby5hZGQoYSkgOiBvLnNldChhLCBlKSwga24gPSAoYSwgbywgZSwgeSkgPT4gKE50KGEsIG8sICJ3cml0ZSB0byBwcml2YXRlIGZpZWxkIiksIHkgPyB5LmNhbGwoYSwgZSkgOiBvLnNldChhLCBlKSwgZSk7CmNvbnN0IEh0ID0gewogIHNpbWQ6ICJzYW1fc2ltZC53YXNtIiwKICBzYW06ICJzYW0ud2FzbSIKfSwgZ2UgPSBhc3luYyAoKSA9PiBXZWJBc3NlbWJseS52YWxpZGF0ZShuZXcgVWludDhBcnJheShbMCwgOTcsIDExNSwgMTA5LCAxLCAwLCAwLCAwLCAxLCA1LCAxLCA5NiwgMCwgMSwgMTIzLCAzLCAyLCAxLCAwLCAxMCwgMTAsIDEsIDgsIDAsIDY1LCAwLCAyNTMsIDE1LCAyNTMsIDk4LCAxMV0pKTsKdmFyIHdlID0gZnVuY3Rpb24oKSB7CiAgdmFyIGEgPSB0eXBlb2YgZG9jdW1lbnQgPCAidSIgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdCA/IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjIDogdm9pZCAwOwogIHJldHVybiBmdW5jdGlvbihvKSB7CiAgICBvID0gbyB8fCB7fTsKICAgIHZhciBlOwogICAgZSB8fCAoZSA9IHR5cGVvZiBvIDwgInUiID8gbyA6IHt9KTsKICAgIHZhciB5LCBnOwogICAgZS5yZWFkeSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgeSA9IG4sIGcgPSB0OwogICAgfSk7CiAgICB2YXIgQyA9IHt9LCBBOwogICAgZm9yIChBIGluIGUpIGUuaGFzT3duUHJvcGVydHkoQSkgJiYgKENbQV0gPSBlW0FdKTsKICAgIHZhciBiID0gIi4vdGhpcy5wcm9ncmFtIiwgTyA9ICExLCBFID0gITE7CiAgICBPID0gdHlwZW9mIHdpbmRvdyA9PSAib2JqZWN0IiwgRSA9IHR5cGVvZiBpbXBvcnRTY3JpcHRzID09ICJmdW5jdGlvbiI7CiAgICB2YXIgXyA9ICIiLCBSOwogICAgKE8gfHwgRSkgJiYgKEUgPyBfID0gc2VsZi5sb2NhdGlvbi5ocmVmIDogZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiAoXyA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjKSwgYSAmJiAoXyA9IGEpLCBfLmluZGV4T2YoImJsb2I6IikgIT09IDAgPyBfID0gXy5zdWJzdHIoMCwgXy5sYXN0SW5kZXhPZigiLyIpICsgMSkgOiBfID0gIiIsIEUgJiYgKFIgPSBmdW5jdGlvbihuKSB7CiAgICAgIHZhciB0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7CiAgICAgIHJldHVybiB0Lm9wZW4oIkdFVCIsIG4sICExKSwgdC5yZXNwb25zZVR5cGUgPSAiYXJyYXlidWZmZXIiLCB0LnNlbmQobnVsbCksIG5ldyBVaW50OEFycmF5KHQucmVzcG9uc2UpOwogICAgfSkpOwogICAgdmFyIFAgPSBlLnByaW50RXJyIHx8IGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpOwogICAgZm9yIChBIGluIEMpIEMuaGFzT3duUHJvcGVydHkoQSkgJiYgKGVbQV0gPSBDW0FdKTsKICAgIEMgPSBudWxsLCBlLnRoaXNQcm9ncmFtICYmIChiID0gZS50aGlzUHJvZ3JhbSk7CiAgICB2YXIgTDsKICAgIGUud2FzbUJpbmFyeSAmJiAoTCA9IGUud2FzbUJpbmFyeSksIGUubm9FeGl0UnVudGltZSAmJiBlLm5vRXhpdFJ1bnRpbWUsIHR5cGVvZiBXZWJBc3NlbWJseSAhPSAib2JqZWN0IiAmJiBmbigibm8gbmF0aXZlIHdhc20gc3VwcG9ydCBkZXRlY3RlZCIpOwogICAgdmFyIFksIE5uID0gITE7CiAgICBmdW5jdGlvbiBydChuKSB7CiAgICAgIG4gfHwgZm4oIkFzc2VydGlvbiBmYWlsZWQ6IHVuZGVmaW5lZCIpOwogICAgfQogICAgdmFyIGl0ID0gdHlwZW9mIFRleHREZWNvZGVyIDwgInUiID8gbmV3IFRleHREZWNvZGVyKCJ1dGY4IikgOiB2b2lkIDA7CiAgICBmdW5jdGlvbiBZdChuLCB0LCByKSB7CiAgICAgIHZhciBpID0gSTsKICAgICAgaWYgKDAgPCByKSB7CiAgICAgICAgciA9IHQgKyByIC0gMTsKICAgICAgICBmb3IgKHZhciBzID0gMDsgcyA8IG4ubGVuZ3RoOyArK3MpIHsKICAgICAgICAgIHZhciB1ID0gbi5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgaWYgKDU1Mjk2IDw9IHUgJiYgNTczNDMgPj0gdSkgewogICAgICAgICAgICB2YXIgYyA9IG4uY2hhckNvZGVBdCgrK3MpOwogICAgICAgICAgICB1ID0gNjU1MzYgKyAoKHUgJiAxMDIzKSA8PCAxMCkgfCBjICYgMTAyMzsKICAgICAgICAgIH0KICAgICAgICAgIGlmICgxMjcgPj0gdSkgewogICAgICAgICAgICBpZiAodCA+PSByKSBicmVhazsKICAgICAgICAgICAgaVt0KytdID0gdTsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIGlmICgyMDQ3ID49IHUpIHsKICAgICAgICAgICAgICBpZiAodCArIDEgPj0gcikgYnJlYWs7CiAgICAgICAgICAgICAgaVt0KytdID0gMTkyIHwgdSA+PiA2OwogICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgIGlmICg2NTUzNSA+PSB1KSB7CiAgICAgICAgICAgICAgICBpZiAodCArIDIgPj0gcikgYnJlYWs7CiAgICAgICAgICAgICAgICBpW3QrK10gPSAyMjQgfCB1ID4+IDEyOwogICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICBpZiAodCArIDMgPj0gcikgYnJlYWs7CiAgICAgICAgICAgICAgICBpW3QrK10gPSAyNDAgfCB1ID4+IDE4LCBpW3QrK10gPSAxMjggfCB1ID4+IDEyICYgNjM7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIGlbdCsrXSA9IDEyOCB8IHUgPj4gNiAmIDYzOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGlbdCsrXSA9IDEyOCB8IHUgJiA2MzsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgaVt0XSA9IDA7CiAgICAgIH0KICAgIH0KICAgIHZhciBhdCA9IHR5cGVvZiBUZXh0RGVjb2RlciA8ICJ1IiA/IG5ldyBUZXh0RGVjb2RlcigidXRmLTE2bGUiKSA6IHZvaWQgMDsKICAgIGZ1bmN0aW9uIFp0KG4sIHQpIHsKICAgICAgZm9yICh2YXIgciA9IG4gPj4gMSwgaSA9IHIgKyB0IC8gMjsgIShyID49IGkpICYmIGduW3JdOyApICsrcjsKICAgICAgaWYgKHIgPDw9IDEsIDMyIDwgciAtIG4gJiYgYXQpIHJldHVybiBhdC5kZWNvZGUoSS5zdWJhcnJheShuLCByKSk7CiAgICAgIGZvciAociA9IDAsIGkgPSAiIjsgOyApIHsKICAgICAgICB2YXIgcyA9IHRuW24gKyAyICogciA+PiAxXTsKICAgICAgICBpZiAocyA9PSAwIHx8IHIgPT0gdCAvIDIpIHJldHVybiBpOwogICAgICAgICsrciwgaSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHMpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBKdChuLCB0LCByKSB7CiAgICAgIGlmIChyID09PSB2b2lkIDAgJiYgKHIgPSAyMTQ3NDgzNjQ3KSwgMiA+IHIpIHJldHVybiAwOwogICAgICByIC09IDI7CiAgICAgIHZhciBpID0gdDsKICAgICAgciA9IHIgPCAyICogbi5sZW5ndGggPyByIC8gMiA6IG4ubGVuZ3RoOwogICAgICBmb3IgKHZhciBzID0gMDsgcyA8IHI7ICsrcykgdG5bdCA+PiAxXSA9IG4uY2hhckNvZGVBdChzKSwgdCArPSAyOwogICAgICByZXR1cm4gdG5bdCA+PiAxXSA9IDAsIHQgLSBpOwogICAgfQogICAgZnVuY3Rpb24gS3QobikgewogICAgICByZXR1cm4gMiAqIG4ubGVuZ3RoOwogICAgfQogICAgZnVuY3Rpb24gUXQobiwgdCkgewogICAgICBmb3IgKHZhciByID0gMCwgaSA9ICIiOyAhKHIgPj0gdCAvIDQpOyApIHsKICAgICAgICB2YXIgcyA9IFNbbiArIDQgKiByID4+IDJdOwogICAgICAgIGlmIChzID09IDApIGJyZWFrOwogICAgICAgICsrciwgNjU1MzYgPD0gcyA/IChzIC09IDY1NTM2LCBpICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTYgfCBzID4+IDEwLCA1NjMyMCB8IHMgJiAxMDIzKSkgOiBpICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocyk7CiAgICAgIH0KICAgICAgcmV0dXJuIGk7CiAgICB9CiAgICBmdW5jdGlvbiBYdChuLCB0LCByKSB7CiAgICAgIGlmIChyID09PSB2b2lkIDAgJiYgKHIgPSAyMTQ3NDgzNjQ3KSwgNCA+IHIpIHJldHVybiAwOwogICAgICB2YXIgaSA9IHQ7CiAgICAgIHIgPSBpICsgciAtIDQ7CiAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgbi5sZW5ndGg7ICsrcykgewogICAgICAgIHZhciB1ID0gbi5jaGFyQ29kZUF0KHMpOwogICAgICAgIGlmICg1NTI5NiA8PSB1ICYmIDU3MzQzID49IHUpIHsKICAgICAgICAgIHZhciBjID0gbi5jaGFyQ29kZUF0KCsrcyk7CiAgICAgICAgICB1ID0gNjU1MzYgKyAoKHUgJiAxMDIzKSA8PCAxMCkgfCBjICYgMTAyMzsKICAgICAgICB9CiAgICAgICAgaWYgKFNbdCA+PiAyXSA9IHUsIHQgKz0gNCwgdCArIDQgPiByKSBicmVhazsKICAgICAgfQogICAgICByZXR1cm4gU1t0ID4+IDJdID0gMCwgdCAtIGk7CiAgICB9CiAgICBmdW5jdGlvbiBxdChuKSB7CiAgICAgIGZvciAodmFyIHQgPSAwLCByID0gMDsgciA8IG4ubGVuZ3RoOyArK3IpIHsKICAgICAgICB2YXIgaSA9IG4uY2hhckNvZGVBdChyKTsKICAgICAgICA1NTI5NiA8PSBpICYmIDU3MzQzID49IGkgJiYgKytyLCB0ICs9IDQ7CiAgICAgIH0KICAgICAgcmV0dXJuIHQ7CiAgICB9CiAgICB2YXIgbm4sIFosIEksIHRuLCBnbiwgUywgVSwgb3QsIHN0OwogICAgZnVuY3Rpb24gdXQobikgewogICAgICBubiA9IG4sIGUuSEVBUDggPSBaID0gbmV3IEludDhBcnJheShuKSwgZS5IRUFQMTYgPSB0biA9IG5ldyBJbnQxNkFycmF5KG4pLCBlLkhFQVAzMiA9IFMgPSBuZXcgSW50MzJBcnJheShuKSwgZS5IRUFQVTggPSBJID0gbmV3IFVpbnQ4QXJyYXkobiksIGUuSEVBUFUxNiA9IGduID0gbmV3IFVpbnQxNkFycmF5KG4pLCBlLkhFQVBVMzIgPSBVID0gbmV3IFVpbnQzMkFycmF5KG4pLCBlLkhFQVBGMzIgPSBvdCA9IG5ldyBGbG9hdDMyQXJyYXkobiksIGUuSEVBUEY2NCA9IHN0ID0gbmV3IEZsb2F0NjRBcnJheShuKTsKICAgIH0KICAgIHZhciBsdCA9IGUuSU5JVElBTF9NRU1PUlkgfHwgMTY3NzcyMTY7CiAgICBlLndhc21NZW1vcnkgPyBZID0gZS53YXNtTWVtb3J5IDogWSA9IG5ldyBXZWJBc3NlbWJseS5NZW1vcnkoeyBpbml0aWFsOiBsdCAvIDY1NTM2LCBtYXhpbXVtOiAzMjc2OCB9KSwgWSAmJiAobm4gPSBZLmJ1ZmZlciksIGx0ID0gbm4uYnl0ZUxlbmd0aCwgdXQobm4pOwogICAgdmFyIGN0ID0gW10sIGZ0ID0gW10sIG5lID0gW10sIGR0ID0gW107CiAgICBmdW5jdGlvbiB0ZSgpIHsKICAgICAgdmFyIG4gPSBlLnByZVJ1bi5zaGlmdCgpOwogICAgICBjdC51bnNoaWZ0KG4pOwogICAgfQogICAgdmFyIEogPSAwLCBjbiA9IG51bGw7CiAgICBlLnByZWxvYWRlZEltYWdlcyA9IHt9LCBlLnByZWxvYWRlZEF1ZGlvcyA9IHt9OwogICAgZnVuY3Rpb24gZm4obikgewogICAgICB0aHJvdyBlLm9uQWJvcnQgJiYgZS5vbkFib3J0KG4pLCBQKG4pLCBObiA9ICEwLCBuID0gbmV3IFdlYkFzc2VtYmx5LlJ1bnRpbWVFcnJvcigiYWJvcnQoIiArIG4gKyAiKS4gQnVpbGQgd2l0aCAtcyBBU1NFUlRJT05TPTEgZm9yIG1vcmUgaW5mby4iKSwgZyhuKSwgbjsKICAgIH0KICAgIGZ1bmN0aW9uIEhuKG4pIHsKICAgICAgdmFyIHQgPSBLOwogICAgICByZXR1cm4gU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoID8gdC5zdGFydHNXaXRoKG4pIDogdC5pbmRleE9mKG4pID09PSAwOwogICAgfQogICAgZnVuY3Rpb24gaHQoKSB7CiAgICAgIHJldHVybiBIbigiZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LCIpOwogICAgfQogICAgdmFyIEsgPSAic2FtLndhc20iOwogICAgaWYgKCFodCgpKSB7CiAgICAgIHZhciBwdCA9IEs7CiAgICAgIEsgPSBlLmxvY2F0ZUZpbGUgPyBlLmxvY2F0ZUZpbGUocHQsIF8pIDogXyArIHB0OwogICAgfQogICAgZnVuY3Rpb24gbXQoKSB7CiAgICAgIHRyeSB7CiAgICAgICAgaWYgKEwpIHJldHVybiBuZXcgVWludDhBcnJheShMKTsKICAgICAgICBpZiAoUikgcmV0dXJuIFIoSyk7CiAgICAgICAgdGhyb3cgImJvdGggYXN5bmMgYW5kIHN5bmMgZmV0Y2hpbmcgb2YgdGhlIHdhc20gZmFpbGVkIjsKICAgICAgfSBjYXRjaCAobikgewogICAgICAgIGZuKG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBlZSgpIHsKICAgICAgcmV0dXJuIEwgfHwgIU8gJiYgIUUgfHwgdHlwZW9mIGZldGNoICE9ICJmdW5jdGlvbiIgfHwgSG4oImZpbGU6Ly8iKSA/IFByb21pc2UucmVzb2x2ZSgpLnRoZW4obXQpIDogZmV0Y2goSywgeyBjcmVkZW50aWFsczogInNhbWUtb3JpZ2luIiB9KS50aGVuKGZ1bmN0aW9uKG4pIHsKICAgICAgICBpZiAoIW4ub2spIHRocm93ICJmYWlsZWQgdG8gbG9hZCB3YXNtIGJpbmFyeSBmaWxlIGF0ICciICsgSyArICInIjsKICAgICAgICByZXR1cm4gbi5hcnJheUJ1ZmZlcigpOwogICAgICB9KS5jYXRjaChmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gbXQoKTsKICAgICAgfSk7CiAgICB9CiAgICBmdW5jdGlvbiB3bihuKSB7CiAgICAgIGZvciAoOyAwIDwgbi5sZW5ndGg7ICkgewogICAgICAgIHZhciB0ID0gbi5zaGlmdCgpOwogICAgICAgIGlmICh0eXBlb2YgdCA9PSAiZnVuY3Rpb24iKSB0KGUpOwogICAgICAgIGVsc2UgewogICAgICAgICAgdmFyIHIgPSB0LkJhOwogICAgICAgICAgdHlwZW9mIHIgPT0gIm51bWJlciIgPyB0LnRhID09PSB2b2lkIDAgPyBVbigidiIsIHIpKCkgOiBVbigidmkiLCByKSh0LnRhKSA6IHIodC50YSA9PT0gdm9pZCAwID8gbnVsbCA6IHQudGEpOwogICAgICAgIH0KICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gVW4obiwgdCkgewogICAgICB2YXIgciA9IFtdOwogICAgICByZXR1cm4gZnVuY3Rpb24oKSB7CiAgICAgICAgci5sZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOwogICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSByW2ldID0gYXJndW1lbnRzW2ldOwogICAgICAgIHJldHVybiByICYmIHIubGVuZ3RoID8gZVsiZHluQ2FsbF8iICsgbl0uYXBwbHkobnVsbCwgW3RdLmNvbmNhdChyKSkgOiBlWyJkeW5DYWxsXyIgKyBuXS5jYWxsKG51bGwsIHQpOwogICAgICB9OwogICAgfQogICAgZnVuY3Rpb24gcmUobikgewogICAgICB0aGlzLmRhID0gbiAtIDE2LCB0aGlzLk9hID0gZnVuY3Rpb24odCkgewogICAgICAgIFNbdGhpcy5kYSArIDggPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLkxhID0gZnVuY3Rpb24odCkgewogICAgICAgIFNbdGhpcy5kYSArIDAgPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLk1hID0gZnVuY3Rpb24oKSB7CiAgICAgICAgU1t0aGlzLmRhICsgNCA+PiAyXSA9IDA7CiAgICAgIH0sIHRoaXMuS2EgPSBmdW5jdGlvbigpIHsKICAgICAgICBaW3RoaXMuZGEgKyAxMiA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuTmEgPSBmdW5jdGlvbigpIHsKICAgICAgICBaW3RoaXMuZGEgKyAxMyA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuRmEgPSBmdW5jdGlvbih0LCByKSB7CiAgICAgICAgdGhpcy5PYSh0KSwgdGhpcy5MYShyKSwgdGhpcy5NYSgpLCB0aGlzLkthKCksIHRoaXMuTmEoKTsKICAgICAgfTsKICAgIH0KICAgIGZ1bmN0aW9uIEFuKCkgewogICAgICByZXR1cm4gMCA8IEFuLnhhOwogICAgfQogICAgZnVuY3Rpb24gem4obikgewogICAgICBzd2l0Y2ggKG4pIHsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICByZXR1cm4gMDsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIDQ6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlIDg6CiAgICAgICAgICByZXR1cm4gMzsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biB0eXBlIHNpemU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgdmFyIHl0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gVyhuKSB7CiAgICAgIGZvciAodmFyIHQgPSAiIjsgSVtuXTsgKSB0ICs9IHl0W0lbbisrXV07CiAgICAgIHJldHVybiB0OwogICAgfQogICAgdmFyIGVuID0ge30sIFEgPSB7fSwgX24gPSB7fTsKICAgIGZ1bmN0aW9uIEJuKG4pIHsKICAgICAgaWYgKG4gPT09IHZvaWQgMCkgcmV0dXJuICJfdW5rbm93biI7CiAgICAgIG4gPSBuLnJlcGxhY2UoL1teYS16QS1aMC05X10vZywgIiQiKTsKICAgICAgdmFyIHQgPSBuLmNoYXJDb2RlQXQoMCk7CiAgICAgIHJldHVybiA0OCA8PSB0ICYmIDU3ID49IHQgPyAiXyIgKyBuIDogbjsKICAgIH0KICAgIGZ1bmN0aW9uIERuKG4sIHQpIHsKICAgICAgcmV0dXJuIG4gPSBCbihuKSwgbmV3IEZ1bmN0aW9uKCJib2R5IiwgInJldHVybiBmdW5jdGlvbiAiICsgbiArIGAoKSB7CiAgICAidXNlIHN0cmljdCI7ICAgIHJldHVybiBib2R5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7Cn07CmApKHQpOwogICAgfQogICAgZnVuY3Rpb24gVm4obikgewogICAgICB2YXIgdCA9IEVycm9yLCByID0gRG4obiwgZnVuY3Rpb24oaSkgewogICAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMubWVzc2FnZSA9IGksIGkgPSBFcnJvcihpKS5zdGFjaywgaSAhPT0gdm9pZCAwICYmICh0aGlzLnN0YWNrID0gdGhpcy50b1N0cmluZygpICsgYApgICsgaS5yZXBsYWNlKC9eRXJyb3IoOlteXG5dKik/XG4vLCAiIikpOwogICAgICB9KTsKICAgICAgcmV0dXJuIHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSksIHIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gciwgci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlID09PSB2b2lkIDAgPyB0aGlzLm5hbWUgOiB0aGlzLm5hbWUgKyAiOiAiICsgdGhpcy5tZXNzYWdlOwogICAgICB9LCByOwogICAgfQogICAgdmFyIHJuID0gdm9pZCAwOwogICAgZnVuY3Rpb24gdihuKSB7CiAgICAgIHRocm93IG5ldyBybihuKTsKICAgIH0KICAgIHZhciB2dCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIENuKG4pIHsKICAgICAgdGhyb3cgbmV3IHZ0KG4pOwogICAgfQogICAgZnVuY3Rpb24gYW4obiwgdCwgcikgewogICAgICBmdW5jdGlvbiBpKGwpIHsKICAgICAgICBsID0gcihsKSwgbC5sZW5ndGggIT09IG4ubGVuZ3RoICYmIENuKCJNaXNtYXRjaGVkIHR5cGUgY29udmVydGVyIGNvdW50Iik7CiAgICAgICAgZm9yICh2YXIgcCA9IDA7IHAgPCBuLmxlbmd0aDsgKytwKSB6KG5bcF0sIGxbcF0pOwogICAgICB9CiAgICAgIG4uZm9yRWFjaChmdW5jdGlvbihsKSB7CiAgICAgICAgX25bbF0gPSB0OwogICAgICB9KTsKICAgICAgdmFyIHMgPSBBcnJheSh0Lmxlbmd0aCksIHUgPSBbXSwgYyA9IDA7CiAgICAgIHQuZm9yRWFjaChmdW5jdGlvbihsLCBwKSB7CiAgICAgICAgUS5oYXNPd25Qcm9wZXJ0eShsKSA/IHNbcF0gPSBRW2xdIDogKHUucHVzaChsKSwgZW4uaGFzT3duUHJvcGVydHkobCkgfHwgKGVuW2xdID0gW10pLCBlbltsXS5wdXNoKGZ1bmN0aW9uKCkgewogICAgICAgICAgc1twXSA9IFFbbF0sICsrYywgYyA9PT0gdS5sZW5ndGggJiYgaShzKTsKICAgICAgICB9KSk7CiAgICAgIH0pLCB1Lmxlbmd0aCA9PT0gMCAmJiBpKHMpOwogICAgfQogICAgZnVuY3Rpb24geihuLCB0LCByKSB7CiAgICAgIGlmIChyID0gciB8fCB7fSwgISgiYXJnUGFja0FkdmFuY2UiIGluIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCJyZWdpc3RlclR5cGUgcmVnaXN0ZXJlZEluc3RhbmNlIHJlcXVpcmVzIGFyZ1BhY2tBZHZhbmNlIik7CiAgICAgIHZhciBpID0gdC5uYW1lOwogICAgICBpZiAobiB8fCB2KCd0eXBlICInICsgaSArICciIG11c3QgaGF2ZSBhIHBvc2l0aXZlIGludGVnZXIgdHlwZWlkIHBvaW50ZXInKSwgUS5oYXNPd25Qcm9wZXJ0eShuKSkgewogICAgICAgIGlmIChyLkVhKSByZXR1cm47CiAgICAgICAgdigiQ2Fubm90IHJlZ2lzdGVyIHR5cGUgJyIgKyBpICsgIicgdHdpY2UiKTsKICAgICAgfQogICAgICBRW25dID0gdCwgZGVsZXRlIF9uW25dLCBlbi5oYXNPd25Qcm9wZXJ0eShuKSAmJiAodCA9IGVuW25dLCBkZWxldGUgZW5bbl0sIHQuZm9yRWFjaChmdW5jdGlvbihzKSB7CiAgICAgICAgcygpOwogICAgICB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiBpZShuKSB7CiAgICAgIHJldHVybiB7IGNvdW50OiBuLmNvdW50LCBvYTogbi5vYSwgcGE6IG4ucGEsIGRhOiBuLmRhLCBmYTogbi5mYSwgZ2E6IG4uZ2EsIGhhOiBuLmhhIH07CiAgICB9CiAgICBmdW5jdGlvbiBHbihuKSB7CiAgICAgIHYobi5BLmZhLmVhLm5hbWUgKyAiIGluc3RhbmNlIGFscmVhZHkgZGVsZXRlZCIpOwogICAgfQogICAgdmFyICRuID0gITE7CiAgICBmdW5jdGlvbiBndCgpIHsKICAgIH0KICAgIGZ1bmN0aW9uIHd0KG4pIHsKICAgICAgLS1uLmNvdW50LnZhbHVlLCBuLmNvdW50LnZhbHVlID09PSAwICYmIChuLmdhID8gbi5oYS5uYShuLmdhKSA6IG4uZmEuZWEubmEobi5kYSkpOwogICAgfQogICAgZnVuY3Rpb24gZG4obikgewogICAgICByZXR1cm4gdHlwZW9mIEZpbmFsaXphdGlvbkdyb3VwID4gInUiID8gKGRuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiB0OwogICAgICB9LCBuKSA6ICgkbiA9IG5ldyBGaW5hbGl6YXRpb25Hcm91cChmdW5jdGlvbih0KSB7CiAgICAgICAgZm9yICh2YXIgciA9IHQubmV4dCgpOyAhci5kb25lOyByID0gdC5uZXh0KCkpIHIgPSByLnZhbHVlLCByLmRhID8gd3QocikgOiBjb25zb2xlLndhcm4oIm9iamVjdCBhbHJlYWR5IGRlbGV0ZWQ6ICIgKyByLmRhKTsKICAgICAgfSksIGRuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiAkbi5yZWdpc3Rlcih0LCB0LkEsIHQuQSksIHQ7CiAgICAgIH0sIGd0ID0gZnVuY3Rpb24odCkgewogICAgICAgICRuLnVucmVnaXN0ZXIodC5BKTsKICAgICAgfSwgZG4obikpOwogICAgfQogICAgdmFyIGhuID0gdm9pZCAwLCBwbiA9IFtdOwogICAgZnVuY3Rpb24gWW4oKSB7CiAgICAgIGZvciAoOyBwbi5sZW5ndGg7ICkgewogICAgICAgIHZhciBuID0gcG4ucG9wKCk7CiAgICAgICAgbi5BLm9hID0gITEsIG4uZGVsZXRlKCk7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIFYoKSB7CiAgICB9CiAgICB2YXIgQXQgPSB7fTsKICAgIGZ1bmN0aW9uIGFlKG4sIHQpIHsKICAgICAgdmFyIHIgPSBlOwogICAgICBpZiAocltuXS5qYSA9PT0gdm9pZCAwKSB7CiAgICAgICAgdmFyIGkgPSByW25dOwogICAgICAgIHJbbl0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiByW25dLmphLmhhc093blByb3BlcnR5KGFyZ3VtZW50cy5sZW5ndGgpIHx8IHYoIkZ1bmN0aW9uICciICsgdCArICInIGNhbGxlZCB3aXRoIGFuIGludmFsaWQgbnVtYmVyIG9mIGFyZ3VtZW50cyAoIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiKSAtIGV4cGVjdHMgb25lIG9mICgiICsgcltuXS5qYSArICIpISIpLCByW25dLmphW2FyZ3VtZW50cy5sZW5ndGhdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgfSwgcltuXS5qYSA9IFtdLCByW25dLmphW2kueWFdID0gaTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gX3QobiwgdCwgcikgewogICAgICBlLmhhc093blByb3BlcnR5KG4pID8gKChyID09PSB2b2lkIDAgfHwgZVtuXS5qYSAhPT0gdm9pZCAwICYmIGVbbl0uamFbcl0gIT09IHZvaWQgMCkgJiYgdigiQ2Fubm90IHJlZ2lzdGVyIHB1YmxpYyBuYW1lICciICsgbiArICInIHR3aWNlIiksIGFlKG4sIG4pLCBlLmhhc093blByb3BlcnR5KHIpICYmIHYoIkNhbm5vdCByZWdpc3RlciBtdWx0aXBsZSBvdmVybG9hZHMgb2YgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIG51bWJlciBvZiBhcmd1bWVudHMgKCIgKyByICsgIikhIiksIGVbbl0uamFbcl0gPSB0KSA6IChlW25dID0gdCwgciAhPT0gdm9pZCAwICYmIChlW25dLlJhID0gcikpOwogICAgfQogICAgZnVuY3Rpb24gb2UobiwgdCwgciwgaSwgcywgdSwgYywgbCkgewogICAgICB0aGlzLm5hbWUgPSBuLCB0aGlzLmNvbnN0cnVjdG9yID0gdCwgdGhpcy5tYSA9IHIsIHRoaXMubmEgPSBpLCB0aGlzLmlhID0gcywgdGhpcy5DYSA9IHUsIHRoaXMucWEgPSBjLCB0aGlzLkFhID0gbDsKICAgIH0KICAgIGZ1bmN0aW9uIEVuKG4sIHQsIHIpIHsKICAgICAgZm9yICg7IHQgIT09IHI7ICkgdC5xYSB8fCB2KCJFeHBlY3RlZCBudWxsIG9yIGluc3RhbmNlIG9mICIgKyByLm5hbWUgKyAiLCBnb3QgYW4gaW5zdGFuY2Ugb2YgIiArIHQubmFtZSksIG4gPSB0LnFhKG4pLCB0ID0gdC5pYTsKICAgICAgcmV0dXJuIG47CiAgICB9CiAgICBmdW5jdGlvbiBzZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgc24odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIEVuKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiB1ZShuLCB0KSB7CiAgICAgIGlmICh0ID09PSBudWxsKSB7CiAgICAgICAgaWYgKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgdGhpcy5zYSkgewogICAgICAgICAgdmFyIHIgPSB0aGlzLkhhKCk7CiAgICAgICAgICByZXR1cm4gbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgciksIHI7CiAgICAgICAgfQogICAgICAgIHJldHVybiAwOwogICAgICB9CiAgICAgIGlmICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBzbih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgIXRoaXMucmEgJiYgdC5BLmZhLnJhICYmIHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArICh0LkEuaGEgPyB0LkEuaGEubmFtZSA6IHQuQS5mYS5uYW1lKSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIHIgPSBFbih0LkEuZGEsIHQuQS5mYS5lYSwgdGhpcy5lYSksIHRoaXMuc2EpIHN3aXRjaCAodC5BLmdhID09PSB2b2lkIDAgJiYgdigiUGFzc2luZyByYXcgcG9pbnRlciB0byBzbWFydCBwb2ludGVyIGlzIGlsbGVnYWwiKSwgdGhpcy5QYSkgewogICAgICAgIGNhc2UgMDoKICAgICAgICAgIHQuQS5oYSA9PT0gdGhpcyA/IHIgPSB0LkEuZ2EgOiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyAodC5BLmhhID8gdC5BLmhhLm5hbWUgOiB0LkEuZmEubmFtZSkgKyAiIHRvIHBhcmFtZXRlciB0eXBlICIgKyB0aGlzLm5hbWUpOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAxOgogICAgICAgICAgciA9IHQuQS5nYTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIGlmICh0LkEuaGEgPT09IHRoaXMpIHIgPSB0LkEuZ2E7CiAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgdmFyIGkgPSB0LmNsb25lKCk7CiAgICAgICAgICAgIHIgPSB0aGlzLklhKHIsIG9uKGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIGkuZGVsZXRlKCk7CiAgICAgICAgICAgIH0pKSwgbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgcik7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdigiVW5zdXBwb3J0aW5nIHNoYXJpbmcgcG9saWN5Iik7CiAgICAgIH0KICAgICAgcmV0dXJuIHI7CiAgICB9CiAgICBmdW5jdGlvbiBsZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgc24odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIHQuQS5mYS5yYSAmJiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyB0LkEuZmEubmFtZSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIEVuKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiBUbihuKSB7CiAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShVW24gPj4gMl0pOwogICAgfQogICAgZnVuY3Rpb24gQ3QobiwgdCwgcikgewogICAgICByZXR1cm4gdCA9PT0gciA/IG4gOiByLmlhID09PSB2b2lkIDAgPyBudWxsIDogKG4gPSBDdChuLCB0LCByLmlhKSwgbiA9PT0gbnVsbCA/IG51bGwgOiByLkFhKG4pKTsKICAgIH0KICAgIHZhciBtbiA9IHt9OwogICAgZnVuY3Rpb24gY2UobiwgdCkgewogICAgICBmb3IgKHQgPT09IHZvaWQgMCAmJiB2KCJwdHIgc2hvdWxkIG5vdCBiZSB1bmRlZmluZWQiKTsgbi5pYTsgKSB0ID0gbi5xYSh0KSwgbiA9IG4uaWE7CiAgICAgIHJldHVybiBtblt0XTsKICAgIH0KICAgIGZ1bmN0aW9uIFBuKG4sIHQpIHsKICAgICAgcmV0dXJuIHQuZmEgJiYgdC5kYSB8fCBDbigibWFrZUNsYXNzSGFuZGxlIHJlcXVpcmVzIHB0ciBhbmQgcHRyVHlwZSIpLCAhIXQuaGEgIT0gISF0LmdhICYmIENuKCJCb3RoIHNtYXJ0UHRyVHlwZSBhbmQgc21hcnRQdHIgbXVzdCBiZSBzcGVjaWZpZWQiKSwgdC5jb3VudCA9IHsgdmFsdWU6IDEgfSwgZG4oT2JqZWN0LmNyZWF0ZShuLCB7IEE6IHsgdmFsdWU6IHQgfSB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiBCKG4sIHQsIHIsIGkpIHsKICAgICAgdGhpcy5uYW1lID0gbiwgdGhpcy5lYSA9IHQsIHRoaXMudWEgPSByLCB0aGlzLnJhID0gaSwgdGhpcy5zYSA9ICExLCB0aGlzLm5hID0gdGhpcy5JYSA9IHRoaXMuSGEgPSB0aGlzLndhID0gdGhpcy5QYSA9IHRoaXMuR2EgPSB2b2lkIDAsIHQuaWEgIT09IHZvaWQgMCA/IHRoaXMudG9XaXJlVHlwZSA9IHVlIDogKHRoaXMudG9XaXJlVHlwZSA9IGkgPyBzZSA6IGxlLCB0aGlzLmthID0gbnVsbCk7CiAgICB9CiAgICBmdW5jdGlvbiBFdChuLCB0LCByKSB7CiAgICAgIGUuaGFzT3duUHJvcGVydHkobikgfHwgQ24oIlJlcGxhY2luZyBub25leGlzdGFudCBwdWJsaWMgc3ltYm9sIiksIGVbbl0uamEgIT09IHZvaWQgMCAmJiByICE9PSB2b2lkIDAgPyBlW25dLmphW3JdID0gdCA6IChlW25dID0gdCwgZVtuXS55YSA9IHIpOwogICAgfQogICAgZnVuY3Rpb24gRyhuLCB0KSB7CiAgICAgIG4gPSBXKG4pOwogICAgICB2YXIgciA9IFVuKG4sIHQpOwogICAgICByZXR1cm4gdHlwZW9mIHIgIT0gImZ1bmN0aW9uIiAmJiB2KCJ1bmtub3duIGZ1bmN0aW9uIHBvaW50ZXIgd2l0aCBzaWduYXR1cmUgIiArIG4gKyAiOiAiICsgdCksIHI7CiAgICB9CiAgICB2YXIgVHQgPSB2b2lkIDA7CiAgICBmdW5jdGlvbiBQdChuKSB7CiAgICAgIG4gPSBGdChuKTsKICAgICAgdmFyIHQgPSBXKG4pOwogICAgICByZXR1cm4gRChuKSwgdDsKICAgIH0KICAgIGZ1bmN0aW9uIHluKG4sIHQpIHsKICAgICAgZnVuY3Rpb24gcih1KSB7CiAgICAgICAgc1t1XSB8fCBRW3VdIHx8IChfblt1XSA/IF9uW3VdLmZvckVhY2gocikgOiAoaS5wdXNoKHUpLCBzW3VdID0gITApKTsKICAgICAgfQogICAgICB2YXIgaSA9IFtdLCBzID0ge307CiAgICAgIHRocm93IHQuZm9yRWFjaChyKSwgbmV3IFR0KG4gKyAiOiAiICsgaS5tYXAoUHQpLmpvaW4oWyIsICJdKSk7CiAgICB9CiAgICBmdW5jdGlvbiBidChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSBbXSwgaSA9IDA7IGkgPCBuOyBpKyspIHIucHVzaChTWyh0ID4+IDIpICsgaV0pOwogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIGJuKG4pIHsKICAgICAgZm9yICg7IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4ucG9wKCk7CiAgICAgICAgbi5wb3AoKSh0KTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gT3QobiwgdCwgcikgewogICAgICByZXR1cm4gbiBpbnN0YW5jZW9mIE9iamVjdCB8fCB2KHIgKyAnIHdpdGggaW52YWxpZCAidGhpcyI6ICcgKyBuKSwgbiBpbnN0YW5jZW9mIHQuZWEuY29uc3RydWN0b3IgfHwgdihyICsgJyBpbmNvbXBhdGlibGUgd2l0aCAidGhpcyIgb2YgdHlwZSAnICsgbi5jb25zdHJ1Y3Rvci5uYW1lKSwgbi5BLmRhIHx8IHYoImNhbm5vdCBjYWxsIGVtc2NyaXB0ZW4gYmluZGluZyBtZXRob2QgIiArIHIgKyAiIG9uIGRlbGV0ZWQgb2JqZWN0IiksIEVuKG4uQS5kYSwgbi5BLmZhLmVhLCB0LmVhKTsKICAgIH0KICAgIHZhciBabiA9IFtdLCB4ID0gW3t9LCB7IHZhbHVlOiB2b2lkIDAgfSwgeyB2YWx1ZTogbnVsbCB9LCB7IHZhbHVlOiAhMCB9LCB7IHZhbHVlOiAhMSB9XTsKICAgIGZ1bmN0aW9uIEpuKG4pIHsKICAgICAgNCA8IG4gJiYgLS14W25dLkphID09PSAwICYmICh4W25dID0gdm9pZCAwLCBabi5wdXNoKG4pKTsKICAgIH0KICAgIGZ1bmN0aW9uIG9uKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSB2b2lkIDA6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIG51bGw6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlICEwOgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgY2FzZSAhMToKICAgICAgICAgIHJldHVybiA0OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB2YXIgdCA9IFpuLmxlbmd0aCA/IFpuLnBvcCgpIDogeC5sZW5ndGg7CiAgICAgICAgICByZXR1cm4geFt0XSA9IHsgSmE6IDEsIHZhbHVlOiBuIH0sIHQ7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHNuKG4pIHsKICAgICAgaWYgKG4gPT09IG51bGwpIHJldHVybiAibnVsbCI7CiAgICAgIHZhciB0ID0gdHlwZW9mIG47CiAgICAgIHJldHVybiB0ID09PSAib2JqZWN0IiB8fCB0ID09PSAiYXJyYXkiIHx8IHQgPT09ICJmdW5jdGlvbiIgPyBuLnRvU3RyaW5nKCkgOiAiIiArIG47CiAgICB9CiAgICBmdW5jdGlvbiBmZShuLCB0KSB7CiAgICAgIHN3aXRjaCAodCkgewogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiBmdW5jdGlvbihyKSB7CiAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShvdFtyID4+IDJdKTsKICAgICAgICAgIH07CiAgICAgICAgY2FzZSAzOgogICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHIpIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKHN0W3IgPj4gM10pOwogICAgICAgICAgfTsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBmbG9hdCB0eXBlOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIGRlKG4pIHsKICAgICAgdmFyIHQgPSBGdW5jdGlvbjsKICAgICAgaWYgKCEodCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSkgdGhyb3cgbmV3IFR5cGVFcnJvcigibmV3XyBjYWxsZWQgd2l0aCBjb25zdHJ1Y3RvciB0eXBlICIgKyB0eXBlb2YgdCArICIgd2hpY2ggaXMgbm90IGEgZnVuY3Rpb24iKTsKICAgICAgdmFyIHIgPSBEbih0Lm5hbWUgfHwgInVua25vd25GdW5jdGlvbk5hbWUiLCBmdW5jdGlvbigpIHsKICAgICAgfSk7CiAgICAgIHJldHVybiByLnByb3RvdHlwZSA9IHQucHJvdG90eXBlLCByID0gbmV3IHIoKSwgbiA9IHQuYXBwbHkociwgbiksIG4gaW5zdGFuY2VvZiBPYmplY3QgPyBuIDogcjsKICAgIH0KICAgIGZ1bmN0aW9uIGhlKG4sIHQsIHIpIHsKICAgICAgc3dpdGNoICh0KSB7CiAgICAgICAgY2FzZSAwOgogICAgICAgICAgcmV0dXJuIHIgPyBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBaW2ldOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIElbaV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMToKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gdG5baSA+PiAxXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBnbltpID4+IDFdOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gciA/IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIFNbaSA+PiAyXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBVW2kgPj4gMl07CiAgICAgICAgICB9OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGludGVnZXIgdHlwZTogIiArIG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBLbihuKSB7CiAgICAgIHJldHVybiBuIHx8IHYoIkNhbm5vdCB1c2UgZGVsZXRlZCB2YWwuIGhhbmRsZSA9ICIgKyBuKSwgeFtuXS52YWx1ZTsKICAgIH0KICAgIGZ1bmN0aW9uIE10KG4sIHQpIHsKICAgICAgdmFyIHIgPSBRW25dOwogICAgICByZXR1cm4gciA9PT0gdm9pZCAwICYmIHYodCArICIgaGFzIHVua25vd24gdHlwZSAiICsgUHQobikpLCByOwogICAgfQogICAgdmFyIHBlID0ge30sIFN0ID0ge307CiAgICBmdW5jdGlvbiBXdCgpIHsKICAgICAgaWYgKCFRbikgewogICAgICAgIHZhciBuID0geyBVU0VSOiAid2ViX3VzZXIiLCBMT0dOQU1FOiAid2ViX3VzZXIiLCBQQVRIOiAiLyIsIFBXRDogIi8iLCBIT01FOiAiL2hvbWUvd2ViX3VzZXIiLCBMQU5HOiAodHlwZW9mIG5hdmlnYXRvciA9PSAib2JqZWN0IiAmJiBuYXZpZ2F0b3IubGFuZ3VhZ2VzICYmIG5hdmlnYXRvci5sYW5ndWFnZXNbMF0gfHwgIkMiKS5yZXBsYWNlKCItIiwgIl8iKSArICIuVVRGLTgiLCBfOiBiIHx8ICIuL3RoaXMucHJvZ3JhbSIgfSwgdDsKICAgICAgICBmb3IgKHQgaW4gU3QpIG5bdF0gPSBTdFt0XTsKICAgICAgICB2YXIgciA9IFtdOwogICAgICAgIGZvciAodCBpbiBuKSByLnB1c2godCArICI9IiArIG5bdF0pOwogICAgICAgIFFuID0gcjsKICAgICAgfQogICAgICByZXR1cm4gUW47CiAgICB9CiAgICB2YXIgUW4sIGt0ID0gW107CiAgICBmdW5jdGlvbiBSdChuKSB7CiAgICAgIHZhciB0ID0ge30sIHI7CiAgICAgIGZvciAociBpbiBuKSAoZnVuY3Rpb24oaSkgewogICAgICAgIHZhciBzID0gbltpXTsKICAgICAgICB0W2ldID0gdHlwZW9mIHMgPT0gImZ1bmN0aW9uIiA/IGZ1bmN0aW9uKCkgewogICAgICAgICAga3QucHVzaChpKTsKICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgIHJldHVybiBzLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICAgICAgICB9IGZpbmFsbHkgewogICAgICAgICAgICBpZiAoTm4pIHJldHVybjsKICAgICAgICAgICAgdmFyIHUgPSBrdC5wb3AoKTsKICAgICAgICAgICAgcnQodSA9PT0gaSk7CiAgICAgICAgICB9CiAgICAgICAgfSA6IHM7CiAgICAgIH0pKHIpOwogICAgICByZXR1cm4gdDsKICAgIH0KICAgIGZvciAodmFyIEl0ID0gQXJyYXkoMjU2KSwgT24gPSAwOyAyNTYgPiBPbjsgKytPbikgSXRbT25dID0gU3RyaW5nLmZyb21DaGFyQ29kZShPbik7CiAgICB5dCA9IEl0LCBybiA9IGUuQmluZGluZ0Vycm9yID0gVm4oIkJpbmRpbmdFcnJvciIpLCB2dCA9IGUuSW50ZXJuYWxFcnJvciA9IFZuKCJJbnRlcm5hbEVycm9yIiksIFYucHJvdG90eXBlLmlzQWxpYXNPZiA9IGZ1bmN0aW9uKG4pIHsKICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFYgJiYgbiBpbnN0YW5jZW9mIFYpKSByZXR1cm4gITE7CiAgICAgIHZhciB0ID0gdGhpcy5BLmZhLmVhLCByID0gdGhpcy5BLmRhLCBpID0gbi5BLmZhLmVhOwogICAgICBmb3IgKG4gPSBuLkEuZGE7IHQuaWE7ICkgciA9IHQucWEociksIHQgPSB0LmlhOwogICAgICBmb3IgKDsgaS5pYTsgKSBuID0gaS5xYShuKSwgaSA9IGkuaWE7CiAgICAgIHJldHVybiB0ID09PSBpICYmIHIgPT09IG47CiAgICB9LCBWLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkgewogICAgICBpZiAodGhpcy5BLmRhIHx8IEduKHRoaXMpLCB0aGlzLkEucGEpIHJldHVybiB0aGlzLkEuY291bnQudmFsdWUgKz0gMSwgdGhpczsKICAgICAgdmFyIG4gPSBkbihPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSwgeyBBOiB7IHZhbHVlOiBpZSh0aGlzLkEpIH0gfSkpOwogICAgICByZXR1cm4gbi5BLmNvdW50LnZhbHVlICs9IDEsIG4uQS5vYSA9ICExLCBuOwogICAgfSwgVi5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24oKSB7CiAgICAgIHRoaXMuQS5kYSB8fCBHbih0aGlzKSwgdGhpcy5BLm9hICYmICF0aGlzLkEucGEgJiYgdigiT2JqZWN0IGFscmVhZHkgc2NoZWR1bGVkIGZvciBkZWxldGlvbiIpLCBndCh0aGlzKSwgd3QodGhpcy5BKSwgdGhpcy5BLnBhIHx8ICh0aGlzLkEuZ2EgPSB2b2lkIDAsIHRoaXMuQS5kYSA9IHZvaWQgMCk7CiAgICB9LCBWLnByb3RvdHlwZS5pc0RlbGV0ZWQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuICF0aGlzLkEuZGE7CiAgICB9LCBWLnByb3RvdHlwZS5kZWxldGVMYXRlciA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gdGhpcy5BLmRhIHx8IEduKHRoaXMpLCB0aGlzLkEub2EgJiYgIXRoaXMuQS5wYSAmJiB2KCJPYmplY3QgYWxyZWFkeSBzY2hlZHVsZWQgZm9yIGRlbGV0aW9uIiksIHBuLnB1c2godGhpcyksIHBuLmxlbmd0aCA9PT0gMSAmJiBobiAmJiBobihZbiksIHRoaXMuQS5vYSA9ICEwLCB0aGlzOwogICAgfSwgQi5wcm90b3R5cGUuRGEgPSBmdW5jdGlvbihuKSB7CiAgICAgIHJldHVybiB0aGlzLndhICYmIChuID0gdGhpcy53YShuKSksIG47CiAgICB9LCBCLnByb3RvdHlwZS52YSA9IGZ1bmN0aW9uKG4pIHsKICAgICAgdGhpcy5uYSAmJiB0aGlzLm5hKG4pOwogICAgfSwgQi5wcm90b3R5cGUuYXJnUGFja0FkdmFuY2UgPSA4LCBCLnByb3RvdHlwZS5yZWFkVmFsdWVGcm9tUG9pbnRlciA9IFRuLCBCLnByb3RvdHlwZS5kZWxldGVPYmplY3QgPSBmdW5jdGlvbihuKSB7CiAgICAgIG4gIT09IG51bGwgJiYgbi5kZWxldGUoKTsKICAgIH0sIEIucHJvdG90eXBlLmZyb21XaXJlVHlwZSA9IGZ1bmN0aW9uKG4pIHsKICAgICAgZnVuY3Rpb24gdCgpIHsKICAgICAgICByZXR1cm4gdGhpcy5zYSA/IFBuKHRoaXMuZWEubWEsIHsgZmE6IHRoaXMuR2EsIGRhOiByLCBoYTogdGhpcywgZ2E6IG4gfSkgOiBQbih0aGlzLmVhLm1hLCB7IGZhOiB0aGlzLCBkYTogbiB9KTsKICAgICAgfQogICAgICB2YXIgciA9IHRoaXMuRGEobik7CiAgICAgIGlmICghcikgcmV0dXJuIHRoaXMudmEobiksIG51bGw7CiAgICAgIHZhciBpID0gY2UodGhpcy5lYSwgcik7CiAgICAgIGlmIChpICE9PSB2b2lkIDApCiAgICAgICAgcmV0dXJuIGkuQS5jb3VudC52YWx1ZSA9PT0gMCA/IChpLkEuZGEgPSByLCBpLkEuZ2EgPSBuLCBpLmNsb25lKCkpIDogKGkgPSBpLmNsb25lKCksIHRoaXMudmEobiksIGkpOwogICAgICBpZiAoaSA9IHRoaXMuZWEuQ2EociksIGkgPSBBdFtpXSwgIWkpIHJldHVybiB0LmNhbGwodGhpcyk7CiAgICAgIGkgPSB0aGlzLnJhID8gaS56YSA6IGkucG9pbnRlclR5cGU7CiAgICAgIHZhciBzID0gQ3QociwgdGhpcy5lYSwgaS5lYSk7CiAgICAgIHJldHVybiBzID09PSBudWxsID8gdC5jYWxsKHRoaXMpIDogdGhpcy5zYSA/IFBuKGkuZWEubWEsIHsgZmE6IGksIGRhOiBzLCBoYTogdGhpcywgZ2E6IG4gfSkgOiBQbigKICAgICAgICBpLmVhLm1hLAogICAgICAgIHsgZmE6IGksIGRhOiBzIH0KICAgICAgKTsKICAgIH0sIGUuZ2V0SW5oZXJpdGVkSW5zdGFuY2VDb3VudCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gT2JqZWN0LmtleXMobW4pLmxlbmd0aDsKICAgIH0sIGUuZ2V0TGl2ZUluaGVyaXRlZEluc3RhbmNlcyA9IGZ1bmN0aW9uKCkgewogICAgICB2YXIgbiA9IFtdLCB0OwogICAgICBmb3IgKHQgaW4gbW4pIG1uLmhhc093blByb3BlcnR5KHQpICYmIG4ucHVzaChtblt0XSk7CiAgICAgIHJldHVybiBuOwogICAgfSwgZS5mbHVzaFBlbmRpbmdEZWxldGVzID0gWW4sIGUuc2V0RGVsYXlGdW5jdGlvbiA9IGZ1bmN0aW9uKG4pIHsKICAgICAgaG4gPSBuLCBwbi5sZW5ndGggJiYgaG4gJiYgaG4oWW4pOwogICAgfSwgVHQgPSBlLlVuYm91bmRUeXBlRXJyb3IgPSBWbigiVW5ib3VuZFR5cGVFcnJvciIpLCBlLmNvdW50X2VtdmFsX2hhbmRsZXMgPSBmdW5jdGlvbigpIHsKICAgICAgZm9yICh2YXIgbiA9IDAsIHQgPSA1OyB0IDwgeC5sZW5ndGg7ICsrdCkgeFt0XSAhPT0gdm9pZCAwICYmICsrbjsKICAgICAgcmV0dXJuIG47CiAgICB9LCBlLmdldF9maXJzdF9lbXZhbCA9IGZ1bmN0aW9uKCkgewogICAgICBmb3IgKHZhciBuID0gNTsgbiA8IHgubGVuZ3RoOyArK24pIGlmICh4W25dICE9PSB2b2lkIDApIHJldHVybiB4W25dOwogICAgICByZXR1cm4gbnVsbDsKICAgIH0sIGZ0LnB1c2goeyBCYTogZnVuY3Rpb24oKSB7CiAgICAgIHh0KCk7CiAgICB9IH0pOwogICAgdmFyIG1lID0gewogICAgICB6OiBmdW5jdGlvbihuKSB7CiAgICAgICAgcmV0dXJuIE1uKG4gKyAxNikgKyAxNjsKICAgICAgfSwKICAgICAgdTogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIHRocm93IG5ldyByZShuKS5GYSh0LCByKSwgInVuY2F1Z2h0X2V4Y2VwdGlvbiIgaW4gQW4gPyBBbi54YSsrIDogQW4ueGEgPSAxLCBuOwogICAgICB9LAogICAgICB3OiBmdW5jdGlvbihuLCB0LCByLCBpLCBzKSB7CiAgICAgICAgdmFyIHUgPSB6bihyKTsKICAgICAgICB0ID0gVyh0KSwgeihuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oYykgewogICAgICAgICAgcmV0dXJuICEhYzsKICAgICAgICB9LCB0b1dpcmVUeXBlOiBmdW5jdGlvbihjLCBsKSB7CiAgICAgICAgICByZXR1cm4gbCA/IGkgOiBzOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogZnVuY3Rpb24oYykgewogICAgICAgICAgaWYgKHIgPT09IDEpIHZhciBsID0gWjsKICAgICAgICAgIGVsc2UgaWYgKHIgPT09IDIpIGwgPSB0bjsKICAgICAgICAgIGVsc2UgaWYgKHIgPT09IDQpIGwgPSBTOwogICAgICAgICAgZWxzZSB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGJvb2xlYW4gdHlwZSBzaXplOiAiICsgdCk7CiAgICAgICAgICByZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUobFtjID4+IHVdKTsKICAgICAgICB9LCBrYTogbnVsbCB9KTsKICAgICAgfSwKICAgICAgaDogZnVuY3Rpb24obiwgdCwgciwgaSwgcywgdSwgYywgbCwgcCwgZiwgZCwgaCwgdykgewogICAgICAgIGQgPSBXKGQpLCB1ID0gRyhzLCB1KSwgbCAmJiAobCA9IEcoYywgbCkpLCBmICYmIChmID0gRyhwLCBmKSksIHcgPSBHKGgsIHcpOwogICAgICAgIHZhciBUID0gQm4oZCk7CiAgICAgICAgX3QoVCwgZnVuY3Rpb24oKSB7CiAgICAgICAgICB5bigiQ2Fubm90IGNvbnN0cnVjdCAiICsgZCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbaV0pOwogICAgICAgIH0pLCBhbihbbiwgdCwgcl0sIGkgPyBbaV0gOiBbXSwgZnVuY3Rpb24obSkgewogICAgICAgICAgaWYgKG0gPSBtWzBdLCBpKQogICAgICAgICAgICB2YXIgTiA9IG0uZWEsIE0gPSBOLm1hOwogICAgICAgICAgZWxzZSBNID0gVi5wcm90b3R5cGU7CiAgICAgICAgICBtID0gRG4oVCwgZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGlmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykgIT09IGspIHRocm93IG5ldyBybigiVXNlICduZXcnIHRvIGNvbnN0cnVjdCAiICsgZCk7CiAgICAgICAgICAgIGlmIChqLmxhID09PSB2b2lkIDApIHRocm93IG5ldyBybihkICsgIiBoYXMgbm8gYWNjZXNzaWJsZSBjb25zdHJ1Y3RvciIpOwogICAgICAgICAgICB2YXIgTHQgPSBqLmxhW2FyZ3VtZW50cy5sZW5ndGhdOwogICAgICAgICAgICBpZiAoTHQgPT09IHZvaWQgMCkgdGhyb3cgbmV3IHJuKCJUcmllZCB0byBpbnZva2UgY3RvciBvZiAiICsgZCArICIgd2l0aCBpbnZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzICgiICsgYXJndW1lbnRzLmxlbmd0aCArICIpIC0gZXhwZWN0ZWQgKCIgKyBPYmplY3Qua2V5cyhqLmxhKS50b1N0cmluZygpICsgIikgcGFyYW1ldGVycyBpbnN0ZWFkISIpOwogICAgICAgICAgICByZXR1cm4gTHQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICAgIH0pOwogICAgICAgICAgdmFyIGsgPSBPYmplY3QuY3JlYXRlKE0sIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IG0gfSB9KTsKICAgICAgICAgIG0ucHJvdG90eXBlID0gazsKICAgICAgICAgIHZhciBqID0gbmV3IG9lKGQsIG0sIGssIHcsIE4sIHUsIGwsIGYpOwogICAgICAgICAgTiA9IG5ldyBCKGQsIGosICEwLCAhMSksIE0gPSBuZXcgQihkICsgIioiLCBqLCAhMSwgITEpOwogICAgICAgICAgdmFyIHZuID0gbmV3IEIoZCArICIgY29uc3QqIiwgaiwgITEsICEwKTsKICAgICAgICAgIHJldHVybiBBdFtuXSA9IHsgcG9pbnRlclR5cGU6IE0sIHphOiB2biB9LCBFdChULCBtKSwgW04sIE0sIHZuXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgZzogZnVuY3Rpb24obiwgdCwgciwgaSwgcywgdSkgewogICAgICAgIHJ0KDAgPCB0KTsKICAgICAgICB2YXIgYyA9IGJ0KHQsIHIpOwogICAgICAgIHMgPSBHKGksIHMpOwogICAgICAgIHZhciBsID0gW3VdLCBwID0gW107CiAgICAgICAgYW4oW10sIFtuXSwgZnVuY3Rpb24oZikgewogICAgICAgICAgZiA9IGZbMF07CiAgICAgICAgICB2YXIgZCA9ICJjb25zdHJ1Y3RvciAiICsgZi5uYW1lOwogICAgICAgICAgaWYgKGYuZWEubGEgPT09IHZvaWQgMCAmJiAoZi5lYS5sYSA9IFtdKSwgZi5lYS5sYVt0IC0gMV0gIT09IHZvaWQgMCkgdGhyb3cgbmV3IHJuKCJDYW5ub3QgcmVnaXN0ZXIgbXVsdGlwbGUgY29uc3RydWN0b3JzIHdpdGggaWRlbnRpY2FsIG51bWJlciBvZiBwYXJhbWV0ZXJzICgiICsgKHQgLSAxKSArICIpIGZvciBjbGFzcyAnIiArIGYubmFtZSArICInISBPdmVybG9hZCByZXNvbHV0aW9uIGlzIGN1cnJlbnRseSBvbmx5IHBlcmZvcm1lZCB1c2luZyB0aGUgcGFyYW1ldGVyIGNvdW50LCBub3QgYWN0dWFsIHR5cGUgaW5mbyEiKTsKICAgICAgICAgIHJldHVybiBmLmVhLmxhW3QgLSAxXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICB5bigiQ2Fubm90IGNvbnN0cnVjdCAiICsgZi5uYW1lICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIGMpOwogICAgICAgICAgfSwgYW4oW10sIGMsIGZ1bmN0aW9uKGgpIHsKICAgICAgICAgICAgcmV0dXJuIGYuZWEubGFbdCAtIDFdID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgYXJndW1lbnRzLmxlbmd0aCAhPT0gdCAtIDEgJiYgdihkICsgIiBjYWxsZWQgd2l0aCAiICsgYXJndW1lbnRzLmxlbmd0aCArICIgYXJndW1lbnRzLCBleHBlY3RlZCAiICsgKHQgLSAxKSksIHAubGVuZ3RoID0gMCwgbC5sZW5ndGggPSB0OwogICAgICAgICAgICAgIGZvciAodmFyIHcgPSAxOyB3IDwgdDsgKyt3KSBsW3ddID0gaFt3XS50b1dpcmVUeXBlKAogICAgICAgICAgICAgICAgcCwKICAgICAgICAgICAgICAgIGFyZ3VtZW50c1t3IC0gMV0KICAgICAgICAgICAgICApOwogICAgICAgICAgICAgIHJldHVybiB3ID0gcy5hcHBseShudWxsLCBsKSwgYm4ocCksIGhbMF0uZnJvbVdpcmVUeXBlKHcpOwogICAgICAgICAgICB9LCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgYjogZnVuY3Rpb24obiwgdCwgciwgaSwgcywgdSwgYywgbCwgcCwgZikgewogICAgICAgIHQgPSBXKHQpLCBzID0gRyhpLCBzKSwgYW4oW10sIFtuXSwgZnVuY3Rpb24oZCkgewogICAgICAgICAgZCA9IGRbMF07CiAgICAgICAgICB2YXIgaCA9IGQubmFtZSArICIuIiArIHQsIHcgPSB7IGdldDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHluKCJDYW5ub3QgYWNjZXNzICIgKyBoICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIFtyLCBjXSk7CiAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCB9OwogICAgICAgICAgcmV0dXJuIHAgPyB3LnNldCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICB5bigiQ2Fubm90IGFjY2VzcyAiICsgaCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbciwgY10pOwogICAgICAgICAgfSA6IHcuc2V0ID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHYoaCArICIgaXMgYSByZWFkLW9ubHkgcHJvcGVydHkiKTsKICAgICAgICAgIH0sIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkLmVhLm1hLCB0LCB3KSwgYW4oW10sIHAgPyBbciwgY10gOiBbcl0sIGZ1bmN0aW9uKFQpIHsKICAgICAgICAgICAgdmFyIG0gPSBUWzBdLCBOID0geyBnZXQ6IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIHZhciBrID0gT3QodGhpcywgZCwgaCArICIgZ2V0dGVyIik7CiAgICAgICAgICAgICAgcmV0dXJuIG0uZnJvbVdpcmVUeXBlKHModSwgaykpOwogICAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCB9OwogICAgICAgICAgICBpZiAocCkgewogICAgICAgICAgICAgIHAgPSBHKGwsIHApOwogICAgICAgICAgICAgIHZhciBNID0gVFsxXTsKICAgICAgICAgICAgICBOLnNldCA9IGZ1bmN0aW9uKGspIHsKICAgICAgICAgICAgICAgIHZhciBqID0gT3QodGhpcywgZCwgaCArICIgc2V0dGVyIiksIHZuID0gW107CiAgICAgICAgICAgICAgICBwKGYsIGosIE0udG9XaXJlVHlwZSh2biwgaykpLCBibih2bik7CiAgICAgICAgICAgICAgfTsKICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGQuZWEubWEsIHQsIE4pLCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgdjogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHQgPSBXKHQpLCB6KG4sIHsgbmFtZTogdCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihyKSB7CiAgICAgICAgICB2YXIgaSA9IHhbcl0udmFsdWU7CiAgICAgICAgICByZXR1cm4gSm4ociksIGk7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24ociwgaSkgewogICAgICAgICAgcmV0dXJuIG9uKGkpOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogVG4sIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBtOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgciA9IHpuKHIpLCB0ID0gVyh0KSwgeihuLCB7CiAgICAgICAgICBuYW1lOiB0LAogICAgICAgICAgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBpOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIHMpIHsKICAgICAgICAgICAgaWYgKHR5cGVvZiBzICE9ICJudW1iZXIiICYmIHR5cGVvZiBzICE9ICJib29sZWFuIikgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgIicgKyBzbihzKSArICciIHRvICcgKyB0aGlzLm5hbWUpOwogICAgICAgICAgICByZXR1cm4gczsKICAgICAgICAgIH0sCiAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBmZSh0LCByKSwKICAgICAgICAgIGthOiBudWxsCiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGM6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIHMsIHUpIHsKICAgICAgICB2YXIgYyA9IGJ0KHQsIHIpOwogICAgICAgIG4gPSBXKG4pLCBzID0gRyhpLCBzKSwgX3QobiwgZnVuY3Rpb24oKSB7CiAgICAgICAgICB5bigiQ2Fubm90IGNhbGwgIiArIG4gKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgYyk7CiAgICAgICAgfSwgdCAtIDEpLCBhbihbXSwgYywgZnVuY3Rpb24obCkgewogICAgICAgICAgdmFyIHAgPSBuLCBmID0gbjsKICAgICAgICAgIGwgPSBbbFswXSwgbnVsbF0uY29uY2F0KGwuc2xpY2UoMSkpOwogICAgICAgICAgdmFyIGQgPSBzLCBoID0gbC5sZW5ndGg7CiAgICAgICAgICAyID4gaCAmJiB2KCJhcmdUeXBlcyBhcnJheSBzaXplIG1pc21hdGNoISBNdXN0IGF0IGxlYXN0IGdldCByZXR1cm4gdmFsdWUgYW5kICd0aGlzJyB0eXBlcyEiKTsKICAgICAgICAgIGZvciAodmFyIHcgPSBsWzFdICE9PSBudWxsICYmICExLCBUID0gITEsIG0gPSAxOyBtIDwgbC5sZW5ndGg7ICsrbSkgaWYgKGxbbV0gIT09IG51bGwgJiYgbFttXS5rYSA9PT0gdm9pZCAwKSB7CiAgICAgICAgICAgIFQgPSAhMDsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICB9CiAgICAgICAgICB2YXIgTiA9IGxbMF0ubmFtZSAhPT0gInZvaWQiLCBNID0gIiIsIGsgPSAiIjsKICAgICAgICAgIGZvciAobSA9IDA7IG0gPCBoIC0gMjsgKyttKSBNICs9IChtICE9PSAwID8gIiwgIiA6ICIiKSArICJhcmciICsgbSwgayArPSAobSAhPT0gMCA/ICIsICIgOiAiIikgKyAiYXJnIiArIG0gKyAiV2lyZWQiOwogICAgICAgICAgZiA9ICJyZXR1cm4gZnVuY3Rpb24gIiArIEJuKGYpICsgIigiICsgTSArIGApIHsKaWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IGAgKyAoaCAtIDIpICsgYCkgewp0aHJvd0JpbmRpbmdFcnJvcignZnVuY3Rpb24gYCArIGYgKyAiIGNhbGxlZCB3aXRoICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMsIGV4cGVjdGVkICIgKyAoaCAtIDIpICsgYCBhcmdzIScpOwp9CmAsIFQgJiYgKGYgKz0gYHZhciBkZXN0cnVjdG9ycyA9IFtdOwpgKTsKICAgICAgICAgIHZhciBqID0gVCA/ICJkZXN0cnVjdG9ycyIgOiAibnVsbCI7CiAgICAgICAgICBmb3IgKE0gPSAidGhyb3dCaW5kaW5nRXJyb3IgaW52b2tlciBmbiBydW5EZXN0cnVjdG9ycyByZXRUeXBlIGNsYXNzUGFyYW0iLnNwbGl0KCIgIiksIGQgPSBbdiwgZCwgdSwgYm4sIGxbMF0sIGxbMV1dLCB3ICYmIChmICs9ICJ2YXIgdGhpc1dpcmVkID0gY2xhc3NQYXJhbS50b1dpcmVUeXBlKCIgKyBqICsgYCwgdGhpcyk7CmApLCBtID0gMDsgbSA8IGggLSAyOyArK20pIGYgKz0gInZhciBhcmciICsgbSArICJXaXJlZCA9IGFyZ1R5cGUiICsgbSArICIudG9XaXJlVHlwZSgiICsgaiArICIsIGFyZyIgKyBtICsgIik7IC8vICIgKyBsW20gKyAyXS5uYW1lICsgYApgLCBNLnB1c2goImFyZ1R5cGUiICsgbSksIGQucHVzaChsW20gKyAyXSk7CiAgICAgICAgICBpZiAodyAmJiAoayA9ICJ0aGlzV2lyZWQiICsgKDAgPCBrLmxlbmd0aCA/ICIsICIgOiAiIikgKyBrKSwgZiArPSAoTiA/ICJ2YXIgcnYgPSAiIDogIiIpICsgImludm9rZXIoZm4iICsgKDAgPCBrLmxlbmd0aCA/ICIsICIgOiAiIikgKyBrICsgYCk7CmAsIFQpIGYgKz0gYHJ1bkRlc3RydWN0b3JzKGRlc3RydWN0b3JzKTsKYDsKICAgICAgICAgIGVsc2UgZm9yIChtID0gdyA/IDEgOiAyOyBtIDwgbC5sZW5ndGg7ICsrbSkgaCA9IG0gPT09IDEgPyAidGhpc1dpcmVkIiA6ICJhcmciICsgKG0gLSAyKSArICJXaXJlZCIsIGxbbV0ua2EgIT09IG51bGwgJiYgKGYgKz0gaCArICJfZHRvcigiICsgaCArICIpOyAvLyAiICsgbFttXS5uYW1lICsgYApgLCBNLnB1c2goaCArICJfZHRvciIpLCBkLnB1c2gobFttXS5rYSkpOwogICAgICAgICAgcmV0dXJuIE4gJiYgKGYgKz0gYHZhciByZXQgPSByZXRUeXBlLmZyb21XaXJlVHlwZShydik7CnJldHVybiByZXQ7CmApLCBNLnB1c2goZiArIGB9CmApLCBsID0gZGUoTSkuYXBwbHkobnVsbCwgZCksIEV0KHAsIGwsIHQgLSAxKSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGU6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIHMpIHsKICAgICAgICBmdW5jdGlvbiB1KGYpIHsKICAgICAgICAgIHJldHVybiBmOwogICAgICAgIH0KICAgICAgICB0ID0gVyh0KSwgcyA9PT0gLTEgJiYgKHMgPSA0Mjk0OTY3Mjk1KTsKICAgICAgICB2YXIgYyA9IHpuKHIpOwogICAgICAgIGlmIChpID09PSAwKSB7CiAgICAgICAgICB2YXIgbCA9IDMyIC0gOCAqIHI7CiAgICAgICAgICB1ID0gZnVuY3Rpb24oZikgewogICAgICAgICAgICByZXR1cm4gZiA8PCBsID4+PiBsOwogICAgICAgICAgfTsKICAgICAgICB9CiAgICAgICAgdmFyIHAgPSB0LmluZGV4T2YoInVuc2lnbmVkIikgIT0gLTE7CiAgICAgICAgeihuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogdSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oZiwgZCkgewogICAgICAgICAgaWYgKHR5cGVvZiBkICE9ICJudW1iZXIiICYmIHR5cGVvZiBkICE9ICJib29sZWFuIikgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgIicgKyBzbihkKSArICciIHRvICcgKyB0aGlzLm5hbWUpOwogICAgICAgICAgaWYgKGQgPCBpIHx8IGQgPiBzKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdQYXNzaW5nIGEgbnVtYmVyICInICsgc24oZCkgKyAnIiBmcm9tIEpTIHNpZGUgdG8gQy9DKysgc2lkZSB0byBhbiBhcmd1bWVudCBvZiB0eXBlICInICsgdCArICciLCB3aGljaCBpcyBvdXRzaWRlIHRoZSB2YWxpZCByYW5nZSBbJyArIGkgKyAiLCAiICsgcyArICJdISIpOwogICAgICAgICAgcmV0dXJuIHAgPyBkID4+PiAwIDogZCB8IDA7CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBoZSh0LCBjLCBpICE9PSAwKSwga2E6IG51bGwgfSk7CiAgICAgIH0sCiAgICAgIGQ6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBmdW5jdGlvbiBpKHUpIHsKICAgICAgICAgIHUgPj49IDI7CiAgICAgICAgICB2YXIgYyA9IFU7CiAgICAgICAgICByZXR1cm4gbmV3IHMobm4sIGNbdSArIDFdLCBjW3VdKTsKICAgICAgICB9CiAgICAgICAgdmFyIHMgPSBbSW50OEFycmF5LCBVaW50OEFycmF5LCBJbnQxNkFycmF5LCBVaW50MTZBcnJheSwgSW50MzJBcnJheSwgVWludDMyQXJyYXksIEZsb2F0MzJBcnJheSwgRmxvYXQ2NEFycmF5XVt0XTsKICAgICAgICByID0gVyhyKSwgeihuLCB7IG5hbWU6IHIsIGZyb21XaXJlVHlwZTogaSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBpIH0sIHsgRWE6ICEwIH0pOwogICAgICB9LAogICAgICBuOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdCA9IFcodCk7CiAgICAgICAgdmFyIHIgPSB0ID09PSAic3RkOjpzdHJpbmciOwogICAgICAgIHoobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICB2YXIgcyA9IFVbaSA+PiAyXTsKICAgICAgICAgICAgaWYgKHIpIGZvciAodmFyIHUgPSBpICsgNCwgYyA9IDA7IGMgPD0gczsgKytjKSB7CiAgICAgICAgICAgICAgdmFyIGwgPSBpICsgNCArIGM7CiAgICAgICAgICAgICAgaWYgKGMgPT0gcyB8fCBJW2xdID09IDApIHsKICAgICAgICAgICAgICAgIGlmICh1KSB7CiAgICAgICAgICAgICAgICAgIHZhciBwID0gdSwgZiA9IEksIGQgPSBwICsgKGwgLSB1KTsKICAgICAgICAgICAgICAgICAgZm9yICh1ID0gcDsgZlt1XSAmJiAhKHUgPj0gZCk7ICkgKyt1OwogICAgICAgICAgICAgICAgICBpZiAoMTYgPCB1IC0gcCAmJiBmLnN1YmFycmF5ICYmIGl0KSBwID0gaXQuZGVjb2RlKGYuc3ViYXJyYXkocCwgdSkpOwogICAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICBmb3IgKGQgPSAiIjsgcCA8IHU7ICkgewogICAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBmW3ArK107CiAgICAgICAgICAgICAgICAgICAgICBpZiAoaCAmIDEyOCkgewogICAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IGZbcCsrXSAmIDYzOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGggJiAyMjQpID09IDE5MikgZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChoICYgMzEpIDw8IDYgfCB3KTsKICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFQgPSBmW3ArK10gJiA2MzsKICAgICAgICAgICAgICAgICAgICAgICAgICBoID0gKGggJiAyNDApID09IDIyNCA/IChoICYgMTUpIDw8IDEyIHwgdyA8PCA2IHwgVCA6IChoICYgNykgPDwgMTggfCB3IDw8IDEyIHwgVCA8PCA2IHwgZltwKytdICYgNjMsIDY1NTM2ID4gaCA/IGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShoKSA6IChoIC09IDY1NTM2LCBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTYgfCBoID4+IDEwLCA1NjMyMCB8IGggJiAxMDIzKSk7CiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoaCk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIHAgPSBkOwogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9IGVsc2UgcCA9ICIiOwogICAgICAgICAgICAgICAgaWYgKG0gPT09IHZvaWQgMCkgdmFyIG0gPSBwOwogICAgICAgICAgICAgICAgZWxzZSBtICs9ICJcMCIsIG0gKz0gcDsKICAgICAgICAgICAgICAgIHUgPSBsICsgMTsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgZm9yIChtID0gQXJyYXkocyksIGMgPSAwOyBjIDwgczsgKytjKSBtW2NdID0gU3RyaW5nLmZyb21DaGFyQ29kZShJW2kgKyA0ICsgY10pOwogICAgICAgICAgICAgIG0gPSBtLmpvaW4oIiIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiBEKGkpLCBtOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIHMpIHsKICAgICAgICAgICAgcyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyICYmIChzID0gbmV3IFVpbnQ4QXJyYXkocykpOwogICAgICAgICAgICB2YXIgdSA9IHR5cGVvZiBzID09ICJzdHJpbmciOwogICAgICAgICAgICB1IHx8IHMgaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IHMgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSB8fCBzIGluc3RhbmNlb2YgSW50OEFycmF5IHx8IHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gc3RkOjpzdHJpbmciKTsKICAgICAgICAgICAgdmFyIGMgPSAociAmJiB1ID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IDAsIGQgPSAwOyBkIDwgcy5sZW5ndGg7ICsrZCkgewogICAgICAgICAgICAgICAgdmFyIGggPSBzLmNoYXJDb2RlQXQoZCk7CiAgICAgICAgICAgICAgICA1NTI5NiA8PSBoICYmIDU3MzQzID49IGggJiYgKGggPSA2NTUzNiArICgoaCAmIDEwMjMpIDw8IDEwKSB8IHMuY2hhckNvZGVBdCgrK2QpICYgMTAyMyksIDEyNyA+PSBoID8gKytmIDogZiA9IDIwNDcgPj0gaCA/IGYgKyAyIDogNjU1MzUgPj0gaCA/IGYgKyAzIDogZiArIDQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHJldHVybiBmOwogICAgICAgICAgICB9IDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgcmV0dXJuIHMubGVuZ3RoOwogICAgICAgICAgICB9KSgpLCBsID0gTW4oNCArIGMgKyAxKTsKICAgICAgICAgICAgaWYgKFVbbCA+PiAyXSA9IGMsIHIgJiYgdSkgWXQocywgbCArIDQsIGMgKyAxKTsKICAgICAgICAgICAgZWxzZSBpZiAodSkgZm9yICh1ID0gMDsgdSA8IGM7ICsrdSkgewogICAgICAgICAgICAgIHZhciBwID0gcy5jaGFyQ29kZUF0KHUpOwogICAgICAgICAgICAgIDI1NSA8IHAgJiYgKEQobCksIHYoIlN0cmluZyBoYXMgVVRGLTE2IGNvZGUgdW5pdHMgdGhhdCBkbyBub3QgZml0IGluIDggYml0cyIpKSwgSVtsICsgNCArIHVdID0gcDsKICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIGZvciAodSA9IDA7IHUgPCBjOyArK3UpIElbbCArIDQgKyB1XSA9IHNbdV07CiAgICAgICAgICAgIHJldHVybiBpICE9PSBudWxsICYmIGkucHVzaChELCBsKSwgbDsKICAgICAgICAgIH0sCiAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBUbiwKICAgICAgICAgIGthOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIEQoaSk7CiAgICAgICAgICB9CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGo6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBpZiAociA9IFcociksIHQgPT09IDIpCiAgICAgICAgICB2YXIgaSA9IFp0LCBzID0gSnQsIHUgPSBLdCwgYyA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICByZXR1cm4gZ247CiAgICAgICAgICB9LCBsID0gMTsKICAgICAgICBlbHNlIHQgPT09IDQgJiYgKGkgPSBRdCwgcyA9IFh0LCB1ID0gcXQsIGMgPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiBVOwogICAgICAgIH0sIGwgPSAyKTsKICAgICAgICB6KG4sIHsgbmFtZTogciwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihwKSB7CiAgICAgICAgICBmb3IgKHZhciBmID0gVVtwID4+IDJdLCBkID0gYygpLCBoLCB3ID0gcCArIDQsIFQgPSAwOyBUIDw9IGY7ICsrVCkgewogICAgICAgICAgICB2YXIgbSA9IHAgKyA0ICsgVCAqIHQ7CiAgICAgICAgICAgIChUID09IGYgfHwgZFttID4+IGxdID09IDApICYmICh3ID0gaSh3LCBtIC0gdyksIGggPT09IHZvaWQgMCA/IGggPSB3IDogKGggKz0gIlwwIiwgaCArPSB3KSwgdyA9IG0gKyB0KTsKICAgICAgICAgIH0KICAgICAgICAgIHJldHVybiBEKHApLCBoOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHAsIGYpIHsKICAgICAgICAgIHR5cGVvZiBmICE9ICJzdHJpbmciICYmIHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gQysrIHN0cmluZyB0eXBlICIgKyByKTsKICAgICAgICAgIHZhciBkID0gdShmKSwgaCA9IE1uKDQgKyBkICsgdCk7CiAgICAgICAgICByZXR1cm4gVVtoID4+IDJdID0gZCA+PiBsLCBzKGYsIGggKyA0LCBkICsgdCksIHAgIT09IG51bGwgJiYgcC5wdXNoKEQsIGgpLCBoOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogVG4sIGthOiBmdW5jdGlvbihwKSB7CiAgICAgICAgICBEKHApOwogICAgICAgIH0gfSk7CiAgICAgIH0sCiAgICAgIHg6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gVyh0KSwgeihuLCB7IFFhOiAhMCwgbmFtZTogdCwgYXJnUGFja0FkdmFuY2U6IDAsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSB9KTsKICAgICAgfSwKICAgICAgazogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIG4gPSBLbihuKSwgdCA9IE10KHQsICJlbXZhbDo6YXMiKTsKICAgICAgICB2YXIgaSA9IFtdLCBzID0gb24oaSk7CiAgICAgICAgcmV0dXJuIFNbciA+PiAyXSA9IHMsIHQudG9XaXJlVHlwZShpLCBuKTsKICAgICAgfSwKICAgICAgaTogSm4sCiAgICAgIGw6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICByZXR1cm4gbiA9IEtuKG4pLCB0ID0gS24odCksIG9uKG5bdF0pOwogICAgICB9LAogICAgICBwOiBmdW5jdGlvbihuKSB7CiAgICAgICAgdmFyIHQgPSBwZVtuXTsKICAgICAgICByZXR1cm4gb24odCA9PT0gdm9pZCAwID8gVyhuKSA6IHQpOwogICAgICB9LAogICAgICBvOiBmdW5jdGlvbihuKSB7CiAgICAgICAgYm4oeFtuXS52YWx1ZSksIEpuKG4pOwogICAgICB9LAogICAgICB5OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgcmV0dXJuIG4gPSBNdChuLCAiX2VtdmFsX3Rha2VfdmFsdWUiKSwgbiA9IG4ucmVhZFZhbHVlRnJvbVBvaW50ZXIodCksIG9uKG4pOwogICAgICB9LAogICAgICBmOiBmdW5jdGlvbigpIHsKICAgICAgICBmbigpOwogICAgICB9LAogICAgICBxOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgSS5jb3B5V2l0aGluKG4sIHQsIHQgKyByKTsKICAgICAgfSwKICAgICAgcjogZnVuY3Rpb24obikgewogICAgICAgIG4gPj4+PSAwOwogICAgICAgIHZhciB0ID0gSS5sZW5ndGg7CiAgICAgICAgaWYgKDIxNDc0ODM2NDggPCBuKSByZXR1cm4gITE7CiAgICAgICAgZm9yICh2YXIgciA9IDE7IDQgPj0gcjsgciAqPSAyKSB7CiAgICAgICAgICB2YXIgaSA9IHQgKiAoMSArIDAuMiAvIHIpOwogICAgICAgICAgaSA9IE1hdGgubWluKGksIG4gKyAxMDA2NjMyOTYpLCBpID0gTWF0aC5tYXgoMTY3NzcyMTYsIG4sIGkpLCAwIDwgaSAlIDY1NTM2ICYmIChpICs9IDY1NTM2IC0gaSAlIDY1NTM2KTsKICAgICAgICAgIG46IHsKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICBZLmdyb3coTWF0aC5taW4oMjE0NzQ4MzY0OCwgaSkgLSBubi5ieXRlTGVuZ3RoICsgNjU1MzUgPj4+IDE2KSwgdXQoWS5idWZmZXIpOwogICAgICAgICAgICAgIHZhciBzID0gMTsKICAgICAgICAgICAgICBicmVhayBuOwogICAgICAgICAgICB9IGNhdGNoIHsKICAgICAgICAgICAgfQogICAgICAgICAgICBzID0gdm9pZCAwOwogICAgICAgICAgfQogICAgICAgICAgaWYgKHMpIHJldHVybiAhMDsKICAgICAgICB9CiAgICAgICAgcmV0dXJuICExOwogICAgICB9LAogICAgICBzOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSAwOwogICAgICAgIHJldHVybiBXdCgpLmZvckVhY2goZnVuY3Rpb24oaSwgcykgewogICAgICAgICAgdmFyIHUgPSB0ICsgcjsKICAgICAgICAgIGZvciAocyA9IFNbbiArIDQgKiBzID4+IDJdID0gdSwgdSA9IDA7IHUgPCBpLmxlbmd0aDsgKyt1KSBaW3MrKyA+PiAwXSA9IGkuY2hhckNvZGVBdCh1KTsKICAgICAgICAgIFpbcyA+PiAwXSA9IDAsIHIgKz0gaS5sZW5ndGggKyAxOwogICAgICAgIH0pLCAwOwogICAgICB9LAogICAgICB0OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSBXdCgpOwogICAgICAgIFNbbiA+PiAyXSA9IHIubGVuZ3RoOwogICAgICAgIHZhciBpID0gMDsKICAgICAgICByZXR1cm4gci5mb3JFYWNoKGZ1bmN0aW9uKHMpIHsKICAgICAgICAgIGkgKz0gcy5sZW5ndGggKyAxOwogICAgICAgIH0pLCBTW3QgPj4gMl0gPSBpLCAwOwogICAgICB9LAogICAgICBhOiBZCiAgICB9OwogICAgKGZ1bmN0aW9uKCkgewogICAgICBmdW5jdGlvbiBuKHUpIHsKICAgICAgICB1ID0gdS5leHBvcnRzLCB1ID0gUnQodSksIGUuYXNtID0gdSwgSi0tLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKEopLCBKID09IDAgJiYgY24gJiYgKHUgPSBjbiwgY24gPSBudWxsLCB1KCkpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIHQodSkgewogICAgICAgIG4odS5pbnN0YW5jZSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gcih1KSB7CiAgICAgICAgcmV0dXJuIGVlKCkudGhlbihmdW5jdGlvbihjKSB7CiAgICAgICAgICByZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoYywgaSk7CiAgICAgICAgfSkudGhlbih1LCBmdW5jdGlvbihjKSB7CiAgICAgICAgICBQKCJmYWlsZWQgdG8gYXN5bmNocm9ub3VzbHkgcHJlcGFyZSB3YXNtOiAiICsgYyksIGZuKGMpOwogICAgICAgIH0pOwogICAgICB9CiAgICAgIHZhciBpID0geyBhOiBtZSB9OwogICAgICBpZiAoSisrLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKEopLCBlLmluc3RhbnRpYXRlV2FzbSkgdHJ5IHsKICAgICAgICB2YXIgcyA9IGUuaW5zdGFudGlhdGVXYXNtKGksIG4pOwogICAgICAgIHJldHVybiBzID0gUnQocyk7CiAgICAgIH0gY2F0Y2ggKHUpIHsKICAgICAgICByZXR1cm4gUCgiTW9kdWxlLmluc3RhbnRpYXRlV2FzbSBjYWxsYmFjayBmYWlsZWQgd2l0aCBlcnJvcjogIiArIHUpLCAhMTsKICAgICAgfQogICAgICByZXR1cm4gZnVuY3Rpb24oKSB7CiAgICAgICAgaWYgKEwgfHwgdHlwZW9mIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nICE9ICJmdW5jdGlvbiIgfHwgaHQoKSB8fCBIbigiZmlsZTovLyIpIHx8IHR5cGVvZiBmZXRjaCAhPSAiZnVuY3Rpb24iKSByZXR1cm4gcih0KTsKICAgICAgICBmZXRjaChLLCB7IGNyZWRlbnRpYWxzOiAic2FtZS1vcmlnaW4iIH0pLnRoZW4oZnVuY3Rpb24odSkgewogICAgICAgICAgcmV0dXJuIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKHUsIGkpLnRoZW4odCwgZnVuY3Rpb24oYykgewogICAgICAgICAgICByZXR1cm4gUCgid2FzbSBzdHJlYW1pbmcgY29tcGlsZSBmYWlsZWQ6ICIgKyBjKSwgUCgiZmFsbGluZyBiYWNrIHRvIEFycmF5QnVmZmVyIGluc3RhbnRpYXRpb24iKSwgcih0KTsKICAgICAgICAgIH0pOwogICAgICAgIH0pOwogICAgICB9KCksIHt9OwogICAgfSkoKTsKICAgIHZhciB4dCA9IGUuX19fd2FzbV9jYWxsX2N0b3JzID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoeHQgPSBlLl9fX3dhc21fY2FsbF9jdG9ycyA9IGUuYXNtLkIpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBNbiA9IGUuX21hbGxvYyA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKE1uID0gZS5fbWFsbG9jID0gZS5hc20uQykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIEQgPSBlLl9mcmVlID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoRCA9IGUuX2ZyZWUgPSBlLmFzbS5EKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgRnQgPSBlLl9fX2dldFR5cGVOYW1lID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoRnQgPSBlLl9fX2dldFR5cGVOYW1lID0gZS5hc20uRSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH07CiAgICBlLl9fX2VtYmluZF9yZWdpc3Rlcl9uYXRpdmVfYW5kX2J1aWx0aW5fdHlwZXMgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9fX2VtYmluZF9yZWdpc3Rlcl9uYXRpdmVfYW5kX2J1aWx0aW5fdHlwZXMgPSBlLmFzbS5GKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpID0gZS5hc20uRykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aSA9IGUuYXNtLkgpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9pID0gZS5hc20uSSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpID0gZS5hc20uSikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWkgPSBlLmFzbS5LKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2ZpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9maWkgPSBlLmFzbS5MKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWYgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpZiA9IGUuYXNtLk0pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWkgPSBlLmFzbS5OKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaSA9IGUuYXNtLk8pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpaSA9IGUuYXNtLlApLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaSA9IGUuYXNtLlEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWlpaWkgPSBlLmFzbS5SKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpID0gZS5hc20uUykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlpZGkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaWRpID0gZS5hc20uVCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlkaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlkaSA9IGUuYXNtLlUpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaWkgPSBlLmFzbS5WKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaSA9IGUuYXNtLlcpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaSA9IGUuYXNtLlgpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWlpID0gZS5hc20uWSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaSA9IGUuYXNtLlopLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpID0gZS5hc20uXykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0YXJ0X3Vud2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0YXJ0X3Vud2luZCA9IGUuYXNtLiQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdG9wX3Vud2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0b3BfdW53aW5kID0gZS5hc20uYWEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdGFydF9yZXdpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdGFydF9yZXdpbmQgPSBlLmFzbS5iYSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0b3BfcmV3aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RvcF9yZXdpbmQgPSBlLmFzbS5jYSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH07CiAgICB2YXIgU247CiAgICBjbiA9IGZ1bmN0aW9uIG4oKSB7CiAgICAgIFNuIHx8IFhuKCksIFNuIHx8IChjbiA9IG4pOwogICAgfTsKICAgIGZ1bmN0aW9uIFhuKCkgewogICAgICBmdW5jdGlvbiBuKCkgewogICAgICAgIGlmICghU24gJiYgKFNuID0gITAsIGUuY2FsbGVkUnVuID0gITAsICFObikpIHsKICAgICAgICAgIGlmICh3bihmdCksIHduKG5lKSwgeShlKSwgZS5vblJ1bnRpbWVJbml0aWFsaXplZCAmJiBlLm9uUnVudGltZUluaXRpYWxpemVkKCksIGUucG9zdFJ1bikgZm9yICh0eXBlb2YgZS5wb3N0UnVuID09ICJmdW5jdGlvbiIgJiYgKGUucG9zdFJ1biA9IFtlLnBvc3RSdW5dKTsgZS5wb3N0UnVuLmxlbmd0aDsgKSB7CiAgICAgICAgICAgIHZhciB0ID0gZS5wb3N0UnVuLnNoaWZ0KCk7CiAgICAgICAgICAgIGR0LnVuc2hpZnQodCk7CiAgICAgICAgICB9CiAgICAgICAgICB3bihkdCk7CiAgICAgICAgfQogICAgICB9CiAgICAgIGlmICghKDAgPCBKKSkgewogICAgICAgIGlmIChlLnByZVJ1bikgZm9yICh0eXBlb2YgZS5wcmVSdW4gPT0gImZ1bmN0aW9uIiAmJiAoZS5wcmVSdW4gPSBbZS5wcmVSdW5dKTsgZS5wcmVSdW4ubGVuZ3RoOyApIHRlKCk7CiAgICAgICAgd24oY3QpLCAwIDwgSiB8fCAoZS5zZXRTdGF0dXMgPyAoZS5zZXRTdGF0dXMoIlJ1bm5pbmcuLi4iKSwgc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGUuc2V0U3RhdHVzKCIiKTsKICAgICAgICAgIH0sIDEpLCBuKCk7CiAgICAgICAgfSwgMSkpIDogbigpKTsKICAgICAgfQogICAgfQogICAgaWYgKGUucnVuID0gWG4sIGUucHJlSW5pdCkgZm9yICh0eXBlb2YgZS5wcmVJbml0ID09ICJmdW5jdGlvbiIgJiYgKGUucHJlSW5pdCA9IFtlLnByZUluaXRdKTsgMCA8IGUucHJlSW5pdC5sZW5ndGg7ICkgZS5wcmVJbml0LnBvcCgpKCk7CiAgICByZXR1cm4gWG4oKSwgby5yZWFkeTsKICB9Owp9KCk7CmNsYXNzIEYgZXh0ZW5kcyBFcnJvciB7CiAgY29uc3RydWN0b3IoZSwgeSkgewogICAgc3VwZXIoZSk7CiAgICBxbih0aGlzLCAiY2F1c2UiKTsKICAgIHRoaXMubmFtZSA9ICJBdXRvQ2FwdHVyZUVycm9yIiwgdGhpcy5jYXVzZSA9IHk7CiAgfQogIC8vIENoYW5nZSB0aGlzIHRvIERlY29yYXRvciB3aGVuIHRoZXkgd2lsbCBiZSBpbiBzdGFibGUgcmVsZWFzZQogIHN0YXRpYyBsb2dFcnJvcihlKSB7CiAgfQogIHN0YXRpYyBmcm9tQ2FtZXJhRXJyb3IoZSkgewogICAgaWYgKHRoaXMubG9nRXJyb3IoZSksIGUgaW5zdGFuY2VvZiBGKQogICAgICByZXR1cm4gZTsKICAgIGxldCB5OwogICAgc3dpdGNoIChlLm5hbWUpIHsKICAgICAgY2FzZSAiT3ZlcmNvbnN0cmFpbmVkRXJyb3IiOgogICAgICAgIHkgPSAiTWluaW11bSBxdWFsaXR5IHJlcXVpcmVtZW50cyBhcmUgbm90IG1ldCBieSB5b3VyIGNhbWVyYSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdFJlYWRhYmxlRXJyb3IiOgogICAgICBjYXNlICJBYm9ydEVycm9yIjoKICAgICAgICB5ID0gIlRoZSB3ZWJjYW0gaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciBhcHBsaWNhdGlvbiI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdEFsbG93ZWRFcnJvciI6CiAgICAgICAgeSA9ICJUbyB1c2UgeW91ciBjYW1lcmEsIHlvdSBtdXN0IGFsbG93IHBlcm1pc3Npb25zIjsKICAgICAgICBicmVhazsKICAgICAgY2FzZSAiTm90Rm91bmRFcnJvciI6CiAgICAgICAgeSA9ICJUaGVyZSBpcyBubyBjYW1lcmEgYXZhaWxhYmxlIHRvIHlvdSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGRlZmF1bHQ6CiAgICAgICAgeSA9ICJBbiB1bmtub3duIGNhbWVyYSBlcnJvciBoYXMgb2NjdXJyZWQiOwogICAgICAgIGJyZWFrOwogICAgfQogICAgcmV0dXJuIG5ldyBGKHksIGUpOwogIH0KICBzdGF0aWMgZnJvbUVycm9yKGUpIHsKICAgIGlmICh0aGlzLmxvZ0Vycm9yKGUpLCBlIGluc3RhbmNlb2YgRikKICAgICAgcmV0dXJuIGU7CiAgICBjb25zdCB5ID0gIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkIjsKICAgIHJldHVybiBuZXcgRih5KTsKICB9Cn0KY29uc3QgQWUgPSB7CiAgUkdCOiAiUkdCIiwKICBSR0JBOiAiUkdCQSIKfTsKdmFyICQsIHEsIGxuOwpjbGFzcyBfZSB7CiAgY29uc3RydWN0b3IobywgZSkgewogICAgV24odGhpcywgJCk7CiAgICBXbih0aGlzLCBxKTsKICAgIFduKHRoaXMsIGxuKTsKICAgIGtuKHRoaXMsICQsIG8pLCBrbih0aGlzLCBxLCB0aGlzLmFsbG9jYXRlKGUubGVuZ3RoICogZS5CWVRFU19QRVJfRUxFTUVOVCkpLCBrbih0aGlzLCBsbiwgdGhpcy5hbGxvY2F0ZShlLmxlbmd0aCAqIGUuQllURVNfUEVSX0VMRU1FTlQpKTsKICB9CiAgZ2V0IHJnYmFJbWFnZVBvaW50ZXIoKSB7CiAgICByZXR1cm4gSCh0aGlzLCBxKTsKICB9CiAgZ2V0IGJncjBJbWFnZVBvaW50ZXIoKSB7CiAgICByZXR1cm4gSCh0aGlzLCBsbik7CiAgfQogIGFsbG9jYXRlKG8pIHsKICAgIHJldHVybiBIKHRoaXMsICQpLl9tYWxsb2Mobyk7CiAgfQogIGZyZWUoKSB7CiAgICBIKHRoaXMsICQpLl9mcmVlKEgodGhpcywgcSkpLCBIKHRoaXMsICQpLl9mcmVlKEgodGhpcywgbG4pKTsKICB9CiAgd3JpdGVEYXRhVG9NZW1vcnkobykgewogICAgSCh0aGlzLCAkKS5IRUFQVTguc2V0KG8sIEgodGhpcywgcSkpOwogIH0KfQokID0gbmV3IFdlYWtNYXAoKSwgcSA9IG5ldyBXZWFrTWFwKCksIGxuID0gbmV3IFdlYWtNYXAoKTsKY2xhc3MgQ2UgewogIGNvbnN0cnVjdG9yKCkgewogICAgcW4odGhpcywgInNhbVdhc21Nb2R1bGUiKTsKICB9CiAgZ2V0T3ZlcnJpZGRlbk1vZHVsZXMobywgZSkgewogICAgcmV0dXJuIHsKICAgICAgbG9jYXRlRmlsZTogKHkpID0+IG5ldyBVUkwoZSB8fCB5LCBvKS5ocmVmCiAgICB9OwogIH0KICBhc3luYyBoYW5kbGVNaXNzaW5nT3JJbnZhbGlkU2FtTW9kdWxlKG8sIGUpIHsKICAgIHRyeSB7CiAgICAgIGNvbnN0IHkgPSBhd2FpdCBmZXRjaChvKTsKICAgICAgaWYgKCF5Lm9rKQogICAgICAgIHRocm93IG5ldyBGKAogICAgICAgICAgYFRoZSBwYXRoIHRvICR7ZX0gaXMgaW5jb3JyZWN0IG9yIHRoZSBtb2R1bGUgaXMgbWlzc2luZy4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7b31gCiAgICAgICAgKTsKICAgICAgY29uc3QgZyA9IGF3YWl0IHkuYXJyYXlCdWZmZXIoKTsKICAgICAgaWYgKCFXZWJBc3NlbWJseS52YWxpZGF0ZShnKSkKICAgICAgICB0aHJvdyBuZXcgRigKICAgICAgICAgIGBUaGUgcHJvdmlkZWQgJHtlfSBpcyBub3QgYSB2YWxpZCBXQVNNIG1vZHVsZS4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7b31gCiAgICAgICAgKTsKICAgIH0gY2F0Y2ggKHkpIHsKICAgICAgaWYgKHkgaW5zdGFuY2VvZiBGKQogICAgICAgIHRocm93IGNvbnNvbGUuZXJyb3IoCiAgICAgICAgICAiWW91IGNhbiBmaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgaG93IHRvIGhvc3Qgd2FzbSBmaWxlcyBoZXJlOiBodHRwczovL2RldmVsb3BlcnMuaW5ub3ZhdHJpY3MuY29tL2RpZ2l0YWwtb25ib2FyZGluZy90ZWNobmljYWwvcmVtb3RlL2RvdC13ZWItZG9jdW1lbnQvbGF0ZXN0L2RvY3VtZW50YXRpb24vI19ob3N0aW5nX3NhbV93YXNtIgogICAgICAgICksIHk7CiAgICB9CiAgfQogIGFzeW5jIGdldFdhc21GaWxlTmFtZSgpIHsKICAgIHJldHVybiBhd2FpdCBnZSgpID8gSHQuc2ltZCA6IEh0LnNhbTsKICB9CiAgYXN5bmMgaW5pdFNhbU1vZHVsZShvLCBlID0gIi93YXNtIikgewogICAgaWYgKHRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgcmV0dXJuOwogICAgY29uc3QgeSA9IGF3YWl0IHRoaXMuZ2V0V2FzbUZpbGVOYW1lKCksIGcgPSBgJHtlfS8ke3l9YDsKICAgIHRyeSB7CiAgICAgIHRoaXMuc2FtV2FzbU1vZHVsZSA9IGF3YWl0IHdlKHRoaXMuZ2V0T3ZlcnJpZGRlbk1vZHVsZXMobywgZykpOwogICAgfSBjYXRjaCB7CiAgICAgIHRocm93IGF3YWl0IHRoaXMuaGFuZGxlTWlzc2luZ09ySW52YWxpZFNhbU1vZHVsZShnLCB5KSwgbmV3IEYoIkNvdWxkIG5vdCBpbml0IGRldGVjdG9yLiIpOwogICAgfQogIH0KICBhc3luYyBnZXRTYW1WZXJzaW9uKCkgewogICAgdmFyIGU7CiAgICBjb25zdCBvID0gYXdhaXQgKChlID0gdGhpcy5zYW1XYXNtTW9kdWxlKSA9PSBudWxsID8gdm9pZCAwIDogZS5nZXRJbmZvU3RyaW5nKCkpOwogICAgcmV0dXJuIG8gPT0gbnVsbCA/IHZvaWQgMCA6IG8udHJpbSgpOwogIH0KICAvKgogICAqIEluIFRTIDUuMi4wIHdhcyBhZGRlZCBzcGVjaWFsIGtleXdvcmQgInVzaW5nIiB3aGljaCBjb3VsZCBiZSBwZXJmZWN0IGZvciB0aGlzIGNhc2UuCiAgICogVW5mb3J0dW5hdGVseSwgdml0ZSBwcmVhY3QgcGx1Z2luIGRvZXMgbm90IHN1cHBvcnQgdGhpcyB2ZXJzaW9uIG9mIFRTIHlldC4KICAgKiBDaGVjayBwb3NzaWJpbGl0eSBvZiB1c2luZyAidXNpbmciIGtleXdvcmQgd2hlbiB2aXRlIHByZWFjdCBwbHVnaW4gdXBkYXRlcwogICAqLwogIHdyaXRlSW1hZ2VUb01lbW9yeShvKSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IEYoIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIGNvbnN0IGUgPSBuZXcgX2UodGhpcy5zYW1XYXNtTW9kdWxlLCBvKTsKICAgIHJldHVybiBlLndyaXRlRGF0YVRvTWVtb3J5KG8pLCBlOwogIH0KICBjb252ZXJ0VG9TYW1Db2xvckltYWdlKG8sIGUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgRigiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgY29uc3QgeSA9IHRoaXMud3JpdGVJbWFnZVRvTWVtb3J5KG8pOwogICAgcmV0dXJuIHRoaXMuc2FtV2FzbU1vZHVsZS5jb252ZXJ0VG9TYW1Db2xvckltYWdlKAogICAgICBlLndpZHRoLAogICAgICBlLmhlaWdodCwKICAgICAgeS5yZ2JhSW1hZ2VQb2ludGVyLAogICAgICBBZS5SR0JBLAogICAgICB5LmJncjBJbWFnZVBvaW50ZXIKICAgICksIHk7CiAgfQp9CmNvbnN0IFJuID0gKGEsIG8pID0+IE1hdGguaHlwb3Qoby54IC0gYS54LCBvLnkgLSBhLnkpLCBFZSA9IChhKSA9PiB7CiAgY29uc3QgeyBib3R0b21MZWZ0OiBvLCBib3R0b21SaWdodDogZSwgdG9wTGVmdDogeSwgdG9wUmlnaHQ6IGcgfSA9IGEsIEMgPSBSbih5LCBnKSwgQSA9IFJuKGcsIGUpLCBiID0gUm4obywgZSksIE8gPSBSbih5LCBvKTsKICByZXR1cm4gTWF0aC5taW4oQywgQSwgYiwgTyk7Cn07Ci8qKgogKiBAbGljZW5zZQogKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDCiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wCiAqLwpjb25zdCB6dCA9IFN5bWJvbCgiQ29tbGluay5wcm94eSIpLCBUZSA9IFN5bWJvbCgiQ29tbGluay5lbmRwb2ludCIpLCBQZSA9IFN5bWJvbCgiQ29tbGluay5yZWxlYXNlUHJveHkiKSwgbnQgPSBTeW1ib2woIkNvbWxpbmsuZmluYWxpemVyIiksIHhuID0gU3ltYm9sKCJDb21saW5rLnRocm93biIpLCBCdCA9IChhKSA9PiB0eXBlb2YgYSA9PSAib2JqZWN0IiAmJiBhICE9PSBudWxsIHx8IHR5cGVvZiBhID09ICJmdW5jdGlvbiIsIGJlID0gewogIGNhbkhhbmRsZTogKGEpID0+IEJ0KGEpICYmIGFbenRdLAogIHNlcmlhbGl6ZShhKSB7CiAgICBjb25zdCB7IHBvcnQxOiBvLCBwb3J0MjogZSB9ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7CiAgICByZXR1cm4gZXQoYSwgbyksIFtlLCBbZV1dOwogIH0sCiAgZGVzZXJpYWxpemUoYSkgewogICAgcmV0dXJuIGEuc3RhcnQoKSwgV2UoYSk7CiAgfQp9LCBPZSA9IHsKICBjYW5IYW5kbGU6IChhKSA9PiBCdChhKSAmJiB4biBpbiBhLAogIHNlcmlhbGl6ZSh7IHZhbHVlOiBhIH0pIHsKICAgIGxldCBvOwogICAgcmV0dXJuIGEgaW5zdGFuY2VvZiBFcnJvciA/IG8gPSB7CiAgICAgIGlzRXJyb3I6ICEwLAogICAgICB2YWx1ZTogewogICAgICAgIG1lc3NhZ2U6IGEubWVzc2FnZSwKICAgICAgICBuYW1lOiBhLm5hbWUsCiAgICAgICAgc3RhY2s6IGEuc3RhY2sKICAgICAgfQogICAgfSA6IG8gPSB7IGlzRXJyb3I6ICExLCB2YWx1ZTogYSB9LCBbbywgW11dOwogIH0sCiAgZGVzZXJpYWxpemUoYSkgewogICAgdGhyb3cgYS5pc0Vycm9yID8gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoYS52YWx1ZS5tZXNzYWdlKSwgYS52YWx1ZSkgOiBhLnZhbHVlOwogIH0KfSwgRHQgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcChbCiAgWyJwcm94eSIsIGJlXSwKICBbInRocm93IiwgT2VdCl0pOwpmdW5jdGlvbiBNZShhLCBvKSB7CiAgZm9yIChjb25zdCBlIG9mIGEpCiAgICBpZiAobyA9PT0gZSB8fCBlID09PSAiKiIgfHwgZSBpbnN0YW5jZW9mIFJlZ0V4cCAmJiBlLnRlc3QobykpCiAgICAgIHJldHVybiAhMDsKICByZXR1cm4gITE7Cn0KZnVuY3Rpb24gZXQoYSwgbyA9IGdsb2JhbFRoaXMsIGUgPSBbIioiXSkgewogIG8uYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGZ1bmN0aW9uIHkoZykgewogICAgaWYgKCFnIHx8ICFnLmRhdGEpCiAgICAgIHJldHVybjsKICAgIGlmICghTWUoZSwgZy5vcmlnaW4pKSB7CiAgICAgIGNvbnNvbGUud2FybihgSW52YWxpZCBvcmlnaW4gJyR7Zy5vcmlnaW59JyBmb3IgY29tbGluayBwcm94eWApOwogICAgICByZXR1cm47CiAgICB9CiAgICBjb25zdCB7IGlkOiBDLCB0eXBlOiBBLCBwYXRoOiBiIH0gPSBPYmplY3QuYXNzaWduKHsgcGF0aDogW10gfSwgZy5kYXRhKSwgTyA9IChnLmRhdGEuYXJndW1lbnRMaXN0IHx8IFtdKS5tYXAoWCk7CiAgICBsZXQgRTsKICAgIHRyeSB7CiAgICAgIGNvbnN0IF8gPSBiLnNsaWNlKDAsIC0xKS5yZWR1Y2UoKFAsIEwpID0+IFBbTF0sIGEpLCBSID0gYi5yZWR1Y2UoKFAsIEwpID0+IFBbTF0sIGEpOwogICAgICBzd2l0Y2ggKEEpIHsKICAgICAgICBjYXNlICJHRVQiOgogICAgICAgICAgRSA9IFI7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJTRVQiOgogICAgICAgICAgX1tiLnNsaWNlKC0xKVswXV0gPSBYKGcuZGF0YS52YWx1ZSksIEUgPSAhMDsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIkFQUExZIjoKICAgICAgICAgIEUgPSBSLmFwcGx5KF8sIE8pOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiQ09OU1RSVUNUIjoKICAgICAgICAgIHsKICAgICAgICAgICAgY29uc3QgUCA9IG5ldyBSKC4uLk8pOwogICAgICAgICAgICBFID0gRmUoUCk7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJFTkRQT0lOVCI6CiAgICAgICAgICB7CiAgICAgICAgICAgIGNvbnN0IHsgcG9ydDE6IFAsIHBvcnQyOiBMIH0gPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTsKICAgICAgICAgICAgZXQoYSwgTCksIEUgPSB4ZShQLCBbUF0pOwogICAgICAgICAgfQogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiUkVMRUFTRSI6CiAgICAgICAgICBFID0gdm9pZCAwOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHJldHVybjsKICAgICAgfQogICAgfSBjYXRjaCAoXykgewogICAgICBFID0geyB2YWx1ZTogXywgW3huXTogMCB9OwogICAgfQogICAgUHJvbWlzZS5yZXNvbHZlKEUpLmNhdGNoKChfKSA9PiAoeyB2YWx1ZTogXywgW3huXTogMCB9KSkudGhlbigoXykgPT4gewogICAgICBjb25zdCBbUiwgUF0gPSBqbihfKTsKICAgICAgby5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIFIpLCB7IGlkOiBDIH0pLCBQKSwgQSA9PT0gIlJFTEVBU0UiICYmIChvLnJlbW92ZUV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCB5KSwgVnQobyksIG50IGluIGEgJiYgdHlwZW9mIGFbbnRdID09ICJmdW5jdGlvbiIgJiYgYVtudF0oKSk7CiAgICB9KS5jYXRjaCgoXykgPT4gewogICAgICBjb25zdCBbUiwgUF0gPSBqbih7CiAgICAgICAgdmFsdWU6IG5ldyBUeXBlRXJyb3IoIlVuc2VyaWFsaXphYmxlIHJldHVybiB2YWx1ZSIpLAogICAgICAgIFt4bl06IDAKICAgICAgfSk7CiAgICAgIG8ucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBSKSwgeyBpZDogQyB9KSwgUCk7CiAgICB9KTsKICB9KSwgby5zdGFydCAmJiBvLnN0YXJ0KCk7Cn0KZnVuY3Rpb24gU2UoYSkgewogIHJldHVybiBhLmNvbnN0cnVjdG9yLm5hbWUgPT09ICJNZXNzYWdlUG9ydCI7Cn0KZnVuY3Rpb24gVnQoYSkgewogIFNlKGEpICYmIGEuY2xvc2UoKTsKfQpmdW5jdGlvbiBXZShhLCBvKSB7CiAgcmV0dXJuIHR0KGEsIFtdLCBvKTsKfQpmdW5jdGlvbiBJbihhKSB7CiAgaWYgKGEpCiAgICB0aHJvdyBuZXcgRXJyb3IoIlByb3h5IGhhcyBiZWVuIHJlbGVhc2VkIGFuZCBpcyBub3QgdXNlYWJsZSIpOwp9CmZ1bmN0aW9uIEd0KGEpIHsKICByZXR1cm4gdW4oYSwgewogICAgdHlwZTogIlJFTEVBU0UiCiAgfSkudGhlbigoKSA9PiB7CiAgICBWdChhKTsKICB9KTsKfQpjb25zdCBGbiA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpLCBMbiA9ICJGaW5hbGl6YXRpb25SZWdpc3RyeSIgaW4gZ2xvYmFsVGhpcyAmJiBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoKGEpID0+IHsKICBjb25zdCBvID0gKEZuLmdldChhKSB8fCAwKSAtIDE7CiAgRm4uc2V0KGEsIG8pLCBvID09PSAwICYmIEd0KGEpOwp9KTsKZnVuY3Rpb24ga2UoYSwgbykgewogIGNvbnN0IGUgPSAoRm4uZ2V0KG8pIHx8IDApICsgMTsKICBGbi5zZXQobywgZSksIExuICYmIExuLnJlZ2lzdGVyKGEsIG8sIGEpOwp9CmZ1bmN0aW9uIFJlKGEpIHsKICBMbiAmJiBMbi51bnJlZ2lzdGVyKGEpOwp9CmZ1bmN0aW9uIHR0KGEsIG8gPSBbXSwgZSA9IGZ1bmN0aW9uKCkgewp9KSB7CiAgbGV0IHkgPSAhMTsKICBjb25zdCBnID0gbmV3IFByb3h5KGUsIHsKICAgIGdldChDLCBBKSB7CiAgICAgIGlmIChJbih5KSwgQSA9PT0gUGUpCiAgICAgICAgcmV0dXJuICgpID0+IHsKICAgICAgICAgIFJlKGcpLCBHdChhKSwgeSA9ICEwOwogICAgICAgIH07CiAgICAgIGlmIChBID09PSAidGhlbiIpIHsKICAgICAgICBpZiAoby5sZW5ndGggPT09IDApCiAgICAgICAgICByZXR1cm4geyB0aGVuOiAoKSA9PiBnIH07CiAgICAgICAgY29uc3QgYiA9IHVuKGEsIHsKICAgICAgICAgIHR5cGU6ICJHRVQiLAogICAgICAgICAgcGF0aDogby5tYXAoKE8pID0+IE8udG9TdHJpbmcoKSkKICAgICAgICB9KS50aGVuKFgpOwogICAgICAgIHJldHVybiBiLnRoZW4uYmluZChiKTsKICAgICAgfQogICAgICByZXR1cm4gdHQoYSwgWy4uLm8sIEFdKTsKICAgIH0sCiAgICBzZXQoQywgQSwgYikgewogICAgICBJbih5KTsKICAgICAgY29uc3QgW08sIEVdID0gam4oYik7CiAgICAgIHJldHVybiB1bihhLCB7CiAgICAgICAgdHlwZTogIlNFVCIsCiAgICAgICAgcGF0aDogWy4uLm8sIEFdLm1hcCgoXykgPT4gXy50b1N0cmluZygpKSwKICAgICAgICB2YWx1ZTogTwogICAgICB9LCBFKS50aGVuKFgpOwogICAgfSwKICAgIGFwcGx5KEMsIEEsIGIpIHsKICAgICAgSW4oeSk7CiAgICAgIGNvbnN0IE8gPSBvW28ubGVuZ3RoIC0gMV07CiAgICAgIGlmIChPID09PSBUZSkKICAgICAgICByZXR1cm4gdW4oYSwgewogICAgICAgICAgdHlwZTogIkVORFBPSU5UIgogICAgICAgIH0pLnRoZW4oWCk7CiAgICAgIGlmIChPID09PSAiYmluZCIpCiAgICAgICAgcmV0dXJuIHR0KGEsIG8uc2xpY2UoMCwgLTEpKTsKICAgICAgY29uc3QgW0UsIF9dID0gVXQoYik7CiAgICAgIHJldHVybiB1bihhLCB7CiAgICAgICAgdHlwZTogIkFQUExZIiwKICAgICAgICBwYXRoOiBvLm1hcCgoUikgPT4gUi50b1N0cmluZygpKSwKICAgICAgICBhcmd1bWVudExpc3Q6IEUKICAgICAgfSwgXykudGhlbihYKTsKICAgIH0sCiAgICBjb25zdHJ1Y3QoQywgQSkgewogICAgICBJbih5KTsKICAgICAgY29uc3QgW2IsIE9dID0gVXQoQSk7CiAgICAgIHJldHVybiB1bihhLCB7CiAgICAgICAgdHlwZTogIkNPTlNUUlVDVCIsCiAgICAgICAgcGF0aDogby5tYXAoKEUpID0+IEUudG9TdHJpbmcoKSksCiAgICAgICAgYXJndW1lbnRMaXN0OiBiCiAgICAgIH0sIE8pLnRoZW4oWCk7CiAgICB9CiAgfSk7CiAgcmV0dXJuIGtlKGcsIGEpLCBnOwp9CmZ1bmN0aW9uIEllKGEpIHsKICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgYSk7Cn0KZnVuY3Rpb24gVXQoYSkgewogIGNvbnN0IG8gPSBhLm1hcChqbik7CiAgcmV0dXJuIFtvLm1hcCgoZSkgPT4gZVswXSksIEllKG8ubWFwKChlKSA9PiBlWzFdKSldOwp9CmNvbnN0ICR0ID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7CmZ1bmN0aW9uIHhlKGEsIG8pIHsKICByZXR1cm4gJHQuc2V0KGEsIG8pLCBhOwp9CmZ1bmN0aW9uIEZlKGEpIHsKICByZXR1cm4gT2JqZWN0LmFzc2lnbihhLCB7IFt6dF06ICEwIH0pOwp9CmZ1bmN0aW9uIGpuKGEpIHsKICBmb3IgKGNvbnN0IFtvLCBlXSBvZiBEdCkKICAgIGlmIChlLmNhbkhhbmRsZShhKSkgewogICAgICBjb25zdCBbeSwgZ10gPSBlLnNlcmlhbGl6ZShhKTsKICAgICAgcmV0dXJuIFsKICAgICAgICB7CiAgICAgICAgICB0eXBlOiAiSEFORExFUiIsCiAgICAgICAgICBuYW1lOiBvLAogICAgICAgICAgdmFsdWU6IHkKICAgICAgICB9LAogICAgICAgIGcKICAgICAgXTsKICAgIH0KICByZXR1cm4gWwogICAgewogICAgICB0eXBlOiAiUkFXIiwKICAgICAgdmFsdWU6IGEKICAgIH0sCiAgICAkdC5nZXQoYSkgfHwgW10KICBdOwp9CmZ1bmN0aW9uIFgoYSkgewogIHN3aXRjaCAoYS50eXBlKSB7CiAgICBjYXNlICJIQU5ETEVSIjoKICAgICAgcmV0dXJuIER0LmdldChhLm5hbWUpLmRlc2VyaWFsaXplKGEudmFsdWUpOwogICAgY2FzZSAiUkFXIjoKICAgICAgcmV0dXJuIGEudmFsdWU7CiAgfQp9CmZ1bmN0aW9uIHVuKGEsIG8sIGUpIHsKICByZXR1cm4gbmV3IFByb21pc2UoKHkpID0+IHsKICAgIGNvbnN0IGcgPSBMZSgpOwogICAgYS5hZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgZnVuY3Rpb24gQyhBKSB7CiAgICAgICFBLmRhdGEgfHwgIUEuZGF0YS5pZCB8fCBBLmRhdGEuaWQgIT09IGcgfHwgKGEucmVtb3ZlRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIEMpLCB5KEEuZGF0YSkpOwogICAgfSksIGEuc3RhcnQgJiYgYS5zdGFydCgpLCBhLnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oeyBpZDogZyB9LCBvKSwgZSk7CiAgfSk7Cn0KZnVuY3Rpb24gTGUoKSB7CiAgcmV0dXJuIG5ldyBBcnJheSg0KS5maWxsKDApLm1hcCgoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikudG9TdHJpbmcoMTYpKS5qb2luKCItIik7Cn0KY2xhc3MgamUgZXh0ZW5kcyBDZSB7CiAgcGFyc2VSYXdEYXRhKG8pIHsKICAgIGNvbnN0IHsgYnJpZ2h0bmVzczogZSwgaG90c3BvdHM6IHksIHNoYXJwbmVzczogZyB9ID0gby5wYXJhbXMsIEMgPSB7CiAgICAgIGNvbmZpZGVuY2U6IG8uY29uZmlkZW5jZSAvIDFlMywKICAgICAgdG9wTGVmdDogewogICAgICAgIHg6IG8ueDAsCiAgICAgICAgeTogby55MAogICAgICB9LAogICAgICB0b3BSaWdodDogewogICAgICAgIHg6IG8ueDEsCiAgICAgICAgeTogby55MQogICAgICB9LAogICAgICBib3R0b21SaWdodDogewogICAgICAgIHg6IG8ueDIsCiAgICAgICAgeTogby55MgogICAgICB9LAogICAgICBib3R0b21MZWZ0OiB7CiAgICAgICAgeDogby54MywKICAgICAgICB5OiBvLnkzCiAgICAgIH0sCiAgICAgIGJyaWdodG5lc3M6IGUgLyAxZTMsCiAgICAgIGhvdHNwb3RzOiB5IC8gMWUzLAogICAgICBzaGFycG5lc3M6IGcgLyAxZTMKICAgIH07CiAgICByZXR1cm4gewogICAgICAuLi5DLAogICAgICBzbWFsbGVzdEVkZ2U6IEVlKEMpCiAgICB9OwogIH0KICBhc3luYyBkZXRlY3QobywgZSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBGKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICBjb25zdCB5ID0gdGhpcy5jb252ZXJ0VG9TYW1Db2xvckltYWdlKG8sIGUpLCBnID0gdGhpcy5zYW1XYXNtTW9kdWxlLmRldGVjdERvY3VtZW50V2l0aEltYWdlUGFyYW1ldGVycygKICAgICAgZS53aWR0aCwKICAgICAgZS5oZWlnaHQsCiAgICAgIHkuYmdyMEltYWdlUG9pbnRlciwKICAgICAgMCwKICAgICAgLy8gcGFyYW1XaWR0aCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICAgMCwKICAgICAgLy8gcGFyYW1IZWlnaHQgc2hvdWxkIGJlIDAgKGRlZmF1bHQgdmFsdWUpCiAgICAgIDAKICAgICAgLy8gZG9jdW1lbnREZXRlY3Rpb25PcHRpb25zIC0gc3BlZWQgb3B0aW9uIC0gc2V0IGFzICJzdGFuZGFyZCBmdWxsIG1ldGhvZCIKICAgICk7CiAgICByZXR1cm4geS5mcmVlKCksIHRoaXMucGFyc2VSYXdEYXRhKGcpOwogIH0KfQpldChqZSk7Cg==", lI = (x) => Uint8Array.from(atob(x), (o) => o.charCodeAt(0)), Fa = typeof window < "u" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);", lI(Fc)], { type: "text/javascript;charset=utf-8" });
function II(x) {
  let o;
  try {
    if (o = Fa && (window.URL || window.webkitURL).createObjectURL(Fa), !o) throw "";
    const t = new Worker(o, {
      type: "module",
      name: x == null ? void 0 : x.name
    });
    return t.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(o);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + Fc,
      {
        type: "module",
        name: x == null ? void 0 : x.name
      }
    );
  }
}
class fI extends $1 {
  constructor(t, e) {
    super();
    E(this, "className", "DocumentImageProcessor");
    E(this, "detector");
    E(this, "validationService");
    this.detector = t, this.validationService = e;
  }
  optimizeImageBeforeDetection(t) {
    const e = Kx(t), n = Bl(t, e);
    return super.optimizeImageBeforeDetection(n);
  }
  async process({ image: t, timestamp: e }) {
    const n = this.optimizeImageBeforeDetection(t);
    let i = await this.detector.detect(n.data, n.resolution);
    i = Rl(i, Kx(t)), i = Kl(i, n.resolution);
    const r = {};
    return r.image = t, r.timestamp = e, r.imageData = n.data, r.detectedObject = i, this.processDetectedObject(r);
  }
}
var H0, o0, i0;
class CI {
  constructor(o) {
    ge(this, H0);
    ge(this, o0);
    ge(this, i0);
    ae(this, H0, o), ae(this, o0, /* @__PURE__ */ new Map());
  }
  validate() {
    N(this, H0).forEach((o) => {
      N(this, o0).set(o.name, o.evaluate());
    }), ae(this, i0, void (1 * -8886 + -487 * 1 + 9373));
  }
  isValid() {
    return N(this, i0) === void (-863 * -9 + 9842 * 1 + 17609 * -1) && ae(this, i0, Array.from(N(this, o0).values()).every((o) => o)), N(this, i0);
  }
  get result() {
    return N(this, o0);
  }
  get validators() {
    return N(this, H0);
  }
}
H0 = new WeakMap(), o0 = new WeakMap(), i0 = new WeakMap();
var bn, r0;
class f0 {
  constructor(o, t) {
    ge(this, bn);
    ge(this, r0);
    ae(this, bn, o), ae(this, r0, t);
  }
  get threshold() {
    return N(this, r0);
  }
  get name() {
    return N(this, bn);
  }
  isValueBelowThreshold(o) {
    return o < N(this, r0);
  }
  isValueAboveThreshold(o) {
    return o > N(this, r0);
  }
}
bn = new WeakMap(), r0 = new WeakMap();
const pI = "isNotDim";
var An;
class hI extends f0 {
  constructor(t, e) {
    super(pI, t);
    ge(this, An);
    ae(this, An, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(N(this, An));
  }
}
An = new WeakMap();
const mI = "isNotSmall";
var yn;
class bI extends f0 {
  constructor(t, e) {
    super(mI, t);
    ge(this, yn);
    ae(this, yn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(N(this, yn));
  }
}
yn = new WeakMap();
const AI = "isNotBright";
var Wn;
class yI extends f0 {
  constructor(t, e) {
    super(AI, t);
    ge(this, Wn);
    ae(this, Wn, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(N(this, Wn));
  }
}
Wn = new WeakMap();
const WI = "isPresent";
var vn;
class vI extends f0 {
  constructor(t, e) {
    super(WI, t);
    ge(this, vn);
    ae(this, vn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(N(this, vn));
  }
}
vn = new WeakMap();
const wI = "isSharp";
var wn;
class SI extends f0 {
  constructor(t, e) {
    super(wI, t);
    ge(this, wn);
    ae(this, wn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(N(this, wn));
  }
}
wn = new WeakMap();
var Sn;
class BI extends f0 {
  constructor(t, e) {
    super("noHotspots", t);
    ge(this, Sn);
    ae(this, Sn, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(N(this, Sn));
  }
}
Sn = new WeakMap();
const GI = "isNotOutOfBounds";
var Bn, R0;
class kI extends f0 {
  constructor(t, e, n) {
    super(GI, t);
    ge(this, Bn);
    ge(this, R0);
    ae(this, Bn, e), ae(this, R0, n);
  }
  evaluate() {
    const t = gc(N(this, R0), this.threshold, Kx(N(this, R0))), { bottomLeft: e, bottomRight: n, topLeft: i, topRight: r } = N(this, Bn), a = {};
    return a.topLeft = i, a.topRight = r, a.bottomLeft = e, a.bottomRight = n, Hl(a, t);
  }
}
Bn = new WeakMap(), R0 = new WeakMap();
class OI {
  static getDocumentValidationInstance(o, t, e) {
    return new CI([new vI(o.confidenceThreshold, t.confidence), new SI(o.sharpnessThreshold, t.sharpness), new hI(o.brightnessLowThreshold, t.brightness), new yI(o.brightnessHighThreshold, t.brightness), new BI(o.hotspotsScoreThreshold, t.hotspots), new kI(o.outOfBoundsThreshold, t, e), new bI(o.sizeSmallThreshold, t.smallestEdge)]);
  }
}
class ZI extends eI {
  constructor() {
    super(...arguments);
    E(this, "className", "DocumentValidationService");
  }
  validateDetectedObject(t, e) {
    const n = OI.getDocumentValidationInstance(this.getThresholds(), t, e);
    return n.validate(), n;
  }
}
const qx = class qx extends q1 {
  constructor(t, e, n) {
    super(e, n);
    E(this, "detector");
    this.detector = t;
  }
  static async createInstance(t) {
    const e = new II(), n = Dc(e), i = await new n(), r = new ZI(), a = new fI(i, r), s = new qx(i, a, t);
    this._instance = s;
  }
  static async getInstance(t) {
    return !this._instance && await this.createInstance(t), this._instance;
  }
  stopDetectionLoop() {
    var t;
    super.stopDetectionLoop(), uc(kt.INSTRUCTION_CHANGED, (t = this.detection) == null ? void 0 : t["fallbackInstruction"], sl);
  }
};
E(qx, "_instance");
let Hi = qx;
const HI = () => {
  const { handleError: x } = Hn(), { thresholds: o, wasmDirectoryPath: t } = nr(), [e, n] = et();
  he(() => {
    (async () => {
      const a = await Hi.getInstance(t);
      try {
        await a.init(), n(a);
      } catch (s) {
        if (s instanceof Error) {
          x(xe.fromError(s));
          return;
        }
      }
    })();
  }, [x, t]), he(() => {
    e && e.setThresholds(o);
  }, [e, o]);
  const i = {};
  return i.controller = e, i;
};
function RI() {
  const { cameraFacing: x, captureMode: o, onPhotoTaken: t, sessionToken: e } = nr(), { controller: n } = HI(), i = Zt(({ candidateSelectionImages: s, imageData: c, protoMessage: d }) => {
    _l(nc.DOCUMENT, s), t(c, d);
  }, [t]), r = Zt(({ processedImage: s }) => {
    uc(kt.INSTRUCTION_CHANGED, s.instructionCode), n && Jl(kt.DETECTED_DOCUMENT_CHANGED, s.detection, n.imageProcessor.validationService.getThresholds().confidenceThreshold);
  }, [n]), a = {};
  return a.captureMode = o, a.cameraFacing = x, a.controller = n, a.createProtoMessage = z1, a.onCapture = i, a.onDetection = r, a.sessionToken = e, a.customEvent = kt, a.fallbackInstruction = vt.DOCUMENT_NOT_PRESENT, a.instructionCodeMap = vt, a.checkToInstructionCodeMap = Su, b1(a);
}
const KI = () => {
  const { sunfish: x } = Rn(), { cameraResolution: o, detectionDetails: t, shouldCameraMirror: e, videoRef: n } = RI();
  return /* @__PURE__ */ O(nt, { children: /* @__PURE__ */ O(
    Fl,
    {
      cameraResolution: o,
      detectionDetails: t,
      shouldMirror: e,
      children: /* @__PURE__ */ O(
        bu,
        {
          ref: n,
          $isImageMirror: e,
          $isVisible: x,
          autoPlay: !0,
          id: cl,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}, PI = (x) => /* @__PURE__ */ O(Vl, { cameraOptions: x, children: /* @__PURE__ */ O(KI, {}) });
function VI({ initAppState: x, onError: o }) {
  const [t, e] = et(x), [n, i] = et(), [r, a] = et(!1), s = Ot(o);
  he(() => {
    s.current = o;
  }, [o]);
  const c = {};
  return c.appState = t, c.setAppState = e, c.error = n, c.setError = i, c.isCameraReady = r, c.setIsCameraReady = a, c.onErrorRef = s, c;
}
function TI({ onError: x }) {
  const { appState: o, error: t, isCameraReady: e, onErrorRef: n, setAppState: i, setError: r, setIsCameraReady: a } = VI({
    initAppState: Xe.LOADING,
    onError: x
  }), s = I1(o), c = Zt(
    (g) => {
      Sa(kt.STATE_CHANGED, { appState: Xe.ERROR, error: g }), a(!1), n.current(g), r(g), i(Xe.ERROR);
    },
    [n, r, i, a]
  ), d = Zt(
    (g) => {
      Sa(kt.STATE_CHANGED, { appState: g }), i(g);
    },
    [i]
  );
  return {
    appState: o,
    freemiumOverlayState: s,
    isCameraReady: e,
    setIsCameraReady: a,
    handleAppStateChange: d,
    handleError: c,
    error: t
  };
}
var Mc = ((x) => (x.AUTO_CAPTURE = "auto-capture", x.LONG_CAPTURE_SMILE = "long-capture-smile", x))(Mc || {});
class EI {
  constructor() {
    E(this, "appKey", "");
    E(this, "deviceId", "");
  }
  async countlyFetch(o) {
    if (!this.appKey || !this.deviceId) return;
    const t = {};
    t.Accept = "application/json";
    const e = {};
    e.method = "GET", e.headers = t;
    const n = e, i = "https://innovatrics.count.ly/i?", r = {};
    r.app_key = this.appKey, r.device_id = this.deviceId;
    const a = ex(r);
    await fetch("" + i + a + "&" + o, n);
  }
  async init(o, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = o;
    const e = { _app_version: ac() }, n = { organization: sc(window.location.href) }, i = ex({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(n) });
    await this.countlyFetch(i);
  }
  async endSession() {
    const o = {};
    o.end_session = "1";
    const t = ex(o);
    await this.countlyFetch(t);
  }
  async sendEvent(o, t, e) {
    const n = {};
    n.key = o, n.count = 1, n.dur = e, n.segmentation = t;
    const i = [n], r = ex({ events: JSON.stringify(i) });
    await this.countlyFetch(r);
  }
  async sendAutoCaptureEvent(o, t) {
    await this.sendEvent(Mc.AUTO_CAPTURE, o, t);
  }
}
const ox = new EI();
class LI {
  constructor() {
    E(this, "countly", ox);
  }
  createSegmentation(o) {
    return { appVersion: ac(), ...o };
  }
  init(o) {
    if (yl()) return;
    const t = c1();
    ox.init(t, o);
  }
  endSession() {
    ox.endSession();
  }
  walleye(o, t) {
    const e = {};
    e.nocturne = o, e.customer = t;
    const n = this.createSegmentation(e);
    ox.sendAutoCaptureEvent(n);
  }
}
class DI extends LI {
  trackCaptureProcess({ averageFps: o, captureProcessDurationInMs: t, detection: e, deviceName: n, facingMode: i, imageResolution: r, instructionSet: a }) {
    if (!e) return;
    const s = u1(t), c = this.createSegmentation({ hotspots: tn(e.hotspots), brightness: tn(e.brightness), confidence: tn(e.confidence), sharpness: tn(e.sharpness), smallestEdge: tn(e.smallestEdge), camera: g1(n, i), imageResolution: r.width + "x" + r.height, averageFps: l1(o), captureTime: d1(s), instructionSet: a });
    this.countly.sendAutoCaptureEvent(c, s);
  }
}
const NI = new DI();
let M;
const St = new Array(-1455 + 7 * -991 + 3 * 2840).fill(void 0);
St.push(void 0, null, !0, !1);
function Ri(x) {
  return St[x];
}
let ft = 7371 + -8 * 256 + -5323, sn = null;
function mx() {
  return (sn === null || sn.byteLength === -2528 + -27 * 288 + 10304) && (sn = new Uint8Array(M.memory.buffer)), sn;
}
const bx = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, YI = typeof bx.encodeInto == "function" ? function(x, o) {
  return bx.encodeInto(x, o);
} : function(x, o) {
  const t = bx.encode(x);
  o.set(t);
  const e = {};
  return e.read = x.length, e.written = t.length, e;
};
function hn(x, o, t) {
  if (t === void 0) {
    const a = bx.encode(x), s = o(a.length, 5483 + 2741 * -2) >>> 3879 * 1 + 66 * -21 + 9 * -277;
    return mx().subarray(s, s + a.length).set(a), ft = a.length, s;
  }
  let e = x.length, n = o(e, -723 + -181 * -4) >>> -8267 + 1 * -5082 + -1 * -13349;
  const i = mx();
  let r = 1688 * -2 + -4825 + 8201;
  for (; r < e; r++) {
    const a = x.charCodeAt(r);
    if (a > 127) break;
    i[n + r] = a;
  }
  if (r !== e) {
    r !== 71 * 3 + -2249 * -2 + 1 * -4711 && (x = x.slice(r)), n = t(n, e, e = r + x.length * (321 * -1 + -1080 + 54 * 26), 3 * 1337 + -6760 + 125 * 22) >>> -7375 + -3 * -621 + 5512;
    const a = mx().subarray(n + r, n + e), s = YI(x, a);
    r += s.written, n = t(n, e, r, 1534 * -1 + 4157 * 1 + -2622) >>> -1 * 4775 + 31 * 57 + -94 * -32;
  }
  return ft = r, n;
}
function Xc(x) {
  return x == null;
}
let cn = null;
function lt() {
  return (cn === null || cn.byteLength === 0) && (cn = new Int32Array(M.memory.buffer)), cn;
}
let In = St.length;
function FI(x) {
  x < -4015 + 377 * 11 || (St[x] = In, In = x);
}
function jc(x) {
  const o = Ri(x);
  return FI(x), o;
}
const Ki = {};
Ki.ignoreBOM = !0, Ki.fatal = !0;
const Jc = typeof TextDecoder < "u" ? new TextDecoder("utf-8", Ki) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && Jc.decode();
function jx(x, o) {
  return x = x >>> 2022 + -674 * 3, Jc.decode(mx().subarray(x, x + o));
}
function Pi(x) {
  In === St.length && St.push(St.length + (-578 + -7376 * 1 + 5 * 1591));
  const o = In;
  return In = St[o], St[o] = x, o;
}
let gn = null;
function _c() {
  return (gn === null || gn.byteLength === -3416 * 2 + 5097 + 1735 * 1) && (gn = new Uint32Array(M.memory.buffer)), gn;
}
function Ma(x, o) {
  const t = o(x.length * 4, 4) >>> 0, e = _c();
  for (let n = 3 * -733 + 1076 * -9 + -233 * -51; n < x.length; n++)
    e[t / (16314 + 10 * -1631) + n] = Pi(x[n]);
  return ft = x.length, t;
}
function Xa(x, o) {
  x = x >>> 5029 + -2 * -1726 + 257 * -33;
  const t = _c(), e = t.subarray(x / (2 * -3667 + -1105 * -6 + 708), x / (-2487 + 13 * 597 + 2 * -2635) + o), n = [];
  for (let i = 71 * 75 + 8198 + 1 * -13523; i < e.length; i++)
    n.push(jc(e[i]));
  return n;
}
function MI(x, o) {
  const t = hn(x, M.__wbindgen_malloc, M.__wbindgen_realloc), e = ft, n = hn(o, M.__wbindgen_malloc, M.__wbindgen_realloc), i = ft, r = M.is_mobile_supported(t, e, n, i);
  return dr.__wrap(r);
}
const Vi = {};
Vi.register = () => {
}, Vi.unregister = () => {
};
const ja = typeof FinalizationRegistry > "u" ? Vi : new FinalizationRegistry((x) => M.__wbg_licensevalidationresult_free(x >>> 6945 + -5097 * 1 + 66 * -28));
class dr {
  static __wrap(o) {
    o = o >>> -3 * -131 + 5972 + -67 * 95;
    const t = Object.create(dr.prototype);
    return t.__wbg_ptr = o, ja.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const o = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ja.unregister(this), o;
  }
  free() {
    const o = this.__destroy_into_raw();
    M.__wbg_licensevalidationresult_free(o);
  }
  constructor(o, t, e, n, i) {
    var r = Xc(t) ? 0 : hn(t, M.__wbindgen_malloc, M.__wbindgen_realloc), a = ft;
    const s = Ma(e, M.__wbindgen_malloc), c = ft, d = Ma(n, M.__wbindgen_malloc), g = ft, C = hn(i, M.__wbindgen_malloc, M.__wbindgen_realloc), u = ft, p = M.licensevalidationresult_new(o, r, a, s, c, d, g, C, u);
    return this.__wbg_ptr = p >>> 0, this;
  }
  get is_valid() {
    return M.licensevalidationresult_is_valid(this.__wbg_ptr) !== 109 * -39 + 6201 + -13 * 150;
  }
  get features_json() {
    try {
      const e = M.__wbindgen_add_to_stack_pointer(-16);
      M.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var o = lt()[e / (3 * 1087 + -867 + -5 * 478) + (1522 * -3 + 35 * 8 + 4286 * 1)], t = lt()[e / (22 * 223 + 4783 * 1 + -1937 * 5) + (1 * 2395 + -8300 + 5906)];
      let n;
      return o !== 9665 + -1933 * 5 && (n = jx(o, t).slice(), M.__wbindgen_free(o, t * (-8051 + -941 * 2 + 4967 * 2), 9048 + -14 * 511 + -1893)), n;
    } finally {
      M.__wbindgen_add_to_stack_pointer(-7 * -89 + 22 * -381 + 5 * 1555);
    }
  }
  get errors() {
    try {
      const n = M.__wbindgen_add_to_stack_pointer(-16);
      M.licensevalidationresult_errors(n, this.__wbg_ptr);
      var o = lt()[n / (2368 * -3 + -3921 + -41 * -269) + (3050 * 2 + -9068 + 106 * 28)], t = lt()[n / 4 + (-8058 + 267 * -9 + -1 * -10462)], e = Xa(o, t).slice();
      return M.__wbindgen_free(o, t * (9143 * -1 + 245 + 8902), -67 * -29 + 56 * 61 + -5355), e;
    } finally {
      M.__wbindgen_add_to_stack_pointer(6471 + -35 * -151 + -11740);
    }
  }
  get warnings() {
    try {
      const n = M.__wbindgen_add_to_stack_pointer(-16);
      M.licensevalidationresult_warnings(n, this.__wbg_ptr);
      var o = lt()[n / (-1 * -1451 + -3 * 1626 + 73 * 47) + (3 * -594 + 3307 * 2 + 8 * -604)], t = lt()[n / (4344 * 2 + -87 * -60 + 1 * -13904) + (-719 * -4 + -1 * 3107 + 232)], e = Xa(o, t).slice();
      return M.__wbindgen_free(o, t * (-4248 + -331 * 5 + 3 * 1969), 33 * 215 + -4190 * -2 + 191 * -81), e;
    } finally {
      M.__wbindgen_add_to_stack_pointer(-1 * 9002 + 5136 + -1294 * -3);
    }
  }
  get customer() {
    let o, t;
    try {
      const i = M.__wbindgen_add_to_stack_pointer(-16);
      M.licensevalidationresult_customer(i, this.__wbg_ptr);
      var e = lt()[i / (59 * 81 + 12 * -25 + -4475) + (-28 * 186 + 1 * 97 + -269 * -19)], n = lt()[i / 4 + (-6197 * 1 + 16 * -505 + 14278)];
      return o = e, t = n, jx(e, n);
    } finally {
      M.__wbindgen_add_to_stack_pointer(16), M.__wbindgen_free(o, t, -746 * -6 + -2206 * 1 + -2269 * 1);
    }
  }
}
async function XI(x, o) {
  if (typeof Response == "function" && x instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(x, o);
    } catch (e) {
      if (x.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
      else throw e;
    }
    const t = await x.arrayBuffer();
    return await WebAssembly.instantiate(t, o);
  } else {
    const t = await WebAssembly.instantiate(x, o);
    if (t instanceof WebAssembly.Instance) {
      const e = {};
      return e.instance = t, e.module = x, e;
    } else return t;
  }
}
function jI() {
  const x = {};
  return x.wbg = {}, x.wbg.__wbindgen_string_get = function(o, t) {
    const e = Ri(t), n = typeof e == "string" ? e : void 0;
    var i = Xc(n) ? 9382 + -1 * 3191 + -6191 : hn(n, M.__wbindgen_malloc, M.__wbindgen_realloc), r = ft;
    lt()[o / (1 * -7311 + 367 * -26 + -9 * -1873) + (-2 * 1303 + 93 * -5 + 256 * 12)] = r, lt()[o / (-1999 * 1 + -8 * -619 + -2949 * 1) + (-8045 + -183 * 41 + 15548)] = i;
  }, x.wbg.__wbindgen_object_drop_ref = function(o) {
    jc(o);
  }, x.wbg.__wbindgen_string_new = function(o, t) {
    const e = jx(o, t);
    return Pi(e);
  }, x.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return Pi(/* @__PURE__ */ new Date());
  }, x.wbg.__wbg_getTime_2bc4375165f02d15 = function(o) {
    return Ri(o).getTime();
  }, x.wbg.__wbindgen_throw = function(o, t) {
    throw new Error(jx(o, t));
  }, x;
}
function JI(x, o) {
  return M = x.exports, Uc.__wbindgen_wasm_module = o, cn = null, gn = null, sn = null, M;
}
async function Uc(x) {
  if (M !== void 0) return M;
  typeof x > "u" && (x = new URL("dot_embedded_bg.wasm", import.meta.url));
  const o = jI();
  (typeof x == "string" || typeof Request == "function" && x instanceof Request || typeof URL == "function" && x instanceof URL) && (x = fetch(x));
  const { instance: t, module: e } = await XI(await x, o);
  return JI(t, e);
}
function ke(x, o) {
  const t = Jx();
  return ke = function(e, n) {
    e = e - (3510 + -1151 * 3 + 13 * 14);
    let i = t[e];
    if (ke.DGNffb === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = C.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          p += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let u = [], p = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (let v = 0; v < g.length; v++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      ke.oldgAX = d, x = arguments, ke.DGNffb = !0;
    }
    const a = t[-8379 + -3638 * 2 + 31 * 505], s = e + a, c = x[s];
    return c ? i = c : (ke.wiuGod === void 0 && (ke.wiuGod = !0), i = ke.oldgAX(i, n), x[s] = i), i;
  }, ke(x, o);
}
function Fo(x, o, t, e, n) {
  return ke(o - -556, x);
}
(function(x, o) {
  function t(a, s, c, d, g) {
    return ke(g - 765, a);
  }
  function e(a, s, c, d, g) {
    return ke(a - 99, s);
  }
  function n(a, s, c, d, g) {
    return ke(a - -193, s);
  }
  function i(a, s, c, d, g) {
    return ke(a - 666, s);
  }
  const r = x();
  for (; ; )
    try {
      if (-parseInt(i(956, "C6MM", 935, 980, 947)) / 1 * (parseInt(n(77, "6!s)", 49, 87, 80)) / 2) + parseInt(n(95, "N^VW", 86, 123, 100)) / 3 * (parseInt(i(910, "i@kE", 910, 937, 898)) / 4) + parseInt(i(917, ")$UI", 912, 927, 925)) / 5 * (parseInt(e(366, "E&K4", 390, 392, 373)) / 6) + parseInt(t("J%*9", 1012, 1055, 1030, 1033)) / 7 + parseInt(e(384, "PpMz", 369, 372, 356)) / 8 + parseInt(e(382, "4p!A", 357, 357, 402)) / 9 + -parseInt(t("E&K4", 1019, 1013, 1035, 1012)) / 10 === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Jx, -1109571 + -8707 * -242);
function Mo(x, o, t, e, n) {
  return ke(t - -849, x);
}
function Ja(x, o, t, e, n) {
  return ke(x - 21, n);
}
function Vt(x, o, t, e, n) {
  return ke(t - 362, o);
}
function Jx() {
  const x = ["W6hcOCkhbZ0", "dmk0WP4GW5JdVWq", "kSo0WQKCW4bfmCogBZpdHmkVrG", "WPihW7BdSeCdW6SCga8AomkA", "WR4AW6q1WQBcN8kr", "WRFcKwhdISkU", "W5tdJmo2Amo7", "k8oXWQiBW4zhp8kszZZdNmkpFuu", "WP4tWQGHWPe", "WOlcKmkAtSkj", "W5FdISoWzmk6", "W6nIFuqRWROFWR5wWP7dNmoEWRK", "i0ZdRmkEvW", "e8ovW5BdTNK", "W5ddGSoOzmkH", "WOrpetCS", "FmohAX3cRa", "ACkaBXtcUq", "gSoyWO3cS00", "WRtdPCoEwMtdRNtdJmk6W45uh8kv", "W4NdK8kwrmkj", "WQyXW6eBWQ8", "d2BdRmo8vmoOhW", "WOJdHmkxtSke", "W5fegYT4", "DZJdV0hcSG", "kSo1WQeBW44BzCoNFJRdLq", "lSkaW6rHWRWICG", "E8kwsWSEmSoqpConkI/dMui", "mxi2sL8", "WPmhW7pdVKTAWRqDktyI", "uK/dL8ozvG", "oCkLW7hcICoe", "lSo1WQmDW4nfo8oHBZtdVSkFwq", "C8kaAbdcNW", "W7BdIrvidG", "W6WUWOSCiW", "W7bGsH4", "yCovvSk5yq", "W5xdISo+Amk/", "p8ohdfW", "nsS3W43dGG", "yLldUCkewW", "kHldLwFdMSkUbGJcSWjXsYW", "EI7dVmoWdq", "j3/cOmkRqhdcQwZdJ8kzW4v6WPS", "p8ohdv9J", "W4q/WQCjWR86wa", "p8knfmoSm8oCWOuwqNNcU8oRWQC", "F8kwsqaFmmoxc8oqjGBdNxC", "W6ZdIHXPnMXF", "lSkdr0ef", "z8kdWQFcHCoi", "AxldKCkbW4i", "C8kdEr3cLa"];
  return Jx = function() {
    return x;
  }, Jx();
}
var za;
class _I {
  constructor() {
    E(this, za, !1);
  }
  async [(za = Fo("gU*#", -265) + Fo("jf@&", -306) + Vt(595, "gTa)", 620), Vt(617, "@vC9", 639))](o = Vt(638, "UTe2", 644)) {
    function t(a, s, c, d, g) {
      return Vt(a - 2, c, s - 595);
    }
    function e(a, s, c, d, g) {
      return Fo(c, a - 1345);
    }
    function n(a, s, c, d, g) {
      return Vt(a - 411, s, d - -264);
    }
    function i(a, s, c, d, g) {
      return Mo(s, s - 283, a - 1529);
    }
    function r(a, s, c, d, g) {
      return Mo(s, s - 264, d - 472);
    }
    try {
      const a = o + "/" + tl;
      await Uc(a), this[e(1075, 1068, "J%*9", 1094, 1065) + r(-124, "UTe2", -141, -125, -119) + r(-157, "^dE@", -151, -129, -132)] = !0;
    } catch {
      this[r(-116, "b[$[", -125, -120) + i(945, "b1zO") + e(1068, 1094, "jf@&")] = !1, console[i(960, "J%*9")](r(-92, "Bn*W", -101, -108) + n(333, "b[$[", 344, 337) + t(1202, 1228, "1(Fr") + n(389, "C6MM", 370, 373) + r(-132, "Lkkm", -154, -132) + e(1043, 1042, "jf@&") + t(1193, 1197, "rFHM") + i(941, "i@kE") + i(933, "gTa)") + t(1235, 1233, "tYH!") + r(-109, "k^Ow", -139, -117) + i(929, "k^Ow") + e(1044, 1070, "G&GL") + t(1209, 1220, "k^Ow") + i(944, "G&GL") + i(926, "jf@&") + n(358, "h4My", 361, 379) + t(1238, 1231, "b[$[") + "n.");
    }
  }
  [Vt(643, "JPTl", 654) + Vt(617, "Y7dl", 634) + Vt(657, "PpMz", 646) + "ed"]() {
    function o(n, i, r, a, s) {
      return Mo(s, i - 495, n - 298);
    }
    function t(n, i, r, a, s) {
      return Ja(n - -26, i - 193, r - 414, a - 110, s);
    }
    function e(n, i, r, a, s) {
      return Ja(n - 956, i - 113, r - 309, a - 132, s);
    }
    return this[t(288, 288, 262, 282, "t&*0") + e(1233, 1213, 1218, 1248, "dl9c") + o(-273, -266, -293, -279, "N^VW")];
  }
}
class Xo extends Error {
  constructor() {
    super(...arguments);
    E(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
(function(x, o) {
  function t(c, d, g, C, u) {
    return ce(d - 158, g);
  }
  var e = x();
  function n(c, d, g, C, u) {
    return ce(g - 613, d);
  }
  function i(c, d, g, C, u) {
    return ce(g - 894, c);
  }
  function r(c, d, g, C, u) {
    return ce(u - -726, C);
  }
  function a(c, d, g, C, u) {
    return ce(d - 52, c);
  }
  for (; ; )
    try {
      var s = parseInt(r(-545, -576, -569, "mV2[", -555)) / 1 + -parseInt(i("n]Nv", 1064, 1074, 1076, 1042)) / 2 * (-parseInt(r(-544, -563, -511, "7nIe", -542)) / 3) + parseInt(n(791, "IwxC", 802, 829, 797)) / 4 * (parseInt(n(823, "WEd0", 828, 841, 831)) / 5) + parseInt(a("pAC5", 281, 263, 292, 275)) / 6 * (-parseInt(a("(#L%", 226, 243, 226, 224)) / 7) + -parseInt(a("ICcl", 224, 199, 251, 248)) / 8 + parseInt(t(382, 383, "MGO6", 351, 361)) / 9 * (-parseInt(t(371, 361, "JhWk", 350, 340)) / 10) + -parseInt(i("S]T8", 1073, 1088, 1111, 1120)) / 11;
      if (s === o) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(_x, 972825);
function ce(x, o) {
  var t = _x();
  return ce = function(e, n) {
    e = e - (-340 + -1 * 2291 + 4 * 700);
    var i = t[e];
    if (ce.xllAzd === void 0) {
      var r = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", p = "", b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = C.indexOf(l);
        for (var Z = 0, X = u.length; Z < X; Z++)
          p += "%" + ("00" + u.charCodeAt(Z).toString(16)).slice(-2);
        return decodeURIComponent(p);
      }, a = function(g, C) {
        var u = [], p = 0, b, A = "";
        g = r(g);
        var l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (var v = 0; v < g.length; v++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      ce.APrbOU = a, x = arguments, ce.xllAzd = !0;
    }
    var s = t[0], c = e + s, d = x[c];
    return d ? i = d : (ce.Bsddjy === void 0 && (ce.Bsddjy = !0), i = ce.APrbOU(i, n), x[c] = i), i;
  }, ce(x, o);
}
function nn(x, o, t, e, n) {
  return ce(n - 713, e);
}
function ix(x, o, t, e, n) {
  return ce(n - -275, e);
}
function _x() {
  var x = ["zCkKiSozia", "WPFdOmk9WPVcNG", "W7HUpmkIgW", "qmkgWPddGbW", "WQ3dSSouaNy", "WQKSjCkyWRJcNqmw", "WQ0UCSooW4VdOrGTWPngzWi", "W7pcOmkdrtn6lu4+naxdQSo8", "B8k8nmo5pq", "AY4Jk8ozp1VcH2NdISoKzW", "ECoZDZW", "ASkVWOyTtG", "Fmo4pJf9", "WOarCCk8W5q", "Emkrd8oNECkyW74", "W6xcKIS", "E39TfmkuxIyly3pcReK+", "CCkVWPaIqW", "WQZcPmkXCmo7", "WPJcVSoVi8koW5Lzo8ooW4S3wGm", "W5C1pa", "W6fhmJxdTa", "WPjdW5hcVCkt", "W7pcJsRdGZa", "ocjNxYy", "EL4MumoSWOjohq", "W6/dSCo0hSkIDSorW7WGWPXdW6ddGq", "W7bxmH7dSq", "W707xSoslCokE8k1", "W58wEmksWOO", "W7BdV8k2ssq", "gCkehmoMW50", "W4pdSmkTF8oy", "WQVdKCkzpLi", "mrWt", "oGCYE8oR", "lZO0uSos", "WQ3dNCkxpfq", "CmkGWOmfqG", "cmo/qGlcVW", "qSobrCkMWP7dJJmdeCoRt0Th", "nrChha", "WPDhW5C", "pWmZ", "W6TXlq", "W7/dNSoFhhmjFa", "WQXRj0avzCk4avOQW6HmAW", "y8knbSoBWOm", "W7RcPCotgeanB1G", "WQDVi0quySosjxO+W55a", "BK9rqmo0yXZcSNddKK4J", "W4ShjSkGW7O", "W6zcW5y", "W5xcHSomhCkE", "t8kMvJtcTc/dVX0", "W7RcLce", "umkWWPBdGa4", "eCkDwazf", "WOXupmoiW4VdIYfrWQHgnCkv", "gCoWqXdcUq", "Ffz2jmkXW5iakSkayY7dJYa", "h3/dN8kxW7hcLMldOCkeWR9das8", "Bwm5WO15x2TZ", "WR0vWPtdO8oVW5GecSk3gCoVW7q"];
  return _x = function() {
    return x;
  }, _x();
}
function Tt(x, o, t, e, n) {
  return ce(o - -801, t);
}
function _a(x, o, t, e, n) {
  return ce(e - -470, n);
}
function Ua(x, o, t, e, n) {
  return ce(o - 905, n);
}
var K0, Gn;
class Qa {
  constructor(o) {
    ge(this, K0);
    ge(this, Gn);
    function t(a, s, c, d, g) {
      return ce(c - -727, g);
    }
    function e(a, s, c, d, g) {
      return ce(g - -559, d);
    }
    function n(a, s, c, d, g) {
      return ce(g - -973, c);
    }
    this[n(-721, -770, "bWmT", -739, -742) + r("ZNGH", -222, -189, -205)] = o;
    function i(a, s, c, d, g) {
      return ce(g - 79, a);
    }
    function r(a, s, c, d, g) {
      return ce(d - -382, a);
    }
    try {
      ae(this, K0, o[t(-564, -521, -551, -537, "JJml") + t(-510, -522, -525, -515, "U756") + r("n]Nv", -186, -195, -163, -157)] && JSON[i("pAC5", 289, 286, 324, 293)](o[n(-779, -792, "0FSF", -812, -794) + e(-374, -383, -381, "%i&7", -366) + r("SZLA", -161, -168, -192, -176)])), ae(this, Gn, o[t(-576, -561, -552, -552, "*ZNO") + r("etPK", -141, -172, -165, -180)]);
    } catch (a) {
      console[n(-772, -762, "MGO6", -752, -757)](a);
    }
  }
  get [Tt(-603, -575, "CiT[") + "id"]() {
    function o(e, n, i, r, a) {
      return Tt(e - 395, e - 895, n);
    }
    function t(e, n, i, r, a) {
      return Tt(e - 129, r - 587, e);
    }
    return this[o(305, "3s47") + t("]3VS", -41, 19, -9)][o(282, "x0jU") + t("SZLA", -3, 42, 16)];
  }
  get [nn(906, 924, 870, "gp&Q", 900) + "s"]() {
    function o(e, n, i, r, a) {
      return nn(e - 68, n - 128, i - 398, r, e - -928);
    }
    function t(e, n, i, r, a) {
      return Tt(e - 140, r - -27, i);
    }
    return this[o(-9, -7, -14, "WEd0") + t(-640, -636, "TbsJ", -636)][o(-11, -8, -33, "bV87") + "s"];
  }
  get [nn(892, 954, 930, "mV2[", 923) + Tt(-628, -606, "IJx7")]() {
    function o(e, n, i, r, a) {
      return _a(e - 484, n - 427, i - 143, i - 1001, n);
    }
    function t(e, n, i, r, a) {
      return _a(e - 346, n - 220, i - 441, r - 1, a);
    }
    return this[o(758, "WEd0", 737) + t(-288, -261, -295, -272, "etPK")][o(721, "W*D$", 730) + t(-226, -231, -257, -242, "(#L%")];
  }
  get [Tt(-547, -569, "Z!c7") + "b"]() {
    return N(this, K0);
  }
  get [ix(-86, -63, -62, "U756", -79) + ix(-41, -79, -37, "MGO6", -66)]() {
    return N(this, Gn);
  }
  get [Tt(-560, -579, "AtL5") + Tt(-577, -594, "S]T8") + Ua(1108, 1083, 1097, 1070, "bWmT") + Ua(1064, 1090, 1072, 1058, "]Rqu")]() {
    var i, r;
    function o(a, s, c, d, g) {
      return nn(a - 426, s - 7, c - 402, g, a - 113);
    }
    function t(a, s, c, d, g) {
      return nn(a - 339, s - 366, c - 402, c, d - -610);
    }
    function e(a, s, c, d, g) {
      return ix(a - 128, s - 384, c - 8, c, d - -49);
    }
    function n(a, s, c, d, g) {
      return ix(a - 99, s - 312, c - 398, g, a - 1024);
    }
    return !!((r = (i = N(this, K0)) == null ? void 0 : i[t(358, 313, "kHcX", 331) + n(967, 966, 988, 967, "mV2[")]) != null && r[t(282, 316, "5GcJ", 311) + n(932, 963, 948, 933, "*ZNO") + e(-186, -134, "pAC5", -154) + n(961, 943, 972, 991, "5GcJ") + e(-127, -102, "SZLA", -126) + t(343, 340, "TbsJ", 316) + o(1012, 990, 1034, 1040, "TbsJ") + "d"]);
  }
}
K0 = new WeakMap(), Gn = new WeakMap();
function Ge(x, o, t, e, n) {
  return Ae(n - -98, o);
}
(function(x, o) {
  function t(a, s, c, d, g) {
    return Ae(c - -958, g);
  }
  function e(a, s, c, d, g) {
    return Ae(c - -97, s);
  }
  function n(a, s, c, d, g) {
    return Ae(d - -352, a);
  }
  function i(a, s, c, d, g) {
    return Ae(c - -672, d);
  }
  const r = x();
  for (; ; )
    try {
      if (parseInt(t(-475, -396, -339, -215, "qs!&")) / 1 * (parseInt(n("qs!&", 245, 303, 282, 385)) / 2) + -parseInt(e(352, "sBmv", 418, 469, 427)) / 3 + -parseInt(t(-233, -333, -317, -439, "Jf&d")) / 4 + -parseInt(t(-379, -578, -458, -464, "97L!")) / 5 * (-parseInt(t(-502, -462, -436, -518, "]9^5")) / 6) + -parseInt(i(-192, -183, -263, "Fny@", -335)) / 7 + -parseInt(n("MMWV", 156, 349, 285, 408)) / 8 + parseInt(i(-154, -48, -74, "WQ8*", -45)) / 9 * (parseInt(n("]9^5", 250, 155, 239, 232)) / 10) === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ux, -21 * 53271 + 1208031 + 1 * 568878);
function Et(x, o, t, e, n) {
  return Ae(t - -103, n);
}
function ye(x, o, t, e, n) {
  return Ae(t - 525, n);
}
function Re(x, o, t, e, n) {
  return Ae(t - -810, e);
}
function Ux() {
  const x = ["W45RtctdPW", "WP7cRSoDWQKH", "vvVdP2Kd", "WR7cRmo5fmoVkSk+WPHenmo8W6S", "W63dUCkMDSkY", "WP/cOSom", "l8kRWR0sWR8", "WOpdQmo6EMK", "W5FdQKtdKq", "W6ddVmkWqmkZ", "cgfrWQFcMW", "WPddQmo6F3m", "W6hdMCoxWPhcVW", "uGRdN8o5eq", "pmk1xa", "W5RdSmkW", "WPBdI8kismoNCqRdK23cKG", "sqXqWO3dPq", "rCkPW4q2EG", "u8o6W5hdVWS", "W6GhW6hcPYW", "W7WuW7ZcUG", "WQJcM8o3tbW", "xCo0W5BdPq", "W4JcLSoB", "pmktWQ8U", "uufNWPJdLG", "x3j0WQpdLq", "W4VdSIiY", "WQJcK8oxW5q", "W5S8wL4s", "WQ4rf8k3dG0VqHxdJWL8Aa", "W4HEuG", "W67dSmkUqCkY", "CmoZdXlcUq", "WRbZydW/", "WO7dTX/cTmoU", "pCkdwSo6WPC", "keZdL8oSWOBcRCo6fmkdkq4", "WPVdU8oHB2G", "W4G8wLSi", "W5lcNmopWRZcSW", "W6NdU8k5qmo3", "W4ZcNSolhSo+", "xWiTjSok", "h0KDW4/dH27cUY3cIfO", "W4JcLSoCgmo4", "W4JdMSkEbCkB", "W60qW6/cOcO", "WQJcISoA", "kmkcmcm", "v0ddRfey", "wbhdISoI", "WQSPW6lcVG", "iCkwqSo8WPS", "W6JcStG", "W5RdSu/dG8or", "W47dQt4eWRi", "vuf9WQFdMG", "W6lcUt8WW5C", "WPZcOmon", "WOxcJSoCW4ldGG", "W4BcVmoYWPlcTa", "WPxdU8oE", "W6/dP8kLvSkK", "w8oClSkAWQm", "vXddNSoihW", "mmkqxmo2WO0", "W4pcPdKAW4G", "W5FcNmoFWPZcUq", "jSk3WRhcPJ0", "W4JdNYKeWPy", "tehdMHmK", "W4/dTdGUWQ0", "WPxdTCoNswe", "WOX7bbvyrmkCW7JcUxNcLcVcOa", "W4/dScSWWO0", "W4iqWQRdRmkC", "zGayW78x", "p8kiksnQ", "WPxdOCk0WP3cRq", "W6dcUtKWW5S", "DwRdTSoatG", "ySoGdHddQW", "W5pdRf7dJCox", "oCkltCo8WPe", "revLWOldLW", "lCkmkJLl", "lWZcSCkzqa", "W6RcKmkFoCoz", "WOldPCkYWQ3cVq", "WQRcLCoqW5tdNW", "W43cJmoGc8o3", "WOxdPCkYWRdcSq", "EaNcHmkrW58", "WPpdP8kyWP3dGG", "mCouWPhcPc0", "W7HnwSokuG", "rmoSW4W4EW", "WP/dP8knWPC", "AY3cMddcTW", "uGqSzG", "WOtdImknW4NdRh7dLLZcKWf5", "Ebi9W7an", "smkIW4D5yW", "W77cRahcMHm", "iSkZtCoHW5m", "kexdL8oPWO/dISkmlmk1lWldRdu", "W7XDxCo6uG", "mcBcNW", "WPRdT8oErmkB", "WPRdPCk0WR3cSa", "lG9CWQpcNq", "WQpdUCoycSkB", "W4VdVSoeWOywdCocW6y", "WOldLIhcUSoP", "W6NdU8k5qmkh", "iSkCWRSVWOm", "lYBcLG", "WPv0sYS7", "n2ldUSoa", "ngtdOa", "F1pdV0Ss", "W64hW7ZcUY0", "vmoWW5NdQGW", "W7JdVfZdQ8o8", "W6hcOCkLW6VcVa", "W47cMmozomoG", "WQlcTCoYW4ZdVa", "W6ZcLrOCW5m", "WRVcV8kMW6VcTG", "WQZcLConW4JdNG", "W7KEWR7dHmoo", "W4PwqbddOq", "WP3dU8opcSkb", "zCoHWR7cVG0wWRK", "EgfVWQpdIa", "WOFdT8oe", "W6GVquu", "pSomW5vZWRO", "oSkDz8oDW7O", "W7mKW7NcS18", "WP7dPSkyWOZdVa", "WPddT8oEiCkF", "W4tcQsxcHGS", "jSk7wSoNW5u", "fYnfW4nM", "xmo8W4xdRH0", "ouP/WQzsDmoBemoDWOa4DCoK", "tNr1WR4", "ymkiW4ZdPNbKWPyYgw5dW5q", "xmo8W5ZdRHC", "CbpcOmk3W5e", "W4BcS8o1W6ZdRCkAtmoYWRtdMSkLW6ro", "WPxdU8keWOVdOq", "eK5eWQNcLG", "q298WQNdRq", "bmkGWO7cS0aNaCkfg8krW55YWOO", "zYlcHZZdRq", "WPZdISk6WPhdUW", "W5q6Euqc", "oCkuWQ0", "tHHeWONdKW", "W6uCW7RcVt4", "WOhdGsFcTSoZ", "WP92xG", "W5NcLSoC", "fezeWQpcNW", "pmkmr8oT", "W5VdUSkLW7Ww", "xK1QWO7dNq", "W73dJmk1puJcKGDMW4NcQmkAWO9x", "W53cMmopWPVcTa", "D8owASk6WOK", "W4lcJCoAga", "amkrkYjx", "txZdUbmZ", "WQRcM8o2zXu", "C8owESk9WOq", "W68AW7RcKti", "W6tcUSkUW7BcRW", "WPhdTSkVWQ3cQW", "WRK6W6lcV0G", "W6VcSINcKby", "AmkRW5qbBa", "W6ugW6VdUJm", "W6GqW6dcPZO", "W6XUwuqc", "W4BcImoHWP/cIq", "WPddVCoosG", "W6RcPslcHWa", "D8oJvmooW6tcRuDO", "kgZdOq", "jmkkn8oNW59jW7baW4JcUCoeWOZcTW", "u1bHWPG", "W6hcRYG", "qSoGdHddQW", "sCkTW5y0zW", "nhxdHghdUYuZWPFdJsboWPBcOq", "tCk4W64+Ba", "W7KyWRRdPmos", "W5jCwqa", "k8oyW4PUWRe", "CCkTW5y/", "n8odWO3cUdO", "WPFdQSoff8kb", "sxj4WQG", "g8ksW6KfWQu", "fcLd", "WOpdUCoycSkB", "W7xcQ8kZ", "WQtdU8oMysa", "cYJcISkDqq", "WOVdIZdcTmoV", "W7G4WRFdQmoi", "WQFcJSolW47dJq", "B8oyFSkWWQm", "W4xdQKpdJ8oa", "jSkwkJLk", "i8kmlcnb", "W57dV1JdGCon", "W6CAW6K", "ftH9WOPS", "kCk7WRZcSdy", "FCosESk9WOq", "WP3dT8oe", "vCo7W4ZdRIK", "WPFdV8oZBxu", "W6ddVmkPqmk5", "l8kXlIHD", "q0FdUqK0", "Aby7W5in", "WRNcLCowW4NdMa", "W6dcSYObW48", "W6FcUY4", "E8ouFq", "qXRdN8osfa", "AH08W7Te", "W7ShW6FcUIS", "W6xdTSkVs8kK", "W7eaWQpdTSoV", "W6lcVKddI8og", "WR4TW7tcTf8", "kMhdTSopsa", "mJTLWO5G", "W5ZcISoSWPNcRW", "DXlcLCo9W58", "WO7dLWZcO8o6", "FeSPWQ/dVa", "CCoLW6RdP20SwmkbAwZdVNzk", "BIxcJJZcQq", "zHTMWOddTa", "WOldIIdcSmk7", "W6HBut3dTa", "fSkQlsfl", "W5tcNSondSoZ", "W7WqWRxdQmog", "W4hcKComgmog", "p8ouWO0", "tfZdTr8P", "WO8EDeqKmCoU", "h0fdWQ/cRG", "W5pcOmoIWPdcHq", "W6/cPtlcPWO", "thjYWR7dKG", "pHdcM8k2yq", "aCkQW40Iyq", "W7Lhxmolxa", "W7fpxq", "b8khxCoSWPm", "W4ORrNil", "W4xcI8osWPBcQa", "s2v7WQZdLa"];
  return Ux = function() {
    return x;
  }, Ux();
}
function We(x, o, t, e, n) {
  return Ae(o - -249, n);
}
function Ae(x, o) {
  const t = Ux();
  return Ae = function(e, n) {
    e = e - (-1 * 7684 + -7 * -1292 + 162 * -6);
    let i = t[e];
    if (Ae.jLARuc === void 0) {
      var r = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = C.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          p += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, C) {
        let u = [], p = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + C.charCodeAt(l % C.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (let v = 0; v < g.length; v++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      Ae.tPZTKc = d, x = arguments, Ae.jLARuc = !0;
    }
    const a = t[0], s = e + a, c = x[s];
    return c ? i = c : (Ae.UdYZLE === void 0 && (Ae.UdYZLE = !0), i = Ae.tPZTKc(i, n), x[s] = i), i;
  }, Ae(x, o);
}
var qa, $a, es;
class UI {
  constructor(o) {
    E(this, es);
    E(this, $a, [Et(569, 395, 463, 361, "@^eS") + Ge(514, "D^ed", 442, 401, 490) + "ic", Et(443, 472, 522, 491, "kT!K") + We(214, 147, 69, 168, "7Bfi") + "ic"]);
    E(this, qa);
    function t(e, n, i, r, a) {
      return Ae(r - 290, e);
    }
    this[t("Uwt6", 791, 879, 833) + t("FHMc", 722, 882, 843) + "d"] = o;
  }
  async [(es = We(197, 320, 266, 405, "(rTJ") + "se", $a = We(154, 189, 102, 138, "$xk@") + ye(995, 881, 935, 854, "D^ed") + We(189, 188, 170, 205, "Jf&d") + Et(441, 374, 410, 513, "oQvJ"), qa = ye(1214, 1047, 1100, 1195, "oQvJ") + Re(-205, -248, -171, "f8cK"), Re(-100, -164, -158, "(rTJ"))](o = Re(-183, -273, -196, "7JTP"), t) {
    const e = await this[n(-127, -91, "eH[Q", 62, -38) + n(-171, -40, "7Bfi", 27, -83) + i("D^ed", -212, -116, -251)](t);
    function n(c, d, g, C, u) {
      return ye(c - 327, d - 328, u - -1005, C - 428, g);
    }
    function i(c, d, g, C, u) {
      return Ge(c - 355, c, g - 90, C - 350, d - -528);
    }
    function r(c, d, g, C, u) {
      return We(c - 96, C - 251, g - 181, C - 153, g);
    }
    function a(c, d, g, C, u) {
      return Et(c - 45, d - 446, g - 316, C - 443, d);
    }
    await Promise[s(1236, 1182, 1078, "mCjD") + s(1112, 1232, 1332, "(rTJ")]([this[s(1355, 1321, 1434, "vM^X") + i("$62R", 31, -4, 43) + "d"][a(883, "(rTJ", 865, 890)](o), this[n(149, 230, "eGlj", 82, 160) + r(452, 605, "554O", 530) + "e"](e)]);
    function s(c, d, g, C, u) {
      return Re(c - 38, d - 473, d - 1504, C);
    }
    this[n(206, 201, "7NV2", 38, 90) + a(893, "]9^5", 791, 893) + n(68, 165, "qs!&", 2, 100)]();
  }
  async [ye(1082, 1169, 1173, 1069, "pwsG") + ye(1041, 1166, 1070, 1007, "oQvJ") + "se"](o) {
    function t(a, s, c, d, g) {
      return Ge(a - 324, c, c - 179, d - 52, d - 506);
    }
    function e(a, s, c, d, g) {
      return Re(a - 280, s - 214, c - 1317, d);
    }
    function n(a, s, c, d, g) {
      return We(a - 422, g - 604, c - 387, d - 341, d);
    }
    function i(a, s, c, d, g) {
      return Ge(a - 16, s, c - 171, d - 64, d - 236);
    }
    function r(a, s, c, d, g) {
      return We(a - 2, d - 1168, c - 487, d - 130, a);
    }
    try {
      if (t(694, 684, "D^ed", 803, 920) !== i(841, "RwRT", 784, 744, 680)) return _0x40d745;
      {
        const a = await fetch(o);
        if (!a.ok) {
          if (r("FHMc", 1426, 1391, 1392, 1387) !== i(552, "El7j", 649, 657, 697)) throw new Error(n(893, 1004, 848, "mCjD", 886) + r("mCjD", 1310, 1478, 1369, 1460) + e(1012, 1093, 1089, "D^ed", 1207) + n(810, 939, 725, "D^ed", 832) + "d.");
          if (!this[r("QTV0", 1266, 1362, 1330, 1272) + "se"]) throw new _0x10b6a2(t(826, 763, "7NV2", 867, 880) + r("kQDT", 1403, 1487, 1371, 1283) + r("pwsG", 1359, 1289, 1382, 1449) + i(534, "i6*R", 497, 568, 485) + ".");
          if (!this[n(901, 775, 842, "FR[9", 861) + e(1072, 1056, 960, "kT!K", 926) + "d"][i(661, "eH[Q", 662, 700, 653) + n(770, 832, 677, "QTV0", 780) + e(963, 1104, 1091, "Fny@", 1128) + "ed"]()) throw new _0x384553(e(926, 939, 1025, "2Ep5", 1e3) + i(855, "vM^X", 782, 732, 624) + n(753, 759, 834, "oQvJ", 781) + r("Fny@", 1285, 1317, 1380, 1274) + ".");
          this[t(688, 898, "MMWV", 800, 905) + t(928, 724, "kQDT", 839, 970)] = new _0x3f71c1(_0x2a612c(this[n(1021, 760, 830, "97L!", 885) + "se"], this[e(946, 1108, 1032, "FHMc", 979) + i(707, "Jf&d", 733, 645, 635)]())), this[e(864, 1077, 950, "oQvJ", 829) + t(925, 993, "Uwt6", 960, 1022) + "s"](this[i(714, "FJ3e", 571, 579, 577) + i(601, "$xk@", 664, 661, 759)][i(763, "oQvJ", 751, 753, 773) + "s"]), this[r("eGlj", 1539, 1536, 1430, 1438) + i(752, "vM^X", 797, 735, 721) + e(1164, 1010, 1051, "WQ8*", 1060)](this[n(713, 881, 948, "eGlj", 830) + n(993, 1036, 938, "o8oH", 984)][r("eH[Q", 1459, 1522, 1506, 1380) + i(639, "@^eS", 664, 743, 810)]);
        }
        this[t(977, 1008, "FJ3e", 878, 769) + "se"] = await a[r("!Q7%", 1379, 1437, 1331, 1390)]();
      }
    } catch (a) {
      if (e(1219, 1090, 1096, "!f4O") !== e(1164, 1235, 1119, "oQvJ")) this[t(819, 739, "mCjD", 847) + "se"] = void (-9751 + 849 * -1 + 10600), console[r("kT!K", 1412, 1301, 1312)](a);
      else throw new _0x16f4df(r("QTV0", 1440, 1502, 1480) + e(1022, 914, 964, "]9^5") + n(1052, 1022, 875, "f8cK", 1006) + e(1262, 1036, 1138, "Jf&d") + ".");
    }
  }
  async [We(488, 368, 360, 373, "!Q7%") + Ge(579, "vM^X", 604, 507, 520) + "e"](o) {
    function t(a, s, c, d, g) {
      return Re(a - 484, s - 314, d - 690, a);
    }
    function e(a, s, c, d, g) {
      return Ge(a - 24, g, c - 107, d - 39, s - -492);
    }
    function n(a, s, c, d, g) {
      return Et(a - 221, s - 172, g - 98, d - 263, a);
    }
    this[t("!f4O", 276, 162, 274) + t("FHMc", 560, 459, 536)] = void (-4765 + -121 * 1 + -4886 * -1);
    function i(a, s, c, d, g) {
      return ye(a - 202, s - 32, s - -144, d - 175, c);
    }
    function r(a, s, c, d, g) {
      return Ge(a - 437, a, c - 312, d - 113, s - 1082);
    }
    if (!o) {
      if (e(-232, -191, -162, -99, "FHMc") === i(887, 836, "1liQ", 801)) return _0x238826[i(693, 805, "pwsG", 697) + r("!f4O", 1390, 1426, 1299)][e(0, 36, 86, 46, "d2cw") + i(762, 826, "Uwt6", 861)];
      console[e(94, -7, 37, -60, "d2cw")](r("97L!", 1557, 1511, 1423) + i(802, 877, "FHMc", 813) + t("eH[Q", 294, 234, 328) + r("k&Sq", 1508, 1590, 1559) + t("554O", 368, 472, 465)), this[t("o8oH", 335, 375, 470) + "se"] = void (-77 * 115 + 45 * 30 + 7505);
      return;
    }
    await this[t("$62R", 247, 351, 269) + n("!f4O", 607, 543, 537, 623) + "se"](o);
  }
  async [Ge(382, "7NV2", 309, 366, 444) + ye(1138, 1307, 1171, 1201, "AFJ]") + Ge(506, "k&Sq", 436, 483, 524)](o) {
    var s;
    function t(c, d, g, C, u) {
      return Et(c - 293, d - 138, g - 279, C - 329, u);
    }
    function e(c, d, g, C, u) {
      return Ge(c - 17, u, g - 105, C - 207, C - -28);
    }
    if (o) {
      if (i(-112, -231, -225, "[u65", -165) === i(-321, -331, -231, "E4I0", -244)) return o;
      {
        _0x1a27df instanceof _0x32b074 ? _0x206542[t(889, 726, 769, 854, "E4I0")]() : _0x4e7c43 instanceof _0x335214 && _0x330477[n(-181, -309, "(rTJ", -213, -180)](_0xded8a2);
        const c = {};
        c[n(-285, -242, "pwsG", -312, -273) + e(355, 246, 324, 382, "97L!")] = !1, c[i(-246, -204, -206, "[u65", -163) + "s"] = [], c[e(353, 400, 306, 294, "vM^X") + t(691, 736, 825, 806, "El7j")] = [], c[e(372, 534, 388, 406, "7Bfi") + e(276, 450, 339, 321, "7Waq") + t(781, 803, 778, 650, "E4I0")] = void 0, c[i(-411, -177, -342, "eGlj", -303)] = function() {
        }, c[i(23, -59, -17, "PrFt", -97) + i(-133, -248, -132, "qs!&", -251)] = "", this[i(-224, -239, -181, "$xk@", -225) + t(807, 695, 697, 766, "(rTJ")] = new _0x3ff7de(c);
      }
    }
    function n(c, d, g, C, u) {
      return ye(c - 486, d - 336, u - -1256, C - 115, g);
    }
    function i(c, d, g, C, u) {
      return Re(c - 75, d - 116, u - 90, C);
    }
    if ((await fetch(this[n(-225, -28, "El7j", -80, -128) + a(1185, 1169, "FJ3e", 1176, 1294) + e(336, 368, 325, 346, "f8cK") + a(1101, 1156, "kQDT", 1202, 1230)][-205 + -4507 * -1 + -4302])).ok)
      if (a(1158, 1345, "pwsG", 1226, 1258) === t(517, 566, 638, 710, "AFJ]")) {
        const c = _0xb6e8ad[n(-357, -245, "97L!", -312, -265)](this[i(-199, -146, -73, "7NV2", -66) + "se"]);
        return (s = c == null ? void 0 : c[i(-228, -104, -85, "Jf&d", -217) + t(829, 755, 723, 689, "vM^X")]) == null ? void 0 : s[t(740, 796, 673, 549, "7Waq") + i(-301, -384, -310, "1liQ", -301)];
      } else return this[t(768, 591, 659, 614, "eGlj") + n(23, -180, "k&Sq", -77, -87) + t(707, 890, 776, 770, "mCjD") + e(318, 213, 216, 279, "7NV2")][-1389 + -2316 * 1 + 741 * 5];
    function a(c, d, g, C, u) {
      return We(c - 366, u - 987, g - 118, C - 147, g);
    }
    return this[n(-114, -184, "D^ed", -235, -229) + t(956, 900, 820, 761, "k&Sq") + n(-372, -185, "97L!", -300, -263) + a(1438, 1313, "eGlj", 1316, 1371)][1];
  }
  [ye(1110, 1133, 1007, 924, "FHMc") + Re(-114, -96, -151, "i6*R") + "s"](o) {
    function t(e, n, i, r, a) {
      return We(e - 223, r - 1208, i - 435, r - 331, a);
    }
    o[t(1414, 1655, 1561, 1524, "Uwt6") + "ch"]((e) => console[t(1542, 1553, 1396, 1464, "7Bfi")](e));
  }
  [We(159, 142, 209, 216, "7JTP") + We(327, 371, 332, 253, "eGlj") + Ge(264, "$62R", 261, 443, 348)](o) {
    function t(n, i, r, a, s) {
      return Re(n - 221, i - 47, a - 184, i);
    }
    function e(n, i, r, a, s) {
      return ye(n - 164, i - 75, a - 367, a - 211, s);
    }
    o[e(1355, 1447, 1376, 1450, "$xk@") + "ch"]((n) => console[t(-145, "7Waq", -162, -90)](n));
  }
  [ye(1206, 977, 1106, 1241, "sBmv") + We(194, 285, 164, 404, "i6*R")]() {
    function o(n, i, r, a, s) {
      return ye(n - 159, i - 352, r - -250, a - 453, s);
    }
    function t(n, i, r, a, s) {
      return Re(n - 436, i - 14, n - 63, i);
    }
    function e(n, i, r, a, s) {
      return Re(n - 361, i - 127, n - 607, s);
    }
    return window[o(919, 806, 815, 934, "kQDT") + e(233, 205, 179, 330, "vM^X")][t(-176, "i6*R") + e(330, 330, 291, 432, "oQvJ")];
  }
  [ye(937, 901, 938, 1068, "PrFt") + Ge(448, "RwRT", 308, 497, 437) + Ge(388, "ZQBw", 544, 383, 456)]() {
    function o(r, a, s, c, d) {
      return We(r - 87, c - -361, s - 340, c - 481, s);
    }
    function t(r, a, s, c, d) {
      return ye(r - 40, a - 393, d - -520, c - 74, c);
    }
    function e(r, a, s, c, d) {
      return Et(r - 295, a - 319, r - 66, c - 335, d);
    }
    function n(r, a, s, c, d) {
      return We(r - 110, a - -368, s - 101, c - 485, s);
    }
    function i(r, a, s, c, d) {
      return Re(r - 321, a - 263, a - -17, r);
    }
    try {
      if (e(390, 393, 313, 464, "$62R") !== o(-67, 15, "i6*R", -47, 81)) _0x393daa[e(531, 608, 484, 399, "kQDT")](_0x36ae1d);
      else {
        if (!this[t(622, 653, 662, "(rTJ", 574) + "se"]) {
          if (t(455, 558, 405, "@^eS", 459) !== t(597, 451, 604, "i6*R", 470)) throw new Xo(e(381, 245, 355, 352, "[@BE") + n(-300, -219, "k&Sq", -163, -296) + o(-8, 21, "Fny@", 32, 95) + t(517, 326, 323, "FR[9", 393) + ".");
          return;
        }
        if (!this[e(353, 277, 409, 251, "7Bfi") + i("!f4O", -426, -338, -467, -419) + "d"][n(-61, -161, "FHMc", -156, -273) + n(-16, 43, "FJ3e", 92, 119) + o(-265, -238, "QTV0", -143, -164) + "ed"]())
          if (n(-229, -153, "!Q7%", -41, -267) !== e(572, 515, 588, 602, "kQDT")) _0x3e8de3[t(589, 566, 451, "sBmv", 483) + "ch"]((r) => _0x47e524[o(-7, 20, "kT!K", -73, -94)](r));
          else throw new Xo(o(-111, -96, "$xk@", -188, -278) + n(89, 13, "1liQ", -53, -32) + t(643, 583, 729, "7Bfi", 652) + e(456, 323, 528, 322, "mCjD") + ".");
        this[e(467, 499, 430, 399, "7Bfi") + n(-249, -209, "D^ed", -113, -193)] = new Qa(MI(this[n(-260, -183, "ZQBw", -95, -211) + "se"], this[e(437, 399, 395, 558, "!f4O") + i("@^eS", -223, -275, -178, -231)]())), this[i("7JTP", -436, -399, -515, -547) + n(-109, -50, "2Ep5", 4, 42) + "s"](this[o(46, -9, "d2cw", 28, 81) + o(-32, 51, "MMWV", -15, 31)][i("7Bfi", -220, -348, -103, -271) + "s"]), this[t(513, 376, 326, "7Bfi", 454) + t(369, 425, 426, "E4I0", 428) + e(442, 382, 404, 315, "sBmv")](this[t(531, 630, 674, "mCjD", 553) + e(490, 496, 537, 479, "97L!")][i("[@BE", -226, -148, -257, -118) + i("!Q7%", -311, -325, -191, -330)]);
      }
    } catch (r) {
      if (i("7JTP", -217) === o(86, 69, "97L!", 1)) this[e(493, 361, 440, 456, "97L!") + "se"] = void (-1 * -6148 + 5352 + -11500), _0x8e9d78[o(-89, 1, "pwsG", -11)](_0x177fad);
      else {
        if (r instanceof Xo) i("o8oH", -203) !== o(-42, -197, "[@BE", -120) ? r[n(-86, -185, "7Bfi", -264)]() : this[e(504, 462, 451, 461, "[u65") + t(534, 597, 524, "mCjD", 522) + "d"] = _0x4473b2;
        else if (r instanceof Error)
          if (i("[u65", -267) === t(361, 552, 381, "i6*R", 445)) {
            _0x531851[n(-167, -34, "d2cw", -145)](n(-55, -68, "$62R", 16) + i("f8cK", -231) + o(-173, -82, "mCjD", -84) + t(606, 490, 407, "$xk@", 496) + n(-132, -217, "vM^X", -83)), this[i("Jf&d", -192) + "se"] = void (-163 * 31 + 7508 + -1 * 2455);
            return;
          } else console[i("qs!&", -412)](r);
        const a = {};
        a[e(539, 566, 645, 672, "97L!") + n(-96, 28, "[@BE", 62)] = !1, a[o(-338, -304, "2Ep5", -203) + "s"] = [], a[t(450, 691, 641, "MMWV", 582) + o(-164, -89, "Uwt6", -71)] = [], a[n(-55, -173, "Uwt6", -81) + o(-83, -93, "k&Sq", -129) + e(584, 700, 505, 497, "vM^X")] = void 0, a[i("97L!", -169)] = function() {
        }, a[o(-40, 41, "sBmv", -18) + n(-178, -118, "^Pv6", -109)] = "", this[i("vM^X", -411) + t(601, 456, 558, "$xk@", 528)] = new Qa(a);
      }
    }
  }
  [We(220, 193, 307, 155, "eH[Q") + ye(1156, 1051, 1035, 1170, "7NV2") + Et(411, 266, 377, 353, "(rTJ") + "t"]() {
    function o(t, e, n, i, r) {
      return Ge(t - 191, r, n - 360, i - 372, e - 189);
    }
    return this[o(711, 605, 531, 544, "k&Sq") + o(415, 526, 424, 475, "$62R")];
  }
  [Re(-346, -225, -246, "MMWV") + Re(-261, -415, -382, "kQDT") + Ge(466, "f8cK", 358, 475, 396)]() {
    var r;
    function o(a, s, c, d, g) {
      return We(a - 207, s - 488, c - 114, d - 146, c);
    }
    function t(a, s, c, d, g) {
      return Ge(a - 476, c, c - 84, d - 355, a - 880);
    }
    function e(a, s, c, d, g) {
      return Re(a - 475, s - 480, d - 907, s);
    }
    function n(a, s, c, d, g) {
      return ye(a - 401, s - 350, s - -250, d - 421, a);
    }
    function i(a, s, c, d, g) {
      return ye(a - 462, s - 316, s - -212, d - 319, d);
    }
    if (!this[i(769, 747, 759, "ZQBw") + "se"])
      if (i(980, 956, 846, "d2cw") !== o(889, 852, "Uwt6", 784)) _0x5f2fa1[o(812, 889, "FHMc", 779)]();
      else return;
    try {
      if (n("QTV0", 726, 614, 622, 671) !== e(637, "AFJ]", 606, 598, 626)) _0x51b97e[n("7Waq", 825, 860, 755, 873) + "ch"]((a) => _0xa9ee23[t(1291, 1391, "[@BE", 1327, 1265)](a));
      else {
        const a = JSON[i(953, 887, 808, "MMWV", 848)](this[e(534, "WQ8*", 718, 582, 608) + "se"]);
        return (r = a == null ? void 0 : a[e(556, "RwRT", 690, 583, 647) + e(623, "7JTP", 631, 518, 474)]) == null ? void 0 : r[i(878, 742, 716, "i6*R", 626) + t(1271, 1185, "WQ8*", 1360, 1323)];
      }
    } catch (a) {
      if (t(1354, 1453, "E4I0", 1452) !== n("FHMc", 821, 704, 685)) {
        _0x1b2fb3 instanceof _0x3f1f1a && _0x5da727[o(945, 892, "^Pv6", 792) + i(805, 811, 911, "o8oH")](_0x47bc9d);
        return;
      } else {
        if (a instanceof Error)
          if (n("]9^5", 911, 997, 964) !== o(807, 723, "!Q7%", 687)) xe[e(784, "QTV0", 602, 713) + i(788, 716, 834, "@^eS")](a);
          else return this[t(1390, 1364, "Jf&d", 1372) + e(443, "1liQ", 414, 530) + t(1361, 1297, "d2cw", 1388) + n("[u65", 787, 866, 791)][260 + 20 * -13];
        return;
      }
    }
  }
}
const $x = class $x extends UI {
  static getInstance() {
    if (!this._instance) {
      const o = new _I();
      this._instance = new $x(o);
    }
    return this._instance;
  }
};
E($x, "_instance");
let Ti = $x;
const QI = ({ children: x }) => {
  const o = Ot(null);
  return n1(o, kt.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ O(mu, { ref: o, children: x });
}, zI = ({ cameraOptions: x }) => x ? /* @__PURE__ */ O(uu, { target: x.styleTarget, children: /* @__PURE__ */ O(
  Tu,
  {
    licensePath: x.licensePath,
    bramble: Ti.getInstance(),
    wasmDirectoryPath: x.wasmDirectoryPath,
    children: /* @__PURE__ */ O(Du, { analytics: NI, appKey: "065cf6e242fc5e785cd17eebfbfbbd212a33133b", children: /* @__PURE__ */ O(
      Gu,
      {
        value: TI({
          onError: x.onError
        }),
        children: /* @__PURE__ */ O(tc, { children: /* @__PURE__ */ O(QI, { children: /* @__PURE__ */ O(PI, { ...x }) }) })
      }
    ) })
  }
) }) : null;
Wg(zI, "x-dot-document-auto-capture", ["cameraOptions"]);
