var Bg = Object.defineProperty;
var Mr = (x) => {
  throw TypeError(x);
};
var kg = (x, i, t) => i in x ? Bg(x, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : x[i] = t;
var E = (x, i, t) => kg(x, typeof i != "symbol" ? i + "" : i, t), Xr = (x, i, t) => i.has(x) || Mr("Cannot " + t);
var L = (x, i, t) => (Xr(x, i, "read from private field"), t ? t.call(x) : i.get(x)), ne = (x, i, t) => i.has(x) ? Mr("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(x) : i.set(x, t), $ = (x, i, t, e) => (Xr(x, i, "write to private field"), e ? e.call(x, t) : i.set(x, t), t);
var Ln, F, ds, us, e0, _r, ls, zi, jo, qi, $i, Is, mn = {}, fs = [], Gg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, si = Array.isArray;
function Zt(x, i) {
  for (var t in i) x[t] = i[t];
  return x;
}
function Cs(x) {
  var i = x.parentNode;
  i && i.removeChild(x);
}
function Ee(x, i, t) {
  var e, n, o, r = {};
  for (o in i) o == "key" ? e = i[o] : o == "ref" ? n = i[o] : r[o] = i[o];
  if (arguments.length > 8448 + 4223 * -2 && (r.children = arguments.length > -5783 + 34 * -68 + 8098 ? Ln.call(arguments, -6615 + 193 * 19 + 2950) : t), typeof x == "function" && x.defaultProps != null)
    for (o in x.defaultProps) void (-9304 + -10 * -883 + -2 * -237) === r[o] && (r[o] = x.defaultProps[o]);
  return In(x, r, e, n, null);
}
function In(x, i, t, e, n) {
  var o = {};
  o.type = x, o.props = i, o.key = t, o.ref = e, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__d = void 0, o.__c = null, o.constructor = void (2 * 3833 + 1313 * 1 + -2993 * 3), o.__v = n ?? ++ds, o.__i = -(-4831 * 2 + 70 * 43 + 6653), o.__u = 0;
  var r = o;
  return n == null && F.vnode != null && F.vnode(r), r;
}
function Og() {
  var x = {};
  return x.current = null, x;
}
function ot(x) {
  return x.children;
}
function xt(x, i) {
  this.props = x, this.context = i;
}
function d0(x, i) {
  if (i == null) return x.__ ? d0(x.__, x.__i + (16938 + -1 * 16937)) : null;
  for (var t; i < x.__k.length; i++) if ((t = x.__k[i]) != null && t.__e != null) return t.__e;
  return typeof x.type == "function" ? d0(x) : null;
}
function ps(x) {
  var i, t;
  if ((x = x.__) != null && x.__c != null) {
    for (x.__e = x.__c.base = null, i = 1 * 9136 + -4286 + 1 * -4850; i < x.__k.length; i++) if ((t = x.__k[i]) != null && t.__e != null) {
      x.__e = x.__c.base = t.__e;
      break;
    }
    return ps(x);
  }
}
function eo(x) {
  (!x.__d && (x.__d = !(1 * -274 + 1 * 8014 + -430 * 18)) && e0.push(x) && !Gx.__r++ || _r !== F.debounceRendering) && ((_r = F.debounceRendering) || ls)(Gx);
}
function Gx() {
  var x, i, t, e, n, o, r, a;
  for (e0.sort(zi); x = e0.shift(); ) x.__d && (i = e0.length, e = void (-758 + -2 * -379), o = (n = (t = x).__v).__e, r = [], a = [], t.__P && ((e = Zt({}, n)).__v = n.__v + (-9719 * 1 + -1333 + 11053 * 1), F.vnode && F.vnode(e), Mo(t.__P, e, n, t.__n, t.__P.namespaceURI, 3956 + -2 * -205 + -4334 & n.__u ? [o] : null, r, o ?? d0(n), !!(-4309 * -1 + -26 * -153 + 127 * -65 & n.__u), a), e.__v = n.__v, e.__.__k[e.__i] = e, bs(r, e, a), e.__e != o && ps(e)), e0.length > i && e0.sort(zi));
  Gx.__r = 0;
}
function hs(x, i, t, e, n, o, r, a, s, c, d) {
  var g, f, u, p, b, A = e && e.__k || fs, l = i.length;
  for (t.__d = s, Zg(t, i, A), s = t.__d, g = 5330 + -882 * 2 + -3566; g < l; g++) (u = t.__k[g]) != null && typeof u != "boolean" && typeof u != "function" && (f = -(-2949 * -2 + 3292 * 1 + -9189) === u.__i ? mn : A[u.__i] || mn, u.__i = g, Mo(x, u, f, n, o, r, a, s, c, d), p = u.__e, u.ref && f.ref != u.ref && (f.ref && Xo(f.ref, null, u), d.push(u.ref, u.__c || p, u)), b == null && p != null && (b = p), 65536 & u.__u || f.__k === u.__k ? (s && typeof u.type == "string" && !x.contains(s) && (s = d0(f)), s = ms(u, s, x)) : typeof u.type == "function" && void (7495 + 1 * 6793 + -14288) !== u.__d ? s = u.__d : p && (s = p.nextSibling), u.__d = void (3106 + -3106 * 1), u.__u &= -(-19 * 13309 + 113 * 2269 + 193083));
  t.__d = s, t.__e = b;
}
function Zg(x, i, t) {
  var e, n, o, r, a, s = i.length, c = t.length, d = c, g = 5 * -1532 + -3 * 654 + -283 * -34;
  for (x.__k = [], e = -4132 + -113 * -59 + -2535; e < s; e++) r = e + g, (n = x.__k[e] = (n = i[e]) == null || typeof n == "boolean" || typeof n == "function" ? null : typeof n == "string" || typeof n == "number" || typeof n == "bigint" || n.constructor == String ? In(null, n, null, null, null) : si(n) ? In(ot, { children: n }, null, null, null) : void (-6118 + -1 * 5867 + -11985 * -1) === n.constructor && n.__b > 397 * 15 + -1 * 3581 + -2374 * 1 ? In(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v) : n) != null ? (n.__ = x, n.__b = x.__b + (-5690 * 1 + 3976 + -7 * -245), a = Hg(n, t, r, d), n.__i = a, o = null, -(6903 + -33 * 117 + -3041) !== a && (d--, (o = t[a]) && (o.__u |= -778 * -325 + -217484 * -1 + -339262)), o == null || o.__v === null ? (-(4702 + 3 * -1567) == a && g--, typeof n.type != "function" && (n.__u |= -66 * -892 + -1095 * 35 + 44989)) : a !== r && (a == r - (1893 + 1109 * -3 + 5 * 287) ? g = a - r : a == r + (823 * 7 + 8937 + -14697) ? g++ : a > r ? d > s - r ? g += a - r : g-- : a < r && g++, a !== e + g && (n.__u |= -10906 + 2 * 38221))) : (o = t[r]) && o.key == null && o.__e && 7487 + 113 * -37 + -3306 == (-11482 * 3 + -62741 + 228259 & o.__u) && (o.__e == x.__d && (x.__d = d0(o)), to(o, o, !(13 * -183 + -1621 * 3 + 7243)), t[r] = null, d--);
  if (d)
    for (e = 68 * 1 + -6477 + -1 * -6409; e < c; e++) (o = t[e]) != null && 1 * -5708 + -14 * 14 + 5904 == (16 * -9281 + -108 * -159 + -131198 * -2 & o.__u) && (o.__e == x.__d && (x.__d = d0(o)), to(o, o));
}
function ms(x, i, t) {
  var e, n;
  if (typeof x.type == "function") {
    for (e = x.__k, n = 0; e && n < e.length; n++) e[n] && (e[n].__ = x, i = ms(e[n], i, t));
    return i;
  }
  x.__e != i && (t.insertBefore(x.__e, i || null), i = x.__e);
  do
    i = i && i.nextSibling;
  while (i != null && -6973 + 3 * 2327 === i.nodeType);
  return i;
}
function Kt(x, i) {
  return i = i || [], x == null || typeof x == "boolean" || (si(x) ? x.some(function(t) {
    Kt(t, i);
  }) : i.push(x)), i;
}
function Hg(x, i, t, e) {
  var n = x.key, o = x.type, r = t - (-3030 * -2 + 14 * 189 + -5 * 1741), a = t + (-6934 + 3 * 311 + -1 * -6002), s = i[t];
  if (s === null || s && n == s.key && o === s.type && -2 * 2209 + 1753 + 2665 == (20975 * 2 + -83405 + 172527 & s.__u)) return t;
  if (e > (s != null && -1935 + 5 * 387 == (-499 * 419 + 126356 + -1 * -213797 & s.__u) ? -2584 + -252 * 19 + -1 * -7373 : 1405 * 1 + -4575 + -10 * -317)) for (; r >= -2 * -2998 + -15 * -1 + -6011 || a < i.length; ) {
    if (r >= -4417 * -1 + -5086 + 223 * 3) {
      if ((s = i[r]) && 431 + -4 * -998 + 4423 * -1 == (12211 * -17 + -26289 + 364948 & s.__u) && n == s.key && o === s.type) return r;
      r--;
    }
    if (a < i.length) {
      if ((s = i[a]) && !(-3134 * -13 + 4119 * 32 + -1 * 41478 & s.__u) && n == s.key && o === s.type) return a;
      a++;
    }
  }
  return -(778 * -10 + 6034 + 1747);
}
function Jr(x, i, t) {
  i[3037 + -5 * -1259 + -9332] === "-" ? x.setProperty(i, t ?? "") : x[i] = t == null ? "" : typeof t != "number" || Gg.test(i) ? t : t + "px";
}
function xx(x, i, t, e, n) {
  var o;
  e: if (i === "style")
    if (typeof t == "string") x.style.cssText = t;
    else {
      if (typeof e == "string" && (x.style.cssText = e = ""), e)
        for (i in e) t && i in t || Jr(x.style, i, "");
      if (t)
        for (i in t) e && t[i] === e[i] || Jr(x.style, i, t[i]);
    }
  else if (i[-4722 + 1 * -3396 + 2 * 4059] === "o" && i[-2902 * -3 + 1 * -3171 + 2 * -2767] === "n") o = i !== (i = i.replace(/(PointerCapture)$|Capture$/i, "$1")), i = i.toLowerCase() in x || i === "onFocusOut" || i === "onFocusIn" ? i.toLowerCase().slice(-6273 + -1452 * 2 + -9179 * -1) : i.slice(-1 * 233 + -6977 * 1 + -6 * -1202), x.l || (x.l = {}), x.l[i + o] = t, t ? e ? t.u = e.u : (t.u = jo, x.addEventListener(i, o ? $i : qi, o)) : x.removeEventListener(i, o ? $i : qi, o);
  else {
    if (n == "http://www.w3.org/2000/svg") i = i.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (i != "width" && i != "height" && i != "href" && i != "list" && i != "form" && i != "tabIndex" && i != "download" && i != "rowSpan" && i != "colSpan" && i != "role" && i != "popover" && i in x) try {
      x[i] = t ?? "";
      break e;
    } catch {
    }
    typeof t == "function" || (t == null || !(9066 + 1 * -3526 + -5539) === t && i[-6606 + -901 * 11 + 16521 * 1] !== "-" ? x.removeAttribute(i) : x.setAttribute(i, i == "popover" && 3911 + 59 * -100 + 1990 == t ? "" : t));
  }
}
function Qr(x) {
  return function(i) {
    if (this.l) {
      var t = this.l[i.type + x];
      if (i.t == null) i.t = jo++;
      else if (i.t < t.u) return;
      return t(F.event ? F.event(i) : i);
    }
  };
}
function Mo(x, i, t, e, n, o, r, a, s, c) {
  var d, g, f, u, p, b, A, l, v, Z, M, X, J, K, re, Q, te = i.type;
  if (void (-9805 * 1 + 2143 * 2 + 1 * 5519) !== i.constructor) return null;
  1558 + 8558 * -1 + -66 * -108 & t.__u && (s = !!(831 * 1 + -1118 * -7 + 23 * -375 & t.__u), o = [a = i.__e = t.__e]), (d = F.__b) && d(i);
  e: if (typeof te == "function") try {
    if (l = i.props, v = "prototype" in te && te.prototype.render, Z = (d = te.contextType) && e[d.__c], M = d ? Z ? Z.props.value : d.__ : e, t.__c ? A = (g = i.__c = t.__c).__ = g.__E : (v ? i.__c = g = new te(l, M) : (i.__c = g = new xt(l, M), g.constructor = te, g.render = Rg), Z && Z.sub(g), g.props = l, g.state || (g.state = {}), g.context = M, g.__n = e, f = g.__d = !(-1044 + -261 * -4), g.__h = [], g._sb = []), v && g.__s == null && (g.__s = g.state), v && te.getDerivedStateFromProps != null && (g.__s == g.state && (g.__s = Zt({}, g.__s)), Zt(g.__s, te.getDerivedStateFromProps(l, g.__s))), u = g.props, p = g.state, g.__v = i, f) v && te.getDerivedStateFromProps == null && g.componentWillMount != null && g.componentWillMount(), v && g.componentDidMount != null && g.__h.push(g.componentDidMount);
    else {
      if (v && te.getDerivedStateFromProps == null && l !== u && g.componentWillReceiveProps != null && g.componentWillReceiveProps(l, M), !g.__e && (g.shouldComponentUpdate != null && !(8331 + -34 * 245) === g.shouldComponentUpdate(l, g.__s, M) || i.__v === t.__v)) {
        for (i.__v !== t.__v && (g.props = l, g.state = g.__s, g.__d = !(7 * -1301 + -7227 + 3 * 5445)), i.__e = t.__e, i.__k = t.__k, i.__k.forEach(function(Le) {
          Le && (Le.__ = i);
        }), X = -3061 * -1 + 4 * 6 + -3085; X < g._sb.length; X++) g.__h.push(g._sb[X]);
        g._sb = [], g.__h.length && r.push(g);
        break e;
      }
      g.componentWillUpdate != null && g.componentWillUpdate(l, g.__s, M), v && g.componentDidUpdate != null && g.__h.push(function() {
        g.componentDidUpdate(u, p, b);
      });
    }
    if (g.context = M, g.props = l, g.__P = x, g.__e = !(-5593 + -605 * 11 + -1361 * -9), J = F.__r, K = 4 * -681 + -8855 + 11579, v) {
      for (g.state = g.__s, g.__d = !(-4391 + -488 * -9), J && J(i), d = g.render(g.props, g.state, g.context), re = 0; re < g._sb.length; re++) g.__h.push(g._sb[re]);
      g._sb = [];
    } else do
      g.__d = !(1 * 5939 + 7782 + 3430 * -4), J && J(i), d = g.render(g.props, g.state, g.context), g.state = g.__s;
    while (g.__d && ++K < 1 + 3 * 2141 + -6399);
    g.state = g.__s, g.getChildContext != null && (e = Zt(Zt({}, e), g.getChildContext())), v && !f && g.getSnapshotBeforeUpdate != null && (b = g.getSnapshotBeforeUpdate(u, p)), hs(x, si(Q = d != null && d.type === ot && d.key == null ? d.props.children : d) ? Q : [Q], i, t, e, n, o, r, a, s, c), g.base = i.__e, i.__u &= -161, g.__h.length && r.push(g), A && (g.__E = g.__ = null);
  } catch (Le) {
    i.__v = null, s || o != null ? (i.__e = a, i.__u |= s ? -870 + -631 * -11 + -1 * 5911 : 5938 + 166 * 13 + -8064, o[o.indexOf(a)] = null) : (i.__e = t.__e, i.__k = t.__k), F.__e(Le, i, t);
  }
  else o == null && i.__v === t.__v ? (i.__k = t.__k, i.__e = t.__e) : i.__e = Kg(t.__e, i, t, e, n, o, r, s, c);
  (d = F.diffed) && d(i);
}
function bs(x, i, t) {
  i.__d = void (3 * -2683 + 1831 + 6218);
  for (var e = 141 * 9 + 1 * 9203 + -616 * 17; e < t.length; e++) Xo(t[e], t[++e], t[++e]);
  F.__c && F.__c(i, x), x.some(function(n) {
    try {
      x = n.__h, n.__h = [], x.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      F.__e(o, n.__v);
    }
  });
}
function Kg(x, i, t, e, n, o, r, a, s) {
  var c, d, g, f, u, p, b, A = t.props, l = i.props, v = i.type;
  if (v === "svg" ? n = "http://www.w3.org/2000/svg" : v === "math" ? n = "http://www.w3.org/1998/Math/MathML" : n || (n = "http://www.w3.org/1999/xhtml"), o != null) {
    for (c = 5231 * 1 + -996 + -4235; c < o.length; c++) if ((u = o[c]) && "setAttribute" in u == !!v && (v ? u.localName === v : -11 * -761 + 9871 * 1 + -18239 === u.nodeType)) {
      x = u, o[c] = null;
      break;
    }
  }
  if (x == null) {
    if (v === null) return document.createTextNode(l);
    x = document.createElementNS(n, v, l.is && l), o = null, a = !(-5303 + -4 * -1326);
  }
  if (v === null) A === l || a && x.data === l || (x.data = l);
  else {
    if (o = o && Ln.call(x.childNodes), A = t.props || mn, !a && o != null)
      for (A = {}, c = 0; c < x.attributes.length; c++) A[(u = x.attributes[c]).name] = u.value;
    for (c in A) if (u = A[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") g = u;
      else if (c !== "key" && !(c in l)) {
        if (c == "value" && "defaultValue" in l || c == "checked" && "defaultChecked" in l) continue;
        xx(x, c, null, u, n);
      }
    }
    for (c in l) u = l[c], c == "children" ? f = u : c == "dangerouslySetInnerHTML" ? d = u : c == "value" ? p = u : c == "checked" ? b = u : c === "key" || a && typeof u != "function" || A[c] === u || xx(x, c, u, A[c], n);
    if (d) a || g && (d.__html === g.__html || d.__html === x.innerHTML) || (x.innerHTML = d.__html), i.__k = [];
    else if (g && (x.innerHTML = ""), hs(x, si(f) ? f : [f], i, t, e, v === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n, o, r, o ? o[0] : t.__k && d0(t, -8675 + 1541 * -1 + 10216), a, s), o != null)
      for (c = o.length; c--; ) o[c] != null && Cs(o[c]);
    a || (c = "value", void (3803 * -1 + 4470 + 1 * -667) !== p && (p !== x[c] || v === "progress" && !p || v === "option" && p !== A[c]) && xx(x, c, p, A[c], n), c = "checked", void (1697 * 1 + 610 * -6 + 13 * 151) !== b && b !== x[c] && xx(x, c, b, A[c], n));
  }
  return x;
}
function Xo(x, i, t) {
  try {
    typeof x == "function" ? x(i) : x.current = i;
  } catch (e) {
    F.__e(e, t);
  }
}
function to(x, i, t) {
  var e, n;
  if (F.unmount && F.unmount(x), (e = x.ref) && (e.current && e.current !== x.__e || Xo(e, null, i)), (e = x.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (o) {
      F.__e(o, i);
    }
    e.base = e.__P = null;
  }
  if (e = x.__k)
    for (n = 229 * -39 + 3 * -1901 + 14634; n < e.length; n++) e[n] && to(e[n], i, t || typeof x.type != "function");
  t || x.__e == null || Cs(x.__e), x.__c = x.__ = x.__e = x.__d = void (-1261 + -19 * 169 + 4472);
}
function Rg(x, i, t) {
  return this.constructor(x, t);
}
function jt(x, i, t) {
  var e, n, o, r;
  F.__ && F.__(x, i), n = (e = typeof t == "function") ? null : t && t.__k || i.__k, o = [], r = [], Mo(i, x = (!e && t || i).__k = Ee(ot, null, [x]), n || mn, mn, i.namespaceURI, !e && t ? [t] : n ? null : i.firstChild ? Ln.call(i.childNodes) : null, o, !e && t ? t : n ? n.__e : i.firstChild, e, r), bs(o, x, r);
}
function _o(x, i) {
  jt(x, i, _o);
}
function Jo(x, i, t) {
  var e, n, o, r, a = Zt({}, x.props);
  for (o in x.type && x.type.defaultProps && (r = x.type.defaultProps), i) o == "key" ? e = i[o] : o == "ref" ? n = i[o] : a[o] = void (-5650 + -1130 * -5) === i[o] && void (5 * -235 + -29 * 218 + 7497) !== r ? r[o] : i[o];
  return arguments.length > -1 * -2309 + -48 * 49 + 45 && (a.children = arguments.length > 3 ? Ln.call(arguments, -1 * -8623 + -3515 + -69 * 74) : t), In(x.type, a, e || x.key, n || x.ref, null);
}
function Dn(x, i) {
  var t = { __c: i = "__cC" + Is++, __: x, Consumer: function(e, n) {
    return e.children(n);
  }, Provider: function(e) {
    var n, o;
    return this.getChildContext || (n = [], (o = {})[i] = this, this.getChildContext = function() {
      return o;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(r) {
      this.props.value !== r.value && n.some(function(a) {
        a.__e = !0, eo(a);
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
Ln = fs.slice, F = { __e: function(x, i, t, e) {
  for (var n, o, r; i = i.__; ) if ((n = i.__c) && !n.__) try {
    if ((o = n.constructor) && o.getDerivedStateFromError != null && (n.setState(o.getDerivedStateFromError(x)), r = n.__d), n.componentDidCatch != null && (n.componentDidCatch(x, e || {}), r = n.__d), r) return n.__E = n;
  } catch (a) {
    x = a;
  }
  throw x;
} }, ds = 8872 + 1 * 3250 + -638 * 19, us = function(x) {
  return x != null && x.constructor == null;
}, xt.prototype.setState = function(x, i) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Zt({}, this.state), typeof x == "function" && (x = x(Zt({}, t), this.props)), x && Zt(t, x), x != null && this.__v && (i && this._sb.push(i), eo(this));
}, xt.prototype.forceUpdate = function(x) {
  this.__v && (this.__e = !(8144 + -2 * 4072), x && this.__h.push(x), eo(this));
}, xt.prototype.render = ot, e0 = [], ls = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, zi = function(x, i) {
  return x.__v.__b - i.__v.__b;
}, Gx.__r = -831 * -5 + 5786 * 1 + 9941 * -1, jo = 0, qi = Qr(!(5697 + -251 * 17 + -1429 * 1)), $i = Qr(!(2 * -4333 + 7230 + -718 * -2)), Is = -5009 * 1 + -2 * -3351 + -1693;
function Qo() {
  return (Qo = Object.assign ? Object.assign.bind() : function(x) {
    for (var i = 5125 + -1 * -4317 + -1049 * 9; i < arguments.length; i++) {
      var t = arguments[i];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (x[e] = t[e]);
    }
    return x;
  }).apply(this, arguments);
}
var Pg = ["context", "children"];
function Vg(x) {
  this.getChildContext = function() {
    return x.context;
  };
  var i = x.children, t = function(e, n) {
    if (e == null) return {};
    var o, r, a = {}, s = Object.keys(e);
    for (r = 0; r < s.length; r++) n.indexOf(o = s[r]) >= -5 * 43 + 94 * 47 + -4203 || (a[o] = e[o]);
    return a;
  }(x, Pg);
  return Jo(i, t);
}
function Tg() {
  var x = {};
  x.detail = {}, x.bubbles = !0, x.cancelable = !(3487 + -1 * 3487);
  var i = new CustomEvent("_preact", x);
  this.dispatchEvent(i), this._vdom = Ee(Vg, Qo({}, this._props, { context: i.detail.context }), function t(e, n) {
    if (5335 + 37 * 91 + -8699 === e.nodeType) return e.data;
    if (8602 + -47 * 183 !== e.nodeType) return null;
    var o = [], r = {}, a = 10920 + -12 * 910, s = e.attributes, c = e.childNodes;
    for (a = s.length; a--; ) s[a].name !== "slot" && (r[s[a].name] = s[a].value, r[As(s[a].name)] = s[a].value);
    for (a = c.length; a--; ) {
      var d = t(c[a], null), g = c[a].slot;
      g ? r[g] = Ee(Ur, { name: g }, d) : o[a] = d;
    }
    var f = n ? Ee(Ur, null, o) : o;
    return Ee(n || e.nodeName.toLowerCase(), r, f);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? _o : jt)(this._vdom, this._root);
}
function As(x) {
  return x.replace(/-(\w)/g, function(i, t) {
    return t ? t.toUpperCase() : "";
  });
}
function Eg(x, i, t) {
  if (this._vdom) {
    var e = {};
    e[x] = t = t ?? void (1 * 7627 + 6720 + -14347), e[As(x)] = t, this._vdom = Jo(this._vdom, e), jt(this._vdom, this._root);
  }
}
function Lg() {
  jt(this._vdom = null, this._root);
}
function Ur(x, i) {
  var t = this;
  return Ee("slot", Qo({}, x, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(n) {
      n.stopPropagation(), n.detail.context = i;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function Dg(x, i, t, e) {
  function n() {
    var o = Reflect.construct(HTMLElement, [], n);
    return o._vdomComponent = x, o._root = o, o;
  }
  return (n.prototype = Object.create(HTMLElement.prototype)).constructor = n, n.prototype.connectedCallback = Tg, n.prototype.attributeChangedCallback = Eg, n.prototype.disconnectedCallback = Lg, t = t || x.observedAttributes || Object.keys(x.propTypes || {}), n.observedAttributes = t, t.forEach(function(o) {
    Object.defineProperty(n.prototype, o, { get: function() {
      return this._vdom.props[o];
    }, set: function(r) {
      this._vdom ? this.attributeChangedCallback(o, null, r) : (this._props || (this._props = {}), this._props[o] = r, this.connectedCallback());
      var a = typeof r;
      r != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(o, r);
    } });
  }), customElements.define(i, n);
}
var Ng = 3 * 578 + -7610 + 2938 * 2;
function O(x, i, t, e, n, o) {
  i || (i = {});
  var r, a, s = i;
  if ("ref" in s)
    for (a in s = {}, i) a == "ref" ? r = i[a] : s[a] = i[a];
  var c = {};
  c.type = x, c.props = s, c.key = t, c.ref = r, c.__k = null, c.__ = null, c.__b = 0, c.__e = null, c.__d = void (-1637 * 1 + -4587 * -1 + -2950 * 1), c.__c = null, c.constructor = void (-9787 + 1 * 9787), c.__v = --Ng, c.__i = -(-8639 + 86 * 47 + 4598), c.__u = 0, c.__source = n, c.__self = o;
  var d = c;
  if (typeof x == "function" && (r = x.defaultProps))
    for (a in r) void (427 * 9 + 5623 + -1 * 9466) === s[a] && (s[a] = r[a]);
  return F.vnode && F.vnode(d), d;
}
var Ye = function() {
  return Ye = Object.assign || function(i) {
    for (var t, e = 1, n = arguments.length; e < n; e++) {
      t = arguments[e];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (i[o] = t[o]);
    }
    return i;
  }, Ye.apply(this, arguments);
};
function V0(x, i, t) {
  if (t || arguments.length === 2) for (var e = 0, n = i.length, o; e < n; e++)
    (o || !(e in i)) && (o || (o = Array.prototype.slice.call(i, 0, e)), o[e] = i[e]);
  return x.concat(o || Array.prototype.slice.call(i));
}
function Fg(x) {
  var i = Object.create(null);
  return function(t) {
    return i[t] === void 0 && (i[t] = x(t)), i[t];
  };
}
var Yg = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, jg = Fg(function(x) {
  return Yg.test(x) || x.charCodeAt(-566 * 1 + -4306 + -812 * -6) === -3 * 823 + 43 * -77 + -43 * -137 && x.charCodeAt(-6834 * -1 + -438 + -6395 * 1) === -3 * -73 + 5873 + 1994 * -3 && x.charCodeAt(2499 + 227 * -11) < -289 * 33 + 1684 + 7944;
}), Mt, se, Ri, zr, T0 = -184 + -1 * -827 + -643, ys = [], ce = F, qr = ce.__b, $r = ce.__r, ea = ce.diffed, ta = ce.__c, na = ce.unmount, xa = ce.__;
function j0(x, i) {
  ce.__h && ce.__h(se, x, T0 || i), T0 = 1155 + 4889 * 1 + -6044;
  var t = {};
  t.__ = [], t.__h = [];
  var e = se.__H || (se.__H = t);
  return x >= e.__.length && e.__.push({}), e.__[x];
}
function Qe(x) {
  return T0 = -8674 + 7 * 1135 + 10 * 73, Uo(Ss, x);
}
function Uo(x, i, t) {
  var e = j0(Mt++, 2);
  if (e.t = x, !e.__c && (e.__ = [t ? t(i) : Ss(void (7 + -14 * 221 + 3087), i), function(a) {
    var s = e.__N ? e.__N[0] : e.__[0], c = e.t(s, a);
    s !== c && (e.__N = [c, e.__[4737 + -1 * -3525 + -8261 * 1]], e.__c.setState({}));
  }], e.__c = se, !se.u)) {
    var n = function(a, s, c) {
      if (!e.__c.__H) return !0;
      var d = e.__c.__H.__.filter(function(f) {
        return !!f.__c;
      });
      if (d.every(function(f) {
        return !f.__N;
      })) return !o || o.call(this, a, s, c);
      var g = !(-6555 + 1 * 6556);
      return d.forEach(function(f) {
        if (f.__N) {
          var u = f.__[0];
          f.__ = f.__N, f.__N = void 0, u !== f.__[0] && (g = !0);
        }
      }), !(!g && e.__c.props === a) && (!o || o.call(this, a, s, c));
    };
    se.u = !(22 * 116 + 9359 * 1 + -11911);
    var o = se.shouldComponentUpdate, r = se.componentWillUpdate;
    se.componentWillUpdate = function(a, s, c) {
      if (this.__e) {
        var d = o;
        o = void (-4674 + -2901 * -2 + -4 * 282), n(a, s, c), o = d;
      }
      r && r.call(this, a, s, c);
    }, se.shouldComponentUpdate = n;
  }
  return e.__N || e.__;
}
function fe(x, i) {
  var t = j0(Mt++, 3);
  !ce.__s && zo(t.__H, i) && (t.__ = x, t.i = i, se.__H.__h.push(t));
}
function M0(x, i) {
  var t = j0(Mt++, 4);
  !ce.__s && zo(t.__H, i) && (t.__ = x, t.i = i, se.__h.push(t));
}
function At(x) {
  return T0 = 1136 * -6 + -1 * -1984 + 4837, Ue(function() {
    var i = {};
    return i.current = x, i;
  }, []);
}
function Ws(x, i, t) {
  T0 = -1 * 6296 + 7226 + -924, M0(function() {
    return typeof x == "function" ? (x(i()), function() {
      return x(null);
    }) : x ? (x.current = i(), function() {
      return x.current = null;
    }) : void (4 * 2354 + -1 * -4073 + -13489);
  }, t == null ? t : t.concat(x));
}
function Ue(x, i) {
  var t = j0(Mt++, 7);
  return zo(t.__H, i) && (t.__ = x(), t.__H = i, t.__h = x), t.__;
}
function Rt(x, i) {
  return T0 = -2659 * 1 + 1975 + -4 * -173, Ue(function() {
    return x;
  }, i);
}
function f0(x) {
  var i = se.context[x.__c], t = j0(Mt++, 24 * 389 + 8807 + -18134);
  return t.c = x, i ? (t.__ == null && (t.__ = !(-6823 * -1 + 55 * -151 + -3 * -494), i.sub(se)), i.props.value) : x.__;
}
function Ox(x, i) {
  ce.useDebugValue && ce.useDebugValue(i ? i(x) : x);
}
function vs() {
  var x = j0(Mt++, 11);
  if (!x.__) {
    for (var i = se.__v; i !== null && !i.__m && i.__ !== null; ) i = i.__;
    var t = i.__m || (i.__m = [-9719 + -2491 * 3 + -17192 * -1, -9140 + 2011 * -3 + 1 * 15173]);
    x.__ = "P" + t[233 * 14 + -7485 + 4223] + "-" + t[4 * 2344 + -215 * 43 + 26 * -5]++;
  }
  return x.__;
}
function Mg() {
  for (var x; x = ys.shift(); ) if (x.__P && x.__H) try {
    x.__H.__h.forEach(Ix), x.__H.__h.forEach(no), x.__H.__h = [];
  } catch (i) {
    x.__H.__h = [], ce.__e(i, x.__v);
  }
}
ce.__b = function(x) {
  se = null, qr && qr(x);
}, ce.__ = function(x, i) {
  x && i.__k && i.__k.__m && (x.__m = i.__k.__m), xa && xa(x, i);
}, ce.__r = function(x) {
  $r && $r(x), Mt = 113 * -13 + 2994 + 25 * -61;
  var i = (se = x.__c).__H;
  i && (Ri === se ? (i.__h = [], se.__h = [], i.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (1031 * -1 + 718 * -9 + 7493);
  })) : (i.__h.forEach(Ix), i.__h.forEach(no), i.__h = [], Mt = -404 * -1 + 25 * 122 + 22 * -157)), Ri = se;
}, ce.diffed = function(x) {
  ea && ea(x);
  var i = x.__c;
  i && i.__H && (i.__H.__h.length && (ys.push(i) !== 1 && zr === ce.requestAnimationFrame || ((zr = ce.requestAnimationFrame) || Xg)(Mg)), i.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (-2735 * -1 + 1 * 59 + -127 * 22);
  })), Ri = se = null;
}, ce.__c = function(x, i) {
  i.some(function(t) {
    try {
      t.__h.forEach(Ix), t.__h = t.__h.filter(function(e) {
        return !e.__ || no(e);
      });
    } catch (e) {
      i.some(function(n) {
        n.__h && (n.__h = []);
      }), i = [], ce.__e(e, t.__v);
    }
  }), ta && ta(x, i);
}, ce.unmount = function(x) {
  na && na(x);
  var i, t = x.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      Ix(e);
    } catch (n) {
      i = n;
    }
  }), t.__H = void (125 * -74 + -3065 + -4105 * -3), i && ce.__e(i, t.__v));
};
var ia = typeof requestAnimationFrame == "function";
function Xg(x) {
  var i, t = function() {
    clearTimeout(e), ia && cancelAnimationFrame(i), setTimeout(x);
  }, e = setTimeout(t, 100);
  ia && (i = requestAnimationFrame(t));
}
function Ix(x) {
  var i = se, t = x.__c;
  typeof t == "function" && (x.__c = void (8962 * -1 + -1 * 5711 + 14673), t()), se = i;
}
function no(x) {
  var i = se;
  x.__c = x.__(), se = i;
}
function zo(x, i) {
  return !x || x.length !== i.length || i.some(function(t, e) {
    return t !== x[e];
  });
}
function Ss(x, i) {
  return typeof i == "function" ? i(x) : i;
}
function ws(x, i) {
  for (var t in i) x[t] = i[t];
  return x;
}
function xo(x, i) {
  for (var t in x) if (t !== "__source" && !(t in i)) return !(3226 * 2 + 3 * 653 + -647 * 13);
  for (var e in i) if (e !== "__source" && x[e] !== i[e]) return !(-8045 + -1 * -4003 + -4042 * -1);
  return !(5745 + 359 * -16);
}
function io(x, i) {
  this.props = x, this.context = i;
}
function _g(x, i) {
  function t(n) {
    var o = this.props.ref, r = o == n.ref;
    return !r && o && (o.call ? o(null) : o.current = null), i ? !i(this.props, n) || !r : xo(this.props, n);
  }
  function e(n) {
    return this.shouldComponentUpdate = t, Ee(x, n);
  }
  return e.displayName = "Memo(" + (x.displayName || x.name) + ")", e.prototype.isReactComponent = !(-6 * 884 + 1 * 7516 + -2212), e.__f = !(-1 * -1619 + -5828 + 4209 * 1), e;
}
(io.prototype = new xt()).isPureReactComponent = !(-2368 + 3721 * -1 + 6089), io.prototype.shouldComponentUpdate = function(x, i) {
  return xo(this.props, x) || xo(this.state, i);
};
var oa = F.__b;
F.__b = function(x) {
  x.type && x.type.__f && x.ref && (x.props.ref = x.ref, x.ref = null), oa && oa(x);
};
var Jg = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || -5 * -154 + 7242 + -4101;
function Bs(x) {
  function i(t) {
    var e = ws({}, t);
    return delete e.ref, x(e, t.ref || null);
  }
  return i.$$typeof = Jg, i.render = i, i.prototype.isReactComponent = i.__f = !(-5627 + 17 * 331), i.displayName = "ForwardRef(" + (x.displayName || x.name) + ")", i;
}
var ra = function(x, i) {
  return x == null ? null : Kt(Kt(x).map(i));
}, Qg = { map: ra, forEach: ra, count: function(x) {
  return x ? Kt(x).length : -522 * -6 + 8536 + -2 * 5834;
}, only: function(x) {
  var i = Kt(x);
  if (-20 * -103 + -1465 * -1 + 881 * -4 !== i.length) throw "Children.only";
  return i[7338 + 691 * -5 + -3883];
}, toArray: Kt }, Ug = F.__e;
F.__e = function(x, i, t, e) {
  if (x.then) {
    for (var n, o = i; o = o.__; ) if ((n = o.__c) && n.__c) return i.__e == null && (i.__e = t.__e, i.__k = t.__k), n.__c(x, i);
  }
  Ug(x, i, t, e);
};
var aa = F.unmount;
function ks(x, i, t) {
  return x && (x.__c && x.__c.__H && (x.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), x.__c.__H = null), (x = ws({}, x)).__c != null && (x.__c.__P === t && (x.__c.__P = i), x.__c = null), x.__k = x.__k && x.__k.map(function(e) {
    return ks(e, i, t);
  })), x;
}
function Gs(x, i, t) {
  return x && t && (x.__v = null, x.__k = x.__k && x.__k.map(function(e) {
    return Gs(e, i, t);
  }), x.__c && x.__c.__P === i && (x.__e && t.appendChild(x.__e), x.__c.__e = !(4041 * -1 + -9 * 1063 + 13608), x.__c.__P = t)), x;
}
function fx() {
  this.__u = -2 * 2840 + 757 * 8 + 2 * -188, this.t = null, this.__b = null;
}
function Os(x) {
  var i = x.__.__c;
  return i && i.__a && i.__a(x);
}
function zg(x) {
  var i, t, e;
  function n(o) {
    if (i || (i = x()).then(function(r) {
      t = r.default || r;
    }, function(r) {
      e = r;
    }), e) throw e;
    if (!t) throw i;
    return Ee(t, o);
  }
  return n.displayName = "Lazy", n.__f = !(709 * 7 + 51 * 181 + -14194), n;
}
function an() {
  this.u = null, this.o = null;
}
F.unmount = function(x) {
  var i = x.__c;
  i && i.__R && i.__R(), i && -900 + 38 * 250 + -8568 & x.__u && (x.type = null), aa && aa(x);
}, (fx.prototype = new xt()).__c = function(x, i) {
  var t = i.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var n = Os(e.__v), o = !(12524 + -1789 * 7), r = function() {
    o || (o = !(-35 * -177 + -1 * 2956 + 1 * -3239), t.__R = null, n ? n(a) : a());
  };
  t.__R = r;
  var a = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var s = e.state.__a;
        e.__v.__k[-8930 + 2506 * -1 + 1 * 11436] = Gs(s, s.__c.__P, s.__c.__O);
      }
      var c;
      for (e.setState({ __a: e.__b = null }); c = e.t.pop(); ) c.forceUpdate();
    }
  };
  e.__u++ || -33 * -142 + 2349 + -149 * 47 & i.__u || e.setState({ __a: e.__b = e.__v.__k[2206 + 1 * 6395 + -8601] }), x.then(r, r);
}, fx.prototype.componentWillUnmount = function() {
  this.t = [];
}, fx.prototype.render = function(x, i) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[-330 * 9 + -7275 + 10245].__c;
      this.__v.__k[-33 * -81 + -542 + -2131] = ks(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var n = i.__a && Ee(ot, null, x.fallback);
  return n && (n.__u &= -(2820 * -1 + -1 * -1830 + 1023)), [Ee(ot, null, i.__a ? null : x.children), n];
};
var sa = function(x, i, t) {
  if (++t[-4657 + 5233 * 1 + -575] === t[43 * 81 + -36 * 232 + 541 * 9] && x.o.delete(i), x.props.revealOrder && (x.props.revealOrder[8668 + 739 * 10 + -259 * 62] !== "t" || !x.o.size)) for (t = x.u; t; ) {
    for (; t.length > 3; ) t.pop()();
    if (t[5380 * 1 + 6400 + -11779 * 1] < t[3233 + -61 * 53]) break;
    x.u = t = t[2];
  }
};
function qg(x) {
  return this.getChildContext = function() {
    return x.context;
  }, x.children;
}
function $g(x) {
  var i = this, t = x.i;
  i.componentWillUnmount = function() {
    jt(null, i.l), i.l = null, i.i = null;
  }, i.i && i.i !== t && i.componentWillUnmount(), i.l || (i.i = t, i.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(-2998 + 1 * -7076 + 69 * 146);
  }, appendChild: function(e) {
    this.childNodes.push(e), i.i.appendChild(e);
  }, insertBefore: function(e, n) {
    this.childNodes.push(e), i.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> 6613 + -174 * 38, 5591 + 9706 * 1 + 4 * -3824), i.i.removeChild(e);
  } }), jt(Ee(qg, { context: i.context }, x.__v), i.l);
}
function ed(x, i) {
  var t = {};
  t.__v = x, t.i = i;
  var e = Ee($g, t);
  return e.containerInfo = i, e;
}
(an.prototype = new xt()).__a = function(x) {
  var i = this, t = Os(i.__v), e = i.o.get(x);
  return e[-3682 + -526 * -7]++, function(n) {
    var o = function() {
      i.props.revealOrder ? (e.push(n), sa(i, x, e)) : n();
    };
    t ? t(o) : o();
  };
}, an.prototype.render = function(x) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var i = Kt(x.children);
  x.revealOrder && x.revealOrder[0] === "b" && i.reverse();
  for (var t = i.length; t--; ) this.o.set(i[t], this.u = [-1 * -9272 + -8067 + -1 * 1204, 8494 * 1 + -601 * 1 + 877 * -9, this.u]);
  return x.children;
}, an.prototype.componentDidUpdate = an.prototype.componentDidMount = function() {
  var x = this;
  this.o.forEach(function(i, t) {
    sa(x, t, i);
  });
};
var Zs = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 32671 + 50420 * 1 + -22988, td = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, nd = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, xd = /[A-Z0-9]/g, id = typeof document < "u", od = function(x) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(x);
};
function rd(x, i, t) {
  return i.__k == null && (i.textContent = ""), jt(x, i), typeof t == "function" && t(), x ? x.__c : null;
}
function ad(x, i, t) {
  return _o(x, i), typeof t == "function" && t(), x ? x.__c : null;
}
xt.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(x) {
  Object.defineProperty(xt.prototype, x, { configurable: !(-15066 + 54 * 279), get: function() {
    return this["UNSAFE_" + x];
  }, set: function(i) {
    var t = {};
    t.configurable = !(-9717 + -10 * 847 + 18187), t.writable = !0, t.value = i, Object.defineProperty(this, x, t);
  } });
});
var ca = F.event;
function sd() {
}
function cd() {
  return this.cancelBubble;
}
function gd() {
  return this.defaultPrevented;
}
F.event = function(x) {
  return ca && (x = ca(x)), x.persist = sd, x.isPropagationStopped = cd, x.isDefaultPrevented = gd, x.nativeEvent = x;
};
var Cx = {};
Cx.enumerable = !1, Cx.configurable = !(6615 * 1 + -14 * 35 + -125 * 49), Cx.get = function() {
  return this.class;
};
var qo, dd = Cx, ga = F.vnode;
F.vnode = function(x) {
  typeof x.type == "string" && function(i) {
    var t = i.props, e = i.type, n = {};
    for (var o in t) {
      var r = t[o];
      if (!(o === "value" && "defaultValue" in t && r == null || id && o === "children" && e === "noscript" || o === "class" || o === "className")) {
        var a = o.toLowerCase();
        o === "defaultValue" && "value" in t && t.value == null ? o = "value" : o === "download" && r === !0 ? r = "" : a === "translate" && r === "no" ? r = !(10443 + 2 * -5221) : a === "ondoubleclick" ? o = "ondblclick" : a !== "onchange" || e !== "input" && e !== "textarea" || od(t.type) ? a === "onfocus" ? o = "onfocusin" : a === "onblur" ? o = "onfocusout" : nd.test(o) ? o = a : -(-2 * 2549 + 2197 + 2902 * 1) === e.indexOf("-") && td.test(o) ? o = o.replace(xd, "-$&").toLowerCase() : r === null && (r = void (1686 + 1 * -9041 + 7355)) : a = o = "oninput", a === "oninput" && n[o = a] && (o = "oninputCapture"), n[o] = r;
      }
    }
    e == "select" && n.multiple && Array.isArray(n.value) && (n.value = Kt(t.children).forEach(function(s) {
      s.props.selected = -(6781 + -5 * 644 + -3560) != n.value.indexOf(s.props.value);
    })), e == "select" && n.defaultValue != null && (n.value = Kt(t.children).forEach(function(s) {
      s.props.selected = n.multiple ? -(5060 + 103 * -17 + -3308) != n.defaultValue.indexOf(s.props.value) : n.defaultValue == s.props.value;
    })), t.class && !t.className ? (n.class = t.class, Object.defineProperty(n, "className", dd)) : (t.className && !t.class || t.class && t.className) && (n.class = n.className = t.className), i.props = n;
  }(x), x.$$typeof = Zs, ga && ga(x);
};
var da = F.__r;
F.__r = function(x) {
  da && da(x), qo = x.__c;
};
var ua = F.diffed;
F.diffed = function(x) {
  ua && ua(x);
  var i = x.props, t = x.__e;
  t != null && x.type === "textarea" && "value" in i && i.value !== t.value && (t.value = i.value == null ? "" : i.value), qo = null;
};
var We = {};
We.readContext = function(x) {
  return qo.__n[x.__c].props.value;
}, We.useCallback = Rt, We.useContext = f0, We.useDebugValue = Ox, We.useDeferredValue = Ps, We.useEffect = fe, We.useId = vs, We.useImperativeHandle = Ws, We.useInsertionEffect = Ts, We.useLayoutEffect = M0, We.useMemo = Ue, We.useReducer = Uo, We.useRef = At, We.useState = Qe, We.useSyncExternalStore = Es, We.useTransition = Vs;
var Hs = {};
Hs.current = We;
var Ks = {};
Ks.ReactCurrentDispatcher = Hs;
var ud = Ks;
function ld(x) {
  return Ee.bind(null, x);
}
function ci(x) {
  return !!x && x.$$typeof === Zs;
}
function Id(x) {
  return ci(x) && x.type === ot;
}
function fd(x) {
  return !!x && !!x.displayName && (typeof x.displayName == "string" || x.displayName instanceof String) && x.displayName.startsWith("Memo(");
}
function Cd(x) {
  return ci(x) ? Jo.apply(null, arguments) : x;
}
function pd(x) {
  return !!x.__k && (jt(null, x), !(3953 + 2 * -3989 + 805 * 5));
}
function hd(x) {
  return x && (x.base || x.nodeType === 1 && x) || null;
}
var md = function(x, i) {
  return x(i);
}, bd = function(x, i) {
  return x(i);
}, Ad = ot;
function Rs(x) {
  x();
}
function Ps(x) {
  return x;
}
function Vs() {
  return [!(1678 * 5 + -3706 + 7 * -669), Rs];
}
var Ts = M0, yd = ci;
function Es(x, i) {
  var t = i(), e = Qe({ h: { __: t, v: i } }), n = e[8299 + -193 * 43].h, o = e[-8146 + 511 * -3 + 9680];
  return M0(function() {
    n.__ = t, n.v = i, Pi(n) && o({ h: n });
  }, [x, t, i]), fe(function() {
    return Pi(n) && o({ h: n }), x(function() {
      Pi(n) && o({ h: n });
    });
  }, [x]), t;
}
function Pi(x) {
  var i, t, e = x.v, n = x.__;
  try {
    var o = e();
    return !((i = n) === (t = o) && (1583 * -5 + 4 * 755 + 4895 !== i || (232 * 32 + 1 * 3964 + 193 * -59) / i == (4958 * -2 + -5333 + 15250) / t) || i != i && t != t);
  } catch {
    return !(3589 + 6274 * -1 + 3 * 895);
  }
}
var N = {};
N.useState = Qe, N.useId = vs, N.useReducer = Uo, N.useEffect = fe, N.useLayoutEffect = M0, N.useInsertionEffect = Ts, N.useTransition = Vs, N.useDeferredValue = Ps, N.useSyncExternalStore = Es, N.startTransition = Rs, N.useRef = At, N.useImperativeHandle = Ws, N.useMemo = Ue, N.useCallback = Rt, N.useContext = f0, N.useDebugValue = Ox, N.version = "17.0.2", N.Children = Qg, N.render = rd, N.hydrate = ad, N.unmountComponentAtNode = pd, N.createPortal = ed, N.createElement = Ee, N.createContext = Dn, N.createFactory = ld, N.cloneElement = Cd, N.createRef = Og, N.Fragment = ot, N.isValidElement = ci, N.isElement = yd, N.isFragment = Id, N.isMemo = fd, N.findDOMNode = hd, N.Component = xt, N.PureComponent = io, N.memo = _g, N.forwardRef = Bs, N.flushSync = bd, N.unstable_batchedUpdates = md, N.StrictMode = Ad, N.Suspense = fx, N.SuspenseList = an, N.lazy = zg, N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ud;
var u0 = N, Wd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function vd(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function Sd(x) {
  return x && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function wd(x) {
  return x && Object.prototype.hasOwnProperty.call(x, "default") && Object.keys(x).length === 1 ? x.default : x;
}
function Bd(x) {
  if (x.__esModule) return x;
  var i = x.default;
  if (typeof i == "function") {
    var t = function e() {
      return this instanceof e ? Reflect.construct(i, arguments, this.constructor) : i.apply(this, arguments);
    };
    t.prototype = i.prototype;
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
const kd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: Wd,
  getAugmentedNamespace: Bd,
  getDefaultExportFromCjs: vd,
  getDefaultExportFromNamespaceIfNotNamed: wd,
  getDefaultExportFromNamespaceIfPresent: Sd
}, Symbol.toStringTag, { value: "Module" }));
var Gd = function(i, t, e, n) {
  var o = e ? e.call(n, i, t) : void 0;
  if (o !== void (-5314 + 59 * -22 + 6612)) return !!o;
  if (i === t) return !0;
  if (typeof i != "object" || !i || typeof t != "object" || !t) return !1;
  var r = Object.keys(i), a = Object.keys(t);
  if (r.length !== a.length) return !1;
  for (var s = Object.prototype.hasOwnProperty.bind(t), c = -7638 + 7 * -149 + 8681; c < r.length; c++) {
    var d = r[c];
    if (!s(d)) return !1;
    var g = i[d], f = t[d];
    if (o = e ? e.call(n, g, f, d) : void (-23 * 433 + 9369 + 590), o === !1 || o === void (3196 * -2 + -9 * -799 + 1 * -799) && g !== f) return !1;
  }
  return !0;
};
const Od = kd.getDefaultExportFromCjs(Gd);
var ae = "-ms-", fn = "-moz-", ee = "-webkit-", Ls = "comm", gi = "rule", $o = "decl", Zd = "@import", Ds = "@keyframes", Hd = "@layer", Ns = Math.abs, er = String.fromCharCode, oo = Object.assign;
function Kd(x, i) {
  return ye(x, -3171 + 9723 * -1 + 307 * 42) ^ -7542 + -5 * 1307 + 14122 ? (((i << -12452 + 26 * 479 ^ ye(x, -7085 + 182 * -5 + 7995)) << -308 * 14 + 1 * -770 + 164 * 31 ^ ye(x, 111 * 83 + -11 * -15 + -9377)) << 9091 * 1 + 1649 * -5 + -844 ^ ye(x, -9954 + 8061 * -1 + -419 * -43)) << -2316 + -1 * 2299 + 1539 * 3 ^ ye(x, 7590 + 1 * -5209 + -29 * 82) : 4446 * 1 + 1046 + -5492;
}
function Fs(x) {
  return x.trim();
}
function kt(x, i) {
  return (x = i.exec(x)) ? x[11 * 746 + -85 * 60 + 2 * -1553] : x;
}
function Y(x, i, t) {
  return x.replace(i, t);
}
function px(x, i, t) {
  return x.indexOf(i, t);
}
function ye(x, i) {
  return x.charCodeAt(i) | 14192 + 1774 * -8;
}
function E0(x, i, t) {
  return x.slice(i, t);
}
function ht(x) {
  return x.length;
}
function Ys(x) {
  return x.length;
}
function sn(x, i) {
  return i.push(x), x;
}
function Rd(x, i) {
  return x.map(i).join("");
}
function la(x, i) {
  return x.filter(function(t) {
    return !kt(t, i);
  });
}
var di = -69 * 21 + -5935 + 7385, L0 = 8184 + -878 * 11 + 1 * 1475, js = -3 * -39 + 577 * 1 + -347 * 2, rt = 13 * 678 + 7401 + -3243 * 5, pe = -3 * 1737 + -6503 + 11714, X0 = "";
function ui(x, i, t, e, n, o, r, a) {
  var s = {};
  return s.value = x, s.root = i, s.parent = t, s.type = e, s.props = n, s.children = o, s.line = di, s.column = L0, s.length = r, s.return = "", s.siblings = a, s;
}
function Dt(x, i) {
  return oo(ui("", null, null, "", null, null, -2914 + 28 * 141 + -1034, x.siblings), x, { length: -x.length }, i);
}
function B0(x) {
  for (; x.root; ) x = Dt(x.root, { children: [x] });
  sn(x, x.siblings);
}
function Pd() {
  return pe;
}
function Vd() {
  return pe = rt > 8282 + 101 * -82 ? ye(X0, --rt) : 3277 + 107 * 3 + -3598, L0--, pe === 29 * 331 + 28 * 7 + -95 * 103 && (L0 = 1, di--), pe;
}
function ut() {
  return pe = rt < js ? ye(X0, rt++) : 5648 * -1 + -1098 + 6746, L0++, pe === 10 && (L0 = 337 * 11 + -7854 + 4148, di++), pe;
}
function c0() {
  return ye(X0, rt);
}
function hx() {
  return rt;
}
function li(x, i) {
  return E0(X0, x, i);
}
function ro(x) {
  switch (x) {
    case 0:
    case -5094 + 283 * -9 + 7650:
    case 10:
    case -106 * -7 + -9392 + -8663 * -1:
    case -7460 + -3253 * 2 + 13998:
      return -59 * -90 + -1 * -7497 + -12802;
    case -4798 + 1 * -9506 + -4779 * -3:
    case -3379 + 6 * 1643 + 1609 * -4:
    case -9037 + 13 * -211 + 11824:
    case 673 * 7 + -6470 + 1806:
    case 40 * -245 + -251 * -7 + -1 * -8105:
    case 64:
    case 1 * 9978 + -1189 * -5 + 15797 * -1:
    case 6603 + 2 * -3272:
    case -685 * 6 + 6281 + 512 * -4:
    case 125:
      return 7944 + -2 * 3970;
    case -6782 + -342 * -20:
      return 825 + -1 * -9077 + -9899;
    case 34:
    case -771 + -5 * -701 + -77 * 35:
    case -6428 * 1 + 1529 * -2 + 9526:
    case 4924 * 1 + -9719 + 4886:
      return 4276 + 215 * 45 + -13949;
    case -50 + 4 * 614 + -2365:
    case 1 * 7688 + 2826 + 1 * -10421:
      return -3009 + -1505 * -2;
  }
  return -1183 + 1181 * 3 + -2360;
}
function Td(x) {
  return di = L0 = 1 * 2608 + -554 * -12 + -9255, js = ht(X0 = x), rt = 11710 + -10 * 1171, [];
}
function Ed(x) {
  return X0 = "", x;
}
function Vi(x) {
  return Fs(li(rt - (16 * -139 + -2 * -3797 + -5369), ao(x === -7937 + -2876 * -1 + -7 * -736 ? x + (-9768 + 1954 * 5) : x === -4379 + 108 * -31 + 7767 ? x + (309 * -9 + -9508 + 12290) : x)));
}
function Ld(x) {
  for (; (pe = c0()) && pe < 1 * -1317 + -6192 + 7542; ) ut();
  return ro(x) > 10368 + 73 * -142 || ro(pe) > 3 ? "" : " ";
}
function Dd(x, i) {
  for (; --i && ut() && !(pe < -1655 + -58 * -10 + -1123 * -1 || pe > 8e3 + 388 * 10 + -11778 || pe > 1 * 8686 + 7309 + -15938 && pe < 3308 + -5671 * 1 + -2 * -1214 || pe > -9439 * 1 + 939 * -7 + -473 * -34 && pe < 1627 + 5 * 1669 + -9875); ) ;
  return li(x, hx() + (i < 6 && c0() == 27 * -38 + -188 * -41 + 266 * -25 && ut() == 7730 + 4 * 2083 + -1 * 16030));
}
function ao(x) {
  for (; ut(); ) switch (pe) {
    case x:
      return rt;
    case 148 * 23 + 7827 + -11197:
    case 39:
      x !== -13063 + 1 * 13097 && x !== -7646 + -14 * 236 + 10989 && ao(pe);
      break;
    case 40:
      x === -274 * 23 + -1 * 6537 + 230 * 56 && ao(x);
      break;
    case 92:
      ut();
      break;
  }
  return rt;
}
function Nd(x, i) {
  for (; ut() && x + pe !== 47 + (-1 * -7716 + -5078 + -73 * 36); ) if (x + pe === -762 * 10 + -5796 + 13458 + (3230 + -1594 * 2) && c0() === -2 * 103 + 1 * 158 + 95) break;
  return "/*" + li(i, rt - (4456 * 2 + 3331 + -12242)) + "*" + er(x === 1586 + -15 * 163 + 906 ? x : ut());
}
function Fd(x) {
  for (; !ro(c0()); ) ut();
  return li(x, rt);
}
function Yd(x) {
  return Ed(mx("", null, null, null, [""], x = Td(x), 0, [-4876 * 1 + -8747 + 13623], x));
}
function mx(x, i, t, e, n, o, r, a, s) {
  for (var c = 0, d = 2757 + 5428 * 1 + 1637 * -5, g = r, f = -2269 + -979 * 8 + 10101, u = 4319 + -1162 * 3 + -1 * 833, p = -631 + -43 * 123 + 5920, b = -3275 * -1 + -6400 + 1563 * 2, A = -7685 + -2562 * -3, l = -221 * -17 + -8119 + 4363, v = -5675 + 9107 * -1 + 38 * 389, Z = "", M = n, X = o, J = e, K = Z; A; ) switch (p = v, v = ut()) {
    case 2060 + -1 * 8031 + -1 * -6011:
      if (p != 108 && ye(K, g - (-1912 * 4 + 8086 + 437 * -1)) == 58) {
        px(K += Y(Vi(v), "&", "&\f"), "&\f", Ns(c ? a[c - (-734 * -5 + 5125 * -1 + 1456)] : 9973 + -1 * -9913 + 9943 * -2)) != -(7 * -1369 + 1 * -8269 + 17853) && (l = -(5992 + -306 * 23 + -349 * -3));
        break;
      }
    case -6706 * 1 + -29 * -65 + 4855 * 1:
    case 39:
    case 91:
      K += Vi(v);
      break;
    case 2960 + 1 * -4933 + 1982 * 1:
    case 3822 + -1906 * 2:
    case -9605 + 510 * 5 + 2356 * 3:
    case -9973 * 1 + -2394 + 12399:
      K += Ld(p);
      break;
    case -1 * 6939 + 4543 + -622 * -4:
      K += Dd(hx() - (-7 * 862 + 2 * -1e3 + -1607 * -5), -148 * -51 + 16 * -106 + -835 * 7);
      continue;
    case 39 * 99 + -4 * -674 + -217 * 30:
      switch (c0()) {
        case -4218 + -11 * 10 + 4370:
        case 5727 * 1 + -5 * -658 + 4485 * -2:
          sn(jd(Nd(ut(), hx()), i, t, s), s);
          break;
        default:
          K += "/";
      }
      break;
    case (725 * -1 + 8202 + 2 * -3677) * b:
      a[c++] = ht(K) * l;
    case (-8792 + -10 * 515 + 27 * 521) * b:
    case 2350 * -1 + -1962 * 3 + 8295:
    case 0:
      switch (v) {
        case 0:
        case 17 * -36 + -9932 + 10669:
          A = -6921 + -2 * -3146 + 629;
        case 3422 * 1 + -1878 + -297 * 5 + d:
          l == -(-1 * 3527 + -1570 + 5098) && (K = Y(K, /\f/g, "")), u > -6356 + -5557 * 1 + -627 * -19 && ht(K) - g && sn(u > 1 * 1703 + -509 * -11 + 3635 * -2 ? fa(K + ";", e, t, g - (-4272 + -2862 * 2 + -1 * -9997), s) : fa(Y(K, " ", "") + ";", e, t, g - (-952 + 1 * -8006 + 8960), s), s);
          break;
        case 1913 * -1 + -3099 * 2 + 8170:
          K += ";";
        default:
          if (sn(J = Ia(K, i, t, c, d, n, a, Z, M = [], X = [], g, o), o), v === -6 * -733 + 2609 + 4 * -1721)
            if (d === 9962 * -1 + -2833 * 1 + 12795) mx(K, i, J, J, M, o, g, a, X);
            else switch (f === -2726 * 3 + -8038 + 16315 && ye(K, -2057 + -1 * -2060) === 1106 + -249 * 4 ? 100 : f) {
              case -19 * 315 + 2299 * -3 + 12982:
              case 1 * 736 + 9952 + -10580:
              case 8584 * -1 + 8693 * 1 + 0:
              case 115:
                mx(x, J, J, e && sn(Ia(x, J, J, -1 * -3223 + 2486 * 4 + -13167, 103 * -95 + 248 * 28 + -1 * -2841, n, a, Z, n, M = [], g, X), X), n, X, g, a, e ? M : X);
                break;
              default:
                mx(K, J, J, J, [""], X, -37 * -12 + -4174 + 10 * 373, a, X);
            }
      }
      c = d = u = 3 * -3107 + -3475 * -1 + 5846, b = l = -8531 + 2133 * 4, Z = K = "", g = r;
      break;
    case -6347 + 128 * -67 + 14981:
      g = -9845 + -50 * -84 + 5646 + ht(K), u = p;
    default:
      if (b < 31 * 37 + -4787 + 3641 * 1) {
        if (v == 123) --b;
        else if (v == -5 * -1435 + -1 * 9223 + 2173 && b++ == -585 + 2 * 1222 + -1 * 1859 && Vd() == -2050 + -5 * -435) continue;
      }
      switch (K += er(v), v * b) {
        case 4 * -463 + 4 * -281 + -137 * -22:
          l = d > 10918 + 5459 * -2 ? 7699 * -1 + -7395 + -3019 * -5 : (K += "\f", -(-1013 * -8 + -9851 + 1748));
          break;
        case -13 * 718 + -1 * 7937 + 17315:
          a[c++] = (ht(K) - (8251 + 1 * 6151 + 1 * -14401)) * l, l = -1205 + 338 * 2 + 530;
          break;
        case -67 * -119 + 10 * 109 + -1 * 8999:
          c0() === 7001 * -1 + 1694 + -446 * -12 && (K += Vi(ut())), f = c0(), d = g = ht(Z = K += Fd(hx())), v++;
          break;
        case 1 * -1433 + -229 + -3 * -569:
          p === 5361 + 72 * -138 + 4620 && ht(K) == 5193 * -1 + -3304 + 8499 && (b = 157 * -42 + 7409 + 1 * -815);
      }
  }
  return o;
}
function Ia(x, i, t, e, n, o, r, a, s, c, d, g) {
  for (var f = n - 1, u = n === -4594 * -1 + 9214 + -6904 * 2 ? o : [""], p = Ys(u), b = 0, A = 3578 + 47 * 19 + -4471, l = 0; b < e; ++b) for (var v = 0, Z = E0(x, f + (2 * -2055 + 9288 + 1 * -5177), f = Ns(A = r[b])), M = x; v < p; ++v) (M = Fs(A > 1 * 5905 + -1 * 6583 + 1 * 678 ? u[v] + " " + Z : Y(Z, /&\f/g, u[v]))) && (s[l++] = M);
  return ui(x, i, t, n === -1409 + 1 * 172 + 1237 ? gi : a, s, c, d, g);
}
function jd(x, i, t, e) {
  return ui(x, i, t, Ls, er(Pd()), E0(x, -1342 * -2 + -1092 + -2 * 795, -(2 * 1939 + 14 * -569 + 2 * 2045)), -1 * -9293 + -4753 + -2270 * 2, e);
}
function fa(x, i, t, e, n) {
  return ui(x, i, t, $o, E0(x, -15159 + -1 * -15159, e), E0(x, e + (-3335 + -257 * 3 + 4107), -(-2801 + -105 * -88 + -6438)), e, n);
}
function Ms(x, i, t) {
  switch (Kd(x, i)) {
    case -33 * -248 + -171 * -11 + 827 * -6:
      return ee + "print-" + x + x;
    case -11124 + -1 * -16861:
    case -15 * -463 + 211 * -4 + -1900:
    case -1 * 2473 + 2397 + -1 * -3253:
    case 4902 + 1469 * -1:
    case 1 * -1851 + 848 + 2644:
    case 401 * -22 + -6681 + 19960:
    case 39 * 211 + -18 * -351 + 11626 * -1:
    case 14 * 788 + -7151 + 1691 * 1:
    case -8 * -655 + 1104 * -4 + -2 * -2766:
    case 17 * 209 + 10753 + -8462:
    case 16191 + 2600 * -5:
    case 7947 * -1 + -32 * 321 + 24864:
    case 281 * -33 + -1 * -79 + 12199:
    case 4805 + -1 * 6484 + 8070:
    case 619 + 1052 * 5:
    case -73 * -97 + 2217 * -4 + 7410:
    case 9101 * -1 + 6708 + 41 * 208:
    case -1019 * -5 + -8040 + 7544:
    case 4855:
    case 4215:
    case -1019 * -6 + 11010 + -10735:
    case 964 + 4145 * 1:
    case 5365:
    case -1009 * -1 + 20 * 542 + -6228:
    case 7 * 205 + 7850 + 11 * -496:
      return ee + x + x;
    case -5638 + -10427 * -1:
      return fn + x + x;
    case 6453 + -92 * 12:
    case 4246:
    case 6378 + 112 * -14:
    case -842 * 7 + -12391 + -25253 * -1:
    case -1 * 929 + 6 * 839 + -1349:
      return ee + x + fn + x + ae + x + x;
    case 12323 + 2129 * -3:
      switch (ye(x, i + (-5606 * -1 + 8345 + -13940))) {
        case -8719 + 917 * 4 + -1 * -5165:
          return ee + x + ae + Y(x, /[svh]\w+-[tblr]{2}/, "tb") + x;
        case -6930 + -19 * -399 + -543:
          return ee + x + ae + Y(x, /[svh]\w+-[tblr]{2}/, "tb-rl") + x;
        case 3 * -2385 + -75 * -21 + -15 * -375:
          return ee + x + ae + Y(x, /[svh]\w+-[tblr]{2}/, "lr") + x;
      }
    case -3508 + 272 * 38:
    case 1097 * 3 + -2569 + 3546:
    case 1 * -5387 + 2977 + 5313:
      return ee + x + ae + x + x;
    case 11105 * 1 + -10643 + -1 * -5703:
      return ee + x + ae + "flex-" + x + x;
    case -4 * 1231 + 5230 + 4881 * 1:
      return ee + x + Y(x, /(\w+).+(:[^]+)/, ee + "box-$1$2" + ae + "flex-$1$2") + x;
    case 3884 + -61 * -27 + -4 * 22:
      return ee + x + ae + "flex-item-" + Y(x, /flex-|-self/g, "") + (kt(x, /flex-|baseline/) ? "" : ae + "grid-row-" + Y(x, /flex-|-self/g, "")) + x;
    case 9986 + 1 * 7341 + -2 * 6326:
      return ee + x + ae + "flex-line-pack" + Y(x, /align-content|flex-|-self/g, "") + x;
    case 5548:
      return ee + x + ae + Y(x, "shrink", "negative") + x;
    case 165 * 3 + -9533 * 1 + 14330:
      return ee + x + ae + Y(x, "basis", "preferred-size") + x;
    case -2 * -4673 + -407 + 2879 * -1:
      return ee + "box-" + Y(x, "-grow", "") + ee + x + ae + Y(x, "grow", "positive") + x;
    case -1 * -990 + 17 * -294 + -1427 * -6:
      return ee + Y(x, /([^-])(transform)/g, "$1" + ee + "$2") + x;
    case -8872 * 1 + -7762 * 1 + 22821:
      return Y(Y(Y(x, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"), x, "") + x;
    case -15 * 676 + 9105 + 1306 * 5:
    case 8790 + -4831 * 1:
      return Y(x, /(image-set\([^]*)/, ee + "$1$`$1");
    case 4968:
      return Y(Y(x, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + ae + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ee + x + x;
    case 4750 * -1 + 6506 + 2 * 1222:
      if (!kt(x, /flex-|baseline/)) return ae + "grid-column-align" + E0(x, i) + x;
      break;
    case 3 * -2153 + -1707 * 1 + 10758:
    case -22 * 421 + 74 * -103 + -21 * -964:
      return ae + Y(x, "template-", "") + x;
    case -1087 * -1 + -2445 + 261 * 22:
    case 431 * -1 + 3575 + -472 * -1:
      return t && t.some(function(e, n) {
        return i = n, kt(e.props, /grid-\w+-end/);
      }) ? ~px(x + (t = t[i].value), "span", 2170 + -8873 * 1 + 6703) ? x : ae + Y(x, "-start", "") + x + ae + "grid-row-span:" + (~px(t, "span", 7636 + 1 * -629 + -143 * 49) ? kt(t, /\d+/) : +kt(t, /\d+/) - +kt(x, /\d+/)) + ";" : ae + Y(x, "-start", "") + x;
    case 3 * 2558 + 1715 + -4493:
    case -632 * 10 + 6525 + -1 * -3923:
      return t && t.some(function(e) {
        return kt(e.props, /grid-\w+-start/);
      }) ? x : ae + Y(Y(x, "-end", "-span"), "span ", "") + x;
    case 10812 + -1 * 6717:
    case -148 * -25 + 516 + 3 * -211:
    case -4842 + 4 * 1759 + 1874 * 1:
    case -9118 * 1 + -1811 + 13461:
      return Y(x, /(.+)-inline(.+)/, ee + "$1$2") + x;
    case 831 * 14 + -7435 + -1 * -3917:
    case -1 * 13532 + 6951 * -1 + 27542:
    case 413 * 9 + 10781 * -1 + -12817 * -1:
    case -1 * -9518 + 5982 + -1993 * 5:
    case 5445:
    case 5701:
    case 17 * -520 + 11 * -732 + 21825:
    case 4677:
    case 10320 + -10 * 489 + 1 * 103:
    case -1 * -10102 + 1 * 8373 + 2 * -6343:
    case -2721 + 4729 * 1 + 1 * 3013:
    case -2 * 2365 + -3251 + 6373 * 2:
      if (ht(x) - (-1867 * -5 + 2570 + -11904) - i > 706 * -3 + 7134 + -5010) switch (ye(x, i + (-13274 + -75 * -177))) {
        case 2739 + -303 * 7 + -1 * 509:
          if (ye(x, i + (7645 + 14 * -491 + 767 * -1)) !== 13699 + 2 * -6827) break;
        case -6070 + -67 * -149 + -3811 * 1:
          return Y(x, /(.+:)(.+)-([^]+)/, "$1" + ee + "$2-$3$1" + fn + (ye(x, i + (11209 + 5603 * -2)) == -2 * 977 + -8388 + -5 * -2090 ? "$3" : "$2-$3")) + x;
        case -6682 + 794 * 10 + -1143:
          return ~px(x, "stretch", -1356 * 5 + -1 * -5557 + -1 * -1223) ? Ms(Y(x, "stretch", "fill-available"), i, t) + x : x;
      }
      break;
    case -439 + 269 * 11 + -8 * -329:
    case 73 * -157 + -9447 * 1 + 26828:
      return Y(x, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, n, o, r, a, s, c) {
        return ae + n + ":" + o + c + (r ? ae + n + "-span:" + (a ? s : +s - +o) + c : "") + x;
      });
    case 3278 + 883 * -6 + -3 * -2323:
      if (ye(x, i + (5 * -1730 + 2 * -5e3 + 18656)) === 2764 + -3 * 881) return Y(x, ":", ":" + ee) + x;
      break;
    case 6444:
      switch (ye(x, ye(x, 6478 + 131 * 33 + 23 * -469) === 9653 + -569 * 5 + -6763 ? 307 * -3 + -4532 + 1 * 5471 : -7589 * 1 + -7303 + 14903)) {
        case 2157 + -6871 * -1 + -8908:
          return Y(x, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ee + (ye(x, 2229 * -2 + -8300 + 12772) === 45 ? "inline-" : "") + "box$3$1" + ee + "$2$3$1" + ae + "$2box$3") + x;
        case -101 * 26 + 3547 * 2 + 168 * -26:
          return Y(x, ":", ":" + ae) + x;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case -2 * -2425 + -6110 + 5187:
    case -11 * -809 + 6074 + -12582:
      return Y(x, "scroll-", "scroll-snap-") + x;
  }
  return x;
}
function Zx(x, i) {
  for (var t = "", e = -517 * -13 + -3 * 327 + 7 * -820; e < x.length; e++) t += i(x[e], e, x, i) || "";
  return t;
}
function Md(x, i, t, e) {
  switch (x.type) {
    case Hd:
      if (x.children.length) break;
    case Zd:
    case $o:
      return x.return = x.return || x.value;
    case Ls:
      return "";
    case Ds:
      return x.return = x.value + "{" + Zx(x.children, e) + "}";
    case gi:
      if (!ht(x.value = x.props.join(","))) return "";
  }
  return ht(t = Zx(x.children, e)) ? x.return = x.value + "{" + t + "}" : "";
}
function Xd(x) {
  var i = Ys(x);
  return function(t, e, n, o) {
    for (var r = "", a = -139 * -25 + 26 * -41 + -2409; a < i; a++) r += x[a](t, e, n, o) || "";
    return r;
  };
}
function _d(x) {
  return function(i) {
    i.root || (i = i.return) && x(i);
  };
}
function Jd(x, i, t, e) {
  if (x.length > -(279 * -6 + -1762 + -7 * -491) && !x.return)
    switch (x.type) {
      case $o:
        x.return = Ms(x.value, x.length, t);
        return;
      case Ds:
        return Zx([Dt(x, { value: Y(x.value, "@", "@" + ee) })], e);
      case gi:
        if (x.length) return Rd(t = x.props, function(n) {
          switch (kt(n, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              B0(Dt(x, { props: [Y(n, /:(read-\w+)/, ":" + fn + "$1")] }));
              var o = {};
              o.props = [n], B0(Dt(x, o)), oo(x, { props: la(t, e) });
              break;
            case "::placeholder":
              B0(Dt(x, { props: [Y(n, /:(plac\w+)/, ":" + ee + "input-$1")] })), B0(Dt(x, { props: [Y(n, /:(plac\w+)/, ":" + fn + "$1")] })), B0(Dt(x, { props: [Y(n, /:(plac\w+)/, ae + "input-$1")] }));
              var r = {};
              r.props = [n], B0(Dt(x, r)), oo(x, { props: la(t, e) });
              break;
          }
          return "";
        });
    }
}
var D = {};
D.animationIterationCount = 1, D.aspectRatio = 1, D.borderImageOutset = 1, D.borderImageSlice = 1, D.borderImageWidth = 1, D.boxFlex = 1, D.boxFlexGroup = 1, D.boxOrdinalGroup = 1, D.columnCount = 1, D.columns = 1, D.flex = 1, D.flexGrow = 1, D.flexPositive = 1, D.flexShrink = 1, D.flexNegative = 1, D.flexOrder = 1, D.gridRow = 1, D.gridRowEnd = 1, D.gridRowSpan = 1, D.gridRowStart = 1, D.gridColumn = 1, D.gridColumnEnd = 1, D.gridColumnSpan = 1, D.gridColumnStart = 1, D.msGridRow = 1, D.msGridRowSpan = 1, D.msGridColumn = 1, D.msGridColumnSpan = 1, D.fontWeight = 1, D.lineHeight = 1, D.opacity = 1, D.order = 1, D.orphans = 1, D.tabSize = 1, D.widows = 1, D.zIndex = 1, D.zoom = 1, D.WebkitLineClamp = 1, D.fillOpacity = 1, D.floodOpacity = 1, D.stopOpacity = 1, D.strokeDasharray = 1, D.strokeDashoffset = 1, D.strokeMiterlimit = 1, D.strokeOpacity = 1, D.strokeWidth = 1;
var Qd = D, z = {}, l0 = typeof process < "u" && void (-23 * -205 + 722 + -5437) !== z && (z.REACT_APP_SC_ATTR || z.SC_ATTR) || "data-styled", Xs = "active", _s = "data-styled-version", Ii = "6.1.11", tr = `/*!sc*/
`, nr = typeof window < "u" && "HTMLElement" in window, Ud = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (5658 + 41 * -138) !== z && void (-9842 + -3273 * -3 + 1 * 23) !== z.REACT_APP_SC_DISABLE_SPEEDY && z.REACT_APP_SC_DISABLE_SPEEDY !== "" ? z.REACT_APP_SC_DISABLE_SPEEDY !== "false" && z.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && z !== void 0 && void (1416 + -2719 * -1 + -1 * 4135) !== z.SC_DISABLE_SPEEDY && z.SC_DISABLE_SPEEDY !== "" ? z.SC_DISABLE_SPEEDY !== "false" && z.SC_DISABLE_SPEEDY : z.NODE_ENV !== "production"), Ca = /invalid hook call/i, ix = /* @__PURE__ */ new Set(), zd = function(x, i) {
  if (z.NODE_ENV !== "production") {
    var t = i ? ' with the id of "'.concat(i, '"') : "", e = "The component ".concat(x).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(r) {
        for (var a = [], s = -3438 * -1 + -6210 + 2773; s < arguments.length; s++) a[s - (3223 + 227 * -1 + -2995)] = arguments[s];
        Ca.test(r) ? (o = !1, ix.delete(e)) : n.apply(void (9601 + -1 * 1244 + -8357), V0([r], a, !1));
      }, At(), o && !ix.has(e) && (console.warn(e), ix.add(e));
    } catch (r) {
      Ca.test(r.message) && ix.delete(e);
    } finally {
      console.error = n;
    }
  }
}, fi = Object.freeze([]), D0 = Object.freeze({});
function qd(x, i, t) {
  return void (1512 + 2 * -3329 + 5146 * 1) === t && (t = D0), x.theme !== t.theme && x.theme || i || t.theme;
}
var so = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), $d = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, eu = /(^-|-$)/g;
function pa(x) {
  return x.replace($d, "-").replace(eu, "");
}
var tu = /(a)(d)/gi, ox = 52, ha = function(x) {
  return String.fromCharCode(x + (x > 692 * -3 + -1 * 4923 + 7024 ? -16580 + -16619 * -1 : 4046 * -2 + 107 * 11 + 7012));
};
function co(x) {
  var i, t = "";
  for (i = Math.abs(x); i > ox; i = i / ox | 9775 + -1 * -5527 + -15302) t = ha(i % ox) + t;
  return (ha(i % ox) + t).replace(tu, "$1-$2");
}
var Ti, Js = 1 * 2446 + -9684 + 12619, t0 = function(x, i) {
  for (var t = i.length; t; ) x = (1750 + 17 * -101) * x ^ i.charCodeAt(--t);
  return x;
}, Qs = function(x) {
  return t0(Js, x);
};
function nu(x) {
  return co(Qs(x) >>> -4248 + 36 * 118);
}
function Us(x) {
  return z.NODE_ENV !== "production" && typeof x == "string" && x || x.displayName || x.name || "Component";
}
function Ei(x) {
  return typeof x == "string" && (z.NODE_ENV === "production" || x.charAt(-1803 * -2 + 5153 + 8759 * -1) === x.charAt(169 * -48 + -5 * -1 + -67 * -121).toLowerCase());
}
var tt = {};
tt.childContextTypes = !0, tt.contextType = !0, tt.contextTypes = !0, tt.defaultProps = !0, tt.displayName = !0, tt.getDefaultProps = !0, tt.getDerivedStateFromError = !0, tt.getDerivedStateFromProps = !0, tt.mixins = !0, tt.propTypes = !0, tt.type = !0;
var Nt = {};
Nt.name = !0, Nt.length = !0, Nt.prototype = !0, Nt.caller = !0, Nt.callee = !0, Nt.arguments = !0, Nt.arity = !0;
var $t = {};
$t.$$typeof = !0, $t.compare = !0, $t.defaultProps = !0, $t.displayName = !0, $t.propTypes = !0, $t.type = !0;
var G0 = {};
G0.$$typeof = !0, G0.render = !0, G0.defaultProps = !0, G0.displayName = !0, G0.propTypes = !0;
var zs = typeof Symbol == "function" && Symbol.for, qs = zs ? Symbol.for("react.memo") : 89863 + -92139 * 1 + -8913 * -7, xu = zs ? Symbol.for("react.forward_ref") : -78627 * 1 + -81288 + -61 * -3607, iu = tt, ou = Nt, $s = $t, ru = ((Ti = {})[xu] = G0, Ti[qs] = $s, Ti);
function ma(x) {
  return ("type" in (i = x) && i.type.$$typeof) === qs ? $s : "$$typeof" in x ? ru[x.$$typeof] : iu;
  var i;
}
var au = Object.defineProperty, su = Object.getOwnPropertyNames, ba = Object.getOwnPropertySymbols, cu = Object.getOwnPropertyDescriptor, gu = Object.getPrototypeOf, Aa = Object.prototype;
function ec(x, i, t) {
  if (typeof i != "string") {
    if (Aa) {
      var e = gu(i);
      e && e !== Aa && ec(x, e, t);
    }
    var n = su(i);
    ba && (n = n.concat(ba(i)));
    for (var o = ma(x), r = ma(i), a = 1532 + 5545 * -1 + 4013; a < n.length; ++a) {
      var s = n[a];
      if (!(s in ou || t && t[s] || r && s in r || o && s in o)) {
        var c = cu(i, s);
        try {
          au(x, s, c);
        } catch {
        }
      }
    }
  }
  return x;
}
function N0(x) {
  return typeof x == "function";
}
function xr(x) {
  return typeof x == "object" && "styledComponentId" in x;
}
function x0(x, i) {
  return x && i ? "".concat(x, " ").concat(i) : x || i || "";
}
function ya(x, i) {
  if (547 * 2 + 2201 + -3295 === x.length) return "";
  for (var t = x[-2181 + 1 * -248 + -1 * -2429], e = 6810 + 11 * -619; e < x.length; e++) t += x[e];
  return t;
}
function F0(x) {
  return x !== null && typeof x == "object" && x.constructor.name === Object.name && !("props" in x && x.$$typeof);
}
function go(x, i, t) {
  if (void (-738 * -1 + -1 * 4643 + 3905) === t && (t = !1), !t && !F0(x) && !Array.isArray(x)) return i;
  if (Array.isArray(i))
    for (var e = 9334 + 45 * 157 + -1 * 16399; e < i.length; e++) x[e] = go(x[e], i[e]);
  else if (F0(i))
    for (var e in i) x[e] = go(x[e], i[e]);
  return x;
}
function ir(x, i) {
  var t = {};
  t.value = i, Object.defineProperty(x, "toString", t);
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
var du = z.NODE_ENV !== "production" ? me : {};
function uu() {
  for (var x = [], i = -283 * -1 + 109 * 27 + -3226; i < arguments.length; i++) x[i] = arguments[i];
  for (var t = x[2637 + -1 * 2637], e = [], n = -265 * 6 + 693 + 898, o = x.length; n < o; n += -8898 * 1 + 1213 + -126 * -61) e.push(x[n]);
  return e.forEach(function(r) {
    t = t.replace(/%[a-z]/, r);
  }), t;
}
function _0(x) {
  for (var i = [], t = 47 * -164 + -9365 + 17074; t < arguments.length; t++) i[t - (4024 + -1 * -6836 + -10859)] = arguments[t];
  return z.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(x, " for more information.").concat(i.length > -7324 + 71 * -83 + 13217 * 1 ? " Args: ".concat(i.join(", ")) : "")) : new Error(uu.apply(void (-7677 + -997 * -10 + -2293), V0([du[x]], i, !1)).trim());
}
var lu = function() {
  function x(i) {
    this.groupSizes = new Uint32Array(512), this.length = -1101 + 8633 * -1 + 10246 * 1, this.tag = i;
  }
  return x.prototype.indexOfGroup = function(i) {
    for (var t = -14496 + -2 * -7248, e = -4611 + -4 * 648 + 7203; e < i; e++) t += this.groupSizes[e];
    return t;
  }, x.prototype.insertRules = function(i, t) {
    if (i >= this.groupSizes.length) {
      for (var e = this.groupSizes, n = e.length, o = n; i >= o; ) if ((o <<= -207 * 14 + 8974 + 25 * -243) < 5955 + 7191 * 1 + 6 * -2191) throw _0(1012 + -7 * 1389 + -2909 * -3, "".concat(i));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(e), this.length = o;
      for (var r = n; r < o; r++) this.groupSizes[r] = -5 * 1123 + -19 * -71 + 4266;
    }
    for (var a = this.indexOfGroup(i + (-111 * 66 + 3673 + 3654)), s = (r = -3561 + -3 * -1187, t.length); r < s; r++) this.tag.insertRule(a, t[r]) && (this.groupSizes[i]++, a++);
  }, x.prototype.clearGroup = function(i) {
    if (i < this.length) {
      var t = this.groupSizes[i], e = this.indexOfGroup(i), n = e + t;
      this.groupSizes[i] = 5341 + -20 * 337 + 1399 * 1;
      for (var o = e; o < n; o++) this.tag.deleteRule(e);
    }
  }, x.prototype.getGroup = function(i) {
    var t = "";
    if (i >= this.length || 307 + -11 * 131 + 1134 === this.groupSizes[i]) return t;
    for (var e = this.groupSizes[i], n = this.indexOfGroup(i), o = n + e, r = n; r < o; r++) t += "".concat(this.tag.getRule(r)).concat(tr);
    return t;
  }, x;
}(), Iu = -5344 + -5345 * -1 << 30, bx = /* @__PURE__ */ new Map(), Hx = /* @__PURE__ */ new Map(), Ax = 1, rx = function(x) {
  if (bx.has(x)) return bx.get(x);
  for (; Hx.has(Ax); ) Ax++;
  var i = Ax++;
  if (z.NODE_ENV !== "production" && ((3 * 2119 + -1 * 3788 + -2569 | i) < -989 + -3983 * -1 + 998 * -3 || i > Iu)) throw _0(-6340 * 1 + -5455 * 1 + -127 * -93, "".concat(i));
  return bx.set(x, i), Hx.set(i, x), i;
}, fu = function(x, i) {
  Ax = i + (-1 * -5818 + -6615 + 798), bx.set(x, i), Hx.set(i, x);
}, Cu = "style[".concat(l0, "][").concat(_s, '="').concat(Ii, '"]'), pu = new RegExp("^".concat(l0, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), hu = function(x, i, t) {
  for (var e, n = t.split(","), o = 181 * 7 + 6257 + -4 * 1881, r = n.length; o < r; o++) (e = n[o]) && x.registerName(i, e);
}, mu = function(x, i) {
  for (var t, e = ((t = i.textContent) !== null && void (-4017 + -1 * 1439 + 2 * 2728) !== t ? t : "").split(tr), n = [], o = -4077 + 1 * 4077, r = e.length; o < r; o++) {
    var a = e[o].trim();
    if (a) {
      var s = a.match(pu);
      if (s) {
        var c = 0 | parseInt(s[1], 10), d = s[4934 + 758 * -7 + 374];
        9985 + 5 * -1997 !== c && (fu(d, c), hu(x, d, s[6555 * 1 + 1 * -5527 + 205 * -5]), x.getTag().insertRules(c, n)), n.length = 1 * -8161 + -1525 * -2 + 5111;
      } else n.push(a);
    }
  }
};
function bu() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var tc = function(x) {
  var i = document.head, t = x || i, e = document.createElement("style"), n = function(a) {
    var s = Array.from(a.querySelectorAll("style[".concat(l0, "]")));
    return s[s.length - (5413 + 786 * -4 + 28 * -81)];
  }(t), o = void (-1113 * 3 + -6221 + 8 * 1195) !== n ? n.nextSibling : null;
  e.setAttribute(l0, Xs), e.setAttribute(_s, Ii);
  var r = bu();
  return r && e.setAttribute("nonce", r), t.insertBefore(e, o), e;
}, Au = function() {
  function x(i) {
    this.element = tc(i), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, n = 0, o = e.length; n < o; n++) {
        var r = e[n];
        if (r.ownerNode === t) return r;
      }
      throw _0(-8992 + 626 * -13 + 17147);
    }(this.element), this.length = -449 * -21 + 1 * -653 + -8776;
  }
  return x.prototype.insertRule = function(i, t) {
    try {
      return this.sheet.insertRule(t, i), this.length++, !0;
    } catch {
      return !1;
    }
  }, x.prototype.deleteRule = function(i) {
    this.sheet.deleteRule(i), this.length--;
  }, x.prototype.getRule = function(i) {
    var t = this.sheet.cssRules[i];
    return t && t.cssText ? t.cssText : "";
  }, x;
}(), yu = function() {
  function x(i) {
    this.element = tc(i), this.nodes = this.element.childNodes, this.length = 3104 + -114 * 46 + 2140;
  }
  return x.prototype.insertRule = function(i, t) {
    if (i <= this.length && i >= -8781 + 13 * 661 + 1 * 188) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[i] || null), this.length++, !0;
    }
    return !1;
  }, x.prototype.deleteRule = function(i) {
    this.element.removeChild(this.nodes[i]), this.length--;
  }, x.prototype.getRule = function(i) {
    return i < this.length ? this.nodes[i].textContent : "";
  }, x;
}(), Wu = function() {
  function x(i) {
    this.rules = [], this.length = 0;
  }
  return x.prototype.insertRule = function(i, t) {
    return i <= this.length && (this.rules.splice(i, -44 * 214 + 64 * -64 + 13512, t), this.length++, !0);
  }, x.prototype.deleteRule = function(i) {
    this.rules.splice(i, -18157 + -18158 * -1), this.length--;
  }, x.prototype.getRule = function(i) {
    return i < this.length ? this.rules[i] : "";
  }, x;
}(), Wa = nr, vu = { isServer: !nr, useCSSOMInjection: !Ud }, nc = function() {
  function x(i, t, e) {
    void (-31 * -22 + -8012 + 1 * 7330) === i && (i = D0), void (1 * 6913 + -6286 + -627) === t && (t = {});
    var n = this;
    this.options = Ye(Ye({}, vu), i), this.gs = t, this.names = new Map(e), this.server = !!i.isServer, !this.server && nr && Wa && (Wa = !1, function(o) {
      for (var r = document.querySelectorAll(Cu), a = 4914 + 1 * 563 + -5477, s = r.length; a < s; a++) {
        var c = r[a];
        c && c.getAttribute(l0) !== Xs && (mu(o, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this)), ir(this, function() {
      return function(o) {
        for (var r = o.getTag(), a = r.length, s = "", c = function(g) {
          var f = function(l) {
            return Hx.get(l);
          }(g);
          if (void (-2 * -1663 + -39 * -175 + -10151) === f) return "continue";
          var u = o.names.get(f), p = r.getGroup(g);
          if (void (-8632 + 166 * 52) === u || -1 * -8039 + -37 + -8002 === p.length) return "continue";
          var b = "".concat(l0, ".g").concat(g, '[id="').concat(f, '"]'), A = "";
          void (9960 + -311 * 23 + -7 * 401) !== u && u.forEach(function(l) {
            l.length > 3037 + 3037 * -1 && (A += "".concat(l, ","));
          }), s += "".concat(p).concat(b, '{content:"').concat(A, '"}').concat(tr);
        }, d = 1 * -7063 + 2 * 2921 + 1221; d < a; d++) c(d);
        return s;
      }(n);
    });
  }
  return x.registerId = function(i) {
    return rx(i);
  }, x.prototype.reconstructWithOptions = function(i, t) {
    return void (373 * 21 + 7777 + -15610) === t && (t = !0), new x(Ye(Ye({}, this.options), i), this.gs, t && this.names || void (-4603 + 210 * 23 + 1 * -227));
  }, x.prototype.allocateGSInstance = function(i) {
    return this.gs[i] = (this.gs[i] || 1342 + 22 * -61) + (-6645 + -6646 * -1);
  }, x.prototype.getTag = function() {
    return this.tag || (this.tag = (i = function(t) {
      var e = t.useCSSOMInjection, n = t.target;
      return t.isServer ? new Wu(n) : e ? new Au(n) : new yu(n);
    }(this.options), new lu(i)));
    var i;
  }, x.prototype.hasNameForId = function(i, t) {
    return this.names.has(i) && this.names.get(i).has(t);
  }, x.prototype.registerName = function(i, t) {
    if (rx(i), this.names.has(i)) this.names.get(i).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(i, e);
    }
  }, x.prototype.insertRules = function(i, t, e) {
    this.registerName(i, t), this.getTag().insertRules(rx(i), e);
  }, x.prototype.clearNames = function(i) {
    this.names.has(i) && this.names.get(i).clear();
  }, x.prototype.clearRules = function(i) {
    this.getTag().clearGroup(rx(i)), this.clearNames(i);
  }, x.prototype.clearTag = function() {
    this.tag = void (-39 * -219 + -1529 + -7012);
  }, x;
}(), Su = /&/g, wu = /^\s*\/\/.*$/gm;
function xc(x, i) {
  return x.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(i, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(i, " ")), t.props = t.props.map(function(e) {
      return "".concat(i, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = xc(t.children, i)), t;
  });
}
function ic(x) {
  var i, t, e, n = x === void 0 ? D0 : x, o = n.options, r = void (-215 * -8 + 245 * 11 + -4415) === o ? D0 : o, a = n.plugins, s = void (-83 * 50 + -8193 + -1 * -12343) === a ? fi : a, c = function(f, u, p) {
    return p.startsWith(t) && p.endsWith(t) && p.replaceAll(t, "").length > 4728 + -17 * 353 + -19 * -67 ? ".".concat(i) : f;
  }, d = s.slice();
  d.push(function(f) {
    f.type === gi && f.value.includes("&") && (f.props[-8620 + -6 * -1042 + 64 * 37] = f.props[2504 * -2 + 1 * -1719 + 7 * 961].replace(Su, t).replace(e, c));
  }), r.prefix && d.push(Jd), d.push(Md);
  var g = function(f, u, p, b) {
    void (5525 + -7212 * -1 + -12737) === u && (u = ""), void (5 * -111 + 1 * 8097 + -2514 * 3) === p && (p = ""), b === void 0 && (b = "&"), i = b, t = u, e = new RegExp("\\".concat(t, "\\b"), "g");
    var A = f.replace(wu, ""), l = Yd(p || u ? "".concat(p, " ").concat(u, " { ").concat(A, " }") : A);
    r.namespace && (l = xc(l, r.namespace));
    var v = [];
    return Zx(l, Xd(d.concat(_d(function(Z) {
      return v.push(Z);
    })))), v;
  };
  return g.hash = s.length ? s.reduce(function(f, u) {
    return u.name || _0(1974 * -1 + -4093 + 2 * 3041), t0(f, u.name);
  }, Js).toString() : "", g;
}
var Bu = new nc(), uo = ic(), or = u0.createContext({ shouldForwardProp: void (212 * -44 + -1196 + 10524), styleSheet: Bu, stylis: uo });
or.Consumer;
var ku = u0.createContext(void (-102 * 62 + 714 + 5610));
function lo() {
  return f0(or);
}
function Gu(x) {
  var i = Qe(x.stylisPlugins), t = i[0], e = i[1 * 5347 + -9909 + 13 * 351], n = lo().styleSheet, o = Ue(function() {
    var d = n, g = {};
    return g.useCSSOMInjection = !1, x.sheet ? d = x.sheet : x.target && (d = d.reconstructWithOptions({ target: x.target }, !1)), x.disableCSSOMInjection && (d = d.reconstructWithOptions(g)), d;
  }, [x.disableCSSOMInjection, x.sheet, x.target, n]), r = Ue(function() {
    var d = {};
    d.namespace = x.namespace, d.prefix = x.enableVendorPrefixes;
    var g = {};
    return g.options = d, g.plugins = t, ic(g);
  }, [x.enableVendorPrefixes, x.namespace, t]);
  fe(function() {
    Od(t, x.stylisPlugins) || e(x.stylisPlugins);
  }, [x.stylisPlugins]);
  var a = Ue(function() {
    var d = {};
    return d.shouldForwardProp = x.shouldForwardProp, d.styleSheet = o, d.stylis = r, d;
  }, [x.shouldForwardProp, o, r]), s = {};
  s.value = a;
  var c = {};
  return c.value = r, u0.createElement(or.Provider, s, u0.createElement(ku.Provider, c, x.children));
}
var va = function() {
  function x(i, t) {
    var e = this;
    this.inject = function(n, o) {
      void (-35 * 119 + 1 * -4352 + 3 * 2839) === o && (o = uo);
      var r = e.name + o.hash;
      n.hasNameForId(e.id, r) || n.insertRules(e.id, r, o(e.rules, r, "@keyframes"));
    }, this.name = i, this.id = "sc-keyframes-".concat(i), this.rules = t, ir(this, function() {
      throw _0(-15 * -436 + 1 * 7713 + -14241, String(e.name));
    });
  }
  return x.prototype.getName = function(i) {
    return i === void 0 && (i = uo), this.name + i.hash;
  }, x;
}(), Ou = function(x) {
  return x >= "A" && x <= "Z";
};
function Sa(x) {
  for (var i = "", t = 5038 + 2519 * -2; t < x.length; t++) {
    var e = x[t];
    if (3197 + -63 * 89 + 2411 === t && e === "-" && x[-7 * -1159 + -5969 + -536 * 4] === "-") return x;
    Ou(e) ? i += "-" + e.toLowerCase() : i += e;
  }
  return i.startsWith("ms-") ? "-" + i : i;
}
var oc = function(x) {
  return x == null || x === !1 || x === "";
}, rc = function(x) {
  var i, t, e = [];
  for (var n in x) {
    var o = x[n];
    x.hasOwnProperty(n) && !oc(o) && (Array.isArray(o) && o.isCss || N0(o) ? e.push("".concat(Sa(n), ":"), o, ";") : F0(o) ? e.push.apply(e, V0(V0(["".concat(n, " {")], rc(o), !1), ["}"], !1)) : e.push("".concat(Sa(n), ": ").concat((i = n, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || -1 * 691 + 1 * 3327 + 1 * -2636 === t || i in Qd || i.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function g0(x, i, t, e) {
  if (oc(x)) return [];
  if (xr(x)) return [".".concat(x.styledComponentId)];
  if (N0(x)) {
    if (!N0(o = x) || o.prototype && o.prototype.isReactComponent || !i) return [x];
    var n = x(i);
    return z.NODE_ENV === "production" || typeof n != "object" || Array.isArray(n) || n instanceof va || F0(n) || n === null || console.error("".concat(Us(x), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), g0(n, i, t, e);
  }
  var o;
  return x instanceof va ? t ? (x.inject(t, e), [x.getName(e)]) : [x] : F0(x) ? rc(x) : Array.isArray(x) ? Array.prototype.concat.apply(fi, x.map(function(r) {
    return g0(r, i, t, e);
  })) : [x.toString()];
}
function Zu(x) {
  for (var i = -3 * 2713 + 8594 + -455; i < x.length; i += -151 * -1 + 1 * 4749 + 1633 * -3) {
    var t = x[i];
    if (N0(t) && !xr(t)) return !1;
  }
  return !0;
}
var Hu = Qs(Ii), Ku = function() {
  function x(i, t, e) {
    this.rules = i, this.staticRulesId = "", this.isStatic = z.NODE_ENV === "production" && (void (-17 * 11 + -3007 + 3194) === e || e.isStatic) && Zu(i), this.componentId = t, this.baseHash = t0(Hu, t), this.baseStyle = e, nc.registerId(t);
  }
  return x.prototype.generateAndInjectStyles = function(i, t, e) {
    var n = this.baseStyle ? this.baseStyle.generateAndInjectStyles(i, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) n = x0(n, this.staticRulesId);
      else {
        var o = ya(g0(this.rules, i, t, e)), r = co(t0(this.baseHash, o) >>> -8653 + 2 * -1912 + 12477);
        if (!t.hasNameForId(this.componentId, r)) {
          var a = e(o, ".".concat(r), void 0, this.componentId);
          t.insertRules(this.componentId, r, a);
        }
        n = x0(n, r), this.staticRulesId = r;
      }
    else {
      for (var s = t0(this.baseHash, e.hash), c = "", d = 3247 + 1 * -6534 + -1 * -3287; d < this.rules.length; d++) {
        var g = this.rules[d];
        if (typeof g == "string") c += g, z.NODE_ENV !== "production" && (s = t0(s, g));
        else if (g) {
          var f = ya(g0(g, i, t, e));
          s = t0(s, f + d), c += f;
        }
      }
      if (c) {
        var u = co(s >>> 0);
        t.hasNameForId(this.componentId, u) || t.insertRules(this.componentId, u, e(c, ".".concat(u), void 0, this.componentId)), n = x0(n, u);
      }
    }
    return n;
  }, x;
}(), ac = u0.createContext(void (-358 * 23 + 1 * 2823 + 5411));
ac.Consumer;
var Li = {}, wa = /* @__PURE__ */ new Set();
function Ru(x, i, t) {
  var e = xr(x), n = x, o = !Ei(x), r = i.attrs, a = r === void 0 ? fi : r, s = i.componentId, c = void (1 * -8419 + 1 * 6664 + 1755) === s ? function(X, J) {
    var K = typeof X != "string" ? "sc" : pa(X);
    Li[K] = (Li[K] || 5524 * -1 + 566 * 10 + 8 * -17) + (-8514 + -21 * 329 + 15424);
    var re = "".concat(K, "-").concat(nu(Ii + K + Li[K]));
    return J ? "".concat(J, "-").concat(re) : re;
  }(i.displayName, i.parentComponentId) : s, d = i.displayName, g = d === void 0 ? function(X) {
    return Ei(X) ? "styled.".concat(X) : "Styled(".concat(Us(X), ")");
  }(x) : d, f = i.displayName && i.componentId ? "".concat(pa(i.displayName), "-").concat(i.componentId) : i.componentId || c, u = e && n.attrs ? n.attrs.concat(a).filter(Boolean) : a, p = i.shouldForwardProp;
  if (e && n.shouldForwardProp) {
    var b = n.shouldForwardProp;
    if (i.shouldForwardProp) {
      var A = i.shouldForwardProp;
      p = function(X, J) {
        return b(X, J) && A(X, J);
      };
    } else p = b;
  }
  var l = new Ku(t, f, e ? n.componentStyle : void (8359 + -47 * 41 + -6432));
  function v(X, J) {
    return function(K, re, Q) {
      var te = K.attrs, Le = K.componentStyle, He = K.defaultProps, Pt = K.foldedComponentIds, Xt = K.styledComponentId, Ge = K.target, at = u0.useContext(ac), Mn = lo(), p0 = K.shouldForwardProp || Mn.shouldForwardProp;
      z.NODE_ENV !== "production" && Ox(Xt);
      var U0 = qd(re, at, He) || D0, qe = function(m0, je, It) {
        var $e = {};
        $e.className = void (-2470 + -3019 * -2 + 1784 * -2), $e.theme = It;
        for (var _t, ft = Ye(Ye({}, je), $e), st = -12827 + 1 * 12827; st < m0.length; st += 1) {
          var Jt = N0(_t = m0[st]) ? _t(ft) : _t;
          for (var ct in Jt) ft[ct] = ct === "className" ? x0(ft[ct], Jt[ct]) : ct === "style" ? Ye(Ye({}, ft[ct]), Jt[ct]) : Jt[ct];
        }
        return je.className && (ft.className = x0(ft.className, je.className)), ft;
      }(te, re, U0), Wt = qe.as || Ge, Vt = {};
      for (var Ke in qe) void (-1103 * -3 + 3001 * 3 + -456 * 27) === qe[Ke] || Ke[-18 * 325 + 6461 * 1 + -1 * 611] === "$" || Ke === "as" || Ke === "theme" && qe.theme === U0 || (Ke === "forwardedAs" ? Vt.as = qe.forwardedAs : p0 && !p0(Ke, Wt) || (Vt[Ke] = qe[Ke], p0 || z.NODE_ENV !== "development" || jg(Ke) || wa.has(Ke) || !so.has(Wt) || (wa.add(Ke), console.warn('styled-components: it looks like an unknown prop "'.concat(Ke, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var z0 = function(m0, je) {
        var It = lo(), $e = m0.generateAndInjectStyles(je, It.styleSheet, It.stylis);
        return z.NODE_ENV !== "production" && Ox($e), $e;
      }(Le, qe);
      z.NODE_ENV !== "production" && K.warnTooManyClasses && K.warnTooManyClasses(z0);
      var h0 = x0(Pt, Xt);
      return z0 && (h0 += " " + z0), qe.className && (h0 += " " + qe.className), Vt[Ei(Wt) && !so.has(Wt) ? "class" : "className"] = h0, Vt.ref = Q, Ee(Wt, Vt);
    }(Z, X, J);
  }
  v.displayName = g;
  var Z = u0.forwardRef(v), M = {};
  return M.attrs = !0, M.componentStyle = !0, M.displayName = !0, M.foldedComponentIds = !0, M.shouldForwardProp = !0, M.styledComponentId = !0, M.target = !0, Z.attrs = u, Z.componentStyle = l, Z.displayName = g, Z.shouldForwardProp = p, Z.foldedComponentIds = e ? x0(n.foldedComponentIds, n.styledComponentId) : "", Z.styledComponentId = f, Z.target = e ? n.target : x, Object.defineProperty(Z, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(X) {
    this._foldedDefaultProps = e ? function(J) {
      for (var K = [], re = -3501 * -1 + -4405 + 5 * 181; re < arguments.length; re++) K[re - (1645 + -3 * 2777 + 6687)] = arguments[re];
      for (var Q = -304 * -1 + -7679 + 7375, te = K; Q < te.length; Q++) go(J, te[Q], !0);
      return J;
    }({}, n.defaultProps, X) : X;
  } }), z.NODE_ENV !== "production" && (zd(g, f), Z.warnTooManyClasses = /* @__PURE__ */ function(X, J) {
    var K = {}, re = !1;
    return function(Q) {
      if (!re && (K[Q] = !0, Object.keys(K).length >= 1 * -4644 + -5252 * -1 + -408)) {
        var te = J ? ' with the id of "'.concat(J, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(X).concat(te, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), re = !0, K = {};
      }
    };
  }(g, f)), ir(Z, function() {
    return ".".concat(Z.styledComponentId);
  }), o && ec(Z, x, M), Z;
}
function Ba(x, i) {
  for (var t = [x[-5994 + 29 * 303 + -2793]], e = 0, n = i.length; e < n; e += 1) t.push(i[e], x[e + (-5946 + -1 * -5947)]);
  return t;
}
var ka = function(x) {
  var i = {};
  return i.isCss = !0, Object.assign(x, i);
};
function Pu(x) {
  for (var i = [], t = -3021 + -1 * -3022; t < arguments.length; t++) i[t - (-6673 * -1 + -1465 + 5207 * -1)] = arguments[t];
  if (N0(x) || F0(x)) return ka(g0(Ba(fi, V0([x], i, !0))));
  var e = x;
  return 1319 * 1 + -2 * 1631 + 1943 === i.length && 9760 + 7309 * 1 + -17068 === e.length && typeof e[-2050 + 1 * 3521 + -1471] == "string" ? g0(e) : ka(g0(Ba(e, i)));
}
function Io(x, i, t) {
  if (void (-1 * -1893 + -921 * -3 + -16 * 291) === t && (t = D0), !i) throw _0(18 * 504 + 717 * -10 + -1901, i);
  var e = function(n) {
    for (var o = [], r = -1845 * 5 + 4 * -62 + 9474; r < arguments.length; r++) o[r - (4 * 2083 + -22 * 181 + -4349 * 1)] = arguments[r];
    return x(i, t, Pu.apply(void (949 + 1 * -949), V0([n], o, !1)));
  };
  return e.attrs = function(n) {
    return Io(x, i, Ye(Ye({}, t), { attrs: Array.prototype.concat(t.attrs, n).filter(Boolean) }));
  }, e.withConfig = function(n) {
    return Io(x, i, Ye(Ye({}, t), n));
  }, e;
}
var sc = function(x) {
  return Io(Ru, x);
}, Nn = sc;
so.forEach(function(x) {
  Nn[x] = sc(x);
});
z.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var ax = "__sc-".concat(l0, "__");
z.NODE_ENV !== "production" && z.NODE_ENV !== "test" && typeof window < "u" && (window[ax] || (window[ax] = -1 * -5168 + 3833 * 1 + -9001), 2379 * 3 + -5595 + -1541 === window[ax] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[ax] += -5647 + 4121 * -2 + 13890);
const Vu = Nn.div`
  position: relative;
`, Tu = Nn.video`
  transform: ${(x) => x.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(x) => x.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class oe extends Error {
  constructor(t, e) {
    super(t);
    E(this, "cause");
    this.name = "AutoCaptureError", this.cause = e;
  }
  static logError(t) {
  }
  static fromCameraError(t) {
    if (this.logError(t), t instanceof oe) return t;
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
    return new oe(e, t);
  }
  static fromError(t) {
    if (this.logError(t), t instanceof oe) return t;
    const e = "An unexpected error has occurred";
    return new oe(e);
  }
}
const yx = {};
yx.CONTINUE_DETECTION = "continue-detection", yx.SWITCH_CAMERA = "switch-camera", yx.TOGGLE_MIRROR = "toggle-mirror";
const Di = yx, fo = {};
fo.FIRST_FRAME = "first-frame", fo.FIRST_VALID_FRAME = "first-valid-frame";
const Ni = fo, cc = {};
cc.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const Ga = cc;
var gc = ((x) => (x.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", x.CONTROL = "document-auto-capture:control", x.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", x.DOCUMENT_DETECTION = "document-auto-capture:document-detection", x.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", x.STATE_CHANGED = "document-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", x))(gc || {}), Ht = ((x) => (x.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", x.CONTROL = "face-auto-capture:control", x.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", x.FACE_DETECTION = "face-auto-capture:face-detection", x.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", x.STATE_CHANGED = "face-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", x))(Ht || {}), Eu = ((x) => (x.ANIMATION_END = "magnifeye-auto-capture:animation-end", x.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", x))(Eu || {}), Lu = ((x) => (x.STATUS_CHANGED = "smile-auto-capture:status-changed", x))(Lu || {}), Du = ((x) => (x.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", x.CONTROL = "palm-capture:control", x.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", x.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", x.STATE_CHANGED = "palm-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", x))(Du || {}), Nu = ((x) => (x.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", x))(Nu || {});
const dc = {};
dc.EYE_NOT_PRESENT = "eye_not_present";
const Oa = dc, Pe = {};
Pe.CANDIDATE_SELECTION = "candidate_selection", Pe.FACE_TOO_CLOSE = "face_too_close", Pe.FACE_TOO_FAR = "face_too_far", Pe.FACE_CENTERING = "face_centering", Pe.FACE_NOT_PRESENT = "face_not_present", Pe.SHARPNESS_TOO_LOW = "sharpness_too_low", Pe.BRIGHTNESS_TOO_LOW = "brightness_too_low", Pe.BRIGHTNESS_TOO_HIGH = "brightness_too_high", Pe.DEVICE_PITCHED = "device_pitched", Pe.LEFT_EYE_NOT_PRESENT = "left_" + Oa.EYE_NOT_PRESENT, Pe.RIGHT_EYE_NOT_PRESENT = "right_" + Oa.EYE_NOT_PRESENT, Pe.MOUTH_NOT_PRESENT = "mouth_not_present", Pe.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", Pe.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const Ae = Pe, Fe = {};
Fe.isPresent = Ae.FACE_NOT_PRESENT, Fe.isNotPitched = Ae.DEVICE_PITCHED, Fe.isNotSmall = Ae.FACE_TOO_FAR, Fe.isNotLarge = Ae.FACE_TOO_CLOSE, Fe.isNotOutOfBounds = Ae.FACE_CENTERING, Fe.isNotDim = Ae.BRIGHTNESS_TOO_LOW, Fe.isNotBright = Ae.BRIGHTNESS_TOO_HIGH, Fe.isSharp = Ae.SHARPNESS_TOO_LOW, Fe.isLeftEyePresent = Ae.LEFT_EYE_NOT_PRESENT, Fe.isRightEyePresent = Ae.RIGHT_EYE_NOT_PRESENT, Fe.isMouthPresent = Ae.MOUTH_NOT_PRESENT, Fe.isMouthScoreNotTooHigh = Ae.MOUTH_SCORE_TOO_HIGH, Fe.isMouthScoreNotTooLow = Ae.MOUTH_SCORE_TOO_LOW;
const Fu = Fe, Co = {};
Co.FRONT = "user", Co.REAR = "environment";
const rr = Co, po = {};
po.AUTO_CAPTURE = "AUTO_CAPTURE", po.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const uc = po, cn = {};
cn.LOADING = "LOADING", cn.ERROR = "ERROR", cn.WAITING = "WAITING", cn.RUNNING = "RUNNING";
const Je = cn;
({ ...Ae });
var Yu = ((x) => (x.CLOSEUP = "CLOSEUP", x.DISTANT = "DISTANT", x.MIDDLE = "MIDDLE", x))(Yu || {});
({ ...Ae });
({ ...Ae });
const Ci = Dn(void 0);
Ci.displayName = "AppStateContext";
function Fn() {
  const x = f0(Ci);
  if (x === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return x;
}
const ju = Ci.Provider;
class lc extends xt {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var t;
    const i = new oe("An unknown error has occurred");
    (t = this.context) == null || t.handleError(i);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var i;
    return ((i = this.context) == null ? void 0 : i.appState) === Je.ERROR ? null : this.props.children;
  }
}
E(lc, "contextType", Ci);
const Mu = Nn.canvas`
  transform: ${(x) => x.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, Xu = Nn.div`
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
function _u() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const Ju = Bs(
  ({ detectionDetails: x, isImageMirror: i }, t) => _u() ? (console.log(x), /* @__PURE__ */ O(ot, { children: [
    /* @__PURE__ */ O(Mu, { ref: t, $isImageMirror: i }),
    /* @__PURE__ */ O(Xu, { children: Object.entries(x).map(([e, n]) => /* @__PURE__ */ O("div", { children: [
      e,
      ": ",
      /* @__PURE__ */ O("strong", { children: n })
    ] }, e)) })
  ] })) : null
), Kx = Dn(void 0);
Kx.displayName = "AnalyticsContext";
function Qu() {
  const x = f0(Kx);
  if (x === void 0)
    throw new Error(`${Kx.displayName} must be used within a AnalyticsProvider`);
  return x;
}
(function(x, i) {
  function t(s, c, d, g, f) {
    return Se(f - 387, d);
  }
  function e(s, c, d, g, f) {
    return Se(g - -950, c);
  }
  function n(s, c, d, g, f) {
    return Se(d - 999, s);
  }
  function o(s, c, d, g, f) {
    return Se(c - 605, g);
  }
  const r = x();
  function a(s, c, d, g, f) {
    return Se(s - -769, g);
  }
  for (; ; )
    try {
      if (-parseInt(o(809, 796, 786, "v^@%", 803)) / 1 + -parseInt(a(-579, -571, -589, "C&oK", -591)) / 2 + -parseInt(o(827, 812, 817, "ryuj", 827)) / 3 * (-parseInt(n("tOJN", 1190, 1196, 1198, 1210)) / 4) + -parseInt(t(593, 594, "K&Tz", 587, 588)) / 5 * (parseInt(a(-577, -569, -594, "J[V]", -571)) / 6) + -parseInt(e(-757, "T@)h", -759, -766, -776)) / 7 + parseInt(t(592, 570, "JrI]", 567, 576)) / 8 + parseInt(n("sf*k", 1196, 1182, 1196, 1186)) / 9 === i) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Vx, 245897 * -3 + -1223910 + 1 * 2651683);
function Uu(x, i, t, e, n) {
  return Se(x - -239, i);
}
function ho(x, i, t, e, n) {
  return Se(n - -794, i);
}
function Se(x, i) {
  const t = Vx();
  return Se = function(e, n) {
    e = e - (1879 + 567 * -3);
    let o = t[e];
    if (Se.DneWIE === void 0) {
      var r = function(g) {
        const f = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = f.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          p += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, f) {
        let u = [], p = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + f.charCodeAt(l % f.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (let v = 0; v < g.length; v++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      Se.QLmbcU = d, x = arguments, Se.DneWIE = !0;
    }
    const a = t[0], s = e + a, c = x[s];
    return c ? o = c : (Se.PqhfwW === void 0 && (Se.PqhfwW = !0), o = Se.QLmbcU(o, n), x[s] = o), o;
  }, Se(x, i);
}
const Rx = Dn(void (1657 * -3 + -509 * 8 + 1 * 9043));
function Px(x, i, t, e, n) {
  return Se(i - 518, x);
}
Rx[ho(-603, "]gX7", -588, -613, -601) + Ic("%ma!", 436) + "e"] = ho(-583, "HWrS", -586, -591, -596) + Px("HWrS", 712) + Px("E19$", 697);
function Ic(x, i, t, e, n) {
  return Se(i - 254, x);
}
function Vx() {
  const x = ["k8o0eSkleG", "WQvyCSkeBmouAHHyW5SvtCop", "hgKLcWxdKbmuWRRdQ8o7dWO", "W6VdVqZdT8kyrmoIW7ffcuBcTv4", "vSoVtWlcSSkAfxnMq8oDfG", "gLKhg8oiW5VcM8kP", "W67cTmopW6ldHY/cRCoXW5SGWPVcSG", "DCoSWO7cNN3dImoInSoPcdldNSki", "tCkPbCo0W609WPZdVmkfjr/cMW", "W5ODemoDW4xcVCozxmoIu8oj", "imk4Dmo+W7lcN38Ojq4W", "sqa2pSoD", "WPr3lSozea", "ohuXAWy", "oZdcNSofW5WvlfO", "W6pcImoTW6RcSfutW4i", "WQT7dSotea", "amkZceVdRq", "W4SZlrfiWQKxu8o1sdtcJKu", "WQpdICk5A8opW4SSW5W", "W50GW5hcM8oW", "WO3cJ8oQWPpcOW", "WRZcHmolWOtcPW", "W6RdVq3dT8kDrmoPW55NchVcO1a", "W53cTKrvW6C", "W57dG8kqW4VdVvXlW6pdThhdVMq", "WRWiASo4ma", "WOX8faSJoCkon8ocuCkH", "WONdO2/cHdusjqCTW70x", "WR8DW4XgW4q", "W5mLwCoJ", "WP/cUsNdHhm", "WQy2nq"];
  return Vx = function() {
    return x;
  }, Vx();
}
function Yn() {
  function x(r, a, s, c, d) {
    return Uu(c - -11, s);
  }
  function i(r, a, s, c, d) {
    return Px(s, d - 230);
  }
  function t(r, a, s, c, d) {
    return ho(r - 170, r, s - 396, c - 179, a - 896);
  }
  function e(r, a, s, c, d) {
    return Ic(d, s - -1240);
  }
  const n = f0(Rx);
  function o(r, a, s, c, d) {
    return Px(a, c - -977);
  }
  if (n === void (1 * -1031 + 6230 + -5199 * 1)) throw new Error(Rx[e(-784, -775, -787, -791, "Mng*") + t("ryuj", 305, 296, 307) + "e"] + (e(-798, -804, -806, -821, "gJxy") + e(-794, -793, -784, -781, "P9fR") + t("GDEO", 297, 305, 298) + o(-239, "8ImK", -248, -253) + i(957, 947, "sf*k", 968, 956) + x(-76, -58, "qmiY", -72) + e(-779, -780, -782, -773, "ryuj") + o(-294, "8ec2", -289, -278)));
  return n;
}
function we(x, i) {
  const t = Tx();
  return we = function(e, n) {
    e = e - (9047 + 3551 * -1 + -3 * 1696);
    let o = t[e];
    if (we.aqDmll === void 0) {
      var r = function(g) {
        const f = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = f.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          p += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, f) {
        let u = [], p = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + f.charCodeAt(l % f.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (let v = 0; v < g.length; v++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      we.FmYrKe = d, x = arguments, we.aqDmll = !0;
    }
    const a = t[-715 * 11 + -9901 + 1269 * 14], s = e + a, c = x[s];
    return c ? o = c : (we.IyUYKx === void 0 && (we.IyUYKx = !0), o = we.FmYrKe(o, n), x[s] = o), o;
  }, we(x, i);
}
(function(x, i) {
  function t(s, c, d, g, f) {
    return we(g - 286, f);
  }
  function e(s, c, d, g, f) {
    return we(c - 106, g);
  }
  function n(s, c, d, g, f) {
    return we(s - -125, f);
  }
  function o(s, c, d, g, f) {
    return we(d - 26, g);
  }
  function r(s, c, d, g, f) {
    return we(f - 222, s);
  }
  const a = x();
  for (; ; )
    try {
      if (-parseInt(r("RXUM", 651, 653, 651, 646)) / 1 * (-parseInt(t(695, 679, 702, 694, "UA#w")) / 2) + parseInt(t(691, 695, 689, 697, "SoKC")) / 3 * (-parseInt(e(537, 544, 533, "g1ua", 556)) / 4) + -parseInt(r("CN@m", 650, 642, 654, 657)) / 5 * (parseInt(o(440, 429, 441, "XMmo", 438)) / 6) + -parseInt(o(443, 459, 454, "vRKr", 448)) / 7 * (-parseInt(t(708, 692, 709, 704, "7xo$")) / 8) + parseInt(e(518, 528, 525, "lOhS", 541)) / 9 + -parseInt(n(285, 274, 269, 295, "b4[B")) / 10 * (parseInt(r("XMmo", 647, 673, 666, 661)) / 11) + parseInt(e(542, 537, 547, "Nd^x", 544)) / 12 * (-parseInt(e(529, 518, 523, "3p4N", 520)) / 13) === i) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(Tx, 1 * -572802 + 41261 * -31 + 2754682);
function Tx() {
  const x = ["W5KVWPTwW6lcKLRcOCkmWOOd", "hxhdHLzsW51IrKdcI8omWRfT", "hqaQCmkWhYNdP8k/cW", "WQaDySomvNzqW7yBW4Gl", "WPOpW541W4/cU0fen8oytq", "h8o0D8k7WR7cUCkbWOu", "WPaoWQHkWQ3cLND/", "hqiMF8oXhZxdRCkXhSoU", "sCoVWPHnW7pcQI5C", "WOWgWOL1o8kDpKG", "hxddHvjsW5K3EMlcU8oeWQm", "exFdHvvuW5XKxwBcSSoMWO5s", "WOOcWQDHhmkabhu", "amogsCoysSkUW7LoW51p", "WOz5xh3dQa", "gcZcVxDp", "fSo0amoAWQtcM8kEWRn5za", "W4GIWRRcPSkJW68Yo8kKWORcVSk5kW", "zNCAbtjOx8oFWRVcJCklEW", "W7LVcCk+Aq7cJrC", "tSoRW4epWR7dUxDHtCkHW7ZcK14", "zd/cJgbH", "gftdKcpcP8koiSkZtmkIW4i", "bwpdIcy0qJ0dnmkbW44", "eSkeW6b/gG", "WOJdJCoCW6WdtwZdJSkqWPVcUG", "W7/cV8ojW5Ldk2PmWP81", "cCkVWPHzW6i", "WOv9W5GfWRi", "WQJdJCkrj8o7kCo6wq", "WRqPnZJcHCofDmog", "W5q+atVcO31EW4VcJthcNq", "rqNcJMC"];
  return Tx = function() {
    return x;
  }, Tx();
}
function zu({ licensePath: x, bramble: i, wasmDirectoryPath: t }) {
  const [e, n] = Qe();
  function o(c, d, g, f, u) {
    return we(c - -219, d);
  }
  const r = e !== void 0;
  function a(c, d, g, f, u) {
    return we(f - 647, c);
  }
  fe(() => {
    async function c() {
      await i[d("&RvA", 919, 935, 934)](t, x);
      function d(f, u, p, b, A) {
        return we(b - 497, f);
      }
      function g(f, u, p, b, A) {
        return we(A - 311, u);
      }
      n(i[d("QjJI", 907, 923, 917) + g(752, "C@%H", 741, 741, 740) + d("vRKr", 932, 935, 923) + "t"]());
    }
    c();
  }, [i, t, x, n]);
  const s = {};
  return s[o(200, "Jb^q") + o(214, "g1ua")] = e, s[a("MYDi", 1073, 1081, 1079) + "sh"] = r, s;
}
var fc = ((x) => (x.DOCUMENT = "document-auto-capture:dev", x.FACE = "face-auto-capture:dev", x.PALM = "palm-capture:dev", x))(fc || {});
const mo = {};
mo.SIMD = "simd", mo.NO_SIMD = "no-simd";
const Za = mo, bo = {};
bo.Lower = "Lower", bo.Higher = "Higher";
const Ao = bo, Wx = {};
Wx.VISIBLE = "VISIBLE", Wx.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", Wx.HIDDEN = "HIDDEN";
const Ex = Wx;
function Lx() {
  var x = ["WOpdOItcHCkjxSoOimk8W7q", "W53cPmojj8o3WQVdNfyAWPfVz1O", "W7aJiaO6tmkgEe0VWR5gW6m", "W4/dKSkpW4W2WQldHXC1WOa", "fSoiW6NcMHRdN8oP", "W4dcQmk8vmoNCwDuWPBdTXX/tG", "WOZdUSkmW5hdLG", "jmomW74TqqRcMCo1W7efbXeEfa", "gZtcKvqVwSkW", "nMLfdSkQxSoT", "WPddTxtdG1i", "WPi9W4xdQ8kedsRdKCokW5zapCo5", "hCkMWRVdJuZcKSkpaCkxW6nDgwy", "wvtdI10HfhG1W7iuW7JcR8ob", "w1FdHv4MghyEW7iRW63cS8ou", "iaRcMWr2", "h8kRWRhdJuRcNCkbkSkqW5fthMO", "WQ4MjKtcImoIW7hcPCkBiSowcSo3", "xd4sW5vnzMH4", "iSopW74Kq1hdI8kQW4yJjq", "WPNdHmkFW4ajW4yKW6/dRqK1", "W5P0WOOqWPRcGMimm243aG8", "WQ4HxGZdVmk/WQpcQW", "gSkNWRVdJ0VcMSkixSkSW51edhVdPq"];
  return Lx = function() {
    return x;
  }, Lx();
}
function Xe(x, i) {
  var t = Lx();
  return Xe = function(e, n) {
    e = e - (-48 * -169 + 3 * 542 + -9406);
    var o = t[e];
    if (Xe.BskxBC === void 0) {
      var r = function(g) {
        for (var f = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", p = "", b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = f.indexOf(l);
        for (var Z = 0, M = u.length; Z < M; Z++)
          p += "%" + ("00" + u.charCodeAt(Z).toString(16)).slice(-2);
        return decodeURIComponent(p);
      }, a = function(g, f) {
        var u = [], p = 0, b, A = "";
        g = r(g);
        var l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + f.charCodeAt(l % f.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (var v = 0; v < g.length; v++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      Xe.cLZAZe = a, x = arguments, Xe.BskxBC = !0;
    }
    var s = t[5579 + 10 * 431 + -29 * 341], c = e + s, d = x[c];
    return d ? o = d : (Xe.uyHaJz === void 0 && (Xe.uyHaJz = !0), o = Xe.cLZAZe(o, n), x[c] = o), o;
  }, Xe(x, i);
}
(function(x, i) {
  var t = x();
  function e(s, c, d, g, f) {
    return Xe(d - 115, f);
  }
  function n(s, c, d, g, f) {
    return Xe(c - 877, d);
  }
  function o(s, c, d, g, f) {
    return Xe(f - 383, g);
  }
  function r(s, c, d, g, f) {
    return Xe(g - 724, s);
  }
  for (; ; )
    try {
      var a = parseInt(e(479, 468, 468, 464, "Exrq")) / 1 + parseInt(e(474, 461, 467, 473, "zQox")) / 2 + parseInt(e(469, 458, 460, 454, ")pMI")) / 3 * (parseInt(e(464, 467, 459, 449, "zQox")) / 4) + -parseInt(r("p7Tc", 1073, 1055, 1062, 1052)) / 5 * (-parseInt(o(712, 724, 722, "zQox", 715)) / 6) + parseInt(e(443, 448, 452, 444, "d5Y*")) / 7 * (parseInt(e(457, 466, 464, 457, "OhD(")) / 8) + -parseInt(o(734, 734, 722, "tAWQ", 726)) / 9 * (parseInt(e(440, 446, 451, 450, "4[ed")) / 10) + -parseInt(n(1229, 1224, "M&I1", 1212, 1229)) / 11;
      if (a === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Lx, 1 * 707929 + 1068850 + 416174 * -2);
function qu({ crosshatch: x }) {
  function i(t, e, n, o, r) {
    return Xe(r - -811, e);
  }
  return x != null && x[i(-470, "a1ac", -469, -469, -461) + "id"] ? Ao[i(-452, "Exrq", -457, -446, -456) + "r"] : Ao[i(-474, "j24t", -456, -470, -465)];
}
(function(x, i) {
  function t(a, s, c, d, g) {
    return Be(s - 813, c);
  }
  function e(a, s, c, d, g) {
    return Be(c - 484, g);
  }
  function n(a, s, c, d, g) {
    return Be(g - 312, s);
  }
  function o(a, s, c, d, g) {
    return Be(s - -112, g);
  }
  const r = x();
  for (; ; )
    try {
      if (parseInt(n(592, "n]E^", 601, 601, 597)) / 1 + -parseInt(t(1082, 1085, "UbpE", 1081, 1074)) / 2 * (-parseInt(n(593, "GrjZ", 574, 588, 585)) / 3) + parseInt(e(766, 756, 753, 741, "0OMD")) / 4 + parseInt(n(610, "4ROh", 601, 602, 605)) / 5 + -parseInt(t(1072, 1087, "!2w^", 1102, 1091)) / 6 * (parseInt(t(1087, 1084, "j5Dh", 1074, 1073)) / 7) + -parseInt(o(144, 152, 135, 162, "GA08")) / 8 + parseInt(o(156, 163, 164, 168, "xwV9")) / 9 * (-parseInt(t(1108, 1092, "@5W(", 1081, 1106)) / 10) === i) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Dx, -2 * -832263 + -16433 * 9 + -600605);
function Be(x, i) {
  const t = Dx();
  return Be = function(e, n) {
    e = e - (-2563 + -1 * -2824);
    let o = t[e];
    if (Be.CZHbVf === void 0) {
      var r = function(g) {
        const f = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = f.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          p += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, f) {
        let u = [], p = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + f.charCodeAt(l % f.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (let v = 0; v < g.length; v++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      Be.MfUJSV = d, x = arguments, Be.CZHbVf = !0;
    }
    const a = t[5373 * 1 + -2 * 830 + -3713], s = e + a, c = x[s];
    return c ? o = c : (Be.XwKSEl === void 0 && (Be.XwKSEl = !0), o = Be.MfUJSV(o, n), x[s] = o), o;
  }, Be(x, i);
}
function Dx() {
  const x = ["fCk8yJFcPmogBwVcNWa", "W4FcLHhcILaMDqddMbTMvL0", "W47dTmkzWReTbSkWyGqJW43dSa", "dWxdVmoDW5T2WQVdHmo0W7K", "sCoxW5uKW6BcSCoKELtcPvRdTa", "WQ7dNCkYWPpdIG", "vtz7WOlcI8oApmk8W4lcGqb5yG", "rSoNWOBdVLSZA8kzW4W", "zmkLW4hdQbq", "a1Tb", "W70+mmkhjmk3pfnf", "WQPeW6KxWP3dNdHtW5pcTthcMSka", "rmoxW5GHW6xcSSokrhVcO2ldGq", "WPalW6z7jSk+WO/cMNRdKq", "gIWDfwlcQeldM30", "WR49WOLnncBcPLq6WOrL", "nCoLWPlcTXKhW6yzpCkS", "tmoOWOdcVbLXsCk+W5OIACou", "WRRdLmkOWPldQG", "WQDNy8kYaW", "W6ZcO8o5xNC", "rW4FW5uHW7lcMG/dMG", "dCk7W6ldRv4", "WPKpW6z8FSkgWRVcOx7dKmoA", "x8oWW6ryAa", "cmoteCoIW7S", "W4fnWRqVpG", "gqSBDbRdPWBcTffHcqy", "cxe7W6xdNW", "WR07WOXnm17cGvmBWP1FWOi", "WPL+WRS", "s8kAqCooqSkYW5K/qmkEWRzUha", "arJcLIBdNG"];
  return Dx = function() {
    return x;
  }, Dx();
}
function $u({ children: x, licensePath: i, bramble: t, wasmDirectoryPath: e }) {
  function n(b, A, l, v, Z) {
    return Be(Z - 103, b);
  }
  const o = {};
  o[p("!2w^", 610, 605) + "le"] = t, o[a(-578, -571, -583, "#1Hr") + f(326, 328, "xwV9") + "h"] = i;
  function r(b, A, l, v, Z) {
    return Be(b - -186, l);
  }
  function a(b, A, l, v, Z) {
    return Be(l - -860, v);
  }
  o[p("wOnR", 617, 615) + f(330, 320, "j5Dh") + n("GA08", 385, 403, 394, 389) + "th"] = e;
  const { sunfish: s, crosshatch: c } = zu(o), d = {};
  d[n("Qza(", 375, 401, 385, 385) + r(97, 86, "iWA9")] = c;
  const g = Ue(() => ({ redfin: qu(d), sunfish: s, crosshatch: c, bramble: t }), [s, c, t]);
  function f(b, A, l, v, Z) {
    return Be(b - 46, l);
  }
  const u = {};
  function p(b, A, l, v, Z) {
    return Be(l - 339, b);
  }
  return u[r(92, 77, "UL7v")] = g, u[n("wOnR", 382, 357, 362, 366) + p("@5W(", 601, 606)] = x, O(Rx[r(104, 88, "qg7&") + n("VEnc", 376, 408, 405, 391)], u);
}
(function(x, i) {
  function t(c, d, g, f, u) {
    return _e(f - 473, g);
  }
  function e(c, d, g, f, u) {
    return _e(f - 712, u);
  }
  function n(c, d, g, f, u) {
    return _e(c - -645, f);
  }
  function o(c, d, g, f, u) {
    return _e(d - -243, c);
  }
  var r = x();
  function a(c, d, g, f, u) {
    return _e(d - -655, u);
  }
  for (; ; )
    try {
      var s = -parseInt(t(678, 691, "iSdX", 687, 681)) / 1 + -parseInt(t(685, 700, "^Nq1", 691, 691)) / 2 + -parseInt(a(-431, -436, -442, -430, "Mz6(")) / 3 * (parseInt(a(-428, -426, -422, -432, "D1eG")) / 4) + parseInt(e(937, 944, 928, 935, "iSdX")) / 5 + -parseInt(e(934, 946, 947, 942, "@)jg")) / 6 * (parseInt(t(687, 688, "Z%[v", 686, 679)) / 7) + -parseInt(n(-419, -426, -424, "p6wv", -426)) / 8 + parseInt(o("n]Vh", -27, -19, -29, -18)) / 9;
      if (s === i) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Nx, 861727);
function _e(x, i) {
  var t = Nx();
  return _e = function(e, n) {
    e = e - (-17840 + -18053 * -1);
    var o = t[e];
    if (_e.Aasbwo === void 0) {
      var r = function(g) {
        for (var f = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", p = "", b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = f.indexOf(l);
        for (var Z = 0, M = u.length; Z < M; Z++)
          p += "%" + ("00" + u.charCodeAt(Z).toString(16)).slice(-2);
        return decodeURIComponent(p);
      }, a = function(g, f) {
        var u = [], p = 0, b, A = "";
        g = r(g);
        var l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + f.charCodeAt(l % f.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (var v = 0; v < g.length; v++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      _e.fLuqub = a, x = arguments, _e.Aasbwo = !0;
    }
    var s = t[-4 * -1900 + -4 * -2321 + 1206 * -14], c = e + s, d = x[c];
    return d ? o = d : (_e.XZANBG === void 0 && (_e.XZANBG = !0), o = _e.fLuqub(o, n), x[c] = o), o;
  }, _e(x, i);
}
function Nx() {
  var x = ["ds8deedcLga", "BmkJWOVcMSkWo3ZdMCkCcerpxr4", "BHVcQCoKqSoIoCo/gfToWQ3dPq", "W6ZcV8klWPRcOwhcU3GMEfHn", "ksffW7SQWO8iWPO6WR7dIdPY", "WQrbWONdMZNdPbhcVmksF8kGWQCZ", "WQjfWO7dKdJdPbFdJ8kuqCktWQKHCW", "EZ1dWO0LASoUWQZdSSo2W67cQa", "zsK3WOhcOxGJDXRcP8ohW681", "zSkUWOlcNSk0pXVcUSk6cfXS", "qW4WWRJcHCkKvb3dL3pdSYSXua", "WQPjfWD6dSkDv8oWguVdT8kWFq", "w8oazbyaWRjcfhWzW6xcQIiC", "mgLQW5qEiXW", "W7NcNrNdU3/cRLK", "WOtdNXqfFgW9", "cK5zAJNdTJhcHWeTWPRdIc9U", "zYG5WOlcO3XCvXdcGmokW7y"];
  return Nx = function() {
    return x;
  }, Nx();
}
function el({ analytics: x, crosshatch: i }) {
  return i !== void (-1 * -6641 + 529 * -5 + -3996) && !i.isAnalyticsDisabled ? x : void (6167 + 19 * -337 + 236 * 1);
}
function tl({ analytics: x, appKey: i, redfin: t, crosshatch: e, bramble: n }) {
  const o = {};
  o.analytics = x, o.crosshatch = e;
  const r = el(o);
  return fe(() => {
    r && r.init(i);
  }, [r, i]), fe(() => {
    e && (console.info("Analytics is " + (e.isAnalyticsDisabled ? "disabled" : "enabled")), r && r.walleye(t, n.getCustomerName()));
  }, [r, n, e, t]), fe(() => {
    if (r)
      return window.addEventListener("beforeunload", r.endSession), () => {
        r.endSession(), window.removeEventListener("beforeunload", r.endSession);
      };
  }, [r]), r;
}
function nl({
  analytics: x,
  appKey: i,
  children: t
}) {
  const { redfin: e, crosshatch: n, bramble: o } = Yn(), r = tl({ analytics: x, redfin: e, appKey: i, crosshatch: n, bramble: o }), a = Ue(
    () => ({
      analytics: r
    }),
    [r]
  );
  return /* @__PURE__ */ O(Kx.Provider, { value: a, children: t });
}
const xl = 1 * -8074 + 1 * 429 + -1 * -7645 + 0.4, il = 173 * -14 + -9205 + 11627 + 0.16, ol = -217 * -37 + 3 * -2227 + -1348 * 1 + 0.2, rl = 6937 + 13 * -251 + 2 * -1837 + 0.05, al = 695 + -1 * -4122 + 1 * -4817, yo = {};
yo.min = -(417 * -14 + -5026 * -1 + 813), yo.max = 1;
const Ha = yo, Ka = 7 * -148 + -5559 + -5 * -1319, sl = -10 * -195 + 768 * -5 + 1890 + 0.3, cl = 1939 + 7 * -277 + 0.2, gl = 1 * 3244 + 346 * -2 + -2552 + 0.85, dl = 3 * -332 + 969 * -9 + 27 * 361, ul = -7321 * 1 + -11 * 222 + 9772 * 1 + 0.8100000000000005, vx = {};
vx.minDuration = 1e3, vx.maxDuration = 2500, vx.minFrames = 10;
const Fi = vx, Wo = {};
Wo.max = 100, Wo.min = 10;
const Ra = Wo, ll = 3536 + -6841 * 1 + -23 * -175, Il = -1 * 593 + -7087 + 7880, fl = 2 * 1563 + 1039 * 8 + -11434 * 1, Cc = "AES-CBC", pc = "RSA-OAEP", Cl = "SHA-256", pl = "image/jpeg", hl = -29 * -187 + 3999 + -9414, ml = -1 * -9279 + 237 * 3 + 1 * -9950, bl = "SAM v1.40.4 for idcards", Al = "dot_embedded_bg.wasm", hc = Dn(null), ar = () => {
  const x = f0(hc);
  if (!x)
    throw new Error("Missing provider for CameraOptionsContext");
  return x;
}, yl = ({
  cameraFacing: x,
  captureMode: i,
  licensePath: t,
  onPhotoTaken: e,
  sessionToken: n,
  thresholds: o,
  wasmDirectoryPath: r
}) => {
  var a, s, c;
  return {
    onPhotoTaken: e,
    cameraFacing: x ?? rr.FRONT,
    captureMode: i ?? uc.AUTO_CAPTURE,
    wasmDirectoryPath: r,
    licensePath: t,
    sessionToken: n,
    thresholds: {
      faceConfidence: (o == null ? void 0 : o.faceConfidence) ?? xl,
      minFaceSizeRatio: (o == null ? void 0 : o.minFaceSizeRatio) ?? il,
      maxFaceSizeRatio: (o == null ? void 0 : o.maxFaceSizeRatio) ?? ol,
      sharpnessThreshold: (o == null ? void 0 : o.sharpnessThreshold) ?? sl,
      brightnessLowThreshold: (o == null ? void 0 : o.brightnessLowThreshold) ?? cl,
      brightnessHighThreshold: (o == null ? void 0 : o.brightnessHighThreshold) ?? gl,
      outOfBoundsThreshold: (o == null ? void 0 : o.outOfBoundsThreshold) ?? rl,
      devicePitchAngleThreshold: (o == null ? void 0 : o.devicePitchAngleThreshold) ?? dl,
      mouth: {
        confidence: ((a = o == null ? void 0 : o.mouth) == null ? void 0 : a.confidence) ?? al,
        status: {
          min: ((s = o == null ? void 0 : o.mouth) == null ? void 0 : s.status.min) ?? Ha.min,
          max: ((c = o == null ? void 0 : o.mouth) == null ? void 0 : c.status.max) ?? Ha.max
        }
      },
      leftEye: (o == null ? void 0 : o.leftEye) ?? {
        confidence: Ka
      },
      rightEye: (o == null ? void 0 : o.rightEye) ?? {
        confidence: Ka
      }
    }
  };
}, Wl = ({
  cameraOptions: x,
  children: i
}) => {
  const t = Ue(() => yl(x), [x]);
  return /* @__PURE__ */ O(hc.Provider, { value: t, children: i });
}, mc = -8899 + 3624 * 1 + -211 * -25 + 0.75, vl = -13 * 394 + 3 * 2367 + -3 * 659, Sl = -1 * -7814 + 8932 + -16146, wl = -844 * -6 + 2851 + -7915 * 1, Bl = "dot-auto-capture-video", bc = (x) => x.length < 3095 * 1 + 1 * -1153 + 1941 * -1 ? -5 * -603 + -1 * 694 + -211 * 11 : x.reduce((t, e) => t + e, -3479 + -2301 * 4 + 12683) / x.length, J0 = (x) => Number.parseFloat(x.toFixed(3)), kl = (x) => {
  const i = x.getContext("2d");
  i && i.clearRect(-11 * -358 + 217 * 25 + -3 * 3121, -8787 + -1 * -519 + -8268 * -1, i.canvas.width, i.canvas.height);
}, pi = (x, i) => Math.min(x, i), Ac = ({ height: x, width: i }, t) => {
  const e = pi(i, x) * t, n = (i - e) / 2, o = (x - e) / 2, r = {};
  return r.shiftX = n, r.shiftY = o, r.width = e, r.height = e, r;
}, Gl = (x, i) => {
  const { height: t, shiftX: e, shiftY: n, width: o } = Ac(x, i), r = {};
  return r.shiftX = e / x.width, r.shiftY = n / x.height, r.width = o / x.width, r.height = t / x.height, r;
}, Ol = ({ height: x, width: i }) => {
  const t = pi(i, x), e = t / (-3064 + 114 * 83 + -1 * 6395) * (1 * -2037 + -6357 + -2 * -4199);
  if (i > x) {
    const o = {};
    return o.width = e, o.height = t, o;
  }
  const n = {};
  return n.width = t, n.height = e, n;
}, Zl = (x, i) => {
  const t = pi(i.width, i.height);
  return J0(x * t);
}, Hl = ({ height: x, width: i }) => {
  const t = {};
  return t.height = x, t.width = i, Ac(t, mc);
}, Kl = (x) => Gl(x, mc), Rl = (x, i) => Zl(x, i) * vl, Pl = "@innovatrics/dot-common-auto-capture", Vl = "6.2.1", Tl = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, El = {
  "@dot/proto-files": "2.1.1",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, Ll = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.5"
}, Dl = {
  name: Pl,
  private: !0,
  version: Vl,
  scripts: Tl,
  dependencies: El,
  devDependencies: Ll
}, yc = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), Pa = () => {
  const x = /Android/i.test(navigator.userAgent), i = /Firefox/i.test(navigator.userAgent);
  return x && i;
}, Nl = () => {
  const x = navigator.userAgent.includes("Chrome"), i = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return x && i ? !1 : i;
}, vo = (x) => new Promise((i) => {
  setTimeout(i, x);
}), Wc = (x) => JSON.parse(JSON.stringify(x, (i, t) => typeof t == "number" ? J0(t) : t)), vc = () => Dl.version, Sc = (x) => new URL(x).hostname.replace("www.", ""), Fl = () => Sc(window.location.href) === "localhost", sx = (x) => Object.entries(x).map(([i, t]) => encodeURIComponent(i) + "=" + encodeURIComponent(t)).join("&"), Yl = (x, i) => JSON.stringify(x) === JSON.stringify(i) ? i : x;
function jl(x, i) {
  let t;
  return (...e) => {
    const n = () => {
      clearTimeout(t), t = void 0, x(...e);
    };
    t === void (1 * -1651 + -3369 + 5020) && (t = setTimeout(n, i));
  };
}
const Ml = () => "prod".toLowerCase() === "dev";
class sr extends Array {
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
    this.length === this.size && this.splice(-2467 * 2 + -3291 + 8225 * 1, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-1 * -5027 + -2935 + -2092);
  }
}
const Xl = (x, i, t = pl) => new Promise((e) => {
  x.toBlob((n) => {
    if (!n) throw new Error("Canvas to Blob failed");
    e(n);
  }, t, i);
}), _l = async (x) => Xl(x, 73 * -97 + 8131 + -960 * 1), Jl = (x, i) => {
  const t = document.createElement("canvas");
  t.width = i.width, t.height = i.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(x, i.shiftX, i.shiftY, i.width, i.height, 129 * 62 + 112 * 34 + -2 * 5903, 2586 * -2 + -5378 * 1 + -50 * -211, t.width, t.height), t;
}, Ql = (x) => {
  const i = x.getContext("2d");
  if (!i) throw new Error("getImageDataForSam ctx error");
  const { data: t } = i.getImageData(4 * -526 + -67 * -98 + -2 * 2231, 3193 * -1 + 7403 + -5 * 842, x.width, x.height);
  return t;
}, wc = (x, i, t, e) => {
  const n = x.getContext("2d");
  n && (n.beginPath(), e ? (n.fillStyle = t, n.fillRect(i.topLeft.x, i.topLeft.y, i.width, i.height)) : (n.strokeStyle = t, n.rect(i.topLeft.x, i.topLeft.y, i.width, i.height)), n.stroke());
}, Yi = (x, i, t) => {
  const { height: e, shiftX: n, shiftY: o, width: r } = i, a = {};
  a.x = n, a.y = o;
  const s = {};
  s.topLeft = a, s.width = r, s.height = e, s.color = t, wc(x, s, t);
}, Cn = (x, i, t, e = 4 * -1399 + 11 * 709 + -2203) => {
  const n = x.getContext("2d");
  n && (n.fillStyle = t, n.fillRect(i.x + e, i.y + e, -8962 + 1518 * -4 + 15041, 838 * -4 + 3602 * 1 + -243 * 1), n.beginPath());
}, Ul = (x, i) => {
  const { height: t, shiftX: e, shiftY: n, width: o } = i;
  return !(x.x < e || x.x > e + o || x.y < n || x.y > n + t);
}, zl = (x, i) => Object.values(x).every((t) => Ul(t, i));
function Fx(x) {
  const { height: i, width: t } = Ol(x), e = (x.width - t) / (4654 * -1 + 1 * 5821 + 1 * -1165), n = (x.height - i) / (4158 + 1 * 3746 + -7902), o = {};
  return o.shiftX = e, o.shiftY = n, o.width = t, o.height = i, o;
}
function Bc(x, i, t) {
  const { height: e, width: n } = t, o = pi(x.width, x.height), r = n - o * i * (3 * -235 + 7281 + -6574), a = e - o * i * 2, s = (x.width - r) / (354 + -176 * 2), c = (x.height - a) / (6057 + -5 * -1643 + 5 * -2854), d = {};
  return d.shiftX = s, d.shiftY = c, d.width = r, d.height = a, d;
}
function k0(x, i) {
  const { shiftX: t, shiftY: e } = i, n = {};
  return n.x = x.x + t, n.y = x.y + e, n;
}
const ql = (x, i) => ({ ...x, leftEye: { ...x.leftEye, center: k0(x.leftEye.center, i) }, rightEye: { ...x.rightEye, center: k0(x.rightEye.center, i) }, mouth: { ...x.mouth, center: k0(x.mouth.center, i) }, topLeft: k0(x.topLeft, i), bottomRight: k0(x.bottomRight, i), faceCenter: k0(x.faceCenter, i) }), kc = (x, i) => {
  const { faceCenter: t, faceSize: e } = x, n = Rl(e, i), o = {};
  o.x = t.x, o.y = t.y - n;
  const r = {};
  r.x = t.x + n, r.y = t.y;
  const a = {};
  a.x = t.x, a.y = t.y + n;
  const s = {};
  s.x = t.x - n, s.y = t.y;
  const c = {};
  return c.top = o, c.right = r, c.bottom = a, c.left = s, Wc(c);
}, $l = (x, i) => {
  const { bottomRight: t, faceCenter: e, topLeft: n } = i, o = {
    topLeft: n,
    width: t.x - n.x,
    height: t.y - n.y
  };
  wc(x, o, "rgba(255, 0, 0, 0.3)", !0), Cn(x, e, "lime");
}, e1 = (x, i, t) => {
  const e = kc(i, t);
  Object.values(e).map((n) => Cn(x, n, "orange"));
}, t1 = ({ cameraResolution: x, detectionDetails: i, isImageMirror: t }) => {
  const { thresholds: e } = ar(), { redfin: n } = Yn(), o = At(null);
  if (fe(() => {
    if (!o.current)
      return;
    o.current.width = x.width, o.current.height = x.height, kl(o.current);
    const p = Fx(x), b = Bc(
      x,
      e.outOfBoundsThreshold,
      p
    ), A = Hl(x);
    i.value && ($l(o.current, i.value.processedImage.detection), e1(
      o.current,
      i.value.processedImage.detection,
      x
    ), Yi(o.current, p, "lime"), Yi(o.current, b, "yellow"), Yi(o.current, A, "blue"), Cn(o.current, i.value.processedImage.detection.leftEye.center, "cyan"), Cn(o.current, i.value.processedImage.detection.rightEye.center, "cyan"), Cn(o.current, i.value.processedImage.detection.mouth.center, "cyan"));
  }, [x, e, i.value]), !i.value)
    return null;
  const {
    detectionTime: r,
    fps: a,
    processedImage: { detection: s, instructionCode: c, invalidValidators: d },
    resolution: g,
    samVersion: f
  } = i.value, u = {
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
    "Detection time": r,
    FPS: a,
    Tier: n,
    Instruction: c,
    Resolution: JSON.stringify(g),
    "Component version": "6.2.1"
  };
  return f && (u["SAM version"] = f), d.length > 0 && (u["Invalid validators"] = d.join(", ")), /* @__PURE__ */ O(
    Ju,
    {
      ref: o,
      cameraResolution: x,
      detectionDetails: u,
      isImageMirror: t
    }
  );
};
function n1(x) {
  return /* @__PURE__ */ O("rect", { fill: "#000", ...x, rx: "50%" });
}
function x1(x) {
  const [i, t] = Qe(!1), e = () => t((r) => !r), n = "" + i;
  M0(() => {
    function r() {
      if (!x.current) return;
      const d = new MutationObserver(() => {
        e();
      }), g = {};
      return g.childList = !0, g.subtree = !0, g.attributes = !0, d.observe(x.current, g), d;
    }
    function a() {
      var f;
      if (!((f = x.current) != null && f["parentElement"])) return;
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
  const o = {};
  return o.key = n, o;
}
const i1 = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function o1({ cutOut: x, height: i, width: t }) {
  const e = At(null), { key: n } = x1(e);
  return /* @__PURE__ */ O("div", { ref: e, style: i1, children: /* @__PURE__ */ O("svg", { viewBox: `0 0 ${t} ${i}`, children: [
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
function r1({ fullOverlay: x, resolution: i }) {
  const t = Kl(i), e = `${t.height * 100}%`, n = `${t.width * 100}%`, o = `${t.shiftX * 100}%`, r = `${t.shiftY * 100}%`;
  return /* @__PURE__ */ O(
    o1,
    {
      cutOut: x || /* @__PURE__ */ O(n1, { height: e, width: n, x: o, y: r }),
      height: i.height,
      width: i.width
    }
  );
}
function a1({ cameraResolution: x, children: i, detectionDetails: t, shouldMirror: e }) {
  const { redfin: n, sunfish: o } = Yn(), { appState: r, freemiumOverlayState: a } = Fn(), s = a !== Ex.HIDDEN && n !== Ao.Higher && x, c = a === Ex.VISIBLE, d = x && o && r === Je.RUNNING;
  return /* @__PURE__ */ O(ot, { children: [
    s && /* @__PURE__ */ O(r1, { fullOverlay: c, resolution: x }),
    i,
    d && /* @__PURE__ */ O(
      t1,
      {
        cameraResolution: x,
        detectionDetails: t,
        isImageMirror: e
      }
    )
  ] });
}
const s1 = (x, i) => {
  const t = {};
  t.detail = i, document.dispatchEvent(new CustomEvent(x, t));
}, ii = class ii {
  constructor() {
    E(this, "lastDetails", {});
    E(this, "delayedTime", -38 * 101 + -6737 * 1 + 10575);
  }
  static getInstance() {
    return !this._instance && (this._instance = new ii()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 131 * 9 + 7716 + 593 * -15;
  }
  isDetailChanged(i, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[i]) ? (this.lastDetails[i] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(i, t) {
    this.isDetailChanged(i, t) && s1(i, t);
  }
  dispatchDelayedCustomEventOnChange(i, t, e) {
    const n = performance.now();
    n - this.delayedTime > e && (this.dispatchCustomEventOnChange(i, t), this.delayedTime = n);
  }
};
E(ii, "_instance");
let bn = ii;
const Q0 = bn.getInstance(), Gc = (x, i, t = Sl) => {
  const e = {};
  e.instructionCode = i;
  const n = e;
  Q0.dispatchDelayedCustomEventOnChange(x, n, t);
}, Va = (x, i) => {
  Q0.dispatchCustomEventOnChange(x, i);
}, c1 = (x, i) => {
  Q0.dispatchCustomEventOnChange(x, i);
}, g1 = (x, i) => {
  const t = {};
  t.size = i;
  const e = t;
  Q0.dispatchCustomEventOnChange(x, e);
}, d1 = (x, i, t) => {
  const e = i.confidence < t ? void 0 : i, n = {};
  n.detectedObject = e;
  const o = n;
  Q0.dispatchCustomEventOnChange(x, o);
}, u1 = (x, { detection: i, fps: t, image: e, invalidValidators: n, isInCandidateSelection: o }) => {
  const r = {};
  r.image = e, r.data = {}, r.data.detection = i, r.data.fps = t, r.data.isInCandidateSelection = o, r.data.invalidValidators = n, r.data.imageResolution = {}, r.data.imageResolution.width = e.width, r.data.imageResolution.height = e.height;
  const a = r;
  Q0.dispatchCustomEventOnChange(x, a);
}, l1 = (x, i) => {
  if (Ml()) {
    const t = {};
    t.candidateSelectionImages = i;
    const e = t;
    bn.getInstance().dispatchCustomEventOnChange(x, e);
  }
}, I1 = (x, i) => {
  const { cameraResolution: t, shouldCameraMirror: e } = i;
  fe(() => {
    if (!t) return;
    const n = {};
    n.cameraResolution = t, n.isMirroring = e, c1(x, n);
  }, [t, e, x]);
}, f1 = (x) => x === gc.CONTROL ? !yc() : !0, C1 = (x, i) => {
  const { appState: t, handleAppStateChange: e, handleError: n, isCameraReady: o } = Fn(), [r, a] = Qe(), s = Ue(() => {
    const d = o && i && i.isStreaming && i.getCameraSettings().facingMode;
    return d ? r ?? d === "user" : r ?? f1(x);
  }, [i, r, x, o]);
  fe(() => {
    const d = () => {
      t !== Je.LOADING && e(Je.RUNNING);
    }, g = () => {
      a(r === void 0 ? !s : !r);
    }, f = async () => {
      if (i) {
        e(Je.LOADING);
        try {
          await i.switchCamera(), e(Je.RUNNING);
        } catch (p) {
          if (p instanceof Error) {
            n(oe.fromCameraError(p));
            return;
          }
        }
        a(void 0);
      }
    }, u = (p) => {
      var b;
      switch ((b = p.detail) == null ? void 0 : b["instruction"]) {
        case Di.CONTINUE_DETECTION:
          d();
          break;
        case Di.TOGGLE_MIRROR:
          g();
          break;
        case Di.SWITCH_CAMERA:
          f();
          break;
        default:
          return;
      }
    };
    return document.addEventListener(x, u), () => {
      document.removeEventListener(x, u);
    };
  }, [t, i, n, r, e, s, x]);
  const c = {};
  return c.shouldCameraMirror = s, c;
};
async function Oc() {
  return navigator.mediaDevices.enumerateDevices();
}
async function ji() {
  return (await Oc()).filter((i) => i.kind === "videoinput");
}
function Mi(x) {
  x.getTracks().forEach((t) => t.stop());
}
function Ta(x) {
  return x.getVideoTracks()[-4 * 1043 + 4 * -332 + 5500];
}
const Sx = {};
Sx.width = 1920, Sx.height = 1080, Sx.facingMode = rr.FRONT;
const p1 = Sx;
var dt;
class Zc {
  constructor({ defaultVideoConstrains: i = p1, minCameraShorterSide: t = ll } = {}) {
    E(this, "options");
    E(this, "availableCameraProperties", []);
    ne(this, dt, null);
    const e = {};
    e.defaultVideoConstrains = i, e.minCameraShorterSide = t, this.options = e;
  }
  get mediaStream() {
    return L(this, dt);
  }
  get videoTrack() {
    return L(this, dt) ? Ta(L(this, dt)) : void (2 * 2341 + -6173 + 1491);
  }
  get isCameraActive() {
    var i;
    return !!((i = L(this, dt)) != null && i.active);
  }
  static async requestPermission() {
    const i = {};
    i.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(i);
    Mi(t);
  }
  async open(i = {}) {
    Pa() && await vo(-115 * -81 + 7 * 107 + -874 * 11), $(this, dt, await navigator.mediaDevices.getUserMedia(i)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const i = await ji();
    if (i.length <= 1651 * -5 + -4379 + -12635 * -1) return;
    const t = this.videoTrack.getConstraints(), e = this.videoTrack.getSettings(), n = i.findIndex((a) => a.deviceId === e.deviceId), o = i[n + (2561 * 2 + -4929 + 3 * -64)] ?? i[1 * -4551 + 10 * -314 + 7691], r = this.getConstraints(t, o);
    this.close(), await this.open(r);
  }
  close() {
    L(this, dt) && (Mi(L(this, dt)), $(this, dt, null));
  }
  async getProperties() {
    const i = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = i;
    const n = {};
    return n.currentCameraProperties = e, n.availableCameraProperties = this.availableCameraProperties, n;
  }
  getSettings() {
    if (!this.videoTrack) throw Error("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  getResolution() {
    const i = this.getSettings();
    if (!i.width) throw new oe("Video width is undefined");
    if (!i.height) throw new oe("Video height is undefined");
    const t = {};
    return t.width = i.width, t.height = i.height, t;
  }
  async getDeviceName() {
    const i = this.getSettings(), t = await Oc(), e = t.find((n) => n.deviceId === i.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(i) {
    return i === rr.FRONT ? void (2914 + 5 * -1987 + 7021) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    if (yc())
      return (await ji()).find((e) => e.label.includes("back") && e.label.includes("0"));
  }
  async collectAvailableCamerasInfo() {
    const i = await ji();
    for (const t of i) {
      Pa() && await vo(2275 * 2 + 1399 * 4 + -4 * 2424);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const n = {};
        n.video = e;
        const o = await navigator.mediaDevices.getUserMedia(n), r = Ta(o);
        if (!r) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const a = r.getSettings(), s = { ...a };
        s.deviceName = r.label;
        const c = {};
        c.cameraProperties = s;
        const d = c;
        this.availableCameraProperties.push(d), Mi(o);
      } catch (e) {
        e instanceof Error && oe.logError(e);
      }
    }
  }
  getConstraints(i, t) {
    const e = { ...this.options.defaultVideoConstrains, ...i };
    e.deviceId = t ? { exact: t.deviceId } : void (-3719 * -1 + -2124 * 4 + 281 * 17);
    const n = {};
    return n.video = e, n.audio = !1, n;
  }
  checkVideoTrackSettings() {
    var e;
    const i = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(i != null && i.height) || !(i != null && i.width))
      throw this.close(), new oe("Could not init camera settings");
    if (typeof this.options.minCameraShorterSide != "number") return;
    if (Math.min(i == null ? void 0 : i.width, i == null ? void 0 : i.height) < this.options.minCameraShorterSide)
      throw this.close(), new oe("Could not init video because of low camera resolution: " + i.width + "x" + i.height + ".");
  }
}
dt = new WeakMap();
class h1 {
  constructor(i, t) {
    this.videoHandler = i, this.cameraHandler = t;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async startVideoStream(i = {}) {
    await Zc.requestPermission(), await this.cameraHandler.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(i.facingMode), e = this.cameraHandler.getConstraints(i, t);
    await this.cameraHandler.open(e), Nl() && (this.cameraHandler.close(), await this.cameraHandler.open(e)), await this.mountVideoStream();
  }
  takePhoto() {
    var n;
    if (!this.cameraHandler.videoTrack) throw Error("Video track must be initialized to take photo");
    const i = (n = this.cameraHandler.videoTrack) == null ? void 0 : n.getSettings();
    if (!(i != null && i.width)) throw new oe("Cant take photo - video width is undefined");
    if (!(i != null && i.height)) throw new oe("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = i.width, t.height = i.height;
    const e = t.getContext("2d");
    if (!e) throw new oe("Cant take photo - cant create context");
    return e.drawImage(this.videoHandler.videoElement, 1676 + 4 * -419, 33 * -163 + -1 * -8291 + 364 * -8), { image: t, timestamp: Date.now() };
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
var Gt;
class m1 {
  constructor(i) {
    ne(this, Gt);
    $(this, Gt, i);
  }
  get videoElement() {
    return L(this, Gt);
  }
  async play(i) {
    L(this, Gt).srcObject = i, await L(this, Gt).play();
  }
  stop() {
    L(this, Gt).srcObject = null;
  }
  hasSrcObject() {
    return !!L(this, Gt).srcObject;
  }
}
Gt = new WeakMap();
function b1(x) {
  const i = At(null), t = At(), { handleError: e, setIsCameraReady: n } = Fn(), [o, r] = Qe(), a = Rt((c) => {
    r((d) => Yl(c, d));
  }, []);
  fe(() => ((async () => {
    if (!i.current) {
      e(new oe("Something went wrong during video initialization"));
      return;
    }
    const d = new m1(i.current), g = new Zc(), f = new h1(d, g);
    try {
      const u = {};
      u.facingMode = x, await f.startVideoStream(u);
    } catch (u) {
      if (u instanceof Error) {
        e(oe.fromCameraError(u));
        return;
      }
    }
    n(!0), a(f.getCameraResolution()), t.current = f;
  })(), function() {
    t.current && t.current.stopStreaming(), n(!1);
  }), [x, e, n, i, a]);
  const s = {};
  return s.cameraService = t.current, s.cameraResolution = o, s.onCameraResolutionChange = a, s.videoRef = i, s;
}
function A1(x, i) {
  fe(() => {
    if (!x.current) return;
    const t = new ResizeObserver((e) => {
      const [n] = e;
      g1(i, n.contentRect);
    });
    return t.observe(x.current), () => {
      t.disconnect();
    };
  }, [x, i]);
}
function y1(x) {
  return J0(Math.abs(x));
}
const W1 = () => {
  const [x, i] = Qe(null), t = At(new sr(8837 * 1 + -998 + -1 * 7834));
  function e(o) {
    const { z: r } = o.accelerationIncludingGravity || {};
    if (!r) return;
    t.current.pushFixed(y1(r));
    const a = J0(bc(t.current)), s = {};
    s.z = a, i(s);
  }
  fe(() => (window.addEventListener("devicemotion", jl(e, ml), !0), () => {
    window.removeEventListener("devicemotion", e, !0);
  }), []);
  const n = {};
  return n.acceleration = x, n;
};
var v1 = Symbol.for("preact-signals");
function cr() {
  if (K0 > -1465 * -1 + 25 * -139 + 1 * 2011)
    K0--;
  else {
    for (var x, i = !1; void (-1968 + -12 * -164) !== pn; ) {
      var t = pn;
      for (pn = void 0, So++; void (8814 + 1273 * 4 + -2 * 6953) !== t; ) {
        var e = t.o;
        if (t.o = void (-3331 + -1 * 6509 + 9840), t.f &= -(1489 * -1 + -3957 + 5449), !(-727 + 67 * 4 + 467 & t.f) && Rc(t)) try {
          t.c();
        } catch (n) {
          !i && (x = n, i = !(8219 + -1910 * 5 + 1331));
        }
        t = e;
      }
    }
    if (So = -89 * 103 + 67 * -118 + -63 * -271, K0--, i) throw x;
  }
}
var ie = void (8250 + 963 * 9 + 3 * -5639), pn = void (-4519 * 1 + -929 * -2 + 2661), K0 = 5533 + 1 * -5533, So = -5292 + -1268 * -3 + 1488, Yx = -1097 * 9 + -11 * 291 + 13074;
function Hc(x) {
  if (ie !== void 0) {
    var i = x.n;
    if (i === void 0 || i.t !== ie)
      return i = { i: 0, S: x, p: ie.s, n: void (-14 * 573 + -81 * -107 + -129 * 5), t: ie, e: void (13 * 321 + -3938 + -235 * 1), x: void (2151 * -1 + -8440 + 10591), r: i }, void (-2098 * 4 + 4368 + 8 * 503) !== ie.s && (ie.s.n = i), ie.s = i, x.n = i, 5195 + 179 * -43 + 2 * 1267 & ie.f && x.S(i), i;
    if (-(43 * 103 + 14 * 283 + -8390) === i.i)
      return i.i = 4681 * -2 + 361 * -26 + 109 * 172, void (1 * 3406 + 810 + -4216) !== i.n && (i.n.p = i.p, void (1354 + 1 * 4304 + -6 * 943) !== i.p && (i.p.n = i.n), i.p = ie.s, i.n = void (1582 * -5 + -6511 + -4807 * -3), ie.s.n = i, ie.s = i), i;
  }
}
function ve(x) {
  this.v = x, this.i = 6937 + 853 * -2 + -5231, this.n = void (3163 + -1 * -5441 + -8604), this.t = void (1 * 4133 + 1849 * 3 + -9680);
}
ve.prototype.brand = v1, ve.prototype.h = function() {
  return !(571 * 16 + 3394 + -12530);
}, ve.prototype.S = function(x) {
  this.t !== x && void (734 + 661 * -6 + 4 * 808) === x.e && (x.x = this.t, this.t !== void 0 && (this.t.e = x), this.t = x);
}, ve.prototype.U = function(x) {
  if (void (-1 * -5765 + 17 * 167 + -9 * 956) !== this.t) {
    var i = x.e, t = x.x;
    void (1249 * 5 + 8 * -621 + -1277) !== i && (i.x = t, x.e = void (5085 * -1 + 107 * 89 + 317 * -14)), void (-6397 + -1636 * 1 + 8033) !== t && (t.e = i, x.x = void (4119 + 5 * -805 + -94)), x === this.t && (this.t = t);
  }
}, ve.prototype.subscribe = function(x) {
  var i = this;
  return dr(function() {
    var t = i.value, e = ie;
    ie = void (1322 * 7 + 9329 + -18583);
    try {
      x(t);
    } finally {
      ie = e;
    }
  });
}, ve.prototype.valueOf = function() {
  return this.value;
}, ve.prototype.toString = function() {
  return this.value + "";
}, ve.prototype.toJSON = function() {
  return this.value;
}, ve.prototype.peek = function() {
  var x = ie;
  ie = void 0;
  try {
    return this.value;
  } finally {
    ie = x;
  }
}, Object.defineProperty(ve.prototype, "value", { get: function() {
  var x = Hc(this);
  return void (-2586 * 2 + 8136 + 26 * -114) !== x && (x.i = this.i), this.v;
}, set: function(x) {
  if (x !== this.v) {
    if (So > -2084 + 1 * -5608 + 1 * 7792) throw new Error("Cycle detected");
    this.v = x, this.i++, Yx++, K0++;
    try {
      for (var i = this.t; void (-3049 + 2111 * -1 + 1032 * 5) !== i; i = i.x) i.t.N();
    } finally {
      cr();
    }
  }
} });
function Kc(x) {
  return new ve(x);
}
function Rc(x) {
  for (var i = x.s; void (1 * 4271 + 1 * -1471 + -2800) !== i; i = i.n) if (i.S.i !== i.i || !i.S.h() || i.S.i !== i.i) return !(7 * 461 + 2778 * -3 + 1 * 5107);
  return !(-8435 + -1 * -2521 + -7 * -845);
}
function Pc(x) {
  for (var i = x.s; void (7065 + -471 * 15) !== i; i = i.n) {
    var t = i.S.n;
    if (void (-2993 + -4144 * -2 + 15 * -353) !== t && (i.r = t), i.S.n = i, i.i = -(-6619 * -1 + 8356 + -14974), void (-1 * -7687 + -6323 * -1 + -14010) === i.n) {
      x.s = i;
      break;
    }
  }
}
function Vc(x) {
  for (var i = x.s, t = void (6270 + -112 * -14 + 2 * -3919); void (4134 + 159 * -26) !== i; ) {
    var e = i.p;
    -(-9929 * -1 + -5179 * 1 + -3 * 1583) === i.i ? (i.S.U(i), void (14424 + 7212 * -2) !== e && (e.n = i.n), void (8363 * -1 + 4937 * 1 + -3426 * -1) !== i.n && (i.n.p = e)) : t = i, i.S.n = i.r, void (898 * -6 + -8511 * -1 + 3123 * -1) !== i.r && (i.r = void 0), i = e;
  }
  x.s = t;
}
function O0(x) {
  ve.call(this, void (-293 * 6 + -8012 + 5 * 1954)), this.x = x, this.s = void (-6780 + 1 * 6780), this.g = Yx - (-3955 + -11 * 859 + -5 * -2681), this.f = -12 * -707 + 3962 + -12442;
}
(O0.prototype = new ve()).h = function() {
  if (this.f &= -(875 * 8 + -7304 + 307), 1 * -317 + -3346 + 3664 & this.f) return !(-8659 * 1 + -8902 + 17562);
  if (-185 + 217 * 1 == (1 * -872 + 357 * 2 + -97 * -2 & this.f)) return !(8676 + -3625 * -1 + 12301 * -1);
  if (this.f &= -(-1061 * 5 + -210 * 26 + 10770), this.g === Yx) return !(-1770 + -690 * -3 + -300);
  if (this.g = Yx, this.f |= -1 * -3748 + -9772 + 1205 * 5, this.i > -32 * -5 + 7 * 53 + -531 && !Rc(this)) return this.f &= -(6971 * 1 + -5 * -557 + -9754), !(5578 + 1061 * 7 + -13005);
  var x = ie;
  try {
    Pc(this), ie = this;
    var i = this.x();
    (-9 * 684 + -2 * 4333 + -2473 * -6 & this.f || this.v !== i || this.i === 0) && (this.v = i, this.f &= -(29 * -82 + 1142 * -7 + 10389), this.i++);
  } catch (t) {
    this.v = t, this.f |= 809 * -10 + -228 + 8334, this.i++;
  }
  return ie = x, Vc(this), this.f &= -(10 * -941 + -1137 * -1 + 8275), !0;
}, O0.prototype.S = function(x) {
  if (void (-9585 + 2 * 938 + 7709) === this.t) {
    this.f |= 2355 * -3 + 33 * 160 + 1 * 1821;
    for (var i = this.s; i !== void 0; i = i.n) i.S.S(i);
  }
  ve.prototype.S.call(this, x);
}, O0.prototype.U = function(x) {
  if (this.t !== void 0 && (ve.prototype.U.call(this, x), void (-3300 + -3 * -1100) === this.t)) {
    this.f &= -(-7905 + -677 * -11 + 1 * 491);
    for (var i = this.s; void (1160 * -1 + -103 * -94 + -8522) !== i; i = i.n) i.S.U(i);
  }
}, O0.prototype.N = function() {
  if (!(8940 * 1 + 7961 + -16899 & this.f)) {
    this.f |= 2399 + -29 * -10 + -1 * 2683;
    for (var x = this.t; void (2863 + -1 * 7309 + 4446) !== x; x = x.x) x.t.N();
  }
}, Object.defineProperty(O0.prototype, "value", { get: function() {
  if (8013 + 637 * -3 + -6101 & this.f) throw new Error("Cycle detected");
  var x = Hc(this);
  if (this.h(), x !== void 0 && (x.i = this.i), 92 * -51 + -7 * 163 + 5849 & this.f) throw this.v;
  return this.v;
} });
function S1(x) {
  return new O0(x);
}
function Tc(x) {
  var i = x.u;
  if (x.u = void (2781 + -22 * -302 + -9425), typeof i == "function") {
    K0++;
    var t = ie;
    ie = void (535 * 3 + -1 * 701 + -904);
    try {
      i();
    } catch (e) {
      throw x.f &= -(1250 + 1082 * -3 + 6 * 333), x.f |= 6846 + -13 * 526, gr(x), e;
    } finally {
      ie = t, cr();
    }
  }
}
function gr(x) {
  for (var i = x.s; void (14907 + -14907 * 1) !== i; i = i.n) i.S.U(i);
  x.x = void (-257 + -3302 * 1 + 1 * 3559), x.s = void (-4037 * 1 + -1855 * 1 + 12 * 491), Tc(x);
}
function w1(x) {
  if (ie !== this) throw new Error("Out-of-order effect");
  Vc(this), ie = x, this.f &= -(8431 + 8429 * -1), 288 + 17 * -31 + 247 & this.f && gr(this), cr();
}
function gn(x) {
  this.x = x, this.u = void (-4671 + 6 * -478 + 7539), this.s = void (-3265 * 2 + -8588 + 15118), this.o = void (-37 * -234 + -8744 + 86), this.f = 143 * 52 + 1 * -7682 + 278;
}
gn.prototype.c = function() {
  var x = this.S();
  try {
    if (9503 + 4 * -1410 + -3855 & this.f || void (-13 * 277 + -5637 + 9238) === this.x) return;
    var i = this.x();
    typeof i == "function" && (this.u = i);
  } finally {
    x();
  }
}, gn.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= -440 * 5 + 8108 * 1 + -5907, this.f &= -(6330 + 4 * -11 + -6277), Tc(this), Pc(this), K0++;
  var x = ie;
  return ie = this, w1.bind(this, x);
}, gn.prototype.N = function() {
  !(10 * 685 + 4339 * -1 + -193 * 13 & this.f) && (this.f |= 3286 + 2 * -1642, this.o = pn, pn = this);
}, gn.prototype.d = function() {
  this.f |= 8, -119 * -81 + -462 + -9176 & this.f || gr(this);
};
function dr(x) {
  var i = new gn(x);
  try {
    i.c();
  } catch (t) {
    throw i.d(), t;
  }
  return i.d.bind(i);
}
var Xi;
function H0(x, i) {
  F[x] = i.bind(null, F[x] || function() {
  });
}
function cx(x) {
  Xi && Xi(), Xi = x && x.S();
}
function Ec(x) {
  var i = this, t = x.data, e = Lc(t);
  e.value = t;
  var n = Ue(function() {
    for (var o = i.__v; o = o.__; ) if (o.__c) {
      o.__c.__$f |= -58 * -169 + -1111 * 2 + 8 * -947;
      break;
    }
    return i.__$u.c = function() {
      var r;
      !us(n.peek()) && -5613 + 351 * 16 === ((r = i.base) == null ? void 0 : r.nodeType) ? i.base.data = n.peek() : (i.__$f |= -1218 + 2809 * 3 + 1 * -7208, i.setState({}));
    }, S1(function() {
      var r = e.value.value;
      return -64 * 14 + 8791 + 1579 * -5 === r ? 0 : !(-67 * 89 + 5733 + 230) === r ? "" : r || "";
    });
  }, []);
  return n.value;
}
Ec.displayName = "_st";
var wo = {};
wo.configurable = !(-699 + -8 * -713 + 5 * -1001), wo.value = void (341 * -1 + -24 * 9 + 557);
var Bo = {};
Bo.configurable = !(10125 + -3375 * 3), Bo.value = Ec;
var ko = {};
ko.configurable = !(1188 + 1 * -6187 + 4999), ko.get = function() {
  var x = {};
  return x.data = this, x;
};
var Go = {};
Go.configurable = !(1 * -8794 + 778 + 4008 * 2), Go.value = 1;
var xn = {};
xn.constructor = wo, xn.type = Bo, xn.props = ko, xn.__b = Go, Object.defineProperties(ve.prototype, xn), H0("__b", function(x, i) {
  if (typeof i.type == "string") {
    var t, e = i.props;
    for (var n in e) if (n !== "children") {
      var o = e[n];
      o instanceof ve && (t || (i.__np = t = {}), t[n] = o, e[n] = o.peek());
    }
  }
  x(i);
}), H0("__r", function(x, i) {
  cx();
  var t, e = i.__c;
  e && (e.__$f &= -(-113 * 9 + 1181 * -6 + -1621 * -5), void (-2 * -4034 + -4 * -2074 + -8182 * 2) === (t = e.__$u) && (e.__$u = t = function(n) {
    var o;
    return dr(function() {
      o = this;
    }), o.c = function() {
      e.__$f |= 8907 + -8906 * 1, e.setState({});
    }, o;
  }())), cx(t), x(i);
}), H0("__e", function(x, i, t, e) {
  cx(), x(i, t, e);
}), H0("diffed", function(x, i) {
  cx();
  var t;
  if (typeof i.type == "string" && (t = i.__e)) {
    var e = i.__np, n = i.props;
    if (e) {
      var o = t.U;
      if (o) for (var r in o) {
        var a = o[r];
        a !== void 0 && !(r in e) && (a.d(), o[r] = void (-3007 + 1532 * 3 + -1589));
      }
      else t.U = o = {};
      for (var s in e) {
        var c = o[s], d = e[s];
        void (7995 + -1619 * -5 + -16090) === c ? (c = B1(t, s, d, n), o[s] = c) : c.o(d, n);
      }
    }
  }
  x(i);
});
function B1(x, i, t, e) {
  var n = i in x && x.ownerSVGElement === void 0, o = Kc(t);
  return { o: function(r, a) {
    o.value = r, e = a;
  }, d: dr(function() {
    var r = o.value.value;
    e[i] !== r && (e[i] = r, n ? x[i] = r : r ? x.setAttribute(i, r) : x.removeAttribute(i));
  }) };
}
H0("unmount", function(x, i) {
  if (typeof i.type == "string") {
    var t = i.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void (18 * -382 + -728 + -3802 * -2);
        for (var n in e) {
          var o = e[n];
          o && o.d();
        }
      }
    }
  } else {
    var r = i.__c;
    if (r) {
      var a = r.__$u;
      a && (r.__$u = void (1 * -4373 + 16 * 461 + 273 * -11), a.d());
    }
  }
  x(i);
}), H0("__h", function(x, i, t, e) {
  (e < -4594 * -1 + -3865 * -2 + -12321 || 7 * 106 + -222 * -7 + -2287 === e) && (i.__$f |= -1682 + 1684 * 1), x(i, t, e);
}), xt.prototype.shouldComponentUpdate = function(x, i) {
  var t = this.__$u;
  if (!(t && void (-5263 + 277 * 19) !== t.s || 4 & this.__$f)) return !(1 * -4057 + 8524 + 1 * -4467);
  if (-1 * -6581 + -8577 + 1999 & this.__$f) return !0;
  for (var e in i) return !(-9447 + -9623 * -1 + -16 * 11);
  for (var n in x) if (n !== "__source" && x[n] !== this.props[n]) return !(15 * -1 + 4169 + 4154 * -1);
  for (var o in this.props) if (!(o in x)) return !0;
  return !(4912 + -2 * 104 + -4703);
};
function Lc(x) {
  return Ue(function() {
    return Kc(x);
  }, []);
}
const k1 = async () => WebAssembly.validate(new Uint8Array([109 + 109 * -1, -2895 + -4 * -748, 115, -463 * 9 + 3731 + 545, 835 + 1 * -834, 2604 + 28 * -93, 4 * -850 + 4651 * 2 + 227 * -26, 1 * 5011 + 6780 + -11791, 4487 + -14 * -657 + 6842 * -2, -3135 + -625 * -3 + -1265 * -1, -7530 + -2373 * 2 + 12277, -7966 * 1 + 9001 + 1 * -939, -14790 + -17 * -870, 5994 * 1 + 3417 + -10 * 941, -1 * -1974 + -4 * 1381 + 3673, -515 * -15 + 6 * 1537 + -8 * 2118, 8633 * -1 + -877 + -58 * -164, 4489 + 68 * -66, -905 * 1 + -1 * 3765 + -934 * -5, -3009 + 3019 * 1, -3 * -41 + -1 * 5258 + 5145 * 1, 1 * -2910 + -623 + 31 * 114, -851 + 701 * 7 + -184 * 22, -8407 + 58 * -57 + 11713, -340 + 2 * -821 + 2047, 0, -3623 + 3023 * -2 + 9922, 15, -9872 + -853 * 3 + 12684, -17 * 215 + 7503 + -5 * 750, -16485 + 4 * 4124]));
function G1() {
  const [x] = window.crypto.getRandomValues(new Uint32Array(1));
  return x.toString(-4590 + 213 * -13 + 7375);
}
function O1() {
  const x = sessionStorage.getItem("dot-user-id");
  if (x) return x;
  const i = G1();
  return sessionStorage.setItem("dot-user-id", i), i;
}
function Z1(x, i) {
  return i ? i === "user" ? "Front Camera" : "Back Camera" : x;
}
const Oo = {};
Oo.label = ">1m", Oo.time = 60;
const Zo = {};
Zo.label = ">45", Zo.time = 45;
const Ho = {};
Ho.label = ">30", Ho.time = 30;
function H1(x, i = [Oo, Zo, Ho]) {
  const t = i.sort((e, n) => n.time - e.time);
  for (const e of t)
    if (x > e.time) return e.label;
  return "" + x;
}
const K1 = (x) => Math.round(x / 500) * 500 / (688 * -5 + 6544 + -2104), Ea = (x) => x ? x <= 1 ? Math.round(x * (4427 * -2 + 109 + -8765 * -1)) / (9335 + -345 * 27) : Math.round(x / (-237 * 15 + -2304 + -311 * -19)) * (-8860 * -1 + -1543 + -7267) : -2132 + 6 * 885 + -3178, R1 = (x) => Math.round(x * (4210 * -1 + 6743 + 1 * -2531)) / 2;
function P1(x) {
  return x !== Je.RUNNING ? Ex.VISIBLE : Ex.VISIBLE_WITH_MASK;
}
async function V1() {
  return await k1() ? Za.SIMD : Za.NO_SIMD;
}
var Wn, oi;
class Dc {
  constructor(i) {
    ne(this, Wn, !0);
    ne(this, oi, Date.now());
    E(this, "analytics");
    E(this, "samVersion");
    E(this, "sessionToken");
    E(this, "onDetectionCallback");
    E(this, "onCaptureCallback");
    E(this, "createProtoMessage");
    E(this, "fpsOfAllImages", new sr(-9 * 773 + -8515 + 1 * 15502));
    E(this, "cameraService");
    E(this, "imageProcessor");
    this.cameraService = i.cameraService, this.imageProcessor = i.imageProcessor, this.analytics = i.analytics, this.samVersion = i.samVersion, this.sessionToken = i.sessionToken, this.createProtoMessage = i.createProtoMessage, this.onDetectionCallback = i.onDetectionCallback, this.onCaptureCallback = i.onCaptureCallback;
  }
  async run() {
    for (; L(this, Wn); )
      await this.iterate();
    return this;
  }
  stop() {
    $(this, Wn, !1);
  }
  async trackCaptureProcess(i, t) {
    var r;
    const e = Date.now(), n = bc(this.fpsOfAllImages), o = {};
    o.width = t.width, o.height = t.height, (r = this.analytics) == null || r.trackCaptureProcess({ detection: i, imageResolution: o, deviceName: await this.cameraService.getDeviceName(), averageFps: n, captureProcessDurationInMs: e - L(this, oi), facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await V1() });
  }
  onDetection(i, t) {
    this.onDetectionCallback({ ...i, samVersion: this.samVersion }, t);
  }
  async onCapture({ candidateSelectionImages: i, canvasImage: t, detection: e }) {
    const n = {};
    n.width = t.width, n.height = t.height;
    const o = n, r = await _l(t), a = await this.cameraService.getCameraProperties(), s = { ...a, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp() }, c = {};
    c.sessionToken = this.sessionToken, c.web = s;
    const d = c, g = await this.createProtoMessage(r, d), f = {};
    f.detection = e, f.imageResolution = o;
    const u = {};
    u.image = r, u.data = f;
    const p = u;
    this.stop();
    const b = {};
    b.imageData = p, b.protoMessage = g, b.webMetadata = s, b.candidateSelectionImages = i, this.onCaptureCallback(b);
  }
  getDetectionEndTime(i) {
    return Date.now() - i;
  }
  getInvalidInstructions(i, t) {
    const e = [];
    return Array.from(i).forEach(([n, o]) => {
      !o && e.push(t[n]);
    }), e;
  }
  async sleep(i) {
    await vo(Math.max(Ra.max - i, Ra.min));
  }
}
Wn = new WeakMap(), oi = new WeakMap();
class T1 extends Dc {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: e, instructionCodeMap: n, ...o }) {
    super(o);
    E(this, "candidateSelectionTime", -1917 + 1 * -1849 + 1883 * 2);
    E(this, "candidatesSelectionFramesCount", 2331 + -3 * 777);
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
    const o = this.getDetectionDetails(n);
    this.onDetection(o, t.image), this.isInCandidateSelection && this.candidateSelectionBegun();
    const r = {};
    r.instructionCode = o.processedImage.instructionCode, r.isValid = e.isValid, r.image = t.image, r.detection = e.detection, this.lastImage = r, await this.sleep(o.detectionTime);
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (e) {
      throw e instanceof Error ? oe.fromCameraError(e) : oe.fromError(e);
    }
  }
  saveBetterImage(t, e) {
    if (!(this.bestImage && e.isValid && this.isNewImageBetter(this.bestImage.detection, e.detection))) return;
    const o = {};
    o.image = t.image, o.detection = e.detection;
    const r = o;
    this.bestImage = r, this.candidateSelectionImages.push(r);
  }
  tryInitCandidatePhase(t, e) {
    var a;
    if (!(((a = this.lastImage) == null ? void 0 : a.isValid) && e.isValid)) return;
    const o = {};
    o.image = t.image, o.detection = e.detection;
    const r = o;
    this.isNewImageBetter(this.lastImage.detection, r.detection) ? this.bestImage = r : this.bestImage = this.lastImage, this.candidateSelectionImages.push(this.lastImage, r), this.isInCandidateSelection = !0;
  }
  candidateSelectionBegun() {
    this.candidateSelectionTime === -28 * -343 + 1 * 1111 + -10715 && (this.candidateSelectionTime = performance.now()), this.candidatesSelectionFramesCount++;
  }
  isCandidateSelectionDone() {
    const t = this.candidateSelectionTime && performance.now() - this.candidateSelectionTime;
    return this.candidatesSelectionFramesCount >= Fi.minFrames ? t > Fi.minDuration : t > Fi.maxDuration;
  }
  async onCandidateSelectionDone() {
    const { detection: t, image: e } = this.bestImage || {};
    if (e && t) this.trackCaptureProcess(t, e), await this.onCapture({ canvasImage: e, detection: t, candidateSelectionImages: this.candidateSelectionImages }), this.imageProcessor.reset();
    else throw new oe("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: t, takenPhoto: e }) {
    const n = this.getDetectionEndTime(e.timestamp), o = J0((-5 * -1709 + 71 * 89 + -1 * 13864) / n);
    this.fpsOfAllImages.pushFixed(o);
    const r = {};
    r.width = e.image.width, r.height = e.image.height;
    const a = r, s = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), c = {};
    c.isNewDetectionValid = t.isValid, c.newInvalidInstruction = s[3 * 1873 + 5860 + -883 * 13];
    const d = this.getInstructionCode(c), g = {};
    g.detection = t.detection, g.instructionCode = d, g.invalidValidators = s, g.isInCandidateSelection = this.isInCandidateSelection;
    const f = {};
    return f.processedImage = g, f.detectionTime = n, f.fps = o, f.resolution = a, f;
  }
  getInstructionCode({ isNewDetectionValid: t, newInvalidInstruction: e }) {
    var n;
    return this.isInCandidateSelection ? this.instructionCodeMap.CANDIDATE_SELECTION : (n = this.lastImage) != null && n.isValid && t ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && t ? this.lastImage.instructionCode : e ?? this.fallbackInstruction;
  }
  isNewImageBetter(t, e) {
    return e.sharpness > t.sharpness;
  }
}
var Ft, i0;
class E1 extends Dc {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: e, ...n }) {
    super(n);
    ne(this, Ft, void (-7127 * -1 + 9563 + -16690));
    ne(this, i0);
    E(this, "fallbackInstruction");
    E(this, "checkToInstructionCodeMap");
    this.fallbackInstruction = e, this.checkToInstructionCodeMap = t, this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(t) {
    var e, n;
    return (e = t.detail) != null && e["instruction"] ? Object.values(Ni).includes((n = t.detail) == null ? void 0 : n["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    $(this, i0, (t) => {
      var e;
      this.isRequestCaptureEventValid(t) && $(this, Ft, (e = t.detail) == null ? void 0 : e["instruction"]);
    }), document.addEventListener(Ga.REQUEST_CAPTURE, L(this, i0));
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
    return L(this, Ft) ? L(this, Ft) === Ni.FIRST_FRAME ? !0 : L(this, Ft) === Ni.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (e) {
      throw e instanceof Error ? oe.fromCameraError(e) : oe.fromError(e);
    }
  }
  async onCaptureDone(t, e) {
    this.trackCaptureProcess(e, t);
    const n = {};
    n.canvasImage = t, n.detection = e, n.candidateSelectionImages = [], await this.onCapture(n), $(this, Ft, void (-1818 + -3 * -606)), this.imageProcessor.reset();
  }
  getDetectionDetails(t, e) {
    const n = this.getDetectionEndTime(t.timestamp), o = J0((-9932 + -267 * 34 + 20010) / n);
    this.fpsOfAllImages.pushFixed(o);
    const r = {};
    r.width = t.image.width, r.height = t.image.height;
    const a = r, s = this.getInvalidInstructions(e.validationResult, this.checkToInstructionCodeMap), c = this.getInstructionCode(s[-9 * -75 + 8668 * 1 + 9343 * -1]), d = {};
    d.detection = e.detection, d.instructionCode = c, d.invalidValidators = s, d.isInCandidateSelection = !1;
    const g = {};
    return g.processedImage = d, g.detectionTime = n, g.fps = o, g.resolution = a, g;
  }
  getInstructionCode(t) {
    return t ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), L(this, i0) && document.removeEventListener(Ga.REQUEST_CAPTURE, L(this, i0));
  }
}
Ft = new WeakMap(), i0 = new WeakMap();
function L1({ captureMode: x, ...i }) {
  return x === uc.AUTO_CAPTURE ? new T1(i) : new E1(i);
}
function D1({ cameraResolution: x, cameraService: i, customEvent: t }) {
  const { shouldCameraMirror: e } = C1(t.CONTROL, i), n = {};
  n.cameraResolution = x, n.shouldCameraMirror = e, I1(t.CAMERA_PROPS_CHANGED, n), fe(() => () => {
    bn.getInstance().restart();
  }, []);
  const o = {};
  return o.shouldCameraMirror = e, o;
}
function N1({ cameraFacing: x, captureMode: i, checkToInstructionCodeMap: t, controller: e, createProtoMessage: n, customEvent: o, fallbackInstruction: r, instructionCodeMap: a, onCapture: s, onDetection: c, sessionToken: d }) {
  const { appState: g, handleAppStateChange: f } = Fn(), { sunfish: u } = Yn(), { analytics: p } = Qu(), { cameraResolution: b, cameraService: A, onCameraResolutionChange: l, videoRef: v } = b1(x), Z = {};
  Z.cameraResolution = b, Z.cameraService = A, Z.customEvent = o;
  const { shouldCameraMirror: M } = D1(Z), X = Lc(void 0), J = Rt((Q) => {
    f(Je.WAITING), s(Q);
  }, [s, f]), K = Rt((Q, te) => {
    l(Q.resolution), X.value = Q, c(Q, te);
  }, [c, X, l]);
  fe(() => {
    A != null && A["isStreaming"] && (e != null && e["isDetectorInitialized"]) && u && f(Je.RUNNING);
  }, [A == null ? void 0 : A["isStreaming"], e == null ? void 0 : e["isDetectorInitialized"], f, u]), fe(() => {
    if (g !== Je.RUNNING) return;
    if (!A || !e) throw new oe("Cannot start detection");
    const Q = {};
    Q.captureMode = i, Q.analytics = p, Q.cameraService = A, Q.imageProcessor = e.imageProcessor, Q.fallbackInstruction = r, Q.instructionCodeMap = a, Q.checkToInstructionCodeMap = t, Q.sessionToken = d, Q.samVersion = e.samVersion, Q.createProtoMessage = n, Q.onCaptureCallback = J, Q.onDetectionCallback = K;
    const te = L1(Q);
    return e.runDetectionLoop(te), () => {
      e.stopDetectionLoop();
    };
  }, [g, e, A, J, K, d, X, p, n, a, t, r, i]);
  const re = {};
  return re.videoRef = v, re.cameraResolution = b, re.detectionDetails = X, re.shouldCameraMirror = M, re;
}
var zt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Nc = {}, La = {}, F1 = Y1;
function Y1(x, i) {
  for (var t = new Array(arguments.length - 1), e = 0, n = 2, o = !0; n < arguments.length; )
    t[e++] = arguments[n++];
  return new Promise(function(r, a) {
    t[e] = function(s) {
      if (o)
        if (o = !1, s)
          a(s);
        else {
          for (var c = new Array(arguments.length - 1), d = 0; d < c.length; )
            c[d++] = arguments[d];
          r.apply(null, c);
        }
    };
    try {
      x.apply(i || null, t);
    } catch (s) {
      o && (o = !1, a(s));
    }
  });
}
var Fc = {};
(function(x) {
  var i = x;
  i.length = function(r) {
    var a = r.length;
    if (!a)
      return 0;
    for (var s = 0; --a % 4 > 1 && r.charAt(a) === "="; )
      ++s;
    return Math.ceil(r.length * 3) / 4 - s;
  };
  for (var t = new Array(64), e = new Array(123), n = 0; n < 64; )
    e[t[n] = n < 26 ? n + 65 : n < 52 ? n + 71 : n < 62 ? n - 4 : n - 59 | 43] = n++;
  i.encode = function(r, a, s) {
    for (var c = null, d = [], g = 0, f = 0, u; a < s; ) {
      var p = r[a++];
      switch (f) {
        case 0:
          d[g++] = t[p >> 2], u = (p & 3) << 4, f = 1;
          break;
        case 1:
          d[g++] = t[u | p >> 4], u = (p & 15) << 2, f = 2;
          break;
        case 2:
          d[g++] = t[u | p >> 6], d[g++] = t[p & 63], f = 0;
          break;
      }
      g > 8191 && ((c || (c = [])).push(String.fromCharCode.apply(String, d)), g = 0);
    }
    return f && (d[g++] = t[u], d[g++] = 61, f === 1 && (d[g++] = 61)), c ? (g && c.push(String.fromCharCode.apply(String, d.slice(0, g))), c.join("")) : String.fromCharCode.apply(String, d.slice(0, g));
  };
  var o = "invalid encoding";
  i.decode = function(r, a, s) {
    for (var c = s, d = 0, g, f = 0; f < r.length; ) {
      var u = r.charCodeAt(f++);
      if (u === 61 && d > 1)
        break;
      if ((u = e[u]) === void 0)
        throw Error(o);
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
      throw Error(o);
    return s - c;
  }, i.test = function(r) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(r);
  };
})(Fc);
var j1 = hi;
function hi() {
  this._listeners = {};
}
hi.prototype.on = function(x, i, t) {
  return (this._listeners[x] || (this._listeners[x] = [])).push({
    fn: i,
    ctx: t || this
  }), this;
};
hi.prototype.off = function(x, i) {
  if (x === void 0)
    this._listeners = {};
  else if (i === void 0)
    this._listeners[x] = [];
  else
    for (var t = this._listeners[x], e = 0; e < t.length; )
      t[e].fn === i ? t.splice(e, 1) : ++e;
  return this;
};
hi.prototype.emit = function(x) {
  var i = this._listeners[x];
  if (i) {
    for (var t = [], e = 1; e < arguments.length; )
      t.push(arguments[e++]);
    for (e = 0; e < i.length; )
      i[e].fn.apply(i[e++].ctx, t);
  }
  return this;
};
var M1 = Da(Da);
function Da(x) {
  return typeof Float32Array < "u" ? function() {
    var i = new Float32Array([-0]), t = new Uint8Array(i.buffer), e = t[3] === 128;
    function n(s, c, d) {
      i[0] = s, c[d] = t[0], c[d + 1] = t[1], c[d + 2] = t[2], c[d + 3] = t[3];
    }
    function o(s, c, d) {
      i[0] = s, c[d] = t[3], c[d + 1] = t[2], c[d + 2] = t[1], c[d + 3] = t[0];
    }
    x.writeFloatLE = e ? n : o, x.writeFloatBE = e ? o : n;
    function r(s, c) {
      return t[0] = s[c], t[1] = s[c + 1], t[2] = s[c + 2], t[3] = s[c + 3], i[0];
    }
    function a(s, c) {
      return t[3] = s[c], t[2] = s[c + 1], t[1] = s[c + 2], t[0] = s[c + 3], i[0];
    }
    x.readFloatLE = e ? r : a, x.readFloatBE = e ? a : r;
  }() : function() {
    function i(e, n, o, r) {
      var a = n < 0 ? 1 : 0;
      if (a && (n = -n), n === 0)
        e(1 / n > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), o, r);
      else if (isNaN(n))
        e(2143289344, o, r);
      else if (n > 34028234663852886e22)
        e((a << 31 | 2139095040) >>> 0, o, r);
      else if (n < 11754943508222875e-54)
        e((a << 31 | Math.round(n / 1401298464324817e-60)) >>> 0, o, r);
      else {
        var s = Math.floor(Math.log(n) / Math.LN2), c = Math.round(n * Math.pow(2, -s) * 8388608) & 8388607;
        e((a << 31 | s + 127 << 23 | c) >>> 0, o, r);
      }
    }
    x.writeFloatLE = i.bind(null, Na), x.writeFloatBE = i.bind(null, Fa);
    function t(e, n, o) {
      var r = e(n, o), a = (r >> 31) * 2 + 1, s = r >>> 23 & 255, c = r & 8388607;
      return s === 255 ? c ? NaN : a * (1 / 0) : s === 0 ? a * 1401298464324817e-60 * c : a * Math.pow(2, s - 150) * (c + 8388608);
    }
    x.readFloatLE = t.bind(null, Ya), x.readFloatBE = t.bind(null, ja);
  }(), typeof Float64Array < "u" ? function() {
    var i = new Float64Array([-0]), t = new Uint8Array(i.buffer), e = t[7] === 128;
    function n(s, c, d) {
      i[0] = s, c[d] = t[0], c[d + 1] = t[1], c[d + 2] = t[2], c[d + 3] = t[3], c[d + 4] = t[4], c[d + 5] = t[5], c[d + 6] = t[6], c[d + 7] = t[7];
    }
    function o(s, c, d) {
      i[0] = s, c[d] = t[7], c[d + 1] = t[6], c[d + 2] = t[5], c[d + 3] = t[4], c[d + 4] = t[3], c[d + 5] = t[2], c[d + 6] = t[1], c[d + 7] = t[0];
    }
    x.writeDoubleLE = e ? n : o, x.writeDoubleBE = e ? o : n;
    function r(s, c) {
      return t[0] = s[c], t[1] = s[c + 1], t[2] = s[c + 2], t[3] = s[c + 3], t[4] = s[c + 4], t[5] = s[c + 5], t[6] = s[c + 6], t[7] = s[c + 7], i[0];
    }
    function a(s, c) {
      return t[7] = s[c], t[6] = s[c + 1], t[5] = s[c + 2], t[4] = s[c + 3], t[3] = s[c + 4], t[2] = s[c + 5], t[1] = s[c + 6], t[0] = s[c + 7], i[0];
    }
    x.readDoubleLE = e ? r : a, x.readDoubleBE = e ? a : r;
  }() : function() {
    function i(e, n, o, r, a, s) {
      var c = r < 0 ? 1 : 0;
      if (c && (r = -r), r === 0)
        e(0, a, s + n), e(1 / r > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), a, s + o);
      else if (isNaN(r))
        e(0, a, s + n), e(2146959360, a, s + o);
      else if (r > 17976931348623157e292)
        e(0, a, s + n), e((c << 31 | 2146435072) >>> 0, a, s + o);
      else {
        var d;
        if (r < 22250738585072014e-324)
          d = r / 5e-324, e(d >>> 0, a, s + n), e((c << 31 | d / 4294967296) >>> 0, a, s + o);
        else {
          var g = Math.floor(Math.log(r) / Math.LN2);
          g === 1024 && (g = 1023), d = r * Math.pow(2, -g), e(d * 4503599627370496 >>> 0, a, s + n), e((c << 31 | g + 1023 << 20 | d * 1048576 & 1048575) >>> 0, a, s + o);
        }
      }
    }
    x.writeDoubleLE = i.bind(null, Na, 0, 4), x.writeDoubleBE = i.bind(null, Fa, 4, 0);
    function t(e, n, o, r, a) {
      var s = e(r, a + n), c = e(r, a + o), d = (c >> 31) * 2 + 1, g = c >>> 20 & 2047, f = 4294967296 * (c & 1048575) + s;
      return g === 2047 ? f ? NaN : d * (1 / 0) : g === 0 ? d * 5e-324 * f : d * Math.pow(2, g - 1075) * (f + 4503599627370496);
    }
    x.readDoubleLE = t.bind(null, Ya, 0, 4), x.readDoubleBE = t.bind(null, ja, 4, 0);
  }(), x;
}
function Na(x, i, t) {
  i[t] = x & 255, i[t + 1] = x >>> 8 & 255, i[t + 2] = x >>> 16 & 255, i[t + 3] = x >>> 24;
}
function Fa(x, i, t) {
  i[t] = x >>> 24, i[t + 1] = x >>> 16 & 255, i[t + 2] = x >>> 8 & 255, i[t + 3] = x & 255;
}
function Ya(x, i) {
  return (x[i] | x[i + 1] << 8 | x[i + 2] << 16 | x[i + 3] << 24) >>> 0;
}
function ja(x, i) {
  return (x[i] << 24 | x[i + 1] << 16 | x[i + 2] << 8 | x[i + 3]) >>> 0;
}
function Ma(x) {
  throw new Error('Could not dynamically require "' + x + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var X1 = _1;
function _1(x) {
  try {
    if (typeof Ma != "function")
      return null;
    var i = Ma(x);
    return i && (i.length || Object.keys(i).length) ? i : null;
  } catch {
    return null;
  }
}
var Yc = {};
(function(x) {
  var i = x;
  i.length = function(t) {
    for (var e = 0, n = 0, o = 0; o < t.length; ++o)
      n = t.charCodeAt(o), n < 128 ? e += 1 : n < 2048 ? e += 2 : (n & 64512) === 55296 && (t.charCodeAt(o + 1) & 64512) === 56320 ? (++o, e += 4) : e += 3;
    return e;
  }, i.read = function(t, e, n) {
    var o = n - e;
    if (o < 1)
      return "";
    for (var r = null, a = [], s = 0, c; e < n; )
      c = t[e++], c < 128 ? a[s++] = c : c > 191 && c < 224 ? a[s++] = (c & 31) << 6 | t[e++] & 63 : c > 239 && c < 365 ? (c = ((c & 7) << 18 | (t[e++] & 63) << 12 | (t[e++] & 63) << 6 | t[e++] & 63) - 65536, a[s++] = 55296 + (c >> 10), a[s++] = 56320 + (c & 1023)) : a[s++] = (c & 15) << 12 | (t[e++] & 63) << 6 | t[e++] & 63, s > 8191 && ((r || (r = [])).push(String.fromCharCode.apply(String, a)), s = 0);
    return r ? (s && r.push(String.fromCharCode.apply(String, a.slice(0, s))), r.join("")) : String.fromCharCode.apply(String, a.slice(0, s));
  }, i.write = function(t, e, n) {
    for (var o = n, r, a, s = 0; s < t.length; ++s)
      r = t.charCodeAt(s), r < 128 ? e[n++] = r : r < 2048 ? (e[n++] = r >> 6 | 192, e[n++] = r & 63 | 128) : (r & 64512) === 55296 && ((a = t.charCodeAt(s + 1)) & 64512) === 56320 ? (r = 65536 + ((r & 1023) << 10) + (a & 1023), ++s, e[n++] = r >> 18 | 240, e[n++] = r >> 12 & 63 | 128, e[n++] = r >> 6 & 63 | 128, e[n++] = r & 63 | 128) : (e[n++] = r >> 12 | 224, e[n++] = r >> 6 & 63 | 128, e[n++] = r & 63 | 128);
    return n - o;
  };
})(Yc);
var J1 = Q1;
function Q1(x, i, t) {
  var e = t || 8192, n = e >>> 1, o = null, r = e;
  return function(a) {
    if (a < 1 || a > n)
      return x(a);
    r + a > e && (o = x(e), r = 0);
    var s = i.call(o, r, r += a);
    return r & 7 && (r = (r | 7) + 1), s;
  };
}
var _i, Xa;
function U1() {
  if (Xa)
    return _i;
  Xa = 1, _i = i;
  var x = C0();
  function i(o, r) {
    this.lo = o >>> 0, this.hi = r >>> 0;
  }
  var t = i.zero = new i(0, 0);
  t.toNumber = function() {
    return 0;
  }, t.zzEncode = t.zzDecode = function() {
    return this;
  }, t.length = function() {
    return 1;
  };
  var e = i.zeroHash = "\0\0\0\0\0\0\0\0";
  i.fromNumber = function(o) {
    if (o === 0)
      return t;
    var r = o < 0;
    r && (o = -o);
    var a = o >>> 0, s = (o - a) / 4294967296 >>> 0;
    return r && (s = ~s >>> 0, a = ~a >>> 0, ++a > 4294967295 && (a = 0, ++s > 4294967295 && (s = 0))), new i(a, s);
  }, i.from = function(o) {
    if (typeof o == "number")
      return i.fromNumber(o);
    if (x.isString(o))
      if (x.Long)
        o = x.Long.fromString(o);
      else
        return i.fromNumber(parseInt(o, 10));
    return o.low || o.high ? new i(o.low >>> 0, o.high >>> 0) : t;
  }, i.prototype.toNumber = function(o) {
    if (!o && this.hi >>> 31) {
      var r = ~this.lo + 1 >>> 0, a = ~this.hi >>> 0;
      return r || (a = a + 1 >>> 0), -(r + a * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  }, i.prototype.toLong = function(o) {
    return x.Long ? new x.Long(this.lo | 0, this.hi | 0, !!o) : { low: this.lo | 0, high: this.hi | 0, unsigned: !!o };
  };
  var n = String.prototype.charCodeAt;
  return i.fromHash = function(o) {
    return o === e ? t : new i(
      (n.call(o, 0) | n.call(o, 1) << 8 | n.call(o, 2) << 16 | n.call(o, 3) << 24) >>> 0,
      (n.call(o, 4) | n.call(o, 5) << 8 | n.call(o, 6) << 16 | n.call(o, 7) << 24) >>> 0
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
    var o = this.hi >> 31;
    return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ o) >>> 0, this.lo = (this.lo << 1 ^ o) >>> 0, this;
  }, i.prototype.zzDecode = function() {
    var o = -(this.lo & 1);
    return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ o) >>> 0, this.hi = (this.hi >>> 1 ^ o) >>> 0, this;
  }, i.prototype.length = function() {
    var o = this.lo, r = (this.lo >>> 28 | this.hi << 4) >>> 0, a = this.hi >>> 24;
    return a === 0 ? r === 0 ? o < 16384 ? o < 128 ? 1 : 2 : o < 2097152 ? 3 : 4 : r < 16384 ? r < 128 ? 5 : 6 : r < 2097152 ? 7 : 8 : a < 128 ? 9 : 10;
  }, _i;
}
var _a;
function C0() {
  return _a || (_a = 1, function(x) {
    var i = x;
    i.asPromise = F1, i.base64 = Fc, i.EventEmitter = j1, i.float = M1, i.inquire = X1, i.utf8 = Yc, i.pool = J1, i.LongBits = U1(), i.isNode = !!(typeof zt < "u" && zt && zt.process && zt.process.versions && zt.process.versions.node), i.global = i.isNode && zt || typeof window < "u" && window || typeof self < "u" && self || zt, i.emptyArray = Object.freeze ? Object.freeze([]) : (
      /* istanbul ignore next */
      []
    ), i.emptyObject = Object.freeze ? Object.freeze({}) : (
      /* istanbul ignore next */
      {}
    ), i.isInteger = Number.isInteger || /* istanbul ignore next */
    function(n) {
      return typeof n == "number" && isFinite(n) && Math.floor(n) === n;
    }, i.isString = function(n) {
      return typeof n == "string" || n instanceof String;
    }, i.isObject = function(n) {
      return n && typeof n == "object";
    }, i.isset = /**
    * Checks if a property on a message is considered to be present.
    * @param {Object} obj Plain object or message instance
    * @param {string} prop Property name
    * @returns {boolean} `true` if considered to be present, otherwise `false`
    */
    i.isSet = function(n, o) {
      var r = n[o];
      return r != null && n.hasOwnProperty(o) ? typeof r != "object" || (Array.isArray(r) ? r.length : Object.keys(r).length) > 0 : !1;
    }, i.Buffer = function() {
      try {
        var n = i.inquire("buffer").Buffer;
        return n.prototype.utf8Write ? n : (
          /* istanbul ignore next */
          null
        );
      } catch {
        return null;
      }
    }(), i._Buffer_from = null, i._Buffer_allocUnsafe = null, i.newBuffer = function(n) {
      return typeof n == "number" ? i.Buffer ? i._Buffer_allocUnsafe(n) : new i.Array(n) : i.Buffer ? i._Buffer_from(n) : typeof Uint8Array > "u" ? n : new Uint8Array(n);
    }, i.Array = typeof Uint8Array < "u" ? Uint8Array : Array, i.Long = /* istanbul ignore next */
    i.global.dcodeIO && /* istanbul ignore next */
    i.global.dcodeIO.Long || /* istanbul ignore next */
    i.global.Long || i.inquire("long"), i.key2Re = /^true|false|0|1$/, i.key32Re = /^-?(?:0|[1-9][0-9]*)$/, i.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, i.longToHash = function(n) {
      return n ? i.LongBits.from(n).toHash() : i.LongBits.zeroHash;
    }, i.longFromHash = function(n, o) {
      var r = i.LongBits.fromHash(n);
      return i.Long ? i.Long.fromBits(r.lo, r.hi, o) : r.toNumber(!!o);
    };
    function t(n, o, r) {
      for (var a = Object.keys(o), s = 0; s < a.length; ++s)
        (n[a[s]] === void 0 || !r) && (n[a[s]] = o[a[s]]);
      return n;
    }
    i.merge = t, i.lcFirst = function(n) {
      return n.charAt(0).toLowerCase() + n.substring(1);
    };
    function e(n) {
      function o(r, a) {
        if (!(this instanceof o))
          return new o(r, a);
        Object.defineProperty(this, "message", { get: function() {
          return r;
        } }), Error.captureStackTrace ? Error.captureStackTrace(this, o) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), a && t(this, a);
      }
      return o.prototype = Object.create(Error.prototype, {
        constructor: {
          value: o,
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
      }), o;
    }
    i.newError = e, i.ProtocolError = e("ProtocolError"), i.oneOfGetter = function(n) {
      for (var o = {}, r = 0; r < n.length; ++r)
        o[n[r]] = 1;
      return function() {
        for (var a = Object.keys(this), s = a.length - 1; s > -1; --s)
          if (o[a[s]] === 1 && this[a[s]] !== void 0 && this[a[s]] !== null)
            return a[s];
      };
    }, i.oneOfSetter = function(n) {
      return function(o) {
        for (var r = 0; r < n.length; ++r)
          n[r] !== o && delete this[n[r]];
      };
    }, i.toJSONOptions = {
      longs: String,
      enums: String,
      bytes: String,
      json: !0
    }, i._configure = function() {
      var n = i.Buffer;
      if (!n) {
        i._Buffer_from = i._Buffer_allocUnsafe = null;
        return;
      }
      i._Buffer_from = n.from !== Uint8Array.from && n.from || /* istanbul ignore next */
      function(o, r) {
        return new n(o, r);
      }, i._Buffer_allocUnsafe = n.allocUnsafe || /* istanbul ignore next */
      function(o) {
        return new n(o);
      };
    };
  }(La)), La;
}
var jc = U, it = C0(), Ko, mi = it.LongBits, Ja = it.base64, Qa = it.utf8;
function jn(x, i, t) {
  this.fn = x, this.len = i, this.next = void 0, this.val = t;
}
function ur() {
}
function z1(x) {
  this.head = x.head, this.tail = x.tail, this.len = x.len, this.next = x.states;
}
function U() {
  this.len = 0, this.head = new jn(ur, 0, 0), this.tail = this.head, this.states = null;
}
var Mc = function() {
  return it.Buffer ? function() {
    return (U.create = function() {
      return new Ko();
    })();
  } : function() {
    return new U();
  };
};
U.create = Mc();
U.alloc = function(x) {
  return new it.Array(x);
};
it.Array !== Array && (U.alloc = it.pool(U.alloc, it.Array.prototype.subarray));
U.prototype._push = function(x, i, t) {
  return this.tail = this.tail.next = new jn(x, i, t), this.len += i, this;
};
function lr(x, i, t) {
  i[t] = x & 255;
}
function q1(x, i, t) {
  for (; x > 127; )
    i[t++] = x & 127 | 128, x >>>= 7;
  i[t] = x;
}
function Ir(x, i) {
  this.len = x, this.next = void 0, this.val = i;
}
Ir.prototype = Object.create(jn.prototype);
Ir.prototype.fn = q1;
U.prototype.uint32 = function(x) {
  return this.len += (this.tail = this.tail.next = new Ir(
    (x = x >>> 0) < 128 ? 1 : x < 16384 ? 2 : x < 2097152 ? 3 : x < 268435456 ? 4 : 5,
    x
  )).len, this;
};
U.prototype.int32 = function(x) {
  return x < 0 ? this._push(fr, 10, mi.fromNumber(x)) : this.uint32(x);
};
U.prototype.sint32 = function(x) {
  return this.uint32((x << 1 ^ x >> 31) >>> 0);
};
function fr(x, i, t) {
  for (; x.hi; )
    i[t++] = x.lo & 127 | 128, x.lo = (x.lo >>> 7 | x.hi << 25) >>> 0, x.hi >>>= 7;
  for (; x.lo > 127; )
    i[t++] = x.lo & 127 | 128, x.lo = x.lo >>> 7;
  i[t++] = x.lo;
}
U.prototype.uint64 = function(x) {
  var i = mi.from(x);
  return this._push(fr, i.length(), i);
};
U.prototype.int64 = U.prototype.uint64;
U.prototype.sint64 = function(x) {
  var i = mi.from(x).zzEncode();
  return this._push(fr, i.length(), i);
};
U.prototype.bool = function(x) {
  return this._push(lr, 1, x ? 1 : 0);
};
function Ro(x, i, t) {
  i[t] = x & 255, i[t + 1] = x >>> 8 & 255, i[t + 2] = x >>> 16 & 255, i[t + 3] = x >>> 24;
}
U.prototype.fixed32 = function(x) {
  return this._push(Ro, 4, x >>> 0);
};
U.prototype.sfixed32 = U.prototype.fixed32;
U.prototype.fixed64 = function(x) {
  var i = mi.from(x);
  return this._push(Ro, 4, i.lo)._push(Ro, 4, i.hi);
};
U.prototype.sfixed64 = U.prototype.fixed64;
U.prototype.float = function(x) {
  return this._push(it.float.writeFloatLE, 4, x);
};
U.prototype.double = function(x) {
  return this._push(it.float.writeDoubleLE, 8, x);
};
var $1 = it.Array.prototype.set ? function(x, i, t) {
  i.set(x, t);
} : function(x, i, t) {
  for (var e = 0; e < x.length; ++e)
    i[t + e] = x[e];
};
U.prototype.bytes = function(x) {
  var i = x.length >>> 0;
  if (!i)
    return this._push(lr, 1, 0);
  if (it.isString(x)) {
    var t = U.alloc(i = Ja.length(x));
    Ja.decode(x, t, 0), x = t;
  }
  return this.uint32(i)._push($1, i, x);
};
U.prototype.string = function(x) {
  var i = Qa.length(x);
  return i ? this.uint32(i)._push(Qa.write, i, x) : this._push(lr, 1, 0);
};
U.prototype.fork = function() {
  return this.states = new z1(this), this.head = this.tail = new jn(ur, 0, 0), this.len = 0, this;
};
U.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new jn(ur, 0, 0), this.len = 0), this;
};
U.prototype.ldelim = function() {
  var x = this.head, i = this.tail, t = this.len;
  return this.reset().uint32(t), t && (this.tail.next = x.next, this.tail = i, this.len += t), this;
};
U.prototype.finish = function() {
  for (var x = this.head.next, i = this.constructor.alloc(this.len), t = 0; x; )
    x.fn(x.val, i, t), t += x.len, x = x.next;
  return i;
};
U._configure = function(x) {
  Ko = x, U.create = Mc(), Ko._configure();
};
var eI = bt, Xc = jc;
(bt.prototype = Object.create(Xc.prototype)).constructor = bt;
var Yt = C0();
function bt() {
  Xc.call(this);
}
bt._configure = function() {
  bt.alloc = Yt._Buffer_allocUnsafe, bt.writeBytesBuffer = Yt.Buffer && Yt.Buffer.prototype instanceof Uint8Array && Yt.Buffer.prototype.set.name === "set" ? function(x, i, t) {
    i.set(x, t);
  } : function(x, i, t) {
    if (x.copy)
      x.copy(i, t, 0, x.length);
    else
      for (var e = 0; e < x.length; )
        i[t++] = x[e++];
  };
};
bt.prototype.bytes = function(x) {
  Yt.isString(x) && (x = Yt._Buffer_from(x, "base64"));
  var i = x.length >>> 0;
  return this.uint32(i), i && this._push(bt.writeBytesBuffer, i, x), this;
};
function tI(x, i, t) {
  x.length < 40 ? Yt.utf8.write(x, i, t) : i.utf8Write ? i.utf8Write(x, t) : i.write(x, t);
}
bt.prototype.string = function(x) {
  var i = Yt.Buffer.byteLength(x);
  return this.uint32(i), i && this._push(tI, i, x), this;
};
bt._configure();
var _c = Ce, yt = C0(), Po, Jc = yt.LongBits, nI = yt.utf8;
function lt(x, i) {
  return RangeError("index out of range: " + x.pos + " + " + (i || 1) + " > " + x.len);
}
function Ce(x) {
  this.buf = x, this.pos = 0, this.len = x.length;
}
var Ua = typeof Uint8Array < "u" ? function(x) {
  if (x instanceof Uint8Array || Array.isArray(x))
    return new Ce(x);
  throw Error("illegal buffer");
} : function(x) {
  if (Array.isArray(x))
    return new Ce(x);
  throw Error("illegal buffer");
}, Qc = function() {
  return yt.Buffer ? function(x) {
    return (Ce.create = function(i) {
      return yt.Buffer.isBuffer(i) ? new Po(i) : Ua(i);
    })(x);
  } : Ua;
};
Ce.create = Qc();
Ce.prototype._slice = yt.Array.prototype.subarray || /* istanbul ignore next */
yt.Array.prototype.slice;
Ce.prototype.uint32 = /* @__PURE__ */ function() {
  var x = 4294967295;
  return function() {
    if (x = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (x = (x | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return x;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, lt(this, 10);
    return x;
  };
}();
Ce.prototype.int32 = function() {
  return this.uint32() | 0;
};
Ce.prototype.sint32 = function() {
  var x = this.uint32();
  return x >>> 1 ^ -(x & 1) | 0;
};
function Ji() {
  var x = new Jc(0, 0), i = 0;
  if (this.len - this.pos > 4) {
    for (; i < 4; ++i)
      if (x.lo = (x.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0, this.buf[this.pos++] < 128)
        return x;
    if (x.lo = (x.lo | (this.buf[this.pos] & 127) << 28) >>> 0, x.hi = (x.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
      return x;
    i = 0;
  } else {
    for (; i < 3; ++i) {
      if (this.pos >= this.len)
        throw lt(this);
      if (x.lo = (x.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0, this.buf[this.pos++] < 128)
        return x;
    }
    return x.lo = (x.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0, x;
  }
  if (this.len - this.pos > 4) {
    for (; i < 5; ++i)
      if (x.hi = (x.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return x;
  } else
    for (; i < 5; ++i) {
      if (this.pos >= this.len)
        throw lt(this);
      if (x.hi = (x.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return x;
    }
  throw Error("invalid varint encoding");
}
Ce.prototype.bool = function() {
  return this.uint32() !== 0;
};
function jx(x, i) {
  return (x[i - 4] | x[i - 3] << 8 | x[i - 2] << 16 | x[i - 1] << 24) >>> 0;
}
Ce.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw lt(this, 4);
  return jx(this.buf, this.pos += 4);
};
Ce.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw lt(this, 4);
  return jx(this.buf, this.pos += 4) | 0;
};
function za() {
  if (this.pos + 8 > this.len)
    throw lt(this, 8);
  return new Jc(jx(this.buf, this.pos += 4), jx(this.buf, this.pos += 4));
}
Ce.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw lt(this, 4);
  var x = yt.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, x;
};
Ce.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw lt(this, 4);
  var x = yt.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, x;
};
Ce.prototype.bytes = function() {
  var x = this.uint32(), i = this.pos, t = this.pos + x;
  if (t > this.len)
    throw lt(this, x);
  return this.pos += x, Array.isArray(this.buf) ? this.buf.slice(i, t) : i === t ? new this.buf.constructor(0) : this._slice.call(this.buf, i, t);
};
Ce.prototype.string = function() {
  var x = this.bytes();
  return nI.read(x, 0, x.length);
};
Ce.prototype.skip = function(x) {
  if (typeof x == "number") {
    if (this.pos + x > this.len)
      throw lt(this, x);
    this.pos += x;
  } else
    do
      if (this.pos >= this.len)
        throw lt(this);
    while (this.buf[this.pos++] & 128);
  return this;
};
Ce.prototype.skipType = function(x) {
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
Ce._configure = function(x) {
  Po = x, Ce.create = Qc(), Po._configure();
  var i = yt.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  yt.merge(Ce.prototype, {
    int64: function() {
      return Ji.call(this)[i](!1);
    },
    uint64: function() {
      return Ji.call(this)[i](!0);
    },
    sint64: function() {
      return Ji.call(this).zzDecode()[i](!1);
    },
    fixed64: function() {
      return za.call(this)[i](!0);
    },
    sfixed64: function() {
      return za.call(this)[i](!1);
    }
  });
};
var xI = I0, Uc = _c;
(I0.prototype = Object.create(Uc.prototype)).constructor = I0;
var qa = C0();
function I0(x) {
  Uc.call(this, x);
}
I0._configure = function() {
  qa.Buffer && (I0.prototype._slice = qa.Buffer.prototype.slice);
};
I0.prototype.string = function() {
  var x = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + x, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + x, this.len));
};
I0._configure();
var zc = {}, iI = An, Cr = C0();
(An.prototype = Object.create(Cr.EventEmitter.prototype)).constructor = An;
function An(x, i, t) {
  if (typeof x != "function")
    throw TypeError("rpcImpl must be a function");
  Cr.EventEmitter.call(this), this.rpcImpl = x, this.requestDelimited = !!i, this.responseDelimited = !!t;
}
An.prototype.rpcCall = function x(i, t, e, n, o) {
  if (!n)
    throw TypeError("request must be specified");
  var r = this;
  if (!o)
    return Cr.asPromise(x, r, i, t, e, n);
  if (!r.rpcImpl) {
    setTimeout(function() {
      o(Error("already ended"));
    }, 0);
    return;
  }
  try {
    return r.rpcImpl(
      i,
      t[r.requestDelimited ? "encodeDelimited" : "encode"](n).finish(),
      function(a, s) {
        if (a)
          return r.emit("error", a, i), o(a);
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
            return r.emit("error", c, i), o(c);
          }
        return r.emit("data", s, i), o(null, s);
      }
    );
  } catch (a) {
    r.emit("error", a, i), setTimeout(function() {
      o(a);
    }, 0);
    return;
  }
};
An.prototype.end = function(x) {
  return this.rpcImpl && (x || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(x) {
  var i = x;
  i.Service = iI;
})(zc);
var oI = {};
(function(x) {
  var i = x;
  i.build = "minimal", i.Writer = jc, i.BufferWriter = eI, i.Reader = _c, i.BufferReader = xI, i.util = C0(), i.rpc = zc, i.roots = oI, i.configure = t;
  function t() {
    i.util._configure(), i.Writer._configure(i.BufferWriter), i.Reader._configure(i.BufferReader);
  }
  t();
})(Nc);
var xe = Nc;
const B = xe.Reader, de = xe.Writer, W = xe.util, h = xe.roots.default || (xe.roots.default = {}), Y0 = h.dot = (() => {
  const x = {};
  return x.Content = function() {
    function i(t) {
      if (t)
        for (let e = Object.keys(t), n = 0; n < e.length; ++n)
          t[e[n]] != null && (this[e[n]] = t[e[n]]);
    }
    return i.prototype.token = W.newBuffer([]), i.prototype.iv = W.newBuffer([]), i.prototype.schemaVersion = 0, i.prototype.bytes = W.newBuffer([]), i.create = function(t) {
      return new i(t);
    }, i.encode = function(t, e) {
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
    }, i.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, i.decode = function(t, e) {
      t instanceof B || (t = B.create(t));
      let n = e === void 0 ? t.len : t.pos + e, o = new h.dot.Content();
      for (; t.pos < n; ) {
        let r = t.uint32();
        switch (r >>> 3) {
          case 1: {
            o.token = t.bytes();
            break;
          }
          case 2: {
            o.iv = t.bytes();
            break;
          }
          case 3: {
            o.schemaVersion = t.int32();
            break;
          }
          case 4: {
            o.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(r & 7);
            break;
        }
      }
      return o;
    }, i.decodeDelimited = function(t) {
      return t instanceof B || (t = new B(t)), this.decode(t, t.uint32());
    }, i.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || W.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || W.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !W.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || W.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, i.fromObject = function(t) {
      if (t instanceof h.dot.Content)
        return t;
      let e = new h.dot.Content();
      return t.token != null && (typeof t.token == "string" ? W.base64.decode(t.token, e.token = W.newBuffer(W.base64.length(t.token)), 0) : t.token.length >= 0 && (e.token = t.token)), t.iv != null && (typeof t.iv == "string" ? W.base64.decode(t.iv, e.iv = W.newBuffer(W.base64.length(t.iv)), 0) : t.iv.length >= 0 && (e.iv = t.iv)), t.schemaVersion != null && (e.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? W.base64.decode(t.bytes, e.bytes = W.newBuffer(W.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, i.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      return e.defaults && (e.bytes === String ? n.token = "" : (n.token = [], e.bytes !== Array && (n.token = W.newBuffer(n.token))), e.bytes === String ? n.iv = "" : (n.iv = [], e.bytes !== Array && (n.iv = W.newBuffer(n.iv))), n.schemaVersion = 0, e.bytes === String ? n.bytes = "" : (n.bytes = [], e.bytes !== Array && (n.bytes = W.newBuffer(n.bytes)))), t.token != null && t.hasOwnProperty("token") && (n.token = e.bytes === String ? W.base64.encode(t.token, 0, t.token.length) : e.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (n.iv = e.bytes === String ? W.base64.encode(t.iv, 0, t.iv.length) : e.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (n.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (n.bytes = e.bytes === String ? W.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), n;
    }, i.prototype.toJSON = function() {
      return this.constructor.toObject(this, xe.util.toJSONOptions);
    }, i.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Content";
    }, i;
  }(), x.v4 = function() {
    const i = {};
    return i.MagnifEyeLivenessContent = function() {
      function t(e) {
        if (this.images = [], e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
      }
      return t.prototype.images = W.emptyArray, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = de.create()), e.images != null && e.images.length)
          for (let o = 0; o < e.images.length; ++o)
            h.dot.Image.encode(e.images[o], n.uint32(
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
        let o = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.MagnifEyeLivenessContent();
        for (; e.pos < o; ) {
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
            let o = h.dot.Image.verify(e.images[n]);
            if (o)
              return "images." + o;
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
          for (let o = 0; o < e.images.length; ++o) {
            if (typeof e.images[o] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            n.images[o] = h.dot.Image.fromObject(e.images[o]);
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
        let o = {};
        if ((n.arrays || n.defaults) && (o.images = []), n.defaults && (o.metadata = null), e.images && e.images.length) {
          o.images = [];
          for (let r = 0; r < e.images.length; ++r)
            o.images[r] = h.dot.Image.toObject(e.images[r], n);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = h.dot.v4.Metadata.toObject(e.metadata, n)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, xe.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MagnifEyeLivenessContent";
      }, t;
    }(), i.Metadata = function() {
      function t(n) {
        if (n)
          for (let o = Object.keys(n), r = 0; r < o.length; ++r)
            n[o[r]] != null && (this[o[r]] = n[o[r]]);
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
      }, t.encode = function(n, o) {
        return o || (o = de.create()), n.platform != null && Object.hasOwnProperty.call(n, "platform") && o.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(n.platform), n.web != null && Object.hasOwnProperty.call(n, "web") && h.dot.v4.WebMetadata.encode(n.web, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.android != null && Object.hasOwnProperty.call(n, "android") && h.dot.v4.AndroidMetadata.encode(n.android, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.ios != null && Object.hasOwnProperty.call(n, "ios") && h.dot.v4.IosMetadata.encode(n.ios, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), n.sessionToken != null && Object.hasOwnProperty.call(n, "sessionToken") && o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(n.sessionToken), n.componentVersion != null && Object.hasOwnProperty.call(n, "componentVersion") && o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).string(n.componentVersion), o;
      }, t.encodeDelimited = function(n, o) {
        return this.encode(n, o).ldelim();
      }, t.decode = function(n, o) {
        n instanceof B || (n = B.create(n));
        let r = o === void 0 ? n.len : n.pos + o, a = new h.dot.v4.Metadata();
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
        let o = {};
        if (n.platform != null && n.hasOwnProperty("platform"))
          switch (n.platform) {
            default:
              return "platform: enum value expected";
            case 0:
            case 1:
            case 2:
              break;
          }
        if (n.sessionToken != null && n.hasOwnProperty("sessionToken") && (o._sessionToken = 1, !W.isString(n.sessionToken)))
          return "sessionToken: string expected";
        if (n.componentVersion != null && n.hasOwnProperty("componentVersion") && !W.isString(n.componentVersion))
          return "componentVersion: string expected";
        if (n.web != null && n.hasOwnProperty("web")) {
          o.metadata = 1;
          {
            let r = h.dot.v4.WebMetadata.verify(n.web);
            if (r)
              return "web." + r;
          }
        }
        if (n.android != null && n.hasOwnProperty("android")) {
          if (o.metadata === 1)
            return "metadata: multiple values";
          o.metadata = 1;
          {
            let r = h.dot.v4.AndroidMetadata.verify(n.android);
            if (r)
              return "android." + r;
          }
        }
        if (n.ios != null && n.hasOwnProperty("ios")) {
          if (o.metadata === 1)
            return "metadata: multiple values";
          o.metadata = 1;
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
        let o = new h.dot.v4.Metadata();
        switch (n.platform) {
          default:
            if (typeof n.platform == "number") {
              o.platform = n.platform;
              break;
            }
            break;
          case "WEB":
          case 0:
            o.platform = 0;
            break;
          case "ANDROID":
          case 1:
            o.platform = 1;
            break;
          case "IOS":
          case 2:
            o.platform = 2;
            break;
        }
        if (n.sessionToken != null && (o.sessionToken = String(n.sessionToken)), n.componentVersion != null && (o.componentVersion = String(n.componentVersion)), n.web != null) {
          if (typeof n.web != "object")
            throw TypeError(".dot.v4.Metadata.web: object expected");
          o.web = h.dot.v4.WebMetadata.fromObject(n.web);
        }
        if (n.android != null) {
          if (typeof n.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          o.android = h.dot.v4.AndroidMetadata.fromObject(n.android);
        }
        if (n.ios != null) {
          if (typeof n.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          o.ios = h.dot.v4.IosMetadata.fromObject(n.ios);
        }
        return o;
      }, t.toObject = function(n, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.platform = o.enums === String ? "WEB" : 0, r.componentVersion = ""), n.platform != null && n.hasOwnProperty("platform") && (r.platform = o.enums === String ? h.dot.Platform[n.platform] === void 0 ? n.platform : h.dot.Platform[n.platform] : n.platform), n.web != null && n.hasOwnProperty("web") && (r.web = h.dot.v4.WebMetadata.toObject(n.web, o), o.oneofs && (r.metadata = "web")), n.android != null && n.hasOwnProperty("android") && (r.android = h.dot.v4.AndroidMetadata.toObject(n.android, o), o.oneofs && (r.metadata = "android")), n.ios != null && n.hasOwnProperty("ios") && (r.ios = h.dot.v4.IosMetadata.toObject(n.ios, o), o.oneofs && (r.metadata = "ios")), n.sessionToken != null && n.hasOwnProperty("sessionToken") && (r.sessionToken = n.sessionToken, o.oneofs && (r._sessionToken = "sessionToken")), n.componentVersion != null && n.hasOwnProperty("componentVersion") && (r.componentVersion = n.componentVersion), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, xe.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.Metadata";
      }, t;
    }(), i.AndroidMetadata = function() {
      function t(n) {
        if (this.supportedAbis = [], this.digests = [], this.digestsWithTimestamp = [], this.dynamicCameraFrameProperties = {}, n)
          for (let o = Object.keys(n), r = 0; r < o.length; ++r)
            n[o[r]] != null && (this[o[r]] = n[o[r]]);
      }
      t.prototype.supportedAbis = W.emptyArray, t.prototype.device = null, t.prototype.digests = W.emptyArray, t.prototype.digestsWithTimestamp = W.emptyArray, t.prototype.dynamicCameraFrameProperties = W.emptyObject;
      let e;
      return Object.defineProperty(t.prototype, "_device", {
        get: W.oneOfGetter(e = ["device"]),
        set: W.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, o) {
        if (o || (o = de.create()), n.supportedAbis != null && n.supportedAbis.length)
          for (let r = 0; r < n.supportedAbis.length; ++r)
            o.uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(n.supportedAbis[r]);
        if (n.device != null && Object.hasOwnProperty.call(n, "device") && o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(n.device), n.digests != null && n.digests.length)
          for (let r = 0; r < n.digests.length; ++r)
            o.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(n.digests[r]);
        if (n.dynamicCameraFrameProperties != null && Object.hasOwnProperty.call(n, "dynamicCameraFrameProperties"))
          for (let r = Object.keys(n.dynamicCameraFrameProperties), a = 0; a < r.length; ++a)
            o.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(r[a]), h.dot.Int32List.encode(n.dynamicCameraFrameProperties[r[a]], o.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (n.digestsWithTimestamp != null && n.digestsWithTimestamp.length)
          for (let r = 0; r < n.digestsWithTimestamp.length; ++r)
            h.dot.DigestWithTimestamp.encode(n.digestsWithTimestamp[r], o.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return o;
      }, t.encodeDelimited = function(n, o) {
        return this.encode(n, o).ldelim();
      }, t.decode = function(n, o) {
        n instanceof B || (n = B.create(n));
        let r = o === void 0 ? n.len : n.pos + o, a = new h.dot.v4.AndroidMetadata(), s, c;
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
                let f = n.uint32();
                switch (f >>> 3) {
                  case 1:
                    s = n.string();
                    break;
                  case 2:
                    c = h.dot.Int32List.decode(n, n.uint32());
                    break;
                  default:
                    n.skipType(f & 7);
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
          for (let o = 0; o < n.supportedAbis.length; ++o)
            if (!W.isString(n.supportedAbis[o]))
              return "supportedAbis: string[] expected";
        }
        if (n.device != null && n.hasOwnProperty("device") && !W.isString(n.device))
          return "device: string expected";
        if (n.digests != null && n.hasOwnProperty("digests")) {
          if (!Array.isArray(n.digests))
            return "digests: array expected";
          for (let o = 0; o < n.digests.length; ++o)
            if (!(n.digests[o] && typeof n.digests[o].length == "number" || W.isString(n.digests[o])))
              return "digests: buffer[] expected";
        }
        if (n.digestsWithTimestamp != null && n.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(n.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let o = 0; o < n.digestsWithTimestamp.length; ++o) {
            let r = h.dot.DigestWithTimestamp.verify(n.digestsWithTimestamp[o]);
            if (r)
              return "digestsWithTimestamp." + r;
          }
        }
        if (n.dynamicCameraFrameProperties != null && n.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!W.isObject(n.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let o = Object.keys(n.dynamicCameraFrameProperties);
          for (let r = 0; r < o.length; ++r) {
            let a = h.dot.Int32List.verify(n.dynamicCameraFrameProperties[o[r]]);
            if (a)
              return "dynamicCameraFrameProperties." + a;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof h.dot.v4.AndroidMetadata)
          return n;
        let o = new h.dot.v4.AndroidMetadata();
        if (n.supportedAbis) {
          if (!Array.isArray(n.supportedAbis))
            throw TypeError(".dot.v4.AndroidMetadata.supportedAbis: array expected");
          o.supportedAbis = [];
          for (let r = 0; r < n.supportedAbis.length; ++r)
            o.supportedAbis[r] = String(n.supportedAbis[r]);
        }
        if (n.device != null && (o.device = String(n.device)), n.digests) {
          if (!Array.isArray(n.digests))
            throw TypeError(".dot.v4.AndroidMetadata.digests: array expected");
          o.digests = [];
          for (let r = 0; r < n.digests.length; ++r)
            typeof n.digests[r] == "string" ? W.base64.decode(n.digests[r], o.digests[r] = W.newBuffer(W.base64.length(n.digests[r])), 0) : n.digests[r].length >= 0 && (o.digests[r] = n.digests[r]);
        }
        if (n.digestsWithTimestamp) {
          if (!Array.isArray(n.digestsWithTimestamp))
            throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: array expected");
          o.digestsWithTimestamp = [];
          for (let r = 0; r < n.digestsWithTimestamp.length; ++r) {
            if (typeof n.digestsWithTimestamp[r] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: object expected");
            o.digestsWithTimestamp[r] = h.dot.DigestWithTimestamp.fromObject(n.digestsWithTimestamp[r]);
          }
        }
        if (n.dynamicCameraFrameProperties) {
          if (typeof n.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          o.dynamicCameraFrameProperties = {};
          for (let r = Object.keys(n.dynamicCameraFrameProperties), a = 0; a < r.length; ++a) {
            if (typeof n.dynamicCameraFrameProperties[r[a]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            o.dynamicCameraFrameProperties[r[a]] = h.dot.Int32List.fromObject(n.dynamicCameraFrameProperties[r[a]]);
          }
        }
        return o;
      }, t.toObject = function(n, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.supportedAbis = [], r.digests = [], r.digestsWithTimestamp = []), (o.objects || o.defaults) && (r.dynamicCameraFrameProperties = {}), n.supportedAbis && n.supportedAbis.length) {
          r.supportedAbis = [];
          for (let s = 0; s < n.supportedAbis.length; ++s)
            r.supportedAbis[s] = n.supportedAbis[s];
        }
        if (n.device != null && n.hasOwnProperty("device") && (r.device = n.device, o.oneofs && (r._device = "device")), n.digests && n.digests.length) {
          r.digests = [];
          for (let s = 0; s < n.digests.length; ++s)
            r.digests[s] = o.bytes === String ? W.base64.encode(n.digests[s], 0, n.digests[s].length) : o.bytes === Array ? Array.prototype.slice.call(n.digests[s]) : n.digests[s];
        }
        let a;
        if (n.dynamicCameraFrameProperties && (a = Object.keys(n.dynamicCameraFrameProperties)).length) {
          r.dynamicCameraFrameProperties = {};
          for (let s = 0; s < a.length; ++s)
            r.dynamicCameraFrameProperties[a[s]] = h.dot.Int32List.toObject(n.dynamicCameraFrameProperties[a[s]], o);
        }
        if (n.digestsWithTimestamp && n.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let s = 0; s < n.digestsWithTimestamp.length; ++s)
            r.digestsWithTimestamp[s] = h.dot.DigestWithTimestamp.toObject(n.digestsWithTimestamp[s], o);
        }
        return r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, xe.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.AndroidMetadata";
      }, t;
    }(), i.IosMetadata = function() {
      function t(e) {
        if (this.architectureInfo = {}, this.digests = [], this.digestsWithTimestamp = [], this.isoValues = [], e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
      }
      return t.prototype.cameraModelId = "", t.prototype.architectureInfo = W.emptyObject, t.prototype.digests = W.emptyArray, t.prototype.digestsWithTimestamp = W.emptyArray, t.prototype.isoValues = W.emptyArray, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = de.create()), e.cameraModelId != null && Object.hasOwnProperty.call(e, "cameraModelId") && n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(e.cameraModelId), e.architectureInfo != null && Object.hasOwnProperty.call(e, "architectureInfo"))
          for (let o = Object.keys(e.architectureInfo), r = 0; r < o.length; ++r)
            n.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(o[r]).uint32(
              /* id 2, wireType 0 =*/
              16
            ).bool(e.architectureInfo[o[r]]).ldelim();
        if (e.digests != null && e.digests.length)
          for (let o = 0; o < e.digests.length; ++o)
            n.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(e.digests[o]);
        if (e.isoValues != null && e.isoValues.length) {
          n.uint32(
            /* id 4, wireType 2 =*/
            34
          ).fork();
          for (let o = 0; o < e.isoValues.length; ++o)
            n.int32(e.isoValues[o]);
          n.ldelim();
        }
        if (e.digestsWithTimestamp != null && e.digestsWithTimestamp.length)
          for (let o = 0; o < e.digestsWithTimestamp.length; ++o)
            h.dot.DigestWithTimestamp.encode(e.digestsWithTimestamp[o], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let o = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.IosMetadata(), a, s;
        for (; e.pos < o; ) {
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
          for (let o = 0; o < n.length; ++o)
            if (typeof e.architectureInfo[n[o]] != "boolean")
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
            let o = h.dot.DigestWithTimestamp.verify(e.digestsWithTimestamp[n]);
            if (o)
              return "digestsWithTimestamp." + o;
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
          for (let o = Object.keys(e.architectureInfo), r = 0; r < o.length; ++r)
            n.architectureInfo[o[r]] = !!e.architectureInfo[o[r]];
        }
        if (e.digests) {
          if (!Array.isArray(e.digests))
            throw TypeError(".dot.v4.IosMetadata.digests: array expected");
          n.digests = [];
          for (let o = 0; o < e.digests.length; ++o)
            typeof e.digests[o] == "string" ? W.base64.decode(e.digests[o], n.digests[o] = W.newBuffer(W.base64.length(e.digests[o])), 0) : e.digests[o].length >= 0 && (n.digests[o] = e.digests[o]);
        }
        if (e.digestsWithTimestamp) {
          if (!Array.isArray(e.digestsWithTimestamp))
            throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: array expected");
          n.digestsWithTimestamp = [];
          for (let o = 0; o < e.digestsWithTimestamp.length; ++o) {
            if (typeof e.digestsWithTimestamp[o] != "object")
              throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: object expected");
            n.digestsWithTimestamp[o] = h.dot.DigestWithTimestamp.fromObject(e.digestsWithTimestamp[o]);
          }
        }
        if (e.isoValues) {
          if (!Array.isArray(e.isoValues))
            throw TypeError(".dot.v4.IosMetadata.isoValues: array expected");
          n.isoValues = [];
          for (let o = 0; o < e.isoValues.length; ++o)
            n.isoValues[o] = e.isoValues[o] | 0;
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let o = {};
        (n.arrays || n.defaults) && (o.digests = [], o.isoValues = [], o.digestsWithTimestamp = []), (n.objects || n.defaults) && (o.architectureInfo = {}), n.defaults && (o.cameraModelId = ""), e.cameraModelId != null && e.hasOwnProperty("cameraModelId") && (o.cameraModelId = e.cameraModelId);
        let r;
        if (e.architectureInfo && (r = Object.keys(e.architectureInfo)).length) {
          o.architectureInfo = {};
          for (let a = 0; a < r.length; ++a)
            o.architectureInfo[r[a]] = e.architectureInfo[r[a]];
        }
        if (e.digests && e.digests.length) {
          o.digests = [];
          for (let a = 0; a < e.digests.length; ++a)
            o.digests[a] = n.bytes === String ? W.base64.encode(e.digests[a], 0, e.digests[a].length) : n.bytes === Array ? Array.prototype.slice.call(e.digests[a]) : e.digests[a];
        }
        if (e.isoValues && e.isoValues.length) {
          o.isoValues = [];
          for (let a = 0; a < e.isoValues.length; ++a)
            o.isoValues[a] = e.isoValues[a];
        }
        if (e.digestsWithTimestamp && e.digestsWithTimestamp.length) {
          o.digestsWithTimestamp = [];
          for (let a = 0; a < e.digestsWithTimestamp.length; ++a)
            o.digestsWithTimestamp[a] = h.dot.DigestWithTimestamp.toObject(e.digestsWithTimestamp[a], n);
        }
        return o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, xe.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosMetadata";
      }, t;
    }(), i.WebMetadata = function() {
      function t(e) {
        if (this.availableCameraProperties = [], this.hashedDetectedImages = [], this.hashedDetectedImagesWithTimestamp = [], this.detectionRecord = [], e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
      }
      return t.prototype.currentCameraProperties = null, t.prototype.availableCameraProperties = W.emptyArray, t.prototype.hashedDetectedImages = W.emptyArray, t.prototype.hashedDetectedImagesWithTimestamp = W.emptyArray, t.prototype.detectionRecord = W.emptyArray, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = de.create()), e.currentCameraProperties != null && Object.hasOwnProperty.call(e, "currentCameraProperties") && h.dot.v4.MediaTrackSettings.encode(e.currentCameraProperties, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.availableCameraProperties != null && e.availableCameraProperties.length)
          for (let o = 0; o < e.availableCameraProperties.length; ++o)
            h.dot.v4.CameraProperties.encode(e.availableCameraProperties[o], n.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim();
        if (e.hashedDetectedImages != null && e.hashedDetectedImages.length)
          for (let o = 0; o < e.hashedDetectedImages.length; ++o)
            n.uint32(
              /* id 3, wireType 2 =*/
              26
            ).string(e.hashedDetectedImages[o]);
        if (e.detectionRecord != null && e.detectionRecord.length)
          for (let o = 0; o < e.detectionRecord.length; ++o)
            h.dot.v4.DetectedObject.encode(e.detectionRecord[o], n.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (e.hashedDetectedImagesWithTimestamp != null && e.hashedDetectedImagesWithTimestamp.length)
          for (let o = 0; o < e.hashedDetectedImagesWithTimestamp.length; ++o)
            h.dot.v4.HashedDetectedImageWithTimestamp.encode(e.hashedDetectedImagesWithTimestamp[o], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let o = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.WebMetadata();
        for (; e.pos < o; ) {
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
            let o = h.dot.v4.CameraProperties.verify(e.availableCameraProperties[n]);
            if (o)
              return "availableCameraProperties." + o;
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
            let o = h.dot.v4.HashedDetectedImageWithTimestamp.verify(e.hashedDetectedImagesWithTimestamp[n]);
            if (o)
              return "hashedDetectedImagesWithTimestamp." + o;
          }
        }
        if (e.detectionRecord != null && e.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(e.detectionRecord))
            return "detectionRecord: array expected";
          for (let n = 0; n < e.detectionRecord.length; ++n) {
            let o = h.dot.v4.DetectedObject.verify(e.detectionRecord[n]);
            if (o)
              return "detectionRecord." + o;
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
          for (let o = 0; o < e.availableCameraProperties.length; ++o) {
            if (typeof e.availableCameraProperties[o] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            n.availableCameraProperties[o] = h.dot.v4.CameraProperties.fromObject(e.availableCameraProperties[o]);
          }
        }
        if (e.hashedDetectedImages) {
          if (!Array.isArray(e.hashedDetectedImages))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImages: array expected");
          n.hashedDetectedImages = [];
          for (let o = 0; o < e.hashedDetectedImages.length; ++o)
            n.hashedDetectedImages[o] = String(e.hashedDetectedImages[o]);
        }
        if (e.hashedDetectedImagesWithTimestamp) {
          if (!Array.isArray(e.hashedDetectedImagesWithTimestamp))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: array expected");
          n.hashedDetectedImagesWithTimestamp = [];
          for (let o = 0; o < e.hashedDetectedImagesWithTimestamp.length; ++o) {
            if (typeof e.hashedDetectedImagesWithTimestamp[o] != "object")
              throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: object expected");
            n.hashedDetectedImagesWithTimestamp[o] = h.dot.v4.HashedDetectedImageWithTimestamp.fromObject(e.hashedDetectedImagesWithTimestamp[o]);
          }
        }
        if (e.detectionRecord) {
          if (!Array.isArray(e.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          n.detectionRecord = [];
          for (let o = 0; o < e.detectionRecord.length; ++o) {
            if (typeof e.detectionRecord[o] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            n.detectionRecord[o] = h.dot.v4.DetectedObject.fromObject(e.detectionRecord[o]);
          }
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let o = {};
        if ((n.arrays || n.defaults) && (o.availableCameraProperties = [], o.hashedDetectedImages = [], o.detectionRecord = [], o.hashedDetectedImagesWithTimestamp = []), n.defaults && (o.currentCameraProperties = null), e.currentCameraProperties != null && e.hasOwnProperty("currentCameraProperties") && (o.currentCameraProperties = h.dot.v4.MediaTrackSettings.toObject(e.currentCameraProperties, n)), e.availableCameraProperties && e.availableCameraProperties.length) {
          o.availableCameraProperties = [];
          for (let r = 0; r < e.availableCameraProperties.length; ++r)
            o.availableCameraProperties[r] = h.dot.v4.CameraProperties.toObject(e.availableCameraProperties[r], n);
        }
        if (e.hashedDetectedImages && e.hashedDetectedImages.length) {
          o.hashedDetectedImages = [];
          for (let r = 0; r < e.hashedDetectedImages.length; ++r)
            o.hashedDetectedImages[r] = e.hashedDetectedImages[r];
        }
        if (e.detectionRecord && e.detectionRecord.length) {
          o.detectionRecord = [];
          for (let r = 0; r < e.detectionRecord.length; ++r)
            o.detectionRecord[r] = h.dot.v4.DetectedObject.toObject(e.detectionRecord[r], n);
        }
        if (e.hashedDetectedImagesWithTimestamp && e.hashedDetectedImagesWithTimestamp.length) {
          o.hashedDetectedImagesWithTimestamp = [];
          for (let r = 0; r < e.hashedDetectedImagesWithTimestamp.length; ++r)
            o.hashedDetectedImagesWithTimestamp[r] = h.dot.v4.HashedDetectedImageWithTimestamp.toObject(e.hashedDetectedImagesWithTimestamp[r], n);
        }
        return o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, xe.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.WebMetadata";
      }, t;
    }(), i.HashedDetectedImageWithTimestamp = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
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
        let o = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.HashedDetectedImageWithTimestamp();
        for (; e.pos < o; ) {
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
        let o = {};
        if (n.defaults)
          if (o.imageHash = "", W.Long) {
            let r = new W.Long(0, 0, !0);
            o.timestampMillis = n.longs === String ? r.toString() : n.longs === Number ? r.toNumber() : r;
          } else
            o.timestampMillis = n.longs === String ? "0" : 0;
        return e.imageHash != null && e.hasOwnProperty("imageHash") && (o.imageHash = e.imageHash), e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? o.timestampMillis = n.longs === String ? String(e.timestampMillis) : e.timestampMillis : o.timestampMillis = n.longs === String ? W.Long.prototype.toString.call(e.timestampMillis) : n.longs === Number ? new W.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, xe.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.HashedDetectedImageWithTimestamp";
      }, t;
    }(), i.MediaTrackSettings = function() {
      function t(n) {
        if (n)
          for (let o = Object.keys(n), r = 0; r < o.length; ++r)
            n[o[r]] != null && (this[o[r]] = n[o[r]]);
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
      }, t.encode = function(n, o) {
        return o || (o = de.create()), n.aspectRatio != null && Object.hasOwnProperty.call(n, "aspectRatio") && o.uint32(
          /* id 1, wireType 1 =*/
          9
        ).double(n.aspectRatio), n.autoGainControl != null && Object.hasOwnProperty.call(n, "autoGainControl") && o.uint32(
          /* id 2, wireType 0 =*/
          16
        ).bool(n.autoGainControl), n.channelCount != null && Object.hasOwnProperty.call(n, "channelCount") && o.uint32(
          /* id 3, wireType 0 =*/
          24
        ).int32(n.channelCount), n.deviceId != null && Object.hasOwnProperty.call(n, "deviceId") && o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).string(n.deviceId), n.displaySurface != null && Object.hasOwnProperty.call(n, "displaySurface") && o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(n.displaySurface), n.echoCancellation != null && Object.hasOwnProperty.call(n, "echoCancellation") && o.uint32(
          /* id 6, wireType 0 =*/
          48
        ).bool(n.echoCancellation), n.facingMode != null && Object.hasOwnProperty.call(n, "facingMode") && o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).string(n.facingMode), n.frameRate != null && Object.hasOwnProperty.call(n, "frameRate") && o.uint32(
          /* id 8, wireType 1 =*/
          65
        ).double(n.frameRate), n.groupId != null && Object.hasOwnProperty.call(n, "groupId") && o.uint32(
          /* id 9, wireType 2 =*/
          74
        ).string(n.groupId), n.height != null && Object.hasOwnProperty.call(n, "height") && o.uint32(
          /* id 10, wireType 0 =*/
          80
        ).int32(n.height), n.noiseSuppression != null && Object.hasOwnProperty.call(n, "noiseSuppression") && o.uint32(
          /* id 11, wireType 0 =*/
          88
        ).bool(n.noiseSuppression), n.sampleRate != null && Object.hasOwnProperty.call(n, "sampleRate") && o.uint32(
          /* id 12, wireType 0 =*/
          96
        ).int32(n.sampleRate), n.sampleSize != null && Object.hasOwnProperty.call(n, "sampleSize") && o.uint32(
          /* id 13, wireType 0 =*/
          104
        ).int32(n.sampleSize), n.width != null && Object.hasOwnProperty.call(n, "width") && o.uint32(
          /* id 14, wireType 0 =*/
          112
        ).int32(n.width), n.deviceName != null && Object.hasOwnProperty.call(n, "deviceName") && o.uint32(
          /* id 15, wireType 2 =*/
          122
        ).string(n.deviceName), o;
      }, t.encodeDelimited = function(n, o) {
        return this.encode(n, o).ldelim();
      }, t.decode = function(n, o) {
        n instanceof B || (n = B.create(n));
        let r = o === void 0 ? n.len : n.pos + o, a = new h.dot.v4.MediaTrackSettings();
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
        let o = new h.dot.v4.MediaTrackSettings();
        return n.aspectRatio != null && (o.aspectRatio = Number(n.aspectRatio)), n.autoGainControl != null && (o.autoGainControl = !!n.autoGainControl), n.channelCount != null && (o.channelCount = n.channelCount | 0), n.deviceId != null && (o.deviceId = String(n.deviceId)), n.displaySurface != null && (o.displaySurface = String(n.displaySurface)), n.echoCancellation != null && (o.echoCancellation = !!n.echoCancellation), n.facingMode != null && (o.facingMode = String(n.facingMode)), n.frameRate != null && (o.frameRate = Number(n.frameRate)), n.groupId != null && (o.groupId = String(n.groupId)), n.height != null && (o.height = n.height | 0), n.noiseSuppression != null && (o.noiseSuppression = !!n.noiseSuppression), n.sampleRate != null && (o.sampleRate = n.sampleRate | 0), n.sampleSize != null && (o.sampleSize = n.sampleSize | 0), n.width != null && (o.width = n.width | 0), n.deviceName != null && (o.deviceName = String(n.deviceName)), o;
      }, t.toObject = function(n, o) {
        o || (o = {});
        let r = {};
        return n.aspectRatio != null && n.hasOwnProperty("aspectRatio") && (r.aspectRatio = o.json && !isFinite(n.aspectRatio) ? String(n.aspectRatio) : n.aspectRatio, o.oneofs && (r._aspectRatio = "aspectRatio")), n.autoGainControl != null && n.hasOwnProperty("autoGainControl") && (r.autoGainControl = n.autoGainControl, o.oneofs && (r._autoGainControl = "autoGainControl")), n.channelCount != null && n.hasOwnProperty("channelCount") && (r.channelCount = n.channelCount, o.oneofs && (r._channelCount = "channelCount")), n.deviceId != null && n.hasOwnProperty("deviceId") && (r.deviceId = n.deviceId, o.oneofs && (r._deviceId = "deviceId")), n.displaySurface != null && n.hasOwnProperty("displaySurface") && (r.displaySurface = n.displaySurface, o.oneofs && (r._displaySurface = "displaySurface")), n.echoCancellation != null && n.hasOwnProperty("echoCancellation") && (r.echoCancellation = n.echoCancellation, o.oneofs && (r._echoCancellation = "echoCancellation")), n.facingMode != null && n.hasOwnProperty("facingMode") && (r.facingMode = n.facingMode, o.oneofs && (r._facingMode = "facingMode")), n.frameRate != null && n.hasOwnProperty("frameRate") && (r.frameRate = o.json && !isFinite(n.frameRate) ? String(n.frameRate) : n.frameRate, o.oneofs && (r._frameRate = "frameRate")), n.groupId != null && n.hasOwnProperty("groupId") && (r.groupId = n.groupId, o.oneofs && (r._groupId = "groupId")), n.height != null && n.hasOwnProperty("height") && (r.height = n.height, o.oneofs && (r._height = "height")), n.noiseSuppression != null && n.hasOwnProperty("noiseSuppression") && (r.noiseSuppression = n.noiseSuppression, o.oneofs && (r._noiseSuppression = "noiseSuppression")), n.sampleRate != null && n.hasOwnProperty("sampleRate") && (r.sampleRate = n.sampleRate, o.oneofs && (r._sampleRate = "sampleRate")), n.sampleSize != null && n.hasOwnProperty("sampleSize") && (r.sampleSize = n.sampleSize, o.oneofs && (r._sampleSize = "sampleSize")), n.width != null && n.hasOwnProperty("width") && (r.width = n.width, o.oneofs && (r._width = "width")), n.deviceName != null && n.hasOwnProperty("deviceName") && (r.deviceName = n.deviceName, o.oneofs && (r._deviceName = "deviceName")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, xe.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.MediaTrackSettings";
      }, t;
    }(), i.ImageBitmap = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
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
        let o = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.ImageBitmap();
        for (; e.pos < o; ) {
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
        let o = {};
        return n.defaults && (o.width = 0, o.height = 0), e.width != null && e.hasOwnProperty("width") && (o.width = e.width), e.height != null && e.hasOwnProperty("height") && (o.height = e.height), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, xe.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.ImageBitmap";
      }, t;
    }(), i.CameraProperties = function() {
      function t(n) {
        if (n)
          for (let o = Object.keys(n), r = 0; r < o.length; ++r)
            n[o[r]] != null && (this[o[r]] = n[o[r]]);
      }
      t.prototype.cameraInitFrameResolution = null, t.prototype.cameraProperties = null;
      let e;
      return Object.defineProperty(t.prototype, "_cameraInitFrameResolution", {
        get: W.oneOfGetter(e = ["cameraInitFrameResolution"]),
        set: W.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, o) {
        return o || (o = de.create()), n.cameraInitFrameResolution != null && Object.hasOwnProperty.call(n, "cameraInitFrameResolution") && h.dot.v4.ImageBitmap.encode(n.cameraInitFrameResolution, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.cameraProperties != null && Object.hasOwnProperty.call(n, "cameraProperties") && h.dot.v4.MediaTrackSettings.encode(n.cameraProperties, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(n, o) {
        return this.encode(n, o).ldelim();
      }, t.decode = function(n, o) {
        n instanceof B || (n = B.create(n));
        let r = o === void 0 ? n.len : n.pos + o, a = new h.dot.v4.CameraProperties();
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
          let o = h.dot.v4.ImageBitmap.verify(n.cameraInitFrameResolution);
          if (o)
            return "cameraInitFrameResolution." + o;
        }
        if (n.cameraProperties != null && n.hasOwnProperty("cameraProperties")) {
          let o = h.dot.v4.MediaTrackSettings.verify(n.cameraProperties);
          if (o)
            return "cameraProperties." + o;
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof h.dot.v4.CameraProperties)
          return n;
        let o = new h.dot.v4.CameraProperties();
        if (n.cameraInitFrameResolution != null) {
          if (typeof n.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          o.cameraInitFrameResolution = h.dot.v4.ImageBitmap.fromObject(n.cameraInitFrameResolution);
        }
        if (n.cameraProperties != null) {
          if (typeof n.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          o.cameraProperties = h.dot.v4.MediaTrackSettings.fromObject(n.cameraProperties);
        }
        return o;
      }, t.toObject = function(n, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.cameraProperties = null), n.cameraInitFrameResolution != null && n.hasOwnProperty("cameraInitFrameResolution") && (r.cameraInitFrameResolution = h.dot.v4.ImageBitmap.toObject(n.cameraInitFrameResolution, o), o.oneofs && (r._cameraInitFrameResolution = "cameraInitFrameResolution")), n.cameraProperties != null && n.hasOwnProperty("cameraProperties") && (r.cameraProperties = h.dot.v4.MediaTrackSettings.toObject(n.cameraProperties, o)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, xe.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.CameraProperties";
      }, t;
    }(), i.DetectedObject = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
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
        let o = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.DetectedObject();
        for (; e.pos < o; ) {
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
        let o = {};
        return n.defaults && (o.brightness = 0, o.sharpness = 0, o.hotspots = 0, o.confidence = 0, o.faceSize = 0, o.faceCenter = null, o.smallestEdge = 0, o.bottomLeft = null, o.bottomRight = null, o.topLeft = null, o.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (o.brightness = n.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (o.sharpness = n.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (o.hotspots = n.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (o.confidence = n.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (o.faceSize = n.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (o.faceCenter = h.dot.v4.Point.toObject(e.faceCenter, n)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (o.smallestEdge = n.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (o.bottomLeft = h.dot.v4.Point.toObject(e.bottomLeft, n)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (o.bottomRight = h.dot.v4.Point.toObject(e.bottomRight, n)), e.topLeft != null && e.hasOwnProperty("topLeft") && (o.topLeft = h.dot.v4.Point.toObject(e.topLeft, n)), e.topRight != null && e.hasOwnProperty("topRight") && (o.topRight = h.dot.v4.Point.toObject(e.topRight, n)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, xe.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DetectedObject";
      }, t;
    }(), i.Point = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
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
        let o = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.Point();
        for (; e.pos < o; ) {
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
        let o = {};
        return n.defaults && (o.x = 0, o.y = 0), e.x != null && e.hasOwnProperty("x") && (o.x = n.json && !isFinite(e.x) ? String(e.x) : e.x), e.y != null && e.hasOwnProperty("y") && (o.y = n.json && !isFinite(e.y) ? String(e.y) : e.y), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, xe.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Point";
      }, t;
    }(), i.FaceContent = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
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
        let o = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.FaceContent();
        for (; e.pos < o; ) {
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
        let o = {};
        return n.defaults && (o.image = null, o.metadata = null), e.image != null && e.hasOwnProperty("image") && (o.image = h.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = h.dot.v4.Metadata.toObject(e.metadata, n)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, xe.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.FaceContent";
      }, t;
    }(), i.DocumentContent = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
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
        let o = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.DocumentContent();
        for (; e.pos < o; ) {
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
        let o = {};
        return n.defaults && (o.image = null, o.metadata = null), e.image != null && e.hasOwnProperty("image") && (o.image = h.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = h.dot.v4.Metadata.toObject(e.metadata, n)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, xe.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DocumentContent";
      }, t;
    }(), i.Blob = function() {
      function t(n) {
        if (n)
          for (let o = Object.keys(n), r = 0; r < o.length; ++r)
            n[o[r]] != null && (this[o[r]] = n[o[r]]);
      }
      t.prototype.documentContent = null, t.prototype.eyeGazeLivenessContent = null, t.prototype.faceContent = null, t.prototype.magnifeyeLivenessContent = null, t.prototype.smileLivenessContent = null, t.prototype.palmContent = null;
      let e;
      return Object.defineProperty(t.prototype, "blob", {
        get: W.oneOfGetter(e = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent", "palmContent"]),
        set: W.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, o) {
        return o || (o = de.create()), n.documentContent != null && Object.hasOwnProperty.call(n, "documentContent") && h.dot.v4.DocumentContent.encode(n.documentContent, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.faceContent != null && Object.hasOwnProperty.call(n, "faceContent") && h.dot.v4.FaceContent.encode(n.faceContent, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(n, "magnifeyeLivenessContent") && h.dot.v4.MagnifEyeLivenessContent.encode(n.magnifeyeLivenessContent, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.smileLivenessContent != null && Object.hasOwnProperty.call(n, "smileLivenessContent") && h.dot.v4.SmileLivenessContent.encode(n.smileLivenessContent, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), n.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(n, "eyeGazeLivenessContent") && h.dot.v4.EyeGazeLivenessContent.encode(n.eyeGazeLivenessContent, o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), n.palmContent != null && Object.hasOwnProperty.call(n, "palmContent") && h.dot.v4.PalmContent.encode(n.palmContent, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(n, o) {
        return this.encode(n, o).ldelim();
      }, t.decode = function(n, o) {
        n instanceof B || (n = B.create(n));
        let r = o === void 0 ? n.len : n.pos + o, a = new h.dot.v4.Blob();
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
        let o = {};
        if (n.documentContent != null && n.hasOwnProperty("documentContent")) {
          o.blob = 1;
          {
            let r = h.dot.v4.DocumentContent.verify(n.documentContent);
            if (r)
              return "documentContent." + r;
          }
        }
        if (n.eyeGazeLivenessContent != null && n.hasOwnProperty("eyeGazeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = h.dot.v4.EyeGazeLivenessContent.verify(n.eyeGazeLivenessContent);
            if (r)
              return "eyeGazeLivenessContent." + r;
          }
        }
        if (n.faceContent != null && n.hasOwnProperty("faceContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = h.dot.v4.FaceContent.verify(n.faceContent);
            if (r)
              return "faceContent." + r;
          }
        }
        if (n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = h.dot.v4.MagnifEyeLivenessContent.verify(n.magnifeyeLivenessContent);
            if (r)
              return "magnifeyeLivenessContent." + r;
          }
        }
        if (n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = h.dot.v4.SmileLivenessContent.verify(n.smileLivenessContent);
            if (r)
              return "smileLivenessContent." + r;
          }
        }
        if (n.palmContent != null && n.hasOwnProperty("palmContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
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
        let o = new h.dot.v4.Blob();
        if (n.documentContent != null) {
          if (typeof n.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          o.documentContent = h.dot.v4.DocumentContent.fromObject(n.documentContent);
        }
        if (n.eyeGazeLivenessContent != null) {
          if (typeof n.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          o.eyeGazeLivenessContent = h.dot.v4.EyeGazeLivenessContent.fromObject(n.eyeGazeLivenessContent);
        }
        if (n.faceContent != null) {
          if (typeof n.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          o.faceContent = h.dot.v4.FaceContent.fromObject(n.faceContent);
        }
        if (n.magnifeyeLivenessContent != null) {
          if (typeof n.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          o.magnifeyeLivenessContent = h.dot.v4.MagnifEyeLivenessContent.fromObject(n.magnifeyeLivenessContent);
        }
        if (n.smileLivenessContent != null) {
          if (typeof n.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          o.smileLivenessContent = h.dot.v4.SmileLivenessContent.fromObject(n.smileLivenessContent);
        }
        if (n.palmContent != null) {
          if (typeof n.palmContent != "object")
            throw TypeError(".dot.v4.Blob.palmContent: object expected");
          o.palmContent = h.dot.v4.PalmContent.fromObject(n.palmContent);
        }
        return o;
      }, t.toObject = function(n, o) {
        o || (o = {});
        let r = {};
        return n.documentContent != null && n.hasOwnProperty("documentContent") && (r.documentContent = h.dot.v4.DocumentContent.toObject(n.documentContent, o), o.oneofs && (r.blob = "documentContent")), n.faceContent != null && n.hasOwnProperty("faceContent") && (r.faceContent = h.dot.v4.FaceContent.toObject(n.faceContent, o), o.oneofs && (r.blob = "faceContent")), n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent") && (r.magnifeyeLivenessContent = h.dot.v4.MagnifEyeLivenessContent.toObject(n.magnifeyeLivenessContent, o), o.oneofs && (r.blob = "magnifeyeLivenessContent")), n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent") && (r.smileLivenessContent = h.dot.v4.SmileLivenessContent.toObject(n.smileLivenessContent, o), o.oneofs && (r.blob = "smileLivenessContent")), n.eyeGazeLivenessContent != null && n.hasOwnProperty("eyeGazeLivenessContent") && (r.eyeGazeLivenessContent = h.dot.v4.EyeGazeLivenessContent.toObject(n.eyeGazeLivenessContent, o), o.oneofs && (r.blob = "eyeGazeLivenessContent")), n.palmContent != null && n.hasOwnProperty("palmContent") && (r.palmContent = h.dot.v4.PalmContent.toObject(n.palmContent, o), o.oneofs && (r.blob = "palmContent")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, xe.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.Blob";
      }, t;
    }(), i.EyeGazeLivenessContent = function() {
      function t(e) {
        if (this.segments = [], e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
      }
      return t.prototype.segments = W.emptyArray, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = de.create()), e.segments != null && e.segments.length)
          for (let o = 0; o < e.segments.length; ++o)
            h.dot.v4.EyeGazeLivenessSegment.encode(e.segments[o], n.uint32(
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
        let o = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.EyeGazeLivenessContent();
        for (; e.pos < o; ) {
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
            let o = h.dot.v4.EyeGazeLivenessSegment.verify(e.segments[n]);
            if (o)
              return "segments." + o;
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
          for (let o = 0; o < e.segments.length; ++o) {
            if (typeof e.segments[o] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            n.segments[o] = h.dot.v4.EyeGazeLivenessSegment.fromObject(e.segments[o]);
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
        let o = {};
        if ((n.arrays || n.defaults) && (o.segments = []), n.defaults && (o.metadata = null), e.segments && e.segments.length) {
          o.segments = [];
          for (let r = 0; r < e.segments.length; ++r)
            o.segments[r] = h.dot.v4.EyeGazeLivenessSegment.toObject(e.segments[r], n);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = h.dot.v4.Metadata.toObject(e.metadata, n)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, xe.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.EyeGazeLivenessContent";
      }, t;
    }(), i.EyeGazeLivenessSegment = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
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
        let o = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.EyeGazeLivenessSegment();
        for (; e.pos < o; ) {
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
        let o = {};
        return n.defaults && (o.corner = n.enums === String ? "TOP_LEFT" : 0, o.image = null), e.corner != null && e.hasOwnProperty("corner") && (o.corner = n.enums === String ? h.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : h.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (o.image = h.dot.Image.toObject(e.image, n)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, xe.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.EyeGazeLivenessSegment";
      }, t;
    }(), i.EyeGazeLivenessCorner = function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "TOP_LEFT"] = 0, e[t[1] = "TOP_RIGHT"] = 1, e[t[2] = "BOTTOM_RIGHT"] = 2, e[t[3] = "BOTTOM_LEFT"] = 3, e;
    }(), i.SmileLivenessContent = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
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
        let o = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.SmileLivenessContent();
        for (; e.pos < o; ) {
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
        let o = {};
        return n.defaults && (o.neutralExpressionFaceImage = null, o.smileExpressionFaceImage = null, o.metadata = null), e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage") && (o.neutralExpressionFaceImage = h.dot.Image.toObject(e.neutralExpressionFaceImage, n)), e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage") && (o.smileExpressionFaceImage = h.dot.Image.toObject(e.smileExpressionFaceImage, n)), e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = h.dot.v4.Metadata.toObject(e.metadata, n)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, xe.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.SmileLivenessContent";
      }, t;
    }(), i.PalmContent = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
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
        let o = n === void 0 ? e.len : e.pos + n, r = new h.dot.v4.PalmContent();
        for (; e.pos < o; ) {
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
        let o = {};
        return n.defaults && (o.image = null, o.metadata = null), e.image != null && e.hasOwnProperty("image") && (o.image = h.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = h.dot.v4.Metadata.toObject(e.metadata, n)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, xe.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.PalmContent";
      }, t;
    }(), i;
  }(), x.Image = function() {
    function i(t) {
      if (t)
        for (let e = Object.keys(t), n = 0; n < e.length; ++n)
          t[e[n]] != null && (this[e[n]] = t[e[n]]);
    }
    return i.prototype.bytes = W.newBuffer([]), i.create = function(t) {
      return new i(t);
    }, i.encode = function(t, e) {
      return e || (e = de.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, i.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, i.decode = function(t, e) {
      t instanceof B || (t = B.create(t));
      let n = e === void 0 ? t.len : t.pos + e, o = new h.dot.Image();
      for (; t.pos < n; ) {
        let r = t.uint32();
        switch (r >>> 3) {
          case 1: {
            o.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(r & 7);
            break;
        }
      }
      return o;
    }, i.decodeDelimited = function(t) {
      return t instanceof B || (t = new B(t)), this.decode(t, t.uint32());
    }, i.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || W.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, i.fromObject = function(t) {
      if (t instanceof h.dot.Image)
        return t;
      let e = new h.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? W.base64.decode(t.bytes, e.bytes = W.newBuffer(W.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, i.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      return e.defaults && (e.bytes === String ? n.bytes = "" : (n.bytes = [], e.bytes !== Array && (n.bytes = W.newBuffer(n.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (n.bytes = e.bytes === String ? W.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), n;
    }, i.prototype.toJSON = function() {
      return this.constructor.toObject(this, xe.util.toJSONOptions);
    }, i.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Image";
    }, i;
  }(), x.Int32List = function() {
    function i(t) {
      if (this.items = [], t)
        for (let e = Object.keys(t), n = 0; n < e.length; ++n)
          t[e[n]] != null && (this[e[n]] = t[e[n]]);
    }
    return i.prototype.items = W.emptyArray, i.create = function(t) {
      return new i(t);
    }, i.encode = function(t, e) {
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
    }, i.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, i.decode = function(t, e) {
      t instanceof B || (t = B.create(t));
      let n = e === void 0 ? t.len : t.pos + e, o = new h.dot.Int32List();
      for (; t.pos < n; ) {
        let r = t.uint32();
        switch (r >>> 3) {
          case 1: {
            if (o.items && o.items.length || (o.items = []), (r & 7) === 2) {
              let a = t.uint32() + t.pos;
              for (; t.pos < a; )
                o.items.push(t.int32());
            } else
              o.items.push(t.int32());
            break;
          }
          default:
            t.skipType(r & 7);
            break;
        }
      }
      return o;
    }, i.decodeDelimited = function(t) {
      return t instanceof B || (t = new B(t)), this.decode(t, t.uint32());
    }, i.verify = function(t) {
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
    }, i.fromObject = function(t) {
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
    }, i.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      if ((e.arrays || e.defaults) && (n.items = []), t.items && t.items.length) {
        n.items = [];
        for (let o = 0; o < t.items.length; ++o)
          n.items[o] = t.items[o];
      }
      return n;
    }, i.prototype.toJSON = function() {
      return this.constructor.toObject(this, xe.util.toJSONOptions);
    }, i.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Int32List";
    }, i;
  }(), x.Platform = function() {
    const i = {}, t = Object.create(i);
    return t[i[0] = "WEB"] = 0, t[i[1] = "ANDROID"] = 1, t[i[2] = "IOS"] = 2, t;
  }(), x.DigestWithTimestamp = function() {
    function i(t) {
      if (t)
        for (let e = Object.keys(t), n = 0; n < e.length; ++n)
          t[e[n]] != null && (this[e[n]] = t[e[n]]);
    }
    return i.prototype.digest = W.newBuffer([]), i.prototype.timestampMillis = W.Long ? W.Long.fromBits(0, 0, !0) : 0, i.create = function(t) {
      return new i(t);
    }, i.encode = function(t, e) {
      return e || (e = de.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.digest), t.timestampMillis != null && Object.hasOwnProperty.call(t, "timestampMillis") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).uint64(t.timestampMillis), e;
    }, i.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, i.decode = function(t, e) {
      t instanceof B || (t = B.create(t));
      let n = e === void 0 ? t.len : t.pos + e, o = new h.dot.DigestWithTimestamp();
      for (; t.pos < n; ) {
        let r = t.uint32();
        switch (r >>> 3) {
          case 1: {
            o.digest = t.bytes();
            break;
          }
          case 2: {
            o.timestampMillis = t.uint64();
            break;
          }
          default:
            t.skipType(r & 7);
            break;
        }
      }
      return o;
    }, i.decodeDelimited = function(t) {
      return t instanceof B || (t = new B(t)), this.decode(t, t.uint32());
    }, i.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || W.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !W.isInteger(t.timestampMillis) && !(t.timestampMillis && W.isInteger(t.timestampMillis.low) && W.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, i.fromObject = function(t) {
      if (t instanceof h.dot.DigestWithTimestamp)
        return t;
      let e = new h.dot.DigestWithTimestamp();
      return t.digest != null && (typeof t.digest == "string" ? W.base64.decode(t.digest, e.digest = W.newBuffer(W.base64.length(t.digest)), 0) : t.digest.length >= 0 && (e.digest = t.digest)), t.timestampMillis != null && (W.Long ? (e.timestampMillis = W.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new W.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, i.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      if (e.defaults)
        if (e.bytes === String ? n.digest = "" : (n.digest = [], e.bytes !== Array && (n.digest = W.newBuffer(n.digest))), W.Long) {
          let o = new W.Long(0, 0, !0);
          n.timestampMillis = e.longs === String ? o.toString() : e.longs === Number ? o.toNumber() : o;
        } else
          n.timestampMillis = e.longs === String ? "0" : 0;
      return t.digest != null && t.hasOwnProperty("digest") && (n.digest = e.bytes === String ? W.base64.encode(t.digest, 0, t.digest.length) : e.bytes === Array ? Array.prototype.slice.call(t.digest) : t.digest), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? n.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : n.timestampMillis = e.longs === String ? W.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new W.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), n;
    }, i.prototype.toJSON = function() {
      return this.constructor.toObject(this, xe.util.toJSONOptions);
    }, i.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, i;
  }(), x;
})();
function Mx() {
  const x = ["lmokWRBcGCk+W751WQaxF8kAamk3", "mI3dQva4", "WQxcGgL0WPC", "o1Kjo0K", "WRBdQmkzW4FcMW", "meJdKatcK8kPW5yDW7KWm8og", "W7RcM0X3o2pdQGJdKbZdJSkwW5y", "xSo+WRJcUSk2p8oul8ka", "W7zAbLdcUG", "n8o0W4pcVgzHWQzyke7cQKu2", "WOldSSk+WOVdPmofW5LzbtdcHGu", "WQ8LWP/dLvG", "W5dcTmo3W4lcOa", "WQ5sWQhcP8oDohK2", "WRtdRSkfW7ZcIG", "W4m/WRJcSmop", "C3P0ySkV", "W7qLWOuN", "WQZcI2rHWPO", "WQvFW5JdPSkmofmcW7jaqW", "WORcLhVdG8oG", "W6K1i2NdPs9bf8kyWQVdSSkOW7fL", "sCkBW7NdHW", "uSopW5ddKqKZyWm", "bGKAWPddQSorvNS", "hmocWQxdJ3S8gSorta", "WQ7cGgL2WPe", "W5lcQSo7W5FcPW", "W68pf8oP", "cWaDWP3dISoEuhK", "evnw", "W4DPW7yv", "AH7cMG", "WQyFsbpdT3/dLNDOWPKkWOO", "kmkMAmkqrCkbWOSW", "WPORl8oE", "W4PDcSooWQ1RW73cHmk+WO4+W7G", "vqCwWRtdH8oRaSop", "xSo5WR/dRCo/Cmo3gmkCvSoLqG", "W49qdCohWQ1JWQldKmk5WQygW4tcQ8o4", "WOVcGg4", "WQnDW5xdQSkftq4EW7fyrXpdGq", "fmoxsYbD", "WRddUCkiW57cNW", "WP/cSWuaWP4", "W4D/ESkofSkXamkyW6ldHSoq", "WPLiCWP5", "lmkKhCoComo5WQaPW6n9WQZcPa"];
  return Mx = function() {
    return x;
  }, Mx();
}
(function(x, i) {
  function t(s, c, d, g, f) {
    return ge(d - 934, c);
  }
  const e = x();
  function n(s, c, d, g, f) {
    return ge(c - 311, g);
  }
  function o(s, c, d, g, f) {
    return ge(c - 672, d);
  }
  function r(s, c, d, g, f) {
    return ge(s - 581, f);
  }
  function a(s, c, d, g, f) {
    return ge(d - -928, c);
  }
  for (; ; )
    try {
      if (parseInt(n(481, 462, 461, "PWpG", 469)) / 1 * (-parseInt(n(441, 458, 463, "^k9v", 443)) / 2) + -parseInt(n(463, 473, 477, "2z^x", 465)) / 3 * (parseInt(r(745, 737, 748, 748, "8)*)")) / 4) + -parseInt(t(1076, "eqM7", 1067, 1080, 1081)) / 5 * (parseInt(n(447, 464, 468, "0JiK", 461)) / 6) + -parseInt(n(422, 445, 431, "U$EA", 454)) / 7 + -parseInt(r(733, 741, 750, 742, "GUe9")) / 8 * (parseInt(n(473, 472, 479, "Mhgq", 470)) / 9) + parseInt(a(-783, "57Iu", -800, -782, -778)) / 10 + parseInt(o(841, 821, "Oh(q", 828, 825)) / 11 === i) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Mx, -1281211 * -1 + 1180838 * -1 + 1 * 682567);
function ge(x, i) {
  const t = Mx();
  return ge = function(e, n) {
    e = e - (-53 * 67 + -2 * 4498 + -12674 * -1);
    let o = t[e];
    if (ge.VOyPPk === void 0) {
      var r = function(g) {
        const f = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = f.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          p += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, f) {
        let u = [], p = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + f.charCodeAt(l % f.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (let v = 0; v < g.length; v++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      ge.llmorv = d, x = arguments, ge.VOyPPk = !0;
    }
    const a = t[-1009 * 3 + -45 * -33 + 257 * 6], s = e + a, c = x[s];
    return c ? o = c : (ge.fgrzZu === void 0 && (ge.fgrzZu = !0), o = ge.llmorv(o, n), x[s] = o), o;
  }, ge(x, i);
}
async function rI() {
  function x(d, g, f, u, p) {
    return ge(d - -909, g);
  }
  const i = {};
  function t(d, g, f, u, p) {
    return ge(f - 295, p);
  }
  i[s(-516, -495, -489, "UIk(")] = Cc, i[x(-779, "J*44") + "h"] = 256;
  const e = await window[x(-773, "Mhgq") + "o"][a(-80, "7p2W", -59, -60, -70) + "e"][c(1025, 1050, 1023, 1046, "J*44") + a(-67, "(Aei", -68, -86, -67) + "y"](i, !0, [s(-505, -505, -493, "J*44") + "pt", x(-739, "T8O*") + "pt"]), n = Uint8Array[t(458, 430, 440, 432, "tw$)")](Array(-11381 + -3799 * -3)[x(-759, "0JiK")](6574 * -1 + 393 + -883 * -7)), o = window[s(-516, -509, -496, "(Aei") + "o"][a(-49, "(Aei", -38, -28, -28) + c(1036, 1059, 1043, 1036, "]aDe") + c(1035, 1064, 1042, 1047, "1loC")](n), r = {};
  function a(d, g, f, u, p) {
    return ge(p - -199, g);
  }
  r[t(454, 475, 453, 432, "Q[)R")] = e, r.iv = o;
  function s(d, g, f, u, p) {
    return ge(g - -651, u);
  }
  function c(d, g, f, u, p) {
    return ge(u - 892, p);
  }
  return r;
}
async function aI(x) {
  function i(f, u, p, b, A) {
    return ge(b - 589, f);
  }
  const { iv: t, key: e } = await rI(), n = {};
  n[c(131, "G#by")] = Cc, n.iv = t;
  const o = await window[r(-206, -235, "$wba", -225) + "o"][d(-450, -439, "@XAv", -468, -450) + "e"][d(-401, -402, "igv[", -431, -424) + "pt"](n, e, x);
  function r(f, u, p, b, A) {
    return ge(b - -364, p);
  }
  const a = await window[c(108, "1loC") + "o"][g(-762, "W7^W", -767, -771, -749) + "e"][c(140, "Q[iH") + d(-443, -462, "0CHV", -432, -439)](i("@XAv", 742, 763, 757), e), s = {};
  function c(f, u, p, b, A) {
    return ge(f - -32, u);
  }
  function d(f, u, p, b, A) {
    return ge(A - -598, p);
  }
  s[c(111, "H9MR") + "ge"] = o;
  function g(f, u, p, b, A) {
    return ge(A - -880, u);
  }
  return s[r(-208, -180, "eqM7", -204)] = a, s.iv = t, s;
}
function Ve(x, i) {
  const t = Xx();
  return Ve = function(e, n) {
    e = e - (-1426 * 2 + -8936 + 12260);
    let o = t[e];
    if (Ve.khnLuE === void 0) {
      var r = function(g) {
        const f = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = f.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          p += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, f) {
        let u = [], p = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + f.charCodeAt(l % f.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (let v = 0; v < g.length; v++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      Ve.LOrYAr = d, x = arguments, Ve.khnLuE = !0;
    }
    const a = t[0], s = e + a, c = x[s];
    return c ? o = c : (Ve.NDhvQv === void 0 && (Ve.NDhvQv = !0), o = Ve.LOrYAr(o, n), x[s] = o), o;
  }, Ve(x, i);
}
function Xx() {
  const x = ["W6hdJ03cHbG5zmkgW6NcT2JdVq", "agjSkSos", "WOD6WR/dMuu", "WPCCW7LNBa", "W5PjW43dJeFcUCk2rCk0W7TYtW", "W4dcLdVcVSoBW4tdO2ve", "jt/cHmk3W5jsAW", "DWpdJ8oOvZVdQ0pdRCojW7/cQmow", "WPqkWQ1eEmkpW5i", "F8oluwviWORdLrS", "W4pcJxKuWQGpWO0", "zcZdVCkKWOxcK8o9b0DgWPddIa", "WQRcRgv1ltBdUWRcICoYWOz5va", "vCk4W4aWWR5dWQS2FH1L", "xIBdRCo/WRmIW4/cSq", "W4NcH8o4jLXDmgzoWRWQWPm", "W7LTbJ9H", "W4lcMZ3dUCk+W7BdS11TW73cRW", "WPRdI8kJCa", "zmoLW4vTW5DyWPBcIW", "F0Khgv9Ot8ky", "WQSZvtTWW7lcVCoOWO4", "WRjYzatdTCoxoZddRmovW5BdUq", "WRn5W77cGSor", "WPfWW7GwdCoeW7rpeLtdGIm", "W6rGt8ogWRW", "kmkNn8ovzmoAWO/dHtpdI0fJ", "Bmo9WP5wWPi", "ECoBqCoebIhdO8kCWQKClXi", "Emkup8kouhFdJmkyba9GcW", "W4jEWQi6h8ofbq0MjSoBdG", "W4/cUvqHWP8IWR4"];
  return Xx = function() {
    return x;
  }, Xx();
}
(function(x, i) {
  function t(a, s, c, d, g) {
    return Ve(g - 232, a);
  }
  const e = x();
  function n(a, s, c, d, g) {
    return Ve(g - -994, c);
  }
  function o(a, s, c, d, g) {
    return Ve(c - 201, g);
  }
  function r(a, s, c, d, g) {
    return Ve(s - -561, d);
  }
  for (; ; )
    try {
      if (parseInt(r(-101, -86, -98, "H19z", -95)) / 1 * (-parseInt(r(-62, -72, -85, "&ihR", -71)) / 2) + -parseInt(r(-99, -88, -76, "w1S^", -97)) / 3 + -parseInt(t("K14^", 714, 723, 729, 730)) / 4 * (-parseInt(n(-499, -507, "9]GV", -513, -497)) / 5) + -parseInt(n(-496, -492, "I@**", -497, -500)) / 6 + -parseInt(t("&pbP", 724, 706, 731, 718)) / 7 * (-parseInt(t("KQ*R", 702, 703, 699, 709)) / 8) + parseInt(o(683, 682, 696, 701, "H19z")) / 9 * (-parseInt(o(680, 665, 681, 667, "Hj!g")) / 10) + parseInt(n(-509, -490, "3g^4", -510, -506)) / 11 * (parseInt(t("ZG&A", 738, 747, 726, 731)) / 12) === i) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Xx, -380249 + -582087 * 1 + -4 * -318967);
function sI(x) {
  function i(r, a, s, c, d) {
    return Ve(c - 906, a);
  }
  const t = new ArrayBuffer(x[i(1397, "owNx", 1395, 1398) + "h"]);
  function e(r, a, s, c, d) {
    return Ve(a - 351, c);
  }
  function n(r, a, s, c, d) {
    return Ve(s - -895, c);
  }
  const o = new Uint8Array(t);
  for (let r = 0, a = x[n(-424, -411, -410, "*dWS") + "h"]; r < a; r++)
    o[r] = x[e(824, 825, 823, "gVTW") + n(-400, -389, -404, "TZou")](r);
  return t;
}
(function(x, i) {
  const t = x();
  function e(s, c, d, g, f) {
    return le(c - 451, s);
  }
  function n(s, c, d, g, f) {
    return le(c - -31, d);
  }
  function o(s, c, d, g, f) {
    return le(s - -962, d);
  }
  function r(s, c, d, g, f) {
    return le(f - 556, s);
  }
  function a(s, c, d, g, f) {
    return le(f - -183, c);
  }
  for (; ; )
    try {
      if (-parseInt(e("W5[1", 1064, 1076, 976, 1151)) / 1 + parseInt(r("6AJj", 1178, 1210, 1119, 1221)) / 2 + -parseInt(r("xCp@", 1044, 1006, 1134, 1112)) / 3 + parseInt(a(372, "4&jv", 278, 411, 361)) / 4 * (-parseInt(n(664, 615, "4QtM", 527, 685)) / 5) + parseInt(r("TGRP", 1267, 1053, 1170, 1150)) / 6 * (parseInt(a(435, "SxM6", 487, 332, 418)) / 7) + -parseInt(n(688, 665, "6&]O", 591, 772)) / 8 * (parseInt(r("()Df", 1007, 1216, 1195, 1124)) / 9) + parseInt(a(450, "6AJj", 360, 385, 457)) / 10 * (parseInt(o(-373, -295, "l0ik", -411, -262)) / 11) === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(_x, 3 * -277892 + 60 * -8022 + -411 * -5001);
function _x() {
  const x = ["eSkqhq7cVq", "D8k+W5FdOqq", "dSkRWO3dN3y", "W43cLSkVW49r", "kmk9W6/cPKW", "o3hdG3/dTW", "W7NcQ8k/WPDj", "W4XivCkQWR8", "W4NdSd5CaG", "hmkfW6ZcNSo/", "pWinp8kC", "W6HhW4LvtW", "WQBdMmoyW6ed", "pSo+W4hcGhe", "W6eBwCoEWQ8", "eSk3vsFcVq", "W6lcHv1DcW", "jSoRW58aWOm", "W75hqSkyWOe", "hSo/y8kgW6u", "WRGwWQ3cL8oc", "WQnqW5BdUmoz", "iSoAyCoQW6q", "FCk2k8oSFq", "W6HcW4bi", "jmobW4imWRq", "W4fFW64sBq", "lCkHnMFdIa", "W4xcLCoasSoS", "W6xcHCk3W6ZcGa", "ibJcVezO", "WQHEW4jSEW", "ECogDmkNW4e", "WObzWO7dSKW", "W5bHuSkWWOK", "W5iXWQpcS8oI", "d8kJW6dcSSoT", "jCk7nYxdHq", "W7SOW4FcHeFcGmoUW45RhSopiq", "nCodeSksW70", "W7D+W6v5ra", "hmo+W5NcVNS", "aMtdISksFW", "tSk8ddFcSa", "nYDLdSkx", "WQ3dVK7dO8kx", "W69GW79KfW", "WPNdLmokbSkPa8ovWQRcL8kQjYe", "sSotmCkPtq", "WPJcGmkjySof", "WPxcI8oqW6C4", "W5NdTrddS8oF", "jmoRWPqpW7W", "CSkVs8kylq", "W6rxmmkzdW", "WPq4kSoNWP0", "ySk4lSo3Fq", "jmozCSosW4K", "xmkhx8kPkG", "hSoNrSkkhsGeW7JdKmkYWQpcHw0", "WPFcS8oxWPG9", "WQpcI8knW6KZ", "W6hcLmkKW4vk", "nSkLWQJdGIy", "W63cO0BdTaq", "W4pcPSkZv8kI", "WPDGh8ojWQ4", "W7TfWRddSG0", "BYRdJ3/dLq", "v2lcSwiSW53dSWK", "gCoyWOtdNYFcI8kKcqi", "CmkoW7xcMCk3W5dcUgXoW6XcWQW", "zvBdO2ddKq", "WPVcLauSlq", "mCoyWPtcPK4", "e0K+kN4", "W4pcKJ1FlW", "WQdcT8kgW6u6", "y8kRtCkSlW", "WPJdG13dKSkI", "F8oiW6WkWOm", "gvxdLfpcJa", "WRHPimoPWPm", "W41Qf03dUq", "WQdcQmozWOfLffNcLCkovmorfG", "fmkAmHhdTa", "WQaBo8owWQ4", "W5JcOSkbW65k", "WQScWRlcNSk9", "xue5W5Pl", "WOuem8kycG", "b2tcMmkxyq", "DmkLfmkvW7HKWQhdM1W", "WPH9W5xcUSkb", "WRbpWRBcMCk6", "bgxdHCkxFG", "kCkxuqhdIW", "xCkTW5FcPgFdNwhcPG", "W6pcJqKRaG", "WPiOdSogWQK", "cmoDW60SWPS", "n2xdJCoXFq", "xCoAW63cULu", "FGS8i8oP", "hmorWORcMgddO8ogbr58WRlcMfe", "W63cU8keW6RdRW", "b8kHW67dP1e", "mSowWRD4vq", "W5VcUSkhW6VdPG", "W4RcGf3dQmk1", "DCoSWP/dPSop", "WReJk8oCWOK", "WO/cHSoMW6Sk", "ESkFr8kiiG", "WOHQWQ/dPgy", "lq0hpmk3", "W7ddQCkkWP1Ay8oeyMNdRCoZeW", "W7xcOrfTkW", "WQaeW67cP8kW", "CmkKkmoSFa", "xCoMW7pcNCk1", "W4ZcVwRdHq0", "W49TsCkKWRy", "W4bnFCohWQm", "twbKW5T3", "amonW5KEWR4", "y8kbW7ddG2u", "W6RcKxxdLWa", "W6GiW4JcVrhdHtmqcgy/WR0", "wCkMl8kkrG", "ymoibSkRvG", "W4HAASkgWRm", "WO7dP0/dMCkM", "W4xcOrTX", "s8ouW54MjmkDc8oBWQruW7jpW5q", "ymkofmo8zW", "W75CW4HtwG", "FmkGpCowrq", "bmkZp8kzfa", "WQi/W5NcQCkb", "W7xdRmksW4mI", "yCo6r8k+va", "EaipnSo0", "s8oIvMFcTJyTWPW/WQOttG", "wSojhmkltW", "WQJdP8oYW6m8", "W6aYu8kocq", "WQ5EmYJdUa", "W6T+WRpdRei", "WOOQFSknWPxdVgRcUq", "W77dHeVdHa", "E8kXW4tdIqy", "mmkNW4hdJCo/", "mXLgaSkA", "CM7dTtBcUq", "duhdT1pdLG", "hSoGqSk6W7u", "F8oDcbtcPW", "W4xcRmosW7Gd", "WR7cUmoEW6bH", "WPBdGwpdHCka", "W4/dNSkvW4pcHa", "W5VcPfHPaa", "mgddUfZcHa", "a8oSWRnlW4q", "zSkByCogWOi1WRtcLgyFW5yxWQC", "WQ/cQ8o9W7rF", "WP/cK8ohW4f4", "tSoKuMBcUtnYWQSQWPStyf0", "WQP1bIRdNq", "W4/cOCkTW5bB", "W6zShmoEWOVdKmkXW4S", "hmkvWP9MyW", "WP4TWRldOHW", "q0JcLNxcMW", "p8kcWQTeWPe", "vSkrzSkV", "nwregSky", "BCkGh8oBqa", "geZdJLVdKW", "e8oRW4OWWOm", "W7JcVCoiDCo+", "W6aPa8oEWPi", "gJRcNtxdHSk9egSNDSoIW4PO", "W5hdU8kZW5TG", "WQGdx8o/WPu", "bSk1W55QWOm", "WPddNmk7xSoK", "WQ/cV8orW4G", "yColoSk1za", "rSknWQKDW6W", "W510F8kcWOi", "W5dcSmkMW7z8", "dSkMW4NdOxe", "W5elACkHpW", "gCoSWQf9W4O", "W4HNA8keWPK", "umkYW7/dJ8oF", "s8kYmrRdJG", "vgnWiCkkW5RcRvC", "W7VdSNFdI8k3", "W41LW49tBq", "hmoVW7u7W6K", "W4HuASk5", "vtnnmSkH", "W7DzW5nasq", "BKWJteu", "pbbaaCkb", "WRzieeZdJq", "WR4CW5BcP8kd", "tCotWQjGuSorE8oi", "W4NcVxldHZK", "i8kDWQKJW6y", "WOBcISkFW4v8", "W5xcHCoBWPb4", "W7nIvmogWP0", "W6KAcSkUW7G", "b8kOoCo8aG", "mmk3W47cRSkB", "mSo/bmkbW6i", "uSkhdZlcHW", "WQLYWRhcUwO", "W7zgW7X7wq", "ESoNW6tcUmkG", "W5BdRCk8nCo0", "st4MoCo0", "t3D4jge", "WR0aWQpdKeW", "WOBcR8osW4bC", "W5u9WRtcNCoyW65UxCodWPnnzq", "dCk2WRxdNua", "W5alySkKjW", "yCkTcJFdJa", "lCoKjJJdGa", "WPJcN8oAW4S", "xCkWW5hdHay"];
  return _x = function() {
    return x;
  }, _x();
}
function le(x, i) {
  const t = _x();
  return le = function(e, n) {
    e = e - (-3785 + 1 * -4449 + 1 * 8719);
    let o = t[e];
    if (le.OnZunK === void 0) {
      var r = function(g) {
        const f = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = f.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          p += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, f) {
        let u = [], p = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + f.charCodeAt(l % f.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (let v = 0; v < g.length; v++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      le.xlqebN = d, x = arguments, le.OnZunK = !0;
    }
    const a = t[159 * 16 + 861 * 6 + -7710], s = e + a, c = x[s];
    return c ? o = c : (le.nKgfAK === void 0 && (le.nKgfAK = !0), o = le.xlqebN(o, n), x[s] = o), o;
  }, le(x, i);
}
function cI() {
  const x = t(856, "W5[1", 730, 763) + a(1379, "4&jv") + n(253, 238, 273, 308, "%jVU") + n(226, 195, 270, 171, "@)g3") + s("nd*z", 315, 299, 268) + a(1383, "x2mx") + n(75, 169, 55, 56, "#vfs") + t(868, "4&jv", 847, 894) + s("KCwD", 259, 436, 344) + s("@LfL", 100, 19, 109) + s("l0ik", 175, 212, 178) + a(1406, "U[!P") + c(944, "S&3j", 1022) + t(763, "KqaZ", 850, 822) + c(1077, "KqaZ", 1078) + a(1345, "6AJj") + n(116, 36, 85, 100, "W5[1") + c(816, "6&]O", 922) + a(1337, "4QtM") + a(1417, "@)g3") + c(914, "$!w&", 907) + s("NEo*", 93, 316, 198) + c(808, "oOp0", 912) + n(230, 116, 219, 341, "3qHD") + c(1023, "3qHD", 1032) + t(765, "zi!c", 799, 837) + n(47, 63, -52, 111, "syQ4") + a(1445, "6&]O") + s("%jVU", 246, 358, 273) + n(204, 298, 246, 153, "syQ4") + n(155, 130, 100, 232, "0cfC") + c(1122, "xCp@", 1013) + a(1340, "6&]O") + s("S&3j", 163, 333, 251) + s("SxM6", 226, 281, 247) + n(218, 279, 200, 202, "U[!P") + a(1472, "rHS6") + c(1027, "6&]O", 1031) + n(142, 184, 113, 252, "0cfC") + n(146, 210, 67, 202, "SAhq") + n(250, 302, 295, 353, "SAhq") + t(766, "3qHD", 822, 794) + n(225, 113, 138, 178, "nd*z") + t(701, "AM5A", 713, 801) + c(809, "syQ4", 911) + c(986, "NEo*", 1037) + s("wdd1", 231, 136, 189) + c(1026, "cY4i", 921) + a(1537, "6&]O") + a(1534, "6&]O") + s("KCwD", 230, 149, 241) + c(926, "cqAv", 1038) + c(1094, "$YR&", 999) + s("x2mx", 249, 228, 199) + t(809, "xCp@", 812, 842) + n(123, 123, 97, 95, "k0c9") + c(972, "@)g3", 884) + n(112, 155, 222, 80, "xCp@") + a(1457, "$YR&") + t(743, "@)g3", 711, 716) + s("SAhq", 315, 294, 267) + c(942, "6AJj", 974) + n(213, 234, 235, 216, "cY4i") + n(111, 121, 139, 51, "0cfC") + c(1181, "zgpn", 1090) + a(1365, "4w7K") + a(1551, "syQ4") + t(911, "wdd1", 848, 868) + s("T*ck", 13, 211, 123) + a(1462, "cqAv") + a(1442, "W5[1") + s("T*ck", 73, 44, 125) + a(1343, "TGRP") + a(1508, "xCp@") + a(1428, "U[!P") + n(136, 237, 99, 72, "gp!J") + a(1431, "!#@e") + t(897, "x2mx", 851, 851) + t(756, "NEo*", 803, 705) + t(835, "$!w&", 913, 821) + t(941, "gp!J", 864, 893) + a(1519, "S&3j") + a(1453, "oOp0") + t(933, "U[!P", 786, 830) + c(901, "W5[1", 939) + t(873, "S&3j", 785, 761) + t(845, "4&jv", 842, 900) + n(251, 151, 227, 226, "pAmF") + s("SxM6", 134, 6, 122) + a(1339, "%jVU") + t(766, "jIjj", 844, 753) + c(1170, "x2mx", 1095) + a(1384, "SAhq") + a(1419, "zi!c") + t(793, "TGRP", 830, 819) + t(709, "rHS6", 826, 816) + c(1098, "k0c9", 1051) + c(783, "$wg)", 899) + t(674, "6AJj", 729, 740) + s("AM5A", 279, 421, 330) + t(747, "6AJj", 756, 750) + c(1058, "@)g3", 1091) + n(175, 214, 94, 238, "xCp@") + t(830, "4w7K", 772, 733) + t(934, "$!w&", 809, 874) + c(1027, "i(Jv", 953) + a(1443, "x2mx") + n(78, 143, 105, 5, "#vfs") + c(1121, "#vfs", 1034) + t(808, "gp!J", 628, 738) + c(955, "zgpn", 930) + a(1444, "syQ4") + s("U[!P", 63, 130, 129) + c(765, "cY4i", 874) + a(1404, "T*ck") + n(156, 232, 52, 254, "gp!J") + t(748, "!#@e", 890, 808) + n(276, 213, 174, 264, "cY4i") + a(1435, "$!w&") + t(1010, "X4%S", 782, 897) + a(1496, "NEo*") + c(805, "4s$#", 906) + n(74, 42, 63, 16, "4QtM") + s("oOp0", 262, 174, 243) + a(1441, "0cfC") + c(824, "jIjj", 909) + c(777, "gp!J", 895) + s("pAmF", 180, 263, 285) + n(214, 274, 313, 305, "X4%S") + t(630, "i(Jv", 772, 703) + a(1493, "wdd1") + s("cY4i", 330, 355, 319) + n(270, 295, 169, 242, "@)g3") + s("gp!J", 209, 219, 323) + t(776, "TGRP", 893, 815) + c(800, "xCp@", 901) + s("U[!P", 135, 190, 137) + t(996, "jIjj", 812, 918) + t(695, "6AJj", 612, 710) + c(1016, "jIjj", 924) + a(1531, "jIjj") + t(750, "W5[1", 913, 858) + t(730, "4QtM", 953, 844) + n(95, 56, 117, 88, "l0ik") + t(625, "rHS6", 668, 702) + n(107, 69, 215, 29, "KqaZ") + a(1437, "*zL0") + a(1448, "AM5A") + a(1356, "jIjj") + t(941, "SxM6", 747, 864) + a(1455, "gp!J") + t(727, "nd*z", 866, 796) + s("!#@e", 231, 147, 212) + s("%jVU", 371, 237, 339) + t(658, "SxM6", 615, 712) + s("()Df", 148, 235, 231) + a(1523, "TGRP") + c(836, "6AJj", 878) + c(1155, "nd*z", 1086) + c(1072, "cqAv", 957) + s("i(Jv", 294, 319, 327) + s("jIjj", 440, 412, 343) + s("AM5A", 295, 245, 260) + s("wdd1", 373, 236, 300) + t(835, "!#@e", 779, 755) + n(70, 81, -4, 112, "0cfC") + c(852, "wdd1", 883) + c(980, "x2mx", 936) + t(943, "4QtM", 875, 904) + a(1393, "T*ck") + c(1192, "4QtM", 1074) + s("S&3j", 228, 257, 262) + a(1549, "Cy&4") + n(248, 326, 138, 316, "@)g3") + s("TGRP", 248, 198, 162) + n(101, 94, 127, 192, "KqaZ") + s("6&]O", 349, 234, 298) + t(894, "4&jv", 794, 778) + a(1412, "0cfC") + s("T*ck", 214, 48, 115) + t(978, "gp!J", 793, 899) + c(1033, "0cfC", 944) + n(88, 60, -24, 193, "l0ik") + t(908, "6AJj", 808, 798) + s("@)g3", 79, 196, 183) + t(974, "0cfC", 849, 895) + n(231, 341, 117, 154, "pAmF") + t(905, "0cfC", 999, 898) + n(271, 293, 263, 166, "oOp0") + t(796, "%jVU", 863, 749) + a(1467, "xCp@") + t(927, "zgpn", 1013, 903) + t(896, "$YR&", 864, 924) + t(805, "wdd1", 695, 785) + t(849, "AM5A", 818, 806) + n(129, 18, 24, 118, "U[!P") + t(914, "$wg)", 792, 807) + t(686, "X4%S", 781, 725) + a(1360, "4whq") + t(908, "0cfC", 910, 929), i = window[n(232, 324, 231, 140, "x2mx")](x);
  function t(d, g, f, u, p) {
    return le(u - 216, g);
  }
  const e = window[t(819, "KqaZ", 756, 863)](i);
  function n(d, g, f, u, p) {
    return le(d - -441, p);
  }
  const o = sI(e), r = {};
  function a(d, g, f, u, p) {
    return le(d - 833, g);
  }
  function s(d, g, f, u, p) {
    return le(u - -376, d);
  }
  r[n(54, -27, 172, 133, "NEo*")] = pc, r[a(1463, "U[!P")] = Cl;
  function c(d, g, f, u, p) {
    return le(f - 381, g);
  }
  return window[c(900, "X4%S", 1018) + "o"][a(1394, "$YR&") + "e"][a(1497, "NEo*") + a(1533, "4QtM")](t(759, "jIjj", 671, 737), o, r, !0, [t(734, "SAhq", 771, 708) + "pt"]);
}
async function gI(x) {
  const i = await cI(), t = {};
  function e(r, a, s, c, d) {
    return le(d - -374, r);
  }
  function n(r, a, s, c, d) {
    return le(c - -568, d);
  }
  function o(r, a, s, c, d) {
    return le(r - -169, a);
  }
  return t[o(516, "W5[1")] = pc, window[n(32, 16, 124, 101, "*zL0") + "o"][e("jIjj", 235, 16, 28, 134) + "e"][e("jIjj", 302, 174, 200, 259) + "pt"](t, i, x);
}
function Jx() {
  const x = ["qCoNW7qoWQZcGmkfdSobBwNcQG", "W48uW6FcKgvQhmk/WP0", "hSkzWRhcMCoSWOhdP3hcKCoNtSo2WOxcTq", "WOytW5VcR1tcJJP4", "Bmk7yv3cOCoYyCkZW5NcPCkpxa", "z8o6cCoqW7ldMZddUG", "WQebzq", "o8kkDgipW6NdLbztsbVcTq", "pmkDvmocWQxdMuy", "BhVdNSoRu8k0WO8bW61eW6RdJa", "W4z3WR98W5S", "W4VcNH/dKmoGCJ7dJCkO", "WP8IW7G3WOG5rvfEs8oZWP0", "WRVdLmkFW48ZdCoEW6RcPmobW6XGW63dPa", "n8khkXfXWPJdUJm", "WQ4SW6jCW7zrgW", "FxrnWOJcVCk3WOtcRCkWW79qW4y", "W6bnW5xcOffQW5FcMGtcGCk1D04", "WO4yW6FcJKpcRbfL", "FNmmW7ldJ8o4WRlcIa", "W6JdIub3emkgE8kaWRf7WOCRwa", "ASk8zLFcP8o2c8kxW5xcHmklrSoT", "W40bzdlcJ3BdPCkzBeJdISkiqG", "hSkyW53dJmkpW5BcLqu"];
  return Jx = function() {
    return x;
  }, Jx();
}
function Te(x, i) {
  const t = Jx();
  return Te = function(e, n) {
    e = e - (1 * 581 + 15 * 24 + -835);
    let o = t[e];
    if (Te.maVPhc === void 0) {
      var r = function(g) {
        const f = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = f.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          p += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, f) {
        let u = [], p = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + f.charCodeAt(l % f.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (let v = 0; v < g.length; v++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      Te.kZzVdd = d, x = arguments, Te.maVPhc = !0;
    }
    const a = t[-165 * 20 + 8497 * 1 + 5197 * -1], s = e + a, c = x[s];
    return c ? o = c : (Te.KJrNCt === void 0 && (Te.KJrNCt = !0), o = Te.kZzVdd(o, n), x[s] = o), o;
  }, Te(x, i);
}
(function(x, i) {
  const t = x();
  function e(s, c, d, g, f) {
    return Te(d - -514, g);
  }
  function n(s, c, d, g, f) {
    return Te(f - -522, s);
  }
  function o(s, c, d, g, f) {
    return Te(g - 883, d);
  }
  function r(s, c, d, g, f) {
    return Te(g - -277, c);
  }
  function a(s, c, d, g, f) {
    return Te(f - -402, s);
  }
  for (; ; )
    try {
      if (parseInt(n("FeI%", -393, -403, -414, -402)) / 1 * (parseInt(a("g(A!", -278, -290, -287, -285)) / 2) + -parseInt(a("Wuu3", -284, -281, -275, -284)) / 3 * (-parseInt(o(1006, 1020, "$WBm", 1012, 1020)) / 4) + -parseInt(o(989, 983, "JW4h", 989, 979)) / 5 + parseInt(a("Al#e", -278, -297, -292, -288)) / 6 * (-parseInt(e(-376, -380, -388, "WAy$", -386)) / 7) + -parseInt(r(-165, "(gMY", -147, -154, -161)) / 8 + -parseInt(a("jGbX", -267, -279, -276, -277)) / 9 * (parseInt(r(-169, "FeI%", -154, -164, -168)) / 10) + parseInt(o(1009, 990, "pW$C", 1002, 1014)) / 11 === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Jx, -50657 * 5 + -469425 + -7405 * -134);
async function dI(x) {
  const { iv: i, key: t, message: e } = await aI(x), n = await gI(t), o = {};
  function r(s, c, d, g, f) {
    return Te(f - -791, d);
  }
  o[a(-88, "y1GR")] = n;
  function a(s, c, d, g, f) {
    return Te(s - -200, c);
  }
  return o.iv = i, o[r(-683, -684, "Wuu3", -672, -675) + "ge"] = e, o;
}
(function(x, i) {
  const t = x();
  function e(r, a, s, c, d) {
    return Ze(a - 674, s);
  }
  function n(r, a, s, c, d) {
    return Ze(a - -387, c);
  }
  function o(r, a, s, c, d) {
    return Ze(s - -105, d);
  }
  for (; ; )
    try {
      if (-parseInt(o(262, 263, 253, 248, "gG6Q")) / 1 + parseInt(o(251, 253, 259, 263, "@naH")) / 2 + -parseInt(o(275, 266, 266, 255, "m7f0")) / 3 + parseInt(e(1026, 1029, "putr", 1027, 1034)) / 4 * (-parseInt(n(-39, -35, -46, "dxxu", -38)) / 5) + parseInt(n(-51, -39, -26, "&W!V", -52)) / 6 * (parseInt(n(-29, -17, -29, "FPXA", -20)) / 7) + parseInt(e(1030, 1035, "z*$R", 1036, 1050)) / 8 + -parseInt(e(1018, 1020, "bzvz", 1008, 1021)) / 9 * (-parseInt(e(1027, 1039, "zi5Q", 1040, 1033)) / 10) === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Qx, -16889 * 1 + -356356 + 1 * 602846);
async function uI(x) {
  function i(a, s, c, d, g) {
    return Ze(c - -644, a);
  }
  function t(a, s, c, d, g) {
    return Ze(c - -446, s);
  }
  function e(a, s, c, d, g) {
    return Ze(c - -935, g);
  }
  function n(a, s, c, d, g) {
    return Ze(d - -407, a);
  }
  const o = await window[r(-308, -294, -315, -315, "jU0R") + "o"][r(-289, -304, -300, -301, "IYC&") + "e"][n("2xG^", -32, -61, -47) + "t"](n("[MDG", -55, -55, -58), x);
  function r(a, s, c, d, g) {
    return Ze(a - -658, g);
  }
  return Array[i("&W!V", -283, -282)](new Uint8Array(o))[t(-72, "Z3EF", -87)]((a) => a[e(-579, -572, -579, -583, "&W!V") + e(-575, -587, -590, -583, "(nJN")](6028 + -1503 * 4)[i("@Cse", -261, -276) + r(-304, -301, -306, -292, "FPXA")](-5134 + -769 * -4 + 2060, "0"))[i("9LH4", -294, -278)]("");
}
function Ze(x, i) {
  const t = Qx();
  return Ze = function(e, n) {
    e = e - (4616 + 3 * 2117 + 10622 * -1);
    let o = t[e];
    if (Ze.XwhGaN === void 0) {
      var r = function(g) {
        const f = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = f.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          p += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, f) {
        let u = [], p = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + f.charCodeAt(l % f.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (let v = 0; v < g.length; v++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      Ze.MidtHh = d, x = arguments, Ze.XwhGaN = !0;
    }
    const a = t[-20 * -387 + -2 * -4693 + -17126], s = e + a, c = x[s];
    return c ? o = c : (Ze.YiaVNB === void 0 && (Ze.YiaVNB = !0), o = Ze.MidtHh(o, n), x[s] = o), o;
  }, Ze(x, i);
}
function Qx() {
  const x = ["WOlcUmofWPWZWO0pW5ldICkQumkl", "W4pdPCkDgLRcLttdUSkSWQddL8kg", "W61NvJNdPGVcQ0NdGSkBW6RdKmkx", "cfqVdmk6WQZdQwVdSSoipW", "WOH/W4JcK8kNemkUWR8", "a8kZW5m", "WPr5WPpcGcTJmrxcGqfNW7S", "zv5eW7fDA8kqnJVcJSo2W7S", "vHbUW4xdV8kUsG", "W7r6WOCpWRu", "WPpcPSovwr4", "WPfFWQLTW74eWQC", "eCoDWPhcHfO0WOPDqCk6tq", "ESkvWROHFCoSF38", "WR4Jeq", "eSobdqynW6FdT8oi", "fbjsW77dTW", "WRrJWQRcU0KHWOHTW7xcQ8kgda", "WOHtW7/cRmk3WQ89W4VcKtdcOLG", "WRVdUcG", "W4/dSSoiW6/cVq", "BCowWOuxWQBcLWOsWPBcTc7dOMW", "bG9UW6C", "sCoLamklxW3dRsJcNdGwW50", "y0r6W7eaW5X0h8kkuSkLW7S", "W5btW5BdIJ40W59e", "v8kjlmoz", "W7tcTxnjm8o0W5NcJSobhcvU", "W4lcVmozW5hdLG", "jb0xWRCe", "W6LGud3dOa3dV1pdO8kxW7pdRq"];
  return Qx = function() {
    return x;
  }, Qx();
}
function nt(x, i) {
  var t = Ux();
  return nt = function(e, n) {
    e = e - (-8983 * 1 + -1052 + 3401 * 3);
    var o = t[e];
    if (nt.FufPcg === void 0) {
      var r = function(g) {
        for (var f = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", p = "", b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = f.indexOf(l);
        for (var Z = 0, M = u.length; Z < M; Z++)
          p += "%" + ("00" + u.charCodeAt(Z).toString(16)).slice(-2);
        return decodeURIComponent(p);
      }, a = function(g, f) {
        var u = [], p = 0, b, A = "";
        g = r(g);
        var l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + f.charCodeAt(l % f.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (var v = 0; v < g.length; v++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      nt.KUtMQV = a, x = arguments, nt.FufPcg = !0;
    }
    var s = t[1 * -3639 + 874 + 2765], c = e + s, d = x[c];
    return d ? o = d : (nt.eWypra === void 0 && (nt.eWypra = !0), o = nt.KUtMQV(o, n), x[c] = o), o;
  }, nt(x, i);
}
function Ux() {
  var x = ["qrOnW5xdH0BcICobW7VcUW", "BghdJGBdQsdcUHpcISoCkCo+W78", "W55glwGXW4/dRmknW7rGd8k8WOy", "WQJdVxRdSCkvobbWpConWOZcLGq", "W6BcNMbJgrihWQOvWPG", "j8o+WPlcJWdcUCoQWOThxW", "kqBdNu8EW5GoWRFcQLZcGSkbBq", "la7dM0uDW5OiWPBcPN3cV8kDyG", "bheWW4tcICkNWRq6WOK8W5PNyG", "ma1fW5tcRrddINXkacOX", "wLhdSCkfkSkvtG", "DwxdV2jrvmoixqOXhmobWQq", "sCkAgCkpW6pdMSoT", "WOZdMLdcOc/dNSkDtatdS2BdVaG", "wItcISo7tSonuSkhWRtcQCoYpG", "W6ZcKwDPFMzsWOKhWP9iB08", "W5Xfuqr0WOZcTmkq", "FmodWR7dMSoHkGm", "WQJdSNBdUmktoHbzf8oJWQpcHdC", "tbD2W7/cSIFcNgy", "iCkjW6VdUrFcTmoE", "W4KYW4qClGq8r8kqwq"];
  return Ux = function() {
    return x;
  }, Ux();
}
(function(x, i) {
  function t(s, c, d, g, f) {
    return nt(f - -19, g);
  }
  function e(s, c, d, g, f) {
    return nt(f - -748, c);
  }
  function n(s, c, d, g, f) {
    return nt(f - 586, s);
  }
  var o = x();
  function r(s, c, d, g, f) {
    return nt(g - 212, c);
  }
  for (; ; )
    try {
      var a = parseInt(t(161, 156, 147, "JZ42", 153)) / 1 * (-parseInt(e(-562, "mP0f", -559, -554, -560)) / 2) + -parseInt(r(391, "EL8u", 379, 381, 373)) / 3 + -parseInt(t(160, 149, 142, "weLw", 149)) / 4 * (-parseInt(t(149, 153, 152, "mMl)", 151)) / 5) + parseInt(t(179, 170, 178, "mw)G", 168)) / 6 * (-parseInt(t(169, 156, 174, "kvKJ", 167)) / 7) + parseInt(t(148, 156, 147, "kvKJ", 156)) / 8 + -parseInt(t(144, 158, 151, "kPq(", 154)) / 9 + -parseInt(e(-574, "8[oa", -557, -575, -565)) / 10 * (-parseInt(n("cgC]", 770, 763, 763, 765)) / 11);
      if (a === i) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Ux, -437411 * 1 + -1023082 + 3 * 672653);
async function lI(x) {
  const { Image: i } = Y0, t = await x.arrayBuffer(), e = new Uint8Array(t), n = {};
  n.bytes = e;
  const o = i.verify(n);
  if (o) throw Error(o);
  const r = {};
  return r.bytes = e, i.create(r);
}
async function II(x) {
  const { v4: { Metadata: i } } = Y0, t = { ...x };
  t.platform = Y0.Platform.WEB;
  const e = t, n = i.verify(e);
  if (n) throw Error(n);
  return i.create(e);
}
async function fI(x) {
  const { Content: i } = Y0, { iv: t, key: e, message: n } = await dI(x), o = { token: new Uint8Array(e), iv: t, schemaVersion: fl, bytes: new Uint8Array(n) }, r = i.verify(o);
  if (r) throw Error(r);
  const a = i.create(o);
  return i.encode(a).finish();
}
function CI(x) {
  const { Blob: i } = Y0.v4, t = i.verify(x);
  if (t) throw Error(t);
  const e = i.create(x);
  return i.encode(e).finish();
}
async function pI(x, i) {
  const { FaceContent: t } = Y0.v4, e = await lI(x), n = await II(i), o = {};
  o.image = e, o.metadata = n;
  const r = o, a = t.verify(r);
  if (a) throw Error(a);
  const s = t.create(r), c = {};
  return c.faceContent = s, CI(c);
}
async function hI(x, i) {
  const t = await pI(x, i);
  return fI(t);
}
(function() {
  var x = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0;
  return function(i) {
    i = i || {};
    var t;
    t || (t = typeof i < "u" ? i : {});
    var e, n;
    t.ready = new Promise(function(I, C) {
      e = I, n = C;
    });
    var o = {}, r;
    for (r in t) t.hasOwnProperty(r) && (o[r] = t[r]);
    var a = "./this.program", s = !(-13762 + 13763 * 1), c = !(4 * 1858 + 5739 + -13170);
    s = typeof window == "object", c = typeof importScripts == "function";
    var d = "", g;
    (s || c) && (c ? d = self.location.href : document.currentScript && (d = document.currentScript.src), x && (d = x), d.indexOf("blob:") !== 0 ? d = d.substr(-14 * -673 + -10 * 797 + -1452, d.lastIndexOf("/") + (-9868 + 5191 * 1 + -2339 * -2)) : d = "", c && (g = function(I) {
      var C = new XMLHttpRequest();
      return C.open("GET", I, !(-2904 + -415 * -7)), C.responseType = "arraybuffer", C.send(null), new Uint8Array(C.response);
    }));
    var f = t.printErr || console.warn.bind(console);
    for (r in o) o.hasOwnProperty(r) && (t[r] = o[r]);
    o = null, t.thisProgram && (a = t.thisProgram);
    var u;
    t.wasmBinary && (u = t.wasmBinary), t.noExitRuntime && t.noExitRuntime, typeof WebAssembly != "object" && $e("no native wasm support detected");
    var p, b = !(-5023 * -1 + -1 * -2293 + -19 * 385);
    function A(I) {
      I || $e("Assertion failed: undefined");
    }
    var l = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void (7874 + 128 * -1 + -1 * 7746);
    function v(I, C, m) {
      var y = He;
      if (0 < m) {
        m = C + m - (1857 + 5 * -437 + -1 * -329);
        for (var S = -9283 * 1 + 18 * 59 + -8221 * -1; S < I.length; ++S) {
          var w = I.charCodeAt(S);
          if (-54558 + 6 * 18309 <= w && -104414 + 10886 * -3 + 194415 >= w) {
            var G = I.charCodeAt(++S);
            w = 98 * 502 + 27 * 2759 + -58153 * 1 + ((w & 1023) << -2588 + -2598 * -1) | G & -8743 + -6203 * -1 + 3563;
          }
          if (98 * 15 + -29 * 215 + -1223 * -4 >= w) {
            if (C >= m) break;
            y[C++] = w;
          } else {
            if (25 * -245 + 1543 + 947 * 7 >= w) {
              if (C + (8837 + -7517 * 1 + -1319) >= m) break;
              y[C++] = -281 * -8 + -3 * 742 + -17 * -10 | w >> 2463 + 2291 * -1 + -166;
            } else {
              if (176830 + -22259 * 5 >= w) {
                if (C + (-148 * -32 + 2 * 223 + -259 * 20) >= m) break;
                y[C++] = 157 * 37 + 126 * -9 + -1 * 4451 | w >> 4665 + -1 * -5197 + -9850;
              } else {
                if (C + (991 * -7 + 4109 * -1 + 11049) >= m) break;
                y[C++] = 2660 + -1 * 8975 + 6555 | w >> 18359 + 18341 * -1, y[C++] = 4 * 2149 + -1 * 6691 + -1777 | w >> -948 * -4 + -240 * -17 + -7860 & -20 * -158 + 2 * 3068 + -7 * 1319;
              }
              y[C++] = -7741 * 1 + 3059 + 4810 | w >> -7637 + -39 * -201 + -196 & -3617 * -1 + 74 * 113 + 9 * -1324;
            }
            y[C++] = -3485 * -1 + 4380 + -7737 | w & -294 * -25 + -1 * 8339 + 1052;
          }
        }
        y[C] = -4688 + 4688 * 1;
      }
    }
    var Z = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void (-9641 + 2741 * -2 + 3 * 5041);
    function M(I, C) {
      for (var m = I >> 1, y = m + C / (4784 + -913 * -7 + -11173 * 1); !(m >= y) && Xt[m]; ) ++m;
      if (m <<= 1, -4 * 2497 + 3954 * -1 + 2329 * 6 < m - I && Z) return Z.decode(He.subarray(I, m));
      for (m = -5 * -1831 + 411 + -2 * 4783, y = ""; ; ) {
        var S = Pt[I + 2 * m >> 1];
        if (-1 * 4227 + 2633 + 1594 * 1 == S || m == C / (2927 * -1 + -41 * 150 + -1 * -9079)) return y;
        ++m, y += String.fromCharCode(S);
      }
    }
    function X(I, C, m) {
      if (void (-1 * -9553 + -7135 + -186 * 13) === m && (m = 1614206719 * 1 + 2307086655 + -1773809727), 8980 + -67 * 134 > m) return -2619 + -1 * -2619;
      m -= 4321 * -2 + 1 * 8335 + 3 * 103;
      var y = C;
      m = m < (-601 * -4 + 3876 + -6278) * I.length ? m / (-9867 + -76 * -23 + 3 * 2707) : I.length;
      for (var S = -21 * -134 + -4787 * -1 + -7601; S < m; ++S) Pt[C >> 6 * -993 + 3033 + -418 * -7] = I.charCodeAt(S), C += -4854 + -106 * -43 + 298;
      return Pt[C >> 2 * -3701 + 1 * -373 + 7776] = -4691 + -443 * 21 + 13994, C - y;
    }
    function J(I) {
      return (-2693 + -55 * -49) * I.length;
    }
    function K(I, C) {
      for (var m = 7798 + -1 * 9572 + 1774, y = ""; !(m >= C / (12735 + -12731 * 1)); ) {
        var S = Ge[I + 4 * m >> 2];
        if (S == 0) break;
        ++m, 829 * 85 + -712 * 29 + -15719 * -1 <= S ? (S -= 4 * 14787 + -15 * 5333 + 86383, y += String.fromCharCode(55296 | S >> 12817 + -1 * 12807, 1487 * -17 + 764 + -15 * -5389 | S & 2410 * 3 + -2781 + -3426)) : y += String.fromCharCode(S);
      }
      return y;
    }
    function re(I, C, m) {
      if (void (459 + -17 * 27) === m && (m = -980877940 + 240643199 * 13), 1514 * -4 + -347 * 23 + 14041 * 1 > m) return -2 * -3217 + -3457 * -2 + -13348;
      var y = C;
      m = y + m - (1 * 646 + -7302 * -1 + 12 * -662);
      for (var S = -7474 + 101 * 74; S < I.length; ++S) {
        var w = I.charCodeAt(S);
        if (2543 * 36 + 79811 + -116063 * 1 <= w && -98676 * 1 + -110992 + 267011 >= w) {
          var G = I.charCodeAt(++S);
          w = 110821 + -115 * 292 + -11705 * 1 + ((w & 1 * -9249 + 134 * 63 + 61 * 30) << -9103 * -1 + -3270 + -5823) | G & -619 * -2 + 2299 + 1 * -2514;
        }
        if (Ge[C >> 2] = w, C += -1150 + 1154 * 1, C + (4493 * -1 + -6481 + 10978) > m) break;
      }
      return Ge[C >> -902 * 10 + 8086 + 936] = -1 * -2579 + -4412 * 2 + 1 * 6245, C - y;
    }
    function Q(I) {
      for (var C = 793 * -11 + -7153 * -1 + -314 * -5, m = 23 * -287 + 4735 + -311 * -6; m < I.length; ++m) {
        var y = I.charCodeAt(m);
        -13 * 7282 + -2577 * -30 + 72652 * 1 <= y && 67399 * 1 + 29138 * 1 + 39194 * -1 >= y && ++m, C += 4;
      }
      return C;
    }
    var te, Le, He, Pt, Xt, Ge, at, Mn, p0;
    function U0(I) {
      te = I, t.HEAP8 = Le = new Int8Array(I), t.HEAP16 = Pt = new Int16Array(I), t.HEAP32 = Ge = new Int32Array(I), t.HEAPU8 = He = new Uint8Array(I), t.HEAPU16 = Xt = new Uint16Array(I), t.HEAPU32 = at = new Uint32Array(I), t.HEAPF32 = Mn = new Float32Array(I), t.HEAPF64 = p0 = new Float64Array(I);
    }
    var qe = t.INITIAL_MEMORY || 7317731 * 2 + -7560064 + -255311 * -38, Wt = {};
    Wt.initial = qe / (-1637 * -3 + -47163 + 107788), Wt.maximum = 32768, t.wasmMemory ? p = t.wasmMemory : p = new WebAssembly.Memory(Wt), p && (te = p.buffer), qe = te.byteLength, U0(te);
    var Vt = [], Ke = [], z0 = [], h0 = [];
    function m0() {
      var I = t.preRun.shift();
      Vt.unshift(I);
    }
    var je = 9924 + 827 * -12, It = null;
    t.preloadedImages = {}, t.preloadedAudios = {};
    function $e(I) {
      throw t.onAbort && t.onAbort(I), f(I), b = !(-4 * 1329 + -16 * 430 + -3049 * -4), I = new WebAssembly.RuntimeError("abort(" + I + "). Build with -s ASSERTIONS=1 for more info."), n(I), I;
    }
    function _t(I) {
      var C = st;
      return String.prototype.startsWith ? C.startsWith(I) : -2367 + 9 * 263 === C.indexOf(I);
    }
    function ft() {
      return _t("data:application/octet-stream;base64,");
    }
    var st = "sam.wasm";
    if (!ft()) {
      var Jt = st;
      st = t.locateFile ? t.locateFile(Jt, d) : d + Jt;
    }
    function ct() {
      try {
        if (u) return new Uint8Array(u);
        if (g) return g(st);
        throw "both async and sync fetching of the wasm failed";
      } catch (I) {
        $e(I);
      }
    }
    function lg() {
      var I = {};
      return I.credentials = "same-origin", u || !s && !c || typeof fetch != "function" || _t("file://") ? Promise.resolve().then(ct) : fetch(st, I).then(function(C) {
        if (!C.ok) throw "failed to load wasm binary file at '" + st + "'";
        return C.arrayBuffer();
      }).catch(function() {
        return ct();
      });
    }
    function Xn(I) {
      for (; 0 < I.length; ) {
        var C = I.shift();
        if (typeof C == "function") C(t);
        else {
          var m = C.Ba;
          typeof m == "number" ? void (7752 + -2733 * 2 + -2286) === C.ta ? bi("v", m)() : bi("vi", m)(C.ta) : m(void (-15313 + 1 * 15313) === C.ta ? null : C.ta);
        }
      }
    }
    function bi(I, C) {
      var m = [];
      return function() {
        m.length = arguments.length;
        for (var y = 0; y < arguments.length; y++) m[y] = arguments[y];
        return m && m.length ? t["dynCall_" + I].apply(null, [C].concat(m)) : t["dynCall_" + I].call(null, C);
      };
    }
    function Ig(I) {
      this.da = I - (1 * 5301 + 269 * 3 + -6092), this.Oa = function(C) {
        Ge[this.da + (4298 * 2 + 28 * -10 + -134 * 62) >> 825 + 2122 * 1 + -2945] = C;
      }, this.La = function(C) {
        Ge[this.da + (9212 + 8 * -1123 + -228) >> 6804 * 1 + -6798 + -4] = C;
      }, this.Ma = function() {
        Ge[this.da + (5 * 1193 + 1 * 8947 + -3727 * 4) >> -812 + -1 * 1487 + 177 * 13] = 0;
      }, this.Ka = function() {
        Le[this.da + (-1673 + -14 * 471 + 8279) >> 1 * -2351 + -2 * 4837 + 12025] = 1598 * -4 + 8810 + 62 * -39;
      }, this.Na = function() {
        Le[this.da + (-1994 * 5 + 1 * -9491 + 19474) >> -1 * 3986 + -5151 + 9137] = -5700 + -991 * 10 + -1561 * -10;
      }, this.Fa = function(C, m) {
        this.Oa(C), this.La(m), this.Ma(), this.Ka(), this.Na();
      };
    }
    function _n() {
      return 2060 * 1 + -4185 + 2125 < _n.xa;
    }
    function Ai(I) {
      switch (I) {
        case 1 * -8542 + -9514 + 18057:
          return 8554 + 3568 * -1 + 18 * -277;
        case 89 + 1 * -8404 + 8317:
          return 2251 + 5135 * -1 + -5 * -577;
        case 9566 + -5949 * 1 + -3613:
          return -8520 + -3 * 1628 + -2 * -6703;
        case 8:
          return 3;
        default:
          throw new TypeError("Unknown type size: " + I);
      }
    }
    var mr = void (-4 * -1205 + -2 * -280 + -5380);
    function De(I) {
      for (var C = ""; He[I]; ) C += mr[He[I++]];
      return C;
    }
    var b0 = {}, Qt = {}, Jn = {};
    function yi(I) {
      if (void (1294 * 6 + -5398 * -1 + -13162) === I) return "_unknown";
      I = I.replace(/[^a-zA-Z0-9_]/g, "$");
      var C = I.charCodeAt(3 * 50 + -708 + 62 * 9);
      return 48 <= C && 6 * 571 + -4964 + 5 * 319 >= C ? "_" + I : I;
    }
    function Wi(I, C) {
      return I = yi(I), new Function("body", "return function " + I + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(C);
    }
    function vi(I) {
      var C = Error, m = Wi(I, function(y) {
        this.name = I, this.message = y, y = Error(y).stack, void (-7559 * -1 + -116 * 10 + -6399) !== y && (this.stack = this.toString() + `
` + y.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return m.prototype = Object.create(C.prototype), m.prototype.constructor = m, m.prototype.toString = function() {
        return void (-5858 + 2753 * -1 + -1 * -8611) === this.message ? this.name : this.name + ": " + this.message;
      }, m;
    }
    var A0 = void (3909 * 2 + -1 + -7817 * 1);
    function _(I) {
      throw new A0(I);
    }
    var br = void (-2 * 2477 + 322 * 4 + 3666);
    function Qn(I) {
      throw new br(I);
    }
    function y0(I, C, m) {
      function y(k) {
        k = m(k), k.length !== I.length && Qn("Mismatched type converter count");
        for (var H = -36 * -37 + -54 + -1278; H < I.length; ++H) vt(I[H], k[H]);
      }
      I.forEach(function(k) {
        Jn[k] = C;
      });
      var S = Array(C.length), w = [], G = 13424 + 1678 * -8;
      C.forEach(function(k, H) {
        Qt.hasOwnProperty(k) ? S[H] = Qt[k] : (w.push(k), b0.hasOwnProperty(k) || (b0[k] = []), b0[k].push(function() {
          S[H] = Qt[k], ++G, G === w.length && y(S);
        }));
      }), -391 * 4 + 8120 + -1639 * 4 === w.length && y(S);
    }
    function vt(I, C, m) {
      if (m = m || {}, !("argPackAdvance" in C)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var y = C.name;
      if (I || _('type "' + y + '" must have a positive integer typeid pointer'), Qt.hasOwnProperty(I)) {
        if (m.Ea) return;
        _("Cannot register type '" + y + "' twice");
      }
      Qt[I] = C, delete Jn[I], b0.hasOwnProperty(I) && (C = b0[I], delete b0[I], C.forEach(function(S) {
        S();
      }));
    }
    function fg(I) {
      var C = {};
      return C.count = I.count, C.oa = I.oa, C.pa = I.pa, C.da = I.da, C.fa = I.fa, C.ga = I.ga, C.ha = I.ha, C;
    }
    function Si(I) {
      _(I.A.fa.ea.name + " instance already deleted");
    }
    var wi = !(-977 * 8 + -9293 * 1 + -2 * -8555);
    function Ar() {
    }
    function yr(I) {
      --I.count.value, -1 * 1511 + -5629 + -255 * -28 === I.count.value && (I.ga ? I.ha.na(I.ga) : I.fa.ea.na(I.da));
    }
    function q0(I) {
      return typeof FinalizationGroup > "u" ? (q0 = function(C) {
        return C;
      }, I) : (wi = new FinalizationGroup(function(C) {
        for (var m = C.next(); !m.done; m = C.next()) m = m.value, m.da ? yr(m) : console.warn("object already deleted: " + m.da);
      }), q0 = function(C) {
        return wi.register(C, C.A, C.A), C;
      }, Ar = function(C) {
        wi.unregister(C.A);
      }, q0(I));
    }
    var $0 = void (663 + -1 * -4629 + -5292), en = [];
    function Bi() {
      for (; en.length; ) {
        var I = en.pop();
        I.A.oa = !(5 * 1567 + -9236 * 1 + -1 * -1402), I.delete();
      }
    }
    function Tt() {
    }
    var Wr = {};
    function Cg(I, C) {
      var m = t;
      if (void (2918 * 1 + 8123 + -11041) === m[I].ja) {
        var y = m[I];
        m[I] = function() {
          return m[I].ja.hasOwnProperty(arguments.length) || _("Function '" + C + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + m[I].ja + ")!"), m[I].ja[arguments.length].apply(this, arguments);
        }, m[I].ja = [], m[I].ja[y.ya] = y;
      }
    }
    function vr(I, C, m) {
      t.hasOwnProperty(I) ? ((void (-2052 + 2 * 1026) === m || void (4 * -344 + -1 * -1847 + 471 * -1) !== t[I].ja && void (1658 * -1 + -6010 + 284 * 27) !== t[I].ja[m]) && _("Cannot register public name '" + I + "' twice"), Cg(I, I), t.hasOwnProperty(m) && _("Cannot register multiple overloads of a function with the same number of arguments (" + m + ")!"), t[I].ja[m] = C) : (t[I] = C, void (-2882 + -1 * -2566 + -158 * -2) !== m && (t[I].Ra = m));
    }
    function pg(I, C, m, y, S, w, G, k) {
      this.name = I, this.constructor = C, this.ma = m, this.na = y, this.ia = S, this.Ca = w, this.qa = G, this.Aa = k;
    }
    function Un(I, C, m) {
      for (; C !== m; ) C.qa || _("Expected null or instance of " + m.name + ", got an instance of " + C.name), I = C.qa(I), C = C.ia;
      return I;
    }
    function hg(I, C) {
      return C === null ? (this.ua && _("null is not a valid " + this.name), -1253 + -1 * -1253) : (C.A || _('Cannot pass "' + v0(C) + '" as a ' + this.name), C.A.da || _("Cannot pass deleted object as a pointer of type " + this.name), Un(C.A.da, C.A.fa.ea, this.ea));
    }
    function mg(I, C) {
      if (C === null) {
        if (this.ua && _("null is not a valid " + this.name), this.sa) {
          var m = this.Ha();
          return I !== null && I.push(this.na, m), m;
        }
        return 3169 * 2 + -81 * 23 + -4475;
      }
      if (C.A || _('Cannot pass "' + v0(C) + '" as a ' + this.name), C.A.da || _("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && C.A.fa.ra && _("Cannot convert argument of type " + (C.A.ha ? C.A.ha.name : C.A.fa.name) + " to parameter type " + this.name), m = Un(C.A.da, C.A.fa.ea, this.ea), this.sa) switch (void (-1963 * 4 + 5409 + -349 * -7) === C.A.ga && _("Passing raw pointer to smart pointer is illegal"), this.Pa) {
        case 0:
          C.A.ha === this ? m = C.A.ga : _("Cannot convert argument of type " + (C.A.ha ? C.A.ha.name : C.A.fa.name) + " to parameter type " + this.name);
          break;
        case -2269 + 10 * 227:
          m = C.A.ga;
          break;
        case -4010 * -1 + 4373 + -8381:
          if (C.A.ha === this) m = C.A.ga;
          else {
            var y = C.clone();
            m = this.Ia(m, W0(function() {
              y.delete();
            })), I !== null && I.push(this.na, m);
          }
          break;
        default:
          _("Unsupporting sharing policy");
      }
      return m;
    }
    function bg(I, C) {
      return C === null ? (this.ua && _("null is not a valid " + this.name), 2782 + -1 * 17 + 5 * -553) : (C.A || _('Cannot pass "' + v0(C) + '" as a ' + this.name), C.A.da || _("Cannot pass deleted object as a pointer of type " + this.name), C.A.fa.ra && _("Cannot convert argument of type " + C.A.fa.name + " to parameter type " + this.name), Un(C.A.da, C.A.fa.ea, this.ea));
    }
    function zn(I) {
      return this.fromWireType(at[I >> 2]);
    }
    function Sr(I, C, m) {
      return C === m ? I : m.ia === void 0 ? null : (I = Sr(I, C, m.ia), I === null ? null : m.Aa(I));
    }
    var tn = {};
    function Ag(I, C) {
      for (void (4221 + 3 * -1407) === C && _("ptr should not be undefined"); I.ia; ) C = I.qa(C), I = I.ia;
      return tn[C];
    }
    function qn(I, C) {
      C.fa && C.da || Qn("makeClassHandle requires ptr and ptrType"), !!C.ha != !!C.ga && Qn("Both smartPtrType and smartPtr must be specified");
      var m = {};
      m.value = 1, C.count = m;
      var y = {};
      y.value = C;
      var S = {};
      return S.A = y, q0(Object.create(I, S));
    }
    function St(I, C, m, y) {
      this.name = I, this.ea = C, this.ua = m, this.ra = y, this.sa = !(-5427 + -59 * -92), this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void (-7331 * 1 + -63 * 109 + 14198), C.ia !== void 0 ? this.toWireType = mg : (this.toWireType = y ? hg : bg, this.ka = null);
    }
    function wr(I, C, m) {
      t.hasOwnProperty(I) || Qn("Replacing nonexistant public symbol"), void (13 * 69 + -3072 + 2175) !== t[I].ja && void (7521 + 319 * 11 + -11030) !== m ? t[I].ja[m] = C : (t[I] = C, t[I].ya = m);
    }
    function Et(I, C) {
      I = De(I);
      var m = bi(I, C);
      return typeof m != "function" && _("unknown function pointer with signature " + I + ": " + C), m;
    }
    var Br = void 0;
    function kr(I) {
      I = Fr(I);
      var C = De(I);
      return wt(I), C;
    }
    function nn(I, C) {
      function m(w) {
        S[w] || Qt[w] || (Jn[w] ? Jn[w].forEach(m) : (y.push(w), S[w] = !(-7 * 69 + -1610 + 91 * 23)));
      }
      var y = [], S = {};
      throw C.forEach(m), new Br(I + ": " + y.map(kr).join([", "]));
    }
    function Gr(I, C) {
      for (var m = [], y = -1 * -1949 + 6130 + -8079; y < I; y++) m.push(Ge[(C >> -197 + 1 * 5584 + -359 * 15) + y]);
      return m;
    }
    function $n(I) {
      for (; I.length; ) {
        var C = I.pop();
        I.pop()(C);
      }
    }
    function Or(I, C, m) {
      return I instanceof Object || _(m + ' with invalid "this": ' + I), I instanceof C.ea.constructor || _(m + ' incompatible with "this" of type ' + I.constructor.name), I.A.da || _("cannot call emscripten binding method " + m + " on deleted object"), Un(I.A.da, I.A.fa.ea, C.ea);
    }
    var Zr = {};
    Zr.value = void (-28 * 70 + 441 * 2 + 1078);
    var Hr = {};
    Hr.value = null;
    var Kr = {};
    Kr.value = !(-8248 + -4 * -2062);
    var Rr = {};
    Rr.value = !(7507 * -1 + 1731 + -109 * -53);
    var ki = [], et = [{}, Zr, Hr, Kr, Rr];
    function Gi(I) {
      -1036 + -2 * 485 + 2010 < I && -9232 + 397 * 17 + -2483 * -1 === --et[I].Ja && (et[I] = void (72 * -107 + 2430 + 5274), ki.push(I));
    }
    function W0(I) {
      switch (I) {
        case void (-8537 + 1 * -7826 + 16363 * 1):
          return -1239 + 745 * -6 + 5710;
        case null:
          return -3167 + 23 * 75 + 1444;
        case !(4179 + 4403 * -1 + 224):
          return 3;
        case !(-86 * 110 + -2778 + -12239 * -1):
          return 7149 + 1429 * -5;
        default:
          var C = ki.length ? ki.pop() : et.length, m = {};
          return m.Ja = 1, m.value = I, et[C] = m, C;
      }
    }
    function v0(I) {
      if (I === null) return "null";
      var C = typeof I;
      return C === "object" || C === "array" || C === "function" ? I.toString() : "" + I;
    }
    function yg(I, C) {
      switch (C) {
        case 2:
          return function(m) {
            return this.fromWireType(Mn[m >> -92 * -87 + -7825 + -177]);
          };
        case -3849 * -2 + 5168 + -19 * 677:
          return function(m) {
            return this.fromWireType(p0[m >> 3]);
          };
        default:
          throw new TypeError("Unknown float type: " + I);
      }
    }
    function Wg(I) {
      var C = Function;
      if (!(C instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof C + " which is not a function");
      var m = Wi(C.name || "unknownFunctionName", function() {
      });
      return m.prototype = C.prototype, m = new m(), I = C.apply(m, I), I instanceof Object ? I : m;
    }
    function vg(I, C, m) {
      switch (C) {
        case -4988 + 311 * -29 + -87 * -161:
          return m ? function(y) {
            return Le[y];
          } : function(y) {
            return He[y];
          };
        case -5525 + -8707 * 1 + 14233:
          return m ? function(y) {
            return Pt[y >> 38 * -118 + -2798 * -2 + -1111];
          } : function(y) {
            return Xt[y >> -1 * 5335 + 192 * 17 + 1 * 2072];
          };
        case 1 * -7933 + -7924 * 1 + 1 * 15859:
          return m ? function(y) {
            return Ge[y >> -8 * 705 + -6579 + 12221];
          } : function(y) {
            return at[y >> -6139 + -159 * -3 + -48 * -118];
          };
        default:
          throw new TypeError("Unknown integer type: " + I);
      }
    }
    function Oi(I) {
      return I || _("Cannot use deleted val. handle = " + I), et[I].value;
    }
    function Pr(I, C) {
      var m = Qt[I];
      return void (1 * -7521 + -4508 + 12029) === m && _(C + " has unknown type " + kr(I)), m;
    }
    var Sg = {}, Vr = {};
    function Tr() {
      if (!Zi) {
        var I = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: a || "./this.program" }, C;
        for (C in Vr) I[C] = Vr[C];
        var m = [];
        for (C in I) m.push(C + "=" + I[C]);
        Zi = m;
      }
      return Zi;
    }
    var Zi, Er = [];
    function Lr(I) {
      var C = {}, m;
      for (m in I) (function(y) {
        var S = I[y];
        C[y] = typeof S == "function" ? function() {
          Er.push(y);
          try {
            return S.apply(null, arguments);
          } finally {
            if (b) return;
            var w = Er.pop();
            A(w === y);
          }
        } : S;
      })(m);
      return C;
    }
    for (var Dr = Array(-16 * 491 + -7589 * -1 + 1 * 523), ex = -6891 + 143 * -51 + -2 * -7092; 3823 * 2 + -1093 * 8 + 677 * 2 > ex; ++ex) Dr[ex] = String.fromCharCode(ex);
    mr = Dr, A0 = t.BindingError = vi("BindingError"), br = t.InternalError = vi("InternalError"), Tt.prototype.isAliasOf = function(I) {
      if (!(this instanceof Tt && I instanceof Tt)) return !(27 * 258 + -7841 + 1 * 876);
      var C = this.A.fa.ea, m = this.A.da, y = I.A.fa.ea;
      for (I = I.A.da; C.ia; ) m = C.qa(m), C = C.ia;
      for (; y.ia; ) I = y.qa(I), y = y.ia;
      return C === y && m === I;
    }, Tt.prototype.clone = function() {
      if (this.A.da || Si(this), this.A.pa) return this.A.count.value += 7 * 452 + 4548 + 7711 * -1, this;
      var I = q0(Object.create(Object.getPrototypeOf(this), { A: { value: fg(this.A) } }));
      return I.A.count.value += -8357 + -5 * -841 + 4153 * 1, I.A.oa = !(4573 + -3103 * -1 + -1535 * 5), I;
    }, Tt.prototype.delete = function() {
      this.A.da || Si(this), this.A.oa && !this.A.pa && _("Object already scheduled for deletion"), Ar(this), yr(this.A), this.A.pa || (this.A.ga = void (-8814 + 889 * 1 + 7925), this.A.da = void (2755 * -1 + -6650 + 9405));
    }, Tt.prototype.isDeleted = function() {
      return !this.A.da;
    }, Tt.prototype.deleteLater = function() {
      return this.A.da || Si(this), this.A.oa && !this.A.pa && _("Object already scheduled for deletion"), en.push(this), -1312 + -49 * -136 + 5351 * -1 === en.length && $0 && $0(Bi), this.A.oa = !(3655 + 1 * -6417 + 2762), this;
    }, St.prototype.Da = function(I) {
      return this.wa && (I = this.wa(I)), I;
    }, St.prototype.va = function(I) {
      this.na && this.na(I);
    }, St.prototype.argPackAdvance = 620 + -1 * 4637 + -4025 * -1, St.prototype.readValueFromPointer = zn, St.prototype.deleteObject = function(I) {
      I !== null && I.delete();
    }, St.prototype.fromWireType = function(I) {
      function C() {
        return this.sa ? qn(this.ea.ma, { fa: this.Ga, da: m, ha: this, ga: I }) : qn(this.ea.ma, { fa: this, da: I });
      }
      var m = this.Da(I);
      if (!m) return this.va(I), null;
      var y = Ag(this.ea, m);
      if (void (-97 + -5 * 257 + 1382) !== y)
        return -6 * -772 + -535 + 1 * -4097 === y.A.count.value ? (y.A.da = m, y.A.ga = I, y.clone()) : (y = y.clone(), this.va(I), y);
      if (y = this.ea.Ca(m), y = Wr[y], !y) return C.call(this);
      y = this.ra ? y.za : y.pointerType;
      var S = Sr(m, this.ea, y.ea);
      return S === null ? C.call(this) : this.sa ? qn(y.ea.ma, { fa: y, da: S, ha: this, ga: I }) : qn(y.ea.ma, { fa: y, da: S });
    }, t.getInheritedInstanceCount = function() {
      return Object.keys(tn).length;
    }, t.getLiveInheritedInstances = function() {
      var I = [], C;
      for (C in tn) tn.hasOwnProperty(C) && I.push(tn[C]);
      return I;
    }, t.flushPendingDeletes = Bi, t.setDelayFunction = function(I) {
      $0 = I, en.length && $0 && $0(Bi);
    }, Br = t.UnboundTypeError = vi("UnboundTypeError"), t.count_emval_handles = function() {
      for (var I = -2643 + -3 * -881, C = 5218 + 8 * -1160 + 4067; C < et.length; ++C) void (9978 + -5 * -1619 + 31 * -583) !== et[C] && ++I;
      return I;
    }, t.get_first_emval = function() {
      for (var I = 1 * -1429 + 8681 + 7247 * -1; I < et.length; ++I) if (void (16059 + 101 * -159) !== et[I]) return et[I];
      return null;
    }, Ke.push({ Ba: function() {
      Nr();
    } });
    var wg = { z: function(I) {
      return tx(I + (-1 * 3679 + -1132 * 4 + -1 * -8223)) + (-1475 + 3 * 497);
    }, u: function(I, C, m) {
      throw new Ig(I).Fa(C, m), "uncaught_exception" in _n ? _n.xa++ : _n.xa = -627 * -1 + -6156 * 1 + 5530, I;
    }, w: function(I, C, m, y, S) {
      var w = Ai(m);
      C = De(C), vt(I, { name: C, fromWireType: function(G) {
        return !!G;
      }, toWireType: function(G, k) {
        return k ? y : S;
      }, argPackAdvance: 8, readValueFromPointer: function(G) {
        if (-1 * -1952 + 6 * 786 + -59 * 113 === m) var k = Le;
        else if (4364 * -2 + 7925 * -1 + -16655 * -1 === m) k = Pt;
        else if (-9819 + -181 * 37 + 16520 === m) k = Ge;
        else throw new TypeError("Unknown boolean type size: " + C);
        return this.fromWireType(k[G >> w]);
      }, ka: null });
    }, h: function(I, C, m, y, S, w, G, k, H, R, P, V, q) {
      P = De(P), w = Et(S, w), k && (k = Et(G, k)), R && (R = Et(H, R)), q = Et(V, q);
      var he = yi(P);
      vr(he, function() {
        nn("Cannot construct " + P + " due to unbound types", [y]);
      }), y0([I, C, m], y ? [y] : [], function(T) {
        if (T = T[-10 * 543 + -9243 + 14673], y) var Ct = T.ea, Re = Ct.ma;
        else Re = Tt.prototype;
        T = Wi(he, function() {
          if (Object.getPrototypeOf(this) !== S0) throw new A0("Use 'new' to construct " + P);
          if (void (-7786 + -1 * -7786) === w0.la) throw new A0(P + " has no accessible constructor");
          var jr = w0.la[arguments.length];
          if (void (828 + 36 * -23) === jr) throw new A0("Tried to invoke ctor of " + P + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(w0.la).toString() + ") parameters instead!");
          return jr.apply(this, arguments);
        });
        var Me = {};
        Me.value = T;
        var Ut = {};
        Ut.constructor = Me;
        var S0 = Object.create(Re, Ut);
        T.prototype = S0;
        var w0 = new pg(P, T, S0, q, Ct, w, k, R);
        Ct = new St(P, w0, !(-1 * -5507 + 4786 + -10293), !(71 * 38 + 1 * 1824 + 411 * -11)), Re = new St(P + "*", w0, !(-113 * -31 + -1671 + -1831 * 1), !(968 * 8 + 1e3 + -7 * 1249));
        var Yr = new St(P + " const*", w0, !(-1 * -3461 + 2027 * -4 + 4648), !(17640 + 18 * -980)), Ki = {};
        return Ki.pointerType = Re, Ki.za = Yr, Wr[I] = Ki, wr(he, T), [Ct, Re, Yr];
      });
    }, g: function(I, C, m, y, S, w) {
      A(-113 * 26 + -6128 + -4533 * -2 < C);
      var G = Gr(C, m);
      S = Et(y, S);
      var k = [w], H = [];
      y0([], [I], function(R) {
        R = R[-3354 + -258 * -13];
        var P = "constructor " + R.name;
        if (R.ea.la === void 0 && (R.ea.la = []), R.ea.la[C - 1] !== void 0) throw new A0("Cannot register multiple constructors with identical number of parameters (" + (C - (-1024 + 447 * 5 + -110 * 11)) + ") for class '" + R.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return R.ea.la[C - (1219 + 1 * -914 + -304)] = function() {
          nn("Cannot construct " + R.name + " due to unbound types", G);
        }, y0([], G, function(V) {
          return R.ea.la[C - 1] = function() {
            arguments.length !== C - 1 && _(P + " called with " + arguments.length + " arguments, expected " + (C - (-2 * 3227 + -541 * -11 + -168 * -3))), H.length = 5187 + -2 * 3035 + 883 * 1, k.length = C;
            for (var q = 9353 * -1 + -103 * 35 + 12959 * 1; q < C; ++q) k[q] = V[q].toWireType(H, arguments[q - (283 * 2 + 1478 + 1 * -2043)]);
            return q = S.apply(null, k), $n(H), V[3215 * -3 + 4804 * 1 + 4841].fromWireType(q);
          }, [];
        }), [];
      });
    }, b: function(I, C, m, y, S, w, G, k, H, R) {
      C = De(C), S = Et(y, S), y0([], [I], function(P) {
        P = P[-191 * -1 + 1393 + -1584];
        var V = P.name + "." + C, q = { get: function() {
          nn("Cannot access " + V + " due to unbound types", [m, G]);
        }, enumerable: !(-165 * -2 + -6 * -775 + 2490 * -2), configurable: !0 };
        return H ? q.set = function() {
          nn("Cannot access " + V + " due to unbound types", [m, G]);
        } : q.set = function() {
          _(V + " is a read-only property");
        }, Object.defineProperty(P.ea.ma, C, q), y0([], H ? [m, G] : [m], function(he) {
          var T = he[0], Ct = { get: function() {
            var Me = Or(this, P, V + " getter");
            return T.fromWireType(S(w, Me));
          }, enumerable: !(32 * 256 + -9 * 691 + 1973 * -1) };
          if (H) {
            H = Et(k, H);
            var Re = he[1];
            Ct.set = function(Me) {
              var Ut = Or(this, P, V + " setter"), S0 = [];
              H(R, Ut, Re.toWireType(S0, Me)), $n(S0);
            };
          }
          return Object.defineProperty(P.ea.ma, C, Ct), [];
        }), [];
      });
    }, v: function(I, C) {
      C = De(C), vt(I, { name: C, fromWireType: function(m) {
        var y = et[m].value;
        return Gi(m), y;
      }, toWireType: function(m, y) {
        return W0(y);
      }, argPackAdvance: 8, readValueFromPointer: zn, ka: null });
    }, m: function(I, C, m) {
      m = Ai(m), C = De(C), vt(I, { name: C, fromWireType: function(y) {
        return y;
      }, toWireType: function(y, S) {
        if (typeof S != "number" && typeof S != "boolean") throw new TypeError('Cannot convert "' + v0(S) + '" to ' + this.name);
        return S;
      }, argPackAdvance: 8, readValueFromPointer: yg(C, m), ka: null });
    }, c: function(I, C, m, y, S, w) {
      var G = Gr(C, m);
      I = De(I), S = Et(y, S), vr(I, function() {
        nn("Cannot call " + I + " due to unbound types", G);
      }, C - (-31 * 108 + 25 * 155 + 263 * -2)), y0([], G, function(k) {
        var H = I, R = I;
        k = [k[-9713 + 8 * -989 + 17625], null].concat(k.slice(4 * -2186 + -6 * 134 + -1061 * -9));
        var P = S, V = k.length;
        -1011 + -1 * -5841 + 2 * -2414 > V && _("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var q = k[-4609 * -2 + -4060 + -3 * 1719] !== null && !1, he = !(-363 + 364 * 1), T = 6 * 268 + -4804 + -1 * -3197; T < k.length; ++T) if (k[T] !== null && void (-4349 + 4349 * 1) === k[T].ka) {
          he = !(1761 * -4 + 9431 * 1 + 341 * -7);
          break;
        }
        var Ct = k[-9 * -551 + 1 * 6284 + -11243].name !== "void", Re = "", Me = "";
        for (T = -6 * 626 + -3452 + 7208; T < V - (-2 * -1909 + 3217 + -7033 * 1); ++T) Re += (-3739 * -1 + -9121 * 1 + 78 * 69 !== T ? ", " : "") + "arg" + T, Me += (-352 * -13 + 26 * 324 + -1300 * 10 !== T ? ", " : "") + "arg" + T + "Wired";
        R = "return function " + yi(R) + "(" + Re + `) {
if (arguments.length !== ` + (V - (17946 + 8972 * -2)) + `) {
throwBindingError('function ` + R + " called with ' + arguments.length + ' arguments, expected " + (V - (-4763 + -953 * -5)) + ` args!');
}
`, he && (R += `var destructors = [];
`);
        var Ut = he ? "destructors" : "null";
        for (Re = "throwBindingError invoker fn runDestructors retType classParam".split(" "), P = [_, P, w, $n, k[-9716 + 1414 * -1 + 15 * 742], k[1]], q && (R += "var thisWired = classParam.toWireType(" + Ut + `, this);
`), T = -4 * -370 + 4 * -2495 + 8500; T < V - 2; ++T) R += "var arg" + T + "Wired = argType" + T + ".toWireType(" + Ut + ", arg" + T + "); // " + k[T + (-1952 + 1954 * 1)].name + `
`, Re.push("argType" + T), P.push(k[T + (7 * 1212 + 269 * -7 + 6599 * -1)]);
        if (q && (Me = "thisWired" + (13696 + 13696 * -1 < Me.length ? ", " : "") + Me), R += (Ct ? "var rv = " : "") + "invoker(fn" + (9135 + -4624 * 1 + -4511 < Me.length ? ", " : "") + Me + `);
`, he) R += `runDestructors(destructors);
`;
        else
          for (T = q ? -1 * 5259 + 1896 + 3364 : 993 * 4 + 2678 * 3 + -12004; T < k.length; ++T) V = -1 * 2677 + 7593 + -4915 === T ? "thisWired" : "arg" + (T - (-12113 + 2423 * 5)) + "Wired", k[T].ka !== null && (R += V + "_dtor(" + V + "); // " + k[T].name + `
`, Re.push(V + "_dtor"), P.push(k[T].ka));
        return Ct && (R += `var ret = retType.fromWireType(rv);
return ret;
`), Re.push(R + `}
`), k = Wg(Re).apply(null, P), wr(H, k, C - (3103 * -3 + -3047 + -12357 * -1)), [];
      });
    }, e: function(I, C, m, y, S) {
      function w(R) {
        return R;
      }
      C = De(C), S === -1 && (S = 368512724 + -69 * 23763556 + 5566139935);
      var G = Ai(m);
      if (y === 0) {
        var k = 32 - 8 * m;
        w = function(R) {
          return R << k >>> k;
        };
      }
      var H = -(-3298 + -2 * 2161 + 7621) != C.indexOf("unsigned");
      vt(I, { name: C, fromWireType: w, toWireType: function(R, P) {
        if (typeof P != "number" && typeof P != "boolean") throw new TypeError('Cannot convert "' + v0(P) + '" to ' + this.name);
        if (P < y || P > S) throw new TypeError('Passing a number "' + v0(P) + '" from JS side to C/C++ side to an argument of type "' + C + '", which is outside the valid range [' + y + ", " + S + "]!");
        return H ? P >>> -1165 * -5 + -5676 + -149 : P | 38 * 32 + 8493 * 1 + -9709;
      }, argPackAdvance: 8, readValueFromPointer: vg(C, G, 206 + 3 * 2689 + -8273 !== y), ka: null });
    }, d: function(I, C, m) {
      function y(k) {
        k >>= -126 * -43 + -2709 + -2707;
        var H = at;
        return new S(te, H[k + (1752 + -1751 * 1)], H[k]);
      }
      var S = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][C];
      m = De(m);
      var w = {};
      w.name = m, w.fromWireType = y, w.argPackAdvance = 8, w.readValueFromPointer = y;
      var G = {};
      G.Ea = !(523 * 1 + 5418 + -13 * 457), vt(I, w, G);
    }, n: function(I, C) {
      C = De(C);
      var m = C === "std::string";
      vt(I, { name: C, fromWireType: function(y) {
        var S = at[y >> 2];
        if (m) for (var w = y + (1513 + -61 * 89 + 3920), G = -9498 + 566 * 2 + 8366; G <= S; ++G) {
          var k = y + 4 + G;
          if (G == S || -8677 * 1 + -8072 + -16749 * -1 == He[k]) {
            if (w) {
              var H = w, R = He, P = H + (k - w);
              for (w = H; R[w] && !(w >= P); ) ++w;
              if (268 * 10 + -3 * 1531 + 1929 < w - H && R.subarray && l) H = l.decode(R.subarray(H, w));
              else {
                for (P = ""; H < w; ) {
                  var V = R[H++];
                  if (V & -1557 + 5 * 337) {
                    var q = R[H++] & 63;
                    if (-15106 + 1 * 15298 == (V & 1 * 813 + 2 * 1607 + 1 * -3803)) P += String.fromCharCode((V & 3601 * -1 + 9816 + -6184) << 6 | q);
                    else {
                      var he = R[H++] & 63;
                      V = (V & 240) == 224 ? (V & 1734 * -5 + 11 * 563 + -7 * -356) << -4611 + -124 * -6 + 3879 | q << -14 * -161 + -21 * 338 + 4850 | he : (V & 5270 + 19 * -277) << 5110 + 268 * -19 | q << 12 | he << 427 * -14 + 23 * 363 + -2365 | R[H++] & -1388 + -3902 * 2 + 9255, 65536 > V ? P += String.fromCharCode(V) : (V -= 317 * 47 + -43079 + 93716, P += String.fromCharCode(-431 * 103 + 43810 + 55879 | V >> 3058 + 1561 * 1 + -4609, -6365 * 1 + -89478 + 11 * 13833 | V & 1023));
                    }
                  } else P += String.fromCharCode(V);
                }
                H = P;
              }
            } else H = "";
            if (void (8922 + 84 * -106 + -18) === T) var T = H;
            else T += String.fromCharCode(-8540 + -2 * 4346 + -359 * -48), T += H;
            w = k + 1;
          }
        }
        else {
          for (T = Array(S), G = 4031 * -2 + -3471 * -1 + 1 * 4591; G < S; ++G) T[G] = String.fromCharCode(He[y + (-5317 * 1 + -6456 + -1 * -11777) + G]);
          T = T.join("");
        }
        return wt(y), T;
      }, toWireType: function(y, S) {
        S instanceof ArrayBuffer && (S = new Uint8Array(S));
        var w = typeof S == "string";
        w || S instanceof Uint8Array || S instanceof Uint8ClampedArray || S instanceof Int8Array || _("Cannot pass non-string to std::string");
        var G = (m && w ? function() {
          for (var R = 4988 + -1 * 1811 + 353 * -9, P = 1200 + 3 * -663 + -263 * -3; P < S.length; ++P) {
            var V = S.charCodeAt(P);
            56257 + 1 * 54809 + 26 * -2145 <= V && -65617 + 155 * -458 + -1 * -193950 >= V && (V = 119057 + 4117 * -13 + ((V & 5462 * 1 + -9526 + 5087) << -5021 * -1 + 1 * -5647 + 636) | S.charCodeAt(++P) & 838 * -10 + 2 * -834 + -1 * -11071), 127 >= V ? ++R : R = 4458 + 1 * 41 + -2452 >= V ? R + (4 * -274 + 2811 + -1713 * 1) : -32689 + -233 * -285 + -31819 * -1 >= V ? R + (7613 * -1 + -503 + 1 * 8119) : R + (8473 + 197 * -19 + -4726);
          }
          return R;
        } : function() {
          return S.length;
        })(), k = tx(7406 + -6059 * 1 + -1343 + G + (1 * -4055 + -8504 + 1570 * 8));
        if (at[k >> -6909 + -6911 * -1] = G, m && w) v(S, k + (6738 + -1 * -5191 + -11925 * 1), G + (-1167 + -8 * -146));
        else if (w) for (w = 3 * 941 + -38 * 119 + -1 * -1699; w < G; ++w) {
          var H = S.charCodeAt(w);
          391 + 7115 * -1 + -6979 * -1 < H && (wt(k), _("String has UTF-16 code units that do not fit in 8 bits")), He[k + (2629 * -2 + -1316 + -3289 * -2) + w] = H;
        }
        else
          for (w = -400 * -1 + 123 * 41 + -1 * 5443; w < G; ++w) He[k + (8 * 652 + -9605 + -191 * -23) + w] = S[w];
        return y !== null && y.push(wt, k), k;
      }, argPackAdvance: 8, readValueFromPointer: zn, ka: function(y) {
        wt(y);
      } });
    }, j: function(I, C, m) {
      if (m = De(m), -422 * 2 + 5207 * -1 + 6053 * 1 === C) var y = M, S = X, w = J, G = function() {
        return Xt;
      }, k = 1 * 6707 + 2058 + -8764;
      else C === 4 && (y = K, S = re, w = Q, G = function() {
        return at;
      }, k = 12674 + -576 * 22);
      vt(I, { name: m, fromWireType: function(H) {
        for (var R = at[H >> -13 * 403 + -6 * 181 + 6327], P = G(), V, q = H + (6776 + 1 * 3737 + -113 * 93), he = 26 * 298 + 17 * 177 + -10757; he <= R; ++he) {
          var T = H + 4 + he * C;
          (he == R || -5636 + 3739 * -1 + 9375 == P[T >> k]) && (q = y(q, T - q), void (2656 * -1 + -691 + -1 * -3347) === V ? V = q : (V += String.fromCharCode(6485 + -6485 * 1), V += q), q = T + C);
        }
        return wt(H), V;
      }, toWireType: function(H, R) {
        typeof R != "string" && _("Cannot pass non-string to C++ string type " + m);
        var P = w(R), V = tx(2298 + 67 * -23 + -1 * 753 + P + C);
        return at[V >> -1 * -4213 + -3291 + -920] = P >> k, S(R, V + (6586 + 7 * -1274 + 2336), P + C), H !== null && H.push(wt, V), V;
      }, argPackAdvance: 8, readValueFromPointer: zn, ka: function(H) {
        wt(H);
      } });
    }, x: function(I, C) {
      C = De(C);
      var m = {};
      m.Qa = !0, m.name = C, m.argPackAdvance = 0, m.fromWireType = function() {
      }, m.toWireType = function() {
      }, vt(I, m);
    }, k: function(I, C, m) {
      I = Oi(I), C = Pr(C, "emval::as");
      var y = [], S = W0(y);
      return Ge[m >> 352 * 23 + -152 * 13 + -6118] = S, C.toWireType(y, I);
    }, i: Gi, l: function(I, C) {
      return I = Oi(I), C = Oi(C), W0(I[C]);
    }, p: function(I) {
      var C = Sg[I];
      return W0(void (5 * 267 + 9860 + 5 * -2239) === C ? De(I) : C);
    }, o: function(I) {
      $n(et[I].value), Gi(I);
    }, y: function(I, C) {
      return I = Pr(I, "_emval_take_value"), I = I.readValueFromPointer(C), W0(I);
    }, f: function() {
      $e();
    }, q: function(I, C, m) {
      He.copyWithin(I, C, C + m);
    }, r: function(I) {
      I >>>= 7193 + -73 * -128 + -16537;
      var C = He.length;
      if (4220784320 + -912 * 2273356 < I) return !(-6673 + -1 * 8209 + 14883);
      for (var m = 7356 + 5 * -1471; -2066 * 1 + -4661 + -6731 * -1 >= m; m *= 2907 + 195 * -32 + 3335) {
        var y = C * (1 + 0.2 / m);
        y = Math.min(y, I + (-92985684 + -16414023 * -2 + 160820934)), y = Math.max(-8 * 2458409 + 30224805 + 23 * 270421, I, y), 0 < y % (28481 + -1 * 76387 + 5402 * 21) && (y += 47941 + -28759 * 1 + -22 * -2107 - y % 65536);
        e: {
          try {
            p.grow(Math.min(-112877 * 11804 + 174538231 * 14 + 6600946 * 157, y) - te.byteLength + (-8015 * 11 + -55223 * -1 + 71 * 1387) >>> -1 * 8055 + 1 * -2621 + 10692), U0(p.buffer);
            var S = 1054 + 9 * -117;
            break e;
          } catch {
          }
          S = void (2501 + -7 * -301 + -4 * 1152);
        }
        if (S) return !(1170 + -234 * 5);
      }
      return !1;
    }, s: function(I, C) {
      var m = 0;
      return Tr().forEach(function(y, S) {
        var w = C + m;
        for (S = Ge[I + (-2 * -4269 + -8699 + 165) * S >> -1 * 687 + -1 * -9893 + -9204] = w, w = 0; w < y.length; ++w) Le[S++ >> 2677 * -1 + 3 * 3324 + -7295] = y.charCodeAt(w);
        Le[S >> -302 + 302 * 1] = 2452 + 613 * -4, m += y.length + 1;
      }), 41 * -95 + -3925 + 7820;
    }, t: function(I, C) {
      var m = Tr();
      Ge[I >> 3411 + -215 * 13 + -307 * 2] = m.length;
      var y = 7033 + 7 * 969 + -13816;
      return m.forEach(function(S) {
        y += S.length + 1;
      }), Ge[C >> 3 * 1238 + 751 + -1 * 4463] = y, -251 * 17 + 1984 + -761 * -3;
    }, a: p };
    (function() {
      function I(G) {
        G = G.exports, G = Lr(G), t.asm = G, je--, t.monitorRunDependencies && t.monitorRunDependencies(je), 1 * 2357 + -55 * 45 + 118 == je && It && (G = It, It = null, G());
      }
      function C(G) {
        I(G.instance);
      }
      function m(G) {
        return lg().then(function(k) {
          return WebAssembly.instantiate(k, S);
        }).then(G, function(k) {
          f("failed to asynchronously prepare wasm: " + k), $e(k);
        });
      }
      var y = {};
      y.a = wg;
      var S = y;
      if (je++, t.monitorRunDependencies && t.monitorRunDependencies(je), t.instantiateWasm) try {
        var w = t.instantiateWasm(S, I);
        return w = Lr(w);
      } catch (G) {
        return f("Module.instantiateWasm callback failed with error: " + G), !(7244 + 1 * -7341 + 98);
      }
      return function() {
        if (u || typeof WebAssembly.instantiateStreaming != "function" || ft() || _t("file://") || typeof fetch != "function") return m(C);
        var G = {};
        G.credentials = "same-origin", fetch(st, G).then(function(k) {
          return WebAssembly.instantiateStreaming(k, S).then(C, function(H) {
            return f("wasm streaming compile failed: " + H), f("falling back to ArrayBuffer instantiation"), m(C);
          });
        });
      }(), {};
    })();
    var Nr = t.___wasm_call_ctors = function() {
      return (Nr = t.___wasm_call_ctors = t.asm.B).apply(null, arguments);
    }, tx = t._malloc = function() {
      return (tx = t._malloc = t.asm.C).apply(null, arguments);
    }, wt = t._free = function() {
      return (wt = t._free = t.asm.D).apply(null, arguments);
    }, Fr = t.___getTypeName = function() {
      return (Fr = t.___getTypeName = t.asm.E).apply(null, arguments);
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
    var nx;
    It = function I() {
      nx || Hi(), nx || (It = I);
    };
    function Hi() {
      function I() {
        if (!nx && (nx = !(-8723 + 4881 * 1 + 34 * 113), t.calledRun = !(-9 * 732 + -2 + 3295 * 2), !b)) {
          if (Xn(Ke), Xn(z0), e(t), t.onRuntimeInitialized && t.onRuntimeInitialized(), t.postRun) for (typeof t.postRun == "function" && (t.postRun = [t.postRun]); t.postRun.length; ) {
            var C = t.postRun.shift();
            h0.unshift(C);
          }
          Xn(h0);
        }
      }
      if (!(-8311 + -157 * -3 + 245 * 32 < je)) {
        if (t.preRun)
          for (typeof t.preRun == "function" && (t.preRun = [t.preRun]); t.preRun.length; ) m0();
        Xn(Vt), 0 < je || (t.setStatus ? (t.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            t.setStatus("");
          }, -69 * 3 + -6986 + -654 * -11), I();
        }, -8344 + -13 * 147 + 10256)) : I());
      }
    }
    if (t.run = Hi, t.preInit)
      for (typeof t.preInit == "function" && (t.preInit = [t.preInit]); -8 * -787 + 1328 + -7624 < t.preInit.length; ) t.preInit.pop()();
    return Hi(), i.ready;
  };
})();
class mI {
  constructor(i, t) {
    E(this, "isDetectorInitialized", !1);
    E(this, "samVersion", null);
    E(this, "detection");
    this.imageProcessor = i, this.wasmDirectoryPath = t;
  }
  async init() {
    await this.initDetector(this.wasmDirectoryPath);
  }
  async initDetector(i) {
    await this.detector.initSamModule(location.href, i);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  setSamVersion(i) {
    if (!i || !this.areVersionsCompatible(i))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new oe("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = i;
  }
  runDetectionLoop(i) {
    this.detection && this.detection.stop(), this.detection = i, this.detection.run();
  }
  stopDetectionLoop() {
    var i;
    (i = this.detection) == null || i.stop();
  }
  areVersionsCompatible(i) {
    return i === bl;
  }
  setThresholds(i) {
    this.imageProcessor.validationService.thresholds = i;
  }
}
class bI {
  constructor() {
    E(this, "detectionRecord", []);
    E(this, "imagesWithTimestampForDuplicateDetection", new sr(Il));
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: i, timestamp: t }) {
    const e = i.length / hl, n = e / (8979 + 8977 * -1), o = i.length / (-2638 + 2 * -3501 + -1607 * -6), r = await uI(i.slice(o - n, o + n)), a = {};
    a.imageHash = r, a.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(a);
  }
  optimizeImageBeforeDetection(i) {
    return { data: Ql(i), resolution: { width: i.width, height: i.height } };
  }
  async processDetectedObject({ detectedObject: i, image: t, imageData: e, timestamp: n }) {
    const o = Wc(i), r = this.validationService.validateDetectedObject(o, t);
    if (r.result.get("isPresent")) {
      const a = {};
      a.image = e, a.timestamp = n, this.collectImagesForDuplicateDetection(a);
    }
    return this.detectionRecord.push(i), { detection: o, validationResult: r.result, isValid: r.isValid() };
  }
  reset() {
    this.detectionRecord = [], this.imagesWithTimestampForDuplicateDetection.clear();
  }
}
class AI {
  constructor() {
    E(this, "thresholds", null);
  }
  getThresholds() {
    if (!this.thresholds) throw new oe("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const qc = Symbol("Comlink.proxy"), yI = Symbol("Comlink.endpoint"), WI = Symbol("Comlink.releaseProxy"), Qi = Symbol("Comlink.finalizer"), wx = Symbol("Comlink.thrown"), $c = (x) => typeof x == "object" && x !== null || typeof x == "function", vI = {
  canHandle: (x) => $c(x) && x[qc],
  serialize(x) {
    const { port1: i, port2: t } = new MessageChannel();
    return tg(x, i), [t, [t]];
  },
  deserialize(x) {
    return x.start(), xg(x);
  }
}, SI = {
  canHandle: (x) => $c(x) && wx in x,
  serialize({ value: x }) {
    let i;
    return x instanceof Error ? i = {
      isError: !0,
      value: {
        message: x.message,
        name: x.name,
        stack: x.stack
      }
    } : i = { isError: !1, value: x }, [i, []];
  },
  deserialize(x) {
    throw x.isError ? Object.assign(new Error(x.value.message), x.value) : x.value;
  }
}, eg = /* @__PURE__ */ new Map([
  ["proxy", vI],
  ["throw", SI]
]);
function wI(x, i) {
  for (const t of x)
    if (i === t || t === "*" || t instanceof RegExp && t.test(i))
      return !0;
  return !1;
}
function tg(x, i = globalThis, t = ["*"]) {
  i.addEventListener("message", function e(n) {
    if (!n || !n.data)
      return;
    if (!wI(t, n.origin)) {
      console.warn(`Invalid origin '${n.origin}' for comlink proxy`);
      return;
    }
    const { id: o, type: r, path: a } = Object.assign({ path: [] }, n.data), s = (n.data.argumentList || []).map(n0);
    let c;
    try {
      const d = a.slice(0, -1).reduce((f, u) => f[u], x), g = a.reduce((f, u) => f[u], x);
      switch (r) {
        case "GET":
          c = g;
          break;
        case "SET":
          d[a.slice(-1)[0]] = n0(n.data.value), c = !0;
          break;
        case "APPLY":
          c = g.apply(d, s);
          break;
        case "CONSTRUCT":
          {
            const f = new g(...s);
            c = HI(f);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: f, port2: u } = new MessageChannel();
            tg(x, u), c = ZI(f, [f]);
          }
          break;
        case "RELEASE":
          c = void 0;
          break;
        default:
          return;
      }
    } catch (d) {
      c = { value: d, [wx]: 0 };
    }
    Promise.resolve(c).catch((d) => ({ value: d, [wx]: 0 })).then((d) => {
      const [g, f] = $x(d);
      i.postMessage(Object.assign(Object.assign({}, g), { id: o }), f), r === "RELEASE" && (i.removeEventListener("message", e), ng(i), Qi in x && typeof x[Qi] == "function" && x[Qi]());
    }).catch((d) => {
      const [g, f] = $x({
        value: new TypeError("Unserializable return value"),
        [wx]: 0
      });
      i.postMessage(Object.assign(Object.assign({}, g), { id: o }), f);
    });
  }), i.start && i.start();
}
function BI(x) {
  return x.constructor.name === "MessagePort";
}
function ng(x) {
  BI(x) && x.close();
}
function xg(x, i) {
  return Vo(x, [], i);
}
function gx(x) {
  if (x)
    throw new Error("Proxy has been released and is not useable");
}
function ig(x) {
  return Z0(x, {
    type: "RELEASE"
  }).then(() => {
    ng(x);
  });
}
const zx = /* @__PURE__ */ new WeakMap(), qx = "FinalizationRegistry" in globalThis && new FinalizationRegistry((x) => {
  const i = (zx.get(x) || 0) - 1;
  zx.set(x, i), i === 0 && ig(x);
});
function kI(x, i) {
  const t = (zx.get(i) || 0) + 1;
  zx.set(i, t), qx && qx.register(x, i, x);
}
function GI(x) {
  qx && qx.unregister(x);
}
function Vo(x, i = [], t = function() {
}) {
  let e = !1;
  const n = new Proxy(t, {
    get(o, r) {
      if (gx(e), r === WI)
        return () => {
          GI(n), ig(x), e = !0;
        };
      if (r === "then") {
        if (i.length === 0)
          return { then: () => n };
        const a = Z0(x, {
          type: "GET",
          path: i.map((s) => s.toString())
        }).then(n0);
        return a.then.bind(a);
      }
      return Vo(x, [...i, r]);
    },
    set(o, r, a) {
      gx(e);
      const [s, c] = $x(a);
      return Z0(x, {
        type: "SET",
        path: [...i, r].map((d) => d.toString()),
        value: s
      }, c).then(n0);
    },
    apply(o, r, a) {
      gx(e);
      const s = i[i.length - 1];
      if (s === yI)
        return Z0(x, {
          type: "ENDPOINT"
        }).then(n0);
      if (s === "bind")
        return Vo(x, i.slice(0, -1));
      const [c, d] = $a(a);
      return Z0(x, {
        type: "APPLY",
        path: i.map((g) => g.toString()),
        argumentList: c
      }, d).then(n0);
    },
    construct(o, r) {
      gx(e);
      const [a, s] = $a(r);
      return Z0(x, {
        type: "CONSTRUCT",
        path: i.map((c) => c.toString()),
        argumentList: a
      }, s).then(n0);
    }
  });
  return kI(n, x), n;
}
function OI(x) {
  return Array.prototype.concat.apply([], x);
}
function $a(x) {
  const i = x.map($x);
  return [i.map((t) => t[0]), OI(i.map((t) => t[1]))];
}
const og = /* @__PURE__ */ new WeakMap();
function ZI(x, i) {
  return og.set(x, i), x;
}
function HI(x) {
  return Object.assign(x, { [qc]: !0 });
}
function $x(x) {
  for (const [i, t] of eg)
    if (t.canHandle(x)) {
      const [e, n] = t.serialize(x);
      return [
        {
          type: "HANDLER",
          name: i,
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
    og.get(x) || []
  ];
}
function n0(x) {
  switch (x.type) {
    case "HANDLER":
      return eg.get(x.name).deserialize(x.value);
    case "RAW":
      return x.value;
  }
}
function Z0(x, i, t) {
  return new Promise((e) => {
    const n = KI();
    x.addEventListener("message", function o(r) {
      !r.data || !r.data.id || r.data.id !== n || (x.removeEventListener("message", o), e(r.data));
    }), x.start && x.start(), x.postMessage(Object.assign({ id: n }, i), t);
  });
}
function KI() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const rg = "dmFyIHZlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5Owp2YXIgTHQgPSAoYSkgPT4gewogIHRocm93IFR5cGVFcnJvcihhKTsKfTsKdmFyIGdlID0gKGEsIG8sIGUpID0+IG8gaW4gYSA/IHZlKGEsIG8sIHsgZW51bWVyYWJsZTogITAsIGNvbmZpZ3VyYWJsZTogITAsIHdyaXRhYmxlOiAhMCwgdmFsdWU6IGUgfSkgOiBhW29dID0gZTsKdmFyIFFuID0gKGEsIG8sIGUpID0+IGdlKGEsIHR5cGVvZiBvICE9ICJzeW1ib2wiID8gbyArICIiIDogbywgZSksIE50ID0gKGEsIG8sIGUpID0+IG8uaGFzKGEpIHx8IEx0KCJDYW5ub3QgIiArIGUpOwp2YXIgSCA9IChhLCBvLCBlKSA9PiAoTnQoYSwgbywgInJlYWQgZnJvbSBwcml2YXRlIGZpZWxkIiksIGUgPyBlLmNhbGwoYSkgOiBvLmdldChhKSksIFduID0gKGEsIG8sIGUpID0+IG8uaGFzKGEpID8gTHQoIkNhbm5vdCBhZGQgdGhlIHNhbWUgcHJpdmF0ZSBtZW1iZXIgbW9yZSB0aGFuIG9uY2UiKSA6IG8gaW5zdGFuY2VvZiBXZWFrU2V0ID8gby5hZGQoYSkgOiBvLnNldChhLCBlKSwga24gPSAoYSwgbywgZSwgaCkgPT4gKE50KGEsIG8sICJ3cml0ZSB0byBwcml2YXRlIGZpZWxkIiksIGggPyBoLmNhbGwoYSwgZSkgOiBvLnNldChhLCBlKSwgZSk7CmNvbnN0IEh0ID0gewogIHNpbWQ6ICJzYW1fc2ltZC53YXNtIiwKICBzYW06ICJzYW0ud2FzbSIKfSwgd2UgPSBhc3luYyAoKSA9PiBXZWJBc3NlbWJseS52YWxpZGF0ZShuZXcgVWludDhBcnJheShbMCwgOTcsIDExNSwgMTA5LCAxLCAwLCAwLCAwLCAxLCA1LCAxLCA5NiwgMCwgMSwgMTIzLCAzLCAyLCAxLCAwLCAxMCwgMTAsIDEsIDgsIDAsIDY1LCAwLCAyNTMsIDE1LCAyNTMsIDk4LCAxMV0pKTsKdmFyIEFlID0gZnVuY3Rpb24oKSB7CiAgdmFyIGEgPSB0eXBlb2YgZG9jdW1lbnQgPCAidSIgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdCA/IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjIDogdm9pZCAwOwogIHJldHVybiBmdW5jdGlvbihvKSB7CiAgICBvID0gbyB8fCB7fTsKICAgIHZhciBlOwogICAgZSB8fCAoZSA9IHR5cGVvZiBvIDwgInUiID8gbyA6IHt9KTsKICAgIHZhciBoLCBnOwogICAgZS5yZWFkeSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgaCA9IG4sIGcgPSB0OwogICAgfSk7CiAgICB2YXIgQyA9IHt9LCBBOwogICAgZm9yIChBIGluIGUpIGUuaGFzT3duUHJvcGVydHkoQSkgJiYgKENbQV0gPSBlW0FdKTsKICAgIHZhciBPID0gIi4vdGhpcy5wcm9ncmFtIiwgYiA9ICExLCBUID0gITE7CiAgICBiID0gdHlwZW9mIHdpbmRvdyA9PSAib2JqZWN0IiwgVCA9IHR5cGVvZiBpbXBvcnRTY3JpcHRzID09ICJmdW5jdGlvbiI7CiAgICB2YXIgXyA9ICIiLCBTOwogICAgKGIgfHwgVCkgJiYgKFQgPyBfID0gc2VsZi5sb2NhdGlvbi5ocmVmIDogZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiAoXyA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjKSwgYSAmJiAoXyA9IGEpLCBfLmluZGV4T2YoImJsb2I6IikgIT09IDAgPyBfID0gXy5zdWJzdHIoMCwgXy5sYXN0SW5kZXhPZigiLyIpICsgMSkgOiBfID0gIiIsIFQgJiYgKFMgPSBmdW5jdGlvbihuKSB7CiAgICAgIHZhciB0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7CiAgICAgIHJldHVybiB0Lm9wZW4oIkdFVCIsIG4sICExKSwgdC5yZXNwb25zZVR5cGUgPSAiYXJyYXlidWZmZXIiLCB0LnNlbmQobnVsbCksIG5ldyBVaW50OEFycmF5KHQucmVzcG9uc2UpOwogICAgfSkpOwogICAgdmFyIEUgPSBlLnByaW50RXJyIHx8IGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpOwogICAgZm9yIChBIGluIEMpIEMuaGFzT3duUHJvcGVydHkoQSkgJiYgKGVbQV0gPSBDW0FdKTsKICAgIEMgPSBudWxsLCBlLnRoaXNQcm9ncmFtICYmIChPID0gZS50aGlzUHJvZ3JhbSk7CiAgICB2YXIgTTsKICAgIGUud2FzbUJpbmFyeSAmJiAoTSA9IGUud2FzbUJpbmFyeSksIGUubm9FeGl0UnVudGltZSAmJiBlLm5vRXhpdFJ1bnRpbWUsIHR5cGVvZiBXZWJBc3NlbWJseSAhPSAib2JqZWN0IiAmJiBmbigibm8gbmF0aXZlIHdhc20gc3VwcG9ydCBkZXRlY3RlZCIpOwogICAgdmFyIFUsIExuID0gITE7CiAgICBmdW5jdGlvbiBydChuKSB7CiAgICAgIG4gfHwgZm4oIkFzc2VydGlvbiBmYWlsZWQ6IHVuZGVmaW5lZCIpOwogICAgfQogICAgdmFyIGl0ID0gdHlwZW9mIFRleHREZWNvZGVyIDwgInUiID8gbmV3IFRleHREZWNvZGVyKCJ1dGY4IikgOiB2b2lkIDA7CiAgICBmdW5jdGlvbiAkdChuLCB0LCByKSB7CiAgICAgIHZhciBpID0geDsKICAgICAgaWYgKDAgPCByKSB7CiAgICAgICAgciA9IHQgKyByIC0gMTsKICAgICAgICBmb3IgKHZhciBzID0gMDsgcyA8IG4ubGVuZ3RoOyArK3MpIHsKICAgICAgICAgIHZhciB1ID0gbi5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgaWYgKDU1Mjk2IDw9IHUgJiYgNTczNDMgPj0gdSkgewogICAgICAgICAgICB2YXIgbCA9IG4uY2hhckNvZGVBdCgrK3MpOwogICAgICAgICAgICB1ID0gNjU1MzYgKyAoKHUgJiAxMDIzKSA8PCAxMCkgfCBsICYgMTAyMzsKICAgICAgICAgIH0KICAgICAgICAgIGlmICgxMjcgPj0gdSkgewogICAgICAgICAgICBpZiAodCA+PSByKSBicmVhazsKICAgICAgICAgICAgaVt0KytdID0gdTsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIGlmICgyMDQ3ID49IHUpIHsKICAgICAgICAgICAgICBpZiAodCArIDEgPj0gcikgYnJlYWs7CiAgICAgICAgICAgICAgaVt0KytdID0gMTkyIHwgdSA+PiA2OwogICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgIGlmICg2NTUzNSA+PSB1KSB7CiAgICAgICAgICAgICAgICBpZiAodCArIDIgPj0gcikgYnJlYWs7CiAgICAgICAgICAgICAgICBpW3QrK10gPSAyMjQgfCB1ID4+IDEyOwogICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICBpZiAodCArIDMgPj0gcikgYnJlYWs7CiAgICAgICAgICAgICAgICBpW3QrK10gPSAyNDAgfCB1ID4+IDE4LCBpW3QrK10gPSAxMjggfCB1ID4+IDEyICYgNjM7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIGlbdCsrXSA9IDEyOCB8IHUgPj4gNiAmIDYzOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGlbdCsrXSA9IDEyOCB8IHUgJiA2MzsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgaVt0XSA9IDA7CiAgICAgIH0KICAgIH0KICAgIHZhciBhdCA9IHR5cGVvZiBUZXh0RGVjb2RlciA8ICJ1IiA/IG5ldyBUZXh0RGVjb2RlcigidXRmLTE2bGUiKSA6IHZvaWQgMDsKICAgIGZ1bmN0aW9uIFh0KG4sIHQpIHsKICAgICAgZm9yICh2YXIgciA9IG4gPj4gMSwgaSA9IHIgKyB0IC8gMjsgIShyID49IGkpICYmIGduW3JdOyApICsrcjsKICAgICAgaWYgKHIgPDw9IDEsIDMyIDwgciAtIG4gJiYgYXQpIHJldHVybiBhdC5kZWNvZGUoeC5zdWJhcnJheShuLCByKSk7CiAgICAgIGZvciAociA9IDAsIGkgPSAiIjsgOyApIHsKICAgICAgICB2YXIgcyA9IHRuW24gKyAyICogciA+PiAxXTsKICAgICAgICBpZiAocyA9PSAwIHx8IHIgPT0gdCAvIDIpIHJldHVybiBpOwogICAgICAgICsrciwgaSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHMpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBKdChuLCB0LCByKSB7CiAgICAgIGlmIChyID09PSB2b2lkIDAgJiYgKHIgPSAyMTQ3NDgzNjQ3KSwgMiA+IHIpIHJldHVybiAwOwogICAgICByIC09IDI7CiAgICAgIHZhciBpID0gdDsKICAgICAgciA9IHIgPCAyICogbi5sZW5ndGggPyByIC8gMiA6IG4ubGVuZ3RoOwogICAgICBmb3IgKHZhciBzID0gMDsgcyA8IHI7ICsrcykgdG5bdCA+PiAxXSA9IG4uY2hhckNvZGVBdChzKSwgdCArPSAyOwogICAgICByZXR1cm4gdG5bdCA+PiAxXSA9IDAsIHQgLSBpOwogICAgfQogICAgZnVuY3Rpb24gS3QobikgewogICAgICByZXR1cm4gMiAqIG4ubGVuZ3RoOwogICAgfQogICAgZnVuY3Rpb24gUXQobiwgdCkgewogICAgICBmb3IgKHZhciByID0gMCwgaSA9ICIiOyAhKHIgPj0gdCAvIDQpOyApIHsKICAgICAgICB2YXIgcyA9IGtbbiArIDQgKiByID4+IDJdOwogICAgICAgIGlmIChzID09IDApIGJyZWFrOwogICAgICAgICsrciwgNjU1MzYgPD0gcyA/IChzIC09IDY1NTM2LCBpICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTYgfCBzID4+IDEwLCA1NjMyMCB8IHMgJiAxMDIzKSkgOiBpICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocyk7CiAgICAgIH0KICAgICAgcmV0dXJuIGk7CiAgICB9CiAgICBmdW5jdGlvbiBxdChuLCB0LCByKSB7CiAgICAgIGlmIChyID09PSB2b2lkIDAgJiYgKHIgPSAyMTQ3NDgzNjQ3KSwgNCA+IHIpIHJldHVybiAwOwogICAgICB2YXIgaSA9IHQ7CiAgICAgIHIgPSBpICsgciAtIDQ7CiAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgbi5sZW5ndGg7ICsrcykgewogICAgICAgIHZhciB1ID0gbi5jaGFyQ29kZUF0KHMpOwogICAgICAgIGlmICg1NTI5NiA8PSB1ICYmIDU3MzQzID49IHUpIHsKICAgICAgICAgIHZhciBsID0gbi5jaGFyQ29kZUF0KCsrcyk7CiAgICAgICAgICB1ID0gNjU1MzYgKyAoKHUgJiAxMDIzKSA8PCAxMCkgfCBsICYgMTAyMzsKICAgICAgICB9CiAgICAgICAgaWYgKGtbdCA+PiAyXSA9IHUsIHQgKz0gNCwgdCArIDQgPiByKSBicmVhazsKICAgICAgfQogICAgICByZXR1cm4ga1t0ID4+IDJdID0gMCwgdCAtIGk7CiAgICB9CiAgICBmdW5jdGlvbiBuZShuKSB7CiAgICAgIGZvciAodmFyIHQgPSAwLCByID0gMDsgciA8IG4ubGVuZ3RoOyArK3IpIHsKICAgICAgICB2YXIgaSA9IG4uY2hhckNvZGVBdChyKTsKICAgICAgICA1NTI5NiA8PSBpICYmIDU3MzQzID49IGkgJiYgKytyLCB0ICs9IDQ7CiAgICAgIH0KICAgICAgcmV0dXJuIHQ7CiAgICB9CiAgICB2YXIgbm4sICQsIHgsIHRuLCBnbiwgaywgRCwgb3QsIHN0OwogICAgZnVuY3Rpb24gdXQobikgewogICAgICBubiA9IG4sIGUuSEVBUDggPSAkID0gbmV3IEludDhBcnJheShuKSwgZS5IRUFQMTYgPSB0biA9IG5ldyBJbnQxNkFycmF5KG4pLCBlLkhFQVAzMiA9IGsgPSBuZXcgSW50MzJBcnJheShuKSwgZS5IRUFQVTggPSB4ID0gbmV3IFVpbnQ4QXJyYXkobiksIGUuSEVBUFUxNiA9IGduID0gbmV3IFVpbnQxNkFycmF5KG4pLCBlLkhFQVBVMzIgPSBEID0gbmV3IFVpbnQzMkFycmF5KG4pLCBlLkhFQVBGMzIgPSBvdCA9IG5ldyBGbG9hdDMyQXJyYXkobiksIGUuSEVBUEY2NCA9IHN0ID0gbmV3IEZsb2F0NjRBcnJheShuKTsKICAgIH0KICAgIHZhciBjdCA9IGUuSU5JVElBTF9NRU1PUlkgfHwgMTY3NzcyMTY7CiAgICBlLndhc21NZW1vcnkgPyBVID0gZS53YXNtTWVtb3J5IDogVSA9IG5ldyBXZWJBc3NlbWJseS5NZW1vcnkoeyBpbml0aWFsOiBjdCAvIDY1NTM2LCBtYXhpbXVtOiAzMjc2OCB9KSwgVSAmJiAobm4gPSBVLmJ1ZmZlciksIGN0ID0gbm4uYnl0ZUxlbmd0aCwgdXQobm4pOwogICAgdmFyIGx0ID0gW10sIGZ0ID0gW10sIHRlID0gW10sIGR0ID0gW107CiAgICBmdW5jdGlvbiBlZSgpIHsKICAgICAgdmFyIG4gPSBlLnByZVJ1bi5zaGlmdCgpOwogICAgICBsdC51bnNoaWZ0KG4pOwogICAgfQogICAgdmFyIFggPSAwLCBsbiA9IG51bGw7CiAgICBlLnByZWxvYWRlZEltYWdlcyA9IHt9LCBlLnByZWxvYWRlZEF1ZGlvcyA9IHt9OwogICAgZnVuY3Rpb24gZm4obikgewogICAgICB0aHJvdyBlLm9uQWJvcnQgJiYgZS5vbkFib3J0KG4pLCBFKG4pLCBMbiA9ICEwLCBuID0gbmV3IFdlYkFzc2VtYmx5LlJ1bnRpbWVFcnJvcigiYWJvcnQoIiArIG4gKyAiKS4gQnVpbGQgd2l0aCAtcyBBU1NFUlRJT05TPTEgZm9yIG1vcmUgaW5mby4iKSwgZyhuKSwgbjsKICAgIH0KICAgIGZ1bmN0aW9uIE5uKG4pIHsKICAgICAgdmFyIHQgPSBKOwogICAgICByZXR1cm4gU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoID8gdC5zdGFydHNXaXRoKG4pIDogdC5pbmRleE9mKG4pID09PSAwOwogICAgfQogICAgZnVuY3Rpb24gaHQoKSB7CiAgICAgIHJldHVybiBObigiZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LCIpOwogICAgfQogICAgdmFyIEogPSAic2FtLndhc20iOwogICAgaWYgKCFodCgpKSB7CiAgICAgIHZhciBtdCA9IEo7CiAgICAgIEogPSBlLmxvY2F0ZUZpbGUgPyBlLmxvY2F0ZUZpbGUobXQsIF8pIDogXyArIG10OwogICAgfQogICAgZnVuY3Rpb24geXQoKSB7CiAgICAgIHRyeSB7CiAgICAgICAgaWYgKE0pIHJldHVybiBuZXcgVWludDhBcnJheShNKTsKICAgICAgICBpZiAoUykgcmV0dXJuIFMoSik7CiAgICAgICAgdGhyb3cgImJvdGggYXN5bmMgYW5kIHN5bmMgZmV0Y2hpbmcgb2YgdGhlIHdhc20gZmFpbGVkIjsKICAgICAgfSBjYXRjaCAobikgewogICAgICAgIGZuKG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiByZSgpIHsKICAgICAgcmV0dXJuIE0gfHwgIWIgJiYgIVQgfHwgdHlwZW9mIGZldGNoICE9ICJmdW5jdGlvbiIgfHwgTm4oImZpbGU6Ly8iKSA/IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oeXQpIDogZmV0Y2goSiwgeyBjcmVkZW50aWFsczogInNhbWUtb3JpZ2luIiB9KS50aGVuKGZ1bmN0aW9uKG4pIHsKICAgICAgICBpZiAoIW4ub2spIHRocm93ICJmYWlsZWQgdG8gbG9hZCB3YXNtIGJpbmFyeSBmaWxlIGF0ICciICsgSiArICInIjsKICAgICAgICByZXR1cm4gbi5hcnJheUJ1ZmZlcigpOwogICAgICB9KS5jYXRjaChmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4geXQoKTsKICAgICAgfSk7CiAgICB9CiAgICBmdW5jdGlvbiB3bihuKSB7CiAgICAgIGZvciAoOyAwIDwgbi5sZW5ndGg7ICkgewogICAgICAgIHZhciB0ID0gbi5zaGlmdCgpOwogICAgICAgIGlmICh0eXBlb2YgdCA9PSAiZnVuY3Rpb24iKSB0KGUpOwogICAgICAgIGVsc2UgewogICAgICAgICAgdmFyIHIgPSB0LkJhOwogICAgICAgICAgdHlwZW9mIHIgPT0gIm51bWJlciIgPyB0LnRhID09PSB2b2lkIDAgPyBIbigidiIsIHIpKCkgOiBIbigidmkiLCByKSh0LnRhKSA6IHIodC50YSA9PT0gdm9pZCAwID8gbnVsbCA6IHQudGEpOwogICAgICAgIH0KICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gSG4obiwgdCkgewogICAgICB2YXIgciA9IFtdOwogICAgICByZXR1cm4gZnVuY3Rpb24oKSB7CiAgICAgICAgci5sZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOwogICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSByW2ldID0gYXJndW1lbnRzW2ldOwogICAgICAgIHJldHVybiByICYmIHIubGVuZ3RoID8gZVsiZHluQ2FsbF8iICsgbl0uYXBwbHkobnVsbCwgW3RdLmNvbmNhdChyKSkgOiBlWyJkeW5DYWxsXyIgKyBuXS5jYWxsKG51bGwsIHQpOwogICAgICB9OwogICAgfQogICAgZnVuY3Rpb24gaWUobikgewogICAgICB0aGlzLmRhID0gbiAtIDE2LCB0aGlzLk9hID0gZnVuY3Rpb24odCkgewogICAgICAgIGtbdGhpcy5kYSArIDggPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLkxhID0gZnVuY3Rpb24odCkgewogICAgICAgIGtbdGhpcy5kYSArIDAgPj4gMl0gPSB0OwogICAgICB9LCB0aGlzLk1hID0gZnVuY3Rpb24oKSB7CiAgICAgICAga1t0aGlzLmRhICsgNCA+PiAyXSA9IDA7CiAgICAgIH0sIHRoaXMuS2EgPSBmdW5jdGlvbigpIHsKICAgICAgICAkW3RoaXMuZGEgKyAxMiA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuTmEgPSBmdW5jdGlvbigpIHsKICAgICAgICAkW3RoaXMuZGEgKyAxMyA+PiAwXSA9IDA7CiAgICAgIH0sIHRoaXMuRmEgPSBmdW5jdGlvbih0LCByKSB7CiAgICAgICAgdGhpcy5PYSh0KSwgdGhpcy5MYShyKSwgdGhpcy5NYSgpLCB0aGlzLkthKCksIHRoaXMuTmEoKTsKICAgICAgfTsKICAgIH0KICAgIGZ1bmN0aW9uIEFuKCkgewogICAgICByZXR1cm4gMCA8IEFuLnhhOwogICAgfQogICAgZnVuY3Rpb24gVW4obikgewogICAgICBzd2l0Y2ggKG4pIHsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICByZXR1cm4gMDsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIDQ6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlIDg6CiAgICAgICAgICByZXR1cm4gMzsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biB0eXBlIHNpemU6ICIgKyBuKTsKICAgICAgfQogICAgfQogICAgdmFyIHB0ID0gdm9pZCAwOwogICAgZnVuY3Rpb24gUihuKSB7CiAgICAgIGZvciAodmFyIHQgPSAiIjsgeFtuXTsgKSB0ICs9IHB0W3hbbisrXV07CiAgICAgIHJldHVybiB0OwogICAgfQogICAgdmFyIGVuID0ge30sIEsgPSB7fSwgX24gPSB7fTsKICAgIGZ1bmN0aW9uIERuKG4pIHsKICAgICAgaWYgKG4gPT09IHZvaWQgMCkgcmV0dXJuICJfdW5rbm93biI7CiAgICAgIG4gPSBuLnJlcGxhY2UoL1teYS16QS1aMC05X10vZywgIiQiKTsKICAgICAgdmFyIHQgPSBuLmNoYXJDb2RlQXQoMCk7CiAgICAgIHJldHVybiA0OCA8PSB0ICYmIDU3ID49IHQgPyAiXyIgKyBuIDogbjsKICAgIH0KICAgIGZ1bmN0aW9uIEJuKG4sIHQpIHsKICAgICAgcmV0dXJuIG4gPSBEbihuKSwgbmV3IEZ1bmN0aW9uKCJib2R5IiwgInJldHVybiBmdW5jdGlvbiAiICsgbiArIGAoKSB7CiAgICAidXNlIHN0cmljdCI7ICAgIHJldHVybiBib2R5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7Cn07CmApKHQpOwogICAgfQogICAgZnVuY3Rpb24gem4obikgewogICAgICB2YXIgdCA9IEVycm9yLCByID0gQm4obiwgZnVuY3Rpb24oaSkgewogICAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMubWVzc2FnZSA9IGksIGkgPSBFcnJvcihpKS5zdGFjaywgaSAhPT0gdm9pZCAwICYmICh0aGlzLnN0YWNrID0gdGhpcy50b1N0cmluZygpICsgYApgICsgaS5yZXBsYWNlKC9eRXJyb3IoOlteXG5dKik/XG4vLCAiIikpOwogICAgICB9KTsKICAgICAgcmV0dXJuIHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSksIHIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gciwgci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlID09PSB2b2lkIDAgPyB0aGlzLm5hbWUgOiB0aGlzLm5hbWUgKyAiOiAiICsgdGhpcy5tZXNzYWdlOwogICAgICB9LCByOwogICAgfQogICAgdmFyIHJuID0gdm9pZCAwOwogICAgZnVuY3Rpb24gdihuKSB7CiAgICAgIHRocm93IG5ldyBybihuKTsKICAgIH0KICAgIHZhciB2dCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIENuKG4pIHsKICAgICAgdGhyb3cgbmV3IHZ0KG4pOwogICAgfQogICAgZnVuY3Rpb24gYW4obiwgdCwgcikgewogICAgICBmdW5jdGlvbiBpKGMpIHsKICAgICAgICBjID0gcihjKSwgYy5sZW5ndGggIT09IG4ubGVuZ3RoICYmIENuKCJNaXNtYXRjaGVkIHR5cGUgY29udmVydGVyIGNvdW50Iik7CiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBuLmxlbmd0aDsgKyt5KSBCKG5beV0sIGNbeV0pOwogICAgICB9CiAgICAgIG4uZm9yRWFjaChmdW5jdGlvbihjKSB7CiAgICAgICAgX25bY10gPSB0OwogICAgICB9KTsKICAgICAgdmFyIHMgPSBBcnJheSh0Lmxlbmd0aCksIHUgPSBbXSwgbCA9IDA7CiAgICAgIHQuZm9yRWFjaChmdW5jdGlvbihjLCB5KSB7CiAgICAgICAgSy5oYXNPd25Qcm9wZXJ0eShjKSA/IHNbeV0gPSBLW2NdIDogKHUucHVzaChjKSwgZW4uaGFzT3duUHJvcGVydHkoYykgfHwgKGVuW2NdID0gW10pLCBlbltjXS5wdXNoKGZ1bmN0aW9uKCkgewogICAgICAgICAgc1t5XSA9IEtbY10sICsrbCwgbCA9PT0gdS5sZW5ndGggJiYgaShzKTsKICAgICAgICB9KSk7CiAgICAgIH0pLCB1Lmxlbmd0aCA9PT0gMCAmJiBpKHMpOwogICAgfQogICAgZnVuY3Rpb24gQihuLCB0LCByKSB7CiAgICAgIGlmIChyID0gciB8fCB7fSwgISgiYXJnUGFja0FkdmFuY2UiIGluIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCJyZWdpc3RlclR5cGUgcmVnaXN0ZXJlZEluc3RhbmNlIHJlcXVpcmVzIGFyZ1BhY2tBZHZhbmNlIik7CiAgICAgIHZhciBpID0gdC5uYW1lOwogICAgICBpZiAobiB8fCB2KCd0eXBlICInICsgaSArICciIG11c3QgaGF2ZSBhIHBvc2l0aXZlIGludGVnZXIgdHlwZWlkIHBvaW50ZXInKSwgSy5oYXNPd25Qcm9wZXJ0eShuKSkgewogICAgICAgIGlmIChyLkVhKSByZXR1cm47CiAgICAgICAgdigiQ2Fubm90IHJlZ2lzdGVyIHR5cGUgJyIgKyBpICsgIicgdHdpY2UiKTsKICAgICAgfQogICAgICBLW25dID0gdCwgZGVsZXRlIF9uW25dLCBlbi5oYXNPd25Qcm9wZXJ0eShuKSAmJiAodCA9IGVuW25dLCBkZWxldGUgZW5bbl0sIHQuZm9yRWFjaChmdW5jdGlvbihzKSB7CiAgICAgICAgcygpOwogICAgICB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiBhZShuKSB7CiAgICAgIHJldHVybiB7IGNvdW50OiBuLmNvdW50LCBvYTogbi5vYSwgcGE6IG4ucGEsIGRhOiBuLmRhLCBmYTogbi5mYSwgZ2E6IG4uZ2EsIGhhOiBuLmhhIH07CiAgICB9CiAgICBmdW5jdGlvbiBWbihuKSB7CiAgICAgIHYobi5BLmZhLmVhLm5hbWUgKyAiIGluc3RhbmNlIGFscmVhZHkgZGVsZXRlZCIpOwogICAgfQogICAgdmFyIEduID0gITE7CiAgICBmdW5jdGlvbiBndCgpIHsKICAgIH0KICAgIGZ1bmN0aW9uIHd0KG4pIHsKICAgICAgLS1uLmNvdW50LnZhbHVlLCBuLmNvdW50LnZhbHVlID09PSAwICYmIChuLmdhID8gbi5oYS5uYShuLmdhKSA6IG4uZmEuZWEubmEobi5kYSkpOwogICAgfQogICAgZnVuY3Rpb24gZG4obikgewogICAgICByZXR1cm4gdHlwZW9mIEZpbmFsaXphdGlvbkdyb3VwID4gInUiID8gKGRuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiB0OwogICAgICB9LCBuKSA6IChHbiA9IG5ldyBGaW5hbGl6YXRpb25Hcm91cChmdW5jdGlvbih0KSB7CiAgICAgICAgZm9yICh2YXIgciA9IHQubmV4dCgpOyAhci5kb25lOyByID0gdC5uZXh0KCkpIHIgPSByLnZhbHVlLCByLmRhID8gd3QocikgOiBjb25zb2xlLndhcm4oIm9iamVjdCBhbHJlYWR5IGRlbGV0ZWQ6ICIgKyByLmRhKTsKICAgICAgfSksIGRuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiBHbi5yZWdpc3Rlcih0LCB0LkEsIHQuQSksIHQ7CiAgICAgIH0sIGd0ID0gZnVuY3Rpb24odCkgewogICAgICAgIEduLnVucmVnaXN0ZXIodC5BKTsKICAgICAgfSwgZG4obikpOwogICAgfQogICAgdmFyIGhuID0gdm9pZCAwLCBtbiA9IFtdOwogICAgZnVuY3Rpb24gWW4oKSB7CiAgICAgIGZvciAoOyBtbi5sZW5ndGg7ICkgewogICAgICAgIHZhciBuID0gbW4ucG9wKCk7CiAgICAgICAgbi5BLm9hID0gITEsIG4uZGVsZXRlKCk7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIEcoKSB7CiAgICB9CiAgICB2YXIgQXQgPSB7fTsKICAgIGZ1bmN0aW9uIG9lKG4sIHQpIHsKICAgICAgdmFyIHIgPSBlOwogICAgICBpZiAocltuXS5qYSA9PT0gdm9pZCAwKSB7CiAgICAgICAgdmFyIGkgPSByW25dOwogICAgICAgIHJbbl0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiByW25dLmphLmhhc093blByb3BlcnR5KGFyZ3VtZW50cy5sZW5ndGgpIHx8IHYoIkZ1bmN0aW9uICciICsgdCArICInIGNhbGxlZCB3aXRoIGFuIGludmFsaWQgbnVtYmVyIG9mIGFyZ3VtZW50cyAoIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiKSAtIGV4cGVjdHMgb25lIG9mICgiICsgcltuXS5qYSArICIpISIpLCByW25dLmphW2FyZ3VtZW50cy5sZW5ndGhdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgfSwgcltuXS5qYSA9IFtdLCByW25dLmphW2kueWFdID0gaTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gX3QobiwgdCwgcikgewogICAgICBlLmhhc093blByb3BlcnR5KG4pID8gKChyID09PSB2b2lkIDAgfHwgZVtuXS5qYSAhPT0gdm9pZCAwICYmIGVbbl0uamFbcl0gIT09IHZvaWQgMCkgJiYgdigiQ2Fubm90IHJlZ2lzdGVyIHB1YmxpYyBuYW1lICciICsgbiArICInIHR3aWNlIiksIG9lKG4sIG4pLCBlLmhhc093blByb3BlcnR5KHIpICYmIHYoIkNhbm5vdCByZWdpc3RlciBtdWx0aXBsZSBvdmVybG9hZHMgb2YgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIG51bWJlciBvZiBhcmd1bWVudHMgKCIgKyByICsgIikhIiksIGVbbl0uamFbcl0gPSB0KSA6IChlW25dID0gdCwgciAhPT0gdm9pZCAwICYmIChlW25dLlJhID0gcikpOwogICAgfQogICAgZnVuY3Rpb24gc2UobiwgdCwgciwgaSwgcywgdSwgbCwgYykgewogICAgICB0aGlzLm5hbWUgPSBuLCB0aGlzLmNvbnN0cnVjdG9yID0gdCwgdGhpcy5tYSA9IHIsIHRoaXMubmEgPSBpLCB0aGlzLmlhID0gcywgdGhpcy5DYSA9IHUsIHRoaXMucWEgPSBsLCB0aGlzLkFhID0gYzsKICAgIH0KICAgIGZ1bmN0aW9uIFRuKG4sIHQsIHIpIHsKICAgICAgZm9yICg7IHQgIT09IHI7ICkgdC5xYSB8fCB2KCJFeHBlY3RlZCBudWxsIG9yIGluc3RhbmNlIG9mICIgKyByLm5hbWUgKyAiLCBnb3QgYW4gaW5zdGFuY2Ugb2YgIiArIHQubmFtZSksIG4gPSB0LnFhKG4pLCB0ID0gdC5pYTsKICAgICAgcmV0dXJuIG47CiAgICB9CiAgICBmdW5jdGlvbiB1ZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgc24odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIFRuKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiBjZShuLCB0KSB7CiAgICAgIGlmICh0ID09PSBudWxsKSB7CiAgICAgICAgaWYgKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgdGhpcy5zYSkgewogICAgICAgICAgdmFyIHIgPSB0aGlzLkhhKCk7CiAgICAgICAgICByZXR1cm4gbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgciksIHI7CiAgICAgICAgfQogICAgICAgIHJldHVybiAwOwogICAgICB9CiAgICAgIGlmICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBzbih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgIXRoaXMucmEgJiYgdC5BLmZhLnJhICYmIHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArICh0LkEuaGEgPyB0LkEuaGEubmFtZSA6IHQuQS5mYS5uYW1lKSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIHIgPSBUbih0LkEuZGEsIHQuQS5mYS5lYSwgdGhpcy5lYSksIHRoaXMuc2EpIHN3aXRjaCAodC5BLmdhID09PSB2b2lkIDAgJiYgdigiUGFzc2luZyByYXcgcG9pbnRlciB0byBzbWFydCBwb2ludGVyIGlzIGlsbGVnYWwiKSwgdGhpcy5QYSkgewogICAgICAgIGNhc2UgMDoKICAgICAgICAgIHQuQS5oYSA9PT0gdGhpcyA/IHIgPSB0LkEuZ2EgOiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyAodC5BLmhhID8gdC5BLmhhLm5hbWUgOiB0LkEuZmEubmFtZSkgKyAiIHRvIHBhcmFtZXRlciB0eXBlICIgKyB0aGlzLm5hbWUpOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAxOgogICAgICAgICAgciA9IHQuQS5nYTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIGlmICh0LkEuaGEgPT09IHRoaXMpIHIgPSB0LkEuZ2E7CiAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgdmFyIGkgPSB0LmNsb25lKCk7CiAgICAgICAgICAgIHIgPSB0aGlzLklhKHIsIG9uKGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIGkuZGVsZXRlKCk7CiAgICAgICAgICAgIH0pKSwgbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgcik7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdigiVW5zdXBwb3J0aW5nIHNoYXJpbmcgcG9saWN5Iik7CiAgICAgIH0KICAgICAgcmV0dXJuIHI7CiAgICB9CiAgICBmdW5jdGlvbiBsZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgc24odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIHQuQS5mYS5yYSAmJiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyB0LkEuZmEubmFtZSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIFRuKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiBFbihuKSB7CiAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShEW24gPj4gMl0pOwogICAgfQogICAgZnVuY3Rpb24gQ3QobiwgdCwgcikgewogICAgICByZXR1cm4gdCA9PT0gciA/IG4gOiByLmlhID09PSB2b2lkIDAgPyBudWxsIDogKG4gPSBDdChuLCB0LCByLmlhKSwgbiA9PT0gbnVsbCA/IG51bGwgOiByLkFhKG4pKTsKICAgIH0KICAgIHZhciB5biA9IHt9OwogICAgZnVuY3Rpb24gZmUobiwgdCkgewogICAgICBmb3IgKHQgPT09IHZvaWQgMCAmJiB2KCJwdHIgc2hvdWxkIG5vdCBiZSB1bmRlZmluZWQiKTsgbi5pYTsgKSB0ID0gbi5xYSh0KSwgbiA9IG4uaWE7CiAgICAgIHJldHVybiB5blt0XTsKICAgIH0KICAgIGZ1bmN0aW9uIFBuKG4sIHQpIHsKICAgICAgcmV0dXJuIHQuZmEgJiYgdC5kYSB8fCBDbigibWFrZUNsYXNzSGFuZGxlIHJlcXVpcmVzIHB0ciBhbmQgcHRyVHlwZSIpLCAhIXQuaGEgIT0gISF0LmdhICYmIENuKCJCb3RoIHNtYXJ0UHRyVHlwZSBhbmQgc21hcnRQdHIgbXVzdCBiZSBzcGVjaWZpZWQiKSwgdC5jb3VudCA9IHsgdmFsdWU6IDEgfSwgZG4oT2JqZWN0LmNyZWF0ZShuLCB7IEE6IHsgdmFsdWU6IHQgfSB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiB6KG4sIHQsIHIsIGkpIHsKICAgICAgdGhpcy5uYW1lID0gbiwgdGhpcy5lYSA9IHQsIHRoaXMudWEgPSByLCB0aGlzLnJhID0gaSwgdGhpcy5zYSA9ICExLCB0aGlzLm5hID0gdGhpcy5JYSA9IHRoaXMuSGEgPSB0aGlzLndhID0gdGhpcy5QYSA9IHRoaXMuR2EgPSB2b2lkIDAsIHQuaWEgIT09IHZvaWQgMCA/IHRoaXMudG9XaXJlVHlwZSA9IGNlIDogKHRoaXMudG9XaXJlVHlwZSA9IGkgPyB1ZSA6IGxlLCB0aGlzLmthID0gbnVsbCk7CiAgICB9CiAgICBmdW5jdGlvbiBUdChuLCB0LCByKSB7CiAgICAgIGUuaGFzT3duUHJvcGVydHkobikgfHwgQ24oIlJlcGxhY2luZyBub25leGlzdGFudCBwdWJsaWMgc3ltYm9sIiksIGVbbl0uamEgIT09IHZvaWQgMCAmJiByICE9PSB2b2lkIDAgPyBlW25dLmphW3JdID0gdCA6IChlW25dID0gdCwgZVtuXS55YSA9IHIpOwogICAgfQogICAgZnVuY3Rpb24gWShuLCB0KSB7CiAgICAgIG4gPSBSKG4pOwogICAgICB2YXIgciA9IEhuKG4sIHQpOwogICAgICByZXR1cm4gdHlwZW9mIHIgIT0gImZ1bmN0aW9uIiAmJiB2KCJ1bmtub3duIGZ1bmN0aW9uIHBvaW50ZXIgd2l0aCBzaWduYXR1cmUgIiArIG4gKyAiOiAiICsgdCksIHI7CiAgICB9CiAgICB2YXIgRXQgPSB2b2lkIDA7CiAgICBmdW5jdGlvbiBQdChuKSB7CiAgICAgIG4gPSBGdChuKTsKICAgICAgdmFyIHQgPSBSKG4pOwogICAgICByZXR1cm4gVihuKSwgdDsKICAgIH0KICAgIGZ1bmN0aW9uIHBuKG4sIHQpIHsKICAgICAgZnVuY3Rpb24gcih1KSB7CiAgICAgICAgc1t1XSB8fCBLW3VdIHx8IChfblt1XSA/IF9uW3VdLmZvckVhY2gocikgOiAoaS5wdXNoKHUpLCBzW3VdID0gITApKTsKICAgICAgfQogICAgICB2YXIgaSA9IFtdLCBzID0ge307CiAgICAgIHRocm93IHQuZm9yRWFjaChyKSwgbmV3IEV0KG4gKyAiOiAiICsgaS5tYXAoUHQpLmpvaW4oWyIsICJdKSk7CiAgICB9CiAgICBmdW5jdGlvbiBPdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSBbXSwgaSA9IDA7IGkgPCBuOyBpKyspIHIucHVzaChrWyh0ID4+IDIpICsgaV0pOwogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIE9uKG4pIHsKICAgICAgZm9yICg7IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4ucG9wKCk7CiAgICAgICAgbi5wb3AoKSh0KTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gYnQobiwgdCwgcikgewogICAgICByZXR1cm4gbiBpbnN0YW5jZW9mIE9iamVjdCB8fCB2KHIgKyAnIHdpdGggaW52YWxpZCAidGhpcyI6ICcgKyBuKSwgbiBpbnN0YW5jZW9mIHQuZWEuY29uc3RydWN0b3IgfHwgdihyICsgJyBpbmNvbXBhdGlibGUgd2l0aCAidGhpcyIgb2YgdHlwZSAnICsgbi5jb25zdHJ1Y3Rvci5uYW1lKSwgbi5BLmRhIHx8IHYoImNhbm5vdCBjYWxsIGVtc2NyaXB0ZW4gYmluZGluZyBtZXRob2QgIiArIHIgKyAiIG9uIGRlbGV0ZWQgb2JqZWN0IiksIFRuKG4uQS5kYSwgbi5BLmZhLmVhLCB0LmVhKTsKICAgIH0KICAgIHZhciBabiA9IFtdLCBGID0gW3t9LCB7IHZhbHVlOiB2b2lkIDAgfSwgeyB2YWx1ZTogbnVsbCB9LCB7IHZhbHVlOiAhMCB9LCB7IHZhbHVlOiAhMSB9XTsKICAgIGZ1bmN0aW9uICRuKG4pIHsKICAgICAgNCA8IG4gJiYgLS1GW25dLkphID09PSAwICYmIChGW25dID0gdm9pZCAwLCBabi5wdXNoKG4pKTsKICAgIH0KICAgIGZ1bmN0aW9uIG9uKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSB2b2lkIDA6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIG51bGw6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlICEwOgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgY2FzZSAhMToKICAgICAgICAgIHJldHVybiA0OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB2YXIgdCA9IFpuLmxlbmd0aCA/IFpuLnBvcCgpIDogRi5sZW5ndGg7CiAgICAgICAgICByZXR1cm4gRlt0XSA9IHsgSmE6IDEsIHZhbHVlOiBuIH0sIHQ7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHNuKG4pIHsKICAgICAgaWYgKG4gPT09IG51bGwpIHJldHVybiAibnVsbCI7CiAgICAgIHZhciB0ID0gdHlwZW9mIG47CiAgICAgIHJldHVybiB0ID09PSAib2JqZWN0IiB8fCB0ID09PSAiYXJyYXkiIHx8IHQgPT09ICJmdW5jdGlvbiIgPyBuLnRvU3RyaW5nKCkgOiAiIiArIG47CiAgICB9CiAgICBmdW5jdGlvbiBkZShuLCB0KSB7CiAgICAgIHN3aXRjaCAodCkgewogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiBmdW5jdGlvbihyKSB7CiAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShvdFtyID4+IDJdKTsKICAgICAgICAgIH07CiAgICAgICAgY2FzZSAzOgogICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHIpIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKHN0W3IgPj4gM10pOwogICAgICAgICAgfTsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBmbG9hdCB0eXBlOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIGhlKG4pIHsKICAgICAgdmFyIHQgPSBGdW5jdGlvbjsKICAgICAgaWYgKCEodCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSkgdGhyb3cgbmV3IFR5cGVFcnJvcigibmV3XyBjYWxsZWQgd2l0aCBjb25zdHJ1Y3RvciB0eXBlICIgKyB0eXBlb2YgdCArICIgd2hpY2ggaXMgbm90IGEgZnVuY3Rpb24iKTsKICAgICAgdmFyIHIgPSBCbih0Lm5hbWUgfHwgInVua25vd25GdW5jdGlvbk5hbWUiLCBmdW5jdGlvbigpIHsKICAgICAgfSk7CiAgICAgIHJldHVybiByLnByb3RvdHlwZSA9IHQucHJvdG90eXBlLCByID0gbmV3IHIoKSwgbiA9IHQuYXBwbHkociwgbiksIG4gaW5zdGFuY2VvZiBPYmplY3QgPyBuIDogcjsKICAgIH0KICAgIGZ1bmN0aW9uIG1lKG4sIHQsIHIpIHsKICAgICAgc3dpdGNoICh0KSB7CiAgICAgICAgY2FzZSAwOgogICAgICAgICAgcmV0dXJuIHIgPyBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiAkW2ldOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIHhbaV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMToKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gdG5baSA+PiAxXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBnbltpID4+IDFdOwogICAgICAgICAgfTsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICByZXR1cm4gciA/IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIGtbaSA+PiAyXTsKICAgICAgICAgIH0gOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBEW2kgPj4gMl07CiAgICAgICAgICB9OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGludGVnZXIgdHlwZTogIiArIG4pOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBYbihuKSB7CiAgICAgIHJldHVybiBuIHx8IHYoIkNhbm5vdCB1c2UgZGVsZXRlZCB2YWwuIGhhbmRsZSA9ICIgKyBuKSwgRltuXS52YWx1ZTsKICAgIH0KICAgIGZ1bmN0aW9uIFN0KG4sIHQpIHsKICAgICAgdmFyIHIgPSBLW25dOwogICAgICByZXR1cm4gciA9PT0gdm9pZCAwICYmIHYodCArICIgaGFzIHVua25vd24gdHlwZSAiICsgUHQobikpLCByOwogICAgfQogICAgdmFyIHllID0ge30sIE10ID0ge307CiAgICBmdW5jdGlvbiBXdCgpIHsKICAgICAgaWYgKCFKbikgewogICAgICAgIHZhciBuID0geyBVU0VSOiAid2ViX3VzZXIiLCBMT0dOQU1FOiAid2ViX3VzZXIiLCBQQVRIOiAiLyIsIFBXRDogIi8iLCBIT01FOiAiL2hvbWUvd2ViX3VzZXIiLCBMQU5HOiAodHlwZW9mIG5hdmlnYXRvciA9PSAib2JqZWN0IiAmJiBuYXZpZ2F0b3IubGFuZ3VhZ2VzICYmIG5hdmlnYXRvci5sYW5ndWFnZXNbMF0gfHwgIkMiKS5yZXBsYWNlKCItIiwgIl8iKSArICIuVVRGLTgiLCBfOiBPIHx8ICIuL3RoaXMucHJvZ3JhbSIgfSwgdDsKICAgICAgICBmb3IgKHQgaW4gTXQpIG5bdF0gPSBNdFt0XTsKICAgICAgICB2YXIgciA9IFtdOwogICAgICAgIGZvciAodCBpbiBuKSByLnB1c2godCArICI9IiArIG5bdF0pOwogICAgICAgIEpuID0gcjsKICAgICAgfQogICAgICByZXR1cm4gSm47CiAgICB9CiAgICB2YXIgSm4sIGt0ID0gW107CiAgICBmdW5jdGlvbiBSdChuKSB7CiAgICAgIHZhciB0ID0ge30sIHI7CiAgICAgIGZvciAociBpbiBuKSAoZnVuY3Rpb24oaSkgewogICAgICAgIHZhciBzID0gbltpXTsKICAgICAgICB0W2ldID0gdHlwZW9mIHMgPT0gImZ1bmN0aW9uIiA/IGZ1bmN0aW9uKCkgewogICAgICAgICAga3QucHVzaChpKTsKICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgIHJldHVybiBzLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICAgICAgICB9IGZpbmFsbHkgewogICAgICAgICAgICBpZiAoTG4pIHJldHVybjsKICAgICAgICAgICAgdmFyIHUgPSBrdC5wb3AoKTsKICAgICAgICAgICAgcnQodSA9PT0gaSk7CiAgICAgICAgICB9CiAgICAgICAgfSA6IHM7CiAgICAgIH0pKHIpOwogICAgICByZXR1cm4gdDsKICAgIH0KICAgIGZvciAodmFyIEl0ID0gQXJyYXkoMjU2KSwgYm4gPSAwOyAyNTYgPiBibjsgKytibikgSXRbYm5dID0gU3RyaW5nLmZyb21DaGFyQ29kZShibik7CiAgICBwdCA9IEl0LCBybiA9IGUuQmluZGluZ0Vycm9yID0gem4oIkJpbmRpbmdFcnJvciIpLCB2dCA9IGUuSW50ZXJuYWxFcnJvciA9IHpuKCJJbnRlcm5hbEVycm9yIiksIEcucHJvdG90eXBlLmlzQWxpYXNPZiA9IGZ1bmN0aW9uKG4pIHsKICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEcgJiYgbiBpbnN0YW5jZW9mIEcpKSByZXR1cm4gITE7CiAgICAgIHZhciB0ID0gdGhpcy5BLmZhLmVhLCByID0gdGhpcy5BLmRhLCBpID0gbi5BLmZhLmVhOwogICAgICBmb3IgKG4gPSBuLkEuZGE7IHQuaWE7ICkgciA9IHQucWEociksIHQgPSB0LmlhOwogICAgICBmb3IgKDsgaS5pYTsgKSBuID0gaS5xYShuKSwgaSA9IGkuaWE7CiAgICAgIHJldHVybiB0ID09PSBpICYmIHIgPT09IG47CiAgICB9LCBHLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkgewogICAgICBpZiAodGhpcy5BLmRhIHx8IFZuKHRoaXMpLCB0aGlzLkEucGEpIHJldHVybiB0aGlzLkEuY291bnQudmFsdWUgKz0gMSwgdGhpczsKICAgICAgdmFyIG4gPSBkbihPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSwgeyBBOiB7IHZhbHVlOiBhZSh0aGlzLkEpIH0gfSkpOwogICAgICByZXR1cm4gbi5BLmNvdW50LnZhbHVlICs9IDEsIG4uQS5vYSA9ICExLCBuOwogICAgfSwgRy5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24oKSB7CiAgICAgIHRoaXMuQS5kYSB8fCBWbih0aGlzKSwgdGhpcy5BLm9hICYmICF0aGlzLkEucGEgJiYgdigiT2JqZWN0IGFscmVhZHkgc2NoZWR1bGVkIGZvciBkZWxldGlvbiIpLCBndCh0aGlzKSwgd3QodGhpcy5BKSwgdGhpcy5BLnBhIHx8ICh0aGlzLkEuZ2EgPSB2b2lkIDAsIHRoaXMuQS5kYSA9IHZvaWQgMCk7CiAgICB9LCBHLnByb3RvdHlwZS5pc0RlbGV0ZWQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuICF0aGlzLkEuZGE7CiAgICB9LCBHLnByb3RvdHlwZS5kZWxldGVMYXRlciA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gdGhpcy5BLmRhIHx8IFZuKHRoaXMpLCB0aGlzLkEub2EgJiYgIXRoaXMuQS5wYSAmJiB2KCJPYmplY3QgYWxyZWFkeSBzY2hlZHVsZWQgZm9yIGRlbGV0aW9uIiksIG1uLnB1c2godGhpcyksIG1uLmxlbmd0aCA9PT0gMSAmJiBobiAmJiBobihZbiksIHRoaXMuQS5vYSA9ICEwLCB0aGlzOwogICAgfSwgei5wcm90b3R5cGUuRGEgPSBmdW5jdGlvbihuKSB7CiAgICAgIHJldHVybiB0aGlzLndhICYmIChuID0gdGhpcy53YShuKSksIG47CiAgICB9LCB6LnByb3RvdHlwZS52YSA9IGZ1bmN0aW9uKG4pIHsKICAgICAgdGhpcy5uYSAmJiB0aGlzLm5hKG4pOwogICAgfSwgei5wcm90b3R5cGUuYXJnUGFja0FkdmFuY2UgPSA4LCB6LnByb3RvdHlwZS5yZWFkVmFsdWVGcm9tUG9pbnRlciA9IEVuLCB6LnByb3RvdHlwZS5kZWxldGVPYmplY3QgPSBmdW5jdGlvbihuKSB7CiAgICAgIG4gIT09IG51bGwgJiYgbi5kZWxldGUoKTsKICAgIH0sIHoucHJvdG90eXBlLmZyb21XaXJlVHlwZSA9IGZ1bmN0aW9uKG4pIHsKICAgICAgZnVuY3Rpb24gdCgpIHsKICAgICAgICByZXR1cm4gdGhpcy5zYSA/IFBuKHRoaXMuZWEubWEsIHsgZmE6IHRoaXMuR2EsIGRhOiByLCBoYTogdGhpcywgZ2E6IG4gfSkgOiBQbih0aGlzLmVhLm1hLCB7IGZhOiB0aGlzLCBkYTogbiB9KTsKICAgICAgfQogICAgICB2YXIgciA9IHRoaXMuRGEobik7CiAgICAgIGlmICghcikgcmV0dXJuIHRoaXMudmEobiksIG51bGw7CiAgICAgIHZhciBpID0gZmUodGhpcy5lYSwgcik7CiAgICAgIGlmIChpICE9PSB2b2lkIDApCiAgICAgICAgcmV0dXJuIGkuQS5jb3VudC52YWx1ZSA9PT0gMCA/IChpLkEuZGEgPSByLCBpLkEuZ2EgPSBuLCBpLmNsb25lKCkpIDogKGkgPSBpLmNsb25lKCksIHRoaXMudmEobiksIGkpOwogICAgICBpZiAoaSA9IHRoaXMuZWEuQ2EociksIGkgPSBBdFtpXSwgIWkpIHJldHVybiB0LmNhbGwodGhpcyk7CiAgICAgIGkgPSB0aGlzLnJhID8gaS56YSA6IGkucG9pbnRlclR5cGU7CiAgICAgIHZhciBzID0gQ3QociwgdGhpcy5lYSwgaS5lYSk7CiAgICAgIHJldHVybiBzID09PSBudWxsID8gdC5jYWxsKHRoaXMpIDogdGhpcy5zYSA/IFBuKGkuZWEubWEsIHsgZmE6IGksIGRhOiBzLCBoYTogdGhpcywgZ2E6IG4gfSkgOiBQbigKICAgICAgICBpLmVhLm1hLAogICAgICAgIHsgZmE6IGksIGRhOiBzIH0KICAgICAgKTsKICAgIH0sIGUuZ2V0SW5oZXJpdGVkSW5zdGFuY2VDb3VudCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gT2JqZWN0LmtleXMoeW4pLmxlbmd0aDsKICAgIH0sIGUuZ2V0TGl2ZUluaGVyaXRlZEluc3RhbmNlcyA9IGZ1bmN0aW9uKCkgewogICAgICB2YXIgbiA9IFtdLCB0OwogICAgICBmb3IgKHQgaW4geW4pIHluLmhhc093blByb3BlcnR5KHQpICYmIG4ucHVzaCh5blt0XSk7CiAgICAgIHJldHVybiBuOwogICAgfSwgZS5mbHVzaFBlbmRpbmdEZWxldGVzID0gWW4sIGUuc2V0RGVsYXlGdW5jdGlvbiA9IGZ1bmN0aW9uKG4pIHsKICAgICAgaG4gPSBuLCBtbi5sZW5ndGggJiYgaG4gJiYgaG4oWW4pOwogICAgfSwgRXQgPSBlLlVuYm91bmRUeXBlRXJyb3IgPSB6bigiVW5ib3VuZFR5cGVFcnJvciIpLCBlLmNvdW50X2VtdmFsX2hhbmRsZXMgPSBmdW5jdGlvbigpIHsKICAgICAgZm9yICh2YXIgbiA9IDAsIHQgPSA1OyB0IDwgRi5sZW5ndGg7ICsrdCkgRlt0XSAhPT0gdm9pZCAwICYmICsrbjsKICAgICAgcmV0dXJuIG47CiAgICB9LCBlLmdldF9maXJzdF9lbXZhbCA9IGZ1bmN0aW9uKCkgewogICAgICBmb3IgKHZhciBuID0gNTsgbiA8IEYubGVuZ3RoOyArK24pIGlmIChGW25dICE9PSB2b2lkIDApIHJldHVybiBGW25dOwogICAgICByZXR1cm4gbnVsbDsKICAgIH0sIGZ0LnB1c2goeyBCYTogZnVuY3Rpb24oKSB7CiAgICAgIHh0KCk7CiAgICB9IH0pOwogICAgdmFyIHBlID0gewogICAgICB6OiBmdW5jdGlvbihuKSB7CiAgICAgICAgcmV0dXJuIFNuKG4gKyAxNikgKyAxNjsKICAgICAgfSwKICAgICAgdTogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIHRocm93IG5ldyBpZShuKS5GYSh0LCByKSwgInVuY2F1Z2h0X2V4Y2VwdGlvbiIgaW4gQW4gPyBBbi54YSsrIDogQW4ueGEgPSAxLCBuOwogICAgICB9LAogICAgICB3OiBmdW5jdGlvbihuLCB0LCByLCBpLCBzKSB7CiAgICAgICAgdmFyIHUgPSBVbihyKTsKICAgICAgICB0ID0gUih0KSwgQihuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24obCkgewogICAgICAgICAgcmV0dXJuICEhbDsKICAgICAgICB9LCB0b1dpcmVUeXBlOiBmdW5jdGlvbihsLCBjKSB7CiAgICAgICAgICByZXR1cm4gYyA/IGkgOiBzOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogZnVuY3Rpb24obCkgewogICAgICAgICAgaWYgKHIgPT09IDEpIHZhciBjID0gJDsKICAgICAgICAgIGVsc2UgaWYgKHIgPT09IDIpIGMgPSB0bjsKICAgICAgICAgIGVsc2UgaWYgKHIgPT09IDQpIGMgPSBrOwogICAgICAgICAgZWxzZSB0aHJvdyBuZXcgVHlwZUVycm9yKCJVbmtub3duIGJvb2xlYW4gdHlwZSBzaXplOiAiICsgdCk7CiAgICAgICAgICByZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUoY1tsID4+IHVdKTsKICAgICAgICB9LCBrYTogbnVsbCB9KTsKICAgICAgfSwKICAgICAgaDogZnVuY3Rpb24obiwgdCwgciwgaSwgcywgdSwgbCwgYywgeSwgZiwgZCwgbSwgdykgewogICAgICAgIGQgPSBSKGQpLCB1ID0gWShzLCB1KSwgYyAmJiAoYyA9IFkobCwgYykpLCBmICYmIChmID0gWSh5LCBmKSksIHcgPSBZKG0sIHcpOwogICAgICAgIHZhciBQID0gRG4oZCk7CiAgICAgICAgX3QoUCwgZnVuY3Rpb24oKSB7CiAgICAgICAgICBwbigiQ2Fubm90IGNvbnN0cnVjdCAiICsgZCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbaV0pOwogICAgICAgIH0pLCBhbihbbiwgdCwgcl0sIGkgPyBbaV0gOiBbXSwgZnVuY3Rpb24ocCkgewogICAgICAgICAgaWYgKHAgPSBwWzBdLCBpKQogICAgICAgICAgICB2YXIgTiA9IHAuZWEsIFcgPSBOLm1hOwogICAgICAgICAgZWxzZSBXID0gRy5wcm90b3R5cGU7CiAgICAgICAgICBwID0gQm4oUCwgZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGlmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykgIT09IEkpIHRocm93IG5ldyBybigiVXNlICduZXcnIHRvIGNvbnN0cnVjdCAiICsgZCk7CiAgICAgICAgICAgIGlmIChMLmxhID09PSB2b2lkIDApIHRocm93IG5ldyBybihkICsgIiBoYXMgbm8gYWNjZXNzaWJsZSBjb25zdHJ1Y3RvciIpOwogICAgICAgICAgICB2YXIganQgPSBMLmxhW2FyZ3VtZW50cy5sZW5ndGhdOwogICAgICAgICAgICBpZiAoanQgPT09IHZvaWQgMCkgdGhyb3cgbmV3IHJuKCJUcmllZCB0byBpbnZva2UgY3RvciBvZiAiICsgZCArICIgd2l0aCBpbnZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzICgiICsgYXJndW1lbnRzLmxlbmd0aCArICIpIC0gZXhwZWN0ZWQgKCIgKyBPYmplY3Qua2V5cyhMLmxhKS50b1N0cmluZygpICsgIikgcGFyYW1ldGVycyBpbnN0ZWFkISIpOwogICAgICAgICAgICByZXR1cm4ganQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICAgIH0pOwogICAgICAgICAgdmFyIEkgPSBPYmplY3QuY3JlYXRlKFcsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHAgfSB9KTsKICAgICAgICAgIHAucHJvdG90eXBlID0gSTsKICAgICAgICAgIHZhciBMID0gbmV3IHNlKGQsIHAsIEksIHcsIE4sIHUsIGMsIGYpOwogICAgICAgICAgTiA9IG5ldyB6KGQsIEwsICEwLCAhMSksIFcgPSBuZXcgeihkICsgIioiLCBMLCAhMSwgITEpOwogICAgICAgICAgdmFyIHZuID0gbmV3IHooZCArICIgY29uc3QqIiwgTCwgITEsICEwKTsKICAgICAgICAgIHJldHVybiBBdFtuXSA9IHsgcG9pbnRlclR5cGU6IFcsIHphOiB2biB9LCBUdChQLCBwKSwgW04sIFcsIHZuXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgZzogZnVuY3Rpb24obiwgdCwgciwgaSwgcywgdSkgewogICAgICAgIHJ0KDAgPCB0KTsKICAgICAgICB2YXIgbCA9IE90KHQsIHIpOwogICAgICAgIHMgPSBZKGksIHMpOwogICAgICAgIHZhciBjID0gW3VdLCB5ID0gW107CiAgICAgICAgYW4oW10sIFtuXSwgZnVuY3Rpb24oZikgewogICAgICAgICAgZiA9IGZbMF07CiAgICAgICAgICB2YXIgZCA9ICJjb25zdHJ1Y3RvciAiICsgZi5uYW1lOwogICAgICAgICAgaWYgKGYuZWEubGEgPT09IHZvaWQgMCAmJiAoZi5lYS5sYSA9IFtdKSwgZi5lYS5sYVt0IC0gMV0gIT09IHZvaWQgMCkgdGhyb3cgbmV3IHJuKCJDYW5ub3QgcmVnaXN0ZXIgbXVsdGlwbGUgY29uc3RydWN0b3JzIHdpdGggaWRlbnRpY2FsIG51bWJlciBvZiBwYXJhbWV0ZXJzICgiICsgKHQgLSAxKSArICIpIGZvciBjbGFzcyAnIiArIGYubmFtZSArICInISBPdmVybG9hZCByZXNvbHV0aW9uIGlzIGN1cnJlbnRseSBvbmx5IHBlcmZvcm1lZCB1c2luZyB0aGUgcGFyYW1ldGVyIGNvdW50LCBub3QgYWN0dWFsIHR5cGUgaW5mbyEiKTsKICAgICAgICAgIHJldHVybiBmLmVhLmxhW3QgLSAxXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBwbigiQ2Fubm90IGNvbnN0cnVjdCAiICsgZi5uYW1lICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIGwpOwogICAgICAgICAgfSwgYW4oW10sIGwsIGZ1bmN0aW9uKG0pIHsKICAgICAgICAgICAgcmV0dXJuIGYuZWEubGFbdCAtIDFdID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgYXJndW1lbnRzLmxlbmd0aCAhPT0gdCAtIDEgJiYgdihkICsgIiBjYWxsZWQgd2l0aCAiICsgYXJndW1lbnRzLmxlbmd0aCArICIgYXJndW1lbnRzLCBleHBlY3RlZCAiICsgKHQgLSAxKSksIHkubGVuZ3RoID0gMCwgYy5sZW5ndGggPSB0OwogICAgICAgICAgICAgIGZvciAodmFyIHcgPSAxOyB3IDwgdDsgKyt3KSBjW3ddID0gbVt3XS50b1dpcmVUeXBlKAogICAgICAgICAgICAgICAgeSwKICAgICAgICAgICAgICAgIGFyZ3VtZW50c1t3IC0gMV0KICAgICAgICAgICAgICApOwogICAgICAgICAgICAgIHJldHVybiB3ID0gcy5hcHBseShudWxsLCBjKSwgT24oeSksIG1bMF0uZnJvbVdpcmVUeXBlKHcpOwogICAgICAgICAgICB9LCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgYjogZnVuY3Rpb24obiwgdCwgciwgaSwgcywgdSwgbCwgYywgeSwgZikgewogICAgICAgIHQgPSBSKHQpLCBzID0gWShpLCBzKSwgYW4oW10sIFtuXSwgZnVuY3Rpb24oZCkgewogICAgICAgICAgZCA9IGRbMF07CiAgICAgICAgICB2YXIgbSA9IGQubmFtZSArICIuIiArIHQsIHcgPSB7IGdldDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHBuKCJDYW5ub3QgYWNjZXNzICIgKyBtICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIFtyLCBsXSk7CiAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCB9OwogICAgICAgICAgcmV0dXJuIHkgPyB3LnNldCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBwbigiQ2Fubm90IGFjY2VzcyAiICsgbSArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbciwgbF0pOwogICAgICAgICAgfSA6IHcuc2V0ID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHYobSArICIgaXMgYSByZWFkLW9ubHkgcHJvcGVydHkiKTsKICAgICAgICAgIH0sIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkLmVhLm1hLCB0LCB3KSwgYW4oW10sIHkgPyBbciwgbF0gOiBbcl0sIGZ1bmN0aW9uKFApIHsKICAgICAgICAgICAgdmFyIHAgPSBQWzBdLCBOID0geyBnZXQ6IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIHZhciBJID0gYnQodGhpcywgZCwgbSArICIgZ2V0dGVyIik7CiAgICAgICAgICAgICAgcmV0dXJuIHAuZnJvbVdpcmVUeXBlKHModSwgSSkpOwogICAgICAgICAgICB9LCBlbnVtZXJhYmxlOiAhMCB9OwogICAgICAgICAgICBpZiAoeSkgewogICAgICAgICAgICAgIHkgPSBZKGMsIHkpOwogICAgICAgICAgICAgIHZhciBXID0gUFsxXTsKICAgICAgICAgICAgICBOLnNldCA9IGZ1bmN0aW9uKEkpIHsKICAgICAgICAgICAgICAgIHZhciBMID0gYnQodGhpcywgZCwgbSArICIgc2V0dGVyIiksIHZuID0gW107CiAgICAgICAgICAgICAgICB5KGYsIEwsIFcudG9XaXJlVHlwZSh2biwgSSkpLCBPbih2bik7CiAgICAgICAgICAgICAgfTsKICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGQuZWEubWEsIHQsIE4pLCBbXTsKICAgICAgICAgIH0pLCBbXTsKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgdjogZnVuY3Rpb24obiwgdCkgewogICAgICAgIHQgPSBSKHQpLCBCKG4sIHsgbmFtZTogdCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihyKSB7CiAgICAgICAgICB2YXIgaSA9IEZbcl0udmFsdWU7CiAgICAgICAgICByZXR1cm4gJG4ociksIGk7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24ociwgaSkgewogICAgICAgICAgcmV0dXJuIG9uKGkpOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogRW4sIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBtOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgciA9IFVuKHIpLCB0ID0gUih0KSwgQihuLCB7CiAgICAgICAgICBuYW1lOiB0LAogICAgICAgICAgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBpOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIHMpIHsKICAgICAgICAgICAgaWYgKHR5cGVvZiBzICE9ICJudW1iZXIiICYmIHR5cGVvZiBzICE9ICJib29sZWFuIikgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgIicgKyBzbihzKSArICciIHRvICcgKyB0aGlzLm5hbWUpOwogICAgICAgICAgICByZXR1cm4gczsKICAgICAgICAgIH0sCiAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBkZSh0LCByKSwKICAgICAgICAgIGthOiBudWxsCiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGM6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIHMsIHUpIHsKICAgICAgICB2YXIgbCA9IE90KHQsIHIpOwogICAgICAgIG4gPSBSKG4pLCBzID0gWShpLCBzKSwgX3QobiwgZnVuY3Rpb24oKSB7CiAgICAgICAgICBwbigiQ2Fubm90IGNhbGwgIiArIG4gKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgbCk7CiAgICAgICAgfSwgdCAtIDEpLCBhbihbXSwgbCwgZnVuY3Rpb24oYykgewogICAgICAgICAgdmFyIHkgPSBuLCBmID0gbjsKICAgICAgICAgIGMgPSBbY1swXSwgbnVsbF0uY29uY2F0KGMuc2xpY2UoMSkpOwogICAgICAgICAgdmFyIGQgPSBzLCBtID0gYy5sZW5ndGg7CiAgICAgICAgICAyID4gbSAmJiB2KCJhcmdUeXBlcyBhcnJheSBzaXplIG1pc21hdGNoISBNdXN0IGF0IGxlYXN0IGdldCByZXR1cm4gdmFsdWUgYW5kICd0aGlzJyB0eXBlcyEiKTsKICAgICAgICAgIGZvciAodmFyIHcgPSBjWzFdICE9PSBudWxsICYmICExLCBQID0gITEsIHAgPSAxOyBwIDwgYy5sZW5ndGg7ICsrcCkgaWYgKGNbcF0gIT09IG51bGwgJiYgY1twXS5rYSA9PT0gdm9pZCAwKSB7CiAgICAgICAgICAgIFAgPSAhMDsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICB9CiAgICAgICAgICB2YXIgTiA9IGNbMF0ubmFtZSAhPT0gInZvaWQiLCBXID0gIiIsIEkgPSAiIjsKICAgICAgICAgIGZvciAocCA9IDA7IHAgPCBtIC0gMjsgKytwKSBXICs9IChwICE9PSAwID8gIiwgIiA6ICIiKSArICJhcmciICsgcCwgSSArPSAocCAhPT0gMCA/ICIsICIgOiAiIikgKyAiYXJnIiArIHAgKyAiV2lyZWQiOwogICAgICAgICAgZiA9ICJyZXR1cm4gZnVuY3Rpb24gIiArIERuKGYpICsgIigiICsgVyArIGApIHsKaWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IGAgKyAobSAtIDIpICsgYCkgewp0aHJvd0JpbmRpbmdFcnJvcignZnVuY3Rpb24gYCArIGYgKyAiIGNhbGxlZCB3aXRoICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMsIGV4cGVjdGVkICIgKyAobSAtIDIpICsgYCBhcmdzIScpOwp9CmAsIFAgJiYgKGYgKz0gYHZhciBkZXN0cnVjdG9ycyA9IFtdOwpgKTsKICAgICAgICAgIHZhciBMID0gUCA/ICJkZXN0cnVjdG9ycyIgOiAibnVsbCI7CiAgICAgICAgICBmb3IgKFcgPSAidGhyb3dCaW5kaW5nRXJyb3IgaW52b2tlciBmbiBydW5EZXN0cnVjdG9ycyByZXRUeXBlIGNsYXNzUGFyYW0iLnNwbGl0KCIgIiksIGQgPSBbdiwgZCwgdSwgT24sIGNbMF0sIGNbMV1dLCB3ICYmIChmICs9ICJ2YXIgdGhpc1dpcmVkID0gY2xhc3NQYXJhbS50b1dpcmVUeXBlKCIgKyBMICsgYCwgdGhpcyk7CmApLCBwID0gMDsgcCA8IG0gLSAyOyArK3ApIGYgKz0gInZhciBhcmciICsgcCArICJXaXJlZCA9IGFyZ1R5cGUiICsgcCArICIudG9XaXJlVHlwZSgiICsgTCArICIsIGFyZyIgKyBwICsgIik7IC8vICIgKyBjW3AgKyAyXS5uYW1lICsgYApgLCBXLnB1c2goImFyZ1R5cGUiICsgcCksIGQucHVzaChjW3AgKyAyXSk7CiAgICAgICAgICBpZiAodyAmJiAoSSA9ICJ0aGlzV2lyZWQiICsgKDAgPCBJLmxlbmd0aCA/ICIsICIgOiAiIikgKyBJKSwgZiArPSAoTiA/ICJ2YXIgcnYgPSAiIDogIiIpICsgImludm9rZXIoZm4iICsgKDAgPCBJLmxlbmd0aCA/ICIsICIgOiAiIikgKyBJICsgYCk7CmAsIFApIGYgKz0gYHJ1bkRlc3RydWN0b3JzKGRlc3RydWN0b3JzKTsKYDsKICAgICAgICAgIGVsc2UgZm9yIChwID0gdyA/IDEgOiAyOyBwIDwgYy5sZW5ndGg7ICsrcCkgbSA9IHAgPT09IDEgPyAidGhpc1dpcmVkIiA6ICJhcmciICsgKHAgLSAyKSArICJXaXJlZCIsIGNbcF0ua2EgIT09IG51bGwgJiYgKGYgKz0gbSArICJfZHRvcigiICsgbSArICIpOyAvLyAiICsgY1twXS5uYW1lICsgYApgLCBXLnB1c2gobSArICJfZHRvciIpLCBkLnB1c2goY1twXS5rYSkpOwogICAgICAgICAgcmV0dXJuIE4gJiYgKGYgKz0gYHZhciByZXQgPSByZXRUeXBlLmZyb21XaXJlVHlwZShydik7CnJldHVybiByZXQ7CmApLCBXLnB1c2goZiArIGB9CmApLCBjID0gaGUoVykuYXBwbHkobnVsbCwgZCksIFR0KHksIGMsIHQgLSAxKSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGU6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIHMpIHsKICAgICAgICBmdW5jdGlvbiB1KGYpIHsKICAgICAgICAgIHJldHVybiBmOwogICAgICAgIH0KICAgICAgICB0ID0gUih0KSwgcyA9PT0gLTEgJiYgKHMgPSA0Mjk0OTY3Mjk1KTsKICAgICAgICB2YXIgbCA9IFVuKHIpOwogICAgICAgIGlmIChpID09PSAwKSB7CiAgICAgICAgICB2YXIgYyA9IDMyIC0gOCAqIHI7CiAgICAgICAgICB1ID0gZnVuY3Rpb24oZikgewogICAgICAgICAgICByZXR1cm4gZiA8PCBjID4+PiBjOwogICAgICAgICAgfTsKICAgICAgICB9CiAgICAgICAgdmFyIHkgPSB0LmluZGV4T2YoInVuc2lnbmVkIikgIT0gLTE7CiAgICAgICAgQihuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogdSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oZiwgZCkgewogICAgICAgICAgaWYgKHR5cGVvZiBkICE9ICJudW1iZXIiICYmIHR5cGVvZiBkICE9ICJib29sZWFuIikgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgIicgKyBzbihkKSArICciIHRvICcgKyB0aGlzLm5hbWUpOwogICAgICAgICAgaWYgKGQgPCBpIHx8IGQgPiBzKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdQYXNzaW5nIGEgbnVtYmVyICInICsgc24oZCkgKyAnIiBmcm9tIEpTIHNpZGUgdG8gQy9DKysgc2lkZSB0byBhbiBhcmd1bWVudCBvZiB0eXBlICInICsgdCArICciLCB3aGljaCBpcyBvdXRzaWRlIHRoZSB2YWxpZCByYW5nZSBbJyArIGkgKyAiLCAiICsgcyArICJdISIpOwogICAgICAgICAgcmV0dXJuIHkgPyBkID4+PiAwIDogZCB8IDA7CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBtZSh0LCBsLCBpICE9PSAwKSwga2E6IG51bGwgfSk7CiAgICAgIH0sCiAgICAgIGQ6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBmdW5jdGlvbiBpKHUpIHsKICAgICAgICAgIHUgPj49IDI7CiAgICAgICAgICB2YXIgbCA9IEQ7CiAgICAgICAgICByZXR1cm4gbmV3IHMobm4sIGxbdSArIDFdLCBsW3VdKTsKICAgICAgICB9CiAgICAgICAgdmFyIHMgPSBbSW50OEFycmF5LCBVaW50OEFycmF5LCBJbnQxNkFycmF5LCBVaW50MTZBcnJheSwgSW50MzJBcnJheSwgVWludDMyQXJyYXksIEZsb2F0MzJBcnJheSwgRmxvYXQ2NEFycmF5XVt0XTsKICAgICAgICByID0gUihyKSwgQihuLCB7IG5hbWU6IHIsIGZyb21XaXJlVHlwZTogaSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBpIH0sIHsgRWE6ICEwIH0pOwogICAgICB9LAogICAgICBuOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdCA9IFIodCk7CiAgICAgICAgdmFyIHIgPSB0ID09PSAic3RkOjpzdHJpbmciOwogICAgICAgIEIobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICB2YXIgcyA9IERbaSA+PiAyXTsKICAgICAgICAgICAgaWYgKHIpIGZvciAodmFyIHUgPSBpICsgNCwgbCA9IDA7IGwgPD0gczsgKytsKSB7CiAgICAgICAgICAgICAgdmFyIGMgPSBpICsgNCArIGw7CiAgICAgICAgICAgICAgaWYgKGwgPT0gcyB8fCB4W2NdID09IDApIHsKICAgICAgICAgICAgICAgIGlmICh1KSB7CiAgICAgICAgICAgICAgICAgIHZhciB5ID0gdSwgZiA9IHgsIGQgPSB5ICsgKGMgLSB1KTsKICAgICAgICAgICAgICAgICAgZm9yICh1ID0geTsgZlt1XSAmJiAhKHUgPj0gZCk7ICkgKyt1OwogICAgICAgICAgICAgICAgICBpZiAoMTYgPCB1IC0geSAmJiBmLnN1YmFycmF5ICYmIGl0KSB5ID0gaXQuZGVjb2RlKGYuc3ViYXJyYXkoeSwgdSkpOwogICAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICBmb3IgKGQgPSAiIjsgeSA8IHU7ICkgewogICAgICAgICAgICAgICAgICAgICAgdmFyIG0gPSBmW3krK107CiAgICAgICAgICAgICAgICAgICAgICBpZiAobSAmIDEyOCkgewogICAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IGZbeSsrXSAmIDYzOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAoKG0gJiAyMjQpID09IDE5MikgZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChtICYgMzEpIDw8IDYgfCB3KTsKICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFAgPSBmW3krK10gJiA2MzsKICAgICAgICAgICAgICAgICAgICAgICAgICBtID0gKG0gJiAyNDApID09IDIyNCA/IChtICYgMTUpIDw8IDEyIHwgdyA8PCA2IHwgUCA6IChtICYgNykgPDwgMTggfCB3IDw8IDEyIHwgUCA8PCA2IHwgZlt5KytdICYgNjMsIDY1NTM2ID4gbSA/IGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShtKSA6IChtIC09IDY1NTM2LCBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTYgfCBtID4+IDEwLCA1NjMyMCB8IG0gJiAxMDIzKSk7CiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUobSk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIHkgPSBkOwogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9IGVsc2UgeSA9ICIiOwogICAgICAgICAgICAgICAgaWYgKHAgPT09IHZvaWQgMCkgdmFyIHAgPSB5OwogICAgICAgICAgICAgICAgZWxzZSBwICs9ICJcMCIsIHAgKz0geTsKICAgICAgICAgICAgICAgIHUgPSBjICsgMTsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgZm9yIChwID0gQXJyYXkocyksIGwgPSAwOyBsIDwgczsgKytsKSBwW2xdID0gU3RyaW5nLmZyb21DaGFyQ29kZSh4W2kgKyA0ICsgbF0pOwogICAgICAgICAgICAgIHAgPSBwLmpvaW4oIiIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiBWKGkpLCBwOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIHMpIHsKICAgICAgICAgICAgcyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyICYmIChzID0gbmV3IFVpbnQ4QXJyYXkocykpOwogICAgICAgICAgICB2YXIgdSA9IHR5cGVvZiBzID09ICJzdHJpbmciOwogICAgICAgICAgICB1IHx8IHMgaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IHMgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSB8fCBzIGluc3RhbmNlb2YgSW50OEFycmF5IHx8IHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gc3RkOjpzdHJpbmciKTsKICAgICAgICAgICAgdmFyIGwgPSAociAmJiB1ID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IDAsIGQgPSAwOyBkIDwgcy5sZW5ndGg7ICsrZCkgewogICAgICAgICAgICAgICAgdmFyIG0gPSBzLmNoYXJDb2RlQXQoZCk7CiAgICAgICAgICAgICAgICA1NTI5NiA8PSBtICYmIDU3MzQzID49IG0gJiYgKG0gPSA2NTUzNiArICgobSAmIDEwMjMpIDw8IDEwKSB8IHMuY2hhckNvZGVBdCgrK2QpICYgMTAyMyksIDEyNyA+PSBtID8gKytmIDogZiA9IDIwNDcgPj0gbSA/IGYgKyAyIDogNjU1MzUgPj0gbSA/IGYgKyAzIDogZiArIDQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHJldHVybiBmOwogICAgICAgICAgICB9IDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgcmV0dXJuIHMubGVuZ3RoOwogICAgICAgICAgICB9KSgpLCBjID0gU24oNCArIGwgKyAxKTsKICAgICAgICAgICAgaWYgKERbYyA+PiAyXSA9IGwsIHIgJiYgdSkgJHQocywgYyArIDQsIGwgKyAxKTsKICAgICAgICAgICAgZWxzZSBpZiAodSkgZm9yICh1ID0gMDsgdSA8IGw7ICsrdSkgewogICAgICAgICAgICAgIHZhciB5ID0gcy5jaGFyQ29kZUF0KHUpOwogICAgICAgICAgICAgIDI1NSA8IHkgJiYgKFYoYyksIHYoIlN0cmluZyBoYXMgVVRGLTE2IGNvZGUgdW5pdHMgdGhhdCBkbyBub3QgZml0IGluIDggYml0cyIpKSwgeFtjICsgNCArIHVdID0geTsKICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIGZvciAodSA9IDA7IHUgPCBsOyArK3UpIHhbYyArIDQgKyB1XSA9IHNbdV07CiAgICAgICAgICAgIHJldHVybiBpICE9PSBudWxsICYmIGkucHVzaChWLCBjKSwgYzsKICAgICAgICAgIH0sCiAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBFbiwKICAgICAgICAgIGthOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIFYoaSk7CiAgICAgICAgICB9CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGo6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBpZiAociA9IFIociksIHQgPT09IDIpCiAgICAgICAgICB2YXIgaSA9IFh0LCBzID0gSnQsIHUgPSBLdCwgbCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICByZXR1cm4gZ247CiAgICAgICAgICB9LCBjID0gMTsKICAgICAgICBlbHNlIHQgPT09IDQgJiYgKGkgPSBRdCwgcyA9IHF0LCB1ID0gbmUsIGwgPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiBEOwogICAgICAgIH0sIGMgPSAyKTsKICAgICAgICBCKG4sIHsgbmFtZTogciwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICBmb3IgKHZhciBmID0gRFt5ID4+IDJdLCBkID0gbCgpLCBtLCB3ID0geSArIDQsIFAgPSAwOyBQIDw9IGY7ICsrUCkgewogICAgICAgICAgICB2YXIgcCA9IHkgKyA0ICsgUCAqIHQ7CiAgICAgICAgICAgIChQID09IGYgfHwgZFtwID4+IGNdID09IDApICYmICh3ID0gaSh3LCBwIC0gdyksIG0gPT09IHZvaWQgMCA/IG0gPSB3IDogKG0gKz0gIlwwIiwgbSArPSB3KSwgdyA9IHAgKyB0KTsKICAgICAgICAgIH0KICAgICAgICAgIHJldHVybiBWKHkpLCBtOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHksIGYpIHsKICAgICAgICAgIHR5cGVvZiBmICE9ICJzdHJpbmciICYmIHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gQysrIHN0cmluZyB0eXBlICIgKyByKTsKICAgICAgICAgIHZhciBkID0gdShmKSwgbSA9IFNuKDQgKyBkICsgdCk7CiAgICAgICAgICByZXR1cm4gRFttID4+IDJdID0gZCA+PiBjLCBzKGYsIG0gKyA0LCBkICsgdCksIHkgIT09IG51bGwgJiYgeS5wdXNoKFYsIG0pLCBtOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogRW4sIGthOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICBWKHkpOwogICAgICAgIH0gfSk7CiAgICAgIH0sCiAgICAgIHg6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUih0KSwgQihuLCB7IFFhOiAhMCwgbmFtZTogdCwgYXJnUGFja0FkdmFuY2U6IDAsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSB9KTsKICAgICAgfSwKICAgICAgazogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIG4gPSBYbihuKSwgdCA9IFN0KHQsICJlbXZhbDo6YXMiKTsKICAgICAgICB2YXIgaSA9IFtdLCBzID0gb24oaSk7CiAgICAgICAgcmV0dXJuIGtbciA+PiAyXSA9IHMsIHQudG9XaXJlVHlwZShpLCBuKTsKICAgICAgfSwKICAgICAgaTogJG4sCiAgICAgIGw6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICByZXR1cm4gbiA9IFhuKG4pLCB0ID0gWG4odCksIG9uKG5bdF0pOwogICAgICB9LAogICAgICBwOiBmdW5jdGlvbihuKSB7CiAgICAgICAgdmFyIHQgPSB5ZVtuXTsKICAgICAgICByZXR1cm4gb24odCA9PT0gdm9pZCAwID8gUihuKSA6IHQpOwogICAgICB9LAogICAgICBvOiBmdW5jdGlvbihuKSB7CiAgICAgICAgT24oRltuXS52YWx1ZSksICRuKG4pOwogICAgICB9LAogICAgICB5OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgcmV0dXJuIG4gPSBTdChuLCAiX2VtdmFsX3Rha2VfdmFsdWUiKSwgbiA9IG4ucmVhZFZhbHVlRnJvbVBvaW50ZXIodCksIG9uKG4pOwogICAgICB9LAogICAgICBmOiBmdW5jdGlvbigpIHsKICAgICAgICBmbigpOwogICAgICB9LAogICAgICBxOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgeC5jb3B5V2l0aGluKG4sIHQsIHQgKyByKTsKICAgICAgfSwKICAgICAgcjogZnVuY3Rpb24obikgewogICAgICAgIG4gPj4+PSAwOwogICAgICAgIHZhciB0ID0geC5sZW5ndGg7CiAgICAgICAgaWYgKDIxNDc0ODM2NDggPCBuKSByZXR1cm4gITE7CiAgICAgICAgZm9yICh2YXIgciA9IDE7IDQgPj0gcjsgciAqPSAyKSB7CiAgICAgICAgICB2YXIgaSA9IHQgKiAoMSArIDAuMiAvIHIpOwogICAgICAgICAgaSA9IE1hdGgubWluKGksIG4gKyAxMDA2NjMyOTYpLCBpID0gTWF0aC5tYXgoMTY3NzcyMTYsIG4sIGkpLCAwIDwgaSAlIDY1NTM2ICYmIChpICs9IDY1NTM2IC0gaSAlIDY1NTM2KTsKICAgICAgICAgIG46IHsKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICBVLmdyb3coTWF0aC5taW4oMjE0NzQ4MzY0OCwgaSkgLSBubi5ieXRlTGVuZ3RoICsgNjU1MzUgPj4+IDE2KSwgdXQoVS5idWZmZXIpOwogICAgICAgICAgICAgIHZhciBzID0gMTsKICAgICAgICAgICAgICBicmVhayBuOwogICAgICAgICAgICB9IGNhdGNoIHsKICAgICAgICAgICAgfQogICAgICAgICAgICBzID0gdm9pZCAwOwogICAgICAgICAgfQogICAgICAgICAgaWYgKHMpIHJldHVybiAhMDsKICAgICAgICB9CiAgICAgICAgcmV0dXJuICExOwogICAgICB9LAogICAgICBzOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSAwOwogICAgICAgIHJldHVybiBXdCgpLmZvckVhY2goZnVuY3Rpb24oaSwgcykgewogICAgICAgICAgdmFyIHUgPSB0ICsgcjsKICAgICAgICAgIGZvciAocyA9IGtbbiArIDQgKiBzID4+IDJdID0gdSwgdSA9IDA7IHUgPCBpLmxlbmd0aDsgKyt1KSAkW3MrKyA+PiAwXSA9IGkuY2hhckNvZGVBdCh1KTsKICAgICAgICAgICRbcyA+PiAwXSA9IDAsIHIgKz0gaS5sZW5ndGggKyAxOwogICAgICAgIH0pLCAwOwogICAgICB9LAogICAgICB0OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdmFyIHIgPSBXdCgpOwogICAgICAgIGtbbiA+PiAyXSA9IHIubGVuZ3RoOwogICAgICAgIHZhciBpID0gMDsKICAgICAgICByZXR1cm4gci5mb3JFYWNoKGZ1bmN0aW9uKHMpIHsKICAgICAgICAgIGkgKz0gcy5sZW5ndGggKyAxOwogICAgICAgIH0pLCBrW3QgPj4gMl0gPSBpLCAwOwogICAgICB9LAogICAgICBhOiBVCiAgICB9OwogICAgKGZ1bmN0aW9uKCkgewogICAgICBmdW5jdGlvbiBuKHUpIHsKICAgICAgICB1ID0gdS5leHBvcnRzLCB1ID0gUnQodSksIGUuYXNtID0gdSwgWC0tLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKFgpLCBYID09IDAgJiYgbG4gJiYgKHUgPSBsbiwgbG4gPSBudWxsLCB1KCkpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIHQodSkgewogICAgICAgIG4odS5pbnN0YW5jZSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gcih1KSB7CiAgICAgICAgcmV0dXJuIHJlKCkudGhlbihmdW5jdGlvbihsKSB7CiAgICAgICAgICByZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUobCwgaSk7CiAgICAgICAgfSkudGhlbih1LCBmdW5jdGlvbihsKSB7CiAgICAgICAgICBFKCJmYWlsZWQgdG8gYXN5bmNocm9ub3VzbHkgcHJlcGFyZSB3YXNtOiAiICsgbCksIGZuKGwpOwogICAgICAgIH0pOwogICAgICB9CiAgICAgIHZhciBpID0geyBhOiBwZSB9OwogICAgICBpZiAoWCsrLCBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMgJiYgZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKFgpLCBlLmluc3RhbnRpYXRlV2FzbSkgdHJ5IHsKICAgICAgICB2YXIgcyA9IGUuaW5zdGFudGlhdGVXYXNtKGksIG4pOwogICAgICAgIHJldHVybiBzID0gUnQocyk7CiAgICAgIH0gY2F0Y2ggKHUpIHsKICAgICAgICByZXR1cm4gRSgiTW9kdWxlLmluc3RhbnRpYXRlV2FzbSBjYWxsYmFjayBmYWlsZWQgd2l0aCBlcnJvcjogIiArIHUpLCAhMTsKICAgICAgfQogICAgICByZXR1cm4gZnVuY3Rpb24oKSB7CiAgICAgICAgaWYgKE0gfHwgdHlwZW9mIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nICE9ICJmdW5jdGlvbiIgfHwgaHQoKSB8fCBObigiZmlsZTovLyIpIHx8IHR5cGVvZiBmZXRjaCAhPSAiZnVuY3Rpb24iKSByZXR1cm4gcih0KTsKICAgICAgICBmZXRjaChKLCB7IGNyZWRlbnRpYWxzOiAic2FtZS1vcmlnaW4iIH0pLnRoZW4oZnVuY3Rpb24odSkgewogICAgICAgICAgcmV0dXJuIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKHUsIGkpLnRoZW4odCwgZnVuY3Rpb24obCkgewogICAgICAgICAgICByZXR1cm4gRSgid2FzbSBzdHJlYW1pbmcgY29tcGlsZSBmYWlsZWQ6ICIgKyBsKSwgRSgiZmFsbGluZyBiYWNrIHRvIEFycmF5QnVmZmVyIGluc3RhbnRpYXRpb24iKSwgcih0KTsKICAgICAgICAgIH0pOwogICAgICAgIH0pOwogICAgICB9KCksIHt9OwogICAgfSkoKTsKICAgIHZhciB4dCA9IGUuX19fd2FzbV9jYWxsX2N0b3JzID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoeHQgPSBlLl9fX3dhc21fY2FsbF9jdG9ycyA9IGUuYXNtLkIpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBTbiA9IGUuX21hbGxvYyA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKFNuID0gZS5fbWFsbG9jID0gZS5hc20uQykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIFYgPSBlLl9mcmVlID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoViA9IGUuX2ZyZWUgPSBlLmFzbS5EKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgRnQgPSBlLl9fX2dldFR5cGVOYW1lID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoRnQgPSBlLl9fX2dldFR5cGVOYW1lID0gZS5hc20uRSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH07CiAgICBlLl9fX2VtYmluZF9yZWdpc3Rlcl9uYXRpdmVfYW5kX2J1aWx0aW5fdHlwZXMgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9fX2VtYmluZF9yZWdpc3Rlcl9uYXRpdmVfYW5kX2J1aWx0aW5fdHlwZXMgPSBlLmFzbS5GKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpID0gZS5hc20uRykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aSA9IGUuYXNtLkgpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9pID0gZS5hc20uSSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpID0gZS5hc20uSikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWkgPSBlLmFzbS5LKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2ZpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9maWkgPSBlLmFzbS5MKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWYgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpZiA9IGUuYXNtLk0pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWkgPSBlLmFzbS5OKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaSA9IGUuYXNtLk8pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpaSA9IGUuYXNtLlApLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaSA9IGUuYXNtLlEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWlpaWkgPSBlLmFzbS5SKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpID0gZS5hc20uUykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlpZGkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaWRpID0gZS5hc20uVCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlkaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlkaSA9IGUuYXNtLlUpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaWkgPSBlLmFzbS5WKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpaSA9IGUuYXNtLlcpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaSA9IGUuYXNtLlgpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWlpID0gZS5hc20uWSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaSA9IGUuYXNtLlopLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpID0gZS5hc20uXykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0YXJ0X3Vud2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0YXJ0X3Vud2luZCA9IGUuYXNtLiQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdG9wX3Vud2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0b3BfdW53aW5kID0gZS5hc20uYWEpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLl9hc3luY2lmeV9zdGFydF9yZXdpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdGFydF9yZXdpbmQgPSBlLmFzbS5iYSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0b3BfcmV3aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RvcF9yZXdpbmQgPSBlLmFzbS5jYSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH07CiAgICB2YXIgTW47CiAgICBsbiA9IGZ1bmN0aW9uIG4oKSB7CiAgICAgIE1uIHx8IEtuKCksIE1uIHx8IChsbiA9IG4pOwogICAgfTsKICAgIGZ1bmN0aW9uIEtuKCkgewogICAgICBmdW5jdGlvbiBuKCkgewogICAgICAgIGlmICghTW4gJiYgKE1uID0gITAsIGUuY2FsbGVkUnVuID0gITAsICFMbikpIHsKICAgICAgICAgIGlmICh3bihmdCksIHduKHRlKSwgaChlKSwgZS5vblJ1bnRpbWVJbml0aWFsaXplZCAmJiBlLm9uUnVudGltZUluaXRpYWxpemVkKCksIGUucG9zdFJ1bikgZm9yICh0eXBlb2YgZS5wb3N0UnVuID09ICJmdW5jdGlvbiIgJiYgKGUucG9zdFJ1biA9IFtlLnBvc3RSdW5dKTsgZS5wb3N0UnVuLmxlbmd0aDsgKSB7CiAgICAgICAgICAgIHZhciB0ID0gZS5wb3N0UnVuLnNoaWZ0KCk7CiAgICAgICAgICAgIGR0LnVuc2hpZnQodCk7CiAgICAgICAgICB9CiAgICAgICAgICB3bihkdCk7CiAgICAgICAgfQogICAgICB9CiAgICAgIGlmICghKDAgPCBYKSkgewogICAgICAgIGlmIChlLnByZVJ1bikgZm9yICh0eXBlb2YgZS5wcmVSdW4gPT0gImZ1bmN0aW9uIiAmJiAoZS5wcmVSdW4gPSBbZS5wcmVSdW5dKTsgZS5wcmVSdW4ubGVuZ3RoOyApIGVlKCk7CiAgICAgICAgd24obHQpLCAwIDwgWCB8fCAoZS5zZXRTdGF0dXMgPyAoZS5zZXRTdGF0dXMoIlJ1bm5pbmcuLi4iKSwgc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIGUuc2V0U3RhdHVzKCIiKTsKICAgICAgICAgIH0sIDEpLCBuKCk7CiAgICAgICAgfSwgMSkpIDogbigpKTsKICAgICAgfQogICAgfQogICAgaWYgKGUucnVuID0gS24sIGUucHJlSW5pdCkgZm9yICh0eXBlb2YgZS5wcmVJbml0ID09ICJmdW5jdGlvbiIgJiYgKGUucHJlSW5pdCA9IFtlLnByZUluaXRdKTsgMCA8IGUucHJlSW5pdC5sZW5ndGg7ICkgZS5wcmVJbml0LnBvcCgpKCk7CiAgICByZXR1cm4gS24oKSwgby5yZWFkeTsKICB9Owp9KCk7CmNsYXNzIGogZXh0ZW5kcyBFcnJvciB7CiAgY29uc3RydWN0b3IoZSwgaCkgewogICAgc3VwZXIoZSk7CiAgICBRbih0aGlzLCAiY2F1c2UiKTsKICAgIHRoaXMubmFtZSA9ICJBdXRvQ2FwdHVyZUVycm9yIiwgdGhpcy5jYXVzZSA9IGg7CiAgfQogIC8vIENoYW5nZSB0aGlzIHRvIERlY29yYXRvciB3aGVuIHRoZXkgd2lsbCBiZSBpbiBzdGFibGUgcmVsZWFzZQogIHN0YXRpYyBsb2dFcnJvcihlKSB7CiAgfQogIHN0YXRpYyBmcm9tQ2FtZXJhRXJyb3IoZSkgewogICAgaWYgKHRoaXMubG9nRXJyb3IoZSksIGUgaW5zdGFuY2VvZiBqKQogICAgICByZXR1cm4gZTsKICAgIGxldCBoOwogICAgc3dpdGNoIChlLm5hbWUpIHsKICAgICAgY2FzZSAiT3ZlcmNvbnN0cmFpbmVkRXJyb3IiOgogICAgICAgIGggPSAiTWluaW11bSBxdWFsaXR5IHJlcXVpcmVtZW50cyBhcmUgbm90IG1ldCBieSB5b3VyIGNhbWVyYSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdFJlYWRhYmxlRXJyb3IiOgogICAgICBjYXNlICJBYm9ydEVycm9yIjoKICAgICAgICBoID0gIlRoZSB3ZWJjYW0gaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciBhcHBsaWNhdGlvbiI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdEFsbG93ZWRFcnJvciI6CiAgICAgICAgaCA9ICJUbyB1c2UgeW91ciBjYW1lcmEsIHlvdSBtdXN0IGFsbG93IHBlcm1pc3Npb25zIjsKICAgICAgICBicmVhazsKICAgICAgY2FzZSAiTm90Rm91bmRFcnJvciI6CiAgICAgICAgaCA9ICJUaGVyZSBpcyBubyBjYW1lcmEgYXZhaWxhYmxlIHRvIHlvdSI7CiAgICAgICAgYnJlYWs7CiAgICAgIGRlZmF1bHQ6CiAgICAgICAgaCA9ICJBbiB1bmtub3duIGNhbWVyYSBlcnJvciBoYXMgb2NjdXJyZWQiOwogICAgICAgIGJyZWFrOwogICAgfQogICAgcmV0dXJuIG5ldyBqKGgsIGUpOwogIH0KICBzdGF0aWMgZnJvbUVycm9yKGUpIHsKICAgIGlmICh0aGlzLmxvZ0Vycm9yKGUpLCBlIGluc3RhbmNlb2YgaikKICAgICAgcmV0dXJuIGU7CiAgICBjb25zdCBoID0gIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkIjsKICAgIHJldHVybiBuZXcgaihoKTsKICB9Cn0KY29uc3QgX2UgPSB7CiAgUkdCOiAiUkdCIiwKICBSR0JBOiAiUkdCQSIKfTsKdmFyIFosIHEsIGNuOwpjbGFzcyBDZSB7CiAgY29uc3RydWN0b3IobywgZSkgewogICAgV24odGhpcywgWik7CiAgICBXbih0aGlzLCBxKTsKICAgIFduKHRoaXMsIGNuKTsKICAgIGtuKHRoaXMsIFosIG8pLCBrbih0aGlzLCBxLCB0aGlzLmFsbG9jYXRlKGUubGVuZ3RoICogZS5CWVRFU19QRVJfRUxFTUVOVCkpLCBrbih0aGlzLCBjbiwgdGhpcy5hbGxvY2F0ZShlLmxlbmd0aCAqIGUuQllURVNfUEVSX0VMRU1FTlQpKTsKICB9CiAgZ2V0IHJnYmFJbWFnZVBvaW50ZXIoKSB7CiAgICByZXR1cm4gSCh0aGlzLCBxKTsKICB9CiAgZ2V0IGJncjBJbWFnZVBvaW50ZXIoKSB7CiAgICByZXR1cm4gSCh0aGlzLCBjbik7CiAgfQogIGFsbG9jYXRlKG8pIHsKICAgIHJldHVybiBIKHRoaXMsIFopLl9tYWxsb2Mobyk7CiAgfQogIGZyZWUoKSB7CiAgICBIKHRoaXMsIFopLl9mcmVlKEgodGhpcywgcSkpLCBIKHRoaXMsIFopLl9mcmVlKEgodGhpcywgY24pKTsKICB9CiAgd3JpdGVEYXRhVG9NZW1vcnkobykgewogICAgSCh0aGlzLCBaKS5IRUFQVTguc2V0KG8sIEgodGhpcywgcSkpOwogIH0KfQpaID0gbmV3IFdlYWtNYXAoKSwgcSA9IG5ldyBXZWFrTWFwKCksIGNuID0gbmV3IFdlYWtNYXAoKTsKY2xhc3MgVGUgewogIGNvbnN0cnVjdG9yKCkgewogICAgUW4odGhpcywgInNhbVdhc21Nb2R1bGUiKTsKICB9CiAgZ2V0T3ZlcnJpZGRlbk1vZHVsZXMobywgZSkgewogICAgcmV0dXJuIHsKICAgICAgbG9jYXRlRmlsZTogKGgpID0+IG5ldyBVUkwoZSB8fCBoLCBvKS5ocmVmCiAgICB9OwogIH0KICBhc3luYyBoYW5kbGVNaXNzaW5nT3JJbnZhbGlkU2FtTW9kdWxlKG8sIGUpIHsKICAgIHRyeSB7CiAgICAgIGNvbnN0IGggPSBhd2FpdCBmZXRjaChvKTsKICAgICAgaWYgKCFoLm9rKQogICAgICAgIHRocm93IG5ldyBqKAogICAgICAgICAgYFRoZSBwYXRoIHRvICR7ZX0gaXMgaW5jb3JyZWN0IG9yIHRoZSBtb2R1bGUgaXMgbWlzc2luZy4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7b31gCiAgICAgICAgKTsKICAgICAgY29uc3QgZyA9IGF3YWl0IGguYXJyYXlCdWZmZXIoKTsKICAgICAgaWYgKCFXZWJBc3NlbWJseS52YWxpZGF0ZShnKSkKICAgICAgICB0aHJvdyBuZXcgaigKICAgICAgICAgIGBUaGUgcHJvdmlkZWQgJHtlfSBpcyBub3QgYSB2YWxpZCBXQVNNIG1vZHVsZS4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7b31gCiAgICAgICAgKTsKICAgIH0gY2F0Y2ggKGgpIHsKICAgICAgaWYgKGggaW5zdGFuY2VvZiBqKQogICAgICAgIHRocm93IGNvbnNvbGUuZXJyb3IoCiAgICAgICAgICAiWW91IGNhbiBmaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgaG93IHRvIGhvc3Qgd2FzbSBmaWxlcyBoZXJlOiBodHRwczovL2RldmVsb3BlcnMuaW5ub3ZhdHJpY3MuY29tL2RpZ2l0YWwtb25ib2FyZGluZy90ZWNobmljYWwvcmVtb3RlL2RvdC13ZWItZG9jdW1lbnQvbGF0ZXN0L2RvY3VtZW50YXRpb24vI19ob3N0aW5nX3NhbV93YXNtIgogICAgICAgICksIGg7CiAgICB9CiAgfQogIGFzeW5jIGdldFdhc21GaWxlTmFtZSgpIHsKICAgIHJldHVybiBhd2FpdCB3ZSgpID8gSHQuc2ltZCA6IEh0LnNhbTsKICB9CiAgYXN5bmMgaW5pdFNhbU1vZHVsZShvLCBlID0gIi93YXNtIikgewogICAgaWYgKHRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgcmV0dXJuOwogICAgY29uc3QgaCA9IGF3YWl0IHRoaXMuZ2V0V2FzbUZpbGVOYW1lKCksIGcgPSBgJHtlfS8ke2h9YDsKICAgIHRyeSB7CiAgICAgIHRoaXMuc2FtV2FzbU1vZHVsZSA9IGF3YWl0IEFlKHRoaXMuZ2V0T3ZlcnJpZGRlbk1vZHVsZXMobywgZykpOwogICAgfSBjYXRjaCB7CiAgICAgIHRocm93IGF3YWl0IHRoaXMuaGFuZGxlTWlzc2luZ09ySW52YWxpZFNhbU1vZHVsZShnLCBoKSwgbmV3IGooIkNvdWxkIG5vdCBpbml0IGRldGVjdG9yLiIpOwogICAgfQogIH0KICBhc3luYyBnZXRTYW1WZXJzaW9uKCkgewogICAgdmFyIGU7CiAgICBjb25zdCBvID0gYXdhaXQgKChlID0gdGhpcy5zYW1XYXNtTW9kdWxlKSA9PSBudWxsID8gdm9pZCAwIDogZS5nZXRJbmZvU3RyaW5nKCkpOwogICAgcmV0dXJuIG8gPT0gbnVsbCA/IHZvaWQgMCA6IG8udHJpbSgpOwogIH0KICAvKgogICAqIEluIFRTIDUuMi4wIHdhcyBhZGRlZCBzcGVjaWFsIGtleXdvcmQgInVzaW5nIiB3aGljaCBjb3VsZCBiZSBwZXJmZWN0IGZvciB0aGlzIGNhc2UuCiAgICogVW5mb3J0dW5hdGVseSwgdml0ZSBwcmVhY3QgcGx1Z2luIGRvZXMgbm90IHN1cHBvcnQgdGhpcyB2ZXJzaW9uIG9mIFRTIHlldC4KICAgKiBDaGVjayBwb3NzaWJpbGl0eSBvZiB1c2luZyAidXNpbmciIGtleXdvcmQgd2hlbiB2aXRlIHByZWFjdCBwbHVnaW4gdXBkYXRlcwogICAqLwogIHdyaXRlSW1hZ2VUb01lbW9yeShvKSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IGooIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIGNvbnN0IGUgPSBuZXcgQ2UodGhpcy5zYW1XYXNtTW9kdWxlLCBvKTsKICAgIHJldHVybiBlLndyaXRlRGF0YVRvTWVtb3J5KG8pLCBlOwogIH0KICBjb252ZXJ0VG9TYW1Db2xvckltYWdlKG8sIGUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgaigiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgY29uc3QgaCA9IHRoaXMud3JpdGVJbWFnZVRvTWVtb3J5KG8pOwogICAgcmV0dXJuIHRoaXMuc2FtV2FzbU1vZHVsZS5jb252ZXJ0VG9TYW1Db2xvckltYWdlKAogICAgICBlLndpZHRoLAogICAgICBlLmhlaWdodCwKICAgICAgaC5yZ2JhSW1hZ2VQb2ludGVyLAogICAgICBfZS5SR0JBLAogICAgICBoLmJncjBJbWFnZVBvaW50ZXIKICAgICksIGg7CiAgfQp9CmNvbnN0IEVlID0gKGEpID0+IE51bWJlci5wYXJzZUZsb2F0KGEudG9GaXhlZCgzKSksIFBlID0gKGEsIG8pID0+IE1hdGgubWluKGEsIG8pOwovKioKICogQGxpY2Vuc2UKICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQwogKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMAogKi8KY29uc3QgRHQgPSBTeW1ib2woIkNvbWxpbmsucHJveHkiKSwgT2UgPSBTeW1ib2woIkNvbWxpbmsuZW5kcG9pbnQiKSwgYmUgPSBTeW1ib2woIkNvbWxpbmsucmVsZWFzZVByb3h5IiksIHFuID0gU3ltYm9sKCJDb21saW5rLmZpbmFsaXplciIpLCBJbiA9IFN5bWJvbCgiQ29tbGluay50aHJvd24iKSwgQnQgPSAoYSkgPT4gdHlwZW9mIGEgPT0gIm9iamVjdCIgJiYgYSAhPT0gbnVsbCB8fCB0eXBlb2YgYSA9PSAiZnVuY3Rpb24iLCBTZSA9IHsKICBjYW5IYW5kbGU6IChhKSA9PiBCdChhKSAmJiBhW0R0XSwKICBzZXJpYWxpemUoYSkgewogICAgY29uc3QgeyBwb3J0MTogbywgcG9ydDI6IGUgfSA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpOwogICAgcmV0dXJuIGV0KGEsIG8pLCBbZSwgW2VdXTsKICB9LAogIGRlc2VyaWFsaXplKGEpIHsKICAgIHJldHVybiBhLnN0YXJ0KCksIFJlKGEpOwogIH0KfSwgTWUgPSB7CiAgY2FuSGFuZGxlOiAoYSkgPT4gQnQoYSkgJiYgSW4gaW4gYSwKICBzZXJpYWxpemUoeyB2YWx1ZTogYSB9KSB7CiAgICBsZXQgbzsKICAgIHJldHVybiBhIGluc3RhbmNlb2YgRXJyb3IgPyBvID0gewogICAgICBpc0Vycm9yOiAhMCwKICAgICAgdmFsdWU6IHsKICAgICAgICBtZXNzYWdlOiBhLm1lc3NhZ2UsCiAgICAgICAgbmFtZTogYS5uYW1lLAogICAgICAgIHN0YWNrOiBhLnN0YWNrCiAgICAgIH0KICAgIH0gOiBvID0geyBpc0Vycm9yOiAhMSwgdmFsdWU6IGEgfSwgW28sIFtdXTsKICB9LAogIGRlc2VyaWFsaXplKGEpIHsKICAgIHRocm93IGEuaXNFcnJvciA/IE9iamVjdC5hc3NpZ24obmV3IEVycm9yKGEudmFsdWUubWVzc2FnZSksIGEudmFsdWUpIDogYS52YWx1ZTsKICB9Cn0sIHp0ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoWwogIFsicHJveHkiLCBTZV0sCiAgWyJ0aHJvdyIsIE1lXQpdKTsKZnVuY3Rpb24gV2UoYSwgbykgewogIGZvciAoY29uc3QgZSBvZiBhKQogICAgaWYgKG8gPT09IGUgfHwgZSA9PT0gIioiIHx8IGUgaW5zdGFuY2VvZiBSZWdFeHAgJiYgZS50ZXN0KG8pKQogICAgICByZXR1cm4gITA7CiAgcmV0dXJuICExOwp9CmZ1bmN0aW9uIGV0KGEsIG8gPSBnbG9iYWxUaGlzLCBlID0gWyIqIl0pIHsKICBvLmFkZEV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBmdW5jdGlvbiBoKGcpIHsKICAgIGlmICghZyB8fCAhZy5kYXRhKQogICAgICByZXR1cm47CiAgICBpZiAoIVdlKGUsIGcub3JpZ2luKSkgewogICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgb3JpZ2luICcke2cub3JpZ2lufScgZm9yIGNvbWxpbmsgcHJveHlgKTsKICAgICAgcmV0dXJuOwogICAgfQogICAgY29uc3QgeyBpZDogQywgdHlwZTogQSwgcGF0aDogTyB9ID0gT2JqZWN0LmFzc2lnbih7IHBhdGg6IFtdIH0sIGcuZGF0YSksIGIgPSAoZy5kYXRhLmFyZ3VtZW50TGlzdCB8fCBbXSkubWFwKFEpOwogICAgbGV0IFQ7CiAgICB0cnkgewogICAgICBjb25zdCBfID0gTy5zbGljZSgwLCAtMSkucmVkdWNlKChFLCBNKSA9PiBFW01dLCBhKSwgUyA9IE8ucmVkdWNlKChFLCBNKSA9PiBFW01dLCBhKTsKICAgICAgc3dpdGNoIChBKSB7CiAgICAgICAgY2FzZSAiR0VUIjoKICAgICAgICAgIFQgPSBTOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiU0VUIjoKICAgICAgICAgIF9bTy5zbGljZSgtMSlbMF1dID0gUShnLmRhdGEudmFsdWUpLCBUID0gITA7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJBUFBMWSI6CiAgICAgICAgICBUID0gUy5hcHBseShfLCBiKTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIkNPTlNUUlVDVCI6CiAgICAgICAgICB7CiAgICAgICAgICAgIGNvbnN0IEUgPSBuZXcgUyguLi5iKTsKICAgICAgICAgICAgVCA9IExlKEUpOwogICAgICAgICAgfQogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiRU5EUE9JTlQiOgogICAgICAgICAgewogICAgICAgICAgICBjb25zdCB7IHBvcnQxOiBFLCBwb3J0MjogTSB9ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7CiAgICAgICAgICAgIGV0KGEsIE0pLCBUID0gamUoRSwgW0VdKTsKICAgICAgICAgIH0KICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIlJFTEVBU0UiOgogICAgICAgICAgVCA9IHZvaWQgMDsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICByZXR1cm47CiAgICAgIH0KICAgIH0gY2F0Y2ggKF8pIHsKICAgICAgVCA9IHsgdmFsdWU6IF8sIFtJbl06IDAgfTsKICAgIH0KICAgIFByb21pc2UucmVzb2x2ZShUKS5jYXRjaCgoXykgPT4gKHsgdmFsdWU6IF8sIFtJbl06IDAgfSkpLnRoZW4oKF8pID0+IHsKICAgICAgY29uc3QgW1MsIEVdID0gam4oXyk7CiAgICAgIG8ucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBTKSwgeyBpZDogQyB9KSwgRSksIEEgPT09ICJSRUxFQVNFIiAmJiAoby5yZW1vdmVFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgaCksIFZ0KG8pLCBxbiBpbiBhICYmIHR5cGVvZiBhW3FuXSA9PSAiZnVuY3Rpb24iICYmIGFbcW5dKCkpOwogICAgfSkuY2F0Y2goKF8pID0+IHsKICAgICAgY29uc3QgW1MsIEVdID0gam4oewogICAgICAgIHZhbHVlOiBuZXcgVHlwZUVycm9yKCJVbnNlcmlhbGl6YWJsZSByZXR1cm4gdmFsdWUiKSwKICAgICAgICBbSW5dOiAwCiAgICAgIH0pOwogICAgICBvLnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgUyksIHsgaWQ6IEMgfSksIEUpOwogICAgfSk7CiAgfSksIG8uc3RhcnQgJiYgby5zdGFydCgpOwp9CmZ1bmN0aW9uIGtlKGEpIHsKICByZXR1cm4gYS5jb25zdHJ1Y3Rvci5uYW1lID09PSAiTWVzc2FnZVBvcnQiOwp9CmZ1bmN0aW9uIFZ0KGEpIHsKICBrZShhKSAmJiBhLmNsb3NlKCk7Cn0KZnVuY3Rpb24gUmUoYSwgbykgewogIHJldHVybiB0dChhLCBbXSwgbyk7Cn0KZnVuY3Rpb24gUm4oYSkgewogIGlmIChhKQogICAgdGhyb3cgbmV3IEVycm9yKCJQcm94eSBoYXMgYmVlbiByZWxlYXNlZCBhbmQgaXMgbm90IHVzZWFibGUiKTsKfQpmdW5jdGlvbiBHdChhKSB7CiAgcmV0dXJuIHVuKGEsIHsKICAgIHR5cGU6ICJSRUxFQVNFIgogIH0pLnRoZW4oKCkgPT4gewogICAgVnQoYSk7CiAgfSk7Cn0KY29uc3QgeG4gPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSwgRm4gPSAiRmluYWxpemF0aW9uUmVnaXN0cnkiIGluIGdsb2JhbFRoaXMgJiYgbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KChhKSA9PiB7CiAgY29uc3QgbyA9ICh4bi5nZXQoYSkgfHwgMCkgLSAxOwogIHhuLnNldChhLCBvKSwgbyA9PT0gMCAmJiBHdChhKTsKfSk7CmZ1bmN0aW9uIEllKGEsIG8pIHsKICBjb25zdCBlID0gKHhuLmdldChvKSB8fCAwKSArIDE7CiAgeG4uc2V0KG8sIGUpLCBGbiAmJiBGbi5yZWdpc3RlcihhLCBvLCBhKTsKfQpmdW5jdGlvbiB4ZShhKSB7CiAgRm4gJiYgRm4udW5yZWdpc3RlcihhKTsKfQpmdW5jdGlvbiB0dChhLCBvID0gW10sIGUgPSBmdW5jdGlvbigpIHsKfSkgewogIGxldCBoID0gITE7CiAgY29uc3QgZyA9IG5ldyBQcm94eShlLCB7CiAgICBnZXQoQywgQSkgewogICAgICBpZiAoUm4oaCksIEEgPT09IGJlKQogICAgICAgIHJldHVybiAoKSA9PiB7CiAgICAgICAgICB4ZShnKSwgR3QoYSksIGggPSAhMDsKICAgICAgICB9OwogICAgICBpZiAoQSA9PT0gInRoZW4iKSB7CiAgICAgICAgaWYgKG8ubGVuZ3RoID09PSAwKQogICAgICAgICAgcmV0dXJuIHsgdGhlbjogKCkgPT4gZyB9OwogICAgICAgIGNvbnN0IE8gPSB1bihhLCB7CiAgICAgICAgICB0eXBlOiAiR0VUIiwKICAgICAgICAgIHBhdGg6IG8ubWFwKChiKSA9PiBiLnRvU3RyaW5nKCkpCiAgICAgICAgfSkudGhlbihRKTsKICAgICAgICByZXR1cm4gTy50aGVuLmJpbmQoTyk7CiAgICAgIH0KICAgICAgcmV0dXJuIHR0KGEsIFsuLi5vLCBBXSk7CiAgICB9LAogICAgc2V0KEMsIEEsIE8pIHsKICAgICAgUm4oaCk7CiAgICAgIGNvbnN0IFtiLCBUXSA9IGpuKE8pOwogICAgICByZXR1cm4gdW4oYSwgewogICAgICAgIHR5cGU6ICJTRVQiLAogICAgICAgIHBhdGg6IFsuLi5vLCBBXS5tYXAoKF8pID0+IF8udG9TdHJpbmcoKSksCiAgICAgICAgdmFsdWU6IGIKICAgICAgfSwgVCkudGhlbihRKTsKICAgIH0sCiAgICBhcHBseShDLCBBLCBPKSB7CiAgICAgIFJuKGgpOwogICAgICBjb25zdCBiID0gb1tvLmxlbmd0aCAtIDFdOwogICAgICBpZiAoYiA9PT0gT2UpCiAgICAgICAgcmV0dXJuIHVuKGEsIHsKICAgICAgICAgIHR5cGU6ICJFTkRQT0lOVCIKICAgICAgICB9KS50aGVuKFEpOwogICAgICBpZiAoYiA9PT0gImJpbmQiKQogICAgICAgIHJldHVybiB0dChhLCBvLnNsaWNlKDAsIC0xKSk7CiAgICAgIGNvbnN0IFtULCBfXSA9IFV0KE8pOwogICAgICByZXR1cm4gdW4oYSwgewogICAgICAgIHR5cGU6ICJBUFBMWSIsCiAgICAgICAgcGF0aDogby5tYXAoKFMpID0+IFMudG9TdHJpbmcoKSksCiAgICAgICAgYXJndW1lbnRMaXN0OiBUCiAgICAgIH0sIF8pLnRoZW4oUSk7CiAgICB9LAogICAgY29uc3RydWN0KEMsIEEpIHsKICAgICAgUm4oaCk7CiAgICAgIGNvbnN0IFtPLCBiXSA9IFV0KEEpOwogICAgICByZXR1cm4gdW4oYSwgewogICAgICAgIHR5cGU6ICJDT05TVFJVQ1QiLAogICAgICAgIHBhdGg6IG8ubWFwKChUKSA9PiBULnRvU3RyaW5nKCkpLAogICAgICAgIGFyZ3VtZW50TGlzdDogTwogICAgICB9LCBiKS50aGVuKFEpOwogICAgfQogIH0pOwogIHJldHVybiBJZShnLCBhKSwgZzsKfQpmdW5jdGlvbiBGZShhKSB7CiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGEpOwp9CmZ1bmN0aW9uIFV0KGEpIHsKICBjb25zdCBvID0gYS5tYXAoam4pOwogIHJldHVybiBbby5tYXAoKGUpID0+IGVbMF0pLCBGZShvLm1hcCgoZSkgPT4gZVsxXSkpXTsKfQpjb25zdCBZdCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpOwpmdW5jdGlvbiBqZShhLCBvKSB7CiAgcmV0dXJuIFl0LnNldChhLCBvKSwgYTsKfQpmdW5jdGlvbiBMZShhKSB7CiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYSwgeyBbRHRdOiAhMCB9KTsKfQpmdW5jdGlvbiBqbihhKSB7CiAgZm9yIChjb25zdCBbbywgZV0gb2YgenQpCiAgICBpZiAoZS5jYW5IYW5kbGUoYSkpIHsKICAgICAgY29uc3QgW2gsIGddID0gZS5zZXJpYWxpemUoYSk7CiAgICAgIHJldHVybiBbCiAgICAgICAgewogICAgICAgICAgdHlwZTogIkhBTkRMRVIiLAogICAgICAgICAgbmFtZTogbywKICAgICAgICAgIHZhbHVlOiBoCiAgICAgICAgfSwKICAgICAgICBnCiAgICAgIF07CiAgICB9CiAgcmV0dXJuIFsKICAgIHsKICAgICAgdHlwZTogIlJBVyIsCiAgICAgIHZhbHVlOiBhCiAgICB9LAogICAgWXQuZ2V0KGEpIHx8IFtdCiAgXTsKfQpmdW5jdGlvbiBRKGEpIHsKICBzd2l0Y2ggKGEudHlwZSkgewogICAgY2FzZSAiSEFORExFUiI6CiAgICAgIHJldHVybiB6dC5nZXQoYS5uYW1lKS5kZXNlcmlhbGl6ZShhLnZhbHVlKTsKICAgIGNhc2UgIlJBVyI6CiAgICAgIHJldHVybiBhLnZhbHVlOwogIH0KfQpmdW5jdGlvbiB1bihhLCBvLCBlKSB7CiAgcmV0dXJuIG5ldyBQcm9taXNlKChoKSA9PiB7CiAgICBjb25zdCBnID0gTmUoKTsKICAgIGEuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGZ1bmN0aW9uIEMoQSkgewogICAgICAhQS5kYXRhIHx8ICFBLmRhdGEuaWQgfHwgQS5kYXRhLmlkICE9PSBnIHx8IChhLnJlbW92ZUV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBDKSwgaChBLmRhdGEpKTsKICAgIH0pLCBhLnN0YXJ0ICYmIGEuc3RhcnQoKSwgYS5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKHsgaWQ6IGcgfSwgbyksIGUpOwogIH0pOwp9CmZ1bmN0aW9uIE5lKCkgewogIHJldHVybiBuZXcgQXJyYXkoNCkuZmlsbCgwKS5tYXAoKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpLnRvU3RyaW5nKDE2KSkuam9pbigiLSIpOwp9CmZ1bmN0aW9uIFp0KGEsIG8pIHsKICByZXR1cm4gTWF0aC5zcXJ0KChhLnggLSBvLngpICoqIDIgKyAoYS55IC0gby55KSAqKiAyKTsKfQpmdW5jdGlvbiBIZShhLCBvKSB7CiAgcmV0dXJuIHsKICAgIHg6IChhLnggKyBvLngpIC8gMiwKICAgIHk6IChhLnkgKyBvLnkpIC8gMgogIH07Cn0KZnVuY3Rpb24gVWUoYSwgbykgewogIGlmIChhLmNvbmZpZGVuY2UgPD0gMCB8fCBvLmNvbmZpZGVuY2UgPD0gMCkKICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTsKICBjb25zdCBlID0gWnQoYS5jZW50ZXIsIG8uY2VudGVyKSwgaCA9IEhlKGEuY2VudGVyLCBvLmNlbnRlcik7CiAgcmV0dXJuIHsKICAgIHg6IGgueCwKICAgIHk6IGgueSArIGUgLyA0CiAgICAvLyBjYWxjdWxhdGlvbiBpcyB0YWtlbiBmcm9tIG1vYmlsZSB0ZWFtCiAgfTsKfQpmdW5jdGlvbiBEZShhLCBvLCBlKSB7CiAgaWYgKGEuY29uZmlkZW5jZSA8PSAwIHx8IG8uY29uZmlkZW5jZSA8PSAwKQogICAgcmV0dXJuIDA7CiAgY29uc3QgaCA9IFp0KGEuY2VudGVyLCBvLmNlbnRlciksIGcgPSBQZShlLndpZHRoLCBlLmhlaWdodCk7CiAgcmV0dXJuIEVlKGggLyBnKTsKfQpmdW5jdGlvbiBudChhKSB7CiAgY29uc3QgeyBjZW50ZXJYOiBvLCBjZW50ZXJZOiBlLCBjb25maWRlbmNlOiBoLCBzaXplOiBnLCBzdGF0dXM6IEMgfSA9IGE7CiAgcmV0dXJuIHsKICAgIGNlbnRlcjogewogICAgICB4OiBvLAogICAgICB5OiBlCiAgICB9LAogICAgY29uZmlkZW5jZTogaCAvIDFlMywKICAgIHN0YXR1czogQyAvIDFlMywKICAgIHNpemU6IGcKICB9Owp9CmNsYXNzIEJlIGV4dGVuZHMgVGUgewogIHBhcnNlUmF3RGF0YShvLCBlKSB7CiAgICBjb25zdCB7IGJyaWdodG5lc3M6IGgsIHNoYXJwbmVzczogZyB9ID0gby5wYXJhbXMsIHsgYm90dG9tUmlnaHRYOiBDLCBib3R0b21SaWdodFk6IEEsIGxlZnRFeWU6IE8sIG1vdXRoOiBiLCByaWdodEV5ZTogVCwgdG9wTGVmdFg6IF8sIHRvcExlZnRZOiBTIH0gPSBvLCBFID0gbnQoTyksIE0gPSBudChUKSwgVSA9IG50KGIpOwogICAgcmV0dXJuIHsKICAgICAgY29uZmlkZW5jZTogby5jb25maWRlbmNlIC8gMWUzLAogICAgICB0b3BMZWZ0OiB7CiAgICAgICAgeDogXywKICAgICAgICB5OiBTCiAgICAgIH0sCiAgICAgIGJvdHRvbVJpZ2h0OiB7CiAgICAgICAgeDogQywKICAgICAgICB5OiBBCiAgICAgIH0sCiAgICAgIGZhY2VDZW50ZXI6IFVlKEUsIE0pLAogICAgICBmYWNlU2l6ZTogRGUoRSwgTSwgZSksCiAgICAgIGxlZnRFeWU6IEUsCiAgICAgIHJpZ2h0RXllOiBNLAogICAgICBtb3V0aDogVSwKICAgICAgYnJpZ2h0bmVzczogaCAvIDFlMywKICAgICAgc2hhcnBuZXNzOiBnIC8gMWUzCiAgICB9OwogIH0KICBhc3luYyBkZXRlY3QobywgZSwgaCkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBqKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICBjb25zdCBnID0gdGhpcy5jb252ZXJ0VG9TYW1Db2xvckltYWdlKG8sIGUpLCBDID0gdGhpcy5zYW1XYXNtTW9kdWxlLmRldGVjdEZhY2VQYXJ0c1dpdGhJbWFnZVBhcmFtZXRlcnMoCiAgICAgIGUud2lkdGgsCiAgICAgIGUuaGVpZ2h0LAogICAgICBnLmJncjBJbWFnZVBvaW50ZXIsCiAgICAgIDAsCiAgICAgIDAsCiAgICAgIC8vIHBhcmFtV2lkdGggc2hvdWxkIGJlIDAgKGRlZmF1bHQgdmFsdWUpCiAgICAgIDAKICAgICAgLy8gcGFyYW1IZWlnaHQgc2hvdWxkIGJlIDAgKGRlZmF1bHQgdmFsdWUpCiAgICApOwogICAgcmV0dXJuIGcuZnJlZSgpLCB0aGlzLnBhcnNlUmF3RGF0YShDLCBoKTsKICB9Cn0KZXQoQmUpOwo=", RI = (x) => Uint8Array.from(atob(x), (i) => i.charCodeAt(0)), es = typeof window < "u" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);", RI(rg)], { type: "text/javascript;charset=utf-8" });
function PI(x) {
  let i;
  try {
    if (i = es && (window.URL || window.webkitURL).createObjectURL(es), !i) throw "";
    const t = new Worker(i, {
      type: "module",
      name: x == null ? void 0 : x.name
    });
    return t.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(i);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + rg,
      {
        type: "module",
        name: x == null ? void 0 : x.name
      }
    );
  }
}
class VI extends bI {
  constructor(t, e) {
    super();
    E(this, "className", "FaceImageProcessor");
    E(this, "detector");
    E(this, "validationService");
    this.detector = t, this.validationService = e;
  }
  optimizeImageBeforeDetection(t) {
    const e = Fx(t), n = Jl(t, e);
    return super.optimizeImageBeforeDetection(n);
  }
  async process({ image: t, timestamp: e }) {
    const n = this.optimizeImageBeforeDetection(t), o = {};
    o.height = t.height, o.width = t.width;
    let r = await this.detector.detect(n.data, n.resolution, o);
    r = ql(r, Fx(t));
    const a = {};
    return a.detectedObject = r, a.image = t, a.imageData = n.data, a.timestamp = e, this.processDetectedObject(a);
  }
}
var R0, o0, r0;
class TI {
  constructor(i) {
    ne(this, R0);
    ne(this, o0);
    ne(this, r0);
    $(this, R0, i), $(this, o0, /* @__PURE__ */ new Map());
  }
  validate() {
    L(this, R0).forEach((i) => {
      L(this, o0).set(i.name, i.evaluate());
    }), $(this, r0, void (-8062 + 4031 * 2));
  }
  isValid() {
    return L(this, r0) === void (7176 + 1 * 581 + -7757) && $(this, r0, Array.from(L(this, o0).values()).every((i) => i)), L(this, r0);
  }
  get result() {
    return L(this, o0);
  }
  get validators() {
    return L(this, R0);
  }
}
R0 = new WeakMap(), o0 = new WeakMap(), r0 = new WeakMap();
var vn, a0;
class ze {
  constructor(i, t) {
    ne(this, vn);
    ne(this, a0);
    $(this, vn, i), $(this, a0, t);
  }
  get threshold() {
    return L(this, a0);
  }
  get name() {
    return L(this, vn);
  }
  isValueBelowThreshold(i) {
    return i < L(this, a0);
  }
  isValueAboveThreshold(i) {
    return i > L(this, a0);
  }
}
vn = new WeakMap(), a0 = new WeakMap();
const EI = "isNotDim";
var Sn;
class LI extends ze {
  constructor(t, e) {
    super(EI, t);
    ne(this, Sn);
    $(this, Sn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Sn));
  }
}
Sn = new WeakMap();
const DI = "isNotSmall";
var wn;
class NI extends ze {
  constructor(t, e) {
    super(DI, t);
    ne(this, wn);
    $(this, wn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, wn));
  }
}
wn = new WeakMap();
const FI = "isNotBright";
var Bn;
class YI extends ze {
  constructor(t, e) {
    super(FI, t);
    ne(this, Bn);
    $(this, Bn, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(L(this, Bn));
  }
}
Bn = new WeakMap();
const jI = "isPresent";
var kn;
class MI extends ze {
  constructor(t, e) {
    super(jI, t);
    ne(this, kn);
    $(this, kn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, kn));
  }
}
kn = new WeakMap();
const XI = "isSharp";
var Gn;
class _I extends ze {
  constructor(t, e) {
    super(XI, t);
    ne(this, Gn);
    $(this, Gn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Gn));
  }
}
Gn = new WeakMap();
const JI = "isLeftEyePresent";
var On;
class QI extends ze {
  constructor(t, e) {
    super(JI, t);
    ne(this, On);
    $(this, On, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, On));
  }
}
On = new WeakMap();
const UI = "isMouthPresent";
var Zn;
class zI extends ze {
  constructor(t, e) {
    super(UI, t);
    ne(this, Zn);
    $(this, Zn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Zn));
  }
}
Zn = new WeakMap();
const qI = "isMouthScoreNotTooLow";
var Hn;
class $I extends ze {
  constructor(t, e) {
    super(qI, t);
    ne(this, Hn);
    $(this, Hn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Hn));
  }
}
Hn = new WeakMap();
const e2 = "isMouthScoreNotTooHigh";
var Kn;
class t2 extends ze {
  constructor(t, e) {
    super(e2, t);
    ne(this, Kn);
    $(this, Kn, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(L(this, Kn));
  }
}
Kn = new WeakMap();
const n2 = "isNotLarge";
var Rn;
class x2 extends ze {
  constructor(t, e) {
    super(n2, t);
    ne(this, Rn);
    $(this, Rn, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(L(this, Rn));
  }
}
Rn = new WeakMap();
const i2 = "isNotPitched";
var Pn;
const hr = class hr extends ze {
  constructor(t, e) {
    super(i2, hr.calculatePitchAngleAccelerationThreshold(t));
    ne(this, Pn);
    $(this, Pn, e);
  }
  static calculatePitchAngleAccelerationThreshold(t) {
    return ul * Math.sin(t * (Math.PI / (3 * 2683 + 1549 * 3 + -12516)));
  }
  evaluate() {
    const { z: t } = L(this, Pn) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
};
Pn = new WeakMap();
let To = hr;
const o2 = "isRightEyePresent";
var Vn;
class r2 extends ze {
  constructor(t, e) {
    super(o2, t);
    ne(this, Vn);
    $(this, Vn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(L(this, Vn));
  }
}
Vn = new WeakMap();
const a2 = "isNotOutOfBounds";
var Tn, s0;
class s2 extends ze {
  constructor(t, e, n) {
    super(a2, t);
    ne(this, Tn);
    ne(this, s0);
    $(this, Tn, e), $(this, s0, n);
  }
  evaluate() {
    const t = Bc(L(this, s0), this.threshold, Fx(L(this, s0))), e = kc(L(this, Tn), L(this, s0));
    return zl(e, t);
  }
}
Tn = new WeakMap(), s0 = new WeakMap();
class c2 {
  static getFaceValidationInstance(i, t, e, n) {
    return new TI([new MI(i.faceConfidence, t.confidence), new QI(i.leftEye.confidence, t.leftEye.confidence), new r2(i.rightEye.confidence, t.rightEye.confidence), new NI(i.minFaceSizeRatio, t.faceSize), new x2(i.maxFaceSizeRatio, t.faceSize), new _I(i.sharpnessThreshold, t.sharpness), new LI(i.brightnessLowThreshold, t.brightness), new YI(i.brightnessHighThreshold, t.brightness), new s2(i.outOfBoundsThreshold, t, e), new To(i.devicePitchAngleThreshold, n), new zI(i.mouth.confidence, t.mouth.confidence), new t2(i.mouth.status.max, t.mouth.status), new $I(i.mouth.status.min, t.mouth.status)]);
  }
}
class g2 extends AI {
  constructor() {
    super(...arguments);
    E(this, "className", "FaceValidationService");
    E(this, "acceleration", null);
  }
  validateDetectedObject(t, e) {
    const n = c2.getFaceValidationInstance(this.getThresholds(), t, e, this.acceleration);
    return n.validate(), n;
  }
}
const ri = class ri extends mI {
  constructor(t, e, n, o) {
    super(n, o);
    E(this, "detector");
    E(this, "validationService");
    this.detector = t, this.validationService = e;
  }
  static async createInstance(t) {
    const e = new PI(), n = xg(e), o = await new n(), r = new g2(), a = new VI(o, r), s = new ri(o, r, a, t);
    this._instance = s;
  }
  static async getInstance(t) {
    return !this._instance && await this.createInstance(t), this._instance;
  }
  stopDetectionLoop() {
    var t;
    super.stopDetectionLoop(), Gc(Ht.INSTRUCTION_CHANGED, (t = this.detection) == null ? void 0 : t["fallbackInstruction"], wl);
  }
  setAcceleration(t) {
    this.validationService.acceleration = t;
  }
};
E(ri, "_instance");
let Eo = ri;
const d2 = () => {
  const { handleError: x } = Fn(), { acceleration: i } = W1(), { thresholds: t, wasmDirectoryPath: e } = ar(), [n, o] = Qe();
  fe(() => {
    (async () => {
      const s = await Eo.getInstance(e);
      try {
        await s.init(), o(s);
      } catch (c) {
        if (c instanceof Error) {
          x(oe.fromError(c));
          return;
        }
      }
    })();
  }, [x, e]), fe(() => {
    n && n.setThresholds(t);
  }, [n, t]), fe(() => {
    n && n.setAcceleration(i);
  }, [i, n]);
  const r = {};
  return r.controller = n, r;
};
function u2({ onPhotoTakenInternal: x }) {
  const { cameraFacing: i, captureMode: t, onPhotoTaken: e, sessionToken: n } = ar(), { controller: o } = d2(), r = Rt(({ candidateSelectionImages: c, imageData: d, protoMessage: g, webMetadata: f }) => {
    l1(fc.FACE, c), e(d, g);
    const u = {};
    u.cameraProperties = f, x == null || x(u);
  }, [x, e]), a = Rt(({ fps: c, processedImage: d }, g) => {
    Gc(Ht.INSTRUCTION_CHANGED, d.instructionCode), o && d1(Ht.DETECTED_FACE_CHANGED, d.detection, o.imageProcessor.validationService.getThresholds().faceConfidence);
    const f = {};
    f.detection = d.detection, f.fps = c, f.image = g, f.isInCandidateSelection = d.isInCandidateSelection, f.invalidValidators = d.invalidValidators, u1(Ht.FACE_DETECTION, f);
  }, [o]), s = {};
  return s.captureMode = t, s.cameraFacing = i, s.controller = o, s.createProtoMessage = hI, s.onCapture = r, s.onDetection = a, s.sessionToken = n, s.customEvent = Ht, s.fallbackInstruction = Ae.FACE_NOT_PRESENT, s.instructionCodeMap = Ae, s.checkToInstructionCodeMap = Fu, N1(s);
}
const l2 = ({ onPhotoTakenInternal: x }) => {
  const { sunfish: i } = Yn(), { cameraResolution: t, detectionDetails: e, shouldCameraMirror: n, videoRef: o } = u2({
    onPhotoTakenInternal: x
  });
  return /* @__PURE__ */ O(ot, { children: /* @__PURE__ */ O(
    a1,
    {
      cameraResolution: t,
      detectionDetails: e,
      shouldMirror: n,
      children: /* @__PURE__ */ O(
        Tu,
        {
          ref: o,
          $isImageMirror: n,
          $isVisible: i,
          autoPlay: !0,
          id: Bl,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}, I2 = ({ onPhotoTakenInternal: x, ...i }) => /* @__PURE__ */ O(Wl, { cameraOptions: i, children: /* @__PURE__ */ O(l2, { onPhotoTakenInternal: x }) });
function f2({ initAppState: x, onError: i }) {
  const [t, e] = Qe(x), [n, o] = Qe(), [r, a] = Qe(!1), s = At(i);
  fe(() => {
    s.current = i;
  }, [i]);
  const c = {};
  return c.appState = t, c.setAppState = e, c.error = n, c.setError = o, c.isCameraReady = r, c.setIsCameraReady = a, c.onErrorRef = s, c;
}
function C2({ onError: x }) {
  const { appState: i, error: t, isCameraReady: e, onErrorRef: n, setAppState: o, setError: r, setIsCameraReady: a } = f2({
    initAppState: Je.LOADING,
    onError: x
  }), s = P1(i), c = Rt(
    (g) => {
      Va(Ht.STATE_CHANGED, { appState: Je.ERROR, error: g }), a(!1), n.current(g), r(g), o(Je.ERROR);
    },
    [a, n, r, o]
  ), d = Rt(
    (g) => {
      Va(Ht.STATE_CHANGED, { appState: g }), o(g);
    },
    [o]
  );
  return {
    appState: i,
    freemiumOverlayState: s,
    isCameraReady: e,
    setIsCameraReady: a,
    handleAppStateChange: d,
    handleError: c,
    error: t
  };
}
var ag = ((x) => (x.AUTO_CAPTURE = "auto-capture", x.LONG_CAPTURE_SMILE = "long-capture-smile", x))(ag || {});
class p2 {
  constructor() {
    E(this, "appKey", "");
    E(this, "deviceId", "");
  }
  async countlyFetch(i) {
    if (!this.appKey || !this.deviceId) return;
    const t = {};
    t.Accept = "application/json";
    const e = {};
    e.method = "GET", e.headers = t;
    const n = e, o = "https://innovatrics.count.ly/i?", r = {};
    r.app_key = this.appKey, r.device_id = this.deviceId;
    const a = sx(r);
    try {
      await fetch("" + o + a + "&" + i, n);
    } catch (s) {
      console.error("Countly Error", s);
    }
  }
  async init(i, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = i;
    const e = { _app_version: vc() }, n = { organization: Sc(window.location.href) }, o = sx({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(n) });
    await this.countlyFetch(o);
  }
  async endSession() {
    const i = {};
    i.end_session = "1";
    const t = sx(i);
    await this.countlyFetch(t);
  }
  async sendEvent(i, t, e) {
    const n = {};
    n.key = i, n.count = 1, n.dur = e, n.segmentation = t;
    const o = [n], r = sx({ events: JSON.stringify(o) });
    await this.countlyFetch(r);
  }
  async sendAutoCaptureEvent(i, t) {
    await this.sendEvent(ag.AUTO_CAPTURE, i, t);
  }
}
const dx = new p2();
class h2 {
  constructor() {
    E(this, "countly", dx);
  }
  createSegmentation(i) {
    return { appVersion: vc(), ...i };
  }
  init(i) {
    if (Fl()) return;
    const t = O1();
    dx.init(t, i);
  }
  endSession() {
    dx.endSession();
  }
  walleye(i, t) {
    const e = {};
    e.nocturne = i, e.customer = t;
    const n = this.createSegmentation(e);
    dx.sendAutoCaptureEvent(n);
  }
}
class m2 extends h2 {
  trackCaptureProcess({ averageFps: i, captureProcessDurationInMs: t, detection: e, deviceName: n, facingMode: o, imageResolution: r, instructionSet: a }) {
    if (!e) return;
    const s = K1(t), c = this.createSegmentation({ faceSize: Ea(e.faceSize), confidence: Ea(e.confidence), camera: Z1(n, o), imageResolution: r.width + "x" + r.height, averageFps: R1(i), captureTime: H1(s), instructionSet: a });
    this.countly.sendAutoCaptureEvent(c, s);
  }
}
const b2 = new m2();
let j;
const Ot = new Array(-7716 * 1 + -8908 + 16752).fill(void 0);
Ot.push(void 0, null, !0, !1);
function Lo(x) {
  return Ot[x];
}
let mt = 857 * -7 + 1 * -7419 + 13418, dn = null;
function Bx() {
  return (dn === null || dn.byteLength === -8717 + -1 * -9521 + -804) && (dn = new Uint8Array(j.memory.buffer)), dn;
}
const kx = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, A2 = typeof kx.encodeInto == "function" ? function(x, i) {
  return kx.encodeInto(x, i);
} : function(x, i) {
  const t = kx.encode(x);
  i.set(t);
  const e = {};
  return e.read = x.length, e.written = t.length, e;
};
function yn(x, i, t) {
  if (t === void 0) {
    const a = kx.encode(x), s = i(a.length, 4092 + -2 * 983 + 2125 * -1) >>> -380 + 1 * 6813 + -6433;
    return Bx().subarray(s, s + a.length).set(a), mt = a.length, s;
  }
  let e = x.length, n = i(e, 4307 + -829 * -10 + -12596) >>> -1 * 6791 + 181 * 31 + 1180;
  const o = Bx();
  let r = 0;
  for (; r < e; r++) {
    const a = x.charCodeAt(r);
    if (a > 4 * 1382 + -8752 + -3 * -1117) break;
    o[n + r] = a;
  }
  if (r !== e) {
    r !== 138 * 11 + -1 * -1855 + -1 * 3373 && (x = x.slice(r)), n = t(n, e, e = r + x.length * (8308 + -6479 * -1 + -14784), -1648 + 469 * -20 + 11029) >>> 0;
    const a = Bx().subarray(n + r, n + e), s = A2(x, a);
    r += s.written, n = t(n, e, r, 8260 + -22 * -317 + -1 * 15233) >>> -6 * -1250 + -2003 + 23 * -239;
  }
  return mt = r, n;
}
function sg(x) {
  return x == null;
}
let un = null;
function pt() {
  return (un === null || un.byteLength === 0) && (un = new Int32Array(j.memory.buffer)), un;
}
let hn = Ot.length;
function y2(x) {
  x < -9136 + 7351 * 1 + 1917 || (Ot[x] = hn, hn = x);
}
function cg(x) {
  const i = Lo(x);
  return y2(x), i;
}
const Do = {};
Do.ignoreBOM = !0, Do.fatal = !0;
const gg = typeof TextDecoder < "u" ? new TextDecoder("utf-8", Do) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && gg.decode();
function ei(x, i) {
  return x = x >>> 0, gg.decode(Bx().subarray(x, x + i));
}
function No(x) {
  hn === Ot.length && Ot.push(Ot.length + (1 * -337 + -1832 + 2 * 1085));
  const i = hn;
  return hn = Ot[i], Ot[i] = x, i;
}
let ln = null;
function dg() {
  return (ln === null || ln.byteLength === 24 * -399 + 4531 * 1 + 5045) && (ln = new Uint32Array(j.memory.buffer)), ln;
}
function ts(x, i) {
  const t = i(x.length * 4, 4) >>> 0, e = dg();
  for (let n = 18467 + 1 * -18467; n < x.length; n++)
    e[t / (-147 * -67 + 17 * 293 + -21 * 706) + n] = No(x[n]);
  return mt = x.length, t;
}
function ns(x, i) {
  x = x >>> -499 * 2 + -715 + 571 * 3;
  const t = dg(), e = t.subarray(x / (-735 + -1 * -739), x / (-13 * -366 + -1804 + -1475 * 2) + i), n = [];
  for (let o = 795 + -157 * -26 + -4877; o < e.length; o++)
    n.push(cg(e[o]));
  return n;
}
function W2(x, i) {
  const t = yn(x, j.__wbindgen_malloc, j.__wbindgen_realloc), e = mt, n = yn(i, j.__wbindgen_malloc, j.__wbindgen_realloc), o = mt, r = j.is_mobile_supported(t, e, n, o);
  return pr.__wrap(r);
}
const Fo = {};
Fo.register = () => {
}, Fo.unregister = () => {
};
const xs = typeof FinalizationRegistry > "u" ? Fo : new FinalizationRegistry((x) => j.__wbg_licensevalidationresult_free(x >>> 6257 + 656 * -8 + -1 * 1009));
class pr {
  static __wrap(i) {
    i = i >>> 2 * -2495 + 178 * -2 + -66 * -81;
    const t = Object.create(pr.prototype);
    return t.__wbg_ptr = i, xs.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const i = this.__wbg_ptr;
    return this.__wbg_ptr = 1461 + -1669 * -1 + 1 * -3130, xs.unregister(this), i;
  }
  free() {
    const i = this.__destroy_into_raw();
    j.__wbg_licensevalidationresult_free(i);
  }
  constructor(i, t, e, n, o) {
    var r = sg(t) ? 0 : yn(t, j.__wbindgen_malloc, j.__wbindgen_realloc), a = mt;
    const s = ts(e, j.__wbindgen_malloc), c = mt, d = ts(n, j.__wbindgen_malloc), g = mt, f = yn(o, j.__wbindgen_malloc, j.__wbindgen_realloc), u = mt, p = j.licensevalidationresult_new(i, r, a, s, c, d, g, f, u);
    return this.__wbg_ptr = p >>> -3184 + -8629 * -1 + -55 * 99, this;
  }
  get is_valid() {
    return j.licensevalidationresult_is_valid(this.__wbg_ptr) !== -4396 * -1 + -1 * 8557 + 4161;
  }
  get features_json() {
    try {
      const e = j.__wbindgen_add_to_stack_pointer(-16);
      j.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var i = pt()[e / (-31 * 155 + -323 + 5132) + (1591 * -6 + 3727 * -1 + 13273)], t = pt()[e / (1663 * -2 + 8021 + -4691 * 1) + (8018 + -2 * 1858 + -4301)];
      let n;
      return i !== 0 && (n = ei(i, t).slice(), j.__wbindgen_free(i, t * (1 * -4652 + -1840 + 6493), -1367 + -342 * -4)), n;
    } finally {
      j.__wbindgen_add_to_stack_pointer(1 * 7757 + 8269 + -16010);
    }
  }
  get errors() {
    try {
      const n = j.__wbindgen_add_to_stack_pointer(-16);
      j.licensevalidationresult_errors(n, this.__wbg_ptr);
      var i = pt()[n / 4 + 0], t = pt()[n / (54 * -137 + 4831 * -2 + 2844 * 6) + (66 * -87 + -1871 + -2538 * -3)], e = ns(i, t).slice();
      return j.__wbindgen_free(i, t * (5 * -1061 + -9 * 756 + 12113), 1 * 6449 + 1324 * -2 + -3797), e;
    } finally {
      j.__wbindgen_add_to_stack_pointer(7 * -565 + 6291 + 116 * -20);
    }
  }
  get warnings() {
    try {
      const n = j.__wbindgen_add_to_stack_pointer(-16);
      j.licensevalidationresult_warnings(n, this.__wbg_ptr);
      var i = pt()[n / (-1277 * -7 + 314 * 12 + -12703) + (-749 * 11 + 1 * 8098 + 141)], t = pt()[n / (2169 * -2 + -1846 + -6188 * -1) + (-824 * -4 + 1174 + -4469)], e = ns(i, t).slice();
      return j.__wbindgen_free(i, t * (-2916 + -20 * -146), -5 * 553 + -1 * -7141 + 4372 * -1), e;
    } finally {
      j.__wbindgen_add_to_stack_pointer(-258 * 30 + -1673 + 3 * 3143);
    }
  }
  get customer() {
    let i, t;
    try {
      const o = j.__wbindgen_add_to_stack_pointer(-16);
      j.licensevalidationresult_customer(o, this.__wbg_ptr);
      var e = pt()[o / (-1 * 685 + 7935 * 1 + -7246) + (10721 + -10721 * 1)], n = pt()[o / (-6644 + -3324 * -2) + 1];
      return i = e, t = n, ei(e, n);
    } finally {
      j.__wbindgen_add_to_stack_pointer(-746 + -1 * -762), j.__wbindgen_free(i, t, 14016 + -2803 * 5);
    }
  }
}
async function v2(x, i) {
  if (typeof Response == "function" && x instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(x, i);
    } catch (e) {
      if (x.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
      else throw e;
    }
    const t = await x.arrayBuffer();
    return await WebAssembly.instantiate(t, i);
  } else {
    const t = await WebAssembly.instantiate(x, i);
    if (t instanceof WebAssembly.Instance) {
      const e = {};
      return e.instance = t, e.module = x, e;
    } else return t;
  }
}
function S2() {
  const x = {};
  return x.wbg = {}, x.wbg.__wbindgen_string_get = function(i, t) {
    const e = Lo(t), n = typeof e == "string" ? e : void 0;
    var o = sg(n) ? 3108 + 1 * 535 + -3643 : yn(n, j.__wbindgen_malloc, j.__wbindgen_realloc), r = mt;
    pt()[i / (8369 + 7 * -1195) + (-31 * 51 + -2463 * -3 + 5807 * -1)] = r, pt()[i / (-2262 + -93 * -46 + -2 * 1006) + (-9878 + 12 * 111 + -2 * -4273)] = o;
  }, x.wbg.__wbindgen_object_drop_ref = function(i) {
    cg(i);
  }, x.wbg.__wbindgen_string_new = function(i, t) {
    const e = ei(i, t);
    return No(e);
  }, x.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return No(/* @__PURE__ */ new Date());
  }, x.wbg.__wbg_getTime_2bc4375165f02d15 = function(i) {
    return Lo(i).getTime();
  }, x.wbg.__wbindgen_throw = function(i, t) {
    throw new Error(ei(i, t));
  }, x;
}
function w2(x, i) {
  return j = x.exports, ug.__wbindgen_wasm_module = i, un = null, ln = null, dn = null, j;
}
async function ug(x) {
  if (j !== void 0) return j;
  typeof x > "u" && (x = new URL("dot_embedded_bg.wasm", import.meta.url));
  const i = S2();
  (typeof x == "string" || typeof Request == "function" && x instanceof Request || typeof URL == "function" && x instanceof URL) && (x = fetch(x));
  const { instance: t, module: e } = await v2(await x, i);
  return w2(t, e);
}
function on(x, i, t, e, n) {
  return ke(e - -139, t);
}
(function(x, i) {
  function t(s, c, d, g, f) {
    return ke(s - -236, f);
  }
  function e(s, c, d, g, f) {
    return ke(f - -366, c);
  }
  function n(s, c, d, g, f) {
    return ke(s - -100, f);
  }
  const o = x();
  function r(s, c, d, g, f) {
    return ke(s - 314, c);
  }
  function a(s, c, d, g, f) {
    return ke(f - -713, d);
  }
  for (; ; )
    try {
      if (parseInt(t(309, 325, 310, 291, "l$29")) / 1 * (-parseInt(t(305, 276, 320, 332, "]*t4")) / 2) + -parseInt(e(116, "gkpf", 170, 122, 144)) / 3 * (-parseInt(e(161, "$ER[", 134, 141, 142)) / 4) + -parseInt(t(308, 332, 302, 285, "(eQf")) / 5 + -parseInt(n(401, 418, 392, 417, "Xz@y")) / 6 * (-parseInt(a(-194, -170, "]*t4", -203, -179)) / 7) + -parseInt(a(-199, -206, "wUQj", -197, -194)) / 8 + parseInt(e(180, "3V(k", 166, 176, 157)) / 9 * (-parseInt(r(836, "g1iK", 849, 822, 811)) / 10) + parseInt(e(216, "2W@9", 177, 216, 188)) / 11 === i) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(ti, 1 * -1192558 + -23 * 1049 + 72459 * 27);
function ti() {
  const x = ["WQ7cNYjFWPi", "oSo2W50MWRa", "qM3cGrzGFee", "EW7cTMRdGG", "Cv/cTCkgWQLOW5bsaK0GW5RdGW", "Ba/dSCkIma", "WRxcImklzSoarSoxsSoaWQS", "eb5FWOK4", "xsDkmhtdRCk9WOjI", "D17cVmkiWQHKW5ndfeC+W4VdLW", "l8knW5OJWOK1WPGiW68", "W7VcMIFcNgG", "W6ZcHZfjW58", "W5hcP8ouW5e2W47cTSktWPTs", "W5dcKxdcKmk5", "W5FdQrPwoG", "WO05W4zXW6i", "aSk8W6FcH2O", "wCkBW4f2W4W", "WQBdHMtdGJVcGmknwCoxWQFdSg4Lfa", "WQtdGSktiW", "WQpcUG8ThW", "WOJcTvLqaCk5W7zOW4a", "fSkEASkGgG", "W7HYWOxcLeJcTrBcUG0Rg0tdQa", "W5tdItXptG", "W6VdMsGKW7m", "D1VcUmkeWQvLW5rMhg0UW6/dPG", "W5xdQrrApW", "Amk7WOFcVSoz", "WOCkaSkkW5mRW4dcJZmq", "W77cN8ooy2D/WRhdI8oYmW", "WOFcMmkAWPG", "ESkGWP8tWQ7dHSoajCoD", "WQtcSHCTba", "emktW4n2W4i", "WRn8WOPyWRe", "W5ZdKZnpuG", "WQddJCkopMe", "mmopWOW/WR4", "W4RcUw3cLmke", "r8kyWQFcO8kM", "Ev7cPmo+Av/dUbGDz21zva", "W613fXOXWOhdQGW", "W6OaWQ9ZW41AW7bXW5RcUMqYW6y", "h8oBWPpcKCkwWQBdGSku", "W5PrWQXRWOvLc2npjrdcImosWRS", "qCkCCCkOma", "WQZcPXiRea", "gwZcIWPN", "FvNcPSo4zvVdUu4lAwbkw8of", "agJcLaf3", "W6WhWQH9W4DCW7afW43cVMWxW7iP", "rrDxWPddOq", "WRWGW4/dJJG", "WQpdHCkopM8", "WRTDW6SvWPa", "WRBdLmomk8oouCo4"];
  return ti = function() {
    return x;
  }, ti();
}
function rn(x, i, t, e, n) {
  return ke(e - -390, n);
}
function ke(x, i) {
  const t = ti();
  return ke = function(e, n) {
    e = e - (4324 * -1 + -20 * -217 + 241 * 2);
    let o = t[e];
    if (ke.cfzkyM === void 0) {
      var r = function(g) {
        const f = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = f.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          p += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, f) {
        let u = [], p = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + f.charCodeAt(l % f.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (let v = 0; v < g.length; v++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      ke.xTlSrr = d, x = arguments, ke.cfzkyM = !0;
    }
    const a = t[1 * -8061 + -1 * 163 + 4112 * 2], s = e + a, c = x[s];
    return c ? o = c : (ke.Ijucbd === void 0 && (ke.Ijucbd = !0), o = ke.xTlSrr(o, n), x[s] = o), o;
  }, ke(x, i);
}
function ux(x, i, t, e, n) {
  return ke(i - -50, n);
}
function is(x, i, t, e, n) {
  return ke(t - -510, e);
}
var as;
class B2 {
  constructor() {
    E(this, as, !1);
  }
  async [(as = on(380, 384, "Xz@y", 392) + on(405, 395, "mtU!", 411) + ux(469, 476, 499, 500, "SXI@"), rn(184, 146, 161, 165, "$ER["))](i = is(61, 24, 37, "N1f5")) {
    function t(a, s, c, d, g) {
      return ux(a - 452, s - -494, c - 228, d - 65, d);
    }
    function e(a, s, c, d, g) {
      return rn(a - 352, s - 191, c - 101, c - 1071, s);
    }
    function n(a, s, c, d, g) {
      return on(a - 457, s - 107, g, d - 202);
    }
    function o(a, s, c, d, g) {
      return rn(a - 361, s - 323, c - 153, g - 1183, c);
    }
    function r(a, s, c, d, g) {
      return ux(a - 317, g - -380, c - 39, d - 183, a);
    }
    try {
      const a = i + "/" + Al;
      await ug(a), this[n(588, 589, 575, 587, "q3!E") + o(1283, 1273, "OdHa", 1264, 1291) + t(-17, 8, -19, "FQY)", 7)] = !0;
    } catch {
      this[e(1209, "gkpf", 1217) + e(1236, "2W@9", 1227) + t(-55, -38, -9, "z@J^")] = !1, console[o(1328, 1287, "wqqR", 1320, 1302)](n(567, 622, 592, 596, "$VYW") + o(1327, 1339, "hUtK", 1326, 1323) + n(593, 619, 624, 614, "rO#c") + r("l$29", 86, 81, 64, 86) + n(564, 597, 554, 575, "8vR%") + r("OdHa", 67, 84, 97, 81) + n(601, 588, 566, 588, "OdHa") + t(11, -4, -28, "wUQj") + t(18, -2, -29, "wdkU") + e(1165, "Xb&4", 1184) + t(-59, -44, -24, "q3!E") + o(1321, 1345, ")Rg8", 1346, 1331) + e(1197, "SXI@", 1209) + r("hw26", 51, 79, 86, 72) + r("hGxh", 68, 111, 63, 83) + o(1304, 1336, "N1f5", 1320, 1328) + r("hw26", 81, 77, 62, 84) + t(-58, -29, 0, "$ER[") + "n.");
    }
  }
  [is(-3, 37, 8, "g1iK") + on(388, 401, "LYVT", 410) + ux(519, 503, 520, 518, "8vR%") + "ed"]() {
    function i(n, o, r, a, s) {
      return rn(n - 70, o - 112, r - 105, n - 166, a);
    }
    function t(n, o, r, a, s) {
      return on(n - 67, o - 455, o, r - 307);
    }
    function e(n, o, r, a, s) {
      return rn(n - 482, o - 244, r - 359, s - -436, r);
    }
    return this[e(-336, -311, "LYVT", -321, -309) + t(689, "$ER[", 700) + i(281, 292, 264, "mtU!")];
  }
}
class Ui extends Error {
  constructor() {
    super(...arguments);
    E(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
(function(x, i) {
  function t(c, d, g, f, u) {
    return Ie(f - 124, u);
  }
  function e(c, d, g, f, u) {
    return Ie(u - 162, g);
  }
  function n(c, d, g, f, u) {
    return Ie(c - 721, f);
  }
  function o(c, d, g, f, u) {
    return Ie(f - -833, d);
  }
  var r = x();
  function a(c, d, g, f, u) {
    return Ie(u - 782, f);
  }
  for (; ; )
    try {
      var s = parseInt(o(-543, ")gp)", -532, -536, -538)) / 1 * (parseInt(e(488, 538, "0r4W", 517, 509)) / 2) + parseInt(t(397, 426, 442, 431, "OiLO")) / 3 * (parseInt(t(413, 396, 457, 427, "MmFx")) / 4) + parseInt(t(493, 465, 467, 474, "f1*(")) / 5 + -parseInt(o(-548, "Amka", -499, -523, -551)) / 6 * (-parseInt(a(1092, 1067, 1064, "szfv", 1074)) / 7) + -parseInt(n(1064, 1049, 1040, "2*wx", 1056)) / 8 + -parseInt(e(493, 470, "8bmm", 509, 501)) / 9 * (-parseInt(a(1105, 1155, 1092, "Amka", 1122)) / 10) + parseInt(t(442, 386, 438, 411, "u[C(")) / 11 * (-parseInt(t(430, 438, 452, 438, ")gp)")) / 12);
      if (s === i) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ni, -2 * 60041 + -10525 + 302870);
function os(x, i, t, e, n) {
  return Ie(n - 311, x);
}
function ni() {
  var x = ["tSoDAgvtbmoj", "rCk2eG", "g8oFx0jq", "ddRdG8oOW5pdS3quWPS", "WRRdPfO", "W5C9W5G", "F3KEW68", "WQGTWOddQsPhlSkTWPW", "W4G9WRhdLIO", "fMVcJ8o8pG", "W7DWW4O", "WPnksa", "qCk+aSkvtG", "W67dKCoEWOJcUa", "W4hcS8k3Cmkx", "AmoNga", "g8o5qu1Q", "WR8dWONcO3PLbCkvEa", "CCkCW5ddLX8", "gJxcJaJdUq", "WRSMW552ia", "WQ8YW59SjG", "EYPUWRtdH0NdNYtcUCkNWQ8", "W758dCkdWQK", "tmkmdqzCj8oyqHid", "W5LKemkXWRlcMmkNWP4p", "DCkeW5ddNrq", "kwS5W7hcJq", "emoFta", "W50JW5pcUXC", "wNbcxha", "W6LJWPK1DGZdMtJdN8omgSo9aq", "pCoolHiefSoiaCoRwca", "btVdGmk3W6hdQeeqWOLI", "WP81r8k7WOq", "hSoiuuvw", "k8opWPxcJupcQGaXd8o/rSkcW6m", "WO7dPmoSymou", "tSkTWOlcRx0", "WQ0TwmkuW7i", "suuzdmkVnareea", "ux/cGCoOW6O", "kapcRN0x", "W4ZdUgrLAIhcTLq+wH8I", "f3BcICoekq", "gWvef8k+", "W6bKWPW3phpcGsxdNCoT", "WOPVWPNcPLNdK1JcRxtcOCoiWQC", "xCokWOjSW5u", "WR/cImkjWQpcMSk+W6xdGmkG", "WOBcOd0", "ASkyD1bi", "iSk1wSkEA8kjuKjpWOC", "C8oSdCoe", "c07dG8oOyG", "WQZdU1Sgkq", "awxcMCohpG", "WQ8HWONcVGLphmkAWPNdGa", "WO1msrPm", "WPxdPmoNpCowWQhdJmoTe8oLWPldK8oh", "fmoQW53cMdTPWQe8W483W4/dRW", "W5aPW73dVWu", "W6r4cSk/WQS", "WPP4W7BcLxXAcSkDW4BcNaHidW", "W4GXFgz3fmo9", "CCo7WPX8c8oOsmoIWO5i", "esiubXtdHSorW48DW4OTW4O"];
  return ni = function() {
    return x;
  }, ni();
}
function Lt(x, i, t, e, n) {
  return Ie(i - -902, x);
}
function lx(x, i, t, e, n) {
  return Ie(x - -844, e);
}
function Ie(x, i) {
  var t = ni();
  return Ie = function(e, n) {
    e = e - 284;
    var o = t[e];
    if (Ie.LjWsdC === void 0) {
      var r = function(g) {
        for (var f = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", p = "", b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = f.indexOf(l);
        for (var Z = 0, M = u.length; Z < M; Z++)
          p += "%" + ("00" + u.charCodeAt(Z).toString(16)).slice(-2);
        return decodeURIComponent(p);
      }, a = function(g, f) {
        var u = [], p = 0, b, A = "";
        g = r(g);
        var l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + f.charCodeAt(l % f.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (var v = 0; v < g.length; v++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      Ie.DYzsnW = a, x = arguments, Ie.LjWsdC = !0;
    }
    var s = t[-759 * 3 + -173 * 2 + 2623], c = e + s, d = x[c];
    return d ? o = d : (Ie.EXczFY === void 0 && (Ie.EXczFY = !0), o = Ie.DYzsnW(o, n), x[c] = o), o;
  }, Ie(x, i);
}
function qt(x, i, t, e, n) {
  return Ie(t - -527, x);
}
var P0, En;
class rs {
  constructor(i) {
    ne(this, P0);
    ne(this, En);
    function t(r, a, s, c, d) {
      return Ie(r - -137, a);
    }
    function e(r, a, s, c, d) {
      return Ie(s - -387, a);
    }
    function n(r, a, s, c, d) {
      return Ie(c - 101, a);
    }
    function o(r, a, s, c, d) {
      return Ie(c - 983, r);
    }
    this[t(205, "OiLO") + n(400, "T[[G", 387, 420)] = i;
    try {
      $(this, P0, i[n(413, "OYJK", 399, 422, 426) + t(193, "1RS)", 222, 160, 218) + t(153, "f1*(", 138, 174, 128)] && JSON[t(161, "jaZQ", 175, 185, 138)](i[e(-120, "8bmm", -96, -126, -126) + n(443, "52bk", 473, 450, 445) + o(")Pjt", 1286, 1263, 1294, 1299)])), $(this, En, i[t(178, "MmFx", 174, 160, 198) + e(-29, "OiLO", -52, -68, -60)]);
    } catch (r) {
      console[o("szfv", 1275, 1288, 1276)](r);
    }
  }
  get [Lt("u[C(", -601) + "id"]() {
    function i(e, n, o, r, a) {
      return Lt(r, a - 338);
    }
    function t(e, n, o, r, a) {
      return Lt(o, a - 1110);
    }
    return this[t(519, 511, "0r4W", 473, 493) + i(-238, -226, -224, "1fV(", -238)][t(553, 552, "e]5q", 574, 553) + t(503, 520, "T[[G", 484, 516)];
  }
  get [qt("Amka", -180, -179) + "s"]() {
    function i(e, n, o, r, a) {
      return Lt(n, e - 759);
    }
    function t(e, n, o, r, a) {
      return Lt(o, e - 1431);
    }
    return this[t(863, 861, "(7O1") + i(159, "1RS)")][t(813, 821, "9e0h") + "s"];
  }
  get [qt("Bwy%", -192, -181) + Lt("jaZQ", -584)]() {
    function i(n, o, r, a, s) {
      return qt(s, o - 361, r - 1302);
    }
    function t(n, o, r, a, s) {
      return lx(s - 1768, o - 71, r - 49, r);
    }
    function e(n, o, r, a, s) {
      return qt(n, o - 365, a - 1448);
    }
    return this[e("FrA4", 1248, 1244, 1244) + t(1242, 1235, "2*wx", 1220, 1249)][t(1269, 1224, "i1Uv", 1228, 1252) + i(1074, 1062, 1087, 1076, "u[C(")];
  }
  get [qt("9e0h", -193, -211) + "b"]() {
    return L(this, P0);
  }
  get [qt("i1Uv", -174, -200) + qt(")gp)", -237, -210)]() {
    return L(this, En);
  }
  get [lx(-500, -467, -510, "*Ncy") + Lt("2*wx", -569) + lx(-550, -518, -581, "c]Dw") + os("jMws", 622, 592, 652, 624)]() {
    var n, o;
    function i(r, a, s, c, d) {
      return Lt(a, r - -46);
    }
    function t(r, a, s, c, d) {
      return lx(s - 696, a - 209, s - 481, a);
    }
    function e(r, a, s, c, d) {
      return os(r, a - 275, s - 264, c - 157, d - -1059);
    }
    return !!((o = (n = L(this, P0)) == null ? void 0 : n[e("OiLO", -406, -432, -415, -439) + e("szfv", -417, -428, -420, -426)]) != null && o[i(-611, "z^Cg") + i(-660, "7UIp") + t(199, "auBp", 188) + e("n*rL", -384, -413, -410, -407) + e(")Pjt", -439, -487, -436, -453) + t(176, "F6&F", 172) + t(132, "9e0h", 148) + "d"]);
  }
}
P0 = new WeakMap(), En = new WeakMap();
function be(x, i) {
  const t = xi();
  return be = function(e, n) {
    e = e - (-3216 + -1 * -1310 + -26 * -87);
    let o = t[e];
    if (be.GWnCrI === void 0) {
      var r = function(g) {
        const f = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", p = "";
        for (let b = 0, A, l, v = 0; l = g.charAt(v++); ~l && (A = b % 4 ? A * 64 + l : l, b++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * b & 6)) : 0)
          l = f.indexOf(l);
        for (let b = 0, A = u.length; b < A; b++)
          p += "%" + ("00" + u.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(p);
      };
      const d = function(g, f) {
        let u = [], p = 0, b, A = "";
        g = r(g);
        let l;
        for (l = 0; l < 256; l++)
          u[l] = l;
        for (l = 0; l < 256; l++)
          p = (p + u[l] + f.charCodeAt(l % f.length)) % 256, b = u[l], u[l] = u[p], u[p] = b;
        l = 0, p = 0;
        for (let v = 0; v < g.length; v++)
          l = (l + 1) % 256, p = (p + u[l]) % 256, b = u[l], u[l] = u[p], u[p] = b, A += String.fromCharCode(g.charCodeAt(v) ^ u[(u[l] + u[p]) % 256]);
        return A;
      };
      be.LOdXUm = d, x = arguments, be.GWnCrI = !0;
    }
    const a = t[0], s = e + a, c = x[s];
    return c ? o = c : (be.dfnCsQ === void 0 && (be.dfnCsQ = !0), o = be.LOdXUm(o, n), x[s] = o), o;
  }, be(x, i);
}
(function(x, i) {
  function t(s, c, d, g, f) {
    return be(g - -314, f);
  }
  const e = x();
  function n(s, c, d, g, f) {
    return be(c - 1, s);
  }
  function o(s, c, d, g, f) {
    return be(f - 746, d);
  }
  function r(s, c, d, g, f) {
    return be(c - 9, d);
  }
  function a(s, c, d, g, f) {
    return be(g - -644, f);
  }
  for (; ; )
    try {
      if (-parseInt(a(-281, -303, -161, -270, "Uf!9")) / 1 + -parseInt(a(-45, -204, -128, -153, "Z8gK")) / 2 + -parseInt(t(168, 342, 224, 280, "W8Gu")) / 3 * (-parseInt(a(-105, -116, -59, -73, "ws90")) / 4) + -parseInt(n("&hm5", 390, 461, 421, 285)) / 5 * (parseInt(t(46, 230, 62, 146, "*1T3")) / 6) + -parseInt(a(91, -164, -70, -44, "8mSI")) / 7 + parseInt(o(1184, 1081, "oZHI", 1175, 1153)) / 8 * (-parseInt(o(1158, 1280, "9d^2", 1163, 1251)) / 9) + parseInt(a(-116, -46, -77, -59, "WH*Q")) / 10 * (parseInt(r(465, 427, "8mSI", 452, 308)) / 11) === i) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(xi, -250049 + 7 * 79966);
function Oe(x, i, t, e, n) {
  return be(t - -119, n);
}
function Ne(x, i, t, e, n) {
  return be(i - 936, e);
}
function Bt(x, i, t, e, n) {
  return be(t - 860, x);
}
function ue(x, i, t, e, n) {
  return be(n - -986, i);
}
function xi() {
  const x = ["utjW", "oCoDW5JcLq", "dSkYWOCnDa", "W4mjmmo8WQ0", "zgijumoK", "avCLW7NcRa", "zttdM8keW7i", "WR/cGKy8tq", "WPzpWOK", "idVdJYRdTq", "kGhcT1iJ", "vIzCW4Tp", "ibJcU1tcMW", "WPSSW6asWPq", "a8o2amkvWP0", "tCknemo0FG", "atK1b8o2", "W6/dJSoMW4Dz", "AxvOW6K", "WOlcJmkmW4ldSq", "WPLjW4JcTxC", "wYlcJmk8WQG", "W60qiCoCWQG", "tmksk2/dJG", "bmk2WPCkEq", "W4ytnSoMWQy", "W4q0lttcPa", "geOlngS", "WOlcJmknW4hcUa", "ihi6dee", "Fb/cT8oVWPC", "rgBdSW", "WP5hWOJcMsq", "avewdhe", "CSkPpa", "tCkypSkFW4W", "WP1/WQaYWPC", "WPjeDSk6WO9AW515WPqJ", "igBdGmkEW4i", "W6ddLCo6WPq", "DgBdHCkcW6m", "WR3cVK4/xa", "WRFcGCkiW7JdRG", "b8k+WPy", "vJTQW4K", "WPO+W4mqWO8", "hX4Ub8o3", "WOTAW4JcTgW", "WPXTW53dO3G", "l2ldGmk5W4u", "n8oIWOqkja", "W6ZdLCooWP7cQ1/cKCkpDCk5WOhdKa", "WPPnWP7cUca", "dCk2WOiCDW", "W501aa", "CXNcLmo1WOC", "WRhcImkyW43dRq", "dZC0cSo6", "WOddKmoQtCkG", "qwBdNSkdW6u", "l8oFv8o0cmojb3/cKq", "WOjbW54", "zh5OW6CI", "jYVcUNFcQG", "WObGWPtcSIa", "BNX9", "WQ/cSSo8EKdcGaFcU0OlBKpcVG", "WOVcL0JdRwK", "CCkdAmoC", "WQNcQun/", "xdiPxmoK", "tNqUW4iy", "C1/dKCkQW5a", "W6VdOmkHjra", "ySkEnmkoW4C", "BcNdGcRdVq", "WP4eW7OyWOG", "iY7cMLWY", "nYZcUKOZ", "l2ldGmk+W58", "omotW5dcNYu", "tqFdIb7dMq", "lbdcQ20", "bmo8gSkJWPu", "xqX2WQtcO8ocW6dcPMxdVq", "WO9lW44", "aZmMcmoN", "WOHAWPxcQIW", "W5qHyW", "A2i5uSoK", "yYxdJtZdTG", "qSkEnmkoW4C", "WRNcHmkDW4NdTG", "p3RdQSosW47dStNcKfG", "WRZcV8kNna", "WPJcMu7dHM0", "rNddTatdRW", "c0Wx", "uWqTlW", "dveNW7lcIW", "kYtcSLWY", "CSkPomojW6i", "F8kqBSobW6m", "pmoMWP4Akq", "rmkzkG", "kZNcHfa1", "wIa4eCoG", "W4KsjCoN", "WPzZWRCBWPa", "WPThWPtcQdC", "r8k9l8khW6e", "b1SWW6lcGa", "zIdcVCoAW7y", "tCkEoG", "kHdcO8oNxW", "EGpcQ8o5W4q", "CSkYf8obW7u", "lCowmSkeWQmvjqrlWP/cOmkvWOu", "EXPxWP1I", "W5/dP8oGBg58ltJcGSkdW4SX", "W7ztygZcSG", "WO7cJftdMW", "fKybcW", "WO0xWQtcPGNcOSo9WOqwWPvIWOdcIW", "Emklg3dcPa", "nK02W7VcPa", "qw5pW7i5", "W7zbu3pcQq", "W5LlW6FdLvW", "WPVcV8kHmJu", "smkFo8kv", "wZP3W7Hd", "ztTGW6KJ", "amk8WOeRFq", "cHrYW7v/W75N", "WPRcRvu/qq", "ECkEdmoQlq", "avykc20", "nGmvfMe", "W5aokSoMWRy", "vJrVW5ru", "WP1AWOJcSZC", "vhRdHmkiW4e", "twRdTatdRG", "W4SOhdZcHG", "b2fLcmk1W5NdT1PorMCs", "WOuSW7GyWPG", "WPrbWOdcUse", "vYyUs8oJ", "bIiOgG", "nsJcU2y8", "nuilewS", "vMr4g8o6WOiTvuS", "ut0UwSkS", "iq3cOhSK", "bKyDuq", "ddmXg8o5", "smkjemoSmG", "xXeHdCo/", "D8kLpSogW6u", "WRZcG8kyW4m", "CSknf8o6nG", "bMJcLmk5W6u", "WQZcT8o4ga3dSvNcNeK", "DmoYf8kJWOi", "CWlcV8ozWPy", "xa1WWQBdNmkOW6ZcH2tdS1JcIG", "ldRcGLRcPG", "W5itmq", "FZ7dHZFdRa", "WOPhW47cNNm", "WORcIK7dH3y", "bCkHWPWDBW", "bfeCgG", "WObbW47cSN8", "AqtcO8oHqG", "W4HbthFdSW", "W7hdRSkQcqy", "W4aVySkaWOO", "CmkLpCohW5q", "vGqWiSo+", "mdPpyConW63dRSo+nW", "kKyXW7NcNa", "WPz1WRm", "iHfpW4/dLa", "WPJcGCkCW7JdSG", "CWtcU8o5WOO", "WR56W5VdIgu", "W5LbW6hdS1u", "xmkyjq", "W5DbWP/cSIi", "cmk6WOChFq", "WOxcVCkmW5JdTW", "pmowW4FdGrS", "oCoCW4hdIGy", "WOzjW47cUhy", "t8kwlG", "WOZcNvldM2e", "q8ksjq", "x33dG8keW7a", "WOtcLSoYAmkz", "r8kyoq", "kwRdKq", "zHNcR8oZrq", "mCoSWOrjjq", "W4j5WQDhW48As3ZcMSoJWPVcGhW", "zwmoCmoz", "WPNcHmkDW4NdTG", "rbNdRmowFG", "oGxcSxaJ", "wWhcJ8oOEW", "tCksoCkyW4W", "rSk3gSk+WPq", "WPbiW7ZdS1G", "jg7dJSkyW44", "jclcPK0K", "bfxdHSkLW4b/WQq", "c1ywk1m", "jd/cP0OL", "i8o4W5NcGr4", "o8o/W7VdRra", "ktRcKNRcRa", "sqq2lW", "nSoTWPKD", "WORcLK/dJvq", "FCkjf8ovnW", "WPj7WQaDWPy", "CSkVomonW7G", "dKWyg04", "CSkfCG", "t8kdmSkNW4a", "gutcR3CP", "bSo2gSkfWPa", "a8kHWOebBG", "W4KAW4lcRI3dMWCFWRO", "ymo6mCorW5W", "mJ5caSknWP7dVSo9k8oig8kj", "lI7cRvCL", "WRtcI8kiW6BdLq", "iJ/cULyK", "ESknDmoCW7q", "WQRcONBdVK4", "BmkqBSoeW7K", "tWZcRmo0", "oSoTWOmmBa", "WRtcGCksW7/dVq", "WP90WQCBWQ4", "uCkql8kjW4C", "yYFcU8krW7q", "CmklySoxW74", "oci3WRzMfCkfW43cJKfp", "W7VdPmkSoae", "WOFdHmo5yG", "BgKi", "W7zdwNtcOa", "xrCRmSoL", "WOm/W70FWOG", "W7njwW", "W6JdQSkCndK", "n8ooW57cIbO", "vmkdq8oDeq", "Ah8Tvmoh", "ocVcMxpcRa", "WOL1WRO", "y2KEuCor", "pSkGnmoDW7G", "BqJcQ8odWO4", "vCkfmCkFW4y", "zH/cR8o3xW", "nSohW43dNbS", "W5pcPCo1CSkv", "WOTgW4NcVJ4", "WO/dKCoV", "WQDTW7GyWP8", "W71msu7cPq", "WOn+imo5W5bEErOqW68Pya", "WOZcILpdM3C", "kSkUt8oNW4BcKSkeW7/cGKTH", "AJ7dNdBdQG"];
  return xi = function() {
    return x;
  }, xi();
}
function gt(x, i, t, e, n) {
  return be(x - -978, n);
}
var ss, cs, gs;
class k2 {
  constructor(i) {
    E(this, gs);
    E(this, cs, [gt(-533, -554, -558, -470, "kZY5") + ue(-360, "G%Y6", -461, -610, -483) + "ic", ue(-513, "XdgB", -406, -434, -518) + ue(-487, "3Ql]", -514, -731, -625) + "ic"]);
    E(this, ss);
    function t(e, n, o, r, a) {
      return be(r - -858, e);
    }
    this[t("P0oM", -469, -444, -433) + t("[9Uh", -137, -362, -225) + "d"] = i;
  }
  async [(gs = Oe(197, 301, 244, 239, "LzkN") + "se", cs = Bt("oZHI", 1542, 1480) + Bt("VlZx", 1569, 1449) + Bt("lLCw", 1276, 1339) + ue(-292, "3!rI", -354, -373, -370), ss = ue(-336, "VlZx", -490, -473, -422) + ue(-702, "W8Gu", -708, -464, -570), ue(-457, "&hm5", -421, -460, -408))](i = Oe(429, 417, 424, 450, "3MtM"), t) {
    const e = await this[a(1309, 1374, 1373, "3!rI") + o(1251, 1199, 1188, 1216, "GDZj") + s("Uf!9", 375, 448)](t);
    function n(c, d, g, f, u) {
      return Bt(u, d - 365, c - -974);
    }
    function o(c, d, g, f, u) {
      return Bt(u, d - 148, c - 33);
    }
    function r(c, d, g, f, u) {
      return Bt(d, d - 162, u - -769);
    }
    function a(c, d, g, f, u) {
      return Oe(c - 272, d - 376, d - 949, f - 351, f);
    }
    await Promise[s("WH*Q", 433, 320) + s("2Bfx", 339, 342)]([this[s("Z8gK", 200, 281) + n(405, 483, 335, 531, "Z8gK") + "d"][a(1244, 1308, 1234, "GDZj")](i), this[a(1178, 1313, 1340, "8GJq") + o(1307, 1168, 1418, 1374, "o#t^") + "e"](e)]);
    function s(c, d, g, f, u) {
      return Ne(c - 12, g - -1116, g - 200, c);
    }
    this[r(532, "*1T3", 518, 393, 492) + a(1261, 1315, 1237, "[v1u") + o(1359, 1383, 1281, 1413, "[v1u")]();
  }
  async [Oe(422, 327, 368, 397, "ycFx") + Oe(439, 524, 489, 510, "[v1u") + "se"](i) {
    function t(a, s, c, d, g) {
      return Oe(a - 115, s - 220, d - -353, d - 14, s);
    }
    function e(a, s, c, d, g) {
      return Ne(a - 421, d - -890, c - 414, g);
    }
    function n(a, s, c, d, g) {
      return gt(g - 215, s - 130, c - 267, d - 73, s);
    }
    function o(a, s, c, d, g) {
      return Bt(a, s - 279, d - -1101);
    }
    function r(a, s, c, d, g) {
      return ue(a - 67, c, c - 58, d - 138, d - 1683);
    }
    try {
      if (r(1197, 1248, "PxIe", 1289, 1165) === r(1329, 1058, "WH*Q", 1190, 1195)) {
        const a = await fetch(i);
        if (!a.ok) {
          if (t(-91, "WH*Q", 42, -25, -79) !== r(1075, 1122, "0[aP", 1171, 1146)) throw new Error(o("&hm5", 241, 238, 132, 204) + e(504, 611, 680, 555, "AVwk") + t(19, "9d^2", -220, -85, -72) + t(104, "o#t^", 85, 48, 41) + "d.");
          return;
        }
        this[e(484, 443, 291, 413, "G%Y6") + "se"] = await a[e(529, 494, 505, 423, "8GJq")]();
      } else throw new _0x2db107(o("W8Gu", 308, 371, 274, 275) + o("Fzjs", 321, 281, 299, 344) + r(1340, 1175, "P0oM", 1223, 1312) + r(1228, 1223, "clHU", 1192, 1112) + ".");
    } catch (a) {
      if (r(1167, 1106, "GRk)", 1172) === n(-169, "3!rI", -122, -70, -152)) this[n(-415, "GRk)", -229, -406, -314) + "se"] = void (32 * 44 + -7 * 1302 + -2 * -3853), console[r(1344, 1215, "3MtM", 1230)](a);
      else return _0x524abc;
    }
  }
  async [Oe(363, 376, 495, 355, "0[aP") + Ne(1420, 1428, 1472, "wF7o") + "e"](i) {
    function t(r, a, s, c, d) {
      return Ne(r - 433, c - -11, s - 66, a);
    }
    if (this[t(1239, "&zkt", 1483, 1352) + t(1585, "GDZj", 1406, 1509)] = void (-1 * 1739 + 4831 * -2 + 877 * 13), !i)
      if (n(330, "[9Uh", 224) === t(1481, "8mSI", 1332, 1438)) _0x2385d3[e(-340, -355, "o#t^", -274)]();
      else {
        console[o("2Bfx", 581, 668, 604)](n(370, "W8Gu", 359) + t(1435, "O^po", 1406, 1392) + n(273, "3Ql]", 252) + o("clHU", 695, 695, 716) + e(-436, -320, "v$y9", -313)), this[o("G%Y6", 556, 505, 586) + "se"] = void (-4679 * -1 + 1391 * 7 + -14416);
        return;
      }
    function e(r, a, s, c, d) {
      return gt(a - 55, a - 400, s - 221, c - 303, s);
    }
    function n(r, a, s, c, d) {
      return Ne(r - 182, s - -1092, s - 110, a);
    }
    function o(r, a, s, c, d) {
      return Ne(r - 178, c - -717, s - 472, r);
    }
    await this[e(-542, -480, "XdgB", -575) + n(408, "WH*Q", 306) + "se"](i);
  }
  async [gt(-408, -521, -462, -354, "LzkN") + gt(-526, -573, -484, -509, "lLCw") + Bt("VlZx", 1269, 1358)](i) {
    function t(s, c, d, g, f) {
      return ue(s - 27, c, d - 261, g - 421, s - 1793);
    }
    if (i) {
      if (r(1096, 1041, 1207, ")^*S") === r(1182, 1210, 1058, "Zu$1")) return i;
      throw new _0x3cc7b4(a(59, "AVwk", 45) + n(-465, "GDZj", -426, -517, -431) + a(57, "P0oM", 22) + r(1186, 1290, 1284, "KrOZ") + ".");
    }
    function e(s, c, d, g, f) {
      return ue(s - 118, g, d - 187, g - 361, d - 635);
    }
    function n(s, c, d, g, f) {
      return Bt(c, c - 239, f - -1750);
    }
    if ((await fetch(this[a(218, "WH*Q", 215) + t(1167, "wF7o", 1229, 1200) + n(-553, "Fzjs", -364, -396, -493) + e(-68, -40, 53, "oZHI")][-652 + 2342 * -3 + 7678])).ok) {
      if (t(1240, "a1^p", 1300, 1370) === r(1278, 1178, 1238, "8GJq")) return this[t(1403, "9d^2", 1385, 1355) + a(-1, "o#t^", -116) + r(1218, 1335, 1294, "LzkN") + r(1290, 1212, 1190, "VwEH")][281 + -1 * 281];
      if (!this[n(-498, "clHU", -337, -279, -386) + "se"]) throw new _0x2564a1(a(233, "9d^2", 335) + r(1245, 1187, 1351, "*1T3") + r(1274, 1196, 1252, ")^*S") + e(109, 237, 208, "ws90") + ".");
      if (!this[e(297, 389, 250, "lLCw") + t(1283, "E$aY", 1263, 1250) + "d"][n(-246, "Z8gK", -238, -474, -374) + e(130, 272, 259, "*1T3") + t(1189, "AVwk", 1077, 1187) + "ed"]()) throw new _0x3a283f(n(-356, "W8Gu", -386, -436, -341) + r(1176, 1155, 1177, "GDZj") + e(-12, -33, 95, "&zkt") + n(-508, "kZY5", -443, -553, -488) + ".");
      this[e(215, 270, 180, "lLCw") + n(-493, "LzkN", -548, -422, -409)] = new _0x53d213(_0x41e6c6(this[e(194, 164, 273, "3MtM") + "se"], this[r(1139, 1143, 1173, "E$aY") + n(-398, "0[aP", -398, -342, -355)]())), this[n(-305, "Fzjs", -343, -225, -297) + e(106, 214, 223, "Fzjs") + "s"](this[a(152, "GRk)", 97) + a(219, "oZHI", 251)][r(1205, 1159, 1257, "&zkt") + "s"]), this[t(1297, "UP(5", 1311, 1272) + e(-80, 125, 39, "v$y9") + e(282, 172, 271, "a1^p")](this[r(1190, 1099, 1092, "wF7o") + t(1379, "KrOZ", 1361, 1496)][n(-325, "3!rI", -514, -560, -426) + t(1291, "clHU", 1350, 1172)]);
    }
    function r(s, c, d, g, f) {
      return Oe(s - 232, c - 467, s - 836, g - 288, g);
    }
    function a(s, c, d, g, f) {
      return Ne(s - 25, s - -1308, d - 424, c);
    }
    return this[a(224, "9d^2", 214) + t(1404, "E$aY", 1324, 1325) + e(282, 270, 187, "Z8gK") + r(1093, 1156, 1057, "lLCw")][-41 * -229 + 3017 + 2481 * -5];
  }
  [ue(-676, "3MtM", -468, -501, -562) + Ne(1406, 1373, 1285, "[9Uh") + "s"](i) {
    function t(e, n, o, r, a) {
      return gt(o - 658, n - 400, o - 492, r - 348, n);
    }
    i[t(-62, "&zkt", 68, 118) + "ch"]((e) => console[t(100, "pQTv", 157, 55)](e));
  }
  [Oe(422, 517, 392, 426, "*1T3") + Oe(361, 552, 434, 390, "WH*Q") + Oe(353, 309, 332, 251, "2Bfx")](i) {
    function t(n, o, r, a, s) {
      return Ne(n - 396, a - -1561, r - 49, n);
    }
    function e(n, o, r, a, s) {
      return ue(n - 407, a, r - 471, a - 110, n - 1513);
    }
    i[e(1093, 1024, 1072, "kZY5") + "ch"]((n) => console[t("WH*Q", -149, -96, -210)](n));
  }
  [Ne(1560, 1519, 1505, "KrOZ") + ue(-483, "pQTv", -332, -443, -354)]() {
    function i(e, n, o, r, a) {
      return Oe(e - 73, n - 96, n - -157, r - 244, o);
    }
    function t(e, n, o, r, a) {
      return Ne(e - 388, n - -136, o - 443, a);
    }
    return window[i(214, 182, "Zu$1", 140) + i(260, 180, "[v1u", 100)][t(1117, 1166, 1284, 1097, "[9Uh") + t(1207, 1257, 1198, 1224, "KrOZ")];
  }
  [gt(-371, -321, -300, -362, "8mSI") + ue(-615, "pQTv", -711, -697, -573) + ue(-405, "3MtM", -283, -296, -377)]() {
    function i(r, a, s, c, d) {
      return Ne(r - 319, r - -786, s - 334, s);
    }
    function t(r, a, s, c, d) {
      return Oe(r - 87, a - 172, a - -630, c - 291, c);
    }
    function e(r, a, s, c, d) {
      return ue(r - 260, r, s - 314, c - 451, s - 1267);
    }
    function n(r, a, s, c, d) {
      return gt(r - 1095, a - 285, s - 241, c - 104, a);
    }
    function o(r, a, s, c, d) {
      return ue(r - 223, d, s - 418, c - 438, r - 1077);
    }
    try {
      if (o(647, 659, 720, 676, "ws90") !== o(531, 497, 439, 566, "WH*Q")) return _0x3ecb8f[i(506, 557, "o#t^", 449, 645) + n(748, "8GJq", 723, 808, 644)][e("TiP2", 585, 679, 700, 758) + n(694, "&zkt", 575, 739, 601)];
      if (!this[e("o#t^", 758, 763, 626, 875) + "se"]) {
        if (o(502, 619, 585, 482, "oZHI") === i(737, 838, "&zkt", 631, 801)) throw new Ui(o(508, 388, 600, 573, "KrOZ") + i(636, 526, "3!rI", 686, 650) + n(616, "GDZj", 664, 604, 582) + i(700, 832, "oZHI", 698, 756) + ".");
        this[e("Zu$1", 782, 804, 699, 723) + "se"] = void (4e3 * -2 + 3012 + 4988), _0x215afb[o(579, 581, 460, 594, "&zkt")](_0x86a849);
      }
      if (!this[o(708, 809, 702, 754, "ycFx") + o(649, 731, 511, 537, "&zkt") + "d"][i(729, 811, "*1T3", 747, 820) + n(556, "a)rY", 675, 529, 673) + n(512, "&hm5", 565, 567, 488) + "ed"]()) {
        if (e("kZY5", 876, 879, 987, 861) === i(730, 607, "oZHI", 727, 650)) throw new Ui(t(-87, -187, -64, "WH*Q", -60) + o(642, 596, 725, 694, "VwEH") + i(604, 665, "Fzjs", 466, 555) + e("wF7o", 918, 915, 827, 919) + ".");
        this[e("&hm5", 688, 667, 580, 792) + t(-233, -163, -71, "kZY5", -264) + "d"] = _0x1cf20e;
      }
      this[e("W8Gu", 703, 672, 592, 762) + e("&zkt", 793, 817, 782, 884)] = new rs(W2(this[i(591, 468, "VlZx", 729, 652) + "se"], this[i(592, 483, "Q]OM", 537, 667) + n(719, "clHU", 633, 829, 647)]())), this[e("ws90", 810, 675, 806, 763) + n(699, "Q]OM", 698, 760, 628) + "s"](this[t(-250, -182, -105, "8GJq", -319) + i(697, 824, "*1T3", 761, 630)][o(487, 482, 481, 626, "kZY5") + "s"]), this[i(725, 761, "v$y9", 787, 787) + t(-379, -343, -303, "8GJq", -366) + n(716, "9d^2", 769, 788, 806)](this[e("clHU", 652, 638, 516, 616) + n(721, "3Ql]", 796, 646, 807)][i(534, 516, "Uf!9", 520, 534) + e("PxIe", 717, 808, 742, 909)]);
    } catch (r) {
      if (o(654, 721, 776, 666, "8GJq") === i(646, 545, "lLCw")) throw new _0x747746(t(-224, -194, -159, "VlZx") + e("GRk)", 663, 729, 760) + i(605, 741, "PxIe") + n(486, "Zu$1", 391, 538) + "d.");
      {
        if (r instanceof Ui)
          if (o(637, 533, 531, 523, "E$aY") === i(622, 681, "8GJq")) {
            _0x1939c8[n(669, "9d^2", 583, 583)](e("Zu$1", 841, 744, 881) + i(543, 632, "8GJq") + n(487, "VlZx", 610, 512) + n(738, "kZY5", 614, 603) + o(501, 547, 417, 566, "8GJq")), this[i(775, 908, "[v1u") + "se"] = void (-7009 * -1 + -6131 + 439 * -2);
            return;
          } else r[i(588, 540, "LzkN")]();
        else r instanceof Error && (t(-270, -315, -261, "o#t^") !== i(689, 818, "[9Uh") ? _0x3377ed[t(-247, -329, -211, "VlZx") + o(535, 439, 476, 399, "[v1u")](_0x445b6f) : console[e("P0oM", 801, 862, 919)](r));
        const a = {};
        a[t(-247, -374, -458, "AVwk") + e("P0oM", 828, 876, 1015)] = !1, a[o(585, 550, 514, 521, "wF7o") + "s"] = [], a[t(-198, -195, -316, "P0oM") + o(633, 507, 634, 737, "kZY5")] = [], a[e("O^po", 710, 700, 607) + t(-245, -228, -202, "VlZx") + n(705, "!5V5", 588, 739)] = void (549 * -9 + 4630 + 311), a[i(578, 517, "8GJq")] = function() {
        }, a[e("ws90", 751, 818, 854) + o(599, 556, 685, 693, "Z8gK")] = "", this[i(580, 446, "Zu$1") + o(541, 555, 539, 473, "P0oM")] = new rs(a);
      }
    }
  }
  [ue(-642, "W8Gu", -632, -400, -506) + gt(-430, -539, -532, -313, "ycFx") + ue(-487, "W8Gu", -504, -682, -574) + "t"]() {
    function i(e, n, o, r, a) {
      return Oe(e - 69, n - 127, a - 111, r - 189, e);
    }
    function t(e, n, o, r, a) {
      return gt(e - 1755, n - 264, o - 236, r - 437, o);
    }
    return this[t(1291, 1411, "0[aP", 1268) + i("&zkt", 597, 651, 390, 528)];
  }
  [ue(-356, "KrOZ", -296, -443, -373) + ue(-499, "E$aY", -494, -403, -469) + Ne(1525, 1477, 1552, "v$y9")]() {
    var r, a;
    function i(s, c, d, g, f) {
      return Ne(s - 152, c - -810, d - 188, g);
    }
    function t(s, c, d, g, f) {
      return ue(s - 23, s, d - 445, g - 395, c - 173);
    }
    function e(s, c, d, g, f) {
      return gt(c - 532, c - 189, d - 75, g - 264, g);
    }
    if (!this[i(627, 752, 646, "WH*Q") + "se"])
      if (i(524, 491, 435, "[v1u") === t("9d^2", -432, -339, -524)) {
        _0x424339 instanceof _0x2190d9 ? _0x97a3a1[i(619, 494, 586, "2Bfx")]() : _0x422375 instanceof _0x1ef2cc && _0x229326[n(1254, "jJ(V", 1261, 1388)](_0x2f9675);
        const s = {};
        s[e(192, 99, 111, "&hm5") + n(1241, "AVwk", 1104, 1366)] = !1, s[i(426, 525, 509, "!5V5") + "s"] = [], s[e(307, 183, 200, "lLCw") + e(133, 88, 195, "&hm5")] = [], s[e(148, 60, 111, "8mSI") + e(-139, -41, 73, "wF7o") + t("LzkN", -295, -349, -382)] = void (-2996 + 1498 * 2), s[e(177, 61, 48, "PxIe")] = function() {
        }, s[n(1121, "8GJq", 1069, 1107) + e(-15, 7, 71, "[v1u")] = "", this[n(1239, "pQTv", 1180, 1321) + e(37, -11, -87, "pQTv")] = new _0x61502c(s);
      } else return;
    function n(s, c, d, g, f) {
      return Oe(s - 50, c - 33, s - 848, g - 394, c);
    }
    function o(s, c, d, g, f) {
      return Oe(s - 110, c - 194, f - 58, g - 54, s);
    }
    try {
      if (o("Z8gK", 511, 667, 588, 562) === n(1289, "!5V5", 1386, 1224, 1219)) {
        const s = JSON[n(1341, "wF7o", 1207, 1317, 1364)](this[o("2Bfx", 386, 371, 637, 508) + "se"]);
        return (r = s == null ? void 0 : s[e(-103, 24, 113, "wF7o", 101) + n(1348, "P0oM", 1251, 1460, 1427)]) == null ? void 0 : r[e(288, 184, 207, "TiP2", 276) + o("[v1u", 444, 391, 344, 392)];
      } else _0x2b9288[i(548, 509, 602, "XdgB", 452) + "ch"]((s) => _0x4d3c87[i(394, 488, 556, "ws90", 597)](s));
    } catch (s) {
      if (i(686, 655, 760, "AVwk") === o("WH*Q", 562, 453, 457, 515)) {
        if (s instanceof Error)
          if (i(765, 741, 626, "3MtM") !== n(1335, "Fzjs", 1461, 1420)) {
            const c = _0x4ad844[e(-56, 56, 148, "2Bfx")](this[e(64, -37, -43, "3!rI") + "se"]);
            return (a = c == null ? void 0 : c[n(1093, "kZY5", 1097, 1188) + t("TiP2", -248, -361, -303)]) == null ? void 0 : a[t("3Ql]", -410, -399, -280) + n(1088, ")^*S", 1104, 1080)];
          } else oe[e(51, -14, -88, "8mSI") + o("ws90", 275, 245, 495, 362)](s);
        return;
      } else _0x5a0730[t("lLCw", -387, -470, -426)](_0x59849f);
    }
  }
}
const ai = class ai extends k2 {
  static getInstance() {
    if (!this._instance) {
      const i = new B2();
      this._instance = new ai(i);
    }
    return this._instance;
  }
};
E(ai, "_instance");
let Yo = ai;
const G2 = ({ children: x }) => {
  const i = At(null);
  return A1(i, Ht.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ O(Vu, { ref: i, children: x });
}, O2 = ({ cameraOptions: x }) => x ? /* @__PURE__ */ O(Gu, { target: x.styleTarget, children: /* @__PURE__ */ O(
  $u,
  {
    licensePath: x.licensePath,
    bramble: Yo.getInstance(),
    wasmDirectoryPath: x.wasmDirectoryPath,
    children: /* @__PURE__ */ O(nl, { analytics: b2, appKey: "5f83e83ee4cee1ab6e5bbf86e215644473299675", children: /* @__PURE__ */ O(
      ju,
      {
        value: C2({
          onError: x.onError
        }),
        children: /* @__PURE__ */ O(lc, { children: /* @__PURE__ */ O(G2, { children: /* @__PURE__ */ O(I2, { ...x }) }) })
      }
    ) })
  }
) }) : null;
Dg(O2, "x-dot-face-auto-capture", ["cameraOptions"]);
