var sg = Object.defineProperty;
var Tr = (x) => {
  throw TypeError(x);
};
var cg = (x, o, t) => o in x ? sg(x, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : x[o] = t;
var D = (x, o, t) => cg(x, typeof o != "symbol" ? o + "" : o, t), Dr = (x, o, t) => o.has(x) || Tr("Cannot " + t);
var N = (x, o, t) => (Dr(x, o, "read from private field"), t ? t.call(x) : o.get(x)), ce = (x, o, t) => o.has(x) ? Tr("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(x) : o.set(x, t), ae = (x, o, t, e) => (Dr(x, o, "write to private field"), e ? e.call(x, t) : o.set(x, t), t);
var Gn, Y, $a, es, qt, Er, ts, Mo, Ti, _o, Jo, ns, In = {}, xs = [], gg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, eo = Array.isArray;
function kt(x, o) {
  for (var t in o) x[t] = o[t];
  return x;
}
function os(x) {
  var o = x.parentNode;
  o && o.removeChild(x);
}
function Ve(x, o, t) {
  var e, n, i, r = {};
  for (i in o) i == "key" ? e = o[i] : i == "ref" ? n = o[i] : r[i] = o[i];
  if (arguments.length > 1 * 899 + -2555 + 2 * 829 && (r.children = arguments.length > 829 * 9 + -3131 * 2 + -1 * 1196 ? Gn.call(arguments, 49 * 109 + 164 * 37 + -1 * 11407) : t), typeof x == "function" && x.defaultProps != null)
    for (i in x.defaultProps) void (10067 + -1 * 10067) === r[i] && (r[i] = x.defaultProps[i]);
  return gn(x, r, e, n, null);
}
function gn(x, o, t, e, n) {
  var i = {};
  i.type = x, i.props = o, i.key = t, i.ref = e, i.__k = null, i.__ = null, i.__b = 0, i.__e = null, i.__d = void (-1 * -467 + 6382 + 6849 * -1), i.__c = null, i.constructor = void (-1038 + 2 * 519), i.__v = n ?? ++$a, i.__i = -(-9504 + 2 * -1596 + 1 * 12697), i.__u = 0;
  var r = i;
  return n == null && Y.vnode != null && Y.vnode(r), r;
}
function dg() {
  var x = {};
  return x.current = null, x;
}
function xt(x) {
  return x.children;
}
function et(x, o) {
  this.props = x, this.context = o;
}
function s0(x, o) {
  if (o == null) return x.__ ? s0(x.__, x.__i + (-5780 + 1 * 7641 + -3 * 620)) : null;
  for (var t; o < x.__k.length; o++) if ((t = x.__k[o]) != null && t.__e != null) return t.__e;
  return typeof x.type == "function" ? s0(x) : null;
}
function is(x) {
  var o, t;
  if ((x = x.__) != null && x.__c != null) {
    for (x.__e = x.__c.base = null, o = -1 * -5851 + 97 * 31 + -8858; o < x.__k.length; o++) if ((t = x.__k[o]) != null && t.__e != null) {
      x.__e = x.__c.base = t.__e;
      break;
    }
    return is(x);
  }
}
function Uo(x) {
  (!x.__d && (x.__d = !(-6502 + 1 * 983 + 5519)) && qt.push(x) && !Ax.__r++ || Er !== Y.debounceRendering) && ((Er = Y.debounceRendering) || ts)(Ax);
}
function Ax() {
  var x, o, t, e, n, i, r, a;
  for (qt.sort(Mo); x = qt.shift(); ) x.__d && (o = qt.length, e = void (-4285 + -6 * 1423 + 1 * 12823), i = (n = (t = x).__v).__e, r = [], a = [], t.__P && ((e = kt({}, n)).__v = n.__v + 1, Y.vnode && Y.vnode(e), Di(t.__P, e, n, t.__n, t.__P.namespaceURI, 32 & n.__u ? [i] : null, r, i ?? s0(n), !!(32 & n.__u), a), e.__v = n.__v, e.__.__k[e.__i] = e, ss(r, e, a), e.__e != i && is(e)), qt.length > o && qt.sort(Mo));
  Ax.__r = 449 * -22 + 2207 * 3 + 3257;
}
function rs(x, o, t, e, n, i, r, a, s, c, d) {
  var g, p, u, C, b, A = e && e.__k || xs, l = o.length;
  for (t.__d = s, ug(t, o, A), s = t.__d, g = -26 * -317 + -9126 + 884; g < l; g++) (u = t.__k[g]) != null && typeof u != "boolean" && typeof u != "function" && (p = u.__i === -1 ? In : A[u.__i] || In, u.__i = g, Di(x, u, p, n, i, r, a, s, c, d), C = u.__e, u.ref && p.ref != u.ref && (p.ref && Ei(p.ref, null, u), d.push(u.ref, u.__c || C, u)), b == null && C != null && (b = C), 35676 * -1 + -10 * 660 + 107812 & u.__u || p.__k === u.__k ? (s && typeof u.type == "string" && !x.contains(s) && (s = s0(p)), s = as(u, s, x)) : typeof u.type == "function" && void (-25 * -138 + 6650 + -10100) !== u.__d ? s = u.__d : C && (s = C.nextSibling), u.__d = void 0, u.__u &= -196609);
  t.__d = s, t.__e = b;
}
function ug(x, o, t) {
  var e, n, i, r, a, s = o.length, c = t.length, d = c, g = -9789 + -753 * -13;
  for (x.__k = [], e = -26 * 307 + 3 * 1106 + -2332 * -2; e < s; e++) r = e + g, (n = x.__k[e] = (n = o[e]) == null || typeof n == "boolean" || typeof n == "function" ? null : typeof n == "string" || typeof n == "number" || typeof n == "bigint" || n.constructor == String ? gn(null, n, null, null, null) : eo(n) ? gn(xt, { children: n }, null, null, null) : n.constructor === void 0 && n.__b > 8241 * -1 + -6382 + 14623 ? gn(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v) : n) != null ? (n.__ = x, n.__b = x.__b + (3062 + -3061 * 1), a = lg(n, t, r, d), n.__i = a, i = null, -(7019 + 4143 * -1 + -115 * 25) !== a && (d--, (i = t[a]) && (i.__u |= -242422 + -66 * -5659)), i == null || i.__v === null ? (-(-9743 + 701 * 6 + -3 * -1846) == a && g--, typeof n.type != "function" && (n.__u |= -3646 * 6 + -105077 * 1 + -33 * -5833)) : a !== r && (a == r - (5301 + -531 * -2 + -6362) ? g = a - r : a == r + (8452 + -1681 * -3 + 519 * -26) ? g++ : a > r ? d > s - r ? g += a - r : g-- : a < r && g++, a !== e + g && (n.__u |= 1186 * -26 + -82 * -38 + -46628 * -2))) : (i = t[r]) && i.key == null && i.__e && !(-73639 * 1 + 1 * 240026 + -5045 * 7 & i.__u) && (i.__e == x.__d && (x.__d = s0(i)), Qo(i, i, !(-797 * -1 + -5179 + 4383 * 1)), t[r] = null, d--);
  if (d)
    for (e = 0; e < c; e++) (i = t[e]) != null && -2 * 2887 + 8127 + 181 * -13 == (27491 * -1 + -60432 + -35 * -6257 & i.__u) && (i.__e == x.__d && (x.__d = s0(i)), Qo(i, i));
}
function as(x, o, t) {
  var e, n;
  if (typeof x.type == "function") {
    for (e = x.__k, n = 1 * -8613 + -980 + 9593; e && n < e.length; n++) e[n] && (e[n].__ = x, o = as(e[n], o, t));
    return o;
  }
  x.__e != o && (t.insertBefore(x.__e, o || null), o = x.__e);
  do
    o = o && o.nextSibling;
  while (o != null && 1 * -386 + -14 * -265 + -3316 === o.nodeType);
  return o;
}
function Ot(x, o) {
  return o = o || [], x == null || typeof x == "boolean" || (eo(x) ? x.some(function(t) {
    Ot(t, o);
  }) : o.push(x)), o;
}
function lg(x, o, t, e) {
  var n = x.key, i = x.type, r = t - (6326 + 101 * 5 + -1366 * 5), a = t + 1, s = o[t];
  if (s === null || s && n == s.key && i === s.type && 8939 * 1 + 9447 + -18386 == (40533 + -38177 * -3 + -23992 & s.__u)) return t;
  if (e > (s != null && -233 * 19 + -7460 + 11887 == (-145 * 1087 + -1154 * -86 + 189443 & s.__u) ? 1 * -7233 + -51 * 172 + 16006 : 0)) for (; r >= 2723 + 2 * 1126 + 5 * -995 || a < o.length; ) {
    if (r >= -1 * 2999 + -7779 + 10778) {
      if ((s = o[r]) && -51 * 59 + 4185 * 1 + -49 * 24 == (1 * -51499 + 1 * -8606 + 191177 & s.__u) && n == s.key && i === s.type) return r;
      r--;
    }
    if (a < o.length) {
      if ((s = o[a]) && 7331 + 29 * 83 + 2 * -4869 == (-2784 * -23 + -133781 * -1 + -22247 * 3 & s.__u) && n == s.key && i === s.type) return a;
      a++;
    }
  }
  return -(38 * 160 + 5463 + -11542);
}
function Lr(x, o, t) {
  o[1 * 6326 + 3290 + -16 * 601] === "-" ? x.setProperty(o, t ?? "") : x[o] = t == null ? "" : typeof t != "number" || gg.test(o) ? t : t + "px";
}
function _n(x, o, t, e, n) {
  var i;
  e: if (o === "style")
    if (typeof t == "string") x.style.cssText = t;
    else {
      if (typeof e == "string" && (x.style.cssText = e = ""), e)
        for (o in e) t && o in t || Lr(x.style, o, "");
      if (t)
        for (o in t) e && t[o] === e[o] || Lr(x.style, o, t[o]);
    }
  else if (o[0] === "o" && o[167 * -7 + 2 * 1354 + -1538] === "n") i = o !== (o = o.replace(/(PointerCapture)$|Capture$/i, "$1")), o = o.toLowerCase() in x || o === "onFocusOut" || o === "onFocusIn" ? o.toLowerCase().slice(1 * 1171 + 3547 + -4716) : o.slice(-5591 + 130 * 52 + -1167), x.l || (x.l = {}), x.l[o + i] = t, t ? e ? t.u = e.u : (t.u = Ti, x.addEventListener(o, i ? Jo : _o, i)) : x.removeEventListener(o, i ? Jo : _o, i);
  else {
    if (n == "http://www.w3.org/2000/svg") o = o.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (o != "width" && o != "height" && o != "href" && o != "list" && o != "form" && o != "tabIndex" && o != "download" && o != "rowSpan" && o != "colSpan" && o != "role" && o != "popover" && o in x) try {
      x[o] = t ?? "";
      break e;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && o[-10 * -424 + -94 * 11 + -3202] !== "-" ? x.removeAttribute(o) : x.setAttribute(o, o == "popover" && 1 * -2131 + -8392 + 2631 * 4 == t ? "" : t));
  }
}
function Nr(x) {
  return function(o) {
    if (this.l) {
      var t = this.l[o.type + x];
      if (o.t == null) o.t = Ti++;
      else if (o.t < t.u) return;
      return t(Y.event ? Y.event(o) : o);
    }
  };
}
function Di(x, o, t, e, n, i, r, a, s, c) {
  var d, g, p, u, C, b, A, l, v, R, j, M, J, H, oe, U, ee = o.type;
  if (o.constructor !== void 0) return null;
  -451 * -9 + 9611 + -13542 & t.__u && (s = !!(32 & t.__u), i = [a = o.__e = t.__e]), (d = Y.__b) && d(o);
  e: if (typeof ee == "function") try {
    if (l = o.props, v = "prototype" in ee && ee.prototype.render, R = (d = ee.contextType) && e[d.__c], j = d ? R ? R.props.value : d.__ : e, t.__c ? A = (g = o.__c = t.__c).__ = g.__E : (v ? o.__c = g = new ee(l, j) : (o.__c = g = new et(l, j), g.constructor = ee, g.render = fg), R && R.sub(g), g.props = l, g.state || (g.state = {}), g.context = j, g.__n = e, p = g.__d = !(-9416 + -1373 * 7 + 19027), g.__h = [], g._sb = []), v && g.__s == null && (g.__s = g.state), v && ee.getDerivedStateFromProps != null && (g.__s == g.state && (g.__s = kt({}, g.__s)), kt(g.__s, ee.getDerivedStateFromProps(l, g.__s))), u = g.props, C = g.state, g.__v = o, p) v && ee.getDerivedStateFromProps == null && g.componentWillMount != null && g.componentWillMount(), v && g.componentDidMount != null && g.__h.push(g.componentDidMount);
    else {
      if (v && ee.getDerivedStateFromProps == null && l !== u && g.componentWillReceiveProps != null && g.componentWillReceiveProps(l, j), !g.__e && (g.shouldComponentUpdate != null && !(19 * -523 + 521 * 14 + 2644) === g.shouldComponentUpdate(l, g.__s, j) || o.__v === t.__v)) {
        for (o.__v !== t.__v && (g.props = l, g.state = g.__s, g.__d = !(3977 + 3976 * -1)), o.__e = t.__e, o.__k = t.__k, o.__k.forEach(function(Te) {
          Te && (Te.__ = o);
        }), M = 3704 * -2 + 621 * 16 + -2528; M < g._sb.length; M++) g.__h.push(g._sb[M]);
        g._sb = [], g.__h.length && r.push(g);
        break e;
      }
      g.componentWillUpdate != null && g.componentWillUpdate(l, g.__s, j), v && g.componentDidUpdate != null && g.__h.push(function() {
        g.componentDidUpdate(u, C, b);
      });
    }
    if (g.context = j, g.props = l, g.__P = x, g.__e = !(-5004 + -782 * -8 + -1251), J = Y.__r, H = 11410 + 1141 * -10, v) {
      for (g.state = g.__s, g.__d = !(2398 + -1666 * 1 + 1 * -731), J && J(o), d = g.render(g.props, g.state, g.context), oe = -5850 + 39 * 150; oe < g._sb.length; oe++) g.__h.push(g._sb[oe]);
      g._sb = [];
    } else do
      g.__d = !(-6775 + 1 * 6271 + 505), J && J(o), d = g.render(g.props, g.state, g.context), g.state = g.__s;
    while (g.__d && ++H < -10397 + -6 * -1737);
    g.state = g.__s, g.getChildContext != null && (e = kt(kt({}, e), g.getChildContext())), v && !p && g.getSnapshotBeforeUpdate != null && (b = g.getSnapshotBeforeUpdate(u, C)), rs(x, eo(U = d != null && d.type === xt && d.key == null ? d.props.children : d) ? U : [U], o, t, e, n, i, r, a, s, c), g.base = o.__e, o.__u &= -(168 * 48 + 2391 * -3 + -5 * 146), g.__h.length && r.push(g), A && (g.__E = g.__ = null);
  } catch (Te) {
    o.__v = null, s || i != null ? (o.__e = a, o.__u |= s ? -1735 * -3 + -5662 + 617 : -1 * -89 + 2515 + -2572 * 1, i[i.indexOf(a)] = null) : (o.__e = t.__e, o.__k = t.__k), Y.__e(Te, o, t);
  }
  else i == null && o.__v === t.__v ? (o.__k = t.__k, o.__e = t.__e) : o.__e = Ig(t.__e, o, t, e, n, i, r, s, c);
  (d = Y.diffed) && d(o);
}
function ss(x, o, t) {
  o.__d = void (3 * 1851 + 821 + -6374);
  for (var e = -2 * -1511 + -1073 * 1 + -1 * 1949; e < t.length; e++) Ei(t[e], t[++e], t[++e]);
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
function Ig(x, o, t, e, n, i, r, a, s) {
  var c, d, g, p, u, C, b, A = t.props, l = o.props, v = o.type;
  if (v === "svg" ? n = "http://www.w3.org/2000/svg" : v === "math" ? n = "http://www.w3.org/1998/Math/MathML" : n || (n = "http://www.w3.org/1999/xhtml"), i != null) {
    for (c = 0; c < i.length; c++) if ((u = i[c]) && "setAttribute" in u == !!v && (v ? u.localName === v : 1294 + 4 * 2428 + -1 * 11003 === u.nodeType)) {
      x = u, i[c] = null;
      break;
    }
  }
  if (x == null) {
    if (v === null) return document.createTextNode(l);
    x = document.createElementNS(n, v, l.is && l), i = null, a = !(3587 + -2297 * -1 + -5883);
  }
  if (v === null) A === l || a && x.data === l || (x.data = l);
  else {
    if (i = i && Gn.call(x.childNodes), A = t.props || In, !a && i != null)
      for (A = {}, c = -15151 + 1 * 15151; c < x.attributes.length; c++) A[(u = x.attributes[c]).name] = u.value;
    for (c in A) if (u = A[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") g = u;
      else if (c !== "key" && !(c in l)) {
        if (c == "value" && "defaultValue" in l || c == "checked" && "defaultChecked" in l) continue;
        _n(x, c, null, u, n);
      }
    }
    for (c in l) u = l[c], c == "children" ? p = u : c == "dangerouslySetInnerHTML" ? d = u : c == "value" ? C = u : c == "checked" ? b = u : c === "key" || a && typeof u != "function" || A[c] === u || _n(x, c, u, A[c], n);
    if (d) a || g && (d.__html === g.__html || d.__html === x.innerHTML) || (x.innerHTML = d.__html), o.__k = [];
    else if (g && (x.innerHTML = ""), rs(x, eo(p) ? p : [p], o, t, e, v === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n, i, r, i ? i[0] : t.__k && s0(t, -3538 + 47 * -3 + 3679), a, s), i != null)
      for (c = i.length; c--; ) i[c] != null && os(i[c]);
    a || (c = "value", void (1 * 9294 + 2802 + -1728 * 7) !== C && (C !== x[c] || v === "progress" && !C || v === "option" && C !== A[c]) && _n(x, c, C, A[c], n), c = "checked", void (6761 * 1 + 3 * -1335 + -2756) !== b && b !== x[c] && _n(x, c, b, A[c], n));
  }
  return x;
}
function Ei(x, o, t) {
  try {
    typeof x == "function" ? x(o) : x.current = o;
  } catch (e) {
    Y.__e(e, t);
  }
}
function Qo(x, o, t) {
  var e, n;
  if (Y.unmount && Y.unmount(x), (e = x.ref) && (e.current && e.current !== x.__e || Ei(e, null, o)), (e = x.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (i) {
      Y.__e(i, o);
    }
    e.base = e.__P = null;
  }
  if (e = x.__k)
    for (n = 3929 * 1 + 2941 + -10 * 687; n < e.length; n++) e[n] && Qo(e[n], o, t || typeof x.type != "function");
  t || x.__e == null || os(x.__e), x.__c = x.__ = x.__e = x.__d = void 0;
}
function fg(x, o, t) {
  return this.constructor(x, t);
}
function Ft(x, o, t) {
  var e, n, i, r;
  Y.__ && Y.__(x, o), n = (e = typeof t == "function") ? null : t && t.__k || o.__k, i = [], r = [], Di(o, x = (!e && t || o).__k = Ve(xt, null, [x]), n || In, In, o.namespaceURI, !e && t ? [t] : n ? null : o.firstChild ? Gn.call(o.childNodes) : null, i, !e && t ? t : n ? n.__e : o.firstChild, e, r), ss(i, x, r);
}
function Li(x, o) {
  Ft(x, o, Li);
}
function Ni(x, o, t) {
  var e, n, i, r, a = kt({}, x.props);
  for (i in x.type && x.type.defaultProps && (r = x.type.defaultProps), o) i == "key" ? e = o[i] : i == "ref" ? n = o[i] : a[i] = void (7076 + -3253 * 1 + 3823 * -1) === o[i] && void (-3151 * -1 + 7250 + -10401) !== r ? r[i] : o[i];
  return arguments.length > -2623 + 2215 * -2 + 7055 && (a.children = arguments.length > -1 * 321 + 8135 + -73 * 107 ? Gn.call(arguments, 2) : t), gn(x.type, a, e || x.key, n || x.ref, null);
}
function kn(x, o) {
  var t = { __c: o = "__cC" + ns++, __: x, Consumer: function(e, n) {
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
Gn = xs.slice, Y = { __e: function(x, o, t, e) {
  for (var n, i, r; o = o.__; ) if ((n = o.__c) && !n.__) try {
    if ((i = n.constructor) && i.getDerivedStateFromError != null && (n.setState(i.getDerivedStateFromError(x)), r = n.__d), n.componentDidCatch != null && (n.componentDidCatch(x, e || {}), r = n.__d), r) return n.__E = n;
  } catch (a) {
    x = a;
  }
  throw x;
} }, $a = 9941 + -1 * 9941, es = function(x) {
  return x != null && x.constructor == null;
}, et.prototype.setState = function(x, o) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = kt({}, this.state), typeof x == "function" && (x = x(kt({}, t), this.props)), x && kt(t, x), x != null && this.__v && (o && this._sb.push(o), Uo(this));
}, et.prototype.forceUpdate = function(x) {
  this.__v && (this.__e = !(-5642 + -13 * -83 + 4563), x && this.__h.push(x), Uo(this));
}, et.prototype.render = xt, qt = [], ts = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Mo = function(x, o) {
  return x.__v.__b - o.__v.__b;
}, Ax.__r = 6847 + -658 * -1 + -7505, Ti = 4101 + -2 * 3932 + 3763 * 1, _o = Nr(!(14074 + 3 * -4691)), Jo = Nr(!(-3910 + -8 * -1047 + -4466)), ns = 0;
function Yi() {
  return (Yi = Object.assign ? Object.assign.bind() : function(x) {
    for (var o = 1313 + -2586 * -1 + 1949 * -2; o < arguments.length; o++) {
      var t = arguments[o];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (x[e] = t[e]);
    }
    return x;
  }).apply(this, arguments);
}
var Cg = ["context", "children"];
function pg(x) {
  this.getChildContext = function() {
    return x.context;
  };
  var o = x.children, t = function(e, n) {
    if (e == null) return {};
    var i, r, a = {}, s = Object.keys(e);
    for (r = -4427 + 4 * 859 + 1 * 991; r < s.length; r++) n.indexOf(i = s[r]) >= 50 * 66 + 66 * 150 + -13200 || (a[i] = e[i]);
    return a;
  }(x, Cg);
  return Ni(o, t);
}
function hg() {
  var x = {};
  x.detail = {}, x.bubbles = !(645 * 9 + -9324 + 3519), x.cancelable = !(1009 * -5 + 239 * -2 + -7 * -789);
  var o = new CustomEvent("_preact", x);
  this.dispatchEvent(o), this._vdom = Ve(pg, Yi({}, this._props, { context: o.detail.context }), function t(e, n) {
    if (-7931 + 2333 * -1 + -1 * -10267 === e.nodeType) return e.data;
    if (e.nodeType !== 1) return null;
    var i = [], r = {}, a = 767 * -13 + 9155 + -68 * -12, s = e.attributes, c = e.childNodes;
    for (a = s.length; a--; ) s[a].name !== "slot" && (r[s[a].name] = s[a].value, r[cs(s[a].name)] = s[a].value);
    for (a = c.length; a--; ) {
      var d = t(c[a], null), g = c[a].slot;
      g ? r[g] = Ve(Yr, { name: g }, d) : i[a] = d;
    }
    var p = n ? Ve(Yr, null, i) : i;
    return Ve(n || e.nodeName.toLowerCase(), r, p);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Li : Ft)(this._vdom, this._root);
}
function cs(x) {
  return x.replace(/-(\w)/g, function(o, t) {
    return t ? t.toUpperCase() : "";
  });
}
function mg(x, o, t) {
  if (this._vdom) {
    var e = {};
    e[x] = t = t ?? void (-1 * 3407 + 11 * -411 + 3964 * 2), e[cs(x)] = t, this._vdom = Ni(this._vdom, e), Ft(this._vdom, this._root);
  }
}
function bg() {
  Ft(this._vdom = null, this._root);
}
function Yr(x, o) {
  var t = this;
  return Ve("slot", Yi({}, x, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(n) {
      n.stopPropagation(), n.detail.context = o;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function Ag(x, o, t, e) {
  function n() {
    var i = Reflect.construct(HTMLElement, [], n);
    return i._vdomComponent = x, i._root = i, i;
  }
  return (n.prototype = Object.create(HTMLElement.prototype)).constructor = n, n.prototype.connectedCallback = hg, n.prototype.attributeChangedCallback = mg, n.prototype.disconnectedCallback = bg, t = t || x.observedAttributes || Object.keys(x.propTypes || {}), n.observedAttributes = t, t.forEach(function(i) {
    Object.defineProperty(n.prototype, i, { get: function() {
      return this._vdom.props[i];
    }, set: function(r) {
      this._vdom ? this.attributeChangedCallback(i, null, r) : (this._props || (this._props = {}), this._props[i] = r, this.connectedCallback());
      var a = typeof r;
      r != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(i, r);
    } });
  }), customElements.define(o, n);
}
var yg = 11063 + -37 * 299;
function O(x, o, t, e, n, i) {
  o || (o = {});
  var r, a, s = o;
  if ("ref" in s)
    for (a in s = {}, o) a == "ref" ? r = o[a] : s[a] = o[a];
  var c = {};
  c.type = x, c.props = s, c.key = t, c.ref = r, c.__k = null, c.__ = null, c.__b = 0, c.__e = null, c.__d = void (11948 + -11948 * 1), c.__c = null, c.constructor = void 0, c.__v = --yg, c.__i = -(5521 + 1 * 2096 + -7616), c.__u = 0, c.__source = n, c.__self = i;
  var d = c;
  if (typeof x == "function" && (r = x.defaultProps))
    for (a in r) s[a] === void 0 && (s[a] = r[a]);
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
function Wg(x) {
  var o = Object.create(null);
  return function(t) {
    return o[t] === void 0 && (o[t] = x(t)), o[t];
  };
}
var vg = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, wg = Wg(function(x) {
  return vg.test(x) || x.charCodeAt(-10 * -587 + -5867 + -3 * 1) === -7560 + 1373 * 7 + -1940 && x.charCodeAt(58 + -1 * 8427 + 54 * 155) === 7123 * -1 + -1104 + 8337 && x.charCodeAt(564 + 281 * -2) < 960 + 2779 * 3 + 2 * -4603;
}), Xt, re, So, Fr, V0 = 1 * -1209 + 1 * 8673 + -3732 * 2, gs = [], se = Y, Xr = se.__b, jr = se.__r, Mr = se.diffed, _r = se.__c, Jr = se.unmount, Ur = se.__;
function F0(x, o) {
  se.__h && se.__h(re, x, V0 || o), V0 = 7230 + -1389 * 5 + -285;
  var t = {};
  t.__ = [], t.__h = [];
  var e = re.__H || (re.__H = t);
  return x >= e.__.length && e.__.push({}), e.__[x];
}
function tt(x) {
  return V0 = 2643 * 2 + 6081 + -11366, Fi(ls, x);
}
function Fi(x, o, t) {
  var e = F0(Xt++, 2);
  if (e.t = x, !e.__c && (e.__ = [t ? t(o) : ls(void 0, o), function(a) {
    var s = e.__N ? e.__N[0] : e.__[0], c = e.t(s, a);
    s !== c && (e.__N = [c, e.__[-1 * -6343 + 8771 * 1 + -15113]], e.__c.setState({}));
  }], e.__c = re, !re.u)) {
    var n = function(a, s, c) {
      if (!e.__c.__H) return !0;
      var d = e.__c.__H.__.filter(function(p) {
        return !!p.__c;
      });
      if (d.every(function(p) {
        return !p.__N;
      })) return !i || i.call(this, a, s, c);
      var g = !(-1367 * 7 + -1 * -4751 + 4819);
      return d.forEach(function(p) {
        if (p.__N) {
          var u = p.__[0];
          p.__ = p.__N, p.__N = void 0, u !== p.__[0] && (g = !0);
        }
      }), !(!g && e.__c.props === a) && (!i || i.call(this, a, s, c));
    };
    re.u = !(6240 + -19 * 235 + -1775);
    var i = re.shouldComponentUpdate, r = re.componentWillUpdate;
    re.componentWillUpdate = function(a, s, c) {
      if (this.__e) {
        var d = i;
        i = void (-5674 + 1 * 5674), n(a, s, c), i = d;
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
function X0(x, o) {
  var t = F0(Xt++, 4);
  !se.__s && Xi(t.__H, o) && (t.__ = x, t.i = o, re.__h.push(t));
}
function Ht(x) {
  return V0 = -28 * -83 + -2 * -4571 + -11461, _e(function() {
    var o = {};
    return o.current = x, o;
  }, []);
}
function ds(x, o, t) {
  V0 = -39 * 89 + 765 * 9 + -8 * 426, X0(function() {
    return typeof x == "function" ? (x(o()), function() {
      return x(null);
    }) : x ? (x.current = o(), function() {
      return x.current = null;
    }) : void (1 * 8123 + 1922 + -10045);
  }, t == null ? t : t.concat(x));
}
function _e(x, o) {
  var t = F0(Xt++, 7);
  return Xi(t.__H, o) && (t.__ = x(), t.__H = o, t.__h = x), t.__;
}
function Kt(x, o) {
  return V0 = 864 + 4 * -214, _e(function() {
    return x;
  }, o);
}
function u0(x) {
  var o = re.context[x.__c], t = F0(Xt++, 1596 + -7151 * 1 + 5564);
  return t.c = x, o ? (t.__ == null && (t.__ = !(-1 * 3468 + -15 * -229 + 3 * 11), o.sub(re)), o.props.value) : x.__;
}
function yx(x, o) {
  se.useDebugValue && se.useDebugValue(o ? o(x) : x);
}
function us() {
  var x = F0(Xt++, 11);
  if (!x.__) {
    for (var o = re.__v; o !== null && !o.__m && o.__ !== null; ) o = o.__;
    var t = o.__m || (o.__m = [-7492 + -2 * -3746, 0]);
    x.__ = "P" + t[8443 + -875 * 6 + -31 * 103] + "-" + t[1033 + -344 * 3]++;
  }
  return x.__;
}
function Sg() {
  for (var x; x = gs.shift(); ) if (x.__P && x.__H) try {
    x.__H.__h.forEach(rx), x.__H.__h.forEach(zo), x.__H.__h = [];
  } catch (o) {
    x.__H.__h = [], se.__e(o, x.__v);
  }
}
se.__b = function(x) {
  re = null, Xr && Xr(x);
}, se.__ = function(x, o) {
  x && o.__k && o.__k.__m && (x.__m = o.__k.__m), Ur && Ur(x, o);
}, se.__r = function(x) {
  jr && jr(x), Xt = 2263 + -1 * 2263;
  var o = (re = x.__c).__H;
  o && (So === re ? (o.__h = [], re.__h = [], o.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (-233 * 22 + 2 * -3499 + 12124);
  })) : (o.__h.forEach(rx), o.__h.forEach(zo), o.__h = [], Xt = 0)), So = re;
}, se.diffed = function(x) {
  Mr && Mr(x);
  var o = x.__c;
  o && o.__H && (o.__H.__h.length && (gs.push(o) !== 1 && Fr === se.requestAnimationFrame || ((Fr = se.requestAnimationFrame) || Bg)(Sg)), o.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (-67 * -149 + 2 * -1077 + -7829);
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
  Jr && Jr(x);
  var o, t = x.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      rx(e);
    } catch (n) {
      o = n;
    }
  }), t.__H = void (8489 + 1 * -239 + 50 * -165), o && se.__e(o, t.__v));
};
var Qr = typeof requestAnimationFrame == "function";
function Bg(x) {
  var o, t = function() {
    clearTimeout(e), Qr && cancelAnimationFrame(o), setTimeout(x);
  }, e = setTimeout(t, 100);
  Qr && (o = requestAnimationFrame(t));
}
function rx(x) {
  var o = re, t = x.__c;
  typeof t == "function" && (x.__c = void (6529 * -1 + 4778 + 1 * 1751), t()), re = o;
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
function ls(x, o) {
  return typeof o == "function" ? o(x) : o;
}
function Is(x, o) {
  for (var t in o) x[t] = o[t];
  return x;
}
function qo(x, o) {
  for (var t in x) if (t !== "__source" && !(t in o)) return !(-789 * 1 + -1803 * 5 + 9804);
  for (var e in o) if (e !== "__source" && x[e] !== o[e]) return !(-4103 * -1 + -479 * 3 + -2666);
  return !(19 * 185 + -3 * -642 + -5440);
}
function $o(x, o) {
  this.props = x, this.context = o;
}
function Gg(x, o) {
  function t(n) {
    var i = this.props.ref, r = i == n.ref;
    return !r && i && (i.call ? i(null) : i.current = null), o ? !o(this.props, n) || !r : qo(this.props, n);
  }
  function e(n) {
    return this.shouldComponentUpdate = t, Ve(x, n);
  }
  return e.displayName = "Memo(" + (x.displayName || x.name) + ")", e.prototype.isReactComponent = !(9109 + -9109 * 1), e.__f = !(166 * 17 + -179 * 35 + 3443), e;
}
($o.prototype = new et()).isPureReactComponent = !(684 + 666 * -2 + 648), $o.prototype.shouldComponentUpdate = function(x, o) {
  return qo(this.props, x) || qo(this.state, o);
};
var zr = Y.__b;
Y.__b = function(x) {
  x.type && x.type.__f && x.ref && (x.props.ref = x.ref, x.ref = null), zr && zr(x);
};
var kg = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || -4 * 391 + 5898 * 1 + -1 * 423;
function fs(x) {
  function o(t) {
    var e = Is({}, t);
    return delete e.ref, x(e, t.ref || null);
  }
  return o.$$typeof = kg, o.render = o, o.prototype.isReactComponent = o.__f = !0, o.displayName = "ForwardRef(" + (x.displayName || x.name) + ")", o;
}
var qr = function(x, o) {
  return x == null ? null : Ot(Ot(x).map(o));
}, Og = { map: qr, forEach: qr, count: function(x) {
  return x ? Ot(x).length : 6240 + -17 * 301 + -1123;
}, only: function(x) {
  var o = Ot(x);
  if (-2 * 2242 + 8237 + 1 * -3752 !== o.length) throw "Children.only";
  return o[-8868 + -301 * -2 + -8266 * -1];
}, toArray: Ot }, Zg = Y.__e;
Y.__e = function(x, o, t, e) {
  if (x.then) {
    for (var n, i = o; i = i.__; ) if ((n = i.__c) && n.__c) return o.__e == null && (o.__e = t.__e, o.__k = t.__k), n.__c(x, o);
  }
  Zg(x, o, t, e);
};
var $r = Y.unmount;
function Cs(x, o, t) {
  return x && (x.__c && x.__c.__H && (x.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), x.__c.__H = null), (x = Is({}, x)).__c != null && (x.__c.__P === t && (x.__c.__P = o), x.__c = null), x.__k = x.__k && x.__k.map(function(e) {
    return Cs(e, o, t);
  })), x;
}
function ps(x, o, t) {
  return x && t && (x.__v = null, x.__k = x.__k && x.__k.map(function(e) {
    return ps(e, o, t);
  }), x.__c && x.__c.__P === o && (x.__e && t.appendChild(x.__e), x.__c.__e = !(-5506 + -1373 * -1 + 4133), x.__c.__P = t)), x;
}
function ax() {
  this.__u = 2 * 4663 + 5511 + 401 * -37, this.t = null, this.__b = null;
}
function hs(x) {
  var o = x.__.__c;
  return o && o.__a && o.__a(x);
}
function Hg(x) {
  var o, t, e;
  function n(i) {
    if (o || (o = x()).then(function(r) {
      t = r.default || r;
    }, function(r) {
      e = r;
    }), e) throw e;
    if (!t) throw o;
    return Ve(t, i);
  }
  return n.displayName = "Lazy", n.__f = !(-461 * 17 + 3139 + -9 * -522), n;
}
function nn() {
  this.u = null, this.o = null;
}
Y.unmount = function(x) {
  var o = x.__c;
  o && o.__R && o.__R(), o && 7243 + -7211 * 1 & x.__u && (x.type = null), $r && $r(x);
}, (ax.prototype = new et()).__c = function(x, o) {
  var t = o.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var n = hs(e.__v), i = !(1 * 1125 + 4730 + -5854), r = function() {
    i || (i = !(1069 * -1 + 1290 * -1 + 2359), t.__R = null, n ? n(a) : a());
  };
  t.__R = r;
  var a = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var s = e.state.__a;
        e.__v.__k[0] = ps(s, s.__c.__P, s.__c.__O);
      }
      var c;
      for (e.setState({ __a: e.__b = null }); c = e.t.pop(); ) c.forceUpdate();
    }
  };
  e.__u++ || -67 * -89 + -1067 + -4864 & o.__u || e.setState({ __a: e.__b = e.__v.__k[-9301 + 1 * -495 + -158 * -62] }), x.then(r, r);
}, ax.prototype.componentWillUnmount = function() {
  this.t = [];
}, ax.prototype.render = function(x, o) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[0].__c;
      this.__v.__k[0] = Cs(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var n = o.__a && Ve(xt, null, x.fallback);
  return n && (n.__u &= -(32 * 25 + 8014 + -8781)), [Ve(xt, null, o.__a ? null : x.children), n];
};
var ea = function(x, o, t) {
  if (++t[179 + 178 * -1] === t[-553 * -1 + -176 + 377 * -1] && x.o.delete(o), x.props.revealOrder && (x.props.revealOrder[-4 * -1613 + 661 + -7113] !== "t" || !x.o.size)) for (t = x.u; t; ) {
    for (; t.length > 1567 + -2 * 782; ) t.pop()();
    if (t[1 * -1263 + -2322 + 326 * 11] < t[1307 * 5 + -2347 + -4188]) break;
    x.u = t = t[8081 + -285 * -9 + -10644];
  }
};
function Kg(x) {
  return this.getChildContext = function() {
    return x.context;
  }, x.children;
}
function Rg(x) {
  var o = this, t = x.i;
  o.componentWillUnmount = function() {
    Ft(null, o.l), o.l = null, o.i = null;
  }, o.i && o.i !== t && o.componentWillUnmount(), o.l || (o.i = t, o.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(646 * -1 + -7631 * -1 + -6985);
  }, appendChild: function(e) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, insertBefore: function(e, n) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> 2 * 1084 + 2110 + -1 * 4277, -1227 * -3 + -2060 + -20 * 81), o.i.removeChild(e);
  } }), Ft(Ve(Kg, { context: o.context }, x.__v), o.l);
}
function Pg(x, o) {
  var t = {};
  t.__v = x, t.i = o;
  var e = Ve(Rg, t);
  return e.containerInfo = o, e;
}
(nn.prototype = new et()).__a = function(x) {
  var o = this, t = hs(o.__v), e = o.o.get(x);
  return e[335 * 10 + -515 + -945 * 3]++, function(n) {
    var i = function() {
      o.props.revealOrder ? (e.push(n), ea(o, x, e)) : n();
    };
    t ? t(i) : i();
  };
}, nn.prototype.render = function(x) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var o = Ot(x.children);
  x.revealOrder && x.revealOrder[-2 * -3386 + -1 * 3742 + -3030] === "b" && o.reverse();
  for (var t = o.length; t--; ) this.o.set(o[t], this.u = [-218 * -41 + -2 * 881 + -7175, 1216 + -1130 * 5 + 4434, this.u]);
  return x.children;
}, nn.prototype.componentDidUpdate = nn.prototype.componentDidMount = function() {
  var x = this;
  this.o.forEach(function(o, t) {
    ea(x, t, o);
  });
};
var ms = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 836 * -35 + -158 * 71 + 100581, Vg = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Tg = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Dg = /[A-Z0-9]/g, Eg = typeof document < "u", Lg = function(x) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(x);
};
function Ng(x, o, t) {
  return o.__k == null && (o.textContent = ""), Ft(x, o), typeof t == "function" && t(), x ? x.__c : null;
}
function Yg(x, o, t) {
  return Li(x, o), typeof t == "function" && t(), x ? x.__c : null;
}
et.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(x) {
  Object.defineProperty(et.prototype, x, { configurable: !(3 * -1171 + -6 * 61 + 3879), get: function() {
    return this["UNSAFE_" + x];
  }, set: function(o) {
    var t = {};
    t.configurable = !0, t.writable = !(-8812 + 3 * -2873 + 1 * 17431), t.value = o, Object.defineProperty(this, x, t);
  } });
});
var ta = Y.event;
function Fg() {
}
function Xg() {
  return this.cancelBubble;
}
function jg() {
  return this.defaultPrevented;
}
Y.event = function(x) {
  return ta && (x = ta(x)), x.persist = Fg, x.isPropagationStopped = Xg, x.isDefaultPrevented = jg, x.nativeEvent = x;
};
var sx = {};
sx.enumerable = !(6587 + -3293 * 2), sx.configurable = !(-393 * -1 + 9755 + -10148), sx.get = function() {
  return this.class;
};
var ji, Mg = sx, na = Y.vnode;
Y.vnode = function(x) {
  typeof x.type == "string" && function(o) {
    var t = o.props, e = o.type, n = {};
    for (var i in t) {
      var r = t[i];
      if (!(i === "value" && "defaultValue" in t && r == null || Eg && i === "children" && e === "noscript" || i === "class" || i === "className")) {
        var a = i.toLowerCase();
        i === "defaultValue" && "value" in t && t.value == null ? i = "value" : i === "download" && !(-9700 + -12 * 38 + -10156 * -1) === r ? r = "" : a === "translate" && r === "no" ? r = !1 : a === "ondoubleclick" ? i = "ondblclick" : a !== "onchange" || e !== "input" && e !== "textarea" || Lg(t.type) ? a === "onfocus" ? i = "onfocusin" : a === "onblur" ? i = "onfocusout" : Tg.test(i) ? i = a : -(3355 + 508 * -14 + 3758) === e.indexOf("-") && Vg.test(i) ? i = i.replace(Dg, "-$&").toLowerCase() : r === null && (r = void (8623 + -3037 * 3 + -1 * -488)) : a = i = "oninput", a === "oninput" && n[i = a] && (i = "oninputCapture"), n[i] = r;
      }
    }
    e == "select" && n.multiple && Array.isArray(n.value) && (n.value = Ot(t.children).forEach(function(s) {
      s.props.selected = -(9824 + 37 * 157 + -8 * 1954) != n.value.indexOf(s.props.value);
    })), e == "select" && n.defaultValue != null && (n.value = Ot(t.children).forEach(function(s) {
      s.props.selected = n.multiple ? -(6308 + -1 * -1657 + -7964) != n.defaultValue.indexOf(s.props.value) : n.defaultValue == s.props.value;
    })), t.class && !t.className ? (n.class = t.class, Object.defineProperty(n, "className", Mg)) : (t.className && !t.class || t.class && t.className) && (n.class = n.className = t.className), o.props = n;
  }(x), x.$$typeof = ms, na && na(x);
};
var xa = Y.__r;
Y.__r = function(x) {
  xa && xa(x), ji = x.__c;
};
var oa = Y.diffed;
Y.diffed = function(x) {
  oa && oa(x);
  var o = x.props, t = x.__e;
  t != null && x.type === "textarea" && "value" in o && o.value !== t.value && (t.value = o.value == null ? "" : o.value), ji = null;
};
var ve = {};
ve.readContext = function(x) {
  return ji.__n[x.__c].props.value;
}, ve.useCallback = Kt, ve.useContext = u0, ve.useDebugValue = yx, ve.useDeferredValue = Ws, ve.useEffect = he, ve.useId = us, ve.useImperativeHandle = ds, ve.useInsertionEffect = ws, ve.useLayoutEffect = X0, ve.useMemo = _e, ve.useReducer = Fi, ve.useRef = Ht, ve.useState = tt, ve.useSyncExternalStore = Ss, ve.useTransition = vs;
var bs = {};
bs.current = ve;
var As = {};
As.ReactCurrentDispatcher = bs;
var _g = As;
function Jg(x) {
  return Ve.bind(null, x);
}
function to(x) {
  return !!x && x.$$typeof === ms;
}
function Ug(x) {
  return to(x) && x.type === xt;
}
function Qg(x) {
  return !!x && !!x.displayName && (typeof x.displayName == "string" || x.displayName instanceof String) && x.displayName.startsWith("Memo(");
}
function zg(x) {
  return to(x) ? Ni.apply(null, arguments) : x;
}
function qg(x) {
  return !!x.__k && (Ft(null, x), !(-902 + 82 * 11));
}
function $g(x) {
  return x && (x.base || -1 * -9083 + -6763 * -1 + -15845 === x.nodeType && x) || null;
}
var ed = function(x, o) {
  return x(o);
}, td = function(x, o) {
  return x(o);
}, nd = xt;
function ys(x) {
  x();
}
function Ws(x) {
  return x;
}
function vs() {
  return [!(5767 * -1 + 7 * -89 + 6391), ys];
}
var ws = X0, xd = to;
function Ss(x, o) {
  var t = o(), e = tt({ h: { __: t, v: o } }), n = e[2092 + 2 * -1046].h, i = e[-6878 + -1 * 6804 + -13683 * -1];
  return X0(function() {
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
    return !((o = n) === (t = i) && (-1 * 784 + 1656 + -872 !== o || (-319 * -10 + 8513 + -11702) / o == (21 * 17 + 1 * 5048 + -28 * 193) / t) || o != o && t != t);
  } catch {
    return !0;
  }
}
var L = {};
L.useState = tt, L.useId = us, L.useReducer = Fi, L.useEffect = he, L.useLayoutEffect = X0, L.useInsertionEffect = ws, L.useTransition = vs, L.useDeferredValue = Ws, L.useSyncExternalStore = Ss, L.startTransition = ys, L.useRef = Ht, L.useImperativeHandle = ds, L.useMemo = _e, L.useCallback = Kt, L.useContext = u0, L.useDebugValue = yx, L.version = "17.0.2", L.Children = Og, L.render = Ng, L.hydrate = Yg, L.unmountComponentAtNode = qg, L.createPortal = Pg, L.createElement = Ve, L.createContext = kn, L.createFactory = Jg, L.cloneElement = zg, L.createRef = dg, L.Fragment = xt, L.isValidElement = to, L.isElement = xd, L.isFragment = Ug, L.isMemo = Qg, L.findDOMNode = $g, L.Component = et, L.PureComponent = $o, L.memo = Gg, L.forwardRef = fs, L.flushSync = td, L.unstable_batchedUpdates = ed, L.StrictMode = nd, L.Suspense = ax, L.SuspenseList = nn, L.lazy = Hg, L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _g;
var c0 = L, od = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function id(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function rd(x) {
  return x && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function ad(x) {
  return x && Object.prototype.hasOwnProperty.call(x, "default") && Object.keys(x).length === 1 ? x.default : x;
}
function sd(x) {
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
const cd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: od,
  getAugmentedNamespace: sd,
  getDefaultExportFromCjs: id,
  getDefaultExportFromNamespaceIfNotNamed: ad,
  getDefaultExportFromNamespaceIfPresent: rd
}, Symbol.toStringTag, { value: "Module" }));
var gd = function(o, t, e, n) {
  var i = e ? e.call(n, o, t) : void 0;
  if (i !== void (-15 * -51 + 913 + -839 * 2)) return !!i;
  if (o === t) return !0;
  if (typeof o != "object" || !o || typeof t != "object" || !t) return !1;
  var r = Object.keys(o), a = Object.keys(t);
  if (r.length !== a.length) return !1;
  for (var s = Object.prototype.hasOwnProperty.bind(t), c = 52 * 144 + -1622 + -5866; c < r.length; c++) {
    var d = r[c];
    if (!s(d)) return !1;
    var g = o[d], p = t[d];
    if (i = e ? e.call(n, g, p, d) : void (594 + -198 * 3), i === !1 || i === void (-5144 + 211 * -23 + -1 * -9997) && g !== p) return !1;
  }
  return !0;
};
const dd = cd.getDefaultExportFromCjs(gd);
var ie = "-ms-", dn = "-moz-", $ = "-webkit-", Bs = "comm", no = "rule", Mi = "decl", ud = "@import", Gs = "@keyframes", ld = "@layer", ks = Math.abs, _i = String.fromCharCode, ei = Object.assign;
function Id(x, o) {
  return be(x, -39 * 38 + 63 * 17 + 411) ^ -3694 + -1635 * -5 + -1 * 4436 ? (((o << 5352 + -4 * 1027 + 9 * -138 ^ be(x, -1 * 2270 + -559 * 6 + 5624)) << 2 ^ be(x, 1)) << -1 * -8645 + -1907 * -4 + -1 * 16271 ^ be(x, 1 * -204 + 3 * -1610 + 5036)) << -15 * 15 + 2708 + -2481 ^ be(x, -8287 + 829 * 10) : 0;
}
function Os(x) {
  return x.trim();
}
function wt(x, o) {
  return (x = o.exec(x)) ? x[0] : x;
}
function F(x, o, t) {
  return x.replace(o, t);
}
function cx(x, o, t) {
  return x.indexOf(o, t);
}
function be(x, o) {
  return x.charCodeAt(o) | 0;
}
function T0(x, o, t) {
  return x.slice(o, t);
}
function Ct(x) {
  return x.length;
}
function Zs(x) {
  return x.length;
}
function xn(x, o) {
  return o.push(x), x;
}
function fd(x, o) {
  return x.map(o).join("");
}
function ia(x, o) {
  return x.filter(function(t) {
    return !wt(t, o);
  });
}
var xo = 178 * 23 + 2514 + -6607, D0 = -1 * -5146 + -3752 + -1393, Hs = 718 * -1 + 1 * -2162 + -45 * -64, ot = 6828 + -134 * -73 + -16610 * 1, fe = 0, j0 = "";
function oo(x, o, t, e, n, i, r, a) {
  var s = {};
  return s.value = x, s.root = o, s.parent = t, s.type = e, s.props = n, s.children = i, s.line = xo, s.column = D0, s.length = r, s.return = "", s.siblings = a, s;
}
function Dt(x, o) {
  return ei(oo("", null, null, "", null, null, 884 + 2 * -442, x.siblings), x, { length: -x.length }, o);
}
function w0(x) {
  for (; x.root; ) x = Dt(x.root, { children: [x] });
  xn(x, x.siblings);
}
function Cd() {
  return fe;
}
function pd() {
  return fe = ot > 0 ? be(j0, --ot) : -3258 + -1 * -1164 + 2 * 1047, D0--, fe === -1 * 6033 + 1 * -3833 + 3 * 3292 && (D0 = -8468 + -1 * -2007 + 6462, xo--), fe;
}
function ct() {
  return fe = ot < Hs ? be(j0, ot++) : -3 * -711 + -3222 + 1089 * 1, D0++, fe === -4 * -1216 + -266 * 24 + -10 * -153 && (D0 = -16 * -502 + 8247 + -1 * 16278, xo++), fe;
}
function r0() {
  return be(j0, ot);
}
function gx() {
  return ot;
}
function io(x, o) {
  return T0(j0, x, o);
}
function ti(x) {
  switch (x) {
    case 5443 * 1 + 1 * -701 + 2 * -2371:
    case 1213 * -2 + 8175 + 4 * -1435:
    case 10:
    case 8195 + 5225 * -1 + -2957 * 1:
    case -433 * 5 + -32 * 148 + 6933:
      return -37 + -9 * 1021 + 17 * 543;
    case -5 * -1310 + -623 + -2947 * 2:
    case -68 * 84 + 3889 * 1 + 1866:
    case 1 * 701 + -1013 * -2 + -2683:
    case 23 * -19 + 5616 + -5132:
    case 1149 + 3493 * 1 + -4580:
    case 1853 * -1 + 545 * -17 + -11182 * -1:
    case -1488 + 18 * 353 + -4740:
    case 1 * -534 + 997 * -5 + 2789 * 2:
    case -23 * -419 + -86 * 97 + 1172 * -1:
    case 7643 + -491 * 2 + 2 * -3268:
      return 4;
    case 3843 + -1704 * 1 + 1 * -2081:
      return 1 * -5717 + 3908 + 4 * 453;
    case -5306 + -7 * -887 + -11 * 79:
    case 1 * -4377 + 9147 * 1 + -4731:
    case -6620 + -1805 * -1 + 5 * 971:
    case 166 * -8 + -3289 + 4708:
      return -2106 + -62 * -34;
    case -2782 * 3 + 9752 + -1365:
    case 93:
      return 1;
  }
  return -2 * -764 + 269 * 34 + -10674;
}
function hd(x) {
  return xo = D0 = 3 * 3324 + -1 * 9129 + -842, Hs = Ct(j0 = x), ot = 1 * -2874 + 4231 * 1 + -1357, [];
}
function md(x) {
  return j0 = "", x;
}
function Go(x) {
  return Os(io(ot - (-7417 + 4633 * 2 + -1848), ni(x === 7915 * -1 + 4994 + 3012 ? x + (-9 * -580 + 8 * -524 + -1026) : x === -32 * -83 + 67 * 82 + -8110 ? x + (1 * 7858 + 8749 + 437 * -38) : x)));
}
function bd(x) {
  for (; (fe = r0()) && fe < -65 * -41 + 5832 + 23 * -368; ) ct();
  return ti(x) > 1457 * 5 + -265 * -7 + 2 * -4569 || ti(fe) > -841 + -1 * -844 ? "" : " ";
}
function Ad(x, o) {
  for (; --o && ct() && !(fe < 48 || fe > 563 * -1 + 3758 + -3093 || fe > -3691 + 26 * 122 + -16 * -36 && fe < -1 * -2711 + 9733 * -1 + 7087 || fe > 18 * -428 + 3885 + 3889 && fe < -7208 + 1597 * -3 + 27 * 448); ) ;
  return io(x, gx() + (o < 4029 + -3 * 1341 && r0() == 145 * 13 + -3 * -314 + -2795 && ct() == 1 * -6761 + -8910 + 1 * 15703));
}
function ni(x) {
  for (; ct(); ) switch (fe) {
    case x:
      return ot;
    case 2460 + -2 * 1213:
    case 752 * 1 + 192 + 181 * -5:
      x !== -91 + -1 * 443 + 568 && x !== 11 * 555 + -6293 + 227 && ni(fe);
      break;
    case -25 * -130 + 6647 + 1 * -9857:
      x === 41 && ni(x);
      break;
    case -1 * 4060 + -589 + 4741:
      ct();
      break;
  }
  return ot;
}
function yd(x, o) {
  for (; ct() && x + fe !== 10803 + -1 * 10756 + (-6179 + 1 * 9608 + -13 * 263); ) if (x + fe === -20 * -25 + 3469 + -3927 + (-3369 * 2 + -723 * -9 + -1 * -273) && r0() === 6779 + -8 * -1094 + -15484) break;
  return "/*" + io(o, ot - 1) + "*" + _i(x === -81 * 103 + 3729 + 59 * 79 ? x : ct());
}
function Wd(x) {
  for (; !ti(r0()); ) ct();
  return io(x, ot);
}
function vd(x) {
  return md(dx("", null, null, null, [""], x = hd(x), -7892 + -2 * -3946, [1966 + -2 * -211 + -2388], x));
}
function dx(x, o, t, e, n, i, r, a, s) {
  for (var c = 0, d = -1 * 2879 + -7606 + 233 * 45, g = r, p = 9 * -541 + 931 + 2 * 1969, u = -7319 + -1 * 4909 + 12228, C = 0, b = 1, A = 4154 + -1 * -346 + 409 * -11, l = -131 * 27 + 7913 + 5 * -875, v = 0, R = "", j = n, M = i, J = e, H = R; A; ) switch (C = v, v = ct()) {
    case 40:
      if (C != 792 + -9 * 76 && be(H, g - 1) == 668 * 3 + -23 * 155 + 1619) {
        cx(H += F(Go(v), "&", "&\f"), "&\f", ks(c ? a[c - (-2 * 2023 + 6479 + -1 * 2432)] : 10 * 226 + 4534 * -1 + 379 * 6)) != -(829 * 9 + -3705 + -3755) && (l = -(2791 * -1 + 6258 + 2 * -1733));
        break;
      }
    case -3592 + 754 * -2 + 1 * 5134:
    case -7423 + 246 * -8 + 9430:
    case -146 * -59 + 6197 + -14720:
      H += Go(v);
      break;
    case 53 * -37 + -1098 + 3068:
    case 1 * 4009 + 7343 + 106 * -107:
    case -1 * -5477 + -6 * 16 + -5368:
    case -1106 * 8 + 6 * -811 + -237 * -58:
      H += bd(C);
      break;
    case 2472 * 1 + -8384 + 6004:
      H += Ad(gx() - (9695 * 1 + -5086 * -1 + 5 * -2956), 7);
      continue;
    case -6938 + 789 * -2 + 8563:
      switch (r0()) {
        case -749 + 191 * 10 + -373 * 3:
        case -4759 + -13 * 709 + 14023:
          xn(wd(yd(ct(), gx()), o, t, s), s);
          break;
        default:
          H += "/";
      }
      break;
    case 123 * b:
      a[c++] = Ct(H) * l;
    case (-2 * -4739 + 3 * 1613 + 1 * -14192) * b:
    case 83 + 893 * -1 + 79 * 11:
    case 5239 + -9319 * 1 + -8 * -510:
      switch (v) {
        case 2207 + -3 * -2853 + -10766:
        case -1931 + 4824 * -2 + -11 * -1064:
          A = 59 * 99 + 720 + -6561;
        case 1 * -1978 + 1502 * 2 + 1 * -967 + d:
          l == -(-1521 + 127 * -27 + 1 * 4951) && (H = F(H, /\f/g, "")), u > 109 * -9 + -6110 * 1 + 7091 && Ct(H) - g && xn(u > 6559 + 1 * -5939 + -42 * 14 ? aa(H + ";", e, t, g - (3891 + 1 * -3952 + 62), s) : aa(F(H, " ", "") + ";", e, t, g - (890 * -1 + 4367 + -695 * 5), s), s);
          break;
        case -164 * 1 + 4243 + -4020:
          H += ";";
        default:
          if (xn(J = ra(H, o, t, c, d, n, a, R, j = [], M = [], g, i), i), v === 1615 * -1 + 3162 + -1424)
            if (d === -353 * -3 + -8355 + 7296) dx(H, o, J, J, j, i, g, a, M);
            else switch (p === -2 * -973 + -9841 * -1 + -11688 && be(H, -5 * -17 + -23 * 339 + 5 * 1543) === 3 * 813 + 1 * 3126 + 5 * -1091 ? -9935 * 1 + 226 * -41 + 19301 * 1 : p) {
              case 9925 + -131 * 75:
              case -166 * 45 + 74 * -104 + 1 * 15274:
              case -5 * -1522 + 3307 * -1 + 466 * -9:
              case -1401 * -5 + 4885 * 1 + -11775:
                dx(x, J, J, e && xn(ra(x, J, J, 0, 57 * -124 + -7594 * -1 + -526, n, a, R, n, j = [], g, M), M), n, M, g, a, e ? j : M);
                break;
              default:
                dx(H, J, J, J, [""], M, -3675 + -525 * -7, a, M);
            }
      }
      c = d = u = 0, b = l = 10035 + -346 * 29, R = H = "", g = r;
      break;
    case -30 * -133 + 4463 + -8395:
      g = 609 + -76 * 8 + Ct(H), u = C;
    default:
      if (b < 5975 + -23 * 417 + 3617) {
        if (v == 8843 + -1149 * -3 + -12167) --b;
        else if (v == -61 * -107 + -14 * 179 + -3896 && b++ == -9803 * -1 + -63 + -4870 * 2 && pd() == -2 * -169 + -53 * -73 + 314 * -13) continue;
      }
      switch (H += _i(v), v * b) {
        case 983 * 3 + 7826 + -10737:
          l = d > -1919 + -1 * 3700 + 1873 * 3 ? -4211 * 1 + -8512 + 3181 * 4 : (H += "\f", -(-4781 + 3 * 1594));
          break;
        case 8573 * -1 + 2264 * -1 + -39 * -279:
          a[c++] = (Ct(H) - (5893 + -23 * 173 + -1 * 1913)) * l, l = -179 + 45 * 4;
          break;
        case -28 * -53 + 20 * 28 + -1980:
          r0() === -37 * 227 + 9082 + -638 && (H += Go(ct())), p = r0(), d = g = Ct(R = H += Wd(gx())), v++;
          break;
        case -3 * -2701 + -1 * 4625 + -3433:
          C === 45 && Ct(H) == -1450 * -5 + -643 * -7 + 31 * -379 && (b = -1 * 5276 + -8455 + 13731 * 1);
      }
  }
  return i;
}
function ra(x, o, t, e, n, i, r, a, s, c, d, g) {
  for (var p = n - 1, u = n === 5857 * -1 + 1 * -2039 + 7896 ? i : [""], C = Zs(u), b = 4671 + 383 * 1 + -19 * 266, A = 68 * -37 + -7580 + -4 * -2524, l = 0; b < e; ++b) for (var v = 3 * -1271 + -4509 + -438 * -19, R = T0(x, p + 1, p = ks(A = r[b])), j = x; v < C; ++v) (j = Os(A > -1607 + -1607 * -1 ? u[v] + " " + R : F(R, /&\f/g, u[v]))) && (s[l++] = j);
  return oo(x, o, t, n === -9865 * 1 + 3949 + -17 * -348 ? no : a, s, c, d, g);
}
function wd(x, o, t, e) {
  return oo(x, o, t, Bs, _i(Cd()), T0(x, 9831 * -1 + -1 * 4286 + 14119, -2), -4504 + -1579 * -5 + -3391, e);
}
function aa(x, o, t, e, n) {
  return oo(x, o, t, Mi, T0(x, 8810 + -1459 * 5 + -15 * 101, e), T0(x, e + (-277 * -2 + -124 * -27 + -3901), -(-1 * -7118 + -149 * -47 + -14120)), e, n);
}
function Ks(x, o, t) {
  switch (Id(x, o)) {
    case 28 * -32 + 3032 * -1 + -9031 * -1:
      return $ + "print-" + x + x;
    case 3222 + -1 * 2027 + 4542:
    case 4201:
    case 1754 * 1 + 3492 + -2069:
    case 8431 * 1 + 4709 + -9707:
    case 1641:
    case -1 * -9011 + -447 * -18 + -12600:
    case -2 * 641 + 5241 * -1 + 9444:
    case 41 * 265 + -51 * 167 + 3224:
    case -4717 + -2097 * -6 + -3 * 503:
    case -7 * -1051 + -9883 * 1 + -54 * -155:
    case 6891 * -1 + 4867 * 1 + 35 * 149:
    case 1281 + 100 * 106 + -5236:
    case -9856 + -8724 * -1 + 4137:
    case -3431 * -1 + -759 + 3719:
    case -463 * -1 + -2904 + 8320:
    case 5623:
    case 6135:
    case -7690 + 3385 * -1 + 922 * 17:
    case -47 * -211 + -5091 + -1 * -29:
    case -1 * -898 + -1 * 9908 + 13225:
    case -3632 + 2 * 5158 + -5 * 59:
    case 1388 + -3721 * -1:
    case 9248 + 1 * 1879 + 1 * -5762:
    case -257 * 8 + 5310 + -263 * -9:
    case 626 * 5 + -239 * 13 + -22 * -173:
      return $ + x + x;
    case -3175 + 2423 * -2 + 12810:
      return dn + x + x;
    case 1385 * -4 + -799 * 1 + 11688:
    case -4853 + 11 * 671 + 1718:
    case -1769 * 1 + -36 * 173 + 12807:
    case 6968:
    case 253 + -128 * 60 + 10183:
      return $ + x + dn + x + ie + x + x;
    case 129 * 73 + -15 * -787 + -15286:
      switch (be(x, o + (-605 + -2 * 2763 + -166 * -37))) {
        case -4218 + -4463 * 1 + 1759 * 5:
          return $ + x + ie + F(x, /[svh]\w+-[tblr]{2}/, "tb") + x;
        case -78 * 124 + 1328 + -4226 * -2:
          return $ + x + ie + F(x, /[svh]\w+-[tblr]{2}/, "tb-rl") + x;
        case 135 * 1 + -30 + -60:
          return $ + x + ie + F(x, /[svh]\w+-[tblr]{2}/, "lr") + x;
      }
    case -6138 + -2143 * 1 + 15109:
    case -5 * -1383 + -6977 + -5 * -866:
    case 799 * 2 + 5842 + -4537:
      return $ + x + ie + x + x;
    case -4056 + 12 * 647 + 2457:
      return $ + x + ie + "flex-" + x + x;
    case -6061 + 1 * 9499 + 1749:
      return $ + x + F(x, /(\w+).+(:[^]+)/, $ + "box-$1$2" + ie + "flex-$1$2") + x;
    case 4196 + 43 * 29:
      return $ + x + ie + "flex-item-" + F(x, /flex-|-self/g, "") + (wt(x, /flex-|baseline/) ? "" : ie + "grid-row-" + F(x, /flex-|-self/g, "")) + x;
    case -2223 + -1 * -6898:
      return $ + x + ie + "flex-line-pack" + F(x, /align-content|flex-|-self/g, "") + x;
    case -825 * 5 + 4042 + 5631:
      return $ + x + ie + F(x, "shrink", "negative") + x;
    case 23 * 444 + -1 * 5640 + 720:
      return $ + x + ie + F(x, "basis", "preferred-size") + x;
    case 17 * 106 + -6220 * 1 + 10478:
      return $ + "box-" + F(x, "-grow", "") + $ + x + ie + F(x, "grow", "positive") + x;
    case -1 * -7129 + -1802 + -1 * 773:
      return $ + F(x, /([^-])(transform)/g, "$1" + $ + "$2") + x;
    case -7 * 83 + 316 * 1 + -3226 * -2:
      return F(F(F(x, /(zoom-|grab)/, $ + "$1"), /(image-set)/, $ + "$1"), x, "") + x;
    case -2 * -3637 + 1 * -9257 + 7478:
    case 1013 * 5 + -6515 + 5409:
      return F(x, /(image-set\([^]*)/, $ + "$1$`$1");
    case 5113 + 5 * -768 + -5 * -739:
      return F(F(x, /(.+:)(flex-)?(.*)/, $ + "box-pack:$3" + ie + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + $ + x + x;
    case -5026 * 1 + -4815 * -1 + 4411:
      if (!wt(x, /flex-|baseline/)) return ie + "grid-column-align" + T0(x, o) + x;
      break;
    case 74 * -6 + -2 * -263 + 10 * 251:
    case 17 * -111 + -8649 * 1 + 13896:
      return ie + F(x, "template-", "") + x;
    case -2654 * 2 + 4146 + -94 * -59:
    case 1 * -1151 + 1 * -630 + -1 * -5397:
      return t && t.some(function(e, n) {
        return o = n, wt(e.props, /grid-\w+-end/);
      }) ? ~cx(x + (t = t[o].value), "span", -363 + -526 * 9 + 3 * 1699) ? x : ie + F(x, "-start", "") + x + ie + "grid-row-span:" + (~cx(t, "span", 1 * -6869 + 4534 + 2335 * 1) ? wt(t, /\d+/) : +wt(t, /\d+/) - +wt(x, /\d+/)) + ";" : ie + F(x, "-start", "") + x;
    case -397 * -1 + -409 * -13 + -818:
    case -4 * -691 + -4190 + 2777 * 2:
      return t && t.some(function(e) {
        return wt(e.props, /grid-\w+-start/);
      }) ? x : ie + F(F(x, "-end", "-span"), "span ", "") + x;
    case 1 * 6910 + -88 * -82 + 7 * -1433:
    case 1 * 685 + -6893 + 9791:
    case -49 * -145 + 6007 + -9044:
    case 609 * -7 + -8887 + 1 * 15682:
      return F(x, /(.+)-inline(.+)/, $ + "$1$2") + x;
    case 1 * -11401 + 1 * 12579 + 6938:
    case -7490 + 1 * 1369 + 13180:
    case -9405 + 689 * 22:
    case 10181 * -1 + 144 * -71 + -6485 * -4:
    case -5871 + 1886 * 6:
    case -537 * 5 + -9017 + 17403:
    case 49 * -83 + 656 + -149 * -56:
    case -10084 + -509 * -29:
    case -48 * 155 + -9847 * -1 + 3126 * 1:
    case 408 * -28 + -6341 * 1 + -2 * -11777:
    case 1045 * 1 + 2470 + 1 * 1506:
    case -11 * -349 + -3307 + 4233:
      if (Ct(x) - (-16849 + -1 * -16850) - o > -9881 + 1240 * 1 + -1 * -8647) switch (be(x, o + (41 * -73 + 9557 + -1 * 6563))) {
        case 1 * -3169 + -7588 + 5433 * 2:
          if (be(x, o + (-1617 + 1 * 9507 + -7886)) !== -1 * 9606 + -2 * -3176 + 3299) break;
        case -7590 * -1 + 3 * -1931 + -1695:
          return F(x, /(.+:)(.+)-([^]+)/, "$1" + $ + "$2-$3$1" + dn + (be(x, o + (-7 * -1203 + -1 * -1464 + -27 * 366)) == 108 ? "$3" : "$2-$3")) + x;
        case 3 * 2349 + 9949 * -1 + 3017:
          return ~cx(x, "stretch", 1 * -7517 + -7642 + 1 * 15159) ? Ks(F(x, "stretch", "fill-available"), o, t) + x : x;
      }
      break;
    case 1823 + 3306 * -1 + -6635 * -1:
    case 5920:
      return F(x, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, n, i, r, a, s, c) {
        return ie + n + ":" + i + c + (r ? ie + n + "-span:" + (a ? s : +s - +i) + c : "") + x;
      });
    case 1 * -1238 + -1 * -9073 + -222 * 13:
      if (be(x, o + (5927 + -1 * 2900 + -159 * 19)) === 6889 + 551 * -3 + -5115) return F(x, ":", ":" + $) + x;
      break;
    case 10401 + 7709 * -1 + 3752:
      switch (be(x, be(x, 13810 + -4 * 3449) === 8409 * -1 + 5076 + 3378 ? 1283 + 2 * 1583 + 1477 * -3 : 3595 * -2 + 4261 + 10 * 294)) {
        case 1 * -4362 + -3215 + -7697 * -1:
          return F(x, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + $ + (be(x, -472 * 5 + 7634 + -5 * 1052) === -9 * 331 + 1 * 2027 + 1 * 997 ? "inline-" : "") + "box$3$1" + $ + "$2$3$1" + ie + "$2box$3") + x;
        case -6481 + 2 * 2399 + 1783 * 1:
          return F(x, ":", ":" + ie) + x;
      }
      break;
    case 19 * 77 + 8635 + -4379:
    case -209 * 6 + 469 * -13 + -2 * -4999:
    case 67 * 48 + 3231 + -4312:
    case 199 * -3 + -18 * 75 + 5874:
    case 7258 + 1 * -5236 + 369:
      return F(x, "scroll-", "scroll-snap-") + x;
  }
  return x;
}
function Wx(x, o) {
  for (var t = "", e = 6124 + 1531 * -4; e < x.length; e++) t += o(x[e], e, x, o) || "";
  return t;
}
function Sd(x, o, t, e) {
  switch (x.type) {
    case ld:
      if (x.children.length) break;
    case ud:
    case Mi:
      return x.return = x.return || x.value;
    case Bs:
      return "";
    case Gs:
      return x.return = x.value + "{" + Wx(x.children, e) + "}";
    case no:
      if (!Ct(x.value = x.props.join(","))) return "";
  }
  return Ct(t = Wx(x.children, e)) ? x.return = x.value + "{" + t + "}" : "";
}
function Bd(x) {
  var o = Zs(x);
  return function(t, e, n, i) {
    for (var r = "", a = 1 * -2162 + -74 * 44 + 5418; a < o; a++) r += x[a](t, e, n, i) || "";
    return r;
  };
}
function Gd(x) {
  return function(o) {
    o.root || (o = o.return) && x(o);
  };
}
function kd(x, o, t, e) {
  if (x.length > -(493 * -17 + 1 * 1174 + 7208) && !x.return)
    switch (x.type) {
      case Mi:
        x.return = Ks(x.value, x.length, t);
        return;
      case Gs:
        return Wx([Dt(x, { value: F(x.value, "@", "@" + $) })], e);
      case no:
        if (x.length) return fd(t = x.props, function(n) {
          switch (wt(n, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              w0(Dt(x, { props: [F(n, /:(read-\w+)/, ":" + dn + "$1")] }));
              var i = {};
              i.props = [n], w0(Dt(x, i)), ei(x, { props: ia(t, e) });
              break;
            case "::placeholder":
              w0(Dt(x, { props: [F(n, /:(plac\w+)/, ":" + $ + "input-$1")] })), w0(Dt(x, { props: [F(n, /:(plac\w+)/, ":" + dn + "$1")] })), w0(Dt(x, { props: [F(n, /:(plac\w+)/, ie + "input-$1")] }));
              var r = {};
              r.props = [n], w0(Dt(x, r)), ei(x, { props: ia(t, e) });
              break;
          }
          return "";
        });
    }
}
var E = {};
E.animationIterationCount = 1, E.aspectRatio = 1, E.borderImageOutset = 1, E.borderImageSlice = 1, E.borderImageWidth = 1, E.boxFlex = 1, E.boxFlexGroup = 1, E.boxOrdinalGroup = 1, E.columnCount = 1, E.columns = 1, E.flex = 1, E.flexGrow = 1, E.flexPositive = 1, E.flexShrink = 1, E.flexNegative = 1, E.flexOrder = 1, E.gridRow = 1, E.gridRowEnd = 1, E.gridRowSpan = 1, E.gridRowStart = 1, E.gridColumn = 1, E.gridColumnEnd = 1, E.gridColumnSpan = 1, E.gridColumnStart = 1, E.msGridRow = 1, E.msGridRowSpan = 1, E.msGridColumn = 1, E.msGridColumnSpan = 1, E.fontWeight = 1, E.lineHeight = 1, E.opacity = 1, E.order = 1, E.orphans = 1, E.tabSize = 1, E.widows = 1, E.zIndex = 1, E.zoom = 1, E.WebkitLineClamp = 1, E.fillOpacity = 1, E.floodOpacity = 1, E.stopOpacity = 1, E.strokeDasharray = 1, E.strokeDashoffset = 1, E.strokeMiterlimit = 1, E.strokeOpacity = 1, E.strokeWidth = 1;
var Od = E, z = {}, g0 = typeof process < "u" && void (7019 * 1 + 6601 + 227 * -60) !== z && (z.REACT_APP_SC_ATTR || z.SC_ATTR) || "data-styled", Rs = "active", Ps = "data-styled-version", ro = "6.1.11", Ji = `/*!sc*/
`, Ui = typeof window < "u" && "HTMLElement" in window, Zd = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && z !== void 0 && void (-352 + -1 * 2791 + 1 * 3143) !== z.REACT_APP_SC_DISABLE_SPEEDY && z.REACT_APP_SC_DISABLE_SPEEDY !== "" ? z.REACT_APP_SC_DISABLE_SPEEDY !== "false" && z.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (-3178 * 1 + -6364 + 367 * 26) !== z && void (73 * 26 + -2442 + 272 * 2) !== z.SC_DISABLE_SPEEDY && z.SC_DISABLE_SPEEDY !== "" ? z.SC_DISABLE_SPEEDY !== "false" && z.SC_DISABLE_SPEEDY : z.NODE_ENV !== "production"), sa = /invalid hook call/i, Jn = /* @__PURE__ */ new Set(), Hd = function(x, o) {
  if (z.NODE_ENV !== "production") {
    var t = o ? ' with the id of "'.concat(o, '"') : "", e = "The component ".concat(x).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var i = !0;
      console.error = function(r) {
        for (var a = [], s = 3630 * 1 + 1997 * 2 + -7623; s < arguments.length; s++) a[s - 1] = arguments[s];
        sa.test(r) ? (i = !1, Jn.delete(e)) : n.apply(void (-640 * 1 + 8388 + -7748), P0([r], a, !1));
      }, Ht(), i && !Jn.has(e) && (console.warn(e), Jn.add(e));
    } catch (r) {
      sa.test(r.message) && Jn.delete(e);
    } finally {
      console.error = n;
    }
  }
}, ao = Object.freeze([]), E0 = Object.freeze({});
function Kd(x, o, t) {
  return void (-2927 + 111 * 53 + -2 * 1478) === t && (t = E0), x.theme !== t.theme && x.theme || o || t.theme;
}
var xi = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Rd = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Pd = /(^-|-$)/g;
function ca(x) {
  return x.replace(Rd, "-").replace(Pd, "");
}
var Vd = /(a)(d)/gi, Un = -1019 * 3 + 3390 + 281 * -1, ga = function(x) {
  return String.fromCharCode(x + (x > 9 + 16 * 1 ? -6406 + 748 * 13 + 3 * -1093 : 164 * -13 + -8279 + 10508));
};
function oi(x) {
  var o, t = "";
  for (o = Math.abs(x); o > Un; o = o / Un | 6086 + -982 * -2 + 4025 * -2) t = ga(o % Un) + t;
  return (ga(o % Un) + t).replace(Vd, "$1-$2");
}
var ko, Vs = 5 * -1412 + 7211 * -1 + 19652, $t = function(x, o) {
  for (var t = o.length; t; ) x = (42 * -21 + 1 * 8351 + 3718 * -2) * x ^ o.charCodeAt(--t);
  return x;
}, Ts = function(x) {
  return $t(Vs, x);
};
function Td(x) {
  return oi(Ts(x) >>> 9545 + -1 * 1307 + -8238);
}
function Ds(x) {
  return z.NODE_ENV !== "production" && typeof x == "string" && x || x.displayName || x.name || "Component";
}
function Oo(x) {
  return typeof x == "string" && (z.NODE_ENV === "production" || x.charAt(9442 + -977 * 1 + 1 * -8465) === x.charAt(13011 + 3 * -4337).toLowerCase());
}
var qe = {};
qe.childContextTypes = !0, qe.contextType = !0, qe.contextTypes = !0, qe.defaultProps = !0, qe.displayName = !0, qe.getDefaultProps = !0, qe.getDerivedStateFromError = !0, qe.getDerivedStateFromProps = !0, qe.mixins = !0, qe.propTypes = !0, qe.type = !0;
var Et = {};
Et.name = !0, Et.length = !0, Et.prototype = !0, Et.caller = !0, Et.callee = !0, Et.arguments = !0, Et.arity = !0;
var zt = {};
zt.$$typeof = !0, zt.compare = !0, zt.defaultProps = !0, zt.displayName = !0, zt.propTypes = !0, zt.type = !0;
var B0 = {};
B0.$$typeof = !0, B0.render = !0, B0.defaultProps = !0, B0.displayName = !0, B0.propTypes = !0;
var Es = typeof Symbol == "function" && Symbol.for, Ls = Es ? Symbol.for("react.memo") : 59372 * 1 + 2391 * -7 + -5 * -3496, Dd = Es ? Symbol.for("react.forward_ref") : 4649 * 14 + -1 * 113153 + 108179, Ed = qe, Ld = Et, Ns = zt, Nd = ((ko = {})[Dd] = B0, ko[Ls] = Ns, ko);
function da(x) {
  return ("type" in (o = x) && o.type.$$typeof) === Ls ? Ns : "$$typeof" in x ? Nd[x.$$typeof] : Ed;
  var o;
}
var Yd = Object.defineProperty, Fd = Object.getOwnPropertyNames, ua = Object.getOwnPropertySymbols, Xd = Object.getOwnPropertyDescriptor, jd = Object.getPrototypeOf, la = Object.prototype;
function Ys(x, o, t) {
  if (typeof o != "string") {
    if (la) {
      var e = jd(o);
      e && e !== la && Ys(x, e, t);
    }
    var n = Fd(o);
    ua && (n = n.concat(ua(o)));
    for (var i = da(x), r = da(o), a = -9897 + -9897 * -1; a < n.length; ++a) {
      var s = n[a];
      if (!(s in Ld || t && t[s] || r && s in r || i && s in i)) {
        var c = Xd(o, s);
        try {
          Yd(x, s, c);
        } catch {
        }
      }
    }
  }
  return x;
}
function L0(x) {
  return typeof x == "function";
}
function Qi(x) {
  return typeof x == "object" && "styledComponentId" in x;
}
function t0(x, o) {
  return x && o ? "".concat(x, " ").concat(o) : x || o || "";
}
function Ia(x, o) {
  if (-7670 * -1 + -18 * 350 + -274 * 5 === x.length) return "";
  for (var t = x[-1534 * -2 + -4258 + -34 * -35], e = 22 * -361 + 61 * 97 + 2026; e < x.length; e++) t += x[e];
  return t;
}
function N0(x) {
  return x !== null && typeof x == "object" && x.constructor.name === Object.name && !("props" in x && x.$$typeof);
}
function ii(x, o, t) {
  if (void (-2541 + 363 * 7) === t && (t = !1), !t && !N0(x) && !Array.isArray(x)) return o;
  if (Array.isArray(o))
    for (var e = -77 * -24 + 7066 + -8914; e < o.length; e++) x[e] = ii(x[e], o[e]);
  else if (N0(o))
    for (var e in o) x[e] = ii(x[e], o[e]);
  return x;
}
function zi(x, o) {
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
var Md = z.NODE_ENV !== "production" ? pe : {};
function _d() {
  for (var x = [], o = -3 * -871 + 16 * 285 + -7173; o < arguments.length; o++) x[o] = arguments[o];
  for (var t = x[-1821 * 4 + -8224 + -2 * -7754], e = [], n = -2 * -503 + -5 * 892 + 3455, i = x.length; n < i; n += -3888 * 1 + -3413 + 3 * 2434) e.push(x[n]);
  return e.forEach(function(r) {
    t = t.replace(/%[a-z]/, r);
  }), t;
}
function M0(x) {
  for (var o = [], t = 4461 * -2 + 2574 + 6349; t < arguments.length; t++) o[t - 1] = arguments[t];
  return z.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(x, " for more information.").concat(o.length > -639 * 3 + 613 * 1 + 1304 ? " Args: ".concat(o.join(", ")) : "")) : new Error(_d.apply(void (3463 + 3463 * -1), P0([Md[x]], o, !1)).trim());
}
var Jd = function() {
  function x(o) {
    this.groupSizes = new Uint32Array(-6 * 1086 + 19 * -290 + 12538), this.length = -9111 + 1 * -3565 + 13188, this.tag = o;
  }
  return x.prototype.indexOfGroup = function(o) {
    for (var t = 979 * -4 + -3 * -1355 + -149, e = 1 * 6334 + 9923 * -1 + 3589 * 1; e < o; e++) t += this.groupSizes[e];
    return t;
  }, x.prototype.insertRules = function(o, t) {
    if (o >= this.groupSizes.length) {
      for (var e = this.groupSizes, n = e.length, i = n; o >= i; ) if ((i <<= 6313 + 1 * -8825 + 2513) < -8979 + -2993 * -3) throw M0(3544 + 24 * -147, "".concat(o));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(e), this.length = i;
      for (var r = n; r < i; r++) this.groupSizes[r] = -8756 + 1 * 7354 + 1402;
    }
    for (var a = this.indexOfGroup(o + 1), s = (r = -1 * -3398 + -283 * -1 + -3681, t.length); r < s; r++) this.tag.insertRule(a, t[r]) && (this.groupSizes[o]++, a++);
  }, x.prototype.clearGroup = function(o) {
    if (o < this.length) {
      var t = this.groupSizes[o], e = this.indexOfGroup(o), n = e + t;
      this.groupSizes[o] = 0;
      for (var i = e; i < n; i++) this.tag.deleteRule(e);
    }
  }, x.prototype.getGroup = function(o) {
    var t = "";
    if (o >= this.length || -1 * 3049 + 2100 + 73 * 13 === this.groupSizes[o]) return t;
    for (var e = this.groupSizes[o], n = this.indexOfGroup(o), i = n + e, r = n; r < i; r++) t += "".concat(this.tag.getRule(r)).concat(Ji);
    return t;
  }, x;
}(), Ud = 4364 + 1166 * -2 + 677 * -3 << 178 * -41 + -1387 + 3 * 2905, ux = /* @__PURE__ */ new Map(), vx = /* @__PURE__ */ new Map(), lx = 516 * -13 + -1154 * 2 + 9017, Qn = function(x) {
  if (ux.has(x)) return ux.get(x);
  for (; vx.has(lx); ) lx++;
  var o = lx++;
  if (z.NODE_ENV !== "production" && ((98 * -17 + -2887 + -1 * -4553 | o) < 61 * 98 + 1 * -887 + -3 * 1697 || o > Ud)) throw M0(2430 + 3 * -450 + 8 * -133, "".concat(o));
  return ux.set(x, o), vx.set(o, x), o;
}, Qd = function(x, o) {
  lx = o + (-1 * -6331 + -701 * 6 + -118 * 18), ux.set(x, o), vx.set(o, x);
}, zd = "style[".concat(g0, "][").concat(Ps, '="').concat(ro, '"]'), qd = new RegExp("^".concat(g0, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), $d = function(x, o, t) {
  for (var e, n = t.split(","), i = 9869 + 1 * -4709 + -5160, r = n.length; i < r; i++) (e = n[i]) && x.registerName(o, e);
}, eu = function(x, o) {
  for (var t, e = ((t = o.textContent) !== null && void (-2889 * -3 + -854 + -7813) !== t ? t : "").split(Ji), n = [], i = -6242 + -15 * 15 + 1 * 6467, r = e.length; i < r; i++) {
    var a = e[i].trim();
    if (a) {
      var s = a.match(qd);
      if (s) {
        var c = 0 | parseInt(s[1], 10), d = s[-7818 + -747 * -1 + 7073];
        -1006 + -1 * 9565 + 10571 !== c && (Qd(d, c), $d(x, d, s[9 * -534 + -2322 + 7131]), x.getTag().insertRules(c, n)), n.length = 9050 + -2 * 4525;
      } else n.push(a);
    }
  }
};
function tu() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Fs = function(x) {
  var o = document.head, t = x || o, e = document.createElement("style"), n = function(a) {
    var s = Array.from(a.querySelectorAll("style[".concat(g0, "]")));
    return s[s.length - (-9565 + 1 * 125 + 9441)];
  }(t), i = void (-602 + 7 * -56 + 994) !== n ? n.nextSibling : null;
  e.setAttribute(g0, Rs), e.setAttribute(Ps, ro);
  var r = tu();
  return r && e.setAttribute("nonce", r), t.insertBefore(e, i), e;
}, nu = function() {
  function x(o) {
    this.element = Fs(o), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, n = 1228 * -4 + 1003 + -3909 * -1, i = e.length; n < i; n++) {
        var r = e[n];
        if (r.ownerNode === t) return r;
      }
      throw M0(7643 * 1 + -8547 + 921);
    }(this.element), this.length = 3314 * -2 + 2365 + 4263;
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
}(), xu = function() {
  function x(o) {
    this.element = Fs(o), this.nodes = this.element.childNodes, this.length = -13292 + -1 * -13292;
  }
  return x.prototype.insertRule = function(o, t) {
    if (o <= this.length && o >= 0) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[o] || null), this.length++, !0;
    }
    return !1;
  }, x.prototype.deleteRule = function(o) {
    this.element.removeChild(this.nodes[o]), this.length--;
  }, x.prototype.getRule = function(o) {
    return o < this.length ? this.nodes[o].textContent : "";
  }, x;
}(), ou = function() {
  function x(o) {
    this.rules = [], this.length = 1570 + -2 * 785;
  }
  return x.prototype.insertRule = function(o, t) {
    return o <= this.length && (this.rules.splice(o, -2 * 1646 + -9480 + 12772, t), this.length++, !0);
  }, x.prototype.deleteRule = function(o) {
    this.rules.splice(o, 449 * 17 + 8745 + 103 * -159), this.length--;
  }, x.prototype.getRule = function(o) {
    return o < this.length ? this.rules[o] : "";
  }, x;
}(), fa = Ui, iu = { isServer: !Ui, useCSSOMInjection: !Zd }, Xs = function() {
  function x(o, t, e) {
    void (-1 * 7486 + -8701 + -16187 * -1) === o && (o = E0), void (-1 * -7589 + -9366 + 1777) === t && (t = {});
    var n = this;
    this.options = Ne(Ne({}, iu), o), this.gs = t, this.names = new Map(e), this.server = !!o.isServer, !this.server && Ui && fa && (fa = !1, function(i) {
      for (var r = document.querySelectorAll(zd), a = -14 * 428 + 490 + 5502, s = r.length; a < s; a++) {
        var c = r[a];
        c && c.getAttribute(g0) !== Rs && (eu(i, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this)), zi(this, function() {
      return function(i) {
        for (var r = i.getTag(), a = r.length, s = "", c = function(g) {
          var p = function(l) {
            return vx.get(l);
          }(g);
          if (void (603 * -5 + 41 * -116 + -409 * -19) === p) return "continue";
          var u = i.names.get(p), C = r.getGroup(g);
          if (void (-7740 + -226 * -37 + -1 * 622) === u || -102 * 27 + -1479 * 5 + 10149 === C.length) return "continue";
          var b = "".concat(g0, ".g").concat(g, '[id="').concat(p, '"]'), A = "";
          u !== void 0 && u.forEach(function(l) {
            l.length > 8889 + -2194 * -4 + -17665 && (A += "".concat(l, ","));
          }), s += "".concat(C).concat(b, '{content:"').concat(A, '"}').concat(Ji);
        }, d = -8671 + -1 * -4219 + 4452 * 1; d < a; d++) c(d);
        return s;
      }(n);
    });
  }
  return x.registerId = function(o) {
    return Qn(o);
  }, x.prototype.reconstructWithOptions = function(o, t) {
    return void (2194 + 10 * 381 + 76 * -79) === t && (t = !0), new x(Ne(Ne({}, this.options), o), this.gs, t && this.names || void (53 * -151 + -2 * 3350 + 14703));
  }, x.prototype.allocateGSInstance = function(o) {
    return this.gs[o] = (this.gs[o] || 5964 + -8885 * -1 + -14849) + (337 * -1 + 521 + 183 * -1);
  }, x.prototype.getTag = function() {
    return this.tag || (this.tag = (o = function(t) {
      var e = t.useCSSOMInjection, n = t.target;
      return t.isServer ? new ou(n) : e ? new nu(n) : new xu(n);
    }(this.options), new Jd(o)));
    var o;
  }, x.prototype.hasNameForId = function(o, t) {
    return this.names.has(o) && this.names.get(o).has(t);
  }, x.prototype.registerName = function(o, t) {
    if (Qn(o), this.names.has(o)) this.names.get(o).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(o, e);
    }
  }, x.prototype.insertRules = function(o, t, e) {
    this.registerName(o, t), this.getTag().insertRules(Qn(o), e);
  }, x.prototype.clearNames = function(o) {
    this.names.has(o) && this.names.get(o).clear();
  }, x.prototype.clearRules = function(o) {
    this.getTag().clearGroup(Qn(o)), this.clearNames(o);
  }, x.prototype.clearTag = function() {
    this.tag = void (-3 * -734 + 7787 + -9989);
  }, x;
}(), ru = /&/g, au = /^\s*\/\/.*$/gm;
function js(x, o) {
  return x.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(o, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(o, " ")), t.props = t.props.map(function(e) {
      return "".concat(o, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = js(t.children, o)), t;
  });
}
function Ms(x) {
  var o, t, e, n = x === void 0 ? E0 : x, i = n.options, r = void (3530 + -2 * 1765) === i ? E0 : i, a = n.plugins, s = void (-7323 + 7323 * 1) === a ? ao : a, c = function(p, u, C) {
    return C.startsWith(t) && C.endsWith(t) && C.replaceAll(t, "").length > 0 ? ".".concat(o) : p;
  }, d = s.slice();
  d.push(function(p) {
    p.type === no && p.value.includes("&") && (p.props[-3784 * -1 + -6981 + -3197 * -1] = p.props[-4338 + -1 * 6747 + -3695 * -3].replace(ru, t).replace(e, c));
  }), r.prefix && d.push(kd), d.push(Sd);
  var g = function(p, u, C, b) {
    u === void 0 && (u = ""), void (-2 * 1793 + -3 * 2917 + 949 * 13) === C && (C = ""), void (-1824 * -1 + -1242 + -582) === b && (b = "&"), o = b, t = u, e = new RegExp("\\".concat(t, "\\b"), "g");
    var A = p.replace(au, ""), l = vd(C || u ? "".concat(C, " ").concat(u, " { ").concat(A, " }") : A);
    r.namespace && (l = js(l, r.namespace));
    var v = [];
    return Wx(l, Bd(d.concat(Gd(function(R) {
      return v.push(R);
    })))), v;
  };
  return g.hash = s.length ? s.reduce(function(p, u) {
    return u.name || M0(15), $t(p, u.name);
  }, Vs).toString() : "", g;
}
var su = new Xs(), ri = Ms(), qi = c0.createContext({ shouldForwardProp: void (-1 * 4591 + 4553 + -2 * -19), styleSheet: su, stylis: ri });
qi.Consumer;
var cu = c0.createContext(void (-1 * -4751 + -9686 + 4935));
function ai() {
  return u0(qi);
}
function gu(x) {
  var o = tt(x.stylisPlugins), t = o[-1 * -1943 + -8040 + -67 * -91], e = o[1], n = ai().styleSheet, i = _e(function() {
    var d = n, g = {};
    return g.useCSSOMInjection = !1, x.sheet ? d = x.sheet : x.target && (d = d.reconstructWithOptions({ target: x.target }, !1)), x.disableCSSOMInjection && (d = d.reconstructWithOptions(g)), d;
  }, [x.disableCSSOMInjection, x.sheet, x.target, n]), r = _e(function() {
    var d = {};
    d.namespace = x.namespace, d.prefix = x.enableVendorPrefixes;
    var g = {};
    return g.options = d, g.plugins = t, Ms(g);
  }, [x.enableVendorPrefixes, x.namespace, t]);
  he(function() {
    dd(t, x.stylisPlugins) || e(x.stylisPlugins);
  }, [x.stylisPlugins]);
  var a = _e(function() {
    var d = {};
    return d.shouldForwardProp = x.shouldForwardProp, d.styleSheet = i, d.stylis = r, d;
  }, [x.shouldForwardProp, i, r]), s = {};
  s.value = a;
  var c = {};
  return c.value = r, c0.createElement(qi.Provider, s, c0.createElement(cu.Provider, c, x.children));
}
var Ca = function() {
  function x(o, t) {
    var e = this;
    this.inject = function(n, i) {
      void (-65 * 130 + -684 + -4567 * -2) === i && (i = ri);
      var r = e.name + i.hash;
      n.hasNameForId(e.id, r) || n.insertRules(e.id, r, i(e.rules, r, "@keyframes"));
    }, this.name = o, this.id = "sc-keyframes-".concat(o), this.rules = t, zi(this, function() {
      throw M0(9273 + 29 * 34 + -10247, String(e.name));
    });
  }
  return x.prototype.getName = function(o) {
    return void (89 * 27 + -7891 + -1 * -5488) === o && (o = ri), this.name + o.hash;
  }, x;
}(), du = function(x) {
  return x >= "A" && x <= "Z";
};
function pa(x) {
  for (var o = "", t = 7954 + 2121 * -3 + -1591; t < x.length; t++) {
    var e = x[t];
    if (-8667 + 173 * -1 + -421 * -21 === t && e === "-" && x[2 * 899 + -2013 + 215] === "-") return x;
    du(e) ? o += "-" + e.toLowerCase() : o += e;
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
var _s = function(x) {
  return x == null || x === !1 || x === "";
}, Js = function(x) {
  var o, t, e = [];
  for (var n in x) {
    var i = x[n];
    x.hasOwnProperty(n) && !_s(i) && (Array.isArray(i) && i.isCss || L0(i) ? e.push("".concat(pa(n), ":"), i, ";") : N0(i) ? e.push.apply(e, P0(P0(["".concat(n, " {")], Js(i), !1), ["}"], !1)) : e.push("".concat(pa(n), ": ").concat((o = n, (t = i) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || 1 * 4825 + -2 * 2507 + 21 * 9 === t || o in Od || o.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function a0(x, o, t, e) {
  if (_s(x)) return [];
  if (Qi(x)) return [".".concat(x.styledComponentId)];
  if (L0(x)) {
    if (!L0(i = x) || i.prototype && i.prototype.isReactComponent || !o) return [x];
    var n = x(o);
    return z.NODE_ENV === "production" || typeof n != "object" || Array.isArray(n) || n instanceof Ca || N0(n) || n === null || console.error("".concat(Ds(x), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), a0(n, o, t, e);
  }
  var i;
  return x instanceof Ca ? t ? (x.inject(t, e), [x.getName(e)]) : [x] : N0(x) ? Js(x) : Array.isArray(x) ? Array.prototype.concat.apply(ao, x.map(function(r) {
    return a0(r, o, t, e);
  })) : [x.toString()];
}
function uu(x) {
  for (var o = 0; o < x.length; o += -12014 + 4005 * 3) {
    var t = x[o];
    if (L0(t) && !Qi(t)) return !1;
  }
  return !0;
}
var lu = Ts(ro), Iu = function() {
  function x(o, t, e) {
    this.rules = o, this.staticRulesId = "", this.isStatic = z.NODE_ENV === "production" && (void (1597 * -6 + -2553 + 3 * 4045) === e || e.isStatic) && uu(o), this.componentId = t, this.baseHash = $t(lu, t), this.baseStyle = e, Xs.registerId(t);
  }
  return x.prototype.generateAndInjectStyles = function(o, t, e) {
    var n = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) n = t0(n, this.staticRulesId);
      else {
        var i = Ia(a0(this.rules, o, t, e)), r = oi($t(this.baseHash, i) >>> 10 * -916 + -5742 + -14902 * -1);
        if (!t.hasNameForId(this.componentId, r)) {
          var a = e(i, ".".concat(r), void 0, this.componentId);
          t.insertRules(this.componentId, r, a);
        }
        n = t0(n, r), this.staticRulesId = r;
      }
    else {
      for (var s = $t(this.baseHash, e.hash), c = "", d = 0; d < this.rules.length; d++) {
        var g = this.rules[d];
        if (typeof g == "string") c += g, z.NODE_ENV !== "production" && (s = $t(s, g));
        else if (g) {
          var p = Ia(a0(g, o, t, e));
          s = $t(s, p + d), c += p;
        }
      }
      if (c) {
        var u = oi(s >>> 0);
        t.hasNameForId(this.componentId, u) || t.insertRules(this.componentId, u, e(c, ".".concat(u), void (1 * 737 + 9631 + 3 * -3456), this.componentId)), n = t0(n, u);
      }
    }
    return n;
  }, x;
}(), Us = c0.createContext(void (-7223 + 1 * 5311 + -8 * -239));
Us.Consumer;
var Zo = {}, ha = /* @__PURE__ */ new Set();
function fu(x, o, t) {
  var e = Qi(x), n = x, i = !Oo(x), r = o.attrs, a = void (2 * -1214 + -7 * 151 + 3485) === r ? ao : r, s = o.componentId, c = void (-3 * -554 + 6298 + -10 * 796) === s ? function(M, J) {
    var H = typeof M != "string" ? "sc" : ca(M);
    Zo[H] = (Zo[H] || 1097 + 1097 * -1) + (-7725 + -78 * 29 + -4 * -2497);
    var oe = "".concat(H, "-").concat(Td(ro + H + Zo[H]));
    return J ? "".concat(J, "-").concat(oe) : oe;
  }(o.displayName, o.parentComponentId) : s, d = o.displayName, g = void (-4183 + -89 * -47) === d ? function(M) {
    return Oo(M) ? "styled.".concat(M) : "Styled(".concat(Ds(M), ")");
  }(x) : d, p = o.displayName && o.componentId ? "".concat(ca(o.displayName), "-").concat(o.componentId) : o.componentId || c, u = e && n.attrs ? n.attrs.concat(a).filter(Boolean) : a, C = o.shouldForwardProp;
  if (e && n.shouldForwardProp) {
    var b = n.shouldForwardProp;
    if (o.shouldForwardProp) {
      var A = o.shouldForwardProp;
      C = function(M, J) {
        return b(M, J) && A(M, J);
      };
    } else C = b;
  }
  var l = new Iu(t, p, e ? n.componentStyle : void (1 * -966 + -183 * -18 + -2328));
  function v(M, J) {
    return function(H, oe, U) {
      var ee = H.attrs, Te = H.componentStyle, Ze = H.defaultProps, Rt = H.foldedComponentIds, jt = H.styledComponentId, Be = H.target, it = c0.useContext(Us), Pn = ai(), f0 = H.shouldForwardProp || Pn.shouldForwardProp;
      z.NODE_ENV !== "production" && yx(jt);
      var _0 = Kd(oe, it, Ze) || E0, Je = function(p0, Ye, dt) {
        var Ue = {};
        Ue.className = void (-2 * 1374 + 99 + 2649), Ue.theme = dt;
        for (var Mt, ut = Ne(Ne({}, Ye), Ue), rt = 2393 + 1 * 8149 + -3 * 3514; rt < p0.length; rt += -179 * 36 + 2 * 563 + 5319) {
          var _t = L0(Mt = p0[rt]) ? Mt(ut) : Mt;
          for (var at in _t) ut[at] = at === "className" ? t0(ut[at], _t[at]) : at === "style" ? Ne(Ne({}, ut[at]), _t[at]) : _t[at];
        }
        return Ye.className && (ut.className = t0(ut.className, Ye.className)), ut;
      }(ee, oe, _0), bt = Je.as || Be, Pt = {};
      for (var He in Je) void (143 * -38 + 394 * 14 + -82) === Je[He] || He[-7480 + 2 * 2492 + 2496] === "$" || He === "as" || He === "theme" && Je.theme === _0 || (He === "forwardedAs" ? Pt.as = Je.forwardedAs : f0 && !f0(He, bt) || (Pt[He] = Je[He], f0 || z.NODE_ENV !== "development" || wg(He) || ha.has(He) || !xi.has(bt) || (ha.add(He), console.warn('styled-components: it looks like an unknown prop "'.concat(He, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var J0 = function(p0, Ye) {
        var dt = ai(), Ue = p0.generateAndInjectStyles(Ye, dt.styleSheet, dt.stylis);
        return z.NODE_ENV !== "production" && yx(Ue), Ue;
      }(Te, Je);
      z.NODE_ENV !== "production" && H.warnTooManyClasses && H.warnTooManyClasses(J0);
      var C0 = t0(Rt, jt);
      return J0 && (C0 += " " + J0), Je.className && (C0 += " " + Je.className), Pt[Oo(bt) && !xi.has(bt) ? "class" : "className"] = C0, Pt.ref = U, Ve(bt, Pt);
    }(R, M, J);
  }
  v.displayName = g;
  var R = c0.forwardRef(v), j = {};
  return j.attrs = !0, j.componentStyle = !0, j.displayName = !0, j.foldedComponentIds = !0, j.shouldForwardProp = !0, j.styledComponentId = !0, j.target = !0, R.attrs = u, R.componentStyle = l, R.displayName = g, R.shouldForwardProp = C, R.foldedComponentIds = e ? t0(n.foldedComponentIds, n.styledComponentId) : "", R.styledComponentId = p, R.target = e ? n.target : x, Object.defineProperty(R, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(M) {
    this._foldedDefaultProps = e ? function(J) {
      for (var H = [], oe = -3 * -1265 + 9 * 1 + -1 * 3803; oe < arguments.length; oe++) H[oe - 1] = arguments[oe];
      for (var U = -11432 + 1 * 11432, ee = H; U < ee.length; U++) ii(J, ee[U], !0);
      return J;
    }({}, n.defaultProps, M) : M;
  } }), z.NODE_ENV !== "production" && (Hd(g, p), R.warnTooManyClasses = /* @__PURE__ */ function(M, J) {
    var H = {}, oe = !1;
    return function(U) {
      if (!oe && (H[U] = !0, Object.keys(H).length >= -1833 + 1 * -7669 + 147 * 66)) {
        var ee = J ? ' with the id of "'.concat(J, '"') : "";
        console.warn("Over ".concat(-39 * 131 + 2517 + 2 * 1396, " classes were generated for component ").concat(M).concat(ee, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), oe = !0, H = {};
      }
    };
  }(g, p)), zi(R, function() {
    return ".".concat(R.styledComponentId);
  }), i && Ys(R, x, j), R;
}
function ma(x, o) {
  for (var t = [x[4182 + 1731 * 1 + -5913]], e = 3501 * -1 + 2494 + -53 * -19, n = o.length; e < n; e += -7859 + -20 * -393) t.push(o[e], x[e + (1 * -3449 + -1451 * 6 + 12156)]);
  return t;
}
var ba = function(x) {
  var o = {};
  return o.isCss = !0, Object.assign(x, o);
};
function Cu(x) {
  for (var o = [], t = -4192 + -1684 * 1 + 5877; t < arguments.length; t++) o[t - 1] = arguments[t];
  if (L0(x) || N0(x)) return ba(a0(ma(ao, P0([x], o, !0))));
  var e = x;
  return -5464 + 1366 * 4 === o.length && -8361 + -5 * -1043 + 1 * 3147 === e.length && typeof e[6521 * -1 + -7979 + -58 * -250] == "string" ? a0(e) : ba(a0(ma(e, o)));
}
function si(x, o, t) {
  if (void (1151 * -6 + -4082 + 10988) === t && (t = E0), !o) throw M0(5484 + -1 * 4943 + 15 * -36, o);
  var e = function(n) {
    for (var i = [], r = -2180 + 1 * -3331 + 5512; r < arguments.length; r++) i[r - (-870 * -8 + -1 * -8633 + -4 * 3898)] = arguments[r];
    return x(o, t, Cu.apply(void (-9319 + -2187 * -4 + 571), P0([n], i, !1)));
  };
  return e.attrs = function(n) {
    return si(x, o, Ne(Ne({}, t), { attrs: Array.prototype.concat(t.attrs, n).filter(Boolean) }));
  }, e.withConfig = function(n) {
    return si(x, o, Ne(Ne({}, t), n));
  }, e;
}
var Qs = function(x) {
  return si(fu, x);
}, On = Qs;
xi.forEach(function(x) {
  On[x] = Qs(x);
});
z.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var zn = "__sc-".concat(g0, "__");
z.NODE_ENV !== "production" && z.NODE_ENV !== "test" && typeof window < "u" && (window[zn] || (window[zn] = 1583 * 1 + -4039 + -4 * -614), -9623 * -1 + -89 * -11 + -10601 * 1 === window[zn] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[zn] += 166 * 2 + 1 * -8839 + 8508);
const pu = On.div`
  position: relative;
`, hu = On.video`
  transform: ${(x) => x.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(x) => x.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class xe extends Error {
  constructor(t, e) {
    super(t);
    D(this, "cause");
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
const Ko = ci, zs = {};
zs.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const Aa = zs;
var Zt = ((x) => (x.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", x.CONTROL = "document-auto-capture:control", x.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", x.DOCUMENT_DETECTION = "document-auto-capture:document-detection", x.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", x.STATE_CHANGED = "document-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", x))(Zt || {}), mu = ((x) => (x.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", x.CONTROL = "face-auto-capture:control", x.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", x.FACE_DETECTION = "face-auto-capture:face-detection", x.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", x.STATE_CHANGED = "face-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", x))(mu || {}), bu = ((x) => (x.ANIMATION_END = "magnifeye-auto-capture:animation-end", x.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", x))(bu || {}), Au = ((x) => (x.STATUS_CHANGED = "smile-auto-capture:status-changed", x))(Au || {}), yu = ((x) => (x.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", x.CONTROL = "palm-capture:control", x.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", x.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", x.STATE_CHANGED = "palm-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", x))(yu || {}), Wu = ((x) => (x.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", x))(Wu || {});
const vt = {};
vt.CANDIDATE_SELECTION = "candidate_selection", vt.DOCUMENT_CENTERING = "document_centering", vt.DOCUMENT_NOT_PRESENT = "document_not_present", vt.DOCUMENT_TOO_FAR = "document_too_far", vt.SHARPNESS_TOO_LOW = "sharpness_too_low", vt.BRIGHTNESS_TOO_LOW = "brightness_too_low", vt.BRIGHTNESS_TOO_HIGH = "brightness_too_high", vt.HOTSPOTS_PRESENT = "hotspots_present";
const St = vt, Lt = {};
Lt.isPresent = St.DOCUMENT_NOT_PRESENT, Lt.isNotSmall = St.DOCUMENT_TOO_FAR, Lt.isNotOutOfBounds = St.DOCUMENT_CENTERING, Lt.isSharp = St.SHARPNESS_TOO_LOW, Lt.isNotDim = St.BRIGHTNESS_TOO_LOW, Lt.isNotBright = St.BRIGHTNESS_TOO_HIGH, Lt.noHotspots = St.HOTSPOTS_PRESENT;
const vu = Lt, gi = {};
gi.FRONT = "user", gi.REAR = "environment";
const wx = gi, di = {};
di.AUTO_CAPTURE = "AUTO_CAPTURE", di.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const qs = di, on = {};
on.LOADING = "LOADING", on.ERROR = "ERROR", on.WAITING = "WAITING", on.RUNNING = "RUNNING";
const Me = on;
var wu = ((x) => (x.CLOSEUP = "CLOSEUP", x.DISTANT = "DISTANT", x.MIDDLE = "MIDDLE", x))(wu || {});
const so = kn(void 0);
so.displayName = "AppStateContext";
function Zn() {
  const x = u0(so);
  if (x === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return x;
}
const Su = so.Provider;
class $s extends et {
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
    return ((o = this.context) == null ? void 0 : o.appState) === Me.ERROR ? null : this.props.children;
  }
}
D($s, "contextType", so);
const Bu = On.canvas`
  transform: ${(x) => x.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, Gu = On.div`
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
function ku() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const Ou = fs(
  ({ detectionDetails: x, isImageMirror: o }, t) => ku() ? (console.log(x), /* @__PURE__ */ O(xt, { children: [
    /* @__PURE__ */ O(Bu, { ref: t, $isImageMirror: o }),
    /* @__PURE__ */ O(Gu, { children: Object.entries(x).map(([e, n]) => /* @__PURE__ */ O("div", { children: [
      e,
      ": ",
      /* @__PURE__ */ O("strong", { children: n })
    ] }, e)) })
  ] })) : null
), Sx = kn(void 0);
Sx.displayName = "AnalyticsContext";
function Zu() {
  const x = u0(Sx);
  if (x === void 0)
    throw new Error(`${Sx.displayName} must be used within a AnalyticsProvider`);
  return x;
}
function ui(x, o, t, e, n) {
  return Ae(t - -5, o);
}
(function(x, o) {
  function t(s, c, d, g, p) {
    return Ae(c - 263, s);
  }
  function e(s, c, d, g, p) {
    return Ae(s - -14, g);
  }
  const n = x();
  function i(s, c, d, g, p) {
    return Ae(c - -277, g);
  }
  function r(s, c, d, g, p) {
    return Ae(s - 334, p);
  }
  function a(s, c, d, g, p) {
    return Ae(c - -745, g);
  }
  for (; ; )
    try {
      if (parseInt(t("[d&d", 715, 719, 715, 699)) / 1 + parseInt(a(-299, -313, -303, "Co^4", -330)) / 2 * (-parseInt(t("&05f", 718, 726, 703, 727)) / 3) + parseInt(i(157, 159, 165, "VSGS", 170)) / 4 * (parseInt(r(791, 796, 788, 796, "u!*o")) / 5) + parseInt(a(-276, -284, -280, "JOht", -271)) / 6 * (-parseInt(t("9#H&", 708, 714, 726, 694)) / 7) + parseInt(i(162, 174, 188, "VSGS", 174)) / 8 + parseInt(e(442, 458, 425, "zKfc", 436)) / 9 * (parseInt(t("w$XE", 731, 731, 746, 742)) / 10) + parseInt(a(-313, -299, -310, "%BXp", -307)) / 11 * (-parseInt(i(175, 176, 168, "DNmz", 180)) / 12) === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Gx, 455332 * -2 + 1348519 + 377512);
function Hu(x, o, t, e, n) {
  return Ae(x - -827, n);
}
function Ku(x, o, t, e, n) {
  return Ae(e - 886, n);
}
function li(x, o, t, e, n) {
  return Ae(t - -996, o);
}
const Bx = kn(void (-456 + -1 * 8011 + -1 * -8467));
function Gx() {
  const x = ["hMeOW6Om", "CCkIAYpdICo0emkvWRhdIa", "WOSGwCoyELRcR8kaoq", "qmk5omkWWOi", "WRNcOGFcTSkyFSoxfCogrSowWQ3cHa", "W4pdGmk4WRq6", "W43cNNldOCk6", "WQGxeSoj", "W4xcQN9pfrrpW7ePWRu", "g8o6ACoHWOKuW6P7pSkF", "W6hdU8kxCGe", "htGxW6tdTX9WcfpdNG", "WRlcTSoVifPjWOOKWQ5uWPvH", "tCkKi8kPWOa", "WOWLwCkPufBcUSkuiSoM", "gmo/fa8ogJ7dPmoU", "hmo6ACk1WOmkW4buka", "WRNcNSoTWOiJe8oHygy", "WP4ylMRcUW", "e8opWRiOW6q", "WPeibZCDWPhdGHvHW5W", "C8o3cLxcLW", "WPznWRnrWOe", "rsRcVxGMWRJdJ8kBwf0", "q8kEW7bUW6/dQgldImkDkq", "WQddUSotDSkGW5ZdGgPKW4/cL1y", "W5aBW4rIW5qJWODUW7pcQ8kpqCoW", "ssRcU34fWPBdGCkxs3O", "W7nHeSoOW4m", "W7BcQ8kx", "h8o+eM5kFhZdO8oqWR5zeYe", "W7uWW6xcM3JcImoxC8klWPNdNJldRq", "W6GmaCo9fCkXtNT7", "W5pcGgFcKZq", "pJCxWPm0xIpcLCox", "mtVcM8o2zmkoWPDSW6qP", "W41Ovmk/WQNdG8oWWOfXW7u", "W6iocmklpCkGr1LLW54", "WOnAucCR"];
  return Gx = function() {
    return x;
  }, Gx();
}
function Ru(x, o, t, e, n) {
  return Ae(n - 120, x);
}
Bx[li(-547, "9#H&", -556) + li(-542, "S93m", -557) + "e"] = ui(474, "Xe#V", 460) + Ku(1341, 1353, 1328, 1346, "3eYz") + ui(461, "R[hk", 462);
function Ae(x, o) {
  const t = Gx();
  return Ae = function(e, n) {
    e = e - (-9743 * -1 + 4191 + -13504);
    let i = t[e];
    if (Ae.CTDwXr === void 0) {
      var r = function(g) {
        const p = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", C = "";
        for (let b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = p.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          C += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const d = function(g, p) {
        let u = [], C = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          C = (C + u[l] + p.charCodeAt(l % p.length)) % 256, b = u[l], u[l] = u[C], u[C] = b;
        l = 0, C = 0;
        for (let v = 0; v < g.length; v++)
          l = (l + 1) % 256, C = (C + u[l]) % 256, b = u[l], u[l] = u[C], u[C] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[C]) % 256]);
        return A;
      };
      Ae.criWhd = d, x = arguments, Ae.CTDwXr = !0;
    }
    const a = t[0], s = e + a, c = x[s];
    return c ? i = c : (Ae.bOLzIg === void 0 && (Ae.bOLzIg = !0), i = Ae.criWhd(i, n), x[s] = i), i;
  }, Ae(x, o);
}
function Hn() {
  const x = u0(Bx);
  function o(i, r, a, s, c) {
    return Hu(a - 1712, r - 247, a - 221, s - 265, r);
  }
  function t(i, r, a, s, c) {
    return Ru(i, r - 39, a - 46, s - 83, c - 58);
  }
  function e(i, r, a, s, c) {
    return ui(i - 165, i, a - -6);
  }
  function n(i, r, a, s, c) {
    return li(i - 265, r, a - 54);
  }
  if (x === void (-2025 + -225 * -9)) throw new Error(Bx[t("jpQR", 603, 613, 603, 612) + t("T[G(", 607, 590, 607, 609) + "e"] + (e("7J%@", 443, 455) + n(-471, "i&Wk", -483) + o(1320, "3Mf]", 1328, 1347) + e("jpQR", 441, 452) + n(-512, "#7yq", -493) + o(1347, "yMey", 1339, 1357) + n(-510, "cPBg", -500) + t("%BXp", 626, 642, 621, 628)));
  return x;
}
function ye(x, o) {
  const t = kx();
  return ye = function(e, n) {
    e = e - (1 * -7441 + -7 * -287 + 5896);
    let i = t[e];
    if (ye.aKVqMZ === void 0) {
      var r = function(g) {
        const p = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", C = "";
        for (let b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = p.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          C += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const d = function(g, p) {
        let u = [], C = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          C = (C + u[l] + p.charCodeAt(l % p.length)) % 256, b = u[l], u[l] = u[C], u[C] = b;
        l = 0, C = 0;
        for (let v = 0; v < g.length; v++)
          l = (l + 1) % 256, C = (C + u[l]) % 256, b = u[l], u[l] = u[C], u[C] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[C]) % 256]);
        return A;
      };
      ye.hTsvgl = d, x = arguments, ye.aKVqMZ = !0;
    }
    const a = t[838 * 6 + 2 * -2419 + 190 * -1], s = e + a, c = x[s];
    return c ? i = c : (ye.MAEoTV === void 0 && (ye.MAEoTV = !0), i = ye.hTsvgl(i, n), x[s] = i), i;
  }, ye(x, o);
}
function kx() {
  const x = ["nWPntfhdI8k3DCka", "mqvnfrRcMSouqmkVj1m6W74", "nc5NCmku", "W51mW5rYbG", "W79xWPhcOmoIW6ZcPmkLiCkYkYddJCov", "W6pdJCkQW5ug", "WOyubHldIG", "qCkPaLfwgmoGW5NdPSkV", "a8kfW6RcUaqqt8okW7RcLa", "fCooWR0na8kha0VcM8kcWPCsW5W", "W4tcUmk/C8kqk8osvgzo", "ArGSjmoN", "nXW7WP/dLCoZAvW", "W73dNYz9W4/cP8o3W68d", "W7VdKcyKWOtdTSkuW5OSW7hdV3pdGa", "WRZcIbP6gmoww0q/W4W", "WQTAoSoSW51Hj2eiWQm", "rmkibgxcKSkSWOCCWOiGddC", "emoaWRGfbCkeBvVcTSkwWRSy", "F8kzW6RcJdtcQINdQq", "kCo7kCkHo8kSW4dcMSkmWQJdQxdcQCoD", "lSo5xCk8W7XOW6DCW6/cICkDWPdcTa", "jCkkFx0wW5hdOCoqW4NdHG", "r8kRavqGr8kOWRddNCkrC8k8i8oo", "W4VcRSoNbvNdN8onWOVdPs/cRW4xWOm", "WQzuW6dcQa", "BbfSkSo8"];
  return kx = function() {
    return x;
  }, kx();
}
(function(x, o) {
  function t(s, c, d, g, p) {
    return ye(c - -922, p);
  }
  const e = x();
  function n(s, c, d, g, p) {
    return ye(s - 853, g);
  }
  function i(s, c, d, g, p) {
    return ye(c - 641, g);
  }
  function r(s, c, d, g, p) {
    return ye(d - 949, g);
  }
  function a(s, c, d, g, p) {
    return ye(s - -910, p);
  }
  for (; ; )
    try {
      if (-parseInt(t(-439, -450, -446, -443, "Eci9")) / 1 * (parseInt(r(1420, 1428, 1433, "mPTL", 1423)) / 2) + parseInt(t(-446, -446, -434, -443, "2i$C")) / 3 * (-parseInt(n(1328, 1324, 1321, "sWek", 1314)) / 4) + parseInt(t(-447, -451, -464, -461, "s]No")) / 5 + -parseInt(t(-464, -455, -444, -444, "aEgB")) / 6 * (parseInt(i(1132, 1120, 1123, "r1d#", 1132)) / 7) + -parseInt(a(-422, -415, -429, -432, "&(z2")) / 8 + parseInt(a(-444, -442, -452, -448, "sWek")) / 9 + parseInt(a(-430, -436, -432, -425, "me8E")) / 10 === o) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(kx, 137365 * 5 + -72 * -15803 + 32974 * -26);
function Pu({ licensePath: x, bramble: o, wasmDirectoryPath: t }) {
  const [e, n] = tt(), i = e !== void (589 * 16 + 1594 + -11018);
  he(() => {
    async function c() {
      function d(u, C, b, A, l) {
        return ye(C - -61, b);
      }
      function g(u, C, b, A, l) {
        return ye(b - 197, C);
      }
      function p(u, C, b, A, l) {
        return ye(A - 671, u);
      }
      await o[g(678, ")[wp", 679)](t, x), n(o[p("7Kqs", 1166, 1151, 1157) + p("czkq", 1168, 1142, 1154) + d(428, 426, "7)oF") + "t"]());
    }
    c();
  }, [o, t, x, n]);
  const r = {};
  r[a("CLW9", -196) + s(430, 430, 418, "ZIDB")] = e, r[a("0$3K", -218) + "sh"] = i;
  function a(c, d, g, p, u) {
    return ye(d - -686, c);
  }
  function s(c, d, g, p, u) {
    return ye(c - -59, p);
  }
  return r;
}
var ec = ((x) => (x.DOCUMENT = "document-auto-capture:dev", x.FACE = "face-auto-capture:dev", x.PALM = "palm-capture:dev", x))(ec || {});
const Ii = {};
Ii.SIMD = "simd", Ii.NO_SIMD = "no-simd";
const ya = Ii, fi = {};
fi.Lower = "Lower", fi.Higher = "Higher";
const Ci = fi, fx = {};
fx.VISIBLE = "VISIBLE", fx.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", fx.HIDDEN = "HIDDEN";
const Ox = fx;
(function(x, o) {
  function t(c, d, g, p, u) {
    return Ee(g - 530, p);
  }
  function e(c, d, g, p, u) {
    return Ee(u - 501, d);
  }
  var n = x();
  function i(c, d, g, p, u) {
    return Ee(c - -482, u);
  }
  function r(c, d, g, p, u) {
    return Ee(c - 514, d);
  }
  function a(c, d, g, p, u) {
    return Ee(u - -970, c);
  }
  for (; ; )
    try {
      var s = parseInt(e(932, "(h^Z", 933, 919, 922)) / 1 + parseInt(e(909, "0&ab", 908, 905, 909)) / 2 + -parseInt(t(963, 965, 955, "*](u", 957)) / 3 + parseInt(t(954, 955, 953, "jdQz", 962)) / 4 + parseInt(e(924, "5%2$", 927, 925, 919)) / 5 + parseInt(r(934, "J%U1", 935, 931, 933)) / 6 * (-parseInt(e(913, "mF7$", 927, 916, 920)) / 7) + -parseInt(a("VIGY", -556, -553, -556, -556)) / 8 * (parseInt(i(-55, -44, -64, -49, "cs*p")) / 9);
      if (s === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Zx, -512184 + 1 * -622417 + 499 * 2994);
function Ee(x, o) {
  var t = Zx();
  return Ee = function(e, n) {
    e = e - 407;
    var i = t[e];
    if (Ee.fdqblt === void 0) {
      var r = function(g) {
        for (var p = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", C = "", b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = p.indexOf(l);
        for (var R = 0, j = u.length; R < j; R++)
          C += "%" + ("00" + u.charCodeAt(R).toString(16)).slice(-2);
        return decodeURIComponent(C);
      }, a = function(g, p) {
        var u = [], C = 0, b, A = "";
        g = r(g);
        var l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          C = (C + u[l] + p.charCodeAt(l % p.length)) % 256, b = u[l], u[l] = u[C], u[C] = b;
        l = 0, C = 0;
        for (var v = 0; v < g.length; v++)
          l = (l + 1) % 256, C = (C + u[l]) % 256, b = u[l], u[l] = u[C], u[C] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[C]) % 256]);
        return A;
      };
      Ee.wPtEuh = a, x = arguments, Ee.fdqblt = !0;
    }
    var s = t[0], c = e + s, d = x[c];
    return d ? i = d : (Ee.xGBgaB === void 0 && (Ee.xGBgaB = !0), i = Ee.wPtEuh(i, n), x[c] = i), i;
  }, Ee(x, o);
}
function Zx() {
  var x = ["W6KqxmoUweVdJJjnWPNdNKJcNW", "W67cMcBdKv0EWQJdUCoIWQVdVtVcVq", "W7NcVHBcJCoKWRBdVG8E", "WPtdHxNcJqK", "W5NcQuqrW4zokJxdVq", "vf7cRmkSDwxdSa", "c8o9hmogmH/cGmoQWPv0nu3cHG", "W67dHmoHW7JdUSoLW7e", "D8oaW4W6WQ3cPmonW6e5pCkXWPZcSq", "W4BdM8oEjXSfgYDBW7nVzG", "WPDFW5ddUeO", "W4SeaZ/cJmk5t8kbWQBcVG9rWRS", "WQ8LWQDMWQ4FASkvWO8ZjSoT", "W6eVWOxdJ8o2WQ90W47dSCk9W6qTqW", "twVcP8o5wW", "BHGdns1DkJDKr8kefa", "W6JcUmkUWP7cOSkmWO3cOmklW5XsW4RdLa", "huKRvCkauCoyuYGJeCoD", "cCkwWPhcJHhdKcddO1xdLCo9WPy", "yMvbW4hcTmkbW5O5oWiOW6VcGG", "W67cMc7dKLWCW4/dPCoUWOZdPXm"];
  return Zx = function() {
    return x;
  }, Zx();
}
function Vu({ crosshatch: x }) {
  function o(t, e, n, i, r) {
    return Ee(r - -448, n);
  }
  return x != null && x[o(-25, -32, "2^^t", -35, -26) + "id"] ? Ci[o(-39, -37, "j639", -30, -33) + "r"] : Ci[o(-23, -22, "k$J@", -12, -22)];
}
(function(x, o) {
  function t(a, s, c, d, g) {
    return Ge(d - -842, s);
  }
  function e(a, s, c, d, g) {
    return Ge(s - 88, d);
  }
  function n(a, s, c, d, g) {
    return Ge(g - 238, d);
  }
  function i(a, s, c, d, g) {
    return Ge(c - 950, d);
  }
  const r = x();
  for (; ; )
    try {
      if (parseInt(e(482, 498, 499, "G7kP", 482)) / 1 + parseInt(e(504, 513, 503, "6zw0", 519)) / 2 + parseInt(e(537, 521, 532, "Gixx", 510)) / 3 * (-parseInt(i(1375, 1379, 1372, "8Q2y", 1367)) / 4) + -parseInt(n(680, 671, 675, "Y4&n", 667)) / 5 + parseInt(t(-423, "YLhB", -442, -434, -431)) / 6 * (-parseInt(i(1386, 1363, 1371, "N&jf", 1378)) / 7) + -parseInt(i(1381, 1370, 1386, "8Q2y", 1384)) / 8 * (parseInt(n(658, 635, 649, "8Q2y", 644)) / 9) + parseInt(n(655, 679, 676, "uL](", 665)) / 10 === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Hx, 305465);
function Hx() {
  const x = ["WQKaWPtcIeC", "kSoPfCkXA08PW63dNCory8o6nW", "C1/cLSklWPb2WRW2WR4bpSo9WRG", "wCo8WQ8Myx54jN0oW4ekW6e", "j3rJjYBcTCkgW7qBW5JdLG", "WPO5lmkpWRi", "E1xcKmocW4SiW649WQm", "hSkUd3NcO8oRsqFdRHiy", "W50QWRaVW7i", "mmkKiX7cMSk0rW", "gXpcLhScW41NW6f3WPbb", "WOD6W5u", "eXRcKZPyW5vsW6Hq", "WRzDW6BcRSke", "WOvlW499j0mxW7ilW5SZy8kw", "arVcLxFdMG", "FCkfAmkuW6RdMmk9WPddS8otxq", "BhldUCk3cmoSdmkbW7VdTb7cSYC", "aYSRpSk7", "W7/cVmoZW73cTW", "q1ddHYHo", "WPyPl8oRF0fBW5uZWPLriq", "ixrJiIBcJ8k4W5SeW4hdQW", "tKFdKa", "WR0jWO7cIwC", "E1/dRSouW5W6W5y1", "CCkvWQi6jsldJJdcTCoosq3cJq", "W4ldJ8kYEmo7yCky", "eXddRsXpW6DQW6a", "WRDiW4WQW5O", "j8kSW5vRWRi", "pSkOxLT7bSkSqSkEW5FcH2S"];
  return Hx = function() {
    return x;
  }, Hx();
}
function Ge(x, o) {
  const t = Hx();
  return Ge = function(e, n) {
    e = e - (1999 + -2643 * 3 + -5 * -1267);
    let i = t[e];
    if (Ge.pbDkyC === void 0) {
      var r = function(g) {
        const p = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", C = "";
        for (let b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = p.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          C += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const d = function(g, p) {
        let u = [], C = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          C = (C + u[l] + p.charCodeAt(l % p.length)) % 256, b = u[l], u[l] = u[C], u[C] = b;
        l = 0, C = 0;
        for (let v = 0; v < g.length; v++)
          l = (l + 1) % 256, C = (C + u[l]) % 256, b = u[l], u[l] = u[C], u[C] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[C]) % 256]);
        return A;
      };
      Ge.upUcfx = d, x = arguments, Ge.pbDkyC = !0;
    }
    const a = t[-7925 + -1 * 6141 + -2 * -7033], s = e + a, c = x[s];
    return c ? i = c : (Ge.vFwkiy === void 0 && (Ge.vFwkiy = !0), i = Ge.upUcfx(i, n), x[s] = i), i;
  }, Ge(x, o);
}
function Tu({ children: x, licensePath: o, bramble: t, wasmDirectoryPath: e }) {
  const n = {};
  n[i(1388, 1380, 1383, "wb5w", 1381) + "le"] = t;
  function i(C, b, A, l, v) {
    return Ge(v - 950, l);
  }
  n[i(1379, 1371, 1360, "qRjC", 1373) + i(1356, 1368, 1354, "pBMC", 1363) + "h"] = o, n[r(-127, -110, -125, -116, "BcUc") + r(-114, -134, -107, -120, "8Q2y") + r(-118, -119, -138, -125, "TDA@") + "th"] = e;
  function r(C, b, A, l, v) {
    return Ge(l - -534, v);
  }
  const { sunfish: a, crosshatch: s } = Pu(n), c = {};
  c[u(-477, -479, -472, -462, "$6R&") + r(-113, -120, -110, -110, "kkJz")] = s;
  const d = _e(() => ({ redfin: Vu(c), sunfish: a, crosshatch: s, bramble: t }), [a, s, t]), g = {};
  g[u(-454, -478, -467, -473, "Dw6G")] = d;
  function p(C, b, A, l, v) {
    return Ge(v - 469, C);
  }
  function u(C, b, A, l, v) {
    return Ge(A - -879, v);
  }
  return g[i(1374, 1367, 1376, "BcUc", 1376) + p("XLfH", 874, 876, 878, 874)] = x, O(Bx[u(-437, -453, -445, -443, "k$Pd") + r(-111, -107, -120, -117, "8Q2y")], g);
}
function Kx() {
  var x = ["W5LftKZcKcm8WQG7t8kVWQJdUq", "rIlcKdZdKH/cHmoV", "wmoVW5TWiu8lW7ldKh4SjCob", "W5Xat03cLYvNWP0sEmk3WQ4", "DcRcT0FcNmkQWRddTSkNW7BdMbBcVG", "WOZdKCkyW4GmW43dKmkQW4anW7G8m8om", "W5hdN1XPW4u0eSoP", "WO3dV8kZWPDXfSoDWRbaWPWrCLm", "W5aSWPTzWRpdOMRcIx88WRLr", "tKtdRmkOzSoqCau6fwiPWPn8", "hSoEW57dOaxdJIlcUvzuW5uAWPC", "uXXqW55/W79Ik8klj8kKl8kf", "W5LiruZcKsjVWQC/E8kXWPq", "WRumaSkdWP7dKCoLaK3cM0lcLCoA", "FGpcQYhcLq17dZxdP8kiAW"];
  return Kx = function() {
    return x;
  }, Kx();
}
(function(x, o) {
  function t(s, c, d, g, p) {
    return $e(s - -312, c);
  }
  function e(s, c, d, g, p) {
    return $e(p - -658, c);
  }
  var n = x();
  function i(s, c, d, g, p) {
    return $e(s - 118, g);
  }
  function r(s, c, d, g, p) {
    return $e(s - -202, g);
  }
  for (; ; )
    try {
      var a = -parseInt(e(-167, "InhH", -164, -156, -162)) / 1 + -parseInt(e(-174, "uh0O", -168, -167, -173)) / 2 + parseInt(r(286, 279, 291, "*&(Y", 291)) / 3 + parseInt(i(604, 597, 608, "keU!", 598)) / 4 + -parseInt(t(185, "[cjy", 184, 185, 180)) / 5 + parseInt(t(180, "1wh4", 174, 180, 181)) / 6 * (-parseInt(e(-170, "%3Cy", -164, -159, -164)) / 7) + parseInt(r(289, 287, 284, "!qR)", 282)) / 8;
      if (a === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Kx, 1784087 + -815 * 35 + -791316);
function $e(x, o) {
  var t = Kx();
  return $e = function(e, n) {
    e = e - 484;
    var i = t[e];
    if ($e.yCITXU === void 0) {
      var r = function(g) {
        for (var p = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", C = "", b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = p.indexOf(l);
        for (var R = 0, j = u.length; R < j; R++)
          C += "%" + ("00" + u.charCodeAt(R).toString(16)).slice(-2);
        return decodeURIComponent(C);
      }, a = function(g, p) {
        var u = [], C = 0, b, A = "";
        g = r(g);
        var l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          C = (C + u[l] + p.charCodeAt(l % p.length)) % 256, b = u[l], u[l] = u[C], u[C] = b;
        l = 0, C = 0;
        for (var v = 0; v < g.length; v++)
          l = (l + 1) % 256, C = (C + u[l]) % 256, b = u[l], u[l] = u[C], u[C] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[C]) % 256]);
        return A;
      };
      $e.FxKtXi = a, x = arguments, $e.yCITXU = !0;
    }
    var s = t[0], c = e + s, d = x[c];
    return d ? i = d : ($e.DKsUft === void 0 && ($e.DKsUft = !0), i = $e.FxKtXi(i, n), x[c] = i), i;
  }, $e(x, o);
}
function Du({ analytics: x, crosshatch: o }) {
  return o !== void (6771 + 2949 * 1 + -9720) && !o.isAnalyticsDisabled ? x : void (-4561 * -1 + 9786 + -14347);
}
function Eu({ analytics: x, appKey: o, redfin: t, crosshatch: e, bramble: n }) {
  const i = {};
  i.analytics = x, i.crosshatch = e;
  const r = Du(i);
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
function Lu({
  analytics: x,
  appKey: o,
  children: t
}) {
  const { redfin: e, crosshatch: n, bramble: i } = Hn(), r = Eu({ analytics: x, redfin: e, appKey: o, crosshatch: n, bramble: i }), a = _e(
    () => ({
      analytics: r
    }),
    [r]
  );
  return /* @__PURE__ */ O(Sx.Provider, { value: a, children: t });
}
const Nu = 11 * -97 + -2008 * 1 + 3075 + 0.8, Yu = 0 + 0.43, Fu = -1008 + -16 * -63 + 0.03, Xu = -4861 + 1 * 4861 + 0.5, ju = 11069 + -11069 * 1 + 0.25, Mu = 0 + 0.9, _u = 5 * 1252 + 56 * -101 + 4 * -151 + 0.1, Cx = {};
Cx.minDuration = 1e3, Cx.maxDuration = 2500, Cx.minFrames = 10;
const Ro = Cx, pi = {};
pi.max = 100, pi.min = 10;
const Wa = pi, Ju = -7 * 977 + 7601 + 14 * -3, Uu = -7925 * 1 + 5 * -1851 + 17380, Qu = 4, tc = "AES-CBC", nc = "RSA-OAEP", zu = "SHA-256", qu = "image/jpeg", $u = -8009 * -1 + 5342 + -13343, el = "SAM v1.40.4 for idcards", tl = "dot_embedded_bg.wasm", qn = (x, o) => Math.hypot(o.x - x.x, o.y - x.y), nl = (x) => x.length < 4175 * -2 + -4072 + 1 * 12423 ? 6 * 179 + -1 * 7726 + -2 * -3326 : x.reduce((t, e) => t + e, 2694 * 1 + 1 * -257 + -2437) / x.length, $i = (x) => Number.parseFloat(x.toFixed(3)), xl = (x) => {
  const { bottomLeft: o, bottomRight: t, topLeft: e, topRight: n } = x, i = qn(e, n), r = qn(n, t), a = qn(o, t), s = qn(e, o);
  return Math.min(i, r, a, s);
}, ol = (x) => {
  const o = x.getContext("2d");
  o && o.clearRect(0, 4862 + -1 * 4862, o.canvas.width, o.canvas.height);
}, il = -8870 + -1 * -8871 + 0.5, rl = -5228 + 1839 * -3 + 10745 + 0.85, Po = 1e3, al = 29 * 109 + 283 * -19 + 4 * 704, sl = -9462 + 1 * -7681 + -217 * -79, cl = "dot-auto-capture-video";
function gl(x, o) {
  return x < Po && o >= Po ? Po : x;
}
function dl(x, o) {
  return x < o ? x : o;
}
function xc({ height: x, width: o }) {
  let t;
  return o > x ? t = gl(x, o) : t = o, { width: t, height: dl(x, t) };
}
const ul = (x, o) => Math.min(x, o), oc = (x) => {
  const o = xc(x).width, t = o * rl, e = (x.width - t) / (-1094 + -137 * -8), n = t / il, i = (x.height - n) / (533 * -1 + -53 * 16 + 1383), r = {};
  return r.shiftX = e, r.shiftY = i, r.width = t, r.height = n, r;
}, ll = (x) => {
  const { height: o, shiftX: t, shiftY: e, width: n } = oc(x), i = {};
  return i.shiftX = t / x.width, i.shiftY = e / x.height, i.width = n / x.width, i.height = o / x.height, i;
}, Il = "@innovatrics/dot-common-auto-capture", fl = "6.2.1", Cl = {
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
}, er = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), va = () => {
  const x = /Android/i.test(navigator.userAgent), o = /Firefox/i.test(navigator.userAgent);
  return x && o;
}, bl = () => {
  const x = navigator.userAgent.includes("Chrome"), o = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return x && o ? !1 : o;
}, hi = (x) => new Promise((o) => {
  setTimeout(o, x);
}), Al = (x) => JSON.parse(JSON.stringify(x, (o, t) => typeof t == "number" ? $i(t) : t)), ic = () => ml.version, rc = (x) => new URL(x).hostname.replace("www.", ""), yl = () => rc(window.location.href) === "localhost", $n = (x) => Object.entries(x).map(([o, t]) => encodeURIComponent(o) + "=" + encodeURIComponent(t)).join("&"), Wl = (x, o) => JSON.stringify(x) === JSON.stringify(o) ? o : x, vl = () => "prod".toLowerCase() === "dev";
class ac extends Array {
  constructor(t) {
    super();
    D(this, "size");
    this.size = t;
  }
  pushFixed(...t) {
    if (t.length > this.size) {
      const e = t.slice(-this.size);
      this.push(...e);
      return;
    }
    this.length === this.size && this.splice(114 * 5 + 822 + 2 * -696, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(2493 * 1 + 15 * -23 + -2148);
  }
}
const wl = (x, o, t = qu) => new Promise((e) => {
  x.toBlob((n) => {
    if (!n) throw new Error("Canvas to Blob failed");
    e(n);
  }, t, o);
}), Sl = async (x) => wl(x, -1 * 1949 + -208 + 2247 * 1), Bl = (x, o) => {
  const t = document.createElement("canvas");
  t.width = o.width, t.height = o.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(x, o.shiftX, o.shiftY, o.width, o.height, -2764 + -8 * -806 + -6 * 614, -5230 + -844 * 1 + -1 * -6074, t.width, t.height), t;
}, Gl = (x) => {
  const o = x.getContext("2d");
  if (!o) throw new Error("getImageDataForSam ctx error");
  const { data: t } = o.getImageData(-9028 + 9028 * 1, -1 * 7907 + 2 * 3987 + -1 * 67, x.width, x.height);
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
function Ol({ canvas: x, color: o, fill: t, offset: e = 2996 + -28 * 107, polygon: n }) {
  const i = x.getContext("2d");
  if (!i) return;
  const { bottomLeft: r, bottomRight: a, topLeft: s, topRight: c } = n;
  t ? i.fillStyle = o : i.strokeStyle = o, i.beginPath(), i.moveTo(s.x + e, s.y + e), i.lineTo(c.x + e, c.y + e), i.lineTo(a.x + e, a.y + e), i.lineTo(r.x + e, r.y + e), i.closePath(), t ? i.fill() : i.stroke();
}
const Zl = (x, o) => {
  const { height: t, shiftX: e, shiftY: n, width: i } = o;
  return !(x.x < e || x.x > e + i || x.y < n || x.y > n + t);
}, Hl = (x, o) => Object.values(x).every((t) => Zl(t, o));
function Rx(x) {
  const { height: o, width: t } = xc(x), e = (x.width - t) / (-93 * -79 + -4 * 1729 + 3 * -143), n = (x.height - o) / 2, i = {};
  return i.shiftX = e, i.shiftY = n, i.width = t, i.height = o, i;
}
function sc(x, o, t) {
  const { height: e, width: n } = t, i = ul(x.width, x.height), r = n - i * o * (-1 * 9749 + 8087 * -1 + 6 * 2973), a = e - i * o * (1 * 7885 + -1557 + -2 * 3163), s = (x.width - r) / (-2812 + -3761 * -1 + 947 * -1), c = (x.height - a) / (-891 + 242 * -31 + 8395), d = {};
  return d.shiftX = s, d.shiftY = c, d.width = r, d.height = a, d;
}
function ex(x, o) {
  const { shiftX: t, shiftY: e } = o, n = {};
  return n.x = x.x + t, n.y = x.y + e, n;
}
function Kl(x, o) {
  return { ...x, topLeft: ex(x.topLeft, o), topRight: ex(x.topRight, o), bottomRight: ex(x.bottomRight, o), bottomLeft: ex(x.bottomLeft, o) };
}
function Rl(x, o) {
  const t = xl(x), e = t / o.width, n = { ...x };
  return n.smallestEdge = e, n;
}
const cc = kn(null), tr = () => {
  const x = u0(cc);
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
  const a = er() ? wx.REAR : wx.FRONT;
  return {
    onPhotoTaken: e,
    cameraFacing: x ?? a,
    captureMode: o ?? qs.AUTO_CAPTURE,
    wasmDirectoryPath: r,
    licensePath: t,
    sessionToken: n,
    thresholds: {
      confidenceThreshold: (i == null ? void 0 : i.confidenceThreshold) ?? Nu,
      sharpnessThreshold: (i == null ? void 0 : i.sharpnessThreshold) ?? Xu,
      brightnessLowThreshold: (i == null ? void 0 : i.brightnessLowThreshold) ?? ju,
      brightnessHighThreshold: (i == null ? void 0 : i.brightnessHighThreshold) ?? Mu,
      hotspotsScoreThreshold: (i == null ? void 0 : i.hotspotsScoreThreshold) ?? _u,
      sizeSmallThreshold: (i == null ? void 0 : i.sizeSmallThreshold) ?? Yu,
      outOfBoundsThreshold: (i == null ? void 0 : i.outOfBoundsThreshold) ?? Fu
    }
  };
}, Vl = ({
  cameraOptions: x,
  children: o
}) => {
  const t = _e(() => Pl(x), [x]);
  return /* @__PURE__ */ O(cc.Provider, { value: t, children: o });
}, Tl = ({ cameraResolution: x, detectionDetails: o, isImageMirror: t }) => {
  const { thresholds: e } = tr(), { redfin: n } = Hn(), i = Ht(null);
  if (he(() => {
    if (!(i != null && i.current))
      return;
    i.current.width = x.width, i.current.height = x.height, ol(i.current);
    const C = Rx(x), b = sc(
      x,
      e.outOfBoundsThreshold,
      C
    ), A = oc(x);
    o.value && (Ol({
      canvas: i.current,
      polygon: o.value.processedImage.detection,
      color: "red"
    }), Vo(i.current, C, "lime"), Vo(i.current, b, "yellow"), Vo(i.current, A, "blue"));
  }, [x, o.value, e.outOfBoundsThreshold]), !o.value)
    return null;
  const {
    detectionTime: r,
    fps: a,
    processedImage: { detection: s, instructionCode: c, invalidValidators: d },
    resolution: g,
    samVersion: p
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
    "Component version": "6.2.1"
  };
  return p && (u["SAM version"] = p), d.length > 0 && (u["Invalid validators"] = d.join(", ")), /* @__PURE__ */ O(
    Ou,
    {
      ref: i,
      cameraResolution: x,
      detectionDetails: u,
      isImageMirror: t
    }
  );
};
function Dl(x) {
  return /* @__PURE__ */ O("rect", { fill: "#000", ...x, rx: "2%" });
}
function El(x) {
  const [o, t] = tt(!1), e = () => t((r) => !r), n = "" + o;
  X0(() => {
    function r() {
      if (!x.current) return;
      const d = new MutationObserver(() => {
        e();
      }), g = {};
      return g.childList = !0, g.subtree = !0, g.attributes = !0, d.observe(x.current, g), d;
    }
    function a() {
      var p;
      if (!((p = x.current) != null && p["parentElement"])) return;
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
const Ll = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function Nl({ cutOut: x, height: o, width: t }) {
  const e = Ht(null), { key: n } = El(e);
  return /* @__PURE__ */ O("div", { ref: e, style: Ll, children: /* @__PURE__ */ O("svg", { viewBox: `0 0 ${t} ${o}`, children: [
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
      cutOut: x || /* @__PURE__ */ O(Dl, { height: e, width: n, x: i, y: r }),
      height: o.height,
      width: o.width
    }
  );
}
function Fl({ cameraResolution: x, children: o, detectionDetails: t, shouldMirror: e }) {
  const { redfin: n, sunfish: i } = Hn(), { appState: r, freemiumOverlayState: a } = Zn(), s = a !== Ox.HIDDEN && n !== Ci.Higher && x, c = a === Ox.VISIBLE, d = x && i && r === Me.RUNNING;
  return /* @__PURE__ */ O(xt, { children: [
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
const Xl = (x, o) => {
  const t = {};
  t.detail = o, document.dispatchEvent(new CustomEvent(x, t));
}, Qx = class Qx {
  constructor() {
    D(this, "lastDetails", {});
    D(this, "delayedTime", 421 + 49 * -118 + 5361);
  }
  static getInstance() {
    return !this._instance && (this._instance = new Qx()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 1210 * 6 + 4177 * -1 + -3083;
  }
  isDetailChanged(o, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[o]) ? (this.lastDetails[o] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(o, t) {
    this.isDetailChanged(o, t) && Xl(o, t);
  }
  dispatchDelayedCustomEventOnChange(o, t, e) {
    const n = performance.now();
    n - this.delayedTime > e && (this.dispatchCustomEventOnChange(o, t), this.delayedTime = n);
  }
};
D(Qx, "_instance");
let fn = Qx;
const Kn = fn.getInstance(), gc = (x, o, t = al) => {
  const e = {};
  e.instructionCode = o;
  const n = e;
  Kn.dispatchDelayedCustomEventOnChange(x, n, t);
}, wa = (x, o) => {
  Kn.dispatchCustomEventOnChange(x, o);
}, jl = (x, o) => {
  Kn.dispatchCustomEventOnChange(x, o);
}, Ml = (x, o) => {
  const t = {};
  t.size = o;
  const e = t;
  Kn.dispatchCustomEventOnChange(x, e);
}, _l = (x, o, t) => {
  const e = o.confidence < t ? void 0 : o, n = {};
  n.detectedObject = e;
  const i = n;
  Kn.dispatchCustomEventOnChange(x, i);
}, Jl = (x, o) => {
  if (vl()) {
    const t = {};
    t.candidateSelectionImages = o;
    const e = t;
    fn.getInstance().dispatchCustomEventOnChange(x, e);
  }
}, Ul = (x, o) => {
  const { cameraResolution: t, shouldCameraMirror: e } = o;
  he(() => {
    if (!t) return;
    const n = {};
    n.cameraResolution = t, n.isMirroring = e, jl(x, n);
  }, [t, e, x]);
}, Ql = (x) => x === Zt.CONTROL ? !er() : !0, zl = (x, o) => {
  const { appState: t, handleAppStateChange: e, handleError: n, isCameraReady: i } = Zn(), [r, a] = tt(), s = _e(() => {
    const d = i && o && o.isStreaming && o.getCameraSettings().facingMode;
    return d ? r ?? d === "user" : r ?? Ql(x);
  }, [o, r, x, i]);
  he(() => {
    const d = () => {
      t !== Me.LOADING && e(Me.RUNNING);
    }, g = () => {
      a(r === void 0 ? !s : !r);
    }, p = async () => {
      if (o) {
        e(Me.LOADING);
        try {
          await o.switchCamera(), e(Me.RUNNING);
        } catch (C) {
          if (C instanceof Error) {
            n(xe.fromCameraError(C));
            return;
          }
        }
        a(void 0);
      }
    }, u = (C) => {
      var b;
      switch ((b = C.detail) == null ? void 0 : b["instruction"]) {
        case Ho.CONTINUE_DETECTION:
          d();
          break;
        case Ho.TOGGLE_MIRROR:
          g();
          break;
        case Ho.SWITCH_CAMERA:
          p();
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
async function dc() {
  return navigator.mediaDevices.enumerateDevices();
}
async function To() {
  return (await dc()).filter((o) => o.kind === "videoinput");
}
function Do(x) {
  x.getTracks().forEach((t) => t.stop());
}
function Sa(x) {
  return x.getVideoTracks()[981 + -739 * 5 + -2714 * -1];
}
const px = {};
px.width = 1920, px.height = 1080, px.facingMode = wx.FRONT;
const ql = px;
var st;
class uc {
  constructor({ defaultVideoConstrains: o = ql, minCameraShorterSide: t = Ju } = {}) {
    D(this, "options");
    D(this, "availableCameraProperties", []);
    ce(this, st, null);
    const e = {};
    e.defaultVideoConstrains = o, e.minCameraShorterSide = t, this.options = e;
  }
  get mediaStream() {
    return N(this, st);
  }
  get videoTrack() {
    return N(this, st) ? Sa(N(this, st)) : void (-6660 + 37 * 180);
  }
  get isCameraActive() {
    var o;
    return !!((o = N(this, st)) != null && o.active);
  }
  static async requestPermission() {
    const o = {};
    o.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(o);
    Do(t);
  }
  async open(o = {}) {
    va() && await hi(-5554 + -151 * 63 + -1 * -15517), ae(this, st, await navigator.mediaDevices.getUserMedia(o)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const o = await To();
    if (o.length <= -6876 + 35 * -218 + 14507) return;
    const t = this.videoTrack.getConstraints(), e = this.videoTrack.getSettings(), n = o.findIndex((a) => a.deviceId === e.deviceId), i = o[n + (6231 + -830 * -1 + -7060)] ?? o[11828 + -5914 * 2], r = this.getConstraints(t, i);
    this.close(), await this.open(r);
  }
  close() {
    N(this, st) && (Do(N(this, st)), ae(this, st, null));
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
    const o = this.getSettings(), t = await dc(), e = t.find((n) => n.deviceId === o.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(o) {
    return o === wx.FRONT ? void (12494 + 1 * -12494) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return er() ? (await To()).find((e) => e.label.includes("back") && e.label.includes("0")) : void (8164 * 1 + 609 + -8773);
  }
  async collectAvailableCamerasInfo() {
    const o = await To();
    for (const t of o) {
      va() && await hi(131 * -9 + 2191 + -562);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const n = {};
        n.video = e;
        const i = await navigator.mediaDevices.getUserMedia(n), r = Sa(i);
        if (!r) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const a = r.getSettings(), s = { ...a };
        s.deviceName = r.label;
        const c = {};
        c.cameraProperties = s;
        const d = c;
        this.availableCameraProperties.push(d), Do(i);
      } catch (e) {
        e instanceof Error && xe.logError(e);
      }
    }
  }
  getConstraints(o, t) {
    const e = { ...this.options.defaultVideoConstrains, ...o };
    e.deviceId = t ? { exact: t.deviceId } : void (9091 * -1 + 4 * -2248 + 169 * 107);
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
st = new WeakMap();
class $l {
  constructor(o, t) {
    this.videoHandler = o, this.cameraHandler = t;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async startVideoStream(o = {}) {
    await uc.requestPermission(), await this.cameraHandler.collectAvailableCamerasInfo();
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
    return e.drawImage(this.videoHandler.videoElement, -4013 * -1 + -6796 + -23 * -121, 0), { image: t, timestamp: Date.now() };
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
var Bt;
class e1 {
  constructor(o) {
    ce(this, Bt);
    ae(this, Bt, o);
  }
  get videoElement() {
    return N(this, Bt);
  }
  async play(o) {
    N(this, Bt).srcObject = o, await N(this, Bt).play();
  }
  stop() {
    N(this, Bt).srcObject = null;
  }
  hasSrcObject() {
    return !!N(this, Bt).srcObject;
  }
}
Bt = new WeakMap();
function t1(x) {
  const o = Ht(null), t = Ht(), { handleError: e, setIsCameraReady: n } = Zn(), [i, r] = tt(), a = Kt((c) => {
    r((d) => Wl(c, d));
  }, []);
  he(() => ((async () => {
    if (!o.current) {
      e(new xe("Something went wrong during video initialization"));
      return;
    }
    const d = new e1(o.current), g = new uc(), p = new $l(d, g);
    try {
      const u = {};
      u.facingMode = x, await p.startVideoStream(u);
    } catch (u) {
      if (u instanceof Error) {
        e(xe.fromCameraError(u));
        return;
      }
    }
    n(!0), a(p.getCameraResolution()), t.current = p;
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
      Ml(o, n.contentRect);
    });
    return t.observe(x.current), () => {
      t.disconnect();
    };
  }, [x, o]);
}
var x1 = Symbol.for("preact-signals");
function nr() {
  if (Z0 > 2479 * -3 + -3049 * -1 + 4389)
    Z0--;
  else {
    for (var x, o = !1; void (151 * 52 + 9087 + -16939) !== un; ) {
      var t = un;
      for (un = void (36 * -172 + 1 * -3712 + 2 * 4952), mi++; void (234 * 2 + -5559 * -1 + -6027) !== t; ) {
        var e = t.o;
        if (t.o = void (-132 * 32 + -650 + 4874), t.f &= -(6979 + 2 * -3183 + -610), !(-7104 + 1 * -5123 + 12235 & t.f) && fc(t)) try {
          t.c();
        } catch (n) {
          !o && (x = n, o = !(-3730 + 9 * -993 + -239 * -53));
        }
        t = e;
      }
    }
    if (mi = -9 * -393 + 4634 + -1 * 8171, Z0--, o) throw x;
  }
}
var ne = void (-7013 + 7013 * 1), un = void (-1 * 6833 + 1653 * -1 + 8486), Z0 = 2 * -2056 + 202 * 32 + -2352, mi = -11 * -505 + -2409 + 26 * -121, Px = -185 * 35 + 7 * 395 + 265 * 14;
function lc(x) {
  if (void (-769 * -9 + -3903 + -3018 * 1) !== ne) {
    var o = x.n;
    if (o === void 0 || o.t !== ne)
      return o = { i: 0, S: x, p: ne.s, n: void (8 * 353 + 9190 + 1 * -12014), t: ne, e: void 0, x: void (67 * -22 + 2535 + -1061), r: o }, void (-85 * -48 + 13 * -263 + 661 * -1) !== ne.s && (ne.s.n = o), ne.s = o, x.n = o, 2 * -4162 + 5234 + -1 * -3122 & ne.f && x.S(o), o;
    if (-(-8123 * 1 + -1 * -5352 + -84 * -33) === o.i)
      return o.i = 349 * -19 + 1 * 5398 + 1233, o.n !== void 0 && (o.n.p = o.p, void (-8870 + -3 * -1109 + -1 * -5543) !== o.p && (o.p.n = o.n), o.p = ne.s, o.n = void 0, ne.s.n = o, ne.s = o), o;
  }
}
function we(x) {
  this.v = x, this.i = 73 * 97 + 461 * 21 + -289 * 58, this.n = void (85 * 111 + 9814 + -19249), this.t = void (-3853 * -2 + 4523 * -1 + -3183);
}
we.prototype.brand = x1, we.prototype.h = function() {
  return !(4327 + -737 * -3 + -467 * 14);
}, we.prototype.S = function(x) {
  this.t !== x && void (-3164 * 2 + 620 * -2 + 7568) === x.e && (x.x = this.t, void (4854 + -29 * 323 + 4513 * 1) !== this.t && (this.t.e = x), this.t = x);
}, we.prototype.U = function(x) {
  if (void (32 * -140 + -1 * -6567 + -2087) !== this.t) {
    var o = x.e, t = x.x;
    void (-6570 + -1095 * -6) !== o && (o.x = t, x.e = void (-43 * -55 + 7692 + -10057)), void (103 * -38 + -1049 * -1 + 2865) !== t && (t.e = o, x.x = void (-8493 + 4765 * 2 + -1037)), x === this.t && (this.t = t);
  }
}, we.prototype.subscribe = function(x) {
  var o = this;
  return or(function() {
    var t = o.value, e = ne;
    ne = void (5639 * 1 + 4855 + -11 * 954);
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
  ne = void (9532 + -1 * 583 + -8949);
  try {
    return this.value;
  } finally {
    ne = x;
  }
}, Object.defineProperty(we.prototype, "value", { get: function() {
  var x = lc(this);
  return void (-16 * -89 + 1 * -2127 + -1 * -703) !== x && (x.i = this.i), this.v;
}, set: function(x) {
  if (x !== this.v) {
    if (mi > 1115 + 4 * -985 + 225 * 13) throw new Error("Cycle detected");
    this.v = x, this.i++, Px++, Z0++;
    try {
      for (var o = this.t; void (-4361 + 21 * -1 + 4382) !== o; o = o.x) o.t.N();
    } finally {
      nr();
    }
  }
} });
function Ic(x) {
  return new we(x);
}
function fc(x) {
  for (var o = x.s; void (-1 * 5 + 1 * 2237 + -2232) !== o; o = o.n) if (o.S.i !== o.i || !o.S.h() || o.S.i !== o.i) return !(661 * 11 + -9225 + 1954);
  return !(1 * 1544 + -93 + -1450);
}
function Cc(x) {
  for (var o = x.s; o !== void 0; o = o.n) {
    var t = o.S.n;
    if (void (-4848 + 303 * 16) !== t && (o.r = t), o.S.n = o, o.i = -(31 * -316 + -4614 + 14411), void (1 * 8994 + -4630 * -1 + 1703 * -8) === o.n) {
      x.s = o;
      break;
    }
  }
}
function pc(x) {
  for (var o = x.s, t = void (-1 * 9302 + 7512 + 1790); void (-2582 + 1 * -8203 + 10785) !== o; ) {
    var e = o.p;
    -(-2037 + -2 * -2435 + -2832) === o.i ? (o.S.U(o), void (-2 * 430 + 9734 + -9 * 986) !== e && (e.n = o.n), void (-5409 * 1 + -2840 + 8249) !== o.n && (o.n.p = e)) : t = o, o.S.n = o.r, void (3 * -1825 + -7189 + 12664) !== o.r && (o.r = void (-12 * 1 + -2898 + -1 * -2910)), o = e;
  }
  x.s = t;
}
function G0(x) {
  we.call(this, void (15 * -92 + -7203 + -2861 * -3)), this.x = x, this.s = void (-3 * -2081 + 1 * 2933 + -9176), this.g = Px - (4 * -1236 + -1 * -449 + 4496), this.f = -4235 + 27 * 157;
}
(G0.prototype = new we()).h = function() {
  if (this.f &= -(7706 * -1 + 2146 + 5563), 3143 + -8 * -295 + -5502 & this.f) return !(-3 * -777 + 6526 + 984 * -9);
  if (5317 + 61 * -57 + -1808 == (3171 * -1 + 1496 + 1711 & this.f)) return !(-5023 + -5023 * -1);
  if (this.f &= -(12325 + -160 * 77), this.g === Px) return !(9838 * -1 + 3 * 1277 + 6007);
  if (this.g = Px, this.f |= 7 * 707 + -7628 + 134 * 20, this.i > -792 * -11 + 6858 + -15570 && !fc(this)) return this.f &= -(3196 + -1597 * 2), !(-582 * 7 + -2 * -4557 + -1680 * 3);
  var x = ne;
  try {
    Cc(this), ne = this;
    var o = this.x();
    (905 * -1 + -8871 + -72 * -136 & this.f || this.v !== o || 3 * -2611 + -9782 + -13 * -1355 === this.i) && (this.v = o, this.f &= -(4 * -2116 + -3139 + 415 * 28), this.i++);
  } catch (t) {
    this.v = t, this.f |= 199 * 15 + -8556 + -37 * -151, this.i++;
  }
  return ne = x, pc(this), this.f &= -2, !0;
}, G0.prototype.S = function(x) {
  if (void (-1406 + -2194 * 2 + 5794) === this.t) {
    this.f |= -6726 + 941 * 9 + -1 * 1707;
    for (var o = this.s; void (2869 + -10 * -631 + -9179 * 1) !== o; o = o.n) o.S.S(o);
  }
  we.prototype.S.call(this, x);
}, G0.prototype.U = function(x) {
  if (void (40 * -42 + 4104 + -2424) !== this.t && (we.prototype.U.call(this, x), void (4593 * -2 + 4021 * 2 + 1144) === this.t)) {
    this.f &= -33;
    for (var o = this.s; void (1 * 8329 + -3507 * -1 + -11836) !== o; o = o.n) o.S.U(o);
  }
}, G0.prototype.N = function() {
  if (!(1 * 357 + 4528 + 257 * -19 & this.f)) {
    this.f |= -1266 + 313 * -14 + 5654;
    for (var x = this.t; void (141 * 5 + 9 * 1070 + -10335) !== x; x = x.x) x.t.N();
  }
}, Object.defineProperty(G0.prototype, "value", { get: function() {
  if (457 * 14 + 946 + 7343 * -1 & this.f) throw new Error("Cycle detected");
  var x = lc(this);
  if (this.h(), void (-8438 + 1 * 8438) !== x && (x.i = this.i), -2943 + 4 * 306 + -1 * -1735 & this.f) throw this.v;
  return this.v;
} });
function o1(x) {
  return new G0(x);
}
function hc(x) {
  var o = x.u;
  if (x.u = void (4910 + -1578 * -3 + -9644), typeof o == "function") {
    Z0++;
    var t = ne;
    ne = void (-2330 + 10 * 233);
    try {
      o();
    } catch (e) {
      throw x.f &= -(-3823 * -1 + 1391 + -5212), x.f |= -23 * -13 + 3070 + -1 * 3361, xr(x), e;
    } finally {
      ne = t, nr();
    }
  }
}
function xr(x) {
  for (var o = x.s; void (6851 + 6851 * -1) !== o; o = o.n) o.S.U(o);
  x.x = void 0, x.s = void (854 * 9 + 9295 + -16981 * 1), hc(x);
}
function i1(x) {
  if (ne !== this) throw new Error("Out-of-order effect");
  pc(this), ne = x, this.f &= -(-3079 * -1 + 226 * 35 + 1 * -10987), 6047 * -1 + 6812 + -757 * 1 & this.f && xr(this), nr();
}
function rn(x) {
  this.x = x, this.u = void (7373 + -1 * -1927 + -5 * 1860), this.s = void (4094 + 2531 * 3 + -31 * 377), this.o = void (-3 * 1817 + -773 + 6224), this.f = -5042 + 4773 * 1 + -301 * -1;
}
rn.prototype.c = function() {
  var x = this.S();
  try {
    if (1 * -7945 + -3088 + 1 * 11041 & this.f || void (-518 * 19 + 1631 * -2 + 13104) === this.x) return;
    var o = this.x();
    typeof o == "function" && (this.u = o);
  } finally {
    x();
  }
}, rn.prototype.S = function() {
  if (7 * 661 + 3994 * 1 + 1724 * -5 & this.f) throw new Error("Cycle detected");
  this.f |= -6704 + 6 * -1261 + 14271, this.f &= -(-122 * 42 + 5 * 1255 + -571 * 2), hc(this), Cc(this), Z0++;
  var x = ne;
  return ne = this, i1.bind(this, x);
}, rn.prototype.N = function() {
  !(-6634 + -7823 * -1 + 1187 * -1 & this.f) && (this.f |= -1567 * -5 + 4865 + -12698, this.o = un, un = this);
}, rn.prototype.d = function() {
  this.f |= -2542 + -771 * 2 + -682 * -6, 1 & this.f || xr(this);
};
function or(x) {
  var o = new rn(x);
  try {
    o.c();
  } catch (t) {
    throw o.d(), t;
  }
  return o.d.bind(o);
}
var Eo;
function O0(x, o) {
  Y[x] = o.bind(null, Y[x] || function() {
  });
}
function tx(x) {
  Eo && Eo(), Eo = x && x.S();
}
function mc(x) {
  var o = this, t = x.data, e = bc(t);
  e.value = t;
  var n = _e(function() {
    for (var i = o.__v; i = i.__; ) if (i.__c) {
      i.__c.__$f |= -2 * 3119 + 330 * -7 + -8552 * -1;
      break;
    }
    return o.__$u.c = function() {
      var r;
      !es(n.peek()) && 4 * 413 + -9173 + 7524 === ((r = o.base) == null ? void (-4 * 2198 + -2342 * 3 + 15818) : r.nodeType) ? o.base.data = n.peek() : (o.__$f |= -3852 + -3853 * -1, o.setState({}));
    }, o1(function() {
      var r = e.value.value;
      return 14055 + -4685 * 3 === r ? -2959 + -4 * 1123 + 7451 : !(-3076 + -4 * -769) === r ? "" : r || "";
    });
  }, []);
  return n.value;
}
mc.displayName = "_st";
var bi = {};
bi.configurable = !(3809 + -1 * -7244 + -7 * 1579), bi.value = void 0;
var Ai = {};
Ai.configurable = !0, Ai.value = mc;
var yi = {};
yi.configurable = !(-1833 + 2 * 2711 + 3589 * -1), yi.get = function() {
  var x = {};
  return x.data = this, x;
};
var Wi = {};
Wi.configurable = !(-1 * -2657 + -1 * 8915 + 6 * 1043), Wi.value = 1;
var en = {};
en.constructor = bi, en.type = Ai, en.props = yi, en.__b = Wi, Object.defineProperties(we.prototype, en), O0("__b", function(x, o) {
  if (typeof o.type == "string") {
    var t, e = o.props;
    for (var n in e) if (n !== "children") {
      var i = e[n];
      i instanceof we && (t || (o.__np = t = {}), t[n] = i, e[n] = i.peek());
    }
  }
  x(o);
}), O0("__r", function(x, o) {
  tx();
  var t, e = o.__c;
  e && (e.__$f &= -2, void (635 + -127 * 5) === (t = e.__$u) && (e.__$u = t = function(n) {
    var i;
    return or(function() {
      i = this;
    }), i.c = function() {
      e.__$f |= 1, e.setState({});
    }, i;
  }())), tx(t), x(o);
}), O0("__e", function(x, o, t, e) {
  tx(), x(o, t, e);
}), O0("diffed", function(x, o) {
  tx();
  var t;
  if (typeof o.type == "string" && (t = o.__e)) {
    var e = o.__np, n = o.props;
    if (e) {
      var i = t.U;
      if (i) for (var r in i) {
        var a = i[r];
        void (1 * -5494 + -8397 * -1 + -1 * 2903) !== a && !(r in e) && (a.d(), i[r] = void (-198 + -33 * -6));
      }
      else t.U = i = {};
      for (var s in e) {
        var c = i[s], d = e[s];
        void (1 * -6607 + 8460 + -17 * 109) === c ? (c = r1(t, s, d, n), i[s] = c) : c.o(d, n);
      }
    }
  }
  x(o);
});
function r1(x, o, t, e) {
  var n = o in x && x.ownerSVGElement === void 0, i = Ic(t);
  return { o: function(r, a) {
    i.value = r, e = a;
  }, d: or(function() {
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
        t.U = void (7 * 127 + -5026 + 4137);
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
      a && (r.__$u = void 0, a.d());
    }
  }
  x(o);
}), O0("__h", function(x, o, t, e) {
  (e < 1 * -9851 + -6209 + 16063 || 1 * 9322 + 4 * -2277 + -205 === e) && (o.__$f |= 17 * 437 + -989 * 6 + -1493), x(o, t, e);
}), et.prototype.shouldComponentUpdate = function(x, o) {
  var t = this.__$u;
  if (!(t && void (1 * 5791 + 5589 + -11380) !== t.s || -2248 + 8513 * 1 + -6261 & this.__$f)) return !(-140 + 35 * 4);
  if (2 * -1006 + 394 * 19 + -5471 * 1 & this.__$f) return !0;
  for (var e in o) return !0;
  for (var n in x) if (n !== "__source" && x[n] !== this.props[n]) return !(-2848 + 50 * -101 + -11 * -718);
  for (var i in this.props) if (!(i in x)) return !0;
  return !1;
};
function bc(x) {
  return _e(function() {
    return Ic(x);
  }, []);
}
const a1 = async () => WebAssembly.validate(new Uint8Array([5411 * 1 + -5921 * 1 + 510, 1 * 6614 + -4503 + -1007 * 2, 1988 + -1 * 1873, 131 * -39 + 7498 * 1 + 120 * -19, 884 + -5 * 1298 + 21 * 267, 80 * -37 + -5547 + 8507, 1291 * 5 + -8469 * -1 + -14924, 2671 + 9 * 1095 + -12526, -1193 * -6 + -159 * -48 + -14789 * 1, 7112 + 1 * -7107, 2076 + -26 * -97 + -4597, 1901 * 1 + 3042 + -4847, 0, -14318 + -43 * -333, -2037 + -14 * 149 + 193 * 22, -3 * -86 + -12 * -499 + -6243, 4686 + 11 * -523 + 1069, 1, -2 * -3125 + -1 * -674 + -12 * 577, -601 * 6 + 2 * -506 + 4 * 1157, 31 * 158 + 9913 * 1 + -14801, 9621 + 1469 * 3 + -14027, -1 * -9376 + -3757 + -5611, -951 * -5 + -6007 + 1 * 1252, 3381 + 12 * 758 + 428 * -29, 0, 5387 + 2 * -2567, -2788 + -2 * 2087 + 6977, 253, 15740 + -11 * 1422, 17355 + 1084 * -16]));
function s1() {
  const [x] = window.crypto.getRandomValues(new Uint32Array(1));
  return x.toString(11 * -227 + -6168 + 8681);
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
const vi = {};
vi.label = ">1m", vi.time = 60;
const wi = {};
wi.label = ">45", wi.time = 45;
const Si = {};
Si.label = ">30", Si.time = 30;
function d1(x, o = [vi, wi, Si]) {
  const t = o.sort((e, n) => n.time - e.time);
  for (const e of t)
    if (x > e.time) return e.label;
  return "" + x;
}
const u1 = (x) => Math.round(x / 500) * 500 / (-13975 + -14975 * -1), tn = (x) => x ? x <= -114 * 1 + -8471 + 8586 ? Math.round(x * 20) / (-47 * -4 + 1940 + -2108) : Math.round(x / (331 * 4 + 1 * 2884 + -4158)) * (-75 * -11 + 2577 + -3352) : 0, l1 = (x) => Math.round(x * (-9196 + -104 * -3 + -1 * -8886)) / (-263 * 2 + 403 + 125);
function I1(x) {
  return x !== Me.RUNNING ? Ox.VISIBLE : Ox.VISIBLE_WITH_MASK;
}
async function f1() {
  return await a1() ? ya.SIMD : ya.NO_SIMD;
}
var hn, zx;
class Ac {
  constructor(o) {
    ce(this, hn, !0);
    ce(this, zx, Date.now());
    D(this, "analytics");
    D(this, "samVersion");
    D(this, "sessionToken");
    D(this, "onDetectionCallback");
    D(this, "onCaptureCallback");
    D(this, "createProtoMessage");
    D(this, "fpsOfAllImages", new ac(-503 * 14 + -1676 * -4 + 368));
    D(this, "cameraService");
    D(this, "imageProcessor");
    this.cameraService = o.cameraService, this.imageProcessor = o.imageProcessor, this.analytics = o.analytics, this.samVersion = o.samVersion, this.sessionToken = o.sessionToken, this.createProtoMessage = o.createProtoMessage, this.onDetectionCallback = o.onDetectionCallback, this.onCaptureCallback = o.onCaptureCallback;
  }
  async run() {
    for (; N(this, hn); )
      await this.iterate();
    return this;
  }
  stop() {
    ae(this, hn, !1);
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
    const d = c, g = await this.createProtoMessage(r, d), p = {};
    p.detection = e, p.imageResolution = i;
    const u = {};
    u.image = r, u.data = p;
    const C = u;
    this.stop();
    const b = {};
    b.imageData = C, b.protoMessage = g, b.webMetadata = s, b.candidateSelectionImages = o, this.onCaptureCallback(b);
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
    await hi(Math.max(Wa.max - o, Wa.min));
  }
}
hn = new WeakMap(), zx = new WeakMap();
class C1 extends Ac {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: e, instructionCodeMap: n, ...i }) {
    super(i);
    D(this, "candidateSelectionTime", 1 * 233 + -12 * 472 + 5431);
    D(this, "candidatesSelectionFramesCount", 0);
    D(this, "isInCandidateSelection", !1);
    D(this, "lastImage", null);
    D(this, "bestImage", null);
    D(this, "candidateSelectionImages", []);
    D(this, "fallbackInstruction");
    D(this, "instructionCodeMap");
    D(this, "checkToInstructionCodeMap");
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
    this.candidateSelectionTime === -8323 + -11 * 681 + 2 * 7907 && (this.candidateSelectionTime = performance.now()), this.candidatesSelectionFramesCount++;
  }
  isCandidateSelectionDone() {
    const t = this.candidateSelectionTime && performance.now() - this.candidateSelectionTime;
    return this.candidatesSelectionFramesCount >= Ro.minFrames ? t > Ro.minDuration : t > Ro.maxDuration;
  }
  async onCandidateSelectionDone() {
    const { detection: t, image: e } = this.bestImage || {};
    if (e && t) this.trackCaptureProcess(t, e), await this.onCapture({ canvasImage: e, detection: t, candidateSelectionImages: this.candidateSelectionImages }), this.imageProcessor.reset();
    else throw new xe("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: t, takenPhoto: e }) {
    const n = this.getDetectionEndTime(e.timestamp), i = $i((2612 + 1612 * -1) / n);
    this.fpsOfAllImages.pushFixed(i);
    const r = {};
    r.width = e.image.width, r.height = e.image.height;
    const a = r, s = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), c = {};
    c.isNewDetectionValid = t.isValid, c.newInvalidInstruction = s[-14461 + 1 * 14461];
    const d = this.getInstructionCode(c), g = {};
    g.detection = t.detection, g.instructionCode = d, g.invalidValidators = s, g.isInCandidateSelection = this.isInCandidateSelection;
    const p = {};
    return p.processedImage = g, p.detectionTime = n, p.fps = i, p.resolution = a, p;
  }
  getInstructionCode({ isNewDetectionValid: t, newInvalidInstruction: e }) {
    var n;
    return this.isInCandidateSelection ? this.instructionCodeMap.CANDIDATE_SELECTION : (n = this.lastImage) != null && n.isValid && t ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && t ? this.lastImage.instructionCode : e ?? this.fallbackInstruction;
  }
  isNewImageBetter(t, e) {
    return e.sharpness > t.sharpness;
  }
}
var Nt, n0;
class p1 extends Ac {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: e, ...n }) {
    super(n);
    ce(this, Nt, void (-3832 + -17 * 219 + 7555));
    ce(this, n0);
    D(this, "fallbackInstruction");
    D(this, "checkToInstructionCodeMap");
    this.fallbackInstruction = e, this.checkToInstructionCodeMap = t, this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(t) {
    var e, n;
    return (e = t.detail) != null && e["instruction"] ? Object.values(Ko).includes((n = t.detail) == null ? void 0 : n["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    ae(this, n0, (t) => {
      var e;
      this.isRequestCaptureEventValid(t) && ae(this, Nt, (e = t.detail) == null ? void 0 : e["instruction"]);
    }), document.addEventListener(Aa.REQUEST_CAPTURE, N(this, n0));
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
    return N(this, Nt) ? N(this, Nt) === Ko.FIRST_FRAME ? !0 : N(this, Nt) === Ko.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
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
    n.canvasImage = t, n.detection = e, n.candidateSelectionImages = [], await this.onCapture(n), ae(this, Nt, void (-3820 + -843 * -3 + 1291 * 1)), this.imageProcessor.reset();
  }
  getDetectionDetails(t, e) {
    const n = this.getDetectionEndTime(t.timestamp), i = $i((7462 + -238 * 19 + -1940) / n);
    this.fpsOfAllImages.pushFixed(i);
    const r = {};
    r.width = t.image.width, r.height = t.image.height;
    const a = r, s = this.getInvalidInstructions(e.validationResult, this.checkToInstructionCodeMap), c = this.getInstructionCode(s[0]), d = {};
    d.detection = e.detection, d.instructionCode = c, d.invalidValidators = s, d.isInCandidateSelection = !1;
    const g = {};
    return g.processedImage = d, g.detectionTime = n, g.fps = i, g.resolution = a, g;
  }
  getInstructionCode(t) {
    return t ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), N(this, n0) && document.removeEventListener(Aa.REQUEST_CAPTURE, N(this, n0));
  }
}
Nt = new WeakMap(), n0 = new WeakMap();
function h1({ captureMode: x, ...o }) {
  return x === qs.AUTO_CAPTURE ? new C1(o) : new p1(o);
}
function m1({ cameraResolution: x, cameraService: o, customEvent: t }) {
  const { shouldCameraMirror: e } = zl(t.CONTROL, o), n = {};
  n.cameraResolution = x, n.shouldCameraMirror = e, Ul(t.CAMERA_PROPS_CHANGED, n), he(() => () => {
    fn.getInstance().restart();
  }, []);
  const i = {};
  return i.shouldCameraMirror = e, i;
}
function b1({ cameraFacing: x, captureMode: o, checkToInstructionCodeMap: t, controller: e, createProtoMessage: n, customEvent: i, fallbackInstruction: r, instructionCodeMap: a, onCapture: s, onDetection: c, sessionToken: d }) {
  const { appState: g, handleAppStateChange: p } = Zn(), { sunfish: u } = Hn(), { analytics: C } = Zu(), { cameraResolution: b, cameraService: A, onCameraResolutionChange: l, videoRef: v } = t1(x), R = {};
  R.cameraResolution = b, R.cameraService = A, R.customEvent = i;
  const { shouldCameraMirror: j } = m1(R), M = bc(void (76 * -33 + -1 * -2463 + -3 * -15)), J = Kt((U) => {
    p(Me.WAITING), s(U);
  }, [s, p]), H = Kt((U, ee) => {
    l(U.resolution), M.value = U, c(U, ee);
  }, [c, M, l]);
  he(() => {
    A != null && A["isStreaming"] && (e != null && e["isDetectorInitialized"]) && u && p(Me.RUNNING);
  }, [A == null ? void 0 : A["isStreaming"], e == null ? void 0 : e["isDetectorInitialized"], p, u]), he(() => {
    if (g !== Me.RUNNING) return;
    if (!A || !e) throw new xe("Cannot start detection");
    const U = {};
    U.captureMode = o, U.analytics = C, U.cameraService = A, U.imageProcessor = e.imageProcessor, U.fallbackInstruction = r, U.instructionCodeMap = a, U.checkToInstructionCodeMap = t, U.sessionToken = d, U.samVersion = e.samVersion, U.createProtoMessage = n, U.onCaptureCallback = J, U.onDetectionCallback = H;
    const ee = h1(U);
    return e.runDetectionLoop(ee), () => {
      e.stopDetectionLoop();
    };
  }, [g, e, A, J, H, d, M, C, n, a, t, r, o]);
  const oe = {};
  return oe.videoRef = v, oe.cameraResolution = b, oe.detectionDetails = M, oe.shouldCameraMirror = j, oe;
}
var Qt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, yc = {}, Ba = {}, A1 = y1;
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
var Wc = {};
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
    for (var c = null, d = [], g = 0, p = 0, u; a < s; ) {
      var C = r[a++];
      switch (p) {
        case 0:
          d[g++] = t[C >> 2], u = (C & 3) << 4, p = 1;
          break;
        case 1:
          d[g++] = t[u | C >> 4], u = (C & 15) << 2, p = 2;
          break;
        case 2:
          d[g++] = t[u | C >> 6], d[g++] = t[C & 63], p = 0;
          break;
      }
      g > 8191 && ((c || (c = [])).push(String.fromCharCode.apply(String, d)), g = 0);
    }
    return p && (d[g++] = t[u], d[g++] = 61, p === 1 && (d[g++] = 61)), c ? (g && c.push(String.fromCharCode.apply(String, d.slice(0, g))), c.join("")) : String.fromCharCode.apply(String, d.slice(0, g));
  };
  var i = "invalid encoding";
  o.decode = function(r, a, s) {
    for (var c = s, d = 0, g, p = 0; p < r.length; ) {
      var u = r.charCodeAt(p++);
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
})(Wc);
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
var v1 = Ga(Ga);
function Ga(x) {
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
    x.writeFloatLE = o.bind(null, ka), x.writeFloatBE = o.bind(null, Oa);
    function t(e, n, i) {
      var r = e(n, i), a = (r >> 31) * 2 + 1, s = r >>> 23 & 255, c = r & 8388607;
      return s === 255 ? c ? NaN : a * (1 / 0) : s === 0 ? a * 1401298464324817e-60 * c : a * Math.pow(2, s - 150) * (c + 8388608);
    }
    x.readFloatLE = t.bind(null, Za), x.readFloatBE = t.bind(null, Ha);
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
    x.writeDoubleLE = o.bind(null, ka, 0, 4), x.writeDoubleBE = o.bind(null, Oa, 4, 0);
    function t(e, n, i, r, a) {
      var s = e(r, a + n), c = e(r, a + i), d = (c >> 31) * 2 + 1, g = c >>> 20 & 2047, p = 4294967296 * (c & 1048575) + s;
      return g === 2047 ? p ? NaN : d * (1 / 0) : g === 0 ? d * 5e-324 * p : d * Math.pow(2, g - 1075) * (p + 4503599627370496);
    }
    x.readDoubleLE = t.bind(null, Za, 0, 4), x.readDoubleBE = t.bind(null, Ha, 4, 0);
  }(), x;
}
function ka(x, o, t) {
  o[t] = x & 255, o[t + 1] = x >>> 8 & 255, o[t + 2] = x >>> 16 & 255, o[t + 3] = x >>> 24;
}
function Oa(x, o, t) {
  o[t] = x >>> 24, o[t + 1] = x >>> 16 & 255, o[t + 2] = x >>> 8 & 255, o[t + 3] = x & 255;
}
function Za(x, o) {
  return (x[o] | x[o + 1] << 8 | x[o + 2] << 16 | x[o + 3] << 24) >>> 0;
}
function Ha(x, o) {
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
var vc = {};
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
})(vc);
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
var Lo, Ra;
function k1() {
  if (Ra)
    return Lo;
  Ra = 1, Lo = o;
  var x = l0();
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
  }, Lo;
}
var Pa;
function l0() {
  return Pa || (Pa = 1, function(x) {
    var o = x;
    o.asPromise = A1, o.base64 = Wc, o.EventEmitter = W1, o.float = v1, o.inquire = w1, o.utf8 = vc, o.pool = B1, o.LongBits = k1(), o.isNode = !!(typeof Qt < "u" && Qt && Qt.process && Qt.process.versions && Qt.process.versions.node), o.global = o.isNode && Qt || typeof window < "u" && window || typeof self < "u" && self || Qt, o.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  }(Ba)), Ba;
}
var wc = Q, nt = l0(), Bi, go = nt.LongBits, Va = nt.base64, Ta = nt.utf8;
function Rn(x, o, t) {
  this.fn = x, this.len = o, this.next = void 0, this.val = t;
}
function ir() {
}
function O1(x) {
  this.head = x.head, this.tail = x.tail, this.len = x.len, this.next = x.states;
}
function Q() {
  this.len = 0, this.head = new Rn(ir, 0, 0), this.tail = this.head, this.states = null;
}
var Sc = function() {
  return nt.Buffer ? function() {
    return (Q.create = function() {
      return new Bi();
    })();
  } : function() {
    return new Q();
  };
};
Q.create = Sc();
Q.alloc = function(x) {
  return new nt.Array(x);
};
nt.Array !== Array && (Q.alloc = nt.pool(Q.alloc, nt.Array.prototype.subarray));
Q.prototype._push = function(x, o, t) {
  return this.tail = this.tail.next = new Rn(x, o, t), this.len += o, this;
};
function rr(x, o, t) {
  o[t] = x & 255;
}
function Z1(x, o, t) {
  for (; x > 127; )
    o[t++] = x & 127 | 128, x >>>= 7;
  o[t] = x;
}
function ar(x, o) {
  this.len = x, this.next = void 0, this.val = o;
}
ar.prototype = Object.create(Rn.prototype);
ar.prototype.fn = Z1;
Q.prototype.uint32 = function(x) {
  return this.len += (this.tail = this.tail.next = new ar(
    (x = x >>> 0) < 128 ? 1 : x < 16384 ? 2 : x < 2097152 ? 3 : x < 268435456 ? 4 : 5,
    x
  )).len, this;
};
Q.prototype.int32 = function(x) {
  return x < 0 ? this._push(sr, 10, go.fromNumber(x)) : this.uint32(x);
};
Q.prototype.sint32 = function(x) {
  return this.uint32((x << 1 ^ x >> 31) >>> 0);
};
function sr(x, o, t) {
  for (; x.hi; )
    o[t++] = x.lo & 127 | 128, x.lo = (x.lo >>> 7 | x.hi << 25) >>> 0, x.hi >>>= 7;
  for (; x.lo > 127; )
    o[t++] = x.lo & 127 | 128, x.lo = x.lo >>> 7;
  o[t++] = x.lo;
}
Q.prototype.uint64 = function(x) {
  var o = go.from(x);
  return this._push(sr, o.length(), o);
};
Q.prototype.int64 = Q.prototype.uint64;
Q.prototype.sint64 = function(x) {
  var o = go.from(x).zzEncode();
  return this._push(sr, o.length(), o);
};
Q.prototype.bool = function(x) {
  return this._push(rr, 1, x ? 1 : 0);
};
function Gi(x, o, t) {
  o[t] = x & 255, o[t + 1] = x >>> 8 & 255, o[t + 2] = x >>> 16 & 255, o[t + 3] = x >>> 24;
}
Q.prototype.fixed32 = function(x) {
  return this._push(Gi, 4, x >>> 0);
};
Q.prototype.sfixed32 = Q.prototype.fixed32;
Q.prototype.fixed64 = function(x) {
  var o = go.from(x);
  return this._push(Gi, 4, o.lo)._push(Gi, 4, o.hi);
};
Q.prototype.sfixed64 = Q.prototype.fixed64;
Q.prototype.float = function(x) {
  return this._push(nt.float.writeFloatLE, 4, x);
};
Q.prototype.double = function(x) {
  return this._push(nt.float.writeDoubleLE, 8, x);
};
var H1 = nt.Array.prototype.set ? function(x, o, t) {
  o.set(x, t);
} : function(x, o, t) {
  for (var e = 0; e < x.length; ++e)
    o[t + e] = x[e];
};
Q.prototype.bytes = function(x) {
  var o = x.length >>> 0;
  if (!o)
    return this._push(rr, 1, 0);
  if (nt.isString(x)) {
    var t = Q.alloc(o = Va.length(x));
    Va.decode(x, t, 0), x = t;
  }
  return this.uint32(o)._push(H1, o, x);
};
Q.prototype.string = function(x) {
  var o = Ta.length(x);
  return o ? this.uint32(o)._push(Ta.write, o, x) : this._push(rr, 1, 0);
};
Q.prototype.fork = function() {
  return this.states = new O1(this), this.head = this.tail = new Rn(ir, 0, 0), this.len = 0, this;
};
Q.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Rn(ir, 0, 0), this.len = 0), this;
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
  Bi = x, Q.create = Sc(), Bi._configure();
};
var K1 = ht, Bc = wc;
(ht.prototype = Object.create(Bc.prototype)).constructor = ht;
var Yt = l0();
function ht() {
  Bc.call(this);
}
ht._configure = function() {
  ht.alloc = Yt._Buffer_allocUnsafe, ht.writeBytesBuffer = Yt.Buffer && Yt.Buffer.prototype instanceof Uint8Array && Yt.Buffer.prototype.set.name === "set" ? function(x, o, t) {
    o.set(x, t);
  } : function(x, o, t) {
    if (x.copy)
      x.copy(o, t, 0, x.length);
    else
      for (var e = 0; e < x.length; )
        o[t++] = x[e++];
  };
};
ht.prototype.bytes = function(x) {
  Yt.isString(x) && (x = Yt._Buffer_from(x, "base64"));
  var o = x.length >>> 0;
  return this.uint32(o), o && this._push(ht.writeBytesBuffer, o, x), this;
};
function R1(x, o, t) {
  x.length < 40 ? Yt.utf8.write(x, o, t) : o.utf8Write ? o.utf8Write(x, t) : o.write(x, t);
}
ht.prototype.string = function(x) {
  var o = Yt.Buffer.byteLength(x);
  return this.uint32(o), o && this._push(R1, o, x), this;
};
ht._configure();
var Gc = ue, mt = l0(), ki, kc = mt.LongBits, P1 = mt.utf8;
function gt(x, o) {
  return RangeError("index out of range: " + x.pos + " + " + (o || 1) + " > " + x.len);
}
function ue(x) {
  this.buf = x, this.pos = 0, this.len = x.length;
}
var Da = typeof Uint8Array < "u" ? function(x) {
  if (x instanceof Uint8Array || Array.isArray(x))
    return new ue(x);
  throw Error("illegal buffer");
} : function(x) {
  if (Array.isArray(x))
    return new ue(x);
  throw Error("illegal buffer");
}, Oc = function() {
  return mt.Buffer ? function(x) {
    return (ue.create = function(o) {
      return mt.Buffer.isBuffer(o) ? new ki(o) : Da(o);
    })(x);
  } : Da;
};
ue.create = Oc();
ue.prototype._slice = mt.Array.prototype.subarray || /* istanbul ignore next */
mt.Array.prototype.slice;
ue.prototype.uint32 = /* @__PURE__ */ function() {
  var x = 4294967295;
  return function() {
    if (x = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (x = (x | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return x;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, gt(this, 10);
    return x;
  };
}();
ue.prototype.int32 = function() {
  return this.uint32() | 0;
};
ue.prototype.sint32 = function() {
  var x = this.uint32();
  return x >>> 1 ^ -(x & 1) | 0;
};
function No() {
  var x = new kc(0, 0), o = 0;
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
        throw gt(this);
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
        throw gt(this);
      if (x.hi = (x.hi | (this.buf[this.pos] & 127) << o * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return x;
    }
  throw Error("invalid varint encoding");
}
ue.prototype.bool = function() {
  return this.uint32() !== 0;
};
function Vx(x, o) {
  return (x[o - 4] | x[o - 3] << 8 | x[o - 2] << 16 | x[o - 1] << 24) >>> 0;
}
ue.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw gt(this, 4);
  return Vx(this.buf, this.pos += 4);
};
ue.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw gt(this, 4);
  return Vx(this.buf, this.pos += 4) | 0;
};
function Ea() {
  if (this.pos + 8 > this.len)
    throw gt(this, 8);
  return new kc(Vx(this.buf, this.pos += 4), Vx(this.buf, this.pos += 4));
}
ue.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw gt(this, 4);
  var x = mt.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, x;
};
ue.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw gt(this, 4);
  var x = mt.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, x;
};
ue.prototype.bytes = function() {
  var x = this.uint32(), o = this.pos, t = this.pos + x;
  if (t > this.len)
    throw gt(this, x);
  return this.pos += x, Array.isArray(this.buf) ? this.buf.slice(o, t) : o === t ? new this.buf.constructor(0) : this._slice.call(this.buf, o, t);
};
ue.prototype.string = function() {
  var x = this.bytes();
  return P1.read(x, 0, x.length);
};
ue.prototype.skip = function(x) {
  if (typeof x == "number") {
    if (this.pos + x > this.len)
      throw gt(this, x);
    this.pos += x;
  } else
    do
      if (this.pos >= this.len)
        throw gt(this);
    while (this.buf[this.pos++] & 128);
  return this;
};
ue.prototype.skipType = function(x) {
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
ue._configure = function(x) {
  ki = x, ue.create = Oc(), ki._configure();
  var o = mt.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  mt.merge(ue.prototype, {
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
      return Ea.call(this)[o](!0);
    },
    sfixed64: function() {
      return Ea.call(this)[o](!1);
    }
  });
};
var V1 = d0, Zc = Gc;
(d0.prototype = Object.create(Zc.prototype)).constructor = d0;
var La = l0();
function d0(x) {
  Zc.call(this, x);
}
d0._configure = function() {
  La.Buffer && (d0.prototype._slice = La.Buffer.prototype.slice);
};
d0.prototype.string = function() {
  var x = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + x, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + x, this.len));
};
d0._configure();
var Hc = {}, T1 = Cn, cr = l0();
(Cn.prototype = Object.create(cr.EventEmitter.prototype)).constructor = Cn;
function Cn(x, o, t) {
  if (typeof x != "function")
    throw TypeError("rpcImpl must be a function");
  cr.EventEmitter.call(this), this.rpcImpl = x, this.requestDelimited = !!o, this.responseDelimited = !!t;
}
Cn.prototype.rpcCall = function x(o, t, e, n, i) {
  if (!n)
    throw TypeError("request must be specified");
  var r = this;
  if (!i)
    return cr.asPromise(x, r, o, t, e, n);
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
Cn.prototype.end = function(x) {
  return this.rpcImpl && (x || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(x) {
  var o = x;
  o.Service = T1;
})(Hc);
var D1 = {};
(function(x) {
  var o = x;
  o.build = "minimal", o.Writer = wc, o.BufferWriter = K1, o.Reader = Gc, o.BufferReader = V1, o.util = l0(), o.rpc = Hc, o.roots = D1, o.configure = t;
  function t() {
    o.util._configure(), o.Writer._configure(o.BufferWriter), o.Reader._configure(o.BufferReader);
  }
  t();
})(yc);
var te = yc;
const B = te.Reader, ge = te.Writer, W = te.util, h = te.roots.default || (te.roots.default = {}), Y0 = h.dot = (() => {
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
      return e || (e = ge.create()), t.token != null && Object.hasOwnProperty.call(t, "token") && e.uint32(
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
        if (n || (n = ge.create()), e.images != null && e.images.length)
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
        return i || (i = ge.create()), n.platform != null && Object.hasOwnProperty.call(n, "platform") && i.uint32(
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
        if (i || (i = ge.create()), n.supportedAbis != null && n.supportedAbis.length)
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
                let p = n.uint32();
                switch (p >>> 3) {
                  case 1:
                    s = n.string();
                    break;
                  case 2:
                    c = h.dot.Int32List.decode(n, n.uint32());
                    break;
                  default:
                    n.skipType(p & 7);
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
        if (n || (n = ge.create()), e.cameraModelId != null && Object.hasOwnProperty.call(e, "cameraModelId") && n.uint32(
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
        if (n || (n = ge.create()), e.currentCameraProperties != null && Object.hasOwnProperty.call(e, "currentCameraProperties") && h.dot.v4.MediaTrackSettings.encode(e.currentCameraProperties, n.uint32(
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
        return n || (n = ge.create()), e.imageHash != null && Object.hasOwnProperty.call(e, "imageHash") && n.uint32(
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
        return i || (i = ge.create()), n.aspectRatio != null && Object.hasOwnProperty.call(n, "aspectRatio") && i.uint32(
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
        return n || (n = ge.create()), e.width != null && Object.hasOwnProperty.call(e, "width") && n.uint32(
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
        return i || (i = ge.create()), n.cameraInitFrameResolution != null && Object.hasOwnProperty.call(n, "cameraInitFrameResolution") && h.dot.v4.ImageBitmap.encode(n.cameraInitFrameResolution, i.uint32(
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
        return n || (n = ge.create()), e.brightness != null && Object.hasOwnProperty.call(e, "brightness") && n.uint32(
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
        return n || (n = ge.create()), e.x != null && Object.hasOwnProperty.call(e, "x") && n.uint32(
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
        return n || (n = ge.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && h.dot.Image.encode(e.image, n.uint32(
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
        return n || (n = ge.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && h.dot.Image.encode(e.image, n.uint32(
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
        return i || (i = ge.create()), n.documentContent != null && Object.hasOwnProperty.call(n, "documentContent") && h.dot.v4.DocumentContent.encode(n.documentContent, i.uint32(
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
        if (n || (n = ge.create()), e.segments != null && e.segments.length)
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
        return n || (n = ge.create()), e.corner != null && Object.hasOwnProperty.call(e, "corner") && n.uint32(
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
        return n || (n = ge.create()), e.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(e, "neutralExpressionFaceImage") && h.dot.Image.encode(e.neutralExpressionFaceImage, n.uint32(
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
        return n || (n = ge.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && h.dot.Image.encode(e.image, n.uint32(
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
      return e || (e = ge.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
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
      if (e || (e = ge.create()), t.items != null && t.items.length) {
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
      return e || (e = ge.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && e.uint32(
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
  function t(s, c, d, g, p) {
    return de(c - 813, s);
  }
  function e(s, c, d, g, p) {
    return de(p - 382, s);
  }
  function n(s, c, d, g, p) {
    return de(c - 103, p);
  }
  const i = x();
  function r(s, c, d, g, p) {
    return de(c - 392, g);
  }
  function a(s, c, d, g, p) {
    return de(c - -517, s);
  }
  for (; ; )
    try {
      if (parseInt(a("&j)q", -279, -283, -268, -277)) / 1 * (parseInt(t("wV6T", 1060, 1065, 1081, 1076)) / 2) + -parseInt(t("3#0b", 1084, 1093, 1085, 1079)) / 3 + -parseInt(t("NHZS", 1083, 1066, 1072, 1088)) / 4 * (-parseInt(t("gfgu", 1065, 1049, 1052, 1050)) / 5) + parseInt(r(659, 671, 691, "epr&", 674)) / 6 + parseInt(e("s)pg", 643, 651, 634, 636)) / 7 + -parseInt(n(368, 347, 331, 328, "L&EB")) / 8 + -parseInt(t("VCG%", 1052, 1035, 1055, 1036)) / 9 * (-parseInt(r(670, 660, 653, "Va7T", 646)) / 10) === o) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Tx, -1357 * -337 + -184904 + -20633);
async function E1() {
  function x(d, g, p, u, C) {
    return de(C - -7, d);
  }
  const o = {};
  o[e(-188, -198, -182, -217, "4gw0")] = tc;
  function t(d, g, p, u, C) {
    return de(p - -90, C);
  }
  o[e(-198, -181, -167, -162, "0#CW") + "h"] = 256;
  function e(d, g, p, u, C) {
    return de(g - -440, C);
  }
  const n = await window[t(163, 168, 175, 196, "dE4b") + "o"][e(-190, -177, -180, -162, "GE)9") + "e"][x("4gw0", 247, 224, 262, 244) + e(-140, -158, -167, -168, "8(la") + "y"](o, !0, [x("NHZS", 251, 263, 256, 268) + "pt", x("YbK&", 230, 251, 259, 250) + "pt"]), i = Uint8Array[e(-163, -176, -185, -192, "aNQd")](Array(-3 * -393 + -3 * -2735 + 8 * -1171)[s("GPZY", -710, -689)](887 * -4 + 2018 + 85 * 18)), r = window[s("Of^[", -676, -658) + "o"][x("aNQd", 290, 290, 270, 271) + t(181, 157, 171, 150, "0#CW") + x("Ef@t", 258, 255, 236, 236)](i);
  function a(d, g, p, u, C) {
    return de(u - 421, g);
  }
  function s(d, g, p, u, C) {
    return de(p - -930, d);
  }
  const c = {};
  return c[a(707, "gRZB", 710, 698)] = n, c.iv = r, c;
}
function de(x, o) {
  const t = Tx();
  return de = function(e, n) {
    e = e - (-4043 * -2 + 9621 * 1 + -1 * 17470);
    let i = t[e];
    if (de.qJoRDu === void 0) {
      var r = function(g) {
        const p = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", C = "";
        for (let b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = p.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          C += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const d = function(g, p) {
        let u = [], C = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          C = (C + u[l] + p.charCodeAt(l % p.length)) % 256, b = u[l], u[l] = u[C], u[C] = b;
        l = 0, C = 0;
        for (let v = 0; v < g.length; v++)
          l = (l + 1) % 256, C = (C + u[l]) % 256, b = u[l], u[l] = u[C], u[C] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[C]) % 256]);
        return A;
      };
      de.yQuwCO = d, x = arguments, de.qJoRDu = !0;
    }
    const a = t[-2 * -787 + 241 * 32 + -9286], s = e + a, c = x[s];
    return c ? i = c : (de.biUSWi === void 0 && (de.biUSWi = !0), i = de.yQuwCO(i, n), x[s] = i), i;
  }, de(x, o);
}
function Tx() {
  const x = ["n2P2ixxcSSktDSojWO1vW4hcOq", "lx7dU8oktCkVWPxdKmo/WOdcSwNcIa", "WOj0bCkXqW", "WOfGzmobeq", "W7RcKsldSmojW4VdLGTk", "WPtdS0RcQ8k0zfVcSSkaWQBdKSoi", "mCoRbmoFWR/cTSo9hCkg", "W53dN20OWP1plttdTmkXdCoRWO8", "sZVcUhm", "W5idWOL0", "wgKnW4KP", "iSoXB8ohW4pcJSo4W6jpf8kWdea", "W57cLhdcIea", "mX4yEJxdLSoU", "ymopWQfJWRtcKmk3", "WPtdHmoxshG", "AZO8zYa", "WPZdVK/cQSk+BfJcQ8k7WRddK8of", "W5ShWOP0WOy", "t8kVnmkKEmkFWOS", "W4u8W7hdGSoW", "W545qmoUaHXOW5aAWOqSjW", "W6ZdQZyYja", "WO9XWQpcGmkKwsWEWRtcVSkEW6S", "dSkkbwWj", "W4WbWRHnbmkrfKNcVehcJwO", "WRGsWQjUlq", "imoIWQi", "WROtWQnKdW", "WRuVWR4TW78", "y8koW5e4eW", "W5a7W7ZdMW", "W58sWOlcUmoM", "WQxdG3RdHq", "WPJcOtfK", "af7cPrJdOHtdJwxdRwreta", "WPddKexcKCk2WQRcQuRcRSocWQlcNLS", "iXKNlSobWPy0WRaiW5ZcSCo2", "z8k0WRldOuiEWPZcSZeRW5X6W7K", "FZ/cS8kjda", "WPxdQ3DtWQXcW7pcQxvGrSkh", "BtO2", "F090ASka", "BCkycb1bWOmQ", "W73cJra", "W5eSW6FdPmo9"];
  return Tx = function() {
    return x;
  }, Tx();
}
async function L1(x) {
  const { iv: o, key: t } = await E1();
  function e(g, p, u, C, b) {
    return de(u - -744, b);
  }
  function n(g, p, u, C, b) {
    return de(p - 488, u);
  }
  const i = {};
  i[n(737, 754, "SrNU")] = tc, i.iv = o;
  const r = await window[n(717, 736, "7W]&") + "o"][d(393, "Q8%E", 353, 381, 376) + "e"][n(763, 743, "B03M") + "pt"](i, t, x);
  function a(g, p, u, C, b) {
    return de(g - -465, C);
  }
  const s = await window[e(-459, -468, -482, -492, "WU$P") + "o"][d(390, "aNQd", 377, 376, 384) + "e"][n(777, 769, "s)pg") + n(736, 755, "DCJK")](a(-205, -187, -203, "wV6T"), t), c = {};
  c[e(-494, -472, -495, -485, "epr&") + "ge"] = r, c[a(-191, -196, -199, "epr&")] = s;
  function d(g, p, u, C, b) {
    return de(b - 131, p);
  }
  return c.iv = o, c;
}
(function(x, o) {
  function t(s, c, d, g, p) {
    return ke(c - 83, p);
  }
  function e(s, c, d, g, p) {
    return ke(d - -250, g);
  }
  function n(s, c, d, g, p) {
    return ke(d - 711, c);
  }
  function i(s, c, d, g, p) {
    return ke(p - -322, d);
  }
  const r = x();
  function a(s, c, d, g, p) {
    return ke(g - -294, p);
  }
  for (; ; )
    try {
      if (parseInt(i(-152, -150, "@)JN", -128, -140)) / 1 * (parseInt(i(-148, -141, "&iPz", -140, -138)) / 2) + -parseInt(a(-97, -99, -87, -87, "[bc0")) / 3 * (parseInt(e(-54, -56, -69, "tKlC", -56)) / 4) + parseInt(a(-93, -109, -107, -106, "%O&W")) / 5 + -parseInt(n(915, "F7eV", 911, 917, 920)) / 6 + -parseInt(i(-129, -119, "8[tK", -127, -120)) / 7 * (-parseInt(n(912, "l8$^", 910, 923, 896)) / 8) + -parseInt(e(-75, -53, -61, "J7iK", -52)) / 9 * (parseInt(i(-126, -121, "wY9^", -110, -125)) / 10) + parseInt(t(295, 289, 303, 282, "&iPz")) / 11 * (parseInt(t(272, 284, 283, 281, "ATu9")) / 12) === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Dx, 207 * -2461 + -96875 * 1 + -40829 * -25);
function N1(x) {
  const o = new ArrayBuffer(x[t(-252, "T(uD", -250) + "h"]);
  function t(r, a, s, c, d) {
    return ke(s - -436, a);
  }
  const e = new Uint8Array(o);
  function n(r, a, s, c, d) {
    return ke(a - 866, s);
  }
  function i(r, a, s, c, d) {
    return ke(a - -269, d);
  }
  for (let r = 4856 + -1 * 1282 + -1 * 3574, a = x[n(1069, 1059, "#3O!") + "h"]; r < a; r++)
    e[r] = x[t(-234, "KOjm", -242) + i(-77, -78, -68, -86, "F7eV")](r);
  return o;
}
function ke(x, o) {
  const t = Dx();
  return ke = function(e, n) {
    e = e - (-179 * 50 + 7173 * 1 + 1955 * 1);
    let i = t[e];
    if (ke.UFowkq === void 0) {
      var r = function(g) {
        const p = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", C = "";
        for (let b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = p.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          C += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const d = function(g, p) {
        let u = [], C = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          C = (C + u[l] + p.charCodeAt(l % p.length)) % 256, b = u[l], u[l] = u[C], u[C] = b;
        l = 0, C = 0;
        for (let v = 0; v < g.length; v++)
          l = (l + 1) % 256, C = (C + u[l]) % 256, b = u[l], u[l] = u[C], u[C] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[C]) % 256]);
        return A;
      };
      ke.TmeeuM = d, x = arguments, ke.UFowkq = !0;
    }
    const a = t[2595 + -1 * -8661 + -11256], s = e + a, c = x[s];
    return c ? i = c : (ke.BlCFwD === void 0 && (ke.BlCFwD = !0), i = ke.TmeeuM(i, n), x[s] = i), i;
  }, ke(x, o);
}
function Dx() {
  const x = ["vw/cT8oPWQpcVM4NwqDq", "WOtcNZRcM8klWPlcK0BcTmo4hwS", "WQWIEX4uWQ/cMmkVqmk9W6NcTW", "WPrcWPFdSuC", "W5tcIYvmW4BcKZH9W7NcHSoyWOrD", "WRlcOW7cJ13cQmkOzq5wW4ziuW", "ySkIdef6W4De", "WP9qbCoJWOzZhCoF", "fW0UW7K8", "W7fZmgHo", "emothtW6", "auXVW5/dKq", "jftcI2W", "W5DoW5DFW6a3wdu7W7pcLmoM", "ySkNW7FdVmo2EmoQWQhcN8oXWP13W4C", "cYZdOmk0W5q", "WR3dO3xdGqH4D8kR", "tffZWOL8WQtdMhf2lCkBDsm", "p8kbdmkeWRZdM8kVWQlcKmkjta", "W6SfW6NcJSkSCSo6tmk1ov9T", "DYRdQeTSt8oOWPddLGq", "W7eti1aaWR5OWOFdRJBcJYCJ", "WOFdHfNdHCotW5xcPq", "WOtcMdJcMSohW5ZcUutcT8oI", "WQ5OWQNcLaRdQSohya83", "W40EW4dcOxZcSCoDE8ovWOi", "WOxdJviFymkfW7PbWQvzW7eoWRm", "W43dGSkUWPZdVG", "WO0pfJCpDGWNcW", "u3ldIqFdOCkMsq"];
  return Dx = function() {
    return x;
  }, Dx();
}
(function(x, o) {
  function t(a, s, c, d, g) {
    return le(a - 541, g);
  }
  function e(a, s, c, d, g) {
    return le(a - -515, d);
  }
  const n = x();
  function i(a, s, c, d, g) {
    return le(d - 18, a);
  }
  function r(a, s, c, d, g) {
    return le(s - -942, d);
  }
  for (; ; )
    try {
      if (parseInt(e(-166, -133, -105, "B!E0", -250)) / 1 * (parseInt(i("MsKV", 423, 527, 514, 558)) / 2) + parseInt(t(1067, 1066, 994, 1157, "Q2U&")) / 3 + -parseInt(t(885, 815, 855, 974, "Iwep")) / 4 + parseInt(r(-491, -564, -560, "osgD", -478)) / 5 * (-parseInt(t(1053, 947, 1118, 1141, "jh%9")) / 6) + parseInt(t(918, 924, 980, 1035, "Iwep")) / 7 + parseInt(i("kqjC", 352, 571, 458, 382)) / 8 * (-parseInt(e(-195, -297, -268, "TCzk", -251)) / 9) + -parseInt(i("IRP3", 528, 522, 545, 472)) / 10 * (-parseInt(r(-672, -575, -525, "QGO5", -522)) / 11) === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ex, 697908 + 77801 * 2 + -437727);
function le(x, o) {
  const t = Ex();
  return le = function(e, n) {
    e = e - (9 * -578 + 7561 + 5 * -411);
    let i = t[e];
    if (le.DDMOfu === void 0) {
      var r = function(g) {
        const p = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", C = "";
        for (let b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = p.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          C += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const d = function(g, p) {
        let u = [], C = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          C = (C + u[l] + p.charCodeAt(l % p.length)) % 256, b = u[l], u[l] = u[C], u[C] = b;
        l = 0, C = 0;
        for (let v = 0; v < g.length; v++)
          l = (l + 1) % 256, C = (C + u[l]) % 256, b = u[l], u[l] = u[C], u[C] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[C]) % 256]);
        return A;
      };
      le.uoAuCb = d, x = arguments, le.DDMOfu = !0;
    }
    const a = t[-409 + 116 * 53 + -5739], s = e + a, c = x[s];
    return c ? i = c : (le.fdReyq === void 0 && (le.fdReyq = !0), i = le.uoAuCb(i, n), x[s] = i), i;
  }, le(x, o);
}
function Y1() {
  function x(d, g, p, u, C) {
    return le(p - -595, g);
  }
  const o = x(-347, "HJzz", -265) + x(-359, "Hbf5", -279) + r("XWQh", 1441) + c("4gg%", 11, -105) + r("R5R8", 1268) + a("3J9E", 1554, 1462, 1499, 1503) + a("3[eO", 1404, 1371, 1470, 1483) + a("rkip", 1510, 1513, 1414, 1446) + x(-225, "nw5x", -235) + c("yB)3", -48, -118) + e("d]pw", -63, -98) + x(-155, "Pj#q", -237) + x(-59, "qd#n", -105) + x(-76, "%t@d", -157) + e("qpRv", -253, -265) + c("rsTa", -147, -263) + c("5aS9", 24, -72) + r("zAxC", 1319) + e("jh%9", -351, -238) + a("r!nR", 1273, 1211, 1257, 1320) + c("nw5x", -56, -123) + c("3[eO", -351, -249) + a("%t@d", 1383, 1414, 1346, 1346) + c("rsTa", -129, -121) + r("osgD", 1369) + r("qd#n", 1458) + r("#]K]", 1348) + a("jh%9", 1434, 1499, 1345, 1393) + c("ZKfl", -222, -186) + e("TIsm", -201, -113) + r("&f5$", 1443) + x(-317, "QGO5", -263) + e("#79s", -190, -271) + c("scVe", 11, -62) + r("D*0e", 1417) + c("Q2U&", -158, -88) + r("5aS9", 1278) + a("3J9E", 1358, 1417, 1336, 1434) + c("zAxC", -81, -64) + c("#79s", -147, -145) + c("r!nR", -273, -181) + r("D*0e", 1327) + x(-340, "kqjC", -254) + r("vPZU", 1226) + e("YP2H", -164, -278) + c("HJzz", -26, -111) + e("#79s", -60, -125) + c("Hbf5", 0, -80) + a("XWQh", 1280, 1440, 1221, 1326) + a("B!E0", 1373, 1502, 1487, 1410) + c("d]pw", -303, -190) + e("3[eO", -87, -167) + e("Q2U&", -159, -202) + e("r!nR", -177, -193) + e("MsKV", -142, -156) + a("5aS9", 1410, 1571, 1491, 1506) + c("4Y%&", -164, -239) + c("YP2H", -145, -247) + a("TIsm", 1236, 1285, 1420, 1340) + c("zAxC", -92, -86) + e("^&dr", -126, -239) + a("5H$$", 1330, 1235, 1226, 1333) + c("LB%9", -170, -92) + x(-72, "HJzz", -150) + x(-103, "&Zk5", -179) + e("Pj#q", -209, -260) + a("B!E0", 1469, 1399, 1547, 1482) + a("LB%9", 1298, 1421, 1385, 1414) + c("LB%9", -136, -219) + x(-194, "rkip", -117) + c("4Y%&", -152, -164) + x(-267, "zAxC", -212) + c("HJzz", -273, -166) + e("^&dr", -231, -140) + r("^&dr", 1320) + r("5H$$", 1257) + c(")ort", -177, -261) + x(-143, "&Zk5", -131) + x(-146, "QGO5", -191) + e("5H$$", -11, -123) + c("QGO5", -26, -135) + x(-70, "#79s", -180) + x(-24, "bZf%", -92) + r(")Q[p", 1310) + e("^&dr", -129, -168) + r("&f5$", 1361) + e("&Zk5", -54, -93) + e("IRP3", -239, -183) + x(-74, "3[eO", -75) + x(-115, "yB)3", -89) + r("R5R8", 1339) + e("ZKfl", -79, -115) + x(-182, "5aS9", -78) + e("#79s", -244, -134) + r("nw5x", 1232) + r("Hbf5", 1227) + x(-227, "LB%9", -174) + c("4Y%&", -208, -128) + e("D*0e", -190, -251) + e("Iwep", -314, -254) + c("4gg%", -6, -89) + a("&Zk5", 1539, 1394, 1518, 1452) + e("q(0q", -137, -142) + c("Iwep", -145, -198) + e("scVe", -8, -71) + r("Pj#q", 1335) + e("vPZU", -183, -86) + x(-252, "rkip", -234) + c("A&7E", -286, -201) + a("q(0q", 1495, 1538, 1504, 1444) + e("yB)3", -36, -132) + r("rkip", 1292) + a("R5R8", 1398, 1371, 1391, 1404) + c("q(0q", -49, -142) + c("yB)3", -172, -204) + c("Iwep", 18, -35) + x(-155, "LB%9", -257) + e("QGO5", -239, -230) + a("d]pw", 1454, 1373, 1322, 1350) + x(-233, "Hbf5", -138) + x(-303, "TIsm", -215) + a("&f5$", 1561, 1369, 1508, 1453) + c("osgD", 18, -87) + a("&f5$", 1239, 1224, 1194, 1289) + a("&Zk5", 1538, 1428, 1528, 1433) + a("A&7E", 1346, 1354, 1291, 1366) + r("nw5x", 1350) + e("5H$$", -58, -91) + x(-170, ")Q[p", -241) + r("Hbf5", 1306) + a("^&dr", 1302, 1466, 1352, 1357) + x(-275, "D*0e", -188) + a("Hbf5", 1466, 1347, 1306, 1377) + r("C!(p", 1311) + e("YP2H", -301, -296) + a("^&dr", 1580, 1418, 1484, 1474) + x(-305, "A&7E", -205) + a("scVe", 1473, 1515, 1586, 1486) + a("XWQh", 1453, 1351, 1376, 1391) + c("osgD", -121, -54) + x(-8, "#]K]", -82) + c("Pj#q", -37, -140) + x(-215, "scVe", -107) + x(-198, "LB%9", -288) + c(")ort", -83, -173) + c("scVe", -152, -232) + a("scVe", 1512, 1399, 1335, 1450) + c("TIsm", -96, -39) + x(-274, "5aS9", -170) + e("Hbf5", -171, -215) + r("&f5$", 1236) + x(-8, "#79s", -67) + a("ZKfl", 1206, 1300, 1226, 1298) + x(-101, "%t@d", -193) + r("4gg%", 1364) + c("LB%9", -344, -251) + e("LB%9", -40, -105) + r("&Zk5", 1269) + x(-248, "osgD", -245) + r("^&dr", 1265) + e("D*0e", -126, -144) + a("q(0q", 1312, 1492, 1423, 1417) + x(-187, ")ort", -273) + e("#]K]", -258, -201) + a("%t@d", 1405, 1424, 1220, 1308) + a("rkip", 1428, 1409, 1537, 1422) + r("ZKfl", 1240) + e("jh%9", -52, -103) + a("YP2H", 1477, 1478, 1456, 1513) + x(-193, "B!E0", -261) + x(-208, "A&7E", -240) + e("nw5x", -20, -87) + r("ZKfl", 1234) + e("@e!Z", -119, -188) + r("YP2H", 1258) + c("qd#n", -281, -257) + e("#]K]", -219, -104) + r("Hbf5", 1416) + c("@e!Z", -212, -215) + c("HJzz", -92, -193) + c("R5R8", -239, -141) + c("nw5x", -32, -106) + a(")Q[p", 1276, 1440, 1283, 1392) + e("XWQh", -230, -152) + c("rsTa", -62, -48) + r("IRP3", 1396) + e("qd#n", -135, -127) + r("r!nR", 1451) + a("scVe", 1456, 1393, 1466, 1376) + e("Q2U&", -234, -209) + e("TCzk", -181, -240) + r("LB%9", 1295) + r("QGO5", 1457) + a(")Q[p", 1354, 1500, 1406, 1401) + a(")ort", 1427, 1394, 1510, 1504) + x(-203, "Hbf5", -173) + r("rsTa", 1403) + r("d]pw", 1241) + a("kqjC", 1326, 1331, 1385, 1309) + x(-309, "vPZU", -203), t = window[a("jh%9", 1359, 1499, 1410, 1405)](o);
  function e(d, g, p, u, C) {
    return le(p - -602, d);
  }
  const n = window[e("R5R8", -173, -276)](t), i = N1(n);
  function r(d, g, p, u, C) {
    return le(g - 922, d);
  }
  function a(d, g, p, u, C) {
    return le(C - 981, d);
  }
  const s = {};
  s[c("vPZU", -1, -116)] = nc, s[e("osgD", -233, -129)] = zu;
  function c(d, g, p, u, C) {
    return le(p - -572, d);
  }
  return window[e("%t@d", -268, -273) + "o"][a("TIsm", 1347, 1459, 1340, 1384) + "e"][r("Q2U&", 1381) + c("kqjC", -24, -81)](r("Q2U&", 1288), i, s, !0, [a("IRP3", 1320, 1383, 1355, 1429) + "pt"]);
}
function Ex() {
  const x = ["W5JcP1TiW6y", "uSohz2FcSW", "s8kHW5azWPS", "W6bXl8oOnW", "WQL5WOLgW6G", "E8ksW7vVWQa", "t8kpqmoIwq", "xrjrW48H", "aIjnuSkj", "W7FcGNrrra", "A00Hn34", "W5HrFWRdJa", "nxNdR8kLW5rpW5boDvZcNN8", "B8oiESoCAa", "CmkpW5H9WOi", "WOBcKCk3bWy", "paHHWQz1", "W5aTzXFdSq", "zCkHhmoR", "AwBdH8kjWOu", "W4raWPpcV8k5", "WQVcIWHoAG", "W6mvWO3dUmor", "lurZWQxcKq", "W4xcGCkdob4", "W7GVvwddSq", "benTW5uS", "WO3dUSkFnG4", "wCkgj3BcPW", "kmkmW5Gxsq", "W7dcS8kebLu", "WOZdLei5CG", "iSoXW5ZcUmoD", "h1ZcUSkIWOG", "WOFcISoYW51qASk9W6WduqJdGra", "nw9edHG", "y3XWW7NdNW", "W5ddHmksW43cJmo5W64", "qSkJW54kW4O", "W47cRvjOW5W", "W6ddI8oJyam", "WP3dImohW6ac", "yCo8xSo8FG", "W4esWOZdTCoD", "WPahWP1VW5W", "W7/cNCkSuCol", "xhmllN4", "WOa7WPyJnW", "ASk8W75VeW", "WPjiW73dN8oQWRXJpmoXW4nbt8kr", "W5BdJ8kpWQC", "ttLuW7S2", "BCoZyXZdOW", "xhCqW5yd", "W4FcT8kfcN0", "W4lcINXsW68", "FmkND1pcKW", "W7pcGCkRcei", "dL97nv4", "vhXabrW", "W4HaWPRdUSoG", "A0vvW6hdUq", "W47cNLjwva", "lCohW7xdS8kU", "BSoIW6TeDW", "dem4agu", "gupcHCk4WP8", "WQZdHmoLWRS", "nmoIu8odua", "WPhdVqdcLmkf", "zSklW7mVWOW", "WQpdMgXivG", "vv0MeH8", "kmkuWQeZWP8", "WPhcLCkJft8", "W4pcK8kQfCo3", "W558W7Cs", "suPaW6tdGG", "q35qW4KP", "WOBdVCoBWOSx", "FCkle399", "W4XTWRdcRci", "fmkZW4hdM8ke", "vhaSbue", "WOVcOYxcKmoG", "W4ldUCkIWPW", "FqTAW7Dn", "BmkXq2tcRG", "yrzhW7CY", "BSo3t0xcTq", "WQhdMmoHfd1/mG", "WRxcKmk3zWC", "W7ndWRRcQSkk", "B8k3jCoTCW", "zwBdQCkpWP8", "BMjbW7hcVq", "n8kDW7mpra", "W5zAW7WPua", "AqFcI8kIWQO", "dmkDW5ZdVmkg", "rSkKW7nDDq", "m8kTW6CYWO02ra", "D8kFaffS", "btKodey", "dCkDW5BdKSkK", "kCkAWQafW44", "mSkbhSoKvdpcOq", "W7yNWQ7cLCkt", "BbZdI8oAW6RcPv3cJCoRCmk5wq0", "W6mGW5VdUSob", "W7xdLmkSWODQ", "yJNcS8o1WPO", "WRddT8ocWPz5", "W44lWPayW5i", "o8kmW4ytvG", "gL3cNmk6WRC", "WPa/WQyJnW", "W7rmzhO1", "W4hcGSoqqmoh", "b1hdHSo/WRK", "bcHsWOTbz8oWWRGmoSoxpmk4", "nCkHbCk9m8kgWO9oWRWFWRBcPW", "WQRcPhjwCG", "W4XLwCoLma", "WRaBWOCegW", "bmogW6ldP8k+", "W5f2W6O1ya", "nxmlo1W", "DSkmW6GRWPq", "WOldK2qwEq", "WPNcNhJcQmoN", "fmoKmfTm", "W6ddPCoqWQfk", "wrnBW79i", "WOfsW7GzFW", "WQldTCoaiHC", "m3xcHCk9WQO", "W7RcTmkUuSkv", "W6rnWONcK8oj", "W7SSvwSI", "WPL1W5ldQa8", "WONcNCoAW7eexSk4WOvRWRJdIgm", "eMBcNmkPWRW", "W67cHYFcUSol", "oJb9W4jv", "WQH1WRhcRru", "WPbjW5RdLri", "pq3dQCoaWRK", "W6xcNCklE8oItZNdUa", "W6tdT8kPhY4", "W44oAgK1", "n8ktWPmrmG", "W6L0W64nxq", "W7HXW4O6AG", "W5vPxJa", "jSkuW4BdG8ow", "W7ddSmksWRfs", "fmkZW5ZcHSoX", "W57cMxLwW5u", "W4lcVWnOBq", "WP/dOLGxyq", "s8ksW59SWPO", "CML9WPxdJq", "BCkpWQmZW7u", "W4b2W4WDuq", "W5vDjexcSq", "WOddT8kDyJC", "W5TDamodaq", "jSkZWPddImoE", "W6ddO8kEW5qk", "xq5xW74s", "FmkhuMJcLa", "zmkgubC5iSoDgSk/Cmo1W7NcPW", "WQepWR58W6G", "W6zNxwhdPG", "ueW1oWe", "g8oRmxvk", "jHi/W7FdH3pcKhpdSCkfbtK", "WO7dICozWOq1", "CSoQxX3dHG", "dSkcW4e0W6O", "WOpdPmkJgGC", "eCoZWPTHWRS", "WPBdNCkLW43cMa", "zK3dPSodWP4", "dwjmESki", "aYH2W50o", "eNK0nKm", "W4a8WQ7dRSoy", "BK8JEJu", "WOldKCkEDCoa", "BSkergRcQG", "DmkckCoJrq", "a8kuW4tcSmol", "rMOlW5a", "W63cIaegtSkAvKOc", "vmoKW7epEW", "sX7cJCobW5u", "vxCLlZW", "WRtdVCkXW6dcJa", "WR7dLgCWuG", "W6tdT8kDoIm", "dmoThw5f", "WQpdMGLxwdBcSMms", "xmkRD1NdHa", "z8kpur09iSoDkCkvF8oTW4NcKa", "W7dcLCkIW6z8WOCrWP/dKmk1WR8LWRq", "W53cLN9wW5a", "p2SVo34", "WOaUqrRdMmozW5VcT8kTjhBdK3q", "zq/cI8o5WQO", "DCkmzIvF", "zGO4W4Lh", "W5hdICkOW4tcGG", "WQL2W6tcRqW", "xav7W7jw", "gSkGW5TEWP0", "WQddUmo+j8or", "WQ3dOmo0W43cIq", "W5bra8o+aq", "WOhdRCkfW78n", "x0GLW7y3", "W4FcQmoNjSkOW7ypWOi", "n8kGW4pcRCk2", "AbK9WQDt", "vSkTb01F", "DCkEDWdcPW", "W7ScFeSM", "z3eUW7Wu", "W68KWP3cI8kZ", "iSkhW47cPCk1", "fuShfuC", "WQxdQvC/FG", "eSoiFhJdUG"];
  return Ex = function() {
    return x;
  }, Ex();
}
async function F1(x) {
  const o = await Y1();
  function t(r, a, s, c, d) {
    return le(c - -31, a);
  }
  function e(r, a, s, c, d) {
    return le(s - -75, d);
  }
  const n = {};
  n[i(565, "YP2H", 454)] = nc;
  function i(r, a, s, c, d) {
    return le(s - -28, a);
  }
  return window[e(433, 375, 401, 449, "4Y%&") + "o"][e(505, 540, 459, 371, "4Y%&") + "e"][t(513, "3J9E", 418, 499) + "pt"](n, o, x);
}
(function(x, o) {
  const t = x();
  function e(a, s, c, d, g) {
    return Le(d - -449, g);
  }
  function n(a, s, c, d, g) {
    return Le(g - 881, a);
  }
  function i(a, s, c, d, g) {
    return Le(d - 302, s);
  }
  function r(a, s, c, d, g) {
    return Le(d - -851, c);
  }
  for (; ; )
    try {
      if (-parseInt(n("#HCs", 1312, 1313, 1320, 1317)) / 1 + parseInt(e(-14, -9, -9, -19, "qF)m")) / 2 + -parseInt(e(-18, -14, -21, -11, "FUDN")) / 3 * (parseInt(n("3t4&", 1318, 1328, 1315, 1325)) / 4) + parseInt(r(-429, -418, "ZU95", -423, -432)) / 5 + parseInt(e(0, -2, -4, -6, "ry)7")) / 6 * (-parseInt(r(-412, -426, "4)@m", -417, -412)) / 7) + -parseInt(e(-14, -26, -6, -16, "H*l4")) / 8 * (-parseInt(i(733, "qPnW", 737, 733, 723)) / 9) + parseInt(n("lMc5", 1324, 1326, 1328, 1321)) / 10 === o) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Lx, -271793 * 7 + 2 * -230849 + 1105879 * 3);
function Le(x, o) {
  const t = Lx();
  return Le = function(e, n) {
    e = e - (607 * -4 + -2 * 3859 + 10573 * 1);
    let i = t[e];
    if (Le.wUllFv === void 0) {
      var r = function(g) {
        const p = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", C = "";
        for (let b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = p.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          C += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const d = function(g, p) {
        let u = [], C = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          C = (C + u[l] + p.charCodeAt(l % p.length)) % 256, b = u[l], u[l] = u[C], u[C] = b;
        l = 0, C = 0;
        for (let v = 0; v < g.length; v++)
          l = (l + 1) % 256, C = (C + u[l]) % 256, b = u[l], u[l] = u[C], u[C] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[C]) % 256]);
        return A;
      };
      Le.cyhHZS = d, x = arguments, Le.wUllFv = !0;
    }
    const a = t[0], s = e + a, c = x[s];
    return c ? i = c : (Le.PTPMlV === void 0 && (Le.PTPMlV = !0), i = Le.cyhHZS(i, n), x[s] = i), i;
  }, Le(x, o);
}
function Lx() {
  const x = ["zCoPW5u5WPlcN8kYW7SIW4BcKW", "WOjIeLD3WPTHse3cINj0rW", "WPSfWQZdUwGLWPOCAKzYzh0", "W5hcRatcOSkvWRZcGxDVnmoQW5ZcVa", "bhHMW5tcGSoJxCo6a3tcUe1Y", "WR1KW5xdNKb6W7pcL8o8qmoHaL8", "bCo9WPpdUdjKt8o8zHxcRSoSW4i", "WPLMkCkoWOVcLSk6m8oFvSkwnSkL", "W7fMBa", "W7ddJmkleCo9e8oIW5S1W4a", "W7/dULHIWOb1aG", "WOzHfvj1WPe1FeBcILT9", "jSoCW5O1jW", "WPKbWQlcGd1tW6WouW", "c8ooB8o9WPBdTSkvESoGW7lcIrlcVa", "WP81xSo/W67dLCoM", "jSkQWOJdG2FcK8klWOe3WOpdQmkagW", "W4iptmoDW5aObeSYDJFcGa", "ymoGW5q8WPNdG8o8W7W5W6/cSmoQW5i", "WPqKC0pdTevrW67cIG"];
  return Lx = function() {
    return x;
  }, Lx();
}
async function X1(x) {
  const { iv: o, key: t, message: e } = await L1(x), n = await F1(t), i = {};
  i[a("7A9H", 1207)] = n;
  function r(s, c, d, g, p) {
    return Le(d - -294, p);
  }
  function a(s, c, d, g, p) {
    return Le(c - 765, s);
  }
  return i.iv = o, i[r(152, 159, 152, 146, "2]tY") + "ge"] = e, i;
}
(function(x, o) {
  function t(r, a, s, c, d) {
    return Oe(d - 906, c);
  }
  function e(r, a, s, c, d) {
    return Oe(a - 357, s);
  }
  function n(r, a, s, c, d) {
    return Oe(c - -75, r);
  }
  const i = x();
  for (; ; )
    try {
      if (-parseInt(e(562, 574, "zpai", 570, 569)) / 1 + parseInt(e(551, 566, "wB4V", 559, 561)) / 2 + parseInt(t(1118, 1096, 1115, "m4bm", 1105)) / 3 * (-parseInt(n("@KfB", 137, 141, 129, 126)) / 4) + parseInt(n("AGtg", 113, 135, 121, 115)) / 5 + parseInt(n("%HP[", 104, 112, 117, 128)) / 6 + parseInt(t(1114, 1117, 1111, "Niwf", 1107)) / 7 + parseInt(n("fS&A", 151, 148, 138, 150)) / 8 * (-parseInt(t(1116, 1118, 1121, "1#Q2", 1112)) / 9) === o) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Nx, 20207 * -37 + 145230 + 4 * 249971);
function Oe(x, o) {
  const t = Nx();
  return Oe = function(e, n) {
    e = e - (-8665 * -1 + -5717 + -2757);
    let i = t[e];
    if (Oe.OYHXMt === void 0) {
      var r = function(g) {
        const p = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", C = "";
        for (let b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = p.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          C += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const d = function(g, p) {
        let u = [], C = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          C = (C + u[l] + p.charCodeAt(l % p.length)) % 256, b = u[l], u[l] = u[C], u[C] = b;
        l = 0, C = 0;
        for (let v = 0; v < g.length; v++)
          l = (l + 1) % 256, C = (C + u[l]) % 256, b = u[l], u[l] = u[C], u[C] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[C]) % 256]);
        return A;
      };
      Oe.kXINnE = d, x = arguments, Oe.OYHXMt = !0;
    }
    const a = t[-2325 + 1202 * -8 + -1 * -11941], s = e + a, c = x[s];
    return c ? i = c : (Oe.jzcqEg === void 0 && (Oe.jzcqEg = !0), i = Oe.kXINnE(i, n), x[s] = i), i;
  }, Oe(x, o);
}
function Nx() {
  const x = ["W5Xphq", "EfxcLcddP1CeW4L1W4OXW5ldMa", "W75uvCogda", "wCoStW3cNSk9WOxcNSoKW6xdTHVdQG", "jCo7ymksWQWNjJxcL8oNkW8", "EtZcKCoKW5S", "sMxdKa", "gsBcKN0BW7DSWPD0WQpdOG3cQG", "W47dPNJdOZ4ArtrtW6b+pXu", "WRfeW6m", "A1BdKc5aWRVcO8obWR/cMa", "wWxdG8kGW6TmW5D9WQy", "cCkVgCkLW6/cT0pcLrtdTsLm", "kmoQmmkUWP4", "BSk+ymomW57dQmkxWQCiiCoGCq", "WQVcQmkqW77dQCkSkSkmW7u", "eSkxWQiw", "WOxcKaJdUmkVaSktnSk1WPVdM8o0", "DSkoWOdcIde", "WOhcKq3dU8otE8kLjCksWPm", "u8k2WONdUMO4wSk0WP/cVNKTWQ0", "W7OjWP4cDCk2ngtcGW", "WR3dP8kocCol", "WPFcSmoYWR7cJKXuW5ddQmkZAZa", "WQ4FhSoCpKhcNCk5WOy", "W7euWPPX", "weeUqmkM", "W7pcO1TkDLqkkCkHfhrZxq", "W64FWRddKdT7W6JcL8orWOTdEa"];
  return Nx = function() {
    return x;
  }, Nx();
}
async function j1(x) {
  const o = await window[r(28, 31, "fS&A") + "o"][r(44, 47, "uH(p") + "e"][t(1076, 1060, 1065, 1055, "^lHc") + "t"](r(60, 51, "bitR"), x);
  function t(a, s, c, d, g) {
    return Oe(c - 871, g);
  }
  function e(a, s, c, d, g) {
    return Oe(a - -573, g);
  }
  function n(a, s, c, d, g) {
    return Oe(s - -269, g);
  }
  function i(a, s, c, d, g) {
    return Oe(c - -312, a);
  }
  function r(a, s, c, d, g) {
    return Oe(s - -160, c);
  }
  return Array[e(-359, -372, -367, -369, "PYKH")](new Uint8Array(o))[t(1084, 1079, 1089, 1084, "Ut3[")]((a) => a[t(1080, 1098, 1086, 1091, "7NO[") + n(-68, -71, -57, -79, "zpai")](-35 * 89 + 3 * 2068 + -439 * 7)[i("]pMD", -116, -110) + n(-74, -74, -69, -70, "AGtg")](4395 + 1 * -8641 + -8 * -531, "0"))[n(-66, -64, -77, -54, "[2&J")]("");
}
(function(x, o) {
  function t(c, d, g, p, u) {
    return je(g - 159, d);
  }
  function e(c, d, g, p, u) {
    return je(c - -142, p);
  }
  function n(c, d, g, p, u) {
    return je(p - 172, d);
  }
  function i(c, d, g, p, u) {
    return je(d - 500, u);
  }
  var r = x();
  function a(c, d, g, p, u) {
    return je(g - -558, d);
  }
  for (; ; )
    try {
      var s = -parseInt(a(-70, "Jkaz", -65, -77, -75)) / 1 + -parseInt(a(-71, "%8Qf", -63, -54, -62)) / 2 * (-parseInt(e(339, 333, 339, "4K(1", 345)) / 3) + parseInt(e(344, 337, 347, "llCm", 355)) / 4 * (parseInt(e(354, 347, 361, "r2[#", 351)) / 5) + parseInt(a(-58, "T1Kd", -66, -78, -66)) / 6 * (-parseInt(i(985, 984, 989, 973, "OuQ]")) / 7) + -parseInt(t(655, "fsdX", 656, 665, 651)) / 8 + -parseInt(a(-75, "up[8", -70, -72, -62)) / 9 * (parseInt(i(987, 985, 973, 983, "n3zI")) / 10) + parseInt(n(647, "s2kM", 653, 655, 650)) / 11 * (parseInt(t(658, "eK)x", 662, 670, 651)) / 12);
      if (s === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Yx, -7785 * 127 + -4165 * 353 + -7 * -464024);
function Yx() {
  var x = ["qmkIW4tdP8olW7TuuCo4WOlcJa", "W7G9WQbzymoiWQSiWOK", "sg1YWRPAxrG", "nmoCCfeGW7euWO4tWOFdIXTV", "WP4JnSkGWRFdKIiydKTXWR0k", "C0uYW7L5W77dVCo/WR3cKmon", "m8kcoYZcOg9lWP4NWRfgWRW", "WPeKnSkJWRVdN2iYiLDRWQm", "WRSKW7PvW61ada", "W6u9W7lcVmklFqT7W77cGCo0", "W5ldLCohWPtcRhLDa8kH", "WPpcJh7dPmozWOlcGs8kW4XLgSoR", "WODDxGxdIGhcQfddTmofg8ot", "W5naW51tjmkFfSouWOi/ucnzca", "W5FdVCoxfCkwWQDGW4C", "W64/W7hdJ8otxHvKW4O", "ASoHW4z1vb3dJcG", "WOeWWOrEBXFdO8o2nCoTW5JcMMGn", "W65ebCoCrSoHDXNcSMmQ", "hSozuSkOaGldThK", "WOnzxWhdIGJcIgldSSokdmow", "WQf/WOLDW6dcHmobgG", "WQb/A8kUAe9Rj1W", "WPxcI3ywESksW41fl8kgfLpdPq"];
  return Yx = function() {
    return x;
  }, Yx();
}
function je(x, o) {
  var t = Yx();
  return je = function(e, n) {
    e = e - (-1 * 5333 + 94 * -22 + -3 * -2627);
    var i = t[e];
    if (je.aVXMFp === void 0) {
      var r = function(g) {
        for (var p = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", C = "", b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = p.indexOf(l);
        for (var R = 0, j = u.length; R < j; R++)
          C += "%" + ("00" + u.charCodeAt(R).toString(16)).slice(-2);
        return decodeURIComponent(C);
      }, a = function(g, p) {
        var u = [], C = 0, b, A = "";
        g = r(g);
        var l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          C = (C + u[l] + p.charCodeAt(l % p.length)) % 256, b = u[l], u[l] = u[C], u[C] = b;
        l = 0, C = 0;
        for (var v = 0; v < g.length; v++)
          l = (l + 1) % 256, C = (C + u[l]) % 256, b = u[l], u[l] = u[C], u[C] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[C]) % 256]);
        return A;
      };
      je.XnJVgB = a, x = arguments, je.aVXMFp = !0;
    }
    var s = t[0], c = e + s, d = x[c];
    return d ? i = d : (je.OipcGr === void 0 && (je.OipcGr = !0), i = je.XnJVgB(i, n), x[c] = i), i;
  }, je(x, o);
}
async function M1(x) {
  const { Image: o } = Y0, t = await x.arrayBuffer(), e = new Uint8Array(t), n = {};
  n.bytes = e;
  const i = o.verify(n);
  if (i) throw Error(i);
  const r = {};
  return r.bytes = e, o.create(r);
}
async function _1(x) {
  const { v4: { Metadata: o } } = Y0, t = { ...x };
  t.platform = Y0.Platform.WEB;
  const e = t, n = o.verify(e);
  if (n) throw Error(n);
  return o.create(e);
}
async function J1(x) {
  const { Content: o } = Y0, { iv: t, key: e, message: n } = await X1(x), i = { token: new Uint8Array(e), iv: t, schemaVersion: Qu, bytes: new Uint8Array(n) }, r = o.verify(i);
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
  const { DocumentContent: t } = Y0.v4, e = await M1(x), n = await _1(o), i = {};
  i.image = e, i.metadata = n;
  const r = i, a = t.verify(r);
  if (a) throw Error(a);
  const s = t.create(r), c = {};
  return c.documentContent = s, U1(c);
}
async function z1(x, o) {
  const t = await Q1(x, o);
  return J1(t);
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
    var a = "./this.program", s = !(-5529 + -2 * 4903 + 71 * 216), c = !(13361 + 13360 * -1);
    s = typeof window == "object", c = typeof importScripts == "function";
    var d = "", g;
    (s || c) && (c ? d = self.location.href : document.currentScript && (d = document.currentScript.src), x && (d = x), 299 * -1 + 1 * 462 + -163 !== d.indexOf("blob:") ? d = d.substr(-2 * 4996 + -169 * 58 + 19794, d.lastIndexOf("/") + (-71 * 65 + -1 * -7121 + 3 * -835)) : d = "", c && (g = function(I) {
      var f = new XMLHttpRequest();
      return f.open("GET", I, !(-1084 + -155 * -7)), f.responseType = "arraybuffer", f.send(null), new Uint8Array(f.response);
    }));
    var p = t.printErr || console.warn.bind(console);
    for (r in i) i.hasOwnProperty(r) && (t[r] = i[r]);
    i = null, t.thisProgram && (a = t.thisProgram);
    var u;
    t.wasmBinary && (u = t.wasmBinary), t.noExitRuntime && t.noExitRuntime, typeof WebAssembly != "object" && Ue("no native wasm support detected");
    var C, b = !(49 * 58 + 5976 + -8817);
    function A(I) {
      I || Ue("Assertion failed: undefined");
    }
    var l = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void (-13 * 115 + -43 * 52 + 3731);
    function v(I, f, m) {
      var y = Ze;
      if (-1 * -9686 + -5 * -13 + -9751 < m) {
        m = f + m - (178 * -47 + -285 * -29 + 102 * 1);
        for (var w = 1 * 4037 + 1464 * -1 + -83 * 31; w < I.length; ++w) {
          var S = I.charCodeAt(w);
          if (109341 * -1 + -40397 + 205034 <= S && -19766 * -2 + 1 * -36595 + 27203 * 2 >= S) {
            var k = I.charCodeAt(++w);
            S = 2 * -43882 + -113492 + 266792 + ((S & -42 * -1 + -53 * -11 + 199 * 2) << -1796 + -21 * -86) | k & 5607 + -6 * 764;
          }
          if (-11 * -307 + 364 * -1 + 1 * -2886 >= S) {
            if (f >= m) break;
            y[f++] = S;
          } else {
            if (2047 >= S) {
              if (f + (-7761 + -3881 * -2) >= m) break;
              y[f++] = -3992 + -5963 * -1 + 3 * -593 | S >> -7 * -916 + -1 * 2819 + 211 * -17;
            } else {
              if (3287 * 2 + -108366 + 149 * 1123 >= S) {
                if (f + (-8012 + -9 * -62 + 7456) >= m) break;
                y[f++] = 3 * -3027 + 1122 * 3 + 5939 | S >> 3493 + 1 * -3481;
              } else {
                if (f + 3 >= m) break;
                y[f++] = -1943 * 4 + 1 * -734 + 8746 | S >> -2149 + 3 * 701 + 64, y[f++] = 4203 + -1 * 9161 + 5086 | S >> 12 & 3 * 1393 + -6367 + 2251 * 1;
              }
              y[f++] = 268 * 36 + 6276 + -1436 * 11 | S >> 5988 + -328 * -15 + -10902 & 6388 + -575 * 11;
            }
            y[f++] = 2317 + 10 * -161 + -579 | S & 1 * 1300 + 8615 + -9852;
          }
        }
        y[f] = -15168 + -1264 * -12;
      }
    }
    var R = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void (-5 * 1297 + -8086 + -1 * -14571);
    function j(I, f) {
      for (var m = I >> 1, y = m + f / (-2215 + 2217 * 1); !(m >= y) && jt[m]; ) ++m;
      if (m <<= 1, 5 * -767 + -6 * -1315 + 4023 * -1 < m - I && R) return R.decode(Ze.subarray(I, m));
      for (m = -133 * 34 + 4 * -179 + 5238, y = ""; ; ) {
        var w = Rt[I + 2 * m >> 1];
        if (1292 + 38 * -34 == w || m == f / (-606 + 11 * 636 + -6388)) return y;
        ++m, y += String.fromCharCode(w);
      }
    }
    function M(I, f, m) {
      if (void (1357 * 5 + 251 * -4 + 41 * -141) === m && (m = 3838219509 + -2537431759 * -1 + -4228167621), 1 * -1049 + -4723 + 5774 > m) return 1 * -1949 + -7227 + 9176;
      m -= -48 * -80 + -9978 + -2 * -3070;
      var y = f;
      m = m < (-302 * 3 + 709 + -199 * -1) * I.length ? m / (10 * -11 + 6409 + -2099 * 3) : I.length;
      for (var w = 3 * -2529 + 8165 + 34 * -17; w < m; ++w) Rt[f >> 9912 + 3 * -2953 + 4 * -263] = I.charCodeAt(w), f += 6481 + -495 * 5 + -4004;
      return Rt[f >> -2609 * 1 + 1 * 4211 + -1 * 1601] = -9749 + -1 * -9749, f - y;
    }
    function J(I) {
      return (11412 + 2 * -5705) * I.length;
    }
    function H(I, f) {
      for (var m = 47 * 209 + -5903 * -1 + -2 * 7863, y = ""; !(m >= f / (514 * 9 + -6484 + 1862)); ) {
        var w = Be[I + 4 * m >> 2];
        if (94 * 83 + -3398 + -12 * 367 == w) break;
        ++m, 567 * 124 + -108410 + 103638 <= w ? (w -= -112185 + 79 * 260 + 157181, y += String.fromCharCode(731 + 1 * 101492 + -46927 | w >> 10576 + 587 * -18, 79522 * -1 + 14 * 6017 + 51604 | w & -2 * -2105 + 4487 + -7674)) : y += String.fromCharCode(w);
      }
      return y;
    }
    function oe(I, f, m) {
      if (void (-4282 * 1 + -6439 + 10721) === m && (m = -149705482 + 36701 * -109909 + 6330959338), 4 > m) return 3907 + 21 * 134 + -6721;
      var y = f;
      m = y + m - (7974 + -2 * -853 + -9676);
      for (var w = 11106 + 3702 * -3; w < I.length; ++w) {
        var S = I.charCodeAt(w);
        if (-42216 + 27 * 1033 + 69621 <= S && -88986 + -1 * -56125 + 90204 >= S) {
          var k = I.charCodeAt(++w);
          S = -89920 * 1 + -16296 + 171752 * 1 + ((S & -31 * 113 + 1 * -2401 + 6927) << 1920 * -3 + 838 * -11 + 12 * 1249) | k & 1023;
        }
        if (Be[f >> -1099 + -8744 * 1 + 9845] = S, f += 4, f + (-2807 * 1 + 9533 + -6722) > m) break;
      }
      return Be[f >> 331 * -10 + -1 * 263 + 3575] = 3421 + 3835 * -1 + -69 * -6, f - y;
    }
    function U(I) {
      for (var f = 343 * -13 + 121 * 58 + -1 * 2559, m = -1 * 2478 + 4893 + 35 * -69; m < I.length; ++m) {
        var y = I.charCodeAt(m);
        -7521 + -71 * -862 + -95 * -17 <= y && -347 * 11 + -65960 + -10 * -12712 >= y && ++m, f += 6263 + 1 * -7414 + 1155;
      }
      return f;
    }
    var ee, Te, Ze, Rt, jt, Be, it, Pn, f0;
    function _0(I) {
      ee = I, t.HEAP8 = Te = new Int8Array(I), t.HEAP16 = Rt = new Int16Array(I), t.HEAP32 = Be = new Int32Array(I), t.HEAPU8 = Ze = new Uint8Array(I), t.HEAPU16 = jt = new Uint16Array(I), t.HEAPU32 = it = new Uint32Array(I), t.HEAPF32 = Pn = new Float32Array(I), t.HEAPF64 = f0 = new Float64Array(I);
    }
    var Je = t.INITIAL_MEMORY || 6888707 + -79 * -125171, bt = {};
    bt.initial = Je / (99804 * 1 + -105218 + 70950), bt.maximum = 32768, t.wasmMemory ? C = t.wasmMemory : C = new WebAssembly.Memory(bt), C && (ee = C.buffer), Je = ee.byteLength, _0(ee);
    var Pt = [], He = [], J0 = [], C0 = [];
    function p0() {
      var I = t.preRun.shift();
      Pt.unshift(I);
    }
    var Ye = -6410 + 431 * 9 + -1 * -2531, dt = null;
    t.preloadedImages = {}, t.preloadedAudios = {};
    function Ue(I) {
      throw t.onAbort && t.onAbort(I), p(I), b = !(2218 * -3 + -8197 * -1 + -1543), I = new WebAssembly.RuntimeError("abort(" + I + "). Build with -s ASSERTIONS=1 for more info."), n(I), I;
    }
    function Mt(I) {
      var f = rt;
      return String.prototype.startsWith ? f.startsWith(I) : -7565 * -1 + -6932 * 1 + 633 * -1 === f.indexOf(I);
    }
    function ut() {
      return Mt("data:application/octet-stream;base64,");
    }
    var rt = "sam.wasm";
    if (!ut()) {
      var _t = rt;
      rt = t.locateFile ? t.locateFile(_t, d) : d + _t;
    }
    function at() {
      try {
        if (u) return new Uint8Array(u);
        if (g) return g(rt);
        throw "both async and sync fetching of the wasm failed";
      } catch (I) {
        Ue(I);
      }
    }
    function Jc() {
      var I = {};
      return I.credentials = "same-origin", u || !s && !c || typeof fetch != "function" || Mt("file://") ? Promise.resolve().then(at) : fetch(rt, I).then(function(f) {
        if (!f.ok) throw "failed to load wasm binary file at '" + rt + "'";
        return f.arrayBuffer();
      }).catch(function() {
        return at();
      });
    }
    function Vn(I) {
      for (; -3135 + 63 * 12 + -3 * -793 < I.length; ) {
        var f = I.shift();
        if (typeof f == "function") f(t);
        else {
          var m = f.Ba;
          typeof m == "number" ? void (-98 * -95 + 2914 * 3 + 18052 * -1) === f.ta ? uo("v", m)() : uo("vi", m)(f.ta) : m(void (-1 * 6375 + -24 * -211 + 69 * 19) === f.ta ? null : f.ta);
        }
      }
    }
    function uo(I, f) {
      var m = [];
      return function() {
        m.length = arguments.length;
        for (var y = 0; y < arguments.length; y++) m[y] = arguments[y];
        return m && m.length ? t["dynCall_" + I].apply(null, [f].concat(m)) : t["dynCall_" + I].call(null, f);
      };
    }
    function Uc(I) {
      this.da = I - (-4111 * 1 + 5335 + -1 * 1208), this.Oa = function(f) {
        Be[this.da + (778 * 4 + 13 * -724 + 6308) >> 3897 + -1 * -1070 + -4965] = f;
      }, this.La = function(f) {
        Be[this.da + (-29 * -307 + -1 * -8239 + -17142) >> 2241 * -1 + 2127 * -2 + 89 * 73] = f;
      }, this.Ma = function() {
        Be[this.da + (-224 * 42 + 31 * 241 + -1941 * -1) >> -4375 + 541 * 17 + -4820] = 9653 + 49 * -197;
      }, this.Ka = function() {
        Te[this.da + 12 >> -310 + 310 * 1] = 0;
      }, this.Na = function() {
        Te[this.da + (1 * 656 + -3542 + 1 * 2899) >> 3059 + 20 * -14 + -2779] = 1 * 9727 + -1157 * -1 + -10884;
      }, this.Fa = function(f, m) {
        this.Oa(f), this.La(m), this.Ma(), this.Ka(), this.Na();
      };
    }
    function Tn() {
      return 0 < Tn.xa;
    }
    function lo(I) {
      switch (I) {
        case 1:
          return -6 * 1367 + -34 * -262 + 353 * -2;
        case 2:
          return 4608 + 271 * -17;
        case 359 * 11 + 5803 * 1 + 9748 * -1:
          return 756 * -6 + -6801 * -1 + -2263;
        case 6726 + 5 * 1379 + -1 * 13613:
          return -3590 * 1 + 332 * -8 + -3 * -2083;
        default:
          throw new TypeError("Unknown type size: " + I);
      }
    }
    var dr = void 0;
    function De(I) {
      for (var f = ""; Ze[I]; ) f += dr[Ze[I++]];
      return f;
    }
    var h0 = {}, Jt = {}, Dn = {};
    function Io(I) {
      if (void (217 + 265 * 37 + -2 * 5011) === I) return "_unknown";
      I = I.replace(/[^a-zA-Z0-9_]/g, "$");
      var f = I.charCodeAt(-3484 + 183 * -5 + 4399 * 1);
      return -53 * 167 + -6001 + 14900 <= f && 4767 + 3 * -371 + -1199 * 3 >= f ? "_" + I : I;
    }
    function fo(I, f) {
      return I = Io(I), new Function("body", "return function " + I + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(f);
    }
    function Co(I) {
      var f = Error, m = fo(I, function(y) {
        this.name = I, this.message = y, y = Error(y).stack, void (1 * 8217 + 1992 + -3403 * 3) !== y && (this.stack = this.toString() + `
` + y.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return m.prototype = Object.create(f.prototype), m.prototype.constructor = m, m.prototype.toString = function() {
        return void (-33 * -173 + 4117 * 1 + -9826) === this.message ? this.name : this.name + ": " + this.message;
      }, m;
    }
    var m0 = void (31 + 2 * -1356 + -383 * -7);
    function _(I) {
      throw new m0(I);
    }
    var ur = void 0;
    function En(I) {
      throw new ur(I);
    }
    function b0(I, f, m) {
      function y(G) {
        G = m(G), G.length !== I.length && En("Mismatched type converter count");
        for (var Z = 6339 + -1327 * 1 + -5012; Z < I.length; ++Z) At(I[Z], G[Z]);
      }
      I.forEach(function(G) {
        Dn[G] = f;
      });
      var w = Array(f.length), S = [], k = 0;
      f.forEach(function(G, Z) {
        Jt.hasOwnProperty(G) ? w[Z] = Jt[G] : (S.push(G), h0.hasOwnProperty(G) || (h0[G] = []), h0[G].push(function() {
          w[Z] = Jt[G], ++k, k === S.length && y(w);
        }));
      }), 1 * -1051 + 2 * 1238 + -1425 === S.length && y(w);
    }
    function At(I, f, m) {
      if (m = m || {}, !("argPackAdvance" in f)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var y = f.name;
      if (I || _('type "' + y + '" must have a positive integer typeid pointer'), Jt.hasOwnProperty(I)) {
        if (m.Ea) return;
        _("Cannot register type '" + y + "' twice");
      }
      Jt[I] = f, delete Dn[I], h0.hasOwnProperty(I) && (f = h0[I], delete h0[I], f.forEach(function(w) {
        w();
      }));
    }
    function Qc(I) {
      var f = {};
      return f.count = I.count, f.oa = I.oa, f.pa = I.pa, f.da = I.da, f.fa = I.fa, f.ga = I.ga, f.ha = I.ha, f;
    }
    function po(I) {
      _(I.A.fa.ea.name + " instance already deleted");
    }
    var ho = !(852 * 7 + -8790 + -257 * -11);
    function lr() {
    }
    function Ir(I) {
      --I.count.value, 4486 * 2 + -9576 + -2 * -302 === I.count.value && (I.ga ? I.ha.na(I.ga) : I.fa.ea.na(I.da));
    }
    function U0(I) {
      return typeof FinalizationGroup > "u" ? (U0 = function(f) {
        return f;
      }, I) : (ho = new FinalizationGroup(function(f) {
        for (var m = f.next(); !m.done; m = f.next()) m = m.value, m.da ? Ir(m) : console.warn("object already deleted: " + m.da);
      }), U0 = function(f) {
        return ho.register(f, f.A, f.A), f;
      }, lr = function(f) {
        ho.unregister(f.A);
      }, U0(I));
    }
    var Q0 = void (27 * 139 + -8422 + -161 * -29), z0 = [];
    function mo() {
      for (; z0.length; ) {
        var I = z0.pop();
        I.A.oa = !(2829 + 3 * -778 + -494), I.delete();
      }
    }
    function Vt() {
    }
    var fr = {};
    function zc(I, f) {
      var m = t;
      if (void (4555 + -194 * -44 + -13091) === m[I].ja) {
        var y = m[I];
        m[I] = function() {
          return m[I].ja.hasOwnProperty(arguments.length) || _("Function '" + f + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + m[I].ja + ")!"), m[I].ja[arguments.length].apply(this, arguments);
        }, m[I].ja = [], m[I].ja[y.ya] = y;
      }
    }
    function Cr(I, f, m) {
      t.hasOwnProperty(I) ? ((void (-15147 + 3 * 5049) === m || void (-470 + -11 * 827 + 9567) !== t[I].ja && void (4221 + -583 * -11 + -10634) !== t[I].ja[m]) && _("Cannot register public name '" + I + "' twice"), zc(I, I), t.hasOwnProperty(m) && _("Cannot register multiple overloads of a function with the same number of arguments (" + m + ")!"), t[I].ja[m] = f) : (t[I] = f, void (-9128 + -56 * -163) !== m && (t[I].Ra = m));
    }
    function qc(I, f, m, y, w, S, k, G) {
      this.name = I, this.constructor = f, this.ma = m, this.na = y, this.ia = w, this.Ca = S, this.qa = k, this.Aa = G;
    }
    function Ln(I, f, m) {
      for (; f !== m; ) f.qa || _("Expected null or instance of " + m.name + ", got an instance of " + f.name), I = f.qa(I), f = f.ia;
      return I;
    }
    function $c(I, f) {
      return f === null ? (this.ua && _("null is not a valid " + this.name), 1039 + 5 * 1287 + -7474) : (f.A || _('Cannot pass "' + y0(f) + '" as a ' + this.name), f.A.da || _("Cannot pass deleted object as a pointer of type " + this.name), Ln(f.A.da, f.A.fa.ea, this.ea));
    }
    function eg(I, f) {
      if (f === null) {
        if (this.ua && _("null is not a valid " + this.name), this.sa) {
          var m = this.Ha();
          return I !== null && I.push(this.na, m), m;
        }
        return 0;
      }
      if (f.A || _('Cannot pass "' + y0(f) + '" as a ' + this.name), f.A.da || _("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && f.A.fa.ra && _("Cannot convert argument of type " + (f.A.ha ? f.A.ha.name : f.A.fa.name) + " to parameter type " + this.name), m = Ln(f.A.da, f.A.fa.ea, this.ea), this.sa) switch (void (751 * 9 + 1144 + -1129 * 7) === f.A.ga && _("Passing raw pointer to smart pointer is illegal"), this.Pa) {
        case 5523 + -8198 * -1 + -13721 * 1:
          f.A.ha === this ? m = f.A.ga : _("Cannot convert argument of type " + (f.A.ha ? f.A.ha.name : f.A.fa.name) + " to parameter type " + this.name);
          break;
        case 1:
          m = f.A.ga;
          break;
        case -367 * -27 + 9801 + -19708:
          if (f.A.ha === this) m = f.A.ga;
          else {
            var y = f.clone();
            m = this.Ia(m, A0(function() {
              y.delete();
            })), I !== null && I.push(this.na, m);
          }
          break;
        default:
          _("Unsupporting sharing policy");
      }
      return m;
    }
    function tg(I, f) {
      return f === null ? (this.ua && _("null is not a valid " + this.name), 9144 + 2 * -1789 + -11 * 506) : (f.A || _('Cannot pass "' + y0(f) + '" as a ' + this.name), f.A.da || _("Cannot pass deleted object as a pointer of type " + this.name), f.A.fa.ra && _("Cannot convert argument of type " + f.A.fa.name + " to parameter type " + this.name), Ln(f.A.da, f.A.fa.ea, this.ea));
    }
    function Nn(I) {
      return this.fromWireType(it[I >> -2160 + -8902 * 1 + 11064]);
    }
    function pr(I, f, m) {
      return f === m ? I : void (-5538 + 746 * -13 + -52 * -293) === m.ia ? null : (I = pr(I, f, m.ia), I === null ? null : m.Aa(I));
    }
    var q0 = {};
    function ng(I, f) {
      for (void (358 * 11 + -7785 + 1 * 3847) === f && _("ptr should not be undefined"); I.ia; ) f = I.qa(f), I = I.ia;
      return q0[f];
    }
    function Yn(I, f) {
      f.fa && f.da || En("makeClassHandle requires ptr and ptrType"), !!f.ha != !!f.ga && En("Both smartPtrType and smartPtr must be specified");
      var m = {};
      m.value = 1, f.count = m;
      var y = {};
      y.value = f;
      var w = {};
      return w.A = y, U0(Object.create(I, w));
    }
    function yt(I, f, m, y) {
      this.name = I, this.ea = f, this.ua = m, this.ra = y, this.sa = !(1 * -3193 + -4879 + 2691 * 3), this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void (-7085 + 352 * -1 + 111 * 67), f.ia !== void 0 ? this.toWireType = eg : (this.toWireType = y ? $c : tg, this.ka = null);
    }
    function hr(I, f, m) {
      t.hasOwnProperty(I) || En("Replacing nonexistant public symbol"), t[I].ja !== void 0 && void (-1 * 901 + 128 * -41 + 473 * 13) !== m ? t[I].ja[m] = f : (t[I] = f, t[I].ya = m);
    }
    function Tt(I, f) {
      I = De(I);
      var m = uo(I, f);
      return typeof m != "function" && _("unknown function pointer with signature " + I + ": " + f), m;
    }
    var mr = void (14 * -103 + -29 * -6 + 1268);
    function br(I) {
      I = Rr(I);
      var f = De(I);
      return Wt(I), f;
    }
    function $0(I, f) {
      function m(S) {
        w[S] || Jt[S] || (Dn[S] ? Dn[S].forEach(m) : (y.push(S), w[S] = !(1537 * 1 + 3757 + -5294)));
      }
      var y = [], w = {};
      throw f.forEach(m), new mr(I + ": " + y.map(br).join([", "]));
    }
    function Ar(I, f) {
      for (var m = [], y = -1 * -1615 + -944 + 671 * -1; y < I; y++) m.push(Be[(f >> 1249 * -1 + -5 * -1115 + -94 * 46) + y]);
      return m;
    }
    function Fn(I) {
      for (; I.length; ) {
        var f = I.pop();
        I.pop()(f);
      }
    }
    function yr(I, f, m) {
      return I instanceof Object || _(m + ' with invalid "this": ' + I), I instanceof f.ea.constructor || _(m + ' incompatible with "this" of type ' + I.constructor.name), I.A.da || _("cannot call emscripten binding method " + m + " on deleted object"), Ln(I.A.da, I.A.fa.ea, f.ea);
    }
    var Wr = {};
    Wr.value = void (-23 * -269 + 402 * -17 + -1 * -647);
    var vr = {};
    vr.value = null;
    var wr = {};
    wr.value = !(-192 + -3671 * 1 + -3863 * -1);
    var Sr = {};
    Sr.value = !(7 * -1043 + -5012 + 1 * 12314);
    var bo = [], Qe = [{}, Wr, vr, wr, Sr];
    function Ao(I) {
      -7 * -167 + 7460 + 115 * -75 < I && -11 * 517 + 26 * -136 + 9223 === --Qe[I].Ja && (Qe[I] = void (9539 + 9539 * -1), bo.push(I));
    }
    function A0(I) {
      switch (I) {
        case void (8955 + -1699 * 5 + -460):
          return 2 * -1321 + -7517 + 10160;
        case null:
          return 1 * -7327 + 2718 + 4611;
        case !(-1993 * 5 + 1 * -357 + -5161 * -2):
          return -31 * -269 + 834 * 11 + 10 * -1751;
        case !(-3716 * -1 + -1 * -4189 + -7904):
          return -8920 + -4621 * 2 + 18166;
        default:
          var f = bo.length ? bo.pop() : Qe.length, m = {};
          return m.Ja = 1, m.value = I, Qe[f] = m, f;
      }
    }
    function y0(I) {
      if (I === null) return "null";
      var f = typeof I;
      return f === "object" || f === "array" || f === "function" ? I.toString() : "" + I;
    }
    function xg(I, f) {
      switch (f) {
        case -8323 + 2 * 4957 + -1589 * 1:
          return function(m) {
            return this.fromWireType(Pn[m >> 4634 + -5601 * 1 + 969]);
          };
        case -1493 + 374 * 4:
          return function(m) {
            return this.fromWireType(f0[m >> 5622 + 5619 * -1]);
          };
        default:
          throw new TypeError("Unknown float type: " + I);
      }
    }
    function og(I) {
      var f = Function;
      if (!(f instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof f + " which is not a function");
      var m = fo(f.name || "unknownFunctionName", function() {
      });
      return m.prototype = f.prototype, m = new m(), I = f.apply(m, I), I instanceof Object ? I : m;
    }
    function ig(I, f, m) {
      switch (f) {
        case 0:
          return m ? function(y) {
            return Te[y];
          } : function(y) {
            return Ze[y];
          };
        case 1918 * 1 + 8895 + -10812:
          return m ? function(y) {
            return Rt[y >> 1879 * 3 + 1 * 1289 + -6925];
          } : function(y) {
            return jt[y >> 1029 + 694 * -2 + 360];
          };
        case -1 * -1549 + -3973 + -2 * -1213:
          return m ? function(y) {
            return Be[y >> -3203 * -1 + -1 * -3609 + -6810];
          } : function(y) {
            return it[y >> -557 * 9 + 9633 + -4618];
          };
        default:
          throw new TypeError("Unknown integer type: " + I);
      }
    }
    function yo(I) {
      return I || _("Cannot use deleted val. handle = " + I), Qe[I].value;
    }
    function Br(I, f) {
      var m = Jt[I];
      return m === void 0 && _(f + " has unknown type " + br(I)), m;
    }
    var rg = {}, Gr = {};
    function kr() {
      if (!Wo) {
        var I = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: a || "./this.program" }, f;
        for (f in Gr) I[f] = Gr[f];
        var m = [];
        for (f in I) m.push(f + "=" + I[f]);
        Wo = m;
      }
      return Wo;
    }
    var Wo, Or = [];
    function Zr(I) {
      var f = {}, m;
      for (m in I) (function(y) {
        var w = I[y];
        f[y] = typeof w == "function" ? function() {
          Or.push(y);
          try {
            return w.apply(null, arguments);
          } finally {
            if (b) return;
            var S = Or.pop();
            A(S === y);
          }
        } : w;
      })(m);
      return f;
    }
    for (var Hr = Array(4543 + 3 * 1169 + -7794), Xn = 0; 114 * -49 + -7129 + 12971 > Xn; ++Xn) Hr[Xn] = String.fromCharCode(Xn);
    dr = Hr, m0 = t.BindingError = Co("BindingError"), ur = t.InternalError = Co("InternalError"), Vt.prototype.isAliasOf = function(I) {
      if (!(this instanceof Vt && I instanceof Vt)) return !(-1 * 8458 + 7216 + 1243);
      var f = this.A.fa.ea, m = this.A.da, y = I.A.fa.ea;
      for (I = I.A.da; f.ia; ) m = f.qa(m), f = f.ia;
      for (; y.ia; ) I = y.qa(I), y = y.ia;
      return f === y && m === I;
    }, Vt.prototype.clone = function() {
      if (this.A.da || po(this), this.A.pa) return this.A.count.value += 4681 + -231 * -24 + -1136 * 9, this;
      var I = U0(Object.create(Object.getPrototypeOf(this), { A: { value: Qc(this.A) } }));
      return I.A.count.value += -1124 * 8 + -4 * -434 + 7257, I.A.oa = !(-27 * 174 + -1 * 5162 + -9861 * -1), I;
    }, Vt.prototype.delete = function() {
      this.A.da || po(this), this.A.oa && !this.A.pa && _("Object already scheduled for deletion"), lr(this), Ir(this.A), this.A.pa || (this.A.ga = void (-8080 * -1 + 2 * 1834 + 5874 * -2), this.A.da = void 0);
    }, Vt.prototype.isDeleted = function() {
      return !this.A.da;
    }, Vt.prototype.deleteLater = function() {
      return this.A.da || po(this), this.A.oa && !this.A.pa && _("Object already scheduled for deletion"), z0.push(this), 167 * 59 + 2693 + -12545 === z0.length && Q0 && Q0(mo), this.A.oa = !(-6910 + -4 * -524 + -29 * -166), this;
    }, yt.prototype.Da = function(I) {
      return this.wa && (I = this.wa(I)), I;
    }, yt.prototype.va = function(I) {
      this.na && this.na(I);
    }, yt.prototype.argPackAdvance = -31 * -25 + 3829 * -2 + 6891, yt.prototype.readValueFromPointer = Nn, yt.prototype.deleteObject = function(I) {
      I !== null && I.delete();
    }, yt.prototype.fromWireType = function(I) {
      function f() {
        return this.sa ? Yn(this.ea.ma, { fa: this.Ga, da: m, ha: this, ga: I }) : Yn(this.ea.ma, { fa: this, da: I });
      }
      var m = this.Da(I);
      if (!m) return this.va(I), null;
      var y = ng(this.ea, m);
      if (void (-3473 + -1013 * 2 + 5499) !== y)
        return -5601 * -1 + -218 * -7 + -7127 === y.A.count.value ? (y.A.da = m, y.A.ga = I, y.clone()) : (y = y.clone(), this.va(I), y);
      if (y = this.ea.Ca(m), y = fr[y], !y) return f.call(this);
      y = this.ra ? y.za : y.pointerType;
      var w = pr(m, this.ea, y.ea);
      return w === null ? f.call(this) : this.sa ? Yn(y.ea.ma, { fa: y, da: w, ha: this, ga: I }) : Yn(y.ea.ma, { fa: y, da: w });
    }, t.getInheritedInstanceCount = function() {
      return Object.keys(q0).length;
    }, t.getLiveInheritedInstances = function() {
      var I = [], f;
      for (f in q0) q0.hasOwnProperty(f) && I.push(q0[f]);
      return I;
    }, t.flushPendingDeletes = mo, t.setDelayFunction = function(I) {
      Q0 = I, z0.length && Q0 && Q0(mo);
    }, mr = t.UnboundTypeError = Co("UnboundTypeError"), t.count_emval_handles = function() {
      for (var I = -1 * 8167 + 13 * 303 + -7 * -604, f = 5; f < Qe.length; ++f) void (2 * 4567 + 1871 * -5 + -1 * -221) !== Qe[f] && ++I;
      return I;
    }, t.get_first_emval = function() {
      for (var I = 2 * -4639 + -9713 + -1583 * -12; I < Qe.length; ++I) if (void (3 * 1009 + 2 * -1243 + 1 * -541) !== Qe[I]) return Qe[I];
      return null;
    }, He.push({ Ba: function() {
      Kr();
    } });
    var ag = { z: function(I) {
      return jn(I + (11 * 139 + -8087 * -1 + -9600)) + (16398 + 8191 * -2);
    }, u: function(I, f, m) {
      throw new Uc(I).Fa(f, m), "uncaught_exception" in Tn ? Tn.xa++ : Tn.xa = 7834 + 6451 * 1 + -14284, I;
    }, w: function(I, f, m, y, w) {
      var S = lo(m);
      f = De(f), At(I, { name: f, fromWireType: function(k) {
        return !!k;
      }, toWireType: function(k, G) {
        return G ? y : w;
      }, argPackAdvance: 8, readValueFromPointer: function(k) {
        if (-3 * -2223 + -4215 + -2453 === m) var G = Te;
        else if (9719 * -1 + -177 * -54 + 163 === m) G = Rt;
        else if (-8607 + -842 * -2 + -2309 * -3 === m) G = Be;
        else throw new TypeError("Unknown boolean type size: " + f);
        return this.fromWireType(G[k >> S]);
      }, ka: null });
    }, h: function(I, f, m, y, w, S, k, G, Z, K, P, V, q) {
      P = De(P), S = Tt(w, S), G && (G = Tt(k, G)), K && (K = Tt(Z, K)), q = Tt(V, q);
      var Ce = Io(P);
      Cr(Ce, function() {
        $0("Cannot construct " + P + " due to unbound types", [y]);
      }), b0([I, f, m], y ? [y] : [], function(T) {
        if (T = T[-219 * 33 + -1 * -5312 + 1915], y) var lt = T.ea, Ke = lt.ma;
        else Ke = Vt.prototype;
        T = fo(Ce, function() {
          if (Object.getPrototypeOf(this) !== W0) throw new m0("Use 'new' to construct " + P);
          if (void (1 * 743 + -1812 + 1069) === v0.la) throw new m0(P + " has no accessible constructor");
          var Vr = v0.la[arguments.length];
          if (void (-2532 * -3 + 4186 + -11782) === Vr) throw new m0("Tried to invoke ctor of " + P + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(v0.la).toString() + ") parameters instead!");
          return Vr.apply(this, arguments);
        });
        var Fe = {};
        Fe.value = T;
        var Ut = {};
        Ut.constructor = Fe;
        var W0 = Object.create(Ke, Ut);
        T.prototype = W0;
        var v0 = new qc(P, T, W0, q, lt, S, G, K);
        lt = new yt(P, v0, !(56 * -109 + -18 * -124 + 242 * 16), !(-9984 + 4073 * 2 + 1839)), Ke = new yt(P + "*", v0, !(-4900 + 1 * 4901), !(-783 * -7 + -3142 + -167 * 14));
        var Pr = new yt(P + " const*", v0, !(-3421 + -193 * 46 + 410 * 30), !(-2898 + -1337 * 1 + 4235)), wo = {};
        return wo.pointerType = Ke, wo.za = Pr, fr[I] = wo, hr(Ce, T), [lt, Ke, Pr];
      });
    }, g: function(I, f, m, y, w, S) {
      A(6684 + -1 * -2722 + -9406 < f);
      var k = Ar(f, m);
      w = Tt(y, w);
      var G = [S], Z = [];
      b0([], [I], function(K) {
        K = K[0];
        var P = "constructor " + K.name;
        if (void (184 * 50 + 127 * -53 + -2469) === K.ea.la && (K.ea.la = []), void (-211 * -18 + 7315 + -11113) !== K.ea.la[f - (-281 * -28 + -70 + -7797)]) throw new m0("Cannot register multiple constructors with identical number of parameters (" + (f - (-6306 * -1 + -20 * -152 + -9345)) + ") for class '" + K.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return K.ea.la[f - (1567 + 19 * -161 + 1 * 1493)] = function() {
          $0("Cannot construct " + K.name + " due to unbound types", k);
        }, b0([], k, function(V) {
          return K.ea.la[f - (1 * -6131 + 8340 + 2 * -1104)] = function() {
            arguments.length !== f - (16010 + -2287 * 7) && _(P + " called with " + arguments.length + " arguments, expected " + (f - (-1263 + 1 * -3385 + 4649))), Z.length = 2660 + 95 * -28, G.length = f;
            for (var q = -1 * -2313 + 468 * -15 + 1177 * 4; q < f; ++q) G[q] = V[q].toWireType(Z, arguments[q - (674 * 4 + 7894 + -10589)]);
            return q = w.apply(null, G), Fn(Z), V[-1075 + -4918 * -1 + -3843].fromWireType(q);
          }, [];
        }), [];
      });
    }, b: function(I, f, m, y, w, S, k, G, Z, K) {
      f = De(f), w = Tt(y, w), b0([], [I], function(P) {
        P = P[-7805 + -1 * 790 + -9 * -955];
        var V = P.name + "." + f, q = { get: function() {
          $0("Cannot access " + V + " due to unbound types", [m, k]);
        }, enumerable: !(4 * -1988 + 779 + 1 * 7173), configurable: !(-1715 + -4841 * -1 + -3126) };
        return Z ? q.set = function() {
          $0("Cannot access " + V + " due to unbound types", [m, k]);
        } : q.set = function() {
          _(V + " is a read-only property");
        }, Object.defineProperty(P.ea.ma, f, q), b0([], Z ? [m, k] : [m], function(Ce) {
          var T = Ce[0], lt = { get: function() {
            var Fe = yr(this, P, V + " getter");
            return T.fromWireType(w(S, Fe));
          }, enumerable: !(2309 + -3 * -3324 + 1 * -12281) };
          if (Z) {
            Z = Tt(G, Z);
            var Ke = Ce[2199 + -106 * -79 + -10572];
            lt.set = function(Fe) {
              var Ut = yr(this, P, V + " setter"), W0 = [];
              Z(K, Ut, Ke.toWireType(W0, Fe)), Fn(W0);
            };
          }
          return Object.defineProperty(P.ea.ma, f, lt), [];
        }), [];
      });
    }, v: function(I, f) {
      f = De(f), At(I, { name: f, fromWireType: function(m) {
        var y = Qe[m].value;
        return Ao(m), y;
      }, toWireType: function(m, y) {
        return A0(y);
      }, argPackAdvance: 8, readValueFromPointer: Nn, ka: null });
    }, m: function(I, f, m) {
      m = lo(m), f = De(f), At(I, { name: f, fromWireType: function(y) {
        return y;
      }, toWireType: function(y, w) {
        if (typeof w != "number" && typeof w != "boolean") throw new TypeError('Cannot convert "' + y0(w) + '" to ' + this.name);
        return w;
      }, argPackAdvance: 8, readValueFromPointer: xg(f, m), ka: null });
    }, c: function(I, f, m, y, w, S) {
      var k = Ar(f, m);
      I = De(I), w = Tt(y, w), Cr(I, function() {
        $0("Cannot call " + I + " due to unbound types", k);
      }, f - (-630 + 4 * -799 + 1 * 3827)), b0([], k, function(G) {
        var Z = I, K = I;
        G = [G[-7118 + 706 * -6 + 11354], null].concat(G.slice(1));
        var P = w, V = G.length;
        2 > V && _("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var q = G[-1 * 3923 + -2435 + 1 * 6359] !== null && !1, Ce = !1, T = 1; T < G.length; ++T) if (G[T] !== null && G[T].ka === void 0) {
          Ce = !(6099 + 5 * 1639 + 2 * -7147);
          break;
        }
        var lt = G[4435 * 2 + -4486 + -4384].name !== "void", Ke = "", Fe = "";
        for (T = 6139 + 154 * -50 + 1561; T < V - (-7262 + 45 * -68 + 5162 * 2); ++T) Ke += (4313 + 1 * -4313 !== T ? ", " : "") + "arg" + T, Fe += (45 * 188 + 2 * -3902 + -656 !== T ? ", " : "") + "arg" + T + "Wired";
        K = "return function " + Io(K) + "(" + Ke + `) {
if (arguments.length !== ` + (V - (-243 * 10 + -9869 + -1 * -12301)) + `) {
throwBindingError('function ` + K + " called with ' + arguments.length + ' arguments, expected " + (V - 2) + ` args!');
}
`, Ce && (K += `var destructors = [];
`);
        var Ut = Ce ? "destructors" : "null";
        for (Ke = "throwBindingError invoker fn runDestructors retType classParam".split(" "), P = [_, P, S, Fn, G[0], G[8324 + -107 * -7 + 72 * -126]], q && (K += "var thisWired = classParam.toWireType(" + Ut + `, this);
`), T = 1094 + -547 * 2; T < V - (914 + 19 * -48); ++T) K += "var arg" + T + "Wired = argType" + T + ".toWireType(" + Ut + ", arg" + T + "); // " + G[T + (-1459 + 1461 * 1)].name + `
`, Ke.push("argType" + T), P.push(G[T + (10868 + 6 * -1811)]);
        if (q && (Fe = "thisWired" + (9657 + -261 * 37 < Fe.length ? ", " : "") + Fe), K += (lt ? "var rv = " : "") + "invoker(fn" + (-9822 + 6 * 1637 < Fe.length ? ", " : "") + Fe + `);
`, Ce) K += `runDestructors(destructors);
`;
        else
          for (T = q ? -7045 * 1 + 2228 + 73 * 66 : 2; T < G.length; ++T) V = T === 1 ? "thisWired" : "arg" + (T - (-1 * -636 + -1629 * 2 + 2624)) + "Wired", G[T].ka !== null && (K += V + "_dtor(" + V + "); // " + G[T].name + `
`, Ke.push(V + "_dtor"), P.push(G[T].ka));
        return lt && (K += `var ret = retType.fromWireType(rv);
return ret;
`), Ke.push(K + `}
`), G = og(Ke).apply(null, P), hr(Z, G, f - (-193 * -26 + -8600 * -1 + -13617)), [];
      });
    }, e: function(I, f, m, y, w) {
      function S(K) {
        return K;
      }
      f = De(f), -(-2 * 3986 + -2635 + 442 * 24) === w && (w = 45169 * 112859 + -43153 * -99035 + -5076418231);
      var k = lo(m);
      if (-4614 + -47 * 185 + -13309 * -1 === y) {
        var G = 32 - 8 * m;
        S = function(K) {
          return K << G >>> G;
        };
      }
      var Z = -(2308 * -2 + 5821 * -1 + -307 * -34) != f.indexOf("unsigned");
      At(I, { name: f, fromWireType: S, toWireType: function(K, P) {
        if (typeof P != "number" && typeof P != "boolean") throw new TypeError('Cannot convert "' + y0(P) + '" to ' + this.name);
        if (P < y || P > w) throw new TypeError('Passing a number "' + y0(P) + '" from JS side to C/C++ side to an argument of type "' + f + '", which is outside the valid range [' + y + ", " + w + "]!");
        return Z ? P >>> 4211 * -2 + 4266 + -1 * -4156 : P | -2947 + -1 * 1478 + 4425;
      }, argPackAdvance: 8, readValueFromPointer: ig(f, k, -2 * -4507 + -1322 + -7692 !== y), ka: null });
    }, d: function(I, f, m) {
      function y(G) {
        G >>= -278 * 22 + 5 * -766 + 9948;
        var Z = it;
        return new w(ee, Z[G + (751 * 3 + 3915 + -6167)], Z[G]);
      }
      var w = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][f];
      m = De(m);
      var S = {};
      S.name = m, S.fromWireType = y, S.argPackAdvance = 8, S.readValueFromPointer = y;
      var k = {};
      k.Ea = !(3 * -1864 + 9309 + -3717), At(I, S, k);
    }, n: function(I, f) {
      f = De(f);
      var m = f === "std::string";
      At(I, { name: f, fromWireType: function(y) {
        var w = it[y >> 2];
        if (m) for (var S = y + (25 * 9 + 360 + 83 * -7), k = -2792 + 511 * 11 + 2829 * -1; k <= w; ++k) {
          var G = y + 4 + k;
          if (k == w || -6655 + 6287 * -1 + 12942 == Ze[G]) {
            if (S) {
              var Z = S, K = Ze, P = Z + (G - S);
              for (S = Z; K[S] && !(S >= P); ) ++S;
              if (38 * -188 + 1460 * 1 + -25 * -228 < S - Z && K.subarray && l) Z = l.decode(K.subarray(Z, S));
              else {
                for (P = ""; Z < S; ) {
                  var V = K[Z++];
                  if (V & 1227 + 1 * -9871 + -516 * -17) {
                    var q = K[Z++] & 63;
                    if (13560 + -6684 * 2 == (V & -1 * 8761 + 648 + 1 * 8337)) P += String.fromCharCode((V & -1 * -466 + 6068 + -6503) << 6 | q);
                    else {
                      var Ce = K[Z++] & 63;
                      V = 134 * -73 + 1 * 385 + 3 * 3207 == (V & 240) ? (V & 15) << -29 * -245 + 1 * 2217 + -490 * 19 | q << 2255 + 4219 * -1 + 1970 | Ce : (V & -14765 + -12 * -1231) << -5385 + 336 * -17 + -285 * -39 | q << -6938 + 367 * 5 + -55 * -93 | Ce << 1013 + -1 * 2087 + -135 * -8 | K[Z++] & 4 * -3 + -386 + 1 * 461, -89 * 107 + 73 * 1309 + -20498 > V ? P += String.fromCharCode(V) : (V -= 2287 * 25 + 115455 + -107094, P += String.fromCharCode(4 * -6918 + 97995 * -1 + -60321 * -3 | V >> 6312 + 6716 * 1 + -13018, -33814 + -5302 * -17 | V & -42 * -82 + 3314 + -5735));
                    }
                  } else P += String.fromCharCode(V);
                }
                Z = P;
              }
            } else Z = "";
            if (void (7817 + -10 * -951 + 1 * -17327) === T) var T = Z;
            else T += String.fromCharCode(9817 * -1 + 874 + 8943), T += Z;
            S = G + 1;
          }
        }
        else {
          for (T = Array(w), k = 281 * -10 + -167 * -42 + -4204; k < w; ++k) T[k] = String.fromCharCode(Ze[y + (-1203 * -7 + 4222 * -1 + -4195) + k]);
          T = T.join("");
        }
        return Wt(y), T;
      }, toWireType: function(y, w) {
        w instanceof ArrayBuffer && (w = new Uint8Array(w));
        var S = typeof w == "string";
        S || w instanceof Uint8Array || w instanceof Uint8ClampedArray || w instanceof Int8Array || _("Cannot pass non-string to std::string");
        var k = (m && S ? function() {
          for (var K = 0, P = 0; P < w.length; ++P) {
            var V = w.charCodeAt(P);
            -28931 + 209 * 403 <= V && 57343 >= V && (V = -24266 + -1 * -89802 + ((V & -1 * 8605 + 3355 + 6273) << 23 * 238 + 1 * -1315 + 9 * -461) | w.charCodeAt(++P) & -1 * -1689 + -4978 * 2 + 9290), 1 * -3463 + -28 * 37 + 4626 >= V ? ++K : K = 2047 >= V ? K + (-134 * -13 + 6337 * 1 + -8077) : 65535 >= V ? K + (6367 + 10 * 719 + -13554) : K + (-11 * 634 + -187 * -39 + -315);
          }
          return K;
        } : function() {
          return w.length;
        })(), G = jn(-2 * -244 + -2231 + -1 * -1747 + k + (5481 + -3128 * 1 + -3 * 784));
        if (it[G >> -6542 + 1 * 842 + 2851 * 2] = k, m && S) v(w, G + (-1359 + 9 * 991 + -7556), k + (365 + -26 * 14));
        else if (S) for (S = -12693 + 3 * 4231; S < k; ++S) {
          var Z = w.charCodeAt(S);
          8 * 587 + 442 + -1 * 4883 < Z && (Wt(G), _("String has UTF-16 code units that do not fit in 8 bits")), Ze[G + (3478 * 2 + -5 * 1751 + 1803) + S] = Z;
        }
        else
          for (S = -9412 + 724 * 13; S < k; ++S) Ze[G + (-7320 + -1 * -7324) + S] = w[S];
        return y !== null && y.push(Wt, G), G;
      }, argPackAdvance: 8, readValueFromPointer: Nn, ka: function(y) {
        Wt(y);
      } });
    }, j: function(I, f, m) {
      if (m = De(m), -5938 + 346 * 4 + 4556 === f) var y = j, w = M, S = J, k = function() {
        return jt;
      }, G = -3529 + -706 * -5;
      else -1 * 9327 + -316 * 6 + -109 * -103 === f && (y = H, w = oe, S = U, k = function() {
        return it;
      }, G = -2221 + -9 * -1107 + 774 * -10);
      At(I, { name: m, fromWireType: function(Z) {
        for (var K = it[Z >> -3591 * 1 + -1 * 9022 + -3 * -4205], P = k(), V, q = Z + 4, Ce = 477 * 20 + -9644 + -52 * -2; Ce <= K; ++Ce) {
          var T = Z + 4 + Ce * f;
          (Ce == K || -3 * -415 + 9e3 + -3 * 3415 == P[T >> G]) && (q = y(q, T - q), void (-5 * 1071 + -9410 + 14765) === V ? V = q : (V += String.fromCharCode(-9452 + 153 * 20 + 376 * 17), V += q), q = T + f);
        }
        return Wt(Z), V;
      }, toWireType: function(Z, K) {
        typeof K != "string" && _("Cannot pass non-string to C++ string type " + m);
        var P = S(K), V = jn(4 + P + f);
        return it[V >> 1822 + 4 * -244 + -2 * 422] = P >> G, w(K, V + (1205 + -2468 * -2 + -6137), P + f), Z !== null && Z.push(Wt, V), V;
      }, argPackAdvance: 8, readValueFromPointer: Nn, ka: function(Z) {
        Wt(Z);
      } });
    }, x: function(I, f) {
      f = De(f);
      var m = {};
      m.Qa = !(-17017 + -143 * -119), m.name = f, m.argPackAdvance = 0, m.fromWireType = function() {
      }, m.toWireType = function() {
      }, At(I, m);
    }, k: function(I, f, m) {
      I = yo(I), f = Br(f, "emval::as");
      var y = [], w = A0(y);
      return Be[m >> 418 + -88 * -92 + -8512] = w, f.toWireType(y, I);
    }, i: Ao, l: function(I, f) {
      return I = yo(I), f = yo(f), A0(I[f]);
    }, p: function(I) {
      var f = rg[I];
      return A0(void (19 * -167 + 6461 + -3288 * 1) === f ? De(I) : f);
    }, o: function(I) {
      Fn(Qe[I].value), Ao(I);
    }, y: function(I, f) {
      return I = Br(I, "_emval_take_value"), I = I.readValueFromPointer(f), A0(I);
    }, f: function() {
      Ue();
    }, q: function(I, f, m) {
      Ze.copyWithin(I, f, f + m);
    }, r: function(I) {
      I >>>= 663 * 9 + -2 * -164 + -6295;
      var f = Ze.length;
      if (2697732634 + 504603054 * 6 + -3688523 * 970 < I) return !(-3568 + -1 * 1607 + -5176 * -1);
      for (var m = 97 + -4 * 24; -1218 * 8 + -2029 + 11777 >= m; m *= -3656 + -18 * 345 + 9868) {
        var y = f * (1 + 0.2 / m);
        y = Math.min(y, I + (-1 * -138531649 + -13322 * -13523 + -218021759)), y = Math.max(-8586435 + 100507 * 151 + -10187094 * -1, I, y), 9 * 769 + -1 * -271 + -7192 < y % 65536 && (y += 29 * 3368 + 164 * 424 + -101672 - y % (-283 * 409 + 1 * 76743 + 5 * 20908));
        e: {
          try {
            C.grow(Math.min(12 * 309545567 + -3915992982 + 2348929826, y) - ee.byteLength + (-127565 * 1 + 6046 * 6 + 156824) >>> -6580 + 69 * 4 + 790 * 8), _0(C.buffer);
            var w = 4626 + -5 * 925;
            break e;
          } catch {
          }
          w = void (6885 + -1 * -8941 + -15826);
        }
        if (w) return !(-893 + -6 * 407 + 3335);
      }
      return !(151 * -43 + 8803 * 1 + -2309);
    }, s: function(I, f) {
      var m = 0;
      return kr().forEach(function(y, w) {
        var S = f + m;
        for (w = Be[I + 4 * w >> 8117 + -1 * -5331 + -13446] = S, S = -3 * 1993 + 195 * -5 + 6954; S < y.length; ++S) Te[w++ >> 771 * -3 + 7082 + -4769] = y.charCodeAt(S);
        Te[w >> 7270 + 907 * 9 + -15433] = 1 * -7517 + -4404 + -13 * -917, m += y.length + (421 * 17 + 2912 * -2 + -1332);
      }), 1021 * 3 + -1987 * 4 + -5 * -977;
    }, t: function(I, f) {
      var m = kr();
      Be[I >> -3 * 2294 + -3 * -753 + -125 * -37] = m.length;
      var y = -538 * 13 + 5160 + -917 * -2;
      return m.forEach(function(w) {
        y += w.length + (-1894 + 1 * -9786 + 11681);
      }), Be[f >> -648 * 4 + 7 * 174 + 43 * 32] = y, 7856 + -16 * 491;
    }, a: C };
    (function() {
      function I(k) {
        k = k.exports, k = Zr(k), t.asm = k, Ye--, t.monitorRunDependencies && t.monitorRunDependencies(Ye), -7857 + 81 * 97 == Ye && dt && (k = dt, dt = null, k());
      }
      function f(k) {
        I(k.instance);
      }
      function m(k) {
        return Jc().then(function(G) {
          return WebAssembly.instantiate(G, w);
        }).then(k, function(G) {
          p("failed to asynchronously prepare wasm: " + G), Ue(G);
        });
      }
      var y = {};
      y.a = ag;
      var w = y;
      if (Ye++, t.monitorRunDependencies && t.monitorRunDependencies(Ye), t.instantiateWasm) try {
        var S = t.instantiateWasm(w, I);
        return S = Zr(S);
      } catch (k) {
        return p("Module.instantiateWasm callback failed with error: " + k), !(1 * -1453 + 6529 + -5075);
      }
      return function() {
        if (u || typeof WebAssembly.instantiateStreaming != "function" || ut() || Mt("file://") || typeof fetch != "function") return m(f);
        var k = {};
        k.credentials = "same-origin", fetch(rt, k).then(function(G) {
          return WebAssembly.instantiateStreaming(G, w).then(f, function(Z) {
            return p("wasm streaming compile failed: " + Z), p("falling back to ArrayBuffer instantiation"), m(f);
          });
        });
      }(), {};
    })();
    var Kr = t.___wasm_call_ctors = function() {
      return (Kr = t.___wasm_call_ctors = t.asm.B).apply(null, arguments);
    }, jn = t._malloc = function() {
      return (jn = t._malloc = t.asm.C).apply(null, arguments);
    }, Wt = t._free = function() {
      return (Wt = t._free = t.asm.D).apply(null, arguments);
    }, Rr = t.___getTypeName = function() {
      return (Rr = t.___getTypeName = t.asm.E).apply(null, arguments);
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
    var Mn;
    dt = function I() {
      Mn || vo(), Mn || (dt = I);
    };
    function vo() {
      function I() {
        if (!Mn && (Mn = !(-3734 + 1867 * 2), t.calledRun = !(-665 + 289 * -17 + 5578), !b)) {
          if (Vn(He), Vn(J0), e(t), t.onRuntimeInitialized && t.onRuntimeInitialized(), t.postRun) for (typeof t.postRun == "function" && (t.postRun = [t.postRun]); t.postRun.length; ) {
            var f = t.postRun.shift();
            C0.unshift(f);
          }
          Vn(C0);
        }
      }
      if (!(-5787 + 2521 * 1 + -71 * -46 < Ye)) {
        if (t.preRun)
          for (typeof t.preRun == "function" && (t.preRun = [t.preRun]); t.preRun.length; ) p0();
        Vn(Pt), 34 * -122 + -652 * -3 + 2192 < Ye || (t.setStatus ? (t.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            t.setStatus("");
          }, -733 * -1 + 8829 + -9561), I();
        }, 1)) : I());
      }
    }
    if (t.run = vo, t.preInit)
      for (typeof t.preInit == "function" && (t.preInit = [t.preInit]); 0 < t.preInit.length; ) t.preInit.pop()();
    return vo(), o.ready;
  };
})();
class q1 {
  constructor(o, t) {
    D(this, "isDetectorInitialized", !1);
    D(this, "samVersion", null);
    D(this, "detection");
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
    D(this, "detectionRecord", []);
    D(this, "imagesWithTimestampForDuplicateDetection", new ac(Uu));
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: o, timestamp: t }) {
    const e = o.length / $u, n = e / 2, i = o.length / (-1 * -9326 + 7790 + -8557 * 2), r = await j1(o.slice(i - n, i + n)), a = {};
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
    D(this, "thresholds", null);
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
const Kc = Symbol("Comlink.proxy"), tI = Symbol("Comlink.endpoint"), nI = Symbol("Comlink.releaseProxy"), Yo = Symbol("Comlink.finalizer"), hx = Symbol("Comlink.thrown"), Rc = (x) => typeof x == "object" && x !== null || typeof x == "function", xI = {
  canHandle: (x) => Rc(x) && x[Kc],
  serialize(x) {
    const { port1: o, port2: t } = new MessageChannel();
    return Vc(x, o), [t, [t]];
  },
  deserialize(x) {
    return x.start(), Dc(x);
  }
}, oI = {
  canHandle: (x) => Rc(x) && hx in x,
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
}, Pc = /* @__PURE__ */ new Map([
  ["proxy", xI],
  ["throw", oI]
]);
function iI(x, o) {
  for (const t of x)
    if (o === t || t === "*" || t instanceof RegExp && t.test(o))
      return !0;
  return !1;
}
function Vc(x, o = globalThis, t = ["*"]) {
  o.addEventListener("message", function e(n) {
    if (!n || !n.data)
      return;
    if (!iI(t, n.origin)) {
      console.warn(`Invalid origin '${n.origin}' for comlink proxy`);
      return;
    }
    const { id: i, type: r, path: a } = Object.assign({ path: [] }, n.data), s = (n.data.argumentList || []).map(e0);
    let c;
    try {
      const d = a.slice(0, -1).reduce((p, u) => p[u], x), g = a.reduce((p, u) => p[u], x);
      switch (r) {
        case "GET":
          c = g;
          break;
        case "SET":
          d[a.slice(-1)[0]] = e0(n.data.value), c = !0;
          break;
        case "APPLY":
          c = g.apply(d, s);
          break;
        case "CONSTRUCT":
          {
            const p = new g(...s);
            c = dI(p);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: p, port2: u } = new MessageChannel();
            Vc(x, u), c = gI(p, [p]);
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
      const [g, p] = jx(d);
      o.postMessage(Object.assign(Object.assign({}, g), { id: i }), p), r === "RELEASE" && (o.removeEventListener("message", e), Tc(o), Yo in x && typeof x[Yo] == "function" && x[Yo]());
    }).catch((d) => {
      const [g, p] = jx({
        value: new TypeError("Unserializable return value"),
        [hx]: 0
      });
      o.postMessage(Object.assign(Object.assign({}, g), { id: i }), p);
    });
  }), o.start && o.start();
}
function rI(x) {
  return x.constructor.name === "MessagePort";
}
function Tc(x) {
  rI(x) && x.close();
}
function Dc(x, o) {
  return Oi(x, [], o);
}
function nx(x) {
  if (x)
    throw new Error("Proxy has been released and is not useable");
}
function Ec(x) {
  return k0(x, {
    type: "RELEASE"
  }).then(() => {
    Tc(x);
  });
}
const Fx = /* @__PURE__ */ new WeakMap(), Xx = "FinalizationRegistry" in globalThis && new FinalizationRegistry((x) => {
  const o = (Fx.get(x) || 0) - 1;
  Fx.set(x, o), o === 0 && Ec(x);
});
function aI(x, o) {
  const t = (Fx.get(o) || 0) + 1;
  Fx.set(o, t), Xx && Xx.register(x, o, x);
}
function sI(x) {
  Xx && Xx.unregister(x);
}
function Oi(x, o = [], t = function() {
}) {
  let e = !1;
  const n = new Proxy(t, {
    get(i, r) {
      if (nx(e), r === nI)
        return () => {
          sI(n), Ec(x), e = !0;
        };
      if (r === "then") {
        if (o.length === 0)
          return { then: () => n };
        const a = k0(x, {
          type: "GET",
          path: o.map((s) => s.toString())
        }).then(e0);
        return a.then.bind(a);
      }
      return Oi(x, [...o, r]);
    },
    set(i, r, a) {
      nx(e);
      const [s, c] = jx(a);
      return k0(x, {
        type: "SET",
        path: [...o, r].map((d) => d.toString()),
        value: s
      }, c).then(e0);
    },
    apply(i, r, a) {
      nx(e);
      const s = o[o.length - 1];
      if (s === tI)
        return k0(x, {
          type: "ENDPOINT"
        }).then(e0);
      if (s === "bind")
        return Oi(x, o.slice(0, -1));
      const [c, d] = Na(a);
      return k0(x, {
        type: "APPLY",
        path: o.map((g) => g.toString()),
        argumentList: c
      }, d).then(e0);
    },
    construct(i, r) {
      nx(e);
      const [a, s] = Na(r);
      return k0(x, {
        type: "CONSTRUCT",
        path: o.map((c) => c.toString()),
        argumentList: a
      }, s).then(e0);
    }
  });
  return aI(n, x), n;
}
function cI(x) {
  return Array.prototype.concat.apply([], x);
}
function Na(x) {
  const o = x.map(jx);
  return [o.map((t) => t[0]), cI(o.map((t) => t[1]))];
}
const Lc = /* @__PURE__ */ new WeakMap();
function gI(x, o) {
  return Lc.set(x, o), x;
}
function dI(x) {
  return Object.assign(x, { [Kc]: !0 });
}
function jx(x) {
  for (const [o, t] of Pc)
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
    Lc.get(x) || []
  ];
}
function e0(x) {
  switch (x.type) {
    case "HANDLER":
      return Pc.get(x.name).deserialize(x.value);
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
const Nc = "dmFyIHllID0gT2JqZWN0LmRlZmluZVByb3BlcnR5Owp2YXIganQgPSAoYSkgPT4gewogIHRocm93IFR5cGVFcnJvcihhKTsKfTsKdmFyIHZlID0gKGEsIG8sIGUpID0+IG8gaW4gYSA/IHllKGEsIG8sIHsgZW51bWVyYWJsZTogITAsIGNvbmZpZ3VyYWJsZTogITAsIHdyaXRhYmxlOiAhMCwgdmFsdWU6IGUgfSkgOiBhW29dID0gZTsKdmFyIHFuID0gKGEsIG8sIGUpID0+IHZlKGEsIHR5cGVvZiBvICE9ICJzeW1ib2wiID8gbyArICIiIDogbywgZSksIE50ID0gKGEsIG8sIGUpID0+IG8uaGFzKGEpIHx8IGp0KCJDYW5ub3QgIiArIGUpOwp2YXIgSCA9IChhLCBvLCBlKSA9PiAoTnQoYSwgbywgInJlYWQgZnJvbSBwcml2YXRlIGZpZWxkIiksIGUgPyBlLmNhbGwoYSkgOiBvLmdldChhKSksIFduID0gKGEsIG8sIGUpID0+IG8uaGFzKGEpID8ganQoIkNhbm5vdCBhZGQgdGhlIHNhbWUgcHJpdmF0ZSBtZW1iZXIgbW9yZSB0aGFuIG9uY2UiKSA6IG8gaW5zdGFuY2VvZiBXZWFrU2V0ID8gby5hZGQoYSkgOiBvLnNldChhLCBlKSwga24gPSAoYSwgbywgZSwgeSkgPT4gKE50KGEsIG8sICJ3cml0ZSB0byBwcml2YXRlIGZpZWxkIiksIHkgPyB5LmNhbGwoYSwgZSkgOiBvLnNldChhLCBlKSwgZSk7CmNvbnN0IEh0ID0gewogIHNpbWQ6ICJzYW1fc2ltZC53YXNtIiwKICBzYW06ICJzYW0ud2FzbSIKfSwgZ2UgPSBhc3luYyAoKSA9PiBXZWJBc3NlbWJseS52YWxpZGF0ZShuZXcgVWludDhBcnJheShbMCwgOTcsIDExNSwgMTA5LCAxLCAwLCAwLCAwLCAxLCA1LCAxLCA5NiwgMCwgMSwgMTIzLCAzLCAyLCAxLCAwLCAxMCwgMTAsIDEsIDgsIDAsIDY1LCAwLCAyNTMsIDE1LCAyNTMsIDk4LCAxMV0pKTsKdmFyIHdlID0gZnVuY3Rpb24oKSB7CiAgdmFyIGEgPSB0eXBlb2YgZG9jdW1lbnQgPCAidSIgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdCA/IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjIDogdm9pZCAwOwogIHJldHVybiBmdW5jdGlvbihvKSB7CiAgICBvID0gbyB8fCB7fTsKICAgIHZhciBlOwogICAgZSB8fCAoZSA9IHR5cGVvZiBvIDwgInUiID8gbyA6IHt9KTsKICAgIHZhciB5LCBnOwogICAgZS5yZWFkeSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgeSA9IG4sIGcgPSB0OwogICAgfSk7CiAgICB2YXIgQyA9IHt9LCBBOwogICAgZm9yIChBIGluIGUpIGUuaGFzT3duUHJvcGVydHkoQSkgJiYgKENbQV0gPSBlW0FdKTsKICAgIHZhciBiID0gIi4vdGhpcy5wcm9ncmFtIiwgTyA9ICExLCBFID0gITE7CiAgICBPID0gdHlwZW9mIHdpbmRvdyA9PSAib2JqZWN0IiwgRSA9IHR5cGVvZiBpbXBvcnRTY3JpcHRzID09ICJmdW5jdGlvbiI7CiAgICB2YXIgXyA9ICIiLCBSOwogICAgKE8gfHwgRSkgJiYgKEUgPyBfID0gc2VsZi5sb2NhdGlvbi5ocmVmIDogZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiAoXyA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjKSwgYSAmJiAoXyA9IGEpLCBfLmluZGV4T2YoImJsb2I6IikgIT09IDAgPyBfID0gXy5zdWJzdHIoMCwgXy5sYXN0SW5kZXhPZigiLyIpICsgMSkgOiBfID0gIiIsIEUgJiYgKFIgPSBmdW5jdGlvbihuKSB7CiAgICAgIHZhciB0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7CiAgICAgIHJldHVybiB0Lm9wZW4oIkdFVCIsIG4sICExKSwgdC5yZXNwb25zZVR5cGUgPSAiYXJyYXlidWZmZXIiLCB0LnNlbmQobnVsbCksIG5ldyBVaW50OEFycmF5KHQucmVzcG9uc2UpOwogICAgfSkpOwogICAgdmFyIFAgPSBlLnByaW50RXJyIHx8IGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpOwogICAgZm9yIChBIGluIEMpIEMuaGFzT3duUHJvcGVydHkoQSkgJiYgKGVbQV0gPSBDW0FdKTsKICAgIEMgPSBudWxsLCBlLnRoaXNQcm9ncmFtICYmIChiID0gZS50aGlzUHJvZ3JhbSk7CiAgICB2YXIgTDsKICAgIGUud2FzbUJpbmFyeSAmJiAoTCA9IGUud2FzbUJpbmFyeSksIGUubm9FeGl0UnVudGltZSAmJiBlLm5vRXhpdFJ1bnRpbWUsIHR5cGVvZiBXZWJBc3NlbWJseSAhPSAib2JqZWN0IiAmJiBmbigibm8gbmF0aXZlIHdhc20gc3VwcG9ydCBkZXRlY3RlZCIpOwogICAgdmFyIFksIE5uID0gITE7CiAgICBmdW5jdGlvbiBydChuKSB7CiAgICAgIG4gfHwgZm4oIkFzc2VydGlvbiBmYWlsZWQ6IHVuZGVmaW5lZCIpOwogICAgfQogICAgdmFyIGl0ID0gdHlwZW9mIFRleHREZWNvZGVyIDwgInUiID8gbmV3IFRleHREZWNvZGVyKCJ1dGY4IikgOiB2b2lkIDA7CiAgICBmdW5jdGlvbiBZdChuLCB0LCByKSB7CiAgICAgIHZhciBpID0gSTsKICAgICAgaWYgKDAgPCByKSB7CiAgICAgICAgciA9IHQgKyByIC0gMTsKICAgICAgICBmb3IgKHZhciBzID0gMDsgcyA8IG4ubGVuZ3RoOyArK3MpIHsKICAgICAgICAgIHZhciB1ID0gbi5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgaWYgKDU1Mjk2IDw9IHUgJiYgNTczNDMgPj0gdSkgewogICAgICAgICAgICB2YXIgYyA9IG4uY2hhckNvZGVBdCgrK3MpOwogICAgICAgICAgICB1ID0gNjU1MzYgKyAoKHUgJiAxMDIzKSA8PCAxMCkgfCBjICYgMTAyMzsKICAgICAgICAgIH0KICAgICAgICAgIGlmICgxMjcgPj0gdSkgewogICAgICAgICAgICBpZiAodCA+PSByKSBicmVhazsKICAgICAgICAgICAgaVt0KytdID0gdTsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIGlmICgyMDQ3ID49IHUpIHsKICAgICAgICAgICAgICBpZiAodCArIDEgPj0gcikgYnJlYWs7CiAgICAgICAgICAgICAgaVt0KytdID0gMTkyIHwgdSA+PiA2OwogICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgIGlmICg2NTUzNSA+PSB1KSB7CiAgICAgICAgICAgICAgICBpZiAodCArIDIgPj0gcikgYnJlYWs7CiAgICAgICAgICAgICAgICBpW3QrK10gPSAyMjQgfCB1ID4+IDEyOwogICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICBpZiAodCArIDMgPj0gcikgYnJlYWs7CiAgICAgICAgICAgICAgICBpW3QrK10gPSAyNDAgfCB1ID4+IDE4LCBpW3QrK10gPSAxMjggfCB1ID4+IDEyICYgNjM7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIGlbdCsrXSA9IDEyOCB8IHUgPj4gNiAmIDYzOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGlbdCsrXSA9IDEyOCB8IHUgJiA2MzsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgaVt0XSA9IDA7CiAgICAgIH0KICAgIH0KICAgIHZhciBhdCA9IHR5cGVvZiBUZXh0RGVjb2RlciA8ICJ1IiA/IG5ldyBUZXh0RGVjb2RlcigidXRmLTE2bGUiKSA6IHZvaWQgMDsKICAgIGZ1bmN0aW9uIFp0KG4sIHQpIHsKICAgICAgZm9yICh2YXIgciA9IG4gPj4gMSwgaSA9IHIgKyB0IC8gMjsgIShyID49IGkpICYmIGduW3JdOyApICsrcjsKICAgICAgaWYgKHIgPDw9IDEsIDMyIDwgciAtIG4gJiYgYXQpIHJldHVybiBhdC5kZWNvZGUoSS5zdWJhcnJheShuLCByKSk7CiAgICAgIGZvciAociA9IDAsIGkgPSAiIjsgOyApIHsKICAgICAgICB2YXIgcyA9IHRuW24gKyAyICogciA+PiAxXTsKICAgICAgICBpZiAocyA9PSAwIHx8IHIgPT0gdCAvIDIpIHJldHVybiBpOwogICAgICAgICsrciwgaSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHMpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBKdChuLCB0LCByKSB7CiAgICAgIGlmIChyID09PSB2b2lkIDAgJiYgKHIgPSAyMTQ3NDgzNjQ3KSwgMiA+IHIpIHJldHVybiAwOwogICAgICByIC09IDI7CiAgICAgIHZhciBpID0gdDsKICAgICAgciA9IHIgPCAyICogbi5sZW5ndGggPyByIC8gMiA6IG4ubGVuZ3RoOwogICAgICBmb3IgKHZhciBzID0gMDsgcyA8IHI7ICsrcykgdG5bdCA+PiAxXSA9IG4uY2hhckNvZGVBdChzKSwgdCArPSAyOwogICAgICByZXR1cm4gdG5bdCA+PiAxXSA9IDAsIHQgLSBpOwogICAgfQogICAgZnVuY3Rpb24gS3QobikgewogICAgICByZXR1cm4gMiAqIG4ubGVuZ3RoOwogICAgfQogICAgZnVuY3Rpb24gUXQobiwgdCkgewogICAgICBmb3IgKHZhciByID0gMCwgaSA9ICIiOyAhKHIgPj0gdCAvIDQpOyApIHsKICAgICAgICB2YXIgcyA9IFNbbiArIDQgKiByID4+IDJdOwogICAgICAgIGlmIChzID09IDApIGJyZWFrOwogICAgICAgICsrciwgNjU1MzYgPD0gcyA/IChzIC09IDY1NTM2LCBpICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTYgfCBzID4+IDEwLCA1NjMyMCB8IHMgJiAxMDIzKSkgOiBpICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocyk7CiAgICAgIH0KICAgICAgcmV0dXJuIGk7CiAgICB9CiAgICBmdW5jdGlvbiBYdChuLCB0LCByKSB7CiAgICAgIGlmIChyID09PSB2b2lkIDAgJiYgKHIgPSAyMTQ3NDgzNjQ3KSwgNCA+IHIpIHJldHVybiAwOwogICAgICB2YXIgaSA9IHQ7CiAgICAgIHIgPSBpICsgciAtIDQ7CiAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgbi5sZW5ndGg7ICsrcykgewogICAgICAgIHZhciB1ID0gbi5jaGFyQ29kZUF0KHMpOwogICAgICAgIGlmICg1NTI5NiA8PSB1ICYmIDU3MzQzID49IHUpIHsKICAgICAgICAgIHZhciBjID0gbi5jaGFyQ29kZUF0KCsrcyk7CiAgICAgICAgICB1ID0gNjU1MzYgKyAoKHUgJiAxMDIzKSA8PCAxMCkgfCBjICYgMTAyMzsKICAgICAgICB9CiAgICAgICAgaWYgKFNbdCA+PiAyXSA9IHUsIHQgKz0gNCwgdCArIDQgPiByKSBicmVhazsKICAgICAgfQogICAgICByZXR1cm4gU1t0ID4+IDJdID0gMCwgdCAtIGk7CiAgICB9CiAgICBmdW5jdGlvbiBxdChuKSB7CiAgICAgIGZvciAodmFyIHQgPSAwLCByID0gMDsgciA8IG4ubGVuZ3RoOyArK3IpIHsKICAgICAgICB2YXIgaSA9IG4uY2hhckNvZGVBdChyKTsKICAgICAgICA1NTI5NiA8PSBpICYmIDU3MzQzID49IGkgJiYgKytyLCB0ICs9IDQ7CiAgICAgIH0KICAgICAgcmV0dXJuIHQ7CiAgICB9CiAgICB2YXIgbm4sIFosIEksIHRuLCBnbiwgUywgVSwgb3QsIHN0OwogICAgZnVuY3Rpb24gdXQobikgewogICAgICBubiA9IG4sIGUuSEVBUDggPSBaID0gbmV3IEludDhBcnJheShuKSwgZS5IRUFQMTYgPSB0biA9IG5ldyBJbnQxNkFycmF5KG4pLCBlLkhFQVAzMiA9IFMgPSBuZXcgSW50MzJBcnJheShuKSwgZS5IRUFQVTggPSBJID0gbmV3IFVpbnQ4QXJyYXkobiksIGUuSEVBUFUxNiA9IGduID0gbmV3IFVpbnQxNkFycmF5KG4pLCBlLkhFQVBVMzIgPSBVID0gbmV3IFVpbnQzMkFycmF5KG4pLCBlLkhFQVBGMzIgPSBvdCA9IG5ldyBGbG9hdDMyQXJyYXkobiksIGUuSEVBUEY2NCA9IHN0ID0gbmV3IEZsb2F0NjRBcnJheShuKTsKICAgIH0KICAgIHZhciBsdCA9IGUuSU5JVElBTF9NRU1PUlkgfHwgMTY3NzcyMTY7CiAgICBlLndhc21NZW1vcnkgPyBZID0gZS53YXNtTWVtb3J5IDogWSA9IG5ldyBXZWJBc3NlbWJseS5NZW1vcnkoeyBpbml0aWFsOiBsdCAvIDY1NTM2LCBtYXhpbXVtOiAzMjc2OCB9KSwgWSAmJiAobm4gPSBZLmJ1ZmZlciksIGx0ID0gbm4uYnl0ZUxlbmd0aCwgdXQobm4pOwogICAgdmFyIGN0ID0gW10sIGZ0ID0gW10sIG5lID0gW10sIGR0ID0gW107CiAgICBmdW5jdGlvbiB0ZSgpIHsKICAgICAgdmFyIG4gPSBlLnByZVJ1bi5zaGlmdCgpOwogICAgICBjdC51bnNoaWZ0KG4pOwogICAgfQogICAgdmFyIEogPSAwLCBjbiA9IG51bGw7CiAgICBlLnByZWxvYWRlZEltYWdlcyA9IHt9LCBlLnByZWxvYWRlZEF1ZGlvcyA9IHt9OwogICAgZnVuY3Rpb24gZm4obikgewogICAgICB0aHJvdyBlLm9uQWJvcnQgJiYgZS5vbkFib3J0KG4pLCBQKG4pLCBObiA9ICEwLCBuID0gbmV3IFdlYkFzc2VtYmx5LlJ1bnRpbWVFcnJvcigiYWJvcnQoIiArIG4gKyAiKS4gQnVpbGQgd2l0aCAtcyBBU1NFUlRJT05TPTEgZm9yIG1vcmUgaW5mby4iKSwgZyhuKSwgbjsKICAgIH0KICAgIGZ1bmN0aW9uIEhuKG4pIHsKICAgICAgdmFyIHQgPSBLOwogICAgICByZXR1cm4gU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoID8gdC5zdGFydHNXaXRoKG4pIDogdC5pbmRleE9mKG4pID09PSAwOwogICAgfQogICAgZnVuY3Rpb24gaHQoKSB7CiAgICAgIHJldHVybiBIbigiZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LCIpOwogICAgfQogICAgdmFyIEsgPSAic2FtLndhc20iOwogICAgaWYgKCFodCgpKSB7CiAgICAgIHZhciBwdCA9IEs7CiAgICAgIEsgPSBlLmxvY2F0ZUZpbGUgPyBlLmxvY2F0ZUZpbGUocHQsIF8pIDogXyArIHB0OwogICAgfQogICAgZnVuY3Rpb24gbXQoKSB7CiAgICAgIHRyeSB7CiAgICAgICAgaWYgKEwpIHJldHVybiBuZXcgVWludDhBcnJheShMKTsKICAgICAgICBpZiAoUikgcmV0dXJuIFIoSyk7CiAgICAgICAgdGhyb3cgImJvdGggYXN5bmMgYW5kIHN5bmMgZmV0Y2hpbmcgb2YgdGhlIHdhc20gZmFpbGVkIjsKICAgICAgfSBjYXRjaCAobikgewogICAgICAgIGZuKG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBlZSgpIHsKICAgICAgcmV0dXJuIEwgfHwgIU8gJiYgIUUgfHwgdHlwZW9mIGZldGNoICE9ICJmdW5jdGlvbiIgfHwgSG4oImZpbGU6Ly8iKSA/IFByb21pc2UucmVzb2x2ZSgpLnRoZW4obXQpIDogZmV0Y2goSywgeyBjcmVkZW50aWFsczogInNhbWUtb3JpZ2luIiB9KS50aGVuKGZ1bmN0aW9uKG4pIHsKICAgICAgICBpZiAoIW4ub2spIHRocm93ICJmYWlsZWQgdG8gbG9hZCB3YXNtIGJpbmFyeSBmaWxlIGF0ICciICsgSyArICInIjsKICAgICAgICByZXR1cm4gbi5hcnJheUJ1ZmZlcigpOwogICAgICB9KS5jYXRjaChmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gbXQoKTsKICAgICAgfSk7CiAgICB9CiAgICBmdW5jdGlvbiB3bihuKSB7CiAgICAgIGZvciAoOyAwIDwgbi5sZW5ndGg7ICkgewogICAgICAgIHZhciB0ID0gbi5zaGlmdCgpOwogICAgICAgIGlmICh0eXBlb2YgdCA9PSAiZnVuY3Rpb24iKSB0KGUpOwogICAgICAgIGVsc2UgewogICAgICAgICAgdmFyIHIgPSB0LkJhOwogICAgICAgICAgdHlwZW9mIHIgPT0gIm51bWJlciIgPyB0LnRhID09PSB2b2lkIDAgPyBVbigidiIsIHIpKCkgOiBVbigidmkiLCByKSh0LnRhKSA6IHIodC50YSA9PT0gdm9pZCAwID8gbnVsbCA6IHQudGEpOwogICAgICAgIH0KICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gVW4obiwgdCkgewogICAgICB2YXIgciA9IFtdOwogICAgICByZXR1cm4gZnVuY3Rpb24oKSB7CiAgICAgICAgci5sZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOwogICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSByW2ldID0gYXJndW1lbnRzW2ldOwogICAgICAgIHJldHVybiByICYmIHIubGVuZ3RoID8gZVsiZHluQ2FsbF8iICsgbl0uYXBwbHkobnVsbCwgW3RdLmNvbmNhdChyKSkgOiBlWyJkeW5DYWxsXyIgKyBuXS5jYWxsKG51bGwsIHQpOwogICAgICB9OwogICAgfQogICAgZnVuY3Rpb24gcmUobikgewogICAgICB0aGlzLmRhID0gbiAtIDE2LCB0aGlzLk9hID0gZnVuY3Rpb24odCkgewogICAgICAgIFNbdGhpcy5kYSArIDggPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLkxhID0gZnVuY3Rpb24odCkgewogICAgICAgIFNbdGhpcy5kYSArIDAgPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLk1hID0gZnVuY3Rpb24oKSB7CiAgICAgICAgU1t0aGlzLmRhICsgNCA+PiAyXSA9IDA7CiAgICAgIH0sIHRoaXMuS2EgPSBmdW5jdGlvbigpIHsKICAgICAgICBaW3RoaXMuZGEgKyAxMiA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuTmEgPSBmdW5jdGlvbigpIHsKICAgICAgICBaW3RoaXMuZGEgKyAxMyA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuRmEgPSBmdW5jdGlvbih0LCByKSB7CiAgICAgICAgdGhpcy5PYSh0KSwgdGhpcy5MYShyKSwgdGhpcy5NYSgpLCB0aGlzLkthKCksIHRoaXMuTmEoKTsKICAgICAgfTsKICAgIH0KICAgIGZ1bmN0aW9uIEFuKCkgewogICAgICByZXR1cm4gMCA8IEFuLnhhOwogICAgfQogICAgZnVuY3Rpb24gem4obikgewogICAgICBzd2l0Y2ggKG4pIHsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICByZXR1cm4gMDsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIDQ6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlIDg6CiAgICAgICAgICByZXR1cm4gMzsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biB0eXBlIHNpemU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgdmFyIHl0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gVyhuKSB7CiAgICAgIGZvciAodmFyIHQgPSAiIjsgSVtuXTsgKSB0ICs9IHl0W0lbbisrXV07CiAgICAgIHJldHVybiB0OwogICAgfQogICAgdmFyIGVuID0ge30sIFEgPSB7fSwgX24gPSB7fTsKICAgIGZ1bmN0aW9uIEJuKG4pIHsKICAgICAgaWYgKG4gPT09IHZvaWQgMCkgcmV0dXJuICJfdW5rbm93biI7CiAgICAgIG4gPSBuLnJlcGxhY2UoL1teYS16QS1aMC05X10vZywgIiQiKTsKICAgICAgdmFyIHQgPSBuLmNoYXJDb2RlQXQoMCk7CiAgICAgIHJldHVybiA0OCA8PSB0ICYmIDU3ID49IHQgPyAiXyIgKyBuIDogbjsKICAgIH0KICAgIGZ1bmN0aW9uIERuKG4sIHQpIHsKICAgICAgcmV0dXJuIG4gPSBCbihuKSwgbmV3IEZ1bmN0aW9uKCJib2R5IiwgInJldHVybiBmdW5jdGlvbiAiICsgbiArIGAoKSB7CiAgICAidXNlIHN0cmljdCI7ICAgIHJldHVybiBib2R5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7Cn07CmApKHQpOwogICAgfQogICAgZnVuY3Rpb24gVm4obikgewogICAgICB2YXIgdCA9IEVycm9yLCByID0gRG4obiwgZnVuY3Rpb24oaSkgewogICAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMubWVzc2FnZSA9IGksIGkgPSBFcnJvcihpKS5zdGFjaywgaSAhPT0gdm9pZCAwICYmICh0aGlzLnN0YWNrID0gdGhpcy50b1N0cmluZygpICsgYApgICsgaS5yZXBsYWNlKC9eRXJyb3IoOlteXG5dKik/XG4vLCAiIikpOwogICAgICB9KTsKICAgICAgcmV0dXJuIHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSksIHIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gciwgci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlID09PSB2b2lkIDAgPyB0aGlzLm5hbWUgOiB0aGlzLm5hbWUgKyAiOiAiICsgdGhpcy5tZXNzYWdlOwogICAgICB9LCByOwogICAgfQogICAgdmFyIHJuID0gdm9pZCAwOwogICAgZnVuY3Rpb24gdihuKSB7CiAgICAgIHRocm93IG5ldyBybihuKTsKICAgIH0KICAgIHZhciB2dCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIENuKG4pIHsKICAgICAgdGhyb3cgbmV3IHZ0KG4pOwogICAgfQogICAgZnVuY3Rpb24gYW4obiwgdCwgcikgewogICAgICBmdW5jdGlvbiBpKGwpIHsKICAgICAgICBsID0gcihsKSwgbC5sZW5ndGggIT09IG4ubGVuZ3RoICYmIENuKCJNaXNtYXRjaGVkIHR5cGUgY29udmVydGVyIGNvdW50Iik7CiAgICAgICAgZm9yICh2YXIgcCA9IDA7IHAgPCBuLmxlbmd0aDsgKytwKSB6KG5bcF0sIGxbcF0pOwogICAgICB9CiAgICAgIG4uZm9yRWFjaChmdW5jdGlvbihsKSB7CiAgICAgICAgX25bbF0gPSB0OwogICAgICB9KTsKICAgICAgdmFyIHMgPSBBcnJheSh0Lmxlbmd0aCksIHUgPSBbXSwgYyA9IDA7CiAgICAgIHQuZm9yRWFjaChmdW5jdGlvbihsLCBwKSB7CiAgICAgICAgUS5oYXNPd25Qcm9wZXJ0eShsKSA/IHNbcF0gPSBRW2xdIDogKHUucHVzaChsKSwgZW4uaGFzT3duUHJvcGVydHkobCkgfHwgKGVuW2xdID0gW10pLCBlbltsXS5wdXNoKGZ1bmN0aW9uKCkgewogICAgICAgICAgc1twXSA9IFFbbF0sICsrYywgYyA9PT0gdS5sZW5ndGggJiYgaShzKTsKICAgICAgICB9KSk7CiAgICAgIH0pLCB1Lmxlbmd0aCA9PT0gMCAmJiBpKHMpOwogICAgfQogICAgZnVuY3Rpb24geihuLCB0LCByKSB7CiAgICAgIGlmIChyID0gciB8fCB7fSwgISgiYXJnUGFja0FkdmFuY2UiIGluIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCJyZWdpc3RlclR5cGUgcmVnaXN0ZXJlZEluc3RhbmNlIHJlcXVpcmVzIGFyZ1BhY2tBZHZhbmNlIik7CiAgICAgIHZhciBpID0gdC5uYW1lOwogICAgICBpZiAobiB8fCB2KCd0eXBlICInICsgaSArICciIG11c3QgaGF2ZSBhIHBvc2l0aXZlIGludGVnZXIgdHlwZWlkIHBvaW50ZXInKSwgUS5oYXNPd25Qcm9wZXJ0eShuKSkgewogICAgICAgIGlmIChyLkVhKSByZXR1cm47CiAgICAgICAgdigiQ2Fubm90IHJlZ2lzdGVyIHR5cGUgJyIgKyBpICsgIicgdHdpY2UiKTsKICAgICAgfQogICAgICBRW25dID0gdCwgZGVsZXRlIF9uW25dLCBlbi5oYXNPd25Qcm9wZXJ0eShuKSAmJiAodCA9IGVuW25dLCBkZWxldGUgZW5bbl0sIHQuZm9yRWFjaChmdW5jdGlvbihzKSB7CiAgICAgICAgcygpOwogICAgICB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiBpZShuKSB7CiAgICAgIHJldHVybiB7IGNvdW50OiBuLmNvdW50LCBvYTogbi5vYSwgcGE6IG4ucGEsIGRhOiBuLmRhLCBmYTogbi5mYSwgZ2E6IG4uZ2EsIGhhOiBuLmhhIH07CiAgICB9CiAgICBmdW5jdGlvbiBHbihuKSB7CiAgICAgIHYobi5BLmZhLmVhLm5hbWUgKyAiIGluc3RhbmNlIGFscmVhZHkgZGVsZXRlZCIpOwogICAgfQogICAgdmFyICRuID0gITE7CiAgICBmdW5jdGlvbiBndCgpIHsKICAgIH0KICAgIGZ1bmN0aW9uIHd0KG4pIHsKICAgICAgLS1uLmNvdW50LnZhbHVlLCBuLmNvdW50LnZhbHVlID09PSAwICYmIChuLmdhID8gbi5oYS5uYShuLmdhKSA6IG4uZmEuZWEubmEobi5kYSkpOwogICAgfQogICAgZnVuY3Rpb24gZG4obikgewogICAgICByZXR1cm4gdHlwZW9mIEZpbmFsaXphdGlvbkdyb3VwID4gInUiID8gKGRuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiB0OwogICAgICB9LCBuKSA6ICgkbiA9IG5ldyBGaW5hbGl6YXRpb25Hcm91cChmdW5jdGlvbih0KSB7CiAgICAgICAgZm9yICh2YXIgciA9IHQubmV4dCgpOyAhci5kb25lOyByID0gdC5uZXh0KCkpIHIgPSByLnZhbHVlLCByLmRhID8gd3QocikgOiBjb25zb2xlLndhcm4oIm9iamVjdCBhbHJlYWR5IGRlbGV0ZWQ6ICIgKyByLmRhKTsKICAgICAgfSksIGRuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiAkbi5yZWdpc3Rlcih0LCB0LkEsIHQuQSksIHQ7CiAgICAgIH0sIGd0ID0gZnVuY3Rpb24odCkgewogICAgICAgICRuLnVucmVnaXN0ZXIodC5BKTsKICAgICAgfSwgZG4obikpOwogICAgfQogICAgdmFyIGhuID0gdm9pZCAwLCBwbiA9IFtdOwogICAgZnVuY3Rpb24gWW4oKSB7CiAgICAgIGZvciAoOyBwbi5sZW5ndGg7ICkgewogICAgICAgIHZhciBuID0gcG4ucG9wKCk7CiAgICAgICAgbi5BLm9hID0gITEsIG4uZGVsZXRlKCk7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIFYoKSB7CiAgICB9CiAgICB2YXIgQXQgPSB7fTsKICAgIGZ1bmN0aW9uIGFlKG4sIHQpIHsKICAgICAgdmFyIHIgPSBlOwogICAgICBpZiAocltuXS5qYSA9PT0gdm9pZCAwKSB7CiAgICAgICAgdmFyIGkgPSByW25dOwogICAgICAgIHJbbl0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiByW25dLmphLmhhc093blByb3BlcnR5KGFyZ3VtZW50cy5sZW5ndGgpIHx8IHYoIkZ1bmN0aW9uICciICsgdCArICInIGNhbGxlZCB3aXRoIGFuIGludmFsaWQgbnVtYmVyIG9mIGFyZ3VtZW50cyAoIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiKSAtIGV4cGVjdHMgb25lIG9mICgiICsgcltuXS5qYSArICIpISIpLCByW25dLmphW2FyZ3VtZW50cy5sZW5ndGhdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgfSwgcltuXS5qYSA9IFtdLCByW25dLmphW2kueWFdID0gaTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gX3QobiwgdCwgcikgewogICAgICBlLmhhc093blByb3BlcnR5KG4pID8gKChyID09PSB2b2lkIDAgfHwgZVtuXS5qYSAhPT0gdm9pZCAwICYmIGVbbl0uamFbcl0gIT09IHZvaWQgMCkgJiYgdigiQ2Fubm90IHJlZ2lzdGVyIHB1YmxpYyBuYW1lICciICsgbiArICInIHR3aWNlIiksIGFlKG4sIG4pLCBlLmhhc093blByb3BlcnR5KHIpICYmIHYoIkNhbm5vdCByZWdpc3RlciBtdWx0aXBsZSBvdmVybG9hZHMgb2YgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIG51bWJlciBvZiBhcmd1bWVudHMgKCIgKyByICsgIikhIiksIGVbbl0uamFbcl0gPSB0KSA6IChlW25dID0gdCwgciAhPT0gdm9pZCAwICYmIChlW25dLlJhID0gcikpOwogICAgfQogICAgZnVuY3Rpb24gb2UobiwgdCwgciwgaSwgcywgdSwgYywgbCkgewogICAgICB0aGlzLm5hbWUgPSBuLCB0aGlzLmNvbnN0cnVjdG9yID0gdCwgdGhpcy5tYSA9IHIsIHRoaXMubmEgPSBpLCB0aGlzLmlhID0gcywgdGhpcy5DYSA9IHUsIHRoaXMucWEgPSBjLCB0aGlzLkFhID0gbDsKICAgIH0KICAgIGZ1bmN0aW9uIEVuKG4sIHQsIHIpIHsKICAgICAgZm9yICg7IHQgIT09IHI7ICkgdC5xYSB8fCB2KCJFeHBlY3RlZCBudWxsIG9yIGluc3RhbmNlIG9mICIgKyByLm5hbWUgKyAiLCBnb3QgYW4gaW5zdGFuY2Ugb2YgIiArIHQubmFtZSksIG4gPSB0LnFhKG4pLCB0ID0gdC5pYTsKICAgICAgcmV0dXJuIG47CiAgICB9CiAgICBmdW5jdGlvbiBzZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgc24odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIEVuKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiB1ZShuLCB0KSB7CiAgICAgIGlmICh0ID09PSBudWxsKSB7CiAgICAgICAgaWYgKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgdGhpcy5zYSkgewogICAgICAgICAgdmFyIHIgPSB0aGlzLkhhKCk7CiAgICAgICAgICByZXR1cm4gbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgciksIHI7CiAgICAgICAgfQogICAgICAgIHJldHVybiAwOwogICAgICB9CiAgICAgIGlmICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBzbih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgIXRoaXMucmEgJiYgdC5BLmZhLnJhICYmIHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArICh0LkEuaGEgPyB0LkEuaGEubmFtZSA6IHQuQS5mYS5uYW1lKSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIHIgPSBFbih0LkEuZGEsIHQuQS5mYS5lYSwgdGhpcy5lYSksIHRoaXMuc2EpIHN3aXRjaCAodC5BLmdhID09PSB2b2lkIDAgJiYgdigiUGFzc2luZyByYXcgcG9pbnRlciB0byBzbWFydCBwb2ludGVyIGlzIGlsbGVnYWwiKSwgdGhpcy5QYSkgewogICAgICAgIGNhc2UgMDoKICAgICAgICAgIHQuQS5oYSA9PT0gdGhpcyA/IHIgPSB0LkEuZ2EgOiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyAodC5BLmhhID8gdC5BLmhhLm5hbWUgOiB0LkEuZmEubmFtZSkgKyAiIHRvIHBhcmFtZXRlciB0eXBlICIgKyB0aGlzLm5hbWUpOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAxOgogICAgICAgICAgciA9IHQuQS5nYTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIGlmICh0LkEuaGEgPT09IHRoaXMpIHIgPSB0LkEuZ2E7CiAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgdmFyIGkgPSB0LmNsb25lKCk7CiAgICAgICAgICAgIHIgPSB0aGlzLklhKHIsIG9uKGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIGkuZGVsZXRlKCk7CiAgICAgICAgICAgIH0pKSwgbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgcik7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdigiVW5zdXBwb3J0aW5nIHNoYXJpbmcgcG9saWN5Iik7CiAgICAgIH0KICAgICAgcmV0dXJuIHI7CiAgICB9CiAgICBmdW5jdGlvbiBsZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgc24odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIHQuQS5mYS5yYSAmJiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyB0LkEuZmEubmFtZSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIEVuKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiBUbihuKSB7CiAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShVW24gPj4gMl0pOwogICAgfQogICAgZnVuY3Rpb24gQ3QobiwgdCwgcikgewogICAgICByZXR1cm4gdCA9PT0gciA/IG4gOiByLmlhID09PSB2b2lkIDAgPyBudWxsIDogKG4gPSBDdChuLCB0LCByLmlhKSwgbiA9PT0gbnVsbCA/IG51bGwgOiByLkFhKG4pKTsKICAgIH0KICAgIHZhciBtbiA9IHt9OwogICAgZnVuY3Rpb24gY2UobiwgdCkgewogICAgICBmb3IgKHQgPT09IHZvaWQgMCAmJiB2KCJwdHIgc2hvdWxkIG5vdCBiZSB1bmRlZmluZWQiKTsgbi5pYTsgKSB0ID0gbi5xYSh0KSwgbiA9IG4uaWE7CiAgICAgIHJldHVybiBtblt0XTsKICAgIH0KICAgIGZ1bmN0aW9uIFBuKG4sIHQpIHsKICAgICAgcmV0dXJuIHQuZmEgJiYgdC5kYSB8fCBDbigibWFrZUNsYXNzSGFuZGxlIHJlcXVpcmVzIHB0ciBhbmQgcHRyVHlwZSIpLCAhIXQuaGEgIT0gISF0LmdhICYmIENuKCJCb3RoIHNtYXJ0UHRyVHlwZSBhbmQgc21hcnRQdHIgbXVzdCBiZSBzcGVjaWZpZWQiKSwgdC5jb3VudCA9IHsgdmFsdWU6IDEgfSwgZG4oT2JqZWN0LmNyZWF0ZShuLCB7IEE6IHsgdmFsdWU6IHQgfSB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiBCKG4sIHQsIHIsIGkpIHsKICAgICAgdGhpcy5uYW1lID0gbiwgdGhpcy5lYSA9IHQsIHRoaXMudWEgPSByLCB0aGlzLnJhID0gaSwgdGhpcy5zYSA9ICExLCB0aGlzLm5hID0gdGhpcy5JYSA9IHRoaXMuSGEgPSB0aGlzLndhID0gdGhpcy5QYSA9IHRoaXMuR2EgPSB2b2lkIDAsIHQuaWEgIT09IHZvaWQgMCA/IHRoaXMudG9XaXJlVHlwZSA9IHVlIDogKHRoaXMudG9XaXJlVHlwZSA9IGkgPyBzZSA6IGxlLCB0aGlzLmthID0gbnVsbCk7CiAgICB9CiAgICBmdW5jdGlvbiBFdChuLCB0LCByKSB7CiAgICAgIGUuaGFzT3duUHJvcGVydHkobikgfHwgQ24oIlJlcGxhY2luZyBub25leGlzdGFudCBwdWJsaWMgc3ltYm9sIiksIGVbbl0uamEgIT09IHZvaWQgMCAmJiByICE9PSB2b2lkIDAgPyBlW25dLmphW3JdID0gdCA6IChlW25dID0gdCwgZVtuXS55YSA9IHIpOwogICAgfQogICAgZnVuY3Rpb24gRyhuLCB0KSB7CiAgICAgIG4gPSBXKG4pOwogICAgICB2YXIgciA9IFVuKG4sIHQpOwogICAgICByZXR1cm4gdHlwZW9mIHIgIT0gImZ1bmN0aW9uIiAmJiB2KCJ1bmtub3duIGZ1bmN0aW9uIHBvaW50ZXIgd2l0aCBzaWduYXR1cmUgIiArIG4gKyAiOiAiICsgdCksIHI7CiAgICB9CiAgICB2YXIgVHQgPSB2b2lkIDA7CiAgICBmdW5jdGlvbiBQdChuKSB7CiAgICAgIG4gPSBGdChuKTsKICAgICAgdmFyIHQgPSBXKG4pOwogICAgICByZXR1cm4gRChuKSwgdDsKICAgIH0KICAgIGZ1bmN0aW9uIHluKG4sIHQpIHsKICAgICAgZnVuY3Rpb24gcih1KSB7CiAgICAgICAgc1t1XSB8fCBRW3VdIHx8IChfblt1XSA/IF9uW3VdLmZvckVhY2gocikgOiAoaS5wdXNoKHUpLCBzW3VdID0gITApKTsKICAgICAgfQogICAgICB2YXIgaSA9IFtdLCBzID0ge307CiAgICAgIHRocm93IHQuZm9yRWFjaChyKSwgbmV3IFR0KG4gKyAiOiAiICsgaS5tYXAoUHQpLmpvaW4oWyIsICJdKSk7CiAgICB9CiAgICBmdW5jdGlvbiBidChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSBbXSwgaSA9IDA7IGkgPCBuOyBpKyspIHIucHVzaChTWyh0ID4+IDIpICsgaV0pOwogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIGJuKG4pIHsKICAgICAgZm9yICg7IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4ucG9wKCk7CiAgICAgICAgbi5wb3AoKSh0KTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gT3QobiwgdCwgcikgewogICAgICByZXR1cm4gbiBpbnN0YW5jZW9mIE9iamVjdCB8fCB2KHIgKyAnIHdpdGggaW52YWxpZCAidGhpcyI6ICcgKyBuKSwgbiBpbnN0YW5jZW9mIHQuZWEuY29uc3RydWN0b3IgfHwgdihyICsgJyBpbmNvbXBhdGlibGUgd2l0aCAidGhpcyIgb2YgdHlwZSAnICsgbi5jb25zdHJ1Y3Rvci5uYW1lKSwgbi5BLmRhIHx8IHYoImNhbm5vdCBjYWxsIGVtc2NyaXB0ZW4gYmluZGluZyBtZXRob2QgIiArIHIgKyAiIG9uIGRlbGV0ZWQgb2JqZWN0IiksIEVuKG4uQS5kYSwgbi5BLmZhLmVhLCB0LmVhKTsKICAgIH0KICAgIHZhciBabiA9IFtdLCB4ID0gW3t9LCB7IHZhbHVlOiB2b2lkIDAgfSwgeyB2YWx1ZTogbnVsbCB9LCB7IHZhbHVlOiAhMCB9LCB7IHZhbHVlOiAhMSB9XTsKICAgIGZ1bmN0aW9uIEpuKG4pIHsKICAgICAgNCA8IG4gJiYgLS14W25dLkphID09PSAwICYmICh4W25dID0gdm9pZCAwLCBabi5wdXNoKG4pKTsKICAgIH0KICAgIGZ1bmN0aW9uIG9uKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSB2b2lkIDA6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIG51bGw6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlICEwOgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgY2FzZSAhMToKICAgICAgICAgIHJldHVybiA0OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB2YXIgdCA9IFpuLmxlbmd0aCA/IFpuLnBvcCgpIDogeC5sZW5ndGg7CiAgICAgICAgICByZXR1cm4geFt0XSA9IHsgSmE6IDEsIHZhbHVlOiBuIH0sIHQ7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHNuKG4pIHsKICAgICAgaWYgKG4gPT09IG51bGwpIHJldHVybiAibnVsbCI7CiAgICAgIHZhciB0ID0gdHlwZW9mIG47CiAgICAgIHJldHVybiB0ID09PSAib2JqZWN0IiB8fCB0ID09PSAiYXJyYXkiIHx8IHQgPT09ICJmdW5jdGlvbiIgPyBuLnRvU3RyaW5nKCkgOiAiIiArIG47CiAgICB9CiAgICBmdW5jdGlvbiBmZShuLCB0KSB7CiAgICAgIHN3aXRjaCAodCkgewogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiBmdW5jdGlvbihyKSB7CiAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShvdFtyID4+IDJdKTsKICAgICAgICAgIH07CiAgICAgICAgY2FzZSAzOgogICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHIpIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKHN0W3IgPj4gM10pOwogICAgICAgICAgfTsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBmbG9hdCB0eXBlOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIGRlKG4pIHsKICAgICAgdmFyIHQgPSBGdW5jdGlvbjsKICAgICAgaWYgKCEodCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSkgdGhyb3cgbmV3IFR5cGVFcnJvcigibmV3XyBjYWxsZWQgd2l0aCBjb25zdHJ1Y3RvciB0eXBlICIgKyB0eXBlb2YgdCArICIgd2hpY2ggaXMgbm90IGEgZnVuY3Rpb24iKTsKICAgICAgdmFyIHIgPSBEbih0Lm5hbWUgfHwgInVua25vd25GdW5jdGlvbk5hbWUiLCBmdW5jdGlvbigpIHsKICAgICAgfSk7CiAgICAgIHJldHVybiByLnByb3RvdHlwZSA9IHQucHJvdG90eXBlLCByID0gbmV3IHIoKSwgbiA9IHQuYXBwbHkociwgbiksIG4gaW5zdGFuY2VvZiBPYmplY3QgPyBuIDogcjsKICAgIH0KICAgIGZ1bmN0aW9uIGhlKG4sIHQsIHIpIHsKICAgICAgc3dpdGNoICh0KSB7CiAgICAgICAgY2FzZSAwOgogICAgICAgICAgcmV0dXJuIHIgPyBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBaW2ldOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIElbaV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMToKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gdG5baSA+PiAxXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBnbltpID4+IDFdOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gciA/IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIFNbaSA+PiAyXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBVW2kgPj4gMl07CiAgICAgICAgICB9OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGludGVnZXIgdHlwZTogIiArIG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBLbihuKSB7CiAgICAgIHJldHVybiBuIHx8IHYoIkNhbm5vdCB1c2UgZGVsZXRlZCB2YWwuIGhhbmRsZSA9ICIgKyBuKSwgeFtuXS52YWx1ZTsKICAgIH0KICAgIGZ1bmN0aW9uIE10KG4sIHQpIHsKICAgICAgdmFyIHIgPSBRW25dOwogICAgICByZXR1cm4gciA9PT0gdm9pZCAwICYmIHYodCArICIgaGFzIHVua25vd24gdHlwZSAiICsgUHQobikpLCByOwogICAgfQogICAgdmFyIHBlID0ge30sIFN0ID0ge307CiAgICBmdW5jdGlvbiBXdCgpIHsKICAgICAgaWYgKCFRbikgewogICAgICAgIHZhciBuID0geyBVU0VSOiAid2ViX3VzZXIiLCBMT0dOQU1FOiAid2ViX3VzZXIiLCBQQVRIOiAiLyIsIFBXRDogIi8iLCBIT01FOiAiL2hvbWUvd2ViX3VzZXIiLCBMQU5HOiAodHlwZW9mIG5hdmlnYXRvciA9PSAib2JqZWN0IiAmJiBuYXZpZ2F0b3IubGFuZ3VhZ2VzICYmIG5hdmlnYXRvci5sYW5ndWFnZXNbMF0gfHwgIkMiKS5yZXBsYWNlKCItIiwgIl8iKSArICIuVVRGLTgiLCBfOiBiIHx8ICIuL3RoaXMucHJvZ3JhbSIgfSwgdDsKICAgICAgICBmb3IgKHQgaW4gU3QpIG5bdF0gPSBTdFt0XTsKICAgICAgICB2YXIgciA9IFtdOwogICAgICAgIGZvciAodCBpbiBuKSByLnB1c2godCArICI9IiArIG5bdF0pOwogICAgICAgIFFuID0gcjsKICAgICAgfQogICAgICByZXR1cm4gUW47CiAgICB9CiAgICB2YXIgUW4sIGt0ID0gW107CiAgICBmdW5jdGlvbiBSdChuKSB7CiAgICAgIHZhciB0ID0ge30sIHI7CiAgICAgIGZvciAociBpbiBuKSAoZnVuY3Rpb24oaSkgewogICAgICAgIHZhciBzID0gbltpXTsKICAgICAgICB0W2ldID0gdHlwZW9mIHMgPT0gImZ1bmN0aW9uIiA/IGZ1bmN0aW9uKCkgewogICAgICAgICAga3QucHVzaChpKTsKICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgIHJldHVybiBzLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICAgICAgICB9IGZpbmFsbHkgewogICAgICAgICAgICBpZiAoTm4pIHJldHVybjsKICAgICAgICAgICAgdmFyIHUgPSBrdC5wb3AoKTsKICAgICAgICAgICAgcnQodSA9PT0gaSk7CiAgICAgICAgICB9CiAgICAgICAgfSA6IHM7CiAgICAgIH0pKHIpOwogICAgICByZXR1cm4gdDsKICAgIH0KICAgIGZvciAodmFyIEl0ID0gQXJyYXkoMjU2KSwgT24gPSAwOyAyNTYgPiBPbjsgKytPbikgSXRbT25dID0gU3RyaW5nLmZyb21DaGFyQ29kZShPbik7CiAgICB5dCA9IEl0LCBybiA9IGUuQmluZGluZ0Vycm9yID0gVm4oIkJpbmRpbmdFcnJvciIpLCB2dCA9IGUuSW50ZXJuYWxFcnJvciA9IFZuKCJJbnRlcm5hbEVycm9yIiksIFYucHJvdG90eXBlLmlzQWxpYXNPZiA9IGZ1bmN0aW9uKG4pIHsKICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFYgJiYgbiBpbnN0YW5jZW9mIFYpKSByZXR1cm4gITE7CiAgICAgIHZhciB0ID0gdGhpcy5BLmZhLmVhLCByID0gdGhpcy5BLmRhLCBpID0gbi5BLmZhLmVhOwogICAgICBmb3IgKG4gPSBuLkEuZGE7IHQuaWE7ICkgciA9IHQucWEociksIHQgPSB0LmlhOwogICAgICBmb3IgKDsgaS5pYTsgKSBuID0gaS5xYShuKSwgaSA9IGkuaWE7CiAgICAgIHJldHVybiB0ID09PSBpICYmIHIgPT09IG47CiAgICB9LCBWLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkgewogICAgICBpZiAodGhpcy5BLmRhIHx8IEduKHRoaXMpLCB0aGlzLkEucGEpIHJldHVybiB0aGlzLkEuY291bnQudmFsdWUgKz0gMSwgdGhpczsKICAgICAgdmFyIG4gPSBkbihPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSwgeyBBOiB7IHZhbHVlOiBpZSh0aGlzLkEpIH0gfSkpOwogICAgICByZXR1cm4gbi5BLmNvdW50LnZhbHVlICs9IDEsIG4uQS5vYSA9ICExLCBuOwogICAgfSwgVi5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24oKSB7CiAgICAgIHRoaXMuQS5kYSB8fCBHbih0aGlzKSwgdGhpcy5BLm9hICYmICF0aGlzLkEucGEgJiYgdigiT2JqZWN0IGFscmVhZHkgc2NoZWR1bGVkIGZvciBkZWxldGlvbiIpLCBndCh0aGlzKSwgd3QodGhpcy5BKSwgdGhpcy5BLnBhIHx8ICh0aGlzLkEuZ2EgPSB2b2lkIDAsIHRoaXMuQS5kYSA9IHZvaWQgMCk7CiAgICB9LCBWLnByb3RvdHlwZS5pc0RlbGV0ZWQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuICF0aGlzLkEuZGE7CiAgICB9LCBWLnByb3RvdHlwZS5kZWxldGVMYXRlciA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gdGhpcy5BLmRhIHx8IEduKHRoaXMpLCB0aGlzLkEub2EgJiYgIXRoaXMuQS5wYSAmJiB2KCJPYmplY3QgYWxyZWFkeSBzY2hlZHVsZWQgZm9yIGRlbGV0aW9uIiksIHBuLnB1c2godGhpcyksIHBuLmxlbmd0aCA9PT0gMSAmJiBobiAmJiBobihZbiksIHRoaXMuQS5vYSA9ICEwLCB0aGlzOwogICAgfSwgQi5wcm90b3R5cGUuRGEgPSBmdW5jdGlvbihuKSB7CiAgICAgIHJldHVybiB0aGlzLndhICYmIChuID0gdGhpcy53YShuKSksIG47CiAgICB9LCBCLnByb3RvdHlwZS52YSA9IGZ1bmN0aW9uKG4pIHsKICAgICAgdGhpcy5uYSAmJiB0aGlzLm5hKG4pOwogICAgfSwgQi5wcm90b3R5cGUuYXJnUGFja0FkdmFuY2UgPSA4LCBCLnByb3RvdHlwZS5yZWFkVmFsdWVGcm9tUG9pbnRlciA9IFRuLCBCLnByb3RvdHlwZS5kZWxldGVPYmplY3QgPSBmdW5jdGlvbihuKSB7CiAgICAgIG4gIT09IG51bGwgJiYgbi5kZWxldGUoKTsKICAgIH0sIEIucHJvdG90eXBlLmZyb21XaXJlVHlwZSA9IGZ1bmN0aW9uKG4pIHsKICAgICAgZnVuY3Rpb24gdCgpIHsKICAgICAgICByZXR1cm4gdGhpcy5zYSA/IFBuKHRoaXMuZWEubWEsIHsgZmE6IHRoaXMuR2EsIGRhOiByLCBoYTogdGhpcywgZ2E6IG4gfSkgOiBQbih0aGlzLmVhLm1hLCB7IGZhOiB0aGlzLCBkYTogbiB9KTsKICAgICAgfQogICAgICB2YXIgciA9IHRoaXMuRGEobik7CiAgICAgIGlmICghcikgcmV0dXJuIHRoaXMudmEobiksIG51bGw7CiAgICAgIHZhciBpID0gY2UodGhpcy5lYSwgcik7CiAgICAgIGlmIChpICE9PSB2b2lkIDApCiAgICAgICAgcmV0dXJuIGkuQS5jb3VudC52YWx1ZSA9PT0gMCA/IChpLkEuZGEgPSByLCBpLkEuZ2EgPSBuLCBpLmNsb25lKCkpIDogKGkgPSBpLmNsb25lKCksIHRoaXMudmEobiksIGkpOwogICAgICBpZiAoaSA9IHRoaXMuZWEuQ2EociksIGkgPSBBdFtpXSwgIWkpIHJldHVybiB0LmNhbGwodGhpcyk7CiAgICAgIGkgPSB0aGlzLnJhID8gaS56YSA6IGkucG9pbnRlclR5cGU7CiAgICAgIHZhciBzID0gQ3QociwgdGhpcy5lYSwgaS5lYSk7CiAgICAgIHJldHVybiBzID09PSBudWxsID8gdC5jYWxsKHRoaXMpIDogdGhpcy5zYSA/IFBuKGkuZWEubWEsIHsgZmE6IGksIGRhOiBzLCBoYTogdGhpcywgZ2E6IG4gfSkgOiBQbigKICAgICAgICBpLmVhLm1hLAogICAgICAgIHsgZmE6IGksIGRhOiBzIH0KICAgICAgKTsKICAgIH0sIGUuZ2V0SW5oZXJpdGVkSW5zdGFuY2VDb3VudCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gT2JqZWN0LmtleXMobW4pLmxlbmd0aDsKICAgIH0sIGUuZ2V0TGl2ZUluaGVyaXRlZEluc3RhbmNlcyA9IGZ1bmN0aW9uKCkgewogICAgICB2YXIgbiA9IFtdLCB0OwogICAgICBmb3IgKHQgaW4gbW4pIG1uLmhhc093blByb3BlcnR5KHQpICYmIG4ucHVzaChtblt0XSk7CiAgICAgIHJldHVybiBuOwogICAgfSwgZS5mbHVzaFBlbmRpbmdEZWxldGVzID0gWW4sIGUuc2V0RGVsYXlGdW5jdGlvbiA9IGZ1bmN0aW9uKG4pIHsKICAgICAgaG4gPSBuLCBwbi5sZW5ndGggJiYgaG4gJiYgaG4oWW4pOwogICAgfSwgVHQgPSBlLlVuYm91bmRUeXBlRXJyb3IgPSBWbigiVW5ib3VuZFR5cGVFcnJvciIpLCBlLmNvdW50X2VtdmFsX2hhbmRsZXMgPSBmdW5jdGlvbigpIHsKICAgICAgZm9yICh2YXIgbiA9IDAsIHQgPSA1OyB0IDwgeC5sZW5ndGg7ICsrdCkgeFt0XSAhPT0gdm9pZCAwICYmICsrbjsKICAgICAgcmV0dXJuIG47CiAgICB9LCBlLmdldF9maXJzdF9lbXZhbCA9IGZ1bmN0aW9uKCkgewogICAgICBmb3IgKHZhciBuID0gNTsgbiA8IHgubGVuZ3RoOyArK24pIGlmICh4W25dICE9PSB2b2lkIDApIHJldHVybiB4W25dOwogICAgICByZXR1cm4gbnVsbDsKICAgIH0sIGZ0LnB1c2goeyBCYTogZnVuY3Rpb24oKSB7CiAgICAgIHh0KCk7CiAgICB9IH0pOwogICAgdmFyIG1lID0gewogICAgICB6OiBmdW5jdGlvbihuKSB7CiAgICAgICAgcmV0dXJuIE1uKG4gKyAxNikgKyAxNjsKICAgICAgfSwKICAgICAgdTogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIHRocm93IG5ldyByZShuKS5GYSh0LCByKSwgInVuY2F1Z2h0X2V4Y2VwdGlvbiIgaW4gQW4gPyBBbi54YSsrIDogQW4ueGEgPSAxLCBuOwogICAgICB9LAogICAgICB3OiBmdW5jdGlvbihuLCB0LCByLCBpLCBzKSB7CiAgICAgICAgdmFyIHUgPSB6bihyKTsKICAgICAgICB0ID0gVyh0KSwgeihuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oYykgewogICAgICAgICAgcmV0dXJuICEhYzsKICAgICAgICB9LCB0b1dpcmVUeXBlOiBmdW5jdGlvbihjLCBsKSB7CiAgICAgICAgICByZXR1cm4gbCA/IGkgOiBzOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogZnVuY3Rpb24oYykgewogICAgICAgICAgaWYgKHIgPT09IDEpIHZhciBsID0gWjsKICAgICAgICAgIGVsc2UgaWYgKHIgPT09IDIpIGwgPSB0bjsKICAgICAgICAgIGVsc2UgaWYgKHIgPT09IDQpIGwgPSBTOwogICAgICAgICAgZWxzZSB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGJvb2xlYW4gdHlwZSBzaXplOiAiICsgdCk7CiAgICAgICAgICByZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUobFtjID4+IHVdKTsKICAgICAgICB9LCBrYTogbnVsbCB9KTsKICAgICAgfSwKICAgICAgaDogZnVuY3Rpb24obiwgdCwgciwgaSwgcywgdSwgYywgbCwgcCwgZiwgZCwgaCwgdykgewogICAgICAgIGQgPSBXKGQpLCB1ID0gRyhzLCB1KSwgbCAmJiAobCA9IEcoYywgbCkpLCBmICYmIChmID0gRyhwLCBmKSksIHcgPSBHKGgsIHcpOwogICAgICAgIHZhciBUID0gQm4oZCk7CiAgICAgICAgX3QoVCwgZnVuY3Rpb24oKSB7CiAgICAgICAgICB5bigiQ2Fubm90IGNvbnN0cnVjdCAiICsgZCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbaV0pOwogICAgICAgIH0pLCBhbihbbiwgdCwgcl0sIGkgPyBbaV0gOiBbXSwgZnVuY3Rpb24obSkgewogICAgICAgICAgaWYgKG0gPSBtWzBdLCBpKQogICAgICAgICAgICB2YXIgTiA9IG0uZWEsIE0gPSBOLm1hOwogICAgICAgICAgZWxzZSBNID0gVi5wcm90b3R5cGU7CiAgICAgICAgICBtID0gRG4oVCwgZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGlmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykgIT09IGspIHRocm93IG5ldyBybigiVXNlICduZXcnIHRvIGNvbnN0cnVjdCAiICsgZCk7CiAgICAgICAgICAgIGlmIChqLmxhID09PSB2b2lkIDApIHRocm93IG5ldyBybihkICsgIiBoYXMgbm8gYWNjZXNzaWJsZSBjb25zdHJ1Y3RvciIpOwogICAgICAgICAgICB2YXIgTHQgPSBqLmxhW2FyZ3VtZW50cy5sZW5ndGhdOwogICAgICAgICAgICBpZiAoTHQgPT09IHZvaWQgMCkgdGhyb3cgbmV3IHJuKCJUcmllZCB0byBpbnZva2UgY3RvciBvZiAiICsgZCArICIgd2l0aCBpbnZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzICgiICsgYXJndW1lbnRzLmxlbmd0aCArICIpIC0gZXhwZWN0ZWQgKCIgKyBPYmplY3Qua2V5cyhqLmxhKS50b1N0cmluZygpICsgIikgcGFyYW1ldGVycyBpbnN0ZWFkISIpOwogICAgICAgICAgICByZXR1cm4gTHQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICAgIH0pOwogICAgICAgICAgdmFyIGsgPSBPYmplY3QuY3JlYXRlKE0sIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IG0gfSB9KTsKICAgICAgICAgIG0ucHJvdG90eXBlID0gazsKICAgICAgICAgIHZhciBqID0gbmV3IG9lKGQsIG0sIGssIHcsIE4sIHUsIGwsIGYpOwogICAgICAgICAgTiA9IG5ldyBCKGQsIGosICEwLCAhMSksIE0gPSBuZXcgQihkICsgIioiLCBqLCAhMSwgITEpOwogICAgICAgICAgdmFyIHZuID0gbmV3IEIoZCArICIgY29uc3QqIiwgaiwgITEsICEwKTsKICAgICAgICAgIHJldHVybiBBdFtuXSA9IHsgcG9pbnRlclR5cGU6IE0sIHphOiB2biB9LCBFdChULCBtKSwgW04sIE0sIHZuXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgZzogZnVuY3Rpb24obiwgdCwgciwgaSwgcywgdSkgewogICAgICAgIHJ0KDAgPCB0KTsKICAgICAgICB2YXIgYyA9IGJ0KHQsIHIpOwogICAgICAgIHMgPSBHKGksIHMpOwogICAgICAgIHZhciBsID0gW3VdLCBwID0gW107CiAgICAgICAgYW4oW10sIFtuXSwgZnVuY3Rpb24oZikgewogICAgICAgICAgZiA9IGZbMF07CiAgICAgICAgICB2YXIgZCA9ICJjb25zdHJ1Y3RvciAiICsgZi5uYW1lOwogICAgICAgICAgaWYgKGYuZWEubGEgPT09IHZvaWQgMCAmJiAoZi5lYS5sYSA9IFtdKSwgZi5lYS5sYVt0IC0gMV0gIT09IHZvaWQgMCkgdGhyb3cgbmV3IHJuKCJDYW5ub3QgcmVnaXN0ZXIgbXVsdGlwbGUgY29uc3RydWN0b3JzIHdpdGggaWRlbnRpY2FsIG51bWJlciBvZiBwYXJhbWV0ZXJzICgiICsgKHQgLSAxKSArICIpIGZvciBjbGFzcyAnIiArIGYubmFtZSArICInISBPdmVybG9hZCByZXNvbHV0aW9uIGlzIGN1cnJlbnRseSBvbmx5IHBlcmZvcm1lZCB1c2luZyB0aGUgcGFyYW1ldGVyIGNvdW50LCBub3QgYWN0dWFsIHR5cGUgaW5mbyEiKTsKICAgICAgICAgIHJldHVybiBmLmVhLmxhW3QgLSAxXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICB5bigiQ2Fubm90IGNvbnN0cnVjdCAiICsgZi5uYW1lICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIGMpOwogICAgICAgICAgfSwgYW4oW10sIGMsIGZ1bmN0aW9uKGgpIHsKICAgICAgICAgICAgcmV0dXJuIGYuZWEubGFbdCAtIDFdID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgYXJndW1lbnRzLmxlbmd0aCAhPT0gdCAtIDEgJiYgdihkICsgIiBjYWxsZWQgd2l0aCAiICsgYXJndW1lbnRzLmxlbmd0aCArICIgYXJndW1lbnRzLCBleHBlY3RlZCAiICsgKHQgLSAxKSksIHAubGVuZ3RoID0gMCwgbC5sZW5ndGggPSB0OwogICAgICAgICAgICAgIGZvciAodmFyIHcgPSAxOyB3IDwgdDsgKyt3KSBsW3ddID0gaFt3XS50b1dpcmVUeXBlKAogICAgICAgICAgICAgICAgcCwKICAgICAgICAgICAgICAgIGFyZ3VtZW50c1t3IC0gMV0KICAgICAgICAgICAgICApOwogICAgICAgICAgICAgIHJldHVybiB3ID0gcy5hcHBseShudWxsLCBsKSwgYm4ocCksIGhbMF0uZnJvbVdpcmVUeXBlKHcpOwogICAgICAgICAgICB9LCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgYjogZnVuY3Rpb24obiwgdCwgciwgaSwgcywgdSwgYywgbCwgcCwgZikgewogICAgICAgIHQgPSBXKHQpLCBzID0gRyhpLCBzKSwgYW4oW10sIFtuXSwgZnVuY3Rpb24oZCkgewogICAgICAgICAgZCA9IGRbMF07CiAgICAgICAgICB2YXIgaCA9IGQubmFtZSArICIuIiArIHQsIHcgPSB7IGdldDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHluKCJDYW5ub3QgYWNjZXNzICIgKyBoICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIFtyLCBjXSk7CiAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCB9OwogICAgICAgICAgcmV0dXJuIHAgPyB3LnNldCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICB5bigiQ2Fubm90IGFjY2VzcyAiICsgaCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbciwgY10pOwogICAgICAgICAgfSA6IHcuc2V0ID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHYoaCArICIgaXMgYSByZWFkLW9ubHkgcHJvcGVydHkiKTsKICAgICAgICAgIH0sIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkLmVhLm1hLCB0LCB3KSwgYW4oW10sIHAgPyBbciwgY10gOiBbcl0sIGZ1bmN0aW9uKFQpIHsKICAgICAgICAgICAgdmFyIG0gPSBUWzBdLCBOID0geyBnZXQ6IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIHZhciBrID0gT3QodGhpcywgZCwgaCArICIgZ2V0dGVyIik7CiAgICAgICAgICAgICAgcmV0dXJuIG0uZnJvbVdpcmVUeXBlKHModSwgaykpOwogICAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCB9OwogICAgICAgICAgICBpZiAocCkgewogICAgICAgICAgICAgIHAgPSBHKGwsIHApOwogICAgICAgICAgICAgIHZhciBNID0gVFsxXTsKICAgICAgICAgICAgICBOLnNldCA9IGZ1bmN0aW9uKGspIHsKICAgICAgICAgICAgICAgIHZhciBqID0gT3QodGhpcywgZCwgaCArICIgc2V0dGVyIiksIHZuID0gW107CiAgICAgICAgICAgICAgICBwKGYsIGosIE0udG9XaXJlVHlwZSh2biwgaykpLCBibih2bik7CiAgICAgICAgICAgICAgfTsKICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGQuZWEubWEsIHQsIE4pLCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgdjogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHQgPSBXKHQpLCB6KG4sIHsgbmFtZTogdCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihyKSB7CiAgICAgICAgICB2YXIgaSA9IHhbcl0udmFsdWU7CiAgICAgICAgICByZXR1cm4gSm4ociksIGk7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24ociwgaSkgewogICAgICAgICAgcmV0dXJuIG9uKGkpOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogVG4sIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBtOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgciA9IHpuKHIpLCB0ID0gVyh0KSwgeihuLCB7CiAgICAgICAgICBuYW1lOiB0LAogICAgICAgICAgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBpOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIHMpIHsKICAgICAgICAgICAgaWYgKHR5cGVvZiBzICE9ICJudW1iZXIiICYmIHR5cGVvZiBzICE9ICJib29sZWFuIikgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgIicgKyBzbihzKSArICciIHRvICcgKyB0aGlzLm5hbWUpOwogICAgICAgICAgICByZXR1cm4gczsKICAgICAgICAgIH0sCiAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBmZSh0LCByKSwKICAgICAgICAgIGthOiBudWxsCiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGM6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIHMsIHUpIHsKICAgICAgICB2YXIgYyA9IGJ0KHQsIHIpOwogICAgICAgIG4gPSBXKG4pLCBzID0gRyhpLCBzKSwgX3QobiwgZnVuY3Rpb24oKSB7CiAgICAgICAgICB5bigiQ2Fubm90IGNhbGwgIiArIG4gKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgYyk7CiAgICAgICAgfSwgdCAtIDEpLCBhbihbXSwgYywgZnVuY3Rpb24obCkgewogICAgICAgICAgdmFyIHAgPSBuLCBmID0gbjsKICAgICAgICAgIGwgPSBbbFswXSwgbnVsbF0uY29uY2F0KGwuc2xpY2UoMSkpOwogICAgICAgICAgdmFyIGQgPSBzLCBoID0gbC5sZW5ndGg7CiAgICAgICAgICAyID4gaCAmJiB2KCJhcmdUeXBlcyBhcnJheSBzaXplIG1pc21hdGNoISBNdXN0IGF0IGxlYXN0IGdldCByZXR1cm4gdmFsdWUgYW5kICd0aGlzJyB0eXBlcyEiKTsKICAgICAgICAgIGZvciAodmFyIHcgPSBsWzFdICE9PSBudWxsICYmICExLCBUID0gITEsIG0gPSAxOyBtIDwgbC5sZW5ndGg7ICsrbSkgaWYgKGxbbV0gIT09IG51bGwgJiYgbFttXS5rYSA9PT0gdm9pZCAwKSB7CiAgICAgICAgICAgIFQgPSAhMDsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICB9CiAgICAgICAgICB2YXIgTiA9IGxbMF0ubmFtZSAhPT0gInZvaWQiLCBNID0gIiIsIGsgPSAiIjsKICAgICAgICAgIGZvciAobSA9IDA7IG0gPCBoIC0gMjsgKyttKSBNICs9IChtICE9PSAwID8gIiwgIiA6ICIiKSArICJhcmciICsgbSwgayArPSAobSAhPT0gMCA/ICIsICIgOiAiIikgKyAiYXJnIiArIG0gKyAiV2lyZWQiOwogICAgICAgICAgZiA9ICJyZXR1cm4gZnVuY3Rpb24gIiArIEJuKGYpICsgIigiICsgTSArIGApIHsKaWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IGAgKyAoaCAtIDIpICsgYCkgewp0aHJvd0JpbmRpbmdFcnJvcignZnVuY3Rpb24gYCArIGYgKyAiIGNhbGxlZCB3aXRoICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMsIGV4cGVjdGVkICIgKyAoaCAtIDIpICsgYCBhcmdzIScpOwp9CmAsIFQgJiYgKGYgKz0gYHZhciBkZXN0cnVjdG9ycyA9IFtdOwpgKTsKICAgICAgICAgIHZhciBqID0gVCA/ICJkZXN0cnVjdG9ycyIgOiAibnVsbCI7CiAgICAgICAgICBmb3IgKE0gPSAidGhyb3dCaW5kaW5nRXJyb3IgaW52b2tlciBmbiBydW5EZXN0cnVjdG9ycyByZXRUeXBlIGNsYXNzUGFyYW0iLnNwbGl0KCIgIiksIGQgPSBbdiwgZCwgdSwgYm4sIGxbMF0sIGxbMV1dLCB3ICYmIChmICs9ICJ2YXIgdGhpc1dpcmVkID0gY2xhc3NQYXJhbS50b1dpcmVUeXBlKCIgKyBqICsgYCwgdGhpcyk7CmApLCBtID0gMDsgbSA8IGggLSAyOyArK20pIGYgKz0gInZhciBhcmciICsgbSArICJXaXJlZCA9IGFyZ1R5cGUiICsgbSArICIudG9XaXJlVHlwZSgiICsgaiArICIsIGFyZyIgKyBtICsgIik7IC8vICIgKyBsW20gKyAyXS5uYW1lICsgYApgLCBNLnB1c2goImFyZ1R5cGUiICsgbSksIGQucHVzaChsW20gKyAyXSk7CiAgICAgICAgICBpZiAodyAmJiAoayA9ICJ0aGlzV2lyZWQiICsgKDAgPCBrLmxlbmd0aCA/ICIsICIgOiAiIikgKyBrKSwgZiArPSAoTiA/ICJ2YXIgcnYgPSAiIDogIiIpICsgImludm9rZXIoZm4iICsgKDAgPCBrLmxlbmd0aCA/ICIsICIgOiAiIikgKyBrICsgYCk7CmAsIFQpIGYgKz0gYHJ1bkRlc3RydWN0b3JzKGRlc3RydWN0b3JzKTsKYDsKICAgICAgICAgIGVsc2UgZm9yIChtID0gdyA/IDEgOiAyOyBtIDwgbC5sZW5ndGg7ICsrbSkgaCA9IG0gPT09IDEgPyAidGhpc1dpcmVkIiA6ICJhcmciICsgKG0gLSAyKSArICJXaXJlZCIsIGxbbV0ua2EgIT09IG51bGwgJiYgKGYgKz0gaCArICJfZHRvcigiICsgaCArICIpOyAvLyAiICsgbFttXS5uYW1lICsgYApgLCBNLnB1c2goaCArICJfZHRvciIpLCBkLnB1c2gobFttXS5rYSkpOwogICAgICAgICAgcmV0dXJuIE4gJiYgKGYgKz0gYHZhciByZXQgPSByZXRUeXBlLmZyb21XaXJlVHlwZShydik7CnJldHVybiByZXQ7CmApLCBNLnB1c2goZiArIGB9CmApLCBsID0gZGUoTSkuYXBwbHkobnVsbCwgZCksIEV0KHAsIGwsIHQgLSAxKSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGU6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIHMpIHsKICAgICAgICBmdW5jdGlvbiB1KGYpIHsKICAgICAgICAgIHJldHVybiBmOwogICAgICAgIH0KICAgICAgICB0ID0gVyh0KSwgcyA9PT0gLTEgJiYgKHMgPSA0Mjk0OTY3Mjk1KTsKICAgICAgICB2YXIgYyA9IHpuKHIpOwogICAgICAgIGlmIChpID09PSAwKSB7CiAgICAgICAgICB2YXIgbCA9IDMyIC0gOCAqIHI7CiAgICAgICAgICB1ID0gZnVuY3Rpb24oZikgewogICAgICAgICAgICByZXR1cm4gZiA8PCBsID4+PiBsOwogICAgICAgICAgfTsKICAgICAgICB9CiAgICAgICAgdmFyIHAgPSB0LmluZGV4T2YoInVuc2lnbmVkIikgIT0gLTE7CiAgICAgICAgeihuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogdSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oZiwgZCkgewogICAgICAgICAgaWYgKHR5cGVvZiBkICE9ICJudW1iZXIiICYmIHR5cGVvZiBkICE9ICJib29sZWFuIikgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgIicgKyBzbihkKSArICciIHRvICcgKyB0aGlzLm5hbWUpOwogICAgICAgICAgaWYgKGQgPCBpIHx8IGQgPiBzKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdQYXNzaW5nIGEgbnVtYmVyICInICsgc24oZCkgKyAnIiBmcm9tIEpTIHNpZGUgdG8gQy9DKysgc2lkZSB0byBhbiBhcmd1bWVudCBvZiB0eXBlICInICsgdCArICciLCB3aGljaCBpcyBvdXRzaWRlIHRoZSB2YWxpZCByYW5nZSBbJyArIGkgKyAiLCAiICsgcyArICJdISIpOwogICAgICAgICAgcmV0dXJuIHAgPyBkID4+PiAwIDogZCB8IDA7CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBoZSh0LCBjLCBpICE9PSAwKSwga2E6IG51bGwgfSk7CiAgICAgIH0sCiAgICAgIGQ6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBmdW5jdGlvbiBpKHUpIHsKICAgICAgICAgIHUgPj49IDI7CiAgICAgICAgICB2YXIgYyA9IFU7CiAgICAgICAgICByZXR1cm4gbmV3IHMobm4sIGNbdSArIDFdLCBjW3VdKTsKICAgICAgICB9CiAgICAgICAgdmFyIHMgPSBbSW50OEFycmF5LCBVaW50OEFycmF5LCBJbnQxNkFycmF5LCBVaW50MTZBcnJheSwgSW50MzJBcnJheSwgVWludDMyQXJyYXksIEZsb2F0MzJBcnJheSwgRmxvYXQ2NEFycmF5XVt0XTsKICAgICAgICByID0gVyhyKSwgeihuLCB7IG5hbWU6IHIsIGZyb21XaXJlVHlwZTogaSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBpIH0sIHsgRWE6ICEwIH0pOwogICAgICB9LAogICAgICBuOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdCA9IFcodCk7CiAgICAgICAgdmFyIHIgPSB0ID09PSAic3RkOjpzdHJpbmciOwogICAgICAgIHoobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICB2YXIgcyA9IFVbaSA+PiAyXTsKICAgICAgICAgICAgaWYgKHIpIGZvciAodmFyIHUgPSBpICsgNCwgYyA9IDA7IGMgPD0gczsgKytjKSB7CiAgICAgICAgICAgICAgdmFyIGwgPSBpICsgNCArIGM7CiAgICAgICAgICAgICAgaWYgKGMgPT0gcyB8fCBJW2xdID09IDApIHsKICAgICAgICAgICAgICAgIGlmICh1KSB7CiAgICAgICAgICAgICAgICAgIHZhciBwID0gdSwgZiA9IEksIGQgPSBwICsgKGwgLSB1KTsKICAgICAgICAgICAgICAgICAgZm9yICh1ID0gcDsgZlt1XSAmJiAhKHUgPj0gZCk7ICkgKyt1OwogICAgICAgICAgICAgICAgICBpZiAoMTYgPCB1IC0gcCAmJiBmLnN1YmFycmF5ICYmIGl0KSBwID0gaXQuZGVjb2RlKGYuc3ViYXJyYXkocCwgdSkpOwogICAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICBmb3IgKGQgPSAiIjsgcCA8IHU7ICkgewogICAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBmW3ArK107CiAgICAgICAgICAgICAgICAgICAgICBpZiAoaCAmIDEyOCkgewogICAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IGZbcCsrXSAmIDYzOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGggJiAyMjQpID09IDE5MikgZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChoICYgMzEpIDw8IDYgfCB3KTsKICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFQgPSBmW3ArK10gJiA2MzsKICAgICAgICAgICAgICAgICAgICAgICAgICBoID0gKGggJiAyNDApID09IDIyNCA/IChoICYgMTUpIDw8IDEyIHwgdyA8PCA2IHwgVCA6IChoICYgNykgPDwgMTggfCB3IDw8IDEyIHwgVCA8PCA2IHwgZltwKytdICYgNjMsIDY1NTM2ID4gaCA/IGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShoKSA6IChoIC09IDY1NTM2LCBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTYgfCBoID4+IDEwLCA1NjMyMCB8IGggJiAxMDIzKSk7CiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoaCk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIHAgPSBkOwogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9IGVsc2UgcCA9ICIiOwogICAgICAgICAgICAgICAgaWYgKG0gPT09IHZvaWQgMCkgdmFyIG0gPSBwOwogICAgICAgICAgICAgICAgZWxzZSBtICs9ICJcMCIsIG0gKz0gcDsKICAgICAgICAgICAgICAgIHUgPSBsICsgMTsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgZm9yIChtID0gQXJyYXkocyksIGMgPSAwOyBjIDwgczsgKytjKSBtW2NdID0gU3RyaW5nLmZyb21DaGFyQ29kZShJW2kgKyA0ICsgY10pOwogICAgICAgICAgICAgIG0gPSBtLmpvaW4oIiIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiBEKGkpLCBtOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIHMpIHsKICAgICAgICAgICAgcyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyICYmIChzID0gbmV3IFVpbnQ4QXJyYXkocykpOwogICAgICAgICAgICB2YXIgdSA9IHR5cGVvZiBzID09ICJzdHJpbmciOwogICAgICAgICAgICB1IHx8IHMgaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IHMgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSB8fCBzIGluc3RhbmNlb2YgSW50OEFycmF5IHx8IHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gc3RkOjpzdHJpbmciKTsKICAgICAgICAgICAgdmFyIGMgPSAociAmJiB1ID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IDAsIGQgPSAwOyBkIDwgcy5sZW5ndGg7ICsrZCkgewogICAgICAgICAgICAgICAgdmFyIGggPSBzLmNoYXJDb2RlQXQoZCk7CiAgICAgICAgICAgICAgICA1NTI5NiA8PSBoICYmIDU3MzQzID49IGggJiYgKGggPSA2NTUzNiArICgoaCAmIDEwMjMpIDw8IDEwKSB8IHMuY2hhckNvZGVBdCgrK2QpICYgMTAyMyksIDEyNyA+PSBoID8gKytmIDogZiA9IDIwNDcgPj0gaCA/IGYgKyAyIDogNjU1MzUgPj0gaCA/IGYgKyAzIDogZiArIDQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHJldHVybiBmOwogICAgICAgICAgICB9IDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgcmV0dXJuIHMubGVuZ3RoOwogICAgICAgICAgICB9KSgpLCBsID0gTW4oNCArIGMgKyAxKTsKICAgICAgICAgICAgaWYgKFVbbCA+PiAyXSA9IGMsIHIgJiYgdSkgWXQocywgbCArIDQsIGMgKyAxKTsKICAgICAgICAgICAgZWxzZSBpZiAodSkgZm9yICh1ID0gMDsgdSA8IGM7ICsrdSkgewogICAgICAgICAgICAgIHZhciBwID0gcy5jaGFyQ29kZUF0KHUpOwogICAgICAgICAgICAgIDI1NSA8IHAgJiYgKEQobCksIHYoIlN0cmluZyBoYXMgVVRGLTE2IGNvZGUgdW5pdHMgdGhhdCBkbyBub3QgZml0IGluIDggYml0cyIpKSwgSVtsICsgNCArIHVdID0gcDsKICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIGZvciAodSA9IDA7IHUgPCBjOyArK3UpIElbbCArIDQgKyB1XSA9IHNbdV07CiAgICAgICAgICAgIHJldHVybiBpICE9PSBudWxsICYmIGkucHVzaChELCBsKSwgbDsKICAgICAgICAgIH0sCiAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBUbiwKICAgICAgICAgIGthOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIEQoaSk7CiAgICAgICAgICB9CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGo6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBpZiAociA9IFcociksIHQgPT09IDIpCiAgICAgICAgICB2YXIgaSA9IFp0LCBzID0gSnQsIHUgPSBLdCwgYyA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICByZXR1cm4gZ247CiAgICAgICAgICB9LCBsID0gMTsKICAgICAgICBlbHNlIHQgPT09IDQgJiYgKGkgPSBRdCwgcyA9IFh0LCB1ID0gcXQsIGMgPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiBVOwogICAgICAgIH0sIGwgPSAyKTsKICAgICAgICB6KG4sIHsgbmFtZTogciwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihwKSB7CiAgICAgICAgICBmb3IgKHZhciBmID0gVVtwID4+IDJdLCBkID0gYygpLCBoLCB3ID0gcCArIDQsIFQgPSAwOyBUIDw9IGY7ICsrVCkgewogICAgICAgICAgICB2YXIgbSA9IHAgKyA0ICsgVCAqIHQ7CiAgICAgICAgICAgIChUID09IGYgfHwgZFttID4+IGxdID09IDApICYmICh3ID0gaSh3LCBtIC0gdyksIGggPT09IHZvaWQgMCA/IGggPSB3IDogKGggKz0gIlwwIiwgaCArPSB3KSwgdyA9IG0gKyB0KTsKICAgICAgICAgIH0KICAgICAgICAgIHJldHVybiBEKHApLCBoOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHAsIGYpIHsKICAgICAgICAgIHR5cGVvZiBmICE9ICJzdHJpbmciICYmIHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gQysrIHN0cmluZyB0eXBlICIgKyByKTsKICAgICAgICAgIHZhciBkID0gdShmKSwgaCA9IE1uKDQgKyBkICsgdCk7CiAgICAgICAgICByZXR1cm4gVVtoID4+IDJdID0gZCA+PiBsLCBzKGYsIGggKyA0LCBkICsgdCksIHAgIT09IG51bGwgJiYgcC5wdXNoKEQsIGgpLCBoOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogVG4sIGthOiBmdW5jdGlvbihwKSB7CiAgICAgICAgICBEKHApOwogICAgICAgIH0gfSk7CiAgICAgIH0sCiAgICAgIHg6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gVyh0KSwgeihuLCB7IFFhOiAhMCwgbmFtZTogdCwgYXJnUGFja0FkdmFuY2U6IDAsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSB9KTsKICAgICAgfSwKICAgICAgazogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIG4gPSBLbihuKSwgdCA9IE10KHQsICJlbXZhbDo6YXMiKTsKICAgICAgICB2YXIgaSA9IFtdLCBzID0gb24oaSk7CiAgICAgICAgcmV0dXJuIFNbciA+PiAyXSA9IHMsIHQudG9XaXJlVHlwZShpLCBuKTsKICAgICAgfSwKICAgICAgaTogSm4sCiAgICAgIGw6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICByZXR1cm4gbiA9IEtuKG4pLCB0ID0gS24odCksIG9uKG5bdF0pOwogICAgICB9LAogICAgICBwOiBmdW5jdGlvbihuKSB7CiAgICAgICAgdmFyIHQgPSBwZVtuXTsKICAgICAgICByZXR1cm4gb24odCA9PT0gdm9pZCAwID8gVyhuKSA6IHQpOwogICAgICB9LAogICAgICBvOiBmdW5jdGlvbihuKSB7CiAgICAgICAgYm4oeFtuXS52YWx1ZSksIEpuKG4pOwogICAgICB9LAogICAgICB5OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgcmV0dXJuIG4gPSBNdChuLCAiX2VtdmFsX3Rha2VfdmFsdWUiKSwgbiA9IG4ucmVhZFZhbHVlRnJvbVBvaW50ZXIodCksIG9uKG4pOwogICAgICB9LAogICAgICBmOiBmdW5jdGlvbigpIHsKICAgICAgICBmbigpOwogICAgICB9LAogICAgICBxOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgSS5jb3B5V2l0aGluKG4sIHQsIHQgKyByKTsKICAgICAgfSwKICAgICAgcjogZnVuY3Rpb24obikgewogICAgICAgIG4gPj4+PSAwOwogICAgICAgIHZhciB0ID0gSS5sZW5ndGg7CiAgICAgICAgaWYgKDIxNDc0ODM2NDggPCBuKSByZXR1cm4gITE7CiAgICAgICAgZm9yICh2YXIgciA9IDE7IDQgPj0gcjsgciAqPSAyKSB7CiAgICAgICAgICB2YXIgaSA9IHQgKiAoMSArIDAuMiAvIHIpOwogICAgICAgICAgaSA9IE1hdGgubWluKGksIG4gKyAxMDA2NjMyOTYpLCBpID0gTWF0aC5tYXgoMTY3NzcyMTYsIG4sIGkpLCAwIDwgaSAlIDY1NTM2ICYmIChpICs9IDY1NTM2IC0gaSAlIDY1NTM2KTsKICAgICAgICAgIG46IHsKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICBZLmdyb3coTWF0aC5taW4oMjE0NzQ4MzY0OCwgaSkgLSBubi5ieXRlTGVuZ3RoICsgNjU1MzUgPj4+IDE2KSwgdXQoWS5idWZmZXIpOwogICAgICAgICAgICAgIHZhciBzID0gMTsKICAgICAgICAgICAgICBicmVhayBuOwogICAgICAgICAgICB9IGNhdGNoIHsKICAgICAgICAgICAgfQogICAgICAgICAgICBzID0gdm9pZCAwOwogICAgICAgICAgfQogICAgICAgICAgaWYgKHMpIHJldHVybiAhMDsKICAgICAgICB9CiAgICAgICAgcmV0dXJuICExOwogICAgICB9LAogICAgICBzOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSAwOwogICAgICAgIHJldHVybiBXdCgpLmZvckVhY2goZnVuY3Rpb24oaSwgcykgewogICAgICAgICAgdmFyIHUgPSB0ICsgcjsKICAgICAgICAgIGZvciAocyA9IFNbbiArIDQgKiBzID4+IDJdID0gdSwgdSA9IDA7IHUgPCBpLmxlbmd0aDsgKyt1KSBaW3MrKyA+PiAwXSA9IGkuY2hhckNvZGVBdCh1KTsKICAgICAgICAgIFpbcyA+PiAwXSA9IDAsIHIgKz0gaS5sZW5ndGggKyAxOwogICAgICAgIH0pLCAwOwogICAgICB9LAogICAgICB0OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSBXdCgpOwogICAgICAgIFNbbiA+PiAyXSA9IHIubGVuZ3RoOwogICAgICAgIHZhciBpID0gMDsKICAgICAgICByZXR1cm4gci5mb3JFYWNoKGZ1bmN0aW9uKHMpIHsKICAgICAgICAgIGkgKz0gcy5sZW5ndGggKyAxOwogICAgICAgIH0pLCBTW3QgPj4gMl0gPSBpLCAwOwogICAgICB9LAogICAgICBhOiBZCiAgICB9OwogICAgKGZ1bmN0aW9uKCkgewogICAgICBmdW5jdGlvbiBuKHUpIHsKICAgICAgICB1ID0gdS5leHBvcnRzLCB1ID0gUnQodSksIGUuYXNtID0gdSwgSi0tLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKEopLCBKID09IDAgJiYgY24gJiYgKHUgPSBjbiwgY24gPSBudWxsLCB1KCkpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIHQodSkgewogICAgICAgIG4odS5pbnN0YW5jZSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gcih1KSB7CiAgICAgICAgcmV0dXJuIGVlKCkudGhlbihmdW5jdGlvbihjKSB7CiAgICAgICAgICByZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoYywgaSk7CiAgICAgICAgfSkudGhlbih1LCBmdW5jdGlvbihjKSB7CiAgICAgICAgICBQKCJmYWlsZWQgdG8gYXN5bmNocm9ub3VzbHkgcHJlcGFyZSB3YXNtOiAiICsgYyksIGZuKGMpOwogICAgICAgIH0pOwogICAgICB9CiAgICAgIHZhciBpID0geyBhOiBtZSB9OwogICAgICBpZiAoSisrLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKEopLCBlLmluc3RhbnRpYXRlV2FzbSkgdHJ5IHsKICAgICAgICB2YXIgcyA9IGUuaW5zdGFudGlhdGVXYXNtKGksIG4pOwogICAgICAgIHJldHVybiBzID0gUnQocyk7CiAgICAgIH0gY2F0Y2ggKHUpIHsKICAgICAgICByZXR1cm4gUCgiTW9kdWxlLmluc3RhbnRpYXRlV2FzbSBjYWxsYmFjayBmYWlsZWQgd2l0aCBlcnJvcjogIiArIHUpLCAhMTsKICAgICAgfQogICAgICByZXR1cm4gZnVuY3Rpb24oKSB7CiAgICAgICAgaWYgKEwgfHwgdHlwZW9mIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nICE9ICJmdW5jdGlvbiIgfHwgaHQoKSB8fCBIbigiZmlsZTovLyIpIHx8IHR5cGVvZiBmZXRjaCAhPSAiZnVuY3Rpb24iKSByZXR1cm4gcih0KTsKICAgICAgICBmZXRjaChLLCB7IGNyZWRlbnRpYWxzOiAic2FtZS1vcmlnaW4iIH0pLnRoZW4oZnVuY3Rpb24odSkgewogICAgICAgICAgcmV0dXJuIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKHUsIGkpLnRoZW4odCwgZnVuY3Rpb24oYykgewogICAgICAgICAgICByZXR1cm4gUCgid2FzbSBzdHJlYW1pbmcgY29tcGlsZSBmYWlsZWQ6ICIgKyBjKSwgUCgiZmFsbGluZyBiYWNrIHRvIEFycmF5QnVmZmVyIGluc3RhbnRpYXRpb24iKSwgcih0KTsKICAgICAgICAgIH0pOwogICAgICAgIH0pOwogICAgICB9KCksIHt9OwogICAgfSkoKTsKICAgIHZhciB4dCA9IGUuX19fd2FzbV9jYWxsX2N0b3JzID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoeHQgPSBlLl9fX3dhc21fY2FsbF9jdG9ycyA9IGUuYXNtLkIpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBNbiA9IGUuX21hbGxvYyA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKE1uID0gZS5fbWFsbG9jID0gZS5hc20uQykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIEQgPSBlLl9mcmVlID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoRCA9IGUuX2ZyZWUgPSBlLmFzbS5EKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgRnQgPSBlLl9fX2dldFR5cGVOYW1lID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoRnQgPSBlLl9fX2dldFR5cGVOYW1lID0gZS5hc20uRSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH07CiAgICBlLl9fX2VtYmluZF9yZWdpc3Rlcl9uYXRpdmVfYW5kX2J1aWx0aW5fdHlwZXMgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9fX2VtYmluZF9yZWdpc3Rlcl9uYXRpdmVfYW5kX2J1aWx0aW5fdHlwZXMgPSBlLmFzbS5GKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpID0gZS5hc20uRykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aSA9IGUuYXNtLkgpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9pID0gZS5hc20uSSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpID0gZS5hc20uSikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWkgPSBlLmFzbS5LKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2ZpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9maWkgPSBlLmFzbS5MKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWYgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpZiA9IGUuYXNtLk0pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWkgPSBlLmFzbS5OKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaSA9IGUuYXNtLk8pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpaSA9IGUuYXNtLlApLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaSA9IGUuYXNtLlEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWlpaWkgPSBlLmFzbS5SKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpID0gZS5hc20uUykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlpZGkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaWRpID0gZS5hc20uVCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlkaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlkaSA9IGUuYXNtLlUpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaWkgPSBlLmFzbS5WKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaSA9IGUuYXNtLlcpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaSA9IGUuYXNtLlgpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWlpID0gZS5hc20uWSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaSA9IGUuYXNtLlopLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpID0gZS5hc20uXykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0YXJ0X3Vud2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0YXJ0X3Vud2luZCA9IGUuYXNtLiQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdG9wX3Vud2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0b3BfdW53aW5kID0gZS5hc20uYWEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdGFydF9yZXdpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdGFydF9yZXdpbmQgPSBlLmFzbS5iYSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0b3BfcmV3aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RvcF9yZXdpbmQgPSBlLmFzbS5jYSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH07CiAgICB2YXIgU247CiAgICBjbiA9IGZ1bmN0aW9uIG4oKSB7CiAgICAgIFNuIHx8IFhuKCksIFNuIHx8IChjbiA9IG4pOwogICAgfTsKICAgIGZ1bmN0aW9uIFhuKCkgewogICAgICBmdW5jdGlvbiBuKCkgewogICAgICAgIGlmICghU24gJiYgKFNuID0gITAsIGUuY2FsbGVkUnVuID0gITAsICFObikpIHsKICAgICAgICAgIGlmICh3bihmdCksIHduKG5lKSwgeShlKSwgZS5vblJ1bnRpbWVJbml0aWFsaXplZCAmJiBlLm9uUnVudGltZUluaXRpYWxpemVkKCksIGUucG9zdFJ1bikgZm9yICh0eXBlb2YgZS5wb3N0UnVuID09ICJmdW5jdGlvbiIgJiYgKGUucG9zdFJ1biA9IFtlLnBvc3RSdW5dKTsgZS5wb3N0UnVuLmxlbmd0aDsgKSB7CiAgICAgICAgICAgIHZhciB0ID0gZS5wb3N0UnVuLnNoaWZ0KCk7CiAgICAgICAgICAgIGR0LnVuc2hpZnQodCk7CiAgICAgICAgICB9CiAgICAgICAgICB3bihkdCk7CiAgICAgICAgfQogICAgICB9CiAgICAgIGlmICghKDAgPCBKKSkgewogICAgICAgIGlmIChlLnByZVJ1bikgZm9yICh0eXBlb2YgZS5wcmVSdW4gPT0gImZ1bmN0aW9uIiAmJiAoZS5wcmVSdW4gPSBbZS5wcmVSdW5dKTsgZS5wcmVSdW4ubGVuZ3RoOyApIHRlKCk7CiAgICAgICAgd24oY3QpLCAwIDwgSiB8fCAoZS5zZXRTdGF0dXMgPyAoZS5zZXRTdGF0dXMoIlJ1bm5pbmcuLi4iKSwgc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGUuc2V0U3RhdHVzKCIiKTsKICAgICAgICAgIH0sIDEpLCBuKCk7CiAgICAgICAgfSwgMSkpIDogbigpKTsKICAgICAgfQogICAgfQogICAgaWYgKGUucnVuID0gWG4sIGUucHJlSW5pdCkgZm9yICh0eXBlb2YgZS5wcmVJbml0ID09ICJmdW5jdGlvbiIgJiYgKGUucHJlSW5pdCA9IFtlLnByZUluaXRdKTsgMCA8IGUucHJlSW5pdC5sZW5ndGg7ICkgZS5wcmVJbml0LnBvcCgpKCk7CiAgICByZXR1cm4gWG4oKSwgby5yZWFkeTsKICB9Owp9KCk7CmNsYXNzIEYgZXh0ZW5kcyBFcnJvciB7CiAgY29uc3RydWN0b3IoZSwgeSkgewogICAgc3VwZXIoZSk7CiAgICBxbih0aGlzLCAiY2F1c2UiKTsKICAgIHRoaXMubmFtZSA9ICJBdXRvQ2FwdHVyZUVycm9yIiwgdGhpcy5jYXVzZSA9IHk7CiAgfQogIC8vIENoYW5nZSB0aGlzIHRvIERlY29yYXRvciB3aGVuIHRoZXkgd2lsbCBiZSBpbiBzdGFibGUgcmVsZWFzZQogIHN0YXRpYyBsb2dFcnJvcihlKSB7CiAgfQogIHN0YXRpYyBmcm9tQ2FtZXJhRXJyb3IoZSkgewogICAgaWYgKHRoaXMubG9nRXJyb3IoZSksIGUgaW5zdGFuY2VvZiBGKQogICAgICByZXR1cm4gZTsKICAgIGxldCB5OwogICAgc3dpdGNoIChlLm5hbWUpIHsKICAgICAgY2FzZSAiT3ZlcmNvbnN0cmFpbmVkRXJyb3IiOgogICAgICAgIHkgPSAiTWluaW11bSBxdWFsaXR5IHJlcXVpcmVtZW50cyBhcmUgbm90IG1ldCBieSB5b3VyIGNhbWVyYSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdFJlYWRhYmxlRXJyb3IiOgogICAgICBjYXNlICJBYm9ydEVycm9yIjoKICAgICAgICB5ID0gIlRoZSB3ZWJjYW0gaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciBhcHBsaWNhdGlvbiI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdEFsbG93ZWRFcnJvciI6CiAgICAgICAgeSA9ICJUbyB1c2UgeW91ciBjYW1lcmEsIHlvdSBtdXN0IGFsbG93IHBlcm1pc3Npb25zIjsKICAgICAgICBicmVhazsKICAgICAgY2FzZSAiTm90Rm91bmRFcnJvciI6CiAgICAgICAgeSA9ICJUaGVyZSBpcyBubyBjYW1lcmEgYXZhaWxhYmxlIHRvIHlvdSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGRlZmF1bHQ6CiAgICAgICAgeSA9ICJBbiB1bmtub3duIGNhbWVyYSBlcnJvciBoYXMgb2NjdXJyZWQiOwogICAgICAgIGJyZWFrOwogICAgfQogICAgcmV0dXJuIG5ldyBGKHksIGUpOwogIH0KICBzdGF0aWMgZnJvbUVycm9yKGUpIHsKICAgIGlmICh0aGlzLmxvZ0Vycm9yKGUpLCBlIGluc3RhbmNlb2YgRikKICAgICAgcmV0dXJuIGU7CiAgICBjb25zdCB5ID0gIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkIjsKICAgIHJldHVybiBuZXcgRih5KTsKICB9Cn0KY29uc3QgQWUgPSB7CiAgUkdCOiAiUkdCIiwKICBSR0JBOiAiUkdCQSIKfTsKdmFyICQsIHEsIGxuOwpjbGFzcyBfZSB7CiAgY29uc3RydWN0b3IobywgZSkgewogICAgV24odGhpcywgJCk7CiAgICBXbih0aGlzLCBxKTsKICAgIFduKHRoaXMsIGxuKTsKICAgIGtuKHRoaXMsICQsIG8pLCBrbih0aGlzLCBxLCB0aGlzLmFsbG9jYXRlKGUubGVuZ3RoICogZS5CWVRFU19QRVJfRUxFTUVOVCkpLCBrbih0aGlzLCBsbiwgdGhpcy5hbGxvY2F0ZShlLmxlbmd0aCAqIGUuQllURVNfUEVSX0VMRU1FTlQpKTsKICB9CiAgZ2V0IHJnYmFJbWFnZVBvaW50ZXIoKSB7CiAgICByZXR1cm4gSCh0aGlzLCBxKTsKICB9CiAgZ2V0IGJncjBJbWFnZVBvaW50ZXIoKSB7CiAgICByZXR1cm4gSCh0aGlzLCBsbik7CiAgfQogIGFsbG9jYXRlKG8pIHsKICAgIHJldHVybiBIKHRoaXMsICQpLl9tYWxsb2Mobyk7CiAgfQogIGZyZWUoKSB7CiAgICBIKHRoaXMsICQpLl9mcmVlKEgodGhpcywgcSkpLCBIKHRoaXMsICQpLl9mcmVlKEgodGhpcywgbG4pKTsKICB9CiAgd3JpdGVEYXRhVG9NZW1vcnkobykgewogICAgSCh0aGlzLCAkKS5IRUFQVTguc2V0KG8sIEgodGhpcywgcSkpOwogIH0KfQokID0gbmV3IFdlYWtNYXAoKSwgcSA9IG5ldyBXZWFrTWFwKCksIGxuID0gbmV3IFdlYWtNYXAoKTsKY2xhc3MgQ2UgewogIGNvbnN0cnVjdG9yKCkgewogICAgcW4odGhpcywgInNhbVdhc21Nb2R1bGUiKTsKICB9CiAgZ2V0T3ZlcnJpZGRlbk1vZHVsZXMobywgZSkgewogICAgcmV0dXJuIHsKICAgICAgbG9jYXRlRmlsZTogKHkpID0+IG5ldyBVUkwoZSB8fCB5LCBvKS5ocmVmCiAgICB9OwogIH0KICBhc3luYyBoYW5kbGVNaXNzaW5nT3JJbnZhbGlkU2FtTW9kdWxlKG8sIGUpIHsKICAgIHRyeSB7CiAgICAgIGNvbnN0IHkgPSBhd2FpdCBmZXRjaChvKTsKICAgICAgaWYgKCF5Lm9rKQogICAgICAgIHRocm93IG5ldyBGKAogICAgICAgICAgYFRoZSBwYXRoIHRvICR7ZX0gaXMgaW5jb3JyZWN0IG9yIHRoZSBtb2R1bGUgaXMgbWlzc2luZy4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7b31gCiAgICAgICAgKTsKICAgICAgY29uc3QgZyA9IGF3YWl0IHkuYXJyYXlCdWZmZXIoKTsKICAgICAgaWYgKCFXZWJBc3NlbWJseS52YWxpZGF0ZShnKSkKICAgICAgICB0aHJvdyBuZXcgRigKICAgICAgICAgIGBUaGUgcHJvdmlkZWQgJHtlfSBpcyBub3QgYSB2YWxpZCBXQVNNIG1vZHVsZS4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7b31gCiAgICAgICAgKTsKICAgIH0gY2F0Y2ggKHkpIHsKICAgICAgaWYgKHkgaW5zdGFuY2VvZiBGKQogICAgICAgIHRocm93IGNvbnNvbGUuZXJyb3IoCiAgICAgICAgICAiWW91IGNhbiBmaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgaG93IHRvIGhvc3Qgd2FzbSBmaWxlcyBoZXJlOiBodHRwczovL2RldmVsb3BlcnMuaW5ub3ZhdHJpY3MuY29tL2RpZ2l0YWwtb25ib2FyZGluZy90ZWNobmljYWwvcmVtb3RlL2RvdC13ZWItZG9jdW1lbnQvbGF0ZXN0L2RvY3VtZW50YXRpb24vI19ob3N0aW5nX3NhbV93YXNtIgogICAgICAgICksIHk7CiAgICB9CiAgfQogIGFzeW5jIGdldFdhc21GaWxlTmFtZSgpIHsKICAgIHJldHVybiBhd2FpdCBnZSgpID8gSHQuc2ltZCA6IEh0LnNhbTsKICB9CiAgYXN5bmMgaW5pdFNhbU1vZHVsZShvLCBlID0gIi93YXNtIikgewogICAgaWYgKHRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgcmV0dXJuOwogICAgY29uc3QgeSA9IGF3YWl0IHRoaXMuZ2V0V2FzbUZpbGVOYW1lKCksIGcgPSBgJHtlfS8ke3l9YDsKICAgIHRyeSB7CiAgICAgIHRoaXMuc2FtV2FzbU1vZHVsZSA9IGF3YWl0IHdlKHRoaXMuZ2V0T3ZlcnJpZGRlbk1vZHVsZXMobywgZykpOwogICAgfSBjYXRjaCB7CiAgICAgIHRocm93IGF3YWl0IHRoaXMuaGFuZGxlTWlzc2luZ09ySW52YWxpZFNhbU1vZHVsZShnLCB5KSwgbmV3IEYoIkNvdWxkIG5vdCBpbml0IGRldGVjdG9yLiIpOwogICAgfQogIH0KICBhc3luYyBnZXRTYW1WZXJzaW9uKCkgewogICAgdmFyIGU7CiAgICBjb25zdCBvID0gYXdhaXQgKChlID0gdGhpcy5zYW1XYXNtTW9kdWxlKSA9PSBudWxsID8gdm9pZCAwIDogZS5nZXRJbmZvU3RyaW5nKCkpOwogICAgcmV0dXJuIG8gPT0gbnVsbCA/IHZvaWQgMCA6IG8udHJpbSgpOwogIH0KICAvKgogICAqIEluIFRTIDUuMi4wIHdhcyBhZGRlZCBzcGVjaWFsIGtleXdvcmQgInVzaW5nIiB3aGljaCBjb3VsZCBiZSBwZXJmZWN0IGZvciB0aGlzIGNhc2UuCiAgICogVW5mb3J0dW5hdGVseSwgdml0ZSBwcmVhY3QgcGx1Z2luIGRvZXMgbm90IHN1cHBvcnQgdGhpcyB2ZXJzaW9uIG9mIFRTIHlldC4KICAgKiBDaGVjayBwb3NzaWJpbGl0eSBvZiB1c2luZyAidXNpbmciIGtleXdvcmQgd2hlbiB2aXRlIHByZWFjdCBwbHVnaW4gdXBkYXRlcwogICAqLwogIHdyaXRlSW1hZ2VUb01lbW9yeShvKSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IEYoIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIGNvbnN0IGUgPSBuZXcgX2UodGhpcy5zYW1XYXNtTW9kdWxlLCBvKTsKICAgIHJldHVybiBlLndyaXRlRGF0YVRvTWVtb3J5KG8pLCBlOwogIH0KICBjb252ZXJ0VG9TYW1Db2xvckltYWdlKG8sIGUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgRigiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgY29uc3QgeSA9IHRoaXMud3JpdGVJbWFnZVRvTWVtb3J5KG8pOwogICAgcmV0dXJuIHRoaXMuc2FtV2FzbU1vZHVsZS5jb252ZXJ0VG9TYW1Db2xvckltYWdlKAogICAgICBlLndpZHRoLAogICAgICBlLmhlaWdodCwKICAgICAgeS5yZ2JhSW1hZ2VQb2ludGVyLAogICAgICBBZS5SR0JBLAogICAgICB5LmJncjBJbWFnZVBvaW50ZXIKICAgICksIHk7CiAgfQp9CmNvbnN0IFJuID0gKGEsIG8pID0+IE1hdGguaHlwb3Qoby54IC0gYS54LCBvLnkgLSBhLnkpLCBFZSA9IChhKSA9PiB7CiAgY29uc3QgeyBib3R0b21MZWZ0OiBvLCBib3R0b21SaWdodDogZSwgdG9wTGVmdDogeSwgdG9wUmlnaHQ6IGcgfSA9IGEsIEMgPSBSbih5LCBnKSwgQSA9IFJuKGcsIGUpLCBiID0gUm4obywgZSksIE8gPSBSbih5LCBvKTsKICByZXR1cm4gTWF0aC5taW4oQywgQSwgYiwgTyk7Cn07Ci8qKgogKiBAbGljZW5zZQogKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDCiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wCiAqLwpjb25zdCB6dCA9IFN5bWJvbCgiQ29tbGluay5wcm94eSIpLCBUZSA9IFN5bWJvbCgiQ29tbGluay5lbmRwb2ludCIpLCBQZSA9IFN5bWJvbCgiQ29tbGluay5yZWxlYXNlUHJveHkiKSwgbnQgPSBTeW1ib2woIkNvbWxpbmsuZmluYWxpemVyIiksIHhuID0gU3ltYm9sKCJDb21saW5rLnRocm93biIpLCBCdCA9IChhKSA9PiB0eXBlb2YgYSA9PSAib2JqZWN0IiAmJiBhICE9PSBudWxsIHx8IHR5cGVvZiBhID09ICJmdW5jdGlvbiIsIGJlID0gewogIGNhbkhhbmRsZTogKGEpID0+IEJ0KGEpICYmIGFbenRdLAogIHNlcmlhbGl6ZShhKSB7CiAgICBjb25zdCB7IHBvcnQxOiBvLCBwb3J0MjogZSB9ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7CiAgICByZXR1cm4gZXQoYSwgbyksIFtlLCBbZV1dOwogIH0sCiAgZGVzZXJpYWxpemUoYSkgewogICAgcmV0dXJuIGEuc3RhcnQoKSwgV2UoYSk7CiAgfQp9LCBPZSA9IHsKICBjYW5IYW5kbGU6IChhKSA9PiBCdChhKSAmJiB4biBpbiBhLAogIHNlcmlhbGl6ZSh7IHZhbHVlOiBhIH0pIHsKICAgIGxldCBvOwogICAgcmV0dXJuIGEgaW5zdGFuY2VvZiBFcnJvciA/IG8gPSB7CiAgICAgIGlzRXJyb3I6ICEwLAogICAgICB2YWx1ZTogewogICAgICAgIG1lc3NhZ2U6IGEubWVzc2FnZSwKICAgICAgICBuYW1lOiBhLm5hbWUsCiAgICAgICAgc3RhY2s6IGEuc3RhY2sKICAgICAgfQogICAgfSA6IG8gPSB7IGlzRXJyb3I6ICExLCB2YWx1ZTogYSB9LCBbbywgW11dOwogIH0sCiAgZGVzZXJpYWxpemUoYSkgewogICAgdGhyb3cgYS5pc0Vycm9yID8gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoYS52YWx1ZS5tZXNzYWdlKSwgYS52YWx1ZSkgOiBhLnZhbHVlOwogIH0KfSwgRHQgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcChbCiAgWyJwcm94eSIsIGJlXSwKICBbInRocm93IiwgT2VdCl0pOwpmdW5jdGlvbiBNZShhLCBvKSB7CiAgZm9yIChjb25zdCBlIG9mIGEpCiAgICBpZiAobyA9PT0gZSB8fCBlID09PSAiKiIgfHwgZSBpbnN0YW5jZW9mIFJlZ0V4cCAmJiBlLnRlc3QobykpCiAgICAgIHJldHVybiAhMDsKICByZXR1cm4gITE7Cn0KZnVuY3Rpb24gZXQoYSwgbyA9IGdsb2JhbFRoaXMsIGUgPSBbIioiXSkgewogIG8uYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGZ1bmN0aW9uIHkoZykgewogICAgaWYgKCFnIHx8ICFnLmRhdGEpCiAgICAgIHJldHVybjsKICAgIGlmICghTWUoZSwgZy5vcmlnaW4pKSB7CiAgICAgIGNvbnNvbGUud2FybihgSW52YWxpZCBvcmlnaW4gJyR7Zy5vcmlnaW59JyBmb3IgY29tbGluayBwcm94eWApOwogICAgICByZXR1cm47CiAgICB9CiAgICBjb25zdCB7IGlkOiBDLCB0eXBlOiBBLCBwYXRoOiBiIH0gPSBPYmplY3QuYXNzaWduKHsgcGF0aDogW10gfSwgZy5kYXRhKSwgTyA9IChnLmRhdGEuYXJndW1lbnRMaXN0IHx8IFtdKS5tYXAoWCk7CiAgICBsZXQgRTsKICAgIHRyeSB7CiAgICAgIGNvbnN0IF8gPSBiLnNsaWNlKDAsIC0xKS5yZWR1Y2UoKFAsIEwpID0+IFBbTF0sIGEpLCBSID0gYi5yZWR1Y2UoKFAsIEwpID0+IFBbTF0sIGEpOwogICAgICBzd2l0Y2ggKEEpIHsKICAgICAgICBjYXNlICJHRVQiOgogICAgICAgICAgRSA9IFI7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJTRVQiOgogICAgICAgICAgX1tiLnNsaWNlKC0xKVswXV0gPSBYKGcuZGF0YS52YWx1ZSksIEUgPSAhMDsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIkFQUExZIjoKICAgICAgICAgIEUgPSBSLmFwcGx5KF8sIE8pOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiQ09OU1RSVUNUIjoKICAgICAgICAgIHsKICAgICAgICAgICAgY29uc3QgUCA9IG5ldyBSKC4uLk8pOwogICAgICAgICAgICBFID0gRmUoUCk7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJFTkRQT0lOVCI6CiAgICAgICAgICB7CiAgICAgICAgICAgIGNvbnN0IHsgcG9ydDE6IFAsIHBvcnQyOiBMIH0gPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTsKICAgICAgICAgICAgZXQoYSwgTCksIEUgPSB4ZShQLCBbUF0pOwogICAgICAgICAgfQogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiUkVMRUFTRSI6CiAgICAgICAgICBFID0gdm9pZCAwOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHJldHVybjsKICAgICAgfQogICAgfSBjYXRjaCAoXykgewogICAgICBFID0geyB2YWx1ZTogXywgW3huXTogMCB9OwogICAgfQogICAgUHJvbWlzZS5yZXNvbHZlKEUpLmNhdGNoKChfKSA9PiAoeyB2YWx1ZTogXywgW3huXTogMCB9KSkudGhlbigoXykgPT4gewogICAgICBjb25zdCBbUiwgUF0gPSBqbihfKTsKICAgICAgby5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIFIpLCB7IGlkOiBDIH0pLCBQKSwgQSA9PT0gIlJFTEVBU0UiICYmIChvLnJlbW92ZUV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCB5KSwgVnQobyksIG50IGluIGEgJiYgdHlwZW9mIGFbbnRdID09ICJmdW5jdGlvbiIgJiYgYVtudF0oKSk7CiAgICB9KS5jYXRjaCgoXykgPT4gewogICAgICBjb25zdCBbUiwgUF0gPSBqbih7CiAgICAgICAgdmFsdWU6IG5ldyBUeXBlRXJyb3IoIlVuc2VyaWFsaXphYmxlIHJldHVybiB2YWx1ZSIpLAogICAgICAgIFt4bl06IDAKICAgICAgfSk7CiAgICAgIG8ucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBSKSwgeyBpZDogQyB9KSwgUCk7CiAgICB9KTsKICB9KSwgby5zdGFydCAmJiBvLnN0YXJ0KCk7Cn0KZnVuY3Rpb24gU2UoYSkgewogIHJldHVybiBhLmNvbnN0cnVjdG9yLm5hbWUgPT09ICJNZXNzYWdlUG9ydCI7Cn0KZnVuY3Rpb24gVnQoYSkgewogIFNlKGEpICYmIGEuY2xvc2UoKTsKfQpmdW5jdGlvbiBXZShhLCBvKSB7CiAgcmV0dXJuIHR0KGEsIFtdLCBvKTsKfQpmdW5jdGlvbiBJbihhKSB7CiAgaWYgKGEpCiAgICB0aHJvdyBuZXcgRXJyb3IoIlByb3h5IGhhcyBiZWVuIHJlbGVhc2VkIGFuZCBpcyBub3QgdXNlYWJsZSIpOwp9CmZ1bmN0aW9uIEd0KGEpIHsKICByZXR1cm4gdW4oYSwgewogICAgdHlwZTogIlJFTEVBU0UiCiAgfSkudGhlbigoKSA9PiB7CiAgICBWdChhKTsKICB9KTsKfQpjb25zdCBGbiA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpLCBMbiA9ICJGaW5hbGl6YXRpb25SZWdpc3RyeSIgaW4gZ2xvYmFsVGhpcyAmJiBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoKGEpID0+IHsKICBjb25zdCBvID0gKEZuLmdldChhKSB8fCAwKSAtIDE7CiAgRm4uc2V0KGEsIG8pLCBvID09PSAwICYmIEd0KGEpOwp9KTsKZnVuY3Rpb24ga2UoYSwgbykgewogIGNvbnN0IGUgPSAoRm4uZ2V0KG8pIHx8IDApICsgMTsKICBGbi5zZXQobywgZSksIExuICYmIExuLnJlZ2lzdGVyKGEsIG8sIGEpOwp9CmZ1bmN0aW9uIFJlKGEpIHsKICBMbiAmJiBMbi51bnJlZ2lzdGVyKGEpOwp9CmZ1bmN0aW9uIHR0KGEsIG8gPSBbXSwgZSA9IGZ1bmN0aW9uKCkgewp9KSB7CiAgbGV0IHkgPSAhMTsKICBjb25zdCBnID0gbmV3IFByb3h5KGUsIHsKICAgIGdldChDLCBBKSB7CiAgICAgIGlmIChJbih5KSwgQSA9PT0gUGUpCiAgICAgICAgcmV0dXJuICgpID0+IHsKICAgICAgICAgIFJlKGcpLCBHdChhKSwgeSA9ICEwOwogICAgICAgIH07CiAgICAgIGlmIChBID09PSAidGhlbiIpIHsKICAgICAgICBpZiAoby5sZW5ndGggPT09IDApCiAgICAgICAgICByZXR1cm4geyB0aGVuOiAoKSA9PiBnIH07CiAgICAgICAgY29uc3QgYiA9IHVuKGEsIHsKICAgICAgICAgIHR5cGU6ICJHRVQiLAogICAgICAgICAgcGF0aDogby5tYXAoKE8pID0+IE8udG9TdHJpbmcoKSkKICAgICAgICB9KS50aGVuKFgpOwogICAgICAgIHJldHVybiBiLnRoZW4uYmluZChiKTsKICAgICAgfQogICAgICByZXR1cm4gdHQoYSwgWy4uLm8sIEFdKTsKICAgIH0sCiAgICBzZXQoQywgQSwgYikgewogICAgICBJbih5KTsKICAgICAgY29uc3QgW08sIEVdID0gam4oYik7CiAgICAgIHJldHVybiB1bihhLCB7CiAgICAgICAgdHlwZTogIlNFVCIsCiAgICAgICAgcGF0aDogWy4uLm8sIEFdLm1hcCgoXykgPT4gXy50b1N0cmluZygpKSwKICAgICAgICB2YWx1ZTogTwogICAgICB9LCBFKS50aGVuKFgpOwogICAgfSwKICAgIGFwcGx5KEMsIEEsIGIpIHsKICAgICAgSW4oeSk7CiAgICAgIGNvbnN0IE8gPSBvW28ubGVuZ3RoIC0gMV07CiAgICAgIGlmIChPID09PSBUZSkKICAgICAgICByZXR1cm4gdW4oYSwgewogICAgICAgICAgdHlwZTogIkVORFBPSU5UIgogICAgICAgIH0pLnRoZW4oWCk7CiAgICAgIGlmIChPID09PSAiYmluZCIpCiAgICAgICAgcmV0dXJuIHR0KGEsIG8uc2xpY2UoMCwgLTEpKTsKICAgICAgY29uc3QgW0UsIF9dID0gVXQoYik7CiAgICAgIHJldHVybiB1bihhLCB7CiAgICAgICAgdHlwZTogIkFQUExZIiwKICAgICAgICBwYXRoOiBvLm1hcCgoUikgPT4gUi50b1N0cmluZygpKSwKICAgICAgICBhcmd1bWVudExpc3Q6IEUKICAgICAgfSwgXykudGhlbihYKTsKICAgIH0sCiAgICBjb25zdHJ1Y3QoQywgQSkgewogICAgICBJbih5KTsKICAgICAgY29uc3QgW2IsIE9dID0gVXQoQSk7CiAgICAgIHJldHVybiB1bihhLCB7CiAgICAgICAgdHlwZTogIkNPTlNUUlVDVCIsCiAgICAgICAgcGF0aDogby5tYXAoKEUpID0+IEUudG9TdHJpbmcoKSksCiAgICAgICAgYXJndW1lbnRMaXN0OiBiCiAgICAgIH0sIE8pLnRoZW4oWCk7CiAgICB9CiAgfSk7CiAgcmV0dXJuIGtlKGcsIGEpLCBnOwp9CmZ1bmN0aW9uIEllKGEpIHsKICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgYSk7Cn0KZnVuY3Rpb24gVXQoYSkgewogIGNvbnN0IG8gPSBhLm1hcChqbik7CiAgcmV0dXJuIFtvLm1hcCgoZSkgPT4gZVswXSksIEllKG8ubWFwKChlKSA9PiBlWzFdKSldOwp9CmNvbnN0ICR0ID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7CmZ1bmN0aW9uIHhlKGEsIG8pIHsKICByZXR1cm4gJHQuc2V0KGEsIG8pLCBhOwp9CmZ1bmN0aW9uIEZlKGEpIHsKICByZXR1cm4gT2JqZWN0LmFzc2lnbihhLCB7IFt6dF06ICEwIH0pOwp9CmZ1bmN0aW9uIGpuKGEpIHsKICBmb3IgKGNvbnN0IFtvLCBlXSBvZiBEdCkKICAgIGlmIChlLmNhbkhhbmRsZShhKSkgewogICAgICBjb25zdCBbeSwgZ10gPSBlLnNlcmlhbGl6ZShhKTsKICAgICAgcmV0dXJuIFsKICAgICAgICB7CiAgICAgICAgICB0eXBlOiAiSEFORExFUiIsCiAgICAgICAgICBuYW1lOiBvLAogICAgICAgICAgdmFsdWU6IHkKICAgICAgICB9LAogICAgICAgIGcKICAgICAgXTsKICAgIH0KICByZXR1cm4gWwogICAgewogICAgICB0eXBlOiAiUkFXIiwKICAgICAgdmFsdWU6IGEKICAgIH0sCiAgICAkdC5nZXQoYSkgfHwgW10KICBdOwp9CmZ1bmN0aW9uIFgoYSkgewogIHN3aXRjaCAoYS50eXBlKSB7CiAgICBjYXNlICJIQU5ETEVSIjoKICAgICAgcmV0dXJuIER0LmdldChhLm5hbWUpLmRlc2VyaWFsaXplKGEudmFsdWUpOwogICAgY2FzZSAiUkFXIjoKICAgICAgcmV0dXJuIGEudmFsdWU7CiAgfQp9CmZ1bmN0aW9uIHVuKGEsIG8sIGUpIHsKICByZXR1cm4gbmV3IFByb21pc2UoKHkpID0+IHsKICAgIGNvbnN0IGcgPSBMZSgpOwogICAgYS5hZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgZnVuY3Rpb24gQyhBKSB7CiAgICAgICFBLmRhdGEgfHwgIUEuZGF0YS5pZCB8fCBBLmRhdGEuaWQgIT09IGcgfHwgKGEucmVtb3ZlRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIEMpLCB5KEEuZGF0YSkpOwogICAgfSksIGEuc3RhcnQgJiYgYS5zdGFydCgpLCBhLnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oeyBpZDogZyB9LCBvKSwgZSk7CiAgfSk7Cn0KZnVuY3Rpb24gTGUoKSB7CiAgcmV0dXJuIG5ldyBBcnJheSg0KS5maWxsKDApLm1hcCgoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikudG9TdHJpbmcoMTYpKS5qb2luKCItIik7Cn0KY2xhc3MgamUgZXh0ZW5kcyBDZSB7CiAgcGFyc2VSYXdEYXRhKG8pIHsKICAgIGNvbnN0IHsgYnJpZ2h0bmVzczogZSwgaG90c3BvdHM6IHksIHNoYXJwbmVzczogZyB9ID0gby5wYXJhbXMsIEMgPSB7CiAgICAgIGNvbmZpZGVuY2U6IG8uY29uZmlkZW5jZSAvIDFlMywKICAgICAgdG9wTGVmdDogewogICAgICAgIHg6IG8ueDAsCiAgICAgICAgeTogby55MAogICAgICB9LAogICAgICB0b3BSaWdodDogewogICAgICAgIHg6IG8ueDEsCiAgICAgICAgeTogby55MQogICAgICB9LAogICAgICBib3R0b21SaWdodDogewogICAgICAgIHg6IG8ueDIsCiAgICAgICAgeTogby55MgogICAgICB9LAogICAgICBib3R0b21MZWZ0OiB7CiAgICAgICAgeDogby54MywKICAgICAgICB5OiBvLnkzCiAgICAgIH0sCiAgICAgIGJyaWdodG5lc3M6IGUgLyAxZTMsCiAgICAgIGhvdHNwb3RzOiB5IC8gMWUzLAogICAgICBzaGFycG5lc3M6IGcgLyAxZTMKICAgIH07CiAgICByZXR1cm4gewogICAgICAuLi5DLAogICAgICBzbWFsbGVzdEVkZ2U6IEVlKEMpCiAgICB9OwogIH0KICBhc3luYyBkZXRlY3QobywgZSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBGKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICBjb25zdCB5ID0gdGhpcy5jb252ZXJ0VG9TYW1Db2xvckltYWdlKG8sIGUpLCBnID0gdGhpcy5zYW1XYXNtTW9kdWxlLmRldGVjdERvY3VtZW50V2l0aEltYWdlUGFyYW1ldGVycygKICAgICAgZS53aWR0aCwKICAgICAgZS5oZWlnaHQsCiAgICAgIHkuYmdyMEltYWdlUG9pbnRlciwKICAgICAgMCwKICAgICAgLy8gcGFyYW1XaWR0aCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICAgMCwKICAgICAgLy8gcGFyYW1IZWlnaHQgc2hvdWxkIGJlIDAgKGRlZmF1bHQgdmFsdWUpCiAgICAgIDAKICAgICAgLy8gZG9jdW1lbnREZXRlY3Rpb25PcHRpb25zIC0gc3BlZWQgb3B0aW9uIC0gc2V0IGFzICJzdGFuZGFyZCBmdWxsIG1ldGhvZCIKICAgICk7CiAgICByZXR1cm4geS5mcmVlKCksIHRoaXMucGFyc2VSYXdEYXRhKGcpOwogIH0KfQpldChqZSk7Cg==", lI = (x) => Uint8Array.from(atob(x), (o) => o.charCodeAt(0)), Ya = typeof window < "u" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);", lI(Nc)], { type: "text/javascript;charset=utf-8" });
function II(x) {
  let o;
  try {
    if (o = Ya && (window.URL || window.webkitURL).createObjectURL(Ya), !o) throw "";
    const t = new Worker(o, {
      type: "module",
      name: x == null ? void 0 : x.name
    });
    return t.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(o);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + Nc,
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
    D(this, "className", "DocumentImageProcessor");
    D(this, "detector");
    D(this, "validationService");
    this.detector = t, this.validationService = e;
  }
  optimizeImageBeforeDetection(t) {
    const e = Rx(t), n = Bl(t, e);
    return super.optimizeImageBeforeDetection(n);
  }
  async process({ image: t, timestamp: e }) {
    const n = this.optimizeImageBeforeDetection(t);
    let i = await this.detector.detect(n.data, n.resolution);
    i = Kl(i, Rx(t)), i = Rl(i, n.resolution);
    const r = {};
    return r.image = t, r.timestamp = e, r.imageData = n.data, r.detectedObject = i, this.processDetectedObject(r);
  }
}
var H0, x0, o0;
class CI {
  constructor(o) {
    ce(this, H0);
    ce(this, x0);
    ce(this, o0);
    ae(this, H0, o), ae(this, x0, /* @__PURE__ */ new Map());
  }
  validate() {
    N(this, H0).forEach((o) => {
      N(this, x0).set(o.name, o.evaluate());
    }), ae(this, o0, void (-6377 + -1 * -6377));
  }
  isValid() {
    return N(this, o0) === void (3005 + -601 * 5) && ae(this, o0, Array.from(N(this, x0).values()).every((o) => o)), N(this, o0);
  }
  get result() {
    return N(this, x0);
  }
  get validators() {
    return N(this, H0);
  }
}
H0 = new WeakMap(), x0 = new WeakMap(), o0 = new WeakMap();
var mn, i0;
class I0 {
  constructor(o, t) {
    ce(this, mn);
    ce(this, i0);
    ae(this, mn, o), ae(this, i0, t);
  }
  get threshold() {
    return N(this, i0);
  }
  get name() {
    return N(this, mn);
  }
  isValueBelowThreshold(o) {
    return o < N(this, i0);
  }
  isValueAboveThreshold(o) {
    return o > N(this, i0);
  }
}
mn = new WeakMap(), i0 = new WeakMap();
const pI = "isNotDim";
var bn;
class hI extends I0 {
  constructor(t, e) {
    super(pI, t);
    ce(this, bn);
    ae(this, bn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(N(this, bn));
  }
}
bn = new WeakMap();
const mI = "isNotSmall";
var An;
class bI extends I0 {
  constructor(t, e) {
    super(mI, t);
    ce(this, An);
    ae(this, An, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(N(this, An));
  }
}
An = new WeakMap();
const AI = "isNotBright";
var yn;
class yI extends I0 {
  constructor(t, e) {
    super(AI, t);
    ce(this, yn);
    ae(this, yn, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(N(this, yn));
  }
}
yn = new WeakMap();
const WI = "isPresent";
var Wn;
class vI extends I0 {
  constructor(t, e) {
    super(WI, t);
    ce(this, Wn);
    ae(this, Wn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(N(this, Wn));
  }
}
Wn = new WeakMap();
const wI = "isSharp";
var vn;
class SI extends I0 {
  constructor(t, e) {
    super(wI, t);
    ce(this, vn);
    ae(this, vn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(N(this, vn));
  }
}
vn = new WeakMap();
var wn;
class BI extends I0 {
  constructor(t, e) {
    super("noHotspots", t);
    ce(this, wn);
    ae(this, wn, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(N(this, wn));
  }
}
wn = new WeakMap();
const GI = "isNotOutOfBounds";
var Sn, K0;
class kI extends I0 {
  constructor(t, e, n) {
    super(GI, t);
    ce(this, Sn);
    ce(this, K0);
    ae(this, Sn, e), ae(this, K0, n);
  }
  evaluate() {
    const t = sc(N(this, K0), this.threshold, Rx(N(this, K0))), { bottomLeft: e, bottomRight: n, topLeft: i, topRight: r } = N(this, Sn), a = {};
    return a.topLeft = i, a.topRight = r, a.bottomLeft = e, a.bottomRight = n, Hl(a, t);
  }
}
Sn = new WeakMap(), K0 = new WeakMap();
class OI {
  static getDocumentValidationInstance(o, t, e) {
    return new CI([new vI(o.confidenceThreshold, t.confidence), new SI(o.sharpnessThreshold, t.sharpness), new hI(o.brightnessLowThreshold, t.brightness), new yI(o.brightnessHighThreshold, t.brightness), new BI(o.hotspotsScoreThreshold, t.hotspots), new kI(o.outOfBoundsThreshold, t, e), new bI(o.sizeSmallThreshold, t.smallestEdge)]);
  }
}
class ZI extends eI {
  constructor() {
    super(...arguments);
    D(this, "className", "DocumentValidationService");
  }
  validateDetectedObject(t, e) {
    const n = OI.getDocumentValidationInstance(this.getThresholds(), t, e);
    return n.validate(), n;
  }
}
const qx = class qx extends q1 {
  constructor(t, e, n) {
    super(e, n);
    D(this, "detector");
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
    super.stopDetectionLoop(), gc(Zt.INSTRUCTION_CHANGED, (t = this.detection) == null ? void 0 : t["fallbackInstruction"], sl);
  }
};
D(qx, "_instance");
let Zi = qx;
const HI = () => {
  const { handleError: x } = Zn(), { thresholds: o, wasmDirectoryPath: t } = tr(), [e, n] = tt();
  he(() => {
    (async () => {
      const a = await Zi.getInstance(t);
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
function KI() {
  const { cameraFacing: x, captureMode: o, onPhotoTaken: t, sessionToken: e } = tr(), { controller: n } = HI(), i = Kt(({ candidateSelectionImages: s, imageData: c, protoMessage: d }) => {
    Jl(ec.DOCUMENT, s), t(c, d);
  }, [t]), r = Kt(({ processedImage: s }) => {
    gc(Zt.INSTRUCTION_CHANGED, s.instructionCode), n && _l(Zt.DETECTED_DOCUMENT_CHANGED, s.detection, n.imageProcessor.validationService.getThresholds().confidenceThreshold);
  }, [n]), a = {};
  return a.captureMode = o, a.cameraFacing = x, a.controller = n, a.createProtoMessage = z1, a.onCapture = i, a.onDetection = r, a.sessionToken = e, a.customEvent = Zt, a.fallbackInstruction = St.DOCUMENT_NOT_PRESENT, a.instructionCodeMap = St, a.checkToInstructionCodeMap = vu, b1(a);
}
const RI = () => {
  const { sunfish: x } = Hn(), { cameraResolution: o, detectionDetails: t, shouldCameraMirror: e, videoRef: n } = KI();
  return /* @__PURE__ */ O(xt, { children: /* @__PURE__ */ O(
    Fl,
    {
      cameraResolution: o,
      detectionDetails: t,
      shouldMirror: e,
      children: /* @__PURE__ */ O(
        hu,
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
}, PI = (x) => /* @__PURE__ */ O(Vl, { cameraOptions: x, children: /* @__PURE__ */ O(RI, {}) });
function VI({ initAppState: x, onError: o }) {
  const [t, e] = tt(x), [n, i] = tt(), [r, a] = tt(!1), s = Ht(o);
  he(() => {
    s.current = o;
  }, [o]);
  const c = {};
  return c.appState = t, c.setAppState = e, c.error = n, c.setError = i, c.isCameraReady = r, c.setIsCameraReady = a, c.onErrorRef = s, c;
}
function TI({ onError: x }) {
  const { appState: o, error: t, isCameraReady: e, onErrorRef: n, setAppState: i, setError: r, setIsCameraReady: a } = VI({
    initAppState: Me.LOADING,
    onError: x
  }), s = I1(o), c = Kt(
    (g) => {
      wa(Zt.STATE_CHANGED, { appState: Me.ERROR, error: g }), a(!1), n.current(g), r(g), i(Me.ERROR);
    },
    [n, r, i, a]
  ), d = Kt(
    (g) => {
      wa(Zt.STATE_CHANGED, { appState: g }), i(g);
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
var Yc = ((x) => (x.AUTO_CAPTURE = "auto-capture", x.LONG_CAPTURE_SMILE = "long-capture-smile", x))(Yc || {});
class DI {
  constructor() {
    D(this, "appKey", "");
    D(this, "deviceId", "");
  }
  async countlyFetch(o) {
    if (!this.appKey || !this.deviceId) return;
    const t = {};
    t.Accept = "application/json";
    const e = {};
    e.method = "GET", e.headers = t;
    const n = e, i = "https://innovatrics.count.ly/i?", r = {};
    r.app_key = this.appKey, r.device_id = this.deviceId;
    const a = $n(r);
    try {
      await fetch("" + i + a + "&" + o, n);
    } catch (s) {
      console.error("Countly Error", s);
    }
  }
  async init(o, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = o;
    const e = { _app_version: ic() }, n = { organization: rc(window.location.href) }, i = $n({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(n) });
    await this.countlyFetch(i);
  }
  async endSession() {
    const o = {};
    o.end_session = "1";
    const t = $n(o);
    await this.countlyFetch(t);
  }
  async sendEvent(o, t, e) {
    const n = {};
    n.key = o, n.count = 1, n.dur = e, n.segmentation = t;
    const i = [n], r = $n({ events: JSON.stringify(i) });
    await this.countlyFetch(r);
  }
  async sendAutoCaptureEvent(o, t) {
    await this.sendEvent(Yc.AUTO_CAPTURE, o, t);
  }
}
const xx = new DI();
class EI {
  constructor() {
    D(this, "countly", xx);
  }
  createSegmentation(o) {
    return { appVersion: ic(), ...o };
  }
  init(o) {
    if (yl()) return;
    const t = c1();
    xx.init(t, o);
  }
  endSession() {
    xx.endSession();
  }
  walleye(o, t) {
    const e = {};
    e.nocturne = o, e.customer = t;
    const n = this.createSegmentation(e);
    xx.sendAutoCaptureEvent(n);
  }
}
class LI extends EI {
  trackCaptureProcess({ averageFps: o, captureProcessDurationInMs: t, detection: e, deviceName: n, facingMode: i, imageResolution: r, instructionSet: a }) {
    if (!e) return;
    const s = u1(t), c = this.createSegmentation({ hotspots: tn(e.hotspots), brightness: tn(e.brightness), confidence: tn(e.confidence), sharpness: tn(e.sharpness), smallestEdge: tn(e.smallestEdge), camera: g1(n, i), imageResolution: r.width + "x" + r.height, averageFps: l1(o), captureTime: d1(s), instructionSet: a });
    this.countly.sendAutoCaptureEvent(c, s);
  }
}
const NI = new LI();
let X;
const Gt = new Array(-327 * -22 + 3531 + 10597 * -1).fill(void 0);
Gt.push(void 0, null, !0, !1);
function Hi(x) {
  return Gt[x];
}
let pt = -439 * 1 + -4809 + 5248, an = null;
function mx() {
  return (an === null || an.byteLength === 127 * -51 + 6002 + 475) && (an = new Uint8Array(X.memory.buffer)), an;
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
function pn(x, o, t) {
  if (t === void 0) {
    const a = bx.encode(x), s = o(a.length, 9537 + -5 * 1361 + -1 * 2731) >>> 0;
    return mx().subarray(s, s + a.length).set(a), pt = a.length, s;
  }
  let e = x.length, n = o(e, 5473 + -1397 * 5 + 89 * 17) >>> 2735 * 1 + 2389 * 4 + 4097 * -3;
  const i = mx();
  let r = 9841 + -1 * -9996 + 1 * -19837;
  for (; r < e; r++) {
    const a = x.charCodeAt(r);
    if (a > -384 + -272 * -2 + -33) break;
    i[n + r] = a;
  }
  if (r !== e) {
    r !== 1994 + -1144 * -3 + -1 * 5426 && (x = x.slice(r)), n = t(n, e, e = r + x.length * 3, -2 * 3869 + -1 * -7474 + 265) >>> 13262 + -2 * 6631;
    const a = mx().subarray(n + r, n + e), s = YI(x, a);
    r += s.written, n = t(n, e, r, 962 + -4 * -1388 + 2171 * -3) >>> 83 * 54 + 19 * 209 + -8453;
  }
  return pt = r, n;
}
function Fc(x) {
  return x == null;
}
let sn = null;
function ft() {
  return (sn === null || sn.byteLength === -9 * -805 + 2522 + 9767 * -1) && (sn = new Int32Array(X.memory.buffer)), sn;
}
let ln = Gt.length;
function FI(x) {
  x < 132 || (Gt[x] = ln, ln = x);
}
function Xc(x) {
  const o = Hi(x);
  return FI(x), o;
}
const Ki = {};
Ki.ignoreBOM = !0, Ki.fatal = !0;
const jc = typeof TextDecoder < "u" ? new TextDecoder("utf-8", Ki) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && jc.decode();
function Mx(x, o) {
  return x = x >>> 0, jc.decode(mx().subarray(x, x + o));
}
function Ri(x) {
  ln === Gt.length && Gt.push(Gt.length + (14201 + -200 * 71));
  const o = ln;
  return ln = Gt[o], Gt[o] = x, o;
}
let cn = null;
function Mc() {
  return (cn === null || cn.byteLength === 288 + -2 * 556 + -8 * -103) && (cn = new Uint32Array(X.memory.buffer)), cn;
}
function Fa(x, o) {
  const t = o(x.length * 4, 4) >>> 0, e = Mc();
  for (let n = -4721 * 1 + -1189 + 5910; n < x.length; n++)
    e[t / (3729 * 2 + -8597 + 1143) + n] = Ri(x[n]);
  return pt = x.length, t;
}
function Xa(x, o) {
  x = x >>> 37 * -149 + 8348 + -2835;
  const t = Mc(), e = t.subarray(x / (1334 + -5776 * -1 + -374 * 19), x / (-107 * -43 + 7357 + -11954) + o), n = [];
  for (let i = 6164 + 5568 * 1 + -1676 * 7; i < e.length; i++)
    n.push(Xc(e[i]));
  return n;
}
function XI(x, o) {
  const t = pn(x, X.__wbindgen_malloc, X.__wbindgen_realloc), e = pt, n = pn(o, X.__wbindgen_malloc, X.__wbindgen_realloc), i = pt, r = X.is_mobile_supported(t, e, n, i);
  return gr.__wrap(r);
}
const Pi = {};
Pi.register = () => {
}, Pi.unregister = () => {
};
const ja = typeof FinalizationRegistry > "u" ? Pi : new FinalizationRegistry((x) => X.__wbg_licensevalidationresult_free(x >>> -35 * -229 + -8347 + 332));
class gr {
  static __wrap(o) {
    o = o >>> -2798 * -1 + -1 * 7348 + -175 * -26;
    const t = Object.create(gr.prototype);
    return t.__wbg_ptr = o, ja.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const o = this.__wbg_ptr;
    return this.__wbg_ptr = 2138 * -3 + -7832 + 14246, ja.unregister(this), o;
  }
  free() {
    const o = this.__destroy_into_raw();
    X.__wbg_licensevalidationresult_free(o);
  }
  constructor(o, t, e, n, i) {
    var r = Fc(t) ? 0 : pn(t, X.__wbindgen_malloc, X.__wbindgen_realloc), a = pt;
    const s = Fa(e, X.__wbindgen_malloc), c = pt, d = Fa(n, X.__wbindgen_malloc), g = pt, p = pn(i, X.__wbindgen_malloc, X.__wbindgen_realloc), u = pt, C = X.licensevalidationresult_new(o, r, a, s, c, d, g, p, u);
    return this.__wbg_ptr = C >>> 3369 * -2 + -733 * 13 + 16267, this;
  }
  get is_valid() {
    return X.licensevalidationresult_is_valid(this.__wbg_ptr) !== 313 * -19 + 296 * -9 + 8611;
  }
  get features_json() {
    try {
      const e = X.__wbindgen_add_to_stack_pointer(-16);
      X.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var o = ft()[e / (2 * 4612 + 2 * -196 + -8828) + 0], t = ft()[e / 4 + (240 * -24 + 5523 + 238)];
      let n;
      return o !== 1 * 9953 + -7 * 827 + -4164 && (n = Mx(o, t).slice(), X.__wbindgen_free(o, t * (1 * -2543 + 54 * 19 + 1518), -1552 * -3 + -4511 * 1 + -144)), n;
    } finally {
      X.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get errors() {
    try {
      const n = X.__wbindgen_add_to_stack_pointer(-16);
      X.licensevalidationresult_errors(n, this.__wbg_ptr);
      var o = ft()[n / (-2144 * 1 + -6399 + 21 * 407) + (9643 + -1 * -6982 + -3325 * 5)], t = ft()[n / (2494 + -545 * 11 + -1 * -3505) + (14 * 244 + -6 * 316 + -49 * 31)], e = Xa(o, t).slice();
      return X.__wbindgen_free(o, t * (-2 * -3233 + 5472 + -11934), -4001 + 2 * -1021 + 6047 * 1), e;
    } finally {
      X.__wbindgen_add_to_stack_pointer(1 * 355 + 3902 + -4241);
    }
  }
  get warnings() {
    try {
      const n = X.__wbindgen_add_to_stack_pointer(-16);
      X.licensevalidationresult_warnings(n, this.__wbg_ptr);
      var o = ft()[n / (3137 * -3 + 4 * -2 + 3 * 3141) + (8630 + 8513 * 1 + 1 * -17143)], t = ft()[n / (1 * 1882 + 1690 + -3568) + (-1 * -7899 + 2707 * -3 + 223)], e = Xa(o, t).slice();
      return X.__wbindgen_free(o, t * (9011 + 9007 * -1), -209 * 31 + 598 * 7 + -1 * -2297), e;
    } finally {
      X.__wbindgen_add_to_stack_pointer(-3047 + -6057 * -1 + 1497 * -2);
    }
  }
  get customer() {
    let o, t;
    try {
      const i = X.__wbindgen_add_to_stack_pointer(-16);
      X.licensevalidationresult_customer(i, this.__wbg_ptr);
      var e = ft()[i / (211 * -1 + 6988 + -6773) + (-2330 + -4 * 1762 + -9378 * -1)], n = ft()[i / (5756 * -1 + 1030 + 946 * 5) + (-1171 * -3 + -2510 + -167 * 6)];
      return o = e, t = n, Mx(e, n);
    } finally {
      X.__wbindgen_add_to_stack_pointer(-7 * -87 + -1 * 7203 + 661 * 10), X.__wbindgen_free(o, t, -93 * -107 + 10 * -211 + -7840);
    }
  }
}
async function jI(x, o) {
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
function MI() {
  const x = {};
  return x.wbg = {}, x.wbg.__wbindgen_string_get = function(o, t) {
    const e = Hi(t), n = typeof e == "string" ? e : void 0;
    var i = Fc(n) ? -2 * -4986 + 3751 + 1 * -13723 : pn(n, X.__wbindgen_malloc, X.__wbindgen_realloc), r = pt;
    ft()[o / (8861 * 1 + 1 * 3677 + -6267 * 2) + (3316 + -51 * 65)] = r, ft()[o / (-3083 * -2 + -1 * 9631 + 3469) + (-4896 + -8173 * 1 + 1867 * 7)] = i;
  }, x.wbg.__wbindgen_object_drop_ref = function(o) {
    Xc(o);
  }, x.wbg.__wbindgen_string_new = function(o, t) {
    const e = Mx(o, t);
    return Ri(e);
  }, x.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return Ri(/* @__PURE__ */ new Date());
  }, x.wbg.__wbg_getTime_2bc4375165f02d15 = function(o) {
    return Hi(o).getTime();
  }, x.wbg.__wbindgen_throw = function(o, t) {
    throw new Error(Mx(o, t));
  }, x;
}
function _I(x, o) {
  return X = x.exports, _c.__wbindgen_wasm_module = o, sn = null, cn = null, an = null, X;
}
async function _c(x) {
  if (X !== void 0) return X;
  typeof x > "u" && (x = new URL("dot_embedded_bg.wasm", import.meta.url));
  const o = MI();
  (typeof x == "string" || typeof Request == "function" && x instanceof Request || typeof URL == "function" && x instanceof URL) && (x = fetch(x));
  const { instance: t, module: e } = await jI(await x, o);
  return _I(t, e);
}
function Se(x, o) {
  const t = _x();
  return Se = function(e, n) {
    e = e - (-7523 + 1 * 584 + 1 * 7287);
    let i = t[e];
    if (Se.rpvyie === void 0) {
      var r = function(g) {
        const p = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", C = "";
        for (let b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = p.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          C += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const d = function(g, p) {
        let u = [], C = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          C = (C + u[l] + p.charCodeAt(l % p.length)) % 256, b = u[l], u[l] = u[C], u[C] = b;
        l = 0, C = 0;
        for (let v = 0; v < g.length; v++)
          l = (l + 1) % 256, C = (C + u[l]) % 256, b = u[l], u[l] = u[C], u[C] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[C]) % 256]);
        return A;
      };
      Se.rnfnpF = d, x = arguments, Se.rpvyie = !0;
    }
    const a = t[-10083 + -1 * -10083], s = e + a, c = x[s];
    return c ? i = c : (Se.ffhlSp === void 0 && (Se.ffhlSp = !0), i = Se.rnfnpF(i, n), x[s] = i), i;
  }, Se(x, o);
}
(function(x, o) {
  function t(a, s, c, d, g) {
    return Se(s - 131, a);
  }
  function e(a, s, c, d, g) {
    return Se(g - 523, a);
  }
  const n = x();
  function i(a, s, c, d, g) {
    return Se(d - -526, g);
  }
  function r(a, s, c, d, g) {
    return Se(s - 661, a);
  }
  for (; ; )
    try {
      if (-parseInt(t("oZHt", 509, 537, 510, 486)) / 1 * (-parseInt(i(-146, -144, -131, -120, "&mht")) / 2) + -parseInt(e("J2k*", 912, 895, 918, 897)) / 3 * (parseInt(r("2UZy", 1043, 1055, 1016, 1041)) / 4) + parseInt(i(-164, -116, -156, -134, "mQ$T")) / 5 + -parseInt(r("&mht", 1050, 1075, 1076, 1057)) / 6 * (parseInt(r("Knlj", 1059, 1078, 1083, 1032)) / 7) + -parseInt(i(-115, -151, -131, -140, "a^2E")) / 8 * (parseInt(t("MXz%", 499, 509, 483, 498)) / 9) + -parseInt(r("IdKY", 1061, 1044, 1046, 1083)) / 10 + -parseInt(i(-135, -179, -184, -157, "IdKY")) / 11 * (-parseInt(t("A2K*", 506, 526, 476, 534)) / 12) === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(_x, -1667232 + -14 * -117294 + 996865 * 1);
function Fo(x, o, t, e, n) {
  return Se(n - 55, e);
}
function ox(x, o, t, e, n) {
  return Se(e - -517, o);
}
function _x() {
  const x = ["z1DAW7BcUa", "u2ixWPu8", "D8kThcddQa", "EMxcS8okkmkxpSk2WP8", "cWGqW6lcSCotW4fLCtDXWPj2", "WOCJW41HW646s8kcWRhcPcm", "W557WOK/WRK", "i8oryCoFW7C", "cCoIwCoPWRDDWQVcMWG", "WPBcObHhqa", "WR3cGCoCWQFcGCojeM7cRGhcR1ij", "WROsW5O2AG", "W6PRW5JdINhdTmk0", "sSkZF8o5W5i", "dSoRpSkTWQ/cKmoLqKDruJ1v", "WPbXWPuZWRS", "W6ahWRFcI1JdSmkw", "dLtdRxbmaq4YWP3cPa", "j8k+hIdcRW", "W6pdLSoyW4eOBCoXWRtcOHtcLmoxrq", "dvzkWPzP", "o8kxmmkBWQZdTmkrd0RdGZK", "hIpdIdlcImoVmmorWPJcPuDGW6C", "W4/cMd9ll1ub", "W7hcICobW7ldJq", "WRpdMxNcKmkh", "gaRcVI16", "zaGNWP3dSa", "iJnjze8WDW", "ivSnu8kL", "bMCIdttcOSo0aSo+WOJcUSkbg8kD", "W5WCW6vSBW", "D8oeWOVcMYy", "WP3cRYi+vq", "FSkqfSkGWOq", "yblcQ8k4WRi", "W63dLSoBW41kmSkcWQFcHIq", "pSk/gb/cHCkXBq", "zCkEvmoKWOS", "CCo0EgVcSa", "F8kWaSkSWPq", "FqaJWOddOq", "W7K3WQ9M", "thFdNcddRq", "cH9uWPXU", "dSo8WOC/W7q", "W6eWeYjP", "W6NcReCUsq", "WRlcGmkaWO0", "W6KNWOrHna", "WOeNW4rMW61Ohmo2WQtcMISDW5ldIG", "W6ldMCoAW4XgfCkiWQxcIqK", "pgBcMSocWOO", "omoUW7X1WQrLpHvPAM9LyIO", "WRJdTrP/c2ODa8kfWRBdSfFdQa", "t8k2e8oqWPe", "WPhcPrSZqa", "Ee4Eu8kHgd4", "W4xcSmkTW7fOiXpcNtBcTmovpL3dUa", "dMuOcfFdN8kjD8o0WRe"];
  return _x = function() {
    return x;
  }, _x();
}
function Xo(x, o, t, e, n) {
  return Se(n - 503, x);
}
function Ma(x, o, t, e, n) {
  return Se(n - 890, x);
}
function _a(x, o, t, e, n) {
  return Se(e - 262, n);
}
var Ua;
class JI {
  constructor() {
    D(this, Ua, !1);
  }
  async [(Ua = Fo(415, 418, 411, "uFDH", 404) + Xo("OOn$", 909, 920, 885, 904) + Ma("Ck6[", 1291, 1255, 1253, 1280), Xo("&mht", 842, 834, 837, 861))](o = Ma("qtT$", 1285, 1271, 1264, 1267)) {
    function t(a, s, c, d, g) {
      return ox(a - 406, c, c - 253, d - 309);
    }
    function e(a, s, c, d, g) {
      return Fo(a - 172, s - 308, c - 348, g, s - -771);
    }
    function n(a, s, c, d, g) {
      return Xo(d, s - 369, c - 95, d - 368, g - -140);
    }
    function i(a, s, c, d, g) {
      return _a(a - 392, s - 301, c - 345, a - -249, s);
    }
    function r(a, s, c, d, g) {
      return ox(a - 124, c, c - 59, a - 953);
    }
    try {
      const a = o + "/" + tl;
      await _c(a), this[e(-329, -333, -344, -338, "tthu") + n(707, 738, 694, "NxYW", 711) + i(385, "lU7*", 400, 401, 371)] = !0;
    } catch {
      this[n(717, 753, 748, "*oTv", 734) + r(791, 800, "(Y76") + n(738, 707, 743, "JKCK", 713)] = !1, console[t(157, 161, "Tsyn", 144)](t(165, 151, "3O1^", 154) + n(761, 742, 751, "TC9a", 758) + r(802, 773, "zLd9") + n(746, 762, 745, "f&gN", 751) + r(817, 797, "*rOj") + t(175, 158, "q$gi", 149) + i(412, "nQc8", 422) + t(214, 185, "qtG)", 188) + i(366, "mQ$T", 386) + i(364, "djSC", 378) + e(-320, -331, -332, -353, "A2K*") + i(367, "Ck6[", 347) + r(833, 837, "djSC") + t(176, 161, "kqPt", 162) + e(-306, -314, -327, -321, "v$1$") + e(-366, -337, -323, -361, "Q%Ge") + i(416, "zLd9", 413) + e(-357, -357, -369, -374, "YYi5") + "n.");
    }
  }
  [Fo(436, 463, 468, "K9WN", 449) + ox(-136, "JKCK", -133, -113) + ox(-169, "MYG]", -169, -161) + "ed"]() {
    function o(t, e, n, i, r) {
      return _a(t - 490, e - 244, n - 261, i - 54, t);
    }
    return this[o("oZHt", 704, 711, 681) + o("A2K*", 702, 670, 692) + o("kArl", 741, 719, 721)];
  }
}
class jo extends Error {
  constructor() {
    super(...arguments);
    D(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function ix(x, o, t, e, n) {
  return Ie(x - -284, n);
}
(function(x, o) {
  function t(a, s, c, d, g) {
    return Ie(d - -391, g);
  }
  function e(a, s, c, d, g) {
    return Ie(c - 381, d);
  }
  var n = x();
  function i(a, s, c, d, g) {
    return Ie(d - -4, c);
  }
  for (; ; )
    try {
      var r = -parseInt(e(915, 862, 896, "wYJ6", 908)) / 1 * (-parseInt(e(894, 884, 870, "01aG", 852)) / 2) + parseInt(t(65, 114, 123, 101, "nJZ]")) / 3 * (-parseInt(t(72, 98, 104, 104, "Ppq%")) / 4) + parseInt(i(532, 501, "ZCkf", 527, 541)) / 5 * (-parseInt(i(510, 498, "vUur", 528, 559)) / 6) + parseInt(i(562, 530, "x7[K", 532, 561)) / 7 * (parseInt(i(504, 516, "kk2t", 522, 557)) / 8) + parseInt(e(899, 879, 893, "GD*A", 896)) / 9 * (parseInt(t(98, 91, 90, 115, "!l4B")) / 10) + parseInt(e(905, 889, 874, "p6iu", 843)) / 11 * (parseInt(e(841, 843, 867, "flnj", 876)) / 12) + -parseInt(t(105, 128, 101, 113, "janz")) / 13 * (parseInt(t(76, 77, 104, 106, "x7[K")) / 14);
      if (r === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Jx, 12 * -12902 + -817875 + 1430106);
function It(x, o, t, e, n) {
  return Ie(e - 507, o);
}
function UI(x, o, t, e, n) {
  return Ie(t - 347, n);
}
function S0(x, o, t, e, n) {
  return Ie(n - 456, t);
}
function Ie(x, o) {
  var t = Jx();
  return Ie = function(e, n) {
    e = e - (-5471 * -1 + 919 + 740 * -8);
    var i = t[e];
    if (Ie.QRYvGS === void 0) {
      var r = function(g) {
        for (var p = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", C = "", b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = p.indexOf(l);
        for (var R = 0, j = u.length; R < j; R++)
          C += "%" + ("00" + u.charCodeAt(R).toString(16)).slice(-2);
        return decodeURIComponent(C);
      }, a = function(g, p) {
        var u = [], C = 0, b, A = "";
        g = r(g);
        var l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          C = (C + u[l] + p.charCodeAt(l % p.length)) % 256, b = u[l], u[l] = u[C], u[C] = b;
        l = 0, C = 0;
        for (var v = 0; v < g.length; v++)
          l = (l + 1) % 256, C = (C + u[l]) % 256, b = u[l], u[l] = u[C], u[C] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[C]) % 256]);
        return A;
      };
      Ie.nXXeoo = a, x = arguments, Ie.QRYvGS = !0;
    }
    var s = t[-6517 + -53 * 109 + 18 * 683], c = e + s, d = x[c];
    return d ? i = d : (Ie.mOTISu === void 0 && (Ie.mOTISu = !0), i = Ie.nXXeoo(i, n), x[c] = i), i;
  }, Ie(x, o);
}
function Jx() {
  var x = ["lmo7WQhdUmk9", "qfq5WOHW", "hmoPW7P8W6BcP8otWOm", "WQPtxdtcVW", "WQhcG8olW7ddQW", "uLxcLfG", "WRtdUrKJW4u", "FXvUCCkkfgJcPSkAWODMqSkl", "rSkaBW", "W79smG", "jNRcKCo6jG", "r8k8W6O", "B1FcHa", "wmoGWPnjWOW4dq", "nwirWPZdUraXDCk4", "W6FdPNKFfW", "BLpcLt3cPW", "yueC", "W6jYnmoWEZBdMv8", "qeFdKCoaWQu", "W7TAiN/dUG", "paNcVSoLCbWXFJRdPW", "b8oEnXZcStS6WQNcRq", "WRq3W50KrW", "W41WisZcH8kBW6CchG", "nMitW4hcO3n1qmkgWPldUmowW6O", "WQZcNZJdUCoQEXZcMCkP", "msyNxZ7cJe0sWR3cG1G", "zczoWOVdPW", "pmokWQNdLSk1W7ddLMdcMG", "hg9/WQhdRq", "W6NcThXChCkohJxcI8kusG", "lmo8WR3dV8kH", "WR/dTSoikhC", "aNVcVa", "bJtdVdNdJa", "qwHqDCoEWQxdMCoDlqDKACo2", "ESkKWOa8Ca", "WQxcLNldICosDIJcQa", "W7irod/cPhfdW6j/", "owpdPmkZlgFcSCoZjcJcSa", "rJ48W7BcT8kedCo9WQanW7/cVJG", "W7RdGxi", "WQzsEdRcOq", "oMBdPCk/lJldICoBlJ7cTaNdOq", "xLxdOSoaWQ0", "j8oPW4fGi2GtDCkZiSkKW5tdKW", "CXrImSoZCdNcI8kU", "bxlcQf4U", "W7JdR8kbi8kt", "BwSBWQldGa", "WPWNDCoLkWymWOa", "zmozW7RcUSoC", "tCkXAcSU", "WO8GzsBcUW", "WQpdOHK+W6q", "DvpcGZlcQG", "tmk8W7LfW5e", "W6qJW5GdDNNcMq", "B1FcHa7cQa", "WPRdQwjvAa", "WQNdOJK6qq", "W4/cSceYt8kmscfgW4m", "WQFcTsGxlSkEW7zdW50", "W6NcTN5CgCkOartcLmkgFW", "ofVcIG", "vSkACHhcHW", "qSkNvIK6", "oCodWQ7cImo1WPdcIhtcL8oyBSk5qG", "latdHwJdTrn5u8oEW5O/F1G", "DmkXWPeX"];
  return Jx = function() {
    return x;
  }, Jx();
}
var R0, Bn;
class Ja {
  constructor(o) {
    ce(this, R0);
    ce(this, Bn);
    function t(a, s, c, d, g) {
      return Ie(d - -892, c);
    }
    function e(a, s, c, d, g) {
      return Ie(s - 86, g);
    }
    this[t(-347, -388, "Dke^", -369) + n("^RFY", -422, -385, -357, -390)] = o;
    function n(a, s, c, d, g) {
      return Ie(g - -914, a);
    }
    function i(a, s, c, d, g) {
      return Ie(g - 298, d);
    }
    function r(a, s, c, d, g) {
      return Ie(g - 132, c);
    }
    try {
      ae(this, R0, o[t(-402, -369, "Jfkz", -372, -392) + t(-379, -394, "^RFY", -365, -351) + t(-380, -388, "C#Ef", -407, -396)] && JSON[i(803, 852, 842, "nJZ]", 820)](o[t(-365, -343, "bOzU", -357, -323) + r(679, 665, "vUur", 626, 661) + n("coy3", -429, -415, -445, -438)])), ae(this, Bn, o[e(636, 620, 598, 614, "coy3") + n("4e%r", -399, -379, -369, -381)]);
    } catch (a) {
      console[t(-386, -455, "QN(T", -419)](a);
    }
  }
  get [It(975, "XWEj", 985, 978) + "id"]() {
    function o(e, n, i, r, a) {
      return It(e - 33, a, i - 225, e - -1060);
    }
    function t(e, n, i, r, a) {
      return It(e - 435, n, i - 186, a - -57);
    }
    return this[t(969, "p6iu", 939, 955, 946) + t(928, "kk2t", 921, 914, 941)][o(-32, -19, -30, -40, "bOzU") + o(-76, -82, -85, -79, "1A5S")];
  }
  get [S0(982, 935, "WZA^", 970, 959) + "s"]() {
    function o(e, n, i, r, a) {
      return It(e - 37, n, i - 292, i - 235);
    }
    function t(e, n, i, r, a) {
      return S0(e - 224, n - 248, e, r - 499, a - -500);
    }
    return this[t("wWOy", 477, 458, 483, 456) + o(1231, "cn69", 1240)][t("XWEj", 476, 468, 452, 467) + "s"];
  }
  get [It(994, "))Hg", 1006, 994) + UI(852, 850, 849, 884, "gK1$")]() {
    function o(e, n, i, r, a) {
      return It(e - 161, n, i - 230, e - -109);
    }
    function t(e, n, i, r, a) {
      return S0(e - 255, n - 97, n, r - 282, e - -270);
    }
    return this[t(704, "r0U!", 692, 683) + t(674, "1A5S", 680, 639)][o(899, "@6s9", 914) + t(696, "!l4B", 693, 703)];
  }
  get [S0(1020, 951, "^vvn", 1008, 984) + "b"]() {
    return N(this, R0);
  }
  get [It(1045, "wWOy", 1051, 1046) + It(970, "]tG4", 959, 986)]() {
    return N(this, Bn);
  }
  get [It(1002, "))Hg", 991, 1020) + ix(221, 226, 250, 232, "gjiM") + S0(958, 908, "4e%r", 951, 934) + ix(254, 252, 259, 281, "gjiM")]() {
    var i, r;
    function o(a, s, c, d, g) {
      return It(a - 76, g, c - 288, a - -1493);
    }
    function t(a, s, c, d, g) {
      return ix(a - 713, s - 49, c - 239, d - 234, d);
    }
    function e(a, s, c, d, g) {
      return ix(s - 125, s - 433, c - 128, d - 93, d);
    }
    function n(a, s, c, d, g) {
      return S0(a - 76, s - 65, c, d - 83, g - 451);
    }
    return !!((r = (i = N(this, R0)) == null ? void 0 : i[n(1417, 1428, "]tG4", 1399, 1432) + n(1415, 1382, "^RFY", 1414, 1387)]) != null && r[n(1421, 1367, "ZCkf", 1374, 1390) + o(-446, -441, -469, -428, "H[C)") + o(-469, -447, -441, -451, "poeq") + e(323, 315, 348, "Dke^") + t(901, 881, 871, "jQx7") + t(945, 923, 973, "gK1$") + o(-502, -489, -470, -491, "^RFY") + "d"]);
  }
}
R0 = new WeakMap(), Bn = new WeakMap();
function me(x, o, t, e, n) {
  return We(x - 628, t);
}
(function(x, o) {
  function t(a, s, c, d, g) {
    return We(g - 342, d);
  }
  function e(a, s, c, d, g) {
    return We(g - 707, s);
  }
  function n(a, s, c, d, g) {
    return We(d - -619, a);
  }
  function i(a, s, c, d, g) {
    return We(c - -514, a);
  }
  const r = x();
  for (; ; )
    try {
      if (-parseInt(t(708, 594, 665, "nOj^", 625)) / 1 + parseInt(t(761, 717, 765, "rXcP", 647)) / 2 + -parseInt(t(572, 595, 512, "ppPr", 515)) / 3 * (parseInt(e(859, "Dzwf", 852, 1036, 975)) / 4) + parseInt(e(1086, "pm^F", 1035, 953, 997)) / 5 * (-parseInt(i("]kdN", 1, -115, -75, -107)) / 6) + -parseInt(i("nOj^", -212, -238, -138, -147)) / 7 + -parseInt(i("gRv#", -235, -241, -133, -321)) / 8 + parseInt(e(972, "QuKw", 959, 995, 878)) / 9 * (parseInt(n("1tl7", -287, -248, -362, -342)) / 10) === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ux, -43 * 29979 + -3392 * 411 + 1695299 * 2);
function Re(x, o, t, e, n) {
  return We(t - -693, n);
}
function We(x, o) {
  const t = Ux();
  return We = function(e, n) {
    e = e - (-5550 + -1 * -5717);
    let i = t[e];
    if (We.MQnHNl === void 0) {
      var r = function(g) {
        const p = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", C = "";
        for (let b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = p.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          C += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const d = function(g, p) {
        let u = [], C = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          C = (C + u[l] + p.charCodeAt(l % p.length)) % 256, b = u[l], u[l] = u[C], u[C] = b;
        l = 0, C = 0;
        for (let v = 0; v < g.length; v++)
          l = (l + 1) % 256, C = (C + u[l]) % 256, b = u[l], u[l] = u[C], u[C] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[C]) % 256]);
        return A;
      };
      We.XDBTLU = d, x = arguments, We.MQnHNl = !0;
    }
    const a = t[7511 + 1 * 4313 + 11824 * -1], s = e + a, c = x[s];
    return c ? i = c : (We.oDAnQa === void 0 && (We.oDAnQa = !0), i = We.XDBTLU(i, n), x[s] = i), i;
  }, We(x, o);
}
function Xe(x, o, t, e, n) {
  return We(o - -418, t);
}
function Pe(x, o, t, e, n) {
  return We(n - -352, e);
}
function ze(x, o, t, e, n) {
  return We(o - -405, t);
}
var Qa, za, qa;
class QI {
  constructor(o) {
    D(this, qa);
    D(this, za, [Re(-337, -323, -446, -346, "un4B") + Pe(-158, -242, -28, "G#1S", -126) + "ic", Pe(111, -117, 102, "F1VT", 3) + Pe(-56, 89, -36, "F1VT", -34) + "ic"]);
    D(this, Qa);
    function t(e, n, i, r, a) {
      return We(e - 106, i);
    }
    this[t(472, 476, "GiMg") + t(333, 394, "sWJB") + "d"] = o;
  }
  async [(qa = Xe(-322, -209, "Gr$N") + "se", za = Pe(-62, -67, -33, "sWNp", -35) + Pe(-212, -264, -274, "rXcP", -168) + Xe(16, -35, "Nb2b") + Re(-304, -408, -288, -251, "(Q4^"), Qa = ze(-226, -199, "Nb2b") + me(932, 964, "Gr$N"), ze(-29, -19, "ycV5"))](o = Re(-396, -350, -414, -406, "(Q4^"), t) {
    const e = await this[i("PBbA", 712) + r("Dzl#", 1131) + i("QuKw", 724)](t);
    await Promise[a(-182, "Gr$N", -192) + a(-142, "g9$U", -142)]([this[i("Nb2b", 765) + n(512, 595, "TF5#") + "d"][i("Dzwf", 562)](o), this[n(766, 678, "67mB") + r("ppPr", 1157) + "e"](e)]);
    function n(c, d, g, p, u) {
      return ze(c - 492, d - 798, g);
    }
    function i(c, d, g, p, u) {
      return ze(c - 401, d - 768, c);
    }
    function r(c, d, g, p, u) {
      return Xe(c - 188, d - 1253, c);
    }
    function a(c, d, g, p, u) {
      return Xe(c - 300, g - -72, d);
    }
    function s(c, d, g, p, u) {
      return ze(c - 117, c - -361, u);
    }
    this[i("ZnSb", 673) + s(-429, -541, -374, -540, "TF5#") + r("AxCn", 1110)]();
  }
  async [Pe(-268, -229, -215, "nFcm", -176) + Re(-486, -568, -472, -511, "S$uF") + "se"](o) {
    function t(a, s, c, d, g) {
      return Pe(a - 332, s - 481, c - 427, d, c - 5);
    }
    function e(a, s, c, d, g) {
      return Pe(a - 204, s - 409, c - 89, s, a - 1088);
    }
    function n(a, s, c, d, g) {
      return Re(a - 233, s - 159, c - 1298, d - 261, g);
    }
    function i(a, s, c, d, g) {
      return Xe(a - 215, s - 1142, c);
    }
    function r(a, s, c, d, g) {
      return me(s - -620, s - 423, c);
    }
    try {
      if (r(330, 301, "Nb2b", 197, 300) === r(365, 294, "sWNp", 181, 304)) {
        const a = await fetch(o);
        if (!a.ok)
          if (i(904, 899, "PBbA", 896, 816) === n(880, 1016, 916, 907, "TF5#")) _0x591626[t(-113, -76, -131, "nSH(", -220)](_0x26f2b0);
          else throw new Error(t(-93, -173, -127, "HGsw", -216) + n(988, 1056, 935, 953, "Dzwf") + t(-31, -154, -153, "tPYm", -70) + e(1006, "Dzwf", 1037, 944, 936) + "d.");
        this[r(392, 296, "gRv#", 265, 298) + "se"] = await a[t(-198, -127, -80, "S$uF", -1)]();
      } else return _0x168fea;
    } catch (a) {
      t(-32, -78, -1, "un4B") !== n(1069, 861, 964, 976, "pm^F") ? (this[i(849, 964, "ao!^") + "se"] = void (1 * 8814 + 330 + 72 * -127), console[n(986, 915, 982, 1080, "u&7^")](a)) : this[t(-95, -161, -44, "nFcm") + e(947, "fh0U", 1027) + "d"] = _0x4d4ad8;
    }
  }
  async [Xe(-191, -240, "1rjF") + Re(-422, -395, -451, -434, "7)c6") + "e"](o) {
    var a;
    function t(s, c, d, g, p) {
      return ze(s - 168, d - 42, g);
    }
    function e(s, c, d, g, p) {
      return Pe(s - 139, c - 398, d - 401, g, c - 914);
    }
    function n(s, c, d, g, p) {
      return me(g - -475, c - 202, p);
    }
    this[i(447, 418, 325, "dFS$") + e(999, 877, 959, "a9Vx")] = void (-2979 * 1 + -5222 + 139 * 59);
    function i(s, c, d, g, p) {
      return me(d - -554, c - 263, g);
    }
    if (!o)
      if (i(519, 505, 408, "W7!7") === t(-3, 75, -39, "xpgu")) {
        console[e(926, 883, 922, "evEo")](e(899, 968, 967, "Dzwf") + n(472, 320, 309, 411, "dFS$") + n(457, 617, 655, 546, "tPYm") + n(414, 487, 388, 507, "Dzwf") + i(260, 359, 299, "PBbA")), this[i(408, 385, 328, "QuKw") + "se"] = void (-7904 + 933 * 1 + -1 * -6971);
        return;
      } else {
        const s = _0x3fe2ec[i(357, 294, 356, "l6YB")](this[r(-659, "dFS$", -592, -724) + "se"]);
        return (a = s == null ? void 0 : s[n(481, 542, 489, 445, "Nb2b") + e(879, 769, 830, "#8WH")]) == null ? void 0 : a[e(804, 863, 957, "]kdN") + e(880, 772, 759, "7)c6")];
      }
    function r(s, c, d, g, p) {
      return Re(s - 293, c - 108, s - -235, g - 500, c);
    }
    await this[i(362, 357, 430, "evEo") + e(1e3, 944, 945, "sWJB") + "se"](o);
  }
  async [ze(-17, -26, "ppPr") + ze(-162, -235, "Dzwf") + ze(-239, -237, "a9Vx")](o) {
    if (o) {
      if (r(-232, -266, -426, "cdPy", -334) === n(-170, -132, -187, "(Q4^")) return o;
      _0x3ad9bc instanceof _0x538281 && _0x24d7a3[t(705, 593, 729, 706, "F1VT") + i(1276, 1123, "67mB", 1225)](_0x3bc0da);
      return;
    }
    function t(s, c, d, g, p) {
      return Xe(s - 91, g - 907, p);
    }
    const e = await fetch(this[a(665, 651, 620, "pm^F") + r(-293, -375, -327, "pm^F", -392) + r(-372, -482, -511, "W7!7", -402) + n(-135, -147, -129, "]Ek5")][-1 * -2153 + -7525 + -2686 * -2]);
    function n(s, c, d, g, p) {
      return me(s - -1054, c - 51, g);
    }
    function i(s, c, d, g, p) {
      return Re(s - 381, c - 268, g - 1537, g - 73, d);
    }
    function r(s, c, d, g, p) {
      return Re(s - 90, c - 421, p - 60, g - 223, g);
    }
    function a(s, c, d, g, p) {
      return me(s - -339, c - 292, g);
    }
    if (e.ok)
      if (t(564, 640, 703, 669, "GiMg") === t(725, 746, 692, 791, "1rjF")) _0x178488[t(882, 934, 833, 827, "]Ek5") + "ch"]((s) => _0x332371[r(-295, -308, -307, "gRv#", -353)](s));
      else return this[r(-358, -399, -436, "gRv#", -429) + t(877, 855, 818, 814, "1tl7") + r(-385, -435, -455, "sWJB", -421) + i(1199, 1246, "a9Vx", 1232)][4770 + 2595 * 3 + -155 * 81];
    return this[a(652, 570, 670, "tPYm") + r(-360, -514, -288, "sWJB", -410) + r(-312, -341, -193, "(Q4^", -224) + a(687, 616, 778, "1rjF")][-1 * -334 + 3648 + 3 * -1327];
  }
  [Re(-391, -475, -469, -355, "GiMg") + Xe(-83, -53, "nOj^") + "s"](o) {
    function t(e, n, i, r, a) {
      return me(n - -238, n - 134, r);
    }
    o[t(611, 634, 639, "bYyf") + "ch"]((e) => console[t(648, 567, 469, "PBbA")](e));
  }
  [me(988, 1003, "F1VT") + me(867, 980, "7)c6") + ze(-175, -145, "Wy%D")](o) {
    function t(n, i, r, a, s) {
      return Re(n - 478, i - 380, r - 620, a - 51, n);
    }
    function e(n, i, r, a, s) {
      return ze(n - 176, r - 454, n);
    }
    o[t("tPYm", 287, 227, 244) + "ch"]((n) => console[e("dFS$", 357, 320)](n));
  }
  [me(955, 944, "Nb2b") + Xe(-160, -123, "QuKw")]() {
    function o(e, n, i, r, a) {
      return me(e - 254, n - 179, r);
    }
    function t(e, n, i, r, a) {
      return Pe(e - 194, n - 227, i - 35, i, e - 1150);
    }
    return window[o(1201, 1102, 1262, "]kdN") + t(1202, 1155, "S$uF")][t(990, 987, "67mB") + o(1075, 1157, 1027, "pm^F")];
  }
  [Re(-460, -392, -440, -335, "sWJB") + me(944, 851, "]kdN") + Xe(-14, -131, "tPYm")]() {
    function o(r, a, s, c, d) {
      return Re(r - 446, a - 192, d - 317, c - 469, s);
    }
    function t(r, a, s, c, d) {
      return Xe(r - 153, c - -294, s);
    }
    function e(r, a, s, c, d) {
      return me(r - -895, a - 82, d);
    }
    function n(r, a, s, c, d) {
      return Pe(r - 262, a - 418, s - 486, a, c - 17);
    }
    function i(r, a, s, c, d) {
      return me(a - -1233, a - 467, r);
    }
    try {
      if (i("nFcm", -438, -367, -409, -376) !== e(77, 74, 106, 25, "]kdN")) return _0x11681e[n(-38, "dFS$", -2, 73, 53) + i("GiMg", -235, -204, -317, -182)][i("ao!^", -225, -260, -119, -269) + t(-460, -362, "fh0U", -482, -542)];
      if (!this[n(-172, "Z(Zv", -116, -90, -76) + "se"])
        if (t(-454, -273, "un4B", -369, -345) !== e(102, -18, -15, -4, "dFS$")) _0x1be347[i("evEo", -405, -455, -354, -286)]();
        else throw new jo(i("(Q4^", -410, -368, -432, -287) + t(-586, -554, "Gr$N", -540, -463) + i("fh0U", -210, -286, -250, -123) + e(-38, 40, 72, -78, "nFcm") + ".");
      if (!this[i("tPYm", -215, -158, -113, -324) + o(-124, -218, "PBbA", -266, -187) + "d"][n(-141, "a9Vx", -46, -80, -133) + o(-167, -143, "7)c6", -83, -180) + n(90, "G#1S", 55, -22, -51) + "ed"]()) {
        if (e(39, 98, -57, -33, "nSH(") !== e(105, 61, 137, 74, "1tl7")) return;
        throw new jo(e(120, 46, 150, 29, "sWJB") + e(68, 124, 24, -55, "TF5#") + t(-286, -355, "]kdN", -372, -297) + e(74, 146, 41, 57, "ycV5") + ".");
      }
      this[o(-134, -232, "ZnSb", -275, -189) + n(-97, "xpgu", -224, -122, -238)] = new Ja(XI(this[i("sWJB", -208, -296, -291, -250) + "se"], this[t(-588, -459, "nOj^", -511, -408) + e(-5, -81, -79, -95, "un4B")]())), this[t(-394, -400, "u&7^", -479, -498) + t(-350, -553, "(Q4^", -447, -406) + "s"](this[o(17, 15, "Z(Zv", -53, 16) + e(45, -63, -4, 70, "bYyf")][o(-270, -248, "(Q4^", -154, -194) + "s"]), this[o(-29, 76, "l6YB", -156, -34) + n(-90, "dFS$", -160, -116, -71) + o(-60, -263, "pm^F", -176, -144)](this[t(-492, -524, "#8WH", -522, -461) + e(127, 56, 34, 81, "TF5#")][n(-136, "cdPy", -44, -152, -272) + i("]kdN", -342, -290, -300, -303)]);
    } catch (r) {
      if (e(118, 31, 203, 164, "dFS$") === t(-367, -305, "]Ek5", -428)) {
        if (r instanceof jo)
          if (o(43, -100, "dFS$", -127, -14) === e(-6, 44, 55, -79, "Nb2b")) r[t(-540, -595, "Nb2b", -543)]();
          else throw new _0x4d0b01(t(-503, -597, "QuKw", -484) + t(-303, -364, "bYyf", -312) + e(124, 59, 34, 112, "nOj^") + n(-1, "TF5#", 45, -4) + "d.");
        else if (r instanceof Error) {
          if (e(53, 155, -57, -58, "dFS$") !== e(-49, -137, 31, -82, "67mB")) return this[t(-309, -380, "PBbA", -323) + t(-432, -440, "S$uF", -515) + t(-422, -568, "Wy%D", -448) + o(-92, -20, "a9Vx", 133, 12)][-2523 * -2 + 2923 + -1 * 7969];
          console[e(-32, -67, -117, -126, "]kdN")](r);
        }
        const a = {};
        a[t(-405, -408, "1rjF", -498) + e(-33, -149, -146, 72, "#8WH")] = !1, a[n(21, "Dzl#", -51, 61) + "s"] = [], a[t(-400, -369, "Wy%D", -376) + o(-208, -97, "Dzwf", -108, -140)] = [], a[o(139, 10, "xpgu", 61, 34) + o(21, 31, "u&7^", 27, -25) + e(-45, 73, 46, -4, "G#1S")] = void (-176 * 2 + 4 * -994 + 2 * 2164), a[n(79, "evEo", 8, 32)] = function() {
        }, a[n(62, "xpgu", 52, 29) + e(7, -57, 2, 71, "pm^F")] = "", this[e(-88, -122, -175, -186, "sWJB") + n(-67, "pm^F", -206, -130)] = new Ja(a);
      } else throw new _0x27da36(t(-393, -519, "S$uF", -462) + t(-280, -270, "ao!^", -344) + o(-25, -38, "ycV5", 35, -47) + t(-372, -408, "un4B", -309) + ".");
    }
  }
  [Pe(-90, -35, 50, "Dzwf", -26) + me(951, 1045, "]kdN") + me(831, 731, "Dzl#") + "t"]() {
    function o(e, n, i, r, a) {
      return Pe(e - 359, n - 445, i - 353, r, a - 678);
    }
    function t(e, n, i, r, a) {
      return me(e - 176, n - 341, r);
    }
    return this[t(1012, 1056, 1063, "nOj^") + o(637, 578, 629, "dFS$", 578)];
  }
  [Xe(-60, -79, "Dzwf") + Pe(-1, 27, -6, "HGsw", 21) + Re(-308, -292, -365, -381, "pm^F")]() {
    var r;
    function o(a, s, c, d, g) {
      return Pe(a - 199, s - 365, c - 114, c, a - 967);
    }
    function t(a, s, c, d, g) {
      return Xe(a - 445, a - -425, c);
    }
    function e(a, s, c, d, g) {
      return me(g - -840, s - 77, a);
    }
    function n(a, s, c, d, g) {
      return Re(a - 321, s - 471, a - 1315, d - 450, c);
    }
    function i(a, s, c, d, g) {
      return ze(a - 465, g - -335, d);
    }
    if (!this[o(962, 934, "S$uF") + "se"]) {
      if (o(853, 909, "AxCn") === i(-486, -464, -539, "7)c6", -451)) return;
      {
        _0x28ee35 instanceof _0x26899b ? _0x3e6158[e("tPYm", 14, 69, 176, 82)]() : _0x366442 instanceof _0xab8f5a && _0x4b8586[e("fh0U", 201, 124, 168, 159)](_0x147544);
        const a = {};
        a[e("S$uF", 45, -21, 101, 34) + o(887, 839, "Wy%D")] = !1, a[n(807, 785, "bYyf", 793) + "s"] = [], a[n(936, 888, "GiMg", 827) + n(888, 901, "fh0U", 931)] = [], a[t(-433, -402, "xpgu") + n(997, 1110, "1rjF", 1058) + o(912, 1002, "Wy%D")] = void 0, a[o(813, 786, "u&7^")] = function() {
        }, a[o(796, 769, "G#1S") + i(-374, -341, -331, "S$uF", -356)] = "", this[n(828, 728, "Nb2b", 925) + n(1016, 1051, "TF5#", 1121)] = new _0x5762f4(a);
      }
    }
    try {
      if (t(-436, -467, "ppPr", -459, -317) !== o(972, 882, "67mB", 1067, 875)) {
        const a = JSON[t(-657, -585, "]kdN", -777, -653)](this[o(993, 893, "xpgu", 927, 1111) + "se"]);
        return (r = a == null ? void 0 : a[t(-432, -462, "tPYm", -371, -352) + i(-521, -361, -579, "F1VT", -462)]) == null ? void 0 : r[t(-584, -676, "un4B", -517, -545) + o(863, 796, "AxCn", 865, 947)];
      } else _0x432e3f[o(989, 1068, "sWNp", 879, 1003) + "ch"]((a) => _0x4708a4[t(-606, -648, "Wy%D", -723, -721)](a));
    } catch (a) {
      if (o(924, 878, "Nb2b") === e("1rjF", 98, 185, 54, 140)) {
        if (a instanceof Error)
          if (e("]Ek5", 86, 154, 91, 31) === i(-346, -445, -509, "TF5#", -463)) xe[o(864, 947, "l6YB") + i(-386, -549, -405, "W7!7", -433)](a);
          else return this[t(-493, -392, "Dzwf") + i(-231, -276, -436, "Nb2b", -339)];
        return;
      } else this[n(796, 899, "ycV5", 678) + "se"] = void (-65 * 106 + 1 * 655 + 6235), _0x4caf61[n(975, 1047, "tPYm", 892)](_0x2cee8b);
    }
  }
}
function Ux() {
  const x = ["FrnbcCkH", "e3RdU8oyW6S", "WPCKW4JcNxG", "W786gvOA", "iCkekeLY", "W446pHC9", "vwlcQuZcGG", "guBdMGKP", "WPqRa8oQka", "whNcR2hcNW", "W6qOCbiz", "s8kHWQJdJW", "W4ddG2OiwW", "v3pcONpcJG", "WP/dRCk+bCol", "W7HvC8kzWPq", "E8keWRBcGbO", "lMxdMSo+eW", "W63cJmohCG8", "WRFcPKzrta", "DCkcWQFcOGa", "uetdHmocW5C", "WRySW5a2W7xcNmkZW7b5jejn", "p8orW5xdKLamW7qGEZRdTmoE", "nSoiradcLG", "hK3dN8kxW5a", "sKxcUmkYBa", "evBdJSo7W5a", "A8khWPpcPWe", "E8keWRBcJWy", "wN/cUgNcIG", "WR7cOu9rca", "WOv6jSk8gq", "WPFdKuG1yG", "wglcVvhcHq", "WQ5LFJVcUWSrbmk/uW", "WQFdGKiDqa", "W7ZdPgS2WQ0", "W4BdNKhcS8oi", "W7PtEWv/", "F8ktWQ3cVWa", "qmkvW50qW5u", "W40FWOaXW7y", "W7OMpMZcRa", "BmktWQ3cUHO", "W5u0d8kNiq", "rmkQWRRdGYW", "mvNcMh4W", "c8ofWP57WOJdOvJdMMT7WRP4", "W5xcGmohEW8", "WOOQd8kQma", "W4OixMe", "W5GnvWKa", "W7SXkMlcQW", "WP/dT8kQa8of", "W7bTWPtcVca", "mSkklMj2", "rmk9WQVdHq", "W5NdVfmkpq", "W60ixda+", "p8kkna", "tSoKW5ldV8o7", "W5bgxCkeWPi", "WOpdTCknxHS", "g0ZdJI09", "W4W9WPqwW70", "W7VcP8oaFH8", "v8kcW5WGW40", "WPddQ8k6eSoe", "W47dHxSQqq", "W6xcS0Wxma", "fhdcSG", "W4eMW699ba", "lg7dNCoFla", "W73dQhO", "W78ayHWP", "WRVcPLXa", "W5OUW791sG", "W4CViGC", "W7LtAsHJ", "W7S7oeBcSW", "W5a/WOJcVcy", "WRpdJmkGW4BcQG", "W7O6p2BdVG", "gepdN8ouW5e", "tSo4W5pdTCkP", "WQ7dQ8krWOWw", "W6eMW699ba", "W58SWO86", "bsFdVJJcJSkQW74xx8kh", "WPyMW5NcKgm", "iwhdMSozfa", "lw/dMSo/eq", "WRpdUwqrya", "W7NdOMy", "rSoUW5fP", "uSkoW6lcIdW", "W5pdGwirxq", "W4mGzHSS", "qSo0W4P/FG", "WPRdP8k4a8oF", "W7W7iNFcRa", "WPhcV8o9DKi", "W7y6pHW", "jw/dIq", "F8keWQZcVXy", "WQHEzu4cANxdSq", "W4pcR8o/WQZdVW", "WPddRM42EGH9", "WR7cOvzraG", "W4DBwsTW", "WPVcRSo4req", "W6PxFsC", "W5i3WOyTW5S", "W649W6nRgq", "mCkjduP1", "W7uUbKCp", "qSoOW4T1xa", "A8kQgYWV", "WP5iWQNcMJi", "WPO3W47cKwi", "rhFcVNpcJG", "Aabce8k2", "WR/dQqHqz8o4WPldRN/cONWi", "W79tAY1Z", "CSopFmo5Cq", "W4RdJCkGnbJcQSknWPdcShhcPhGG", "dNdcS1SD", "W77cR8od", "W7P0iMZcQG", "ACo1WPLEyq", "WPtcSCo/zfu", "W7ZdUuq6WQa", "vmkcW4SQ", "DCkpWQVcUa", "tSkGWQK", "W5j6WPlcLZ0", "eKFdJ8otW5W", "WPNdVmkqWPyi", "iSkfBhi/", "W7FcO8osFai", "kNldGCojdW", "CmoEzW", "W5zTWONcOce", "W7VdPSoWWQddSG", "WPtcNCoJ", "sCoZW4tdTmoS", "W6GHW799oG", "WPtdO8kTfmoc", "W5CRWRG/W7y", "dXBdUSoSnCoJWQeOW6zpxa", "W6TQWPDTWRa", "WPy3aCkbnG", "lxJcTuCY", "W7GUDXqX", "WRtdJSk2eZi", "W5ZdPgS2WQ0", "W6u0gW", "W6e7W4bXcq", "jSkxm0LV", "W7LtA2C", "W781eb0m", "W68QW6H8dW", "W54MFIK/", "WPVcPmo5suG", "sSo7W4u", "mmojubFcPW", "W7hcPCov", "qSkcW4CHW4S", "FCouDW", "uwtcVM/cMq", "CSkgWRe", "sKxcUmkY", "W4dcUsvWaG", "WQ7cMCoJy0G", "W6hcTvWgma", "W7pcTSoQDGK", "WPdcM8o0y1i", "rCk/WOlcOtC", "WPKQW47cU3e", "WRZdL8kSW5dcTW", "W7NdVLCLWQi", "W7RdV3qryW", "W6FcJq0", "WPLNkmkxhW", "W57dOIGxWOW", "W4W9AGKR", "W4CUCrKW", "W7SUW6bXdG", "W7yaswWD", "W48OhruM", "DCo2W5vGwq", "WQWuc8ogW44mhdxdRLZcTCkcW5q", "W7TVArm7", "WRBdO2ilAW", "u0pcUq", "pKldVmojja", "WRJdT3Gr", "wNhcVW", "weRcUCk5vq", "ySoOW4T1xa", "rCoXW5m", "W6tdQhaN", "jCouW7ldUetdH8keWRRdVSkTW51/", "W4mMzH82", "pmkhWQ3cUr0", "W4yHyXu", "uu3cRG", "DCovoYPZW4bbvSopmmk1WQpcSG", "W7lcP8ou", "W6NcJrf1la", "WOCMW5ldO2lcLbhdUCofWR8tWQu", "ohxdImo0W64", "WPS7eG", "cmoTW5HPqW", "l8koBhW", "WQrSoNqrW7u8ma", "WOvPpCkHca", "WOCQW5hdOgVcKWddJSo+WPWWWRO", "xCkNWOBcHbe", "cNdcOuS/", "m0xdRayP", "W7WXiNdcUW", "kSkjAxyK", "WRpcQColE2O", "WQ3dSmkwl1RdPLear2yi", "BmkCWONcKq", "kM/dGmoodG", "b2BdVSoucq", "W7m7kW", "W7Ciq2C", "WQJdVmknWPab", "tKVcPa", "W7BdO8o/WPBdUq", "tSkNbtGX", "W7K7pKBcVW", "v2pcV3tcHa", "W4WcWOWCW7u", "WPNcPmo4yKe", "W7/dRSoNWQBdTa", "W4OiW5ddH2BdKhBcT8kvWPzTWOO", "W4P/WOD2WQC", "j8oiuq", "eSoyW4hdGmoBW7RcIa", "oKFdICochq"];
  return Ux = function() {
    return x;
  }, Ux();
}
const $x = class $x extends QI {
  static getInstance() {
    if (!this._instance) {
      const o = new JI();
      this._instance = new $x(o);
    }
    return this._instance;
  }
};
D($x, "_instance");
let Vi = $x;
const zI = ({ children: x }) => {
  const o = Ht(null);
  return n1(o, Zt.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ O(pu, { ref: o, children: x });
}, qI = ({ cameraOptions: x }) => x ? /* @__PURE__ */ O(gu, { target: x.styleTarget, children: /* @__PURE__ */ O(
  Tu,
  {
    licensePath: x.licensePath,
    bramble: Vi.getInstance(),
    wasmDirectoryPath: x.wasmDirectoryPath,
    children: /* @__PURE__ */ O(Lu, { analytics: NI, appKey: "065cf6e242fc5e785cd17eebfbfbbd212a33133b", children: /* @__PURE__ */ O(
      Su,
      {
        value: TI({
          onError: x.onError
        }),
        children: /* @__PURE__ */ O($s, { children: /* @__PURE__ */ O(zI, { children: /* @__PURE__ */ O(PI, { ...x }) }) })
      }
    ) })
  }
) }) : null;
Ag(qI, "x-dot-document-auto-capture", ["cameraOptions"]);
