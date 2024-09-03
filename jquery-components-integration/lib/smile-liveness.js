var Sg = Object.defineProperty;
var Ei = (x) => {
  throw TypeError(x);
};
var wg = (x, r, t) => r in x ? Sg(x, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : x[r] = t;
var M = (x, r, t) => wg(x, typeof r != "symbol" ? r + "" : r, t), Li = (x, r, t) => r.has(x) || Ei("Cannot " + t);
var j = (x, r, t) => (Li(x, r, "read from private field"), t ? t.call(x) : r.get(x)), ce = (x, r, t) => r.has(x) ? Ei("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(x) : r.set(x, t), ae = (x, r, t, e) => (Li(x, r, "write to private field"), e ? e.call(x, t) : r.set(x, t), t);
var Vn, D, os, is, x0, Ni, as, Mr, Eo, jr, Jr, ss, mn = {}, cs = [], Bg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, nr = Array.isArray;
function Tt(x, r) {
  for (var t in r) x[t] = r[t];
  return x;
}
function gs(x) {
  var r = x.parentNode;
  r && r.removeChild(x);
}
function Ne(x, r, t) {
  var e, n, o, i = {};
  for (o in r) o == "key" ? e = r[o] : o == "ref" ? n = r[o] : i[o] = r[o];
  if (arguments.length > 3 * -2329 + -1 * 9742 + -1 * -16731 && (i.children = arguments.length > 3 ? Vn.call(arguments, -1323 * 6 + -8923 + 16863) : t), typeof x == "function" && x.defaultProps != null)
    for (o in x.defaultProps) void (375 * 4 + 5059 + -1 * 6559) === i[o] && (i[o] = x.defaultProps[o]);
  return In(x, i, e, n, null);
}
function In(x, r, t, e, n) {
  var o = {};
  o.type = x, o.props = r, o.key = t, o.ref = e, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__d = void (5324 + 1331 * -4), o.__c = null, o.constructor = void (-88 * 73 + -6241 + 12665), o.__v = n ?? ++os, o.__i = -(-2022 * 1 + 1 * -5147 + 7170), o.__u = 0;
  var i = o;
  return n == null && D.vnode != null && D.vnode(i), i;
}
function Gg() {
  var x = {};
  return x.current = null, x;
}
function At(x) {
  return x.children;
}
function ut(x, r) {
  this.props = x, this.context = r;
}
function u0(x, r) {
  if (r == null) return x.__ ? u0(x.__, x.__i + (-2861 * 2 + -2604 + 8327)) : null;
  for (var t; r < x.__k.length; r++) if ((t = x.__k[r]) != null && t.__e != null) return t.__e;
  return typeof x.type == "function" ? u0(x) : null;
}
function ds(x) {
  var r, t;
  if ((x = x.__) != null && x.__c != null) {
    for (x.__e = x.__c.base = null, r = 1147 * 3 + 4892 + -8333; r < x.__k.length; r++) if ((t = x.__k[r]) != null && t.__e != null) {
      x.__e = x.__c.base = t.__e;
      break;
    }
    return ds(x);
  }
}
function _r(x) {
  (!x.__d && (x.__d = !(1661 * -2 + 43 * -147 + -1 * -9643)) && x0.push(x) && !Sx.__r++ || Ni !== D.debounceRendering) && ((Ni = D.debounceRendering) || as)(Sx);
}
function Sx() {
  var x, r, t, e, n, o, i, a;
  for (x0.sort(Mr); x = x0.shift(); ) x.__d && (r = x0.length, e = void (1361 * 4 + -5974 + 106 * 5), o = (n = (t = x).__v).__e, i = [], a = [], t.__P && ((e = Tt({}, n)).__v = n.__v + (9953 + -439 * 22 + -294), D.vnode && D.vnode(e), Lo(t.__P, e, n, t.__n, t.__P.namespaceURI, 1468 * -5 + -8403 * 1 + 15775 & n.__u ? [o] : null, i, o ?? u0(n), !!(119 + -1 * -9965 + 1 * -10052 & n.__u), a), e.__v = n.__v, e.__.__k[e.__i] = e, Is(i, e, a), e.__e != o && ds(e)), x0.length > r && x0.sort(Mr));
  Sx.__r = -5456 + -26 * -330 + -3124;
}
function us(x, r, t, e, n, o, i, a, s, c, l) {
  var g, h, u, C, p, A = e && e.__k || cs, d = r.length;
  for (t.__d = s, kg(t, r, A), s = t.__d, g = -1439 * -1 + -1 * -4328 + 79 * -73; g < d; g++) (u = t.__k[g]) != null && typeof u != "boolean" && typeof u != "function" && (h = -(-2857 + 19 * -55 + 3903) === u.__i ? mn : A[u.__i] || mn, u.__i = g, Lo(x, u, h, n, o, i, a, s, c, l), C = u.__e, u.ref && h.ref != u.ref && (h.ref && No(h.ref, null, u), l.push(u.ref, u.__c || C, u)), p == null && C != null && (p = C), 13 * -3661 + 73664 + -15 * -2631 & u.__u || h.__k === u.__k ? (s && typeof u.type == "string" && !x.contains(s) && (s = u0(h)), s = ls(u, s, x)) : typeof u.type == "function" && void (5 * -250 + -7574 + -4 * -2206) !== u.__d ? s = u.__d : C && (s = C.nextSibling), u.__d = void (55 * -121 + 7680 + 205 * -5), u.__u &= -(519910 + 1067 * -303));
  t.__d = s, t.__e = p;
}
function kg(x, r, t) {
  var e, n, o, i, a, s = r.length, c = t.length, l = c, g = -3 * -2708 + -1092 + -8 * 879;
  for (x.__k = [], e = -2636 * -1 + -5331 + 1 * 2695; e < s; e++) i = e + g, (n = x.__k[e] = (n = r[e]) == null || typeof n == "boolean" || typeof n == "function" ? null : typeof n == "string" || typeof n == "number" || typeof n == "bigint" || n.constructor == String ? In(null, n, null, null, null) : nr(n) ? In(At, { children: n }, null, null, null) : void (-8425 + -2 * 1606 + -27 * -431) === n.constructor && n.__b > -1321 * 2 + -6988 * 1 + 10 * 963 ? In(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v) : n) != null ? (n.__ = x, n.__b = x.__b + (-3089 + -1 * -2336 + 754), a = Hg(n, t, i, l), n.__i = a, o = null, -(-7266 * 1 + 28 * 122 + 3851 * 1) !== a && (l--, (o = t[a]) && (o.__u |= -13645 * -8 + -717 * 289 + -3525 * -65)), o == null || o.__v === null ? (-(1 * -9644 + 8944 + 701) == a && g--, typeof n.type != "function" && (n.__u |= -1377 * -79 + 1 * 108827 + 11698 * -13)) : a !== i && (a == i - 1 ? g = a - i : a == i + (-1 * -5687 + 2 * -4609 + -4 * -883) ? g++ : a > i ? l > s - i ? g += a - i : g-- : a < i && g++, a !== e + g && (n.__u |= 41 * 1877 + -4934 + -1 * 6487))) : (o = t[i]) && o.key == null && o.__e && !(-1 * 253349 + 10 * -16210 + 546521 & o.__u) && (o.__e == x.__d && (x.__d = u0(o)), Qr(o, o, !(-5 * -1862 + 2183 + -11492 * 1)), t[i] = null, l--);
  if (l)
    for (e = 0; e < c; e++) (o = t[e]) != null && 4 * -1201 + -3358 + 8162 == (131072 & o.__u) && (o.__e == x.__d && (x.__d = u0(o)), Qr(o, o));
}
function ls(x, r, t) {
  var e, n;
  if (typeof x.type == "function") {
    for (e = x.__k, n = -6131 + -1 * -2853 + 1 * 3278; e && n < e.length; n++) e[n] && (e[n].__ = x, r = ls(e[n], r, t));
    return r;
  }
  x.__e != r && (t.insertBefore(x.__e, r || null), r = x.__e);
  do
    r = r && r.nextSibling;
  while (r != null && 3 * -1081 + -1 * 873 + 4124 === r.nodeType);
  return r;
}
function Et(x, r) {
  return r = r || [], x == null || typeof x == "boolean" || (nr(x) ? x.some(function(t) {
    Et(t, r);
  }) : r.push(x)), r;
}
function Hg(x, r, t, e) {
  var n = x.key, o = x.type, i = t - (-6796 * 1 + 1 * -4463 + -11260 * -1), a = t + (-889 + 178 * 5), s = r[t];
  if (s === null || s && n == s.key && o === s.type && -2154 + -5105 * 1 + -119 * -61 == (6336 * -6 + -249926 + -46 * -9109 & s.__u)) return t;
  if (e > (s != null && -2747 * -1 + 27 * -347 + 6622 == (1307 * -1 + -247191 + 379570 & s.__u) ? 3818 + -3 * -602 + 5623 * -1 : 1 * -7631 + -6789 + 14420)) for (; i >= 1 * 4630 + -129 * 59 + 11 * 271 || a < r.length; ) {
    if (i >= -1 * 264 + -5086 + 5350) {
      if ((s = r[i]) && 9189 + -204 * 29 + -3 * 1091 == (-2417 * 47 + 7 * -10303 + 316792 & s.__u) && n == s.key && o === s.type) return i;
      i--;
    }
    if (a < r.length) {
      if ((s = r[a]) && 1 * -8579 + 5 * -689 + 12024 == (-371970 + 503042 * 1 & s.__u) && n == s.key && o === s.type) return a;
      a++;
    }
  }
  return -(36 * -142 + -6142 + 11255);
}
function Di(x, r, t) {
  r[1466 + -733 * 2] === "-" ? x.setProperty(r, t ?? "") : x[r] = t == null ? "" : typeof t != "number" || Bg.test(r) ? t : t + "px";
}
function $n(x, r, t, e, n) {
  var o;
  e: if (r === "style")
    if (typeof t == "string") x.style.cssText = t;
    else {
      if (typeof e == "string" && (x.style.cssText = e = ""), e)
        for (r in e) t && r in t || Di(x.style, r, "");
      if (t)
        for (r in t) e && t[r] === e[r] || Di(x.style, r, t[r]);
    }
  else if (r[0] === "o" && r[2953 * 1 + 7229 + -10181] === "n") o = r !== (r = r.replace(/(PointerCapture)$|Capture$/i, "$1")), r = r.toLowerCase() in x || r === "onFocusOut" || r === "onFocusIn" ? r.toLowerCase().slice(2) : r.slice(-3001 * 2 + 542 * 9 + 1126), x.l || (x.l = {}), x.l[r + o] = t, t ? e ? t.u = e.u : (t.u = Eo, x.addEventListener(r, o ? Jr : jr, o)) : x.removeEventListener(r, o ? Jr : jr, o);
  else {
    if (n == "http://www.w3.org/2000/svg") r = r.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (r != "width" && r != "height" && r != "href" && r != "list" && r != "form" && r != "tabIndex" && r != "download" && r != "rowSpan" && r != "colSpan" && r != "role" && r != "popover" && r in x) try {
      x[r] = t ?? "";
      break e;
    } catch {
    }
    typeof t == "function" || (t == null || !(-5282 * 1 + 5 * -1059 + -5289 * -2) === t && r[19 * -195 + 9741 + -4 * 1508] !== "-" ? x.removeAttribute(r) : x.setAttribute(r, r == "popover" && 2759 * -1 + -1 * -2490 + 270 == t ? "" : t));
  }
}
function Fi(x) {
  return function(r) {
    if (this.l) {
      var t = this.l[r.type + x];
      if (r.t == null) r.t = Eo++;
      else if (r.t < t.u) return;
      return t(D.event ? D.event(r) : r);
    }
  };
}
function Lo(x, r, t, e, n, o, i, a, s, c) {
  var l, g, h, u, C, p, A, d, W, k, N, Y, X, Z, _, Ie, U = r.type;
  if (void (8199 + -1 * -2406 + 105 * -101) !== r.constructor) return null;
  7 * -289 + -4773 + -3462 * -2 & t.__u && (s = !!(-1 * 9998 + 4779 + -89 * -59 & t.__u), o = [a = r.__e = t.__e]), (l = D.__b) && l(r);
  e: if (typeof U == "function") try {
    if (d = r.props, W = "prototype" in U && U.prototype.render, k = (l = U.contextType) && e[l.__c], N = l ? k ? k.props.value : l.__ : e, t.__c ? A = (g = r.__c = t.__c).__ = g.__E : (W ? r.__c = g = new U(d, N) : (r.__c = g = new ut(d, N), g.constructor = U, g.render = Zg), k && k.sub(g), g.props = d, g.state || (g.state = {}), g.context = N, g.__n = e, h = g.__d = !0, g.__h = [], g._sb = []), W && g.__s == null && (g.__s = g.state), W && U.getDerivedStateFromProps != null && (g.__s == g.state && (g.__s = Tt({}, g.__s)), Tt(g.__s, U.getDerivedStateFromProps(d, g.__s))), u = g.props, C = g.state, g.__v = r, h) W && U.getDerivedStateFromProps == null && g.componentWillMount != null && g.componentWillMount(), W && g.componentDidMount != null && g.__h.push(g.componentDidMount);
    else {
      if (W && U.getDerivedStateFromProps == null && d !== u && g.componentWillReceiveProps != null && g.componentWillReceiveProps(d, N), !g.__e && (g.shouldComponentUpdate != null && !(3363 + 849 * -1 + -7 * 359) === g.shouldComponentUpdate(d, g.__s, N) || r.__v === t.__v)) {
        for (r.__v !== t.__v && (g.props = d, g.state = g.__s, g.__d = !(68 * 145 + 7501 + -2 * 8680)), r.__e = t.__e, r.__k = t.__k, r.__k.forEach(function(fe) {
          fe && (fe.__ = r);
        }), Y = -59 + -51 * 185 + 9494; Y < g._sb.length; Y++) g.__h.push(g._sb[Y]);
        g._sb = [], g.__h.length && i.push(g);
        break e;
      }
      g.componentWillUpdate != null && g.componentWillUpdate(d, g.__s, N), W && g.componentDidUpdate != null && g.__h.push(function() {
        g.componentDidUpdate(u, C, p);
      });
    }
    if (g.context = N, g.props = d, g.__P = x, g.__e = !(-6047 * 1 + -5 * -709 + 1 * 2503), X = D.__r, Z = -4369 + 2671 * -3 + -302 * -41, W) {
      for (g.state = g.__s, g.__d = !(-3109 * -2 + -2233 + -664 * 6), X && X(r), l = g.render(g.props, g.state, g.context), _ = -5844 + 974 * 6; _ < g._sb.length; _++) g.__h.push(g._sb[_]);
      g._sb = [];
    } else do
      g.__d = !(-5 * -1979 + -3244 + -6650), X && X(r), l = g.render(g.props, g.state, g.context), g.state = g.__s;
    while (g.__d && ++Z < -4308 + -1 * -4333);
    g.state = g.__s, g.getChildContext != null && (e = Tt(Tt({}, e), g.getChildContext())), W && !h && g.getSnapshotBeforeUpdate != null && (p = g.getSnapshotBeforeUpdate(u, C)), us(x, nr(Ie = l != null && l.type === At && l.key == null ? l.props.children : l) ? Ie : [Ie], r, t, e, n, o, i, a, s, c), g.base = r.__e, r.__u &= -(-1821 + 2 * 991), g.__h.length && i.push(g), A && (g.__E = g.__ = null);
  } catch (fe) {
    r.__v = null, s || o != null ? (r.__e = a, r.__u |= s ? 66 + 1 * -328 + 422 : 1 * 3022 + -122 * -43 + -2 * 4118, o[o.indexOf(a)] = null) : (r.__e = t.__e, r.__k = t.__k), D.__e(fe, r, t);
  }
  else o == null && r.__v === t.__v ? (r.__k = t.__k, r.__e = t.__e) : r.__e = Og(t.__e, r, t, e, n, o, i, s, c);
  (l = D.diffed) && l(r);
}
function Is(x, r, t) {
  r.__d = void (-35 * 5 + -7192 + 7367);
  for (var e = 1434 + 1 * 7207 + -8641; e < t.length; e++) No(t[e], t[++e], t[++e]);
  D.__c && D.__c(r, x), x.some(function(n) {
    try {
      x = n.__h, n.__h = [], x.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      D.__e(o, n.__v);
    }
  });
}
function Og(x, r, t, e, n, o, i, a, s) {
  var c, l, g, h, u, C, p, A = t.props, d = r.props, W = r.type;
  if (W === "svg" ? n = "http://www.w3.org/2000/svg" : W === "math" ? n = "http://www.w3.org/1998/Math/MathML" : n || (n = "http://www.w3.org/1999/xhtml"), o != null) {
    for (c = -334 * -16 + -3401 + -1943; c < o.length; c++) if ((u = o[c]) && "setAttribute" in u == !!W && (W ? u.localName === W : -3981 + 807 * -4 + 3606 * 2 === u.nodeType)) {
      x = u, o[c] = null;
      break;
    }
  }
  if (x == null) {
    if (W === null) return document.createTextNode(d);
    x = document.createElementNS(n, W, d.is && d), o = null, a = !(10506 + -5 * 2101);
  }
  if (W === null) A === d || a && x.data === d || (x.data = d);
  else {
    if (o = o && Vn.call(x.childNodes), A = t.props || mn, !a && o != null)
      for (A = {}, c = 7280 + 1 * -2373 + -4907; c < x.attributes.length; c++) A[(u = x.attributes[c]).name] = u.value;
    for (c in A) if (u = A[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") g = u;
      else if (c !== "key" && !(c in d)) {
        if (c == "value" && "defaultValue" in d || c == "checked" && "defaultChecked" in d) continue;
        $n(x, c, null, u, n);
      }
    }
    for (c in d) u = d[c], c == "children" ? h = u : c == "dangerouslySetInnerHTML" ? l = u : c == "value" ? C = u : c == "checked" ? p = u : c === "key" || a && typeof u != "function" || A[c] === u || $n(x, c, u, A[c], n);
    if (l) a || g && (l.__html === g.__html || l.__html === x.innerHTML) || (x.innerHTML = l.__html), r.__k = [];
    else if (g && (x.innerHTML = ""), us(x, nr(h) ? h : [h], r, t, e, W === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n, o, i, o ? o[-3760 + 613 * -10 + 43 * 230] : t.__k && u0(t, 9663 * 1 + -6727 * 1 + -2936), a, s), o != null)
      for (c = o.length; c--; ) o[c] != null && gs(o[c]);
    a || (c = "value", void (-5 * -526 + 1 * 9593 + 12223 * -1) !== C && (C !== x[c] || W === "progress" && !C || W === "option" && C !== A[c]) && $n(x, c, C, A[c], n), c = "checked", void (1633 * -5 + -508 + 8673) !== p && p !== x[c] && $n(x, c, p, A[c], n));
  }
  return x;
}
function No(x, r, t) {
  try {
    typeof x == "function" ? x(r) : x.current = r;
  } catch (e) {
    D.__e(e, t);
  }
}
function Qr(x, r, t) {
  var e, n;
  if (D.unmount && D.unmount(x), (e = x.ref) && (e.current && e.current !== x.__e || No(e, null, r)), (e = x.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (o) {
      D.__e(o, r);
    }
    e.base = e.__P = null;
  }
  if (e = x.__k)
    for (n = 7265 + 1453 * -5; n < e.length; n++) e[n] && Qr(e[n], r, t || typeof x.type != "function");
  t || x.__e == null || gs(x.__e), x.__c = x.__ = x.__e = x.__d = void (-269 * -1 + -89 * 23 + 127 * 14);
}
function Zg(x, r, t) {
  return this.constructor(x, t);
}
function _t(x, r, t) {
  var e, n, o, i;
  D.__ && D.__(x, r), n = (e = typeof t == "function") ? null : t && t.__k || r.__k, o = [], i = [], Lo(r, x = (!e && t || r).__k = Ne(At, null, [x]), n || mn, mn, r.namespaceURI, !e && t ? [t] : n ? null : r.firstChild ? Vn.call(r.childNodes) : null, o, !e && t ? t : n ? n.__e : r.firstChild, e, i), Is(o, x, i);
}
function Do(x, r) {
  _t(x, r, Do);
}
function Fo(x, r, t) {
  var e, n, o, i, a = Tt({}, x.props);
  for (o in x.type && x.type.defaultProps && (i = x.type.defaultProps), r) o == "key" ? e = r[o] : o == "ref" ? n = r[o] : a[o] = void (587 * 11 + -5783 * 1 + -674) === r[o] && void (2 * 1882 + -1929 + -1 * 1835) !== i ? i[o] : r[o];
  return arguments.length > 23 * -79 + -4534 + 6353 && (a.children = arguments.length > 3 ? Vn.call(arguments, -2 * 4076 + 5801 * 1 + 181 * 13) : t), In(x.type, a, e || x.key, n || x.ref, null);
}
function Tn(x, r) {
  var t = { __c: r = "__cC" + ss++, __: x, Consumer: function(e, n) {
    return e.children(n);
  }, Provider: function(e) {
    var n, o;
    return this.getChildContext || (n = [], (o = {})[r] = this, this.getChildContext = function() {
      return o;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value !== i.value && n.some(function(a) {
        a.__e = !0, _r(a);
      });
    }, this.sub = function(i) {
      n.push(i);
      var a = i.componentWillUnmount;
      i.componentWillUnmount = function() {
        n && n.splice(n.indexOf(i), 1), a && a.call(i);
      };
    }), e.children;
  } };
  return t.Provider.__ = t.Consumer.contextType = t;
}
Vn = cs.slice, D = { __e: function(x, r, t, e) {
  for (var n, o, i; r = r.__; ) if ((n = r.__c) && !n.__) try {
    if ((o = n.constructor) && o.getDerivedStateFromError != null && (n.setState(o.getDerivedStateFromError(x)), i = n.__d), n.componentDidCatch != null && (n.componentDidCatch(x, e || {}), i = n.__d), i) return n.__E = n;
  } catch (a) {
    x = a;
  }
  throw x;
} }, os = 1 * -3899 + -1 * 367 + 158 * 27, is = function(x) {
  return x != null && x.constructor == null;
}, ut.prototype.setState = function(x, r) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Tt({}, this.state), typeof x == "function" && (x = x(Tt({}, t), this.props)), x && Tt(t, x), x != null && this.__v && (r && this._sb.push(r), _r(this));
}, ut.prototype.forceUpdate = function(x) {
  this.__v && (this.__e = !(-6899 + 1 * 6899), x && this.__h.push(x), _r(this));
}, ut.prototype.render = At, x0 = [], as = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Mr = function(x, r) {
  return x.__v.__b - r.__v.__b;
}, Sx.__r = -1 * 5949 + -4884 + 10833, Eo = -5951 + -1 * 562 + -13 * -501, jr = Fi(!(-7566 + 5543 * -1 + 6 * 2185)), Jr = Fi(!(-47 * -10 + 4911 + 1 * -5381)), ss = 0;
function Yo() {
  return (Yo = Object.assign ? Object.assign.bind() : function(x) {
    for (var r = 1521 + 10 * -152; r < arguments.length; r++) {
      var t = arguments[r];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (x[e] = t[e]);
    }
    return x;
  }).apply(this, arguments);
}
var Kg = ["context", "children"];
function Rg(x) {
  this.getChildContext = function() {
    return x.context;
  };
  var r = x.children, t = function(e, n) {
    if (e == null) return {};
    var o, i, a = {}, s = Object.keys(e);
    for (i = 1 * 5483 + 2925 + 8 * -1051; i < s.length; i++) n.indexOf(o = s[i]) >= -855 * 1 + -1741 + 2596 || (a[o] = e[o]);
    return a;
  }(x, Kg);
  return Fo(r, t);
}
function Pg() {
  var x = {};
  x.detail = {}, x.bubbles = !(-41 * -11 + 4039 + -4490), x.cancelable = !(44 * -46 + -539 * 11 + 7953);
  var r = new CustomEvent("_preact", x);
  this.dispatchEvent(r), this._vdom = Ne(Rg, Yo({}, this._props, { context: r.detail.context }), function t(e, n) {
    if (e.nodeType === 3) return e.data;
    if (e.nodeType !== 1) return null;
    var o = [], i = {}, a = -1 * -8511 + -9031 + 520, s = e.attributes, c = e.childNodes;
    for (a = s.length; a--; ) s[a].name !== "slot" && (i[s[a].name] = s[a].value, i[fs(s[a].name)] = s[a].value);
    for (a = c.length; a--; ) {
      var l = t(c[a], null), g = c[a].slot;
      g ? i[g] = Ne(Yi, { name: g }, l) : o[a] = l;
    }
    var h = n ? Ne(Yi, null, o) : o;
    return Ne(n || e.nodeName.toLowerCase(), i, h);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Do : _t)(this._vdom, this._root);
}
function fs(x) {
  return x.replace(/-(\w)/g, function(r, t) {
    return t ? t.toUpperCase() : "";
  });
}
function Vg(x, r, t) {
  if (this._vdom) {
    var e = {};
    e[x] = t = t ?? void (3291 + 4 * -2484 + 1329 * 5), e[fs(x)] = t, this._vdom = Fo(this._vdom, e), _t(this._vdom, this._root);
  }
}
function Tg() {
  _t(this._vdom = null, this._root);
}
function Yi(x, r) {
  var t = this;
  return Ne("slot", Yo({}, x, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(n) {
      n.stopPropagation(), n.detail.context = r;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function Eg(x, r, t, e) {
  function n() {
    var o = Reflect.construct(HTMLElement, [], n);
    return o._vdomComponent = x, o._root = o, o;
  }
  return (n.prototype = Object.create(HTMLElement.prototype)).constructor = n, n.prototype.connectedCallback = Pg, n.prototype.attributeChangedCallback = Vg, n.prototype.disconnectedCallback = Tg, t = t || x.observedAttributes || Object.keys(x.propTypes || {}), n.observedAttributes = t, t.forEach(function(o) {
    Object.defineProperty(n.prototype, o, { get: function() {
      return this._vdom.props[o];
    }, set: function(i) {
      this._vdom ? this.attributeChangedCallback(o, null, i) : (this._props || (this._props = {}), this._props[o] = i, this.connectedCallback());
      var a = typeof i;
      i != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(o, i);
    } });
  }), customElements.define(r, n);
}
var Lg = 1408 * -7 + -5031 + 14887;
function O(x, r, t, e, n, o) {
  r || (r = {});
  var i, a, s = r;
  if ("ref" in s)
    for (a in s = {}, r) a == "ref" ? i = r[a] : s[a] = r[a];
  var c = {};
  c.type = x, c.props = s, c.key = t, c.ref = i, c.__k = null, c.__ = null, c.__b = 0, c.__e = null, c.__d = void (1919 * 3 + -16 * 511 + -2419 * -1), c.__c = null, c.constructor = void (1 * -4717 + 789 * -2 + 5 * 1259), c.__v = --Lg, c.__i = -(-3581 + 3582 * 1), c.__u = 0, c.__source = n, c.__self = o;
  var l = c;
  if (typeof x == "function" && (i = x.defaultProps))
    for (a in i) void (-9642 + 4821 * 2) === s[a] && (s[a] = i[a]);
  return D.vnode && D.vnode(l), l;
}
var Qe = function() {
  return Qe = Object.assign || function(r) {
    for (var t, e = 1, n = arguments.length; e < n; e++) {
      t = arguments[e];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o]);
    }
    return r;
  }, Qe.apply(this, arguments);
};
function D0(x, r, t) {
  if (t || arguments.length === 2) for (var e = 0, n = r.length, o; e < n; e++)
    (o || !(e in r)) && (o || (o = Array.prototype.slice.call(r, 0, e)), o[e] = r[e]);
  return x.concat(o || Array.prototype.slice.call(r));
}
function Ng(x) {
  var r = Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = x(t)), r[t];
  };
}
var Dg = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Fg = Ng(function(x) {
  return Dg.test(x) || x.charCodeAt(-1925 * 5 + 3 * -1681 + 14668) === -1 * 1556 + -8852 + 67 * 157 && x.charCodeAt(7204 * -1 + 6461 + 744) === 13 * 553 + -1858 + 1 * -5221 && x.charCodeAt(1719 + -101 * 17) < 2569 + -354 * 7;
}), Qt, oe, Gr, Xi, F0 = -3373 * -2 + -9118 * -1 + -15864, Cs = [], se = D, Mi = se.__b, ji = se.__r, Ji = se.diffed, _i = se.__c, Qi = se.unmount, Ui = se.__;
function Q0(x, r) {
  se.__h && se.__h(oe, x, F0 || r), F0 = 8900 + -3547 * -1 + -12447;
  var t = {};
  t.__ = [], t.__h = [];
  var e = oe.__H || (oe.__H = t);
  return x >= e.__.length && e.__.push({}), e.__[x];
}
function et(x) {
  return F0 = 1 * -2323 + -3457 + 5781, Xo(ms, x);
}
function Xo(x, r, t) {
  var e = Q0(Qt++, 2);
  if (e.t = x, !e.__c && (e.__ = [t ? t(r) : ms(void (6469 + -437 * 9 + -2536), r), function(a) {
    var s = e.__N ? e.__N[0] : e.__[0], c = e.t(s, a);
    s !== c && (e.__N = [c, e.__[4405 + -66 * -123 + 6261 * -2]], e.__c.setState({}));
  }], e.__c = oe, !oe.u)) {
    var n = function(a, s, c) {
      if (!e.__c.__H) return !0;
      var l = e.__c.__H.__.filter(function(h) {
        return !!h.__c;
      });
      if (l.every(function(h) {
        return !h.__N;
      })) return !o || o.call(this, a, s, c);
      var g = !(3744 + 8 * -769 + 2409);
      return l.forEach(function(h) {
        if (h.__N) {
          var u = h.__[0];
          h.__ = h.__N, h.__N = void 0, u !== h.__[0] && (g = !0);
        }
      }), !(!g && e.__c.props === a) && (!o || o.call(this, a, s, c));
    };
    oe.u = !(191 * -33 + 3817 + -226 * -11);
    var o = oe.shouldComponentUpdate, i = oe.componentWillUpdate;
    oe.componentWillUpdate = function(a, s, c) {
      if (this.__e) {
        var l = o;
        o = void (2981 * 1 + 301 * -33 + -2 * -3476), n(a, s, c), o = l;
      }
      i && i.call(this, a, s, c);
    }, oe.shouldComponentUpdate = n;
  }
  return e.__N || e.__;
}
function we(x, r) {
  var t = Q0(Qt++, 3);
  !se.__s && Mo(t.__H, r) && (t.__ = x, t.i = r, oe.__H.__h.push(t));
}
function U0(x, r) {
  var t = Q0(Qt++, 4);
  !se.__s && Mo(t.__H, r) && (t.__ = x, t.i = r, oe.__h.push(t));
}
function Nt(x) {
  return F0 = -8606 + -109 * -79, tt(function() {
    var r = {};
    return r.current = x, r;
  }, []);
}
function hs(x, r, t) {
  F0 = -2119 * 1 + -4180 + -65 * -97, U0(function() {
    return typeof x == "function" ? (x(r()), function() {
      return x(null);
    }) : x ? (x.current = r(), function() {
      return x.current = null;
    }) : void 0;
  }, t == null ? t : t.concat(x));
}
function tt(x, r) {
  var t = Q0(Qt++, 7);
  return Mo(t.__H, r) && (t.__ = x(), t.__H = r, t.__h = x), t.__;
}
function Y0(x, r) {
  return F0 = -1749 + -7 * -251, tt(function() {
    return x;
  }, r);
}
function h0(x) {
  var r = oe.context[x.__c], t = Q0(Qt++, -2 * 351 + -3803 * 2 + 8317 * 1);
  return t.c = x, r ? (t.__ == null && (t.__ = !(-8987 + -4578 * 1 + 2713 * 5), r.sub(oe)), r.props.value) : x.__;
}
function wx(x, r) {
  se.useDebugValue && se.useDebugValue(r ? r(x) : x);
}
function ps() {
  var x = Q0(Qt++, 11);
  if (!x.__) {
    for (var r = oe.__v; r !== null && !r.__m && r.__ !== null; ) r = r.__;
    var t = r.__m || (r.__m = [-2 * -2515 + 4671 + -9701, 108 * -29 + -4 * 1945 + 10912]);
    x.__ = "P" + t[1 * 9683 + 211 * -46 + 23] + "-" + t[-1688 + 8353 * -1 + 10042]++;
  }
  return x.__;
}
function Yg() {
  for (var x; x = Cs.shift(); ) if (x.__P && x.__H) try {
    x.__H.__h.forEach(gx), x.__H.__h.forEach(Ur), x.__H.__h = [];
  } catch (r) {
    x.__H.__h = [], se.__e(r, x.__v);
  }
}
se.__b = function(x) {
  oe = null, Mi && Mi(x);
}, se.__ = function(x, r) {
  x && r.__k && r.__k.__m && (x.__m = r.__k.__m), Ui && Ui(x, r);
}, se.__r = function(x) {
  ji && ji(x), Qt = -860 * 6 + -130 * -46 + -820;
  var r = (oe = x.__c).__H;
  r && (Gr === oe ? (r.__h = [], oe.__h = [], r.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (37 * -89 + 42 * -201 + -11735 * -1);
  })) : (r.__h.forEach(gx), r.__h.forEach(Ur), r.__h = [], Qt = 1 * -9697 + -8076 + -7 * -2539)), Gr = oe;
}, se.diffed = function(x) {
  Ji && Ji(x);
  var r = x.__c;
  r && r.__H && (r.__H.__h.length && (-5258 * 1 + -1 * -8891 + -3632 !== Cs.push(r) && Xi === se.requestAnimationFrame || ((Xi = se.requestAnimationFrame) || Xg)(Yg)), r.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (3830 + -1 * -6957 + 1541 * -7);
  })), Gr = oe = null;
}, se.__c = function(x, r) {
  r.some(function(t) {
    try {
      t.__h.forEach(gx), t.__h = t.__h.filter(function(e) {
        return !e.__ || Ur(e);
      });
    } catch (e) {
      r.some(function(n) {
        n.__h && (n.__h = []);
      }), r = [], se.__e(e, t.__v);
    }
  }), _i && _i(x, r);
}, se.unmount = function(x) {
  Qi && Qi(x);
  var r, t = x.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      gx(e);
    } catch (n) {
      r = n;
    }
  }), t.__H = void (-2173 + -32 * 310 + 12093), r && se.__e(r, t.__v));
};
var zi = typeof requestAnimationFrame == "function";
function Xg(x) {
  var r, t = function() {
    clearTimeout(e), zi && cancelAnimationFrame(r), setTimeout(x);
  }, e = setTimeout(t, 100);
  zi && (r = requestAnimationFrame(t));
}
function gx(x) {
  var r = oe, t = x.__c;
  typeof t == "function" && (x.__c = void 0, t()), oe = r;
}
function Ur(x) {
  var r = oe;
  x.__c = x.__(), oe = r;
}
function Mo(x, r) {
  return !x || x.length !== r.length || r.some(function(t, e) {
    return t !== x[e];
  });
}
function ms(x, r) {
  return typeof r == "function" ? r(x) : r;
}
function bs(x, r) {
  for (var t in r) x[t] = r[t];
  return x;
}
function zr(x, r) {
  for (var t in x) if (t !== "__source" && !(t in r)) return !(-8174 + 3 * -1970 + -1 * -14084);
  for (var e in r) if (e !== "__source" && x[e] !== r[e]) return !(-2760 * -2 + 17 * -3 + -5469);
  return !(-53 + -50 * 40 + 2054);
}
function qr(x, r) {
  this.props = x, this.context = r;
}
function Mg(x, r) {
  function t(n) {
    var o = this.props.ref, i = o == n.ref;
    return !i && o && (o.call ? o(null) : o.current = null), r ? !r(this.props, n) || !i : zr(this.props, n);
  }
  function e(n) {
    return this.shouldComponentUpdate = t, Ne(x, n);
  }
  return e.displayName = "Memo(" + (x.displayName || x.name) + ")", e.prototype.isReactComponent = !(-2121 + 97 * -75 + -87 * -108), e.__f = !(-6702 + -6 * -181 + 5616), e;
}
(qr.prototype = new ut()).isPureReactComponent = !(-7607 + -7607 * -1), qr.prototype.shouldComponentUpdate = function(x, r) {
  return zr(this.props, x) || zr(this.state, r);
};
var qi = D.__b;
D.__b = function(x) {
  x.type && x.type.__f && x.ref && (x.props.ref = x.ref, x.ref = null), qi && qi(x);
};
var jg = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 5217 + 2 * -653;
function As(x) {
  function r(t) {
    var e = bs({}, t);
    return delete e.ref, x(e, t.ref || null);
  }
  return r.$$typeof = jg, r.render = r, r.prototype.isReactComponent = r.__f = !(-5343 + -123 * -11 + -6 * -665), r.displayName = "ForwardRef(" + (x.displayName || x.name) + ")", r;
}
var $i = function(x, r) {
  return x == null ? null : Et(Et(x).map(r));
}, Jg = { map: $i, forEach: $i, count: function(x) {
  return x ? Et(x).length : -283 * -35 + -8288 + -1 * 1617;
}, only: function(x) {
  var r = Et(x);
  if (-5134 + -5 * -1027 !== r.length) throw "Children.only";
  return r[113 * -79 + 4878 + -4049 * -1];
}, toArray: Et }, _g = D.__e;
D.__e = function(x, r, t, e) {
  if (x.then) {
    for (var n, o = r; o = o.__; ) if ((n = o.__c) && n.__c) return r.__e == null && (r.__e = t.__e, r.__k = t.__k), n.__c(x, r);
  }
  _g(x, r, t, e);
};
var ea = D.unmount;
function ys(x, r, t) {
  return x && (x.__c && x.__c.__H && (x.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), x.__c.__H = null), (x = bs({}, x)).__c != null && (x.__c.__P === t && (x.__c.__P = r), x.__c = null), x.__k = x.__k && x.__k.map(function(e) {
    return ys(e, r, t);
  })), x;
}
function Ws(x, r, t) {
  return x && t && (x.__v = null, x.__k = x.__k && x.__k.map(function(e) {
    return Ws(e, r, t);
  }), x.__c && x.__c.__P === r && (x.__e && t.appendChild(x.__e), x.__c.__e = !(-342 * 5 + -575 + 2285 * 1), x.__c.__P = t)), x;
}
function dx() {
  this.__u = 4 * -1769 + 3 * 143 + 23 * 289, this.t = null, this.__b = null;
}
function vs(x) {
  var r = x.__.__c;
  return r && r.__a && r.__a(x);
}
function Qg(x) {
  var r, t, e;
  function n(o) {
    if (r || (r = x()).then(function(i) {
      t = i.default || i;
    }, function(i) {
      e = i;
    }), e) throw e;
    if (!t) throw r;
    return Ne(t, o);
  }
  return n.displayName = "Lazy", n.__f = !(1115 + -223 * 5), n;
}
function an() {
  this.u = null, this.o = null;
}
D.unmount = function(x) {
  var r = x.__c;
  r && r.__R && r.__R(), r && 8587 + 59 * -145 & x.__u && (x.type = null), ea && ea(x);
}, (dx.prototype = new ut()).__c = function(x, r) {
  var t = r.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var n = vs(e.__v), o = !(-1447 + 724 * 2), i = function() {
    o || (o = !(283 * 13 + 25 * 398 + -13629), t.__R = null, n ? n(a) : a());
  };
  t.__R = i;
  var a = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var s = e.state.__a;
        e.__v.__k[0] = Ws(s, s.__c.__P, s.__c.__O);
      }
      var c;
      for (e.setState({ __a: e.__b = null }); c = e.t.pop(); ) c.forceUpdate();
    }
  };
  e.__u++ || 127 * -55 + 9060 + -227 * 9 & r.__u || e.setState({ __a: e.__b = e.__v.__k[0] }), x.then(i, i);
}, dx.prototype.componentWillUnmount = function() {
  this.t = [];
}, dx.prototype.render = function(x, r) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[-8734 + -361 * -5 + 6929].__c;
      this.__v.__k[-8693 + -1 * -5623 + -307 * -10] = ys(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var n = r.__a && Ne(At, null, x.fallback);
  return n && (n.__u &= -(-573 * -1 + -6441 + 5901)), [Ne(At, null, r.__a ? null : x.children), n];
};
var ta = function(x, r, t) {
  if (++t[1] === t[0] && x.o.delete(r), x.props.revealOrder && (x.props.revealOrder[7196 + -7196 * 1] !== "t" || !x.o.size)) for (t = x.u; t; ) {
    for (; t.length > -2 * -2383 + 9934 + -71 * 207; ) t.pop()();
    if (t[94 * 67 + 1271 * 5 + -12652] < t[-154 * -41 + -7589 + 1275 * 1]) break;
    x.u = t = t[-86 + -2752 * -3 + 4084 * -2];
  }
};
function Ug(x) {
  return this.getChildContext = function() {
    return x.context;
  }, x.children;
}
function zg(x) {
  var r = this, t = x.i;
  r.componentWillUnmount = function() {
    _t(null, r.l), r.l = null, r.i = null;
  }, r.i && r.i !== t && r.componentWillUnmount(), r.l || (r.i = t, r.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !0;
  }, appendChild: function(e) {
    this.childNodes.push(e), r.i.appendChild(e);
  }, insertBefore: function(e, n) {
    this.childNodes.push(e), r.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> -2 * -4295 + -4201 * 1 + -2194 * 2, 1), r.i.removeChild(e);
  } }), _t(Ne(Ug, { context: r.context }, x.__v), r.l);
}
function qg(x, r) {
  var t = {};
  t.__v = x, t.i = r;
  var e = Ne(zg, t);
  return e.containerInfo = r, e;
}
(an.prototype = new ut()).__a = function(x) {
  var r = this, t = vs(r.__v), e = r.o.get(x);
  return e[1 * -6701 + -29 * -281 + -1448]++, function(n) {
    var o = function() {
      r.props.revealOrder ? (e.push(n), ta(r, x, e)) : n();
    };
    t ? t(o) : o();
  };
}, an.prototype.render = function(x) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var r = Et(x.children);
  x.revealOrder && x.revealOrder[6871 + 3 * -2591 + 451 * 2] === "b" && r.reverse();
  for (var t = r.length; t--; ) this.o.set(r[t], this.u = [-2810 + -1 * -2811, 0, this.u]);
  return x.children;
}, an.prototype.componentDidUpdate = an.prototype.componentDidMount = function() {
  var x = this;
  this.o.forEach(function(r, t) {
    ta(x, t, r);
  });
};
var Ss = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 9 * -8409 + 9409 * -7 + 201647, $g = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, ed = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, td = /[A-Z0-9]/g, nd = typeof document < "u", xd = function(x) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(x);
};
function rd(x, r, t) {
  return r.__k == null && (r.textContent = ""), _t(x, r), typeof t == "function" && t(), x ? x.__c : null;
}
function od(x, r, t) {
  return Do(x, r), typeof t == "function" && t(), x ? x.__c : null;
}
ut.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(x) {
  Object.defineProperty(ut.prototype, x, { configurable: !(-3669 + -1 * -3669), get: function() {
    return this["UNSAFE_" + x];
  }, set: function(r) {
    var t = {};
    t.configurable = !(3517 + 9067 * 1 + -12584), t.writable = !(192 + 719 * 3 + -2349), t.value = r, Object.defineProperty(this, x, t);
  } });
});
var na = D.event;
function id() {
}
function ad() {
  return this.cancelBubble;
}
function sd() {
  return this.defaultPrevented;
}
D.event = function(x) {
  return na && (x = na(x)), x.persist = id, x.isPropagationStopped = ad, x.isDefaultPrevented = sd, x.nativeEvent = x;
};
var ux = {};
ux.enumerable = !1, ux.configurable = !(1997 + 84 * 57 + -6785), ux.get = function() {
  return this.class;
};
var jo, cd = ux, xa = D.vnode;
D.vnode = function(x) {
  typeof x.type == "string" && function(r) {
    var t = r.props, e = r.type, n = {};
    for (var o in t) {
      var i = t[o];
      if (!(o === "value" && "defaultValue" in t && i == null || nd && o === "children" && e === "noscript" || o === "class" || o === "className")) {
        var a = o.toLowerCase();
        o === "defaultValue" && "value" in t && t.value == null ? o = "value" : o === "download" && i === !0 ? i = "" : a === "translate" && i === "no" ? i = !1 : a === "ondoubleclick" ? o = "ondblclick" : a !== "onchange" || e !== "input" && e !== "textarea" || xd(t.type) ? a === "onfocus" ? o = "onfocusin" : a === "onblur" ? o = "onfocusout" : ed.test(o) ? o = a : -(-3368 + 2138 * -3 + 3 * 3261) === e.indexOf("-") && $g.test(o) ? o = o.replace(td, "-$&").toLowerCase() : i === null && (i = void (-3499 + -631 * 11 + -24 * -435)) : a = o = "oninput", a === "oninput" && n[o = a] && (o = "oninputCapture"), n[o] = i;
      }
    }
    e == "select" && n.multiple && Array.isArray(n.value) && (n.value = Et(t.children).forEach(function(s) {
      s.props.selected = -(9043 * 1 + 8345 + -17387) != n.value.indexOf(s.props.value);
    })), e == "select" && n.defaultValue != null && (n.value = Et(t.children).forEach(function(s) {
      s.props.selected = n.multiple ? n.defaultValue.indexOf(s.props.value) != -1 : n.defaultValue == s.props.value;
    })), t.class && !t.className ? (n.class = t.class, Object.defineProperty(n, "className", cd)) : (t.className && !t.class || t.class && t.className) && (n.class = n.className = t.className), r.props = n;
  }(x), x.$$typeof = Ss, xa && xa(x);
};
var ra = D.__r;
D.__r = function(x) {
  ra && ra(x), jo = x.__c;
};
var oa = D.diffed;
D.diffed = function(x) {
  oa && oa(x);
  var r = x.props, t = x.__e;
  t != null && x.type === "textarea" && "value" in r && r.value !== t.value && (t.value = r.value == null ? "" : r.value), jo = null;
};
var Be = {};
Be.readContext = function(x) {
  return jo.__n[x.__c].props.value;
}, Be.useCallback = Y0, Be.useContext = h0, Be.useDebugValue = wx, Be.useDeferredValue = ks, Be.useEffect = we, Be.useId = ps, Be.useImperativeHandle = hs, Be.useInsertionEffect = Os, Be.useLayoutEffect = U0, Be.useMemo = tt, Be.useReducer = Xo, Be.useRef = Nt, Be.useState = et, Be.useSyncExternalStore = Zs, Be.useTransition = Hs;
var ws = {};
ws.current = Be;
var Bs = {};
Bs.ReactCurrentDispatcher = ws;
var gd = Bs;
function dd(x) {
  return Ne.bind(null, x);
}
function xr(x) {
  return !!x && x.$$typeof === Ss;
}
function ud(x) {
  return xr(x) && x.type === At;
}
function ld(x) {
  return !!x && !!x.displayName && (typeof x.displayName == "string" || x.displayName instanceof String) && x.displayName.startsWith("Memo(");
}
function Id(x) {
  return xr(x) ? Fo.apply(null, arguments) : x;
}
function fd(x) {
  return !!x.__k && (_t(null, x), !(-11 * 322 + -1355 + -59 * -83));
}
function Cd(x) {
  return x && (x.base || 3481 + 1 * -7936 + -8 * -557 === x.nodeType && x) || null;
}
var hd = function(x, r) {
  return x(r);
}, pd = function(x, r) {
  return x(r);
}, md = At;
function Gs(x) {
  x();
}
function ks(x) {
  return x;
}
function Hs() {
  return [!1, Gs];
}
var Os = U0, bd = xr;
function Zs(x, r) {
  var t = r(), e = et({ h: { __: t, v: r } }), n = e[-1 * 3093 + -30 * -287 + 5517 * -1].h, o = e[-4978 + -3 * -1112 + 31 * 53];
  return U0(function() {
    n.__ = t, n.v = r, kr(n) && o({ h: n });
  }, [x, t, r]), we(function() {
    return kr(n) && o({ h: n }), x(function() {
      kr(n) && o({ h: n });
    });
  }, [x]), t;
}
function kr(x) {
  var r, t, e = x.v, n = x.__;
  try {
    var o = e();
    return !((r = n) === (t = o) && (-723 * -7 + 36 * 232 + -13413 !== r || (-431 + -216 * -2) / r == (1675 + -837 * 2) / t) || r != r && t != t);
  } catch {
    return !(18 * 138 + -3041 * 3 + 3 * 2213);
  }
}
var L = {};
L.useState = et, L.useId = ps, L.useReducer = Xo, L.useEffect = we, L.useLayoutEffect = U0, L.useInsertionEffect = Os, L.useTransition = Hs, L.useDeferredValue = ks, L.useSyncExternalStore = Zs, L.startTransition = Gs, L.useRef = Nt, L.useImperativeHandle = hs, L.useMemo = tt, L.useCallback = Y0, L.useContext = h0, L.useDebugValue = wx, L.version = "17.0.2", L.Children = Jg, L.render = rd, L.hydrate = od, L.unmountComponentAtNode = fd, L.createPortal = qg, L.createElement = Ne, L.createContext = Tn, L.createFactory = dd, L.cloneElement = Id, L.createRef = Gg, L.Fragment = At, L.isValidElement = xr, L.isElement = bd, L.isFragment = ud, L.isMemo = ld, L.findDOMNode = Cd, L.Component = ut, L.PureComponent = qr, L.memo = Mg, L.forwardRef = As, L.flushSync = pd, L.unstable_batchedUpdates = hd, L.StrictMode = md, L.Suspense = dx, L.SuspenseList = an, L.lazy = Qg, L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gd;
var l0 = L, Ad = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function yd(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function Wd(x) {
  return x && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function vd(x) {
  return x && Object.prototype.hasOwnProperty.call(x, "default") && Object.keys(x).length === 1 ? x.default : x;
}
function Sd(x) {
  if (x.__esModule) return x;
  var r = x.default;
  if (typeof r == "function") {
    var t = function e() {
      return this instanceof e ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    t.prototype = r.prototype;
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
const wd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: Ad,
  getAugmentedNamespace: Sd,
  getDefaultExportFromCjs: yd,
  getDefaultExportFromNamespaceIfNotNamed: vd,
  getDefaultExportFromNamespaceIfPresent: Wd
}, Symbol.toStringTag, { value: "Module" }));
var Bd = function(r, t, e, n) {
  var o = e ? e.call(n, r, t) : void 0;
  if (o !== void (3792 * -2 + -2 * -1931 + -3722 * -1)) return !!o;
  if (r === t) return !0;
  if (typeof r != "object" || !r || typeof t != "object" || !t) return !1;
  var i = Object.keys(r), a = Object.keys(t);
  if (i.length !== a.length) return !1;
  for (var s = Object.prototype.hasOwnProperty.bind(t), c = 1 * 72 + -2 * -3199 + -6470; c < i.length; c++) {
    var l = i[c];
    if (!s(l)) return !1;
    var g = r[l], h = t[l];
    if (o = e ? e.call(n, g, h, l) : void (-1945 + 389 * 5), o === !1 || o === void 0 && g !== h) return !1;
  }
  return !0;
};
const Gd = wd.getDefaultExportFromCjs(Bd);
var re = "-ms-", fn = "-moz-", ee = "-webkit-", Ks = "comm", rr = "rule", Jo = "decl", kd = "@import", Rs = "@keyframes", Hd = "@layer", Ps = Math.abs, _o = String.fromCharCode, $r = Object.assign;
function Od(x, r) {
  return ve(x, -4107 + -4 * 601 + -383 * -17) ^ -5621 + -2833 * -2 ? (((r << -8877 + 1689 * 5 + 434 ^ ve(x, -1519 + -1 * -1519)) << 3746 + -312 * 12 ^ ve(x, 1)) << 2521 + -1 * 8513 + 5994 ^ ve(x, 6117 + -1 * -1339 + 7454 * -1)) << -1 * 6959 + -141 * 50 + 14011 ^ ve(x, 2245 + -13 * 547 + 1 * 4869) : 194 * -42 + 5552 + 2596;
}
function Vs(x) {
  return x.trim();
}
function Rt(x, r) {
  return (x = r.exec(x)) ? x[0] : x;
}
function F(x, r, t) {
  return x.replace(r, t);
}
function lx(x, r, t) {
  return x.indexOf(r, t);
}
function ve(x, r) {
  return x.charCodeAt(r) | 3338 + -12 * 422 + 1726;
}
function X0(x, r, t) {
  return x.slice(r, t);
}
function wt(x) {
  return x.length;
}
function Ts(x) {
  return x.length;
}
function sn(x, r) {
  return r.push(x), x;
}
function Zd(x, r) {
  return x.map(r).join("");
}
function ia(x, r) {
  return x.filter(function(t) {
    return !Rt(t, r);
  });
}
var or = -1153 + 941 * 2 + -728, M0 = 1, Es = 0, It = 5721 + -3 * 1907, he = 1 * -2978 + 2404 * -1 + 234 * 23, z0 = "";
function ir(x, r, t, e, n, o, i, a) {
  var s = {};
  return s.value = x, s.root = r, s.parent = t, s.type = e, s.props = n, s.children = o, s.line = or, s.column = M0, s.length = i, s.return = "", s.siblings = a, s;
}
function Yt(x, r) {
  return $r(ir("", null, null, "", null, null, 53 * -58 + -9653 + 12727, x.siblings), x, { length: -x.length }, r);
}
function B0(x) {
  for (; x.root; ) x = Yt(x.root, { children: [x] });
  sn(x, x.siblings);
}
function Kd() {
  return he;
}
function Rd() {
  return he = It > 556 + 279 * 9 + -3067 * 1 ? ve(z0, --It) : 29 * 307 + 4702 + -907 * 15, M0--, he === 659 * -13 + 4385 + 4192 && (M0 = -1097 * 1 + -3242 + 4340, or--), he;
}
function bt() {
  return he = It < Es ? ve(z0, It++) : -7348 + 3217 * 3 + -2303, M0++, he === 96 * 69 + -704 * -2 + -8022 && (M0 = -1 * -4867 + -5748 + -1 * -882, or++), he;
}
function c0() {
  return ve(z0, It);
}
function Ix() {
  return It;
}
function ar(x, r) {
  return X0(z0, x, r);
}
function eo(x) {
  switch (x) {
    case -137 * 23 + -8601 + 11752:
    case -4186 * 1 + 5 * 1613 + -3870:
    case -3740 + 38 * -257 + -4 * -3379:
    case 1475 + 3 * 379 + -2599:
    case 32:
      return -4 * 28 + 4394 + 13 * -329;
    case 7 * -365 + -269 * 10 + 91 * 58:
    case 486 + -443 * 1:
    case -9888 + -10 * 771 + 17642:
    case 3893 + 4 * -2029 + -2135 * -2:
    case 2732 + -3 * 890:
    case 8775 + 2809 * -1 + -5902:
    case 3809 + 29 * -127:
    case -4504 + 43 * -7 + 4864:
    case -789 * 1 + -4643 + 5555:
    case -1447 + -595 * 12 + 8712:
      return 82 * -7 + -1 * -4706 + -4128;
    case 1119 * -1 + 2883 + -1 * 1706:
      return 277 * 25 + -19 * 431 + 1267;
    case 34:
    case -1 * 1313 + 25 * 227 + -3 * 1441:
    case -3026 + 5 * 1082 + -2344:
    case 2857 * 1 + -5677 + 71 * 41:
      return 6779 * 1 + 6102 + -12879;
    case 8647 + -662 * 13:
    case -3009 * 1 + -4725 + -7827 * -1:
      return 1;
  }
  return 7833 + -21 * 373;
}
function Pd(x) {
  return or = M0 = -2 * 1810 + 1964 + 1 * 1657, Es = wt(z0 = x), It = 794 + -5 * 868 + 3546, [];
}
function Vd(x) {
  return z0 = "", x;
}
function Hr(x) {
  return Vs(ar(It - 1, to(x === -5509 + -163 * -1 + -1 * -5437 ? x + 2 : x === -3 * -367 + 5500 + -6561 ? x + (-1315 + 3289 * -1 + 4605) : x)));
}
function Td(x) {
  for (; (he = c0()) && he < -5587 * -1 + -2904 + -2650; ) bt();
  return eo(x) > -1 * -6113 + -9088 + 2977 || eo(he) > 2426 * -3 + -1051 * -1 + 35 * 178 ? "" : " ";
}
function Ed(x, r) {
  for (; --r && bt() && !(he < 52 * -32 + 1 * 7403 + 1897 * -3 || he > 1 * -1276 + 6883 + -5505 || he > 57 && he < 65 || he > 70 && he < 10 * -673 + 15 * -479 + -3503 * -4); ) ;
  return ar(x, Ix() + (r < 4681 + -18 * 413 + 2759 && c0() == -8002 + -2 * 3845 + 15724 * 1 && bt() == 6908 + -3 * 2499 + 27 * 23));
}
function to(x) {
  for (; bt(); ) switch (he) {
    case x:
      return It;
    case 34:
    case -1 * 807 + -1919 * 2 + -4684 * -1:
      x !== 467 * -10 + -7968 + -4224 * -3 && x !== -4 * 5 + 2680 * -1 + 2739 && to(he);
      break;
    case 90 * -15 + 5357 + -3967:
      x === 8083 + 39 * -101 + 4103 * -1 && to(x);
      break;
    case -3 * -2447 + -2 * -2441 + 1733 * -7:
      bt();
      break;
  }
  return It;
}
function Ld(x, r) {
  for (; bt() && x + he !== -1 * -7307 + -2097 + -3 * 1721 + (3054 * -1 + 6708 + -2 * 1822); ) if (x + he === -9785 + -1067 * -4 + 5559 + (1713 + 1671 * -1) && c0() === -1197 + 4 * 311) break;
  return "/*" + ar(r, It - (-13 * 27 + 544 + 64 * -3)) + "*" + _o(x === -5202 + -29 * -181 ? x : bt());
}
function Nd(x) {
  for (; !eo(c0()); ) bt();
  return ar(x, It);
}
function Dd(x) {
  return Vd(fx("", null, null, null, [""], x = Pd(x), 5566 + -4766 * 1 + -800, [-3 * 1469 + -1446 + 5853], x));
}
function fx(x, r, t, e, n, o, i, a, s) {
  for (var c = 0, l = -33 * -143 + 3 * -1753 + 540, g = i, h = 5349 * 1 + 2 * -2669 + 11 * -1, u = -8040 + 5189 * 1 + 2851, C = 1277 * 2 + 1 * 7129 + -9683, p = 2493 + -8451 * -1 + -1 * 10943, A = -2 * 2522 + -5401 + -5223 * -2, d = -15 * -199 + 5 * -635 + 191, W = -7428 + -52 * -78 + 3 * 1124, k = "", N = n, Y = o, X = e, Z = k; A; ) switch (C = W, W = bt()) {
    case -18227 + -6089 * -3:
      if (C != 2615 * 3 + 1567 + -9304 && ve(Z, g - (-109 * -31 + 5911 + -7 * 1327)) == 17 * -286 + 4479 + 441) {
        lx(Z += F(Hr(W), "&", "&\f"), "&\f", Ps(c ? a[c - (-9059 * -1 + -16 * 290 + -47 * 94)] : 1 * 6131 + 9 * -77 + -5438 * 1)) != -(77 * 127 + -2597 + 7181 * -1) && (d = -(5389 + -109 * 53 + 389));
        break;
      }
    case -5 * 62 + 301 * -18 + 5762:
    case 13822 + -1253 * 11:
    case 6683 + 408 * -2 + -5776:
      Z += Hr(W);
      break;
    case -1591 * 4 + -1130 + 7503:
    case 9353 * 1 + -89 * -41 + -12992:
    case 2407 * -2 + -1 * 229 + 5056:
    case 2053 * 2 + 2 * 509 + -5092:
      Z += Td(C);
      break;
    case -99 * 37 + 6486 + -2731:
      Z += Ed(Ix() - (-4643 + -1161 * -4), 144 + -1 * 137);
      continue;
    case -4 * -599 + 13 * -386 + 2669:
      switch (c0()) {
        case 5883 + -1 * 2483 + -73 * 46:
        case 10365 + -134 * 77:
          sn(Fd(Ld(bt(), Ix()), r, t, s), s);
          break;
        default:
          Z += "/";
      }
      break;
    case (9 * 113 + 9130 + -10024) * p:
      a[c++] = wt(Z) * d;
    case 125 * p:
    case 59:
    case -8180 * 1 + 4006 + 4174:
      switch (W) {
        case 0:
        case 4 * -2287 + -1 * 2581 + -2 * -5927:
          A = -455 + 455 * 1;
        case 4376 + 1 * -4317 + l:
          d == -(-12 * 417 + -1 * -4497 + 508) && (Z = F(Z, /\f/g, "")), u > -2270 + 3 * 569 + 563 * 1 && wt(Z) - g && sn(u > -6698 + 10 * 673 ? sa(Z + ";", e, t, g - (750 + 1 * -719 + -30), s) : sa(F(Z, " ", "") + ";", e, t, g - (-9232 + -2428 * 2 + -5 * -2818), s), s);
          break;
        case 394 * -13 + 2193 + 2988:
          Z += ";";
        default:
          if (sn(X = aa(Z, r, t, c, l, n, a, k, N = [], Y = [], g, o), o), W === -41 * 121 + 2 * -1687 + 8458)
            if (l === 656 * 8 + -9080 + 3832) fx(Z, r, X, X, N, o, g, a, Y);
            else switch (h === 381 * -22 + 1281 + 7200 && ve(Z, 3) === -2669 * 2 + -4848 + 198 * 52 ? -3144 + -5 * -1931 + 2137 * -3 : h) {
              case -1 * -6059 + 749 * -11 + 2280:
              case -6 * -76 + 87 * 34 + -3306:
              case 86 * -111 + 491 * -16 + 17511:
              case 115:
                fx(x, X, X, e && sn(aa(x, X, X, 1543 * -4 + -4786 + -10958 * -1, 106 * -1 + -2733 * -2 + 5360 * -1, n, a, k, n, N = [], g, Y), Y), n, Y, g, a, e ? N : Y);
                break;
              default:
                fx(Z, X, X, X, [""], Y, -283 * 19 + -2 * -4300 + 3223 * -1, a, Y);
            }
      }
      c = l = u = -3941 + -6 * 419 + 6455 * 1, p = d = -3 * 2791 + 8 * 916 + 2 * 523, k = Z = "", g = i;
      break;
    case -4948 + 5112 * -1 + 10118:
      g = -6062 * -1 + -3398 + -2663 + wt(Z), u = C;
    default:
      if (p < 831 * -1 + -1 * 7131 + -1 * -7963) {
        if (W == 9052 + -1 * 2029 + 138 * -50) --p;
        else if (W == 1531 * 5 + 7769 + -1 * 15299 && p++ == -489 * 2 + 524 * 17 + -1 * 7930 && Rd() == 4321 + 3318 * 1 + -289 * 26) continue;
      }
      switch (Z += _o(W), W * p) {
        case 38:
          d = l > -7470 + -85 * 113 + -5 * -3415 ? -166 * -2 + 2 * -4141 + -7951 * -1 : (Z += "\f", -(2609 * -3 + 1222 + 6606));
          break;
        case 1 * 566 + 1 * 6849 + -273 * 27:
          a[c++] = (wt(Z) - (-7550 + -119 * 43 + 12668)) * d, d = 4186 + -9 * 353 + 504 * -2;
          break;
        case 29 * -92 + -1 * -5914 + -3182:
          c0() === 37 * -19 + -1 * 2669 + 3417 && (Z += Hr(bt())), h = c0(), l = g = wt(k = Z += Nd(Ix())), W++;
          break;
        case 45:
          C === 5487 + 631 * 9 + -11121 && wt(Z) == 4358 + 1452 * -3 && (p = 0);
      }
  }
  return o;
}
function aa(x, r, t, e, n, o, i, a, s, c, l, g) {
  for (var h = n - 1, u = n === 0 ? o : [""], C = Ts(u), p = 27 * -299 + 7424 + 649, A = 2338 + -1 * -383 + 2721 * -1, d = 4533 + 1511 * -3; p < e; ++p) for (var W = -722 + -1 * 4251 + -4973 * -1, k = X0(x, h + (-1 * 8196 + 8705 + 254 * -2), h = Ps(A = i[p])), N = x; W < C; ++W) (N = Vs(A > 2927 * 1 + 1 * -5542 + 2615 ? u[W] + " " + k : F(k, /&\f/g, u[W]))) && (s[d++] = N);
  return ir(x, r, t, n === -1 * -2172 + 974 * -10 + -172 * -44 ? rr : a, s, c, l, g);
}
function Fd(x, r, t, e) {
  return ir(x, r, t, Ks, _o(Kd()), X0(x, -18 * 528 + -3916 + 4474 * 3, -(1 * 3173 + 581 + -3752)), 3721 * -1 + -2 * -1093 + 1535, e);
}
function sa(x, r, t, e, n) {
  return ir(x, r, t, Jo, X0(x, -169 * -39 + 3542 * 2 + 1 * -13675, e), X0(x, e + (-2 * -2843 + 8564 + 14249 * -1), -1), e, n);
}
function Ls(x, r, t) {
  switch (Od(x, r)) {
    case 5103:
      return ee + "print-" + x + x;
    case -4 * 1882 + 3326 + 9939:
    case -9379 + 1 * 8141 + 5439:
    case 1 * 7874 + -1327 * 6 + 3265:
    case -8052 + -163 * 6 + 12463:
    case -883 + 2524 * 1:
    case -9382 * -1 + -16 * 408 + 1603:
    case -253 * 11 + 2 * -1355 + 8414:
    case -4901 + -10473 * -1:
    case 1471 + -41 * 271 + 15996:
    case 4446 + -1 * -3617 + -1 * 2219:
    case 3191:
    case 1 * -11227 + -24 * 107 + 20440:
    case -5948 * -1 + -3819 + 876:
    case 8498 + -1 * -4381 + 4 * -1622:
    case -8366 + -164 * 1 + 1601 * 9:
    case 1994 + -1 * 5119 + 18 * 486:
    case 4789 + 2 * 2810 + 2 * -2137:
    case -85 * 71 + 2 * 3929 + 1 * 2776:
    case 8963 + 83 * 15 + -5353:
    case -1 * -4159 + 868 * 10 + 16 * -539:
    case 2187 + -381 * -11 + 11 * 1:
    case 1 * -165 + -5119 * 1 + -19 * -547:
    case -421 * 1 + 229 * 2 + 5328:
    case 5087 * -1 + 1127 * 1 + 9581:
    case 1993 * -1 + -9673 + 15495 * 1:
      return ee + x + x;
    case 2 * 236 + 4736 + -419:
      return fn + x + x;
    case -4264 * 1 + 359 * 1 + 9254 * 1:
    case 14288 + 1 * -10042:
    case -15634 + -10222 * -2:
    case -9306 + 1963 * -7 + 6003 * 5:
    case -9980 + -355 * -5 + -113 * -97:
      return ee + x + fn + x + re + x + x;
    case 2902 + -1 * -3034:
      switch (ve(x, r + 11)) {
        case -1453 * -5 + 7446 + -14597:
          return ee + x + re + F(x, /[svh]\w+-[tblr]{2}/, "tb") + x;
        case 108:
          return ee + x + re + F(x, /[svh]\w+-[tblr]{2}/, "tb-rl") + x;
        case -41 * 227 + 3125 * -1 + 4159 * 3:
          return ee + x + re + F(x, /[svh]\w+-[tblr]{2}/, "lr") + x;
      }
    case -10786 + 344 * -4 + 3165 * 6:
    case 851 + -1 * 2076 + -5493 * -1:
    case 6092 + -1 * 3189:
      return ee + x + re + x + x;
    case 8105 * 1 + 1 * -3364 + 1424:
      return ee + x + re + "flex-" + x + x;
    case 5187:
      return ee + x + F(x, /(\w+).+(:[^]+)/, ee + "box-$1$2" + re + "flex-$1$2") + x;
    case -1215 + 2 * 3329:
      return ee + x + re + "flex-item-" + F(x, /flex-|-self/g, "") + (Rt(x, /flex-|baseline/) ? "" : re + "grid-row-" + F(x, /flex-|-self/g, "")) + x;
    case -4081 + -796 * -11:
      return ee + x + re + "flex-line-pack" + F(x, /align-content|flex-|-self/g, "") + x;
    case -1334 + -3781 * 2 + -46 * -314:
      return ee + x + re + F(x, "shrink", "negative") + x;
    case -41 * -233 + -2797 * -1 + 2 * -3529:
      return ee + x + re + F(x, "basis", "preferred-size") + x;
    case -1 * -3823 + 9556 * -1 + 11793:
      return ee + "box-" + F(x, "-grow", "") + ee + x + re + F(x, "grow", "positive") + x;
    case 4554:
      return ee + F(x, /([^-])(transform)/g, "$1" + ee + "$2") + x;
    case 6187:
      return F(F(F(x, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"), x, "") + x;
    case -1 * 5289 + 1597 * -2 + 13978:
    case 807 * 9 + -3444 + 140:
      return F(x, /(image-set\([^]*)/, ee + "$1$`$1");
    case 11 * -855 + 648 * -11 + 21501:
      return F(F(x, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + re + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ee + x + x;
    case -5132 + 2333 * 4:
      if (!Rt(x, /flex-|baseline/)) return re + "grid-column-align" + X0(x, r) + x;
      break;
    case 729 * -11 + -519 * 2 + -33 * -353:
    case 2633 * -2 + -1 * -6599 + 2027 * 1:
      return re + F(x, "template-", "") + x;
    case 4384:
    case 831 * -11 + 1861 * 4 + -69 * -77:
      return t && t.some(function(e, n) {
        return r = n, Rt(e.props, /grid-\w+-end/);
      }) ? ~lx(x + (t = t[r].value), "span", -9551 * 1 + -1 * -7401 + -86 * -25) ? x : re + F(x, "-start", "") + x + re + "grid-row-span:" + (~lx(t, "span", 5061 + 727 * 7 + -10150 * 1) ? Rt(t, /\d+/) : +Rt(t, /\d+/) - +Rt(x, /\d+/)) + ";" : re + F(x, "-start", "") + x;
    case -2921 + -1 * 8263 + -6 * -2680:
    case 4128:
      return t && t.some(function(e) {
        return Rt(e.props, /grid-\w+-start/);
      }) ? x : re + F(F(x, "-end", "-span"), "span ", "") + x;
    case 2221 + 2 * -2162 + 6198:
    case 29 * 139 + -7988 + 7540:
    case 1751 * -1 + 1 * -7870 + 13689:
    case 6826 + -6 * -1662 + 2038 * -7:
      return F(x, /(.+)-inline(.+)/, ee + "$1$2") + x;
    case -1 * 10149 + -3740 + -4401 * -5:
    case 436 * -9 + -1054 + 1 * 12037:
    case -8551 + 1 * -5644 + 4 * 4987:
    case 1 * 1994 + -1 * 1026 + 4567:
    case -5 * -538 + -267 * -37 + -7124:
    case -1691 + -1 * -8620 + -1 * 1228:
    case -3024 + -125 * 55 + 14832:
    case 2647 * 3 + 1300 + -4564 * 1:
    case -2892 + 1685 * 5:
    case 5789:
    case -4779 + 9572 * -1 + 19372:
    case -13 * 435 + 7835 + 2585:
      if (wt(x) - (2177 + -544 * 4) - r > -9477 + -9483 * -1) switch (ve(x, r + (-385 + -13 * 395 + 5521))) {
        case -33 + 2 * 71:
          if (ve(x, r + (269 * -28 + -1 * 680 + 8216)) !== 7746 + -2567 * 3) break;
        case 301 * 5 + -557 + -846:
          return F(x, /(.+:)(.+)-([^]+)/, "$1" + ee + "$2-$3$1" + fn + (ve(x, r + (-1 * -3787 + 379 * 25 + -13259)) == 108 ? "$3" : "$2-$3")) + x;
        case 1171 * 1 + 1 * 4772 + -5828:
          return ~lx(x, "stretch", -97 * -29 + -497 * -1 + -3310) ? Ls(F(x, "stretch", "fill-available"), r, t) + x : x;
      }
      break;
    case 438 * -1 + -5860 + -10 * -1145:
    case -18004 + -11962 * -2:
      return F(x, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, n, o, i, a, s, c) {
        return re + n + ":" + o + c + (i ? re + n + "-span:" + (a ? s : +s - +o) + c : "") + x;
      });
    case 444 + -5 * -901:
      if (ve(x, r + (-2305 * -1 + 4533 * 1 + 427 * -16)) === 1877 * 2 + 8134 + -11767) return F(x, ":", ":" + ee) + x;
      break;
    case 1 * -7417 + -9783 + 23644:
      switch (ve(x, ve(x, 3 * 509 + 5985 + 23 * -326) === 2440 * -1 + 5 * 295 + 1010 ? -1 * 8146 + -397 * 4 + 2 * 4876 : 2003 * 1 + -7702 + 5710)) {
        case 9424 * 1 + 1378 * 1 + -10682:
          return F(x, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ee + (ve(x, -5612 * 1 + -7511 + 13137) === -824 * -2 + 9997 + -11600 ? "inline-" : "") + "box$3$1" + ee + "$2$3$1" + re + "$2box$3") + x;
        case 100:
          return F(x, ":", ":" + re) + x;
      }
      break;
    case -10928 + 31 * 362 + 5425:
    case -50 * -67 + -5 * 263 + -1 * -612:
    case 3505 * 1 + 5 * 1057 + 11 * -605:
    case -8 * -208 + 7068 + -31 * 155:
    case 2391:
      return F(x, "scroll-", "scroll-snap-") + x;
  }
  return x;
}
function Bx(x, r) {
  for (var t = "", e = -1867 * -1 + -116 * -64 + 9291 * -1; e < x.length; e++) t += r(x[e], e, x, r) || "";
  return t;
}
function Yd(x, r, t, e) {
  switch (x.type) {
    case Hd:
      if (x.children.length) break;
    case kd:
    case Jo:
      return x.return = x.return || x.value;
    case Ks:
      return "";
    case Rs:
      return x.return = x.value + "{" + Bx(x.children, e) + "}";
    case rr:
      if (!wt(x.value = x.props.join(","))) return "";
  }
  return wt(t = Bx(x.children, e)) ? x.return = x.value + "{" + t + "}" : "";
}
function Xd(x) {
  var r = Ts(x);
  return function(t, e, n, o) {
    for (var i = "", a = 466 * 2 + -4900 + -64 * -62; a < r; a++) i += x[a](t, e, n, o) || "";
    return i;
  };
}
function Md(x) {
  return function(r) {
    r.root || (r = r.return) && x(r);
  };
}
function jd(x, r, t, e) {
  if (x.length > -(-1 * -2791 + 3655 + 5 * -1289) && !x.return)
    switch (x.type) {
      case Jo:
        x.return = Ls(x.value, x.length, t);
        return;
      case Rs:
        return Bx([Yt(x, { value: F(x.value, "@", "@" + ee) })], e);
      case rr:
        if (x.length) return Zd(t = x.props, function(n) {
          switch (Rt(n, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              B0(Yt(x, { props: [F(n, /:(read-\w+)/, ":" + fn + "$1")] }));
              var o = {};
              o.props = [n], B0(Yt(x, o)), $r(x, { props: ia(t, e) });
              break;
            case "::placeholder":
              B0(Yt(x, { props: [F(n, /:(plac\w+)/, ":" + ee + "input-$1")] })), B0(Yt(x, { props: [F(n, /:(plac\w+)/, ":" + fn + "$1")] })), B0(Yt(x, { props: [F(n, /:(plac\w+)/, re + "input-$1")] }));
              var i = {};
              i.props = [n], B0(Yt(x, i)), $r(x, { props: ia(t, e) });
              break;
          }
          return "";
        });
    }
}
var E = {};
E.animationIterationCount = 1, E.aspectRatio = 1, E.borderImageOutset = 1, E.borderImageSlice = 1, E.borderImageWidth = 1, E.boxFlex = 1, E.boxFlexGroup = 1, E.boxOrdinalGroup = 1, E.columnCount = 1, E.columns = 1, E.flex = 1, E.flexGrow = 1, E.flexPositive = 1, E.flexShrink = 1, E.flexNegative = 1, E.flexOrder = 1, E.gridRow = 1, E.gridRowEnd = 1, E.gridRowSpan = 1, E.gridRowStart = 1, E.gridColumn = 1, E.gridColumnEnd = 1, E.gridColumnSpan = 1, E.gridColumnStart = 1, E.msGridRow = 1, E.msGridRowSpan = 1, E.msGridColumn = 1, E.msGridColumnSpan = 1, E.fontWeight = 1, E.lineHeight = 1, E.opacity = 1, E.order = 1, E.orphans = 1, E.tabSize = 1, E.widows = 1, E.zIndex = 1, E.zoom = 1, E.WebkitLineClamp = 1, E.fillOpacity = 1, E.floodOpacity = 1, E.stopOpacity = 1, E.strokeDasharray = 1, E.strokeDashoffset = 1, E.strokeMiterlimit = 1, E.strokeOpacity = 1, E.strokeWidth = 1;
var Jd = E, q = {}, I0 = typeof process < "u" && void (-7 * 566 + 7903 + -3941) !== q && (q.REACT_APP_SC_ATTR || q.SC_ATTR) || "data-styled", Ns = "active", Ds = "data-styled-version", sr = "6.1.11", Qo = `/*!sc*/
`, Uo = typeof window < "u" && "HTMLElement" in window, _d = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (1 * 2141 + 125 * -36 + 2359) !== q && void (-1 * -1306 + 9349 + -10655) !== q.REACT_APP_SC_DISABLE_SPEEDY && q.REACT_APP_SC_DISABLE_SPEEDY !== "" ? q.REACT_APP_SC_DISABLE_SPEEDY !== "false" && q.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (4 * -1369 + -2970 + 8446) !== q && void (-13635 + 303 * 45) !== q.SC_DISABLE_SPEEDY && q.SC_DISABLE_SPEEDY !== "" ? q.SC_DISABLE_SPEEDY !== "false" && q.SC_DISABLE_SPEEDY : q.NODE_ENV !== "production"), ca = /invalid hook call/i, ex = /* @__PURE__ */ new Set(), Qd = function(x, r) {
  if (q.NODE_ENV !== "production") {
    var t = r ? ' with the id of "'.concat(r, '"') : "", e = "The component ".concat(x).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(i) {
        for (var a = [], s = 1213 * 3 + -3896 + 258; s < arguments.length; s++) a[s - (-1 * 8111 + -20 * 313 + 14372)] = arguments[s];
        ca.test(i) ? (o = !1, ex.delete(e)) : n.apply(void (7177 * 1 + -1 * -1234 + 8411 * -1), D0([i], a, !1));
      }, Nt(), o && !ex.has(e) && (console.warn(e), ex.add(e));
    } catch (i) {
      ca.test(i.message) && ex.delete(e);
    } finally {
      console.error = n;
    }
  }
}, cr = Object.freeze([]), j0 = Object.freeze({});
function Ud(x, r, t) {
  return void (-52 * -13 + 1242 + -137 * 14) === t && (t = j0), x.theme !== t.theme && x.theme || r || t.theme;
}
var no = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), zd = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, qd = /(^-|-$)/g;
function ga(x) {
  return x.replace(zd, "-").replace(qd, "");
}
var $d = /(a)(d)/gi, tx = 8175 + 529 * -4 + 6007 * -1, da = function(x) {
  return String.fromCharCode(x + (x > -17 * 326 + -5021 * -1 + 546 ? 1 * -598 + 3 * -939 + 3454 : -1510 * 3 + 1389 + 3238));
};
function xo(x) {
  var r, t = "";
  for (r = Math.abs(x); r > tx; r = r / tx | -26 * 219 + -2738 + -17 * -496) t = da(r % tx) + t;
  return (da(r % tx) + t).replace($d, "$1-$2");
}
var Or, Fs = -5247 + -1 * -6194 + 4434, r0 = function(x, r) {
  for (var t = r.length; t; ) x = (-10 * 617 + -9706 + 15909) * x ^ r.charCodeAt(--t);
  return x;
}, Ys = function(x) {
  return r0(Fs, x);
};
function eu(x) {
  return xo(Ys(x) >>> 389 * -18 + -31 * 15 + 7467);
}
function Xs(x) {
  return q.NODE_ENV !== "production" && typeof x == "string" && x || x.displayName || x.name || "Component";
}
function Zr(x) {
  return typeof x == "string" && (q.NODE_ENV === "production" || x.charAt(107 * 24 + 70 * 107 + -47 * 214) === x.charAt(1172 * -4 + -1663 * 2 + 2 * 4007).toLowerCase());
}
var gt = {};
gt.childContextTypes = !0, gt.contextType = !0, gt.contextTypes = !0, gt.defaultProps = !0, gt.displayName = !0, gt.getDefaultProps = !0, gt.getDerivedStateFromError = !0, gt.getDerivedStateFromProps = !0, gt.mixins = !0, gt.propTypes = !0, gt.type = !0;
var Xt = {};
Xt.name = !0, Xt.length = !0, Xt.prototype = !0, Xt.caller = !0, Xt.callee = !0, Xt.arguments = !0, Xt.arity = !0;
var t0 = {};
t0.$$typeof = !0, t0.compare = !0, t0.defaultProps = !0, t0.displayName = !0, t0.propTypes = !0, t0.type = !0;
var H0 = {};
H0.$$typeof = !0, H0.render = !0, H0.defaultProps = !0, H0.displayName = !0, H0.propTypes = !0;
var Ms = typeof Symbol == "function" && Symbol.for, js = Ms ? Symbol.for("react.memo") : 108638 * -1 + -80955 + -4 * -62427, tu = Ms ? Symbol.for("react.forward_ref") : -92117 + 21 * 7249, nu = gt, xu = Xt, Js = t0, ru = ((Or = {})[tu] = H0, Or[js] = Js, Or);
function ua(x) {
  return ("type" in (r = x) && r.type.$$typeof) === js ? Js : "$$typeof" in x ? ru[x.$$typeof] : nu;
  var r;
}
var ou = Object.defineProperty, iu = Object.getOwnPropertyNames, la = Object.getOwnPropertySymbols, au = Object.getOwnPropertyDescriptor, su = Object.getPrototypeOf, Ia = Object.prototype;
function _s(x, r, t) {
  if (typeof r != "string") {
    if (Ia) {
      var e = su(r);
      e && e !== Ia && _s(x, e, t);
    }
    var n = iu(r);
    la && (n = n.concat(la(r)));
    for (var o = ua(x), i = ua(r), a = -5661 + -1 * 7699 + 8 * 1670; a < n.length; ++a) {
      var s = n[a];
      if (!(s in xu || t && t[s] || i && s in i || o && s in o)) {
        var c = au(r, s);
        try {
          ou(x, s, c);
        } catch {
        }
      }
    }
  }
  return x;
}
function J0(x) {
  return typeof x == "function";
}
function zo(x) {
  return typeof x == "object" && "styledComponentId" in x;
}
function i0(x, r) {
  return x && r ? "".concat(x, " ").concat(r) : x || r || "";
}
function fa(x, r) {
  if (88 * 88 + 58 * -124 + -552 === x.length) return "";
  for (var t = x[0], e = -118 * 68 + 7972 + 53; e < x.length; e++) t += x[e];
  return t;
}
function _0(x) {
  return x !== null && typeof x == "object" && x.constructor.name === Object.name && !("props" in x && x.$$typeof);
}
function ro(x, r, t) {
  if (void (6455 + -1 * 6455) === t && (t = !1), !t && !_0(x) && !Array.isArray(x)) return r;
  if (Array.isArray(r))
    for (var e = 23 * 417 + -9193 + -398; e < r.length; e++) x[e] = ro(x[e], r[e]);
  else if (_0(r))
    for (var e in r) x[e] = ro(x[e], r[e]);
  return x;
}
function qo(x, r) {
  var t = {};
  t.value = r, Object.defineProperty(x, "toString", t);
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
var cu = q.NODE_ENV !== "production" ? Ae : {};
function gu() {
  for (var x = [], r = 0; r < arguments.length; r++) x[r] = arguments[r];
  for (var t = x[-2307 + 1 * 1065 + -23 * -54], e = [], n = -5410 + -1 * -5411, o = x.length; n < o; n += -1972 + -1973 * -1) e.push(x[n]);
  return e.forEach(function(i) {
    t = t.replace(/%[a-z]/, i);
  }), t;
}
function q0(x) {
  for (var r = [], t = 6545 + 3413 * -2 + 141 * 2; t < arguments.length; t++) r[t - (8893 + -1439 * -2 + -11770)] = arguments[t];
  return q.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(x, " for more information.").concat(r.length > 2 * 3334 + -5099 + -1569 ? " Args: ".concat(r.join(", ")) : "")) : new Error(gu.apply(void (-2682 * -1 + 29 * -163 + 2045), D0([cu[x]], r, !1)).trim());
}
var du = function() {
  function x(r) {
    this.groupSizes = new Uint32Array(-71 * 25 + -4673 * 2 + 1 * 11633), this.length = 39 * 52 + -2 * 4261 + -62 * -113, this.tag = r;
  }
  return x.prototype.indexOfGroup = function(r) {
    for (var t = -4233 + 1 * 4233, e = 5352 + 1784 * -3; e < r; e++) t += this.groupSizes[e];
    return t;
  }, x.prototype.insertRules = function(r, t) {
    if (r >= this.groupSizes.length) {
      for (var e = this.groupSizes, n = e.length, o = n; r >= o; ) if ((o <<= 2 * -331 + 19 * -134 + 3209) < 2478 * -3 + 4997 * 2 + -2560) throw q0(-7329 + 7057 * -1 + 14402, "".concat(r));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(e), this.length = o;
      for (var i = n; i < o; i++) this.groupSizes[i] = -1 * 267 + -9 * -181 + -1362;
    }
    for (var a = this.indexOfGroup(r + (-1584 + -1 * -6533 + -4948)), s = (i = 5015 + 5 * -1003, t.length); i < s; i++) this.tag.insertRule(a, t[i]) && (this.groupSizes[r]++, a++);
  }, x.prototype.clearGroup = function(r) {
    if (r < this.length) {
      var t = this.groupSizes[r], e = this.indexOfGroup(r), n = e + t;
      this.groupSizes[r] = -347 * -10 + -5550 + 208 * 10;
      for (var o = e; o < n; o++) this.tag.deleteRule(e);
    }
  }, x.prototype.getGroup = function(r) {
    var t = "";
    if (r >= this.length || -293 * -31 + -3 * 2571 + -1370 === this.groupSizes[r]) return t;
    for (var e = this.groupSizes[r], n = this.indexOfGroup(r), o = n + e, i = n; i < o; i++) t += "".concat(this.tag.getRule(i)).concat(Qo);
    return t;
  }, x;
}(), uu = 3 * -3121 + -52 * 113 + -24 * -635 << 30, Cx = /* @__PURE__ */ new Map(), Gx = /* @__PURE__ */ new Map(), hx = 5638 + 1369 * -3 + -1530 * 1, nx = function(x) {
  if (Cx.has(x)) return Cx.get(x);
  for (; Gx.has(hx); ) hx++;
  var r = hx++;
  if (q.NODE_ENV !== "production" && ((5287 + -7044 * 1 + 1757 * 1 | r) < 0 || r > uu)) throw q0(-7 * -930 + 694 * 2 + -7882, "".concat(r));
  return Cx.set(x, r), Gx.set(r, x), r;
}, lu = function(x, r) {
  hx = r + (10 * -616 + -6451 + -12612 * -1), Cx.set(x, r), Gx.set(r, x);
}, Iu = "style[".concat(I0, "][").concat(Ds, '="').concat(sr, '"]'), fu = new RegExp("^".concat(I0, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Cu = function(x, r, t) {
  for (var e, n = t.split(","), o = 181 * -19 + -3 * -1415 + -31 * 26, i = n.length; o < i; o++) (e = n[o]) && x.registerName(r, e);
}, hu = function(x, r) {
  for (var t, e = ((t = r.textContent) !== null && t !== void 0 ? t : "").split(Qo), n = [], o = -1158 + 13 * -385 + 6163, i = e.length; o < i; o++) {
    var a = e[o].trim();
    if (a) {
      var s = a.match(fu);
      if (s) {
        var c = 0 | parseInt(s[1], 10), l = s[-234 * 11 + -2 * 1093 + -1 * -4762];
        -208 + 16 * 13 !== c && (lu(l, c), Cu(x, l, s[3]), x.getTag().insertRules(c, n)), n.length = -8915 * -1 + -1598 + -7317;
      } else n.push(a);
    }
  }
};
function pu() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Qs = function(x) {
  var r = document.head, t = x || r, e = document.createElement("style"), n = function(a) {
    var s = Array.from(a.querySelectorAll("style[".concat(I0, "]")));
    return s[s.length - (8857 + 340 * -1 + 4258 * -2)];
  }(t), o = n !== void 0 ? n.nextSibling : null;
  e.setAttribute(I0, Ns), e.setAttribute(Ds, sr);
  var i = pu();
  return i && e.setAttribute("nonce", i), t.insertBefore(e, o), e;
}, mu = function() {
  function x(r) {
    this.element = Qs(r), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, n = 16183 + -1 * 16183, o = e.length; n < o; n++) {
        var i = e[n];
        if (i.ownerNode === t) return i;
      }
      throw q0(-2 * -2794 + 377 * 24 + -14619);
    }(this.element), this.length = 8 * -699 + 6120 + -528 * 1;
  }
  return x.prototype.insertRule = function(r, t) {
    try {
      return this.sheet.insertRule(t, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, x.prototype.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, x.prototype.getRule = function(r) {
    var t = this.sheet.cssRules[r];
    return t && t.cssText ? t.cssText : "";
  }, x;
}(), bu = function() {
  function x(r) {
    this.element = Qs(r), this.nodes = this.element.childNodes, this.length = 1625 * -4 + -499 + 2333 * 3;
  }
  return x.prototype.insertRule = function(r, t) {
    if (r <= this.length && r >= -6307 + -973 * -2 + 4361) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[r] || null), this.length++, !0;
    }
    return !1;
  }, x.prototype.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, x.prototype.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, x;
}(), Au = function() {
  function x(r) {
    this.rules = [], this.length = 5738 * 1 + -1 * 654 + -5084;
  }
  return x.prototype.insertRule = function(r, t) {
    return r <= this.length && (this.rules.splice(r, 334 + 1 * -704 + -370 * -1, t), this.length++, !0);
  }, x.prototype.deleteRule = function(r) {
    this.rules.splice(r, -1 * -6017 + -1 * 271 + -1915 * 3), this.length--;
  }, x.prototype.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, x;
}(), Ca = Uo, yu = { isServer: !Uo, useCSSOMInjection: !_d }, Us = function() {
  function x(r, t, e) {
    void (2541 * -3 + -9667 + 1 * 17290) === r && (r = j0), void (18 * 17 + 1 + 307 * -1) === t && (t = {});
    var n = this;
    this.options = Qe(Qe({}, yu), r), this.gs = t, this.names = new Map(e), this.server = !!r.isServer, !this.server && Uo && Ca && (Ca = !1, function(o) {
      for (var i = document.querySelectorAll(Iu), a = 9914 + 8119 * 1 + -18033 * 1, s = i.length; a < s; a++) {
        var c = i[a];
        c && c.getAttribute(I0) !== Ns && (hu(o, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this)), qo(this, function() {
      return function(o) {
        for (var i = o.getTag(), a = i.length, s = "", c = function(g) {
          var h = function(d) {
            return Gx.get(d);
          }(g);
          if (void (15 * -379 + -1173 + 6858) === h) return "continue";
          var u = o.names.get(h), C = i.getGroup(g);
          if (void (-268 + -715 * -9 + 1 * -6167) === u || C.length === 0) return "continue";
          var p = "".concat(I0, ".g").concat(g, '[id="').concat(h, '"]'), A = "";
          void (3383 + -1 * -1433 + -1204 * 4) !== u && u.forEach(function(d) {
            d.length > 0 && (A += "".concat(d, ","));
          }), s += "".concat(C).concat(p, '{content:"').concat(A, '"}').concat(Qo);
        }, l = -1 * 9661 + -9446 * 1 + 19107; l < a; l++) c(l);
        return s;
      }(n);
    });
  }
  return x.registerId = function(r) {
    return nx(r);
  }, x.prototype.reconstructWithOptions = function(r, t) {
    return void (-2728 + 8 * 341) === t && (t = !0), new x(Qe(Qe({}, this.options), r), this.gs, t && this.names || void (1 * -6763 + -173 * 19 + -6 * -1675));
  }, x.prototype.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 1 * -3357 + 2759 * 3 + -41 * 120) + (-8492 + -2 * 710 + -1 * -9913);
  }, x.prototype.getTag = function() {
    return this.tag || (this.tag = (r = function(t) {
      var e = t.useCSSOMInjection, n = t.target;
      return t.isServer ? new Au(n) : e ? new mu(n) : new bu(n);
    }(this.options), new du(r)));
    var r;
  }, x.prototype.hasNameForId = function(r, t) {
    return this.names.has(r) && this.names.get(r).has(t);
  }, x.prototype.registerName = function(r, t) {
    if (nx(r), this.names.has(r)) this.names.get(r).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(r, e);
    }
  }, x.prototype.insertRules = function(r, t, e) {
    this.registerName(r, t), this.getTag().insertRules(nx(r), e);
  }, x.prototype.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, x.prototype.clearRules = function(r) {
    this.getTag().clearGroup(nx(r)), this.clearNames(r);
  }, x.prototype.clearTag = function() {
    this.tag = void (1049 * -5 + 6974 + -247 * 7);
  }, x;
}(), Wu = /&/g, vu = /^\s*\/\/.*$/gm;
function zs(x, r) {
  return x.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(r, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(r, " ")), t.props = t.props.map(function(e) {
      return "".concat(r, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = zs(t.children, r)), t;
  });
}
function qs(x) {
  var r, t, e, n = x === void 0 ? j0 : x, o = n.options, i = void (-15 * 510 + -1 * -5683 + 281 * 7) === o ? j0 : o, a = n.plugins, s = void (1236 + -7243 * -1 + -8479) === a ? cr : a, c = function(h, u, C) {
    return C.startsWith(t) && C.endsWith(t) && C.replaceAll(t, "").length > -44 * -158 + 1212 + 314 * -26 ? ".".concat(r) : h;
  }, l = s.slice();
  l.push(function(h) {
    h.type === rr && h.value.includes("&") && (h.props[-7473 + -4 * -1303 + -133 * -17] = h.props[2901 + -967 * 3].replace(Wu, t).replace(e, c));
  }), i.prefix && l.push(jd), l.push(Yd);
  var g = function(h, u, C, p) {
    void (466 * 7 + 7349 * -1 + 61 * 67) === u && (u = ""), void (3513 + 723 * -5 + 102) === C && (C = ""), void (5142 + 3578 * 2 + -12298) === p && (p = "&"), r = p, t = u, e = new RegExp("\\".concat(t, "\\b"), "g");
    var A = h.replace(vu, ""), d = Dd(C || u ? "".concat(C, " ").concat(u, " { ").concat(A, " }") : A);
    i.namespace && (d = zs(d, i.namespace));
    var W = [];
    return Bx(d, Xd(l.concat(Md(function(k) {
      return W.push(k);
    })))), W;
  };
  return g.hash = s.length ? s.reduce(function(h, u) {
    return u.name || q0(389 + -187 * 2), r0(h, u.name);
  }, Fs).toString() : "", g;
}
var Su = new Us(), oo = qs(), $o = l0.createContext({ shouldForwardProp: void (4827 + -1 * 4827), styleSheet: Su, stylis: oo });
$o.Consumer;
var wu = l0.createContext(void (-3 * 2927 + 2 * 1699 + -5383 * -1));
function io() {
  return h0($o);
}
function Bu(x) {
  var r = et(x.stylisPlugins), t = r[-6814 + 3407 * 2], e = r[-1109 * -3 + -43 * 2 + -3240], n = io().styleSheet, o = tt(function() {
    var l = n, g = {};
    return g.useCSSOMInjection = !1, x.sheet ? l = x.sheet : x.target && (l = l.reconstructWithOptions({ target: x.target }, !1)), x.disableCSSOMInjection && (l = l.reconstructWithOptions(g)), l;
  }, [x.disableCSSOMInjection, x.sheet, x.target, n]), i = tt(function() {
    var l = {};
    l.namespace = x.namespace, l.prefix = x.enableVendorPrefixes;
    var g = {};
    return g.options = l, g.plugins = t, qs(g);
  }, [x.enableVendorPrefixes, x.namespace, t]);
  we(function() {
    Gd(t, x.stylisPlugins) || e(x.stylisPlugins);
  }, [x.stylisPlugins]);
  var a = tt(function() {
    var l = {};
    return l.shouldForwardProp = x.shouldForwardProp, l.styleSheet = o, l.stylis = i, l;
  }, [x.shouldForwardProp, o, i]), s = {};
  s.value = a;
  var c = {};
  return c.value = i, l0.createElement($o.Provider, s, l0.createElement(wu.Provider, c, x.children));
}
var ha = function() {
  function x(r, t) {
    var e = this;
    this.inject = function(n, o) {
      void (-17 * 17 + 87 * 73 + -6062) === o && (o = oo);
      var i = e.name + o.hash;
      n.hasNameForId(e.id, i) || n.insertRules(e.id, i, o(e.rules, i, "@keyframes"));
    }, this.name = r, this.id = "sc-keyframes-".concat(r), this.rules = t, qo(this, function() {
      throw q0(341 + 1 * -329, String(e.name));
    });
  }
  return x.prototype.getName = function(r) {
    return void (29 + -173 * 3 + 245 * 2) === r && (r = oo), this.name + r.hash;
  }, x;
}(), Gu = function(x) {
  return x >= "A" && x <= "Z";
};
function pa(x) {
  for (var r = "", t = 9570 + 3 * -1364 + -5478; t < x.length; t++) {
    var e = x[t];
    if (3928 * -1 + 5460 + -1531 === t && e === "-" && x[3 * 646 + -1 * 5203 + 3265] === "-") return x;
    Gu(e) ? r += "-" + e.toLowerCase() : r += e;
  }
  return r.startsWith("ms-") ? "-" + r : r;
}
var $s = function(x) {
  return x == null || x === !1 || x === "";
}, ec = function(x) {
  var r, t, e = [];
  for (var n in x) {
    var o = x[n];
    x.hasOwnProperty(n) && !$s(o) && (Array.isArray(o) && o.isCss || J0(o) ? e.push("".concat(pa(n), ":"), o, ";") : _0(o) ? e.push.apply(e, D0(D0(["".concat(n, " {")], ec(o), !1), ["}"], !1)) : e.push("".concat(pa(n), ": ").concat((r = n, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || 37 * 256 + 4701 + -14173 === t || r in Jd || r.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function g0(x, r, t, e) {
  if ($s(x)) return [];
  if (zo(x)) return [".".concat(x.styledComponentId)];
  if (J0(x)) {
    if (!J0(o = x) || o.prototype && o.prototype.isReactComponent || !r) return [x];
    var n = x(r);
    return q.NODE_ENV === "production" || typeof n != "object" || Array.isArray(n) || n instanceof ha || _0(n) || n === null || console.error("".concat(Xs(x), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), g0(n, r, t, e);
  }
  var o;
  return x instanceof ha ? t ? (x.inject(t, e), [x.getName(e)]) : [x] : _0(x) ? ec(x) : Array.isArray(x) ? Array.prototype.concat.apply(cr, x.map(function(i) {
    return g0(i, r, t, e);
  })) : [x.toString()];
}
function ku(x) {
  for (var r = -2198 * 1 + 1 * 2649 + 1 * -451; r < x.length; r += -256 * 21 + -1812 + 7189) {
    var t = x[r];
    if (J0(t) && !zo(t)) return !1;
  }
  return !0;
}
var Hu = Ys(sr), Ou = function() {
  function x(r, t, e) {
    this.rules = r, this.staticRulesId = "", this.isStatic = q.NODE_ENV === "production" && (void (-21 * -119 + 3538 + 1 * -6037) === e || e.isStatic) && ku(r), this.componentId = t, this.baseHash = r0(Hu, t), this.baseStyle = e, Us.registerId(t);
  }
  return x.prototype.generateAndInjectStyles = function(r, t, e) {
    var n = this.baseStyle ? this.baseStyle.generateAndInjectStyles(r, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) n = i0(n, this.staticRulesId);
      else {
        var o = fa(g0(this.rules, r, t, e)), i = xo(r0(this.baseHash, o) >>> -47 * 142 + 3937 + 2737);
        if (!t.hasNameForId(this.componentId, i)) {
          var a = e(o, ".".concat(i), void 0, this.componentId);
          t.insertRules(this.componentId, i, a);
        }
        n = i0(n, i), this.staticRulesId = i;
      }
    else {
      for (var s = r0(this.baseHash, e.hash), c = "", l = 9208 + 50 * 193 + 6286 * -3; l < this.rules.length; l++) {
        var g = this.rules[l];
        if (typeof g == "string") c += g, q.NODE_ENV !== "production" && (s = r0(s, g));
        else if (g) {
          var h = fa(g0(g, r, t, e));
          s = r0(s, h + l), c += h;
        }
      }
      if (c) {
        var u = xo(s >>> 0);
        t.hasNameForId(this.componentId, u) || t.insertRules(this.componentId, u, e(c, ".".concat(u), void (2 * 1138 + -1 * -7571 + -1 * 9847), this.componentId)), n = i0(n, u);
      }
    }
    return n;
  }, x;
}(), tc = l0.createContext(void (-188 * 20 + -2718 + 6478));
tc.Consumer;
var Kr = {}, ma = /* @__PURE__ */ new Set();
function Zu(x, r, t) {
  var e = zo(x), n = x, o = !Zr(x), i = r.attrs, a = void (-6 * 80 + 4792 * -2 + 2 * 5032) === i ? cr : i, s = r.componentId, c = void (2620 + -322 * -29 + -3986 * 3) === s ? function(Y, X) {
    var Z = typeof Y != "string" ? "sc" : ga(Y);
    Kr[Z] = (Kr[Z] || 229 * -13 + 12 * 87 + -1933 * -1) + 1;
    var _ = "".concat(Z, "-").concat(eu(sr + Z + Kr[Z]));
    return X ? "".concat(X, "-").concat(_) : _;
  }(r.displayName, r.parentComponentId) : s, l = r.displayName, g = void (-847 * 1 + 13 * -419 + -1049 * -6) === l ? function(Y) {
    return Zr(Y) ? "styled.".concat(Y) : "Styled(".concat(Xs(Y), ")");
  }(x) : l, h = r.displayName && r.componentId ? "".concat(ga(r.displayName), "-").concat(r.componentId) : r.componentId || c, u = e && n.attrs ? n.attrs.concat(a).filter(Boolean) : a, C = r.shouldForwardProp;
  if (e && n.shouldForwardProp) {
    var p = n.shouldForwardProp;
    if (r.shouldForwardProp) {
      var A = r.shouldForwardProp;
      C = function(Y, X) {
        return p(Y, X) && A(Y, X);
      };
    } else C = p;
  }
  var d = new Ou(t, h, e ? n.componentStyle : void (1587 + -1 * -6170 + -7757));
  function W(Y, X) {
    return function(Z, _, Ie) {
      var U = Z.attrs, fe = Z.componentStyle, Ce = Z.defaultProps, Oe = Z.foldedComponentIds, ft = Z.styledComponentId, ie = Z.target, Ze = l0.useContext(tc), De = io(), xt = Z.shouldForwardProp || De.shouldForwardProp;
      q.NODE_ENV !== "production" && wx(ft);
      var Fe = Ud(_, Ze, Ce) || j0, pe = function(m0, Ue, Wt) {
        var rt = {};
        rt.className = void (-5135 + 1 * -7892 + -13027 * -1), rt.theme = Wt;
        for (var Ut, vt = Qe(Qe({}, Ue), rt), Ct = -10 * -988 + 4265 + -14145; Ct < m0.length; Ct += 7187 + -2879 * 1 + -73 * 59) {
          var zt = J0(Ut = m0[Ct]) ? Ut(vt) : Ut;
          for (var ht in zt) vt[ht] = ht === "className" ? i0(vt[ht], zt[ht]) : ht === "style" ? Qe(Qe({}, vt[ht]), zt[ht]) : zt[ht];
        }
        return Ue.className && (vt.className = i0(vt.className, Ue.className)), vt;
      }(U, _, Fe), Ve = pe.as || ie, Ye = {};
      for (var me in pe) void (-37 * 173 + 1 * -3147 + 9548) === pe[me] || me[-1 * -7099 + -8 * -460 + 3 * -3593] === "$" || me === "as" || me === "theme" && pe.theme === Fe || (me === "forwardedAs" ? Ye.as = pe.forwardedAs : xt && !xt(me, Ve) || (Ye[me] = pe[me], xt || q.NODE_ENV !== "development" || Fg(me) || ma.has(me) || !no.has(Ve) || (ma.add(me), console.warn('styled-components: it looks like an unknown prop "'.concat(me, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Te = function(m0, Ue) {
        var Wt = io(), rt = m0.generateAndInjectStyles(Ue, Wt.styleSheet, Wt.stylis);
        return q.NODE_ENV !== "production" && wx(rt), rt;
      }(fe, pe);
      q.NODE_ENV !== "production" && Z.warnTooManyClasses && Z.warnTooManyClasses(Te);
      var Xe = i0(Oe, ft);
      return Te && (Xe += " " + Te), pe.className && (Xe += " " + pe.className), Ye[Zr(Ve) && !no.has(Ve) ? "class" : "className"] = Xe, Ye.ref = Ie, Ne(Ve, Ye);
    }(k, Y, X);
  }
  W.displayName = g;
  var k = l0.forwardRef(W), N = {};
  return N.attrs = !0, N.componentStyle = !0, N.displayName = !0, N.foldedComponentIds = !0, N.shouldForwardProp = !0, N.styledComponentId = !0, N.target = !0, k.attrs = u, k.componentStyle = d, k.displayName = g, k.shouldForwardProp = C, k.foldedComponentIds = e ? i0(n.foldedComponentIds, n.styledComponentId) : "", k.styledComponentId = h, k.target = e ? n.target : x, Object.defineProperty(k, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(Y) {
    this._foldedDefaultProps = e ? function(X) {
      for (var Z = [], _ = -377 * -4 + -45 * -44 + -3487; _ < arguments.length; _++) Z[_ - (-1457 + 54 * 27)] = arguments[_];
      for (var Ie = -4729 + 203 * 5 + 1857 * 2, U = Z; Ie < U.length; Ie++) ro(X, U[Ie], !0);
      return X;
    }({}, n.defaultProps, Y) : Y;
  } }), q.NODE_ENV !== "production" && (Qd(g, h), k.warnTooManyClasses = /* @__PURE__ */ function(Y, X) {
    var Z = {}, _ = !1;
    return function(Ie) {
      if (!_ && (Z[Ie] = !0, Object.keys(Z).length >= 200)) {
        var U = X ? ' with the id of "'.concat(X, '"') : "";
        console.warn("Over ".concat(-763 + -321 * -3, " classes were generated for component ").concat(Y).concat(U, `.
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
  }(g, h)), qo(k, function() {
    return ".".concat(k.styledComponentId);
  }), o && _s(k, x, N), k;
}
function ba(x, r) {
  for (var t = [x[577 + 577 * -1]], e = 1 * 3356 + -1 * -7933 + 71 * -159, n = r.length; e < n; e += -19156 + -19157 * -1) t.push(r[e], x[e + 1]);
  return t;
}
var Aa = function(x) {
  var r = {};
  return r.isCss = !0, Object.assign(x, r);
};
function Ku(x) {
  for (var r = [], t = -1073 + -2 * -537; t < arguments.length; t++) r[t - 1] = arguments[t];
  if (J0(x) || _0(x)) return Aa(g0(ba(cr, D0([x], r, !0))));
  var e = x;
  return 63 * 1 + 1 * -18 + -3 * 15 === r.length && -167 * 9 + 3589 + -2085 === e.length && typeof e[-397 * -9 + 30 * -2 + -3513] == "string" ? g0(e) : Aa(g0(ba(e, r)));
}
function ao(x, r, t) {
  if (t === void 0 && (t = j0), !r) throw q0(1, r);
  var e = function(n) {
    for (var o = [], i = 1 * 4661 + -128 * -60 + -1 * 12340; i < arguments.length; i++) o[i - (71 * 59 + -1088 + -3100)] = arguments[i];
    return x(r, t, Ku.apply(void (4 * 1608 + 185 * 25 + -1 * 11057), D0([n], o, !1)));
  };
  return e.attrs = function(n) {
    return ao(x, r, Qe(Qe({}, t), { attrs: Array.prototype.concat(t.attrs, n).filter(Boolean) }));
  }, e.withConfig = function(n) {
    return ao(x, r, Qe(Qe({}, t), n));
  }, e;
}
var nc = function(x) {
  return ao(Zu, x);
}, En = nc;
no.forEach(function(x) {
  En[x] = nc(x);
});
q.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var xx = "__sc-".concat(I0, "__");
q.NODE_ENV !== "production" && q.NODE_ENV !== "test" && typeof window < "u" && (window[xx] || (window[xx] = 4357 * 1 + -1807 + -10 * 255), window[xx] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[xx] += 8617 + 5 * -327 + -537 * 13);
const Ru = En.div`
  position: relative;
`, Pu = En.video`
  transform: ${(x) => x.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(x) => x.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class xe extends Error {
  constructor(t, e) {
    super(t);
    M(this, "cause");
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
var px = ((x) => (x.CONTINUE_DETECTION = "continue-detection", x.SWITCH_CAMERA = "switch-camera", x.TOGGLE_MIRROR = "toggle-mirror", x))(px || {}), xc = ((x) => (x.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", x.CONTROL = "document-auto-capture:control", x.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", x.DOCUMENT_DETECTION = "document-auto-capture:document-detection", x.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", x.STATE_CHANGED = "document-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", x))(xc || {}), jt = ((x) => (x.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", x.CONTROL = "face-auto-capture:control", x.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", x.FACE_DETECTION = "face-auto-capture:face-detection", x.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", x.STATE_CHANGED = "face-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", x))(jt || {}), Vu = ((x) => (x.ANIMATION_END = "magnifeye-auto-capture:animation-end", x.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", x))(Vu || {}), kx = ((x) => (x.STATUS_CHANGED = "smile-auto-capture:status-changed", x))(kx || {});
const rc = {};
rc.EYE_NOT_PRESENT = "eye_not_present";
const ya = rc, Le = {};
Le.CANDIDATE_SELECTION = "candidate_selection", Le.FACE_TOO_CLOSE = "face_too_close", Le.FACE_TOO_FAR = "face_too_far", Le.FACE_CENTERING = "face_centering", Le.FACE_NOT_PRESENT = "face_not_present", Le.SHARPNESS_TOO_LOW = "sharpness_too_low", Le.BRIGHTNESS_TOO_LOW = "brightness_too_low", Le.BRIGHTNESS_TOO_HIGH = "brightness_too_high", Le.DEVICE_PITCHED = "device_pitched", Le.LEFT_EYE_NOT_PRESENT = "left_" + ya.EYE_NOT_PRESENT, Le.RIGHT_EYE_NOT_PRESENT = "right_" + ya.EYE_NOT_PRESENT, Le.MOUTH_NOT_PRESENT = "mouth_not_present", Le.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", Le.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const Ke = Le, je = {};
je.isPresent = Ke.FACE_NOT_PRESENT, je.isNotPitched = Ke.DEVICE_PITCHED, je.isNotSmall = Ke.FACE_TOO_FAR, je.isNotLarge = Ke.FACE_TOO_CLOSE, je.isNotOutOfBounds = Ke.FACE_CENTERING, je.isNotDim = Ke.BRIGHTNESS_TOO_LOW, je.isNotBright = Ke.BRIGHTNESS_TOO_HIGH, je.isSharp = Ke.SHARPNESS_TOO_LOW, je.isLeftEyePresent = Ke.LEFT_EYE_NOT_PRESENT, je.isRightEyePresent = Ke.RIGHT_EYE_NOT_PRESENT, je.isMouthPresent = Ke.MOUTH_NOT_PRESENT, je.isMouthScoreNotTooHigh = Ke.MOUTH_SCORE_TOO_HIGH, je.isMouthScoreNotTooLow = Ke.MOUTH_SCORE_TOO_LOW;
const Tu = je, so = {};
so.FRONT = "user", so.REAR = "environment";
const oc = so, cn = {};
cn.LOADING = "LOADING", cn.ERROR = "ERROR", cn.WAITING = "WAITING", cn.RUNNING = "RUNNING";
const Bt = cn;
var Eu = ((x) => (x.CLOSEUP = "CLOSEUP", x.DISTANT = "DISTANT", x.MIDDLE = "MIDDLE", x))(Eu || {});
const co = {};
co.NEUTRAL = "NEUTRAL", co.SMILE = "SMILE";
const R0 = co, ic = { ...Bt };
ic.DONE = "DONE";
const d0 = ic, gr = Tn(void 0);
gr.displayName = "AppStateContext";
function $0() {
  const x = h0(gr);
  if (x === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return x;
}
const Lu = gr.Provider, Nu = $0;
class ac extends ut {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var t;
    const r = new xe("An unknown error has occurred");
    (t = this.context) == null || t.handleError(r);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var r;
    return ((r = this.context) == null ? void 0 : r.appState) === Bt.ERROR ? null : this.props.children;
  }
}
M(ac, "contextType", gr);
const Du = En.canvas`
  transform: ${(x) => x.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, Fu = En.div`
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
function Yu() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const Xu = As(
  ({ detectionDetails: x, isImageMirror: r }, t) => Yu() ? (console.log(x), /* @__PURE__ */ O(At, { children: [
    /* @__PURE__ */ O(Du, { ref: t, $isImageMirror: r }),
    /* @__PURE__ */ O(Fu, { children: Object.entries(x).map(([e, n]) => /* @__PURE__ */ O("div", { children: [
      e,
      ": ",
      /* @__PURE__ */ O("strong", { children: n })
    ] }, e)) })
  ] })) : null
), Hx = Tn(void 0);
Hx.displayName = "AnalyticsContext";
function sc() {
  const x = h0(Hx);
  if (x === void 0)
    throw new Error(`${Hx.displayName} must be used within a AnalyticsProvider`);
  return x;
}
(function(x, r) {
  function t(a, s, c, l, g) {
    return Re(a - -533, g);
  }
  function e(a, s, c, l, g) {
    return Re(c - 724, g);
  }
  const n = x();
  function o(a, s, c, l, g) {
    return Re(l - 408, a);
  }
  function i(a, s, c, l, g) {
    return Re(c - 120, l);
  }
  for (; ; )
    try {
      if (-parseInt(t(-325, -309, -323, -328, "HZ[6")) / 1 * (parseInt(t(-328, -337, -346, -317, "aJFA")) / 2) + parseInt(e(932, 933, 944, 943, "J1]b")) / 3 * (-parseInt(i(314, 312, 322, "9$3t", 330)) / 4) + -parseInt(e(931, 913, 917, 915, "toUP")) / 5 + -parseInt(t(-323, -340, -312, -306, "DJ60")) / 6 * (parseInt(o("toUP", 623, 643, 627, 630)) / 7) + parseInt(t(-321, -327, -322, -311, "PBTu")) / 8 + parseInt(e(950, 967, 949, 942, "r(q@")) / 9 + parseInt(i(335, 348, 347, "QXKd", 330)) / 10 * (parseInt(t(-319, -335, -329, -323, "J1]b")) / 11) === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ox, 1 * 364853 + 1062331 * -1 + -1 * -1563703);
function Wa(x, r, t, e, n) {
  return Re(t - 368, n);
}
function Re(x, r) {
  const t = Ox();
  return Re = function(e, n) {
    e = e - (757 + 3 * 2517 + -8117);
    let o = t[e];
    if (Re.HrPnCP === void 0) {
      var i = function(g) {
        const h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", C = "";
        for (let p = 0, A, d, W = 0; d = g.charAt(W++); ~d && (A = p % 4 ? A * 64 + d : d, p++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          d = h.indexOf(d);
        for (let p = 0, A = u.length; p < A; p++)
          C += "%" + ("00" + u.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const l = function(g, h) {
        let u = [], C = 0, p, A = "";
        g = i(g);
        let d;
        for (d = 0; d < 256; d++)
          u[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + u[d] + h.charCodeAt(d % h.length)) % 256, p = u[d], u[d] = u[C], u[C] = p;
        d = 0, C = 0;
        for (let W = 0; W < g.length; W++)
          d = (d + 1) % 256, C = (C + u[d]) % 256, p = u[d], u[d] = u[C], u[C] = p, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[d] + u[C]) % 256]);
        return A;
      };
      Re.KuWBCC = l, x = arguments, Re.HrPnCP = !0;
    }
    const a = t[1263 * 3 + 802 * 11 + -12611], s = e + a, c = x[s];
    return c ? o = c : (Re.iSreLU === void 0 && (Re.iSreLU = !0), o = Re.KuWBCC(o, n), x[s] = o), o;
  }, Re(x, r);
}
function va(x, r, t, e, n) {
  return Re(x - 518, r);
}
function go(x, r, t, e, n) {
  return Re(r - -877, t);
}
function Ox() {
  const x = ["W6PYCJRdMJVcM8kok8oBWPSVW7K", "W6tcQSkBd8oZF0y", "iSkIW5ldHCkd", "WOXVa8klW7lcN8kgwCkmtNBdSa", "WQRdUYaCW6RdLColWPmDW7G5W6VdJG", "cvezyK9fWRlcHSocW7BcJflcSW", "WQZcV3pcKe1QW6DuWO9G", "bCoWDCkaW4G", "WPzHWQtcS10", "qSo7W5bArmoFW4r4", "W7CtWOFcT8k1", "WQmSuKNdLCo4W7bqW7CYW5/dJgNdPa", "W5ldSGxdMhxcTCktaNC", "f8k1tY/dPW", "A0eP", "WQqUwetcMCkTWPSVW4G6", "u8k9hbpdOG", "DSkfaK8jgSkH", "WOS1kcLyWPZcJXjVW5nTW7mSWPS", "WPnZb8kUwXpcQItdNK3cHmkpWO0q", "W60cWOVdVSkS", "arpdM8oHWRxcTmkKoSo1", "mSkDW4Pw", "aSkeWRTdWRbEh3vhsaVcTmk8", "W5T9x38e", "W6upWQ3dTSkV", "W6nXEtNdNtBcMmk5hmorWRauW6u", "arddKmkJW6FdOSk3nSogkmoHW7a", "uCobWQbIWQq", "W5ZcHSk0W7tcPCo0iX47", "yCkLW5NcLSkt", "ASouWQxdPJ4", "zLvUemoqhXDEW7v8qmk5BmoG", "WQxdMmoNW6NcMW", "W58PWRNdOSkFW7rgW63cObz4W4LE", "WQD+ACo1WRRcSSokfq", "WOJcJx3dSgPiW6OzWPa"];
  return Ox = function() {
    return x;
  }, Ox();
}
function Mu(x, r, t, e, n) {
  return Re(t - 284, x);
}
const Zx = Tn(void (-9651 + -3217 * -3));
Zx[va(742, "&z8]") + go(-652, -659, "ymQy") + "e"] = go(-665, -651, "MVyQ") + va(718, "8[dT") + Mu("o9$s", 496, 499);
function ei() {
  const x = h0(Zx);
  function r(n, o, i, a, s) {
    return Wa(n - 90, o - 390, s - -1277, a - 67, o);
  }
  if (x === void (7453 + 257 * -29)) throw new Error(Zx[e(-76, -64, "4mHj", -48) + e(-52, -53, "8&WM", -47) + "e"] + (e(-52, -69, "#QME", -73) + r(-698, "tjDA", -669, -671, -686) + t(904, 901, "ymQy") + e(-45, -57, "ymQy", -48) + e(-76, -61, "4mHj", -45) + r(-707, "tjDA", -713, -696, -714) + r(-698, "Hz#^", -693, -672, -688) + r(-700, "!XdT", -703, -711, -702)));
  function t(n, o, i, a, s) {
    return go(n - 361, o - 1575, i);
  }
  function e(n, o, i, a, s) {
    return Wa(n - 373, o - 185, o - -638, a - 404, i);
  }
  return x;
}
(function(x, r) {
  function t(s, c, l, g, h) {
    return Se(l - 137, c);
  }
  const e = x();
  function n(s, c, l, g, h) {
    return Se(h - -846, c);
  }
  function o(s, c, l, g, h) {
    return Se(l - 994, c);
  }
  function i(s, c, l, g, h) {
    return Se(h - 993, c);
  }
  function a(s, c, l, g, h) {
    return Se(g - -790, c);
  }
  for (; ; )
    try {
      if (parseInt(o(1264, "zlUb", 1269, 1265, 1265)) / 1 + parseInt(n(-597, "lVoH", -580, -581, -589)) / 2 * (-parseInt(i(1252, "w)i0", 1255, 1267, 1265)) / 3) + -parseInt(i(1258, "VeHA", 1249, 1269, 1256)) / 4 * (-parseInt(o(1277, "0o0!", 1272, 1278, 1276)) / 5) + -parseInt(t(399, "hsf#", 401, 399, 392)) / 6 + -parseInt(t(414, "bt2d", 404, 403, 416)) / 7 * (parseInt(a(-535, "yuTY", -531, -524, -535)) / 8) + -parseInt(t(420, "PZ^W", 407, 404, 420)) / 9 + parseInt(t(400, "zYkc", 398, 388, 391)) / 10 === r) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Kx, -1 * 178594 + -126403 + 34877 * 15);
function Se(x, r) {
  const t = Kx();
  return Se = function(e, n) {
    e = e - (6244 + -5989 * 1);
    let o = t[e];
    if (Se.tjQpgR === void 0) {
      var i = function(g) {
        const h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", C = "";
        for (let p = 0, A, d, W = 0; d = g.charAt(W++); ~d && (A = p % 4 ? A * 64 + d : d, p++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          d = h.indexOf(d);
        for (let p = 0, A = u.length; p < A; p++)
          C += "%" + ("00" + u.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const l = function(g, h) {
        let u = [], C = 0, p, A = "";
        g = i(g);
        let d;
        for (d = 0; d < 256; d++)
          u[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + u[d] + h.charCodeAt(d % h.length)) % 256, p = u[d], u[d] = u[C], u[C] = p;
        d = 0, C = 0;
        for (let W = 0; W < g.length; W++)
          d = (d + 1) % 256, C = (C + u[d]) % 256, p = u[d], u[d] = u[C], u[C] = p, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[d] + u[C]) % 256]);
        return A;
      };
      Se.NDMbgE = l, x = arguments, Se.tjQpgR = !0;
    }
    const a = t[-1 * 4093 + -2897 + 233 * 30], s = e + a, c = x[s];
    return c ? o = c : (Se.JtuDap === void 0 && (Se.JtuDap = !0), o = Se.NDMbgE(o, n), x[s] = o), o;
  }, Se(x, r);
}
function ju({ licensePath: x, bramble: r, wasmDirectoryPath: t }) {
  const [e, n] = et(), o = e !== void (-919 * 5 + 4259 * -2 + -93 * -141);
  we(() => {
    async function c() {
      function l(u, C, p, A, d) {
        return Se(u - 765, C);
      }
      function g(u, C, p, A, d) {
        return Se(p - 921, u);
      }
      await r[l(1039, "Y*sS")](t, x);
      function h(u, C, p, A, d) {
        return Se(u - -390, d);
      }
      n(r[g("yuTY", 1182, 1189) + g("^ogU", 1171, 1181) + h(-128, -127, -129, -138, "OLg*") + "t"]());
    }
    c();
  }, [r, t, x, n]);
  const i = {};
  function a(c, l, g, h, u) {
    return Se(l - 656, h);
  }
  i[a(936, 929, 924, "VeHA") + s("]OV3", 1035, 1042, 1057, 1048)] = e;
  function s(c, l, g, h, u) {
    return Se(u - 792, c);
  }
  return i[s("ppuD", 1062, 1076, 1064, 1063) + "sh"] = o, i;
}
function Kx() {
  const x = ["W7tcISk0WQxdQmorW5zJ", "jr/cQ3JcImotW6hdPL0AWPJdPW", "i1NdJrtdR8kHW4S", "A8o2WRX/nCorWRPbe8oVWO/dPa", "pmoJWQtdPKFdU8k9", "oCkRW7aaza", "aSkGW4nDdSkLWQvIWQy/rSop", "FJxcLSoRW4JcTc/dTHhcSmkkamkJ", "pmoxqmkwWOm", "W5xdPNBcKYTCd8oiWPS/k8o+", "WQpdJmkRWRhdJG", "kwVdNa8", "nLKTECkSj8k6h8kaCH0", "fdKhW4vIWRxcPW", "kCoEsZ7dMCkKW6FdM0r1W7NdTW", "WPFdM0KfWPqbw2pcU8o6tSkF", "dmkEoGqpl8k0EW", "dSkJW4vxbmkGWRrEWROTwmol", "eLHbWQidW7dcLSoXfH7dN0u", "WOVcT8k6A8kP", "gHJcVCoMsmoOWQS", "W7DOzCoWW6BdTdiwWRdcIdJdL8oi", "ewnzW6ZdPmoaW458edFcLq", "ce5rW5NcTa", "W4ykW6ldSWHJW77cOSoTbCkVWPBcGW", "Bmo/iCodWO8"];
  return Kx = function() {
    return x;
  }, Kx();
}
var cc = ((x) => (x.DOCUMENT = "document-auto-capture:dev", x.FACE = "face-auto-capture:dev", x))(cc || {});
const uo = {};
uo.SIMD = "simd", uo.NO_SIMD = "no-simd";
const Sa = uo, lo = {};
lo.Lower = "Lower", lo.Higher = "Higher";
const Io = lo, mx = {};
mx.VISIBLE = "VISIBLE", mx.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", mx.HIDDEN = "HIDDEN";
const Rx = mx;
(function(x, r) {
  var t = x();
  function e(s, c, l, g, h) {
    return qe(g - -49, l);
  }
  function n(s, c, l, g, h) {
    return qe(l - 593, h);
  }
  function o(s, c, l, g, h) {
    return qe(g - 167, s);
  }
  function i(s, c, l, g, h) {
    return qe(l - 240, g);
  }
  for (; ; )
    try {
      var a = parseInt(i(686, 693, 683, "(s0w", 690)) / 1 + parseInt(e(405, 407, "youF", 406, 410)) / 2 + parseInt(i(694, 686, 696, "6NfP", 699)) / 3 + parseInt(e(396, 395, "vRIy", 397, 407)) / 4 * (-parseInt(o("Ozod", 624, 618, 625, 634)) / 5) + parseInt(e(418, 420, "Tfb7", 411, 421)) / 6 * (-parseInt(e(411, 413, "NH81", 404, 399)) / 7) + parseInt(n(1052, 1035, 1040, 1031, "9AY4")) / 8 * (parseInt(i(696, 698, 703, "youF", 700)) / 9) + -parseInt(n(1053, 1051, 1044, 1053, "qosP")) / 10 * (-parseInt(o("w&XY", 618, 641, 629, 636)) / 11);
      if (a === r) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Px, 129517 * -2 + -4127 * 8 + 593897);
function qe(x, r) {
  var t = Px();
  return qe = function(e, n) {
    e = e - (-64 * 99 + -3188 * 2 + 13154);
    var o = t[e];
    if (qe.shilql === void 0) {
      var i = function(g) {
        for (var h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", C = "", p = 0, A, d, W = 0; d = g.charAt(W++); ~d && (A = p % 4 ? A * 64 + d : d, p++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          d = h.indexOf(d);
        for (var k = 0, N = u.length; k < N; k++)
          C += "%" + ("00" + u.charCodeAt(k).toString(16)).slice(-2);
        return decodeURIComponent(C);
      }, a = function(g, h) {
        var u = [], C = 0, p, A = "";
        g = i(g);
        var d;
        for (d = 0; d < 256; d++)
          u[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + u[d] + h.charCodeAt(d % h.length)) % 256, p = u[d], u[d] = u[C], u[C] = p;
        d = 0, C = 0;
        for (var W = 0; W < g.length; W++)
          d = (d + 1) % 256, C = (C + u[d]) % 256, p = u[d], u[d] = u[C], u[C] = p, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[d] + u[C]) % 256]);
        return A;
      };
      qe.ihqnQr = a, x = arguments, qe.shilql = !0;
    }
    var s = t[-2298 + 613 * -7 + -599 * -11], c = e + s, l = x[c];
    return l ? o = l : (qe.Vjbayd === void 0 && (qe.Vjbayd = !0), o = qe.ihqnQr(o, n), x[c] = o), o;
  }, qe(x, r);
}
function Px() {
  var x = ["yK/dQmkLW5HVmb/dGSkiW67cPmk5", "gJa2W6SOn3FcSs8/W6ZdHG", "W7z9E24WhdPcW7xcR1VdLSkw", "u8kFbCoTWPTEW6RcJ8owWOe", "WRqjemokhW", "W6K3sSkvWQ/dU1VcNN7cHLVcPMS", "WO13W6xcIWTxBKNdOKW", "amkqWP7cKWhdIqZdMSoOavi", "zKJdOSkHW5LRsqZdQCkyW6hcTq", "W6NdICkcn8kdbYrWjG", "WOddRSovWRFdK8obWPBdSSoZW6/dTa", "z1ZdQ3DvcSkmW4q", "B8koW7NcRmkzW7pdKci", "WRLVCCoVza7dTbPQpg0", "WQjEtmoGWR8", "W6TNW43dHSkma8o5WQJdSmkH", "mI93WO/cRmodaXekWP8", "W5qnW7y/W55XgSoq", "amk3WPpdSSonWQ7dH35ilCoxW5K+", "ka4xW5G0", "ysfxW5JcGmojW6OJWQ7dQsBcRW", "W77dQI3cJCkkgfyqWOS", "W6eXtCkuWQ/cIGFcRutcPNq", "amk2W6pcH8kUW7hcVKe", "WRBcN8o1W4rOFwNdICk7vLldVG"];
  return Px = function() {
    return x;
  }, Px();
}
function Ju({ crosshatch: x }) {
  function r(t, e, n, o, i) {
    return qe(t - 50, o);
  }
  return x != null && x[r(499, 497, 487, "$Wh6") + "id"] ? Io[r(494, 482, 500, "*IC6") + "r"] : Io[r(509, 504, 499, "k1hb")];
}
(function(x, r) {
  function t(i, a, s, c, l) {
    return Pe(s - 735, a);
  }
  function e(i, a, s, c, l) {
    return Pe(l - 732, c);
  }
  const n = x();
  function o(i, a, s, c, l) {
    return Pe(i - 578, c);
  }
  for (; ; )
    try {
      if (parseInt(o(884, 885, 869, "1PP(", 876)) / 1 + -parseInt(t(1057, "Jb%a", 1068, 1060, 1082)) / 2 + parseInt(o(881, 876, 866, "el*2", 881)) / 3 * (-parseInt(t(1057, "Ot%6", 1052, 1037, 1064)) / 4) + parseInt(e(1051, 1055, 1068, "AqhB", 1062)) / 5 * (parseInt(o(894, 887, 884, "Nb4]", 903)) / 6) + -parseInt(o(885, 891, 886, "L%UY", 903)) / 7 * (parseInt(t(1078, "VA4T", 1060, 1073, 1053)) / 8) + -parseInt(t(1067, ")zFm", 1061, 1076, 1045)) / 9 * (parseInt(o(897, 894, 894, "^*c%", 886)) / 10) + parseInt(o(892, 893, 908, "el*2", 881)) / 11 * (parseInt(o(905, 908, 918, "CXRR", 887)) / 12) === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Vx, 1386 * 676 + -32 * -27581 + -1133539);
function Vx() {
  const x = ["vSoXiaxdRG", "wSodWPJcKKq", "W6ToW4ynW58", "lmkgpCoqD3C6", "W4JcSbJcM8kj", "W7XVW7C", "WP3cMN4Xu8knuSkzW78FEq", "cmkfW47dKfXysGH6W7a", "W554W7BdLGa", "WOGHmGlcVW", "kmo6fLhdTNJdS0qyW796W6C", "o2zEyN/cK8ki", "dLZcSmoYW6vOpSkLxKm", "rYJdKs/cHGhdGfWok8keqfu", "k8ogq8kxntzCv8kScZ3dKmkV", "p0u/bGO", "W4ThWQFdRmkgWPjPFG", "WQddLJxdICoPWRj2W7viv0BdQaS", "W4xcSadcPSkk", "je0aWQuoxs/cNa", "WPi2bWdcVW", "WQhcGqldMMSjpvbaWPS", "nfdcJfKC", "AqRdLG5gieXiW5dcHmk9WRdcGq", "u8osawizexldGSoorKPAWPa", "dSkktSoLc8kHWOZdKNWD", "W5bGBLpdV8ohWPRdUmk6WQFdNmkkWRu", "rvlcG2xdTNyzWRi", "W6xdJuKNf8orWQXn", "sbqKW6ZdGxrUW6JdRmkuWQBcGG", "WOhcOLVcOK/dTJT3WO/cLajV", "WRWuW74aW6HkW7ZcNG", "ACktgCotzG", "WPlcKmoVlCoNExtdRahcVSobha", "WRdcI3ZdMCoPWQBdLmkogqBdJq", "Dmk5WQ3dLe3cQX3cUG", "a8kdrq"];
  return Vx = function() {
    return x;
  }, Vx();
}
function Pe(x, r) {
  const t = Vx();
  return Pe = function(e, n) {
    e = e - (7275 * -1 + -7186 + -1 * -14761);
    let o = t[e];
    if (Pe.vsFFWX === void 0) {
      var i = function(g) {
        const h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", C = "";
        for (let p = 0, A, d, W = 0; d = g.charAt(W++); ~d && (A = p % 4 ? A * 64 + d : d, p++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          d = h.indexOf(d);
        for (let p = 0, A = u.length; p < A; p++)
          C += "%" + ("00" + u.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const l = function(g, h) {
        let u = [], C = 0, p, A = "";
        g = i(g);
        let d;
        for (d = 0; d < 256; d++)
          u[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + u[d] + h.charCodeAt(d % h.length)) % 256, p = u[d], u[d] = u[C], u[C] = p;
        d = 0, C = 0;
        for (let W = 0; W < g.length; W++)
          d = (d + 1) % 256, C = (C + u[d]) % 256, p = u[d], u[d] = u[C], u[C] = p, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[d] + u[C]) % 256]);
        return A;
      };
      Pe.GCRPcp = l, x = arguments, Pe.vsFFWX = !0;
    }
    const a = t[1 * 2117 + 17 * -259 + -127 * -18], s = e + a, c = x[s];
    return c ? o = c : (Pe.HQENZg === void 0 && (Pe.HQENZg = !0), o = Pe.GCRPcp(o, n), x[s] = o), o;
  }, Pe(x, r);
}
function _u({ children: x, licensePath: r, bramble: t, wasmDirectoryPath: e }) {
  const n = {};
  n[h("R^Q]", 79, 59, 63) + "le"] = t, n[h("(R1w", 81, 62, 81) + h(")zFm", 74, 76, 79) + "h"] = r;
  function o(p, A, d, W, k) {
    return Pe(W - 526, k);
  }
  n[o(839, 811, 820, 826, "cJ5m") + i(")zFm", 172, 185, 192, 186) + C(294, "R^Q]", 278) + "th"] = e;
  function i(p, A, d, W, k) {
    return Pe(k - -123, p);
  }
  const { sunfish: a, crosshatch: s } = ju(n), c = {};
  c[i("L%UY", 192, 190, 168, 178) + h("d3W0", 68, 73, 74)] = s;
  const l = tt(() => ({ redfin: Ju(c), sunfish: a, crosshatch: s, bramble: t }), [a, s, t]), g = {};
  g[o(874, 852, 847, 858, "el*2")] = l;
  function h(p, A, d, W, k) {
    return Pe(W - -241, p);
  }
  g[C(262, "lk#C", 262) + o(838, 814, 846, 831, "nsqy")] = x;
  function u(p, A, d, W, k) {
    return Pe(d - -736, k);
  }
  function C(p, A, d, W, k) {
    return Pe(d - -40, A);
  }
  return O(Zx[u(-438, -433, -428, -413, "nsqy") + u(-417, -399, -400, -407, "Es6)")], g);
}
function Tx() {
  var x = ["nSoAt8oZemkJW4DajmowkG", "W7u1WRiFW5K2WRXpv8oZmJxcNq", "WRO5ECkRgCkYfmkwWR1/gCoTW78", "W7ZdJ3BcHmkLWRFdOCkdW44", "jIxcQMRdQ8oTpYtcN8oXbxrk", "W4fuFtJdJCkYwWldICo9W4C", "j0OkphVcQ0BdSI/dSG", "kSo3WOtdTGRcQmo5fq7cRCoU", "W7VcNt3cK8kMWOZdJq", "W7BcTfiHWQaKobel", "m8o9WOJcHmkSW5XMlCke", "WOCIyIKxBmkOW60hW6hcIv0", "WOuSycaBA8o2W5WZW4/cTfSs", "euCOm8ovoXhcTeO", "tbKtWQGjqgC", "W5uxs00GWQZdPIhcNhtdO8kPoW", "FSkHWQvRW4ZdN8oCh0meWOK", "rb5JCL1CqSkFdKhcJSki", "WO/dRCoQW5xcSq5i", "WOuOysiAB8o0W6mZW4BcML4Y", "qSopW6pcImk9W7pdTG", "frFdG8oJdgusfwaGW5dcRey", "mSkDCmoAgSoDw8kggmo4", "W73dJNFdGmozW4pcUmkiW6LcyuFcIq"];
  return Tx = function() {
    return x;
  }, Tx();
}
(function(x, r) {
  function t(c, l, g, h, u) {
    return $e(h - -952, c);
  }
  var e = x();
  function n(c, l, g, h, u) {
    return $e(c - -167, g);
  }
  function o(c, l, g, h, u) {
    return $e(g - -111, l);
  }
  function i(c, l, g, h, u) {
    return $e(h - -501, u);
  }
  function a(c, l, g, h, u) {
    return $e(l - -231, h);
  }
  for (; ; )
    try {
      var s = parseInt(a(-46, -46, -34, "RE5j", -47)) / 1 * (-parseInt(t("20bp", -768, -768, -760, -750)) / 2) + parseInt(n(26, 23, "cH#X", 16, 21)) / 3 + -parseInt(t("S(0x", -766, -783, -771, -765)) / 4 * (parseInt(i(-301, -299, -316, -311, "0mc2")) / 5) + -parseInt(o(80, "v93&", 71, 67, 67)) / 6 + parseInt(n(27, 17, "0mc2", 31, 16)) / 7 * (-parseInt(i(-301, -300, -298, -303, "ispD")) / 8) + parseInt(a(-54, -48, -40, "I7AM", -49)) / 9 * (-parseInt(n(22, 17, "lR[b", 10, 24)) / 10) + parseInt(t("XV$R", -757, -758, -748, -741)) / 11 * (parseInt(a(-23, -29, -40, "k9Pj", -36)) / 12);
      if (s === r) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Tx, -597127 * -1 + 648035 + -837950);
function $e(x, r) {
  var t = Tx();
  return $e = function(e, n) {
    e = e - (849 * 7 + -4111 + -1651);
    var o = t[e];
    if ($e.HkwTMk === void 0) {
      var i = function(g) {
        for (var h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", C = "", p = 0, A, d, W = 0; d = g.charAt(W++); ~d && (A = p % 4 ? A * 64 + d : d, p++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          d = h.indexOf(d);
        for (var k = 0, N = u.length; k < N; k++)
          C += "%" + ("00" + u.charCodeAt(k).toString(16)).slice(-2);
        return decodeURIComponent(C);
      }, a = function(g, h) {
        var u = [], C = 0, p, A = "";
        g = i(g);
        var d;
        for (d = 0; d < 256; d++)
          u[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + u[d] + h.charCodeAt(d % h.length)) % 256, p = u[d], u[d] = u[C], u[C] = p;
        d = 0, C = 0;
        for (var W = 0; W < g.length; W++)
          d = (d + 1) % 256, C = (C + u[d]) % 256, p = u[d], u[d] = u[C], u[C] = p, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[d] + u[C]) % 256]);
        return A;
      };
      $e.rCAlHT = a, x = arguments, $e.HkwTMk = !0;
    }
    var s = t[-6180 + -2 * 29 + -6238 * -1], c = e + s, l = x[c];
    return l ? o = l : ($e.AhPAbN === void 0 && ($e.AhPAbN = !0), o = $e.rCAlHT(o, n), x[c] = o), o;
  }, $e(x, r);
}
function Qu({ analytics: x, crosshatch: r }) {
  return r !== void (6712 + -1 * 7334 + 1 * 622) && !r.isAnalyticsDisabled ? x : void (-1 * 3642 + 58 * -66 + 7470);
}
function Uu({ analytics: x, appKey: r, redfin: t, crosshatch: e, bramble: n }) {
  const o = {};
  o.analytics = x, o.crosshatch = e;
  const i = Qu(o);
  return we(() => {
    i && i.init(r);
  }, [i, r]), we(() => {
    e && (console.info("Analytics is " + (e.isAnalyticsDisabled ? "disabled" : "enabled")), i && i.walleye(t, n.getCustomerName()));
  }, [i, n, e, t]), we(() => {
    if (i)
      return window.addEventListener("beforeunload", i.endSession), () => {
        i.endSession(), window.removeEventListener("beforeunload", i.endSession);
      };
  }, [i]), i;
}
function zu({
  analytics: x,
  appKey: r,
  children: t
}) {
  const { redfin: e, crosshatch: n, bramble: o } = ei(), i = Uu({ analytics: x, redfin: e, appKey: r, crosshatch: n, bramble: o }), a = tt(
    () => ({
      analytics: i
    }),
    [i]
  );
  return /* @__PURE__ */ O(Hx.Provider, { value: a, children: t });
}
const qu = -5872 + 2 * 1733 + 3 * 802 + 0.4, $u = 94 * -56 + -3336 + 8600 + 0.16, el = -3011 * 3 + -3 * -331 + 3 * 2680 + 0.2, tl = -2 * -2771 + 31 * -237 + -1 * -1805 + 0.05, nl = 7035 + -67 * 69 + -1 * 2412, fo = {};
fo.min = -(-4339 + 1 * 8123 + -3783), fo.max = 1;
const wa = fo, Ba = -37 * -52 + -6374 + 890 * 5, xl = 4 * -2390 + 1 * 3471 + 6089 + 0.3, rl = 0 + 0.2, ol = -2628 + -227 * 1 + 2855 * 1 + 0.85, il = -9780 + -6551 * 1 + 16361, al = -2 * 3409 + -1297 * 2 + 9421 + 0.8100000000000005, bx = {};
bx.minDuration = 1e3, bx.maxDuration = 2500, bx.minFrames = 10;
const Rr = bx, Co = {};
Co.max = 100, Co.min = 10;
const Ga = Co, sl = 720, cl = -1 * -3666 + -7569 + -1 * -4103, gl = -446 * 15 + -17 * 550 + 16044 * 1, gc = "AES-CBC", dc = "RSA-OAEP", dl = "SHA-256", ul = "image/jpeg", ll = 5458 + -1 * -1351 + -6801, Il = -7480 + -1823 * 2 + 11166, fl = "SAM v1.39.3 for idcards", Cl = "dot_embedded_bg.wasm";
let Q;
const Vt = new Array(707 + -193 * 3).fill(void 0);
Vt.push(void 0, null, !0, !1);
function ho(x) {
  return Vt[x];
}
let Cn = Vt.length;
function hl(x) {
  x < 6 * 524 + -7288 + 4276 || (Vt[x] = Cn, Cn = x);
}
function uc(x) {
  const r = ho(x);
  return hl(x), r;
}
let Lt = 5721 + 26 * -177 + -1119, gn = null;
function Ax() {
  return (gn === null || gn.byteLength === -3 * -2807 + -769 * -11 + -16880) && (gn = new Uint8Array(Q.memory.buffer)), gn;
}
const yx = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, pl = typeof yx.encodeInto == "function" ? function(x, r) {
  return yx.encodeInto(x, r);
} : function(x, r) {
  const t = yx.encode(x);
  r.set(t);
  const e = {};
  return e.read = x.length, e.written = t.length, e;
};
function Ex(x, r, t) {
  if (t === void 0) {
    const a = yx.encode(x), s = r(a.length, -22 * -138 + 2109 + -8 * 643) >>> 6480 + -180 * 36;
    return Ax().subarray(s, s + a.length).set(a), Lt = a.length, s;
  }
  let e = x.length, n = r(e, -3901 * 1 + -653 + 4555) >>> 1 * -9503 + -1 * 8873 + 9188 * 2;
  const o = Ax();
  let i = 2498 + 1 * -8323 + -233 * -25;
  for (; i < e; i++) {
    const a = x.charCodeAt(i);
    if (a > 127) break;
    o[n + i] = a;
  }
  if (i !== e) {
    i !== -4226 + -2113 * -2 && (x = x.slice(i)), n = t(n, e, e = i + x.length * (-1 * 2994 + -287 + -3284 * -1), -713 * -1 + 4594 * 2 + -9900) >>> 4881 + -1 * 4881;
    const a = Ax().subarray(n + i, n + e), s = pl(x, a);
    i += s.written, n = t(n, e, i, 2 * 4573 + 8028 + -17173) >>> -2 * 3313 + -6479 + 13105;
  }
  return Lt = i, n;
}
function lc(x) {
  return x == null;
}
let dn = null;
function Mt() {
  return (dn === null || dn.byteLength === 4633 * -1 + 8149 * -1 + -1162 * -11) && (dn = new Int32Array(Q.memory.buffer)), dn;
}
const po = {};
po.ignoreBOM = !0, po.fatal = !0;
const Ic = typeof TextDecoder < "u" ? new TextDecoder("utf-8", po) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && Ic.decode();
function mo(x, r) {
  return x = x >>> -3681 + 6547 * -1 + 4 * 2557, Ic.decode(Ax().subarray(x, x + r));
}
function bo(x) {
  Cn === Vt.length && Vt.push(Vt.length + (1 * -7653 + 1 * 7269 + 77 * 5));
  const r = Cn;
  return Cn = Vt[r], Vt[r] = x, r;
}
let un = null;
function fc() {
  return (un === null || un.byteLength === 4147 + -1429 * 3 + 140) && (un = new Uint32Array(Q.memory.buffer)), un;
}
function ka(x, r) {
  const t = r(x.length * 4, 4) >>> 0, e = fc();
  for (let n = -7570 + -49 * 197 + 17223; n < x.length; n++)
    e[t / 4 + n] = bo(x[n]);
  return Lt = x.length, t;
}
function Ha(x, r) {
  x = x >>> 4116 + -13 * 350 + -2 * -217;
  const t = fc(), e = t.subarray(x / 4, x / (-8615 * 1 + -2572 + 1 * 11191) + r), n = [];
  for (let o = 461 + -36 * 16 + 115; o < e.length; o++)
    n.push(uc(e[o]));
  return n;
}
function ml(x, r) {
  const t = Ex(x, Q.__wbindgen_malloc, Q.__wbindgen_realloc), e = Lt, n = Ex(r, Q.__wbindgen_malloc, Q.__wbindgen_realloc), o = Lt, i = Q.is_mobile_supported(t, e, n, o);
  return ti.__wrap(i);
}
const Ao = {};
Ao.register = () => {
}, Ao.unregister = () => {
};
const Oa = typeof FinalizationRegistry > "u" ? Ao : new FinalizationRegistry((x) => Q.__wbg_licensevalidationresult_free(x >>> 2893 + 5 * -1483 + 4522));
class ti {
  static __wrap(r) {
    r = r >>> -2 * 2201 + -37 * -155 + -43 * 31;
    const t = Object.create(ti.prototype);
    return t.__wbg_ptr = r, Oa.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const r = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Oa.unregister(this), r;
  }
  free() {
    const r = this.__destroy_into_raw();
    Q.__wbg_licensevalidationresult_free(r);
  }
  constructor(r, t, e, n) {
    var o = lc(t) ? 0 : Ex(t, Q.__wbindgen_malloc, Q.__wbindgen_realloc), i = Lt;
    const a = ka(e, Q.__wbindgen_malloc), s = Lt, c = ka(n, Q.__wbindgen_malloc), l = Lt, g = Q.licensevalidationresult_new(r, o, i, a, s, c, l);
    return this.__wbg_ptr = g >>> -2 * 4379 + -8873 + 5877 * 3, this;
  }
  get is_valid() {
    return Q.licensevalidationresult_is_valid(this.__wbg_ptr) !== -11309 + -1 * -11309;
  }
  get features_json() {
    try {
      const e = Q.__wbindgen_add_to_stack_pointer(-16);
      Q.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var r = Mt()[e / (-2893 + 2 * -964 + 4825 * 1) + (2 * 2812 + -8558 + 163 * 18)], t = Mt()[e / 4 + (8992 * -1 + 1 * -3608 + 12601)];
      let n;
      return r !== -3083 * 1 + 2057 + 171 * 6 && (n = mo(r, t).slice(), Q.__wbindgen_free(r, t * (-1494 + 3140 * 3 + -7925), 1309 * 5 + -960 + -5584)), n;
    } finally {
      Q.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get errors() {
    try {
      const n = Q.__wbindgen_add_to_stack_pointer(-16);
      Q.licensevalidationresult_errors(n, this.__wbg_ptr);
      var r = Mt()[n / (-1434 * 1 + 1686 * 3 + -4 * 905) + (-15093 + 387 * 39)], t = Mt()[n / 4 + (6517 + 1629 * -4)], e = Ha(r, t).slice();
      return Q.__wbindgen_free(r, t * (4720 + 3 * -798 + -54 * 43), -9431 * -1 + -1 * -2001 + -11428), e;
    } finally {
      Q.__wbindgen_add_to_stack_pointer(-1 * 290 + 7469 + 19 * -377);
    }
  }
  get warnings() {
    try {
      const n = Q.__wbindgen_add_to_stack_pointer(-16);
      Q.licensevalidationresult_warnings(n, this.__wbg_ptr);
      var r = Mt()[n / (352 * 8 + 7050 + -2 * 4931) + (22 * -357 + 1762 + 3046 * 2)], t = Mt()[n / (-9255 + 16 * 4 + 3 * 3065) + 1], e = Ha(r, t).slice();
      return Q.__wbindgen_free(r, t * (1279 + -4467 * 2 + 7659), 4), e;
    } finally {
      Q.__wbindgen_add_to_stack_pointer(16);
    }
  }
}
async function bl(x, r) {
  if (typeof Response == "function" && x instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(x, r);
    } catch (e) {
      if (x.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
      else throw e;
    }
    const t = await x.arrayBuffer();
    return await WebAssembly.instantiate(t, r);
  } else {
    const t = await WebAssembly.instantiate(x, r);
    if (t instanceof WebAssembly.Instance) {
      const e = {};
      return e.instance = t, e.module = x, e;
    } else return t;
  }
}
function Al() {
  const x = {};
  return x.wbg = {}, x.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return bo(/* @__PURE__ */ new Date());
  }, x.wbg.__wbg_getTime_2bc4375165f02d15 = function(r) {
    return ho(r).getTime();
  }, x.wbg.__wbindgen_object_drop_ref = function(r) {
    uc(r);
  }, x.wbg.__wbindgen_string_get = function(r, t) {
    const e = ho(t), n = typeof e == "string" ? e : void 0;
    var o = lc(n) ? -3721 * 1 + 309 * -2 + -4339 * -1 : Ex(n, Q.__wbindgen_malloc, Q.__wbindgen_realloc), i = Lt;
    Mt()[r / (-5668 + -1 * 5471 + 1013 * 11) + (3147 + 4 * -428 + -1434)] = i, Mt()[r / (-26 * -4 + 3423 + -3523) + (-2 * 66 + -1052 + 1184)] = o;
  }, x.wbg.__wbindgen_string_new = function(r, t) {
    const e = mo(r, t);
    return bo(e);
  }, x.wbg.__wbindgen_throw = function(r, t) {
    throw new Error(mo(r, t));
  }, x;
}
function yl(x, r) {
  return Q = x.exports, Cc.__wbindgen_wasm_module = r, dn = null, un = null, gn = null, Q;
}
async function Cc(x) {
  if (Q !== void 0) return Q;
  typeof x > "u" && (x = new URL("dot_embedded_bg.wasm", import.meta.url));
  const r = Al();
  (typeof x == "string" || typeof Request == "function" && x instanceof Request || typeof URL == "function" && x instanceof URL) && (x = fetch(x));
  const { instance: t, module: e } = await bl(await x, r);
  return yl(t, e);
}
(function(x, r) {
  function t(a, s, c, l, g) {
    return ke(a - 333, l);
  }
  function e(a, s, c, l, g) {
    return ke(a - 968, c);
  }
  const n = x();
  function o(a, s, c, l, g) {
    return ke(s - -205, l);
  }
  function i(a, s, c, l, g) {
    return ke(l - -514, s);
  }
  for (; ; )
    try {
      if (parseInt(o(-116, -90, -80, "JMGR", -76)) / 1 + -parseInt(o(-103, -95, -112, "a0W3", -92)) / 2 + parseInt(e(1092, 1094, "(CWv", 1112, 1088)) / 3 + -parseInt(e(1103, 1085, "arv3", 1122, 1079)) / 4 * (parseInt(i(-381, "&ml(", -385, -359, -336)) / 5) + -parseInt(i(-391, "tZ#O", -389, -394, -390)) / 6 + -parseInt(t(449, 447, 425, "eE8V", 433)) / 7 + parseInt(e(1079, 1085, "&6KP", 1085, 1067)) / 8 === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Lx, 971622);
function Wl(x, r, t, e, n) {
  return ke(r - 847, x);
}
function Pr(x, r, t, e, n) {
  return ke(x - 455, t);
}
function ke(x, r) {
  const t = Lx();
  return ke = function(e, n) {
    e = e - (27 * 144 + 4 * 26 + -3888);
    let o = t[e];
    if (ke.vBASSJ === void 0) {
      var i = function(g) {
        const h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", C = "";
        for (let p = 0, A, d, W = 0; d = g.charAt(W++); ~d && (A = p % 4 ? A * 64 + d : d, p++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          d = h.indexOf(d);
        for (let p = 0, A = u.length; p < A; p++)
          C += "%" + ("00" + u.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const l = function(g, h) {
        let u = [], C = 0, p, A = "";
        g = i(g);
        let d;
        for (d = 0; d < 256; d++)
          u[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + u[d] + h.charCodeAt(d % h.length)) % 256, p = u[d], u[d] = u[C], u[C] = p;
        d = 0, C = 0;
        for (let W = 0; W < g.length; W++)
          d = (d + 1) % 256, C = (C + u[d]) % 256, p = u[d], u[d] = u[C], u[C] = p, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[d] + u[C]) % 256]);
        return A;
      };
      ke.HwvHEW = l, x = arguments, ke.vBASSJ = !0;
    }
    const a = t[-9730 + 14 * 695], s = e + a, c = x[s];
    return c ? o = c : (ke.LgDBQW === void 0 && (ke.LgDBQW = !0), o = ke.HwvHEW(o, n), x[s] = o), o;
  }, ke(x, r);
}
function rx(x, r, t, e, n) {
  return ke(x - 155, e);
}
function G0(x, r, t, e, n) {
  return ke(e - 572, t);
}
function Lx() {
  const x = ["W6j/WOzF", "q8kAW55cW5C3W4ObtCkgWQ1GWRG", "sSkBW5G2Fq", "DmkOnK0g", "F8kKWRzCW6a", "q8oylSk5WQLJqeddJCo1WRex", "DCo4mmkSWQC", "WR/cUCoNWRZcUq", "exHwWOdcMw4SxZZcKNCtW6q", "amkplmoGCSkkB8kuW7n5x8k8", "WRSPWQjtu8kXWPS", "p8oUWOJdUCkm", "CCkzwSouoG", "BtJdGMG+", "WPddKmkIW48m", "qmoqkCk8WQ9HrNVdN8oVWQiA", "WRGGW54AiSkKwSo1WP3dMCo4W6FdQq", "nmoox8oina", "kmohW7BcPq", "BCkwWRxdUSo1W5xdJ8obvM5usG0", "WRbpl2nZWReEW6hcGmkEdSoX", "BSkrWRFdUmo2W5hcUmocFg11Eq", "oSocW5VcQCkI", "n1WoWOBcKW", "x0PhWR7dKW", "WQ4gW483WOvhkCozWQXKrtpdGa", "umk8W5ZcQ2S", "mSohW7dcOSkQ", "b8kqW5m7Bq", "W6BdPSkOW67dPCoKsSkoWQmiWPHTCW", "s8kqW4C3Fq", "oSkRpLef", "W7ryWOLHWPe", "WO/cOHX1W54", "DCkauSoQca", "DqTiW5ZdOHRdIXTLWQZdUY3dLq", "WRRcVSo7WRBcRW", "WOSsjZJcMG", "zmkXW53dGfa", "AmoPWPRdVCkP", "v2dcRSkeW4RcU8k3", "kmohW7FcPSkm", "ACo0oCkRWQK", "jSkgWOnKW61+hmkEW5hcQSksiG8", "jfijWRtcVW", "W4ddPdWZW7a", "WR4OW5OEiSkGp8oVWOxdPmonW6u", "W6ikWRPqtW", "W5lcKmodFGe", "hmkiCmoGW6q", "WQNdRYimWQ0", "gCkazSoSW7O"];
  return Lx = function() {
    return x;
  }, Lx();
}
function Za(x, r, t, e, n) {
  return ke(e - 411, r);
}
var ns;
class vl {
  constructor() {
    M(this, ns, !1);
  }
  async [(ns = Za(547, "qDA(", 539, 551) + G0(694, 701, "l#Zk", 717) + G0(706, 711, "zd8U", 723), G0(738, 730, "&6KP", 719))](r = Pr(581, 564, "r]VZ")) {
    function t(a, s, c, l, g) {
      return rx(c - 42, s - 91, c - 147, g);
    }
    function e(a, s, c, l, g) {
      return Za(a - 345, g, c - 216, s - -444);
    }
    function n(a, s, c, l, g) {
      return rx(a - -288, s - 169, c - 7, s);
    }
    function o(a, s, c, l, g) {
      return rx(s - -271, s - 75, c - 494, l);
    }
    function i(a, s, c, l, g) {
      return Wl(l, a - -1799);
    }
    try {
      const a = r + "/" + Cl;
      await Cc(a), this[t(316, 338, 315, 319, "TpL4") + n(-25, "mu[9", -11, -25, -42) + t(328, 319, 343, 325, "a0W3")] = !0;
    } catch {
      this[t(321, 314, 331, 307, "ZYDh") + n(0, "Wb7J", -15) + n(-8, "D!u4", -18)] = !1, console[e(102, 80, 64, 84, "eE8V")](t(349, 332, 336, 325, "TpL4") + t(330, 353, 346, 350, "D!u4") + e(79, 84, 103, 87, "eE8V") + e(83, 74, 48, 83, "XH$H") + t(318, 311, 320, 327, "D!u4") + o(26, 28, 18, "a0W3") + n(-12, "aW#]", -25) + t(322, 303, 303, 291, "ZYDh") + e(101, 95, 104, 101, "H!lm") + i(-809, -796, -826, "ABC%") + o(41, 16, 25, "lseE") + n(-21, "XH$H", -8) + n(4, "rSuW", -3) + n(17, "r]VZ", 24) + o(-20, -7, -15, "E4iS") + o(36, 11, 18, "tZ#O") + e(123, 98, 86, 109, "(CWv") + o(-18, 6, -4, "eE8V") + "n.");
    }
  }
  [rx(274, 276, 248, "l^F0") + G0(722, 694, "Xj46", 714) + Pr(608, 593, "rSuW") + "ed"]() {
    function r(n, o, i, a, s) {
      return Pr(n - -485, o - 396, s);
    }
    function t(n, o, i, a, s) {
      return G0(n - 106, o - 297, o, s - -1050);
    }
    function e(n, o, i, a, s) {
      return G0(n - 473, o - 362, n, o - -1202);
    }
    return this[r(106, 91, 112, 118, "eE8V") + e("HqGx", -501) + t(-316, "(CWv", -309, -337, -324)];
  }
}
class Vr extends Error {
  constructor() {
    super(...arguments);
    M(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function Kt(x, r, t, e, n) {
  return ue(t - 330, x);
}
function ue(x, r) {
  var t = Nx();
  return ue = function(e, n) {
    e = e - (-5301 + 5449 * 1);
    var o = t[e];
    if (ue.xttrRt === void 0) {
      var i = function(g) {
        for (var h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", C = "", p = 0, A, d, W = 0; d = g.charAt(W++); ~d && (A = p % 4 ? A * 64 + d : d, p++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          d = h.indexOf(d);
        for (var k = 0, N = u.length; k < N; k++)
          C += "%" + ("00" + u.charCodeAt(k).toString(16)).slice(-2);
        return decodeURIComponent(C);
      }, a = function(g, h) {
        var u = [], C = 0, p, A = "";
        g = i(g);
        var d;
        for (d = 0; d < 256; d++)
          u[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + u[d] + h.charCodeAt(d % h.length)) % 256, p = u[d], u[d] = u[C], u[C] = p;
        d = 0, C = 0;
        for (var W = 0; W < g.length; W++)
          d = (d + 1) % 256, C = (C + u[d]) % 256, p = u[d], u[d] = u[C], u[C] = p, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[d] + u[C]) % 256]);
        return A;
      };
      ue.cqpAHh = a, x = arguments, ue.xttrRt = !0;
    }
    var s = t[0], c = e + s, l = x[c];
    return l ? o = l : (ue.rXsDQu === void 0 && (ue.rXsDQu = !0), o = ue.cqpAHh(o, n), x[c] = o), o;
  }, ue(x, r);
}
function ox(x, r, t, e, n) {
  return ue(t - 397, r);
}
(function(x, r) {
  function t(c, l, g, h, u) {
    return ue(u - -413, c);
  }
  function e(c, l, g, h, u) {
    return ue(g - 686, h);
  }
  function n(c, l, g, h, u) {
    return ue(c - -337, l);
  }
  function o(c, l, g, h, u) {
    return ue(u - -907, c);
  }
  var i = x();
  function a(c, l, g, h, u) {
    return ue(c - -700, h);
  }
  for (; ; )
    try {
      var s = -parseInt(a(-512, -524, -509, "7))@", -510)) / 1 + -parseInt(a(-507, -511, -504, "]r[v", -490)) / 2 * (parseInt(n(-132, "pTrJ", -104, -144, -157)) / 3) + -parseInt(t("8n6E", -220, -232, -196, -205)) / 4 * (parseInt(t("nZXa", -242, -286, -272, -255)) / 5) + -parseInt(e(868, 869, 884, "0lbJ", 890)) / 6 * (parseInt(n(-186, "v[UW", -187, -210, -200)) / 7) + parseInt(e(856, 879, 860, "wyKU", 875)) / 8 + -parseInt(t("J9Sr", -244, -236, -272, -259)) / 9 * (-parseInt(o("]r[v", -713, -733, -701, -708)) / 10) + -parseInt(a(-525, -550, -527, "NcDq", -515)) / 11 * (-parseInt(e(881, 858, 862, "C*%G", 873)) / 12);
      if (s === r) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Nx, -214602 + -8 * 90105 + -28519 * -64);
function Nx() {
  var x = ["WRpdGf0yAW", "W5uFo1/cGvZcUSoxW7bgWRrpWQi", "uudcPW", "W6ldNmoGWOddMmkWW7pdJZBdRmk0WROX", "W5dcKSoiW7tcUq3cVq", "WO9lWOJdJ1K1ua", "W5qwfmoDb8kxWQhcVCkpd1e", "W4tcRmofWRBcPq", "WOrwq8kdWOq", "amkCguifWRpcKGtdVq", "EhLUW5TW", "uai3t3a", "rCkUW5hdVce", "W5ZcVmkUW4m9", "W4ZcHKO", "imottXKN", "WRNdJuWF", "W4BcUmk7W4Wb", "W4JcVmkUW5SC", "W5xcHdurWOxdPYlcUgqFWPNcQ34", "WQyEW4/cI8kTW75Vax7cVZK", "W7/cO8otWRhdRrbgW6JdOZVdUW", "W4TpWRxdL3O", "Fmk3W4i", "axW2W4rE", "WOKAW7BcKszrhYWXW4zMWPtcHG", "WRrMp8kPW7G", "x1ncW7jSiJxdJCkEWO3dHJqe", "lCoasru9", "W4hcU8olWRhcOW", "WQ5pm8koW6S", "W4yKW7dcU14Uvdj4DCopiW", "WQxdM2W", "pSoSWPZdJmoVWQ5FxCk2ixGABa", "rsXWWQGeEMhcPmoMbmohW7VcJa", "Emk5W57cKCkW", "FHmRW5zM", "yCk/W58", "fmk5W6ZdUbuEWPG", "tulcP8oRWOC", "W5RdR3a0WOG", "WR0WWP3cJe0", "o8oHWPJdHSoPWQHDx8k5lMeoAG", "WPtdQSkDW7ZdPKjUW5HrzHT7da", "e8oPWPhcPMD8WQKQpSoaW5ZdLG", "jvjpWO8+cNhcKSkADSou", "W4yHWOpdUwW", "W4BdTqJcT8kc", "amkWW6tdNmoH", "WR8/W6X1Cq", "w8o3WORcN8k5gqe4WRVcLSoZW7K6", "W5ldR2u6", "gWyhWQu1", "ESoSWRWGm8oBW7a", "WQ7dO8koW7RcQG", "tubfWOqMBmk1W6a", "q8omwq", "W43cQ8kGW5WA", "sCkVW6ldVti", "WOFcPs3cJ8k9WQpdLX4", "xfxcU8ohWP4", "i8oexaiG", "W5pdUmkZdmoRzxbpWOe"];
  return Nx = function() {
    return x;
  }, Nx();
}
function Ka(x, r, t, e, n) {
  return ue(n - -953, r);
}
function Tr(x, r, t, e, n) {
  return ue(e - -504, n);
}
function Ra(x, r, t, e, n) {
  return ue(n - 47, x);
}
var E0;
class Pa {
  constructor(r) {
    ce(this, E0);
    function t(o, i, a, s, c) {
      return ue(i - -144, s);
    }
    function e(o, i, a, s, c) {
      return ue(c - -80, i);
    }
    this[t(-11, 8, -15, "Zlxf") + t(52, 60, 86, "m1[S")] = r;
    function n(o, i, a, s, c) {
      return ue(o - -507, a);
    }
    try {
      ae(this, E0, r[e(109, "q(T3", 73, 93, 93) + e(95, "bPqp", 70, 119, 99) + e(104, "7))@", 85, 83, 98)] && JSON[n(-330, -349, "iTQ5", -314, -358)](r[e(79, "0lbJ", 93, 92, 104) + e(87, "Zlxf", 85, 94, 114) + n(-338, -360, "j1uT", -314, -326)]));
    } catch (o) {
      console[t(58, 62, 89, "p$tv")](o);
    }
  }
  get [Kt("7EAp", 494, 521) + "id"]() {
    function r(n, o, i, a, s) {
      return Kt(i, o - 449, o - -543);
    }
    function t(n, o, i, a, s) {
      return Kt(s, o - 306, o - 542);
    }
    function e(n, o, i, a, s) {
      return Kt(n, o - 464, a - -955);
    }
    return this[e("q(T3", -505, -459, -476) + r(-75, -58, "Bh#g")][t(1066, 1075, 1084, 1083, "pTrJ") + t(1072, 1059, 1042, 1044, "#H[E")];
  }
  get [Kt("]r[v", 480, 497) + "s"]() {
    function r(e, n, o, i, a) {
      return Kt(n, n - 155, e - 67);
    }
    function t(e, n, o, i, a) {
      return Ra(a, n - 179, o - 245, i - 386, n - -902);
    }
    return this[r(606, "C*%G") + r(580, "3Uy^")][t(-662, -685, -673, -689, "3Uy^") + "s"];
  }
  get [ox(556, "7))@", 587) + Kt("Zlxf", 455, 487)]() {
    function r(e, n, o, i, a) {
      return Kt(n, n - 44, e - 185);
    }
    function t(e, n, o, i, a) {
      return ox(e - 51, o, i - -834);
    }
    return this[r(677, "0lbJ") + r(687, "q(T3")][r(722, "!NIv") + t(-272, -247, "7))@", -245)];
  }
  get [Tr(-370, -328, -319, -339, "p1HG") + "b"]() {
    return j(this, E0);
  }
  get [Kt("]r[v", 468, 480) + Tr(-322, -274, -287, -303, "9FNM") + Ra("AsPr", 212, 217, 238, 228) + Ka(-756, "Bh#g", -763, -762, -782)]() {
    var o, i;
    function r(a, s, c, l, g) {
      return Ka(a - 53, s, c - 29, l - 148, c - 1587);
    }
    function t(a, s, c, l, g) {
      return Tr(a - 454, s - 471, c - 470, c - 1265, a);
    }
    function e(a, s, c, l, g) {
      return ox(a - 435, g, s - -1370);
    }
    function n(a, s, c, l, g) {
      return ox(a - 183, c, l - -801);
    }
    return !!((i = (o = j(this, E0)) == null ? void 0 : o[t("3Uy^", 886, 914) + t("NKr#", 920, 909)]) != null && i[r(800, "q(T3", 802, 785) + e(-781, -788, -771, -770, "AsPr") + t("p$tv", 940, 956) + n(-248, -258, "5g]v", -238) + n(-220, -263, "O5B%", -241) + n(-233, -216, "8lF0", -208) + t("v[UW", 955, 963) + "d"]);
  }
}
E0 = new WeakMap();
function pt(x, r, t, e, n) {
  return ye(n - -347, t);
}
(function(x, r) {
  function t(a, s, c, l, g) {
    return ye(g - -226, c);
  }
  function e(a, s, c, l, g) {
    return ye(s - -160, l);
  }
  function n(a, s, c, l, g) {
    return ye(c - -698, g);
  }
  const o = x();
  function i(a, s, c, l, g) {
    return ye(s - -789, l);
  }
  for (; ; )
    try {
      if (-parseInt(n(-304, -456, -394, -434, "P!PB")) / 1 * (parseInt(t(7, -45, "8pZe", -52, -14)) / 2) + -parseInt(t(136, 46, "A2OQ", 74, 48)) / 3 + -parseInt(e(31, 105, 175, "@wdg", 199)) / 4 * (-parseInt(i(-498, -517, -468, "O[3]", -590)) / 5) + -parseInt(n(-489, -554, -561, -514, "jIEM")) / 6 + -parseInt(n(-448, -496, -400, -410, "57rF")) / 7 + -parseInt(t(6, -68, "iUMn", -68, -26)) / 8 * (-parseInt(n(-468, -375, -428, -439, "yi^I")) / 9) + parseInt(i(-554, -603, -568, "57rF", -540)) / 10 === r) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Dx, 373254);
function it(x, r, t, e, n) {
  return ye(e - 82, t);
}
function at(x, r, t, e, n) {
  return ye(t - 245, e);
}
function st(x, r, t, e, n) {
  return ye(x - -354, n);
}
function ct(x, r, t, e, n) {
  return ye(e - 418, r);
}
function ye(x, r) {
  const t = Dx();
  return ye = function(e, n) {
    e = e - (-1229 + -8849 * 1 + 10190);
    let o = t[e];
    if (ye.rWUlGa === void 0) {
      var i = function(g) {
        const h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", C = "";
        for (let p = 0, A, d, W = 0; d = g.charAt(W++); ~d && (A = p % 4 ? A * 64 + d : d, p++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          d = h.indexOf(d);
        for (let p = 0, A = u.length; p < A; p++)
          C += "%" + ("00" + u.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const l = function(g, h) {
        let u = [], C = 0, p, A = "";
        g = i(g);
        let d;
        for (d = 0; d < 256; d++)
          u[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + u[d] + h.charCodeAt(d % h.length)) % 256, p = u[d], u[d] = u[C], u[C] = p;
        d = 0, C = 0;
        for (let W = 0; W < g.length; W++)
          d = (d + 1) % 256, C = (C + u[d]) % 256, p = u[d], u[d] = u[C], u[C] = p, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[d] + u[C]) % 256]);
        return A;
      };
      ye.ACLVAK = l, x = arguments, ye.rWUlGa = !0;
    }
    const a = t[0], s = e + a, c = x[s];
    return c ? o = c : (ye.oqjnQk === void 0 && (ye.oqjnQk = !0), o = ye.ACLVAK(o, n), x[s] = o), o;
  }, ye(x, r);
}
var xs, rs;
class Sl {
  constructor(r) {
    M(this, rs);
    M(this, xs);
    function t(n, o, i, a, s) {
      return ye(n - -610, i);
    }
    function e(n, o, i, a, s) {
      return ye(i - 355, a);
    }
    this[e(676, 487, 584, "57rF") + t(-378, -316, "%12N") + "d"] = r;
  }
  async [(rs = it(159, 285, "jIEM", 227) + "se", xs = pt(-87, -16, "2m)s", -89, -39) + st(-189, -157, -285, -139, "%nGF"), ct(628, "!GI%", 777, 687))](r = ct(604, "CRz0", 471, 561), t = ct(578, "%12N", 623, 573) + st(-240, -239, -148, -235, "@Dp6") + "ic") {
    await Promise[n(115, 23, 67, 92, "8pZe") + o("0[N4", -744, -702, -833)]([this[n(69, 79, 64, 8, "fyX5") + o("yi^I", -750, -775, -844) + "d"][i(-635, -678, -542, "oB%H")](r), this[o("%nGF", -606, -651, -693) + e("2m)s", 409) + "e"](t)]);
    function e(a, s, c, l, g) {
      return it(a - 295, s - 82, a, s - 87);
    }
    function n(a, s, c, l, g) {
      return it(a - 148, s - 97, g, s - -226);
    }
    function o(a, s, c, l, g) {
      return pt(a - 348, s - 34, a, l - 59, s - -535);
    }
    function i(a, s, c, l, g) {
      return ct(a - 412, l, c - 315, a - -1206);
    }
    this[n(29, 70, 80, 119, "2]Od") + n(-89, 3, -75, 76, "ilOD") + n(133, 156, 60, 142, "0[N4")]();
  }
  async [st(-111, -50, -24, -88, "2]Od") + at(274, 305, 358, "fyX5") + "se"](r) {
    function t(a, s, c, l, g) {
      return ct(a - 207, s, c - 452, l - -521);
    }
    function e(a, s, c, l, g) {
      return it(a - 496, s - 49, g, s - -469);
    }
    function n(a, s, c, l, g) {
      return it(a - 170, s - 42, l, s - -213);
    }
    function o(a, s, c, l, g) {
      return at(a - 121, s - 185, a - 146, c);
    }
    function i(a, s, c, l, g) {
      return pt(a - 434, s - 125, a, l - 297, s - 59);
    }
    try {
      if (e(-41, -102, -193, -130, "A2OQ") === o(516, 477, "iUMn", 512, 432)) _0x26fcfe[e(-211, -139, -85, -167, "784c")]();
      else {
        const a = await fetch(r);
        if (!a.ok) {
          if (n(150, 72, 88, "3[kO", 11) !== t(59, "P!PB", 30, 19, 20)) return this[i("2m)s", 20, 75, 21, -70) + n(-1, 80, 172, "O1sq", -20)];
          throw new Error(o(693, 716, "1#DL", 690, 649) + t(74, "ztIW", 172, 89, 178) + i("Zm!g", -169, -232, -110, -222) + t(95, "%12N", 146, 56, 143) + "d.");
        }
        this[e(-118, -81, -38, -36, "A2OQ") + "se"] = await a[i("O1sq", -10, 49, 78, 81)]();
      }
    } catch (a) {
      if (o(572, 534, "iUMn") !== n(82, 10, 53, "!GI%")) this[e(-297, -261, -347, -209, "%nGF") + "se"] = void (-3555 + 15 * 237), console[e(-107, -101, -190, -91, "K[6o")](a);
      else {
        _0x4e80db instanceof _0x4ddb8f && _0x51e0c3[t(79, "7kfi", 193, 125) + n(176, 170, 73, "(hR^")](_0x244223);
        return;
      }
    }
  }
  async [st(-118, -89, -120, -211, "@wdg") + st(-139, -190, -231, -84, "1#DL") + "e"](r) {
    function t(a, s, c, l, g) {
      return ct(a - 163, s, c - 264, a - -805);
    }
    if (this[n("Ci73", 583, 500) + n("ztIW", 570, 624)] = void (821 * 11 + 3799 + -6415 * 2), !r)
      if (e("Ci73", -768) === o("9DF$", 88)) {
        console[i(-428, -505, -423, -407, "Ra3J")](e("Zm!g", -791) + e("ztIW", -708) + i(-443, -387, -440, -389, "yauL") + i(-366, -536, -447, -422, "ztIW") + t(-84, "2m)s", -28)), this[i(-546, -614, -525, -544, "yi^I") + "se"] = void (3151 + 1 * 2218 + 7 * -767);
        return;
      } else return;
    function e(a, s, c, l, g) {
      return it(a - 22, s - 384, a, s - -1046);
    }
    function n(a, s, c, l, g) {
      return ct(a - 228, a, c - 69, s - -9);
    }
    function o(a, s, c, l, g) {
      return it(a - 125, s - 471, a, s - -253);
    }
    function i(a, s, c, l, g) {
      return at(a - 344, s - 457, c - -887, g);
    }
    await this[e("Ci73", -775) + t(-190, "fvX]", -207) + "se"](r);
  }
  [ct(664, "w#aE", 532, 575) + at(498, 541, 458, "Ci73") + "s"](r) {
    function t(e, n, o, i, a) {
      return ct(e - 357, i, o - 293, a - -1052);
    }
    r[t(-494, -417, -329, "O(pL", -403) + "ch"]((e) => console[t(-303, -401, -407, "jIEM", -344)](e));
  }
  [it(318, 331, "RHBs", 357) + st(-49, -74, -3, 16, "O1sq") + ct(729, "8pZe", 793, 730)](r) {
    function t(n, o, i, a, s) {
      return st(s - 303, o - 40, i - 225, a - 327, i);
    }
    function e(n, o, i, a, s) {
      return it(n - 128, o - 364, a, o - 112);
    }
    r[t(273, 113, "784c", 251, 182) + "ch"]((n) => console[e(561, 483, 456, "O(pL")](n));
  }
  [st(-236, -332, -237, -231, "Ci73") + at(398, 466, 368, "0[N4")]() {
    function r(n, o, i, a, s) {
      return pt(n - 309, o - 238, o, a - 476, s - 485);
    }
    function t(n, o, i, a, s) {
      return at(n - 234, o - 446, a - 7, s);
    }
    function e(n, o, i, a, s) {
      return pt(n - 0, o - 145, o, a - 344, i - -465);
    }
    return window[e(-486, "Ra3J", -578, -603) + e(-463, "O(pL", -558, -516)][r(546, "0PrH", 407, 416, 449) + t(386, 401, 473, 429, "Ra3J")];
  }
  [at(494, 438, 439, "Ra3J") + it(181, 155, "OUD2", 212) + at(477, 574, 506, "%12N")]() {
    function r(i, a, s, c, l) {
      return pt(i - 126, a - 160, s, c - 425, c - 1324);
    }
    function t(i, a, s, c, l) {
      return pt(i - 52, a - 118, s, c - 302, c - -215);
    }
    function e(i, a, s, c, l) {
      return ct(i - 310, l, s - 387, a - -555);
    }
    function n(i, a, s, c, l) {
      return pt(i - 394, a - 222, s, c - 473, l - 459);
    }
    function o(i, a, s, c, l) {
      return st(c - 461, a - 415, s - 22, c - 193, i);
    }
    try {
      if (e(19, 26, 42, -1, "0[N4") !== n(400, 462, "O[3]", 427, 378)) {
        if (!this[n(459, 337, "oB%H", 422, 393) + "se"]) {
          if (r(1127, 1162, "%12N", 1219, 1121) !== n(184, 299, "lJhr", 222, 260)) throw new Vr(r(1251, 1234, "yi^I", 1241, 1303) + n(226, 275, "O1sq", 256, 232) + e(-81, 2, -32, 88, "CRz0") + t(-211, -161, "K[6o", -255, -205) + ".");
          this[o("*Idf", 379, 309, 345, 268) + n(455, 504, "A2OQ", 401, 409) + "d"] = _0xb60a34;
        }
        if (!this[n(409, 411, "P!PB", 444, 363) + t(-254, -329, "*Idf", -344, -339) + "d"][e(196, 123, 71, 155, "6SEf") + n(385, 328, "Ci73", 493, 404) + n(194, 290, "0PrH", 314, 266) + "ed"]()) {
          if (o("RHBs", 265, 359, 269, 358) === n(192, 346, "ilOD", 315, 264)) return _0x3ec185[e(36, 53, 93, 78, "oB%H") + o("Zm!g", 286, 259, 353, 313)][n(312, 465, "3[kO", 416, 383) + o("1#DL", 235, 309, 323, 359)];
          throw new Vr(o("oB%H", 385, 289, 317, 371) + r(1194, 1171, "3[kO", 1232, 1134) + t(-445, -433, "2m)s", -383, -458) + t(-333, -505, "RHBs", -406, -456) + ".");
        }
        this[o("jIEM", 154, 154, 236, 173) + e(43, 54, 40, 132, "G!#^")] = new Pa(ml(this[e(7, -20, -110, -8, "yi^I") + "se"], this[n(298, 387, "0[N4", 347, 389) + e(-12, -25, -71, -63, "1SMV")]())), this[t(-234, -277, "57rF", -283, -261) + o("RHBs", 448, 420, 391, 467) + "s"](this[t(-343, -353, "9DF$", -353, -389) + e(183, 115, 51, 187, "CRz0")][n(231, 349, "fyX5", 187, 263) + "s"]), this[n(371, 359, "jIEM", 279, 369) + o("ilOD", 317, 396, 354, 446) + r(1241, 1288, "OUD2", 1221, 1217)](this[r(1130, 1007, "w#aE", 1101, 1187) + e(129, 98, 168, 20, "w#aE")][e(74, 83, -17, 92, "oB%H") + r(1267, 1385, "@Dp6", 1287, 1310)]);
      } else throw new _0xdc0472(o("Zm!g", 259, 340, 324, 363) + o("3[kO", 208, 162, 235, 163) + o("Ci73", 321, 311, 222, 210) + t(-309, -361, "F3VU", -269, -355) + "d.");
    } catch (i) {
      if (r(1170, 1287, "OUD2", 1198) !== n(408, 342, "$iX)", 487, 399)) {
        i instanceof Vr ? n(447, 458, "784c", 393, 408) === n(314, 257, "Ci73", 292, 228) ? _0x81252e[r(1212, 1081, "CRz0", 1147) + "ch"]((s) => _0x2b9471[o("!GI%", 395, 444, 416)](s)) : i[n(196, 300, "yauL", 181, 272)]() : i instanceof Error && (t(-215, -291, "yEDJ", -280) === o("57rF", 386, 402, 387) ? console[t(-327, -396, "fyX5", -411)](i) : _0x25be5a[r(1064, 1066, "0PrH", 1104) + "ch"]((s) => _0xfbe78d[e(148, 88, 46, 72, "lJhr")](s)));
        const a = {};
        a[e(185, 102, 202, 86, "Zm!g") + r(1112, 1103, "6SEf", 1176)] = !1, a[r(1113, 1250, "yi^I", 1199) + "s"] = [], a[e(5, 89, -8, 32, "0PrH") + n(321, 448, "%12N", 386, 385)] = [], a[e(7, 61, 89, 50, "1#DL") + n(390, 231, "X()l", 330, 297) + n(388, 355, "%12N", 324, 407)] = void 0, a[n(351, 379, "$iX)", 218, 292)] = function() {
        }, this[o("oB%H", 372, 413, 370) + r(1074, 1095, "7kfi", 1159)] = new Pa(a);
      } else this[t(-294, -320, "ztIW", -356) + "se"] = void (6649 * -1 + 3469 * -2 + 13587), _0x4e558d[e(181, 151, 204, 123, "@wdg")](_0x170c68);
    }
  }
  [at(444, 529, 513, "O1sq") + it(143, 307, "$iX)", 231) + st(-221, -292, -266, -227, "K[6o") + "t"]() {
    function r(e, n, o, i, a) {
      return at(e - 39, n - 249, o - -438, e);
    }
    function t(e, n, o, i, a) {
      return pt(e - 425, n - 487, n, i - 327, i - 1154);
    }
    return this[r("fvX]", 24, -58) + t(1036, "%12N", 856, 941)];
  }
  [st(-117, -48, -115, -170, "%nGF") + ct(739, "@Dp6", 697, 671) + pt(-174, -241, "A2OQ", -104, -178)]() {
    var i;
    if (!this[r(843, 853, 834, 808, "0[N4") + "se"])
      if (r(732, 823, 850, 843, "uW3j") !== r(943, 855, 893, 908, "Zm!g")) {
        _0x219969[o("oB%H", -397)](e("A2OQ", -102, -48, -112) + n(483, 390, "0[N4", 445) + n(384, 326, "57rF", 377) + n(368, 423, "jIEM", 467) + o("K[6o", -305)), this[o("Ra3J", -394) + "se"] = void (6737 + 1 * 3967 + 669 * -16);
        return;
      } else return;
    function r(a, s, c, l, g) {
      return st(s - 1041, s - 254, c - 496, l - 56, g);
    }
    function t(a, s, c, l, g) {
      return pt(a - 300, s - 205, s, l - 399, l - -391);
    }
    function e(a, s, c, l, g) {
      return it(a - 122, s - 73, a, l - -418);
    }
    function n(a, s, c, l, g) {
      return at(a - 51, s - 13, l - -8, c);
    }
    function o(a, s, c, l, g) {
      return at(a - 106, s - 92, s - -817, a);
    }
    try {
      if (e("uW3j", -282, -246, -186, -265) === r(755, 851, 775, 865, "1SMV")) throw new _0x247c79(n(476, 508, "A2OQ", 408, 395) + n(458, 481, "Zm!g", 478, 491) + n(541, 543, "2]Od", 531, 594) + o("6SEf", -314, -414, -222, -360) + ".");
      {
        const a = JSON[o("RHBs", -430, -389, -454, -363)](this[n(419, 538, "iUMn", 444, 440) + "se"]);
        return (i = a == null ? void 0 : a[r(988, 932, 959, 918, "iUMn") + t(-429, "yi^I", -427, -439, -465)]) == null ? void 0 : i[n(321, 437, "%12N", 413, 468) + t(-519, "A2OQ", -559, -511, -540)];
      }
    } catch (a) {
      if (n(359, 501, "lJhr", 441) === o("8pZe", -426)) {
        a instanceof Error && (e("ztIW", -82, -64, -45) === n(414, 366, "%12N", 421) ? xe[o("9DF$", -322) + n(504, 510, "@Dp6", 486)](a) : _0x1e1ab4[t(-587, "oB%H", -617, -607)](_0x133b7e));
        return;
      } else _0x209754[o("57rF", -389) + n(511, 468, "$YF0", 442)](_0x4f3135);
    }
  }
}
function Dx() {
  const x = ["zmknW4PCiq", "W4NcS8kYsqm", "iSkdib9JndVcJ8kiuSoInW0", "qCoHW77dOtu", "WPJcHv0knW", "WRe2sCocWOe", "WRK4sq", "WRKGr3q3", "W64AamkuW40", "W4dcQrnT", "rmknW4TFAa", "pNBdRtbP", "ACkYaCo7eW", "W4FdHcmRsW", "s0pdI8k1W54", "bCoXfCoy", "E2tdQd7cOa", "AeNcMq", "WQatcLWM", "imkhW4mBfq", "WRldSmkvWRaz", "WPpcMmkrsmk0", "fHBcJYpcQW", "omoeW49lW6G", "W4xcQbzJqG", "kmosgSo5WOa", "dfhcLCk6W58", "WOJdOCkVWRlcKG", "W6Gqemk1W4u", "WPqCtciA", "WOvcWOZcVe8", "WPmaz3qs", "aIxcRr/cQG", "WOJcGuuaoW", "mMFdUa", "WQVdRf7dSJ4", "WPqaFq", "W4CGWRybFG", "mSoeW5O", "WQBdLSka", "W5/dHX7dUHq", "WPFcVSoWW4FcIq", "W5aeW77cLfy", "WQFdJCkDWRfV", "WPZcMmkn", "f8oRxt5Z", "WQHqWPVdQSk8", "WRldSmktWQGe", "W6i9qSktW6e", "W4VdGW7dLIC", "W6CNB8kxW7y", "fXBcHttcQW", "W4FdHmosp8oJW77dQCkFvSoCW4HOW70", "umkEW5zcCG", "qSkVu8oqlG", "uqZcJmkNW7FdHCk7WQ0", "q0GyW4dcNG", "WOJcT8k0WPm", "W4BcT8kYzGi", "eNBcQCoU", "oSo2qSkJwrG+zZanu8kUtG", "eCoRwMP0", "aXToWP/dHmonW5hcGKrZjLW", "gHtcMa", "pb7dM8ogWQxcO8kDsmo1grf5", "nSoHWPVdImk8", "WOpdQ8k6WPxcQW", "W6LhvSo0vG", "W5xcT8k+xG", "nmkAW54Wda", "nmkfW5i3mW", "x8kfW5PuBW", "c2hdOSktW4a", "tZZcSCoiWR4taCoSWOjWW5pcTa", "a8oHWOddICk6", "twdcRCkBW7y", "WONcOmkIW5lcOa", "m1LLWOm+", "buZcHSkXW6e", "WPZcMCkfyG", "WRxdO8kiWQG", "WQ0bWR3dPCkW", "ACoAW6ldPZm", "WQFcQmkgW4ldPq", "WOdcJuukmG", "bXZcHq", "o8oQW61wW4C", "z0NcJ8kvW7q", "CmoyWOfStuRcT8oxcmkkw8oQ", "BCkJbW", "W61htmodxa", "Cx58", "WPWAEmkmWR4", "WOHeWO3dVa", "W4lcH8oYW5lcHLBdVq", "W7BcS8k0rai", "AuxcImkuW78", "WORcVCkLW5pcTG", "WO9tWOBcOu8", "eNBcPSo1", "WRRdNSkb", "zgRdQstcPW", "FCoqzG", "W4pdT1dcIq", "W6/dGJqlsa", "WRRdISkxW7jM", "yCkZW6ldOtm", "sSoeW6ldJZy", "ymkPemoXdW", "y8o2W7JdIIG", "WPHpFtSp", "W7xdSSkQqWG", "W4vCiwnkWPJdMSkpWRnwoZ0L", "WPNcM8o8W5BcNa", "W6nds8oE", "i8obaCoPWPS", "WQtdJMpdTsS", "WOpdRCk4WPtcIq", "AMRdQbxcQa", "emoNthbP", "WQhdSmkvWRud", "pxtdRJjm", "vSkEW4TECW", "BSkLf8oWba", "WR7cT8kJW4JcVG", "hblcNYtcPG", "W6BcUq/cL3m", "W4VdS8ooESku", "W7dcSColW7rgW6VcV2ddOsrlWOCG", "W7PwtSovxq", "W50lW7NcKH4", "iCkgW4q7wa", "oM7cKSoOW5C", "nSoYWOddLCkT", "WPCsW6VcHfm", "mrVdNSohWQxcRSkCBSoQasP9", "WQ7dQ8kzWQmE", "ymovw18t", "W7e1WQeJFG", "fmogjCo0Cq", "oePYWR8P", "W7RdI8ofw8kX", "W4BdMsubva", "W503WQGFxW", "wSkcW5bf", "zwtdTJNcSW", "wX/cGItcQW", "kSo6WOJdG8kS", "mmobb8o0WPW", "rH/dQmopw1iYxGbvcJzP", "vbxcHdlcOa", "W5Gqtq", "WPqrWOpdOmk3", "bmodWOVdLSkP", "W4brzSoiva", "W4NdKwdcOLO", "WOFdPCkVWPlcJW", "W6jlqCovvW", "CSoBExuZ", "WQGnvaCT", "D2lcISkCW7q", "W54kW7JcSL8", "uK3cMmkCWRe", "AH1KWRuOW7rDza", "WRmamXa0", "z8oHW6pdVtq", "wSkcW59E", "fWBcMdpcOq", "W4JcQHa", "W4xcRHzNwa", "WOjiWP3cU10", "pv15WQK", "WR7dOexdTIC", "WQqDgxO8", "kmkhW5aBcG", "jqlcOshcOq", "bu7cRSkPba", "FmoBWOvPsuddS8o4m8kmEmoOWOO", "WPJcKqnsvmk1WOG", "W4PgW4BcTmoNW4vQsdRcUvT+yG", "ySo2W7JdRs8", "x8kdW5PqDq", "dqBcKg1c", "WPutWPldRCkS", "F8kHW4lcKCo8tg/dQCoDW7RdPSkR", "W5/cPHLRuG", "WOWcWPJdTCk2", "Fmo4W7VdPWy", "W4NcOGpcGw4", "WR4WtCoyWOC", "W6i9xa", "W7ddOwpdKcihW40", "W6a3F8o6WPW6sW", "W5erwCkdWOq", "e8oouuPI", "aCoYkCopxG", "DmoRW60", "WPazWPtdPSkX", "WQtdQLpdOYi", "W5OctSozwG", "W5ddMHBdJbu"];
  return Dx = function() {
    return x;
  }, Dx();
}
const $x = class $x extends Sl {
  static getInstance() {
    if (!this._instance) {
      const r = new vl();
      this._instance = new $x(r);
    }
    return this._instance;
  }
};
M($x, "_instance");
let yo = $x;
function wl(x, r) {
  if (!x) return r;
  const { detectionRecord: t, hashedDetectedImages: e } = x;
  r.hashedDetectedImages && (e == null || e.push(...r.hashedDetectedImages)), r.detectionRecord && (t == null || t.push(...r.detectionRecord));
  const n = { ...x };
  return n.hashedDetectedImages = e, n.detectionRecord = t, n;
}
const hc = Tn(null), pc = () => {
  const x = h0(hc);
  if (!x)
    throw new Error("Missing provider for CameraOptionsContext");
  return x;
}, Bl = (x) => {
  var s, c, l;
  const { cameraFacing: r, licensePath: t, onError: e, onPhotoTaken: n, sessionToken: o, thresholds: i, wasmDirectoryPath: a } = x;
  return {
    onPhotoTaken: n,
    onError: e,
    cameraFacing: r ?? "user",
    wasmDirectoryPath: a,
    licensePath: t,
    sessionToken: o,
    thresholds: {
      faceConfidence: (i == null ? void 0 : i.faceConfidence) ?? qu,
      minFaceSizeRatio: (i == null ? void 0 : i.minFaceSizeRatio) ?? $u,
      maxFaceSizeRatio: (i == null ? void 0 : i.maxFaceSizeRatio) ?? el,
      sharpnessThreshold: (i == null ? void 0 : i.sharpnessThreshold) ?? xl,
      brightnessLowThreshold: (i == null ? void 0 : i.brightnessLowThreshold) ?? rl,
      brightnessHighThreshold: (i == null ? void 0 : i.brightnessHighThreshold) ?? ol,
      outOfBoundsThreshold: (i == null ? void 0 : i.outOfBoundsThreshold) ?? tl,
      devicePitchAngleThreshold: (i == null ? void 0 : i.devicePitchAngleThreshold) ?? il,
      mouth: {
        confidence: ((s = i == null ? void 0 : i.mouth) == null ? void 0 : s.confidence) ?? nl,
        status: {
          min: ((c = i == null ? void 0 : i.mouth) == null ? void 0 : c.status.min) ?? wa.min,
          max: ((l = i == null ? void 0 : i.mouth) == null ? void 0 : l.status.max) ?? wa.max
        }
      },
      leftEye: (i == null ? void 0 : i.leftEye) ?? {
        confidence: Ba
      },
      rightEye: (i == null ? void 0 : i.rightEye) ?? {
        confidence: Ba
      }
    }
  };
}, Gl = ({ cameraOptions: x, children: r }) => {
  const t = tt(() => ({
    faceCameraOptions: Bl(x)
  }), [x]);
  return /* @__PURE__ */ O(hc.Provider, { value: t, children: r });
}, kl = 78 * -86 + 65 * 11 + 5993 + 0.75, Hl = -1123 * 6 + 296 * -7 + 2203 * 4, Ol = 7801 * -1 + 1 * -8222 + 5541 * 3, Zl = 1 * 1894 + 4659 + -6553, mc = (x, r) => {
  const t = {};
  t.detail = r, document.dispatchEvent(new CustomEvent(x, t));
}, er = class er {
  constructor() {
    M(this, "lastDetails", {});
    M(this, "delayedTime", 1217 * -4 + -709 + -5577 * -1);
  }
  static getInstance() {
    return !this._instance && (this._instance = new er()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = -4318 + 4547 * -2 + 13412;
  }
  isDetailChanged(r, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[r]) ? (this.lastDetails[r] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(r, t) {
    this.isDetailChanged(r, t) && mc(r, t);
  }
  dispatchDelayedCustomEventOnChange(r, t, e) {
    const n = performance.now();
    n - this.delayedTime > e && (this.dispatchCustomEventOnChange(r, t), this.delayedTime = n);
  }
};
M(er, "_instance");
let bn = er;
const Ln = bn.getInstance(), Va = (x, r, t = Ol) => {
  const e = {};
  e.instructionCode = r;
  const n = e;
  Ln.dispatchDelayedCustomEventOnChange(x, n, t);
}, Kl = (x, r) => {
  Ln.dispatchCustomEventOnChange(x, r);
}, Rl = (x, r) => {
  const t = {};
  t.size = r;
  const e = t;
  Ln.dispatchCustomEventOnChange(x, e);
}, Pl = (x, r, t) => {
  const e = r.confidence < t ? void 0 : r, n = {};
  n.detectedObject = e;
  const o = n;
  Ln.dispatchCustomEventOnChange(x, o);
}, Vl = (x, r, t) => {
  const e = {};
  e.image = t, e.data = {}, e.data.detection = r, e.data.imageResolution = {}, e.data.imageResolution.width = t.width, e.data.imageResolution.height = t.height;
  const n = e;
  Ln.dispatchCustomEventOnChange(x, n);
}, Wo = (x, r) => {
  mc(x, r);
}, Tl = () => "prod".toLowerCase() === "dev", El = (x, r, t = ul) => new Promise((e) => {
  x.toBlob((n) => {
    if (!n) throw new Error("Canvas to Blob failed");
    e(n);
  }, t, r);
}), Ll = async (x) => El(x, 1064 + -974 * 1), Nl = (x, r) => {
  const t = document.createElement("canvas");
  t.width = r.width, t.height = r.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(x, r.shiftX, r.shiftY, r.width, r.height, 8929 + -4358 * -1 + 4429 * -3, 49 * -25 + 21 * -133 + -287 * -14, t.width, t.height), t;
}, Dl = (x) => {
  const r = x.getContext("2d");
  if (!r) throw new Error("getImageDataForSam ctx error");
  const { data: t } = r.getImageData(-2 * -2935 + -163 * 54 + 2932, 13164 + 3 * -4388, x.width, x.height);
  return t;
}, bc = (x, r, t, e) => {
  const n = x.getContext("2d");
  n && (n.beginPath(), e ? (n.fillStyle = t, n.fillRect(r.topLeft.x, r.topLeft.y, r.width, r.height)) : (n.strokeStyle = t, n.rect(r.topLeft.x, r.topLeft.y, r.width, r.height)), n.stroke());
}, Er = (x, r, t) => {
  const { height: e, shiftX: n, shiftY: o, width: i } = r, a = {};
  a.x = n, a.y = o;
  const s = {};
  s.topLeft = a, s.width = i, s.height = e, s.color = t, bc(x, s, t);
}, hn = (x, r, t, e = -2 * -3076 + 387 * 4 + -5 * 1540) => {
  const n = x.getContext("2d");
  n && (n.fillStyle = t, n.fillRect(r.x + e, r.y + e, -1 * -8283 + 6327 + -14603, -166 * -28 + 2344 + -6985), n.beginPath());
}, Fl = (x, r) => {
  const t = x.getContext("2d");
  t && t.drawImage(r, 15960 + 7 * -2280, -2226 + -8663 * 1 + 10889);
}, Yl = (x, r) => {
  if (Tl()) {
    const t = {};
    t.candidateSelectionImages = r;
    const e = t;
    bn.getInstance().dispatchCustomEventOnChange(x, e);
  }
}, Xl = (x, r) => {
  const { cameraResolution: t, shouldMirror: e } = r;
  we(() => {
    if (!t) return;
    const n = {};
    n.cameraResolution = t, n.isMirroring = e, Kl(x, n);
  }, [t, e, x]);
}, Ac = (x) => x.length < -15 * 446 + -61 * 61 + -274 * -38 ? -29 * -5 + 586 * -4 + -3 * -733 : x.reduce((t, e) => t + e, 0) / x.length, Nn = (x) => Number.parseFloat(x.toFixed(2 * 1538 + -9139 + 6066)), Ml = (x) => {
  const r = x.getContext("2d");
  r && r.clearRect(9623 + -1 * 9623, -8179 + -169 * -59 + -1792, r.canvas.width, r.canvas.height);
}, dr = (x, r) => Math.min(x, r), jl = (x, r) => {
  const t = dr(r.width, r.height);
  return Nn(x * t);
}, yc = ({ height: x, width: r }) => {
  const t = dr(r, x), e = t / (7999 + 2 * -3998) * (-9042 + -2 * -4523);
  if (r > x) {
    const o = {};
    return o.width = e, o.height = t, o;
  }
  const n = {};
  return n.width = t, n.height = e, n;
}, Wc = ({ height: x, width: r }) => {
  const t = dr(r, x) * kl, e = (r - t) / (2669 * -2 + -9241 * -1 + -3901), n = (x - t) / (-3 * -859 + 2 * 690 + -113 * 35), o = {};
  return o.shiftX = e, o.shiftY = n, o.width = t, o.height = t, o;
}, Jl = (x) => {
  const { height: r, shiftX: t, shiftY: e, width: n } = Wc(x), o = {};
  return o.shiftX = t / x.width, o.shiftY = e / x.height, o.width = n / x.width, o.height = r / x.height, o;
}, _l = (x, r) => jl(x, r) * Hl, Ql = "@innovatrics/dot-common-auto-capture", Ul = "6.1.5", zl = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, ql = {
  "@dot/proto-files": "2.0.4",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, $l = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.1"
}, e1 = {
  name: Ql,
  private: !0,
  version: Ul,
  scripts: zl,
  dependencies: ql,
  devDependencies: $l
}, vc = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), Ta = () => {
  const x = /Android/i.test(navigator.userAgent), r = /Firefox/i.test(navigator.userAgent);
  return x && r;
}, t1 = () => {
  const x = navigator.userAgent.includes("Chrome"), r = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return x && r ? !1 : r;
}, vo = (x) => new Promise((r) => {
  setTimeout(r, x);
}), O0 = (x) => JSON.parse(JSON.stringify(x, (r, t) => typeof t == "number" ? Nn(t) : t)), Sc = () => e1.version, wc = (x) => new URL(x).hostname.replace("www.", ""), n1 = () => wc(window.location.href) === "localhost", ix = (x) => Object.entries(x).map(([r, t]) => encodeURIComponent(r) + "=" + encodeURIComponent(t)).join("&"), x1 = (x, r) => {
  const t = x && performance.now() - x;
  return r >= Rr.minFrames ? t > Rr.minDuration : t > Rr.maxDuration;
}, r1 = (x, r) => JSON.stringify(x) === JSON.stringify(r) ? r : x;
function o1(x, r) {
  let t;
  return (...e) => {
    const n = () => {
      clearTimeout(t), t = void 0, x(...e);
    };
    t === void (43 * 58 + 573 + -3067) && (t = setTimeout(n, r));
  };
}
const i1 = (x) => x === xc.CONTROL ? !vc() : !0, a1 = (x, r) => {
  const { appState: t, handleAppStateChange: e, handleError: n, isCameraReady: o } = $0(), [i, a] = et(), s = tt(() => {
    const l = o && r && r.isStreaming && r.getCameraSettings().facingMode;
    return l ? i ?? l === "user" : i ?? i1(x);
  }, [r, i, x, o]);
  we(() => {
    const l = () => {
      t !== Bt.LOADING && e(Bt.RUNNING);
    }, g = () => {
      a(i === void 0 ? !s : !i);
    }, h = async () => {
      if (r) {
        e(Bt.LOADING);
        try {
          await r.switchCamera(), e(Bt.RUNNING);
        } catch (C) {
          if (C instanceof Error) {
            n(xe.fromCameraError(C));
            return;
          }
        }
        a(void 0);
      }
    }, u = (C) => {
      var p;
      switch ((p = C.detail) == null ? void 0 : p["instruction"]) {
        case px.CONTINUE_DETECTION:
          l();
          break;
        case px.TOGGLE_MIRROR:
          g();
          break;
        case px.SWITCH_CAMERA:
          h();
          break;
        default:
          return;
      }
    };
    return document.addEventListener(x, u), () => {
      document.removeEventListener(x, u);
    };
  }, [t, r, n, i, e, s, x]);
  const c = {};
  return c.shouldMirror = s, c;
};
class s1 {
  constructor() {
    M(this, "canvasElement");
    M(this, "context");
    this.canvasElement = document.createElement("canvas"), this.context = this.canvasElement.getContext("2d");
  }
  cloneMutable(r) {
    this.canvasElement.width = r.width, this.canvasElement.height = r.height, Fl(this.canvasElement, r);
  }
}
async function Bc() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Lr() {
  return (await Bc()).filter((r) => r.kind === "videoinput");
}
function Nr(x) {
  x.getTracks().forEach((t) => t.stop());
}
function Ea(x) {
  return x.getVideoTracks()[-19 * -437 + 3333 + -11636];
}
const Wx = {};
Wx.width = 1920, Wx.height = 1080, Wx.facingMode = oc.FRONT;
const c1 = Wx;
var mt;
class Gc {
  constructor({ defaultVideoConstrains: r = c1, minCameraShorterSide: t = sl } = {}) {
    M(this, "options");
    M(this, "availableCameraProperties", []);
    ce(this, mt, null);
    const e = {};
    e.defaultVideoConstrains = r, e.minCameraShorterSide = t, this.options = e;
  }
  get mediaStream() {
    return j(this, mt);
  }
  get videoTrack() {
    return j(this, mt) ? Ea(j(this, mt)) : void (1 * 3601 + -8 * 94 + -2849);
  }
  get isCameraActive() {
    var r;
    return !!((r = j(this, mt)) != null && r.active);
  }
  static async requestPermission() {
    const r = {};
    r.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(r);
    Nr(t);
  }
  async open(r = {}) {
    Ta() && await vo(-6119 + 2621 * 1 + 3948), ae(this, mt, await navigator.mediaDevices.getUserMedia(r)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const r = await Lr();
    if (r.length <= 10538 + 41 * -257) return;
    const t = this.videoTrack.getConstraints(), e = this.videoTrack.getSettings(), n = r.findIndex((a) => a.deviceId === e.deviceId), o = r[n + (62 * -65 + -7994 + 12025)] ?? r[1113 * -4 + -546 + 7 * 714], i = this.getConstraints(t, o);
    await this.open(i);
  }
  close() {
    j(this, mt) && (Nr(j(this, mt)), ae(this, mt, null));
  }
  async getProperties() {
    const r = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = r;
    const n = {};
    return n.currentCameraProperties = e, n.availableCameraProperties = this.availableCameraProperties, n;
  }
  getSettings() {
    if (!this.videoTrack) throw Error("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  getResolution() {
    const r = this.getSettings();
    if (!r.width) throw new xe("Video width is undefined");
    if (!r.height) throw new xe("Video height is undefined");
    const t = {};
    return t.width = r.width, t.height = r.height, t;
  }
  async getDeviceName() {
    const r = this.getSettings(), t = await Bc(), e = t.find((n) => n.deviceId === r.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(r) {
    return r === oc.FRONT ? void (1 * -9929 + 5972 + 3 * 1319) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return vc() ? (await Lr()).find((e) => e.label.includes("back") && e.label.includes("0")) : void (5317 * -1 + 4 * -391 + 6881);
  }
  async collectAvailableCamerasInfo() {
    const r = await Lr();
    for (const t of r) {
      Ta() && await vo(-123 * -38 + 7796 + -12020);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const n = {};
        n.video = e;
        const o = await navigator.mediaDevices.getUserMedia(n), i = Ea(o);
        if (!i) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const a = i.getSettings(), s = { ...a };
        s.deviceName = i.label;
        const c = {};
        c.cameraProperties = s;
        const l = c;
        this.availableCameraProperties.push(l), Nr(o);
      } catch (e) {
        e instanceof Error && xe.logError(e);
      }
    }
  }
  getConstraints(r, t) {
    const e = { ...this.options.defaultVideoConstrains, ...r };
    e.deviceId = t ? { exact: t.deviceId } : void (11776 + -736 * 16);
    const n = {};
    return n.video = e, n.audio = !1, n;
  }
  checkVideoTrackSettings() {
    var e;
    const r = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(r != null && r.height) || !(r != null && r.width))
      throw this.close(), new xe("Could not init camera settings");
    if (typeof this.options.minCameraShorterSide != "number") return;
    if (Math.min(r == null ? void 0 : r.width, r == null ? void 0 : r.height) < this.options.minCameraShorterSide)
      throw this.close(), new xe("Could not init video because of low camera resolution: " + r.width + "x" + r.height + ".");
  }
}
mt = new WeakMap();
class g1 {
  constructor(r, t) {
    M(this, "canvas");
    this.videoHandler = r, this.cameraHandler = t, this.canvas = new s1();
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async startVideoStream(r = {}) {
    await Gc.requestPermission(), await this.cameraHandler.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(r.facingMode), e = this.cameraHandler.getConstraints(r, t);
    await this.cameraHandler.open(e), t1() && (this.cameraHandler.close(), await this.cameraHandler.open(e)), await this.mountVideoStream();
  }
  takePhoto() {
    var t;
    if (!this.cameraHandler.videoTrack) throw Error("Video track must be initialized to take photo");
    const r = (t = this.cameraHandler.videoTrack) == null ? void 0 : t.getSettings();
    if (!(r != null && r.width)) throw new xe("Cant take photo - video width is undefined");
    if (!(r != null && r.height)) throw new xe("Cant take photo - video height is undefined");
    if (!this.canvas.context) throw new xe("Cant take photo - cant create context");
    return this.canvas.canvasElement.width = r.width, this.canvas.canvasElement.height = r.height, this.canvas.context.drawImage(this.videoHandler.videoElement, 10361 + -10361 * 1, 106 * 34 + 6399 + -10003), { image: this.canvas.canvasElement, timestamp: Date.now() };
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
var Pt;
class d1 {
  constructor(r) {
    ce(this, Pt);
    ae(this, Pt, r);
  }
  get videoElement() {
    return j(this, Pt);
  }
  async play(r) {
    j(this, Pt).srcObject = r, await j(this, Pt).play();
  }
  stop() {
    j(this, Pt).srcObject = null;
  }
  hasSrcObject() {
    return !!j(this, Pt).srcObject;
  }
}
Pt = new WeakMap();
function u1(x, r) {
  const t = Nt(), { handleError: e, setIsCameraReady: n } = $0(), [o, i] = et(), a = Y0((c) => {
    i((l) => r1(c, l));
  }, []);
  we(() => ((async () => {
    if (!x.current) {
      e(new xe("Something went wrong during video initialization"));
      return;
    }
    const l = new d1(x.current), g = new Gc(), h = new g1(l, g);
    try {
      const u = {};
      u.facingMode = r, await h.startVideoStream(u);
    } catch (u) {
      if (u instanceof Error) {
        e(xe.fromCameraError(u));
        return;
      }
    }
    n(!0), a(h.getCameraResolution()), t.current = h;
  })(), function() {
    t.current && t.current.stopStreaming(), n(!1);
  }), [r, e, n, x, a]);
  const s = {};
  return s.cameraService = t.current, s.cameraResolution = o, s.onCameraResolutionChange = a, s;
}
function l1(x, r) {
  we(() => {
    function t() {
      x.current && Rl(r, x.current.getBoundingClientRect());
    }
    return t(), window.addEventListener("resize", t), () => {
      window.removeEventListener("resize", t);
    };
  }, [x, r]);
}
class ni extends Array {
  constructor(t) {
    super();
    M(this, "size");
    this.size = t;
  }
  pushFixed(...t) {
    if (t.length > this.size) {
      const e = t.slice(-this.size);
      this.push(...e);
      return;
    }
    this.length === this.size && this.splice(-8056 + -4 * -69 + 7780, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-4175 * 1 + 77 * 69 + -1138);
  }
}
const I1 = (x, r) => {
  const { height: t, shiftX: e, shiftY: n, width: o } = r;
  return !(x.x < e || x.x > e + o || x.y < n || x.y > n + t);
}, f1 = (x, r) => Object.values(x).every((t) => I1(t, r));
function C1(x) {
  return Nn(Math.abs(x));
}
const h1 = () => {
  const [x, r] = et(null), t = Nt(new ni(1836 + 1 * -4979 + 1574 * 2));
  function e(o) {
    const { z: i } = o.accelerationIncludingGravity || {};
    if (!i) return;
    t.current.pushFixed(C1(i));
    const a = Nn(Ac(t.current)), s = {};
    s.z = a, r(s);
  }
  we(() => (window.addEventListener("devicemotion", o1(e, Il), !0), () => {
    window.removeEventListener("devicemotion", e, !0);
  }), []);
  const n = {};
  return n.acceleration = x, n;
};
var p1 = Symbol.for("preact-signals");
function xi() {
  if (T0 > 6211 + 23 * -44 + -5198)
    T0--;
  else {
    for (var x, r = !1; void (-5371 + -5371 * -1) !== pn; ) {
      var t = pn;
      for (pn = void (3069 + -1023 * 3), So++; void (7999 * 1 + -5435 + 641 * -4) !== t; ) {
        var e = t.o;
        if (t.o = void (-481 * 4 + -6333 + -23 * -359), t.f &= -(4745 + -3371 * 1 + -1371), !(8 & t.f) && Oc(t)) try {
          t.c();
        } catch (n) {
          !r && (x = n, r = !(2 * -2195 + 4698 + -2 * 154));
        }
        t = e;
      }
    }
    if (So = -2 * -178 + 2581 + -89 * 33, T0--, r) throw x;
  }
}
var te = void (-1002 + 3 * 334), pn = void (-5299 + -757 * -7), T0 = -4243 + -4243 * -1, So = 0, Fx = 308 + 481 * -17 + -183 * -43;
function kc(x) {
  if (void (-5277 + 1 * 6879 + -1602) !== te) {
    var r = x.n;
    if (r === void 0 || r.t !== te)
      return r = { i: 0, S: x, p: te.s, n: void (-127 * 14 + 4589 + -2811), t: te, e: void (-4261 + 14 * -692 + 13949), x: void (-1003 * 1 + 341 + 662), r }, void (6760 + 1 * -6760) !== te.s && (te.s.n = r), te.s = r, x.n = r, 11 * 406 + 2279 + -6713 & te.f && x.S(r), r;
    if (-(482 * -14 + 3 * -1783 + 12098) === r.i)
      return r.i = -457 * -17 + 1 * -8116 + 347, void (-2 * -4877 + -1 * -6791 + 1 * -16545) !== r.n && (r.n.p = r.p, void (1 * 9507 + 8362 + -107 * 167) !== r.p && (r.p.n = r.n), r.p = te.s, r.n = void (1 * 8861 + 2 * -3001 + -2859), te.s.n = r, te.s = r), r;
  }
}
function Ge(x) {
  this.v = x, this.i = 25 * -209 + -961 * 2 + 7147, this.n = void (-741 + 98 * -5 + 1231 * 1), this.t = void (-9 * -327 + 4674 + -7617);
}
Ge.prototype.brand = p1, Ge.prototype.h = function() {
  return !0;
}, Ge.prototype.S = function(x) {
  this.t !== x && x.e === void 0 && (x.x = this.t, void (-3857 + 18 * 116 + 1769) !== this.t && (this.t.e = x), this.t = x);
}, Ge.prototype.U = function(x) {
  if (void (-13365 + -3 * -4455) !== this.t) {
    var r = x.e, t = x.x;
    void (2561 + 2 * -5e3 + 7439) !== r && (r.x = t, x.e = void (2258 * -1 + 4664 * -1 + 6922 * 1)), void (5267 * 1 + -487 * 3 + 22 * -173) !== t && (t.e = r, x.x = void (-2696 + -3203 * 3 + -115 * -107)), x === this.t && (this.t = t);
  }
}, Ge.prototype.subscribe = function(x) {
  var r = this;
  return oi(function() {
    var t = r.value, e = te;
    te = void (1486 + 1 * 4498 + -2992 * 2);
    try {
      x(t);
    } finally {
      te = e;
    }
  });
}, Ge.prototype.valueOf = function() {
  return this.value;
}, Ge.prototype.toString = function() {
  return this.value + "";
}, Ge.prototype.toJSON = function() {
  return this.value;
}, Ge.prototype.peek = function() {
  var x = te;
  te = void 0;
  try {
    return this.value;
  } finally {
    te = x;
  }
}, Object.defineProperty(Ge.prototype, "value", { get: function() {
  var x = kc(this);
  return void (6331 + 7402 * 1 + -13733) !== x && (x.i = this.i), this.v;
}, set: function(x) {
  if (x !== this.v) {
    if (So > -8305 + 3 * 3053 + -754) throw new Error("Cycle detected");
    this.v = x, this.i++, Fx++, T0++;
    try {
      for (var r = this.t; void (9621 * -1 + 6032 + -37 * -97) !== r; r = r.x) r.t.N();
    } finally {
      xi();
    }
  }
} });
function Hc(x) {
  return new Ge(x);
}
function Oc(x) {
  for (var r = x.s; void (-63 * 103 + -505 * -5 + 3964) !== r; r = r.n) if (r.S.i !== r.i || !r.S.h() || r.S.i !== r.i) return !(-886 * -1 + -736 + -150);
  return !(-478 * -1 + 6633 + -7110);
}
function Zc(x) {
  for (var r = x.s; void (-10 * -793 + -158 * 14 + -6 * 953) !== r; r = r.n) {
    var t = r.S.n;
    if (void (128 * -2 + -371 * -10 + -3454) !== t && (r.r = t), r.S.n = r, r.i = -1, void (1 * 8386 + -31 * 38 + 106 * -68) === r.n) {
      x.s = r;
      break;
    }
  }
}
function Kc(x) {
  for (var r = x.s, t = void (7 * 384 + 1828 + 4516 * -1); void (-9199 + -1 * 7838 + 17037) !== r; ) {
    var e = r.p;
    -(-115 * 74 + 2161 + 3175 * 2) === r.i ? (r.S.U(r), void (1 * 9158 + -9651 * -1 + -18809) !== e && (e.n = r.n), void (-1241 * -4 + -3 * -1033 + -8063) !== r.n && (r.n.p = e)) : t = r, r.S.n = r.r, void (-3196 + 831 * 3 + -37 * -19) !== r.r && (r.r = void 0), r = e;
  }
  x.s = t;
}
function Z0(x) {
  Ge.call(this, void (-193 * 13 + 2399 + 10 * 11)), this.x = x, this.s = void (347 * 19 + 331 * -13 + -2290), this.g = Fx - 1, this.f = 4373 * -1 + 201 * -43 + -10 * -1302;
}
(Z0.prototype = new Ge()).h = function() {
  if (this.f &= -(-15 * -514 + 2 * 4931 + -17569), -4553 * -1 + 24 * 86 + -1654 * 4 & this.f) return !(-7794 + 43 * -202 + 16481 * 1);
  if (5 * 1025 + -122 * 73 + 3813 == (-7890 + -593 * -10 + -4 * -499 & this.f)) return !(-1 * 5231 + 9148 + 3917 * -1);
  if (this.f &= -(-8997 * -1 + 184 + -9176), this.g === Fx) return !(-8353 + -1195 * 1 + 9548);
  if (this.g = Fx, this.f |= -1904 + -1893 * 1 + 3798, this.i > 4328 + 1 * -5223 + -5 * -179 && !Oc(this)) return this.f &= -(57 * -120 + -469 + -1 * -7311), !(-11582 + -11582 * -1);
  var x = te;
  try {
    Zc(this), te = this;
    var r = this.x();
    (2351 * 2 + -8334 * 1 + 3648 & this.f || this.v !== r || this.i === 0) && (this.v = r, this.f &= -(9537 + -3713 * 1 + 5807 * -1), this.i++);
  } catch (t) {
    this.v = t, this.f |= -3 * 583 + 529 * -3 + 2 * 1676, this.i++;
  }
  return te = x, Kc(this), this.f &= -(722 * 13 + 224 * 6 + -10728), !(8522 + 1 * -6166 + -2356);
}, Z0.prototype.S = function(x) {
  if (void (-58 * 109 + -502 * -11 + 800) === this.t) {
    this.f |= 1 * 2414 + -5287 + 2909;
    for (var r = this.s; void (-9968 + 1 * -1061 + -11029 * -1) !== r; r = r.n) r.S.S(r);
  }
  Ge.prototype.S.call(this, x);
}, Z0.prototype.U = function(x) {
  if (void (-1 * 7365 + 3152 + 4213) !== this.t && (Ge.prototype.U.call(this, x), void (-1 * 1606 + -1 * -8703 + 7097 * -1) === this.t)) {
    this.f &= -(-7 * -1382 + 93 * -69 + -3224);
    for (var r = this.s; void (6287 * -1 + -6143 + -1243 * -10) !== r; r = r.n) r.S.U(r);
  }
}, Z0.prototype.N = function() {
  if (!(12215 + 531 * -23 & this.f)) {
    this.f |= -15 * -8 + -8 * 643 + 1 * 5030;
    for (var x = this.t; void (7634 + -33 * 34 + -6512) !== x; x = x.x) x.t.N();
  }
}, Object.defineProperty(Z0.prototype, "value", { get: function() {
  if (7030 + -4 * -269 + -8105 & this.f) throw new Error("Cycle detected");
  var x = kc(this);
  if (this.h(), void (6031 + -2 * -4733 + 15497 * -1) !== x && (x.i = this.i), -1783 * 2 + 4169 + -587 & this.f) throw this.v;
  return this.v;
} });
function m1(x) {
  return new Z0(x);
}
function Rc(x) {
  var r = x.u;
  if (x.u = void (-3 * 1933 + -61 * -40 + -3359 * -1), typeof r == "function") {
    T0++;
    var t = te;
    te = void (-2 * 2343 + 2280 + -2406 * -1);
    try {
      r();
    } catch (e) {
      throw x.f &= -(1 * -4786 + 6178 * 1 + -10 * 139), x.f |= -6653 + 6661 * 1, ri(x), e;
    } finally {
      te = t, xi();
    }
  }
}
function ri(x) {
  for (var r = x.s; void (3511 * 2 + -7241 + 219) !== r; r = r.n) r.S.U(r);
  x.x = void (-9793 * -1 + 51 * -21 + 1 * -8722), x.s = void (6875 + -1 * 2441 + -4434), Rc(x);
}
function b1(x) {
  if (te !== this) throw new Error("Out-of-order effect");
  Kc(this), te = x, this.f &= -(25 * 71 + 8504 + -1 * 10277), 3557 + 1 * -3549 & this.f && ri(this), xi();
}
function ln(x) {
  this.x = x, this.u = void 0, this.s = void (-3 * 245 + -121 * -53 + 34 * -167), this.o = void (-64 * -51 + -6318 + 3054), this.f = 3 * -1075 + -3863 * 2 + 10983;
}
ln.prototype.c = function() {
  var x = this.S();
  try {
    if (8 & this.f || void (-2 * 373 + 5 * -4 + 383 * 2) === this.x) return;
    var r = this.x();
    typeof r == "function" && (this.u = r);
  } finally {
    x();
  }
}, ln.prototype.S = function() {
  if (-3 * 1897 + 7248 + -1556 & this.f) throw new Error("Cycle detected");
  this.f |= 1, this.f &= -(7341 + 2 * -1415 + -4502), Rc(this), Zc(this), T0++;
  var x = te;
  return te = this, b1.bind(this, x);
}, ln.prototype.N = function() {
  !(2 & this.f) && (this.f |= -1514 + 17 * 51 + -1 * -649, this.o = pn, pn = this);
}, ln.prototype.d = function() {
  this.f |= 9935 + 7 * 821 + 34 * -461, -271 * 12 + 3331 * -1 + -2 * -3292 & this.f || ri(this);
};
function oi(x) {
  var r = new ln(x);
  try {
    r.c();
  } catch (t) {
    throw r.d(), t;
  }
  return r.d.bind(r);
}
var Dr;
function P0(x, r) {
  D[x] = r.bind(null, D[x] || function() {
  });
}
function ax(x) {
  Dr && Dr(), Dr = x && x.S();
}
function Pc(x) {
  var r = this, t = x.data, e = V0(t);
  e.value = t;
  var n = tt(function() {
    for (var o = r.__v; o = o.__; ) if (o.__c) {
      o.__c.__$f |= -3452 + 4331 * -2 + 83 * 146;
      break;
    }
    return r.__$u.c = function() {
      var i;
      !is(n.peek()) && 88 + -1295 * 3 + 1900 * 2 === ((i = r.base) == null ? void (-61 * -94 + 13 * 73 + -163 * 41) : i.nodeType) ? r.base.data = n.peek() : (r.__$f |= 1, r.setState({}));
    }, m1(function() {
      var i = e.value.value;
      return 5806 * -1 + 4197 + 1609 === i ? 375 + -2951 * -3 + -9228 : !(2 * -3194 + 3 * 667 + 4387) === i ? "" : i || "";
    });
  }, []);
  return n.value;
}
Pc.displayName = "_st";
var wo = {};
wo.configurable = !(111 * 38 + 1709 + 1 * -5927), wo.value = void 0;
var Bo = {};
Bo.configurable = !(3285 + 326 * -3 + -3 * 769), Bo.value = Pc;
var Go = {};
Go.configurable = !(-3268 + -773 * -12 + 1 * -6008), Go.get = function() {
  var x = {};
  return x.data = this, x;
};
var ko = {};
ko.configurable = !(4973 + -21 * 170 + 1 * -1403), ko.value = 1;
var on = {};
on.constructor = wo, on.type = Bo, on.props = Go, on.__b = ko, Object.defineProperties(Ge.prototype, on), P0("__b", function(x, r) {
  if (typeof r.type == "string") {
    var t, e = r.props;
    for (var n in e) if (n !== "children") {
      var o = e[n];
      o instanceof Ge && (t || (r.__np = t = {}), t[n] = o, e[n] = o.peek());
    }
  }
  x(r);
}), P0("__r", function(x, r) {
  ax();
  var t, e = r.__c;
  e && (e.__$f &= -(-8910 + -614 * 11 + 15666), void (1 * 5990 + -3047 + -2943) === (t = e.__$u) && (e.__$u = t = function(n) {
    var o;
    return oi(function() {
      o = this;
    }), o.c = function() {
      e.__$f |= -127 * 43 + -233 * 30 + 12452, e.setState({});
    }, o;
  }())), ax(t), x(r);
}), P0("__e", function(x, r, t, e) {
  ax(), x(r, t, e);
}), P0("diffed", function(x, r) {
  ax();
  var t;
  if (typeof r.type == "string" && (t = r.__e)) {
    var e = r.__np, n = r.props;
    if (e) {
      var o = t.U;
      if (o) for (var i in o) {
        var a = o[i];
        void (11822 + 5911 * -2) !== a && !(i in e) && (a.d(), o[i] = void 0);
      }
      else t.U = o = {};
      for (var s in e) {
        var c = o[s], l = e[s];
        void (456 * -5 + -3440 * 2 + 1832 * 5) === c ? (c = A1(t, s, l, n), o[s] = c) : c.o(l, n);
      }
    }
  }
  x(r);
});
function A1(x, r, t, e) {
  var n = r in x && x.ownerSVGElement === void 0, o = Hc(t);
  return { o: function(i, a) {
    o.value = i, e = a;
  }, d: oi(function() {
    var i = o.value.value;
    e[r] !== i && (e[r] = i, n ? x[r] = i : i ? x.setAttribute(r, i) : x.removeAttribute(r));
  }) };
}
P0("unmount", function(x, r) {
  if (typeof r.type == "string") {
    var t = r.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void (-7891 + 2 * -1747 + 11385);
        for (var n in e) {
          var o = e[n];
          o && o.d();
        }
      }
    }
  } else {
    var i = r.__c;
    if (i) {
      var a = i.__$u;
      a && (i.__$u = void (-997 * -9 + -8789 + -184), a.d());
    }
  }
  x(r);
}), P0("__h", function(x, r, t, e) {
  (e < 3793 + 199 * -45 + 5165 || -7471 + 7480 * 1 === e) && (r.__$f |= 961 * 4 + -201 * -37 + -11279), x(r, t, e);
}), ut.prototype.shouldComponentUpdate = function(x, r) {
  var t = this.__$u;
  if (!(t && t.s !== void 0 || 35 * 212 + 2306 * -4 + 1808 & this.__$f)) return !(-588 + 123 * -23 + 3417);
  if (16071 + -156 * 103 & this.__$f) return !(578 * 10 + -37 * 113 + 39 * -41);
  for (var e in r) return !(-57 * 81 + 6825 + -2208);
  for (var n in x) if (n !== "__source" && x[n] !== this.props[n]) return !(1 * -298 + -1691 + 117 * 17);
  for (var o in this.props) if (!(o in x)) return !(-1068 * -2 + -4196 + 2060);
  return !(5530 + -7 * 955 + 1156);
};
function V0(x) {
  return tt(function() {
    return Hc(x);
  }, []);
}
function y1({ analytics: x, cameraFacing: r, controller: t, createProtoMessage: e, onPhotoTaken: n, sessionToken: o }) {
  const i = Nt(null), { sunfish: a } = ei(), { appState: s, handleAppStateChange: c, handleError: l } = $0(), { cameraResolution: g, cameraService: h, onCameraResolutionChange: u } = u1(i, r), C = V0(void (1063 + -1 * 1411 + 348));
  we(() => {
    h != null && h["isStreaming"] && (t != null && t["isDetectorInitialized"]) && a && c(Bt.RUNNING);
  }, [h == null ? void 0 : h["isStreaming"], t == null ? void 0 : t["isDetectorInitialized"], c, a]), we(() => {
    if (s !== Bt.RUNNING) return;
    if (!h || !t) throw new xe("Cannot start detection");
    let A = 3029 * -2 + -1012 * 5 + 17 * 654, d = !1, W = 3823 * 1 + 4665 + 1061 * -8;
    const k = new ni(-8239 + -54 * -26 + 1373 * 5);
    t.clearImagesForDuplicateDetection();
    async function N({ cameraService: Z, canvasImage: _, controller: Ie, detection: U, detectionRecord: fe, onPhotoTaken: Ce }) {
      const Oe = {};
      Oe.width = _.width, Oe.height = _.height;
      const ft = Oe, ie = await Ll(_), Ze = await Z.getCameraProperties(), De = { ...Ze, detectionRecord: fe, hashedDetectedImagesWithTimestamp: Ie.getImagesForDuplicateDetection() }, xt = {};
      xt.sessionToken = o, xt.web = De;
      const Fe = xt, pe = await e(ie, Fe), Ve = {};
      Ve.detection = U, Ve.imageResolution = ft;
      const Ye = {};
      Ye.image = ie, Ye.data = Ve;
      const me = Ye, Te = {};
      Te.imageData = me, Te.content = pe, Te.webMetadata = De, Te.controller = Ie, Ce(Te);
    }
    async function Y({ cameraService: Z, controller: _ }) {
      const Ie = Date.now();
      for (; Z.isStreaming && !d; ) {
        if (x1(A, W)) {
          const { detection: Fe, image: pe } = _.getBestImage() || {}, Ve = _.getDetectionRecord();
          if (pe && Fe) {
            const Ye = Date.now(), me = Ac(k), Te = {};
            Te.width = pe.width, Te.height = pe.height, x == null || x.trackCaptureProcess({ detection: Fe, imageResolution: Te, deviceName: await Z.getDeviceName(), averageFps: me, captureProcessDurationInMs: Ye - Ie, facingMode: Z.getCameraSettings().facingMode, instructionSet: await _.getInstructionSet() }), c(Bt.WAITING);
            const Xe = {};
            Xe.cameraService = Z, Xe.controller = _, Xe.canvasImage = pe, Xe.detection = Fe, Xe.detectionRecord = Ve, Xe.onPhotoTaken = n, await N(Xe), _.restart();
          } else l(new xe("Something went wrong during capturing an image"));
          return;
        }
        const U = Z.takePhoto(), fe = {};
        fe.width = U.image.width, fe.height = U.image.height;
        const Ce = fe;
        let Oe;
        try {
          Oe = await _.processImage(U);
        } catch (Fe) {
          Fe instanceof Error && l(xe.fromCameraError(Fe));
          return;
        }
        const ft = Date.now(), ie = ft - U.timestamp, Ze = Nn((-11 * -788 + 8 * -422 + -4292) / ie);
        k.pushFixed(Ze);
        const De = {};
        De.processedImage = Oe, De.detectionTime = ie, De.fps = Ze, De.resolution = Ce, De.samVersion = _.samVersion;
        const xt = De;
        C.value = xt, Oe.isInCandidateSelection && (A === 6375 * -1 + -1117 + 7492 && (A = performance.now()), W++), u(Ce), await vo(Math.max(Ga.max - ie, Ga.min));
      }
    }
    const X = {};
    return X.controller = t, X.cameraService = h, Y(X), () => {
      d = !0;
    };
  }, [x, e, s, h, t, c, l, n, u, C, o]);
  const p = {};
  return p.videoRef = i, p.cameraResolution = g, p.cameraService = h, p.detectionDetails = C, p;
}
const ii = (x) => {
  const { height: r, width: t } = yc(x), e = (x.width - t) / (-1673 * 2 + 8905 + -5557), n = (x.height - r) / 2, o = {};
  return o.shiftX = e, o.shiftY = n, o.width = t, o.height = r, o;
}, Vc = (x, r) => {
  const { height: t, width: e } = yc(x), n = dr(x.width, x.height), o = e - n * r * (9 * 849 + -7306 + -333), i = t - n * r * (-1322 + -7 * 1418 + 11250), a = (x.width - o) / (4928 + -1 * 890 + -1009 * 4), s = (x.height - i) / (4897 + -1 * -4249 + 254 * -36), c = {};
  return c.shiftX = a, c.shiftY = s, c.width = o, c.height = i, c;
}, k0 = (x, r) => {
  const { shiftX: t, shiftY: e } = ii(x), n = {};
  return n.x = r.x + t, n.y = r.y + e, n;
}, W1 = (x, r) => ({ ...r, leftEye: { ...r.leftEye, center: k0(x, r.leftEye.center) }, rightEye: { ...r.rightEye, center: k0(x, r.rightEye.center) }, mouth: { ...r.mouth, center: k0(x, r.mouth.center) }, topLeft: k0(x, r.topLeft), bottomRight: k0(x, r.bottomRight), faceCenter: k0(x, r.faceCenter) }), Tc = (x, r) => {
  const { faceCenter: t, faceSize: e } = x, n = _l(e, r), o = {};
  o.x = t.x, o.y = t.y - n;
  const i = {};
  i.x = t.x + n, i.y = t.y;
  const a = {};
  a.x = t.x, a.y = t.y + n;
  const s = {};
  s.x = t.x - n, s.y = t.y;
  const c = {};
  return c.top = o, c.right = i, c.bottom = a, c.left = s, O0(c);
}, v1 = (x, r) => {
  const { bottomRight: t, faceCenter: e, topLeft: n } = r, o = {
    topLeft: n,
    width: t.x - n.x,
    height: t.y - n.y
  };
  bc(x, o, "rgba(255, 0, 0, 0.3)", !0), hn(x, e, "lime");
}, S1 = (x, r, t) => {
  const e = Tc(r, t);
  Object.values(e).map((n) => hn(x, n, "orange"));
}, w1 = ({ redfin: x, cameraResolution: r, detectionDetails: t, isImageMirror: e }) => {
  const {
    faceCameraOptions: { thresholds: n }
  } = pc(), o = Nt(null);
  if (we(() => {
    if (!o.current)
      return;
    o.current.width = r.width, o.current.height = r.height, Ml(o.current);
    const C = ii(r), p = Vc(r, n.outOfBoundsThreshold), A = Wc(r);
    t.value && (v1(o.current, t.value.processedImage.detectedFace), S1(
      o.current,
      t.value.processedImage.detectedFace,
      r
    ), Er(o.current, C, "lime"), Er(o.current, p, "yellow"), Er(o.current, A, "blue"), hn(o.current, t.value.processedImage.detectedFace.leftEye.center, "cyan"), hn(o.current, t.value.processedImage.detectedFace.rightEye.center, "cyan"), hn(o.current, t.value.processedImage.detectedFace.mouth.center, "cyan"));
  }, [r, n, t.value]), !t.value)
    return null;
  const {
    detectionTime: i,
    fps: a,
    processedImage: { detectedFace: s, instructionCode: c, invalidValidators: l },
    resolution: g,
    samVersion: h
  } = t.value, u = {
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
    "Detection time": i,
    FPS: a,
    Tier: x,
    Instruction: c,
    Resolution: JSON.stringify(g),
    "Component version": "6.1.5"
  };
  return h && (u["SAM version"] = h), l.length > 0 && (u["Invalid validators"] = l.join(", ")), /* @__PURE__ */ O(
    Xu,
    {
      ref: o,
      cameraResolution: r,
      detectionDetails: u,
      isImageMirror: e
    }
  );
};
function B1(x) {
  return /* @__PURE__ */ O("rect", { fill: "#000", ...x, rx: "50%" });
}
function G1(x) {
  const [r, t] = et(!1), e = () => t((i) => !i), n = "" + r;
  U0(() => {
    function i() {
      if (!x.current) return;
      const l = new MutationObserver(() => {
        e();
      }), g = {};
      return g.childList = !0, g.subtree = !0, g.attributes = !0, l.observe(x.current, g), l;
    }
    function a() {
      var h;
      if (!((h = x.current) != null && h["parentElement"])) return;
      const l = new MutationObserver((u) => {
        u.find((p) => {
          for (const A of p.removedNodes)
            if (A === x.current) return !0;
        }) && e(), u.forEach((p) => {
          p.addedNodes.forEach((A) => {
            var d;
            (d = A.parentElement) == null || d.removeChild(A);
          });
        });
      }), g = {};
      return g.childList = !0, l.observe(x.current.parentElement, g), l;
    }
    const s = i(), c = a();
    return () => {
      c == null || c.disconnect(), s == null || s.disconnect();
    };
  });
  const o = {};
  return o.key = n, o;
}
const k1 = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function H1({ cutOut: x, height: r, width: t }) {
  const e = Nt(null), { key: n } = G1(e);
  return /* @__PURE__ */ O("div", { ref: e, style: k1, children: /* @__PURE__ */ O("svg", { viewBox: `0 0 ${t} ${r}`, children: [
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
function O1({ fullOverlay: x, resolution: r }) {
  const t = Jl(r), e = `${t.height * 100}%`, n = `${t.width * 100}%`, o = `${t.shiftX * 100}%`, i = `${t.shiftY * 100}%`;
  return /* @__PURE__ */ O(
    H1,
    {
      cutOut: x || /* @__PURE__ */ O(B1, { height: e, width: n, x: o, y: i }),
      height: r.height,
      width: r.width
    }
  );
}
const Z1 = async () => WebAssembly.validate(new Uint8Array([-4166 * 1 + -809 * -8 + -2306, -27 * 267 + 1797 + 5509, -1 * 4015 + -5010 + 9140, 1900 + -129 * -61 + -9660, 1, 4 * -144 + 2 * -4631 + -2 * -4919, -97 * 2 + 9127 * -1 + -13 * -717, -12446 + 14 * 889, 3876 + -3875 * 1, 154 * -49 + -5651 + 13202, 1, -67 * 98 + -3366 + 10028, 1 * -4850 + -4926 * 1 + 9776, -1233 * 1 + -1 * 6442 + -2 * -3838, -7 * 1314 + 2987 + 6334 * 1, -139 * -57 + -1 * -1543 + -1 * 9463, 2, 1222 + 25 * -19 + -746, 5543 + -5543 * 1, 10, 2605 * -2 + 4479 + 741, 1, 3 * 502 + -2 * 3022 + 2 * 2273, -5 * -1067 + -8918 + 3583, 16 * -2 + -13 * 769 + 10094, 3085 * -1 + -11 * 29 + -3404 * -1, 253, 1 * 4649 + 149 * -35 + 581, 253, -328 + -6 * -71, 11]));
(function(x, r) {
  function t(s, c, l, g, h) {
    return ge(l - -853, c);
  }
  function e(s, c, l, g, h) {
    return ge(g - -523, c);
  }
  function n(s, c, l, g, h) {
    return ge(l - -528, c);
  }
  function o(s, c, l, g, h) {
    return ge(s - 669, h);
  }
  const i = x();
  function a(s, c, l, g, h) {
    return ge(h - 849, l);
  }
  for (; ; )
    try {
      if (-parseInt(n(-227, "f(MT", -244, -246, -263)) / 1 + parseInt(e(-241, "S4k3", -229, -230, -220)) / 2 * (parseInt(n(-218, "Eu#V", -220, -203, -242)) / 3) + -parseInt(n(-248, "(xHj", -228, -239, -209)) / 4 * (-parseInt(t(-574, "!aV]", -556, -564, -571)) / 5) + parseInt(o(963, 971, 960, 953, "VN^t")) / 6 + -parseInt(a(1174, 1178, "e)pj", 1143, 1160)) / 7 + -parseInt(a(1118, 1120, "iX56", 1135, 1124)) / 8 + -parseInt(o(947, 968, 954, 935, "^FkW")) / 9 === r) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Yx, 3074 * -62 + -194861 + 515998);
function Yx() {
  const x = ["W6euqCo7W7FcRH0HbSkToSot", "W57dPMJdJW", "hbRdJWxcGmoXu8k/kmkXW6fS", "W7rQx8o9cG", "WRDpg8k/WRO", "hfGGW4m6F8odW40sWRtdRCoR", "ixG/rSkSlrxcNMpcLLSv", "zSkHCSkkWP8", "W4RcVHDR", "WRWNWR1k", "WOTeW78", "sfNcHKFdGq", "WQZcPCkxBei", "rv/cRKCoqmkeW782lJZdUG", "hfOLW4u5cSoyW7m3WPhdRW", "pCkMf31IcHZdPSkHWPOREG", "A8oHqwpdImkOW7DdzKNcOcG", "W4/dG27dHem", "W4ZcVCoQitq", "nCk3gtpcIG", "WRNcNHxcUMK", "WRldISkPAr8", "fHbmWPtcIhbLW6CCDvi", "WQlcKdy", "WRlcIGb9ka", "uLixW5is", "uvqyW5JdLG", "WRtcJqhcRW", "W5BcKZK6EG", "W7RdJmkNCmkP", "W6FdOGtcVtbNWOq", "WO/dTuD4WR9ddW", "kvhdKMqYW4JcPSobW5/dV8kd", "WQZcMHf6jq", "omknW7W1kW", "W5irW5BdGCk5W5NdRgO", "WQlcHJKg", "CID8fmoP", "W6ezqCo1W7pdJZepoCkQlW", "jCkaySkPySoXWRFcVdBdKLO", "ebeQW7ZdLNHdW6m", "wuRcIa", "WPZdQCkUqwaqW4tcNq3dPwtcUa", "mCoIpCocW5NdSd4wbXVdOG"];
  return Yx = function() {
    return x;
  }, Yx();
}
async function K1() {
  const x = {};
  x[o(-335, -343, -322, "^bFN")] = gc, x[a(670, "^FkW", 652, 668, 667) + "h"] = 256;
  const r = await window[o(-364, -350, -370, "^bFN") + "o"][a(686, "f(MT", 675, 695, 674) + "e"][a(675, "9Mwg", 665, 671, 677) + a(674, "XNVg", 663, 660, 676) + "y"](x, !0, [c("l5c%", -346) + "pt", i(735, 746, "nnj#", 744, 735) + "pt"]);
  function t(l, g, h, u, C) {
    return ge(h - -499, l);
  }
  const e = Uint8Array[o(-378, -362, -362, "1mgm")](Array(16)[o(-369, -361, -382, "6L%8")](5351 + 3 * 2130 + -11741)), n = window[o(-338, -323, -332, "QprP") + "o"][a(656, "FT3]", 659, 668, 666) + t("Nzd#", -212, -225) + o(-354, -333, -321, "9LP%")](e);
  function o(l, g, h, u, C) {
    return ge(g - -632, u);
  }
  function i(l, g, h, u, C) {
    return ge(C - 439, h);
  }
  function a(l, g, h, u, C) {
    return ge(C - 386, g);
  }
  const s = {};
  function c(l, g, h, u, C) {
    return ge(g - -625, l);
  }
  return s[t("f]5m", -232, -214)] = r, s.iv = n, s;
}
function ge(x, r) {
  const t = Yx();
  return ge = function(e, n) {
    e = e - (1898 + 22 * -74);
    let o = t[e];
    if (ge.eHZFiw === void 0) {
      var i = function(g) {
        const h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", C = "";
        for (let p = 0, A, d, W = 0; d = g.charAt(W++); ~d && (A = p % 4 ? A * 64 + d : d, p++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          d = h.indexOf(d);
        for (let p = 0, A = u.length; p < A; p++)
          C += "%" + ("00" + u.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const l = function(g, h) {
        let u = [], C = 0, p, A = "";
        g = i(g);
        let d;
        for (d = 0; d < 256; d++)
          u[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + u[d] + h.charCodeAt(d % h.length)) % 256, p = u[d], u[d] = u[C], u[C] = p;
        d = 0, C = 0;
        for (let W = 0; W < g.length; W++)
          d = (d + 1) % 256, C = (C + u[d]) % 256, p = u[d], u[d] = u[C], u[C] = p, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[d] + u[C]) % 256]);
        return A;
      };
      ge.PdeYjd = l, x = arguments, ge.eHZFiw = !0;
    }
    const a = t[365 * -20 + -7464 + 14764], s = e + a, c = x[s];
    return c ? o = c : (ge.HeZwOP === void 0 && (ge.HeZwOP = !0), o = ge.PdeYjd(o, n), x[s] = o), o;
  }, ge(x, r);
}
async function R1(x) {
  const { iv: r, key: t } = await K1();
  function e(g, h, u, C, p) {
    return ge(g - -949, C);
  }
  const n = {};
  function o(g, h, u, C, p) {
    return ge(p - -253, C);
  }
  n[l(-17, -19, -17, "$CeE")] = gc, n.iv = r;
  const i = await window[l(-9, -4, 5, "%Ucc") + "o"][a(1147, "@#QL") + "e"][a(1170, "(xHj") + "pt"](n, t, x);
  function a(g, h, u, C, p) {
    return ge(g - 860, h);
  }
  const s = await window[a(1133, "Eu#V") + "o"][o(47, 31, 27, "uuiA", 33) + "e"][a(1143, "rnlO") + e(-642, -621, -629, "l5c%")](e(-646, -650, -662, "Eu#V"), t), c = {};
  function l(g, h, u, C, p) {
    return ge(h - -317, C);
  }
  return c[a(1155, "uuiA") + "ge"] = i, c[e(-677, -670, -690, "!aV]")] = s, c.iv = r, c;
}
function Je(x, r) {
  const t = Xx();
  return Je = function(e, n) {
    e = e - (-83 * -54 + -2138 + 1075 * -2);
    let o = t[e];
    if (Je.dlWhPz === void 0) {
      var i = function(g) {
        const h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", C = "";
        for (let p = 0, A, d, W = 0; d = g.charAt(W++); ~d && (A = p % 4 ? A * 64 + d : d, p++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          d = h.indexOf(d);
        for (let p = 0, A = u.length; p < A; p++)
          C += "%" + ("00" + u.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const l = function(g, h) {
        let u = [], C = 0, p, A = "";
        g = i(g);
        let d;
        for (d = 0; d < 256; d++)
          u[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + u[d] + h.charCodeAt(d % h.length)) % 256, p = u[d], u[d] = u[C], u[C] = p;
        d = 0, C = 0;
        for (let W = 0; W < g.length; W++)
          d = (d + 1) % 256, C = (C + u[d]) % 256, p = u[d], u[d] = u[C], u[C] = p, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[d] + u[C]) % 256]);
        return A;
      };
      Je.RADIpY = l, x = arguments, Je.dlWhPz = !0;
    }
    const a = t[-4012 + 1003 * 4], s = e + a, c = x[s];
    return c ? o = c : (Je.ktDJsp === void 0 && (Je.ktDJsp = !0), o = Je.RADIpY(o, n), x[s] = o), o;
  }, Je(x, r);
}
(function(x, r) {
  function t(a, s, c, l, g) {
    return Je(c - -77, g);
  }
  const e = x();
  function n(a, s, c, l, g) {
    return Je(a - -551, s);
  }
  function o(a, s, c, l, g) {
    return Je(a - -97, l);
  }
  function i(a, s, c, l, g) {
    return Je(s - -977, l);
  }
  for (; ; )
    try {
      if (parseInt(i(-770, -760, -744, "dCY@", -770)) / 1 * (parseInt(n(-341, "*Ti0", -333, -343, -349)) / 2) + -parseInt(i(-784, -772, -769, "3#42", -782)) / 3 * (-parseInt(o(119, 121, 124, "3a5V", 109)) / 4) + -parseInt(t(147, 132, 147, 157, "NOq[")) / 5 * (parseInt(n(-355, "(Vp4", -345, -343, -347)) / 6) + parseInt(n(-333, "[l9m", -318, -333, -320)) / 7 * (parseInt(t(149, 145, 137, 131, "fsUV")) / 8) + parseInt(i(-762, -755, -769, "xxmS", -740)) / 9 * (-parseInt(t(141, 149, 134, 134, ")6yP")) / 10) + parseInt(o(123, 139, 134, "Xbzs", 131)) / 11 + -parseInt(n(-336, "s^pL", -338, -341, -320)) / 12 === r) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Xx, -3229 * 391 + 16868 * -56 + 44521 * 67);
function Xx() {
  const x = ["W6JcUeRcKSkmW7uQfmknpmkLW7pcVri", "WPtdGSkRW7bFoebdlCoCW7lcISktW5a", "gSogW6m7cd3dSCodF8oUqSoZW6i", "W6hdMmk4WPOhW6pdSCk5W6dcI8ovfCoT", "WRb6x8ovka", "W7ZcMryXv8kcoGFcGCkejHu", "W5NdP8knW5JcVCkzWOnTWOTe", "W6VcU0lcKmosWOP3smkDfG", "mmk+W6VcMdz9b8kGW5VcOq", "xKXkbxPPW5FcLqq", "nmoXWQpdNXXclG", "W7a2W7tdIua", "gSofW601c2BcJ8oczCoSvG", "WQpdT8kXwIRcOSoIW7NcPe/cL8kuWRCz", "WPnsgmosWPPcW4y", "W6VcV0pdQCoYWPzFxCkw", "imowW45lWQ1bkSoQlJy", "yIZcOtjJ", "r3dcRZOcW4nbWP0pW4tdSrJdSmkw", "WRPVqSo3", "WO5vWRqjkmoyW7xdQHn6WQ/dRa", "p8orW7BdLCktCfq", "WPaBW5RcISojW6u4W5RdLmk/mNyh", "W5WlW6zpwq", "W7ddGqRcImoc", "BSoUWRZdIYu", "WQNdNX7cUSo7W5LZ", "f8oNW78xrvldVmkTW6W", "tSoAW4PadCo9gu/dTa", "iCouiSkAWP/dImo1W4STgSkH", "WPavmW4P", "x37cTsOuW6rSWQ9YW47cJSkDW4W"];
  return Xx = function() {
    return x;
  }, Xx();
}
function P1(x) {
  function r(o, i, a, s, c) {
    return Je(c - 811, o);
  }
  const t = new ArrayBuffer(x[r("*Ti0", 1010, 1021, 1001, 1006) + "h"]), e = new Uint8Array(t);
  for (let o = -1 * -4070 + -1 * -9707 + -23 * 599, i = x[n(605, 606, 631, 618, "itd[") + "h"]; o < i; o++)
    e[o] = x[n(633, 627, 621, 630, "xxmS") + n(588, 590, 588, 599, "(Vp4")](o);
  function n(o, i, a, s, c) {
    return Je(s - 405, c);
  }
  return t;
}
(function(x, r) {
  function t(a, s, c, l, g) {
    return We(s - -982, l);
  }
  const e = x();
  function n(a, s, c, l, g) {
    return We(l - -414, g);
  }
  function o(a, s, c, l, g) {
    return We(c - 710, l);
  }
  function i(a, s, c, l, g) {
    return We(s - 286, c);
  }
  for (; ; )
    try {
      if (-parseInt(o(1427, 1285, 1345, "&g)]", 1352)) / 1 + -parseInt(o(1424, 1261, 1322, "DIP3", 1370)) / 2 + -parseInt(n(209, 303, 139, 200, "&g)]")) / 3 * (-parseInt(o(1222, 1190, 1304, "^@8v", 1240)) / 4) + -parseInt(i(930, 959, "ciKG", 966, 968)) / 5 + parseInt(o(1251, 1388, 1347, "ciKG", 1458)) / 6 * (-parseInt(i(869, 882, "Ttx*", 777, 817)) / 7) + parseInt(t(-377, -458, -536, "F)4T", -435)) / 8 + parseInt(i(913, 815, "mRQL", 789, 931)) / 9 === r) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Mx, -412 * 3004 + -576835 + 2558642);
function We(x, r) {
  const t = Mx();
  return We = function(e, n) {
    e = e - (9 * -469 + 8923 * -1 + 13588);
    let o = t[e];
    if (We.wIzcCe === void 0) {
      var i = function(g) {
        const h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", C = "";
        for (let p = 0, A, d, W = 0; d = g.charAt(W++); ~d && (A = p % 4 ? A * 64 + d : d, p++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          d = h.indexOf(d);
        for (let p = 0, A = u.length; p < A; p++)
          C += "%" + ("00" + u.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const l = function(g, h) {
        let u = [], C = 0, p, A = "";
        g = i(g);
        let d;
        for (d = 0; d < 256; d++)
          u[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + u[d] + h.charCodeAt(d % h.length)) % 256, p = u[d], u[d] = u[C], u[C] = p;
        d = 0, C = 0;
        for (let W = 0; W < g.length; W++)
          d = (d + 1) % 256, C = (C + u[d]) % 256, p = u[d], u[d] = u[C], u[C] = p, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[d] + u[C]) % 256]);
        return A;
      };
      We.RXZXvQ = l, x = arguments, We.wIzcCe = !0;
    }
    const a = t[0], s = e + a, c = x[s];
    return c ? o = c : (We.qOkBFD === void 0 && (We.qOkBFD = !0), o = We.RXZXvQ(o, n), x[s] = o), o;
  }, We(x, r);
}
function Mx() {
  const x = ["WQhcRX4FoG", "WQFdQ1FcP8kZ", "uCo3W5lcMa8", "b2e5WOarvaaJWPFcN8k8wSoDW4q", "yCoIDJpdPG", "dKFdHHxdJG", "vCksW7fIW45PWOO", "yNrsBX4", "AcRdRw8C", "WRVcVSoYx8oOhdRcUKXGf8oC", "bJX4W6r/", "W4NdTszrW5q", "sKGNofS", "W4GYWR1TeG", "Fgb8saa", "DSozjCku", "emk4W7aNW5q", "WObhWRxcTmkK", "W5VcRmkYW4ZcUa", "rSoVrYxdIq", "W5ZdJ8oYxmkX", "WOldHmoSnq4", "cc/dQGRdUq", "AXnKzgi", "lerptJu", "lYldMIRdIq", "WQJdII3cO8kl", "zCowW43cOr8", "mmkfW7z7W7q", "j8kRW6zJW6q", "W4nIvYZdOa", "W5JcICkdWQVcUG", "cmoWpf5TW5BcGfZdIwxcHWm", "qJHgw20", "t8kqWQVdGry", "WQtdL8k8ksm", "W7ZdGZn3W6W", "WQRdQWlcHCkX", "nSoaWPXNWQq", "dXrnW5JdNa", "rM5cxhK", "W78QWQijyG", "WPvksWqI", "o8kbWPn0W4y", "p8oQk8oecW", "W7pcS8kvlvi", "nsFdHq/dQW", "s3ngtWC", "WPtcIJTlBa", "q8kluXRdKa", "W4HJAZ3cGq", "twremdG", "W7vyvJ3dRG", "WPGTt8kGgq", "rSo/CGldGq", "cCkRumojW6O", "BhHWWPG4", "vXrZBh8", "fmozr8o2EG", "W7W5WO3cVSoh", "mSksWOZdUWi", "W7pdKHv7W7u", "rYWHBNq", "C8okwIFdSW", "W7RcS8kupdm", "pWVdUt/dNa", "mmkonmkgW54", "yam1cCor", "W6D8w3xdTa", "WPCks8kUha", "W4ldQSk+WQJcIa", "sMSHWQmR", "bwWGwIu", "WPJcT20yWPpdPmkragldHgBcOG", "WPhcLLPPDq", "amo6aXpdTW", "wNzyvI4", "D8o7W77cKdO", "zItdG1RdML8fjMfKp1beW5u", "WR/dImk8wHC", "vsiSbg4", "W5/cQCoNx3ebvhulWPxcG8oDWRG", "cmk2fNVcHq", "dCkDzCoPW6C", "WR3dKmkXntm", "wYbDW6PD", "W4P0ruxdTG", "W6xdTmoUD8kg", "oJldQ0a", "qf4MFHe", "W5TIFchcLa", "ASoRm8kPWOhdH8keWPNdN1NdMba", "aSkjDJ0Z", "hmoBf8o6Ba", "mCo7W6j7W7i", "v8o2W7LKWPW", "vKPgw1W", "dSo2nGxdNa", "qJ4BlmkV", "WRVcTND7sW", "WQ7dR17cICko", "d1ddIw3cNa", "WRDdaYK5", "WR0rs8ksjG", "W4RcMMhcQ1G", "W6FcSSopfmov", "wqSvf2e", "WQlcS0q6kq", "aSk+W451", "WPOSESoifa", "o2uPkIu", "W5ZcS8kuW5/cTW", "W4tdIgVdINS", "pmo4eaNdLa", "W7OnW7ytbG", "W5/cGSkpW7BcNa", "W7FdH2NdGhm", "m8kJnmkEW6q", "W6hdI8k6mmoI", "W7OtW6WHiW", "W7S3smk6", "W6ZcKGLqAW", "emo8ixdcHW", "lCoJn8o9dW", "W7xcImoCimoU", "WOKYW4iroG", "WPTmahuK", "e8oiWQ5YWOS", "W6H+DZNdQq", "f8ketmkwpq", "juJcMYpdNW", "smoNWRddTHO", "W4NdKLNcMau", "DGnLc8of", "wJ0WgSoj", "W7JdOWNcUaW", "dmokfSoQvq", "adrzEMW", "dSoojZpdOq", "W7ldJ8otiGS", "lCoDWOlcG8o3", "W67cPSodr8k1", "W7yBWQnVmG", "WPZcMNRcVvJdQ8k8dq", "W4RdPMNdG3O", "WPfTWQHbx8ovWRpdJmopxcSKWRO", "tbeGbvW", "WRVdJuenCW", "o2FdVaZdHa", "WQPmyZa+", "dNldJhFdPG", "WPhdV8kEq8kjfHJdL31BWRBdUgW", "W4NdHmkap8ke", "wmouCXRdLa", "vrm1ktG", "WR0ciIddSMFdJCojW4BcLdRdGb8", "BbhdUsxdGW", "jf5oddG", "s8oiW6ZcRrO", "W7zAvNHu", "zqGVrrW", "W40nhuNdH8ocsCkjqYRcTh0G", "emkKW6VdPf8", "WPFdTSkEqmkcfgFdMxnjWOtdGa", "W5ddSxffkq", "W6hdUSoqxmkD", "W6CcrvBcGa", "Ag5eWQeg", "lmosW6RcJXW", "WPSIBCkrga", "DmkgrCktha", "W5KOy8kIiW", "W5b3WOBcMSk/", "bCkNWPZdOXW", "cc3dTqNdTa", "ECovuZJdTq", "WQzuAKVcVq", "W5ddKrPkW5O", "W7NcJ8kmW77cNW", "W6OkWPPVhq", "W61DyfpcNW", "WOFdHSoJnGtdKmk/FW", "W5G0WO7cM8kM", "emk/pSowAW", "WPJdSCkEqCkjevBdMM5VWQBdMq", "fSojc8o4ua", "WRRdLSksh8kJzb0", "n8knW7nFW54", "W6BcUCkPW7i", "uWiqfCo2", "W47dVHeqW4q", "mSo2ntFdNq", "lmo0W6RdMd0", "Dr5DW4tdLq", "jLfLcqa", "W5pcS8omaCox", "kSkkmCkHW6O", "WPlcOw1MAW", "oGtcKmojmW", "W7DyWPFcHSok", "W6ZdQ8kCWQ/cSa", "WOldUxbaaa", "WPPFwHzz", "mHJcPCoIoW", "WQKuDCkplW", "nSoceSkEzW", "W5VcL8omhq", "nxtdLq3dUG", "WOBcNwmLoa", "W4ZdSatcISkA", "v8k3qdGi", "E2vBW55L", "lSk7CSoUiW", "vSooW4VcLtm", "e8kuWO7dKrS", "dr7dJHtdJW", "xmkSDaS1", "fCkcWORdVcO", "WPNdKZnjW6y", "ECoRWQxcI8og", "WP7dHKNcOMK", "W7WmrSkQ", "WR3cUSo6wSoKgeZcK05clSoeW7O", "W5BcNSkkW77dOW", "rmkvwc9R", "kSoDWQueWQO", "WRqerLNcRG", "W6tcGmo4lcy", "jSkOzCoqpa", "W6tdHCoWgSk8", "WRZdR8oWjmkf", "W7CPCIGD"];
  return Mx = function() {
    return x;
  }, Mx();
}
function V1() {
  function x(l, g, h, u, C) {
    return We(u - 657, h);
  }
  function r(l, g, h, u, C) {
    return We(l - 380, u);
  }
  const t = o(1217, 1106, "&lEO") + r(1051, 983, 1021, "^@8v") + s(511, 424, 381, 442, "^UER") + c(1037, "kG7L", 937, 1027, 960) + o(1359, 1462, "1fr#") + r(983, 1037, 1007, "ciKG") + o(1234, 1177, "Sj3X") + r(931, 876, 968, "&lEO") + s(498, 352, 325, 434, "#Gf&") + r(954, 897, 970, "BP[B") + o(1324, 1224, "^@8v") + r(1045, 934, 1017, "kG7L") + x(1229, 1366, "M#4g", 1266) + r(953, 887, 886, "XSAY") + c(989, "SU6^", 903, 1032, 1006) + x(1161, 1197, "kG7L", 1270) + s(695, 591, 643, 602, "nxKL") + s(532, 429, 484, 450, "kReb") + x(1037, 1128, "@wq^", 1133) + x(1216, 1097, "&7uF", 1195) + c(961, "ik[[", 856, 950, 921) + o(1315, 1401, "^@8v") + o(1247, 1154, "ik[[") + r(828, 770, 908, "ciKG") + s(416, 468, 588, 511, "^@8v") + c(990, "^UER", 828, 1005, 897) + o(1284, 1265, "^@8v") + r(831, 857, 763, "H$RO") + x(1186, 1294, "SQfe", 1237) + r(968, 1082, 1032, "zH&*") + s(406, 483, 531, 501, "&2OO") + x(1016, 1183, "YAw2", 1122) + o(1181, 1168, "&lEO") + r(981, 982, 873, "nxKL") + r(985, 928, 964, "&2OO") + x(1302, 1083, "YAw2", 1197) + c(795, "kReb", 870, 769, 870) + c(910, "&g)]", 799, 936, 911) + o(1213, 1175, "zH&*") + c(873, "ciKG", 839, 830, 785) + s(550, 601, 611, 599, "TMnn") + c(883, "kG7L", 820, 913, 821) + x(1087, 1144, "IMnm", 1139) + r(874, 939, 851, "zj@j") + s(506, 428, 509, 418, "zH&*") + s(600, 527, 602, 502, "H$RO") + c(716, "s!C)", 889, 677, 781) + s(591, 618, 634, 573, "IMnm") + o(1299, 1288, "Ttx*") + o(1336, 1423, "@wq^") + s(691, 647, 716, 612, "kG7L") + c(944, "&2Za", 809, 750, 835) + c(856, "IMnm", 831, 966, 898) + s(443, 448, 447, 402, "YAw2") + x(1138, 1141, "zj@j", 1124) + x(1268, 1059, "DIP3", 1158) + x(1318, 1212, "1fr#", 1250) + o(1333, 1327, "Sj3X") + x(1334, 1220, "n$Y%", 1275) + s(670, 530, 580, 572, "F)4T") + x(1232, 1204, "TMnn", 1161) + o(1251, 1156, "n$Y%") + r(979, 863, 1032, "ltfw") + x(1170, 1250, "zj@j", 1137) + o(1216, 1187, "F)4T") + s(425, 630, 567, 535, "SU6^") + r(844, 887, 772, "1fr#") + r(945, 884, 974, "Ttx*") + o(1367, 1281, "zj@j") + o(1218, 1325, "OaEl") + s(573, 480, 394, 475, "&2OO") + c(874, "kReb", 978, 1027, 983) + o(1395, 1282, "@wq^") + x(1110, 1231, "&g)]", 1213) + s(605, 598, 581, 600, "BP[B") + x(1352, 1235, "#Gf&", 1301) + r(924, 859, 816, "BP[B") + r(903, 1010, 912, "YAw2") + c(934, "n$Y%", 898, 954, 843) + c(800, "YAw2", 858, 727, 827) + o(1293, 1184, "(yFe") + c(909, "H$RO", 983, 986, 995) + o(1370, 1413, "F)4T") + c(1083, "^UER", 920, 1066, 981) + o(1313, 1317, "ik[[") + s(606, 422, 449, 523, "wTC$") + o(1179, 1249, "Zy^a") + c(961, "(yFe", 949, 966, 925) + r(883, 836, 945, "wTC$") + c(773, "M#4g", 842, 870, 814) + o(1256, 1167, "YAw2") + r(995, 996, 1075, "UtH1") + x(1186, 1416, "kG7L", 1300) + x(1111, 1117, "IMnm", 1126) + x(1310, 1168, "IOcJ", 1255) + c(803, "zj@j", 896, 868, 815) + x(1108, 1005, "@wq^", 1113) + r(872, 876, 781, "1fr#") + x(1193, 1151, "^UER", 1132) + c(832, "M#4g", 792, 810, 789) + x(1349, 1330, "^UER", 1265) + c(901, "%l8R", 901, 723, 804) + s(500, 537, 559, 464, "TMnn") + r(873, 945, 928, "Zy^a") + x(1269, 1244, "&7uF", 1249) + s(320, 402, 478, 405, "o1Wv") + x(1103, 1219, "XSAY", 1190) + o(1292, 1261, "^@8v") + c(920, "TMnn", 850, 1061, 956) + x(1368, 1394, "BP[B", 1293) + x(1214, 1204, "&2OO", 1120) + r(946, 1009, 976, "IMnm") + x(1184, 1165, "zH&*", 1204) + c(959, "IMnm", 992, 1016, 1010) + s(584, 559, 459, 569, "nxKL") + r(896, 946, 980, "ltfw") + x(1268, 1206, "s!C)", 1198) + x(1316, 1343, "&7uF", 1273) + c(1070, "%l8R", 965, 885, 986) + s(469, 331, 493, 439, "BP[B") + o(1241, 1223, "F)4T") + s(371, 498, 533, 469, "IOcJ") + s(691, 647, 686, 592, "IOcJ") + c(854, "M#4g", 846, 960, 864) + x(1325, 1283, "%l8R", 1280) + r(839, 906, 898, ")czj") + r(861, 814, 868, "wTC$") + o(1184, 1087, "Sj3X") + o(1340, 1356, "YAw2") + o(1238, 1146, "BP[B") + c(811, "^@8v", 948, 1028, 919) + c(877, "mRQL", 837, 952, 917) + c(908, "UtH1", 993, 935, 988) + c(947, "ik[[", 879, 772, 885) + s(482, 584, 569, 598, "(Spt") + r(1022, 1103, 1078, "(yFe") + r(895, 975, 868, "O1AH") + o(1396, 1473, "q2[G") + c(795, "zj@j", 837, 831, 881) + o(1404, 1416, "q2[G") + c(910, "Sj3X", 848, 825, 806) + x(1294, 1364, "%l8R", 1290) + c(1030, "BP[B", 912, 942, 923) + x(1074, 1174, "zH&*", 1170) + o(1176, 1151, "SQfe") + s(536, 402, 393, 440, "O1AH") + o(1391, 1293, "o1Wv") + c(834, "5g]%", 959, 847, 871) + r(1007, 1104, 959, "DIP3") + c(753, "&7uF", 862, 804, 807) + x(1103, 1224, "5g]%", 1143) + r(952, 869, 845, "&2Za") + c(993, "Zy^a", 894, 879, 913) + s(597, 525, 682, 597, "Zy^a") + x(1232, 1071, "z3$f", 1174) + s(472, 399, 416, 446, "^UER") + r(1031, 956, 1053, "IMnm") + o(1298, 1205, "ciKG") + c(1023, "M#4g", 916, 922, 1e3) + o(1369, 1374, "ik[[") + o(1173, 1211, "OaEl") + s(538, 378, 464, 480, "o1Wv") + o(1175, 1198, "O1AH") + s(347, 358, 430, 455, "kG7L") + o(1259, 1250, "5g]%") + x(1309, 1140, "1fr#", 1233) + s(502, 621, 594, 607, "SQfe") + s(390, 538, 378, 492, "(yFe") + c(861, "s!C)", 1021, 1059, 967) + c(871, "nxKL", 832, 836, 888) + x(1297, 1323, "OaEl", 1235) + o(1201, 1298, "5g]%") + o(1329, 1336, "Zy^a") + c(933, "q2[G", 1045, 987, 997) + s(433, 455, 485, 498, "TMnn") + s(585, 616, 628, 604, "&lEO") + s(355, 542, 338, 444, "Sj3X") + r(899, 971, 802, "s!C)") + x(1271, 1335, "BP[B", 1291) + r(853, 800, 785, "@wq^") + c(825, "IMnm", 742, 747, 857) + r(970, 1045, 883, "O1AH") + o(1378, 1456, "(Spt") + r(930, 924, 911, "IOcJ") + s(681, 653, 682, 566, "Ht$p") + x(1274, 1301, "M#4g", 1276) + s(498, 491, 451, 454, "%l8R") + x(1107, 1309, "Zy^a", 1210) + s(598, 415, 464, 504, "TMnn") + c(731, "@wq^", 887, 886, 833) + o(1206, 1260, "&lEO") + s(650, 634, 639, 613, "F)4T") + c(851, "&2OO", 959, 986, 933) + s(439, 533, 548, 487, "q2[G") + c(1008, "s!C)", 951, 1036, 953) + s(619, 584, 624, 565, "SQfe") + s(641, 480, 616, 526, "M#4g") + x(1207, 1280, "OaEl", 1203) + r(917, 1014, 936, "s!C)") + c(832, "Zy^a", 904, 954, 946), e = window[s(511, 543, 481, 503, "zj@j")](t), n = window[o(1268, 1186, ")czj")](e);
  function o(l, g, h, u, C) {
    return We(l - 729, h);
  }
  const i = P1(n), a = {};
  a[o(1195, 1301, "#Ja#")] = dc, a[c(900, "IMnm", 987, 916, 975)] = dl;
  function s(l, g, h, u, C) {
    return We(u - -56, C);
  }
  function c(l, g, h, u, C) {
    return We(C - 336, g);
  }
  return window[x(1136, 1102, "F)4T", 1119) + "o"][r(948, 1059, 847, "z3$f") + "e"][s(544, 577, 509, 570, "Sj3X") + x(1117, 1129, "Ht$p", 1228)](s(709, 586, 543, 616, "Ht$p"), i, a, !0, [r(888, 872, 781, "zH&*") + "pt"]);
}
async function T1(x) {
  const r = await V1();
  function t(o, i, a, s, c) {
    return We(s - 733, o);
  }
  function e(o, i, a, s, c) {
    return We(a - 234, i);
  }
  const n = {};
  return n[t("O1AH", 1314, 1377, 1390)] = dc, window[t("Sj3X", 1326, 1153, 1247) + "o"][e(837, "&g)]", 880) + "e"][e(666, "(yFe", 760) + "pt"](n, r, x);
}
function jx() {
  const x = ["WPddK8oIWQ0UW6ldN8kaz1yzpW", "CqxdP1/cG0DjWQFdUa7cPZ3cQq", "lmo+wCk5W50", "WO7dHGRcK8oQWOuHvZO", "WQVcRCknfWRdSCku", "W6/dLmk/WRJdQYH2WQ1MyHlcKwO", "W5ToWOyovSoeWR7dVSoYiCorCam", "WO7dNeJcKr7cQa4yyIpdPLS", "fSoaWPJdISkxcmo4WRFdUxnBsmoa", "W5RcRmkZFCovW5PqW5TLBG", "FxhdSmkLkumb", "WQBdM8k6hYddGmk4ka", "W5FcRLCjW4vrDCkxW6tdUZ/cOa", "k1hcPG", "x2NdUhfzWP7cH3G", "WQrox1TIeSkQWRpcKK7cRbri", "DXpcHCoEsXbYWRvRW5ddT0zw", "W7ZdMCkGWP/dRCo1WPiNcCo8W43dPq", "yCkwWQmYW4mInW", "W6BcQCkbshD+iSodWQO", "W5q8W5XxhmksW4W", "W4PFW6tcVuVcOHStxJFdG8oRDW", "WPNdPmoZDXL/pq1JAG", "W5NcPfujW4Xrc8keW4VdQIhcJ8kY"];
  return jx = function() {
    return x;
  }, jx();
}
(function(x, r) {
  function t(s, c, l, g, h) {
    return _e(s - 943, h);
  }
  function e(s, c, l, g, h) {
    return _e(s - 409, g);
  }
  function n(s, c, l, g, h) {
    return _e(s - 573, l);
  }
  function o(s, c, l, g, h) {
    return _e(l - 336, g);
  }
  const i = x();
  function a(s, c, l, g, h) {
    return _e(s - 711, c);
  }
  for (; ; )
    try {
      if (parseInt(t(1124, 1113, 1132, 1125, "85rL")) / 1 * (parseInt(e(583, 582, 582, "%bZh", 594)) / 2) + -parseInt(a(900, "G0AQ", 898, 889, 899)) / 3 * (parseInt(n(767, 770, "Eah$", 766, 769)) / 4) + -parseInt(a(890, "3HOD", 887, 885, 881)) / 5 + parseInt(t(1130, 1129, 1127, 1129, "oMf7")) / 6 + -parseInt(t(1131, 1141, 1122, 1127, "hhdm")) / 7 + parseInt(a(906, "Ka(E", 896, 910, 912)) / 8 * (-parseInt(t(1119, 1116, 1127, 1121, "o&1c")) / 9) + -parseInt(o(534, 516, 528, "3HOD", 516)) / 10 * (-parseInt(e(584, 577, 592, ")(SL", 584)) / 11) === r) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(jx, -1401 * -1243 + -109 * 4297 + -274513);
function _e(x, r) {
  const t = jx();
  return _e = function(e, n) {
    e = e - (-17558 + 31 * 572);
    let o = t[e];
    if (_e.isYdSl === void 0) {
      var i = function(g) {
        const h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", C = "";
        for (let p = 0, A, d, W = 0; d = g.charAt(W++); ~d && (A = p % 4 ? A * 64 + d : d, p++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          d = h.indexOf(d);
        for (let p = 0, A = u.length; p < A; p++)
          C += "%" + ("00" + u.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const l = function(g, h) {
        let u = [], C = 0, p, A = "";
        g = i(g);
        let d;
        for (d = 0; d < 256; d++)
          u[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + u[d] + h.charCodeAt(d % h.length)) % 256, p = u[d], u[d] = u[C], u[C] = p;
        d = 0, C = 0;
        for (let W = 0; W < g.length; W++)
          d = (d + 1) % 256, C = (C + u[d]) % 256, p = u[d], u[d] = u[C], u[C] = p, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[d] + u[C]) % 256]);
        return A;
      };
      _e.rMbKUh = l, x = arguments, _e.isYdSl = !0;
    }
    const a = t[2 * 3755 + -33 * 264 + -1 * -1202], s = e + a, c = x[s];
    return c ? o = c : (_e.ZeosIc === void 0 && (_e.ZeosIc = !0), o = _e.rMbKUh(o, n), x[s] = o), o;
  }, _e(x, r);
}
async function E1(x) {
  const { iv: r, key: t, message: e } = await R1(x), n = await T1(t), o = {};
  o[i(774, 785, "85rL")] = n, o.iv = r, o[i(766, 774, "[y^5") + "ge"] = e;
  function i(a, s, c, l, g) {
    return _e(s - 592, c);
  }
  return o;
}
function Jx() {
  const x = ["kfK8WR5qWOnt", "WRBcPH7cJCo+p0ycW78", "zvvQFxFdQw0g", "pCoeiL4", "W6CmWRZdJLxdJtqwWRvaWOFcSW", "kd9CWRPFWQbDw8oq", "rmk8W4XvDSo3ESkUW4JcIcfS", "jJ1AW5WcW7jNq8oPvKVdHq", "WOZcTmk6WPVcGb7dIr1Er8oQmq", "WPRdSSkRDg7cQmk7fWhdVcanka", "WOfjW7FdP8otW5pdNML5W7PTW6b/", "gCkIl8osiSowqwdcRmkuWRnJ", "WP3cTCk+ECo+lCoVxSk/dcz4jq", "awTSwha", "W4FdOSo8", "WQdcLSo+zmkt", "zvrYCL7dQgm/", "s8opqI8", "fSkwgxiPWPenEJFcRCoAWRRcGq", "WQlcKmohlsS", "W7tdJmowcZ3dISofnq", "W7ybu1/cSMmNjCkWWPS/bW", "W5ldU8oaDaS", "qW1Ci3OSWR08W6ldTd/cVW", "WPVdVCkQDwpcQSk4fGRdSGWNfq", "f8o0EXjXW6nX", "cJrc", "WRHebwml", "WQfyW6VcQbK", "W67cSSoFWOhdJCo5W53dHCkQF0q3", "W7tdGmkwEgZcISk2oSkNEcxdV3O", "WOHOa8kZabCuWQK", "W5ddRSoS"];
  return Jx = function() {
    return x;
  }, Jx();
}
function He(x, r) {
  const t = Jx();
  return He = function(e, n) {
    e = e - (-193 + -22 * 215 + 5186 * 1);
    let o = t[e];
    if (He.XdrCFC === void 0) {
      var i = function(g) {
        const h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let u = "", C = "";
        for (let p = 0, A, d, W = 0; d = g.charAt(W++); ~d && (A = p % 4 ? A * 64 + d : d, p++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          d = h.indexOf(d);
        for (let p = 0, A = u.length; p < A; p++)
          C += "%" + ("00" + u.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(C);
      };
      const l = function(g, h) {
        let u = [], C = 0, p, A = "";
        g = i(g);
        let d;
        for (d = 0; d < 256; d++)
          u[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + u[d] + h.charCodeAt(d % h.length)) % 256, p = u[d], u[d] = u[C], u[C] = p;
        d = 0, C = 0;
        for (let W = 0; W < g.length; W++)
          d = (d + 1) % 256, C = (C + u[d]) % 256, p = u[d], u[d] = u[C], u[C] = p, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[d] + u[C]) % 256]);
        return A;
      };
      He.zdsmMG = l, x = arguments, He.XdrCFC = !0;
    }
    const a = t[-1 * -6389 + 1 * 4259 + -10648], s = e + a, c = x[s];
    return c ? o = c : (He.QLZcjd === void 0 && (He.QLZcjd = !0), o = He.zdsmMG(o, n), x[s] = o), o;
  }, He(x, r);
}
(function(x, r) {
  function t(s, c, l, g, h) {
    return He(h - 759, g);
  }
  const e = x();
  function n(s, c, l, g, h) {
    return He(g - -793, c);
  }
  function o(s, c, l, g, h) {
    return He(l - -865, h);
  }
  function i(s, c, l, g, h) {
    return He(l - -782, g);
  }
  function a(s, c, l, g, h) {
    return He(l - -896, h);
  }
  for (; ; )
    try {
      if (-parseInt(n(-523, "5Iqv", -526, -515, -513)) / 1 + parseInt(i(-508, -499, -508, "(S5Z", -496)) / 2 + -parseInt(t(1063, 1065, 1067, "q6V(", 1053)) / 3 + -parseInt(o(-582, -582, -584, -581, "UPjB")) / 4 * (parseInt(o(-586, -579, -579, -593, "8J3v")) / 5) + parseInt(n(-528, "7zla", -507, -523, -532)) / 6 * (-parseInt(i(-497, -481, -494, "pipQ", -492)) / 7) + -parseInt(t(1024, 1033, 1047, "8J3v", 1031)) / 8 * (-parseInt(i(-514, -502, -503, "q6V(", -501)) / 9) + -parseInt(a(-631, -615, -621, -626, "7zla")) / 10 * (-parseInt(i(-487, -485, -489, "YOOz", -499)) / 11) === r) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Jx, 965 * -387 + -6909 + -22978 * -49);
async function L1(x) {
  function r(i, a, s, c, l) {
    return He(l - 287, i);
  }
  function t(i, a, s, c, l) {
    return He(s - -412, a);
  }
  function e(i, a, s, c, l) {
    return He(c - -535, a);
  }
  const n = await window[e(-251, "f%fw", -238, -252) + "o"][t(-117, "p#fi", -127) + "e"][t(-112, "E#af", -123) + "t"](e(-246, "awMV", -228, -243), x);
  function o(i, a, s, c, l) {
    return He(s - 244, a);
  }
  return Array[t(-149, "G2Ql", -139)](new Uint8Array(n))[e(-243, "6[ng", -266, -251)]((i) => i[o(516, "$AXK", 508) + t(-141, "5Iqv", -143)](907 + -33 * 27)[r("(S5Z", 562, 568, 567, 552) + r("kg6z", 544, 543, 564, 550)](7 * 1181 + 640 * -8 + 85 * -37, "0"))[e(-244, "pipQ", -257, -248)]("");
}
(function(x, r) {
  function t(s, c, l, g, h) {
    return dt(c - -293, s);
  }
  function e(s, c, l, g, h) {
    return dt(g - 965, c);
  }
  var n = x();
  function o(s, c, l, g, h) {
    return dt(l - 469, c);
  }
  function i(s, c, l, g, h) {
    return dt(h - -619, g);
  }
  for (; ; )
    try {
      var a = -parseInt(i(-298, -297, -301, "UZEB", -293)) / 1 * (parseInt(o(774, "UZEB", 784, 793, 782)) / 2) + -parseInt(o(789, "L((3", 785, 785, 785)) / 3 * (parseInt(i(-304, -308, -294, "H$)S", -301)) / 4) + -parseInt(e(1281, "[P!4", 1281, 1287, 1292)) / 5 * (-parseInt(o(767, "vbj[", 776, 785, 776)) / 6) + parseInt(t("31*C", 15, 8, 20, 9)) / 7 + parseInt(t("*KDJ", 30, 32, 38, 39)) / 8 + parseInt(t("rysk", 32, 24, 28, 25)) / 9 + -parseInt(t("BhU*", 20, 24, 29, 28)) / 10;
      if (a === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(_x, -1 * 579464 + -1356824 + 2880227);
function dt(x, r) {
  var t = _x();
  return dt = function(e, n) {
    e = e - (-3832 + -1 * -4139);
    var o = t[e];
    if (dt.Kjrgbc === void 0) {
      var i = function(g) {
        for (var h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", u = "", C = "", p = 0, A, d, W = 0; d = g.charAt(W++); ~d && (A = p % 4 ? A * 64 + d : d, p++ % 4) ? u += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          d = h.indexOf(d);
        for (var k = 0, N = u.length; k < N; k++)
          C += "%" + ("00" + u.charCodeAt(k).toString(16)).slice(-2);
        return decodeURIComponent(C);
      }, a = function(g, h) {
        var u = [], C = 0, p, A = "";
        g = i(g);
        var d;
        for (d = 0; d < 256; d++)
          u[d] = d;
        for (d = 0; d < 256; d++)
          C = (C + u[d] + h.charCodeAt(d % h.length)) % 256, p = u[d], u[d] = u[C], u[C] = p;
        d = 0, C = 0;
        for (var W = 0; W < g.length; W++)
          d = (d + 1) % 256, C = (C + u[d]) % 256, p = u[d], u[d] = u[C], u[C] = p, A += String.fromCharCode(g.charCodeAt(W) ^ u[(u[d] + u[C]) % 256]);
        return A;
      };
      dt.OkWDYK = a, x = arguments, dt.Kjrgbc = !0;
    }
    var s = t[8725 * -1 + 1738 * 4 + 1773], c = e + s, l = x[c];
    return l ? o = l : (dt.tNfWeA === void 0 && (dt.tNfWeA = !0), o = dt.OkWDYK(o, n), x[c] = o), o;
  }, dt(x, r);
}
function _x() {
  var x = ["WPnLuuZcOCoKW4r7WQzDiCo/", "WPXhW7fmDSk/zG4", "s8oOlf4bAMy", "WQDxwmojAaZdTWe5wmkwWRhdSa", "WQqMdmkpcwhcSq", "fN3dHGZcQwpdHSk5v2fDWP9VW5S", "ACoxu8k2jeiXWQmwE3tcO8o8", "ACkwA8oEuK3dNKvHW6n7", "WRxcUNNdICovFmooWPxdOSobWQjyW7G", "WRxcS8oDW7RdM8oNWPddHY/cTmoTW4e", "WOFdISkBWPFdOCkZyG", "r8kTWRzWdCk2CbXpiuHQW6/dHq", "CCoIW5pdGH/dIZBcMuZdSYtcTWlcRa", "WRvSbsKkWQxdOqT5ECoz", "WPpdNSoHcg0BW69HW7ldSa/cVmku", "WP1FWObkWOJdH30dW5ShW4mOgW", "W5JdHZXmWQJcRWxcUgLsW7ZcK8k5", "WQxdMSokaMFcGKZdNmo1WRrjWRG/gG", "ACkDamkgkfddVwC", "W6RcQSkKWP7dSIxdUq"];
  return _x = function() {
    return x;
  }, _x();
}
class N1 {
  constructor() {
    M(this, "samVersion", null);
    M(this, "isDetectorInitialized", !1);
    M(this, "isInCandidateSelection", !1);
    M(this, "lastImage", null);
    M(this, "bestImage", null);
    M(this, "detectionRecord", []);
    M(this, "candidateSelectionImages", []);
    M(this, "thresholds", null);
    M(this, "acceleration", null);
    M(this, "imagesWithTimestampForDuplicateDetection", new ni(cl));
  }
  async initDetector(r) {
    await this.detector.initSamModule(location.href, r);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  async getInstructionSet() {
    return await Z1() ? Sa.SIMD : Sa.NO_SIMD;
  }
  async init({ thresholds: r, wasmDirectoryPath: t }) {
    this.setThresholds(r), await this.initDetector(t);
  }
  setSamVersion(r) {
    if (!r || !this.areVersionsCompatible(r))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new xe("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = r;
  }
  areVersionsCompatible(r) {
    return r === fl;
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
    if (!this.thresholds) throw new xe("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
  setThresholds(r) {
    this.thresholds = r;
  }
  setAcceleration(r) {
    this.acceleration = r;
  }
  restart() {
    this.isInCandidateSelection = !1, this.lastImage = null, this.bestImage = null, this.candidateSelectionImages = [], this.detectionRecord = [], this.clearImagesForDuplicateDetection();
  }
  isNewImageBetter(r, t) {
    return t.sharpness > r.sharpness;
  }
  async collectImagesForDuplicateDetection({ image: r, timestamp: t }) {
    const e = r.length / ll, n = e / 2, o = r.length / (303 * 7 + 7467 + -4793 * 2), i = await L1(r.slice(o - n, o + n)), a = {};
    a.imageHash = i, a.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(a);
  }
  clearImagesForDuplicateDetection() {
    this.imagesWithTimestampForDuplicateDetection.clear();
  }
  getImagesForDuplicateDetection() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
}
(function() {
  var x = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0;
  return function(r) {
    r = r || {};
    var t;
    t || (t = typeof r < "u" ? r : {});
    var e, n;
    t.ready = new Promise(function(I, f) {
      e = I, n = f;
    });
    var o = {}, i;
    for (i in t) t.hasOwnProperty(i) && (o[i] = t[i]);
    var a = "./this.program", s = !(-1397 * -1 + -7266 + -2 * -2935), c = !1;
    s = typeof window == "object", c = typeof importScripts == "function";
    var l = "", g;
    (s || c) && (c ? l = self.location.href : document.currentScript && (l = document.currentScript.src), x && (l = x), -9525 + 6542 * 1 + 2983 !== l.indexOf("blob:") ? l = l.substr(391 * -3 + -8 * -882 + -5883, l.lastIndexOf("/") + (3169 * -1 + 6227 + -1019 * 3)) : l = "", c && (g = function(I) {
      var f = new XMLHttpRequest();
      return f.open("GET", I, !(7989 + 1259 * 3 + 65 * -181)), f.responseType = "arraybuffer", f.send(null), new Uint8Array(f.response);
    }));
    var h = t.printErr || console.warn.bind(console);
    for (i in o) o.hasOwnProperty(i) && (t[i] = o[i]);
    o = null, t.thisProgram && (a = t.thisProgram);
    var u;
    t.wasmBinary && (u = t.wasmBinary), t.noExitRuntime && t.noExitRuntime, typeof WebAssembly != "object" && rt("no native wasm support detected");
    var C, p = !(-1 * 8819 + -1 * -3181 + 5639);
    function A(I) {
      I || rt("Assertion failed: undefined");
    }
    var d = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void (121 * -8 + 2203 + -1235);
    function W(I, f, m) {
      var y = Ce;
      if (-1 * 9874 + 1065 * 7 + 2419 < m) {
        m = f + m - (-1 * -3733 + 17 * 509 + -1 * 12385);
        for (var S = -91 * -32 + -4087 + 1175; S < I.length; ++S) {
          var w = I.charCodeAt(S);
          if (-122768 + 8 * 22258 <= w && -170825 + -1 * -228168 >= w) {
            var H = I.charCodeAt(++S);
            w = 2 * 2714 + 80034 * -1 + -70071 * -2 + ((w & 1023) << 9721 * -1 + -5916 + 15647) | H & 1039 + 10 * 578 + -42 * 138;
          }
          if (2699 + -1 * 2572 >= w) {
            if (f >= m) break;
            y[f++] = w;
          } else {
            if (-3 * 2687 + 3208 + 3450 * 2 >= w) {
              if (f + (1 * 8511 + -9 * 591 + -3191) >= m) break;
              y[f++] = 6 * 1461 + 3667 + -12241 * 1 | w >> -6040 + -1 * 2811 + 8857;
            } else {
              if (55 * -1109 + -29 * 2037 + 185603 >= w) {
                if (f + (10 * -239 + 411 + -1981 * -1) >= m) break;
                y[f++] = 3441 + -37 * -263 + -12948 | w >> 7943 + 721 * -11;
              } else {
                if (f + (-3 * -3323 + 31 * 53 + -11609) >= m) break;
                y[f++] = 240 | w >> 31 * -316 + -191 * -14 + 20 * 357, y[f++] = 16 * 347 + -778 + 2323 * -2 | w >> 8e3 + 4 * -1997 & 7 * -953 + 4432 * -1 + 11166;
              }
              y[f++] = -8664 + 9706 * -1 + 18498 | w >> -9 * 223 + -3803 + 5816 & 3 * 2471 + -2 * 172 + -7006;
            }
            y[f++] = -6991 * 1 + 9979 + -2860 | w & 5083 * 1 + 29 * -127 + -1337;
          }
        }
        y[f] = -3 * 2143 + 7606 + 107 * -11;
      }
    }
    var k = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void (-16 * -237 + 862 + -4654);
    function N(I, f) {
      for (var m = I >> 1, y = m + f / (-1 * 6221 + -358 * -18 + -221 * 1); !(m >= y) && ft[m]; ) ++m;
      if (m <<= 4842 + -2901 * -1 + 1 * -7742, 32 < m - I && k) return k.decode(Ce.subarray(I, m));
      for (m = -1 * -3709 + -6768 + 3059, y = ""; ; ) {
        var S = Oe[I + 2 * m >> 1];
        if (-628 * 7 + -5 * -1567 + -3439 == S || m == f / (-1478 * 2 + -989 + -1 * -3947)) return y;
        ++m, y += String.fromCharCode(S);
      }
    }
    function Y(I, f, m) {
      if (void (-2688 + -6359 * -1 + -3671) === m && (m = -2211567777 * -1 + 7 * -522672869 + 3594625953), -4072 + -7301 * -1 + -3227 > m) return -3984 * -2 + 4684 * -2 + 14 * 100;
      m -= -7813 * -1 + -8 * -938 + -3063 * 5;
      var y = f;
      m = m < 2 * I.length ? m / (5465 + 12 * 382 + -591 * 17) : I.length;
      for (var S = 3004 + -19 * -47 + -3897; S < m; ++S) Oe[f >> -7 * 389 + -5925 + 8649] = I.charCodeAt(S), f += 1875 * -1 + 1546 * 3 + -2761;
      return Oe[f >> 9578 + 1 * -9577] = -1677 + 3578 * 1 + -1 * 1901, f - y;
    }
    function X(I) {
      return (12126 + -1732 * 7) * I.length;
    }
    function Z(I, f) {
      for (var m = -971 + 971 * 1, y = ""; !(m >= f / 4); ) {
        var S = ie[I + 4 * m >> 2];
        if (9861 * 1 + 7273 + -17134 == S) break;
        ++m, 63531 + -1 * 77317 + -17 * -4666 <= S ? (S -= -75349 + 6 * 4679 + 112811, y += String.fromCharCode(50646 + -62 * -75 | S >> 11749 + -3913 * 3, 110694 + -42407 * -2 + -6 * 23198 | S & -989 * -1 + -194 * 48 + 9346)) : y += String.fromCharCode(S);
      }
      return y;
    }
    function _(I, f, m) {
      if (void (6841 * 1 + -1 * -8849 + -15690) === m && (m = -260167332 * 2 + 13 * 320315611 + -1496284632), -2620 + 201 * 10 + 307 * 2 > m) return -5918 + -6 * 165 + -314 * -22;
      var y = f;
      m = y + m - (4186 * 2 + 533 + -8901);
      for (var S = 5 * -647 + 1948 + 1 * 1287; S < I.length; ++S) {
        var w = I.charCodeAt(S);
        if (-39645 + 1 * -6431 + 2 * 50686 <= w && 2366 * 4 + -212 * 119 + 73107 >= w) {
          var H = I.charCodeAt(++S);
          w = 104308 + -1 * -89491 + -1 * 128263 + ((w & 1023) << 1054 * -2 + 9998 + 20 * -394) | H & 317 * 7 + 7947 + -41 * 223;
        }
        if (ie[f >> 293 * -14 + 1 * -668 + 4772] = w, f += -207 * 39 + -6333 + 14410, f + (-8128 * 1 + 583 * 12 + 142 * 8) > m) break;
      }
      return ie[f >> -13 * 579 + 4425 * -1 + 11954] = 0, f - y;
    }
    function Ie(I) {
      for (var f = 8897 + 7 * -1271, m = 4497 * 2 + 6671 + -15665; m < I.length; ++m) {
        var y = I.charCodeAt(m);
        -2531 * -3 + 2775 * -24 + -38101 * -3 <= y && 2 * -52462 + -68866 + 623 * 371 >= y && ++m, f += -98 + 5966 * -1 + 6068;
      }
      return f;
    }
    var U, fe, Ce, Oe, ft, ie, Ze, De, xt;
    function Fe(I) {
      U = I, t.HEAP8 = fe = new Int8Array(I), t.HEAP16 = Oe = new Int16Array(I), t.HEAP32 = ie = new Int32Array(I), t.HEAPU8 = Ce = new Uint8Array(I), t.HEAPU16 = ft = new Uint16Array(I), t.HEAPU32 = Ze = new Uint32Array(I), t.HEAPF32 = De = new Float32Array(I), t.HEAPF64 = xt = new Float64Array(I);
    }
    var pe = t.INITIAL_MEMORY || -4 * 6466003 + -3460467 + 46101695, Ve = {};
    Ve.initial = pe / (99593 + 34057 * -1), Ve.maximum = 32768, t.wasmMemory ? C = t.wasmMemory : C = new WebAssembly.Memory(Ve), C && (U = C.buffer), pe = U.byteLength, Fe(U);
    var Ye = [], me = [], Te = [], Xe = [];
    function m0() {
      var I = t.preRun.shift();
      Ye.unshift(I);
    }
    var Ue = -8872 * -1 + -1 * -8767 + -31 * 569, Wt = null;
    t.preloadedImages = {}, t.preloadedAudios = {};
    function rt(I) {
      throw t.onAbort && t.onAbort(I), h(I), p = !(2 * 3613 + -2772 + -4454), I = new WebAssembly.RuntimeError("abort(" + I + "). Build with -s ASSERTIONS=1 for more info."), n(I), I;
    }
    function Ut(I) {
      var f = Ct;
      return String.prototype.startsWith ? f.startsWith(I) : 1865 * 1 + 8122 + -9987 * 1 === f.indexOf(I);
    }
    function vt() {
      return Ut("data:application/octet-stream;base64,");
    }
    var Ct = "sam.wasm";
    if (!vt()) {
      var zt = Ct;
      Ct = t.locateFile ? t.locateFile(zt, l) : l + zt;
    }
    function ht() {
      try {
        if (u) return new Uint8Array(u);
        if (g) return g(Ct);
        throw "both async and sync fetching of the wasm failed";
      } catch (I) {
        rt(I);
      }
    }
    function dg() {
      var I = {};
      return I.credentials = "same-origin", u || !s && !c || typeof fetch != "function" || Ut("file://") ? Promise.resolve().then(ht) : fetch(Ct, I).then(function(f) {
        if (!f.ok) throw "failed to load wasm binary file at '" + Ct + "'";
        return f.arrayBuffer();
      }).catch(function() {
        return ht();
      });
    }
    function Fn(I) {
      for (; -4239 + 6722 * -1 + 10961 < I.length; ) {
        var f = I.shift();
        if (typeof f == "function") f(t);
        else {
          var m = f.Ba;
          typeof m == "number" ? void (-14835 + 2967 * 5) === f.ta ? Ir("v", m)() : Ir("vi", m)(f.ta) : m(void (4973 * -2 + 460 * -14 + 2731 * 6) === f.ta ? null : f.ta);
        }
      }
    }
    function Ir(I, f) {
      var m = [];
      return function() {
        m.length = arguments.length;
        for (var y = -6713 + 218 * -1 + 6931; y < arguments.length; y++) m[y] = arguments[y];
        return m && m.length ? t["dynCall_" + I].apply(null, [f].concat(m)) : t["dynCall_" + I].call(null, f);
      };
    }
    function ug(I) {
      this.da = I - (5 * 905 + 7 * 1012 + 1 * -11593), this.Oa = function(f) {
        ie[this.da + (1 * 8420 + 1029 * -1 + 321 * -23) >> 16524 + -1 * 16522] = f;
      }, this.La = function(f) {
        ie[this.da + 0 >> 3 * -1689 + 2657 * -1 + 7726 * 1] = f;
      }, this.Ma = function() {
        ie[this.da + (-507 + -19 * 417 + 8434) >> 2] = 1 * -8438 + -7883 * -1 + 555;
      }, this.Ka = function() {
        fe[this.da + (1 * 6087 + -5298 + -777) >> -482 + 1 * -8665 + -3 * -3049] = -3 * -2411 + 9228 + -1829 * 9;
      }, this.Na = function() {
        fe[this.da + (2546 + -2533 * 1) >> 1747 + -1747 * 1] = 141 * 41 + -6452 + 671;
      }, this.Fa = function(f, m) {
        this.Oa(f), this.La(m), this.Ma(), this.Ka(), this.Na();
      };
    }
    function Yn() {
      return -3662 + 2893 * 3 + 5017 * -1 < Yn.xa;
    }
    function fr(I) {
      switch (I) {
        case 1 * 2287 + 8047 + -10333:
          return -9404 + -4986 * 2 + 19376;
        case -293 * -1 + -40 * 76 + 2749:
          return -13 * -51 + 17 * -288 + 73 * 58;
        case -1 * -9792 + -7953 + 5 * -367:
          return 2;
        case 1 * -809 + -1 * 2711 + 3528:
          return -4700 + -74 * -99 + 1 * -2623;
        default:
          throw new TypeError("Unknown type size: " + I);
      }
    }
    var ui = void (-4460 + -2 * 3911 + 12282);
    function Me(I) {
      for (var f = ""; Ce[I]; ) f += ui[Ce[I++]];
      return f;
    }
    var b0 = {}, qt = {}, Xn = {};
    function Cr(I) {
      if (void (-163 * 57 + -1 * 9562 + 18853) === I) return "_unknown";
      I = I.replace(/[^a-zA-Z0-9_]/g, "$");
      var f = I.charCodeAt(-7303 * 1 + 32 * 23 + -3 * -2189);
      return -5053 + 9579 * -1 + -1468 * -10 <= f && 54 + 7901 * -1 + 7904 >= f ? "_" + I : I;
    }
    function hr(I, f) {
      return I = Cr(I), new Function("body", "return function " + I + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(f);
    }
    function pr(I) {
      var f = Error, m = hr(I, function(y) {
        this.name = I, this.message = y, y = Error(y).stack, void (-2 * -1047 + 6705 + -8799) !== y && (this.stack = this.toString() + `
` + y.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return m.prototype = Object.create(f.prototype), m.prototype.constructor = m, m.prototype.toString = function() {
        return void (-433 + 765 * 3 + -1862) === this.message ? this.name : this.name + ": " + this.message;
      }, m;
    }
    var A0 = void 0;
    function J(I) {
      throw new A0(I);
    }
    var li = void (-2178 + 5 * 874 + -2192);
    function Mn(I) {
      throw new li(I);
    }
    function y0(I, f, m) {
      function y(G) {
        G = m(G), G.length !== I.length && Mn("Mismatched type converter count");
        for (var K = -1 * -7171 + 312 + -7 * 1069; K < I.length; ++K) Ht(I[K], G[K]);
      }
      I.forEach(function(G) {
        Xn[G] = f;
      });
      var S = Array(f.length), w = [], H = 1272 * -1 + -8290 * 1 + -14 * -683;
      f.forEach(function(G, K) {
        qt.hasOwnProperty(G) ? S[K] = qt[G] : (w.push(G), b0.hasOwnProperty(G) || (b0[G] = []), b0[G].push(function() {
          S[K] = qt[G], ++H, H === w.length && y(S);
        }));
      }), w.length === 0 && y(S);
    }
    function Ht(I, f, m) {
      if (m = m || {}, !("argPackAdvance" in f)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var y = f.name;
      if (I || J('type "' + y + '" must have a positive integer typeid pointer'), qt.hasOwnProperty(I)) {
        if (m.Ea) return;
        J("Cannot register type '" + y + "' twice");
      }
      qt[I] = f, delete Xn[I], b0.hasOwnProperty(I) && (f = b0[I], delete b0[I], f.forEach(function(S) {
        S();
      }));
    }
    function lg(I) {
      var f = {};
      return f.count = I.count, f.oa = I.oa, f.pa = I.pa, f.da = I.da, f.fa = I.fa, f.ga = I.ga, f.ha = I.ha, f;
    }
    function mr(I) {
      J(I.A.fa.ea.name + " instance already deleted");
    }
    var br = !(1418 + 27 * 118 + -4603);
    function Ii() {
    }
    function fi(I) {
      --I.count.value, -61 * 85 + 2947 + 2238 === I.count.value && (I.ga ? I.ha.na(I.ga) : I.fa.ea.na(I.da));
    }
    function en(I) {
      return typeof FinalizationGroup > "u" ? (en = function(f) {
        return f;
      }, I) : (br = new FinalizationGroup(function(f) {
        for (var m = f.next(); !m.done; m = f.next()) m = m.value, m.da ? fi(m) : console.warn("object already deleted: " + m.da);
      }), en = function(f) {
        return br.register(f, f.A, f.A), f;
      }, Ii = function(f) {
        br.unregister(f.A);
      }, en(I));
    }
    var tn = void (-982 * -7 + 499 + -73 * 101), nn = [];
    function Ar() {
      for (; nn.length; ) {
        var I = nn.pop();
        I.A.oa = !1, I.delete();
      }
    }
    function Dt() {
    }
    var Ci = {};
    function Ig(I, f) {
      var m = t;
      if (void (-169 * 43 + 1 * 7019 + 248) === m[I].ja) {
        var y = m[I];
        m[I] = function() {
          return m[I].ja.hasOwnProperty(arguments.length) || J("Function '" + f + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + m[I].ja + ")!"), m[I].ja[arguments.length].apply(this, arguments);
        }, m[I].ja = [], m[I].ja[y.ya] = y;
      }
    }
    function hi(I, f, m) {
      t.hasOwnProperty(I) ? ((void (5930 * -1 + 5 * -15 + 6005) === m || void (-19 * -165 + -651 + -18 * 138) !== t[I].ja && void (-1 * -6053 + 4962 + -11015) !== t[I].ja[m]) && J("Cannot register public name '" + I + "' twice"), Ig(I, I), t.hasOwnProperty(m) && J("Cannot register multiple overloads of a function with the same number of arguments (" + m + ")!"), t[I].ja[m] = f) : (t[I] = f, void (879 * 9 + -9699 + 1788 * 1) !== m && (t[I].Ra = m));
    }
    function fg(I, f, m, y, S, w, H, G) {
      this.name = I, this.constructor = f, this.ma = m, this.na = y, this.ia = S, this.Ca = w, this.qa = H, this.Aa = G;
    }
    function jn(I, f, m) {
      for (; f !== m; ) f.qa || J("Expected null or instance of " + m.name + ", got an instance of " + f.name), I = f.qa(I), f = f.ia;
      return I;
    }
    function Cg(I, f) {
      return f === null ? (this.ua && J("null is not a valid " + this.name), 1643 + 1643 * -1) : (f.A || J('Cannot pass "' + v0(f) + '" as a ' + this.name), f.A.da || J("Cannot pass deleted object as a pointer of type " + this.name), jn(f.A.da, f.A.fa.ea, this.ea));
    }
    function hg(I, f) {
      if (f === null) {
        if (this.ua && J("null is not a valid " + this.name), this.sa) {
          var m = this.Ha();
          return I !== null && I.push(this.na, m), m;
        }
        return -2 * 1799 + -2 * 1006 + -6 * -935;
      }
      if (f.A || J('Cannot pass "' + v0(f) + '" as a ' + this.name), f.A.da || J("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && f.A.fa.ra && J("Cannot convert argument of type " + (f.A.ha ? f.A.ha.name : f.A.fa.name) + " to parameter type " + this.name), m = jn(f.A.da, f.A.fa.ea, this.ea), this.sa) switch (void (619 * -11 + -3621 + 10430) === f.A.ga && J("Passing raw pointer to smart pointer is illegal"), this.Pa) {
        case 9959 * -1 + 6967 + -1496 * -2:
          f.A.ha === this ? m = f.A.ga : J("Cannot convert argument of type " + (f.A.ha ? f.A.ha.name : f.A.fa.name) + " to parameter type " + this.name);
          break;
        case 3 * -262 + -2473 * 4 + 1 * 10679:
          m = f.A.ga;
          break;
        case 4550 * 1 + 4472 + -10 * 902:
          if (f.A.ha === this) m = f.A.ga;
          else {
            var y = f.clone();
            m = this.Ia(m, W0(function() {
              y.delete();
            })), I !== null && I.push(this.na, m);
          }
          break;
        default:
          J("Unsupporting sharing policy");
      }
      return m;
    }
    function pg(I, f) {
      return f === null ? (this.ua && J("null is not a valid " + this.name), -1 * -7457 + 256 * 28 + -14625) : (f.A || J('Cannot pass "' + v0(f) + '" as a ' + this.name), f.A.da || J("Cannot pass deleted object as a pointer of type " + this.name), f.A.fa.ra && J("Cannot convert argument of type " + f.A.fa.name + " to parameter type " + this.name), jn(f.A.da, f.A.fa.ea, this.ea));
    }
    function Jn(I) {
      return this.fromWireType(Ze[I >> -8209 + -7757 * -1 + 454]);
    }
    function pi(I, f, m) {
      return f === m ? I : m.ia === void 0 ? null : (I = pi(I, f, m.ia), I === null ? null : m.Aa(I));
    }
    var xn = {};
    function mg(I, f) {
      for (void (6773 + -6773 * 1) === f && J("ptr should not be undefined"); I.ia; ) f = I.qa(f), I = I.ia;
      return xn[f];
    }
    function _n(I, f) {
      f.fa && f.da || Mn("makeClassHandle requires ptr and ptrType"), !!f.ha != !!f.ga && Mn("Both smartPtrType and smartPtr must be specified");
      var m = {};
      m.value = 1, f.count = m;
      var y = {};
      y.value = f;
      var S = {};
      return S.A = y, en(Object.create(I, S));
    }
    function Ot(I, f, m, y) {
      this.name = I, this.ea = f, this.ua = m, this.ra = y, this.sa = !(-1 * -762 + -7225 + -6464 * -1), this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void (-13 * 93 + 8199 * 1 + -6990 * 1), void (-4536 + 4445 * -1 + 8981) !== f.ia ? this.toWireType = hg : (this.toWireType = y ? Cg : pg, this.ka = null);
    }
    function mi(I, f, m) {
      t.hasOwnProperty(I) || Mn("Replacing nonexistant public symbol"), void (-140 + -140 * -1) !== t[I].ja && m !== void 0 ? t[I].ja[m] = f : (t[I] = f, t[I].ya = m);
    }
    function Ft(I, f) {
      I = Me(I);
      var m = Ir(I, f);
      return typeof m != "function" && J("unknown function pointer with signature " + I + ": " + f), m;
    }
    var bi = void (1 * 1313 + -2325 + 1012);
    function Ai(I) {
      I = Pi(I);
      var f = Me(I);
      return Zt(I), f;
    }
    function rn(I, f) {
      function m(w) {
        S[w] || qt[w] || (Xn[w] ? Xn[w].forEach(m) : (y.push(w), S[w] = !0));
      }
      var y = [], S = {};
      throw f.forEach(m), new bi(I + ": " + y.map(Ai).join([", "]));
    }
    function yi(I, f) {
      for (var m = [], y = -1 * 4432 + -8445 * 1 + 12877; y < I; y++) m.push(ie[(f >> -1 * 369 + 5 * -1919 + 9966) + y]);
      return m;
    }
    function Qn(I) {
      for (; I.length; ) {
        var f = I.pop();
        I.pop()(f);
      }
    }
    function Wi(I, f, m) {
      return I instanceof Object || J(m + ' with invalid "this": ' + I), I instanceof f.ea.constructor || J(m + ' incompatible with "this" of type ' + I.constructor.name), I.A.da || J("cannot call emscripten binding method " + m + " on deleted object"), jn(I.A.da, I.A.fa.ea, f.ea);
    }
    var vi = {};
    vi.value = void (-1 * -2526 + -8101 + 5575);
    var Si = {};
    Si.value = null;
    var wi = {};
    wi.value = !(-5519 * -1 + 9951 + -15470);
    var Bi = {};
    Bi.value = !(-4540 * 1 + 9587 + -5046);
    var yr = [], ot = [{}, vi, Si, wi, Bi];
    function Wr(I) {
      -7796 * 1 + 8819 * 1 + -1019 < I && -5 * -1433 + 5099 + -12264 === --ot[I].Ja && (ot[I] = void (-19077 + 6359 * 3), yr.push(I));
    }
    function W0(I) {
      switch (I) {
        case void (1493 * 2 + 238 + -1 * 3224):
          return 15022 + -15021 * 1;
        case null:
          return 18 * -135 + 6349 + -1 * 3917;
        case !(8040 + -3 * 1101 + -3 * 1579):
          return 3;
        case !(-3743 * -2 + 6602 + -1 * 14087):
          return 1 * 7152 + -2 * -4649 + 8223 * -2;
        default:
          var f = yr.length ? yr.pop() : ot.length, m = {};
          return m.Ja = 1, m.value = I, ot[f] = m, f;
      }
    }
    function v0(I) {
      if (I === null) return "null";
      var f = typeof I;
      return f === "object" || f === "array" || f === "function" ? I.toString() : "" + I;
    }
    function bg(I, f) {
      switch (f) {
        case -2449 + 1 * -9363 + -3 * -3938:
          return function(m) {
            return this.fromWireType(De[m >> 2 * -4007 + -1847 * -5 + 23 * -53]);
          };
        case 137 * 55 + -4 * -2417 + 1075 * -16:
          return function(m) {
            return this.fromWireType(xt[m >> 392 + -1 * 389]);
          };
        default:
          throw new TypeError("Unknown float type: " + I);
      }
    }
    function Ag(I) {
      var f = Function;
      if (!(f instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof f + " which is not a function");
      var m = hr(f.name || "unknownFunctionName", function() {
      });
      return m.prototype = f.prototype, m = new m(), I = f.apply(m, I), I instanceof Object ? I : m;
    }
    function yg(I, f, m) {
      switch (f) {
        case 101 * 11 + -3327 + 1 * 2216:
          return m ? function(y) {
            return fe[y];
          } : function(y) {
            return Ce[y];
          };
        case -6301 + 3667 * 2 + 516 * -2:
          return m ? function(y) {
            return Oe[y >> -14 * -386 + -5 * 619 + -2308];
          } : function(y) {
            return ft[y >> 2 * 4592 + -6119 * -1 + -15302];
          };
        case -10 * 97 + -29 * -344 + -9004 * 1:
          return m ? function(y) {
            return ie[y >> 1 * 3319 + 158 * -19 + -315 * 1];
          } : function(y) {
            return Ze[y >> 2];
          };
        default:
          throw new TypeError("Unknown integer type: " + I);
      }
    }
    function vr(I) {
      return I || J("Cannot use deleted val. handle = " + I), ot[I].value;
    }
    function Gi(I, f) {
      var m = qt[I];
      return void (-1405 + 1405 * 1) === m && J(f + " has unknown type " + Ai(I)), m;
    }
    var Wg = {}, ki = {};
    function Hi() {
      if (!Sr) {
        var I = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: a || "./this.program" }, f;
        for (f in ki) I[f] = ki[f];
        var m = [];
        for (f in I) m.push(f + "=" + I[f]);
        Sr = m;
      }
      return Sr;
    }
    var Sr, Oi = [];
    function Zi(I) {
      var f = {}, m;
      for (m in I) (function(y) {
        var S = I[y];
        f[y] = typeof S == "function" ? function() {
          Oi.push(y);
          try {
            return S.apply(null, arguments);
          } finally {
            if (p) return;
            var w = Oi.pop();
            A(w === y);
          }
        } : S;
      })(m);
      return f;
    }
    for (var Ki = Array(-1 * -4083 + 4292 + 353 * -23), Un = 86 * -22 + 3305 + -157 * 9; -1949 * -1 + -8897 + 7204 > Un; ++Un) Ki[Un] = String.fromCharCode(Un);
    ui = Ki, A0 = t.BindingError = pr("BindingError"), li = t.InternalError = pr("InternalError"), Dt.prototype.isAliasOf = function(I) {
      if (!(this instanceof Dt && I instanceof Dt)) return !(-9870 + 1 * 1078 + 8793);
      var f = this.A.fa.ea, m = this.A.da, y = I.A.fa.ea;
      for (I = I.A.da; f.ia; ) m = f.qa(m), f = f.ia;
      for (; y.ia; ) I = y.qa(I), y = y.ia;
      return f === y && m === I;
    }, Dt.prototype.clone = function() {
      if (this.A.da || mr(this), this.A.pa) return this.A.count.value += -8389 * 1 + -8353 * -1 + 37, this;
      var I = en(Object.create(Object.getPrototypeOf(this), { A: { value: lg(this.A) } }));
      return I.A.count.value += 1 * -1036 + -1 * 130 + -3 * -389, I.A.oa = !(6311 * 1 + 34 * -209 + -4 * -199), I;
    }, Dt.prototype.delete = function() {
      this.A.da || mr(this), this.A.oa && !this.A.pa && J("Object already scheduled for deletion"), Ii(this), fi(this.A), this.A.pa || (this.A.ga = void (7055 + 1 * -9926 + -9 * -319), this.A.da = void (12837 + 1 * -12837));
    }, Dt.prototype.isDeleted = function() {
      return !this.A.da;
    }, Dt.prototype.deleteLater = function() {
      return this.A.da || mr(this), this.A.oa && !this.A.pa && J("Object already scheduled for deletion"), nn.push(this), 2456 + 2 * -2174 + 1893 === nn.length && tn && tn(Ar), this.A.oa = !(6026 + 392 * 2 + 30 * -227), this;
    }, Ot.prototype.Da = function(I) {
      return this.wa && (I = this.wa(I)), I;
    }, Ot.prototype.va = function(I) {
      this.na && this.na(I);
    }, Ot.prototype.argPackAdvance = -4119 * -1 + 454 * 11 + -15 * 607, Ot.prototype.readValueFromPointer = Jn, Ot.prototype.deleteObject = function(I) {
      I !== null && I.delete();
    }, Ot.prototype.fromWireType = function(I) {
      function f() {
        return this.sa ? _n(this.ea.ma, { fa: this.Ga, da: m, ha: this, ga: I }) : _n(this.ea.ma, { fa: this, da: I });
      }
      var m = this.Da(I);
      if (!m) return this.va(I), null;
      var y = mg(this.ea, m);
      if (void (-2027 + 5 * -1409 + 9072) !== y)
        return 4 * -628 + -8859 + 11371 === y.A.count.value ? (y.A.da = m, y.A.ga = I, y.clone()) : (y = y.clone(), this.va(I), y);
      if (y = this.ea.Ca(m), y = Ci[y], !y) return f.call(this);
      y = this.ra ? y.za : y.pointerType;
      var S = pi(m, this.ea, y.ea);
      return S === null ? f.call(this) : this.sa ? _n(y.ea.ma, { fa: y, da: S, ha: this, ga: I }) : _n(y.ea.ma, { fa: y, da: S });
    }, t.getInheritedInstanceCount = function() {
      return Object.keys(xn).length;
    }, t.getLiveInheritedInstances = function() {
      var I = [], f;
      for (f in xn) xn.hasOwnProperty(f) && I.push(xn[f]);
      return I;
    }, t.flushPendingDeletes = Ar, t.setDelayFunction = function(I) {
      tn = I, nn.length && tn && tn(Ar);
    }, bi = t.UnboundTypeError = pr("UnboundTypeError"), t.count_emval_handles = function() {
      for (var I = 0, f = 7835 + -408 * 3 + -6606; f < ot.length; ++f) void (6256 + -1 * 6256) !== ot[f] && ++I;
      return I;
    }, t.get_first_emval = function() {
      for (var I = 1116 + -101 * 11; I < ot.length; ++I) if (void (538 * 12 + 4153 + -10609) !== ot[I]) return ot[I];
      return null;
    }, me.push({ Ba: function() {
      Ri();
    } });
    var vg = { z: function(I) {
      return zn(I + (177 * -23 + -1205 * -1 + 2882)) + (15 * -491 + -7449 + 14830 * 1);
    }, u: function(I, f, m) {
      throw new ug(I).Fa(f, m), "uncaught_exception" in Yn ? Yn.xa++ : Yn.xa = -1393 + -697 * -2, I;
    }, w: function(I, f, m, y, S) {
      var w = fr(m);
      f = Me(f), Ht(I, { name: f, fromWireType: function(H) {
        return !!H;
      }, toWireType: function(H, G) {
        return G ? y : S;
      }, argPackAdvance: 8, readValueFromPointer: function(H) {
        if (-20 * -277 + 5317 + -10856 === m) var G = fe;
        else if (m === 2) G = Oe;
        else if (-270 + 5 * -452 + 2534 === m) G = ie;
        else throw new TypeError("Unknown boolean type size: " + f);
        return this.fromWireType(G[H >> w]);
      }, ka: null });
    }, h: function(I, f, m, y, S, w, H, G, K, R, P, V, $) {
      P = Me(P), w = Ft(S, w), G && (G = Ft(H, G)), R && (R = Ft(K, R)), $ = Ft(V, $);
      var be = Cr(P);
      hi(be, function() {
        rn("Cannot construct " + P + " due to unbound types", [y]);
      }), y0([I, f, m], y ? [y] : [], function(T) {
        if (T = T[13505 + 2701 * -5], y) var St = T.ea, Ee = St.ma;
        else Ee = Dt.prototype;
        T = hr(be, function() {
          if (Object.getPrototypeOf(this) !== S0) throw new A0("Use 'new' to construct " + P);
          if (void (5705 + 7 * -815) === w0.la) throw new A0(P + " has no accessible constructor");
          var Ti = w0.la[arguments.length];
          if (void (-339 * 7 + -15 * -642 + -59 * 123) === Ti) throw new A0("Tried to invoke ctor of " + P + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(w0.la).toString() + ") parameters instead!");
          return Ti.apply(this, arguments);
        });
        var ze = {};
        ze.value = T;
        var $t = {};
        $t.constructor = ze;
        var S0 = Object.create(Ee, $t);
        T.prototype = S0;
        var w0 = new fg(P, T, S0, $, St, w, G, R);
        St = new Ot(P, w0, !(-4231 * 2 + -1 * 689 + -9151 * -1), !(5930 + -3 * -3086 + 15187 * -1)), Ee = new Ot(P + "*", w0, !(1960 + 1555 * 1 + 251 * -14), !1);
        var Vi = new Ot(P + " const*", w0, !(-1 * -8225 + -133 * -17 + -10485), !(-133 * 58 + 1744 + 1 * 5970)), Br = {};
        return Br.pointerType = Ee, Br.za = Vi, Ci[I] = Br, mi(be, T), [St, Ee, Vi];
      });
    }, g: function(I, f, m, y, S, w) {
      A(212 * -13 + 6976 + -844 * 5 < f);
      var H = yi(f, m);
      S = Ft(y, S);
      var G = [w], K = [];
      y0([], [I], function(R) {
        R = R[5477 + -111 * 87 + 4180];
        var P = "constructor " + R.name;
        if (void (3 * -280 + -1 * -1362 + -522) === R.ea.la && (R.ea.la = []), void (-9305 + 2231 * 3 + 2612 * 1) !== R.ea.la[f - (-4 * -2153 + -5147 + -3464)]) throw new A0("Cannot register multiple constructors with identical number of parameters (" + (f - (-6089 + -6 * -1015)) + ") for class '" + R.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return R.ea.la[f - (39 * 163 + 740 * 4 + 274 * -34)] = function() {
          rn("Cannot construct " + R.name + " due to unbound types", H);
        }, y0([], H, function(V) {
          return R.ea.la[f - (-964 + -5 * -193)] = function() {
            arguments.length !== f - (-74 * -90 + 6029 * -1 + -6 * 105) && J(P + " called with " + arguments.length + " arguments, expected " + (f - (3766 + -37 * 19 + -1 * 3062))), K.length = -7707 + 1 * -4867 + 1 * 12574, G.length = f;
            for (var $ = -1 * 2234 + -8 * 3 + 2259; $ < f; ++$) G[$] = V[$].toWireType(K, arguments[$ - (-12092 + 139 * 87)]);
            return $ = S.apply(null, G), Qn(K), V[9965 + 1 * 8963 + -18928].fromWireType($);
          }, [];
        }), [];
      });
    }, b: function(I, f, m, y, S, w, H, G, K, R) {
      f = Me(f), S = Ft(y, S), y0([], [I], function(P) {
        P = P[-9173 * -1 + 7971 + 1 * -17144];
        var V = P.name + "." + f, $ = { get: function() {
          rn("Cannot access " + V + " due to unbound types", [m, H]);
        }, enumerable: !(8753 * 1 + 689 * 12 + -17021), configurable: !(-3547 * -2 + -1 * 8036 + 942) };
        return K ? $.set = function() {
          rn("Cannot access " + V + " due to unbound types", [m, H]);
        } : $.set = function() {
          J(V + " is a read-only property");
        }, Object.defineProperty(P.ea.ma, f, $), y0([], K ? [m, H] : [m], function(be) {
          var T = be[0], St = { get: function() {
            var ze = Wi(this, P, V + " getter");
            return T.fromWireType(S(w, ze));
          }, enumerable: !(953 * 3 + -9597 + -6 * -1123) };
          if (K) {
            K = Ft(G, K);
            var Ee = be[-1 * -2995 + -8077 + 5083];
            St.set = function(ze) {
              var $t = Wi(this, P, V + " setter"), S0 = [];
              K(R, $t, Ee.toWireType(S0, ze)), Qn(S0);
            };
          }
          return Object.defineProperty(P.ea.ma, f, St), [];
        }), [];
      });
    }, v: function(I, f) {
      f = Me(f), Ht(I, { name: f, fromWireType: function(m) {
        var y = ot[m].value;
        return Wr(m), y;
      }, toWireType: function(m, y) {
        return W0(y);
      }, argPackAdvance: 8, readValueFromPointer: Jn, ka: null });
    }, m: function(I, f, m) {
      m = fr(m), f = Me(f), Ht(I, { name: f, fromWireType: function(y) {
        return y;
      }, toWireType: function(y, S) {
        if (typeof S != "number" && typeof S != "boolean") throw new TypeError('Cannot convert "' + v0(S) + '" to ' + this.name);
        return S;
      }, argPackAdvance: 8, readValueFromPointer: bg(f, m), ka: null });
    }, c: function(I, f, m, y, S, w) {
      var H = yi(f, m);
      I = Me(I), S = Ft(y, S), hi(I, function() {
        rn("Cannot call " + I + " due to unbound types", H);
      }, f - (299 * -32 + 1 * 7010 + 2559)), y0([], H, function(G) {
        var K = I, R = I;
        G = [G[-2684 * -1 + -1775 + -909], null].concat(G.slice(959 + -10 * -199 + -2948 * 1));
        var P = S, V = G.length;
        2 > V && J("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var $ = G[-1 * -2404 + 1 * 1448 + 3851 * -1] !== null && !(2195 + -1 * 9485 + -1 * -7291), be = !(-7694 + 6 * -331 + 9681), T = -3 * 818 + -7176 + 9631; T < G.length; ++T) if (G[T] !== null && void (48 * 113 + 822 * -1 + -354 * 13) === G[T].ka) {
          be = !(4663 + 2 * -2918 + -3 * -391);
          break;
        }
        var St = G[1429 * 4 + 233 * 34 + -4546 * 3].name !== "void", Ee = "", ze = "";
        for (T = 0; T < V - (328 * -19 + 1 * 9301 + -1 * 3067); ++T) Ee += (-59 * 97 + -4 * -1468 + -149 !== T ? ", " : "") + "arg" + T, ze += (8512 + 1 * -2377 + 2045 * -3 !== T ? ", " : "") + "arg" + T + "Wired";
        R = "return function " + Cr(R) + "(" + Ee + `) {
if (arguments.length !== ` + (V - (827 * -7 + 2993 + 2798)) + `) {
throwBindingError('function ` + R + " called with ' + arguments.length + ' arguments, expected " + (V - (4591 + -2836 * -1 + -45 * 165)) + ` args!');
}
`, be && (R += `var destructors = [];
`);
        var $t = be ? "destructors" : "null";
        for (Ee = "throwBindingError invoker fn runDestructors retType classParam".split(" "), P = [J, P, w, Qn, G[-2553 * 1 + 2116 + 23 * 19], G[1 * 5579 + 203 * 31 + -11871]], $ && (R += "var thisWired = classParam.toWireType(" + $t + `, this);
`), T = -21 + -18 * -4 + -51; T < V - (-227 * -1 + 8964 + -3 * 3063); ++T) R += "var arg" + T + "Wired = argType" + T + ".toWireType(" + $t + ", arg" + T + "); // " + G[T + (-201 * 41 + -19 * 41 + -4511 * -2)].name + `
`, Ee.push("argType" + T), P.push(G[T + (1865 * 2 + -6679 + 1 * 2951)]);
        if ($ && (ze = "thisWired" + (15 * 631 + 4 * 1844 + -1 * 16841 < ze.length ? ", " : "") + ze), R += (St ? "var rv = " : "") + "invoker(fn" + (7175 + -2359 * 1 + 16 * -301 < ze.length ? ", " : "") + ze + `);
`, be) R += `runDestructors(destructors);
`;
        else
          for (T = $ ? 25 * 235 + -1574 * 1 + -2 * 2150 : -51 * -58 + 381 * -1 + -2575 * 1; T < G.length; ++T) V = 1 * 76 + -470 * -3 + -1485 === T ? "thisWired" : "arg" + (T - 2) + "Wired", G[T].ka !== null && (R += V + "_dtor(" + V + "); // " + G[T].name + `
`, Ee.push(V + "_dtor"), P.push(G[T].ka));
        return St && (R += `var ret = retType.fromWireType(rv);
return ret;
`), Ee.push(R + `}
`), G = Ag(Ee).apply(null, P), mi(K, G, f - (2057 + 707 * -9 + -73 * -59)), [];
      });
    }, e: function(I, f, m, y, S) {
      function w(R) {
        return R;
      }
      f = Me(f), -(5553 + -86 * -53 + -10110) === S && (S = -5396801683 + 6219239291 + -315684517 * -11);
      var H = fr(m);
      if (-172 * -32 + 2439 + -7943 === y) {
        var G = 32 - 8 * m;
        w = function(R) {
          return R << G >>> G;
        };
      }
      var K = -(-182 + -6049 * 1 + 38 * 164) != f.indexOf("unsigned");
      Ht(I, { name: f, fromWireType: w, toWireType: function(R, P) {
        if (typeof P != "number" && typeof P != "boolean") throw new TypeError('Cannot convert "' + v0(P) + '" to ' + this.name);
        if (P < y || P > S) throw new TypeError('Passing a number "' + v0(P) + '" from JS side to C/C++ side to an argument of type "' + f + '", which is outside the valid range [' + y + ", " + S + "]!");
        return K ? P >>> 766 * -9 + 3 * -2557 + 14565 : P | -7618 + 1895 * 3 + -1 * -1933;
      }, argPackAdvance: 8, readValueFromPointer: yg(f, H, -3159 + -3 * -1053 !== y), ka: null });
    }, d: function(I, f, m) {
      function y(G) {
        G >>= 2;
        var K = Ze;
        return new S(U, K[G + (612 + -2 * -3987 + -8585)], K[G]);
      }
      var S = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][f];
      m = Me(m);
      var w = {};
      w.name = m, w.fromWireType = y, w.argPackAdvance = 8, w.readValueFromPointer = y;
      var H = {};
      H.Ea = !(9293 + 1 * -9293), Ht(I, w, H);
    }, n: function(I, f) {
      f = Me(f);
      var m = f === "std::string";
      Ht(I, { name: f, fromWireType: function(y) {
        var S = Ze[y >> 2];
        if (m) for (var w = y + (6079 + 3 * -1033 + 3 * -992), H = -2578 + -82 * -93 + 631 * -8; H <= S; ++H) {
          var G = y + 4 + H;
          if (H == S || 3493 + -5 * 1409 + 3552 == Ce[G]) {
            if (w) {
              var K = w, R = Ce, P = K + (G - w);
              for (w = K; R[w] && !(w >= P); ) ++w;
              if (-4410 * -2 + -9876 + -134 * -8 < w - K && R.subarray && d) K = d.decode(R.subarray(K, w));
              else {
                for (P = ""; K < w; ) {
                  var V = R[K++];
                  if (V & -6235 + -4 * -964 + 2507) {
                    var $ = R[K++] & 63;
                    if (2246 + -1 * 7599 + 5545 == (V & -1 * 5107 + -1 * -7285 + -1954)) P += String.fromCharCode((V & -3 * 35 + -3077 * 3 + -551 * -17) << 6 | $);
                    else {
                      var be = R[K++] & 63;
                      V = 20 * -473 + -2353 * 2 + 14390 == (V & -4032 + 2 * -1507 + -3643 * -2) ? (V & 393 * -25 + 4510 + -533 * -10) << -7801 + 5 * 1720 + -787 | $ << 6 | be : (V & 1913 + 1 * -1906) << 4030 * 1 + -6067 + 2055 | $ << 12 | be << 1624 + 1 * -5387 + 3769 | R[K++] & 63, -25523 + 11 * 11404 + -65 * 529 > V ? P += String.fromCharCode(V) : (V -= -158 * -14 + -84098 + 147422, P += String.fromCharCode(3705 + -1779 * -29 | V >> -1 * 7415 + -8006 + 15431, 1 * -38067 + -87521 + -5868 * -31 | V & 1023));
                    }
                  } else P += String.fromCharCode(V);
                }
                K = P;
              }
            } else K = "";
            if (void (920 + -5 * -1168 + -20 * 338) === T) var T = K;
            else T += String.fromCharCode(1 * 446 + -9910 + 7 * 1352), T += K;
            w = G + (191 * -1 + 7814 + 7622 * -1);
          }
        }
        else {
          for (T = Array(S), H = 277 * 1 + 2 * 1624 + -235 * 15; H < S; ++H) T[H] = String.fromCharCode(Ce[y + (-3181 * -2 + 1 * -8231 + -1873 * -1) + H]);
          T = T.join("");
        }
        return Zt(y), T;
      }, toWireType: function(y, S) {
        S instanceof ArrayBuffer && (S = new Uint8Array(S));
        var w = typeof S == "string";
        w || S instanceof Uint8Array || S instanceof Uint8ClampedArray || S instanceof Int8Array || J("Cannot pass non-string to std::string");
        var H = (m && w ? function() {
          for (var R = 7 * -517 + -4742 + 8361, P = 3608 + -4 * 902; P < S.length; ++P) {
            var V = S.charCodeAt(P);
            4 * 499 + -99257 * -1 + -45957 <= V && -67684 + -7 * -17861 >= V && (V = 65536 + ((V & 1 * 674 + -167 * -10 + -1321 * 1) << -18950 + -395 * -48) | S.charCodeAt(++P) & -9553 * -1 + 6537 * -1 + 1 * -1993), 1 * 5479 + 4374 * -1 + -978 >= V ? ++R : R = 7017 + 355 * -14 >= V ? R + (-531 * -11 + -3133 + 2706 * -1) : 20161 * -1 + -55191 + 140887 >= V ? R + (-4711 + 1 * -211 + 4925) : R + (-2 * -3634 + 5934 + -13198);
          }
          return R;
        } : function() {
          return S.length;
        })(), G = zn(4 + H + (-1563 + 10 * 325 + -1686));
        if (Ze[G >> 318 * -1 + -2102 * 3 + 3313 * 2] = H, m && w) W(S, G + (7735 + -3 * 1837 + -2220), H + (-6 * 229 + 7959 + 823 * -8));
        else if (w) for (w = -4257 + 24 * -62 + -1915 * -3; w < H; ++w) {
          var K = S.charCodeAt(w);
          -5652 + -2531 * -1 + -3376 * -1 < K && (Zt(G), J("String has UTF-16 code units that do not fit in 8 bits")), Ce[G + (-2260 + 566 * 4) + w] = K;
        }
        else
          for (w = 2833 * -3 + 6588 + 1911; w < H; ++w) Ce[G + (226 * -3 + 3 * -2745 + 8917) + w] = S[w];
        return y !== null && y.push(Zt, G), G;
      }, argPackAdvance: 8, readValueFromPointer: Jn, ka: function(y) {
        Zt(y);
      } });
    }, j: function(I, f, m) {
      if (m = Me(m), f === 2) var y = N, S = Y, w = X, H = function() {
        return ft;
      }, G = -6832 + 3 * 2371 + -280;
      else -11 * 887 + 5704 + -4057 * -1 === f && (y = Z, S = _, w = Ie, H = function() {
        return Ze;
      }, G = 7879 + -503 * -15 + -22 * 701);
      Ht(I, { name: m, fromWireType: function(K) {
        for (var R = Ze[K >> 1619 * 1 + 5408 + -7025], P = H(), V, $ = K + (551 + -1 * 4643 + 4096), be = 10282 + -106 * 97; be <= R; ++be) {
          var T = K + 4 + be * f;
          (be == R || 52 * 134 + -1 * -3351 + 10319 * -1 == P[T >> G]) && ($ = y($, T - $), void (-6348 + -12 * -529) === V ? V = $ : (V += "\0", V += $), $ = T + f);
        }
        return Zt(K), V;
      }, toWireType: function(K, R) {
        typeof R != "string" && J("Cannot pass non-string to C++ string type " + m);
        var P = w(R), V = zn(1 * 6505 + -91 * 11 + -5500 + P + f);
        return Ze[V >> 2] = P >> G, S(R, V + (4910 + -15 * -123 + -1 * 6751), P + f), K !== null && K.push(Zt, V), V;
      }, argPackAdvance: 8, readValueFromPointer: Jn, ka: function(K) {
        Zt(K);
      } });
    }, x: function(I, f) {
      f = Me(f);
      var m = {};
      m.Qa = !0, m.name = f, m.argPackAdvance = 0, m.fromWireType = function() {
      }, m.toWireType = function() {
      }, Ht(I, m);
    }, k: function(I, f, m) {
      I = vr(I), f = Gi(f, "emval::as");
      var y = [], S = W0(y);
      return ie[m >> -7364 * 1 + 4499 + 2867 * 1] = S, f.toWireType(y, I);
    }, i: Wr, l: function(I, f) {
      return I = vr(I), f = vr(f), W0(I[f]);
    }, p: function(I) {
      var f = Wg[I];
      return W0(void (668 * 1 + -1371 * -5 + 1 * -7523) === f ? Me(I) : f);
    }, o: function(I) {
      Qn(ot[I].value), Wr(I);
    }, y: function(I, f) {
      return I = Gi(I, "_emval_take_value"), I = I.readValueFromPointer(f), W0(I);
    }, f: function() {
      rt();
    }, q: function(I, f, m) {
      Ce.copyWithin(I, f, f + m);
    }, r: function(I) {
      I >>>= 86 * -30 + -1 * -3390 + -810;
      var f = Ce.length;
      if (6032940966 + -1942728659 * 2 < I) return !(-3454 + -1 * -3455);
      for (var m = -16 * 389 + 6886 * -1 + 13111; 4 >= m; m *= 3628 + 2 * -1813) {
        var y = f * (1 + 0.2 / m);
        y = Math.min(y, I + (200060689 + -2 * 87360311 + -69 * -1091641)), y = Math.max(32472532 + 9220117 * -2 + 1372459 * 2, I, y), 0 < y % (-3 * 15354 + -1 * 79589 + 191187) && (y += 593 * -202 + 81181 * 1 + 104141 * 1 - y % 65536);
        e: {
          try {
            C.grow(Math.min(-146140196 + 2 * -3255503 + 697 * 3300050, y) - U.byteLength + (213 * -601 + -78581 + 1 * 272129) >>> 1123 * 7 + 2032 + -17 * 581), Fe(C.buffer);
            var S = 8685 + 18 * -531 + 874;
            break e;
          } catch {
          }
          S = void (47 * -11 + 3723 + 1603 * -2);
        }
        if (S) return !(-3217 * 2 + 3 * 1998 + 8 * 55);
      }
      return !(-1 * 4127 + -9794 + 13922);
    }, s: function(I, f) {
      var m = 0;
      return Hi().forEach(function(y, S) {
        var w = f + m;
        for (S = ie[I + (9979 + 133 * -75) * S >> 2329 * -1 + -7203 + 9534] = w, w = -3312 + 8 * 337 + -56 * -11; w < y.length; ++w) fe[S++ >> 5 * -1394 + 2902 * -1 + -1234 * -8] = y.charCodeAt(w);
        fe[S >> 8101 + -8101 * 1] = 35 * 138 + 2 * 1847 + -8524, m += y.length + (1 * 7845 + 2646 + -10490);
      }), 4 * 927 + 7778 + -11486;
    }, t: function(I, f) {
      var m = Hi();
      ie[I >> 259 * -38 + 6637 + 1069 * 3] = m.length;
      var y = -7458 + -91 * 107 + 17195;
      return m.forEach(function(S) {
        y += S.length + (-5972 + -845 * 8 + 12733);
      }), ie[f >> 13 * 359 + 751 * 6 + -9171] = y, 9919 + -4581 * -2 + 19081 * -1;
    }, a: C };
    (function() {
      function I(H) {
        H = H.exports, H = Zi(H), t.asm = H, Ue--, t.monitorRunDependencies && t.monitorRunDependencies(Ue), -7866 + 437 * 18 == Ue && Wt && (H = Wt, Wt = null, H());
      }
      function f(H) {
        I(H.instance);
      }
      function m(H) {
        return dg().then(function(G) {
          return WebAssembly.instantiate(G, S);
        }).then(H, function(G) {
          h("failed to asynchronously prepare wasm: " + G), rt(G);
        });
      }
      var y = {};
      y.a = vg;
      var S = y;
      if (Ue++, t.monitorRunDependencies && t.monitorRunDependencies(Ue), t.instantiateWasm) try {
        var w = t.instantiateWasm(S, I);
        return w = Zi(w);
      } catch (H) {
        return h("Module.instantiateWasm callback failed with error: " + H), !1;
      }
      return function() {
        if (u || typeof WebAssembly.instantiateStreaming != "function" || vt() || Ut("file://") || typeof fetch != "function") return m(f);
        var H = {};
        H.credentials = "same-origin", fetch(Ct, H).then(function(G) {
          return WebAssembly.instantiateStreaming(G, S).then(f, function(K) {
            return h("wasm streaming compile failed: " + K), h("falling back to ArrayBuffer instantiation"), m(f);
          });
        });
      }(), {};
    })();
    var Ri = t.___wasm_call_ctors = function() {
      return (Ri = t.___wasm_call_ctors = t.asm.B).apply(null, arguments);
    }, zn = t._malloc = function() {
      return (zn = t._malloc = t.asm.C).apply(null, arguments);
    }, Zt = t._free = function() {
      return (Zt = t._free = t.asm.D).apply(null, arguments);
    }, Pi = t.___getTypeName = function() {
      return (Pi = t.___getTypeName = t.asm.E).apply(null, arguments);
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
    var qn;
    Wt = function I() {
      qn || wr(), qn || (Wt = I);
    };
    function wr() {
      function I() {
        if (!qn && (qn = !(6500 + 29 * 76 + 256 * -34), t.calledRun = !(143 * 53 + -2396 + -5183), !p)) {
          if (Fn(me), Fn(Te), e(t), t.onRuntimeInitialized && t.onRuntimeInitialized(), t.postRun) for (typeof t.postRun == "function" && (t.postRun = [t.postRun]); t.postRun.length; ) {
            var f = t.postRun.shift();
            Xe.unshift(f);
          }
          Fn(Xe);
        }
      }
      if (!(14134 + 14134 * -1 < Ue)) {
        if (t.preRun)
          for (typeof t.preRun == "function" && (t.preRun = [t.preRun]); t.preRun.length; ) m0();
        Fn(Ye), 9119 + 1 * 925 + -27 * 372 < Ue || (t.setStatus ? (t.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            t.setStatus("");
          }, 1), I();
        }, 10 * -940 + 8507 + 894)) : I());
      }
    }
    if (t.run = wr, t.preInit)
      for (typeof t.preInit == "function" && (t.preInit = [t.preInit]); -762 + 239 * -29 + -7693 * -1 < t.preInit.length; ) t.preInit.pop()();
    return wr(), r.ready;
  };
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ec = Symbol("Comlink.proxy"), D1 = Symbol("Comlink.endpoint"), F1 = Symbol("Comlink.releaseProxy"), Fr = Symbol("Comlink.finalizer"), vx = Symbol("Comlink.thrown"), Lc = (x) => typeof x == "object" && x !== null || typeof x == "function", Y1 = {
  canHandle: (x) => Lc(x) && x[Ec],
  serialize(x) {
    const { port1: r, port2: t } = new MessageChannel();
    return Dc(x, r), [t, [t]];
  },
  deserialize(x) {
    return x.start(), Yc(x);
  }
}, X1 = {
  canHandle: (x) => Lc(x) && vx in x,
  serialize({ value: x }) {
    let r;
    return x instanceof Error ? r = {
      isError: !0,
      value: {
        message: x.message,
        name: x.name,
        stack: x.stack
      }
    } : r = { isError: !1, value: x }, [r, []];
  },
  deserialize(x) {
    throw x.isError ? Object.assign(new Error(x.value.message), x.value) : x.value;
  }
}, Nc = /* @__PURE__ */ new Map([
  ["proxy", Y1],
  ["throw", X1]
]);
function M1(x, r) {
  for (const t of x)
    if (r === t || t === "*" || t instanceof RegExp && t.test(r))
      return !0;
  return !1;
}
function Dc(x, r = globalThis, t = ["*"]) {
  r.addEventListener("message", function e(n) {
    if (!n || !n.data)
      return;
    if (!M1(t, n.origin)) {
      console.warn(`Invalid origin '${n.origin}' for comlink proxy`);
      return;
    }
    const { id: o, type: i, path: a } = Object.assign({ path: [] }, n.data), s = (n.data.argumentList || []).map(o0);
    let c;
    try {
      const l = a.slice(0, -1).reduce((h, u) => h[u], x), g = a.reduce((h, u) => h[u], x);
      switch (i) {
        case "GET":
          c = g;
          break;
        case "SET":
          l[a.slice(-1)[0]] = o0(n.data.value), c = !0;
          break;
        case "APPLY":
          c = g.apply(l, s);
          break;
        case "CONSTRUCT":
          {
            const h = new g(...s);
            c = z1(h);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: h, port2: u } = new MessageChannel();
            Dc(x, u), c = U1(h, [h]);
          }
          break;
        case "RELEASE":
          c = void 0;
          break;
        default:
          return;
      }
    } catch (l) {
      c = { value: l, [vx]: 0 };
    }
    Promise.resolve(c).catch((l) => ({ value: l, [vx]: 0 })).then((l) => {
      const [g, h] = zx(l);
      r.postMessage(Object.assign(Object.assign({}, g), { id: o }), h), i === "RELEASE" && (r.removeEventListener("message", e), Fc(r), Fr in x && typeof x[Fr] == "function" && x[Fr]());
    }).catch((l) => {
      const [g, h] = zx({
        value: new TypeError("Unserializable return value"),
        [vx]: 0
      });
      r.postMessage(Object.assign(Object.assign({}, g), { id: o }), h);
    });
  }), r.start && r.start();
}
function j1(x) {
  return x.constructor.name === "MessagePort";
}
function Fc(x) {
  j1(x) && x.close();
}
function Yc(x, r) {
  return Ho(x, [], r);
}
function sx(x) {
  if (x)
    throw new Error("Proxy has been released and is not useable");
}
function Xc(x) {
  return K0(x, {
    type: "RELEASE"
  }).then(() => {
    Fc(x);
  });
}
const Qx = /* @__PURE__ */ new WeakMap(), Ux = "FinalizationRegistry" in globalThis && new FinalizationRegistry((x) => {
  const r = (Qx.get(x) || 0) - 1;
  Qx.set(x, r), r === 0 && Xc(x);
});
function J1(x, r) {
  const t = (Qx.get(r) || 0) + 1;
  Qx.set(r, t), Ux && Ux.register(x, r, x);
}
function _1(x) {
  Ux && Ux.unregister(x);
}
function Ho(x, r = [], t = function() {
}) {
  let e = !1;
  const n = new Proxy(t, {
    get(o, i) {
      if (sx(e), i === F1)
        return () => {
          _1(n), Xc(x), e = !0;
        };
      if (i === "then") {
        if (r.length === 0)
          return { then: () => n };
        const a = K0(x, {
          type: "GET",
          path: r.map((s) => s.toString())
        }).then(o0);
        return a.then.bind(a);
      }
      return Ho(x, [...r, i]);
    },
    set(o, i, a) {
      sx(e);
      const [s, c] = zx(a);
      return K0(x, {
        type: "SET",
        path: [...r, i].map((l) => l.toString()),
        value: s
      }, c).then(o0);
    },
    apply(o, i, a) {
      sx(e);
      const s = r[r.length - 1];
      if (s === D1)
        return K0(x, {
          type: "ENDPOINT"
        }).then(o0);
      if (s === "bind")
        return Ho(x, r.slice(0, -1));
      const [c, l] = La(a);
      return K0(x, {
        type: "APPLY",
        path: r.map((g) => g.toString()),
        argumentList: c
      }, l).then(o0);
    },
    construct(o, i) {
      sx(e);
      const [a, s] = La(i);
      return K0(x, {
        type: "CONSTRUCT",
        path: r.map((c) => c.toString()),
        argumentList: a
      }, s).then(o0);
    }
  });
  return J1(n, x), n;
}
function Q1(x) {
  return Array.prototype.concat.apply([], x);
}
function La(x) {
  const r = x.map(zx);
  return [r.map((t) => t[0]), Q1(r.map((t) => t[1]))];
}
const Mc = /* @__PURE__ */ new WeakMap();
function U1(x, r) {
  return Mc.set(x, r), x;
}
function z1(x) {
  return Object.assign(x, { [Ec]: !0 });
}
function zx(x) {
  for (const [r, t] of Nc)
    if (t.canHandle(x)) {
      const [e, n] = t.serialize(x);
      return [
        {
          type: "HANDLER",
          name: r,
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
    Mc.get(x) || []
  ];
}
function o0(x) {
  switch (x.type) {
    case "HANDLER":
      return Nc.get(x.name).deserialize(x.value);
    case "RAW":
      return x.value;
  }
}
function K0(x, r, t) {
  return new Promise((e) => {
    const n = q1();
    x.addEventListener("message", function o(i) {
      !i.data || !i.data.id || i.data.id !== n || (x.removeEventListener("message", o), e(i.data));
    }), x.start && x.start(), x.postMessage(Object.assign({ id: n }, r), t);
  });
}
function q1() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const jc = "dmFyIGNlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5Owp2YXIgbGUgPSAoYSwgdSwgZSkgPT4gdSBpbiBhID8gY2UoYSwgdSwgeyBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwLCB2YWx1ZTogZSB9KSA6IGFbdV0gPSBlOwp2YXIgWW4gPSAoYSwgdSwgZSkgPT4gbGUoYSwgdHlwZW9mIHUgIT0gInN5bWJvbCIgPyB1ICsgIiIgOiB1LCBlKTsKY29uc3Qga3QgPSB7CiAgc2ltZDogInNhbV9zaW1kLndhc20iLAogIHNhbTogInNhbS53YXNtIgp9LCBmZSA9IGFzeW5jICgpID0+IFdlYkFzc2VtYmx5LnZhbGlkYXRlKG5ldyBVaW50OEFycmF5KFswLCA5NywgMTE1LCAxMDksIDEsIDAsIDAsIDAsIDEsIDUsIDEsIDk2LCAwLCAxLCAxMjMsIDMsIDIsIDEsIDAsIDEwLCAxMCwgMSwgOCwgMCwgNjUsIDAsIDI1MywgMTUsIDI1MywgOTgsIDExXSkpOwpjbGFzcyBJIGV4dGVuZHMgRXJyb3IgewogIGNvbnN0cnVjdG9yKGUsIG0pIHsKICAgIHN1cGVyKGUpOwogICAgWW4odGhpcywgImNhdXNlIik7CiAgICB0aGlzLm5hbWUgPSAiQXV0b0NhcHR1cmVFcnJvciIsIHRoaXMuY2F1c2UgPSBtOwogIH0KICAvLyBDaGFuZ2UgdGhpcyB0byBEZWNvcmF0b3Igd2hlbiB0aGV5IHdpbGwgYmUgaW4gc3RhYmxlIHJlbGVhc2UKICBzdGF0aWMgbG9nRXJyb3IoZSkgewogIH0KICBzdGF0aWMgZnJvbUNhbWVyYUVycm9yKGUpIHsKICAgIGlmICh0aGlzLmxvZ0Vycm9yKGUpLCBlIGluc3RhbmNlb2YgSSkKICAgICAgcmV0dXJuIGU7CiAgICBsZXQgbTsKICAgIHN3aXRjaCAoZS5uYW1lKSB7CiAgICAgIGNhc2UgIk92ZXJjb25zdHJhaW5lZEVycm9yIjoKICAgICAgICBtID0gIk1pbmltdW0gcXVhbGl0eSByZXF1aXJlbWVudHMgYXJlIG5vdCBtZXQgYnkgeW91ciBjYW1lcmEiOwogICAgICAgIGJyZWFrOwogICAgICBjYXNlICJOb3RSZWFkYWJsZUVycm9yIjoKICAgICAgY2FzZSAiQWJvcnRFcnJvciI6CiAgICAgICAgbSA9ICJUaGUgd2ViY2FtIGlzIGFscmVhZHkgaW4gdXNlIGJ5IGFub3RoZXIgYXBwbGljYXRpb24iOwogICAgICAgIGJyZWFrOwogICAgICBjYXNlICJOb3RBbGxvd2VkRXJyb3IiOgogICAgICAgIG0gPSAiVG8gdXNlIHlvdXIgY2FtZXJhLCB5b3UgbXVzdCBhbGxvdyBwZXJtaXNzaW9ucyI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdEZvdW5kRXJyb3IiOgogICAgICAgIG0gPSAiVGhlcmUgaXMgbm8gY2FtZXJhIGF2YWlsYWJsZSB0byB5b3UiOwogICAgICAgIGJyZWFrOwogICAgICBkZWZhdWx0OgogICAgICAgIG0gPSAiQW4gdW5rbm93biBjYW1lcmEgZXJyb3IgaGFzIG9jY3VycmVkIjsKICAgICAgICBicmVhazsKICAgIH0KICAgIHJldHVybiBuZXcgSShtLCBlKTsKICB9CiAgc3RhdGljIGZyb21FcnJvcihlKSB7CiAgICBpZiAodGhpcy5sb2dFcnJvcihlKSwgZSBpbnN0YW5jZW9mIEkpCiAgICAgIHJldHVybiBlOwogICAgY29uc3QgbSA9ICJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcyBvY2N1cnJlZCI7CiAgICByZXR1cm4gbmV3IEkobSk7CiAgfQp9CmNvbnN0IGRlID0gewogIFJHQjogIlJHQiIsCiAgUkdCQTogIlJHQkEiCn0sIGhlID0gKGEpID0+IE51bWJlci5wYXJzZUZsb2F0KGEudG9GaXhlZCgzKSksIHllID0gKGEsIHUpID0+IE1hdGgubWluKGEsIHUpOwp2YXIgcGUgPSBmdW5jdGlvbigpIHsKICB2YXIgYSA9IHR5cGVvZiBkb2N1bWVudCA8ICJ1IiAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0ID8gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmMgOiB2b2lkIDA7CiAgcmV0dXJuIGZ1bmN0aW9uKHUpIHsKICAgIHUgPSB1IHx8IHt9OwogICAgdmFyIGU7CiAgICBlIHx8IChlID0gdHlwZW9mIHUgPCAidSIgPyB1IDoge30pOwogICAgdmFyIG0sIGc7CiAgICBlLnJlYWR5ID0gbmV3IFByb21pc2UoZnVuY3Rpb24obiwgdCkgewogICAgICBtID0gbiwgZyA9IHQ7CiAgICB9KTsKICAgIHZhciBDID0ge30sIEE7CiAgICBmb3IgKEEgaW4gZSkgZS5oYXNPd25Qcm9wZXJ0eShBKSAmJiAoQ1tBXSA9IGVbQV0pOwogICAgdmFyIE0gPSAiLi90aGlzLnByb2dyYW0iLCBPID0gITEsIFQgPSAhMTsKICAgIE8gPSB0eXBlb2Ygd2luZG93ID09ICJvYmplY3QiLCBUID0gdHlwZW9mIGltcG9ydFNjcmlwdHMgPT0gImZ1bmN0aW9uIjsKICAgIHZhciBfID0gIiIsIFM7CiAgICAoTyB8fCBUKSAmJiAoVCA/IF8gPSBzZWxmLmxvY2F0aW9uLmhyZWYgOiBkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIChfID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmMpLCBhICYmIChfID0gYSksIF8uaW5kZXhPZigiYmxvYjoiKSAhPT0gMCA/IF8gPSBfLnN1YnN0cigwLCBfLmxhc3RJbmRleE9mKCIvIikgKyAxKSA6IF8gPSAiIiwgVCAmJiAoUyA9IGZ1bmN0aW9uKG4pIHsKICAgICAgdmFyIHQgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsKICAgICAgcmV0dXJuIHQub3BlbigiR0VUIiwgbiwgITEpLCB0LnJlc3BvbnNlVHlwZSA9ICJhcnJheWJ1ZmZlciIsIHQuc2VuZChudWxsKSwgbmV3IFVpbnQ4QXJyYXkodC5yZXNwb25zZSk7CiAgICB9KSk7CiAgICB2YXIgRSA9IGUucHJpbnRFcnIgfHwgY29uc29sZS53YXJuLmJpbmQoY29uc29sZSk7CiAgICBmb3IgKEEgaW4gQykgQy5oYXNPd25Qcm9wZXJ0eShBKSAmJiAoZVtBXSA9IENbQV0pOwogICAgQyA9IG51bGwsIGUudGhpc1Byb2dyYW0gJiYgKE0gPSBlLnRoaXNQcm9ncmFtKTsKICAgIHZhciBXOwogICAgZS53YXNtQmluYXJ5ICYmIChXID0gZS53YXNtQmluYXJ5KSwgZS5ub0V4aXRSdW50aW1lICYmIGUubm9FeGl0UnVudGltZSwgdHlwZW9mIFdlYkFzc2VtYmx5ICE9ICJvYmplY3QiICYmIHNuKCJubyBuYXRpdmUgd2FzbSBzdXBwb3J0IGRldGVjdGVkIik7CiAgICB2YXIgSCwga24gPSAhMTsKICAgIGZ1bmN0aW9uIEtuKG4pIHsKICAgICAgbiB8fCBzbigiQXNzZXJ0aW9uIGZhaWxlZDogdW5kZWZpbmVkIik7CiAgICB9CiAgICB2YXIgUW4gPSB0eXBlb2YgVGV4dERlY29kZXIgPCAidSIgPyBuZXcgVGV4dERlY29kZXIoInV0ZjgiKSA6IHZvaWQgMDsKICAgIGZ1bmN0aW9uIFV0KG4sIHQsIHIpIHsKICAgICAgdmFyIGkgPSBGOwogICAgICBpZiAoMCA8IHIpIHsKICAgICAgICByID0gdCArIHIgLSAxOwogICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgbi5sZW5ndGg7ICsrbykgewogICAgICAgICAgdmFyIHMgPSBuLmNoYXJDb2RlQXQobyk7CiAgICAgICAgICBpZiAoNTUyOTYgPD0gcyAmJiA1NzM0MyA+PSBzKSB7CiAgICAgICAgICAgIHZhciBsID0gbi5jaGFyQ29kZUF0KCsrbyk7CiAgICAgICAgICAgIHMgPSA2NTUzNiArICgocyAmIDEwMjMpIDw8IDEwKSB8IGwgJiAxMDIzOwogICAgICAgICAgfQogICAgICAgICAgaWYgKDEyNyA+PSBzKSB7CiAgICAgICAgICAgIGlmICh0ID49IHIpIGJyZWFrOwogICAgICAgICAgICBpW3QrK10gPSBzOwogICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgaWYgKDIwNDcgPj0gcykgewogICAgICAgICAgICAgIGlmICh0ICsgMSA+PSByKSBicmVhazsKICAgICAgICAgICAgICBpW3QrK10gPSAxOTIgfCBzID4+IDY7CiAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgaWYgKDY1NTM1ID49IHMpIHsKICAgICAgICAgICAgICAgIGlmICh0ICsgMiA+PSByKSBicmVhazsKICAgICAgICAgICAgICAgIGlbdCsrXSA9IDIyNCB8IHMgPj4gMTI7CiAgICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgIGlmICh0ICsgMyA+PSByKSBicmVhazsKICAgICAgICAgICAgICAgIGlbdCsrXSA9IDI0MCB8IHMgPj4gMTgsIGlbdCsrXSA9IDEyOCB8IHMgPj4gMTIgJiA2MzsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgaVt0KytdID0gMTI4IHwgcyA+PiA2ICYgNjM7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgaVt0KytdID0gMTI4IHwgcyAmIDYzOwogICAgICAgICAgfQogICAgICAgIH0KICAgICAgICBpW3RdID0gMDsKICAgICAgfQogICAgfQogICAgdmFyIHFuID0gdHlwZW9mIFRleHREZWNvZGVyIDwgInUiID8gbmV3IFRleHREZWNvZGVyKCJ1dGYtMTZsZSIpIDogdm9pZCAwOwogICAgZnVuY3Rpb24gRHQobiwgdCkgewogICAgICBmb3IgKHZhciByID0gbiA+PiAxLCBpID0gciArIHQgLyAyOyAhKHIgPj0gaSkgJiYgeW5bcl07ICkgKytyOwogICAgICBpZiAociA8PD0gMSwgMzIgPCByIC0gbiAmJiBxbikgcmV0dXJuIHFuLmRlY29kZShGLnN1YmFycmF5KG4sIHIpKTsKICAgICAgZm9yIChyID0gMCwgaSA9ICIiOyA7ICkgewogICAgICAgIHZhciBvID0gUVtuICsgMiAqIHIgPj4gMV07CiAgICAgICAgaWYgKG8gPT0gMCB8fCByID09IHQgLyAyKSByZXR1cm4gaTsKICAgICAgICArK3IsIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShvKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gQnQobiwgdCwgcikgewogICAgICBpZiAociA9PT0gdm9pZCAwICYmIChyID0gMjE0NzQ4MzY0NyksIDIgPiByKSByZXR1cm4gMDsKICAgICAgciAtPSAyOwogICAgICB2YXIgaSA9IHQ7CiAgICAgIHIgPSByIDwgMiAqIG4ubGVuZ3RoID8gciAvIDIgOiBuLmxlbmd0aDsKICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCByOyArK28pIFFbdCA+PiAxXSA9IG4uY2hhckNvZGVBdChvKSwgdCArPSAyOwogICAgICByZXR1cm4gUVt0ID4+IDFdID0gMCwgdCAtIGk7CiAgICB9CiAgICBmdW5jdGlvbiB6dChuKSB7CiAgICAgIHJldHVybiAyICogbi5sZW5ndGg7CiAgICB9CiAgICBmdW5jdGlvbiBWdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSAwLCBpID0gIiI7ICEociA+PSB0IC8gNCk7ICkgewogICAgICAgIHZhciBvID0ga1tuICsgNCAqIHIgPj4gMl07CiAgICAgICAgaWYgKG8gPT0gMCkgYnJlYWs7CiAgICAgICAgKytyLCA2NTUzNiA8PSBvID8gKG8gLT0gNjU1MzYsIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiB8IG8gPj4gMTAsIDU2MzIwIHwgbyAmIDEwMjMpKSA6IGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShvKTsKICAgICAgfQogICAgICByZXR1cm4gaTsKICAgIH0KICAgIGZ1bmN0aW9uIEd0KG4sIHQsIHIpIHsKICAgICAgaWYgKHIgPT09IHZvaWQgMCAmJiAociA9IDIxNDc0ODM2NDcpLCA0ID4gcikgcmV0dXJuIDA7CiAgICAgIHZhciBpID0gdDsKICAgICAgciA9IGkgKyByIC0gNDsKICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCBuLmxlbmd0aDsgKytvKSB7CiAgICAgICAgdmFyIHMgPSBuLmNoYXJDb2RlQXQobyk7CiAgICAgICAgaWYgKDU1Mjk2IDw9IHMgJiYgNTczNDMgPj0gcykgewogICAgICAgICAgdmFyIGwgPSBuLmNoYXJDb2RlQXQoKytvKTsKICAgICAgICAgIHMgPSA2NTUzNiArICgocyAmIDEwMjMpIDw8IDEwKSB8IGwgJiAxMDIzOwogICAgICAgIH0KICAgICAgICBpZiAoa1t0ID4+IDJdID0gcywgdCArPSA0LCB0ICsgNCA+IHIpIGJyZWFrOwogICAgICB9CiAgICAgIHJldHVybiBrW3QgPj4gMl0gPSAwLCB0IC0gaTsKICAgIH0KICAgIGZ1bmN0aW9uIFl0KG4pIHsKICAgICAgZm9yICh2YXIgdCA9IDAsIHIgPSAwOyByIDwgbi5sZW5ndGg7ICsrcikgewogICAgICAgIHZhciBpID0gbi5jaGFyQ29kZUF0KHIpOwogICAgICAgIDU1Mjk2IDw9IGkgJiYgNTczNDMgPj0gaSAmJiArK3IsIHQgKz0gNDsKICAgICAgfQogICAgICByZXR1cm4gdDsKICAgIH0KICAgIHZhciBLLCBZLCBGLCBRLCB5biwgaywgVSwgbnQsIHR0OwogICAgZnVuY3Rpb24gZXQobikgewogICAgICBLID0gbiwgZS5IRUFQOCA9IFkgPSBuZXcgSW50OEFycmF5KG4pLCBlLkhFQVAxNiA9IFEgPSBuZXcgSW50MTZBcnJheShuKSwgZS5IRUFQMzIgPSBrID0gbmV3IEludDMyQXJyYXkobiksIGUuSEVBUFU4ID0gRiA9IG5ldyBVaW50OEFycmF5KG4pLCBlLkhFQVBVMTYgPSB5biA9IG5ldyBVaW50MTZBcnJheShuKSwgZS5IRUFQVTMyID0gVSA9IG5ldyBVaW50MzJBcnJheShuKSwgZS5IRUFQRjMyID0gbnQgPSBuZXcgRmxvYXQzMkFycmF5KG4pLCBlLkhFQVBGNjQgPSB0dCA9IG5ldyBGbG9hdDY0QXJyYXkobik7CiAgICB9CiAgICB2YXIgcnQgPSBlLklOSVRJQUxfTUVNT1JZIHx8IDE2Nzc3MjE2OwogICAgZS53YXNtTWVtb3J5ID8gSCA9IGUud2FzbU1lbW9yeSA6IEggPSBuZXcgV2ViQXNzZW1ibHkuTWVtb3J5KHsgaW5pdGlhbDogcnQgLyA2NTUzNiwgbWF4aW11bTogMzI3NjggfSksIEggJiYgKEsgPSBILmJ1ZmZlciksIHJ0ID0gSy5ieXRlTGVuZ3RoLCBldChLKTsKICAgIHZhciBpdCA9IFtdLCBhdCA9IFtdLCBadCA9IFtdLCBvdCA9IFtdOwogICAgZnVuY3Rpb24gJHQoKSB7CiAgICAgIHZhciBuID0gZS5wcmVSdW4uc2hpZnQoKTsKICAgICAgaXQudW5zaGlmdChuKTsKICAgIH0KICAgIHZhciBaID0gMCwgb24gPSBudWxsOwogICAgZS5wcmVsb2FkZWRJbWFnZXMgPSB7fSwgZS5wcmVsb2FkZWRBdWRpb3MgPSB7fTsKICAgIGZ1bmN0aW9uIHNuKG4pIHsKICAgICAgdGhyb3cgZS5vbkFib3J0ICYmIGUub25BYm9ydChuKSwgRShuKSwga24gPSAhMCwgbiA9IG5ldyBXZWJBc3NlbWJseS5SdW50aW1lRXJyb3IoImFib3J0KCIgKyBuICsgIikuIEJ1aWxkIHdpdGggLXMgQVNTRVJUSU9OUz0xIGZvciBtb3JlIGluZm8uIiksIGcobiksIG47CiAgICB9CiAgICBmdW5jdGlvbiBSbihuKSB7CiAgICAgIHZhciB0ID0gJDsKICAgICAgcmV0dXJuIFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCA/IHQuc3RhcnRzV2l0aChuKSA6IHQuaW5kZXhPZihuKSA9PT0gMDsKICAgIH0KICAgIGZ1bmN0aW9uIHN0KCkgewogICAgICByZXR1cm4gUm4oImRhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCwiKTsKICAgIH0KICAgIHZhciAkID0gInNhbS53YXNtIjsKICAgIGlmICghc3QoKSkgewogICAgICB2YXIgdXQgPSAkOwogICAgICAkID0gZS5sb2NhdGVGaWxlID8gZS5sb2NhdGVGaWxlKHV0LCBfKSA6IF8gKyB1dDsKICAgIH0KICAgIGZ1bmN0aW9uIGN0KCkgewogICAgICB0cnkgewogICAgICAgIGlmIChXKSByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoVyk7CiAgICAgICAgaWYgKFMpIHJldHVybiBTKCQpOwogICAgICAgIHRocm93ICJib3RoIGFzeW5jIGFuZCBzeW5jIGZldGNoaW5nIG9mIHRoZSB3YXNtIGZhaWxlZCI7CiAgICAgIH0gY2F0Y2ggKG4pIHsKICAgICAgICBzbihuKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gWHQoKSB7CiAgICAgIHJldHVybiBXIHx8ICFPICYmICFUIHx8IHR5cGVvZiBmZXRjaCAhPSAiZnVuY3Rpb24iIHx8IFJuKCJmaWxlOi8vIikgPyBQcm9taXNlLnJlc29sdmUoKS50aGVuKGN0KSA6IGZldGNoKCQsIHsgY3JlZGVudGlhbHM6ICJzYW1lLW9yaWdpbiIgfSkudGhlbihmdW5jdGlvbihuKSB7CiAgICAgICAgaWYgKCFuLm9rKSB0aHJvdyAiZmFpbGVkIHRvIGxvYWQgd2FzbSBiaW5hcnkgZmlsZSBhdCAnIiArICQgKyAiJyI7CiAgICAgICAgcmV0dXJuIG4uYXJyYXlCdWZmZXIoKTsKICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oKSB7CiAgICAgICAgcmV0dXJuIGN0KCk7CiAgICAgIH0pOwogICAgfQogICAgZnVuY3Rpb24gcG4obikgewogICAgICBmb3IgKDsgMCA8IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4uc2hpZnQoKTsKICAgICAgICBpZiAodHlwZW9mIHQgPT0gImZ1bmN0aW9uIikgdChlKTsKICAgICAgICBlbHNlIHsKICAgICAgICAgIHZhciByID0gdC5CYTsKICAgICAgICAgIHR5cGVvZiByID09ICJudW1iZXIiID8gdC50YSA9PT0gdm9pZCAwID8geG4oInYiLCByKSgpIDogeG4oInZpIiwgcikodC50YSkgOiByKHQudGEgPT09IHZvaWQgMCA/IG51bGwgOiB0LnRhKTsKICAgICAgICB9CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHhuKG4sIHQpIHsKICAgICAgdmFyIHIgPSBbXTsKICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkgewogICAgICAgIHIubGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsKICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgcltpXSA9IGFyZ3VtZW50c1tpXTsKICAgICAgICByZXR1cm4gciAmJiByLmxlbmd0aCA/IGVbImR5bkNhbGxfIiArIG5dLmFwcGx5KG51bGwsIFt0XS5jb25jYXQocikpIDogZVsiZHluQ2FsbF8iICsgbl0uY2FsbChudWxsLCB0KTsKICAgICAgfTsKICAgIH0KICAgIGZ1bmN0aW9uIEp0KG4pIHsKICAgICAgdGhpcy5kYSA9IG4gLSAxNiwgdGhpcy5PYSA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICBrW3RoaXMuZGEgKyA4ID4+IDJdID0gdDsKICAgICAgfSwgdGhpcy5MYSA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICBrW3RoaXMuZGEgKyAwID4+IDJdID0gdDsKICAgICAgfSwgdGhpcy5NYSA9IGZ1bmN0aW9uKCkgewogICAgICAgIGtbdGhpcy5kYSArIDQgPj4gMl0gPSAwOwogICAgICB9LCB0aGlzLkthID0gZnVuY3Rpb24oKSB7CiAgICAgICAgWVt0aGlzLmRhICsgMTIgPj4gMF0gPSAwOwogICAgICB9LCB0aGlzLk5hID0gZnVuY3Rpb24oKSB7CiAgICAgICAgWVt0aGlzLmRhICsgMTMgPj4gMF0gPSAwOwogICAgICB9LCB0aGlzLkZhID0gZnVuY3Rpb24odCwgcikgewogICAgICAgIHRoaXMuT2EodCksIHRoaXMuTGEociksIHRoaXMuTWEoKSwgdGhpcy5LYSgpLCB0aGlzLk5hKCk7CiAgICAgIH07CiAgICB9CiAgICBmdW5jdGlvbiBtbigpIHsKICAgICAgcmV0dXJuIDAgPCBtbi54YTsKICAgIH0KICAgIGZ1bmN0aW9uIEZuKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSAxOgogICAgICAgICAgcmV0dXJuIDA7CiAgICAgICAgY2FzZSAyOgogICAgICAgICAgcmV0dXJuIDE7CiAgICAgICAgY2FzZSA0OgogICAgICAgICAgcmV0dXJuIDI7CiAgICAgICAgY2FzZSA4OgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gdHlwZSBzaXplOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIHZhciBsdCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIFIobikgewogICAgICBmb3IgKHZhciB0ID0gIiI7IEZbbl07ICkgdCArPSBsdFtGW24rK11dOwogICAgICByZXR1cm4gdDsKICAgIH0KICAgIHZhciBxID0ge30sIFggPSB7fSwgdm4gPSB7fTsKICAgIGZ1bmN0aW9uIEluKG4pIHsKICAgICAgaWYgKG4gPT09IHZvaWQgMCkgcmV0dXJuICJfdW5rbm93biI7CiAgICAgIG4gPSBuLnJlcGxhY2UoL1teYS16QS1aMC05X10vZywgIiQiKTsKICAgICAgdmFyIHQgPSBuLmNoYXJDb2RlQXQoMCk7CiAgICAgIHJldHVybiA0OCA8PSB0ICYmIDU3ID49IHQgPyAiXyIgKyBuIDogbjsKICAgIH0KICAgIGZ1bmN0aW9uIGpuKG4sIHQpIHsKICAgICAgcmV0dXJuIG4gPSBJbihuKSwgbmV3IEZ1bmN0aW9uKCJib2R5IiwgInJldHVybiBmdW5jdGlvbiAiICsgbiArIGAoKSB7CiAgICAidXNlIHN0cmljdCI7ICAgIHJldHVybiBib2R5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7Cn07CmApKHQpOwogICAgfQogICAgZnVuY3Rpb24gTG4obikgewogICAgICB2YXIgdCA9IEVycm9yLCByID0gam4obiwgZnVuY3Rpb24oaSkgewogICAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMubWVzc2FnZSA9IGksIGkgPSBFcnJvcihpKS5zdGFjaywgaSAhPT0gdm9pZCAwICYmICh0aGlzLnN0YWNrID0gdGhpcy50b1N0cmluZygpICsgYApgICsgaS5yZXBsYWNlKC9eRXJyb3IoOlteXG5dKik/XG4vLCAiIikpOwogICAgICB9KTsKICAgICAgcmV0dXJuIHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSksIHIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gciwgci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlID09PSB2b2lkIDAgPyB0aGlzLm5hbWUgOiB0aGlzLm5hbWUgKyAiOiAiICsgdGhpcy5tZXNzYWdlOwogICAgICB9LCByOwogICAgfQogICAgdmFyIG5uID0gdm9pZCAwOwogICAgZnVuY3Rpb24gdihuKSB7CiAgICAgIHRocm93IG5ldyBubihuKTsKICAgIH0KICAgIHZhciBmdCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIGduKG4pIHsKICAgICAgdGhyb3cgbmV3IGZ0KG4pOwogICAgfQogICAgZnVuY3Rpb24gdG4obiwgdCwgcikgewogICAgICBmdW5jdGlvbiBpKGMpIHsKICAgICAgICBjID0gcihjKSwgYy5sZW5ndGggIT09IG4ubGVuZ3RoICYmIGduKCJNaXNtYXRjaGVkIHR5cGUgY29udmVydGVyIGNvdW50Iik7CiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBuLmxlbmd0aDsgKyt5KSBEKG5beV0sIGNbeV0pOwogICAgICB9CiAgICAgIG4uZm9yRWFjaChmdW5jdGlvbihjKSB7CiAgICAgICAgdm5bY10gPSB0OwogICAgICB9KTsKICAgICAgdmFyIG8gPSBBcnJheSh0Lmxlbmd0aCksIHMgPSBbXSwgbCA9IDA7CiAgICAgIHQuZm9yRWFjaChmdW5jdGlvbihjLCB5KSB7CiAgICAgICAgWC5oYXNPd25Qcm9wZXJ0eShjKSA/IG9beV0gPSBYW2NdIDogKHMucHVzaChjKSwgcS5oYXNPd25Qcm9wZXJ0eShjKSB8fCAocVtjXSA9IFtdKSwgcVtjXS5wdXNoKGZ1bmN0aW9uKCkgewogICAgICAgICAgb1t5XSA9IFhbY10sICsrbCwgbCA9PT0gcy5sZW5ndGggJiYgaShvKTsKICAgICAgICB9KSk7CiAgICAgIH0pLCBzLmxlbmd0aCA9PT0gMCAmJiBpKG8pOwogICAgfQogICAgZnVuY3Rpb24gRChuLCB0LCByKSB7CiAgICAgIGlmIChyID0gciB8fCB7fSwgISgiYXJnUGFja0FkdmFuY2UiIGluIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCJyZWdpc3RlclR5cGUgcmVnaXN0ZXJlZEluc3RhbmNlIHJlcXVpcmVzIGFyZ1BhY2tBZHZhbmNlIik7CiAgICAgIHZhciBpID0gdC5uYW1lOwogICAgICBpZiAobiB8fCB2KCd0eXBlICInICsgaSArICciIG11c3QgaGF2ZSBhIHBvc2l0aXZlIGludGVnZXIgdHlwZWlkIHBvaW50ZXInKSwgWC5oYXNPd25Qcm9wZXJ0eShuKSkgewogICAgICAgIGlmIChyLkVhKSByZXR1cm47CiAgICAgICAgdigiQ2Fubm90IHJlZ2lzdGVyIHR5cGUgJyIgKyBpICsgIicgdHdpY2UiKTsKICAgICAgfQogICAgICBYW25dID0gdCwgZGVsZXRlIHZuW25dLCBxLmhhc093blByb3BlcnR5KG4pICYmICh0ID0gcVtuXSwgZGVsZXRlIHFbbl0sIHQuZm9yRWFjaChmdW5jdGlvbihvKSB7CiAgICAgICAgbygpOwogICAgICB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiBLdChuKSB7CiAgICAgIHJldHVybiB7IGNvdW50OiBuLmNvdW50LCBvYTogbi5vYSwgcGE6IG4ucGEsIGRhOiBuLmRhLCBmYTogbi5mYSwgZ2E6IG4uZ2EsIGhhOiBuLmhhIH07CiAgICB9CiAgICBmdW5jdGlvbiBObihuKSB7CiAgICAgIHYobi5BLmZhLmVhLm5hbWUgKyAiIGluc3RhbmNlIGFscmVhZHkgZGVsZXRlZCIpOwogICAgfQogICAgdmFyIEhuID0gITE7CiAgICBmdW5jdGlvbiBkdCgpIHsKICAgIH0KICAgIGZ1bmN0aW9uIGh0KG4pIHsKICAgICAgLS1uLmNvdW50LnZhbHVlLCBuLmNvdW50LnZhbHVlID09PSAwICYmIChuLmdhID8gbi5oYS5uYShuLmdhKSA6IG4uZmEuZWEubmEobi5kYSkpOwogICAgfQogICAgZnVuY3Rpb24gdW4obikgewogICAgICByZXR1cm4gdHlwZW9mIEZpbmFsaXphdGlvbkdyb3VwID4gInUiID8gKHVuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiB0OwogICAgICB9LCBuKSA6IChIbiA9IG5ldyBGaW5hbGl6YXRpb25Hcm91cChmdW5jdGlvbih0KSB7CiAgICAgICAgZm9yICh2YXIgciA9IHQubmV4dCgpOyAhci5kb25lOyByID0gdC5uZXh0KCkpIHIgPSByLnZhbHVlLCByLmRhID8gaHQocikgOiBjb25zb2xlLndhcm4oIm9iamVjdCBhbHJlYWR5IGRlbGV0ZWQ6ICIgKyByLmRhKTsKICAgICAgfSksIHVuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiBIbi5yZWdpc3Rlcih0LCB0LkEsIHQuQSksIHQ7CiAgICAgIH0sIGR0ID0gZnVuY3Rpb24odCkgewogICAgICAgIEhuLnVucmVnaXN0ZXIodC5BKTsKICAgICAgfSwgdW4obikpOwogICAgfQogICAgdmFyIGNuID0gdm9pZCAwLCBsbiA9IFtdOwogICAgZnVuY3Rpb24gVW4oKSB7CiAgICAgIGZvciAoOyBsbi5sZW5ndGg7ICkgewogICAgICAgIHZhciBuID0gbG4ucG9wKCk7CiAgICAgICAgbi5BLm9hID0gITEsIG4uZGVsZXRlKCk7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIFYoKSB7CiAgICB9CiAgICB2YXIgeXQgPSB7fTsKICAgIGZ1bmN0aW9uIFF0KG4sIHQpIHsKICAgICAgdmFyIHIgPSBlOwogICAgICBpZiAocltuXS5qYSA9PT0gdm9pZCAwKSB7CiAgICAgICAgdmFyIGkgPSByW25dOwogICAgICAgIHJbbl0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiByW25dLmphLmhhc093blByb3BlcnR5KGFyZ3VtZW50cy5sZW5ndGgpIHx8IHYoIkZ1bmN0aW9uICciICsgdCArICInIGNhbGxlZCB3aXRoIGFuIGludmFsaWQgbnVtYmVyIG9mIGFyZ3VtZW50cyAoIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiKSAtIGV4cGVjdHMgb25lIG9mICgiICsgcltuXS5qYSArICIpISIpLCByW25dLmphW2FyZ3VtZW50cy5sZW5ndGhdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgfSwgcltuXS5qYSA9IFtdLCByW25dLmphW2kueWFdID0gaTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gcHQobiwgdCwgcikgewogICAgICBlLmhhc093blByb3BlcnR5KG4pID8gKChyID09PSB2b2lkIDAgfHwgZVtuXS5qYSAhPT0gdm9pZCAwICYmIGVbbl0uamFbcl0gIT09IHZvaWQgMCkgJiYgdigiQ2Fubm90IHJlZ2lzdGVyIHB1YmxpYyBuYW1lICciICsgbiArICInIHR3aWNlIiksIFF0KG4sIG4pLCBlLmhhc093blByb3BlcnR5KHIpICYmIHYoIkNhbm5vdCByZWdpc3RlciBtdWx0aXBsZSBvdmVybG9hZHMgb2YgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIG51bWJlciBvZiBhcmd1bWVudHMgKCIgKyByICsgIikhIiksIGVbbl0uamFbcl0gPSB0KSA6IChlW25dID0gdCwgciAhPT0gdm9pZCAwICYmIChlW25dLlJhID0gcikpOwogICAgfQogICAgZnVuY3Rpb24gcXQobiwgdCwgciwgaSwgbywgcywgbCwgYykgewogICAgICB0aGlzLm5hbWUgPSBuLCB0aGlzLmNvbnN0cnVjdG9yID0gdCwgdGhpcy5tYSA9IHIsIHRoaXMubmEgPSBpLCB0aGlzLmlhID0gbywgdGhpcy5DYSA9IHMsIHRoaXMucWEgPSBsLCB0aGlzLkFhID0gYzsKICAgIH0KICAgIGZ1bmN0aW9uIHduKG4sIHQsIHIpIHsKICAgICAgZm9yICg7IHQgIT09IHI7ICkgdC5xYSB8fCB2KCJFeHBlY3RlZCBudWxsIG9yIGluc3RhbmNlIG9mICIgKyByLm5hbWUgKyAiLCBnb3QgYW4gaW5zdGFuY2Ugb2YgIiArIHQubmFtZSksIG4gPSB0LnFhKG4pLCB0ID0gdC5pYTsKICAgICAgcmV0dXJuIG47CiAgICB9CiAgICBmdW5jdGlvbiBuZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgcm4odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIHduKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiB0ZShuLCB0KSB7CiAgICAgIGlmICh0ID09PSBudWxsKSB7CiAgICAgICAgaWYgKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgdGhpcy5zYSkgewogICAgICAgICAgdmFyIHIgPSB0aGlzLkhhKCk7CiAgICAgICAgICByZXR1cm4gbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgciksIHI7CiAgICAgICAgfQogICAgICAgIHJldHVybiAwOwogICAgICB9CiAgICAgIGlmICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBybih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgIXRoaXMucmEgJiYgdC5BLmZhLnJhICYmIHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArICh0LkEuaGEgPyB0LkEuaGEubmFtZSA6IHQuQS5mYS5uYW1lKSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIHIgPSB3bih0LkEuZGEsIHQuQS5mYS5lYSwgdGhpcy5lYSksIHRoaXMuc2EpIHN3aXRjaCAodC5BLmdhID09PSB2b2lkIDAgJiYgdigiUGFzc2luZyByYXcgcG9pbnRlciB0byBzbWFydCBwb2ludGVyIGlzIGlsbGVnYWwiKSwgdGhpcy5QYSkgewogICAgICAgIGNhc2UgMDoKICAgICAgICAgIHQuQS5oYSA9PT0gdGhpcyA/IHIgPSB0LkEuZ2EgOiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyAodC5BLmhhID8gdC5BLmhhLm5hbWUgOiB0LkEuZmEubmFtZSkgKyAiIHRvIHBhcmFtZXRlciB0eXBlICIgKyB0aGlzLm5hbWUpOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAxOgogICAgICAgICAgciA9IHQuQS5nYTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIGlmICh0LkEuaGEgPT09IHRoaXMpIHIgPSB0LkEuZ2E7CiAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgdmFyIGkgPSB0LmNsb25lKCk7CiAgICAgICAgICAgIHIgPSB0aGlzLklhKHIsIGVuKGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIGkuZGVsZXRlKCk7CiAgICAgICAgICAgIH0pKSwgbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgcik7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdigiVW5zdXBwb3J0aW5nIHNoYXJpbmcgcG9saWN5Iik7CiAgICAgIH0KICAgICAgcmV0dXJuIHI7CiAgICB9CiAgICBmdW5jdGlvbiBlZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgcm4odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIHQuQS5mYS5yYSAmJiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyB0LkEuZmEubmFtZSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIHduKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiBBbihuKSB7CiAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShVW24gPj4gMl0pOwogICAgfQogICAgZnVuY3Rpb24gbXQobiwgdCwgcikgewogICAgICByZXR1cm4gdCA9PT0gciA/IG4gOiByLmlhID09PSB2b2lkIDAgPyBudWxsIDogKG4gPSBtdChuLCB0LCByLmlhKSwgbiA9PT0gbnVsbCA/IG51bGwgOiByLkFhKG4pKTsKICAgIH0KICAgIHZhciBmbiA9IHt9OwogICAgZnVuY3Rpb24gcmUobiwgdCkgewogICAgICBmb3IgKHQgPT09IHZvaWQgMCAmJiB2KCJwdHIgc2hvdWxkIG5vdCBiZSB1bmRlZmluZWQiKTsgbi5pYTsgKSB0ID0gbi5xYSh0KSwgbiA9IG4uaWE7CiAgICAgIHJldHVybiBmblt0XTsKICAgIH0KICAgIGZ1bmN0aW9uIF9uKG4sIHQpIHsKICAgICAgcmV0dXJuIHQuZmEgJiYgdC5kYSB8fCBnbigibWFrZUNsYXNzSGFuZGxlIHJlcXVpcmVzIHB0ciBhbmQgcHRyVHlwZSIpLCAhIXQuaGEgIT0gISF0LmdhICYmIGduKCJCb3RoIHNtYXJ0UHRyVHlwZSBhbmQgc21hcnRQdHIgbXVzdCBiZSBzcGVjaWZpZWQiKSwgdC5jb3VudCA9IHsgdmFsdWU6IDEgfSwgdW4oT2JqZWN0LmNyZWF0ZShuLCB7IEE6IHsgdmFsdWU6IHQgfSB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiBCKG4sIHQsIHIsIGkpIHsKICAgICAgdGhpcy5uYW1lID0gbiwgdGhpcy5lYSA9IHQsIHRoaXMudWEgPSByLCB0aGlzLnJhID0gaSwgdGhpcy5zYSA9ICExLCB0aGlzLm5hID0gdGhpcy5JYSA9IHRoaXMuSGEgPSB0aGlzLndhID0gdGhpcy5QYSA9IHRoaXMuR2EgPSB2b2lkIDAsIHQuaWEgIT09IHZvaWQgMCA/IHRoaXMudG9XaXJlVHlwZSA9IHRlIDogKHRoaXMudG9XaXJlVHlwZSA9IGkgPyBuZSA6IGVlLCB0aGlzLmthID0gbnVsbCk7CiAgICB9CiAgICBmdW5jdGlvbiB2dChuLCB0LCByKSB7CiAgICAgIGUuaGFzT3duUHJvcGVydHkobikgfHwgZ24oIlJlcGxhY2luZyBub25leGlzdGFudCBwdWJsaWMgc3ltYm9sIiksIGVbbl0uamEgIT09IHZvaWQgMCAmJiByICE9PSB2b2lkIDAgPyBlW25dLmphW3JdID0gdCA6IChlW25dID0gdCwgZVtuXS55YSA9IHIpOwogICAgfQogICAgZnVuY3Rpb24gRyhuLCB0KSB7CiAgICAgIG4gPSBSKG4pOwogICAgICB2YXIgciA9IHhuKG4sIHQpOwogICAgICByZXR1cm4gdHlwZW9mIHIgIT0gImZ1bmN0aW9uIiAmJiB2KCJ1bmtub3duIGZ1bmN0aW9uIHBvaW50ZXIgd2l0aCBzaWduYXR1cmUgIiArIG4gKyAiOiAiICsgdCksIHI7CiAgICB9CiAgICB2YXIgZ3QgPSB2b2lkIDA7CiAgICBmdW5jdGlvbiB3dChuKSB7CiAgICAgIG4gPSBXdChuKTsKICAgICAgdmFyIHQgPSBSKG4pOwogICAgICByZXR1cm4geihuKSwgdDsKICAgIH0KICAgIGZ1bmN0aW9uIGRuKG4sIHQpIHsKICAgICAgZnVuY3Rpb24gcihzKSB7CiAgICAgICAgb1tzXSB8fCBYW3NdIHx8ICh2bltzXSA/IHZuW3NdLmZvckVhY2gocikgOiAoaS5wdXNoKHMpLCBvW3NdID0gITApKTsKICAgICAgfQogICAgICB2YXIgaSA9IFtdLCBvID0ge307CiAgICAgIHRocm93IHQuZm9yRWFjaChyKSwgbmV3IGd0KG4gKyAiOiAiICsgaS5tYXAod3QpLmpvaW4oWyIsICJdKSk7CiAgICB9CiAgICBmdW5jdGlvbiBBdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSBbXSwgaSA9IDA7IGkgPCBuOyBpKyspIHIucHVzaChrWyh0ID4+IDIpICsgaV0pOwogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIENuKG4pIHsKICAgICAgZm9yICg7IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4ucG9wKCk7CiAgICAgICAgbi5wb3AoKSh0KTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gX3QobiwgdCwgcikgewogICAgICByZXR1cm4gbiBpbnN0YW5jZW9mIE9iamVjdCB8fCB2KHIgKyAnIHdpdGggaW52YWxpZCAidGhpcyI6ICcgKyBuKSwgbiBpbnN0YW5jZW9mIHQuZWEuY29uc3RydWN0b3IgfHwgdihyICsgJyBpbmNvbXBhdGlibGUgd2l0aCAidGhpcyIgb2YgdHlwZSAnICsgbi5jb25zdHJ1Y3Rvci5uYW1lKSwgbi5BLmRhIHx8IHYoImNhbm5vdCBjYWxsIGVtc2NyaXB0ZW4gYmluZGluZyBtZXRob2QgIiArIHIgKyAiIG9uIGRlbGV0ZWQgb2JqZWN0IiksIHduKG4uQS5kYSwgbi5BLmZhLmVhLCB0LmVhKTsKICAgIH0KICAgIHZhciBEbiA9IFtdLCBqID0gW3t9LCB7IHZhbHVlOiB2b2lkIDAgfSwgeyB2YWx1ZTogbnVsbCB9LCB7IHZhbHVlOiAhMCB9LCB7IHZhbHVlOiAhMSB9XTsKICAgIGZ1bmN0aW9uIEJuKG4pIHsKICAgICAgNCA8IG4gJiYgLS1qW25dLkphID09PSAwICYmIChqW25dID0gdm9pZCAwLCBEbi5wdXNoKG4pKTsKICAgIH0KICAgIGZ1bmN0aW9uIGVuKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSB2b2lkIDA6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIG51bGw6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlICEwOgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgY2FzZSAhMToKICAgICAgICAgIHJldHVybiA0OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB2YXIgdCA9IERuLmxlbmd0aCA/IERuLnBvcCgpIDogai5sZW5ndGg7CiAgICAgICAgICByZXR1cm4galt0XSA9IHsgSmE6IDEsIHZhbHVlOiBuIH0sIHQ7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHJuKG4pIHsKICAgICAgaWYgKG4gPT09IG51bGwpIHJldHVybiAibnVsbCI7CiAgICAgIHZhciB0ID0gdHlwZW9mIG47CiAgICAgIHJldHVybiB0ID09PSAib2JqZWN0IiB8fCB0ID09PSAiYXJyYXkiIHx8IHQgPT09ICJmdW5jdGlvbiIgPyBuLnRvU3RyaW5nKCkgOiAiIiArIG47CiAgICB9CiAgICBmdW5jdGlvbiBpZShuLCB0KSB7CiAgICAgIHN3aXRjaCAodCkgewogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiBmdW5jdGlvbihyKSB7CiAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShudFtyID4+IDJdKTsKICAgICAgICAgIH07CiAgICAgICAgY2FzZSAzOgogICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHIpIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKHR0W3IgPj4gM10pOwogICAgICAgICAgfTsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBmbG9hdCB0eXBlOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIGFlKG4pIHsKICAgICAgdmFyIHQgPSBGdW5jdGlvbjsKICAgICAgaWYgKCEodCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSkgdGhyb3cgbmV3IFR5cGVFcnJvcigibmV3XyBjYWxsZWQgd2l0aCBjb25zdHJ1Y3RvciB0eXBlICIgKyB0eXBlb2YgdCArICIgd2hpY2ggaXMgbm90IGEgZnVuY3Rpb24iKTsKICAgICAgdmFyIHIgPSBqbih0Lm5hbWUgfHwgInVua25vd25GdW5jdGlvbk5hbWUiLCBmdW5jdGlvbigpIHsKICAgICAgfSk7CiAgICAgIHJldHVybiByLnByb3RvdHlwZSA9IHQucHJvdG90eXBlLCByID0gbmV3IHIoKSwgbiA9IHQuYXBwbHkociwgbiksIG4gaW5zdGFuY2VvZiBPYmplY3QgPyBuIDogcjsKICAgIH0KICAgIGZ1bmN0aW9uIG9lKG4sIHQsIHIpIHsKICAgICAgc3dpdGNoICh0KSB7CiAgICAgICAgY2FzZSAwOgogICAgICAgICAgcmV0dXJuIHIgPyBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBZW2ldOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIEZbaV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMToKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gUVtpID4+IDFdOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIHluW2kgPj4gMV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4ga1tpID4+IDJdOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIFVbaSA+PiAyXTsKICAgICAgICAgIH07CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gaW50ZWdlciB0eXBlOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHpuKG4pIHsKICAgICAgcmV0dXJuIG4gfHwgdigiQ2Fubm90IHVzZSBkZWxldGVkIHZhbC4gaGFuZGxlID0gIiArIG4pLCBqW25dLnZhbHVlOwogICAgfQogICAgZnVuY3Rpb24gQ3QobiwgdCkgewogICAgICB2YXIgciA9IFhbbl07CiAgICAgIHJldHVybiByID09PSB2b2lkIDAgJiYgdih0ICsgIiBoYXMgdW5rbm93biB0eXBlICIgKyB3dChuKSksIHI7CiAgICB9CiAgICB2YXIgc2UgPSB7fSwgVHQgPSB7fTsKICAgIGZ1bmN0aW9uIEV0KCkgewogICAgICBpZiAoIVZuKSB7CiAgICAgICAgdmFyIG4gPSB7IFVTRVI6ICJ3ZWJfdXNlciIsIExPR05BTUU6ICJ3ZWJfdXNlciIsIFBBVEg6ICIvIiwgUFdEOiAiLyIsIEhPTUU6ICIvaG9tZS93ZWJfdXNlciIsIExBTkc6ICh0eXBlb2YgbmF2aWdhdG9yID09ICJvYmplY3QiICYmIG5hdmlnYXRvci5sYW5ndWFnZXMgJiYgbmF2aWdhdG9yLmxhbmd1YWdlc1swXSB8fCAiQyIpLnJlcGxhY2UoIi0iLCAiXyIpICsgIi5VVEYtOCIsIF86IE0gfHwgIi4vdGhpcy5wcm9ncmFtIiB9LCB0OwogICAgICAgIGZvciAodCBpbiBUdCkgblt0XSA9IFR0W3RdOwogICAgICAgIHZhciByID0gW107CiAgICAgICAgZm9yICh0IGluIG4pIHIucHVzaCh0ICsgIj0iICsgblt0XSk7CiAgICAgICAgVm4gPSByOwogICAgICB9CiAgICAgIHJldHVybiBWbjsKICAgIH0KICAgIHZhciBWbiwgUHQgPSBbXTsKICAgIGZ1bmN0aW9uIE10KG4pIHsKICAgICAgdmFyIHQgPSB7fSwgcjsKICAgICAgZm9yIChyIGluIG4pIChmdW5jdGlvbihpKSB7CiAgICAgICAgdmFyIG8gPSBuW2ldOwogICAgICAgIHRbaV0gPSB0eXBlb2YgbyA9PSAiZnVuY3Rpb24iID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICBQdC5wdXNoKGkpOwogICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgcmV0dXJuIG8uYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgICAgICAgIH0gZmluYWxseSB7CiAgICAgICAgICAgIGlmIChrbikgcmV0dXJuOwogICAgICAgICAgICB2YXIgcyA9IFB0LnBvcCgpOwogICAgICAgICAgICBLbihzID09PSBpKTsKICAgICAgICAgIH0KICAgICAgICB9IDogbzsKICAgICAgfSkocik7CiAgICAgIHJldHVybiB0OwogICAgfQogICAgZm9yICh2YXIgT3QgPSBBcnJheSgyNTYpLCBUbiA9IDA7IDI1NiA+IFRuOyArK1RuKSBPdFtUbl0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFRuKTsKICAgIGx0ID0gT3QsIG5uID0gZS5CaW5kaW5nRXJyb3IgPSBMbigiQmluZGluZ0Vycm9yIiksIGZ0ID0gZS5JbnRlcm5hbEVycm9yID0gTG4oIkludGVybmFsRXJyb3IiKSwgVi5wcm90b3R5cGUuaXNBbGlhc09mID0gZnVuY3Rpb24obikgewogICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgViAmJiBuIGluc3RhbmNlb2YgVikpIHJldHVybiAhMTsKICAgICAgdmFyIHQgPSB0aGlzLkEuZmEuZWEsIHIgPSB0aGlzLkEuZGEsIGkgPSBuLkEuZmEuZWE7CiAgICAgIGZvciAobiA9IG4uQS5kYTsgdC5pYTsgKSByID0gdC5xYShyKSwgdCA9IHQuaWE7CiAgICAgIGZvciAoOyBpLmlhOyApIG4gPSBpLnFhKG4pLCBpID0gaS5pYTsKICAgICAgcmV0dXJuIHQgPT09IGkgJiYgciA9PT0gbjsKICAgIH0sIFYucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7CiAgICAgIGlmICh0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5wYSkgcmV0dXJuIHRoaXMuQS5jb3VudC52YWx1ZSArPSAxLCB0aGlzOwogICAgICB2YXIgbiA9IHVuKE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLCB7IEE6IHsgdmFsdWU6IEt0KHRoaXMuQSkgfSB9KSk7CiAgICAgIHJldHVybiBuLkEuY291bnQudmFsdWUgKz0gMSwgbi5BLm9hID0gITEsIG47CiAgICB9LCBWLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbigpIHsKICAgICAgdGhpcy5BLmRhIHx8IE5uKHRoaXMpLCB0aGlzLkEub2EgJiYgIXRoaXMuQS5wYSAmJiB2KCJPYmplY3QgYWxyZWFkeSBzY2hlZHVsZWQgZm9yIGRlbGV0aW9uIiksIGR0KHRoaXMpLCBodCh0aGlzLkEpLCB0aGlzLkEucGEgfHwgKHRoaXMuQS5nYSA9IHZvaWQgMCwgdGhpcy5BLmRhID0gdm9pZCAwKTsKICAgIH0sIFYucHJvdG90eXBlLmlzRGVsZXRlZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gIXRoaXMuQS5kYTsKICAgIH0sIFYucHJvdG90eXBlLmRlbGV0ZUxhdGVyID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiB0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5vYSAmJiAhdGhpcy5BLnBhICYmIHYoIk9iamVjdCBhbHJlYWR5IHNjaGVkdWxlZCBmb3IgZGVsZXRpb24iKSwgbG4ucHVzaCh0aGlzKSwgbG4ubGVuZ3RoID09PSAxICYmIGNuICYmIGNuKFVuKSwgdGhpcy5BLm9hID0gITAsIHRoaXM7CiAgICB9LCBCLnByb3RvdHlwZS5EYSA9IGZ1bmN0aW9uKG4pIHsKICAgICAgcmV0dXJuIHRoaXMud2EgJiYgKG4gPSB0aGlzLndhKG4pKSwgbjsKICAgIH0sIEIucHJvdG90eXBlLnZhID0gZnVuY3Rpb24obikgewogICAgICB0aGlzLm5hICYmIHRoaXMubmEobik7CiAgICB9LCBCLnByb3RvdHlwZS5hcmdQYWNrQWR2YW5jZSA9IDgsIEIucHJvdG90eXBlLnJlYWRWYWx1ZUZyb21Qb2ludGVyID0gQW4sIEIucHJvdG90eXBlLmRlbGV0ZU9iamVjdCA9IGZ1bmN0aW9uKG4pIHsKICAgICAgbiAhPT0gbnVsbCAmJiBuLmRlbGV0ZSgpOwogICAgfSwgQi5wcm90b3R5cGUuZnJvbVdpcmVUeXBlID0gZnVuY3Rpb24obikgewogICAgICBmdW5jdGlvbiB0KCkgewogICAgICAgIHJldHVybiB0aGlzLnNhID8gX24odGhpcy5lYS5tYSwgeyBmYTogdGhpcy5HYSwgZGE6IHIsIGhhOiB0aGlzLCBnYTogbiB9KSA6IF9uKHRoaXMuZWEubWEsIHsgZmE6IHRoaXMsIGRhOiBuIH0pOwogICAgICB9CiAgICAgIHZhciByID0gdGhpcy5EYShuKTsKICAgICAgaWYgKCFyKSByZXR1cm4gdGhpcy52YShuKSwgbnVsbDsKICAgICAgdmFyIGkgPSByZSh0aGlzLmVhLCByKTsKICAgICAgaWYgKGkgIT09IHZvaWQgMCkKICAgICAgICByZXR1cm4gaS5BLmNvdW50LnZhbHVlID09PSAwID8gKGkuQS5kYSA9IHIsIGkuQS5nYSA9IG4sIGkuY2xvbmUoKSkgOiAoaSA9IGkuY2xvbmUoKSwgdGhpcy52YShuKSwgaSk7CiAgICAgIGlmIChpID0gdGhpcy5lYS5DYShyKSwgaSA9IHl0W2ldLCAhaSkgcmV0dXJuIHQuY2FsbCh0aGlzKTsKICAgICAgaSA9IHRoaXMucmEgPyBpLnphIDogaS5wb2ludGVyVHlwZTsKICAgICAgdmFyIG8gPSBtdChyLCB0aGlzLmVhLCBpLmVhKTsKICAgICAgcmV0dXJuIG8gPT09IG51bGwgPyB0LmNhbGwodGhpcykgOiB0aGlzLnNhID8gX24oaS5lYS5tYSwgeyBmYTogaSwgZGE6IG8sIGhhOiB0aGlzLCBnYTogbiB9KSA6IF9uKAogICAgICAgIGkuZWEubWEsCiAgICAgICAgeyBmYTogaSwgZGE6IG8gfQogICAgICApOwogICAgfSwgZS5nZXRJbmhlcml0ZWRJbnN0YW5jZUNvdW50ID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhmbikubGVuZ3RoOwogICAgfSwgZS5nZXRMaXZlSW5oZXJpdGVkSW5zdGFuY2VzID0gZnVuY3Rpb24oKSB7CiAgICAgIHZhciBuID0gW10sIHQ7CiAgICAgIGZvciAodCBpbiBmbikgZm4uaGFzT3duUHJvcGVydHkodCkgJiYgbi5wdXNoKGZuW3RdKTsKICAgICAgcmV0dXJuIG47CiAgICB9LCBlLmZsdXNoUGVuZGluZ0RlbGV0ZXMgPSBVbiwgZS5zZXREZWxheUZ1bmN0aW9uID0gZnVuY3Rpb24obikgewogICAgICBjbiA9IG4sIGxuLmxlbmd0aCAmJiBjbiAmJiBjbihVbik7CiAgICB9LCBndCA9IGUuVW5ib3VuZFR5cGVFcnJvciA9IExuKCJVbmJvdW5kVHlwZUVycm9yIiksIGUuY291bnRfZW12YWxfaGFuZGxlcyA9IGZ1bmN0aW9uKCkgewogICAgICBmb3IgKHZhciBuID0gMCwgdCA9IDU7IHQgPCBqLmxlbmd0aDsgKyt0KSBqW3RdICE9PSB2b2lkIDAgJiYgKytuOwogICAgICByZXR1cm4gbjsKICAgIH0sIGUuZ2V0X2ZpcnN0X2VtdmFsID0gZnVuY3Rpb24oKSB7CiAgICAgIGZvciAodmFyIG4gPSA1OyBuIDwgai5sZW5ndGg7ICsrbikgaWYgKGpbbl0gIT09IHZvaWQgMCkgcmV0dXJuIGpbbl07CiAgICAgIHJldHVybiBudWxsOwogICAgfSwgYXQucHVzaCh7IEJhOiBmdW5jdGlvbigpIHsKICAgICAgU3QoKTsKICAgIH0gfSk7CiAgICB2YXIgdWUgPSB7CiAgICAgIHo6IGZ1bmN0aW9uKG4pIHsKICAgICAgICByZXR1cm4gRW4obiArIDE2KSArIDE2OwogICAgICB9LAogICAgICB1OiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgdGhyb3cgbmV3IEp0KG4pLkZhKHQsIHIpLCAidW5jYXVnaHRfZXhjZXB0aW9uIiBpbiBtbiA/IG1uLnhhKysgOiBtbi54YSA9IDEsIG47CiAgICAgIH0sCiAgICAgIHc6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8pIHsKICAgICAgICB2YXIgcyA9IEZuKHIpOwogICAgICAgIHQgPSBSKHQpLCBEKG4sIHsgbmFtZTogdCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihsKSB7CiAgICAgICAgICByZXR1cm4gISFsOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGwsIGMpIHsKICAgICAgICAgIHJldHVybiBjID8gaSA6IG87CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBmdW5jdGlvbihsKSB7CiAgICAgICAgICBpZiAociA9PT0gMSkgdmFyIGMgPSBZOwogICAgICAgICAgZWxzZSBpZiAociA9PT0gMikgYyA9IFE7CiAgICAgICAgICBlbHNlIGlmIChyID09PSA0KSBjID0gazsKICAgICAgICAgIGVsc2UgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBib29sZWFuIHR5cGUgc2l6ZTogIiArIHQpOwogICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKGNbbCA+PiBzXSk7CiAgICAgICAgfSwga2E6IG51bGwgfSk7CiAgICAgIH0sCiAgICAgIGg6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8sIHMsIGwsIGMsIHksIGYsIGQsIGgsIHcpIHsKICAgICAgICBkID0gUihkKSwgcyA9IEcobywgcyksIGMgJiYgKGMgPSBHKGwsIGMpKSwgZiAmJiAoZiA9IEcoeSwgZikpLCB3ID0gRyhoLCB3KTsKICAgICAgICB2YXIgUCA9IEluKGQpOwogICAgICAgIHB0KFAsIGZ1bmN0aW9uKCkgewogICAgICAgICAgZG4oIkNhbm5vdCBjb25zdHJ1Y3QgIiArIGQgKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgW2ldKTsKICAgICAgICB9KSwgdG4oW24sIHQsIHJdLCBpID8gW2ldIDogW10sIGZ1bmN0aW9uKHApIHsKICAgICAgICAgIGlmIChwID0gcFswXSwgaSkKICAgICAgICAgICAgdmFyIE4gPSBwLmVhLCBiID0gTi5tYTsKICAgICAgICAgIGVsc2UgYiA9IFYucHJvdG90eXBlOwogICAgICAgICAgcCA9IGpuKFAsIGZ1bmN0aW9uKCkgewogICAgICAgICAgICBpZiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpICE9PSB4KSB0aHJvdyBuZXcgbm4oIlVzZSAnbmV3JyB0byBjb25zdHJ1Y3QgIiArIGQpOwogICAgICAgICAgICBpZiAoTC5sYSA9PT0gdm9pZCAwKSB0aHJvdyBuZXcgbm4oZCArICIgaGFzIG5vIGFjY2Vzc2libGUgY29uc3RydWN0b3IiKTsKICAgICAgICAgICAgdmFyIGJ0ID0gTC5sYVthcmd1bWVudHMubGVuZ3RoXTsKICAgICAgICAgICAgaWYgKGJ0ID09PSB2b2lkIDApIHRocm93IG5ldyBubigiVHJpZWQgdG8gaW52b2tlIGN0b3Igb2YgIiArIGQgKyAiIHdpdGggaW52YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVycyAoIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiKSAtIGV4cGVjdGVkICgiICsgT2JqZWN0LmtleXMoTC5sYSkudG9TdHJpbmcoKSArICIpIHBhcmFtZXRlcnMgaW5zdGVhZCEiKTsKICAgICAgICAgICAgcmV0dXJuIGJ0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgICB9KTsKICAgICAgICAgIHZhciB4ID0gT2JqZWN0LmNyZWF0ZShiLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBwIH0gfSk7CiAgICAgICAgICBwLnByb3RvdHlwZSA9IHg7CiAgICAgICAgICB2YXIgTCA9IG5ldyBxdChkLCBwLCB4LCB3LCBOLCBzLCBjLCBmKTsKICAgICAgICAgIE4gPSBuZXcgQihkLCBMLCAhMCwgITEpLCBiID0gbmV3IEIoZCArICIqIiwgTCwgITEsICExKTsKICAgICAgICAgIHZhciBobiA9IG5ldyBCKGQgKyAiIGNvbnN0KiIsIEwsICExLCAhMCk7CiAgICAgICAgICByZXR1cm4geXRbbl0gPSB7IHBvaW50ZXJUeXBlOiBiLCB6YTogaG4gfSwgdnQoUCwgcCksIFtOLCBiLCBobl07CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGc6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8sIHMpIHsKICAgICAgICBLbigwIDwgdCk7CiAgICAgICAgdmFyIGwgPSBBdCh0LCByKTsKICAgICAgICBvID0gRyhpLCBvKTsKICAgICAgICB2YXIgYyA9IFtzXSwgeSA9IFtdOwogICAgICAgIHRuKFtdLCBbbl0sIGZ1bmN0aW9uKGYpIHsKICAgICAgICAgIGYgPSBmWzBdOwogICAgICAgICAgdmFyIGQgPSAiY29uc3RydWN0b3IgIiArIGYubmFtZTsKICAgICAgICAgIGlmIChmLmVhLmxhID09PSB2b2lkIDAgJiYgKGYuZWEubGEgPSBbXSksIGYuZWEubGFbdCAtIDFdICE9PSB2b2lkIDApIHRocm93IG5ldyBubigiQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIGNvbnN0cnVjdG9ycyB3aXRoIGlkZW50aWNhbCBudW1iZXIgb2YgcGFyYW1ldGVycyAoIiArICh0IC0gMSkgKyAiKSBmb3IgY2xhc3MgJyIgKyBmLm5hbWUgKyAiJyEgT3ZlcmxvYWQgcmVzb2x1dGlvbiBpcyBjdXJyZW50bHkgb25seSBwZXJmb3JtZWQgdXNpbmcgdGhlIHBhcmFtZXRlciBjb3VudCwgbm90IGFjdHVhbCB0eXBlIGluZm8hIik7CiAgICAgICAgICByZXR1cm4gZi5lYS5sYVt0IC0gMV0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgZG4oIkNhbm5vdCBjb25zdHJ1Y3QgIiArIGYubmFtZSArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBsKTsKICAgICAgICAgIH0sIHRuKFtdLCBsLCBmdW5jdGlvbihoKSB7CiAgICAgICAgICAgIHJldHVybiBmLmVhLmxhW3QgLSAxXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIGFyZ3VtZW50cy5sZW5ndGggIT09IHQgLSAxICYmIHYoZCArICIgY2FsbGVkIHdpdGggIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiIGFyZ3VtZW50cywgZXhwZWN0ZWQgIiArICh0IC0gMSkpLCB5Lmxlbmd0aCA9IDAsIGMubGVuZ3RoID0gdDsKICAgICAgICAgICAgICBmb3IgKHZhciB3ID0gMTsgdyA8IHQ7ICsrdykgY1t3XSA9IGhbd10udG9XaXJlVHlwZSgKICAgICAgICAgICAgICAgIHksCiAgICAgICAgICAgICAgICBhcmd1bWVudHNbdyAtIDFdCiAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICByZXR1cm4gdyA9IG8uYXBwbHkobnVsbCwgYyksIENuKHkpLCBoWzBdLmZyb21XaXJlVHlwZSh3KTsKICAgICAgICAgICAgfSwgW107CiAgICAgICAgICB9KSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGI6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8sIHMsIGwsIGMsIHksIGYpIHsKICAgICAgICB0ID0gUih0KSwgbyA9IEcoaSwgbyksIHRuKFtdLCBbbl0sIGZ1bmN0aW9uKGQpIHsKICAgICAgICAgIGQgPSBkWzBdOwogICAgICAgICAgdmFyIGggPSBkLm5hbWUgKyAiLiIgKyB0LCB3ID0geyBnZXQ6IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBkbigiQ2Fubm90IGFjY2VzcyAiICsgaCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbciwgbF0pOwogICAgICAgICAgfSwgZW51bWVyYWJsZTogITAsIGNvbmZpZ3VyYWJsZTogITAgfTsKICAgICAgICAgIHJldHVybiB5ID8gdy5zZXQgPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgZG4oIkNhbm5vdCBhY2Nlc3MgIiArIGggKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgW3IsIGxdKTsKICAgICAgICAgIH0gOiB3LnNldCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICB2KGggKyAiIGlzIGEgcmVhZC1vbmx5IHByb3BlcnR5Iik7CiAgICAgICAgICB9LCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZC5lYS5tYSwgdCwgdyksIHRuKFtdLCB5ID8gW3IsIGxdIDogW3JdLCBmdW5jdGlvbihQKSB7CiAgICAgICAgICAgIHZhciBwID0gUFswXSwgTiA9IHsgZ2V0OiBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICB2YXIgeCA9IF90KHRoaXMsIGQsIGggKyAiIGdldHRlciIpOwogICAgICAgICAgICAgIHJldHVybiBwLmZyb21XaXJlVHlwZShvKHMsIHgpKTsKICAgICAgICAgICAgfSwgZW51bWVyYWJsZTogITAgfTsKICAgICAgICAgICAgaWYgKHkpIHsKICAgICAgICAgICAgICB5ID0gRyhjLCB5KTsKICAgICAgICAgICAgICB2YXIgYiA9IFBbMV07CiAgICAgICAgICAgICAgTi5zZXQgPSBmdW5jdGlvbih4KSB7CiAgICAgICAgICAgICAgICB2YXIgTCA9IF90KHRoaXMsIGQsIGggKyAiIHNldHRlciIpLCBobiA9IFtdOwogICAgICAgICAgICAgICAgeShmLCBMLCBiLnRvV2lyZVR5cGUoaG4sIHgpKSwgQ24oaG4pOwogICAgICAgICAgICAgIH07CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkLmVhLm1hLCB0LCBOKSwgW107CiAgICAgICAgICB9KSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIHY6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUih0KSwgRChuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24ocikgewogICAgICAgICAgdmFyIGkgPSBqW3JdLnZhbHVlOwogICAgICAgICAgcmV0dXJuIEJuKHIpLCBpOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHIsIGkpIHsKICAgICAgICAgIHJldHVybiBlbihpKTsKICAgICAgICB9LCBhcmdQYWNrQWR2YW5jZTogOCwgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IEFuLCBrYTogbnVsbCB9KTsKICAgICAgfSwKICAgICAgbTogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIHIgPSBGbihyKSwgdCA9IFIodCksIEQobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gaTsKICAgICAgICAgIH0sCiAgICAgICAgICB0b1dpcmVUeXBlOiBmdW5jdGlvbihpLCBvKSB7CiAgICAgICAgICAgIGlmICh0eXBlb2YgbyAhPSAibnVtYmVyIiAmJiB0eXBlb2YgbyAhPSAiYm9vbGVhbiIpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0ICInICsgcm4obykgKyAnIiB0byAnICsgdGhpcy5uYW1lKTsKICAgICAgICAgICAgcmV0dXJuIG87CiAgICAgICAgICB9LAogICAgICAgICAgYXJnUGFja0FkdmFuY2U6IDgsCiAgICAgICAgICByZWFkVmFsdWVGcm9tUG9pbnRlcjogaWUodCwgciksCiAgICAgICAgICBrYTogbnVsbAogICAgICAgIH0pOwogICAgICB9LAogICAgICBjOiBmdW5jdGlvbihuLCB0LCByLCBpLCBvLCBzKSB7CiAgICAgICAgdmFyIGwgPSBBdCh0LCByKTsKICAgICAgICBuID0gUihuKSwgbyA9IEcoaSwgbyksIHB0KG4sIGZ1bmN0aW9uKCkgewogICAgICAgICAgZG4oIkNhbm5vdCBjYWxsICIgKyBuICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIGwpOwogICAgICAgIH0sIHQgLSAxKSwgdG4oW10sIGwsIGZ1bmN0aW9uKGMpIHsKICAgICAgICAgIHZhciB5ID0gbiwgZiA9IG47CiAgICAgICAgICBjID0gW2NbMF0sIG51bGxdLmNvbmNhdChjLnNsaWNlKDEpKTsKICAgICAgICAgIHZhciBkID0gbywgaCA9IGMubGVuZ3RoOwogICAgICAgICAgMiA+IGggJiYgdigiYXJnVHlwZXMgYXJyYXkgc2l6ZSBtaXNtYXRjaCEgTXVzdCBhdCBsZWFzdCBnZXQgcmV0dXJuIHZhbHVlIGFuZCAndGhpcycgdHlwZXMhIik7CiAgICAgICAgICBmb3IgKHZhciB3ID0gY1sxXSAhPT0gbnVsbCAmJiAhMSwgUCA9ICExLCBwID0gMTsgcCA8IGMubGVuZ3RoOyArK3ApIGlmIChjW3BdICE9PSBudWxsICYmIGNbcF0ua2EgPT09IHZvaWQgMCkgewogICAgICAgICAgICBQID0gITA7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgfQogICAgICAgICAgdmFyIE4gPSBjWzBdLm5hbWUgIT09ICJ2b2lkIiwgYiA9ICIiLCB4ID0gIiI7CiAgICAgICAgICBmb3IgKHAgPSAwOyBwIDwgaCAtIDI7ICsrcCkgYiArPSAocCAhPT0gMCA/ICIsICIgOiAiIikgKyAiYXJnIiArIHAsIHggKz0gKHAgIT09IDAgPyAiLCAiIDogIiIpICsgImFyZyIgKyBwICsgIldpcmVkIjsKICAgICAgICAgIGYgPSAicmV0dXJuIGZ1bmN0aW9uICIgKyBJbihmKSArICIoIiArIGIgKyBgKSB7CmlmIChhcmd1bWVudHMubGVuZ3RoICE9PSBgICsgKGggLSAyKSArIGApIHsKdGhyb3dCaW5kaW5nRXJyb3IoJ2Z1bmN0aW9uIGAgKyBmICsgIiBjYWxsZWQgd2l0aCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLCBleHBlY3RlZCAiICsgKGggLSAyKSArIGAgYXJncyEnKTsKfQpgLCBQICYmIChmICs9IGB2YXIgZGVzdHJ1Y3RvcnMgPSBbXTsKYCk7CiAgICAgICAgICB2YXIgTCA9IFAgPyAiZGVzdHJ1Y3RvcnMiIDogIm51bGwiOwogICAgICAgICAgZm9yIChiID0gInRocm93QmluZGluZ0Vycm9yIGludm9rZXIgZm4gcnVuRGVzdHJ1Y3RvcnMgcmV0VHlwZSBjbGFzc1BhcmFtIi5zcGxpdCgiICIpLCBkID0gW3YsIGQsIHMsIENuLCBjWzBdLCBjWzFdXSwgdyAmJiAoZiArPSAidmFyIHRoaXNXaXJlZCA9IGNsYXNzUGFyYW0udG9XaXJlVHlwZSgiICsgTCArIGAsIHRoaXMpOwpgKSwgcCA9IDA7IHAgPCBoIC0gMjsgKytwKSBmICs9ICJ2YXIgYXJnIiArIHAgKyAiV2lyZWQgPSBhcmdUeXBlIiArIHAgKyAiLnRvV2lyZVR5cGUoIiArIEwgKyAiLCBhcmciICsgcCArICIpOyAvLyAiICsgY1twICsgMl0ubmFtZSArIGAKYCwgYi5wdXNoKCJhcmdUeXBlIiArIHApLCBkLnB1c2goY1twICsgMl0pOwogICAgICAgICAgaWYgKHcgJiYgKHggPSAidGhpc1dpcmVkIiArICgwIDwgeC5sZW5ndGggPyAiLCAiIDogIiIpICsgeCksIGYgKz0gKE4gPyAidmFyIHJ2ID0gIiA6ICIiKSArICJpbnZva2VyKGZuIiArICgwIDwgeC5sZW5ndGggPyAiLCAiIDogIiIpICsgeCArIGApOwpgLCBQKSBmICs9IGBydW5EZXN0cnVjdG9ycyhkZXN0cnVjdG9ycyk7CmA7CiAgICAgICAgICBlbHNlIGZvciAocCA9IHcgPyAxIDogMjsgcCA8IGMubGVuZ3RoOyArK3ApIGggPSBwID09PSAxID8gInRoaXNXaXJlZCIgOiAiYXJnIiArIChwIC0gMikgKyAiV2lyZWQiLCBjW3BdLmthICE9PSBudWxsICYmIChmICs9IGggKyAiX2R0b3IoIiArIGggKyAiKTsgLy8gIiArIGNbcF0ubmFtZSArIGAKYCwgYi5wdXNoKGggKyAiX2R0b3IiKSwgZC5wdXNoKGNbcF0ua2EpKTsKICAgICAgICAgIHJldHVybiBOICYmIChmICs9IGB2YXIgcmV0ID0gcmV0VHlwZS5mcm9tV2lyZVR5cGUocnYpOwpyZXR1cm4gcmV0OwpgKSwgYi5wdXNoKGYgKyBgfQpgKSwgYyA9IGFlKGIpLmFwcGx5KG51bGwsIGQpLCB2dCh5LCBjLCB0IC0gMSksIFtdOwogICAgICAgIH0pOwogICAgICB9LAogICAgICBlOiBmdW5jdGlvbihuLCB0LCByLCBpLCBvKSB7CiAgICAgICAgZnVuY3Rpb24gcyhmKSB7CiAgICAgICAgICByZXR1cm4gZjsKICAgICAgICB9CiAgICAgICAgdCA9IFIodCksIG8gPT09IC0xICYmIChvID0gNDI5NDk2NzI5NSk7CiAgICAgICAgdmFyIGwgPSBGbihyKTsKICAgICAgICBpZiAoaSA9PT0gMCkgewogICAgICAgICAgdmFyIGMgPSAzMiAtIDggKiByOwogICAgICAgICAgcyA9IGZ1bmN0aW9uKGYpIHsKICAgICAgICAgICAgcmV0dXJuIGYgPDwgYyA+Pj4gYzsKICAgICAgICAgIH07CiAgICAgICAgfQogICAgICAgIHZhciB5ID0gdC5pbmRleE9mKCJ1bnNpZ25lZCIpICE9IC0xOwogICAgICAgIEQobiwgeyBuYW1lOiB0LCBmcm9tV2lyZVR5cGU6IHMsIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGYsIGQpIHsKICAgICAgICAgIGlmICh0eXBlb2YgZCAhPSAibnVtYmVyIiAmJiB0eXBlb2YgZCAhPSAiYm9vbGVhbiIpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0ICInICsgcm4oZCkgKyAnIiB0byAnICsgdGhpcy5uYW1lKTsKICAgICAgICAgIGlmIChkIDwgaSB8fCBkID4gbykgdGhyb3cgbmV3IFR5cGVFcnJvcignUGFzc2luZyBhIG51bWJlciAiJyArIHJuKGQpICsgJyIgZnJvbSBKUyBzaWRlIHRvIEMvQysrIHNpZGUgdG8gYW4gYXJndW1lbnQgb2YgdHlwZSAiJyArIHQgKyAnIiwgd2hpY2ggaXMgb3V0c2lkZSB0aGUgdmFsaWQgcmFuZ2UgWycgKyBpICsgIiwgIiArIG8gKyAiXSEiKTsKICAgICAgICAgIHJldHVybiB5ID8gZCA+Pj4gMCA6IGQgfCAwOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogb2UodCwgbCwgaSAhPT0gMCksIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBkOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgZnVuY3Rpb24gaShzKSB7CiAgICAgICAgICBzID4+PSAyOwogICAgICAgICAgdmFyIGwgPSBVOwogICAgICAgICAgcmV0dXJuIG5ldyBvKEssIGxbcyArIDFdLCBsW3NdKTsKICAgICAgICB9CiAgICAgICAgdmFyIG8gPSBbSW50OEFycmF5LCBVaW50OEFycmF5LCBJbnQxNkFycmF5LCBVaW50MTZBcnJheSwgSW50MzJBcnJheSwgVWludDMyQXJyYXksIEZsb2F0MzJBcnJheSwgRmxvYXQ2NEFycmF5XVt0XTsKICAgICAgICByID0gUihyKSwgRChuLCB7IG5hbWU6IHIsIGZyb21XaXJlVHlwZTogaSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBpIH0sIHsgRWE6ICEwIH0pOwogICAgICB9LAogICAgICBuOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdCA9IFIodCk7CiAgICAgICAgdmFyIHIgPSB0ID09PSAic3RkOjpzdHJpbmciOwogICAgICAgIEQobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICB2YXIgbyA9IFVbaSA+PiAyXTsKICAgICAgICAgICAgaWYgKHIpIGZvciAodmFyIHMgPSBpICsgNCwgbCA9IDA7IGwgPD0gbzsgKytsKSB7CiAgICAgICAgICAgICAgdmFyIGMgPSBpICsgNCArIGw7CiAgICAgICAgICAgICAgaWYgKGwgPT0gbyB8fCBGW2NdID09IDApIHsKICAgICAgICAgICAgICAgIGlmIChzKSB7CiAgICAgICAgICAgICAgICAgIHZhciB5ID0gcywgZiA9IEYsIGQgPSB5ICsgKGMgLSBzKTsKICAgICAgICAgICAgICAgICAgZm9yIChzID0geTsgZltzXSAmJiAhKHMgPj0gZCk7ICkgKytzOwogICAgICAgICAgICAgICAgICBpZiAoMTYgPCBzIC0geSAmJiBmLnN1YmFycmF5ICYmIFFuKSB5ID0gUW4uZGVjb2RlKGYuc3ViYXJyYXkoeSwgcykpOwogICAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICBmb3IgKGQgPSAiIjsgeSA8IHM7ICkgewogICAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBmW3krK107CiAgICAgICAgICAgICAgICAgICAgICBpZiAoaCAmIDEyOCkgewogICAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IGZbeSsrXSAmIDYzOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGggJiAyMjQpID09IDE5MikgZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChoICYgMzEpIDw8IDYgfCB3KTsKICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFAgPSBmW3krK10gJiA2MzsKICAgICAgICAgICAgICAgICAgICAgICAgICBoID0gKGggJiAyNDApID09IDIyNCA/IChoICYgMTUpIDw8IDEyIHwgdyA8PCA2IHwgUCA6IChoICYgNykgPDwgMTggfCB3IDw8IDEyIHwgUCA8PCA2IHwgZlt5KytdICYgNjMsIDY1NTM2ID4gaCA/IGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShoKSA6IChoIC09IDY1NTM2LCBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTYgfCBoID4+IDEwLCA1NjMyMCB8IGggJiAxMDIzKSk7CiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoaCk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIHkgPSBkOwogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9IGVsc2UgeSA9ICIiOwogICAgICAgICAgICAgICAgaWYgKHAgPT09IHZvaWQgMCkgdmFyIHAgPSB5OwogICAgICAgICAgICAgICAgZWxzZSBwICs9ICJcMCIsIHAgKz0geTsKICAgICAgICAgICAgICAgIHMgPSBjICsgMTsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgZm9yIChwID0gQXJyYXkobyksIGwgPSAwOyBsIDwgbzsgKytsKSBwW2xdID0gU3RyaW5nLmZyb21DaGFyQ29kZShGW2kgKyA0ICsgbF0pOwogICAgICAgICAgICAgIHAgPSBwLmpvaW4oIiIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiB6KGkpLCBwOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIG8pIHsKICAgICAgICAgICAgbyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyICYmIChvID0gbmV3IFVpbnQ4QXJyYXkobykpOwogICAgICAgICAgICB2YXIgcyA9IHR5cGVvZiBvID09ICJzdHJpbmciOwogICAgICAgICAgICBzIHx8IG8gaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IG8gaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSB8fCBvIGluc3RhbmNlb2YgSW50OEFycmF5IHx8IHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gc3RkOjpzdHJpbmciKTsKICAgICAgICAgICAgdmFyIGwgPSAociAmJiBzID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IDAsIGQgPSAwOyBkIDwgby5sZW5ndGg7ICsrZCkgewogICAgICAgICAgICAgICAgdmFyIGggPSBvLmNoYXJDb2RlQXQoZCk7CiAgICAgICAgICAgICAgICA1NTI5NiA8PSBoICYmIDU3MzQzID49IGggJiYgKGggPSA2NTUzNiArICgoaCAmIDEwMjMpIDw8IDEwKSB8IG8uY2hhckNvZGVBdCgrK2QpICYgMTAyMyksIDEyNyA+PSBoID8gKytmIDogZiA9IDIwNDcgPj0gaCA/IGYgKyAyIDogNjU1MzUgPj0gaCA/IGYgKyAzIDogZiArIDQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHJldHVybiBmOwogICAgICAgICAgICB9IDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgcmV0dXJuIG8ubGVuZ3RoOwogICAgICAgICAgICB9KSgpLCBjID0gRW4oNCArIGwgKyAxKTsKICAgICAgICAgICAgaWYgKFVbYyA+PiAyXSA9IGwsIHIgJiYgcykgVXQobywgYyArIDQsIGwgKyAxKTsKICAgICAgICAgICAgZWxzZSBpZiAocykgZm9yIChzID0gMDsgcyA8IGw7ICsrcykgewogICAgICAgICAgICAgIHZhciB5ID0gby5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgICAgIDI1NSA8IHkgJiYgKHooYyksIHYoIlN0cmluZyBoYXMgVVRGLTE2IGNvZGUgdW5pdHMgdGhhdCBkbyBub3QgZml0IGluIDggYml0cyIpKSwgRltjICsgNCArIHNdID0geTsKICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIGZvciAocyA9IDA7IHMgPCBsOyArK3MpIEZbYyArIDQgKyBzXSA9IG9bc107CiAgICAgICAgICAgIHJldHVybiBpICE9PSBudWxsICYmIGkucHVzaCh6LCBjKSwgYzsKICAgICAgICAgIH0sCiAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBBbiwKICAgICAgICAgIGthOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHooaSk7CiAgICAgICAgICB9CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGo6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBpZiAociA9IFIociksIHQgPT09IDIpCiAgICAgICAgICB2YXIgaSA9IER0LCBvID0gQnQsIHMgPSB6dCwgbCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICByZXR1cm4geW47CiAgICAgICAgICB9LCBjID0gMTsKICAgICAgICBlbHNlIHQgPT09IDQgJiYgKGkgPSBWdCwgbyA9IEd0LCBzID0gWXQsIGwgPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiBVOwogICAgICAgIH0sIGMgPSAyKTsKICAgICAgICBEKG4sIHsgbmFtZTogciwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICBmb3IgKHZhciBmID0gVVt5ID4+IDJdLCBkID0gbCgpLCBoLCB3ID0geSArIDQsIFAgPSAwOyBQIDw9IGY7ICsrUCkgewogICAgICAgICAgICB2YXIgcCA9IHkgKyA0ICsgUCAqIHQ7CiAgICAgICAgICAgIChQID09IGYgfHwgZFtwID4+IGNdID09IDApICYmICh3ID0gaSh3LCBwIC0gdyksIGggPT09IHZvaWQgMCA/IGggPSB3IDogKGggKz0gIlwwIiwgaCArPSB3KSwgdyA9IHAgKyB0KTsKICAgICAgICAgIH0KICAgICAgICAgIHJldHVybiB6KHkpLCBoOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHksIGYpIHsKICAgICAgICAgIHR5cGVvZiBmICE9ICJzdHJpbmciICYmIHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gQysrIHN0cmluZyB0eXBlICIgKyByKTsKICAgICAgICAgIHZhciBkID0gcyhmKSwgaCA9IEVuKDQgKyBkICsgdCk7CiAgICAgICAgICByZXR1cm4gVVtoID4+IDJdID0gZCA+PiBjLCBvKGYsIGggKyA0LCBkICsgdCksIHkgIT09IG51bGwgJiYgeS5wdXNoKHosIGgpLCBoOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sIGthOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICB6KHkpOwogICAgICAgIH0gfSk7CiAgICAgIH0sCiAgICAgIHg6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUih0KSwgRChuLCB7IFFhOiAhMCwgbmFtZTogdCwgYXJnUGFja0FkdmFuY2U6IDAsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSB9KTsKICAgICAgfSwKICAgICAgazogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIG4gPSB6bihuKSwgdCA9IEN0KHQsICJlbXZhbDo6YXMiKTsKICAgICAgICB2YXIgaSA9IFtdLCBvID0gZW4oaSk7CiAgICAgICAgcmV0dXJuIGtbciA+PiAyXSA9IG8sIHQudG9XaXJlVHlwZShpLCBuKTsKICAgICAgfSwKICAgICAgaTogQm4sCiAgICAgIGw6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICByZXR1cm4gbiA9IHpuKG4pLCB0ID0gem4odCksIGVuKG5bdF0pOwogICAgICB9LAogICAgICBwOiBmdW5jdGlvbihuKSB7CiAgICAgICAgdmFyIHQgPSBzZVtuXTsKICAgICAgICByZXR1cm4gZW4odCA9PT0gdm9pZCAwID8gUihuKSA6IHQpOwogICAgICB9LAogICAgICBvOiBmdW5jdGlvbihuKSB7CiAgICAgICAgQ24oaltuXS52YWx1ZSksIEJuKG4pOwogICAgICB9LAogICAgICB5OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgcmV0dXJuIG4gPSBDdChuLCAiX2VtdmFsX3Rha2VfdmFsdWUiKSwgbiA9IG4ucmVhZFZhbHVlRnJvbVBvaW50ZXIodCksIGVuKG4pOwogICAgICB9LAogICAgICBmOiBmdW5jdGlvbigpIHsKICAgICAgICBzbigpOwogICAgICB9LAogICAgICBxOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgRi5jb3B5V2l0aGluKG4sIHQsIHQgKyByKTsKICAgICAgfSwKICAgICAgcjogZnVuY3Rpb24obikgewogICAgICAgIG4gPj4+PSAwOwogICAgICAgIHZhciB0ID0gRi5sZW5ndGg7CiAgICAgICAgaWYgKDIxNDc0ODM2NDggPCBuKSByZXR1cm4gITE7CiAgICAgICAgZm9yICh2YXIgciA9IDE7IDQgPj0gcjsgciAqPSAyKSB7CiAgICAgICAgICB2YXIgaSA9IHQgKiAoMSArIDAuMiAvIHIpOwogICAgICAgICAgaSA9IE1hdGgubWluKGksIG4gKyAxMDA2NjMyOTYpLCBpID0gTWF0aC5tYXgoMTY3NzcyMTYsIG4sIGkpLCAwIDwgaSAlIDY1NTM2ICYmIChpICs9IDY1NTM2IC0gaSAlIDY1NTM2KTsKICAgICAgICAgIG46IHsKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICBILmdyb3coTWF0aC5taW4oMjE0NzQ4MzY0OCwgaSkgLSBLLmJ5dGVMZW5ndGggKyA2NTUzNSA+Pj4gMTYpLCBldChILmJ1ZmZlcik7CiAgICAgICAgICAgICAgdmFyIG8gPSAxOwogICAgICAgICAgICAgIGJyZWFrIG47CiAgICAgICAgICAgIH0gY2F0Y2ggewogICAgICAgICAgICB9CiAgICAgICAgICAgIG8gPSB2b2lkIDA7CiAgICAgICAgICB9CiAgICAgICAgICBpZiAobykgcmV0dXJuICEwOwogICAgICAgIH0KICAgICAgICByZXR1cm4gITE7CiAgICAgIH0sCiAgICAgIHM6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB2YXIgciA9IDA7CiAgICAgICAgcmV0dXJuIEV0KCkuZm9yRWFjaChmdW5jdGlvbihpLCBvKSB7CiAgICAgICAgICB2YXIgcyA9IHQgKyByOwogICAgICAgICAgZm9yIChvID0ga1tuICsgNCAqIG8gPj4gMl0gPSBzLCBzID0gMDsgcyA8IGkubGVuZ3RoOyArK3MpIFlbbysrID4+IDBdID0gaS5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgWVtvID4+IDBdID0gMCwgciArPSBpLmxlbmd0aCArIDE7CiAgICAgICAgfSksIDA7CiAgICAgIH0sCiAgICAgIHQ6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB2YXIgciA9IEV0KCk7CiAgICAgICAga1tuID4+IDJdID0gci5sZW5ndGg7CiAgICAgICAgdmFyIGkgPSAwOwogICAgICAgIHJldHVybiByLmZvckVhY2goZnVuY3Rpb24obykgewogICAgICAgICAgaSArPSBvLmxlbmd0aCArIDE7CiAgICAgICAgfSksIGtbdCA+PiAyXSA9IGksIDA7CiAgICAgIH0sCiAgICAgIGE6IEgKICAgIH07CiAgICAoZnVuY3Rpb24oKSB7CiAgICAgIGZ1bmN0aW9uIG4ocykgewogICAgICAgIHMgPSBzLmV4cG9ydHMsIHMgPSBNdChzKSwgZS5hc20gPSBzLCBaLS0sIGUubW9uaXRvclJ1bkRlcGVuZGVuY2llcyAmJiBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMoWiksIFogPT0gMCAmJiBvbiAmJiAocyA9IG9uLCBvbiA9IG51bGwsIHMoKSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gdChzKSB7CiAgICAgICAgbihzLmluc3RhbmNlKTsKICAgICAgfQogICAgICBmdW5jdGlvbiByKHMpIHsKICAgICAgICByZXR1cm4gWHQoKS50aGVuKGZ1bmN0aW9uKGwpIHsKICAgICAgICAgIHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShsLCBpKTsKICAgICAgICB9KS50aGVuKHMsIGZ1bmN0aW9uKGwpIHsKICAgICAgICAgIEUoImZhaWxlZCB0byBhc3luY2hyb25vdXNseSBwcmVwYXJlIHdhc206ICIgKyBsKSwgc24obCk7CiAgICAgICAgfSk7CiAgICAgIH0KICAgICAgdmFyIGkgPSB7IGE6IHVlIH07CiAgICAgIGlmIChaKyssIGUubW9uaXRvclJ1bkRlcGVuZGVuY2llcyAmJiBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMoWiksIGUuaW5zdGFudGlhdGVXYXNtKSB0cnkgewogICAgICAgIHZhciBvID0gZS5pbnN0YW50aWF0ZVdhc20oaSwgbik7CiAgICAgICAgcmV0dXJuIG8gPSBNdChvKTsKICAgICAgfSBjYXRjaCAocykgewogICAgICAgIHJldHVybiBFKCJNb2R1bGUuaW5zdGFudGlhdGVXYXNtIGNhbGxiYWNrIGZhaWxlZCB3aXRoIGVycm9yOiAiICsgcyksICExOwogICAgICB9CiAgICAgIHJldHVybiBmdW5jdGlvbigpIHsKICAgICAgICBpZiAoVyB8fCB0eXBlb2YgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcgIT0gImZ1bmN0aW9uIiB8fCBzdCgpIHx8IFJuKCJmaWxlOi8vIikgfHwgdHlwZW9mIGZldGNoICE9ICJmdW5jdGlvbiIpIHJldHVybiByKHQpOwogICAgICAgIGZldGNoKCQsIHsgY3JlZGVudGlhbHM6ICJzYW1lLW9yaWdpbiIgfSkudGhlbihmdW5jdGlvbihzKSB7CiAgICAgICAgICByZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcocywgaSkudGhlbih0LCBmdW5jdGlvbihsKSB7CiAgICAgICAgICAgIHJldHVybiBFKCJ3YXNtIHN0cmVhbWluZyBjb21waWxlIGZhaWxlZDogIiArIGwpLCBFKCJmYWxsaW5nIGJhY2sgdG8gQXJyYXlCdWZmZXIgaW5zdGFudGlhdGlvbiIpLCByKHQpOwogICAgICAgICAgfSk7CiAgICAgICAgfSk7CiAgICAgIH0oKSwge307CiAgICB9KSgpOwogICAgdmFyIFN0ID0gZS5fX193YXNtX2NhbGxfY3RvcnMgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChTdCA9IGUuX19fd2FzbV9jYWxsX2N0b3JzID0gZS5hc20uQikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIEVuID0gZS5fbWFsbG9jID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoRW4gPSBlLl9tYWxsb2MgPSBlLmFzbS5DKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgeiA9IGUuX2ZyZWUgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuICh6ID0gZS5fZnJlZSA9IGUuYXNtLkQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBXdCA9IGUuX19fZ2V0VHlwZU5hbWUgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChXdCA9IGUuX19fZ2V0VHlwZU5hbWUgPSBlLmFzbS5FKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfTsKICAgIGUuX19fZW1iaW5kX3JlZ2lzdGVyX25hdGl2ZV9hbmRfYnVpbHRpbl90eXBlcyA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX19fZW1iaW5kX3JlZ2lzdGVyX25hdGl2ZV9hbmRfYnVpbHRpbl90eXBlcyA9IGUuYXNtLkYpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWkgPSBlLmFzbS5HKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpID0gZS5hc20uSCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9pID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2kgPSBlLmFzbS5JKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWkgPSBlLmFzbS5KKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaSA9IGUuYXNtLkspLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfZmlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2ZpaSA9IGUuYXNtLkwpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpZiA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlmID0gZS5hc20uTSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaSA9IGUuYXNtLk4pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpID0gZS5hc20uTykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWlpID0gZS5hc20uUCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpID0gZS5hc20uUSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWlpaSA9IGUuYXNtLlIpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWkgPSBlLmFzbS5TKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWlkaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlpZGkgPSBlLmFzbS5UKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWRpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWRpID0gZS5hc20uVSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlpaSA9IGUuYXNtLlYpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlpID0gZS5hc20uVykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpID0gZS5hc20uWCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpaWkgPSBlLmFzbS5ZKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpID0gZS5hc20uWikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWkgPSBlLmFzbS5fKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RhcnRfdW53aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RhcnRfdW53aW5kID0gZS5hc20uJCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0b3BfdW53aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RvcF91bndpbmQgPSBlLmFzbS5hYSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0YXJ0X3Jld2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0YXJ0X3Jld2luZCA9IGUuYXNtLmJhKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RvcF9yZXdpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdG9wX3Jld2luZCA9IGUuYXNtLmNhKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfTsKICAgIHZhciBQbjsKICAgIG9uID0gZnVuY3Rpb24gbigpIHsKICAgICAgUG4gfHwgR24oKSwgUG4gfHwgKG9uID0gbik7CiAgICB9OwogICAgZnVuY3Rpb24gR24oKSB7CiAgICAgIGZ1bmN0aW9uIG4oKSB7CiAgICAgICAgaWYgKCFQbiAmJiAoUG4gPSAhMCwgZS5jYWxsZWRSdW4gPSAhMCwgIWtuKSkgewogICAgICAgICAgaWYgKHBuKGF0KSwgcG4oWnQpLCBtKGUpLCBlLm9uUnVudGltZUluaXRpYWxpemVkICYmIGUub25SdW50aW1lSW5pdGlhbGl6ZWQoKSwgZS5wb3N0UnVuKSBmb3IgKHR5cGVvZiBlLnBvc3RSdW4gPT0gImZ1bmN0aW9uIiAmJiAoZS5wb3N0UnVuID0gW2UucG9zdFJ1bl0pOyBlLnBvc3RSdW4ubGVuZ3RoOyApIHsKICAgICAgICAgICAgdmFyIHQgPSBlLnBvc3RSdW4uc2hpZnQoKTsKICAgICAgICAgICAgb3QudW5zaGlmdCh0KTsKICAgICAgICAgIH0KICAgICAgICAgIHBuKG90KTsKICAgICAgICB9CiAgICAgIH0KICAgICAgaWYgKCEoMCA8IFopKSB7CiAgICAgICAgaWYgKGUucHJlUnVuKSBmb3IgKHR5cGVvZiBlLnByZVJ1biA9PSAiZnVuY3Rpb24iICYmIChlLnByZVJ1biA9IFtlLnByZVJ1bl0pOyBlLnByZVJ1bi5sZW5ndGg7ICkgJHQoKTsKICAgICAgICBwbihpdCksIDAgPCBaIHx8IChlLnNldFN0YXR1cyA/IChlLnNldFN0YXR1cygiUnVubmluZy4uLiIpLCBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgICAgICAgICAgZS5zZXRTdGF0dXMoIiIpOwogICAgICAgICAgfSwgMSksIG4oKTsKICAgICAgICB9LCAxKSkgOiBuKCkpOwogICAgICB9CiAgICB9CiAgICBpZiAoZS5ydW4gPSBHbiwgZS5wcmVJbml0KSBmb3IgKHR5cGVvZiBlLnByZUluaXQgPT0gImZ1bmN0aW9uIiAmJiAoZS5wcmVJbml0ID0gW2UucHJlSW5pdF0pOyAwIDwgZS5wcmVJbml0Lmxlbmd0aDsgKSBlLnByZUluaXQucG9wKCkoKTsKICAgIHJldHVybiBHbigpLCB1LnJlYWR5OwogIH07Cn0oKTsKY2xhc3MgbWUgewogIGNvbnN0cnVjdG9yKCkgewogICAgWW4odGhpcywgInNhbVdhc21Nb2R1bGUiKTsKICB9CiAgZ2V0T3ZlcnJpZGRlbk1vZHVsZXModSwgZSkgewogICAgcmV0dXJuIHsKICAgICAgbG9jYXRlRmlsZTogKG0pID0+IG5ldyBVUkwoZSB8fCBtLCB1KS5ocmVmCiAgICB9OwogIH0KICBhc3luYyBoYW5kbGVNaXNzaW5nT3JJbnZhbGlkU2FtTW9kdWxlKHUsIGUpIHsKICAgIHRyeSB7CiAgICAgIGNvbnN0IG0gPSBhd2FpdCBmZXRjaCh1KTsKICAgICAgaWYgKCFtLm9rKQogICAgICAgIHRocm93IG5ldyBJKAogICAgICAgICAgYFRoZSBwYXRoIHRvICR7ZX0gaXMgaW5jb3JyZWN0IG9yIHRoZSBtb2R1bGUgaXMgbWlzc2luZy4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7dX1gCiAgICAgICAgKTsKICAgICAgY29uc3QgZyA9IGF3YWl0IG0uYXJyYXlCdWZmZXIoKTsKICAgICAgaWYgKCFXZWJBc3NlbWJseS52YWxpZGF0ZShnKSkKICAgICAgICB0aHJvdyBuZXcgSSgKICAgICAgICAgIGBUaGUgcHJvdmlkZWQgJHtlfSBpcyBub3QgYSB2YWxpZCBXQVNNIG1vZHVsZS4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7dX1gCiAgICAgICAgKTsKICAgIH0gY2F0Y2ggKG0pIHsKICAgICAgaWYgKG0gaW5zdGFuY2VvZiBJKQogICAgICAgIHRocm93IGNvbnNvbGUuZXJyb3IoCiAgICAgICAgICAiWW91IGNhbiBmaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgaG93IHRvIGhvc3Qgd2FzbSBmaWxlcyBoZXJlOiBodHRwczovL2RldmVsb3BlcnMuaW5ub3ZhdHJpY3MuY29tL2RpZ2l0YWwtb25ib2FyZGluZy90ZWNobmljYWwvcmVtb3RlL2RvdC13ZWItZG9jdW1lbnQvbGF0ZXN0L2RvY3VtZW50YXRpb24vI19ob3N0aW5nX3NhbV93YXNtIgogICAgICAgICksIG07CiAgICB9CiAgfQogIGFzeW5jIGdldFdhc21GaWxlTmFtZSgpIHsKICAgIHJldHVybiBhd2FpdCBmZSgpID8ga3Quc2ltZCA6IGt0LnNhbTsKICB9CiAgYXN5bmMgaW5pdFNhbU1vZHVsZSh1LCBlID0gIi93YXNtIikgewogICAgaWYgKHRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgcmV0dXJuOwogICAgY29uc3QgbSA9IGF3YWl0IHRoaXMuZ2V0V2FzbUZpbGVOYW1lKCksIGcgPSBgJHtlfS8ke219YDsKICAgIHRyeSB7CiAgICAgIHRoaXMuc2FtV2FzbU1vZHVsZSA9IGF3YWl0IHBlKHRoaXMuZ2V0T3ZlcnJpZGRlbk1vZHVsZXModSwgZykpOwogICAgfSBjYXRjaCB7CiAgICAgIHRocm93IGF3YWl0IHRoaXMuaGFuZGxlTWlzc2luZ09ySW52YWxpZFNhbU1vZHVsZShnLCBtKSwgbmV3IEkoIkNvdWxkIG5vdCBpbml0IGRldGVjdG9yLiIpOwogICAgfQogIH0KICBhc3luYyBnZXRTYW1WZXJzaW9uKCkgewogICAgdmFyIGU7CiAgICBjb25zdCB1ID0gYXdhaXQgKChlID0gdGhpcy5zYW1XYXNtTW9kdWxlKSA9PSBudWxsID8gdm9pZCAwIDogZS5nZXRJbmZvU3RyaW5nKCkpOwogICAgcmV0dXJuIHUgPT0gbnVsbCA/IHZvaWQgMCA6IHUudHJpbSgpOwogIH0KICAvKgogICAqIEluIFRTIDUuMi4wIHdhcyBhZGRlZCBzcGVjaWFsIGtleXdvcmQgInVzaW5nIiB3aGljaCBjb3VsZCBiZSBwZXJmZWN0IGZvciB0aGlzIGNhc2UuCiAgICogVW5mb3J0dW5hdGVseSwgdml0ZSBwcmVhY3QgcGx1Z2luIGRvZXMgbm90IHN1cHBvcnQgdGhpcyB2ZXJzaW9uIG9mIFRTIHlldC4KICAgKiBDaGVjayBwb3NzaWJpbGl0eSBvZiB1c2luZyAidXNpbmciIGtleXdvcmQgd2hlbiB2aXRlIHByZWFjdCBwbHVnaW4gdXBkYXRlcwogICAqLwogIGFsbG9jYXRlTWVtb3J5KHUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgSSgiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgcmV0dXJuIHRoaXMuc2FtV2FzbU1vZHVsZS5fbWFsbG9jKHUpOwogIH0KICByZWxlYXNlTWVtb3J5KHUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgSSgiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgdGhpcy5zYW1XYXNtTW9kdWxlLl9mcmVlKHUpOwogIH0KICB3cml0ZURhdGFUb01lbW9yeSh1LCBlKSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IEkoIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIHRoaXMuc2FtV2FzbU1vZHVsZS5IRUFQVTguc2V0KHUsIGUpOwogIH0KfQovKioKICogQGxpY2Vuc2UKICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQwogKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMAogKi8KY29uc3QgeHQgPSBTeW1ib2woIkNvbWxpbmsucHJveHkiKSwgdmUgPSBTeW1ib2woIkNvbWxpbmsuZW5kcG9pbnQiKSwgZ2UgPSBTeW1ib2woIkNvbWxpbmsucmVsZWFzZVByb3h5IiksIFpuID0gU3ltYm9sKCJDb21saW5rLmZpbmFsaXplciIpLCBPbiA9IFN5bWJvbCgiQ29tbGluay50aHJvd24iKSwgRnQgPSAoYSkgPT4gdHlwZW9mIGEgPT0gIm9iamVjdCIgJiYgYSAhPT0gbnVsbCB8fCB0eXBlb2YgYSA9PSAiZnVuY3Rpb24iLCB3ZSA9IHsKICBjYW5IYW5kbGU6IChhKSA9PiBGdChhKSAmJiBhW3h0XSwKICBzZXJpYWxpemUoYSkgewogICAgY29uc3QgeyBwb3J0MTogdSwgcG9ydDI6IGUgfSA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpOwogICAgcmV0dXJuIEpuKGEsIHUpLCBbZSwgW2VdXTsKICB9LAogIGRlc2VyaWFsaXplKGEpIHsKICAgIHJldHVybiBhLnN0YXJ0KCksIFRlKGEpOwogIH0KfSwgQWUgPSB7CiAgY2FuSGFuZGxlOiAoYSkgPT4gRnQoYSkgJiYgT24gaW4gYSwKICBzZXJpYWxpemUoeyB2YWx1ZTogYSB9KSB7CiAgICBsZXQgdTsKICAgIHJldHVybiBhIGluc3RhbmNlb2YgRXJyb3IgPyB1ID0gewogICAgICBpc0Vycm9yOiAhMCwKICAgICAgdmFsdWU6IHsKICAgICAgICBtZXNzYWdlOiBhLm1lc3NhZ2UsCiAgICAgICAgbmFtZTogYS5uYW1lLAogICAgICAgIHN0YWNrOiBhLnN0YWNrCiAgICAgIH0KICAgIH0gOiB1ID0geyBpc0Vycm9yOiAhMSwgdmFsdWU6IGEgfSwgW3UsIFtdXTsKICB9LAogIGRlc2VyaWFsaXplKGEpIHsKICAgIHRocm93IGEuaXNFcnJvciA/IE9iamVjdC5hc3NpZ24obmV3IEVycm9yKGEudmFsdWUubWVzc2FnZSksIGEudmFsdWUpIDogYS52YWx1ZTsKICB9Cn0sIEl0ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoWwogIFsicHJveHkiLCB3ZV0sCiAgWyJ0aHJvdyIsIEFlXQpdKTsKZnVuY3Rpb24gX2UoYSwgdSkgewogIGZvciAoY29uc3QgZSBvZiBhKQogICAgaWYgKHUgPT09IGUgfHwgZSA9PT0gIioiIHx8IGUgaW5zdGFuY2VvZiBSZWdFeHAgJiYgZS50ZXN0KHUpKQogICAgICByZXR1cm4gITA7CiAgcmV0dXJuICExOwp9CmZ1bmN0aW9uIEpuKGEsIHUgPSBnbG9iYWxUaGlzLCBlID0gWyIqIl0pIHsKICB1LmFkZEV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBmdW5jdGlvbiBtKGcpIHsKICAgIGlmICghZyB8fCAhZy5kYXRhKQogICAgICByZXR1cm47CiAgICBpZiAoIV9lKGUsIGcub3JpZ2luKSkgewogICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgb3JpZ2luICcke2cub3JpZ2lufScgZm9yIGNvbWxpbmsgcHJveHlgKTsKICAgICAgcmV0dXJuOwogICAgfQogICAgY29uc3QgeyBpZDogQywgdHlwZTogQSwgcGF0aDogTSB9ID0gT2JqZWN0LmFzc2lnbih7IHBhdGg6IFtdIH0sIGcuZGF0YSksIE8gPSAoZy5kYXRhLmFyZ3VtZW50TGlzdCB8fCBbXSkubWFwKEopOwogICAgbGV0IFQ7CiAgICB0cnkgewogICAgICBjb25zdCBfID0gTS5zbGljZSgwLCAtMSkucmVkdWNlKChFLCBXKSA9PiBFW1ddLCBhKSwgUyA9IE0ucmVkdWNlKChFLCBXKSA9PiBFW1ddLCBhKTsKICAgICAgc3dpdGNoIChBKSB7CiAgICAgICAgY2FzZSAiR0VUIjoKICAgICAgICAgIFQgPSBTOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiU0VUIjoKICAgICAgICAgIF9bTS5zbGljZSgtMSlbMF1dID0gSihnLmRhdGEudmFsdWUpLCBUID0gITA7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJBUFBMWSI6CiAgICAgICAgICBUID0gUy5hcHBseShfLCBPKTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIkNPTlNUUlVDVCI6CiAgICAgICAgICB7CiAgICAgICAgICAgIGNvbnN0IEUgPSBuZXcgUyguLi5PKTsKICAgICAgICAgICAgVCA9IFNlKEUpOwogICAgICAgICAgfQogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiRU5EUE9JTlQiOgogICAgICAgICAgewogICAgICAgICAgICBjb25zdCB7IHBvcnQxOiBFLCBwb3J0MjogVyB9ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7CiAgICAgICAgICAgIEpuKGEsIFcpLCBUID0gT2UoRSwgW0VdKTsKICAgICAgICAgIH0KICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIlJFTEVBU0UiOgogICAgICAgICAgVCA9IHZvaWQgMDsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICByZXR1cm47CiAgICAgIH0KICAgIH0gY2F0Y2ggKF8pIHsKICAgICAgVCA9IHsgdmFsdWU6IF8sIFtPbl06IDAgfTsKICAgIH0KICAgIFByb21pc2UucmVzb2x2ZShUKS5jYXRjaCgoXykgPT4gKHsgdmFsdWU6IF8sIFtPbl06IDAgfSkpLnRoZW4oKF8pID0+IHsKICAgICAgY29uc3QgW1MsIEVdID0gYm4oXyk7CiAgICAgIHUucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBTKSwgeyBpZDogQyB9KSwgRSksIEEgPT09ICJSRUxFQVNFIiAmJiAodS5yZW1vdmVFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgbSksIGp0KHUpLCBabiBpbiBhICYmIHR5cGVvZiBhW1puXSA9PSAiZnVuY3Rpb24iICYmIGFbWm5dKCkpOwogICAgfSkuY2F0Y2goKF8pID0+IHsKICAgICAgY29uc3QgW1MsIEVdID0gYm4oewogICAgICAgIHZhbHVlOiBuZXcgVHlwZUVycm9yKCJVbnNlcmlhbGl6YWJsZSByZXR1cm4gdmFsdWUiKSwKICAgICAgICBbT25dOiAwCiAgICAgIH0pOwogICAgICB1LnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgUyksIHsgaWQ6IEMgfSksIEUpOwogICAgfSk7CiAgfSksIHUuc3RhcnQgJiYgdS5zdGFydCgpOwp9CmZ1bmN0aW9uIENlKGEpIHsKICByZXR1cm4gYS5jb25zdHJ1Y3Rvci5uYW1lID09PSAiTWVzc2FnZVBvcnQiOwp9CmZ1bmN0aW9uIGp0KGEpIHsKICBDZShhKSAmJiBhLmNsb3NlKCk7Cn0KZnVuY3Rpb24gVGUoYSwgdSkgewogIHJldHVybiBYbihhLCBbXSwgdSk7Cn0KZnVuY3Rpb24gTW4oYSkgewogIGlmIChhKQogICAgdGhyb3cgbmV3IEVycm9yKCJQcm94eSBoYXMgYmVlbiByZWxlYXNlZCBhbmQgaXMgbm90IHVzZWFibGUiKTsKfQpmdW5jdGlvbiBMdChhKSB7CiAgcmV0dXJuIGFuKGEsIHsKICAgIHR5cGU6ICJSRUxFQVNFIgogIH0pLnRoZW4oKCkgPT4gewogICAganQoYSk7CiAgfSk7Cn0KY29uc3QgU24gPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSwgV24gPSAiRmluYWxpemF0aW9uUmVnaXN0cnkiIGluIGdsb2JhbFRoaXMgJiYgbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KChhKSA9PiB7CiAgY29uc3QgdSA9IChTbi5nZXQoYSkgfHwgMCkgLSAxOwogIFNuLnNldChhLCB1KSwgdSA9PT0gMCAmJiBMdChhKTsKfSk7CmZ1bmN0aW9uIEVlKGEsIHUpIHsKICBjb25zdCBlID0gKFNuLmdldCh1KSB8fCAwKSArIDE7CiAgU24uc2V0KHUsIGUpLCBXbiAmJiBXbi5yZWdpc3RlcihhLCB1LCBhKTsKfQpmdW5jdGlvbiBQZShhKSB7CiAgV24gJiYgV24udW5yZWdpc3RlcihhKTsKfQpmdW5jdGlvbiBYbihhLCB1ID0gW10sIGUgPSBmdW5jdGlvbigpIHsKfSkgewogIGxldCBtID0gITE7CiAgY29uc3QgZyA9IG5ldyBQcm94eShlLCB7CiAgICBnZXQoQywgQSkgewogICAgICBpZiAoTW4obSksIEEgPT09IGdlKQogICAgICAgIHJldHVybiAoKSA9PiB7CiAgICAgICAgICBQZShnKSwgTHQoYSksIG0gPSAhMDsKICAgICAgICB9OwogICAgICBpZiAoQSA9PT0gInRoZW4iKSB7CiAgICAgICAgaWYgKHUubGVuZ3RoID09PSAwKQogICAgICAgICAgcmV0dXJuIHsgdGhlbjogKCkgPT4gZyB9OwogICAgICAgIGNvbnN0IE0gPSBhbihhLCB7CiAgICAgICAgICB0eXBlOiAiR0VUIiwKICAgICAgICAgIHBhdGg6IHUubWFwKChPKSA9PiBPLnRvU3RyaW5nKCkpCiAgICAgICAgfSkudGhlbihKKTsKICAgICAgICByZXR1cm4gTS50aGVuLmJpbmQoTSk7CiAgICAgIH0KICAgICAgcmV0dXJuIFhuKGEsIFsuLi51LCBBXSk7CiAgICB9LAogICAgc2V0KEMsIEEsIE0pIHsKICAgICAgTW4obSk7CiAgICAgIGNvbnN0IFtPLCBUXSA9IGJuKE0pOwogICAgICByZXR1cm4gYW4oYSwgewogICAgICAgIHR5cGU6ICJTRVQiLAogICAgICAgIHBhdGg6IFsuLi51LCBBXS5tYXAoKF8pID0+IF8udG9TdHJpbmcoKSksCiAgICAgICAgdmFsdWU6IE8KICAgICAgfSwgVCkudGhlbihKKTsKICAgIH0sCiAgICBhcHBseShDLCBBLCBNKSB7CiAgICAgIE1uKG0pOwogICAgICBjb25zdCBPID0gdVt1Lmxlbmd0aCAtIDFdOwogICAgICBpZiAoTyA9PT0gdmUpCiAgICAgICAgcmV0dXJuIGFuKGEsIHsKICAgICAgICAgIHR5cGU6ICJFTkRQT0lOVCIKICAgICAgICB9KS50aGVuKEopOwogICAgICBpZiAoTyA9PT0gImJpbmQiKQogICAgICAgIHJldHVybiBYbihhLCB1LnNsaWNlKDAsIC0xKSk7CiAgICAgIGNvbnN0IFtULCBfXSA9IFJ0KE0pOwogICAgICByZXR1cm4gYW4oYSwgewogICAgICAgIHR5cGU6ICJBUFBMWSIsCiAgICAgICAgcGF0aDogdS5tYXAoKFMpID0+IFMudG9TdHJpbmcoKSksCiAgICAgICAgYXJndW1lbnRMaXN0OiBUCiAgICAgIH0sIF8pLnRoZW4oSik7CiAgICB9LAogICAgY29uc3RydWN0KEMsIEEpIHsKICAgICAgTW4obSk7CiAgICAgIGNvbnN0IFtNLCBPXSA9IFJ0KEEpOwogICAgICByZXR1cm4gYW4oYSwgewogICAgICAgIHR5cGU6ICJDT05TVFJVQ1QiLAogICAgICAgIHBhdGg6IHUubWFwKChUKSA9PiBULnRvU3RyaW5nKCkpLAogICAgICAgIGFyZ3VtZW50TGlzdDogTQogICAgICB9LCBPKS50aGVuKEopOwogICAgfQogIH0pOwogIHJldHVybiBFZShnLCBhKSwgZzsKfQpmdW5jdGlvbiBNZShhKSB7CiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGEpOwp9CmZ1bmN0aW9uIFJ0KGEpIHsKICBjb25zdCB1ID0gYS5tYXAoYm4pOwogIHJldHVybiBbdS5tYXAoKGUpID0+IGVbMF0pLCBNZSh1Lm1hcCgoZSkgPT4gZVsxXSkpXTsKfQpjb25zdCBOdCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpOwpmdW5jdGlvbiBPZShhLCB1KSB7CiAgcmV0dXJuIE50LnNldChhLCB1KSwgYTsKfQpmdW5jdGlvbiBTZShhKSB7CiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYSwgeyBbeHRdOiAhMCB9KTsKfQpmdW5jdGlvbiBibihhKSB7CiAgZm9yIChjb25zdCBbdSwgZV0gb2YgSXQpCiAgICBpZiAoZS5jYW5IYW5kbGUoYSkpIHsKICAgICAgY29uc3QgW20sIGddID0gZS5zZXJpYWxpemUoYSk7CiAgICAgIHJldHVybiBbCiAgICAgICAgewogICAgICAgICAgdHlwZTogIkhBTkRMRVIiLAogICAgICAgICAgbmFtZTogdSwKICAgICAgICAgIHZhbHVlOiBtCiAgICAgICAgfSwKICAgICAgICBnCiAgICAgIF07CiAgICB9CiAgcmV0dXJuIFsKICAgIHsKICAgICAgdHlwZTogIlJBVyIsCiAgICAgIHZhbHVlOiBhCiAgICB9LAogICAgTnQuZ2V0KGEpIHx8IFtdCiAgXTsKfQpmdW5jdGlvbiBKKGEpIHsKICBzd2l0Y2ggKGEudHlwZSkgewogICAgY2FzZSAiSEFORExFUiI6CiAgICAgIHJldHVybiBJdC5nZXQoYS5uYW1lKS5kZXNlcmlhbGl6ZShhLnZhbHVlKTsKICAgIGNhc2UgIlJBVyI6CiAgICAgIHJldHVybiBhLnZhbHVlOwogIH0KfQpmdW5jdGlvbiBhbihhLCB1LCBlKSB7CiAgcmV0dXJuIG5ldyBQcm9taXNlKChtKSA9PiB7CiAgICBjb25zdCBnID0gV2UoKTsKICAgIGEuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGZ1bmN0aW9uIEMoQSkgewogICAgICAhQS5kYXRhIHx8ICFBLmRhdGEuaWQgfHwgQS5kYXRhLmlkICE9PSBnIHx8IChhLnJlbW92ZUV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBDKSwgbShBLmRhdGEpKTsKICAgIH0pLCBhLnN0YXJ0ICYmIGEuc3RhcnQoKSwgYS5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKHsgaWQ6IGcgfSwgdSksIGUpOwogIH0pOwp9CmZ1bmN0aW9uIFdlKCkgewogIHJldHVybiBuZXcgQXJyYXkoNCkuZmlsbCgwKS5tYXAoKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpLnRvU3RyaW5nKDE2KSkuam9pbigiLSIpOwp9CmZ1bmN0aW9uIEh0KGEsIHUpIHsKICByZXR1cm4gTWF0aC5zcXJ0KChhLnggLSB1LngpICoqIDIgKyAoYS55IC0gdS55KSAqKiAyKTsKfQpmdW5jdGlvbiBiZShhLCB1KSB7CiAgcmV0dXJuIHsKICAgIHg6IChhLnggKyB1LngpIC8gMiwKICAgIHk6IChhLnkgKyB1LnkpIC8gMgogIH07Cn0KZnVuY3Rpb24ga2UoYSwgdSkgewogIGlmIChhLmNvbmZpZGVuY2UgPD0gMCB8fCB1LmNvbmZpZGVuY2UgPD0gMCkKICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTsKICBjb25zdCBlID0gSHQoYS5jZW50ZXIsIHUuY2VudGVyKSwgbSA9IGJlKGEuY2VudGVyLCB1LmNlbnRlcik7CiAgcmV0dXJuIHsKICAgIHg6IG0ueCwKICAgIHk6IG0ueSArIGUgLyA0CiAgICAvLyBjYWxjdWxhdGlvbiBpcyB0YWtlbiBmcm9tIG1vYmlsZSB0ZWFtCiAgfTsKfQpmdW5jdGlvbiBSZShhLCB1LCBlKSB7CiAgaWYgKGEuY29uZmlkZW5jZSA8PSAwIHx8IHUuY29uZmlkZW5jZSA8PSAwKQogICAgcmV0dXJuIDA7CiAgY29uc3QgbSA9IEh0KGEuY2VudGVyLCB1LmNlbnRlciksIGcgPSB5ZShlLndpZHRoLCBlLmhlaWdodCk7CiAgcmV0dXJuIGhlKG0gLyBnKTsKfQpmdW5jdGlvbiAkbihhKSB7CiAgY29uc3QgeyBjZW50ZXJYOiB1LCBjZW50ZXJZOiBlLCBjb25maWRlbmNlOiBtLCBzaXplOiBnLCBzdGF0dXM6IEMgfSA9IGE7CiAgcmV0dXJuIHsKICAgIGNlbnRlcjogewogICAgICB4OiB1LAogICAgICB5OiBlCiAgICB9LAogICAgY29uZmlkZW5jZTogbSAvIDFlMywKICAgIHN0YXR1czogQyAvIDFlMywKICAgIHNpemU6IGcKICB9Owp9CmNsYXNzIHhlIGV4dGVuZHMgbWUgewogIHBhcnNlUmF3RGF0YSh1LCBlKSB7CiAgICBjb25zdCB7IGJyaWdodG5lc3M6IG0sIHNoYXJwbmVzczogZyB9ID0gdS5wYXJhbXMsIHsgYm90dG9tUmlnaHRYOiBDLCBib3R0b21SaWdodFk6IEEsIGxlZnRFeWU6IE0sIG1vdXRoOiBPLCByaWdodEV5ZTogVCwgdG9wTGVmdFg6IF8sIHRvcExlZnRZOiBTIH0gPSB1LCBFID0gJG4oTSksIFcgPSAkbihUKSwgSCA9ICRuKE8pOwogICAgcmV0dXJuIHsKICAgICAgY29uZmlkZW5jZTogdS5jb25maWRlbmNlIC8gMWUzLAogICAgICB0b3BMZWZ0OiB7CiAgICAgICAgeDogXywKICAgICAgICB5OiBTCiAgICAgIH0sCiAgICAgIGJvdHRvbVJpZ2h0OiB7CiAgICAgICAgeDogQywKICAgICAgICB5OiBBCiAgICAgIH0sCiAgICAgIGZhY2VDZW50ZXI6IGtlKEUsIFcpLAogICAgICBmYWNlU2l6ZTogUmUoRSwgVywgZSksCiAgICAgIGxlZnRFeWU6IEUsCiAgICAgIHJpZ2h0RXllOiBXLAogICAgICBtb3V0aDogSCwKICAgICAgYnJpZ2h0bmVzczogbSAvIDFlMywKICAgICAgc2hhcnBuZXNzOiBnIC8gMWUzCiAgICB9OwogIH0KICBhc3luYyBkZXRlY3QodSwgZSwgbSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBJKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICBjb25zdCBnID0gdGhpcy5hbGxvY2F0ZU1lbW9yeSh1Lmxlbmd0aCAqIHUuQllURVNfUEVSX0VMRU1FTlQpLCBDID0gdGhpcy5hbGxvY2F0ZU1lbW9yeSh1Lmxlbmd0aCAqIHUuQllURVNfUEVSX0VMRU1FTlQpOwogICAgdGhpcy53cml0ZURhdGFUb01lbW9yeSh1LCBnKSwgdGhpcy5zYW1XYXNtTW9kdWxlLmNvbnZlcnRUb1NhbUNvbG9ySW1hZ2UoCiAgICAgIGUud2lkdGgsCiAgICAgIGUuaGVpZ2h0LAogICAgICBnLAogICAgICBkZS5SR0JBLAogICAgICBDCiAgICApOwogICAgY29uc3QgQSA9IHRoaXMuc2FtV2FzbU1vZHVsZS5kZXRlY3RGYWNlUGFydHNXaXRoSW1hZ2VQYXJhbWV0ZXJzKAogICAgICBlLndpZHRoLAogICAgICBlLmhlaWdodCwKICAgICAgQywKICAgICAgMCwKICAgICAgMCwKICAgICAgLy8gcGFyYW1XaWR0aCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICAgMAogICAgICAvLyBwYXJhbUhlaWdodCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICk7CiAgICByZXR1cm4gdGhpcy5yZWxlYXNlTWVtb3J5KGcpLCB0aGlzLnJlbGVhc2VNZW1vcnkoQyksIHRoaXMucGFyc2VSYXdEYXRhKEEsIG0pOwogIH0KfQpKbih4ZSk7Cg==", $1 = (x) => Uint8Array.from(atob(x), (r) => r.charCodeAt(0)), Na = typeof window < "u" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);", $1(jc)], { type: "text/javascript;charset=utf-8" });
function eI(x) {
  let r;
  try {
    if (r = Na && (window.URL || window.webkitURL).createObjectURL(Na), !r) throw "";
    const t = new Worker(r, {
      type: "module",
      name: x == null ? void 0 : x.name
    });
    return t.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(r);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + jc,
      {
        type: "module",
        name: x == null ? void 0 : x.name
      }
    );
  }
}
var L0, a0;
class tI {
  constructor(r) {
    ce(this, L0);
    ce(this, a0);
    ae(this, L0, r), ae(this, a0, /* @__PURE__ */ new Map());
  }
  validate() {
    j(this, L0).forEach((r) => {
      j(this, a0).set(r.name, r.evaluate());
    });
  }
  isValid() {
    return Array.from(j(this, a0).values()).every((r) => r);
  }
  get result() {
    return j(this, a0);
  }
  get validators() {
    return j(this, L0);
  }
}
L0 = new WeakMap(), a0 = new WeakMap();
var yn, s0;
class nt {
  constructor(r, t) {
    ce(this, yn);
    ce(this, s0);
    ae(this, yn, r), ae(this, s0, t);
  }
  get threshold() {
    return j(this, s0);
  }
  get name() {
    return j(this, yn);
  }
  isValueBelowThreshold(r) {
    return r < j(this, s0);
  }
  isValueAboveThreshold(r) {
    return r > j(this, s0);
  }
}
yn = new WeakMap(), s0 = new WeakMap();
var Wn;
class nI extends nt {
  constructor(t, e) {
    super("isNotDim", t);
    ce(this, Wn);
    ae(this, Wn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(j(this, Wn));
  }
}
Wn = new WeakMap();
var vn;
class xI extends nt {
  constructor(t, e) {
    super("isNotSmall", t);
    ce(this, vn);
    ae(this, vn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(j(this, vn));
  }
}
vn = new WeakMap();
var Sn;
class rI extends nt {
  constructor(t, e) {
    super("isNotBright", t);
    ce(this, Sn);
    ae(this, Sn, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(j(this, Sn));
  }
}
Sn = new WeakMap();
var wn;
class oI extends nt {
  constructor(t, e) {
    super("isPresent", t);
    ce(this, wn);
    ae(this, wn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(j(this, wn));
  }
}
wn = new WeakMap();
var Bn;
class iI extends nt {
  constructor(t, e) {
    super("isSharp", t);
    ce(this, Bn);
    ae(this, Bn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(j(this, Bn));
  }
}
Bn = new WeakMap();
var Gn;
class aI extends nt {
  constructor(t, e) {
    super("isLeftEyePresent", t);
    ce(this, Gn);
    ae(this, Gn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(j(this, Gn));
  }
}
Gn = new WeakMap();
var kn;
class sI extends nt {
  constructor(t, e) {
    super("isMouthPresent", t);
    ce(this, kn);
    ae(this, kn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(j(this, kn));
  }
}
kn = new WeakMap();
var Hn;
class cI extends nt {
  constructor(t, e) {
    super("isMouthScoreNotTooLow", t);
    ce(this, Hn);
    ae(this, Hn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(j(this, Hn));
  }
}
Hn = new WeakMap();
var On;
class gI extends nt {
  constructor(t, e) {
    super("isMouthScoreNotTooHigh", t);
    ce(this, On);
    ae(this, On, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(j(this, On));
  }
}
On = new WeakMap();
var Zn;
class dI extends nt {
  constructor(t, e) {
    super("isNotLarge", t);
    ce(this, Zn);
    ae(this, Zn, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(j(this, Zn));
  }
}
Zn = new WeakMap();
var Kn;
class uI extends nt {
  constructor(t, e) {
    super("isNotPitched", t || -1 * -1028 + 9371 + -3 * 3433);
    ce(this, Kn);
    ae(this, Kn, e);
  }
  evaluate() {
    const { z: t } = j(this, Kn) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
}
Kn = new WeakMap();
var Rn;
class lI extends nt {
  constructor(t, e) {
    super("isRightEyePresent", t);
    ce(this, Rn);
    ae(this, Rn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(j(this, Rn));
  }
}
Rn = new WeakMap();
var Pn, N0;
class II extends nt {
  constructor(t, e, n) {
    super("isNotOutOfBounds", t);
    ce(this, Pn);
    ce(this, N0);
    ae(this, Pn, e), ae(this, N0, n);
  }
  evaluate() {
    const t = Vc(j(this, N0), this.threshold), e = Tc(j(this, Pn), j(this, N0));
    return f1(e, t);
  }
}
Pn = new WeakMap(), N0 = new WeakMap();
class fI {
  static getFaceValidationInstance(r, t, e, n) {
    return new tI([new oI(r.faceConfidence, t.confidence), new aI(r.leftEye.confidence, t.leftEye.confidence), new lI(r.rightEye.confidence, t.rightEye.confidence), new xI(r.minFaceSizeRatio, t.faceSize), new dI(r.maxFaceSizeRatio, t.faceSize), new iI(r.sharpnessThreshold, t.sharpness), new nI(r.brightnessLowThreshold, t.brightness), new rI(r.brightnessHighThreshold, t.brightness), new II(r.outOfBoundsThreshold, t, e), new uI(r.pitchAngleAccelerationThreshold, n), new sI(r.mouth.confidence, t.mouth.confidence), new gI(r.mouth.status.max, t.mouth.status), new cI(r.mouth.status.min, t.mouth.status)]);
  }
}
const tr = class tr extends N1 {
  constructor() {
    super(...arguments);
    M(this, "detector");
    M(this, "className", "FaceController");
    M(this, "fallbackInstruction", Ke.FACE_NOT_PRESENT);
    M(this, "pitchAngleAccelerationThreshold", null);
    M(this, "getInstructionCode", (t, e) => {
      var o;
      if (this.isInCandidateSelection) return Ke.CANDIDATE_SELECTION;
      if ((o = this.lastImage) != null && o.isValid && e) return Ke.CANDIDATE_SELECTION;
      if (this.lastImage && e) return this.lastImage.instructionCode;
      const [n] = this.getInstructionCodesForValidators(t);
      return n ?? this.fallbackInstruction;
    });
    M(this, "getInstructionCodesForValidators", (t) => {
      const e = [];
      return Array.from(t).forEach(([n, o]) => {
        !o && e.push(Tu[n]);
      }), e;
    });
  }
  static async init() {
    const t = new eI(), e = Yc(t), n = new tr(), o = await new e();
    this._instance = n, this._instance.detector = o;
  }
  static async getInstance() {
    return !this._instance && await this.init(), this._instance;
  }
  setThresholds(t) {
    super.setThresholds(t);
    const { devicePitchAngleThreshold: e } = t;
    this.pitchAngleAccelerationThreshold = al * Math.sin(e * (Math.PI / (74 * 88 + 1703 + -8035)));
  }
  restart() {
    super.restart(), Va(jt.INSTRUCTION_CHANGED, void (52 * -101 + 9958 * 1 + -4706), Zl);
  }
  validateDetectedObject(t, e) {
    const n = fI.getFaceValidationInstance({ ...this.getThresholds(), pitchAngleAccelerationThreshold: this.pitchAngleAccelerationThreshold }, t, e, this.acceleration);
    return n.validate(), n;
  }
  async processImage({ image: t, timestamp: e }) {
    var A;
    const n = {};
    n.width = t.width, n.height = t.height;
    const o = n, i = ii(o), a = Nl(t, i), s = Dl(a), c = {};
    c.width = a.width, c.height = a.height;
    const l = c;
    let g = await this.detector.detect(s, l, o);
    g = W1(o, g);
    const h = this.validateDetectedObject(g, o), { result: u } = h, C = this.getInstructionCode(u, h.isValid());
    if (u.get("isPresent")) {
      const d = {};
      d.image = s, d.timestamp = e, this.collectImagesForDuplicateDetection(d);
    }
    if (this.isInCandidateSelection) {
      if (this.bestImage && h.isValid() && this.isNewImageBetter(this.bestImage.detection, g)) {
        const d = { image: t, detection: O0(g) };
        this.bestImage = d, this.candidateSelectionImages.push(d);
      }
    } else if ((A = this.lastImage) != null && A.isValid && h.isValid()) {
      const d = { image: t, detection: O0(g) }, W = {};
      W.image = this.lastImage.image, W.detection = this.lastImage.detection;
      const k = W;
      this.isNewImageBetter(k.detection, d.detection) ? this.bestImage = d : this.bestImage = k, this.candidateSelectionImages.push(k, d), this.isInCandidateSelection = !0;
    } else h.isValid() ? this.lastImage = { instructionCode: C, isValid: !0, image: t, detection: O0(g) } : this.lastImage = { instructionCode: C, isValid: !1, image: t, detection: O0(g) };
    const p = { detectedFace: O0(g), instructionCode: C, invalidValidators: this.getInstructionCodesForValidators(u), isInCandidateSelection: this.isInCandidateSelection };
    return this.detectionRecord.push(p.detectedFace), Va(jt.INSTRUCTION_CHANGED, C), Pl(jt.DETECTED_FACE_CHANGED, p.detectedFace, this.getThresholds().faceConfidence), Vl(jt.FACE_DETECTION, p.detectedFace, t), p;
  }
};
M(tr, "_instance");
let Oo = tr;
const CI = (x, r) => {
  const { handleError: t } = $0(), [e, n] = et(), { acceleration: o } = h1();
  e && e.setAcceleration(o), we(() => {
    (async () => {
      const s = await Oo.getInstance();
      try {
        const c = {};
        c.wasmDirectoryPath = r, c.thresholds = x, await s.init(c);
      } catch (c) {
        if (c instanceof Error) {
          t(xe.fromError(c));
          return;
        }
      }
      n(s);
    })();
  }, [t, x, r]);
  const i = {};
  return i.controller = e, i;
};
var e0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Jc = {}, Da = {}, hI = pI;
function pI(x, r) {
  for (var t = new Array(arguments.length - 1), e = 0, n = 2, o = !0; n < arguments.length; )
    t[e++] = arguments[n++];
  return new Promise(function(i, a) {
    t[e] = function(s) {
      if (o)
        if (o = !1, s)
          a(s);
        else {
          for (var c = new Array(arguments.length - 1), l = 0; l < c.length; )
            c[l++] = arguments[l];
          i.apply(null, c);
        }
    };
    try {
      x.apply(r || null, t);
    } catch (s) {
      o && (o = !1, a(s));
    }
  });
}
var _c = {};
(function(x) {
  var r = x;
  r.length = function(i) {
    var a = i.length;
    if (!a)
      return 0;
    for (var s = 0; --a % 4 > 1 && i.charAt(a) === "="; )
      ++s;
    return Math.ceil(i.length * 3) / 4 - s;
  };
  for (var t = new Array(64), e = new Array(123), n = 0; n < 64; )
    e[t[n] = n < 26 ? n + 65 : n < 52 ? n + 71 : n < 62 ? n - 4 : n - 59 | 43] = n++;
  r.encode = function(i, a, s) {
    for (var c = null, l = [], g = 0, h = 0, u; a < s; ) {
      var C = i[a++];
      switch (h) {
        case 0:
          l[g++] = t[C >> 2], u = (C & 3) << 4, h = 1;
          break;
        case 1:
          l[g++] = t[u | C >> 4], u = (C & 15) << 2, h = 2;
          break;
        case 2:
          l[g++] = t[u | C >> 6], l[g++] = t[C & 63], h = 0;
          break;
      }
      g > 8191 && ((c || (c = [])).push(String.fromCharCode.apply(String, l)), g = 0);
    }
    return h && (l[g++] = t[u], l[g++] = 61, h === 1 && (l[g++] = 61)), c ? (g && c.push(String.fromCharCode.apply(String, l.slice(0, g))), c.join("")) : String.fromCharCode.apply(String, l.slice(0, g));
  };
  var o = "invalid encoding";
  r.decode = function(i, a, s) {
    for (var c = s, l = 0, g, h = 0; h < i.length; ) {
      var u = i.charCodeAt(h++);
      if (u === 61 && l > 1)
        break;
      if ((u = e[u]) === void 0)
        throw Error(o);
      switch (l) {
        case 0:
          g = u, l = 1;
          break;
        case 1:
          a[s++] = g << 2 | (u & 48) >> 4, g = u, l = 2;
          break;
        case 2:
          a[s++] = (g & 15) << 4 | (u & 60) >> 2, g = u, l = 3;
          break;
        case 3:
          a[s++] = (g & 3) << 6 | u, l = 0;
          break;
      }
    }
    if (l === 1)
      throw Error(o);
    return s - c;
  }, r.test = function(i) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(i);
  };
})(_c);
var mI = ur;
function ur() {
  this._listeners = {};
}
ur.prototype.on = function(x, r, t) {
  return (this._listeners[x] || (this._listeners[x] = [])).push({
    fn: r,
    ctx: t || this
  }), this;
};
ur.prototype.off = function(x, r) {
  if (x === void 0)
    this._listeners = {};
  else if (r === void 0)
    this._listeners[x] = [];
  else
    for (var t = this._listeners[x], e = 0; e < t.length; )
      t[e].fn === r ? t.splice(e, 1) : ++e;
  return this;
};
ur.prototype.emit = function(x) {
  var r = this._listeners[x];
  if (r) {
    for (var t = [], e = 1; e < arguments.length; )
      t.push(arguments[e++]);
    for (e = 0; e < r.length; )
      r[e].fn.apply(r[e++].ctx, t);
  }
  return this;
};
var bI = Fa(Fa);
function Fa(x) {
  return typeof Float32Array < "u" ? function() {
    var r = new Float32Array([-0]), t = new Uint8Array(r.buffer), e = t[3] === 128;
    function n(s, c, l) {
      r[0] = s, c[l] = t[0], c[l + 1] = t[1], c[l + 2] = t[2], c[l + 3] = t[3];
    }
    function o(s, c, l) {
      r[0] = s, c[l] = t[3], c[l + 1] = t[2], c[l + 2] = t[1], c[l + 3] = t[0];
    }
    x.writeFloatLE = e ? n : o, x.writeFloatBE = e ? o : n;
    function i(s, c) {
      return t[0] = s[c], t[1] = s[c + 1], t[2] = s[c + 2], t[3] = s[c + 3], r[0];
    }
    function a(s, c) {
      return t[3] = s[c], t[2] = s[c + 1], t[1] = s[c + 2], t[0] = s[c + 3], r[0];
    }
    x.readFloatLE = e ? i : a, x.readFloatBE = e ? a : i;
  }() : function() {
    function r(e, n, o, i) {
      var a = n < 0 ? 1 : 0;
      if (a && (n = -n), n === 0)
        e(1 / n > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), o, i);
      else if (isNaN(n))
        e(2143289344, o, i);
      else if (n > 34028234663852886e22)
        e((a << 31 | 2139095040) >>> 0, o, i);
      else if (n < 11754943508222875e-54)
        e((a << 31 | Math.round(n / 1401298464324817e-60)) >>> 0, o, i);
      else {
        var s = Math.floor(Math.log(n) / Math.LN2), c = Math.round(n * Math.pow(2, -s) * 8388608) & 8388607;
        e((a << 31 | s + 127 << 23 | c) >>> 0, o, i);
      }
    }
    x.writeFloatLE = r.bind(null, Ya), x.writeFloatBE = r.bind(null, Xa);
    function t(e, n, o) {
      var i = e(n, o), a = (i >> 31) * 2 + 1, s = i >>> 23 & 255, c = i & 8388607;
      return s === 255 ? c ? NaN : a * (1 / 0) : s === 0 ? a * 1401298464324817e-60 * c : a * Math.pow(2, s - 150) * (c + 8388608);
    }
    x.readFloatLE = t.bind(null, Ma), x.readFloatBE = t.bind(null, ja);
  }(), typeof Float64Array < "u" ? function() {
    var r = new Float64Array([-0]), t = new Uint8Array(r.buffer), e = t[7] === 128;
    function n(s, c, l) {
      r[0] = s, c[l] = t[0], c[l + 1] = t[1], c[l + 2] = t[2], c[l + 3] = t[3], c[l + 4] = t[4], c[l + 5] = t[5], c[l + 6] = t[6], c[l + 7] = t[7];
    }
    function o(s, c, l) {
      r[0] = s, c[l] = t[7], c[l + 1] = t[6], c[l + 2] = t[5], c[l + 3] = t[4], c[l + 4] = t[3], c[l + 5] = t[2], c[l + 6] = t[1], c[l + 7] = t[0];
    }
    x.writeDoubleLE = e ? n : o, x.writeDoubleBE = e ? o : n;
    function i(s, c) {
      return t[0] = s[c], t[1] = s[c + 1], t[2] = s[c + 2], t[3] = s[c + 3], t[4] = s[c + 4], t[5] = s[c + 5], t[6] = s[c + 6], t[7] = s[c + 7], r[0];
    }
    function a(s, c) {
      return t[7] = s[c], t[6] = s[c + 1], t[5] = s[c + 2], t[4] = s[c + 3], t[3] = s[c + 4], t[2] = s[c + 5], t[1] = s[c + 6], t[0] = s[c + 7], r[0];
    }
    x.readDoubleLE = e ? i : a, x.readDoubleBE = e ? a : i;
  }() : function() {
    function r(e, n, o, i, a, s) {
      var c = i < 0 ? 1 : 0;
      if (c && (i = -i), i === 0)
        e(0, a, s + n), e(1 / i > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), a, s + o);
      else if (isNaN(i))
        e(0, a, s + n), e(2146959360, a, s + o);
      else if (i > 17976931348623157e292)
        e(0, a, s + n), e((c << 31 | 2146435072) >>> 0, a, s + o);
      else {
        var l;
        if (i < 22250738585072014e-324)
          l = i / 5e-324, e(l >>> 0, a, s + n), e((c << 31 | l / 4294967296) >>> 0, a, s + o);
        else {
          var g = Math.floor(Math.log(i) / Math.LN2);
          g === 1024 && (g = 1023), l = i * Math.pow(2, -g), e(l * 4503599627370496 >>> 0, a, s + n), e((c << 31 | g + 1023 << 20 | l * 1048576 & 1048575) >>> 0, a, s + o);
        }
      }
    }
    x.writeDoubleLE = r.bind(null, Ya, 0, 4), x.writeDoubleBE = r.bind(null, Xa, 4, 0);
    function t(e, n, o, i, a) {
      var s = e(i, a + n), c = e(i, a + o), l = (c >> 31) * 2 + 1, g = c >>> 20 & 2047, h = 4294967296 * (c & 1048575) + s;
      return g === 2047 ? h ? NaN : l * (1 / 0) : g === 0 ? l * 5e-324 * h : l * Math.pow(2, g - 1075) * (h + 4503599627370496);
    }
    x.readDoubleLE = t.bind(null, Ma, 0, 4), x.readDoubleBE = t.bind(null, ja, 4, 0);
  }(), x;
}
function Ya(x, r, t) {
  r[t] = x & 255, r[t + 1] = x >>> 8 & 255, r[t + 2] = x >>> 16 & 255, r[t + 3] = x >>> 24;
}
function Xa(x, r, t) {
  r[t] = x >>> 24, r[t + 1] = x >>> 16 & 255, r[t + 2] = x >>> 8 & 255, r[t + 3] = x & 255;
}
function Ma(x, r) {
  return (x[r] | x[r + 1] << 8 | x[r + 2] << 16 | x[r + 3] << 24) >>> 0;
}
function ja(x, r) {
  return (x[r] << 24 | x[r + 1] << 16 | x[r + 2] << 8 | x[r + 3]) >>> 0;
}
function Ja(x) {
  throw new Error('Could not dynamically require "' + x + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var AI = yI;
function yI(x) {
  try {
    if (typeof Ja != "function")
      return null;
    var r = Ja(x);
    return r && (r.length || Object.keys(r).length) ? r : null;
  } catch {
    return null;
  }
}
var Qc = {};
(function(x) {
  var r = x;
  r.length = function(t) {
    for (var e = 0, n = 0, o = 0; o < t.length; ++o)
      n = t.charCodeAt(o), n < 128 ? e += 1 : n < 2048 ? e += 2 : (n & 64512) === 55296 && (t.charCodeAt(o + 1) & 64512) === 56320 ? (++o, e += 4) : e += 3;
    return e;
  }, r.read = function(t, e, n) {
    var o = n - e;
    if (o < 1)
      return "";
    for (var i = null, a = [], s = 0, c; e < n; )
      c = t[e++], c < 128 ? a[s++] = c : c > 191 && c < 224 ? a[s++] = (c & 31) << 6 | t[e++] & 63 : c > 239 && c < 365 ? (c = ((c & 7) << 18 | (t[e++] & 63) << 12 | (t[e++] & 63) << 6 | t[e++] & 63) - 65536, a[s++] = 55296 + (c >> 10), a[s++] = 56320 + (c & 1023)) : a[s++] = (c & 15) << 12 | (t[e++] & 63) << 6 | t[e++] & 63, s > 8191 && ((i || (i = [])).push(String.fromCharCode.apply(String, a)), s = 0);
    return i ? (s && i.push(String.fromCharCode.apply(String, a.slice(0, s))), i.join("")) : String.fromCharCode.apply(String, a.slice(0, s));
  }, r.write = function(t, e, n) {
    for (var o = n, i, a, s = 0; s < t.length; ++s)
      i = t.charCodeAt(s), i < 128 ? e[n++] = i : i < 2048 ? (e[n++] = i >> 6 | 192, e[n++] = i & 63 | 128) : (i & 64512) === 55296 && ((a = t.charCodeAt(s + 1)) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (a & 1023), ++s, e[n++] = i >> 18 | 240, e[n++] = i >> 12 & 63 | 128, e[n++] = i >> 6 & 63 | 128, e[n++] = i & 63 | 128) : (e[n++] = i >> 12 | 224, e[n++] = i >> 6 & 63 | 128, e[n++] = i & 63 | 128);
    return n - o;
  };
})(Qc);
var WI = vI;
function vI(x, r, t) {
  var e = t || 8192, n = e >>> 1, o = null, i = e;
  return function(a) {
    if (a < 1 || a > n)
      return x(a);
    i + a > e && (o = x(e), i = 0);
    var s = r.call(o, i, i += a);
    return i & 7 && (i = (i | 7) + 1), s;
  };
}
var Yr, _a;
function SI() {
  if (_a)
    return Yr;
  _a = 1, Yr = r;
  var x = p0();
  function r(o, i) {
    this.lo = o >>> 0, this.hi = i >>> 0;
  }
  var t = r.zero = new r(0, 0);
  t.toNumber = function() {
    return 0;
  }, t.zzEncode = t.zzDecode = function() {
    return this;
  }, t.length = function() {
    return 1;
  };
  var e = r.zeroHash = "\0\0\0\0\0\0\0\0";
  r.fromNumber = function(o) {
    if (o === 0)
      return t;
    var i = o < 0;
    i && (o = -o);
    var a = o >>> 0, s = (o - a) / 4294967296 >>> 0;
    return i && (s = ~s >>> 0, a = ~a >>> 0, ++a > 4294967295 && (a = 0, ++s > 4294967295 && (s = 0))), new r(a, s);
  }, r.from = function(o) {
    if (typeof o == "number")
      return r.fromNumber(o);
    if (x.isString(o))
      if (x.Long)
        o = x.Long.fromString(o);
      else
        return r.fromNumber(parseInt(o, 10));
    return o.low || o.high ? new r(o.low >>> 0, o.high >>> 0) : t;
  }, r.prototype.toNumber = function(o) {
    if (!o && this.hi >>> 31) {
      var i = ~this.lo + 1 >>> 0, a = ~this.hi >>> 0;
      return i || (a = a + 1 >>> 0), -(i + a * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  }, r.prototype.toLong = function(o) {
    return x.Long ? new x.Long(this.lo | 0, this.hi | 0, !!o) : { low: this.lo | 0, high: this.hi | 0, unsigned: !!o };
  };
  var n = String.prototype.charCodeAt;
  return r.fromHash = function(o) {
    return o === e ? t : new r(
      (n.call(o, 0) | n.call(o, 1) << 8 | n.call(o, 2) << 16 | n.call(o, 3) << 24) >>> 0,
      (n.call(o, 4) | n.call(o, 5) << 8 | n.call(o, 6) << 16 | n.call(o, 7) << 24) >>> 0
    );
  }, r.prototype.toHash = function() {
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
  }, r.prototype.zzEncode = function() {
    var o = this.hi >> 31;
    return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ o) >>> 0, this.lo = (this.lo << 1 ^ o) >>> 0, this;
  }, r.prototype.zzDecode = function() {
    var o = -(this.lo & 1);
    return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ o) >>> 0, this.hi = (this.hi >>> 1 ^ o) >>> 0, this;
  }, r.prototype.length = function() {
    var o = this.lo, i = (this.lo >>> 28 | this.hi << 4) >>> 0, a = this.hi >>> 24;
    return a === 0 ? i === 0 ? o < 16384 ? o < 128 ? 1 : 2 : o < 2097152 ? 3 : 4 : i < 16384 ? i < 128 ? 5 : 6 : i < 2097152 ? 7 : 8 : a < 128 ? 9 : 10;
  }, Yr;
}
var Qa;
function p0() {
  return Qa || (Qa = 1, function(x) {
    var r = x;
    r.asPromise = hI, r.base64 = _c, r.EventEmitter = mI, r.float = bI, r.inquire = AI, r.utf8 = Qc, r.pool = WI, r.LongBits = SI(), r.isNode = !!(typeof e0 < "u" && e0 && e0.process && e0.process.versions && e0.process.versions.node), r.global = r.isNode && e0 || typeof window < "u" && window || typeof self < "u" && self || e0, r.emptyArray = Object.freeze ? Object.freeze([]) : (
      /* istanbul ignore next */
      []
    ), r.emptyObject = Object.freeze ? Object.freeze({}) : (
      /* istanbul ignore next */
      {}
    ), r.isInteger = Number.isInteger || /* istanbul ignore next */
    function(n) {
      return typeof n == "number" && isFinite(n) && Math.floor(n) === n;
    }, r.isString = function(n) {
      return typeof n == "string" || n instanceof String;
    }, r.isObject = function(n) {
      return n && typeof n == "object";
    }, r.isset = /**
    * Checks if a property on a message is considered to be present.
    * @param {Object} obj Plain object or message instance
    * @param {string} prop Property name
    * @returns {boolean} `true` if considered to be present, otherwise `false`
    */
    r.isSet = function(n, o) {
      var i = n[o];
      return i != null && n.hasOwnProperty(o) ? typeof i != "object" || (Array.isArray(i) ? i.length : Object.keys(i).length) > 0 : !1;
    }, r.Buffer = function() {
      try {
        var n = r.inquire("buffer").Buffer;
        return n.prototype.utf8Write ? n : (
          /* istanbul ignore next */
          null
        );
      } catch {
        return null;
      }
    }(), r._Buffer_from = null, r._Buffer_allocUnsafe = null, r.newBuffer = function(n) {
      return typeof n == "number" ? r.Buffer ? r._Buffer_allocUnsafe(n) : new r.Array(n) : r.Buffer ? r._Buffer_from(n) : typeof Uint8Array > "u" ? n : new Uint8Array(n);
    }, r.Array = typeof Uint8Array < "u" ? Uint8Array : Array, r.Long = /* istanbul ignore next */
    r.global.dcodeIO && /* istanbul ignore next */
    r.global.dcodeIO.Long || /* istanbul ignore next */
    r.global.Long || r.inquire("long"), r.key2Re = /^true|false|0|1$/, r.key32Re = /^-?(?:0|[1-9][0-9]*)$/, r.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, r.longToHash = function(n) {
      return n ? r.LongBits.from(n).toHash() : r.LongBits.zeroHash;
    }, r.longFromHash = function(n, o) {
      var i = r.LongBits.fromHash(n);
      return r.Long ? r.Long.fromBits(i.lo, i.hi, o) : i.toNumber(!!o);
    };
    function t(n, o, i) {
      for (var a = Object.keys(o), s = 0; s < a.length; ++s)
        (n[a[s]] === void 0 || !i) && (n[a[s]] = o[a[s]]);
      return n;
    }
    r.merge = t, r.lcFirst = function(n) {
      return n.charAt(0).toLowerCase() + n.substring(1);
    };
    function e(n) {
      function o(i, a) {
        if (!(this instanceof o))
          return new o(i, a);
        Object.defineProperty(this, "message", { get: function() {
          return i;
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
    r.newError = e, r.ProtocolError = e("ProtocolError"), r.oneOfGetter = function(n) {
      for (var o = {}, i = 0; i < n.length; ++i)
        o[n[i]] = 1;
      return function() {
        for (var a = Object.keys(this), s = a.length - 1; s > -1; --s)
          if (o[a[s]] === 1 && this[a[s]] !== void 0 && this[a[s]] !== null)
            return a[s];
      };
    }, r.oneOfSetter = function(n) {
      return function(o) {
        for (var i = 0; i < n.length; ++i)
          n[i] !== o && delete this[n[i]];
      };
    }, r.toJSONOptions = {
      longs: String,
      enums: String,
      bytes: String,
      json: !0
    }, r._configure = function() {
      var n = r.Buffer;
      if (!n) {
        r._Buffer_from = r._Buffer_allocUnsafe = null;
        return;
      }
      r._Buffer_from = n.from !== Uint8Array.from && n.from || /* istanbul ignore next */
      function(o, i) {
        return new n(o, i);
      }, r._Buffer_allocUnsafe = n.allocUnsafe || /* istanbul ignore next */
      function(o) {
        return new n(o);
      };
    };
  }(Da)), Da;
}
var Uc = z, lt = p0(), Zo, lr = lt.LongBits, Ua = lt.base64, za = lt.utf8;
function Dn(x, r, t) {
  this.fn = x, this.len = r, this.next = void 0, this.val = t;
}
function ai() {
}
function wI(x) {
  this.head = x.head, this.tail = x.tail, this.len = x.len, this.next = x.states;
}
function z() {
  this.len = 0, this.head = new Dn(ai, 0, 0), this.tail = this.head, this.states = null;
}
var zc = function() {
  return lt.Buffer ? function() {
    return (z.create = function() {
      return new Zo();
    })();
  } : function() {
    return new z();
  };
};
z.create = zc();
z.alloc = function(x) {
  return new lt.Array(x);
};
lt.Array !== Array && (z.alloc = lt.pool(z.alloc, lt.Array.prototype.subarray));
z.prototype._push = function(x, r, t) {
  return this.tail = this.tail.next = new Dn(x, r, t), this.len += r, this;
};
function si(x, r, t) {
  r[t] = x & 255;
}
function BI(x, r, t) {
  for (; x > 127; )
    r[t++] = x & 127 | 128, x >>>= 7;
  r[t] = x;
}
function ci(x, r) {
  this.len = x, this.next = void 0, this.val = r;
}
ci.prototype = Object.create(Dn.prototype);
ci.prototype.fn = BI;
z.prototype.uint32 = function(x) {
  return this.len += (this.tail = this.tail.next = new ci(
    (x = x >>> 0) < 128 ? 1 : x < 16384 ? 2 : x < 2097152 ? 3 : x < 268435456 ? 4 : 5,
    x
  )).len, this;
};
z.prototype.int32 = function(x) {
  return x < 0 ? this._push(gi, 10, lr.fromNumber(x)) : this.uint32(x);
};
z.prototype.sint32 = function(x) {
  return this.uint32((x << 1 ^ x >> 31) >>> 0);
};
function gi(x, r, t) {
  for (; x.hi; )
    r[t++] = x.lo & 127 | 128, x.lo = (x.lo >>> 7 | x.hi << 25) >>> 0, x.hi >>>= 7;
  for (; x.lo > 127; )
    r[t++] = x.lo & 127 | 128, x.lo = x.lo >>> 7;
  r[t++] = x.lo;
}
z.prototype.uint64 = function(x) {
  var r = lr.from(x);
  return this._push(gi, r.length(), r);
};
z.prototype.int64 = z.prototype.uint64;
z.prototype.sint64 = function(x) {
  var r = lr.from(x).zzEncode();
  return this._push(gi, r.length(), r);
};
z.prototype.bool = function(x) {
  return this._push(si, 1, x ? 1 : 0);
};
function Ko(x, r, t) {
  r[t] = x & 255, r[t + 1] = x >>> 8 & 255, r[t + 2] = x >>> 16 & 255, r[t + 3] = x >>> 24;
}
z.prototype.fixed32 = function(x) {
  return this._push(Ko, 4, x >>> 0);
};
z.prototype.sfixed32 = z.prototype.fixed32;
z.prototype.fixed64 = function(x) {
  var r = lr.from(x);
  return this._push(Ko, 4, r.lo)._push(Ko, 4, r.hi);
};
z.prototype.sfixed64 = z.prototype.fixed64;
z.prototype.float = function(x) {
  return this._push(lt.float.writeFloatLE, 4, x);
};
z.prototype.double = function(x) {
  return this._push(lt.float.writeDoubleLE, 8, x);
};
var GI = lt.Array.prototype.set ? function(x, r, t) {
  r.set(x, t);
} : function(x, r, t) {
  for (var e = 0; e < x.length; ++e)
    r[t + e] = x[e];
};
z.prototype.bytes = function(x) {
  var r = x.length >>> 0;
  if (!r)
    return this._push(si, 1, 0);
  if (lt.isString(x)) {
    var t = z.alloc(r = Ua.length(x));
    Ua.decode(x, t, 0), x = t;
  }
  return this.uint32(r)._push(GI, r, x);
};
z.prototype.string = function(x) {
  var r = za.length(x);
  return r ? this.uint32(r)._push(za.write, r, x) : this._push(si, 1, 0);
};
z.prototype.fork = function() {
  return this.states = new wI(this), this.head = this.tail = new Dn(ai, 0, 0), this.len = 0, this;
};
z.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Dn(ai, 0, 0), this.len = 0), this;
};
z.prototype.ldelim = function() {
  var x = this.head, r = this.tail, t = this.len;
  return this.reset().uint32(t), t && (this.tail.next = x.next, this.tail = r, this.len += t), this;
};
z.prototype.finish = function() {
  for (var x = this.head.next, r = this.constructor.alloc(this.len), t = 0; x; )
    x.fn(x.val, r, t), t += x.len, x = x.next;
  return r;
};
z._configure = function(x) {
  Zo = x, z.create = zc(), Zo._configure();
};
var kI = Gt, qc = Uc;
(Gt.prototype = Object.create(qc.prototype)).constructor = Gt;
var Jt = p0();
function Gt() {
  qc.call(this);
}
Gt._configure = function() {
  Gt.alloc = Jt._Buffer_allocUnsafe, Gt.writeBytesBuffer = Jt.Buffer && Jt.Buffer.prototype instanceof Uint8Array && Jt.Buffer.prototype.set.name === "set" ? function(x, r, t) {
    r.set(x, t);
  } : function(x, r, t) {
    if (x.copy)
      x.copy(r, t, 0, x.length);
    else
      for (var e = 0; e < x.length; )
        r[t++] = x[e++];
  };
};
Gt.prototype.bytes = function(x) {
  Jt.isString(x) && (x = Jt._Buffer_from(x, "base64"));
  var r = x.length >>> 0;
  return this.uint32(r), r && this._push(Gt.writeBytesBuffer, r, x), this;
};
function HI(x, r, t) {
  x.length < 40 ? Jt.utf8.write(x, r, t) : r.utf8Write ? r.utf8Write(x, t) : r.write(x, t);
}
Gt.prototype.string = function(x) {
  var r = Jt.Buffer.byteLength(x);
  return this.uint32(r), r && this._push(HI, r, x), this;
};
Gt._configure();
var $c = le, kt = p0(), Ro, eg = kt.LongBits, OI = kt.utf8;
function yt(x, r) {
  return RangeError("index out of range: " + x.pos + " + " + (r || 1) + " > " + x.len);
}
function le(x) {
  this.buf = x, this.pos = 0, this.len = x.length;
}
var qa = typeof Uint8Array < "u" ? function(x) {
  if (x instanceof Uint8Array || Array.isArray(x))
    return new le(x);
  throw Error("illegal buffer");
} : function(x) {
  if (Array.isArray(x))
    return new le(x);
  throw Error("illegal buffer");
}, tg = function() {
  return kt.Buffer ? function(x) {
    return (le.create = function(r) {
      return kt.Buffer.isBuffer(r) ? new Ro(r) : qa(r);
    })(x);
  } : qa;
};
le.create = tg();
le.prototype._slice = kt.Array.prototype.subarray || /* istanbul ignore next */
kt.Array.prototype.slice;
le.prototype.uint32 = /* @__PURE__ */ function() {
  var x = 4294967295;
  return function() {
    if (x = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (x = (x | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return x;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, yt(this, 10);
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
function Xr() {
  var x = new eg(0, 0), r = 0;
  if (this.len - this.pos > 4) {
    for (; r < 4; ++r)
      if (x.lo = (x.lo | (this.buf[this.pos] & 127) << r * 7) >>> 0, this.buf[this.pos++] < 128)
        return x;
    if (x.lo = (x.lo | (this.buf[this.pos] & 127) << 28) >>> 0, x.hi = (x.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
      return x;
    r = 0;
  } else {
    for (; r < 3; ++r) {
      if (this.pos >= this.len)
        throw yt(this);
      if (x.lo = (x.lo | (this.buf[this.pos] & 127) << r * 7) >>> 0, this.buf[this.pos++] < 128)
        return x;
    }
    return x.lo = (x.lo | (this.buf[this.pos++] & 127) << r * 7) >>> 0, x;
  }
  if (this.len - this.pos > 4) {
    for (; r < 5; ++r)
      if (x.hi = (x.hi | (this.buf[this.pos] & 127) << r * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return x;
  } else
    for (; r < 5; ++r) {
      if (this.pos >= this.len)
        throw yt(this);
      if (x.hi = (x.hi | (this.buf[this.pos] & 127) << r * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return x;
    }
  throw Error("invalid varint encoding");
}
le.prototype.bool = function() {
  return this.uint32() !== 0;
};
function qx(x, r) {
  return (x[r - 4] | x[r - 3] << 8 | x[r - 2] << 16 | x[r - 1] << 24) >>> 0;
}
le.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw yt(this, 4);
  return qx(this.buf, this.pos += 4);
};
le.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw yt(this, 4);
  return qx(this.buf, this.pos += 4) | 0;
};
function $a() {
  if (this.pos + 8 > this.len)
    throw yt(this, 8);
  return new eg(qx(this.buf, this.pos += 4), qx(this.buf, this.pos += 4));
}
le.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw yt(this, 4);
  var x = kt.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, x;
};
le.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw yt(this, 4);
  var x = kt.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, x;
};
le.prototype.bytes = function() {
  var x = this.uint32(), r = this.pos, t = this.pos + x;
  if (t > this.len)
    throw yt(this, x);
  return this.pos += x, Array.isArray(this.buf) ? this.buf.slice(r, t) : r === t ? new this.buf.constructor(0) : this._slice.call(this.buf, r, t);
};
le.prototype.string = function() {
  var x = this.bytes();
  return OI.read(x, 0, x.length);
};
le.prototype.skip = function(x) {
  if (typeof x == "number") {
    if (this.pos + x > this.len)
      throw yt(this, x);
    this.pos += x;
  } else
    do
      if (this.pos >= this.len)
        throw yt(this);
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
  Ro = x, le.create = tg(), Ro._configure();
  var r = kt.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  kt.merge(le.prototype, {
    int64: function() {
      return Xr.call(this)[r](!1);
    },
    uint64: function() {
      return Xr.call(this)[r](!0);
    },
    sint64: function() {
      return Xr.call(this).zzDecode()[r](!1);
    },
    fixed64: function() {
      return $a.call(this)[r](!0);
    },
    sfixed64: function() {
      return $a.call(this)[r](!1);
    }
  });
};
var ZI = f0, ng = $c;
(f0.prototype = Object.create(ng.prototype)).constructor = f0;
var es = p0();
function f0(x) {
  ng.call(this, x);
}
f0._configure = function() {
  es.Buffer && (f0.prototype._slice = es.Buffer.prototype.slice);
};
f0.prototype.string = function() {
  var x = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + x, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + x, this.len));
};
f0._configure();
var xg = {}, KI = An, di = p0();
(An.prototype = Object.create(di.EventEmitter.prototype)).constructor = An;
function An(x, r, t) {
  if (typeof x != "function")
    throw TypeError("rpcImpl must be a function");
  di.EventEmitter.call(this), this.rpcImpl = x, this.requestDelimited = !!r, this.responseDelimited = !!t;
}
An.prototype.rpcCall = function x(r, t, e, n, o) {
  if (!n)
    throw TypeError("request must be specified");
  var i = this;
  if (!o)
    return di.asPromise(x, i, r, t, e, n);
  if (!i.rpcImpl) {
    setTimeout(function() {
      o(Error("already ended"));
    }, 0);
    return;
  }
  try {
    return i.rpcImpl(
      r,
      t[i.requestDelimited ? "encodeDelimited" : "encode"](n).finish(),
      function(a, s) {
        if (a)
          return i.emit("error", a, r), o(a);
        if (s === null) {
          i.end(
            /* endedByRPC */
            !0
          );
          return;
        }
        if (!(s instanceof e))
          try {
            s = e[i.responseDelimited ? "decodeDelimited" : "decode"](s);
          } catch (c) {
            return i.emit("error", c, r), o(c);
          }
        return i.emit("data", s, r), o(null, s);
      }
    );
  } catch (a) {
    i.emit("error", a, r), setTimeout(function() {
      o(a);
    }, 0);
    return;
  }
};
An.prototype.end = function(x) {
  return this.rpcImpl && (x || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(x) {
  var r = x;
  r.Service = KI;
})(xg);
var RI = {};
(function(x) {
  var r = x;
  r.build = "minimal", r.Writer = Uc, r.BufferWriter = kI, r.Reader = $c, r.BufferReader = ZI, r.util = p0(), r.rpc = xg, r.roots = RI, r.configure = t;
  function t() {
    r.util._configure(), r.Writer._configure(r.BufferWriter), r.Reader._configure(r.BufferReader);
  }
  t();
})(Jc);
var ne = Jc;
const B = ne.Reader, de = ne.Writer, v = ne.util, b = ne.roots.default || (ne.roots.default = {}), C0 = b.dot = (() => {
  const x = {};
  return x.Content = function() {
    function r(t) {
      if (t)
        for (let e = Object.keys(t), n = 0; n < e.length; ++n)
          t[e[n]] != null && (this[e[n]] = t[e[n]]);
    }
    return r.prototype.token = v.newBuffer([]), r.prototype.iv = v.newBuffer([]), r.prototype.schemaVersion = 0, r.prototype.bytes = v.newBuffer([]), r.create = function(t) {
      return new r(t);
    }, r.encode = function(t, e) {
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
    }, r.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, r.decode = function(t, e) {
      t instanceof B || (t = B.create(t));
      let n = e === void 0 ? t.len : t.pos + e, o = new b.dot.Content();
      for (; t.pos < n; ) {
        let i = t.uint32();
        switch (i >>> 3) {
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
            t.skipType(i & 7);
            break;
        }
      }
      return o;
    }, r.decodeDelimited = function(t) {
      return t instanceof B || (t = new B(t)), this.decode(t, t.uint32());
    }, r.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || v.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || v.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !v.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || v.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, r.fromObject = function(t) {
      if (t instanceof b.dot.Content)
        return t;
      let e = new b.dot.Content();
      return t.token != null && (typeof t.token == "string" ? v.base64.decode(t.token, e.token = v.newBuffer(v.base64.length(t.token)), 0) : t.token.length >= 0 && (e.token = t.token)), t.iv != null && (typeof t.iv == "string" ? v.base64.decode(t.iv, e.iv = v.newBuffer(v.base64.length(t.iv)), 0) : t.iv.length >= 0 && (e.iv = t.iv)), t.schemaVersion != null && (e.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? v.base64.decode(t.bytes, e.bytes = v.newBuffer(v.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, r.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      return e.defaults && (e.bytes === String ? n.token = "" : (n.token = [], e.bytes !== Array && (n.token = v.newBuffer(n.token))), e.bytes === String ? n.iv = "" : (n.iv = [], e.bytes !== Array && (n.iv = v.newBuffer(n.iv))), n.schemaVersion = 0, e.bytes === String ? n.bytes = "" : (n.bytes = [], e.bytes !== Array && (n.bytes = v.newBuffer(n.bytes)))), t.token != null && t.hasOwnProperty("token") && (n.token = e.bytes === String ? v.base64.encode(t.token, 0, t.token.length) : e.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (n.iv = e.bytes === String ? v.base64.encode(t.iv, 0, t.iv.length) : e.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (n.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (n.bytes = e.bytes === String ? v.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), n;
    }, r.prototype.toJSON = function() {
      return this.constructor.toObject(this, ne.util.toJSONOptions);
    }, r.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Content";
    }, r;
  }(), x.v4 = function() {
    const r = {};
    return r.MagnifEyeLivenessContent = function() {
      function t(e) {
        if (this.images = [], e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
      }
      return t.prototype.images = v.emptyArray, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = de.create()), e.images != null && e.images.length)
          for (let o = 0; o < e.images.length; ++o)
            b.dot.Image.encode(e.images[o], n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && b.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let o = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.MagnifEyeLivenessContent();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.images && i.images.length || (i.images = []), i.images.push(b.dot.Image.decode(e, e.uint32()));
              break;
            }
            case 2: {
              i.metadata = b.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.images != null && e.hasOwnProperty("images")) {
          if (!Array.isArray(e.images))
            return "images: array expected";
          for (let n = 0; n < e.images.length; ++n) {
            let o = b.dot.Image.verify(e.images[n]);
            if (o)
              return "images." + o;
          }
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = b.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof b.dot.v4.MagnifEyeLivenessContent)
          return e;
        let n = new b.dot.v4.MagnifEyeLivenessContent();
        if (e.images) {
          if (!Array.isArray(e.images))
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: array expected");
          n.images = [];
          for (let o = 0; o < e.images.length; ++o) {
            if (typeof e.images[o] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            n.images[o] = b.dot.Image.fromObject(e.images[o]);
          }
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.metadata: object expected");
          n.metadata = b.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let o = {};
        if ((n.arrays || n.defaults) && (o.images = []), n.defaults && (o.metadata = null), e.images && e.images.length) {
          o.images = [];
          for (let i = 0; i < e.images.length; ++i)
            o.images[i] = b.dot.Image.toObject(e.images[i], n);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = b.dot.v4.Metadata.toObject(e.metadata, n)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MagnifEyeLivenessContent";
      }, t;
    }(), r.Metadata = function() {
      function t(n) {
        if (n)
          for (let o = Object.keys(n), i = 0; i < o.length; ++i)
            n[o[i]] != null && (this[o[i]] = n[o[i]]);
      }
      t.prototype.platform = 0, t.prototype.sessionToken = null, t.prototype.componentVersion = "", t.prototype.web = null, t.prototype.android = null, t.prototype.ios = null;
      let e;
      return Object.defineProperty(t.prototype, "_sessionToken", {
        get: v.oneOfGetter(e = ["sessionToken"]),
        set: v.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "metadata", {
        get: v.oneOfGetter(e = ["web", "android", "ios"]),
        set: v.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, o) {
        return o || (o = de.create()), n.platform != null && Object.hasOwnProperty.call(n, "platform") && o.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(n.platform), n.web != null && Object.hasOwnProperty.call(n, "web") && b.dot.v4.WebMetadata.encode(n.web, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.android != null && Object.hasOwnProperty.call(n, "android") && b.dot.v4.AndroidMetadata.encode(n.android, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.ios != null && Object.hasOwnProperty.call(n, "ios") && b.dot.v4.IosMetadata.encode(n.ios, o.uint32(
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
        let i = o === void 0 ? n.len : n.pos + o, a = new b.dot.v4.Metadata();
        for (; n.pos < i; ) {
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
              a.web = b.dot.v4.WebMetadata.decode(n, n.uint32());
              break;
            }
            case 3: {
              a.android = b.dot.v4.AndroidMetadata.decode(n, n.uint32());
              break;
            }
            case 4: {
              a.ios = b.dot.v4.IosMetadata.decode(n, n.uint32());
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
        if (n.sessionToken != null && n.hasOwnProperty("sessionToken") && (o._sessionToken = 1, !v.isString(n.sessionToken)))
          return "sessionToken: string expected";
        if (n.componentVersion != null && n.hasOwnProperty("componentVersion") && !v.isString(n.componentVersion))
          return "componentVersion: string expected";
        if (n.web != null && n.hasOwnProperty("web")) {
          o.metadata = 1;
          {
            let i = b.dot.v4.WebMetadata.verify(n.web);
            if (i)
              return "web." + i;
          }
        }
        if (n.android != null && n.hasOwnProperty("android")) {
          if (o.metadata === 1)
            return "metadata: multiple values";
          o.metadata = 1;
          {
            let i = b.dot.v4.AndroidMetadata.verify(n.android);
            if (i)
              return "android." + i;
          }
        }
        if (n.ios != null && n.hasOwnProperty("ios")) {
          if (o.metadata === 1)
            return "metadata: multiple values";
          o.metadata = 1;
          {
            let i = b.dot.v4.IosMetadata.verify(n.ios);
            if (i)
              return "ios." + i;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof b.dot.v4.Metadata)
          return n;
        let o = new b.dot.v4.Metadata();
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
          o.web = b.dot.v4.WebMetadata.fromObject(n.web);
        }
        if (n.android != null) {
          if (typeof n.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          o.android = b.dot.v4.AndroidMetadata.fromObject(n.android);
        }
        if (n.ios != null) {
          if (typeof n.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          o.ios = b.dot.v4.IosMetadata.fromObject(n.ios);
        }
        return o;
      }, t.toObject = function(n, o) {
        o || (o = {});
        let i = {};
        return o.defaults && (i.platform = o.enums === String ? "WEB" : 0, i.componentVersion = ""), n.platform != null && n.hasOwnProperty("platform") && (i.platform = o.enums === String ? b.dot.Platform[n.platform] === void 0 ? n.platform : b.dot.Platform[n.platform] : n.platform), n.web != null && n.hasOwnProperty("web") && (i.web = b.dot.v4.WebMetadata.toObject(n.web, o), o.oneofs && (i.metadata = "web")), n.android != null && n.hasOwnProperty("android") && (i.android = b.dot.v4.AndroidMetadata.toObject(n.android, o), o.oneofs && (i.metadata = "android")), n.ios != null && n.hasOwnProperty("ios") && (i.ios = b.dot.v4.IosMetadata.toObject(n.ios, o), o.oneofs && (i.metadata = "ios")), n.sessionToken != null && n.hasOwnProperty("sessionToken") && (i.sessionToken = n.sessionToken, o.oneofs && (i._sessionToken = "sessionToken")), n.componentVersion != null && n.hasOwnProperty("componentVersion") && (i.componentVersion = n.componentVersion), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.Metadata";
      }, t;
    }(), r.AndroidMetadata = function() {
      function t(n) {
        if (this.supportedAbis = [], this.digests = [], this.digestsWithTimestamp = [], this.dynamicCameraFrameProperties = {}, n)
          for (let o = Object.keys(n), i = 0; i < o.length; ++i)
            n[o[i]] != null && (this[o[i]] = n[o[i]]);
      }
      t.prototype.supportedAbis = v.emptyArray, t.prototype.device = null, t.prototype.digests = v.emptyArray, t.prototype.digestsWithTimestamp = v.emptyArray, t.prototype.dynamicCameraFrameProperties = v.emptyObject;
      let e;
      return Object.defineProperty(t.prototype, "_device", {
        get: v.oneOfGetter(e = ["device"]),
        set: v.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, o) {
        if (o || (o = de.create()), n.supportedAbis != null && n.supportedAbis.length)
          for (let i = 0; i < n.supportedAbis.length; ++i)
            o.uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(n.supportedAbis[i]);
        if (n.device != null && Object.hasOwnProperty.call(n, "device") && o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(n.device), n.digests != null && n.digests.length)
          for (let i = 0; i < n.digests.length; ++i)
            o.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(n.digests[i]);
        if (n.dynamicCameraFrameProperties != null && Object.hasOwnProperty.call(n, "dynamicCameraFrameProperties"))
          for (let i = Object.keys(n.dynamicCameraFrameProperties), a = 0; a < i.length; ++a)
            o.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(i[a]), b.dot.Int32List.encode(n.dynamicCameraFrameProperties[i[a]], o.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (n.digestsWithTimestamp != null && n.digestsWithTimestamp.length)
          for (let i = 0; i < n.digestsWithTimestamp.length; ++i)
            b.dot.DigestWithTimestamp.encode(n.digestsWithTimestamp[i], o.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return o;
      }, t.encodeDelimited = function(n, o) {
        return this.encode(n, o).ldelim();
      }, t.decode = function(n, o) {
        n instanceof B || (n = B.create(n));
        let i = o === void 0 ? n.len : n.pos + o, a = new b.dot.v4.AndroidMetadata(), s, c;
        for (; n.pos < i; ) {
          let l = n.uint32();
          switch (l >>> 3) {
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
              a.digestsWithTimestamp && a.digestsWithTimestamp.length || (a.digestsWithTimestamp = []), a.digestsWithTimestamp.push(b.dot.DigestWithTimestamp.decode(n, n.uint32()));
              break;
            }
            case 4: {
              a.dynamicCameraFrameProperties === v.emptyObject && (a.dynamicCameraFrameProperties = {});
              let g = n.uint32() + n.pos;
              for (s = "", c = null; n.pos < g; ) {
                let h = n.uint32();
                switch (h >>> 3) {
                  case 1:
                    s = n.string();
                    break;
                  case 2:
                    c = b.dot.Int32List.decode(n, n.uint32());
                    break;
                  default:
                    n.skipType(h & 7);
                    break;
                }
              }
              a.dynamicCameraFrameProperties[s] = c;
              break;
            }
            default:
              n.skipType(l & 7);
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
            if (!v.isString(n.supportedAbis[o]))
              return "supportedAbis: string[] expected";
        }
        if (n.device != null && n.hasOwnProperty("device") && !v.isString(n.device))
          return "device: string expected";
        if (n.digests != null && n.hasOwnProperty("digests")) {
          if (!Array.isArray(n.digests))
            return "digests: array expected";
          for (let o = 0; o < n.digests.length; ++o)
            if (!(n.digests[o] && typeof n.digests[o].length == "number" || v.isString(n.digests[o])))
              return "digests: buffer[] expected";
        }
        if (n.digestsWithTimestamp != null && n.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(n.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let o = 0; o < n.digestsWithTimestamp.length; ++o) {
            let i = b.dot.DigestWithTimestamp.verify(n.digestsWithTimestamp[o]);
            if (i)
              return "digestsWithTimestamp." + i;
          }
        }
        if (n.dynamicCameraFrameProperties != null && n.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!v.isObject(n.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let o = Object.keys(n.dynamicCameraFrameProperties);
          for (let i = 0; i < o.length; ++i) {
            let a = b.dot.Int32List.verify(n.dynamicCameraFrameProperties[o[i]]);
            if (a)
              return "dynamicCameraFrameProperties." + a;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof b.dot.v4.AndroidMetadata)
          return n;
        let o = new b.dot.v4.AndroidMetadata();
        if (n.supportedAbis) {
          if (!Array.isArray(n.supportedAbis))
            throw TypeError(".dot.v4.AndroidMetadata.supportedAbis: array expected");
          o.supportedAbis = [];
          for (let i = 0; i < n.supportedAbis.length; ++i)
            o.supportedAbis[i] = String(n.supportedAbis[i]);
        }
        if (n.device != null && (o.device = String(n.device)), n.digests) {
          if (!Array.isArray(n.digests))
            throw TypeError(".dot.v4.AndroidMetadata.digests: array expected");
          o.digests = [];
          for (let i = 0; i < n.digests.length; ++i)
            typeof n.digests[i] == "string" ? v.base64.decode(n.digests[i], o.digests[i] = v.newBuffer(v.base64.length(n.digests[i])), 0) : n.digests[i].length >= 0 && (o.digests[i] = n.digests[i]);
        }
        if (n.digestsWithTimestamp) {
          if (!Array.isArray(n.digestsWithTimestamp))
            throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: array expected");
          o.digestsWithTimestamp = [];
          for (let i = 0; i < n.digestsWithTimestamp.length; ++i) {
            if (typeof n.digestsWithTimestamp[i] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: object expected");
            o.digestsWithTimestamp[i] = b.dot.DigestWithTimestamp.fromObject(n.digestsWithTimestamp[i]);
          }
        }
        if (n.dynamicCameraFrameProperties) {
          if (typeof n.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          o.dynamicCameraFrameProperties = {};
          for (let i = Object.keys(n.dynamicCameraFrameProperties), a = 0; a < i.length; ++a) {
            if (typeof n.dynamicCameraFrameProperties[i[a]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            o.dynamicCameraFrameProperties[i[a]] = b.dot.Int32List.fromObject(n.dynamicCameraFrameProperties[i[a]]);
          }
        }
        return o;
      }, t.toObject = function(n, o) {
        o || (o = {});
        let i = {};
        if ((o.arrays || o.defaults) && (i.supportedAbis = [], i.digests = [], i.digestsWithTimestamp = []), (o.objects || o.defaults) && (i.dynamicCameraFrameProperties = {}), n.supportedAbis && n.supportedAbis.length) {
          i.supportedAbis = [];
          for (let s = 0; s < n.supportedAbis.length; ++s)
            i.supportedAbis[s] = n.supportedAbis[s];
        }
        if (n.device != null && n.hasOwnProperty("device") && (i.device = n.device, o.oneofs && (i._device = "device")), n.digests && n.digests.length) {
          i.digests = [];
          for (let s = 0; s < n.digests.length; ++s)
            i.digests[s] = o.bytes === String ? v.base64.encode(n.digests[s], 0, n.digests[s].length) : o.bytes === Array ? Array.prototype.slice.call(n.digests[s]) : n.digests[s];
        }
        let a;
        if (n.dynamicCameraFrameProperties && (a = Object.keys(n.dynamicCameraFrameProperties)).length) {
          i.dynamicCameraFrameProperties = {};
          for (let s = 0; s < a.length; ++s)
            i.dynamicCameraFrameProperties[a[s]] = b.dot.Int32List.toObject(n.dynamicCameraFrameProperties[a[s]], o);
        }
        if (n.digestsWithTimestamp && n.digestsWithTimestamp.length) {
          i.digestsWithTimestamp = [];
          for (let s = 0; s < n.digestsWithTimestamp.length; ++s)
            i.digestsWithTimestamp[s] = b.dot.DigestWithTimestamp.toObject(n.digestsWithTimestamp[s], o);
        }
        return i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.AndroidMetadata";
      }, t;
    }(), r.IosMetadata = function() {
      function t(e) {
        if (this.architectureInfo = {}, this.digests = [], this.digestsWithTimestamp = [], this.isoValues = [], e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
      }
      return t.prototype.cameraModelId = "", t.prototype.architectureInfo = v.emptyObject, t.prototype.digests = v.emptyArray, t.prototype.digestsWithTimestamp = v.emptyArray, t.prototype.isoValues = v.emptyArray, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = de.create()), e.cameraModelId != null && Object.hasOwnProperty.call(e, "cameraModelId") && n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(e.cameraModelId), e.architectureInfo != null && Object.hasOwnProperty.call(e, "architectureInfo"))
          for (let o = Object.keys(e.architectureInfo), i = 0; i < o.length; ++i)
            n.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(o[i]).uint32(
              /* id 2, wireType 0 =*/
              16
            ).bool(e.architectureInfo[o[i]]).ldelim();
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
            b.dot.DigestWithTimestamp.encode(e.digestsWithTimestamp[o], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let o = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.IosMetadata(), a, s;
        for (; e.pos < o; ) {
          let c = e.uint32();
          switch (c >>> 3) {
            case 1: {
              i.cameraModelId = e.string();
              break;
            }
            case 2: {
              i.architectureInfo === v.emptyObject && (i.architectureInfo = {});
              let l = e.uint32() + e.pos;
              for (a = "", s = !1; e.pos < l; ) {
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
              i.architectureInfo[a] = s;
              break;
            }
            case 3: {
              i.digests && i.digests.length || (i.digests = []), i.digests.push(e.bytes());
              break;
            }
            case 5: {
              i.digestsWithTimestamp && i.digestsWithTimestamp.length || (i.digestsWithTimestamp = []), i.digestsWithTimestamp.push(b.dot.DigestWithTimestamp.decode(e, e.uint32()));
              break;
            }
            case 4: {
              if (i.isoValues && i.isoValues.length || (i.isoValues = []), (c & 7) === 2) {
                let l = e.uint32() + e.pos;
                for (; e.pos < l; )
                  i.isoValues.push(e.int32());
              } else
                i.isoValues.push(e.int32());
              break;
            }
            default:
              e.skipType(c & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.cameraModelId != null && e.hasOwnProperty("cameraModelId") && !v.isString(e.cameraModelId))
          return "cameraModelId: string expected";
        if (e.architectureInfo != null && e.hasOwnProperty("architectureInfo")) {
          if (!v.isObject(e.architectureInfo))
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
            if (!(e.digests[n] && typeof e.digests[n].length == "number" || v.isString(e.digests[n])))
              return "digests: buffer[] expected";
        }
        if (e.digestsWithTimestamp != null && e.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(e.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let n = 0; n < e.digestsWithTimestamp.length; ++n) {
            let o = b.dot.DigestWithTimestamp.verify(e.digestsWithTimestamp[n]);
            if (o)
              return "digestsWithTimestamp." + o;
          }
        }
        if (e.isoValues != null && e.hasOwnProperty("isoValues")) {
          if (!Array.isArray(e.isoValues))
            return "isoValues: array expected";
          for (let n = 0; n < e.isoValues.length; ++n)
            if (!v.isInteger(e.isoValues[n]))
              return "isoValues: integer[] expected";
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof b.dot.v4.IosMetadata)
          return e;
        let n = new b.dot.v4.IosMetadata();
        if (e.cameraModelId != null && (n.cameraModelId = String(e.cameraModelId)), e.architectureInfo) {
          if (typeof e.architectureInfo != "object")
            throw TypeError(".dot.v4.IosMetadata.architectureInfo: object expected");
          n.architectureInfo = {};
          for (let o = Object.keys(e.architectureInfo), i = 0; i < o.length; ++i)
            n.architectureInfo[o[i]] = !!e.architectureInfo[o[i]];
        }
        if (e.digests) {
          if (!Array.isArray(e.digests))
            throw TypeError(".dot.v4.IosMetadata.digests: array expected");
          n.digests = [];
          for (let o = 0; o < e.digests.length; ++o)
            typeof e.digests[o] == "string" ? v.base64.decode(e.digests[o], n.digests[o] = v.newBuffer(v.base64.length(e.digests[o])), 0) : e.digests[o].length >= 0 && (n.digests[o] = e.digests[o]);
        }
        if (e.digestsWithTimestamp) {
          if (!Array.isArray(e.digestsWithTimestamp))
            throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: array expected");
          n.digestsWithTimestamp = [];
          for (let o = 0; o < e.digestsWithTimestamp.length; ++o) {
            if (typeof e.digestsWithTimestamp[o] != "object")
              throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: object expected");
            n.digestsWithTimestamp[o] = b.dot.DigestWithTimestamp.fromObject(e.digestsWithTimestamp[o]);
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
        let i;
        if (e.architectureInfo && (i = Object.keys(e.architectureInfo)).length) {
          o.architectureInfo = {};
          for (let a = 0; a < i.length; ++a)
            o.architectureInfo[i[a]] = e.architectureInfo[i[a]];
        }
        if (e.digests && e.digests.length) {
          o.digests = [];
          for (let a = 0; a < e.digests.length; ++a)
            o.digests[a] = n.bytes === String ? v.base64.encode(e.digests[a], 0, e.digests[a].length) : n.bytes === Array ? Array.prototype.slice.call(e.digests[a]) : e.digests[a];
        }
        if (e.isoValues && e.isoValues.length) {
          o.isoValues = [];
          for (let a = 0; a < e.isoValues.length; ++a)
            o.isoValues[a] = e.isoValues[a];
        }
        if (e.digestsWithTimestamp && e.digestsWithTimestamp.length) {
          o.digestsWithTimestamp = [];
          for (let a = 0; a < e.digestsWithTimestamp.length; ++a)
            o.digestsWithTimestamp[a] = b.dot.DigestWithTimestamp.toObject(e.digestsWithTimestamp[a], n);
        }
        return o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosMetadata";
      }, t;
    }(), r.WebMetadata = function() {
      function t(e) {
        if (this.availableCameraProperties = [], this.hashedDetectedImages = [], this.hashedDetectedImagesWithTimestamp = [], this.detectionRecord = [], e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
      }
      return t.prototype.currentCameraProperties = null, t.prototype.availableCameraProperties = v.emptyArray, t.prototype.hashedDetectedImages = v.emptyArray, t.prototype.hashedDetectedImagesWithTimestamp = v.emptyArray, t.prototype.detectionRecord = v.emptyArray, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = de.create()), e.currentCameraProperties != null && Object.hasOwnProperty.call(e, "currentCameraProperties") && b.dot.v4.MediaTrackSettings.encode(e.currentCameraProperties, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.availableCameraProperties != null && e.availableCameraProperties.length)
          for (let o = 0; o < e.availableCameraProperties.length; ++o)
            b.dot.v4.CameraProperties.encode(e.availableCameraProperties[o], n.uint32(
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
            b.dot.v4.DetectedObject.encode(e.detectionRecord[o], n.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (e.hashedDetectedImagesWithTimestamp != null && e.hashedDetectedImagesWithTimestamp.length)
          for (let o = 0; o < e.hashedDetectedImagesWithTimestamp.length; ++o)
            b.dot.v4.HashedDetectedImageWithTimestamp.encode(e.hashedDetectedImagesWithTimestamp[o], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let o = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.WebMetadata();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.currentCameraProperties = b.dot.v4.MediaTrackSettings.decode(e, e.uint32());
              break;
            }
            case 2: {
              i.availableCameraProperties && i.availableCameraProperties.length || (i.availableCameraProperties = []), i.availableCameraProperties.push(b.dot.v4.CameraProperties.decode(e, e.uint32()));
              break;
            }
            case 3: {
              i.hashedDetectedImages && i.hashedDetectedImages.length || (i.hashedDetectedImages = []), i.hashedDetectedImages.push(e.string());
              break;
            }
            case 5: {
              i.hashedDetectedImagesWithTimestamp && i.hashedDetectedImagesWithTimestamp.length || (i.hashedDetectedImagesWithTimestamp = []), i.hashedDetectedImagesWithTimestamp.push(b.dot.v4.HashedDetectedImageWithTimestamp.decode(e, e.uint32()));
              break;
            }
            case 4: {
              i.detectionRecord && i.detectionRecord.length || (i.detectionRecord = []), i.detectionRecord.push(b.dot.v4.DetectedObject.decode(e, e.uint32()));
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.currentCameraProperties != null && e.hasOwnProperty("currentCameraProperties")) {
          let n = b.dot.v4.MediaTrackSettings.verify(e.currentCameraProperties);
          if (n)
            return "currentCameraProperties." + n;
        }
        if (e.availableCameraProperties != null && e.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(e.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let n = 0; n < e.availableCameraProperties.length; ++n) {
            let o = b.dot.v4.CameraProperties.verify(e.availableCameraProperties[n]);
            if (o)
              return "availableCameraProperties." + o;
          }
        }
        if (e.hashedDetectedImages != null && e.hasOwnProperty("hashedDetectedImages")) {
          if (!Array.isArray(e.hashedDetectedImages))
            return "hashedDetectedImages: array expected";
          for (let n = 0; n < e.hashedDetectedImages.length; ++n)
            if (!v.isString(e.hashedDetectedImages[n]))
              return "hashedDetectedImages: string[] expected";
        }
        if (e.hashedDetectedImagesWithTimestamp != null && e.hasOwnProperty("hashedDetectedImagesWithTimestamp")) {
          if (!Array.isArray(e.hashedDetectedImagesWithTimestamp))
            return "hashedDetectedImagesWithTimestamp: array expected";
          for (let n = 0; n < e.hashedDetectedImagesWithTimestamp.length; ++n) {
            let o = b.dot.v4.HashedDetectedImageWithTimestamp.verify(e.hashedDetectedImagesWithTimestamp[n]);
            if (o)
              return "hashedDetectedImagesWithTimestamp." + o;
          }
        }
        if (e.detectionRecord != null && e.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(e.detectionRecord))
            return "detectionRecord: array expected";
          for (let n = 0; n < e.detectionRecord.length; ++n) {
            let o = b.dot.v4.DetectedObject.verify(e.detectionRecord[n]);
            if (o)
              return "detectionRecord." + o;
          }
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof b.dot.v4.WebMetadata)
          return e;
        let n = new b.dot.v4.WebMetadata();
        if (e.currentCameraProperties != null) {
          if (typeof e.currentCameraProperties != "object")
            throw TypeError(".dot.v4.WebMetadata.currentCameraProperties: object expected");
          n.currentCameraProperties = b.dot.v4.MediaTrackSettings.fromObject(e.currentCameraProperties);
        }
        if (e.availableCameraProperties) {
          if (!Array.isArray(e.availableCameraProperties))
            throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: array expected");
          n.availableCameraProperties = [];
          for (let o = 0; o < e.availableCameraProperties.length; ++o) {
            if (typeof e.availableCameraProperties[o] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            n.availableCameraProperties[o] = b.dot.v4.CameraProperties.fromObject(e.availableCameraProperties[o]);
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
            n.hashedDetectedImagesWithTimestamp[o] = b.dot.v4.HashedDetectedImageWithTimestamp.fromObject(e.hashedDetectedImagesWithTimestamp[o]);
          }
        }
        if (e.detectionRecord) {
          if (!Array.isArray(e.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          n.detectionRecord = [];
          for (let o = 0; o < e.detectionRecord.length; ++o) {
            if (typeof e.detectionRecord[o] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            n.detectionRecord[o] = b.dot.v4.DetectedObject.fromObject(e.detectionRecord[o]);
          }
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let o = {};
        if ((n.arrays || n.defaults) && (o.availableCameraProperties = [], o.hashedDetectedImages = [], o.detectionRecord = [], o.hashedDetectedImagesWithTimestamp = []), n.defaults && (o.currentCameraProperties = null), e.currentCameraProperties != null && e.hasOwnProperty("currentCameraProperties") && (o.currentCameraProperties = b.dot.v4.MediaTrackSettings.toObject(e.currentCameraProperties, n)), e.availableCameraProperties && e.availableCameraProperties.length) {
          o.availableCameraProperties = [];
          for (let i = 0; i < e.availableCameraProperties.length; ++i)
            o.availableCameraProperties[i] = b.dot.v4.CameraProperties.toObject(e.availableCameraProperties[i], n);
        }
        if (e.hashedDetectedImages && e.hashedDetectedImages.length) {
          o.hashedDetectedImages = [];
          for (let i = 0; i < e.hashedDetectedImages.length; ++i)
            o.hashedDetectedImages[i] = e.hashedDetectedImages[i];
        }
        if (e.detectionRecord && e.detectionRecord.length) {
          o.detectionRecord = [];
          for (let i = 0; i < e.detectionRecord.length; ++i)
            o.detectionRecord[i] = b.dot.v4.DetectedObject.toObject(e.detectionRecord[i], n);
        }
        if (e.hashedDetectedImagesWithTimestamp && e.hashedDetectedImagesWithTimestamp.length) {
          o.hashedDetectedImagesWithTimestamp = [];
          for (let i = 0; i < e.hashedDetectedImagesWithTimestamp.length; ++i)
            o.hashedDetectedImagesWithTimestamp[i] = b.dot.v4.HashedDetectedImageWithTimestamp.toObject(e.hashedDetectedImagesWithTimestamp[i], n);
        }
        return o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.WebMetadata";
      }, t;
    }(), r.HashedDetectedImageWithTimestamp = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
      }
      return t.prototype.imageHash = "", t.prototype.timestampMillis = v.Long ? v.Long.fromBits(0, 0, !0) : 0, t.create = function(e) {
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
        let o = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.HashedDetectedImageWithTimestamp();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.imageHash = e.string();
              break;
            }
            case 2: {
              i.timestampMillis = e.uint64();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !v.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !v.isInteger(e.timestampMillis) && !(e.timestampMillis && v.isInteger(e.timestampMillis.low) && v.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof b.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let n = new b.dot.v4.HashedDetectedImageWithTimestamp();
        return e.imageHash != null && (n.imageHash = String(e.imageHash)), e.timestampMillis != null && (v.Long ? (n.timestampMillis = v.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? n.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? n.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (n.timestampMillis = new v.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let o = {};
        if (n.defaults)
          if (o.imageHash = "", v.Long) {
            let i = new v.Long(0, 0, !0);
            o.timestampMillis = n.longs === String ? i.toString() : n.longs === Number ? i.toNumber() : i;
          } else
            o.timestampMillis = n.longs === String ? "0" : 0;
        return e.imageHash != null && e.hasOwnProperty("imageHash") && (o.imageHash = e.imageHash), e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? o.timestampMillis = n.longs === String ? String(e.timestampMillis) : e.timestampMillis : o.timestampMillis = n.longs === String ? v.Long.prototype.toString.call(e.timestampMillis) : n.longs === Number ? new v.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.HashedDetectedImageWithTimestamp";
      }, t;
    }(), r.MediaTrackSettings = function() {
      function t(n) {
        if (n)
          for (let o = Object.keys(n), i = 0; i < o.length; ++i)
            n[o[i]] != null && (this[o[i]] = n[o[i]]);
      }
      t.prototype.aspectRatio = null, t.prototype.autoGainControl = null, t.prototype.channelCount = null, t.prototype.deviceId = null, t.prototype.displaySurface = null, t.prototype.echoCancellation = null, t.prototype.facingMode = null, t.prototype.frameRate = null, t.prototype.groupId = null, t.prototype.height = null, t.prototype.noiseSuppression = null, t.prototype.sampleRate = null, t.prototype.sampleSize = null, t.prototype.width = null, t.prototype.deviceName = null;
      let e;
      return Object.defineProperty(t.prototype, "_aspectRatio", {
        get: v.oneOfGetter(e = ["aspectRatio"]),
        set: v.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_autoGainControl", {
        get: v.oneOfGetter(e = ["autoGainControl"]),
        set: v.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_channelCount", {
        get: v.oneOfGetter(e = ["channelCount"]),
        set: v.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceId", {
        get: v.oneOfGetter(e = ["deviceId"]),
        set: v.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_displaySurface", {
        get: v.oneOfGetter(e = ["displaySurface"]),
        set: v.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_echoCancellation", {
        get: v.oneOfGetter(e = ["echoCancellation"]),
        set: v.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_facingMode", {
        get: v.oneOfGetter(e = ["facingMode"]),
        set: v.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_frameRate", {
        get: v.oneOfGetter(e = ["frameRate"]),
        set: v.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_groupId", {
        get: v.oneOfGetter(e = ["groupId"]),
        set: v.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_height", {
        get: v.oneOfGetter(e = ["height"]),
        set: v.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_noiseSuppression", {
        get: v.oneOfGetter(e = ["noiseSuppression"]),
        set: v.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleRate", {
        get: v.oneOfGetter(e = ["sampleRate"]),
        set: v.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleSize", {
        get: v.oneOfGetter(e = ["sampleSize"]),
        set: v.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_width", {
        get: v.oneOfGetter(e = ["width"]),
        set: v.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceName", {
        get: v.oneOfGetter(e = ["deviceName"]),
        set: v.oneOfSetter(e)
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
        let i = o === void 0 ? n.len : n.pos + o, a = new b.dot.v4.MediaTrackSettings();
        for (; n.pos < i; ) {
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
        return typeof n != "object" || n === null ? "object expected" : n.aspectRatio != null && n.hasOwnProperty("aspectRatio") && typeof n.aspectRatio != "number" ? "aspectRatio: number expected" : n.autoGainControl != null && n.hasOwnProperty("autoGainControl") && typeof n.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : n.channelCount != null && n.hasOwnProperty("channelCount") && !v.isInteger(n.channelCount) ? "channelCount: integer expected" : n.deviceId != null && n.hasOwnProperty("deviceId") && !v.isString(n.deviceId) ? "deviceId: string expected" : n.displaySurface != null && n.hasOwnProperty("displaySurface") && !v.isString(n.displaySurface) ? "displaySurface: string expected" : n.echoCancellation != null && n.hasOwnProperty("echoCancellation") && typeof n.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : n.facingMode != null && n.hasOwnProperty("facingMode") && !v.isString(n.facingMode) ? "facingMode: string expected" : n.frameRate != null && n.hasOwnProperty("frameRate") && typeof n.frameRate != "number" ? "frameRate: number expected" : n.groupId != null && n.hasOwnProperty("groupId") && !v.isString(n.groupId) ? "groupId: string expected" : n.height != null && n.hasOwnProperty("height") && !v.isInteger(n.height) ? "height: integer expected" : n.noiseSuppression != null && n.hasOwnProperty("noiseSuppression") && typeof n.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : n.sampleRate != null && n.hasOwnProperty("sampleRate") && !v.isInteger(n.sampleRate) ? "sampleRate: integer expected" : n.sampleSize != null && n.hasOwnProperty("sampleSize") && !v.isInteger(n.sampleSize) ? "sampleSize: integer expected" : n.width != null && n.hasOwnProperty("width") && !v.isInteger(n.width) ? "width: integer expected" : n.deviceName != null && n.hasOwnProperty("deviceName") && !v.isString(n.deviceName) ? "deviceName: string expected" : null;
      }, t.fromObject = function(n) {
        if (n instanceof b.dot.v4.MediaTrackSettings)
          return n;
        let o = new b.dot.v4.MediaTrackSettings();
        return n.aspectRatio != null && (o.aspectRatio = Number(n.aspectRatio)), n.autoGainControl != null && (o.autoGainControl = !!n.autoGainControl), n.channelCount != null && (o.channelCount = n.channelCount | 0), n.deviceId != null && (o.deviceId = String(n.deviceId)), n.displaySurface != null && (o.displaySurface = String(n.displaySurface)), n.echoCancellation != null && (o.echoCancellation = !!n.echoCancellation), n.facingMode != null && (o.facingMode = String(n.facingMode)), n.frameRate != null && (o.frameRate = Number(n.frameRate)), n.groupId != null && (o.groupId = String(n.groupId)), n.height != null && (o.height = n.height | 0), n.noiseSuppression != null && (o.noiseSuppression = !!n.noiseSuppression), n.sampleRate != null && (o.sampleRate = n.sampleRate | 0), n.sampleSize != null && (o.sampleSize = n.sampleSize | 0), n.width != null && (o.width = n.width | 0), n.deviceName != null && (o.deviceName = String(n.deviceName)), o;
      }, t.toObject = function(n, o) {
        o || (o = {});
        let i = {};
        return n.aspectRatio != null && n.hasOwnProperty("aspectRatio") && (i.aspectRatio = o.json && !isFinite(n.aspectRatio) ? String(n.aspectRatio) : n.aspectRatio, o.oneofs && (i._aspectRatio = "aspectRatio")), n.autoGainControl != null && n.hasOwnProperty("autoGainControl") && (i.autoGainControl = n.autoGainControl, o.oneofs && (i._autoGainControl = "autoGainControl")), n.channelCount != null && n.hasOwnProperty("channelCount") && (i.channelCount = n.channelCount, o.oneofs && (i._channelCount = "channelCount")), n.deviceId != null && n.hasOwnProperty("deviceId") && (i.deviceId = n.deviceId, o.oneofs && (i._deviceId = "deviceId")), n.displaySurface != null && n.hasOwnProperty("displaySurface") && (i.displaySurface = n.displaySurface, o.oneofs && (i._displaySurface = "displaySurface")), n.echoCancellation != null && n.hasOwnProperty("echoCancellation") && (i.echoCancellation = n.echoCancellation, o.oneofs && (i._echoCancellation = "echoCancellation")), n.facingMode != null && n.hasOwnProperty("facingMode") && (i.facingMode = n.facingMode, o.oneofs && (i._facingMode = "facingMode")), n.frameRate != null && n.hasOwnProperty("frameRate") && (i.frameRate = o.json && !isFinite(n.frameRate) ? String(n.frameRate) : n.frameRate, o.oneofs && (i._frameRate = "frameRate")), n.groupId != null && n.hasOwnProperty("groupId") && (i.groupId = n.groupId, o.oneofs && (i._groupId = "groupId")), n.height != null && n.hasOwnProperty("height") && (i.height = n.height, o.oneofs && (i._height = "height")), n.noiseSuppression != null && n.hasOwnProperty("noiseSuppression") && (i.noiseSuppression = n.noiseSuppression, o.oneofs && (i._noiseSuppression = "noiseSuppression")), n.sampleRate != null && n.hasOwnProperty("sampleRate") && (i.sampleRate = n.sampleRate, o.oneofs && (i._sampleRate = "sampleRate")), n.sampleSize != null && n.hasOwnProperty("sampleSize") && (i.sampleSize = n.sampleSize, o.oneofs && (i._sampleSize = "sampleSize")), n.width != null && n.hasOwnProperty("width") && (i.width = n.width, o.oneofs && (i._width = "width")), n.deviceName != null && n.hasOwnProperty("deviceName") && (i.deviceName = n.deviceName, o.oneofs && (i._deviceName = "deviceName")), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.MediaTrackSettings";
      }, t;
    }(), r.ImageBitmap = function() {
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
        let o = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.ImageBitmap();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.width = e.int32();
              break;
            }
            case 2: {
              i.height = e.int32();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !v.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !v.isInteger(e.height) ? "height: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof b.dot.v4.ImageBitmap)
          return e;
        let n = new b.dot.v4.ImageBitmap();
        return e.width != null && (n.width = e.width | 0), e.height != null && (n.height = e.height | 0), n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let o = {};
        return n.defaults && (o.width = 0, o.height = 0), e.width != null && e.hasOwnProperty("width") && (o.width = e.width), e.height != null && e.hasOwnProperty("height") && (o.height = e.height), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.ImageBitmap";
      }, t;
    }(), r.CameraProperties = function() {
      function t(n) {
        if (n)
          for (let o = Object.keys(n), i = 0; i < o.length; ++i)
            n[o[i]] != null && (this[o[i]] = n[o[i]]);
      }
      t.prototype.cameraInitFrameResolution = null, t.prototype.cameraProperties = null;
      let e;
      return Object.defineProperty(t.prototype, "_cameraInitFrameResolution", {
        get: v.oneOfGetter(e = ["cameraInitFrameResolution"]),
        set: v.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, o) {
        return o || (o = de.create()), n.cameraInitFrameResolution != null && Object.hasOwnProperty.call(n, "cameraInitFrameResolution") && b.dot.v4.ImageBitmap.encode(n.cameraInitFrameResolution, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.cameraProperties != null && Object.hasOwnProperty.call(n, "cameraProperties") && b.dot.v4.MediaTrackSettings.encode(n.cameraProperties, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(n, o) {
        return this.encode(n, o).ldelim();
      }, t.decode = function(n, o) {
        n instanceof B || (n = B.create(n));
        let i = o === void 0 ? n.len : n.pos + o, a = new b.dot.v4.CameraProperties();
        for (; n.pos < i; ) {
          let s = n.uint32();
          switch (s >>> 3) {
            case 1: {
              a.cameraInitFrameResolution = b.dot.v4.ImageBitmap.decode(n, n.uint32());
              break;
            }
            case 2: {
              a.cameraProperties = b.dot.v4.MediaTrackSettings.decode(n, n.uint32());
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
          let o = b.dot.v4.ImageBitmap.verify(n.cameraInitFrameResolution);
          if (o)
            return "cameraInitFrameResolution." + o;
        }
        if (n.cameraProperties != null && n.hasOwnProperty("cameraProperties")) {
          let o = b.dot.v4.MediaTrackSettings.verify(n.cameraProperties);
          if (o)
            return "cameraProperties." + o;
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof b.dot.v4.CameraProperties)
          return n;
        let o = new b.dot.v4.CameraProperties();
        if (n.cameraInitFrameResolution != null) {
          if (typeof n.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          o.cameraInitFrameResolution = b.dot.v4.ImageBitmap.fromObject(n.cameraInitFrameResolution);
        }
        if (n.cameraProperties != null) {
          if (typeof n.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          o.cameraProperties = b.dot.v4.MediaTrackSettings.fromObject(n.cameraProperties);
        }
        return o;
      }, t.toObject = function(n, o) {
        o || (o = {});
        let i = {};
        return o.defaults && (i.cameraProperties = null), n.cameraInitFrameResolution != null && n.hasOwnProperty("cameraInitFrameResolution") && (i.cameraInitFrameResolution = b.dot.v4.ImageBitmap.toObject(n.cameraInitFrameResolution, o), o.oneofs && (i._cameraInitFrameResolution = "cameraInitFrameResolution")), n.cameraProperties != null && n.hasOwnProperty("cameraProperties") && (i.cameraProperties = b.dot.v4.MediaTrackSettings.toObject(n.cameraProperties, o)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.CameraProperties";
      }, t;
    }(), r.DetectedObject = function() {
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
        ).float(e.faceSize), e.faceCenter != null && Object.hasOwnProperty.call(e, "faceCenter") && b.dot.v4.Point.encode(e.faceCenter, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), e.smallestEdge != null && Object.hasOwnProperty.call(e, "smallestEdge") && n.uint32(
          /* id 7, wireType 5 =*/
          61
        ).float(e.smallestEdge), e.bottomLeft != null && Object.hasOwnProperty.call(e, "bottomLeft") && b.dot.v4.Point.encode(e.bottomLeft, n.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), e.bottomRight != null && Object.hasOwnProperty.call(e, "bottomRight") && b.dot.v4.Point.encode(e.bottomRight, n.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), e.topLeft != null && Object.hasOwnProperty.call(e, "topLeft") && b.dot.v4.Point.encode(e.topLeft, n.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), e.topRight != null && Object.hasOwnProperty.call(e, "topRight") && b.dot.v4.Point.encode(e.topRight, n.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let o = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.DetectedObject();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.brightness = e.float();
              break;
            }
            case 2: {
              i.sharpness = e.float();
              break;
            }
            case 3: {
              i.hotspots = e.float();
              break;
            }
            case 4: {
              i.confidence = e.float();
              break;
            }
            case 5: {
              i.faceSize = e.float();
              break;
            }
            case 6: {
              i.faceCenter = b.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              i.smallestEdge = e.float();
              break;
            }
            case 8: {
              i.bottomLeft = b.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              i.bottomRight = b.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              i.topLeft = b.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              i.topRight = b.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return i;
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
          let n = b.dot.v4.Point.verify(e.faceCenter);
          if (n)
            return "faceCenter." + n;
        }
        if (e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && typeof e.smallestEdge != "number")
          return "smallestEdge: number expected";
        if (e.bottomLeft != null && e.hasOwnProperty("bottomLeft")) {
          let n = b.dot.v4.Point.verify(e.bottomLeft);
          if (n)
            return "bottomLeft." + n;
        }
        if (e.bottomRight != null && e.hasOwnProperty("bottomRight")) {
          let n = b.dot.v4.Point.verify(e.bottomRight);
          if (n)
            return "bottomRight." + n;
        }
        if (e.topLeft != null && e.hasOwnProperty("topLeft")) {
          let n = b.dot.v4.Point.verify(e.topLeft);
          if (n)
            return "topLeft." + n;
        }
        if (e.topRight != null && e.hasOwnProperty("topRight")) {
          let n = b.dot.v4.Point.verify(e.topRight);
          if (n)
            return "topRight." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof b.dot.v4.DetectedObject)
          return e;
        let n = new b.dot.v4.DetectedObject();
        if (e.brightness != null && (n.brightness = Number(e.brightness)), e.sharpness != null && (n.sharpness = Number(e.sharpness)), e.hotspots != null && (n.hotspots = Number(e.hotspots)), e.confidence != null && (n.confidence = Number(e.confidence)), e.faceSize != null && (n.faceSize = Number(e.faceSize)), e.faceCenter != null) {
          if (typeof e.faceCenter != "object")
            throw TypeError(".dot.v4.DetectedObject.faceCenter: object expected");
          n.faceCenter = b.dot.v4.Point.fromObject(e.faceCenter);
        }
        if (e.smallestEdge != null && (n.smallestEdge = Number(e.smallestEdge)), e.bottomLeft != null) {
          if (typeof e.bottomLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomLeft: object expected");
          n.bottomLeft = b.dot.v4.Point.fromObject(e.bottomLeft);
        }
        if (e.bottomRight != null) {
          if (typeof e.bottomRight != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomRight: object expected");
          n.bottomRight = b.dot.v4.Point.fromObject(e.bottomRight);
        }
        if (e.topLeft != null) {
          if (typeof e.topLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.topLeft: object expected");
          n.topLeft = b.dot.v4.Point.fromObject(e.topLeft);
        }
        if (e.topRight != null) {
          if (typeof e.topRight != "object")
            throw TypeError(".dot.v4.DetectedObject.topRight: object expected");
          n.topRight = b.dot.v4.Point.fromObject(e.topRight);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let o = {};
        return n.defaults && (o.brightness = 0, o.sharpness = 0, o.hotspots = 0, o.confidence = 0, o.faceSize = 0, o.faceCenter = null, o.smallestEdge = 0, o.bottomLeft = null, o.bottomRight = null, o.topLeft = null, o.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (o.brightness = n.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (o.sharpness = n.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (o.hotspots = n.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (o.confidence = n.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (o.faceSize = n.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (o.faceCenter = b.dot.v4.Point.toObject(e.faceCenter, n)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (o.smallestEdge = n.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (o.bottomLeft = b.dot.v4.Point.toObject(e.bottomLeft, n)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (o.bottomRight = b.dot.v4.Point.toObject(e.bottomRight, n)), e.topLeft != null && e.hasOwnProperty("topLeft") && (o.topLeft = b.dot.v4.Point.toObject(e.topLeft, n)), e.topRight != null && e.hasOwnProperty("topRight") && (o.topRight = b.dot.v4.Point.toObject(e.topRight, n)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DetectedObject";
      }, t;
    }(), r.Point = function() {
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
        let o = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.Point();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.x = e.float();
              break;
            }
            case 2: {
              i.y = e.float();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.x != null && e.hasOwnProperty("x") && typeof e.x != "number" ? "x: number expected" : e.y != null && e.hasOwnProperty("y") && typeof e.y != "number" ? "y: number expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof b.dot.v4.Point)
          return e;
        let n = new b.dot.v4.Point();
        return e.x != null && (n.x = Number(e.x)), e.y != null && (n.y = Number(e.y)), n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let o = {};
        return n.defaults && (o.x = 0, o.y = 0), e.x != null && e.hasOwnProperty("x") && (o.x = n.json && !isFinite(e.x) ? String(e.x) : e.x), e.y != null && e.hasOwnProperty("y") && (o.y = n.json && !isFinite(e.y) ? String(e.y) : e.y), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Point";
      }, t;
    }(), r.FaceContent = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = de.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && b.dot.Image.encode(e.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && b.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let o = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.FaceContent();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.image = b.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              i.metadata = b.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let n = b.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = b.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof b.dot.v4.FaceContent)
          return e;
        let n = new b.dot.v4.FaceContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.FaceContent.image: object expected");
          n.image = b.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.FaceContent.metadata: object expected");
          n.metadata = b.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let o = {};
        return n.defaults && (o.image = null, o.metadata = null), e.image != null && e.hasOwnProperty("image") && (o.image = b.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = b.dot.v4.Metadata.toObject(e.metadata, n)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.FaceContent";
      }, t;
    }(), r.DocumentContent = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = de.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && b.dot.Image.encode(e.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && b.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let o = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.DocumentContent();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.image = b.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              i.metadata = b.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let n = b.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = b.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof b.dot.v4.DocumentContent)
          return e;
        let n = new b.dot.v4.DocumentContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.DocumentContent.image: object expected");
          n.image = b.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.DocumentContent.metadata: object expected");
          n.metadata = b.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let o = {};
        return n.defaults && (o.image = null, o.metadata = null), e.image != null && e.hasOwnProperty("image") && (o.image = b.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = b.dot.v4.Metadata.toObject(e.metadata, n)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DocumentContent";
      }, t;
    }(), r.Blob = function() {
      function t(n) {
        if (n)
          for (let o = Object.keys(n), i = 0; i < o.length; ++i)
            n[o[i]] != null && (this[o[i]] = n[o[i]]);
      }
      t.prototype.documentContent = null, t.prototype.eyeGazeLivenessContent = null, t.prototype.faceContent = null, t.prototype.magnifeyeLivenessContent = null, t.prototype.smileLivenessContent = null;
      let e;
      return Object.defineProperty(t.prototype, "blob", {
        get: v.oneOfGetter(e = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent"]),
        set: v.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, o) {
        return o || (o = de.create()), n.documentContent != null && Object.hasOwnProperty.call(n, "documentContent") && b.dot.v4.DocumentContent.encode(n.documentContent, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.faceContent != null && Object.hasOwnProperty.call(n, "faceContent") && b.dot.v4.FaceContent.encode(n.faceContent, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(n, "magnifeyeLivenessContent") && b.dot.v4.MagnifEyeLivenessContent.encode(n.magnifeyeLivenessContent, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.smileLivenessContent != null && Object.hasOwnProperty.call(n, "smileLivenessContent") && b.dot.v4.SmileLivenessContent.encode(n.smileLivenessContent, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), n.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(n, "eyeGazeLivenessContent") && b.dot.v4.EyeGazeLivenessContent.encode(n.eyeGazeLivenessContent, o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(n, o) {
        return this.encode(n, o).ldelim();
      }, t.decode = function(n, o) {
        n instanceof B || (n = B.create(n));
        let i = o === void 0 ? n.len : n.pos + o, a = new b.dot.v4.Blob();
        for (; n.pos < i; ) {
          let s = n.uint32();
          switch (s >>> 3) {
            case 1: {
              a.documentContent = b.dot.v4.DocumentContent.decode(n, n.uint32());
              break;
            }
            case 5: {
              a.eyeGazeLivenessContent = b.dot.v4.EyeGazeLivenessContent.decode(n, n.uint32());
              break;
            }
            case 2: {
              a.faceContent = b.dot.v4.FaceContent.decode(n, n.uint32());
              break;
            }
            case 3: {
              a.magnifeyeLivenessContent = b.dot.v4.MagnifEyeLivenessContent.decode(n, n.uint32());
              break;
            }
            case 4: {
              a.smileLivenessContent = b.dot.v4.SmileLivenessContent.decode(n, n.uint32());
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
            let i = b.dot.v4.DocumentContent.verify(n.documentContent);
            if (i)
              return "documentContent." + i;
          }
        }
        if (n.eyeGazeLivenessContent != null && n.hasOwnProperty("eyeGazeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let i = b.dot.v4.EyeGazeLivenessContent.verify(n.eyeGazeLivenessContent);
            if (i)
              return "eyeGazeLivenessContent." + i;
          }
        }
        if (n.faceContent != null && n.hasOwnProperty("faceContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let i = b.dot.v4.FaceContent.verify(n.faceContent);
            if (i)
              return "faceContent." + i;
          }
        }
        if (n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let i = b.dot.v4.MagnifEyeLivenessContent.verify(n.magnifeyeLivenessContent);
            if (i)
              return "magnifeyeLivenessContent." + i;
          }
        }
        if (n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let i = b.dot.v4.SmileLivenessContent.verify(n.smileLivenessContent);
            if (i)
              return "smileLivenessContent." + i;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof b.dot.v4.Blob)
          return n;
        let o = new b.dot.v4.Blob();
        if (n.documentContent != null) {
          if (typeof n.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          o.documentContent = b.dot.v4.DocumentContent.fromObject(n.documentContent);
        }
        if (n.eyeGazeLivenessContent != null) {
          if (typeof n.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          o.eyeGazeLivenessContent = b.dot.v4.EyeGazeLivenessContent.fromObject(n.eyeGazeLivenessContent);
        }
        if (n.faceContent != null) {
          if (typeof n.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          o.faceContent = b.dot.v4.FaceContent.fromObject(n.faceContent);
        }
        if (n.magnifeyeLivenessContent != null) {
          if (typeof n.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          o.magnifeyeLivenessContent = b.dot.v4.MagnifEyeLivenessContent.fromObject(n.magnifeyeLivenessContent);
        }
        if (n.smileLivenessContent != null) {
          if (typeof n.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          o.smileLivenessContent = b.dot.v4.SmileLivenessContent.fromObject(n.smileLivenessContent);
        }
        return o;
      }, t.toObject = function(n, o) {
        o || (o = {});
        let i = {};
        return n.documentContent != null && n.hasOwnProperty("documentContent") && (i.documentContent = b.dot.v4.DocumentContent.toObject(n.documentContent, o), o.oneofs && (i.blob = "documentContent")), n.faceContent != null && n.hasOwnProperty("faceContent") && (i.faceContent = b.dot.v4.FaceContent.toObject(n.faceContent, o), o.oneofs && (i.blob = "faceContent")), n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent") && (i.magnifeyeLivenessContent = b.dot.v4.MagnifEyeLivenessContent.toObject(n.magnifeyeLivenessContent, o), o.oneofs && (i.blob = "magnifeyeLivenessContent")), n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent") && (i.smileLivenessContent = b.dot.v4.SmileLivenessContent.toObject(n.smileLivenessContent, o), o.oneofs && (i.blob = "smileLivenessContent")), n.eyeGazeLivenessContent != null && n.hasOwnProperty("eyeGazeLivenessContent") && (i.eyeGazeLivenessContent = b.dot.v4.EyeGazeLivenessContent.toObject(n.eyeGazeLivenessContent, o), o.oneofs && (i.blob = "eyeGazeLivenessContent")), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.Blob";
      }, t;
    }(), r.EyeGazeLivenessContent = function() {
      function t(e) {
        if (this.segments = [], e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
      }
      return t.prototype.segments = v.emptyArray, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = de.create()), e.segments != null && e.segments.length)
          for (let o = 0; o < e.segments.length; ++o)
            b.dot.v4.EyeGazeLivenessSegment.encode(e.segments[o], n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && b.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let o = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.EyeGazeLivenessContent();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.segments && i.segments.length || (i.segments = []), i.segments.push(b.dot.v4.EyeGazeLivenessSegment.decode(e, e.uint32()));
              break;
            }
            case 2: {
              i.metadata = b.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.segments != null && e.hasOwnProperty("segments")) {
          if (!Array.isArray(e.segments))
            return "segments: array expected";
          for (let n = 0; n < e.segments.length; ++n) {
            let o = b.dot.v4.EyeGazeLivenessSegment.verify(e.segments[n]);
            if (o)
              return "segments." + o;
          }
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = b.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof b.dot.v4.EyeGazeLivenessContent)
          return e;
        let n = new b.dot.v4.EyeGazeLivenessContent();
        if (e.segments) {
          if (!Array.isArray(e.segments))
            throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: array expected");
          n.segments = [];
          for (let o = 0; o < e.segments.length; ++o) {
            if (typeof e.segments[o] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            n.segments[o] = b.dot.v4.EyeGazeLivenessSegment.fromObject(e.segments[o]);
          }
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.metadata: object expected");
          n.metadata = b.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let o = {};
        if ((n.arrays || n.defaults) && (o.segments = []), n.defaults && (o.metadata = null), e.segments && e.segments.length) {
          o.segments = [];
          for (let i = 0; i < e.segments.length; ++i)
            o.segments[i] = b.dot.v4.EyeGazeLivenessSegment.toObject(e.segments[i], n);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = b.dot.v4.Metadata.toObject(e.metadata, n)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.EyeGazeLivenessContent";
      }, t;
    }(), r.EyeGazeLivenessSegment = function() {
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
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && b.dot.Image.encode(e.image, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let o = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.EyeGazeLivenessSegment();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.corner = e.int32();
              break;
            }
            case 2: {
              i.image = b.dot.Image.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return i;
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
          let n = b.dot.Image.verify(e.image);
          if (n)
            return "image." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof b.dot.v4.EyeGazeLivenessSegment)
          return e;
        let n = new b.dot.v4.EyeGazeLivenessSegment();
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
          n.image = b.dot.Image.fromObject(e.image);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let o = {};
        return n.defaults && (o.corner = n.enums === String ? "TOP_LEFT" : 0, o.image = null), e.corner != null && e.hasOwnProperty("corner") && (o.corner = n.enums === String ? b.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : b.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (o.image = b.dot.Image.toObject(e.image, n)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.EyeGazeLivenessSegment";
      }, t;
    }(), r.EyeGazeLivenessCorner = function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "TOP_LEFT"] = 0, e[t[1] = "TOP_RIGHT"] = 1, e[t[2] = "BOTTOM_RIGHT"] = 2, e[t[3] = "BOTTOM_LEFT"] = 3, e;
    }(), r.SmileLivenessContent = function() {
      function t(e) {
        if (e)
          for (let n = Object.keys(e), o = 0; o < n.length; ++o)
            e[n[o]] != null && (this[n[o]] = e[n[o]]);
      }
      return t.prototype.neutralExpressionFaceImage = null, t.prototype.smileExpressionFaceImage = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = de.create()), e.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(e, "neutralExpressionFaceImage") && b.dot.Image.encode(e.neutralExpressionFaceImage, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.smileExpressionFaceImage != null && Object.hasOwnProperty.call(e, "smileExpressionFaceImage") && b.dot.Image.encode(e.smileExpressionFaceImage, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && b.dot.v4.Metadata.encode(e.metadata, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let o = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.SmileLivenessContent();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              i.neutralExpressionFaceImage = b.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              i.smileExpressionFaceImage = b.dot.Image.decode(e, e.uint32());
              break;
            }
            case 3: {
              i.metadata = b.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(e) {
        return e instanceof B || (e = new B(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage")) {
          let n = b.dot.Image.verify(e.neutralExpressionFaceImage);
          if (n)
            return "neutralExpressionFaceImage." + n;
        }
        if (e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage")) {
          let n = b.dot.Image.verify(e.smileExpressionFaceImage);
          if (n)
            return "smileExpressionFaceImage." + n;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let n = b.dot.v4.Metadata.verify(e.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof b.dot.v4.SmileLivenessContent)
          return e;
        let n = new b.dot.v4.SmileLivenessContent();
        if (e.neutralExpressionFaceImage != null) {
          if (typeof e.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          n.neutralExpressionFaceImage = b.dot.Image.fromObject(e.neutralExpressionFaceImage);
        }
        if (e.smileExpressionFaceImage != null) {
          if (typeof e.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.smileExpressionFaceImage: object expected");
          n.smileExpressionFaceImage = b.dot.Image.fromObject(e.smileExpressionFaceImage);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.metadata: object expected");
          n.metadata = b.dot.v4.Metadata.fromObject(e.metadata);
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let o = {};
        return n.defaults && (o.neutralExpressionFaceImage = null, o.smileExpressionFaceImage = null, o.metadata = null), e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage") && (o.neutralExpressionFaceImage = b.dot.Image.toObject(e.neutralExpressionFaceImage, n)), e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage") && (o.smileExpressionFaceImage = b.dot.Image.toObject(e.smileExpressionFaceImage, n)), e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = b.dot.v4.Metadata.toObject(e.metadata, n)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.SmileLivenessContent";
      }, t;
    }(), r;
  }(), x.Image = function() {
    function r(t) {
      if (t)
        for (let e = Object.keys(t), n = 0; n < e.length; ++n)
          t[e[n]] != null && (this[e[n]] = t[e[n]]);
    }
    return r.prototype.bytes = v.newBuffer([]), r.create = function(t) {
      return new r(t);
    }, r.encode = function(t, e) {
      return e || (e = de.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, r.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, r.decode = function(t, e) {
      t instanceof B || (t = B.create(t));
      let n = e === void 0 ? t.len : t.pos + e, o = new b.dot.Image();
      for (; t.pos < n; ) {
        let i = t.uint32();
        switch (i >>> 3) {
          case 1: {
            o.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(i & 7);
            break;
        }
      }
      return o;
    }, r.decodeDelimited = function(t) {
      return t instanceof B || (t = new B(t)), this.decode(t, t.uint32());
    }, r.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || v.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, r.fromObject = function(t) {
      if (t instanceof b.dot.Image)
        return t;
      let e = new b.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? v.base64.decode(t.bytes, e.bytes = v.newBuffer(v.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, r.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      return e.defaults && (e.bytes === String ? n.bytes = "" : (n.bytes = [], e.bytes !== Array && (n.bytes = v.newBuffer(n.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (n.bytes = e.bytes === String ? v.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), n;
    }, r.prototype.toJSON = function() {
      return this.constructor.toObject(this, ne.util.toJSONOptions);
    }, r.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Image";
    }, r;
  }(), x.Int32List = function() {
    function r(t) {
      if (this.items = [], t)
        for (let e = Object.keys(t), n = 0; n < e.length; ++n)
          t[e[n]] != null && (this[e[n]] = t[e[n]]);
    }
    return r.prototype.items = v.emptyArray, r.create = function(t) {
      return new r(t);
    }, r.encode = function(t, e) {
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
    }, r.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, r.decode = function(t, e) {
      t instanceof B || (t = B.create(t));
      let n = e === void 0 ? t.len : t.pos + e, o = new b.dot.Int32List();
      for (; t.pos < n; ) {
        let i = t.uint32();
        switch (i >>> 3) {
          case 1: {
            if (o.items && o.items.length || (o.items = []), (i & 7) === 2) {
              let a = t.uint32() + t.pos;
              for (; t.pos < a; )
                o.items.push(t.int32());
            } else
              o.items.push(t.int32());
            break;
          }
          default:
            t.skipType(i & 7);
            break;
        }
      }
      return o;
    }, r.decodeDelimited = function(t) {
      return t instanceof B || (t = new B(t)), this.decode(t, t.uint32());
    }, r.verify = function(t) {
      if (typeof t != "object" || t === null)
        return "object expected";
      if (t.items != null && t.hasOwnProperty("items")) {
        if (!Array.isArray(t.items))
          return "items: array expected";
        for (let e = 0; e < t.items.length; ++e)
          if (!v.isInteger(t.items[e]))
            return "items: integer[] expected";
      }
      return null;
    }, r.fromObject = function(t) {
      if (t instanceof b.dot.Int32List)
        return t;
      let e = new b.dot.Int32List();
      if (t.items) {
        if (!Array.isArray(t.items))
          throw TypeError(".dot.Int32List.items: array expected");
        e.items = [];
        for (let n = 0; n < t.items.length; ++n)
          e.items[n] = t.items[n] | 0;
      }
      return e;
    }, r.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      if ((e.arrays || e.defaults) && (n.items = []), t.items && t.items.length) {
        n.items = [];
        for (let o = 0; o < t.items.length; ++o)
          n.items[o] = t.items[o];
      }
      return n;
    }, r.prototype.toJSON = function() {
      return this.constructor.toObject(this, ne.util.toJSONOptions);
    }, r.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Int32List";
    }, r;
  }(), x.Platform = function() {
    const r = {}, t = Object.create(r);
    return t[r[0] = "WEB"] = 0, t[r[1] = "ANDROID"] = 1, t[r[2] = "IOS"] = 2, t;
  }(), x.DigestWithTimestamp = function() {
    function r(t) {
      if (t)
        for (let e = Object.keys(t), n = 0; n < e.length; ++n)
          t[e[n]] != null && (this[e[n]] = t[e[n]]);
    }
    return r.prototype.digest = v.newBuffer([]), r.prototype.timestampMillis = v.Long ? v.Long.fromBits(0, 0, !0) : 0, r.create = function(t) {
      return new r(t);
    }, r.encode = function(t, e) {
      return e || (e = de.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.digest), t.timestampMillis != null && Object.hasOwnProperty.call(t, "timestampMillis") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).uint64(t.timestampMillis), e;
    }, r.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, r.decode = function(t, e) {
      t instanceof B || (t = B.create(t));
      let n = e === void 0 ? t.len : t.pos + e, o = new b.dot.DigestWithTimestamp();
      for (; t.pos < n; ) {
        let i = t.uint32();
        switch (i >>> 3) {
          case 1: {
            o.digest = t.bytes();
            break;
          }
          case 2: {
            o.timestampMillis = t.uint64();
            break;
          }
          default:
            t.skipType(i & 7);
            break;
        }
      }
      return o;
    }, r.decodeDelimited = function(t) {
      return t instanceof B || (t = new B(t)), this.decode(t, t.uint32());
    }, r.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || v.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !v.isInteger(t.timestampMillis) && !(t.timestampMillis && v.isInteger(t.timestampMillis.low) && v.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, r.fromObject = function(t) {
      if (t instanceof b.dot.DigestWithTimestamp)
        return t;
      let e = new b.dot.DigestWithTimestamp();
      return t.digest != null && (typeof t.digest == "string" ? v.base64.decode(t.digest, e.digest = v.newBuffer(v.base64.length(t.digest)), 0) : t.digest.length >= 0 && (e.digest = t.digest)), t.timestampMillis != null && (v.Long ? (e.timestampMillis = v.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new v.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, r.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      if (e.defaults)
        if (e.bytes === String ? n.digest = "" : (n.digest = [], e.bytes !== Array && (n.digest = v.newBuffer(n.digest))), v.Long) {
          let o = new v.Long(0, 0, !0);
          n.timestampMillis = e.longs === String ? o.toString() : e.longs === Number ? o.toNumber() : o;
        } else
          n.timestampMillis = e.longs === String ? "0" : 0;
      return t.digest != null && t.hasOwnProperty("digest") && (n.digest = e.bytes === String ? v.base64.encode(t.digest, 0, t.digest.length) : e.bytes === Array ? Array.prototype.slice.call(t.digest) : t.digest), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? n.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : n.timestampMillis = e.longs === String ? v.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new v.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), n;
    }, r.prototype.toJSON = function() {
      return this.constructor.toObject(this, ne.util.toJSONOptions);
    }, r.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, r;
  }(), x;
})();
async function Po(x) {
  const { Image: r } = C0, t = await x.arrayBuffer(), e = new Uint8Array(t), n = {};
  n.bytes = e;
  const o = r.verify(n);
  if (o) throw Error(o);
  const i = {};
  return i.bytes = e, r.create(i);
}
async function rg(x) {
  const { v4: { Metadata: r } } = C0, t = { ...x };
  t.platform = C0.Platform.WEB;
  const e = t, n = r.verify(e);
  if (n) throw Error(n);
  return r.create(e);
}
async function og(x) {
  const { Content: r } = C0, { iv: t, key: e, message: n } = await E1(x), o = { token: new Uint8Array(e), iv: t, schemaVersion: gl, bytes: new Uint8Array(n) }, i = r.verify(o);
  if (i) throw Error(i);
  const a = r.create(o);
  return r.encode(a).finish();
}
function ig({ documentContent: x, faceContent: r, magnifeyeLivenessContent: t, smileLivenessContent: e }) {
  const { Blob: n } = C0.v4, o = {};
  o.documentContent = x, o.faceContent = r, o.magnifeyeLivenessContent = t, o.smileLivenessContent = e;
  const i = o, a = n.verify(i);
  if (a) throw Error(a);
  const s = n.create(i);
  return n.encode(s).finish();
}
async function PI(x, r) {
  const { FaceContent: t } = C0.v4, e = await Po(x), n = await rg(r), o = {};
  o.image = e, o.metadata = n;
  const i = o, a = t.verify(i);
  if (a) throw Error(a);
  const s = t.create(i), c = {};
  return c.faceContent = s, ig(c);
}
async function VI(x, r) {
  const t = await PI(x, r);
  return og(t);
}
const TI = ({ onPhotoTakenInternal: x }) => {
  const { redfin: r, sunfish: t } = ei(), { analytics: e } = sc(), { appState: n, freemiumOverlayState: o } = $0(), { faceCameraOptions: i } = pc(), { cameraFacing: a, onPhotoTaken: s, sessionToken: c, thresholds: l, wasmDirectoryPath: g } = i, { controller: h } = CI(l, g), u = Y0(
    ({ content: Z, controller: _, imageData: Ie, webMetadata: U }) => {
      Yl(cc.FACE, _.getCandidateSelectionImages()), x == null || x({ cameraProperties: U }), s(Ie, Z);
    },
    [x, s]
  ), { cameraResolution: C, cameraService: p, detectionDetails: A, videoRef: d } = y1({
    analytics: e,
    cameraFacing: a,
    controller: h,
    sessionToken: c,
    createProtoMessage: VI,
    onPhotoTaken: u
  }), { shouldMirror: W } = a1(jt.CONTROL, p);
  Xl(jt.CAMERA_PROPS_CHANGED, {
    cameraResolution: C,
    shouldMirror: W
  }), we(() => () => {
    bn.getInstance().restart();
  }, []);
  const k = o !== Rx.HIDDEN && r !== Io.Higher && C, N = o === Rx.VISIBLE, Y = t, X = C && t && n === Bt.RUNNING;
  return /* @__PURE__ */ O(At, { children: [
    k && /* @__PURE__ */ O(O1, { fullOverlay: N, resolution: C }),
    /* @__PURE__ */ O(Pu, { ref: d, $isImageMirror: W, $isVisible: Y, autoPlay: !0, muted: !0, playsInline: !0 }),
    X && /* @__PURE__ */ O(
      w1,
      {
        redfin: r,
        cameraResolution: C,
        detectionDetails: A,
        isImageMirror: W
      }
    )
  ] });
}, EI = ({
  onPhotoTakenInternal: x,
  ...r
}) => /* @__PURE__ */ O(Gl, { cameraOptions: r, children: /* @__PURE__ */ O(TI, { onPhotoTakenInternal: x }) }), LI = ({ children: x }) => {
  const r = Nt(null);
  return l1(r, jt.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ O(Ru, { ref: r, children: x });
};
async function NI(x, r, t) {
  const { SmileLivenessContent: e } = C0.v4, n = await Po(x), o = await Po(r), i = await rg(t), a = {};
  a.neutralExpressionFaceImage = n, a.smileExpressionFaceImage = o, a.metadata = i;
  const s = a, c = e.verify(s);
  if (c) throw Error(c);
  const l = e.create(s), g = {};
  return g.smileLivenessContent = l, ig(g);
}
async function DI(x, r, t) {
  const e = await NI(x, r, t);
  return og(e);
}
const ag = {};
ag.max = 0.15;
const Vo = {};
Vo.confidence = 0.3, Vo.status = ag;
const sg = {};
sg.mouth = Vo;
const cg = {};
cg.min = 0.35;
const To = {};
To.confidence = 0.3, To.status = cg;
const n0 = {};
n0.brightnessHighThreshold = 1, n0.brightnessLowThreshold = -(229 * 33 + 9269 + -5 * 3365), n0.sharpnessThreshold = -(-5154 + 849 * -3 + 7702), n0.outOfBoundsThreshold = -1, n0.minFaceSizeRatio = 0.1, n0.mouth = To;
const FI = { [R0.NEUTRAL]: sg, [R0.SMILE]: n0 }, YI = FI;
function XI(x, r) {
  var t = { ...YI[x.value], ...r };
  return t;
}
const MI = ({
  licensePath: x,
  onComplete: r,
  onError: t,
  sessionToken: e,
  thresholds: n,
  wasmDirectoryPath: o
}) => {
  const { analytics: i } = sc(), { handleAppStateChange: a, handleError: s } = Nu(), c = V0(R0.NEUTRAL), l = V0(null), g = V0(null), h = V0(null);
  function u(W) {
    c.value = W, Wo(kx.STATUS_CHANGED, { phase: W });
  }
  function C(W) {
    l.value = W, u(R0.SMILE), a(d0.RUNNING);
  }
  async function p(W) {
    g.value = W;
    try {
      if (!l.value || !g.value)
        throw new xe("Missing face data");
      const k = {
        sessionToken: e,
        web: h.value
      }, N = await DI(
        l.value.image,
        g.value.image,
        k
      ), Y = [l.value, g.value];
      r(Y, N), i == null || i.trackLivenessProcess(Y), a(d0.DONE);
    } catch (k) {
      k instanceof Error && s(xe.fromError(k));
      return;
    }
  }
  function A(W) {
    h.value = wl(h.value, W.cameraProperties);
  }
  const d = {
    [R0.NEUTRAL]: C,
    [R0.SMILE]: p
  };
  return /* @__PURE__ */ O(LI, { children: /* @__PURE__ */ O(
    EI,
    {
      licensePath: x,
      onError: t,
      onPhotoTaken: d[c.value],
      onPhotoTakenInternal: A,
      thresholds: XI(c, n),
      wasmDirectoryPath: o
    }
  ) });
};
function jI({ initAppState: x }) {
  const [r, t] = et(x), [e, n] = et(), [o, i] = et(!1), a = {};
  return a.appState = r, a.setAppState = t, a.error = e, a.setError = n, a.isCameraReady = o, a.setIsCameraReady = i, a;
}
function JI(x) {
  return x !== d0.RUNNING && x !== d0.WAITING ? Rx.VISIBLE : Rx.VISIBLE_WITH_MASK;
}
function _I({ onError: x }) {
  const { appState: r, error: t, isCameraReady: e, setAppState: n, setError: o, setIsCameraReady: i } = jI({
    initAppState: d0.LOADING
  }), a = JI(r), s = Y0(
    (l) => {
      Wo(kx.STATUS_CHANGED, { state: d0.ERROR, error: l }), i(!1), x(l), o(l), n(d0.ERROR);
    },
    [x, i, o, n]
  ), c = Y0(
    (l) => {
      n(l), Wo(kx.STATUS_CHANGED, { state: l });
    },
    [n]
  );
  return {
    appState: r,
    freemiumOverlayState: a,
    isCameraReady: e,
    setIsCameraReady: i,
    handleAppStateChange: c,
    handleError: s,
    error: t
  };
}
var gg = ((x) => (x.AUTO_CAPTURE = "auto-capture", x))(gg || {});
class QI {
  constructor() {
    M(this, "appKey", "");
    M(this, "deviceId", "");
  }
  async countlyFetch(r) {
    if (!this.appKey || !this.deviceId) return;
    const t = {};
    t.Accept = "application/json";
    const e = {};
    e.method = "GET", e.headers = t;
    const n = e, o = "https://innovatrics.count.ly/i?", i = {};
    i.app_key = this.appKey, i.device_id = this.deviceId;
    const a = ix(i);
    await fetch("" + o + a + "&" + r, n);
  }
  async init(r, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = r;
    const e = { _app_version: Sc() }, n = { organization: wc(window.location.href) }, o = ix({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(n) });
    await this.countlyFetch(o);
  }
  async endSession() {
    const r = {};
    r.end_session = "1";
    const t = ix(r);
    await this.countlyFetch(t);
  }
  async sendAutoCaptureEvent(r, t) {
    const e = {};
    e.key = gg.AUTO_CAPTURE, e.count = 1, e.dur = t, e.segmentation = r;
    const n = [e], o = ix({ events: JSON.stringify(n) });
    await this.countlyFetch(o);
  }
}
const cx = new QI();
function UI() {
  const [x] = window.crypto.getRandomValues(new Uint32Array(1));
  return x.toString(16);
}
function zI() {
  const x = sessionStorage.getItem("dot-user-id");
  if (x) return x;
  const r = UI();
  return sessionStorage.setItem("dot-user-id", r), r;
}
function qI(x, r) {
  return r ? r === "user" ? "Front Camera" : "Back Camera" : x;
}
function $I(x) {
  return x > -5567 * -1 + 4914 + 1 * -10421 ? ">1m" : x > -1889 * 5 + 257 * 6 + 7948 ? ">45" : x > 13 * -69 + 5241 * -1 + 3 * 2056 ? ">30" : "" + x;
}
const e2 = (x) => Math.round(x / 500) * 500 / 1e3, ts = (x) => x ? x <= -830 * 5 + -6204 + 19 * 545 ? Math.round(x * (-7 * 1301 + 8412 + 715)) / (-2 * -2715 + 3906 + -9316) : Math.round(x / (-98 * -2 + -3 * -2458 + -7520)) * (2695 + 5 * -529) : 2477 * 3 + 405 * -16 + 951 * -1, t2 = (x) => Math.round(x * (1 * 2605 + 2046 + -4649)) / 2;
class n2 {
  constructor() {
    M(this, "countly", cx);
  }
  createSegmentation(r) {
    return { appVersion: Sc(), ...r };
  }
  init(r) {
    if (n1()) return;
    const t = zI();
    cx.init(t, r);
  }
  endSession() {
    cx.endSession();
  }
  walleye(r, t) {
    const e = {};
    e.nocturne = r, e.customer = t;
    const n = this.createSegmentation(e);
    cx.sendAutoCaptureEvent(n);
  }
}
class x2 extends n2 {
  constructor() {
    super(...arguments);
    M(this, "captureProcessAnalytics", []);
  }
  trackCaptureProcess(t) {
    this.captureProcessAnalytics.push(t);
  }
}
class r2 extends x2 {
  trackLivenessProcess(r) {
    var l, g, h, u, C, p;
    if (!r.length || !this.captureProcessAnalytics.length) return;
    const [t, e] = r, [n, o] = this.captureProcessAnalytics, i = t2(n.averageFps + (o == null ? void 0 : o.averageFps)) / (-8231 + -76 * 77 + 1565 * 9), a = e2(n.captureProcessDurationInMs), s = 15 * 391 + 1590 + -6 * 1242, c = this.createSegmentation({ faceSize: ts((l = e.data.detection) == null ? void 0 : l.faceSize), confidence: ts((g = t.data.detection) == null ? void 0 : g.confidence), imageResolution: ((u = (h = t.data) == null ? void 0 : h["imageResolution"]) == null ? void 0 : u.width) + "x" + ((p = (C = t.data) == null ? void 0 : C["imageResolution"]) == null ? void 0 : p.height), averageFps: i, captureTimeNeutral: $I(a), captureTimeSmile: "" + s, camera: qI(n == null ? void 0 : n.deviceName, n.facingMode), instructionSet: n.instructionSet });
    this.countly.sendAutoCaptureEvent(c, a + s);
  }
}
const o2 = new r2(), i2 = ({ props: x }) => x ? /* @__PURE__ */ O(Bu, { target: x.styleTarget, children: /* @__PURE__ */ O(
  _u,
  {
    licensePath: x.licensePath,
    bramble: yo.getInstance(),
    wasmDirectoryPath: x.wasmDirectoryPath,
    children: /* @__PURE__ */ O(zu, { analytics: o2, appKey: "d64319129bb0ee02eccfab418edba9629a97d6b6", children: /* @__PURE__ */ O(
      Lu,
      {
        value: _I({
          onError: x.onError
        }),
        children: /* @__PURE__ */ O(ac, { children: /* @__PURE__ */ O(MI, { ...x }) })
      }
    ) })
  }
) }) : null;
Eg(i2, "x-dot-smile-liveness", ["props"]);
